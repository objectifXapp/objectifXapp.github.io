// Outils : recherche, lexique, l'essentiel avant l'épreuve, planning, grand oral, jour J, agenda, partage, installation.
import { VIEWS, ACTIONS, ico, esc, md, tete, toast, pluriel, dateLongue } from './ui.js';
import { NOMS, JOURS, DATES } from './data.js';
import {
  state, save, today, addDays, lundi, jourSemaine, diff, CONTENU, mesMatieres, paquet, cartesDe, planning, avancementMatiere,
  maitrise, serie, mesEpreuves,
} from './store.js';
import { nom, refresh, INPUTS, CHANGES } from './reviser.js';

const norm = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const sansMd = s => String(s).replace(/\*\*/g, '').replace(/^#+\s*/gm, '').replace(/^- /gm, '');

// ---------- Recherche ----------
let INDEX = null, INDEX_CLE = '';
function index() {
  const cle = mesMatieres().join();
  if (INDEX && INDEX_CLE === cle) return INDEX;
  INDEX = []; INDEX_CLE = cle;
  for (const id of mesMatieres()) {
    const C = CONTENU.get(id);
    if (!C) continue;
    for (const c of C.matiere.chapitres) {
      const p = paquet(c.id);
      INDEX.push({ type: 'chap', mat: id, titre: c.t, texte: sansMd(p?.fiche || ''), lien: '#fiche/' + c.id, n: norm(c.t + ' ' + sansMd(p?.fiche || '')), t: norm(c.t) });
      for (const k of cartesDe(c.id)) INDEX.push({ type: 'carte', mat: id, titre: k.q, texte: k.r, lien: '#chap/' + c.id, n: norm(k.q + ' ' + k.r), t: norm(k.q) });
    }
  }
  return INDEX;
}
function extrait(texte, mots) {
  const n = norm(texte);
  let i = Math.max(0, n.indexOf(mots[0]) - 50);
  if (i > 0) i = texte.indexOf(' ', i) + 1 || i;   // commencer à un début de mot
  return (i > 0 ? '…' : '') + texte.slice(i, i + 150).trim() + (texte.length > i + 150 ? '…' : '');
}
function resultats(q) {
  const mots = norm(q).split(/\s+/).filter(m => m.length > 1);
  if (!mots.length) return '<p class="note">Un mot, une notion, un auteur : la recherche fouille les fiches et les cartes de tes matières.</p>';
  const tr = index().filter(e => mots.every(m => e.n.includes(m)))
    .map(e => ({ ...e, s: (mots.every(m => e.t.includes(m)) ? 2 : 0) + (e.type === 'chap' ? 1 : 0) }))
    .sort((a, b) => b.s - a.s).slice(0, 30);
  if (!tr.length) return '<p class="note">Rien trouvé. Essaie un autre mot, ou sans accent.</p>';
  return `<div class="liste">${tr.map(e => `<a class="ligne res" href="${e.lien}"><div class="ligne-t"><span class="eti">${e.type === 'chap' ? 'Fiche' : 'Carte'} · ${esc(nom(e.mat))}</span>
    <b>${esc(e.titre)}</b><span>${esc(extrait(e.texte, mots))}</span></div></a>`).join('')}</div>`;
}
let derniere = '';
VIEWS.recherche = () => `<div class="page">${tete('Rechercher', '#reviser', 'Toutes mes matières')}
  <input class="champ grand-champ" id="cherche" data-in="cherche" type="search" placeholder="Une notion, un auteur, une date…" value="${esc(derniere)}" autocomplete="off">
  <div id="res">${resultats(derniere)}</div></div>`;
INPUTS.cherche = el => { derniere = el.value; document.getElementById('res').innerHTML = resultats(el.value); };
// Ctrl+K (ou /) ouvre la recherche sur ordinateur.
document.addEventListener('keydown', e => {
  if (((e.ctrlKey || e.metaKey) && e.key === 'k') || (e.key === '/' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName))) {
    if (!state.voie) return;
    e.preventDefault(); location.hash = '#recherche';
  }
});
// Sur ordinateur : Espace retourne la carte, 1 2 3 la notent, 1 à 4 (ou A à D) répondent au quiz, Entrée passe à la suite.
document.addEventListener('keydown', e => {
  if (e.ctrlKey || e.metaKey || e.altKey || /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) || document.querySelector('.voile')) return;
  const q = s => document.querySelector(s), k = e.key.toLowerCase();
  let b = null;
  if (k === ' ' || k === 'enter') b = q('.flash:not(.retourne)') || q('[data-act="questionSuivante"]');
  else if (/^[1-4]$/.test(k) || /^[a-d]$/.test(k)) {
    const n = /\d/.test(k) ? +k - 1 : k.charCodeAt(0) - 97;
    b = document.querySelectorAll('.notes3 button')[n] || document.querySelectorAll('.choix button:not([disabled])')[n];
  }
  if (b) { e.preventDefault(); b.click(); }
});
export function apresRecherche() { const c = document.getElementById('cherche'); if (c && location.hash === '#recherche') c.focus(); }

// ---------- Lexique ----------
const DEF = /^(qu['’]est-ce qu['’]?(e )?|que signifie |que désigne |que veut dire |définis |définissez )/i;
function lexique(id) {
  const C = CONTENU.get(id);
  if (!C) return [];
  const vus = new Set(), out = [];
  for (const p of C.paquets) for (const k of p.cartes) {
    if (!DEF.test(k.q)) continue;
    let mot = k.q.replace(DEF, '').replace(/\s*\?\s*$/, '').trim();
    mot = mot.replace(/^(le |la |les |l['’]|un |une |des |du )/i, '').replace(/ en (droit|économie|management|philosophie)$/i, '');
    if (mot.length > 70 || !mot) continue;
    const cle = norm(mot);
    if (vus.has(cle)) continue;
    vus.add(cle);
    out.push({ mot: mot[0].toUpperCase() + mot.slice(1), def: k.r, chap: p.chapitre });
  }
  return out.sort((a, b) => norm(a.mot).localeCompare(norm(b.mot)));
}
const filtreLex = {};
function lignesLex(id, f) {
  const m = norm(f || ''), l = lexique(id).filter(x => !m || norm(x.mot + ' ' + x.def).includes(m));
  return l.length ? l.map(x => `<a class="mot" href="#chap/${x.chap}"><b>${esc(x.mot)}</b><span>${esc(x.def)}</span></a>`).join('') : '<p class="note">Aucun mot trouvé.</p>';
}
VIEWS.lexique = id => {
  if (!CONTENU.has(id)) return VIEWS.reviser();
  return `<div class="page">${tete('Lexique', '#mat/' + id, nom(id))}
    <p class="sous">${pluriel(lexique(id).length, 'mot à connaître', 'mots à connaître')}, tirés des cartes de la matière.</p>
    <input class="champ" data-in="lex" data-x="${id}" type="search" placeholder="Chercher un mot" value="${esc(filtreLex[id] || '')}">
    <div class="lexique" id="lex">${lignesLex(id, filtreLex[id])}</div></div>`;
};
INPUTS.lex = el => { filtreLex[el.dataset.x] = el.value; document.getElementById('lex').innerHTML = lignesLex(el.dataset.x, el.value); };

// ---------- L'essentiel (veille d'épreuve, fiche à imprimer) ----------
function aRetenir(fiche) {
  const i = fiche.search(/###\s*À retenir/i);
  if (i < 0) return '';
  const reste = fiche.slice(i).split('\n').slice(1);
  const fin = reste.findIndex(l => /^#{2,3}\s/.test(l.trim()));
  return (fin < 0 ? reste : reste.slice(0, fin)).join('\n');
}
VIEWS.essentiel = id => {
  const C = CONTENU.get(id);
  if (!C) return VIEWS.reviser();
  const pieges = (C.methode || []).flatMap(q => q.pieges || []).slice(0, 8);
  return `<div class="page">${tete('L\'essentiel', '#mat/' + id, nom(id))}
    <p class="sous">Ce qu'il faut avoir en tête la veille de l'épreuve : les points clés de chaque chapitre, puis les pièges à éviter.</p>
    <button class="bouton" data-act="imprimer">${ico('fiche', 18)} Imprimer ou enregistrer en PDF</button>
    <article class="fiche essentiel">${C.matiere.chapitres.map((c, i) => `<h3>${i + 1}. ${esc(c.t)}</h3>${md(aRetenir(paquet(c.id)?.fiche || ''))}`).join('')}
    ${pieges.length ? `<h3>Les pièges de l'épreuve</h3><ul>${pieges.map(p => `<li>${esc(p)}</li>`).join('')}</ul>` : ''}</article></div>`;
};
ACTIONS.imprimer = () => window.print();

// ---------- Planning ----------
VIEWS.planning = () => {
  const p = planning(), t = today();
  const sem = [];
  for (const s of p) { const l = lundi(s.date); let g = sem.find(x => x.l === l); if (!g) sem.push(g = { l, s: [] }); g.s.push(s); }
  const total = {};
  for (const s of p) total[s.mat] = (total[s.mat] || 0) + 1;
  const mai = p.filter(s => s.date >= '2027-04-01').length;
  return `<div class="page">${tete('Mon planning', '#seance', 'Jusqu\'à la philo')}
    <p class="sous"><b>${pluriel(p.length, 'séance prévue', 'séances prévues')}</b> d'ici le 14 juin, à raison de ${pluriel(state.jours.length, 'séance', 'séances')} par semaine. Les matières qui comptent le plus reviennent le plus souvent.</p>
    <div class="repart">${Object.entries(total).sort((a, b) => b[1] - a[1]).map(([m, n]) => `<span><b>${n}</b> ${esc(nom(m))}</span>`).join('')}</div>
    ${sem.slice(0, 10).map(g => `<h2 class="sec petit-sec">${g.l <= t ? 'Cette semaine' : 'Semaine du ' + new Date(g.l + 'T12:00').toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}</h2>
      <div class="liste">${g.s.map(s => `<div class="ligne"><div class="jour-p"><b>${JOURS[jourSemaine(s.date)].slice(0, 3)}</b><span>${new Date(s.date + 'T12:00').getDate()}</span></div>
        <div class="ligne-t"><b>${esc(nom(s.mat))}</b><span>${state.duree} min</span></div></div>`).join('')}</div>`).join('')}
    ${sem.length > 10 ? `<p class="note">Et ${pluriel(sem.length - 10, 'semaine', 'semaines')} de plus jusqu'au bac. Le planning se recalcule après chaque séance.</p>` : ''}
    ${mai && state.jours.length < 3 ? `<p class="note">À partir d'avril, pense à ajouter des jours de révision dans les <a href="#reglages">réglages</a>.</p>` : ''}
  </div>`;
};

// ---------- Grand oral ----------
const JURY = [
  'Pourquoi avez-vous choisi cette question ?',
  'Quel lien faites-vous avec votre projet d\'études ou votre projet professionnel ?',
  'Pouvez-vous définir le mot principal de votre question ?',
  'Quelle source vous a le plus aidé, et pourquoi lui faire confiance ?',
  'Pouvez-vous donner un exemple concret de ce que vous avancez ?',
  'Que répondriez-vous à quelqu\'un qui pense le contraire ?',
  'Qu\'avez-vous appris en préparant cette question ?',
  'Si vous deviez refaire ce travail, que changeriez-vous ?',
  'Quelle notion de votre spécialité avez-vous utilisée ?',
  'Votre réponse serait-elle la même dans dix ans ?',
  'Pouvez-vous résumer votre réponse en une phrase ?',
  'Qu\'est-ce qui vous a surpris dans vos recherches ?',
  'En quoi cette question vous concerne-t-elle personnellement ?',
  'Quelles études envisagez-vous après le bac, et pourquoi ?',
];
let goChrono = null;   // { phase: 'expose' | 'echange', debut }
VIEWS.grandoral = () => {
  const g = state.go;
  return `<div class="page">${tete('Préparer le grand oral', '#monbac', 'Mon bac')}
    <p class="sous">Tu présentes une de tes deux questions : <b>10 minutes</b> d'exposé, debout et sans notes rédigées, puis <b>10 minutes</b> d'échange avec le jury.</p>
    <h2 class="sec">Mes deux questions</h2>
    ${[0, 1].map(i => `<textarea class="redac petit-t" rows="2" data-in="goQ" data-i="${i}" placeholder="Question ${i + 1}">${esc(g.q[i] || '')}</textarea>`).join('')}
    <h2 class="sec">M'entraîner</h2>
    <div class="case noire go-c">${goChrono ? `<div class="eti">${goChrono.phase === 'expose' ? 'Ton exposé' : 'L\'échange avec le jury'}</div>
      <div class="gros-b" id="goTemps" data-debut="${goChrono.debut}">10:00</div>
      <div class="puces sombre">${goChrono.phase === 'expose' ? '<button data-act="goEchange">Passer à l\'échange</button>' : ''}<button data-act="goStop">Arrêter</button></div>`
      : `<div class="eti">Chrono</div><p class="go-txt">Lance le chrono et présente ta question à voix haute, comme devant le jury. Ensuite, réponds aux questions du jury tirées au hasard.</p>
      <div class="puces sombre"><button class="choisi" data-act="goExpose">${'Lancer l\'exposé'}</button></div>`}</div>
    ${goChrono && goChrono.phase === 'echange' ? `<div class="cas"><div class="eti">Le jury te demande</div><p class="question">${esc(goChrono.q)}</p>
      <button class="bouton" data-act="goAutre">Une autre question</button></div>` : ''}
    <h2 class="sec">Ce que le jury demande souvent</h2>
    <ul class="jury">${JURY.map(q => `<li>${esc(q)}</li>`).join('')}</ul>
    ${CONTENU.has('grand-oral') ? `<a class="suivant" href="#mat/grand-oral"><span>Pour aller plus loin</span><b>Les fiches du grand oral</b>${ico('fleche', 18)}</a>` : ''}
  </div>`;
};
INPUTS.goQ = el => { state.go.q[+el.dataset.i] = el.value; save(); };
const auHasard = () => JURY[Math.floor(Math.random() * JURY.length)];
Object.assign(ACTIONS, {
  goExpose: () => { goChrono = { phase: 'expose', debut: Date.now() }; refresh(); },
  goEchange: () => { goChrono = { phase: 'echange', debut: Date.now(), q: auHasard() }; refresh(); },
  goAutre: () => { goChrono.q = auHasard(); refresh(); },
  goStop: () => { goChrono = null; refresh(); },
});
setInterval(() => {
  const el = document.getElementById('goTemps');
  if (!el) return;
  const r = 600 - Math.floor((Date.now() - +el.dataset.debut) / 1000);
  el.textContent = (r < 0 ? '+' : '') + `${Math.floor(Math.abs(r) / 60)}:${String(Math.abs(r) % 60).padStart(2, '0')}`;
  el.classList.toggle('depasse', r < 0);
}, 500);

// ---------- Jour J ----------
const JOURJ = [
  ['La veille', ['Préparer ta convocation et ta pièce d\'identité avec photo', 'Vérifier l\'adresse du centre d\'examen et le trajet', 'Relire « L\'essentiel » de la matière, sans apprendre de nouveau chapitre', 'Dormir : une nuit complète vaut plus qu\'une heure de révision']],
  ['Dans ton sac', ['Convocation et pièce d\'identité', 'Plusieurs stylos bleus ou noirs, crayon, gomme, règle', 'Calculatrice en mode examen, seulement si le sujet l\'autorise', 'Une montre simple (les montres connectées sont interdites)', 'De l\'eau et de quoi grignoter']],
  ['Le jour même', ['Arriver en avance, au moins 30 minutes avant l\'heure de la convocation', 'Téléphone éteint et rangé dans le sac, loin de ta table', 'Lire tout le sujet avant d\'écrire, puis répartir ton temps', 'Garder 10 minutes à la fin pour relire']],
];
VIEWS.jourj = () => `<div class="page">${tete('Le jour J', '#monbac', 'Mon bac')}
  <p class="sous">La liste à cocher pour ne rien oublier. Les règles exactes sont sur ta convocation.</p>
  ${JOURJ.map(([t, l], g) => `<h2 class="sec petit-sec">${t}</h2><div class="grille">${l.map((x, i) => `<label><input type="checkbox" data-ch="jourj" data-x="${g}-${i}" ${state.jourj[g + '-' + i] ? 'checked' : ''}><span>${esc(x)}</span></label>`).join('')}</div>`).join('')}
  <button class="bouton" data-act="jourjZero">Tout décocher</button></div>`;
CHANGES.jourj = el => { state.jourj[el.dataset.x] = el.checked; save(); };
ACTIONS.jourjZero = () => { state.jourj = {}; save(); refresh(); };

// ---------- Agenda (rappels) ----------
// Un fichier .ics : le téléphone ajoute les séances à son agenda, avec une alerte, sans internet ni serveur.
ACTIONS.agenda = () => {
  const BY = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const t = today();
  let d = t; while (!state.jours.includes(jourSemaine(d))) d = addDays(d, 1);
  const h = String(state.heure).padStart(2, '0');
  const z = s => s.replace(/-/g, '');
  const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Objectif X//FR', 'CALSCALE:GREGORIAN', 'BEGIN:VEVENT',
    `UID:objectif-x-${Date.now()}@objectif-x`, `DTSTAMP:${z(t)}T000000Z`, `DTSTART:${z(d)}T${h}0000`, `DURATION:PT${state.duree}M`,
    `RRULE:FREQ=WEEKLY;BYDAY=${state.jours.map(j => BY[j]).join(',')};UNTIL=${z(DATES.philo)}T000000Z`,
    'SUMMARY:Révision Objectif X', `DESCRIPTION:Ta séance de ${state.duree} minutes : ouvre Objectif X et appuie sur le bouton du milieu.`,
    'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:C\'est l\'heure de ta séance', 'TRIGGER:-PT0M', 'END:VALARM', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
  a.download = 'seances-objectif-x.ics'; a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  toast('Ouvre le fichier pour ajouter tes séances à ton agenda.');
};

// ---------- Partager sa progression ----------
ACTIONS.partager = async () => {
  let chaps = 0, faits = 0;
  for (const id of mesMatieres()) for (const c of CONTENU.get(id)?.matiere.chapitres || []) { chaps++; if (maitrise(c.id)) faits++; }
  const cv = document.createElement('canvas'); cv.width = 1080; cv.height = 1920;
  const x = cv.getContext('2d'), F = 'Archivo, system-ui, sans-serif';
  await document.fonts.ready;
  x.fillStyle = '#F3F1EC'; x.fillRect(0, 0, 1080, 1920);
  x.fillStyle = '#111014'; x.font = `900 56px ${F}`; x.fillText('Objectif', 90, 170);
  const w = x.measureText('Objectif ').width; x.fillStyle = '#7357E0'; x.fillText('X', 90 + w, 170);
  x.fillStyle = '#111014'; x.font = `900 520px ${F}`; x.fillText(String(faits), 70, 900);
  const wn = x.measureText(String(faits)).width; x.fillStyle = '#7357E0'; x.fillRect(70 + wn + 20, 800, 90, 90);
  x.fillStyle = '#111014'; x.font = `800 72px ${F}`; x.fillText(faits > 1 ? 'chapitres maîtrisés' : 'chapitre maîtrisé', 90, 1030);
  x.fillStyle = '#5f5d58'; x.font = `500 52px ${F}`; x.fillText(`sur ${chaps}, avant le bac.`, 90, 1110);
  const s = serie();
  x.fillStyle = '#111014'; roundRect(x, 90, 1260, 900, 300, 60); x.fill();
  x.fillStyle = '#8d8a99'; x.font = `700 36px ${F}`; x.fillText('MA SÉRIE', 160, 1360);
  x.fillStyle = '#F3F1EC'; x.font = `900 120px ${F}`; x.fillText(`${s} ${s > 1 ? 'semaines' : 'semaine'}`, 160, 1490);
  x.fillStyle = '#8b8983'; x.font = `600 40px ${F}`; x.fillText('Gratuit, sans compte, sans pub.', 90, 1780);
  const blob = await new Promise(r => cv.toBlob(r, 'image/png'));
  const f = new File([blob], 'objectif-x.png', { type: 'image/png' });
  if (navigator.canShare && navigator.canShare({ files: [f] })) { try { await navigator.share({ files: [f] }); } catch {} return; }
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'objectif-x.png'; a.click();
};
function roundRect(x, l, t, w, h, r) { x.beginPath(); x.moveTo(l + r, t); x.arcTo(l + w, t, l + w, t + h, r); x.arcTo(l + w, t + h, l, t + h, r); x.arcTo(l, t + h, l, t, r); x.arcTo(l, t, l + w, t, r); x.closePath(); }

// ---------- Installer l'app ----------
const ua = navigator.userAgent;
export const dansUneApp = /TikTok|musical_ly|Bytedance|Instagram|FBAN|FBAV|Snapchat|Twitter|LinkedInApp/i.test(ua);
export const iphone = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
export const android = /Android/i.test(ua);
export const installee = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
let invite = null;
addEventListener('beforeinstallprompt', e => { e.preventDefault(); invite = e; });
addEventListener('appinstalled', () => { state.vus.installer = true; save(); });
VIEWS.installer = () => {
  let etapes;
  if (installee()) etapes = '<p class="grand">L\'app est déjà installée sur cet appareil. Elle marche sans internet.</p>';
  else if (dansUneApp) etapes = `<p class="grand">Tu es dans le navigateur d'une autre app (TikTok, Instagram…), qui ne permet pas d'installer.</p>
    <ol class="num-l"><li>Touche les <b>trois points</b> ou le bouton <b>Partager</b>, en haut ou en bas de l'écran.</li><li>Choisis <b>Ouvrir dans le navigateur</b> (Safari ou Chrome).</li><li>Reviens sur cette page pour installer.</li></ol>`;
  else if (iphone) etapes = `<ol class="num-l"><li>Dans <b>Safari</b>, touche le bouton <b>Partager</b> (le carré avec une flèche vers le haut).</li>
    <li>Fais défiler et choisis <b>Sur l'écran d'accueil</b>.</li><li>Touche <b>Ajouter</b>. Objectif X apparaît avec tes autres apps.</li></ol>
    <p class="note">Sur iPhone, ce que tu fais dans Safari ne passe pas dans l'app installée. Si tu as déjà commencé ici : Réglages, « Enregistrer mes données dans un fichier », puis « Reprendre depuis un fichier » dans l'app installée.</p>`;
  else etapes = `${invite ? '<button class="bouton plein grand-b" data-act="installer">Installer Objectif X</button>' : ''}
    <ol class="num-l"><li>Dans <b>Chrome</b>, touche les <b>trois points</b> en haut à droite.</li><li>Choisis <b>Installer l'application</b> ou <b>Ajouter à l'écran d'accueil</b>.</li><li>Confirme. Objectif X apparaît avec tes autres apps.</li></ol>`;
  return `<div class="page">${tete('Installer l\'app', '#reglages', 'Sur ton téléphone')}
    <div class="carte-texte">${etapes}</div>
    <h2 class="sec">Pourquoi l'installer</h2>
    <ul class="jury"><li>Elle s'ouvre d'un geste, comme une vraie app.</li><li>Elle marche sans internet, même en mode avion.</li><li>Tes progrès restent sur ton téléphone, sans compte.</li></ul>
    <h2 class="sec">Les rappels</h2>
    <div class="carte-texte"><p>Ajoute tes séances à l'agenda de ton téléphone : il te prévient à l'heure choisie, chaque jour de révision.</p>
      <button class="bouton" data-act="agenda">${ico('calendrier', 18)} Ajouter mes séances à mon agenda</button></div>
  </div>`;
};
ACTIONS.installer = async () => { if (!invite) return; invite.prompt(); await invite.userChoice; invite = null; refresh(); };
