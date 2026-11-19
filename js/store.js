// Données de l'élève (dans le navigateur, clé objx.v1), chargement du contenu, répétition espacée, séances, simulateur.
import { communes, coefs, DATES, SERIES, RATTACHE, NOMS } from './data.js';

const CLE = 'objx.v1';
export const VERSION = 1;

const neuf = () => ({
  v: VERSION, cree: today(), voie: null, spes: [], options: [], lv: [], prenom: '', jours: [5], duree: 45,
  lu: {}, srs: {}, quiz: {}, erreurs: {}, methode: {}, sujets: {}, seances: [], seance: null, notes: {}, blanc: {}, vus: {}, theme: 'auto', heure: 18, go: { q: ['', ''] }, jourj: {},
  moy: { n: 3, m: {} },
});

export let state = charger();

function charger() {
  try {
    const s = JSON.parse(localStorage.getItem(CLE));
    if (s && typeof s === 'object') return migrate(s);
  } catch {}
  return neuf();
}
function migrate(s) {
  const base = neuf();
  for (const k in base) if (s[k] === undefined) s[k] = base[k];
  s.v = VERSION;
  return s;
}
export function save() {
  try { localStorage.setItem(CLE, JSON.stringify(state)); } catch {}
}
export function remplacer(s) { state = migrate(s); save(); }
export function effacer() { state = neuf(); save(); }

// ---------- Dates ----------
export function today(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
export function addDays(iso, n) { const d = new Date(iso + 'T12:00'); d.setDate(d.getDate() + n); return today(d); }
export function diff(a, b) { return Math.round((new Date(b + 'T12:00') - new Date(a + 'T12:00')) / 864e5); }
export const jourSemaine = iso => (new Date(iso + 'T12:00').getDay() + 6) % 7;   // 0 = lundi
export const lundi = iso => addDays(iso, -jourSemaine(iso));

// ---------- Matières de l'élève ----------
export function mesMatieres() {
  if (!state.voie) return [];
  const ids = [...state.spes, ...communes(state.voie), ...state.options, ...state.lv];
  return [...new Set(ids)];
}
// Les épreuves du bac de l'élève (sans le contrôle continu ni ce qui est rattaché à une autre épreuve).
export function mesEpreuves() { return aPreparer().filter(id => !RATTACHE[id]); }
// L'épreuve d'une matière, corrigée selon la voie (le grand oral n'a pas le même coefficient partout).
export function epreuveDe(id) {
  const e = CONTENU.get(id)?.matiere.epreuve || {};
  if (id === 'grand-oral') return { ...e, coef: state.voie === 'generale' ? 8 : 12 };
  return e;
}
// Les matières qu'on prépare en séance (pas le contrôle continu).
export function aPreparer() {
  return mesMatieres().filter(id => {
    const m = CONTENU.get(id)?.matiere;
    return m && m.epreuve.type !== 'controle continu';
  });
}
export function seriesFixes(voie) { return SERIES[voie] || { fixes: [], choix: [] }; }

// ---------- Contenu ----------
export const CONTENU = new Map();
export async function chargerMatiere(id) {
  if (CONTENU.has(id)) return CONTENU.get(id);
  const C = (await import(`../contenu/${id}.js`)).default;
  CONTENU.set(id, C);
  return C;
}
export const chargerTout = () => Promise.all(mesMatieres().map(id => chargerMatiere(id).catch(() => null)));

export function paquet(chapId) {
  const id = chapId.replace(/-\d+$/, '');
  return CONTENU.get(id)?.paquets.find(p => p.chapitre === chapId);
}
export function chapitre(chapId) {
  const id = chapId.replace(/-\d+$/, '');
  const C = CONTENU.get(id);
  if (!C) return null;
  const i = C.matiere.chapitres.findIndex(c => c.id === chapId);
  return i < 0 ? null : { ...C.matiere.chapitres[i], n: i + 1, mat: C.matiere };
}
export const matiereDe = chapId => chapId.replace(/-\d+$/, '');

// Identifiant stable d'une carte ou d'une question : le chapitre plus une empreinte du texte.
export function empreinte(t) { let h = 0; for (let i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) | 0; return (h >>> 0).toString(36); }
export const idCarte = (chap, c) => chap + ':' + empreinte(c.q);

export function cartesDe(chapId) {
  const p = paquet(chapId);
  return p ? p.cartes.map(c => ({ ...c, id: idCarte(chapId, c), chap: chapId })) : [];
}
export function cartesMatiere(matId) {
  const C = CONTENU.get(matId);
  return C ? C.paquets.flatMap(p => cartesDe(p.chapitre)) : [];
}
// Cartes déjà vues dont le jour de révision est arrivé, dans toutes mes matières.
export function dues(matId) {
  const t = today();
  const ids = matId ? [matId] : mesMatieres();
  return ids.flatMap(cartesMatiere).filter(c => state.srs[c.id] && state.srs[c.id].due <= t);
}
// Répétition espacée. q : 0 = à revoir, 1 = je savais, 2 = facile. Plus on réussit, plus la carte revient tard.
export function noter(id, q) {
  const s = state.srs[id] || { int: 0, ease: 2.3 };
  if (q === 0) { s.int = 0; s.ease = Math.max(1.3, s.ease - 0.2); }
  else if (q === 1) s.int = s.int < 1 ? 1 : s.int < 3 ? 3 : Math.round(s.int * s.ease);
  else { s.int = s.int < 1 ? 3 : Math.round(s.int * s.ease * 1.3); s.ease += 0.1; }
  s.due = addDays(today(), s.int);
  state.srs[id] = s;
  save();
}

// Avancement d'un chapitre, de 0 à 1 : un tiers pour la fiche lue, un tiers pour les cartes sues, un tiers pour le quiz.
export function avancement(chapId) {
  const cs = cartesDe(chapId);
  const sues = cs.filter(c => state.srs[c.id] && state.srs[c.id].int >= 1).length;
  const q = state.quiz[chapId];
  return ((state.lu[chapId] ? 1 : 0) + (cs.length ? sues / cs.length : 0) + (q ? Math.min(1, q.best / 0.8) : 0)) / 3;
}
export const maitrise = chapId => avancement(chapId) >= 0.9;
export function avancementMatiere(matId) {
  const C = CONTENU.get(matId);
  if (!C) return 0;
  const ch = C.matiere.chapitres;
  return ch.reduce((s, c) => s + avancement(c.id), 0) / ch.length;
}

export function noterQuiz(chapId, bons, total) {
  const q = state.quiz[chapId] || { best: 0, n: 0, last: 0 };
  q.n++; q.last = bons / total; q.best = Math.max(q.best, q.last);
  state.quiz[chapId] = q;
  save();
}
export function erreur(chapId, question, juste) {
  const id = chapId + ':' + empreinte(question.q);
  if (juste) delete state.erreurs[id]; else state.erreurs[id] = { chap: chapId, q: question.q, date: today() };
  save();
}
export function questionsErreurs() {
  return Object.entries(state.erreurs).map(([id, e]) => {
    const p = paquet(e.chap);
    const q = p && p.quiz.find(x => x.q === e.q);
    return q ? { ...q, chap: e.chap, id } : null;
  }).filter(Boolean);
}

// ---------- Séances et planning ----------
export function seancesSemaine(iso = today()) {
  const l = lundi(iso), fin = addDays(l, 6);
  return state.seances.filter(s => !s.court && s.date >= l && s.date <= fin);
}
export const objectifSemaine = () => Math.max(1, state.jours.length);
// Série : nombre de semaines d'affilée (en finissant par la semaine dernière, ou celle-ci si elle est faite) où l'objectif est atteint.
export function serie() {
  let n = 0, l = lundi(today());
  if (seancesSemaine(l).length >= objectifSemaine()) n++;
  l = addDays(l, -7);
  while (seancesSemaine(l).length >= objectifSemaine() && l >= lundi(state.cree)) { n++; l = addDays(l, -7); }
  return n;
}
export const premiereEpreuve = () => DATES.philo;
// Nombre de jours de révision prévus d'ici la philo.
export function seancesRestantes() {
  let n = 0;
  for (let d = today(); d < DATES.philo; d = addDays(d, 1)) if (state.jours.includes(jourSemaine(d))) n++;
  return n;
}
// Le prochain jour de révision (aujourd'hui compris s'il n'est pas déjà fait).
export function prochainJour() {
  const t = today();
  const faiteAujourdhui = state.seances.some(s => s.date === t && !s.court);
  for (let i = faiteAujourdhui ? 1 : 0; i < 8; i++) {
    const d = addDays(t, i);
    if (state.jours.includes(jourSemaine(d))) return d;
  }
  return t;
}

// Matière de la prochaine séance : celle qui a eu le moins de séances par rapport à son poids (le coefficient).
// faites : { matière: nombre de séances } ; date : le jour de la séance (le grand oral se prépare à partir de février).
export function choisirMatiere(faites, date = today()) {
  const ids = aPreparer().filter(id => CONTENU.has(id) && (id !== 'grand-oral' || date >= '2027-02-01'));
  if (!ids.length) return null;
  const poids = id => RATTACHE[id] ? 6 : epreuveDe(id).coef || 8;
  return ids.map(id => ({ id, v: ((faites[id] || 0) + 1) / poids(id) }))
    .sort((a, b) => a.v - b.v || ids.indexOf(a.id) - ids.indexOf(b.id))[0].id;
}
export function seancesParMatiere() {
  const f = {};
  for (const s of state.seances) if (!s.court) f[s.mat] = (f[s.mat] || 0) + 1;
  return f;
}
export const matiereSuivante = () => choisirMatiere(seancesParMatiere());
// Les séances prévues d'ici la philo, avec la matière de chacune : [{ date, mat }].
export function planning() {
  const f = seancesParMatiere(), out = [];
  const faite = state.seances.some(s => s.date === today() && !s.court);
  for (let d = faite ? addDays(today(), 1) : today(); d < DATES.philo; d = addDays(d, 1)) {
    if (!state.jours.includes(jourSemaine(d))) continue;
    const mat = choisirMatiere(f, d);
    if (!mat) break;
    f[mat] = (f[mat] || 0) + 1;
    out.push({ date: d, mat });
  }
  return out;
}
// Séances de la semaine qui auraient dû être faites (jours passés) et ne l'ont pas été.
export function aRattraper() {
  const t = today(), j = jourSemaine(t);
  const prevues = state.jours.filter(x => x < j).length;
  return Math.max(0, prevues - seancesSemaine(t).length);
}
// Chapitre du jour : le premier pas encore maîtrisé.
export function chapitreSuivant(matId) {
  const C = CONTENU.get(matId);
  if (!C) return null;
  const ch = C.matiere.chapitres;
  return (ch.find(c => !maitrise(c.id)) || ch[0]).id;
}

// ---------- Simulateur ----------
// notes : { id: note sur 20 }. On compte les points acquis et la moyenne à viser sur ce qui reste.
// Mes moyennes : les matières du contrôle continu de terminale et leur poids (19 en tout).
export function matieresCC() {
  const g = (state.voie || 'generale') === 'generale', lv = k => state.lv[k] ? ` (${NOMS[state.lv[k]]})` : '';
  return [
    { id: 'hg', nom: 'Histoire-géographie', coef: 3 }, { id: 'lva', nom: 'Langue vivante A' + lv(0), coef: 3 },
    { id: 'lvb', nom: 'Langue vivante B' + lv(1), coef: 3 }, { id: 'sci', nom: g ? 'Enseignement scientifique' : 'Mathématiques', coef: 3 },
    { id: 'eps', nom: 'Éducation physique et sportive', coef: 6 }, { id: 'emc', nom: 'Enseignement moral et civique', coef: 1 },
  ];
}
export const periodes = id => (state.moy.m[id] || []).slice(0, state.moy.n);
export function moyAnnee(id) {
  const l = periodes(id).filter(x => typeof x === 'number');
  return l.length ? l.reduce((a, x) => a + x, 0) / l.length : null;
}
// Contrôle continu de terminale calculé depuis les moyennes entrées (null si aucune).
export function ccMoyennes() {
  let s = 0, c = 0, complet = true;
  for (const m of matieresCC()) {
    const a = moyAnnee(m.id);
    if (a !== null) { s += a * m.coef; c += m.coef; }
    if (periodes(m.id).filter(x => typeof x === 'number').length < state.moy.n) complet = false;
  }
  return c ? { note: s / c, complet } : null;
}

export function bilan(sansCC2 = false) {
  const spes = state.spes.filter(id => !RATTACHE[id]).map(id => NOMS[id]);
  const auto = ccMoyennes();
  const eps = coefs(state.voie || 'generale', spes).map(e => ({ ...e, note: e.id === 'cc2' ? (sansCC2 ? undefined : auto ? auto.note : state.notes.cc2) : state.notes[e.id] }));
  let acquis = 0, reste = 0;
  for (const e of eps) { if (typeof e.note === 'number') acquis += e.note * e.coef; else reste += e.coef; }
  const total = eps.reduce((s, e) => s + e.coef, 0);
  const cible = (state.notes.vise ?? 10) * total;
  const viser = reste ? (cible - acquis) / reste : null;
  const moyenne = total - reste ? acquis / (total - reste) : null;
  // notes de bac blanc : celles marquées comme telles (par défaut, les épreuves de juin)
  const passees = ['fr-e', 'fr-o', 'maths-a', 'cc1'];
  const blancs = eps.filter(e => typeof e.note === 'number' && (e.id === 'cc2' && auto ? !auto.complet : (state.blanc[e.id] ?? !passees.includes(e.id)))).length;
  return { eps, acquis, reste, total, viser, moyenne, blancs, vise: state.notes.vise ?? 10, rempli: total - reste, auto };
}
