// Cinéma-audiovisuel (enseignement de spécialité) — terminale, voie générale. Sources : voir matiere.sources.
// Programme : programme de terminale de la spécialité (BO spécial n° 8 du 25 juillet 2019), cinq questionnements :
// réceptions et publics, transferts et circulations culturels, un cinéaste au travail, périodes et courants, art et industrie.
// Programme limitatif pour l'année 2026-2027 (BOENJS n° 4 du 22 janvier 2026) : Entr'acte et Paris qui dort de René Clair
// (œuvre renouvelée), La Féline de Jacques Tourneur et Irma Vep d'Olivier Assayas (épisodes 1 à 3), ces deux dernières
// inscrites pour les sessions 2026 et 2027.
// Épreuve : note de service consolidée de mai 2024 (écrit de 3 h 30 sur 10 points + oral de 30 minutes sur 10 points).
// Chapitres : un chapitre d'outils d'analyse, les cinq questionnements dans l'ordre du programme, les trois œuvres,
// puis un chapitre sur la réécriture (sujet A) et le projet de création (oral).
export default {
  matiere: {
    id: 'cine',
    nom: 'Cinéma-audiovisuel',
    voie: 'generale',
    epreuve: { type: 'ecrit+pratique', duree: 210, coef: 16, quand: 'juin', note: 'Écrit de 3 h 30 sur 10 points : analyse d\'un extrait projeté d\'une œuvre du programme limitatif, puis au choix une réécriture créative (sujet A) ou une réflexion sur dossier (sujet B). Oral de 30 minutes sur 10 points : présentation du projet de création appuyée sur le carnet de création et la réalisation, question du jury, entretien.' },
    sources: [
      'https://pedagogie.ac-orleans-tours.fr/documents/pdf/programme_spe_term.pdf',
      'https://eduscol.education.gouv.fr/5775/programmes-et-ressources-en-cinema-audiovisuel-voie-gt',
      'https://eduscol.education.gouv.fr/sites/default/files/document/progrlimitatif-spe-cav-tleg-annee2026-2027pdf-125606.pdf',
      'https://www.education.gouv.fr/bo/2026/Hebdo4/MENE2536492N',
      'https://eduscol.education.gouv.fr/sites/default/files/document/nds-consolidee-definition-epreuve-bac-arts-102129.pdf',
      'https://sites.ac-corse.fr/lettres/2026/07/15/programme-limitatif-de-lenseignement-de-specialite-de-cinema-audiovisuel-en-classe-terminale-pour-lannee-scolaire-2026-2027/',
    ],
    chapitres: [
      { id: 'cine-1', t: 'Analyser un extrait : les outils du langage cinématographique', theme: 'Outils d\'analyse' },
      { id: 'cine-2', t: 'Réceptions et publics', theme: 'Questionnements de terminale' },
      { id: 'cine-3', t: 'Transferts et circulations culturels', theme: 'Questionnements de terminale' },
      { id: 'cine-4', t: 'Un cinéaste au travail', theme: 'Questionnements de terminale' },
      { id: 'cine-5', t: 'Périodes et courants', theme: 'Questionnements de terminale' },
      { id: 'cine-6', t: 'Art et industrie', theme: 'Questionnements de terminale' },
      { id: 'cine-7', t: 'Entr\'acte (1924) et Paris qui dort (1925) de René Clair', theme: 'Œuvres du programme limitatif' },
      { id: 'cine-8', t: 'La Féline de Jacques Tourneur (1942)', theme: 'Œuvres du programme limitatif' },
      { id: 'cine-9', t: 'Irma Vep d\'Olivier Assayas (mini-série, 2022, épisodes 1 à 3)', theme: 'Œuvres du programme limitatif' },
      { id: 'cine-10', t: 'Réécrire un extrait et présenter son projet de création', theme: 'Pratique et oral' },
    ],
  },
  paquets: [
    // ---------------------------------------------------------------- 1
    {
      chapitre: 'cine-1',
      fiche: `## Analyser un extrait : les outils du langage cinématographique

À l'écrit, un extrait de 4 minutes au plus est projeté trois fois. Il faut l'analyser avec précision. Pour cela, il faut nommer ce qu'on voit et ce qu'on entend avec les bons mots, puis dire **ce que ça produit** sur le spectateur.

### Le cadre et les échelles de plans
- Le **cadre** est ce que la caméra montre ; tout ce qui existe autour sans être montré est le **hors-champ**. Un bruit ou un regard vers le bord du cadre fait exister le hors-champ.
- Les **échelles de plans** vont du plus large au plus serré : **plan d'ensemble** (un décor, des personnages petits), **plan moyen** (un personnage en pied), **plan américain** (coupé à mi-cuisse), **plan rapproché** (taille ou poitrine), **gros plan** (le visage), **très gros plan** (un œil), **insert** (un objet en gros plan, comme une lettre ou une clé).
- Exemple : un gros plan sur un visage inquiet fait partager l'émotion ; un plan d'ensemble peut isoler un personnage dans un grand espace.

### Les angles et les mouvements
- La **plongée** filme de haut : le personnage paraît écrasé, fragile. La **contre-plongée** filme de bas : il paraît dominant, menaçant.
- Le **panoramique** fait pivoter la caméra sur place. Le **travelling** déplace la caméra (sur des rails, à la main, sur un véhicule). Le **zoom** change la focale sans bouger la caméra.
- Le **plan-séquence** filme toute une action en un seul plan, sans coupe : il donne une impression de temps réel.
- Le **champ-contrechamp** alterne deux points de vue opposés, souvent dans un dialogue.

### La lumière et la profondeur
- Le **clair-obscur** (forts contrastes, grandes ombres) vient de la peinture et de l'expressionnisme allemand ; il crée le mystère et l'angoisse.
- La **profondeur de champ** est la zone nette de l'image. Grande, elle montre plusieurs actions à la fois ; faible, elle isole un détail.

### Le montage
- Le **montage** assemble les plans. Il crée du sens : deux plans mis côte à côte produisent une idée qu'aucun ne contient seul (c'est l'**effet Koulechov**).
- Les **raccords** cachent la coupe : raccord regard, raccord mouvement, raccord dans l'axe. Un **faux raccord** est une rupture visible, voulue ou non.
- Le **montage alterné** fait se succéder deux actions qui se passent en même temps dans deux lieux, souvent pour créer du suspense (une poursuite). Le **montage parallèle** rapproche deux actions sans lien de temps, pour une comparaison.
- L'**ellipse** supprime un moment du récit. Le **rythme** dépend de la durée des plans : des plans très courts accélèrent, des plans longs ralentissent.
- L'**accéléré**, le **ralenti** et l'**arrêt sur image** modifient le temps du film.

### Le son
- Le son **in** a sa source dans le cadre ; le son **hors-champ** a sa source dans l'histoire mais hors du cadre ; le son **off** n'appartient pas à l'histoire (une voix de narrateur, une musique de film).
- On dit **diégétique** ce qui appartient au monde de l'histoire (la radio qu'écoute un personnage) et **extradiégétique** ce qui n'y appartient pas (la musique d'accompagnement).
- Dans un film muet, la musique était jouée dans la salle et les **intertitres** (ou cartons) donnaient les dialogues.

### Comment rédiger l'analyse
- Situer l'extrait dans l'œuvre en deux phrases, puis poser une **problématique**.
- Choisir une forme : **linéaire** (on suit l'extrait du début à la fin) ou **composée** (deux ou trois axes).
- Chaque remarque technique doit être suivie de son **effet** : « la contre-plongée rend le personnage menaçant », et non « il y a une contre-plongée ».
- Citer des moments précis : un plan, un geste, un son, un raccord.

### À retenir pour le bac
- L'extrait est projeté trois fois : prendre des notes en colonnes (image, son, montage, sens).
- Une technique sans effet ne rapporte rien : toujours dire ce qu'elle produit.
- Ne pas confondre son hors-champ (dans l'histoire) et son off (hors de l'histoire).
- Ne pas confondre montage alterné (actions simultanées) et montage parallèle (comparaison).`,
      cartes: [
        { q: "Qu'est-ce que le hors-champ ?", r: "Tout ce qui existe dans l'histoire autour du cadre sans être montré. Un bruit, un regard ou une ombre peuvent le faire exister." },
        { q: "Cite les échelles de plans, du plus large au plus serré.", r: "Plan d'ensemble, plan moyen, plan américain, plan rapproché, gros plan, très gros plan. L'insert est un gros plan sur un objet." },
        { q: "Quel effet produit souvent une plongée ?", r: "Filmé de haut, le personnage paraît écrasé, fragile ou dominé." },
        { q: "Quel effet produit souvent une contre-plongée ?", r: "Filmé de bas, le personnage paraît puissant, dominant ou menaçant." },
        { q: "Différence entre panoramique et travelling ?", r: "Le panoramique fait pivoter la caméra sur place ; le travelling la déplace dans l'espace." },
        { q: "Qu'est-ce qu'un plan-séquence ?", r: "Une action entière filmée en un seul plan, sans coupe. Il donne une impression de temps réel." },
        { q: "Qu'est-ce que l'effet Koulechov ?", r: "Le sens d'un plan change selon le plan placé à côté : le même visage paraît triste, affamé ou amoureux selon l'image qui le suit." },
        { q: "Qu'est-ce que le montage alterné ?", r: "Le montage fait se succéder deux actions qui se déroulent en même temps dans deux lieux différents, souvent pour créer du suspense." },
        { q: "Qu'est-ce qu'une ellipse ?", r: "La suppression d'un moment de l'histoire : le spectateur comprend que du temps a passé." },
        { q: "Son hors-champ ou son off : quelle différence ?", r: "Le son hors-champ vient du monde de l'histoire mais hors du cadre ; le son off n'appartient pas à l'histoire (narrateur, musique d'accompagnement)." },
        { q: "Que veut dire diégétique ?", r: "Qui appartient au monde de l'histoire racontée. Une radio que les personnages entendent est diégétique." },
        { q: "Qu'est-ce que la profondeur de champ ?", r: "La zone de l'image qui est nette. Grande, elle montre plusieurs plans d'action ; faible, elle isole un détail." },
        { q: "Qu'est-ce qu'un raccord ?", r: "La manière de relier deux plans pour que la coupe passe inaperçue : raccord regard, mouvement ou dans l'axe." },
        { q: "Qu'est-ce que le clair-obscur ?", r: "Un éclairage très contrasté, avec de grandes zones d'ombre, hérité de la peinture et de l'expressionnisme. Il crée mystère et angoisse." },
        { q: "Analyse linéaire ou composée ?", r: "Linéaire : on suit l'extrait dans l'ordre. Composée : on organise l'analyse en deux ou trois axes. Les deux sont acceptées." },
        { q: "Qu'est-ce qu'un intertitre ?", r: "Un carton de texte inséré entre les plans, surtout dans le cinéma muet, pour donner un dialogue ou une information." },
      ],
      quiz: [
        { q: "Un personnage est cadré de la tête jusqu'à mi-cuisse. C'est un :", choix: ["plan moyen", "plan rapproché", "plan américain", "plan d'ensemble"], bonne: 2, expl: "Le plan américain coupe à mi-cuisse ; le plan moyen montre le personnage en pied.", niv: 1 },
        { q: "La caméra pivote sur son pied pour suivre une voiture qui passe. C'est un :", choix: ["panoramique", "travelling latéral", "zoom avant", "plan-séquence"], bonne: 0, expl: "La caméra tourne sur place : c'est un panoramique. Un travelling suppose un déplacement de la caméra.", niv: 2 },
        { q: "Qu'appelle-t-on effet Koulechov ?", choix: ["L'impression de relief donnée par une forte profondeur de champ", "La disparition de la coupe grâce à un raccord dans le mouvement", "L'accélération du rythme obtenue par des plans très courts", "Le sens d'un plan qui change selon le plan voisin"], bonne: 3, expl: "Koulechov a montré que le spectateur donne un sens au visage d'après l'image voisine.", niv: 1 },
        { q: "On entend des pas derrière une porte fermée, sans voir qui marche. C'est un son :", choix: ["off", "hors-champ", "extradiégétique", "in"], bonne: 1, expl: "Les pas viennent du monde de l'histoire mais d'en dehors du cadre : son hors-champ. Le son off n'appartient pas à l'histoire.", niv: 2 },
        { q: "Une héroïne court pour fuir ; on voit en alternance son poursuivant qui gagne du terrain. Le montage est :", choix: ["parallèle, car il compare deux personnages", "alterné, car les deux actions sont simultanées", "elliptique, car il supprime une partie du trajet", "en champ-contrechamp, car il oppose deux regards"], bonne: 1, expl: "Deux actions simultanées dans deux lieux : montage alterné. Le montage parallèle compare des actions sans lien de temps.", niv: 3 },
        { q: "Un méchant est filmé de très bas, en contre-jour. L'effet recherché est surtout de le rendre :", choix: ["fragile et pitoyable", "proche du spectateur", "comique et ridicule", "dominant et menaçant"], bonne: 3, expl: "La contre-plongée grandit le personnage ; le contre-jour ajoute du mystère.", niv: 2 },
        { q: "Dans un film, la musique d'orchestre qui accompagne une scène de baiser est en général :", choix: ["extradiégétique", "diégétique", "hors-champ", "in"], bonne: 0, expl: "Les personnages ne l'entendent pas : elle n'appartient pas au monde de l'histoire.", niv: 2 },
        { q: "Un personnage s'endort, puis on le voit au matin. Le film a utilisé :", choix: ["un faux raccord", "une surimpression", "une ellipse", "un arrêt sur image"], bonne: 2, expl: "Le temps de la nuit est supprimé : c'est une ellipse.", niv: 1 },
        { q: "Pourquoi écrire « la plongée écrase le personnage » plutôt que « il y a une plongée » ?", choix: ["Parce que le vocabulaire technique est interdit à l'écrit", "Parce que les plongées sont rares dans les films étudiés", "Parce que le jury veut une analyse linéaire de l'extrait", "Parce qu'une technique ne vaut que par son effet"], bonne: 3, expl: "Le correcteur attend l'interprétation : chaque procédé doit être relié à un effet ou à un sens.", niv: 3 },
        { q: "Une scène de dialogue alterne le visage de chaque personnage, filmé face à l'autre. C'est un :", choix: ["champ-contrechamp", "plan-séquence", "montage parallèle", "travelling avant"], bonne: 0, expl: "On passe du champ de l'un au champ opposé : champ-contrechamp.", niv: 1 },
        { q: "Une grande profondeur de champ permet surtout :", choix: ["d'isoler un détail en rendant le fond flou", "de garder nets l'avant et l'arrière-plan", "de supprimer le hors-champ du cadre", "de rendre le mouvement plus rapide à l'image"], bonne: 1, expl: "Avec une grande profondeur de champ, avant-plan et arrière-plan sont nets en même temps.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 2
    {
      chapitre: 'cine-2',
      fiche: `## Réceptions et publics

### De quoi parle ce questionnement ?
- La **réception** est la manière dont un film est accueilli : par le public (les entrées), par la **critique** (journaux, revues), par les professionnels (prix, festivals), puis par l'histoire (le film est oublié ou devient un classique).
- Le programme demande de comprendre que **le public n'est pas un bloc** : il y a des spectateurs différents, et un même film peut être reçu très différemment selon l'époque et le lieu.

### Mesurer le succès
- Le **box-office** mesure les recettes d'un film en salles. En France, on compte surtout les **entrées** (le nombre de billets vendus). Le **CNC** (Centre national du cinéma et de l'image animée, créé en 1946) publie ces chiffres chaque année.
- En 2019, les salles françaises ont fait environ **213 millions d'entrées**, un record depuis les années 1960. La fréquentation a chuté pendant la crise sanitaire, puis s'est en partie redressée.
- Le succès se mesure aussi aujourd'hui par les vues sur les plateformes, les ventes de vidéo, les diffusions à la télévision.
- Les **études de public** classent les spectateurs par âge, sexe, diplôme, lieu de vie, fréquence de sortie (les « assidus », les « occasionnels »). Elles servent à l'industrie pour choisir les dates de sortie et la publicité.

### Une réception qui change avec le temps
- Un échec à sa sortie peut devenir un chef-d'œuvre. Exemple : **La Règle du jeu** de Jean Renoir (1939) est sifflé et coupé à sa sortie, puis il est réhabilité et classé parmi les plus grands films.
- À l'inverse, un grand succès peut être oublié.
- Des films de série B, tournés vite et avec peu d'argent, deviennent des **films cultes**, revus par des générations de cinéphiles. C'est le cas de **La Féline** (1942), petit film de la RKO devenu une référence du cinéma de la peur.
- Les **cinéphiles**, les **ciné-clubs** et les revues (les **Cahiers du cinéma**, fondés en 1951) ont joué un grand rôle dans la reconnaissance de cinéastes d'abord jugés commerciaux, comme Hitchcock.

### Le spectateur individuel
- Le spectateur vit une expérience **perceptive** (il voit des images en mouvement dans le noir) et **cognitive** (il comprend une histoire, fait des hypothèses, anticipe).
- L'**identification** : le spectateur s'identifie d'abord au regard de la caméra, puis aux personnages. Le **point de vue** choisi par le film (ce qu'on sait, ce qu'on ne sait pas) guide ses émotions.
- Le **suspense** consiste à donner au spectateur une information que le personnage n'a pas ; la **surprise** cache l'information jusqu'au dernier moment. Hitchcock a souvent expliqué cette différence avec l'exemple d'une bombe cachée sous une table.
- La réception **esthétique** est le jugement de goût : trouver un film beau, original, émouvant. Elle dépend de ce que le spectateur a déjà vu (son **horizon d'attente**).

### Les lieux et les formes de la réception
- La **salle de cinéma** offre une séance collective, dans le noir, sans pause : c'est une expérience forte et partagée.
- La télévision, la vidéo, puis les **plateformes** ont changé la réception : on regarde seul, en morceaux, sur un petit écran, quand on veut. Les séries jouent avec ce rythme (épisodes, saisons, **visionnage en rafale**).
- Les **festivals** (Cannes, Venise, Berlin) et les prix (la Palme d'or, les César) donnent une reconnaissance et une visibilité.

### Lien avec les œuvres du programme
- **La Féline** : un petit budget, des critiques partagées à la sortie, un grand succès public, puis un statut de film culte.
- **Irma Vep** : la série se demande si elle est « un film » ou « un feuilleton », et donc comment elle sera reçue et jugée.
- **Entr'acte** : projeté pendant l'entracte d'un ballet, devant un public parisien venu pour la danse, qui a réagi bruyamment.

### À retenir pour le bac
- Distinguer réception publique (entrées), critique (presse), professionnelle (prix) et historique (statut de classique).
- Un film peut changer de statut avec le temps : donner un exemple précis.
- Suspense : le spectateur en sait plus que le personnage ; surprise : il ne sait rien.
- Le mode de diffusion (salle, télévision, plateforme) change la réception d'une œuvre.`,
      cartes: [
        { q: "Qu'est-ce que la réception d'un film ?", r: "La manière dont il est accueilli : par le public, la critique, les professionnels et, avec le temps, par l'histoire du cinéma." },
        { q: "Que mesure le box-office ?", r: "Les recettes ou, en France surtout, le nombre d'entrées d'un film en salles." },
        { q: "Qu'est-ce que le CNC ?", r: "Le Centre national du cinéma et de l'image animée, créé en 1946. Il publie les chiffres de fréquentation et soutient la création." },
        { q: "Combien d'entrées les salles françaises ont-elles faites en 2019 ?", r: "Environ 213 millions, un niveau record depuis les années 1960." },
        { q: "Donne un exemple de film d'abord rejeté puis reconnu.", r: "La Règle du jeu de Jean Renoir (1939), sifflé et coupé à sa sortie, aujourd'hui classé parmi les plus grands films." },
        { q: "Qu'est-ce qu'un film culte ?", r: "Un film revu et célébré par un public fidèle, parfois longtemps après un succès modeste ou une sortie discrète." },
        { q: "Quel rôle ont joué les Cahiers du cinéma ?", r: "Fondée en 1951, la revue a défendu des cinéastes jugés commerciaux, comme Hitchcock, en les présentant comme de vrais auteurs." },
        { q: "Suspense ou surprise ?", r: "Suspense : le spectateur sait ce que le personnage ignore et il attend. Surprise : l'information est cachée à tous jusqu'au dernier moment." },
        { q: "Qu'est-ce que l'horizon d'attente ?", r: "Ce que le spectateur attend d'une œuvre, d'après les films qu'il a déjà vus et ce qu'il sait du genre." },
        { q: "Qu'apporte l'expérience de la salle ?", r: "Une séance collective, dans le noir, sur grand écran et sans interruption : une attention et une émotion partagées." },
        { q: "Comment les plateformes changent-elles la réception ?", r: "On regarde seul, quand on veut, sur des écrans variés, parfois plusieurs épisodes d'affilée ; l'attention et le rythme changent." },
        { q: "À quoi servent les études de public ?", r: "À connaître les spectateurs (âge, diplôme, fréquence de sortie) pour adapter les sorties, la publicité et les choix de production." },
        { q: "Quels sont les trois grands festivals européens ?", r: "Cannes, Venise et Berlin. Ils offrent prix et visibilité aux films." },
        { q: "En quoi La Féline illustre-t-elle ce questionnement ?", r: "Petit film de série B à sa sortie en 1942, il a eu un grand succès public puis est devenu un film culte et une référence du cinéma de la peur." },
      ],
      quiz: [
        { q: "En France, le succès d'un film en salles se compte surtout en :", choix: ["nombre d'entrées", "nombre de copies", "nombre de critiques", "nombre de prix"], bonne: 0, expl: "Le CNC publie le nombre de billets vendus, c'est-à-dire les entrées.", niv: 1 },
        { q: "Quel organisme public publie chaque année les chiffres de fréquentation des salles françaises ?", choix: ["L'Arcom", "La SACD", "Le CNC", "La Cinémathèque française"], bonne: 2, expl: "Le Centre national du cinéma et de l'image animée suit la fréquentation et finance la création.", niv: 1 },
        { q: "Le spectateur voit une bombe sous une table alors que les personnages discutent sans le savoir. Hitchcock parle de :", choix: ["surprise", "fausse piste", "contrepoint", "suspense"], bonne: 3, expl: "Le spectateur en sait plus que les personnages et attend : c'est le suspense.", niv: 2 },
        { q: "La Règle du jeu (1939), sifflé à sa sortie puis classé parmi les grands films, montre que :", choix: ["la réception d'un film peut changer avec le temps", "le public finit par donner raison à la critique de son époque", "les films d'avant-guerre étaient surtout mal reçus", "la censure décide seule du statut d'un film"], bonne: 0, expl: "Le statut d'une œuvre se construit aussi après sa sortie : elle peut être réhabilitée.", niv: 2 },
        { q: "Quelle revue fondée en 1951 a défendu Hitchcock comme un véritable auteur ?", choix: ["Positif", "Les Cahiers du cinéma", "Télérama", "Premiere"], bonne: 1, expl: "Les jeunes critiques des Cahiers du cinéma ont défendu Hitchcock et Hawks comme des auteurs.", niv: 1 },
        { q: "Un spectateur qui a vu beaucoup de films d'horreur attend des sursauts dans un nouveau film du genre. C'est son :", choix: ["identification secondaire", "point de vue interne", "horizon d'attente", "capital économique"], bonne: 2, expl: "L'horizon d'attente vient des œuvres déjà vues et de la connaissance du genre.", niv: 2 },
        { q: "Pourquoi une série vue sur une plateforme n'est-elle pas reçue comme un film en salle ?", choix: ["Parce qu'une série est rarement commentée par la critique de presse", "Parce qu'on la regarde seul, par morceaux, quand on veut", "Parce qu'elle ne peut pas être une œuvre d'auteur", "Parce que son image est en noir et blanc"], bonne: 1, expl: "Les conditions de visionnage changent l'attention et le rythme de la réception.", niv: 3 },
        { q: "Un film tourné vite et pour peu d'argent devient, des années plus tard, une référence pour des cinéphiles. On parle de :", choix: ["film de festival", "superproduction", "film d'auteur", "film culte"], bonne: 3, expl: "Le statut culte vient d'un public fidèle qui revoit et célèbre le film.", niv: 2 },
        { q: "Les études de public servent d'abord à l'industrie pour :", choix: ["adapter les sorties et la publicité aux spectateurs visés", "fixer le salaire des acteurs selon leur popularité auprès des jeunes", "décider seules du contenu des scénarios", "remplacer le travail des critiques de cinéma"], bonne: 0, expl: "Connaître les spectateurs aide à choisir les dates, la promotion et les publics visés.", niv: 2 },
        { q: "Quelle différence entre réception critique et réception publique ?", choix: ["La première est mesurée en entrées, la seconde en articles", "La première vient de la presse, la seconde du public", "La première vient des festivals, la seconde de la télévision", "La première est française, la seconde internationale"], bonne: 1, expl: "Un film peut plaire à la critique et peu au public, ou l'inverse.", niv: 3 },
        { q: "Pourquoi La Féline relève-t-il du questionnement « réceptions et publics » ?", choix: ["Parce qu'il a reçu la Palme d'or en 1942", "Parce qu'il a été interdit en salle pendant la guerre", "Parce que cette série B est devenue un film culte", "Parce qu'il a été tourné pour une plateforme"], bonne: 2, expl: "Petit film à bas prix, il a connu un grand succès puis une reconnaissance durable.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 3
    {
      chapitre: 'cine-3',
      fiche: `## Transferts et circulations culturels

### De quoi parle ce questionnement ?
- Les films, les formes et les artistes **voyagent** d'un pays à l'autre et d'un art à l'autre. Le programme demande d'étudier ce qui se passe quand un motif, un genre ou un cinéaste change de culture : ce qu'il garde, ce qu'il perd, ce qu'il invente.
- Un **transfert** fait passer un élément d'une culture à une autre ; une **circulation** désigne ces échanges dans les deux sens, sur la durée.

### Les cinéastes qui émigrent
- Dans les années 1920 et 1930, beaucoup de cinéastes européens partent pour **Hollywood** : Ernst Lubitsch, F. W. Murnau, Fritz Lang, Billy Wilder. Certains fuient le nazisme.
- Ils apportent des savoir-faire (la lumière contrastée, le travail des décors, l'ironie) et doivent s'adapter à un autre système : les studios, les stars, le public américain, la censure.
- **Jacques Tourneur**, né à Paris en 1904, fils du réalisateur Maurice Tourneur, fait carrière aux États-Unis à partir de 1934. **La Féline** (1942) mêle l'héritage visuel de l'**expressionnisme allemand** et le cinéma de genre américain.

### Naturalisation et hybridation
- La **naturalisation** est l'adaptation d'un matériau étranger aux habitudes du pays d'accueil, au point qu'il semble né là. Exemple : un western américain repris par des cinéastes italiens dans les années 1960 devient le **western spaghetti** de Sergio Leone, avec son propre style.
- L'**hybridation** n'est pas un simple mélange : c'est un **métissage créateur** qui produit une forme nouvelle. Exemple : La Féline croise une légende serbe, le fantastique européen et la ville de New York.

### Remakes, adaptations et reprises
- Le **remake** est un nouveau film tourné d'après un film existant. Exemple : Les Sept Samouraïs d'Akira Kurosawa (1954) devient le western Les Sept Mercenaires (1960). Le film d'horreur japonais Ring (1998) est refait à Hollywood en 2002.
- L'**adaptation** transpose un roman, une pièce, une bande dessinée en film.
- La **reprise d'un motif** : une figure (la femme-chat, la vampire en collant noir) passe d'un film à l'autre et change de sens. Le programme invite à rapprocher la femme-panthère de La Féline et la vampire au collant noir d'Irma Vep.

### Le cas d'Irma Vep
- En 1915-1916, Louis Feuillade tourne **Les Vampires**, un feuilleton en dix épisodes où l'actrice **Musidora** joue Irma Vep, voleuse en collant noir (son nom est l'anagramme de « vampire »).
- En 1996, Olivier Assayas tourne le film **Irma Vep** avec la star de Hong Kong **Maggie Cheung** : un réalisateur français veut refaire Les Vampires avec une actrice chinoise.
- En 2022, Assayas en fait une **mini-série** pour la chaîne américaine HBO, avec une star américaine, Mira, jouée par Alicia Vikander. Le motif circule ainsi entre la France, Hong Kong et les États-Unis, entre le muet, le film et la série.

### Comment l'analyser
- Repérer l'**origine** du motif ou de la forme.
- Montrer ce qui est **conservé** et ce qui est **transformé** (le décor, les acteurs, la morale, la technique, le public).
- Dire ce que la transformation **produit** : une modernisation, une critique, un hommage, une forme nouvelle.

### À retenir pour le bac
- Naturalisation : la forme étrangère est acclimatée ; hybridation : un métissage qui crée du neuf.
- Citer des exemples précis : Tourneur à Hollywood, le western spaghetti, Irma Vep de 1915 à 2022.
- Ne pas se contenter de dire « il y a une influence » : montrer ce qui change et pourquoi.
- La Féline est étudiée dans ce questionnement, avec « un cinéaste au travail ».`,
      cartes: [
        { q: "Que désigne un transfert culturel au cinéma ?", r: "Le passage d'un motif, d'un genre, d'une technique ou d'un artiste d'une culture à une autre, avec les transformations que cela entraîne." },
        { q: "Qu'est-ce que la naturalisation ?", r: "L'adaptation d'un matériau venu d'ailleurs aux habitudes du pays d'accueil, au point qu'il semble y être né." },
        { q: "Qu'est-ce que l'hybridation ?", r: "Un métissage créateur : des éléments de cultures différentes se combinent pour produire une forme originale, pas une simple juxtaposition." },
        { q: "Cite trois cinéastes européens partis à Hollywood.", r: "Par exemple Ernst Lubitsch, F. W. Murnau, Fritz Lang ou Billy Wilder." },
        { q: "Qui est Jacques Tourneur ?", r: "Cinéaste né à Paris en 1904, fils de Maurice Tourneur, installé à Hollywood à partir de 1934, réalisateur de La Féline (1942)." },
        { q: "Qu'est-ce que le western spaghetti ?", r: "Le western repris par des cinéastes italiens dans les années 1960, comme Sergio Leone, avec un style propre : un exemple de naturalisation." },
        { q: "Qu'est-ce qu'un remake ?", r: "Un nouveau film tourné d'après un film existant, souvent dans un autre pays ou une autre époque." },
        { q: "Donne un exemple de remake entre deux pays.", r: "Les Sept Samouraïs de Kurosawa (1954) devient Les Sept Mercenaires (1960), western américain." },
        { q: "Qui a tourné Les Vampires et quand ?", r: "Louis Feuillade, en 1915-1916, un feuilleton en dix épisodes." },
        { q: "Qui jouait Irma Vep dans Les Vampires ?", r: "L'actrice Musidora, en collant noir. Irma Vep est l'anagramme de « vampire »." },
        { q: "Quelle star jouait dans le film Irma Vep de 1996 ?", r: "Maggie Cheung, star du cinéma de Hong Kong." },
        { q: "Pour quelle chaîne la série Irma Vep de 2022 a-t-elle été faite ?", r: "Pour HBO, chaîne américaine. La star du tournage dans la série est Mira, jouée par Alicia Vikander." },
        { q: "Quelle influence européenne marque La Féline ?", r: "L'expressionnisme allemand : ombres immenses, clair-obscur, inquiétude rendue par la lumière." },
        { q: "Quelle méthode pour analyser un transfert ?", r: "Trouver l'origine, montrer ce qui est gardé et ce qui est transformé, puis dire ce que la transformation produit." },
      ],
      quiz: [
        { q: "Un genre venu d'un autre pays est si bien adapté qu'il semble né dans le pays d'accueil. C'est :", choix: ["une hybridation", "une naturalisation", "une adaptation littéraire", "une coproduction"], bonne: 1, expl: "La naturalisation acclimate un matériau étranger ; l'hybridation crée une forme métissée nouvelle.", niv: 1 },
        { q: "Le western spaghetti de Sergio Leone est un exemple de :", choix: ["naturalisation d'un genre américain en Italie", "remake d'un film japonais tourné ensuite aux États-Unis", "film expressionniste tourné à Hollywood", "série télévisée adaptée d'un feuilleton muet"], bonne: 0, expl: "Le western, genre américain, est repris et transformé par des cinéastes italiens.", niv: 2 },
        { q: "Qui a joué Irma Vep dans Les Vampires de Louis Feuillade ?", choix: ["Maggie Cheung", "Simone Simon", "Alicia Vikander", "Musidora"], bonne: 3, expl: "Musidora incarne la voleuse en collant noir en 1915-1916. Maggie Cheung joue dans le film de 1996.", niv: 1 },
        { q: "En quelle année Jacques Tourneur s'installe-t-il aux États-Unis ?", choix: ["1919", "1942", "1934", "1904"], bonne: 2, expl: "Né en 1904, citoyen américain en 1919, il s'expatrie à Hollywood en 1934 et tourne La Féline en 1942.", niv: 1 },
        { q: "Les Sept Mercenaires (1960) d'après Les Sept Samouraïs (1954) est :", choix: ["une adaptation d'un roman japonais", "un exemple d'hybridation sans source précise", "un remake, d'un film japonais vers le western", "un feuilleton muet modernisé"], bonne: 2, expl: "Un film existant est retourné dans une autre culture et un autre genre : c'est un remake.", niv: 2 },
        { q: "Pourquoi l'hybridation n'est-elle pas une simple juxtaposition ?", choix: ["Parce qu'elle mélange des éléments sans les transformer", "Parce qu'elle concerne surtout les musiques de film et les décors", "Parce qu'elle refuse toute influence étrangère", "Parce qu'elle crée une forme nouvelle"], bonne: 3, expl: "Le programme parle d'un « métissage créateur de formes originales ».", niv: 3 },
        { q: "L'ombre immense d'une silhouette sur un mur, dans La Féline, rappelle surtout :", choix: ["l'expressionnisme allemand", "le néoréalisme italien", "la Nouvelle Vague française", "le cinéma soviétique de montage"], bonne: 0, expl: "Le jeu des ombres et du clair-obscur est hérité de l'expressionnisme allemand.", niv: 2 },
        { q: "Le motif d'Irma Vep circule entre plusieurs cultures. Lequel de ces passages est exact ?", choix: ["D'un film hollywoodien muet à une série française", "D'un feuilleton muet français à une série pour HBO", "D'un roman anglais à un film de Hong Kong", "D'une bande dessinée belge à un film allemand"], bonne: 1, expl: "Les Vampires (1915-1916) de Feuillade, puis le film de 1996, puis la série HBO de 2022.", niv: 2 },
        { q: "Un cinéaste européen qui arrive à Hollywood doit surtout s'adapter :", choix: ["à un studio, des stars, un public et une censure nouveaux", "à l'absence totale de règles de production", "à un cinéma resté muet jusqu'en 1950", "à l'interdiction de tourner des films de genre"], bonne: 0, expl: "Le programme insiste sur l'adaptation à un nouveau système industriel, à de nouvelles équipes et à un nouveau public.", niv: 3 },
        { q: "Dans une analyse de transfert, qu'est-ce qui rapporte le plus de points ?", choix: ["Résumer l'histoire du film d'origine", "Lister les pays où le film est sorti et ses dates de sortie", "Citer le nombre d'entrées du remake", "Montrer ce qui est gardé, ce qui change, et pourquoi"], bonne: 3, expl: "Dire « il y a une influence » ne suffit pas : il faut montrer et interpréter la transformation.", niv: 3 },
        { q: "Pour l'année 2026-2027, La Féline est étudiée dans les questionnements :", choix: ["art et industrie, réceptions et publics", "périodes et courants, art et industrie", "transferts culturels, un cinéaste au travail", "réceptions et publics, périodes et courants"], bonne: 2, expl: "Le programme limitatif associe La Féline à ces deux questionnements.", niv: 2 },
      ],
    },
    // ---------------------------------------------------------------- 4
    {
      chapitre: 'cine-4',
      fiche: `## Un cinéaste au travail

### De quoi parle ce questionnement ?
- Un film n'est pas une idée qui tombe du ciel : c'est une suite de **choix artistiques et techniques**, faits sous des **contraintes** (budget, temps, matériel, producteur, acteurs, censure).
- Le programme demande de suivre ces étapes sur un cas concret, à l'aide de **documents de travail** (notes, scénarios, story-boards, photos de tournage, entretiens), pour comprendre comment se construit un **point de vue d'auteur**.

### Les étapes de la fabrication d'un film
- **L'écriture** : le **synopsis** résume l'histoire en quelques lignes ; le **traitement** la raconte au présent en quelques pages ; le **séquencier** la découpe en séquences ; la **continuité dialoguée** (le scénario) donne les scènes et les dialogues.
- **La préparation** : le **découpage technique** prévoit chaque plan (échelle, angle, mouvement) ; le **story-board** le dessine case par case ; les **repérages** cherchent les lieux ; le **casting** choisit les acteurs.
- **Le tournage** : chaque plan est filmé en une ou plusieurs **prises** ; la **scripte** note tout pour garantir les raccords ; les images tournées s'appellent les **rushes**.
- **La postproduction** : le **montage** image (on choisit les prises, on fixe l'ordre et le rythme), le **montage son** et le **mixage**, l'**étalonnage** (réglage des couleurs et de la lumière), les **effets visuels**.
- **La diffusion** : la sortie en salles, à la télévision ou sur une plateforme.

### Une création collective
- Le réalisateur travaille avec une équipe : le **producteur** (il trouve l'argent et organise), le **directeur de la photographie** ou chef opérateur (la lumière et l'image), le **chef décorateur**, l'**ingénieur du son**, le **monteur**, le compositeur.
- Exemple : le directeur de la photographie de La Féline, **Nicholas Musuraca**, a beaucoup compté dans le style d'ombres du film.

### L'auteur et ses contraintes
- Dans les années 1950, les critiques des **Cahiers du cinéma**, dont **François Truffaut**, défendent la **politique des auteurs** : un vrai cinéaste imprime sa marque sur tous ses films, même dans un système commercial.
- Les contraintes peuvent devenir une force. Exemple : à la RKO, le producteur **Val Lewton** dispose de petits budgets et de titres souvent imposés par le studio ; Tourneur suggère la peur par l'ombre et le son plutôt que de montrer un monstre coûteux.
- Le cinéaste a des **influences** (artistiques, historiques, économiques), mais il cherche à s'en affranchir pour trouver son style.

### Le film qui montre son propre tournage
- Certains films racontent la fabrication d'un film : c'est une **mise en abyme**. Exemple : **La Nuit américaine** de François Truffaut (1973) suit le tournage d'un film et ses catastrophes.
- **Irma Vep** d'Olivier Assayas (2022) suit René Vidal, réalisateur qui tourne une nouvelle version des Vampires de Feuillade : la série montre les doutes, les caprices, les accidents et les arrangements d'un tournage.
- Chez **René Clair**, Entr'acte est l'œuvre d'une bande d'amis artistes, qui apparaissent à l'écran : on voit presque le groupe s'amuser à créer.

### Comment l'analyser
- Partir d'un document de travail ou d'une scène, et se demander : quel choix a été fait ? quelle autre solution était possible ? pourquoi celle-ci ?
- Relier le choix à une **contrainte** (argent, technique, censure) ou à une **intention** (créer la peur, faire rire, troubler).
- Montrer ce qui fait la **singularité** du cinéaste : ses motifs, son rythme, ses obsessions.

### À retenir pour le bac
- Connaître l'ordre des étapes : écriture, préparation, tournage, postproduction, diffusion.
- Ne pas confondre découpage technique (le texte des plans) et story-board (le dessin des plans).
- Une contrainte peut nourrir le style : l'exemple de La Féline est attendu.
- Ce questionnement concerne les trois œuvres du programme limitatif de 2027.`,
      cartes: [
        { q: "Qu'est-ce qu'un synopsis ?", r: "Un résumé de l'histoire en quelques lignes, première étape de l'écriture d'un film." },
        { q: "Qu'est-ce que la continuité dialoguée ?", r: "Le scénario complet : les scènes dans l'ordre, avec les actions et les dialogues." },
        { q: "Découpage technique ou story-board ?", r: "Le découpage technique décrit chaque plan par écrit (échelle, angle, mouvement) ; le story-board le dessine case par case." },
        { q: "À quoi servent les repérages ?", r: "À chercher et choisir les lieux de tournage avant de filmer." },
        { q: "Quel est le rôle de la scripte ?", r: "Elle note tout pendant le tournage (prises, gestes, accessoires) pour assurer les raccords au montage." },
        { q: "Que sont les rushes ?", r: "Les images brutes tournées chaque jour, avant le montage." },
        { q: "Qu'est-ce que l'étalonnage ?", r: "Le réglage des couleurs, des contrastes et de la lumière de l'image après le tournage." },
        { q: "Quel est le rôle du directeur de la photographie ?", r: "Il conçoit la lumière et l'image du film avec le réalisateur ; on l'appelle aussi chef opérateur." },
        { q: "Qu'est-ce que la politique des auteurs ?", r: "L'idée défendue dans les années 1950 par les Cahiers du cinéma : un vrai cinéaste imprime sa marque sur tous ses films, même dans un système commercial." },
        { q: "Qui produit La Féline à la RKO ?", r: "Val Lewton, producteur et scénariste, qui dirige une petite unité de films à bas prix." },
        { q: "Comment une contrainte peut-elle nourrir le style ?", r: "Avec peu d'argent, Tourneur ne montre pas la créature : il suggère la peur par l'ombre et le son, ce qui fait la force du film." },
        { q: "Qu'est-ce qu'une mise en abyme au cinéma ?", r: "Une œuvre qui en contient une autre et se reflète en elle, par exemple un film qui montre le tournage d'un film." },
        { q: "Quel film de Truffaut montre un tournage ?", r: "La Nuit américaine (1973)." },
        { q: "Qui est René Vidal dans Irma Vep ?", r: "Le réalisateur qui tourne une nouvelle version des Vampires de Feuillade ; un double du cinéaste Olivier Assayas." },
        { q: "Quelles questions poser face à un choix de cinéaste ?", r: "Quel choix a été fait ? Quelle autre solution était possible ? Pourquoi celle-ci : contrainte ou intention ?" },
      ],
      quiz: [
        { q: "Un document décrit chaque plan par écrit : « plan rapproché, légère plongée, travelling arrière ». C'est :", choix: ["le synopsis", "le découpage technique", "le traitement", "la continuité dialoguée"], bonne: 1, expl: "Le découpage technique précise chaque plan ; le story-board le dessine.", niv: 2 },
        { q: "Quelle est la bonne suite des étapes d'un film ?", choix: ["Tournage, écriture, préparation, postproduction", "Préparation, écriture, postproduction, tournage", "Écriture, tournage, préparation, diffusion", "Écriture, préparation, tournage, postproduction"], bonne: 3, expl: "On écrit, on prépare (découpage, repérages, casting), on tourne, puis on monte et on mixe.", niv: 1 },
        { q: "Pendant le tournage, qui note les gestes et les accessoires pour assurer les raccords ?", choix: ["La scripte", "Le chef décorateur", "L'étalonneur", "Le producteur"], bonne: 0, expl: "La scripte garde la mémoire du tournage pour que les plans se raccordent.", niv: 1 },
        { q: "Après le tournage, on règle les couleurs et les contrastes de toutes les images. C'est :", choix: ["le mixage", "le dérushage", "l'étalonnage", "l'enregistrement direct"], bonne: 2, expl: "L'étalonnage règle la couleur et la lumière ; le mixage concerne le son.", niv: 2 },
        { q: "Les Cahiers du cinéma des années 1950 défendent la « politique des auteurs ». Elle affirme que :", choix: ["seuls les films à petit budget peuvent avoir un auteur", "un cinéaste imprime sa marque même dans un studio", "le scénariste est le véritable auteur de tout film", "le producteur doit garder le dernier mot sur le montage final"], bonne: 1, expl: "Truffaut et ses amis voient en Hitchcock ou Hawks de vrais auteurs, malgré le système hollywoodien.", niv: 2 },
        { q: "À la RKO, Tourneur suggère la créature au lieu de la montrer. Ce choix vient surtout :", choix: ["d'un budget limité transformé en force de style", "d'une interdiction de la censure de montrer des animaux", "d'un refus du studio de faire un film de peur", "d'une panne de caméra pendant le tournage"], bonne: 0, expl: "Le petit budget de l'unité Lewton pousse à la suggestion par l'ombre et le son.", niv: 3 },
        { q: "La Nuit américaine de Truffaut (1973) et Irma Vep d'Assayas ont en commun de :", choix: ["adapter le même roman policier", "être des films muets en noir et blanc", "avoir été tournés aux États-Unis par le studio de la RKO", "montrer le tournage d'un film, en mise en abyme"], bonne: 3, expl: "Les deux œuvres racontent la fabrication d'un film et ses accidents.", niv: 2 },
        { q: "Dans un sujet sur « un cinéaste au travail », que vaut-il mieux faire ?", choix: ["Raconter la biographie complète du cinéaste, de sa naissance à sa mort", "Relier un choix à une contrainte ou à une intention", "Donner le budget et les entrées du film", "Résumer l'histoire scène par scène"], bonne: 1, expl: "Le questionnement porte sur les choix de création et ce qui les explique.", niv: 3 },
        { q: "Qui est le directeur de la photographie de La Féline ?", choix: ["Nicholas Musuraca", "Val Lewton", "DeWitt Bodeen", "Maurice Tourneur"], bonne: 0, expl: "Musuraca est connu pour avoir fait renaître le style expressionniste aux États-Unis dans les années 1940.", niv: 1 },
        { q: "Pourquoi le programme insiste-t-il sur les documents de travail (notes, story-boards, entretiens) ?", choix: ["Parce qu'ils remplacent le visionnage du film", "Parce qu'ils sont souvent plus beaux et plus libres que le film terminé", "Parce qu'ils donnent le nombre exact d'entrées en salles", "Parce qu'ils montrent les choix et les hésitations avant le film fini"], bonne: 3, expl: "Ils permettent de suivre l'enchaînement des choix qui mène au point de vue d'auteur.", niv: 3 },
        { q: "Dans Entr'acte, on voit à l'écran des amis artistes de René Clair. Cela montre surtout :", choix: ["une production confiée à un grand studio américain de l'époque", "un film imposé par un producteur commercial", "une création collective, faite par une bande d'artistes", "une adaptation fidèle d'un roman célèbre"], bonne: 2, expl: "Le programme parle de l'œuvre « d'une bande », d'une création collective.", niv: 2 },
      ],
    },
    // ---------------------------------------------------------------- 5
    {
      chapitre: 'cine-5',
      fiche: `## Périodes et courants

### De quoi parle ce questionnement ?
- Pour raconter l'histoire du cinéma, on la découpe en **périodes** (le muet, le parlant…) et on regroupe des films en **courants** (l'expressionnisme, la Nouvelle Vague…).
- Le programme demande de savoir **reconnaître** ces périodes et courants, de **situer** les films étudiés, mais aussi d'**interroger** ces étiquettes : elles sont souvent données après coup et ne disent pas tout d'un film.

### Un courant, c'est quoi ?
- Un **courant** réunit des films d'une même époque qui partagent des traits de style, des thèmes, parfois des manifestes et des amitiés.
- On le définit avec plusieurs critères : **esthétiques** (lumière, décor, montage), **techniques**, **économiques** (petits budgets, tournage en extérieur), **historiques** (une guerre, une crise).
- Le nom est souvent donné par des **critiques**, parfois des années plus tard. Exemple : le mot « **film noir** » est employé par des critiques français à partir de 1946 pour des films américains.

### Les grands repères
- **1895** : premières projections payantes des frères **Lumière** à Paris. **Georges Méliès** invente des trucages et le spectacle de fiction.
- **Années 1920, avant-gardes françaises** : une **première avant-garde** (Louis Delluc, Abel Gance, Germaine Dulac, Jean Epstein) cherche un cinéma d'impressions et de rythme ; Gance tourne **La Roue** (1923) avec un montage très rapide. Une **seconde avant-garde**, liée à **Dada** et au **surréalisme**, refuse la logique et joue avec le hasard : Entr'acte de René Clair (1924), les films de Man Ray, **Un chien andalou** de Buñuel et Dalí (1929).
- **Dada** naît à Zurich en 1916 en réaction à la guerre ; André Breton publie le **Manifeste du surréalisme** en **1924**.
- **Expressionnisme allemand** : décors déformés, ombres immenses, personnages tourmentés. Exemples : **Le Cabinet du docteur Caligari** (Robert Wiene, 1920), **Nosferatu** (Murnau, 1922), **Metropolis** (Lang, 1927).
- **Cinéma soviétique** : le montage comme arme de pensée, avec **Le Cuirassé Potemkine** d'Eisenstein (1925).
- **1927** : **Le Chanteur de jazz** popularise le cinéma parlant.
- **Âge d'or des studios hollywoodiens** (années 1930 à 1950) : genres codifiés, stars sous contrat ; c'est le cadre de La Féline (1942).
- **Réalisme poétique** français à la fin des années 1930 : Marcel Carné, **Le Quai des brumes** (1938).
- **Néoréalisme italien** après la guerre : tournage dans la rue, acteurs non professionnels. Exemples : **Rome, ville ouverte** (Rossellini, 1945), **Le Voleur de bicyclette** (De Sica, 1948).
- **Nouvelle Vague** française : **Les Quatre Cents Coups** (Truffaut, 1959), **À bout de souffle** (Godard, 1960) ; caméra légère, tournage dans la rue, liberté du montage.

### Interroger les étiquettes
- Un cinéaste peut appartenir à un courant **sans s'y réduire**. Exemple : René Clair fait avec Entr'acte un film Dada, mais il invente déjà son propre style (poursuites, satire, rythme) et deviendra un cinéaste plutôt **classique** du cinéma parlant. Le programme pose la question : Clair, cinéaste Dada et surréaliste, ou classique ?
- Un film peut aussi **mélanger** plusieurs courants : La Féline emprunte à l'expressionnisme allemand dans un film de genre hollywoodien.

### Comment l'utiliser à l'écrit
- **Situer** le film : date, pays, contexte.
- **Reconnaître** des traits d'un courant dans l'extrait, avec des exemples précis.
- **Nuancer** : montrer ce qui, dans le film, dépasse ou contredit le courant.

### À retenir pour le bac
- Un courant se définit par plusieurs critères, et son nom est souvent donné après coup.
- Dates à savoir : 1895, 1916, 1924, 1927, années 1940 pour le néoréalisme, 1959-1960 pour la Nouvelle Vague.
- Entr'acte et Paris qui dort sont étudiés dans ce questionnement : savoir ce qu'est la seconde avant-garde.
- Toujours nuancer l'étiquette : un grand film ne se réduit pas à son courant.`,
      cartes: [
        { q: "Qu'est-ce qu'un courant cinématographique ?", r: "Un ensemble de films d'une même époque qui partagent un style, des thèmes, parfois des manifestes ou des amitiés entre cinéastes." },
        { q: "Pourquoi faut-il interroger les étiquettes de courant ?", r: "Elles sont souvent données après coup par des critiques et un cinéaste peut appartenir à un courant sans s'y réduire." },
        { q: "Que se passe-t-il en 1895 ?", r: "Les frères Lumière organisent à Paris les premières projections publiques et payantes du cinématographe." },
        { q: "Qu'apporte Georges Méliès ?", r: "Les trucages et le spectacle de fiction : il fait du cinéma un art de l'illusion." },
        { q: "Cite des cinéastes de la première avant-garde française.", r: "Louis Delluc, Abel Gance, Germaine Dulac, Jean Epstein, dans les années 1920." },
        { q: "Qu'est-ce que la seconde avant-garde française ?", r: "Des films des années 1920 liés à Dada et au surréalisme, qui refusent la logique : Entr'acte de René Clair, les films de Man Ray, Un chien andalou." },
        { q: "Où et quand naît Dada ?", r: "À Zurich, en 1916, en réaction à la Première Guerre mondiale." },
        { q: "Quand paraît le Manifeste du surréalisme ?", r: "En 1924, écrit par André Breton." },
        { q: "Cite trois films de l'expressionnisme allemand.", r: "Le Cabinet du docteur Caligari (1920), Nosferatu (1922), Metropolis (1927)." },
        { q: "Quel film popularise le parlant en 1927 ?", r: "Le Chanteur de jazz." },
        { q: "Quels traits définissent le néoréalisme italien ?", r: "Tournage dans la rue, acteurs souvent non professionnels, récits de la vie ordinaire après la guerre. Exemple : Le Voleur de bicyclette (1948)." },
        { q: "Quels films lancent la Nouvelle Vague ?", r: "Les Quatre Cents Coups de Truffaut (1959) et À bout de souffle de Godard (1960)." },
        { q: "D'où vient l'expression « film noir » ?", r: "De critiques français, à partir de 1946, pour désigner des films policiers américains sombres." },
        { q: "Quelle question le programme pose-t-il sur René Clair ?", r: "Est-il un cinéaste Dada et surréaliste, ou au fond un vrai classique ?" },
      ],
      quiz: [
        { q: "Les décors déformés et les ombres immenses du Cabinet du docteur Caligari (1920) relèvent :", choix: ["du néoréalisme italien", "du réalisme poétique", "de l'expressionnisme allemand", "de la Nouvelle Vague"], bonne: 2, expl: "Caligari est l'exemple type de l'expressionnisme allemand.", niv: 1 },
        { q: "En quelle année André Breton publie-t-il le Manifeste du surréalisme ?", choix: ["1924", "1916", "1919", "1920"], bonne: 0, expl: "1924, l'année d'Entr'acte. Dada est né en 1916, Un chien andalou date de 1929.", niv: 1 },
        { q: "Un film d'après-guerre est tourné dans les rues de Rome avec des acteurs non professionnels. Il se rattache :", choix: ["à l'expressionnisme allemand", "au néoréalisme italien", "au cinéma soviétique de montage", "à la seconde avant-garde"], bonne: 1, expl: "Le tournage en extérieur et les non-professionnels caractérisent le néoréalisme.", niv: 2 },
        { q: "Lequel de ces cinéastes appartient à la première avant-garde française ?", choix: ["Luis Buñuel", "Roberto Rossellini", "Jean-Luc Godard", "Germaine Dulac"], bonne: 3, expl: "Dulac, avec Delluc, Gance et Epstein, forme la première avant-garde des années 1920.", niv: 1 },
        { q: "Pourquoi dit-on que le nom d'un courant est souvent donné « après coup » ?", choix: ["Parce que des critiques le nomment, parfois des années plus tard", "Parce que les cinéastes signent un manifeste avant de tourner", "Parce que l'État décide du nom de chaque courant", "Parce que les films sont classés par leur date de sortie"], bonne: 0, expl: "Le mot « film noir » a été employé par des critiques français pour des films déjà sortis.", niv: 2 },
        { q: "Un film des années 1920 refuse toute logique, enchaîne des images absurdes et se moque des conventions. Il se rapproche :", choix: ["de la première avant-garde impressionniste", "du cinéma soviétique de propagande", "de Dada et du surréalisme", "du réalisme poétique français"], bonne: 2, expl: "Le refus de la logique et le goût du hasard caractérisent Dada et le surréalisme.", niv: 2 },
        { q: "Quelle affirmation sur René Clair est la plus juste ?", choix: ["Il a tourné surtout des films surréalistes pendant sa carrière", "Il est lié à Dada mais invente déjà son style", "Il est un cinéaste du néoréalisme italien", "Il refuse tout rythme et toute poursuite dans ses films"], bonne: 1, expl: "Le programme invite à le voir comme Dada et surréaliste sans s'y réduire, voire comme un classique.", niv: 3 },
        { q: "Les Quatre Cents Coups (1959) et À bout de souffle (1960) appartiennent à :", choix: ["la seconde avant-garde", "l'expressionnisme allemand", "le réalisme poétique", "la Nouvelle Vague"], bonne: 3, expl: "Truffaut et Godard lancent la Nouvelle Vague française.", niv: 1 },
        { q: "La Féline mêle des ombres expressionnistes et un film de genre hollywoodien. Cela montre que :", choix: ["les courants ne s'appliquent qu'aux films muets", "un film appartient d'abord au courant de son pays d'origine", "un film peut combiner plusieurs héritages", "l'expressionnisme est né aux États-Unis"], bonne: 2, expl: "Un même film peut croiser plusieurs courants : il faut nuancer l'étiquette.", niv: 3 },
        { q: "Quel film de 1925 est un sommet du montage soviétique ?", choix: ["Metropolis", "Le Cuirassé Potemkine", "Nosferatu", "Le Chanteur de jazz"], bonne: 1, expl: "Eisenstein fait du montage une arme de pensée dans Le Cuirassé Potemkine.", niv: 2 },
        { q: "Pour définir un courant, quel ensemble de critères est le plus complet ?", choix: ["La date de sortie, le pays et la langue des dialogues du film", "Le nombre d'entrées et les prix reçus", "La nationalité des acteurs principaux", "Le style, la technique, l'économie et l'histoire"], bonne: 3, expl: "Le programme demande de comprendre ce qui légitime la définition d'un courant : plusieurs critères réunis.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 6
    {
      chapitre: 'cine-6',
      fiche: `## Art et industrie

### De quoi parle ce questionnement ?
- Le cinéma est un **art**, mais un art qui coûte cher : il faut des équipes, du matériel, des salles. C'est aussi une **industrie**, qui cherche à gagner de l'argent.
- André Malraux termine son Esquisse d'une psychologie du cinéma par une phrase célèbre : « Par ailleurs, le cinéma est une industrie. »
- Le programme demande d'étudier les **tensions** entre création et production, sans opposer de façon simpliste l'art pur et le commerce.

### La chaîne économique du film
- La **production** : le **producteur** réunit l'argent, engage l'équipe et prend le risque financier.
- La **distribution** : le **distributeur** achète le droit de sortir le film, fabrique les copies, fait la publicité et place le film dans les salles.
- L'**exploitation** : l'**exploitant** gère la salle et vend les billets.
- Les autres diffusions (télévision, vidéo, plateformes) rapportent ensuite des recettes.

### Hollywood et le système des studios
- Des années 1920 à la fin des années 1940, quelques grands studios, les **Majors** (MGM, Paramount, Warner Bros., Fox, RKO…), contrôlent toute la chaîne : ils produisent, distribuent et possèdent des salles. C'est l'**intégration verticale**.
- Les acteurs, les réalisateurs et les scénaristes sont liés au studio par des **contrats** de longue durée. Le studio peut imposer un sujet, un titre, des acteurs, des coupes.
- En **1948**, la Cour suprême des États-Unis oblige les studios à vendre leurs salles (l'**arrêt Paramount**) : le système des studios commence à décliner.
- Les studios produisent des films chers (série A) et des **films de série B**, moins chers et plus courts, projetés en complément de programme. **La Féline** est une série B de la **RKO**, produite par Val Lewton.
- Le **final cut** est le droit de décider du montage définitif. À Hollywood, il appartient le plus souvent au producteur ou au studio, et rarement au réalisateur.

### Blockbusters et franchises
- Le **blockbuster** est une superproduction très coûteuse, sortie dans un grand nombre de salles en même temps avec une énorme publicité. **Les Dents de la mer** de Spielberg (1975) est souvent présenté comme le premier.
- Le **box-office** fait la loi : un échec peut ruiner un studio ou une carrière.
- Les **franchises** déclinent une même histoire en suites, séries, jeux et objets dérivés.

### Le modèle français
- En France, le **CNC** (créé en 1946) soutient la création : une taxe prélevée sur chaque billet vendu revient au cinéma sous forme d'aides. L'**avance sur recettes**, créée vers 1960, aide des films ambitieux.
- Les chaînes de télévision, et depuis 2021 les plateformes, doivent investir dans la création française.
- La France défend l'**exception culturelle** : la culture n'est pas une marchandise comme les autres.

### Le cas d'Irma Vep
- La série montre un tournage soumis à l'argent : un riche financier soutient le projet à condition que sa star devienne l'égérie d'une **publicité pour un parfum** de luxe. Le cinéma devient presque un faire-valoir pour une autre industrie.
- Mira, star de superproductions hollywoodiennes, vient en Europe chercher un projet plus personnel.
- La série pose la question : un « feuilleton » produit pour une chaîne peut-il être une œuvre d'art ?

### À retenir pour le bac
- Connaître la chaîne : production, distribution, exploitation.
- Studio system, Majors, série B, final cut, blockbuster : savoir définir et donner un exemple.
- Ne pas opposer simplement art et argent : une contrainte économique peut produire un chef-d'œuvre (La Féline).
- Irma Vep est étudiée dans ce questionnement en 2027.`,
      cartes: [
        { q: "Quelle phrase de Malraux résume ce questionnement ?", r: "« Par ailleurs, le cinéma est une industrie », à la fin de son Esquisse d'une psychologie du cinéma." },
        { q: "Quelles sont les trois étapes de la chaîne économique du film ?", r: "La production, la distribution et l'exploitation en salles." },
        { q: "Quel est le rôle du distributeur ?", r: "Il achète le droit de sortir le film, fait la publicité, fournit les copies et place le film dans les salles." },
        { q: "Que sont les Majors ?", r: "Les grands studios hollywoodiens (MGM, Paramount, Warner Bros., Fox, RKO…) qui dominaient la production et la distribution." },
        { q: "Qu'est-ce que l'intégration verticale ?", r: "Une même entreprise contrôle toute la chaîne : production, distribution et salles. C'était le cas des Majors." },
        { q: "Qu'a changé l'arrêt Paramount de 1948 ?", r: "La Cour suprême des États-Unis a obligé les studios à vendre leurs salles : début du déclin du système des studios." },
        { q: "Qu'est-ce qu'un film de série B ?", r: "Un film moins cher et plus court que les grosses productions, projeté en complément de programme. La Féline en est un." },
        { q: "Qu'est-ce que le final cut ?", r: "Le droit de décider du montage définitif d'un film. À Hollywood, il revient le plus souvent au producteur ou au studio." },
        { q: "Qu'est-ce qu'un blockbuster ?", r: "Une superproduction très coûteuse, sortie dans beaucoup de salles en même temps avec une grosse publicité. Exemple : Les Dents de la mer (1975)." },
        { q: "Qu'est-ce qu'une franchise ?", r: "Un univers décliné en suites, séries, jeux et produits dérivés." },
        { q: "Comment le CNC finance-t-il le cinéma français ?", r: "Une taxe prélevée sur les billets vendus revient au cinéma sous forme d'aides à la production, à la distribution et aux salles." },
        { q: "Qu'est-ce que l'avance sur recettes ?", r: "Une aide du CNC, créée vers 1960, accordée avant le tournage à des films ambitieux, remboursable sur les recettes." },
        { q: "Que signifie l'exception culturelle ?", r: "L'idée défendue par la France que la culture n'est pas une marchandise comme les autres et peut être protégée et aidée." },
        { q: "Comment Irma Vep montre-t-elle le poids de l'argent ?", r: "Un financier soutient le tournage à condition que la star tourne une publicité pour un parfum de luxe." },
      ],
      quiz: [
        { q: "L'entreprise qui achète le droit de sortir un film, fait sa publicité et le place dans les salles est :", choix: ["le producteur", "l'exploitant", "le distributeur", "le CNC"], bonne: 2, expl: "Le distributeur est entre le producteur et l'exploitant de salle.", niv: 1 },
        { q: "Dans les années 1930, un studio produit des films, les distribue et possède des salles. C'est :", choix: ["l'intégration verticale", "l'exception culturelle", "la politique des auteurs", "la chronologie des médias"], bonne: 0, expl: "Contrôler toute la chaîne, de la production aux salles, c'est l'intégration verticale.", niv: 2 },
        { q: "Que décide l'arrêt Paramount de 1948 ?", choix: ["Il crée le premier festival de Cannes", "Il impose le cinéma parlant aux studios", "Il interdit les films de série B aux États-Unis", "Il oblige les studios à vendre leurs salles"], bonne: 3, expl: "La Cour suprême met fin à l'intégration verticale des Majors.", niv: 1 },
        { q: "La Féline (1942) est une production de la RKO de type :", choix: ["superproduction en couleurs", "série B à petit budget", "film indépendant sans studio", "coproduction avec la France"], bonne: 1, expl: "C'est une série B de l'unité de Val Lewton, au budget limité.", niv: 1 },
        { q: "Un studio hollywoodien remonte un film contre l'avis du réalisateur. C'est possible car il détient :", choix: ["l'avance sur recettes", "le droit de distribution européen", "le final cut", "la carte de presse"], bonne: 2, expl: "Le final cut, droit au montage définitif, appartient souvent au studio à Hollywood.", niv: 2 },
        { q: "Les Dents de la mer (1975) est souvent présenté comme le premier :", choix: ["film de série B", "film de la Nouvelle Vague", "western spaghetti", "blockbuster"], bonne: 3, expl: "Sortie massive, grosse publicité, énormes recettes : le modèle du blockbuster.", niv: 1 },
        { q: "En France, une taxe prélevée sur chaque billet vendu sert surtout à :", choix: ["financer des aides du CNC au cinéma", "payer directement les acteurs du film", "rembourser les spectateurs déçus", "financer les studios américains"], bonne: 0, expl: "Le compte de soutien du CNC redistribue cet argent à la production, à la distribution et aux salles.", niv: 2 },
        { q: "Dans Irma Vep, un financier soutient le tournage si la star tourne une publicité pour un parfum. Cela montre :", choix: ["que la série refuse tout financement privé", "que le cinéma sert de vitrine à une autre industrie", "que l'État paie l'essentiel des tournages de séries en France", "que la publicité est interdite à la télévision"], bonne: 1, expl: "Le programme souligne que le cinéma devient presque un faire-valoir pour l'industrie du luxe.", niv: 2 },
        { q: "Pourquoi ne faut-il pas opposer simplement art et industrie ?", choix: ["Parce qu'une contrainte d'argent peut faire naître un style", "Parce que les films commerciaux sont souvent des chefs-d'œuvre", "Parce que l'argent influence peu les choix de mise en scène", "Parce que les studios laissent en général le final cut au réalisateur"], bonne: 0, expl: "La Féline montre qu'un petit budget peut produire un style original et durable.", niv: 3 },
        { q: "Que défend la France sous le nom d'exception culturelle ?", choix: ["L'interdiction des films étrangers dans les salles", "La gratuité des places de cinéma pour les moins de 18 ans", "L'idée que la culture n'est pas une marchandise", "Le droit des studios à remonter les films"], bonne: 2, expl: "La culture peut être protégée et aidée, à la différence des autres produits.", niv: 2 },
        { q: "Mira, star de superproductions, accepte un projet européen plus modeste. Ce choix illustre :", choix: ["l'arrêt Paramount de 1948", "le désir d'art face à la logique du box-office", "la naissance du cinéma parlant", "l'obligation d'investir des plateformes"], bonne: 1, expl: "La série joue sur la tension entre carrière commerciale et désir d'art.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 7
    {
      chapitre: 'cine-7',
      fiche: `## Entr'acte (1924) et Paris qui dort (1925) de René Clair

Œuvre renouvelée du programme limitatif de 2027. Les deux films sont étudiés **ensemble**, dans les questionnements **périodes et courants** et **un cinéaste au travail**.

### René Clair, un jeune homme d'après-guerre
- **René Clair** (de son vrai nom René Chomette) naît à Paris en **1898**. Ambulancier en 1917, il est marqué, comme toute sa génération, par l'absurdité de la Grande Guerre.
- Il apprend la réalisation en 1922 et dirige la rubrique cinéma d'une revue de théâtre. Il est attiré moins par la première avant-garde, jugée trop formaliste, que par l'esprit **Dada** : la dérision, le burlesque, les corps pris dans une mécanique folle. Comme beaucoup de jeunes gens de l'époque, il admire **Chaplin**.
- Plus tard, il devient un grand cinéaste du parlant (**Sous les toits de Paris**, 1930 ; **Le Million**, 1931 ; **À nous la liberté**, 1931). En 1960, il est le premier cinéaste élu à l'**Académie française**.

### Entr'acte (1924) : un film Dada
- **Commande** : le film est fait pour être projeté à l'**entracte** du ballet **Relâche**, de **Francis Picabia**, sur une musique d'**Erik Satie**, par les Ballets suédois au **Théâtre des Champs-Élysées**. Picabia en écrit l'idée de départ ; Satie compose une musique pour accompagner les images.
- **Des artistes à l'écran** : Picabia et Satie chargent un canon sur un toit de Paris ; **Man Ray** et **Marcel Duchamp** jouent aux échecs. Le film est l'œuvre d'une **bande d'amis**.
- **Des images libres** : une danseuse filmée par-dessous, à travers une plaque de verre, se révèle être un homme barbu ; des superpositions, des inversions, des gros plans absurdes.
- **Un enterrement qui s'emballe** : un corbillard tiré par un chameau, suivi d'un cortège filmé au ralenti, part soudain à toute vitesse. La procession devient une **poursuite** de plus en plus **accélérée**, jusqu'aux montagnes russes d'un parc d'attractions. Le cercueil tombe, le mort en sort, fait disparaître tout le monde d'un coup de baguette, puis disparaît lui-même.
- Le programme résume : « une accélération continue à réveiller un mort ». Le rire naît du **rythme** et du **montage** de plus en plus rapide.
- Dada se veut anti-artistique et contestataire : Entr'acte refuse le récit logique et se moque des rites sociaux (l'enterrement, le deuil, la bourgeoisie).

### Paris qui dort (1925) : le temps arrêté
- **L'histoire** : Albert, gardien de la **tour Eiffel**, se réveille un matin et découvre Paris **figé** : un savant a paralysé la ville avec un rayon. Seules quelques personnes, restées en hauteur (lui en haut de la tour, les passagers d'un avion), y échappent.
- Le petit groupe profite de la ville immobile comme d'un **terrain de jeu** : on se sert dans les caisses, on vit sans règles. Puis viennent l'ennui et les disputes.
- **Les procédés** : l'**arrêt sur image** fige les passants, puis le ralenti, l'accéléré et le retour en arrière font repartir la ville. Le temps du film devient l'objet même du film.

### Deux films qui « font système »
- Entr'acte **accélère** jusqu'à la frénésie ; Paris qui dort **arrête** et ralentit. Les deux jouent avec le **temps** grâce à la machine cinéma.
- Ils sont proches de Dada et du **surréalisme** (Manifeste de 1924), mais ne s'y réduisent pas : Clair y invente déjà ses motifs, la **poursuite**, la **brèche fantastique**, la **satire**, le **rythme**.
- Chez Man Ray, l'avant-garde travaille la texture de l'image ; chez Clair, c'est le **temps** qui est travaillé.
- La scène des montagnes russes d'Entr'acte reprend une célèbre scène de **montage alterné** rapide de **La Roue** d'Abel Gance (1923). Pour Clair, il n'y a pas de désordre réussi sans une **maîtrise** formelle très rigoureuse.
- D'où la question du programme : René Clair, cinéaste Dada et surréaliste, ou vrai **classique** ?

### À retenir pour le bac
- Entr'acte : 1924, entracte du ballet Relâche, Picabia, Satie, Théâtre des Champs-Élysées, poursuite accélérée.
- Paris qui dort : 1925, Paris figé par un rayon, gardien de la tour Eiffel, arrêt sur image.
- L'idée clé : les deux films prennent le temps pour sujet, l'un l'accélère, l'autre l'arrête.
- Nuancer l'étiquette Dada : Clair maîtrise un rythme très construit.`,
      cartes: [
        { q: "Quel est le vrai nom de René Clair ?", r: "René Chomette. Il naît à Paris en 1898." },
        { q: "Pour quel spectacle Entr'acte a-t-il été fait ?", r: "Pour être projeté à l'entracte du ballet Relâche de Francis Picabia, en 1924, au Théâtre des Champs-Élysées." },
        { q: "Qui a composé la musique d'Entr'acte ?", r: "Erik Satie, qui compose aussi la musique du ballet Relâche." },
        { q: "Quels artistes apparaissent dans Entr'acte ?", r: "Notamment Picabia et Satie, qui chargent un canon sur un toit, et Man Ray et Marcel Duchamp, qui jouent aux échecs." },
        { q: "Que devient l'enterrement dans Entr'acte ?", r: "Le corbillard, tiré par un chameau, part à toute vitesse : le cortège devient une poursuite de plus en plus accélérée jusqu'aux montagnes russes." },
        { q: "Comment finit Entr'acte ?", r: "Le cercueil tombe, le mort en sort, fait disparaître les poursuivants d'un coup de baguette, puis disparaît lui-même." },
        { q: "Quelle formule du programme résume Entr'acte ?", r: "« Une accélération continue à réveiller un mort »." },
        { q: "Quelle est l'histoire de Paris qui dort ?", r: "Un savant paralyse Paris avec un rayon ; le gardien de la tour Eiffel et quelques passagers d'un avion, restés en hauteur, découvrent la ville figée." },
        { q: "Quel procédé fige Paris dans Paris qui dort ?", r: "L'arrêt sur image : les passants restent immobiles au milieu d'un geste." },
        { q: "Quel point commun entre les deux films ?", r: "Le temps est leur sujet : Entr'acte l'accélère jusqu'à la frénésie, Paris qui dort l'arrête et le ralentit." },
        { q: "Quelle scène d'Entr'acte reprend La Roue d'Abel Gance ?", r: "La scène des montagnes russes, au montage alterné très rapide." },
        { q: "Quels motifs de Clair apparaissent déjà dans ces films ?", r: "La poursuite, la brèche fantastique, la satire et surtout le rythme." },
        { q: "Quelle question le programme pose-t-il sur Clair ?", r: "Est-il un cinéaste Dada et surréaliste, ou au fond un vrai classique ?" },
        { q: "Quels films parlants rendent Clair célèbre ?", r: "Sous les toits de Paris (1930), Le Million (1931), À nous la liberté (1931)." },
        { q: "Quelle distinction reçoit René Clair en 1960 ?", r: "Il est le premier cinéaste élu à l'Académie française." },
        { q: "Dans quels questionnements ces films sont-ils étudiés ?", r: "Périodes et courants, et un cinéaste au travail." },
      ],
      quiz: [
        { q: "Entr'acte a été projeté pour la première fois :", choix: ["à l'entracte d'un ballet de Picabia", "en ouverture du festival de Cannes", "à la fin d'une pièce de Jean Cocteau", "dans une salle de cinéma de quartier"], bonne: 0, expl: "Le film accompagne le ballet Relâche, au Théâtre des Champs-Élysées, en 1924.", niv: 1 },
        { q: "Qui a composé la musique d'Entr'acte ?", choix: ["Darius Milhaud", "Maurice Ravel", "Erik Satie", "Arthur Honegger"], bonne: 2, expl: "Satie compose la musique du ballet Relâche et celle du film.", niv: 1 },
        { q: "Dans Entr'acte, que fait le cortège de l'enterrement ?", choix: ["Il se fige au milieu d'une rue de Paris", "Il entre dans une église pour une longue cérémonie", "Il marche lentement jusqu'à un cimetière", "Il accélère jusqu'à devenir une folle poursuite"], bonne: 3, expl: "La procession, d'abord ralentie, s'emballe jusqu'aux montagnes russes.", niv: 2 },
        { q: "Dans Paris qui dort, pourquoi le gardien de la tour Eiffel échappe-t-il au sommeil de la ville ?", choix: ["Il était en hauteur, hors d'atteinte", "Il a bu une potion inventée par le savant", "Il dormait déjà quand le rayon a frappé", "Il travaillait de nuit dans une cave"], bonne: 0, expl: "Seuls ceux qui étaient en hauteur, lui en haut de la tour et les passagers d'un avion, y échappent.", niv: 2 },
        { q: "Quel procédé montre les Parisiens figés au milieu d'un geste ?", choix: ["Le fondu enchaîné", "L'arrêt sur image", "Le travelling avant", "La surimpression"], bonne: 1, expl: "L'image se fige : c'est l'arrêt sur image.", niv: 1 },
        { q: "Quel point commun le programme voit-il entre Entr'acte et Paris qui dort ?", choix: ["Ils adaptent un roman de science-fiction", "Ils sont parlants et en couleur", "Ils sont tournés à Hollywood par la RKO", "Ils prennent tous deux le temps pour sujet"], bonne: 3, expl: "L'un accélère le temps jusqu'à la frénésie, l'autre l'arrête et le ralentit.", niv: 3 },
        { q: "Quels artistes jouent aux échecs sur un toit dans Entr'acte ?", choix: ["Man Ray et Marcel Duchamp", "André Breton et Louis Aragon", "Abel Gance et Jean Epstein", "Picasso et Fernand Léger"], bonne: 0, expl: "Man Ray et Duchamp apparaissent ; Picabia et Satie chargent un canon.", niv: 2 },
        { q: "La scène des montagnes russes d'Entr'acte reprend une scène de montage rapide de :", choix: ["Nosferatu de Murnau", "Le Cuirassé Potemkine d'Eisenstein", "La Roue d'Abel Gance", "Un chien andalou de Buñuel"], bonne: 2, expl: "Le programme parle d'un remake inavoué d'une scène de montage alterné de La Roue (1923).", niv: 2 },
        { q: "Pourquoi peut-on nuancer l'étiquette « cinéaste Dada » de René Clair ?", choix: ["Parce qu'il a rencontré les artistes Dada après ses films muets", "Parce que son désordre repose sur un rythme maîtrisé", "Parce qu'Entr'acte suit une histoire logique et réaliste", "Parce qu'il a tourné ces films en Allemagne"], bonne: 1, expl: "Pour le programme, il n'y a pas de déconstruction sans maîtrise rigoureuse de la forme.", niv: 3 },
        { q: "Dans ces deux films, l'avant-garde de Clair se distingue de celle de Man Ray car elle travaille surtout :", choix: ["la couleur", "le son synchrone", "la texture de l'image", "le temps"], bonne: 3, expl: "Le programme oppose la texture de l'image chez Man Ray et le temps chez Clair.", niv: 3 },
        { q: "Quel film de René Clair est un film parlant de 1931 ?", choix: ["Paris qui dort", "Le Million", "Entr'acte", "La Roue"], bonne: 1, expl: "Le Million et À nous la liberté datent de 1931 ; Paris qui dort et Entr'acte sont muets.", niv: 2 },
        { q: "Le mort qui sort de son cercueil et fait disparaître tout le monde montre surtout :", choix: ["la dérision des rites sociaux, typique de Dada", "le respect du deuil dans la tradition française", "l'influence du néoréalisme italien", "la volonté de faire un film d'horreur"], bonne: 0, expl: "Dada se moque des conventions bourgeoises, ici l'enterrement.", niv: 2 },
      ],
    },
    // ---------------------------------------------------------------- 8
    {
      chapitre: 'cine-8',
      fiche: `## La Féline de Jacques Tourneur (1942)

Titre original : **Cat People**. Inscrit au programme limitatif pour les sessions 2026 et 2027, dans les questionnements **transferts et circulations culturels** et **un cinéaste au travail**.

### Le contexte
- **Jacques Tourneur** naît à Paris en **1904**. Fils du réalisateur Maurice Tourneur, il est d'abord son assistant et son monteur, tourne six comédies en France, puis s'installe à **Hollywood** en **1934**.
- Le studio **RKO** veut relancer le film d'horreur, dont l'âge d'or date des années 1930 (Dracula, Frankenstein, La Momie). Il confie une petite unité au producteur **Val Lewton** : **petits budgets**, films courts, titres souvent imposés.
- La Féline dure environ **73 minutes**. Elle est jouée par l'actrice française **Simone Simon** (Irena), avec Kent Smith (Oliver), Jane Randolph (Alice) et Tom Conway (le docteur Judd). L'image est de **Nicholas Musuraca**, qui fait renaître aux États-Unis le style expressionniste.
- Le film a un grand succès et lance une série : Vaudou (1943), L'Homme-léopard (1943).

### L'histoire
- À New York, **Irena Dubrovna**, jeune dessinatrice venue de **Serbie**, rencontre Oliver devant la cage d'une **panthère** au zoo de Central Park. Ils se marient.
- Irena croit descendre d'une lignée de femmes de son village qui se changent en **panthères** quand la jalousie ou le désir les saisit. Elle refuse le contact physique.
- Oliver se rapproche de sa collègue **Alice**. Un psychiatre, le **docteur Judd**, tente de guérir Irena.
- La peur monte jusqu'à la mort du docteur et à la fin d'Irena au zoo, près de la cage de la panthère.

### Les scènes célèbres
- **La marche nocturne** : Alice longe Central Park ; on entend des pas, puis plus rien ; la tension monte jusqu'au freinage brutal d'un **bus** qui la fait sursauter, ainsi que le spectateur. Ce procédé de sursaut est resté célèbre.
- **La piscine** : Alice nage seule dans une piscine en sous-sol ; on voit des **ombres** sur les murs, on entend des grognements, mais on ne voit jamais la bête.
- **La scène du mariage** : au restaurant, une femme à l'allure de chat s'adresse à Irena en serbe et l'appelle « ma sœur ».
- Des **indices** reviennent : la panthère qui tourne dans sa cage, le chaton qui crache, les oiseaux affolés de l'animalerie, la panthère du paravent, la baignoire à pattes de lion.

### Une écriture de la suggestion
- Tourneur ne **montre jamais** vraiment la créature : la peur naît de l'**ombre**, du **hors-champ** et du **son**. Il inverse l'ordre habituel : ce n'est pas la lumière qui s'impose, c'est l'ombre qui envahit le visible.
- Le film hésite entre deux explications : une malédiction réelle ou un trouble que la **psychanalyse** pourrait expliquer (le carton d'ouverture cite le docteur Judd). Le spectateur ne sait pas s'il doit croire Irena : c'est le principe du **fantastique**.
- Le film alterne moments d'inquiétude et moments rassurants (la romance, les explications) : une construction en **point-contrepoint**.

### Transferts et circulations
- Un cinéaste français, une actrice française, une héroïne serbe, un style venu de l'expressionnisme allemand, dans un film de genre hollywoodien tourné à New York : La Féline est un exemple d'**hybridation**.
- Le film a inspiré des générations de cinéastes de la peur, de **Brian De Palma** à **Kiyoshi Kurosawa**, et a connu un remake de Paul Schrader en 1982.
- Le programme invite à le rapprocher d'**Irma Vep** : la femme-panthère et la vampire au collant noir à la silhouette féline, deux figures de l'invisible et du caché.

### À retenir pour le bac
- Une série B de la RKO, produite par Val Lewton : la contrainte de budget devient un style.
- La suggestion : ombre, hors-champ, son ; la créature n'est jamais clairement montrée.
- Savoir analyser la piscine et la marche nocturne, scènes très probables en extrait.
- Le fantastique repose sur l'hésitation entre explication surnaturelle et explication rationnelle.`,
      cartes: [
        { q: "Quel est le titre original de La Féline ?", r: "Cat People (1942)." },
        { q: "Qui produit La Féline à la RKO ?", r: "Val Lewton, à la tête d'une petite unité de films à petit budget." },
        { q: "Qui joue Irena dans La Féline ?", r: "L'actrice française Simone Simon." },
        { q: "Qui signe l'image de La Féline ?", r: "Nicholas Musuraca, directeur de la photographie, qui fait renaître le style expressionniste aux États-Unis." },
        { q: "D'où vient Irena et que croit-elle ?", r: "De Serbie. Elle croit descendre de femmes qui se changent en panthères sous l'effet de la jalousie ou du désir." },
        { q: "Où Irena et Oliver se rencontrent-ils ?", r: "Devant la cage d'une panthère, au zoo de Central Park, à New York." },
        { q: "Que se passe-t-il dans la scène de la marche nocturne ?", r: "Alice longe Central Park, on entend des pas puis le silence, et le freinage brutal d'un bus la fait sursauter avec le spectateur." },
        { q: "Pourquoi la scène de la piscine fait-elle peur ?", r: "On voit des ombres sur les murs et on entend des grognements, mais la bête n'est jamais montrée." },
        { q: "Que se passe-t-il au repas de mariage ?", r: "Une femme à l'allure de chat s'adresse à Irena en serbe et l'appelle « ma sœur »." },
        { q: "Quelle est l'écriture propre à Tourneur dans ce film ?", r: "La suggestion : l'ombre, le hors-champ et le son font exister la menace sans la montrer." },
        { q: "Quelles deux explications le film laisse-t-il ouvertes ?", r: "Une malédiction surnaturelle ou un trouble psychique que la psychanalyse du docteur Judd prétend expliquer." },
        { q: "Qu'est-ce que le fantastique ?", r: "Un récit qui fait hésiter le spectateur entre une explication surnaturelle et une explication rationnelle." },
        { q: "Qu'est-ce que la construction en point-contrepoint du film ?", r: "Chaque moment d'inquiétude est suivi d'un élément rassurant (romance, explication), ce qui rend la peur plus sournoise." },
        { q: "Pourquoi La Féline relève-t-il des transferts culturels ?", r: "Un cinéaste et une actrice français, une héroïne serbe, un style expressionniste allemand dans un film hollywoodien : une hybridation." },
        { q: "Quels cinéastes ont été marqués par La Féline ?", r: "Le programme cite Brian De Palma et Kiyoshi Kurosawa ; Paul Schrader en a tourné un remake en 1982." },
        { q: "Combien de temps dure environ La Féline ?", r: "Environ 73 minutes, une durée courte typique de la série B." },
      ],
      quiz: [
        { q: "Quel producteur dirige l'unité de la RKO qui fait La Féline ?", choix: ["David O. Selznick", "Val Lewton", "Irving Thalberg", "Orson Welles"], bonne: 1, expl: "Val Lewton produit une série de films de peur à petit budget pour la RKO.", niv: 1 },
        { q: "D'où vient Irena, l'héroïne de La Féline ?", choix: ["De Roumanie", "De Hongrie", "De Serbie", "De Pologne"], bonne: 2, expl: "Irena Dubrovna vient de Serbie, comme la légende de son village.", niv: 1 },
        { q: "Dans la scène de la piscine, comment la menace est-elle rendue ?", choix: ["Par des ombres et des grognements, sans jamais montrer la bête", "Par un gros plan sur la panthère qui attaque Alice dans l'eau", "Par un effet spécial montrant la métamorphose", "Par la voix off d'un narrateur inquiet"], bonne: 0, expl: "Tout passe par l'ombre et le son ; la bête n'est jamais clairement montrée.", niv: 2 },
        { q: "Dans la marche nocturne, le sursaut final du spectateur vient :", choix: ["du rugissement de la panthère dans le cadre", "d'un cri d'Alice filmé en très gros plan", "d'un coup de feu tiré par Oliver", "du freinage brutal d'un bus qui surgit"], bonne: 3, expl: "La tension accumulée se décharge sur un bruit ordinaire : le bus.", niv: 2 },
        { q: "Pourquoi Tourneur ne montre-t-il presque jamais la créature ?", choix: ["Parce que la censure américaine interdisait de filmer des animaux sauvages", "Parce que la suggestion fait travailler l'imagination", "Parce que l'actrice refusait de porter un costume", "Parce que le film devait être projeté sans lumière"], bonne: 1, expl: "Le petit budget et le choix de la suggestion font naître une peur plus forte.", niv: 3 },
        { q: "Le carton d'ouverture qui cite le docteur Judd place le film sous l'autorité :", choix: ["de la religion", "de la police", "de la psychanalyse", "de la presse"], bonne: 2, expl: "La psychanalyse propose une explication rationnelle au mal d'Irena.", niv: 2 },
        { q: "Le spectateur hésite entre une malédiction réelle et un trouble psychique. C'est le propre :", choix: ["du fantastique", "du burlesque", "du néoréalisme", "du mélodrame"], bonne: 0, expl: "Le fantastique repose sur cette hésitation entre surnaturel et rationnel.", niv: 2 },
        { q: "Qui signe la lumière très contrastée de La Féline ?", choix: ["Gregg Toland", "Karl Freund", "Maurice Tourneur", "Nicholas Musuraca"], bonne: 3, expl: "Musuraca est le directeur de la photographie du film.", niv: 1 },
        { q: "Pourquoi La Féline est-il un bon exemple d'hybridation culturelle ?", choix: ["Parce qu'il a été tourné en Serbie avec une équipe venue d'Hollywood", "Parce qu'il croise l'Europe et le cinéma de genre américain", "Parce qu'il est la copie exacte d'un film allemand", "Parce qu'il a été produit par la France et l'Italie"], bonne: 1, expl: "Cinéaste et actrice français, héroïne serbe, style expressionniste, studio américain.", niv: 3 },
        { q: "Où Irena et Oliver se rencontrent-ils au début du film ?", choix: ["Dans un restaurant serbe", "Devant une panthère, au zoo", "Dans le bureau d'un psychiatre", "Au bord d'une piscine"], bonne: 1, expl: "Irena dessine la panthère au zoo de Central Park quand Oliver l'aborde.", niv: 2 },
        { q: "Quelle affirmation sur la construction en point-contrepoint est juste ?", choix: ["Chaque moment inquiétant est suivi d'un apaisement", "Le film alterne scènes muettes et scènes parlantes", "Irena et Alice se partagent l'écran à égalité dans chaque scène", "La musique joue le contraire de ce que montre l'image"], bonne: 0, expl: "Le programme décrit cette alternance d'inquiétude et de réassurance.", niv: 3 },
        { q: "Avec quelle autre œuvre du programme le texte officiel invite-t-il à rapprocher La Féline ?", choix: ["Paris qui dort, pour son Paris figé", "Entr'acte, pour sa poursuite finale", "Irma Vep, pour sa vampire féline", "La Roue, pour son montage rapide"], bonne: 2, expl: "Femme-panthère et vampire au collant noir : deux figures de l'invisible et du caché.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 9
    {
      chapitre: 'cine-9',
      fiche: `## Irma Vep d'Olivier Assayas (mini-série, 2022, épisodes 1 à 3)

Inscrite au programme limitatif pour les sessions 2026 et 2027, dans les questionnements **un cinéaste au travail** et **art et industrie**. Seuls les **épisodes 1, 2 et 3** sont au programme : ils forment un arc complet autour de l'arrivée de Mira à Paris.

### Une œuvre qui se reprend elle-même
- **1915-1916** : **Louis Feuillade** tourne **Les Vampires**, feuilleton muet en dix épisodes sur une bande de criminels. L'actrice **Musidora** y joue **Irma Vep**, voleuse en collant noir ; son nom est l'anagramme de « vampire ».
- **1996** : **Olivier Assayas** tourne le film **Irma Vep**, avec **Maggie Cheung**, star de Hong Kong : un réalisateur français, René Vidal, veut refaire Les Vampires.
- **2022** : Assayas reprend son propre film en **mini-série de huit épisodes** pour la chaîne américaine **HBO**. On y suit **René Vidal** (joué par Vincent Macaigne), qui tourne une série d'après Les Vampires, et **Mira**, star américaine jouée par **Alicia Vikander**.
- Le dialogue entre la série de 2022 et le film de 1996 est, pour le programme, le cœur du dispositif : René est hanté par son ancien film et par son ex-femme, **Jade Lee**, l'actrice de ce film.

### Ce que racontent les épisodes 1 à 3
- Mira, habituée aux grosses productions hollywoodiennes, arrive à Paris pour jouer Irma Vep. Elle cherche une parenthèse, un projet qui redonne du sens à sa carrière et à sa vie.
- Elle est en **décalage** : décalage horaire, culturel, professionnel. Son regard neuf permet de découvrir le milieu du cinéma parisien.
- Autour d'elle s'entremêlent de nombreuses intrigues : un financier qui veut qu'elle soit l'égérie d'un **parfum**, un acteur allemand dépendant à la drogue, un jeune premier qui fait des histoires, des assistants, des agents, d'anciennes amours.
- La série insère des images des **Vampires** de Feuillade et des scènes du tournage dans le style du muet.

### Un cinéaste au travail
- La série est une **mise en abyme** : elle montre le tournage d'une série, elle-même tournée par une série. René est un **double** d'Assayas.
- On voit les étapes et les accidents d'un tournage : répétitions, essais de costumes, scènes ratées, caprices, angoisses du réalisateur.
- Le programme dit qu'on peut voir Irma Vep à la fois comme un documentaire sur son propre tournage, un carnet de création plein d'humour, une déclaration d'amour au cinéma et une sorte de « conseils à un jeune cinéaste ».
- Comparaison utile : **La Nuit américaine** de Truffaut (1973) suit aussi un tournage, mais le format long de la série donne plus d'ampleur et de variété de tons.

### Art et industrie
- Dans un épisode, un **médecin** chargé par l'assurance d'examiner René parle de « **feuilleton** », alors que René défend qu'il s'agit d'un « **film** », simplement plus long. Question posée : ce qui fait la valeur d'une œuvre, est-ce son intention, son format, sa diffusion, son public ?
- Assayas connaît bien cette question : son **Carlos** (2010) existe en version longue en trois épisodes pour la télévision et en version courte pour les salles.
- Le financier qui soutient le tournage pour une publicité de luxe montre que le cinéma peut devenir un faire-valoir pour une autre industrie. Le programme rappelle la phrase de Malraux : le cinéma est « par ailleurs » une industrie.
- Le nom de **Mira** évoque à la fois le « merveilleux » et le « regard ».

### À retenir pour le bac
- Trois étapes : Les Vampires (1915-1916), Irma Vep le film (1996), Irma Vep la série HBO (2022).
- Mise en abyme : René Vidal est un double d'Assayas qui tourne une série dans la série.
- Le débat « film » contre « feuilleton » est la porte d'entrée vers « art et industrie ».
- Ne pas confondre Musidora (1915), Maggie Cheung (1996) et Alicia Vikander (2022).`,
      cartes: [
        { q: "Qui a tourné Les Vampires, et sous quelle forme ?", r: "Louis Feuillade, en 1915-1916 : un feuilleton muet en dix épisodes." },
        { q: "Que signifie le nom Irma Vep ?", r: "C'est l'anagramme de « vampire ». Irma Vep est une voleuse en collant noir de la bande des Vampires." },
        { q: "Qui jouait Irma Vep chez Feuillade ?", r: "Musidora." },
        { q: "Qui jouait dans le film Irma Vep de 1996 ?", r: "Maggie Cheung, star de Hong Kong, sous la direction d'Olivier Assayas." },
        { q: "Combien d'épisodes compte la série de 2022, et lesquels sont au programme ?", r: "Huit épisodes pour HBO ; seuls les épisodes 1, 2 et 3 sont au programme." },
        { q: "Qui joue Mira dans la série ?", r: "Alicia Vikander. Mira est une star américaine venue jouer Irma Vep à Paris." },
        { q: "Qui est René Vidal ?", r: "Le réalisateur qui tourne la série d'après Les Vampires ; un double d'Olivier Assayas." },
        { q: "Qui est Jade Lee ?", r: "L'ex-femme de René et l'actrice de son ancien film ; un souvenir qui le hante." },
        { q: "En quoi Mira est-elle en décalage ?", r: "Décalage horaire, culturel, personnel et professionnel : son regard neuf fait découvrir le milieu du cinéma parisien." },
        { q: "Pourquoi Irma Vep est-elle une mise en abyme ?", r: "La série montre le tournage d'une série tirée des Vampires ; l'œuvre se reflète dans l'œuvre qu'elle raconte." },
        { q: "Quel débat oppose René et le médecin de l'assurance ?", r: "Le médecin parle de « feuilleton », René défend que c'est un « film », simplement plus long." },
        { q: "Quel autre projet d'Assayas existe en deux formats ?", r: "Carlos (2010) : une version longue en trois épisodes pour la télévision et une version courte pour les salles." },
        { q: "Quel rôle joue le financier dans la série ?", r: "Il soutient le tournage à condition que la star devienne l'égérie d'une publicité pour un parfum de luxe." },
        { q: "Quelle œuvre de Truffaut peut être comparée à Irma Vep ?", r: "La Nuit américaine (1973), qui suit elle aussi un tournage." },
        { q: "Que suggère le nom de Mira ?", r: "Le « merveilleux » et le « regard »." },
        { q: "Dans quels questionnements Irma Vep est-elle étudiée ?", r: "Un cinéaste au travail, et art et industrie." },
      ],
      quiz: [
        { q: "Pour quelle chaîne Olivier Assayas a-t-il réalisé la série Irma Vep ?", choix: ["Canal+", "Arte", "Netflix", "HBO"], bonne: 3, expl: "C'est une mini-série de huit épisodes pour la chaîne américaine HBO.", niv: 1 },
        { q: "Quelle actrice joue Mira, la star américaine, dans la série de 2022 ?", choix: ["Maggie Cheung", "Alicia Vikander", "Musidora", "Simone Simon"], bonne: 1, expl: "Maggie Cheung jouait dans le film de 1996, Musidora dans Les Vampires.", niv: 1 },
        { q: "Quels épisodes de la série sont au programme limitatif ?", choix: ["Les épisodes 1, 2 et 3", "Les huit épisodes", "Le premier et le dernier", "Les épisodes 4, 5 et 6"], bonne: 0, expl: "Ils forment un arc complet autour de l'arrivée de Mira à Paris.", niv: 1 },
        { q: "Quel est l'ordre juste des trois œuvres ?", choix: ["Film de 1996, feuilleton de Feuillade, série HBO", "Série HBO, film de 1996, feuilleton de Feuillade", "Feuilleton de Feuillade, film de 1996, série HBO", "Feuilleton de Feuillade, série HBO, film de 1996"], bonne: 2, expl: "Les Vampires (1915-1916), Irma Vep le film (1996), Irma Vep la série (2022).", niv: 2 },
        { q: "René Vidal tourne une série tirée des Vampires, dans une série elle-même tirée des Vampires. C'est :", choix: ["un remake fidèle du film", "une ellipse", "un plan-séquence", "une mise en abyme"], bonne: 3, expl: "L'œuvre se reflète dans l'œuvre qu'elle raconte : mise en abyme.", niv: 2 },
        { q: "Un médecin parle de « feuilleton », René répond « film ». Ce débat ouvre surtout le questionnement :", choix: ["art et industrie", "périodes et courants", "transferts et circulations culturels", "le cinéma des premiers temps"], bonne: 0, expl: "La valeur d'une œuvre dépend-elle de son format et de sa diffusion ? C'est la tension entre art et industrie.", niv: 3 },
        { q: "Le financier qui exige une publicité pour un parfum montre que :", choix: ["la série refuse tout argent privé", "le cinéma sert de vitrine au luxe", "le tournage est payé en grande partie par l'État", "Mira dirige elle-même la production"], bonne: 1, expl: "Le tournage devient presque un faire-valoir pour l'industrie du luxe.", niv: 2 },
        { q: "Quel autre projet d'Assayas existe en version télévision et en version salle ?", choix: ["L'Heure d'été", "Après mai", "Carlos", "Irma Vep de 1996"], bonne: 2, expl: "Carlos (2010) : trois épisodes pour la télévision, une version courte en salles.", niv: 2 },
        { q: "Pourquoi le décalage de Mira est-il utile au récit ?", choix: ["Parce qu'il empêche le tournage de commencer", "Parce qu'il transforme la série en film muet", "Parce qu'il oblige René à tourner toutes les scènes en anglais", "Parce que son regard neuf fait découvrir ce milieu"], bonne: 3, expl: "Étrangère à ce monde, Mira le voit avec candeur, et le spectateur avec elle.", niv: 3 },
        { q: "Qui hante René Vidal dans la série ?", choix: ["Le souvenir de son ex-femme, actrice", "Le fantôme de Louis Feuillade qui le conseille", "Le médecin de l'assurance qui le suit", "Le financier qui veut prendre sa place"], bonne: 0, expl: "Jade Lee, son ex-femme et l'actrice de son film de 1996, revient dans ses pensées.", niv: 2 },
        { q: "Comparée à La Nuit américaine de Truffaut, la série Irma Vep se distingue surtout par :", choix: ["son tournage en noir et blanc intégral", "l'ampleur que permet le format long", "l'absence de tout personnage de réalisateur à l'écran", "le refus de montrer un tournage"], bonne: 1, expl: "Le programme souligne la liberté et l'ampleur que donne le format sériel.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 10
    {
      chapitre: 'cine-10',
      fiche: `## Réécrire un extrait et présenter son projet de création

### L'écrit en bref
- **Durée** : 3 h 30. Un extrait d'une œuvre du programme limitatif, de **4 minutes au plus**, est projeté **trois fois**, à 10 minutes d'intervalle, au début de l'épreuve.
- **Première partie** (environ 1 h 30) : analyse précise et argumentée de l'extrait, sous forme **linéaire** ou **composée**.
- **Deuxième partie** (environ 2 h), **au choix** : le **sujet A**, créatif (réécrire l'extrait), ou le **sujet B**, réflexif (répondre à une question à l'aide d'un dossier de deux à quatre documents).
- Chaque partie est notée sur **10 points** ; l'écrit compte pour la moitié de la note de l'épreuve, l'oral pour l'autre moitié.

### Le sujet A : la réécriture
- La consigne demande de **transformer** l'extrait : changer le **point de vue** (raconter la scène par les yeux d'un autre personnage), le **genre** (une scène de peur devient une comédie), le **ton**, le **décor**, l'**espace**, l'**époque**, les **personnages**, ou varier le récit.
- On rédige une **note d'intention** : elle explique la consigne avec ses mots, ce qu'on garde de l'extrait, ce qu'on change, et l'**effet recherché** sur le spectateur.
- On l'accompagne d'**éléments visuels et sonores** : un extrait de **scénario**, un fragment de **découpage technique** (numéro du plan, échelle, angle, mouvement, durée, son), quelques cases de **story-board**, un **plan au sol** (schéma vu de dessus qui place la caméra et les acteurs), des indications de **son** et de **musique**.
- Le dessin n'est pas noté pour sa beauté : il doit être **clair** et **lisible**.

### Réussir une réécriture
- Bien **lire la consigne** : si elle dit « changer de point de vue », il faut que le spectateur voie et entende autrement, pas seulement changer un dialogue.
- **Garder un lien** visible avec l'extrait d'origine : on doit reconnaître la scène.
- **Justifier chaque choix** par un effet : « je filme en caméra subjective pour que le spectateur partage la peur d'Alice ».
- Utiliser le **vocabulaire technique** juste et mobiliser l'œuvre (ses motifs, son style).
- Exemple : réécrire la marche nocturne de La Féline du point de vue d'Irena, en caméra subjective, avec le seul bruit de ses pas et de la respiration, et un plan au sol qui montre sa position derrière Alice.

### Le sujet B : la réflexion sur dossier
- La question porte sur l'œuvre de l'extrait, vue à travers l'un de ses **questionnements**.
- On construit un **plan** en deux ou trois parties, on s'appuie sur des **scènes précises** de l'œuvre et sur les documents, et on donne un avis **personnel** et argumenté.

### L'oral : le projet de création
- Pendant l'année, l'élève réalise, seul ou en groupe, une **réalisation audiovisuelle** de **10 minutes au plus**, et tient un **carnet de création** personnel.
- Le carnet n'est pas un simple journal des étapes : il est organisé autour des **questions de cinéma** qui ont nourri le projet (intentions, choix, références, essais, doutes).
- La réalisation et le carnet sont envoyés au jury **quinze jours avant** l'épreuve. Ils servent d'appui mais **ne sont pas notés** en eux-mêmes.
- **Déroulé** (30 minutes, sans préparation) : 10 minutes au plus pour présenter son projet (intentions, démarche, engagement personnel), 10 minutes au plus pour répondre à une **question d'analyse de création** posée par le jury, puis un **entretien**.
- Le jury réunit un professeur et, le plus souvent, un **partenaire artistique professionnel** qui est intervenu dans l'enseignement.

### À retenir pour le bac
- Sujet A : note d'intention + éléments visuels et sonores, chaque choix justifié par un effet.
- Sujet B : plan, scènes précises de l'œuvre, documents, avis personnel.
- Oral : c'est la réflexion sur la démarche qui est évaluée, pas la qualité technique du film.
- Le carnet est personnel, même si la réalisation est collective.`,
      cartes: [
        { q: "Combien de fois l'extrait est-il projeté à l'écrit ?", r: "Trois fois, à 10 minutes d'intervalle, au début de l'épreuve. Il dure 4 minutes au plus." },
        { q: "Comment est organisé l'écrit ?", r: "Première partie : analyse de l'extrait (environ 1 h 30). Deuxième partie au choix : sujet A créatif ou sujet B réflexif (environ 2 h). Chaque partie est notée sur 10." },
        { q: "Que demande le sujet A ?", r: "Réécrire l'extrait selon une consigne (point de vue, genre, ton, décor, époque…) dans une note d'intention avec des éléments visuels et sonores." },
        { q: "Que demande le sujet B ?", r: "Répondre à une question de réflexion sur l'œuvre, à travers un questionnement, avec un dossier de deux à quatre documents." },
        { q: "Que contient une note d'intention ?", r: "La consigne reformulée, ce qu'on garde et ce qu'on change de l'extrait, et l'effet recherché sur le spectateur." },
        { q: "Qu'est-ce qu'un plan au sol ?", r: "Un schéma vu de dessus qui place le décor, les acteurs, la caméra et ses déplacements." },
        { q: "Que note-t-on dans un découpage technique ?", r: "Pour chaque plan : son numéro, l'échelle, l'angle, le mouvement, la durée, l'action et le son." },
        { q: "Le dessin du story-board est-il noté pour sa beauté ?", r: "Non : il doit être clair et lisible pour expliquer le projet." },
        { q: "Quelle erreur fréquente dans le sujet A ?", r: "Ne pas respecter la consigne, ou ne pas justifier ses choix par un effet sur le spectateur." },
        { q: "Combien de temps dure au plus la réalisation présentée à l'oral ?", r: "10 minutes." },
        { q: "Le carnet de création est-il collectif ?", r: "Non, il est personnel, même si la réalisation est collective." },
        { q: "Quand le carnet et la réalisation sont-ils envoyés au jury ?", r: "Au plus tard quinze jours avant l'épreuve." },
        { q: "Le carnet et la réalisation sont-ils notés ?", r: "Non, ils servent d'appui à l'oral ; c'est la prestation orale qui est notée." },
        { q: "Quel est le déroulé de l'oral ?", r: "30 minutes sans préparation : 10 minutes de présentation du projet, 10 minutes de réponse à une question d'analyse de création, puis un entretien." },
        { q: "Qui compose le jury de l'oral ?", r: "Un professeur et, le plus souvent, un partenaire artistique professionnel intervenu dans l'enseignement." },
      ],
      quiz: [
        { q: "Combien de temps dure au plus l'extrait projeté à l'écrit ?", choix: ["2 minutes", "3 minutes", "1 minute", "4 minutes"], bonne: 3, expl: "L'extrait dure 4 minutes au maximum et il est projeté trois fois.", niv: 1 },
        { q: "Dans le sujet A, le candidat doit rédiger :", choix: ["une note d'intention, avec des images et des sons", "une dissertation sur l'histoire du cinéma depuis ses débuts", "un résumé complet de l'œuvre étudiée", "une critique de presse sur l'extrait"], bonne: 0, expl: "Le sujet A est créatif : note d'intention, scénario, découpage, story-board, plan au sol.", niv: 1 },
        { q: "Un schéma vu de dessus qui place la caméra, le décor et les acteurs est :", choix: ["un story-board", "un plan au sol", "un découpage technique", "un synopsis"], bonne: 1, expl: "Le plan au sol montre l'espace vu de dessus ; le story-board dessine les plans.", niv: 2 },
        { q: "La consigne demande de réécrire la scène « du point de vue d'un autre personnage ». Que faut-il surtout faire ?", choix: ["Changer les dialogues de la scène sans toucher aux images", "Ajouter une musique plus forte sur les mêmes plans", "Faire voir et entendre la scène autrement", "Raconter la suite de l'histoire après l'extrait"], bonne: 2, expl: "Changer de point de vue change ce que le spectateur voit, entend et sait.", niv: 3 },
        { q: "Dans le sujet B, le dossier comporte :", choix: ["un seul extrait projeté", "dix photos de tournage", "le scénario complet de l'œuvre", "deux à quatre documents"], bonne: 3, expl: "Le corpus de deux à quatre documents sert d'appui à la réflexion.", niv: 1 },
        { q: "Comment sont notées les deux parties de l'écrit ?", choix: ["10 points chacune", "Seule l'analyse est notée", "15 points pour l'analyse, 5 pour le sujet au choix", "Elles reçoivent une note unique, sans détail"], bonne: 0, expl: "Chaque partie est notée sur 10 points.", niv: 2 },
        { q: "Une élève a fait son film en groupe. Pour son carnet de création :", choix: ["elle peut rendre le carnet commun du groupe", "le carnet doit être personnel", "le carnet n'est pas nécessaire", "le professeur l'écrit à sa place"], bonne: 1, expl: "Le carnet est personnel même si la réalisation est collective.", niv: 2 },
        { q: "À l'oral, qu'est-ce qui est évalué ?", choix: ["La qualité technique du film réalisé", "La beauté du carnet de création", "La réflexion orale sur la démarche", "Le nombre de personnes ayant vu le film"], bonne: 2, expl: "La réalisation et le carnet servent d'appui ; ils ne sont pas notés en eux-mêmes.", niv: 3 },
        { q: "Quel est l'ordre de l'oral de 30 minutes ?", choix: ["Entretien, présentation, puis question du jury", "Présentation, question du jury, puis entretien", "Question du jury, présentation, projection du film en entier", "Projection du film, présentation, puis note immédiate"], bonne: 1, expl: "10 minutes de présentation, 10 minutes de réponse à la question, puis l'entretien.", niv: 2 },
        { q: "Dans une note d'intention, laquelle de ces phrases rapporte le plus de points ?", choix: ["« Ma scène sera plus belle que l'originale. »", "« J'ai choisi des plans parce que c'est mieux. »", "« Je change tout pour être original. »", "« Caméra subjective : on partage sa peur. »"], bonne: 3, expl: "Chaque choix doit être justifié par un effet précis sur le spectateur.", niv: 3 },
        { q: "Quand faut-il envoyer la réalisation et le carnet au jury ?", choix: ["Le jour même de l'oral", "Quinze jours avant au plus tard", "Un an avant l'épreuve", "Après l'oral, pour la note finale"], bonne: 1, expl: "Ils sont transmis au plus tard quinze jours avant, visés par le professeur et le chef d'établissement.", niv: 2 },
      ],
    },
  ],
  methode: [
    {
      id: 'cine-m1', mat: 'cine', titre: "Analyser l'extrait projeté (première partie de l'écrit)",
      formules: ["Vous proposerez une analyse précise et argumentée de l'extrait, sous une forme linéaire ou composée.", "Analysez l'extrait en montrant comment…"],
      vu: ["Première partie de tous les sujets nationaux depuis la session 2022 (note de service du 15 juillet 2021, version consolidée de mai 2024)", "Extrait de 4 minutes au plus tiré d'une œuvre du programme limitatif, projeté trois fois"],
      pts: "10 points, environ 1 h 30",
      attendu: "Une analyse rédigée, avec une courte introduction qui situe l'extrait et pose une problématique, un développement qui relie chaque procédé (cadre, lumière, montage, son, jeu) à un effet et à un sens, et une conclusion qui répond à la problématique et ouvre vers l'œuvre ou le questionnement.",
      etapes: ["Pendant les trois projections, noter en colonnes : image, son, montage, sens.", "Situer l'extrait dans l'œuvre en deux phrases.", "Poser une problématique : que cherche à produire cette scène ?", "Choisir un plan linéaire (moments de la scène) ou composé (deux ou trois axes).", "Pour chaque remarque : le procédé, le moment précis, l'effet sur le spectateur.", "Conclure en répondant, puis relier au questionnement du programme."],
      mots: ["hors-champ", "clair-obscur", "montage alterné", "son hors-champ", "point de vue"],
      pieges: ["Raconter la scène au lieu de l'analyser.", "Lister des techniques sans dire leur effet.", "Rester général, sans citer de plan ou de son précis.", "Oublier le son, aussi important que l'image."],
      cas: "Extrait de La Féline : la scène de la piscine. Alice, seule, nage dans une piscine en sous-sol, de nuit. Les reflets de l'eau dansent sur les murs ; on entend un grognement ; une ombre passe ; Alice crie ; la lumière se rallume et Irena apparaît calmement.",
      question: "Rédige l'introduction et le premier axe d'une analyse composée de cet extrait.",
      modele: "Introduction : au milieu du film, Alice, qui se sait menacée par la jalousie d'Irena, se retrouve seule dans une piscine en sous-sol. Dans cette scène, Tourneur crée la terreur sans jamais montrer la bête. Comment fait-il naître la peur par la seule suggestion ? Nous verrons d'abord que la menace naît de l'image, de l'ombre et des reflets, puis qu'elle est surtout portée par le son. Premier axe : l'espace clos de la piscine, plongé dans la pénombre, enferme Alice. Le clair-obscur, hérité de l'expressionnisme, découpe de grandes zones noires où tout peut se cacher. Les reflets de l'eau qui tremblent sur les murs donnent l'impression que l'espace lui-même respire et bouge. Quand une ombre passe sur le mur, le spectateur croit voir la panthère, mais le cadre ne la montre jamais : la créature reste dans le hors-champ, et c'est notre imagination qui la fabrique.",
      grille: ["J'ai situé l'extrait et posé une problématique.", "Chaque procédé est relié à un effet.", "J'ai cité des moments précis (plan, son, raccord).", "J'ai parlé du son autant que de l'image."],
    },
    {
      id: 'cine-m2', mat: 'cine', titre: "Réécrire l'extrait (deuxième partie, sujet A)",
      formules: ["Réécrivez l'extrait en changeant le point de vue.", "Transposez la scène dans un autre genre (comédie, documentaire…).", "Imaginez la scène dans un autre décor ou à une autre époque."],
      vu: ["Sujet A de la deuxième partie depuis la session 2022 (note de service consolidée de mai 2024)", "Consignes possibles : point de vue, genre, ton, décor, espace, temporalité, personnages, variation du récit"],
      pts: "10 points, environ 2 h",
      attendu: "Une note d'intention qui montre qu'on a compris la consigne et explique comment on l'applique, accompagnée d'éléments visuels et sonores clairs (scénario, découpage, story-board, plan au sol, indications de son et de musique). Chaque choix est justifié par l'effet recherché.",
      etapes: ["Reformuler la consigne avec ses mots.", "Dire ce qu'on garde de l'extrait et ce qu'on change.", "Écrire la note d'intention : intention générale, choix de mise en scène, effet visé.", "Faire un fragment de découpage (5 à 8 plans : échelle, angle, mouvement, son).", "Ajouter un story-board ou un plan au sol simple et lisible.", "Relier le projet au style de l'œuvre ou au questionnement."],
      mots: ["note d'intention", "caméra subjective", "plan au sol", "découpage technique", "effet recherché"],
      pieges: ["Ne pas respecter la consigne.", "Changer l'histoire au point qu'on ne reconnaît plus l'extrait.", "Faire de beaux dessins sans les expliquer.", "Ne justifier aucun choix."],
      cas: "Consigne : réécrivez la scène de la piscine de La Féline du point de vue d'Irena.",
      question: "Rédige la note d'intention et un découpage de quatre plans.",
      modele: "Note d'intention : je garde la piscine, la nuit et la peur d'Alice, mais le spectateur ne voit plus la scène avec Alice : il est à la place d'Irena. Le but est de rendre le spectateur complice et coupable, et de garder le doute : Irena est-elle une bête ou une femme jalouse ? Je n'utilise que des plans en caméra subjective, à hauteur d'épaule, dans la pénombre. On n'entend que la respiration d'Irena, de plus en plus forte, et l'écho de l'eau. Plan 1 : plan d'ensemble subjectif depuis l'escalier, Alice au loin dans l'eau éclairée ; respiration. Plan 2 : travelling avant lent le long du mur, l'ombre d'Irena s'étire sur le carrelage ; un grondement sourd, impossible à attribuer. Plan 3 : gros plan sur le peignoir d'Alice posé sur un banc, une main entre dans le champ et le saisit. Plan 4 : plan subjectif sur Alice qui se retourne et crie ; noir brutal, puis la lumière revient. Cette fin garde l'ambiguïté chère à Tourneur.",
      grille: ["J'ai reformulé et respecté la consigne.", "On reconnaît la scène d'origine.", "Chaque choix est justifié par un effet.", "Mon découpage est précis (échelle, mouvement, son)."],
    },
    {
      id: 'cine-m3', mat: 'cine', titre: "Répondre à une question de réflexion sur dossier (deuxième partie, sujet B)",
      formules: ["En vous appuyant sur le corpus et sur votre connaissance de l'œuvre, vous direz dans quelle mesure…", "Comment l'œuvre interroge-t-elle… ?", "En quoi peut-on dire que… ?"],
      vu: ["Sujet B de la deuxième partie depuis la session 2022 (note de service consolidée de mai 2024)", "Corpus de deux à quatre documents ; la question porte sur l'œuvre de l'extrait, vue à travers un questionnement"],
      pts: "10 points, environ 2 h",
      attendu: "Une réponse argumentée et personnelle, organisée en deux ou trois parties, qui définit les termes de la question, mobilise des scènes précises de toute l'œuvre et le questionnement du programme, et utilise les documents sans les paraphraser.",
      etapes: ["Définir les mots de la question et la relier au questionnement.", "Lire les documents et noter l'idée de chacun.", "Construire un plan en deux ou trois parties, avec une nuance si le sujet dit « dans quelle mesure ».", "Dans chaque partie : une idée, deux exemples précis de l'œuvre, un document.", "Conclure en répondant et en donnant un avis personnel."],
      mots: ["questionnement", "dans quelle mesure", "par exemple, dans la scène de", "comme le montre le document", "cependant"],
      pieges: ["Résumer les documents un par un.", "Parler seulement de l'extrait et oublier le reste de l'œuvre.", "Oublier le questionnement du programme.", "Ne donner aucun avis personnel."],
      cas: "Question : dans quelle mesure La Féline fait-elle d'une contrainte de production une force créatrice ? Document fictif : un producteur raconte que son unité avait des budgets limités et des titres imposés par le studio.",
      question: "Propose un plan détaillé et rédige la première partie.",
      modele: "Plan : I. Une série B soumise aux contraintes du studio (budget, durée, titre imposé). II. Des contraintes transformées en style : la suggestion par l'ombre et le son. III. Mais un style qui dépasse la contrainte : un choix d'auteur et une influence durable. Première partie : La Féline est produite en 1942 par l'unité de Val Lewton à la RKO, chargée de films de peur rapides et peu coûteux. Le document rappelle que les budgets y étaient limités et que les titres étaient souvent imposés : c'est le cas de Cat People, titre qui promettait un monstre. Le film dure environ 73 minutes et utilise des décors simples, comme l'appartement d'Irena ou la piscine. Le studio attend un film d'horreur qui rapporte, dans un cadre industriel très encadré, ce qui relie l'œuvre au questionnement « un cinéaste au travail ».",
      grille: ["J'ai défini les mots de la question.", "Mon plan répond à la question et nuance.", "J'ai cité des scènes précises de toute l'œuvre.", "J'ai utilisé les documents sans les résumer."],
    },
    {
      id: 'cine-m4', mat: 'cine', titre: "Présenter son projet de création à l'oral",
      formules: ["Présentez votre projet de création.", "Quelles étaient vos intentions ?", "Comment votre projet a-t-il évolué ?"],
      vu: ["Première partie de l'oral (10 minutes au plus), note de service consolidée de mai 2024", "Réalisation de 10 minutes au plus et carnet de création transmis au jury quinze jours avant"],
      pts: "Partie orale sur 10 points : présentation, réponse à la question du jury, entretien",
      attendu: "Un exposé de 10 minutes sans lire, qui présente les intentions du projet, la démarche suivie (écriture, tournage, montage), les choix et leurs raisons, les difficultés et l'engagement personnel, en s'appuyant sur le carnet de création et sur un ou deux extraits de la réalisation.",
      etapes: ["Présenter le projet et son intention en une minute.", "Expliquer deux ou trois choix de mise en scène, avec un extrait ou une page du carnet.", "Dire ce qui a changé entre l'idée de départ et le film final, et pourquoi.", "Citer une ou deux références (une œuvre du programme, un autre film).", "Dire sa part personnelle si le film est collectif."],
      mots: ["intention", "démarche", "choix de mise en scène", "référence", "engagement personnel"],
      pieges: ["Raconter le tournage jour par jour.", "Juger son film « raté » ou « réussi » sans analyse.", "Lire son carnet.", "Ne pas savoir dire sa part dans un projet de groupe."],
      cas: "Projet de groupe : un court métrage de 6 minutes sur une lycéenne qui croit être suivie le soir en rentrant chez elle. L'élève a écrit le découpage et fait le montage son.",
      question: "Rédige le début de ta présentation (intention et deux choix).",
      modele: "« Notre film raconte le retour d'une lycéenne qui croit être suivie. Notre intention était de faire peur sans jamais montrer le poursuivant, comme Tourneur dans La Féline. J'ai écrit le découpage et j'ai fait le montage son. Premier choix : nous avons filmé la rue en plans larges et fixes, avec l'héroïne petite dans le cadre, pour qu'on scrute le hors-champ avec elle. Deuxième choix : au montage son, j'ai retiré la musique et j'ai gardé seulement les pas, que j'ai décalés d'une demi-seconde, pour qu'on ne sache plus si ce sont les siens. Au départ, nous avions prévu de montrer un homme à la fin ; nous l'avons supprimé, car la peur était plus forte sans réponse. »",
      grille: ["J'ai dit l'intention dès le début.", "J'ai expliqué au moins deux choix précis.", "J'ai montré l'évolution du projet.", "J'ai dit ma part personnelle."],
    },
    {
      id: 'cine-m5', mat: 'cine', titre: "Répondre à la question d'analyse de création du jury",
      formules: ["Pourquoi avoir choisi ce cadrage dans telle séquence ?", "Que changerait une autre fin ?", "Quel rapport voyez-vous entre votre projet et une œuvre du programme ?"],
      vu: ["Deuxième partie de l'oral (10 minutes au plus) et entretien, note de service consolidée de mai 2024"],
      pts: "Compte dans la partie orale sur 10 points",
      attendu: "Une réponse précise et argumentée, qui s'appuie sur un moment de la réalisation ou une page du carnet, analyse son propre travail avec du recul, et accepte d'envisager une autre solution.",
      etapes: ["Reformuler la question pour gagner un peu de temps.", "Montrer le passage concerné (extrait, page du carnet).", "Expliquer le choix fait et l'effet recherché.", "Dire honnêtement si l'effet est réussi.", "Proposer une variante et ce qu'elle produirait."],
      mots: ["effet recherché", "recul critique", "variante", "si je le refaisais", "point de vue"],
      pieges: ["Se défendre au lieu d'analyser.", "Répondre par oui ou non.", "Dire « on n'avait pas le temps » sans réflexion.", "Ne pas relier la réponse au langage du cinéma."],
      cas: "Le jury demande : « Dans votre dernière séquence, pourquoi avoir choisi un plan-séquence plutôt qu'un montage découpé ? »",
      question: "Rédige ta réponse.",
      modele: "« Nous voulions que le spectateur vive le retour de l'héroïne en temps réel, sans coupure, pour que la tension monte sans répit : le plan-séquence empêche de respirer. Il nous oblige aussi à placer la menace dans le hors-champ, puisque la caméra reste sur elle. Avec du recul, le plan est un peu long au milieu et la tension retombe. Si je le refaisais, je garderais le plan-séquence, mais je ferais passer une voiture dont les phares balaieraient le cadre, pour relancer l'inquiétude. Un montage découpé aurait donné plus de rythme, mais il aurait cassé l'impression d'être enfermé avec elle. »",
      grille: ["J'ai expliqué le choix et son effet.", "J'ai montré du recul sur mon travail.", "J'ai proposé une variante.", "J'ai utilisé le vocabulaire du cinéma."],
    },
  ],
  sujets: [
    {
      id: 'cine-s1', matiere: 'cine', titre: "Sujet d'entraînement 1 : La Féline, la marche nocturne", duree: 210,
      enonce: `## Sujet d'entraînement 1 (inventé)

Durée : 3 heures 30. Sujet construit sur le modèle de la partie écrite de l'épreuve. L'extrait vient d'une œuvre du programme limitatif ; les documents du sujet B sont fictifs.

### Extrait projeté
La Féline (Cat People) de Jacques Tourneur, 1942 : la marche nocturne d'Alice (environ 3 minutes 30). Il est projeté trois fois, à 10 minutes d'intervalle, au début de l'épreuve.

Rappel de la scène, pour l'entraînement : un soir, Alice rentre seule à pied le long de Central Park. Irena la suit à distance. Le montage alterne d'abord les deux femmes, puis ne montre plus qu'Alice. On entend ses talons, puis plus rien. Alice s'inquiète, se retourne, accélère sous les réverbères, entre des zones d'ombre. Un grondement monte, puis le freinage brutal d'un bus, dont les portes s'ouvrent dans un souffle, fait sursauter Alice et le spectateur. Juste après, on voit des moutons tués dans un enclos et des traces de pattes de bête sur le sol, qui deviennent des traces de chaussures de femme.

### Première partie (10 points)
Vous proposerez une analyse précise et argumentée de l'extrait, sous une forme linéaire ou composée.

### Deuxième partie (10 points) : traitez au choix le sujet A ou le sujet B

**Sujet A (créatif).** Réécrivez cette scène en la transposant de nos jours, dans une ville que vous choisirez, en gardant le principe de la suggestion : la menace ne doit jamais être montrée. Vous rédigerez une note d'intention, accompagnée d'éléments visuels et sonores (fragment de découpage, quelques cases de story-board ou un plan au sol, indications sonores).

**Sujet B (réflexif).** En vous appuyant sur le corpus et sur votre connaissance de l'œuvre, vous direz dans quelle mesure La Féline fait d'une contrainte de production une force créatrice (questionnement « un cinéaste au travail »).

- Document 1 (fictif) : extrait d'un entretien avec un ancien employé d'un studio hollywoodien des années 1940. « Notre unité recevait un titre, un budget très bas et un délai. Nous devions rendre un film d'environ 70 minutes. Pas de monstre en caoutchouc : nous n'en avions pas les moyens. »
- Document 2 (fictif) : extrait d'une critique parue à la sortie du film. « Le spectateur attend la bête, elle ne vient pas. On sort agacé ou fasciné. »
- Document 3 (fictif) : description d'une photographie de plateau. Le directeur de la photographie règle un unique projecteur dans un décor presque vide ; les murs sont noyés d'ombre.`,
      corrige: `## Corrigé

### Première partie : analyse (pistes pour une analyse composée)
- **Introduction** : la scène se place après que la jalousie d'Irena envers Alice est devenue claire. Problématique : comment Tourneur fait-il naître la peur sans jamais montrer ce qui menace Alice ?
- **I. Une poursuite construite par le montage** : le **montage alterné** entre les deux femmes installe la poursuite, puis Irena disparaît du montage : la menace passe dans le **hors-champ**. Le spectateur sait qu'Irena suit Alice, Alice l'ignore : c'est le **suspense**. Les **raccords** et la durée croissante des plans font monter l'attente.
- **II. Une ville changée en piège par la lumière** : les réverbères découpent des îlots de lumière entre de grandes zones d'ombre : un **clair-obscur** hérité de l'expressionnisme. Chaque zone noire peut cacher la bête. La profondeur de la rue, vide, isole Alice.
- **III. Le son, cœur de la terreur** : le bruit des talons rythme la marche, puis son **arrêt** crée un silence angoissant. Le grondement est ambigu : animal ou moteur ? Le freinage du bus, son ordinaire, décharge la tension et fait sursauter : la peur vient d'un objet du quotidien. Les traces de pattes qui deviennent des traces de chaussures gardent l'**hésitation fantastique** : bête ou femme ?
- **Conclusion** : la scène montre que la peur naît de ce qu'on imagine. Elle relie l'œuvre au questionnement « un cinéaste au travail » : peu de moyens, mais une maîtrise du montage, de la lumière et du son.

### Deuxième partie, sujet A : attendus
- Une **note d'intention** qui reformule la consigne (transposer de nos jours, garder la suggestion) et choisit un lieu précis (une rue de banlieue, un parking, un quai de métro).
- Ce qui est **gardé** : la femme seule, la poursuite, le hors-champ, la décharge finale par un bruit ordinaire.
- Ce qui est **changé** : le décor, les sons (la vibration d'un téléphone, le bip d'une porte de métro, une trottinette), la lumière (éclairages de néon, écrans).
- Un **découpage** de 5 à 8 plans avec échelle, angle, mouvement et son ; un **story-board** ou un **plan au sol** lisible.
- Chaque choix est **justifié** par l'effet recherché sur le spectateur.

### Deuxième partie, sujet B : plan possible
- **I. Une série B très encadrée** : unité de Val Lewton à la RKO, budget limité, durée courte, titre imposé (document 1). Le studio attend un film de peur rentable.
- **II. Une contrainte devenue style** : pas de monstre montré, mais l'ombre, le hors-champ et le son (marche nocturne, piscine). Un seul projecteur dans un décor vide (document 3) suffit à créer l'angoisse grâce à Nicholas Musuraca.
- **III. Un choix d'auteur qui dépasse la contrainte** : la suggestion n'est pas seulement une économie, c'est une idée sur la peur et la croyance (l'hésitation fantastique, la psychanalyse du docteur Judd). La réception partagée (document 2) montre que ce choix déroutait ; le film est pourtant devenu une référence durable.
- **Conclusion** : la contrainte n'explique pas tout ; c'est la manière dont Tourneur et son équipe l'ont transformée qui fait l'œuvre.`,
      grille: [
        { c: "Première partie : extrait situé et problématique claire", pts: 2 },
        { c: "Première partie : procédés précis (montage, lumière, son) reliés à leurs effets", pts: 5 },
        { c: "Première partie : analyse organisée et conclusion qui répond", pts: 3 },
        { c: "Deuxième partie : consigne ou question comprise et reformulée", pts: 3 },
        { c: "Deuxième partie : choix justifiés (A) ou argumentation appuyée sur l'œuvre entière (B)", pts: 4 },
        { c: "Deuxième partie : éléments visuels et sonores clairs (A) ou usage pertinent des documents (B)", pts: 3 },
      ],
    },
  ],
};
