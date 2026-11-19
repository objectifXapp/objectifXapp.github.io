// Analyse et méthodes en design (spécialité, terminale STD2A). Sources : voir matiere.sources.
// Programme : programme de design et métiers d'art de première, d'analyse et méthode en design et de conception et création de terminale STD2A (arrêté du 17 janvier 2019), organisé en cinq pôles : outils et méthodes, démarche créative, arts visuels, arts techniques et civilisations, technologies.
// Épreuve : note de service du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026), applicable à partir de la session 2027.
// Chapitres 1 et 2 : méthode de l'épreuve. Chapitres 3 à 5 : vocabulaire, matériaux, modes de production. Chapitres 6 et 7 : repères historiques. Chapitres 8 à 10 : usages, domaines et enjeux contemporains.
// Les références citées sont des repères de culture générale du design ; les cas d'entraînement sont inventés.
export default {
  matiere: {
    id: 'std2a-amd',
    nom: 'Analyse et méthodes en design',
    voie: 'std2a',
    epreuve: { type: 'ecrit', duree: 240, coef: 16, quand: 'juin', note: 'Épreuve écrite de 4 heures, notée sur 20, sans calculatrice ni dictionnaire. Le sujet donne un thème (souvent un verbe, parfois défini), une courte demande, deux questions au choix et un corpus de trois documents au plus (visuels ou textuels). Le candidat choisit une question et rédige un propos structuré, à la manière d\'une dissertation, fondé sur l\'analyse croisée des documents et sur ses propres références, avec des annotations graphiques (croquis, schémas) qui complètent l\'écrit. À partir de la session 2027, 2 points sur 20 sont réservés à l\'orthographe et à la syntaxe.' },
    sources: [
      'https://www.education.gouv.fr/bo/2026/Special4/MENE2622654N (épreuves STD2A à partir de la session 2027, dont 2 points sur 20 pour la langue)',
      'https://eduscol.education.fr/document/24820/download (programme de design et métiers d\'art de première, d\'analyse et méthode en design et de conception et création de terminale)',
      'https://sti.eduscol.education.fr/sites/eduscol.education.fr.sti/files/textes/bac-technologique/bac-technologique-std2a/17790-bac-std2a-2025-amd-note-accompagnement.pdf (attendus de l\'épreuve et formulation type d\'un sujet)',
      'https://sti.eduscol.education.fr/sites/eduscol.education.fr.sti/files/textes/bac-technologique/bac-technologique-std2a/13357-note-epreuve-analyse-et-methode-en-design.pdf (forme des sujets, attendus, annotations graphiques)',
      'https://www.freemaths.fr/sujets-du-bac/baccalaureat-technologique/std2a/analyse-et-methodes-en-design/ (sujets 2022 à 2026 : Jouer, Bifurquer, Économie, Intriguer, Tisser, Nouveaux outils, Préserver, Compléter, (Ré)générer)',
    ],
    chapitres: [
      { id: 'std2a-amd-1', t: 'Analyser un document et croiser un corpus', theme: 'Méthode de l\'épreuve' },
      { id: 'std2a-amd-2', t: 'Construire le propos : problématique, plan, références et croquis', theme: 'Méthode de l\'épreuve' },
      { id: 'std2a-amd-3', t: 'Le vocabulaire plastique, typographique et sémantique', theme: 'Outils d\'analyse' },
      { id: 'std2a-amd-4', t: 'Matériaux et procédés de fabrication', theme: 'Outils d\'analyse' },
      { id: 'std2a-amd-5', t: 'Artisanat, manufacture, industrie et métiers d\'art', theme: 'Outils d\'analyse' },
      { id: 'std2a-amd-6', t: 'Repères historiques : de la révolution industrielle à 1945', theme: 'Repères' },
      { id: 'std2a-amd-7', t: 'Repères historiques : de 1945 à aujourd\'hui', theme: 'Repères' },
      { id: 'std2a-amd-8', t: 'Fonctions, usages et usagers', theme: 'Grandes questions du design' },
      { id: 'std2a-amd-9', t: 'Les domaines : graphisme, espace, objet, mode et textile', theme: 'Grandes questions du design' },
      { id: 'std2a-amd-10', t: 'Enjeux contemporains : environnement, numérique, participation', theme: 'Grandes questions du design' },
    ],
  },
  paquets: [
    {
      chapitre: 'std2a-amd-1',
      fiche: `## Analyser un document et croiser un corpus

### Ce que l'épreuve demande
- Le sujet donne un **thème** (souvent un verbe : jouer, bifurquer, intriguer, tisser, préserver, compléter), parfois une **définition** tirée d'un dictionnaire, une courte **demande**, **deux questions** au choix et **trois documents** au plus.
- On choisit **une** question et on rédige un propos structuré qui s'appuie sur l'**analyse croisée** des documents et sur ses **propres références**.
- Quatre critères : pertinence de l'analyse croisée des documents ; cohérence du questionnement au regard du thème ; justesse des connaissances et références ; clarté de l'expression écrite et graphique. Depuis 2027, **2 points** sur 20 portent sur l'orthographe et la syntaxe.

### Lire la légende avant l'image
- La légende donne l'**auteur**, sa nationalité et son métier, le **titre**, la **date**, les **matériaux**, parfois les dimensions et un court texte d'explication. Ce sont des indices précieux : un fauteuil de jardin en plastique de grande série associé à de l'osier tressé annonce déjà une rencontre entre industrie et artisanat.
- Situer chaque document : **époque**, **domaine** (graphisme, objet, espace, mode, métier d'art, service), **contexte** (commande, public, lieu).

### Décrire puis analyser
- **Décrire** : dire ce que l'on voit de façon objective et précise (formes, matériaux, couleurs, dimensions, composition, mise en situation).
- **Analyser** : dépasser la description pour se demander **pourquoi** et **comment**. Les angles à croiser :
  - **technique** : matériaux, procédé de fabrication, assemblage, place du numérique ;
  - **plastique** : formes, proportions, couleurs, traitement de surface, composition ;
  - **fonctionnel** et d'**usage** : à quoi cela sert, qui s'en sert, comment, dans quelle situation ;
  - **sémantique** et symbolique : ce que l'objet signifie, évoque, raconte ;
  - **historique** : héritage, rupture, évolution d'un usage ou d'une typologie ;
  - **sociétal** : enjeux environnementaux, sociaux, économiques, place de l'usager.
- **Interpréter** : relier ces observations au **thème** du sujet.

### Croiser les documents
- **Confronter**, c'est comparer : repérer les **convergences** (ce que les documents ont en commun) et les **divergences** (ce qui les oppose), puis en tirer des notions nuancées.
- Les trois documents relèvent en général de **domaines différents** et de **périodes différentes** : chacun ouvre une piste de réflexion. Un bon devoir ne les traite pas l'un après l'autre : il les fait dialoguer dans chaque partie.
- Un **tableau de croisement** au brouillon (documents en colonnes, angles d'analyse en lignes) aide à voir les liens.

### Les erreurs fréquentes
- Décrire sans analyser, ou paraphraser la légende.
- Analyser les trois documents séparément, sans les relier.
- Oublier le thème ou ne pas répondre à la question choisie.
- Copier les images au lieu de produire des croquis qui expliquent.

### À retenir pour le bac
- Une question au choix, trois documents au plus, une réponse construite.
- Lire la légende : auteur, date, matériaux, domaine, contexte.
- Décrire, analyser selon plusieurs angles, interpréter au regard du thème.
- Croiser : convergences et divergences, dans chaque partie du devoir.`,
      cartes: [
        { q: "Que contient un sujet d'AMD ?", r: "Un thème, parfois une définition, une demande, deux questions au choix et trois documents au plus." },
        { q: "Combien de questions traite-t-on ?", r: "Une seule, choisie parmi les deux proposées." },
        { q: "Quels sont les quatre critères d'évaluation ?", r: "Analyse croisée des documents, cohérence du questionnement, justesse des références, clarté de l'expression écrite et graphique." },
        { q: "Combien de points pour la langue depuis 2027 ?", r: "2 points sur 20 pour l'orthographe et la syntaxe." },
        { q: "Que faut-il lire dans une légende ?", r: "L'auteur, son métier et sa nationalité, le titre, la date, les matériaux, les dimensions et le contexte." },
        { q: "Quelle différence entre décrire et analyser ?", r: "Décrire dit ce que l'on voit ; analyser cherche pourquoi et comment, et relie au thème." },
        { q: "Citez les angles d'analyse d'un document.", r: "Technique, plastique, fonctionnel et d'usage, sémantique, historique, sociétal." },
        { q: "Qu'est-ce que l'angle sémantique ?", r: "Ce que l'objet signifie, évoque ou raconte." },
        { q: "Que veut dire confronter des documents ?", r: "Les comparer : repérer convergences et divergences, puis en tirer des notions nuancées." },
        { q: "Qu'est-ce qu'une convergence ?", r: "Un point commun entre plusieurs documents." },
        { q: "Pourquoi les documents viennent-ils de domaines différents ?", r: "Chacun ouvre une piste de réflexion différente sur le thème." },
        { q: "À quoi sert un tableau de croisement ?", r: "À mettre les documents en colonnes et les angles d'analyse en lignes pour voir les liens." },
        { q: "Quelle est l'erreur la plus fréquente ?", r: "Décrire les documents un par un sans les analyser ni les relier." },
      ],
      quiz: [
        { q: "Dans l'épreuve, le candidat traite :", choix: ["une question qu'il invente seul", "chacune des deux questions à la suite", "une des deux questions proposées", "un seul document du corpus"], bonne: 2, expl: "Il choisit une question et s'appuie sur tout le corpus.", niv: 1 },
        { q: "Le corpus d'un sujet compte au plus :", choix: ["deux documents", "trois documents", "cinq documents ou plus", "dix documents"], bonne: 1, expl: "Le nombre de documents est limité à trois.", niv: 1 },
        { q: "Depuis la session 2027, la langue compte pour :", choix: ["3 points sur 20", "2 points sur 20", "4 points sur 20", "6 points sur 20"], bonne: 1, expl: "Deux points sont réservés à l'orthographe et à la syntaxe.", niv: 1 },
        { q: "Repérer ce qui rapproche deux documents, c'est relever :", choix: ["une hypothèse de travail", "une divergence", "une légende", "une convergence"], bonne: 3, expl: "La divergence est au contraire ce qui les oppose.", niv: 1 },
        { q: "« Le fauteuil est en polypropylène blanc, avec un panier d'osier fixé au dos. » Cette phrase :", choix: ["décrit le document", "analyse sa portée sociale", "interprète le thème", "propose une problématique"], bonne: 0, expl: "Elle dit ce que l'on voit, sans encore expliquer pourquoi.", niv: 2 },
        { q: "Se demander ce qu'un objet évoque ou raconte relève de l'angle :", choix: ["économique", "technique", "sémantique", "chronologique"], bonne: 2, expl: "La sémantique porte sur le sens et les significations.", niv: 2 },
        { q: "Une légende indique « 1859, hêtre courbé à la vapeur ». Elle renseigne surtout sur :", choix: ["le public visé", "la couleur dominante de l'objet", "l'époque et le procédé technique", "le prix de vente"], bonne: 2, expl: "La date situe l'objet ; le cintrage à la vapeur est un procédé.", niv: 2 },
        { q: "Pourquoi éviter d'analyser les trois documents l'un après l'autre ?", choix: ["Le devoir doit les faire dialoguer dans chaque partie", "Le correcteur ne lit que le premier document analysé en détail", "Un document suffit pour répondre", "Les documents n'ont pas de lien avec le thème"], bonne: 0, expl: "L'analyse croisée est un critère d'évaluation.", niv: 2 },
        { q: "Lequel n'est **pas** un critère d'évaluation de l'épreuve ?", choix: ["La qualité d'une maquette en volume", "La justesse des références mobilisées", "L'analyse croisée des documents", "La clarté de l'expression écrite et graphique"], bonne: 0, expl: "L'épreuve est écrite ; aucune maquette n'est demandée.", niv: 2 },
        { q: "Une affiche, une chaise et un habitat participatif sont réunis dans un corpus. Pourquoi ce choix ?", choix: ["Pour que l'élève n'en traite qu'un", "Pour vérifier que l'élève connaît leurs prix de vente et leurs fabricants", "Parce qu'ils sont de la même époque", "Chaque domaine ouvre une piste différente sur le thème"], bonne: 3, expl: "Les documents viennent de domaines différents pour enrichir la réflexion.", niv: 3 },
        { q: "Un élève décrit très bien les documents mais ne relie rien au thème. Qu'a-t-il oublié ?", choix: ["Le choix des couleurs", "L'étape de description", "La lecture attentive des légendes", "L'étape d'interprétation"], bonne: 3, expl: "Il faut passer du constat au sens, au regard du thème.", niv: 3 },
        { q: "Quel outil de brouillon aide le mieux à croiser les documents ?", choix: ["Une liste de dates à apprendre", "Un tableau documents et angles d'analyse", "Une copie fidèle et colorée des images du corpus", "Un résumé de chaque légende"], bonne: 1, expl: "Il fait apparaître convergences et divergences.", niv: 3 },
      ],
    },
    {
      chapitre: 'std2a-amd-2',
      fiche: `## Construire le propos : problématique, plan, références et croquis

### Comprendre le thème
- Commencer par **définir** le thème, avec la définition donnée ou avec ses mots. Chercher ses **différents sens** (polysémie) : « tisser » veut dire entrelacer des fils, mais aussi créer des liens entre personnes.
- Chercher les **mots de la même famille**, les **synonymes** et les **contraires** : « préserver » appelle protéger, conserver, réparer, mais aussi figer.
- Relire la **demande** : elle circonscrit le périmètre de la réflexion (une époque, un enjeu, une catégorie d'acteurs).

### Poser une problématique
- La problématique est **la question précise** à laquelle le devoir va répondre. Elle part de la question choisie, mais la reformule en faisant apparaître une **tension** ou un paradoxe.
- Exemple : pour « Pourquoi un designer chercherait-il à intriguer l'usager ? », on peut se demander si rendre un objet moins évident peut, paradoxalement, mieux le faire comprendre et apprécier.

### Faire un plan
- La note d'accompagnement demande la forme de la **dissertation** : introduction, développement en plusieurs parties, conclusion.
- **Plan dialectique** : une première partie (oui, en effet…), une deuxième qui nuance ou s'oppose (mais…), une troisième qui dépasse la tension (en réalité, à condition que…).
- **Plan thématique** : deux ou trois parties qui explorent des aspects différents (l'usage, la forme, les enjeux sociétaux).
- Chaque partie avance une **idée** (argument), l'**illustre** par un document du corpus et une référence personnelle, puis **conclut** par une phrase de transition.
- Les étapes sont **visibles** (paragraphes, retours à la ligne) et **reliées** par des mots de liaison : en effet, cependant, ainsi, de plus, à l'inverse, en définitive.

### L'introduction et la conclusion
- **Introduction** : une accroche (un fait, une citation, un exemple), la définition du thème, la présentation rapide des documents, la problématique, l'annonce du plan.
- **Conclusion** : la réponse à la problématique, en reprenant les étapes, puis une **ouverture** vers une autre question ou un autre domaine.

### Mobiliser ses références
- Il faut des **exemples hors corpus** : objets, affiches, lieux, vêtements, œuvres, connus en cours ou par sa culture personnelle.
- Chaque référence est **identifiée** : auteur, titre, date ou période, matériaux, et **analysée** brièvement pour servir l'argument. Une liste d'exemples non analysés n'apporte rien.
- Les références d'autres domaines (cinéma, littérature, sciences, philosophie) sont un plus si elles sont pertinentes.

### Les annotations graphiques
- Le devoir est **écrit**, mais il comporte des **croquis** qui complètent le texte sans le répéter.
- **Dessin analytique** : un croquis qui explique une structure, un assemblage, un fonctionnement.
- **Dessin d'intention** et **schéma** : un tableau, une flèche, un schéma qui synthétise une étape du raisonnement.
- **Dessin d'expression** : une transcription visuelle d'une idée ou d'une ambiance.
- Chaque croquis est **légendé** et placé là où il sert l'argument. Matériel graphique sec (crayons, feutres, stylos), sur les copies fournies.

### À retenir pour le bac
- Définir le thème et ses sens ; relire la demande.
- Problématique : la question précise, avec une tension.
- Plan en deux ou trois parties, idée, document, référence, transition.
- Références identifiées et analysées ; croquis légendés qui complètent l'écrit.`,
      cartes: [
        { q: "Pourquoi définir le thème en introduction ?", r: "Pour en préciser les sens et le périmètre de la réflexion." },
        { q: "Qu'est-ce que la polysémie d'un thème ?", r: "Le fait qu'il ait plusieurs sens, comme tisser des fils et tisser des liens." },
        { q: "Qu'est-ce qu'une problématique ?", r: "La question précise à laquelle le devoir répond, qui fait apparaître une tension." },
        { q: "Quelle forme le devoir doit-il prendre ?", r: "Celle de la dissertation : introduction, développement en plusieurs parties, conclusion." },
        { q: "Qu'est-ce qu'un plan dialectique ?", r: "Une thèse, une antithèse qui nuance, puis un dépassement de la tension." },
        { q: "Qu'est-ce qu'un plan thématique ?", r: "Des parties qui explorent des aspects différents du sujet." },
        { q: "Que contient une partie du développement ?", r: "Une idée, un document du corpus, une référence personnelle analysée et une transition." },
        { q: "Que contient l'introduction ?", r: "Une accroche, la définition du thème, la présentation des documents, la problématique et le plan." },
        { q: "Que contient la conclusion ?", r: "La réponse à la problématique et une ouverture." },
        { q: "Comment présenter une référence personnelle ?", r: "Avec l'auteur, le titre, la date, les matériaux, et une brève analyse qui sert l'argument." },
        { q: "Qu'est-ce qu'un dessin analytique ?", r: "Un croquis qui explique une structure, un assemblage ou un fonctionnement." },
        { q: "Qu'est-ce qu'un dessin d'intention ?", r: "Un dessin ou un schéma qui formalise et communique une idée." },
        { q: "Quand un croquis est-il pertinent ?", r: "Quand il complète l'écrit sans le répéter et qu'il est légendé." },
      ],
      quiz: [
        { q: "La question précise à laquelle répond tout le devoir s'appelle :", choix: ["la problématique", "l'accroche de l'introduction", "l'ouverture", "la légende"], bonne: 0, expl: "Elle reformule la question choisie avec une tension.", niv: 1 },
        { q: "Une thèse, une antithèse puis un dépassement forment un plan :", choix: ["chronologique", "alphabétique", "descriptif", "dialectique"], bonne: 3, expl: "C'est le plan de la dissertation qui discute une idée.", niv: 1 },
        { q: "La fin de la conclusion propose :", choix: ["la liste des documents", "une nouvelle problématique à traiter", "une ouverture", "un résumé de la légende"], bonne: 2, expl: "On élargit la réflexion vers une autre question.", niv: 1 },
        { q: "Un croquis qui montre comment deux pièces s'assemblent est un dessin :", choix: ["d'observation pure", "analytique", "décoratif", "de signature"], bonne: 1, expl: "Il sert à comprendre une structure.", niv: 1 },
        { q: "Le thème « Tisser » peut aussi évoquer :", choix: ["l'impression d'une affiche", "le seul travail du métal", "la cuisson d'une céramique dans un four à bois", "la création de liens entre des personnes"], bonne: 3, expl: "Le sens figuré enrichit la réflexion.", niv: 2 },
        { q: "Quel mot de liaison annonce une nuance ?", choix: ["Cependant", "Par conséquent", "Ainsi", "En effet"], bonne: 0, expl: "« Cependant » introduit une restriction.", niv: 2 },
        { q: "Un élève cite cinq objets sans rien en dire. Le correcteur juge que :", choix: ["il fallait en citer dix", "c'est la meilleure méthode", "ces références ne servent pas l'argument", "il aurait fallu recopier les images du corpus"], bonne: 2, expl: "Chaque référence doit être identifiée et analysée.", niv: 2 },
        { q: "Où placer un croquis dans le devoir ?", choix: ["En annexe, regroupés à la fin du devoir", "À l'endroit où il sert l'argument", "Sur la page de garde", "Au brouillon pour le garder"], bonne: 1, expl: "Le croquis accompagne le raisonnement qu'il éclaire.", niv: 2 },
        { q: "Lequel n'a **pas** sa place dans l'introduction ?", choix: ["La réponse détaillée à la question", "La problématique", "La définition du thème", "L'annonce du plan suivi dans le développement"], bonne: 0, expl: "La réponse se construit dans le développement et la conclusion.", niv: 2 },
        { q: "Pourquoi reformuler la question choisie en problématique ?", choix: ["Pour allonger l'introduction", "Pour changer de sujet", "Pour éviter d'avoir à analyser les documents", "Pour faire apparaître une tension à discuter"], bonne: 3, expl: "Une tension donne un fil au raisonnement.", niv: 3 },
        { q: "Un croquis recopie fidèlement l'image du document 2. Pourquoi est-il peu utile ?", choix: ["Il est trop coloré", "Il répète le document sans rien expliquer", "Il est trop petit", "Le dessin est interdit dans une épreuve écrite"], bonne: 1, expl: "Le dessin doit compléter l'écrit, pas imiter le corpus.", niv: 3 },
        { q: "Pourquoi une référence au cinéma ou aux sciences peut-elle être valorisée ?", choix: ["Elle évite de parler de design", "Elle remplace le corpus", "Elle montre une culture élargie au service de l'argument", "Elle dispense de faire un plan et de citer le corpus"], bonne: 2, expl: "Les références d'autres domaines sont un plus si elles sont pertinentes.", niv: 3 },
      ],
    },
    {
      chapitre: 'std2a-amd-3',
      fiche: `## Le vocabulaire plastique, typographique et sémantique

### Forme, volume, composition
- **Forme** : géométrique (cercle, carré, triangle) ou organique (souple, inspirée du vivant) ; pleine ou évidée ; simple ou complexe.
- **Volume** : plein et vide, masse, légèreté, porte-à-faux.
- **Proportions** : le rapport des dimensions entre elles ; l'**échelle** : le rapport à la taille du corps ou de l'espace.
- **Composition** : organisation des éléments dans un format : symétrie ou asymétrie, centre ou décentrement, axes, rythme (répétition, alternance), équilibre, hiérarchie.
- **Module** : un élément de base répété pour construire un ensemble (une brique, une case de grille).
- **Trame** et **grille** : réseau de lignes qui organise une page ou un motif.

### Couleur et lumière
- **Couleurs primaires** (en synthèse soustractive, pour l'impression : cyan, magenta, jaune ; en synthèse additive, pour les écrans : rouge, vert, bleu).
- **Complémentaires** : couleurs opposées qui se renforcent (rouge et vert, bleu et orangé).
- **Couleurs chaudes** et **froides** ; **valeur** (clair ou foncé) ; **saturation** (couleur vive ou rompue) ; **camaïeu** (nuances d'une même couleur) ; **monochromie** ; **contraste**.
- **Traitement de surface** : brillant, mat, satiné, poli, brossé, laqué, texturé, ajouré ; transparent, translucide, opaque.

### Ornement et motif
- **Ornement** : décor ajouté à une forme. **Motif** : élément décoratif répété.
- Quelques termes : **frise** (bande décorative), **rinceau** (tige végétale enroulée), **palmette**, **grecque** (frise de lignes brisées), **arabesque**, **entrelacs**, **ligne en coup de fouet** (courbe souple de l'Art nouveau).
- Ornement **figuratif** (il représente quelque chose) ou **abstrait** (formes géométriques).

### Typographie
- **Caractère** : le dessin des lettres ; **police** : un caractère dans une graisse et un style donnés ; **graisse** (maigre, gras) ; **corps** (taille) ; **interlignage** ; **empattement** (petit trait au bout des lettres).
- Grandes familles (classification Vox-Atypi, 1954) : **humanes** et **garaldes** (inspirées de l'écriture humaniste, Garamond), **réales** et **didones** (contraste fort entre pleins et déliés, Didot, Bodoni), **mécanes** (empattements épais et rectangulaires), **linéales** (sans empattement : Futura, Helvetica), **incises**, **scriptes** et **manuaires** (inspirées de l'écriture à la main), **fractures** (écritures gothiques).
- **Logotype** : la forme écrite et dessinée d'un nom ; **pictogramme** : un signe simple qui représente un objet ou une action.

### Sens et signes
- **Dénotation** : ce que l'image montre objectivement. **Connotation** : ce qu'elle suggère (une couleur dorée évoque le luxe).
- **Signe** : ce qui renvoie à autre chose ; **symbole** : signe conventionnel partagé (la colombe pour la paix) ; **code** : règle d'usage partagée.
- **Registre** : ludique, poétique, solennel, humoristique, technique.
- **Détournement** : utiliser un objet ou une image dans un autre sens que celui d'origine ; **citation** et **emprunt** : reprendre une forme existante en le montrant.

### Les parties d'un siège et d'un meuble
- **Assise**, **dossier**, **accotoirs** (ou accoudoirs), **piètement** (l'ensemble des pieds), **ceinture** (cadre sous l'assise), **entretoise** (barre qui relie les pieds).
- Pour un meuble : **caisson**, **façade**, **plateau**, **tiroir**, **montant**, **traverse**.

### À retenir pour le bac
- Forme, volume, proportions, échelle, composition, rythme, module, grille.
- Couleur : primaires, complémentaires, valeur, saturation ; surface mate ou brillante.
- Ornement : frise, rinceau, grecque, coup de fouet.
- Typographie : empattement, graisse, corps ; familles garaldes, didones, linéales.
- Dénotation et connotation ; parties d'un siège.`,
      cartes: [
        { q: "Forme géométrique ou organique ?", r: "Géométrique : cercle, carré, triangle ; organique : souple, inspirée du vivant." },
        { q: "Qu'est-ce que l'échelle d'un objet ?", r: "Son rapport à la taille du corps ou de l'espace." },
        { q: "Qu'est-ce qu'un module ?", r: "Un élément de base répété pour construire un ensemble." },
        { q: "Quelles sont les primaires de l'impression ?", r: "Cyan, magenta et jaune (synthèse soustractive)." },
        { q: "Quelles sont les primaires des écrans ?", r: "Rouge, vert et bleu (synthèse additive)." },
        { q: "Qu'est-ce que la saturation d'une couleur ?", r: "Son intensité : couleur vive ou rompue." },
        { q: "Qu'est-ce qu'un camaïeu ?", r: "Des nuances d'une même couleur." },
        { q: "Transparent, translucide ou opaque ?", r: "Transparent laisse voir à travers ; translucide laisse passer la lumière sans voir nettement ; opaque arrête la lumière." },
        { q: "Qu'est-ce qu'un rinceau ?", r: "Un ornement en forme de tige végétale enroulée." },
        { q: "Qu'est-ce qu'un empattement ?", r: "Le petit trait au bout des jambages d'une lettre." },
        { q: "Qu'est-ce qu'une linéale ?", r: "Une famille de caractères sans empattement, comme Futura ou Helvetica." },
        { q: "Qu'est-ce qu'une didone ?", r: "Un caractère à fort contraste entre pleins et déliés, comme Didot ou Bodoni." },
        { q: "Dénotation ou connotation ?", r: "La dénotation est ce que l'image montre ; la connotation est ce qu'elle suggère." },
        { q: "Qu'est-ce qu'un détournement ?", r: "L'usage d'un objet ou d'une image dans un autre sens que celui d'origine." },
        { q: "Qu'est-ce que le piètement d'un siège ?", r: "L'ensemble de ses pieds." },
        { q: "Qu'est-ce qu'une entretoise ?", r: "Une barre qui relie les pieds d'un siège ou d'une table." },
      ],
      quiz: [
        { q: "Une forme souple inspirée du vivant est dite :", choix: ["linéale", "orthogonale", "modulaire", "organique"], bonne: 3, expl: "Elle s'oppose aux formes géométriques.", niv: 1 },
        { q: "Les caractères sans empattement forment la famille des :", choix: ["garaldes", "linéales", "didones", "fractures"], bonne: 1, expl: "Futura et Helvetica sont des linéales.", niv: 1 },
        { q: "La barre qui relie les pieds d'une chaise s'appelle :", choix: ["l'entretoise", "l'accotoir du siège", "le dossier", "la façade"], bonne: 0, expl: "Elle rigidifie le piètement.", niv: 1 },
        { q: "Les primaires des écrans sont :", choix: ["rouge, vert et bleu", "cyan, magenta et jaune", "noir, blanc et gris", "orangé, violet et vert"], bonne: 0, expl: "C'est la synthèse additive de la lumière.", niv: 1 },
        { q: "Un verre dépoli laisse passer la lumière sans qu'on voie nettement à travers. Il est :", choix: ["réfléchissant", "transparent", "opaque", "translucide"], bonne: 3, expl: "Translucide : la lumière passe, l'image non.", niv: 2 },
        { q: "Une affiche utilise des nuances de bleu, du très clair au très foncé. C'est :", choix: ["une polychromie vive", "un contraste de complémentaires", "un camaïeu", "une trame"], bonne: 2, expl: "Nuances d'une même couleur.", niv: 2 },
        { q: "La courbe souple et nerveuse typique de l'Art nouveau s'appelle :", choix: ["la grecque", "la ligne en coup de fouet", "le module de base", "l'empattement"], bonne: 1, expl: "On la voit dans les entrées de métro d'Hector Guimard.", niv: 2 },
        { q: "Une montre dorée sur fond noir suggère le luxe. Ce sens relève de :", choix: ["l'échelle", "la dénotation", "la typographie", "la connotation"], bonne: 3, expl: "C'est ce que l'image évoque au-delà de ce qu'elle montre.", niv: 2 },
        { q: "Lequel n'est **pas** une partie d'un siège ?", choix: ["L'assise", "L'interlignage", "Le dossier", "La ceinture sous l'assise"], bonne: 1, expl: "L'interlignage est un terme de typographie.", niv: 2 },
        { q: "Pourquoi un graphiste choisit-il une didone pour un magazine de mode ?", choix: ["Ce caractère imite l'écriture gothique", "Elle n'a pas d'empattement", "Son contraste entre pleins et déliés évoque l'élégance", "Elle se lit mieux en très petit corps sur un écran"], bonne: 2, expl: "La finesse des déliés connote le raffinement.", niv: 3 },
        { q: "Un designer répète le même élément hexagonal pour construire une étagère extensible. Il travaille par :", choix: ["module", "ornement figuratif", "camaïeu", "détournement"], bonne: 0, expl: "Le module répété permet d'agrandir l'ensemble.", niv: 3 },
        { q: "Utiliser un panneau de signalisation comme plateau de table est :", choix: ["un rinceau", "une dénotation", "un détournement", "une synthèse additive"], bonne: 2, expl: "L'objet change d'usage et de sens.", niv: 3 },
      ],
    },
    {
      chapitre: 'std2a-amd-4',
      fiche: `## Matériaux et procédés de fabrication

### Les grandes familles de matériaux
- **Bois** : bois massif (chêne, hêtre, frêne, pin) et **dérivés** (contreplaqué fait de fines feuilles collées à fil croisé, panneaux de particules, MDF). Le bois se **cintre** à la vapeur, se tourne, se sculpte, s'assemble (tenon et mortaise, queue d'aronde).
- **Métaux** : **ferreux** (fer, fonte, acier) et **non ferreux** (aluminium léger, cuivre, laiton, étain, or). Ils se forgent, se coulent en **fonderie**, se plient, se soudent, se martèlent.
- **Matières plastiques** (polymères) : **thermoplastiques** qui se ramollissent à la chaleur et peuvent être refondus et recyclés (polypropylène, polyéthylène, PET, PVC, ABS) ; **thermodurcissables** qui durcissent définitivement (bakélite, résines époxy, polyester).
- **Céramiques** : terre cuite, **faïence** (poreuse, recouverte d'émail), **grès** (cuit à haute température, dur et étanche), **porcelaine** (blanche, fine, translucide, cuite vers 1 300 °C).
- **Verre** : soufflé, moulé, coulé, étiré en plaques ; transparent, coloré, dépoli.
- **Textiles** : fibres **naturelles** végétales (coton, lin, chanvre) et animales (laine, soie), **artificielles** (viscose, à partir de cellulose) et **synthétiques** (polyester, polyamide).
- **Composites** : association de matériaux (fibre de verre ou de carbone noyée dans une résine) pour être à la fois léger et résistant.
- **Matériaux biosourcés** : issus du vivant (mycélium de champignon, algues, lin, liège, chanvre).

### Les propriétés
- **Mécaniques** : résistance, rigidité, souplesse, élasticité, dureté.
- **Physiques** : densité, conduction de la chaleur, isolation, acoustique.
- **Sensorielles** : toucher, aspect, odeur, chaleur ressentie, son.
- **Symboliques** : le bois évoque la nature et l'artisanat, le métal la solidité et l'industrie, l'or le prestige, le plastique la modernité ou le jetable.

### Les procédés
- **Par enlèvement de matière** (soustractifs) : sciage, tournage, fraisage, usinage numérique, découpe laser.
- **Par déformation** : pliage, emboutissage, cintrage, forgeage, **thermoformage** (une feuille de plastique chauffée prend la forme d'un moule).
- **Par moulage** : **injection** (plastique fondu injecté dans un moule, pour la grande série), **rotomoulage** (pièces creuses), **fonderie** (métal coulé), coulage de la céramique.
- **Par ajout** (fabrication **additive**) : **impression 3D**, qui dépose la matière couche par couche.
- **Par assemblage** : collage, vissage, soudage, emboîtement, couture, tressage.
- **Textiles** : **tissage** (entrecroisement des fils de **chaîne** et de **trame**), **tricot** ou maille, feutrage, broderie, teinture, impression.

### Impact environnemental
- Tout matériau a un **coût énergétique** (extraction, transformation, transport) et une **fin de vie** (réemploi, recyclage, incinération, décharge).
- L'**analyse du cycle de vie** mesure les impacts d'un produit de l'extraction des matières à sa fin de vie.
- Un produit **monomatériau** ou facilement **démontable** se recycle mieux.

### À retenir pour le bac
- Bois et dérivés, métaux ferreux et non ferreux, thermoplastiques et thermodurcissables, céramiques, verre, textiles, composites, biosourcés.
- Propriétés mécaniques, physiques, sensorielles et symboliques.
- Procédés : soustraction, déformation, moulage, ajout, assemblage, tissage.
- Cycle de vie : extraction, fabrication, transport, usage, fin de vie.`,
      cartes: [
        { q: "Qu'est-ce que le contreplaqué ?", r: "Un panneau de fines feuilles de bois collées à fil croisé." },
        { q: "Métaux ferreux ou non ferreux ?", r: "Ferreux : fer, fonte, acier ; non ferreux : aluminium, cuivre, laiton, étain, or." },
        { q: "Qu'est-ce qu'un thermoplastique ?", r: "Un plastique qui se ramollit à la chaleur et peut être refondu et recyclé." },
        { q: "Qu'est-ce qu'un thermodurcissable ?", r: "Un plastique qui durcit définitivement et ne peut pas être refondu, comme la bakélite." },
        { q: "Faïence, grès ou porcelaine ?", r: "La faïence est poreuse et émaillée ; le grès est dur et étanche ; la porcelaine est blanche, fine et translucide." },
        { q: "Fibre artificielle ou synthétique ?", r: "Artificielle : fabriquée à partir de cellulose naturelle (viscose) ; synthétique : issue de la pétrochimie (polyester)." },
        { q: "Qu'est-ce qu'un composite ?", r: "L'association de matériaux, comme une fibre de carbone noyée dans une résine." },
        { q: "Qu'est-ce qu'un matériau biosourcé ?", r: "Un matériau issu du vivant : mycélium, algues, lin, liège, chanvre." },
        { q: "Qu'est-ce que l'injection plastique ?", r: "Un procédé où le plastique fondu est injecté dans un moule, pour la grande série." },
        { q: "Qu'est-ce que le thermoformage ?", r: "Une feuille de plastique chauffée qui prend la forme d'un moule." },
        { q: "Qu'est-ce que la fabrication additive ?", r: "Un procédé qui dépose la matière couche par couche, comme l'impression 3D." },
        { q: "Qu'est-ce que le tissage ?", r: "L'entrecroisement des fils de chaîne et de trame." },
        { q: "Qu'est-ce que l'analyse du cycle de vie ?", r: "La mesure des impacts d'un produit, de l'extraction des matières à sa fin de vie." },
        { q: "Pourquoi un produit monomatériau se recycle-t-il mieux ?", r: "Il n'y a pas de matériaux différents à séparer." },
      ],
      quiz: [
        { q: "La bakélite est un plastique :", choix: ["thermoplastique", "thermodurcissable", "biosourcé", "composite à fibres"], bonne: 1, expl: "Elle durcit définitivement à la cuisson.", niv: 1 },
        { q: "L'aluminium est un métal :", choix: ["ferreux", "composite", "précieux et inoxydable", "non ferreux"], bonne: 3, expl: "Il ne contient pas de fer et il est léger.", niv: 1 },
        { q: "La céramique blanche, fine et translucide est :", choix: ["le grès brut", "la faïence", "la terre cuite", "la porcelaine"], bonne: 3, expl: "Elle est cuite à très haute température.", niv: 1 },
        { q: "L'impression 3D est un procédé :", choix: ["additif", "soustractif", "de forgeage", "de tissage"], bonne: 0, expl: "La matière est déposée couche par couche.", niv: 1 },
        { q: "Pour produire un million de boîtiers en plastique identiques, on choisit plutôt :", choix: ["l'impression 3D", "l'injection", "le tournage à la main", "le soufflage du verre"], bonne: 1, expl: "Le moule coûte cher mais chaque pièce revient peu cher.", niv: 2 },
        { q: "Les fils tendus dans la longueur d'un métier à tisser forment :", choix: ["la maille", "la trame", "la chaîne", "la lisière seule"], bonne: 2, expl: "La trame passe perpendiculairement entre eux.", niv: 2 },
        { q: "Une chaise de jardin en polypropylène peut être refondue parce que ce plastique est :", choix: ["céramique", "thermodurcissable", "thermoplastique", "composite"], bonne: 2, expl: "Il se ramollit à nouveau sous la chaleur.", niv: 2 },
        { q: "Un designer fabrique des luminaires en mycélium de champignon. Ce matériau est :", choix: ["thermodurcissable", "synthétique", "ferreux", "biosourcé"], bonne: 3, expl: "Il est issu du vivant.", niv: 2 },
        { q: "Lequel n'est **pas** un procédé par déformation ?", choix: ["Le pliage", "Le cintrage", "La découpe laser", "L'emboutissage d'une tôle"], bonne: 2, expl: "La découpe enlève de la matière.", niv: 2 },
        { q: "Pourquoi le bois massif connote-t-il souvent l'authenticité ?", choix: ["Il évoque la nature et le travail artisanal", "Il se rencontre surtout dans les musées et les châteaux", "Il est le matériau le moins cher", "Il ne se travaille qu'en usine"], bonne: 0, expl: "La dimension symbolique d'un matériau compte dans l'analyse.", niv: 3 },
        { q: "Un fauteuil associe acier, mousse et tissu collés. Quel problème environnemental pose-t-il ?", choix: ["Les matériaux sont difficiles à séparer pour le recyclage", "Le fauteuil est trop léger", "Il ne contient aucune pièce en plastique recyclable", "Il est fabriqué à la main"], bonne: 0, expl: "Le collage de matériaux différents gêne la fin de vie.", niv: 3 },
        { q: "Pourquoi utiliser un composite carbone pour un cadre de vélo de course ?", choix: ["Il se recycle très facilement après usage", "Il est très léger tout en restant résistant", "Il est le plus bon marché", "Il est biosourcé"], bonne: 1, expl: "Le composite associe légèreté et résistance.", niv: 3 },
      ],
    },
    {
      chapitre: 'std2a-amd-5',
      fiche: `## Artisanat, manufacture, industrie et métiers d'art

### Trois modes de production
- **Artisanat** : un artisan maîtrise un savoir-faire et réalise des objets à la main ou avec des outils simples, souvent en **pièce unique** ou en **petite série**. Il y a peu de séparation entre la conception et la fabrication.
- **Manufacture** : grand atelier qui réunit de nombreux ouvriers spécialisés, avec une **division du travail**. En France, les manufactures royales du XVIIe siècle (tapisseries des Gobelins, porcelaine de Sèvres au XVIIIe siècle) produisent des objets de prestige pour le roi.
- **Industrie** : production en **grande série** grâce aux machines et à l'énergie (vapeur puis électricité), à partir de la **révolution industrielle** (XIXe siècle). La conception (le dessin, le prototype) est séparée de la fabrication.
- **Standardisation** : pièces identiques et interchangeables ; **production de masse** et chaîne de montage au début du XXe siècle (Ford T, 1908).

### Ce qui change avec l'industrie
- Les objets deviennent **moins chers** et accessibles à plus de monde.
- Le **designer** apparaît comme celui qui conçoit pour l'industrie, en tenant compte de la fabrication, de l'usage et de la vente.
- Les critiques : objets de mauvaise qualité, perte des savoir-faire. Le mouvement **Arts and Crafts** (William Morris, Angleterre, seconde moitié du XIXe siècle) défend le travail artisanal et la beauté des objets du quotidien.
- Un exemple de réussite industrielle : la **chaise n° 14** de Michael Thonet (1859), en hêtre **courbé à la vapeur**, livrée en pièces détachées et produite à des millions d'exemplaires.

### Pièce unique, petite série, grande série
- **Pièce unique** : un objet conçu et réalisé une seule fois (une commande, une œuvre).
- **Petite série** : quelques dizaines ou centaines d'exemplaires, souvent par des ateliers ou des éditeurs.
- **Grande série** : des milliers ou des millions d'exemplaires identiques.
- **Éditeur** de design : une entreprise qui choisit des projets de designers, les fait fabriquer et les diffuse.
- Les frontières bougent : le numérique permet la **personnalisation de masse** et la **micro-série**.

### Les métiers d'art
- Ce sont des métiers qui maîtrisent des **techniques** et des **savoir-faire** complexes pour produire des objets uniques ou en petite série, avec une dimension artistique. Une liste officielle les fixe depuis 2015, répartis en plusieurs domaines.
- Exemples : **ébéniste** (meubles en bois, placage, marqueterie), **tapissier**, **céramiste**, **verrier**, **orfèvre** (objets en métal précieux), **bijoutier**, **ferronnier**, **doreur**, **vannier** (objets tressés en osier ou rotin), **brodeur**, **tisserand**, **relieur**, **luthier**, **restaurateur**.
- Les **Maîtres d'art** sont des artisans d'exception désignés pour transmettre leur savoir-faire.
- Enjeux : **transmission** des savoir-faire, **patrimoine**, **innovation** (associer un geste ancien à un matériau nouveau), **collaboration** avec des designers et des marques.

### Design et métiers d'art aujourd'hui
- Beaucoup de projets **associent** savoir-faire artisanal et production industrielle : un objet de grande série complété par une technique traditionnelle, un artisan qui utilise une machine à commande numérique.
- Le **fait-main** est valorisé comme gage de qualité, d'authenticité et de durabilité.

### À retenir pour le bac
- Artisanat (pièce unique, petite série), manufacture (division du travail), industrie (grande série, machines).
- Séparation de la conception et de la fabrication : naissance du designer.
- Arts and Crafts : défense de l'artisanat ; chaise n° 14 de Thonet (1859) : succès industriel.
- Métiers d'art : ébéniste, céramiste, verrier, orfèvre, vannier ; transmission et innovation.`,
      cartes: [
        { q: "Qu'est-ce qui caractérise l'artisanat ?", r: "Un savoir-faire manuel, la pièce unique ou la petite série, et peu de séparation entre conception et fabrication." },
        { q: "Qu'est-ce qu'une manufacture ?", r: "Un grand atelier qui réunit de nombreux ouvriers spécialisés avec une division du travail." },
        { q: "Citez deux manufactures royales françaises.", r: "Les Gobelins (tapisseries) et Sèvres (porcelaine)." },
        { q: "Qu'est-ce qui caractérise l'industrie ?", r: "La production en grande série grâce aux machines, avec une conception séparée de la fabrication." },
        { q: "Qu'est-ce que la standardisation ?", r: "La production de pièces identiques et interchangeables." },
        { q: "Que défend le mouvement Arts and Crafts ?", r: "Le travail artisanal et la beauté des objets du quotidien, contre la mauvaise qualité industrielle." },
        { q: "Qui anime le mouvement Arts and Crafts ?", r: "William Morris, en Angleterre, dans la seconde moitié du XIXe siècle." },
        { q: "Pourquoi la chaise n° 14 de Thonet est-elle célèbre ?", r: "En hêtre courbé à la vapeur et livrée en pièces détachées, elle a été produite à des millions d'exemplaires." },
        { q: "Qu'est-ce qu'un éditeur de design ?", r: "Une entreprise qui choisit des projets de designers, les fait fabriquer et les diffuse." },
        { q: "Qu'est-ce que la personnalisation de masse ?", r: "Produire en série des objets adaptés à chaque client, grâce au numérique." },
        { q: "Qu'est-ce qu'un métier d'art ?", r: "Un métier qui maîtrise des savoir-faire complexes pour produire des objets uniques ou en petite série, avec une dimension artistique." },
        { q: "Que fait un ébéniste ?", r: "Il fabrique des meubles en bois, avec placage et marqueterie." },
        { q: "Que fait un vannier ?", r: "Il fabrique des objets tressés en osier ou en rotin." },
        { q: "Qu'est-ce qu'un orfèvre ?", r: "Un artisan qui fabrique des objets en métal précieux." },
        { q: "Quels sont les enjeux des métiers d'art ?", r: "La transmission des savoir-faire, le patrimoine, l'innovation et la collaboration avec les designers." },
      ],
      quiz: [
        { q: "La division du travail entre de nombreux ouvriers apparaît d'abord dans :", choix: ["le design de service", "l'atelier d'un seul artisan", "la fabrication additive", "la manufacture"], bonne: 3, expl: "La manufacture précède l'industrie mécanisée.", niv: 1 },
        { q: "La porcelaine de Sèvres provient :", choix: ["d'un fablab", "d'une usine automobile", "d'une manufacture royale", "d'une coopérative agricole"], bonne: 2, expl: "Elle produisait des objets de prestige pour le roi.", niv: 1 },
        { q: "La chaise n° 14 de Thonet date de :", choix: ["1859", "1889", "1925", "1968"], bonne: 0, expl: "Elle est en hêtre courbé à la vapeur.", niv: 1 },
        { q: "Un artisan qui tresse l'osier est :", choix: ["un luthier", "un orfèvre", "un relieur", "un vannier"], bonne: 3, expl: "La vannerie est un métier d'art.", niv: 1 },
        { q: "Pourquoi la chaise n° 14 a-t-elle pu être vendue dans le monde entier ?", choix: ["Elle était imprimée en 3D", "Elle était fabriquée en plastique", "Chaque exemplaire était unique et fabriqué sur commande", "Livrée en pièces détachées, elle prenait peu de place au transport"], bonne: 3, expl: "Le démontage réduisait le volume transporté.", niv: 2 },
        { q: "Qu'est-ce qui distingue le plus l'industrie de l'artisanat ?", choix: ["La séparation de la conception et de la fabrication", "L'usage d'outils et de gestes précis", "La vente des objets", "La présence de décor"], bonne: 0, expl: "Le designer conçoit, l'usine fabrique.", niv: 2 },
        { q: "William Morris réagit contre l'industrie parce qu'il juge que :", choix: ["les objets produits sont de mauvaise qualité et sans beauté", "les machines vont trop lentement", "l'artisanat coûte trop peu pour faire vivre les ouvriers", "les ouvriers sont trop qualifiés"], bonne: 0, expl: "Arts and Crafts défend la qualité et le travail manuel.", niv: 2 },
        { q: "Un fauteuil de grande série est complété par un panier en osier tressé à la main. Ce projet associe :", choix: ["pièce unique et luxe", "manufacture royale et impression 3D", "industrie et métier d'art", "tissage et fonderie"], bonne: 2, expl: "Un savoir-faire traditionnel enrichit un objet standard.", niv: 2 },
        { q: "Lequel n'est **pas** un métier d'art ?", choix: ["Ébéniste", "Opérateur de chaîne de montage", "Verrier", "Doreur"], bonne: 1, expl: "La chaîne de montage relève de la production de masse.", niv: 2 },
        { q: "Pourquoi le fait-main est-il valorisé aujourd'hui ?", choix: ["Il supprime le travail de conception confié au designer", "Il est moins cher que l'industrie", "Il évoque la qualité, l'authenticité et la durabilité", "Il produit plus vite"], bonne: 2, expl: "Le geste de l'artisan devient un argument de valeur.", niv: 3 },
        { q: "Comment le numérique brouille-t-il la frontière entre série et pièce unique ?", choix: ["Il interdit la petite série", "Il permet de produire en série des objets personnalisés", "Il supprime toute machine", "Il oblige à produire à la main chaque pièce d'une série"], bonne: 1, expl: "C'est la personnalisation de masse.", niv: 3 },
        { q: "Pourquoi désigner des Maîtres d'art ?", choix: ["Pour fermer les ateliers", "Pour assurer la transmission de savoir-faire rares", "Pour remplacer les designers", "Pour industrialiser les métiers d'art dans de grandes usines"], bonne: 1, expl: "Ils forment des élèves pour que les gestes ne disparaissent pas.", niv: 3 },
      ],
    },
    {
      chapitre: 'std2a-amd-6',
      fiche: `## Repères historiques : de la révolution industrielle à 1945

### Le XIXe siècle : l'objet entre industrie et décor
- La **révolution industrielle** (machine à vapeur, chemins de fer, nouveaux matériaux : fonte, acier, verre en grandes plaques) transforme la production.
- Les **expositions universelles** (Londres 1851 avec le Crystal Palace en fer et verre ; Paris 1889 avec la tour Eiffel) montrent les progrès techniques et les arts décoratifs.
- L'**historicisme** copie les styles du passé ; beaucoup d'objets industriels imitent le luxe ancien.
- **Arts and Crafts** (William Morris, années 1860 à 1900) : retour à l'artisanat, papiers peints et tissus à motifs végétaux, unité de l'art et de la vie quotidienne.
- **Chaise n° 14** de Thonet (1859) : bois courbé, pièces détachées, grande série.

### L'Art nouveau (vers 1890 à 1910)
- Un style qui refuse la copie du passé et s'inspire de la **nature** : lignes courbes, motifs végétaux et floraux, **ligne en coup de fouet**.
- Il veut réunir **tous les arts** : architecture, mobilier, verre, bijou, affiche.
- Repères : **Hector Guimard** (entrées du métro de Paris, vers 1900) en fonte moulée ; **Émile Gallé** et l'**École de Nancy** (verrerie, mobilier) ; **Victor Horta** à Bruxelles ; **Alfons Mucha** (affiches) ; **René Lalique** (bijoux, verre).

### Vers la modernité (1900 à 1930)
- **Adolf Loos** publie « Ornement et crime » (1908) : l'ornement inutile est un gaspillage.
- **Louis Sullivan** formule l'idée que « la forme suit la fonction » (1896) : la forme découle de l'usage.
- Le **Deutscher Werkbund** (1907, Allemagne) associe artistes et industriels pour des objets de qualité produits en série.
- **De Stijl** (Pays-Bas, 1917) : lignes droites, couleurs primaires, noir et blanc ; chaise rouge et bleue de **Gerrit Rietveld**.
- Le **Bauhaus** (fondé en 1919 à Weimar par **Walter Gropius**, installé à Dessau en 1925, fermé par les nazis en 1933) : une école qui réunit art, artisanat et industrie, enseigne par l'atelier et cherche des formes simples pour la production en série. Exemple : le fauteuil en **tube d'acier** de Marcel Breuer (vers 1925).

### L'Art déco et le modernisme (années 1920 et 1930)
- **Art déco** : nommé d'après l'Exposition internationale des arts décoratifs et industriels modernes (**Paris, 1925**). Formes géométriques, symétrie, matériaux précieux (laque, ivoire, bois exotiques), luxe et élégance. Repères : l'ébéniste Jacques-Émile Ruhlmann, l'affichiste Cassandre.
- **Modernisme** : **Le Corbusier** (cinq points de l'architecture moderne, villa Savoye, 1931), **Charlotte Perriand** (chaise longue en tube d'acier avec Le Corbusier et Pierre Jeanneret, 1928), **Eileen Gray**. L'**Union des artistes modernes** (1929) défend une esthétique fonctionnelle.
- **Jean Prouvé** : constructions et mobilier en tôle d'acier pliée, pensés pour l'industrie.
- Aux États-Unis, le **streamline** (formes aérodynamiques arrondies) habille réfrigérateurs, trains et radios ; **Raymond Loewy** en est la figure.
- La **typographie** suit le mouvement : le caractère **Futura** (Paul Renner, 1927) est une linéale géométrique.

### À retenir pour le bac
- Expositions universelles et nouveaux matériaux ; Arts and Crafts ; chaise n° 14.
- Art nouveau : nature, courbe, unité des arts ; Guimard, Gallé, Horta.
- Loos, Sullivan, Werkbund, De Stijl, Bauhaus (1919-1933) : vers la forme fonctionnelle et la série.
- Art déco (1925) : géométrie et luxe ; modernisme : Le Corbusier, Perriand, Prouvé ; streamline.`,
      cartes: [
        { q: "Que montrent les expositions universelles du XIXe siècle ?", r: "Les progrès techniques et les arts décoratifs, comme le Crystal Palace de Londres en 1851." },
        { q: "Qu'est-ce que l'historicisme ?", r: "La copie des styles du passé, fréquente dans les objets du XIXe siècle." },
        { q: "De quoi l'Art nouveau s'inspire-t-il ?", r: "De la nature : lignes courbes, motifs végétaux et floraux." },
        { q: "Citez trois créateurs de l'Art nouveau.", r: "Hector Guimard, Émile Gallé, Victor Horta, Alfons Mucha, René Lalique." },
        { q: "Que dit Adolf Loos dans « Ornement et crime » ?", r: "Que l'ornement inutile est un gaspillage." },
        { q: "Qui a formulé « la forme suit la fonction » ?", r: "L'architecte Louis Sullivan, en 1896." },
        { q: "Qu'est-ce que le Deutscher Werkbund ?", r: "Une association fondée en 1907 qui réunit artistes et industriels pour des objets de qualité produits en série." },
        { q: "Quelles sont les caractéristiques de De Stijl ?", r: "Des lignes droites, des couleurs primaires, du noir et du blanc." },
        { q: "Qui fonde le Bauhaus, et quand ?", r: "Walter Gropius, en 1919 à Weimar." },
        { q: "Quand le Bauhaus ferme-t-il ?", r: "En 1933, sous la pression des nazis." },
        { q: "Que cherche le Bauhaus ?", r: "Réunir art, artisanat et industrie et créer des formes simples pour la série." },
        { q: "D'où vient le nom Art déco ?", r: "De l'Exposition internationale des arts décoratifs et industriels modernes, Paris, 1925." },
        { q: "Quelles sont les caractéristiques de l'Art déco ?", r: "Formes géométriques, symétrie, matériaux précieux, luxe." },
        { q: "Qu'est-ce que le streamline ?", r: "Un style américain de formes aérodynamiques arrondies, porté par Raymond Loewy." },
        { q: "Pour quoi Jean Prouvé est-il connu ?", r: "Pour ses constructions et son mobilier en tôle d'acier pliée, pensés pour l'industrie." },
      ],
      quiz: [
        { q: "Le Bauhaus est fondé en :", choix: ["1919", "1900", "1859", "1968"], bonne: 0, expl: "À Weimar, par Walter Gropius.", niv: 1 },
        { q: "Les entrées du métro de Paris de Guimard appartiennent à :", choix: ["De Stijl", "l'Art déco", "l'Art nouveau", "au design radical"], bonne: 2, expl: "Courbes végétales en fonte, vers 1900.", niv: 1 },
        { q: "L'Art déco tire son nom d'une exposition tenue à Paris en :", choix: ["1925", "1889", "1937", "1951"], bonne: 0, expl: "L'Exposition internationale des arts décoratifs et industriels modernes.", niv: 1 },
        { q: "« La forme suit la fonction » est une formule de :", choix: ["William Morris", "Louis Sullivan", "Alfons Mucha", "Émile Gallé"], bonne: 1, expl: "Architecte américain, en 1896.", niv: 1 },
        { q: "Lignes droites et couleurs primaires caractérisent :", choix: ["le style Louis XV", "l'Art nouveau", "De Stijl", "le streamline"], bonne: 2, expl: "Mouvement néerlandais de 1917 (Mondrian, Rietveld).", niv: 2 },
        { q: "Marcel Breuer réalise vers 1925 un fauteuil en :", choix: ["bois courbé à la vapeur", "tube d'acier", "plastique injecté", "osier tressé"], bonne: 1, expl: "Un matériau industriel, léger et nouveau pour le mobilier.", niv: 2 },
        { q: "Laque, bois exotiques et formes géométriques luxueuses évoquent :", choix: ["le design radical", "le Bauhaus", "Arts and Crafts", "l'Art déco"], bonne: 3, expl: "Ruhlmann en est un grand représentant.", niv: 2 },
        { q: "Les formes arrondies et aérodynamiques d'un réfrigérateur américain des années 1930 relèvent du :", choix: ["streamline", "style De Stijl", "mouvement Arts and Crafts", "style gothique"], bonne: 0, expl: "Raymond Loewy en est la figure.", niv: 2 },
        { q: "Lequel n'est **pas** un créateur de l'Art nouveau ?", choix: ["Émile Gallé", "Victor Horta", "Hector Guimard", "Walter Gropius"], bonne: 3, expl: "Gropius fonde le Bauhaus.", niv: 2 },
        { q: "Pourquoi Adolf Loos critique-t-il l'ornement ?", choix: ["Il veut des formes végétales", "Il veut copier les styles anciens", "Il défend le luxe décoratif des palais et des grandes demeures", "Il y voit un gaspillage de travail et de matière"], bonne: 3, expl: "Son texte annonce la sobriété moderniste.", niv: 3 },
        { q: "En quoi le Bauhaus prépare-t-il le design industriel ?", choix: ["Il ne forme que des peintres", "Il refuse toute machine", "Il conçoit des formes simples adaptées à la production en série", "Il copie les styles du passé pour plaire à la bourgeoisie"], bonne: 2, expl: "L'école lie atelier, art et industrie.", niv: 3 },
        { q: "Qu'ont en commun Arts and Crafts et l'Art nouveau ?", choix: ["L'usage du plastique et des matériaux de synthèse colorés", "Le refus de la copie des styles anciens et le goût de la nature", "La production de masse", "Le rejet de tout décor"], bonne: 1, expl: "Tous deux valorisent le motif végétal et l'unité des arts.", niv: 3 },
      ],
    },
    {
      chapitre: 'std2a-amd-7',
      fiche: `## Repères historiques : de 1945 à aujourd'hui

### La reconstruction et le design fonctionnel (1945 à 1960)
- Après la guerre, il faut **équiper** rapidement les logements : mobilier simple, léger, produit en série.
- **Charles et Ray Eames** (États-Unis) : chaises en **contreplaqué moulé** et en fibre de verre, puis le Lounge Chair (1956).
- **Design scandinave** : bois clair, formes douces, confort et simplicité (Arne Jacobsen, Alvar Aalto avant-guerre).
- **Le Corbusier** propose le **Modulor** (1945), un système de proportions fondé sur le corps humain.
- En Allemagne, l'**école d'Ulm** (1953) et la marque **Braun** avec **Dieter Rams** : une esthétique sobre et rationnelle. Ses principes du bon design (années 1970) : un bon design est utile, compréhensible, discret, durable, et « le moins de design possible ».
- En France, **Raymond Loewy** publie « La laideur se vend mal » (1952) ; **Roger Tallon** dessine des objets industriels (le Minitel en 1978, puis le TGV Atlantique) ; **Pierre Paulin** des sièges en mousse et jersey.

### Pop, plastique et contestation (1960 à 1980)
- Le **plastique** devient roi : couleurs vives, formes rondes, objets bon marché. La chaise **Panton** de Verner Panton est un siège en plastique d'une seule pièce (conçue vers 1960).
- Le **Pop design** s'inspire de la culture de masse et de la jeunesse ; objets éphémères, gonflables, en carton.
- Le **design radical** italien (années 1960 et 1970) critique la société de consommation et le fonctionnalisme.
- **Victor Papanek**, dans « Design pour un monde réel » (1971), accuse le design de produire des objets inutiles et appelle à un design **responsable**, social et écologique.

### Postmodernisme et designers stars (1980 à 2000)
- Le groupe **Memphis** (Milan, 1981, autour d'Ettore Sottsass) : couleurs violentes, motifs, formes provocantes, contre le « bon goût » fonctionnaliste.
- Les **designers vedettes** et les éditeurs (presse-agrumes Juicy Salif de **Philippe Starck**, 1990) : l'objet devient aussi un signe et un sujet de conversation.
- Le **design graphique** se développe : identités visuelles, signalétique. Le **style suisse** (années 1950 et 1960, Josef Müller-Brockmann) avait imposé la grille, les linéales comme l'Helvetica (1957) et l'asymétrie.

### Le numérique et les nouveaux enjeux (depuis 2000)
- **Numérique** : conception assistée par ordinateur, **fabrication additive**, découpe laser, **fablabs** (ateliers partagés), **design paramétrique** (formes générées par des règles de calcul), logiciels de génération automatique d'images comme outils.
- **Design d'interaction** et d'**interface** : applications, sites, objets connectés.
- **Design de service** et **design social** : on conçoit une expérience ou une organisation, pas seulement un objet.
- **Écoconception**, réemploi, **upcycling** (surcyclage), matériaux biosourcés, **low-tech**.
- **Design participatif** : les usagers conçoivent avec le designer. L'architecte chilien **Alejandro Aravena** construit des moitiés de maisons que les familles complètent (Quinta Monroy, 2003).
- Retour des **métiers d'art** et des savoir-faire, souvent associés au numérique.

### À retenir pour le bac
- Après-guerre : Eames, design scandinave, Modulor, Braun et Dieter Rams.
- Années 1960 et 1970 : plastique, Pop, design radical, Papanek (1971).
- Années 1980 : Memphis (1981), postmodernisme, designers vedettes.
- Depuis 2000 : numérique, service, participation, écoconception.`,
      cartes: [
        { q: "Pour quels sièges Charles et Ray Eames sont-ils connus ?", r: "Des chaises en contreplaqué moulé et en fibre de verre, puis le Lounge Chair (1956)." },
        { q: "Qu'est-ce qui caractérise le design scandinave ?", r: "Bois clair, formes douces, confort et simplicité." },
        { q: "Qu'est-ce que le Modulor ?", r: "Un système de proportions fondé sur le corps humain, proposé par Le Corbusier en 1945." },
        { q: "Quelle est la formule célèbre de Dieter Rams ?", r: "« Le moins de design possible » : un bon design est utile, compréhensible, discret et durable." },
        { q: "Quel livre publie Raymond Loewy en 1952 ?", r: "« La laideur se vend mal »." },
        { q: "Citez deux réalisations de Roger Tallon.", r: "Le Minitel (1978) et le TGV Atlantique." },
        { q: "Qu'a de particulier la chaise Panton ?", r: "C'est un siège en plastique d'une seule pièce, conçu vers 1960." },
        { q: "Que critique le design radical italien ?", r: "La société de consommation et le fonctionnalisme." },
        { q: "Que défend Victor Papanek en 1971 ?", r: "Un design responsable, social et écologique, contre les objets inutiles." },
        { q: "Qu'est-ce que le groupe Memphis ?", r: "Un groupe milanais fondé en 1981 autour d'Ettore Sottsass : couleurs violentes, motifs, formes provocantes." },
        { q: "Quelles sont les règles du style suisse ?", r: "La grille, les linéales comme l'Helvetica et la composition asymétrique." },
        { q: "Qu'est-ce qu'un fablab ?", r: "Un atelier partagé équipé de machines numériques (impression 3D, découpe laser)." },
        { q: "Qu'est-ce que le design paramétrique ?", r: "Des formes générées par des règles de calcul que l'on fait varier." },
        { q: "Qu'est-ce que le design participatif ?", r: "Une démarche où les usagers conçoivent avec le designer." },
        { q: "Quel est le principe de la Quinta Monroy d'Alejandro Aravena ?", r: "L'architecte construit la moitié des maisons et les familles les complètent." },
      ],
      quiz: [
        { q: "Le groupe Memphis est fondé à Milan en :", choix: ["1981", "1957", "1945", "2003"], bonne: 0, expl: "Autour d'Ettore Sottsass.", niv: 1 },
        { q: "« Design pour un monde réel » (1971) est un livre de :", choix: ["Verner Panton", "Philippe Starck", "Le Corbusier", "Victor Papanek"], bonne: 3, expl: "Il appelle à un design responsable.", niv: 1 },
        { q: "Le Minitel a été dessiné par :", choix: ["Charles Eames", "Dieter Rams", "Roger Tallon", "Ettore Sottsass"], bonne: 2, expl: "Designer industriel français, auteur aussi du TGV Atlantique.", niv: 1 },
        { q: "La chaise Panton est réalisée en :", choix: ["tube d'acier chromé cintré", "plastique d'une seule pièce", "bois courbé à la vapeur", "osier tressé"], bonne: 1, expl: "Un siège monobloc sans pieds séparés.", niv: 1 },
        { q: "Bois clair, formes douces et simplicité caractérisent le design :", choix: ["scandinave", "radical italien", "Memphis", "Art déco"], bonne: 0, expl: "Jacobsen et Aalto en sont des figures.", niv: 2 },
        { q: "Des couleurs criardes et des motifs provocants contre le « bon goût » : c'est :", choix: ["le style suisse", "le Bauhaus", "Braun", "Memphis"], bonne: 3, expl: "Le postmodernisme rompt avec le fonctionnalisme.", niv: 2 },
        { q: "Une affiche sur grille stricte, en Helvetica, composée de façon asymétrique, relève du :", choix: ["style Art nouveau", "Pop design", "style suisse", "streamline"], bonne: 2, expl: "Josef Müller-Brockmann en est un maître.", niv: 2 },
        { q: "Concevoir l'organisation d'une consultation médicale plus simple pour les patients, c'est du design :", choix: ["de packaging", "de mobilier", "textile", "de service"], bonne: 3, expl: "On conçoit une expérience et une organisation.", niv: 2 },
        { q: "Lequel n'est **pas** un repère du design après 1945 ?", choix: ["Les entrées du métro de Guimard", "La chaise Panton en plastique", "Le groupe Memphis", "Le Juicy Salif de Starck"], bonne: 0, expl: "Les entrées de Guimard datent d'environ 1900.", niv: 2 },
        { q: "Pourquoi Victor Papanek critique-t-il les designers de son époque ?", choix: ["Ils consacrent trop de temps aux besoins des plus pauvres et des malades", "Ils refusent le plastique", "Ils produisent des objets inutiles au lieu de répondre aux vrais besoins", "Ils n'utilisent pas d'ornement"], bonne: 2, expl: "Il défend un design social et écologique.", niv: 3 },
        { q: "Que montre le presse-agrumes Juicy Salif de Starck ?", choix: ["La fonction prime sur tout le reste", "L'objet peut devenir un signe et un sujet de conversation", "Le plastique remplace le métal dans la cuisine", "Le design doit disparaître"], bonne: 1, expl: "Sa forme sculpturale compte autant que son usage.", niv: 3 },
        { q: "Pourquoi le projet Quinta Monroy est-il cité pour le thème « compléter » ?", choix: ["Il est entièrement fini par l'architecte", "Les familles complètent elles-mêmes une maison laissée à moitié construite", "Le projet utilise un ornement Art déco", "Il est produit en grande série par une usine qui livre des maisons identiques"], bonne: 1, expl: "L'inachèvement est voulu pour permettre l'appropriation.", niv: 3 },
      ],
    },
    {
      chapitre: 'std2a-amd-8',
      fiche: `## Fonctions, usages et usagers

### Les fonctions d'un objet
- **Fonction d'usage** (ou pratique) : ce à quoi l'objet sert concrètement (s'asseoir, ranger, éclairer, informer).
- **Fonction d'estime** (ou symbolique) : ce qu'il dit de son propriétaire, l'image qu'il donne (statut, goût, appartenance à un groupe).
- **Fonction esthétique** : le plaisir procuré par sa forme, ses couleurs, ses matières.
- **Fonction technique** : la manière dont il fonctionne (mécanisme, structure).
- Un objet peut être **multifonction** (un meuble à la fois siège et rangement) ou **évolutif** (il change selon les besoins).

### L'usager au centre
- **Usager** : celui qui utilise l'objet ou le service ; il n'est pas forcément l'acheteur ou le commanditaire.
- **Commanditaire** : celui qui passe la commande et la finance.
- **Ergonomie** : adaptation de l'objet au corps et aux gestes de l'usager (taille, prise en main, effort, confort, sécurité).
- **Design centré sur l'utilisateur** : observer les usages réels, interroger les usagers, tester des prototypes.
- **Design universel** ou **inclusif** : concevoir pour le plus grand nombre, y compris les personnes âgées, en situation de handicap, les enfants, sans stigmatiser.
- **Accessibilité** : permettre à tous d'accéder à un lieu, une information, un service.

### Comprendre et interpréter l'usage
- **Affordance** : la capacité d'un objet à suggérer lui-même son usage (une poignée invite à tirer, un bouton à appuyer).
- **Intuitif** : l'usager comprend sans mode d'emploi. À l'inverse, un objet qui **intrigue** ralentit la compréhension pour éveiller la curiosité, faire réfléchir ou faire jouer (sujet 2024 « Intriguer »).
- **Détournement d'usage** : l'usager invente un autre usage que celui prévu ; le designer peut s'en inspirer.
- **Appropriation** : l'usager transforme, personnalise ou complète l'objet (sujets « Compléter », « Jouer »).
- **Expérience** : l'ensemble de ce que vit l'usager (émotions, sensations, étapes), au-delà de la seule fonction.

### Le jeu et l'émotion
- Le **ludique** (sujet 2022 « Jouer ») permet d'expérimenter le monde, de rendre un usage plus agréable, de favoriser l'apprentissage ou la rencontre.
- Le **design émotionnel** cherche à créer un lien affectif avec l'objet, ce qui peut le faire garder plus longtemps.
- La **narration** : un objet ou un espace raconte une histoire (mise en scène, scénographie).

### Besoin, demande et enjeux
- Un **besoin** est un manque à satisfaire ; une **demande** est ce que le commanditaire exprime ; le designer analyse les deux et repère les **enjeux** (sociaux, environnementaux, économiques).
- Les **usages évoluent** avec la société : télétravail, vieillissement, mobilité, vie en ville, numérique.

### À retenir pour le bac
- Fonctions d'usage, d'estime, esthétique et technique.
- Usager, commanditaire, ergonomie, design inclusif, accessibilité.
- Affordance et objet intuitif ; objet qui intrigue ; détournement et appropriation.
- Ludique, design émotionnel, narration ; les usages évoluent avec la société.`,
      cartes: [
        { q: "Qu'est-ce que la fonction d'usage ?", r: "Ce à quoi l'objet sert concrètement." },
        { q: "Qu'est-ce que la fonction d'estime ?", r: "Ce que l'objet dit de son propriétaire : statut, goût, appartenance." },
        { q: "Usager ou commanditaire ?", r: "L'usager utilise l'objet ; le commanditaire passe la commande et la finance." },
        { q: "Qu'est-ce que l'ergonomie ?", r: "L'adaptation de l'objet au corps et aux gestes de l'usager." },
        { q: "Qu'est-ce que le design inclusif ?", r: "Concevoir pour le plus grand nombre, y compris les personnes âgées ou handicapées, sans stigmatiser." },
        { q: "Qu'est-ce que l'affordance ?", r: "La capacité d'un objet à suggérer lui-même son usage." },
        { q: "Qu'est-ce qu'un objet intuitif ?", r: "Un objet que l'usager comprend sans mode d'emploi." },
        { q: "Pourquoi un designer chercherait-il à intriguer ?", r: "Pour éveiller la curiosité, faire réfléchir, faire jouer ou attirer l'attention." },
        { q: "Qu'est-ce que l'appropriation ?", r: "Le fait que l'usager transforme, personnalise ou complète l'objet." },
        { q: "Qu'est-ce que l'expérience usager ?", r: "L'ensemble de ce que vit l'usager : émotions, sensations, étapes." },
        { q: "Qu'apporte le ludique au design ?", r: "Il permet d'expérimenter, rend l'usage agréable, favorise l'apprentissage et la rencontre." },
        { q: "Qu'est-ce que le design émotionnel ?", r: "Un design qui crée un lien affectif avec l'objet." },
        { q: "Besoin ou demande ?", r: "Le besoin est un manque à satisfaire ; la demande est ce que le commanditaire exprime." },
      ],
      quiz: [
        { q: "Ce que l'objet dit du statut de son propriétaire relève de la fonction :", choix: ["mécanique", "d'usage", "technique", "d'estime"], bonne: 3, expl: "On parle aussi de fonction symbolique.", niv: 1 },
        { q: "L'adaptation d'un objet au corps et aux gestes s'appelle :", choix: ["la sémantique", "une typographie", "l'ergonomie", "la standardisation"], bonne: 2, expl: "Taille, prise en main, effort, confort.", niv: 1 },
        { q: "Celui qui passe la commande et la finance est :", choix: ["le commanditaire", "l'usager", "l'éditeur du catalogue", "le fabricant"], bonne: 0, expl: "Il n'est pas forcément l'usager.", niv: 1 },
        { q: "Une poignée qui invite d'elle-même à être tirée illustre :", choix: ["l'affordance", "le détournement", "la connotation", "le camaïeu"], bonne: 0, expl: "L'objet suggère son usage.", niv: 1 },
        { q: "Un banc public pensé pour les personnes âgées, les enfants et les fauteuils roulants relève du design :", choix: ["radical", "inclusif", "Art déco", "de luxe"], bonne: 1, expl: "Il vise le plus grand nombre sans stigmatiser.", niv: 2 },
        { q: "Des habitants transforment une caisse de vin en étagère. C'est :", choix: ["une affordance", "la fonction d'estime de l'objet", "un détournement d'usage", "une standardisation"], bonne: 2, expl: "L'objet reçoit un usage non prévu.", niv: 2 },
        { q: "Une horloge sans aiguilles oblige l'usager à chercher comment lire l'heure. Elle cherche surtout à :", choix: ["imiter un style ancien", "être la plus intuitive possible", "réduire son coût de fabrication", "intriguer et faire réfléchir"], bonne: 3, expl: "Elle prend le contre-pied du design intuitif.", niv: 2 },
        { q: "Observer des usagers et tester des prototypes, c'est une démarche :", choix: ["de production de masse", "purement décorative et ornementale", "centrée sur l'utilisateur", "sans lien avec l'usage"], bonne: 2, expl: "Le design part des usages réels.", niv: 2 },
        { q: "Laquelle n'est **pas** une fonction d'un objet ?", choix: ["La fonction d'usage", "La fonction de chaîne", "La fonction d'estime", "La fonction esthétique"], bonne: 1, expl: "La chaîne est un terme de tissage.", niv: 2 },
        { q: "Pourquoi un objet auquel on est attaché dure-t-il plus longtemps ?", choix: ["Il est fabriqué en plus grande série, donc mieux contrôlé", "On le répare et on le garde au lieu de le jeter", "Cet objet ne s'use pas", "Il n'a pas de fonction d'usage"], bonne: 1, expl: "Le design émotionnel peut servir la durabilité.", niv: 3 },
        { q: "Un canapé fait de barres de mousse que l'on assemble à son gré favorise :", choix: ["l'appropriation et le jeu", "la standardisation", "l'ornement figuratif", "la fonction d'estime seule"], bonne: 0, expl: "L'usager construit lui-même son siège.", niv: 3 },
        { q: "Pourquoi les usages évoluent-ils et obligent-ils le design à se renouveler ?", choix: ["Les normes interdisent les objets anciens", "Les matériaux changent de nom et de prix chaque année", "Ce sont les designers qui l'imposent", "La société change : télétravail, vieillissement, numérique"], bonne: 3, expl: "Le designer observe le présent pour innover.", niv: 3 },
      ],
    },
    {
      chapitre: 'std2a-amd-9',
      fiche: `## Les domaines : graphisme, espace, objet, mode et textile

### Le design graphique
- Il conçoit des **messages visuels** : affiche, édition (livre, magazine), **identité visuelle** (logotype, couleurs, typographie, règles d'usage), **signalétique** (panneaux qui orientent dans un lieu), packaging, interfaces, animation.
- Les outils : **image** (photo, illustration, pictogramme), **texte** (typographie, hiérarchie des titres), **couleur**, **mise en page** sur une **grille**.
- **Affiche** : elle doit être vue de loin et comprise vite ; hiérarchie, contraste, lisibilité. Repères : affiches de Mucha (Art nouveau), Cassandre (Art déco), style suisse.
- **Identité visuelle participative** : les habitants ou les usagers dessinent eux-mêmes une partie des signes (sujet 2026 « Compléter »).
- **Identité dynamique** : un logo qui varie selon les supports ou les événements, souvent produit à partir de règles ou du code.

### Le design d'espace
- Il conçoit des **lieux** : architecture intérieure, aménagement de commerces, **scénographie** (mise en scène d'une exposition, d'un spectacle), espace public, mobilier urbain, habitat.
- Notions : **circulation** (parcours des visiteurs), **échelle** humaine, **lumière** naturelle et artificielle, **ambiance**, **matériaux**, **acoustique**, rapport intérieur et extérieur.
- **Scénographie** : elle raconte une histoire, guide le visiteur, met en valeur des objets.
- **Réhabilitation** : transformer un bâtiment existant au lieu de le démolir ; la participation des habitants y prend une place croissante.
- Repères : Le Corbusier, Jean Prouvé, Peter Zumthor (architecture sensible des matériaux et de la lumière), Patrick Bouchain (chantiers ouverts aux habitants).

### Le design d'objet
- Il conçoit des **produits** : mobilier, luminaires, électroménager, outils, vaisselle, objets numériques.
- Points d'analyse : fonction, ergonomie, matériaux, procédé, assemblage, prix, cycle de vie, sens.
- Le **prototype** et la **maquette** permettent de tester avant de produire.

### La mode et le textile
- La **mode** crée des vêtements et des accessoires ; elle est liée au corps, au mouvement, à l'identité, au temps (collections, saisons).
- **Haute couture** (pièces uniques sur mesure, savoir-faire d'atelier), **prêt-à-porter** (séries en tailles standard), **fast fashion** (renouvellement très rapide, impact environnemental fort).
- Repères : **Paul Poiret** libère la silhouette du corset (vers 1906) ; **Gabrielle Chanel** impose une élégance simple (petite robe noire, 1926) ; **Christian Dior** lance le **New Look** (1947) ; **Yves Saint Laurent** adapte le smoking aux femmes (1966) ; **Paco Rabanne** fait des robes en plaques de métal (1966).
- **Textile** : tissage, tricot, broderie, teinture, impression, enduction ; **textiles techniques** (respirants, isolants, intelligents).
- Le **boro** japonais : des vêtements rapiécés et reprisés pendant des générations, aujourd'hui valorisés comme modèle de préservation et de réparation.

### Les métiers d'art dans ces domaines
- Ils traversent tous les domaines : dorure et marqueterie dans l'espace, broderie et plumasserie dans la mode, gravure et reliure dans l'édition.

### À retenir pour le bac
- Graphisme : affiche, édition, identité visuelle, signalétique ; grille et hiérarchie.
- Espace : circulation, lumière, échelle, scénographie, réhabilitation.
- Objet : fonction, matériaux, procédé, prototype.
- Mode : haute couture, prêt-à-porter, fast fashion ; Poiret, Chanel, Dior, Saint Laurent.
- Textile : tissage, tricot, broderie ; boro et réparation.`,
      cartes: [
        { q: "Que conçoit le design graphique ?", r: "Des messages visuels : affiche, édition, identité visuelle, signalétique, packaging, interfaces." },
        { q: "Qu'est-ce qu'une identité visuelle ?", r: "L'ensemble des signes d'une organisation : logotype, couleurs, typographie et règles d'usage." },
        { q: "Qu'est-ce que la signalétique ?", r: "L'ensemble des panneaux et signes qui orientent dans un lieu." },
        { q: "Quelles qualités doit avoir une affiche ?", r: "Être vue de loin et comprise vite : hiérarchie, contraste, lisibilité." },
        { q: "Qu'est-ce qu'une identité visuelle dynamique ?", r: "Un logo qui varie selon les supports ou les événements, souvent produit à partir de règles." },
        { q: "Qu'est-ce que la scénographie ?", r: "La mise en scène d'une exposition ou d'un spectacle, qui raconte une histoire et guide le visiteur." },
        { q: "Quelles notions analyser dans un espace ?", r: "Circulation, échelle, lumière, ambiance, matériaux, acoustique." },
        { q: "Qu'est-ce que la réhabilitation ?", r: "Transformer un bâtiment existant au lieu de le démolir." },
        { q: "Haute couture ou prêt-à-porter ?", r: "La haute couture fait des pièces uniques sur mesure ; le prêt-à-porter des séries en tailles standard." },
        { q: "Qu'est-ce que la fast fashion ?", r: "Une mode à renouvellement très rapide, avec un fort impact environnemental." },
        { q: "Qu'a fait Paul Poiret ?", r: "Il a libéré la silhouette féminine du corset, vers 1906." },
        { q: "Qu'est-ce que le New Look ?", r: "La silhouette lancée par Christian Dior en 1947 : taille fine et jupe ample." },
        { q: "Qu'est-ce que le boro ?", r: "Des vêtements japonais rapiécés et reprisés pendant des générations." },
        { q: "Qu'est-ce qu'un textile technique ?", r: "Un textile aux propriétés particulières : respirant, isolant, intelligent." },
      ],
      quiz: [
        { q: "Les panneaux qui orientent les voyageurs dans une gare relèvent de :", choix: ["la signalétique", "la scénographie", "la haute couture", "la marqueterie"], bonne: 0, expl: "C'est un domaine du design graphique.", niv: 1 },
        { q: "Le New Look est lancé en 1947 par :", choix: ["Paul Poiret", "Christian Dior", "Paco Rabanne", "Gabrielle Chanel"], bonne: 1, expl: "Taille marquée et jupe ample.", niv: 1 },
        { q: "La mise en scène d'une exposition s'appelle :", choix: ["la signalétique seule", "la typographie", "la scénographie", "l'ergonomie"], bonne: 2, expl: "Elle guide le visiteur et raconte une histoire.", niv: 1 },
        { q: "Des vêtements en tailles standard produits en série relèvent du :", choix: ["prêt-à-porter", "sur-mesure", "haute couture", "costume de scène"], bonne: 0, expl: "La haute couture fait du sur-mesure.", niv: 1 },
        { q: "Une affiche vue de loin doit d'abord être :", choix: ["sans contraste", "chargée de texte en petit corps", "lisible et hiérarchisée", "imprimée en un seul exemplaire"], bonne: 2, expl: "Le message doit se comprendre en un instant.", niv: 2 },
        { q: "Transformer une ancienne usine en logements au lieu de la démolir, c'est :", choix: ["une signalétique", "une construction neuve", "une réhabilitation", "une standardisation"], bonne: 2, expl: "On garde l'existant et on l'adapte.", niv: 2 },
        { q: "Un kimono rapiécé pendant des générations est cité pour le thème « Préserver ». Il illustre :", choix: ["l'identité visuelle", "la fast fashion", "le prêt-à-porter en tailles standard", "la réparation et la transmission d'un vêtement"], bonne: 3, expl: "Le boro prolonge la vie du textile.", niv: 2 },
        { q: "Un logo de festival change de forme à chaque édition selon des règles fixes. Il s'agit :", choix: ["d'une signalétique fixe", "d'une identité dynamique", "d'un camaïeu", "d'un ornement Art déco géométrique"], bonne: 1, expl: "La règle reste, la forme varie.", niv: 2 },
        { q: "Lequel n'est **pas** un repère de l'histoire de la mode ?", choix: ["La petite robe noire", "Le New Look", "Le smoking pour femme", "Le Crystal Palace"], bonne: 3, expl: "Le Crystal Palace est un bâtiment de l'exposition de 1851.", niv: 2 },
        { q: "Pourquoi la fast fashion est-elle critiquée ?", choix: ["Elle refuse les textiles synthétiques et les teintures chimiques", "Elle est trop chère", "Elle ne produit que du sur-mesure", "Elle multiplie les vêtements vite jetés et pollue beaucoup"], bonne: 3, expl: "Renouvellement rapide, ressources et déchets.", niv: 3 },
        { q: "Pourquoi un scénographe travaille-t-il la circulation des visiteurs ?", choix: ["Pour organiser le parcours et le récit de l'exposition", "Pour réduire le nombre d'œuvres présentées dans les salles", "Pour éviter toute lumière", "Pour imprimer les billets"], bonne: 0, expl: "Le parcours fait partie du sens.", niv: 3 },
        { q: "Une identité visuelle dessinée en partie par les habitants d'un quartier permet surtout :", choix: ["de réduire la lisibilité", "de les impliquer et de les représenter", "de supprimer le logotype", "de copier une marque célèbre du quartier voisin"], bonne: 1, expl: "La participation crée un lien entre le lieu et ses usagers.", niv: 3 },
      ],
    },
    {
      chapitre: 'std2a-amd-10',
      fiche: `## Enjeux contemporains : environnement, numérique, participation

### L'environnement
- Les ressources sont **limitées** ; la production et les déchets pèsent sur le climat et la biodiversité. Plusieurs sujets récents en découlent : « Économie » (2023), « Préserver » (2025), « (Ré)générer » (2026).
- **Écoconception** : réduire les impacts d'un produit à toutes les étapes de son **cycle de vie** (matières, fabrication, transport, usage, fin de vie).
- **Sobriété** et **économie de moyens** : faire mieux avec moins (moins de matière, moins d'énergie, moins de pièces). L'économie de moyens est ancienne : formes simples, matériaux disponibles sur place.
- **Réemploi** (réutiliser un objet tel quel), **réparation**, **recyclage** (transformer la matière), **upcycling** ou **surcyclage** (transformer un déchet en objet de plus grande valeur).
- **Économie circulaire** : garder les matières le plus longtemps en usage, au lieu de produire, consommer et jeter.
- **Obsolescence programmée** : réduire volontairement la durée de vie d'un produit ; c'est un délit en France depuis 2015. L'**indice de réparabilité** (2021) informe le consommateur.
- **Biomatériaux** et **biomimétisme** (s'inspirer des solutions du vivant) ; **low-tech** (techniques simples, réparables, peu gourmandes).
- **Local** et **circuits courts** : utiliser les ressources et les savoir-faire d'un territoire.

### Le numérique
- **Outils** : dessin et modélisation 3D, **fabrication additive**, découpe laser, machines à commande numérique, **design paramétrique** et **génératif**, **génération automatique** d'images et de formes par logiciel (sujet 2025 « Nouveaux outils »).
- Ces outils **questionnent** le rôle du créateur : qui est l'auteur, quelle place pour la main et le geste, quel risque d'uniformisation, quelles nouvelles formes deviennent possibles.
- L'histoire montre que chaque **nouvel outil** (imprimerie, machine à vapeur, ordinateur) a d'abord inquiété, puis renouvelé les pratiques.
- **Open design** : des plans partagés librement que chacun peut fabriquer et modifier.
- **Objets connectés** et interfaces : le design d'interaction conçoit des échanges entre l'usager et le système.

### La participation et le lien social
- **Co-conception** et **design participatif** : impliquer les usagers dans le projet (ateliers, chantiers ouverts, identités dessinées par les habitants).
- **Design social** : répondre à des besoins collectifs (logement, santé, inclusion, services publics).
- **Tiers-lieux**, **fablabs**, **repair cafés** : des lieux où l'on fabrique, répare et apprend ensemble.
- Le designer devient parfois un **médiateur** qui organise la participation plutôt qu'un auteur unique.

### Le patrimoine et la transmission
- **Préserver** les savoir-faire, les bâtiments, les objets ; les **réactiver** en les associant à des usages nouveaux.
- **Hybridation** : marier tradition et innovation (osier et plastique, céramique et impression 3D).

### Comment utiliser ces enjeux dans la copie
- Toujours relier un enjeu à un **document** et à une **référence** précise.
- Montrer les **tensions** : un objet écologique peut coûter plus cher ; un outil numérique peut libérer ou uniformiser ; la participation peut enrichir ou diluer un projet.

### À retenir pour le bac
- Écoconception, cycle de vie, sobriété, réemploi, réparation, upcycling, économie circulaire.
- Obsolescence programmée (délit depuis 2015), indice de réparabilité (2021).
- Numérique : fabrication additive, paramétrique, génération automatique ; il questionne l'auteur et le geste.
- Participation, design social, tiers-lieux ; hybridation de la tradition et de l'innovation.`,
      cartes: [
        { q: "Qu'est-ce que l'écoconception ?", r: "Réduire les impacts d'un produit à toutes les étapes de son cycle de vie." },
        { q: "Qu'est-ce que l'économie de moyens ?", r: "Faire mieux avec moins : moins de matière, d'énergie et de pièces." },
        { q: "Réemploi ou recyclage ?", r: "Le réemploi réutilise l'objet tel quel ; le recyclage transforme sa matière." },
        { q: "Qu'est-ce que l'upcycling ?", r: "Le surcyclage : transformer un déchet en objet de plus grande valeur." },
        { q: "Qu'est-ce que l'économie circulaire ?", r: "Garder les matières le plus longtemps en usage au lieu de produire, consommer et jeter." },
        { q: "Qu'est-ce que l'obsolescence programmée ?", r: "Réduire volontairement la durée de vie d'un produit ; c'est un délit en France depuis 2015." },
        { q: "À quoi sert l'indice de réparabilité ?", r: "À informer le consommateur sur la facilité de réparer un produit (depuis 2021)." },
        { q: "Qu'est-ce que le biomimétisme ?", r: "S'inspirer des solutions du vivant pour concevoir." },
        { q: "Qu'est-ce que la low-tech ?", r: "Des techniques simples, réparables et peu gourmandes en ressources." },
        { q: "Quelles questions posent les nouveaux outils numériques ?", r: "Qui est l'auteur, quelle place pour la main, quel risque d'uniformisation, quelles formes nouvelles." },
        { q: "Qu'est-ce que l'open design ?", r: "Des plans partagés librement que chacun peut fabriquer et modifier." },
        { q: "Qu'est-ce que le design social ?", r: "Un design qui répond à des besoins collectifs : logement, santé, inclusion, services publics." },
        { q: "Qu'est-ce qu'un repair café ?", r: "Un lieu où des bénévoles aident à réparer des objets ensemble." },
        { q: "Qu'est-ce que l'hybridation en design ?", r: "Le mariage de la tradition et de l'innovation, comme l'osier et le plastique." },
      ],
      quiz: [
        { q: "Transformer des bâches usagées en sacs vendus plus cher, c'est :", choix: ["de l'obsolescence programmée", "de l'upcycling", "de la fast fashion", "de la standardisation"], bonne: 1, expl: "Le déchet gagne de la valeur.", niv: 1 },
        { q: "En France, l'obsolescence programmée est un délit depuis :", choix: ["1975", "2030", "2021", "2015"], bonne: 3, expl: "L'indice de réparabilité arrive en 2021.", niv: 1 },
        { q: "S'inspirer de la structure d'un nid d'abeille pour concevoir un panneau léger, c'est :", choix: ["du biomimétisme", "du détournement", "de la signalétique", "de la haute couture"], bonne: 0, expl: "On imite une solution du vivant.", niv: 1 },
        { q: "Mettre en ligne librement les plans d'une chaise à fabriquer soi-même, c'est :", choix: ["du streamline", "de l'artisanat d'art", "de l'obsolescence", "de l'open design"], bonne: 3, expl: "Chacun peut fabriquer et modifier.", niv: 1 },
        { q: "Réduire le nombre de pièces et de matériaux d'un objet relève de :", choix: ["l'ornement", "l'économie de moyens", "la fonction d'estime", "la haute couture"], bonne: 1, expl: "Faire mieux avec moins.", niv: 2 },
        { q: "Un collectif fabrique des objets en fondant des déchets plastiques comme de la barbe à papa. Il pratique :", choix: ["la fast fashion", "la production de luxe en pièce unique par un atelier de haute couture", "le tissage traditionnel", "la valorisation de déchets par un procédé nouveau"], bonne: 3, expl: "Le déchet devient une ressource.", niv: 2 },
        { q: "Une typographie dessinée à la main puis réinterprétée par un logiciel de génération d'images pose surtout la question :", choix: ["de la circulation des visiteurs", "du prix du papier et des encres utilisés", "de la place de l'auteur et du geste", "de l'ergonomie d'un siège"], bonne: 2, expl: "Les nouveaux outils questionnent le rôle du créateur.", niv: 2 },
        { q: "Un smartphone conçu pour être démonté et réparé facilement répond à un enjeu de :", choix: ["décor Art nouveau", "fonction d'estime", "durabilité et réparabilité", "production de masse"], bonne: 2, expl: "Il allonge la durée de vie du produit.", niv: 2 },
        { q: "Laquelle n'est **pas** une démarche d'économie circulaire ?", choix: ["L'obsolescence programmée", "Le réemploi", "La réparation", "Le recyclage des matières"], bonne: 0, expl: "Elle raccourcit la vie des produits.", niv: 2 },
        { q: "Pourquoi un nouvel outil a-t-il souvent inquiété avant de renouveler les pratiques ?", choix: ["Il est interdit par la loi", "Il remet en cause des savoir-faire avant d'ouvrir des formes nouvelles", "Il supprime le besoin de concevoir et de dessiner à la main", "Il ne change rien aux pratiques"], bonne: 1, expl: "L'imprimerie et la machine à vapeur l'ont montré.", niv: 3 },
        { q: "Quelle tension peut-on soulever à propos du design participatif ?", choix: ["Il interdit les ateliers", "Il supprime l'usager", "Il implique les usagers, mais peut diluer la cohérence du projet", "Il impose une seule forme validée par le designer"], bonne: 2, expl: "La copie gagne à montrer les deux côtés.", niv: 3 },
        { q: "Pourquoi l'économie de moyens n'est-elle pas une idée seulement actuelle ?", choix: ["Les artisans utilisaient depuis longtemps les matériaux disponibles et des formes simples", "Elle a été inventée par les logiciels de génération d'images récents", "Cette idée est apparue avec le plastique", "Elle date de l'Art déco et de son luxe"], bonne: 0, expl: "Le sujet « Économie » invitait à remonter dans le passé.", niv: 3 },
      ],
    },
  ],
  methode: [
    { id: 'std2a-amd-m1', mat: 'std2a-amd', titre: 'Définir le thème et poser une problématique',
      formules: ['Thème en un mot, souvent un verbe, avec ou sans définition : Jouer, Bifurquer, Économie, Intriguer, Tisser, Nouveaux outils, Préserver, Compléter, (Ré)générer', 'À partir de l\'une des questions proposées, vous devez interroger le thème d\'étude au regard des préoccupations contemporaines et passées du design et des métiers d\'art'],
      vu: ['Bac 2026 métropole : Compléter (« En quoi le manque peut-il être une opportunité en design et métiers d\'art ? »)', 'Bac 2026 Polynésie : (Ré)générer', 'Bac 2025 : Nouveaux outils ; Préserver', 'Bac 2024 : Intriguer ; Tisser', 'Bac 2023 : Bifurquer ; Économie', 'Bac 2022 Polynésie : Jouer'],
      pts: 'Critère « cohérence du questionnement au regard du thème », environ un quart de la note',
      attendu: 'Une introduction qui définit le thème dans ses différents sens, situe rapidement les trois documents, reformule la question choisie en problématique qui fait apparaître une tension, puis annonce le plan. Le correcteur veut voir que l\'élève a compris le thème et choisi un angle.',
      etapes: ['Lire la définition donnée et chercher les autres sens du mot, ses synonymes et ses contraires.', 'Relire la demande : elle fixe le périmètre (époque, enjeu, acteurs).', 'Choisir la question qui inspire le plus d\'exemples.', 'Reformuler cette question en faisant apparaître une tension ou un paradoxe.', 'Annoncer un plan en deux ou trois parties.'],
      mots: ['polysémie', 'au sens propre', 'au sens figuré', 'paradoxe', 'enjeu', 'dans quelle mesure', 'en quoi'],
      pieges: ['Recopier la question sans la reformuler.', 'Oublier de définir le thème.', 'Traiter les deux questions à la fois.', 'Une problématique trop large, sans tension.'],
      cas: 'Sujet inventé : thème « RALENTIR ». Demande : la société valorise la vitesse et l\'efficacité ; certains créateurs proposent au contraire des objets et des espaces qui invitent à prendre son temps. Question choisie : « En quoi ralentir peut-il enrichir l\'expérience de l\'usager ? »',
      question: 'Rédigez l\'introduction : définition du thème, problématique et annonce du plan.',
      modele: 'Ralentir, c\'est au sens propre diminuer sa vitesse ; au sens figuré, c\'est prendre le temps de faire, de regarder, de comprendre. Or le design est souvent associé à l\'efficacité : un bon objet serait rapide à utiliser et intuitif. Les documents proposés, un service à thé qui demande une préparation en plusieurs gestes, un banc public ondulant qui invite à la pause et une affiche qui ne se lit qu\'en s\'approchant, prennent le contre-pied de cette idée. On peut alors se demander dans quelle mesure freiner l\'usager, au lieu de le servir le plus vite possible, peut rendre son expérience plus riche. Nous verrons d\'abord que le design a longtemps cherché la rapidité, puis que ralentir peut éveiller l\'attention et le plaisir, avant de montrer que cette lenteur répond à des enjeux de société, du bien-être à la sobriété.',
      grille: ['Thème défini dans plusieurs sens', 'Documents situés', 'Problématique avec une tension', 'Plan annoncé', 'Lien clair avec la question choisie'] },
    { id: 'std2a-amd-m2', mat: 'std2a-amd', titre: 'Analyser un document du corpus',
      formules: ['Votre propos, réfléchi et structuré, se fonde sur l\'analyse croisée des documents', 'Analyser et confronter des ressources iconographiques, textuelles et graphiques'],
      vu: ['Tous les sujets depuis 2021 : trois documents de domaines différents, par exemple en 2025 le Minitel de Roger Tallon (1978), un projet d\'architecture robotisée (2018) et des recherches typographiques retravaillées par un logiciel de génération d\'images (2024)'],
      pts: 'Critère « pertinence de l\'analyse croisée des documents », environ un quart de la note',
      attendu: 'Pour chaque document utilisé : une identification rapide (auteur, date, domaine), une description précise, puis une analyse selon plusieurs angles (technique, plastique, usage, sens, contexte), toujours reliée au thème. L\'analyse est placée dans le développement, là où elle sert l\'argument.',
      etapes: ['Lire la légende : auteur, date, matériaux, contexte.', 'Décrire avec le vocabulaire précis : formes, matériaux, couleurs, composition.', 'Analyser : comment c\'est fait, à quoi cela sert, pour qui, ce que cela signifie.', 'Relier chaque observation au thème par une phrase d\'interprétation.', 'Ajouter un croquis analytique si un fonctionnement est plus clair dessiné.'],
      mots: ['assise', 'piètement', 'polypropylène', 'tressage', 'connotation', 'usager', 'grande série', 'hybridation'],
      pieges: ['Paraphraser la légende.', 'Décrire sans analyser.', 'Analyser hors du thème.', 'Vocabulaire vague : « joli », « bizarre », « truc ».'],
      cas: 'Document inventé : la designer fictive Lou Mareuil, chaise « Seconde », 2022 : une chaise de bistrot en bois courbé trouvée dans une déchetterie, dont le dossier cassé est remplacé par une pièce imprimée en 3D en plastique recyclé vert vif, laissée bien visible.',
      question: 'Analysez ce document au regard du thème « Compléter ».',
      modele: 'La chaise « Seconde » part d\'un objet existant, une chaise de bistrot en bois courbé de type Thonet, produite en grande série depuis le XIXe siècle et jetée. Lou Mareuil ne cache pas la réparation : le dossier imprimé en 3D, d\'un vert vif, contraste avec le bois sombre et la courbe ancienne. Techniquement, l\'impression 3D permet de fabriquer une pièce unique adaptée exactement à la casse, à partir de plastique recyclé. Sur le plan du sens, la couleur assume le manque au lieu de l\'effacer : l\'objet raconte son histoire et sa seconde vie. Compléter devient ici un acte créatif et écologique, qui associe un savoir-faire industriel ancien et un outil numérique récent.',
      grille: ['Document identifié', 'Description précise', 'Au moins trois angles d\'analyse', 'Lien au thème', 'Vocabulaire technique juste'] },
    { id: 'std2a-amd-m3', mat: 'std2a-amd', titre: 'Croiser les documents : convergences et divergences',
      formules: ['Votre propos se fonde sur l\'analyse croisée des documents et leur mise en tension avec vos propres références et connaissances'],
      vu: ['Bac 2024 Polynésie, « Tisser » : un texte de 1925 sur la photographie, des récipients en aiguilles de pin (2014-2021) et une réhabilitation d\'habitations avec les habitants (2010)', 'Bac 2023 Polynésie, « Économie » : une chaise faite d\'objets hétéroclites, la galerie des Glaces de Versailles et une affiche suisse de 1955'],
      pts: 'Critère « pertinence de l\'analyse croisée des documents »',
      attendu: 'Montrer ce qui rapproche et ce qui distingue les documents, à propos d\'une même idée, dans un même paragraphe. Le correcteur valorise un croisement « fécond » : qui fait progresser la réflexion, pas une simple comparaison de surface.',
      etapes: ['Faire au brouillon un tableau : documents en colonnes, angles en lignes (matériaux, usage, époque, sens, rapport au thème).', 'Repérer une convergence forte et une divergence forte.', 'Construire chaque paragraphe autour d\'une idée, avec au moins deux documents.', 'Utiliser des mots de comparaison : de même, à l\'inverse, alors que, tandis que.'],
      mots: ['convergence', 'divergence', 'de même', 'à l\'inverse', 'tandis que', 'mise en tension'],
      pieges: ['Un paragraphe par document.', 'Comparer des détails sans intérêt (la taille, la couleur seule).', 'Oublier un document.', 'Ne pas tirer de conclusion du croisement.'],
      cas: 'Corpus inventé, thème « Économie » : document 1, une galerie de palais du XVIIe siècle couverte de miroirs et de dorures ; document 2, une chaise fictive faite de bâtons et de chambres à air récupérés ; document 3, une affiche en deux couleurs, uniquement typographique, des années 1950.',
      question: 'Rédigez un paragraphe qui croise les trois documents.',
      modele: 'Ces trois documents montrent deux rapports opposés à l\'économie. La galerie du palais affiche une dépense spectaculaire : miroirs, dorures et peintures disent la puissance du roi, l\'abondance devient un message politique. À l\'inverse, la chaise de récupération et l\'affiche pratiquent l\'économie de moyens. La chaise utilise ce qui est disponible, des bâtons et des chambres à air, et fait de la contrainte une signature ; l\'affiche n\'emploie que deux couleurs et des lettres, mais une composition rigoureuse suffit à la rendre forte. Ainsi, économiser n\'est pas appauvrir : la sobriété peut être un choix esthétique, tandis que le luxe peut lui aussi porter un sens.',
      grille: ['Idée directrice claire', 'Les trois documents utilisés', 'Convergence et divergence explicites', 'Mots de comparaison', 'Conclusion tirée du croisement'] },
    { id: 'std2a-amd-m4', mat: 'std2a-amd', titre: 'Construire le développement en parties',
      formules: ['Votre propos, réfléchi et structuré', 'Organiser et structurer un raisonnement dialectique'],
      vu: ['Tous les sujets : la note d\'accompagnement 2025 demande « la forme de la dissertation (plan, développement en plusieurs parties, conclusion) »'],
      pts: 'Critère « cohérence du questionnement » et clarté de l\'expression',
      attendu: 'Deux ou trois parties visibles, chacune avec une idée directrice, des arguments illustrés par le corpus et des références personnelles, et une transition. Les étapes du raisonnement sont reliées par des mots de liaison. Une conclusion répond à la problématique et ouvre.',
      etapes: ['Choisir un plan dialectique (oui, mais, en réalité) ou thématique (usage, forme, société).', 'Écrire au brouillon la phrase-idée de chaque partie.', 'Répartir les documents et les références entre les parties.', 'Rédiger chaque partie : idée, explication, exemple analysé, croquis éventuel, transition.', 'Conclure : réponse, rappel des étapes, ouverture.'],
      mots: ['tout d\'abord', 'en effet', 'cependant', 'à l\'inverse', 'ainsi', 'en définitive', 'pour conclure'],
      pieges: ['Une seule grande partie sans structure.', 'Des parties qui disent la même chose.', 'Pas de transition.', 'Une conclusion qui ne répond pas.'],
      cas: 'Sujet inventé : thème « Ralentir », problématique : dans quelle mesure freiner l\'usager peut-il enrichir son expérience ?',
      question: 'Proposez un plan détaillé en trois parties.',
      modele: 'I. Le design a longtemps cherché la rapidité et l\'efficacité : fonctionnalisme, « la forme suit la fonction », objets intuitifs et standardisés ; exemple d\'une bouilloire électrique qui chauffe en deux minutes. II. Ralentir peut pourtant éveiller l\'attention et le plaisir : le service à thé du corpus impose des gestes et un rituel ; l\'affiche qui se lit de près oblige à s\'approcher ; référence à la cérémonie du thé japonaise, où chaque geste compte. III. Ralentir répond aussi à des enjeux de société : le banc ondulant invite à la pause dans l\'espace public, contre l\'accélération urbaine ; la lenteur rejoint la sobriété (objets durables, réparés) ; limite : un objet trop lent peut exclure ceux qui n\'ont pas de temps. Conclusion : freiner l\'usager enrichit l\'expérience quand la lenteur a un sens ; ouverture sur le mouvement « slow » dans la mode.',
      grille: ['Deux ou trois parties distinctes', 'Idée directrice par partie', 'Documents et références répartis', 'Progression et transitions', 'Conclusion avec ouverture'] },
    { id: 'std2a-amd-m5', mat: 'std2a-amd', titre: 'Mobiliser ses références personnelles',
      formules: ['Mise en tension avec vos propres références et connaissances', 'Adéquation et justesse des connaissances et références mobilisées'],
      vu: ['Tous les sujets : critère d\'évaluation commun ; la note d\'accompagnement 2025 précise qu\'« en aucun cas une liste d\'exemples non analysés n\'est attendue »'],
      pts: 'Critère « adéquation et justesse des connaissances et références », environ un quart de la note',
      attendu: 'Au moins trois ou quatre exemples hors corpus, de domaines et d\'époques variés, chacun identifié (auteur, titre, date, matériaux) et brièvement analysé pour soutenir une idée. Un exemple d\'un autre domaine (cinéma, littérature, sciences) est un plus.',
      etapes: ['Préparer pendant l\'année un carnet de références classées par grands thèmes (réparer, jouer, outil, matière, usager).', 'Au brouillon, noter deux références par partie.', 'Identifier chaque référence avec précision.', 'Dire en une ou deux phrases ce qu\'elle prouve.', 'Varier : objet, graphisme, espace, mode, métier d\'art, époques.'],
      mots: ['par exemple', 'comme le montre', 'de la même manière', 'à l\'image de', 'on peut citer'],
      pieges: ['Une liste de noms sans analyse.', 'Une référence mal située (mauvaise date, mauvais auteur).', 'Toujours le même domaine.', 'Des références sans lien avec l\'idée.'],
      cas: 'Idée à soutenir : en design, compléter un objet existant peut être un acte créatif.',
      question: 'Rédigez un paragraphe qui soutient cette idée avec deux références hors corpus.',
      modele: 'Compléter un objet existant peut être un véritable acte de création. Au Japon, le kintsugi répare les céramiques cassées avec une laque saupoudrée d\'or : la fissure, au lieu d\'être cachée, devient un décor qui rend l\'objet unique et raconte son histoire. De la même manière, les vêtements japonais en boro, rapiécés pendant des générations avec des morceaux de coton indigo, montrent que l\'ajout successif de pièces forme une composition textile d\'une grande richesse. Dans les deux cas, le complément ne répare pas seulement : il transforme l\'objet et lui donne une valeur nouvelle.',
      grille: ['Références hors corpus', 'Identification précise', 'Analyse au service de l\'idée', 'Variété des domaines', 'Phrase de conclusion'] },
    { id: 'std2a-amd-m6', mat: 'std2a-amd', titre: 'Communiquer par des annotations graphiques',
      formules: ['Votre raisonnement nécessite d\'être communiqué à la fois de manière écrite et graphique', 'Clarté de l\'expression écrite et graphique'],
      vu: ['Tous les sujets : critère commun ; la note d\'accompagnement 2025 précise que les annotations complètent l\'écrit sans le répéter et restent subordonnées au texte'],
      pts: 'Critère « clarté de l\'expression écrite et graphique », environ un quart de la note, plus 2 points de langue depuis 2027',
      attendu: 'Quelques croquis et schémas, intégrés dans le devoir et légendés, qui apportent une information que le texte ne donne pas aussi bien : un fonctionnement, une comparaison, une synthèse du raisonnement. Le texte reste dominant.',
      etapes: ['Repérer les idées plus claires en dessin : un assemblage, une évolution, une comparaison.', 'Faire un croquis rapide et simple, au trait.', 'Ajouter des flèches et des légendes courtes.', 'Placer le croquis à côté du paragraphe qu\'il éclaire.', 'Terminer éventuellement par un schéma de synthèse du raisonnement.'],
      mots: ['croquis analytique', 'schéma', 'légende', 'flèche', 'coupe', 'vue éclatée', 'frise', 'tableau comparatif'],
      pieges: ['Recopier les images du corpus.', 'Des dessins sans légende.', 'Un dessin décoratif sans rapport avec l\'idée.', 'Tout dessiner et peu écrire.'],
      cas: 'Idée à illustrer : la chaise n° 14 de Thonet (1859) se compose de quelques pièces en bois courbé assemblées par des vis, ce qui permettait de l\'expédier démontée.',
      question: 'Décrivez le croquis que vous feriez et ses légendes.',
      modele: 'Une vue éclatée simple, au crayon : les six pièces principales légèrement écartées les unes des autres (le dossier et les pieds arrière d\'un seul tenant, l\'anneau d\'assise, les deux pieds avant, l\'anneau d\'entretoise, le petit cintre du dossier). Des flèches montrent comment elles s\'emboîtent ; quelques points marquent les vis. Légendes : « hêtre courbé à la vapeur », « assemblage par vis, sans colle », « expédition à plat : 36 chaises démontées dans une caisse d\'un mètre cube ». À côté, une phrase du texte relie ce dessin à l\'idée de production en grande série.',
      grille: ['Croquis utile à l\'argument', 'Légendes précises', 'Lien avec le texte', 'Lisibilité', 'Pas de copie du corpus'] },
  ],
  sujets: [
    { id: 'std2a-amd-s1', matiere: 'std2a-amd', titre: 'Sujet d\'entraînement inventé : « Réparer »', duree: 240,
      enonce: `## Sujet d'entraînement (entièrement inventé)

Les créateurs, les projets et les citations de ce sujet sont fictifs ; les documents sont décrits en mots. Durée : 4 heures. Calculatrice et dictionnaire interdits. Noté sur 20 points, dont 2 pour l'orthographe et la syntaxe.

**RÉPARER**

**Définition**
Réparer (verbe transitif) : remettre en état ce qui est abîmé ; au figuré, effacer les conséquences d'une faute, rétablir un lien. (Définition inventée pour l'entraînement, proche de celle des dictionnaires.)

**Demande**
Longtemps, on a réparé ses objets par nécessité. La production de masse a rendu le neuf moins cher que la réparation. Aujourd'hui, les enjeux environnementaux et sociaux redonnent une place à la réparation dans les pratiques des créateurs.

- En quoi réparer peut-il devenir un acte créatif en design et métiers d'art ?
- La réparation peut-elle transformer la relation entre l'usager et ses objets ?

À partir de l'une des questions proposées, vous devez interroger le thème d'étude au regard des préoccupations contemporaines et passées du design et des métiers d'art. Votre propos, réfléchi et structuré, se fonde sur l'analyse croisée des documents et leur mise en tension avec vos propres références et connaissances. Votre raisonnement nécessite d'être communiqué à la fois de manière écrite et graphique.

**Documentation**

**Document 1 : atelier fictif Terre Reprise, céramiste Inès Calvel, série « Cicatrices », 2021, grès, laque et poudre de laiton.**
Photographie de cinq bols en grès gris, cassés puis recollés. Les lignes de fracture sont soulignées par une laque dorée bien visible, qui dessine sur chaque bol un réseau de lignes différentes. Texte accompagnant : la céramiste récupère des bols cassés auprès de restaurants de son quartier et s'inspire d'une technique japonaise ancienne de réparation à la laque et à l'or. Chaque bol est rendu au restaurant, qui le présente sur sa carte comme « réparé à la main ».

**Document 2 : citation fictive du designer Marc Ollivant, 2019.**
« Un objet que l'on ne peut pas ouvrir ne nous appartient pas vraiment. Je dessine des grille-pain qui se démontent avec une seule clé, dont chaque pièce porte un numéro et se commande en ligne. Le plus beau compliment qu'on puisse me faire, c'est qu'un de mes appareils ait vingt ans. »

**Document 3 : collectif fictif Les Rassembleurs, identité visuelle et dispositif « La Fabrique à rafistoler », 2024, ville inventée de Saint-Aurel.**
Un camion aménagé circule chaque samedi dans les quartiers ; des bénévoles y aident les habitants à réparer vêtements, vélos et petits appareils. Description des visuels : un logotype fait de lettres découpées dans des tissus différents et cousues ensemble ; des affiches où chaque habitant venu au camion peut coller une pièce de tissu pour « rapiécer » une grande lettre ; un carnet de réparation remis à chaque participant, avec des schémas simples à compléter.

**Critères d'évaluation**
- Pertinence de l'analyse croisée des documents iconographiques, textuels et graphiques.
- Cohérence du questionnement mené au regard du thème.
- Adéquation et justesse des connaissances et références mobilisées.
- Clarté de l'expression écrite et graphique.
- Maîtrise de l'orthographe et de la syntaxe (2 points).`,
      corrige: `## Corrigé (éléments attendus, pour la première question)

Il n'y a pas de corrigé unique : toute problématique et tout plan sont acceptés s'ils répondent à la question choisie, s'appuient sur les trois documents et sur des références personnelles. Voici une proposition.

### Introduction
- Définition : réparer, c'est remettre en état ce qui est abîmé, mais aussi, au figuré, rétablir un lien.
- Tension : la réparation est souvent vue comme un geste technique et discret, qui cherche à effacer le dommage ; or les documents montrent des créateurs qui en font un geste visible, pensé, voire un style.
- Problématique possible : dans quelle mesure le geste de réparer, longtemps caché, peut-il devenir le point de départ d'une création ?
- Plan annoncé : la réparation comme nécessité discrète ; la réparation qui se montre et crée de la valeur ; la réparation conçue à l'avance et partagée.

### I. Une réparation longtemps discrète et nécessaire
- Avant l'industrie, on répare tout par économie : reprisage, rapiéçage, rempaillage des chaises, étamage des casseroles ; métiers de cordonnier, rémouleur, rempailleur.
- La production de masse rend le neuf moins cher que la réparation ; l'objet jetable et parfois l'obsolescence programmée (délit en France depuis 2015) détournent de ce geste.
- Le document 2 critique justement l'objet qu'on ne peut pas ouvrir : la réparation suppose que le designer l'ait prévue.
- Croquis possible : frise « réparer par nécessité, jeter, réparer par choix ».

### II. Montrer la réparation : du dommage au décor
- Document 1 : la laque dorée transforme la fracture en motif ; chaque bol devient unique ; le grès industriel de restaurant prend la valeur d'une pièce de métier d'art. Analyse plastique (réseau de lignes, contraste du doré et du gris), technique (recollage, laque), sémantique (la cicatrice comme histoire).
- Référence : le kintsugi japonais ; le boro, vêtements rapiécés pendant des générations, aujourd'hui exposés comme des œuvres textiles.
- Document 3 : le logotype en lettres de tissus cousus et les affiches à « rapiécer » reprennent cette esthétique de l'assemblage visible dans le graphisme.
- Convergence entre 1 et 3 : la réparation est montrée et devient une signature visuelle. Divergence : objet unique de métier d'art d'un côté, identité collective de l'autre.
- Croquis possible : un bol avec ses lignes dorées et une légende « la fracture devient motif ».

### III. Concevoir pour réparer et réparer ensemble
- Document 2 : le designer intègre la réparation dès la conception (démontage par une clé, pièces numérotées) : écoconception, durée de vie, indice de réparabilité. Référence : un smartphone modulaire conçu pour être réparé ; la chaise n° 14 de Thonet, assemblée par vis, donc démontable.
- Document 3 : un service de design qui rend la réparation sociale et accessible, comme les repair cafés ; le carnet de réparation transmet un savoir-faire.
- Limite à discuter : la réparation visible peut devenir une mode ou un argument commercial ; elle demande du temps et des compétences.
- Croquis possible : vue éclatée d'un appareil démontable, ou schéma « designer, usager, réparateur ».

### Conclusion
- Réparer devient créatif quand le geste est assumé, mis en forme et partagé : il ajoute une valeur esthétique, environnementale et sociale.
- Ouverture : la réparation des bâtiments et des villes (réhabilitation plutôt que démolition).

### Éléments valorisés
- Les trois documents croisés dans les parties, pas analysés un par un.
- Des références précises et analysées (kintsugi, boro, rempaillage, repair café, Thonet, obsolescence programmée).
- Un vocabulaire juste (grès, laque, rapiéçage, démontable, écoconception, identité visuelle).
- Des croquis légendés qui complètent l'écrit.`,
      grille: [
        { c: 'Analyse croisée des trois documents : description précise, analyse selon plusieurs angles, convergences et divergences', pts: 5 },
        { c: 'Questionnement : thème défini, problématique avec une tension, plan structuré et progressif, conclusion qui répond', pts: 5 },
        { c: 'Références personnelles : au moins trois exemples hors corpus, identifiés, variés et analysés', pts: 4 },
        { c: 'Expression écrite et graphique : vocabulaire précis, croquis légendés qui complètent l\'écrit', pts: 4 },
        { c: 'Maîtrise de la langue : orthographe et syntaxe (2 points sur 20 à partir de 2027)', pts: 2 },
      ] },
  ],
};
