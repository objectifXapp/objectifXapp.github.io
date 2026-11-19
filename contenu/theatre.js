// Théâtre (enseignement de spécialité) — terminale, voie générale. Sources : voir matiere.sources.
// Programme : programme de terminale de la spécialité (BO spécial n° 8 du 25 juillet 2019) : pratique et culture théâtrales,
// appuyées sur un programme limitatif de deux questions renouvelées par moitié chaque année.
// Programme limitatif pour l'année 2026-2027, donc pour la session 2027 (BOENJS n° 4 du 22 janvier 2026, annexe 7) :
// « Un Chapeau de paille d'Italie » de Labiche et Marc-Michel, mise en scène Giorgio Barberio Corsetti, Comédie-Française, 2012 ;
// « Voyages romanesques » : L'Autre Monde ou Les États et empires de la lune (Benjamin Lazar et La Rêveuse, d'après Cyrano de Bergerac)
// et Gulliver (Valérie Lesort et Christian Hecq, d'après Swift).
// Épreuve : note de service du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026), applicable dès la session 2027.
export default {
  matiere: {
    id: 'theatre',
    nom: 'Théâtre',
    voie: 'generale',
    epreuve: { type: 'ecrit+pratique', duree: 210, coef: 16, quand: 'juin', note: 'Écrit de 3 h 30 noté sur 20, textes du programme autorisés : un court essai à partir d\'un extrait de captation de 5 minutes au plus, vu trois fois (8 points), puis une proposition pour le plateau sur une des œuvres au programme, avec croquis possibles (12 points). Oral de 30 minutes après 30 minutes de préparation : travail théâtral de 10 minutes au plus sur un extrait préparé, choisi par le jury entre les deux (12 points), puis entretien appuyé sur le carnet de bord (8 points). Chaque partie compte pour la moitié de la note.' },
    sources: [
      'https://eduscol.education.gouv.fr/5865/programmes-et-ressources-en-theatre-voie-gt',
      'https://eduscol.education.fr/document/71042/download',
      'https://eduscol.education.gouv.fr/sites/default/files/document/ra26lyceegttheatrevoyagesromanesquespdf-126638.pdf',
      'https://www.education.gouv.fr/bo/2026/Hebdo4/MENE2536492N',
      'https://www.education.gouv.fr/sites/default/files/document/bulletin-officiel-special-ndeg-4-du-17-septembre-2026-521035.pdf',
      'https://eduscol.education.gouv.fr/sites/default/files/document/26-atheg11-128448.pdf',
    ],
    chapitres: [
      { id: 'theatre-1', t: 'Analyser un spectacle et une captation : le vocabulaire du plateau', theme: 'Culture du spectateur' },
      { id: 'theatre-2', t: 'Repères d\'histoire et d\'esthétique théâtrales', theme: 'Culture du spectateur' },
      { id: 'theatre-3', t: 'Un Chapeau de paille d\'Italie : la pièce de Labiche et Marc-Michel', theme: 'Un Chapeau de paille d\'Italie' },
      { id: 'theatre-4', t: 'Un Chapeau de paille d\'Italie : personnages et mécanique du rire', theme: 'Un Chapeau de paille d\'Italie' },
      { id: 'theatre-5', t: 'Un Chapeau de paille d\'Italie sur scène : la mise en scène de Corsetti (2012)', theme: 'Un Chapeau de paille d\'Italie' },
      { id: 'theatre-6', t: 'Voyages romanesques : adapter un roman au théâtre', theme: 'Voyages romanesques' },
      { id: 'theatre-7', t: 'Cyrano de Bergerac, L\'Autre Monde : le roman du voyage dans la Lune', theme: 'Voyages romanesques' },
      { id: 'theatre-8', t: 'L\'Autre Monde de Benjamin Lazar et La Rêveuse : un spectacle baroque', theme: 'Voyages romanesques' },
      { id: 'theatre-9', t: 'Gulliver : le roman de Swift et le spectacle de Valérie Lesort et Christian Hecq', theme: 'Voyages romanesques' },
      { id: 'theatre-10', t: 'Construire une proposition pour le plateau', theme: 'Pratique théâtrale' },
      { id: 'theatre-11', t: 'L\'épreuve : essai sur captation, projet de plateau, oral et carnet de bord', theme: 'Méthode' },
    ],
  },
  paquets: [
    // ---------------------------------------------------------------- 1
    {
      chapitre: 'theatre-1',
      fiche: `## Analyser un spectacle et une captation : le vocabulaire du plateau

À l'écrit, la première partie part d'un **extrait de captation** (5 minutes au plus, vu trois fois). Il faut décrire avec les **mots justes**, puis **interpréter** : dire ce que chaque choix produit sur le spectateur.

### L'espace
- Le **plateau** est l'espace de jeu. L'**avant-scène** est la partie la plus proche du public, le **lointain** le fond de la scène.
- **Côté cour** et **côté jardin** : vu depuis la salle, le jardin est à gauche et la cour à droite (moyen de s'en souvenir : « J.-C. », jardin-cour, lu de gauche à droite).
- Les **coulisses** sont cachées sur les côtés ; les **cintres** sont au-dessus du plateau, d'où l'on fait descendre décors et projecteurs.
- Le **rapport scène-salle** peut être **frontal** (le public en face), **bifrontal** (deux gradins face à face), **en rond** ou **quadrifrontal**.
- Le **quatrième mur** est le mur invisible qui sépare la scène de la salle : les acteurs jouent comme si le public n'était pas là. **Briser le quatrième mur**, c'est s'adresser au public.

### La scénographie et les éléments du spectacle
- La **scénographie** organise l'espace : décor, volumes, matières, machines.
- La **lumière** : **plein feu**, **douche** (lumière verticale sur un acteur), **contre-jour** (éclairé de derrière, l'acteur devient silhouette), **poursuite** (projecteur qui suit l'acteur), **noir** (fin d'une scène).
- Le **son** : musique jouée **en direct** sur le plateau ou **enregistrée**, bruitages, silence.
- Le **costume**, le **maquillage**, le **masque** disent une époque, un rang social, un caractère.
- Les **accessoires** sont les objets manipulés par les acteurs.

### Le jeu de l'acteur
- Le **corps** (posture, gestes, déplacements), la **voix** (volume, débit, intonation), le **regard**.
- L'**adresse** : jouer pour un partenaire ou directement pour le public (**adresse public**).
- Le jeu peut être **naturaliste** (proche de la vie) ou **stylisé** (codifié, exagéré, chorégraphié).

### Le texte et la mise en scène
- Les **didascalies** sont les indications écrites par l'auteur (entrées, gestes, lieux). Le metteur en scène peut les suivre ou s'en écarter.
- La **mise en scène** est l'ensemble des choix qui font passer le texte au plateau. La **dramaturgie** est la réflexion sur le sens de la pièce, qui guide ces choix.

### La captation n'est pas le spectacle
- Une **captation** est un film du spectacle : la caméra choisit des **cadrages** (plan large, gros plan) et un **montage**. Elle donne déjà un point de vue.
- Il faut distinguer ce qui vient de la **mise en scène** et ce qui vient du **film**.

### Décrire puis interpréter
- D'abord **décrire** précisément (qui, où, comment, avec quoi), ensuite **interpréter** (quel effet, quel sens).
- Exemple : « Un seul acteur, en douche, au centre d'un plateau nu » → isolement, solitude, concentration du regard.

### À retenir pour le bac
- Cour à droite, jardin à gauche, vus depuis la salle ; avant-scène et lointain.
- Lumière, son, costume, accessoire, jeu : nommer précisément chaque élément.
- Toujours passer de la description à l'interprétation.
- Signaler ce qui appartient au film (cadrage, montage) et non au spectacle.`,
      cartes: [
        { q: "Qu'est-ce que le plateau ?", r: "L'espace de jeu des acteurs, sur la scène." },
        { q: "Avant-scène et lointain : quelle différence ?", r: "L'avant-scène est la partie la plus proche du public ; le lointain est le fond de la scène." },
        { q: "Où sont cour et jardin, vus depuis la salle ?", r: "Le jardin à gauche, la cour à droite (« J.-C. », lu de gauche à droite)." },
        { q: "Que sont les cintres ?", r: "L'espace au-dessus du plateau, d'où l'on fait descendre décors et projecteurs." },
        { q: "Qu'est-ce qu'un dispositif bifrontal ?", r: "Deux gradins de public face à face, avec le jeu au milieu." },
        { q: "Qu'est-ce que le quatrième mur ?", r: "Le mur invisible entre scène et salle : les acteurs jouent comme si le public n'était pas là." },
        { q: "Qu'est-ce que la scénographie ?", r: "L'organisation de l'espace scénique : décor, volumes, matières, machines." },
        { q: "Qu'est-ce qu'une douche, en lumière ?", r: "Une lumière verticale qui tombe sur un acteur et l'isole." },
        { q: "Qu'est-ce qu'un contre-jour ?", r: "Un éclairage placé derrière l'acteur, qui en fait une silhouette." },
        { q: "Qu'est-ce qu'une didascalie ?", r: "Une indication écrite par l'auteur : entrées, gestes, lieux, ton." },
        { q: "Mise en scène et dramaturgie : quelle différence ?", r: "La mise en scène est l'ensemble des choix de plateau ; la dramaturgie est la réflexion sur le sens qui les guide." },
        { q: "Qu'est-ce qu'une adresse public ?", r: "Un moment où l'acteur parle directement aux spectateurs." },
        { q: "Pourquoi une captation n'est-elle pas le spectacle ?", r: "La caméra choisit cadrages et montage : elle donne déjà un point de vue sur ce qui se passe au plateau." },
        { q: "Jeu naturaliste ou stylisé ?", r: "Le jeu naturaliste imite la vie ; le jeu stylisé est codifié, exagéré ou chorégraphié." },
      ],
      quiz: [
        { q: "Vu depuis la salle, le côté jardin se trouve :", choix: ["à droite de la scène", "à gauche de la scène", "au fond, près du lointain", "au-dessus du plateau"], bonne: 1, expl: "Jardin à gauche, cour à droite pour le spectateur.", niv: 1 },
        { q: "Une lumière verticale qui isole un acteur au centre s'appelle :", choix: ["une douche", "une poursuite", "un contre-jour", "un plein feu"], bonne: 0, expl: "La douche tombe d'en haut, comme l'eau.", niv: 1 },
        { q: "Un acteur éclairé par derrière, qui devient silhouette, est en :", choix: ["plein feu sur l'avant-scène", "lumière de face, très blanche", "poursuite depuis la régie", "contre-jour"], bonne: 3, expl: "Le contre-jour efface les traits et dessine la forme.", niv: 2 },
        { q: "Deux gradins de spectateurs face à face, avec le jeu au milieu, forment un dispositif :", choix: ["frontal", "en rond", "bifrontal", "à l'italienne"], bonne: 2, expl: "Les spectateurs se voient aussi entre eux.", niv: 2 },
        { q: "Qu'appelle-t-on briser le quatrième mur ?", choix: ["Démolir le décor en fin de spectacle", "S'adresser directement au public", "Jouer au fond du plateau, loin de la salle", "Supprimer les coulisses du théâtre"], bonne: 1, expl: "L'acteur sort de la fiction pour parler à la salle.", niv: 2 },
        { q: "Les indications écrites par l'auteur dans le texte sont :", choix: ["des répliques", "des tirades en vers", "des apartés", "des didascalies"], bonne: 3, expl: "Entrées, gestes, lieux : le metteur en scène peut s'en écarter.", niv: 1 },
        { q: "Dans une captation, un gros plan sur le visage d'un acteur relève :", choix: ["de la scénographie du spectacle", "du choix de lumière de la régie", "du cadrage du film", "du costume de l'acteur"], bonne: 2, expl: "La caméra montre ce que le spectateur de la salle ne voit pas ainsi.", niv: 3 },
        { q: "La réflexion sur le sens de la pièce, qui guide les choix de plateau, s'appelle :", choix: ["la dramaturgie", "la régie générale", "la machinerie", "la captation"], bonne: 0, expl: "La mise en scène applique cette réflexion au plateau.", niv: 2 },
        { q: "Quelle phrase passe bien de la description à l'interprétation ?", choix: ["« L'acteur est au centre, en douche, c'est joli. »", "« Il y a de la lumière et un acteur sur scène. »", "« Isolé dans une douche, l'acteur semble seul face à son destin. »", "« Le décor coûte sans doute très cher à fabriquer pour le théâtre. »"], bonne: 2, expl: "On nomme le procédé, puis on dit son effet.", niv: 3 },
        { q: "Un jeu codifié, exagéré ou chorégraphié est dit :", choix: ["naturaliste", "improvisé", "stylisé", "réaliste"], bonne: 2, expl: "Le jeu naturaliste, lui, imite la vie.", niv: 2 },
        { q: "D'où fait-on descendre les décors et les projecteurs ?", choix: ["Des cintres", "Des coulisses côté cour", "De l'avant-scène", "De la fosse d'orchestre"], bonne: 0, expl: "Les cintres sont au-dessus du plateau.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 2
    {
      chapitre: 'theatre-2',
      fiche: `## Repères d'histoire et d'esthétique théâtrales

Le correcteur attend une **culture de spectateur** : savoir situer les œuvres au programme dans une histoire du théâtre et citer des **références** précises.

### Antiquité et âge classique
- **Aristote** (Poétique, IVe siècle av. J.-C.) définit la tragédie comme l'imitation (**mimèsis**) d'une action, qui produit la **catharsis** (purification des passions). Il oppose le **récit**, fait par un narrateur, à l'action **représentée** par des acteurs.
- La **commedia dell'arte** (Italie, XVIe siècle) : acteurs masqués, personnages types (Arlequin, Pantalon), **canevas** improvisé, **lazzi** (gags physiques).
- Le théâtre **classique** français (XVIIe siècle) suit la règle des **trois unités** (temps, lieu, action) et la **bienséance** (Boileau, Art poétique, **1674**). **Molière**, **Racine**, **Corneille**.
- Le théâtre **à machines** de l'âge baroque fait voler les dieux et changer les décors à vue : le **merveilleux** passe par la technique. On joue à la lueur des **bougies**.

### Le XIXe siècle
- Le **vaudeville** : comédie légère mêlée de **couplets chantés** sur des airs connus, pleine de **quiproquos** et de rebondissements. **Labiche** puis **Feydeau** en sont les maîtres.
- **André Antoine** fonde le **Théâtre-Libre** en **1887** : décors vrais, jeu **naturaliste**, quatrième mur. Le metteur en scène devient un artiste.

### Le XXe siècle : la mise en scène et ses révolutions
- **Stanislavski** (Moscou) : l'acteur cherche la vérité intérieure du personnage.
- **Bertolt Brecht** : le **théâtre épique** et la **distanciation** ; on montre au spectateur qu'il est au théâtre pour qu'il réfléchisse au lieu de s'identifier.
- **Antonin Artaud**, Le Théâtre et son double (**1938**) : un théâtre de la **cruauté**, qui agit sur le corps et les sens.
- **Jean Vilar** crée le **Festival d'Avignon** en **1947** et dirige le **TNP** : un théâtre **populaire**, la Cour d'honneur du palais des papes.
- **Peter Brook**, L'Espace vide (**1968**) : un homme traverse un espace vide, un autre le regarde, cela suffit au théâtre.
- **Antoine Vitez** : « **faire théâtre de tout** », c'est-à-dire porter à la scène des textes qui ne sont pas des pièces (romans, poèmes, articles).
- Le **Théâtre du Soleil** d'**Ariane Mnouchkine** (fondé en 1964) invente des **créations collectives** (1789, en 1970).

### Marionnettes et théâtre d'objets
- Le **bunraku** japonais : de grandes marionnettes manipulées à vue par trois manipulateurs.
- Au XXe et au XXIe siècle, la **marionnette contemporaine** mêle acteurs, objets et poupées, souvent manipulés à vue.

### À retenir pour le bac
- Aristote : récit contre action représentée ; c'est le cœur de la question « Voyages romanesques ».
- Vaudeville, couplets, quiproquos : la famille du Chapeau de paille d'Italie.
- Le théâtre baroque, ses machines et ses bougies : un repère pour Benjamin Lazar.
- Vitez, « faire théâtre de tout » ; Brook, l'espace vide ; Brecht, la distanciation.`,
      cartes: [
        { q: "Qu'est-ce que la catharsis selon Aristote ?", r: "La purification des passions que produit la tragédie chez le spectateur." },
        { q: "Quelle distinction Aristote fait-il entre récit et théâtre ?", r: "Le récit est fait par un narrateur ; le théâtre représente l'action par des acteurs présents." },
        { q: "Qu'est-ce que la commedia dell'arte ?", r: "Un théâtre italien du XVIe siècle, avec masques, personnages types, canevas improvisé et lazzi." },
        { q: "Qu'est-ce qu'un lazzi ?", r: "Un gag physique de la commedia dell'arte." },
        { q: "Quelle est la règle des trois unités ?", r: "Une seule action, en un seul lieu, en une journée, selon le théâtre classique (Boileau, 1674)." },
        { q: "Qu'est-ce que le théâtre à machines ?", r: "Le théâtre baroque qui fait voler les personnages et change les décors à vue : le merveilleux par la technique." },
        { q: "Qu'est-ce qu'un vaudeville ?", r: "Une comédie légère mêlée de couplets chantés sur des airs connus, pleine de quiproquos (Labiche, Feydeau)." },
        { q: "Qui fonde le Théâtre-Libre, et quand ?", r: "André Antoine, en 1887 : décors vrais et jeu naturaliste." },
        { q: "Qu'est-ce que la distanciation de Brecht ?", r: "Rappeler au spectateur qu'il est au théâtre pour qu'il réfléchisse au lieu de s'identifier." },
        { q: "Que propose Artaud dans Le Théâtre et son double (1938) ?", r: "Un théâtre de la cruauté, qui agit sur le corps et les sens du spectateur." },
        { q: "Qui crée le Festival d'Avignon, et quand ?", r: "Jean Vilar, en 1947." },
        { q: "Que dit Peter Brook dans L'Espace vide (1968) ?", r: "Qu'un homme qui traverse un espace vide sous le regard d'un autre suffit à faire du théâtre." },
        { q: "Que veut dire « faire théâtre de tout » (Vitez) ?", r: "Porter à la scène des textes qui ne sont pas des pièces : romans, poèmes, articles." },
        { q: "Qu'est-ce que le bunraku ?", r: "Le théâtre japonais de grandes marionnettes manipulées à vue par trois manipulateurs." },
      ],
      quiz: [
        { q: "Selon Aristote, ce qui distingue le théâtre du récit, c'est que :", choix: ["seul le théâtre est écrit en vers rimés", "l'action y est représentée par des acteurs", "le récit est réservé aux histoires de dieux", "le théâtre se passe de narrateur et de texte"], bonne: 1, expl: "Le récit passe par un narrateur ; le théâtre montre.", niv: 2 },
        { q: "Les gags physiques de la commedia dell'arte s'appellent :", choix: ["des tirades", "des couplets", "des lazzi", "des stances"], bonne: 2, expl: "Les acteurs les improvisent à partir d'un canevas.", niv: 1 },
        { q: "Quel genre mêle comédie, quiproquos et couplets chantés sur des airs connus ?", choix: ["La tragédie classique", "Le drame romantique", "Le théâtre de la cruauté", "Le vaudeville"], bonne: 3, expl: "Labiche et Feydeau en sont les grands auteurs.", niv: 1 },
        { q: "En 1887, André Antoine fonde le Théâtre-Libre pour défendre :", choix: ["un jeu naturaliste et des décors vrais", "le retour des masques antiques", "les machines du théâtre baroque", "un théâtre de marionnettes géantes manipulées à vue"], bonne: 0, expl: "Il impose le quatrième mur et la vérité du plateau.", niv: 2 },
        { q: "La distanciation brechtienne veut que le spectateur :", choix: ["s'identifie pleinement au héros", "oublie qu'il est au théâtre", "réfléchisse au lieu de s'identifier", "monte participer au jeu sur le plateau"], bonne: 2, expl: "Le théâtre épique montre ses propres procédés.", niv: 2 },
        { q: "Qui a lancé la formule « faire théâtre de tout » ?", choix: ["Antoine Vitez", "Jean Vilar", "Peter Brook", "André Antoine"], bonne: 0, expl: "Il a mis en scène des romans et des poèmes.", niv: 2 },
        { q: "Dans quelle ville Jean Vilar crée-t-il un festival en 1947 ?", choix: ["Aix-en-Provence", "Paris", "Lyon", "Avignon"], bonne: 3, expl: "La Cour d'honneur du palais des papes devient son grand plateau.", niv: 1 },
        { q: "Quelle forme japonaise montre des marionnettes manipulées à vue ?", choix: ["Le nô masqué des samouraïs", "Le bunraku", "Le kabuki des acteurs hommes", "Le butô"], bonne: 1, expl: "Trois manipulateurs visibles animent chaque grande poupée.", niv: 2 },
        { q: "Pour Peter Brook, que faut-il au minimum pour faire du théâtre ?", choix: ["Une salle à l'italienne et un rideau", "Un texte en vers et un décor peint", "Un espace vide, un passant, un regard", "Une troupe d'au moins dix acteurs et un orchestre"], bonne: 2, expl: "C'est l'ouverture de L'Espace vide (1968).", niv: 3 },
        { q: "Au théâtre baroque, comment obtient-on le merveilleux ?", choix: ["Avec des projections vidéo et des écrans géants", "Avec des machines et des changements à vue", "Avec un plateau nu, sans lumière", "En supprimant les costumes et le décor peint"], bonne: 1, expl: "Les machines font voler dieux et héros.", niv: 3 },
        { q: "La règle des trois unités porte sur :", choix: ["l'action, le lieu et le temps", "le texte, le décor et le costume", "l'auteur, l'acteur et le public", "le vers, la rime et la césure"], bonne: 0, expl: "Une action, un lieu, une journée.", niv: 2 },
      ],
    },
    // ---------------------------------------------------------------- 3
    {
      chapitre: 'theatre-3',
      fiche: `## Un Chapeau de paille d'Italie : la pièce de Labiche et Marc-Michel

Première question du programme limitatif : **Un Chapeau de paille d'Italie**, d'**Eugène Labiche** et **Marc-Michel**, dans la mise en scène de **Giorgio Barberio Corsetti** à la **Comédie-Française** (**2012**). Les textes du programme sont autorisés pendant l'épreuve : il faut surtout savoir s'y repérer vite.

### Les auteurs et la création
- **Eugène Labiche** (1815-1888) écrit plus de cent soixante-dix pièces, souvent à plusieurs mains ; il entre à l'Académie française en 1880. **Marc-Michel** est l'un de ses collaborateurs.
- La pièce est créée le **14 août 1851** au **théâtre du Palais-Royal**, à Paris. C'est une **comédie en cinq actes mêlée de couplets** : un **vaudeville**.
- Elle connaît un grand succès et devient le modèle de la **pièce de poursuite** : un personnage court sans cesse après un objet.

### L'histoire
- **Fadinard**, jeune rentier parisien, doit se marier le jour même avec **Hélène**, fille de **Nonancourt**, pépiniériste de Charentonneau.
- Dans le bois de Vincennes, son **cheval mange un chapeau de paille d'Italie** accroché à un arbre. Ce chapeau appartient à **Anaïs Beauperthuis**, une femme mariée qui se promenait avec son amant, le lieutenant **Émile Tavernier**.
- Anaïs ne peut pas rentrer chez son mari sans chapeau : elle serait compromise. Émile exige que Fadinard trouve **un chapeau identique**, sinon il cassera tout chez lui.
- Fadinard court donc tout Paris, suivi par sa **noce** qui ne comprend rien.

### Les cinq actes
- **Acte I** : chez Fadinard. L'accident du chapeau ; la noce arrive.
- **Acte II** : chez la modiste **Clara**, ancienne maîtresse de Fadinard. La noce croit être **à la mairie**.
- **Acte III** : chez la **baronne de Champigny**, qui prend Fadinard pour un ténor célèbre. La noce croit être **au repas de noces**.
- **Acte IV** : chez **Beauperthuis**, le mari d'Anaïs, qui prend un bain de pieds et cherche sa femme.
- **Acte V** : dans la rue, devant la maison de Fadinard, près d'un poste de garde. Le chapeau de remplacement se trouve dans le **cadeau de mariage** de l'oncle **Vézinet** : tout s'arrange.

### Une comédie de la bourgeoisie
- Le mariage est une **affaire d'argent** et de respectabilité ; on y montre l'**adultère**, la peur du **scandale** et du qu'en-dira-t-on.
- Le rire vient d'une suite d'**accidents** qui transforment une journée ordinaire en **cauchemar** : la vie bien réglée du bourgeois déraille.

### À retenir pour le bac
- Labiche et Marc-Michel, Palais-Royal, 14 août 1851, cinq actes mêlés de couplets.
- Point de départ : le cheval mange le chapeau d'Anaïs ; il faut un chapeau identique.
- Cinq lieux : chez Fadinard, chez la modiste, chez la baronne, chez Beauperthuis, la rue.
- La noce suit sans comprendre : elle prend la boutique pour la mairie et le salon pour le repas.`,
      cartes: [
        { q: "Qui a écrit Un Chapeau de paille d'Italie ?", r: "Eugène Labiche et Marc-Michel." },
        { q: "Quand et où la pièce est-elle créée ?", r: "Le 14 août 1851, au théâtre du Palais-Royal, à Paris." },
        { q: "Quel est le genre de la pièce ?", r: "Une comédie en cinq actes mêlée de couplets : un vaudeville." },
        { q: "Quel est l'accident de départ ?", r: "Dans le bois de Vincennes, le cheval de Fadinard mange le chapeau de paille d'Italie d'Anaïs Beauperthuis." },
        { q: "Pourquoi faut-il retrouver un chapeau identique ?", r: "Anaïs, femme mariée, était avec son amant : sans chapeau, son mari découvrirait tout." },
        { q: "Qui est Émile Tavernier ?", r: "Le lieutenant, amant d'Anaïs, qui menace de tout casser chez Fadinard s'il ne trouve pas de chapeau." },
        { q: "Qui Fadinard doit-il épouser ?", r: "Hélène, fille de Nonancourt, pépiniériste de Charentonneau." },
        { q: "Où se passe l'acte II ?", r: "Chez la modiste Clara, ancienne maîtresse de Fadinard ; la noce croit être à la mairie." },
        { q: "Où se passe l'acte III ?", r: "Chez la baronne de Champigny, qui prend Fadinard pour un ténor ; la noce croit être au repas." },
        { q: "Où se passe l'acte IV ?", r: "Chez Beauperthuis, le mari d'Anaïs, qui prend un bain de pieds en cherchant sa femme." },
        { q: "Comment la pièce se dénoue-t-elle ?", r: "Le cadeau de mariage de l'oncle Vézinet est un chapeau de paille d'Italie identique." },
        { q: "Qu'est-ce qu'une pièce de poursuite ?", r: "Une comédie où un personnage court sans cesse après un objet ou une personne ; le Chapeau en est le modèle." },
        { q: "Quelle société la pièce montre-t-elle ?", r: "La bourgeoisie : mariage d'argent, respectabilité, adultère, peur du scandale." },
        { q: "Pourquoi parle-t-on d'un cauchemar comique ?", r: "Une suite d'accidents fait dérailler une journée de noces bien réglée." },
      ],
      quiz: [
        { q: "Un Chapeau de paille d'Italie est créé en :", choix: ["1851", "1862", "1874", "1912"], bonne: 0, expl: "Le 14 août 1851, au théâtre du Palais-Royal.", niv: 1 },
        { q: "Qui mange le chapeau de paille au début de la pièce ?", choix: ["Le chien de Nonancourt", "Le cheval de Fadinard", "La chèvre de l'oncle Vézinet", "L'âne de la modiste Clara"], bonne: 1, expl: "Dans le bois de Vincennes, pendant qu'Anaïs se promène avec son amant.", niv: 1 },
        { q: "Pourquoi Anaïs ne peut-elle pas rentrer chez elle sans chapeau ?", choix: ["Il pleut très fort sur Paris", "Elle l'a promis à sa modiste", "Son mari comprendrait qu'elle le trompe", "Le chapeau est un précieux cadeau de la baronne"], bonne: 2, expl: "Elle se promenait avec le lieutenant Émile Tavernier.", niv: 2 },
        { q: "Chez la modiste Clara, où la noce croit-elle se trouver ?", choix: ["À l'église", "Au bois de Vincennes", "Chez la baronne", "À la mairie"], bonne: 3, expl: "Le quiproquo fait rire tout l'acte II.", niv: 2 },
        { q: "Pour qui la baronne de Champigny prend-elle Fadinard ?", choix: ["Pour un ténor célèbre", "Pour un officier de cavalerie", "Pour le fils de Beauperthuis", "Pour un marchand de chapeaux"], bonne: 0, expl: "Elle l'attend pour chanter dans son salon.", niv: 2 },
        { q: "Que fait Beauperthuis quand Fadinard arrive chez lui ?", choix: ["Il donne un bal dans son salon", "Il prend un bain de pieds", "Il essaie un uniforme neuf", "Il vend des chapeaux"], bonne: 1, expl: "Il attend sa femme, inquiet, les pieds dans l'eau.", niv: 2 },
        { q: "Comment le problème du chapeau se résout-il ?", choix: ["La baronne offre le sien", "Clara en fabrique un en une nuit", "Émile renonce à sa menace", "Vézinet offre un chapeau identique"], bonne: 3, expl: "Le dénouement arrive par hasard, au dernier acte.", niv: 2 },
        { q: "Quel est le genre de la pièce ?", choix: ["Une tragédie classique en alexandrins", "Un drame romantique", "Une comédie mêlée de couplets", "Une farce médiévale"], bonne: 2, expl: "Les couplets chantés sur des airs connus font du Chapeau un vaudeville.", niv: 1 },
        { q: "Pourquoi dit-on que la pièce est un modèle de « pièce de poursuite » ?", choix: ["Le héros court tout Paris après un objet", "Les gendarmes poursuivent Fadinard", "Elle se joue en courant dans les rues de Paris", "Le public poursuit les acteurs à la fin"], bonne: 0, expl: "La quête du chapeau relie les cinq actes.", niv: 3 },
        { q: "Quelle peur sociale la pièce met-elle en scène ?", choix: ["La peur des épidémies", "La peur de la guerre", "La peur du scandale", "La peur des machines"], bonne: 2, expl: "Respectabilité et qu'en-dira-t-on gouvernent la bourgeoisie.", niv: 3 },
        { q: "Qui est Nonancourt ?", choix: ["Le domestique de Fadinard", "Le mari d'Anaïs", "Le futur beau-père de Fadinard", "L'amant de la baronne"], bonne: 2, expl: "Pépiniériste, père d'Hélène.", niv: 1 },
      ],
    },
    // ---------------------------------------------------------------- 4
    {
      chapitre: 'theatre-4',
      fiche: `## Un Chapeau de paille d'Italie : personnages et mécanique du rire

À l'écrit, la deuxième partie demande souvent un **projet pour un personnage** ou une scène (en 2026 : « un projet de création pour le personnage d'Hélène Nonancourt »). Il faut donc bien connaître chaque personnage.

### Les personnages
- **Fadinard** : le jeune marié, toujours pressé, qui improvise sans cesse pour se sortir de situations impossibles. Il entraîne la pièce par sa course.
- **Hélène** : la mariée, jeune fille de la campagne, timide et naïve ; elle a été élevée dans l'obéissance et ne comprend rien à ce qui arrive.
- **Nonancourt** : le père d'Hélène, pépiniériste. Il porte partout un **pot de myrte** (cadeau pour les mariés), souffre de **souliers trop étroits** et répète « **Mon gendre, tout est rompu !** » à chaque contrariété.
- **Vézinet** : l'oncle **sourd**, qui ne comprend rien et sourit à tout. Son cadeau sauvera la situation.
- **Bobin** : le cousin d'Hélène, amoureux d'elle, jaloux de Fadinard.
- **Anaïs Beauperthuis** et **Émile Tavernier** : le couple adultère, qui s'installe chez Fadinard.
- **Beauperthuis** : le mari d'Anaïs, soupçonneux et grincheux.
- **Clara** : la modiste, ancienne maîtresse de Fadinard. **La baronne de Champigny** : grande dame qui reçoit des artistes.
- La **noce** : un groupe de parents et d'amis de province qui suit Fadinard partout comme un **chœur** comique.

### La mécanique du rire
- Le **quiproquo** : un personnage prend une chose ou une personne pour une autre (la boutique pour la mairie, Fadinard pour un ténor).
- Le **comique de répétition** : « Mon gendre, tout est rompu ! », les souliers de Nonancourt, le myrte.
- Le **comique de situation** : un couple adultère caché chez un homme qui se marie.
- Le **comique de geste** : courses, entrées et sorties précipitées, portes, chutes.
- Le **rythme** : la pièce accélère sans cesse ; chaque acte change de lieu et ajoute des obstacles.
- Les **couplets** : des passages chantés qui commentent l'action, sur des airs que le public connaissait.

### Le rire selon Bergson
- **Henri Bergson** (Le Rire, **1900**) explique le rire par « du **mécanique plaqué sur du vivant** » : on rit quand un homme se comporte comme une machine.
- Nonancourt qui répète sa phrase, la noce qui suit sans réfléchir, Fadinard emporté par un engrenage d'accidents : ce sont des mécanismes au sens de Bergson.

### Ce que cachent les rires
- Derrière la farce, Labiche montre une **satire** : un mariage arrangé, un argent qui compte plus que l'amour, des bourgeois qui ont peur de tout.
- Le personnage d'Hélène peut être joué comme une poupée muette ou comme une jeune fille qui découvre, avec inquiétude, le monde où on la marie.

### À retenir pour le bac
- Connaître chaque personnage par un trait précis (le myrte, les souliers, la surdité, la jalousie).
- Quatre comiques : quiproquo, répétition, situation, geste ; plus les couplets.
- Bergson, « du mécanique plaqué sur du vivant » (1900).
- Un projet sur un personnage doit proposer un corps, une voix, un costume et un parcours dans la pièce.`,
      cartes: [
        { q: "Quel est le trait principal de Fadinard ?", r: "Toujours pressé, il improvise sans cesse pour se sortir de situations impossibles : il mène la course de la pièce." },
        { q: "Comment est Hélène ?", r: "Une jeune fille de la campagne, timide et naïve, élevée dans l'obéissance, qui ne comprend pas ce qui arrive." },
        { q: "Que porte Nonancourt partout avec lui ?", r: "Un pot de myrte, cadeau pour les mariés." },
        { q: "De quoi Nonancourt souffre-t-il toute la journée ?", r: "De souliers trop étroits." },
        { q: "Quelle phrase Nonancourt répète-t-il ?", r: "« Mon gendre, tout est rompu ! »" },
        { q: "Quelle est la particularité de l'oncle Vézinet ?", r: "Il est sourd : il ne comprend rien et sourit à tout." },
        { q: "Qui est Bobin ?", r: "Le cousin d'Hélène, amoureux d'elle et jaloux de Fadinard." },
        { q: "Quel rôle joue la noce ?", r: "Elle suit Fadinard partout sans comprendre, comme un chœur comique." },
        { q: "Qu'est-ce qu'un quiproquo ?", r: "Une méprise : un personnage prend une chose ou une personne pour une autre." },
        { q: "Qu'est-ce que le comique de répétition ?", r: "Le rire produit par un mot, un geste ou une situation qui revient, comme la phrase de Nonancourt." },
        { q: "Que dit Bergson du rire (1900) ?", r: "Qu'on rit du « mécanique plaqué sur du vivant » : un homme qui se comporte comme une machine." },
        { q: "À quoi servent les couplets du vaudeville ?", r: "Ce sont des passages chantés sur des airs connus, qui commentent l'action." },
        { q: "Quelle satire se cache derrière la farce ?", r: "Celle d'un mariage arrangé où l'argent compte plus que l'amour, et de bourgeois qui ont peur du scandale." },
        { q: "Que doit proposer un projet sur un personnage ?", r: "Un corps, une voix, un costume et un parcours à travers la pièce, justifiés par le texte." },
      ],
      quiz: [
        { q: "Quel objet Nonancourt transporte-t-il pendant toute la pièce ?", choix: ["Un parapluie rouge", "Un pot de myrte", "Une cage à oiseaux", "Un chapeau de soie"], bonne: 1, expl: "C'est son cadeau pour les jeunes mariés.", niv: 1 },
        { q: "« Mon gendre, tout est rompu ! » est un exemple de comique :", choix: ["de répétition", "de caractère tragique", "de mots savants", "de décor"], bonne: 0, expl: "Nonancourt la répète à chaque contrariété.", niv: 1 },
        { q: "La noce qui prend la boutique de la modiste pour la mairie illustre :", choix: ["une tirade", "un monologue", "une catharsis", "un quiproquo"], bonne: 3, expl: "Une méprise sur un lieu.", niv: 2 },
        { q: "Quelle est la particularité de l'oncle Vézinet ?", choix: ["Il boite de la jambe gauche", "Il ne parle qu'en vers", "Il est sourd", "Il chante faux chaque couplet"], bonne: 2, expl: "Il sourit à tout sans rien comprendre.", niv: 1 },
        { q: "Pour Bergson, on rit quand on voit :", choix: ["un héros mourir sur scène", "du mécanique plaqué sur du vivant", "des décors peints très réalistes et coûteux", "un personnage parler au public"], bonne: 1, expl: "Le vivant devient machine : c'est la thèse du Rire (1900).", niv: 2 },
        { q: "Quel rôle la noce joue-t-elle dans la pièce ?", choix: ["Celui d'un chœur comique qui suit sans comprendre", "Celui des juges qui condamnent Fadinard au dernier acte", "Celui d'un narrateur qui raconte l'histoire", "Celui des musiciens de l'orchestre"], bonne: 0, expl: "Elle se déplace en groupe d'un lieu à l'autre.", niv: 2 },
        { q: "Bobin, le cousin d'Hélène, est :", choix: ["l'amant d'Anaïs", "le domestique de la baronne", "le mari de Clara", "amoureux d'Hélène et jaloux"], bonne: 3, expl: "Il espère encore que le mariage sera rompu.", niv: 2 },
        { q: "Un couple adultère caché chez un homme qui se marie relève surtout du comique :", choix: ["de mots", "de situation", "de caractère", "de répétition"], bonne: 1, expl: "C'est la situation elle-même qui fait rire.", niv: 2 },
        { q: "Pourquoi peut-on jouer Hélène autrement qu'en poupée muette ?", choix: ["Parce qu'elle tue Fadinard à la fin", "Parce qu'elle chante chaque couplet de la noce", "Parce qu'elle découvre avec inquiétude le monde où on la marie", "Parce que Labiche lui donne le plus long rôle de la pièce, avec des monologues"], bonne: 2, expl: "Le texte laisse place à une lecture plus sensible du personnage.", niv: 3 },
        { q: "De quoi Nonancourt souffre-t-il tout au long de la journée ?", choix: ["D'une rage de dents", "De souliers trop étroits", "D'un rhume des foins", "De violents maux de tête"], bonne: 1, expl: "Un comique de geste et de répétition.", niv: 1 },
        { q: "Quelle satire se cache derrière la farce de Labiche ?", choix: ["Celle de l'Église et des prêtres", "Celle de l'armée de Napoléon", "Celle de la bourgeoisie et du mariage d'argent", "Celle des paysans pépiniéristes de Charentonneau"], bonne: 2, expl: "Respectabilité, argent et peur du scandale.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 5
    {
      chapitre: 'theatre-5',
      fiche: `## Un Chapeau de paille d'Italie sur scène : la mise en scène de Corsetti (2012)

La captation de référence est celle de la mise en scène de **Giorgio Barberio Corsetti** à la **Comédie-Française**, créée en **2012** salle Richelieu. Les extraits de l'écrit en seront tirés : il faut la regarder plusieurs fois et prendre des notes précises (minutage, lieux, effets).

### Le metteur en scène
- **Giorgio Barberio Corsetti** est un metteur en scène **italien**, venu du théâtre d'avant-garde romain des années 1970, qui travaille aussi pour l'**opéra**. Il aime les spectacles très **visuels**, où l'espace se transforme.
- Monter un vaudeville français à la Comédie-Française avec un regard italien : cela renouvelle une pièce très connue, souvent jouée de façon traditionnelle.

### La troupe
- La distribution réunit des comédiens de la troupe de la Comédie-Française, dont **Pierre Niney** en **Fadinard** et **Christian Hecq** en **Nonancourt**. Hecq est aussi l'un des créateurs du spectacle Gulliver, l'autre question du programme : un lien utile pour comparer.
- Le jeu est **physique** : courses, chutes, entrées précipitées, corps burlesques.

### Ce qu'il faut observer sur la captation
- **L'espace** : comment passe-t-on d'un lieu à l'autre en cinq actes ? Décor fixe ou mobile, changements à vue ou dans le noir ?
- **Le rythme** : accélérations, pauses, effets de groupe de la noce.
- **La musique et les couplets** : sont-ils chantés, par qui, avec quels instruments, dans quel style ? Le vaudeville est un théâtre **musical**.
- **Les costumes** : quelle époque est choisie (1851 ou une autre) ? Que disent-ils des classes sociales (la noce de province, la baronne) ?
- **Le jeu** : comment sont traités les traits comiques (les souliers, le myrte, la surdité) ? Naturaliste ou stylisé ?
- **Le cauchemar** : la mise en scène fait-elle de la course de Fadinard un rêve inquiétant, au-delà de la farce ?

### D'autres versions pour comparer
- **René Clair** en a tiré un film **muet** en **1928** : la course-poursuite y devient pur mouvement visuel.
- La pièce est l'une des plus jouées du répertoire comique ; la comparer à d'autres mises en scène aide à voir les choix propres à Corsetti.

### Comment écrire sur un extrait
- Situer l'extrait dans la pièce (acte, lieu, moment de la course).
- Décrire deux ou trois choix précis (espace, jeu, musique) avec le vocabulaire du plateau.
- Interpréter : quel effet sur le spectateur ? quel sens pour la pièce ?
- S'appuyer sur sa **pratique** : « en jouant cette scène en classe, nous avons constaté que… ».

### À retenir pour le bac
- Corsetti, metteur en scène italien, Comédie-Française, 2012.
- Pierre Niney (Fadinard), Christian Hecq (Nonancourt).
- Observer espace, rythme, musique, costumes, jeu : noter des exemples minutés.
- Le vaudeville est un théâtre musical et physique : ne pas l'oublier dans l'analyse.
- Ce qui n'a pas été vu soi-même sur la captation ne doit pas être affirmé.`,
      cartes: [
        { q: "Quelle est la mise en scène de référence du Chapeau de paille d'Italie ?", r: "Celle de Giorgio Barberio Corsetti, à la Comédie-Française, en 2012." },
        { q: "Qui est Giorgio Barberio Corsetti ?", r: "Un metteur en scène italien, venu de l'avant-garde romaine des années 1970, qui travaille aussi pour l'opéra." },
        { q: "Qui joue Fadinard dans cette mise en scène ?", r: "Pierre Niney." },
        { q: "Qui joue Nonancourt dans cette mise en scène ?", r: "Christian Hecq, aussi cocréateur du spectacle Gulliver." },
        { q: "Pourquoi le lien Hecq est-il utile pour l'épreuve ?", r: "Il relie les deux questions du programme : acteur dans le Chapeau, metteur en scène de Gulliver avec Valérie Lesort." },
        { q: "Quels éléments observer sur la captation ?", r: "L'espace et ses changements, le rythme, la musique et les couplets, les costumes, le jeu." },
        { q: "Pourquoi ne pas oublier la musique ?", r: "Le vaudeville est un théâtre musical : les couplets chantés font partie de l'œuvre." },
        { q: "Qui a fait un film du Chapeau de paille d'Italie, et quand ?", r: "René Clair, film muet de 1928." },
        { q: "Comment situer un extrait dans l'essai ?", r: "Donner l'acte, le lieu et le moment de la course de Fadinard." },
        { q: "Comment utiliser sa pratique dans l'essai ?", r: "Relier l'extrait à ce qu'on a vécu en jouant : « en jouant cette scène, nous avons constaté que… »." },
        { q: "Quelle règle d'honnêteté suivre sur la captation ?", r: "Ne décrire que ce que l'on a vu soi-même, avec des exemples précis et minutés." },
        { q: "Qu'apporte un regard italien sur un vaudeville français ?", r: "Il renouvelle une pièce très connue, souvent jouée de façon traditionnelle, par un théâtre plus visuel." },
        { q: "Qu'est-ce qu'un changement à vue ?", r: "Un changement de décor fait devant le public, sans rideau ni noir." },
      ],
      quiz: [
        { q: "En quelle année Corsetti met-il en scène le Chapeau à la Comédie-Française ?", choix: ["2012", "1987", "2001", "2006"], bonne: 0, expl: "C'est la captation de référence du programme.", niv: 1 },
        { q: "De quel pays vient Giorgio Barberio Corsetti ?", choix: ["De Belgique", "D'Espagne", "D'Italie", "De Suisse"], bonne: 2, expl: "Il vient de l'avant-garde romaine des années 1970.", niv: 1 },
        { q: "Quel comédien joue Fadinard dans cette mise en scène ?", choix: ["Christian Hecq", "Benjamin Lazar", "Philippe Caubère", "Pierre Niney"], bonne: 3, expl: "Christian Hecq y joue Nonancourt.", niv: 2 },
        { q: "Quel lien Christian Hecq crée-t-il entre les deux questions du programme ?", choix: ["Il a traduit Swift en français", "Il joue dans le Chapeau et met en scène Gulliver", "Il a écrit la musique de L'Autre Monde pour La Rêveuse", "Il a filmé les deux captations"], bonne: 1, expl: "Il cosigne Gulliver avec Valérie Lesort.", niv: 2 },
        { q: "Pourquoi l'analyse d'un extrait du Chapeau doit-elle parler de la musique ?", choix: ["Le vaudeville est un théâtre musical", "Le sujet de l'écrit l'exige à chaque session", "La pièce est un opéra de Verdi", "Les acteurs y chantent au lieu de parler"], bonne: 0, expl: "Les couplets chantés font partie de la forme du vaudeville.", niv: 2 },
        { q: "Quel cinéaste a adapté la pièce en film muet en 1928 ?", choix: ["Jean Renoir", "Marcel Carné", "Georges Méliès", "René Clair"], bonne: 3, expl: "La course-poursuite y devient pur mouvement.", niv: 2 },
        { q: "Un changement de décor fait devant le public, sans rideau, est :", choix: ["un noir", "un changement à vue", "une coulisse", "un entracte"], bonne: 1, expl: "Le spectateur voit la transformation de l'espace.", niv: 1 },
        { q: "Dans un essai sur un extrait, que faut-il faire en premier ?", choix: ["Raconter toute la pièce acte par acte", "Donner son avis sur les acteurs", "Situer l'extrait dans la pièce", "Résumer la vie de Labiche"], bonne: 2, expl: "Acte, lieu, moment de la course : puis on décrit et on interprète.", niv: 2 },
        { q: "Quelle phrase utilise bien sa pratique de plateau dans l'essai ?", choix: ["« J'aime beaucoup le théâtre et cette pièce. »", "« En jouant cette scène, nous avons senti que la noce ralentit tout. »", "« La pièce est très drôle et bien jouée. »", "« Labiche a écrit cent soixante-dix pièces. »"], bonne: 1, expl: "Le jury attend des liens entre l'analyse et l'expérience d'acteur.", niv: 3 },
        { q: "Que faire d'un détail de la captation dont on n'est pas sûr ?", choix: ["Ne pas l'affirmer", "L'inventer pour enrichir la copie", "Le présenter comme un fait certain", "L'attribuer à Labiche"], bonne: 0, expl: "On ne décrit que ce que l'on a vu soi-même.", niv: 3 },
        { q: "Quel aspect de la mise en scène permet de transformer la course de Fadinard en cauchemar ?", choix: ["Le prix des places", "La longueur du texte", "La durée de l'entracte entre deux actes", "L'espace, la lumière et le rythme"], bonne: 3, expl: "Ce sont les moyens du plateau qui font passer de la farce au rêve inquiétant.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 6
    {
      chapitre: 'theatre-6',
      fiche: `## Voyages romanesques : adapter un roman au théâtre

Deuxième question du programme limitatif : **Voyages romanesques**. Deux spectacles adaptent deux romans de voyages imaginaires : **L'Autre Monde ou Les États et empires de la lune** de **Benjamin Lazar** et La Rêveuse (d'après **Cyrano de Bergerac**) et **Gulliver** de **Valérie Lesort** et **Christian Hecq** (d'après **Jonathan Swift**).

### Raconter ou montrer ?
- Depuis **Aristote**, on oppose deux manières d'imiter : le **récit**, où un narrateur évoque des personnages absents, et le **drame**, où des acteurs présents jouent l'action sous les yeux du public.
- Pourtant, le théâtre contemporain puise beaucoup dans les romans. **Antoine Vitez** disait qu'on peut « **faire théâtre de tout** » : il a monté **Catherine** (1975), d'après Les Cloches de Bâle d'Aragon, où les acteurs disent le roman autour d'une table.

### Les choix de l'adaptation
- **Garder ou couper** : un roman est trop long pour la scène ; il faut choisir des épisodes et dire selon quel principe.
- **Réorganiser** : changer l'ordre, condenser, faire des **ellipses** (sauter un moment), inventer des scènes nouvelles.
- **Réécrire ou non** : garder les phrases de l'auteur, les transformer en dialogues, ou écrire un texte neuf.
- **Le narrateur** : on peut le garder sur scène (un acteur qui raconte et joue à la fois), le supprimer, ou le partager entre plusieurs acteurs. L'**adresse au public** permet de garder le récit.
- **Le temps** : que garder de la langue ancienne (XVIIe ou XVIIIe siècle) ? Faut-il moderniser, ou jouer sur l'étrangeté ?

### Montrer l'imaginaire
- Les deux romans décrivent des mondes **merveilleux** (la Lune, Lilliput) : comment les faire voir sur scène ?
- Deux voies : **montrer** (décors, machines, marionnettes, costumes) ou **évoquer** (la parole, la musique, la lumière, le corps de l'acteur), en laissant le spectateur imaginer.
- Le danger est d'**illustrer** le texte : refermer l'imagination du public sur des images toutes faites. Le défi est d'inventer une **forme nouvelle** qui fasse œuvre.

### Deux spectacles, deux réponses
- **Lazar** choisit une forme **sobre** et **érudite** : un acteur qui raconte, deux musiciens, la lumière des bougies, la langue du XVIIe siècle. C'est l'**évocation**.
- **Lesort et Hecq** choisissent une forme **visuelle** et **ludique** : des marionnettes hybrides, des changements d'échelle, un spectacle pour les enfants comme pour les adultes. C'est la **monstration**.
- Les deux sont des **créations collectives**, avec des musiciens, des plasticiens, des scénographes.

### D'autres exemples d'adaptations
- **Joël Pommerat**, Pinocchio (2008), d'après le conte de Collodi : un narrateur sur scène.
- **Julien Gosselin**, Les Particules élémentaires (2013), d'après Houellebecq : narration au micro et vidéo.

### À retenir pour le bac
- Récit contre drame (Aristote) ; « faire théâtre de tout » (Vitez).
- Les gestes de l'adaptation : couper, réorganiser, réécrire, garder ou non le narrateur.
- Montrer ou évoquer : deux voies, illustrées par Lesort-Hecq et Lazar.
- On peut proposer d'adapter un passage que les spectacles ont laissé de côté.`,
      cartes: [
        { q: "Quelles sont les deux œuvres de la question « Voyages romanesques » ?", r: "L'Autre Monde de Benjamin Lazar et La Rêveuse (d'après Cyrano de Bergerac) et Gulliver de Valérie Lesort et Christian Hecq (d'après Swift)." },
        { q: "Quelle opposition Aristote fait-il entre récit et drame ?", r: "Le récit passe par un narrateur qui évoque des absents ; le drame montre l'action jouée par des acteurs présents." },
        { q: "Que veut dire « faire théâtre de tout » ?", r: "La formule de Vitez : tout texte, même un roman, peut devenir du théâtre." },
        { q: "Quel roman Vitez adapte-t-il dans Catherine (1975) ?", r: "Les Cloches de Bâle d'Aragon : les acteurs disent le roman autour d'une table." },
        { q: "Qu'est-ce qu'une ellipse ?", r: "Un saut dans le temps : on ne montre pas un moment de l'histoire." },
        { q: "Que peut-on faire du narrateur d'un roman sur scène ?", r: "Le garder (un acteur raconte et joue), le supprimer, ou le partager entre plusieurs acteurs." },
        { q: "Montrer ou évoquer : quelle différence ?", r: "Montrer, c'est faire voir par décors, machines, marionnettes ; évoquer, c'est faire imaginer par la parole, la musique, la lumière." },
        { q: "Quel est le danger de l'illustration ?", r: "Refermer l'imagination du public sur des images toutes faites, au lieu d'inventer une forme nouvelle." },
        { q: "Quelle voie choisit Benjamin Lazar ?", r: "L'évocation : un acteur qui raconte, deux musiciens, les bougies, la langue du XVIIe siècle." },
        { q: "Quelle voie choisissent Lesort et Hecq ?", r: "La monstration : marionnettes hybrides, changements d'échelle, un spectacle visuel et ludique." },
        { q: "Pourquoi parle-t-on de créations collectives ?", r: "Les deux spectacles associent metteurs en scène, musiciens, plasticiens et scénographes." },
        { q: "Citez une autre adaptation de roman au théâtre.", r: "Les Particules élémentaires de Julien Gosselin (2013), d'après Houellebecq." },
        { q: "Que peut-on proposer à l'écrit pour cette question ?", r: "Réinventer une page déjà mise en scène, ou adapter un passage laissé de côté par les spectacles." },
        { q: "Quelle question pose la langue ancienne des romans ?", r: "Faut-il la moderniser ou jouer sur son étrangeté, qui fait aussi sa valeur ?" },
      ],
      quiz: [
        { q: "Quel roman est à l'origine du spectacle de Benjamin Lazar ?", choix: ["Les Voyages de Gulliver", "Le Voyage au centre de la Terre de Jules Verne", "De la Terre à la Lune", "L'Autre Monde de Cyrano de Bergerac"], bonne: 3, expl: "Le spectacle s'intitule L'Autre Monde ou Les États et empires de la lune.", niv: 1 },
        { q: "Pour Aristote, le récit se distingue du drame parce que :", choix: ["le récit est écrit en prose plutôt qu'en vers", "un narrateur y évoque des absents", "on n'y raconte que des faits réels et vérifiés", "il est réservé aux enfants"], bonne: 1, expl: "Au théâtre, les acteurs sont présents sous nos yeux.", niv: 2 },
        { q: "« Faire théâtre de tout » est une formule de :", choix: ["Antoine Vitez", "Jean Vilar", "Bertolt Brecht", "Ariane Mnouchkine"], bonne: 0, expl: "Il a monté des romans et des poèmes.", niv: 1 },
        { q: "Sauter un moment de l'histoire dans une adaptation, c'est faire :", choix: ["un aparté", "une tirade", "une ellipse", "une didascalie"], bonne: 2, expl: "L'ellipse condense le récit.", niv: 1 },
        { q: "Quel est le danger d'une adaptation qui « illustre » le roman ?", choix: ["Elle coûte trop cher à produire", "Elle dure plus longtemps que le livre", "Elle oblige à supprimer toute la musique", "Elle enferme l'imagination dans des images"], bonne: 3, expl: "Le défi est d'inventer une forme nouvelle.", niv: 3 },
        { q: "La forme choisie par Benjamin Lazar relève plutôt :", choix: ["du spectacle de marionnettes géantes", "de l'évocation par la parole et la musique", "de la projection vidéo en direct", "de la comédie musicale à grand orchestre symphonique"], bonne: 1, expl: "Un acteur, deux musiciens, des bougies.", niv: 2 },
        { q: "La forme choisie par Lesort et Hecq relève plutôt :", choix: ["de la lecture à la table", "du théâtre radiophonique", "du seul-en-scène sans décor", "de la monstration visuelle"], bonne: 3, expl: "Marionnettes hybrides et jeux d'échelle font voir Lilliput.", niv: 2 },
        { q: "Dans Catherine (1975), Vitez adapte :", choix: ["Les Cloches de Bâle d'Aragon", "Madame Bovary de Flaubert", "Germinal de Zola", "Le Rouge et le Noir de Stendhal"], bonne: 0, expl: "Les acteurs disent le roman autour d'une table.", niv: 3 },
        { q: "Garder le narrateur sur scène, c'est par exemple :", choix: ["supprimer tout le texte du roman", "remplacer les acteurs par des écrans et des voix enregistrées", "faire raconter et jouer un même acteur", "jouer la pièce devant une salle vide"], bonne: 2, expl: "L'adresse au public garde la voix du récit.", niv: 2 },
        { q: "Que peut-on proposer à l'écrit sur cette question ?", choix: ["Recopier fidèlement la mise en scène d'un des spectacles", "Résumer les deux romans", "Raconter la vie de Swift", "Adapter un passage laissé de côté par les spectacles"], bonne: 3, expl: "Éduscol le suggère : réinventer ou adapter un passage absent.", niv: 3 },
        { q: "Quel metteur en scène a adapté Les Particules élémentaires en 2013 ?", choix: ["Joël Pommerat", "Julien Gosselin", "Peter Brook", "Benjamin Lazar"], bonne: 1, expl: "D'après Houellebecq, avec micro et vidéo.", niv: 2 },
      ],
    },
    // ---------------------------------------------------------------- 7
    {
      chapitre: 'theatre-7',
      fiche: `## Cyrano de Bergerac, L'Autre Monde : le roman du voyage dans la Lune

Édition conseillée par Éduscol (celle qu'utilise Benjamin Lazar) : Voyage dans la lune. L'Autre Monde ou les États et empires de la Lune, édition de Maurice Laugaa, GF-Flammarion.

### L'auteur
- **Savinien de Cyrano de Bergerac** (**1619-1655**), soldat blessé au siège d'Arras (1640), puis écrivain. C'est un **libertin** : un esprit libre qui doute des dogmes religieux et défend la raison et la science.
- Edmond Rostand en a fait un héros légendaire dans sa pièce **Cyrano de Bergerac** (**1897**), où le personnage raconte justement plusieurs façons d'aller dans la Lune.
- Le roman paraît **après sa mort**, en **1657**, publié par son ami **Le Bret**, sous le titre d'Histoire comique, avec des passages **censurés**. Une suite, Les États et empires du Soleil, paraît en 1662.

### Le voyage
- Le narrateur, après une soirée où ses amis se moquent de l'idée que la Lune soit un monde, décide d'y aller.
- Première tentative : il s'attache des **fioles de rosée** que le soleil attire. Il s'élève... et retombe en **Nouvelle-France** (au Canada), où il discute avec le vice-roi du **mouvement de la Terre** autour du Soleil.
- Il construit une machine ; des soldats y attachent des **fusées** pour une fête. Il s'envole, et comme il s'est frotté de **moelle de bœuf** pour soigner ses bleus, la Lune, qui « suce » la moelle, l'attire jusqu'à elle.
- Il tombe dans le **Paradis terrestre**, sur l'arbre de vie, rencontre le prophète **Élie**, puis en est chassé pour son insolence.

### Le monde de la Lune
- Les habitants sont géants et marchent **à quatre pattes**. Ils prennent le narrateur pour un **animal** et le montrent comme une bête de foire.
- Il rencontre le **démon de Socrate**, un esprit venu du Soleil, qui le guide, et un autre voyageur, l'Espagnol **Domingo Gonsales**.
- Le monde lunaire **renverse** nos habitudes : les nobles parlent en **musique**, le peuple par **gestes** ; on se nourrit d'**odeurs** ; la monnaie, ce sont des **vers** de poésie ; les **livres** se lisent avec les oreilles ; des **villes** se déplacent sur des roues.
- Un **procès** décide s'il est un homme ; on l'oblige à dire que la Lune est un monde et la Terre une lune.

### Un roman philosophique et comique
- C'est une **satire** : en décrivant un autre monde, Cyrano critique le nôtre (religion, préjugés, orgueil humain).
- Il défend la science nouvelle de **Copernic** et de **Galilée** : la Terre tourne autour du Soleil.
- C'est aussi l'un des ancêtres de la **science-fiction**, avec une **imagination débridée**.

### À retenir pour le bac
- Cyrano (1619-1655), libertin ; roman posthume (1657), en partie censuré.
- Les moyens du voyage : fioles de rosée, fusées, moelle de bœuf.
- La Lune renversée : quatre pattes, langue musicale, odeurs, vers comme monnaie, livres à écouter.
- Satire, science (Copernic) et merveilleux : trois fils pour un projet de plateau.`,
      cartes: [
        { q: "Quelles sont les dates de Cyrano de Bergerac ?", r: "1619-1655." },
        { q: "Qu'est-ce qu'un libertin au XVIIe siècle ?", r: "Un esprit libre qui doute des dogmes religieux et défend la raison et la science." },
        { q: "Quand L'Autre Monde paraît-il ?", r: "Après la mort de Cyrano, en 1657, publié par son ami Le Bret, avec des passages censurés." },
        { q: "Quelle pièce de Rostand a rendu Cyrano célèbre ?", r: "Cyrano de Bergerac (1897), où le héros décrit plusieurs façons d'aller dans la Lune." },
        { q: "Quelle est la première tentative de voyage ?", r: "Des fioles de rosée attachées au corps, que le soleil attire ; il retombe en Nouvelle-France." },
        { q: "De quoi parle-t-il avec le vice-roi de Nouvelle-France ?", r: "Du mouvement de la Terre autour du Soleil, selon Copernic." },
        { q: "Comment atteint-il enfin la Lune ?", r: "Sa machine est propulsée par des fusées ; la Lune, qui suce la moelle de bœuf dont il s'est frotté, l'attire." },
        { q: "Où tombe-t-il sur la Lune ?", r: "Dans le Paradis terrestre, sur l'arbre de vie, où il rencontre le prophète Élie." },
        { q: "Comment marchent les habitants de la Lune ?", r: "À quatre pattes ; ils prennent le narrateur pour un animal." },
        { q: "Qui est le démon de Socrate ?", r: "Un esprit venu du Soleil, qui guide le narrateur sur la Lune." },
        { q: "Comment parlent les habitants de la Lune ?", r: "Les nobles en musique, le peuple par gestes." },
        { q: "Quelle est la monnaie sur la Lune ?", r: "Des vers de poésie." },
        { q: "Comment lit-on les livres sur la Lune ?", r: "Avec les oreilles : ce sont des livres qui parlent." },
        { q: "Pourquoi le roman est-il une satire ?", r: "En décrivant un monde renversé, Cyrano critique le nôtre : religion, préjugés, orgueil humain." },
        { q: "Quelle science le roman défend-il ?", r: "Celle de Copernic et de Galilée : la Terre tourne autour du Soleil." },
      ],
      quiz: [
        { q: "En quelle année meurt Cyrano de Bergerac ?", choix: ["1610", "1636", "1655", "1647"], bonne: 2, expl: "Né en 1619, il meurt en 1655 ; L'Autre Monde paraît après sa mort.", niv: 1 },
        { q: "Au XVIIe siècle, un « libertin » est surtout :", choix: ["un séducteur sans morale", "un soldat déserteur de l'armée du roi", "un poète de cour", "un esprit libre qui doute des dogmes"], bonne: 3, expl: "Cyrano défend la raison contre les préjugés religieux.", niv: 2 },
        { q: "Pourquoi le roman a-t-il été en partie censuré à sa publication ?", choix: ["Il contenait des idées jugées dangereuses", "Il était écrit en latin", "Il se moquait du roi d'Angleterre", "Il était beaucoup trop long pour l'éditeur parisien"], bonne: 0, expl: "Le Bret a retiré des passages trop audacieux.", niv: 3 },
        { q: "Lors de sa première tentative, le narrateur s'élève grâce à :", choix: ["un ballon d'air chaud", "des fioles de rosée", "des ailes d'oiseaux", "un canon"], bonne: 1, expl: "Le soleil attire la rosée... il retombe en Nouvelle-France.", niv: 1 },
        { q: "Pourquoi la Lune attire-t-elle le narrateur jusqu'à elle ?", choix: ["Elle attire les fusées de la fête", "Il prie le prophète Élie", "Un aimant puissant est placé dans sa machine volante", "Elle suce la moelle de bœuf dont il s'est frotté"], bonne: 3, expl: "C'est une explication comique et pseudo-scientifique.", niv: 2 },
        { q: "Comment les habitants de la Lune se déplacent-ils ?", choix: ["Ils volent", "Ils glissent sur des roues", "Ils marchent à quatre pattes", "Ils sautent comme des kangourous"], bonne: 2, expl: "Ils prennent le narrateur, debout, pour un animal.", niv: 1 },
        { q: "Sur la Lune, la monnaie, ce sont :", choix: ["des vers de poésie", "des pierres de lune", "des graines de myrte", "des pièces d'argent"], bonne: 0, expl: "Un monde où la poésie a de la valeur.", niv: 2 },
        { q: "Comment parlent les nobles de la Lune ?", choix: ["Par gestes", "Avec des lettres écrites", "Par signaux de fumée", "En musique"], bonne: 3, expl: "Le peuple, lui, parle par gestes : un défi pour le plateau.", niv: 2 },
        { q: "Quelle idée scientifique Cyrano défend-il ?", choix: ["La Terre est plate et immobile", "La Terre tourne autour du Soleil", "Le Soleil tourne autour de la Lune", "Les étoiles sont des lampes"], bonne: 1, expl: "C'est la thèse de Copernic, défendue aussi par Galilée.", niv: 2 },
        { q: "Pourquoi peut-on dire que L'Autre Monde est une satire ?", choix: ["Il raconte la vie de Louis XIV", "Il est écrit sous forme de pièce", "Il critique notre monde en décrivant un monde renversé", "Il se moque des habitants de la ville de Bergerac"], bonne: 2, expl: "Religion, préjugés, orgueil humain sont visés.", niv: 3 },
        { q: "Qui guide le narrateur sur la Lune ?", choix: ["Le démon de Socrate", "Le vice-roi de Nouvelle-France", "Le prophète Élie", "Domingo Gonsales"], bonne: 0, expl: "Un esprit venu du Soleil.", niv: 2 },
      ],
    },
    // ---------------------------------------------------------------- 8
    {
      chapitre: 'theatre-8',
      fiche: `## L'Autre Monde de Benjamin Lazar et La Rêveuse : un spectacle baroque

Le programme indique : texte de Cyrano de Bergerac, **adapté et mis en scène par Benjamin Lazar**, conception musicale par l'**ensemble La Rêveuse**, captation de **2014** (le programme mentionne aussi 2008).

### Benjamin Lazar et le théâtre baroque
- **Benjamin Lazar** est un comédien et metteur en scène français, formé auprès d'**Eugène Green**, qui défend un théâtre **baroque** : retrouver la façon de jouer du XVIIe siècle.
- Il est connu pour **Le Bourgeois gentilhomme** de Molière et Lully (**2004**), avec l'ensemble **Le Poème harmonique** : éclairage aux **bougies**, **prononciation restituée**, **gestuelle baroque**.
- La **prononciation restituée** fait entendre le français du XVIIe siècle : on prononce des consonnes finales, « roi » se dit à peu près « roué ». La langue paraît **étrange** et musicale.
- La **gestuelle baroque** est un code de gestes et de postures (mains, regard, poids du corps) qui accompagne et souligne la parole.

### Le dispositif
- Sur scène : **Benjamin Lazar** seul comme acteur, qui raconte à la première personne, et deux musiciens de **La Rêveuse** : **Florence Bolton** (viole de gambe) et **Benjamin Perrot** (théorbe, guitare et luth baroques).
- La **scénographie** et les **costumes** sont d'**Adeline Caron** ; **Louise Moaty** apporte un regard sur la mise en scène.
- La **lumière des bougies** crée un espace intime, aux contours flous, où le noir laisse place à l'imagination.

### Une adaptation par l'évocation
- Le spectacle **garde le récit** : l'acteur est le narrateur, il dit le texte de Cyrano, il ne joue pas une pièce dialoguée.
- Le merveilleux naît de la **parole**, de la **musique** et du **corps** plutôt que de machines : le spectateur voyage par l'**imagination**.
- La musique (pièces du XVIIe siècle) **accompagne**, **ponctue** et parfois **imite** le voyage : un moyen de faire entendre la langue musicale des habitants de la Lune.
- L'adaptation **choisit** des épisodes du roman : il faut savoir lesquels, et ce qui est laissé de côté (un passage absent peut devenir un projet de plateau).

### Fidélité et réinvention
- Le spectacle est une recherche **érudite** (langue, gestes, musique d'époque), mais il crée aussi une **émotion** et un **humour** d'aujourd'hui.
- L'étrangeté de la langue ancienne rejoint l'étrangeté du monde lunaire : on se sent soi-même sur une autre planète.

### Ce qu'il faut observer sur la captation
- Le **corps** de l'acteur et ses gestes codés, son **regard** vers le public.
- La **voix** et la prononciation ; les **silences**.
- Le rôle des **musiciens** : présents à vue, ils participent-ils au jeu ?
- La **lumière** : nombre et place des bougies, zones d'ombre.

### À retenir pour le bac
- Lazar, théâtre baroque : bougies, prononciation restituée, gestuelle codée.
- Un acteur-narrateur et deux musiciens de La Rêveuse (viole de gambe, théorbe).
- L'évocation contre l'illustration : le voyage passe par la parole, la musique et le corps.
- Noter ce qui est gardé et ce qui est coupé du roman.`,
      cartes: [
        { q: "Qui adapte et met en scène L'Autre Monde ?", r: "Benjamin Lazar, avec l'ensemble La Rêveuse pour la musique." },
        { q: "Auprès de qui Benjamin Lazar s'est-il formé ?", r: "Auprès d'Eugène Green, défenseur du théâtre baroque." },
        { q: "Pour quel spectacle de 2004 Lazar est-il connu ?", r: "Le Bourgeois gentilhomme de Molière et Lully, avec Le Poème harmonique : bougies, prononciation restituée, gestuelle baroque." },
        { q: "Qu'est-ce que la prononciation restituée ?", r: "Le français prononcé comme au XVIIe siècle : consonnes finales, « roi » dit à peu près « roué »." },
        { q: "Qu'est-ce que la gestuelle baroque ?", r: "Un code de gestes et de postures (mains, regard, poids du corps) qui accompagne la parole." },
        { q: "Qui est sur scène dans L'Autre Monde ?", r: "Benjamin Lazar, seul acteur, et deux musiciens de La Rêveuse." },
        { q: "Quels instruments jouent les musiciens ?", r: "La viole de gambe (Florence Bolton) et le théorbe, la guitare et le luth baroques (Benjamin Perrot)." },
        { q: "Qui signe la scénographie et les costumes ?", r: "Adeline Caron." },
        { q: "Quel effet produit la lumière des bougies ?", r: "Un espace intime aux contours flous, où le noir laisse place à l'imagination." },
        { q: "Le spectacle garde-t-il le récit du roman ?", r: "Oui : l'acteur est le narrateur, il dit le texte à la première personne." },
        { q: "D'où naît le merveilleux dans ce spectacle ?", r: "De la parole, de la musique et du corps, plutôt que de machines ou de décors." },
        { q: "À quoi sert la musique ?", r: "Elle accompagne, ponctue et imite le voyage, et fait entendre la langue musicale des Lunaires." },
        { q: "Quel lien entre langue ancienne et monde lunaire ?", r: "L'étrangeté de la prononciation rejoint celle de la Lune : le spectateur se sent lui-même dépaysé." },
        { q: "Que faut-il noter sur l'adaptation de Lazar ?", r: "Les épisodes gardés et ceux qui sont coupés : un passage absent peut devenir un projet de plateau." },
      ],
      quiz: [
        { q: "Quel ensemble musical accompagne L'Autre Monde de Benjamin Lazar ?", choix: ["Le Poème harmonique", "La Rêveuse", "Les Arts florissants", "Le Concert spirituel"], bonne: 1, expl: "Le Poème harmonique accompagnait son Bourgeois gentilhomme de 2004.", niv: 1 },
        { q: "Quel éclairage est typique des spectacles baroques de Lazar ?", choix: ["Des néons blancs", "Un mur d'écrans vidéo lumineux", "Des projecteurs de stade", "La lumière des bougies"], bonne: 3, expl: "Comme au XVIIe siècle, la bougie crée un espace intime.", niv: 1 },
        { q: "La prononciation restituée consiste à :", choix: ["parler très vite comme au cinéma", "traduire le texte en anglais pour une tournée", "prononcer le français comme au XVIIe siècle", "supprimer les rimes du texte en vers"], bonne: 2, expl: "« Roi » se dit à peu près « roué ».", niv: 2 },
        { q: "Combien d'acteurs jouent dans L'Autre Monde de Lazar ?", choix: ["Un seul, accompagné de deux musiciens", "Deux, qui se partagent le narrateur", "Une troupe de huit comédiens", "Des marionnettes remplacent les acteurs"], bonne: 0, expl: "Lazar est seul, avec Florence Bolton et Benjamin Perrot.", niv: 1 },
        { q: "Quel instrument joue Florence Bolton dans le spectacle ?", choix: ["Le clavecin", "La trompette", "Le violon moderne", "La viole de gambe"], bonne: 3, expl: "Benjamin Perrot joue théorbe, guitare et luth baroques.", niv: 2 },
        { q: "Comment l'adaptation de Lazar fait-elle naître le merveilleux ?", choix: ["Par des machines volantes", "Par la parole, la musique et le corps", "Par des projections en trois dimensions", "Par un décor de Lune géant"], bonne: 1, expl: "C'est une adaptation par l'évocation.", niv: 2 },
        { q: "Que garde Lazar de la forme du roman ?", choix: ["Le récit à la première personne", "Les dialogues d'une pièce en cinq actes", "Les chansons d'un vaudeville", "Le chœur de la tragédie grecque"], bonne: 0, expl: "L'acteur est le narrateur.", niv: 2 },
        { q: "La gestuelle baroque est :", choix: ["une danse improvisée", "un mime sans paroles", "un code de gestes qui accompagne la parole", "une gymnastique d'échauffement avant la représentation"], bonne: 2, expl: "Mains, regard, poids du corps sont codifiés.", niv: 2 },
        { q: "Pourquoi l'étrangeté de la langue ancienne sert-elle le propos du spectacle ?", choix: ["Elle rend le texte plus court", "Elle évite de payer des droits d'auteur", "Elle permet de jouer plus vite", "Elle dépayse comme le monde lunaire"], bonne: 3, expl: "Le spectateur se sent lui-même sur une autre planète.", niv: 3 },
        { q: "Qui signe la scénographie et les costumes de L'Autre Monde ?", choix: ["Valérie Lesort", "Adeline Caron", "Carole Allemand", "Louise Moaty"], bonne: 1, expl: "Louise Moaty apporte un regard sur la mise en scène.", niv: 3 },
        { q: "Quel passage pourrait devenir un projet de plateau sur L'Autre Monde ?", choix: ["Un épisode du roman laissé de côté par le spectacle", "La biographie complète de Lazar", "Le résumé de Gulliver", "La liste détaillée des instruments baroques utilisés"], bonne: 0, expl: "Éduscol invite à adapter aussi les passages absents.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 9
    {
      chapitre: 'theatre-9',
      fiche: `## Gulliver : le roman de Swift et le spectacle de Valérie Lesort et Christian Hecq

Le programme indique : **libre adaptation** du roman de **Jonathan Swift** par **Valérie Lesort**, mise en scène **Christian Hecq** et **Valérie Lesort**, captation de **2023** (création en 2022). Édition conseillée : Les Voyages de Gulliver, traduction de **Jacques Pons**, Folio classique.

### Le roman de Swift
- **Jonathan Swift** (1667-1745), écrivain irlandais, doyen de la cathédrale Saint-Patrick de Dublin, est un maître de la **satire**.
- Les Voyages de Gulliver paraissent en **1726**. Le médecin de marine **Lemuel Gulliver** raconte quatre voyages.
- À **Lilliput**, où les habitants mesurent environ quinze centimètres.
- À **Brobdingnag**, chez des géants, où c'est lui qui est minuscule.
- À **Laputa**, une île volante peuplée de savants absurdes.
- Chez les **Houyhnhnms**, des chevaux sages qui dominent les **Yahous**, des humains brutaux.
- À Lilliput, Gulliver se réveille **attaché au sol** par des centaines de fils. On y obtient les postes en **dansant sur une corde** ; on fait la guerre à **Blefuscu** pour savoir par quel bout casser les œufs (**Gros-Boutiens** contre **Petits-Boutiens**). Gulliver éteint un incendie du palais en urinant, et tombe en disgrâce.
- Le changement d'**échelle** est une arme satirique : vus de très haut, les querelles des puissants deviennent ridicules.

### Les créateurs du spectacle
- **Valérie Lesort**, plasticienne, comédienne et metteuse en scène, et **Christian Hecq**, sociétaire de la Comédie-Française, forment un duo connu pour son théâtre **visuel** et ses **marionnettes**. Ils ont créé ensemble Vingt mille lieues sous les mers à la Comédie-Française (2015) et La Mouche (2020).
- Le spectacle est une **création collective** : les **marionnettes hybrides** sont conçues par **Carole Allemand** (avec Fabienne Touzi dit Terzi), la scénographie par **Audrey Vuong**, les costumes par **Vanessa Sannino**, les lumières par Pascal Laajili.

### Une adaptation par la monstration
- Le spectacle, présenté par Éduscol, fait vivre le **royaume de Lilliput** par des **marionnettes hybrides** : mi-acteurs, mi-poupées. Les comédiens prêtent leur tête, leur voix ou leurs mains à des corps miniatures.
- Le défi central est l'**échelle** : comment montrer sur un même plateau un géant et des êtres de quinze centimètres ?
- C'est une **libre adaptation** : Lesort réécrit, choisit, invente ; le texte n'est pas celui de Swift mot pour mot.
- Le spectacle s'adresse aux **enfants comme aux adultes** : rire, effets visuels, mais aussi satire politique.

### Ce qu'il faut observer sur la captation
- Les **marionnettes** : qui manipule, ce qui est montré et ce qui est caché.
- Le traitement de l'**échelle** : objets géants ou minuscules, place de Gulliver sur le plateau.
- Le **jeu** des acteurs, souvent burlesque, et le **rythme**.
- La **musique**, les **bruitages** et la **lumière** au service des illusions.

### Comparer avec Lazar
- Lazar **évoque** par la parole ; Lesort et Hecq **montrent** par l'image. Mais Lazar crée aussi des images (bougies, corps), et Lesort-Hecq gardent une part de récit.
- Les deux spectacles cherchent un **équilibre** entre fidélité et réinvention.

### À retenir pour le bac
- Swift, irlandais, 1726 ; quatre voyages ; Lilliput, Blefuscu, la guerre des œufs.
- L'échelle comme arme satirique et comme défi pour le plateau.
- Lesort et Hecq : marionnettes hybrides (Carole Allemand), théâtre visuel, libre adaptation.
- Monstration (Gulliver) contre évocation (Lazar) : à nuancer dans l'essai.`,
      cartes: [
        { q: "Qui est Jonathan Swift ?", r: "Un écrivain irlandais (1667-1745), doyen de Saint-Patrick à Dublin, maître de la satire." },
        { q: "Quand paraissent Les Voyages de Gulliver ?", r: "En 1726." },
        { q: "Quels sont les quatre voyages de Gulliver ?", r: "Lilliput (êtres minuscules), Brobdingnag (géants), Laputa (île volante de savants), les Houyhnhnms (chevaux sages)." },
        { q: "Quelle taille ont les Lilliputiens ?", r: "Environ quinze centimètres." },
        { q: "Comment Gulliver se réveille-t-il à Lilliput ?", r: "Attaché au sol par des centaines de fils." },
        { q: "Qu'est-ce que la guerre des Gros-Boutiens et des Petits-Boutiens ?", r: "Une querelle entre Lilliput et Blefuscu sur le bout par lequel casser les œufs : une satire des guerres absurdes." },
        { q: "Comment obtient-on les postes à Lilliput ?", r: "En dansant sur une corde : une satire des courtisans." },
        { q: "Pourquoi Gulliver tombe-t-il en disgrâce à Lilliput ?", r: "Il éteint un incendie du palais en urinant." },
        { q: "Pourquoi le changement d'échelle est-il satirique ?", r: "Vus de très haut, les querelles et l'orgueil des puissants deviennent ridicules." },
        { q: "Qui a créé le spectacle Gulliver ?", r: "Valérie Lesort (adaptation et mise en scène) et Christian Hecq (mise en scène)." },
        { q: "Qu'ont créé ensemble Lesort et Hecq avant Gulliver ?", r: "Vingt mille lieues sous les mers à la Comédie-Française (2015) et La Mouche (2020)." },
        { q: "Qu'est-ce qu'une marionnette hybride ?", r: "Une figure mi-acteur, mi-poupée : le comédien prête sa tête, sa voix ou ses mains à un corps miniature." },
        { q: "Qui conçoit les marionnettes du spectacle ?", r: "Carole Allemand, avec Fabienne Touzi dit Terzi." },
        { q: "Pourquoi parle-t-on de libre adaptation ?", r: "Valérie Lesort réécrit, choisit et invente : ce n'est pas le texte de Swift mot pour mot." },
        { q: "Quelle traduction utiliser pour l'épreuve ?", r: "Celle de Jacques Pons, Folio classique." },
      ],
      quiz: [
        { q: "De quel pays vient Jonathan Swift ?", choix: ["D'Écosse", "D'Angleterre", "Du pays de Galles", "D'Irlande"], bonne: 3, expl: "Il est doyen de Saint-Patrick, à Dublin.", niv: 1 },
        { q: "Les Voyages de Gulliver paraissent en :", choix: ["1726", "1657", "1689", "1702"], bonne: 0, expl: "Près de soixante-dix ans après L'Autre Monde de Cyrano.", niv: 1 },
        { q: "À Lilliput, les habitants mesurent environ :", choix: ["deux mètres", "un mètre", "quinze centimètres", "trois centimètres"], bonne: 2, expl: "Gulliver est un géant pour eux.", niv: 1 },
        { q: "Que satirise la guerre des Gros-Boutiens et des Petits-Boutiens ?", choix: ["Les recettes de cuisine anglaises", "Les guerres et querelles absurdes", "Le commerce des œufs avec la France", "Les jeux d'enfants de Dublin"], bonne: 1, expl: "On se bat pour savoir par quel bout casser un œuf.", niv: 2 },
        { q: "Pourquoi le changement d'échelle est-il une arme satirique ?", choix: ["Il permet des décors plus petits", "Il rend le roman plus court", "Il permet d'amuser les enfants qui lisent le livre", "Il rend ridicules les querelles des puissants"], bonne: 3, expl: "Vus de très haut, les grands deviennent minuscules.", niv: 3 },
        { q: "Qu'est-ce qu'une marionnette hybride ?", choix: ["Une figure mi-acteur, mi-poupée", "Une poupée animée par ordinateur", "Un masque de commedia dell'arte", "Une ombre projetée sur un drap"], bonne: 0, expl: "Le comédien prête sa tête, sa voix ou ses mains à un corps miniature.", niv: 2 },
        { q: "Qui conçoit les marionnettes du spectacle Gulliver ?", choix: ["Adeline Caron", "Carole Allemand", "Florence Bolton", "Audrey Vuong"], bonne: 1, expl: "Avec Fabienne Touzi dit Terzi ; Audrey Vuong signe la scénographie.", niv: 3 },
        { q: "Quel spectacle Lesort et Hecq ont-ils créé à la Comédie-Française en 2015 ?", choix: ["Le Bourgeois gentilhomme", "Un Chapeau de paille d'Italie", "Cyrano de Bergerac", "Vingt mille lieues sous les mers"], bonne: 3, expl: "Un autre roman d'aventures adapté avec des marionnettes.", niv: 2 },
        { q: "Pourquoi parle-t-on d'une « libre adaptation » de Swift ?", choix: ["Le spectacle est gratuit", "Le texte de Swift est joué en anglais", "Valérie Lesort réécrit et invente", "Les acteurs improvisent chaque soir"], bonne: 2, expl: "Ce n'est pas le texte de Swift mot pour mot.", niv: 2 },
        { q: "Quel est le défi central pour mettre Lilliput en scène ?", choix: ["Montrer un géant et des êtres minuscules ensemble", "Trouver des chevaux qui parlent", "Faire voler une île au-dessus de la tête du public", "Jouer en latin"], bonne: 0, expl: "L'échelle oblige à inventer des solutions visuelles.", niv: 3 },
        { q: "Comment Gulliver se réveille-t-il en arrivant à Lilliput ?", choix: ["Dans le palais de l'empereur", "Au fond d'une cage dorée", "Sur une île qui vole", "Attaché au sol par des fils"], bonne: 3, expl: "C'est l'image la plus célèbre du roman.", niv: 1 },
      ],
    },
    // ---------------------------------------------------------------- 10
    {
      chapitre: 'theatre-10',
      fiche: `## Construire une proposition pour le plateau

La deuxième partie de l'écrit (**12 points**) demande une **proposition pour le plateau** sur une partie, un aspect ou une composante d'une des œuvres au programme. Exemple réel (2026) : « Dans votre carnet de bord, vous proposez un projet de création pour le personnage d'Hélène Nonancourt dans Un chapeau de paille d'Italie ».

### Ce que le jury attend
- Un **projet** cohérent, avec une **intention** claire (ce que l'on veut faire comprendre ou ressentir).
- Des choix **concrets** : espace, jeu, costume, lumière, son, accessoires.
- Un **processus de création** : comment on travaillerait avec les acteurs (exercices, improvisations, étapes).
- Des **justifications** par le texte, par ses **connaissances** (mises en scène vues, références) et par son **expérience** d'acteur et de spectateur.
- Des **croquis** ou **schémas** possibles : plan du plateau vu de dessus, silhouette de costume.

### Une démarche en cinq temps
- **Lire la consigne** : quel passage, quel personnage, quelle composante (scénographie, costume, jeu, musique) ?
- **Relire le texte** (il est autorisé pendant l'épreuve) et relever des répliques et didascalies précises.
- **Formuler une intention** en une phrase : « Je veux montrer qu'Hélène découvre avec effroi le monde où on la marie. »
- **Décliner l'intention** dans chaque élément : corps et voix de l'acteur, costume, espace, lumière, son.
- **Décrire le processus** : comment on chercherait ce jeu en répétition.

### Les outils du projet
- **Espace** : décor réaliste ou épuré, rapport scène-salle, place des acteurs (cour, jardin, avant-scène, lointain).
- **Jeu** : postures, rythme, regard, adresse public, silences.
- **Costume et maquillage** : époque, couleurs, matières, ce qu'ils disent du personnage.
- **Lumière et son** : ambiance, isolement, passages du réel au rêve.
- **Objets** : un accessoire peut devenir le fil du projet (le myrte de Nonancourt, une bougie, une marionnette).

### Pour « Voyages romanesques »
- On peut **réinventer** une page déjà mise en scène par Lazar ou Lesort-Hecq, ou **adapter** un passage laissé de côté.
- Il faut dire comment on passe du **récit** au **plateau** : narrateur sur scène ou non, ce que l'on montre et ce que l'on laisse imaginer.
- L'**échelle** (Gulliver) ou le **monde renversé** (la Lune) sont de bons défis à traiter.

### Le processus de création
- Exemples d'étapes : lecture à la table, **improvisations** sur une situation, travail de **chœur**, recherche de **gestes**, essais de lumière, **filage**.
- Citer son **carnet de bord** et ce qu'on a vécu en classe rend le projet crédible.

### Pièges à éviter
- Raconter la pièce au lieu de proposer.
- Copier la mise en scène de référence sans rien inventer.
- Faire des choix sans les justifier.
- Oublier les acteurs : un projet de plateau est d'abord un projet de **jeu**.

### À retenir pour le bac
- Une intention en une phrase, déclinée dans tous les éléments du plateau.
- Des choix concrets, justifiés par le texte, les connaissances et la pratique.
- Un processus de répétition décrit.
- Croquis bienvenus : plan vu de dessus, costume.`,
      cartes: [
        { q: "Combien de points vaut la proposition pour le plateau ?", r: "12 points sur 20 à l'écrit." },
        { q: "Quel était le sujet réel de 2026 pour la deuxième partie ?", r: "Un projet de création pour le personnage d'Hélène Nonancourt dans Un chapeau de paille d'Italie." },
        { q: "Qu'est-ce qu'une intention de mise en scène ?", r: "Ce que l'on veut faire comprendre ou ressentir au spectateur, dite en une phrase." },
        { q: "Quels éléments un projet de plateau doit-il traiter ?", r: "L'espace, le jeu, le costume, la lumière, le son, les accessoires." },
        { q: "Qu'est-ce qu'un processus de création ?", r: "La manière de travailler avec les acteurs : exercices, improvisations, étapes de répétition." },
        { q: "Sur quoi s'appuient les justifications ?", r: "Sur le texte, sur ses connaissances (spectacles vus, références) et sur son expérience d'acteur et de spectateur." },
        { q: "Quels croquis peut-on faire ?", r: "Un plan du plateau vu de dessus, une silhouette de costume, un schéma de lumière." },
        { q: "Peut-on lire le texte pendant l'épreuve ?", r: "Oui, les textes du programme limitatif sont autorisés." },
        { q: "Que peut-on proposer pour « Voyages romanesques » ?", r: "Réinventer une page déjà mise en scène, ou adapter un passage laissé de côté par les spectacles." },
        { q: "Qu'est-ce qu'un filage ?", r: "Une répétition où l'on joue tout le spectacle, ou toute une partie, sans s'arrêter." },
        { q: "Pourquoi citer son carnet de bord ?", r: "Pour appuyer le projet sur ce qu'on a vraiment vécu en classe : il devient crédible." },
        { q: "Quel est le premier piège à éviter ?", r: "Raconter la pièce au lieu de proposer des choix de plateau." },
        { q: "Pourquoi un accessoire peut-il guider un projet ?", r: "Un objet (le myrte, une bougie, une marionnette) peut porter le sens et relier toutes les scènes." },
      ],
      quiz: [
        { q: "Combien de points vaut la deuxième partie de l'écrit ?", choix: ["12 points", "4 points", "8 points", "10 points"], bonne: 0, expl: "La première partie, l'essai sur captation, vaut 8 points.", niv: 1 },
        { q: "Quelle intention est la mieux formulée pour Hélène ?", choix: ["« Hélène sera habillée en blanc. »", "« Je vais suivre le texte de Labiche. »", "« Je veux montrer qu'Hélène découvre avec effroi le monde où on la marie. »", "« Hélène est un personnage de la pièce, fille de Nonancourt. »"], bonne: 2, expl: "Une intention dit ce que l'on veut faire ressentir ou comprendre.", niv: 2 },
        { q: "Pendant l'écrit, les textes du programme limitatif sont :", choix: ["interdits", "lus à voix haute par le surveillant", "fournis en résumé", "autorisés"], bonne: 3, expl: "On peut relever des répliques et didascalies précises.", niv: 1 },
        { q: "Que décrit un processus de création ?", choix: ["Le prix des billets", "La manière de répéter avec les acteurs", "La biographie de l'auteur", "Le résumé de l'intrigue de la pièce choisie"], bonne: 1, expl: "Lecture, improvisations, recherche de gestes, filage…", niv: 2 },
        { q: "Quel croquis est le plus utile pour montrer l'organisation de l'espace ?", choix: ["Un portrait de l'auteur", "Une affiche du spectacle", "Un plan du plateau vu de dessus", "Un dessin du public assis dans la salle"], bonne: 2, expl: "Il situe acteurs, décor, cour et jardin.", niv: 2 },
        { q: "Pour « Voyages romanesques », que peut-on proposer ?", choix: ["Une biographie de Swift", "Un résumé détaillé des deux spectacles", "Un tableau des dates", "L'adaptation d'un passage laissé de côté"], bonne: 3, expl: "On peut aussi réinventer une page déjà mise en scène.", niv: 2 },
        { q: "Une répétition où l'on joue tout sans s'arrêter s'appelle :", choix: ["un filage", "une italienne", "un raccord de texte à la table", "une générale de presse"], bonne: 0, expl: "L'italienne, elle, consiste à dire le texte vite, sans jouer.", niv: 2 },
        { q: "Quel est le piège principal de la deuxième partie ?", choix: ["Faire un croquis", "Raconter la pièce au lieu de proposer", "Citer son carnet de bord", "Justifier ses choix par des répliques du texte"], bonne: 1, expl: "Le jury attend un projet, pas un résumé.", niv: 3 },
        { q: "Sur quoi le candidat justifie-t-il son projet selon la note de service ?", choix: ["Sur l'avis de ses parents", "Sur le budget du lycée", "Sur les seules critiques de presse", "Sur ses connaissances et sa pratique"], bonne: 3, expl: "Texte, culture et pratique se répondent.", niv: 3 },
        { q: "Pourquoi un projet de plateau doit-il d'abord penser aux acteurs ?", choix: ["Parce que les décors sont interdits", "Parce que le théâtre est d'abord un art du jeu", "Parce que le jury est composé d'acteurs professionnels", "Parce que la lumière ne compte pas"], bonne: 1, expl: "Corps, voix, rythme : le projet passe par le jeu.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 11
    {
      chapitre: 'theatre-11',
      fiche: `## L'épreuve : essai sur captation, projet de plateau, oral et carnet de bord

L'épreuve de spécialité (coefficient 16) a deux parties, chacune pour la **moitié de la note** (note de service du 11 septembre 2026, applicable dès la session 2027).

### L'écrit : 3 h 30, deux parties obligatoires
- Le sujet porte sur le **programme limitatif**. Les **textes** du programme sont **autorisés** ; on peut apporter du matériel pour les croquis.
- **Première partie (8 points)** : une question à traiter sous forme de **court essai**, à partir d'un ou deux **extraits de captation** des mises en scène de référence. Exemple réel (2026) : « Comment la nuit du 4 août est-elle représentée dans cet extrait ? » (1789, Théâtre du Soleil).
- Les extraits durent **5 minutes au plus**. On les voit **trois fois** : au début de l'épreuve, dix minutes après, puis cinq minutes après. Il faut prendre des notes rapides (temps, espace, jeu, son, lumière).
- **Deuxième partie (12 points)** : une **proposition pour le plateau** sur une partie, un aspect ou une composante d'une œuvre au programme, avec **croquis** ou **schémas** possibles.
- La **maîtrise de la langue** compte : une copie défaillante sur tous ses aspects ne peut pas avoir la moyenne.

### Organiser son temps à l'écrit
- Pendant les trois visionnages : noter, sans rédiger.
- Environ **1 h 15** pour l'essai (introduction, deux ou trois idées illustrées par des moments précis, conclusion).
- Environ **1 h 45** pour le projet de plateau, croquis compris.
- Garder quelques minutes pour relire.

### L'oral : 30 minutes, après 30 minutes de préparation
- Pour **chacune des deux questions** du programme, le candidat prépare une **proposition de jeu** sur un extrait. Le **jury choisit** l'extrait qu'il va jouer.
- **Travail théâtral** : **10 minutes au plus**, seul ou en groupe (les partenaires sont des élèves du lycée). Le jury peut demander un « **re-jeu** » : changer l'espace ou l'intention.
- **Entretien** : individuel, sur le temps restant (20 minutes par candidat en cas de jeu collectif). Le jury interroge sur les **choix scéniques**, le **processus de création**, les liens entre **plateau**, pratique d'acteur et **expérience de spectateur**, puis approfondit un élément.
- Le jury dispose du **carnet de bord** de l'élève et d'un **document de synthèse** d'une page signé par le professeur.
- Barème : **12 points** pour le travail théâtral, **8 points** pour l'entretien.
- Le jury associe un **professeur** et un **partenaire artistique** professionnel qui a travaillé avec la classe.

### Le carnet de bord
- C'est la trace personnelle de l'année : notes de répétition, spectacles vus, croquis, recherches, photos, réflexions.
- Il nourrit l'entretien et l'écrit (« dans mon carnet de bord, j'ai noté que… »).

### Le re-jeu
- Le jury veut voir si l'acteur sait **s'adapter** : rejouer plus lentement, dans un autre espace, avec une autre intention.
- Il faut accepter la consigne franchement, sans se justifier : c'est un exercice de souplesse.

### À retenir pour le bac
- Écrit : essai sur captation (8) + proposition pour le plateau (12), textes autorisés, extraits vus trois fois.
- Oral : 30 minutes de préparation, 10 minutes de jeu au plus, entretien ; 12 + 8 points.
- Deux propositions de jeu préparées, une par question ; le jury choisit.
- Carnet de bord et re-jeu : souplesse et réflexion personnelle.`,
      cartes: [
        { q: "Combien de temps dure l'écrit de théâtre ?", r: "3 h 30." },
        { q: "Quelles sont les deux parties de l'écrit ?", r: "Un court essai sur un extrait de captation (8 points) et une proposition pour le plateau (12 points)." },
        { q: "Combien de fois voit-on l'extrait de captation ?", r: "Trois fois : au début, dix minutes après, puis cinq minutes après." },
        { q: "Combien dure l'extrait au plus ?", r: "5 minutes, pour un ou deux extraits regardés à la suite." },
        { q: "Les textes sont-ils autorisés à l'écrit ?", r: "Oui, les textes du programme limitatif peuvent être consultés." },
        { q: "Quelle était la question de l'essai en 2026 ?", r: "« Comment la nuit du 4 août est-elle représentée dans cet extrait ? » (1789, Théâtre du Soleil)." },
        { q: "Combien de propositions de jeu prépare-t-on pour l'oral ?", r: "Deux, une pour chaque question du programme limitatif ; le jury choisit." },
        { q: "Combien dure le travail théâtral à l'oral ?", r: "10 minutes au plus." },
        { q: "Qu'est-ce qu'un re-jeu ?", r: "Une consigne du jury pour rejouer autrement : changer l'espace ou l'intention." },
        { q: "Comment l'oral est-il noté ?", r: "12 points pour le travail théâtral, 8 points pour l'entretien." },
        { q: "Qui compose le jury de l'oral ?", r: "Un professeur et un partenaire artistique professionnel qui a travaillé avec la classe." },
        { q: "Qu'est-ce que le carnet de bord ?", r: "La trace personnelle de l'année : répétitions, spectacles vus, croquis, recherches, réflexions." },
        { q: "Sur quoi porte l'entretien ?", r: "Les choix scéniques, le processus de création, les liens entre plateau, pratique d'acteur et expérience de spectateur." },
        { q: "Comment répartir son temps à l'écrit ?", r: "Noter pendant les visionnages, environ 1 h 15 pour l'essai, 1 h 45 pour le projet, puis relire." },
      ],
      quiz: [
        { q: "Combien de fois l'extrait de captation est-il diffusé à l'écrit ?", choix: ["Une fois", "Trois fois", "Deux fois", "Autant que l'on veut"], bonne: 1, expl: "Au début, dix minutes après, puis cinq minutes après.", niv: 1 },
        { q: "Combien de points vaut l'essai sur captation ?", choix: ["12 points", "10 points", "6 points", "8 points"], bonne: 3, expl: "La proposition pour le plateau vaut 12 points.", niv: 1 },
        { q: "Pendant l'écrit, le candidat peut consulter :", choix: ["les textes du programme limitatif", "son carnet de bord", "un dictionnaire", "son téléphone pour revoir la captation"], bonne: 0, expl: "Il peut aussi apporter du matériel pour les croquis.", niv: 2 },
        { q: "Combien de temps dure le travail théâtral à l'oral, au plus ?", choix: ["5 minutes", "8 minutes", "10 minutes", "7 minutes"], bonne: 2, expl: "L'entretien occupe le temps restant.", niv: 1 },
        { q: "Qui choisit l'extrait joué par le candidat à l'oral ?", choix: ["Le candidat, le jour même", "Le professeur de la classe", "Un tirage au sort par ordinateur la veille de l'épreuve", "Le jury, entre les deux propositions préparées"], bonne: 3, expl: "Une proposition est préparée pour chaque question.", niv: 2 },
        { q: "Qu'est-ce qu'un « re-jeu » demandé par le jury ?", choix: ["Rejouer en changeant l'espace ou l'intention", "Rejouer exactement la même chose, plus fort", "Jouer une autre pièce", "Recommencer l'épreuve un autre jour, devant un autre jury"], bonne: 0, expl: "Le jury teste la souplesse de l'acteur.", niv: 2 },
        { q: "Comment l'oral est-il noté ?", choix: ["10 points pour le jeu, 10 pour l'entretien", "12 points pour le jeu, 8 pour l'entretien", "20 points pour le seul jeu", "8 points pour le jeu, 12 pour l'entretien"], bonne: 1, expl: "Le travail théâtral pèse le plus lourd.", niv: 2 },
        { q: "Qui compose le jury de l'oral avec le professeur ?", choix: ["Un inspecteur de lettres", "Un autre élève", "Un partenaire artistique professionnel", "Le proviseur du lycée ou son adjoint"], bonne: 2, expl: "Il est intervenu régulièrement dans l'enseignement.", niv: 3 },
        { q: "Que faire pendant les visionnages de l'extrait ?", choix: ["Rédiger directement l'introduction", "Commencer directement le projet de plateau", "Fermer les yeux pour écouter", "Prendre des notes rapides sans rédiger"], bonne: 3, expl: "Temps, espace, jeu, son, lumière.", niv: 3 },
        { q: "Que contient le carnet de bord ?", choix: ["Les notes de l'année scolaire", "Les répétitions, spectacles vus et réflexions", "Le texte complet des pièces", "Le règlement officiel de l'épreuve du bac"], bonne: 1, expl: "C'est la trace personnelle du parcours.", niv: 2 },
        { q: "Face à une consigne de re-jeu, la meilleure attitude est :", choix: ["l'accepter franchement et essayer", "expliquer pourquoi on préfère sa version", "refuser poliment de rejouer", "demander du temps pour réfléchir"], bonne: 0, expl: "C'est un exercice de souplesse, pas un jugement.", niv: 3 },
      ],
    },
  ],
  methode: [
    {
      id: 'theatre-m1', mat: 'theatre', titre: "Court essai sur un extrait de captation (première partie de l'écrit)",
      formules: ["Comment [tel moment] est-il représenté dans cet extrait ?", "En quoi cet extrait… ?", "Comment la mise en scène fait-elle… ?"],
      vu: ["Session 2026 (juin), partie I : « Comment la nuit du 4 août est-elle représentée dans cet extrait ? » (1789, Théâtre du Soleil, mise en scène d'Ariane Mnouchkine, 1974)", "Note de service du 11 septembre 2026 : un ou deux extraits de 5 minutes au plus, vus trois fois"],
      pts: "8 points, environ 1 h 15 avec les visionnages",
      attendu: "Un court essai organisé qui répond à la question en analysant des moments précis de l'extrait (espace, jeu, lumière, son, costumes, rapport au public), passe de la description à l'interprétation et s'appuie sur la culture de spectateur et l'expérience de plateau.",
      etapes: ["Lire la question avant le premier visionnage.", "Pendant les trois visionnages, noter vite : moments, espace, jeu, son, lumière.", "Situer l'extrait dans l'œuvre (acte, épisode).", "Trouver deux ou trois idées qui répondent à la question.", "Illustrer chaque idée par un moment précis, décrit puis interprété.", "Ajouter une référence (autre spectacle) ou une expérience de jeu en classe.", "Conclure en répondant nettement."],
      mots: ["scénographie", "adresse public", "rythme", "contre-jour", "changement à vue"],
      pieges: ["Raconter l'extrait dans l'ordre sans répondre à la question.", "Décrire sans interpréter.", "Confondre ce qui vient du film (cadrage) et du spectacle.", "Affirmer un détail qu'on n'a pas vu."],
      cas: "Extrait du Chapeau de paille d'Italie (Corsetti, 2012) : l'arrivée de la noce chez Fadinard, à l'acte I. Question : comment la mise en scène fait-elle de la noce une force comique ?",
      question: "Rédige l'introduction et la première idée de l'essai (en t'appuyant sur ce que tu as noté de la captation).",
      modele: "Introduction : à l'acte I d'Un Chapeau de paille d'Italie, Fadinard vient d'apprendre qu'il doit trouver un chapeau identique, quand la noce de Nonancourt arrive chez lui. Dans la mise en scène de Giorgio Barberio Corsetti à la Comédie-Française (2012), ce groupe de provinciaux devient une véritable force comique : nous verrons comment il envahit l'espace, puis comment il impose son rythme à Fadinard. Première idée : la noce envahit le plateau. [Décrire ici, d'après ses notes, l'entrée du groupe : par où il arrive (cour, jardin, salle), combien de personnes, leurs costumes, leurs déplacements en bloc.] Ce groupe qui se déplace comme un seul corps illustre ce que Bergson appelle « du mécanique plaqué sur du vivant » : personne ne réfléchit, tout le monde suit. En classe, en travaillant l'entrée de la noce en chœur, nous avons constaté qu'un groupe serré qui avance ensemble fait rire avant même de parler. Fadinard, seul face à cette masse, paraît déjà pris au piège.",
      grille: ["J'ai situé l'extrait dans la pièce.", "Chaque idée s'appuie sur un moment précis de l'extrait.", "Je suis passé de la description à l'interprétation.", "J'ai cité une référence ou une expérience de plateau."],
    },
    {
      id: 'theatre-m2', mat: 'theatre', titre: "Projet de création pour un personnage (deuxième partie de l'écrit)",
      formules: ["Dans votre carnet de bord, vous proposez un projet de création pour le personnage de…", "Vous proposez une mise en scène de tel passage…"],
      vu: ["Session 2026 (juin), partie II : « Dans votre carnet de bord, vous proposez un projet de création pour le personnage d'Hélène Nonancourt dans Un chapeau de paille d'Italie d'Eugène Labiche et Marc-Michel »", "Note de service du 11 septembre 2026 : proposition pour le plateau sur une partie, un aspect ou une composante d'une œuvre, croquis possibles"],
      pts: "12 points, environ 1 h 45",
      attendu: "Un projet cohérent autour d'une intention claire, décliné en choix concrets (jeu, costume, espace, lumière, son), justifié par des répliques et didascalies précises, par des références et par l'expérience de plateau, avec un processus de répétition et, si possible, des croquis.",
      etapes: ["Relire toutes les scènes du personnage dans le texte autorisé.", "Relever trois ou quatre répliques ou didascalies clés.", "Écrire l'intention en une phrase.", "Décliner : corps et voix, costume, place dans l'espace, lumière, son.", "Suivre le personnage d'un acte à l'autre (son évolution).", "Décrire deux exercices de répétition.", "Ajouter un croquis de costume ou de plateau."],
      mots: ["intention", "parcours du personnage", "silhouette", "processus de création", "re-jeu"],
      pieges: ["Faire le portrait du personnage sans proposer de jeu.", "Oublier l'évolution d'un acte à l'autre.", "Copier la mise en scène de Corsetti.", "Ne citer aucun passage du texte."],
      cas: "Sujet : vous proposez un projet de création pour le personnage d'Hélène Nonancourt.",
      question: "Rédige l'intention et la partie sur le jeu et le costume.",
      modele: "Intention : je veux montrer qu'Hélène, qu'on traite comme une poupée qu'on marie, découvre peu à peu avec inquiétude le monde des adultes, et finit par s'y faire une place. Jeu : au début, elle parle peu, toujours tournée vers son père, les mains serrées sur son bouquet ; elle répète ce qu'on lui dit, d'une voix fluette. Plus la journée avance, plus elle regarde ailleurs : chez la modiste, puis chez la baronne, elle s'arrête, seule, à l'avant-scène, pendant que la noce s'agite derrière elle dans le noir, éclairée par une douche. Ces silences, absents du texte, font entendre ce qu'elle ne dit pas. Costume : une robe de mariée trop grande, empruntée, dont la traîne se salit d'acte en acte dans la course à travers Paris : la tache devient le signe de son mariage gâché. Répétition : je ferais improviser à l'actrice la scène qu'Hélène ne vit pas sur scène, son réveil le matin du mariage, pour qu'elle trouve son corps de jeune fille de la campagne ; puis je lui ferais jouer la même réplique trois fois, docile, inquiète, puis décidée.",
      grille: ["Mon intention tient en une phrase.", "J'ai cité des répliques ou des didascalies.", "J'ai montré l'évolution du personnage.", "J'ai décrit au moins un exercice de répétition."],
    },
    {
      id: 'theatre-m3', mat: 'theatre', titre: "Adapter au plateau un passage de roman (Voyages romanesques)",
      formules: ["Vous proposez l'adaptation pour le plateau de tel épisode de L'Autre Monde / des Voyages de Gulliver.", "Comment mettriez-vous en scène tel passage laissé de côté par le spectacle ?"],
      vu: ["Question « Voyages romanesques », nouvelle à la rentrée 2026 (BOENJS n° 4 du 22 janvier 2026) : pas encore d'annale", "Fiche Éduscol d'avril 2026 : réinventer une page déjà mise en scène, ou adapter un passage laissé de côté"],
      pts: "12 points si le sujet de la deuxième partie porte sur cette question",
      attendu: "Un projet qui dit comment on passe du récit au plateau (narrateur ou non, ce que l'on montre et ce que l'on évoque), qui fait voir le monde merveilleux sans refermer l'imagination, et qui se situe par rapport aux choix de Lazar ou de Lesort et Hecq.",
      etapes: ["Résumer l'épisode en deux phrases.", "Choisir : garder un narrateur, le partager, ou le supprimer.", "Décider ce que l'on montre et ce que l'on laisse imaginer.", "Trouver les moyens : objets, marionnettes, lumière, musique, corps.", "Se situer par rapport à l'un des deux spectacles.", "Décrire le processus de répétition."],
      mots: ["adaptation", "narrateur", "évocation", "monstration", "échelle"],
      pieges: ["Tout montrer et tout expliquer.", "Oublier de dire que faire du narrateur.", "Recopier le spectacle de référence.", "Négliger la langue ancienne du roman."],
      cas: "Épisode : sur la Lune, les nobles parlent en musique et le peuple par gestes (L'Autre Monde).",
      question: "Rédige le projet d'adaptation de cet épisode.",
      modele: "Je propose de faire entendre la langue lunaire plutôt que de la traduire. Le narrateur reste sur scène, comme chez Benjamin Lazar, mais il ne comprend rien, et nous avec lui : c'est l'étrangeté qui fait le voyage. Deux acteurs jouent des nobles lunaires : ils ne parlent pas, ils se répondent avec une flûte et une viole, en dialogue rythmé, comme une conversation. Le peuple, joué par un chœur de quatre élèves, parle par gestes : nous inventerions en répétition un vocabulaire de dix gestes simples (saluer, manger, menacer, rire), répétés jusqu'à devenir une vraie langue. Le narrateur, au centre, essaie d'imiter ces gestes et se trompe : le comique naît de ses erreurs. La lumière est basse, chaude, venue du sol, pour un monde renversé. Contrairement à Lesort et Hecq, je ne construis aucun décor : tout passe par le son et le corps, pour que le spectateur imagine lui-même la Lune.",
      grille: ["J'ai dit ce que je fais du narrateur.", "J'ai distingué ce que je montre et ce que j'évoque.", "Je me suis situé par rapport à un spectacle de référence.", "J'ai décrit un travail de répétition."],
    },
    {
      id: 'theatre-m4', mat: 'theatre', titre: "Comparer deux extraits de captation",
      formules: ["Comparez la manière dont ces deux extraits… ", "Comment ces deux mises en scène font-elles… ?"],
      vu: ["Note de service du 11 septembre 2026 : la première partie peut s'appuyer sur « un ou deux extraits de captation d'une ou deux des mises en scène de référence »", "La question « Voyages romanesques » s'appuie sur deux spectacles : la comparaison est très probable"],
      pts: "8 points, environ 1 h 15",
      attendu: "Un essai qui compare, au lieu de juxtaposer : points communs et différences des deux extraits, rapportés à la question, avec des moments précis de chacun.",
      etapes: ["Noter pour chaque extrait les mêmes rubriques : espace, jeu, son, lumière, objets.", "Chercher un point commun qui répond à la question.", "Chercher deux différences fortes.", "Organiser par idées, en parlant des deux extraits dans chaque partie.", "Conclure par ce que la comparaison révèle."],
      mots: ["évocation", "monstration", "marionnette hybride", "prononciation restituée", "échelle"],
      pieges: ["Analyser un extrait puis l'autre, sans les relier.", "Juger qu'un spectacle est meilleur que l'autre.", "Oublier la question posée."],
      cas: "Question : comment ces deux extraits (L'Autre Monde de Lazar, Gulliver de Lesort et Hecq) font-ils exister un monde merveilleux ?",
      question: "Rédige le plan détaillé de l'essai.",
      modele: "Introduction : deux voyages imaginaires du XVIIe et du XVIIIe siècle, deux spectacles d'aujourd'hui. Problématique : faut-il montrer le merveilleux ou le faire imaginer ? I. Deux spectacles qui gardent la trace du roman : chez Lazar, l'acteur est le narrateur et dit le texte de Cyrano ; chez Lesort et Hecq, le récit de Gulliver structure encore l'action [moments précis notés]. II. Deux voies opposées : Lazar évoque (bougies, prononciation restituée, musique de La Rêveuse, gestes codés) ; Lesort et Hecq montrent (marionnettes hybrides, jeux d'échelle, décor) [un moment précis de chaque extrait]. III. Mais les deux font travailler l'imagination : la pénombre des bougies et les corps miniatures laissent chacun une part d'invisible au spectateur. Conclusion : le merveilleux naît moins de ce que l'on voit que de l'écart entre ce que l'on voit et ce que l'on devine.",
      grille: ["Chaque partie parle des deux extraits.", "J'ai un point commun et des différences.", "Chaque idée s'appuie sur un moment précis.", "Je réponds à la question en conclusion."],
    },
    {
      id: 'theatre-m5', mat: 'theatre', titre: "Réussir l'oral : proposition de jeu, re-jeu et entretien",
      formules: ["Le jury choisit l'une des deux propositions de jeu préparées.", "« Rejouez la scène en changeant l'espace / l'intention. »", "« Pourquoi avez-vous fait ce choix ? »"],
      vu: ["Note de service du 11 septembre 2026 : 30 minutes de préparation, travail théâtral de 10 minutes au plus, entretien ; 12 points pour le jeu, 8 pour l'entretien"],
      pts: "20 points, la moitié de la note de l'épreuve",
      attendu: "Une proposition de jeu maîtrisée et habitée, une réponse franche au re-jeu, puis un entretien où le candidat explique ses choix, son processus et les liens avec les spectacles vus, en s'appuyant sur son carnet de bord.",
      etapes: ["Préparer deux extraits, un par question, avec une intention claire.", "Pendant la préparation, revoir l'intention et l'espace.", "Jouer sans s'excuser, en occupant tout l'espace prévu.", "Accepter le re-jeu et changer vraiment.", "À l'entretien, expliquer l'intention, le processus, une référence vue.", "Citer son carnet de bord."],
      mots: ["intention", "re-jeu", "carnet de bord", "processus", "partenaire"],
      pieges: ["Jouer sans intention, en récitant.", "Refuser ou discuter la consigne de re-jeu.", "Ne citer aucun spectacle vu.", "Arriver sans carnet de bord."],
      cas: "Extrait choisi par le jury : le réveil de Gulliver attaché à Lilliput. Consigne de re-jeu : « Rejouez-la comme si Gulliver avait peur. »",
      question: "Rédige ce que tu dirais à l'entretien pour expliquer ta première proposition et ce que le re-jeu a changé.",
      modele: "Dans ma première proposition, j'ai voulu montrer un Gulliver amusé, qui découvre les Lilliputiens comme des jouets : je jouais allongé à l'avant-scène, avec des fils tenus par mes partenaires, et je riais de les sentir me chatouiller. Je me suis appuyé sur le spectacle de Valérie Lesort et Christian Hecq, où le changement d'échelle est d'abord drôle. Le re-jeu m'a fait découvrir une autre lecture : avec la peur, les mêmes fils deviennent une prison, et mon corps immense devient impuissant. Cela rejoint la satire de Swift : un géant peut être vaincu par des milliers de petits. Dans mon carnet de bord, j'avais noté après une improvisation en classe que l'immobilité forcée donnait une grande tension au jeu : le re-jeu me l'a confirmé.",
      grille: ["J'ai expliqué mon intention de départ.", "J'ai dit ce que le re-jeu a changé.", "J'ai cité un spectacle de référence.", "J'ai cité mon carnet de bord."],
    },
  ],
  sujets: [
    {
      id: 'theatre-s1', matiere: 'theatre', titre: "Sujet d'entraînement 1 : voyages merveilleux et noce en folie", duree: 210,
      enonce: `## Sujet d'entraînement 1 (inventé)

Durée : 3 heures 30. Sujet construit sur le modèle de la partie écrite de l'épreuve (note de service du 11 septembre 2026). La consultation des textes du programme limitatif est autorisée. Le candidat traite **les deux parties**.

Répartition des points : première partie, 8 points ; deuxième partie, 12 points.

### Première partie (8 points)
**Comment ces deux extraits font-ils exister sur scène un monde merveilleux ?**
- Extrait 1 : L'Autre Monde ou Les États et empires de la lune, texte de Cyrano de Bergerac, adaptation et mise en scène de Benjamin Lazar, conception musicale de l'ensemble La Rêveuse (captation de 2014). Passage choisi par le professeur : l'arrivée du narrateur sur la Lune.
- Extrait 2 : Gulliver, libre adaptation du roman de Jonathan Swift par Valérie Lesort, mise en scène de Christian Hecq et Valérie Lesort (captation de 2023). Passage choisi par le professeur : la première rencontre de Gulliver avec les habitants de Lilliput.
- Les deux extraits, d'une durée totale de 5 minutes au plus, sont regardés à la suite l'un de l'autre, trois fois : au début de l'épreuve, dix minutes plus tard, puis cinq minutes après le deuxième visionnage.

Pour s'entraîner seul : choisir sur les captations deux passages qui correspondent, d'environ deux minutes chacun.

### Deuxième partie (12 points)
**Dans votre carnet de bord, vous proposez un projet de création pour la noce (Nonancourt, Vézinet, Bobin et les invités) à l'acte II d'Un Chapeau de paille d'Italie d'Eugène Labiche et Marc-Michel, chez la modiste Clara, lorsque la noce croit se trouver à la mairie.**
Vous justifierez vos choix en vous appuyant sur le texte, sur vos connaissances et sur votre expérience de spectateur et d'acteur. Votre proposition peut être accompagnée de croquis ou de schémas.`,
      corrige: `## Corrigé

### Première partie : pistes
- **Problématique possible** : faut-il montrer le merveilleux ou le faire imaginer ? Les deux spectacles répondent différemment, mais tous deux laissent une part d'invisible au spectateur.
- **I. Deux voyages qui partent du récit.** Lazar garde le narrateur : l'acteur dit le texte de Cyrano à la première personne, avec la prononciation restituée ; le merveilleux passe par la parole. Chez Lesort et Hecq, le récit de Swift reste présent, mais il est surtout transformé en situations jouées.
- **II. Évoquer ou montrer.** Lazar évoque : lumière des bougies, ombre qui laisse imaginer la Lune, musique de la viole de gambe et du théorbe, gestuelle baroque. Lesort et Hecq montrent : marionnettes hybrides de Carole Allemand, changement d'échelle entre Gulliver et les Lilliputiens, effets visuels. Il faut appuyer chaque idée sur un moment précis noté pendant les visionnages (geste, son, entrée, objet).
- **III. Deux façons de faire travailler l'imagination.** La pénombre chez Lazar, les corps miniatures chez Lesort et Hecq créent un écart entre ce que l'on voit et ce que l'on devine. Références possibles : le théâtre à machines baroque, le bunraku, Peter Brook et l'espace vide.
- **Pratique** : dire ce que l'on a vécu en classe (par exemple jouer un récit seul face au public, ou manipuler un objet pour figurer un personnage minuscule).
- On attend aussi de signaler ce qui vient du film (gros plans, montage) et ce qui vient du spectacle.

### Deuxième partie : pistes
- **Le passage** : la noce entre chez la modiste et croit être à la mairie ; Fadinard doit l'occuper pendant qu'il cherche le chapeau. Le comique repose sur le **quiproquo** et sur le groupe qui suit sans comprendre.
- **Intention possible** : faire de la noce un **chœur mécanique**, au sens de Bergson, dont l'aveuglement fait rire et inquiète à la fois ; ou au contraire montrer des provinciaux perdus dans Paris, touchants dans leur maladresse.
- **Jeu** : déplacements en bloc, réactions en même temps, répétitions (« Mon gendre, tout est rompu ! », les souliers de Nonancourt, le myrte, la surdité de Vézinet qui sourit à tout, la jalousie de Bobin).
- **Espace** : la boutique de modiste, avec chapeaux, rubans et mannequins, que la noce prend pour une salle de mairie (un comptoir pris pour la table du maire, une modiste prise pour un employé) ; plan vu de dessus.
- **Costumes** : habits du dimanche de province, un peu raides et démodés, qui tranchent avec l'élégance parisienne de Clara ; un croquis de silhouette.
- **Son et musique** : un couplet chanté par la noce sur un air connu, à réinventer aujourd'hui (une chanson populaire actuelle).
- **Processus** : improvisations de chœur (avancer, s'arrêter, réagir ensemble), travail des « tics » de chaque invité, filage avec accélération du rythme.
- **Références** : la noce dans la mise en scène de Corsetti (comparer sans copier), le film de René Clair (1928), un autre spectacle vu dans l'année.`,
      grille: [
        { c: "Partie 1 : description précise de moments des deux extraits avec le vocabulaire du plateau", pts: 2 },
        { c: "Partie 1 : réponse organisée à la question, comparaison et interprétation", pts: 3 },
        { c: "Partie 1 : culture de spectateur et expérience de plateau mobilisées", pts: 2 },
        { c: "Partie 2 : intention claire et cohérente pour la noce", pts: 3 },
        { c: "Partie 2 : choix concrets (jeu, espace, costumes, son) justifiés par le texte", pts: 4 },
        { c: "Partie 2 : processus de création, références et croquis éventuels", pts: 3 },
        { c: "Maîtrise de la langue et organisation de la réflexion", pts: 3 },
      ],
    },
  ],
};
