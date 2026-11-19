// Biologie-écologie — enseignement de spécialité, terminale voie générale (lycées agricoles). Sources : voir matiere.sources.
// Programme : arrêté du 23 juillet 2019, programme de première et terminale publié par le ministère de l'Agriculture (chlorofil.fr).
// Épreuve : partie écrite de 3 h 30 sur 15 points (exercice 1 : répondre à une question scientifique ; exercice 2 : pratiquer une démarche scientifique) et partie pratique sur 5 points.
export default {
  matiere: {
    id: 'bioeco',
    nom: 'Biologie-écologie',
    voie: 'generale',
    epreuve: { type: 'ecrit', duree: 210, coef: 16, quand: 'juin', note: 'Partie écrite de 3 h 30 sans calculatrice, sur 15 points : exercice 1, répondre à une question scientifique (6 à 7 points) ; exercice 2, pratiquer une démarche scientifique à partir de documents (8 à 9 points). Une partie pratique (évaluation des compétences expérimentales) complète la note sur 20.' },
    sources: [
      "https://chlorofil.fr/fileadmin/user_upload/02-diplomes/referentiels/secondaire/bac-general/bac-general-prog-bio-eco.pdf",
      "https://eduscol.education.fr/document/66372/download",
      "https://eduscol.education.fr/document/68492/download",
    ],
    chapitres: [
      { id: "bioeco-1", t: "La variation des effectifs des populations", theme: "Enjeux environnementaux" },
      { id: "bioeco-2", t: "La biodiversité et le fonctionnement des écosystèmes", theme: "Enjeux environnementaux" },
      { id: "bioeco-3", t: "Services écosystémiques, agro-écologie et conservation", theme: "Enjeux environnementaux" },
      { id: "bioeco-4", t: "Dynamique de la biodiversité : stabilité et résilience", theme: "Enjeux environnementaux" },
      { id: "bioeco-5", t: "L'évolution de la biodiversité", theme: "Enjeux environnementaux" },
      { id: "bioeco-6", t: "Le message nerveux et les substances psychoactives", theme: "Enjeux de santé" },
      { id: "bioeco-7", t: "Circuit de la récompense, accoutumance et dépendance", theme: "Enjeux de santé" },
      { id: "bioeco-8", t: "Le stress aigu : une réponse adaptative", theme: "Enjeux de santé" },
      { id: "bioeco-9", t: "Le stress chronique et sa prévention", theme: "Enjeux de santé" },
      { id: "bioeco-10", t: "Les barrières naturelles et l'immunité innée", theme: "Enjeux de santé" },
      { id: "bioeco-11", t: "L'immunité adaptative, le VIH et la vaccination", theme: "Enjeux de santé" },
      { id: "bioeco-12", t: "Les allergies et le rôle du microbiote", theme: "Enjeux de santé" },
      { id: "bioeco-13", t: "Le cycle cellulaire, la réplication et la mitose", theme: "Enjeux de santé" },
      { id: "bioeco-14", t: "Mutations, agents mutagènes et cancérisation", theme: "Enjeux de santé" },
      { id: "bioeco-15", t: "Génome bactérien et antibiorésistance", theme: "Enjeux de santé" },
    ],
  },
  paquets: [
    {
      chapitre: "bioeco-1",
      fiche: `## La variation des effectifs des populations

Une **population** est l'ensemble des individus d'une même espèce qui vivent au même endroit au même moment et peuvent se reproduire entre eux. Ses effectifs changent selon les naissances, les morts, les arrivées et les départs, et surtout selon la qualité de son **habitat**.

### Décrire une population
- La **densité** : nombre d'individus par unité de surface (ou de volume).
- La **distribution spatiale** : **agrégative** (en groupes), **régulière** (individus espacés), **aléatoire** (au hasard).
- Le **sex-ratio** : rapport entre le nombre de mâles et de femelles.
- La **pyramide des âges** : répartition des individus par classes d'âge et par sexe. Une base large indique une population jeune, en croissance.
- La **courbe de survie** : nombre de survivants selon l'âge. Type I : forte mortalité des vieux (grands mammifères) ; type II : mortalité constante (oiseaux) ; type III : forte mortalité des jeunes (poissons, insectes).
- Méthodes d'estimation : **quadrats** (comptage sur des carrés), **capture-marquage-recapture** (effectif estimé ≈ marqués × capturés la 2e fois / marqués recapturés).

### Les paramètres démographiques
- Ce qui augmente l'effectif : la **natalité** et l'**immigration**.
- Ce qui le diminue : la **mortalité** et l'**émigration**.
- Le **taux d'accroissement (r)** résume l'évolution : r > 0, la population augmente.

### Les modèles de croissance
- **Croissance exponentielle** : r reste constant, l'effectif augmente de plus en plus vite (courbe en J). C'est un modèle théorique, ou une phase transitoire (colonisation d'un milieu, espèce invasive au début).
- **Croissance logistique** : la croissance ralentit puis l'effectif se stabilise autour de la **capacité d'accueil du milieu (K)** (courbe en S).
- Les **facteurs dépendants de la densité** sont biotiques : **compétition**, **prédation**, **parasitisme**. Plus la population est dense, plus ils freinent sa croissance.
- Les **facteurs indépendants de la densité** sont souvent abiotiques : climat, gel, sécheresse, inondation, incendie.
- Les équations des modèles ne sont pas au programme.

### Stratégies r et K
- **Sélection r** (milieux instables, imprévisibles) : beaucoup de descendants, petite taille, maturité précoce, vie courte, peu de soins (pucerons, souris, plantes pionnières).
- **Sélection K** (milieux stables) : peu de descendants, grande taille, longue vie, soins aux jeunes, forte compétitivité (éléphants, grands arbres).
- Entre les deux, tous les intermédiaires existent.

### Les activités humaines et les populations
- **Prélèvements** (chasse, pêche) : surpêche, déséquilibre des âges.
- **Destruction ou fragmentation des habitats** : diminution des effectifs, isolement.
- **Perturbateurs endocriniens** : molécules (certains pesticides, bisphénol A) qui perturbent la reproduction et modifient le sex-ratio.
- **Espèces invasives** : forte croissance au début faute de prédateurs (frelon asiatique, jussie).

### À retenir pour le bac
- Densité, distribution, sex-ratio, pyramide des âges, courbe de survie.
- Natalité + immigration – mortalité – émigration ; taux d'accroissement r.
- Courbe exponentielle (J) et logistique (S) avec la capacité d'accueil K ; facteurs dépendants et indépendants de la densité ; sélection r et K.`,
      cartes: [
        { q: "Qu'est-ce qu'une population ?", r: "L'ensemble des individus d'une même espèce qui vivent au même endroit au même moment et peuvent se reproduire entre eux." },
        { q: "Qu'est-ce que la densité d'une population ?", r: "Le nombre d'individus par unité de surface ou de volume." },
        { q: "Quels sont les trois types de distribution spatiale ?", r: "Agrégative (en groupes), régulière (espacée), aléatoire (au hasard)." },
        { q: "Qu'est-ce que le sex-ratio ?", r: "Le rapport entre le nombre de mâles et de femelles d'une population." },
        { q: "Que montre une courbe de survie de type III ?", r: "Une très forte mortalité des jeunes (poissons, insectes)." },
        { q: "Quels paramètres augmentent l'effectif d'une population ?", r: "La natalité et l'immigration." },
        { q: "Quels paramètres diminuent l'effectif d'une population ?", r: "La mortalité et l'émigration." },
        { q: "Qu'est-ce que la capacité d'accueil K ?", r: "L'effectif maximal qu'un milieu peut supporter durablement." },
        { q: "Quelle est la forme de la courbe de croissance exponentielle ?", r: "Une courbe en J : l'effectif augmente de plus en plus vite." },
        { q: "Quelle est la forme de la courbe logistique ?", r: "Une courbe en S : la croissance ralentit puis l'effectif se stabilise autour de K." },
        { q: "Cite des facteurs dépendants de la densité.", r: "La compétition, la prédation, le parasitisme (facteurs biotiques)." },
        { q: "Cite des facteurs indépendants de la densité.", r: "Le climat, le gel, la sécheresse, les catastrophes (facteurs abiotiques)." },
        { q: "Quels traits favorise la sélection r ?", r: "Beaucoup de descendants, maturité précoce, vie courte : adaptés aux milieux instables." },
        { q: "Quels traits favorise la sélection K ?", r: "Peu de descendants, longue vie, soins aux jeunes, compétitivité : adaptés aux milieux stables." },
      ],
      quiz: [
        { q: "Comment appelle-t-on le nombre d'individus par unité de surface ?", choix: ["La densité","Le sex-ratio","La richesse spécifique","Le taux d'accroissement"], bonne: 0, expl: "Densité = effectif / surface.", niv: 1 },
        { q: "Quels paramètres font baisser l'effectif d'une population ?", choix: ["La natalité et l'immigration","La natalité et l'émigration","La mortalité et l'émigration","L'immigration et la mortalité seule"], bonne: 2, expl: "Morts et départs.", niv: 1 },
        { q: "Quelle forme a la courbe de croissance logistique ?", choix: ["Une courbe en J","Une droite qui descend","Une courbe en cloche","Une courbe en S"], bonne: 3, expl: "Elle se stabilise autour de K.", niv: 1 },
        { q: "Que désigne la lettre K ?", choix: ["La capacité d'accueil du milieu","Le nombre de prédateurs du milieu","La vitesse de reproduction des jeunes","Le nombre de mâles de la population"], bonne: 0, expl: "Effectif maximal durable.", niv: 1 },
        { q: "Lequel est un facteur dépendant de la densité ?", choix: ["La compétition pour la nourriture","Une vague de froid soudaine","Une inondation du milieu","Un incendie de forêt"], bonne: 0, expl: "Plus il y a d'individus, plus elle est forte.", niv: 2 },
        { q: "Quelle espèce suit plutôt une stratégie K ?", choix: ["Le puceron","La souris","Le coquelicot","L'éléphant"], bonne: 3, expl: "Peu de jeunes, longue vie.", niv: 2 },
        { q: "Quelle courbe de survie montre une forte mortalité des jeunes ?", choix: ["Le type I","Le type II","Le type III","Le type logistique"], bonne: 2, expl: "Poissons, insectes.", niv: 2 },
        { q: "Dans quel cas observe-t-on une croissance presque exponentielle ?", choix: ["Une espèce invasive qui colonise un nouveau milieu","Une population ancienne stabilisée depuis des siècles","Une population soumise à une forte prédation","Une population qui a atteint la capacité d'accueil"], bonne: 0, expl: "Phase transitoire sans frein.", niv: 2 },
        { q: "On marque 50 poissons, puis on en capture 40 dont 10 marqués. Quel effectif estimer ?", choix: ["40","90","100","200"], bonne: 3, expl: "50 × 40 / 10 = 200.", niv: 2 },
        { q: "Pourquoi la croissance ralentit-elle quand la densité augmente ?", choix: ["Les individus vieillissent ensemble et finissent par mourir de vieillesse","Le climat change à cause du nombre d'individus","Les femelles cessent de pondre par choix","Compétition, prédation et maladies augmentent avec la densité"], bonne: 3, expl: "Facteurs dépendants de la densité.", niv: 3 },
        { q: "Quels traits sont favorisés dans un milieu très instable ?", choix: ["Peu de descendants et beaucoup de soins","Beaucoup de descendants et une maturité précoce","Une grande taille et une vie très longue","Une forte compétitivité et une croissance lente"], bonne: 1, expl: "Sélection r.", niv: 3 },
        { q: "Comment un perturbateur endocrinien peut-il modifier une population ?", choix: ["Il augmente la taille du territoire des individus","Il perturbe la reproduction et peut changer le sex-ratio","Il accélère la croissance des jeunes sans le moindre effet nocif","Il protège la population contre ses prédateurs"], bonne: 1, expl: "Exemple : féminisation de poissons.", niv: 3 },
      ],
    },
    {
      chapitre: "bioeco-2",
      fiche: `## La biodiversité et le fonctionnement des écosystèmes

Un **écosystème** est une unité de structure et de fonctionnement : un **biotope** (le milieu physique et chimique) et une **biocénose** (l'ensemble des êtres vivants) en interaction permanente. Son fonctionnement repose sur la **biodiversité**.

### Les niveaux d'organisation
- La **biocénose** regroupe des **populations** d'espèces différentes, organisées en **communautés** (ou peuplements).
- Les écosystèmes sont **emboîtés** et existent à différentes échelles : **biosphère**, **biome** (grande zone climatique : forêt tropicale, toundra), écosystème (une forêt, un étang), **micro-écosystème** (une souche, une flaque).
- Un **écocomplexe** est un ensemble d'écosystèmes qui échangent matière, énergie et êtres vivants (le **bocage** : haies, prairies, mares, cultures).
- Un **agrosystème** (ou agroécosystème) est un écosystème mis en place et contrôlé par l'Homme pour produire des biens.
- Un **hot-spot** de biodiversité est une zone très riche en espèces, souvent endémiques, et très menacée.

### Les interfaces et la connectivité
- Un **écotone** est une zone de transition entre deux écosystèmes : **lisière** (forêt et prairie), **ripisylve** (forêt au bord d'un cours d'eau). Il offre beaucoup d'habitats sur un petit espace.
- Les interfaces jouent plusieurs rôles : **habitat**, **filtre** (la ripisylve retient les nitrates), **passage**.
- Les **corridors** (haies, cours d'eau, bandes enherbées) relient les écosystèmes et permettent la circulation des espèces. La **trame verte et bleue** vise à conserver ou restaurer cette **connectivité**.

### Les groupes fonctionnels et les processus écologiques
- Un **groupe fonctionnel** est un ensemble d'espèces qui jouent le même rôle :
  - les **producteurs primaires** (végétaux chlorophylliens) réalisent la photosynthèse : **production primaire** ;
  - les **fixateurs d'azote** (bactéries *Rhizobium* des nodosités des légumineuses) ;
  - les **pollinisateurs** (insectes) ;
  - les **détritivores** (lombrics, cloportes) et les **décomposeurs** (champignons, bactéries) recyclent la matière organique en matière minérale.
- La complémentarité entre **autotrophes** (qui fabriquent leur matière organique) et **hétérotrophes** (qui consomment de la matière organique) est à l'origine du **cycle de la matière**. L'énergie, elle, circule en **flux** et se perd sous forme de chaleur.
- Les **espèces ingénieurs** modifient fortement leur milieu : le **lombric** aère et mélange le sol, le **castor** construit des barrages.

### Les perturbations
- Naturelles (incendie, tempête, sécheresse, pullulation d'une espèce) ou **anthropiques** (destruction d'habitats, pollutions, drainage).
- Elles modifient la biodiversité, la structure et le fonctionnement de l'écosystème.
- Un écosystème est le **produit de son histoire** : une friche, une ancienne carrière ou une parcelle autrefois fertilisée gardent la trace des perturbations passées.
- Les **espèces envahissantes**, locales (adventices des cultures) ou **exotiques** (« invasives » : renouée du Japon, ragondin), modifient la biodiversité.

### À retenir pour le bac
- Écosystème = biotope + biocénose ; échelles : biosphère, biome, écosystème, micro-écosystème, écocomplexe, agrosystème.
- Écotones (lisière, ripisylve), corridors, trame verte et bleue.
- Groupes fonctionnels : producteurs, fixateurs d'azote, pollinisateurs, détritivores et décomposeurs ; cycle de la matière, flux d'énergie ; espèces ingénieurs.`,
      cartes: [
        { q: "Qu'est-ce qu'un écosystème ?", r: "Une unité formée d'un biotope et d'une biocénose en interaction." },
        { q: "Qu'est-ce que la biocénose ?", r: "L'ensemble des êtres vivants d'un écosystème." },
        { q: "Qu'est-ce que le biotope ?", r: "Le milieu physique et chimique d'un écosystème (sol, eau, climat)." },
        { q: "Qu'est-ce qu'un biome ?", r: "Un grand ensemble d'écosystèmes lié à un climat (forêt tropicale, toundra, savane)." },
        { q: "Qu'est-ce qu'un écocomplexe ?", r: "Un ensemble d'écosystèmes qui échangent matière, énergie et êtres vivants (bocage, marais)." },
        { q: "Qu'est-ce qu'un agrosystème ?", r: "Un écosystème mis en place et contrôlé par l'Homme pour produire des biens." },
        { q: "Qu'est-ce qu'un écotone ?", r: "Une zone de transition entre deux écosystèmes, riche en habitats (lisière, ripisylve)." },
        { q: "Qu'est-ce qu'une ripisylve ?", r: "La forêt qui borde un cours d'eau." },
        { q: "À quoi sert un corridor écologique ?", r: "À relier des écosystèmes pour que les espèces puissent circuler (haie, cours d'eau)." },
        { q: "Qu'est-ce que la trame verte et bleue ?", r: "Un outil d'aménagement qui conserve ou restaure les corridors terrestres (verts) et aquatiques (bleus)." },
        { q: "Qu'est-ce qu'un groupe fonctionnel ?", r: "Un ensemble d'espèces qui jouent le même rôle dans l'écosystème (pollinisateurs, décomposeurs…)." },
        { q: "Quel est le rôle des détritivores et des décomposeurs ?", r: "Recycler la matière organique morte en matière minérale utilisable par les végétaux." },
        { q: "Qu'est-ce qu'une espèce ingénieur ?", r: "Une espèce qui modifie fortement son milieu (lombric, castor)." },
        { q: "Pourquoi dit-on que la matière cycle et que l'énergie circule en flux ?", r: "La matière est recyclée entre autotrophes et hétérotrophes, alors que l'énergie se perd en chaleur à chaque niveau." },
      ],
      quiz: [
        { q: "Un écosystème est formé de…", choix: ["Un biotope et une biocénose","Une population et un habitat","Un biome et une espèce","Une forêt et une rivière"], bonne: 0, expl: "En interaction.", niv: 1 },
        { q: "Comment appelle-t-on la forêt qui borde un cours d'eau ?", choix: ["La lisière","La ripisylve","La futaie","La garrigue"], bonne: 1, expl: "C'est un écotone.", niv: 1 },
        { q: "Quel organisme est un décomposeur ?", choix: ["Un chêne","Un champignon","Un renard","Une abeille"], bonne: 1, expl: "Il minéralise la matière organique.", niv: 1 },
        { q: "Quel élément peut servir de corridor écologique ?", choix: ["Une haie","Une autoroute","Un parking","Un champ labouré"], bonne: 0, expl: "Elle relie des milieux.", niv: 1 },
        { q: "Qu'est-ce qu'un écotone ?", choix: ["Un écosystème situé au sommet d'une montagne","Une espèce qui vit dans plusieurs milieux","Une zone de transition entre deux écosystèmes","Un ensemble de cultures d'une même ferme"], bonne: 2, expl: "Lisière, ripisylve.", niv: 2 },
        { q: "Quel groupe fonctionnel réalise la production primaire ?", choix: ["Les bactéries décomposeurs","Les insectes pollinisateurs","Les végétaux chlorophylliens","Les herbivores"], bonne: 2, expl: "Photosynthèse.", niv: 2 },
        { q: "Pourquoi le lombric est-il une espèce ingénieur ?", choix: ["Il pollinise les fleurs des prairies","Il aère et mélange le sol","Il fixe l'azote de l'air dans le sol","Il chasse les insectes nuisibles"], bonne: 1, expl: "Il modifie le biotope.", niv: 2 },
        { q: "Qu'est-ce qu'un écocomplexe ?", choix: ["Un écosystème très pauvre en espèces","Une ferme qui pratique l'agriculture biologique depuis plusieurs années","Un ensemble d'écosystèmes qui échangent matière et êtres vivants","Un parc naturel protégé par la loi"], bonne: 2, expl: "Exemple : le bocage.", niv: 2 },
        { q: "Quelles bactéries fixent l'azote de l'air chez les légumineuses ?", choix: ["Les bactéries du compost","Les Rhizobium des nodosités","Les bactéries de l'intestin","Les cyanobactéries du lait"], bonne: 1, expl: "Symbiose avec la plante.", niv: 2 },
        { q: "Pourquoi la ripisylve améliore-t-elle la qualité de l'eau ?", choix: ["Elle réchauffe l'eau en été pour les poissons","Elle empêche les animaux sauvages de boire dans la rivière","Elle filtre une partie des nitrates et des sédiments","Elle augmente le débit du cours d'eau"], bonne: 2, expl: "Rôle de filtre.", niv: 3 },
        { q: "Que montre la présence de plantes qui aiment l'azote sur une ancienne parcelle ?", choix: ["La parcelle n'a pas été cultivée par l'Homme","Le climat de la région a changé récemment","L'écosystème garde la trace d'une fertilisation passée","Les plantes ont été semées par hasard"], bonne: 2, expl: "Un écosystème est le produit de son histoire.", niv: 3 },
        { q: "Pourquoi l'énergie ne cycle-t-elle pas comme la matière ?", choix: ["Elle est stockée durablement dans le sol par les racines","Elle est recyclée par les décomposeurs","Elle reste dans les végétaux sans circuler","Elle se perd sous forme de chaleur à chaque niveau"], bonne: 3, expl: "Flux d'énergie, cycle de la matière.", niv: 3 },
      ],
    },
    {
      chapitre: "bioeco-3",
      fiche: `## Services écosystémiques, agro-écologie et conservation

La biodiversité est indispensable au fonctionnement des écosystèmes et apporte à l'Homme des **avantages socio-économiques** : on parle de **services écosystémiques**. Les préserver est un enjeu pour l'agriculture, la santé et l'économie.

### Les services rendus par les écosystèmes
- Des **biens** (services d'approvisionnement) : nourriture, bois, eau, fibres, molécules médicamenteuses.
- Des **services de régulation** : qualité de l'eau, de l'air et des sols, régulation hydrique (une zone humide limite les crues), régulation climatique (stockage du carbone par les forêts), pollinisation, contrôle des ravageurs.
- Des **services culturels** : loisirs, paysages, écotourisme, valeur spirituelle.
- La **valeur d'option** : la biodiversité peut rendre des services futurs (nouveaux médicaments, gènes utiles pour l'amélioration des plantes).
- Exemples : une **forêt** (bois, carbone, eau, promenade) ; un **marais** (filtration de l'eau, frayères, oiseaux, régulation des crues).

### Donner une valeur à la biodiversité ?
- Attribuer une **valeur économique** aux services (par exemple, la pollinisation par les insectes vaut plusieurs centaines de milliards d'euros par an dans le monde) permet de convaincre les décideurs.
- Limites : tout ne se mesure pas en argent, et une espèce sans « utilité » directe a aussi une valeur.

### L'agro-écologie
- Les **agroécosystèmes** sont des écosystèmes simplifiés pour produire. Leur intensification (labour, engrais, pesticides, grandes parcelles) a réduit la biodiversité.
- L'**agro-écologie** veut produire en s'appuyant au maximum sur les **processus écologiques** naturels et en limitant les **perturbations** :
  - **Techniques culturales simplifiées** : **semis direct**, **non-labour** (préserve la vie du sol et les lombrics) ;
  - **couverture du sol** permanente (couverts végétaux, cultures intermédiaires) contre l'érosion et le lessivage des nitrates ;
  - **désherbage mécanique** à la place des herbicides ;
  - **biocontrôle** : utiliser des auxiliaires (coccinelles contre les pucerons), des haies et des bandes fleuries qui les abritent ;
  - **rotations** longues et association de cultures (légumineuses qui fixent l'azote).
- Le **bocage** (haies, prairies, mares) rend d'autres services que la production : abri pour les auxiliaires, paysage, lutte contre l'érosion.

### Protéger et conserver
- La conservation peut viser un **milieu** (réserve naturelle, parc national, sites **Natura 2000**, zones humides de la convention de **Ramsar**) ou une **espèce** (plan national d'actions pour l'ours brun, le hamster d'Europe, le grand tétras).
- Les mesures : protection réglementaire, gestion (pâturage, fauche tardive), réintroduction, restauration de corridors.
- Chaque projet implique des **acteurs** aux intérêts parfois opposés : agriculteurs, chasseurs, associations, élus, scientifiques, État.

### À retenir pour le bac
- Services : biens, régulation, culturels ; valeur d'option.
- Agro-écologie : semis direct, non-labour, couverture du sol, désherbage mécanique, biocontrôle, haies et bocage.
- Conservation d'un milieu ou d'une espèce : enjeux et acteurs (Natura 2000, plans nationaux d'actions).`,
      cartes: [
        { q: "Qu'est-ce qu'un service écosystémique ?", r: "Un avantage que l'Homme retire du fonctionnement des écosystèmes." },
        { q: "Quels sont les trois grands types de services ?", r: "Les biens (approvisionnement), les services de régulation et les services culturels." },
        { q: "Donne un exemple de service de régulation.", r: "La filtration de l'eau par une zone humide, la pollinisation, le stockage du carbone par la forêt." },
        { q: "Donne un exemple de service culturel.", r: "Les loisirs, les paysages, l'écotourisme." },
        { q: "Qu'est-ce que la valeur d'option de la biodiversité ?", r: "Les services qu'elle pourrait rendre à l'avenir (médicaments, gènes utiles)." },
        { q: "Qu'est-ce qu'un agroécosystème ?", r: "Un écosystème mis en place et contrôlé par l'Homme pour produire des biens." },
        { q: "Que vise l'agro-écologie ?", r: "Produire en s'appuyant sur les processus écologiques et en limitant les perturbations." },
        { q: "Quel est l'intérêt du non-labour ?", r: "Il préserve la vie du sol (lombrics, champignons) et sa structure." },
        { q: "Pourquoi couvrir le sol entre deux cultures ?", r: "Pour limiter l'érosion et le lessivage des nitrates, et nourrir la vie du sol." },
        { q: "Qu'est-ce que le biocontrôle ?", r: "La lutte contre les ravageurs grâce à des êtres vivants auxiliaires (coccinelles contre pucerons)." },
        { q: "Quels services rend le bocage en plus de la production ?", r: "Abri des auxiliaires, lutte contre l'érosion, régulation de l'eau, paysage." },
        { q: "Pourquoi associer des légumineuses aux cultures ?", r: "Elles fixent l'azote de l'air grâce à leurs bactéries et enrichissent le sol." },
        { q: "Qu'est-ce qu'un site Natura 2000 ?", r: "Un site européen protégé pour ses habitats et ses espèces remarquables." },
        { q: "Pourquoi donner une valeur économique à la biodiversité ?", r: "Pour convaincre les décideurs ; mais tout ne se mesure pas en argent." },
      ],
      quiz: [
        { q: "Lequel est un service de régulation ?", choix: ["La vente de bois de chauffage","La randonnée en forêt","La pollinisation des cultures","La récolte de champignons"], bonne: 2, expl: "Les insectes régulent la production.", niv: 1 },
        { q: "Lequel est un service culturel ?", choix: ["La filtration de l'eau","La production de bois","Le stockage du carbone","L'écotourisme"], bonne: 3, expl: "Loisirs, paysages.", niv: 1 },
        { q: "Qu'est-ce que le biocontrôle ?", choix: ["Contrôler la santé des animaux d'un élevage biologique","Lutter contre les ravageurs avec des êtres vivants","Analyser le sol avant de semer","Surveiller les cultures par satellite"], bonne: 1, expl: "Coccinelles contre pucerons.", niv: 1 },
        { q: "Quel animal est un auxiliaire contre les pucerons ?", choix: ["La coccinelle","Le doryphore","La limace","Le campagnol"], bonne: 0, expl: "Prédateur des pucerons.", niv: 1 },
        { q: "Pourquoi le non-labour favorise-t-il la vie du sol ?", choix: ["Il augmente la température du sol en hiver","Il apporte plus d'engrais aux plantes","Il évite de bouleverser les galeries et les champignons","Il supprime les mauvaises herbes sans désherbage ni herbicide"], bonne: 2, expl: "Moins de perturbations.", niv: 2 },
        { q: "Quel service rend une zone humide lors des fortes pluies ?", choix: ["Elle accélère l'écoulement vers la mer","Elle fournit du bois de construction","Elle augmente l'érosion des berges","Elle stocke l'eau et limite les crues"], bonne: 3, expl: "Régulation hydrique.", niv: 2 },
        { q: "Qu'est-ce que la valeur d'option ?", choix: ["Le prix de vente d'une parcelle agricole sur le marché foncier","Des services que la biodiversité pourrait rendre plus tard","Le choix d'une culture par l'agriculteur","L'impôt payé pour protéger la nature"], bonne: 1, expl: "Médicaments, gènes.", niv: 2 },
        { q: "Pourquoi implanter une bande fleurie au bord d'un champ ?", choix: ["Pour abriter et nourrir les insectes auxiliaires","Pour attirer les ravageurs loin des maisons","Pour remplacer la culture principale","Pour décorer le champ sans autre rôle"], bonne: 0, expl: "Biocontrôle favorisé.", niv: 2 },
        { q: "Quel est l'intérêt d'un couvert végétal en hiver ?", choix: ["Limiter l'érosion et le lessivage des nitrates","Empêcher les lombrics de remonter à la surface","Réchauffer le sol pour récolter plus tôt","Remplacer les rotations de cultures"], bonne: 0, expl: "Couverture du sol.", niv: 2 },
        { q: "Quelle limite pose le fait de chiffrer la biodiversité en euros ?", choix: ["Les économistes refusent d'étudier la nature","Certaines valeurs ne se mesurent pas en argent","La biodiversité n'a pas d'effet sur l'économie","Les chiffres sont interdits par la loi"], bonne: 1, expl: "Valeur intrinsèque.", niv: 3 },
        { q: "Pourquoi un projet de conservation est-il souvent difficile ?", choix: ["Les espèces protégées refusent d'être aidées","Les acteurs ont des intérêts différents à concilier","Les scientifiques ne connaissent pas les milieux","La loi interdit de protéger les milieux agricoles"], bonne: 1, expl: "Agriculteurs, élus, associations…", niv: 3 },
        { q: "Pourquoi le bocage est-il un écocomplexe intéressant ?", choix: ["Il réunit haies, prairies et mares qui échangent des espèces","Il produit plus de céréales qu'une grande plaine sans haies ni arbres","Il ne contient que des espèces cultivées","Il empêche les animaux de se déplacer"], bonne: 0, expl: "Production et autres services.", niv: 3 },
      ],
    },
    {
      chapitre: "bioeco-4",
      fiche: `## Dynamique de la biodiversité : stabilité et résilience

Un écosystème n'est pas figé : il change dans le temps, après une perturbation ou au fil d'une **succession écologique**. Comprendre cette dynamique permet de juger de sa **stabilité** et de choisir comment le gérer ou le **restaurer**.

### La succession écologique
- Après une perturbation (incendie, coupe, abandon d'un champ), le milieu est colonisé par étapes :
  - le **stade pionnier** : espèces de stratégie r (herbacées annuelles, lichens, mousses), peu exigeantes ;
  - le **stade juvénile** (ou intermédiaire) : vivaces, buissons, arbustes, la biodiversité augmente ;
  - le stade d'**équilibre dynamique** : espèces de stratégie K (arbres de la forêt), la biomasse est maximale.
- Une friche agricole abandonnée évolue ainsi : herbes, puis ronces et prunelliers, puis bouleaux, puis chênes et hêtres.
- Au cours de la succession, le sol s'épaissit, les espèces se diversifient et les réseaux d'interactions se complexifient.

### La stabilité d'un écosystème
- La **stabilité** est la capacité d'un écosystème à garder sa structure et son fonctionnement malgré les perturbations. Elle combine :
  - la **résistance** : capacité à ne pas être modifié par une perturbation ;
  - la **résilience** : capacité à retrouver son état d'avant après une perturbation.
- Une forte biodiversité augmente en général la stabilité : si une espèce disparaît, une autre peut assurer la même fonction (**redondance fonctionnelle**).

### Les réseaux d'interactions
- Les espèces sont liées par la **prédation**, la **compétition**, le **parasitisme**, le **mutualisme**, la **symbiose**.
- La **connectance** mesure la densité du réseau : **CT = L / S(S – 1)**, avec L le nombre de liens et S le nombre d'espèces. On l'approche souvent par **L / S²**. Une interaction directe entre deux espèces compte 2 liens (un dans chaque sens).
- Plus la connectance est élevée, plus le réseau est robuste : la disparition d'une espèce a moins d'effets en cascade.
- Une **espèce clé de voûte** a un effet très grand par rapport à son abondance : sa disparition bouleverse l'écosystème (la loutre de mer mange les oursins qui détruiraient les forêts de laminaires ; le loup régule les cerfs).
- Une **espèce généraliste** (régime varié) résiste mieux aux changements qu'une **espèce spécialiste**.

### Gérer et restaurer
- La **restauration écologique** aide un écosystème dégradé à retrouver son fonctionnement : replanter des haies, remettre en eau une zone humide, supprimer un barrage, réintroduire une espèce.
- Une **espèce parapluie** a besoin d'un grand territoire de qualité : la protéger protège aussi beaucoup d'autres espèces (le grand tétras, l'ours brun).
- Les modes de gestion (**fauche**, **pâturage**, **coupe**) peuvent bloquer une succession à un stade intéressant, par exemple une prairie riche en fleurs.

### À retenir pour le bac
- Succession : stade pionnier, stade juvénile, équilibre dynamique.
- Stabilité = résistance + résilience ; redondance fonctionnelle.
- Connectance CT = L / S(S – 1) ; espèce clé de voûte, généraliste ou spécialiste ; espèce parapluie ; restauration.`,
      cartes: [
        { q: "Qu'est-ce qu'une succession écologique ?", r: "L'évolution d'un écosystème par étapes, du stade pionnier jusqu'à un équilibre dynamique." },
        { q: "Quelles espèces trouve-t-on au stade pionnier ?", r: "Des espèces peu exigeantes de stratégie r : herbacées annuelles, mousses, lichens." },
        { q: "Que caractérise le stade d'équilibre dynamique ?", r: "Des espèces de stratégie K (arbres), une biomasse maximale, des réseaux complexes." },
        { q: "Qu'est-ce que la résistance d'un écosystème ?", r: "Sa capacité à ne pas être modifié par une perturbation." },
        { q: "Qu'est-ce que la résilience d'un écosystème ?", r: "Sa capacité à retrouver son état initial après une perturbation." },
        { q: "Qu'est-ce que la stabilité d'un écosystème ?", r: "Sa capacité à garder structure et fonctionnement : résistance et résilience." },
        { q: "Qu'est-ce que la redondance fonctionnelle ?", r: "Plusieurs espèces assurent la même fonction : si l'une disparaît, une autre la remplace." },
        { q: "Quelle est la formule de la connectance ?", r: "CT = L / S(S – 1), avec L le nombre de liens et S le nombre d'espèces." },
        { q: "Combien de liens compte une interaction directe entre deux espèces ?", r: "2 liens, un dans chaque sens." },
        { q: "Qu'est-ce qu'une espèce clé de voûte ?", r: "Une espèce dont l'effet sur l'écosystème est très grand par rapport à son abondance." },
        { q: "Donne un exemple d'espèce clé de voûte.", r: "La loutre de mer, qui mange les oursins et protège les forêts de laminaires." },
        { q: "Qu'est-ce qu'une espèce parapluie ?", r: "Une espèce au grand territoire : la protéger protège aussi beaucoup d'autres espèces." },
        { q: "Pourquoi une espèce généraliste résiste-t-elle mieux ?", r: "Son régime varié lui permet de changer de ressource si l'une disparaît." },
        { q: "Qu'est-ce que la restauration écologique ?", r: "Aider un écosystème dégradé à retrouver son fonctionnement (haies, zones humides, réintroductions)." },
      ],
      quiz: [
        { q: "Quelles espèces colonisent en premier un sol nu ?", choix: ["Des grands arbres","Des espèces pionnières","Des espèces clés de voûte","Des espèces parapluies"], bonne: 1, expl: "Stade pionnier.", niv: 1 },
        { q: "Qu'est-ce que la résilience ?", choix: ["La capacité à attirer de nouvelles espèces venues d'ailleurs","La quantité de biomasse d'un écosystème","La capacité à retrouver son état après une perturbation","Le nombre de liens d'un réseau trophique"], bonne: 2, expl: "Retour à l'équilibre.", niv: 1 },
        { q: "Dans la formule de la connectance, que désigne S ?", choix: ["La surface du milieu","Le stade de la succession","Le nombre d'espèces","La stabilité du milieu"], bonne: 2, expl: "CT = L / S(S – 1).", niv: 1 },
        { q: "Quelle succession est correcte pour une friche ?", choix: ["Herbes, buissons, puis forêt","Forêt, buissons, puis herbes","Buissons, forêt, puis herbes","Herbes, forêt, puis buissons"], bonne: 0, expl: "Du pionnier à l'équilibre.", niv: 1 },
        { q: "Un réseau a 4 espèces et 6 liens. Quelle connectance CT = L / S(S – 1) ?", choix: ["0,1","0,3","0,5","0,4"], bonne: 2, expl: "6 / (4 × 3) = 0,5.", niv: 2 },
        { q: "Pourquoi la loutre de mer est-elle une espèce clé de voûte ?", choix: ["Elle est l'espèce la plus nombreuse de la côte","Elle limite les oursins qui détruiraient les laminaires","Elle fabrique les forêts de laminaires","Elle est la proie favorite des grands poissons de la côte"], bonne: 1, expl: "Effet en cascade.", niv: 2 },
        { q: "Quel effet a une forte biodiversité sur la stabilité ?", choix: ["Elle la diminue car les espèces se gênent","Elle l'augmente grâce à la redondance fonctionnelle","Elle n'a pas d'effet sur l'écosystème","Elle empêche le déroulement de la succession écologique"], bonne: 1, expl: "Une espèce en remplace une autre.", niv: 2 },
        { q: "Pourquoi protéger une espèce parapluie ?", choix: ["Elle protège les autres espèces de la pluie et du vent froid","Elle se reproduit plus vite que les autres","Elle chasse les espèces invasives du milieu","Elle a un grand habitat qui abrite beaucoup d'autres espèces"], bonne: 3, expl: "Grand territoire de qualité.", niv: 2 },
        { q: "À quoi sert la fauche tardive d'une prairie ?", choix: ["Accélérer l'arrivée des arbres","Maintenir un stade riche en fleurs en bloquant la succession","Supprimer les insectes pollinisateurs","Remplacer la prairie par une culture de céréales plus rentable"], bonne: 1, expl: "Gestion d'un stade intéressant.", niv: 2 },
        { q: "Que se passe-t-il quand on retire une espèce d'un réseau à forte connectance ?", choix: ["La plupart des autres espèces disparaissent","Le réseau devient plus connecté qu'avant","La succession revient au stade pionnier","Les effets en cascade sont limités"], bonne: 3, expl: "Réseau robuste.", niv: 3 },
        { q: "Après une tempête, une forêt retrouve son état en 30 ans. Que mesure-t-on ?", choix: ["Sa résistance","Sa résilience","Sa connectance","Sa densité"], bonne: 1, expl: "Retour après perturbation.", niv: 3 },
        { q: "Pourquoi une espèce spécialiste est-elle plus menacée ?", choix: ["Elle dépend d'une ressource dont la disparition la condamne","Elle a plus de prédateurs que les généralistes","Elle vit dans des milieux plus froids","Elle se reproduit moins souvent par choix"], bonne: 0, expl: "Pas de ressource de rechange.", niv: 3 },
      ],
    },
    {
      chapitre: "bioeco-5",
      fiche: `## L'évolution de la biodiversité

La biodiversité n'est pas fixe : elle évolue en permanence. La **diversité génétique** des populations est la matière première de cette évolution, sur laquelle agissent la **sélection naturelle** et la **dérive génétique**. L'Homme, par ses activités, accélère certains changements.

### La diversité génétique
- Un **gène** peut exister sous plusieurs versions : les **allèles**. Un gène qui a plusieurs allèles fréquents dans une population est dit **polymorphe** (**polymorphisme**).
- L'ensemble des allèles d'une population forme son **pool génétique**.
- Les **mutations** (modifications aléatoires de l'ADN) créent de nouveaux allèles. Chez les espèces sexuées, la **reproduction sexuée** (méiose et fécondation) brasse les allèles et crée des combinaisons nouvelles.
- Chez les bactéries, les **transferts horizontaux** de gènes (passage de gènes entre bactéries) ajoutent de la diversité. L'**endosymbiose** (une bactérie intégrée dans une cellule, à l'origine des mitochondries et des chloroplastes) est un transfert à grande échelle.

### La sélection naturelle
- Dans un milieu donné, certains individus survivent et se reproduisent mieux grâce à leurs allèles : ils ont une meilleure **valeur sélective** (ou **fitness** : nombre de descendants fertiles).
- Leurs allèles deviennent plus fréquents dans la population à chaque génération.
- Exemples : la **phalène du bouleau** (forme sombre favorisée sur les troncs noircis par la pollution industrielle) ; les **bactéries résistantes aux antibiotiques** ; les insectes résistants aux insecticides.
- On parle d'**éco-évolution** quand les changements écologiques et évolutifs se produisent à la même échelle de temps et s'influencent.

### La dérive génétique
- La fréquence des allèles peut changer **au hasard**, sans avantage : c'est la **dérive génétique**. Son effet est fort dans les **petites populations**.
- **Effet fondateur** : quelques individus fondent une nouvelle population ; ils n'emportent qu'une partie des allèles (exemple : une population de drosophiles fondée par quelques individus ne porte qu'un seul allèle d'un gène).
- **Goulot d'étranglement** : une catastrophe réduit brutalement la population ; la diversité génétique chute (guépard, éléphant de mer).
- Une faible diversité génétique rend la population plus fragile face aux maladies et aux changements.

### La formation de nouvelles espèces
- Une **espèce** est un ensemble d'individus qui se ressemblent et peuvent se reproduire entre eux en donnant des descendants fertiles.
- La **spéciation** se produit quand deux populations deviennent **isolées** (barrière géographique, différence de période de reproduction, de chant) : leurs pools génétiques divergent par mutations, sélection et dérive, jusqu'à l'**isolement reproducteur**.
- Un **arbre phylogénétique** représente les liens de parenté entre espèces : deux espèces qui partagent un ancêtre commun récent sont proches.

### À retenir pour le bac
- Allèles, polymorphisme, pool génétique ; mutations, reproduction sexuée, transferts horizontaux.
- Sélection naturelle et valeur sélective ; dérive génétique, effet fondateur, goulot d'étranglement.
- Isolement reproducteur, spéciation, arbre phylogénétique.`,
      cartes: [
        { q: "Qu'est-ce qu'un allèle ?", r: "Une version d'un gène." },
        { q: "Qu'est-ce qu'un gène polymorphe ?", r: "Un gène qui a plusieurs allèles fréquents dans une population." },
        { q: "Qu'est-ce que le pool génétique ?", r: "L'ensemble des allèles présents dans une population." },
        { q: "D'où viennent les nouveaux allèles ?", r: "Des mutations, modifications aléatoires de l'ADN." },
        { q: "Qu'est-ce que la valeur sélective (fitness) ?", r: "Le nombre de descendants fertiles qu'un individu laisse." },
        { q: "Qu'est-ce que la sélection naturelle ?", r: "Les individus aux allèles avantageux dans un milieu survivent et se reproduisent mieux : ces allèles deviennent plus fréquents." },
        { q: "Qu'est-ce que la dérive génétique ?", r: "Le changement au hasard de la fréquence des allèles, fort dans les petites populations." },
        { q: "Qu'est-ce que l'effet fondateur ?", r: "Une population fondée par quelques individus ne porte qu'une partie des allèles de la population d'origine." },
        { q: "Qu'est-ce qu'un goulot d'étranglement ?", r: "Une réduction brutale d'une population qui fait chuter sa diversité génétique." },
        { q: "Qu'est-ce qu'un transfert horizontal de gènes ?", r: "Le passage de gènes d'un organisme à un autre sans reproduction (fréquent chez les bactéries)." },
        { q: "Qu'est-ce que l'endosymbiose ?", r: "L'intégration d'une bactérie dans une cellule, à l'origine des mitochondries et des chloroplastes." },
        { q: "Qu'est-ce qu'une espèce ?", r: "Des individus qui se ressemblent et se reproduisent entre eux en donnant des descendants fertiles." },
        { q: "Comment se forme une nouvelle espèce ?", r: "Deux populations isolées divergent génétiquement jusqu'à l'isolement reproducteur : c'est la spéciation." },
        { q: "Que montre un arbre phylogénétique ?", r: "Les liens de parenté entre espèces, d'après leurs ancêtres communs." },
      ],
      quiz: [
        { q: "Comment appelle-t-on les versions d'un même gène ?", choix: ["Les chromosomes","Les protéines","Les allèles","Les génomes"], bonne: 2, expl: "Un gène, plusieurs allèles.", niv: 1 },
        { q: "Qu'est-ce qui crée de nouveaux allèles ?", choix: ["La sélection naturelle","La dérive génétique","L'isolement reproducteur","Les mutations"], bonne: 3, expl: "La sélection trie, elle ne crée pas.", niv: 1 },
        { q: "Qu'est-ce que le pool génétique d'une population ?", choix: ["Le nombre de ses individus","La liste de ses prédateurs","L'ensemble de ses allèles","Son territoire de reproduction"], bonne: 2, expl: "Patrimoine génétique collectif.", niv: 1 },
        { q: "Qu'est-ce qui mesure la valeur sélective ?", choix: ["La taille de l'individu adulte","Le nombre de descendants fertiles","La durée de vie de l'individu","Le nombre de ses mutations"], bonne: 1, expl: "Fitness.", niv: 1 },
        { q: "Dans quelles populations la dérive génétique agit-elle le plus ?", choix: ["Les très grandes populations","Les populations de bactéries géantes","Les populations en pleine forêt","Les petites populations"], bonne: 3, expl: "Le hasard pèse plus.", niv: 2 },
        { q: "Une population de drosophiles fondée par 5 individus n'a qu'un allèle. Pourquoi ?", choix: ["Sélection naturelle : l'autre allèle tuait les mouches à la naissance","Mutation : l'autre allèle s'est transformé","Effet fondateur : les fondateurs ne portaient pas tous les allèles","Endosymbiose : un gène a été transféré"], bonne: 2, expl: "Dérive au départ.", niv: 2 },
        { q: "Pourquoi la forme sombre de la phalène s'est-elle répandue près des usines ?", choix: ["Elle était moins visible pour les oiseaux sur les troncs noircis","La pollution changeait directement la couleur des papillons adultes","Les papillons sombres migraient vers les villes","Les oiseaux préféraient manger les sombres"], bonne: 0, expl: "Sélection naturelle.", niv: 2 },
        { q: "Qu'est-ce que l'isolement reproducteur ?", choix: ["Un individu qui vit seul sur son territoire pendant toute sa vie","Deux populations ne peuvent plus se reproduire entre elles","Une femelle qui refuse un mâle une fois","Une population sans prédateurs"], bonne: 1, expl: "Étape de la spéciation.", niv: 2 },
        { q: "D'où viennent les mitochondries ?", choix: ["D'une mutation d'un gène situé dans le noyau de la cellule","D'une ancienne bactérie intégrée par endosymbiose","D'une division du chloroplaste","D'un virus devenu inoffensif"], bonne: 1, expl: "Transfert horizontal massif.", niv: 2 },
        { q: "Pourquoi une faible diversité génétique fragilise-t-elle une population ?", choix: ["Les individus vivent moins longtemps par nature","La population ne peut plus muter du tout","Les prédateurs la repèrent plus facilement","Peu d'individus peuvent résister à une nouvelle maladie"], bonne: 3, expl: "Moins d'allèles de réserve.", niv: 3 },
        { q: "Pourquoi parle-t-on d'éco-évolution pour les insectes résistants ?", choix: ["Les insectes choisissent d'évoluer selon les besoins du milieu","L'écosystème évolue sans que les gènes changent","Les insecticides créent volontairement des allèles","L'évolution est assez rapide pour modifier l'écosystème"], bonne: 3, expl: "Échelles de temps confondues.", niv: 3 },
        { q: "Sur un arbre phylogénétique, quelles espèces sont les plus proches ?", choix: ["Celles qui partagent l'ancêtre commun le plus récent","Celles qui se ressemblent le plus en taille","Celles qui vivent dans le même milieu","Celles placées côte à côte en bas de l'arbre"], bonne: 0, expl: "Parenté par l'ancêtre.", niv: 3 },
      ],
    },
    {
      chapitre: "bioeco-6",
      fiche: `## Le message nerveux et les substances psychoactives

Le **système nerveux** reçoit des informations, les intègre et commande une réponse. Le **réflexe myotatique** (contraction d'un muscle quand on l'étire, comme le réflexe rotulien) en est l'exemple le plus simple. Les **substances psychoactives** agissent sur la transmission du message nerveux.

### Du stimulus au message nerveux
- Un **stimulus** (étirement d'un muscle, lumière, son) est détecté par un **récepteur sensoriel** (le **fuseau neuromusculaire** pour l'étirement).
- Au repos, la membrane d'un neurone est polarisée : c'est le **potentiel de repos** (environ –70 mV, l'intérieur est négatif).
- Le stimulus provoque un **potentiel de récepteur**, dont l'amplitude dépend de l'intensité du stimulus : c'est la **transduction** (transformation du stimulus en signal électrique).

### Le potentiel d'action
- Si le potentiel de récepteur dépasse un **seuil**, des **canaux à sodium (Na+)** s'ouvrent : l'entrée de Na+ inverse la polarité, c'est le **potentiel d'action** (PA), puis la sortie de K+ rétablit le repos.
- **Loi du tout ou rien** : un PA a toujours la même amplitude ; sous le seuil, il n'y a pas de PA.
- L'intensité du stimulus est codée par la **fréquence** des PA : plus le stimulus est fort, plus les PA sont rapprochés.
- La **période réfractaire** (juste après un PA, la membrane ne peut pas en produire un autre) explique que le PA se propage **dans un seul sens**.
- La vitesse de propagation dépend du **diamètre** de la fibre et de la présence d'une **gaine de myéline** (fibres myélinisées plus rapides).

### Le circuit du réflexe et la synapse
- Trajet : récepteur, **neurone sensitif**, **centre nerveux** (moelle épinière), **neurone moteur** (motoneurone), **effecteur** (le muscle).
- Entre deux neurones, la **synapse chimique** : le PA arrive dans le bouton présynaptique, qui libère un **neurotransmetteur** dans la **fente synaptique** ; il se fixe sur des **récepteurs** du neurone postsynaptique.
- Il en résulte un **PPSE** (potentiel postsynaptique excitateur, rapproche du seuil) ou un **PPSI** (inhibiteur, éloigne du seuil, par exemple avec le **GABA**).
- Le neurone postsynaptique fait la **sommation** : **spatiale** (plusieurs synapses en même temps) et **temporelle** (PPS rapprochés sur une même synapse). C'est l'**intégration**.
- À la **jonction neuromusculaire**, l'**acétylcholine** déclenche la contraction du muscle.

### Les substances psychoactives
- Elles modifient le fonctionnement des synapses : elles imitent un neurotransmetteur, bloquent sa recapture ou ses récepteurs.
- Le **cannabis** (THC) se fixe sur des récepteurs du cerveau : troubles de la mémoire, de la coordination, de la vigilance.
- L'**alcool** renforce l'effet inhibiteur du GABA : temps de réaction allongé, troubles de l'équilibre et du jugement.
- Les **benzodiazépines** (anxiolytiques) renforcent aussi le GABA : apaisement, mais somnolence et risque de dépendance.

### À retenir pour le bac
- Potentiel de repos, potentiel de récepteur, transduction ; seuil, potentiel d'action, tout ou rien, codage en fréquence, période réfractaire.
- Arc réflexe : récepteur, neurone sensitif, moelle épinière, motoneurone, muscle.
- Synapse chimique, neurotransmetteur, PPSE et PPSI, sommation spatiale et temporelle ; cannabis, alcool, benzodiazépines.`,
      cartes: [
        { q: "Qu'est-ce que le réflexe myotatique ?", r: "La contraction d'un muscle en réponse à son propre étirement (réflexe rotulien)." },
        { q: "Quel récepteur détecte l'étirement d'un muscle ?", r: "Le fuseau neuromusculaire." },
        { q: "Quelle est la valeur du potentiel de repos ?", r: "Environ –70 mV : l'intérieur du neurone est négatif." },
        { q: "Qu'est-ce que la transduction ?", r: "La transformation d'un stimulus en signal électrique (potentiel de récepteur) par le récepteur." },
        { q: "Que dit la loi du tout ou rien ?", r: "Au-dessus du seuil, le potentiel d'action a toujours la même amplitude ; sous le seuil, il n'y en a pas." },
        { q: "Comment est codée l'intensité d'un stimulus ?", r: "Par la fréquence des potentiels d'action." },
        { q: "Quels ions entrent lors du potentiel d'action ?", r: "Les ions sodium (Na+), par des canaux qui s'ouvrent au seuil." },
        { q: "Pourquoi le message nerveux va-t-il dans un seul sens ?", r: "À cause de la période réfractaire : la zone qui vient d'émettre un PA ne peut pas en émettre un autre tout de suite." },
        { q: "Qu'est-ce qui rend une fibre nerveuse plus rapide ?", r: "Un grand diamètre et une gaine de myéline." },
        { q: "Quels sont les éléments de l'arc réflexe ?", r: "Récepteur, neurone sensitif, moelle épinière, motoneurone, muscle effecteur." },
        { q: "Qu'est-ce qu'un PPSI ?", r: "Un potentiel postsynaptique inhibiteur, qui éloigne le neurone du seuil (GABA)." },
        { q: "Qu'est-ce que la sommation spatiale ?", r: "L'addition des potentiels venus de plusieurs synapses en même temps." },
        { q: "Qu'est-ce que la sommation temporelle ?", r: "L'addition de potentiels rapprochés dans le temps sur une même synapse." },
        { q: "Comment agit l'alcool sur les synapses ?", r: "Il renforce l'effet inhibiteur du GABA : réflexes ralentis, équilibre et jugement perturbés." },
      ],
      quiz: [
        { q: "Quelle est la valeur approchée du potentiel de repos ?", choix: ["0 mV","–70 mV","+30 mV","+70 mV"], bonne: 1, expl: "L'intérieur est négatif.", niv: 1 },
        { q: "Quel muscle se contracte dans le réflexe myotatique ?", choix: ["Le muscle opposé au muscle étiré","Le cœur","L'ensemble des muscles de la jambe","Le muscle qui a été étiré"], bonne: 3, expl: "Réponse à son propre étirement.", niv: 1 },
        { q: "Quel centre nerveux intervient dans le réflexe rotulien ?", choix: ["Le cervelet","La moelle épinière","L'hypophyse","Le cortex visuel"], bonne: 1, expl: "Réflexe médullaire.", niv: 1 },
        { q: "Quelle molécule déclenche la contraction à la jonction neuromusculaire ?", choix: ["La dopamine","Le cortisol","L'acétylcholine","L'adrénaline"], bonne: 2, expl: "Neurotransmetteur de la plaque motrice.", niv: 1 },
        { q: "Comment le neurone code-t-il un stimulus plus fort ?", choix: ["Par des potentiels d'action plus fréquents","Par des potentiels d'action plus grands","Par un potentiel de repos plus élevé","Par un changement de neurotransmetteur"], bonne: 0, expl: "Tout ou rien : la fréquence change.", niv: 2 },
        { q: "Que se passe-t-il si la stimulation reste sous le seuil ?", choix: ["Un petit potentiel d'action est émis","Le neurone émet un PA en sens inverse","Le muscle se contracte à moitié","Aucun potentiel d'action n'est émis"], bonne: 3, expl: "Loi du tout ou rien.", niv: 2 },
        { q: "Qu'est-ce qui déclenche le potentiel d'action ?", choix: ["L'ouverture de canaux à sodium au seuil","La fermeture des canaux à sodium","La libération de cortisol dans le sang","Une destruction locale de la gaine de myéline"], bonne: 0, expl: "Entrée de Na+.", niv: 2 },
        { q: "Que libère le bouton présynaptique ?", choix: ["Un anticorps","Une hormone sexuelle","Un neurotransmetteur","Du glucose"], bonne: 2, expl: "Dans la fente synaptique.", niv: 2 },
        { q: "Comment agissent l'alcool et les benzodiazépines ?", choix: ["Ils renforcent l'inhibition par le GABA","Ils bloquent la gaine de myéline","Ils augmentent le potentiel de repos à +70 mV","Ils empêchent la sortie du sodium"], bonne: 0, expl: "Effet sédatif.", niv: 2 },
        { q: "Un neurone reçoit en même temps deux PPSE et un PPSI. Que fait-il ?", choix: ["Il émet trois potentiels d'action à la suite","Il ne tient compte que du premier signal arrivé","Il additionne ces potentiels et émet un PA si le seuil est atteint","Il transforme le PPSI en PPSE"], bonne: 2, expl: "Intégration par sommation spatiale.", niv: 3 },
        { q: "Pourquoi une fibre myélinisée conduit-elle plus vite ?", choix: ["La myéline produit du sodium en grande quantité","La myéline supprime la période réfractaire","Une fibre myélinisée est plus courte que les autres fibres","Le message saute d'un nœud de la gaine à l'autre"], bonne: 3, expl: "Conduction saltatoire.", niv: 3 },
        { q: "Pourquoi le cannabis gêne-t-il la conduite ?", choix: ["Il perturbe la coordination, la vigilance et la mémoire","Il augmente nettement la vitesse des réflexes au-delà du normal","Il agit surtout sur les muscles des jambes","Il améliore la vision de nuit"], bonne: 0, expl: "Récepteurs du cerveau.", niv: 3 },
      ],
    },
    {
      chapitre: "bioeco-7",
      fiche: `## Circuit de la récompense, accoutumance et dépendance

Certains comportements (manger du sucré, jouer, consulter son téléphone) et certaines substances procurent du plaisir. Ce plaisir vient d'un ensemble de neurones, le **circuit de la récompense**. Quand il est trop sollicité, il peut conduire à l'**accoutumance** puis à la **dépendance**, sources de **troubles du comportement**.

### Le circuit de la récompense
- C'est un réseau de neurones du cerveau qui relie l'**aire tegmentale ventrale** (ATV) au **noyau accumbens** et au **cortex préfrontal**.
- Il libère de la **dopamine** quand une action est utile à la survie (manger, boire, avoir des relations sociales) : la sensation de plaisir pousse à **répéter** le comportement. C'est le **renforcement positif**.
- La **sérotonine** intervient aussi dans l'humeur, la satiété et le contrôle des impulsions.
- Le cortex préfrontal permet normalement de **contrôler** ces envies (prise de décision, maîtrise de soi). Il termine sa maturation vers 25 ans : les adolescents sont donc plus vulnérables.

### Les drogues et le circuit de la récompense
- Les substances psychoactives augmentent fortement la quantité de dopamine dans les synapses :
  - la **cocaïne** bloque la **recapture** de la dopamine ;
  - la **nicotine**, l'**alcool**, le **cannabis** et les opioïdes stimulent indirectement sa libération.
- Le plaisir obtenu est bien plus fort que celui d'une récompense naturelle.

### Accoutumance et dépendance
- **Accoutumance** (ou **tolérance**) : le cerveau s'adapte, par exemple en diminuant le nombre de **récepteurs** à dopamine. Il faut une dose plus forte pour obtenir le même effet.
- **Dépendance** : besoin irrépressible de consommer (envie intense, le « craving »), malgré les conséquences négatives. Elle est :
  - **physique** : à l'arrêt, un **syndrome de manque** (tremblements, sueurs, douleurs) ;
  - **psychique** : envie, anxiété, irritabilité sans le produit.
- Facteurs de risque : âge précoce de la première consommation, génétique, environnement familial et social, stress.

### Les addictions sans substance
- **Écrans et réseaux sociaux** : les notifications, les « likes » et le défilement sans fin donnent des récompenses imprévisibles, qui stimulent fortement le circuit. Effets possibles : troubles du sommeil, de l'attention, isolement.
- **Jeux d'argent et jeux vidéo** : même mécanisme de récompense aléatoire.
- **Sucre** : le glucose active le circuit de la récompense ; une consommation excessive favorise surpoids et diabète de type 2.

### Prévenir et soigner
- Information, limitation de l'accès (interdiction de vente aux mineurs), temps d'écran encadré.
- Prise en charge médicale et psychologique (substituts nicotiniques, thérapies comportementales).

### À retenir pour le bac
- Circuit de la récompense : ATV, noyau accumbens, cortex préfrontal ; dopamine, renforcement positif ; sérotonine.
- Drogues : hausse de la dopamine (cocaïne bloque la recapture).
- Accoutumance (moins de récepteurs, doses plus fortes) ; dépendance physique et psychique ; écrans, jeux, sucre.`,
      cartes: [
        { q: "Quel neurotransmetteur est au cœur du circuit de la récompense ?", r: "La dopamine." },
        { q: "Quelles zones forment le circuit de la récompense ?", r: "L'aire tegmentale ventrale, le noyau accumbens et le cortex préfrontal." },
        { q: "À quoi sert naturellement le circuit de la récompense ?", r: "À pousser à répéter les comportements utiles à la survie (manger, boire, liens sociaux)." },
        { q: "Qu'est-ce que le renforcement positif ?", r: "Le plaisir ressenti après un comportement pousse à le répéter." },
        { q: "Quel rôle joue le cortex préfrontal ?", r: "Il contrôle les envies et prend les décisions ; il finit de mûrir vers 25 ans." },
        { q: "Comment agit la cocaïne ?", r: "Elle bloque la recapture de la dopamine, qui reste plus longtemps dans la synapse." },
        { q: "Qu'est-ce que l'accoutumance ?", r: "Le cerveau s'adapte (moins de récepteurs) et il faut une dose plus forte pour le même effet." },
        { q: "Qu'est-ce que la dépendance ?", r: "Un besoin irrépressible de consommer malgré les conséquences négatives." },
        { q: "Qu'est-ce que la dépendance physique ?", r: "Un syndrome de manque à l'arrêt : tremblements, sueurs, douleurs." },
        { q: "Qu'est-ce que la dépendance psychique ?", r: "Une envie intense, de l'anxiété et de l'irritabilité sans le produit." },
        { q: "Pourquoi les adolescents sont-ils plus vulnérables aux addictions ?", r: "Leur cortex préfrontal, qui contrôle les envies, n'a pas fini sa maturation." },
        { q: "Pourquoi les réseaux sociaux stimulent-ils le circuit de la récompense ?", r: "Ils donnent des récompenses imprévisibles (likes, notifications), très stimulantes." },
        { q: "Quel rôle joue la sérotonine ?", r: "Elle intervient dans l'humeur, la satiété et le contrôle des impulsions." },
        { q: "Cite deux facteurs de risque d'addiction.", r: "Une première consommation précoce, la génétique, le stress, l'entourage." },
      ],
      quiz: [
        { q: "Quel neurotransmetteur procure la sensation de plaisir ?", choix: ["La dopamine","L'acétylcholine","Le cortisol","L'insuline"], bonne: 0, expl: "Circuit de la récompense.", niv: 1 },
        { q: "Quelle zone du cerveau contrôle les envies ?", choix: ["La moelle épinière","Le cervelet","Le cortex préfrontal","Le bulbe rachidien"], bonne: 2, expl: "Prise de décision.", niv: 1 },
        { q: "Qu'est-ce que le syndrome de manque ?", choix: ["Le plaisir ressenti à la première prise","Des troubles physiques à l'arrêt du produit","Une baisse de l'envie de consommer","Un oubli du produit par le cerveau"], bonne: 1, expl: "Dépendance physique.", niv: 1 },
        { q: "Vers quel âge le cortex préfrontal finit-il de mûrir ?", choix: ["Vers 5 ans","Vers 12 ans","Vers 25 ans","Vers 15 ans"], bonne: 2, expl: "D'où la vulnérabilité des jeunes.", niv: 1 },
        { q: "Comment la cocaïne augmente-t-elle la dopamine dans la synapse ?", choix: ["Elle détruit les récepteurs à dopamine","Elle remplace l'acétylcholine du muscle","Elle bloque sa recapture","Elle ferme les canaux à sodium"], bonne: 2, expl: "La dopamine reste dans la fente.", niv: 2 },
        { q: "Pourquoi un consommateur augmente-t-il ses doses ?", choix: ["Le produit perd sa force en vieillissant","Le cerveau a moins de récepteurs : c'est l'accoutumance","Le foie fabrique plus de dopamine","Le cortex préfrontal mûrit plus vite"], bonne: 1, expl: "Tolérance.", niv: 2 },
        { q: "Quel comportement le circuit de la récompense renforce-t-il naturellement ?", choix: ["Se blesser en courant","Rester seul longtemps","Dormir moins de 4 heures","Manger quand on a faim"], bonne: 3, expl: "Utile à la survie.", niv: 2 },
        { q: "Pourquoi le défilement sans fin est-il si attirant ?", choix: ["Il fatigue les yeux rapidement","Il offre des récompenses imprévisibles","Il diminue la libération de dopamine","Il bloque le cortex préfrontal pour la nuit"], bonne: 1, expl: "Récompense aléatoire.", niv: 2 },
        { q: "Qu'est-ce que la dépendance psychique ?", choix: ["Des tremblements et des sueurs à l'arrêt","Une maladie du foie liée à l'alcool","Une envie intense et de l'anxiété sans le produit","Une perte de mémoire définitive"], bonne: 2, expl: "Différente du manque physique.", niv: 2 },
        { q: "Pourquoi une drogue crée-t-elle plus de dépendance qu'une récompense naturelle ?", choix: ["Elle agit hors du cerveau, sur les muscles","Elle diminue le plaisir ressenti","Elle libère beaucoup plus de dopamine, plus vite","Elle renforce le contrôle exercé par le cortex préfrontal"], bonne: 2, expl: "Signal artificiel très fort.", niv: 3 },
        { q: "Quel lien entre sucre et circuit de la récompense ?", choix: ["Le sucre bloque le circuit et coupe l'appétit","Le glucose active le circuit, ce qui pousse à en reprendre","Le sucre n'agit que sur les muscles","Le glucose remplace la dopamine dans les synapses du cerveau"], bonne: 1, expl: "Surpoids, diabète.", niv: 3 },
        { q: "Quelle mesure de prévention vise l'accès au produit ?", choix: ["Un cours sur les neurones moteurs","L'interdiction de vente d'alcool aux mineurs","Une thérapie après dix ans de consommation","Un traitement contre les allergies"], bonne: 1, expl: "Limiter l'accès.", niv: 3 },
      ],
    },
    {
      chapitre: "bioeco-8",
      fiche: `## Le stress aigu : une réponse adaptative

Face à un danger ou une situation exigeante (**agent stresseur** : examen, agression, effort imprévu), l'organisme réagit en quelques secondes : c'est le **stress aigu**. Cette réponse est **adaptative** : elle prépare à fuir ou à combattre, puis s'arrête une fois le danger passé.

### Les effets sur le cœur et la circulation
- Le **débit cardiaque** (volume de sang éjecté par minute) = **fréquence cardiaque** (FC, battements par minute) × **volume d'éjection systolique** (VES, sang éjecté à chaque battement).
- Au repos : environ 70 battements par minute × 70 mL ≈ 5 L/min. Lors d'un stress, FC et VES augmentent : le débit peut doubler.
- Les organes sont alimentés **en parallèle** : le débit se répartit entre eux. Lors d'un stress, il est redistribué : plus de sang vers les **muscles**, le **cœur** et le **cerveau** (**vasodilatation**), moins vers le **tube digestif**, les **reins** et la peau (**vasoconstriction**).
- La **pression artérielle** augmente.
- La respiration s'accélère, le glucose est libéré par le foie : les muscles reçoivent plus d'oxygène et d'énergie.

### Une réponse nerveuse rapide
- Le **système nerveux autonome** (involontaire) comprend le système **sympathique** (accélérateur) et le **parasympathique** (frein).
- Le stress active le **sympathique** : ses neurones libèrent de la **noradrénaline** sur le cœur et les vaisseaux.
- Il stimule aussi la **médullosurrénale** (partie centrale des glandes surrénales), qui libère de l'**adrénaline** dans le sang en quelques secondes : accélération du cœur, dilatation des bronches, libération de glucose.

### Une réponse hormonale plus lente : l'axe du cortisol
- L'**hypothalamus** libère la **CRH**, qui agit sur l'**hypophyse**.
- L'hypophyse libère l'**ACTH** dans le sang, qui agit sur la **corticosurrénale** (partie externe des surrénales).
- La corticosurrénale libère le **cortisol** (en quelques minutes) : il augmente la glycémie, mobilise les réserves et diminue temporairement l'inflammation.

### L'arrêt de la réponse : la rétroaction négative
- Le **cortisol** agit en retour sur l'hypothalamus et l'hypophyse, notamment par l'intermédiaire de l'**hippocampe**, qui possède de nombreux **récepteurs au cortisol** : la production de CRH et d'ACTH diminue.
- C'est une **rétroaction négative** : plus il y a de cortisol, moins on en produit. Le système revient à l'équilibre.
- La **résilience** au stress est la capacité à revenir rapidement à l'état normal après un stress.

### À retenir pour le bac
- Débit cardiaque = FC × VES ; redistribution du débit vers les muscles (vasodilatation) et loin du tube digestif et des reins (vasoconstriction).
- Voie rapide : système sympathique, noradrénaline, médullosurrénale, adrénaline.
- Voie lente : hypothalamus (CRH), hypophyse (ACTH), corticosurrénale (cortisol) ; rétroaction négative par l'hippocampe.`,
      cartes: [
        { q: "Qu'est-ce qu'un agent stresseur ?", r: "Une situation ou un élément qui déclenche une réaction de stress (danger, examen, effort)." },
        { q: "Pourquoi dit-on que le stress aigu est adaptatif ?", r: "Il prépare l'organisme à fuir ou à combattre, puis s'arrête." },
        { q: "Quelle est la formule du débit cardiaque ?", r: "Débit cardiaque = fréquence cardiaque × volume d'éjection systolique." },
        { q: "Quel est le débit cardiaque au repos ?", r: "Environ 5 litres par minute." },
        { q: "Où va le sang en plus lors d'un stress ?", r: "Vers les muscles, le cœur et le cerveau, par vasodilatation." },
        { q: "Quels organes reçoivent moins de sang lors d'un stress ?", r: "Le tube digestif, les reins et la peau, par vasoconstriction." },
        { q: "Pourquoi dit-on que les organes sont irrigués en parallèle ?", r: "Chaque organe reçoit une part du débit, qui peut être redistribuée selon les besoins." },
        { q: "Quel neurotransmetteur libère le système sympathique ?", r: "La noradrénaline." },
        { q: "Quelle glande libère l'adrénaline ?", r: "La médullosurrénale, partie centrale des glandes surrénales." },
        { q: "Quelle hormone libère l'hypothalamus lors d'un stress ?", r: "La CRH, qui agit sur l'hypophyse." },
        { q: "Quelle hormone libère l'hypophyse lors d'un stress ?", r: "L'ACTH, qui stimule la corticosurrénale." },
        { q: "Quels sont les effets du cortisol ?", r: "Il augmente la glycémie, mobilise les réserves et diminue l'inflammation." },
        { q: "Qu'est-ce que la rétroaction négative du cortisol ?", r: "Le cortisol freine la production de CRH et d'ACTH, ce qui limite sa propre sécrétion." },
        { q: "Quel rôle joue l'hippocampe dans le stress ?", r: "Riche en récepteurs au cortisol, il participe à l'arrêt de la réponse (rétroaction)." },
      ],
      quiz: [
        { q: "Quelle hormone libère la médullosurrénale ?", choix: ["Le cortisol","L'ACTH","La CRH","L'adrénaline"], bonne: 3, expl: "Voie rapide.", niv: 1 },
        { q: "Quelle glande libère l'ACTH ?", choix: ["L'hypothalamus","L'hypophyse","La corticosurrénale","Le pancréas"], bonne: 1, expl: "ACTH vers la corticosurrénale.", niv: 1 },
        { q: "Que devient la fréquence cardiaque lors d'un stress aigu ?", choix: ["Elle augmente","Elle baisse fortement","Elle s'arrête un instant","Elle reste à 70 battements"], bonne: 0, expl: "Préparation à l'effort.", niv: 1 },
        { q: "Quelle partie du système nerveux autonome s'active lors d'un stress ?", choix: ["Le système parasympathique","Le système sympathique","Le système nerveux moteur volontaire","Le cortex visuel"], bonne: 1, expl: "L'accélérateur.", niv: 1 },
        { q: "FC = 120 battements/min et VES = 0,1 L. Quel débit cardiaque ?", choix: ["1,2 L/min","12 L/min","6 L/min","10 L/min"], bonne: 1, expl: "120 × 0,1 = 12.", niv: 2 },
        { q: "Pourquoi le tube digestif reçoit-il moins de sang lors d'un stress ?", choix: ["Le cœur ralentit et irrigue moins le corps","L'adrénaline détruit les vaisseaux digestifs","Le cortisol empêche la digestion pendant plusieurs jours","Ses vaisseaux se contractent et le sang va aux muscles"], bonne: 3, expl: "Redistribution du débit.", niv: 2 },
        { q: "Quel ordre est correct pour la voie du cortisol ?", choix: ["Hypothalamus, hypophyse, corticosurrénale","Hypophyse, hypothalamus, médullosurrénale","Corticosurrénale, hypophyse, hypothalamus","Hypothalamus, médullosurrénale, hypophyse"], bonne: 0, expl: "CRH, ACTH, cortisol.", niv: 2 },
        { q: "Quel effet du cortisol aide à faire face au stress ?", choix: ["Il augmente la glycémie","Il diminue la fréquence respiratoire","Il fait baisser la pression artérielle","Il stimule la digestion"], bonne: 0, expl: "Énergie pour les muscles.", niv: 2 },
        { q: "Pourquoi la réponse par l'adrénaline est-elle plus rapide que celle du cortisol ?", choix: ["L'adrénaline est fabriquée directement par les neurones du cerveau","Le cortisol doit d'abord être digéré","L'adrénaline ne passe pas par le sang","Elle est déclenchée directement par les nerfs sympathiques"], bonne: 3, expl: "Voie nerveuse puis hormonale.", niv: 2 },
        { q: "Que montre une baisse de l'ACTH quand le cortisol augmente ?", choix: ["Une rétroaction positive","Une rétroaction négative","Un dérèglement du système sympathique","Une accoutumance au cortisol"], bonne: 1, expl: "Le cortisol freine sa propre production.", niv: 3 },
        { q: "Pourquoi le volume d'éjection systolique augmente-t-il lors d'un stress ?", choix: ["Le cœur grossit en quelques secondes","Le sang devient plus liquide grâce au cortisol libéré par les surrénales","Les reins envoient plus de sang au cœur","Le cœur se contracte plus fort sous l'effet de l'adrénaline"], bonne: 3, expl: "Force de contraction.", niv: 3 },
        { q: "Que signifie avoir une bonne résilience au stress ?", choix: ["Ne plus ressentir de stress dans sa vie","Produire beaucoup de cortisol pendant des mois","Revenir vite à l'état normal après le stress","Avoir un cœur qui ne s'accélère pas"], bonne: 2, expl: "Retour à l'équilibre.", niv: 3 },
      ],
    },
    {
      chapitre: "bioeco-9",
      fiche: `## Le stress chronique et sa prévention

Quand l'agent stresseur dure des semaines ou des mois (surcharge de travail, harcèlement, isolement, maladie d'un proche), la réponse de stress ne s'arrête plus : c'est le **stress chronique**. La réponse, utile à court terme, devient alors **nocive** pour la santé.

### Un système qui ne s'arrête plus
- En temps normal, le cortisol freine sa propre production par **rétroaction négative**, en agissant sur l'hippocampe, l'hypothalamus et l'hypophyse.
- En cas de stress prolongé, le cortisol reste élevé longtemps. L'**hippocampe** perd une partie de ses **récepteurs au cortisol** et certains de ses neurones : la rétroaction fonctionne mal, le cortisol continue d'être produit. C'est un **cercle vicieux**.
- L'**amygdale** (zone du cerveau des émotions et de la peur) devient plus active : anxiété accrue.

### Les effets sur la santé
- **Cœur et vaisseaux** : **hypertension artérielle**, risque accru de **maladies cardio-vasculaires** (infarctus, AVC).
- **Immunité** : le cortisol diminue les défenses ; on tombe plus souvent malade, les plaies cicatrisent moins vite.
- **Métabolisme** : hausse de la glycémie, stockage des graisses au niveau du ventre, **obésité**, risque de diabète.
- **Reproduction** : baisse de la fertilité, troubles des règles.
- **Cerveau** : troubles de la mémoire (hippocampe), du sommeil, de l'humeur, **anxiété** et **dépression**, **épuisement professionnel** (burn-out).

### Les traitements médicamenteux
- Les **benzodiazépines** (anxiolytiques) renforcent l'effet inhibiteur du **GABA** sur les neurones : ils se fixent sur les récepteurs au GABA, qui sont des **canaux à ions chlorure** (Cl–). L'entrée de Cl– rend le neurone plus négatif et moins excitable.
- Effets : apaisement, mais aussi **sédation** (somnolence), troubles de la mémoire, **accoutumance** et **dépendance**. Ils sont prescrits sur une courte durée.
- Les antidépresseurs agissent sur d'autres neurotransmetteurs comme la **sérotonine**.

### La prévention et la gestion du stress
- **Activité physique régulière** : elle diminue le cortisol au repos, améliore le sommeil, libère des molécules du bien-être, renforce le cœur.
- **Relaxation, méditation, yoga, cohérence cardiaque** : des études montrent une hausse du GABA et une baisse de l'activité de l'amygdale.
- **Sommeil** suffisant, alimentation équilibrée, liens sociaux.
- Au travail : organisation, droit à la déconnexion, prévention des risques psychosociaux.

### À retenir pour le bac
- Stress chronique : cortisol élevé longtemps, perte de récepteurs dans l'hippocampe, rétroaction défaillante, amygdale suractive.
- Effets : hypertension, maladies cardio-vasculaires, baisse de l'immunité, obésité, troubles de la reproduction et de l'humeur.
- Benzodiazépines : renforcent le GABA (canaux à chlorure) ; sédation et dépendance. Prévention : activité physique, méditation, sommeil.`,
      cartes: [
        { q: "Qu'est-ce que le stress chronique ?", r: "Une réponse de stress qui dure des semaines ou des mois parce que l'agent stresseur persiste." },
        { q: "Pourquoi la rétroaction du cortisol échoue-t-elle lors d'un stress chronique ?", r: "L'hippocampe perd des récepteurs au cortisol : le frein ne fonctionne plus." },
        { q: "Quel est le rôle de l'amygdale ?", r: "Elle traite les émotions et la peur ; elle devient plus active lors d'un stress chronique." },
        { q: "Quels effets cardio-vasculaires a le stress chronique ?", r: "Hypertension artérielle et risque accru d'infarctus et d'AVC." },
        { q: "Quel effet le stress chronique a-t-il sur l'immunité ?", r: "Le cortisol diminue les défenses : infections plus fréquentes, cicatrisation plus lente." },
        { q: "Quel effet le stress chronique a-t-il sur le métabolisme ?", r: "Glycémie plus élevée, stockage des graisses abdominales, obésité, risque de diabète." },
        { q: "Quel effet le stress chronique a-t-il sur la reproduction ?", r: "Baisse de la fertilité et troubles des règles." },
        { q: "Comment agissent les benzodiazépines ?", r: "Elles renforcent l'effet du GABA en favorisant l'entrée d'ions chlorure dans les neurones." },
        { q: "Quels sont les risques des benzodiazépines ?", r: "Sédation, troubles de la mémoire, accoutumance et dépendance." },
        { q: "Pourquoi l'entrée de chlorure calme-t-elle un neurone ?", r: "Elle rend l'intérieur plus négatif : le neurone atteint plus difficilement le seuil." },
        { q: "Pourquoi l'activité physique protège-t-elle du stress chronique ?", r: "Elle diminue le cortisol au repos, améliore le sommeil et renforce le cœur." },
        { q: "Quel effet la méditation aurait-elle sur le cerveau ?", r: "Hausse du GABA et baisse de l'activité de l'amygdale." },
        { q: "Qu'est-ce que le burn-out ?", r: "Un épuisement physique et psychique lié à un stress professionnel prolongé." },
        { q: "Pourquoi parle-t-on de cercle vicieux dans le stress chronique ?", r: "Le cortisol abîme l'hippocampe, qui freine alors moins sa production : le cortisol reste élevé." },
      ],
      quiz: [
        { q: "Quelle hormone reste élevée lors d'un stress chronique ?", choix: ["Le cortisol","L'insuline","L'acétylcholine","La CRH seule à faible dose"], bonne: 0, expl: "Rétroaction défaillante.", niv: 1 },
        { q: "Quelle zone du cerveau perd des récepteurs au cortisol ?", choix: ["Le cervelet","La moelle épinière","L'hippocampe","Le cortex moteur"], bonne: 2, expl: "Frein du système.", niv: 1 },
        { q: "Quel trouble cardio-vasculaire favorise le stress chronique ?", choix: ["L'hypotension permanente","Un cœur plus lent au repos","Une baisse du cholestérol","L'hypertension artérielle"], bonne: 3, expl: "Pression trop élevée.", niv: 1 },
        { q: "Quel conseil aide à prévenir le stress chronique ?", choix: ["Pratiquer une activité physique régulière","Dormir moins pour travailler plus","Prendre des benzodiazépines chaque soir","Rester seul le plus possible"], bonne: 0, expl: "Baisse du cortisol.", niv: 1 },
        { q: "Sur quels récepteurs agissent les benzodiazépines ?", choix: ["Les récepteurs à l'acétylcholine du muscle","Les récepteurs au GABA","Les récepteurs au cortisol de l'hippocampe","Les récepteurs de la rétine"], bonne: 1, expl: "Canaux à chlorure.", niv: 2 },
        { q: "Pourquoi les personnes très stressées tombent-elles plus souvent malades ?", choix: ["Le cortisol diminue les défenses immunitaires","Le stress fabrique des microbes","Le cœur envoie moins de sang aux poumons","L'adrénaline détruit les vaccins"], bonne: 0, expl: "Immunité affaiblie.", niv: 2 },
        { q: "Quel effet indésirable ont les benzodiazépines ?", choix: ["La somnolence et la dépendance","Une hausse de l'anxiété au début","Des battements du cœur plus rapides","Une meilleure mémoire à long terme"], bonne: 0, expl: "Sédation.", niv: 2 },
        { q: "Qu'est-ce qui rend l'amygdale importante dans le stress ?", choix: ["Elle fabrique le cortisol à la place des surrénales","Elle traite la peur et devient suractive","Elle contrôle les muscles des jambes","Elle filtre le sang qui arrive au cerveau"], bonne: 1, expl: "Anxiété accrue.", niv: 2 },
        { q: "Pourquoi limiter la durée d'un traitement par benzodiazépines ?", choix: ["Parce qu'ils perdent leur effet en une nuit","Pour éviter l'accoutumance et la dépendance","Parce qu'ils augmentent le stress au bout d'un jour","Pour laisser le corps fabriquer des anticorps"], bonne: 1, expl: "Prescription courte.", niv: 2 },
        { q: "Pourquoi le cortisol reste-t-il élevé si l'hippocampe est abîmé ?", choix: ["L'hippocampe fabrique lui-même le cortisol","Les glandes surrénales se détachent de l'hypophyse et du rein","Le foie ne détruit plus le sucre du sang","Le frein de la rétroaction ne bloque plus la CRH et l'ACTH"], bonne: 3, expl: "Cercle vicieux.", niv: 3 },
        { q: "Une étude montre plus de GABA après 12 semaines de yoga. Que conclure ?", choix: ["Le yoga remplace sans risque un traitement médical contre l'anxiété","Le yoga augmente le cortisol de façon dangereuse","Le yoga agit sur l'immunité et non sur le cerveau","Le yoga pourrait réduire l'anxiété en renforçant le GABA"], bonne: 3, expl: "Prudence : une étude.", niv: 3 },
        { q: "Pourquoi le stress chronique favorise-t-il l'obésité ?", choix: ["Le stress fait baisser l'appétit pendant des mois et fait maigrir","Le cortisol augmente la glycémie et le stockage des graisses","Le cortisol empêche les muscles de bouger","L'adrénaline transforme les muscles en graisse"], bonne: 1, expl: "Effet métabolique.", niv: 3 },
      ],
    },
    {
      chapitre: "bioeco-10",
      fiche: `## Les barrières naturelles et l'immunité innée

Notre organisme est en contact permanent avec des micro-organismes. La plupart sont arrêtés avant d'entrer ; ceux qui pénètrent déclenchent une réponse immédiate, l'**immunité innée**, présente dès la naissance et commune à tous les animaux.

### Le système ante-immunitaire : les barrières
- **Barrières mécaniques** : la **peau** (couche de cellules mortes kératinisées), les **muqueuses** et leur **mucus** qui piège les microbes, les **cils** des voies respiratoires qui les rejettent.
- **Barrières chimiques** : l'**acidité** de l'estomac et de la peau, le **lysozyme** des larmes et de la salive (enzyme qui détruit la paroi des bactéries), les peptides antimicrobiens.
- **Barrières écologiques** : le **microbiote** (bactéries de la peau, de l'intestin, du vagin) occupe la place et les ressources et empêche les microbes pathogènes de s'installer.

### La réaction inflammatoire
- Quand un microbe franchit les barrières (coupure, piqûre), une **réaction inflammatoire** se déclenche en quelques minutes à quelques heures.
- Quatre signes : **rougeur**, **chaleur**, **gonflement** (œdème), **douleur**.
- Les cellules de la zone (les **mastocytes**, les cellules sentinelles) libèrent des **médiateurs chimiques** (histamine, **interleukines**, prostaglandines) :
  - les vaisseaux se **dilatent** et deviennent plus perméables : rougeur, chaleur, gonflement ;
  - les **leucocytes** (globules blancs) quittent le sang et sont attirés vers le foyer infectieux ;
  - les terminaisons nerveuses sont stimulées : douleur.

### Les cellules de l'immunité innée
- Les **phagocytes** (**macrophages**, **granulocytes** ou polynucléaires) ingèrent et digèrent les microbes : c'est la **phagocytose** (adhésion, ingestion dans une vésicule, digestion, rejet des déchets).
- Les **cellules NK** (« tueuses naturelles ») détruisent les cellules infectées par un virus et certaines cellules cancéreuses.
- Les cellules de l'immunité innée reconnaissent des **motifs moléculaires** communs à de nombreux microbes (paroi bactérienne, ARN viral) grâce à des récepteurs : la réponse est **rapide** mais **peu spécifique**.

### Le lien avec l'immunité adaptative
- Les **cellules dendritiques** capturent des fragments du microbe (**antigènes**), migrent vers les **ganglions lymphatiques** et les **présentent** aux lymphocytes : elles font le lien avec l'immunité adaptative.
- L'immunité innée suffit souvent ; sinon, l'immunité adaptative prend le relais après quelques jours.

### Les anti-inflammatoires
- Les **anti-inflammatoires non stéroïdiens** (AINS : ibuprofène, aspirine) bloquent la fabrication des **prostaglandines** : moins de douleur, de fièvre et de gonflement.
- Les **corticoïdes** (proches du cortisol) ont un effet plus fort.
- Ils soulagent mais ne soignent pas la cause ; utilisés trop longtemps, ils ont des effets indésirables (estomac, reins).

### À retenir pour le bac
- Barrières : mécaniques (peau, mucus), chimiques (acidité, lysozyme), écologiques (microbiote).
- Réaction inflammatoire : rougeur, chaleur, gonflement, douleur ; mastocytes, médiateurs chimiques, interleukines.
- Phagocytose (macrophages), cellules NK ; cellules dendritiques présentatrices ; AINS et corticoïdes.`,
      cartes: [
        { q: "Qu'est-ce que l'immunité innée ?", r: "Une défense présente dès la naissance, rapide et peu spécifique." },
        { q: "Cite deux barrières mécaniques.", r: "La peau et le mucus des muqueuses (avec les cils)." },
        { q: "Cite une barrière chimique.", r: "L'acidité de l'estomac ou le lysozyme des larmes et de la salive." },
        { q: "Pourquoi le microbiote est-il une barrière ?", r: "Il occupe la place et les ressources, ce qui empêche les pathogènes de s'installer." },
        { q: "Quels sont les quatre signes de l'inflammation ?", r: "Rougeur, chaleur, gonflement et douleur." },
        { q: "Quel est le rôle des mastocytes ?", r: "Ils détectent l'infection et libèrent des médiateurs chimiques comme l'histamine." },
        { q: "Que provoque la dilatation des vaisseaux lors de l'inflammation ?", r: "Rougeur, chaleur et gonflement, et l'arrivée des globules blancs." },
        { q: "Qu'est-ce que la phagocytose ?", r: "L'ingestion et la digestion d'un microbe par un phagocyte (macrophage, granulocyte)." },
        { q: "Quelles sont les étapes de la phagocytose ?", r: "Adhésion, ingestion dans une vésicule, digestion, rejet des déchets." },
        { q: "Quel est le rôle des cellules NK ?", r: "Détruire les cellules infectées par un virus et certaines cellules cancéreuses." },
        { q: "Quel est le rôle des cellules dendritiques ?", r: "Capturer des antigènes et les présenter aux lymphocytes dans les ganglions." },
        { q: "Que sont les interleukines ?", r: "Des molécules de communication entre cellules immunitaires." },
        { q: "Comment agissent les anti-inflammatoires non stéroïdiens ?", r: "Ils bloquent la fabrication des prostaglandines : moins de douleur et de fièvre." },
        { q: "Quelle est la limite des anti-inflammatoires ?", r: "Ils soulagent sans traiter la cause et ont des effets indésirables s'ils sont pris longtemps." },
      ],
      quiz: [
        { q: "Quelle enzyme des larmes détruit la paroi des bactéries ?", choix: ["L'amylase","L'insuline","La kératine","Le lysozyme"], bonne: 3, expl: "Barrière chimique.", niv: 1 },
        { q: "Lequel est un signe de l'inflammation ?", choix: ["La pâleur","Le froid local","La perte de poils","La rougeur"], bonne: 3, expl: "Avec chaleur, gonflement, douleur.", niv: 1 },
        { q: "Quelle cellule réalise la phagocytose ?", choix: ["Le globule rouge","Le neurone","Le macrophage","La plaquette"], bonne: 2, expl: "Phagocyte.", niv: 1 },
        { q: "Quel type de barrière forme le microbiote intestinal ?", choix: ["Une barrière mécanique","Une barrière chimique","Une barrière écologique","Une barrière nerveuse"], bonne: 2, expl: "Occupation de la place.", niv: 1 },
        { q: "Pourquoi la zone enflammée gonfle-t-elle ?", choix: ["Les muscles de la zone se contractent","Les microbes fabriquent des bulles d'air sous la peau blessée","Les os de la zone grossissent","Les vaisseaux plus perméables laissent sortir du liquide"], bonne: 3, expl: "Œdème.", niv: 2 },
        { q: "Quelles cellules détruisent les cellules infectées par un virus ?", choix: ["Les globules rouges","Les cellules NK","Les mastocytes","Les plaquettes"], bonne: 1, expl: "Tueuses naturelles.", niv: 2 },
        { q: "Que libèrent les mastocytes lors d'une infection ?", choix: ["Des médiateurs comme l'histamine","Des anticorps spécifiques de l'allergène","Des hormones sexuelles","De l'adrénaline"], bonne: 0, expl: "Signal d'alerte.", niv: 2 },
        { q: "Quel est le rôle de la cellule dendritique ?", choix: ["Fabriquer les anticorps","Présenter les antigènes aux lymphocytes","Transporter l'oxygène dans le sang","Former la couche externe protectrice de la peau"], bonne: 1, expl: "Lien inné et adaptatif.", niv: 2 },
        { q: "Comment agit l'ibuprofène ?", choix: ["Il tue les bactéries de la plaie","Il augmente le nombre de macrophages","Il remplace les anticorps","Il bloque la fabrication des prostaglandines"], bonne: 3, expl: "Anti-inflammatoire, pas antibiotique.", niv: 2 },
        { q: "Pourquoi dit-on que l'immunité innée est peu spécifique ?", choix: ["Elle ne reconnaît qu'un seul microbe précis, déjà rencontré","Elle reconnaît des motifs communs à de nombreux microbes","Elle ne fonctionne que chez l'adulte","Elle a besoin d'un vaccin pour agir"], bonne: 1, expl: "Rapide mais générale.", niv: 3 },
        { q: "Pourquoi prendre un anti-inflammatoire ne guérit-il pas une infection ?", choix: ["Il renforce le microbe en le nourrissant","Il empêche le corps de fabriquer des globules","Il agit surtout sur les virus présents dans la peau","Il réduit les symptômes sans détruire le microbe"], bonne: 3, expl: "Soulage, ne soigne pas la cause.", niv: 3 },
        { q: "Pourquoi un antibiotique à large spectre peut-il favoriser une infection intestinale ?", choix: ["Il renforce l'acidité de l'estomac","Il bloque la réaction inflammatoire","Il remplace les cellules NK","Il détruit le microbiote qui faisait barrière"], bonne: 3, expl: "Barrière écologique affaiblie.", niv: 3 },
      ],
    },
    {
      chapitre: "bioeco-11",
      fiche: `## L'immunité adaptative, le VIH et la vaccination

Quand l'immunité innée ne suffit pas, l'**immunité adaptative** prend le relais. Plus lente (quelques jours), elle est **spécifique** d'un antigène et garde une **mémoire**. C'est elle que le **VIH** détruit et que la **vaccination** prépare.

### Le soi et le non-soi
- Le **soi** : l'ensemble des molécules propres à l'individu, en particulier les molécules du **CMH** (complexe majeur d'histocompatibilité) à la surface des cellules, très variables d'une personne à l'autre.
- Le **non-soi** : ce que le système immunitaire reconnaît comme étranger (microbe, cellule greffée) ou le soi modifié (cellule infectée, cancéreuse).
- Un **antigène** est une molécule reconnue par le système immunitaire.

### Les acteurs
- Les **lymphocytes B** (LB) portent des **anticorps** membranaires ; les **lymphocytes T** (LT) portent des récepteurs **TCR**. Chaque lymphocyte reconnaît **un seul** antigène.
- Les **LT CD4** (auxiliaires) coordonnent la réponse en libérant des **interleukines**.
- Les **LT CD8** deviennent des **LT cytotoxiques** qui détruisent les cellules infectées.
- Les **LB** deviennent des **plasmocytes** qui produisent des **anticorps** circulants.

### Le déroulement de la réponse
- La cellule dendritique présente l'antigène dans un ganglion : seuls les lymphocytes qui le reconnaissent sont activés (**sélection clonale**).
- Ils se multiplient (**amplification** ou **expansion clonale**), stimulés par les interleukines des LT CD4.
- Ils se transforment en cellules efficaces (**différenciation**) : plasmocytes, LT cytotoxiques, et **cellules mémoire**.
- Les anticorps se fixent sur l'antigène : ils forment un **complexe immun**, qui neutralise le microbe et facilite sa phagocytose.

### La mémoire immunitaire
- Après un premier contact, des **cellules mémoire** restent longtemps dans l'organisme.
- Lors d'un second contact, la **réponse secondaire** est **plus rapide**, **plus forte** (beaucoup plus d'anticorps) et plus durable.

### Le VIH et le sida
- Le **VIH** (virus de l'immunodéficience humaine) infecte les **LT CD4**. Il se transmet par voie sexuelle, sanguine et de la mère à l'enfant.
- Phases : primo-infection, phase asymptomatique de plusieurs années où les LT CD4 diminuent lentement, puis **sida** (moins de 200 LT CD4 par mm³) avec des **maladies opportunistes**.
- Sans LT CD4, ni les LB ni les LT CD8 ne sont bien activés : toute l'immunité adaptative s'effondre.
- Les **antirétroviraux** bloquent la multiplication du virus ; le préservatif et le dépistage préviennent la transmission.

### La vaccination et l'immunothérapie
- Un **vaccin** contient un antigène sans danger (microbe tué, atténué, fragment, ARN messager) : il déclenche une réponse primaire et la formation de cellules mémoire.
- Rappels : renforcent la mémoire. Si une grande partie de la population est vaccinée, le microbe circule peu : **immunité collective**, qui protège aussi les personnes non vaccinables.
- **Immunothérapie** : aider le système immunitaire à lutter contre une maladie (cancer), par exemple avec des **anticorps monoclonaux** fabriqués en laboratoire.

### À retenir pour le bac
- Soi (CMH), non-soi, antigène ; LB, plasmocytes, anticorps ; LT CD4 auxiliaires ; LT CD8 cytotoxiques.
- Sélection, amplification, différenciation clonales ; complexe immun ; mémoire et réponse secondaire.
- VIH : destruction des LT CD4, sida ; vaccination, immunité collective, anticorps monoclonaux.`,
      cartes: [
        { q: "Qu'est-ce qu'un antigène ?", r: "Une molécule reconnue comme étrangère par le système immunitaire." },
        { q: "Qu'est-ce que le CMH ?", r: "Des molécules à la surface des cellules qui définissent le soi de chaque individu." },
        { q: "Quelles cellules produisent les anticorps ?", r: "Les plasmocytes, issus des lymphocytes B." },
        { q: "Quel est le rôle des LT CD4 ?", r: "Coordonner la réponse immunitaire en libérant des interleukines." },
        { q: "Quel est le rôle des LT CD8 cytotoxiques ?", r: "Détruire les cellules infectées." },
        { q: "Qu'est-ce que la sélection clonale ?", r: "Seuls les lymphocytes qui reconnaissent l'antigène présenté sont activés." },
        { q: "Qu'est-ce que l'amplification clonale ?", r: "La multiplication des lymphocytes sélectionnés." },
        { q: "Qu'est-ce qu'un complexe immun ?", r: "L'association d'un anticorps et de son antigène, qui neutralise le microbe." },
        { q: "Quelles sont les caractéristiques de la réponse secondaire ?", r: "Plus rapide, plus forte et plus durable grâce aux cellules mémoire." },
        { q: "Quelles cellules le VIH infecte-t-il ?", r: "Les lymphocytes T CD4." },
        { q: "Pourquoi le sida rend-il vulnérable à toutes les infections ?", r: "Sans LT CD4, les LB et les LT CD8 ne sont plus activés : maladies opportunistes." },
        { q: "Que contient un vaccin ?", r: "Un antigène sans danger : microbe tué ou atténué, fragment, ou ARN messager." },
        { q: "Qu'est-ce que l'immunité collective ?", r: "Quand assez de personnes sont vaccinées, le microbe circule peu et protège les non-vaccinés." },
        { q: "Qu'est-ce qu'un anticorps monoclonal ?", r: "Un anticorps fabriqué en laboratoire contre une cible précise, utilisé en immunothérapie." },
      ],
      quiz: [
        { q: "Quelles cellules fabriquent les anticorps ?", choix: ["Les LT CD8","Les macrophages","Les plasmocytes","Les globules rouges"], bonne: 2, expl: "Issus des LB.", niv: 1 },
        { q: "Quelles cellules le VIH détruit-il ?", choix: ["Les globules rouges","Les LT CD4","Les neurones moteurs","Les plaquettes"], bonne: 1, expl: "Lymphocytes auxiliaires.", niv: 1 },
        { q: "Quelle réponse est la plus rapide et la plus forte ?", choix: ["La réponse primaire","La réaction inflammatoire de départ","La réponse secondaire","La réponse au premier vaccin"], bonne: 2, expl: "Cellules mémoire.", niv: 1 },
        { q: "Combien d'antigènes différents un lymphocyte reconnaît-il ?", choix: ["Deux","Une dizaine","Plusieurs milliers","Un seul"], bonne: 3, expl: "Spécificité.", niv: 1 },
        { q: "Quel est l'ordre de la réponse adaptative ?", choix: ["Sélection, amplification, différenciation","Différenciation, sélection, amplification","Amplification, différenciation, sélection","Sélection, différenciation, amplification"], bonne: 0, expl: "Étapes clonales.", niv: 2 },
        { q: "Que forment un anticorps et son antigène ?", choix: ["Une cellule mémoire","Un plasmocyte","Un complexe immun","Une molécule de CMH"], bonne: 2, expl: "Neutralisation.", niv: 2 },
        { q: "Pourquoi refait-on des rappels de vaccin ?", choix: ["Pour renforcer la mémoire immunitaire","Pour soigner une infection déjà présente","Pour détruire les anticorps anciens","Pour éviter une réaction inflammatoire"], bonne: 0, expl: "Réponse secondaire.", niv: 2 },
        { q: "Pourquoi rejette-t-on une greffe d'un donneur non compatible ?", choix: ["Ses cellules ne portent pas assez d'anticorps à leur surface","Son sang contient le VIH","Ses organes sont trop gros","Ses molécules de CMH sont reconnues comme non-soi"], bonne: 3, expl: "Soi et non-soi.", niv: 2 },
        { q: "Comment agit un vaccin ?", choix: ["Il apporte des anticorps tout prêts qui restent dans le sang à vie","Il détruit les microbes déjà présents","Il provoque une réponse primaire et forme des cellules mémoire","Il bloque la réaction inflammatoire"], bonne: 2, expl: "Préparation au vrai contact.", niv: 2 },
        { q: "Pourquoi la perte des LT CD4 affaiblit-elle aussi les anticorps ?", choix: ["Les LT CD4 fabriquent eux-mêmes les anticorps","Les LT CD4 activent les LB par les interleukines","Le VIH détruit les plasmocytes en premier","Les anticorps sont faits de LT CD4"], bonne: 1, expl: "Rôle de chef d'orchestre.", niv: 3 },
        { q: "Pourquoi l'immunité collective protège-t-elle un bébé non vacciné ?", choix: ["Le microbe circule peu autour de lui","Le bébé reçoit les cellules mémoire des autres","Le vaccin des autres passe dans l'air","Le bébé fabrique des anticorps plus vite"], bonne: 0, expl: "Moins de transmission.", niv: 3 },
        { q: "Pourquoi un malade du sida meurt-il de maladies opportunistes ?", choix: ["Le VIH détruit directement les cellules du cœur, du foie et des poumons","Des microbes habituellement inoffensifs ne sont plus contrôlés","Les antirétroviraux provoquent ces maladies","Les anticorps attaquent les organes du malade"], bonne: 1, expl: "Immunodéficience.", niv: 3 },
      ],
    },
    {
      chapitre: "bioeco-12",
      fiche: `## Les allergies et le rôle du microbiote

Une **allergie** est une réaction excessive du système immunitaire contre une substance habituellement sans danger, l'**allergène** (pollens, acariens, poils d'animaux, arachide, lait). Les allergies sont de plus en plus fréquentes dans les pays industrialisés, et le **microbiote** semble jouer un rôle clé.

### Deux étapes : sensibilisation puis réaction
- **Premier contact : la sensibilisation**. L'allergène est présenté aux lymphocytes ; les LB produisent des anticorps particuliers, les **IgE**. Ces IgE se fixent sur les **mastocytes** des tissus (peau, muqueuses). Il n'y a **aucun symptôme**.
- **Contacts suivants : la réaction allergique**. L'allergène se fixe sur les IgE portées par les mastocytes, qui libèrent brutalement de l'**histamine** et d'autres médiateurs.
- Effets de l'histamine : dilatation et perméabilité des vaisseaux (rougeur, gonflement, nez qui coule), contraction des bronches (asthme), démangeaisons (urticaire).
- Le **choc anaphylactique** est une réaction généralisée grave (chute de la tension, difficulté à respirer) : urgence vitale, traitée par une injection d'**adrénaline**.

### Prévenir et soigner
- Éviter l'allergène quand c'est possible (housses anti-acariens, éviction alimentaire).
- **Antihistaminiques** : ils bloquent les récepteurs à l'histamine et soulagent les symptômes.
- **Corticoïdes** contre l'inflammation (asthme).
- **Désensibilisation** : exposer très progressivement à l'allergène pour habituer le système immunitaire.

### Le microbiote et l'éducation du système immunitaire
- Le **microbiote** est l'ensemble des micro-organismes qui vivent dans et sur notre corps (environ autant de bactéries que de cellules humaines), surtout dans l'**intestin**.
- Il se constitue à la naissance (accouchement, allaitement) et dans la petite enfance, puis dépend de l'alimentation, des antibiotiques, de l'environnement.
- Il **éduque** le système immunitaire : il l'aide à tolérer les substances sans danger et à réagir contre les pathogènes.
- **Hypothèse hygiéniste** : un environnement trop **aseptisé** pendant l'enfance (peu de contact avec les microbes, peu d'animaux, antibiotiques fréquents) réduirait la diversité du microbiote et favoriserait les allergies.
- Des études montrent moins d'allergies chez les enfants qui grandissent dans une **ferme**, au contact des animaux, ou dans des familles nombreuses.
- Un microbiote **diversifié**, nourri par une alimentation riche en **fibres**, est associé à une meilleure santé.

### À retenir pour le bac
- Allergène, sensibilisation (IgE sur les mastocytes, pas de symptômes), réaction allergique (histamine) au contact suivant.
- Asthme, urticaire, choc anaphylactique (adrénaline) ; antihistaminiques, désensibilisation.
- Microbiote diversifié dès l'enfance : éducation du système immunitaire ; hypothèse hygiéniste.`,
      cartes: [
        { q: "Qu'est-ce qu'une allergie ?", r: "Une réaction excessive du système immunitaire contre une substance habituellement sans danger." },
        { q: "Qu'est-ce qu'un allergène ?", r: "La substance qui déclenche l'allergie (pollen, acariens, arachide, poils d'animaux)." },
        { q: "Que se passe-t-il au premier contact avec un allergène ?", r: "La sensibilisation : production d'IgE qui se fixent sur les mastocytes, sans symptômes." },
        { q: "Que se passe-t-il aux contacts suivants ?", r: "L'allergène se fixe sur les IgE des mastocytes, qui libèrent de l'histamine." },
        { q: "Quels anticorps interviennent dans l'allergie ?", r: "Les IgE." },
        { q: "Quels sont les effets de l'histamine ?", r: "Vaisseaux dilatés et perméables, bronches contractées, démangeaisons." },
        { q: "Qu'est-ce qu'un choc anaphylactique ?", r: "Une réaction allergique généralisée grave, traitée en urgence par l'adrénaline." },
        { q: "Comment agissent les antihistaminiques ?", r: "Ils bloquent les récepteurs à l'histamine et soulagent les symptômes." },
        { q: "Qu'est-ce que la désensibilisation ?", r: "Une exposition très progressive à l'allergène pour habituer le système immunitaire." },
        { q: "Qu'est-ce que le microbiote ?", r: "L'ensemble des micro-organismes qui vivent dans et sur notre corps, surtout dans l'intestin." },
        { q: "Quand se forme le microbiote ?", r: "À la naissance et dans la petite enfance (accouchement, allaitement, environnement)." },
        { q: "Quel rôle joue le microbiote sur l'immunité ?", r: "Il éduque le système immunitaire à tolérer ce qui est sans danger." },
        { q: "Que dit l'hypothèse hygiéniste ?", r: "Trop peu de contact avec les microbes dans l'enfance favoriserait les allergies." },
        { q: "Qu'est-ce qui favorise un microbiote diversifié ?", r: "Une alimentation riche en fibres, le contact avec la nature et les animaux, peu d'antibiotiques." },
      ],
      quiz: [
        { q: "Quelle molécule libèrent les mastocytes lors d'une allergie ?", choix: ["L'insuline","La dopamine","L'histamine","Le cortisol"], bonne: 2, expl: "Médiateur de l'allergie.", niv: 1 },
        { q: "Quels anticorps sont produits lors de la sensibilisation ?", choix: ["Les IgA du lait","Les IgM du fœtus","Les IgE","Les IgD des neurones"], bonne: 2, expl: "Fixés sur les mastocytes.", niv: 1 },
        { q: "Où vit la plus grande partie du microbiote ?", choix: ["Dans le sang","Dans l'intestin","Dans les os","Dans le cerveau"], bonne: 1, expl: "Microbiote intestinal.", niv: 1 },
        { q: "Quel médicament soulage le nez qui coule d'une allergie ?", choix: ["Un antibiotique","Un antirétroviral","Un antihistaminique","Un vaccin"], bonne: 2, expl: "Bloque l'histamine.", niv: 1 },
        { q: "Pourquoi n'y a-t-il pas de symptômes au premier contact ?", choix: ["L'allergène est aussitôt détruit par les globules rouges du sang","C'est la sensibilisation : les IgE se mettent en place","Les mastocytes n'existent pas encore","Le corps ne voit pas l'allergène"], bonne: 1, expl: "Étape silencieuse.", niv: 2 },
        { q: "Quel traitement d'urgence pour un choc anaphylactique ?", choix: ["Une injection d'adrénaline","Un antibiotique en comprimé","Un vaccin contre l'allergène","Une désensibilisation rapide"], bonne: 0, expl: "Urgence vitale.", niv: 2 },
        { q: "Pourquoi l'histamine provoque-t-elle l'asthme ?", choix: ["Elle fait contracter les bronches","Elle bouche le nez avec du mucus sec","Elle détruit les globules rouges","Elle ralentit le cœur"], bonne: 0, expl: "Bronchoconstriction.", niv: 2 },
        { q: "Qu'est-ce que la désensibilisation ?", choix: ["Supprimer les mastocytes du nez par une opération chirurgicale","Éviter l'allergène pendant toute la vie","Habituer progressivement le système immunitaire à l'allergène","Prendre de l'adrénaline chaque jour"], bonne: 2, expl: "Exposition très progressive.", niv: 2 },
        { q: "Selon l'hypothèse hygiéniste, qu'est-ce qui favorise les allergies ?", choix: ["Le contact fréquent avec des animaux de ferme","Une alimentation riche en fibres","Un microbiote très diversifié","Un environnement trop aseptisé dans l'enfance"], bonne: 3, expl: "Système immunitaire mal éduqué.", niv: 2 },
        { q: "Les enfants élevés à la ferme ont moins d'allergies. Quelle explication ?", choix: ["Ils ne rencontrent pas d'allergènes à la ferme","Ils fabriquent plus d'histamine","Ils sont vaccinés contre les pollens et les poils dès leur naissance","Ils ont un microbiote plus diversifié qui éduque leur immunité"], bonne: 3, expl: "Diversité microbienne.", niv: 3 },
        { q: "Pourquoi l'allergie est-elle une réponse inadaptée ?", choix: ["Elle vise une substance sans danger pour l'organisme","Elle détruit un microbe dangereux trop lentement","Elle n'implique pas le système immunitaire","Elle protège contre les virus et les bactéries de l'air"], bonne: 0, expl: "Réaction excessive.", niv: 3 },
        { q: "Pourquoi des antibiotiques répétés dans l'enfance pourraient-ils favoriser les allergies ?", choix: ["Ils contiennent eux-mêmes des allergènes","Ils augmentent le nombre de cellules NK","Ils appauvrissent le microbiote qui éduque l'immunité","Ils bloquent la fabrication de l'histamine par les mastocytes"], bonne: 2, expl: "Moins de diversité.", niv: 3 },
      ],
    },
    {
      chapitre: "bioeco-13",
      fiche: `## Le cycle cellulaire, la réplication et la mitose

Un être humain adulte compte des dizaines de milliers de milliards de cellules, toutes issues d'une seule cellule, la cellule-œuf. Chaque jour, des milliards de cellules se divisent pour assurer la croissance et le renouvellement des tissus (peau, sang, intestin). Chaque division doit transmettre une copie fidèle de l'**ADN**.

### L'ADN et les chromosomes
- L'**ADN** est une double hélice formée de deux brins de **nucléotides**, reliés par des bases **complémentaires** : **A avec T**, **C avec G**.
- Un **gène** est une portion d'ADN qui porte une information (souvent la fabrication d'une protéine).
- Chez l'Homme, l'ADN est réparti en **46 chromosomes** (23 paires) dans le noyau.
- Un chromosome peut avoir **une chromatide** (une molécule d'ADN) ou **deux chromatides** identiques reliées par le **centromère** (après la réplication).

### Le cycle cellulaire
- Il comprend l'**interphase** puis la **mitose** :
  - phase **G1** : croissance de la cellule, chromosomes à une chromatide ;
  - phase **S** : **réplication** de l'ADN, chaque chromosome passe à deux chromatides ; la quantité d'ADN double ;
  - phase **G2** : préparation à la division ;
  - **mitose** (phase M) : séparation des chromatides entre deux cellules filles.
- Sur un graphique de la quantité d'ADN par cellule, on voit un doublement pendant S, puis une division par deux à la fin de la mitose.
- Le cycle est contrôlé par des **points de contrôle** qui vérifient l'ADN avant de continuer.

### La réplication semi-conservative
- Les deux brins de l'ADN se séparent ; chacun sert de **modèle** pour fabriquer un brin complémentaire, grâce à l'**ADN polymérase**.
- Chaque nouvelle molécule contient **un brin ancien** et **un brin nouveau** : la réplication est **semi-conservative**.
- Les deux chromatides d'un chromosome sont donc **identiques**.

### La mitose
- **Prophase** : les chromosomes se condensent (deviennent visibles), l'enveloppe du noyau disparaît.
- **Métaphase** : les chromosomes s'alignent au centre de la cellule (plaque équatoriale).
- **Anaphase** : les chromatides de chaque chromosome se séparent et migrent vers les pôles opposés.
- **Télophase** : deux noyaux se reforment, la cellule se divise en deux.
- Résultat : deux **cellules filles** génétiquement **identiques** à la cellule mère, avec 46 chromosomes à une chromatide.

### Les erreurs de réplication
- La réplication est très fidèle, mais des **erreurs spontanées** se produisent (environ une base fausse pour 100 000, ramenée à une pour un milliard après **réparation**).
- Les **systèmes de réparation** corrigent la plupart des erreurs. Celles qui restent deviennent des **mutations**, transmises aux cellules filles.

### À retenir pour le bac
- ADN, bases complémentaires A-T et C-G, gène, chromosome à une ou deux chromatides.
- Cycle : G1, S (réplication, doublement de l'ADN), G2, mitose.
- Réplication semi-conservative ; mitose en quatre phases ; cellules filles identiques ; erreurs et réparation.`,
      cartes: [
        { q: "Quelles bases de l'ADN sont complémentaires ?", r: "A avec T, et C avec G." },
        { q: "Qu'est-ce qu'un gène ?", r: "Une portion d'ADN qui porte une information, souvent pour fabriquer une protéine." },
        { q: "Combien de chromosomes a une cellule humaine ?", r: "46 chromosomes, soit 23 paires." },
        { q: "Que se passe-t-il pendant la phase S ?", r: "La réplication de l'ADN : chaque chromosome passe à deux chromatides." },
        { q: "Quelles sont les phases du cycle cellulaire ?", r: "G1, S, G2 (interphase) puis la mitose." },
        { q: "Pourquoi la réplication est-elle semi-conservative ?", r: "Chaque nouvelle molécule d'ADN garde un brin ancien et reçoit un brin nouveau." },
        { q: "Quelle enzyme fabrique le nouveau brin d'ADN ?", r: "L'ADN polymérase." },
        { q: "Que relie le centromère ?", r: "Les deux chromatides identiques d'un chromosome." },
        { q: "Que se passe-t-il en métaphase ?", r: "Les chromosomes s'alignent au centre de la cellule." },
        { q: "Que se passe-t-il en anaphase ?", r: "Les chromatides se séparent et migrent vers les pôles opposés." },
        { q: "Quel est le résultat de la mitose ?", r: "Deux cellules filles génétiquement identiques à la cellule mère." },
        { q: "Comment évolue la quantité d'ADN pendant le cycle ?", r: "Elle double pendant la phase S puis est divisée par deux à la fin de la mitose." },
        { q: "Que deviennent les erreurs de réplication non réparées ?", r: "Des mutations, transmises aux cellules filles." },
        { q: "À quoi servent les points de contrôle du cycle ?", r: "À vérifier l'ADN avant de passer à l'étape suivante." },
      ],
      quiz: [
        { q: "Quelle base s'associe avec A dans l'ADN ?", choix: ["C","G","U","T"], bonne: 3, expl: "A-T et C-G.", niv: 1 },
        { q: "Dans quelle phase l'ADN est-il répliqué ?", choix: ["La phase G1","La métaphase","La phase S","La télophase"], bonne: 2, expl: "S comme synthèse.", niv: 1 },
        { q: "Combien de chromosomes ont les cellules filles d'une mitose humaine ?", choix: ["46","48","69","92"], bonne: 0, expl: "Identiques à la mère.", niv: 1 },
        { q: "Combien de chromatides a un chromosome juste après la phase S ?", choix: ["8","3","2","4"], bonne: 2, expl: "Chromatides sœurs.", niv: 1 },
        { q: "Pendant quelle phase les chromosomes s'alignent-ils au centre ?", choix: ["La prophase","L'anaphase","La phase G2 de l'interphase","La métaphase"], bonne: 3, expl: "Plaque équatoriale.", niv: 2 },
        { q: "Qu'est-ce qui se sépare en anaphase ?", choix: ["Les brins complémentaires de chaque ADN","Les chromatides de chaque chromosome","Les paires de chromosomes homologues","Le noyau et la membrane"], bonne: 1, expl: "Vers les pôles opposés.", niv: 2 },
        { q: "Que contient chaque molécule d'ADN après réplication ?", choix: ["Un brin ancien et un brin nouveau","Deux brins anciens","Deux brins nouveaux","Un brin nouveau associé à un brin d'ARN"], bonne: 0, expl: "Semi-conservative.", niv: 2 },
        { q: "Une cellule contient 10 pg d'ADN en G1. Combien en G2 ?", choix: ["5 pg","10 pg","20 pg","15 pg"], bonne: 2, expl: "Doublement en S.", niv: 2 },
        { q: "Pourquoi les cellules filles sont-elles identiques ?", choix: ["Elles reçoivent chacune une chromatide de chaque chromosome","Elles reçoivent chacune la moitié des gènes","Elles fabriquent leur ADN de zéro","Elles échangent leurs chromosomes au hasard pendant l'anaphase"], bonne: 0, expl: "Réplication fidèle.", niv: 2 },
        { q: "Quel brin sert de modèle lors de la réplication ?", choix: ["Un brin d'ARN venu du cytoplasme","Un brin copié sur un autre chromosome","Le brin le plus long des deux","Chacun des deux brins anciens"], bonne: 3, expl: "Complémentarité des bases.", niv: 3 },
        { q: "Pourquoi la réparation de l'ADN est-elle essentielle ?", choix: ["Elle réduit fortement le nombre de mutations transmises","Elle double la quantité d'ADN de la cellule avant la mitose","Elle sépare les chromatides en anaphase","Elle crée de nouveaux gènes utiles"], bonne: 0, expl: "Fidélité de la transmission.", niv: 3 },
        { q: "Que se passe-t-il si un point de contrôle repère un ADN abîmé ?", choix: ["La cellule accélère sa division","La cellule passe directement en anaphase","La cellule bloque son cycle pour réparer ou elle meurt","La cellule double son nombre de chromosomes avant la mitose"], bonne: 2, expl: "Protection contre les mutations.", niv: 3 },
      ],
    },
    {
      chapitre: "bioeco-14",
      fiche: `## Mutations, agents mutagènes et cancérisation

L'ADN peut être modifié : c'est une **mutation**. La plupart sont sans effet ou réparées, mais certaines, quand elles s'accumulent, peuvent rendre une cellule **cancéreuse**. Notre environnement et nos comportements augmentent ou réduisent ce risque.

### Les mutations
- Une **mutation** est une modification de la séquence de l'ADN : **substitution** (une base remplacée par une autre), **délétion** (une base en moins), **insertion** (une base en plus).
- Origines :
  - **spontanées** : erreurs de réplication non réparées ;
  - **provoquées** par des **agents mutagènes**, qui augmentent la fréquence des mutations.
- Conséquences : aucune (mutation **silencieuse**), protéine modifiée, ou protéine non fonctionnelle.

### Les agents mutagènes
- **Physiques** : **rayons UV** du soleil et des cabines de bronzage (cancers de la peau, mélanome), rayons X, radioactivité.
- **Chimiques** : **benzène**, substances de la **fumée de tabac** (goudrons), certains pesticides, l'amiante.
- **Biologiques** : certains **virus** (papillomavirus responsable du cancer du col de l'utérus, virus de l'hépatite B pour le foie).
- L'**alcool** augmente aussi le risque de plusieurs cancers.

### Cellules somatiques et cellules germinales
- Une mutation dans une **cellule somatique** (cellule du corps) est transmise aux cellules filles par mitose, mais **pas à la descendance**. Elle peut être à l'origine d'un cancer.
- Une mutation dans une **cellule germinale** (cellule qui donne les gamètes) peut être **transmise aux enfants** : elle est héréditaire.

### La cancérisation
- Un **cancer** apparaît quand une cellule accumule **plusieurs mutations** touchant les gènes qui contrôlent le cycle cellulaire :
  - des gènes qui **stimulent** la division deviennent trop actifs ;
  - des gènes qui **freinent** la division ou déclenchent la mort des cellules abîmées (les **gènes suppresseurs de tumeur**) ne fonctionnent plus.
- La cellule se divise alors **sans contrôle** et forme une **tumeur**. Une tumeur **maligne** envahit les tissus voisins et peut essaimer à distance : ce sont les **métastases**.
- Il faut souvent des années pour accumuler ces mutations : le risque augmente avec l'**âge** et la durée d'**exposition**.

### Prévenir les cancers
- Réduire l'exposition : ne pas fumer, limiter l'alcool, se protéger du soleil (crème, vêtements, éviter les heures chaudes, pas de cabines UV), protections au travail (benzène, amiante).
- **Vaccination** contre le papillomavirus et l'hépatite B.
- **Dépistage** (mammographie, test du col de l'utérus, test du cancer colorectal) : détecter tôt pour mieux soigner.
- Traitements : chirurgie, **radiothérapie**, **chimiothérapie** (qui bloque les divisions), **immunothérapie**.

### À retenir pour le bac
- Mutations : substitution, délétion, insertion ; spontanées ou provoquées.
- Agents mutagènes : UV, rayons X, benzène, tabac, certains virus.
- Cellule somatique (non héréditaire) ou germinale (héréditaire) ; cancer = accumulation de mutations, division sans contrôle, tumeur, métastases ; prévention et dépistage.`,
      cartes: [
        { q: "Qu'est-ce qu'une mutation ?", r: "Une modification de la séquence de l'ADN." },
        { q: "Quels sont les trois types de mutations ponctuelles ?", r: "La substitution, la délétion et l'insertion d'une base." },
        { q: "Qu'est-ce qu'un agent mutagène ?", r: "Un facteur qui augmente la fréquence des mutations (UV, benzène, tabac, virus)." },
        { q: "Cite un agent mutagène physique.", r: "Les rayons UV, les rayons X ou la radioactivité." },
        { q: "Cite un agent mutagène chimique.", r: "Le benzène ou les goudrons de la fumée de tabac." },
        { q: "Cite un virus qui favorise un cancer.", r: "Le papillomavirus (col de l'utérus) ou le virus de l'hépatite B (foie)." },
        { q: "Une mutation dans une cellule de la peau est-elle héréditaire ?", r: "Non : c'est une cellule somatique, la mutation n'est pas transmise aux enfants." },
        { q: "Quand une mutation est-elle transmise aux enfants ?", r: "Quand elle touche une cellule germinale, à l'origine des gamètes." },
        { q: "Comment apparaît un cancer ?", r: "Par l'accumulation de plusieurs mutations dans les gènes qui contrôlent la division." },
        { q: "Qu'est-ce qu'un gène suppresseur de tumeur ?", r: "Un gène qui freine la division ou fait mourir les cellules abîmées." },
        { q: "Qu'est-ce qu'une métastase ?", r: "Une tumeur secondaire formée par des cellules cancéreuses parties de la tumeur d'origine." },
        { q: "Pourquoi le risque de cancer augmente-t-il avec l'âge ?", r: "Il faut du temps pour accumuler plusieurs mutations." },
        { q: "Comment se protéger des UV ?", r: "Crème solaire, vêtements, éviter le soleil aux heures chaudes, pas de cabine de bronzage." },
        { q: "À quoi sert le dépistage ?", r: "À détecter un cancer tôt pour le soigner plus facilement." },
      ],
      quiz: [
        { q: "Comment appelle-t-on le remplacement d'une base par une autre ?", choix: ["Une délétion","Une insertion","Une substitution","Une réplication"], bonne: 2, expl: "Mutation ponctuelle.", niv: 1 },
        { q: "Quel agent mutagène favorise le mélanome ?", choix: ["Les rayons UV","Le sucre","Les ondes radio","L'eau chlorée"], bonne: 0, expl: "Cancer de la peau.", niv: 1 },
        { q: "Quel virus peut provoquer le cancer du col de l'utérus ?", choix: ["Le virus de la grippe","Le VIH directement","Le papillomavirus","Le virus de la rougeole"], bonne: 2, expl: "Un vaccin existe.", niv: 1 },
        { q: "Qu'est-ce qu'une métastase ?", choix: ["Une tumeur secondaire à distance","Une cellule saine qui se divise","Un vaccin contre le cancer","Une mutation silencieuse"], bonne: 0, expl: "Cellules qui essaiment.", niv: 1 },
        { q: "Une mutation dans une cellule du poumon d'un fumeur sera-t-elle transmise à ses enfants ?", choix: ["Non, c'est une cellule somatique","Oui, à chacun de ses enfants","Oui, à la moitié de ses enfants","Elle passera à ses fils mais pas à ses filles"], bonne: 0, expl: "Pas de cellule germinale.", niv: 2 },
        { q: "Pourquoi le tabac augmente-t-il le risque de cancer ?", choix: ["Il bloque la réplication de l'ADN des cellules du poumon","Il apporte des substances mutagènes dans sa fumée","Il détruit les globules rouges","Il diminue la fréquence cardiaque"], bonne: 1, expl: "Goudrons, benzène.", niv: 2 },
        { q: "Que se passe-t-il quand un gène suppresseur de tumeur est muté ?", choix: ["La cellule meurt tout de suite","La cellule cesse de se diviser","La cellule devient un neurone","La division cellulaire n'est plus freinée"], bonne: 3, expl: "Frein perdu.", niv: 2 },
        { q: "Pourquoi un cancer met-il souvent des années à apparaître ?", choix: ["Le virus reste endormi dans le sang","La tumeur grossit d'un millimètre par an","Il faut accumuler plusieurs mutations","Le corps cache les cellules malades"], bonne: 2, expl: "Processus en plusieurs étapes.", niv: 2 },
        { q: "Quelle mesure est une prévention par la vaccination ?", choix: ["La mammographie après 50 ans","La chimiothérapie","Le port de la crème solaire en été","Le vaccin contre l'hépatite B"], bonne: 3, expl: "Virus cancérigène.", niv: 2 },
        { q: "Une même exposition aux UV ne donne pas de cancer à tout le monde. Pourquoi ?", choix: ["Les UV n'agissent que sur les cheveux de certains","Certaines personnes n'ont pas d'ADN dans la peau","Le cancer de la peau est une maladie héréditaire transmise par les parents","Les mutations arrivent au hasard et la réparation varie selon les gens"], bonne: 3, expl: "Probabilité, pas certitude.", niv: 3 },
        { q: "Pourquoi la chimiothérapie a-t-elle des effets sur les cheveux ?", choix: ["Elle détruit les cellules mortes de la peau","Elle provoque des mutations dans les cheveux, qui tombent alors un à un","Elle bloque les divisions, même celles des cellules saines rapides","Elle remplace les cellules du cuir chevelu"], bonne: 2, expl: "Cible les divisions rapides.", niv: 3 },
        { q: "Pourquoi le dépistage améliore-t-il les chances de guérison ?", choix: ["Il empêche les mutations de se produire","Le dépistage remplace le traitement de la maladie","Il rend les cellules cancéreuses inoffensives pour l'organisme","Une tumeur détectée tôt n'a pas encore formé de métastases"], bonne: 3, expl: "Détection précoce.", niv: 3 },
      ],
    },
    {
      chapitre: "bioeco-15",
      fiche: `## Génome bactérien et antibiorésistance

Les **antibiotiques** ont sauvé des millions de vies depuis la pénicilline (Fleming, 1928). Mais de plus en plus de bactéries leur résistent : l'**antibiorésistance** est un enjeu majeur de santé publique, en médecine humaine comme en élevage (approche « **Une seule santé** »).

### Le génome bactérien
- Une bactérie est une cellule **sans noyau** (procaryote). Son génome comprend :
  - un **chromosome circulaire** unique ;
  - souvent de petites molécules d'ADN circulaires supplémentaires, les **plasmides**, qui portent fréquemment des gènes de résistance.
- Les bactéries se multiplient très vite par **division** (parfois toutes les 20 minutes) : une seule bactérie peut donner des milliards de descendantes en une journée.

### Les antibiotiques
- Un **antibiotique** est une molécule qui tue les bactéries (bactéricide) ou bloque leur multiplication (bactériostatique), en ciblant des structures absentes de nos cellules (paroi, ribosomes bactériens).
- Les antibiotiques sont **sans effet sur les virus** (grippe, rhume, covid).

### L'apparition des résistances
- **Mutations** : par hasard, une bactérie peut acquérir un allèle qui la rend résistante (paroi modifiée, enzyme qui détruit l'antibiotique, pompe qui le rejette).
- **Transferts horizontaux** : une bactérie peut recevoir un gène de résistance d'une autre bactérie, même d'une autre espèce :
  - par **conjugaison** (échange de plasmide par contact) ;
  - par **transformation** (absorption d'ADN libre dans le milieu) ;
  - par l'intermédiaire de virus de bactéries.
- **Sélection** : en présence d'antibiotique, les bactéries sensibles meurent, les résistantes survivent et se multiplient. La population devient résistante. Les antibiotiques ne créent pas la résistance : ils la **sélectionnent**.
- Les bactéries **multirésistantes** (BMR) résistent à plusieurs antibiotiques ; certaines causent des **infections nosocomiales** (contractées à l'hôpital).

### L'antibiogramme
- On étale les bactéries d'un malade sur une boîte de culture, avec des pastilles imbibées de différents antibiotiques.
- Autour d'une pastille efficace, une **zone d'inhibition** (sans bactéries) apparaît : plus elle est grande, plus la bactérie est **sensible**. Pas de zone : bactérie **résistante**.
- Le médecin choisit ainsi l'antibiotique adapté.

### Limiter l'antibiorésistance
- « Les antibiotiques, c'est pas automatique » : les prendre seulement sur prescription, pour une infection bactérienne, à la bonne dose et pendant la durée prescrite.
- Hygiène à l'hôpital (lavage des mains, isolement des patients porteurs de BMR).
- En élevage : interdiction des antibiotiques comme activateurs de croissance (Union européenne, 2006), plans **Écoantibio**, vaccination et bien-être des animaux.

### À retenir pour le bac
- Chromosome circulaire et plasmides ; multiplication rapide.
- Résistance par mutation ou transfert horizontal (conjugaison, transformation), puis sélection par l'antibiotique.
- Antibiogramme et zone d'inhibition ; bactéries multirésistantes, infections nosocomiales ; bon usage en médecine et en élevage.`,
      cartes: [
        { q: "Comment est organisé le génome d'une bactérie ?", r: "Un chromosome circulaire unique, souvent accompagné de plasmides." },
        { q: "Qu'est-ce qu'un plasmide ?", r: "Une petite molécule d'ADN circulaire, qui porte souvent des gènes de résistance." },
        { q: "Qu'est-ce qu'un antibiotique ?", r: "Une molécule qui tue les bactéries ou bloque leur multiplication." },
        { q: "Les antibiotiques agissent-ils sur les virus ?", r: "Non : ils sont sans effet sur la grippe, le rhume ou le covid." },
        { q: "Comment une bactérie devient-elle résistante par mutation ?", r: "Par hasard, une modification de son ADN lui donne un allèle de résistance." },
        { q: "Qu'est-ce que la conjugaison bactérienne ?", r: "L'échange d'un plasmide d'une bactérie à une autre par contact." },
        { q: "Qu'est-ce que la transformation bactérienne ?", r: "L'absorption par une bactérie d'ADN libre présent dans le milieu." },
        { q: "Quel est le rôle de l'antibiotique dans la résistance ?", r: "Il sélectionne les bactéries résistantes en tuant les sensibles ; il ne crée pas la résistance." },
        { q: "Qu'est-ce qu'une bactérie multirésistante ?", r: "Une bactérie qui résiste à plusieurs antibiotiques." },
        { q: "Qu'est-ce qu'une infection nosocomiale ?", r: "Une infection contractée à l'hôpital." },
        { q: "À quoi sert un antibiogramme ?", r: "À tester l'efficacité de plusieurs antibiotiques sur la bactérie d'un malade." },
        { q: "Que signifie une grande zone d'inhibition ?", r: "La bactérie est sensible à cet antibiotique." },
        { q: "Pourquoi faut-il suivre toute la durée du traitement ?", r: "Pour éliminer toutes les bactéries et ne pas laisser survivre les plus résistantes." },
        { q: "Qu'est-ce que l'approche « Une seule santé » ?", r: "La santé humaine, animale et environnementale sont liées et doivent être gérées ensemble." },
      ],
      quiz: [
        { q: "Contre quels microbes les antibiotiques agissent-ils ?", choix: ["Les virus","Les champignons du pied","Les parasites comme les poux","Les bactéries"], bonne: 3, expl: "Pas contre les virus.", niv: 1 },
        { q: "Comment appelle-t-on une petite molécule d'ADN circulaire bactérienne ?", choix: ["Un plasmide","Un chromosome","Un ribosome","Un noyau"], bonne: 0, expl: "Gènes de résistance.", niv: 1 },
        { q: "Qu'est-ce qu'une infection nosocomiale ?", choix: ["Une infection du nez","Une infection transmise par un animal","Une infection due à un vaccin","Une infection contractée à l'hôpital"], bonne: 3, expl: "Souvent par des BMR.", niv: 1 },
        { q: "Qui a découvert la pénicilline ?", choix: ["Louis Pasteur","Alexander Fleming","Charles Darwin","Gregor Mendel"], bonne: 1, expl: "En 1928.", niv: 1 },
        { q: "Que montre l'absence de zone d'inhibition autour d'une pastille ?", choix: ["La bactérie résiste à cet antibiotique","La bactérie est très sensible","L'antibiotique a tué l'ensemble des bactéries","La boîte n'a pas été ensemencée"], bonne: 0, expl: "Antibiogramme.", niv: 2 },
        { q: "Comment un gène de résistance passe-t-il d'une espèce à une autre ?", choix: ["Par un transfert horizontal, comme la conjugaison","Par la reproduction sexuée entre bactéries d'espèces voisines","Par la division d'une bactérie en deux","Par la digestion de l'antibiotique"], bonne: 0, expl: "Plasmide échangé.", niv: 2 },
        { q: "Pourquoi l'usage massif d'antibiotiques favorise-t-il les résistances ?", choix: ["Il provoque des mutations de résistance volontaires","Il renforce les virus présents dans le corps","Il élimine les sensibles et laisse se multiplier les résistantes","Il détruit les plasmides des bactéries sensibles comme des résistantes"], bonne: 2, expl: "Pression de sélection.", niv: 2 },
        { q: "Pourquoi prendre un antibiotique contre la grippe est-il inutile ?", choix: ["La grippe est due à un virus","La grippe guérit plus vite avec deux antibiotiques","Le virus de la grippe est une bactérie","Les antibiotiques renforcent les vaccins"], bonne: 0, expl: "Usage inutile et risqué.", niv: 2 },
        { q: "Quelle mesure limite l'antibiorésistance en élevage ?", choix: ["Donner des antibiotiques aux animaux chaque jour en prévention","Augmenter le nombre d'animaux par bâtiment","Remplacer les vaccins par des antibiotiques","Interdire les antibiotiques comme activateurs de croissance"], bonne: 3, expl: "Union européenne, 2006.", niv: 2 },
        { q: "Une bactérie se divise toutes les 20 minutes. Combien de bactéries après 2 heures, à partir d'une seule ?", choix: ["6","12","32","64"], bonne: 3, expl: "6 divisions : 2⁶ = 64.", niv: 3 },
        { q: "Pourquoi l'arrêt trop tôt d'un traitement favorise-t-il les résistances ?", choix: ["L'antibiotique devient toxique s'il est arrêté","Les bactéries les moins sensibles survivent et se multiplient","Les virus prennent la place des bactéries","Le corps fabrique des anticorps contre l'antibiotique"], bonne: 1, expl: "Sélection des moins sensibles.", niv: 3 },
        { q: "Pourquoi parle-t-on de « Une seule santé » pour l'antibiorésistance ?", choix: ["Les résistances circulent entre animaux, humains et environnement","Seuls les humains sont concernés par les résistances","Les animaux ne peuvent pas porter de bactéries résistantes","Les antibiotiques vétérinaires sont sans lien avec la santé de l'Homme"], bonne: 0, expl: "Santé humaine, animale, environnement.", niv: 3 },
      ],
    },
  ],
  methode: [
    {
      "id": "bioeco-m1",
      "mat": "bioeco",
      "titre": "Répondre à une question scientifique (exposé de connaissances)",
      "formules": [
        "Expliquer comment…",
        "Montrer que…",
        "Votre réponse sera structurée et illustrée par un schéma.",
        "Exposez vos connaissances sur…"
      ],
      "vu": [
        "Bac 2025 métropole, juin (25-BIOECOME1) : exercice 1, dérive génétique chez la drosophile (6 points)",
        "Bac 2025, septembre (25-BIOECOME3) : exercice 1, de la stimulation du neurone moteur à la contraction du muscle (7 points)"
      ],
      "pts": "6 à 7 points sur 15",
      "attendu": "Un texte structuré (introduction, développement en parties, conclusion) qui répond exactement à la question posée avec les notions du programme. Le correcteur attend du vocabulaire précis, un enchaînement logique des étapes (cause puis conséquence), au moins un schéma légendé et titré, et une conclusion qui reprend la réponse en une ou deux phrases. Les documents éventuels servent d'appui : il faut les citer, pas les paraphraser.",
      "etapes": [
        "Souligner le verbe de la consigne (expliquer, montrer) et les mots-clés.",
        "Lister au brouillon les notions du cours liées à la question.",
        "Les ranger dans l'ordre logique (du stimulus à la réponse, de la cause à l'effet).",
        "Rédiger une introduction qui définit les termes et pose la question.",
        "Écrire une partie par étape, avec des connecteurs (d'abord, ensuite, ainsi, donc).",
        "Faire un schéma bilan titré, légendé, avec des flèches qui ont un sens.",
        "Conclure en répondant à la question en une ou deux phrases."
      ],
      "mots": [
        "potentiel d'action",
        "motoneurone",
        "synapse neuromusculaire",
        "acétylcholine",
        "dérive génétique",
        "effet fondateur",
        "fréquence allélique",
        "donc",
        "ce qui provoque"
      ],
      "pieges": [
        "Réciter tout le chapitre au lieu de répondre à la question.",
        "Oublier le schéma ou le faire sans titre ni légende.",
        "Confondre sélection naturelle et dérive génétique.",
        "Sauter une étape du mécanisme (par exemple la libération du neurotransmetteur)."
      ],
      "cas": "Question posée : « Expliquer comment la stimulation d'un neurone moteur déclenche la contraction d'un muscle. »",
      "question": "Rédige l'introduction et le plan détaillé de ta réponse.",
      "modele": "Un muscle squelettique se contracte sur ordre du système nerveux. Le message nerveux est porté par un neurone moteur (motoneurone) dont le corps cellulaire est dans la moelle épinière et dont l'axone se termine sur les fibres musculaires. On cherche à expliquer comment ce message électrique devient une contraction. Plan : 1) la naissance et la propagation du potentiel d'action le long de l'axone (seuil, tout ou rien, codage en fréquence) ; 2) la transmission à la synapse neuromusculaire (libération d'acétylcholine, fixation sur les récepteurs de la fibre musculaire) ; 3) la naissance d'un potentiel d'action musculaire qui déclenche la contraction. Schéma bilan : motoneurone, synapse, fibre musculaire, avec le trajet du message.",
      "grille": [
        "Introduction qui définit et pose la question",
        "Potentiel d'action : seuil, propagation, fréquence",
        "Synapse : acétylcholine et récepteurs",
        "Contraction déclenchée par le PA musculaire",
        "Schéma titré et légendé"
      ]
    },
    {
      "id": "bioeco-m2",
      "mat": "bioeco",
      "titre": "Pratiquer une démarche scientifique à partir de documents",
      "formules": [
        "À partir de l'exploitation des documents et de vos connaissances, montrer que…",
        "Proposer une explication à…",
        "Discuter l'intérêt de…"
      ],
      "vu": [
        "Bac 2025 métropole, juin (25-BIOECOME1) : exercice 2, stress chronique, hippocampe, benzodiazépines et méditation (9 points)",
        "Bac 2025, septembre (25-BIOECOME3) : exercice 2, loutre de mer et herbiers de zostères (8 points)"
      ],
      "pts": "8 à 9 points sur 15",
      "attendu": "Une réponse argumentée qui exploite chaque document : ce que je vois (données chiffrées précises, comparaison avec le témoin), ce que j'en déduis, puis le lien avec les connaissances. Le correcteur valorise une introduction qui pose le problème, une exploitation document par document ou par idée, une synthèse qui relie les déductions pour répondre au problème, et le regard critique (limites d'une expérience, taille de l'échantillon).",
      "etapes": [
        "Lire la question et reformuler le problème à résoudre.",
        "Pour chaque document, noter : je vois (chiffres, comparaison au témoin), j'en déduis.",
        "Ajouter les connaissances utiles à chaque déduction.",
        "Relier les déductions entre elles (les documents se complètent).",
        "Rédiger une synthèse qui répond au problème posé.",
        "Signaler une limite si elle existe (une seule étude, peu d'individus)."
      ],
      "mots": [
        "on observe que",
        "par rapport au témoin",
        "on en déduit que",
        "le document 2 confirme",
        "hippocampe",
        "récepteurs au cortisol",
        "rétroaction négative",
        "GABA",
        "canaux à chlorure"
      ],
      "pieges": [
        "Décrire les documents sans rien en déduire.",
        "Oublier les valeurs chiffrées et les unités.",
        "Ne pas comparer au témoin.",
        "Réciter le cours sans utiliser les documents."
      ],
      "cas": "Document : chez des rats soumis à un stress répété pendant 21 jours, le nombre de récepteurs au cortisol dans l'hippocampe baisse de 40 % et la concentration de cortisol dans le sang reste deux fois plus élevée que chez les rats témoins une heure après un stress.",
      "question": "Exploite ce document pour expliquer pourquoi le stress chronique entretient un taux élevé de cortisol.",
      "modele": "On observe que les rats stressés pendant 21 jours ont 40 % de récepteurs au cortisol en moins dans l'hippocampe et que leur cortisol reste deux fois plus élevé que celui des témoins une heure après un stress. Or l'hippocampe participe à la rétroaction négative : quand il détecte le cortisol, il freine la production de CRH par l'hypothalamus, donc d'ACTH et de cortisol. On en déduit qu'avec moins de récepteurs, l'hippocampe détecte moins bien le cortisol, le frein fonctionne mal et le cortisol reste élevé. Le stress chronique crée donc un cercle vicieux. Limite : l'étude porte sur des rats, il faudrait la confirmer chez l'être humain.",
      "grille": [
        "Données chiffrées citées",
        "Comparaison avec les témoins",
        "Rôle de l'hippocampe dans la rétroaction",
        "Déduction : frein moins efficace",
        "Conclusion et limite"
      ]
    },
    {
      "id": "bioeco-m3",
      "mat": "bioeco",
      "titre": "Construire un argumentaire pour des décideurs",
      "formules": [
        "Rédiger un argumentaire destiné aux élus…",
        "Convaincre les décideurs de l'intérêt de protéger…",
        "Proposer des mesures de gestion en les justifiant."
      ],
      "vu": [
        "Bac 2025, septembre (25-BIOECOME3) : exercice 2, protéger à la fois la loutre de mer et les herbiers de zostères (8 points)"
      ],
      "pts": "8 points sur 15",
      "attendu": "Un texte adressé à des non-spécialistes (élus, gestionnaires), clair et convaincant, qui s'appuie sur des preuves scientifiques tirées des documents. Le correcteur attend la présentation de l'enjeu, des arguments écologiques (rôle de l'espèce, réseau trophique, espèce clé de voûte), des arguments liés aux services rendus (pêche, protection du littoral, stockage du carbone), des réponses aux objections éventuelles, et des mesures concrètes.",
      "etapes": [
        "Identifier le destinataire et ce qu'il doit décider.",
        "Relever dans les documents les relations entre espèces (qui mange qui).",
        "Construire la chaîne de conséquences (loutre, oursins ou crabes, herbiers).",
        "Ajouter les services écosystémiques rendus par le milieu.",
        "Répondre à l'objection principale (la loutre mange des espèces pêchées).",
        "Proposer deux ou trois mesures concrètes et conclure."
      ],
      "mots": [
        "espèce clé de voûte",
        "effet en cascade",
        "réseau trophique",
        "service de régulation",
        "nurserie",
        "stockage du carbone",
        "résilience",
        "nous recommandons"
      ],
      "pieges": [
        "Écrire pour un professeur et non pour un élu.",
        "Donner un avis sans preuve tirée des documents.",
        "Oublier l'objection des pêcheurs.",
        "Ne proposer aucune mesure concrète."
      ],
      "cas": "Documents : là où les loutres de mer sont revenues, les crabes qui broutent les petits escargots des herbiers diminuent ; les escargots nettoient les zostères des algues qui les étouffent ; les herbiers ont doublé de surface en 20 ans. Les pêcheurs de crabes s'inquiètent.",
      "question": "Rédige le paragraphe d'arguments écologiques de l'argumentaire.",
      "modele": "Mesdames et messieurs les élus, la loutre de mer est une espèce clé de voûte : son effet sur le milieu est bien plus grand que son nombre. Les documents montrent qu'en mangeant les crabes, elle protège les petits escargots qui nettoient les zostères des algues qui les étouffent. Là où elle est revenue, les herbiers ont doublé de surface en vingt ans. Or ces herbiers servent de nurserie aux poissons, protègent la côte de l'érosion et stockent du carbone. Protéger la loutre, c'est donc protéger tout l'écosystème et les services qu'il nous rend.",
      "grille": [
        "Adresse aux décideurs",
        "Notion d'espèce clé de voûte",
        "Chaîne de conséquences tirée des documents",
        "Services rendus par les herbiers",
        "Phrase de conclusion convaincante"
      ]
    },
    {
      "id": "bioeco-m4",
      "mat": "bioeco",
      "titre": "Exploiter un graphique ou un enregistrement",
      "formules": [
        "Décrire l'évolution de…",
        "Comparer les résultats obtenus…",
        "Interpréter l'enregistrement…"
      ],
      "vu": [
        "Bac 2025 métropole, juin (25-BIOECOME1) : graphiques et tableaux à exploiter dans les deux exercices",
        "Bac 2025, septembre (25-BIOECOME3) : graphiques et tableaux à exploiter dans les deux exercices"
      ],
      "pts": "Inclus dans les exercices 1 et 2",
      "attendu": "Une lecture précise du graphique : titre, axes et unités, valeurs repères (début, maximum, fin), évolution en plusieurs phases, comparaison entre courbes. Puis une interprétation qui explique ces variations avec le cours. Sur un enregistrement de neurone, il faut parler d'amplitude, de seuil et de fréquence des potentiels d'action.",
      "etapes": [
        "Lire le titre, les axes, les unités et la légende.",
        "Découper la courbe en phases (augmentation, plateau, baisse).",
        "Citer des valeurs avec leur unité pour chaque phase.",
        "Comparer les courbes entre elles ou au témoin.",
        "Interpréter chaque phase avec une notion du cours."
      ],
      "mots": [
        "augmente de … à …",
        "atteint un maximum de",
        "reste stable",
        "par rapport au témoin",
        "amplitude",
        "fréquence des potentiels d'action",
        "seuil"
      ],
      "pieges": [
        "Donner une valeur sans unité.",
        "Interpréter sans avoir décrit.",
        "Confondre amplitude et fréquence des potentiels d'action.",
        "Parler de « la courbe monte » sans chiffres."
      ],
      "cas": "Enregistrement : pour un étirement faible du muscle, le neurone sensitif émet 5 potentiels d'action par seconde ; pour un étirement fort, 40 par seconde. Tous les potentiels d'action mesurent 100 mV.",
      "question": "Interprète cet enregistrement.",
      "modele": "On observe que l'amplitude des potentiels d'action est identique (100 mV) quel que soit l'étirement, alors que leur fréquence passe de 5 à 40 par seconde quand l'étirement augmente. On en déduit que le potentiel d'action obéit à la loi du tout ou rien et que l'intensité du stimulus est codée par la fréquence des potentiels d'action : plus l'étirement est fort, plus les potentiels d'action sont rapprochés.",
      "grille": [
        "Amplitude constante citée avec l'unité",
        "Fréquences comparées avec les valeurs",
        "Loi du tout ou rien",
        "Codage en fréquence",
        "Phrase de conclusion"
      ]
    },
    {
      "id": "bioeco-m5",
      "mat": "bioeco",
      "titre": "Calculer une connectance et réaliser un schéma de régulation",
      "formules": [
        "Calculer la connectance du réseau…",
        "Comparer la stabilité des deux réseaux.",
        "Réaliser un schéma fonctionnel de la régulation…"
      ],
      "vu": [
        "Capacités du programme de terminale (connectance, schémas fonctionnels), utiles dans les deux exercices des sujets 2025"
      ],
      "pts": "1 à 3 points dans un exercice",
      "attendu": "Un calcul posé avec la formule, les valeurs remplacées et le résultat, puis une phrase qui l'interprète (un réseau plus connecté est plus stable). Pour un schéma de régulation : des organes dans des cadres, des hormones sur des flèches, un signe plus ou moins, et la boucle de rétroaction bien visible.",
      "etapes": [
        "Compter les espèces (S) et les liens (L), une interaction directe valant 2 liens.",
        "Écrire la formule CT = L / S(S – 1).",
        "Remplacer les valeurs et calculer.",
        "Comparer les deux réseaux et conclure sur leur stabilité.",
        "Pour un schéma : organes en cadres, hormones sur les flèches, rétroaction en pointillés avec un signe moins."
      ],
      "mots": [
        "connectance",
        "L / S(S – 1)",
        "plus le réseau est connecté",
        "stabilité",
        "rétroaction négative",
        "hypothalamus",
        "hypophyse",
        "corticosurrénale"
      ],
      "pieges": [
        "Compter une interaction pour un seul lien.",
        "Oublier le « – 1 » de la formule.",
        "Donner un chiffre sans l'interpréter.",
        "Dessiner un schéma sans le signe de la rétroaction."
      ],
      "cas": "Une haie compte 5 espèces liées par 10 interactions directes ; une bande enherbée compte 5 espèces liées par 4 interactions directes.",
      "question": "Calcule la connectance des deux milieux et conclus.",
      "modele": "Haie : S = 5 et L = 10 × 2 = 20 liens, donc CT = 20 / (5 × 4) = 1. Bande enherbée : L = 4 × 2 = 8 liens, donc CT = 8 / 20 = 0,4. La connectance de la haie est plus forte : son réseau est plus dense, donc plus robuste. La disparition d'une espèce y aurait moins d'effets en cascade : la haie est plus stable.",
      "grille": [
        "Liens comptés deux fois",
        "Formule écrite",
        "Deux calculs justes",
        "Comparaison",
        "Conclusion sur la stabilité"
      ]
    }
  ],
  sujets: [
    {
      id: "bioeco-s1", matiere: 'bioeco', titre: "Sujet d'entraînement 1 : stress aigu et haies du bocage", duree: 210,
      enonce: `## Sujet d'entraînement 1 (inventé, au format de l'écrit)

Ce sujet est inventé pour s'entraîner : les documents et les chiffres ont été écrits pour cet exercice. Durée : 3 h 30. Calculatrice non autorisée. Au vrai bac, la partie écrite est notée sur 15 points ; ici, elle est ramenée sur 20 (exercice 1 sur 8 points, exercice 2 sur 12 points).

### Exercice 1 : répondre à une question scientifique (8 points)

Thème : **des enjeux de santé contemporains**.

Une lycéenne doit passer un oral important. Juste avant d'entrer dans la salle, son cœur bat très vite, ses mains sont froides et elle a « l'estomac noué ». Une heure après l'oral, tout est revenu à la normale.

**Question** : expliquer comment l'organisme réagit à un stress aigu, puis comment cette réaction s'arrête.

Votre réponse sera structurée, avec une introduction et une conclusion, et illustrée par un schéma bilan.

Document d'appui : mesures chez la lycéenne.

| Moment | Fréquence cardiaque (battements/min) | Volume d'éjection systolique (mL) | Cortisol sanguin (unités arbitraires) |
|---|---|---|---|
| Au calme, la veille | 70 | 70 | 10 |
| Juste avant l'oral | 120 | 90 | 25 |
| Une heure après | 72 | 70 | 12 |

### Exercice 2 : pratiquer une démarche scientifique (12 points)

Thème : **des enjeux environnementaux contemporains**.

Une commune rurale veut arracher 3 km de haies pour agrandir les parcelles d'une exploitation céréalière. Un groupe d'agriculteurs propose au contraire de les garder et d'en replanter. Le maire vous demande votre avis.

**Question** : à partir de l'exploitation des documents et de vos connaissances, montrer que les haies rendent des services utiles à l'exploitation agricole et proposer une décision argumentée au maire.

**Document 1 : pucerons et auxiliaires dans un champ de blé**

Comptages réalisés en mai, à différentes distances d'une haie.

| Distance à la haie | 10 m | 50 m | 150 m |
|---|---|---|---|
| Coccinelles et syrphes (pour 100 épis) | 30 | 15 | 4 |
| Pucerons (pour 100 épis) | 200 | 450 | 1 200 |

**Document 2 : réseau d'interactions**

Dans la haie : 6 espèces (aubépine, prunellier, coccinelle, syrphe, mésange, puceron) et 9 interactions directes entre elles. Dans un champ sans haie : 6 espèces et 3 interactions directes.

Rappel : connectance CT = L / S(S – 1), où une interaction directe compte 2 liens.

**Document 3 : érosion et eau**

Lors d'un orage de 40 mm, une parcelle en pente sans haie perd 8 tonnes de terre par hectare ; une parcelle voisine bordée d'une haie perpendiculaire à la pente en perd 2. La concentration en nitrates du ruisseau en aval est de 45 mg/L sans haie et de 25 mg/L avec haie.

**Document 4 : rendement du blé**

À 150 m de la haie, le rendement est de 75 quintaux par hectare ; à moins de 10 m, il est de 68 quintaux (ombre et concurrence des racines). Sur l'ensemble de la parcelle bordée d'une haie, le rendement moyen est de 76 quintaux contre 72 sans haie, grâce à moins de pucerons et à un sol mieux protégé.`,
      corrige: `## Corrigé

### Exercice 1

**Introduction.** Un agent stresseur (ici l'oral) déclenche une réponse rapide de l'organisme, le stress aigu. Elle est adaptative : elle prépare à l'effort puis s'arrête. On montre comment elle se met en place, puis comment elle prend fin.

**1. Une réponse nerveuse rapide.**
- Le cerveau perçoit la situation comme un danger et active le système nerveux autonome **sympathique**, dont les neurones libèrent de la **noradrénaline** sur le cœur et les vaisseaux.
- Il stimule la **médullosurrénale**, qui libère de l'**adrénaline** dans le sang en quelques secondes.
- Effets lus dans le tableau : la fréquence cardiaque passe de 70 à 120 battements par minute, le VES de 70 à 90 mL. Le **débit cardiaque** (FC × VES) passe d'environ 4,9 L/min à 10,8 L/min : il double.
- Le débit est **redistribué** : vasodilatation vers les muscles, le cœur et le cerveau ; vasoconstriction vers la peau (mains froides) et le tube digestif (« estomac noué »). Les organes étant irrigués en parallèle, ce changement de répartition est possible.

**2. Une réponse hormonale plus lente.**
- L'**hypothalamus** libère la **CRH**, qui stimule l'**hypophyse** ; elle libère l'**ACTH**, qui stimule la **corticosurrénale** ; celle-ci libère le **cortisol**.
- Dans le tableau, le cortisol passe de 10 à 25 unités : il augmente la glycémie et fournit de l'énergie aux muscles.

**3. L'arrêt de la réponse.**
- Le cortisol agit en retour sur l'**hippocampe**, l'hypothalamus et l'hypophyse : la production de CRH et d'ACTH diminue. C'est une **rétroaction négative**.
- Le système sympathique cesse d'être activé quand le danger est passé.
- Une heure après, la fréquence cardiaque (72) et le cortisol (12) sont presque revenus aux valeurs de repos : la lycéenne montre une bonne résilience.

**Schéma bilan attendu** : agent stresseur, cerveau ; voie rapide (système sympathique, médullosurrénale, adrénaline, cœur et vaisseaux) ; voie lente (hypothalamus, CRH, hypophyse, ACTH, corticosurrénale, cortisol) ; flèche de rétroaction négative du cortisol vers l'hippocampe et l'hypothalamus, avec un signe moins.

**Conclusion.** Le stress aigu repose sur une réponse nerveuse rapide et une réponse hormonale plus lente, qui augmentent le débit cardiaque et l'énergie disponible ; il s'arrête grâce à la rétroaction négative du cortisol.

### Exercice 2

**Introduction.** Les haies sont des corridors et des écotones du bocage. On cherche à savoir si leurs services compensent la surface qu'elles occupent, pour conseiller le maire.

**Document 1.** Près de la haie, il y a 30 auxiliaires et 200 pucerons pour 100 épis ; à 150 m, 4 auxiliaires et 1 200 pucerons. Plus on s'éloigne, moins il y a d'auxiliaires et plus il y a de pucerons. On en déduit que la haie abrite les auxiliaires (coccinelles et syrphes, prédateurs des pucerons) : c'est un service de **régulation** par **biocontrôle**, qui permet de limiter les insecticides.

**Document 2.** Haie : L = 9 × 2 = 18 liens, CT = 18 / (6 × 5) = 18 / 30 = 0,6. Champ sans haie : L = 6 liens, CT = 6 / 30 = 0,2. La connectance de la haie est trois fois plus forte : son réseau est plus dense et plus stable ; la perte d'une espèce y aurait moins d'effets en cascade. La haie augmente la stabilité de l'agroécosystème.

**Document 3.** La haie divise par 4 la perte de terre (2 t/ha contre 8) et fait baisser les nitrates du ruisseau de 45 à 25 mg/L. Elle freine le ruissellement, retient le sol et filtre l'eau : services de régulation (érosion, qualité de l'eau), utiles à l'agriculteur (sol fertile conservé) et à la commune (eau potable).

**Document 4.** Près de la haie, le rendement baisse un peu (68 q/ha contre 75), à cause de l'ombre et de la concurrence. Mais à l'échelle de la parcelle, le rendement moyen est meilleur avec haie (76 contre 72 q/ha). L'inconvénient local est donc compensé.

**Synthèse et décision.** Les haies rendent plusieurs services : régulation des ravageurs par les auxiliaires, stabilité du réseau d'interactions, protection du sol et de l'eau, et même un rendement moyen meilleur. Elles s'inscrivent dans une démarche d'**agro-écologie**. On conseille au maire de **conserver** les haies, d'en **replanter** perpendiculairement à la pente et de les relier entre elles (trame verte), en aidant l'exploitation par des aides à la plantation ou à l'entretien. Limite : les données portent sur une seule parcelle et une seule année ; il faudrait les confirmer sur plusieurs années.`,
      grille: [{"c":"Exercice 1 : introduction et structure (parties, conclusion)","pts":1},{"c":"Exercice 1 : voie rapide (sympathique, noradrénaline, adrénaline) et effets sur le débit cardiaque, avec les valeurs du tableau","pts":2},{"c":"Exercice 1 : redistribution du débit (vasodilatation, vasoconstriction) reliée aux symptômes","pts":1},{"c":"Exercice 1 : voie lente (CRH, ACTH, cortisol) et arrêt par rétroaction négative","pts":2},{"c":"Exercice 1 : schéma bilan titré, légendé, avec la rétroaction","pts":2},{"c":"Exercice 2 : document 1 exploité (valeurs, auxiliaires, biocontrôle)","pts":2},{"c":"Exercice 2 : document 2, deux connectances justes (0,6 et 0,2) et interprétation sur la stabilité","pts":3},{"c":"Exercice 2 : document 3 exploité (érosion, nitrates, services de régulation)","pts":2},{"c":"Exercice 2 : document 4 exploité, inconvénient local et bilan à l'échelle de la parcelle","pts":2},{"c":"Exercice 2 : synthèse, décision argumentée pour le maire et limite de l'étude","pts":3}],
    },
  ],
};
