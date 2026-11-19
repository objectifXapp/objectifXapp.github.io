// Territoires et technologie (spécialité, terminale STAV, enseignement agricole). Sources : voir matiere.sources.
// Programme : module S4 du référentiel du baccalauréat technologique STAV et ses documents d'accompagnement (inspection de l'enseignement agricole, 2019).
// Objectif 1 (place et régulation des activités dans le territoire) : commun à tous, évalué dans la première partie de l'épreuve (chapitres 1 à 5).
// Objectifs 2 et 3 (interactions processus-contexte, choix sociotechniques) : évalués dans la seconde partie, propre au domaine technologique.
// Le domaine de la production (agronomie et zootechnie), le plus répandu, est développé (chapitres 6 à 9) ; les quatre autres domaines sont présentés au chapitre 10.
// Les bases d'agronomie et d'écologie (agroécosystème, services écosystémiques, cycles) sont dans stav-gra.js et ne sont pas répétées.
// Épreuve : instruction technique DGER/SDPFE/2026-513 du 26 août 2026, applicable à partir de la session 2027.
export default {
  matiere: {
    id: 'stav-tt',
    nom: 'Territoires et technologie',
    voie: 'stav',
    epreuve: { type: 'ecrit', duree: 180, coef: 16, quand: 'juin', note: 'Épreuve écrite terminale de 3 heures, dont 30 minutes de lecture des documents, notée sur 20. Première partie commune à tous (6 points) : trois questions sur des documents d\'actualité liés à un territoire (définir une notion, expliquer une phrase du document, donner un avis argumenté). Seconde partie propre au domaine technologique du candidat (14 points) : quatre consignes sur un processus étudié dans son contexte (étapes, éléments du contexte, liens entre choix sociotechniques et déterminants, enjeux). Correction par un professeur de sciences économiques, sociales et de gestion et un professeur du domaine technologique.' },
    sources: [
      'https://chlorofil.fr/fileadmin/user_upload/02-diplomes/referentiels/secondaire/bactechno/bac-techno-da-S4-production.pdf (module S4, domaine production)',
      'https://chlorofil.fr/fileadmin/user_upload/02-diplomes/referentiels/secondaire/bactechno/bac-techno-da-S4-interdomaines.pdf (cahier des charges de l\'épreuve, tous domaines)',
      'https://chlorofil.fr/diplomes/secondaire/bac-techno (documents d\'accompagnement S4 des domaines aménagement, agroéquipements, services et transformation)',
      'https://info.agriculture.gouv.fr/boagri/instruction-2026-513/telechargement (épreuves du baccalauréat STAV à partir de la session 2027)',
      'https://chlorofil.fr/fileadmin/user_upload/sujets-examens/2026/2026-BAC43-RPL-ME.pdf (sujet 2026, domaine production : PNR de Millevaches ; autonomie d\'un élevage allaitant)',
      'https://chlorofil.fr/fileadmin/user_upload/sujets-examens/2025/2025-BAC43-RPL-ME.pdf (sujet 2025, domaine production : foncier, Safer et projets alimentaires territoriaux)',
      'https://chlorofil.fr/fileadmin/user_upload/sujets-examens/2023/2023-BAC43-RPL-ME.pdf (sujet 2023, domaine production : agrivoltaïsme ; élevage herbager)',
      'https://chlorofil.fr/fileadmin/user_upload/sujets-examens/2025/2025-BAC44-NOR-ME.pdf et 2025-BAC41-NOR-ME.pdf (sujets 2025, domaines services et agroéquipements : PNR des Volcans d\'Auvergne)',
      'https://agriculture.gouv.fr et https://www.vie-publique.fr (PAC, politiques publiques)',
    ],
    chapitres: [
      { id: 'stav-tt-1', t: 'Les activités dans le territoire : acteurs, filières et développement local', theme: 'Première partie : territoires' },
      { id: 'stav-tt-2', t: 'Les espaces ruraux : fonctions, attractivité, services et conflits d\'usage', theme: 'Première partie : territoires' },
      { id: 'stav-tt-3', t: 'La politique agricole et alimentaire', theme: 'Première partie : territoires' },
      { id: 'stav-tt-4', t: 'La politique de l\'environnement et les espaces protégés', theme: 'Première partie : territoires' },
      { id: 'stav-tt-5', t: 'Aménagement du territoire, foncier et action sociale', theme: 'Première partie : territoires' },
      { id: 'stav-tt-6', t: 'Analyser un processus dans son contexte : choix, déterminants et enjeux', theme: 'Seconde partie : technologie' },
      { id: 'stav-tt-7', t: 'Production végétale : itinéraire technique, système de culture et assolement', theme: 'Seconde partie : technologie' },
      { id: 'stav-tt-8', t: 'Production animale : conduite d\'élevage et autonomie', theme: 'Seconde partie : technologie' },
      { id: 'stav-tt-9', t: 'Performances, indicateurs et transition agroécologique', theme: 'Seconde partie : technologie' },
      { id: 'stav-tt-10', t: 'Les autres domaines : aménagement, agroéquipements, services et transformation', theme: 'Seconde partie : technologie' },
    ],
  },
  paquets: [
    {
      chapitre: 'stav-tt-1',
      fiche: `## Les activités dans le territoire : acteurs, filières et développement local

### Le territoire et ses activités
- Un **territoire** est un espace approprié et organisé par des **acteurs** qui y vivent, y travaillent et y décident.
- On y trouve une **diversité d'activités** : agriculture, forêt, industrie agroalimentaire, artisanat, commerce, tourisme, services aux personnes, services publics.
- Une activité est **insérée localement** quand elle utilise les ressources du territoire (terres, savoir-faire, main-d'œuvre) et crée des liens avec les autres acteurs.

### Les acteurs et leurs logiques
- **Acteurs privés** : exploitations agricoles, entreprises, coopératives, artisans, commerçants.
- **Acteurs publics** : État et ses services, **collectivités territoriales** (communes, intercommunalités, départements, régions), établissements publics.
- **Acteurs associatifs** et citoyens : associations de protection de la nature, de consommateurs, d'habitants.
- **Organismes professionnels** : chambres d'agriculture, syndicats, organismes de défense d'une appellation.
- Chaque acteur suit une **logique** (gagner sa vie, préserver le cadre de vie, protéger la nature, attirer des habitants) ; ces logiques peuvent converger ou s'opposer.

### Le fonctionnement des organisations
- L'**exploitation agricole** est une entreprise : elle combine des facteurs de production (terre, travail, capital) pour produire et vendre ; elle peut être individuelle ou sociétaire (GAEC, EARL).
- La **coopérative** est une entreprise détenue par ses membres (une personne, une voix) qui collecte, transforme ou vend leurs produits.
- L'**association** poursuit un but non lucratif ; le **service public** répond à l'intérêt général.

### Filière et système alimentaire
- Une **filière** est l'ensemble des acteurs et des étapes qui mènent un produit de la production à la consommation : production, collecte, transformation, distribution, consommation. Exemple : la filière lait de la ferme au yaourt vendu en magasin.
- Une **filière territorialisée** garde un lien fort avec un territoire (un fromage sous appellation).
- Un **système alimentaire territorial** regroupe tous les acteurs d'un territoire qui produisent, transforment, distribuent et consomment ensemble, pour une alimentation plus locale et durable.
- **Circuit court** : au plus **un intermédiaire** entre le producteur et le consommateur (vente directe à la ferme, marché, magasin de producteurs, AMAP, vente à un restaurant).

### Le développement local
- C'est une démarche par laquelle les acteurs d'un territoire **mobilisent ses ressources** pour créer des emplois, des revenus et améliorer la vie des habitants.
- Il repose sur la **coopération** entre acteurs et sur des **projets collectifs** (marque territoriale, magasin de producteurs, tiers-lieu).
- Il s'inscrit dans des dynamiques plus larges : régionales, nationales, européennes, mondiales.

### À retenir pour le bac
- Territoire = espace organisé par des acteurs ; diversité et insertion locale des activités.
- Acteurs privés, publics, associatifs, professionnels, avec des logiques différentes.
- Filière : production, collecte, transformation, distribution, consommation.
- Circuit court : un intermédiaire au plus.
- Développement local : mobiliser les ressources du territoire par la coopération.`,
      cartes: [
        { q: "Qu'est-ce qu'un territoire ?", r: "Un espace approprié et organisé par des acteurs qui y vivent, y travaillent et y décident." },
        { q: "Qu'est-ce qu'une activité insérée localement ?", r: "Une activité qui utilise les ressources du territoire et crée des liens avec les autres acteurs." },
        { q: "Citez trois types d'acteurs d'un territoire.", r: "Privés (exploitations, entreprises), publics (État, collectivités), associatifs (associations, citoyens)." },
        { q: "Qu'est-ce que la logique d'un acteur ?", r: "Le but qu'il poursuit et qui oriente ses décisions : revenu, cadre de vie, protection de la nature." },
        { q: "Qu'est-ce qu'une coopérative agricole ?", r: "Une entreprise détenue par ses membres, une personne une voix, qui collecte, transforme ou vend leurs produits." },
        { q: "Qu'est-ce qu'un GAEC ?", r: "Un groupement agricole d'exploitation en commun : une société où plusieurs agriculteurs travaillent ensemble." },
        { q: "Qu'est-ce qu'une filière ?", r: "L'ensemble des acteurs et des étapes d'un produit, de la production à la consommation." },
        { q: "Quelles sont les étapes d'une filière ?", r: "Production, collecte, transformation, distribution et consommation." },
        { q: "Qu'est-ce qu'un circuit court ?", r: "Une vente avec au plus un intermédiaire entre le producteur et le consommateur." },
        { q: "Qu'est-ce qu'un système alimentaire territorial ?", r: "L'ensemble des acteurs d'un territoire qui produisent, transforment, distribuent et consomment ensemble, pour une alimentation locale et durable." },
        { q: "Qu'est-ce que le développement local ?", r: "Une démarche où les acteurs mobilisent les ressources du territoire pour créer emplois et revenus et améliorer la vie des habitants." },
        { q: "Sur quoi repose le développement local ?", r: "Sur la coopération entre acteurs et des projets collectifs." },
      ],
      quiz: [
        { q: "Une vente de légumes du producteur à un restaurant, sans autre intermédiaire, est :", choix: ["une importation", "un circuit long", "une filière industrielle", "un circuit court"], bonne: 3, expl: "Le restaurant est le seul intermédiaire avant le consommateur.", niv: 1 },
        { q: "Dans une coopérative, chaque membre dispose :", choix: ["d'une voix par hectare cultivé", "d'autant de voix que de terres", "d'une voix", "d'une voix par salarié"], bonne: 2, expl: "La règle est « une personne, une voix ».", niv: 1 },
        { q: "Une commune et une région sont des :", choix: ["établissements publics de l'État", "collectivités territoriales", "associations", "coopératives"], bonne: 1, expl: "Ce sont des acteurs publics élus.", niv: 1 },
        { q: "Dans la filière lait, la laiterie qui fabrique des yaourts assure l'étape de :", choix: ["production", "transformation", "consommation", "distribution"], bonne: 1, expl: "Elle transforme le lait en produit fini.", niv: 1 },
        { q: "Des agriculteurs ouvrent ensemble un magasin de producteurs dans un bourg. C'est un exemple de :", choix: ["circuit long", "délocalisation", "développement local par un projet collectif", "concentration des exploitations dans une seule entreprise"], bonne: 2, expl: "Ils mobilisent les ressources du territoire en coopérant.", niv: 2 },
        { q: "Un fromage sous appellation fabriqué avec le lait de la zone relève d'une filière :", choix: ["mondialisée sans lien au lieu", "territorialisée", "sans transformation", "d'importation"], bonne: 1, expl: "Le lien au territoire est garanti par le cahier des charges.", niv: 2 },
        { q: "Une association de randonneurs et un éleveur ne partagent pas la même logique. Cela signifie :", choix: ["qu'ils poursuivent des buts différents sur le même espace", "qu'ils ne fréquentent pas les mêmes lieux du territoire", "que l'un des deux est hors la loi", "qu'ils ont les mêmes intérêts"], bonne: 0, expl: "Loisir et production peuvent converger ou s'opposer.", niv: 2 },
        { q: "Pourquoi un système alimentaire territorial réunit-il producteurs, cantines et collectivités ?", choix: ["Pour fermer les marchés", "Pour supprimer les agriculteurs", "Pour importer davantage de produits venus de loin", "Pour relocaliser l'alimentation par la coopération"], bonne: 3, expl: "Il organise la production et la consommation à l'échelle locale.", niv: 2 },
        { q: "Lequel n'est **pas** un circuit court ?", choix: ["La vente directe à la ferme", "Une AMAP", "Un yaourt passé par une centrale d'achat puis un hypermarché", "Un marché de plein vent où le producteur vend lui-même"], bonne: 2, expl: "Il y a deux intermédiaires ou plus.", niv: 2 },
        { q: "Une exploitation embauche localement et vend à la boucherie du village. Elle participe :", choix: ["au développement local", "à la désertification", "à l'artificialisation des sols", "au circuit long"], bonne: 0, expl: "Elle crée des emplois et des liens avec les acteurs du territoire.", niv: 3 },
        { q: "Pourquoi le développement local s'inscrit-il aussi dans des dynamiques plus larges ?", choix: ["Les communes fixent seules les prix et les règles", "Un territoire vit à l'écart des échanges extérieurs", "Le développement local relève de la seule commune, qui décide de tout", "Les marchés, les aides et les règles viennent aussi de la région, de l'État et de l'Europe"], bonne: 3, expl: "Le local dépend aussi des échelles régionale, nationale et européenne.", niv: 3 },
        { q: "Quel intérêt une coopérative offre-t-elle à de petits producteurs ?", choix: ["Mettre en commun la collecte, la transformation et la vente", "Supprimer leur droit de vote", "Les obliger à vendre leur production au prix le plus bas du marché", "Remplacer les collectivités"], bonne: 0, expl: "Ensemble, ils pèsent davantage face aux acheteurs.", niv: 3 },
      ],
    },
    {
      chapitre: 'stav-tt-2',
      fiche: `## Les espaces ruraux : fonctions, attractivité, services et conflits d'usage

### La ruralité aujourd'hui
- Les espaces ruraux ne sont pas seulement agricoles : ils sont **multifonctionnels**.
- **Fonction productive** : agriculture, forêt, industrie, artisanat, énergie (éolien, méthanisation, photovoltaïque).
- **Fonction résidentielle** : on y habite, souvent en travaillant en ville.
- **Fonction récréative** : tourisme, randonnée, chasse, pêche, résidences secondaires.
- **Fonction environnementale** : biodiversité, paysages, eau, stockage du carbone.
- Les **aménités** sont les agréments d'un lieu (calme, paysages, nature, patrimoine) qui le rendent attractif.

### Diversité et inégalités
- Il existe une grande **diversité** de territoires ruraux : périurbains attractifs, campagnes touristiques, rural isolé en déclin démographique.
- **Inégalités territoriales** : accès aux services, à l'emploi, aux soins (déserts médicaux), au numérique, aux transports.
- **Enclavement** : un territoire difficile d'accès ; le **désenclavement** passe par les routes, les transports, le haut débit.
- **Mobilité** : la voiture reste souvent indispensable ; on développe le covoiturage et le transport à la demande.

### L'attractivité et la population
- Certains espaces gagnent des habitants (retraités, familles, télétravailleurs), d'autres en perdent.
- L'**attractivité** dépend de l'emploi, du logement, des services, des aménités et du numérique.
- Le **maintien des services** (école, médecin, commerce, poste, maisons France services) est un enjeu pour garder et attirer les habitants ; les emplois de santé et d'action sociale y sont importants, surtout quand la population vieillit.

### La place de l'agriculture
- Rôle **économique** (production, emplois directs et induits), **social** (vie locale), d'**occupation et d'entretien de l'espace** (paysages, prévention des incendies, ouverture des milieux).
- Les autres acteurs ont des **attentes** : produits locaux et de qualité, respect de l'environnement et du bien-être animal, absence de nuisances.
- Réponses de l'agriculture : circuits courts, agriculture biologique, pratiques agroécologiques, accueil à la ferme.

### Artificialisation et conflits d'usage
- L'**artificialisation des sols** est la transformation de terres agricoles ou naturelles en routes, logements, zones commerciales. Elle réduit les terres agricoles et la biodiversité ; la loi vise le **zéro artificialisation nette** à l'horizon 2050.
- Un **conflit d'usage** naît quand plusieurs acteurs veulent utiliser un même espace ou une même ressource de façon incompatible : épandage et voisins, troupeaux et randonneurs, irrigation et pêche, panneaux solaires et terres agricoles.
- On les apaise par l'**information**, la **concertation**, la **réglementation** et des **aménagements** (balisage, chemins déviés, horaires).
- Le **rôle des nouvelles technologies** (numérique, télétravail) et des **initiatives locales** (tiers-lieux, épiceries associatives) transforme aussi les campagnes.

### À retenir pour le bac
- Espaces ruraux multifonctionnels : production, résidence, loisirs, environnement ; aménités.
- Inégalités territoriales : services, soins, emploi, transports, numérique.
- Maintien des services : enjeu d'attractivité.
- Rôles de l'agriculture : économique, social, entretien de l'espace.
- Artificialisation et conflits d'usage ; concertation pour les apaiser.`,
      cartes: [
        { q: "Que signifie la multifonctionnalité des espaces ruraux ?", r: "Ils remplissent plusieurs fonctions : production, résidence, loisirs et environnement." },
        { q: "Qu'est-ce qu'une aménité ?", r: "Un agrément d'un lieu (calme, paysage, nature, patrimoine) qui le rend attractif." },
        { q: "Citez trois inégalités territoriales en milieu rural.", r: "L'accès aux soins, aux services publics, à l'emploi, aux transports et au numérique." },
        { q: "Qu'est-ce que l'enclavement ?", r: "La difficulté d'accès d'un territoire, par manque de routes, de transports ou de réseaux." },
        { q: "De quoi dépend l'attractivité d'un territoire rural ?", r: "De l'emploi, du logement, des services, des aménités et du numérique." },
        { q: "Pourquoi le maintien des services est-il un enjeu ?", r: "Sans école, médecin ni commerce, les habitants partent et les nouveaux ne s'installent pas." },
        { q: "Quels sont les rôles de l'agriculture dans un territoire ?", r: "Économique, social, et d'occupation et d'entretien de l'espace." },
        { q: "Qu'attendent les autres acteurs de l'agriculture ?", r: "Des produits locaux et de qualité, le respect de l'environnement et du bien-être animal, peu de nuisances." },
        { q: "Qu'est-ce que l'artificialisation des sols ?", r: "La transformation de terres agricoles ou naturelles en routes, logements ou zones d'activités." },
        { q: "Que vise l'objectif « zéro artificialisation nette » ?", r: "Ne plus artificialiser plus de sols qu'on n'en rend à la nature, à l'horizon 2050." },
        { q: "Qu'est-ce qu'un conflit d'usage ?", r: "Une opposition entre acteurs qui veulent utiliser un même espace ou une même ressource de façon incompatible." },
        { q: "Comment apaiser un conflit d'usage ?", r: "Par l'information, la concertation, la réglementation et des aménagements." },
        { q: "Citez deux exemples de conflits d'usage.", r: "Troupeaux et randonneurs, épandage et voisins, irrigation et pêche, panneaux solaires et terres agricoles." },
      ],
      quiz: [
        { q: "Le calme et les paysages qui attirent des habitants sont des :", choix: ["intrants", "nuisances", "subventions", "aménités"], bonne: 3, expl: "Ce sont les agréments d'un lieu.", niv: 1 },
        { q: "La construction d'une zone commerciale sur des champs est un exemple :", choix: ["d'une artificialisation des sols", "de reboisement d'anciennes parcelles agricoles", "de circuit court", "d'une mise en jachère"], bonne: 0, expl: "Des terres agricoles deviennent des surfaces bâties.", niv: 1 },
        { q: "Un territoire rural difficile d'accès est dit :", choix: ["périurbain", "enclavé", "métropolisé", "littoral"], bonne: 1, expl: "Le désenclavement passe par les routes, les transports et le haut débit.", niv: 1 },
        { q: "La fonction récréative d'un espace rural correspond :", choix: ["à la fabrication d'engrais", "à la production de lait", "aux loisirs et au tourisme", "au stockage de carbone"], bonne: 2, expl: "Randonnée, chasse, pêche, gîtes.", niv: 1 },
        { q: "Des randonneurs laissent les barrières ouvertes et des vaches s'échappent. C'est :", choix: ["une filière", "une aménité", "un circuit court", "un conflit d'usage"], bonne: 3, expl: "Loisir et élevage utilisent le même espace de façon incompatible.", niv: 2 },
        { q: "Pourquoi les emplois de santé et d'action sociale sont-ils importants dans un territoire rural vieillissant ?", choix: ["Ces emplois attirent surtout les touristes en été dans les gîtes", "Ils remplacent l'agriculture", "Les personnes âgées ont besoin de soins et d'aide à domicile", "Ils concernent surtout les grandes villes"], bonne: 2, expl: "Ils répondent aux besoins et maintiennent des habitants.", niv: 2 },
        { q: "Une famille quitte la ville pour une commune rurale grâce au télétravail. Le facteur décisif est :", choix: ["l'accès au numérique", "la fermeture de l'école", "l'enclavement", "le manque de logements"], bonne: 0, expl: "Le haut débit rend possible le travail à distance.", niv: 2 },
        { q: "Un éleveur qui fait pâturer des coteaux limite les incendies et garde le paysage ouvert. Il remplit un rôle :", choix: ["de résidence secondaire", "d'entretien de l'espace", "d'artificialisation", "de transformation industrielle"], bonne: 1, expl: "L'agriculture occupe et entretient l'espace rural.", niv: 2 },
        { q: "Quelle solution n'apaise **pas** un conflit d'usage ?", choix: ["Une réunion de concertation", "Un balisage des chemins qui contournent les pâturages", "La suppression de toute information aux habitants", "Un règlement adopté par la commune"], bonne: 2, expl: "Le manque d'information aggrave les tensions.", niv: 2 },
        { q: "Pourquoi l'installation de panneaux solaires au sol sur des terres agricoles peut-elle créer un conflit ?", choix: ["Elle réduit les terres disponibles pour produire de l'alimentation", "Elle augmente la production de blé des parcelles voisines", "Elle supprime la fonction résidentielle", "Elle rend les sols plus fertiles"], bonne: 0, expl: "Énergie et alimentation entrent en concurrence pour le foncier.", niv: 3 },
        { q: "Pourquoi parle-t-on de diversité des espaces ruraux ?", choix: ["Leur population et leurs activités sont identiques", "Un périurbain attractif et un rural isolé n'ont pas les mêmes enjeux", "Ils ont la même population", "Tous perdent des habitants"], bonne: 1, expl: "Leurs dynamiques démographiques et économiques diffèrent.", niv: 3 },
        { q: "Une épicerie associative rouvre dans un village sans commerce. Elle illustre :", choix: ["un enclavement", "une délocalisation d'un service vers la ville voisine", "une artificialisation", "une initiative locale qui maintient un service"], bonne: 3, expl: "Les habitants s'organisent pour garder un service de proximité.", niv: 3 },
      ],
    },
    {
      chapitre: 'stav-tt-3',
      fiche: `## La politique agricole et alimentaire

### La politique agricole commune (PAC)
- Créée en **1962**, la PAC est l'une des plus anciennes politiques de l'Union européenne et l'un de ses premiers postes de dépenses.
- Ses objectifs d'origine : augmenter la production, assurer un revenu aux agriculteurs, stabiliser les marchés, garantir l'approvisionnement et des prix raisonnables.
- Elle a beaucoup **évolué** : fin des prix garantis et des excédents, aides détachées de la production, prise en compte de l'**environnement**, du **bien-être animal** et de la **qualité**, adaptation aux règles du commerce international.
- Elle a contribué à transformer les campagnes (modernisation, agrandissement des exploitations, baisse du nombre d'agriculteurs).

### Les deux piliers
- **Premier pilier** : soutien aux **marchés** et aux **revenus** agricoles, par des aides directes versées surtout à l'hectare. Elles sont soumises à la **conditionnalité** : l'agriculteur doit respecter des règles d'environnement, de santé et de bien-être animal (sinon ses aides baissent). Les **écorégimes** récompensent des pratiques favorables au climat et à l'environnement.
- **Second pilier** : **développement rural**, cofinancé par l'Union et les régions. Principales aides :
  - l'**ICHN** (indemnité compensatoire de handicaps naturels), pour l'agriculture des zones défavorisées comme la montagne ;
  - les **MAEC** (mesures agroenvironnementales et climatiques), contrats de 5 ans pour des pratiques favorables à l'environnement ;
  - les aides à l'**agriculture biologique** (conversion) ;
  - l'**aide à l'installation** des jeunes agriculteurs ;
  - les aides aux investissements et le programme LEADER.
- Chaque région met en œuvre une partie du second pilier dans son **programme de développement rural**.

### La politique alimentaire
- L'alimentation prend une place croissante dans les politiques publiques.
- **Loi EGalim** (30 octobre 2018) : rééquilibrer les relations commerciales pour mieux rémunérer les agriculteurs, et favoriser une alimentation **saine**, **durable** et **accessible** à tous. En restauration collective publique : au moins **50 %** de produits durables et de qualité, dont au moins **20 %** de produits biologiques.
- **Loi contre le gaspillage alimentaire** (11 février 2016) : interdiction pour les grandes surfaces de jeter des invendus consommables, dons aux associations.
- **Projets alimentaires territoriaux (PAT)** : créés en 2014, ils rassemblent les acteurs d'un territoire (agriculteurs, collectivités, transformateurs, distributeurs, consommateurs) pour **relocaliser l'agriculture et l'alimentation** et développer une alimentation de qualité.
- Les signes de qualité (AOP, IGP, label rouge, bio) sont gérés par l'**INAO**.

### Souveraineté et autonomie alimentaires
- La **souveraineté alimentaire** est la capacité d'un pays ou d'un territoire à définir sa politique agricole et à nourrir sa population.
- L'**autonomie alimentaire** d'une ville est souvent très faible : la plupart de ses aliments viennent de loin, faute de terres agricoles proches et parce que les productions locales sont vendues ailleurs.

### À retenir pour le bac
- PAC : 1962, objectifs de production et de revenu, puis environnement, bien-être animal, qualité.
- Premier pilier : aides directes et conditionnalité ; second pilier : développement rural (ICHN, MAEC, bio, installation).
- EGalim : 50 % de produits durables dont 20 % bio en restauration collective.
- PAT : relocaliser l'agriculture et l'alimentation à l'échelle d'un territoire.`,
      cartes: [
        { q: "Quand la PAC a-t-elle été créée ?", r: "En 1962." },
        { q: "Quels étaient les objectifs de la PAC à l'origine ?", r: "Augmenter la production, assurer un revenu aux agriculteurs, stabiliser les marchés et l'approvisionnement." },
        { q: "Que finance le premier pilier de la PAC ?", r: "Le soutien aux marchés et aux revenus, surtout par des aides directes à l'hectare." },
        { q: "Qu'est-ce que la conditionnalité des aides ?", r: "L'obligation de respecter des règles d'environnement, de santé et de bien-être animal pour toucher toutes ses aides." },
        { q: "Que finance le second pilier de la PAC ?", r: "Le développement rural : ICHN, MAEC, agriculture biologique, installation des jeunes, investissements." },
        { q: "Qu'est-ce que l'ICHN ?", r: "L'indemnité compensatoire de handicaps naturels, versée aux agriculteurs des zones défavorisées comme la montagne." },
        { q: "Qu'est-ce qu'une MAEC ?", r: "Une mesure agroenvironnementale et climatique : un contrat de 5 ans qui rémunère des pratiques favorables à l'environnement." },
        { q: "Quels sont les deux grands buts de la loi EGalim ?", r: "Mieux rémunérer les agriculteurs et favoriser une alimentation saine, durable et accessible à tous." },
        { q: "Que demande EGalim à la restauration collective publique ?", r: "Au moins 50 % de produits durables et de qualité, dont au moins 20 % de produits biologiques." },
        { q: "Que prévoit la loi de 2016 contre le gaspillage alimentaire ?", r: "Les grandes surfaces ne peuvent plus jeter des invendus consommables et doivent proposer des dons aux associations." },
        { q: "Qu'est-ce qu'un projet alimentaire territorial ?", r: "Un projet qui rassemble les acteurs d'un territoire pour relocaliser l'agriculture et l'alimentation." },
        { q: "Qu'est-ce que la souveraineté alimentaire ?", r: "La capacité d'un pays ou d'un territoire à définir sa politique agricole et à nourrir sa population." },
        { q: "Quel organisme gère les signes officiels de qualité ?", r: "L'INAO, Institut national de l'origine et de la qualité." },
      ],
      quiz: [
        { q: "La PAC a été créée en :", choix: ["1951", "1949", "1957", "1962"], bonne: 3, expl: "C'est l'une des premières politiques communes européennes.", niv: 1 },
        { q: "L'ICHN est versée aux agriculteurs :", choix: ["qui vendent leur production en grande surface", "des grandes plaines céréalières", "des zones à handicaps naturels comme la montagne", "qui s'installent en ville"], bonne: 2, expl: "Elle compense des conditions de production plus difficiles.", niv: 1 },
        { q: "Le second pilier de la PAC concerne surtout :", choix: ["le développement rural", "les prix garantis", "les importations", "la politique monétaire"], bonne: 0, expl: "ICHN, MAEC, bio, installation, LEADER.", niv: 1 },
        { q: "Les signes officiels de qualité sont gérés par :", choix: ["l'INAO", "la SNCF", "la Banque de France", "Météo-France"], bonne: 0, expl: "L'Institut national de l'origine et de la qualité.", niv: 1 },
        { q: "Un agriculteur ne respecte pas les règles de bien-être animal. Quelle conséquence sur ses aides du premier pilier ?", choix: ["Elles passent au second pilier comme aide au développement rural", "Elles augmentent", "Elles ne changent pas", "Elles peuvent baisser au titre de la conditionnalité"], bonne: 3, expl: "Les aides directes sont conditionnées au respect de règles.", niv: 2 },
        { q: "Selon EGalim, une cantine publique doit servir au moins :", choix: ["20 % de produits bio", "5 % de produits bio", "60 % de produits bio", "80 % de produits bio"], bonne: 0, expl: "Au moins 50 % de produits durables et de qualité, dont 20 % bio.", niv: 2 },
        { q: "Une intercommunalité réunit agriculteurs, cantines et commerçants pour relocaliser l'alimentation. Elle construit :", choix: ["un plan de prévention des risques", "un projet alimentaire territorial", "une zone franche", "un parc national"], bonne: 1, expl: "C'est l'objet même d'un PAT.", niv: 2 },
        { q: "Un éleveur s'engage pour 5 ans à retarder la fauche de ses prairies pour protéger des oiseaux nicheurs, contre une aide. Il signe :", choix: ["un contrat de travail", "une ICHN", "un permis de construire", "une MAEC"], bonne: 3, expl: "Mesure agroenvironnementale et climatique du second pilier.", niv: 2 },
        { q: "Quelle aide n'appartient **pas** au second pilier ?", choix: ["L'ICHN", "Les MAEC", "Les aides directes", "L'aide à l'installation"], bonne: 2, expl: "Les aides directes relèvent du premier pilier.", niv: 2 },
        { q: "Pourquoi l'autonomie alimentaire des grandes villes est-elle très faible ?", choix: ["Les citadins mangent peu", "Peu de terres agricoles proches et des productions locales vendues ailleurs", "Les villes produisent l'essentiel de leurs aliments sur leurs toits et leurs jardins", "La loi interdit de vendre près des villes"], bonne: 1, expl: "La production est spécialisée et éloignée des lieux de consommation.", niv: 3 },
        { q: "Pourquoi la PAC prend-elle davantage en compte l'environnement depuis les années 1990 ?", choix: ["Les excédents agricoles ont continué d'augmenter fortement", "L'Europe a voulu produire moins pour importer davantage", "Les effets négatifs de l'intensification et les attentes de la société", "L'Europe a supprimé l'agriculture"], bonne: 2, expl: "Pollution, perte de biodiversité et opinion publique ont pesé.", niv: 3 },
        { q: "Quel est l'intérêt de l'aide à l'installation des jeunes agriculteurs pour un territoire ?", choix: ["Augmenter l'artificialisation", "Renouveler les générations et garder des exploitations actives", "Réduire le nombre d'habitants", "Concentrer les terres dans de très grandes exploitations"], bonne: 1, expl: "Le départ à la retraite de nombreux agriculteurs menace le maintien des fermes.", niv: 3 },
      ],
    },
    {
      chapitre: 'stav-tt-4',
      fiche: `## La politique de l'environnement et les espaces protégés

### Pourquoi une politique de l'environnement ?
- Elle s'est développée dans la seconde moitié du XXe siècle, à cause des **effets négatifs de la croissance** (pollutions, perte de biodiversité) que les économistes appellent **externalités négatives**, et d'une opinion publique de plus en plus sensible à ces questions.
- Ses objectifs : **lutter contre la pollution**, **préserver les ressources naturelles**, **sauvegarder les espaces naturels menacés**, **protéger la faune et la flore**, **maintenir la biodiversité**.
- La **Charte de l'environnement** de 2004 fait partie, depuis 2005, du bloc de constitutionnalité : ses principes ont la valeur de la Constitution.

### Les grands principes
- **Prévention** : éviter les atteintes à l'environnement à la source.
- **Précaution** : quand un dommage grave est possible mais pas encore prouvé scientifiquement, on prend des mesures sans attendre la certitude.
- **Pollueur-payeur** : celui qui pollue paie les frais de prévention et de réparation (redevances, taxes).
- **Participation** : le public a le droit d'être informé et de participer aux décisions (enquête publique, concertation).

### Les espaces et outils de protection
- **Parcs nationaux** : protection forte d'un cœur de parc (par exemple les Cévennes, les Écrins), réglementation stricte.
- **Réserves naturelles** et **arrêtés de protection de biotope** : protègent un milieu ou une espèce rare.
- **ZNIEFF** (zones naturelles d'intérêt écologique, faunistique et floristique) : un **inventaire** des espaces riches ; ce n'est pas une protection réglementaire, mais il doit être pris en compte dans les projets.
- **Natura 2000** : réseau **européen** de sites qui protègent des habitats et des espèces ; on y concilie activités humaines et biodiversité, souvent par des contrats avec les agriculteurs.
- **Trame verte et bleue** : un réseau de **continuités écologiques** (haies, bois, cours d'eau, zones humides) qui permet aux espèces de se déplacer ; elle est prise en compte dans les documents d'urbanisme.
- **Parcs naturels régionaux** (PNR) : créés à l'initiative des régions sur des territoires ruraux habités au patrimoine remarquable. Leurs **missions** : protéger le patrimoine naturel et culturel, contribuer à l'**aménagement du territoire**, au **développement économique et social**, à l'**accueil et à l'éducation** du public, et mener des actions expérimentales. Ils fonctionnent grâce à une **charte** signée par les communes pour 15 ans. Un PNR n'interdit pas les activités : il les accompagne.

### Autres points d'étude
- L'accès à la nature et les **itinéraires de randonnée**, la **chasse**, les **installations classées** (élevages importants, usines) soumises à déclaration ou autorisation, la **prévention des risques naturels** (inondations, incendies), la protection du cadre de vie.

### À retenir pour le bac
- Externalités négatives et opinion publique : origine de la politique de l'environnement.
- Principes : prévention, précaution, pollueur-payeur, participation ; Charte de 2004.
- Parcs nationaux, réserves, ZNIEFF (inventaire), Natura 2000 (réseau européen), trame verte et bleue.
- PNR : protéger le patrimoine et développer le territoire, grâce à une charte.`,
      cartes: [
        { q: "Qu'est-ce qu'une externalité négative ?", r: "Un effet nuisible d'une activité sur d'autres personnes ou sur l'environnement, sans compensation, comme une pollution." },
        { q: "Quels sont les objectifs de la politique de l'environnement ?", r: "Lutter contre la pollution, préserver les ressources, sauvegarder les espaces menacés, protéger faune et flore, maintenir la biodiversité." },
        { q: "Quelle est la valeur de la Charte de l'environnement ?", r: "Elle a valeur constitutionnelle depuis 2005." },
        { q: "Qu'est-ce que le principe de précaution ?", r: "Agir sans attendre la certitude scientifique quand un dommage grave est possible." },
        { q: "Qu'est-ce que le principe pollueur-payeur ?", r: "Celui qui pollue paie les frais de prévention et de réparation." },
        { q: "Qu'est-ce que le principe de participation ?", r: "Le droit du public d'être informé et de participer aux décisions sur l'environnement." },
        { q: "Qu'est-ce qu'une ZNIEFF ?", r: "Un inventaire des zones naturelles riches en faune et en flore ; ce n'est pas une protection réglementaire." },
        { q: "Qu'est-ce que Natura 2000 ?", r: "Un réseau européen de sites qui protègent des habitats et des espèces en conciliant activités humaines et biodiversité." },
        { q: "Qu'est-ce que la trame verte et bleue ?", r: "Un réseau de continuités écologiques (haies, bois, cours d'eau) qui permet aux espèces de se déplacer." },
        { q: "Quelles sont les missions d'un parc naturel régional ?", r: "Protéger le patrimoine, contribuer à l'aménagement, au développement économique et social, à l'accueil et à l'éducation du public, expérimenter." },
        { q: "Sur quoi repose le fonctionnement d'un PNR ?", r: "Sur une charte signée par les communes pour 15 ans." },
        { q: "Parc national ou parc naturel régional ?", r: "Le parc national protège fortement un cœur de nature ; le PNR accompagne le développement d'un territoire habité." },
        { q: "Qu'est-ce qu'une installation classée ?", r: "Une installation (grand élevage, usine) qui peut présenter des risques et est soumise à déclaration ou autorisation." },
      ],
      quiz: [
        { q: "Le réseau Natura 2000 est :", choix: ["départemental", "communal", "mondial", "européen"], bonne: 3, expl: "Il réunit des sites protégés dans toute l'Union européenne.", niv: 1 },
        { q: "Une ZNIEFF est :", choix: ["un zonage commercial", "une interdiction de toute activité", "un inventaire scientifique", "une aide de la PAC"], bonne: 2, expl: "Elle recense des espaces riches sans être une protection réglementaire.", niv: 1 },
        { q: "Un parc naturel régional fonctionne grâce à :", choix: ["un label de restaurant", "une loi qui interdit l'agriculture", "un contrat de travail", "une charte signée par les communes"], bonne: 3, expl: "La charte fixe le projet du territoire pour 15 ans.", niv: 1 },
        { q: "Une redevance payée par une usine qui rejette des eaux polluées applique le principe :", choix: ["de précaution", "de participation", "pollueur-payeur", "subsidiarité"], bonne: 2, expl: "Celui qui pollue paie.", niv: 1 },
        { q: "Une enquête publique avant l'installation d'un grand élevage applique le principe :", choix: ["pollueur-payeur", "de participation", "de précaution", "de libre-échange"], bonne: 1, expl: "Les habitants sont informés et peuvent donner leur avis.", niv: 2 },
        { q: "Une haie qui relie deux bois permet aux animaux de passer de l'un à l'autre. Elle fait partie :", choix: ["de la trame verte", "de la trame bleue", "d'une ZNIEFF obligatoire", "d'une zone d'activité"], bonne: 0, expl: "La trame verte regroupe les continuités terrestres ; la bleue, les milieux aquatiques.", niv: 2 },
        { q: "On suspend l'usage d'un produit dont la nocivité grave est possible mais pas encore prouvée. C'est le principe :", choix: ["pollueur-payeur", "de précaution", "de participation", "de prévention"], bonne: 1, expl: "On agit malgré l'incertitude scientifique.", niv: 2 },
        { q: "Pourquoi la politique de l'environnement s'est-elle développée après 1950 ?", choix: ["Les pollutions de la croissance et une opinion publique plus sensible", "Une disparition des industries et l'exode vers les villes", "La fin de l'agriculture", "La baisse de la population"], bonne: 0, expl: "Les externalités négatives sont devenues visibles.", niv: 2 },
        { q: "Laquelle n'est **pas** une mission d'un PNR ?", choix: ["Protéger le patrimoine naturel et culturel", "Interdire l'agriculture", "Favoriser le développement économique et social", "Accueillir et éduquer le public, en particulier les scolaires"], bonne: 1, expl: "Un PNR accompagne les activités sans les interdire.", niv: 2 },
        { q: "Dans un site Natura 2000, comment concilie-t-on agriculture et biodiversité ?", choix: ["Par des contrats qui rémunèrent des pratiques favorables aux habitats", "Par l'expulsion des agriculteurs et le rachat de leurs terres", "En interdisant les visites", "En urbanisant les prairies"], bonne: 0, expl: "La démarche est contractuelle et concertée.", niv: 3 },
        { q: "Pourquoi un PNR peut-il aider au maintien des services dans les communes ?", choix: ["Il s'occupe avant tout des espèces animales à protéger", "Il remplace l'État et la commune pour ouvrir des écoles", "Il impose aux habitants des commerces choisis par la région", "Il porte un projet de développement du territoire avec les communes"], bonne: 3, expl: "Ses missions dépassent la seule protection de la nature.", niv: 3 },
        { q: "Pourquoi la Charte de l'environnement a-t-elle une portée forte ?", choix: ["Elle concerne surtout la gestion des forêts publiques", "C'est un simple conseil sans valeur juridique", "Elle a valeur constitutionnelle et s'impose aux lois", "Elle a été abrogée en 2005 par une loi ordinaire"], bonne: 2, expl: "Elle fait partie du bloc de constitutionnalité.", niv: 3 },
      ],
    },
    {
      chapitre: 'stav-tt-5',
      fiche: `## Aménagement du territoire, foncier et action sociale

### Les mesures pour les territoires ruraux
- **Contrat de ruralité** (devenu contrat de relance et de transition écologique) : un engagement entre l'État et une intercommunalité pour financer des projets (services, mobilité, numérique, transition écologique).
- **Zones de revitalisation rurale** (ZRR, remplacées en 2024 par France ruralités revitalisation) : des avantages fiscaux pour les entreprises qui s'installent dans des communes rurales fragiles.
- **Programme LEADER** (liaison entre actions de développement de l'économie rurale) : des fonds européens du second pilier de la PAC gérés par des **groupes d'action locale** qui réunissent élus et acteurs privés autour d'une stratégie locale.
- **Réseau rural** : il met en relation les acteurs du développement rural pour partager les expériences.
- Les **collectivités territoriales** ont un rôle croissant : la région pour l'économie, les transports et le second pilier ; le département pour la solidarité et les routes ; l'intercommunalité pour l'urbanisme, l'économie locale et les déchets.

### Les documents d'urbanisme
- Le **SCOT** (schéma de cohérence territoriale) fixe les grandes orientations à l'échelle d'un bassin de vie de plusieurs intercommunalités : habitat, économie, transports, espaces agricoles et naturels à préserver.
- Le **PLU** (plan local d'urbanisme), communal ou intercommunal (PLUi), découpe le territoire en **zones** : urbaines (U), à urbaniser (AU), **agricoles (A)** et **naturelles (N)**, et fixe les règles de construction. Il doit être compatible avec le SCOT.
- Ces documents limitent l'étalement urbain et protègent les terres agricoles.

### La question foncière
- Le **foncier** est la terre et sa propriété. Il est sous **pression** : urbanisation, infrastructures, énergie (panneaux solaires), prix élevés, concurrence entre agriculteurs pour s'agrandir, rétention par des propriétaires.
- Outils publics : **acquisition foncière** par une collectivité, **réserve foncière** pour un projet futur, **expropriation pour cause d'utilité publique** (avec indemnité).
- Les **SAFER** (sociétés d'aménagement foncier et d'établissement rural) ont pour missions de **favoriser l'installation** des agriculteurs et le maintien des exploitations, de **protéger l'environnement** et les paysages, et d'accompagner le développement local. Elles **achètent** des terres à l'amiable ou grâce à leur **droit de préemption** (priorité d'achat lors d'une vente), puis les **revendent** (rétrocession) à des candidats choisis par un comité ; elles observent aussi le marché des terres.

### L'action sociale des collectivités
- Le **département** est le chef de file de l'action sociale : il gère le **revenu de solidarité active** (RSA), l'aide aux personnes âgées (allocation personnalisée d'autonomie) et aux personnes handicapées, la protection de l'enfance.
- La **région** peut aider à l'installation des professionnels de santé ; les communes et intercommunalités agissent par leur centre d'action sociale, des maisons de santé, des maisons France services.

### À retenir pour le bac
- Contrats de l'État, zones de revitalisation, LEADER et groupes d'action locale.
- SCOT : orientations d'un bassin de vie ; PLU : zones U, AU, A, N et règles.
- Pression foncière : urbanisation, énergie, prix ; acquisition, réserve, expropriation.
- SAFER : installation, environnement, développement local ; préemption et rétrocession.
- Département : RSA et solidarité ; région : aide aux professionnels de santé.`,
      cartes: [
        { q: "Qu'est-ce que le programme LEADER ?", r: "Des fonds européens de développement rural gérés par des groupes d'action locale autour d'une stratégie locale." },
        { q: "Qu'est-ce qu'un groupe d'action locale ?", r: "Un groupe d'élus et d'acteurs privés qui choisit les projets financés par LEADER sur son territoire." },
        { q: "À quoi servent les zones de revitalisation rurale ?", r: "À attirer des entreprises dans des communes rurales fragiles grâce à des avantages fiscaux." },
        { q: "Qu'est-ce que le SCOT ?", r: "Le schéma de cohérence territoriale, qui fixe les grandes orientations d'aménagement d'un bassin de vie." },
        { q: "Qu'est-ce que le PLU ?", r: "Le plan local d'urbanisme, qui découpe le territoire en zones et fixe les règles de construction." },
        { q: "Quelles sont les zones d'un PLU ?", r: "Urbaines (U), à urbaniser (AU), agricoles (A) et naturelles (N)." },
        { q: "Qu'est-ce que le foncier ?", r: "La terre et sa propriété." },
        { q: "Quelles sont les causes de la pression foncière ?", r: "L'urbanisation, les infrastructures, les projets d'énergie, les prix élevés et la concurrence pour s'agrandir." },
        { q: "Qu'est-ce que l'expropriation pour cause d'utilité publique ?", r: "L'obligation pour un propriétaire de céder son terrain à la puissance publique pour un projet d'intérêt général, contre une indemnité." },
        { q: "Quelles sont les missions des SAFER ?", r: "Favoriser l'installation et le maintien des exploitations, protéger l'environnement et les paysages, accompagner le développement local." },
        { q: "Qu'est-ce que le droit de préemption de la SAFER ?", r: "La priorité d'achat d'une terre mise en vente, pour la revendre à un candidat choisi." },
        { q: "Quel est le rôle social du département ?", r: "Il gère le RSA, l'aide aux personnes âgées et handicapées, la protection de l'enfance." },
        { q: "Quel rôle les collectivités jouent-elles pour la santé en milieu rural ?", r: "Elles aident à l'installation des professionnels et financent des maisons de santé." },
      ],
      quiz: [
        { q: "Dans un PLU, une zone A est une zone :", choix: ["aéroportuaire", "à urbaniser", "artisanale", "agricole"], bonne: 3, expl: "Les zones A protègent les terres agricoles.", niv: 1 },
        { q: "Le RSA est géré par :", choix: ["le département", "la commune seule", "l'Union européenne", "la SAFER"], bonne: 0, expl: "Le département est chef de file de l'action sociale.", niv: 1 },
        { q: "La SAFER peut acheter une terre en priorité grâce à :", choix: ["un plan local d'urbanisme", "une MAEC", "son droit de préemption", "une ICHN"], bonne: 2, expl: "Elle se substitue à l'acheteur prévu, dans des conditions fixées par la loi.", niv: 1 },
        { q: "Le SCOT s'applique à l'échelle :", choix: ["d'une seule parcelle", "d'un bassin de vie", "de l'Union européenne", "d'une exploitation"], bonne: 1, expl: "Il regroupe souvent plusieurs intercommunalités.", niv: 1 },
        { q: "Un jeune veut s'installer, mais les terres libérées partent à l'agrandissement d'une grosse exploitation. Quel acteur peut intervenir ?", choix: ["L'INAO", "Le département", "La SAFER", "Le parc national"], bonne: 2, expl: "Elle peut préempter et rétrocéder la terre au jeune.", niv: 2 },
        { q: "Une commune achète des terrains pour une future école. Elle constitue :", choix: ["un circuit court", "une zone naturelle d'intérêt écologique", "une MAEC", "une réserve foncière"], bonne: 3, expl: "Elle prépare un projet d'intérêt général.", niv: 2 },
        { q: "Pourquoi le PLU protège-t-il les terres agricoles ?", choix: ["Il interdit ou limite la construction en zone A", "Il oblige les agriculteurs à vendre leurs terres à la commune", "Il supprime la PAC", "Il augmente l'étalement urbain"], bonne: 0, expl: "Les règles de zonage freinent l'artificialisation.", niv: 2 },
        { q: "Un groupe d'action locale finance un atelier de transformation partagé par des producteurs. Les fonds viennent :", choix: ["du RSA", "du programme LEADER", "de l'ICHN", "de la taxe d'habitation"], bonne: 1, expl: "LEADER soutient des projets locaux de développement rural.", niv: 2 },
        { q: "Laquelle n'est **pas** une cause de pression sur le foncier agricole ?", choix: ["L'urbanisation", "Les parcs photovoltaïques installés au sol", "Le zonage A", "La construction de routes"], bonne: 2, expl: "Le zonage agricole protège au contraire les terres.", niv: 2 },
        { q: "Pourquoi la SAFER revend-elle les terres à des candidats choisis par un comité ?", choix: ["Pour obtenir le meilleur prix au profit de l'ancien propriétaire", "Pour orienter les terres vers des projets d'intérêt général comme l'installation", "Pour garder les terres en réserve sans les cultiver ni les louer", "Pour les transformer en zones commerciales"], bonne: 1, expl: "La rétrocession sert ses missions d'installation et de protection.", niv: 3 },
        { q: "Une région verse une aide aux médecins qui s'installent en zone rurale. Elle cherche à réduire :", choix: ["les inégalités d'accès aux soins", "le nombre d'habitants", "les circuits courts", "les surfaces en prairie dans les zones de montagne"], bonne: 0, expl: "Les déserts médicaux sont une inégalité territoriale.", niv: 3 },
        { q: "Pourquoi l'expropriation donne-t-elle lieu à une indemnité ?", choix: ["Pour financer la PAC grâce à une taxe sur les terres vendues", "Pour punir le propriétaire qui refusait de vendre", "La terre perd toute valeur", "Le propriétaire perd son bien au profit d'un projet d'intérêt général"], bonne: 3, expl: "La privation de propriété doit être compensée.", niv: 3 },
      ],
    },
    {
      chapitre: 'stav-tt-6',
      fiche: `## Analyser un processus dans son contexte : choix, déterminants et enjeux

### Ce que l'on attend dans la seconde partie
- On étudie un **processus technologique** (un système de production, un aménagement, un service, une fabrication) dans un **territoire** et à un moment donné.
- Le candidat **analyse** des choix qui existent déjà : il ne conçoit pas de solution et ne juge pas l'agriculteur. Il explique **pourquoi** ces choix ont été faits et **ce qu'ils changent**.
- Les documents (présentation de l'exploitation, chronologie, interview, données chiffrées) sont la matière principale : il faut les **citer** et les relier à ses connaissances.

### Les mots clés
- **Processus** : l'ensemble organisé des opérations qui transforment des ressources en un résultat (un produit, un service, un espace aménagé).
- **Contexte** : tout ce qui entoure le processus et pèse sur lui : milieu naturel (sol, climat, relief), territoire (filières, voisins, parc naturel, tourisme), marché et prix, réglementation et aides, société (attentes des consommateurs), situation de l'agriculteur (famille, main-d'œuvre, endettement, histoire).
- **Choix sociotechnique** : une décision qui associe une **technique** (une race, une rotation, une machine) et une **organisation humaine** (travail, commercialisation, collectif, valeurs). On parle de sociotechnique parce que la technique n'est jamais choisie seule.
- **Déterminant** : un élément du contexte ou de la situation de l'acteur qui **explique** un choix. Familles : naturels et environnementaux, réglementaires, économiques et commerciaux, territoriaux, sociaux et culturels, valeurs et projet de vie, choix stratégiques antérieurs, caractéristiques techniques, attentes de la société, aléas (sécheresse, maladie, crise de prix).
- Un déterminant n'est ni positif ni négatif en lui-même : une contrainte peut devenir une **opportunité** (une zone de montagne permet une appellation).

### Les interactions
- Le contexte agit sur le processus (une sécheresse oblige à revoir l'alimentation du troupeau) et le processus agit sur le contexte (des haies plantées changent le paysage).
- Une même technique agit sur plusieurs éléments à la fois ; une même pratique ne donne pas le même effet partout.
- Les **logiques d'acteurs** expliquent les choix : l'agriculteur cherche un revenu, du temps libre, une cohérence avec ses valeurs ; la coopérative, la collectivité ou le parc ont d'autres attentes.
- Un choix est souvent un **compromis** entre des objectifs qui s'opposent (produire plus ou travailler moins, investir ou rester peu endetté).

### Les échelles
- Les choix se lisent à plusieurs **échelles** : la parcelle ou l'atelier, l'exploitation, le paysage, le territoire, et l'échelle **collective** (coopérative, groupe d'agriculteurs, gouvernance d'un territoire).

### Les enjeux
- Un **enjeu** est ce que l'on peut gagner ou perdre avec un choix. On le classe selon les trois piliers de la durabilité, et on peut ajouter les enjeux territoriaux :
  - **économiques** : revenu, valeur ajoutée, autonomie, coûts, risque ;
  - **sociaux** : travail (charge, pénibilité, astreinte), emploi, transmission, lien avec les habitants ;
  - **environnementaux** : eau, sol, biodiversité, climat, paysage ;
  - **territoriaux** : maintien d'une filière, image du territoire, vitalité locale.

### À retenir pour le bac
- Analyser des choix existants, sans les juger ni en inventer.
- Contexte = milieu, territoire, marché, règles, société, situation de l'acteur.
- Choix sociotechnique = technique et organisation humaine liées.
- Déterminants classés par familles ; une contrainte peut devenir une opportunité.
- Enjeux économiques, sociaux, environnementaux et territoriaux.`,
      cartes: [
        { q: "Qu'est-ce qu'un processus technologique ?", r: "L'ensemble organisé des opérations qui transforment des ressources en un résultat : produit, service ou espace aménagé." },
        { q: "Qu'est-ce que le contexte d'un processus ?", r: "Ce qui l'entoure et pèse sur lui : milieu naturel, territoire, marché, règles et aides, société, situation de l'acteur." },
        { q: "Qu'est-ce qu'un choix sociotechnique ?", r: "Une décision qui associe une technique et une organisation humaine (travail, vente, collectif, valeurs)." },
        { q: "Qu'est-ce qu'un déterminant ?", r: "Un élément du contexte ou de la situation de l'acteur qui explique un choix." },
        { q: "Citez cinq familles de déterminants.", r: "Naturels, réglementaires, économiques, territoriaux, sociaux et culturels, valeurs, choix antérieurs, aléas." },
        { q: "Un déterminant est-il positif ou négatif ?", r: "Ni l'un ni l'autre en lui-même : une contrainte peut devenir une opportunité." },
        { q: "Qu'est-ce qu'une logique d'acteur ?", r: "Le but qui oriente les décisions d'un acteur : revenu, temps libre, valeurs, intérêt du territoire." },
        { q: "Pourquoi un choix est-il souvent un compromis ?", r: "Parce qu'il doit concilier des objectifs qui s'opposent, comme produire plus et travailler moins." },
        { q: "À quelles échelles lit-on les choix ?", r: "Parcelle ou atelier, exploitation, paysage, territoire, et échelle collective." },
        { q: "Qu'est-ce qu'un enjeu ?", r: "Ce que l'on peut gagner ou perdre avec un choix." },
        { q: "Comment classer les enjeux ?", r: "Économiques, sociaux, environnementaux, et territoriaux." },
        { q: "Que ne doit-on pas faire dans la seconde partie ?", r: "Juger l'agriculteur ou inventer des solutions : on analyse des choix déjà faits." },
        { q: "Donnez un exemple d'interaction du processus sur le contexte.", r: "Des haies plantées par l'agriculteur modifient le paysage et la biodiversité du territoire." },
      ],
      quiz: [
        { q: "Dans la seconde partie, le candidat doit surtout :", choix: ["proposer à l'agriculteur un meilleur système de production", "inventer un nouveau système", "analyser des choix déjà faits", "recopier les documents"], bonne: 2, expl: "On explique les choix existants, on ne les conçoit pas.", niv: 1 },
        { q: "Une sécheresse qui oblige à acheter du fourrage est un déterminant de type :", choix: ["culturel", "valeur personnelle", "réglementaire", "aléa climatique"], bonne: 3, expl: "C'est un événement imprévu du milieu.", niv: 1 },
        { q: "Ce que l'on peut gagner ou perdre avec un choix s'appelle :", choix: ["un déterminant", "un intrant", "un processus", "un enjeu"], bonne: 3, expl: "L'enjeu porte sur les conséquences du choix.", niv: 1 },
        { q: "Choisir une race rustique et organiser la vente en caissettes est un choix :", choix: ["sans lien avec le travail", "purement financier", "sociotechnique", "réglementaire"], bonne: 2, expl: "Il lie une technique et une organisation humaine.", niv: 1 },
        { q: "Un éleveur passe en bio parce qu'il veut moins utiliser de produits chimiques. Ce déterminant relève :", choix: ["d'un aléa climatique", "des valeurs et du projet de vie", "d'une obligation fixée par la politique agricole commune", "des caractéristiques du sol"], bonne: 1, expl: "Ses convictions personnelles orientent son choix.", niv: 2 },
        { q: "Une exploitation en montagne obtient une meilleure valorisation grâce à une appellation. Cela montre que :", choix: ["une contrainte peut devenir une opportunité", "un déterminant est négatif dans la plupart des situations", "le milieu compte peu dans les choix", "les aides sont inutiles"], bonne: 0, expl: "Le handicap naturel devient un atout commercial.", niv: 2 },
        { q: "Réduire son troupeau pour avoir plus de temps libre, au prix d'une baisse de chiffre d'affaires, est :", choix: ["un compromis", "un refus de choisir", "une erreur technique", "une obligation légale"], bonne: 0, expl: "Il arbitre entre revenu et conditions de travail.", niv: 2 },
        { q: "Une coopérative qui impose un cahier des charges à ses adhérents agit à l'échelle :", choix: ["de la parcelle seule", "collective", "mondiale", "de la seule famille"], bonne: 1, expl: "La décision engage un groupe d'agriculteurs.", niv: 2 },
        { q: "Lequel n'est **pas** un déterminant d'un choix ?", choix: ["Le prix du lait", "L'enjeu de revenu qui découlera du choix", "Une réglementation sur les nitrates", "Le départ à la retraite d'un associé de l'exploitation"], bonne: 1, expl: "L'enjeu est une conséquence, pas une cause du choix.", niv: 2 },
        { q: "La baisse de la charge de travail après l'arrêt de la traite est un enjeu :", choix: ["climatique", "environnemental", "réglementaire", "social"], bonne: 3, expl: "Il concerne les conditions de travail de l'éleveur.", niv: 3 },
        { q: "Pourquoi faut-il citer les documents dans la seconde partie ?", choix: ["Parce que les connaissances sont interdites", "Pour montrer au correcteur qu'on a lu les documents en entier", "Ils prouvent les liens entre le contexte et les choix", "Pour éviter de répondre aux consignes"], bonne: 2, expl: "L'analyse s'appuie sur des éléments précis du dossier.", niv: 3 },
        { q: "Un même apport d'engrais ne donne pas le même rendement dans deux régions. Cela illustre que :", choix: ["l'effet d'une pratique dépend du contexte", "les engrais ont un effet faible", "le rendement dépend avant tout de la dose d'engrais apportée sur la parcelle", "le climat est sans importance"], bonne: 0, expl: "Sol et climat modifient les effets d'une technique.", niv: 3 },
      ],
    },
    {
      chapitre: 'stav-tt-7',
      fiche: `## Production végétale : itinéraire technique, système de culture et assolement

### Les notions de base
- **Itinéraire technique** : la suite logique et ordonnée des opérations culturales appliquées à une culture sur une parcelle, du travail du sol à la récolte : préparation du sol, semis (date, densité, variété), fertilisation, désherbage, protection contre les maladies et ravageurs, irrigation, récolte.
- **Système de culture** : l'ensemble des modalités techniques mises en œuvre sur des parcelles traitées de façon identique. Il se définit par la **nature des cultures et leur ordre de succession** (la rotation), les **itinéraires techniques** appliqués et le **choix des variétés**.
- **Rotation** : l'ordre de succession des cultures sur une même parcelle au fil des années (par exemple colza, blé, orge). **Succession** : la suite des cultures d'une année à l'autre ; une rotation est une succession qui se répète.
- **Assolement** : la répartition des cultures entre les parcelles de l'exploitation **une année donnée** (par exemple 40 % de blé, 30 % de maïs, 30 % de prairies).
- **Système de production** : la combinaison des ateliers (cultures, élevages, transformation, accueil) et des moyens (terre, travail, capital) d'une exploitation.

### Raisonner les opérations
- Il n'y a pas de lien direct entre une seule opération et le rendement : le résultat dépend de l'ensemble de l'itinéraire, du sol et du climat.
- L'agriculteur décide dans l'**incertitude** (météo, prix, maladies) et adapte son itinéraire en cours de campagne.
- Une opération a plusieurs effets : un labour enfouit les mauvaises herbes mais consomme du carburant et peut dégrader la vie du sol.

### Les leviers agroécologiques
- **Allonger et diversifier la rotation** : casser le cycle des maladies et des mauvaises herbes, mieux répartir le travail et les risques.
- **Introduire des légumineuses** (luzerne, trèfle, féverole, lentille, pois) : elles fixent l'azote de l'air et réduisent les achats d'engrais ; elles apportent des protéines pour l'élevage.
- **Couverts végétaux** entre deux cultures : protéger le sol de l'érosion, piéger les nitrates, nourrir la vie du sol.
- **Réduire le travail du sol** (techniques sans labour, semis direct) : économiser du temps et du carburant, préserver la structure du sol.
- **Biodiversité fonctionnelle** : haies, bandes fleuries et auxiliaires des cultures pour limiter les ravageurs.
- **Associations de cultures** et **mélanges de variétés** : plus de résistance aux aléas.
- **Bouclage des cycles** et **complémentarité culture-élevage** : le fumier fertilise les champs, les champs nourrissent le troupeau.
- **Désherbage mécanique** (herse étrille, bineuse) et outils de précision (guidage, modulation des doses) pour réduire les produits phytosanitaires.

### À retenir pour le bac
- Itinéraire technique : suite ordonnée des opérations sur une culture.
- Système de culture : cultures et ordre de succession, itinéraires, variétés.
- Rotation (dans le temps, sur une parcelle) et assolement (dans l'espace, une année).
- Pas de lien direct entre une opération et le rendement ; décision dans l'incertitude.
- Leviers : rotation longue, légumineuses, couverts, moins de travail du sol, biodiversité, lien culture-élevage.`,
      cartes: [
        { q: "Qu'est-ce qu'un itinéraire technique ?", r: "La suite logique et ordonnée des opérations culturales appliquées à une culture sur une parcelle." },
        { q: "Citez les grandes étapes d'un itinéraire technique.", r: "Travail du sol, semis, fertilisation, désherbage, protection des cultures, irrigation, récolte." },
        { q: "Comment définit-on un système de culture ?", r: "Par la nature des cultures et leur ordre de succession, les itinéraires techniques et les variétés." },
        { q: "Qu'est-ce qu'une rotation ?", r: "L'ordre de succession des cultures sur une même parcelle, qui se répète au fil des années." },
        { q: "Qu'est-ce que l'assolement ?", r: "La répartition des cultures entre les parcelles de l'exploitation une année donnée." },
        { q: "Rotation ou assolement ?", r: "La rotation se lit dans le temps sur une parcelle ; l'assolement dans l'espace sur une année." },
        { q: "Qu'est-ce qu'un système de production ?", r: "La combinaison des ateliers et des moyens (terre, travail, capital) d'une exploitation." },
        { q: "Pourquoi n'y a-t-il pas de lien direct entre une opération et le rendement ?", r: "Le rendement dépend de tout l'itinéraire, du sol et du climat." },
        { q: "Quel est l'intérêt des légumineuses ?", r: "Elles fixent l'azote de l'air, réduisent les achats d'engrais et apportent des protéines pour l'élevage." },
        { q: "À quoi sert un couvert végétal entre deux cultures ?", r: "Protéger le sol de l'érosion, piéger les nitrates et nourrir la vie du sol." },
        { q: "Pourquoi allonger la rotation ?", r: "Pour casser le cycle des maladies et des mauvaises herbes et répartir travail et risques." },
        { q: "Qu'est-ce que la biodiversité fonctionnelle ?", r: "Les êtres vivants utiles aux cultures, comme les auxiliaires qui mangent les ravageurs, favorisés par haies et bandes fleuries." },
        { q: "Citez deux outils de désherbage mécanique.", r: "La herse étrille et la bineuse." },
      ],
      quiz: [
        { q: "La répartition des cultures sur les parcelles une année donnée s'appelle :", choix: ["la jachère", "la rotation", "l'itinéraire technique", "l'assolement"], bonne: 3, expl: "L'assolement se lit dans l'espace, à un moment donné.", niv: 1 },
        { q: "Colza, puis blé, puis orge, et on recommence : c'est :", choix: ["un assolement", "un itinéraire technique", "une rotation", "une filière"], bonne: 2, expl: "C'est une succession qui se répète sur une parcelle.", niv: 1 },
        { q: "La luzerne et le trèfle sont des :", choix: ["graminées fourragères", "céréales", "oléagineux et céréales", "légumineuses"], bonne: 3, expl: "Elles fixent l'azote de l'air grâce à des bactéries.", niv: 1 },
        { q: "La herse étrille sert à :", choix: ["désherber mécaniquement", "récolter le blé", "traire les vaches", "irriguer les cultures pendant l'été"], bonne: 0, expl: "Elle arrache les jeunes mauvaises herbes.", niv: 1 },
        { q: "Un agriculteur introduit des pois dans sa rotation. L'effet principal attendu est :", choix: ["moins d'engrais azoté à acheter", "plus de maladies du blé", "une hausse de l'érosion", "davantage de travail du sol avant le semis"], bonne: 0, expl: "La légumineuse fixe l'azote de l'air.", niv: 2 },
        { q: "Un couvert semé après la moisson du blé permet surtout :", choix: ["d'accélérer l'érosion", "d'augmenter les ravageurs", "de remplacer la récolte de blé de l'année suivante", "de piéger les nitrates et de protéger le sol"], bonne: 3, expl: "Le sol n'est plus nu en hiver.", niv: 2 },
        { q: "Abandonner le labour permet de gagner du temps, mais peut :", choix: ["supprimer tout besoin de semis", "augmenter la pression des mauvaises herbes", "faire disparaître les vers de terre", "rendre le sol nettement plus compact et moins portant"], bonne: 1, expl: "Le labour enfouissait une partie des graines d'adventices.", niv: 2 },
        { q: "Le fumier du troupeau fertilise les cultures qui nourrissent le troupeau. C'est :", choix: ["une monoculture", "le bouclage des cycles", "un circuit long", "une artificialisation"], bonne: 1, expl: "Culture et élevage sont complémentaires.", niv: 2 },
        { q: "Lequel n'est **pas** un élément qui définit un système de culture ?", choix: ["La nature et l'ordre des cultures", "Les itinéraires techniques", "Le troupeau", "Le choix des variétés"], bonne: 2, expl: "Le troupeau relève de la conduite d'élevage.", niv: 2 },
        { q: "Pourquoi une rotation plus longue réduit-elle le besoin de traitements ?", choix: ["Cette rotation supprime les auxiliaires", "Elle augmente l'usage des pesticides sur les cultures suivantes", "Les ravageurs et maladies propres à une culture ne trouvent plus leur hôte", "Elle rend les sols plus acides"], bonne: 2, expl: "On casse le cycle des bioagresseurs.", niv: 3 },
        { q: "Deux agriculteurs appliquent le même itinéraire mais n'ont pas le même rendement. L'explication la plus probable :", choix: ["l'un a mal compté ses parcelles", "le sol et le climat diffèrent", "le rendement ne dépend de rien", "les variétés n'existent pas"], bonne: 1, expl: "Le résultat dépend aussi du milieu.", niv: 3 },
        { q: "Pourquoi l'agriculteur adapte-t-il son itinéraire en cours de campagne ?", choix: ["Il décide dans l'incertitude de la météo, des maladies et des prix", "La loi l'oblige à changer d'itinéraire chaque mois de l'année", "Les semis se font en été", "L'itinéraire est fixé par la commune"], bonne: 0, expl: "Il ajuste ses décisions aux événements de l'année.", niv: 3 },
      ],
    },
    {
      chapitre: 'stav-tt-8',
      fiche: `## Production animale : conduite d'élevage et autonomie

### La conduite d'un troupeau
- La **conduite d'élevage** regroupe les choix sur la **race**, la **reproduction** (période de vêlage ou d'agnelage, insémination ou taureau), l'**alimentation**, le **logement**, la **santé** et la **commercialisation** des animaux et des produits.
- Exemples d'orientation : **élevage laitier** (lait livré ou transformé à la ferme), **élevage allaitant** (vaches qui élèvent leurs veaux, vendus pour la viande), élevage ovin, caprin, porcin, avicole.
- Une **race rustique** (adaptée à un milieu difficile, robuste) ou une race très productive : le choix dépend du milieu, des débouchés et du projet de l'éleveur.

### Le chargement et les surfaces
- L'**UGB** (unité gros bétail) permet d'additionner des animaux différents : une vache laitière vaut 1 UGB, un veau beaucoup moins, une brebis environ 0,15.
- Le **chargement** est le nombre d'UGB par hectare de surface fourragère. Un chargement faible (par exemple 1 UGB/ha) correspond à un élevage extensif ; un cahier des charges d'appellation ou une aide peut fixer un **chargement maximal**.
- **SAU** : surface agricole utile. **SFP** : surface fourragère principale (prairies et cultures destinées au troupeau).
- **Prairie permanente** (en herbe depuis longtemps, riche en biodiversité, qui stocke du carbone) et **prairie temporaire** (semée pour quelques années, souvent avec des légumineuses).

### L'autonomie
- **Autonomie fourragère** : l'exploitation produit elle-même les fourrages (herbe pâturée, foin, ensilage) dont le troupeau a besoin.
- **Autonomie protéique** : elle produit les protéines nécessaires (luzerne, trèfle, pois, féverole) au lieu d'acheter du tourteau de soja, souvent importé.
- **Autonomie décisionnelle** et **financière** : moins dépendre des fournisseurs, des acheteurs et des prix.
- Moyens : ajuster la taille du troupeau aux surfaces, allonger le **pâturage**, stocker plus de foin, cultiver des légumineuses et des méteils (mélanges céréales-protéagineux), choisir des animaux moins exigeants.
- Intérêts : moins d'achats, moins de risque face aux hausses de prix, meilleure résistance aux sécheresses, image de qualité.

### Santé, bien-être et travail
- **Santé intégrée** : prévenir plutôt que soigner (hygiène, alimentation adaptée, sélection d'animaux résistants), réduire les antibiotiques.
- **Bien-être animal** : accès à l'extérieur, place, confort, absence de douleur inutile ; c'est une attente forte de la société.
- **Biosécurité** : mesures pour empêcher l'entrée et la diffusion des maladies (quarantaine, désinfection, contrôle des visiteurs).
- **Travail** : l'élevage demande une **astreinte** (traite deux fois par jour, soins quotidiens). Arrêter la traite, regrouper les vêlages, simplifier les bâtiments ou embaucher sont des choix pour améliorer les conditions de travail.

### À retenir pour le bac
- Conduite d'élevage : race, reproduction, alimentation, logement, santé, vente.
- UGB et chargement (UGB par hectare de SFP).
- Autonomie fourragère et protéique : produire soi-même fourrages et protéines.
- Santé intégrée, bien-être, biosécurité.
- Le travail et l'astreinte sont des déterminants majeurs des choix.`,
      cartes: [
        { q: "Que regroupe la conduite d'élevage ?", r: "Les choix de race, de reproduction, d'alimentation, de logement, de santé et de commercialisation." },
        { q: "Qu'est-ce qu'un élevage allaitant ?", r: "Un élevage où les vaches élèvent leurs veaux, vendus pour la viande." },
        { q: "Qu'est-ce qu'une race rustique ?", r: "Une race robuste, adaptée à un milieu difficile, souvent moins productive mais moins exigeante." },
        { q: "Qu'est-ce que l'UGB ?", r: "L'unité gros bétail, qui permet d'additionner des animaux différents ; une vache laitière vaut 1 UGB." },
        { q: "Qu'est-ce que le chargement ?", r: "Le nombre d'UGB par hectare de surface fourragère." },
        { q: "Que signifient SAU et SFP ?", r: "Surface agricole utile ; surface fourragère principale, destinée au troupeau." },
        { q: "Prairie permanente ou temporaire ?", r: "La permanente est en herbe depuis longtemps ; la temporaire est semée pour quelques années." },
        { q: "Qu'est-ce que l'autonomie fourragère ?", r: "Produire sur l'exploitation les fourrages dont le troupeau a besoin." },
        { q: "Qu'est-ce que l'autonomie protéique ?", r: "Produire soi-même les protéines du troupeau (luzerne, pois, féverole) au lieu d'acheter du soja." },
        { q: "Qu'est-ce qu'un méteil ?", r: "Un mélange de céréales et de protéagineux semés ensemble, souvent pour nourrir le troupeau." },
        { q: "Quels sont les intérêts de l'autonomie ?", r: "Moins d'achats, moins de risque face aux prix, meilleure résistance aux sécheresses, image de qualité." },
        { q: "Qu'est-ce que la biosécurité ?", r: "Les mesures qui empêchent l'entrée et la diffusion des maladies dans un élevage." },
        { q: "Qu'est-ce que l'astreinte en élevage ?", r: "Le travail obligatoire de chaque jour, comme la traite et les soins, qui ne peut pas attendre." },
      ],
      quiz: [
        { q: "Une vache laitière vaut :", choix: ["0,15 UGB", "0,5 UGB", "1 UGB", "0,8 UGB"], bonne: 2, expl: "C'est l'unité de référence.", niv: 1 },
        { q: "Le chargement se mesure en :", choix: ["litres de lait par vache", "UGB par hectare de surface fourragère", "euros par hectare", "tonnes de fourrage récoltées par hectare et par an"], bonne: 1, expl: "Il compare le troupeau aux surfaces qui le nourrissent.", niv: 1 },
        { q: "Les veaux d'un élevage allaitant sont élevés :", choix: ["par leur mère", "au biberon de lait en poudre", "en ville", "par la coopérative"], bonne: 0, expl: "La vache allaite son veau, vendu pour la viande.", niv: 1 },
        { q: "Remplacer le tourteau de soja par de la luzerne vise :", choix: ["la monoculture", "l'artificialisation", "l'autonomie protéique", "la hausse des achats d'aliments"], bonne: 2, expl: "La luzerne apporte des protéines produites sur la ferme.", niv: 1 },
        { q: "Un éleveur a 60 UGB sur 50 ha de surface fourragère. Son chargement est de :", choix: ["0,8 UGB/ha", "0,6 UGB/ha", "1 UGB/ha", "1,2 UGB/ha"], bonne: 3, expl: "60 divisé par 50 donne 1,2.", niv: 2 },
        { q: "Pourquoi un éleveur réduit-il son troupeau pour gagner en autonomie fourragère ?", choix: ["Pour acheter davantage de fourrage à l'extérieur de l'exploitation", "Pour ajuster le nombre d'animaux à ce que ses surfaces produisent", "Pour augmenter son chargement", "Pour supprimer le pâturage"], bonne: 1, expl: "Moins d'animaux pour la même surface : moins d'achats.", niv: 2 },
        { q: "Une quarantaine des animaux achetés avant de les mettre avec le troupeau relève de :", choix: ["l'autonomie protéique", "l'assolement", "la conditionnalité", "la biosécurité"], bonne: 3, expl: "On évite d'introduire une maladie.", niv: 2 },
        { q: "Regrouper les vêlages sur deux mois au printemps permet surtout :", choix: ["de supprimer la reproduction", "d'augmenter l'astreinte et d'étaler les naissances sur toute l'année", "de concentrer le travail et de profiter de l'herbe", "d'éviter le pâturage"], bonne: 2, expl: "Le travail est mieux organisé et les vaches utilisent l'herbe.", niv: 2 },
        { q: "Lequel n'est **pas** un moyen de gagner en autonomie ?", choix: ["Acheter plus de tourteau de soja importé", "Allonger la saison de pâturage au printemps et à l'automne", "Cultiver des méteils", "Stocker davantage de foin"], bonne: 0, expl: "Acheter plus accroît la dépendance.", niv: 2 },
        { q: "Pourquoi l'autonomie fourragère aide-t-elle à mieux résister à une hausse du prix des aliments ?", choix: ["L'éleveur achète moins et dépend moins du marché", "Les prix des aliments restent stables", "Elle augmente les achats", "Elle oblige à vendre une partie du troupeau chaque année"], bonne: 0, expl: "Moins d'achats, moins d'exposition aux prix.", niv: 3 },
        { q: "Un cahier des charges fixe un chargement maximal de 1,3 UGB/ha. Quel enjeu cette règle sert-elle ?", choix: ["Augmenter la production de lait par hectare et par vache", "Lier le produit à l'herbe et à un élevage extensif", "Supprimer les prairies", "Remplacer le pâturage par du soja"], bonne: 1, expl: "Le lien au terroir passe par l'herbe locale.", niv: 3 },
        { q: "Pourquoi les prairies permanentes ont-elles un enjeu environnemental ?", choix: ["Elles ne servent qu'aux loisirs", "Elles reçoivent beaucoup de pesticides et d'engrais de synthèse", "Elles favorisent l'érosion", "Elles stockent du carbone et abritent une grande biodiversité"], bonne: 3, expl: "Un retournement libère le carbone stocké.", niv: 3 },
      ],
    },
    {
      chapitre: 'stav-tt-9',
      fiche: `## Performances, indicateurs et transition agroécologique

### Mesurer les performances
- On juge un système avec des **indicateurs** chiffrés, qu'il faut comparer à des références (moyennes d'un groupe, années précédentes).
- **Indicateurs techniques** : rendement (quintaux par hectare), production de lait par vache, nombre de veaux sevrés par vache, chargement, quantité de concentrés par animal.
- **Indicateurs économiques** : produit brut (ce que l'exploitation produit en valeur), charges, **marge brute** (produit d'un atelier moins ses charges opérationnelles), **excédent brut d'exploitation** (ce qui reste pour rembourser les emprunts, investir et rémunérer l'agriculteur), revenu, part des aides dans le revenu, endettement.
- **Indicateurs sociaux** : temps de travail, astreinte, nombre d'emplois, semaines de congés, pénibilité.
- **Indicateurs environnementaux** : **IFT** (indice de fréquence de traitement, qui mesure l'usage des produits phytosanitaires), bilan azoté, consommation d'énergie et d'eau, émissions de gaz à effet de serre, longueur de haies, part de prairies.
- Un bon résultat économique peut cacher un mauvais résultat social ou environnemental : on regarde les trois dimensions de la **durabilité**.

### Économie et efficacité
- **Intensif** : beaucoup d'intrants et de capital par hectare pour produire beaucoup. **Extensif** : peu d'intrants par hectare, plus de surface.
- **Système économe** : produire un peu moins, mais avec beaucoup moins de charges, ce qui peut donner un meilleur revenu.
- **Valeur ajoutée** : on l'augmente en transformant à la ferme, en vendant en circuit court ou sous signe de qualité.
- **Diversification** : ajouter un atelier (transformation, vente, accueil, énergie) pour répartir les risques et créer de la valeur.

### Sécurité au travail
- L'agriculture a un taux d'accidents élevé : machines (tracteurs, prises de force), animaux, chutes, produits chimiques.
- Prévention : formation, équipements de protection, bâtiments et contention adaptés, entretien du matériel ; l'agriculteur employeur doit évaluer les risques.

### Les transitions
- **Agriculture biologique** : pas d'engrais ni de pesticides de synthèse, pas d'OGM ; **conversion** de deux ou trois ans avant de vendre en bio.
- **Agriculture de conservation des sols** : sol couvert en permanence, travail du sol réduit, rotations diversifiées.
- **Démarches collectives** : groupes d'agriculteurs qui échangent et testent ensemble (GIEE, groupes Dephy), CUMA pour partager le matériel.
- Une transition prend du **temps**, comporte des **risques** (baisse temporaire des rendements, apprentissage) et demande souvent un accompagnement (conseil, aides, groupe).

### À retenir pour le bac
- Indicateurs techniques, économiques, sociaux, environnementaux, à comparer à des références.
- Marge brute, EBE, revenu ; IFT et bilan azoté.
- Système économe : moins de charges, revenu parfois meilleur.
- Valeur ajoutée par transformation, circuit court, qualité ; diversification.
- Transitions : bio, conservation des sols, groupes, CUMA ; elles prennent du temps.`,
      cartes: [
        { q: "Pourquoi comparer un indicateur à une référence ?", r: "Un chiffre seul ne dit rien : on le compare à un groupe ou aux années précédentes." },
        { q: "Citez trois indicateurs techniques.", r: "Rendement, lait par vache, veaux sevrés par vache, chargement, concentrés par animal." },
        { q: "Qu'est-ce que la marge brute ?", r: "Le produit d'un atelier moins ses charges opérationnelles." },
        { q: "Qu'est-ce que l'excédent brut d'exploitation ?", r: "Ce qui reste pour rembourser les emprunts, investir et rémunérer l'agriculteur." },
        { q: "Citez deux indicateurs sociaux.", r: "Temps de travail, astreinte, nombre d'emplois, semaines de congés." },
        { q: "Qu'est-ce que l'IFT ?", r: "L'indice de fréquence de traitement, qui mesure l'usage des produits phytosanitaires." },
        { q: "Intensif ou extensif ?", r: "Intensif : beaucoup d'intrants par hectare ; extensif : peu d'intrants par hectare et plus de surface." },
        { q: "Qu'est-ce qu'un système économe ?", r: "Un système qui produit un peu moins avec beaucoup moins de charges, pour un revenu parfois meilleur." },
        { q: "Comment augmenter la valeur ajoutée ?", r: "En transformant à la ferme, en vendant en circuit court ou sous signe de qualité." },
        { q: "Qu'est-ce que la diversification ?", r: "L'ajout d'un atelier (transformation, vente, accueil, énergie) pour répartir les risques et créer de la valeur." },
        { q: "Qu'interdit l'agriculture biologique ?", r: "Les engrais et pesticides de synthèse et les OGM." },
        { q: "Quels sont les principes de l'agriculture de conservation des sols ?", r: "Sol couvert en permanence, travail du sol réduit, rotations diversifiées." },
        { q: "Qu'est-ce qu'une CUMA ?", r: "Une coopérative d'utilisation de matériel agricole : des agriculteurs achètent et partagent des machines." },
      ],
      quiz: [
        { q: "L'IFT mesure :", choix: ["le chargement", "le temps de travail passé à traiter les cultures", "la valeur du lait vendu", "l'usage des produits phytosanitaires"], bonne: 3, expl: "Indice de fréquence de traitement.", niv: 1 },
        { q: "La marge brute d'un atelier est égale :", choix: ["au chiffre d'affaires de toute l'exploitation, aides comprises", "aux aides seules", "au produit moins les charges opérationnelles", "au nombre d'hectares"], bonne: 2, expl: "Elle mesure ce que rapporte un atelier.", niv: 1 },
        { q: "Une CUMA permet aux agriculteurs :", choix: ["de partager du matériel", "de vendre leurs terres", "de toucher l'ICHN", "de fixer le prix du lait"], bonne: 0, expl: "Coopérative d'utilisation de matériel agricole.", niv: 1 },
        { q: "Le nombre de semaines de congés de l'éleveur est un indicateur :", choix: ["économique", "social", "environnemental", "technique"], bonne: 1, expl: "Il concerne les conditions de vie et de travail.", niv: 1 },
        { q: "Un atelier rapporte 90 000 € de produit pour 35 000 € de charges opérationnelles. Sa marge brute est de :", choix: ["65 000 €", "125 000 €", "90 000 €", "55 000 €"], bonne: 3, expl: "90 000 moins 35 000.", niv: 2 },
        { q: "Un éleveur produit moins de lait mais achète beaucoup moins d'aliments, et son revenu monte. Son système est :", choix: ["économe", "plus intensif", "sans charges", "plus endetté"], bonne: 0, expl: "Il gagne sur les charges plus qu'il ne perd sur le produit.", niv: 2 },
        { q: "Une ferme fabrique des yaourts vendus au marché. Elle cherche surtout à :", choix: ["augmenter sa valeur ajoutée", "réduire sa production et vendre à une laiterie", "allonger son circuit", "supprimer son atelier lait"], bonne: 0, expl: "Transformation et vente directe gardent la valeur à la ferme.", niv: 2 },
        { q: "Pendant la conversion en bio, l'agriculteur :", choix: ["vend tout de suite en bio", "applique le cahier des charges bio sans encore vendre sous ce label", "peut utiliser des pesticides de synthèse en attendant le label", "n'a plus de règles à suivre"], bonne: 1, expl: "La conversion dure deux ou trois ans.", niv: 2 },
        { q: "Lequel n'est **pas** un indicateur environnemental ?", choix: ["Le bilan azoté", "La marge brute de l'atelier", "La longueur de haies par hectare", "La consommation d'énergie"], bonne: 1, expl: "La marge brute est un indicateur économique.", niv: 2 },
        { q: "Pourquoi ajouter un gîte à la ferme peut-il réduire le risque économique ?", choix: ["Il augmente le chargement", "Le gîte supprime les charges de l'atelier d'élevage", "Le revenu ne dépend plus d'une seule production", "Il remplace les aides de la PAC"], bonne: 2, expl: "La diversification répartit les risques.", niv: 3 },
        { q: "Pourquoi un très bon revenu ne suffit-il pas à dire qu'un système est durable ?", choix: ["La durabilité se mesure par le revenu", "Le revenu ne compte pas du tout", "Il peut s'accompagner d'une surcharge de travail ou d'une pollution", "Un bon revenu est interdit par la PAC"], bonne: 2, expl: "On regarde les trois dimensions de la durabilité.", niv: 3 },
        { q: "Pourquoi les groupes d'agriculteurs facilitent-ils une transition ?", choix: ["Ils suppriment les aides", "Ils imposent un prix unique", "Ils remplacent l'agriculteur dans ses décisions et fixent ses rotations à sa place", "Ils partagent les essais, les réussites et réduisent les risques de l'apprentissage"], bonne: 3, expl: "On apprend plus vite et à plusieurs.", niv: 3 },
      ],
    },
    {
      chapitre: 'stav-tt-10',
      fiche: `## Les autres domaines : aménagement, agroéquipements, services et transformation

### Une même méthode pour tous
- Dans chaque domaine, la seconde partie suit la même démarche : décrire le **processus**, repérer les éléments du **contexte**, relier les **choix sociotechniques** à leurs **déterminants**, et dégager les **enjeux**.
- Seuls le processus étudié et le vocabulaire technique changent. Les chapitres 6 et 9 valent pour tous les domaines.

### Aménagement des espaces naturels et ruraux
- Processus : un **projet d'aménagement** (restauration d'une zone humide, entretien d'une rivière, sentier de découverte, gestion d'un espace naturel sensible, aménagement paysager).
- Étapes d'un projet : **diagnostic** du site (milieu, usages, acteurs), définition des **objectifs**, choix des **techniques** (génie écologique, plantations, pâturage d'entretien), **réalisation**, **suivi** et évaluation.
- Notions : **gestion différenciée** (adapter l'entretien selon les espaces), **génie écologique** (utiliser le vivant pour réparer un milieu), **maître d'ouvrage** (celui qui commande et finance le projet, souvent une collectivité) et **maître d'œuvre** (celui qui conçoit et suit les travaux).
- Déterminants typiques : protection réglementaire du site, usages du public, budget de la collectivité, attentes des riverains.

### Agroéquipements
- Processus : un **chantier** mécanisé (récolte, semis, désherbage, épandage) et le choix des matériels.
- Notions : **débit de chantier** (surface traitée par heure), coût d'utilisation d'un matériel, organisation du travail, **agriculture de précision** (guidage par satellite, modulation des doses, capteurs), robotique, sécurité des machines.
- Choix d'équipement : achat seul, en **CUMA**, recours à une **entreprise de travaux agricoles**, location. Déterminants : surface, main-d'œuvre, trésorerie, fenêtres météo, réglementation (épandage, réduction des pesticides).
- Le sujet 2025 de ce domaine autorisait la calculatrice.

### Services en milieu rural
- Processus : un **service** à la population (aide à domicile, accueil de loisirs, tourisme, maison France services, épicerie solidaire, transport à la demande).
- Notions : **besoin** de la population, **offre** de service, **usager** ou client, **démarche qualité**, partenariat entre structures (associations, collectivités, entreprises), financement public et privé.
- Déterminants typiques : vieillissement, isolement, mobilité, politiques sociales du département, attractivité touristique.

### Transformation alimentaire
- Processus : une **fabrication** (fromage, charcuterie, conserves, pain, jus), de la matière première au produit fini.
- Notions : **diagramme de fabrication** (suite des étapes), maîtrise de l'hygiène et de la qualité (rappel : la méthode HACCP est vue en gestion des ressources et de l'alimentation), **traçabilité**, **conditionnement**, **innovation** de produit ou de procédé.
- Déterminants typiques : cahier des charges d'un signe de qualité, attentes des consommateurs, normes sanitaires, approvisionnement local, débouchés.

### À retenir pour le bac
- Même méthode pour les cinq domaines : processus, contexte, choix, déterminants, enjeux.
- Aménagement : diagnostic, objectifs, techniques, réalisation, suivi ; maître d'ouvrage et maître d'œuvre.
- Agroéquipements : chantier, débit, coûts, précision, partage du matériel.
- Services : besoin, offre, usager, partenariats.
- Transformation : diagramme de fabrication, traçabilité, conditionnement, innovation.`,
      cartes: [
        { q: "Quelle démarche est commune aux cinq domaines ?", r: "Décrire le processus, repérer le contexte, relier choix et déterminants, dégager les enjeux." },
        { q: "Quelles sont les étapes d'un projet d'aménagement ?", r: "Diagnostic, objectifs, choix des techniques, réalisation, suivi et évaluation." },
        { q: "Qu'est-ce que la gestion différenciée ?", r: "Adapter l'entretien selon les espaces, plutôt que de tout entretenir de la même façon." },
        { q: "Qu'est-ce que le génie écologique ?", r: "Utiliser le vivant (plantes, pâturage) pour restaurer ou réparer un milieu." },
        { q: "Maître d'ouvrage ou maître d'œuvre ?", r: "Le maître d'ouvrage commande et finance ; le maître d'œuvre conçoit et suit les travaux." },
        { q: "Qu'est-ce que le débit de chantier ?", r: "La surface traitée par heure par un matériel." },
        { q: "Qu'est-ce que l'agriculture de précision ?", r: "L'usage du guidage par satellite, des capteurs et de la modulation des doses pour ajuster les interventions." },
        { q: "Quelles solutions pour disposer d'un matériel ?", r: "L'achat seul, la CUMA, une entreprise de travaux agricoles ou la location." },
        { q: "Quelles notions utilise-t-on dans le domaine des services ?", r: "Besoin, offre, usager, démarche qualité, partenariats et financements." },
        { q: "Qu'est-ce qu'un diagramme de fabrication ?", r: "La suite ordonnée des étapes qui transforment une matière première en produit fini." },
        { q: "Qu'est-ce que la traçabilité ?", r: "La capacité à suivre un produit et ses ingrédients à chaque étape, de l'origine à la vente." },
        { q: "Citez deux déterminants typiques de la transformation.", r: "Le cahier des charges d'un signe de qualité, les normes sanitaires, les attentes des consommateurs, l'approvisionnement." },
      ],
      quiz: [
        { q: "Dans un projet d'aménagement, la première étape est :", choix: ["la réalisation des travaux", "le diagnostic du site", "le suivi", "l'inauguration"], bonne: 1, expl: "On étudie le milieu, les usages et les acteurs avant de décider.", niv: 1 },
        { q: "La surface traitée par heure par une machine s'appelle :", choix: ["le débit de chantier", "le chargement", "la marge brute", "l'IFT"], bonne: 0, expl: "C'est un indicateur clé en agroéquipements.", niv: 1 },
        { q: "La suite des étapes d'une fabrication de fromage se présente dans :", choix: ["un contrat de ruralité", "un plan local d'urbanisme", "un assolement", "un diagramme de fabrication"], bonne: 3, expl: "Il décrit le procédé étape par étape.", niv: 1 },
        { q: "La commune qui commande et finance la restauration d'une mare est :", choix: ["le maître d'œuvre", "l'usager", "le maître d'ouvrage", "le fournisseur des matériaux"], bonne: 2, expl: "Le maître d'ouvrage porte le projet.", niv: 1 },
        { q: "Des moutons pâturent une pelouse sèche pour éviter qu'elle se referme. C'est :", choix: ["de la transformation", "de l'artificialisation", "du génie écologique", "un circuit long"], bonne: 2, expl: "On utilise le vivant pour entretenir un milieu.", niv: 2 },
        { q: "Un petit éleveur fait appel à une CUMA pour sa récolte. Le déterminant le plus probable :", choix: ["une obligation de la PAC", "une trésorerie trop faible pour acheter seul", "une interdiction d'acheter des machines neuves en zone de montagne", "un excès de main-d'œuvre"], bonne: 1, expl: "Partager le matériel réduit l'investissement.", niv: 2 },
        { q: "Un service de transport à la demande est créé dans un canton rural. Le déterminant principal est :", choix: ["l'isolement et la mobilité difficile des habitants", "la hausse des circuits courts dans les villages du canton", "la création d'une ZNIEFF", "une MAEC"], bonne: 0, expl: "Le service répond à un besoin de la population.", niv: 2 },
        { q: "Pouvoir retrouver l'élevage d'origine du lait d'un fromage, c'est :", choix: ["la traçabilité", "le conditionnement", "la gestion différenciée", "le débit de chantier"], bonne: 0, expl: "On suit le produit de l'origine à la vente.", niv: 2 },
        { q: "Lequel n'est **pas** une étape d'un projet d'aménagement ?", choix: ["Le diagnostic", "L'assolement des parcelles", "La définition des objectifs", "Le suivi et l'évaluation"], bonne: 1, expl: "L'assolement relève de la production.", niv: 2 },
        { q: "Pourquoi le guidage par satellite peut-il réduire les produits utilisés ?", choix: ["Il remplace la récolte", "Il augmente les doses apportées en bordure de champ", "Il évite les recouvrements entre deux passages", "Il supprime le besoin de semer"], bonne: 2, expl: "On ne traite pas deux fois la même bande.", niv: 3 },
        { q: "Pourquoi la gestion différenciée d'un espace public peut-elle servir la biodiversité ?", choix: ["Elle augmente les pesticides", "Cette gestion bétonne les espaces verts", "Elle impose de couper les arbres et de tondre partout", "Des zones moins tondues laissent fleurir des plantes utiles aux insectes"], bonne: 3, expl: "L'entretien est adapté à chaque zone.", niv: 3 },
        { q: "Une fromagerie suit le cahier des charges d'une appellation. Quel enjeu territorial ce choix sert-il ?", choix: ["Supprimer les éleveurs locaux", "Réduire la qualité", "Délocaliser la fabrication vers une usine hors de la région", "Maintenir une filière et l'image du territoire"], bonne: 3, expl: "L'appellation lie le produit au lieu.", niv: 3 },
      ],
    },
  ],
  methode: [
    { id: 'stav-tt-m1', mat: 'stav-tt', titre: 'Définir ou illustrer une notion (première partie, question 1)',
      formules: ['Définir la notion de filière', 'Présenter deux missions d\'un parc naturel régional', 'Préciser la finalité d\'un projet alimentaire territorial', 'Présenter le rôle et les modalités d\'intervention de la Safer', 'Définir un conflit d\'usage et l\'illustrer par un exemple'],
      vu: ['Bac 2026, domaine production : missions d\'un parc naturel régional', 'Bac 2025, domaine production : rôle et modalités d\'intervention de la Safer, finalité d\'un PAT', 'Bac 2025, domaines services et agroéquipements : conflit d\'usage dans un parc naturel régional', 'Bac 2022, domaine production : notion de filière'],
      pts: '2 points sur 20',
      attendu: 'Une définition exacte, en une ou deux phrases avec les mots du cours, puis un exemple concret, de préférence tiré du document ou du territoire étudié. Si la consigne demande deux éléments (deux missions, rôle et modalités), il en faut deux, bien séparés.',
      etapes: ['Souligner le verbe de la consigne : définir, présenter, préciser, illustrer.', 'Écrire la définition du cours en une ou deux phrases.', 'Compter ce que demande la consigne (deux missions, un exemple) et le donner exactement.', 'Ajouter un exemple tiré du document pour montrer qu\'on l\'a lu.'],
      mots: ['filière', 'acteurs', 'parc naturel régional', 'charte', 'Safer', 'préemption', 'rétrocession', 'projet alimentaire territorial', 'conflit d\'usage'],
      pieges: ['Donner un exemple sans définition.', 'Recopier le document au lieu de définir.', 'Ne donner qu\'une mission quand on en demande deux.', 'Écrire une page : 8 à 10 lignes suffisent.'],
      cas: 'Document inventé : dans la vallée fictive du Ribel, une société d\'aménagement foncier a acheté en priorité 40 hectares mis en vente par un agriculteur retraité, puis les a revendus à deux jeunes éleveurs qui s\'installaient.',
      question: 'Présentez le rôle et les modalités d\'intervention de la Safer.',
      modele: 'La Safer (société d\'aménagement foncier et d\'établissement rural) a pour rôle d\'orienter le foncier agricole vers des projets d\'intérêt général : favoriser l\'installation des agriculteurs et le maintien des exploitations, protéger l\'environnement et les paysages, accompagner le développement local. Pour intervenir, elle achète des terres à l\'amiable ou grâce à son droit de préemption, qui lui donne la priorité lors d\'une vente ; elle les revend ensuite (rétrocession) à des candidats choisis après l\'avis d\'un comité. Dans la vallée du Ribel, elle a préempté 40 hectares pour permettre l\'installation de deux jeunes éleveurs.',
      grille: ['Définition ou rôle exact', 'Deux éléments si la consigne en demande deux', 'Vocabulaire du cours', 'Exemple tiré du document'] },
    { id: 'stav-tt-m2', mat: 'stav-tt', titre: 'Expliquer une phrase du document (première partie, question 2)',
      formules: ['Expliquer la phrase soulignée dans le document 1', 'Expliquer l\'expression citée du document', 'Expliquer pourquoi l\'auteur affirme une idée du document'],
      vu: ['Bac 2026, domaine production : les emplois de la santé et de l\'action sociale dans le territoire', 'Bac 2025, domaine production : l\'autonomie alimentaire de 2 % des grandes aires urbaines', 'Bac 2025, domaine production : la pression sur le foncier', 'Bac 2023, domaine production : l\'énergie solaire présentée comme un nouvel or vert'],
      pts: '2 points sur 20',
      attendu: 'Reformuler la phrase avec ses propres mots, puis en donner les causes ou le mécanisme à l\'aide du document et du cours. Le correcteur veut au moins deux explications reliées entre elles, pas une paraphrase.',
      etapes: ['Lire la phrase dans son paragraphe pour comprendre de quoi elle parle.', 'La reformuler en une phrase simple : « l\'auteur veut dire que… ».', 'Chercher au moins deux causes ou deux arguments, dans le document et dans le cours.', 'Relier ces causes à la phrase par des connecteurs : car, donc, en effet.', 'Utiliser un chiffre du document si possible.'],
      mots: ['reformuler', 'en effet', 'car', 'donc', 'artificialisation', 'foncier', 'attractivité', 'autonomie alimentaire', 'vieillissement'],
      pieges: ['Recopier la phrase avec d\'autres mots, sans rien expliquer.', 'Donner une seule cause.', 'Partir sur un autre sujet que la phrase.', 'Oublier le document.'],
      cas: 'Document inventé : « Dans le pays fictif des Brandes, chaque hectare compte : en dix ans, 600 hectares de terres agricoles ont laissé place à des lotissements et à une zone logistique, et deux projets de centrales solaires au sol cherchent encore des terrains. »',
      question: 'Expliquez la phrase « chaque hectare compte ».',
      modele: 'L\'auteur veut dire que le foncier agricole est devenu rare et disputé, si bien que la perte du moindre hectare pèse sur l\'agriculture du territoire. En effet, l\'artificialisation a fait disparaître 600 hectares en dix ans au profit des logements et de la logistique : ces terres ne reviendront pas à l\'agriculture. De plus, de nouveaux usages entrent en concurrence avec la production alimentaire, comme les centrales solaires au sol. Cette pression fait monter les prix et rend plus difficile l\'installation des jeunes agriculteurs, d\'où l\'importance des outils de protection (zones agricoles du PLU, Safer, objectif de zéro artificialisation nette).',
      grille: ['Phrase reformulée', 'Au moins deux causes ou arguments', 'Appui sur le document et chiffre', 'Connaissances du cours'] },
    { id: 'stav-tt-m3', mat: 'stav-tt', titre: 'Donner un avis argumenté (première partie, question 3)',
      formules: ['Proposer un avis argumenté sur le maintien des services en milieu rural', 'Proposer un avis argumenté sur l\'autonomie alimentaire des territoires', 'Proposer un avis argumenté sur le développement de l\'agrivoltaïsme', 'Proposer un avis argumenté sur la cohabitation des activités touristiques et agricoles'],
      vu: ['Bac 2026, domaine production : maintien des services en milieu rural', 'Bac 2025, domaine production : autonomie alimentaire', 'Bac 2025, domaines services et agroéquipements : cohabitation tourisme et agriculture dans un parc', 'Bac 2023, domaine production : agrivoltaïsme'],
      pts: '2 points sur 20',
      attendu: 'Un avis clair dès la première phrase, puis au moins deux arguments justifiés et illustrés (document, territoire, exemple vécu), en tenant compte des points de vue des différents acteurs. Une nuance ou une condition montre la maturité de la réflexion. Toute position est acceptée si elle est argumentée.',
      etapes: ['Annoncer son avis en une phrase : favorable, défavorable ou favorable sous conditions.', 'Donner un premier argument, l\'expliquer et l\'illustrer.', 'Donner un second argument d\'une autre nature (économique, social, environnemental).', 'Présenter l\'objection d\'un autre acteur et y répondre.', 'Conclure par une condition ou une proposition.'],
      mots: ['à mon avis', 'd\'une part', 'd\'autre part', 'cependant', 'à condition que', 'acteurs', 'concertation', 'multifonctionnalité'],
      pieges: ['Ne pas dire clairement son avis.', 'Aligner des arguments sans les expliquer.', 'Ignorer les autres acteurs du territoire.', 'Faire une réponse hors du territoire du document.'],
      cas: 'Document inventé : la commune fictive de Valcourt, 900 habitants, va perdre sa dernière épicerie. Des habitants proposent une épicerie associative tenue par des bénévoles, avec des produits de fermes voisines. Le maire hésite à prêter un local communal.',
      question: 'Proposez un avis argumenté sur le maintien des services en milieu rural.',
      modele: 'Je suis favorable au maintien des services en milieu rural, à condition qu\'il repose sur la coopération des acteurs. D\'une part, un commerce ou un médecin évite aux habitants, souvent âgés et sans voiture, de longs trajets : c\'est une question d\'égalité entre les territoires. D\'autre part, les services rendent une commune attractive : sans épicerie ni école, les familles ne s\'installent pas. À Valcourt, l\'épicerie associative ferait aussi travailler les fermes voisines, comme un petit circuit court. Cependant, ces services coûtent cher et reposent parfois sur des bénévoles qui s\'épuisent ; il faut donc un soutien public (local prêté, maisons France services, aides de la région) pour qu\'ils durent.',
      grille: ['Avis clairement annoncé', 'Deux arguments expliqués et illustrés', 'Point de vue d\'autres acteurs', 'Nuance ou condition'] },
    { id: 'stav-tt-m4', mat: 'stav-tt', titre: 'Identifier les étapes d\'évolution d\'un système (seconde partie, consigne 1)',
      formules: ['Identifier les principales étapes d\'évolution du système de production de l\'exploitation'],
      vu: ['Bac 2026, domaine production : élevage allaitant qui réduit son troupeau et cultive des lentilles', 'Bac 2025, domaine production : exploitation de légumes et de légumes secs livrés à deux conserveries', 'Bac 2023, domaine production : élevage herbager sous cahier des charges'],
      pts: 'Avec la consigne 2 : 6 points sur 20',
      attendu: 'Une chronologie claire : trois à cinq étapes datées, chacune caractérisée par ce qui change (surfaces, troupeau, productions, main-d\'œuvre, commercialisation, statut). On décrit le système à chaque étape, on n\'explique pas encore pourquoi.',
      etapes: ['Repérer dans les documents toutes les dates et les changements.', 'Regrouper les changements en grandes étapes (installation, agrandissement, conversion, diversification).', 'Donner à chaque étape une date, un titre et deux ou trois caractéristiques chiffrées.', 'Présenter le tout sous forme de liste ou de frise rédigée.'],
      mots: ['installation', 'système de production', 'atelier', 'SAU', 'troupeau', 'conversion', 'diversification', 'main-d\'œuvre'],
      pieges: ['Recopier toute la chronologie sans regrouper.', 'Oublier les chiffres (hectares, animaux).', 'Expliquer les causes dès cette consigne.', 'Oublier l\'étape actuelle.'],
      cas: 'Document inventé : la ferme fictive du Haut-Pré. 1998 : installation de Paul avec 45 vaches laitières sur 60 ha. 2009 : son épouse le rejoint en GAEC, 70 vaches, 95 ha. 2017 : conversion en bio. 2023 : arrêt du lait, 50 vaches allaitantes, 15 ha de lentilles et de luzerne.',
      question: 'Identifiez les principales étapes d\'évolution du système de production de l\'exploitation.',
      modele: 'Étape 1 (1998-2008) : installation de Paul ; élevage laitier de 45 vaches sur 60 ha, travail individuel. Étape 2 (2009-2016) : agrandissement en GAEC avec son épouse ; 70 vaches sur 95 ha, deux travailleurs. Étape 3 (2017-2022) : conversion à l\'agriculture biologique du système laitier, sans engrais ni pesticides de synthèse. Étape 4 (depuis 2023) : passage à un élevage allaitant de 50 vaches et diversification des cultures (15 ha de lentilles et de luzerne), fin de la traite.',
      grille: ['Étapes datées', 'Changements caractérisés et chiffrés', 'Regroupement pertinent', 'Situation actuelle décrite'] },
    { id: 'stav-tt-m5', mat: 'stav-tt', titre: 'Analyser les éléments clés du contexte (seconde partie, consigne 2)',
      formules: ['Analyser les éléments clés du contexte qui ont permis de faire évoluer le système de production'],
      vu: ['Bac 2026, domaine production', 'Bac 2025, domaine production', 'Bac 2023, domaine production'],
      pts: 'Avec la consigne 1 : 6 points sur 20',
      attendu: 'Les éléments du contexte classés (milieu naturel, territoire et filières, marché, politiques et règles, société, situation de l\'agriculteur), chacun relié à l\'étape qu\'il a rendue possible. Analyser, c\'est montrer le lien, pas seulement citer.',
      etapes: ['Lister les éléments du contexte dans les documents.', 'Les classer par familles.', 'Pour chacun, écrire : « cet élément a permis… » en citant l\'étape concernée.', 'Montrer qu\'une contrainte peut devenir une opportunité.'],
      mots: ['contexte', 'milieu naturel', 'filière', 'débouché', 'prix', 'aides', 'réglementation', 'attentes des consommateurs', 'opportunité'],
      pieges: ['Citer le contexte sans le relier aux étapes.', 'Oublier la situation personnelle de l\'agriculteur.', 'Confondre contexte et choix.', 'Juger les décisions.'],
      cas: 'Suite de la ferme fictive du Haut-Pré : la laiterie bio de la région manque de lait en 2016 et paie une prime ; les étés secs se multiplient depuis 2018 ; Paul a des douleurs de dos ; une conserverie voisine cherche des lentilles locales depuis 2022.',
      question: 'Analysez les éléments clés du contexte qui ont permis de faire évoluer le système de production.',
      modele: 'Contexte économique et filière : en 2016, la laiterie bio manquait de lait et payait une prime ; ce débouché mieux rémunéré a permis la conversion de 2017. Milieu naturel : les étés secs réduisent la pousse de l\'herbe ; ils ont poussé à réduire le troupeau et à cultiver de la luzerne, plus résistante. Territoire : la conserverie voisine qui cherche des lentilles locales a ouvert un débouché nouveau, ce qui a rendu possible la diversification de 2023. Situation personnelle : les douleurs de dos de Paul rendaient la traite pénible ; elles expliquent l\'arrêt du lait au profit de vaches allaitantes, moins astreignantes.',
      grille: ['Éléments du contexte classés', 'Chaque élément relié à une étape', 'Situation de l\'agriculteur prise en compte', 'Appui précis sur les documents'] },
    { id: 'stav-tt-m6', mat: 'stav-tt', titre: 'Relier les choix sociotechniques à leurs déterminants (seconde partie, consigne 3)',
      formules: ['Analyser les liens entre les principaux choix sociotechniques effectués par l\'agriculteur et leurs déterminants'],
      vu: ['Bac 2026, domaine production', 'Bac 2025, domaine production', 'Bac 2023, domaine production'],
      pts: 'Avec la consigne 4 : 8 points sur 20',
      attendu: 'Deux à quatre choix sociotechniques nommés (une technique et son organisation), chacun expliqué par plusieurs déterminants de nature différente, avec les mots « parce que », « ce qui explique ». Le correcteur valorise la pluralité des déterminants et la notion de compromis.',
      etapes: ['Repérer les choix : race, rotation, mode de vente, organisation du travail, investissement.', 'Pour chaque choix, chercher au moins deux déterminants de familles différentes.', 'Rédiger : choix, puis « ce choix s\'explique par… », avec des éléments du document.', 'Signaler les compromis : ce que l\'agriculteur a accepté de perdre.'],
      mots: ['choix sociotechnique', 'déterminant', 'logique d\'acteur', 'compromis', 'valeurs', 'contrainte', 'cohérence', 'autonomie'],
      pieges: ['Confondre déterminant et enjeu (cause et conséquence).', 'Un seul déterminant par choix.', 'Parler de technique sans l\'organisation humaine.', 'Proposer d\'autres solutions à l\'agriculteur.'],
      cas: 'Suite de la ferme fictive du Haut-Pré : le couple a choisi la race limousine, vend la moitié de la viande en caissettes à la ferme et cultive des lentilles en association avec de l\'orge.',
      question: 'Analysez les liens entre les principaux choix sociotechniques effectués par les agriculteurs et leurs déterminants.',
      modele: 'Le choix de vaches allaitantes limousines s\'explique par la santé de Paul (la traite était pénible), par la recherche de moins d\'astreinte et par l\'adaptation de cette race à l\'herbe locale : c\'est un compromis, car le chiffre d\'affaires baisse. La vente en caissettes répond aux attentes de consommateurs qui veulent de la viande locale et permet de garder la valeur ajoutée ; elle est possible parce que l\'épouse prend en charge la vente, ce qui montre une organisation du travail à deux. L\'association lentille-orge s\'explique par le débouché de la conserverie, par l\'intérêt agronomique de la légumineuse qui fixe l\'azote, ce qui est cohérent avec le cahier des charges bio, et par les étés secs auxquels ces cultures résistent mieux.',
      grille: ['Choix sociotechniques bien identifiés', 'Plusieurs déterminants de natures différentes', 'Liens rédigés et justifiés par les documents', 'Compromis ou cohérence montrés'] },
    { id: 'stav-tt-m7', mat: 'stav-tt', titre: 'Identifier les enjeux des choix (seconde partie, consigne 4)',
      formules: ['Identifier les enjeux des principaux choix sociotechniques'],
      vu: ['Bac 2026, domaine production', 'Bac 2025, domaine production', 'Bac 2023, domaine production'],
      pts: 'Avec la consigne 3 : 8 points sur 20',
      attendu: 'Pour chaque grand choix, des enjeux classés (économiques, sociaux, environnementaux, territoriaux), formulés comme ce que l\'on peut gagner ou perdre, appuyés sur un indicateur ou un chiffre du document quand il existe.',
      etapes: ['Reprendre les choix de la consigne 3.', 'Pour chacun, se demander : que gagne ou que risque l\'agriculteur, le territoire, l\'environnement ?', 'Classer les enjeux par pilier de la durabilité, plus le territoire.', 'Nuancer : un choix peut avoir un enjeu positif et un risque.'],
      mots: ['enjeu', 'revenu', 'valeur ajoutée', 'autonomie', 'charge de travail', 'transmission', 'biodiversité', 'qualité de l\'eau', 'vitalité du territoire'],
      pieges: ['Redonner les déterminants au lieu des enjeux.', 'Oublier un pilier.', 'Écrire des enjeux vagues (« c\'est bien pour la planète »).', 'Ignorer les risques.'],
      cas: 'Suite de la ferme fictive du Haut-Pré : depuis 2023, le revenu par travailleur est stable malgré une baisse du chiffre d\'affaires de 15 %, les achats d\'aliments ont baissé de moitié, le couple prend trois semaines de congés et vend à 120 familles du canton.',
      question: 'Identifiez les enjeux des principaux choix sociotechniques.',
      modele: 'Enjeux économiques : garder un revenu malgré 15 % de chiffre d\'affaires en moins, grâce à la moitié d\'achats d\'aliments en moins (système économe) et à la valeur ajoutée de la vente directe ; le risque est de dépendre d\'un seul acheteur pour les lentilles. Enjeux sociaux : moins d\'astreinte et trois semaines de congés, une santé préservée, une exploitation plus facile à transmettre. Enjeux environnementaux : légumineuses qui réduisent les engrais, prairies maintenues qui stockent du carbone, meilleure résistance aux sécheresses. Enjeux territoriaux : une viande et des lentilles vendues à 120 familles du canton, qui renforcent l\'alimentation locale et le lien avec les habitants.',
      grille: ['Enjeux économiques', 'Enjeux sociaux', 'Enjeux environnementaux', 'Enjeux territoriaux ou risques', 'Chiffres du document'] },
  ],
  sujets: [
    { id: 'stav-tt-s1', matiere: 'stav-tt', titre: 'Sujet d\'entraînement inventé : « Le pays des Combelles »', duree: 180,
      enonce: `## Sujet d'entraînement (entièrement inventé)

Le territoire, les personnes, les structures et tous les chiffres de ce sujet sont fictifs. Durée : 3 heures, dont 30 minutes de lecture. Domaine production. Aucun matériel autorisé. Noté sur 20 points. Les deux parties sont rédigées sur des copies séparées.

### Première partie (6 points)

**Document 1 : « Aux Combelles, le tourisme vert bouscule les campagnes » (article inventé d'un journal local)**

Le parc naturel régional des Combelles, créé en 2005, réunit 92 communes de moyenne montagne et 61 000 habitants. Ses lacs et ses sentiers attirent 400 000 visiteurs par an, deux fois plus qu'il y a dix ans. « Le tourisme fait vivre nos gîtes et nos restaurants, mais les week-ends d'été, les parkings débordent et les chemins sont saturés », explique la présidente du parc. Des éleveurs se plaignent de barrières laissées ouvertes et de chiens non tenus en laisse au milieu des troupeaux. Un randonneur répond : « Les chemins sont à tout le monde. » Le parc a lancé une concertation entre élus, éleveurs, offices de tourisme et associations de randonneurs. Dans le même temps, 14 communes n'ont plus de médecin et l'école de trois villages a fermé.

1. Définissez la notion de conflit d'usage et illustrez-la par un exemple tiré du document. (2 points)
2. Expliquez la phrase de la présidente : « le tourisme fait vivre nos gîtes et nos restaurants, mais les week-ends d'été, les parkings débordent ». (2 points)
3. Proposez un avis argumenté sur la cohabitation des activités touristiques et agricoles dans un parc naturel régional. (2 points)

### Seconde partie (14 points)

**Document 2 : présentation de l'EARL des Sorbiers (exploitation inventée)**

L'EARL des Sorbiers se trouve dans le parc des Combelles, à 850 mètres d'altitude, en zone de montagne. Sols peu profonds, hivers longs, étés de plus en plus secs.

- 1996 : installation de Claire après un BTS ; reprise de la ferme de ses parents : 35 vaches laitières, 55 ha, lait livré à une grande laiterie, maïs ensilage et soja acheté.
- 2006 : son frère Hugo la rejoint ; 60 vaches, 90 ha ; construction d'une stabulation, emprunt important.
- 2012 : la ferme entre dans l'aire d'une appellation fromagère qui impose l'herbe et le foin, interdit l'ensilage et fixe un chargement maximal de 1,2 UGB par hectare.
- 2015 : arrêt de l'ensilage ; séchage du foin en grange (investissement de 180 000 €, aidé par la région).
- 2021 : à la suite de deux sécheresses, 10 ha de prairies sont semés en luzerne et trèfle ; le troupeau passe à 52 vaches.
- 2024 : ouverture d'une petite boutique à la ferme et accueil de groupes scolaires avec le parc.

**Document 3 : quelques résultats (moyennes)**

- Prix du lait : 400 € les 1 000 litres en 2011 ; 560 € en 2024 grâce à l'appellation.
- Lait produit par vache : 7 800 litres en 2011 ; 6 200 litres en 2024.
- Concentrés achetés : 1 600 kg par vache en 2011 ; 650 kg en 2024 ; aucun soja depuis 2021.
- Revenu par travailleur : environ 18 000 € en 2011 ; environ 27 000 € en 2024.
- Temps de travail : 65 heures par semaine en 2011 ; 55 heures en 2024 ; une semaine de congés de plus.

**Document 4 : interview inventée de Claire**

« L'appellation a tout changé : moins de lait, mais bien mieux payé. Le séchoir nous a coûté cher, mais notre foin est meilleur et nous ne dépendons plus du soja. Après les sécheresses, nous avons préféré garder moins de vaches que d'acheter du fourrage. Mon frère et moi voulions aussi vivre mieux : prendre des vacances, ne pas courir tout le temps. La boutique, c'est pour expliquer notre travail aux touristes du parc : certains ne savaient même pas pourquoi nos vaches sont dehors. »

Consignes :
1. Identifiez les principales étapes d'évolution du système de production de l'exploitation. (3 points)
2. Analysez les éléments clés du contexte qui ont permis de faire évoluer le système de production. (3 points)
3. Analysez les liens entre les principaux choix sociotechniques effectués par les agriculteurs et leurs déterminants. (4 points)
4. Identifiez les enjeux des principaux choix sociotechniques. (4 points)`,
      corrige: `## Corrigé

### Première partie

**1. Conflit d'usage (2 points)**
- Définition : un conflit d'usage est une opposition entre des acteurs qui veulent utiliser un même espace ou une même ressource de façon incompatible.
- Exemple tiré du document : dans le parc des Combelles, éleveurs et randonneurs utilisent les mêmes chemins et pâturages ; les barrières laissées ouvertes et les chiens non tenus menacent les troupeaux, tandis que les randonneurs estiment que « les chemins sont à tout le monde ».

**2. Explication de la phrase (2 points)**
- Reformulation : le tourisme apporte des revenus au territoire, mais sa concentration en été crée une surfréquentation.
- Côté positif : 400 000 visiteurs par an font travailler les gîtes, les restaurants et les commerces ; c'est une ressource de développement local pour des communes de montagne.
- Côté négatif : la fréquentation a doublé en dix ans et se concentre sur les week-ends d'été ; parkings et chemins sont saturés, ce qui dégrade les milieux et gêne habitants et agriculteurs.
- Lien : le tourisme profite à l'économie, mais il pose un problème de gestion de l'espace que le parc doit réguler.

**3. Avis argumenté (2 points)**
Toute position argumentée est acceptée. Exemple : je suis favorable à cette cohabitation, à condition qu'elle soit organisée. D'une part, le tourisme fait vivre les gîtes et les restaurants, et les éleveurs peuvent en profiter (vente directe, accueil). D'autre part, les éleveurs entretiennent les paysages ouverts qui attirent les visiteurs : les deux activités ont besoin l'une de l'autre. Cependant, la surfréquentation crée des conflits ; il faut donc informer les visiteurs (panneaux, règles sur les chiens), baliser des chemins qui contournent les troupeaux et poursuivre la concertation lancée par le parc, dont c'est l'une des missions.

### Seconde partie

**1. Les étapes (3 points)**
- 1996-2005 : installation de Claire ; élevage laitier conventionnel de 35 vaches sur 55 ha, maïs ensilage et soja acheté, lait livré à une grande laiterie.
- 2006-2011 : agrandissement avec Hugo (60 vaches, 90 ha), stabulation et endettement ; système intensif (7 800 litres par vache).
- 2012-2020 : entrée dans l'appellation ; fin de l'ensilage en 2015 et séchage du foin en grange ; système herbager.
- Depuis 2021 : adaptation à la sécheresse et autonomie (luzerne et trèfle, 52 vaches, plus de soja) ; diversification en 2024 (boutique, accueil scolaire).

**2. Le contexte (3 points)**
- Filière et marché : l'appellation paie mieux le lait (560 € contre 400 €), ce qui rend possible la baisse de production par vache et finance le séchoir.
- Réglementation : le cahier des charges interdit l'ensilage et limite le chargement à 1,2 UGB/ha, ce qui explique le passage au foin et la limite du troupeau.
- Politique publique : l'aide de la région a permis l'investissement du séchoir ; la zone de montagne ouvre droit à l'ICHN.
- Milieu naturel : sols peu profonds, hivers longs et sécheresses ; ils ont poussé à semer des légumineuses et à réduire le troupeau.
- Territoire : le parc et ses 400 000 visiteurs offrent une clientèle pour la boutique et un partenaire pour l'accueil des scolaires.
- Situation des agriculteurs : l'arrivée d'Hugo a permis l'agrandissement ; leur volonté de « vivre mieux » oriente les choix.

**3. Choix et déterminants (4 points)**
- Séchage du foin en grange : déterminants réglementaire (pas d'ensilage), économique (meilleure valorisation du lait), technique (foin de meilleure qualité) et financier (aide régionale) ; c'est un compromis entre un gros investissement et une plus grande autonomie.
- Légumineuses et baisse du troupeau : déterminants climatiques (sécheresses), économiques (ne pas acheter de fourrage ni de soja), réglementaires (chargement maximal) et valeurs (préférer l'autonomie à la production).
- Travail à deux en EARL avec moins d'animaux : déterminants sociaux (prendre des vacances) et familiaux.
- Boutique et accueil : déterminants territoriaux (visiteurs du parc, partenariat), sociétaux (des touristes qui ne comprennent pas l'élevage) et économiques (valeur ajoutée).
- Ces choix sont cohérents entre eux : tout le système est tourné vers l'herbe, l'autonomie et la qualité.

**4. Enjeux (4 points)**
- Économiques : revenu passé de 18 000 à 27 000 € par travailleur malgré une production par vache plus faible ; moins de charges (concentrés divisés par plus de deux) ; risques liés à l'endettement du séchoir et à la dépendance à l'appellation.
- Sociaux : 10 heures de travail en moins par semaine et une semaine de congés de plus ; meilleure transmissibilité ; lien renoué avec les visiteurs.
- Environnementaux : prairies et légumineuses qui stockent du carbone et limitent les engrais ; plus de soja importé ; vaches au pâturage, ce qui répond aux attentes sur le bien-être animal.
- Territoriaux : maintien d'une exploitation vivante et d'une filière d'appellation dans une zone de montagne qui perd des services ; entretien des paysages ouverts du parc ; image positive de l'agriculture auprès des touristes.`,
      grille: [
        { c: 'Première partie, question 1 : définition exacte du conflit d\'usage et exemple tiré du document', pts: 2 },
        { c: 'Première partie, question 2 : phrase reformulée, effets positifs et négatifs du tourisme expliqués avec le document', pts: 2 },
        { c: 'Première partie, question 3 : avis clair, deux arguments, prise en compte des acteurs, nuance', pts: 2 },
        { c: 'Seconde partie, consigne 1 : étapes datées et caractérisées avec des chiffres', pts: 3 },
        { c: 'Seconde partie, consigne 2 : éléments du contexte classés et reliés aux étapes', pts: 3 },
        { c: 'Seconde partie, consigne 3 : choix sociotechniques reliés à plusieurs déterminants de natures différentes', pts: 4 },
        { c: 'Seconde partie, consigne 4 : enjeux économiques, sociaux, environnementaux et territoriaux appuyés sur les chiffres', pts: 4 },
      ] },
  ],
};
