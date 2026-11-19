// Éducation physique, pratiques et culture sportives (EPPCS) — enseignement de spécialité, terminale voie générale. Sources : voir matiere.sources.
// Programme : arrêté du 2 juin 2021 (BO n° 25 du 24 juin 2021), thématiques de terminale « La pratique physique dans le monde contemporain » et « Technologie des Apsa » ; notions de première mobilisables.
// Épreuve : écrit de 3 h 30 sur 20 (dissertation sur 10, sujet au choix avec documents sur 10) et épreuve pratique-orale sur 20 (pratique sur 12, commentaire d'une vidéo sur 8) ; la note est la moyenne des deux.
export default {
  matiere: {
    id: 'eppcs',
    nom: 'Éducation physique, pratiques et culture sportives',
    voie: 'generale',
    epreuve: { type: 'ecrit+pratique', duree: 210, coef: 16, quand: 'juin', note: 'Écrit de 3 h 30 noté sur 20 : une dissertation de culture sportive sur la thématique « enjeux de la pratique physique dans le monde contemporain » (10 points), puis un sujet au choix entre deux, avec une question et des documents (10 points). Épreuve pratique-orale de 30 minutes notée sur 20 : pratique dans une Apsa (12 points) et commentaire d’un enregistrement vidéo de sa prestation (8 points). La note finale est la moyenne de l’écrit et de l’oral.' },
    sources: [
      "https://eduscol.education.fr/document/46288/download",
      "https://eduscol.education.fr/document/52929/download",
      "https://eduscol.education.fr/document/38900/download",
      "https://www.education.gouv.fr/bo/22/Hebdo15/MENE2121283N.htm",
    ],
    chapitres: [
      { id: "eppcs-1", t: "Les formes de pratique physique en France", theme: "La pratique physique dans le monde contemporain" },
      { id: "eppcs-2", t: "Le sport olympique : histoire, valeurs et organisation", theme: "La pratique physique dans le monde contemporain" },
      { id: "eppcs-3", t: "Le mouvement paralympique, le sport adapté et le sport partagé", theme: "La pratique physique dans le monde contemporain" },
      { id: "eppcs-4", t: "L'organisation du sport associatif en France", theme: "La pratique physique dans le monde contemporain" },
      { id: "eppcs-5", t: "Les enjeux politiques et économiques du sport", theme: "La pratique physique dans le monde contemporain" },
      { id: "eppcs-6", t: "Sports de nature, environnement et biodiversité", theme: "La pratique physique dans le monde contemporain" },
      { id: "eppcs-7", t: "Les dérives du sport : dopage, violences, tricheries", theme: "La pratique physique dans le monde contemporain" },
      { id: "eppcs-8", t: "La place des femmes dans le sport", theme: "La pratique physique dans le monde contemporain" },
      { id: "eppcs-9", t: "Comment une Apsa évolue : matériaux, règlements, pratiquants", theme: "Technologie des Apsa" },
      { id: "eppcs-10", t: "Biomécanique et caractéristiques technico-tactiques", theme: "Technologie des Apsa" },
      { id: "eppcs-11", t: "Analyser une prestation et un niveau de performance", theme: "Technologie des Apsa" },
      { id: "eppcs-12", t: "Notions de première : pratique physique et santé", theme: "Notions de première mobilisables" },
      { id: "eppcs-13", t: "Notions de première : métiers du sport et projet d'intervention", theme: "Notions de première mobilisables" },
      { id: "eppcs-14", t: "Méthode : la dissertation de culture sportive", theme: "Méthode de l'épreuve" },
      { id: "eppcs-15", t: "Méthode : le sujet avec documents et l'épreuve pratique-orale", theme: "Méthode de l'épreuve" },
    ],
  },
  paquets: [
    {
      chapitre: "eppcs-1",
      fiche: `## Les formes de pratique physique en France

Faire du sport ne veut pas dire la même chose pour tout le monde. Un licencié qui s'entraîne quatre fois par semaine pour la compétition, une personne qui marche une heure le dimanche et un groupe d'amis qui fait du paddle l'été pratiquent tous une **activité physique**, mais pas de la même façon. Le programme demande de savoir **décrire ces formes de pratique**, ce qui les **distingue** et quelques **chiffres clés**.

### Les grandes formes de pratique
- **Compétition** : recherche de la performance et du classement, dans un cadre fédéral (licence, calendrier, règlement officiel).
- **Loisir** : pratique pour le plaisir, sans enjeu de résultat, souvent irrégulière.
- **Santé et bien-être** : entretenir son corps, prévenir les maladies, réduire le stress (marche, gymnastique douce, yoga, renforcement).
- **Entretien de soi** : garder la forme, travailler son apparence (musculation, fitness, course).
- **Aventure** : sports de nature et goût du risque maîtrisé (trail, escalade, alpinisme, kayak en eaux vives).
- **Convivialité** : pratiquer pour être ensemble (foot entre amis, pétanque, randonnée en groupe).
- Une même personne peut combiner plusieurs formes, et une même Apsa peut se pratiquer de plusieurs façons (la course à pied en club, en marathon populaire ou seul pour la santé).

### Ce qui caractérise une manière de pratiquer
- Les **lieux** : équipement sportif (stade, gymnase, piscine), salle privée, espace public (parcs, rues), milieu naturel.
- Les **conditions** : horaires libres ou imposés, coût (licence, abonnement, matériel), règles officielles ou adaptées.
- L'**encadrement** : bénévole en club, éducateur diplômé, coach privé, application, ou pas d'encadrement (pratique **autonome** ou **auto-organisée**).
- Les **publics** : âge, sexe, niveau social, motivations (se dépasser, se détendre, maigrir, rencontrer des gens).
- Depuis les années 1980, la pratique **hors club** et **auto-organisée** progresse fortement (running, vélo, fitness, sports urbains), tout comme la pratique **connectée** (montres, applications).

### Quelques repères chiffrés (ordres de grandeur)
- Environ **six Français de 15 ans et plus sur dix** déclarent pratiquer une activité physique ou sportive au moins une fois par semaine (baromètres nationaux récents).
- On compte environ **16 à 17 millions de licences** sportives délivrées chaque année par les fédérations, dans environ **150 000 à 160 000 clubs**.
- Les **femmes** détiennent un peu moins de **40 %** des licences ; les **hommes** sont majoritaires dans les fonctions de dirigeant.
- Le sport repose sur plusieurs **millions de bénévoles**, qui encadrent, arbitrent et dirigent les clubs.
- La pratique diminue avec l'**âge** et elle est plus faible chez les personnes aux **revenus modestes** et chez les personnes **en situation de handicap**.
- Les activités les plus pratiquées sont la **marche**, la **course**, le **vélo**, la **natation** et le **fitness** ; le **football** est la fédération qui compte le plus de licenciés.

### Pour la dissertation
- Montrer que le sport est **pluriel** : on ne peut pas réduire la pratique physique à la compétition.
- Opposer **sport institutionnel** (fédéral, compétitif) et **pratiques libres** (autonomes, ludiques, de nature), puis montrer leurs liens : les fédérations créent des offres de loisir ou de santé pour attirer de nouveaux publics.
- Utiliser des **chiffres** et des **exemples** précis (une Apsa pratiquée en spécialité).

### À retenir pour le bac
- Six formes : compétition, loisir, santé et bien-être, entretien de soi, aventure, convivialité.
- Critères : lieux, conditions, encadrement, publics et motivations.
- Ordres de grandeur : 6 personnes sur 10 pratiquent chaque semaine, 16 à 17 millions de licences, moins de 40 % de licences féminines, des millions de bénévoles.`,
      cartes: [
        { q: "Quelles sont les grandes formes de pratique physique ?", r: "Compétition, loisir, santé et bien-être, entretien de soi, aventure, convivialité." },
        { q: "Qu'est-ce qui caractérise la pratique compétitive ?", r: "La recherche de performance et de classement dans un cadre fédéral : licence, calendrier, règlement officiel." },
        { q: "Qu'est-ce qu'une pratique auto-organisée ?", r: "Une pratique sans club ni encadrement, organisée par les pratiquants eux-mêmes (running, foot entre amis)." },
        { q: "Quels critères permettent de distinguer des manières de pratiquer ?", r: "Les lieux, les conditions (coût, horaires, règles), l'encadrement et les publics avec leurs motivations." },
        { q: "Quelle part des Français de 15 ans et plus pratique chaque semaine ?", r: "Environ 6 sur 10 déclarent une activité physique ou sportive au moins une fois par semaine." },
        { q: "Combien de licences sportives compte-t-on en France ?", r: "Environ 16 à 17 millions par an." },
        { q: "Quelle part des licences est détenue par des femmes ?", r: "Un peu moins de 40 %." },
        { q: "Quelle fédération compte le plus de licenciés ?", r: "La Fédération française de football." },
        { q: "Quels publics pratiquent le moins ?", r: "Les personnes âgées, les personnes aux revenus modestes et les personnes en situation de handicap." },
        { q: "Quelles activités sont les plus pratiquées en France ?", r: "La marche, la course, le vélo, la natation et le fitness." },
        { q: "Quelle tendance marque la pratique depuis les années 1980 ?", r: "La forte progression des pratiques libres, hors club, et aujourd'hui connectées." },
        { q: "Qu'est-ce que la forme de pratique « aventure » ?", r: "Des activités de nature avec un risque maîtrisé : trail, escalade, alpinisme, eaux vives." },
        { q: "Quel est le rôle des bénévoles dans le sport ?", r: "Ils encadrent, arbitrent et dirigent la plupart des clubs ; le sport associatif repose sur eux." },
        { q: "Pourquoi dit-on que le sport est pluriel ?", r: "Parce qu'une même activité peut se pratiquer pour la compétition, la santé, le loisir ou la convivialité." },
      ],
      quiz: [
        { q: "Laquelle est une pratique de convivialité ?", choix: ["Un championnat régional de judo","Une séance de rééducation","Un foot entre amis le samedi","Un record personnel au 100 m"], bonne: 2, expl: "Être ensemble avant tout.", niv: 1 },
        { q: "Combien de licences sportives compte-t-on à peu près en France ?", choix: ["500 000","2 millions","16 à 17 millions","5 millions"], bonne: 2, expl: "Ordre de grandeur des fédérations.", niv: 1 },
        { q: "Quelle fédération française a le plus de licenciés ?", choix: ["Le tennis","L'équitation","Le judo","Le football"], bonne: 3, expl: "Plus de deux millions de licences.", niv: 1 },
        { q: "Qu'est-ce qui caractérise une pratique autonome ?", choix: ["Le pratiquant s'organise sans club ni éducateur","Le pratiquant suit le calendrier d'une fédération","Le pratiquant est entraîné par un coach diplômé","Le pratiquant participe à une ligue professionnelle"], bonne: 0, expl: "Pratique libre.", niv: 1 },
        { q: "Quelle part des Français de 15 ans et plus pratique au moins une fois par semaine ?", choix: ["Environ 10 %","Environ 25 %","Environ 60 %","Environ 40 %"], bonne: 2, expl: "Baromètres nationaux récents.", niv: 2 },
        { q: "Quelle part des licences sportives est détenue par des femmes ?", choix: ["Environ 10 % des licences","Environ 38 % des licences","Environ 20 % des licences","Environ 30 % des licences"], bonne: 1, expl: "Écart qui se réduit lentement.", niv: 2 },
        { q: "Quel critère sert à distinguer deux manières de pratiquer une même Apsa ?", choix: ["La couleur de la tenue choisie par chaque pratiquant du groupe","Le nom de la marque du matériel utilisé","La date de création de la fédération nationale","Le type d'encadrement et les motivations des pratiquants"], bonne: 3, expl: "Lieux, conditions, encadrement, publics.", niv: 2 },
        { q: "Quelle forme de pratique correspond le mieux au trail en montagne ?", choix: ["La rééducation","La compétition par équipes","Le sport scolaire du mercredi","L'aventure"], bonne: 3, expl: "Nature et risque maîtrisé.", niv: 2 },
        { q: "Quelle évolution marque la pratique sportive depuis les années 1980 ?", choix: ["La disparition des pratiques de pleine nature","La progression des pratiques libres hors des clubs","La baisse du nombre de licences féminines","La fin des compétitions fédérales chez les jeunes"], bonne: 1, expl: "Running, vélo, fitness.", niv: 2 },
        { q: "Pourquoi une fédération crée-t-elle une offre « sport santé » ?", choix: ["Pour supprimer ses compétitions officielles","Pour obliger ses licenciés à consulter un médecin","Pour attirer des publics qui ne cherchent pas la compétition","Pour réserver ses clubs aux sportifs de haut niveau de la région"], bonne: 2, expl: "Diversifier les publics.", niv: 3 },
        { q: "Quel argument montre que l'accès au sport reste inégal ?", choix: ["Les clubs sont plus nombreux que les communes en France","La marche est l'activité la plus pratiquée par les Français","Les fédérations délivrent plusieurs millions de licences chaque année","La pratique est plus faible chez les personnes aux revenus modestes"], bonne: 3, expl: "Inégalités sociales.", niv: 3 },
        { q: "Une personne court seule trois fois par semaine pour garder la forme. Quelle forme de pratique ?", choix: ["Compétition fédérale, dans un club affilié","Convivialité, en pratique collective","Aventure, en milieu naturel engagé","Entretien de soi, en pratique autonome"], bonne: 3, expl: "Forme et autonomie.", niv: 3 },
      ],
    },
    {
      chapitre: "eppcs-2",
      fiche: `## Le sport olympique : histoire, valeurs et organisation

Les **Jeux olympiques** sont le plus grand événement sportif du monde. Ils sont nés dans la Grèce antique, ont été rénovés à la fin du XIXe siècle par **Pierre de Coubertin**, et sont devenus un miroir des **enjeux de société** : politique, économie, égalité, droits humains.

### Des Jeux antiques aux Jeux modernes
- Les **Jeux antiques** se tenaient à **Olympie**, en l'honneur de Zeus, tous les quatre ans (une **olympiade**). La date traditionnelle des premiers Jeux est **776 av. J.-C.** Une **trêve sacrée** permettait aux athlètes de voyager. Ils ont été supprimés à la fin du IVe siècle (vers 393-394) sous l'empereur Théodose.
- **Pierre de Coubertin**, pédagogue français, admire le sport des écoles anglaises et veut s'en servir pour **éduquer** la jeunesse et rapprocher les peuples. Au congrès de la **Sorbonne** (juin **1894**), il fait naître le **Comité international olympique (CIO)**.
- Premiers Jeux modernes : **Athènes 1896**. Paris accueille les Jeux en **1900**, **1924** et **2024**.
- Jeux d'hiver depuis **Chamonix 1924**. Jeux olympiques de la jeunesse depuis 2010.
- Coubertin défendait l'**amateurisme** et était hostile à la participation des femmes : les idées ont changé depuis.

### Les valeurs et les symboles
- Les trois **valeurs olympiques** : l'**excellence** (donner le meilleur de soi), l'**amitié** (se comprendre malgré les différences), le **respect** (de soi, des autres, des règles, de l'environnement).
- La **devise** : « **Citius, Altius, Fortius** » (plus vite, plus haut, plus fort), complétée en 2021 par « **Communiter** » (ensemble).
- Les **anneaux** : cinq anneaux entrelacés qui symbolisent l'union des cinq continents.
- La **flamme**, allumée à Olympie, le **serment** des athlètes, des juges et des entraîneurs.
- La **Charte olympique** fixe les principes de l'**Olympisme** : mettre le sport au service du développement harmonieux de l'humanité, sans discrimination.

### L'organisation du mouvement olympique
- Le **CIO** (siège à Lausanne) : autorité suprême, choisit les villes hôtes, gère les droits télévisés et les partenaires.
- Les **fédérations internationales** (FI) : elles fixent les règles de chaque sport et organisent les compétitions (World Athletics, FIFA…).
- Les **comités nationaux olympiques** (CNO) : en France, le **CNOSF** (Comité national olympique et sportif français) représente le mouvement sportif et sélectionne l'équipe de France.
- Les **comités d'organisation** (COJO) préparent chaque édition (Paris 2024 était présidé par Tony Estanguet).

### La charte d'éthique et de déontologie du sport français
- Adoptée par le **CNOSF**, elle demande aux sportifs, dirigeants et éducateurs de respecter des principes comme :
  - le **respect** des règles, des adversaires, des arbitres ;
  - l'**intégrité** : refus du **dopage**, de la tricherie, des paris truqués ;
  - le refus de toute **discrimination** et de toute **violence** ;
  - la **solidarité** et le fair-play ;
  - la protection de la **santé** des sportifs et de l'**environnement**.
- Exemple d'illustration : un joueur qui signale à l'arbitre une faute en sa faveur qui n'existe pas.

### Les Jeux, révélateurs des enjeux de société
- **Politique** : Berlin 1936 (propagande nazie, victoires de Jesse Owens) ; boycotts de Moscou 1980 et de Los Angeles 1984 pendant la guerre froide.
- **Droits humains** : poings levés de **Tommie Smith** et **John Carlos** à Mexico 1968 contre le racisme.
- **Égalité femmes-hommes** : quelques femmes à Paris 1900 ; Paris 2024 est la première édition avec autant d'athlètes femmes que d'hommes.
- **Économie** : coût des installations, retombées touristiques, droits télévisés.

### À retenir pour le bac
- Olympie, 776 av. J.-C. ; Coubertin, Sorbonne 1894, Athènes 1896.
- Valeurs : excellence, amitié, respect ; devise Citius, Altius, Fortius, Communiter.
- CIO, fédérations internationales, CNO (CNOSF), comités d'organisation ; charte d'éthique et de déontologie.`,
      cartes: [
        { q: "Où se déroulaient les Jeux olympiques antiques ?", r: "À Olympie, en Grèce, en l'honneur de Zeus." },
        { q: "Quelle est la date traditionnelle des premiers Jeux antiques ?", r: "776 avant J.-C." },
        { q: "Qui a rénové les Jeux olympiques ?", r: "Pierre de Coubertin, au congrès de la Sorbonne en 1894." },
        { q: "Où et quand ont eu lieu les premiers Jeux modernes ?", r: "À Athènes, en 1896." },
        { q: "Quelles sont les trois valeurs olympiques ?", r: "L'excellence, l'amitié et le respect." },
        { q: "Quelle est la devise olympique ?", r: "Citius, Altius, Fortius (plus vite, plus haut, plus fort), complétée en 2021 par Communiter (ensemble)." },
        { q: "Que symbolisent les cinq anneaux ?", r: "L'union des cinq continents." },
        { q: "Quel est le rôle du CIO ?", r: "Diriger le mouvement olympique, choisir les villes hôtes, gérer les droits télévisés et les partenaires." },
        { q: "Quel est le rôle d'une fédération internationale ?", r: "Fixer les règles d'un sport et organiser ses compétitions internationales." },
        { q: "Qu'est-ce que le CNOSF ?", r: "Le Comité national olympique et sportif français, qui représente le mouvement sportif et sélectionne l'équipe de France olympique." },
        { q: "Quels principes contient la charte d'éthique et de déontologie du CNOSF ?", r: "Respect, intégrité (refus du dopage et de la tricherie), refus des discriminations et des violences, fair-play, santé, environnement." },
        { q: "Pourquoi Coubertin voulait-il rénover les Jeux ?", r: "Pour éduquer la jeunesse par le sport et rapprocher les peuples." },
        { q: "Quel geste a marqué les Jeux de Mexico en 1968 ?", r: "Les poings levés de Tommie Smith et John Carlos contre le racisme." },
        { q: "Quelles éditions ont été boycottées pendant la guerre froide ?", r: "Moscou 1980 et Los Angeles 1984." },
      ],
      quiz: [
        { q: "Qui a rénové les Jeux olympiques ?", choix: ["Pierre de Coubertin","Jules Ferry","Jesse Owens","Tony Estanguet"], bonne: 0, expl: "Congrès de la Sorbonne, 1894.", niv: 1 },
        { q: "Où ont eu lieu les premiers Jeux olympiques modernes ?", choix: ["À Athènes","À Paris","À Londres","À Olympie"], bonne: 0, expl: "En 1896.", niv: 1 },
        { q: "Quelle est l'une des trois valeurs olympiques ?", choix: ["La victoire","La richesse","Le pouvoir","L'amitié"], bonne: 3, expl: "Excellence, amitié, respect.", niv: 1 },
        { q: "Que signifie « Citius » dans la devise olympique ?", choix: ["Plus haut","Plus fort","Plus vite","Ensemble"], bonne: 2, expl: "Citius, Altius, Fortius.", niv: 1 },
        { q: "En quelle année le CIO a-t-il été créé ?", choix: ["1896","1894","1900","1924"], bonne: 1, expl: "Congrès de la Sorbonne.", niv: 2 },
        { q: "Quel organisme sélectionne l'équipe de France olympique ?", choix: ["Le CIO à Lausanne","Le CNOSF","Le ministère de la Culture","La fédération internationale d'athlétisme"], bonne: 1, expl: "Comité national olympique.", niv: 2 },
        { q: "Quel est le rôle d'une fédération internationale ?", choix: ["Choisir la ville qui accueillera les prochains Jeux","Sélectionner les athlètes de chaque pays pour les Jeux d'été","Fixer les règles de son sport et organiser ses compétitions","Allumer la flamme olympique dans la ville d'Olympie"], bonne: 2, expl: "World Athletics, FIFA…", niv: 2 },
        { q: "Quel mot a été ajouté à la devise olympique en 2021 ?", choix: ["Communiter","Pacificus","Honestus","Liberius"], bonne: 0, expl: "Ensemble.", niv: 2 },
        { q: "Quel comportement respecte la charte d'éthique et de déontologie du CNOSF ?", choix: ["Simuler une faute pour obtenir un penalty décisif en fin de match","Refuser une victoire obtenue grâce à une erreur d'arbitrage","Parier sur un match de son propre championnat","Insulter l'arbitre après une décision contestée"], bonne: 1, expl: "Intégrité et fair-play.", niv: 2 },
        { q: "Pourquoi les Jeux de Berlin en 1936 révèlent-ils un enjeu politique ?", choix: ["Ils ont été les premiers Jeux retransmis en couleur à la télévision","Le régime nazi s'en est servi comme outil de propagande","Les femmes y ont participé pour la première fois","Ils ont été annulés à cause d'une guerre mondiale"], bonne: 1, expl: "Instrumentalisation politique.", niv: 3 },
        { q: "Pourquoi les poings levés de Mexico en 1968 sont-ils célèbres ?", choix: ["Deux athlètes ont fêté un record du monde du 200 m","Deux athlètes ont refusé de serrer la main d'un ministre","Deux athlètes ont protesté contre le prix des billets","Deux athlètes ont dénoncé le racisme sur le podium"], bonne: 3, expl: "Revendication des droits humains.", niv: 3 },
        { q: "Quel fait montre une évolution de la place des femmes aux Jeux ?", choix: ["Paris 2024 a réuni autant d'athlètes femmes que d'hommes","Coubertin a imposé des épreuves féminines dès 1896","Les femmes participaient déjà aux Jeux d'Olympie","Les épreuves mixtes existent depuis les premiers Jeux modernes"], bonne: 0, expl: "Parité des athlètes en 2024.", niv: 3 },
      ],
    },
    {
      chapitre: "eppcs-3",
      fiche: `## Le mouvement paralympique, le sport adapté et le sport partagé

Environ **12 millions** de Français vivent avec un handicap, mais ils pratiquent beaucoup moins de sport que le reste de la population. Le programme demande de connaître la **naissance du mouvement paralympique**, de comprendre pourquoi il faut **adapter** les pratiques et ce qu'est le **sport partagé**. Le sujet est tombé en dissertation au bac 2025.

### La naissance du mouvement paralympique
- En **1948**, le neurologue **Ludwig Guttmann** organise des compétitions de tir à l'arc pour d'anciens soldats blessés à la moelle épinière, à l'hôpital de **Stoke Mandeville** (Angleterre), le jour de l'ouverture des Jeux olympiques de Londres. Le sport sert alors à la **rééducation**.
- Premiers **Jeux paralympiques** : **Rome 1960**, avec environ 400 athlètes.
- Depuis **Séoul 1988**, les Jeux paralympiques ont lieu dans la **même ville** que les Jeux olympiques, juste après.
- Le **Comité international paralympique** (IPC) est créé en **1989**. En France, le **Comité paralympique et sportif français** (CPSF) joue ce rôle.
- Valeurs paralympiques : **détermination**, **égalité**, **courage**, **inspiration**.

### Pourquoi adapter les pratiques ?
- Les bienfaits de l'activité physique sont encore plus importants pour les personnes en situation de handicap : **autonomie** (se déplacer, se transférer), **santé** (prévenir le surpoids, les maladies du cœur), **confiance en soi**, **liens sociaux**, **regard des autres** qui change.
- Il faut adapter :
  - le **matériel** (fauteuil, prothèse, balle sonore au cécifoot ou au torball) ;
  - les **règles** (deux rebonds au tennis fauteuil, guide en course pour les déficients visuels) ;
  - l'**espace** et l'**encadrement** (éducateur formé, accessibilité des installations).
- La **classification** regroupe les athlètes selon leur type et leur degré de handicap pour rendre la compétition **équitable** (par exemple T11 à T13 pour les déficients visuels en athlétisme).
- Deux fédérations en France :
  - la **Fédération française handisport** (handicaps physiques et sensoriels) ;
  - la **Fédération française du sport adapté** (handicaps mentaux et psychiques).

### Les innovations technologiques
- **Lames** en fibre de carbone pour les amputés, **fauteuils** de course ou de basket sur mesure, **prothèses** articulées, maillots et matériels conçus par ordinateur.
- Elles améliorent la performance, mais posent la question de l'**équité** : l'accès au matériel coûte cher, et l'on débat de l'avantage éventuel d'une prothèse face aux valides.

### Le sport partagé et l'inclusion
- Le **sport partagé** fait pratiquer **ensemble** des personnes valides et des personnes en situation de handicap (basket fauteuil où tout le monde est en fauteuil, tandem, course en binôme).
- L'**inclusion** vise à ce que les personnes en situation de handicap pratiquent dans les clubs « ordinaires », avec des adaptations.
- Obstacles : manque d'**accessibilité** des équipements et des transports, coût du matériel, manque d'éducateurs formés, peur du regard des autres.
- Leviers : héritage des **Jeux de Paris 2024**, labels « club inclusif », formation des éducateurs, médiatisation des champions (Marie-Amélie Le Fur, Théo Curin, Alexis Hanquinquant).

### À retenir pour le bac
- Guttmann, Stoke Mandeville 1948 ; Rome 1960 ; même ville que les JO depuis 1988 ; IPC 1989.
- Adapter matériel, règles, espace, encadrement ; classification pour l'équité ; handisport et sport adapté.
- Innovations (lames, fauteuils) et question de l'équité ; sport partagé et inclusion, obstacles et leviers.`,
      cartes: [
        { q: "Qui est à l'origine du mouvement paralympique ?", r: "Le neurologue Ludwig Guttmann, à l'hôpital de Stoke Mandeville en 1948." },
        { q: "Pourquoi Guttmann utilisait-il le sport ?", r: "Pour la rééducation de soldats blessés à la moelle épinière." },
        { q: "Où ont eu lieu les premiers Jeux paralympiques ?", r: "À Rome, en 1960." },
        { q: "Depuis quand les Jeux paralympiques ont-ils lieu dans la ville des Jeux olympiques ?", r: "Depuis Séoul 1988." },
        { q: "Quelles sont les valeurs paralympiques ?", r: "Détermination, égalité, courage, inspiration." },
        { q: "Quelle différence entre handisport et sport adapté ?", r: "Handisport : handicaps physiques et sensoriels. Sport adapté : handicaps mentaux et psychiques." },
        { q: "À quoi sert la classification des athlètes paralympiques ?", r: "À regrouper les athlètes selon leur handicap pour que la compétition soit équitable." },
        { q: "Que peut-on adapter pour rendre une pratique accessible ?", r: "Le matériel, les règles, l'espace et l'encadrement." },
        { q: "Donne un exemple de règle adaptée.", r: "Au tennis fauteuil, la balle peut rebondir deux fois." },
        { q: "Qu'est-ce que le sport partagé ?", r: "Une pratique qui réunit des personnes valides et des personnes en situation de handicap." },
        { q: "Quels bienfaits le sport apporte-t-il aux personnes en situation de handicap ?", r: "Autonomie, santé, confiance en soi, liens sociaux et changement du regard des autres." },
        { q: "Quels obstacles freinent la pratique des personnes en situation de handicap ?", r: "Accessibilité, coût du matériel, manque d'éducateurs formés, peur du regard des autres." },
        { q: "Quel débat posent les prothèses en fibre de carbone ?", r: "Celui de l'équité : coût d'accès inégal et avantage éventuel face aux valides." },
        { q: "Quel organisme représente le mouvement paralympique en France ?", r: "Le Comité paralympique et sportif français (CPSF)." },
      ],
      quiz: [
        { q: "Qui a fondé le mouvement paralympique ?", choix: ["Pierre de Coubertin","Ludwig Guttmann","Alice Milliat","Tony Estanguet"], bonne: 1, expl: "Stoke Mandeville, 1948.", niv: 1 },
        { q: "Où ont eu lieu les premiers Jeux paralympiques ?", choix: ["À Londres","À Séoul","À Rome","À Paris"], bonne: 2, expl: "En 1960.", niv: 1 },
        { q: "Laquelle est une valeur paralympique ?", choix: ["Le courage","La vitesse","La richesse","Le pouvoir"], bonne: 0, expl: "Détermination, égalité, courage, inspiration.", niv: 1 },
        { q: "Quelle fédération accueille les personnes avec un handicap mental ?", choix: ["La Fédération française du sport adapté","La Fédération française handisport","La Fédération française de football","L'Union nationale du sport scolaire"], bonne: 0, expl: "Handicaps mentaux et psychiques.", niv: 1 },
        { q: "En quelle année ont eu lieu les premiers Jeux paralympiques ?", choix: ["1896","1924","1948","1960"], bonne: 3, expl: "Rome 1960 ; 1948 = Stoke Mandeville.", niv: 2 },
        { q: "À quoi sert la classification paralympique ?", choix: ["À choisir les athlètes qui porteront le drapeau","À rendre la compétition équitable entre athlètes","À classer les pays selon leur nombre de médailles","À interdire les prothèses dans certaines épreuves"], bonne: 1, expl: "Regrouper par type de handicap.", niv: 2 },
        { q: "Quelle règle est adaptée au tennis fauteuil ?", choix: ["Le filet est placé deux fois plus haut","Le terrain est deux fois plus petit","La balle peut rebondir deux fois","Chaque service se fait à la main"], bonne: 2, expl: "Adaptation des règles.", niv: 2 },
        { q: "Qu'est-ce que le sport partagé ?", choix: ["Un sport dont les droits télévisés sont partagés entre deux chaînes","Un club qui partage son gymnase avec une école","Valides et personnes en situation de handicap pratiquent ensemble","Une compétition ouverte à plusieurs pays voisins"], bonne: 2, expl: "Pratique commune.", niv: 2 },
        { q: "Quel obstacle limite la pratique des personnes en situation de handicap ?", choix: ["Le trop grand nombre de clubs inclusifs","L'absence de bienfaits pour leur santé","L'interdiction légale de pratiquer en club","Le manque d'accessibilité des équipements"], bonne: 3, expl: "Accessibilité, coût, encadrement.", niv: 2 },
        { q: "Pourquoi les lames en carbone posent-elles une question d'équité ?", choix: ["Elles sont interdites dans les compétitions officielles depuis 2012","Elles empêchent les athlètes de dépasser 10 km/h","Elles coûtent cher et leur avantage face aux valides fait débat","Elles sont fabriquées à partir de bois de bambou"], bonne: 2, expl: "Accès et comparaison.", niv: 3 },
        { q: "Quel argument montre que le sport favorise l'inclusion ?", choix: ["Il remplace les aides financières versées par l'État","Il sépare les pratiquants selon leur niveau de handicap","Il crée des liens et change le regard porté sur le handicap","Il dispense les villes de rendre les transports accessibles"], bonne: 2, expl: "Dimension sociale.", niv: 3 },
        { q: "Pourquoi Guttmann a-t-il organisé ses Jeux le jour d'ouverture des JO de Londres ?", choix: ["Pour concurrencer les Jeux olympiques et attirer leur public anglais","Pour montrer que les blessés pouvaient eux aussi faire du sport","Pour obtenir l'argent des droits télévisés des Jeux","Pour remplacer les épreuves de tir à l'arc des Jeux"], bonne: 1, expl: "Symbole d'égalité.", niv: 3 },
      ],
    },
    {
      chapitre: "eppcs-4",
      fiche: `## L'organisation du sport associatif en France

En France, le sport repose sur un partenariat entre l'**État** et le **mouvement sportif**, organisé en associations. Du club de quartier à la fédération nationale, chaque niveau a un rôle précis. L'**association sportive** du lycée en est un exemple que l'on connaît de l'intérieur.

### Le club : une association
- La plupart des clubs sont des **associations loi 1901** : à but **non lucratif**, avec des **statuts**, une **assemblée générale** des adhérents qui élit un **bureau** (président, trésorier, secrétaire).
- Ils vivent des **cotisations**, des **subventions** (commune, département, région, Agence nationale du sport), du **partenariat** local et de manifestations.
- Ils reposent sur les **bénévoles** et emploient parfois des **éducateurs salariés**.
- Pour faire de la compétition, le club s'**affilie** à une fédération et ses adhérents prennent une **licence** (assurance, accès aux compétitions, appartenance à la fédération).

### Les fédérations et leurs relais
- Une **fédération** regroupe les clubs d'une ou plusieurs disciplines. Il en existe plus d'une centaine.
- L'État accorde l'**agrément** (reconnaissance) et, pour une seule fédération par discipline, la **délégation** : elle organise les compétitions officielles, délivre les **titres** de champion de France, établit les **règles** et sélectionne les **équipes de France**.
- Types de fédérations :
  - **unisport** olympiques ou non (Fédération française de football, de rugby, d'escalade…) ;
  - **multisports** et **affinitaires** (UFOLEP, FSGT), qui privilégient le loisir, l'éducation populaire et la convivialité ;
  - **scolaires** et universitaires (**UNSS** au collège et au lycée, **USEP** à l'école primaire, FFSU à l'université) ;
  - pour les personnes en situation de handicap (**handisport**, **sport adapté**).
- Les fédérations ont des **ligues régionales** et des **comités départementaux** qui organisent les championnats locaux et forment les cadres.
- Les fédérations sont regroupées au sein du **CNOSF** et, pour le sport paralympique, du **CPSF**.

### L'État et les collectivités
- Le **ministère chargé des Sports** fixe la politique sportive, délivre les diplômes d'éducateur, contrôle la sécurité et place des **conseillers techniques** auprès des fédérations.
- L'**Agence nationale du sport** (créée en **2019**) réunit l'État, le mouvement sportif, les collectivités et les entreprises pour financer le **haut niveau** et le **développement des pratiques**.
- Les **collectivités territoriales** (communes surtout) construisent et entretiennent la plupart des **équipements sportifs** (gymnases, piscines, stades) et subventionnent les clubs.

### L'association sportive du lycée
- Chaque établissement du second degré a une **association sportive** (AS) affiliée à l'**UNSS**.
- Son **président** est le **chef d'établissement** ; les **professeurs d'EPS** l'animent (trois heures de leur service y sont consacrées).
- Les activités ont lieu en général le **mercredi après-midi** : entraînements, rencontres, championnats départementaux, académiques puis de France.
- Les élèves peuvent y devenir **jeunes officiels** : jeunes arbitres, juges, jeunes coachs, jeunes reporters, jeunes dirigeants (membres du bureau de l'AS).
- Coût faible pour l'élève (licence UNSS) : l'AS rend le sport accessible à tous.

### À retenir pour le bac
- Club = association loi 1901 (assemblée générale, bureau, bénévoles, cotisations, subventions) ; licence et affiliation.
- Fédérations : agrément et délégation ; unisport, affinitaires, scolaires (UNSS, USEP), handisport et sport adapté ; ligues et comités.
- État (ministère, Agence nationale du sport 2019), collectivités (équipements) ; AS du lycée affiliée à l'UNSS, présidée par le chef d'établissement.`,
      cartes: [
        { q: "Sous quelle forme juridique sont organisés la plupart des clubs ?", r: "Des associations loi 1901, à but non lucratif." },
        { q: "Qui élit le bureau d'un club ?", r: "L'assemblée générale des adhérents." },
        { q: "D'où viennent les ressources d'un club ?", r: "Cotisations, subventions publiques, partenaires privés et manifestations." },
        { q: "À quoi sert la licence sportive ?", r: "À être assuré, à participer aux compétitions et à appartenir à la fédération." },
        { q: "Qu'est-ce que la délégation accordée à une fédération ?", r: "Le droit, pour une seule fédération par discipline, d'organiser les compétitions officielles, de délivrer les titres et de fixer les règles." },
        { q: "Qu'est-ce qu'une fédération affinitaire ?", r: "Une fédération multisports qui privilégie le loisir, l'éducation populaire et la convivialité (UFOLEP, FSGT)." },
        { q: "Quelles sont les fédérations du sport scolaire ?", r: "L'UNSS au collège et au lycée, l'USEP à l'école primaire." },
        { q: "Quel est le rôle des ligues régionales et comités départementaux ?", r: "Organiser les championnats locaux et former les cadres pour la fédération." },
        { q: "Quand a été créée l'Agence nationale du sport ?", r: "En 2019." },
        { q: "Que finance l'Agence nationale du sport ?", r: "Le sport de haut niveau et le développement des pratiques pour tous." },
        { q: "Qui construit la plupart des équipements sportifs ?", r: "Les collectivités territoriales, surtout les communes." },
        { q: "Qui préside l'association sportive d'un lycée ?", r: "Le chef d'établissement." },
        { q: "Quels rôles peut tenir un jeune officiel UNSS ?", r: "Jeune arbitre, juge, coach, reporter ou dirigeant." },
        { q: "Pourquoi l'AS du lycée rend-elle le sport accessible ?", r: "Sa licence coûte peu et elle est ouverte à tous les élèves." },
      ],
      quiz: [
        { q: "Sous quelle forme sont organisés la plupart des clubs sportifs ?", choix: ["En entreprises cotées en bourse","En services de la mairie","En syndicats professionnels","En associations loi 1901"], bonne: 3, expl: "But non lucratif.", niv: 1 },
        { q: "Quelle fédération organise le sport au lycée ?", choix: ["L'USEP","La FFSU","L'UNSS","La FSGT"], bonne: 2, expl: "Union nationale du sport scolaire.", niv: 1 },
        { q: "Qui préside l'association sportive d'un lycée ?", choix: ["Le professeur d'EPS le plus ancien","Le maire de la commune","Le délégué de la classe de terminale","Le chef d'établissement"], bonne: 3, expl: "Président de droit.", niv: 1 },
        { q: "Qui construit et entretient la plupart des gymnases et piscines ?", choix: ["Les communes","Les fédérations","Le CIO","Les clubs professionnels"], bonne: 0, expl: "Collectivités territoriales.", niv: 1 },
        { q: "Qu'apporte la délégation de l'État à une fédération ?", choix: ["Le droit de construire ses propres stades sur des terrains publics","Le droit de choisir la ville qui accueillera les Jeux","Le droit de fixer le prix des billets dans les stades du pays","Le droit d'organiser les championnats et de délivrer les titres"], bonne: 3, expl: "Une seule fédération par discipline.", niv: 2 },
        { q: "Quelle fédération est affinitaire et multisports ?", choix: ["L'UFOLEP","La Fédération française de rugby","La Fédération française de tennis","World Athletics"], bonne: 0, expl: "Loisir et éducation populaire.", niv: 2 },
        { q: "Quel organe d'un club élit le bureau ?", choix: ["L'assemblée générale des adhérents","Le comité départemental de la fédération","Le conseil municipal de la commune","L'Agence nationale du sport de la région"], bonne: 0, expl: "Fonctionnement associatif.", niv: 2 },
        { q: "En quelle année a été créée l'Agence nationale du sport ?", choix: ["1901","1945","2019","2010"], bonne: 2, expl: "Gouvernance partagée.", niv: 2 },
        { q: "Quel rôle un élève peut-il tenir comme jeune officiel UNSS ?", choix: ["Arbitre ou juge lors des rencontres","Président de l'association sportive","Professeur d'EPS remplaçant","Conseiller technique de la fédération"], bonne: 0, expl: "Le président est le chef d'établissement.", niv: 2 },
        { q: "Pourquoi les clubs dépendent-ils autant des bénévoles ?", choix: ["La loi interdit aux clubs d'avoir des salariés","Les cotisations ne suffisent pas à payer l'encadrement","Les éducateurs diplômés refusent de travailler en club","Les fédérations imposent de ne pas rémunérer les entraîneurs"], bonne: 1, expl: "Modèle associatif.", niv: 3 },
        { q: "Pourquoi l'Agence nationale du sport est-elle dite « gouvernance partagée » ?", choix: ["Elle réunit État, mouvement sportif, collectivités et entreprises","Elle partage ses bureaux avec le Comité international olympique","Elle est dirigée à tour de rôle par chaque fédération","Elle partage ses subventions à parts égales entre les clubs du pays"], bonne: 0, expl: "Quatre familles d'acteurs.", niv: 3 },
        { q: "Pourquoi une commune subventionne-t-elle un club local ?", choix: ["Pour développer la pratique et animer la vie locale","Pour devenir propriétaire du club et de ses licenciés","Pour obtenir l'organisation des Jeux olympiques","Pour remplacer le travail de la fédération nationale"], bonne: 0, expl: "Intérêt général local.", niv: 3 },
      ],
    },
    {
      chapitre: "eppcs-5",
      fiche: `## Les enjeux politiques et économiques du sport

Le sport n'est pas qu'un jeu. Les États le soutiennent pour leur **image**, les villes se battent pour accueillir de grands événements, et le sport fait vivre un secteur **économique** important. La dissertation du bac 2025 portait sur l'impact des Jeux olympiques et paralympiques pour les **pays hôtes**.

### Pourquoi les pays tiennent-ils aux résultats sportifs ?
- **Prestige et image** : les médailles montrent la puissance et le dynamisme d'un pays. On parle de **soft power** (influence par l'attractivité, sans contrainte).
- **Fierté et cohésion nationale** : une victoire rassemble la population (France championne du monde de football 1998 et 2018).
- **Propagande** : des régimes utilisent le sport pour valoriser leur modèle (Berlin 1936 ; rivalité États-Unis et URSS pendant la guerre froide, avec le tableau des médailles).
- **Diplomatie** : la « diplomatie du ping-pong » entre la Chine et les États-Unis (1971) ; équipe commune des deux Corées à certains Jeux.
- **Boycotts** et sanctions : Moscou 1980, Los Angeles 1984 ; exclusion de l'Afrique du Sud de l'apartheid pendant des décennies.
- **Accueillir** un grand événement (Coupe du monde au Qatar en 2022, Jeux de Paris 2024) sert aussi l'image internationale ; on parle parfois de **sportswashing** quand un pays s'en sert pour faire oublier des atteintes aux droits humains.

### La diversité des activités économiques liées au sport
- **Biens** : équipements et vêtements (marques comme Decathlon, Nike, Adidas), matériel, nutrition sportive.
- **Services** : clubs et salles de fitness, coachs, tourisme sportif (stations de ski, randonnée), billetterie.
- **Spectacle et médias** : **droits télévisés**, publicité, **sponsoring**, transferts de joueurs, salaires des professionnels.
- **Paris sportifs** et jeux en ligne.
- **Collectivités** : construction et gestion d'équipements, organisation d'événements.
- Le sport représente environ **2 % de la richesse** produite en France et des centaines de milliers d'**emplois**.

### Accueillir de grands événements : atouts et risques
- **Atouts** possibles :
  - retombées **touristiques** et image de la ville ;
  - **infrastructures** nouvelles (transports, logements, équipements) : l'**héritage** ;
  - effet d'**entraînement** sur la pratique (« plus de sport dans la vie des gens », objectif de Paris 2024 ; programme Génération 2024, 30 minutes d'activité physique quotidienne à l'école) ;
  - fierté et cohésion.
- **Risques** :
  - **coûts** souvent supérieurs aux prévisions et dette publique (Athènes 2004, Rio 2016) ;
  - **éléphants blancs** : stades inutilisés après l'événement ;
  - expulsions de populations, hausse des loyers, sécurité ;
  - impact **environnemental** (constructions, déplacements des spectateurs).
- Paris 2024 a misé sur des **sites existants ou temporaires** (environ 95 %) pour limiter les coûts et l'empreinte carbone.

### À retenir pour le bac
- Résultats sportifs : prestige, soft power, cohésion, propagande, diplomatie, boycotts, sportswashing.
- Économie du sport : biens, services, spectacle (droits télévisés, sponsoring), paris, collectivités ; environ 2 % de la richesse nationale.
- Grands événements : héritage, tourisme, pratique, mais coûts, éléphants blancs, effets sociaux et environnementaux.`,
      cartes: [
        { q: "Qu'est-ce que le soft power sportif ?", r: "L'influence qu'un pays gagne grâce à l'image positive de ses succès ou de ses événements sportifs." },
        { q: "Pourquoi les médailles comptent-elles pour un État ?", r: "Prestige international, fierté et cohésion nationale, et parfois propagande." },
        { q: "Qu'est-ce que la diplomatie du ping-pong ?", r: "Le rapprochement entre la Chine et les États-Unis en 1971, commencé par des rencontres de tennis de table." },
        { q: "Donne deux exemples de boycott olympique.", r: "Moscou 1980 et Los Angeles 1984, pendant la guerre froide." },
        { q: "Qu'est-ce que le sportswashing ?", r: "Utiliser un grand événement sportif pour améliorer son image et faire oublier des atteintes aux droits humains." },
        { q: "Cite trois secteurs de l'économie du sport.", r: "Les biens (équipements), les services (clubs, tourisme) et le spectacle (droits télévisés, sponsoring)." },
        { q: "Qu'est-ce que le sponsoring ?", r: "Le financement d'un sportif, d'un club ou d'un événement par une entreprise en échange de visibilité." },
        { q: "Quelle part de la richesse nationale représente le sport en France ?", r: "Environ 2 %." },
        { q: "Qu'est-ce que l'héritage d'un grand événement ?", r: "Ce qu'il laisse après coup : équipements, transports, habitudes de pratique, image." },
        { q: "Qu'est-ce qu'un éléphant blanc ?", r: "Un équipement coûteux construit pour un événement et peu utilisé ensuite." },
        { q: "Quels risques font courir les grands événements aux pays hôtes ?", r: "Dépassement des coûts, dette, éléphants blancs, effets sociaux et environnementaux." },
        { q: "Quel était l'objectif principal affiché par Paris 2024 ?", r: "Mettre plus de sport dans la vie des gens." },
        { q: "Comment Paris 2024 a-t-il limité ses coûts et son empreinte carbone ?", r: "En utilisant environ 95 % de sites existants ou temporaires." },
        { q: "Pourquoi une victoire sportive renforce-t-elle la cohésion nationale ?", r: "Elle rassemble des personnes très différentes autour d'une fierté commune." },
      ],
      quiz: [
        { q: "Comment appelle-t-on l'influence d'un pays par son image sportive ?", choix: ["Le hard power","Le soft power","Le dumping","Le protectionnisme"], bonne: 1, expl: "Influence sans contrainte.", niv: 1 },
        { q: "Quelle édition des Jeux a été boycottée par les États-Unis ?", choix: ["Moscou 1980","Paris 1924","Tokyo 1964","Sydney 2000"], bonne: 0, expl: "Guerre froide.", niv: 1 },
        { q: "Qu'est-ce qu'un éléphant blanc ?", choix: ["Un équipement coûteux peu utilisé après l'événement","Un athlète devenu célèbre grâce aux Jeux","Un sponsor qui finance plusieurs fédérations olympiques","Une mascotte choisie pour les Jeux d'hiver"], bonne: 0, expl: "Mauvais héritage.", niv: 1 },
        { q: "Quelle activité relève du spectacle sportif ?", choix: ["La fabrication de chaussures","La location de skis","Le cours de yoga en salle","La vente des droits télévisés"], bonne: 3, expl: "Médias et spectacle.", niv: 1 },
        { q: "Quelle part de la richesse nationale française représente le sport ?", choix: ["Environ 10 %","Environ 15 %","Environ 25 %","Environ 2 %"], bonne: 3, expl: "Ordre de grandeur.", niv: 2 },
        { q: "Qu'est-ce que le sportswashing ?", choix: ["Nettoyer les stades après une grande compétition","Laver les maillots des joueurs avec des produits écologiques et locaux","Utiliser le sport pour faire oublier des atteintes aux droits humains","Supprimer les publicités dans les retransmissions sportives"], bonne: 2, expl: "Image et droits humains.", niv: 2 },
        { q: "Quel exemple illustre la diplomatie par le sport ?", choix: ["La construction d'un stade de football au Qatar","Une vente record de maillots de l'équipe de France à l'étranger","La création de l'Agence nationale du sport en 2019","Des matchs de tennis de table entre Chinois et Américains en 1971"], bonne: 3, expl: "Diplomatie du ping-pong.", niv: 2 },
        { q: "Quel atout un grand événement peut-il apporter à une ville ?", choix: ["Une baisse durable des loyers","La suppression de sa dette publique","Un club professionnel dans chaque quartier","De nouveaux transports et équipements"], bonne: 3, expl: "Héritage matériel.", niv: 2 },
        { q: "Comment Paris 2024 a-t-il limité ses coûts ?", choix: ["En utilisant surtout des sites existants ou temporaires","En construisant un stade neuf pour chaque discipline olympique","En faisant payer les transports aux athlètes","En réduisant le nombre de sports au programme"], bonne: 0, expl: "Environ 95 % des sites.", niv: 2 },
        { q: "Pourquoi l'impact des Jeux sur le pays hôte est-il discuté ?", choix: ["Les Jeux n'ont pas de retombée touristique selon la plupart des économistes","Les retombées existent, mais coûts et effets sociaux pèsent aussi","Les pays hôtes refusent de publier le coût des Jeux","Le CIO interdit aux villes de construire des équipements"], bonne: 1, expl: "Bilan nuancé.", niv: 3 },
        { q: "Quel argument soutient qu'accueillir les Jeux développe la pratique sportive ?", choix: ["Les spectateurs pratiquent eux-mêmes pendant les épreuves dans les stades","Les fédérations deviennent gratuites l'année des Jeux","Les athlètes étrangers restent entraîner les clubs locaux","Les programmes éducatifs et l'élan populaire attirent des pratiquants"], bonne: 3, expl: "Effet d'entraînement, à vérifier dans la durée.", niv: 3 },
        { q: "Pourquoi les pays de la guerre froide comparaient-ils leurs médailles ?", choix: ["Pour calculer les primes versées par le CIO","Pour prouver la supériorité de leur modèle politique","Pour décider des futures villes hôtes","Pour fixer le nombre d'athlètes de l'édition suivante"], bonne: 1, expl: "Sport et propagande.", niv: 3 },
      ],
    },
    {
      chapitre: "eppcs-6",
      fiche: `## Sports de nature, environnement et biodiversité

Les **activités physiques de pleine nature** (APPN) se développent fortement : randonnée, trail, VTT, escalade, kayak, ski, surf, course d'orientation. Elles rapprochent les pratiquants de la nature, mais peuvent aussi l'**abîmer**. Le programme demande de connaître et d'illustrer ces **incidences sur les milieux naturels et la biodiversité**, et les moyens de les limiter.

### Les incidences sur les milieux naturels
- **Piétinement et érosion** : sur les sentiers très fréquentés, la végétation disparaît, le sol se tasse et se ravine (randonnée, trail, VTT hors des chemins).
- **Dérangement de la faune** : bruit, passage répété, pratique de nuit ou en période de reproduction ; un animal qui fuit dépense une énergie précieuse (le tétras-lyre dérangé par le ski hors-piste en hiver, les oiseaux nicheurs des falaises dérangés par l'escalade).
- **Atteintes à la flore** : arrachage, cueillette, nettoyage des voies d'escalade, piétinement des dunes et des pelouses d'altitude.
- **Pollutions** : déchets abandonnés, crèmes solaires dans l'eau, carburant des sports motorisés, bruit.
- **Aménagements** : remontées mécaniques, pistes de ski, **neige de culture** (consommation d'eau et d'énergie), parkings, ports de plaisance.
- **Transports** : les déplacements des pratiquants et des spectateurs vers les sites et les événements sont la première source d'**émissions de gaz à effet de serre** du sport.

### Le sport touché par le changement climatique
- Manque de **neige** dans les stations de moyenne montagne, fonte des glaciers (itinéraires d'alpinisme plus dangereux), canicules qui rendent l'effort dangereux, sécheresses (rivières trop basses pour le canoë).
- Le sport doit donc à la fois **réduire** son impact et **s'adapter**.

### Concilier pratique et protection
- **Réglementer** : zones protégées (parcs nationaux, réserves naturelles, sites **Natura 2000**), interdiction temporaire de grimper sur une falaise pendant la nidification, quotas de fréquentation (calanques de Marseille).
- **Aménager** : canaliser les pratiquants sur des sentiers balisés, créer des passerelles, des zones de stationnement éloignées.
- **Sensibiliser** : panneaux, codes de bonne conduite (« ne laisser aucune trace »), formation des éducateurs et des guides.
- **Organiser autrement** les événements : covoiturage, transports en commun, gobelets réutilisables, tri des déchets, limitation du nombre de participants, choix des dates hors des périodes de reproduction. Le ministère des Sports et le WWF ont proposé une **charte des engagements écoresponsables** pour les organisateurs.
- Des **pratiques douces** (marche, vélo, voile, kayak) ont un faible impact si elles respectent les règles.
- Les **pratiquants** deviennent parfois des **sentinelles** de l'environnement : ramassage de déchets, signalement de pollutions, participation à des comptages d'espèces.

### Pour argumenter
- Montrer le **paradoxe** : les APPN sont nées de l'envie de nature, mais leur succès menace ce qu'elles recherchent.
- Nuancer : l'impact dépend de la **fréquentation**, du **lieu**, de la **période** et du **comportement** des pratiquants.
- Illustrer avec une Apsa vécue (une course d'orientation en forêt, une sortie d'escalade).

### À retenir pour le bac
- Incidences : piétinement et érosion, dérangement de la faune, atteintes à la flore, pollutions, aménagements, transports.
- Le sport subit aussi le changement climatique (neige, chaleur, sécheresse).
- Solutions : réglementer, aménager, sensibiliser, organiser des événements écoresponsables, pratiquer de façon douce.`,
      cartes: [
        { q: "Que signifie APPN ?", r: "Activités physiques de pleine nature : randonnée, trail, escalade, kayak, ski, surf…" },
        { q: "Quel effet a le piétinement répété d'un sentier ?", r: "La végétation disparaît, le sol se tasse et s'érode." },
        { q: "Pourquoi déranger un animal en hiver est-il grave ?", r: "En fuyant, il dépense une énergie qu'il ne peut pas reconstituer facilement." },
        { q: "Donne un exemple de dérangement de la faune par un sport.", r: "Le ski hors-piste qui dérange le tétras-lyre, ou l'escalade près des oiseaux nicheurs." },
        { q: "Quelle est la première source d'émissions de gaz à effet de serre du sport ?", r: "Les transports des pratiquants et des spectateurs." },
        { q: "Pourquoi la neige de culture pose-t-elle problème ?", r: "Elle consomme beaucoup d'eau et d'énergie." },
        { q: "Comment le changement climatique touche-t-il le sport ?", r: "Moins de neige, glaciers qui fondent, canicules, rivières trop basses." },
        { q: "Cite une mesure de réglementation des APPN.", r: "Interdire l'escalade sur une falaise pendant la nidification, ou fixer des quotas de fréquentation." },
        { q: "À quoi sert le balisage des sentiers ?", r: "À canaliser les pratiquants pour protéger la végétation autour." },
        { q: "Cite deux mesures pour un événement sportif écoresponsable.", r: "Covoiturage et transports en commun, gobelets réutilisables et tri des déchets." },
        { q: "Qu'est-ce qu'un site Natura 2000 ?", r: "Un site européen protégé pour ses habitats et ses espèces, où les activités sont encadrées." },
        { q: "Quel paradoxe touche les sports de nature ?", r: "Leur succès, né de l'envie de nature, menace les milieux qu'ils recherchent." },
        { q: "De quoi dépend l'impact d'une APPN ?", r: "De la fréquentation, du lieu, de la période et du comportement des pratiquants." },
        { q: "Comment un pratiquant peut-il être sentinelle de l'environnement ?", r: "En ramassant des déchets, en signalant des pollutions, en participant à des comptages d'espèces." },
      ],
      quiz: [
        { q: "Laquelle est une activité physique de pleine nature ?", choix: ["Le basket-ball","Le badminton","La course d'orientation","La gymnastique au sol"], bonne: 2, expl: "APPN.", niv: 1 },
        { q: "Quel effet a le passage répété de VTT hors des chemins ?", choix: ["L'érosion du sol","La hausse du niveau de la mer","La création de nouvelles sources","Une pousse plus rapide des arbres"], bonne: 0, expl: "Piétinement et ravinement.", niv: 1 },
        { q: "Quelle est la première source de gaz à effet de serre liée au sport ?", choix: ["L'éclairage des terrains de tennis","La fabrication des médailles des Jeux olympiques","Le lavage des tenues des clubs","Les transports des pratiquants et spectateurs"], bonne: 3, expl: "Déplacements.", niv: 1 },
        { q: "Que demande la règle « ne laisser aucune trace » ?", choix: ["Courir sans laisser d'empreintes de pas","Effacer ses traces GPS sur les applications","Pratiquer de nuit pour ne pas être vu","Repartir sans rien abandonner ni abîmer"], bonne: 3, expl: "Code de bonne conduite.", niv: 1 },
        { q: "Pourquoi interdit-on parfois l'escalade sur certaines falaises au printemps ?", choix: ["Pour laisser sécher la roche après l'hiver","Pour réserver la falaise aux compétitions","Pour protéger les oiseaux qui y nichent","Pour éviter les embouteillages sur la route"], bonne: 2, expl: "Période de reproduction.", niv: 2 },
        { q: "Pourquoi la neige de culture est-elle critiquée ?", choix: ["Elle fond moins vite que la neige naturelle","Elle rend les pistes trop lentes pour le slalom","Elle consomme beaucoup d'eau et d'énergie","Elle est interdite dans les stations françaises"], bonne: 2, expl: "Ressources consommées.", niv: 2 },
        { q: "Quelle mesure limite le piétinement d'un site très fréquenté ?", choix: ["Canaliser les pratiquants sur des sentiers balisés","Supprimer les panneaux d'information à l'entrée du site","Autoriser les véhicules jusqu'au sommet","Organiser des courses chaque week-end"], bonne: 0, expl: "Aménager.", niv: 2 },
        { q: "Quelle mesure rend un trail plus écoresponsable ?", choix: ["Distribuer des bouteilles en plastique à chaque kilomètre","Organiser le covoiturage et des gobelets réutilisables","Doubler le nombre de participants chaque année","Faire passer la course dans une zone de nidification"], bonne: 1, expl: "Événement écoresponsable.", niv: 2 },
        { q: "Comment le changement climatique touche-t-il les stations de moyenne montagne ?", choix: ["Elles reçoivent trop de neige pour ouvrir","Elles manquent de plus en plus de neige","Elles deviennent trop froides pour skier","Elles accueillent moins de randonneurs l'été"], bonne: 1, expl: "Adaptation nécessaire.", niv: 2 },
        { q: "Pourquoi dit-on que le succès des APPN est paradoxal ?", choix: ["Les foules menacent la nature que les pratiquants viennent chercher","Les pratiquants préfèrent rester dans les gymnases","Les sports de nature coûtent plus cher chaque année","Les fédérations refusent d'organiser des compétitions en pleine nature"], bonne: 0, expl: "Fréquentation et protection.", niv: 3 },
        { q: "Quel argument nuance l'impact négatif des sports de nature ?", choix: ["Les animaux ne sont pas sensibles au bruit des humains","L'impact dépend du lieu, de la période et du comportement","Les sentiers ne s'érodent qu'en présence de voitures","Des déchets abandonnés disparaissent seuls en quelques jours"], bonne: 1, expl: "Nuancer dans une dissertation.", niv: 3 },
        { q: "Pourquoi limiter le nombre d'accès à un site comme les calanques ?", choix: ["Pour augmenter le prix des billets d'entrée au parc pendant l'été","Pour réduire la fréquentation et laisser le milieu se régénérer","Pour réserver le site aux sportifs professionnels","Pour faciliter le stationnement des camping-cars"], bonne: 1, expl: "Quotas de fréquentation.", niv: 3 },
      ],
    },
    {
      chapitre: "eppcs-7",
      fiche: `## Les dérives du sport : dopage, violences, tricheries

Le sport porte des valeurs (respect, fair-play, dépassement de soi), mais il connaît aussi des **dérives**. Le programme demande de les **identifier**, de **comprendre pourquoi** elles apparaissent et de connaître des **actions de prévention**.

### Les principales dérives
- **Dopage** : utiliser des substances ou des méthodes interdites pour améliorer ses performances (EPO, stéroïdes anabolisants, transfusions, hormones de croissance). Exemples : l'affaire **Festina** au Tour de France 1998, le dopage organisé par l'État en Russie révélé en 2015-2016, l'affaire Lance Armstrong.
- **Tricheries** : simulation, corruption d'arbitres, **matchs truqués** pour des **paris sportifs**, fraude technologique (moteur caché dans un vélo), mensonge sur l'âge.
- **Violences physiques** : brutalités sur le terrain, bagarres, **hooliganisme** dans et autour des stades.
- **Violences psychologiques** : harcèlement, humiliations, pression excessive d'un entraîneur ou des parents, insultes **racistes**, **sexistes** ou **homophobes**.
- **Violences sexuelles** : révélées en France à partir de 2020 par la patineuse **Sarah Abitbol**, puis par d'autres sportifs.
- Autres dérives : **surentraînement** des jeunes, troubles alimentaires dans les sports à catégories de poids ou à esthétique, **conduites à risque**.

### Pourquoi ces dérives ?
- **Enjeux** très forts : argent (primes, contrats, paris), célébrité, sélection, carrière courte.
- **Culture de la performance** : idée qu'il faut gagner à tout prix, que la douleur est normale.
- **Rapports d'autorité** : relation de dépendance entre un jeune sportif et un entraîneur, isolement dans des centres d'entraînement, loi du silence (« omerta ») pour ne pas nuire au club.
- **Effet de groupe** et **identification** dans les tribunes (supporters), frustration après une défaite.
- Contrôles longtemps insuffisants et sanctions peu dissuasives.

### Les actions de prévention et de lutte
- **Contre le dopage** :
  - l'**Agence mondiale antidopage** (AMA, créée en **1999**) publie chaque année la **liste des interdictions** et le **Code mondial antidopage** ;
  - en France, l'**Agence française de lutte contre le dopage** (AFLD, **2006**) contrôle et sanctionne ;
  - le **passeport biologique** suit les valeurs sanguines d'un athlète dans le temps ; les athlètes de haut niveau doivent indiquer où ils se trouvent pour des contrôles inopinés ;
  - **éducation** des jeunes sportifs ; le dopage est aussi un risque grave pour la **santé**.
- **Contre les violences** :
  - plateforme de signalement (**Signal-Sports**), contrôle de l'**honorabilité** des éducateurs et bénévoles (vérification de leur casier judiciaire) ;
  - formations, référents dans les fédérations, campagnes contre le racisme et l'homophobie ;
  - **interdictions de stade** pour les supporters violents.
- **Contre les tricheries** : arbitrage vidéo, autorité qui contrôle les paris (Autorité nationale des jeux), interdiction aux sportifs de parier sur leur propre compétition.
- Rôle de l'**éducation** : l'EPS et l'association sportive (jeunes arbitres) apprennent le respect des règles.

### À retenir pour le bac
- Dérives : dopage, tricheries et paris truqués, violences physiques, psychologiques et sexuelles, hooliganisme, surentraînement.
- Causes : enjeux financiers, culture de la performance, rapports d'autorité et loi du silence, effet de groupe.
- Prévention : AMA (1999) et AFLD (2006), passeport biologique, contrôles inopinés ; Signal-Sports, honorabilité, interdictions de stade ; éducation.`,
      cartes: [
        { q: "Qu'est-ce que le dopage ?", r: "L'usage de substances ou de méthodes interdites pour améliorer ses performances." },
        { q: "Quelle affaire de dopage a marqué le Tour de France 1998 ?", r: "L'affaire Festina." },
        { q: "Quand a été créée l'Agence mondiale antidopage ?", r: "En 1999." },
        { q: "Quel est le rôle de l'AFLD ?", r: "Contrôler et sanctionner le dopage en France (créée en 2006)." },
        { q: "Qu'est-ce que le passeport biologique ?", r: "Le suivi des valeurs sanguines d'un athlète dans le temps pour repérer un dopage." },
        { q: "Pourquoi les athlètes doivent-ils indiquer où ils se trouvent ?", r: "Pour permettre des contrôles antidopage inopinés." },
        { q: "Qu'est-ce qu'un match truqué ?", r: "Un match dont le résultat est arrangé à l'avance, souvent pour gagner des paris." },
        { q: "Qu'est-ce que le hooliganisme ?", r: "Les violences de supporters dans et autour des stades." },
        { q: "Qui a révélé en 2020 les violences sexuelles dans le sport français ?", r: "La patineuse Sarah Abitbol, suivie par d'autres sportifs." },
        { q: "Pourquoi les violences restent-elles souvent cachées dans le sport ?", r: "Rapports d'autorité, dépendance envers l'entraîneur, isolement et loi du silence." },
        { q: "Qu'est-ce que le contrôle d'honorabilité ?", r: "La vérification du casier judiciaire des éducateurs et bénévoles." },
        { q: "Quelle plateforme permet de signaler des violences dans le sport ?", r: "Signal-Sports." },
        { q: "Quelles causes expliquent les dérives ?", r: "Enjeux financiers, culture de la performance, rapports d'autorité, effet de groupe." },
        { q: "Quelle mesure vise les supporters violents ?", r: "Les interdictions de stade." },
      ],
      quiz: [
        { q: "Quelle affaire de dopage a touché le Tour de France 1998 ?", choix: ["L'affaire Festina","L'affaire Calciopoli","L'affaire des moteurs cachés","L'affaire Abitbol"], bonne: 0, expl: "Cyclisme, 1998.", niv: 1 },
        { q: "Quel organisme publie la liste mondiale des produits interdits ?", choix: ["L'Agence mondiale antidopage","Le Comité national olympique et sportif français","L'Union nationale du sport scolaire","L'Autorité nationale des jeux"], bonne: 0, expl: "AMA, 1999.", niv: 1 },
        { q: "Comment appelle-t-on les violences de supporters autour des stades ?", choix: ["Le fair-play","Le sponsoring","Le bénévolat associatif","Le hooliganisme"], bonne: 3, expl: "Dérive des tribunes.", niv: 1 },
        { q: "Quelle plateforme sert à signaler des violences dans le sport ?", choix: ["Parcoursup","Signal-Sports","Pronote","Doctolib"], bonne: 1, expl: "Ministère des Sports.", niv: 1 },
        { q: "En quelle année a été créée l'AFLD ?", choix: ["1894","2006","1960","1999"], bonne: 1, expl: "1999 = AMA.", niv: 2 },
        { q: "À quoi sert le passeport biologique ?", choix: ["À suivre les valeurs sanguines d'un athlète dans le temps","À voyager dans les pays étrangers pour les compétitions internationales","À prouver la nationalité d'un athlète olympique","À enregistrer les records personnels d'un sportif"], bonne: 0, expl: "Détection indirecte.", niv: 2 },
        { q: "Pourquoi interdit-on aux sportifs de parier sur leur propre compétition ?", choix: ["Pour protéger les bookmakers de la faillite","Pour réserver les paris aux supporters","Pour éviter qu'ils perdent leur salaire","Pour éviter qu'ils truquent les résultats"], bonne: 3, expl: "Intégrité des compétitions.", niv: 2 },
        { q: "Qu'est-ce que le contrôle d'honorabilité des éducateurs ?", choix: ["Un examen de leurs diplômes d'entraîneur","Une note donnée par les parents des licenciés","Un test physique passé chaque année","La vérification de leur casier judiciaire"], bonne: 3, expl: "Prévenir les violences.", niv: 2 },
        { q: "Quel facteur favorise le dopage ?", choix: ["Les primes et contrats liés aux résultats","La pratique du sport pour la santé","Le sport partagé entre valides et handicapés","La pratique libre entre amis le week-end"], bonne: 0, expl: "Enjeux financiers.", niv: 2 },
        { q: "Pourquoi la relation entre un jeune sportif et son entraîneur peut-elle favoriser les violences ?", choix: ["L'entraîneur est élu chaque année par les parents de chaque athlète","Le jeune choisit seul ses horaires d'entraînement","L'entraîneur ne voit le jeune qu'une fois par an","Le jeune dépend de l'entraîneur pour sa sélection et sa carrière"], bonne: 3, expl: "Rapport d'autorité.", niv: 3 },
        { q: "Pourquoi les contrôles antidopage inopinés sont-ils efficaces ?", choix: ["Ils remplacent les sanctions prévues par le code mondial","Ils permettent de choisir l'heure du prélèvement","Ils ont lieu le jour des compétitions, annoncés une semaine avant","Ils surprennent l'athlète, qui ne peut pas cacher un produit"], bonne: 3, expl: "Effet de surprise.", niv: 3 },
        { q: "Quel argument montre que l'éducation aide à prévenir les dérives ?", choix: ["Être jeune arbitre apprend à respecter les règles et les autres","Les élèves n'ont pas accès aux compétitions officielles","L'EPS remplace les contrôles antidopage dans les lycées","Les jeunes sportifs ne regardent pas les matchs à la télévision"], bonne: 0, expl: "Rôle de l'école et de l'AS.", niv: 3 },
      ],
    },
    {
      chapitre: "eppcs-8",
      fiche: `## La place des femmes dans le sport

Les femmes pratiquent aujourd'hui presque autant d'activité physique que les hommes, mais elles sont **moins nombreuses en club**, **moins médiatisées** et **très minoritaires dans les instances dirigeantes**. La dissertation du bac 2024 portait sur l'égalité entre les femmes et les hommes dans le sport.

### Une conquête progressive
- Au XIXe siècle, le sport moderne est pensé **par et pour les hommes**. Coubertin jugeait la participation des femmes aux Jeux « inintéressante » et « incorrecte ».
- Premières femmes aux Jeux : **Paris 1900** (tennis, golf ; **Charlotte Cooper** première championne olympique).
- **Alice Milliat** fonde la Fédération des sociétés féminines sportives de France (1917) et organise les **Jeux mondiaux féminins** à partir de **1922** : elle pousse le CIO à ouvrir l'athlétisme aux femmes (1928).
- Ouverture tardive de nombreuses épreuves : **marathon** féminin olympique en **1984**, boxe en 2012.
- **Paris 2024** : première édition avec la **parité** parfaite des athlètes.

### Pourquoi les femmes sont-elles moins présentes ?
- **Stéréotypes** : certains sports sont jugés « masculins » (rugby, boxe) ou « féminins » (danse, gymnastique) ; on valorise la force chez les garçons et la grâce chez les filles.
- **Socialisation** : dès l'enfance, les garçons sont plus encouragés à jouer dehors, à la compétition ; les cours de récréation sont souvent occupées par le football.
- **Contraintes** : **charge domestique** et familiale plus forte pour les femmes, arrêt fréquent du sport à l'**adolescence** (corps qui change, regard des autres, manque d'offre adaptée).
- **Offre et équipements** : créneaux et terrains attribués d'abord aux équipes masculines, peu d'équipes féminines dans certains clubs.
- **Médias** : le sport féminin représente une faible part des retransmissions ; moins de modèles visibles, moins de sponsors, des **salaires** et primes très inférieurs.
- **Instances** : peu de femmes présidentes de fédération, entraîneures ou arbitres (manque de modèles, réseaux masculins, horaires difficiles à concilier avec la vie familiale).
- **Violences** sexistes et sexuelles qui découragent certaines pratiquantes.

### Les plans d'action de l'État et du mouvement sportif
- **Loi du 4 août 2014** pour l'égalité réelle entre les femmes et les hommes : proportion minimale de femmes dans les instances dirigeantes des fédérations.
- **Loi du 2 mars 2022** visant à démocratiser le sport : **parité** obligatoire dans les instances dirigeantes nationales des fédérations dès **2024**, et dans les instances régionales en **2028**.
- **Plans de féminisation** demandés à chaque fédération : objectifs chiffrés de licenciées, d'arbitres, d'entraîneures.
- Médiatisation : opérations comme « **Sport féminin toujours** » (temps fort annuel du sport féminin dans les médias, porté par le CSA puis l'Arcom).
- Actions locales : écoles de foot féminin, créneaux réservés, crèches dans les clubs, pratiques mixtes, formations d'arbitres femmes, aides des collectivités liées à la mixité.
- Dans les établissements : l'UNSS et l'EPS proposent des pratiques **mixtes** et des rôles variés (jeunes arbitres filles).

### Pour la dissertation
- Montrer les **progrès** (parité aux Jeux, lois, médiatisation croissante) puis les **inégalités persistantes** (licences, instances, salaires, médias), enfin les **leviers**.
- Illustrer par des chiffres : un peu moins de 40 % de licences féminines ; rares présidentes de fédérations olympiques.

### À retenir pour le bac
- Repères : Paris 1900, Alice Milliat et les Jeux mondiaux féminins de 1922, marathon féminin 1984, parité des athlètes à Paris 2024.
- Causes : stéréotypes, socialisation, charge domestique, adolescence, offre, médias, instances, violences.
- Actions : lois de 2014 et de 2022 (parité des instances), plans de féminisation, Sport féminin toujours, actions locales.`,
      cartes: [
        { q: "Quand des femmes ont-elles participé aux Jeux pour la première fois ?", r: "À Paris, en 1900." },
        { q: "Qui fut la première championne olympique ?", r: "La joueuse de tennis Charlotte Cooper, en 1900." },
        { q: "Qui a créé les Jeux mondiaux féminins ?", r: "Alice Milliat, à partir de 1922." },
        { q: "En quelle année le marathon féminin est-il entré aux Jeux ?", r: "En 1984." },
        { q: "Quelle première a marqué Paris 2024 pour les femmes ?", r: "La parité parfaite entre athlètes femmes et hommes." },
        { q: "Qu'est-ce qu'un stéréotype de genre dans le sport ?", r: "L'idée qu'un sport serait fait pour les hommes ou pour les femmes." },
        { q: "À quel âge beaucoup de filles arrêtent-elles le sport ?", r: "À l'adolescence." },
        { q: "Pourquoi la charge domestique freine-t-elle la pratique féminine ?", r: "Les femmes assument plus les tâches familiales et ont moins de temps libre." },
        { q: "Pourquoi la médiatisation compte-t-elle ?", r: "Elle crée des modèles, attire les sponsors et fait augmenter les salaires et la pratique." },
        { q: "Que prévoit la loi du 2 mars 2022 ?", r: "La parité dans les instances dirigeantes nationales des fédérations en 2024, régionales en 2028." },
        { q: "Que demandait la loi du 4 août 2014 aux fédérations ?", r: "Une proportion minimale de femmes dans leurs instances dirigeantes." },
        { q: "Qu'est-ce qu'un plan de féminisation ?", r: "Les objectifs chiffrés d'une fédération pour avoir plus de licenciées, d'arbitres et d'entraîneures." },
        { q: "Qu'est-ce que « Sport féminin toujours » ?", r: "Une opération annuelle pour mettre en avant le sport féminin dans les médias." },
        { q: "Cite deux actions locales pour féminiser un club.", r: "Une école de foot féminin, des créneaux réservés, une crèche, des formations d'arbitres femmes." },
      ],
      quiz: [
        { q: "Qui a organisé les Jeux mondiaux féminins à partir de 1922 ?", choix: ["Charlotte Cooper","Marie-José Pérec","Simone de Beauvoir","Alice Milliat"], bonne: 3, expl: "Pionnière du sport féminin.", niv: 1 },
        { q: "Dans quelle ville des femmes ont-elles participé aux Jeux pour la première fois ?", choix: ["Athènes","Paris","Londres","Berlin"], bonne: 1, expl: "Jeux de 1900.", niv: 1 },
        { q: "Quelle première a marqué les Jeux de Paris 2024 ?", choix: ["La première participation de femmes","Autant d'athlètes femmes que d'hommes","La première épreuve féminine de natation","Une première femme présidente du CIO"], bonne: 1, expl: "Parité des athlètes.", niv: 1 },
        { q: "À quel moment de la vie beaucoup de filles arrêtent-elles le sport ?", choix: ["À l'adolescence","À l'école maternelle","À l'âge de la retraite","Pendant l'école primaire"], bonne: 0, expl: "Corps, regard, offre.", niv: 1 },
        { q: "En quelle année le marathon féminin a-t-il été ajouté aux Jeux ?", choix: ["1896","1984","1900","1928"], bonne: 1, expl: "Très tardivement.", niv: 2 },
        { q: "Que prévoit la loi du 2 mars 2022 pour les fédérations ?", choix: ["La gratuité des licences pour les filles","La mixité obligatoire des équipes de club","La parité dans leurs instances dirigeantes","Des primes égales dans les compétitions nationales"], bonne: 2, expl: "Parité nationale en 2024.", niv: 2 },
        { q: "Quel exemple illustre un stéréotype de genre ?", choix: ["Penser que la danse est un sport pour les filles","Constater que le football a le plus de licenciés","Remarquer que les Jeux d'été reviennent après quatre ans","Savoir que la boxe se pratique sur un ring"], bonne: 0, expl: "Sport « masculin » ou « féminin ».", niv: 2 },
        { q: "Pourquoi la faible médiatisation freine-t-elle le sport féminin ?", choix: ["Moins de modèles visibles et moins de sponsors","Les femmes refusent d'être filmées en compétition","Les chaînes n'ont pas le droit de filmer les femmes","Peu de sportives ont des compétitions officielles"], bonne: 0, expl: "Cercle vicieux médias-argent.", niv: 2 },
        { q: "Quelle action locale favorise la pratique des mères de famille ?", choix: ["Des matchs organisés tard le soir","Une hausse du prix de la licence","Des créneaux réservés aux équipes masculines","Une garderie pendant les entraînements"], bonne: 3, expl: "Lever la contrainte familiale.", niv: 2 },
        { q: "Pourquoi les femmes sont-elles rares à la tête des fédérations ?", choix: ["La loi interdit aux femmes de présider une fédération","Les fédérations sont dirigées par des fonctionnaires du ministère des Sports","Réseaux masculins et horaires peu compatibles avec la vie de famille","Les femmes ne prennent pas de licence en club"], bonne: 2, expl: "Causes multiples.", niv: 3 },
        { q: "Quel argument montre que l'égalité dans le sport progresse ?", choix: ["Les salaires des joueuses dépassent ceux des joueurs","Les femmes détiennent la majorité des licences en club depuis les années 2000","Les sports collectifs féminins sont plus médiatisés","Les Jeux paritaires et les lois sur les instances dirigeantes"], bonne: 3, expl: "Progrès réels mais incomplets.", niv: 3 },
        { q: "Pourquoi la socialisation explique-t-elle une partie de l'écart de pratique ?", choix: ["Les filles naissent avec moins de goût pour l'effort et la compétition","Les écoles réservent l'EPS aux garçons","Les clubs refusent les inscriptions des filles","Les garçons sont plus encouragés que les filles dès l'enfance"], bonne: 3, expl: "Construit social, pas naturel.", niv: 3 },
      ],
    },
    {
      chapitre: "eppcs-9",
      fiche: `## Comment une Apsa évolue : matériaux, règlements, pratiquants

Aucune activité physique, sportive ou artistique (**Apsa**) n'est figée. Elle a une **origine**, puis elle se transforme sous l'effet de plusieurs **facteurs** : les **matériaux** et les **technologies**, les **règlements**, les **pratiquants** eux-mêmes, et aussi les **médias** et la **société**. Il faut savoir raconter les étapes marquantes d'au moins une Apsa pratiquée en spécialité.

### L'origine des Apsa
- Beaucoup de sports modernes sont nés en **Angleterre** au XIXe siècle, dans les écoles (football, rugby), avec des **règles écrites** et des **fédérations**.
- D'autres viennent de jeux traditionnels (jeu de paume, ancêtre du tennis), de techniques militaires (escrime, tir) ou utilitaires (natation, ski), ou ont été **inventés** (le **basket-ball** par James Naismith en 1891, le **volley-ball** par William Morgan en 1895).

### Les matériaux et les technologies
- **Saut à la perche** : bambou, puis métal, puis **fibre de verre** dans les années 1960, qui permet de plier la perche et de stocker de l'énergie : les records progressent fortement.
- **Natation** : les **combinaisons en polyuréthane** de 2008-2009 font tomber des dizaines de records ; elles sont interdites en **2010**.
- **Course à pied** : chaussures à **plaque de carbone** et mousse très réactive ; la fédération internationale limite désormais l'épaisseur des semelles.
- **Tennis** : raquettes en bois puis en graphite, plus légères et plus grandes, qui accélèrent le jeu.
- **Cyclisme** : cadres en carbone, roues lenticulaires, positions aérodynamiques testées en **soufflerie**.
- **Arbitrage** : assistance vidéo, capteurs (Hawk-Eye au tennis, technologie sur la ligne de but au football).
- Les technologies posent la question de l'**équité** (accès au matériel) et du « **dopage technologique** ».

### Les règlements
- Les règles évoluent pour rendre le jeu plus **équitable**, plus **spectaculaire**, plus **sûr**, ou pour s'adapter aux **médias** :
  - **basket-ball** : limite des 24 secondes pour tirer, panier à **3 points** ;
  - **volley-ball** : comptage où chaque échange donne un point (1999), création du **libéro** (1998) ;
  - **football** : interdiction pour le gardien de prendre à la main une passe en retrait de son coéquipier (1992), arbitrage vidéo (VAR) ;
  - **rugby** : règles pour protéger les joueurs (plaquages hauts sanctionnés, protocole commotion) ;
  - **judo** : les règles évoluent pour favoriser l'attaque et le spectacle.
- Les **catégories** (poids, âge, handicap) rendent la compétition plus juste.

### Les pratiquants font évoluer l'Apsa
- Des athlètes inventent une technique plus efficace qui s'impose : le **Fosbury flop** en saut en hauteur (Dick Fosbury, Mexico 1968), rendu possible par les tapis de réception en mousse ; le **pas de patineur** en ski de fond.
- De nouvelles **formes de pratique** apparaissent : beach-volley, basket 3x3, foot à 5, trail, escalade de bloc, **breaking** (aux Jeux de Paris 2024).
- Les attentes des publics (loisir, santé, nature, spectacle) poussent les fédérations à créer des formats nouveaux, plus courts ou plus ludiques.

### À retenir pour le bac
- Une Apsa a une origine et évolue sous l'effet des matériaux et technologies, des règlements, des pratiquants, des médias.
- Exemples : perche en fibre de verre, combinaisons interdites en 2010, chaussures à plaque de carbone ; 3 points et 24 secondes, libéro, VAR ; Fosbury flop.
- Enjeux : performance, équité, sécurité, spectacle ; nouvelles formes de pratique (3x3, beach-volley, bloc, breaking).`,
      cartes: [
        { q: "Quels facteurs font évoluer une Apsa ?", r: "Les matériaux et technologies, les règlements, les pratiquants, les médias et la société." },
        { q: "Qui a inventé le basket-ball, et quand ?", r: "James Naismith, en 1891." },
        { q: "Quel matériau a révolutionné le saut à la perche ?", r: "La fibre de verre, dans les années 1960." },
        { q: "Pourquoi les combinaisons en polyuréthane ont-elles été interdites ?", r: "Elles faisaient tomber les records grâce au matériel plus qu'au nageur : interdites en 2010." },
        { q: "Quelle innovation a changé la course à pied récemment ?", r: "Les chaussures à plaque de carbone et mousse très réactive." },
        { q: "Qu'est-ce que le « dopage technologique » ?", r: "Un gain de performance dû au matériel, qui pose la question de l'équité." },
        { q: "Pourquoi un règlement change-t-il ?", r: "Pour rendre le jeu plus équitable, plus spectaculaire, plus sûr, ou adapté aux médias." },
        { q: "Quelle règle a accéléré le jeu au basket-ball ?", r: "La limite des 24 secondes pour tirer." },
        { q: "Qu'est-ce que le libéro au volley-ball ?", r: "Un joueur spécialiste de la défense et de la réception, créé en 1998." },
        { q: "Pourquoi la passe en retrait au gardien est-elle réglementée au football ?", r: "Pour empêcher de gagner du temps et rendre le jeu plus offensif (1992)." },
        { q: "Qu'est-ce que le Fosbury flop ?", r: "Un saut en hauteur sur le dos, imposé par Dick Fosbury en 1968." },
        { q: "Quelle condition a rendu possible le Fosbury flop ?", r: "Les tapis de réception en mousse." },
        { q: "Cite deux nouvelles formes de pratique d'une Apsa.", r: "Le basket 3x3, le beach-volley, l'escalade de bloc, le foot à 5." },
        { q: "Pourquoi crée-t-on des catégories de poids ou d'âge ?", r: "Pour que la compétition soit plus juste entre des adversaires comparables." },
      ],
      quiz: [
        { q: "Qui a inventé le basket-ball ?", choix: ["William Morgan","James Naismith","Pierre de Coubertin","Dick Fosbury"], bonne: 1, expl: "En 1891.", niv: 1 },
        { q: "Quel matériau a permis aux perches de plier et de renvoyer l'énergie ?", choix: ["La fibre de verre","Le bambou","L'acier","Le bois de chêne verni"], bonne: 0, expl: "Années 1960.", niv: 1 },
        { q: "Qu'est-ce que le Fosbury flop ?", choix: ["Un saut en hauteur sur le dos","Un plongeon de départ en natation","Un service à la cuillère au tennis","Une figure au trampoline"], bonne: 0, expl: "Mexico 1968.", niv: 1 },
        { q: "Quelle nouvelle forme du basket-ball est entrée aux Jeux ?", choix: ["Le basket sur glace","Le 3x3","Le basket aquatique","Le basket à six paniers"], bonne: 1, expl: "Tokyo 2021.", niv: 1 },
        { q: "En quelle année les combinaisons en polyuréthane ont-elles été interdites ?", choix: ["1968","1992","1998","2010"], bonne: 3, expl: "Après les records de 2008-2009.", niv: 2 },
        { q: "Pourquoi le volley-ball a-t-il créé le poste de libéro ?", choix: ["Pour allonger les échanges grâce à un spécialiste de la défense","Pour permettre à un joueur de servir à chaque point","Pour remplacer l'entraîneur pendant les temps morts et les pauses","Pour donner un point bonus à l'équipe qui reçoit"], bonne: 0, expl: "Spectacle et défense.", niv: 2 },
        { q: "Pourquoi les tapis en mousse ont-ils changé le saut en hauteur ?", choix: ["Ils ont permis de supprimer la barre en métal","Ils ont réduit la hauteur des barres en compétition internationale","Ils ont obligé les sauteurs à prendre plus d'élan","Ils ont rendu possible une réception sur le dos sans danger"], bonne: 3, expl: "Matériel et technique.", niv: 2 },
        { q: "Quel est l'objectif de l'arbitrage vidéo ?", choix: ["Remplacer les arbitres présents sur le terrain par des machines","Allonger les matchs pour la publicité","Corriger les erreurs d'arbitrage importantes","Filmer les supporters dans les tribunes"], bonne: 2, expl: "Équité.", niv: 2 },
        { q: "Pourquoi le rugby a-t-il durci les règles sur les plaquages hauts ?", choix: ["Pour protéger la santé des joueurs","Pour rendre les matchs plus courts","Pour réduire le nombre d'essais marqués","Pour faciliter le travail des caméras"], bonne: 0, expl: "Sécurité et commotions.", niv: 2 },
        { q: "Pourquoi les chaussures à plaque de carbone font-elles débat ?", choix: ["Elles sont plus lourdes et ralentissent les coureurs sur longue distance","Elles ne sont vendues qu'aux athlètes amateurs","Elles améliorent la performance et posent la question de l'équité","Elles empêchent de courir sous la pluie"], bonne: 2, expl: "Dopage technologique ?", niv: 3 },
        { q: "Quel exemple montre que les pratiquants font évoluer une Apsa ?", choix: ["La vente des droits télévisés du ski","Le pas de patineur imposé par des skieurs de fond","La construction d'une nouvelle station de ski en altitude","Le prix des forfaits de remontées"], bonne: 1, expl: "Innovation technique des athlètes.", niv: 3 },
        { q: "Pourquoi les fédérations créent-elles des formats courts comme le 3x3 ?", choix: ["Pour supprimer les compétitions traditionnelles","Pour réduire le nombre de licenciés","Pour éviter de former des arbitres","Pour attirer de nouveaux publics et les médias"], bonne: 3, expl: "Attentes des publics.", niv: 3 },
      ],
    },
    {
      chapitre: "eppcs-10",
      fiche: `## Biomécanique et caractéristiques technico-tactiques

Pour progresser dans une Apsa, il faut comprendre **pourquoi une technique est efficace** et **comment on choisit une tactique**. La **biomécanique** explique les gestes à partir des lois de la physique ; l'analyse **technico-tactique** montre que la technique et la tactique sont **inséparables**.

### La biomécanique, qu'est-ce que c'est ?
- C'est l'étude des **mouvements** et des **forces** du corps humain en appliquant la mécanique. Elle sert à **optimiser** la performance et à **prévenir** les blessures.
- Outils : vidéo et ralenti, plateformes de force, capteurs, logiciels de pointage, soufflerie.

### Quelques principes d'efficacité
- **Action et réaction** : pour avancer ou s'élever, on pousse sur un appui (sol, bloc de départ, eau, mur) ; plus la poussée est forte et bien orientée, plus on va vite ou haut.
- **Centre de gravité** et **équilibre** : on est stable si le centre de gravité est au-dessus de la **base d'appui** ; abaisser le centre de gravité et élargir les appuis rend plus stable (lutte, judo).
- **Trajectoire** d'un projectile (poids, ballon, sauteur en longueur) : elle dépend de la **vitesse** au moment du lâcher, de l'**angle** d'envol et de la **hauteur** de lâcher. En théorie, l'angle idéal est proche de 45° ; en pratique il est plus faible (environ 20° en longueur, 35 à 40° au poids) car on perd de la vitesse en s'envolant plus haut.
- **Chaîne cinétique** : dans un lancer ou une frappe, les segments s'enchaînent des plus **gros** aux plus **petits** (jambes, bassin, tronc, épaule, bras, main) pour additionner les vitesses.
- **Bras de levier** : un segment plus long donne plus de vitesse au bout (raquette, bras tendu).
- **Rotation** : groupé, on tourne plus vite ; tendu, on tourne plus lentement (gymnastique, plongeon).
- **Résistance de l'air ou de l'eau** (traînée) : on la réduit par une position **profilée** (nage, cyclisme, ski de descente).

### La technique
- Une **technique** est une manière efficace et économique de réaliser une action, transmise et reconnue (le crawl, le smash, le revers, le *o-soto-gari*).
- Elle repose sur des **principes d'efficacité** (ci-dessus) et s'adapte au pratiquant (taille, force, souplesse).

### La tactique et la stratégie
- La **stratégie** est le plan préparé **avant** l'action (choix d'un rythme de course, d'un système de jeu).
- La **tactique** est la décision prise **pendant** l'action, face à l'adversaire et à la situation.
- Principes tactiques des **sports collectifs** :
  - en **attaque** : conserver le ballon, progresser vers la cible, marquer ;
  - en **défense** : empêcher la progression, récupérer le ballon, protéger sa cible.
- Principes des **duels** (badminton, tennis de table, judo, boxe) : créer un **déséquilibre**, déplacer l'adversaire, jouer sur la vitesse et la variété, exploiter ses points faibles.
- En **course** : gérer son allure, se placer dans le peloton, choisir le moment de l'accélération.

### Technique et tactique sont liées
- Une tactique n'est possible que si l'on maîtrise les **techniques** qu'elle demande : pour jouer un amorti en badminton afin de déplacer l'adversaire, il faut savoir le réaliser.
- À l'inverse, une technique n'a de sens que si on la **choisit au bon moment** : un smash sur un volant trop bas devient une faute.
- On parle donc d'**habiletés technico-tactiques**.

### À retenir pour le bac
- Biomécanique : étude des mouvements et des forces ; action-réaction, centre de gravité, trajectoire (vitesse, angle, hauteur), chaîne cinétique, rotation, traînée.
- Technique : manière efficace et économique ; stratégie avant, tactique pendant.
- Principes collectifs : conserver, progresser, marquer / empêcher, récupérer, protéger ; technique et tactique inséparables.`,
      cartes: [
        { q: "Qu'est-ce que la biomécanique ?", r: "L'étude des mouvements et des forces du corps humain grâce aux lois de la mécanique." },
        { q: "À quoi sert la biomécanique dans le sport ?", r: "À optimiser la performance et à prévenir les blessures." },
        { q: "Comment devient-on plus stable en lutte ou en judo ?", r: "En abaissant son centre de gravité et en élargissant ses appuis." },
        { q: "De quoi dépend la trajectoire d'un projectile ?", r: "De la vitesse au lâcher, de l'angle d'envol et de la hauteur de lâcher." },
        { q: "Pourquoi l'angle d'envol réel est-il inférieur à 45° ?", r: "Parce qu'en s'envolant plus haut on perd de la vitesse horizontale." },
        { q: "Qu'est-ce que la chaîne cinétique ?", r: "L'enchaînement des segments, des plus gros aux plus petits, pour additionner les vitesses." },
        { q: "Comment tourner plus vite en salto ?", r: "En se groupant : on rapproche les segments de l'axe de rotation." },
        { q: "Comment réduire la résistance de l'eau ou de l'air ?", r: "En adoptant une position profilée." },
        { q: "Qu'est-ce qu'une technique sportive ?", r: "Une manière efficace et économique de réaliser une action, reconnue et transmise." },
        { q: "Quelle différence entre stratégie et tactique ?", r: "La stratégie est préparée avant l'action ; la tactique est décidée pendant l'action." },
        { q: "Quels sont les principes de l'attaque en sport collectif ?", r: "Conserver le ballon, progresser vers la cible, marquer." },
        { q: "Quels sont les principes de la défense en sport collectif ?", r: "Empêcher la progression, récupérer le ballon, protéger sa cible." },
        { q: "Pourquoi technique et tactique sont-elles liées ?", r: "Une tactique demande des techniques maîtrisées, et une technique doit être choisie au bon moment." },
        { q: "Qu'est-ce qu'une habileté technico-tactique ?", r: "La capacité à réaliser le bon geste au bon moment face à la situation." },
      ],
      quiz: [
        { q: "Qu'étudie la biomécanique ?", choix: ["Les règles des compétitions","Les mouvements et les forces du corps","L'histoire des Jeux olympiques","Le budget des clubs sportifs"], bonne: 1, expl: "Mécanique appliquée au corps.", niv: 1 },
        { q: "Comment un judoka devient-il plus stable ?", choix: ["En resserrant ses pieds l'un contre l'autre","En se tenant sur la pointe des pieds","En abaissant son centre de gravité","En levant les bras au-dessus de la tête"], bonne: 2, expl: "Base d'appui large, centre bas.", niv: 1 },
        { q: "Quelle position réduit la résistance de l'air en cyclisme ?", choix: ["Une position droite, buste relevé","Une position profilée, buste baissé","Une position avec les bras écartés","Une position debout sur les pédales"], bonne: 1, expl: "Moins de traînée.", niv: 1 },
        { q: "Quand la tactique est-elle décidée ?", choix: ["Avant la saison","Pendant l'action","Après le match","Pendant l'échauffement"], bonne: 1, expl: "La stratégie, elle, est préparée avant.", niv: 1 },
        { q: "Quel angle d'envol est le plus proche de la réalité au saut en longueur ?", choix: ["Environ 45°","Environ 60°","Environ 20°","Environ 80°"], bonne: 2, expl: "Perte de vitesse si on monte trop.", niv: 2 },
        { q: "Dans un lancer, dans quel ordre les segments s'enchaînent-ils ?", choix: ["De la main vers les jambes","Ensemble, au même instant","Des jambes vers la main","Du bras vers le bassin"], bonne: 2, expl: "Chaîne cinétique.", niv: 2 },
        { q: "Pourquoi un gymnaste se groupe-t-il pendant un salto ?", choix: ["Pour monter plus haut","Pour tourner plus vite","Pour tourner plus lentement","Pour réduire sa vitesse de chute"], bonne: 1, expl: "Segments proches de l'axe.", niv: 2 },
        { q: "Lequel est un principe de l'attaque en sport collectif ?", choix: ["Protéger sa propre cible","Progresser vers la cible adverse","Récupérer le ballon adverse","Empêcher la progression adverse"], bonne: 1, expl: "Conserver, progresser, marquer.", niv: 2 },
        { q: "De quoi dépend la portée d'un lancer de poids ?", choix: ["De la vitesse, de l'angle et de la hauteur de lâcher","Du poids de l'athlète et de la couleur de l'engin lancé","De la taille du cercle et de l'heure du lancer","Du nombre d'essais et de la note des juges"], bonne: 0, expl: "Trois paramètres.", niv: 2 },
        { q: "Pourquoi un amorti en badminton est-il une habileté technico-tactique ?", choix: ["Il se joue de préférence au premier échange de chaque match du tournoi","Il suffit de frapper fort pour qu'il soit efficace","Il faut savoir le réussir et le jouer quand l'adversaire est loin","Il ne dépend pas de la position de l'adversaire"], bonne: 2, expl: "Technique et choix liés.", niv: 3 },
        { q: "Pourquoi un smash sur un volant trop bas devient-il une faute ?", choix: ["Le smash est interdit en compétition officielle","Le volant est trop lent pour être smashé en salle","L'adversaire a le droit de rattraper le volant à la main","La technique n'est pas adaptée à la situation"], bonne: 3, expl: "Choisir le bon geste au bon moment.", niv: 3 },
        { q: "Pourquoi une technique efficace doit-elle aussi être économique ?", choix: ["Elle coûte moins cher en matériel au pratiquant","Elle évite de devoir s'échauffer avant l'effort","Elle est imposée par le règlement de la fédération internationale","Elle permet de répéter l'action longtemps sans s'épuiser"], bonne: 3, expl: "Efficacité et économie d'énergie.", niv: 3 },
      ],
    },
    {
      chapitre: "eppcs-11",
      fiche: `## Analyser une prestation et un niveau de performance

Savoir **analyser une prestation**, la sienne ou celle d'un autre, est au cœur du programme et de l'**épreuve orale** : le candidat commente une vidéo de sa propre prestation. Il faut identifier un **niveau de performance**, s'appuyer sur des **indicateurs pertinents**, proposer des **pistes d'amélioration** et utiliser les **outils numériques**.

### Les indicateurs
- Un **indicateur** est un élément **observable** ou **mesurable** qui renseigne sur l'efficacité d'une prestation.
- **Indicateurs quantitatifs** (chiffrés) :
  - de **performance** : temps, distance, hauteur, points, place, nombre de buts ;
  - de **réalisation** : nombre de foulées, fréquence de nage, pourcentage de réussite au tir, nombre de fautes directes, fréquence cardiaque, nombre de répétitions et charge en musculation.
- **Indicateurs qualitatifs** (observés) : placement du corps, amplitude du geste, fluidité, équilibre, prise d'information, choix tactique, propos chorégraphique.
- Un bon indicateur est **pertinent** (il renseigne sur ce que l'on veut analyser), **fiable** (deux observateurs voient la même chose) et **simple** à relever.

### Les cinq champs d'apprentissage et leurs repères
- **Réaliser une performance motrice maximale mesurable** (demi-fond, haies, natation, lancers) : temps, distance, régularité, gestion de l'effort.
- **Adapter son déplacement à des environnements variés ou incertains** (escalade, course d'orientation, kayak) : difficulté de l'itinéraire, choix d'itinéraire, sécurité, temps.
- **Réaliser une prestation corporelle destinée à être vue et appréciée** (danse, gymnastique, acrosport) : difficulté des éléments, exécution, composition, propos.
- **Conduire et maîtriser un affrontement collectif ou interindividuel** (sports collectifs, badminton, judo) : rapport de force, gain des points, efficacité des choix.
- **Réaliser et orienter son activité physique pour développer ses ressources et s'entretenir** (musculation, course en durée, step) : thème d'entraînement, charge, ressentis, fréquence cardiaque.

### Une démarche d'analyse en quatre temps
- **1. Situer** la prestation : Apsa, conditions (hauteur des haies, niveau de l'opposition, charge), objectif visé.
- **2. Observer et mesurer** avec quelques indicateurs choisis.
- **3. Interpréter** : relier les observations à des connaissances (principes d'efficacité biomécaniques, filières énergétiques, principes tactiques). Repérer les **points forts** et les **points à améliorer**, et leurs **causes**.
- **4. Proposer** des **pistes d'amélioration** précises et réalistes : exercice, consigne, critère de réussite.

### Les outils numériques
- **Vidéo** et **ralenti** (tablette, téléphone), **arrêt sur image**, comparaison avant/après ou avec un modèle, **vidéo différée** (on se voit quelques secondes après).
- **Applications** de pointage, de chronométrage, de **statistiques** de match, de mesure d'angles.
- **Capteurs** : cardiofréquencemètre, montre GPS, accéléromètre.
- Ils rendent l'analyse plus **précise** et **objective** et motivent, mais il faut **choisir** quelques données utiles et ne pas se noyer dans les chiffres.

### Le lien avec l'épreuve orale
- L'enregistrement dure **1 à 3 minutes**, filmé dans l'établissement, sans montage ; une fiche de synthèse précise les conditions et les indicateurs.
- Le candidat présente en **5 à 7 minutes** au plus : il **commente et analyse** sa pratique **en s'appuyant sur des indicateurs**, puis répond aux questions du jury. Cette partie vaut **8 points**.

### À retenir pour le bac
- Indicateurs quantitatifs (performance, réalisation) et qualitatifs ; pertinents, fiables, simples.
- Démarche : situer, observer et mesurer, interpréter avec des connaissances, proposer des pistes.
- Outils numériques : vidéo, ralenti, applications, capteurs ; oral : vidéo de 1 à 3 minutes, exposé de 5 à 7 minutes, 8 points.`,
      cartes: [
        { q: "Qu'est-ce qu'un indicateur ?", r: "Un élément observable ou mesurable qui renseigne sur l'efficacité d'une prestation." },
        { q: "Donne un indicateur quantitatif de performance.", r: "Un temps, une distance, une hauteur, un nombre de points." },
        { q: "Donne un indicateur quantitatif de réalisation.", r: "Le nombre de foulées, le pourcentage de réussite, la fréquence cardiaque." },
        { q: "Donne un indicateur qualitatif.", r: "Le placement du corps, l'amplitude, la fluidité, le choix tactique." },
        { q: "Quelles qualités doit avoir un bon indicateur ?", r: "Être pertinent, fiable et simple à relever." },
        { q: "Quelles sont les quatre étapes d'une analyse de prestation ?", r: "Situer, observer et mesurer, interpréter avec des connaissances, proposer des pistes." },
        { q: "Que veut dire interpréter une observation ?", r: "La relier à des connaissances (biomécanique, énergie, tactique) pour en trouver la cause." },
        { q: "Qu'est-ce qu'une bonne piste d'amélioration ?", r: "Un exercice précis avec une consigne et un critère de réussite." },
        { q: "Quel champ d'apprentissage concerne la danse et la gymnastique ?", r: "Réaliser une prestation corporelle destinée à être vue et appréciée." },
        { q: "Quel champ d'apprentissage concerne l'escalade et la course d'orientation ?", r: "Adapter son déplacement à des environnements variés ou incertains." },
        { q: "Cite trois outils numériques d'analyse.", r: "La vidéo au ralenti, une application de statistiques, un cardiofréquencemètre." },
        { q: "Quelle est la limite des outils numériques ?", r: "Trop de données peuvent noyer l'analyse : il faut choisir quelques indicateurs utiles." },
        { q: "Combien de temps dure la vidéo de l'épreuve orale ?", r: "De 1 à 3 minutes, filmée sans montage dans l'établissement." },
        { q: "Sur combien de points est noté le commentaire de la vidéo ?", r: "8 points sur les 20 de l'épreuve orale." },
      ],
      quiz: [
        { q: "Lequel est un indicateur quantitatif ?", choix: ["La fluidité du geste","L'amplitude du mouvement","Le pourcentage de tirs réussis","L'élégance de la tenue"], bonne: 2, expl: "Chiffré.", niv: 1 },
        { q: "Lequel est un indicateur qualitatif ?", choix: ["Le temps au 100 m","La distance lancée","Le placement du corps","Le nombre de points marqués"], bonne: 2, expl: "Observé.", niv: 1 },
        { q: "Combien de temps dure la vidéo présentée à l'épreuve orale ?", choix: ["De 10 à 15 minutes","De 1 à 3 minutes","Une demi-heure","Une heure entière"], bonne: 1, expl: "Filmée sans montage.", niv: 1 },
        { q: "À quel champ d'apprentissage appartient la musculation ?", choix: ["Performance motrice maximale mesurable","Prestation destinée à être vue et appréciée","Développer ses ressources et s'entretenir","Affrontement collectif ou interindividuel"], bonne: 2, expl: "Champ 5.", niv: 1 },
        { q: "Quelle est la première étape d'une analyse de prestation ?", choix: ["Proposer tout de suite des exercices d'amélioration","Comparer avec un champion du monde","Situer la prestation et ses conditions","Donner une note à la prestation"], bonne: 2, expl: "Situer, observer, interpréter, proposer.", niv: 2 },
        { q: "Qu'est-ce qu'un indicateur pertinent ?", choix: ["Il est mesuré avec l'appareil le plus cher","Il est choisi par le jury le jour de l'épreuve","Il change à chaque répétition du geste","Il renseigne sur ce que l'on veut analyser"], bonne: 3, expl: "Pertinent, fiable, simple.", niv: 2 },
        { q: "Combien de points vaut le commentaire de la vidéo à l'oral ?", choix: ["10 points","12 points","8 points","20 points"], bonne: 2, expl: "La pratique vaut 12 points.", niv: 2 },
        { q: "Quel outil permet de se voir quelques secondes après son geste ?", choix: ["Le chronomètre manuel","La vidéo différée","Le sifflet électronique","La feuille de match"], bonne: 1, expl: "Retour immédiat.", niv: 2 },
        { q: "Que faut-il ajouter à une observation pour l'interpréter ?", choix: ["Une deuxième vidéo filmée sous un autre angle","Une connaissance qui explique sa cause","La note obtenue lors de l'épreuve pratique","Un avis du public présent dans la salle"], bonne: 1, expl: "Lien théorie-pratique.", niv: 2 },
        { q: "Un coureur ralentit dans le dernier tour d'un 800 m. Quelle analyse est la plus utile ?", choix: ["Constater qu'il a perdu et filmer une autre course","Changer de chaussures sans regarder les temps","Demander au public s'il a aimé la course","Comparer ses temps au tour et relier la baisse à sa gestion de l'effort"], bonne: 3, expl: "Indicateur chiffré et interprétation.", niv: 3 },
        { q: "Pourquoi limiter le nombre d'indicateurs dans un commentaire ?", choix: ["Le jury interdit de citer plus de deux chiffres pendant l'exposé","Les indicateurs qualitatifs sont sans intérêt","Quelques données bien choisies rendent l'analyse plus claire","Les applications ne mesurent qu'une donnée"], bonne: 2, expl: "Choisir, ne pas se noyer.", niv: 3 },
        { q: "Quelle piste d'amélioration est la mieux formulée ?", choix: ["Essayer de courir plus vite la prochaine fois","Regarder des vidéos de champions le soir avant de dormir pour s'inspirer","Des départs avec consigne de pousser fort, réussite si 0,1 s gagné","S'entraîner plus souvent sans changer d'exercice"], bonne: 2, expl: "Exercice, consigne, critère.", niv: 3 },
      ],
    },
    {
      chapitre: "eppcs-12",
      fiche: `## Notions de première : pratique physique et santé

L'épreuve porte sur le programme de terminale, mais les **notions de première** peuvent être mobilisées. La thématique « **pratique physique et santé** » revient souvent dans les sujets avec documents (par exemple : proposer des actions pour encourager l'activité physique de différents publics, sujet de 2025).

### Les mots à bien distinguer
- **Santé** (définition de l'OMS) : un état de complet **bien-être physique, mental et social**, pas seulement l'absence de maladie.
- **Activité physique** : tout mouvement du corps qui dépense de l'énergie (marcher, jardiner, monter les escaliers, faire du sport).
- **Sport** : activité physique codifiée, avec des règles, souvent une compétition et des institutions.
- **Inactivité physique** : ne pas atteindre les niveaux d'activité recommandés.
- **Sédentarité** : passer beaucoup de temps assis ou allongé éveillé (écrans, bureau, transports). On peut être actif et sédentaire à la fois (sportif qui reste assis huit heures par jour).

### Les recommandations
- **Enfants et adolescents (5-17 ans)** : au moins **60 minutes** par jour en moyenne d'activité d'intensité modérée à soutenue, dont des activités qui renforcent les muscles et les os trois fois par semaine.
- **Adultes** : **150 à 300 minutes** par semaine d'activité modérée, ou **75 à 150 minutes** d'activité soutenue, plus du renforcement musculaire deux fois par semaine.
- **Limiter le temps assis** et le couper toutes les heures.
- Une large majorité des adolescents ne suit pas ces recommandations, surtout les filles.

### Les bienfaits de l'activité physique
- **Physiques** : cœur et vaisseaux plus efficaces, baisse de la tension, prévention du surpoids, du **diabète de type 2**, de certains cancers, os et muscles plus solides, meilleur sommeil.
- **Psychologiques** : baisse du stress et de l'anxiété, meilleure humeur, estime de soi, concentration.
- **Sociaux** : rencontres, appartenance à un groupe, apprentissage du respect et de la coopération.
- **Sport sur ordonnance** : depuis la loi de **2016**, un médecin peut prescrire une activité physique adaptée aux patients atteints d'une maladie chronique.

### Comprendre l'effort : les filières énergétiques
- Les muscles utilisent l'**ATP** comme énergie. Trois voies la reconstituent :
  - **anaérobie alactique** : effort très intense et très court (moins de 10 à 15 secondes : sprint, saut, lancer) ;
  - **anaérobie lactique** : effort intense de quelques dizaines de secondes à environ 2 minutes (400 m, 800 m), avec production d'acide lactique et sensation de brûlure ;
  - **aérobie** : effort prolongé et modéré (course en durée, randonnée), qui utilise l'**oxygène**.
- La **fréquence cardiaque maximale** s'estime par la formule **220 – âge**. La **VMA** (vitesse maximale aérobie) sert à construire les allures en course.

### Pratiquer en sécurité
- **Échauffement** progressif, **hydratation**, récupération et sommeil, **progressivité** des charges.
- Écouter ses **sensations** (douleur, essoufflement) ; éviter le **surentraînement**.
- Adapter l'activité à la personne (âge, condition physique, maladie, handicap) : c'est l'**activité physique adaptée** (APA).

### À retenir pour le bac
- Santé selon l'OMS ; activité physique, sport, inactivité, sédentarité.
- Recommandations : 60 min par jour pour les 5-17 ans ; 150 à 300 min par semaine pour les adultes ; couper le temps assis.
- Bienfaits physiques, psychologiques, sociaux ; sport sur ordonnance (2016) ; filières alactique, lactique, aérobie ; FCmax = 220 – âge.`,
      cartes: [
        { q: "Comment l'OMS définit-elle la santé ?", r: "Un état de complet bien-être physique, mental et social, pas seulement l'absence de maladie." },
        { q: "Qu'est-ce que l'activité physique ?", r: "Tout mouvement du corps qui dépense de l'énergie, sport compris." },
        { q: "Quelle différence entre inactivité et sédentarité ?", r: "Inactivité : ne pas bouger assez. Sédentarité : rester longtemps assis ou allongé éveillé." },
        { q: "Combien d'activité physique recommande-t-on aux 5-17 ans ?", r: "Au moins 60 minutes par jour en moyenne, d'intensité modérée à soutenue." },
        { q: "Combien d'activité physique recommande-t-on aux adultes ?", r: "150 à 300 minutes par semaine d'activité modérée, ou 75 à 150 minutes d'activité soutenue." },
        { q: "Cite deux bienfaits physiques de l'activité physique.", r: "Prévention du diabète de type 2 et du surpoids, cœur plus efficace, os plus solides." },
        { q: "Cite deux bienfaits psychologiques de l'activité physique.", r: "Moins de stress et d'anxiété, meilleure estime de soi." },
        { q: "Qu'est-ce que le sport sur ordonnance ?", r: "Depuis la loi de 2016, une activité physique adaptée prescrite par le médecin à un malade chronique." },
        { q: "Quelle filière fournit l'énergie d'un sprint de 10 secondes ?", r: "La filière anaérobie alactique." },
        { q: "Quelle filière domine sur un 400 m ?", r: "La filière anaérobie lactique." },
        { q: "Quelle filière domine dans une course de 30 minutes ?", r: "La filière aérobie, qui utilise l'oxygène." },
        { q: "Comment estimer la fréquence cardiaque maximale ?", r: "Avec la formule 220 moins l'âge." },
        { q: "Qu'est-ce que la VMA ?", r: "La vitesse maximale aérobie, qui sert à calculer les allures en course." },
        { q: "Qu'est-ce que l'activité physique adaptée ?", r: "Une pratique ajustée à la personne : âge, condition physique, maladie ou handicap." },
      ],
      quiz: [
        { q: "Combien de minutes d'activité par jour recommande-t-on aux adolescents ?", choix: ["60 minutes","10 minutes","20 minutes","30 minutes"], bonne: 0, expl: "Recommandations de l'OMS.", niv: 1 },
        { q: "Qu'est-ce que la sédentarité ?", choix: ["Le temps passé assis ou allongé éveillé","Le fait d'éviter d'aller chez le médecin","La pratique d'un sport en salle","Une maladie des muscles et des os"], bonne: 0, expl: "Différente de l'inactivité.", niv: 1 },
        { q: "Quelle est la fréquence cardiaque maximale estimée d'un élève de 17 ans ?", choix: ["150 battements par minute","170 battements par minute","203 battements par minute","180 battements par minute"], bonne: 2, expl: "220 – 17.", niv: 1 },
        { q: "Quelle filière fournit l'énergie d'un lancer de poids ?", choix: ["L'aérobie","L'anaérobie lactique","La filière respiratoire lente","L'anaérobie alactique"], bonne: 3, expl: "Effort très bref.", niv: 1 },
        { q: "Quelle durée hebdomadaire d'activité modérée recommande-t-on aux adultes ?", choix: ["15 à 30 minutes","30 à 60 minutes","150 à 300 minutes","60 à 90 minutes"], bonne: 2, expl: "Soit 30 min, 5 jours sur 7.", niv: 2 },
        { q: "Quelle filière domine sur une course de 800 m ?", choix: ["L'anaérobie alactique","L'anaérobie lactique","L'aérobie pure","La filière du sommeil"], bonne: 1, expl: "Effort intense d'environ 2 minutes.", niv: 2 },
        { q: "Que permet le sport sur ordonnance depuis 2016 ?", choix: ["Rembourser les abonnements des salles de sport privées du pays","Dispenser les élèves malades de l'EPS pour l'année","Prescrire une activité physique à un malade chronique","Imposer le sport aux salariés des entreprises"], bonne: 2, expl: "Activité physique adaptée.", niv: 2 },
        { q: "Quel bienfait de l'activité physique est d'ordre social ?", choix: ["Rencontrer des gens et appartenir à un groupe","Baisser sa tension artérielle","Renforcer la solidité de ses os et de ses articulations","Réduire le risque de diabète"], bonne: 0, expl: "Trois dimensions de la santé.", niv: 2 },
        { q: "Un sportif s'entraîne une heure par jour mais reste assis neuf heures. Comment le décrire ?", choix: ["Inactif et sédentaire","Inactif mais non sédentaire","Actif mais sédentaire","Ni actif ni sédentaire"], bonne: 2, expl: "Deux notions distinctes.", niv: 2 },
        { q: "Pourquoi l'OMS ne définit-elle pas la santé comme l'absence de maladie ?", choix: ["Elle considère que tout le monde est malade","Elle ne s'intéresse qu'à la santé mentale","Elle laisse les médecins définir la santé","Elle inclut le bien-être physique, mental et social"], bonne: 3, expl: "Définition large.", niv: 3 },
        { q: "Quelle action aide le mieux des lycéens à réduire leur sédentarité ?", choix: ["Un cours théorique sur les filières énergétiques","Une compétition de haut niveau réservée aux meilleurs","Une heure de plus devant un écran éducatif","Des pauses actives et venir au lycée à pied ou à vélo"], bonne: 3, expl: "Couper le temps assis.", niv: 3 },
        { q: "Pourquoi la sensation de brûlure apparaît-elle sur un 400 m ?", choix: ["Le cœur s'arrête de battre pendant quelques secondes en fin de course","La filière aérobie consomme trop d'oxygène","La filière lactique produit de l'acide lactique dans les muscles","Les muscles manquent d'eau dès le départ"], bonne: 2, expl: "Effort intense.", niv: 3 },
      ],
    },
    {
      chapitre: "eppcs-13",
      fiche: `## Notions de première : métiers du sport et projet d'intervention

La thématique de première « **métiers du sport et du corps humain** » peut revenir dans le sujet au choix (au bac 2025 : faire des propositions concrètes pour **vivre des expériences** dans le contexte professionnel de ces métiers). En terminale, le **projet** consiste à **intervenir auprès de pratiquants** : conduire un exercice ou une séance.

### Les grands secteurs professionnels
- **Enseignement et éducation** : professeur d'EPS (concours du CAPEPS après un master), professeur des écoles.
- **Animation et encadrement** : éducateur sportif, animateur (diplômes **BPJEPS**, **DEJEPS**, **DESJEPS** du ministère des Sports), moniteur de ski ou d'escalade, maître-nageur sauveteur.
- **Entraînement et performance** : entraîneur, **préparateur physique**, analyste vidéo, conseiller technique.
- **Santé et bien-être** : **enseignant en activité physique adaptée** (APA), **masseur-kinésithérapeute**, ergothérapeute, médecin du sport, diététicien, coach sportif.
- **Management et économie** : gestionnaire d'équipement, chargé de développement d'un club ou d'une fédération, organisateur d'événements, commercial dans les articles de sport, agent de joueurs.
- **Communication et médias** : journaliste sportif, community manager.
- **Arts du corps** : danseur, chorégraphe, circassien.
- **Sécurité** : métiers de la défense, pompier, gendarme, où la condition physique est exigée.

### Les formations
- Université : licence **STAPS** (sciences et techniques des activités physiques et sportives) avec ses parcours : **éducation et motricité**, **entraînement sportif**, **activité physique adaptée et santé**, **management du sport**, **ergonomie du sport et performance motrice**.
- Diplômes d'État de la **jeunesse et des sports** (BPJEPS niveau bac, DEJEPS niveau bac + 2), souvent en **alternance**.
- Écoles de kinésithérapie, d'ergothérapie, de commerce ou de journalisme ; brevets fédéraux pour les bénévoles.
- Des **qualités** communes : goût du contact humain, pédagogie, sens des responsabilités et de la **sécurité**, bonne condition physique, travail en équipe, horaires souvent décalés (soirs, week-ends).

### Découvrir un métier
- Stage d'observation, rencontre ou interview d'un professionnel, visite d'un club ou d'un centre de rééducation, journée portes ouvertes en STAPS, service civique, bénévolat dans un club ou à l'association sportive, rôle de **jeune officiel** (arbitre, coach).

### Le projet de terminale : intervenir auprès de pratiquants
- L'élève prépare et conduit un **exercice** ou une **séance** dans une Apsa pour un groupe (camarades, élèves plus jeunes, public d'un club).
- **Préparer** :
  - connaître son **public** (âge, niveau, besoins) ;
  - fixer un **objectif** précis ;
  - choisir une **situation** (but, aménagement du matériel, organisation des groupes, rotation) ;
  - prévoir les **consignes**, les **critères de réussite** et les **variables** pour simplifier ou compliquer ;
  - anticiper la **sécurité** (échauffement, espace, matériel, parade).
- **Animer** : se placer pour voir tout le groupe, donner des consignes **courtes** et claires, **démontrer**, encourager, corriger avec un **retour** précis (« pousse plus loin sur ta jambe d'appel »), réguler le temps.
- **Faire le bilan** avec le professeur et les pratiquants : objectif atteint ? Ce qui a marché, ce qu'il faudrait changer. C'est l'occasion d'expérimenter la **posture** d'animateur ou d'éducateur.

### À retenir pour le bac
- Secteurs : enseignement, animation, entraînement, santé (APA, kiné), management, médias, arts, sécurité.
- Formations : STAPS et ses cinq parcours, BPJEPS et DEJEPS, CAPEPS ; qualités : pédagogie, sécurité, contact humain.
- Projet de terminale : préparer (public, objectif, situation, consignes, critères, sécurité), animer, faire le bilan.`,
      cartes: [
        { q: "Quel concours faut-il pour devenir professeur d'EPS ?", r: "Le CAPEPS, préparé après un master." },
        { q: "Que signifie STAPS ?", r: "Sciences et techniques des activités physiques et sportives." },
        { q: "Cite trois parcours de licence STAPS.", r: "Éducation et motricité, entraînement sportif, activité physique adaptée et santé (aussi management, ergonomie)." },
        { q: "Quel diplôme permet d'être éducateur sportif au niveau bac ?", r: "Le BPJEPS, délivré par le ministère des Sports." },
        { q: "Que fait un enseignant en activité physique adaptée ?", r: "Il fait pratiquer des personnes malades, âgées ou handicapées avec des activités adaptées à leur santé." },
        { q: "Que fait un préparateur physique ?", r: "Il développe les qualités physiques des sportifs (force, vitesse, endurance) et prévient les blessures." },
        { q: "Cite deux métiers du management du sport.", r: "Gestionnaire d'équipement, organisateur d'événements, chargé de développement d'un club." },
        { q: "Quelles qualités demandent les métiers du sport ?", r: "Pédagogie, contact humain, sens de la sécurité, condition physique, travail en équipe." },
        { q: "Comment découvrir un métier du sport au lycée ?", r: "Stage, interview d'un professionnel, visite, bénévolat, rôle de jeune officiel." },
        { q: "En quoi consiste le projet de terminale ?", r: "Conduire un exercice ou une séance dans une Apsa auprès d'un groupe de pratiquants." },
        { q: "Que faut-il préparer avant d'intervenir ?", r: "Le public, l'objectif, la situation, les consignes, les critères de réussite, la sécurité." },
        { q: "Qu'est-ce qu'un critère de réussite ?", r: "Un repère simple qui dit au pratiquant s'il a réussi (« 7 passes sur 10 »)." },
        { q: "Comment bien donner une consigne ?", r: "Courte, claire, avec une démonstration, en voyant tout le groupe." },
        { q: "À quoi sert le bilan après l'intervention ?", r: "À vérifier si l'objectif est atteint et à savoir ce qu'il faut changer." },
      ],
      quiz: [
        { q: "Quel concours mène au métier de professeur d'EPS ?", choix: ["Le BPJEPS","Le baccalauréat","Le brevet fédéral","Le CAPEPS"], bonne: 3, expl: "Après un master.", niv: 1 },
        { q: "Que veut dire STAPS ?", choix: ["Sciences et techniques des activités physiques et sportives","Service technique des associations et parcs sportifs","Syndicat des travailleurs et athlètes professionnels du sport","Section technique d'activités physiques scolaires"], bonne: 0, expl: "Filière universitaire.", niv: 1 },
        { q: "Quel métier relève du secteur de la santé ?", choix: ["Enseignant en activité physique adaptée","Journaliste sportif à la radio","Gestionnaire d'un stade municipal","Commercial dans un grand magasin d'articles de sport"], bonne: 0, expl: "APA.", niv: 1 },
        { q: "Quel diplôme du ministère des Sports permet d'animer au niveau bac ?", choix: ["Le CAPEPS","Le master STAPS","Le BPJEPS","Le DESJEPS"], bonne: 2, expl: "Souvent en alternance.", niv: 1 },
        { q: "Que fait un préparateur physique ?", choix: ["Il arbitre les matchs de son club","Il vend les droits télévisés des compétitions","Il construit les équipements sportifs","Il développe les qualités physiques des sportifs"], bonne: 3, expl: "Force, vitesse, endurance.", niv: 2 },
        { q: "Quelle activité permet de découvrir un métier du sport au lycée ?", choix: ["Regarder un match à la télévision","Acheter un nouveau maillot de son équipe","Lire le règlement d'un sport collectif","Interviewer un éducateur de club"], bonne: 3, expl: "Contact avec un professionnel.", niv: 2 },
        { q: "Quel parcours de STAPS prépare à l'enseignement de l'EPS ?", choix: ["Management du sport","Éducation et motricité","Ergonomie du sport","Activité physique adaptée et santé"], bonne: 1, expl: "Puis master et CAPEPS.", niv: 2 },
        { q: "Qu'est-ce qu'un critère de réussite dans une séance ?", choix: ["Un repère simple qui dit au pratiquant s'il a réussi","La note donnée par le professeur à la fin du trimestre","Le nombre de pratiquants présents à la séance","Le temps passé à installer le matériel"], bonne: 0, expl: "Exemple : 7 passes sur 10.", niv: 2 },
        { q: "Où se placer pour animer un groupe ?", choix: ["Au milieu du groupe, dos à la moitié des élèves","Le plus loin possible pour ne pas gêner","À un endroit d'où l'on voit tout le groupe","Derrière le mur du gymnase pour réfléchir"], bonne: 2, expl: "Voir et être vu.", niv: 2 },
        { q: "Pourquoi prévoir des variables dans une situation d'apprentissage ?", choix: ["Pour l'adapter à des pratiquants de niveaux différents","Pour changer d'Apsa au milieu de la séance","Pour que les pratiquants échouent au début de la séance","Pour réduire le temps de pratique effectif"], bonne: 0, expl: "Simplifier ou compliquer.", niv: 3 },
        { q: "Quel retour aide le mieux un pratiquant à progresser ?", choix: ["Un « bravo » général à la fin de la séance","Une longue liste de ses erreurs donnée en une seule fois","Une comparaison avec le meilleur du groupe","Une remarque précise sur un point du geste à corriger"], bonne: 3, expl: "Retour ciblé.", niv: 3 },
        { q: "Pourquoi le bilan de l'intervention fait-il partie du projet ?", choix: ["Il permet de juger si l'objectif est atteint et de s'améliorer","Il remplace la préparation écrite de la séance suivante du groupe","Il sert à noter les pratiquants les plus faibles","Il évite d'avoir à parler devant le groupe"], bonne: 0, expl: "Posture réflexive.", niv: 3 },
      ],
    },
    {
      chapitre: "eppcs-14",
      fiche: `## Méthode : la dissertation de culture sportive

La **première partie** de l'écrit (3 h 30 en tout) est une **dissertation** sur un sujet général de culture sportive, en lien avec la thématique « **enjeux de la pratique physique dans le monde contemporain** ». Elle est notée sur **10 points**. Tous les candidats traitent le même sujet. Compter environ **1 h 45**.

### Les formes de sujets
- Une **question** : « Le sport adapté favorise-t-il l'inclusion et le bien-être des personnes en situation de handicap ? » (bac 2025), « En quoi les Jeux olympiques et paralympiques ont-ils un impact positif pour les pays hôtes ? » (bac 2025).
- Une **citation** à commenter (sujets d'exemple d'Eduscol sur l'objectif de Paris 2024).
- Une **affirmation** à discuter et illustrer : « Les grands événements sportifs ont été instrumentalisés à des fins de propagande mais aussi de revendication des droits de l'homme. »
- « Comment expliquer que… ? » : sujet qui demande des **causes**.

### Analyser le sujet (15 à 20 minutes)
- Souligner et **définir** chaque mot important (« sport adapté », « inclusion », « bien-être », « pays hôtes », « impact »).
- Repérer le **type de consigne** : discuter (oui, mais), expliquer (causes), commenter (sens et limites).
- Formuler une **problématique** : la vraie question à laquelle on répond, souvent sous la forme d'une tension (« Le sport rapproche-t-il ou divise-t-il ? »).
- Lister au brouillon les **connaissances** (dates, lois, chiffres, organismes) et les **exemples** (sportifs, événements, Apsa vécues en spécialité).

### Construire le plan
- **Deux ou trois parties**, chacune avec deux ou trois **arguments** :
  - plan **dialectique** pour une question fermée : oui (thèse), mais (limites), donc (conditions, dépassement) ;
  - plan **analytique** pour un « comment expliquer » : constat, causes, solutions ;
  - plan **thématique** : dimensions sociale, économique, politique, éthique, environnementale.
- Chaque argument suit la règle **AEI** : **Affirmation** (une idée), **Explication** (pourquoi, avec une connaissance), **Illustration** (un exemple précis, si possible chiffré ou daté).

### Rédiger
- **Introduction** : une **accroche** (un fait récent, une citation, un chiffre), la **définition** des mots-clés, la **problématique**, l'**annonce du plan**.
- **Développement** : un paragraphe par argument, des **transitions** entre les parties.
- **Conclusion** : **réponse** claire à la problématique, puis une **ouverture** (autre enjeu lié).
- Mobiliser sa **pratique** : le sujet attend aussi des liens entre la théorie et ce qu'on a vécu (une rencontre UNSS de sport partagé, un projet d'événement).

### Ce que valorise le correcteur
- Une **problématique** pertinente et un plan qui y répond.
- Des **connaissances précises** (Coubertin 1894, Guttmann 1948, loi de 2022, AMA 1999, environ 40 % de licences féminines).
- Des **exemples variés** et une réflexion **nuancée**.
- Une expression claire, sans fautes qui gênent la lecture.

### Les erreurs à éviter
- Réciter le cours sans répondre à la question.
- Faire une liste d'exemples sans les expliquer.
- Oublier de définir les termes du sujet.
- Ne donner que son opinion, sans arguments ni connaissances.

### À retenir pour le bac
- 10 points, environ 1 h 45 ; sujet commun sur les enjeux de la pratique physique dans le monde contemporain.
- Analyser (définir, problématiser), plan dialectique, analytique ou thématique, arguments AEI.
- Introduction : accroche, définitions, problématique, annonce ; conclusion : réponse et ouverture.`,
      cartes: [
        { q: "Sur combien de points est notée la dissertation ?", r: "10 points sur 20." },
        { q: "Sur quelle thématique porte la dissertation ?", r: "Les enjeux de la pratique physique dans le monde contemporain." },
        { q: "Quelle est la première étape face au sujet ?", r: "Définir chaque mot important et repérer le type de consigne." },
        { q: "Qu'est-ce qu'une problématique ?", r: "La vraie question à laquelle répond la dissertation, souvent sous forme de tension." },
        { q: "Quand choisir un plan dialectique ?", r: "Pour une question fermée à discuter : oui, mais, donc." },
        { q: "Quand choisir un plan analytique ?", r: "Pour un sujet « comment expliquer » : constat, causes, solutions." },
        { q: "Que signifie la règle AEI ?", r: "Affirmation, Explication, Illustration." },
        { q: "Que contient l'introduction ?", r: "Une accroche, la définition des mots-clés, la problématique et l'annonce du plan." },
        { q: "Que contient la conclusion ?", r: "La réponse à la problématique puis une ouverture." },
        { q: "Quelle accroche utiliser ?", r: "Un fait récent, une citation ou un chiffre en lien avec le sujet." },
        { q: "Pourquoi citer sa propre pratique ?", r: "Le sujet attend des liens entre la théorie et ce que l'on a vécu en spécialité." },
        { q: "Qu'est-ce qu'un exemple précis ?", r: "Un fait daté ou chiffré, un sportif, un événement, une loi, un organisme." },
        { q: "Quel est le grand défaut à éviter ?", r: "Réciter le cours sans répondre à la question posée." },
        { q: "Combien de temps consacrer à la dissertation ?", r: "Environ 1 h 45 sur les 3 h 30." },
      ],
      quiz: [
        { q: "Sur combien de points est notée la dissertation ?", choix: ["4 points","6 points","10 points","8 points"], bonne: 2, expl: "L'autre partie aussi sur 10.", niv: 1 },
        { q: "Que signifie le A de la règle AEI ?", choix: ["Affirmation","Argumentation","Accroche","Analyse"], bonne: 0, expl: "Affirmation, Explication, Illustration.", niv: 1 },
        { q: "Quel élément termine l'introduction ?", choix: ["L'annonce du plan","L'ouverture","La réponse à la question","La liste des exemples"], bonne: 0, expl: "Accroche, définitions, problématique, annonce.", niv: 1 },
        { q: "Combien de temps consacrer à peu près à la dissertation ?", choix: ["20 minutes","1 h 45","45 minutes","1 heure"], bonne: 1, expl: "Moitié des 3 h 30.", niv: 1 },
        { q: "Quel plan convient à « Comment expliquer que les femmes pratiquent moins ? »", choix: ["Un plan chronologique de l'histoire des Jeux olympiques","Un plan qui oppose deux sports différents","Un plan analytique : constat, causes, solutions","Un plan en une seule grande partie"], bonne: 2, expl: "Sujet qui demande des causes.", niv: 2 },
        { q: "Pourquoi définir les mots du sujet ?", choix: ["Pour remplir l'introduction le plus vite possible","Pour montrer qu'on connaît le dictionnaire","Pour délimiter le sujet et éviter le hors-sujet","Pour remplacer la problématique"], bonne: 2, expl: "Cadrer la réflexion.", niv: 2 },
        { q: "Quel exemple illustre le mieux un argument sur la féminisation du sport ?", choix: ["Le fait que le football se joue avec un ballon","La loi du 2 mars 2022 qui impose la parité des instances","Le nombre de spectateurs d'un match de rugby masculin","Une licence de tennis qui coûte plus cher qu'une licence de foot"], bonne: 1, expl: "Exemple précis et daté.", niv: 2 },
        { q: "Que doit contenir la conclusion ?", choix: ["Un nouvel argument non développé","Une réponse claire puis une ouverture","Le résumé de chaque paragraphe mot pour mot","Une citation sans commentaire"], bonne: 1, expl: "Réponse et ouverture.", niv: 2 },
        { q: "Quelle problématique convient au sujet sur l'impact des Jeux pour les pays hôtes ?", choix: ["Les bénéfices des Jeux l'emportent-ils sur leurs coûts ?","En quelle année ont eu lieu les premiers Jeux modernes ?","Combien de sports figurent au programme des Jeux ?","Qui a dessiné les cinq anneaux olympiques ?"], bonne: 0, expl: "Une tension à discuter.", niv: 2 },
        { q: "Pourquoi un plan dialectique convient-il à une question fermée ?", choix: ["Il évite d'avoir à donner un avis dans la conclusion finale du devoir","Il permet de discuter le oui, le non et de nuancer la réponse","Il range les exemples par ordre chronologique","Il permet de traiter un seul aspect du sujet"], bonne: 1, expl: "Réflexion nuancée.", niv: 3 },
        { q: "Pourquoi une liste d'exemples sans explication est-elle pénalisée ?", choix: ["Les correcteurs n'aiment pas les exemples tirés du sport professionnel","Un exemple ne prouve rien s'il n'est pas relié à une idée","Le sujet interdit de citer des sportifs connus","Les exemples doivent être placés en conclusion"], bonne: 1, expl: "Règle AEI.", niv: 3 },
        { q: "Comment relier la dissertation à sa pratique en spécialité ?", choix: ["Citer une expérience vécue qui illustre l'argument","Raconter toute sa saison sportive en introduction","Donner ses résultats en compétition en conclusion","Remplacer les connaissances par ses souvenirs"], bonne: 0, expl: "Lien théorie-pratique.", niv: 3 },
      ],
    },
    {
      chapitre: "eppcs-15",
      fiche: `## Méthode : le sujet avec documents et l'épreuve pratique-orale

La **seconde partie** de l'écrit propose **deux sujets au choix**, chacun lié à une partie différente du programme. Chaque sujet comporte une **question** et des **documents** (textes, chiffres, graphiques, images). Elle est notée sur **10 points**. L'**épreuve pratique-orale**, notée sur 20, complète l'écrit : la note finale de la spécialité est la **moyenne** des deux.

### Choisir son sujet (5 minutes)
- Lire les deux questions et les documents en entier.
- Choisir celui où l'on a le plus de **connaissances** et d'**exemples vécus**, pas celui qui paraît le plus court.

### Exploiter les documents
- Pour chaque document : **nature** (article, graphique, enquête, photo), **source**, **date**, **idée principale**.
- Pour un graphique ou un tableau : lire le titre, les unités, citer des **valeurs précises**, comparer (hommes et femmes, âges, années), dégager une **tendance**.
- Ne pas paraphraser : utiliser le document comme **preuve** d'une idée.
- Toujours **ajouter ses connaissances** : la consigne demande de s'appuyer « à la fois sur le contenu des documents et sur ses connaissances ».

### Répondre à la consigne
- Les sujets demandent souvent des **propositions concrètes** : « vous ferez et justifierez trois propositions d'actions pour promouvoir la pratique physique dans le cercle de vos amis » (sujet d'exemple), « deux propositions pour inclure les personnes en situation de handicap » (bac 2025).
- Pour chaque proposition :
  - **quoi** : l'action précise (créneau de basket 3x3 le vendredi soir, sortie mensuelle de course d'orientation) ;
  - **pour qui** et **par qui** : public visé, encadrement ;
  - **pourquoi** : le **problème** qu'elle résout, appuyé sur un **document** (un chiffre) et une **connaissance** ;
  - **comment** la faire marcher et l'**évaluer** (nombre de participants, assiduité).
- Rédiger avec une courte **introduction** (contexte, enjeu), une partie par proposition, une **conclusion**.

### L'épreuve pratique-orale (30 minutes, notée sur 20)
- **Partie pratique (12 points)** : l'établissement propose cinq Apsa de cinq champs d'apprentissage ; trois mois avant l'épreuve, le recteur en retient deux champs, et le candidat choisit l'un des deux. Deux professeurs d'EPS évaluent la **performance** et l'**habileté** à l'aide d'un référentiel.
- **Partie orale (8 points)** : commentaire d'un **enregistrement vidéo** de **1 à 3 minutes** de sa propre prestation, filmé dans l'établissement, sans montage, dans une Apsa du cycle terminal (qui peut être différente de celle de la partie pratique).
  - Une **fiche de synthèse** de l'enseignant indique les conditions (hauteur des haies, charge, niveau d'opposition) et les indicateurs.
  - Le candidat présente **5 à 7 minutes** au plus, puis le jury pose des questions.
  - Le jury attend une **analyse réflexive** : situer la prestation, la commenter avec des **indicateurs**, l'éclairer par des **connaissances** (biomécanique, énergie, tactique), dire ce qu'on a amélioré et ce qu'il reste à travailler.
- Les deux parties ne sont pas liées et peuvent avoir lieu à des moments différents.
- Un candidat **dispensé d'EPS** ne peut pas passer l'épreuve de spécialité.

### Réussir l'exposé
- Préparer un **plan** court : présentation de la séquence filmée, analyse avec deux ou trois indicateurs, explication, pistes de progrès.
- Montrer des moments précis de la vidéo (« à 1 min 10, mon appel est trop loin de la barre »).
- Employer le **vocabulaire** de l'Apsa et des notions du cours.
- Répondre aux questions en **développant** et en reliant à sa culture sportive.

### À retenir pour le bac
- Sujet au choix sur 10 points : exploiter chaque document avec des valeurs, ajouter ses connaissances, des propositions concrètes et justifiées.
- Oral sur 20 : pratique (12 points, un champ parmi deux retenus par le recteur) et commentaire vidéo (8 points : vidéo de 1 à 3 minutes, exposé de 5 à 7 minutes, puis questions).
- Note de la spécialité : moyenne de l'écrit et de l'oral.`,
      cartes: [
        { q: "Sur combien de points est noté le sujet avec documents ?", r: "10 points sur 20." },
        { q: "Entre combien de sujets choisit-on dans la seconde partie ?", r: "Deux sujets, liés à deux parties différentes du programme." },
        { q: "Que faut-il relever pour chaque document ?", r: "Sa nature, sa source, sa date et son idée principale." },
        { q: "Comment exploiter un graphique ?", r: "Lire titre et unités, citer des valeurs, comparer et dégager une tendance." },
        { q: "Que demande la consigne en plus des documents ?", r: "De s'appuyer aussi sur ses connaissances." },
        { q: "Comment construire une proposition d'action ?", r: "Dire quoi, pour qui, pourquoi (document et connaissance) et comment l'évaluer." },
        { q: "Combien dure l'épreuve pratique-orale ?", r: "30 minutes : 15 minutes de pratique et 15 minutes d'oral." },
        { q: "Combien de points vaut la partie pratique ?", r: "12 points sur 20." },
        { q: "Qui choisit les champs d'apprentissage de la partie pratique ?", r: "Le recteur en retient deux parmi les cinq de l'établissement, puis le candidat en choisit un." },
        { q: "Combien dure la vidéo de la partie orale ?", r: "De 1 à 3 minutes, filmée sans montage dans l'établissement." },
        { q: "Combien de temps dure l'exposé du candidat ?", r: "De 5 à 7 minutes au plus, puis des questions du jury." },
        { q: "Que contient la fiche de synthèse de l'enseignant ?", r: "Les conditions de la prestation et les indicateurs de réalisation ou de performance." },
        { q: "Comment est calculée la note de la spécialité ?", r: "C'est la moyenne de la note d'écrit et de la note d'oral." },
        { q: "Un élève dispensé d'EPS peut-il passer l'épreuve d'EPPCS ?", r: "Non." },
      ],
      quiz: [
        { q: "Sur combien de points est noté le sujet avec documents ?", choix: ["4 points","10 points","6 points","8 points"], bonne: 1, expl: "Moitié de l'écrit.", niv: 1 },
        { q: "Combien de points vaut la partie pratique de l'oral ?", choix: ["4 points","12 points","6 points","8 points"], bonne: 1, expl: "Le commentaire vidéo vaut 8 points.", niv: 1 },
        { q: "Combien de temps dure l'épreuve pratique-orale ?", choix: ["30 minutes","10 minutes","15 minutes","20 minutes"], bonne: 0, expl: "Deux parties de 15 minutes.", niv: 1 },
        { q: "Comment est calculée la note finale de la spécialité ?", choix: ["La note d'écrit, l'oral servant de bonus","La meilleure des deux notes","La moyenne de l'écrit et de l'oral","La note d'oral multipliée par deux"], bonne: 2, expl: "Chacune sur 20.", niv: 1 },
        { q: "Combien de temps dure au plus l'exposé sur la vidéo ?", choix: ["10 minutes","7 minutes","15 minutes","20 minutes"], bonne: 1, expl: "De 5 à 7 minutes, puis questions.", niv: 2 },
        { q: "Qui choisit les deux champs d'apprentissage possibles pour la pratique ?", choix: ["Le candidat seul","Le professeur de la classe","Le recteur d'académie","Le président de l'association sportive"], bonne: 2, expl: "Trois mois avant l'épreuve.", niv: 2 },
        { q: "Comment utiliser un document dans la réponse ?", choix: ["En le recopiant en entier dans l'introduction","En le résumant ligne par ligne sans commentaire","Comme décoration, en le citant dans la conclusion du devoir","Comme preuve chiffrée d'une idée ou d'une proposition"], bonne: 3, expl: "Exploiter, pas paraphraser.", niv: 2 },
        { q: "Quelle action proposée est la mieux construite ?", choix: ["Faire plus de sport ensemble pour être en forme et mieux dormir le soir","Demander à l'État de construire un stade neuf dans chaque lycée de la région académique","Regarder davantage de sport à la télévision avec ses amis","Un créneau de 3x3 pour les filles, justifié par leur faible pratique (document 1)"], bonne: 3, expl: "Quoi, pour qui, pourquoi.", niv: 2 },
        { q: "Que doit contenir le commentaire de la vidéo ?", choix: ["Le récit détaillé de toute sa saison en club, match après match","Une analyse avec des indicateurs éclairée par des connaissances","La liste des règles de l'Apsa filmée","Une critique du travail de la caméra"], bonne: 1, expl: "Regard réflexif.", niv: 2 },
        { q: "Pourquoi choisir le sujet où l'on a le plus de connaissances ?", choix: ["Les documents de ce sujet sont plus courts que ceux de l'autre","Le correcteur donne plus de points à ce sujet","La consigne demande d'ajouter des connaissances aux documents","On peut traiter les deux sujets en même temps"], bonne: 2, expl: "Documents et connaissances.", niv: 3 },
        { q: "Pourquoi citer un moment précis de la vidéo pendant l'exposé ?", choix: ["Pour gagner du temps sans rien expliquer","Pour éviter les questions du jury","Pour montrer au jury la bonne qualité de la caméra utilisée","Pour appuyer l'analyse sur une observation vérifiable"], bonne: 3, expl: "Analyse précise.", niv: 3 },
        { q: "Pourquoi prévoir un moyen d'évaluer chaque action proposée ?", choix: ["Parce que le jury exige un budget détaillé","Pour vérifier qu'elle répond au problème repéré","Pour remplacer la justification par les documents","Pour allonger la copie jusqu'à quatre pages"], bonne: 1, expl: "Projet complet.", niv: 3 },
      ],
    },
  ],
  methode: [
    {
      "id": "eppcs-m1",
      "mat": "eppcs",
      "titre": "La dissertation : discuter une question fermée",
      "formules": [
        "… favorise-t-il… ?",
        "Vous semble-t-il important de… ? Pourquoi ?",
        "Peut-on dire que… ?"
      ],
      "vu": [
        "Bac 2025, 1er jour : « Le sport adapté favorise-t-il l'inclusion et le bien-être des personnes en situation de handicap ? »",
        "Bac 2024 : dissertation sur l'égalité entre les femmes et les hommes dans le sport contemporain (intitulé relevé dans la presse)",
        "Sujets « zéro » publiés par Eduscol pour l'écrit d'EPPCS : « Vous semble-t-il important de promouvoir le sport adapté ? Pourquoi ? »"
      ],
      "pts": "10 points sur 20",
      "attendu": "Une dissertation organisée qui répond à la question posée. Le correcteur attend des mots-clés définis (sport adapté, inclusion, bien-être), une problématique, un plan en deux ou trois parties qui discute la réponse (oui, mais, à quelles conditions), des arguments appuyés sur des connaissances précises (Guttmann 1948, handisport et sport adapté, classification, sport partagé, loi, chiffres) et des exemples variés, dont un vécu en spécialité, et une conclusion qui tranche.",
      "etapes": [
        "Définir chaque mot du sujet et repérer ce qu'il faut discuter.",
        "Poser la problématique sous forme de tension.",
        "Lister connaissances et exemples au brouillon.",
        "Construire un plan : oui (bienfaits), mais (obstacles), à quelles conditions (leviers).",
        "Rédiger chaque argument selon la règle affirmation, explication, illustration.",
        "Conclure en répondant clairement, puis ouvrir."
      ],
      "mots": [
        "inclusion",
        "sport partagé",
        "handisport",
        "sport adapté",
        "classification",
        "accessibilité",
        "bien-être physique, mental et social",
        "Paris 2024",
        "Ludwig Guttmann"
      ],
      "pieges": [
        "Ne pas définir sport adapté ni inclusion.",
        "Répondre seulement oui sans nuancer.",
        "Accumuler des exemples sans les expliquer.",
        "Oublier les obstacles concrets (accessibilité, coût, encadrement)."
      ],
      "cas": "Sujet : « Le sport adapté favorise-t-il l'inclusion et le bien-être des personnes en situation de handicap ? »",
      "question": "Rédige l'introduction complète.",
      "modele": "Lors des Jeux paralympiques de Paris 2024, des stades pleins ont acclamé des athlètes en fauteuil ou non-voyants. Pourtant, en France, les personnes en situation de handicap pratiquent beaucoup moins que le reste de la population. Le sport adapté désigne les pratiques dont le matériel, les règles et l'encadrement sont ajustés au handicap. L'inclusion consiste à permettre à ces personnes de participer pleinement à la vie sociale, et le bien-être recouvre, selon l'OMS, une dimension physique, mentale et sociale. On peut donc se demander si l'adaptation des pratiques suffit à intégrer les personnes en situation de handicap, ou si elle risque de les tenir à part. Nous verrons d'abord que le sport adapté apporte de réels bienfaits, puis que de nombreux obstacles limitent son effet inclusif, avant de montrer à quelles conditions il devient un vrai levier d'inclusion.",
      "grille": [
        "Accroche en lien avec le sujet",
        "Définition des trois mots-clés",
        "Problématique sous forme de tension",
        "Annonce d'un plan en trois temps",
        "Expression claire"
      ]
    },
    {
      "id": "eppcs-m2",
      "mat": "eppcs",
      "titre": "La dissertation : les grands événements et leurs enjeux",
      "formules": [
        "En quoi… ?",
        "Commentez et illustrez cette affirmation.",
        "Vous commenterez ce que recouvre cet objectif."
      ],
      "vu": [
        "Bac 2025, 2e jour : dissertation sur l'impact positif des Jeux olympiques et paralympiques pour les pays hôtes",
        "Sujets « zéro » publiés par Eduscol pour l'écrit d'EPPCS : citation de Tony Estanguet sur l'objectif de Paris 2024 ; affirmation sur l'instrumentalisation politique des grands événements"
      ],
      "pts": "10 points sur 20",
      "attendu": "Une réflexion qui croise plusieurs dimensions (politique, économique, sociale, sportive, environnementale) et qui pèse les bénéfices et les risques. Le correcteur attend des exemples datés et précis (Berlin 1936, Mexico 1968, Moscou 1980, Rio 2016, Paris 2024), des notions (soft power, héritage, éléphant blanc, sportswashing), et une réponse nuancée à la question « en quoi ».",
      "etapes": [
        "Définir l'événement, le pays hôte et le mot « impact ».",
        "Problématiser : bénéfices réels ou promesses coûteuses ?",
        "Classer les arguments par dimension (image, économie, pratique, environnement).",
        "Pour chaque bénéfice, chercher sa limite ou un contre-exemple.",
        "Rédiger avec des exemples de plusieurs éditions.",
        "Conclure en montrant de quoi dépend un impact positif (héritage préparé, sites existants)."
      ],
      "mots": [
        "soft power",
        "héritage",
        "retombées touristiques",
        "éléphant blanc",
        "dette publique",
        "sportswashing",
        "plus de sport dans la vie des gens",
        "sites existants ou temporaires"
      ],
      "pieges": [
        "Ne parler que de Paris 2024.",
        "Oublier l'impact sur la pratique sportive de la population.",
        "Donner des chiffres faux ou inventés.",
        "Faire un catalogue sans problématique."
      ],
      "cas": "Sujet : « En quoi les Jeux olympiques et paralympiques ont-ils un impact positif pour les pays hôtes ? »",
      "question": "Rédige un paragraphe argumenté sur les limites de cet impact.",
      "modele": "Cependant, l'impact des Jeux n'est pas toujours positif, car leur coût dépasse souvent les prévisions et pèse sur les finances publiques. Les villes construisent des stades, des piscines et des logements dont l'usage après l'événement n'a pas toujours été prévu. Ainsi, après les Jeux d'Athènes en 2004, plusieurs sites sont restés à l'abandon : ce sont des « éléphants blancs », qui coûtent à entretenir sans servir à la population. Ces dépenses ont alourdi la dette de la Grèce. C'est pour éviter cet écueil que Paris 2024 a utilisé environ 95 % de sites existants ou temporaires.",
      "grille": [
        "Idée claire en début de paragraphe",
        "Explication avec une notion du cours",
        "Exemple daté et précis",
        "Lien avec un contre-exemple ou une solution",
        "Connecteur logique"
      ]
    },
    {
      "id": "eppcs-m3",
      "mat": "eppcs",
      "titre": "Faire des propositions d'actions à partir de documents",
      "formules": [
        "En vous appuyant sur les documents, vos connaissances et vos expériences, vous ferez et justifierez trois propositions d'actions…",
        "Vous proposerez des actions qui pourraient…"
      ],
      "vu": [
        "Bac 2025 : propositions pour encourager l'activité physique de divers publics, pour inclure les personnes en situation de handicap, pour vivre des expériences dans les métiers du sport (intitulés relevés dans la presse)",
        "Sujets « zéro » publiés par Eduscol pour l'écrit d'EPPCS : promouvoir la pratique dans le cercle de ses amis ; développer la place des femmes dans le sport"
      ],
      "pts": "10 points sur 20",
      "attendu": "Des propositions concrètes, réalistes et justifiées. Chacune doit dire quoi, pour qui, par qui, pourquoi (un problème repéré dans un document, avec une valeur chiffrée, et expliqué par une connaissance) et comment on saura si elle marche. Le correcteur valorise l'exploitation précise des documents, l'apport de connaissances et d'expériences vécues, et une rédaction organisée.",
      "etapes": [
        "Lire la consigne : combien de propositions, pour quel public ?",
        "Relever dans chaque document le problème et les chiffres clés.",
        "Chercher la cause du problème dans ses connaissances.",
        "Imaginer une action précise qui agit sur cette cause.",
        "Justifier par le document et la connaissance, puis prévoir une évaluation.",
        "Rédiger : introduction, une partie par proposition, conclusion."
      ],
      "mots": [
        "d'après le document 1",
        "on observe que",
        "ce chiffre montre",
        "public visé",
        "créneau",
        "encadrement",
        "critère d'évaluation",
        "pratique autonome",
        "sédentarité"
      ],
      "pieges": [
        "Faire des propositions vagues (« faire plus de sport »).",
        "Ne pas utiliser les chiffres des documents.",
        "Oublier le public précis fixé par la consigne.",
        "Proposer des actions irréalistes (un stade par lycée)."
      ],
      "cas": "Document : dans un lycée, 72 % des filles et 48 % des garçons de terminale ne pratiquent aucune activité en dehors de l'EPS ; la première raison donnée est le manque de temps, la deuxième le fait de ne pas aimer la compétition.",
      "question": "Rédige une proposition d'action justifiée.",
      "modele": "Je propose de créer au lycée un créneau de « sport détente » de 45 minutes pendant la pause de midi, deux fois par semaine, sans compétition : marche active, renforcement en musique, badminton libre. Il viserait d'abord les filles de terminale, puisque d'après le document, 72 % d'entre elles ne pratiquent aucune activité en dehors de l'EPS, contre 48 % des garçons. Le créneau répond aux deux raisons données : il se place dans un temps déjà libre et il supprime l'enjeu de la compétition, que beaucoup de jeunes rejettent. Il serait encadré par un professeur d'EPS et des élèves de la spécialité, dans le cadre du projet d'intervention. On mesurerait sa réussite au nombre de participantes et à leur assiduité sur un trimestre.",
      "grille": [
        "Action précise (quoi, quand, où)",
        "Public visé",
        "Chiffre du document utilisé",
        "Justification par une connaissance",
        "Moyen d'évaluation"
      ]
    },
    {
      "id": "eppcs-m4",
      "mat": "eppcs",
      "titre": "Donner son point de vue sur la technologie et le matériel",
      "formules": [
        "Vous vous appuierez sur votre expérience de pratiquant et sur les documents pour donner votre point de vue sur cette affirmation…",
        "Comment les nouvelles technologies peuvent-elles aider les sportifs à progresser ?"
      ],
      "vu": [
        "Bac 2025 : sujet au choix sur l'apport des nouvelles technologies pour faire progresser les sportifs (intitulé relevé dans la presse)",
        "Sujets « zéro » publiés par Eduscol pour l'écrit d'EPPCS : « Les équipements, leur forme, leur couleur et leur matière sont importants pour les sportifs »"
      ],
      "pts": "10 points sur 20",
      "attendu": "Un point de vue argumenté et nuancé, illustré dans plusieurs sports. Le correcteur attend l'exploitation des documents, des exemples précis d'évolutions (perche en fibre de verre, combinaisons interdites en 2010, chaussures à plaque de carbone, vidéo, capteurs), une réflexion sur l'équité et les règlements, et un lien avec sa propre pratique (outils utilisés en spécialité).",
      "etapes": [
        "Reformuler l'affirmation et donner son avis général.",
        "Relever ce que montre chaque document.",
        "Trouver des exemples dans au moins trois sports.",
        "Montrer l'intérêt (performance, sécurité, analyse) puis les limites (équité, coût, dépendance).",
        "Relier à une expérience vécue (vidéo, cardiofréquencemètre en spécialité).",
        "Conclure par un avis nuancé."
      ],
      "mots": [
        "innovation",
        "équité",
        "dopage technologique",
        "règlement",
        "biomécanique",
        "vidéo au ralenti",
        "indicateur",
        "cardiofréquencemètre"
      ],
      "pieges": [
        "Ne donner que des exemples d'un seul sport.",
        "Oublier son expérience de pratiquant demandée par la consigne.",
        "Ne pas parler du règlement qui encadre le matériel."
      ],
      "cas": "Document : en 2008-2009, des combinaisons en polyuréthane ont permis de battre des dizaines de records du monde de natation ; elles ont été interdites en 2010.",
      "question": "Rédige un paragraphe qui exploite ce document pour nuancer l'intérêt des innovations.",
      "modele": "Les innovations matérielles améliorent la performance, mais elles peuvent fausser la compétition. Le document montre qu'en 2008 et 2009 les combinaisons en polyuréthane, qui réduisaient la traînée et augmentaient la flottaison, ont permis de battre des dizaines de records du monde de natation. La performance dépendait alors davantage du matériel que du nageur, ce qui pose un problème d'équité entre athlètes et entre époques. C'est pourquoi la fédération internationale les a interdites en 2010 : le règlement fixe les limites de l'innovation. De la même façon, l'athlétisme encadre aujourd'hui l'épaisseur des semelles des chaussures à plaque de carbone.",
      "grille": [
        "Idée nuancée",
        "Valeur ou fait tiré du document",
        "Explication biomécanique (traînée)",
        "Notion d'équité et rôle du règlement",
        "Second exemple dans un autre sport"
      ]
    },
    {
      "id": "eppcs-m5",
      "mat": "eppcs",
      "titre": "L'oral : commenter la vidéo de sa prestation",
      "formules": [
        "Présentez et analysez votre prestation filmée.",
        "Qu'avez-vous amélioré au cours de la séquence ?",
        "Quels indicateurs avez-vous retenus ? Pourquoi ?"
      ],
      "vu": [
        "Définition officielle de l'épreuve (note de service du 24 mars 2022, version consolidée de mai 2024) : vidéo de 1 à 3 minutes, exposé de 5 à 7 minutes, questions du jury, 8 points"
      ],
      "pts": "8 points sur 20 à l'épreuve pratique-orale",
      "attendu": "Un regard réflexif sur sa propre pratique, éclairé par des connaissances. Le jury attend que le candidat situe sa prestation (Apsa, conditions, objectif), la commente avec des indicateurs pertinents, explique ses réussites et ses erreurs par des principes d'efficacité (biomécaniques, énergétiques, tactiques), dise ce qu'il a fait pour progresser et ce qu'il lui reste à travailler, puis approfondisse ses réponses lors des questions, en lien avec sa culture sportive.",
      "etapes": [
        "Présenter l'Apsa, les conditions (fiche de synthèse) et l'objectif de la séquence filmée.",
        "Choisir deux ou trois indicateurs et donner leurs valeurs.",
        "Montrer des moments précis de la vidéo.",
        "Expliquer chaque point fort et point faible par une connaissance.",
        "Présenter ses progrès et une piste d'amélioration précise.",
        "Garder du temps pour les questions et développer ses réponses."
      ],
      "mots": [
        "indicateur",
        "conditions de réalisation",
        "principe d'efficacité",
        "centre de gravité",
        "chaîne cinétique",
        "filière énergétique",
        "rapport de force",
        "piste d'amélioration"
      ],
      "pieges": [
        "Décrire la vidéo sans l'analyser.",
        "Dépasser 7 minutes d'exposé.",
        "Ne citer aucun chiffre ni indicateur.",
        "Répondre aux questions en un mot."
      ],
      "cas": "Vidéo de 2 minutes : trois sauts en longueur. Meilleur saut : 4,62 m. Sur les deux premiers, la planche d'appel est mordue ou ratée de 30 cm ; la course d'élan est irrégulière.",
      "question": "Rédige le passage de l'exposé qui analyse ces sauts.",
      "modele": "Sur les deux premiers sauts, on voit à 0 min 20 et à 0 min 50 que je mords la planche puis que je prends mon appel 30 cm avant : ma course d'élan n'est pas régulière, donc je perds soit le saut, soit de la distance. J'ai alors raccourci mon élan à 14 foulées, repéré par une marque au sol. Au troisième saut, à 1 min 30, mon appel tombe sur la planche et je saute 4,62 m. Mais ma trajectoire reste basse : je reste penché en avant au moment de l'appel. Or la longueur du saut dépend de la vitesse, mais aussi de l'angle d'envol, qui devrait être proche de 20°. Ma piste de progrès est donc de travailler un appel plus actif, genou libre monté, avec des sauts sur cinq foulées et un critère simple : toucher un repère placé en hauteur.",
      "grille": [
        "Moments précis de la vidéo",
        "Indicateurs chiffrés",
        "Explication par une connaissance (trajectoire, angle)",
        "Progrès réalisé",
        "Piste d'amélioration précise"
      ]
    }
  ],
  sujets: [
    {
      id: "eppcs-s1", matiere: 'eppcs', titre: "Sujet d'entraînement 1 : sports de nature et santé des lycéens", duree: 210,
      enonce: `## Sujet d'entraînement 1 (inventé, au format de l'écrit)

Ce sujet est inventé pour s'entraîner : les documents et les chiffres ont été écrits pour cet exercice. Durée : 3 h 30. L'épreuve est notée sur 20 : première partie sur 10 points, deuxième partie sur 10 points.

### Première partie : dissertation (10 points)

Thématique : **les enjeux de la pratique physique dans le monde contemporain**.

**Sujet** : « Les sports de nature peuvent-ils se développer sans menacer l'environnement ? »

Vous répondrez à cette question dans une dissertation organisée, en vous appuyant sur vos connaissances et sur votre expérience de pratiquant.

### Deuxième partie : sujet au choix (10 points)

Vous traiterez **un seul** des deux sujets suivants.

#### Sujet A : pratique physique et santé

**Question** : en vous appuyant sur les trois documents, sur vos connaissances et sur votre expérience, vous ferez et justifierez **trois propositions d'actions** pour aider les élèves de votre lycée à atteindre les recommandations d'activité physique.

**Document 1 : enquête dans un lycée de 900 élèves (inventée)**

- Élèves qui atteignent 60 minutes d'activité physique par jour : 31 % des garçons, 14 % des filles.
- Temps moyen passé assis en dehors des cours, un jour de semaine : 5 h 10.
- Élèves inscrits à l'association sportive : 12 %.

**Document 2 : raisons données par les élèves qui ne pratiquent pas en dehors de l'EPS (inventé)**

- Manque de temps : 46 %.
- « Je n'aime pas la compétition » : 31 %.
- Coût d'une licence en club : 18 %.
- Peur du regard des autres : 17 % (29 % chez les filles).

Plusieurs réponses étaient possibles.

**Document 3 : témoignage (inventé)**

« Au collège, je faisais du hand en club. En seconde, avec le bus et les devoirs, j'ai arrêté. Maintenant je marche un peu, mais je passe mes soirées sur mon téléphone. Si on pouvait bouger au lycée, entre midi et deux, sans que ce soit un match, j'irais. » Inès, 17 ans, terminale.

#### Sujet B : technologie des Apsa

**Question** : « Les outils numériques ont rendu l'entraînement plus efficace. » En vous appuyant sur les deux documents et sur votre expérience de pratiquant, vous donnerez votre point de vue sur cette affirmation, en l'illustrant dans plusieurs Apsa.

**Document 1 : un club de demi-fond (inventé)**

Pendant une saison, un club équipe ses 20 coureurs d'une montre qui mesure la fréquence cardiaque et la vitesse. Les séances sont construites en pourcentage de la VMA de chacun. Résultat : 15 coureurs sur 20 améliorent leur record sur 1 500 m ; 3 coureurs se blessent en voulant « battre leurs chiffres » à chaque sortie.

**Document 2 : témoignage d'un entraîneur de badminton (inventé)**

« Avec la tablette, je filme un échange et l'élève se revoit dix secondes plus tard. Il comprend tout de suite que son replacement au centre est trop lent. Mais si je lui montre vingt statistiques, il ne retient rien. »`,
      corrige: `## Corrigé

### Première partie : dissertation

**Introduction possible.** Chaque été, des milliers de randonneurs se pressent dans les calanques de Marseille, au point que l'accès à certaines criques est désormais limité par réservation. Les **sports de nature** (activités physiques de pleine nature : randonnée, trail, VTT, escalade, kayak, ski) attirent de plus en plus de pratiquants en quête d'aventure, de santé et de liberté. Leur **développement** désigne la hausse du nombre de pratiquants, d'événements et d'aménagements. Or l'**environnement** naturel (paysages, sols, faune, flore) est fragile. **Problématique** : le succès des sports de nature, qui se nourrit de l'envie de nature, menace-t-il ce qu'il recherche, ou peut-on concilier pratique et protection ? Nous verrons d'abord que leur essor a des effets réels sur les milieux, puis que ces effets dépendent des conditions de pratique, enfin à quelles conditions un développement durable est possible.

**I. Un essor qui pèse sur les milieux naturels.**
- Piétinement et érosion des sentiers, VTT hors des chemins.
- Dérangement de la faune : ski hors-piste et tétras-lyre, escalade et oiseaux nicheurs.
- Aménagements lourds : remontées mécaniques, neige de culture (eau, énergie), parkings.
- Transports des pratiquants et des spectateurs : première source d'émissions du sport ; grands événements (trails de milliers de coureurs).

**II. Un impact qui dépend de la manière de pratiquer.**
- L'impact varie avec la fréquentation, le lieu, la période et le comportement : une sortie en petit groupe, sur sentier, hors de la période de nidification, a un effet faible.
- Des pratiques douces (marche, vélo, voile, kayak) laissent peu de traces.
- Les pratiquants peuvent devenir des sentinelles : ramassage de déchets, signalement de pollutions, sciences participatives.
- Le sport lui-même subit le changement climatique (manque de neige, glaciers qui fondent) : il a intérêt à protéger les milieux.

**III. Les conditions d'un développement compatible avec la protection.**
- Réglementer : parcs nationaux, sites Natura 2000, quotas (calanques), interdictions temporaires.
- Aménager et canaliser : sentiers balisés, parkings éloignés.
- Organiser des événements écoresponsables : covoiturage, gobelets réutilisables, nombre de participants limité, dates adaptées ; charte des engagements écoresponsables.
- Éduquer : codes de bonne conduite, formation des éducateurs, rôle de l'EPS (sortie de course d'orientation vécue en spécialité, avec consignes de respect du milieu).

**Conclusion.** Les sports de nature ne peuvent pas se développer sans aucun effet sur l'environnement, mais leur impact peut être fortement réduit s'ils sont encadrés, organisés autrement et pratiqués de façon responsable. Ouverture : la même question se pose pour les grands événements sportifs, comme l'ont montré les choix de Paris 2024.

### Deuxième partie, sujet A

**Introduction.** Les recommandations demandent au moins 60 minutes d'activité par jour aux jeunes. Or, d'après le document 1, seuls 31 % des garçons et 14 % des filles du lycée les atteignent, et les élèves passent plus de 5 heures assis en dehors des cours. Trois propositions peuvent agir sur les causes repérées.

**Proposition 1 : des créneaux de pratique sans compétition à la pause de midi.** Deux fois par semaine, 45 minutes de marche active, de renforcement en musique ou de badminton libre, encadrées par un professeur d'EPS et des élèves de la spécialité. Justification : le manque de temps (46 %) et le rejet de la compétition (31 %) sont les deux premières raisons (document 2) ; Inès le demande explicitement (document 3). Évaluation : nombre de participants et assiduité sur un trimestre.

**Proposition 2 : un groupe réservé aux filles, choisi avec elles.** Un créneau de danse, de fitness ou de sport collectif entre filles, dont l'activité est choisie par un vote. Justification : les filles sont deux fois moins nombreuses à atteindre les recommandations (14 % contre 31 %) et 29 % d'entre elles citent la peur du regard des autres ; un cadre rassurant lève ce frein. Connaissance : stéréotypes et abandon à l'adolescence. Évaluation : part des filles qui atteignent les 60 minutes l'année suivante.

**Proposition 3 : réduire le temps assis.** Des pauses actives de trois minutes en classe toutes les heures, et un défi « venir à pied ou à vélo » avec un classement par classe. Justification : 5 h 10 assis après les cours (document 1) ; la sédentarité est un risque distinct de l'inactivité. Évaluation : questionnaire avant et après.

On peut aussi mieux faire connaître l'association sportive, peu coûteuse, puisque seuls 12 % des élèves y sont inscrits alors que 18 % citent le coût d'une licence en club.

**Conclusion.** Ces actions répondent aux causes du document 2 plutôt que d'imposer plus de sport : elles placent l'activité dans le temps du lycée, sans enjeu de compétition, avec une attention particulière aux filles.

### Deuxième partie, sujet B

**Point de vue attendu (nuancé).** Les outils numériques rendent l'entraînement plus efficace quand ils fournissent un retour précis et utile, mais ils ne remplacent ni l'entraîneur ni l'écoute de ses sensations.

**Arguments favorables.**
- Une charge mieux dosée : en demi-fond, les séances en pourcentage de la VMA et le suivi de la fréquence cardiaque ont permis à 15 coureurs sur 20 de battre leur record (document 1).
- Un retour immédiat : la vidéo différée en badminton fait comprendre tout de suite un défaut de replacement (document 2) ; même usage en gymnastique, en saut ou en lancer, avec le ralenti.
- Des analyses précises : statistiques de match en sports collectifs, mesure d'angles en biomécanique, applications de chronométrage. Expérience vécue : la vidéo de l'épreuve orale, le cardiofréquencemètre en course.

**Limites.**
- Le risque de dépendance aux chiffres et de blessure : 3 coureurs sur 20 se blessent en voulant battre leurs chiffres (document 1).
- La surcharge d'information : vingt statistiques n'apprennent rien (document 2) ; il faut choisir quelques indicateurs pertinents.
- Le coût et l'inégalité d'accès aux outils, la question de l'équité en compétition.

**Conclusion.** Le numérique est un outil au service de l'analyse, efficace s'il est bien choisi et accompagné.`,
      grille: [{"c":"Dissertation : introduction (accroche, définitions, problématique, annonce du plan)","pts":2},{"c":"Dissertation : plan organisé qui répond à la problématique, conclusion qui tranche","pts":2},{"c":"Dissertation : connaissances précises (impacts, réglementation, Natura 2000, transports, changement climatique)","pts":3},{"c":"Dissertation : exemples variés et lien avec sa pratique, réflexion nuancée","pts":2},{"c":"Dissertation : expression claire","pts":1},{"c":"Sujet au choix : exploitation précise des documents (valeurs citées, comparaisons)","pts":3},{"c":"Sujet au choix : connaissances mobilisées (recommandations, sédentarité, stéréotypes ou indicateurs, VMA, équité)","pts":2},{"c":"Sujet au choix : propositions concrètes et justifiées, ou point de vue argumenté et nuancé dans plusieurs Apsa","pts":4},{"c":"Sujet au choix : organisation et expression","pts":1}],
    },
  ],
};
