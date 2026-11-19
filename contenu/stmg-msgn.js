// Management, sciences de gestion et numérique (MSGN) — terminale STMG, tronc commun. Sources : voir matiere.sources.
// Programme de terminale STMG (BO spécial n° 8 du 25 juillet 2019) : 3 thèmes, 12 questions de gestion, dans l'ordre officiel.
// Épreuve : note de service du BO spécial n° 4 du 17 septembre 2026, applicable à partir de la session 2027
// (4 heures ; porte sur la partie commune de terminale, les notions de première pouvant être mobilisées).
// Le chapitre stmg-msgn-1 rassemble ces notions de première, très souvent interrogées dans les corrigés officiels.
export default {
  matiere: {
    id: 'stmg-msgn',
    nom: 'Management, sciences de gestion et numérique',
    voie: 'stmg',
    epreuve: { type: 'ecrit', duree: 240, coef: 16, quand: 'juin', note: 'Étude de gestion d\'une organisation à partir de documents, en plusieurs dossiers. Porte sur le tronc commun de terminale ; les notions de management de première peuvent être mobilisées.' },
    sources: [
      'https://eduscol.education.gouv.fr/5619/baccalaureat-technologique-serie-sciences-et-technologies-du-management-et-de-la-gestion-stmg',
      'https://www.education.gouv.fr/bo/2026/Special4/MENE2622652N',
      'https://www.education.gouv.fr/bo/20/Special2/MENE2001095N.htm',
      'https://aufutur.fr/baccalaureat/bac-stmg-2025-sujet-management-sciences-gestion-numerique/',
    ],
    chapitres: [
      { id: 'stmg-msgn-1', t: 'Les notions de première qui tombent au bac', theme: 'Rappels de première : finalités, diagnostic, décisions, stratégies, calculs' },
      { id: 'stmg-msgn-2', t: 'Quels produits ou quels services pour quels besoins ?', theme: 'Thème 1 : Les organisations et l\'activité de production de biens et de services' },
      { id: 'stmg-msgn-3', t: 'Quelles ressources pour produire ?', theme: 'Thème 1 : Les organisations et l\'activité de production de biens et de services' },
      { id: 'stmg-msgn-4', t: 'Quels choix d\'organisation de la production pour concilier flexibilité, qualité et maîtrise des coûts ?', theme: 'Thème 1 : Les organisations et l\'activité de production de biens et de services' },
      { id: 'stmg-msgn-5', t: 'Les transformations numériques, une chance pour la production ?', theme: 'Thème 1 : Les organisations et l\'activité de production de biens et de services' },
      { id: 'stmg-msgn-6', t: 'Comment assurer un fonctionnement cohérent des organisations ?', theme: 'Thème 1 : Les organisations et l\'activité de production de biens et de services' },
      { id: 'stmg-msgn-7', t: 'Comment fédérer les acteurs de l\'organisation ?', theme: 'Thème 2 : Les organisations et les acteurs' },
      { id: 'stmg-msgn-8', t: 'Les transformations numériques, vecteur d\'amélioration de la relation avec les clients et usagers ?', theme: 'Thème 2 : Les organisations et les acteurs' },
      { id: 'stmg-msgn-9', t: 'Communique-t-on de la même manière avec tous les acteurs ?', theme: 'Thème 2 : Les organisations et les acteurs' },
      { id: 'stmg-msgn-10', t: 'Les organisations peuvent-elles s\'affranchir des questions de société ?', theme: 'Thème 3 : Les organisations et la société' },
      { id: 'stmg-msgn-11', t: 'Les changements de modes de vie s\'imposent-ils aux organisations ?', theme: 'Thème 3 : Les organisations et la société' },
      { id: 'stmg-msgn-12', t: 'Les transformations numériques, de nouvelles responsabilités pour les organisations ?', theme: 'Thème 3 : Les organisations et la société' },
      { id: 'stmg-msgn-13', t: 'Quelles relations entre les organisations et leur écosystème ?', theme: 'Thème 3 : Les organisations et la société' },
    ],
  },
  paquets: [
    { chapitre: 'stmg-msgn-1',
      fiche: `## Les notions de première qui tombent au bac

L'épreuve porte sur le programme de terminale, mais les notions de management de première peuvent être mobilisées. Dans les sujets récents, elles reviennent presque à chaque fois : finalités, diagnostic, décisions, stratégies et calculs.

### Les finalités
- La **finalité** est la raison d'être de l'organisation, ce vers quoi elle tend. Un **objectif** est un résultat précis, **chiffré et daté** (exemple : augmenter le chiffre d'affaires de 5 % d'ici 2028).
- **Économique** : réaliser un **profit** pour assurer la **pérennité** (pour une entreprise).
- **Sociale** : le bien-être et le développement des salariés.
- **Sociétale** : contribuer à la société (emploi local, solidarité, territoire).
- **Environnementale** : limiter son impact sur la planète.
- Une organisation publique vise l'**intérêt général** ; une association poursuit un but **non lucratif**.

### Le diagnostic stratégique
- **Diagnostic externe** : l'environnement, que l'organisation ne contrôle pas. On y cherche les **opportunités** et les **menaces** (marché, concurrence, économie, réglementation, technologie, modes de vie). Exemple : un marché en recul de 6 % est une menace.
- **Diagnostic interne** : l'organisation elle-même. On y cherche ses **forces** et ses **faiblesses** (savoir-faire, image, finances, salariés, outils).
- Les quatre ensemble forment la matrice **SWOT**.
- Un **facteur clé de succès (FCS)** est ce que **toute** entreprise doit maîtriser pour réussir sur un **marché** (prix, qualité, conseil, innovation…). Il est exigé par le marché.
- Un **avantage concurrentiel** est ce qui permet à **une** entreprise de faire mieux que ses concurrents. Il lui est propre.

### Les décisions
- **Stratégique** : prise par la **direction générale**, engage l'avenir sur le **long terme**, mobilise des **ressources importantes**, **difficile à inverser**, **risquée**. Exemple : construire une usine.
- **Tactique** (ou de gestion) : met en œuvre la stratégie dans un domaine (commercial, RH…), à **moyen terme**, prise par un responsable de service. Exemple : un plan de recrutement pour l'an prochain.
- **Opérationnelle** : gestion courante, à **court terme**, facile à corriger. Exemple : les plannings de la semaine.

### Les stratégies
- **Stratégie globale** (dans quels métiers ?) : **spécialisation** (un seul métier), **diversification** (de nouveaux métiers), **intégration** (prendre une étape avant ou après dans la filière), **recentrage**, **internationalisation**.
- **Stratégie de domaine** (comment gagner sur un marché ?) : **domination par les coûts** (prix bas grâce à des coûts bas), **différenciation** (offre perçue comme unique), **focalisation** (cible étroite).
- **Modalités de développement** : **croissance interne** (l'entreprise crée ses propres moyens), **croissance externe** (elle rachète ou fusionne), **partenariat** (alliance, sous-traitance, franchise).

### Le financement
- **Autofinancement** : ses propres ressources (bénéfices mis en réserve, trésorerie).
- **Capitaux propres** : augmentation de capital, entrée de nouveaux associés.
- **Endettement** : emprunt bancaire, **crédit-bail** (location avec option d'achat).
- **Aides publiques** : subventions de la région, de l'État ou de l'Union européenne.

### Les calculs à savoir faire
- **Taux d'évolution** = (valeur d'arrivée - valeur de départ) / valeur de départ × 100. De 200 000 € à 250 000 € : +25 %.
- **FRNG** = ressources stables - emplois stables. **BFR** = actif circulant - passif circulant, sans la trésorerie. **Trésorerie nette** = FRNG - BFR.
- **Seuil de rentabilité** = charges fixes / taux de marge sur coût variable. C'est le chiffre d'affaires à partir duquel l'entreprise fait un bénéfice. En quantité : seuil / prix de vente unitaire.
- **Taux d'endettement** = dettes financières / capitaux propres × 100.
- Après chaque calcul, **une phrase** qui dit ce que le chiffre signifie pour l'entreprise.

### À retenir pour le bac
- Les finalités, le diagnostic et la caractérisation d'une décision tombent presque à chaque sujet.
- Chaque notion doit être prouvée par un fait ou un chiffre du dossier.
- Piège : confondre facteur clé de succès (exigé par le marché) et force de l'entreprise.
- Piège : confondre diversification (stratégie globale) et différenciation (stratégie de domaine).
- Un calcul sans formule ni commentaire ne rapporte qu'une partie des points.`,
      cartes: [
        { q: "Les quatre finalités d'une entreprise ?", r: "Économique (profit, pérennité), sociale (salariés), sociétale (société, territoire), environnementale (planète)." },
        { q: "Différence entre finalité et objectif ?", r: "La finalité est la raison d'être. L'objectif est un résultat précis, chiffré et daté." },
        { q: "Que regarde le diagnostic externe ?", r: "L'environnement de l'organisation, qu'elle ne contrôle pas : les opportunités et les menaces." },
        { q: "Que regarde le diagnostic interne ?", r: "L'organisation elle-même : ses forces et ses faiblesses." },
        { q: "Qu'est-ce qu'un facteur clé de succès ?", r: "Un élément que toute entreprise doit maîtriser pour réussir sur un marché donné." },
        { q: "Qu'est-ce qu'un avantage concurrentiel ?", r: "Ce qui permet à une entreprise de faire mieux que ses concurrents (coût, qualité, image…)." },
        { q: "Les critères d'une décision stratégique ?", r: "Prise par la direction, long terme, ressources importantes, difficile à inverser, risquée." },
        { q: "Décision tactique ou opérationnelle ?", r: "Tactique : met en œuvre la stratégie dans un domaine, à moyen terme. Opérationnelle : gestion courante, à court terme." },
        { q: "Les stratégies globales ?", r: "Spécialisation, diversification, intégration, recentrage, internationalisation." },
        { q: "Les stratégies de domaine ?", r: "Domination par les coûts, différenciation, focalisation." },
        { q: "Croissance interne ou externe ?", r: "Interne : l'entreprise crée elle-même ses moyens. Externe : elle rachète une autre entreprise ou fusionne avec elle." },
        { q: "Formules du FRNG, du BFR et de la trésorerie nette ?", r: "FRNG = ressources stables - emplois stables. BFR = actif circulant - passif circulant (hors trésorerie). TN = FRNG - BFR." },
        { q: "Formule du seuil de rentabilité ?", r: "Charges fixes / taux de marge sur coût variable." },
        { q: "Formule du taux d'évolution ?", r: "(Valeur d'arrivée - valeur de départ) / valeur de départ × 100." },
        { q: "Formule du taux d'endettement ?", r: "Dettes financières / capitaux propres × 100." },
        { q: "Les grandes sources de financement ?", r: "Autofinancement, capitaux propres (augmentation de capital), endettement (emprunt, crédit-bail), aides publiques." },
      ],
      quiz: [
        { q: "« Augmenter le chiffre d'affaires de 5 % d'ici 2028 » est :", choix: ["une finalité économique", "un objectif", "une valeur de l'entreprise", "un facteur clé de succès"], bonne: 1, expl: "C'est un résultat chiffré et daté : un objectif. La finalité économique est la raison d'être (le profit, la pérennité).", niv: 1 },
        { q: "Un fabricant de cuisines construit lui-même une seconde usine. Sa modalité de développement est :", choix: ["la croissance externe", "l'intégration verticale", "le partenariat", "la croissance interne"], bonne: 3, expl: "Il crée ses propres moyens de production : croissance interne. La croissance externe supposerait de racheter une entreprise.", niv: 2 },
        { q: "Pour une entreprise de ce marché, un marché en recul de 6 % est :", choix: ["une menace", "une faiblesse", "un facteur clé de succès", "une force"], bonne: 0, expl: "Il vient de l'environnement et nuit à l'activité : c'est une menace (diagnostic externe), pas une faiblesse (diagnostic interne).", niv: 2 },
        { q: "La domination par les coûts est :", choix: ["une stratégie globale", "une modalité de développement", "une stratégie de domaine", "une finalité économique"], bonne: 2, expl: "Elle dit comment gagner sur un marché donné : c'est une stratégie de domaine, comme la différenciation et la focalisation.", niv: 1 },
        { q: "Ressources stables 700 000 €, emplois stables 600 000 €, BFR 30 000 €. La trésorerie nette vaut :", choix: ["100 000 €", "130 000 €", "70 000 €", "670 000 €"], bonne: 2, expl: "FRNG = 700 000 - 600 000 = 100 000 € ; TN = FRNG - BFR = 100 000 - 30 000 = 70 000 €.", niv: 2 },
        { q: "Sur le marché des cuisines, tous les clients exigent un accompagnement personnalisé. Pour ce marché, c'est :", choix: ["un facteur clé de succès", "une force de chaque entreprise", "une opportunité", "un avantage concurrentiel"], bonne: 0, expl: "Ce que toute entreprise doit maîtriser pour réussir sur un marché est un FCS. Un avantage concurrentiel est propre à une entreprise.", niv: 3 },
        { q: "Le diagnostic interne recense :", choix: ["les opportunités et les menaces", "les finalités et les objectifs", "les clients et les fournisseurs", "les forces et les faiblesses"], bonne: 3, expl: "Interne = l'organisation elle-même : forces et faiblesses. Opportunités et menaces relèvent du diagnostic externe.", niv: 1 },
        { q: "Le chiffre d'affaires passe de 200 000 € à 250 000 €. Le taux d'évolution est de :", choix: ["+20 %", "+25 %", "+50 %", "+125 %"], bonne: 1, expl: "(250 000 - 200 000) / 200 000 × 100 = 25 %. Le piège +20 % vient d'une division par la valeur d'arrivée.", niv: 2 },
        { q: "Une PME de jouets lance une gamme de vêtements pour enfants. C'est :", choix: ["une diversification", "une spécialisation", "une intégration", "une différenciation"], bonne: 0, expl: "Elle entre dans un nouveau métier : diversification (stratégie globale). La différenciation est une stratégie de domaine.", niv: 3 },
        { q: "Charges fixes 57 000 €, taux de marge sur coût variable 0,57. Le seuil de rentabilité est de :", choix: ["32 490 €", "57 000 €", "43 000 €", "100 000 €"], bonne: 3, expl: "SR = 57 000 / 0,57 = 100 000 € de chiffre d'affaires. 32 490 vient d'une multiplication au lieu d'une division.", niv: 2 },
        { q: "Financer un investissement avec ses bénéfices mis en réserve, c'est :", choix: ["l'augmentation de capital", "l'autofinancement", "l'emprunt bancaire", "le crédit-bail"], bonne: 1, expl: "L'entreprise se finance avec ses propres ressources : autofinancement.", niv: 1 },
        { q: "Le directeur commercial planifie le recrutement de 10 vendeurs pour l'an prochain, selon le plan de développement. Décision :", choix: ["stratégique, car elle engage des salariés", "opérationnelle, car elle est courante", "tactique, car elle applique la stratégie", "stratégique, car elle est prise par un cadre"], bonne: 2, expl: "Elle met en œuvre la stratégie dans un domaine, à moyen terme, sans engager tout l'avenir : décision tactique.", niv: 3 },
      ] },
    { chapitre: 'stmg-msgn-2',
      fiche: `## Quels produits ou quels services pour quels besoins ?

### Des organisations différentes
- Une **entreprise** produit des biens et services **marchands**, vendus à un prix, dans un but **lucratif** (faire du profit).
- Une **organisation publique** (État, collectivité, hôpital public) rend surtout des services **non marchands**, gratuits ou presque, dans l'**intérêt général**.
- Une **association** poursuit un but **non lucratif** (sportif, culturel, social). Avec les coopératives et les mutuelles, elle fait partie de l'**économie sociale et solidaire**.
- Toutes ont une **finalité** (leur raison d'être) et se fixent des **objectifs** chiffrés pour l'atteindre.

### Partir des besoins
- Un **besoin** est un manque ressenti. Les organisations y répondent par une **offre**.
- Un **bien** est matériel et stockable (un vélo). Un **service** est immatériel, produit et consommé en même temps (une coupe chez le coiffeur).
- Beaucoup d'offres combinent les deux : le **produit principal** et des **services associés** (livraison, installation, garantie, service après-vente).
- Les **clients** d'une entreprise et les **usagers** d'un service public attendent un bon prix, de la qualité, de la rapidité, de l'accessibilité, et de plus en plus le respect de l'environnement.

### Créer de la valeur
- La **valeur perçue** est ce que le client pense recevoir (utilité, image, plaisir, service) comparé à ce qu'il paie. Une marque connue peut vendre plus cher un produit proche d'un autre, car sa valeur perçue est plus grande.
- Une organisation crée de la valeur quand elle répond mieux que les autres aux besoins.
- Pour mieux cibler, l'entreprise **segmente** le marché : elle découpe les clients en groupes homogènes (âge, revenu, habitudes), choisit une ou plusieurs **cibles** et adapte son offre. Exemple : une banque crée une offre réservée aux jeunes actifs.

### Différencier et renouveler l'offre
- On se différencie par la **qualité**, le **prix**, la **marque**, le **design**, les **services associés**.
- L'**innovation** renouvelle l'offre. **Innovation de produit** : un nouveau bien ou service. **Innovation de procédé** : une nouvelle façon de produire. **Incrémentale** : une amélioration d'un produit existant. **De rupture** : un changement radical des usages (le smartphone).
- La **co-création** fait participer les clients à la conception (votes, tests, avis).
- **Économie de la fonctionnalité** : vendre l'**usage** d'un bien plutôt que le bien lui-même (location de vélos au mois, abonnement à des pneus facturés au kilomètre). Le producteur a intérêt à fabriquer des biens solides et réparables.

### Les organisations publiques adaptent aussi leur offre
- Horaires élargis, démarches en ligne, guichets uniques, tarifs adaptés (réductions pour étudiants ou chômeurs).
- Leur performance se mesure par la satisfaction des usagers et la qualité du service, pas par le profit.

### Dans une étude de cas
- Repérer la **nature** de l'organisation, sa **finalité**, les **besoins** visés, l'**offre** proposée (biens, services, services associés) et ce qui la **différencie**.

### À retenir pour le bac
- Bien distinguer bien, service, produit principal et services associés.
- La valeur perçue explique pourquoi un client accepte de payer plus cher.
- Nommer précisément le type d'innovation avec un fait du dossier.
- Piège : confondre segmentation (découper la clientèle) et différenciation (se distinguer des concurrents).
- Piège : un objectif est chiffré et daté, une finalité ne l'est pas.`,
      cartes: [
        { q: "Trois grands types d'organisations ?", r: "Entreprise (but lucratif), organisation publique (intérêt général), association (but non lucratif)." },
        { q: "Différence entre bien et service ?", r: "Bien : matériel et stockable. Service : immatériel, produit et consommé en même temps." },
        { q: "Qu'est-ce qu'un service non marchand ?", r: "Un service fourni gratuitement ou à un prix très inférieur à son coût, financé surtout par des fonds publics." },
        { q: "Qu'est-ce que la valeur perçue ?", r: "Ce que le client pense recevoir (utilité, image, service) comparé au prix payé." },
        { q: "Qu'est-ce que la segmentation ?", r: "Découper un marché en groupes de clients homogènes pour adapter l'offre à chacun." },
        { q: "Qu'est-ce que des services associés ?", r: "Des services ajoutés au produit principal : livraison, installation, garantie, SAV." },
        { q: "Innovation de produit ou de procédé ?", r: "De produit : un nouveau bien ou service. De procédé : une nouvelle façon de produire." },
        { q: "Innovation incrémentale ou de rupture ?", r: "Incrémentale : amélioration d'un produit existant. De rupture : changement radical des usages (le smartphone)." },
        { q: "Qu'est-ce que la co-création ?", r: "Faire participer les clients à la conception de l'offre (votes, tests, avis)." },
        { q: "Qu'est-ce que l'économie de la fonctionnalité ?", r: "Vendre l'usage d'un bien (location, abonnement) plutôt que le bien lui-même." },
        { q: "Client ou usager ?", r: "Le client achète une offre marchande. L'usager utilise un service public." },
        { q: "Quels moyens pour différencier une offre ?", r: "Qualité, prix, marque, design, innovation, services associés." },
        { q: "Qu'est-ce que l'économie sociale et solidaire ?", r: "Les associations, coopératives, mutuelles et fondations : des organisations à but non lucratif ou à lucrativité limitée." },
        { q: "Que repérer en premier dans une étude de cas ?", r: "La nature de l'organisation, sa finalité, les besoins visés, l'offre proposée et ce qui la différencie." },
      ],
      quiz: [
        { q: "Un club de football amateur géré par des bénévoles est :", choix: ["une entreprise privée", "une organisation publique", "une société commerciale", "une association"], bonne: 3, expl: "Il poursuit un but non lucratif : c'est une association.", niv: 1 },
        { q: "Une séance chez le coiffeur est :", choix: ["un service", "un bien durable", "un bien non durable", "un produit stockable"], bonne: 0, expl: "Elle est immatérielle, produite et consommée en même temps : c'est un service.", niv: 2 },
        { q: "Une marque de vélos loue ses vélos au mois au lieu de les vendre. Elle pratique :", choix: ["la segmentation", "l'économie de la fonctionnalité", "la co-création", "l'innovation de procédé"], bonne: 1, expl: "Elle vend l'usage du vélo, pas le vélo lui-même : économie de la fonctionnalité.", niv: 2 },
        { q: "La finalité d'une organisation publique est d'abord :", choix: ["le profit", "l'intérêt général", "la part de marché", "la rémunération des associés"], bonne: 1, expl: "Elle rend des services à la collectivité : intérêt général.", niv: 1 },
        { q: "Une banque crée une offre « jeunes actifs » avec frais réduits et appli dédiée. Elle a d'abord :", choix: ["externalisé son offre", "diversifié ses métiers", "segmenté son marché", "certifié ses services"], bonne: 2, expl: "Elle a découpé sa clientèle en groupes et choisi une cible : c'est la segmentation.", niv: 2 },
        { q: "Un client paie plus cher des baskets de marque que des baskets identiques sans marque. Cela montre que :", choix: ["le prix dépend du coût de fabrication", "la qualité est forcément meilleure", "le client est mal informé", "la valeur perçue dépasse l'objet"], bonne: 3, expl: "Le client paie aussi l'image et le prestige : la valeur perçue va au-delà de l'utilité du produit.", niv: 3 },
        { q: "Une innovation de procédé porte sur :", choix: ["la façon de produire", "le produit vendu", "le logo de la marque", "la fixation du prix de vente"], bonne: 0, expl: "Elle change la méthode de production (robot, nouvelle chaîne). L'innovation de produit change ce qui est vendu.", niv: 1 },
        { q: "La livraison gratuite et l'installation proposées avec une machine à laver sont :", choix: ["le produit principal", "une innovation de rupture", "des services associés", "une segmentation"], bonne: 2, expl: "Ils s'ajoutent au produit principal pour augmenter la valeur perçue : ce sont des services associés.", niv: 2 },
        { q: "Le smartphone, qui a remplacé téléphone, appareil photo et GPS, est un exemple :", choix: ["d'innovation de rupture", "d'innovation incrémentale", "d'innovation de procédé", "d'économie de la fonctionnalité"], bonne: 0, expl: "Il a changé radicalement les usages : innovation de rupture. Une incrémentale améliore un produit existant.", niv: 3 },
        { q: "Une marque fait voter ses clients en ligne pour choisir son prochain parfum. C'est :", choix: ["de la segmentation", "de la certification", "du marketing de masse", "de la co-création"], bonne: 3, expl: "Les clients participent à la conception de l'offre : co-création.", niv: 2 },
        { q: "Un objectif se distingue d'une finalité car il est :", choix: ["moral", "permanent", "chiffré et daté", "imposé par la loi"], bonne: 2, expl: "Un objectif est un résultat précis, mesurable et daté ; la finalité est la raison d'être.", niv: 1 },
        { q: "Une mairie ouvre l'état civil en ligne. Pour les usagers, le premier intérêt est :", choix: ["une baisse des impôts locaux", "un service accessible à toute heure", "un profit pour la commune", "la fin de tout accueil physique dans la mairie"], bonne: 1, expl: "Le service devient disponible tout le temps. La mairie ne cherche pas un profit et doit garder un accueil pour ceux qui n'ont pas accès au numérique.", niv: 3 },
      ] },
    { chapitre: 'stmg-msgn-3',
      fiche: `## Quelles ressources pour produire ?

### Les types de ressources
- **Humaines** : les salariés, leurs **compétences** et leur motivation.
- **Matérielles** : bâtiments, machines, équipements, matières premières.
- **Financières** : capitaux propres, emprunts, trésorerie.
- **Immatérielles** : **savoir-faire**, **brevets**, **marques**, **image**, **données**, logiciels, fichier clients. Elles prennent de plus en plus de place et sont difficiles à copier.

### Les compétences
- Une **compétence** combine des **savoirs** (connaissances), des **savoir-faire** (pratique) et des **savoir-être** (comportements). Exemple de savoir-être : rester calme face à un client mécontent.
- Les **compétences individuelles** appartiennent à chaque salarié. Les **compétences collectives** naissent du travail en équipe.
- Les **compétences clés** (ou distinctives) sont ce que l'organisation sait faire mieux que les autres.

### Les ressources, source d'avantage concurrentiel
- Une ressource **rare**, **précieuse** et **difficile à imiter** donne un **avantage concurrentiel** durable, car les concurrents ne peuvent pas l'obtenir rapidement (un savoir-faire unique, un emplacement, une marque forte).
- Un **brevet** donne un droit exclusif d'exploiter une invention pour une durée limitée (20 ans en général).

### Se procurer les ressources
- **Investir** : investissement **matériel** (machines, bâtiments) ou **immatériel** (formation, recherche, logiciels, marque).
- **Recruter** et **former** les salariés.
- **S'approvisionner** auprès de **fournisseurs**, choisis selon le prix, la qualité, les délais, la fiabilité et de plus en plus l'impact environnemental.
- **Louer** plutôt qu'acheter : crédit-bail, logiciels en ligne par abonnement. Cela limite l'investissement de départ.

### Bien utiliser les ressources
- **Efficacité** : atteindre l'objectif. **Efficience** : l'atteindre en consommant peu de ressources. On peut être efficace sans être efficient (objectif atteint, mais avec beaucoup de gaspillage).
- **Productivité** = production / quantité de facteur utilisée. Exemple : 1 200 pièces en 400 heures donnent une productivité de 3 pièces par heure.
- **Gestion des stocks** : éviter la **rupture** (ventes perdues, clients mécontents) et le **sur-stockage** (coûts de stockage, argent immobilisé, produits périmés).

### Des ressources limitées
- Énergie, matières premières, eau : leur raréfaction et leur prix poussent à la **sobriété** et au **recyclage**.
- L'**économie circulaire** cherche à réutiliser, réparer et recycler au lieu de jeter. Exemple : une boulangerie transforme ses invendus et vend son marc de café à un agriculteur.

### À retenir pour le bac
- Classer les ressources de l'organisation dans les quatre catégories, avec des exemples du dossier.
- Identifier la ressource qui fait sa force (ou sa faiblesse) et expliquer pourquoi elle est difficile à imiter.
- Piège : efficacité et efficience ne sont pas la même chose.
- Piège : la formation est un investissement immatériel, pas une simple dépense.`,
      cartes: [
        { q: "Les quatre types de ressources ?", r: "Humaines, matérielles, financières, immatérielles." },
        { q: "Exemples de ressources immatérielles ?", r: "Savoir-faire, brevets, marques, image, données, logiciels, fichier clients." },
        { q: "Les trois composantes d'une compétence ?", r: "Savoirs, savoir-faire, savoir-être." },
        { q: "Qu'est-ce qu'une compétence clé ?", r: "Ce que l'organisation sait faire mieux que ses concurrents, difficile à imiter." },
        { q: "Compétence individuelle ou collective ?", r: "Individuelle : propre à un salarié. Collective : née du travail en équipe, plus que la somme des compétences individuelles." },
        { q: "Quand une ressource donne-t-elle un avantage concurrentiel durable ?", r: "Quand elle est rare, précieuse et difficile à imiter." },
        { q: "Qu'apporte un brevet ?", r: "Un droit exclusif d'exploiter une invention pendant une durée limitée (20 ans en général)." },
        { q: "Efficacité ou efficience ?", r: "Efficacité : atteindre l'objectif. Efficience : l'atteindre avec le moins de ressources possible." },
        { q: "Formule de la productivité ?", r: "Production / quantité de facteur utilisée (par exemple pièces par heure de travail)." },
        { q: "Critères de choix d'un fournisseur ?", r: "Prix, qualité, délais, fiabilité, impact environnemental." },
        { q: "Risques d'une mauvaise gestion des stocks ?", r: "Rupture (ventes perdues) ou sur-stockage (coûts, argent immobilisé, produits périmés)." },
        { q: "Investissement matériel ou immatériel ?", r: "Matériel : machines, bâtiments. Immatériel : formation, recherche, logiciels, marque." },
        { q: "Qu'est-ce que l'économie circulaire ?", r: "Un modèle qui réutilise, répare et recycle les ressources au lieu de les jeter." },
        { q: "Intérêt de louer plutôt qu'acheter ?", r: "Limiter l'investissement de départ et garder du matériel à jour." },
      ],
      quiz: [
        { q: "La recette secrète d'un fabricant de biscuits est une ressource :", choix: ["immatérielle", "matérielle", "financière", "humaine"], bonne: 0, expl: "C'est un savoir-faire, difficile à copier : ressource immatérielle.", niv: 1 },
        { q: "Un atelier produit 1 200 pièces en 400 heures de travail. Sa productivité horaire est de :", choix: ["0,33 pièce par heure", "800 pièces", "3 pièces par heure", "1 600 pièces par heure"], bonne: 2, expl: "Productivité = production / heures = 1 200 / 400 = 3 pièces par heure.", niv: 2 },
        { q: "Une entreprise atteint son objectif de production mais gaspille beaucoup de matière. Elle est :", choix: ["efficiente mais pas efficace", "ni efficace ni efficiente", "efficace et efficiente", "efficace mais pas efficiente"], bonne: 3, expl: "L'objectif est atteint (efficace), mais avec trop de ressources (pas efficiente).", niv: 2 },
        { q: "Savoir rester calme face à un client mécontent relève :", choix: ["du savoir", "du savoir-être", "du savoir-faire", "d'un brevet"], bonne: 1, expl: "C'est un comportement : savoir-être.", niv: 1 },
        { q: "Une rupture de stock a pour conséquence directe :", choix: ["des coûts de stockage élevés", "une trésorerie immobilisée", "une baisse des salaires", "des ventes perdues"], bonne: 3, expl: "Le client ne trouve pas le produit. Coûts de stockage et argent immobilisé sont les risques du sur-stockage.", niv: 2 },
        { q: "Pourquoi une ressource rare et difficile à imiter donne-t-elle un avantage durable ?", choix: ["Les concurrents ne peuvent pas l'obtenir vite", "Elle coûte moins cher que les autres", "L'État la protège par une loi", "Elle suffit à augmenter les ventes"], bonne: 0, expl: "L'avantage dure tant que les concurrents ne peuvent pas copier cette ressource.", niv: 3 },
        { q: "Financer la formation des salariés est un investissement :", choix: ["matériel", "immatériel", "financier", "commercial"], bonne: 1, expl: "Il développe les compétences, qui ne se touchent pas : investissement immatériel.", niv: 1 },
        { q: "Une usine en juste-à-temps hésite entre deux fournisseurs. Le critère décisif pour elle est :", choix: ["le prix d'achat", "la taille du fournisseur", "le respect des délais", "la distance au siège social"], bonne: 2, expl: "Sans stock, le moindre retard bloque la production : la fiabilité des délais est décisive.", niv: 2 },
        { q: "Une entreprise dépose un brevet sur un nouveau procédé. Elle obtient :", choix: ["un droit d'exploitation sans limite de durée", "une certification de qualité ISO 9001", "un droit exclusif pour une durée limitée", "une subvention de l'État pour innover"], bonne: 2, expl: "Le brevet protège l'invention pendant une durée limitée, en général 20 ans.", niv: 3 },
        { q: "Louer des logiciels en ligne au lieu de les acheter permet surtout :", choix: ["d'en devenir propriétaire", "de limiter l'investissement de départ", "de supprimer tout coût informatique pour l'entreprise", "d'éviter la formation des salariés"], bonne: 1, expl: "On paie un abonnement au lieu d'un gros achat : l'investissement initial est réduit.", niv: 2 },
        { q: "Les ressources se classent en humaines, matérielles, financières et :", choix: ["immatérielles", "commerciales", "juridiques", "sociales"], bonne: 0, expl: "Les quatre catégories : humaines, matérielles, financières, immatérielles.", niv: 1 },
        { q: "Une boulangerie transforme ses invendus et vend son marc de café à un agriculteur. Elle pratique :", choix: ["l'externalisation", "la diversification", "la flexibilité qualitative", "l'économie circulaire"], bonne: 3, expl: "Elle réutilise ses déchets au lieu de les jeter : économie circulaire.", niv: 3 },
      ] },
    { chapitre: 'stmg-msgn-4',
      fiche: `## Quels choix d'organisation de la production pour concilier flexibilité, qualité et maîtrise des coûts ?

### Trois exigences parfois contradictoires
- **Flexibilité** : s'adapter vite aux variations de la demande (quantités, modèles).
- **Qualité** : répondre aux attentes des clients, sans défaut.
- **Maîtrise des coûts** : produire au moindre coût pour rester compétitif.
- Produire plus de modèles peut coûter plus cher ; baisser les coûts peut nuire à la qualité. L'organisation doit trouver un équilibre.

### Deux logiques de production
- **Flux poussés** : on produit à l'avance d'après des **prévisions**, puis on vend. On profite d'**économies d'échelle**, mais on risque des **stocks invendus** si la demande baisse.
- **Flux tirés** : on produit à partir des **commandes** réelles. Moins de stocks, plus de flexibilité, mais des délais plus longs pour le client.
- Le **juste-à-temps** produit ce qui est demandé, quand c'est demandé, avec le moins de stocks possible. Il vise les « zéros » : zéro stock, zéro délai, zéro défaut, zéro panne, zéro papier.
- Le **lean management** cherche à supprimer tous les **gaspillages** (attentes, stocks, déplacements, gestes inutiles).

### Faire ou faire faire ?
- **Internaliser** : produire soi-même. On garde la maîtrise et la confidentialité.
- **Externaliser** (ou **sous-traiter**) : confier une activité à un partenaire spécialisé. Avantages : baisse des coûts, flexibilité, concentration sur son **cœur de métier**. Risques : **dépendance** envers le prestataire, perte de savoir-faire, qualité moins contrôlée.

### La flexibilité
- **Quantitative** : faire varier les volumes de travail (heures supplémentaires, intérim, CDD, annualisation du temps de travail).
- **Qualitative** (ou fonctionnelle) : salariés **polyvalents**, machines capables de produire plusieurs modèles.

### La qualité
- La **qualité totale** vise à satisfaire le client à chaque étape, avec l'implication de tous.
- **Norme** : un ensemble de règles reconnues. **ISO 9001** pour le management de la qualité, **ISO 14001** pour le management environnemental.
- **Certification** : un **organisme indépendant** atteste qu'une organisation respecte une norme. Un **label** garantit au client certaines qualités d'un produit.
- La **non-qualité** coûte cher : retours, réparations, clients perdus, image abîmée.

### Maîtriser les coûts
- **Charges fixes** : elles ne varient pas avec la production (loyer, assurance). **Charges variables** : elles varient avec elle (matières premières, énergie de production).
- **Coût de revient** = coût de production + coût de distribution. **Résultat** = prix de vente - coût de revient. Exemple : 42 - (30 + 5) = 7 € par unité.
- **Économies d'échelle** : plus on produit, plus les charges fixes sont réparties sur un grand nombre d'unités, donc le coût unitaire baisse.
- Le **seuil de rentabilité** est le chiffre d'affaires à partir duquel l'entreprise fait un bénéfice : charges fixes / taux de marge sur coût variable.

### À retenir pour le bac
- Justifier un choix d'organisation par les trois exigences : flexibilité, qualité, coûts.
- Flux poussés ou tirés : savoir les reconnaître dans un dossier et donner un avantage et un risque.
- Externalisation : avantages et risques, en lien avec le cœur de métier.
- Piège : une certification est délivrée par un organisme indépendant, pas par l'entreprise elle-même.
- Piège : intérim et heures supplémentaires relèvent de la flexibilité quantitative, la polyvalence de la flexibilité qualitative.`,
      cartes: [
        { q: "Les trois exigences de la production ?", r: "Flexibilité, qualité, maîtrise des coûts." },
        { q: "Qu'est-ce que la production en flux poussés ?", r: "Produire à l'avance d'après des prévisions, puis vendre. Risque : stocks invendus." },
        { q: "Qu'est-ce que la production en flux tirés ?", r: "Produire à partir des commandes réelles. Moins de stocks, plus de flexibilité." },
        { q: "Qu'est-ce que le juste-à-temps ?", r: "Produire ce qui est demandé, quand c'est demandé, avec le moins de stocks possible (objectif des « zéros »)." },
        { q: "Qu'est-ce que le lean management ?", r: "Une méthode qui supprime les gaspillages : attentes, stocks, déplacements, gestes inutiles." },
        { q: "Avantages de l'externalisation ?", r: "Baisse des coûts, flexibilité, concentration sur le cœur de métier." },
        { q: "Risques de l'externalisation ?", r: "Dépendance envers le prestataire, perte de savoir-faire, qualité moins contrôlée." },
        { q: "Flexibilité quantitative ?", r: "Faire varier les volumes de travail : heures supplémentaires, intérim, CDD." },
        { q: "Flexibilité qualitative ?", r: "Polyvalence des salariés et des machines, capables de changer de tâche ou de modèle." },
        { q: "Différence entre norme et certification ?", r: "La norme fixe des règles (ISO 9001). La certification atteste, par un organisme indépendant, qu'on les respecte." },
        { q: "Charges fixes et variables ?", r: "Fixes : indépendantes du volume (loyer). Variables : augmentent avec la production (matières)." },
        { q: "Formule du coût de revient ?", r: "Coût de production + coût de distribution. Résultat = prix de vente - coût de revient." },
        { q: "Qu'est-ce qu'une économie d'échelle ?", r: "La baisse du coût unitaire quand on produit plus, car les charges fixes sont réparties sur plus d'unités." },
        { q: "Qu'est-ce que le coût de la non-qualité ?", r: "Ce que coûtent les défauts : retours, réparations, clients perdus, image abîmée." },
      ],
      quiz: [
        { q: "Produire seulement à partir des commandes reçues, c'est travailler en :", choix: ["flux poussés", "production de masse", "flux tirés", "sous-traitance"], bonne: 2, expl: "La production est « tirée » par la demande réelle : flux tirés.", niv: 1 },
        { q: "Confier le nettoyage des locaux à une entreprise spécialisée, c'est :", choix: ["internaliser", "externaliser", "intégrer", "certifier"], bonne: 1, expl: "L'activité, hors du cœur de métier, est confiée à un partenaire : externalisation.", niv: 2 },
        { q: "Recourir à l'intérim pendant un pic d'activité relève de la flexibilité :", choix: ["quantitative", "qualitative", "fonctionnelle", "commerciale"], bonne: 0, expl: "On fait varier le volume de travail : flexibilité quantitative.", niv: 2 },
        { q: "La norme ISO 14001 concerne :", choix: ["le management de la qualité", "la sécurité informatique", "la responsabilité sociétale", "le management environnemental"], bonne: 3, expl: "ISO 14001 : management environnemental. ISO 9001 : management de la qualité.", niv: 1 },
        { q: "Le loyer annuel de l'usine est une charge :", choix: ["fixe", "variable", "exceptionnelle", "proportionnelle"], bonne: 0, expl: "Il ne dépend pas des quantités produites : charge fixe.", niv: 2 },
        { q: "Pourquoi le coût unitaire baisse-t-il souvent quand on produit davantage ?", choix: ["Le prix des matières premières achetées baisse", "Les salaires sont réduits", "Les charges fixes sont mieux réparties", "La qualité est moins contrôlée"], bonne: 2, expl: "Les charges fixes sont réparties sur plus d'unités : ce sont les économies d'échelle.", niv: 3 },
        { q: "Le juste-à-temps vise d'abord à :", choix: ["produire en grande série pour stocker", "augmenter les stocks de sécurité", "allonger les délais de livraison", "limiter les stocks au minimum"], bonne: 3, expl: "On produit au rythme de la demande, avec le moins de stocks possible.", niv: 1 },
        { q: "Coût de production 30 €, coût de distribution 5 €, prix de vente 42 €. Le résultat unitaire est de :", choix: ["12 €", "7 €", "37 €", "35 €"], bonne: 1, expl: "Coût de revient = 30 + 5 = 35 € ; résultat = 42 - 35 = 7 €.", niv: 2 },
        { q: "Un risque majeur de l'externalisation est :", choix: ["la hausse des charges fixes de l'entreprise", "la dépendance envers le prestataire", "la perte de flexibilité", "l'obligation de recruter"], bonne: 1, expl: "L'entreprise compte sur un partenaire qu'elle ne contrôle pas entièrement. L'externalisation apporte au contraire de la flexibilité.", niv: 3 },
        { q: "Un salarié formé pour tenir trois postes différents illustre :", choix: ["la flexibilité quantitative", "la sous-traitance", "la certification", "la flexibilité qualitative"], bonne: 3, expl: "La polyvalence permet de changer de tâche : flexibilité qualitative.", niv: 2 },
        { q: "Une certification ISO est délivrée par :", choix: ["l'entreprise elle-même", "ses clients", "un organisme indépendant", "le ministère du Travail"], bonne: 2, expl: "Un organisme extérieur et indépendant vérifie le respect de la norme.", niv: 1 },
        { q: "Une entreprise en flux poussés voit la demande chuter brutalement. Le risque principal est :", choix: ["d'accumuler des stocks invendus", "de manquer de matières premières", "de ne pas pouvoir livrer à temps", "d'être en rupture de stock"], bonne: 0, expl: "Elle a produit d'après des prévisions devenues fausses : les stocks s'accumulent.", niv: 3 },
      ] },
    { chapitre: 'stmg-msgn-5',
      fiche: `## Les transformations numériques, une chance pour la production ?

### Ce qui change dans la production
- **Automatisation** et **robotisation** : des machines réalisent les tâches répétitives, pénibles ou dangereuses. Les **cobots** (robots collaboratifs) travaillent à côté des salariés.
- **Industrie 4.0** (usine connectée) : les machines sont reliées entre elles et à internet par des **objets connectés** et des capteurs ; elles échangent des **données** en temps réel.
- **Impression 3D** (fabrication additive) : produire des pièces à la demande, en petite série, ou des prototypes.
- **Progiciel de gestion intégré (PGI ou ERP)** : un logiciel unique avec une **base de données commune** à tous les services (achats, stocks, production, ventes, comptabilité, RH). Une information saisie une seule fois est disponible partout.
- **Cloud** (informatique en nuage) : logiciels et données hébergés sur des serveurs distants, accessibles par internet.
- **Analyse des données** et **algorithmes prédictifs** : prévoir la demande, optimiser les stocks, détecter une panne avant qu'elle arrive (**maintenance prédictive**).
- **Dématérialisation** : les documents papier deviennent numériques (factures, bons de commande).

### Les avantages pour l'organisation
- **Productivité** accrue et **coûts** réduits.
- **Qualité** plus régulière et meilleure **traçabilité** (on sait d'où vient chaque pièce).
- **Flexibilité** : produire en grande série des produits adaptés à chaque client, c'est la **personnalisation de masse**. Exemple : des baskets dessinées en ligne puis fabriquées en série.
- **Réactivité** grâce à l'information en temps réel.
- **Travail facilité** : moins de tâches pénibles, outils collaboratifs, télétravail possible pour certaines fonctions.

### Les limites et les risques
- **Coût** des investissements (machines, logiciels) et de la **formation**, lourd pour une PME.
- **Emploi** : certains postes disparaissent, d'autres apparaissent (maintenance, données). Les **compétences** doivent évoluer : former est indispensable.
- **Dépendance** à l'informatique : une panne arrête tout.
- **Cyberattaques** : un **rançongiciel** chiffre les données et réclame une rançon ; l'**hameçonnage** vole des identifiants. Il faut une politique de **cybersécurité** : sauvegardes, mises à jour, mots de passe solides, authentification forte, sensibilisation des salariés.
- **Résistance au changement** : les salariés peuvent craindre pour leur emploi ou leurs habitudes. Il faut expliquer, impliquer et former.
- **Impact environnemental** : le numérique consomme de l'énergie et des métaux pour fabriquer les équipements et faire tourner les centres de données.

### Alors, une chance ?
- Oui, pour gagner en productivité, en qualité et en flexibilité, à condition d'**accompagner** les salariés et de **sécuriser** les systèmes.
- Le numérique est un **moyen**, pas une fin : il doit servir la stratégie de l'organisation.

### À retenir pour le bac
- Pour chaque outil du dossier : ce qu'il **apporte** (coûts, qualité, délais, flexibilité) et ce qu'il **exige** (investissement, formation, sécurité).
- Le PGI : une base de données unique, une saisie unique, moins d'erreurs.
- Piège : le numérique n'est pas immatériel, il a un impact environnemental réel.
- Conclure de façon nuancée : une chance, sous conditions.`,
      cartes: [
        { q: "Qu'est-ce que l'industrie 4.0 ?", r: "L'usine connectée : machines reliées entre elles et à internet, qui échangent des données en temps réel." },
        { q: "Qu'est-ce qu'un PGI (ERP) ?", r: "Un logiciel unique avec une base de données commune à tous les services de l'organisation." },
        { q: "Principal avantage d'un PGI ?", r: "Une information saisie une seule fois est disponible partout : moins d'erreurs, plus de rapidité." },
        { q: "Qu'est-ce que la maintenance prédictive ?", r: "Utiliser les données des capteurs pour prévoir une panne et intervenir avant qu'elle arrive." },
        { q: "Qu'est-ce que la personnalisation de masse ?", r: "Produire en grande série des produits adaptés à chaque client, grâce au numérique." },
        { q: "Qu'est-ce qu'un cobot ?", r: "Un robot collaboratif qui travaille à côté des salariés et les aide dans les tâches pénibles." },
        { q: "À quoi sert l'impression 3D ?", r: "Fabriquer des pièces à la demande, en petite série, ou des prototypes." },
        { q: "Qu'est-ce que le cloud ?", r: "Des logiciels et des données hébergés sur des serveurs distants, accessibles par internet." },
        { q: "Avantages du numérique pour la production ?", r: "Productivité, baisse des coûts, qualité, traçabilité, flexibilité, réactivité." },
        { q: "Risques du numérique pour la production ?", r: "Coût, évolution des emplois, dépendance, cyberattaques, résistance au changement, impact environnemental." },
        { q: "Qu'est-ce qu'un rançongiciel ?", r: "Un logiciel malveillant qui bloque ou chiffre les données et réclame une rançon." },
        { q: "Mesures de cybersécurité ?", r: "Sauvegardes, mises à jour, mots de passe solides, authentification forte, sensibilisation des salariés." },
        { q: "Comment limiter la résistance au changement ?", r: "Expliquer le projet, impliquer les salariés, les former." },
        { q: "Pourquoi le numérique pollue-t-il ?", r: "Fabrication des équipements (métaux), énergie des centres de données et des réseaux." },
      ],
      quiz: [
        { q: "Un logiciel unique qui relie achats, stocks, ventes et comptabilité dans une même base de données est :", choix: ["un tableur partagé", "un progiciel de gestion intégré", "un réseau social d'entreprise", "un logiciel antivirus"], bonne: 1, expl: "C'est un PGI (ou ERP) : une base de données commune à tous les services.", niv: 1 },
        { q: "Des capteurs signalent qu'une machine va bientôt tomber en panne. C'est :", choix: ["la maintenance prédictive", "la gestion en juste-à-temps des stocks", "la maintenance curative", "la certification"], bonne: 0, expl: "On anticipe la panne grâce aux données. La maintenance curative répare après la panne.", niv: 2 },
        { q: "Les fichiers d'une entreprise sont chiffrés et on lui réclame de l'argent pour les débloquer. Elle subit :", choix: ["un hameçonnage", "une panne matérielle", "un rançongiciel", "une fuite de brevet"], bonne: 2, expl: "Un rançongiciel bloque les données contre une rançon. D'où l'importance des sauvegardes.", niv: 2 },
        { q: "Avec un PGI, une information saisie une seule fois est :", choix: ["recopiée à la main dans chaque service", "imprimée pour être archivée", "réservée à la direction", "disponible pour tous les services"], bonne: 3, expl: "La base de données est commune : tous les services utilisent la même information, sans ressaisie.", niv: 1 },
        { q: "Un client dessine ses baskets en ligne ; elles sont ensuite fabriquées en série avec ses choix. C'est :", choix: ["la production en flux poussés", "la personnalisation de masse", "l'économie de la fonctionnalité", "la sous-traitance"], bonne: 1, expl: "Le numérique permet de produire en série des produits adaptés à chaque client.", niv: 2 },
        { q: "Un robot remplace les opérateurs d'un poste de soudure. Quelle conséquence est la plus probable ?", choix: ["La disparition de tous les emplois de l'usine", "Une baisse de la qualité des soudures", "Un besoin de salariés formés à la maintenance", "Une hausse des stocks invendus"], bonne: 2, expl: "Des tâches disparaissent, d'autres apparaissent : il faut des compétences nouvelles pour piloter et entretenir les robots.", niv: 3 },
        { q: "L'industrie 4.0 désigne :", choix: ["l'usine connectée qui échange des données", "la quatrième usine d'un groupe", "une norme de qualité européenne", "un retour à une production artisanale et locale"], bonne: 0, expl: "Machines et capteurs reliés entre eux et à internet, avec des données en temps réel.", niv: 1 },
        { q: "Pour limiter la résistance au changement lors de l'arrivée d'un PGI, il faut :", choix: ["imposer l'outil sans explication", "reporter le projet sans date", "réserver l'outil aux cadres", "former et impliquer les salariés"], bonne: 3, expl: "Expliquer, impliquer et former rassure les salariés et facilite l'adoption de l'outil.", niv: 2 },
        { q: "Pourquoi le numérique a-t-il un impact environnemental ?", choix: ["Il supprime l'usage du papier", "Il est entièrement immatériel", "Il réduit les déplacements", "Il consomme énergie et métaux"], bonne: 3, expl: "Fabrication des équipements et fonctionnement des centres de données consomment beaucoup de ressources.", niv: 3 },
        { q: "L'impression 3D est surtout utile pour :", choix: ["des pièces à la demande en petite série", "des produits en très grande série", "remplacer les salariés de bureau", "stocker les données en ligne"], bonne: 0, expl: "Elle fabrique sans moule, à l'unité : idéale pour les prototypes et les pièces rares.", niv: 2 },
        { q: "Le cloud permet surtout :", choix: ["d'imprimer des pièces en 3D", "d'accéder en ligne à ses données", "de supprimer les cyberattaques", "de certifier une entreprise"], bonne: 1, expl: "Logiciels et données sont hébergés à distance et accessibles par internet. Les risques de cyberattaque demeurent.", niv: 1 },
        { q: "Une PME hésite à créer une usine connectée. L'argument le plus solide contre ce projet est :", choix: ["une baisse de la qualité des produits fabriqués", "la perte de réactivité", "le coût de l'investissement", "la fin de la flexibilité"], bonne: 2, expl: "Le numérique améliore qualité, réactivité et flexibilité ; sa vraie limite pour une PME est le coût des machines et de la formation.", niv: 3 },
      ] },
    { chapitre: 'stmg-msgn-6',
      fiche: `## Comment assurer un fonctionnement cohérent des organisations ?

### La structure
- La **structure** est la façon dont l'organisation répartit les tâches, les responsabilités et le pouvoir. On la représente par un **organigramme**.
- **Hiérarchique** : chaque salarié n'a qu'un seul chef (unité de commandement). Simple et claire, mais lente et rigide.
- **Fonctionnelle** : découpée par **grandes fonctions** (production, ventes, finances, RH). Spécialisation, mais coordination difficile entre services.
- **Divisionnelle** : découpée par **produits**, **marchés** ou **zones géographiques** ; chaque division a ses propres services. Adaptée aux grands groupes diversifiés.
- **Matricielle** : un salarié dépend de deux responsables (un de fonction, un de projet). Souple, mais risque de conflits.
- **Centralisation** : les décisions sont prises au sommet. **Décentralisation** : elles sont déléguées vers le terrain, ce qui rend l'organisation plus réactive.

### La coordination
- Les activités doivent être **coordonnées** pour aller dans le même sens. Modes de coordination (Mintzberg) :
- **Ajustement mutuel** : communication directe entre collègues ;
- **Supervision directe** : un responsable donne les ordres ;
- **Standardisation** des procédés (règles, procédures), des résultats (objectifs à atteindre) ou des qualifications (formation commune).
- **Approche par processus** : un **processus** est une suite d'activités qui transforme des entrées en sorties ayant de la valeur pour le client (traiter une commande, de sa réception au paiement). On le décrit pour l'améliorer et supprimer les étapes inutiles.

### Le système d'information
- Le **système d'information (SI)** collecte, mémorise, traite et diffuse les **informations** utiles aux décisions.
- Une information de qualité est **fiable**, **pertinente**, **disponible au bon moment** et **sécurisée**.
- Le PGI et les outils collaboratifs (messagerie, agenda partagé, espace de stockage commun) facilitent la coordination.

### Piloter la performance
- La **performance** est la capacité à atteindre ses objectifs de façon efficiente. Elle a plusieurs dimensions : **économique** (chiffre d'affaires, résultat), **commerciale** (part de marché, satisfaction), **sociale** (absentéisme, accidents du travail), **environnementale** (émissions, déchets).
- Un **indicateur** mesure un aspect de la performance. Le **tableau de bord** réunit quelques indicateurs clés, suivis régulièrement, pour réagir vite.
- Le **contrôle de gestion** compare les **réalisations** aux **prévisions**, calcule les **écarts** et propose des actions correctives.
- **Écart** = réalisé - prévu. Exemple : chiffre d'affaires prévu 120 000 €, réalisé 108 000 € : écart de -12 000 €, soit -10 %. Pour un chiffre d'affaires, cet écart est **défavorable**.

### À retenir pour le bac
- Identifier la structure à partir d'un organigramme et donner un avantage et un inconvénient.
- Centralisation ou décentralisation : relier le choix à la réactivité et au contrôle.
- Calculer et qualifier un écart (favorable ou défavorable), puis proposer une action corrective.
- Piège : un tableau de bord ne contient que quelques indicateurs clés, pas toutes les données.
- Piège : un processus est transversal, il traverse plusieurs services.`,
      cartes: [
        { q: "Qu'est-ce qu'une structure ?", r: "La façon dont une organisation répartit tâches, responsabilités et pouvoir, représentée par un organigramme." },
        { q: "Structure hiérarchique ?", r: "Chaque salarié n'a qu'un seul chef. Simple et claire, mais rigide et lente." },
        { q: "Structure fonctionnelle ?", r: "Découpée par grandes fonctions (production, ventes, finances, RH). Spécialisation, coordination difficile." },
        { q: "Structure divisionnelle ?", r: "Découpée par produits, marchés ou zones géographiques, chaque division ayant ses propres services." },
        { q: "Structure matricielle ?", r: "Un salarié dépend de deux responsables, un de fonction et un de projet. Souple, mais risque de conflits." },
        { q: "Centralisation ou décentralisation ?", r: "Centralisation : décisions au sommet. Décentralisation : décisions déléguées au terrain, plus de réactivité." },
        { q: "Qu'est-ce que l'ajustement mutuel ?", r: "Une coordination par communication directe entre les membres d'une équipe." },
        { q: "Qu'est-ce que la standardisation des procédés ?", r: "Une coordination par des règles et des procédures que chacun applique." },
        { q: "Qu'est-ce qu'un processus ?", r: "Une suite d'activités qui transforme des entrées en sorties ayant de la valeur pour le client." },
        { q: "Rôle du système d'information ?", r: "Collecter, mémoriser, traiter et diffuser les informations utiles aux décisions." },
        { q: "Qualités d'une bonne information ?", r: "Fiable, pertinente, disponible au bon moment, sécurisée." },
        { q: "Qu'est-ce qu'un tableau de bord ?", r: "Un ensemble réduit d'indicateurs clés, suivis régulièrement pour piloter l'activité." },
        { q: "Rôle du contrôle de gestion ?", r: "Comparer réalisations et prévisions, analyser les écarts, proposer des actions correctives." },
        { q: "Comment calcule-t-on un écart ?", r: "Écart = réalisé - prévu. On le qualifie de favorable ou défavorable selon son effet sur le résultat." },
      ],
      quiz: [
        { q: "La représentation graphique de la structure d'une organisation est :", choix: ["le tableau de bord", "le processus", "un progiciel de gestion", "l'organigramme"], bonne: 3, expl: "L'organigramme montre les services et les liens hiérarchiques.", niv: 1 },
        { q: "Un groupe organisé en divisions Europe, Asie et Amérique a une structure :", choix: ["fonctionnelle", "divisionnelle", "matricielle", "hiérarchique"], bonne: 1, expl: "Le découpage se fait par zones géographiques : structure divisionnelle.", niv: 2 },
        { q: "Un ingénieur dépend à la fois de son chef de service et d'un chef de projet. Structure :", choix: ["hiérarchique", "divisionnelle", "matricielle", "fonctionnelle"], bonne: 2, expl: "Le double rattachement caractérise la structure matricielle.", niv: 2 },
        { q: "Le contrôle de gestion analyse surtout :", choix: ["les écarts entre résultats et objectifs", "les candidatures reçues", "les campagnes publicitaires", "les litiges avec les clients et les fournisseurs"], bonne: 0, expl: "Il compare réalisé et prévu, puis propose des actions correctives.", niv: 1 },
        { q: "Chiffre d'affaires prévu 120 000 €, réalisé 108 000 €. L'écart est de :", choix: ["-12 000 €, défavorable", "+12 000 €, favorable", "-10 000 €, défavorable", "+12 000 €, défavorable"], bonne: 0, expl: "Écart = réalisé - prévu = 108 000 - 120 000 = -12 000 €. Moins de ventes que prévu : écart défavorable.", niv: 2 },
        { q: "Une enseigne laisse chaque directeur de magasin fixer ses promotions locales. Avantage principal :", choix: ["une image plus homogène", "des coûts de coordination nuls entre les magasins", "un contrôle accru du siège", "une réaction plus rapide au terrain"], bonne: 3, expl: "La décentralisation rapproche la décision du terrain : plus de réactivité, mais moins d'homogénéité et de contrôle.", niv: 3 },
        { q: "Un processus est :", choix: ["un organigramme très détaillé", "un indicateur de la performance", "des activités créant de la valeur", "le logiciel de gestion intégré de l'entreprise"], bonne: 2, expl: "C'est une suite d'activités qui transforme des entrées en sorties utiles au client.", niv: 1 },
        { q: "Le taux d'absentéisme est un indicateur :", choix: ["financier", "social", "commercial", "environnemental"], bonne: 1, expl: "Il mesure un aspect de la situation des salariés : indicateur social.", niv: 2 },
        { q: "Deux collègues règlent un problème en discutant directement entre eux. Ce mode de coordination est :", choix: ["une supervision directe par le chef", "la standardisation des procédés", "la standardisation des résultats", "l'ajustement mutuel"], bonne: 3, expl: "Communication directe entre collègues, sans passer par un chef ni une règle : ajustement mutuel.", niv: 3 },
        { q: "Une information utile pour décider doit être :", choix: ["abondante et détaillée", "connue du grand public", "fiable et disponible à temps", "archivée sur papier"], bonne: 2, expl: "Une information fausse ou en retard n'aide pas à décider. Trop d'information noie l'essentiel.", niv: 2 },
        { q: "Dans une structure hiérarchique pure, chaque salarié :", choix: ["dépend de deux responsables", "n'a qu'un seul chef", "décide seul de son travail", "appartient à une division"], bonne: 1, expl: "C'est le principe d'unité de commandement.", niv: 1 },
        { q: "Un tableau de bord efficace contient :", choix: ["quelques indicateurs clés suivis souvent", "le maximum de données possibles, sans tri préalable", "les seuls chiffres financiers", "les objectifs de l'an passé"], bonne: 0, expl: "Peu d'indicateurs, bien choisis et suivis régulièrement, permettent de réagir vite. Il mêle souvent indicateurs financiers et non financiers.", niv: 3 },
      ] },
    { chapitre: 'stmg-msgn-7',
      fiche: `## Comment fédérer les acteurs de l'organisation ?

### Des acteurs aux intérêts différents
- Les acteurs internes : **dirigeants**, **managers**, **salariés**, **représentants du personnel**, et selon les cas **associés** ou **bénévoles**.
- Leurs **intérêts** peuvent diverger : les salariés veulent de bons salaires et de bonnes conditions de travail, les actionnaires des dividendes, les dirigeants la croissance. **Fédérer**, c'est les faire travailler ensemble vers un but commun.

### La culture d'organisation
- La **culture** est l'ensemble des **valeurs**, **normes**, **rites**, **symboles** et **histoires** partagés par les membres. Exemples : le tutoiement général, une fête annuelle, un logo, l'histoire du fondateur.
- Elle crée un **sentiment d'appartenance**, guide les comportements et donne une **identité** à l'organisation.
- Limite : une culture trop forte peut freiner le **changement**.

### Le management et les styles de direction
- **Manager**, c'est fixer des objectifs, organiser le travail, animer l'équipe et contrôler les résultats.
- Styles de direction (Likert) : **autoritaire** (le manager décide seul et contrôle), **paternaliste** (il décide seul mais se montre bienveillant), **consultatif** (il demande l'avis des salariés puis décide seul), **participatif** (les salariés participent réellement à la décision).
- Il n'y a pas de style idéal : il dépend de la **situation** (urgence, compétence et autonomie de l'équipe). En cas d'urgence, un style autoritaire peut être nécessaire.
- Le **leadership** est la capacité à entraîner les autres, au-delà du pouvoir que donne la place dans l'organigramme.
- **Déléguer**, c'est confier une responsabilité avec une vraie marge de décision : cela motive et développe les compétences.

### La motivation
- **Maslow** : les besoins sont hiérarchisés, des besoins physiologiques à la sécurité, l'appartenance, l'estime et l'**accomplissement de soi**.
- **Herzberg** : les **facteurs d'hygiène** (salaire, conditions de travail) évitent l'insatisfaction mais ne motivent pas durablement ; les **facteurs moteurs** (reconnaissance, responsabilités, intérêt du travail) motivent vraiment.
- **Motivation extrinsèque** : elle vient de l'extérieur (salaire, primes, avantages). **Motivation intrinsèque** : elle vient du travail lui-même (intérêt, fierté, autonomie).
- Leviers : rémunération, reconnaissance, autonomie, formation, perspectives d'évolution, **qualité de vie et des conditions de travail**, **sens** du travail.

### Fédérer en pratique
- Un **projet d'entreprise** ou une **raison d'être** qui donne du sens.
- La **communication interne** (réunions, intranet, réseau social d'entreprise).
- L'**implication** des salariés dans les décisions et la reconnaissance de leur travail.
- La gestion des **conflits** par le dialogue, la **négociation** ou la **médiation**, et le **dialogue social** avec les représentants du personnel (comité social et économique).

### À retenir pour le bac
- Identifier les éléments de culture dans un dossier (valeurs, rites, symboles) et dire à quoi ils servent.
- Caractériser un style de direction avec des faits précis.
- Relier chaque pratique RH à un facteur de motivation (Herzberg, intrinsèque ou extrinsèque).
- Piège : consultatif (on demande l'avis, le chef décide) et participatif (on décide ensemble) se confondent souvent.
- Piège : selon Herzberg, le salaire seul ne motive pas durablement.`,
      cartes: [
        { q: "Qu'est-ce que la culture d'organisation ?", r: "L'ensemble des valeurs, normes, rites, symboles et histoires partagés par les membres." },
        { q: "Rôle de la culture d'organisation ?", r: "Créer un sentiment d'appartenance, guider les comportements, donner une identité." },
        { q: "Les quatre styles de direction de Likert ?", r: "Autoritaire, paternaliste, consultatif, participatif." },
        { q: "Style consultatif ?", r: "Le manager demande l'avis des salariés, puis décide seul." },
        { q: "Style participatif ?", r: "Les salariés participent réellement à la décision." },
        { q: "Qu'est-ce que le leadership ?", r: "La capacité à entraîner et influencer les autres, au-delà du pouvoir hiérarchique." },
        { q: "Qu'est-ce que déléguer ?", r: "Confier une responsabilité avec une vraie marge de décision." },
        { q: "Pyramide de Maslow ?", r: "Besoins physiologiques, sécurité, appartenance, estime, accomplissement de soi." },
        { q: "Facteurs d'hygiène selon Herzberg ?", r: "Salaire, conditions de travail : leur absence crée l'insatisfaction, mais ils ne motivent pas durablement." },
        { q: "Facteurs moteurs selon Herzberg ?", r: "Reconnaissance, responsabilités, intérêt du travail : ils motivent vraiment." },
        { q: "Motivation intrinsèque ou extrinsèque ?", r: "Intrinsèque : vient du travail lui-même (intérêt, fierté). Extrinsèque : vient de l'extérieur (salaire, primes)." },
        { q: "Pourquoi fédérer est-il difficile ?", r: "Les acteurs ont des intérêts divergents : salaires, dividendes, croissance." },
        { q: "Quatre moyens de fédérer ?", r: "Projet d'entreprise ou raison d'être, communication interne, implication des salariés, gestion des conflits." },
        { q: "Comment gérer un conflit dans l'organisation ?", r: "Par le dialogue, la négociation, la médiation, et le dialogue social avec les représentants du personnel." },
      ],
      quiz: [
        { q: "Les valeurs, rites et symboles partagés par les salariés forment :", choix: ["la structure", "le règlement intérieur", "la culture d'organisation", "le système d'information"], bonne: 2, expl: "C'est la définition de la culture d'organisation.", niv: 1 },
        { q: "Un manager réunit son équipe, écoute les idées, puis décide seul. Son style est :", choix: ["autoritaire", "paternaliste", "participatif", "consultatif"], bonne: 3, expl: "Il consulte, mais garde la décision : style consultatif. En participatif, l'équipe décide avec lui.", niv: 2 },
        { q: "Selon Herzberg, la reconnaissance du travail accompli est un facteur :", choix: ["d'hygiène", "moteur", "financier", "d'insatisfaction"], bonne: 1, expl: "La reconnaissance motive vraiment : c'est un facteur moteur.", niv: 2 },
        { q: "Dans la pyramide de Maslow, le besoin le plus élevé est :", choix: ["l'accomplissement de soi", "l'estime", "l'appartenance", "la sécurité"], bonne: 0, expl: "Au sommet : se réaliser pleinement, l'accomplissement de soi.", niv: 1 },
        { q: "Le soir d'un incendie dans l'entrepôt, le style de direction le plus adapté est :", choix: ["participatif", "consultatif", "délégatif", "autoritaire"], bonne: 3, expl: "L'urgence impose de décider vite et de donner des consignes claires.", niv: 2 },
        { q: "Selon Herzberg, une hausse de salaire suffit-elle à motiver durablement ?", choix: ["Oui, c'est le premier facteur moteur", "Non, elle évite surtout l'insatisfaction", "Oui, surtout si elle prend la forme d'une prime annuelle", "Non, le salaire n'a pas d'effet"], bonne: 1, expl: "Le salaire est un facteur d'hygiène : il évite l'insatisfaction, mais ne motive pas durablement à lui seul.", niv: 3 },
        { q: "Le leadership repose surtout sur :", choix: ["la capacité à entraîner les autres", "le titre inscrit sur le contrat de travail du salarié", "l'ancienneté dans l'entreprise", "le niveau de salaire"], bonne: 0, expl: "Un leader entraîne par sa personnalité et sa vision, même sans être le chef.", niv: 1 },
        { q: "Chaque année, tous les salariés d'une entreprise font ensemble une journée de bénévolat. C'est :", choix: ["une prime de motivation", "une règle de la structure", "un rite de la culture d'entreprise", "un indicateur social"], bonne: 2, expl: "Une pratique collective répétée et symbolique : c'est un rite, élément de la culture.", niv: 2 },
        { q: "Une culture d'entreprise très forte peut devenir un frein quand :", choix: ["l'entreprise recrute", "l'organisation doit changer vite", "les salariés sont fidèles", "les valeurs sont partagées par l'ensemble des salariés"], bonne: 1, expl: "Les habitudes et les valeurs installées peuvent créer une résistance au changement.", niv: 3 },
        { q: "Confier à un salarié un projet avec une vraie marge de décision, c'est :", choix: ["déléguer", "centraliser", "externaliser", "standardiser"], bonne: 0, expl: "La délégation donne une responsabilité et de l'autonomie, ce qui motive.", niv: 2 },
        { q: "La motivation intrinsèque vient :", choix: ["du salaire et des primes", "des avantages en nature", "de l'intérêt du travail lui-même", "de la peur d'une sanction"], bonne: 2, expl: "Elle naît du travail lui-même. Salaire, primes et avantages relèvent de la motivation extrinsèque.", niv: 1 },
        { q: "Les actionnaires veulent plus de dividendes, les salariés de meilleurs salaires. Pour fédérer, le dirigeant doit d'abord :", choix: ["donner raison aux actionnaires", "imposer sa décision sans débat", "repousser toute discussion", "négocier un compromis"], bonne: 3, expl: "Fédérer des intérêts divergents passe par le dialogue et la négociation.", niv: 3 },
      ] },
    { chapitre: 'stmg-msgn-8',
      fiche: `## Les transformations numériques, vecteur d'amélioration de la relation avec les clients et usagers ?

### La relation client
- Objectifs : **attirer** de nouveaux clients, les **satisfaire** et les **fidéliser**. Garder un client coûte moins cher que d'en conquérir un nouveau.
- La **gestion de la relation client (GRC, ou CRM en anglais)** s'appuie sur un logiciel qui centralise les **données** sur chaque client (achats, contacts, préférences, réclamations) pour personnaliser la relation.

### Ce que le numérique apporte
- **Connaissance du client** : les données d'achat et de navigation permettent de mieux comprendre ses besoins.
- **Personnalisation** : offres, recommandations et messages adaptés à chaque client.
- **Omnicanal** : le client passe librement d'un canal à l'autre (site, application, magasin, téléphone) avec une expérience continue, sans tout réexpliquer. Exemple : le **click and collect** (commander en ligne, retirer en magasin).
- **Réactivité** : messagerie instantanée, **chatbots** (agents conversationnels automatiques) qui répondent 24 h sur 24 aux questions simples.
- **Réseaux sociaux** : dialoguer avec les clients, créer une **communauté** autour de la marque, ce qui renforce le lien et la fidélité.
- **Co-création** : les clients donnent leur avis, testent, votent pour de futurs produits.
- **Avis en ligne** : ils influencent fortement les achats.
- **Services publics** : la **e-administration** permet de faire ses démarches en ligne (impôts, carte grise), à toute heure.

### Mesurer l'efficacité
- **Taux de conversion** = nombre d'acheteurs / nombre de visiteurs × 100. Exemple : 450 commandes pour 15 000 visiteurs, soit 3 %.
- **Taux de fidélité**, **note de satisfaction**, nombre de réclamations, nombre d'abonnés, avis en ligne.

### Les limites
- **Données personnelles** : leur collecte doit respecter le **RGPD** (consentement, finalité précise, sécurité, droits des personnes). Un abus est sanctionné et nuit à la confiance.
- **Déshumanisation** : certains clients préfèrent parler à un humain ; un chatbot mal conçu agace.
- **Fracture numérique** : une partie de la population (personnes âgées, zones mal couvertes, personnes peu à l'aise) n'a pas accès aux outils ou ne les maîtrise pas. Les services publics doivent garder des **accueils physiques**.
- **E-réputation** : l'image d'une organisation sur internet. Un avis négatif ou un « bad buzz » se diffuse très vite ; il faut surveiller et répondre.

### Alors, un vecteur d'amélioration ?
- Oui, le numérique permet de mieux connaître, servir et fidéliser les clients et usagers.
- À condition de respecter leurs données, de garder une présence humaine et de n'exclure personne.

### À retenir pour le bac
- Pour chaque outil numérique du dossier, dire ce qu'il apporte à la relation (connaître, personnaliser, fidéliser, vendre).
- Citer le RGPD dès que la question parle de données personnelles.
- Savoir calculer et commenter un taux de conversion.
- Piège : le « marketing digital » est un ensemble d'outils, pas une approche de la relation client à lui seul.
- Conclure de façon nuancée, en citant au moins une limite.`,
      cartes: [
        { q: "Les trois objectifs de la relation client ?", r: "Attirer, satisfaire, fidéliser." },
        { q: "Qu'est-ce que la GRC (CRM) ?", r: "La gestion de la relation client : un logiciel centralise les données sur chaque client pour personnaliser la relation." },
        { q: "Pourquoi fidéliser ?", r: "Garder un client coûte moins cher que d'en conquérir un nouveau." },
        { q: "Qu'est-ce que l'omnicanal ?", r: "Le client passe librement d'un canal à l'autre (site, appli, magasin) avec une expérience continue." },
        { q: "Qu'est-ce que le click and collect ?", r: "Commander en ligne et retirer sa commande en magasin." },
        { q: "Qu'est-ce qu'un chatbot ?", r: "Un agent conversationnel automatique qui répond aux questions simples, à toute heure." },
        { q: "Qu'est-ce que la co-création ?", r: "Faire participer les clients à la conception de l'offre (avis, tests, votes)." },
        { q: "Qu'est-ce que l'e-administration ?", r: "Les démarches administratives réalisées en ligne (impôts, carte grise…)." },
        { q: "Formule du taux de conversion ?", r: "Nombre d'acheteurs / nombre de visiteurs × 100." },
        { q: "Qu'est-ce que la fracture numérique ?", r: "L'inégalité d'accès aux outils numériques ou de maîtrise de ces outils." },
        { q: "Qu'est-ce que l'e-réputation ?", r: "L'image d'une organisation sur internet : avis, réseaux sociaux, articles." },
        { q: "Ce qu'impose le RGPD pour les données clients ?", r: "Consentement, finalité précise, collecte limitée, sécurité, respect des droits d'accès, de rectification et d'effacement." },
        { q: "Intérêt d'une communauté sur les réseaux sociaux ?", r: "Créer un lien durable avec les clients, les faire participer et les fidéliser." },
        { q: "Limites du numérique dans la relation client ?", r: "Respect des données (RGPD), déshumanisation, fracture numérique, e-réputation fragile." },
      ],
      quiz: [
        { q: "Un logiciel qui centralise l'historique d'achat et les contacts de chaque client est un outil de :", choix: ["gestion de la relation client", "gestion de production", "contrôle de gestion", "comptabilité générale"], bonne: 0, expl: "C'est un outil de GRC (CRM) : il sert à personnaliser la relation.", niv: 1 },
        { q: "Commander sur l'appli et retirer sa commande en magasin, c'est :", choix: ["la co-création", "le lean", "la livraison à domicile", "le click and collect"], bonne: 3, expl: "Le click and collect relie le canal en ligne et le magasin : exemple d'omnicanal.", niv: 2 },
        { q: "Un site reçoit 15 000 visiteurs et enregistre 450 commandes. Le taux de conversion est de :", choix: ["30 %", "4,5 %", "3 %", "33 %"], bonne: 2, expl: "450 / 15 000 × 100 = 3 % des visiteurs ont acheté.", niv: 2 },
        { q: "Pourquoi les entreprises cherchent-elles à fidéliser leurs clients ?", choix: ["Le RGPD les y oblige", "Garder un client coûte moins cher", "La publicité en ligne est interdite", "Les prix baissent automatiquement"], bonne: 1, expl: "Conquérir un nouveau client demande beaucoup plus de dépenses que garder un client existant.", niv: 1 },
        { q: "Un service public garde des guichets malgré ses démarches en ligne. Il lutte contre :", choix: ["la concurrence", "l'e-réputation", "la fracture numérique", "le greenwashing"], bonne: 2, expl: "Tout le monde n'a pas accès au numérique ou ne le maîtrise pas.", niv: 2 },
        { q: "Une enseigne utilise les données d'achat pour envoyer des offres sans l'accord des clients. Le risque principal est :", choix: ["une baisse de productivité", "une sanction au titre du RGPD", "une hausse des stocks", "une perte de certification ISO"], bonne: 1, expl: "Le RGPD impose le consentement : l'entreprise s'expose à une sanction et à une perte de confiance.", niv: 3 },
        { q: "Un agent conversationnel automatique qui répond aux clients 24 h sur 24 est :", choix: ["un PGI", "un tableau de bord", "un label", "un chatbot"], bonne: 3, expl: "Le chatbot répond automatiquement aux questions simples.", niv: 1 },
        { q: "Un client commence sur le site, continue au téléphone et finit en magasin sans tout réexpliquer. C'est :", choix: ["l'omnicanal", "la segmentation", "la co-création", "le marketing de masse"], bonne: 0, expl: "Les canaux partagent les mêmes informations : expérience continue, c'est l'omnicanal.", niv: 2 },
        { q: "Une limite des chatbots dans la relation client est que :", choix: ["certains clients préfèrent toujours un humain", "ils ne fonctionnent qu'en journée", "leur coût dépasse celui d'un conseiller humain", "ils empêchent la vente en ligne"], bonne: 0, expl: "Pour une demande complexe ou une réclamation, beaucoup de clients veulent un interlocuteur humain.", niv: 3 },
        { q: "Un avis négatif repris des milliers de fois sur les réseaux sociaux touche d'abord :", choix: ["la structure", "le seuil de rentabilité", "l'e-réputation", "la productivité"], bonne: 2, expl: "L'image de l'organisation sur internet est atteinte : il faut surveiller et répondre.", niv: 2 },
        { q: "La e-administration désigne :", choix: ["les achats en ligne des ménages", "le télétravail des fonctionnaires", "la publicité des mairies", "les démarches publiques en ligne"], bonne: 3, expl: "Impôts, carte grise, état civil : les démarches se font en ligne, à toute heure.", niv: 1 },
        { q: "Pourquoi une marque anime-t-elle une communauté de clients sur les réseaux sociaux ?", choix: ["Pour supprimer les avis négatifs", "Pour créer un lien et fidéliser", "Pour échapper au RGPD", "Pour baisser ses prix"], bonne: 1, expl: "La communauté crée un lien durable et fait participer les clients : elle fidélise.", niv: 3 },
      ] },
    { chapitre: 'stmg-msgn-9',
      fiche: `## La communication est-elle un vecteur de performance ?

### Le schéma de la communication
- Un **émetteur** envoie un **message** à un **récepteur** par un **canal** (oral, écrit, numérique). Le message est **codé** par l'émetteur puis **décodé** par le récepteur.
- Le **bruit** désigne tout ce qui perturbe la transmission : vocabulaire mal compris, trop d'informations, canal mal choisi, préjugés, distance.
- La **rétroaction** (feed-back) est la réponse du récepteur : elle permet de vérifier que le message est bien compris.
- Une communication peut être **descendante** (de la direction vers les salariés), **ascendante** (des salariés vers la direction) ou **horizontale** (entre collègues).

### La communication interne
- Elle s'adresse aux **membres** de l'organisation.
- Objectifs : **informer** (consignes, résultats, projets), **coordonner** le travail, **motiver** et **fédérer** autour de valeurs communes, accompagner le **changement**.
- Outils : réunions, entretiens, notes de service, journal interne, affichage, **intranet**, messagerie, **réseau social d'entreprise**, séminaires.
- Une bonne communication interne réduit les rumeurs, améliore le **climat social** et l'implication des salariés.

### La communication externe
- Elle s'adresse aux **parties prenantes externes** : clients, fournisseurs, investisseurs, pouvoirs publics, grand public.
- **Communication commerciale** : faire connaître et vendre les produits (publicité, promotion, réseaux sociaux, salons).
- **Communication institutionnelle** : construire l'**image** de l'organisation, ses valeurs, ses engagements (mécénat, parrainage, rapport annuel, relations presse).
- **Communication financière** : informer les actionnaires et les marchés sur les résultats.
- Le **numérique** permet de cibler précisément, de dialoguer en direct et de mesurer les résultats (vues, clics, partages), mais un message mal maîtrisé se diffuse aussi très vite.

### Communication et performance
- Elle améliore la **performance commerciale** (notoriété, ventes, fidélité), la **performance sociale** (climat, motivation, baisse de l'absentéisme) et l'**image**.
- Indicateurs : notoriété, nombre de visites ou d'abonnés, taux de participation à une enquête interne, retombées presse.
- Mais elle **coûte** (budget publicitaire, temps passé) et ses effets sont parfois difficiles à mesurer.

### La communication de crise
- Une **crise** (produit défectueux, accident, scandale, bad buzz) menace l'image de l'organisation.
- Il faut réagir **vite**, dire la **vérité**, montrer de l'**empathie**, annoncer des **mesures concrètes** (rappel des produits, enquête) et parler d'**une seule voix** (un porte-parole).
- Se taire ou nier aggrave souvent la crise.
- La **cohérence** est essentielle : ce que l'organisation dit doit correspondre à ce qu'elle fait, sinon elle perd sa crédibilité.

### À retenir pour le bac
- Identifier émetteur, récepteur, message, canal et bruit dans une situation.
- Distinguer interne ou externe, commerciale ou institutionnelle, avec un exemple du dossier.
- Relier la communication à une dimension de la performance (commerciale, sociale, image).
- En situation de crise : rapidité, transparence, mesures concrètes, un seul porte-parole.
- Piège : la communication institutionnelle ne vend pas un produit, elle construit l'image.`,
      cartes: [
        { q: "Éléments du schéma de la communication ?", r: "Émetteur, message, canal, récepteur, bruit, rétroaction." },
        { q: "Qu'est-ce que le bruit en communication ?", r: "Tout ce qui perturbe la transmission du message : jargon, surcharge d'informations, canal inadapté, préjugés." },
        { q: "Qu'est-ce que la rétroaction ?", r: "La réponse du récepteur, qui permet de vérifier que le message a été compris." },
        { q: "Communication descendante, ascendante, horizontale ?", r: "Descendante : direction vers salariés. Ascendante : salariés vers direction. Horizontale : entre collègues." },
        { q: "Objectifs de la communication interne ?", r: "Informer, coordonner, motiver et fédérer, accompagner le changement." },
        { q: "Outils de communication interne ?", r: "Réunions, notes de service, journal interne, intranet, messagerie, réseau social d'entreprise." },
        { q: "Communication commerciale ?", r: "Faire connaître et vendre les produits : publicité, promotion, réseaux sociaux, salons." },
        { q: "Communication institutionnelle ?", r: "Construire l'image et les valeurs de l'organisation : mécénat, parrainage, relations presse." },
        { q: "Communication financière ?", r: "Informer actionnaires et investisseurs sur les résultats et les perspectives." },
        { q: "Apports du numérique à la communication ?", r: "Ciblage précis, dialogue en direct, mesure des résultats. Mais diffusion très rapide des erreurs." },
        { q: "Liens entre communication et performance ?", r: "Performance commerciale (ventes, fidélité), sociale (climat, motivation) et image." },
        { q: "Règles de la communication de crise ?", r: "Réagir vite, dire la vérité, montrer de l'empathie, annoncer des mesures, parler d'une seule voix." },
        { q: "Pourquoi la cohérence est-elle essentielle ?", r: "Si les actes contredisent le discours, l'organisation perd sa crédibilité." },
        { q: "Limites de la communication ?", r: "Elle coûte (budget, temps) et ses effets sont parfois difficiles à mesurer." },
      ],
      quiz: [
        { q: "Dans le schéma de la communication, ce qui perturbe la transmission du message s'appelle :", choix: ["le canal", "le bruit", "le codage", "la rétroaction"], bonne: 1, expl: "Le bruit : jargon, surcharge d'informations, canal inadapté…", niv: 1 },
        { q: "Une note de la direction annonce à tous les salariés le nouveau planning. La communication est :", choix: ["ascendante", "horizontale", "descendante", "institutionnelle"], bonne: 2, expl: "Elle va de la direction vers les salariés : communication descendante et interne.", niv: 2 },
        { q: "Une entreprise finance un festival de musique local pour soigner son image. C'est de la communication :", choix: ["institutionnelle", "commerciale", "financière", "interne"], bonne: 0, expl: "Elle ne vend pas un produit, elle construit l'image : communication institutionnelle (parrainage).", niv: 1 },
        { q: "Un réseau social d'entreprise sert d'abord à :", choix: ["vendre aux clients en ligne", "publier les comptes annuels", "recruter à l'étranger", "échanger entre salariés"], bonne: 3, expl: "C'est un outil de communication interne : partager informations et idées entre collègues.", niv: 2 },
        { q: "Un manager demande à chacun de reformuler les consignes. Il cherche à obtenir :", choix: ["du bruit", "une rétroaction", "un canal", "un codage"], bonne: 1, expl: "La reformulation est une rétroaction : elle vérifie que le message est compris.", niv: 2 },
        { q: "Un produit défectueux blesse des clients. La meilleure réaction de l'entreprise est de :", choix: ["attendre que l'affaire se calme sans rien dire", "nier tout problème", "accuser le fournisseur", "informer vite et rappeler les produits"], bonne: 3, expl: "Rapidité, transparence et mesures concrètes limitent la crise. Se taire ou nier l'aggrave souvent.", niv: 3 },
        { q: "Une campagne publicitaire pour un nouveau smartphone relève de la communication :", choix: ["interne", "financière", "commerciale", "institutionnelle"], bonne: 2, expl: "Elle vise à faire connaître et vendre un produit.", niv: 1 },
        { q: "Une entreprise affiche des valeurs écologiques mais pollue une rivière. Le risque principal est :", choix: ["une perte de crédibilité", "une hausse des ventes", "une baisse des coûts", "une meilleure notoriété"], bonne: 0, expl: "Le discours contredit les actes : l'image et la confiance s'effondrent.", niv: 2 },
        { q: "Une enquête interne montre que les rumeurs reculent depuis la création d'un journal interne. La performance améliorée est surtout :", choix: ["commerciale", "financière", "sociale", "environnementale"], bonne: 2, expl: "Le climat de travail s'améliore : c'est la performance sociale.", niv: 3 },
        { q: "Le canal de communication est :", choix: ["le moyen de transmission du message", "la personne qui reçoit et décode le message", "le contenu du message", "la réponse du récepteur"], bonne: 0, expl: "Oral, écrit, numérique : le canal est le support qui transporte le message.", niv: 2 },
        { q: "Les salariés font remonter leurs idées par une boîte à suggestions. C'est une communication :", choix: ["descendante", "ascendante", "externe", "commerciale"], bonne: 1, expl: "Elle va des salariés vers la direction : communication ascendante.", niv: 1 },
        { q: "Pourquoi la communication ne garantit-elle pas à elle seule la performance ?", choix: ["Elle est interdite sur internet", "Elle ne touche que les salariés", "Elle remplace à elle seule la qualité du produit", "Elle coûte et ses effets sont incertains"], bonne: 3, expl: "Une communication coûte et ne compense pas un mauvais produit ; ses effets se mesurent mal.", niv: 3 },
      ] },
    { chapitre: 'stmg-msgn-10',
      fiche: `## Les organisations peuvent-elles ignorer les questions de société ?

### Les parties prenantes
- Les **parties prenantes** sont tous les acteurs concernés par l'activité de l'organisation ou qui peuvent l'influencer.
- **Internes** : dirigeants, salariés, associés ou actionnaires.
- **Externes** : clients, fournisseurs, banques, État et collectivités, associations, riverains, médias.
- Leurs attentes sont souvent **contradictoires** : les actionnaires veulent des dividendes, les riverains moins de nuisances, les clients des prix bas, les salariés de meilleurs salaires. L'organisation doit les **concilier**.

### La responsabilité sociétale des entreprises (RSE)
- La **RSE** est la prise en compte **volontaire** des préoccupations **sociales**, **sociétales** et **environnementales** dans l'activité et dans les relations avec les parties prenantes, au-delà de ce qu'impose la loi.
- Elle repose sur les trois piliers du **développement durable** : économique, social, environnemental. La norme **ISO 26000** en donne les lignes directrices (elle ne donne pas lieu à une certification).
- Exemples : réduire ses déchets et ses émissions, acheter local, employer des personnes éloignées de l'emploi, garantir l'égalité entre femmes et hommes, payer ses fournisseurs dans les délais.

### Ce que dit la loi
- Certaines questions de société sont **imposées** par la loi : sécurité au travail, égalité professionnelle (l'**index de l'égalité femmes-hommes** pour les entreprises d'au moins 50 salariés), emploi des personnes handicapées, tri des déchets.
- **Loi PACTE (2019)** : toute société doit gérer son activité en prenant en considération ses enjeux sociaux et environnementaux. Elle peut se donner une **raison d'être** dans ses statuts, et devenir une **société à mission** si elle fixe des objectifs sociaux ou environnementaux contrôlés par un comité.
- **Devoir de vigilance (2017)** : les très grandes entreprises doivent prévenir les atteintes graves aux droits humains et à l'environnement chez leurs filiales, sous-traitants et fournisseurs.
- Les grandes entreprises publient des informations sur leurs impacts sociaux et environnementaux (**reporting extra-financier**).

### Pourquoi s'engager ?
- **Image** et **réputation** : les consommateurs et les investisseurs y sont attentifs.
- **Attractivité** pour recruter et **fidéliser** les salariés, qui cherchent du **sens**.
- **Économies** : moins d'énergie, moins de déchets, moins de matières.
- **Anticiper** les futures réglementations et limiter les **risques** (sanctions, boycott, procès).
- **Innovation** : de nouveaux produits plus responsables, de nouveaux marchés.

### Les limites
- **Coût** des engagements à court terme (matériaux plus chers, investissements).
- **Greenwashing** (écoblanchiment) : se présenter comme plus responsable qu'on ne l'est. Il est sanctionné par la loi et détruit la confiance s'il est découvert.
- Les PME ont moins de moyens pour s'engager.

### Alors, peuvent-elles les ignorer ?
- **Non** : la loi impose une partie des questions de société, et les parties prenantes attendent le reste.
- Celles qui les ignorent prennent des risques pour leur image, leur recrutement et leur activité.

### À retenir pour le bac
- Identifier les parties prenantes d'un dossier et leurs attentes, en montrant qu'elles peuvent s'opposer.
- Définir la RSE : volontaire, au-delà de la loi, trois piliers.
- Citer la loi PACTE (raison d'être, société à mission) et le devoir de vigilance.
- Montrer que la RSE peut être une source de performance, sans oublier son coût.
- Piège : une action affichée sans preuve ni changement réel est du greenwashing.`,
      cartes: [
        { q: "Qu'est-ce qu'une partie prenante ?", r: "Un acteur concerné par l'activité de l'organisation ou qui peut l'influencer." },
        { q: "Parties prenantes internes et externes ?", r: "Internes : dirigeants, salariés, associés. Externes : clients, fournisseurs, banques, État, associations, riverains, médias." },
        { q: "Définition de la RSE ?", r: "La prise en compte volontaire des préoccupations sociales, sociétales et environnementales, au-delà de la loi." },
        { q: "Les trois piliers du développement durable ?", r: "Économique, social, environnemental." },
        { q: "Qu'est-ce que la norme ISO 26000 ?", r: "Des lignes directrices sur la RSE. Elle ne donne pas lieu à une certification." },
        { q: "Qu'a apporté la loi PACTE (2019) ?", r: "La prise en compte des enjeux sociaux et environnementaux, la raison d'être et la société à mission." },
        { q: "Qu'est-ce qu'une société à mission ?", r: "Une société qui inscrit dans ses statuts une raison d'être et des objectifs sociaux ou environnementaux contrôlés." },
        { q: "Qu'est-ce que le devoir de vigilance ?", r: "L'obligation pour les très grandes entreprises de prévenir les atteintes aux droits humains et à l'environnement dans leur chaîne." },
        { q: "Qu'est-ce que le greenwashing ?", r: "Se présenter comme plus écologique ou responsable qu'on ne l'est vraiment." },
        { q: "Avantages de la RSE pour l'entreprise ?", r: "Image, attractivité, fidélisation des salariés, économies, anticipation des risques, innovation." },
        { q: "Limites de la RSE ?", r: "Coût à court terme, risque de greenwashing, moyens limités des PME." },
        { q: "Qu'est-ce que le reporting extra-financier ?", r: "La publication par les grandes entreprises d'informations sur leurs impacts sociaux et environnementaux." },
        { q: "Exemples d'obligations légales liées à la société ?", r: "Sécurité au travail, index de l'égalité femmes-hommes, emploi des personnes handicapées, tri des déchets." },
        { q: "Pourquoi les attentes des parties prenantes s'opposent-elles ?", r: "Chacune défend ses intérêts : dividendes, salaires, prix bas, moins de nuisances." },
      ],
      quiz: [
        { q: "Pour une usine, les riverains qui se plaignent du bruit sont :", choix: ["des concurrents", "des parties prenantes internes", "des sous-traitants", "des parties prenantes externes"], bonne: 3, expl: "Ils sont concernés par l'activité sans faire partie de l'organisation.", niv: 1 },
        { q: "La RSE, c'est :", choix: ["un engagement volontaire au-delà de la loi", "une taxe sur les grandes entreprises", "la norme de qualité des produits fabriqués en série", "une aide publique à l'embauche"], bonne: 0, expl: "La RSE est volontaire : elle va au-delà des obligations légales.", niv: 2 },
        { q: "Une marque affiche « 100 % écologique » sur un produit à peine modifié. C'est :", choix: ["de la RSE", "de l'écoconception", "du greenwashing", "du mécénat"], bonne: 2, expl: "Elle se présente comme plus écologique qu'elle ne l'est : greenwashing, que la loi sanctionne.", niv: 2 },
        { q: "La loi PACTE de 2019 permet à une société de devenir :", choix: ["une association", "une société à mission", "un établissement public", "une coopérative agricole"], bonne: 1, expl: "Avec une raison d'être et des objectifs sociaux ou environnementaux contrôlés par un comité.", niv: 1 },
        { q: "Les trois piliers du développement durable sont :", choix: ["économique, social et environnemental", "national, européen et mondial", "commercial, financier, humain et technologique", "public, privé et associatif"], bonne: 0, expl: "La RSE s'appuie sur ces trois piliers.", niv: 2 },
        { q: "Une entreprise remplace ses emballages plastique par du carton, plus cher. Quel argument justifie le mieux ce choix ?", choix: ["Le carton réduit ses coûts", "La loi impose le carton partout", "Le plastique est désormais interdit pour les emballages", "Son image et la fidélité des clients"], bonne: 3, expl: "Le coût augmente à court terme, mais l'image et la fidélité des clients sensibles à l'écologie peuvent compenser.", niv: 3 },
        { q: "Le devoir de vigilance oblige les très grandes entreprises à :", choix: ["surveiller chaque jour les réseaux sociaux de leurs salariés", "prévenir les atteintes chez leurs sous-traitants", "publier leurs salaires", "certifier leurs produits"], bonne: 1, expl: "Elles doivent prévenir les atteintes graves aux droits humains et à l'environnement dans leur chaîne de production.", niv: 1 },
        { q: "Les actionnaires demandent plus de dividendes et les salariés des hausses de salaire. Cela montre que :", choix: ["les parties prenantes sont toutes externes", "les salariés ne sont pas des parties prenantes", "les attentes peuvent s'opposer", "la RSE est obligatoire"], bonne: 2, expl: "Les intérêts divergent : l'organisation doit les concilier.", niv: 2 },
        { q: "La norme ISO 26000 :", choix: ["donne des lignes directrices sans certification", "certifie la qualité des produits vendus en Europe", "fixe le salaire minimum", "impose un bilan carbone"], bonne: 0, expl: "Elle guide la démarche RSE, mais on ne peut pas être certifié ISO 26000.", niv: 3 },
        { q: "Une entreprise qui ignore les questions de société s'expose surtout à :", choix: ["une hausse de sa notoriété", "une baisse de ses impôts", "un recrutement facilité", "des risques d'image et de boycott"], bonne: 3, expl: "Consommateurs, salariés et investisseurs y sont attentifs : son image et ses ventes peuvent souffrir.", niv: 2 },
        { q: "Embaucher des personnes éloignées de l'emploi relève surtout du pilier :", choix: ["économique", "environnemental", "social", "financier"], bonne: 2, expl: "C'est une action sociale et sociétale, en faveur de l'emploi.", niv: 1 },
        { q: "Peut-on dire qu'une organisation n'est **pas** concernée par les questions de société si elle respecte la loi ?", choix: ["Oui, la loi suffit toujours", "Non, ses parties prenantes attendent davantage", "Oui, la RSE est réservée aux associations et aux ONG", "Non, la RSE est imposée par la loi PACTE"], bonne: 1, expl: "La loi impose une partie ; clients, salariés et investisseurs attendent plus. La RSE reste volontaire.", niv: 3 },
      ] },
    { chapitre: 'stmg-msgn-11',
      fiche: `## L'évolution des modes de vie s'impose-t-elle aux organisations ?

### Des modes de vie qui changent
- **Démographie** : la population **vieillit** (plus de seniors), les familles se transforment (familles monoparentales, personnes seules), les jeunes sont nés avec le numérique.
- **Consommation** : achats en ligne, livraison rapide, recherche de prix bas mais aussi de produits **responsables** (local, bio, réparable, d'occasion).
- **Usage plutôt que propriété** : location, abonnement, partage (voitures, outils, logiciels).
- **Rapport au travail** : quête de **sens**, d'**équilibre** entre vie professionnelle et vie personnelle, de **télétravail** et de **flexibilité** des horaires.
- **Santé et bien-être** : alimentation plus saine, sport, attention au stress.
- **Préoccupations environnementales** : réduire ses déchets, son énergie, ses déplacements.

### Les réponses des organisations
- **Adapter l'offre** : nouveaux produits et services (produits sans sucre ajouté, offres pour seniors, réparation, seconde main), nouveaux canaux (vente en ligne, application, livraison).
- **Silver économie** : les produits et services destinés aux seniors (aide à domicile, objets adaptés, loisirs).
- **Économie collaborative** : des particuliers échangent, partagent ou louent des biens par l'intermédiaire de **plateformes** numériques (covoiturage, location entre particuliers).
- **Économie de la fonctionnalité** : vendre l'**usage** d'un bien plutôt que le bien lui-même (louer des pneus au kilomètre, abonnement à un vélo).
- **Économie circulaire** : réduire, réutiliser, réparer, recycler pour limiter les déchets.
- **Adapter l'organisation du travail** : télétravail, horaires flexibles, attention à la **qualité de vie au travail**, pour attirer et garder les salariés.
- **Services publics** : démarches en ligne, horaires élargis, services adaptés aux personnes âgées.

### Repérer les évolutions : la veille
- La **veille** consiste à surveiller en permanence l'environnement pour repérer les changements : **veille commerciale** (clients, concurrents), **technologique**, **juridique** (lois), **sociétale** (modes de vie).
- Elle permet d'**anticiper** au lieu de subir et de transformer une évolution en **opportunité**.

### S'imposer ou être anticipée ?
- Les modes de vie s'imposent souvent : une organisation qui ne s'adapte pas perd ses clients ou ses salariés.
- Mais une organisation peut aussi **anticiper**, voire **créer** de nouveaux usages par l'innovation (les smartphones ont changé nos habitudes).
- L'adaptation a un **coût** et des risques : investir sur une tendance passagère peut échouer.

### À retenir pour le bac
- Relier chaque évolution du dossier (vieillissement, numérique, écologie, télétravail) à une réponse de l'organisation.
- Distinguer économie collaborative (entre particuliers, via une plateforme) et économie de la fonctionnalité (vendre l'usage).
- La veille permet d'anticiper : c'est un outil du diagnostic externe.
- Nuancer : les modes de vie s'imposent, mais les organisations peuvent aussi les faire évoluer.
- Piège : une évolution des modes de vie est une opportunité ou une menace, pas une force.`,
      cartes: [
        { q: "Grandes évolutions des modes de vie ?", r: "Vieillissement, numérique, consommation responsable, usage plutôt que propriété, quête de sens au travail, bien-être." },
        { q: "Qu'est-ce que la silver économie ?", r: "L'ensemble des produits et services destinés aux seniors." },
        { q: "Qu'est-ce que l'économie collaborative ?", r: "Des particuliers échangent, partagent ou louent des biens par l'intermédiaire de plateformes numériques." },
        { q: "Qu'est-ce que l'économie de la fonctionnalité ?", r: "Vendre l'usage d'un bien plutôt que le bien lui-même (location, abonnement)." },
        { q: "Qu'est-ce que l'économie circulaire ?", r: "Réduire, réutiliser, réparer et recycler pour limiter les déchets et les ressources consommées." },
        { q: "Qu'est-ce que la veille ?", r: "Surveiller en permanence l'environnement pour repérer et anticiper les changements." },
        { q: "Les types de veille ?", r: "Commerciale, technologique, juridique, sociétale." },
        { q: "Comment une entreprise s'adapte-t-elle aux modes de vie ?", r: "Nouveaux produits et services, nouveaux canaux, nouvelle organisation du travail." },
        { q: "Ce que les salariés attendent davantage ?", r: "Du sens, un équilibre vie professionnelle et vie personnelle, du télétravail, des horaires flexibles." },
        { q: "Pourquoi s'adapter aux modes de vie ?", r: "Pour garder ses clients et ses salariés, et saisir de nouvelles opportunités." },
        { q: "Limite de l'adaptation aux tendances ?", r: "Elle coûte et une tendance passagère peut faire échouer l'investissement." },
        { q: "Les organisations subissent-elles seulement les modes de vie ?", r: "Non : elles peuvent les anticiper, et même en créer de nouveaux par l'innovation." },
        { q: "Une évolution des modes de vie relève de quel diagnostic ?", r: "Du diagnostic externe : c'est une opportunité ou une menace." },
      ],
      quiz: [
        { q: "Une entreprise loue des vélos par abonnement mensuel au lieu de les vendre. C'est :", choix: ["l'économie de la fonctionnalité", "l'économie collaborative", "la silver économie", "la sous-traitance"], bonne: 0, expl: "Elle vend l'usage du vélo, pas le vélo : économie de la fonctionnalité.", niv: 1 },
        { q: "Des particuliers louent leur perceuse à leurs voisins via une application. C'est :", choix: ["la silver économie", "l'économie collaborative", "le commerce de gros", "l'économie de la fonctionnalité"], bonne: 1, expl: "L'échange se fait entre particuliers grâce à une plateforme : économie collaborative.", niv: 2 },
        { q: "Une mutuelle crée une offre d'aide à domicile pour les plus de 75 ans. Elle répond :", choix: ["à la fracture numérique", "à l'économie circulaire", "au télétravail", "au vieillissement de la population"], bonne: 3, expl: "C'est une offre de la silver économie, liée au vieillissement.", niv: 1 },
        { q: "Surveiller en permanence les lois, les concurrents et les nouvelles technologies, c'est :", choix: ["le contrôle de gestion", "l'audit", "la veille", "la certification"], bonne: 2, expl: "La veille repère les changements de l'environnement pour les anticiper.", niv: 2 },
        { q: "Pour une enseigne de prêt-à-porter, l'essor de l'achat d'occasion est :", choix: ["une opportunité à saisir", "une force interne", "un facteur d'hygiène", "une faiblesse interne"], bonne: 0, expl: "Évolution de l'environnement : elle peut lancer un rayon seconde main. Ce n'est ni une force ni une faiblesse (internes).", niv: 2 },
        { q: "Une PME refuse tout télétravail alors que ses concurrents le proposent. Le risque principal est :", choix: ["une hausse de sa productivité", "la baisse de ses loyers de bureaux", "une meilleure image employeur", "des difficultés à recruter"], bonne: 3, expl: "Les candidats attendent davantage de flexibilité : elle devient moins attractive.", niv: 3 },
        { q: "Réparer, réutiliser et recycler pour limiter les déchets relève de :", choix: ["l'économie collaborative", "l'économie circulaire", "la silver économie", "la personnalisation de masse"], bonne: 1, expl: "C'est le principe de l'économie circulaire.", niv: 1 },
        { q: "Les smartphones ont changé nos façons d'acheter et de communiquer. Cela montre que les organisations :", choix: ["ne font que subir les modes de vie", "ignorent les besoins des clients", "peuvent créer de nouveaux usages", "doivent arrêter d'innover"], bonne: 2, expl: "Par l'innovation, une organisation peut faire évoluer les modes de vie, pas seulement s'y adapter.", niv: 2 },
        { q: "Un fabricant investit lourdement dans un produit lié à une mode passagère. Le risque est :", choix: ["une hausse de la demande", "le renforcement de sa veille commerciale", "une baisse de ses charges", "un investissement non rentabilisé"], bonne: 3, expl: "Si la tendance disparaît vite, l'investissement ne sera pas amorti.", niv: 3 },
        { q: "Les consommateurs recherchent de plus en plus des produits locaux. Pour un producteur régional, c'est :", choix: ["une menace", "une opportunité", "une faiblesse", "une contrainte légale"], bonne: 1, expl: "L'évolution de l'environnement lui est favorable : opportunité.", niv: 2 },
        { q: "Un service public élargit ses horaires d'ouverture le samedi. Il s'adapte :", choix: ["à la concurrence internationale", "à une obligation européenne", "aux rythmes de vie des usagers", "au vieillissement des agents"], bonne: 2, expl: "Les usagers qui travaillent en semaine peuvent venir le samedi.", niv: 1 },
        { q: "L'évolution des modes de vie s'impose-t-elle aux organisations ?", choix: ["Souvent, mais elles peuvent aussi l'anticiper", "Non, les clients suivent toujours l'offre", "Oui, et elles ne peuvent jamais l'influencer", "Non, seule la loi s'impose vraiment à elles en pratique"], bonne: 0, expl: "Ne pas s'adapter fait perdre clients et salariés, mais la veille et l'innovation permettent d'anticiper.", niv: 3 },
      ] },
    { chapitre: 'stmg-msgn-12',
      fiche: `## Les transformations numériques, de nouvelles responsabilités pour les organisations ?

### Protéger les données personnelles
- Une **donnée personnelle** est toute information qui permet d'identifier une personne, directement ou non : nom, adresse, numéro de téléphone, adresse IP, photo, données de localisation.
- Le **RGPD** (règlement général sur la protection des données, appliqué depuis 2018 dans toute l'Union européenne) impose : une **finalité** précise et légitime, la **minimisation** (ne collecter que le nécessaire), une durée de conservation limitée, la **sécurité** des données, le **consentement** quand il est nécessaire, et le respect des **droits** des personnes (accès, rectification, effacement, opposition).
- La **CNIL** contrôle en France et peut sanctionner : les amendes peuvent atteindre **4 % du chiffre d'affaires mondial** ou 20 millions d'euros.
- Un **délégué à la protection des données (DPO)** veille au respect du RGPD dans l'organisation ; il est obligatoire pour les organismes publics et pour certaines entreprises.
- En cas de fuite de données, l'organisation doit prévenir la CNIL rapidement.

### Assurer la cybersécurité
- Menaces : **hameçonnage** (faux message qui vole des identifiants), **rançongiciel**, vol de données, piratage de comptes.
- Responsabilités : protéger les données des clients et des salariés, assurer la continuité de l'activité.
- Mesures : sauvegardes régulières, mises à jour, mots de passe solides et **authentification à deux facteurs**, droits d'accès limités, **sensibilisation** des salariés (le facteur humain est souvent la faille).

### Utiliser les algorithmes et l'IA de façon responsable
- Les algorithmes et l'IA aident à décider (tri de candidatures, octroi d'un crédit, recommandations).
- Risques : **biais** (un algorithme entraîné sur des données passées peut reproduire des discriminations), manque de **transparence**, erreurs.
- Responsabilités : contrôler les résultats, garder une **décision humaine** sur les choix importants, informer les personnes. Le **règlement européen sur l'IA** encadre les usages selon leur niveau de risque.

### Limiter l'impact environnemental du numérique
- Le numérique consomme des **ressources** (métaux rares pour les équipements) et de l'**énergie** (centres de données, réseaux). La **fabrication** des appareils pèse lourd.
- **Sobriété numérique** : garder ses équipements plus longtemps, les faire réparer, acheter reconditionné, recycler, limiter les envois et le stockage inutiles.

### Protéger les salariés
- **Droit à la déconnexion** : le salarié ne doit pas être obligé de répondre aux messages en dehors de son temps de travail ; il est négocié dans les entreprises d'au moins 50 salariés.
- Encadrer le **télétravail**, limiter la **surveillance** excessive des salariés, éviter la surcharge d'informations.
- Lutter contre la **fracture numérique** : former les salariés et garder des alternatives pour les usagers.

### Alors, de nouvelles responsabilités ?
- Oui : en utilisant le numérique, l'organisation devient responsable des données qu'elle collecte, de la sécurité de ses systèmes, des effets de ses algorithmes, de son impact environnemental et des conditions de travail.
- Bien assumées, ces responsabilités renforcent la **confiance** des clients et des salariés.

### À retenir pour le bac
- RGPD : finalité, minimisation, sécurité, consentement, droits des personnes ; contrôle de la CNIL.
- Le DPO veille au respect du RGPD dans l'organisation.
- Cybersécurité : la sensibilisation des salariés est aussi importante que la technique.
- Le droit à la déconnexion protège la vie personnelle des salariés.
- Piège : le numérique n'est pas immatériel, il pollue surtout par la fabrication des équipements.`,
      cartes: [
        { q: "Qu'est-ce qu'une donnée personnelle ?", r: "Une information qui permet d'identifier une personne, directement ou non : nom, adresse, IP, photo, localisation." },
        { q: "Qu'est-ce que le RGPD ?", r: "Le règlement européen sur la protection des données personnelles, appliqué depuis 2018." },
        { q: "Principes du RGPD ?", r: "Finalité précise, minimisation, durée limitée, sécurité, consentement si nécessaire, respect des droits des personnes." },
        { q: "Droits des personnes selon le RGPD ?", r: "Accès, rectification, effacement, opposition." },
        { q: "Rôle de la CNIL ?", r: "Contrôler le respect des règles sur les données personnelles en France et sanctionner les manquements." },
        { q: "Montant maximal des amendes du RGPD ?", r: "Jusqu'à 4 % du chiffre d'affaires mondial ou 20 millions d'euros." },
        { q: "Qu'est-ce qu'un DPO ?", r: "Le délégué à la protection des données, qui veille au respect du RGPD dans l'organisation." },
        { q: "Qu'est-ce que l'hameçonnage ?", r: "Un faux message, imitant un organisme connu, qui cherche à voler des identifiants ou des données." },
        { q: "Qu'est-ce que l'authentification à deux facteurs ?", r: "Une connexion qui demande, en plus du mot de passe, une seconde preuve (code reçu sur le téléphone)." },
        { q: "Qu'est-ce qu'un biais algorithmique ?", r: "Un algorithme qui reproduit des discriminations présentes dans les données utilisées pour l'entraîner." },
        { q: "Comment utiliser l'IA de façon responsable ?", r: "Contrôler ses résultats, garder une décision humaine pour les choix importants, informer les personnes." },
        { q: "Qu'est-ce que la sobriété numérique ?", r: "Limiter l'impact du numérique : garder ses équipements, réparer, acheter reconditionné, recycler, éviter le stockage inutile." },
        { q: "Qu'est-ce que le droit à la déconnexion ?", r: "Le droit pour un salarié de ne pas répondre aux messages professionnels hors de son temps de travail." },
        { q: "Nouvelles responsabilités liées au numérique ?", r: "Données, sécurité, usage des algorithmes, impact environnemental, conditions de travail." },
      ],
      quiz: [
        { q: "En France, l'autorité qui contrôle le respect des règles sur les données personnelles est :", choix: ["l'URSSAF", "l'INPI", "la CNIL", "le ministère de l'Économie"], bonne: 2, expl: "La CNIL contrôle et peut sanctionner. L'INPI s'occupe des brevets et des marques.", niv: 1 },
        { q: "Un salarié reçoit un faux courriel de sa banque lui demandant son mot de passe. C'est :", choix: ["un hameçonnage", "un rançongiciel", "un bug informatique", "une sauvegarde"], bonne: 0, expl: "Le faux message cherche à voler des identifiants : hameçonnage.", niv: 2 },
        { q: "Une enseigne demande la date de naissance, la profession et le revenu pour une simple carte de fidélité. Elle ne respecte pas :", choix: ["le droit à la déconnexion", "la minimisation des données", "le devoir de vigilance", "la sobriété numérique"], bonne: 1, expl: "Le RGPD impose de ne collecter que les données nécessaires à la finalité.", niv: 2 },
        { q: "Le droit à la déconnexion permet au salarié :", choix: ["de travailler sans ordinateur", "de refuser le télétravail", "de supprimer ses données", "de ne pas répondre hors de ses heures"], bonne: 3, expl: "Il protège la vie personnelle face aux messages reçus hors du temps de travail.", niv: 1 },
        { q: "Un client demande à une entreprise de supprimer toutes ses données. Il exerce son droit :", choix: ["d'accès", "de rectification", "d'opposition", "d'effacement"], bonne: 3, expl: "Le RGPD prévoit un droit à l'effacement des données.", niv: 2 },
        { q: "Un logiciel de tri des CV écarte plus souvent les femmes, car il a appris sur les recrutements passés. C'est :", choix: ["une cyberattaque", "un biais algorithmique", "le résultat d'une erreur de saisie", "une fracture numérique"], bonne: 1, expl: "L'algorithme reproduit les discriminations contenues dans ses données : il faut contrôler ses résultats et garder une décision humaine.", niv: 3 },
        { q: "Qui veille au respect du RGPD à l'intérieur d'une organisation ?", choix: ["le délégué à la protection des données", "le directeur commercial", "le comptable", "l'expert-comptable externe"], bonne: 0, expl: "C'est le rôle du DPO.", niv: 1 },
        { q: "La part la plus lourde de l'impact environnemental du numérique vient souvent :", choix: ["des courriels envoyés", "le stockage des mots de passe en ligne", "de la fabrication des équipements", "des sauvegardes"], bonne: 2, expl: "Extraire les métaux et fabriquer les appareils pèse lourd : d'où l'intérêt de les garder longtemps.", niv: 2 },
        { q: "Une entreprise subit une fuite des données de ses clients. Elle doit :", choix: ["prévenir rapidement la CNIL", "attendre la fin de l'enquête", "supprimer les preuves", "changer de nom commercial"], bonne: 0, expl: "Le RGPD impose de notifier la fuite à la CNIL dans un délai court.", niv: 3 },
        { q: "La mesure la plus utile contre l'hameçonnage est :", choix: ["acheter plus d'ordinateurs", "former et sensibiliser les salariés", "supprimer l'accès à internet", "imprimer les courriels"], bonne: 1, expl: "Le facteur humain est souvent la faille : des salariés formés repèrent les faux messages.", niv: 2 },
        { q: "Une sanction prononcée au titre du RGPD peut atteindre :", choix: ["1 000 € par salarié", "le montant du capital social", "4 % du chiffre d'affaires mondial", "le bénéfice d'une année"], bonne: 2, expl: "Jusqu'à 4 % du chiffre d'affaires mondial ou 20 millions d'euros.", niv: 1 },
        { q: "Une banque laisse un algorithme refuser seul les demandes de crédit. Quelle responsabilité néglige-t-elle ?", choix: ["La sobriété numérique", "Le droit à la déconnexion", "La communication financière auprès des actionnaires", "Le contrôle humain des décisions"], bonne: 3, expl: "Pour une décision importante, une personne doit pouvoir vérifier et corriger ce que propose l'algorithme.", niv: 3 },
      ] },
    { chapitre: 'stmg-msgn-13',
      fiche: `## L'organisation est-elle un acteur de son écosystème ?

### Qu'est-ce qu'un écosystème ?
- L'**écosystème** d'une organisation est l'ensemble des acteurs avec lesquels elle est en relation et dont elle dépend : clients, fournisseurs, sous-traitants, partenaires, concurrents, collectivités, centres de recherche, banques.
- L'organisation n'est pas isolée : elle **subit** son environnement, mais elle peut aussi **agir** sur lui en nouant des relations.

### Les formes de relations
- **Sous-traitance** : une entreprise (le donneur d'ordre) confie à une autre la réalisation d'une partie de sa production, selon ses exigences. Elle se recentre sur son métier, mais devient **dépendante** du sous-traitant (et inversement).
- **Externalisation** : confier une activité de soutien à un prestataire (nettoyage, informatique, paie).
- **Partenariat** et **alliance** : des entreprises coopèrent sur un projet commun en restant indépendantes (recherche, distribution).
- **Coopétition** : des concurrents coopèrent sur un point précis (recherche, achats groupés, plateforme commune) tout en restant concurrents sur le reste.
- **Franchise** : le **franchiseur** apporte sa marque, son savoir-faire et son assistance ; le **franchisé**, commerçant indépendant, paie un droit d'entrée et des redevances. Le réseau grandit vite avec peu de capitaux du franchiseur.
- **Filière** : l'ensemble des étapes, de la matière première au produit fini, et des entreprises qui les réalisent.

### L'ancrage territorial
- Les **pôles de compétitivité** et les **clusters** rassemblent sur un territoire des entreprises, des centres de recherche et des écoles autour d'un même domaine pour **innover** ensemble.
- Les **collectivités** (régions, communes) attirent les entreprises par des aides, des infrastructures, des zones d'activité.
- L'organisation contribue au territoire : **emplois**, impôts locaux, achats auprès des entreprises locales, partenariats avec les écoles et les associations.

### Le numérique et les plateformes
- Les **plateformes numériques** mettent en relation des offreurs et des demandeurs (places de marché, réservation, livraison). Elles créent un écosystème autour d'elles.
- Avantage : accès à de nombreux clients. Limite : **dépendance** et commissions élevées.

### Pourquoi coopérer ?
- **Partager** les coûts et les risques, en particulier pour la recherche.
- Accéder à des **compétences**, des technologies ou des marchés nouveaux.
- **Innover** plus vite.
- Gagner en **poids** face à de plus gros concurrents.
- Limites : **dépendance**, perte d'une partie du contrôle, risque de voir son savoir-faire copié, conflits entre partenaires.

### Alors, un acteur de son écosystème ?
- Oui : l'organisation choisit ses partenaires, construit des réseaux, participe à la vie de son territoire et peut faire évoluer sa filière.
- Mais elle reste aussi dépendante des autres : coopérer suppose de la **confiance** et un **équilibre** des pouvoirs.

### À retenir pour le bac
- Identifier dans le dossier les acteurs de l'écosystème et la nature de chaque relation.
- Distinguer sous-traitance (production pour un donneur d'ordre), partenariat, coopétition et franchise.
- Donner un avantage et une limite de chaque forme de coopération.
- Montrer le rôle de l'organisation sur son territoire (emploi, achats locaux).
- Piège : la coopétition associe des concurrents ; un partenariat peut associer des entreprises qui ne se concurrencent pas.`,
      cartes: [
        { q: "Qu'est-ce que l'écosystème d'une organisation ?", r: "L'ensemble des acteurs avec lesquels elle est en relation et dont elle dépend : clients, fournisseurs, partenaires, concurrents, collectivités." },
        { q: "Qu'est-ce que la sous-traitance ?", r: "Un donneur d'ordre confie à une autre entreprise la réalisation d'une partie de sa production, selon ses exigences." },
        { q: "Avantage et limite de la sous-traitance ?", r: "Se recentrer sur son métier et réduire ses coûts, mais devenir dépendant du sous-traitant." },
        { q: "Qu'est-ce que l'externalisation ?", r: "Confier une activité de soutien (nettoyage, informatique, paie) à un prestataire extérieur." },
        { q: "Qu'est-ce qu'un partenariat ?", r: "Une coopération entre organisations indépendantes sur un projet commun." },
        { q: "Qu'est-ce que la coopétition ?", r: "Des concurrents qui coopèrent sur un point précis tout en restant concurrents sur le reste." },
        { q: "Qu'est-ce que la franchise ?", r: "Le franchiseur apporte marque, savoir-faire et assistance ; le franchisé indépendant paie un droit d'entrée et des redevances." },
        { q: "Intérêt de la franchise pour le franchiseur ?", r: "Développer vite son réseau avec peu de capitaux." },
        { q: "Qu'est-ce qu'une filière ?", r: "L'ensemble des étapes de la matière première au produit fini, et des entreprises qui les réalisent." },
        { q: "Qu'est-ce qu'un pôle de compétitivité ?", r: "Un regroupement, sur un territoire, d'entreprises, de centres de recherche et d'écoles pour innover ensemble." },
        { q: "Rôle d'une organisation sur son territoire ?", r: "Emplois, impôts locaux, achats auprès d'entreprises locales, partenariats avec écoles et associations." },
        { q: "Avantages de la coopération ?", r: "Partager coûts et risques, accéder à des compétences et marchés, innover plus vite, gagner en poids." },
        { q: "Limites de la coopération ?", r: "Dépendance, perte de contrôle, risque de copie du savoir-faire, conflits entre partenaires." },
        { q: "Avantage et limite d'une plateforme numérique ?", r: "Accès à de nombreux clients, mais dépendance et commissions élevées." },
      ],
      quiz: [
        { q: "Un constructeur automobile confie la fabrication de ses sièges à une autre entreprise, selon son cahier des charges. C'est :", choix: ["une franchise", "de la sous-traitance", "de la coopétition", "une fusion"], bonne: 1, expl: "Le constructeur est donneur d'ordre ; l'autre entreprise produit pour lui : sous-traitance.", niv: 1 },
        { q: "Deux constructeurs concurrents développent ensemble une batterie, puis vendent chacun leurs voitures. C'est :", choix: ["une intégration", "une franchise", "l'externalisation de la recherche", "de la coopétition"], bonne: 3, expl: "Des concurrents coopèrent sur un point précis et restent concurrents sur le reste.", niv: 2 },
        { q: "Un commerçant indépendant ouvre une boutique sous une marque connue et paie des redevances. Il est :", choix: ["sous-traitant", "salarié de la marque", "franchisé", "donneur d'ordre"], bonne: 2, expl: "Il est franchisé : indépendant, il utilise la marque et le savoir-faire du franchiseur contre redevances.", niv: 1 },
        { q: "Un pôle de compétitivité réunit surtout :", choix: ["entreprises, recherche et écoles d'un territoire", "les filiales d'un même groupe", "les clients d'une marque", "des syndicats et des fédérations d'une même branche"], bonne: 0, expl: "Ils se regroupent autour d'un domaine pour innover ensemble.", niv: 2 },
        { q: "Une PME réalise 70 % de son chiffre d'affaires avec un seul donneur d'ordre. Son principal risque est :", choix: ["la surproduction", "la dépendance", "le greenwashing", "la fracture numérique"], bonne: 1, expl: "Si ce client part ou impose ses prix, la PME est en grand danger : c'est la dépendance.", niv: 2 },
        { q: "Confier la paie de ses salariés à un cabinet spécialisé, c'est :", choix: ["l'externalisation", "la coopétition", "la franchise", "l'intégration"], bonne: 0, expl: "La paie est une activité de soutien confiée à un prestataire : externalisation.", niv: 3 },
        { q: "Pour un franchiseur, le principal intérêt de la franchise est de :", choix: ["contrôler seul chaque magasin", "toucher toutes les recettes", "grandir vite avec peu de capitaux", "supprimer les redevances"], bonne: 2, expl: "Les franchisés investissent dans leurs magasins : le réseau grandit sans gros capitaux du franchiseur.", niv: 2 },
        { q: "Une entreprise achète ses matières premières à des producteurs de sa région. Elle contribue surtout :", choix: ["à la coopétition", "à la mondialisation", "à son endettement", "à l'économie de son territoire"], bonne: 3, expl: "Ses achats font vivre des entreprises et des emplois locaux : ancrage territorial.", niv: 1 },
        { q: "Un restaurant vend surtout via une plateforme de livraison. La limite principale de ce choix est :", choix: ["des commissions élevées et une dépendance", "une perte totale de visibilité", "l'interdiction de servir des clients sur place", "une baisse forcée de la qualité"], bonne: 0, expl: "La plateforme apporte des clients mais prend une commission et impose ses règles.", niv: 3 },
        { q: "L'ensemble des étapes allant du coton au tee-shirt vendu en magasin forme :", choix: ["un pôle de compétitivité", "un écosystème numérique", "une filière", "une franchise"], bonne: 2, expl: "La filière regroupe les étapes de la matière première au produit fini.", niv: 2 },
        { q: "Une organisation agit sur son écosystème quand elle :", choix: ["refuse tout partenaire", "choisit ses partenaires et ses réseaux", "subit sans réagir la pression de ses concurrents", "ignore son territoire"], bonne: 1, expl: "Elle n'est pas passive : elle noue des relations et participe à son territoire.", niv: 1 },
        { q: "Pourquoi deux laboratoires concurrents partagent-ils leurs recherches sur un vaccin ?", choix: ["Pour fusionner sans le dire", "Pour éviter de déposer un brevet chacun de son côté", "Pour supprimer la concurrence", "Pour partager des coûts et des risques élevés"], bonne: 3, expl: "La recherche coûte cher et peut échouer : coopérer partage coûts et risques.", niv: 3 },
      ] },
  ],

  methode: [
    { id: 'stmg-msgn-m1', mat: 'stmg-msgn', titre: "Caractériser une décision",
      formules: ["Caractériser la décision prise par le dirigeant", "Montrer que cette décision est stratégique", "Qualifier la décision présentée dans le document"],
      vu: ["Présente dans presque tous les sujets récents, souvent dès le premier dossier"], pts: "2 à 3 points",
      attendu: "Donner le type de décision (stratégique, tactique ou opérationnelle), puis le prouver avec plusieurs critères (qui décide, horizon, ressources engagées, réversibilité, risque), chacun appuyé sur un fait précis du dossier.",
      etapes: ["Repérer la décision exacte dans le dossier", "Annoncer son type dès la première phrase", "Prendre trois ou quatre critères : décideur, horizon de temps, ressources engagées, réversibilité, risque", "Pour chaque critère, citer un fait ou un chiffre du dossier", "Conclure en une phrase"],
      mots: ["décision stratégique", "long terme", "direction générale", "ressources importantes", "difficilement réversible", "risque", "incertitude"],
      pieges: ["Donner le type sans aucun critère", "Citer des critères sans les relier au dossier", "Dire « stratégique » parce que la décision est importante, sans preuve", "Confondre décision tactique et opérationnelle"],
      cas: "La dirigeante d'une PME fictive de cosmétiques décide d'ouvrir une usine au Portugal, pour 2,4 millions d'euros financés par un emprunt sur 10 ans. L'usine doit produire pour les marchés espagnol et portugais à partir de 2028.",
      question: "Caractérisez la décision prise par la dirigeante.",
      modele: "Il s'agit d'une décision stratégique. Elle est prise par la dirigeante elle-même, au sommet de l'organisation. Elle engage l'entreprise sur le long terme : l'usine produira à partir de 2028 et l'emprunt court sur 10 ans. Elle mobilise des ressources importantes (2,4 millions d'euros). Elle est difficile à inverser, car une usine construite se revend mal. Enfin, elle est risquée : l'entreprise ne sait pas encore si les marchés espagnol et portugais achèteront assez. C'est donc bien une décision stratégique.",
      grille: ["Le type de décision est annoncé", "Au moins trois critères sont utilisés", "Chaque critère est prouvé par un fait du dossier", "Le vocabulaire (long terme, réversibilité, risque) est employé", "Une phrase de conclusion termine la réponse"] },

    { id: 'stmg-msgn-m2', mat: 'stmg-msgn', titre: "Réaliser un diagnostic stratégique",
      formules: ["Réalisez le diagnostic stratégique de l'entreprise", "Identifiez les opportunités et les menaces", "Repérez les forces et les faiblesses de l'organisation"],
      vu: ["Très fréquente : diagnostic complet, ou seulement interne ou externe"], pts: "3 à 4 points",
      attendu: "Classer les éléments du dossier en forces et faiblesses (interne) et en opportunités et menaces (externe), chacun justifié par un fait, sans les mélanger, puis une phrase qui dit ce que le diagnostic montre.",
      etapes: ["Lire le dossier en soulignant ce qui vient de l'entreprise et ce qui vient de l'environnement", "Classer : forces, faiblesses, opportunités, menaces", "Écrire chaque élément avec le fait ou le chiffre qui le prouve", "Présenter en quatre petits paragraphes ou quatre listes", "Conclure : ce que l'entreprise doit faire pour profiter des opportunités et se protéger des menaces"],
      mots: ["diagnostic interne", "diagnostic externe", "force", "faiblesse", "opportunité", "menace", "facteur clé de succès", "avantage concurrentiel"],
      pieges: ["Mettre une menace dans les faiblesses (la menace vient de l'extérieur)", "Recopier le dossier sans classer", "Oublier de justifier chaque élément", "Oublier la phrase de conclusion"],
      cas: "Une biscuiterie fictive de Bretagne emploie 40 salariés et a une recette reconnue depuis 1950. Ses machines ont 25 ans et tombent souvent en panne. Les ventes de biscuits régionaux progressent de 4 % par an. Deux grandes marques nationales lancent des biscuits « façon artisanale » à prix bas.",
      question: "Réalisez le diagnostic stratégique de la biscuiterie.",
      modele: "Diagnostic interne. Force : un savoir-faire reconnu depuis 1950, qui donne une image d'authenticité. Faiblesse : un outil de production vieillissant (machines de 25 ans, pannes fréquentes), qui augmente les coûts et les retards. Diagnostic externe. Opportunité : le marché des biscuits régionaux progresse de 4 % par an. Menace : l'arrivée de grandes marques à prix bas, qui peuvent attirer ses clients. Conclusion : la biscuiterie peut profiter de la croissance du marché grâce à son image, à condition de moderniser ses machines.",
      grille: ["Interne et externe sont séparés", "Les quatre catégories sont présentes", "Chaque élément est justifié par un fait du dossier", "Aucune confusion entre faiblesse et menace", "Une conclusion relie le diagnostic à une action"] },

    { id: 'stmg-msgn-m3', mat: 'stmg-msgn', titre: "Identifier les finalités d'une organisation",
      formules: ["Identifiez les finalités de l'organisation", "Montrez que l'entreprise poursuit d'autres finalités que le profit", "Repérez les finalités poursuivies par l'association"],
      vu: ["Fréquente au début du premier dossier"], pts: "1 à 2 points",
      attendu: "Nommer chaque finalité (économique, sociale, sociétale, environnementale) en la reliant à un fait précis du dossier, sans la confondre avec un objectif chiffré.",
      etapes: ["Repérer le type d'organisation : entreprise, association, organisation publique", "Chercher dans le dossier ce qu'elle vise pour elle, ses salariés, la société, la planète", "Nommer chaque finalité", "Justifier chacune par un fait"],
      mots: ["finalité économique", "profit", "pérennité", "finalité sociale", "finalité sociétale", "finalité environnementale", "intérêt général", "but non lucratif"],
      pieges: ["Confondre finalité et objectif chiffré", "Donner une finalité économique de profit à une association", "Citer des finalités sans exemple du dossier"],
      cas: "Une coopérative fictive de fabrication de meubles verse une partie de ses bénéfices à ses salariés, forme chaque année des jeunes sans diplôme de son quartier et utilise uniquement du bois de forêts gérées durablement.",
      question: "Identifiez les finalités poursuivies par cette coopérative.",
      modele: "Finalité économique : réaliser des bénéfices pour assurer sa pérennité, puisqu'elle en verse une partie à ses salariés. Finalité sociale : le bien-être de ses salariés, qui reçoivent une part des bénéfices. Finalité sociétale : contribuer à son territoire en formant des jeunes sans diplôme du quartier. Finalité environnementale : limiter son impact en n'utilisant que du bois de forêts gérées durablement.",
      grille: ["Au moins trois finalités sont nommées", "Chaque finalité est justifiée par un fait", "Les finalités ne sont pas confondues avec des objectifs"] },

    { id: 'stmg-msgn-m4', mat: 'stmg-msgn', titre: "Calculer et commenter un indicateur financier",
      formules: ["Calculez le fonds de roulement, le besoin en fonds de roulement et la trésorerie nette", "Calculez le seuil de rentabilité et commentez", "Calculez le taux d'évolution du chiffre d'affaires"],
      vu: ["Présente dans la plupart des sujets : taux d'évolution, FRNG, BFR, trésorerie, seuil de rentabilité, endettement"], pts: "2 à 4 points",
      attendu: "Écrire la formule, poser le calcul avec les chiffres du dossier, donner le résultat avec son unité, puis une ou deux phrases qui disent ce que le résultat signifie pour l'organisation.",
      etapes: ["Écrire la formule en toutes lettres", "Remplacer par les chiffres du dossier", "Donner le résultat avec l'unité (€, %, unités)", "Interpréter : bon ou mauvais signe, et pourquoi", "Relier au problème posé (financer un projet, être rentable)"],
      mots: ["fonds de roulement net global", "besoin en fonds de roulement", "trésorerie nette", "seuil de rentabilité", "marge sur coût variable", "taux d'endettement", "taux d'évolution"],
      pieges: ["Donner un chiffre sans formule ni unité", "Diviser par la valeur d'arrivée dans un taux d'évolution", "Multiplier au lieu de diviser pour le seuil", "Oublier le commentaire, qui rapporte une bonne partie des points"],
      cas: "Une entreprise fictive de vente de matériel de jardin a des charges fixes de 84 000 € par an et un taux de marge sur coût variable de 35 %. Son chiffre d'affaires prévu est de 300 000 €.",
      question: "Calculez le seuil de rentabilité et dites si l'entreprise sera rentable.",
      modele: "Seuil de rentabilité = charges fixes / taux de marge sur coût variable = 84 000 / 0,35 = 240 000 €. Il faut réaliser 240 000 € de chiffre d'affaires pour couvrir toutes les charges. Le chiffre d'affaires prévu (300 000 €) dépasse le seuil de 60 000 € : l'entreprise devrait réaliser un bénéfice, avec une marge de sécurité de 60 000 €.",
      grille: ["La formule est écrite", "Le calcul est posé avec les chiffres du dossier", "Le résultat est juste et porte son unité", "Le résultat est comparé au chiffre d'affaires prévu", "Une phrase de conclusion répond à la question"] },

    { id: 'stmg-msgn-m5', mat: 'stmg-msgn', titre: "Repérer une stratégie et une modalité de développement",
      formules: ["Identifiez la stratégie adoptée par l'entreprise", "Caractérisez la modalité de croissance choisie", "Justifiez le choix stratégique de l'entreprise"],
      vu: ["Fréquente, souvent liée à la décision du dossier"], pts: "2 à 3 points",
      attendu: "Nommer précisément la stratégie (globale ou de domaine) et la modalité de développement, les définir en une phrase, les prouver par le dossier, puis expliquer l'intérêt de ce choix au regard du diagnostic.",
      etapes: ["Dire s'il s'agit d'une stratégie globale (quels métiers) ou de domaine (comment gagner sur un marché)", "Nommer la stratégie : spécialisation, diversification, intégration, domination par les coûts, différenciation, focalisation", "Nommer la modalité : croissance interne, croissance externe, partenariat", "Prouver chaque nom par un fait", "Expliquer pourquoi ce choix est cohérent avec les forces et les opportunités"],
      mots: ["stratégie globale", "stratégie de domaine", "diversification", "différenciation", "domination par les coûts", "croissance interne", "croissance externe", "partenariat"],
      pieges: ["Confondre diversification et différenciation", "Nommer la stratégie sans la justifier", "Oublier le lien avec le diagnostic"],
      cas: "Une chaîne fictive de boulangeries rachète une entreprise de livraison de repas pour proposer aussi des plateaux-repas aux entreprises de sa ville.",
      question: "Identifiez la stratégie et la modalité de développement choisies.",
      modele: "La chaîne adopte une stratégie globale de diversification : elle entre dans un nouveau métier, la livraison de plateaux-repas aux entreprises, en plus de la boulangerie. La modalité de développement est la croissance externe, puisqu'elle rachète une entreprise existante. Ce choix lui permet d'entrer vite sur ce marché, avec des savoir-faire et des clients déjà en place.",
      grille: ["La stratégie est nommée et classée (globale ou de domaine)", "La modalité de développement est nommée", "Chaque notion est prouvée par le dossier", "L'intérêt du choix est expliqué"] },

    { id: 'stmg-msgn-m6', mat: 'stmg-msgn', titre: "Rédiger une argumentation sur une question de gestion",
      formules: ["Dans une argumentation d'une quinzaine de lignes, vous répondrez à la question suivante…", "En vous appuyant sur le dossier et sur vos connaissances, montrez que…"],
      vu: ["Présente en fin de sujet dans la plupart des épreuves récentes"], pts: "4 à 5 points",
      attendu: "Un court texte organisé : une introduction qui définit les mots clés et pose la question, deux parties qui donnent des arguments nuancés appuyés sur des notions du cours et des exemples du dossier, puis une conclusion qui répond clairement.",
      etapes: ["Définir les mots clés de la question", "Chercher deux ou trois arguments pour, et un ou deux arguments qui nuancent", "Illustrer chaque argument par un fait du dossier ou un exemple connu", "Rédiger avec des connecteurs (d'abord, de plus, cependant, ainsi)", "Conclure en répondant à la question posée"],
      mots: ["En premier lieu", "De plus", "Cependant", "Ainsi", "En conclusion", "notions du programme du chapitre concerné"],
      pieges: ["Faire une liste à puces au lieu d'un texte", "Ne parler que du dossier, sans notions du cours", "Ne pas répondre à la question en conclusion", "Écrire trois lignes ou deux pages au lieu d'une quinzaine de lignes"],
      cas: "Question posée : les transformations numériques sont-elles une chance pour la production des organisations ?",
      question: "Rédigez une argumentation d'une quinzaine de lignes.",
      modele: "Les transformations numériques désignent l'arrivée d'outils comme les robots, les objets connectés ou les progiciels de gestion intégrés. Sont-elles une chance pour la production ? En premier lieu, elles augmentent la productivité et baissent les coûts : un robot travaille sans pause et réduit les tâches pénibles. De plus, elles améliorent la qualité et la flexibilité : la maintenance prédictive évite les pannes et la personnalisation de masse permet de produire en série des produits adaptés à chaque client. Un PGI partage l'information entre tous les services et limite les erreurs. Cependant, ces outils coûtent cher, surtout pour une PME, et exigent de former les salariés, dont certains craignent pour leur emploi. Ils exposent aussi aux cyberattaques et consomment de l'énergie et des métaux. Ainsi, le numérique est une chance pour la production, à condition d'accompagner les salariés, de sécuriser les systèmes et de choisir des investissements adaptés à la taille de l'organisation.",
      grille: ["Les mots clés sont définis en introduction", "Au moins deux arguments sont appuyés sur des notions du cours", "Les arguments sont illustrés par des exemples", "Une nuance est apportée", "La conclusion répond à la question posée"] },
  ],

  sujets: [
    { id: 'stmg-msgn-s1', matiere: 'stmg-msgn', titre: "Sujet d'entraînement : Vélos Alcyon (entreprise fictive)", duree: 240,
      enonce: `Sujet d'entraînement inventé pour réviser. L'entreprise, les personnes et tous les chiffres sont fictifs. Calculatrice autorisée. Le sujet comporte trois dossiers indépendants.

PRÉSENTATION DE L'ENTREPRISE

Vélos Alcyon est une société par actions simplifiée (SAS) fictive, créée en 2012 près de Tours par Inès Morel. Elle conçoit et assemble des vélos à assistance électrique, vendus dans 180 magasins de cycles en France et sur son propre site internet. Elle emploie 62 salariés.

Les cadres sont fabriqués en France ; les batteries sont achetées à un seul fournisseur situé en Asie. L'entreprise est reconnue pour la solidité de ses vélos (garantie de 5 ans sur le cadre) et pour son service après-vente. Ses prix sont plus élevés que ceux des grandes marques.

Extrait des statuts, modifiés en 2024 : « Notre raison d'être : rendre la mobilité douce accessible et durable, en fabriquant des vélos qui durent. »

DOSSIER 1 — UN NOUVEAU PROJET (6 points)

Document 1 : chiffres clés (données fictives)
- Chiffre d'affaires : 4 800 000 € en 2024 ; 5 520 000 € en 2025.
- Résultat net 2025 : 276 000 €.
- Marché français du vélo électrique neuf en 2025 : -8 % en volume par rapport à 2024 (après plusieurs années de forte croissance).
- Marché du vélo électrique d'occasion reconditionné en 2025 : +25 %.
- Deux enseignes de grande distribution vendent désormais des vélos électriques à moins de 1 000 €, contre 2 400 € en moyenne pour Vélos Alcyon.

Document 2 : la décision d'Inès Morel
Après plusieurs mois d'étude, la présidente a décidé de créer en 2027 un atelier de reconditionnement : l'entreprise rachètera des vélos électriques d'occasion (de sa marque et d'autres marques), les remettra en état, changera la batterie si besoin et les revendra avec une garantie d'un an. L'investissement s'élève à 360 000 € (local, outillage, logiciel). L'atelier emploiera 8 salariés à recruter et à former.

Document 3 : prévisions pour l'atelier (données fictives)
- Charges fixes annuelles : 180 000 €.
- Taux de marge sur coût variable : 40 %.
- Chiffre d'affaires prévu la première année : 600 000 €.

Travail à faire
1.1 Identifiez les finalités de Vélos Alcyon. (1 point)
1.2 Réalisez le diagnostic stratégique de l'entreprise. (2 points)
1.3 Caractérisez la décision prise par Inès Morel. (1,5 point)
1.4 Calculez le taux d'évolution du chiffre d'affaires entre 2024 et 2025, puis le seuil de rentabilité de l'atelier, et commentez. (1,5 point)

DOSSIER 2 — PRODUCTION, NUMÉRIQUE ET FINANCEMENT (7 points)

Document 4 : l'organisation de la production
Vélos Alcyon assemble ses vélos à la commande pour les ventes en ligne et par petites séries pour les magasins. Depuis 2023, l'entreprise utilise un progiciel de gestion intégré : une commande passée sur le site met à jour le stock, déclenche l'assemblage et prépare la facture. En mars 2025, un salarié a cliqué sur un faux courriel de « livraison » ; des pirates ont bloqué les serveurs et réclamé une rançon. L'activité s'est arrêtée quatre jours ; les données ont pu être récupérées grâce à une sauvegarde faite deux jours plus tôt.
En 2025, le fournisseur asiatique de batteries a livré avec six semaines de retard : 900 vélos n'ont pas pu être livrés à temps.

Document 5 : extrait du bilan fonctionnel au 31/12/2025 (données fictives)
- Ressources stables : 2 100 000 €.
- Emplois stables : 1 750 000 €.
- Besoin en fonds de roulement : 420 000 €.
- Capitaux propres : 1 200 000 € ; dettes financières : 900 000 €.

Document 6 : deux possibilités pour financer l'atelier (360 000 €)
- Un emprunt bancaire sur 7 ans au taux de 4,5 %.
- Une augmentation de capital : un fonds d'investissement spécialisé dans la mobilité durable apporterait 360 000 € en échange de 20 % du capital.

Travail à faire
2.1 Montrez que le progiciel de gestion intégré améliore l'organisation de la production. (1,5 point)
2.2 Analysez les risques liés au numérique et à l'approvisionnement révélés par le document 4, puis proposez deux mesures. (2 points)
2.3 Calculez le fonds de roulement net global, la trésorerie nette et le taux d'endettement. Commentez la situation financière. (2 points)
2.4 Conseillez la présidente sur le mode de financement de l'atelier. (1,5 point)

DOSSIER 3 — LES ACTEURS ET LA SOCIÉTÉ (7 points)

Document 7 : le climat social
En 2025, 11 salariés sur 62 ont quitté l'entreprise, surtout des monteurs. Une enquête interne fait ressortir trois points : « Le salaire est correct », « On ne sait jamais ce que la direction décide », « On ne nous demande jamais notre avis sur l'organisation de l'atelier ». La présidente décide seule de la plupart des questions, y compris l'organisation des postes de montage. Elle envisage de créer des réunions mensuelles d'équipe, un journal interne numérique et un parcours de formation pour devenir technicien de reconditionnement.

Document 8 : l'engagement de l'entreprise
Vélos Alcyon récupère les batteries usagées de ses clients pour les faire recycler, finance l'apprentissage du vélo dans deux écoles de la ville et a réduit de 30 % ses emballages en plastique. Une association de consommateurs a reproché en 2025 à une marque concurrente d'afficher « zéro impact » sur ses vélos sans aucune preuve.

Travail à faire
3.1 Caractérisez le style de direction d'Inès Morel et montrez ses limites. (1,5 point)
3.2 Montrez que les mesures envisagées peuvent améliorer la motivation des salariés. (1,5 point)
3.3 Identifiez les actions de responsabilité sociétale de Vélos Alcyon et expliquez l'intérêt de la raison d'être. (1,5 point)
3.4 Dans une argumentation d'une quinzaine de lignes, vous répondrez à la question : les organisations peuvent-elles ignorer les questions de société ? (2,5 points)`,
      corrige: `CORRIGÉ INDICATIF

DOSSIER 1

1.1 Finalités (1 point)
- Économique : réaliser un profit pour assurer sa pérennité (résultat net de 276 000 € en 2025).
- Environnementale : des vélos qui durent, la mobilité douce, le reconditionnement, le recyclage des batteries.
- Sociétale : rendre la mobilité accessible, financer l'apprentissage du vélo dans des écoles.
- Sociale : former des salariés à un nouveau métier.

1.2 Diagnostic stratégique (2 points)
Diagnostic interne.
- Forces : vélos solides (garantie de 5 ans sur le cadre), service après-vente reconnu, chiffre d'affaires en hausse, entreprise rentable, fabrication des cadres en France.
- Faiblesses : prix élevés (2 400 € en moyenne), dépendance envers un seul fournisseur de batteries, sécurité informatique insuffisante.
Diagnostic externe.
- Opportunités : marché du reconditionné en forte hausse (+25 %), attentes de mobilité durable.
- Menaces : marché du neuf en recul (-8 % en volume), concurrence de la grande distribution à moins de 1 000 €.
Conclusion : l'entreprise est solide, mais son marché principal recule ; elle doit trouver un relais de croissance.

1.3 Caractériser la décision (1,5 point)
C'est une décision stratégique : prise par la présidente, elle engage l'avenir sur le long terme (un nouveau métier), mobilise des ressources importantes (360 000 € et 8 recrutements), est difficile à inverser (local et outillage) et comporte un risque (activité nouvelle pour l'entreprise). Il s'agit d'une diversification liée au métier actuel, réalisée par croissance interne.

1.4 Calculs (1,5 point)
- Taux d'évolution = (5 520 000 - 4 800 000) / 4 800 000 × 100 = +15 %. Le chiffre d'affaires progresse fortement, alors que le marché du neuf recule : l'entreprise gagne des parts de marché.
- Seuil de rentabilité = charges fixes / taux de marge sur coût variable = 180 000 / 0,40 = 450 000 €.
- Le chiffre d'affaires prévu (600 000 €) dépasse le seuil de 150 000 € : l'atelier devrait être rentable dès la première année, avec une marge de sécurité de 150 000 €.

DOSSIER 2

2.1 Le PGI (1,5 point)
Le PGI repose sur une base de données unique : une commande en ligne met à jour le stock, lance l'assemblage et prépare la facture sans ressaisie. Il y a moins d'erreurs, des délais plus courts, une meilleure coordination entre les services, et la production à la commande devient possible (flux tirés). L'information est disponible en temps réel pour décider.

2.2 Les risques (2 points)
- Risque numérique : une attaque par hameçonnage suivie d'un rançongiciel a arrêté l'activité quatre jours. L'entreprise dépend de ses systèmes informatiques.
- Risque d'approvisionnement : un seul fournisseur de batteries, éloigné ; son retard a bloqué 900 vélos. C'est une forte dépendance.
- Mesures possibles : former et sensibiliser les salariés à l'hameçonnage ; faire des sauvegardes quotidiennes et mettre en place l'authentification à deux facteurs ; trouver un second fournisseur de batteries, si possible en Europe ; garder un stock de sécurité de batteries.

2.3 Calculs financiers (2 points)
- FRNG = ressources stables - emplois stables = 2 100 000 - 1 750 000 = 350 000 €.
- Trésorerie nette = FRNG - BFR = 350 000 - 420 000 = -70 000 €.
- Taux d'endettement = dettes financières / capitaux propres × 100 = 900 000 / 1 200 000 × 100 = 75 %.
Commentaire : le FRNG est positif, les emplois stables sont financés par des ressources stables. Mais il ne couvre pas le BFR : la trésorerie est négative, l'entreprise dépend de concours bancaires à court terme. L'endettement (75 %) reste acceptable, mais un nouvel emprunt de 360 000 € le porterait à environ 105 % (1 260 000 / 1 200 000), au-delà des capitaux propres.

2.4 Conseil sur le financement (1,5 point)
- Emprunt : la présidente garde tout le pouvoir, mais l'endettement dépasserait les capitaux propres et les remboursements pèseraient sur une trésorerie déjà négative.
- Augmentation de capital : pas de remboursement ni d'intérêts, les capitaux propres augmentent et la situation financière s'améliore ; le fonds partage les valeurs de l'entreprise (mobilité durable). En échange, la présidente partage le pouvoir et les bénéfices (20 % du capital).
- Conseil attendu : l'augmentation de capital paraît préférable vu la trésorerie négative ; toute réponse argumentée est acceptée.

DOSSIER 3

3.1 Style de direction (1,5 point)
Le style est autoritaire, voire paternaliste : la présidente décide seule, sans consulter (« On ne nous demande jamais notre avis »), et informe peu (« On ne sait jamais ce que la direction décide »). Limites : manque d'implication et de motivation, mauvaise circulation de l'information, départs nombreux (11 sur 62, soit environ 18 % des salariés), perte de compétences et coûts de recrutement.

3.2 Motivation (1,5 point)
Selon Herzberg, le salaire est un facteur d'hygiène : il est jugé correct mais ne suffit pas à motiver. Les mesures envisagées agissent sur les facteurs moteurs : les réunions d'équipe donnent la parole aux salariés (style plus participatif, reconnaissance) ; le journal interne améliore l'information (communication descendante) ; le parcours de formation offre une évolution et des responsabilités (besoin d'accomplissement selon Maslow). Elles peuvent réduire les départs.

3.3 RSE et raison d'être (1,5 point)
Actions de RSE : recyclage des batteries usagées (environnement), réduction de 30 % des emballages plastique (environnement), financement de l'apprentissage du vélo dans les écoles (sociétal), reconditionnement des vélos (économie circulaire). La raison d'être, permise par la loi PACTE, donne du sens et de la cohérence aux décisions, fédère les salariés et renforce l'image auprès des clients et des investisseurs (le fonds de mobilité durable). Les actions doivent être prouvées pour éviter le greenwashing reproché au concurrent.

3.4 Argumentation (2,5 points)
Éléments attendus :
- Définitions : questions de société (environnement, santé, emploi, égalité, modes de vie), RSE (engagement volontaire au-delà de la loi), parties prenantes.
- Non, elles ne peuvent pas les ignorer : la loi impose une partie (loi PACTE, devoir de vigilance, égalité professionnelle, sanctions contre le greenwashing) ; les parties prenantes attendent des engagements (clients, salariés qui cherchent du sens, investisseurs comme le fonds du document 6) ; l'engagement est une source de performance (image, fidélité, économies d'emballages, nouveau marché du reconditionné pour Vélos Alcyon).
- Nuance : l'engagement coûte à court terme et les PME ont moins de moyens ; un engagement de façade (greenwashing) est sanctionné et détruit la confiance.
- Conclusion : les organisations ne peuvent pas ignorer les questions de société ; elles ont intérêt à s'engager de façon sincère et prouvée.`,
      grille: [
        { c: "1.1 Finalités nommées et justifiées", pts: 1 },
        { c: "1.2 Diagnostic interne et externe classé et justifié", pts: 2 },
        { c: "1.3 Décision stratégique caractérisée avec des critères", pts: 1.5 },
        { c: "1.4 Taux d'évolution, seuil de rentabilité et commentaire", pts: 1.5 },
        { c: "2.1 Apports du PGI à la production", pts: 1.5 },
        { c: "2.2 Risques analysés et deux mesures proposées", pts: 2 },
        { c: "2.3 FRNG, trésorerie nette, endettement et commentaire", pts: 2 },
        { c: "2.4 Conseil de financement argumenté", pts: 1.5 },
        { c: "3.1 Style de direction et limites", pts: 1.5 },
        { c: "3.2 Mesures reliées aux théories de la motivation", pts: 1.5 },
        { c: "3.3 Actions de RSE et intérêt de la raison d'être", pts: 1.5 },
        { c: "3.4 Argumentation structurée, notions et nuance", pts: 2.5 },
      ] },
  ],
};
