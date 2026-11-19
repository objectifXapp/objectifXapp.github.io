// Onglets Progrès et Mon bac (dates des épreuves, simulateur).
import { VIEWS, ACTIONS, ico, esc, barre, pct, virgule, dateLongue, pluriel, tete } from './ui.js';
import { DATES } from './data.js';
import {
  state, save, today, addDays, lundi, diff, CONTENU, mesMatieres, aPreparer, avancementMatiere, avancement, maitrise, seancesSemaine,
  objectifSemaine, serie, bilan, cartesMatiere, mesEpreuves, planning, seancesRestantes, matieresCC, periodes, moyAnnee, ccMoyennes,
} from './store.js';
import { nom, refresh, resumeEpreuve, CHANGES, INPUTS } from './reviser.js';

// ---------- Progrès ----------
VIEWS.progres = () => {
  const ids = mesMatieres().filter(id => CONTENU.has(id));
  let chaps = 0, faits = 0;
  for (const id of ids) for (const c of CONTENU.get(id).matiere.chapitres) { chaps++; if (maitrise(c.id)) faits++; }
  const cartes = Object.values(state.srs).filter(s => s.int >= 1).length;
  const quiz = Object.values(state.quiz);
  const moyQ = quiz.length ? quiz.reduce((a, q) => a + q.best, 0) / quiz.length : 0;
  const min = state.seances.reduce((a, s) => a + (s.min || 0), 0);
  // 12 dernières semaines, un carré par semaine
  const sem = [];
  for (let i = 11; i >= 0; i--) { const l = addDays(lundi(today()), -7 * i); sem.push({ l, n: seancesSemaine(l).length }); }
  const obj = objectifSemaine();
  return `<div class="page">
    <h1 class="titre">Progrès</h1>
    <div class="geant">${faits}<i>.</i></div>
    <p class="sous"><b>${faits > 1 ? 'chapitres maîtrisés' : 'chapitre maîtrisé'}</b> sur ${chaps}. Un chapitre est maîtrisé quand sa fiche est lue, ses cartes sues et son quiz réussi.</p>
    <div class="bento">
      <div class="case large"><div style="display:flex;justify-content:space-between"><div class="eti">Tes semaines</div><div class="eti fort">${pluriel(serie(), 'semaine', 'semaines')} d'affilée</div></div>
        <div class="points">${sem.map(s => `<i class="${s.n >= obj ? 'ok' : s.n ? 'moitie' : ''} ${s.l === lundi(today()) ? 'cette' : ''}" title="${s.n} séance(s)"></i>`).join('')}</div>
        <div class="petit">Objectif : ${pluriel(obj, 'séance', 'séances')} par semaine. <a href="#reglages">Changer</a></div></div>
      <div class="case"><div class="eti">Cartes sues</div><div class="gros">${cartes}</div></div>
      <div class="case"><div class="eti">Quiz</div><div class="gros">${quiz.length ? Math.round(moyQ * 100) : '–'}<small>${quiz.length ? '%' : ''}</small></div><div class="petit">${quiz.length ? 'de réussite moyenne' : 'aucun fait'}</div></div>
      <div class="case"><div class="eti">Séances</div><div class="gros">${state.seances.length}</div></div>
      <div class="case"><div class="eti">Temps</div><div class="gros">${min >= 60 ? Math.floor(min / 60) + '<small>h</small>' + (min % 60 ? String(min % 60).padStart(2, '0') : '') : min + '<small>min</small>'}</div></div>
    </div>
    ${prevision()}
    <h2 class="sec">Carte de maîtrise</h2>
    <p class="note marge-n">Un carré par chapitre. Touche-le pour l'ouvrir.</p>
    <div class="liste">${ids.map(id => { const C = CONTENU.get(id), a = avancementMatiere(id); return `<div class="ligne carte-m"><div class="ligne-t"><a href="#mat/${id}"><b>${esc(nom(id))}</b></a>
      <div class="carres">${C.matiere.chapitres.map((c, i) => { const v = avancement(c.id); return `<a href="#chap/${c.id}" class="${maitrise(c.id) ? 'ok' : v >= 0.34 ? 'mi' : v > 0 ? 'peu' : ''}" title="${i + 1}. ${esc(c.t)}"></a>`; }).join('')}</div></div>
      <div class="ligne-n">${Math.round(a * 100)}<small>%</small></div></div>`; }).join('')}</div>
    <div class="legende"><span><i class="ok"></i>maîtrisé</span><span><i class="mi"></i>bien avancé</span><span><i class="peu"></i>commencé</span></div>
    <button class="bouton" data-act="partager">${ico('partage', 18)} Partager ma progression</button>
    <p class="note">Une image de tes chapitres maîtrisés et de ta série, sans tes notes, pour ta story.</p>
  </div>`;
};
// Prévision : à raison d'un chapitre par séance, est-ce que tout sera vu avant la philo ?
function prevision() {
  let reste = 0;
  for (const id of aPreparer()) for (const c of CONTENU.get(id)?.matiere.chapitres || []) if (!maitrise(c.id)) reste++;
  const p = planning(), sem = Math.max(1, diff(today(), DATES.philo) / 7);
  if (!reste) return '<div class="case lilas prev"><div class="eti">Prévision</div><p>Tous les chapitres de tes épreuves sont maîtrisés. Continue les cartes à revoir pour ne rien oublier.</p></div>';
  if (reste <= p.length) return `<div class="case lilas prev"><div class="eti">Prévision</div><p>À ce rythme, d'un chapitre par séance, tu auras vu tous les chapitres de tes épreuves vers le <b>${dateLongue(p[reste - 1].date)}</b>. Il te restera ${pluriel(p.length - reste, 'séance', 'séances')} pour revoir.</p></div>`;
  const faut = Math.min(7, Math.ceil(reste / sem));
  return `<div class="case prev alerte"><div class="eti">Prévision</div><p>Il reste <b>${pluriel(reste, 'chapitre', 'chapitres')}</b> pour ${pluriel(p.length, 'séance', 'séances')} prévues. Pour tout voir avant la philo, il faudrait environ <b>${pluriel(faut, 'séance', 'séances')} par semaine</b>.</p>
    <a class="mini-b" href="#reglages">Ajouter des jours</a></div>`;
}

// ---------- Mon bac ----------
function epreuvesDatees() {
  const l = [];
  for (const id of mesEpreuves()) {
    const m = CONTENU.get(id)?.matiere;
    if (!m) continue;
    const e = m.epreuve;
    let d = null, fin = null;
    if (id.startsWith('philo')) d = DATES.philo;
    else if (id === 'grand-oral') { d = DATES.oral; fin = DATES.oralFin; }
    else if (state.spes.includes(id) && e.type !== 'oral' && e.type !== 'pratique') { d = DATES.specialites; fin = DATES.specialitesFin; }
    l.push({ id, d, fin, e });
  }
  return l.sort((a, b) => (a.d || '9') < (b.d || '9') ? -1 : 1);
}
VIEWS.monbac = () => {
  const t = today(), b = bilan();
  const eps = epreuvesDatees();
  const dans = d => { const n = diff(t, d); return n > 0 ? `dans ${n} j` : n === 0 ? 'aujourd\'hui' : 'passé'; };
  return `<div class="page">
    <h1 class="titre">Mon bac</h1>
    <h2 class="sec">Mes épreuves</h2>
    <div class="liste">${eps.map(x => `<a class="ligne" href="#epreuve/${x.id}"><div class="ligne-t"><b>${esc(nom(x.id))}</b><span>${esc(resumeEpreuve(x.id))}</span></div>
      <div class="date-e">${x.d ? `<b>${dateCourte(x.d)}${x.fin ? ' – ' + dateCourte(x.fin) : ''}</b><span>${dans(x.d)}</span>` : '<span>date fixée par le lycée</span>'}</div></a>`).join('')}
      <div class="ligne"><div class="ligne-t"><b>Résultats</b><span>Sur le site de ton académie</span></div><div class="date-e"><b>${dateCourte(DATES.resultats)}</b><span>${dans(DATES.resultats)}</span></div></div></div>
    <p class="note">Dates indicatives de la session 2027 : ta convocation donne les dates exactes. Pour les spécialités, le jour précis dépend de la matière.</p>

    <h2 class="sec">Ce qu'il te faut</h2>
    <div class="case noire simu"><div class="eti">Moyenne à viser sur ce qui reste</div>
      <div class="gros-b">${b.viser === null ? virgule(b.moyenne ?? 0) : b.viser <= 0 ? 'Acquis' : b.viser > 20 ? '> 20' : virgule(b.viser)}</div>
      <div class="petit">${b.rempli ? `Pour finir à ${b.vise} de moyenne. Notes entrées : ${b.rempli} coefficients sur ${b.total}.` : `Pour avoir ${b.vise} de moyenne générale. Entre tes notes en dessous pour un calcul précis.`}</div>
      <div class="puces sombre">${[10, 12, 14, 16].map(v => `<button class="${b.vise === v ? 'choisi' : ''}" data-act="vise" data-x="${v}">${v === 10 ? 'Le bac' : v === 12 ? 'Assez bien' : v === 14 ? 'Bien' : 'Très bien'}</button>`).join('')}</div></div>
    ${b.rempli ? `<div class="case simu-moy"><div><div class="eti">Ta moyenne avec ces notes</div><div class="gros">${virgule(b.moyenne)}</div></div>
      <div class="petit">${b.blancs ? `Dont ${pluriel(b.blancs, 'note de bac blanc', 'notes de bac blanc')} : c'est une estimation, pas une note sûre.` : 'Calculée sur les notes entrées seulement.'}</div></div>` : ''}
    <div class="simu-l">${b.eps.map(e => {
      if (e.id === 'cc2') return ligneCC2(e, b);
      const blanc = estBlanc(e.id);
      return `<div class="ligne simu-r"><div class="ligne-t"><b>${esc(e.nom)}</b><span>coefficient ${e.coef}</span><span class="ou">${esc(blanc ? 'Mets la note de ton bac blanc, ou celle que tu penses avoir' : e.ou)}</span>
        <div class="sorte"><button class="${blanc ? '' : 'choisi'}" data-act="sorte" data-x="${e.id}" data-v="0">Vraie note</button><button class="${blanc ? 'choisi' : ''}" data-act="sorte" data-x="${e.id}" data-v="1">Bac blanc</button></div></div>
      <input class="${blanc ? 'blanc' : ''}" type="text" inputmode="decimal" placeholder="—" aria-label="Note de ${esc(e.nom)}" data-ch="noteBac" data-x="${e.id}" value="${typeof e.note === 'number' ? virgule(e.note) : ''}"></div>`;
    }).join('')}</div>
    ${etSi(b)}
    <h2 class="sec">Se préparer</h2>
    <div class="outils">
      ${mesEpreuves().includes('grand-oral') ? `<a href="#grandoral">${ico('chrono', 20)}<span>Préparer le grand oral</span></a>` : ''}
      <a href="#moyennes">${ico('liste', 20)}<span>Mes moyennes</span></a>
      <a href="#jourj">${ico('ok', 20)}<span>La liste du jour J</span></a>
      <a href="#planning">${ico('calendrier', 20)}<span>Mon planning</span></a>
    </div>
    <p class="note">Laisse vide ce que tu ne connais pas encore : l'app calcule ce qu'il te faut sur le reste. Une note de bac blanc compte comme une estimation : remplace-la par la vraie quand tu l'as. Coefficients du bac 2027 : demande confirmation à ton lycée. Tes notes restent sur ton téléphone.</p>
  </div>`;
};
// « Et si » : une réglette pour la moyenne aux épreuves qui restent, et ce que ça donne au bac.
const MENTIONS = [[18, 'Très bien avec les félicitations du jury'], [16, 'Mention très bien'], [14, 'Mention bien'], [12, 'Mention assez bien'], [10, 'Bac obtenu'], [8, 'Oral de rattrapage'], [0, 'Bac pas obtenu']];
let siVal = null;
function resultatSi(b, x) {
  const fin = b.reste ? (b.acquis + x * b.reste) / b.total : b.moyenne;
  const m = MENTIONS.find(([s]) => fin >= s)[1];
  let plus = '';
  if (fin >= 8 && fin < 10) plus = `<p class="petit">Entre 8 et 10, tu passes un oral de rattrapage : tu choisis deux matières parmi tes épreuves écrites (français, philosophie, spécialités) et, pour chacune, la meilleure des deux notes est gardée. Il te manquerait ${virgule((10 - fin) * b.total, 0)} points.</p>`;
  if (fin < 8) plus = '<p class="petit">Sous 8, pas de rattrapage : il faut repasser le bac. Chaque point gagné sur les épreuves qui restent compte.</p>';
  return `<div class="si-r"><b>${virgule(fin)}</b><span>de moyenne finale · ${m}</span></div>${plus}`;
}
function etSi(b) {
  if (!b.reste) return b.moyenne === null ? '' : `<div class="case etsi"><div class="eti">Ton résultat</div>${resultatSi(b, 0)}</div>`;
  const x = siVal ?? Math.round(Math.max(0, Math.min(20, b.viser ?? 10)) * 2) / 2;
  return `<div class="case etsi"><div class="eti">Et si…</div><p class="si-q">j'avais <b id="siX">${virgule(x)}</b> de moyenne aux épreuves qui restent</p>
    <input type="range" min="0" max="20" step="0.5" value="${x}" data-in="etsi" aria-label="Moyenne aux épreuves qui restent">
    <div id="siRes">${resultatSi(b, x)}</div></div>`;
}
INPUTS.etsi = el => { siVal = +el.value; document.getElementById('siX').textContent = virgule(siVal); document.getElementById('siRes').innerHTML = resultatSi(bilan(), siVal); };
const dateCourte = iso => new Date(iso + 'T12:00').toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
ACTIONS.vise = el => { state.notes.vise = +el.dataset.x; save(); refresh(); };
// Une note est « bac blanc » si l'élève l'a dit ; par défaut, les épreuves de juin sont des estimations, celles de première des vraies notes.
const PASSEES = ['fr-e', 'fr-o', 'maths-a', 'cc1'];
const estBlanc = id => state.blanc[id] ?? !PASSEES.includes(id);
ACTIONS.sorte = el => { state.blanc[el.dataset.x] = el.dataset.v === '1'; save(); refresh(); };
CHANGES.noteBac = el => {
  const v = parseFloat(String(el.value).replace(',', '.'));
  if (el.value.trim() === '' || isNaN(v)) delete state.notes[el.dataset.x];
  else state.notes[el.dataset.x] = Math.max(0, Math.min(20, v));
  save(); refresh();
};

// Ligne « Contrôle continu de terminale » : remplie par Mes moyennes dès qu'une moyenne y est entrée.
function ligneCC2(e, b) {
  if (b.auto) return `<a class="ligne simu-r" href="#moyennes"><div class="ligne-t"><b>${esc(e.nom)}</b><span>coefficient ${e.coef}</span>
      <span class="ou">Calculé avec tes moyennes${b.auto.complet ? '' : ', en attendant les trimestres qui restent'}. Touche pour les modifier.</span></div>
    <div class="cc-auto">${virgule(e.note)}</div></a>`;
  const blanc = estBlanc(e.id);
  return `<div class="ligne simu-r"><div class="ligne-t"><b>${esc(e.nom)}</b><span>coefficient ${e.coef}</span><span class="ou">${esc(e.ou)}</span>
      <a class="lien-moy" href="#moyennes">Ou entre tes moyennes matière par matière</a></div>
    <input class="${blanc ? 'blanc' : ''}" type="text" inputmode="decimal" placeholder="—" aria-label="Note de ${esc(e.nom)}" data-ch="noteBac" data-x="${e.id}" value="${typeof e.note === 'number' ? virgule(e.note) : ''}"></div>`;
}

// ---------- Mes moyennes ----------
// L'élève recopie ses moyennes de bulletin (trimestre ou semestre). La moyenne de l'année de chaque matière
// = moyenne des périodes entrées ; le contrôle continu de terminale en découle, avec les poids officiels.
// « À viser » = ce qu'il faut aux périodes qui restent pour que l'année finisse à la moyenne nécessaire.
const v2 = (x, d = 1) => virgule(x, d).replace(/(,\d)0$/, '$1');
const nomP = () => state.moy.n === 2 ? 'Semestre' : 'Trimestre';
function cible() {
  const v = bilan(true).viser;
  return v === null ? null : Math.max(0, v);
}
function resumeMat(id) {
  const l = periodes(id), faits = l.filter(x => typeof x === 'number'), a = moyAnnee(id), c = cible();
  const reste = state.moy.n - faits.length;
  let viser = '';
  if (reste && c !== null) {
    const faut = (c * state.moy.n - faits.reduce((x, y) => x + y, 0)) / reste;
    viser = `<span>À viser${faits.length ? ` ${reste > 1 ? 'aux ' + reste + ' ' + nomP().toLowerCase() + 's restants' : 'au dernier ' + nomP().toLowerCase()}` : ''}</span><b>${faut <= 0 ? 'Acquis' : faut > 20 ? '> 20' : v2(faut)}</b>`;
  }
  return `<div><span>Moyenne de l'année</span><b>${a === null ? '—' : v2(a, 2)}</b></div>${viser ? `<div class="vis">${viser}</div>` : ''}`;
}
function resumeCC() {
  const cc = ccMoyennes(), c = cible();
  return `<div class="eti">Contrôle continu de terminale</div>
    <div class="gros-b">${cc ? v2(cc.note, 2) : '—'}</div>
    <div class="petit">${cc ? `Soit ${v2(cc.note * 19, 0)} points sur 380 au bac (coefficient 19). ${cc.complet ? '' : 'Moyenne provisoire : elle bouge avec chaque bulletin.'}` : 'Entre tes moyennes en dessous : l\'app calcule ta moyenne et remplit le simulateur.'}</div>
    ${c !== null ? `<div class="petit">Pour finir à ${bilan().vise} au bac, il te faut environ <b>${c > 20 ? 'plus de 20' : v2(c)}</b> de moyenne ici comme aux épreuves qui restent.</div>` : ''}`;
}
VIEWS.moyennes = () => {
  const mats = matieresCC(), n = state.moy.n;
  return `<div class="page">${tete('Mes moyennes', '#monbac', 'Mon bac')}
    <p class="sous">Recopie les moyennes de tes bulletins de terminale (Pronote ou ENT), matière par matière. Laisse vide ce qui n'est pas encore sorti.</p>
    <div class="puces">${[[3, 'Trimestres'], [2, 'Semestres']].map(([v, t]) => `<button class="${n === v ? 'choisi' : ''}" data-act="moyN" data-x="${v}">${t}</button>`).join('')}</div>
    <div class="case noire simu" id="moyCC">${resumeCC()}</div>
    <div class="liste moy-l">${mats.map(m => `<div class="ligne moy-r"><div class="moy-t"><b>${esc(m.nom)}</b><span>poids ${m.coef} sur 19</span></div>
      <div class="moy-p" style="grid-template-columns:repeat(${n},1fr)">${Array.from({ length: n }, (_, k) => { const v = periodes(m.id)[k]; return `<label><span>${n === 2 ? 'S' : 'T'}${k + 1}</span>
        <input type="text" inputmode="decimal" placeholder="—" aria-label="${esc(m.nom)}, ${nomP().toLowerCase()} ${k + 1}" data-ch="moyP" data-x="${m.id}" data-k="${k}" value="${typeof v === 'number' ? v2(v, 2) : ''}"></label>`; }).join('')}</div>
      <div class="moy-s" id="moy-${m.id}">${resumeMat(m.id)}</div></div>`).join('')}</div>
    <p class="note">La moyenne de l'année est ici la moyenne de tes ${nomP().toLowerCase()}s. Si ton bulletin de fin d'année donne une moyenne annuelle, c'est elle qui compte : mets-la dans les trois cases pour être exact. La spécialité arrêtée en première compte dans le contrôle continu de première, pas ici. Tes notes restent sur ton téléphone.</p>
  </div>`;
};
ACTIONS.moyN = el => { state.moy.n = +el.dataset.x; save(); refresh(); };
// Pas de redessin complet : l'élève passe d'une case à l'autre sans perdre le clavier.
CHANGES.moyP = el => {
  const id = el.dataset.x, k = +el.dataset.k, v = parseFloat(String(el.value).replace(',', '.'));
  const l = state.moy.m[id] = (state.moy.m[id] || []).slice(0, 3);
  while (l.length < 3) l.push(null);
  l[k] = el.value.trim() === '' || isNaN(v) ? null : Math.max(0, Math.min(20, v));
  el.value = l[k] === null ? '' : v2(l[k], 2);
  if (l.every(x => x === null)) delete state.moy.m[id];
  save();
  for (const m of matieresCC()) { const z = document.getElementById('moy-' + m.id); if (z) z.innerHTML = resumeMat(m.id); }
  const t = document.getElementById('moyCC'); if (t) t.innerHTML = resumeCC();
};
