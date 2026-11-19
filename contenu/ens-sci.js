// Enseignement scientifique, terminale générale (enseignement commun, contrôle continu). Sources : voir matiere.sources.
// Programme : programme de terminale modifié, BO n° 25 du 22 juin 2023 (en vigueur depuis la rentrée 2023). Évaluations ponctuelles : note de service du 3 janvier 2023 (version consolidée de mars 2024).
export default {
  matiere: {
    id: 'ens-sci',
    nom: 'Enseignement scientifique',
    voie: 'generale',
    epreuve: {"type":"controle continu","quand":"toute l'année","note":"Enseignement commun de 2 heures par semaine, sans épreuve finale : la note vient de la moyenne de l'année de terminale (coefficient 3 au bac, et 3 pour la moyenne de première). Les devoirs en classe suivent souvent la forme des évaluations ponctuelles : 2 heures, deux exercices sur deux thèmes différents du programme, notés chacun sur 10, qui évaluent trois compétences : exploiter des documents ; organiser, effectuer et contrôler des calculs ; rédiger une argumentation scientifique."},
    sources: [
      "https://eduscol.education.gouv.fr/5790/programmes-et-ressources-en-enseignement-scientifique-voie-g",
      "https://eduscol.education.fr/document/56670/download",
    ],
    chapitres: [
      { id: "ens-sci-1", t: "L'atmosphère terrestre et la vie", theme: "Science, climat et société" },
      { id: "ens-sci-2", t: "La complexité du système climatique", theme: "Science, climat et société" },
      { id: "ens-sci-3", t: "Le climat du futur", theme: "Science, climat et société" },
      { id: "ens-sci-4", t: "Deux siècles d'énergie électrique", theme: "Le futur des énergies" },
      { id: "ens-sci-5", t: "Conversion et transport de l'énergie électrique", theme: "Le futur des énergies" },
      { id: "ens-sci-6", t: "Énergie, choix de développement et futur climatique", theme: "Le futur des énergies" },
      { id: "ens-sci-7", t: "Mesurer et préserver la biodiversité", theme: "Une histoire du vivant" },
      { id: "ens-sci-8", t: "Le modèle de Hardy-Weinberg", theme: "Une histoire du vivant" },
      { id: "ens-sci-9", t: "L'évolution comme grille de lecture du monde", theme: "Une histoire du vivant" },
      { id: "ens-sci-10", t: "L'évolution humaine", theme: "Une histoire du vivant" },
      { id: "ens-sci-11", t: "Les modèles démographiques", theme: "Une histoire du vivant" },
      { id: "ens-sci-12", t: "De la machine de Turing à l'IA", theme: "Une histoire du vivant" },
      { id: "ens-sci-13", t: "Méthode : réussir les devoirs d'enseignement scientifique", theme: "Méthode" },
    ],
  },
  paquets: [
  { chapitre: "ens-sci-1",
    fiche: `## L'atmosphère terrestre et la vie

La Terre s'est formée il y a environ **4,6 milliards d'années**, presque en même temps que le Soleil. Son atmosphère a beaucoup changé depuis : les processus géologiques et surtout les **êtres vivants** ont transformé sa composition.

### De l'atmosphère primitive à l'air actuel
- Atmosphère **primitive** : surtout du diazote (**N2**), du dioxyde de carbone (**CO2**) et de la vapeur d'eau (**H2O**), sans dioxygène.
- Atmosphère **actuelle** : environ **78 % de N2** et **21 % de O2**, avec des traces d'autres gaz (H2O, CO2, CH4, N2O, argon).
- En refroidissant, la surface de la Terre primitive a permis la **condensation** très rapide (à l'échelle géologique) de la vapeur d'eau : les océans, l'**hydrosphère**, se forment. C'est dans l'eau liquide que la vie apparaît.

### Le diagramme d'état de l'eau
- Il indique l'état de l'eau (**solide**, **liquide**, **gaz**) selon la **température** et la **pression**.
- Savoir le lire : placer le point (température, pression), regarder dans quel domaine il tombe.
- La température moyenne et la pression à la surface de la Terre permettent l'eau liquide ; ce n'est pas le cas sur Vénus (trop chaude) ou sur Mars (pression trop faible).

### Les êtres vivants ont oxygéné l'atmosphère
- Les premières traces de **bactéries photosynthétiques** (cyanobactéries) ont au moins **3,5 milliards d'années**. Elles forment des **stromatolithes**, roches construites couche par couche.
- La **photosynthèse** produit du dioxygène : CO2 + H2O, avec la lumière, donnent de la matière organique et du O2.
- Le dioxygène s'accumule dans l'atmosphère vers **2,4 milliards d'années** (on parle de grande oxydation).
- **Indices géologiques** : les **fers rubanés** (fer oxydé déposé dans les océans), puis les **paléosols rouges** (sols anciens oxydés au contact de l'air).
- L'oxygénation a modifié la **biodiversité** : elle a permis le développement d'organismes qui respirent le dioxygène.
- Aujourd'hui, les **sources** et les **puits** de O2 sont surtout la **photosynthèse** (source), la **respiration** et les **combustions** (puits).
- L'expérience de **Ruben et Kamen** (1941), avec un isotope de l'oxygène, a montré que le O2 de la photosynthèse vient de l'eau.

### La couche d'ozone
- Dans la **stratosphère** (entre environ 15 et 50 km d'altitude), le rayonnement **ultraviolet** (UV) du Soleil coupe des molécules de O2 en atomes O ; un atome O réagit avec une molécule O2 et forme l'**ozone O3**.
- L'ozone stratosphérique **absorbe** une partie des UV solaires. Or l'**ADN** absorbe aussi les UV, ce qui provoque des **mutations** : l'ozone protège donc les êtres vivants.
- On compare les **spectres d'absorption** de l'ozone et de l'ADN : ils absorbent dans le même domaine UV.
- L'épaisseur de la couche se mesure en **unités Dobson**. Le « trou » de la couche d'ozone (au-dessus de l'Antarctique) est en réalité une forte **diminution** et non un vrai trou ; il a été causé par des gaz fabriqués par l'humain (les CFC), interdits par le protocole de **Montréal** (1987).

### À retenir pour le bac
- Atmosphère primitive N2, CO2, H2O ; air actuel 78 % N2, 21 % O2.
- Eau liquide grâce au refroidissement ; savoir lire le diagramme d'état de l'eau.
- Bactéries photosynthétiques depuis au moins 3,5 milliards d'années ; oxygénation vers 2,4 milliards d'années ; fers rubanés et paléosols rouges.
- Ozone stratosphérique formé sous l'effet des UV ; il protège l'ADN des UV mutagènes (spectres d'absorption comparés).`,
    cartes: [
      { q: "Âge de la Terre", r: "Environ 4,6 milliards d'années." },
      { q: "Composition de l'atmosphère primitive", r: "Surtout N2, CO2 et H2O, sans dioxygène." },
      { q: "Composition de l'air actuel", r: "Environ 78 % de N2 et 21 % de O2, avec des traces d'autres gaz." },
      { q: "Origine des océans", r: "La condensation de la vapeur d'eau quand la surface de la Terre a refroidi." },
      { q: "Diagramme d'état de l'eau", r: "Il donne l'état de l'eau selon la température et la pression." },
      { q: "Âge des premières traces de bactéries photosynthétiques", r: "Au moins 3,5 milliards d'années." },
      { q: "Date de l'oxygénation de l'atmosphère", r: "Vers 2,4 milliards d'années." },
      { q: "Stromatolithes", r: "Roches construites couche par couche par des bactéries photosynthétiques." },
      { q: "Fers rubanés", r: "Dépôts de fer oxydé dans les océans, indice de la production de dioxygène." },
      { q: "Sources et puits actuels de dioxygène", r: "Source : photosynthèse ; puits : respiration et combustions." },
      { q: "Formation de l'ozone stratosphérique", r: "Les UV coupent O2 en atomes O, qui réagissent avec O2 pour former O3." },
      { q: "Rôle de la couche d'ozone", r: "Elle absorbe une partie des UV, qui sont mutagènes pour l'ADN." },
      { q: "Unité Dobson", r: "L'unité qui mesure l'épaisseur de la couche d'ozone." },
      { q: "Protocole de Montréal", r: "Accord de 1987 qui interdit les gaz (CFC) qui détruisent l'ozone." },
    ],
    quiz: [
      { q: "Quel gaz était absent de l'atmosphère primitive ?",
        choix: ["Le diazote", "Le dioxyde de carbone", "Le dioxygène", "La vapeur d'eau"],
        bonne: 2, niv: 1,
        expl: "Il est apparu grâce à la photosynthèse." },
      { q: "Quelle est la part du diazote dans l'air actuel ?",
        choix: ["Environ 21 %", "Environ 78 %", "Environ 50 %", "Environ 1 %"],
        bonne: 1, niv: 1,
        expl: "Le dioxygène représente environ 21 %." },
      { q: "Comment se sont formés les océans ?",
        choix: ["Par la fonte de glaces apportées par des comètes en une seule fois", "Par la photosynthèse des premières bactéries dans l'atmosphère", "Par condensation de la vapeur d'eau quand la surface a refroidi", "Par la remontée lente de l'eau contenue dans le noyau terrestre"],
        bonne: 2, niv: 2,
        expl: "La liquéfaction a été très rapide à l'échelle géologique." },
      { q: "Que permet de lire le diagramme d'état de l'eau ?",
        choix: ["La quantité d'eau présente sur chaque planète du système solaire", "L'âge des océans terrestres d'après leurs sédiments", "La vitesse d'évaporation de l'eau selon la saison", "L'état de l'eau selon la température et la pression"],
        bonne: 3, niv: 1,
        expl: "On place le point (température, pression)." },
      { q: "De quand datent les premières traces de bactéries photosynthétiques ?",
        choix: ["Il y a 4,6 milliards d'années", "Il y a 540 millions d'années", "Il y a au moins 3,5 milliards d'années", "Il y a 66 millions d'années"],
        bonne: 2, niv: 2,
        expl: "4,6 milliards d'années est l'âge de la Terre." },
      { q: "Vers quand le dioxygène s'accumule-t-il dans l'atmosphère ?",
        choix: ["Vers 4,6 milliards d'années", "Vers 3,8 milliards d'années", "Vers 2,4 milliards d'années", "Vers 200 millions d'années"],
        bonne: 2, niv: 2,
        expl: "On parle de grande oxydation." },
      { q: "Quel indice géologique témoigne de la production de dioxygène ?",
        choix: ["Les galets de rivière", "Les coraux actuels", "Les glaciers alpins", "Les fers rubanés"],
        bonne: 3, niv: 2,
        expl: "Le fer s'est oxydé dans les océans." },
      { q: "Que montre l'expérience de Ruben et Kamen (1941) ?",
        choix: ["Le dioxygène de la photosynthèse vient du CO2", "Le dioxygène de la photosynthèse vient du sol", "Le dioxygène de la photosynthèse vient du glucose", "Le dioxygène de la photosynthèse vient de l'eau"],
        bonne: 3, niv: 3,
        expl: "Ils ont utilisé un isotope de l'oxygène." },
      { q: "Comment se forme l'ozone stratosphérique ?",
        choix: ["Les UV coupent O2, et les atomes O réagissent avec O2", "Les volcans rejettent directement de l'ozone", "Les plantes produisent de l'ozone à la place du dioxygène", "La foudre transforme le diazote en ozone"],
        bonne: 0, niv: 2,
        expl: "L'ozone a pour formule O3." },
      { q: "Pourquoi l'ozone protège-t-il les êtres vivants ?",
        choix: ["Il produit le dioxygène nécessaire à la respiration des êtres vivants", "Il réchauffe la surface de la Terre pendant la nuit", "Il retient la vapeur d'eau dans les basses couches de l'atmosphère", "Il absorbe des UV qui provoquent des mutations de l'ADN"],
        bonne: 3, niv: 3,
        expl: "Ozone et ADN absorbent dans le même domaine UV." },
      { q: "Pourquoi l'expression « trou dans la couche d'ozone » est-elle discutable ?",
        choix: ["Il s'agit d'une forte diminution, pas d'une absence d'ozone", "La couche d'ozone n'a pas d'épaisseur mesurable", "L'ozone se trouve au niveau du sol", "Le phénomène n'a lieu que sur l'équateur"],
        bonne: 0, niv: 3,
        expl: "L'épaisseur se mesure en unités Dobson." },
    ] },
  { chapitre: "ens-sci-2",
    fiche: `## La complexité du système climatique

Le climat résulte d'interactions entre l'**atmosphère**, les **océans**, la **biosphère**, la **lithosphère** et la **cryosphère** (les glaces). Il varie naturellement, mais l'humain le modifie aujourd'hui très vite. Ce chapitre reprend l'effet de serre et l'équilibre radiatif vus en première.

### Climat ou météo ?
- La **météorologie** étudie et prévoit le temps qu'il fait à **court terme** (jours, semaines).
- La **climatologie** étudie les variations du climat local ou global à **moyen et long terme** (années, siècles, millénaires).
- Un hiver froid ne contredit pas le réchauffement : c'est de la météo ; le climat se juge sur des **moyennes** de plusieurs décennies.

### Les indicateurs du climat
- La **température moyenne** de la Terre, mesurée sur le terrain et par **satellites**.
- Le **niveau des océans**, l'étendue des **glaces polaires** et des **glaciers**.
- Les indices des climats passés : **pollens** conservés dans les sédiments (ils montrent la végétation, donc le climat), **moraines** laissées par les glaciers, bulles d'air piégées dans les **carottes de glace**.
- Le climat varie naturellement, mais depuis plusieurs centaines de milliers d'années, la teneur en **CO2** de l'air n'a jamais augmenté aussi vite qu'aujourd'hui.

### Le réchauffement actuel
- Depuis un siècle et demi, on mesure un réchauffement global d'environ **+1 °C**.
- Cause : l'augmentation du **forçage radiatif** (différence entre l'énergie radiative reçue et celle émise) due aux **gaz à effet de serre** (GES) : **CO2**, **CH4** (méthane), **N2O**, et vapeur d'eau.
- Mécanisme : plus il y a de GES, plus l'atmosphère **absorbe** le rayonnement **infrarouge** émis par le sol, et plus elle en renvoie vers la surface. L'équilibre radiatif de l'ère préindustrielle est rompu.
- L'énergie en plus est stockée surtout par les **océans**, mais aussi par l'air et les sols.
- L'effet d'un gaz dépend de son **spectre d'absorption** dans l'infrarouge et de son **abondance** dans l'air.

### Les rétroactions
- Une **rétroaction positive** amplifie la perturbation :
- plus de chaleur donne plus de **vapeur d'eau**, elle-même gaz à effet de serre ;
- la fonte des glaces diminue l'**albédo** (part du rayonnement solaire réfléchie) : les surfaces sombres absorbent plus ;
- le dégel du **permafrost** (sol gelé) libère du CO2 et du CH4.
- Une **rétroaction négative** stabilise : à court terme, les végétaux chlorophylliens absorbent plus de CO2 (puits de carbone).
- L'**océan** joue un rôle d'**amortisseur** : il absorbe une grande part de l'énergie en plus et une partie du CO2 émis. Mais cette énergie accumulée rend le changement **irréversible** pour plusieurs siècles.

### La montée des océans
- Deux causes : la **dilatation thermique** de l'eau qui se réchauffe, et la **fusion des glaces continentales** (glaciers, calottes du Groenland et de l'Antarctique).
- La fonte de la **banquise** (glace de mer) ne fait presque pas monter le niveau : cette glace flotte déjà sur l'eau. La fonte des glaces **continentales** ajoute de l'eau à l'océan.
- Calcul type : élévation du niveau = volume d'eau ajouté divisé par la surface des océans (environ 3,6 × 10^14 m²).

### À retenir pour le bac
- Météo : court terme ; climat : moyennes sur le long terme ; indicateurs et indices (pollens, glaciers, carottes de glace).
- Réchauffement d'environ +1 °C en un siècle et demi, dû au forçage radiatif des GES (CO2, CH4, N2O, vapeur d'eau).
- Rétroactions positives (vapeur d'eau, albédo, permafrost) et négative (végétation) ; océan amortisseur.
- Montée des océans : dilatation thermique et fonte des glaces continentales, pas de la banquise.`,
    cartes: [
      { q: "Météorologie", r: "Étude et prévision du temps à court terme (jours, semaines)." },
      { q: "Climatologie", r: "Étude des variations du climat à moyen et long terme." },
      { q: "Indicateurs du climat global", r: "Température moyenne, niveau des océans, étendue des glaces et des glaciers." },
      { q: "Indices des climats passés", r: "Pollens, moraines des glaciers, bulles d'air des carottes de glace." },
      { q: "Réchauffement mesuré depuis un siècle et demi", r: "Environ +1 °C." },
      { q: "Forçage radiatif", r: "La différence entre l'énergie radiative reçue et l'énergie radiative émise." },
      { q: "Principaux gaz à effet de serre", r: "CO2, CH4, N2O et vapeur d'eau." },
      { q: "Ce qui fait l'effet d'un gaz sur l'effet de serre", r: "Son spectre d'absorption infrarouge et son abondance." },
      { q: "Rétroaction positive", r: "Un mécanisme qui amplifie la perturbation initiale." },
      { q: "Albédo", r: "La part du rayonnement solaire réfléchie par une surface." },
      { q: "Rétroaction négative du climat", r: "À court terme, les végétaux absorbent plus de CO2." },
      { q: "Rôle de l'océan", r: "Amortisseur : il absorbe une grande part de l'énergie en plus et du CO2 émis." },
      { q: "Causes de la montée des océans", r: "Dilatation thermique et fusion des glaces continentales." },
      { q: "Pourquoi la banquise ne fait presque pas monter les océans", r: "Elle flotte déjà sur l'eau." },
    ],
    quiz: [
      { q: "Qu'étudie la météorologie ?",
        choix: ["Le temps qu'il fera à court terme", "Le climat sur plusieurs siècles", "Les glaciations passées", "La composition de l'atmosphère primitive"],
        bonne: 0, niv: 1,
        expl: "La climatologie étudie le long terme." },
      { q: "Quel indice renseigne sur la végétation, donc le climat, du passé ?",
        choix: ["Les nuages observés aujourd'hui par satellite", "La vitesse actuelle du vent mesurée en altitude", "La température actuelle de l'eau des rivières", "Les pollens conservés dans les sédiments"],
        bonne: 3, niv: 1,
        expl: "Les moraines et les carottes de glace aussi." },
      { q: "De combien la Terre s'est-elle réchauffée depuis un siècle et demi ?",
        choix: ["Environ +1 °C", "Environ +0,1 °C", "Environ +3 °C", "Environ +5 °C"],
        bonne: 0, niv: 1,
        expl: "Les projections pour 2100 vont de 1,5 à 5 °C." },
      { q: "Qu'est-ce que le forçage radiatif ?",
        choix: ["La force du vent dans la haute atmosphère", "La différence entre l'énergie radiative reçue et émise", "La quantité de lumière visible réfléchie par les nuages", "L'énergie produite par les centrales électriques"],
        bonne: 1, niv: 2,
        expl: "Il augmente avec les GES." },
      { q: "Pourquoi une hausse des GES réchauffe-t-elle la surface ?",
        choix: ["L'atmosphère absorbe plus d'infrarouge émis par le sol et en renvoie plus vers lui", "L'atmosphère laisse passer davantage de lumière visible venue du Soleil", "L'atmosphère produit elle-même de la chaleur grâce aux GES", "L'atmosphère rapproche la Terre du Soleil en devenant plus dense"],
        bonne: 0, niv: 2,
        expl: "C'est l'effet de serre renforcé." },
      { q: "De quoi dépend l'effet d'un gaz sur l'effet de serre ?",
        choix: ["De son spectre d'absorption infrarouge et de son abondance", "De sa couleur, de son odeur et de sa température", "De sa masse et de son origine naturelle ou humaine", "De son altitude moyenne et de sa toxicité pour les êtres vivants"],
        bonne: 0, niv: 2,
        expl: "On lit son spectre d'absorption." },
      { q: "Pourquoi la fonte des glaces amplifie-t-elle le réchauffement ?",
        choix: ["Elle libère du dioxygène dans l'air", "Elle refroidit les océans en profondeur", "Elle diminue l'albédo : les surfaces sombres absorbent plus", "Elle augmente la quantité de nuages blancs"],
        bonne: 2, niv: 2,
        expl: "C'est une rétroaction positive." },
      { q: "Lequel est une rétroaction négative ?",
        choix: ["Le dégel du permafrost", "L'augmentation de la vapeur d'eau", "La diminution de l'albédo", "L'absorption accrue de CO2 par les végétaux"],
        bonne: 3, niv: 3,
        expl: "Elle stabilise le système, à court terme." },
      { q: "Pourquoi le changement climatique est-il irréversible pour plusieurs siècles ?",
        choix: ["Les satellites ne pourront plus mesurer la température de surface", "Le CO2 de l'air se transforme peu à peu en vapeur d'eau", "Les glaciers fondus se reforment en quelques années à peine", "L'énergie accumulée dans les océans met longtemps à se dissiper"],
        bonne: 3, niv: 3,
        expl: "L'océan amortit mais stocke." },
      { q: "Quelle fonte fait le plus monter le niveau des océans ?",
        choix: ["Celle de la banquise", "Celle des icebergs déjà en mer", "Celle des glaces continentales", "Celle de la neige sur la mer"],
        bonne: 2, niv: 2,
        expl: "La banquise flotte déjà sur l'eau." },
      { q: "Comment estimer l'élévation du niveau des océans due à un volume d'eau ajouté ?",
        choix: ["Diviser le volume par la surface des océans", "Multiplier le volume par la surface des océans", "Diviser la surface des océans par le volume", "Ajouter le volume à la profondeur moyenne"],
        bonne: 0, niv: 3,
        expl: "La surface des océans vaut environ 3,6 × 10^14 m²." },
    ] },
  { chapitre: "ens-sci-3",
    fiche: `## Le climat du futur

Pour prévoir le climat, les scientifiques utilisent des **modèles numériques**. Associés à des hypothèses sur nos émissions futures de gaz à effet de serre, ils donnent des **fourchettes** et des **scénarios** pour le XXIe siècle.

### Comment fonctionne un modèle climatique ?
- Il **met en équations** les mécanismes essentiels du système Terre (lois de la physique, de la chimie, de la biologie) : circulation de l'air et de l'océan, rayonnement, glaces, cycle du carbone.
- Il résout ces équations par des **méthodes numériques** sur ordinateur, en découpant la planète en mailles.
- Pour être **validé**, il est comparé aux **observations** (terrain et satellites) et aux **paléoclimats** : un bon modèle doit retrouver le climat passé.
- Il existe de **nombreux modèles indépendants** ; leurs résultats sont comparés. Ils avaient anticipé les évolutions des dernières décennies.
- Les travaux pionniers de Syukuro Manabe et Klaus Hasselmann sur la modélisation du climat ont reçu le prix Nobel de physique en **2021**.

### Un réchauffement d'origine humaine
- L'analyse croisée des observations, de la théorie et des modèles permet de conclure que la hausse de température depuis le début de l'ère industrielle est **liée à l'activité humaine**.
- Sources de **CO2** : combustion des **combustibles fossiles** (charbon, pétrole, gaz), **artificialisation des sols** (déforestation, béton), **calcination des carbonates** pour fabriquer le ciment (le calcaire CaCO3 chauffé libère du CO2).
- Sources de **méthane** : fuites de gaz naturel ou de pétrole, **décharges** (fermentation des déchets), certaines activités **agricoles** (élevage de ruminants, rizières).
- **Corrélation et causalité** : deux grandeurs qui varient ensemble ne sont pas forcément liées par une cause. Le modèle permet de montrer que la hausse du CO2 **cause** la hausse de la température, car le mécanisme physique est connu et les simulations sans émissions humaines ne reproduisent pas le réchauffement.

### Ce que prévoient les modèles
- Une hausse de la température moyenne de **1,5 à 5 °C** avant la fin du XXIe siècle, selon les scénarios d'émissions.
- Une élévation du niveau moyen des océans pouvant atteindre **le mètre** au cours du siècle.
- Des modifications des **régimes de pluie** et des **événements extrêmes** (canicules, sécheresses, fortes pluies).
- Une **acidification des océans** (le CO2 dissous rend l'eau plus acide).
- Des incidences majeures sur les **écosystèmes** terrestres et marins.

### Incertitude et scénarios
- L'**incertitude** vient surtout de nos choix futurs : on ne sait pas quelle quantité de GES l'humanité émettra. D'où plusieurs **scénarios**, des plus sobres aux plus émetteurs.
- Elle vient aussi des limites des modèles (nuages, échelle locale). Une incertitude n'est pas une ignorance : les modèles s'accordent sur le sens et l'ordre de grandeur.

### Les acteurs et les décisions
- L'**Organisation météorologique mondiale** coordonne les mesures ; le **GIEC** (Groupe d'experts intergouvernemental sur l'évolution du climat), créé en 1988, **évalue** l'état des connaissances ; l'**ONU** organise les négociations.
- Les **COP** (conférences des parties) réunissent les États chaque année ; l'**accord de Paris** (2015) vise à contenir le réchauffement bien en dessous de 2 °C.
- **Atténuation** : réduire les émissions. **Adaptation** : se préparer aux effets inévitables (digues, cultures adaptées, villes plus fraîches).

### À retenir pour le bac
- Un modèle : équations, méthodes numériques, validation par les observations et les paléoclimats ; nombreux modèles indépendants.
- Origine humaine : CO2 (fossiles, sols, ciment) et méthane (fuites, décharges, agriculture) ; corrélation n'est pas causalité.
- Projections : +1,5 à 5 °C, jusqu'à un mètre de montée des océans, pluies et extrêmes modifiés, acidification, écosystèmes touchés.
- GIEC (évaluation), COP et accord de Paris ; atténuation et adaptation.`,
    cartes: [
      { q: "Ce sur quoi s'appuie un modèle climatique", r: "La mise en équations des mécanismes du système Terre et des méthodes numériques de résolution." },
      { q: "Validation d'un modèle climatique", r: "Comparer ses résultats aux observations et aux paléoclimats." },
      { q: "Prix Nobel de physique 2021", r: "Syukuro Manabe et Klaus Hasselmann, pour la modélisation du climat." },
      { q: "Sources humaines de CO2", r: "Combustibles fossiles, artificialisation des sols, calcination des carbonates (ciment)." },
      { q: "Sources humaines de méthane", r: "Fuites de gaz et de pétrole, décharges, élevage et rizières." },
      { q: "Hausse de température prévue avant 2100", r: "De 1,5 à 5 °C selon les scénarios." },
      { q: "Montée des océans prévue au XXIe siècle", r: "Elle peut atteindre le mètre." },
      { q: "Acidification des océans", r: "Le CO2 dissous rend l'eau de mer plus acide." },
      { q: "Principale source d'incertitude des projections", r: "La quantité de GES que l'humanité émettra." },
      { q: "Corrélation et causalité", r: "Deux grandeurs qui varient ensemble ne sont pas forcément liées par une cause." },
      { q: "GIEC", r: "Groupe d'experts intergouvernemental sur l'évolution du climat, créé en 1988, qui évalue les connaissances." },
      { q: "Accord de Paris (2015)", r: "Contenir le réchauffement bien en dessous de 2 °C." },
      { q: "Atténuation", r: "Réduire les émissions de gaz à effet de serre." },
      { q: "Adaptation", r: "Se préparer aux effets inévitables du changement climatique." },
    ],
    quiz: [
      { q: "Comment valide-t-on un modèle climatique ?",
        choix: ["En le faisant approuver par un vote des États membres de l'ONU", "En vérifiant qu'il prévoit correctement la météo du lendemain", "En comparant ses résultats aux observations et aux paléoclimats", "En comptant le nombre de lignes de son programme informatique"],
        bonne: 2, niv: 1,
        expl: "Un bon modèle retrouve le climat passé." },
      { q: "Pourquoi utilise-t-on de nombreux modèles indépendants ?",
        choix: ["Parce qu'un seul modèle ne respecte pas les lois de la physique", "Pour comparer leurs résultats et estimer l'incertitude", "Pour que chaque pays dispose de son propre climat simulé", "Pour éviter d'avoir à utiliser des observations réelles"],
        bonne: 1, niv: 2,
        expl: "Leurs résultats convergent sur l'essentiel." },
      { q: "Quelle activité libère du CO2 en dehors de la combustion ?",
        choix: ["La calcination du calcaire pour faire du ciment", "La photosynthèse des forêts", "L'évaporation de l'eau des océans", "La fonte des glaciers"],
        bonne: 0, niv: 2,
        expl: "Le calcaire CaCO3 chauffé libère du CO2." },
      { q: "Laquelle est une source de méthane liée aux activités humaines ?",
        choix: ["Les panneaux photovoltaïques", "Les éoliennes en mer", "Les barrages de montagne", "Les décharges de déchets"],
        bonne: 3, niv: 1,
        expl: "La fermentation des déchets produit du méthane." },
      { q: "Quelle hausse de température les modèles prévoient-ils avant 2100 ?",
        choix: ["De 1,5 à 5 °C", "De 0,1 à 0,5 °C", "De 8 à 10 °C", "Une baisse de 1 à 2 °C"],
        bonne: 0, niv: 1,
        expl: "La fourchette dépend des scénarios d'émissions." },
      { q: "Quelle conséquence de la hausse du CO2 touche directement la chimie de l'eau de mer ?",
        choix: ["La salinisation des rivières", "La disparition de l'oxygène de l'air", "Le refroidissement des courants", "L'acidification des océans"],
        bonne: 3, niv: 2,
        expl: "Le CO2 dissous rend l'eau plus acide." },
      { q: "D'où vient principalement l'incertitude des projections climatiques ?",
        choix: ["Des émissions futures de GES, qui dépendent de nos choix", "De l'absence de mesures de température dans de nombreux pays", "Du fait que les lois physiques changent d'un siècle à l'autre", "De la distance entre la Terre et le Soleil, qui varie vite"],
        bonne: 0, niv: 2,
        expl: "D'où plusieurs scénarios." },
      { q: "Comment montre-t-on que la hausse du CO2 cause le réchauffement ?",
        choix: ["Son mécanisme est connu et les modèles sans émissions humaines ne le reproduisent pas", "La hausse simultanée du CO2 et de la température suffit à prouver la cause", "Un sondage réalisé auprès des climatologues de nombreux pays", "La météo particulièrement chaude de l'été dernier en France"],
        bonne: 0, niv: 3,
        expl: "Une corrélation seule ne prouve pas une cause." },
      { q: "Quel est le rôle du GIEC ?",
        choix: ["Mesurer lui-même la température dans chaque pays du monde", "Voter les lois sur l'énergie à la place des parlements", "Évaluer l'état des connaissances sur le climat", "Construire et faire tourner les modèles de chaque État"],
        bonne: 2, niv: 2,
        expl: "Il a été créé en 1988." },
      { q: "Quel est l'objectif de l'accord de Paris (2015) ?",
        choix: ["Arrêter toute émission de CO2 dès l'année 2016", "Supprimer les centrales nucléaires des pays signataires", "Contenir le réchauffement bien en dessous de 2 °C", "Remplacer le GIEC par une agence de l'ONU chargée du climat"],
        bonne: 2, niv: 2,
        expl: "Il est discuté chaque année lors des COP." },
      { q: "Construire des digues contre la montée des eaux relève de…",
        choix: ["L'atténuation", "La compensation carbone", "La modélisation", "L'adaptation"],
        bonne: 3, niv: 3,
        expl: "L'atténuation consiste à réduire les émissions." },
    ] },
  { chapitre: "ens-sci-4",
    fiche: `## Deux siècles d'énergie électrique

Depuis le XIXe siècle, la recherche fondamentale et l'invention technique ont produit des **générateurs électriques** de plus en plus performants. Souvent, ces progrès sont venus de recherches qui ne visaient pas d'application : la science pour savoir a mené à la science pour faire.

### L'induction électromagnétique et l'alternateur
- **Faraday** découvre en 1831 l'**induction électromagnétique** : quand un fil conducteur et un aimant (ou un champ magnétique) sont en **mouvement relatif**, un courant apparaît dans le fil. **Maxwell** en fait la théorie au XIXe siècle.
- Un **alternateur** exploite ce phénomène. Ses éléments principaux : une **source de champ magnétique** (aimant ou électroaimant) et un **fil conducteur** (bobine), en mouvement l'un par rapport à l'autre. La partie qui tourne s'appelle le **rotor**, la partie fixe le **stator**.
- Il **convertit** de l'énergie **mécanique** (rotation) en énergie **électrique**.
- La **fréquence** du courant produit dépend de la **vitesse de rotation** du rotor : plus il tourne vite, plus la fréquence est grande. En Europe, le réseau est à **50 Hz** ; pour un alternateur simple (un aimant à deux pôles), cela correspond à 50 tours par seconde, soit 3 000 tours par minute.
- Le **rendement** est le rapport entre l'énergie utile produite et l'énergie reçue : rendement = énergie électrique fournie / énergie mécanique reçue. Celui d'un alternateur peut être **proche de 1** (100 %). Les pertes viennent surtout de l'**effet Joule** (échauffement des fils) et des **frottements**.

### La bataille des courants
- À la fin du XIXe siècle, Edison défend le **courant continu**, Tesla et Westinghouse le **courant alternatif**. L'alternatif l'emporte, car on peut facilement changer sa tension avec un **transformateur**, ce qui facilite le transport sur de longues distances.

### La révolution quantique et les semi-conducteurs
- Au début du XXe siècle naît la **mécanique quantique**, qui décrit le comportement **probabiliste** de la nature à l'échelle microscopique. Einstein explique en 1905 l'effet photoélectrique par les **quanta** de lumière (les photons).
- Conséquence technologique : l'usage des matériaux **semi-conducteurs**, en particulier le **silicium**, dans l'électronique (transistors, puces) et dans les **cellules photovoltaïques**.

### Le photovoltaïque
- Une cellule photovoltaïque **absorbe l'énergie radiative** du Soleil et la convertit **partiellement** en énergie électrique.
- Un matériau ne convient que s'il absorbe dans le domaine où le **spectre solaire** est intense (visible et proche infrarouge) : on compare le **spectre d'absorption** du semi-conducteur au spectre solaire.
- Rendement des panneaux courants : environ **15 à 22 %**.
- Pour argumenter sur une installation : ensoleillement du lieu, orientation et inclinaison, surface, coût, production variable (nuit, nuages), besoins, impact de la fabrication (extraction et purification du silicium).

### À retenir pour le bac
- Induction électromagnétique : Faraday (découverte), Maxwell (théorie) ; alternateur = champ magnétique + conducteur en mouvement relatif.
- Fréquence liée à la vitesse de rotation ; rendement = énergie utile / énergie reçue, proche de 1 pour un alternateur.
- Mécanique quantique, semi-conducteurs (silicium), cellules photovoltaïques qui convertissent partiellement le rayonnement solaire.
- Comparer spectre d'absorption du matériau et spectre solaire ; argumenter sur une installation photovoltaïque.`,
    cartes: [
      { q: "Découvreur de l'induction électromagnétique", r: "Michael Faraday, en 1831." },
      { q: "Théoricien de l'électromagnétisme au XIXe siècle", r: "James Clerk Maxwell." },
      { q: "Principe de l'induction", r: "Un conducteur et un champ magnétique en mouvement relatif font apparaître un courant." },
      { q: "Éléments principaux d'un alternateur", r: "Une source de champ magnétique et un fil conducteur en mouvement relatif." },
      { q: "Conversion réalisée par un alternateur", r: "Énergie mécanique en énergie électrique." },
      { q: "Rotor et stator", r: "La partie qui tourne et la partie fixe d'un alternateur." },
      { q: "Lien entre rotation et fréquence", r: "Plus le rotor tourne vite, plus la fréquence du courant est grande." },
      { q: "Fréquence du réseau européen", r: "50 Hz." },
      { q: "Définition du rendement", r: "Énergie utile fournie divisée par l'énergie reçue." },
      { q: "Rendement d'un alternateur", r: "Proche de 1 ; pertes par effet Joule et frottements." },
      { q: "Avantage du courant alternatif", r: "Sa tension se modifie facilement avec un transformateur." },
      { q: "Matériau semi-conducteur le plus utilisé", r: "Le silicium." },
      { q: "Rôle d'une cellule photovoltaïque", r: "Convertir partiellement l'énergie radiative du Soleil en énergie électrique." },
      { q: "Condition pour un bon matériau photovoltaïque", r: "Absorber là où le spectre solaire est intense." },
    ],
    quiz: [
      { q: "Qui a découvert l'induction électromagnétique ?",
        choix: ["Einstein", "Edison", "Newton", "Faraday"],
        bonne: 3, niv: 1,
        expl: "Maxwell en a fait la théorie." },
      { q: "Quels sont les deux éléments principaux d'un alternateur ?",
        choix: ["Une pile et une ampoule reliées entre elles par un fil de cuivre", "Un panneau solaire et une batterie montés sur le même support", "Une source de champ magnétique et un conducteur en mouvement relatif", "Un transformateur et une ligne à haute tension bien isolée"],
        bonne: 2, niv: 1,
        expl: "Le mouvement relatif crée le courant induit." },
      { q: "Quelle conversion réalise un alternateur ?",
        choix: ["Énergie mécanique en énergie électrique", "Énergie électrique en énergie mécanique", "Énergie chimique en énergie électrique", "Énergie radiative en énergie électrique"],
        bonne: 0, niv: 1,
        expl: "Le moteur fait l'inverse." },
      { q: "Que se passe-t-il si le rotor d'un alternateur tourne plus vite ?",
        choix: ["La fréquence du courant diminue", "La fréquence du courant augmente", "Le courant devient continu", "Le rendement devient nul"],
        bonne: 1, niv: 2,
        expl: "Fréquence et vitesse de rotation sont liées." },
      { q: "Un alternateur reçoit 1 000 J d'énergie mécanique et fournit 950 J d'énergie électrique. Quel est son rendement ?",
        choix: ["0,95", "1,05", "0,05", "950"],
        bonne: 0, niv: 2,
        expl: "Rendement = 950 / 1 000." },
      { q: "D'où viennent surtout les pertes d'un alternateur ?",
        choix: ["De la lumière émise par la bobine en rotation", "Du son produit par le rotor de l'alternateur", "De l'effet Joule et des frottements", "De la radioactivité naturelle de l'aimant"],
        bonne: 2, niv: 2,
        expl: "Le rendement reste proche de 1." },
      { q: "Pourquoi le courant alternatif l'a-t-il emporté sur le continu ?",
        choix: ["On ne peut allumer une ampoule qu'avec ce courant", "On change facilement sa tension avec un transformateur", "On évite avec lui toute perte d'énergie dans les fils", "On le doit à Edison, qui l'a défendu face à Tesla"],
        bonne: 1, niv: 3,
        expl: "Edison défendait le courant continu." },
      { q: "Quel matériau semi-conducteur est le plus utilisé dans les panneaux solaires ?",
        choix: ["Le cuivre", "Le silicium", "L'aluminium", "Le plomb"],
        bonne: 1, niv: 1,
        expl: "Il est aussi à la base de l'électronique." },
      { q: "Que fait une cellule photovoltaïque ?",
        choix: ["Elle stocke l'électricité produite le jour pour la restituer la nuit", "Elle transforme la chaleur du sol en électricité sans pièce mobile", "Elle convertit l'électricité du réseau en lumière visible", "Elle convertit partiellement le rayonnement solaire en électricité"],
        bonne: 3, niv: 2,
        expl: "Le rendement courant est d'environ 15 à 22 %." },
      { q: "Comment savoir si un semi-conducteur convient pour un capteur photovoltaïque ?",
        choix: ["Mesurer sa masse volumique et sa dureté en laboratoire", "Comparer son spectre d'absorption au spectre solaire", "Vérifier qu'il est bien attiré par un aimant puissant", "Comparer sa couleur à celle du ciel par beau temps"],
        bonne: 1, niv: 3,
        expl: "Il doit absorber là où le Soleil émet beaucoup." },
      { q: "Quel argument est défavorable à une installation photovoltaïque ?",
        choix: ["Un fonctionnement sans combustion", "Une ressource solaire gratuite", "Une installation possible sur un toit", "Une production variable, nulle la nuit"],
        bonne: 3, niv: 3,
        expl: "Il faut gérer l'intermittence." },
    ] },
  { chapitre: "ens-sci-5",
    fiche: `## Conversion et transport de l'énergie électrique

L'électricité a de grands atouts : une distribution sûre, des réseaux étendus, des convertisseurs de bon rendement. Surtout, on sait la produire **sans combustion**, donc sans émettre directement de CO2.

### Trois façons d'obtenir de l'électricité sans combustion
- **Conversion d'énergie mécanique** :
- **directe** : dynamos, **éoliennes** (vent), **hydroliennes** (courants marins), **barrages hydroélectriques** (chute d'eau) ;
- **indirecte**, à partir d'énergie **thermique** : centrales **nucléaires** (la fission chauffe de l'eau, la vapeur fait tourner une turbine reliée à un alternateur), centrales solaires thermiques, **géothermie**.
- **Conversion de l'énergie radiative** du Soleil : panneaux **photovoltaïques**.
- **Conversion électrochimique** : **piles**, **accumulateurs** (batteries), **piles à hydrogène**.

### Les chaînes énergétiques et le rendement global
- Une **chaîne de transformations** décrit les conversions successives. Exemple d'une centrale nucléaire : énergie nucléaire → énergie thermique → énergie mécanique (turbine) → énergie électrique (alternateur).
- À chaque étape, une partie de l'énergie est perdue, surtout sous forme de **chaleur**.
- Le **rendement global** est le **produit** des rendements de chaque étape : r = r1 × r2 × r3.
- Exemple : une turbine de rendement 0,4 et un alternateur de rendement 0,95 donnent un rendement global de 0,4 × 0,95 = 0,38.

### Des effets sur l'environnement
- Même sans combustion, chaque mode de production a des effets : **déchets radioactifs** et risque d'**accident** pour le nucléaire, modification des cours d'eau et des écosystèmes pour les barrages, effets sur les paysages et les oiseaux pour les éoliennes, extraction de **métaux** et pollution chimique pour les panneaux et les batteries.

### Le transport de l'électricité
- Pendant le transport, une partie de l'énergie est **dissipée en chaleur** par **effet Joule** dans les câbles : elle n'arrive pas à l'utilisateur.
- Formules : puissance transportée **P = U × I** (tension × intensité) ; puissance perdue par effet Joule **Pj = R × I²** (résistance de la ligne × intensité au carré).
- À puissance transportée fixée, **augmenter la tension** U fait **baisser l'intensité** I (I = P / U). Comme les pertes dépendent de I², elles baissent fortement : si on multiplie la tension par 10, l'intensité est divisée par 10 et les pertes par **100**.
- C'est pourquoi les grandes lignes utilisent la **haute tension** (jusqu'à 400 000 V en France). Des **transformateurs** élèvent la tension à la sortie des centrales et l'abaissent près des utilisateurs (230 V à la prise).
- Le réseau est **maillé** au niveau **européen** : les pays échangent de l'électricité.

### Équilibrer l'offre et la demande
- La production doit être égale à la consommation à chaque instant. En cas de déséquilibre : mobiliser des **réserves**, diminuer la consommation ou la production, ou **stocker** de l'énergie.
- Certaines productions sont **intermittentes** (soleil, vent). Pour y faire face, on convertit l'électricité sous une forme **stockable** :
- énergie **chimique** : batteries, hydrogène ;
- énergie **mécanique** : stations de pompage (on remonte de l'eau dans un barrage), volants d'inertie, air comprimé ;
- énergie **électromagnétique** : supercondensateurs, bobines.
- Critères de comparaison : **capacité** et **durée** de stockage, **incidence écologique**, **masse** nécessaire par kilowattheure stocké.

### À retenir pour le bac
- Sans combustion : mécanique (directe ou par la chaleur), radiative (photovoltaïque), électrochimique.
- Chaîne énergétique ; rendement global = produit des rendements.
- P = U × I et Pj = R × I² : la haute tension réduit l'intensité et donc les pertes par effet Joule.
- Réseau européen maillé ; stockage chimique, mécanique ou électromagnétique pour gérer l'intermittence.`,
    cartes: [
      { q: "Trois méthodes sans combustion", r: "Conversion mécanique, conversion du rayonnement solaire, conversion électrochimique." },
      { q: "Conversion mécanique directe", r: "Dynamos, éoliennes, hydroliennes, barrages hydroélectriques." },
      { q: "Conversion mécanique indirecte", r: "À partir de chaleur : centrales nucléaires, solaires thermiques, géothermie." },
      { q: "Chaîne d'une centrale nucléaire", r: "Nucléaire → thermique → mécanique (turbine) → électrique (alternateur)." },
      { q: "Rendement global d'une chaîne", r: "Le produit des rendements de chaque étape." },
      { q: "Effet Joule", r: "La dissipation d'énergie sous forme de chaleur dans un conducteur parcouru par un courant." },
      { q: "Puissance électrique", r: "P = U × I." },
      { q: "Puissance perdue par effet Joule", r: "Pj = R × I²." },
      { q: "Intérêt de la haute tension", r: "À puissance fixée, elle réduit l'intensité, donc les pertes par effet Joule." },
      { q: "Tension multipliée par 10", r: "Intensité divisée par 10, pertes par effet Joule divisées par 100." },
      { q: "Rôle d'un transformateur", r: "Élever ou abaisser une tension alternative." },
      { q: "Intermittence", r: "Production variable de certaines sources, comme le soleil et le vent." },
      { q: "Stockage mécanique de l'électricité", r: "Stations de pompage, volants d'inertie, air comprimé." },
      { q: "Critères pour comparer des stockages", r: "Capacité, durée, incidence écologique, masse par kilowattheure." },
    ],
    quiz: [
      { q: "Lequel produit de l'électricité par conversion mécanique directe ?",
        choix: ["Une centrale nucléaire", "Un panneau photovoltaïque", "Une éolienne", "Une pile à hydrogène"],
        bonne: 2, niv: 1,
        expl: "Le nucléaire passe par la chaleur." },
      { q: "Dans quelle catégorie range-t-on une pile à hydrogène ?",
        choix: ["Conversion électrochimique", "Conversion mécanique directe", "Conversion du rayonnement solaire", "Combustion de carburant"],
        bonne: 0, niv: 2,
        expl: "Comme les piles et accumulateurs." },
      { q: "Quelle est la chaîne d'une centrale nucléaire ?",
        choix: ["Nucléaire, électrique, mécanique, thermique", "Nucléaire, thermique, mécanique, électrique", "Chimique, électrique, nucléaire, thermique", "Radiative, chimique, électrique, mécanique"],
        bonne: 1, niv: 2,
        expl: "La turbine entraîne l'alternateur." },
      { q: "Une turbine de rendement 0,4 entraîne un alternateur de rendement 0,95. Quel est le rendement global ?",
        choix: ["1,35", "0,55", "0,38", "0,95"],
        bonne: 2, niv: 2,
        expl: "On multiplie les rendements." },
      { q: "Qu'est-ce que l'effet Joule ?",
        choix: ["La production d'électricité par un aimant en rotation dans une bobine", "La transformation d'énergie électrique en chaleur dans un conducteur", "Le stockage d'énergie électrique dans une batterie rechargeable", "La conversion de la lumière du Soleil en électricité continue"],
        bonne: 1, niv: 1,
        expl: "C'est la cause des pertes en ligne." },
      { q: "Quelle formule donne la puissance perdue par effet Joule ?",
        choix: ["Pj = U × I", "Pj = R × I²", "Pj = U / R", "Pj = R / I"],
        bonne: 1, niv: 2,
        expl: "P = U × I donne la puissance transportée." },
      { q: "Pourquoi transporte-t-on l'électricité en haute tension ?",
        choix: ["Pour augmenter la fréquence du courant transporté sur le réseau", "Pour que le courant devienne continu avant d'arriver chez soi", "Pour produire davantage d'énergie qu'à la sortie de la centrale", "Pour diminuer l'intensité et donc les pertes par effet Joule"],
        bonne: 3, niv: 2,
        expl: "À puissance fixée, I = P / U." },
      { q: "Si on multiplie la tension par 10 à puissance fixée, les pertes par effet Joule sont…",
        choix: ["Divisées par 10", "Multipliées par 10", "Divisées par 100", "Inchangées"],
        bonne: 2, niv: 3,
        expl: "L'intensité est divisée par 10, et les pertes dépendent de I²." },
      { q: "Pourquoi faut-il stocker de l'électricité ?",
        choix: ["Parce que le réseau européen n'est pas maillé", "Pour faire face à l'intermittence et équilibrer offre et demande", "Parce que l'électricité se perd si on ne l'utilise pas dans l'année", "Pour augmenter la tension des lignes"],
        bonne: 1, niv: 2,
        expl: "Production et consommation doivent être égales à chaque instant." },
      { q: "Une station de pompage stocke l'énergie sous forme…",
        choix: ["Chimique", "Électromagnétique", "Mécanique", "Nucléaire"],
        bonne: 2, niv: 3,
        expl: "On remonte de l'eau dans un barrage." },
      { q: "Quel critère sert à comparer des dispositifs de stockage ?",
        choix: ["La couleur extérieure du dispositif de stockage", "La date de son invention et son pays d'origine", "La masse nécessaire par kilowattheure stocké", "Le nom de son inventeur et de son fabricant"],
        bonne: 2, niv: 3,
        expl: "Aussi la capacité, la durée, l'incidence écologique." },
    ] },
  { chapitre: "ens-sci-6",
    fiche: `## Énergie, choix de développement et futur climatique

La consommation mondiale d'énergie augmente fortement et repose surtout sur les **combustibles fossiles**, principale cause du changement climatique. Ce chapitre relie énergie, cycle du carbone, santé et choix de société.

### L'énergie dans le monde
- Les **combustibles fossiles** (pétrole, charbon, gaz) dominent les ressources utilisées.
- La consommation est **très inégale** selon la richesse des pays et des individus.
- La consommation mondiale a **doublé en 40 ans**, en lien avec le modèle industriel de production et de consommation.
- Elle se répartit à parts comparables entre l'**industrie**, les **transports** et l'**habitat**, et dans une moindre mesure l'**agriculture**.
- Énergies primaires sous forme de **stocks** (fossiles, uranium) ou de **flux** (rayonnement solaire, géothermie, marées).

### Unités et ordres de grandeur
- **Joule** (J) ; **kilowattheure** : 1 kWh = 3,6 × 10^6 J ; **tonne équivalent pétrole** : 1 tep, l'énergie d'une tonne de pétrole, environ 4,2 × 10^10 J (environ 11 600 kWh).
- Énergie = puissance × durée (E = P × t) : un appareil de 1 000 W qui fonctionne 1 heure consomme 1 kWh.
- Ordres de grandeur de **puissance** : corps humain au repos environ 100 W ; four 2 000 W ; moteur de voiture quelques dizaines de kW ; réacteur nucléaire environ 1 000 MW (10^9 W).

### Le cycle du carbone
- Le carbone est stocké dans des **réservoirs** : atmosphère, océans, biosphère (êtres vivants), sols, roches et combustibles fossiles.
- Il circule entre eux par des **flux** : photosynthèse, respiration, échanges océan-atmosphère, sédimentation.
- Les **combustibles fossiles** viennent de la matière organique d'êtres vivants (carbone fixé par photosynthèse) transformée pendant des dizaines à des centaines de **millions d'années**. Ils ne se reconstituent pas à l'échelle humaine : ce sont des ressources **non renouvelables**.
- Les activités humaines ajoutent un flux rapide vers l'atmosphère (combustion, déforestation).

### Combustion, CO2 et santé
- Une combustion est une **oxydation par le dioxygène**. Exemple : méthane, CH4 + 2 O2 → CO2 + 2 H2O. Savoir **ajuster** l'équation (même nombre d'atomes de chaque élément de chaque côté).
- On compare les combustibles par la **masse de CO2** émise par unité d'énergie : le charbon émet plus que le gaz naturel.
- La combustion libère aussi des **aérosols**, des **particules fines**, des oxydes d'azote, des produits soufrés, qui dégradent la qualité de l'air et la **santé** (maladies respiratoires et cardiovasculaires).
- **Ozone stratosphérique** (en altitude) : protecteur. **Ozone troposphérique** (près du sol) : **polluant**, formé à partir des gaz d'échappement sous le soleil.

### L'empreinte carbone
- C'est la **masse de CO2** (ou d'équivalent CO2) produite directement ou indirectement par la consommation d'énergie et de matières d'une activité ou d'une personne.
- On peut la réduire (sobriété, efficacité, énergies bas carbone) ou la **compenser** (plantation d'arbres, par exemple).

### Choisir une politique énergétique
- Les **scénarios** du GIEC font différentes hypothèses d'émissions et évaluent les conséquences, surtout pour les plus vulnérables.
- Critères de choix : disponibilité des ressources, adéquation aux besoins, effets climatiques, écologiques, sanitaires, agricoles, **risques**, faisabilité, conséquences économiques et sociales.
- **Inertie** : une centrale ou un réseau de transport dure des décennies, alors que l'action est urgente.
- Exemple du **nucléaire en France** : électricité très peu émettrice de CO2, mais déchets radioactifs à gérer et risque d'accident.
- La transition repose sur l'innovation (diversifier le **mix énergétique**) et sur l'évolution des **comportements** (consommation, déplacements).

### À retenir pour le bac
- Fossiles dominants, consommation inégale, doublée en 40 ans ; stocks et flux.
- Unités : 1 kWh = 3,6 × 10^6 J, tep ; E = P × t ; ordres de grandeur de puissance.
- Cycle du carbone : réservoirs et flux ; fossiles non renouvelables.
- Combustion = oxydation par O2, équation ajustée ; CO2 par unité d'énergie ; particules fines et ozone troposphérique nocifs.
- Empreinte carbone ; critères de choix énergétiques ; inertie face à l'urgence.`,
    cartes: [
      { q: "Ressources énergétiques dominantes dans le monde", r: "Les combustibles fossiles : pétrole, charbon, gaz." },
      { q: "Évolution de la consommation mondiale d'énergie", r: "Elle a doublé en 40 ans." },
      { q: "Énergies de stock et de flux", r: "Stocks : fossiles, uranium ; flux : solaire, géothermie, marées." },
      { q: "1 kWh en joules", r: "3,6 × 10^6 J." },
      { q: "Tonne équivalent pétrole (tep)", r: "L'énergie d'une tonne de pétrole, environ 4,2 × 10^10 J." },
      { q: "Relation entre énergie et puissance", r: "E = P × t." },
      { q: "Puissance d'un réacteur nucléaire", r: "Environ 1 000 MW." },
      { q: "Réservoirs du cycle du carbone", r: "Atmosphère, océans, êtres vivants, sols, roches et combustibles fossiles." },
      { q: "Pourquoi les fossiles sont non renouvelables", r: "Ils se forment en millions d'années, bien plus lentement qu'on ne les consomme." },
      { q: "Combustion du méthane", r: "CH4 + 2 O2 → CO2 + 2 H2O." },
      { q: "Ozone troposphérique", r: "Ozone près du sol, polluant, formé à partir des gaz d'échappement sous le soleil." },
      { q: "Empreinte carbone", r: "La masse de CO2 produite directement ou indirectement par une activité ou une personne." },
      { q: "Inertie des systèmes énergétiques", r: "Centrales et réseaux durent des décennies, alors que l'action est urgente." },
      { q: "Atout et limites du nucléaire en France", r: "Peu de CO2, mais déchets radioactifs et risque d'accident." },
    ],
    quiz: [
      { q: "Quelles ressources dominent la consommation mondiale d'énergie ?",
        choix: ["Le soleil, le vent et l'eau des barrages", "Le charbon, le pétrole et le gaz", "L'uranium des centrales nucléaires", "Le bois et la biomasse des forêts"],
        bonne: 1, niv: 1,
        expl: "Ils sont la principale cause du changement climatique." },
      { q: "Combien vaut 1 kWh en joules ?",
        choix: ["1 000 J", "3 600 J", "3,6 × 10^6 J", "4,2 × 10^10 J"],
        bonne: 2, niv: 2,
        expl: "1 kWh = 1 000 W × 3 600 s." },
      { q: "Un radiateur de 2 000 W fonctionne 3 heures. Quelle énergie consomme-t-il ?",
        choix: ["6 kWh", "0,67 kWh", "2 kWh", "600 kWh"],
        bonne: 0, niv: 2,
        expl: "E = P × t = 2 kW × 3 h." },
      { q: "Laquelle est une énergie de flux ?",
        choix: ["Le rayonnement solaire", "Le charbon", "L'uranium", "Le gaz naturel"],
        bonne: 0, niv: 1,
        expl: "Les autres sont des stocks." },
      { q: "Pourquoi les combustibles fossiles sont-ils non renouvelables ?",
        choix: ["Ils disparaissent du sous-sol dès qu'on commence à les extraire", "Ils sont fabriqués en grande quantité par l'industrie chimique", "Ils se forment en millions d'années, bien plus lentement qu'on ne les brûle", "Ils sont interdits d'exploitation depuis l'accord de Paris"],
        bonne: 2, niv: 2,
        expl: "Ils viennent de la matière organique d'anciens êtres vivants." },
      { q: "Quelle équation de combustion du méthane est ajustée ?",
        choix: ["CH4 + O2 → CO2 + H2O", "CH4 + 3 O2 → 2 CO2 + H2O", "CH4 + 2 O2 → CO2 + 2 H2O", "2 CH4 + O2 → CO2 + 4 H2O"],
        bonne: 2, niv: 3,
        expl: "On compte les atomes de chaque élément." },
      { q: "Pour la même énergie produite, quel combustible émet le plus de CO2 ?",
        choix: ["Le gaz naturel", "Le charbon", "L'uranium", "L'hydrogène"],
        bonne: 1, niv: 2,
        expl: "On compare la masse de CO2 par unité d'énergie." },
      { q: "Quelle différence y a-t-il entre l'ozone stratosphérique et troposphérique ?",
        choix: ["Le premier est un polluant, le second protège des UV", "Le premier protège des UV, le second est un polluant", "Ce sont deux gaz de formules différentes", "Le second se trouve au-dessus du premier"],
        bonne: 1, niv: 2,
        expl: "L'ozone troposphérique se forme près du sol." },
      { q: "Qu'est-ce que l'empreinte carbone d'une personne ?",
        choix: ["La masse de CO2 émise, directement ou non, par sa consommation", "La quantité de carbone contenue dans le corps de chaque habitant", "Le nombre d'arbres qu'elle a plantés au cours des dix dernières années", "La surface de forêt dont elle est propriétaire sur son territoire"],
        bonne: 0, niv: 2,
        expl: "On peut la réduire ou la compenser." },
      { q: "Pourquoi l'inertie des systèmes énergétiques pose-t-elle problème ?",
        choix: ["Les centrales s'arrêtent d'elles-mêmes au bout de quelques mois", "Les réseaux ne savent pas transporter l'électricité renouvelable", "Les énergies fossiles se renouvellent bien trop vite pour être limitées", "Les infrastructures durent des décennies alors que l'action est urgente"],
        bonne: 3, niv: 3,
        expl: "Il faut décider tôt." },
      { q: "Quel est l'inconvénient principal du nucléaire, du point de vue de l'environnement ?",
        choix: ["Les déchets radioactifs et le risque d'accident", "Ses fortes émissions de CO2", "Son intermittence liée au vent", "Sa production de particules fines"],
        bonne: 0, niv: 3,
        expl: "Il émet très peu de CO2." },
    ] },
  { chapitre: "ens-sci-7",
    fiche: `## Mesurer et préserver la biodiversité

Il existe sur Terre un très grand nombre d'espèces, et une part importante reste **à découvrir**. Mesurer la biodiversité permet de suivre son évolution et l'effet des activités humaines. On utilise pour cela des **échantillons** et des calculs de **proportions**.

### Décrire la biodiversité
- La **richesse spécifique** : le nombre d'espèces dans un milieu.
- L'**abondance** : le nombre d'individus d'une population, d'une espèce ou d'un groupe plus large (un taxon).
- On estime ces valeurs par **échantillonnage** : on compte sur une petite surface (un quadrat) ou lors d'une sortie de terrain, puis on extrapole.
- La **métagénomique** : on séquence tout l'**ADN** présent dans un échantillon (eau, sol, intestin) et on le compare à des bases de données ; on découvre ainsi des espèces invisibles à l'œil, comme les micro-organismes.

### La méthode de capture-marquage-recapture (CMR)
- On capture M individus, on les **marque** et on les relâche.
- Plus tard, on capture un second échantillon de n individus, parmi lesquels m sont marqués.
- On suppose que la **proportion** d'individus marqués est la même dans l'échantillon et dans la population totale N : m / n = M / N.
- D'où, par **quatrième proportionnelle** : **N = M × n / m**.
- Exemple : 50 poissons marqués ; on en recapture 40, dont 8 marqués ; N = 50 × 40 / 8 = 250 poissons.
- Conditions : population fermée (pas de naissances, morts ou migrations entre les deux captures), marques qui ne gênent pas les animaux et ne se perdent pas, bon mélange des individus.
- Un tableur permet de **simuler** de nombreuses recaptures : les résultats **fluctuent** d'un échantillon à l'autre ; leur moyenne se rapproche de la vraie valeur.

### L'intervalle de confiance
- À partir d'un échantillon de taille n où la fréquence observée d'un caractère est f, on estime la proportion p dans la population par l'**intervalle de confiance au niveau 95 %** : de **f − 1/√n** à **f + 1/√n** (formule donnée dans les exercices, valable pour un grand échantillon).
- Le niveau de confiance est **strictement inférieur à 100 %** à cause de la **fluctuation d'échantillonnage**.
- Plus l'échantillon est **grand**, plus l'intervalle est **étroit**, donc l'estimation **précise**.
- Exemple : n = 400 et f = 0,30 ; 1/√400 = 0,05 ; intervalle de 0,25 à 0,35.

### Les humains et la biodiversité
- Les activités humaines (destruction des habitats, pollution, surexploitation, espèces introduites, changement climatique) font varier l'**abondance** des espèces.
- La **fragmentation** d'un habitat (routes, champs, villes) découpe une population en petits groupes isolés : leur **diversité génétique s'appauvrit**, car les petits effectifs subissent davantage la dérive. Un quadrillage simple permet de calculer la surface d'un seul tenant restant pour une espèce.
- Des solutions : **corridors écologiques**, aires protégées, gestion durable des écosystèmes, plans de protection des espèces à faible effectif.

### Une seule santé
- L'approche « **Une seule santé** » relie la santé **humaine**, la santé **animale** et la santé des **écosystèmes** : elles ne peuvent plus être séparées.
- Exemple : la déforestation rapproche les humains d'animaux sauvages porteurs de virus, ce qui favorise le passage de maladies de l'animal à l'humain (zoonoses).

### À retenir pour le bac
- Richesse spécifique et abondance ; échantillonnage ; métagénomique.
- CMR : N = M × n / m, sous condition de population fermée et de bon mélange.
- Intervalle de confiance à 95 % : f − 1/√n à f + 1/√n ; plus n est grand, plus l'estimation est précise.
- Fragmentation et perte de diversité génétique ; « Une seule santé ».`,
    cartes: [
      { q: "Richesse spécifique", r: "Le nombre d'espèces dans un milieu." },
      { q: "Abondance", r: "Le nombre d'individus d'une population, d'une espèce ou d'un taxon." },
      { q: "Métagénomique", r: "Séquencer tout l'ADN d'un échantillon pour identifier les espèces présentes." },
      { q: "Principe de la CMR", r: "La proportion de marqués est la même dans l'échantillon et dans la population." },
      { q: "Formule de la CMR", r: "N = M × n / m (M marqués, n recapturés, m marqués parmi eux)." },
      { q: "Condition de la CMR", r: "Population fermée entre les deux captures et bon mélange des individus." },
      { q: "Fluctuation d'échantillonnage", r: "Les résultats varient d'un échantillon à l'autre." },
      { q: "Intervalle de confiance à 95 %", r: "De f − 1/√n à f + 1/√n." },
      { q: "Effet de la taille de l'échantillon", r: "Plus n est grand, plus l'intervalle est étroit et l'estimation précise." },
      { q: "Pourquoi le niveau de confiance est inférieur à 100 %", r: "À cause de la fluctuation d'échantillonnage." },
      { q: "Effet de la fragmentation d'une population", r: "Un appauvrissement de sa diversité génétique." },
      { q: "Corridor écologique", r: "Une continuité de milieux qui relie des populations séparées." },
      { q: "Une seule santé", r: "Relier santé humaine, santé animale et santé des écosystèmes." },
      { q: "Zoonose", r: "Une maladie qui passe de l'animal à l'humain." },
    ],
    quiz: [
      { q: "Que mesure la richesse spécifique ?",
        choix: ["Le nombre d'espèces d'un milieu", "Le nombre d'individus d'une espèce", "La masse totale des êtres vivants", "La diversité des allèles d'un gène"],
        bonne: 0, niv: 1,
        expl: "L'abondance compte les individus." },
      { q: "Que permet la métagénomique ?",
        choix: ["Compter les oiseaux d'un site à la jumelle, au lever du jour", "Mesurer la hauteur et le diamètre des arbres d'une forêt", "Dater un fossile grâce aux couches de roches qui l'entourent", "Identifier les espèces à partir de l'ADN d'un échantillon"],
        bonne: 3, niv: 2,
        expl: "Elle révèle des micro-organismes invisibles." },
      { q: "On marque 50 poissons, on en recapture 40 dont 8 marqués. Quelle est l'estimation de la population ?",
        choix: ["400", "64", "250", "160"],
        bonne: 2, niv: 2,
        expl: "N = 50 × 40 / 8." },
      { q: "Sur quelle hypothèse repose la CMR ?",
        choix: ["Les individus marqués se laissent recapturer bien plus facilement que les autres", "La population double exactement entre la première et la seconde capture", "La proportion de marqués est la même dans l'échantillon et la population", "Les individus marqués restent groupés et ne se mélangent pas aux autres"],
        bonne: 2, niv: 2,
        expl: "On calcule une quatrième proportionnelle." },
      { q: "Qu'est-ce qui fausse une estimation par CMR ?",
        choix: ["Un second échantillon tiré au hasard", "Des marques discrètes et durables", "Un bon mélange des individus", "De nombreuses naissances entre les deux captures"],
        bonne: 3, niv: 3,
        expl: "La population doit rester fermée." },
      { q: "Pourquoi un intervalle de confiance n'est-il jamais sûr à 100 % ?",
        choix: ["Parce qu'il existe une fluctuation d'échantillonnage", "Parce que la formule utilisée est approximative et fausse", "Parce que les espèces changent de nom au cours de l'étude", "Parce que le calcul utilise une racine carrée arrondie"],
        bonne: 0, niv: 2,
        expl: "Chaque échantillon donne un résultat un peu différent." },
      { q: "Avec n = 400 et f = 0,30, quel est l'intervalle de confiance à 95 % ?",
        choix: ["De 0,29 à 0,31", "De 0,25 à 0,35", "De 0,20 à 0,40", "De 0,30 à 0,70"],
        bonne: 1, niv: 3,
        expl: "1/√400 = 0,05." },
      { q: "Comment rendre une estimation plus précise ?",
        choix: ["Réduire la taille de l'échantillon", "Augmenter la taille de l'échantillon", "Changer de niveau de confiance à 100 %", "Faire une seule capture"],
        bonne: 1, niv: 2,
        expl: "L'intervalle se resserre quand n augmente." },
      { q: "Quel effet a la fragmentation d'un habitat sur une population ?",
        choix: ["Elle augmente sa diversité génétique", "Elle supprime la dérive génétique", "Elle appauvrit sa diversité génétique", "Elle multiplie le nombre d'espèces"],
        bonne: 2, niv: 2,
        expl: "Les petits groupes isolés subissent plus la dérive." },
      { q: "Que relie l'approche « Une seule santé » ?",
        choix: ["Santé physique, santé mentale et santé sociale des personnes", "Hôpitaux, cliniques et pharmacies d'un même territoire", "Santé humaine, santé animale et santé des écosystèmes", "Médecine générale, chirurgie et vaccination des enfants"],
        bonne: 2, niv: 1,
        expl: "Ces trois composantes ne peuvent plus être séparées." },
      { q: "Quelle mesure aide une population fragmentée ?",
        choix: ["Créer des corridors écologiques", "Construire de nouvelles routes", "Réduire la surface protégée", "Introduire une espèce concurrente"],
        bonne: 0, niv: 1,
        expl: "Ils relient les populations séparées." },
    ] },
  { chapitre: "ens-sci-8",
    fiche: `## Le modèle de Hardy-Weinberg

La composition génétique d'une population change de génération en génération. Pour le mesurer, on compare la réalité à un **modèle mathématique** : le modèle de **Hardy-Weinberg** (1908), qui décrit la transmission des allèles par les **probabilités**.

### Le vocabulaire
- Un **gène** existe sous plusieurs versions, les **allèles** (ici deux : A et a).
- Chaque individu a deux exemplaires du gène : son **génotype** est AA, Aa ou aa.
- La **fréquence d'un allèle** est sa proportion parmi tous les allèles de la population. On note **p** la fréquence de A et **q** celle de a, avec **p + q = 1**.

### Le modèle
- Hypothèses : population de **grand effectif**, reproduction au **hasard** (panmixie), **pas de migration**, **pas de mutation**, **pas de sélection**, **pas de dérive**.
- Les gamètes s'unissent au hasard : la probabilité d'obtenir un génotype est le produit des probabilités des allèles (tableau croisé).
- Fréquences des génotypes à la génération suivante : **AA : p²**, **Aa : 2pq**, **aa : q²**, avec **p² + 2pq + q² = 1**.
- Résultat : les fréquences des allèles restent **constantes**, et les fréquences des génotypes sont stables **à partir de la deuxième génération**. C'est l'**équilibre de Hardy-Weinberg**.
- Pour de grands effectifs, on assimile les probabilités aux fréquences (**loi des grands nombres**).

### Exemple de calcul
- Si p = 0,7, alors q = 0,3.
- Fréquences attendues : AA = 0,49 ; Aa = 2 × 0,7 × 0,3 = 0,42 ; aa = 0,09. La somme vaut bien 1.
- Dans une population de 1 000 individus, on attend environ 90 individus aa.
- On peut retrouver p à partir des génotypes : p = fréquence de AA + la moitié de la fréquence de Aa.

### Simuler le modèle
- Avec un **tableur** ou un programme **Python**, on calcule les fréquences génération après génération (une **suite** définie par récurrence) : elles restent constantes.
- Des logiciels de simulation montrent qu'avec un **petit effectif**, les fréquences varient au hasard : c'est la **dérive génétique**, qui peut faire disparaître un allèle.

### Les écarts au modèle : les forces évolutives
- Dans une population réelle, les fréquences observées s'écartent souvent du modèle. Ces écarts s'expliquent par des **forces évolutives** :
- la **sélection naturelle** : un allèle qui favorise la survie ou la reproduction devient plus fréquent ;
- la **dérive génétique** : variations aléatoires, fortes dans les petites populations ;
- les **mutations** : apparition de nouveaux allèles ;
- les **migrations** : arrivée ou départ d'individus porteurs d'autres allèles.
- Le modèle sert donc de **référence** : un écart signale qu'une force évolutive agit.

### À retenir pour le bac
- p + q = 1 ; génotypes attendus p², 2pq, q² ; p² + 2pq + q² = 1.
- Hypothèses : grand effectif, hasard, pas de migration, de mutation, de sélection ni de dérive.
- Fréquences stables dès la deuxième génération ; simulation par tableur ou Python.
- Écart au modèle : sélection, dérive (petits effectifs), mutation, migration.`,
    cartes: [
      { q: "Allèle", r: "Une version d'un gène." },
      { q: "Génotype", r: "La combinaison des deux allèles d'un individu : AA, Aa ou aa." },
      { q: "Relation entre p et q", r: "p + q = 1." },
      { q: "Fréquences des génotypes selon Hardy-Weinberg", r: "AA : p², Aa : 2pq, aa : q²." },
      { q: "Somme des fréquences des génotypes", r: "p² + 2pq + q² = 1." },
      { q: "Hypothèses du modèle de Hardy-Weinberg", r: "Grand effectif, unions au hasard, pas de migration, de mutation, de sélection ni de dérive." },
      { q: "Équilibre de Hardy-Weinberg", r: "Fréquences des génotypes stables à partir de la deuxième génération." },
      { q: "Loi des grands nombres dans le modèle", r: "Pour de grands effectifs, on assimile probabilités et fréquences." },
      { q: "Calcul de p à partir des génotypes", r: "p = fréquence de AA + la moitié de la fréquence de Aa." },
      { q: "Dérive génétique", r: "Variation aléatoire des fréquences, forte dans les petites populations." },
      { q: "Sélection naturelle", r: "Un allèle qui favorise survie ou reproduction devient plus fréquent." },
      { q: "Les quatre forces évolutives du chapitre", r: "Sélection, dérive, mutation, migration." },
      { q: "Intérêt du modèle", r: "Servir de référence : un écart signale une force évolutive." },
    ],
    quiz: [
      { q: "Si la fréquence de l'allèle A vaut 0,7, que vaut celle de a ?",
        choix: ["0,3", "0,7", "0,49", "1,7"],
        bonne: 0, niv: 1,
        expl: "p + q = 1." },
      { q: "Quelle est la fréquence attendue des hétérozygotes Aa ?",
        choix: ["p²", "q²", "2pq", "p + q"],
        bonne: 2, niv: 1,
        expl: "AA : p², aa : q²." },
      { q: "Avec p = 0,7 et q = 0,3, quelle fréquence de Aa attend-on ?",
        choix: ["0,42", "0,21", "0,49", "0,09"],
        bonne: 0, niv: 2,
        expl: "2 × 0,7 × 0,3 = 0,42." },
      { q: "Avec q = 0,3, combien d'individus aa attend-on sur 1 000 ?",
        choix: ["300", "90", "30", "420"],
        bonne: 1, niv: 2,
        expl: "q² = 0,09." },
      { q: "Laquelle est une hypothèse du modèle de Hardy-Weinberg ?",
        choix: ["Une forte sélection naturelle", "De nombreuses migrations", "Un petit effectif", "Une population de grand effectif"],
        bonne: 3, niv: 1,
        expl: "Le modèle suppose aussi des unions au hasard." },
      { q: "Que prédit le modèle pour les fréquences des génotypes ?",
        choix: ["Elles changent fortement à chaque nouvelle génération", "Elles deviennent égales à 1/3 pour chaque génotype", "Elles diminuent peu à peu jusqu'à tendre vers 0", "Elles sont stables à partir de la deuxième génération"],
        bonne: 3, niv: 2,
        expl: "C'est l'équilibre de Hardy-Weinberg." },
      { q: "Comment calcule-t-on p à partir des fréquences des génotypes ?",
        choix: ["Fréquence de AA ajoutée à la fréquence entière de Aa", "Fréquence de AA plus la moitié de celle de Aa", "Racine carrée de la fréquence des hétérozygotes Aa", "Fréquence des homozygotes aa divisée par deux"],
        bonne: 1, niv: 3,
        expl: "Chaque hétérozygote porte un seul allèle A." },
      { q: "Pourquoi utilise-t-on un tableur ou Python pour ce modèle ?",
        choix: ["Pour observer directement les gènes au microscope", "Pour calculer les fréquences génération après génération", "Pour se passer des observations faites sur le terrain", "Pour supprimer la dérive génétique des populations réelles"],
        bonne: 1, niv: 2,
        expl: "Les fréquences forment une suite définie par récurrence." },
      { q: "Quelle force évolutive a le plus d'effet dans une petite population ?",
        choix: ["La loi des grands nombres", "L'équilibre de Hardy-Weinberg", "La dérive génétique", "La photosynthèse"],
        bonne: 2, niv: 2,
        expl: "Le hasard pèse davantage sur un petit effectif." },
      { q: "Que signifie un écart entre les fréquences observées et le modèle ?",
        choix: ["Que le calcul des fréquences attendues est faux", "Que des forces évolutives agissent sur la population", "Que la population étudiée a un effectif infini", "Que les allèles étudiés ont disparu de la population"],
        bonne: 1, niv: 3,
        expl: "Le modèle sert de référence." },
      { q: "Quelle force apporte de nouveaux allèles ?",
        choix: ["La dérive", "La mutation", "La sélection", "Le hasard des unions"],
        bonne: 1, niv: 3,
        expl: "La migration peut aussi apporter des allèles d'ailleurs." },
    ] },
  { chapitre: "ens-sci-9",
    fiche: `## L'évolution comme grille de lecture du monde

Les concepts de l'évolution, **variation**, **hasard**, **sélection naturelle**, **adaptation**, expliquent bien plus que l'origine des espèces. Ils éclairent notre propre anatomie, la médecine et l'agriculture.

### Les concepts à mobiliser
- **Variation** : dans une population, les individus diffèrent, notamment par des **mutations** apparues **au hasard**.
- **Sélection naturelle** : dans un milieu donné, les individus porteurs de certains caractères survivent ou se reproduisent mieux ; ces caractères deviennent plus fréquents au fil des générations.
- **Adaptation** : un caractère qui augmente la survie ou la reproduction dans un milieu.
- **Contingence** et **héritage** : l'évolution modifie ce qui existe déjà ; elle ne part pas de zéro et ne vise aucun but.

### Une anatomie héritée de l'histoire
- Certains caractères ne s'expliquent pas par leur fonction, mais par l'**histoire évolutive**.
- **Contrainte historique** : le trajet de la **crosse aortique**. Un nerf du larynx descend dans le thorax, fait le tour de l'aorte et remonte : un détour hérité d'ancêtres à cou court, devenu très long chez la girafe.
- **Contrainte de construction** : le **téton masculin**. Les tétons se forment chez l'embryon avant que le sexe ne se différencie ; ils persistent donc chez l'homme sans fonction.
- **Compromis sélectif** : les **difficultés de l'accouchement** chez l'humain. La bipédie a rétréci le bassin, alors que le cerveau du bébé est gros : la sélection a trouvé un compromis entre deux avantages.
- **Régression en cours** : les **dents de sagesse**, qui manquent souvent de place car la mâchoire humaine s'est raccourcie.

### L'évolution et la médecine
- Les **bactéries** se reproduisent très vite et mutent : une mutation peut les rendre **résistantes** à un antibiotique.
- Quand on utilise un antibiotique, il tue les bactéries sensibles ; les résistantes survivent et se multiplient : c'est une **sélection**. L'usage excessif ou mal suivi des antibiotiques favorise donc l'**antibiorésistance**.
- Stratégies : limiter les antibiotiques aux infections bactériennes, suivre le traitement jusqu'au bout, développer de nouvelles molécules, l'hygiène et la vaccination.
- Les **virus** évoluent aussi : de nouveaux **variants** apparaissent (grippe, SARS-CoV-2), ce qui oblige à **adapter les vaccins**, comme celui de la grippe chaque année.

### L'évolution et l'agriculture
- La **domestication** des animaux et des plantes est une **sélection artificielle** : l'humain choisit les reproducteurs (le chien vient du loup).
- L'usage répété de **produits phytosanitaires** (insecticides, herbicides) sélectionne des **ravageurs résistants**, comme les antibiotiques sélectionnent des bactéries résistantes.
- Les pratiques intensives réduisent la biodiversité ; la recherche agronomique développe des pratiques plus **durables** (rotation des cultures, lutte biologique, variétés diversifiées).

### Rédiger une explication évolutive
- Partir de la **variation** préexistante (apparue au hasard), puis montrer l'effet du **milieu** (antibiotique, prédateur, climat) qui **sélectionne** certains individus, puis l'**augmentation de fréquence** du caractère au fil des générations.
- Éviter les erreurs : les bactéries ne « deviennent » pas résistantes pour survivre ; la mutation existe avant, l'antibiotique la sélectionne.

### À retenir pour le bac
- Variation au hasard, sélection naturelle, adaptation, héritage de l'histoire.
- Anatomie : crosse aortique (histoire), téton masculin (construction), accouchement (compromis), dents de sagesse (régression).
- Antibiorésistance et variants viraux : sélection par l'usage des médicaments ; adapter les stratégies.
- Domestication et résistance des ravageurs : des sélections causées par l'humain.`,
    cartes: [
      { q: "Variation", r: "Différences entre individus d'une population, dues notamment à des mutations aléatoires." },
      { q: "Sélection naturelle", r: "Les individus les mieux adaptés au milieu survivent ou se reproduisent davantage." },
      { q: "Adaptation", r: "Un caractère qui augmente la survie ou la reproduction dans un milieu." },
      { q: "Contrainte historique", r: "Un caractère hérité d'ancêtres, comme le trajet du nerf autour de la crosse aortique." },
      { q: "Contrainte de construction", r: "Un caractère lié au développement de l'embryon, comme le téton masculin." },
      { q: "Compromis sélectif chez l'humain", r: "Les difficultés de l'accouchement : bassin étroit (bipédie) et gros cerveau." },
      { q: "Régression en cours", r: "Les dents de sagesse, qui manquent de place dans une mâchoire raccourcie." },
      { q: "Antibiorésistance", r: "La résistance de bactéries aux antibiotiques, sélectionnée par leur usage." },
      { q: "Origine d'une bactérie résistante", r: "Une mutation aléatoire existe avant ; l'antibiotique la sélectionne." },
      { q: "Pourquoi adapter le vaccin de la grippe chaque année", r: "Le virus évolue et de nouveaux variants apparaissent." },
      { q: "Domestication", r: "Une sélection artificielle : l'humain choisit les reproducteurs." },
      { q: "Effet des pesticides à long terme", r: "Ils sélectionnent des ravageurs résistants." },
      { q: "Plan d'une explication évolutive", r: "Variation préexistante, sélection par le milieu, augmentation de fréquence." },
    ],
    quiz: [
      { q: "D'où vient la variation entre individus d'une population ?",
        choix: ["D'un besoin de s'adapter au milieu", "D'une décision de l'organisme", "Du climat qui modifie directement les gènes", "Notamment de mutations apparues au hasard"],
        bonne: 3, niv: 1,
        expl: "La sélection agit ensuite." },
      { q: "Qu'est-ce que la sélection naturelle ?",
        choix: ["Les individus choisissent eux-mêmes les mutations qui leur sont utiles", "Les individus les mieux adaptés au milieu se reproduisent davantage", "L'humain choisit les reproducteurs selon les caractères qu'il préfère", "Les individus d'une population laissent la même descendance"],
        bonne: 1, niv: 1,
        expl: "La sélection artificielle est faite par l'humain." },
      { q: "Quel exemple illustre une contrainte historique ?",
        choix: ["Les difficultés de l'accouchement chez la femme", "Les dents de sagesse qui manquent de place", "Le trajet d'un nerf autour de la crosse aortique", "La résistance de certaines bactéries aux antibiotiques"],
        bonne: 2, niv: 2,
        expl: "Un détour hérité d'ancêtres à cou court." },
      { q: "Pourquoi les hommes ont-ils des tétons ?",
        choix: ["Ils se forment chez l'embryon avant la différenciation du sexe", "Ils servaient à allaiter les petits chez nos ancêtres masculins", "Ils sont apparus récemment par sélection naturelle chez l'homme", "Ils protègent le cœur et les poumons contre les chocs"],
        bonne: 0, niv: 2,
        expl: "C'est une contrainte de construction." },
      { q: "Pourquoi l'accouchement est-il difficile chez l'humain ?",
        choix: ["Parce que le bébé humain est plus petit que chez les autres primates", "À cause de la disparition des dents de sagesse", "Parce que l'humain ne marche plus beaucoup", "Compromis entre un bassin adapté à la bipédie et un gros cerveau"],
        bonne: 3, niv: 2,
        expl: "C'est un compromis sélectif." },
      { q: "Comment apparaît une population de bactéries résistantes ?",
        choix: ["Les bactéries décident de devenir résistantes pour survivre", "L'antibiotique transforme les bactéries en bactéries résistantes", "L'antibiotique tue les sensibles, les résistantes déjà présentes se multiplient", "Les résistantes viennent du patient lui-même"],
        bonne: 2, niv: 3,
        expl: "La mutation existe avant l'antibiotique." },
      { q: "Quel comportement favorise l'antibiorésistance ?",
        choix: ["Se laver les mains", "Prendre des antibiotiques contre un virus", "Se faire vacciner", "Suivre le traitement jusqu'au bout"],
        bonne: 1, niv: 2,
        expl: "Les antibiotiques n'agissent pas sur les virus." },
      { q: "Pourquoi faut-il adapter le vaccin contre la grippe ?",
        choix: ["Le virus évolue et de nouveaux variants apparaissent", "Le corps oublie la vaccination en un mois environ", "Le vaccin devient toxique quand il est conservé un an", "Les bactéries détruisent peu à peu l'ancien vaccin"],
        bonne: 0, niv: 2,
        expl: "L'évolution est rapide chez les virus." },
      { q: "Qu'est-ce que la domestication ?",
        choix: ["Une sélection naturelle sans intervention humaine", "Une mutation provoquée en laboratoire", "Une migration d'animaux vers les villes", "Une sélection artificielle faite par l'humain"],
        bonne: 3, niv: 1,
        expl: "Le chien vient du loup." },
      { q: "Quel effet a l'usage répété d'un insecticide ?",
        choix: ["Il supprime toute mutation chez les insectes", "Il sélectionne des ravageurs résistants", "Il augmente la biodiversité des champs", "Il rend les plantes résistantes aux insectes"],
        bonne: 1, niv: 3,
        expl: "Même logique que l'antibiorésistance." },
      { q: "Quelle est l'erreur dans « la girafe a allongé son cou pour atteindre les feuilles » ?",
        choix: ["Elle suppose un but, alors que la variation précède la sélection", "Elle oublie que le cou des girafes ne contient pas de vertèbres", "Elle confond la girafe et l'okapi, qui a un cou plus court", "Elle ne précise pas la date d'apparition des premières girafes"],
        bonne: 0, niv: 3,
        expl: "L'évolution ne vise aucun but." },
    ] },
  { chapitre: "ens-sci-10",
    fiche: `## L'évolution humaine

La **paléoanthropologie** reconstruit l'histoire de nos origines à partir des **fossiles**. La **phylogénie** établit les liens de parenté entre espèces actuelles et fossiles. La génétique complète ces archives rares.

### L'humain parmi les primates
- L'espèce humaine actuelle, **Homo sapiens**, fait partie des **primates**. Elle est apparentée aux **grands singes** (orang-outan, gorille, chimpanzé, bonobo) : elle partage avec eux des caractères **anatomiques**, des **comportements** et de fortes **ressemblances génétiques**.
- C'est avec le **chimpanzé** (et le bonobo) qu'elle partage l'**ancêtre commun le plus récent**, il y a environ 7 millions d'années.
- Attention : l'humain ne descend pas du chimpanzé ; ils ont un **ancêtre commun**.

### Construire un arbre de parenté
- On compare les espèces dans une **matrice de caractères** : pour chaque caractère, on note l'état **ancestral** et l'état **dérivé** (une **innovation évolutive**).
- Deux espèces sont d'autant plus proches qu'elles partagent **plus d'innovations**.
- On peut aussi comparer les **séquences d'ADN** ou de protéines : moins il y a de différences, plus la parenté est proche.
- L'**arbre phylogénétique** montre les ancêtres communs aux nœuds ; les espèces actuelles et fossiles sont aux extrémités des branches.

### La lignée humaine
- Elle regroupe les espèces plus proches de nous que du chimpanzé.
- Les fossiles de **3 à 7 millions d'années** montrent des **innovations** caractéristiques : la **bipédie prolongée** (trou occipital sous le crâne, bassin court et large, fémur oblique) et une **mandibule** en forme de U (parabolique), avec des canines réduites.
- Exemples de fossiles : Toumaï (Sahelanthropus, environ 7 millions d'années, Tchad), Lucy (Australopithecus afarensis, environ 3,2 millions d'années, Éthiopie).
- La lignée est **buissonnante** : plusieurs espèces ont vécu en même temps, beaucoup se sont éteintes sans descendance. Ce n'est pas une file d'ancêtres qui mène droit à nous.

### Le genre Homo
- Le genre **Homo** regroupe l'espèce actuelle et des espèces fossiles, caractérisées notamment par l'augmentation de la **capacité crânienne** (le volume du cerveau).
- Plusieurs espèces humaines ont **cohabité** : Homo sapiens a côtoyé les **Néandertaliens** (en Europe et au Moyen-Orient) et les **Dénisoviens** (en Asie).
- L'**ADN ancien** extrait de fossiles montre que les humains actuels non africains portent un petit pourcentage d'ADN néandertalien (environ 2 %) : il y a eu des **métissages**.

### Ce qui se transmet sans les gènes
- Certains caractères se transmettent de façon **non génétique** : le **microbiote**, les comportements **appris** comme la **langue**, les habitudes alimentaires, l'usage des **outils**. C'est la transmission **culturelle**.

### À retenir pour le bac
- Homo sapiens est un primate, parent des grands singes ; ancêtre commun le plus récent avec le chimpanzé.
- Arbre phylogénétique : on regroupe les espèces qui partagent des innovations ; comparaison génétique.
- Lignée humaine (3 à 7 millions d'années) : bipédie, mandibule ; lignée buissonnante.
- Genre Homo : capacité crânienne ; cohabitation et métissages avec Néandertaliens et Dénisoviens ; transmission culturelle.`,
    cartes: [
      { q: "Paléoanthropologie", r: "La science qui retrace l'histoire de la lignée humaine à partir des fossiles." },
      { q: "Groupe auquel appartient Homo sapiens", r: "Les primates, et plus précisément les grands singes au sens large." },
      { q: "Espèce qui partage avec nous l'ancêtre commun le plus récent", r: "Le chimpanzé (avec le bonobo)." },
      { q: "Erreur classique sur l'origine de l'humain", r: "L'humain ne descend pas du chimpanzé : ils ont un ancêtre commun." },
      { q: "Innovation évolutive", r: "Un état dérivé d'un caractère, apparu chez un ancêtre et transmis à ses descendants." },
      { q: "Principe d'un arbre phylogénétique", r: "Les espèces qui partagent le plus d'innovations sont les plus proches." },
      { q: "Innovations de la lignée humaine", r: "Bipédie prolongée et mandibule en U, sur des fossiles de 3 à 7 millions d'années." },
      { q: "Indice de bipédie sur un crâne", r: "Un trou occipital placé sous le crâne." },
      { q: "Lignée buissonnante", r: "Plusieurs espèces ont coexisté, beaucoup se sont éteintes sans descendance." },
      { q: "Caractère du genre Homo", r: "L'augmentation de la capacité crânienne." },
      { q: "Espèces humaines contemporaines de Homo sapiens", r: "Les Néandertaliens et les Dénisoviens." },
      { q: "Preuve de métissage avec Néandertal", r: "Environ 2 % d'ADN néandertalien chez les humains actuels non africains." },
      { q: "Transmission non génétique", r: "Microbiote, langue, habitudes alimentaires, usage d'outils." },
      { q: "Lucy", r: "Un australopithèque d'environ 3,2 millions d'années, découvert en Éthiopie." },
    ],
    quiz: [
      { q: "Avec quelle espèce actuelle partageons-nous l'ancêtre commun le plus récent ?",
        choix: ["Le gorille", "Le chimpanzé", "L'orang-outan", "Le macaque"],
        bonne: 1, niv: 1,
        expl: "Le bonobo est aussi très proche." },
      { q: "Quelle affirmation est correcte ?",
        choix: ["L'humain descend directement du chimpanzé actuel", "Le chimpanzé descend directement de l'humain actuel", "L'humain est sans lien de parenté avec les grands singes", "L'humain et le chimpanzé ont un ancêtre commun"],
        bonne: 3, niv: 1,
        expl: "Aucune espèce actuelle n'est l'ancêtre d'une autre." },
      { q: "Sur quoi se fonde un arbre phylogénétique ?",
        choix: ["La taille et la masse des espèces comparées", "Le partage d'innovations évolutives", "L'âge de découverte des fossiles par les chercheurs", "Le lieu de vie actuel et le régime alimentaire"],
        bonne: 1, niv: 2,
        expl: "On utilise une matrice de caractères." },
      { q: "Que montre une faible différence entre deux séquences d'ADN ?",
        choix: ["Une parenté proche", "Une parenté lointaine", "L'absence de lien", "Une erreur de mesure"],
        bonne: 0, niv: 2,
        expl: "Les mutations s'accumulent avec le temps." },
      { q: "Quel indice révèle la bipédie sur un crâne fossile ?",
        choix: ["Des canines très longues et pointues", "Un trou occipital placé sous le crâne", "Une petite capacité crânienne, sous 500 cm³", "Un crâne très allongé vers l'arrière de la tête"],
        bonne: 1, niv: 3,
        expl: "La colonne vertébrale arrive alors à la verticale." },
      { q: "Quel âge ont les fossiles qui montrent les premières innovations de la lignée humaine ?",
        choix: ["De 3 à 7 millions d'années", "De 10 000 à 50 000 ans", "De 100 à 200 millions d'années", "De 300 000 à 500 000 ans"],
        bonne: 0, niv: 2,
        expl: "Toumaï a environ 7 millions d'années." },
      { q: "Que signifie « lignée buissonnante » ?",
        choix: ["Chaque espèce est l'ancêtre de la suivante", "Les fossiles sont trouvés dans des buissons", "La lignée humaine ne comporte qu'une espèce", "Plusieurs espèces ont coexisté et beaucoup se sont éteintes"],
        bonne: 3, niv: 2,
        expl: "Ce n'est pas une file d'ancêtres." },
      { q: "Quel caractère distingue le genre Homo ?",
        choix: ["La perte de la bipédie", "L'augmentation de la capacité crânienne", "La présence d'une queue", "Des canines plus longues"],
        bonne: 1, niv: 2,
        expl: "Le volume du cerveau augmente." },
      { q: "Avec quelles espèces humaines Homo sapiens a-t-il cohabité ?",
        choix: ["Les australopithèques et Toumaï, plus tard", "Les chimpanzés et les gorilles, ses ancêtres", "Les Néandertaliens et les Dénisoviens", "Homo erectus seul, en Afrique de l'Est"],
        bonne: 2, niv: 3,
        expl: "Il y a eu des métissages." },
      { q: "Comment sait-on qu'il y a eu des métissages avec les Néandertaliens ?",
        choix: ["Grâce à des peintures rupestres qui montrent des couples", "Grâce aux récits historiques des premières civilisations", "Grâce à l'ADN ancien extrait de fossiles", "Grâce à la taille et à la forme des outils en pierre taillée"],
        bonne: 2, niv: 3,
        expl: "Environ 2 % de notre ADN chez les non-Africains." },
      { q: "Lequel est transmis de façon non génétique ?",
        choix: ["Le groupe sanguin", "La couleur des yeux", "La forme du nez", "La langue parlée"],
        bonne: 3, niv: 1,
        expl: "C'est une transmission culturelle." },
    ] },
  { chapitre: "ens-sci-11",
    fiche: `## Les modèles démographiques

Prévoir l'évolution d'une population humaine et de ses ressources est un enjeu majeur du développement durable. On utilise des **modèles mathématiques** : choisir un modèle, déterminer ses paramètres, le confronter aux données réelles, et parfois limiter son domaine de validité.

### Variation absolue et variation relative
- **Variation absolue** entre deux années : différence des effectifs, u(n+1) − u(n).
- **Variation relative** (ou **taux d'évolution**) : variation absolue divisée par l'effectif de départ, (u(n+1) − u(n)) / u(n), souvent exprimée en pourcentage.
- Exemple : une ville passe de 20 000 à 20 600 habitants ; variation absolue + 600 ; variation relative 600 / 20 000 = 0,03, soit + 3 %.

### Le modèle linéaire
- Si la **variation absolue** par unité de temps est presque **constante**, le nuage de points évoque une **droite**.
- On modélise par une **suite arithmétique** : u(n+1) = u(n) + r, donc u(n) = u(0) + n × r.
- Exemple : 1 000 individus et + 50 par an ; après 10 ans, 1 000 + 10 × 50 = 1 500.

### Le modèle exponentiel
- Si la **variation relative** par unité de temps est presque **constante**, le nuage de points évoque une courbe **exponentielle** (qui monte de plus en plus vite).
- On modélise par une **suite géométrique** : u(n+1) = u(n) × q, donc u(n) = u(0) × q^n, où q = 1 + taux.
- Exemple : 1 000 individus et + 5 % par an ; q = 1,05 ; après 10 ans, 1 000 × 1,05^10 ≈ 1 629.

### Le modèle de Malthus
- **Thomas Malthus** publie en 1798 son Essai sur le principe de population. Selon lui, la population croît de façon **géométrique**, alors que les ressources alimentaires croissent au mieux de façon **arithmétique** : il prévoit donc des famines.
- Son modèle est **exponentiel** : u(n+1) = u(n) × (1 + natalité − mortalité), les taux étant exprimés en proportion de la population.
- Si le taux de **natalité** est supérieur au taux de **mortalité**, la population croît vers l'infini ; si la mortalité l'emporte, elle décroît vers 0.
- Exemple : natalité 3 %, mortalité 1 % ; q = 1,02 ; la population est multipliée par 1,02 chaque année.

### Le temps de doublement
- C'est le nombre d'années au bout duquel la population a **doublé** : on cherche le premier n tel que q^n ≥ 2, avec un tableur, une calculatrice ou un graphique.
- Avec + 2 % par an, la population double en environ **35 ans** (1,02^35 ≈ 2).

### Les limites des modèles
- Le modèle de Malthus peut être juste sur un **temps court**, mais il est **irréaliste** sur un temps long : les ressources ne suffisent pas, et les taux de natalité et de mortalité changent (transition démographique).
- Des modèles plus élaborés, comme celui de Verhulst (1838), où la croissance ralentit quand la population approche d'un maximum, sont plus réalistes.
- La population mondiale a atteint **8 milliards** en 2022 ; les projections prévoient environ **10 milliards** vers 2050.
- On **teste** un modèle en comparant ses valeurs aux données réelles ; on peut **ajuster** un nuage de points par une courbe de tendance pour faire des prévisions.
- On compare aussi la croissance des **ressources** (production mondiale de blé ou de riz, souvent plutôt linéaire) à une croissance exponentielle.

### À retenir pour le bac
- Variation absolue constante : modèle linéaire, suite arithmétique u(n) = u(0) + n × r.
- Variation relative constante : modèle exponentiel, suite géométrique u(n) = u(0) × q^n.
- Malthus : q = 1 + natalité − mortalité ; croissance vers l'infini ou décroissance vers 0 ; irréaliste à long terme.
- Temps de doublement (environ 35 ans à 2 % par an) ; valider un modèle par les données réelles.`,
    cartes: [
      { q: "Variation absolue", r: "La différence des effectifs : u(n+1) − u(n)." },
      { q: "Variation relative", r: "La variation absolue divisée par l'effectif de départ." },
      { q: "Quand choisir un modèle linéaire", r: "Quand la variation absolue par unité de temps est presque constante." },
      { q: "Suite arithmétique", r: "u(n) = u(0) + n × r." },
      { q: "Quand choisir un modèle exponentiel", r: "Quand la variation relative par unité de temps est presque constante." },
      { q: "Suite géométrique", r: "u(n) = u(0) × q^n." },
      { q: "Coefficient d'une hausse de 5 % par an", r: "q = 1,05." },
      { q: "Thomas Malthus", r: "Auteur en 1798 d'un modèle de croissance exponentielle de la population." },
      { q: "Coefficient du modèle de Malthus", r: "q = 1 + taux de natalité − taux de mortalité." },
      { q: "Prévision de Malthus si la natalité dépasse la mortalité", r: "Une croissance vers l'infini." },
      { q: "Temps de doublement", r: "Le nombre d'années au bout duquel la population a doublé." },
      { q: "Temps de doublement à + 2 % par an", r: "Environ 35 ans." },
      { q: "Limite du modèle de Malthus", r: "Irréaliste sur un temps long, à cause des ressources limitées." },
      { q: "Population mondiale en 2022 et prévision pour 2050", r: "8 milliards ; environ 10 milliards." },
    ],
    quiz: [
      { q: "Une ville passe de 20 000 à 20 600 habitants. Quelle est la variation relative ?",
        choix: ["+ 600 %", "+ 0,6 %", "+ 3 %", "+ 30 %"],
        bonne: 2, niv: 1,
        expl: "600 / 20 000 = 0,03." },
      { q: "Quel modèle choisir si la population augmente d'environ 50 individus chaque année ?",
        choix: ["Un modèle exponentiel", "Le modèle de Hardy-Weinberg", "Un modèle de Malthus décroissant", "Un modèle linéaire"],
        bonne: 3, niv: 1,
        expl: "La variation absolue est constante." },
      { q: "Quelle formule donne une suite arithmétique ?",
        choix: ["u(n) = u(0) × q^n", "u(n) = u(0) + n × r", "u(n) = u(0) × n × q", "u(n) = r^n + u(0)"],
        bonne: 1, niv: 2,
        expl: "La suite géométrique utilise une puissance." },
      { q: "Quel modèle choisir si la population augmente d'environ 2 % chaque année ?",
        choix: ["Un modèle exponentiel", "Un modèle linéaire", "Un modèle constant", "Un modèle sans paramètre"],
        bonne: 0, niv: 2,
        expl: "La variation relative est constante." },
      { q: "Une population de 1 000 individus augmente de 5 % par an. Quel effectif environ après 10 ans ?",
        choix: ["1 500", "1 629", "1 050", "5 000"],
        bonne: 1, niv: 3,
        expl: "1 000 × 1,05^10." },
      { q: "Que prévoyait Malthus en 1798 ?",
        choix: ["Une population qui diminue d'elle-même au fil des siècles", "Une population qui croît plus vite que les ressources", "Des ressources qui croissent plus vite que la population", "Une population qui reste stable pendant des siècles"],
        bonne: 1, niv: 2,
        expl: "Croissance géométrique contre croissance arithmétique." },
      { q: "Avec une natalité de 3 % et une mortalité de 1 %, quel est le coefficient q du modèle de Malthus ?",
        choix: ["1,04", "0,98", "1,03", "1,02"],
        bonne: 3, niv: 2,
        expl: "q = 1 + 0,03 − 0,01." },
      { q: "Que prévoit le modèle de Malthus si la mortalité dépasse la natalité ?",
        choix: ["Une croissance vers l'infini", "Une population constante", "Une décroissance vers 0", "Une croissance linéaire"],
        bonne: 2, niv: 2,
        expl: "Le coefficient q est alors inférieur à 1." },
      { q: "Environ combien de temps faut-il pour doubler une population qui croît de 2 % par an ?",
        choix: ["50 ans", "2 ans", "200 ans", "35 ans"],
        bonne: 3, niv: 3,
        expl: "1,02^35 ≈ 2." },
      { q: "Pourquoi le modèle de Malthus est-il irréaliste à long terme ?",
        choix: ["Il ne contient pas de taux de natalité ni de taux de mortalité", "Il prévoit une population constante au cours du temps", "Il ne s'applique qu'aux populations de bactéries", "Il ignore que les ressources sont limitées et que les taux changent"],
        bonne: 3, niv: 3,
        expl: "Il peut être juste sur un temps court." },
      { q: "Comment tester la validité d'un modèle démographique ?",
        choix: ["Vérifier que sa courbe représentative est une droite", "Choisir le modèle qui comporte le moins de calculs", "Comparer ses valeurs aux données réelles", "Prolonger la courbe jusqu'en 2100 sur un graphique"],
        bonne: 2, niv: 1,
        expl: "Un écart important limite son domaine de validité." },
    ] },
  { chapitre: "ens-sci-12",
    fiche: `## De la machine de Turing à l'IA

L'humain a construit des machines pour traiter l'information, puis des **langages** pour les commander. L'**IA** (le sigle désigne ici des programmes qui imitent des tâches de la pensée) cherche à comprendre et imiter des mécanismes de la pensée pour assister ou remplacer des activités humaines : reconnaître des objets dans une image, conduire, traduire, dialoguer.

### Des machines spécialisées à l'ordinateur
- Jusqu'au début du XXe siècle, les machines ne font qu'**une ou quelques tâches** : le métier à tisser de Jacquard guidé par des **cartes perforées** (1801), les machines à trier et additionner des cartes perforées pour le recensement américain (Hollerith, 1890).
- **Alan Turing** propose en **1936** le concept de **machine universelle**, capable d'exécuter n'importe quel algorithme. Il est matérialisé une dizaine d'années plus tard par les **premiers ordinateurs**.
- Un ordinateur comprend au minimum un **processeur** (qui calcule) et une **mémoire vive** (qui garde les données et le programme en cours).

### Données et programmes
- Un ordinateur traite des données de toute nature une fois **numérisées** : texte, image, son.
- Un **programme** est lui aussi une donnée : il peut être stocké, transporté, traité. Un programme écrit dans un langage de **haut niveau** (Python, Scratch) est **traduit** en instructions propres à chaque processeur.
- Un fichier **exécutable** contient un programme que le système lance ; les autres fichiers (texte, image) sont ouverts par un programme.
- **Tailles** : 1 octet = 8 bits ; en ASCII non compressé, **un caractère = un octet**. Une page de texte de 3 000 caractères pèse environ 3 000 octets, soit 3 ko. Ordres de grandeur : une photo, quelques Mo ; une chanson compressée, quelques Mo ; un film, de l'ordre du Go.
- Un programme peut compter des **centaines de millions de lignes** : des erreurs, les **bogues** (bugs), sont alors très probables et peuvent avoir des conséquences graves. Il faut savoir corriger un programme simple.

### Les débuts et l'essor de l'IA
- Le terme naît en **1956** (conférence de Dartmouth). L'approche **symbolique** (systèmes experts, règles écrites par des humains), lancée à la fin des années 1950, n'a pas tenu ses promesses.
- Aujourd'hui, l'IA désigne surtout l'**apprentissage automatique** (apprentissage machine) : un algorithme améliore ses performances non pas parce qu'un humain le reprogramme, mais en s'exerçant sur de grandes quantités de **données** (données massives).
- Il repère des **tendances** (corrélations, ressemblances) pour faire des **prédictions** ou prendre des **décisions** sur de nouvelles données. Exemple simple : une **courbe de tendance** (régression) calculée sur des données d'entraînement permet d'estimer une valeur inconnue. Autres exemples : l'algorithme des **k plus proches voisins**, les **réseaux de neurones**.

### Les limites et les risques
- La **qualité** et la **représentativité** des données sont essentielles : une IA entraînée sur des données **biaisées** reproduit et **amplifie** ces biais (par exemple, une reconnaissance de visages moins fiable pour les groupes peu présents dans les données).
- **Corrélation n'est pas causalité** : deux grandeurs liées statistiquement ne sont pas forcément cause l'une de l'autre.
- Questions **éthiques** : protection des données personnelles, propriété intellectuelle, responsabilité en cas d'erreur, contenus créés par des IA génératives.

### L'inférence bayésienne et le diagnostic
- Elle calcule la **probabilité d'une cause** à partir de la probabilité de ses **effets**. Exemple : la probabilité d'être malade quand le test est positif.
- On construit un **tableau de contingence** : malades ou non, test positif ou négatif. On y lit les **vrais positifs**, **faux positifs**, **vrais négatifs**, **faux négatifs**.
- Exemple : 10 000 personnes, 1 % de malades (100). Le test détecte 90 malades (90 vrais positifs, 10 faux négatifs) et donne 5 % de positifs chez les 9 900 non-malades (495 faux positifs). Parmi les 585 positifs, seuls 90 sont malades : environ 15 %.
- Même démarche pour d'autres classements : filtre à messages indésirables, reconnaissance d'images.

### À retenir pour le bac
- Turing (1936) : machine universelle ; ordinateur = processeur + mémoire vive ; un programme est une donnée.
- 1 caractère ASCII = 1 octet ; ordres de grandeur des fichiers ; bogues.
- IA née en 1956 ; aujourd'hui surtout apprentissage automatique sur données massives.
- Biais des données, corrélation et causalité, enjeux éthiques.
- Tableau de contingence : vrais et faux positifs et négatifs ; probabilité d'être malade si le test est positif.`,
    cartes: [
      { q: "Machines d'information avant le XXe siècle", r: "Des machines à une seule tâche, comme le métier Jacquard à cartes perforées." },
      { q: "Apport d'Alan Turing en 1936", r: "Le concept de machine universelle, capable d'exécuter tout algorithme." },
      { q: "Composants minimaux d'un ordinateur", r: "Un processeur et une mémoire vive." },
      { q: "Un programme est-il une donnée ?", r: "Oui : il peut être stocké, transporté et traité." },
      { q: "Langage de haut niveau", r: "Un langage comme Python, traduit en instructions du processeur." },
      { q: "Taille d'un caractère en ASCII", r: "Un octet (8 bits)." },
      { q: "Bogue", r: "Une erreur dans un programme, qui peut provoquer un comportement inattendu." },
      { q: "Naissance du domaine de l'IA", r: "1956." },
      { q: "Apprentissage automatique", r: "Un algorithme améliore ses performances en s'exerçant sur des données." },
      { q: "Risque des données biaisées", r: "L'IA reproduit et amplifie les biais." },
      { q: "Corrélation et causalité", r: "Une corrélation ne prouve pas un lien de cause à effet." },
      { q: "Inférence bayésienne", r: "Calculer la probabilité d'une cause à partir de celle de ses effets." },
      { q: "Faux positif", r: "Un test positif chez une personne non malade." },
      { q: "Faux négatif", r: "Un test négatif chez une personne malade." },
    ],
    quiz: [
      { q: "Qu'a proposé Alan Turing en 1936 ?",
        choix: ["Le premier téléphone portable", "La carte perforée du métier à tisser", "Le langage Python", "Le concept de machine universelle"],
        bonne: 3, niv: 1,
        expl: "Il a été matérialisé par les premiers ordinateurs." },
      { q: "De quoi est constitué au minimum un ordinateur ?",
        choix: ["D'un écran tactile et d'un clavier", "D'un processeur et d'une mémoire vive", "D'une imprimante et d'une souris sans fil", "D'une carte perforée et d'un ruban magnétique"],
        bonne: 1, niv: 2,
        expl: "L'écran et le clavier sont des périphériques." },
      { q: "Combien pèse en ASCII non compressé une page de 3 000 caractères ?",
        choix: ["Environ 3 Mo", "Environ 24 ko", "Environ 3 ko", "Environ 3 Go"],
        bonne: 2, niv: 2,
        expl: "Un caractère = un octet." },
      { q: "Quel ordre de grandeur a un fichier de film ?",
        choix: ["Le kilooctet", "L'octet", "Le bit", "Le gigaoctet"],
        bonne: 3, niv: 2,
        expl: "Une photo pèse quelques mégaoctets." },
      { q: "Pourquoi les bogues sont-ils très probables dans les grands programmes ?",
        choix: ["Ils sont exécutés par des processeurs qui se trompent souvent", "Ils comptent des centaines de millions de lignes", "Ils sont écrits dans des langages de haut niveau interdits", "Ils tournent sur des machines qui vieillissent très vite"],
        bonne: 1, niv: 2,
        expl: "Plus il y a de code, plus le risque d'erreur augmente." },
      { q: "En quelle année naît le domaine de l'IA ?",
        choix: ["1936", "1956", "1801", "1990"],
        bonne: 1, niv: 1,
        expl: "Lors de la conférence de Dartmouth." },
      { q: "Qu'est-ce que l'apprentissage automatique ?",
        choix: ["Un humain qui écrit chacune des règles du programme à la main", "Une machine qui apprend à lire seule, sans exemples", "Un algorithme qui s'améliore en s'exerçant sur des données", "Un robot qui suit les cours d'un professeur en classe"],
        bonne: 2, niv: 2,
        expl: "C'est le sous-domaine le plus utilisé aujourd'hui." },
      { q: "Quel risque présente une IA entraînée sur des données peu représentatives ?",
        choix: ["Elle devient plus juste envers chacun des groupes", "Elle ne peut plus être utilisée par personne", "Elle efface les données personnelles des utilisateurs", "Elle reproduit et amplifie les biais des données"],
        bonne: 3, niv: 3,
        expl: "La qualité des données conditionne celle des résultats." },
      { q: "Les ventes de glaces et les noyades augmentent ensemble en été. Que peut-on dire ?",
        choix: ["Les glaces causent les noyades, car elles alourdissent le corps", "Les noyades causent les ventes de glaces sur les plages", "Il n'existe pas de lien statistique entre ces deux grandeurs", "C'est une corrélation, la cause commune est la chaleur"],
        bonne: 3, niv: 2,
        expl: "Corrélation n'est pas causalité." },
      { q: "Qu'est-ce qu'un faux positif ?",
        choix: ["Un test positif chez une personne non malade", "Un test négatif chez une personne malade", "Un test positif chez une personne malade", "Un test impossible à lire"],
        bonne: 0, niv: 1,
        expl: "Le faux négatif est l'inverse." },
      { q: "Sur 585 tests positifs, 90 personnes sont réellement malades. Quelle est la probabilité d'être malade si le test est positif ?",
        choix: ["Environ 15 %", "Environ 90 %", "Environ 1 %", "Environ 50 %"],
        bonne: 0, niv: 3,
        expl: "90 / 585 ≈ 0,15." },
    ] },
  { chapitre: "ens-sci-13",
    fiche: `## Méthode : réussir les devoirs d'enseignement scientifique

En terminale, l'enseignement scientifique n'a pas d'épreuve finale : la note du bac vient de la **moyenne de l'année** (coefficient 3, et 3 de plus pour la moyenne de première). Chaque devoir compte. La plupart suivent la forme des évaluations communes : **2 heures**, **deux exercices** sur deux thèmes différents, chacun noté sur **10**.

### Les trois compétences évaluées
- **Exploiter des documents** : extraire une information d'un texte, d'un graphique, d'un tableau, d'un schéma, et la mettre en relation avec ses connaissances.
- **Organiser, effectuer et contrôler des calculs** : poser la formule, remplacer par les valeurs avec les unités, donner un résultat arrondi avec son unité, puis vérifier qu'il est vraisemblable.
- **Rédiger une argumentation scientifique** : répondre à une question en quelques phrases, avec des arguments tirés des documents et du cours, reliés par des connecteurs logiques.

### Lire un sujet
- Lire d'abord **toutes les questions**, puis l'introduction : elle donne souvent des données utiles.
- Repérer le **verbe de consigne** : « relever » (citer sans expliquer), « calculer » (formule et résultat), « expliquer » (donner le mécanisme), « justifier » (prouver avec un argument), « montrer que » (le résultat est donné : il faut la démarche).
- Les questions s'enchaînent : un résultat d'une question sert souvent dans la suivante. Si on bloque, on peut utiliser la valeur donnée ou supposée et continuer.
- Gérer le temps : environ **une heure par exercice**.

### Exploiter un graphique
- Lire le **titre**, les **axes**, les **unités** et la **légende** avant de lire les courbes.
- Citer des **valeurs précises** avec leur unité : « en 2020, la concentration atteint environ 410 ppm ».
- Décrire une **tendance** (hausse, baisse, stabilité, accélération) puis l'**interpréter** avec le cours.
- Une **corrélation** entre deux courbes ne prouve pas à elle seule une **cause** : il faut un mécanisme.

### Réussir un calcul
- Écrire la **formule littérale** avant de remplacer : par exemple P = U × I ou N = M × n / m.
- **Convertir** dans les bonnes unités avant de calculer (kW en W, minutes en heures, km en m).
- Arrondir raisonnablement, avec l'**unité**.
- **Contrôler** : un rendement supérieur à 100 %, une population négative ou une puissance de mille milliards de watts pour une maison signalent une erreur.

### Rédiger une argumentation
- Commencer par une **phrase de réponse** qui reprend la question.
- Donner **deux ou trois arguments**, chacun appuyé sur un document (« d'après le document 2… ») ou une connaissance.
- Utiliser des **connecteurs** : donc, or, car, cependant, ainsi.
- Finir par une **conclusion** courte. Employer le **vocabulaire** scientifique exact.

### À retenir pour le bac
- Note = moyenne de l'année : chaque devoir compte ; format habituel 2 heures, deux exercices sur 10.
- Trois compétences : exploiter des documents, calculer et contrôler, argumenter.
- Graphique : titre, axes, unités ; valeurs précises ; tendance ; interprétation.
- Calcul : formule, conversion, résultat avec unité, contrôle de vraisemblance.`,
    cartes: [
      { q: "Origine de la note d'enseignement scientifique au bac", r: "La moyenne de l'année, sans épreuve finale." },
      { q: "Coefficient de l'enseignement scientifique", r: "3 pour la terminale, et 3 pour la première." },
      { q: "Forme habituelle d'un devoir commun", r: "2 heures, deux exercices sur deux thèmes différents, chacun sur 10." },
      { q: "Les trois compétences évaluées", r: "Exploiter des documents ; calculer et contrôler ; rédiger une argumentation scientifique." },
      { q: "Consigne « relever »", r: "Citer l'information du document, sans l'expliquer." },
      { q: "Consigne « justifier »", r: "Prouver la réponse par un argument tiré du document ou du cours." },
      { q: "Consigne « montrer que »", r: "Le résultat est donné : il faut écrire la démarche qui y mène." },
      { q: "Avant de lire une courbe", r: "Lire le titre, les axes, les unités et la légende." },
      { q: "Citer une valeur d'un graphique", r: "Donner un nombre précis avec son unité et sa date." },
      { q: "Première étape d'un calcul", r: "Écrire la formule littérale." },
      { q: "Contrôler un résultat", r: "Vérifier l'unité et l'ordre de grandeur." },
      { q: "Structure d'une argumentation", r: "Réponse, deux ou trois arguments appuyés sur les documents, conclusion." },
      { q: "Connecteurs utiles", r: "Donc, or, car, cependant, ainsi." },
      { q: "Bloqué à une question", r: "Utiliser la valeur donnée ou supposée et continuer." },
    ],
    quiz: [
      { q: "D'où vient la note de terminale en enseignement scientifique ?",
        choix: ["D'une épreuve écrite en juin", "D'une moyenne des notes de l'année", "D'un oral devant un jury", "D'un dossier rendu en mai"],
        bonne: 1, niv: 1,
        expl: "Il n'y a pas d'épreuve finale." },
      { q: "Quelle est la forme habituelle d'une évaluation commune ?",
        choix: ["2 heures, deux exercices notés chacun sur 10", "4 heures, une dissertation notée sur 20", "1 heure, un questionnaire à choix multiple", "30 minutes, un oral sur un thème tiré au sort"],
        bonne: 0, niv: 1,
        expl: "Les deux exercices portent sur deux thèmes différents." },
      { q: "Laquelle fait partie des trois compétences évaluées ?",
        choix: ["Rédiger une argumentation scientifique", "Réciter le cours mot pour mot", "Dessiner un schéma en couleur", "Résumer un roman scientifique"],
        bonne: 0, niv: 1,
        expl: "Les deux autres : exploiter des documents, calculer." },
      { q: "Que demande la consigne « relever » ?",
        choix: ["Expliquer le mécanisme avec le cours", "Calculer une valeur à partir du document", "Citer l'information du document sans l'expliquer", "Critiquer la fiabilité du document"],
        bonne: 2, niv: 2,
        expl: "« Expliquer » demande le mécanisme." },
      { q: "Une question commence par « montrer que la puissance vaut 2 kW ». Qu'attend-on ?",
        choix: ["Une simple recopie de 2 kW", "Un autre résultat que 2 kW", "Un schéma de la centrale électrique", "La démarche de calcul qui mène à 2 kW"],
        bonne: 3, niv: 2,
        expl: "Le résultat est donné : la démarche est notée." },
      { q: "Que faut-il lire avant d'étudier une courbe ?",
        choix: ["Le titre, les axes, les unités et la légende", "La dernière valeur atteinte par la courbe", "La conclusion du corrigé si elle est fournie", "Le nombre de points tracés sur le graphique"],
        bonne: 0, niv: 2,
        expl: "On évite ainsi les contresens." },
      { q: "Quelle phrase exploite le mieux un graphique ?",
        choix: ["La courbe monte beaucoup à la fin du graphique", "On voit sur le graphique que ça augmente", "En 2020, la concentration atteint environ 410 ppm", "Le document montre une évolution importante"],
        bonne: 2, niv: 2,
        expl: "Une valeur précise avec son unité et sa date." },
      { q: "Deux courbes montent en même temps. Que peut-on conclure ?",
        choix: ["Une cause certaine, puisque les deux courbes montent", "Une corrélation, qui ne prouve pas à elle seule une cause", "Une absence de lien, car les courbes sont différentes", "Une erreur de mesure sur l'une des deux courbes"],
        bonne: 1, niv: 3,
        expl: "Il faut un mécanisme pour parler de cause." },
      { q: "Quelle est la première étape d'un calcul bien rédigé ?",
        choix: ["Écrire la formule littérale", "Donner tout de suite le résultat arrondi", "Recopier les données de l'énoncé une à une", "Tracer un graphique qui représente le calcul"],
        bonne: 0, niv: 2,
        expl: "On remplace ensuite par les valeurs." },
      { q: "Un élève trouve un rendement de 140 %. Que doit-il faire ?",
        choix: ["Garder le résultat, l'appareil est très efficace", "Arrondir le résultat à 100 % pour le rendre juste", "Revoir son calcul : un rendement ne peut dépasser 100 %", "Diviser le résultat par deux pour le corriger"],
        bonne: 2, niv: 3,
        expl: "C'est le contrôle de vraisemblance." },
      { q: "Que doit contenir une argumentation scientifique ?",
        choix: ["Un avis personnel sans référence aux documents", "La recopie intégrale des documents du sujet", "Des arguments appuyés sur les documents et le cours", "Une liste de mots-clés sans phrases complètes"],
        bonne: 2, niv: 3,
        expl: "Avec une phrase de réponse et une conclusion." },
    ] },
  ],
  methode: [
    {
      "id": "ens-sci-m1",
      "mat": "ens-sci",
      "titre": "Exploiter un graphique ou un tableau",
      "formules": [
        "À l'aide du document 1, décrivez l'évolution de…",
        "Relevez la valeur de… en…",
        "Montrez que les données du document confirment…"
      ],
      "vu": [
        "Dans presque chaque exercice des évaluations communes, souvent en première question",
        "Thèmes concernés : climat (courbes de CO2 et de température), énergie (production par source), démographie (évolution d'une population)"
      ],
      "pts": "1 à 3 points par question",
      "attendu": "Une description qui s'appuie sur des valeurs précises lues sur le document, avec leurs unités, puis une interprétation qui relie ces valeurs au cours. Le correcteur vérifie que les chiffres cités sont justes et que la tendance est bien nommée.",
      "etapes": [
        "Lire le titre, les axes, les unités et la légende",
        "Repérer la tendance générale : hausse, baisse, stabilité, accélération",
        "Relever deux ou trois valeurs précises (début, changement, fin) avec leur unité et leur date",
        "Calculer si utile un écart ou une variation (par exemple + 130 ppm en 170 ans)",
        "Interpréter avec une notion du cours, en une phrase"
      ],
      "mots": [
        "augmente",
        "diminue",
        "se stabilise",
        "s'accélère",
        "environ",
        "d'après le document",
        "tendance",
        "corrélation"
      ],
      "pieges": [
        "Décrire sans aucune valeur chiffrée",
        "Oublier les unités ou la date des valeurs",
        "Conclure à une cause à partir d'une simple corrélation",
        "Recopier le document au lieu de l'exploiter"
      ],
      "cas": "Document (données d'entraînement, arrondies) : concentration atmosphérique en CO2 mesurée ou reconstituée : 280 ppm en 1850, 315 ppm en 1960, 370 ppm en 2000, 410 ppm en 2020.",
      "question": "Décrivez l'évolution de la concentration en CO2 depuis 1850 et proposez une explication.",
      "modele": "D'après le document, la concentration en CO2 augmente depuis 1850 : elle passe d'environ 280 ppm en 1850 à 410 ppm en 2020, soit une hausse de 130 ppm. Cette hausse s'accélère : + 35 ppm en 110 ans entre 1850 et 1960, puis + 40 ppm en 20 ans seulement entre 2000 et 2020. Elle s'explique par les émissions de CO2 des activités humaines, surtout la combustion des énergies fossiles et la déforestation, depuis la révolution industrielle.",
      "grille": [
        "La tendance est nommée (hausse qui s'accélère)",
        "Au moins deux valeurs précises avec unité et date",
        "Une variation calculée correctement",
        "Une explication tirée du cours (combustion des énergies fossiles)"
      ]
    },
    {
      "id": "ens-sci-m2",
      "mat": "ens-sci",
      "titre": "Mener et contrôler un calcul",
      "formules": [
        "Calculez…",
        "Montrez que la valeur de… est d'environ…",
        "Vérifiez que le résultat est cohérent avec…"
      ],
      "vu": [
        "Dans chaque évaluation commune : la compétence « organiser, effectuer et contrôler des calculs » est évaluée",
        "Calculs fréquents : puissance et effet Joule, rendement, énergie en kWh, capture-marquage-recapture, fréquences de Hardy-Weinberg, suites"
      ],
      "pts": "1 à 3 points par calcul",
      "attendu": "La formule littérale, les valeurs remplacées avec leurs unités, un résultat arrondi avec son unité, puis une phrase de réponse. Un résultat juste sans démarche ne rapporte qu'une partie des points.",
      "etapes": [
        "Écrire la formule littérale (par exemple Pj = R × I²)",
        "Convertir les données dans les bonnes unités",
        "Remplacer et calculer",
        "Donner le résultat arrondi avec son unité",
        "Contrôler l'ordre de grandeur, puis répondre par une phrase"
      ],
      "mots": [
        "formule",
        "unité",
        "arrondi",
        "ordre de grandeur",
        "rendement",
        "pertes"
      ],
      "pieges": [
        "Oublier de convertir les kilovolts ou les kilowatts",
        "Oublier le carré de l'intensité dans Pj = R × I²",
        "Donner un résultat sans unité",
        "Accepter un rendement supérieur à 100 %"
      ],
      "cas": "Une ligne de résistance R = 5 Ω transporte une puissance P = 10 MW sous une tension U = 400 kV.",
      "question": "Calculez l'intensité dans la ligne, puis la puissance perdue par effet Joule.",
      "modele": "I = P / U = 10 000 000 / 400 000 = 25 A. Pj = R × I² = 5 × 25² = 3 125 W, soit environ 3,1 kW. Contrôle : c'est environ 0,03 % de la puissance transportée, une perte très faible, cohérente avec l'intérêt de la haute tension.",
      "grille": [
        "Formule I = P / U et conversion en W et V",
        "I = 25 A avec l'unité",
        "Formule Pj = R × I² avec le carré",
        "Pj ≈ 3 125 W et contrôle de vraisemblance"
      ]
    },
    {
      "id": "ens-sci-m3",
      "mat": "ens-sci",
      "titre": "Rédiger une argumentation scientifique",
      "formules": [
        "À l'aide des documents et de vos connaissances, expliquez pourquoi…",
        "Argumentez en faveur de…",
        "Discutez l'affirmation suivante…"
      ],
      "vu": [
        "Souvent en dernière question d'un exercice des évaluations communes",
        "Sujets fréquents : origine humaine du réchauffement, choix d'une source d'énergie, antibiorésistance, limites d'un modèle"
      ],
      "pts": "2 à 4 points",
      "attendu": "Un texte court et organisé : une phrase qui répond, deux ou trois arguments appuyés chacun sur un document ou une connaissance précise, des connecteurs logiques, une conclusion. Le correcteur valorise le vocabulaire exact et la mise en relation des documents.",
      "etapes": [
        "Reformuler la question en une phrase de réponse",
        "Lister au brouillon les informations utiles de chaque document",
        "Associer chaque information à une notion du cours",
        "Rédiger deux ou trois arguments avec « d'après le document… », « or », « donc »",
        "Conclure en une phrase qui répond à la question"
      ],
      "mots": [
        "d'après le document",
        "or",
        "donc",
        "car",
        "cependant",
        "ainsi",
        "on peut en déduire"
      ],
      "pieges": [
        "Donner un avis personnel sans appui sur les documents",
        "Paraphraser les documents sans les relier au cours",
        "Oublier de répondre clairement à la question",
        "Utiliser un seul document alors que plusieurs sont fournis"
      ],
      "cas": "Document 1 : l'usage des antibiotiques a fortement augmenté depuis 1950. Document 2 : dans une culture de bactéries, une mutation de résistance est présente chez 1 bactérie sur 10 millions avant tout traitement ; après ajout d'un antibiotique, presque toutes les bactéries survivantes portent la mutation.",
      "question": "Expliquez comment l'usage des antibiotiques favorise l'apparition de bactéries résistantes.",
      "modele": "L'usage des antibiotiques favorise les bactéries résistantes par sélection naturelle. D'après le document 2, la mutation de résistance existe avant le traitement : elle est apparue au hasard, chez une bactérie sur 10 millions. Or l'antibiotique tue les bactéries sensibles, alors que les résistantes survivent et se multiplient : après le traitement, presque toutes les survivantes sont résistantes. Donc plus on utilise d'antibiotiques, comme le montre le document 1, plus on sélectionne ces bactéries. Ainsi, l'antibiotique ne crée pas la résistance : il la sélectionne.",
      "grille": [
        "Phrase de réponse qui nomme la sélection naturelle",
        "La mutation existe avant le traitement (document 2)",
        "Mécanisme : les sensibles meurent, les résistantes se multiplient",
        "Lien avec l'usage croissant (document 1) et connecteurs logiques"
      ]
    },
    {
      "id": "ens-sci-m4",
      "mat": "ens-sci",
      "titre": "Choisir, utiliser et critiquer un modèle",
      "formules": [
        "Justifiez le choix d'un modèle linéaire ou exponentiel",
        "Calculez la valeur prévue par le modèle pour…",
        "Discutez la validité du modèle"
      ],
      "vu": [
        "Thèmes concernés : modèles démographiques (Malthus), Hardy-Weinberg, modèles climatiques, courbe de tendance en IA",
        "Question classique : comparer la prévision du modèle aux données réelles"
      ],
      "pts": "2 à 4 points",
      "attendu": "Le bon modèle choisi pour une raison chiffrée (variation absolue ou relative constante), un calcul de prévision correct, puis une comparaison avec les données réelles qui conclut sur le domaine de validité.",
      "etapes": [
        "Calculer les variations absolues puis relatives entre deux dates",
        "Dire laquelle est presque constante et en déduire le modèle (linéaire ou exponentiel)",
        "Écrire la formule du modèle avec ses paramètres",
        "Calculer la prévision demandée",
        "Comparer aux données réelles et conclure sur la validité"
      ],
      "mots": [
        "variation absolue",
        "variation relative",
        "suite arithmétique",
        "suite géométrique",
        "paramètre",
        "domaine de validité"
      ],
      "pieges": [
        "Choisir le modèle à l'œil, sans calcul",
        "Confondre + 5 % (q = 1,05) et × 5",
        "Prolonger un modèle très loin sans discuter sa validité",
        "Oublier de comparer aux données réelles"
      ],
      "cas": "Population d'une ville imaginaire : 50 000 habitants en 2000, 52 500 en 2001, 55 125 en 2002. En 2020, on recense 98 000 habitants.",
      "question": "Choisissez un modèle, calculez la population qu'il prévoit pour 2020 et discutez sa validité.",
      "modele": "Les variations absolues ne sont pas constantes (+ 2 500 puis + 2 625), mais les variations relatives le sont : 2 500 / 50 000 = 5 % et 2 625 / 52 500 = 5 %. On choisit donc un modèle exponentiel : u(n) = 50 000 × 1,05^n, avec n le nombre d'années après 2000. Pour 2020, u(20) = 50 000 × 1,05^20 ≈ 132 665 habitants. Or on recense 98 000 habitants : le modèle surestime fortement la population. Il est valable sur un temps court, mais pas sur vingt ans, car la croissance a ralenti.",
      "grille": [
        "Variations relatives calculées et égales à 5 %",
        "Modèle exponentiel avec q = 1,05",
        "Prévision ≈ 132 665 habitants",
        "Comparaison aux 98 000 habitants et conclusion sur la validité"
      ]
    }
  ],
  sujets: [
    { id: "ens-sci-s1", matiere: 'ens-sci', titre: "Devoir d'entraînement : transport de l'électricité et population de lézards", duree: 120,
      enonce: `Devoir d'entraînement, sur le modèle d'une évaluation commune. Durée : 2 heures. Calculatrice autorisée. Les situations et les chiffres sont inventés pour l'entraînement.

## Exercice 1 : alimenter un village (thème « Le futur des énergies », 10 points)

Une commune de montagne veut alimenter un nouveau quartier grâce à une centrale solaire installée à 30 km. La ligne qui relie la centrale au quartier a une résistance totale R = 5 Ω. Elle doit transporter une puissance P = 10 MW.

Document 1 : un panneau photovoltaïque de la centrale a une surface de 1,6 m². En plein soleil, il reçoit une puissance lumineuse de 1 000 W par mètre carré et fournit une puissance électrique de 320 W.

Document 2 : le transformateur placé à la sortie de la centrale élève la tension avant le transport ; un autre transformateur l'abaisse près des habitations. La puissance perdue dans une ligne par effet Joule vaut Pj = R × I², et l'intensité vaut I = P / U.

1. (1 point) Relevez dans le document 2 le rôle des deux transformateurs.
2. (2 points) Calculez le rendement d'un panneau photovoltaïque.
3. (3 points) Calculez l'intensité dans la ligne et la puissance perdue par effet Joule si la tension de transport est de 20 kV, puis de 400 kV.
4. (1 point) Exprimez chacune de ces pertes en pourcentage de la puissance transportée.
5. (3 points) Rédigez une argumentation expliquant pourquoi on transporte l'électricité sous haute tension, et pourquoi on abaisse la tension avant les habitations.

## Exercice 2 : les lézards du parc (thème « Une histoire du vivant », 10 points)

Des naturalistes étudient une population de lézards dans un parc urbain entouré de routes.

Partie A : estimer l'effectif. Lors d'une première capture, 60 lézards sont capturés, marqués d'un point de peinture sur le dos et relâchés. Une semaine plus tard, une seconde capture rapporte 80 lézards, dont 12 portent une marque.

1. (2 points) Estimez l'effectif total de la population par la méthode de capture-marquage-recapture.
2. (2 points) Citez deux conditions nécessaires pour que cette estimation soit fiable.

Partie B : la couleur des lézards. La couleur dépend d'un gène à deux allèles : A (vert) et a (brun). Sur un échantillon de 100 lézards, on compte 30 AA, 30 Aa et 40 aa.

3. (2 points) Calculez les fréquences p de l'allèle A et q de l'allèle a dans l'échantillon.
4. (2 points) Calculez les effectifs de chaque génotype attendus selon le modèle de Hardy-Weinberg pour 100 lézards.
5. (2 points) Comparez aux effectifs observés et proposez une explication de l'écart, en lien avec la situation du parc.`,
      corrige: `## Exercice 1

1. Le transformateur de la centrale élève la tension pour le transport ; celui du quartier l'abaisse avant la distribution aux habitations.

2. Puissance reçue : 1 000 × 1,6 = 1 600 W. Rendement = puissance électrique fournie / puissance lumineuse reçue = 320 / 1 600 = 0,20, soit 20 %. Ce résultat est vraisemblable pour un panneau photovoltaïque.

3. À 20 kV : I = P / U = 10 000 000 / 20 000 = 500 A ; Pj = R × I² = 5 × 500² = 1 250 000 W, soit 1,25 MW.
À 400 kV : I = 10 000 000 / 400 000 = 25 A ; Pj = 5 × 25² = 3 125 W, soit environ 3,1 kW.

4. À 20 kV : 1,25 / 10 = 0,125, soit 12,5 % de pertes. À 400 kV : 3 125 / 10 000 000 ≈ 0,0003, soit environ 0,03 %.

5. On transporte l'électricité sous haute tension pour limiter les pertes. En effet, pour une même puissance, l'intensité vaut I = P / U : elle est d'autant plus faible que la tension est élevée. Or les pertes par effet Joule sont proportionnelles au carré de l'intensité. Ainsi, multiplier la tension par 20 (de 20 kV à 400 kV) divise l'intensité par 20 et les pertes par 400, comme le montrent les calculs : 12,5 % contre 0,03 %. Cependant, une très haute tension est dangereuse et ne convient pas aux appareils domestiques : on l'abaisse donc près des habitations, grâce au transformateur, ce qui est simple avec un courant alternatif.

## Exercice 2

1. On suppose que la proportion de lézards marqués est la même dans le second échantillon et dans la population : 12 / 80 = 60 / N, donc N = 60 × 80 / 12 = 400 lézards environ.

2. Conditions (deux suffisent) : les lézards marqués se mélangent bien au reste de la population ; la marque ne disparaît pas et ne change pas le comportement ni la survie ; la population ne change pas entre les deux captures (pas de naissances, de morts ni de migrations importantes) ; le second échantillon est pris au hasard.

3. p = fréquence de AA + la moitié de la fréquence de Aa = 0,30 + 0,15 = 0,45. q = 1 − p = 0,55 (ou 0,40 + 0,15 = 0,55).

4. Selon Hardy-Weinberg : AA = p² = 0,2025, soit environ 20 lézards ; Aa = 2pq = 2 × 0,45 × 0,55 = 0,495, soit environ 50 lézards ; aa = q² = 0,3025, soit environ 30 lézards.

5. On observe 30 AA, 30 Aa et 40 aa, contre environ 20, 50 et 30 attendus : il y a nettement moins d'hétérozygotes que prévu. La population s'écarte donc du modèle : une ou plusieurs de ses hypothèses ne sont pas respectées. Le parc est entouré de routes : la population est isolée et de petit effectif (environ 400 individus), ce qui favorise la dérive génétique ; les unions peuvent aussi ne pas se faire au hasard (par exemple entre lézards de même couleur), ou une sélection peut agir (prédation plus forte sur une couleur).`,
      grille: [{"c":"Exercice 1, question 1 : rôle des deux transformateurs relevé","pts":1},{"c":"Exercice 1, question 2 : puissance reçue et rendement de 20 %","pts":2},{"c":"Exercice 1, question 3 : intensités et pertes à 20 kV et 400 kV, avec formules et unités","pts":3},{"c":"Exercice 1, question 4 : pourcentages de pertes","pts":1},{"c":"Exercice 1, question 5 : argumentation organisée (I = P / U, pertes en I², sécurité près des habitations)","pts":3},{"c":"Exercice 2, question 1 : N = 60 × 80 / 12 = 400 avec la démarche","pts":2},{"c":"Exercice 2, question 2 : deux conditions de fiabilité","pts":2},{"c":"Exercice 2, question 3 : p = 0,45 et q = 0,55","pts":2},{"c":"Exercice 2, question 4 : effectifs attendus 20, 50 et 30","pts":2},{"c":"Exercice 2, question 5 : comparaison et explication de l'écart (dérive, unions non aléatoires ou sélection)","pts":2}] },
  ],
};
