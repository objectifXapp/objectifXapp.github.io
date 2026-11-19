// Onglet Réviser : mes matières, une matière, un chapitre, fiche, cartes, quiz, erreurs, questions types, sujets.
import { VIEWS, ACTIONS, ico, esc, md, tete, barre, pct, melange, toast, pluriel, fenetre, fermer, lienSignaler } from './ui.js';
import { NOMS, RATTACHE } from './data.js';
import {
  state, save, today, CONTENU, mesMatieres, paquet, chapitre, matiereDe, cartesDe, dues, noter, avancement, maitrise,
  avancementMatiere, noterQuiz, erreur, questionsErreurs, epreuveDe,
} from './store.js';

export const refresh = () => window.dispatchEvent(new Event('refresh'));
export const nom = id => NOMS[id] || CONTENU.get(id)?.matiere.nom || id;

// ---------- Mes matières ----------
VIEWS.reviser = () => {
  const ids = mesMatieres().filter(id => CONTENU.has(id));
  const nd = dues().length, ne = questionsErreurs().length;
  const ligne = id => {
    const C = CONTENU.get(id), a = avancementMatiere(id);
    const fin = C.matiere.epreuve.type !== 'controle continu';
    return `<a class="ligne" href="#mat/${id}"><div class="ligne-t"><b>${esc(nom(id))}</b>
      <span>${pluriel(C.matiere.chapitres.length, 'chapitre', 'chapitres')}${!fin ? ' · contrôle continu' : RATTACHE[id] ? (RATTACHE[id].a === 'grand-oral' ? ' · pour le grand oral' : ' · dans l’épreuve de 2I2D') : ''}</span>${barre(a)}</div>
      <div class="ligne-n">${Math.round(a * 100)}<small>%</small></div></a>`;
  };
  const finales = ids.filter(id => CONTENU.get(id).matiere.epreuve.type !== 'controle continu');
  const cc = ids.filter(id => !finales.includes(id));
  return `<div class="page">
    <h1 class="titre">Réviser</h1>
    <a class="barre-r" href="#recherche">${ico('loupe', 18)}<span>Rechercher une notion, un auteur…</span></a>
    <div class="bento">
      <button class="case large express" data-act="express"><span class="go">${ico('eclair', 22)}</span><div><div class="eti">Révision express · 5 min</div><div class="t-e">10 cartes et 5 questions</div><div class="petit">Pour le bus ou une pause. Ne compte pas dans ta semaine.</div></div></button>
      <a class="case noire" href="#cartes/revoir"><div class="eti">Cartes à revoir</div><div class="gros">${nd}</div><div class="petit">${nd ? 'aujourd\'hui' : 'rien pour l\'instant'}</div></a>
      <a class="case" href="#quiz/erreurs"><div class="eti">Mes erreurs</div><div class="gros">${ne}</div><div class="petit">${ne ? 'questions à refaire' : 'aucune à refaire'}</div></a>
    </div>
    <h2 class="sec">Mes épreuves</h2><div class="liste">${finales.map(ligne).join('')}</div>
    ${cc.length ? `<h2 class="sec">Contrôle continu</h2><div class="liste">${cc.map(ligne).join('')}</div>` : ''}
    <p class="note">Ce n'est pas la bonne liste ? <a href="#reglages">Change tes matières</a>.</p>
  </div>`;
};

// ---------- Une matière ----------
VIEWS.mat = id => {
  const C = CONTENU.get(id);
  if (!C) return VIEWS.reviser();
  const m = C.matiere, a = avancementMatiere(id), nd = dues(id).length;
  let theme = null;
  const chaps = m.chapitres.map((c, i) => {
    const t = c.theme && c.theme !== theme ? `<div class="theme">${esc(theme = c.theme)}</div>` : '';
    const av = avancement(c.id);
    return `${t}<a class="chap ${maitrise(c.id) ? 'fait' : ''}" href="#chap/${c.id}"><span class="num">${maitrise(c.id) ? ico('ok', 16) : i + 1}</span>
      <span class="chap-t">${esc(c.t)}</span><span class="mini">${barre(av)}</span></a>`;
  }).join('');
  const meth = C.methode || [], suj = C.sujets || [];
  return `<div class="page">${tete(nom(id), '#reviser', 'Matière')}
    <div class="bento">
      <div class="case"><div class="eti">Avancement</div><div class="gros">${Math.round(a * 100)}<small>%</small></div>${barre(a)}</div>
      <a class="case ${nd ? 'lilas' : ''}" href="#cartes/mat:${id}"><div class="eti">Cartes</div><div class="gros">${nd}</div><div class="petit">à revoir</div></a>
      <a class="case large" href="#epreuve/${id}"><div class="eti">L'épreuve</div><div class="epr">${esc(resumeEpreuve(id))}</div><span class="plus">Voir le détail ${ico('fleche', 16)}</span></a>
    </div>
    <div class="outils">
      <a href="#quiz/mat:${id}">${ico('quiz', 20)}<span>Quiz de toute la matière</span></a>
      <a href="#essentiel/${id}">${ico('liste', 20)}<span>L'essentiel avant l'épreuve</span></a>
      <a href="#lexique/${id}">${ico('livre', 20)}<span>Lexique</span></a>
    </div>
    <h2 class="sec">Chapitres</h2><div class="chaps">${chaps}</div>
    ${meth.length ? `<h2 class="sec">Questions types de l'épreuve</h2><div class="liste">${meth.map(q => `<a class="ligne" href="#methode/${q.id}">
      <div class="ligne-t"><b>${esc(q.titre)}</b><span>${esc(q.pts || '')}</span></div><div class="etat">${etatMethode(q.id)}</div></a>`).join('')}</div>` : ''}
    ${suj.length ? `<h2 class="sec">Sujets d'entraînement</h2><div class="liste">${suj.map(s => `<a class="ligne" href="#sujet/${s.id}">
      <div class="ligne-t"><b>${esc(s.titre)}</b><span>${s.duree ? dureeTxt(s.duree) : ''}</span></div><div class="etat">${state.sujets[s.id] ? esc(String(state.sujets[s.id].note).replace('.', ',')) + '/20' : ''}</div></a>`).join('')}</div>` : ''}
  </div>`;
};
export function resumeEpreuve(id) {
  if (RATTACHE[id]) return RATTACHE[id].txt;
  const e = epreuveDe(id);
  const t = { ecrit: 'Écrit', pratique: 'Épreuve pratique', oral: 'Oral', 'ecrit+pratique': 'Écrit et pratique', 'controle continu': 'Contrôle continu' }[e.type] || e.type;
  return [t, e.duree ? dureeTxt(e.duree) : '', e.coef ? 'coefficient ' + e.coef : ''].filter(Boolean).join(' · ');
}
export const dureeTxt = m => m >= 60 ? `${Math.floor(m / 60)} h${m % 60 ? ' ' + String(m % 60).padStart(2, '0') : ''}` : `${m} min`;
const etatMethode = id => { const s = state.methode[id]; return s ? `<span class="pastille ${s.score >= 0.75 ? 'ok' : ''}">${pct(s.score)}</span>` : ''; };

VIEWS.epreuve = id => {
  const C = CONTENU.get(id);
  if (!C) return VIEWS.reviser();
  const e = C.matiere.epreuve;
  return `<div class="page">${tete('L\'épreuve', '#mat/' + id, nom(id))}
    <div class="carte-texte"><div class="eti">${esc(resumeEpreuve(id))}</div><p class="grand">${esc(e.note || '')}</p>
    ${e.quand ? `<p class="petit">Quand : ${esc(e.quand)}</p>` : ''}</div>
    <p class="note">Les coefficients et les dates sont ceux connus pour la session 2027. Ton lycée peut te confirmer ce qui te concerne.</p></div>`;
};

// ---------- Un chapitre ----------
VIEWS.chap = chapId => {
  const c = chapitre(chapId), p = paquet(chapId);
  if (!c || !p) return VIEWS.reviser();
  const cs = cartesDe(chapId), sues = cs.filter(x => state.srs[x.id] && state.srs[x.id].int >= 1).length;
  const q = state.quiz[chapId];
  const mat = matiereDe(chapId);
  const suiv = CONTENU.get(mat).matiere.chapitres[c.n];
  return `<div class="page">${tete(c.t, '#mat/' + mat, `${nom(mat)} · chapitre ${c.n}`)}
    <div class="etapes">
      <a class="etape ${state.lu[chapId] ? 'fait' : ''}" href="#fiche/${chapId}">${ico('fiche')}<div><b>La fiche</b><span>${state.lu[chapId] ? 'Lue' : '10 minutes de lecture'}</span></div>${state.lu[chapId] ? ico('ok', 18) : ''}</a>
      <a class="etape ${sues === cs.length ? 'fait' : ''}" href="#cartes/${chapId}">${ico('cartes')}<div><b>Les cartes</b><span>${sues} sur ${cs.length} sues</span></div>${sues === cs.length ? ico('ok', 18) : ''}</a>
      <a class="etape ${q && q.best >= 0.8 ? 'fait' : ''}" href="#quiz/${chapId}">${ico('quiz')}<div><b>Le quiz</b><span>${q ? 'Meilleur score : ' + pct(q.best) : pluriel(p.quiz.length, 'question', 'questions')}</span></div>${q && q.best >= 0.8 ? ico('ok', 18) : ''}</a>
    </div>
    <div class="carte-texte"><div class="eti">Avancement du chapitre</div><div class="gros">${Math.round(avancement(chapId) * 100)}<small>%</small></div>${barre(avancement(chapId))}
      <p class="petit">Le chapitre est maîtrisé quand la fiche est lue, les cartes sues et le quiz réussi à 80 %.</p></div>
    ${suiv ? `<a class="suivant" href="#chap/${suiv.id}"><span>Chapitre suivant</span><b>${esc(suiv.t)}</b>${ico('fleche', 18)}</a>` : ''}
  </div>`;
};

// ---------- Fiche ----------
export function rendreFiche(chapId) {
  const p = paquet(chapId);
  return `<article class="fiche">${md(p.fiche)}</article>`;
}
VIEWS.fiche = chapId => {
  if (!paquet(chapId)) return VIEWS.reviser();
  const c = chapitre(chapId);
  return `<div class="page">${tete('La fiche', '#chap/' + chapId, `${nom(c.mat.id)} · chapitre ${c.n}`)}
    ${rendreFiche(chapId)}
    <button class="bouton plein" data-act="lu" data-x="${chapId}">${state.lu[chapId] ? 'Déjà lue' : 'J\'ai lu la fiche'} ${ico('ok', 18)}</button></div>`;
};
ACTIONS.lu = el => { state.lu[el.dataset.x] = today(); save(); location.hash = '#chap/' + el.dataset.x; };

// ---------- Cartes ----------
// Une série de cartes en cours : { cle, liste, i, retourne, vues }
let RUN_C = null;
export function nouvellesCartes(cle) {
  let liste;
  if (cle === 'revoir') liste = melange(dues()).slice(0, 40);
  else if (cle.startsWith('mat:')) liste = melange(dues(cle.slice(4)));
  else {
    const cs = cartesDe(cle), t = today();
    const a = cs.filter(c => !state.srs[c.id] || state.srs[c.id].due <= t || state.srs[c.id].int < 1);
    liste = a.length ? a : melange(cs);
  }
  return { cle, liste, i: 0, retourne: false, sues: 0 };
}
export function rendreCartes(run, finHtml) {
  if (!run.liste.length) return `<div class="vide">${ico('ok', 30)}<b>Aucune carte à revoir.</b><span>Reviens demain, ou apprends les cartes d'un chapitre.</span></div>${finHtml || ''}`;
  if (run.i >= run.liste.length) return `<div class="vide">${ico('ok', 30)}<b>${pluriel(run.liste.length, 'carte vue', 'cartes vues')}.</b><span>${run.sues} sues du premier coup. Celles que tu ne savais pas reviendront demain.</span></div>${finHtml || ''}`;
  const c = run.liste[run.i];
  return `<div class="compteur">${run.i + 1} / ${run.liste.length}</div>${barre(run.i / run.liste.length, 'fine')}
    <button class="flash ${run.retourne ? 'retourne' : ''}" data-act="retourner">
      <div class="face"><div class="eti">${esc(nom(matiereDe(c.chap)))}</div><p>${esc(c.q)}</p><span class="aide-t">Touche pour voir la réponse</span></div>
      <div class="dos"><div class="eti">Réponse</div><p>${esc(c.r)}</p></div>
    </button>
    ${run.retourne ? `<div class="notes3">
      <button data-act="carte" data-x="0"><b>À revoir</b><span>demain</span></button>
      <button data-act="carte" data-x="1"><b>Je savais</b><span>plus tard</span></button>
      <button data-act="carte" data-x="2"><b>Facile</b><span>bien plus tard</span></button></div>` : '<div class="notes3 vide3"></div>'}`;
}
export const runCartes = () => RUN_C;
export const setRunCartes = r => { RUN_C = r; };
VIEWS.cartes = cle => {
  if (!RUN_C || RUN_C.cle !== cle) RUN_C = nouvellesCartes(cle);
  const titre = cle === 'revoir' ? 'Cartes à revoir' : cle.startsWith('mat:') ? nom(cle.slice(4)) : 'Les cartes';
  const retour = cle === 'revoir' ? '#reviser' : cle.startsWith('mat:') ? '#mat/' + cle.slice(4) : '#chap/' + cle;
  const fin = `<a class="bouton plein" href="${retour}" data-act="finCartes">Terminé</a>`;
  return `<div class="page">${tete(titre, retour, 'Cartes')}${rendreCartes(RUN_C, fin)}</div>`;
};
ACTIONS.finCartes = () => { RUN_C = null; };
ACTIONS.retourner = () => { if (RUN_C) { RUN_C.retourne = !RUN_C.retourne; refresh(); } };
ACTIONS.carte = el => {
  const q = +el.dataset.x, c = RUN_C.liste[RUN_C.i];
  noter(c.id, q);
  if (q > 0) RUN_C.sues++;
  RUN_C.i++; RUN_C.retourne = false;
  refresh();
};

// ---------- Quiz ----------
let RUN_Q = null;
export function nouveauQuiz(cle) {
  let qs;
  let n = 15, monte = false;
  if (cle === 'erreurs') qs = questionsErreurs();
  else if (cle.startsWith('mat:')) {
    qs = (CONTENU.get(cle.slice(4))?.paquets || []).flatMap(p => p.quiz.map(q => ({ ...q, chap: p.chapitre })));
    n = 20;
  } else {
    qs = (paquet(cle)?.quiz || []).map(q => ({ ...q, chap: cle }));
    // Pas encore réussi : on commence par les questions simples, puis on monte vers celles qui demandent de réfléchir.
    monte = !(state.quiz[cle]?.best >= 0.6);
  }
  qs = melange(qs).slice(0, n);
  if (monte) qs.sort((a, b) => (a.niv || 2) - (b.niv || 2));
  qs = qs.map(q => {
    const ordre = melange([0, 1, 2, 3]);
    return { ...q, choix: ordre.map(i => q.choix[i]), bonne: ordre.indexOf(q.bonne) };
  });
  return { cle, qs, i: 0, rep: null, bons: 0, monte };
}
export function rendreQuiz(run, finHtml) {
  if (!run.qs.length) return `<div class="vide">${ico('ok', 30)}<b>Aucune question à refaire.</b><span>Les questions ratées dans un quiz arrivent ici.</span></div>${finHtml || ''}`;
  if (run.i >= run.qs.length) {
    const r = run.bons / run.qs.length;
    const mot = r >= 0.8 ? 'Réussi.' : r >= 0.5 ? 'Presque.' : 'À retravailler.';
    return `<div class="score"><div class="eti">Ton score</div><div class="geant-s">${run.bons}<small>/${run.qs.length}</small></div><b>${mot}</b>
      <span>${run.cle.startsWith('mat:') ? (r >= 0.8 ? 'Tu connais bien la matière.' : 'Regarde dans « Mes erreurs » les chapitres à retravailler.') : r >= 0.8 ? 'Le quiz compte pour la maîtrise du chapitre.' : 'Relis la fiche, puis refais le quiz : il faut 80 % pour valider.'} Les erreurs sont gardées dans « Mes erreurs ».</span></div>
      <button class="bouton" data-act="refaireQuiz">Refaire le quiz</button>${finHtml || ''}`;
  }
  const q = run.qs[run.i], rep = run.rep;
  const lettres = 'ABCD';
  const intro = run.i === 0 && run.monte && rep === null ? '<p class="note haut-n">Les questions vont des plus simples aux plus difficiles.</p>' : '';
  return `${intro}<div class="compteur">Question ${run.i + 1} / ${run.qs.length}${q.niv ? ` <span class="niv">${['', 'Connaître', 'Appliquer', 'Réfléchir'][q.niv]}</span>` : ''}</div>${barre(run.i / run.qs.length, 'fine')}
    <p class="question">${md(q.q).replace(/^<p>|<\/p>$/g, '')}</p>
    <div class="choix">${q.choix.map((c, i) => {
      const cls = rep === null ? '' : i === q.bonne ? 'bon' : i === rep ? 'faux' : 'eteint';
      return `<button class="${cls}" data-act="repondre" data-x="${i}" ${rep !== null ? 'disabled' : ''}><span class="lettre">${lettres[i]}</span><span>${esc(c)}</span></button>`;
    }).join('')}</div>
    ${rep !== null ? `<div class="expl ${rep === q.bonne ? 'bon' : 'faux'}"><b>${rep === q.bonne ? 'Juste.' : 'Pas tout à fait.'}</b> ${esc(q.expl || '')}${lienSignaler(nom(matiereDe(q.chap)) + ', quiz', q.q)}</div>
      <button class="bouton plein" data-act="questionSuivante">${run.i + 1 < run.qs.length ? 'Question suivante' : 'Voir mon score'} ${ico('fleche', 18)}</button>` : ''}`;
}
export const runQuiz = () => RUN_Q;
export const setRunQuiz = r => { RUN_Q = r; };
VIEWS.quiz = cle => {
  if (!RUN_Q || RUN_Q.cle !== cle) RUN_Q = nouveauQuiz(cle);
  const mat = cle.startsWith('mat:') ? cle.slice(4) : null;
  const retour = cle === 'erreurs' ? '#reviser' : mat ? '#mat/' + mat : '#chap/' + cle;
  const fin = `<a class="bouton plein" href="${retour}" data-act="finQuiz">Terminé</a>`;
  return `<div class="page">${tete(cle === 'erreurs' ? 'Mes erreurs' : mat ? 'Quiz de toute la matière' : 'Le quiz', retour, mat ? nom(mat) : 'Quiz')}${rendreQuiz(RUN_Q, fin)}</div>`;
};
ACTIONS.finQuiz = () => { RUN_Q = null; };
ACTIONS.repondre = el => {
  const run = RUN_Q, q = run.qs[run.i];
  if (run.rep !== null) return;
  run.rep = +el.dataset.x;
  const juste = run.rep === q.bonne;
  if (juste) run.bons++;
  erreur(q.chap, q, juste);
  if (navigator.vibrate && navigator.userActivation?.hasBeenActive) navigator.vibrate(juste ? 8 : [10, 40, 10]);
  refresh();
};
ACTIONS.questionSuivante = () => {
  const run = RUN_Q;
  run.i++; run.rep = null;
  if (run.i >= run.qs.length && run.cle !== 'erreurs' && !run.cle.startsWith('mat:')) noterQuiz(run.cle, run.bons, run.qs.length);
  refresh();
  window.scrollTo(0, 0);
};
ACTIONS.refaireQuiz = () => { RUN_Q = nouveauQuiz(RUN_Q.cle); refresh(); };

// ---------- Questions types ----------
export function trouverMethode(id) {
  for (const C of CONTENU.values()) { const q = (C.methode || []).find(x => x.id === id); if (q) return { q, mat: C.matiere.id }; }
  return null;
}
const brouillons = {};
export function rendreMethode(id, entrainement) {
  const t = trouverMethode(id);
  if (!t) return '';
  const q = t.q, b = brouillons[id] || (brouillons[id] = { texte: '', voir: false, coches: [] });
  const liste = (titre, l, cls = '') => l && l.length ? `<h3>${titre}</h3><ul class="${cls}">${l.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : '';
  const base = `<div class="fiche">
    ${q.pts ? `<div class="eti">${esc(q.pts)}${q.vu && q.vu.length ? ' · tombée en ' + esc(q.vu.slice(0, 3).join(', ')) : ''}</div>` : ''}
    ${q.formules && q.formules.length ? `<p class="formules">${q.formules.map(f => `« ${esc(f)} »`).join('<br>')}</p>` : ''}
    <h3>Ce qu'on attend de toi</h3><p>${esc(q.attendu)}</p>
    ${liste('La méthode', q.etapes, 'num')}${liste('Les mots à placer', q.mots, 'mots')}${liste('Les pièges', q.pieges)}</div>`;
  if (!entrainement) return base + `<button class="bouton plein" data-act="sEntrainer" data-x="${id}">${ico('stylo', 18)} S'entraîner sur un cas</button>`;
  return `<div class="cas"><div class="eti">Le cas</div><p>${esc(q.cas)}</p><p class="question">${esc(q.question)}</p></div>
    <textarea class="redac" data-in="brouillon" data-x="${id}" placeholder="Écris ta réponse ici, comme sur ta copie." rows="8">${esc(b.texte)}</textarea>
    ${b.voir ? `<div class="cas modele"><div class="eti">Une bonne réponse</div>${md(q.modele)}</div>
      <div class="grille"><div class="eti">Coche ce que ta réponse contient</div>${(q.grille || []).map((g, i) => `<label><input type="checkbox" data-ch="coche" data-x="${id}" data-i="${i}" ${b.coches[i] ? 'checked' : ''}><span>${esc(g)}</span></label>`).join('')}</div>
      ${b.fait ? `<div class="expl bon"><b>Score enregistré : ${b.fait}.</b> Passe à l'étape suivante.</div>` : `<button class="bouton plein" data-act="scoreMethode" data-x="${id}">Enregistrer mon score</button>`}`
      : `<button class="bouton plein" data-act="voirModele" data-x="${id}">Comparer à une bonne réponse</button>`}
    <details class="rappel"><summary>Revoir la méthode</summary>${base}</details>`;
}
let entr = null;
VIEWS.methode = id => {
  const t = trouverMethode(id);
  if (!t) return VIEWS.reviser();
  return `<div class="page">${tete(t.q.titre, '#mat/' + t.mat, 'Question type · ' + nom(t.mat))}${rendreMethode(id, entr === id)}</div>`;
};
ACTIONS.sEntrainer = el => { entr = el.dataset.x; refresh(); window.scrollTo(0, 0); };
ACTIONS.voirModele = el => { const b = brouillons[el.dataset.x]; b.voir = true; refresh(); };
ACTIONS.scoreMethode = el => {
  const id = el.dataset.x, t = trouverMethode(id), b = brouillons[id];
  const n = (t.q.grille || []).length || 1, ok = b.coches.filter(Boolean).length;
  state.methode[id] = { score: ok / n, date: today() };
  save();
  toast(`Score enregistré : ${ok} sur ${n}.`);
  if (document.body.classList.contains('en-seance')) { b.fait = `${ok} sur ${n}`; refresh(); return; }
  entr = null; delete brouillons[id];
  location.hash = '#mat/' + t.mat;
};
export const INPUTS = {
  brouillon: el => { brouillons[el.dataset.x].texte = el.value; },
};
export const CHANGES = {
  coche: el => { brouillons[el.dataset.x].coches[+el.dataset.i] = el.checked; },
};

// ---------- Sujets ----------
function trouverSujet(id) {
  for (const C of CONTENU.values()) { const s = (C.sujets || []).find(x => x.id === id); if (s) return { s, mat: C.matiere.id }; }
  return null;
}
let chrono = null;   // { id, debut }
const corrige = {};
VIEWS.sujet = id => {
  const t = trouverSujet(id);
  if (!t) return VIEWS.reviser();
  const s = t.s, c = corrige[id];
  const ch = chrono && chrono.id === id;
  return `<div class="page">${tete(s.titre, '#mat/' + t.mat, 'Sujet · ' + nom(t.mat))}
    <div class="bandeau">${ico('chrono', 18)}<span>${s.duree ? dureeTxt(s.duree) : 'Sans durée'}</span>
      ${ch ? `<b id="chrono" data-debut="${chrono.debut}" data-duree="${s.duree || 0}"></b><button class="mini-b" data-act="chrono" data-x="">Arrêter</button>`
        : `<button class="mini-b" data-act="chrono" data-x="${id}">Lancer le chrono</button>`}</div>
    <article class="fiche sujet">${md(s.enonce)}</article>
    ${c ? `<h2 class="sec">Corrigé</h2><article class="fiche">${md(s.corrige)}</article>
      <div class="grille"><div class="eti">Note-toi avec la grille</div>${s.grille.map((g, i) => `<label class="pt"><span>${esc(g.c)}</span>
        <input type="number" inputmode="decimal" min="0" max="${g.pts}" step="0.5" data-ch="ptSujet" data-x="${id}" data-i="${i}" value="${c[i] ?? ''}"><small>/ ${g.pts}</small></label>`).join('')}
      <div class="total">Total : <b>${String(c.reduce((a, b) => a + (+b || 0), 0)).replace('.', ',')}</b> / 20</div></div>
      <button class="bouton plein" data-act="noteSujet" data-x="${id}">Enregistrer ma note</button>`
      : `<button class="bouton plein" data-act="voirCorrige" data-x="${id}">J'ai fini : voir le corrigé</button>`}
  </div>`;
};
ACTIONS.chrono = el => { chrono = el.dataset.x ? { id: el.dataset.x, debut: Date.now() } : null; refresh(); };
ACTIONS.voirCorrige = el => {
  fenetre(`<h2>Voir le corrigé ?</h2><p>Fais d'abord le sujet en entier, sur une feuille : c'est comme ça qu'on progresse.</p>
    <button class="bouton plein" data-act="ouvrirCorrige" data-x="${el.dataset.x}">Oui, j'ai fini</button>`);
};
ACTIONS.ouvrirCorrige = el => { corrige[el.dataset.x] = []; chrono = null; fermer(); refresh(); };
CHANGES.ptSujet = el => {
  const t = trouverSujet(el.dataset.x), max = t.s.grille[+el.dataset.i].pts;
  const v = Math.max(0, Math.min(max, parseFloat(String(el.value).replace(',', '.')) || 0));
  corrige[el.dataset.x][+el.dataset.i] = v;
  refresh();
};
ACTIONS.noteSujet = el => {
  const id = el.dataset.x, t = trouverSujet(id);
  const note = corrige[id].reduce((a, b) => a + (+b || 0), 0);
  state.sujets[id] = { note, date: today() };
  save();
  toast('Note enregistrée.');
  location.hash = '#mat/' + t.mat;
};
// Le chrono s'affiche chaque seconde.
setInterval(() => {
  const el = document.getElementById('chrono');
  if (!el) return;
  const pass = Math.floor((Date.now() - +el.dataset.debut) / 1000), reste = +el.dataset.duree * 60 - pass;
  const f = s => `${Math.floor(Math.abs(s) / 3600)}:${String(Math.floor(Math.abs(s) % 3600 / 60)).padStart(2, '0')}:${String(Math.abs(s) % 60).padStart(2, '0')}`;
  el.textContent = +el.dataset.duree ? (reste >= 0 ? f(reste) : '+' + f(reste)) : f(pass);
}, 1000);
