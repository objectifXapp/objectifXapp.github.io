// Ce qui est fixe : les voies, les matières de chaque voie, les coefficients et les dates du bac 2027.
// Les coefficients et les dates sont à confirmer chaque année (notes de service du ministère).

export const VOIES = [
  { id: 'generale', nom: 'Générale' },
  { id: 'stmg', nom: 'STMG' }, { id: 'sti2d', nom: 'STI2D' }, { id: 'st2s', nom: 'ST2S' },
  { id: 'stl', nom: 'STL' }, { id: 'std2a', nom: 'STD2A' }, { id: 'sthr', nom: 'STHR' },
  { id: 's2tmd', nom: 'S2TMD' }, { id: 'stav', nom: 'STAV' },
];

// Noms courts, pour les boutons et les listes.
export const NOMS = {
  'philo-g': 'Philosophie', 'philo-t': 'Philosophie', 'grand-oral': 'Grand oral',
  maths: 'Mathématiques', ses: 'SES', pc: 'Physique-chimie', svt: 'SVT', hggsp: 'HGGSP',
  'llcer-ang': 'LLCER anglais', amc: 'Anglais monde contemporain', hlp: 'HLP', nsi: 'NSI', si: 'Sciences de l\'ingénieur',
  'llcer-esp': 'LLCER espagnol', 'llcer-all': 'LLCER allemand', 'llcer-ita': 'LLCER italien',
  'llca-lat': 'Latin (LLCA)', 'llca-grec': 'Grec (LLCA)', bioeco: 'Biologie-écologie', eppcs: 'EPPCS',
  'arts-pla': 'Arts plastiques', cine: 'Cinéma-audiovisuel', hida: 'Histoire des arts', musique: 'Musique',
  theatre: 'Théâtre', danse: 'Danse', 'maths-exp': 'Maths expertes', 'maths-comp': 'Maths complémentaires',
  'stmg-de': 'Droit et économie', 'stmg-msgn': 'Management (MSGN)', 'stmg-rhc': 'RH et communication',
  'stmg-merca': 'Mercatique', 'stmg-gf': 'Gestion et finance', 'stmg-sig': 'Systèmes d\'information',
  'sti2d-pcm': 'Physique-chimie et maths', 'sti2d-2i2d': '2I2D (tronc commun)', 'sti2d-ac': 'Architecture et construction',
  'sti2d-ee': 'Énergies et environnement', 'sti2d-itec': 'Innovation et éco-conception', 'sti2d-sin': 'Systèmes d\'information et numérique',
  'st2s-stss': 'Sciences sanitaires et sociales', 'st2s-cbph': 'Chimie, biologie, physiopathologie',
  'stl-pcm': 'Physique-chimie et maths', 'stl-bgb': 'Biochimie-biologie-biotechnologie', 'stl-spcl': 'Sciences physiques et chimiques en labo',
  'std2a-amd': 'Analyse et méthodes en design', 'std2a-ccd': 'Conception et création en design',
  'sthr-egh': 'Économie-gestion hôtelière', 'sthr-stcs': 'Sciences et technologies culinaires et des services',
  's2tmd-edes': 'Économie, droit et environnement du spectacle', 's2tmd-pratique': 'Pratique et culture',
  'stav-gra': 'Gestion des ressources et alimentation', 'stav-tt': 'Territoires et technologie',
  'hg-g': 'Histoire-géographie', 'hg-t': 'Histoire-géographie', 'ens-sci': 'Enseignement scientifique', emc: 'EMC',
  'lv-ang': 'Anglais', 'lv-esp': 'Espagnol', 'lv-all': 'Allemand',
};

export const SPES_GENERALE = ['maths', 'pc', 'svt', 'ses', 'hggsp', 'hlp', 'llcer-ang', 'llcer-esp', 'llcer-all', 'llcer-ita',
  'amc', 'nsi', 'si', 'llca-lat', 'llca-grec', 'bioeco', 'eppcs', 'arts-pla', 'cine', 'hida', 'musique', 'theatre', 'danse'];
export const OPTIONS_GENERALE = ['maths-exp', 'maths-comp'];
export const LANGUES = ['lv-ang', 'lv-esp', 'lv-all'];

// Voie technologique : les spécialités fixes, plus un choix parmi `choix` quand il y en a un.
export const SERIES = {
  stmg: { fixes: ['stmg-de', 'stmg-msgn'], choix: ['stmg-rhc', 'stmg-merca', 'stmg-gf', 'stmg-sig'], titreChoix: 'Ton enseignement spécifique' },
  sti2d: { fixes: ['sti2d-pcm', 'sti2d-2i2d'], choix: ['sti2d-ac', 'sti2d-ee', 'sti2d-itec', 'sti2d-sin'], titreChoix: 'Ton enseignement spécifique' },
  st2s: { fixes: ['st2s-stss', 'st2s-cbph'], choix: [] },
  stl: { fixes: ['stl-pcm'], choix: ['stl-bgb', 'stl-spcl'], titreChoix: 'Ta deuxième spécialité' },
  std2a: { fixes: ['std2a-amd', 'std2a-ccd'], choix: [] },
  sthr: { fixes: ['sthr-egh', 'sthr-stcs'], choix: [] },
  s2tmd: { fixes: ['s2tmd-pratique'], choix: [] },
  stav: { fixes: ['stav-gra', 'stav-tt'], choix: [] },
};

// Enseignements qui n'ont pas d'épreuve à eux : ils comptent dans une autre épreuve.
// STMG : l'enseignement spécifique sert au grand oral. STI2D : la partie spécifique fait partie de l'épreuve de 2I2D.
export const RATTACHE = {
  'stmg-rhc': { a: 'grand-oral', txt: 'Pas d\'épreuve à part : il sert au grand oral' },
  'stmg-merca': { a: 'grand-oral', txt: 'Pas d\'épreuve à part : il sert au grand oral' },
  'stmg-gf': { a: 'grand-oral', txt: 'Pas d\'épreuve à part : il sert au grand oral' },
  'stmg-sig': { a: 'grand-oral', txt: 'Pas d\'épreuve à part : il sert au grand oral' },
  'sti2d-ac': { a: 'sti2d-2i2d', txt: 'Compris dans l\'épreuve de 2I2D' },
  'sti2d-ee': { a: 'sti2d-2i2d', txt: 'Compris dans l\'épreuve de 2I2D' },
  'sti2d-itec': { a: 'sti2d-2i2d', txt: 'Compris dans l\'épreuve de 2I2D' },
  'sti2d-sin': { a: 'sti2d-2i2d', txt: 'Compris dans l\'épreuve de 2I2D' },
};

// Les matières que tout le monde a, selon la voie.
export function communes(voie) {
  return voie === 'generale' ? ['philo-g', 'grand-oral', 'hg-g', 'ens-sci', 'emc'] : ['philo-t', 'grand-oral', 'hg-t', 'emc'];
}

// Dates indicatives de la session 2027 (à confirmer par le calendrier officiel).
export const DATES = {
  philo: '2027-06-14', specialites: '2027-06-16', specialitesFin: '2027-06-18',
  oral: '2027-06-21', oralFin: '2027-07-02', resultats: '2027-07-06',
};

// Coefficients du bac 2027 (total 100). Le contrôle continu compte 40 : 21 en première, 19 en terminale.
// L'épreuve anticipée de mathématiques (fin de première) compte 2.
// spes : les noms des deux spécialités de l'élève. ou : où trouver la note.
const RELEVE = 'Sur ton relevé de notes de première (donné par le lycée, aussi dans ton espace Cyclades)';
export function coefs(voie, spes = []) {
  const g = voie === 'generale';
  return [
    { id: 'fr-e', nom: 'Français écrit', coef: 5, ou: RELEVE },
    { id: 'fr-o', nom: 'Français oral', coef: 5, ou: RELEVE },
    { id: 'maths-a', nom: 'Maths, épreuve anticipée', coef: 2, ou: RELEVE },
    { id: 'cc1', nom: 'Contrôle continu de première', coef: 21, ou: RELEVE + ', ligne du contrôle continu. Sinon : la moyenne générale de tes bulletins de première' },
    { id: 'cc2', nom: 'Contrôle continu de terminale', coef: 19, ou: 'La moyenne générale de tes bulletins de terminale (Pronote ou ENT). Mets une estimation en cours d\'année' },
    { id: 'spe1', nom: spes[0] || 'Spécialité 1', coef: 16, ou: 'Épreuve de juin : mets la note que tu penses avoir, par exemple celle de ton bac blanc' },
    { id: 'spe2', nom: spes[1] || 'Spécialité 2', coef: 16, ou: 'Épreuve de juin : mets la note que tu penses avoir, par exemple celle de ton bac blanc' },
    { id: 'philo', nom: 'Philosophie', coef: g ? 8 : 4, ou: 'Épreuve de juin : mets la note que tu penses avoir' },
    { id: 'go', nom: 'Grand oral', coef: g ? 8 : 12, ou: 'Fin juin, début juillet : mets la note que tu penses avoir' },
  ];
}

// Adresse pour « Signaler une erreur » (une adresse anonyme, à créer). Vide = bouton caché.
export const CONTACT = 'objectifx.contact@gmail.com';

export const JOURS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
