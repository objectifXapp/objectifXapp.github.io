// Ingénierie, innovation et développement durable (2I2D), tronc commun — terminale STI2D. Sources : voir matiere.sources.
// Programme : annexe IT, I2D et 2I2D du cycle terminal STI2D (parties 1 à 6 : conception et développement durable,
// approche fonctionnelle et structurelle, approche comportementale mécanique, énergétique et informationnelle,
// éco-conception, solutions constructives, prototypage). Seul le tronc commun est traité ici ; les enseignements
// spécifiques AC, EE, ITEC et SIN ont leurs propres fichiers.
// Épreuve à partir de la session 2027 (note de service du 11 septembre 2026, BO spécial n° 4 du 17 septembre 2026) :
// partie écrite de 3 h 30 (sur 20, coefficient 9) et partie pratique de 2 h (sur 20, coefficient 7).
// L'écrit a deux parties indépendantes : analyse d'un produit pluritechnologique (matière, énergie, information),
// puis un exercice propre à l'enseignement spécifique. Deux points sur vingt portent sur la maîtrise de la langue.
// Dans les sujets récents, la partie commune vaut 12 points sur 20 et la partie spécifique 8 points.

export default {
  matiere: {
    id: 'sti2d-2i2d',
    nom: 'Ingénierie, innovation et développement durable (tronc commun)',
    voie: 'sti2d',
    epreuve: { type: 'ecrit', duree: 210, coef: 16, quand: 'juin', note: 'Écrit de 3 h 30 (coefficient 9) : une partie commune sur un produit pluritechnologique (matière, énergie, information), environ 12 points sur 20, puis une partie propre à l\'enseignement spécifique, environ 8 points ; 2 points pour la maîtrise de la langue. S\'y ajoute une partie pratique de 2 h en laboratoire (coefficient 7).' },
    sources: [
      'https://www.education.gouv.fr/sites/default/files/document/bulletin-officiel-special-ndeg-4-du-17-septembre-2026-521113.pdf',
      'https://www.education.gouv.fr/bo/2026/Hebdo38/MENE2624111N',
      'https://www.snes.edu/wp-content/uploads/sti2d_annexe-1_it_i2d_2i2d_bo.pdf',
      'https://www.sujetdebac.fr/annales-pdf/2025/sti2d-spe-ingenierie-innov-dev-durable-2025-metropole-sujet-officiel.pdf',
      'https://www.freemaths.fr/sujets-du-bac/baccalaureat-technologique/sti2d/2i2d-energies-environnement/annees/annee-2024/polynesie/sujet-1-et-correction/bac-2i2d-energies-environnement-polynesie-2024-voie-technologique-sti2d-sujet-1.pdf',
    ],
    chapitres: [
      { id: 'sti2d-2i2d-1', t: 'Développement durable et analyse du cycle de vie', theme: 'Conception et développement durable' },
      { id: 'sti2d-2i2d-2', t: 'Démarche de projet, cahier des charges et SysML', theme: 'Conception et développement durable' },
      { id: 'sti2d-2i2d-3', t: 'Approche fonctionnelle : chaînes de puissance et d\'information', theme: 'Conception et développement durable' },
      { id: 'sti2d-2i2d-4', t: 'Modéliser et simuler : modèles, solveurs et écarts', theme: 'Comportement des produits' },
      { id: 'sti2d-2i2d-5', t: 'Mouvements, liaisons et transmissions', theme: 'Matière' },
      { id: 'sti2d-2i2d-6', t: 'Statique, stabilité et transmission des efforts', theme: 'Matière' },
      { id: 'sti2d-2i2d-7', t: 'Résistance des matériaux et choix des matériaux', theme: 'Matière' },
      { id: 'sti2d-2i2d-8', t: 'Énergie : bilans, rendements et point de fonctionnement', theme: 'Énergie' },
      { id: 'sti2d-2i2d-9', t: 'Stockage, conversion et réseaux d\'énergie', theme: 'Énergie' },
      { id: 'sti2d-2i2d-10', t: 'Nature et codage de l\'information', theme: 'Information' },
      { id: 'sti2d-2i2d-11', t: 'Communication et réseaux', theme: 'Information' },
      { id: 'sti2d-2i2d-12', t: 'Systèmes régulés et asservis', theme: 'Information' },
    ],
  },
  paquets: [
    { chapitre: 'sti2d-2i2d-1',
      fiche: `## Développement durable et analyse du cycle de vie

Presque tous les sujets commencent par une question d'enjeu : pourquoi ce produit ou ce projet est-il utile pour l'environnement, la société ou l'économie ? Il faut savoir répondre avec des chiffres.

### Les trois piliers du développement durable
- **Environnemental** : limiter les émissions de gaz à effet de serre, la consommation de ressources, les déchets et les pollutions.
- **Social** : sécurité, santé, confort des usagers, emplois locaux, accès au service.
- **Économique** : coût d'achat, coût d'usage, rentabilité, durée de vie.
- Un bon projet cherche l'équilibre des trois. Un produit très écologique mais trop cher ne sera pas adopté.

### Le cycle de vie d'un produit
- Cinq grandes étapes : **extraction des matières premières**, **fabrication**, **transport** (distribution), **utilisation**, **fin de vie** (recyclage, valorisation, mise en décharge).
- L'**analyse du cycle de vie** (ACV) mesure les impacts environnementaux à chaque étape : émissions de CO2, énergie consommée, eau, épuisement des ressources.
- Elle permet de repérer l'**étape la plus impactante**, sur laquelle il faut agir en priorité. Pour un véhicule thermique, c'est l'utilisation ; pour un smartphone, c'est la fabrication.
- L'ACV sert aussi à **comparer deux solutions** de manière juste, sur toute leur vie.

### Les indicateurs à calculer
- **Énergie produite avec un facteur de charge** : E = puissance nominale × durée × facteur de charge. Une éolienne de 2 MW avec un facteur de charge de 0,25 produit sur un an (8 760 h) : 2 × 8 760 × 0,25 = 4 380 MWh.
- **Nombre de foyers alimentés** : énergie produite / consommation d'un foyer. 4 380 MWh / 3,2 MWh par foyer ≈ 1 368 foyers.
- **Émissions de CO2** : énergie × facteur d'émission. 1 000 kWh à 0,06 kg de CO2 par kWh donnent 60 kg de CO2.
- **Temps de retour sur investissement** : coût de l'investissement / économie ou gain annuel. 12 000 € investis pour 1 500 € gagnés par an : 8 ans.
- **Temps de retour énergétique** : énergie nécessaire pour fabriquer le produit / énergie qu'il produit ou économise par an.

### Les leviers de l'éco-conception
- Choisir des **matériaux recyclés ou recyclables**, réduire la quantité de matière, éviter les matériaux mélangés difficiles à séparer.
- Réduire la **consommation en utilisation** (meilleur rendement, mise en veille, récupération d'énergie).
- Allonger la **durée de vie** : réparabilité, pièces standard, mise à jour logicielle.
- Produire **localement** pour réduire le transport.
- Penser la **fin de vie** dès la conception : démontage facile, filières de recyclage.
- L'**économie circulaire** cherche à réutiliser, réparer et recycler au lieu de jeter.

### À retenir pour le bac
- Les trois piliers : environnemental, social, économique.
- Les cinq étapes du cycle de vie et le rôle de l'ACV : trouver l'étape la plus impactante.
- Énergie = puissance × durée × facteur de charge ; temps de retour = investissement / gain annuel.
- Toujours conclure sur l'enjeu avec un chiffre calculé.
- Piège : 1 MWh = 1 000 kWh, et une année compte 8 760 heures.`,
      cartes: [
        { q: "Les trois piliers du développement durable ?", r: "Environnemental, social et économique." },
        { q: "Les cinq étapes du cycle de vie ?", r: "Extraction des matières premières, fabrication, transport, utilisation, fin de vie." },
        { q: "À quoi sert une analyse du cycle de vie ?", r: "Mesurer les impacts environnementaux à chaque étape, trouver la plus impactante et comparer des solutions." },
        { q: "Étape la plus impactante d'une voiture thermique ?", r: "L'utilisation, à cause du carburant brûlé." },
        { q: "Étape la plus impactante d'un smartphone ?", r: "La fabrication (extraction des métaux, composants électroniques)." },
        { q: "Qu'est-ce que le facteur de charge ?", r: "Énergie réellement produite / énergie produite à puissance nominale pendant la même durée." },
        { q: "Énergie produite avec un facteur de charge ?", r: "E = puissance nominale × durée × facteur de charge." },
        { q: "Combien d'heures dans une année ?", r: "8 760 h (365 × 24)." },
        { q: "Calcul des émissions de CO2 ?", r: "Énergie consommée × facteur d'émission (en kg de CO2 par kWh)." },
        { q: "Temps de retour sur investissement ?", r: "Coût de l'investissement / gain ou économie annuel." },
        { q: "Temps de retour énergétique ?", r: "Énergie pour fabriquer le produit / énergie produite ou économisée chaque année." },
        { q: "Trois leviers d'éco-conception ?", r: "Moins de matière ou des matériaux recyclables, moins de consommation en usage, durée de vie plus longue." },
        { q: "Qu'est-ce que l'économie circulaire ?", r: "Réutiliser, réparer et recycler au lieu de produire, consommer puis jeter." },
      ],
      quiz: [
        { q: "Les trois piliers du développement durable sont :", choix: ["matière, énergie, information", "environnemental, social, économique", "conception, fabrication, recyclage et réemploi", "coût, délai, qualité"], bonne: 1, expl: "Matière, énergie, information sont les trois champs de l'ingénierie, pas les piliers.", niv: 1 },
        { q: "Éolienne de 2 MW, facteur de charge 0,25, sur un an (8 760 h). Énergie produite ?", choix: ["35 040 MWh", "17 520 MWh", "4 380 MWh", "8 760 MWh"], bonne: 2, expl: "2 × 8 760 × 0,25 = 4 380 MWh. 17 520 MWh oublie le facteur de charge.", niv: 2 },
        { q: "Un foyer consomme 3,2 MWh par an. Combien de foyers 4 380 MWh alimentent-ils, environ ?", choix: ["4 380", "14 000", "137", "1 370"], bonne: 3, expl: "4 380 / 3,2 ≈ 1 369 foyers.", niv: 2 },
        { q: "L'analyse du cycle de vie sert d'abord à :", choix: ["repérer l'étape la plus impactante du produit", "fixer le prix de vente du produit", "dessiner le produit en 3D", "choisir le fournisseur le plus proche"], bonne: 0, expl: "On agit en priorité sur l'étape qui pèse le plus.", niv: 1 },
        { q: "Une pompe à chaleur coûte 12 000 € et fait gagner 1 500 € par an. Temps de retour ?", choix: ["18 ans", "1,25 an", "8 ans", "80 ans"], bonne: 2, expl: "12 000 / 1 500 = 8 ans.", niv: 2 },
        { q: "Pour un smartphone, quelle étape du cycle de vie pèse le plus sur le climat ?", choix: ["la fabrication", "l'utilisation", "le transport", "la fin de vie"], bonne: 0, expl: "L'extraction des métaux et la fabrication des composants dominent ; garder son téléphone plus longtemps est le meilleur levier.", niv: 3 },
        { q: "La dernière étape du cycle de vie d'un produit est :", choix: ["l'utilisation", "la fin de vie", "la distribution", "la conception"], bonne: 1, expl: "Recyclage, valorisation ou mise en décharge.", niv: 1 },
        { q: "1 000 kWh consommés avec un facteur d'émission de 0,06 kg de CO2 par kWh. Émissions ?", choix: ["16 667 kg de CO2", "600 kg de CO2", "6 000 kg de CO2", "60 kg de CO2"], bonne: 3, expl: "1 000 × 0,06 = 60 kg de CO2.", niv: 2 },
        { q: "Deux chaises ont le même usage. Pour comparer leur impact de façon juste, il faut :", choix: ["comparer leur distance de transport", "comparer leur masse", "comparer leur prix de vente", "comparer leurs impacts sur tout le cycle de vie"], bonne: 3, expl: "Une solution légère peut être pire si elle dure deux fois moins longtemps.", niv: 3 },
        { q: "Quel choix relève de l'éco-conception ?", choix: ["Coller des matériaux différents entre eux", "Assembler par vis pour faciliter le démontage", "Ajouter une couche de peinture décorative", "Augmenter l'épaisseur des pièces par précaution"], bonne: 1, expl: "Le démontage facile permet de réparer et de trier les matériaux en fin de vie.", niv: 2 },
        { q: "Le facteur de charge d'une centrale est :", choix: ["énergie produite / énergie à puissance nominale", "puissance nominale × durée", "énergie consommée / énergie produite", "coût / énergie produite"], bonne: 0, expl: "Pour une éolienne terrestre, il est souvent autour de 0,2 à 0,3.", niv: 1 },
        { q: "Un panneau demande 1 200 kWh pour être fabriqué et produit 300 kWh par an. Temps de retour énergétique ?", choix: ["40 ans", "0,25 an", "4 ans", "1 500 ans"], bonne: 2, expl: "1 200 / 300 = 4 ans : ensuite, toute l'énergie produite est un gain.", niv: 3 },
      ] },
    { chapitre: 'sti2d-2i2d-2',
      fiche: `## Démarche de projet, cahier des charges et SysML

### La démarche de projet
- Un projet part d'un **besoin** : à qui le produit rend-il service, sur quoi agit-il, dans quel but ?
- Étapes : analyse du besoin, rédaction du **cahier des charges**, recherche de solutions (créativité), choix argumenté, conception détaillée, **prototypage**, essais, validation.
- En terminale, le projet est mené en équipe : planning, répartition des tâches, revues de projet.
- L'**innovation** peut être une amélioration (innovation incrémentale, par exemple un meilleur rendement) ou une rupture (un principe nouveau).

### Le cahier des charges
- Il traduit le besoin en **exigences** mesurables : chaque exigence a un **critère**, un **niveau** (valeur chiffrée) et parfois une **flexibilité** (tolérance).
- Exemple : « Le portail s'ouvre en moins de 20 s » ; critère : durée d'ouverture ; niveau : 20 s au plus.
- Les exigences portent sur les performances, mais aussi la sécurité, l'environnement, le coût, l'ergonomie, les normes.

### Le langage SysML
- **Diagramme des cas d'utilisation** : qui utilise le système (les **acteurs**) et pour quoi faire.
- **Diagramme des exigences** : les exigences, numérotées, avec leurs liens (une exigence en contient d'autres, une exigence est satisfaite par un composant).
- **Diagramme de définition de blocs** (bdd) : la composition du système, du général au détail.
- **Diagramme de blocs internes** (ibd) : les liaisons entre les blocs et les **flux** qui circulent : matière, énergie, information.
- **Diagramme de séquence** : les messages échangés entre l'utilisateur et le système dans l'ordre du temps.
- **Diagramme d'états** : les états du système (veille, marche, défaut) et les événements qui font passer de l'un à l'autre.

### Valider une solution
- On compare trois valeurs : la **performance attendue** (cahier des charges), la **performance mesurée** (sur le réel ou un prototype) et la **performance simulée** (modèle numérique).
- **Écart relatif** = (différence entre les deux valeurs, prise positive) / valeur de référence. Exemple : 20 s attendues, 22 s mesurées : 2 / 20 = 10 %.
- Si l'écart avec l'exigence est défavorable, la solution doit être modifiée. Si l'écart entre le modèle et le réel est grand, le modèle doit être amélioré.

### Comparer des solutions
- On utilise une **matrice de décision** : des critères pondérés (coût, masse, impact environnemental, encombrement), une note par solution, puis un total.
- Exemple : critère coût (poids 3), note 4 sur 5 : 12 points. La solution qui a le plus grand total est retenue, mais il faut vérifier qu'elle respecte toutes les exigences éliminatoires.

### À retenir pour le bac
- Une exigence = un critère, un niveau chiffré, parfois une flexibilité.
- Savoir lire les diagrammes SysML : cas d'utilisation, exigences, bdd, ibd, séquence, états.
- Comparer attendu, mesuré et simulé, puis conclure.
- Matrice de décision : note × poids, puis total.
- Piège : toujours citer l'exigence chiffrée dans la conclusion.`,
      cartes: [
        { q: "Les trois éléments d'une exigence ?", r: "Un critère, un niveau chiffré et parfois une flexibilité (tolérance)." },
        { q: "Diagramme des cas d'utilisation ?", r: "Il montre les acteurs et les services que le système leur rend." },
        { q: "Diagramme des exigences ?", r: "Il liste les exigences numérotées et leurs liens." },
        { q: "Diagramme de définition de blocs (bdd) ?", r: "Il décrit la composition du système en blocs et sous-blocs." },
        { q: "Diagramme de blocs internes (ibd) ?", r: "Il montre les liaisons entre les blocs et les flux de matière, d'énergie et d'information." },
        { q: "Diagramme de séquence ?", r: "Il montre les messages échangés entre acteurs et système, dans l'ordre du temps." },
        { q: "Diagramme d'états ?", r: "Il montre les états du système et les événements qui font passer de l'un à l'autre." },
        { q: "Les trois performances à comparer ?", r: "Attendue (cahier des charges), mesurée (réel), simulée (modèle)." },
        { q: "Formule de l'écart relatif ?", r: "Différence entre les deux valeurs, prise positive, divisée par la valeur de référence." },
        { q: "Que faire si le modèle s'éloigne du réel ?", r: "Améliorer le modèle : ajouter des frottements, recaler un paramètre, revoir une hypothèse." },
        { q: "Qu'est-ce qu'une matrice de décision ?", r: "Un tableau de critères pondérés où chaque solution reçoit une note ; on retient le meilleur total." },
        { q: "Innovation incrémentale ou de rupture ?", r: "Incrémentale : amélioration d'un produit existant. Rupture : un principe nouveau." },
        { q: "Les grandes étapes d'un projet ?", r: "Besoin, cahier des charges, recherche de solutions, choix, conception, prototype, essais, validation." },
      ],
      quiz: [
        { q: "Dans un cahier des charges, une exigence doit comporter :", choix: ["un critère et un niveau chiffré", "un dessin du produit", "le nom du fournisseur", "le prix détaillé de chaque composant choisi"], bonne: 0, expl: "Sans niveau chiffré, on ne peut pas vérifier l'exigence.", niv: 1 },
        { q: "Durée d'ouverture exigée : 20 s. Durée mesurée : 22 s. Écart relatif par rapport à l'exigence ?", choix: ["9,1 %", "2 %", "10 %", "22 %"], bonne: 2, expl: "(22 - 20) / 20 = 0,1 = 10 %. 9,1 % prend la mesure comme référence.", niv: 2 },
        { q: "Quel diagramme SysML montre les flux d'énergie et d'information entre les blocs ?", choix: ["le diagramme des cas d'utilisation", "le diagramme de blocs internes", "le diagramme des exigences", "le diagramme de définition de blocs"], bonne: 1, expl: "Le bdd montre la composition ; l'ibd montre les liaisons et les flux.", niv: 2 },
        { q: "Dans un diagramme des cas d'utilisation, un acteur est :", choix: ["un état du système", "un composant interne du produit", "une exigence de sécurité", "une personne ou un système qui utilise le produit"], bonne: 3, expl: "Exemple : l'usager, le technicien de maintenance.", niv: 1 },
        { q: "Quel diagramme montre le passage de « veille » à « marche » après un appui sur un bouton ?", choix: ["le diagramme des exigences", "le diagramme d'états", "le diagramme de définition de blocs", "le diagramme des cas d'utilisation"], bonne: 1, expl: "Les états et les événements qui les relient.", niv: 2 },
        { q: "Le modèle prévoit 18 s, l'essai réel donne 22 s, l'exigence est 20 s au plus. Que conclure ?", choix: ["L'exigence n'est pas respectée et le modèle est à améliorer", "L'exigence est respectée car le modèle donne 18 s", "Le modèle est parfait, l'essai est faux", "L'exigence est respectée avec une marge de 2 s"], bonne: 0, expl: "On conclut sur le réel : 22 s dépasse 20 s. L'écart modèle-réel montre que le modèle oublie quelque chose.", niv: 3 },
        { q: "Le diagramme de définition de blocs décrit :", choix: ["les états du système", "l'ordre des messages dans le temps", "les acteurs du système", "la composition du système"], bonne: 3, expl: "Du système complet jusqu'à ses composants.", niv: 1 },
        { q: "Matrice de décision : critère coût de poids 3, la solution A a la note 4. Points obtenus ?", choix: ["1,33", "7", "12", "0,75"], bonne: 2, expl: "Note × poids = 4 × 3 = 12.", niv: 2 },
        { q: "Une solution a le meilleur total dans la matrice de décision, mais ne respecte pas une exigence de sécurité. Que faire ?", choix: ["Supprimer l'exigence de sécurité", "La retenir car son total est le meilleur", "L'écarter ou la modifier", "Baisser le poids du critère sécurité"], bonne: 2, expl: "Une exigence éliminatoire passe avant le classement.", niv: 3 },
        { q: "Pour décrire les échanges entre l'usager et une borne de recharge au fil du temps, on utilise :", choix: ["une matrice de décision", "un diagramme de définition de blocs", "un diagramme des exigences", "un diagramme de séquence"], bonne: 3, expl: "Le diagramme de séquence montre les messages dans l'ordre chronologique.", niv: 2 },
        { q: "Remplacer les ampoules à incandescence par des LED est une innovation :", choix: ["de rupture", "incrémentale", "sociale", "réglementaire"], bonne: 1, expl: "La fonction reste la même ; la technologie s'améliore. Selon l'angle choisi, on peut aussi la voir comme un changement de technologie.", niv: 1 },
        { q: "Dans un essai, l'écart entre le modèle et le réel atteint 25 %. Quelle est la bonne réaction ?", choix: ["Revoir les hypothèses du modèle, par exemple les frottements négligés", "Garder le modèle pour dimensionner le produit", "Refaire l'essai jusqu'à trouver la valeur du modèle", "Arrondir les résultats pour réduire l'écart"], bonne: 0, expl: "Un modèle trop éloigné du réel ne peut pas servir à prévoir.", niv: 3 },
      ] },
    { chapitre: 'sti2d-2i2d-3',
      fiche: `## Approche fonctionnelle : chaînes de puissance et d'information

### Matière, énergie, information
- Tout produit transforme ou transporte trois flux : la **matière** (l'objet sur lequel il agit, sa structure), l'**énergie** et l'**information**.
- Les sujets de bac demandent souvent de repérer ces flux sur un schéma, puis de les suivre d'un bout à l'autre.

### La chaîne de puissance (ou chaîne d'énergie)
- Elle agit sur la matière d'œuvre. Quatre fonctions dans l'ordre :
- **Alimenter** : fournir l'énergie (réseau, batterie, panneau solaire, réservoir).
- **Distribuer** : doser l'énergie selon les ordres (contacteur, relais, variateur, hacheur, onduleur, distributeur pneumatique).
- **Convertir** : changer la forme de l'énergie (moteur électrique, vérin, résistance chauffante, alternateur).
- **Transmettre** : adapter et amener l'énergie mécanique jusqu'à l'effecteur (réducteur, courroie, vis-écrou, engrenages).
- L'**effecteur** agit enfin sur la matière (roue, pince, pale, tambour).

### La chaîne d'information
- Elle pilote la chaîne de puissance. Fonctions :
- **Acquérir** : capteurs et interfaces homme-machine (bouton, écran tactile).
- **Traiter** : microcontrôleur, automate, ordinateur, qui exécute le programme.
- **Communiquer** : envoyer des ordres à la chaîne de puissance et des informations à l'utilisateur ou à un autre système (écran, voyant, wifi, liaison série).
- Les **ordres** vont de la chaîne d'information vers la fonction distribuer.

### Les formes d'énergie
- Électrique, mécanique (de translation ou de rotation), thermique, chimique (batterie, carburant), rayonnante (lumière), hydraulique et pneumatique (fluide sous pression).
- Exemple, une éolienne : énergie cinétique du vent, puis mécanique de rotation (pales et arbre), électrique (génératrice), électrique adaptée au réseau (convertisseur).
- Exemple, une voiture électrique : chimique (batterie), électrique (onduleur), mécanique (moteur, puis réducteur et roues).

### Le schéma architectural
- Il montre l'organisation d'un produit sans norme stricte : les composants et les liens d'énergie et d'information entre eux.
- Il aide à placer chaque composant dans sa fonction, ce qu'on appelle compléter la chaîne.

### À retenir pour le bac
- Chaîne de puissance : alimenter, distribuer, convertir, transmettre, puis l'effecteur.
- Chaîne d'information : acquérir, traiter, communiquer.
- Les ordres partent de la chaîne d'information vers la fonction distribuer.
- Savoir nommer la forme d'énergie à chaque étape d'un produit.
- Piège : le moteur convertit ; le variateur ou le hacheur distribue.`,
      cartes: [
        { q: "Les trois flux d'un produit ?", r: "Matière, énergie, information." },
        { q: "Fonctions de la chaîne de puissance ?", r: "Alimenter, distribuer, convertir, transmettre." },
        { q: "Fonctions de la chaîne d'information ?", r: "Acquérir, traiter, communiquer." },
        { q: "Rôle de la fonction distribuer ?", r: "Doser l'énergie selon les ordres : relais, contacteur, variateur, hacheur." },
        { q: "Rôle de la fonction convertir ?", r: "Changer la forme de l'énergie : moteur, vérin, résistance chauffante." },
        { q: "Rôle de la fonction transmettre ?", r: "Adapter et amener l'énergie mécanique à l'effecteur : réducteur, courroie, vis-écrou." },
        { q: "Où vont les ordres de la chaîne d'information ?", r: "Vers la fonction distribuer de la chaîne de puissance." },
        { q: "Exemple de composant de la fonction acquérir ?", r: "Un capteur de température, un codeur, un bouton poussoir." },
        { q: "Exemple de composant de la fonction traiter ?", r: "Un microcontrôleur ou un automate programmable." },
        { q: "Formes d'énergie dans une éolienne ?", r: "Cinétique du vent, mécanique de rotation, électrique, puis électrique adaptée au réseau." },
        { q: "Formes d'énergie dans une voiture électrique ?", r: "Chimique (batterie), électrique, mécanique (moteur, réducteur, roues)." },
        { q: "Qu'est-ce qu'un schéma architectural ?", r: "Un schéma non normalisé qui montre les composants et les liens d'énergie et d'information." },
        { q: "Qu'est-ce que l'effecteur ?", r: "L'élément qui agit sur la matière d'œuvre : roue, pince, pale." },
      ],
      quiz: [
        { q: "Dans la chaîne de puissance, un moteur électrique assure la fonction :", choix: ["transmettre", "distribuer", "alimenter", "convertir"], bonne: 3, expl: "Il transforme l'énergie électrique en énergie mécanique.", niv: 1 },
        { q: "Dans un portail motorisé, le variateur qui pilote le moteur assure la fonction :", choix: ["distribuer", "convertir", "acquérir", "transmettre"], bonne: 0, expl: "Il dose l'énergie envoyée au moteur selon les ordres reçus.", niv: 2 },
        { q: "Un réducteur à engrenages, placé entre le moteur et la roue, assure la fonction :", choix: ["distribuer", "convertir", "transmettre", "acquérir une information"], bonne: 2, expl: "L'énergie reste mécanique : elle est seulement adaptée (vitesse, couple).", niv: 2 },
        { q: "Les trois fonctions de la chaîne d'information sont :", choix: ["alimenter, distribuer, convertir", "acquérir, traiter, communiquer", "mesurer, chauffer, refroidir", "concevoir, fabriquer, recycler"], bonne: 1, expl: "Alimenter, distribuer, convertir appartiennent à la chaîne de puissance.", niv: 1 },
        { q: "Dans une voiture électrique, la batterie stocke l'énergie sous forme :", choix: ["chimique", "mécanique", "thermique", "rayonnante"], bonne: 0, expl: "Elle la restitue sous forme électrique.", niv: 2 },
        { q: "Dans une éolienne, quelle suite d'énergies est correcte ?", choix: ["électrique, mécanique de rotation, cinétique du vent", "cinétique du vent, mécanique de rotation, électrique", "thermique, chimique, électrique", "cinétique du vent, chimique, électrique"], bonne: 1, expl: "Les pales captent le vent, l'arbre tourne, la génératrice produit l'électricité.", niv: 3 },
        { q: "Un capteur de présence appartient à la fonction :", choix: ["convertir", "traiter", "distribuer", "acquérir"], bonne: 3, expl: "Il fournit une information sur l'environnement du système.", niv: 1 },
        { q: "Les ordres émis par le microcontrôleur sont envoyés vers :", choix: ["la fonction transmettre", "la fonction alimenter", "la fonction distribuer", "l'effecteur directement"], bonne: 2, expl: "Le préactionneur (relais, variateur) reçoit l'ordre et dose l'énergie.", niv: 2 },
        { q: "Un panneau solaire relié à une batterie, puis à un onduleur et à une pompe. L'onduleur assure :", choix: ["la conversion de la lumière en électricité", "le stockage de l'énergie", "la distribution de l'énergie vers la pompe", "l'acquisition de l'ensoleillement"], bonne: 2, expl: "L'onduleur adapte et dose l'énergie électrique envoyée au moteur de la pompe.", niv: 3 },
        { q: "Dans un vérin pneumatique, l'énergie entrante est :", choix: ["pneumatique (air sous pression)", "électrique", "chimique", "thermique"], bonne: 0, expl: "Le vérin convertit l'énergie pneumatique en énergie mécanique de translation.", niv: 2 },
        { q: "Un écran qui affiche l'état du système appartient à la fonction :", choix: ["alimenter", "acquérir", "convertir", "communiquer"], bonne: 3, expl: "Il transmet une information à l'utilisateur.", niv: 1 },
        { q: "Sur un vélo à assistance électrique, le capteur de pédalage sert à :", choix: ["convertir l'effort du cycliste en électricité", "informer le contrôleur que le cycliste pédale", "stocker l'énergie du pédalage", "transmettre le couple à la roue"], bonne: 1, expl: "C'est une entrée de la chaîne d'information : le contrôleur décide alors d'aider.", niv: 3 },
      ] },
    { chapitre: 'sti2d-2i2d-4',
      fiche: `## Modéliser et simuler : modèles, solveurs et écarts

Les sujets donnent souvent des résultats de simulation (courbes, cartes de couleurs, tableaux) à exploiter. Il faut savoir ce qu'un modèle peut dire, et ce qu'il oublie.

### Les types de modèles
- **Modèle volumique** (maquette numérique 3D) : formes, masses, centres de gravité, et calcul de résistance par éléments finis.
- **Modèle multiphysique** : des composants reliés entre eux (batterie, moteur, réducteur, charge) pour simuler l'énergie et les mouvements dans le temps.
- **Modèle fonctionnel** de type **schéma-bloc** : des blocs entrée-sortie, utilisé pour les asservissements.
- **Modèle comportemental** : diagramme d'états ou d'activités, pour simuler un programme ou une suite d'événements.
- **Modèle de régression** (tableur) : une courbe de tendance qui relie des mesures, par exemple une droite y = a × x + b.

### Grandeurs flux et grandeurs effort
- Dans un modèle multiphysique, chaque liaison transporte une puissance = **grandeur effort × grandeur flux**.
- **Mécanique de translation** : force (N) × vitesse (m/s).
- **Mécanique de rotation** : couple (N·m) × vitesse angulaire (rad/s).
- **Électrique** : tension (V) × courant (A).
- **Hydraulique** : pression (Pa) × débit volumique (m³/s).
- Exemple : un vérin hydraulique sous 100 bar (10^7 Pa) avec un débit de 0,0001 m³/s reçoit une puissance de 1 000 W.

### Paramétrer une simulation
- Les **paramètres** du modèle : masses, résistances, rendements, rapports de réduction. Les **entrées** : consignes, profils de vitesse, charges.
- Le **solveur** calcule les résultats à des instants séparés par un **pas de calcul**.
- **Pas fixe** : simple, mais peut rater des variations rapides. **Pas variable** : le solveur raccourcit le pas quand le signal varie vite, et l'allonge quand il est calme.
- Un pas plus petit donne des résultats plus précis, mais un calcul plus long : c'est le **compromis précision-temps de calcul**.

### Exploiter les résultats
- Lire une courbe : valeur maximale, valeur en régime établi, durée d'une phase.
- Carte de contraintes d'une simulation par éléments finis : repérer la zone la plus sollicitée (souvent en rouge) et la valeur maximale.
- **Valider un modèle** : comparer simulation et mesure. Un écart faible (quelques %) rend le modèle fiable pour prévoir. Un écart grand oblige à revoir les hypothèses : frottements négligés, rendement idéal, masse oubliée.
- Une fois validé, le modèle permet de **tester des modifications** sans fabriquer de prototype : changer un moteur, une batterie, un matériau.

### À retenir pour le bac
- Cinq types de modèles : volumique, multiphysique, schéma-bloc, comportemental, régression.
- Puissance = effort × flux : force × vitesse, couple × vitesse angulaire, tension × courant, pression × débit.
- Petit pas de calcul : plus précis mais plus long.
- Valider le modèle par comparaison avec la mesure avant de s'en servir.
- Piège : une simulation n'est qu'un modèle ; toujours dire quelles hypothèses peuvent expliquer un écart.`,
      cartes: [
        { q: "Les cinq types de modèles du programme ?", r: "Volumique, multiphysique, fonctionnel (schéma-bloc), comportemental, de régression." },
        { q: "À quoi sert un modèle volumique ?", r: "Formes, masses, centre de gravité, et calcul de résistance par éléments finis." },
        { q: "À quoi sert un modèle multiphysique ?", r: "Simuler dans le temps l'énergie et les mouvements d'un ensemble de composants reliés." },
        { q: "Grandeurs effort et flux en électricité ?", r: "Effort : tension (V). Flux : courant (A)." },
        { q: "Grandeurs effort et flux en rotation ?", r: "Effort : couple (N·m). Flux : vitesse angulaire (rad/s)." },
        { q: "Grandeurs effort et flux en hydraulique ?", r: "Effort : pression (Pa). Flux : débit volumique (m³/s)." },
        { q: "Puissance transportée par une liaison ?", r: "Grandeur effort × grandeur flux." },
        { q: "Qu'est-ce qu'un solveur ?", r: "Le programme qui calcule les résultats de la simulation à des instants successifs." },
        { q: "Pas fixe ou pas variable ?", r: "Fixe : même pas partout. Variable : pas raccourci quand le signal varie vite." },
        { q: "Effet d'un pas de calcul plus petit ?", r: "Résultats plus précis, mais calcul plus long." },
        { q: "Comment valider un modèle ?", r: "Comparer ses résultats à des mesures : un écart faible le rend fiable." },
        { q: "Causes fréquentes d'écart modèle-réel ?", r: "Frottements négligés, rendements idéaux, masse ou paramètre mal estimé." },
        { q: "Qu'est-ce qu'un modèle de régression ?", r: "Une courbe de tendance calculée à partir de mesures, par exemple y = a × x + b." },
      ],
      quiz: [
        { q: "Pour simuler la batterie, le moteur et la charge d'un robot dans le temps, on utilise un modèle :", choix: ["de régression", "volumique", "multiphysique", "comportemental"], bonne: 2, expl: "Il relie des composants de natures différentes et calcule les échanges d'énergie.", niv: 1 },
        { q: "Vérin hydraulique : pression 10^7 Pa, débit 0,0001 m³/s. Puissance reçue ?", choix: ["1 W", "100 W", "10 W", "1 000 W"], bonne: 3, expl: "P = pression × débit = 10^7 × 10^-4 = 1 000 W.", niv: 2 },
        { q: "Moteur : couple 2 N·m, vitesse angulaire 150 rad/s. Puissance mécanique ?", choix: ["300 W", "75 W", "152 W", "0,013 W"], bonne: 0, expl: "P = C × ω = 2 × 150 = 300 W.", niv: 2 },
        { q: "En électricité, la grandeur effort est :", choix: ["le courant", "la tension", "la puissance", "la résistance"], bonne: 1, expl: "Le courant est la grandeur flux.", niv: 1 },
        { q: "On réduit le pas de calcul d'une simulation. Conséquence ?", choix: ["La simulation devient impossible", "Résultats moins précis, calcul plus court", "Résultats identiques, calcul plus court", "Résultats plus précis, calcul plus long"], bonne: 3, expl: "C'est le compromis précision-temps de calcul.", niv: 2 },
        { q: "Simulation : 3,2 m/s. Mesure : 2,9 m/s. Que proposer pour améliorer le modèle ?", choix: ["Supprimer la masse du modèle", "Augmenter la vitesse dans la mesure", "Ajouter les frottements ou un rendement réel", "Garder le modèle, l'écart est nul"], bonne: 2, expl: "Le modèle surestime la vitesse : il oublie des pertes.", niv: 3 },
        { q: "Pour calculer les contraintes dans une pièce, on utilise :", choix: ["un diagramme de séquence", "un modèle volumique avec éléments finis", "un modèle de régression", "un diagramme d'états"], bonne: 1, expl: "La pièce est découpée en petits éléments sur lesquels le logiciel calcule les contraintes.", niv: 1 },
        { q: "Un solveur à pas variable :", choix: ["raccourcit le pas quand le signal varie vite", "garde le même pas pendant tout le calcul", "calcule une seule valeur finale", "supprime les variations rapides"], bonne: 0, expl: "Il s'adapte : précis dans les transitoires, rapide ailleurs.", niv: 2 },
        { q: "Une simulation donne 52 W, la mesure 50 W. Écart relatif avec la mesure comme référence ?", choix: ["4 %", "2 %", "3,8 %", "40 %"], bonne: 0, expl: "(52 - 50) / 50 = 0,04 = 4 %. 3,8 % prend la simulation comme référence.", niv: 3 },
        { q: "Sur une carte de contraintes par éléments finis, la zone rouge indique en général :", choix: ["la zone non chargée", "la zone la plus légère", "la zone la plus sollicitée", "la zone la plus froide de la pièce"], bonne: 2, expl: "Il faut lire l'échelle de couleurs pour connaître la valeur maximale.", niv: 2 },
        { q: "Un tableur trace la droite qui passe au mieux par des mesures. C'est un modèle :", choix: ["volumique", "de régression", "multiphysique", "de séquence"], bonne: 1, expl: "Il permet ensuite d'estimer des valeurs entre les points mesurés.", niv: 1 },
        { q: "Pourquoi valider un modèle avant de l'utiliser pour modifier un produit ?", choix: ["Pour ne plus avoir besoin du cahier des charges", "Pour rendre le calcul plus rapide", "Pour éviter de mesurer le produit", "Pour être sûr que ses prévisions sont proches du réel"], bonne: 3, expl: "Un modèle non validé peut conduire à un mauvais choix de composant.", niv: 3 },
      ] },
    { chapitre: 'sti2d-2i2d-5',
      fiche: `## Mouvements, liaisons et transmissions

### Structure fixe ou mécanisme
- Une **structure fixe** (ossature, châssis, mât, charpente) doit rester immobile : on étudie surtout sa résistance et sa stabilité.
- Un **mécanisme** doit permettre des mouvements : on étudie ses liaisons, ses vitesses et ses efforts.

### Les liaisons mécaniques
- Une liaison décrit les mouvements possibles entre deux pièces : des **rotations** et des **translations** autour de trois axes.
- **Encastrement** (liaison complète) : aucun mouvement.
- **Pivot** : une rotation (roue sur son axe, charnière).
- **Glissière** : une translation (tiroir, chariot sur rail).
- **Pivot glissant** : une rotation et une translation de même axe (tige de vérin dans son corps).
- **Rotule** : trois rotations (attelage de remorque).
- **Appui plan** : deux translations dans le plan et une rotation autour de la normale.
- **Ponctuelle** (sphère-plan) : cinq mouvements possibles, un seul empêché.

### Les mouvements
- **Translation rectiligne** : tous les points vont en ligne droite, à la même vitesse.
- **Rotation autour d'un axe fixe** : chaque point décrit un cercle ; sa vitesse vaut **v = ω × R**, avec ω en rad/s et R en m.
- Conversion : **ω = 2 × π × N / 60**, avec N en tr/min. 3 000 tr/min donnent 314 rad/s.
- Mouvement uniforme : vitesse constante. Mouvement uniformément accéléré : v = a × t, et distance = ½ × a × t² depuis l'arrêt.

### Les transmissions de mouvement
- **Rapport de transmission** : r = vitesse de sortie / vitesse d'entrée.
- **Engrenages** : r = Z menante / Z menée (nombres de dents). Pignon de 20 dents qui entraîne une roue de 60 dents : r = 1/3, la sortie tourne trois fois moins vite.
- **Poulies et courroie** : r = diamètre menante / diamètre menée.
- **Vis-écrou** : transforme une rotation en translation ; l'écrou avance d'un **pas** à chaque tour. Pas de 4 mm à 300 tr/min : 1 200 mm/min, soit 20 mm/s.
- **Pignon-crémaillère** : v = ω × R du pignon.
- Un réducteur **diminue la vitesse et augmente le couple** : couple de sortie = couple d'entrée × rendement / r.

### La loi entrée-sortie
- Elle relie le mouvement d'entrée (moteur) au mouvement de sortie (effecteur). On l'obtient en enchaînant les rapports : r global = r1 × r2.
- Les logiciels de simulation tracent cette loi : vitesse ou position de sortie en fonction du temps.

### À retenir pour le bac
- Liaisons : encastrement 0, pivot 1 rotation, glissière 1 translation, pivot glissant 2, rotule 3 rotations.
- v = ω × R et ω = 2 × π × N / 60.
- Engrenages : r = Z menante / Z menée ; vis-écrou : vitesse = pas × vitesse de rotation.
- Un réducteur divise la vitesse et multiplie le couple.
- Piège : convertir les tr/min en rad/s et les mm en m avant de calculer.`,
      cartes: [
        { q: "Structure fixe ou mécanisme ?", r: "Structure fixe : doit rester immobile (châssis, mât). Mécanisme : permet des mouvements." },
        { q: "Mouvements permis par une liaison pivot ?", r: "Une rotation." },
        { q: "Mouvements permis par une liaison glissière ?", r: "Une translation." },
        { q: "Mouvements permis par un pivot glissant ?", r: "Une rotation et une translation de même axe." },
        { q: "Mouvements permis par une rotule ?", r: "Trois rotations." },
        { q: "Mouvements permis par un encastrement ?", r: "Aucun." },
        { q: "Vitesse d'un point en rotation ?", r: "v = ω × R, avec ω en rad/s et R en m." },
        { q: "Conversion tr/min vers rad/s ?", r: "ω = 2 × π × N / 60." },
        { q: "Rapport de transmission d'un engrenage ?", r: "r = Z menante / Z menée." },
        { q: "Rapport d'une transmission poulies-courroie ?", r: "r = diamètre de la poulie menante / diamètre de la poulie menée." },
        { q: "Vitesse de l'écrou d'un système vis-écrou ?", r: "Pas × vitesse de rotation de la vis (en tours par seconde)." },
        { q: "Effet d'un réducteur sur la vitesse et le couple ?", r: "Il divise la vitesse et multiplie le couple (aux pertes près)." },
        { q: "Rapport global de deux étages en série ?", r: "r global = r1 × r2." },
      ],
      quiz: [
        { q: "Une liaison pivot autorise :", choix: ["une translation", "une rotation", "trois rotations", "deux rotations"], bonne: 1, expl: "Trois rotations, c'est la rotule ; une rotation et une translation, le pivot glissant.", niv: 1 },
        { q: "Un moteur tourne à 3 000 tr/min. Sa vitesse angulaire vaut environ :", choix: ["314 rad/s", "50 rad/s", "5 rad/s", "3 000 rad/s"], bonne: 0, expl: "ω = 2 × π × 3 000 / 60 ≈ 314 rad/s.", niv: 2 },
        { q: "Pignon menant de 20 dents, roue menée de 60 dents. Rapport de transmission ?", choix: ["1/40", "3", "1/3", "1/80"], bonne: 2, expl: "r = 20 / 60 = 1/3 : la roue tourne trois fois moins vite.", niv: 2 },
        { q: "La tige d'un vérin peut tourner et coulisser dans son corps. Liaison ?", choix: ["encastrement", "glissière", "pivot", "pivot glissant"], bonne: 3, expl: "Une rotation et une translation de même axe.", niv: 1 },
        { q: "Vis de pas 4 mm tournant à 300 tr/min. Vitesse de l'écrou ?", choix: ["20 mm/s", "75 mm/s", "1,2 mm/s", "0,8 mm/s"], bonne: 0, expl: "300 tr/min = 5 tr/s ; 5 × 4 = 20 mm/s.", niv: 2 },
        { q: "Roue de rayon 0,3 m tournant à 10 rad/s. Vitesse d'un point de sa périphérie ?", choix: ["10,3 m/s", "33 m/s", "0,03 m/s", "3 m/s"], bonne: 3, expl: "v = ω × R = 10 × 0,3 = 3 m/s.", niv: 3 },
        { q: "Un châssis de remorque est :", choix: ["un mécanisme", "une structure fixe", "une liaison pivot", "un mécanisme de levage"], bonne: 1, expl: "Il doit rester immobile et porter les charges.", niv: 1 },
        { q: "Deux étages de réduction de rapports 1/4 et 1/5. Rapport global ?", choix: ["9", "1/9", "1/20", "4/5"], bonne: 2, expl: "r global = 1/4 × 1/5 = 1/20.", niv: 2 },
        { q: "Réducteur de rapport 1/10 et de rendement 0,9. Couple d'entrée 2 N·m. Couple de sortie ?", choix: ["20 N·m", "18 N·m", "0,18 N·m", "22,2 N·m"], bonne: 1, expl: "2 × 0,9 / (1/10) = 2 × 0,9 × 10 = 18 N·m.", niv: 3 },
        { q: "Un tiroir qui coulisse dans un meuble est guidé par une liaison :", choix: ["rotule", "pivot", "glissière", "ponctuelle"], bonne: 2, expl: "Une seule translation possible.", niv: 2 },
        { q: "Un système vis-écrou transforme :", choix: ["une rotation en translation", "une translation en chaleur", "une rotation lente en rotation rapide", "un courant en couple"], bonne: 0, expl: "La vis tourne, l'écrou avance d'un pas par tour.", niv: 1 },
        { q: "Poulie motrice de 50 mm, poulie réceptrice de 200 mm. Moteur à 1 600 tr/min. Vitesse de sortie ?", choix: ["8 tr/min", "6 400 tr/min", "1 600 tr/min", "400 tr/min"], bonne: 3, expl: "r = 50 / 200 = 1/4 ; 1 600 / 4 = 400 tr/min.", niv: 3 },
      ] },
    { chapitre: 'sti2d-2i2d-6',
      fiche: `## Statique, stabilité et transmission des efforts

### Modéliser une action mécanique
- Une **force** a un point d'application, une direction, un sens et une intensité en newtons (N).
- Le **poids** : P = m × g, avec g = 9,81 m/s², appliqué au centre de gravité, vers le bas. Une masse de 50 kg pèse environ 490 N.
- Le **moment** d'une force par rapport à un point : **M = F × d**, avec d la distance perpendiculaire entre la droite d'action et le point (bras de levier). Unité : N·m.
- Une charge peut être **ponctuelle** (en N) ou **répartie** (en N/m, comme le poids d'une dalle sur une poutre).

### Le principe fondamental de la statique
- Un solide **à l'équilibre** vérifie deux conditions :
- **La somme des forces extérieures est nulle.**
- **La somme des moments par rapport à n'importe quel point est nulle.**
- Méthode : isoler le solide, faire le **bilan des actions extérieures**, écrire les équations, résoudre, puis conclure.
- Exemple : une poutre de 4 m sur deux appuis A et B porte une charge de 1 000 N au milieu. Par symétrie, chaque appui reçoit 500 N.
- Exemple avec moments : charge de 1 200 N à 1 m de A sur une poutre de 4 m. Moments en A : B × 4 = 1 200 × 1, donc B = 300 N, puis A = 1 200 - 300 = 900 N.

### Les liaisons et les efforts transmis
- Une liaison transmet des efforts dans les directions où elle **empêche** le mouvement.
- Un appui simple (rouleau) transmet un effort perpendiculaire à l'appui ; une articulation (pivot) transmet un effort de direction quelconque dans le plan ; un encastrement transmet aussi un moment.
- La résolution peut se faire à la main ou avec un logiciel de statique sur la maquette numérique.

### La stabilité
- **Équilibre stable** : écarté un peu, le solide revient à sa position (bille au fond d'un bol).
- **Équilibre instable** : écarté un peu, il s'éloigne (bille au sommet d'un dôme).
- **Basculement** : un objet bascule quand la verticale de son centre de gravité sort de sa base d'appui. Abaisser le centre de gravité ou élargir la base améliore la stabilité.
- **Flambement** : une pièce longue et fine, comprimée, peut se courber brusquement bien avant d'atteindre la limite du matériau. On l'évite avec une section plus rigide ou une longueur plus courte.
- **Contreventement** : des barres en diagonale ou des murs rigides empêchent une structure de se déformer sous le vent, dans les trois directions.

### La descente de charges
- Dans un bâtiment, les charges descendent de la toiture vers les planchers, les poutres, les poteaux ou les murs, puis les **fondations** et le sol.
- On additionne les charges permanentes (poids propre) et les charges d'exploitation (personnes, mobilier, neige).

### À retenir pour le bac
- Équilibre : somme des forces nulle et somme des moments nulle.
- Moment = force × bras de levier.
- Méthode : isoler, bilan des actions, équations, résolution, conclusion.
- Stabilité : centre de gravité bas, base large ; risque de flambement pour les pièces fines comprimées.
- Piège : P = m × g, ne pas confondre masse (kg) et poids (N).`,
      cartes: [
        { q: "Les quatre caractéristiques d'une force ?", r: "Point d'application, direction, sens, intensité (N)." },
        { q: "Calcul du poids ?", r: "P = m × g, avec g = 9,81 m/s²." },
        { q: "Moment d'une force ?", r: "M = F × d, avec d le bras de levier ; unité N·m." },
        { q: "Principe fondamental de la statique ?", r: "Somme des forces extérieures nulle et somme des moments nulle." },
        { q: "Méthode de résolution en statique ?", r: "Isoler, faire le bilan des actions extérieures, écrire les équations, résoudre, conclure." },
        { q: "Charge ponctuelle ou répartie ?", r: "Ponctuelle : en N, en un point. Répartie : en N/m, sur une longueur." },
        { q: "Équilibre stable ?", r: "Écarté un peu, le solide revient à sa position." },
        { q: "Équilibre instable ?", r: "Écarté un peu, le solide s'éloigne de sa position." },
        { q: "Quand un objet bascule-t-il ?", r: "Quand la verticale de son centre de gravité sort de sa base d'appui." },
        { q: "Qu'est-ce que le flambement ?", r: "Une pièce longue et fine, comprimée, se courbe brusquement." },
        { q: "Rôle d'un contreventement ?", r: "Empêcher une structure de se déformer sous les efforts horizontaux comme le vent." },
        { q: "Qu'est-ce que la descente de charges ?", r: "Le cheminement des charges de la toiture jusqu'aux fondations et au sol." },
        { q: "Quand une liaison transmet-elle un effort ?", r: "Dans les directions où elle empêche le mouvement." },
      ],
      quiz: [
        { q: "Un solide est en équilibre si :", choix: ["la somme des forces et la somme des moments sont nulles", "la somme des forces est égale au poids", "il n'y a que deux forces", "le moment du poids est maximal"], bonne: 0, expl: "Ce sont les deux équations du principe fondamental de la statique.", niv: 1 },
        { q: "Quel est le poids d'une masse de 50 kg (g = 9,81 m/s²) ?", choix: ["50 N", "490,5 N", "5,1 N", "59,8 N"], bonne: 1, expl: "P = 50 × 9,81 = 490,5 N.", niv: 2 },
        { q: "Une force de 200 N agit avec un bras de levier de 0,5 m. Moment ?", choix: ["0,0025 N·m", "400 N·m", "200,5 N·m", "100 N·m"], bonne: 3, expl: "M = F × d = 200 × 0,5 = 100 N·m.", niv: 2 },
        { q: "Un objet bascule quand :", choix: ["sa base d'appui est large", "son centre de gravité est très bas", "la verticale de son centre de gravité sort de sa base", "sa masse est faible"], bonne: 2, expl: "Abaisser le centre de gravité ou élargir la base améliore la stabilité.", niv: 1 },
        { q: "Poutre de 4 m sur deux appuis A et B ; 1 000 N au milieu. Effort sur chaque appui ?", choix: ["250 N", "1 000 N", "500 N", "2 000 N"], bonne: 2, expl: "Par symétrie, la charge se partage en deux.", niv: 2 },
        { q: "Poutre de 4 m sur appuis A et B ; 1 200 N à 1 m de A. Effort sur l'appui B ?", choix: ["900 N", "300 N", "1 200 N", "4 800 N"], bonne: 1, expl: "Moments en A : B × 4 = 1 200 × 1, donc B = 300 N ; et A = 900 N.", niv: 3 },
        { q: "Le flambement concerne surtout :", choix: ["une pièce longue et fine comprimée", "une pièce courte tendue", "une pièce chauffée", "une liaison pivot"], bonne: 0, expl: "Elle peut se courber brusquement sous une compression modérée.", niv: 1 },
        { q: "Les barres en croix sur la façade d'un hangar métallique servent à :", choix: ["isoler le bâtiment du froid", "décorer la façade", "réduire la masse", "contreventer la structure"], bonne: 3, expl: "Elles empêchent la structure de se déformer sous le vent.", niv: 2 },
        { q: "Une clé de 0,25 m doit serrer un écrou à 50 N·m. Force à exercer au bout de la clé ?", choix: ["12,5 N", "200 N", "50 N", "25 N"], bonne: 1, expl: "F = M / d = 50 / 0,25 = 200 N.", niv: 3 },
        { q: "Une bille posée au fond d'un bol est en équilibre :", choix: ["impossible", "instable", "indifférent", "stable"], bonne: 3, expl: "Écartée, elle revient au fond.", niv: 2 },
        { q: "Une liaison transmet un effort dans les directions où elle :", choix: ["empêche le mouvement", "permet le mouvement", "est lubrifiée", "est la plus longue des deux"], bonne: 0, expl: "Une glissière ne transmet pas d'effort dans le sens où elle laisse glisser (sans frottement).", niv: 1 },
        { q: "Pour diminuer le risque de flambement d'un poteau, on peut :", choix: ["remplacer l'acier par un matériau plus souple", "le rendre plus long et plus fin", "le raccourcir ou augmenter sa section", "supprimer ses appuis"], bonne: 2, expl: "Le flambement dépend de la longueur et de la rigidité de la section.", niv: 3 },
      ] },
    { chapitre: 'sti2d-2i2d-7',
      fiche: `## Résistance des matériaux et choix des matériaux

### Les sollicitations simples
- **Traction** : la pièce est étirée (câble, tirant).
- **Compression** : la pièce est écrasée (poteau, pied de table).
- **Flexion** : la pièce se courbe sous une charge perpendiculaire (poutre, étagère, mât sous le vent).
- Le modèle **poutre** : une pièce beaucoup plus longue que large, étudiée à partir de sa ligne moyenne.

### Contrainte et déformation
- **Contrainte normale** : **σ = F / S**. Avec F en N et S en mm², σ est en **MPa** (1 MPa = 1 N/mm²).
- Exemple : 10 000 N sur une section de 100 mm² donnent σ = 100 MPa.
- **Allongement relatif** (déformation) : ε = ΔL / L, sans unité. 2 mm d'allongement sur 1 m : ε = 0,002.
- **Loi de Hooke** (domaine élastique) : **σ = E × ε**. E est le **module d'Young** : environ 210 000 MPa pour l'acier, 70 000 MPa pour l'aluminium, 10 000 MPa pour le bois dans le sens des fibres.
- Un matériau à grand module d'Young est **rigide** : il se déforme peu.

### La condition de résistance
- **Limite élastique** Re : au-delà, la déformation devient permanente. Acier courant : environ 235 MPa.
- **Coefficient de sécurité** : s = Re / σ max. La pièce convient si s est supérieur ou égal à la valeur imposée.
- Exemple : σ max = 50 MPa, Re = 235 MPa : s = 4,7. Si le cahier des charges impose s ≥ 3, la pièce convient.
- Les simulations par éléments finis donnent la **contrainte maximale** (zone rouge) et le **déplacement maximal** (flèche d'une poutre).

### La flexion
- Une poutre en flexion est **tendue d'un côté et comprimée de l'autre** ; la contrainte est maximale sur les bords, nulle sur la ligne moyenne.
- La flèche (déplacement) diminue fortement si la poutre est plus **haute** : une poutre posée « sur la tranche » est bien plus rigide.
- Les profilés en **I** ou en **H** placent la matière loin du centre : ils sont rigides et légers.
- Une forme **conique** (mât d'éolienne) met plus de matière en bas, où l'effort de flexion est le plus grand : on gagne de la matière.

### Choisir un matériau
- Familles : **métaux** (acier, aluminium), **polymères** (plastiques), **céramiques et verres**, **composites** (fibre de carbone, béton armé), **matériaux naturels** (bois).
- Critères : résistance, rigidité, **masse volumique**, coût, mise en forme, tenue à la corrosion, **impact environnemental** (énergie grise, recyclabilité).
- Le choix est un **compromis** : l'aluminium est plus léger que l'acier mais plus cher et plus énergivore à produire ; le bois stocke du carbone.
- On compare souvent avec des indices : résistance / masse volumique pour une pièce légère et solide.

### À retenir pour le bac
- σ = F / S en MPa avec F en N et S en mm².
- Hooke : σ = E × ε ; ε = ΔL / L.
- Coefficient de sécurité s = Re / σ max, à comparer à la valeur imposée.
- Flexion : matière loin du centre (profilé en I) ; mât conique.
- Piège : 1 m² = 1 000 000 mm², convertir avant de calculer.`,
      cartes: [
        { q: "Les trois sollicitations simples du programme ?", r: "Traction, compression, flexion." },
        { q: "Formule de la contrainte normale ?", r: "σ = F / S ; en MPa avec F en N et S en mm²." },
        { q: "Allongement relatif ?", r: "ε = ΔL / L, sans unité." },
        { q: "Loi de Hooke ?", r: "σ = E × ε dans le domaine élastique." },
        { q: "Module d'Young de l'acier ?", r: "Environ 210 000 MPa." },
        { q: "Qu'est-ce que la limite élastique ?", r: "La contrainte au-delà de laquelle la déformation devient permanente." },
        { q: "Coefficient de sécurité ?", r: "s = Re / σ max, à comparer à la valeur exigée." },
        { q: "Où la contrainte est-elle maximale dans une poutre en flexion ?", r: "Sur les bords haut et bas ; elle est nulle sur la ligne moyenne." },
        { q: "Pourquoi les profilés en I ?", r: "La matière est loin du centre : la poutre est rigide et légère." },
        { q: "Pourquoi un mât d'éolienne conique ?", r: "Plus de matière en bas, où la flexion est la plus forte : on économise de l'acier." },
        { q: "Familles de matériaux ?", r: "Métaux, polymères, céramiques et verres, composites, matériaux naturels." },
        { q: "Critères de choix d'un matériau ?", r: "Résistance, rigidité, masse volumique, coût, mise en forme, corrosion, impact environnemental." },
        { q: "Que donne une simulation par éléments finis ?", r: "La répartition des contraintes et des déplacements, avec leurs valeurs maximales." },
      ],
      quiz: [
        { q: "Un câble de grue est sollicité en :", choix: ["torsion", "compression", "flexion", "traction"], bonne: 3, expl: "La charge tire sur le câble.", niv: 1 },
        { q: "Effort de 10 000 N sur une section de 100 mm². Contrainte ?", choix: ["0,01 MPa", "1 000 000 MPa", "100 MPa", "10 MPa"], bonne: 2, expl: "σ = 10 000 / 100 = 100 MPa.", niv: 2 },
        { q: "Contrainte maximale 50 MPa ; Re = 235 MPa. Coefficient de sécurité ?", choix: ["4,7", "47", "185", "285"], bonne: 0, expl: "s = 235 / 50 = 4,7.", niv: 2 },
        { q: "Un mât d'éolienne soumis au vent est surtout sollicité en :", choix: ["traction", "flexion", "torsion", "cisaillement"], bonne: 1, expl: "Le vent pousse latéralement en haut du mât : il se courbe.", niv: 1 },
        { q: "Un tirant de 2 m s'allonge de 1 mm. Allongement relatif ?", choix: ["0,002", "0,0005", "2", "0,5"], bonne: 1, expl: "ε = 1 / 2 000 = 0,0005.", niv: 2 },
        { q: "Acier : E = 210 000 MPa ; allongement relatif 0,001. Contrainte (domaine élastique) ?", choix: ["210 MPa", "21 MPa", "2 100 MPa", "0,21 MPa"], bonne: 0, expl: "σ = E × ε = 210 000 × 0,001 = 210 MPa.", niv: 3 },
        { q: "Au-delà de la limite élastique, la déformation devient :", choix: ["réversible", "nulle", "permanente", "plus faible"], bonne: 2, expl: "La pièce ne reprend plus sa forme.", niv: 1 },
        { q: "Coefficient de sécurité calculé 2,5 ; le cahier des charges impose 3. Conclusion ?", choix: ["Le calcul est impossible", "La pièce est surdimensionnée", "La pièce convient avec une marge", "La pièce est sous-dimensionnée"], bonne: 3, expl: "2,5 est inférieur à 3 : il faut renforcer la pièce ou changer de matériau.", niv: 2 },
        { q: "Pour alléger une poutre sans trop perdre de rigidité en flexion, on choisit :", choix: ["un profilé en I", "une section pleine ronde", "des poutres plus basses", "une section carrée pleine"], bonne: 0, expl: "La matière placée loin du centre résiste le mieux à la flexion.", niv: 3 },
        { q: "Quel matériau a le plus grand module d'Young ?", choix: ["le polyéthylène", "l'aluminium", "le bois", "l'acier"], bonne: 3, expl: "210 000 MPa pour l'acier, 70 000 pour l'aluminium, environ 10 000 pour le bois.", niv: 2 },
        { q: "La contrainte normale s'exprime en :", choix: ["kg", "N·m", "MPa", "J"], bonne: 2, expl: "1 MPa = 1 N/mm².", niv: 1 },
        { q: "Un mât conique remplace un mât cylindrique de même hauteur et de même résistance. Avantage ?", choix: ["Plus de prise au vent", "Moins d'acier, donc moins d'impact", "Un montage plus long", "Une contrainte plus forte au pied du mât"], bonne: 1, expl: "La matière est placée là où la flexion est la plus forte.", niv: 3 },
      ] },
    { chapitre: 'sti2d-2i2d-8',
      fiche: `## Énergie : bilans, rendements et point de fonctionnement

### Puissance et énergie
- **Énergie = puissance × durée**. En joules (J) avec des watts et des secondes ; en **wattheures** (Wh) avec des watts et des heures. 1 Wh = 3 600 J ; 1 kWh = 3,6 MJ.
- Exemple : un radiateur de 2 kW pendant 3 h consomme 6 kWh.
- Puissances à connaître : électrique **P = U × I** (en continu) ; mécanique de translation **P = F × v** ; de rotation **P = C × ω** ; thermique pour chauffer **Q = m × c × ΔT** (énergie).

### Conservation et rendement
- L'énergie se **conserve** : elle ne se crée pas, elle se transforme. L'énergie absorbée = énergie utile + pertes.
- **Rendement** : η = puissance utile / puissance absorbée, entre 0 et 1.
- Pertes typiques : **effet Joule** (R × I² dans les câbles et bobinages), frottements, pertes de charge dans les tuyaux, pertes thermiques.
- **Rendement global** d'une chaîne = produit des rendements. Batterie 0,95, convertisseur 0,96, moteur 0,85, réducteur 0,9 : η global ≈ 0,70.
- On distingue le **rendement instantané** (en puissance, à un instant) et le **rendement énergétique sur un cycle** (énergie utile / énergie absorbée sur toute une utilisation).

### Réversibilité
- Certains convertisseurs sont **réversibles** : une machine électrique peut fonctionner en moteur ou en génératrice. Freinage récupératif d'un véhicule électrique, pompe-turbine d'une station de transfert d'énergie.

### Sources, charges et point de fonctionnement
- Une **source** a une caractéristique (tension en fonction du courant, couple en fonction de la vitesse) ; une **charge** aussi.
- Le **point de fonctionnement** en régime établi est l'**intersection** des deux caractéristiques. Exemple : une pompe et son réseau de tuyaux ; un moteur et sa charge mécanique ; un panneau solaire et sa batterie.
- **Optimiser** : faire travailler la source près de son point de rendement maximal ou de puissance maximale (recherche du point de puissance maximale d'un panneau solaire).

### Régime transitoire
- Entre deux régimes établis, le système passe par un **régime transitoire** : démarrage d'un moteur, chauffe d'un four, charge d'une batterie.
- Pendant le transitoire, une partie de l'énergie est **stockée** (énergie cinétique d'une masse en mouvement, énergie thermique d'un mur, énergie d'un condensateur) ; en régime établi, l'énergie est surtout **transférée**.

### Bilan énergétique d'un produit
- On mesure ou on simule les puissances à chaque étape, puis on calcule l'énergie consommée sur un usage type et le rendement.
- Pour une habitation : **besoins** (chauffage, eau chaude, éclairage) en kWh par m² et par an, comparés à une réglementation.

### À retenir pour le bac
- E = P × t ; 1 kWh = 3,6 MJ.
- Rendement global = produit des rendements ; puissance absorbée = puissance utile / rendement.
- Point de fonctionnement = intersection des caractéristiques de la source et de la charge.
- Régime transitoire : stockage d'énergie ; régime établi : transfert.
- Piège : ne pas additionner les rendements.`,
      cartes: [
        { q: "Relation énergie et puissance ?", r: "E = P × t." },
        { q: "Conversion kWh en joules ?", r: "1 kWh = 3,6 × 10^6 J = 3,6 MJ." },
        { q: "Puissance électrique en continu ?", r: "P = U × I." },
        { q: "Puissance mécanique de rotation ?", r: "P = C × ω, avec C en N·m et ω en rad/s." },
        { q: "Définition du rendement ?", r: "η = puissance utile / puissance absorbée." },
        { q: "Rendement global d'une chaîne ?", r: "Le produit des rendements de chaque élément." },
        { q: "Pertes par effet Joule ?", r: "R × I² : chaleur dans les conducteurs et bobinages." },
        { q: "Rendement instantané ou sur cycle ?", r: "Instantané : rapport de puissances. Sur cycle : rapport des énergies sur toute une utilisation." },
        { q: "Qu'est-ce qu'un convertisseur réversible ?", r: "Un convertisseur qui peut fonctionner dans les deux sens, comme un moteur qui devient génératrice au freinage." },
        { q: "Point de fonctionnement ?", r: "L'intersection des caractéristiques de la source et de la charge, en régime établi." },
        { q: "Qu'est-ce qu'un régime transitoire ?", r: "Le passage d'un régime établi à un autre : démarrage, chauffe, charge." },
        { q: "Que se passe-t-il pendant un transitoire ?", r: "Une partie de l'énergie est stockée (cinétique, thermique, électrique)." },
        { q: "Énergie pour chauffer un corps ?", r: "Q = m × c × ΔT." },
      ],
      quiz: [
        { q: "Un radiateur de 2 kW fonctionne 3 h. Énergie consommée ?", choix: ["5 kWh", "0,67 kWh", "6 kWh", "1,5 kWh"], bonne: 2, expl: "E = P × t = 2 × 3 = 6 kWh.", niv: 1 },
        { q: "Rendements : batterie 0,95, convertisseur 0,96, moteur 0,85, réducteur 0,9. Rendement global ?", choix: ["3,66", "0,70", "0,92", "0,85"], bonne: 1, expl: "0,95 × 0,96 × 0,85 × 0,9 ≈ 0,70.", niv: 2 },
        { q: "Moteur : puissance utile 850 W, rendement 0,85. Puissance absorbée ?", choix: ["935 W", "722 W", "850 W", "1 000 W"], bonne: 3, expl: "P absorbée = 850 / 0,85 = 1 000 W.", niv: 2 },
        { q: "Le rendement d'un convertisseur est :", choix: ["puissance utile / puissance absorbée", "puissance absorbée / puissance utile", "puissance utile - pertes", "énergie × durée"], bonne: 0, expl: "Il est compris entre 0 et 1.", niv: 1 },
        { q: "Combien de joules dans 1 kWh ?", choix: ["3,6 × 10^6 J", "1 000 J", "3 600 J", "60 000 J"], bonne: 0, expl: "1 000 W × 3 600 s = 3,6 × 10^6 J.", niv: 2 },
        { q: "Un câble de résistance 0,5 Ω transporte 20 A. Pertes par effet Joule ?", choix: ["40 W", "10 W", "200 W", "800 W"], bonne: 2, expl: "P = R × I² = 0,5 × 400 = 200 W.", niv: 3 },
        { q: "Le point de fonctionnement d'une pompe sur son réseau se trouve :", choix: ["au maximum de la courbe de la pompe", "à l'intersection des deux caractéristiques", "au début de la courbe du réseau", "là où le débit est nul"], bonne: 1, expl: "La pompe impose sa courbe, le réseau aussi : le débit réel est là où elles se croisent.", niv: 1 },
        { q: "Au freinage, le moteur d'une voiture électrique fonctionne en génératrice. C'est un exemple de :", choix: ["rendement nul", "régime établi", "effet Joule", "réversibilité"], bonne: 3, expl: "L'énergie cinétique est récupérée et renvoyée vers la batterie.", niv: 2 },
        { q: "Pendant le démarrage d'un tapis roulant chargé, une partie de l'énergie absorbée sert à :", choix: ["diminuer la tension d'alimentation du moteur", "refroidir le moteur", "réduire les pertes", "augmenter l'énergie cinétique de la charge"], bonne: 3, expl: "En régime transitoire, l'énergie est en partie stockée.", niv: 3 },
        { q: "Moteur : couple 10 N·m à 100 rad/s. Puissance mécanique utile ?", choix: ["10 W", "1 000 W", "110 W", "0,1 W"], bonne: 1, expl: "P = C × ω = 10 × 100 = 1 000 W.", niv: 2 },
        { q: "Pour additionner les effets de plusieurs rendements dans une chaîne, on les :", choix: ["soustrait", "additionne", "multiplie", "divise"], bonne: 2, expl: "Chaque élément ne transmet qu'une fraction de ce qu'il reçoit.", niv: 1 },
        { q: "Sur un cycle, une machine absorbe 5 kWh et fournit 3,5 kWh utiles. Rendement énergétique sur cycle ?", choix: ["0,7", "1,43", "0,3", "1,5"], bonne: 0, expl: "η = 3,5 / 5 = 0,7.", niv: 3 },
      ] },
    { chapitre: 'sti2d-2i2d-9',
      fiche: `## Stockage, conversion et réseaux d'énergie

### Stocker l'énergie
- **Batterie** (énergie chimique) : capacité Q en A·h, énergie **E = U × Q** en Wh. 48 V et 100 A·h : 4,8 kWh.
- **Profondeur de décharge** : part de l'énergie qu'on utilise. Avec 80 %, une batterie de 4,8 kWh fournit 3,84 kWh.
- **Autonomie** = énergie utilisable / puissance consommée. 3,84 kWh pour une charge de 480 W : 8 h.
- Éléments en **série** : les tensions s'additionnent. En **parallèle** : les capacités s'additionnent.
- Autres stockages : **thermique** (ballon d'eau chaude, mur épais), **mécanique** (volant d'inertie), **gravitaire** (station de transfert d'énergie par pompage : on remonte l'eau quand l'électricité est abondante), **hydrogène** (électrolyse, puis pile à combustible).

### Convertir l'énergie électrique
- **Redresseur** : alternatif vers continu (chargeur).
- **Onduleur** : continu vers alternatif (panneaux solaires vers le réseau, moteur de voiture électrique).
- **Hacheur** : continu vers continu réglable ; tension moyenne = rapport cyclique × tension d'entrée.
- **Transformateur** : alternatif vers alternatif, change la tension.
- Ces convertisseurs à interrupteurs électroniques ont de très bons rendements (souvent plus de 95 %).

### Le réseau électrique
- **Production** centralisée (centrales) ou **décentralisée** (panneaux sur les toits, éoliennes, méthanisation, cogénération qui produit chaleur et électricité ensemble).
- **Transport** en très haute tension (400 000 V) pour limiter les pertes : à puissance égale, une tension plus haute donne un courant plus faible, donc moins de pertes R × I².
- **Distribution** en moyenne puis basse tension (230 V entre phase et neutre, 400 V entre phases, 50 Hz).
- La production doit **suivre la demande à chaque instant** : sinon, la fréquence du réseau varie.

### Les réseaux intelligents
- Un **réseau intelligent** (smart grid) utilise des compteurs communicants, des capteurs et des stockages pour équilibrer production et consommation : décaler la recharge des véhicules, stocker le surplus solaire, piloter des chauffe-eau.
- Structures de réseau : **en étoile** (simple, mais une coupure isole toute une branche) ou **maillée** (plusieurs chemins possibles, meilleure continuité de service).
- Le **mix énergétique** est la répartition des sources de production (nucléaire, hydraulique, éolien, solaire, gaz).

### Les micro-énergies
- Des capteurs autonomes récupèrent l'énergie locale : petite cellule solaire, vibrations, écart de température. Ils consomment très peu et dorment la plupart du temps.

### À retenir pour le bac
- E = U × Q ; autonomie = énergie utilisable / puissance.
- Redresseur, onduleur, hacheur, transformateur : savoir lequel choisir.
- Haute tension pour transporter : moins de courant, moins de pertes.
- Réseau maillé : meilleure continuité ; smart grid : équilibre production-consommation.
- Piège : en série les tensions s'ajoutent, en parallèle les capacités.`,
      cartes: [
        { q: "Énergie stockée dans une batterie ?", r: "E = U × Q, en Wh si Q est en A·h." },
        { q: "Calcul de l'autonomie ?", r: "Énergie utilisable / puissance consommée." },
        { q: "Qu'est-ce que la profondeur de décharge ?", r: "La part de l'énergie de la batterie qu'on s'autorise à utiliser." },
        { q: "Batteries en série ou en parallèle ?", r: "Série : tensions additionnées. Parallèle : capacités additionnées." },
        { q: "Rôle d'un onduleur ?", r: "Convertir du continu en alternatif." },
        { q: "Rôle d'un redresseur ?", r: "Convertir de l'alternatif en continu." },
        { q: "Rôle d'un transformateur ?", r: "Changer la valeur d'une tension alternative." },
        { q: "Pourquoi transporter l'électricité en très haute tension ?", r: "À puissance égale, le courant est plus faible, donc les pertes R × I² aussi." },
        { q: "Tension et fréquence du réseau domestique ?", r: "230 V entre phase et neutre, 50 Hz." },
        { q: "Qu'est-ce qu'un réseau intelligent ?", r: "Un réseau qui utilise capteurs, compteurs communicants et stockage pour équilibrer production et consommation." },
        { q: "Réseau en étoile ou maillé ?", r: "Étoile : simple mais fragile. Maillé : plusieurs chemins, meilleure continuité de service." },
        { q: "Qu'est-ce que la cogénération ?", r: "Produire en même temps de l'électricité et de la chaleur à partir d'un même combustible." },
        { q: "Station de transfert d'énergie par pompage ?", r: "On remonte de l'eau quand l'électricité abonde, puis on la turbine quand on en a besoin." },
      ],
      quiz: [
        { q: "Batterie de 48 V et 100 A·h. Énergie stockée ?", choix: ["148 Wh", "4,8 kWh", "2,08 kWh", "0,48 kWh"], bonne: 1, expl: "E = 48 × 100 = 4 800 Wh = 4,8 kWh.", niv: 1 },
        { q: "On utilise 80 % de 4,8 kWh pour une charge de 480 W. Autonomie ?", choix: ["0,8 h", "10 h", "6,4 h", "8 h"], bonne: 3, expl: "0,8 × 4 800 = 3 840 Wh ; 3 840 / 480 = 8 h.", niv: 2 },
        { q: "Pour injecter l'électricité de panneaux solaires dans le réseau, il faut :", choix: ["un onduleur", "un redresseur", "un hacheur", "un réducteur"], bonne: 0, expl: "Les panneaux fournissent du continu ; le réseau est alternatif.", niv: 2 },
        { q: "Un chargeur de téléphone branché sur une prise contient d'abord :", choix: ["une génératrice", "un onduleur", "un redresseur", "un alternateur"], bonne: 2, expl: "Il transforme l'alternatif du secteur en continu pour la batterie.", niv: 1 },
        { q: "Quatre éléments de 12 V et 50 A·h montés en série. On obtient :", choix: ["12 V et 50 A·h", "12 V et 200 A·h", "48 V et 200 A·h", "48 V et 50 A·h"], bonne: 3, expl: "En série, les tensions s'additionnent ; la capacité ne change pas.", niv: 2 },
        { q: "On double la tension d'une ligne à puissance transportée égale. Les pertes par effet Joule sont :", choix: ["doublées", "divisées par 4", "divisées par 2", "inchangées"], bonne: 1, expl: "Le courant est divisé par 2, et les pertes R × I² par 2² = 4.", niv: 3 },
        { q: "La tension du réseau domestique français est :", choix: ["12 V continu", "400 kV, 50 Hz", "230 V, 50 Hz", "230 V, 60 Hz"], bonne: 2, expl: "400 kV, c'est le transport en très haute tension.", niv: 1 },
        { q: "Un réseau maillé a pour principal avantage :", choix: ["une meilleure continuité de service", "un coût de construction plus faible", "un nombre de câbles réduit", "une tension plus élevée"], bonne: 0, expl: "Si une ligne est coupée, l'énergie passe par un autre chemin.", niv: 2 },
        { q: "Un réseau intelligent fait recharger les voitures la nuit. Quel est l'objectif ?", choix: ["Réduire la tension du réseau", "Augmenter la consommation de pointe", "Étaler la consommation quand la demande est faible", "Supprimer le stockage"], bonne: 2, expl: "Production et consommation doivent s'équilibrer à chaque instant.", niv: 3 },
        { q: "Une station de transfert d'énergie par pompage stocke l'énergie sous forme :", choix: ["potentielle de pesanteur", "chimique", "thermique", "électromagnétique dans des bobines"], bonne: 0, expl: "L'eau est remontée dans un bassin en hauteur.", niv: 2 },
        { q: "La cogénération produit en même temps :", choix: ["de l'air comprimé et du gaz", "de l'hydrogène et de l'eau", "du froid et de la lumière", "de l'électricité et de la chaleur"], bonne: 3, expl: "La chaleur, souvent perdue dans une centrale, est utilisée.", niv: 1 },
        { q: "Un capteur autonome consomme 2 mW en moyenne. Pile de 3 V et 1 A·h. Autonomie environ ?", choix: ["15 h", "1 500 h", "150 h", "6 h"], bonne: 1, expl: "E = 3 × 1 = 3 Wh = 3 000 mWh ; 3 000 / 2 = 1 500 h, soit environ 2 mois.", niv: 3 },
      ] },
    { chapitre: 'sti2d-2i2d-10',
      fiche: `## Nature et codage de l'information

### Les types de signaux
- **Logique** (tout ou rien) : deux niveaux, 0 et 1, par exemple 0 V et 5 V. Un bouton, un fin de course.
- **Analogique** : la valeur varie de façon continue. La tension d'un capteur de température.
- **Numérique** : une suite de nombres, obtenus en mesurant le signal à intervalles réguliers (**échantillonnage**) et en codant chaque mesure (**quantification**).

### Lire un chronogramme
- Un **chronogramme** montre un signal en fonction du temps.
- **Période** T : durée d'un motif qui se répète. **Fréquence** f = 1 / T. Une période de 20 ms donne 50 Hz.
- **Rapport cyclique** d'un signal rectangulaire : durée à l'état haut / période. 3 ms à l'état haut sur 10 ms : 0,3, soit 30 %. Il sert à commander la vitesse d'un moteur ou la luminosité d'une LED (modulation de largeur d'impulsion).
- **Représentation fréquentielle** : un son grave a des fréquences basses, un son aigu des fréquences hautes ; l'oreille entend environ de 20 Hz à 20 kHz.

### Les bases de numération
- **Binaire** (base 2) : 0110 1001 = 64 + 32 + 8 + 1 = 105.
- **Hexadécimal** (base 16, chiffres 0 à 9 puis A à F) : un chiffre pour 4 bits. 0x69 = 6 × 16 + 9 = 105. 0xFF = 255.
- Avec **n bits**, on code **2^n** valeurs, de 0 à 2^n - 1. Un octet (8 bits) : 256 valeurs.
- Une valeur codée peut être une valeur réelle multipliée : si l'octet vaut 105 et représente 10 fois la vitesse, la vitesse vaut 10,5 tr/min.
- **Code ASCII** : chaque caractère est codé sur un octet (la lettre A vaut 65).
- **Code Gray** : deux valeurs voisines ne diffèrent que d'un bit ; utilisé dans les codeurs de position absolus.

### La conversion analogique-numérique
- Un **CAN** transforme une tension en nombre. Son **quantum** (résolution) vaut : **plage de tension / 2^n**.
- Exemple : 10 bits sur 0 à 5 V : 5 / 1 024 ≈ 4,9 mV.
- Pour une grandeur physique : si 0 à 5 V correspondent à 0 à 360°, la résolution vaut 360 / 1 024 ≈ 0,35°.
- Plus de bits, mesure plus fine. Le nombre lu N donne la tension : U = N × quantum.

### Les capteurs
- Un capteur donne une image électrique d'une grandeur physique. On le choisit selon l'**étendue de mesure**, la **résolution**, la **précision**, le type de sortie (logique, analogique, numérique) et l'alimentation.
- **Codeur incrémental** : des impulsions à chaque fraction de tour ; avec 1 000 points par tour, la résolution est 0,36°.

### À retenir pour le bac
- Signal logique, analogique, numérique.
- f = 1 / T ; rapport cyclique = durée haute / période.
- Conversions binaire, décimal, hexadécimal ; 2^n valeurs avec n bits.
- Quantum = plage / 2^n ; tension = N × quantum.
- Piège : un octet vaut 8 bits ; vérifier la plage du CAN.`,
      cartes: [
        { q: "Signal logique ?", r: "Deux niveaux seulement, 0 et 1, par exemple 0 V et 5 V." },
        { q: "Signal analogique ?", r: "Une grandeur qui varie de façon continue." },
        { q: "Signal numérique ?", r: "Une suite de nombres obtenus par échantillonnage et quantification." },
        { q: "Relation fréquence et période ?", r: "f = 1 / T." },
        { q: "Rapport cyclique ?", r: "Durée à l'état haut / période." },
        { q: "Que vaut 0110 1001 en décimal ?", r: "64 + 32 + 8 + 1 = 105." },
        { q: "Que vaut 0x69 en décimal ?", r: "6 × 16 + 9 = 105." },
        { q: "Combien de valeurs avec n bits ?", r: "2^n, de 0 à 2^n - 1." },
        { q: "Quantum d'un CAN ?", r: "Plage de tension / 2^n." },
        { q: "Tension correspondant au nombre N lu par un CAN ?", r: "U = N × quantum." },
        { q: "Intérêt du code Gray ?", r: "Deux valeurs voisines ne diffèrent que d'un bit : pas d'erreur de lecture entre deux positions." },
        { q: "Critères de choix d'un capteur ?", r: "Étendue de mesure, résolution, précision, type de sortie, alimentation." },
        { q: "Fréquences audibles ?", r: "Environ de 20 Hz à 20 kHz." },
      ],
      quiz: [
        { q: "Un bouton poussoir fournit un signal :", choix: ["logique", "analogique", "sinusoïdal", "audio"], bonne: 0, expl: "Deux états : appuyé ou relâché.", niv: 1 },
        { q: "Que vaut l'octet 0110 1001 en décimal ?", choix: ["69", "150", "105", "96"], bonne: 2, expl: "64 + 32 + 8 + 1 = 105. Écrit en hexadécimal, il vaut 0x69.", niv: 2 },
        { q: "Signal rectangulaire : 3 ms à l'état haut sur une période de 10 ms. Rapport cyclique ?", choix: ["33 %", "70 %", "3 %", "30 %"], bonne: 3, expl: "3 / 10 = 0,3.", niv: 2 },
        { q: "Un signal a une période de 20 ms. Sa fréquence est :", choix: ["20 Hz", "50 Hz", "0,05 Hz", "500 Hz"], bonne: 1, expl: "f = 1 / 0,020 = 50 Hz.", niv: 1 },
        { q: "Combien de valeurs différentes peut-on coder sur 10 bits ?", choix: ["20", "100", "1 024", "1 000"], bonne: 2, expl: "2^10 = 1 024, de 0 à 1 023.", niv: 2 },
        { q: "CAN de 10 bits, plage 0 à 5 V, relié à une girouette (0 à 360°). Résolution angulaire, environ ?", choix: ["1,4°", "36°", "3,6°", "0,35°"], bonne: 3, expl: "360 / 1 024 ≈ 0,35°.", niv: 3 },
        { q: "Un capteur de température qui fournit une tension variant de façon continue est :", choix: ["analogique", "logique", "tout ou rien", "binaire"], bonne: 0, expl: "Sa tension prend toutes les valeurs de sa plage.", niv: 1 },
        { q: "Que vaut 0xFF en décimal ?", choix: ["256", "255", "15", "100"], bonne: 1, expl: "15 × 16 + 15 = 255.", niv: 2 },
        { q: "Un octet reçu vaut 105 et représente 10 fois la vitesse des pales. Vitesse réelle ?", choix: ["1 050 tr/min", "10,5 tr/min", "105 tr/min", "0,105 tr/min"], bonne: 1, expl: "105 / 10 = 10,5 tr/min.", niv: 3 },
        { q: "CAN de 8 bits sur 0 à 5 V : il renvoie N = 128. Tension mesurée, environ ?", choix: ["2,5 V", "128 V", "0,64 V", "5 V"], bonne: 0, expl: "Quantum = 5 / 256 ≈ 0,0195 V ; 128 × 0,0195 = 2,5 V.", niv: 2 },
        { q: "Le code Gray est utilisé dans les codeurs de position car :", choix: ["le code ASCII l'utilise pour les lettres", "il compte plus vite que le binaire", "il prend moins de place en mémoire", "deux positions voisines ne diffèrent que d'un bit"], bonne: 3, expl: "Cela évite des valeurs fausses au passage d'une position à la suivante.", niv: 1 },
        { q: "On remplace un CAN de 8 bits par un CAN de 12 bits sur la même plage. Le quantum est divisé par :", choix: ["1,5", "4", "16", "12"], bonne: 2, expl: "2^12 / 2^8 = 2^4 = 16.", niv: 3 },
      ] },
    { chapitre: 'sti2d-2i2d-11',
      fiche: `## Communication et réseaux

### Les types de communication
- **Synchrone** : en continu, au fil de l'eau (flux vidéo, streaming). **Asynchrone** : à la demande, quand il y a quelque chose à envoyer.
- **Simplex** : un seul sens (une télécommande). **Half duplex** : les deux sens, chacun son tour (talkie-walkie). **Full duplex** : les deux sens en même temps (téléphone).
- **Maître-esclave** : le maître interroge, l'esclave répond. **Client-serveur** : le client envoie une requête, le serveur répond (navigateur et site web).

### Les liaisons série
- Les bits sont envoyés **l'un après l'autre** sur un fil. Exemples : liaison série UART, bus I2C, bus SPI, USB.
- Une **trame** contient souvent : un **bit de start**, les **données** (7 ou 8 bits), parfois un **bit de parité** pour détecter une erreur, un ou deux **bits de stop**.
- **Débit** en bit/s (bauds pour une liaison série simple). **Durée de transmission** = nombre de bits / débit.
- Exemple : 10 bits par octet transmis (start, 8 données, stop) à 9 600 bit/s : 960 octets par seconde.

### Les réseaux informatiques
- Un **commutateur** (switch) relie les appareils d'un même réseau local ; il envoie chaque trame vers la bonne prise grâce aux **adresses MAC**.
- Un **routeur** relie des réseaux différents (le réseau local et internet) grâce aux **adresses IP**.
- **Adresse IPv4** : 4 octets, par exemple 192.168.1.10. Le **masque** /24 (255.255.255.0) indique que les 3 premiers octets désignent le réseau et le dernier la machine.
- Dans un réseau /24 : 256 adresses, dont 254 utilisables pour des machines (la première désigne le réseau, la dernière sert à la diffusion). Si 6 adresses sont prises, il en reste 248.
- **Adressage statique** : l'adresse est fixée à la main. **Dynamique** : un serveur DHCP la distribue automatiquement.

### Les protocoles
- **TCP** : connexion établie, accusés de réception, données remises dans l'ordre et sans perte ; plus lent.
- **UDP** : pas de connexion ni d'accusé ; plus rapide, utilisé pour la vidéo en direct ou les jeux.
- **HTTP** : pages web (requêtes GET et POST). **FTP** : transfert de fichiers.
- Un **socket** est le point de communication d'un programme : une adresse IP et un **port**.

### Décrire les échanges
- Le **diagramme de séquence** montre les messages entre acteurs et composants dans l'ordre du temps.
- Un **système temps réel** doit répondre dans un délai garanti : temps de cycle d'un automate, **interruption** qui fait réagir immédiatement le microcontrôleur à un événement.

### À retenir pour le bac
- Trame série : start, données, parité éventuelle, stop.
- Durée = nombre de bits / débit, sans oublier les bits de start et de stop.
- Switch : réseau local, adresses MAC ; routeur : entre réseaux, adresses IP.
- Réseau /24 : 254 adresses utilisables.
- Piège : TCP est fiable mais plus lent ; UDP est rapide sans garantie.`,
      cartes: [
        { q: "Half duplex ou full duplex ?", r: "Half : les deux sens chacun son tour. Full : les deux sens en même temps." },
        { q: "Modèle client-serveur ?", r: "Le client envoie une requête, le serveur répond." },
        { q: "Contenu d'une trame série ?", r: "Bit de start, données, bit de parité éventuel, bit(s) de stop." },
        { q: "Rôle du bit de parité ?", r: "Détecter une erreur de transmission sur un bit." },
        { q: "Durée de transmission ?", r: "Nombre de bits transmis / débit en bit/s." },
        { q: "Rôle d'un switch ?", r: "Relier les appareils d'un réseau local, grâce aux adresses MAC." },
        { q: "Rôle d'un routeur ?", r: "Relier des réseaux différents, grâce aux adresses IP." },
        { q: "Signification du masque /24 ?", r: "Les 3 premiers octets désignent le réseau, le dernier la machine." },
        { q: "Adresses utilisables dans un réseau /24 ?", r: "254 : on retire l'adresse du réseau et celle de diffusion." },
        { q: "Adressage statique ou dynamique ?", r: "Statique : fixé à la main. Dynamique : distribué par un serveur DHCP." },
        { q: "TCP ou UDP ?", r: "TCP : fiable, ordonné, plus lent. UDP : rapide, sans accusé de réception." },
        { q: "Qu'est-ce qu'un socket ?", r: "Le point de communication d'un programme : une adresse IP et un port." },
        { q: "Qu'est-ce qu'une interruption ?", r: "Un signal qui fait réagir immédiatement le microcontrôleur à un événement." },
      ],
      quiz: [
        { q: "Un talkie-walkie fonctionne en :", choix: ["streaming", "full duplex", "simplex", "half duplex"], bonne: 3, expl: "On parle chacun son tour, dans les deux sens.", niv: 1 },
        { q: "Liaison série : 10 bits par octet, débit 9 600 bit/s. Combien d'octets par seconde ?", choix: ["1 200", "960", "9 600", "96 000"], bonne: 1, expl: "9 600 / 10 = 960. 1 200 oublie les bits de start et de stop.", niv: 2 },
        { q: "Combien d'adresses de machines sont utilisables dans un réseau /24 ?", choix: ["255", "256", "254", "24"], bonne: 2, expl: "256 adresses, moins celle du réseau et celle de diffusion.", niv: 2 },
        { q: "Pour relier le réseau local d'un parc éolien à internet, il faut :", choix: ["un routeur", "un switch", "un capteur", "un onduleur"], bonne: 0, expl: "Le routeur relie deux réseaux différents.", niv: 1 },
        { q: "Réseau 192.168.1.0/24 avec 6 adresses déjà prises. Combien en reste-t-il pour de nouvelles machines ?", choix: ["250", "248", "254", "18"], bonne: 1, expl: "254 - 6 = 248.", niv: 2 },
        { q: "Pour une vidéo de surveillance en direct, quel protocole de transport convient le mieux ?", choix: ["FTP, car il envoie des fichiers", "TCP, car il est plus rapide", "UDP, rapide, une image perdue est vite remplacée", "HTTP, car il n'utilise pas IP"], bonne: 2, expl: "En direct, attendre une image perdue n'a pas de sens.", niv: 3 },
        { q: "Dans une trame série, le bit de start sert à :", choix: ["fixer le débit de la liaison série", "vérifier les erreurs", "donner l'adresse IP", "signaler le début de la trame"], bonne: 3, expl: "La parité sert à détecter une erreur.", niv: 1 },
        { q: "Un switch dirige les trames grâce :", choix: ["aux adresses MAC", "aux adresses IP", "aux numéros de port", "aux bits de parité"], bonne: 0, expl: "Il travaille dans le réseau local.", niv: 2 },
        { q: "Un fichier de 1,2 Mo est envoyé à 8 Mbit/s. Durée minimale ?", choix: ["1,2 s", "0,15 s", "6,7 s", "9,6 s"], bonne: 0, expl: "1,2 Mo = 9,6 Mbit ; 9,6 / 8 = 1,2 s.", niv: 3 },
        { q: "Un navigateur demande une page à un serveur web. C'est le modèle :", choix: ["pair à pair", "maître-esclave", "simplex", "client-serveur"], bonne: 3, expl: "Le navigateur est le client.", niv: 2 },
        { q: "Un serveur DHCP sert à :", choix: ["chiffrer les données", "distribuer les adresses IP", "mesurer le débit", "alimenter les appareils par le câble réseau"], bonne: 1, expl: "C'est l'adressage dynamique.", niv: 1 },
        { q: "Un microcontrôleur doit réagir tout de suite à un arrêt d'urgence. Quelle solution ?", choix: ["Un envoi de la commande par courriel", "Une lecture du bouton une fois par minute", "Une entrée gérée par interruption", "Une simple LED de signalement"], bonne: 2, expl: "L'interruption suspend le programme pour traiter l'événement immédiatement.", niv: 3 },
      ] },
    { chapitre: 'sti2d-2i2d-12',
      fiche: `## Systèmes régulés et asservis

### Régulation ou asservissement ?
- Les deux fonctionnent en **boucle fermée** : un capteur mesure la sortie et le système corrige l'écart.
- **Régulation** : la consigne est **fixe** ; on lutte contre les **perturbations**. Exemple : maintenir 20 °C dans une pièce malgré une fenêtre ouverte.
- **Asservissement** : la consigne **change** et la sortie doit la suivre. Exemple : un panneau solaire qui suit le soleil, une nacelle d'éolienne qui suit la direction du vent.
- En **boucle ouverte**, il n'y a pas de mesure de la sortie : le système ne voit pas ses erreurs.

### La boucle
- **Consigne** : la valeur voulue.
- **Comparateur** : il calcule l'**écart** = consigne - mesure.
- **Correcteur** : il transforme l'écart en commande (dans le microcontrôleur ou l'automate).
- **Préactionneur et actionneur** : variateur et moteur, vanne, résistance chauffante.
- **Capteur** : il mesure la sortie et renvoie la mesure au comparateur.
- **Perturbation** : une action extérieure qui écarte la sortie (vent, charge, température extérieure).

### Les performances
- **Précision** : l'**erreur statique** est l'écart restant en régime établi. Consigne 50 °C, valeur finale 48 °C : 2 °C, soit 4 % de la consigne.
- **Rapidité** : le **temps de réponse à 5 %** est l'instant à partir duquel la sortie reste à moins de 5 % de sa valeur finale.
- **Stabilité** : la sortie se stabilise ; un **dépassement** modéré est parfois accepté. Dépassement = (maximum - valeur finale) / valeur finale.
- On compare chaque performance au cahier des charges.

### Le correcteur
- **Tout ou rien** (thermostat simple) : marche si la mesure est sous la consigne, arrêt au-dessus. Simple, mais la grandeur oscille autour de la consigne. Une **hystérésis** (par exemple marche sous 19,5 °C et arrêt au-dessus de 20,5 °C) évite des commutations trop fréquentes.
- **Proportionnel** : commande = Kp × écart. Un Kp plus grand rend le système plus rapide et plus précis, mais peut créer des dépassements et des oscillations.
- **Intégral** : il annule l'erreur statique en accumulant l'écart.
- Régler un correcteur, c'est trouver un **compromis** entre précision, rapidité et stabilité.

### Le point de fonctionnement
- Le but est de **maintenir le système au plus près d'un point de fonctionnement** : une vitesse, une température, un débit, une orientation.
- Exemple d'une éolienne : la nacelle s'oriente face au vent grâce à une girouette ; quand l'écart d'angle dépasse quelques degrés, le moteur d'orientation tourne la nacelle.

### À retenir pour le bac
- Régulation : consigne fixe, perturbations ; asservissement : consigne variable à suivre.
- Repérer consigne, comparateur, correcteur, actionneur, capteur et perturbation.
- Erreur statique, temps de réponse à 5 %, dépassement : calculer et comparer au cahier des charges.
- Tout ou rien avec hystérésis ; proportionnel ; intégral.
- Piège : un gain trop fort rend le système instable.`,
      cartes: [
        { q: "Régulation ?", r: "Consigne fixe : le système compense les perturbations (chauffage à 20 °C)." },
        { q: "Asservissement ?", r: "Consigne variable : la sortie doit la suivre (suiveur solaire)." },
        { q: "Calcul de l'écart ?", r: "Écart = consigne - mesure." },
        { q: "Rôle du capteur dans la boucle ?", r: "Mesurer la sortie et renvoyer la mesure au comparateur." },
        { q: "Qu'est-ce qu'une perturbation ?", r: "Une action extérieure qui écarte la sortie de la consigne." },
        { q: "Erreur statique ?", r: "L'écart entre consigne et sortie qui reste en régime établi." },
        { q: "Temps de réponse à 5 % ?", r: "L'instant à partir duquel la sortie reste à moins de 5 % de sa valeur finale." },
        { q: "Calcul du dépassement ?", r: "(Maximum - valeur finale) / valeur finale." },
        { q: "Correcteur tout ou rien ?", r: "Marche sous la consigne, arrêt au-dessus : simple, mais la grandeur oscille." },
        { q: "Rôle d'une hystérésis ?", r: "Éviter des commutations trop fréquentes autour de la consigne." },
        { q: "Effet d'un gain proportionnel plus grand ?", r: "Plus rapide et plus précis, mais plus de dépassement et un risque d'instabilité." },
        { q: "Rôle d'un correcteur intégral ?", r: "Annuler l'erreur statique." },
        { q: "Boucle ouverte ?", r: "Pas de mesure de la sortie : le système ne corrige pas ses erreurs." },
      ],
      quiz: [
        { q: "Maintenir une pièce à 20 °C malgré une fenêtre ouverte, c'est :", choix: ["une boucle ouverte", "un asservissement", "une régulation", "une conversion"], bonne: 2, expl: "La consigne est fixe ; la fenêtre ouverte est une perturbation.", niv: 1 },
        { q: "Consigne 50 °C ; valeur finale 48 °C. Erreur statique en pourcentage de la consigne ?", choix: ["4 %", "2 %", "96 %", "48 %"], bonne: 0, expl: "2 / 50 = 0,04 = 4 %.", niv: 2 },
        { q: "Valeur finale 200 tr/min, maximum atteint 230 tr/min. Dépassement ?", choix: ["30 %", "15 %", "13 %", "87 %"], bonne: 1, expl: "(230 - 200) / 200 = 0,15.", niv: 2 },
        { q: "Dans une boucle fermée, l'élément qui calcule l'écart s'appelle :", choix: ["la perturbation", "le capteur", "l'actionneur", "le comparateur"], bonne: 3, expl: "Écart = consigne - mesure.", niv: 1 },
        { q: "Un panneau solaire qui suit le soleil toute la journée est :", choix: ["un système asservi", "un système en boucle ouverte", "un système régulé à consigne fixe", "un convertisseur"], bonne: 0, expl: "La consigne (position du soleil) change sans cesse.", niv: 2 },
        { q: "On augmente beaucoup le gain d'un correcteur proportionnel. Quel risque ?", choix: ["Une consigne impossible à régler", "Un système plus lent", "Une erreur statique plus grande", "Des oscillations, voire une instabilité"], bonne: 3, expl: "Plus rapide et plus précis, mais de moins en moins stable.", niv: 3 },
        { q: "Le temps de réponse à 5 % caractérise :", choix: ["la stabilité", "la précision", "la rapidité", "le rendement"], bonne: 2, expl: "La précision se lit avec l'erreur statique.", niv: 1 },
        { q: "Thermostat : marche sous 19,5 °C, arrêt au-dessus de 20,5 °C. Ce décalage s'appelle :", choix: ["un dépassement", "une hystérésis", "une erreur statique", "un gain"], bonne: 1, expl: "Il évite que le chauffage s'allume et s'éteigne sans arrêt.", niv: 2 },
        { q: "Exigence : erreur statique de 1 % au plus. Consigne 300 ; valeur finale 294. Conclusion ?", choix: ["Non respectée : l'erreur vaut 98 %", "Respectée : l'erreur vaut 0,02 %", "Respectée : l'erreur vaut 6 %", "Non respectée : l'erreur vaut 2 %"], bonne: 3, expl: "300 - 294 = 6 ; 6 / 300 = 0,02 = 2 %, supérieur à 1 %.", niv: 3 },
        { q: "Un correcteur intégral permet surtout :", choix: ["de remplacer le capteur", "d'annuler l'erreur statique", "de supprimer la consigne", "une baisse du prix"], bonne: 1, expl: "Il accumule l'écart tant qu'il n'est pas nul.", niv: 2 },
        { q: "Dans le chauffage d'une maison, la température extérieure qui baisse est :", choix: ["la mesure", "la consigne", "une perturbation", "le correcteur du chauffage"], bonne: 2, expl: "Elle écarte la température intérieure de la consigne.", niv: 1 },
        { q: "Pourquoi un grille-pain à minuterie ne brûle-t-il pas moins le pain quand celui-ci est déjà sec ?", choix: ["Il fonctionne en boucle ouverte, sans mesure du résultat", "Son correcteur intégral est trop fort", "Sa consigne change pendant la cuisson", "Son capteur mesure mal la couleur"], bonne: 0, expl: "Sans capteur, il ne voit pas l'état du pain : il chauffe pendant le temps réglé.", niv: 3 },
      ] },
  ],

  methode: [
    { id: 'sti2d-2i2d-m1', mat: 'sti2d-2i2d', titre: "Justifier un projet au regard du développement durable",
      formules: ["Calculer l'énergie produite sur une année en tenant compte du facteur de charge", "Calculer le nombre de foyers alimentés", "Justifier l'intérêt du projet au regard des enjeux climatiques", "Calculer la masse de CO2 évitée"],
      vu: ["Métropole 2025, partie commune (ferme éolienne) : questions 2.1 à 2.3", "Question d'ouverture fréquente en début de partie commune"], pts: "1 à 3 points",
      attendu: "Un calcul d'énergie avec la formule et les unités (puissance × durée × facteur de charge), une conversion propre en MWh ou kWh, un résultat comparé aux besoins, puis une justification rédigée qui cite au moins un chiffre calculé et un enjeu (émissions de CO2, ressource renouvelable, production locale).",
      etapes: ["Relever la puissance, la durée (8 760 h pour un an) et le facteur de charge", "Calculer l'énergie : E = P × durée × facteur de charge", "Comparer aux besoins : nombre de foyers ou part des besoins couverte", "Calculer le CO2 évité si un facteur d'émission est donné", "Rédiger deux ou trois phrases de justification avec les chiffres"],
      mots: ["facteur de charge", "énergie renouvelable", "émissions de CO2", "production locale", "besoins", "enjeu climatique"],
      pieges: ["Oublier le facteur de charge et trouver une énergie bien trop grande", "Mélanger kWh et MWh", "Justifier sans aucun chiffre", "Parler d'énergie gratuite sans évoquer la fabrication des équipements"],
      cas: "Une centrale solaire fictive sur les toits d'un collège : 100 kW de puissance nominale, facteur de charge 0,14. Un foyer consomme en moyenne 3,2 MWh par an d'électricité spécifique. Facteur d'émission évité : 0,06 kg de CO2 par kWh.",
      question: "Calculer l'énergie produite en un an, le nombre de foyers équivalents, la masse de CO2 évitée, puis justifier l'intérêt du projet.",
      modele: `Énergie annuelle : E = 100 × 8 760 × 0,14 ≈ 122 640 kWh, soit environ 123 MWh.

Foyers équivalents : 122,6 / 3,2 ≈ 38 foyers.

CO2 évité : 122 640 × 0,06 ≈ 7 360 kg, soit environ 7,4 tonnes par an.

Justification : la centrale produit chaque année l'électricité d'environ 38 foyers à partir d'une énergie renouvelable, sur un toit déjà construit, sans occuper de terrain. Elle évite environ 7 tonnes de CO2 par an et rapproche la production de la consommation.`,
      grille: ["La formule avec le facteur de charge est écrite", "Les unités et conversions sont justes", "Le résultat est comparé aux besoins", "La justification cite un chiffre et un enjeu"] },

    { id: 'sti2d-2i2d-m2', mat: 'sti2d-2i2d', titre: "Montrer qu'un projet est économiquement viable",
      formules: ["Compléter le tableau des dépenses et des recettes sur une année", "En déduire le nombre d'années nécessaire pour que l'installation devienne rentable", "Conclure sur la validité financière du projet"],
      vu: ["Métropole 2025, partie commune : partie 3 (ferme éolienne)", "Fréquent dès qu'un sujet porte sur une installation d'énergie ou une rénovation"], pts: "1 à 2 points",
      attendu: "Les dépenses et recettes annuelles calculées, le gain net annuel, puis le temps de retour = investissement / gain net annuel, et une conclusion qui le compare à la durée de vie de l'installation.",
      etapes: ["Calculer les recettes annuelles (énergie vendue × prix, économies réalisées)", "Calculer les dépenses annuelles (maintenance, assurance)", "Faire la différence : gain net annuel", "Diviser l'investissement (moins les aides) par le gain net annuel", "Comparer à la durée de vie et conclure"],
      mots: ["investissement", "recettes", "dépenses de maintenance", "gain net annuel", "temps de retour", "durée de vie", "rentable"],
      pieges: ["Oublier les dépenses de maintenance", "Diviser par les recettes au lieu du gain net", "Oublier les aides ou les compter deux fois", "Conclure sans comparer à la durée de vie"],
      cas: "Une chaufferie à bois fictive pour une école : investissement 80 000 €, aide de 20 000 €. Elle fait économiser 9 000 € de gaz par an, mais coûte 2 000 € de bois et 1 000 € de maintenance par an. Durée de vie : 25 ans.",
      question: "Calculer le gain net annuel et le temps de retour, puis conclure sur la viabilité.",
      modele: `Gain net annuel : 9 000 - 2 000 - 1 000 = 6 000 € par an.

Coût restant à financer : 80 000 - 20 000 = 60 000 €.

Temps de retour : 60 000 / 6 000 = 10 ans.

Conclusion : l'installation est remboursée en 10 ans pour une durée de vie de 25 ans ; elle rapporte ensuite environ 6 000 € par an pendant 15 ans. Le projet est viable.`,
      grille: ["Le gain net tient compte des dépenses", "Le temps de retour est juste", "La conclusion compare à la durée de vie"] },

    { id: 'sti2d-2i2d-m3', mat: 'sti2d-2i2d', titre: "Compléter une chaîne de puissance et calculer un rendement global",
      formules: ["Préciser les différentes formes d'énergie dans les étiquettes", "Tracer le flux d'énergie principal", "Compléter la chaîne de puissance en précisant le rendement de chaque élément", "Calculer le rendement global", "Conclure sur l'estimation du bureau d'études"],
      vu: ["Métropole 2025, partie commune : questions 4.1 à 4.7 (chaîne de puissance d'une éolienne)", "Présent dans la quasi-totalité des parties communes"], pts: "2 à 4 points",
      attendu: "Chaque composant placé dans sa fonction (alimenter, distribuer, convertir, transmettre), la forme d'énergie nommée à chaque étape, le rendement global égal au produit des rendements, puis la puissance utile ou absorbée calculée et comparée à la valeur annoncée.",
      etapes: ["Suivre l'énergie depuis la source jusqu'à l'effecteur et nommer chaque forme", "Placer chaque composant dans sa fonction", "Multiplier les rendements de la chaîne", "Calculer la puissance utile = puissance d'entrée × rendement global, ou l'inverse", "Comparer au cahier des charges ou à l'estimation et conclure"],
      mots: ["alimenter", "distribuer", "convertir", "transmettre", "énergie mécanique de rotation", "énergie électrique", "rendement global", "pertes"],
      pieges: ["Additionner les rendements", "Confondre un convertisseur électrique (fonction distribuer) et un moteur (fonction convertir)", "Oublier une étape de la chaîne", "Conclure sans chiffre"],
      cas: "Une éolienne fictive reçoit du vent une puissance de 6 MW. Rendements : rotor 0,45 ; multiplicateur 0,96 ; génératrice 0,95 ; convertisseur 0,97. Le bureau d'études annonce 2,4 MW électriques.",
      question: "Nommer les formes d'énergie, calculer le rendement global et la puissance électrique, puis conclure sur l'annonce du bureau d'études.",
      modele: `Formes d'énergie : cinétique du vent, mécanique de rotation (rotor, puis multiplicateur), électrique (génératrice), électrique adaptée au réseau (convertisseur).

Rendement global : 0,45 × 0,96 × 0,95 × 0,97 ≈ 0,398.

Puissance électrique : 6 × 0,398 ≈ 2,39 MW.

Conclusion : on trouve environ 2,39 MW, très proche des 2,4 MW annoncés (écart d'environ 0,5 %) : l'estimation du bureau d'études est validée.`,
      grille: ["Les formes d'énergie sont justes", "Le rendement global est un produit", "La puissance est calculée avec son unité", "La conclusion compare à la valeur annoncée"] },

    { id: 'sti2d-2i2d-m4', mat: 'sti2d-2i2d', titre: "Vérifier la tenue mécanique à partir d'une simulation",
      formules: ["Indiquer à quelle sollicitation est soumise la pièce", "Sur la simulation, entourer la zone la plus sollicitée", "Calculer le coefficient de sécurité", "Préciser si la pièce est correctement dimensionnée", "Proposer deux pistes d'amélioration"],
      vu: ["Métropole 2025, partie commune : questions 5.1 à 5.6 (mât d'éolienne)", "Fréquent en partie commune et en AC et ITEC"], pts: "2 à 3 points",
      attendu: "La sollicitation nommée (traction, compression, flexion), la valeur maximale lue sur la carte de contraintes avec son unité, le coefficient de sécurité s = Re / σ max comparé à la valeur imposée, une conclusion, puis des pistes réalistes : changer la section, la forme, le matériau, l'épaisseur.",
      etapes: ["Identifier la sollicitation d'après les efforts (vent latéral : flexion)", "Lire l'échelle de couleurs et relever la contrainte maximale", "Calculer s = Re / σ max", "Comparer à la valeur imposée et conclure : sous-dimensionné, correct ou surdimensionné", "Proposer des améliorations qui économisent la matière là où elle est peu sollicitée"],
      mots: ["flexion", "contrainte maximale", "limite élastique", "coefficient de sécurité", "surdimensionné", "section", "forme conique"],
      pieges: ["Lire une valeur sur la mauvaise échelle de couleurs", "Inverser le rapport Re / σ", "Dire qu'un coefficient très grand est forcément bon : c'est souvent du gaspillage de matière", "Proposer une amélioration sans lien avec la zone sollicitée"],
      cas: "Un poteau d'éclairage fictif en acier (Re = 235 MPa) est poussé par le vent. La simulation donne une contrainte maximale de 40 MPa au pied du poteau. Le cahier des charges impose un coefficient de sécurité d'au moins 2.",
      question: "Nommer la sollicitation, calculer le coefficient de sécurité, conclure, puis proposer deux pistes d'amélioration.",
      modele: `Sollicitation : le vent pousse latéralement le haut du poteau ; il est sollicité en flexion, avec la contrainte maximale au pied.

Coefficient de sécurité : s = 235 / 40 ≈ 5,9.

Conclusion : 5,9 est bien supérieur à 2 : le poteau résiste, mais il est surdimensionné.

Pistes : réduire l'épaisseur du tube, ou donner au poteau une forme conique (plus large en bas, plus fin en haut) pour placer la matière là où la flexion est la plus forte. On économise de l'acier, donc du coût et des émissions de CO2.`,
      grille: ["La sollicitation est juste et justifiée", "Le coefficient de sécurité est juste", "La conclusion compare à la valeur imposée", "Les deux pistes sont réalistes et justifiées"] },

    { id: 'sti2d-2i2d-m5', mat: 'sti2d-2i2d', titre: "Adresser un réseau et décoder une donnée",
      formules: ["Proposer pour chaque équipement une adresse IP du réseau local", "Indiquer le nombre d'adresses encore disponibles", "Calculer la valeur de cet octet en décimal", "Conclure sur la possibilité de surveiller les installations"],
      vu: ["Métropole 2025, partie commune : questions 6.1 à 6.4 (surveillance des éoliennes)", "Fréquent en partie commune et en SIN"], pts: "1 à 3 points",
      attendu: "Des adresses dans le bon réseau (même début, d'après le masque), différentes de celles déjà prises, de l'adresse du réseau et de l'adresse de diffusion ; le décompte des adresses restantes justifié ; la conversion binaire ou hexadécimal vers décimal détaillée ; la valeur physique retrouvée et comparée à une exigence.",
      etapes: ["Lire l'adresse du réseau et le masque (/24 : les 3 premiers octets sont fixes)", "Choisir des adresses libres entre .1 et .254", "Compter les adresses restantes : 254 moins celles déjà utilisées", "Convertir l'octet en décimal en écrivant les poids 128, 64, 32, 16, 8, 4, 2, 1", "Appliquer le facteur d'échelle donné, puis conclure"],
      mots: ["adresse IP", "masque", "réseau local", "adresse de diffusion", "passerelle", "octet", "binaire", "résolution"],
      pieges: ["Changer les trois premiers octets d'un réseau /24", "Attribuer l'adresse .0 ou .255", "Oublier la passerelle déjà prise", "Oublier le facteur d'échelle de la donnée"],
      cas: "Le réseau fictif d'une station d'épuration est 192.168.5.0/24. Le routeur a l'adresse 192.168.5.1. On doit raccorder 4 automates. Un octet reçu vaut 0101 0110 et représente 10 fois le débit en m³/h ; le débit maximal attendu est 20 m³/h, mesuré au dixième.",
      question: "Proposer les adresses des automates, compter les adresses restantes, décoder l'octet et conclure.",
      modele: `Adresses proposées : 192.168.5.10, 192.168.5.11, 192.168.5.12 et 192.168.5.13 (même réseau, adresses libres).

Adresses restantes : 254 utilisables - 1 (routeur) - 4 (automates) = 249.

Octet : 0101 0110 = 64 + 16 + 4 + 2 = 86, donc débit = 86 / 10 = 8,6 m³/h.

Conclusion : un octet va jusqu'à 255, soit 25,5 m³/h au dixième près : cela couvre le débit maximal de 20 m³/h avec la résolution demandée.`,
      grille: ["Les adresses sont dans le bon réseau et libres", "Le nombre d'adresses restantes est justifié", "La conversion est détaillée et juste", "La conclusion utilise la plage et la résolution"] },

    { id: 'sti2d-2i2d-m6', mat: 'sti2d-2i2d', titre: "Rédiger une conclusion argumentée",
      formules: ["Conclure sur…", "Justifier le choix de…", "Argumenter sur la pertinence de la solution", "Répondre à la problématique de la partie"],
      vu: ["À la fin de presque chaque partie des sujets récents", "La note de service de 2026 réserve 2 points sur 20 à la maîtrise de la langue"], pts: "souvent 0,5 à 1 point par conclusion, plus les 2 points de maîtrise de la langue",
      attendu: "Une réponse claire à la question posée (oui ou non), appuyée sur les résultats chiffrés des questions précédentes et sur l'exigence du cahier des charges, en phrases complètes, avec le vocabulaire technique juste et sans fautes.",
      etapes: ["Relire la problématique de la partie", "Rassembler les résultats chiffrés trouvés avant", "Comparer chacun à l'exigence correspondante", "Écrire la réponse : oui ou non, puis parce que…", "Ajouter une limite ou une amélioration si c'est pertinent, puis relire l'orthographe"],
      mots: ["exigence", "cahier des charges", "conforme", "marge", "écart", "donc", "car", "en revanche"],
      pieges: ["Conclure sans chiffre", "Répondre à une autre question que celle posée", "Écrire en style télégraphique", "Contredire un résultat trouvé plus haut sans l'expliquer"],
      cas: "Un sujet fictif demande si un vélo de livraison convient. On a trouvé : autonomie 52 km pour une exigence de 40 km ; couple disponible 40 N·m pour un besoin de 45 N·m dans la côte la plus raide.",
      question: "Rédiger la conclusion de la partie : le vélo convient-il ?",
      modele: `Le vélo ne convient pas entièrement. Son autonomie de 52 km dépasse l'exigence de 40 km, avec une marge de 30 %. En revanche, son moteur ne fournit que 40 N·m alors que la côte la plus raide en demande 45 N·m : l'exigence de franchissement n'est pas respectée. Il faut choisir un moteur plus puissant ou un réducteur de rapport plus faible, puis vérifier à nouveau l'autonomie.`,
      grille: ["La réponse à la question est claire", "Chaque argument cite un chiffre et l'exigence", "Les phrases sont complètes et le vocabulaire juste", "Une amélioration est proposée"] },
  ],

  sujets: [
    { id: 'sti2d-2i2d-s1', matiere: 'sti2d-2i2d', titre: "Sujet d'entraînement : la serre maraîchère Verdoyance (fictive)", duree: 150,
      enonce: `Sujet d'entraînement inventé pour réviser : la serre, l'exploitation et tous les chiffres sont fictifs. Il a la forme de la partie commune de l'écrit (durée indicative 2 h 30) : l'analyse d'un produit pluritechnologique selon la matière, l'énergie et l'information. Il est noté ici sur 20, dont 2 points pour la maîtrise de la langue. À l'examen, une partie propre à l'enseignement spécifique s'y ajoute.

PRÉSENTATION

Un maraîcher veut remplacer sa vieille serre chauffée au gaz par la serre Verdoyance : 12 kW de panneaux solaires sur le toit d'un hangar voisin, une batterie, une pompe à chaleur pour le chauffage, un arrosage automatique, des fenêtres de toit motorisées et des capteurs connectés.

Extrait du cahier des charges :
- Exigence 1 : produire chaque année au moins autant d'électricité que la serre en consomme (11 500 kWh).
- Exigence 2 : être rentable en moins de 12 ans.
- Exigence 3 : assurer 2 jours d'arrosage et de ventilation sans soleil.
- Exigence 4 : ouvrir une fenêtre de toit en moins de 30 s.
- Exigence 5 : les arceaux de la serre ont un coefficient de sécurité d'au moins 2.
- Exigence 6 : mesurer l'humidité du sol au 0,1 % près.

PARTIE 1 — Le projet est-il utile pour l'environnement ? (3 points)

Les panneaux produisent en moyenne 1 150 kWh par an pour chaque kW installé.
Q1.1. Calculer la production annuelle des panneaux. L'exigence 1 est-elle respectée ? Calculer le surplus.
Q1.2. L'ancienne serre consommait 9 000 kWh de gaz par an, avec un facteur d'émission de 0,23 kg de CO2 par kWh. Calculer la masse de CO2 évitée chaque année en supprimant le chauffage au gaz.
Q1.3. Justifier en quelques lignes l'intérêt du projet au regard des enjeux climatiques.

PARTIE 2 — Le projet est-il rentable ? (2 points)

Investissement : 30 000 €. Aide publique : 6 000 €. Gain net annuel estimé (gaz et électricité évités, vente du surplus, maintenance déduite) : 2 400 €. Durée de vie : 25 ans.
Q2.1. Calculer le temps de retour sur investissement et conclure sur l'exigence 2.

PARTIE 3 — L'énergie stockée suffit-elle ? (4 points)

La pompe d'arrosage fournit un débit de 2 m³/h sous une pression de 3 bar (1 bar = 10^5 Pa). Rendements : variateur 0,95 ; moteur 0,8 ; pompe 0,6.
Q3.1. Compléter la chaîne de puissance de l'arrosage (batterie, variateur, moteur, pompe) avec les fonctions alimenter, distribuer, convertir et transmettre, et nommer la forme d'énergie à la sortie de chaque élément.
Q3.2. Calculer la puissance hydraulique fournie par la pompe, le rendement global de la chaîne, puis la puissance électrique absorbée.
Q3.3. La pompe fonctionne 2 h par jour ; la ventilation et les capteurs consomment 150 W pendant 12 h par jour. Calculer l'énergie consommée par jour.
Q3.4. La batterie est de 48 V et 200 A·h ; on n'utilise que 80 % de son énergie. Calculer l'autonomie en jours et conclure sur l'exigence 3.

PARTIE 4 — La structure et les ouvrants conviennent-ils ? (4 points)

Chaque fenêtre de toit est ouverte par un vérin électrique : un moteur à 1 500 tr/min, un réducteur de rapport 1/10 et une vis de pas 5 mm. La course nécessaire est de 300 mm.
Q4.1. Calculer la vitesse de rotation de la vis, puis la vitesse d'avance de l'écrou en mm/s.
Q4.2. Calculer la durée d'ouverture et conclure sur l'exigence 4.
Une simulation d'un arceau en acier (Re = 235 MPa), sous la neige et le vent, donne une contrainte maximale de 60 MPa à la base de l'arceau.
Q4.3. Calculer le coefficient de sécurité et conclure sur l'exigence 5.
Q4.4. Proposer une modification de l'arceau qui réduise son impact environnemental, en la justifiant.

PARTIE 5 — Les informations sont-elles fiables ? (5 points)

Le capteur d'humidité du sol fournit 0 V pour 0 % et 3,3 V pour 100 %. Sa tension est lue par un convertisseur analogique-numérique de 12 bits sur la plage 0 à 3,3 V.
Q5.1. Calculer le quantum du convertisseur en mV, puis la résolution en % d'humidité. Conclure sur l'exigence 6.
Q5.2. Le convertisseur renvoie la valeur hexadécimale 0x7D0. La convertir en décimal, puis calculer l'humidité. L'arrosage démarre sous 40 % : démarre-t-il ?
Q5.3. Les capteurs sont reliés au réseau 192.168.10.0/24, dont le routeur a l'adresse 192.168.10.1. Proposer les adresses des 3 premiers capteurs. Une fois 20 capteurs installés, combien reste-t-il d'adresses disponibles ?
Q5.4. Le chauffage maintient 18 °C la nuit, quel que soit le froid extérieur. S'agit-il d'une régulation ou d'un asservissement ? Une nuit, la température se stabilise à 17,4 °C. Calculer l'erreur statique ; le cahier des charges tolère 1 °C au plus. Conclure.

Maîtrise de la langue (2 points) : rédaction, orthographe, vocabulaire technique.`,
      corrige: `PARTIE 1

Q1.1. Production : 12 × 1 150 = 13 800 kWh par an. C'est plus que les 11 500 kWh consommés : l'exigence 1 est respectée. Surplus : 13 800 - 11 500 = 2 300 kWh par an.

Q1.2. CO2 évité : 9 000 × 0,23 = 2 070 kg, soit environ 2,1 tonnes de CO2 par an.

Q1.3. La serre produit elle-même plus d'électricité qu'elle n'en consomme, à partir d'une énergie renouvelable, et ne brûle plus de gaz : elle évite environ 2 tonnes de CO2 par an. Le surplus de 2 300 kWh alimente le réseau. Il faut garder en tête l'impact de la fabrication des panneaux et de la batterie, compensé en quelques années de production.

PARTIE 2

Q2.1. Coût restant : 30 000 - 6 000 = 24 000 €. Temps de retour : 24 000 / 2 400 = 10 ans. C'est moins que les 12 ans exigés et bien moins que la durée de vie de 25 ans : l'exigence 2 est respectée.

PARTIE 3

Q3.1. Alimenter : batterie (sortie électrique continue). Distribuer : variateur (électrique adaptée au moteur). Convertir : moteur (mécanique de rotation). Transmettre : pompe, qui fournit l'énergie hydraulique à l'eau (on accepte aussi qu'elle soit vue comme l'effecteur qui agit sur l'eau).

Q3.2. Débit : 2 m³/h = 2 / 3 600 ≈ 5,56 × 10^-4 m³/s. Pression : 3 × 10^5 Pa.
Puissance hydraulique : 3 × 10^5 × 5,56 × 10^-4 ≈ 167 W.
Rendement global : 0,95 × 0,8 × 0,6 = 0,456.
Puissance électrique absorbée : 167 / 0,456 ≈ 365 W.

Q3.3. Pompe : 365 × 2 = 730 Wh. Ventilation et capteurs : 150 × 12 = 1 800 Wh. Total : environ 2 530 Wh par jour.

Q3.4. Énergie utilisable : 0,8 × 48 × 200 = 7 680 Wh. Autonomie : 7 680 / 2 530 ≈ 3 jours. C'est plus que les 2 jours exigés : l'exigence 3 est respectée.

PARTIE 4

Q4.1. Vis : 1 500 / 10 = 150 tr/min, soit 2,5 tr/s. Écrou : 2,5 × 5 = 12,5 mm/s.

Q4.2. Durée : 300 / 12,5 = 24 s, inférieure à 30 s : l'exigence 4 est respectée.

Q4.3. s = 235 / 60 ≈ 3,9. C'est supérieur à 2 : l'exigence 5 est respectée, avec une bonne marge.

Q4.4. L'arceau est surdimensionné : on peut réduire l'épaisseur du tube ou son diamètre dans les zones peu sollicitées (en gardant s au moins égal à 2), ou choisir un acier recyclé. On consomme moins de matière, donc moins d'énergie et de CO2 pour le fabriquer.

PARTIE 5

Q5.1. Quantum : 3,3 / 2^12 = 3,3 / 4 096 ≈ 0,81 mV. Résolution : 100 / 4 096 ≈ 0,024 %. C'est plus fin que 0,1 % : l'exigence 6 est respectée.

Q5.2. 0x7D0 = 7 × 256 + 13 × 16 + 0 = 1 792 + 208 = 2 000. Humidité : 2 000 × 100 / 4 096 ≈ 48,8 %. C'est plus que 40 % : l'arrosage ne démarre pas.

Q5.3. Par exemple 192.168.10.10, 192.168.10.11 et 192.168.10.12. Adresses restantes : 254 - 1 (routeur) - 20 = 233.

Q5.4. C'est une régulation : la consigne de 18 °C est fixe et le système compense une perturbation, le froid extérieur. Erreur statique : 18 - 17,4 = 0,6 °C, inférieure à 1 °C : la performance est conforme.

Conclusion générale : toutes les exigences étudiées sont respectées ; la serre Verdoyance répond au besoin du maraîcher, et l'arceau pourrait même être allégé.`,
      grille: [
        { c: "Partie 1 : production, surplus, CO2 évité, justification", pts: 3 },
        { c: "Partie 2 : temps de retour et conclusion", pts: 2 },
        { c: "Partie 3 : chaîne de puissance, puissances et rendement, énergie journalière, autonomie", pts: 4 },
        { c: "Partie 4 : vitesse et durée d'ouverture, coefficient de sécurité, amélioration", pts: 4 },
        { c: "Partie 5 : quantum et résolution, décodage, adressage, régulation", pts: 5 },
        { c: "Maîtrise de la langue : rédaction, orthographe, vocabulaire", pts: 2 },
      ] },
  ],
};
