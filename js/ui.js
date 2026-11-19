// Briques communes : icônes, échappement, petit Markdown des fiches, fenêtres, messages, tables VIEWS et ACTIONS.

import { CONTACT } from './data.js';

export const VIEWS = {};     // écran : VIEWS.nom(arg) renvoie du HTML (#nom/arg dans l'adresse)
export const ACTIONS = {};   // bouton : data-act="nom" data-x="…" appelle ACTIONS.nom(el)
export const APRES = [];     // fonctions à lancer après chaque affichage (écouteurs propres à un écran)

export const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const P = {
  home: '<path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z"/>',
  livre: '<path d="M5 4h11a3 3 0 013 3v13H8a3 3 0 01-3-3z"/><path d="M5 17a3 3 0 013-3h11"/>',
  barres: '<path d="M4 19V9M10 19V5M16 19v-7M21 19H3"/>',
  cible: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>',
  play: '<path d="M8 5l11 7-11 7z" fill="currentColor" stroke="none"/>',
  fleche: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  retour: '<path d="M15 5l-7 7 7 7"/>',
  croix: '<path d="M6 6l12 12M18 6L6 18"/>',
  ok: '<path d="M5 12.5l4.5 4.5L19 7"/>',
  cartes: '<rect x="4" y="6" width="13" height="14" rx="2"/><path d="M8 3h10a2 2 0 012 2v12"/>',
  quiz: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 114 2c-.9.6-1.5 1.1-1.5 2.2M12 17h.01"/>',
  fiche: '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
  stylo: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>',
  horloge: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  reglages: '<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 00-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 00-2-1.2L14 3h-4l-.5 2.6a7 7 0 00-2 1.2l-2.4-1-2 3.4 2 1.6a7 7 0 000 2.4l-2 1.6 2 3.4 2.4-1a7 7 0 002 1.2L10 21h4l.5-2.6a7 7 0 002-1.2l2.4 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2z"/>',
  calendrier: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>',
  erreur: '<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17h.01"/>',
  loupe: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  partage: '<path d="M12 3v12M7 8l5-5 5 5"/><path d="M5 13v6a2 2 0 002 2h10a2 2 0 002-2v-6"/>',
  eclair: '<path d="M13 3L5 13h6l-1 8 8-10h-6z"/>',
  liste: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h.01M4 12h.01M4 18h.01"/>',
  telephone: '<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 18h2"/>',
  chrono: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4M10 2h4"/>',
};
export const ico = (n, s = 22) => `<svg class="ico" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || ''}</svg>`;

// Fiche : ## titre, ### sous-titre, - puce, **gras**. Rien d'autre.
export function md(t) {
  const gras = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
  let html = '', liste = false;
  for (const l of String(t).split('\n')) {
    const x = l.trim();
    if (x.startsWith('- ')) { if (!liste) { html += '<ul>'; liste = true; } html += `<li>${gras(x.slice(2))}</li>`; continue; }
    if (liste) { html += '</ul>'; liste = false; }
    if (!x) continue;
    if (x.startsWith('### ')) html += `<h3>${gras(x.slice(4))}</h3>`;
    else if (x.startsWith('## ')) html += `<h2>${gras(x.slice(3))}</h2>`;
    else html += `<p>${gras(x)}</p>`;
  }
  return html + (liste ? '</ul>' : '');
}
// Texte simple sur plusieurs lignes (énoncés, corrigés) : paragraphes et gras.
export const texte = t => md(t);

export function toast(msg) {
  const el = document.createElement('div');
  el.className = 'toast'; el.textContent = msg;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('on'));
  setTimeout(() => { el.classList.remove('on'); setTimeout(() => el.remove(), 300); }, 2200);
}

// Fenêtre qui monte du bas. Se ferme par la croix, en touchant le fond ou par fermer().
export function fenetre(html) {
  fermer();
  const f = document.createElement('div');
  f.className = 'voile';
  f.innerHTML = `<div class="sheet" role="dialog"><button class="sheet-x" data-act="fermer" aria-label="Fermer">${ico('croix', 20)}</button>${html}</div>`;
  f.addEventListener('click', e => { if (e.target === f) fermer(); });
  document.body.appendChild(f);
  requestAnimationFrame(() => f.classList.add('on'));
  return f;
}
export function fermer() {
  document.querySelectorAll('.voile').forEach(f => { f.classList.remove('on'); setTimeout(() => f.remove(), 250); });
}
ACTIONS.fermer = fermer;

export const melange = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const pct = x => Math.round(x * 100) + ' %';
export const virgule = (x, d = 1) => x.toFixed(d).replace(/\.0+$/, '').replace('.', ',');
export function dateLongue(iso) {
  return new Date(iso + 'T12:00').toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
}
export const pluriel = (n, un, plusieurs) => `${n} ${n > 1 ? plusieurs : un}`;

// En-tête d'un écran secondaire : bouton retour + titre.
export function tete(titre, retour = '#reviser', sur = '') {
  return `<header class="tete"><a class="rond" href="${retour}" aria-label="Retour">${ico('retour', 20)}</a>
    <div><div class="eti">${esc(sur)}</div><h1>${esc(titre)}</h1></div></header>`;
}
export const barre = (x, cls = '') => `<div class="barre ${cls}"><i style="width:${Math.round(Math.min(1, x) * 100)}%"></i></div>`;

// ---------- Signaler une erreur ----------
// Le bouton n'apparaît que si une adresse de contact est réglée dans data.js.
export function lienSignaler(ou, texte) {
  if (!CONTACT) return '';
  const sujet = encodeURIComponent('Objectif X : erreur dans ' + ou);
  const corps = encodeURIComponent(`Où : ${ou}\nTexte : ${String(texte).slice(0, 300)}\n\nCe qui ne va pas :\n`);
  return `<a class="signaler" href="mailto:${CONTACT}?subject=${sujet}&body=${corps}">${ico('erreur', 15)} Signaler une erreur</a>`;
}

