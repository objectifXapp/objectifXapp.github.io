// Point d'entrée : aiguillage des écrans, barre du bas, premier lancement (surligneur), accueil, réglages.
import { VIEWS, ACTIONS, ico, esc, toast, fenetre, fermer, pluriel, virgule } from './ui.js';
import { VOIES, SERIES, SPES_GENERALE, OPTIONS_GENERALE, LANGUES, NOMS, JOURS, DATES } from './data.js';
import {
  state, save, remplacer, effacer, today, diff, jourSemaine, chargerTout, CONTENU, dues, matiereSuivante, chapitreSuivant,
  chapitre, seancesSemaine, objectifSemaine, serie, seancesRestantes, prochainJour, bilan, lundi, addDays,
  aRattraper, mesEpreuves, avancementMatiere,
} from './store.js';
import { nom, refresh, INPUTS, CHANGES } from './reviser.js';
import './seance.js';
import './bac.js';
import { apresRecherche, dansUneApp, installee } from './outils.js';

const APP = document.getElementById('app');
const ONGLETS = [['', 'home', 'Accueil'], ['reviser', 'livre', 'Réviser'], ['seance', 'play', ''], ['progres', 'barres', 'Progrès'], ['monbac', 'cible', 'Mon bac']];
const ONGLET_DE = { mat: 'reviser', chap: 'reviser', fiche: 'reviser', cartes: 'reviser', quiz: 'reviser', methode: 'reviser', sujet: 'reviser', epreuve: 'reviser',
  recherche: 'reviser', lexique: 'reviser', essentiel: 'reviser', planning: 'seance', grandoral: 'monbac', jourj: 'monbac', reglages: '', installer: '' };

function render() {
  const [v, ...rest] = location.hash.slice(1).split('/');
  const arg = rest.join('/');
  fermer();
  if (!state.voie || ob) { document.body.className = 'bienvenue'; APP.innerHTML = bienvenue(); apresBienvenue(); return; }
  const vue = Object.hasOwn(VIEWS, v) ? v : 'accueil';
  const enSeance = vue === 'seance' && state.seance && !state.seance.fin;
  document.body.className = enSeance ? 'en-seance' : '';
  APP.innerHTML = VIEWS[vue](arg) + (enSeance ? '' : barreBas(ONGLET_DE[vue] ?? (vue === 'accueil' ? '' : vue)));
  apresRecherche();
}
// Thème : auto (celui du téléphone), clair ou sombre.
export function appliquerTheme() {
  const sombre = state.theme === 'sombre' || (state.theme === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.dataset.theme = sombre ? 'sombre' : 'clair';
  document.querySelector('meta[name=theme-color]')?.setAttribute('content', sombre ? '#121116' : '#F3F1EC');
}
matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', appliquerTheme);
window.addEventListener('refresh', () => { const y = scrollY; render(); scrollTo(0, y); });
window.addEventListener('hashchange', () => { render(); scrollTo(0, 0); });

function barreBas(actif) {
  return `<nav class="tab">${ONGLETS.map(([h, i, t]) => h === 'seance'
    ? `<a href="#seance" class="centre ${actif === 'seance' ? 'on' : ''}" aria-label="Séance">${ico('play', 20)}${state.seance ? '<i class="pastille-s"></i>' : ''}</a>`
    : `<a href="#${h}" class="${actif === h ? 'on' : ''}">${ico(i)}<span>${t}</span></a>`).join('')}</nav>`;
}

// Un bouton agit avec data-act ; un champ avec data-in (à chaque frappe) ou data-ch (à la validation).
document.addEventListener('click', e => {
  const el = e.target.closest('[data-act]');
  if (el && ACTIONS[el.dataset.act]) ACTIONS[el.dataset.act](el, e);
});
document.addEventListener('input', e => { const el = e.target.closest('[data-in]'); if (el && INPUTS[el.dataset.in]) INPUTS[el.dataset.in](el); });
document.addEventListener('change', e => { const el = e.target.closest('[data-ch]'); if (el && CHANGES[el.dataset.ch]) CHANGES[el.dataset.ch](el); });

// ---------- Accueil ----------
VIEWS.accueil = () => {
  const t = today(), j = diff(t, DATES.philo), nd = dues().length, b = bilan();
  const s = state.seance;
  const mat = s ? s.mat : matiereSuivante(), chap = mat && chapitre(s ? s.chap : chapitreSuivant(mat));
  const pj = prochainJour();
  const rat = !s && aRattraper();
  const quand = s ? (s.court ? 'Révision express en cours' : 'Séance en cours') : rat ? `À rattraper · ${state.duree} min` : pj === t ? `Aujourd'hui · ${state.duree} min` : `${JOURS[jourSemaine(pj)]} · ${state.duree} min`;
  const fait = seancesSemaine().length, obj = objectifSemaine();
  const sem = [];
  for (let i = 9; i >= 0; i--) { const l = addDays(lundi(t), -7 * i); const n = seancesSemaine(l).length; sem.push(n >= obj ? 'ok' : i === 0 ? 'cette' : ''); }
  return `<div class="page accueil">
    <div class="haut"><div class="logo">Objectif <b>X</b></div><div class="haut-d"><a class="rond" href="#recherche" aria-label="Rechercher">${ico('loupe', 18)}</a><a class="ronde" href="#reglages" aria-label="Réglages">${state.prenom ? esc(state.prenom[0].toUpperCase()) : ico('reglages', 18)}</a></div></div>
    <div class="geant">${Math.max(0, j)}<i>.</i></div>
    <p class="sous"><b>${j > 1 ? 'jours avant la philo.' : j === 1 ? 'jour avant la philo.' : 'C\'est le moment.'}</b> ${j > 0 ? pluriel(seancesRestantes(), 'séance prévue', 'séances prévues') + ' d\'ici là.' : ''}</p>
    ${comptes()}
    ${carteDuMoment()}
    <div class="bento">
      ${chap ? `<a class="case seance" href="#seance"><div><div class="eti">${quand}</div><div class="t">${esc(nom(mat))} :<br>${esc(court(chap.t))}</div></div>
        <span class="go">${ico('play', 22)}</span></a>` : ''}
      <a class="case lilas" href="#monbac"><div class="eti">À viser</div><div class="gros">${b.viser === null ? virgule(b.vise) : b.viser <= 0 ? 'OK' : virgule(Math.min(20, b.viser))}</div><div class="petit">${b.rempli ? 'sur ce qui reste' : 'de moyenne partout'}</div></a>
      <a class="case" href="#cartes/revoir"><div class="eti">Cartes</div><div class="gros">${nd}</div><div class="petit">${nd ? 'à revoir aujourd\'hui' : 'rien à revoir'}</div></a>
      <a class="case large" href="#progres"><div style="display:flex;justify-content:space-between"><div class="eti">Ta série</div><div class="eti fort">${pluriel(serie(), 'semaine', 'semaines')}</div></div>
        <div class="points">${sem.map(c => `<i class="${c}"></i>`).join('')}</div>
        <div class="petit">Cette semaine : ${fait} sur ${pluriel(obj, 'séance', 'séances')}.</div></a>
    </div>
  </div>`;
};
// Les autres comptes à rebours, en petit sous le grand chiffre.
function comptes() {
  const t = today(), l = [];
  if (mesEpreuves().some(id => state.spes.includes(id))) l.push(['Spécialités', DATES.specialites]);
  if (mesEpreuves().includes('grand-oral')) l.push(['Grand oral', DATES.oral]);
  l.push(['Résultats', DATES.resultats]);
  return `<div class="comptes">${l.filter(([, d]) => d >= t).map(([n, d]) => `<a href="#monbac"><b>${diff(t, d)} j</b> ${n}</a>`).join('')}</div>`;
}
// Une seule carte « du moment » à la fois, pour ne pas charger l'accueil.
function carteDuMoment() {
  const t = today(), v = state.vus;
  const demain = mesEpreuves().map(id => ({ id, d: id.startsWith('philo') ? DATES.philo : id === 'grand-oral' ? DATES.oral : state.spes.includes(id) ? DATES.specialites : null }))
    .find(x => x.d && diff(t, x.d) >= 0 && diff(t, x.d) <= 1);
  if (demain) return `<div class="moment"><div class="eti">${diff(t, demain.d) ? 'Demain' : 'Aujourd\'hui'} · ${esc(nom(demain.id))}</div>
    <p>Pas de nouveau chapitre : relis l'essentiel, prépare ton sac, et dors bien.</p>
    <div class="moment-b"><a class="mini-b" href="#essentiel/${demain.id}">L'essentiel</a><a class="mini-b clair" href="#jourj">Le jour J</a></div></div>`;
  if (t >= '2027-04-01' && state.jours.length < 3 && !v.intensif) return `<div class="moment"><div class="eti">Le bac approche</div>
    <p>Il reste ${diff(t, DATES.philo)} jours. Passer à 3 séances par semaine jusqu'à l'épreuve ?</p>
    <div class="moment-b"><button class="mini-b" data-act="intensif">Oui, 3 par semaine</button><button class="mini-b clair" data-act="vu" data-x="intensif">Non merci</button></div></div>`;
  const l = lundi(t), avant = addDays(l, -7);
  if (jourSemaine(t) <= 1 && v.bilan !== l && state.seances.some(s => s.date < l)) {
    const sem = state.seances.filter(s => s.date >= avant && s.date < l), min = sem.reduce((a, s) => a + (s.min || 0), 0);
    const ret = mesEpreuves().filter(id => CONTENU.has(id)).sort((a, b) => avancementMatiere(a) - avancementMatiere(b))[0];
    return `<div class="moment"><div class="eti">Ta semaine dernière</div>
      <p><b>${pluriel(sem.filter(s => !s.court).length, 'séance', 'séances')}</b> sur ${objectifSemaine()}, ${min} minutes de révision.${ret ? ` La matière la moins avancée : <b>${esc(nom(ret))}</b>.` : ''}</p>
      <div class="moment-b"><button class="mini-b" data-act="vu" data-x="bilan" data-v="${l}">OK</button></div></div>`;
  }
  if (!installee() && !v.installer && (dansUneApp || /Android|iPhone|iPad/i.test(navigator.userAgent))) return `<div class="moment"><div class="eti">Sur ton téléphone</div>
    <p>Installe l'app : elle s'ouvre d'un geste et marche sans internet.</p>
    <div class="moment-b"><a class="mini-b" href="#installer">Comment faire</a><button class="mini-b clair" data-act="vu" data-x="installer">Plus tard</button></div></div>`;
  return '';
}
ACTIONS.vu = el => { state.vus[el.dataset.x] = el.dataset.v || true; save(); refresh(); };
ACTIONS.intensif = () => {
  const j = new Set(state.jours);
  for (const x of [5, 2, 0, 3, 6]) { if (j.size >= 3) break; j.add(x); }
  state.jours = [...j].sort(); state.vus.intensif = true; save(); toast('3 séances par semaine. Tu peux changer les jours dans les réglages.'); refresh();
};
// Titre de chapitre raccourci pour la carte de l'accueil.
const court = t => t.length > 48 ? t.slice(0, 46).replace(/\s+\S*$/, '') + '…' : t;

// ---------- Premier lancement ----------
// ob : réponses en cours ; etape 0 = surligneur, 1 = voie, 2 = matières, 3 = rythme.
let ob = null;
function debutOb(etape = 0) {
  ob = { etape, voie: state.voie || 'generale', spes: [...state.spes], options: [...state.options], lv: state.lv.length ? [...state.lv] : ['lv-ang', 'lv-esp'],
    jours: [...state.jours], duree: state.duree, prenom: state.prenom, choixTechno: null };
  if (ob.voie !== 'generale') ob.choixTechno = state.spes.find(id => (SERIES[ob.voie]?.choix || []).includes(id)) || null;
}
function bienvenue() {
  if (!ob) debutOb(0);
  if (ob.etape === 0) return `<div class="ouv" id="ouv">
    ${dansUneApp ? '<div class="dans-app">Tu es dans le navigateur de TikTok ou d’Instagram. Pour installer l’app et garder tes progrès, ouvre cette page dans Safari ou Chrome (menu en haut à droite, « Ouvrir dans le navigateur »).</div>' : ''}
    <div class="contenu"><div class="logo">Objectif <b>X</b></div>
      <div class="phrase">Le bac,<br><span class="l2" id="l2">je l'ai.<canvas id="encre"></canvas></span></div>
      <div class="aide">Surligne pour commencer <span class="fleche"></span></div></div>
    <div class="zone" id="zone"></div>
    <div class="stylo repos" id="stylo"><svg width="40" height="170" viewBox="0 0 40 170" aria-hidden="true">
      <path d="M2 150 L2 136 L12 128 L12 150 Z" fill="#9C82FF"/><path d="M2 136 L12 128 L12 132 L2 140 Z" fill="#B9A6FF"/>
      <rect x="0" y="112" width="16" height="18" rx="2" fill="#2B2440"/><rect x="-3" y="20" width="22" height="94" rx="6" fill="#7357E0"/>
      <rect x="1" y="26" width="4" height="82" rx="2" fill="rgba(255,255,255,.28)"/><rect x="-3" y="72" width="22" height="16" fill="#5E45C7"/>
      <rect x="-2" y="0" width="20" height="24" rx="5" fill="#2B2440"/></svg></div>
    <div class="panneau">
      <h2>C'est noté.</h2><p class="sous">Trois questions, et tes séances jusqu'au bac sont prêtes.</p>
      <div class="eti">Ta voie</div>
      <div class="puces">${VOIES.map(v => `<button class="${ob.voie === v.id ? 'choisi' : ''}" data-act="obVoie" data-x="${v.id}">${v.nom}</button>`).join('')}</div>
      <button class="go-btn" data-act="obSuite">Continuer ${ico('fleche', 18)}</button>
    </div></div>`;
  const pas = `<div class="ob-pas">${[1, 2, 3].map(i => `<i class="${i <= ob.etape ? 'ok' : ''}"></i>`).join('')}</div>`;
  const retour = `<button class="rond" data-act="obRetour" aria-label="Retour">${ico('retour', 20)}</button>`;
  if (ob.etape === 1 || ob.etape === 2) {
    let corps = '';
    if (ob.voie === 'generale') {
      corps = `<div class="eti">Tes deux spécialités <span class="compte">${ob.spes.length} sur 2</span></div>
        <div class="puces">${SPES_GENERALE.map(id => `<button class="${ob.spes.includes(id) ? 'choisi' : ''}" data-act="obSpe" data-x="${id}">${esc(NOMS[id])}</button>`).join('')}</div>
        <div class="eti">Une option ? <span class="compte">facultatif</span></div>
        <div class="puces">${OPTIONS_GENERALE.map(id => `<button class="${ob.options.includes(id) ? 'choisi' : ''}" data-act="obOption" data-x="${id}">${esc(NOMS[id])}</button>`).join('')}</div>`;
    } else {
      const S = SERIES[ob.voie];
      corps = `<div class="eti">Tes spécialités</div><div class="puces">${S.fixes.map(id => `<span class="choisi fixe">${esc(NOMS[id])}</span>`).join('')}</div>
        ${S.choix.length ? `<div class="eti">${S.titreChoix}</div><div class="puces">${S.choix.map(id => `<button class="${ob.choixTechno === id ? 'choisi' : ''}" data-act="obTechno" data-x="${id}">${esc(NOMS[id])}</button>`).join('')}</div>` : ''}`;
    }
    const lv = (k, titre) => `<div class="eti">${titre}</div><div class="puces">${[...LANGUES, ''].map(id => `<button class="${(ob.lv[k] || '') === id ? 'choisi' : ''}" data-act="obLv" data-k="${k}" data-x="${id}">${id ? esc(NOMS[id]) : 'Une autre'}</button>`).join('')}</div>`;
    return `<div class="page ob">${pas}<div class="ob-haut">${retour}</div><h1 class="titre">Tes matières</h1>
      <p class="sous">Pour te proposer les bons chapitres. Tu pourras changer plus tard.</p>${corps}${lv(0, 'Langue vivante A')}${lv(1, 'Langue vivante B')}
      <button class="go-btn" data-act="obSuite" ${pret() ? '' : 'disabled'}>Continuer ${ico('fleche', 18)}</button></div>`;
  }
  return `<div class="page ob">${pas}<div class="ob-haut">${retour}</div><h1 class="titre">Ton rythme</h1>
    <p class="sous">Choisis tes jours de révision. Une séance est préparée pour chacun, et l'app te dit quoi faire.</p>
    <div class="eti">Tes jours <span class="compte">${pluriel(ob.jours.length, 'séance', 'séances')} par semaine</span></div>
    <div class="jours">${JOURS.map((j, i) => `<button class="${ob.jours.includes(i) ? 'choisi' : ''}" data-act="obJour" data-x="${i}">${j.slice(0, 3)}</button>`).join('')}</div>
    <div class="eti">Durée d'une séance</div>
    <div class="puces">${[20, 45, 60].map(d => `<button class="${ob.duree === d ? 'choisi' : ''}" data-act="obDuree" data-x="${d}">${d} min</button>`).join('')}</div>
    <div class="eti">Ton prénom <span class="compte">facultatif, reste sur ton téléphone</span></div>
    <input class="champ" data-in="obPrenom" value="${esc(ob.prenom)}" maxlength="20" autocomplete="given-name" placeholder="Prénom">
    <button class="go-btn" data-act="obFin" ${ob.jours.length ? '' : 'disabled'}>C'est parti ${ico('fleche', 18)}</button></div>`;
}
const pret = () => ob.voie === 'generale' ? ob.spes.length === 2 : !SERIES[ob.voie].choix.length || ob.choixTechno;
const rob = () => { const y = scrollY; APP.innerHTML = bienvenue(); apresBienvenue(); scrollTo(0, y); };
Object.assign(ACTIONS, {
  obVoie: el => { if (ob.voie !== el.dataset.x) { ob.voie = el.dataset.x; ob.spes = []; ob.choixTechno = null; } document.querySelectorAll('[data-act=obVoie]').forEach(b => b.classList.toggle('choisi', b === el)); },
  obSuite: () => { if (ob.etape > 0 && !pret()) return; ob.etape = ob.etape === 0 ? 2 : 3; rob(); scrollTo(0, 0); },
  obRetour: () => { if (ob.etape === 2 && !state.voie) { ob.etape = 0; ob.encre = false; } else if (ob.etape === 2) { ob = null; location.hash = '#reglages'; render(); return; } else ob.etape = 2; rob(); },
  obSpe: el => { const id = el.dataset.x, i = ob.spes.indexOf(id); if (i >= 0) ob.spes.splice(i, 1); else if (ob.spes.length < 2) ob.spes.push(id); else toast('Deux spécialités en terminale : enlève-en une d\'abord.'); rob(); },
  obOption: el => { const id = el.dataset.x; ob.options = ob.options.includes(id) ? [] : [id]; rob(); },
  obTechno: el => { ob.choixTechno = el.dataset.x; rob(); },
  obLv: el => { ob.lv[+el.dataset.k] = el.dataset.x; rob(); },
  obJour: el => { const i = +el.dataset.x; ob.jours = ob.jours.includes(i) ? ob.jours.filter(x => x !== i) : [...ob.jours, i].sort(); rob(); },
  obDuree: el => { ob.duree = +el.dataset.x; rob(); },
  obFin: async () => {
    if (!ob.jours.length) return;
    const S = SERIES[ob.voie];
    state.voie = ob.voie;
    state.spes = ob.voie === 'generale' ? ob.spes : [...S.fixes, ...(ob.choixTechno ? [ob.choixTechno] : [])];
    state.options = ob.voie === 'generale' ? ob.options : [];
    state.lv = ob.lv.filter(Boolean);
    state.jours = ob.jours; state.duree = ob.duree; state.prenom = ob.prenom.trim();
    save(); ob = null;
    APP.innerHTML = '<div class="chargement">Préparation de tes matières…</div>';
    await chargerTout();
    location.hash = '#'; render();
  },
});
INPUTS.obPrenom = el => { ob.prenom = el.value; };

// Le surligneur : le stylo suit le doigt, l'encre se pose par petites touches ; à 90 % de la phrase couverte, c'est gagné.
function apresBienvenue() {
  const ouv = document.getElementById('ouv');
  if (!ouv) return;
  if (ob.encre) { ouv.classList.add('fini', 'pose'); }
  const zone = document.getElementById('zone'), stylo = document.getElementById('stylo');
  const l2 = document.getElementById('l2'), cv = document.getElementById('encre'), ctx = cv.getContext('2d');
  const DEB = 10;
  let W, H, bandeH, bandeY, couvert, dessine = false, precedent = null, fini = !!ob.encre, vivant = true;
  const pos = { x: 0, y: 0 }, cible = { x: 0, y: 0 };
  const coin = (cx, cy) => { const e = ouv.getBoundingClientRect(); return { x: cx - e.left, y: cy - e.top }; };
  const place = () => { stylo.style.transform = `translate(${pos.x}px, ${pos.y}px)`; };
  function prepare() {
    const r = l2.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
    W = Math.round(r.width + DEB * 2); H = Math.round(r.height + 8);
    cv.width = W * dpr; cv.height = H * dpr; cv.style.width = W + 'px'; cv.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
    bandeH = r.height * 0.64; bandeY = 4 + r.height * 0.55;
    couvert = new Uint8Array(W);
    const p = coin(r.left - 16, r.top + 4 + r.height * 0.62);
    Object.assign(pos, p); Object.assign(cible, p); place();
    const z = coin(0, r.top - 80); zone.style.top = Math.max(0, z.y) + 'px';
    if (fini) for (let i = 0; i < W; i++) touche(i, bandeY, 1.4);
  }
  function touche(x, y, force) {
    const h = bandeH * (0.94 + Math.random() * 0.08);
    const haut = y - h / 2 + (Math.random() - 0.5) * 1.6, bas = y + h / 2 + (Math.random() - 0.5) * 1.6;
    ctx.globalAlpha = 0.16 * force; ctx.fillStyle = '#8F74FF';
    ctx.beginPath(); ctx.moveTo(x - 2, haut); ctx.lineTo(x + 2, haut); ctx.lineTo(x + 0.5, bas); ctx.lineTo(x - 3.5, bas); ctx.fill();
    const xi = Math.round(x);
    for (let i = xi - 3; i <= xi + 2; i++) if (i >= 0 && i < W) couvert[i] = 1;
  }
  function trace(a, b) { const n = Math.max(1, Math.ceil(Math.hypot(b.x - a.x, b.y - a.y) / 0.7)); for (let i = 0; i <= n; i++) touche(a.x + (b.x - a.x) * i / n, a.y + (b.y - a.y) * i / n, 1); }
  function versToile(p) {
    const e = ouv.getBoundingClientRect(), c = cv.getBoundingClientRect();
    const x = p.x + e.left - c.left, y = p.y + e.top - c.top;
    return { x, y: bandeY + Math.max(-5, Math.min(5, (y - bandeY) * 0.18)) };
  }
  const progression = () => { let n = 0; for (let i = DEB; i < W - DEB; i++) n += couvert[i]; return n / (W - DEB * 2); };
  function boucle() {
    if (!vivant || !document.body.contains(ouv)) return;
    pos.x += (cible.x - pos.x) * 0.38; pos.y += (cible.y - pos.y) * 0.38; place();
    if (dessine && !fini) {
      const t = versToile(pos);
      if (precedent) trace(precedent, t); else { touche(t.x, t.y, 2.2); touche(t.x + 1, t.y, 2.2); }
      precedent = t;
      if (progression() > 0.9) termine();
    }
    requestAnimationFrame(boucle);
  }
  function termine() {
    fini = true; dessine = false; ob.encre = true;
    const trous = []; for (let i = DEB; i < W - DEB; i++) if (!couvert[i]) trous.push(i);
    let k = 0;
    (function comble() { for (let j = 0; j < 6 && k < trous.length; j++, k++) touche(trous[k], bandeY + (Math.random() - 0.5) * 2, 1); if (k < trous.length) requestAnimationFrame(comble); })();
    ouv.classList.add('fini');
    if (navigator.vibrate && navigator.userActivation?.hasBeenActive) navigator.vibrate(12);
    setTimeout(() => ouv.classList.add('pose'), 380);
  }
  zone.addEventListener('pointerdown', e => {
    if (fini) return;
    try { zone.setPointerCapture(e.pointerId); } catch {}
    Object.assign(cible, coin(e.clientX, e.clientY)); Object.assign(pos, cible);
    dessine = true; precedent = null;
    ouv.classList.add('actif'); stylo.classList.remove('repos'); stylo.classList.add('appuie');
  });
  zone.addEventListener('pointermove', e => { if (dessine) Object.assign(cible, coin(e.clientX, e.clientY)); });
  const lever = () => { dessine = false; precedent = null; stylo.classList.remove('appuie'); };
  zone.addEventListener('pointerup', lever); zone.addEventListener('pointercancel', lever);
  document.fonts.ready.then(() => { prepare(); requestAnimationFrame(boucle); });
  const rs = () => { if (!document.body.contains(ouv)) { removeEventListener('resize', rs); vivant = false; return; } prepare(); };
  addEventListener('resize', rs);
}

// ---------- Réglages ----------
VIEWS.reglages = () => {
  const ids = [...state.spes, ...state.options];
  return `<div class="page">
    <header class="tete"><a class="rond" href="#" aria-label="Retour">${ico('retour', 20)}</a><div><div class="eti">Objectif X</div><h1>Réglages</h1></div></header>
    <h2 class="sec">Mes matières</h2>
    <div class="carte-texte"><div class="eti">Voie ${esc(VOIES.find(v => v.id === state.voie)?.nom || '')}</div>
      <p>${ids.map(id => esc(nom(id))).join(', ')}${state.lv.length ? ' · ' + state.lv.map(id => esc(NOMS[id])).join(', ') : ''}</p>
      <button class="bouton" data-act="changerMatieres">Changer de voie ou de matières</button></div>
    <h2 class="sec">Mon rythme</h2>
    <div class="carte-texte"><div class="eti">Jours de révision</div>
      <div class="jours">${JOURS.map((j, i) => `<button class="${state.jours.includes(i) ? 'choisi' : ''}" data-act="jour" data-x="${i}">${j.slice(0, 3)}</button>`).join('')}</div>
      <div class="eti">Durée d'une séance</div>
      <div class="puces">${[20, 45, 60].map(d => `<button class="${state.duree === d ? 'choisi' : ''}" data-act="duree" data-x="${d}">${d} min</button>`).join('')}</div>
      <div class="eti">Prénom</div><input class="champ" data-ch="prenom" value="${esc(state.prenom)}" maxlength="20" placeholder="Prénom"></div>
    <h2 class="sec">Rappels et affichage</h2>
    <div class="carte-texte"><div class="eti">Heure de tes séances</div>
      <select class="champ" data-ch="heure">${Array.from({ length: 16 }, (_, i) => i + 7).map(h => `<option value="${h}" ${state.heure === h ? 'selected' : ''}>${h} h</option>`).join('')}</select>
      <button class="bouton" data-act="agenda">${ico('calendrier', 18)} Ajouter mes séances à mon agenda</button>
      <p class="petit">Ton agenda te prévient à l'heure choisie, chaque jour de révision. Si tu changes tes jours, ajoute-les de nouveau.</p>
      <div class="eti">Thème</div>
      <div class="puces">${[['auto', 'Comme le téléphone'], ['clair', 'Clair'], ['sombre', 'Sombre']].map(([k, n]) => `<button class="${state.theme === k ? 'choisi' : ''}" data-act="theme" data-x="${k}">${n}</button>`).join('')}</div>
      <a class="bouton" href="#installer">${ico('telephone', 18)} Installer l'app sur mon téléphone</a></div>
    <h2 class="sec">Mes données</h2>
    <div class="carte-texte"><p>Tout reste sur ce téléphone : pas de compte, rien n'est envoyé. Pour changer de téléphone, enregistre un fichier puis ouvre-le sur le nouveau.</p>
      <button class="bouton" data-act="exporter">Enregistrer mes données dans un fichier</button>
      <label class="bouton">Reprendre depuis un fichier<input type="file" accept=".json,application/json" data-ch="importer" hidden></label>
      <button class="bouton danger" data-act="toutEffacer">Tout effacer</button></div>
    <h2 class="sec">À propos</h2>
    <div class="carte-texte"><p>Objectif X est gratuit, sans publicité et sans compte. Les chapitres suivent les programmes officiels de terminale. Les coefficients et les dates sont ceux connus pour la session 2027.</p></div>
  </div>`;
};
Object.assign(ACTIONS, {
  changerMatieres: () => { debutOb(2); render(); scrollTo(0, 0); },
  jour: el => { const i = +el.dataset.x; const j = state.jours.includes(i) ? state.jours.filter(x => x !== i) : [...state.jours, i].sort(); if (!j.length) return toast('Garde au moins un jour.'); state.jours = j; save(); refresh(); },
  duree: el => { state.duree = +el.dataset.x; save(); refresh(); },
  exporter: () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify({ app: 'objectif-x', date: today(), state })], { type: 'application/json' }));
    a.download = `objectif-x-${today()}.json`; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  },
  toutEffacer: () => fenetre(`<h2>Tout effacer ?</h2><p>Ta progression, tes séances et tes notes seront supprimées de ce téléphone. Enregistre d'abord un fichier si tu veux les garder.</p>
    <button class="bouton danger" data-act="effacerOui">Oui, tout effacer</button><button class="bouton plein" data-act="fermer">Annuler</button>`),
  effacerOui: () => { effacer(); fermer(); location.hash = '#'; render(); },
});
CHANGES.heure = el => { state.heure = +el.value; save(); };
ACTIONS.theme = el => { state.theme = el.dataset.x; save(); appliquerTheme(); refresh(); };
CHANGES.prenom = el => { state.prenom = el.value.trim(); save(); };
CHANGES.importer = async el => {
  try {
    const d = JSON.parse(await el.files[0].text());
    if (d.app !== 'objectif-x' || !d.state) throw 0;
    remplacer(d.state); await chargerTout(); toast('Données reprises.'); location.hash = '#'; render();
  } catch { toast('Ce fichier ne vient pas d\'Objectif X.'); }
};

// ---------- Démarrage ----------
(async () => {
  appliquerTheme();
  if (navigator.storage?.persist) navigator.storage.persist().catch(() => {});
  // Hors ligne : seulement en ligne (https). En local, pas de cache, pour voir tout de suite chaque changement.
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    const avait = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.register('sw.js').catch(() => {});
    // Nouvelle version installée : on recharge, sauf au milieu d'une séance (elle se rechargera à la prochaine ouverture).
    navigator.serviceWorker.addEventListener('controllerchange', () => { if (avait && !(state.seance && !state.seance.fin)) location.reload(); });
  }
  if (state.voie) { APP.innerHTML = '<div class="chargement">Objectif X</div>'; await chargerTout(); }
  render();
})();
