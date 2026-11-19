// La séance guidée : l'app dit exactement quoi faire, étape par étape, pendant 20, 45 ou 60 minutes.
import { VIEWS, ACTIONS, ico, esc, barre, pct, pluriel, fenetre, fermer, toast } from './ui.js';
import { state, save, today, CONTENU, aPreparer, matiereSuivante, chapitreSuivant, chapitre, dues, avancement, questionsErreurs } from './store.js';
import { nom, refresh, rendreFiche, rendreCartes, nouvellesCartes, runCartes, setRunCartes, rendreQuiz, nouveauQuiz, runQuiz, setRunQuiz, rendreMethode } from './reviser.js';

const PLANS = {
  20: [['revoir', 5], ['fiche', 8], ['quiz', 7]],
  45: [['revoir', 5], ['fiche', 10], ['cartes', 10], ['quiz', 10], ['methode', 10]],
  60: [['revoir', 5], ['fiche', 10], ['cartes', 10], ['quiz', 10], ['methode', 20], ['erreurs', 5]],
};
const NOMS_E = {
  revoir: ['Cartes à revoir', 'Les cartes des jours passés qui reviennent aujourd\'hui.'],
  fiche: ['La fiche', 'Lis la fiche du chapitre en entier, sans te presser.'],
  cartes: ['Les cartes', 'Apprends les cartes du chapitre. Sois honnête : « À revoir » si tu hésites.'],
  quiz: ['Le quiz', 'Les questions du chapitre. 80 % pour le valider.'],
  methode: ['Question de bac', 'Une question qui tombe à l\'épreuve : la méthode, puis tu t\'entraînes.'],
  erreurs: ['Mes erreurs', 'Les questions ratées, pour ne plus se tromper.'],
};

// Question type de la séance : la première pas encore réussie de la matière.
function questionDuJour(mat) {
  const m = CONTENU.get(mat)?.methode || [];
  return (m.find(q => !(state.methode[q.id]?.score >= 0.75)) || m[0])?.id || null;
}
export function plan(mat, duree) {
  const meth = questionDuJour(mat), nd = dues().length, ne = questionsErreurs().length;
  return PLANS[duree].map(([k, min]) => [k === 'methode' && !meth ? 'erreurs' : k, min])
    .filter(([k]) => (k !== 'revoir' || nd) && (k !== 'erreurs' || ne))
    .map(([k, min]) => ({ k, min }));
}

let choix = null;   // { mat, duree } avant de commencer
VIEWS.seance = () => {
  const s = state.seance;
  if (s && s.fin) return bilan(s);
  if (s) return etape(s);
  const mats = aPreparer().filter(id => CONTENU.has(id));
  if (!mats.length) return `<div class="page"><h1 class="titre">Séance</h1><p>Choisis d'abord tes matières dans les <a href="#reglages">réglages</a>.</p></div>`;
  if (!choix || !mats.includes(choix.mat)) choix = { mat: matiereSuivante() || mats[0], duree: state.duree };
  const chap = chapitre(chapitreSuivant(choix.mat)), p = plan(choix.mat, choix.duree);
  return `<div class="page">
    <h1 class="titre">Ta séance</h1>
    <div class="case noire depart"><div class="eti">${esc(nom(choix.mat))} · chapitre ${chap.n}</div><div class="t">${esc(chap.t)}</div>
      <div class="avance">${barre(avancement(chap.id))}<span>${Math.round(avancement(chap.id) * 100)} % du chapitre</span></div></div>
    <div class="eti marge">Durée</div>
    <div class="puces">${[20, 45, 60].map(d => `<button class="${choix.duree === d ? 'choisi' : ''}" data-act="dureeSeance" data-x="${d}">${d} min</button>`).join('')}</div>
    <div class="eti marge">Au programme</div>
    <ol class="programme">${p.map(e => `<li><span class="min">${e.min} min</span><b>${NOMS_E[e.k][0]}</b><span>${NOMS_E[e.k][1]}</span></li>`).join('')}</ol>
    <button class="bouton plein grand-b" data-act="commencer">${ico('play', 18)} Commencer</button>
    <a class="suivant" href="#planning"><span>Toutes tes séances jusqu'au bac</span><b>Voir mon planning</b>${ico('calendrier', 18)}</a>
    <details class="rappel"><summary>Réviser une autre matière</summary>
      <div class="puces">${mats.map(id => `<button class="${choix.mat === id ? 'choisi' : ''}" data-act="matSeance" data-x="${id}">${esc(nom(id))}</button>`).join('')}</div></details>
  </div>`;
};
// Révision express : 10 cartes et 5 questions, sans compter dans la semaine.
ACTIONS.express = () => {
  if (state.seance && !state.seance.fin) { location.hash = '#seance'; return; }
  const mat = matiereSuivante();
  if (!mat) return;
  const chap = chapitreSuivant(mat);
  state.seance = { court: true, date: today(), debut: Date.now(), duree: 5, mat, chap, meth: null, i: 0, avant: avancement(chap),
    etapes: [{ k: dues().length >= 5 ? 'revoir' : 'cartes', min: 3 }, { k: 'quiz', min: 2 }] };
  save(); setRunCartes(null); setRunQuiz(null);
  location.hash = '#seance';
};
ACTIONS.dureeSeance = el => { choix.duree = +el.dataset.x; refresh(); };
ACTIONS.matSeance = el => { choix.mat = el.dataset.x; refresh(); };
ACTIONS.commencer = () => {
  const chap = chapitreSuivant(choix.mat);
  state.seance = { date: today(), debut: Date.now(), duree: choix.duree, mat: choix.mat, chap, meth: questionDuJour(choix.mat), etapes: plan(choix.mat, choix.duree), i: 0, avant: avancement(chap) };
  save(); setRunCartes(null); setRunQuiz(null);
  refresh(); window.scrollTo(0, 0);
};

function etape(s) {
  const e = s.etapes[s.i], [titre, aide] = NOMS_E[e.k];
  let corps = '';
  if (e.k === 'fiche') corps = rendreFiche(s.chap);
  if (e.k === 'revoir' || e.k === 'cartes') {
    const cle = e.k === 'revoir' ? 'revoir' : s.chap;
    if (!runCartes() || runCartes().cle !== cle) { const r = nouvellesCartes(cle); r.liste = r.liste.slice(0, s.court ? 10 : e.k === 'revoir' ? 20 : 99); setRunCartes(r); }
    corps = rendreCartes(runCartes());
  }
  if (e.k === 'quiz' || e.k === 'erreurs') {
    const cle = e.k === 'quiz' ? s.chap : 'erreurs';
    if (!runQuiz() || runQuiz().cle !== cle) { const r = nouveauQuiz(cle); if (s.court) r.qs = r.qs.slice(0, 5); setRunQuiz(r); }
    corps = rendreQuiz(runQuiz()).replace(/<button class="bouton" data-act="refaireQuiz">Refaire le quiz<\/button>/, '');
  }
  if (e.k === 'methode') corps = rendreMethode(s.meth, true);
  const der = s.i === s.etapes.length - 1;
  return `<div class="page seance-p">
    <div class="seance-haut"><button class="rond" data-act="quitter" aria-label="Quitter">${ico('croix', 18)}</button>
      <div class="pas">${s.etapes.map((x, i) => `<i class="${i < s.i ? 'ok' : i === s.i ? 'cette' : ''}"></i>`).join('')}</div>
      <span class="min">${e.min} min</span></div>
    <div class="eti">${s.court ? 'Révision express · ' : ''}Étape ${s.i + 1} sur ${s.etapes.length} · ${esc(nom(s.mat))}</div>
    <h1 class="titre-e">${titre}</h1><p class="aide-e">${aide}</p>
    ${corps}
    <div class="seance-bas"><button class="bouton plein" data-act="etapeSuivante">${der ? 'Terminer la séance' : 'Étape suivante'} ${ico('fleche', 18)}</button></div>
  </div>`;
}
ACTIONS.etapeSuivante = () => {
  const s = state.seance, e = s.etapes[s.i];
  if (e.k === 'fiche') state.lu[s.chap] = state.lu[s.chap] || today();
  setRunCartes(null); setRunQuiz(null);
  if (s.i < s.etapes.length - 1) s.i++;
  else {
    s.fin = Date.now();
    state.seances.push({ date: s.date, duree: s.duree, mat: s.mat, chap: s.chap, min: Math.max(1, Math.round((s.fin - s.debut) / 60000)), ...(s.court ? { court: true } : {}) });
  }
  save(); refresh(); window.scrollTo(0, 0);
};
ACTIONS.quitter = () => {
  fenetre(`<h2>Arrêter la séance ?</h2><p>Ce que tu as déjà fait (cartes, quiz) est gardé, mais la séance ne comptera pas dans ta semaine.</p>
    <button class="bouton plein" data-act="fermer">Continuer la séance</button>
    <button class="bouton" data-act="abandon">Arrêter</button>`);
};
ACTIONS.abandon = () => { state.seance = null; save(); fermer(); setRunCartes(null); setRunQuiz(null); location.hash = '#'; };

function bilan(s) {
  const c = chapitre(s.chap), ap = avancement(s.chap), mn = Math.max(1, Math.round((s.fin - s.debut) / 60000));
  const sem = state.seances.filter(x => x.date >= today().slice(0, 8) + '01').length;
  return `<div class="page bilan">
    <div class="eti">${s.court ? 'Révision express terminée' : 'Séance terminée'}</div>
    <div class="geant">${mn}<i>.</i></div>
    <p class="sous"><b>${mn > 1 ? 'minutes' : 'minute'} de révision.</b> ${esc(nom(s.mat))}, ${esc(c ? c.t : '')}.</p>
    <div class="bento">
      <div class="case lilas"><div class="eti">Chapitre</div><div class="gros">${Math.round(ap * 100)}<small>%</small></div><div class="petit">${ap > s.avant ? '+' + Math.round((ap - s.avant) * 100) + ' % aujourd\'hui' : 'à continuer'}</div></div>
      <div class="case"><div class="eti">Ce mois-ci</div><div class="gros">${sem}</div><div class="petit">${sem > 1 ? 'séances' : 'séance'}</div></div>
    </div>
    <button class="bouton plein grand-b" data-act="finSeance">Retour à l'accueil</button>
  </div>`;
}
ACTIONS.finSeance = () => { state.seance = null; choix = null; save(); location.hash = '#'; };
