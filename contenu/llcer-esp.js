// Langues, littératures et cultures étrangères (LLCER) espagnol — spécialité, terminale voie générale. Sources : voir matiere.sources.
// Programme : BO spécial n° 8 du 25 juillet 2019 ; œuvres : programme limitatif 2026-2028 (BO n° 21 du 21 mai 2026, annexe 3 espagnol).
// Épreuve : écrit 3 h 30 (synthèse et traduction ou transposition) et oral de 20 minutes sur dossier, chacun pour moitié.
export default {
  matiere: {
    id: 'llcer-esp',
    nom: 'LLCER espagnol',
    voie: 'generale',
    epreuve: { type: 'ecrit', duree: 210, coef: 16, quand: 'juin (écrit) et juin-juillet (oral)', note: 'Écrit de 3 h 30 (synthèse de documents en espagnol, environ 500 mots, et traduction ou transposition) et oral de 20 minutes sans préparation sur un dossier personnel ; écrit et oral comptent chacun pour moitié' },
    sources: [
      "https://eduscol.education.gouv.fr/sites/default/files/document/nsproglimitatifterminalellcerrs2026et2027annexe3-espagnol-eduscolpdf-127241.pdf",
      "https://www.education.gouv.fr/bo/2026/Hebdo21/MENE2611474N",
      "https://site.ac-martinique.fr/espagnol/wp-content/uploads/sites/14/2021/05/THeMATIQUES-ET-AXES-LLCER.pdf",
      "https://www.education.gouv.fr/bo/20/Special7/MENE2019311N.htm",
      "https://diplomeo.com/actualite-bac_llcer_espagnol_2026_sujets",
    ],
    chapitres: [
      { id: "llcer-esp-1", t: "Représentations culturelles : nature et mythologies", theme: "Représentations culturelles : entre imaginaires et réalités" },
      { id: "llcer-esp-2", t: "Représentations culturelles : les représentations du réel", theme: "Représentations culturelles : entre imaginaires et réalités" },
      { id: "llcer-esp-3", t: "Représentations culturelles : du type au stéréotype", theme: "Représentations culturelles : entre imaginaires et réalités" },
      { id: "llcer-esp-4", t: "Dominations et insoumissions : oppressions, résistances et révoltes", theme: "Dominations et insoumissions" },
      { id: "llcer-esp-5", t: "Dominations et insoumissions : révolutions et ruptures", theme: "Dominations et insoumissions" },
      { id: "llcer-esp-6", t: "Dominations et insoumissions : culture officielle et émancipations culturelles", theme: "Dominations et insoumissions" },
      { id: "llcer-esp-7", t: "L'Espagne et l'Amérique latine dans le monde : monde globalisé, contacts et influences", theme: "L'Espagne et l'Amérique latine dans le monde" },
      { id: "llcer-esp-8", t: "L'Espagne et l'Amérique latine dans le monde : crises et violences", theme: "L'Espagne et l'Amérique latine dans le monde" },
      { id: "llcer-esp-9", t: "L'Espagne et l'Amérique latine dans le monde : la frontière en question", theme: "L'Espagne et l'Amérique latine dans le monde" },
      { id: "llcer-esp-10", t: "Les œuvres du programme limitatif (2026-2028)", theme: "Œuvres intégrales" },
      { id: "llcer-esp-11", t: "Méthode : la synthèse de documents en espagnol", theme: "Méthode de l'écrit" },
      { id: "llcer-esp-12", t: "Méthode : traduction et transposition", theme: "Méthode de l'écrit" },
    ],
  },
  paquets: [
    {
      chapitre: "llcer-esp-1",
      fiche: `## Nature et mythologies

Avant l'arrivée des Espagnols, les peuples d'Amérique racontaient l'origine du monde à travers des **mythes**. Les conquistadors, eux, ont projeté leurs propres rêves sur ce continent : l'or, les cités merveilleuses. La nature, immense et parfois hostile, est restée au cœur de l'imaginaire hispanique, jusqu'au **réalisme magique** du XXe siècle.

### Le vocabulaire à connaître
- **el mito** : le mythe ; **la leyenda** : la légende ; **el relato fundador** : le récit fondateur ; **la creencia** : la croyance.
- **los dioses** : les dieux ; **la diosa** : la déesse ; **el héroe** : le héros ; **el antepasado** : l'ancêtre.
- **la selva** : la forêt tropicale ; **la cordillera** : la chaîne de montagnes ; **el desierto** ; **la llanura** (la plaine) ; **el paisaje** : le paysage.
- **la naturaleza** : la nature ; **la tierra** : la terre ; **sagrado** : sacré ; **venerar** : vénérer.
- **el oro** : l'or ; **la codicia** : la cupidité ; **buscar** : chercher ; **perderse** : se perdre.

### Les grands récits fondateurs
- **Le Popol Vuh** : livre sacré des **Mayas quichés** (Guatemala). Les dieux essaient de créer l'homme avec de la boue, puis du bois, et réussissent enfin avec le **maïs** : « los hombres de maíz ».
- **Quetzalcóatl**, le « serpent à plumes », dieu civilisateur des Aztèques et des Toltèques. Une légende annonçait son retour par l'est, ce qui a pu jouer lors de l'arrivée de **Hernán Cortés** (1519).
- **Aztlán** : la terre d'origine mythique des Aztèques, qui fondent **Tenochtitlan** là où un aigle mange un serpent sur un cactus : c'est l'image du **drapeau mexicain**.
- **La Pachamama** : la « Terre mère » des peuples andins (quechuas, aymaras), toujours honorée aujourd'hui.

### El Dorado, un mythe européen
- Les Espagnols entendent parler d'un roi **couvert de poudre d'or** qui se baigne dans la **lagune de Guatavita** (peuple muisca, actuelle Colombie). La légende devient celle d'une **cité en or**.
- Des expéditions entières se perdent dans la selva pour la trouver. Ce mythe montre la **codicia** des conquistadors et la façon dont l'Europe a **inventé** l'Amérique selon ses désirs.
- Le cinéma l'a repris : *Aguirre, la colère de Dieu* (Werner Herzog, 1972) raconte une expédition qui sombre dans la folie sur l'Amazone.

### Le paysage, reflet de l'identité et des émotions
- **Antonio Machado**, *Campos de Castilla* (1912) : la Castille sèche et pauvre devient le symbole de l'âme de l'Espagne.
- **Juan Rulfo**, *Pedro Páramo* (1955) : Comala, un village mexicain écrasé de chaleur, peuplé de morts qui murmurent.
- **Gabriel García Márquez**, *Cien años de soledad* (1967) : **Macondo**, village imaginaire de Colombie où le merveilleux est vécu comme normal. C'est le **realismo mágico**.
- Le paysage n'est pas un simple décor : il exprime la solitude, la violence ou la nostalgie des personnages.

### Ce qu'il faut savoir analyser
- Dans un document sur un mythe : qui raconte, à quelle époque, pour expliquer quoi ? Le mythe **donne du sens** et **soude** une communauté.
- Dans une image de paysage : plans, couleurs, place de l'homme (minuscule ou dominant), ce que le paysage révèle de l'émotion.

### À retenir pour le bac
- Popol Vuh (hommes de maïs), Quetzalcóatl, Aztlán et le drapeau mexicain, Pachamama.
- El Dorado = un mythe de conquistadors : la cupidité et l'invention de l'Amérique.
- Le paysage est un personnage : Machado, Rulfo, García Márquez et le realismo mágico.`,
      cartes: [
        { q: "Traduire en espagnol : le récit fondateur", r: "El relato fundador." },
        { q: "Que signifie « la selva » ?", r: "La forêt tropicale (la jungle)." },
        { q: "Traduire en espagnol : la cupidité", r: "La codicia." },
        { q: "Que signifie « la cordillera » ?", r: "La chaîne de montagnes (la cordillère des Andes)." },
        { q: "Traduire en espagnol : l'ancêtre", r: "El antepasado." },
        { q: "Qu'est-ce que le Popol Vuh ?", r: "Le livre sacré des Mayas quichés : les dieux y créent l'homme à partir du maïs." },
        { q: "Qui est Quetzalcóatl ?", r: "Le « serpent à plumes », dieu civilisateur des Aztèques et des Toltèques." },
        { q: "Que représente le drapeau mexicain ?", r: "Un aigle qui mange un serpent sur un cactus : le signe qui indique aux Aztèques où fonder Tenochtitlan." },
        { q: "Qu'est-ce que la Pachamama ?", r: "La Terre mère vénérée par les peuples andins." },
        { q: "D'où vient le mythe d'El Dorado ?", r: "D'un rite muisca : un roi couvert de poudre d'or se baignait dans la lagune de Guatavita, en Colombie." },
        { q: "Qu'est-ce que le realismo mágico ?", r: "Un style où le merveilleux est raconté comme une chose normale, par exemple chez García Márquez." },
        { q: "Qu'est-ce que Macondo ?", r: "Le village imaginaire de Cien años de soledad de García Márquez (1967)." },
        { q: "Quel recueil de Machado fait de la Castille un symbole de l'Espagne ?", r: "Campos de Castilla (1912)." },
        { q: "Où se passe Pedro Páramo de Juan Rulfo ?", r: "À Comala, un village mexicain peuplé de morts." },
      ],
      quiz: [
        { q: "Comment dit-on « le paysage » en espagnol ?", choix: ["El paisaje","El país","La paisana","El pasaje"], bonne: 0, expl: "País = pays ; pasaje = passage ou billet.", niv: 1 },
        { q: "De quoi les dieux du Popol Vuh font-ils enfin l'homme ?", choix: ["De boue","De maïs","De bois","D'or"], bonne: 1, expl: "Après la boue et le bois, le maïs réussit : « los hombres de maíz ».", niv: 1 },
        { q: "Quel animal mange un serpent sur le drapeau mexicain ?", choix: ["Un aigle","Un jaguar","Un condor","Un quetzal"], bonne: 0, expl: "C'est le signe qui indique l'endroit où fonder Tenochtitlan.", niv: 1 },
        { q: "Que signifie « la codicia » ?", choix: ["La cupidité","La codification","La cuisine","La convoitise d'un trône royal"], bonne: 0, expl: "La codicia est le désir excessif de richesses.", niv: 1 },
        { q: "Dans quel pays actuel se trouve la lagune de Guatavita ?", choix: ["Le Mexique","La Colombie","Le Pérou","L'Argentine"], bonne: 1, expl: "Le peuple muisca vivait sur les hauts plateaux de la Colombie actuelle.", niv: 2 },
        { q: "Que montre surtout le mythe d'El Dorado ?", choix: ["La richesse réelle des Aztèques","La foi des peuples andins","La cupidité des conquistadors","La pauvreté de l'Espagne du XXe siècle"], bonne: 2, expl: "Les Européens ont projeté leur désir d'or sur l'Amérique.", niv: 2 },
        { q: "Qui a écrit Cien años de soledad ?", choix: ["Gabriel García Márquez","Juan Rulfo","Pablo Neruda","Jorge Luis Borges"], bonne: 0, expl: "Le roman colombien de 1967 est le symbole du realismo mágico.", niv: 2 },
        { q: "Que désigne la Pachamama ?", choix: ["Une cité d'or légendaire","Le dieu serpent des Aztèques","Une danse populaire de Cuba","La Terre mère des Andes"], bonne: 3, expl: "Les peuples andins lui font encore des offrandes.", niv: 2 },
        { q: "Quel est le sens de « venerar » ?", choix: ["Venir","Vendre","Vénérer","Envenimer"], bonne: 2, expl: "Venerar a los dioses = vénérer les dieux.", niv: 2 },
        { q: "Pourquoi peut-on dire que le paysage est un personnage chez Rulfo ?", choix: ["Il exprime la mort et la désolation","Il parle à la place du narrateur","Il est décrit avec des chiffres précis","Il change de pays à chaque chapitre"], bonne: 0, expl: "Comala, brûlant et vide, traduit la mort et l'abandon.", niv: 3 },
        { q: "Qu'est-ce qui distingue le realismo mágico du conte merveilleux ?", choix: ["Il se passe dans un monde imaginaire lointain","Le surnaturel y est présenté comme normal","Il commence par « Il était une fois »","Les personnages sont des animaux qui parlent"], bonne: 1, expl: "À Macondo, personne ne s'étonne du prodige : il fait partie du réel.", niv: 3 },
        { q: "Quel axe illustrerait le mieux une affiche du film Aguirre ?", choix: ["Nature et mythologies","Révolutions et ruptures","Culture officielle et émancipations","Monde globalisé, contacts et influences"], bonne: 0, expl: "Une expédition qui cherche El Dorado et se perd dans la selva.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-esp-2",
      fiche: `## Les représentations du réel

L'art espagnol aime jouer avec la frontière entre le **réel** et l'**illusion**. Un chevalier voit des géants à la place des moulins, un prince ne sait plus s'il rêve, un peintre se représente en train de peindre le tableau que l'on regarde. Cet axe interroge la façon dont l'art **copie**, **déforme** ou **réinvente** la réalité.

### Le vocabulaire à connaître
- **la realidad** : la réalité ; **la ilusión** : l'illusion (mais aussi l'espoir, la joie : « me hace ilusión » = ça me fait plaisir) ; **la locura** : la folie ; **loco** : fou.
- **el sueño** : le rêve ou le sommeil ; **soñar con** : rêver de ; **despertar(se)** : (se) réveiller.
- **el espejo** : le miroir ; **el reflejo** : le reflet ; **deformar** : déformer ; **la mirada** : le regard.
- **el cuadro** : le tableau ; **el lienzo** : la toile ; **el pintor** : le peintre ; **el primer plano** : le premier plan ; **el fondo** : l'arrière-plan.
- **fingir** : faire semblant ; **engañar** : tromper ; **las apariencias** : les apparences.

### Illusions, folies et chimères
- **Miguel de Cervantes**, *Don Quijote de la Mancha* (1605 et 1615) : Alonso Quijano a lu tant de romans de chevalerie qu'il se croit chevalier. Il prend des **moulins à vent** pour des **géants**. Son écuyer **Sancho Panza**, réaliste, voit les choses telles qu'elles sont. C'est le premier roman moderne.
- **Pedro Calderón de la Barca**, *La vida es sueño* (1635) : le prince **Segismundo**, enfermé depuis l'enfance, est libéré puis renvoyé en prison ; il ne sait plus ce qui est rêve ou réalité. Vers célèbre : « que toda la vida es sueño, y los sueños, sueños son ».

### Lorsque la copie se veut réalité
- **Diego Velázquez**, *Las Meninas* (1656) : le peintre se représente au travail ; le **miroir** du fond reflète le roi et la reine, qui sont à la place du spectateur. Le tableau pose la question : qui regarde qui ?
- **Le roman réaliste** du XIXe siècle (Benito Pérez Galdós) veut être un « miroir » de la société.
- **Jorge Luis Borges** (Argentine) joue avec les labyrinthes, les livres infinis, les cartes aussi grandes que le territoire.

### Des torsions du réel
- **Francisco de Goya**, *Los Caprichos* (1799) : « El sueño de la razón produce monstruos » ; plus tard, les **Peintures noires**.
- **Ramón del Valle-Inclán** invente l'**esperpento** dans *Luces de bohemia* (1920) : la réalité espagnole, tragique et grotesque, est montrée comme dans les **miroirs déformants** du callejón del Gato à Madrid.
- **Salvador Dalí**, peintre **surréaliste** : *La persistencia de la memoria* (1931) et ses montres molles. Avec **Luis Buñuel**, il réalise *Un chien andalou* (1929).
- Le **realismo mágico** latino-américain : le réel déformé par le merveilleux.

### Ce qu'il faut savoir analyser
- Le point de vue : qui voit ? Le lecteur sait-il plus que le personnage (ironie) ?
- Dans un tableau : le cadrage, les regards, les jeux de miroirs, la mise en abyme (une œuvre dans l'œuvre).

### À retenir pour le bac
- Don Quijote et les moulins ; Segismundo et le rêve ; Las Meninas et le miroir.
- Goya, Valle-Inclán (esperpento), Dalí et Buñuel : déformer pour mieux montrer le réel.`,
      cartes: [
        { q: "Traduire en espagnol : le miroir", r: "El espejo." },
        { q: "Que signifie « me hace ilusión » ?", r: "Cela me fait plaisir, je m'en réjouis." },
        { q: "Traduire en espagnol : faire semblant", r: "Fingir." },
        { q: "Que signifie « el lienzo » ?", r: "La toile du peintre." },
        { q: "Traduire en espagnol : l'arrière-plan", r: "El fondo (al fondo = à l'arrière-plan)." },
        { q: "Que signifie « engañar » ?", r: "Tromper." },
        { q: "Que prend Don Quichotte pour des géants ?", r: "Des moulins à vent." },
        { q: "Qui est Sancho Panza ?", r: "L'écuyer de Don Quichotte, réaliste et terre à terre." },
        { q: "Quelle pièce de Calderón pose la question du rêve et de la réalité ?", r: "La vida es sueño (1635), avec le prince Segismundo." },
        { q: "Que reflète le miroir des Meninas ?", r: "Le roi et la reine, placés à l'endroit du spectateur." },
        { q: "Qu'est-ce que l'esperpento ?", r: "L'esthétique de Valle-Inclán : montrer la réalité espagnole déformée, comme dans un miroir concave." },
        { q: "Quelle phrase de Goya résume Los Caprichos ?", r: "El sueño de la razón produce monstruos." },
        { q: "Quel tableau de Dalí montre des montres molles ?", r: "La persistencia de la memoria (1931)." },
        { q: "Qu'est-ce qu'une mise en abyme ?", r: "Une œuvre représentée à l'intérieur de l'œuvre elle-même, comme le peintre au travail dans Las Meninas." },
      ],
      quiz: [
        { q: "Comment dit-on « la folie » en espagnol ?", choix: ["La locura","La loca","La folía","La locución"], bonne: 0, expl: "Loco = fou ; la locura = la folie.", niv: 1 },
        { q: "Qui a écrit Don Quijote de la Mancha ?", choix: ["Pedro Calderón de la Barca","Miguel de Cervantes","Francisco de Quevedo","Lope de Vega"], bonne: 1, expl: "Première partie en 1605, seconde en 1615.", niv: 1 },
        { q: "Que signifie « el sueño » ?", choix: ["Le souvenir lointain","La sueur","Le rêve ou le sommeil","Le seuil"], bonne: 2, expl: "« Tengo sueño » = j'ai sommeil ; « un sueño » = un rêve.", niv: 1 },
        { q: "Quel peintre a réalisé Las Meninas ?", choix: ["Goya","El Greco","Murillo","Velázquez"], bonne: 3, expl: "Diego Velázquez, peintre de Philippe IV, en 1656.", niv: 1 },
        { q: "Qui est Segismundo ?", choix: ["L'écuyer de Don Quichotte","Le héros de Luces de bohemia","Le prince de La vida es sueño","Le peintre de la cour d'Espagne"], bonne: 2, expl: "Enfermé dans une tour, il ne sait plus s'il rêve.", niv: 2 },
        { q: "Quelle esthétique Valle-Inclán définit-il dans Luces de bohemia ?", choix: ["Le realismo mágico","L'esperpento","Le roman picaresque","L'art surréaliste"], bonne: 1, expl: "Valle-Inclán y définit l'esperpento par les miroirs déformants.", niv: 2 },
        { q: "Avec qui Dalí a-t-il réalisé Un chien andalou ?", choix: ["Luis Buñuel","Pedro Almodóvar","Federico García Lorca","Pablo Picasso"], bonne: 0, expl: "Film surréaliste de 1929.", niv: 2 },
        { q: "Quel faux ami se cache dans « me hace ilusión » ?", choix: ["Hace signifie ici il y a longtemps","Me signifie ici moi-même","Ilusión signifie ici plaisir ou espoir","Ilusión signifie ici mensonge grave"], bonne: 2, expl: "« Me hace ilusión » = ça me fait plaisir, je m'en réjouis.", niv: 2 },
        { q: "Que montre l'épisode des moulins à vent ?", choix: ["La puissance de l'armée espagnole","Le décalage entre l'illusion et la réalité","L'arrivée de l'industrie en Castille","La victoire du chevalier sur ses ennemis"], bonne: 1, expl: "Don Quichotte voit des géants là où Sancho voit des moulins.", niv: 2 },
        { q: "Pourquoi Las Meninas est-il un tableau sur le regard ?", choix: ["Les personnages tournent le dos au peintre","Le tableau ne contient aucun personnage","Il représente un simple paysage","Le spectateur occupe la place du roi reflété"], bonne: 3, expl: "Le miroir du fond montre ceux que regardent les personnages : nous sommes à leur place.", niv: 3 },
        { q: "Pourquoi Valle-Inclán déforme-t-il la réalité ?", choix: ["Pour embellir la vie de la cour","Pour imiter fidèlement la photographie","Pour éviter de parler de son époque et de ses problèmes","Pour montrer le grotesque tragique de l'Espagne"], bonne: 3, expl: "« España es una deformación grotesca de la civilización europea », dit son personnage Max Estrella.", niv: 3 },
        { q: "Un document montre un homme face à un miroir qui lui renvoie un autre visage. Quel axe ?", choix: ["Les représentations du réel","La frontière en question","Révolutions et ruptures","Crises et violences"], bonne: 0, expl: "Jeu d'illusion et de reflet : axe des représentations du réel.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-esp-3",
      fiche: `## Du type au stéréotype

La littérature espagnole a créé des **types** devenus universels : le séducteur Don Juan, le pícaro affamé, l'entremetteuse Celestina, l'homme d'honneur. Avec le temps, certains sont devenus des **stéréotypes**, ces images simplifiées qui collent à un peuple : l'Espagne « de pandereta » (de tambourin), le torero, la gitane, le macho mexicain. Cet axe apprend à repérer ces figures et à voir comment l'art les **construit** ou les **démonte**.

### Le vocabulaire à connaître
- **el tipo** : le type ; **el estereotipo** : le stéréotype ; **el tópico** : le cliché, l'idée reçue (faux ami : ce n'est pas « un sujet ») ; **el prejuicio** : le préjugé.
- **la honra** et **el honor** : l'honneur ; **la deshonra** : le déshonneur ; **vengarse** : se venger ; **los celos** : la jalousie.
- **el burlador** : le trompeur, le séducteur ; **seducir** ; **burlarse de** : se moquer de.
- **el pícaro** : le vaurien astucieux ; **el hambre** : la faim ; **el amo** : le maître ; **sobrevivir** : survivre.
- **la España de pandereta** : l'Espagne folklorique des clichés (flamenco, taureaux, soleil).

### Les figures de l'honneur
- Au **Siglo de Oro** (XVIe et XVIIe siècles), le théâtre de **Lope de Vega** et de **Calderón** met en scène l'**honneur**, qui dépend du regard des autres. Dans *El médico de su honra* (Calderón), un mari fait tuer sa femme sur un simple soupçon pour sauver son honneur.
- Dans *Fuenteovejuna* (Lope de Vega), tout un village se soulève contre un commandeur qui l'humilie : « ¡Fuenteovejuna, todos a una! ».

### Les abuseurs
- **Don Juan** naît dans *El burlador de Sevilla* (attribué à **Tirso de Molina**, vers 1630) : un noble qui séduit les femmes et défie Dieu, puni par la statue d'un mort qu'il a invité à dîner. **José Zorrilla** le reprend dans *Don Juan Tenorio* (1844), où il est sauvé par l'amour de doña Inés.
- **La Celestina** (Fernando de Rojas, 1499) : vieille entremetteuse rusée qui pousse deux jeunes gens l'un vers l'autre, pour de l'argent.

### Les figures populaires
- **Le pícaro** : le *Lazarillo de Tormes* (1554, anonyme) raconte à la première personne la vie d'un garçon pauvre qui sert plusieurs maîtres et survit par la ruse. Le **roman picaresque** critique la société et l'hypocrisie religieuse.
- **Le gaucho** argentin : *Martín Fierro* (José Hernández, 1872), cavalier libre de la pampa.
- **Le charro** mexicain, le **torero**, la **gitane** sensuelle (la *Carmen* de Mérimée, puis de Bizet, est un regard **français** sur l'Espagne).
- Au cinéma, **Cantinflas** incarne le pauvre malin de Mexico ; **Pedro Almodóvar** joue avec les clichés de l'Espagne pour mieux les détourner.

### Ce qu'il faut savoir analyser
- Qui produit l'image ? Un regard **de l'intérieur** ou **de l'étranger** (touristes, publicités, voyageurs romantiques du XIXe siècle) ?
- Le stéréotype simplifie et peut **blesser** ; l'humour ou la caricature peuvent aussi le **dénoncer**.

### À retenir pour le bac
- Honneur au Siglo de Oro ; Don Juan (Tirso, Zorrilla) ; Celestina ; Lazarillo et le pícaro.
- Un tópico est un cliché. Repérer qui regarde, et si l'œuvre renforce ou démonte le stéréotype.`,
      cartes: [
        { q: "Que signifie « un tópico » ?", r: "Un cliché, une idée reçue (faux ami)." },
        { q: "Traduire en espagnol : le préjugé", r: "El prejuicio." },
        { q: "Traduire en espagnol : la jalousie", r: "Los celos (tener celos = être jaloux)." },
        { q: "Que signifie « burlarse de » ?", r: "Se moquer de." },
        { q: "Traduire en espagnol : se venger", r: "Vengarse." },
        { q: "Que signifie « la España de pandereta » ?", r: "L'Espagne folklorique des clichés : flamenco, taureaux, soleil." },
        { q: "Dans quelle œuvre naît le personnage de Don Juan ?", r: "El burlador de Sevilla, attribué à Tirso de Molina (vers 1630)." },
        { q: "Qui a écrit Don Juan Tenorio ?", r: "José Zorrilla, en 1844." },
        { q: "Qu'est-ce qu'un pícaro ?", r: "Un garçon pauvre et rusé qui survit en servant plusieurs maîtres, héros du roman picaresque." },
        { q: "Quel est le premier roman picaresque ?", r: "Le Lazarillo de Tormes (1554), anonyme." },
        { q: "Qui est la Celestina ?", r: "Une vieille entremetteuse rusée, dans l'œuvre de Fernando de Rojas (1499)." },
        { q: "Que crie le village de Fuenteovejuna ?", r: "« ¡Fuenteovejuna, todos a una! » : tout le village est solidaire." },
        { q: "Qui est Martín Fierro ?", r: "Un gaucho de la pampa argentine, héros du poème de José Hernández (1872)." },
        { q: "Pourquoi Carmen est-elle un stéréotype vu de l'extérieur ?", r: "C'est une gitane imaginée par le Français Mérimée, puis Bizet : un regard étranger sur l'Espagne." },
      ],
      quiz: [
        { q: "Que signifie « el tópico » ?", choix: ["Le sujet","Le tropique","Le cliché","Le topinambour"], bonne: 2, expl: "Faux ami : un tópico est une idée reçue.", niv: 1 },
        { q: "Comment dit-on « la jalousie » en espagnol ?", choix: ["La celosía","El cielo","La celebración","Los celos"], bonne: 3, expl: "Tener celos = être jaloux ; la celosía est une jalousie de fenêtre.", niv: 1 },
        { q: "Quel personnage séduit les femmes et défie Dieu ?", choix: ["Sancho Panza","Lazarillo","Don Juan","Martín Fierro"], bonne: 2, expl: "El burlador de Sevilla, puis Don Juan Tenorio.", niv: 1 },
        { q: "Qui raconte sa vie dans le Lazarillo de Tormes ?", choix: ["Un garçon pauvre et rusé","Un roi d'Espagne","Une gitane de Séville","Un gaucho de la pampa"], bonne: 0, expl: "Le roman picaresque est écrit à la première personne.", niv: 1 },
        { q: "Quel auteur reprend Don Juan en 1844 ?", choix: ["José Zorrilla","Fernando de Rojas","Lope de Vega","Miguel de Unamuno"], bonne: 0, expl: "Dans Don Juan Tenorio, le séducteur est sauvé par l'amour.", niv: 2 },
        { q: "Que dénonce surtout le roman picaresque ?", choix: ["La violence des taureaux","La conquête de l'Amérique","L'hypocrisie de la société","Les gauchos argentins et leur vie libre"], bonne: 2, expl: "Les maîtres de Lazarillo sont avares, orgueilleux ou faux dévots.", niv: 2 },
        { q: "Dans El médico de su honra, pourquoi le mari fait-il tuer sa femme ?", choix: ["Pour hériter de sa fortune","Pour épouser une princesse","Pour sauver son honneur sur un soupçon","Parce qu'elle a trahi le roi"], bonne: 2, expl: "L'honneur dépend du regard des autres : le soupçon suffit.", niv: 2 },
        { q: "Où vit le gaucho ?", choix: ["Dans la selva","Dans la pampa","Dans les Andes","Dans le désert de Sonora"], bonne: 1, expl: "La pampa est la grande plaine d'Argentine et d'Uruguay.", niv: 2 },
        { q: "Que signifie « burlarse de alguien » ?", choix: ["Brûler quelqu'un","Bousculer quelqu'un","Tromper quelqu'un en amour","Se moquer de quelqu'un"], bonne: 3, expl: "El burlador est celui qui trompe et se moque.", niv: 2 },
        { q: "Une affiche touristique montre une danseuse de flamenco et un taureau. Que dénoncer ?", choix: ["Une Espagne de pandereta, réduite aux clichés","Une image fidèle de toute l'Espagne","Une critique du tourisme de masse sur les côtes espagnoles","Une œuvre du Siglo de Oro"], bonne: 0, expl: "Ces images réduisent la diversité du pays à quelques clichés.", niv: 3 },
        { q: "Pourquoi dit-on que l'honneur est social au Siglo de Oro ?", choix: ["Il s'achète avec de l'argent","Il dépend du regard des autres","Il est réservé aux paysans","Il est accordé par le pape"], bonne: 1, expl: "La honra se perd par la rumeur, même sans faute réelle.", niv: 3 },
        { q: "Que fait souvent Almodóvar des clichés espagnols ?", choix: ["Il les montre sans les questionner","Il les interdit dans ses films","Il les remplace par des clichés américains","Il les détourne avec humour"], bonne: 3, expl: "Il joue avec le folklore pour montrer une Espagne moderne et libre.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-esp-4",
      fiche: `## Oppressions, résistances et révoltes

Le XXe siècle hispanique a connu de nombreuses **dictatures**, en Espagne comme en Amérique latine. Face à elles, des hommes et des femmes ont **résisté** : par les armes, par la parole, par l'art. Cet axe étudie la figure du **dictateur**, l'**art militant**, la **terre** comme enjeu de domination et la lutte contre le **machisme**.

### Le vocabulaire à connaître
- **la dictadura** : la dictature ; **el dictador** ; **el golpe de Estado** : le coup d'État ; **la junta militar**.
- **reprimir** : réprimer ; **la represión** ; **la censura** ; **encarcelar** : emprisonner ; **torturar**.
- **los desaparecidos** : les disparus ; **el exilio** ; **el miedo** : la peur ; **callar** : se taire.
- **resistir** ; **rebelarse** : se révolter ; **la lucha** : la lutte ; **luchar por** ; **la huelga** : la grève ; **la manifestación** : la manifestation.
- **el machismo** ; **la violencia de género** ; **la igualdad** : l'égalité ; **reivindicar** : revendiquer.

### Le dictateur, construction et déconstruction d'une figure
- **Francisco Franco** gouverne l'Espagne de **1939 à 1975**, après la guerre civile. Le régime s'appuie sur l'armée, l'Église et la censure.
- **Augusto Pinochet** prend le pouvoir au Chili par le coup d'État du **11 septembre 1973** contre Salvador Allende.
- En **Argentine**, la junte de **Jorge Videla** (1976-1983) fait environ 30 000 **desaparecidos**. Les **Madres de Plaza de Mayo** tournent chaque jeudi devant le palais présidentiel, un foulard blanc sur la tête, pour réclamer leurs enfants.
- La **novela del dictador** : *El señor Presidente* (Miguel Ángel Asturias), *Yo el Supremo* (Augusto Roa Bastos, 1974), *El otoño del patriarca* (García Márquez, 1975), *La fiesta del Chivo* (Mario Vargas Llosa, 2000, sur Trujillo en République dominicaine). Ces romans **démontent** le culte du chef : solitude, peur, grotesque.

### L'art militant
- **Pablo Picasso**, *Guernica* (1937) : le bombardement de la ville basque par l'aviation allemande alliée de Franco. Noir, blanc et gris, cris, corps disloqués.
- La **nueva canción** chilienne : **Víctor Jara**, tué après le coup d'État de 1973 ; **Violeta Parra**, « Gracias a la vida ».
- Le **muralisme** mexicain, les affiches, la photographie et le cinéma documentaire (*La batalla de Chile*, Patricio Guzmán).

### La terre, un enjeu de domination
- En Amérique latine, la terre est concentrée dans de grands domaines, les **latifundios**, alors que les paysans pauvres (**campesinos**) n'ont rien.
- **Emiliano Zapata** : « la tierra es de quien la trabaja ». Les **réformes agraires** ont tenté de redistribuer la terre.
- Les peuples autochtones défendent leurs terres : **Mapuches** au Chili, **Rigoberta Menchú** au Guatemala (prix Nobel de la paix en **1992**).

### Résister aux schémas de la société
- Le **machisme** et la famille patriarcale : sous Franco, la femme devait être une épouse soumise (la « **perfecta casada** »).
- *La casa de Bernarda Alba* (Federico García Lorca, 1936) : une mère enferme ses filles dans le deuil ; Adela se révolte.
- Aujourd'hui : le mouvement **Ni una menos** (Argentine, 2015) contre les **féminicides**, les grandes grèves féministes du **8 mars** en Espagne.

### À retenir pour le bac
- Franco (1939-1975), Pinochet (1973), Videla et les desaparecidos, Madres de Plaza de Mayo.
- Guernica, Víctor Jara, la novela del dictador ; la terre et Zapata ; Bernarda Alba et Ni una menos.`,
      cartes: [
        { q: "Traduire en espagnol : le coup d'État", r: "El golpe de Estado." },
        { q: "Que signifie « los desaparecidos » ?", r: "Les disparus, enlevés et tués en secret par les dictatures." },
        { q: "Traduire en espagnol : la grève", r: "La huelga." },
        { q: "Que signifie « encarcelar » ?", r: "Emprisonner." },
        { q: "Traduire en espagnol : se révolter", r: "Rebelarse (sublevarse)." },
        { q: "Que signifie « callar » ?", r: "Se taire." },
        { q: "Quand Franco a-t-il gouverné l'Espagne ?", r: "De 1939, fin de la guerre civile, à sa mort en 1975." },
        { q: "Que s'est-il passé au Chili le 11 septembre 1973 ?", r: "Le coup d'État de Pinochet contre le président Salvador Allende." },
        { q: "Qui sont les Madres de Plaza de Mayo ?", r: "Des mères argentines qui réclamaient leurs enfants disparus sous la dictature, un foulard blanc sur la tête." },
        { q: "Que représente Guernica de Picasso ?", r: "Le bombardement de la ville basque de Guernica en 1937, pendant la guerre civile." },
        { q: "Qui était Víctor Jara ?", r: "Un chanteur chilien de la nueva canción, tué après le coup d'État de 1973." },
        { q: "Qu'est-ce qu'un latifundio ?", r: "Un très grand domaine agricole possédé par un seul propriétaire." },
        { q: "Quelle phrase résume la lutte de Zapata ?", r: "« La tierra es de quien la trabaja »." },
        { q: "Qu'est-ce que le mouvement Ni una menos ?", r: "Un mouvement né en Argentine en 2015 contre les féminicides." },
        { q: "Quel roman de Vargas Llosa raconte la chute de Trujillo ?", r: "La fiesta del Chivo (2000)." },
      ],
      quiz: [
        { q: "Comment dit-on « la grève » en espagnol ?", choix: ["La grava","La huelga","La greña","La guerra"], bonne: 1, expl: "Hacer huelga = faire grève.", niv: 1 },
        { q: "Qui a peint Guernica ?", choix: ["Salvador Dalí","Pablo Picasso","Joan Miró","Diego Rivera"], bonne: 1, expl: "Picasso le peint en 1937 pour l'Exposition universelle de Paris.", niv: 1 },
        { q: "Que signifie « callar » ?", choix: ["Appeler","Chauffer","Calmer","Se taire"], bonne: 3, expl: "« Quien calla otorga » = qui ne dit mot consent.", niv: 1 },
        { q: "Quel dictateur a dirigé l'Espagne après la guerre civile ?", choix: ["Augusto Pinochet","Jorge Videla","Francisco Franco","Rafael Trujillo"], bonne: 2, expl: "Franco gouverne de 1939 à sa mort en 1975.", niv: 1 },
        { q: "En quelle année a eu lieu le coup d'État de Pinochet ?", choix: ["1975","1976","1973","1981"], bonne: 2, expl: "Le 11 septembre 1973, contre Salvador Allende.", niv: 2 },
        { q: "Que portent les Madres de Plaza de Mayo sur la tête ?", choix: ["Un foulard blanc","Un chapeau noir","Un bonnet rouge","Une couronne de fleurs"], bonne: 0, expl: "Le foulard blanc évoque les langes de leurs enfants.", niv: 2 },
        { q: "Qu'est-ce qu'un latifundio ?", choix: ["Une petite parcelle de paysan","Un très grand domaine agricole","Une coopérative d'ouvriers","Un quartier pauvre de la ville"], bonne: 1, expl: "La terre concentrée entre peu de mains est un enjeu de domination.", niv: 2 },
        { q: "Qui a reçu le prix Nobel de la paix en 1992 ?", choix: ["Violeta Parra","Gabriela Mistral","Frida Kahlo","Rigoberta Menchú"], bonne: 3, expl: "Militante maya quiché du Guatemala.", niv: 2 },
        { q: "Dans La casa de Bernarda Alba, qui se révolte contre la mère ?", choix: ["Bernarda","Poncia","Angustias","Adela"], bonne: 3, expl: "La plus jeune fille refuse l'enfermement et le deuil imposé.", niv: 2 },
        { q: "Que cherchent à faire les romans de dictateur comme Yo el Supremo ?", choix: ["Démonter le mythe du chef tout-puissant","Célébrer la grandeur du dictateur","Raconter la vie des paysans heureux","Écrire l'histoire officielle du régime"], bonne: 0, expl: "Ils montrent la solitude, la peur et le grotesque du pouvoir.", niv: 3 },
        { q: "Pourquoi Guernica est-il un tableau militant ?", choix: ["Il glorifie la victoire de Franco","Il décrit un paysage basque paisible","Il dénonce la violence contre des civils","Il illustre une scène du Siglo de Oro"], bonne: 2, expl: "Corps disloqués, cris, animaux affolés : c'est un cri contre la guerre.", niv: 3 },
        { q: "Quel lien entre Ni una menos et l'axe « oppressions, résistances et révoltes » ?", choix: ["Une révolution contre un dictateur","Une révolte contre la violence machiste","Une culture imposée par l'État","Un mythe fondateur raconté par les peuples andins"], bonne: 1, expl: "Le mouvement résiste à l'oppression des schémas sociaux.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-esp-5",
      fiche: `## Révolutions et ruptures

L'histoire du monde hispanique est marquée par de grandes **ruptures** : les **indépendances** du XIXe siècle, la **révolution mexicaine**, la **révolution cubaine**, l'expérience socialiste du **Chili d'Allende**, la **guerre civile** espagnole puis la **Transition** vers la démocratie. Il faut connaître les dates, les acteurs, mais aussi les **images** et les **mythes** qu'elles ont laissés.

### Le vocabulaire à connaître
- **la revolución** ; **el revolucionario** ; **derrocar** : renverser ; **tomar el poder** ; **el levantamiento** : le soulèvement.
- **la independencia** ; **independizarse** : devenir indépendant ; **el libertador** ; **la colonia** ; **la metrópoli**.
- **el pueblo** : le peuple ; **el campesino** : le paysan ; **el obrero** : l'ouvrier ; **el guerrillero** : le guérillero.
- **la guerra civil** ; **el bando** : le camp ; **los republicanos** et **los nacionales** ; **el frente** : le front.
- **la ruptura** ; **el cambio** : le changement ; **la utopía** ; **el desengaño** : la désillusion.

### Les indépendances (1810-1825)
- Le **16 septembre 1810**, le curé **Miguel Hidalgo** lance le « **Grito de Dolores** » : début de l'indépendance du Mexique (fête nationale).
- **Simón Bolívar**, « el Libertador », libère le Venezuela, la Colombie, l'Équateur, le Pérou et la Bolivie ; **José de San Martín** l'Argentine, le Chili et le Pérou.
- Rêve de Bolívar : une grande Amérique unie. Il échoue : le continent se divise en nombreuses républiques.

### La révolution mexicaine (1910-1920)
- Contre le dictateur **Porfirio Díaz**, **Francisco Madero** appelle au soulèvement en 1910.
- **Emiliano Zapata** au sud (« Tierra y libertad ») et **Pancho Villa** au nord deviennent des légendes. Les **adelitas** (soldaderas) accompagnent les combattants.
- Constitution de **1917** ; le **muralisme** (Diego Rivera, José Clemente Orozco, David Alfaro Siqueiros) raconte la révolution sur les murs pour le peuple.

### La révolution cubaine (1959)
- **Fidel Castro** et **Ernesto « Che » Guevara**, partis de la Sierra Maestra, renversent le dictateur **Fulgencio Batista** le **1er janvier 1959**.
- Le régime devient socialiste, proche de l'URSS ; **embargo** des États-Unis (1962). La photo du Che par **Alberto Korda** (1960) devient une icône mondiale.

### Le Chili d'Allende (1970-1973)
- **Salvador Allende**, élu en **1970** avec l'**Unidad Popular**, veut une « voie chilienne vers le socialisme » : nationalisation du cuivre, réforme agraire.
- Le **11 septembre 1973**, le palais de **La Moneda** est bombardé ; Allende meurt. Commence la dictature de Pinochet.

### L'Espagne : guerre civile et Transition
- La **Seconde République** (1931) ; le soulèvement militaire de **juillet 1936** ; la guerre civile oppose **républicains** et **nationalistes** jusqu'en **1939**. Les **Brigades internationales** viennent aider la République.
- Le rôle des **femmes** : les **milicianas** au front, comme le montre une photo célèbre de Gerda Taro.
- À la mort de Franco (**1975**), le roi **Juan Carlos Ier** et **Adolfo Suárez** mènent la **Transition** : Constitution de **1978**, tentative de coup d'État le **23 février 1981** (le « 23-F »).

### À retenir pour le bac
- Hidalgo (1810), Bolívar ; Zapata, Villa et les murales ; Castro, le Che et 1959 ; Allende (1970-1973).
- Guerre civile (1936-1939), Transition et Constitution de 1978. Penser à la désillusion après l'utopie.`,
      cartes: [
        { q: "Traduire en espagnol : renverser un gouvernement", r: "Derrocar un gobierno." },
        { q: "Que signifie « el levantamiento » ?", r: "Le soulèvement." },
        { q: "Traduire en espagnol : le paysan", r: "El campesino." },
        { q: "Que signifie « el desengaño » ?", r: "La désillusion, la déception." },
        { q: "Traduire en espagnol : le camp (dans une guerre)", r: "El bando." },
        { q: "Qu'est-ce que le Grito de Dolores ?", r: "L'appel du curé Hidalgo, le 16 septembre 1810, qui lance l'indépendance du Mexique." },
        { q: "Pourquoi Bolívar est-il appelé el Libertador ?", r: "Il a libéré de l'Espagne le Venezuela, la Colombie, l'Équateur, le Pérou et la Bolivie." },
        { q: "Contre qui éclate la révolution mexicaine en 1910 ?", r: "Contre le dictateur Porfirio Díaz." },
        { q: "Quel était le slogan de Zapata ?", r: "« Tierra y libertad »." },
        { q: "Qui sont les adelitas ?", r: "Les femmes qui accompagnaient et parfois combattaient avec les révolutionnaires mexicains." },
        { q: "Quand Castro prend-il le pouvoir à Cuba ?", r: "Le 1er janvier 1959, en renversant Batista." },
        { q: "Qu'est-ce que l'Unidad Popular ?", r: "La coalition de gauche qui porte Salvador Allende au pouvoir au Chili en 1970." },
        { q: "Quelles sont les dates de la guerre civile espagnole ?", r: "De juillet 1936 à avril 1939." },
        { q: "Qu'est-ce que la Transition espagnole ?", r: "Le passage de la dictature à la démocratie après 1975, avec la Constitution de 1978." },
        { q: "Qu'est-ce que le 23-F ?", r: "La tentative de coup d'État du 23 février 1981 au Congrès des députés, qui échoue." },
      ],
      quiz: [
        { q: "Comment dit-on « renverser » un gouvernement ?", choix: ["Derramar","Derretir","Desarrollar","Derrocar"], bonne: 3, expl: "Derramar = verser ; derretir = fondre ; desarrollar = développer.", niv: 1 },
        { q: "Qui a renversé Batista à Cuba ?", choix: ["Salvador Allende","Pancho Villa","Fidel Castro","Simón Bolívar"], bonne: 2, expl: "Avec le Che Guevara, le 1er janvier 1959.", niv: 1 },
        { q: "Quel était le slogan d'Emiliano Zapata ?", choix: ["Tierra y libertad","Patria o muerte","No pasarán","Venceremos"], bonne: 0, expl: "Zapata réclamait la terre pour les paysans.", niv: 1 },
        { q: "Que signifie « el campesino » ?", choix: ["Le campeur","Le champion","Le chameau","Le paysan"], bonne: 3, expl: "El campo = la campagne ; el campesino y travaille.", niv: 1 },
        { q: "En quelle année commence la guerre civile espagnole ?", choix: ["1931","1936","1923","1914"], bonne: 1, expl: "Le soulèvement militaire a lieu en juillet 1936 ; la République date de 1931.", niv: 2 },
        { q: "Que commémore la fête nationale mexicaine du 16 septembre ?", choix: ["La mort de Zapata","La Constitution de 1917","Le Grito de Dolores de 1810","L'arrivée de Cortés"], bonne: 2, expl: "Le curé Hidalgo appelle à se soulever contre l'Espagne.", niv: 2 },
        { q: "Comment Allende arrive-t-il au pouvoir en 1970 ?", choix: ["Il fait un coup d'État","Il mène une guérilla","Il est nommé par le roi","Il est élu"], bonne: 3, expl: "Une « voie chilienne vers le socialisme » par les urnes.", niv: 2 },
        { q: "Quels peintres racontent la révolution mexicaine sur les murs ?", choix: ["Les surréalistes","Les muralistes","Les impressionnistes","Les cubistes"], bonne: 1, expl: "Rivera, Orozco et Siqueiros peignent pour le peuple.", niv: 2 },
        { q: "Que signifie « el desengaño » ?", choix: ["Le dégagement","La tromperie volontaire","La désillusion","Le danger"], bonne: 2, expl: "Après l'utopie révolutionnaire vient souvent el desengaño.", niv: 2 },
        { q: "Pourquoi la photo du Che par Korda est-elle devenue une icône ?", choix: ["Elle symbolise la révolte dans le monde entier","Elle est la seule photo de Cuba","Elle a été peinte par Picasso pour l'Exposition de 1937","Elle montre la mort du Che"], bonne: 0, expl: "Reproduite partout, elle est devenue un symbole, parfois commercial.", niv: 3 },
        { q: "Pourquoi la Transition espagnole est-elle une rupture sans révolution ?", choix: ["Le passage à la démocratie se fait par des lois et un consensus","Le peuple prend le palais royal par les armes et chasse le roi d'Espagne","Franco organise lui-même des élections libres","L'armée remplace le roi par un président"], bonne: 0, expl: "Constitution de 1978 votée par référendum, malgré le 23-F.", niv: 3 },
        { q: "Un document montre une miliciana de 1936 en uniforme. Quelle idée développer ?", choix: ["La victoire des troupes nationalistes de Franco en 1939","Le mythe de l'Eldorado","La fête populaire espagnole","La rupture avec la place traditionnelle des femmes"], bonne: 3, expl: "Les femmes au front rompent avec le rôle d'épouse soumise.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-esp-6",
      fiche: `## Culture officielle et émancipations culturelles

Les régimes autoritaires veulent contrôler la culture : ils **censurent**, imposent une culture **officielle** et une seule vision de la nation. En réaction, des artistes inventent une culture **alternative**, **underground** ou **populaire**, qui libère la parole et le corps. Cet axe oppose ces deux mondes.

### Le vocabulaire à connaître
- **la censura** ; **censurar** ; **prohibir** : interdire ; **la propaganda** ; **el adoctrinamiento**.
- **oficial** ; **el régimen** ; **la consigna** : le mot d'ordre ; **el culto a la personalidad**.
- **la contracultura** ; **la movida** ; **la libertad de expresión** ; **transgredir** ; **provocar**.
- **el grafiti** ; **la pintada** : l'inscription sur un mur ; **el arte callejero** : l'art de rue ; **el muro** et **la pared** : le mur.
- **el luchador** : le lutteur ; **la máscara** : le masque ; **el cómic** ; **el fanzine**.

### La culture officielle
- Sous **Franco**, la culture doit servir la religion catholique et l'unité de l'Espagne. La **censure** contrôle livres, films et chansons. Les actualités filmées du **NO-DO** passent avant chaque film au cinéma. Les langues régionales (catalan, basque, galicien) sont réprimées.
- On promeut le folklore, les taureaux et le football : une Espagne traditionnelle et sans politique.

### La culture « a lo presidente »
- À **Cuba**, Fidel Castro fixe la règle aux intellectuels en **1961** : « **Dentro de la Revolución, todo; contra la Revolución, nada** ». Des écrivains comme **Reinaldo Arenas** sont persécutés.
- La **Nueva Trova** (Silvio Rodríguez, Pablo Milanés) chante la révolution, avec parfois des critiques voilées.
- Au **Venezuela**, **Hugo Chávez** (au pouvoir de 1999 à 2013) anime chaque dimanche à la télévision son émission *Aló Presidente* : le président devient vedette.

### L'underground, de Barcelone à la Movida madrilène
- Dans les années 1970, **Barcelone** voit naître une culture libre : bandes dessinées underground (Nazario), fanzines, scène alternative.
- Après la mort de Franco, la **Movida madrileña** (environ 1977-1986) explose : musique pop et punk (**Alaska**, Radio Futura), photographie (Ouka Leele), cinéma de **Pedro Almodóvar** (*Pepi, Luci, Bom*, 1980). On provoque, on se libère, on fait la fête.
- Le maire de Madrid **Enrique Tierno Galván** soutient ce mouvement.

### Deux cultures populaires et alternatives
- La **lucha libre** mexicaine : lutteurs **masqués** (**El Santo**, héros de films), combats entre « técnicos » (les bons) et « rudos » (les méchants). Le masque ne doit jamais tomber. Spectacle populaire, il devient aussi symbole politique : **Superbarrio** défend les habitants des quartiers pauvres.
- Le **boom de l'arte callejero** : les murs de **Valparaíso** (Chili), de Bogotá ou de Mexico se couvrent de fresques. L'art sort des musées, souvent pour **dénoncer**. Il prolonge le **muralisme**.

### Ce qu'il faut savoir analyser
- Qui produit l'œuvre ? Pour qui ? Dans quel lieu (musée, rue, télévision) ?
- Quelle **transgression** : couleurs, langage cru, corps, humour ?

### À retenir pour le bac
- Franco : censure, NO-DO, langues régionales réprimées. Castro : « dentro de la Revolución, todo ». Chávez : Aló Presidente.
- Movida madrilène, Almodóvar, Alaska ; lucha libre et El Santo ; arte callejero de Valparaíso.`,
      cartes: [
        { q: "Traduire en espagnol : interdire", r: "Prohibir." },
        { q: "Que signifie « la pintada » ?", r: "Une inscription peinte sur un mur, souvent politique." },
        { q: "Traduire en espagnol : l'art de rue", r: "El arte callejero." },
        { q: "Que signifie « la consigna » ?", r: "Le mot d'ordre, le slogan (faux ami : pas la consigne d'une gare)." },
        { q: "Traduire en espagnol : le masque", r: "La máscara." },
        { q: "Qu'est-ce que le NO-DO ?", r: "Les actualités filmées de propagande projetées avant les films sous Franco." },
        { q: "Quelle règle Castro fixe-t-il aux intellectuels en 1961 ?", r: "« Dentro de la Revolución, todo; contra la Revolución, nada »." },
        { q: "Qu'est-ce que Aló Presidente ?", r: "L'émission de télévision où Hugo Chávez parlait chaque dimanche aux Vénézuéliens." },
        { q: "Qu'est-ce que la Movida madrileña ?", r: "Le mouvement culturel libre et provocateur de Madrid après la mort de Franco (fin des années 1970 et années 1980)." },
        { q: "Quel cinéaste est né de la Movida ?", r: "Pedro Almodóvar." },
        { q: "Qui est El Santo ?", r: "Le plus célèbre lutteur masqué de la lucha libre mexicaine, héros de nombreux films." },
        { q: "Que sont les técnicos et les rudos ?", r: "Dans la lucha libre, les lutteurs gentils et les lutteurs méchants." },
        { q: "Quelle ville chilienne est célèbre pour ses fresques de rue ?", r: "Valparaíso." },
        { q: "Qu'est-ce que la Nueva Trova cubaine ?", r: "Un mouvement de chanson engagée lié à la révolution (Silvio Rodríguez, Pablo Milanés)." },
      ],
      quiz: [
        { q: "Comment dit-on « interdire » en espagnol ?", choix: ["Prohibir","Profanar","Proponer","Procurar"], bonne: 0, expl: "Prohibido fumar = interdit de fumer.", niv: 1 },
        { q: "Que signifie « el arte callejero » ?", choix: ["L'art de rue","L'art des calèches","L'art du silence","L'art de la cuisine"], bonne: 0, expl: "La calle = la rue.", niv: 1 },
        { q: "Quel cinéaste est le symbole de la Movida ?", choix: ["Luis Buñuel","Carlos Saura","Icíar Bollaín","Pedro Almodóvar"], bonne: 3, expl: "Son premier long métrage, Pepi, Luci, Bom, sort en 1980.", niv: 1 },
        { q: "Que portent les lutteurs de la lucha libre ?", choix: ["Une armure","Un masque","Un sombrero","Une cape de torero"], bonne: 1, expl: "La máscara cache l'identité du luchador.", niv: 1 },
        { q: "Dans quelle ville naît la Movida ?", choix: ["Madrid","Barcelone","Séville","Bilbao"], bonne: 0, expl: "Avec le soutien du maire Tierno Galván.", niv: 2 },
        { q: "Que veut dire la phrase de Castro « contra la Revolución, nada » ?", choix: ["Les artistes sont libres de tout dire","La révolution est terminée","Les étrangers ne peuvent pas créer à Cuba","Aucune œuvre ne doit critiquer le régime"], bonne: 3, expl: "La liberté de création s'arrête à la critique du pouvoir.", niv: 2 },
        { q: "Sous Franco, quelles langues sont réprimées ?", choix: ["L'espagnol et le latin","L'anglais et le français des étrangers","Les langues amérindiennes","Le catalan, le basque et le galicien"], bonne: 3, expl: "Le régime impose le castillan comme langue de l'unité nationale.", niv: 2 },
        { q: "Qu'est-ce qu'une pintada ?", choix: ["Une pinte de bière","Une inscription peinte sur un mur","Une peinture accrochée dans un musée d'art","Une note de musique"], bonne: 1, expl: "Souvent un slogan politique écrit dans la rue.", niv: 2 },
        { q: "Que montre l'émission Aló Presidente ?", choix: ["Un débat libre entre opposants","Un concours de chanson populaire","Un président devenu vedette de télévision","Un journal satirique contre le pouvoir"], bonne: 2, expl: "C'est la culture « a lo presidente » : le chef occupe l'écran.", niv: 2 },
        { q: "Pourquoi la Movida est-elle une émancipation culturelle ?", choix: ["Elle célèbre la culture officielle voulue par Franco et l'Église","Elle interdit la musique étrangère","Elle reprend les valeurs de l'Église","Elle libère la parole et le corps après la censure"], bonne: 3, expl: "Provocation, couleurs, sexualité : tout ce que le franquisme interdisait.", niv: 3 },
        { q: "Pourquoi Superbarrio est-il plus qu'un lutteur ?", choix: ["Il est le lutteur officiel du gouvernement","Il a interdit la lucha libre au Mexique","Il utilise la lucha libre pour défendre les pauvres","Il a gagné le titre de champion du monde de lucha libre"], bonne: 2, expl: "La culture populaire devient une arme politique.", niv: 3 },
        { q: "Une fresque de rue à Valparaíso dénonce la pauvreté. Quel lien avec le muralisme mexicain ?", choix: ["Le muralisme et l'art de rue servent le pouvoir officiel","Ces fresques refusent toute couleur vive","Le muralisme est né à Valparaíso en 2010","L'art sort des musées pour parler au peuple"], bonne: 3, expl: "Comme Rivera, l'art callejero s'adresse à tous, dans la rue.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-esp-7",
      fiche: `## Monde globalisé, contacts et influences

L'espagnol est aujourd'hui l'une des grandes langues du monde, et la culture hispanique circule partout : musique, séries, cuisine, football. Mais la **mondialisation** a aussi un prix : dépendance économique, **destruction de l'environnement**, démocraties fragiles. Cet axe étudie ces contacts et ces tensions.

### Le vocabulaire à connaître
- **la globalización** (ou **mundialización**) ; **globalizado** ; **el intercambio** : l'échange ; **la empresa multinacional**.
- **el medio ambiente** : l'environnement ; **la deforestación** ; **la contaminación** : la pollution ; **el cambio climático** ; **la sequía** : la sécheresse ; **proteger**.
- **las materias primas** : les matières premières ; **el extractivismo** ; **la mina** ; **el litio** ; **el cobre** : le cuivre.
- **la democracia** ; **las elecciones** ; **el populismo** ; **la corrupción** ; **la desigualdad** : l'inégalité.
- **la influencia** ; **el éxito** : le succès (faux ami : pas la sortie) ; **difundir** : diffuser ; **la serie**.

### Une langue et une culture mondiales
- Environ **500 millions** de personnes ont l'espagnol pour langue maternelle : c'est la **deuxième** langue maternelle du monde après le chinois mandarin. Le **Mexique** est le premier pays hispanophone.
- L'**Instituto Cervantes** (créé en **1991**) diffuse la langue et la culture espagnoles dans le monde.
- **Musique** : reggaeton (Bad Bunny, de Porto Rico), pop latine (Shakira, de Colombie ; Rosalía, d'Espagne, qui mêle flamenco et musiques urbaines). Le hit « Despacito » (2017) a battu des records d'écoute.
- **Séries** : *La casa de papel* (Espagne, 2017) ou *Narcos* sont vues dans le monde entier. Les **telenovelas** latino-américaines s'exportent depuis longtemps.
- **Cuisine** : tapas, tacos, ceviche péruvien.

### La mondialisation en question : intégration, succès et limites
- L'**Espagne** entre dans la Communauté européenne en **1986** ; elle a connu une forte croissance, puis une grave crise en 2008. Des marques mondiales sont espagnoles (Zara, du groupe Inditex).
- L'**Amérique latine** s'organise en marchés communs (**Mercosur**, 1991). Elle reste très dépendante de l'exportation de **matières premières** : cuivre au Chili, soja en Argentine, pétrole au Venezuela.
- C'est l'une des régions les plus **inégalitaires** du monde.

### La destruction de l'environnement et sa défense
- **Déforestation** de l'Amazonie (Pérou, Bolivie, Colombie, et surtout le Brésil voisin).
- **Extractivisme** : mines à ciel ouvert, et aujourd'hui le **lithium** du « triangle du lithium » (Bolivie, Chili, Argentine), indispensable aux batteries.
- Des défenseurs de la nature sont menacés, parfois tués : **Berta Cáceres** (Honduras), assassinée en 2016 pour avoir défendu une rivière contre un barrage.
- Idée andine du **buen vivir** (« sumak kawsay ») : vivre en harmonie avec la nature ; l'**Équateur** reconnaît des **droits à la nature** dans sa Constitution de 2008.

### Les démocraties en danger
- Coups d'État passés, corruption, pouvoir personnel, violence des cartels : les démocraties restent fragiles. Les citoyens manifestent pour défendre leurs droits.

### À retenir pour le bac
- Espagnol : environ 500 millions de natifs, deuxième langue maternelle ; Instituto Cervantes ; reggaeton, Rosalía, séries.
- Dépendance aux matières premières, inégalités ; Amazonie, lithium, Berta Cáceres, buen vivir.`,
      cartes: [
        { q: "Traduire en espagnol : l'environnement", r: "El medio ambiente." },
        { q: "Que signifie « la sequía » ?", r: "La sécheresse." },
        { q: "Traduire en espagnol : les matières premières", r: "Las materias primas." },
        { q: "Que signifie « el éxito » ?", r: "Le succès (faux ami : la sortie se dit la salida)." },
        { q: "Traduire en espagnol : l'inégalité", r: "La desigualdad." },
        { q: "Que signifie « difundir » ?", r: "Diffuser, répandre." },
        { q: "Combien de personnes ont l'espagnol pour langue maternelle ?", r: "Environ 500 millions : c'est la deuxième langue maternelle du monde." },
        { q: "Quel est le premier pays hispanophone par la population ?", r: "Le Mexique." },
        { q: "Qu'est-ce que l'Instituto Cervantes ?", r: "L'organisme public espagnol, créé en 1991, qui diffuse la langue et la culture dans le monde." },
        { q: "Quand l'Espagne entre-t-elle dans la Communauté européenne ?", r: "En 1986." },
        { q: "Qu'est-ce que l'extractivisme ?", r: "Une économie fondée sur l'extraction et l'exportation massive de ressources naturelles." },
        { q: "Qu'est-ce que le triangle du lithium ?", r: "La zone entre la Bolivie, le Chili et l'Argentine, riche en lithium pour les batteries." },
        { q: "Qui était Berta Cáceres ?", r: "Une militante écologiste hondurienne, assassinée en 2016 pour avoir défendu une rivière." },
        { q: "Qu'est-ce que le buen vivir ?", r: "L'idéal andin de vivre en harmonie avec la nature et la communauté (sumak kawsay)." },
      ],
      quiz: [
        { q: "Comment dit-on « l'environnement » en espagnol ?", choix: ["El medio ambiente","El ambiente medio","El entorno social","La ambientación"], bonne: 0, expl: "On dit aussi « el entorno » pour l'entourage, le cadre.", niv: 1 },
        { q: "Que signifie « el éxito » ?", choix: ["Le succès","La sortie","L'exil","L'excès"], bonne: 0, expl: "La sortie se dit « la salida ».", niv: 1 },
        { q: "De quel pays vient le chanteur Bad Bunny ?", choix: ["Espagne","Argentine","Chili","Porto Rico"], bonne: 3, expl: "Il est la grande vedette du reggaeton.", niv: 1 },
        { q: "Quel pays compte le plus d'hispanophones ?", choix: ["Le Mexique","L'Espagne","La Colombie","L'Argentine"], bonne: 0, expl: "Plus de 120 millions d'habitants.", niv: 1 },
        { q: "Combien de personnes ont l'espagnol pour langue maternelle ?", choix: ["Environ 50 millions","Environ 100 millions","Environ 500 millions","Environ 200 millions"], bonne: 2, expl: "C'est la deuxième langue maternelle du monde.", niv: 2 },
        { q: "En quelle année l'Espagne rejoint-elle la Communauté européenne ?", choix: ["1986","1957","1975","1978"], bonne: 0, expl: "Onze ans après la mort de Franco.", niv: 2 },
        { q: "Que signifie « la sequía » ?", choix: ["La suite","La sécheresse","La sécurité","La seiche"], bonne: 1, expl: "Le changement climatique aggrave la sequía en Espagne.", niv: 2 },
        { q: "Quelle ressource du triangle andin attire le monde entier ?", choix: ["Le charbon","L'uranium","Le lithium","Le cacao"], bonne: 2, expl: "Il sert aux batteries des voitures électriques.", niv: 2 },
        { q: "Qui mêle flamenco et musiques urbaines ?", choix: ["Shakira","Bad Bunny","Rosalía","Violeta Parra"], bonne: 2, expl: "Chanteuse catalane, révélée par El mal querer (2018).", niv: 2 },
        { q: "Pourquoi l'économie latino-américaine est-elle fragile ?", choix: ["Elle dépend de l'exportation de matières premières","Elle ne vend rien à l'étranger","Elle n'a pas de ressources naturelles","Elle utilise l'euro comme monnaie depuis son union avec l'Espagne"], bonne: 0, expl: "Quand les cours du cuivre ou du pétrole baissent, tout le pays souffre.", niv: 3 },
        { q: "Que signifie accorder des droits à la nature, comme l'Équateur ?", choix: ["La nature appartient à l'État seul","La nature peut être vendue librement","La nature est protégée comme une personne","Les animaux peuvent voter"], bonne: 2, expl: "Inspiré du buen vivir : la nature n'est pas seulement une ressource.", niv: 3 },
        { q: "Un article décrit Zara présente dans 90 pays. Quel axe ?", choix: ["Nature et mythologies","Révolutions et ruptures dans l'histoire du Mexique","Du type au stéréotype","Monde globalisé, contacts et influences"], bonne: 3, expl: "Une entreprise espagnole mondialisée.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-esp-8",
      fiche: `## Crises et violences

Depuis la fin du XXe siècle, le monde hispanique a traversé de grandes **crises** : effondrement économique en Argentine, crise de 2008 en Espagne, conflit armé en Colombie, tensions autour de l'unité de l'Espagne. Ces crises ont fait naître des **mouvements citoyens** et beaucoup d'œuvres (films, romans, chansons).

### Le vocabulaire à connaître
- **la crisis** ; **el paro** : le chômage ; **el parado** : le chômeur ; **la deuda** : la dette ; **los recortes** : les coupes budgétaires.
- **el desahucio** : l'expulsion d'un logement ; **la hipoteca** : le prêt immobilier ; **la burbuja inmobiliaria** : la bulle immobilière.
- **la protesta** ; **indignarse** ; **el movimiento** ; **acampar** : camper ; **la cacerola** : la casserole.
- **el conflicto armado** ; **la guerrilla** ; **el secuestro** : l'enlèvement ; **el narcotráfico** ; **las víctimas** ; **la paz** ; **el acuerdo**.
- **la independencia** ; **el independentismo** ; **la monarquía** ; **el referéndum** ; **la autonomía**.

### La crise en Espagne
- Dans les années 2000, l'Espagne construit énormément : c'est la **burbuja inmobiliaria**. En **2008**, elle éclate. Le **chômage** dépasse **25 %** en 2013, et plus de 50 % chez les jeunes.
- Des milliers de familles ne peuvent plus payer leur **hipoteca** et subissent des **desahucios**. La PAH (plateforme des victimes des prêts) s'y oppose ; **Ada Colau**, une de ses porte-parole, devient maire de Barcelone (2015).
- Le **15 mai 2011**, des jeunes occupent la **Puerta del Sol** à Madrid : c'est le mouvement des **Indignados** ou **15-M** (« no somos mercancía en manos de políticos y banqueros »).
- La crise devient aussi une crise **des institutions** : scandales de corruption, perte de confiance dans les partis, et dans la monarchie (abdication de Juan Carlos Ier en **2014**).

### L'Argentine de 2001 : corralito et cacerolazos
- En **décembre 2001**, le gouvernement bloque les comptes bancaires : c'est le **corralito** (le « petit enclos »). Les Argentins tapent sur des casseroles dans les rues : les **cacerolazos**. Slogan : « **¡Que se vayan todos!** ».
- Le président **De la Rúa** démissionne. Le pays connaît une misère massive ; des ouvriers récupèrent leurs usines en coopératives.

### FARC et conflit armé colombien
- Les **FARC**, guérilla marxiste née en **1964**, combattent l'État colombien pendant plus de cinquante ans. Les **paramilitaires** d'extrême droite et les **narcotrafiquants** (Pablo Escobar, cartel de Medellín) ajoutent à la violence.
- Bilan : plus de **200 000 morts**, des millions de **déplacés**, des **enlèvements** (Ingrid Betancourt, de 2002 à 2008).
- **Accord de paix** de **2016**, signé par le président **Juan Manuel Santos**, prix Nobel de la paix la même année. La paix reste fragile.

### L'unité espagnole en question
- La Constitution de 1978 crée des **communautés autonomes**. Mais des mouvements veulent l'**indépendance**.
- Au **Pays basque**, l'organisation terroriste **ETA** a tué plus de 800 personnes ; elle annonce la fin de la violence en **2011** et sa dissolution en **2018**. Le roman *Patria* de Fernando Aramburu (2016) raconte cette blessure.
- En **Catalogne**, un **référendum** d'indépendance interdit par la justice a lieu le **1er octobre 2017** ; le Parlement catalan proclame l'indépendance, Madrid suspend l'autonomie.

### À retenir pour le bac
- Espagne : bulle de 2008, paro, desahucios, 15-M (2011), abdication de 2014.
- Argentine 2001 : corralito, cacerolazos, « que se vayan todos ». Colombie : FARC (1964), accord de paix (2016).
- ETA (dissoute en 2018), référendum catalan du 1er octobre 2017.`,
      cartes: [
        { q: "Traduire en espagnol : le chômage", r: "El paro (el desempleo)." },
        { q: "Que signifie « el desahucio » ?", r: "L'expulsion d'un logement, faute de pouvoir payer." },
        { q: "Traduire en espagnol : la dette", r: "La deuda." },
        { q: "Que signifie « la hipoteca » ?", r: "Le prêt immobilier (l'hypothèque)." },
        { q: "Traduire en espagnol : l'enlèvement", r: "El secuestro." },
        { q: "Que signifie « los recortes » ?", r: "Les coupes budgétaires." },
        { q: "Qu'est-ce que la burbuja inmobiliaria ?", r: "La bulle immobilière espagnole qui éclate en 2008." },
        { q: "Qu'est-ce que le 15-M ?", r: "Le mouvement des Indignados, né le 15 mai 2011 à la Puerta del Sol de Madrid." },
        { q: "Qu'est-ce que le corralito ?", r: "Le blocage des comptes bancaires en Argentine en décembre 2001." },
        { q: "Qu'est-ce qu'un cacerolazo ?", r: "Une manifestation où l'on tape sur des casseroles." },
        { q: "Quel slogan crient les Argentins en 2001 ?", r: "« ¡Que se vayan todos! »" },
        { q: "Que sont les FARC ?", r: "Une guérilla marxiste colombienne née en 1964, signataire d'un accord de paix en 2016." },
        { q: "Quel président colombien reçoit le prix Nobel de la paix en 2016 ?", r: "Juan Manuel Santos." },
        { q: "Quand ETA s'est-elle dissoute ?", r: "En 2018, après avoir renoncé à la violence en 2011." },
        { q: "Que s'est-il passé en Catalogne le 1er octobre 2017 ?", r: "Un référendum d'indépendance interdit par la justice espagnole." },
      ],
      quiz: [
        { q: "Comment dit-on « le chômage » en espagnol ?", choix: ["La parada","El paro","El paraguas","La pareja"], bonne: 1, expl: "Estar en paro = être au chômage.", niv: 1 },
        { q: "Que signifie « la cacerola » ?", choix: ["La caserne","La cassette","La casserole","La cachette"], bonne: 2, expl: "D'où le cacerolazo, manifestation bruyante.", niv: 1 },
        { q: "Où commence le mouvement du 15-M ?", choix: ["Sur les Ramblas de Barcelone","À la Puerta del Sol de Madrid","À la Plaza de Mayo de Buenos Aires","Au Zócalo de Mexico"], bonne: 1, expl: "Les Indignados y campent dès le 15 mai 2011.", niv: 1 },
        { q: "Que signifie « el secuestro » ?", choix: ["L'enlèvement","Le secret","Le secours","La sécheresse"], bonne: 0, expl: "Ingrid Betancourt a été séquestrée par les FARC.", niv: 1 },
        { q: "Dans quel pays a lieu le corralito ?", choix: ["Le Chili","L'Argentine","L'Uruguay","Le Venezuela"], bonne: 1, expl: "En décembre 2001, les comptes bancaires sont bloqués.", niv: 2 },
        { q: "En quelle année est signé l'accord de paix avec les FARC ?", choix: ["2011","2008","2002","2016"], bonne: 3, expl: "Le président Santos reçoit le Nobel de la paix la même année.", niv: 2 },
        { q: "Que veut dire « ¡Que se vayan todos! » ?", choix: ["Que tout le monde vienne","Que tous s'en aillent","Que chacun reste chez soi","Que les banques ferment"], bonne: 1, expl: "Un rejet de toute la classe politique.", niv: 2 },
        { q: "Que sont les desahucios ?", choix: ["Des aides de l'État","Des grèves d'étudiants","Des expulsions de logement","Des élections anticipées"], bonne: 2, expl: "Les familles qui ne payaient plus leur hipoteca perdaient leur maison.", niv: 2 },
        { q: "Quel roman raconte la blessure du terrorisme d'ETA ?", choix: ["La fiesta del Chivo","Patria","Cien años de soledad","Pedro Páramo"], bonne: 1, expl: "Fernando Aramburu, 2016, adapté en série.", niv: 2 },
        { q: "Pourquoi parle-t-on aussi d'une crise des institutions en Espagne ?", choix: ["Le pays redevient une dictature militaire, comme sous Franco autrefois","Les citoyens perdent confiance dans les partis et la monarchie","La Constitution est supprimée","L'Espagne quitte l'Union européenne"], bonne: 1, expl: "Corruption, abdication de 2014, mouvement des Indignados.", niv: 3 },
        { q: "Pourquoi la paix en Colombie reste-t-elle fragile ?", choix: ["Les FARC ont gagné la guerre","Le pays n'a pas signé d'accord","Des groupes armés et le narcotrafic continuent la violence","La guérilla est devenue un parti interdit par la justice colombienne"], bonne: 2, expl: "Dissidents, paramilitaires et cartels n'ont pas désarmé.", niv: 3 },
        { q: "Un photographe montre une famille et ses meubles sur un trottoir de Madrid en 2012. Quel thème ?", choix: ["La Movida madrilène","La révolution mexicaine","La crise et les desahucios","Le mythe d'El Dorado"], bonne: 2, expl: "La crise économique se lit dans ces expulsions.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-esp-9",
      fiche: `## La frontière en question

Le monde hispanique est traversé par deux frontières très surveillées : celle entre le **Mexique et les États-Unis**, et le **détroit de Gibraltar** entre l'Afrique et l'Europe. Mais il existe aussi des frontières **sociales** à l'intérieur des villes. Cet axe montre la frontière comme lieu de **tension**, de **drame** et de **création**.

### Le vocabulaire à connaître
- **la frontera** ; **cruzar** : traverser ; **el muro** : le mur ; **la valla** : la clôture ; **la alambrada** : les barbelés.
- **el/la migrante** ; **emigrar** ; **inmigrar** ; **el indocumentado** (« sin papeles ») ; **deportar** : expulser.
- **la patera** : la petite barque de migrants ; **el cayuco** : la pirogue ; **ahogarse** : se noyer ; **el naufragio** : le naufrage ; **la orilla** : la rive.
- **el coyote** : le passeur (à la frontière mexicaine) ; **el sueño americano** ; **la remesa** : l'argent envoyé à la famille.
- **el barrio** : le quartier ; **la periferia** ; **la chabola** : la baraque ; **la villa miseria** (Argentine) ; **la marginación** : l'exclusion.

### La frontière avec le Nord : entre tension et création
- Environ **3 100 km** séparent le Mexique des États-Unis. Le **mur** a été renforcé depuis les années 1990, puis par Donald Trump.
- Les migrants mexicains et centraméricains (Honduras, Guatemala, Salvador) fuient la pauvreté et la violence. Beaucoup voyagent sur le toit du train de marchandises surnommé **La Bestia**. Ils paient des **coyotes** ; certains meurent dans le **désert de Sonora**.
- Aux États-Unis vivent environ **60 millions d'Hispaniques**. Les **Chicanos** (Américains d'origine mexicaine) ont créé leur culture : peintures murales, littérature, **Spanglish**.
- **Gloria Anzaldúa**, *Borderlands/La Frontera* (1987) : la frontière est « una herida abierta », une blessure ouverte, mais aussi un lieu où naît une identité **métisse**.
- Des artistes jouent avec le mur : balançoires roses installées à travers le mur (2019), fresques côté mexicain à **Tijuana**.
- Au cinéma : *Sin nombre* (Cary Fukunaga, 2009), *Babel* (Alejandro González Iñárritu, 2006).

### Traverser le Détroit
- Le **détroit de Gibraltar** ne fait que **14 km**. Depuis les années 1990, des migrants marocains et subsahariens tentent la traversée en **pateras**. Beaucoup se **noient**.
- Les villes espagnoles de **Ceuta** et **Melilla**, en Afrique, sont entourées de **vallas** de plusieurs mètres que des migrants tentent de franchir.
- Aujourd'hui, la route passe aussi par les **îles Canaries**, en **cayucos** depuis le Sénégal ou la Mauritanie.
- Des œuvres : le roman *Las voces del Estrecho* (Andrés Sorel), de nombreuses photos de presse et chansons (« Clandestino », Manu Chao, 1998).

### La frontière sociale au cœur de la création
- À l'intérieur même des villes, des murs invisibles séparent les quartiers riches des **villas miseria** (Buenos Aires) ou des quartiers pauvres de Lima. Certains quartiers riches sont des **barrios cerrados**, fermés et gardés.
- Le cinéma montre ces frontières : *Roma* (Alfonso Cuarón, 2018), où une employée de maison indigène vit au service d'une famille aisée de Mexico.

### De l'espace privé à l'espace public
- L'art (grafiti, performances, installations) **abolit les frontières** : il fait sortir l'intime dans la rue, donne une voix aux exclus.

### À retenir pour le bac
- Mexique–États-Unis : 3 100 km, La Bestia, coyotes, Chicanos, Anzaldúa (« herida abierta »).
- Détroit : 14 km, pateras, Ceuta et Melilla, cayucos vers les Canaries ; Manu Chao.
- Frontières sociales : villas miseria, barrios cerrados, Roma.`,
      cartes: [
        { q: "Traduire en espagnol : traverser la frontière", r: "Cruzar la frontera." },
        { q: "Que signifie « la valla » ?", r: "La clôture, la barrière." },
        { q: "Traduire en espagnol : se noyer", r: "Ahogarse." },
        { q: "Que signifie « la patera » ?", r: "La petite barque utilisée par les migrants pour traverser le détroit." },
        { q: "Traduire en espagnol : le passeur (frontière mexicaine)", r: "El coyote (el pollero)." },
        { q: "Que signifie « la remesa » ?", r: "L'argent envoyé par un migrant à sa famille restée au pays." },
        { q: "Traduire en espagnol : le sans-papiers", r: "El indocumentado, el sin papeles." },
        { q: "Qu'est-ce que La Bestia ?", r: "Le train de marchandises mexicain sur le toit duquel voyagent des migrants vers les États-Unis." },
        { q: "Qui sont les Chicanos ?", r: "Les Américains d'origine mexicaine, qui ont développé leur propre culture." },
        { q: "Quelle image Gloria Anzaldúa donne-t-elle de la frontière ?", r: "« Una herida abierta », une blessure ouverte, mais aussi un lieu de métissage." },
        { q: "Quelle est la largeur du détroit de Gibraltar ?", r: "Environ 14 km." },
        { q: "Quelles villes espagnoles se trouvent en Afrique ?", r: "Ceuta et Melilla." },
        { q: "Qu'est-ce qu'une villa miseria ?", r: "Un bidonville en Argentine." },
        { q: "Que raconte le film Roma d'Alfonso Cuarón ?", r: "La vie d'une employée de maison indigène au service d'une famille aisée de Mexico, dans les années 1970." },
      ],
      quiz: [
        { q: "Comment dit-on « se noyer » en espagnol ?", choix: ["Anegarse","Agotarse","Alojarse","Ahogarse"], bonne: 3, expl: "Agotarse = s'épuiser ; alojarse = se loger.", niv: 1 },
        { q: "Que signifie « la valla » ?", choix: ["La vallée","La valise","La clôture","La valeur"], bonne: 2, expl: "La vallée se dit « el valle ».", niv: 1 },
        { q: "Quel bras de mer sépare l'Espagne du Maroc ?", choix: ["Le canal de Panamá","Le golfe du Mexique","Le détroit de Magellan","Le détroit de Gibraltar"], bonne: 3, expl: "Il mesure environ 14 km.", niv: 1 },
        { q: "Comment appelle-t-on le passeur à la frontière mexicaine ?", choix: ["Un coyote","Un charro","Un gaucho","Un torero"], bonne: 0, expl: "Le coyote fait payer cher la traversée.", niv: 1 },
        { q: "Quelle est la longueur de la frontière entre le Mexique et les États-Unis ?", choix: ["Environ 14 km","Environ 300 km","Environ 3 100 km","Environ 1 000 km"], bonne: 2, expl: "Elle va de Tijuana au golfe du Mexique.", niv: 2 },
        { q: "Quel train empruntent les migrants à travers le Mexique ?", choix: ["La Bestia","El Ave","Talgo, le train espagnol","El Transcantábrico"], bonne: 0, expl: "Ils voyagent sur le toit, au péril de leur vie.", niv: 2 },
        { q: "Comment Anzaldúa décrit-elle la frontière ?", choix: ["Una herida abierta","Una puerta cerrada","Un muro de paz","Un río tranquilo"], bonne: 0, expl: "Une blessure ouverte, mais aussi le lieu d'une identité métisse.", niv: 2 },
        { q: "Que désigne le Spanglish ?", choix: ["Un dialecte des Canaries","L'espagnol parlé en Argentine","Une langue amérindienne","Un mélange d'espagnol et d'anglais"], bonne: 3, expl: "Il est parlé par de nombreux Hispaniques des États-Unis.", niv: 2 },
        { q: "Que signifie « la remesa » ?", choix: ["La remise d'un prix","La messe du dimanche","Le retour au pays natal","L'argent envoyé à la famille"], bonne: 3, expl: "Les remesas sont vitales pour l'économie de plusieurs pays d'Amérique centrale.", niv: 2 },
        { q: "Pourquoi le film Roma parle-t-il de frontière ?", choix: ["Il se passe à la frontière avec les États-Unis, à Tijuana même","Il montre une frontière sociale à l'intérieur d'une maison","Il raconte la traversée du détroit","Il montre la construction du mur"], bonne: 1, expl: "L'employée indigène vit chez une famille aisée, mais dans un autre monde.", niv: 3 },
        { q: "Pourquoi peut-on dire que la frontière est aussi un lieu de création ?", choix: ["Elle fait naître des cultures métisses et des œuvres","Elle empêche toute rencontre entre les peuples","Elle protège les traditions de tout contact avec l'étranger","Elle interdit l'art dans les villes"], bonne: 0, expl: "Culture chicana, Spanglish, fresques de Tijuana.", niv: 3 },
        { q: "Une photo montre une patera vide sur une plage d'Andalousie. Quelle idée développer ?", choix: ["Le tourisme de masse en Espagne","La pêche traditionnelle andalouse","Le drame des migrants du détroit","Les vacances des Espagnols"], bonne: 2, expl: "L'image évoque la traversée, peut-être un naufrage.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-esp-10",
      fiche: `## Les œuvres du programme limitatif (2026-2028)

En terminale, le professeur choisit **trois œuvres intégrales** dans une liste officielle (programme limitatif publié au Bulletin officiel du 21 mai 2026, pour 2026-2027 et 2027-2028). Elles servent à l'oral : ton dossier part souvent de l'une d'elles. Il faut connaître l'auteur, la date, l'histoire, les personnages et les grands thèmes, et savoir les relier aux **axes** du programme.

### Gabriel García Márquez, *La increíble y triste historia de la cándida Eréndira y de su abuela desalmada* (1972)
- Le Colombien García Márquez (prix Nobel de littérature **1982**) publie ce récit dans un recueil de sept nouvelles.
- **Histoire** : Eréndira, 14 ans, oublie d'éteindre une bougie ; « el viento de su desgracia » met le feu à la maison de sa grand-mère. Celle-ci calcule la dette et oblige sa petite-fille à se **prostituer** à travers le désert pour la rembourser. Le jeune **Ulises** tombe amoureux d'elle et tente plusieurs fois de tuer la grand-mère (gâteau à l'arsenic, explosif), avant de la poignarder. Eréndira s'enfuit alors seule avec le **gilet de lingots d'or**.
- **Thèmes** : exploitation et domination, enfance volée, cupidité, **realismo mágico** (prodiges racontés comme normaux), désert comme paysage mythique.
- **Axes** : Nature et mythologies ; Oppressions, résistances et révoltes ; Du type au stéréotype (la grand-mère monstrueuse).

### Eduardo Mendoza, *El misterio de la cripta embrujada* (1978)
- Premier roman d'une série de l'écrivain barcelonais (prix Cervantes 2016).
- **Histoire** : un narrateur **sans nom**, petit délinquant enfermé dans un **asile psychiatrique**, est libéré par le **commissaire Flores** pour enquêter sur la disparition d'une élève d'un **collège religieux** de Barcelone. Il a une passion pour le **Pepsi-Cola** ; sa sœur Cándida l'aide.
- **Thèmes** : **parodie** du roman policier, humour, contraste entre le langage très soutenu du narrateur et sa misère, critique de la police, de la bourgeoisie et de l'Église dans l'Espagne de la **Transition**.
- **Axes** : Les représentations du réel ; Du type au stéréotype (le détective, le pícaro moderne) ; Culture officielle et émancipations.

### Sara Mesa, *La familia* (2022)
- Romancière espagnole contemporaine (née en 1976), connue pour ses récits sur le pouvoir et la domination ordinaire.
- **Histoire** : une famille vue à travers plusieurs chapitres et plusieurs points de vue, de l'enfance des enfants à leur vie d'adultes. Le **Père**, autoritaire et moraliste, impose ses règles et son idéal d'une famille parfaite ; les enfants grandissent sous ce contrôle et cherchent à s'en libérer.
- **Thèmes** : **domination** dans la famille, secret, culpabilité, éducation, **émancipation**.
- **Axes** : Oppressions, résistances et révoltes (« résister face à l'oppression des schémas sociétaux : structures familiales ») ; Des torsions du réel.

### Pablo Neruda, *Odas elementales* (1954)
- Le Chilien Neruda (prix Nobel **1971**), poète engagé et communiste, auteur du *Canto general* (1950).
- **Recueil** : des **odes** à des objets simples et quotidiens : « Oda a la cebolla », « Oda al tomate », « Oda a la alcachofa ». Les vers sont **très courts**, parfois d'un seul mot, pour être lus par tous.
- **Thèmes** : la beauté des choses humbles, le travail du peuple, la nature, une poésie **accessible** et politique.
- **Axes** : Nature et mythologies ; Culture officielle et émancipations culturelles (une poésie pour le peuple).

### Icíar Bollaín, *También la lluvia* (film, 2010)
- Réalisatrice espagnole ; scénario de Paul Laverty. Le programme indique 2020, mais le film est sorti en **2010**.
- **Histoire** : en **2000**, une équipe espagnole tourne en **Bolivie** (Cochabamba) un film sur **Christophe Colomb** et la conquête. Le réalisateur **Sebastián** (Gael García Bernal) et le producteur **Costa** (Luis Tosar) embauchent des figurants indigènes payés très peu. L'acteur **Daniel**, qui joue le chef rebelle **Hatuey**, mène en même temps la **Guerra del agua** contre la privatisation de l'eau, « même la pluie ».
- **Thèmes** : mise en abyme (un film dans le film), continuité entre la conquête d'hier et l'exploitation d'aujourd'hui, mondialisation, résistance.
- **Axes** : Monde globalisé ; Oppressions, résistances et révoltes ; Les représentations du réel.

### À retenir pour le bac
- Eréndira (1972), Mendoza (1978), Sara Mesa (2022), Neruda (1954), Bollaín (2010).
- Pour chaque œuvre : une scène clé, deux citations ou images, et au moins deux axes.`,
      cartes: [
        { q: "Qui a écrit La increíble y triste historia de la cándida Eréndira ?", r: "Gabriel García Márquez, en 1972." },
        { q: "Pourquoi Eréndira doit-elle de l'argent à sa grand-mère ?", r: "Elle a oublié d'éteindre une bougie, et la maison de la grand-mère a brûlé." },
        { q: "Comment se termine l'histoire d'Eréndira ?", r: "Ulises tue la grand-mère ; Eréndira s'enfuit seule avec le gilet de lingots d'or." },
        { q: "Que signifie « desalmada » ?", r: "Sans cœur, cruelle (littéralement : sans âme)." },
        { q: "Qui est le narrateur d'El misterio de la cripta embrujada ?", r: "Un petit délinquant sans nom, sorti d'un asile pour enquêter." },
        { q: "Qui libère le narrateur de Mendoza ?", r: "Le commissaire Flores." },
        { q: "Quelle boisson adore le narrateur de Mendoza ?", r: "Le Pepsi-Cola." },
        { q: "Pourquoi le roman de Mendoza est-il une parodie ?", r: "Il imite le roman policier en le rendant comique : un détective fou au langage trop soutenu." },
        { q: "Qui a écrit La familia (2022) ?", r: "Sara Mesa." },
        { q: "Quel personnage domine La familia ?", r: "Le Père, autoritaire et moraliste, qui impose ses règles à tous." },
        { q: "Qu'est-ce qu'une oda elemental de Neruda ?", r: "Un poème en vers très courts qui célèbre un objet simple : l'oignon, la tomate, l'artichaut." },
        { q: "Pourquoi Neruda écrit-il en vers très courts ?", r: "Pour que sa poésie soit simple et accessible à tous, au peuple." },
        { q: "Que tourne l'équipe de También la lluvia ?", r: "Un film sur Christophe Colomb et la conquête de l'Amérique." },
        { q: "Qu'est-ce que la Guerra del agua ?", r: "La révolte de Cochabamba (Bolivie) en 2000 contre la privatisation de l'eau." },
        { q: "Qui est Daniel dans También la lluvia ?", r: "Un figurant indigène qui joue Hatuey et mène la révolte de l'eau." },
        { q: "Que signifie le titre También la lluvia ?", r: "« Même la pluie » : la privatisation voulait s'emparer même de l'eau de pluie." },
      ],
      quiz: [
        { q: "Quel auteur a écrit Odas elementales ?", choix: ["Gabriel García Márquez","Antonio Machado","Federico García Lorca","Pablo Neruda"], bonne: 3, expl: "Le poète chilien publie le recueil en 1954.", niv: 1 },
        { q: "Dans quel pays se tourne le film de También la lluvia ?", choix: ["Au Mexique, près de la frontière","En Bolivie","En Espagne, près de Séville","À Cuba, dans la Sierra Maestra"], bonne: 1, expl: "À Cochabamba, en 2000.", niv: 1 },
        { q: "Qui oblige Eréndira à se prostituer ?", choix: ["Son père, un marchand","Le jeune Ulises, son amoureux","Les missionnaires du désert","Sa grand-mère"], bonne: 3, expl: "La « abuela desalmada » veut récupérer le prix de sa maison.", niv: 1 },
        { q: "Dans quelle ville se passe El misterio de la cripta embrujada ?", choix: ["Madrid, sous la Movida","Séville, pendant la Semaine sainte","Buenos Aires, en 2001","Barcelone"], bonne: 3, expl: "Mendoza situe ses romans dans sa ville natale.", niv: 1 },
        { q: "Quel objet simple Neruda célèbre-t-il dans une ode ?", choix: ["Le palais présidentiel de Santiago","Le cheval du conquistador","L'oignon","La couronne des rois d'Espagne"], bonne: 2, expl: "« Oda a la cebolla » : la beauté des choses humbles.", niv: 2 },
        { q: "Pourquoi le narrateur de Mendoza fait-il rire ?", choix: ["Il est un détective célèbre et respecté de toute la police","Il raconte l'histoire en vers rimés","Il parle avec un langage très soutenu malgré sa misère","Il se tait pendant tout le roman"], bonne: 2, expl: "Le décalage entre son style et sa vie crée la parodie.", niv: 2 },
        { q: "Quel rôle joue Daniel dans le film tourné ?", choix: ["Christophe Colomb, le navigateur","Le producteur Costa lui-même","Un prêtre espagnol de la conquête","Hatuey, chef indigène rebelle"], bonne: 3, expl: "Le rebelle de 1511 et le meneur de 2000 se confondent.", niv: 2 },
        { q: "Quel thème central relie La familia à l'axe sur les oppressions ?", choix: ["La conquête de l'Amérique par l'Espagne","La domination du père sur la famille","La révolution cubaine de 1959","La traversée du détroit de Gibraltar"], bonne: 1, expl: "Le programme cite « machisme et structures familiales ».", niv: 2 },
        { q: "Pourquoi García Márquez parle-t-il du « vent de sa malchance » ?", choix: ["Le vent est un personnage qui parle au lecteur","Eréndira commande au vent par magie","Le récit se passe au bord de la mer","Le malheur d'Eréndira semble un destin surnaturel"], bonne: 3, expl: "Le realismo mágico donne au malheur une force presque mythique.", niv: 2 },
        { q: "Quelle mise en abyme organise También la lluvia ?", choix: ["Un roman écrit par un personnage du film pendant le tournage en Bolivie","Une pièce jouée devant le roi d'Espagne","Un rêve à l'intérieur d'un rêve","Un film sur la conquête tourné pendant une révolte actuelle"], bonne: 3, expl: "Le passé colonial éclaire l'exploitation d'aujourd'hui.", niv: 3 },
        { q: "Pourquoi les Odas elementales sont-elles une poésie engagée ?", choix: ["Elles sont écrites pour les rois et la noblesse","Elles critiquent la culture populaire chilienne","Elles rendent la poésie accessible et célèbrent le peuple","Elles parlent de Dieu et des saints"], bonne: 2, expl: "Neruda, communiste, veut une poésie pour tous.", niv: 3 },
        { q: "Quel axe relie Eréndira et También la lluvia ?", choix: ["Oppressions, résistances et révoltes","La culture underground de la Movida","La frontière entre le Mexique et les États-Unis","Les révolutions de l'indépendance"], bonne: 0, expl: "Exploitation d'une enfant et des indigènes ; Ulises et Daniel résistent.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-esp-11",
      fiche: `## La synthèse de documents en espagnol

À l'écrit (3 h 30), la première partie est une **synthèse** : un texte organisé, en espagnol, d'environ **500 mots**, qui fait **dialoguer** trois documents (souvent deux textes et une image) à partir d'une consigne. Ce n'est ni un résumé, ni un commentaire de chaque document l'un après l'autre.

### Comprendre la consigne
- Elle commence souvent par « **Teniendo en cuenta las especificidades de los documentos**… » puis demande de montrer, analyser ou comparer : « muestra cómo », « analiza de qué manera », « compara ».
- Repérer les **mots-clés** de la consigne : ils donnent la problématique.

### Préparer au brouillon (environ 1 h 15)
- Lire chaque document deux fois. Noter : **nature** (extrait de roman, article, poème, affiche, photo), **auteur**, **date**, **point de vue**.
- Faire un **tableau** : les idées et les procédés de chaque document, avec de courtes citations.
- Chercher les **points communs** et les **différences** : ce sont eux qui feront le plan.
- Construire **deux ou trois parties** par idées, chacune utilisant au moins deux documents.

### Rédiger
- **Introduction** : présenter les trois documents (nature, auteur, date, thème commun), annoncer la problématique et le plan.
- **Développement** : une idée par partie, des **citations courtes** entre guillemets avec la ligne (« l. 12 »), une **analyse** des procédés (images, répétitions, couleurs, cadrage).
- **Conclusion** : répondre à la consigne, éventuellement ouvrir vers une autre œuvre étudiée.
- Garder **20 minutes** pour relire : accords, accents, conjugaisons.

### Les connecteurs à connaître
- Ajouter : **además**, **asimismo**, **por otra parte**, **no solo… sino también**.
- Comparer : **al igual que** (de même que), **del mismo modo**, **ambos documentos** (les deux documents), **tanto… como**.
- Opposer : **sin embargo** (cependant), **en cambio** (en revanche), **mientras que** (alors que), **a diferencia de**, **no obstante**.
- Conclure : **por lo tanto** (donc), **así pues**, **en definitiva**, **para concluir**.
- Présenter : **se trata de** (il s'agit de), **cabe destacar que** (il convient de souligner que), **el autor pone de relieve** (met en relief).

### Analyser une image en espagnol
- **En primer plano** (au premier plan), **en segundo plano**, **al fondo** (à l'arrière-plan), **a la izquierda / a la derecha**, **en el centro**.
- **El encuadre** (le cadrage), **el contrapicado** (contre-plongée), **los colores vivos / apagados** (vifs / ternes), **el contraste**, **la luz**.

### Les erreurs qui coûtent cher
- Juxtaposer les documents (« el documento 1 dice… el documento 2 dice… »).
- Oublier le document iconographique.
- Paraphraser sans analyser ; donner son avis sans appui.
- Gallicismes : « en face de » au lieu de « frente a », « la problemática » mal employée, oubli de l'accent sur « también », « además ».

### À retenir pour le bac
- 500 mots, trois documents croisés, plan par idées, citations courtes avec la ligne.
- Connecteurs : sin embargo, en cambio, mientras que, al igual que, ambos, por lo tanto, cabe destacar.`,
      cartes: [
        { q: "Combien de mots environ fait la synthèse ?", r: "Environ 500 mots, en espagnol." },
        { q: "Que signifie « sin embargo » ?", r: "Cependant, pourtant." },
        { q: "Traduire en espagnol : en revanche", r: "En cambio." },
        { q: "Que signifie « mientras que » ?", r: "Alors que, tandis que (opposition)." },
        { q: "Traduire en espagnol : de même que", r: "Al igual que." },
        { q: "Traduire en espagnol : les deux documents", r: "Ambos documentos." },
        { q: "Que signifie « cabe destacar que » ?", r: "Il convient de souligner que." },
        { q: "Traduire en espagnol : donc, par conséquent", r: "Por lo tanto (así pues)." },
        { q: "Traduire en espagnol : à l'arrière-plan", r: "Al fondo (en segundo plano)." },
        { q: "Que signifie « el contrapicado » ?", r: "La contre-plongée (vue d'en bas)." },
        { q: "Que doit contenir l'introduction de la synthèse ?", r: "La présentation des trois documents, le thème commun, la problématique et le plan." },
        { q: "Qu'est-ce qu'une synthèse juxtaposée ?", r: "Un texte qui présente les documents l'un après l'autre sans les croiser : c'est l'erreur à éviter." },
        { q: "Comment citer un texte dans la synthèse ?", r: "Une citation courte entre guillemets, suivie de la ligne : « … » (l. 12)." },
        { q: "Que signifie « se trata de » ?", r: "Il s'agit de." },
      ],
      quiz: [
        { q: "Comment dit-on « cependant » en espagnol ?", choix: ["Sin duda alguna","Sin embargo","Sin más remedio","Sin cesar jamás"], bonne: 1, expl: "Sin duda = sans doute ; sin cesar = sans cesse.", niv: 1 },
        { q: "Que signifie « en cambio » ?", choix: ["En échange d'argent","En revanche","En changeant de sujet","En marchant vite"], bonne: 1, expl: "Connecteur d'opposition.", niv: 1 },
        { q: "Comment dit-on « à l'arrière-plan » en décrivant une image ?", choix: ["Al final del texto","En el primer plano","Encima de todo","Al fondo"], bonne: 3, expl: "Primer plano = premier plan ; al fondo = au fond.", niv: 1 },
        { q: "Combien de mots environ demande la synthèse ?", choix: ["100 mots","500 mots","200 mots","300 mots"], bonne: 1, expl: "Environ 500 mots, en espagnol.", niv: 1 },
        { q: "Quel connecteur sert à comparer deux documents ?", choix: ["Por lo tanto","Sin embargo","En definitiva","Al igual que"], bonne: 3, expl: "Al igual que = de même que.", niv: 2 },
        { q: "Quel mot espagnol signifie « les deux » ?", choix: ["Ambiguos","Ambos","Amigos","Antiguos"], bonne: 1, expl: "Ambos documentos = les deux documents.", niv: 2 },
        { q: "Quelle phrase est un bon début de partie ?", choix: ["El documento 1 dice que hay mucha violencia en el país.","Ambos documentos denuncian la violencia del poder.","Voy a hablar del documento 2.","En el documento 3 hay una foto."], bonne: 1, expl: "Une partie commence par une idée qui croise les documents.", niv: 2 },
        { q: "Que signifie « mientras que » ?", choix: ["Pendant longtemps","Moins que","Alors que","Mieux que"], bonne: 2, expl: "Mientras que exprime l'opposition entre deux éléments.", niv: 2 },
        { q: "Combien de temps garder pour se relire ?", choix: ["Environ 20 minutes","Moins d'une minute","Il est inutile de se relire","Trois heures au moins"], bonne: 0, expl: "Accords, accents et conjugaisons rapportent des points.", niv: 2 },
        { q: "Pourquoi faut-il construire le plan par idées ?", choix: ["Pour faire dialoguer les documents entre eux","Pour résumer chaque document en entier","Pour éviter de citer les textes","Pour donner son opinion personnelle"], bonne: 0, expl: "Le plan par idées évite la juxtaposition.", niv: 3 },
        { q: "Quel est le défaut de « El documento 1 habla de la frontera. El documento 2 también. » ?", choix: ["Il emploie un mauvais connecteur d'opposition","Il juxtapose sans analyser","Il cite trop longuement les documents","Il oublie l'accent sur « habla »"], bonne: 1, expl: "Il faut dire ce que chaque document montre et comment.", niv: 3 },
        { q: "Que doit faire la conclusion de la synthèse ?", choix: ["Résumer à nouveau les trois documents un par un, en détail","Ajouter un quatrième document inventé","Répondre à la consigne et éventuellement ouvrir","Recopier la consigne mot pour mot"], bonne: 2, expl: "Elle apporte la réponse à la problématique.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-esp-12",
      fiche: `## Traduction et transposition

La seconde partie de l'écrit est une **traduction** (de l'espagnol vers le français, parfois du français vers l'espagnol) d'un passage d'un des documents, ou une **transposition** (réécrire un passage en changeant de point de vue, de forme ou d'époque). On évalue la **compréhension exacte** et la **qualité du français**.

### La méthode de traduction
- Lire tout le passage et le comprendre **dans son contexte** (qui parle, à quelle époque).
- Repérer les **temps** des verbes, les **pronoms**, les mots difficiles.
- Traduire phrase par phrase, puis **relire en français seulement** : la phrase doit sonner juste, sans calque.
- Ne rien **oublier** et ne rien **ajouter**. Garder le niveau de langue (familier, soutenu).

### Les temps
- **Pretérito indefinido** (hablé, comió) : passé simple dans un récit littéraire (« il parla »), ou passé composé dans un dialogue.
- **Pretérito imperfecto** (hablaba) : imparfait.
- **Pretérito perfecto** (he hablado) : passé composé.
- **Subjuntivo** : après « cuando » + futur (« cuando llegues » = quand tu arriveras), après « para que », « ojalá » (pourvu que).
- **Imperfecto de subjuntivo** (hablara / hablase) : souvent un imparfait du subjonctif en français littéraire, ou un subjonctif présent dans un français plus courant.

### Les tournures à savoir rendre
- **Soler** + infinitif : avoir l'habitude de (« solía pasear » = il avait l'habitude de se promener).
- **Volver a** + infinitif : re- (« volvió a llamar » = il rappela).
- **Acabar de** + infinitif : venir de. **Seguir** + gérondif : continuer à.
- **Llevar** + durée + gérondif : depuis (« lleva tres años viviendo aquí » = il vit ici depuis trois ans).
- **Ir** + gérondif : progression (« iba oscureciendo » = il faisait de plus en plus sombre).
- **Hace** + durée : il y a ; **desde hace** : depuis.
- **Gustar** : « me gusta » = j'aime ; **doler** : « me duele la cabeza » = j'ai mal à la tête.
- **Se** impersonnel : « se dice » = on dit.
- **Usted** : vous de politesse, verbe à la 3e personne.
- **Diminutifs** (-ito, -illo) : tendresse ou mépris, parfois rendu par « petit ».

### Les faux amis les plus fréquents
- **embarazada** = enceinte ; **constipado** = enrhumé ; **el éxito** = le succès ; **largo** = long ; **la carpeta** = le classeur ; **la ropa** = les vêtements ; **contestar** = répondre ; **recordar** = se souvenir ; **la firma** = la signature ; **exquisito** = délicieux ; **el suceso** = le fait divers ; **salir** = sortir.

### La transposition
- Exemples de consignes : réécrire le passage **à la première personne**, du point de vue d'un autre personnage, **au présent**, en **dialogue**, ou comme une lettre.
- Il faut respecter le contenu du passage, modifier systématiquement ce que la consigne demande (pronoms, possessifs, terminaisons) et garder une langue correcte.

### À retenir pour le bac
- Indefinido = passé simple ou passé composé ; imperfecto = imparfait ; cuando + subjonctif = futur.
- Soler, volver a, acabar de, llevar + gérondif, ir + gérondif. Faux amis : embarazada, constipado, éxito, largo.`,
      cartes: [
        { q: "Que signifie « embarazada » ?", r: "Enceinte (faux ami : pas embarrassée)." },
        { q: "Que signifie « constipado » ?", r: "Enrhumé (faux ami)." },
        { q: "Que signifie « largo » ?", r: "Long (faux ami : large se dit ancho)." },
        { q: "Que signifie « contestar » ?", r: "Répondre (faux ami)." },
        { q: "Que signifie « el suceso » ?", r: "Le fait divers, l'événement (le succès se dit el éxito)." },
        { q: "Que signifie « la ropa » ?", r: "Les vêtements." },
        { q: "Traduire : « solía pasear por el parque »", r: "Il (elle) avait l'habitude de se promener dans le parc." },
        { q: "Traduire : « volvió a llamar »", r: "Il (elle) rappela, il appela de nouveau." },
        { q: "Traduire : « acaba de salir »", r: "Il (elle) vient de sortir." },
        { q: "Traduire : « lleva tres años viviendo aquí »", r: "Il (elle) vit ici depuis trois ans." },
        { q: "Traduire : « cuando llegues, llámame »", r: "Quand tu arriveras, appelle-moi." },
        { q: "Traduire : « iba oscureciendo »", r: "Il faisait de plus en plus sombre, la nuit tombait peu à peu." },
        { q: "Comment traduire l'indefinido dans un récit littéraire ?", r: "Par le passé simple (« habló » = il parla)." },
        { q: "Qu'est-ce qu'une transposition ?", r: "Réécrire un passage en changeant le point de vue, la personne, le temps ou la forme, selon la consigne." },
      ],
      quiz: [
        { q: "Que signifie « embarazada » ?", choix: ["Embarrassée","Enceinte","Embrassée","Emballée"], bonne: 1, expl: "Faux ami classique.", niv: 1 },
        { q: "Comment traduire « largo » ?", choix: ["Large","Lent","Long","Lourd"], bonne: 2, expl: "Large se dit « ancho ».", niv: 1 },
        { q: "Que signifie « contestar » ?", choix: ["Contester","Conter","Répondre","Constater"], bonne: 2, expl: "Contestar al teléfono = répondre au téléphone.", niv: 1 },
        { q: "Que signifie « volvió a llamar » ?", choix: ["Il rappela","Il revint appeler chez lui","Il refusa d'appeler","Il voulut appeler"], bonne: 0, expl: "Volver a + infinitif = refaire l'action.", niv: 1 },
        { q: "Comment traduire « lleva dos horas esperando » ?", choix: ["Il attend depuis deux heures","Il a attendu deux heures hier","Il attendra deux heures","Il porte deux heures d'attente"], bonne: 0, expl: "Llevar + durée + gérondif = depuis.", niv: 2 },
        { q: "Comment traduire « cuando seas mayor » ?", choix: ["Quand tu étais grand","Quand tu es grand","Quand tu seras grand","Si tu étais grand"], bonne: 2, expl: "Cuando + subjonctif présent = futur en français.", niv: 2 },
        { q: "Dans un récit littéraire, comment traduire « abrió la puerta » ?", choix: ["Il ouvrait la porte","Il ouvrira la porte","Il ouvre la porte","Il ouvrit la porte"], bonne: 3, expl: "L'indefinido du récit se rend par le passé simple.", niv: 2 },
        { q: "Que signifie « solía » dans « solía leer de noche » ?", choix: ["Était seul à","Avait l'habitude de","Voulait","Devait"], bonne: 1, expl: "Soler + infinitif = avoir l'habitude de.", niv: 2 },
        { q: "Que signifie « el suceso » ?", choix: ["Le succès","Le successeur","Le sucre","Le fait divers"], bonne: 3, expl: "Le succès se dit « el éxito ».", niv: 2 },
        { q: "Une consigne demande de transposer un récit à la 1re personne. Que changer ?", choix: ["Les noms de lieux, les dates et l'ordre des événements du récit","Les pronoms, les possessifs et les terminaisons des verbes","L'histoire racontée et la fin","Le temps des verbes au futur"], bonne: 1, expl: "On garde le contenu ; on change la personne partout.", niv: 3 },
        { q: "Pourquoi relire sa traduction en français seulement ?", choix: ["Pour ajouter des idées personnelles au texte de l'auteur","Pour vérifier qu'elle sonne juste, sans calque","Pour raccourcir le texte de moitié","Pour changer le niveau de langue"], bonne: 1, expl: "Une traduction doit être du vrai français.", niv: 3 },
        { q: "Comment traduire « iba anocheciendo » ?", choix: ["La nuit tombait peu à peu","Il allait voir la nuit","Il partait à la nuit","La nuit était tombée d'un coup"], bonne: 0, expl: "Ir + gérondif = progression lente.", niv: 3 },
      ],
    },
  ],
  methode: [
    {
      "id": "llcer-esp-m1",
      "mat": "llcer-esp",
      "titre": "La synthèse de documents",
      "formules": [
        "Teniendo en cuenta las especificidades de los documentos, muestra cómo…",
        "Analiza de qué manera los documentos…",
        "En unas 500 palabras…"
      ],
      "vu": [
        "Format de l'écrit de LLCER depuis la session 2021",
        "Bac 2026 métropole (sujet 2 : « Dominations et insoumissions », axe « Révolutions et ruptures », les femmes dans la guerre civile)"
      ],
      "pts": "la plus grande partie de la note de l'écrit",
      "attendu": "Une synthèse en espagnol d'environ 500 mots qui croise les trois documents autour d'une problématique. Le correcteur attend une introduction qui présente les documents, des parties organisées par idées (et non document par document), des citations courtes avec la ligne, l'analyse des procédés (y compris de l'image) et une conclusion qui répond à la consigne.",
      "etapes": [
        "Lire la consigne et souligner ses mots-clés.",
        "Lire chaque document deux fois et remplir un tableau : nature, auteur, date, point de vue, procédés, citations.",
        "Repérer ce qui rapproche et ce qui oppose les documents, en tirer deux ou trois idées.",
        "Rédiger l'introduction : documents, thème commun, problématique, plan.",
        "Rédiger chaque partie autour d'une idée, avec au moins deux documents.",
        "Conclure en répondant à la consigne, puis relire accords, accents et conjugaisons."
      ],
      "mots": [
        "ambos documentos",
        "al igual que",
        "sin embargo",
        "en cambio",
        "mientras que",
        "cabe destacar que",
        "por lo tanto"
      ],
      "pieges": [
        "Présenter les documents l'un après l'autre (juxtaposition).",
        "Oublier le document iconographique ou ne faire que le décrire.",
        "Recopier de longs passages au lieu de citer brièvement.",
        "Donner son avis à la place de l'analyse."
      ],
      "cas": "Dossier sur l'axe « La frontière en question » : un extrait de roman où un adolescent hondurien voyage sur La Bestia, un poème chicano sur la double identité, une photographie des balançoires installées à travers le mur entre le Mexique et les États-Unis.",
      "question": "Teniendo en cuenta las especificidades de los documentos, muestra cómo la frontera es a la vez un lugar de sufrimiento y de creación. Rédige l'introduction et annonce le plan.",
      "modele": "Los tres documentos abordan el tema de la frontera entre México y Estados Unidos. El documento A es un fragmento de novela que narra el viaje de un adolescente hondureño en el tren llamado La Bestia; el documento B es un poema chicano que expresa una identidad dividida entre dos lenguas; el documento C es una fotografía de unos columpios rosas instalados a través del muro. Ambos textos muestran el dolor de quienes viven la frontera, mientras que la imagen la transforma en un lugar de juego. Cabe preguntarse, por lo tanto, de qué manera la frontera es a la vez una herida y una fuente de creación. En una primera parte veremos que la frontera es un lugar de peligro y de separación; en una segunda parte, que da lugar a una identidad mestiza y a nuevas formas artísticas.",
      "grille": [
        "Les trois documents présentés (nature, auteur, date)",
        "Une problématique qui reprend la consigne",
        "Un plan par idées",
        "Connecteurs de comparaison et d'opposition",
        "Espagnol correct (accords, accents)"
      ]
    },
    {
      "id": "llcer-esp-m2",
      "mat": "llcer-esp",
      "titre": "La traduction vers le français",
      "formules": [
        "Traduce al francés desde « … » hasta « … ».",
        "Traduisez en français le passage suivant."
      ],
      "vu": [
        "Format de l'écrit de LLCER depuis la session 2021",
        "Bac 2026 métropole (sujet 2 : « Dominations et insoumissions », axe « Révolutions et ruptures », les femmes dans la guerre civile)"
      ],
      "pts": "la seconde partie de l'écrit",
      "attendu": "Une traduction fidèle (rien d'oublié, rien d'ajouté), dans un français correct et naturel. Le correcteur vérifie surtout les temps (indefinido, imperfecto, subjonctif), les tournures (soler, volver a, llevar + gérondif), les faux amis et le niveau de langue.",
      "etapes": [
        "Lire tout le document pour comprendre le contexte du passage.",
        "Souligner les verbes et noter leur temps.",
        "Repérer les tournures et les faux amis.",
        "Traduire phrase par phrase au brouillon.",
        "Relire en français seulement et corriger les calques.",
        "Vérifier qu'aucun mot n'est oublié."
      ],
      "mots": [
        "passé simple pour l'indefinido du récit",
        "avoir l'habitude de (soler)",
        "de nouveau (volver a)",
        "depuis (llevar + gérondif)",
        "peu à peu (ir + gérondif)"
      ],
      "pieges": [
        "Traduire mot à mot et produire un français bancal.",
        "Confondre imparfait et passé simple.",
        "Tomber dans un faux ami (embarazada, constipado, largo).",
        "Laisser une phrase de côté parce qu'elle est difficile."
      ],
      "cas": "Extrait inventé : « Cada mañana, mi abuela solía abrir la ventana y quedarse mirando la calle. Aquel día no la abrió. Llevaba dos semanas esperando una carta de su hijo, que se había ido a Buenos Aires. Cuando por fin llegó el cartero, volvió a sonreír. »",
      "question": "Traduis l'extrait en français.",
      "modele": "Chaque matin, ma grand-mère avait l'habitude d'ouvrir la fenêtre et de rester à regarder la rue. Ce jour-là, elle ne l'ouvrit pas. Elle attendait depuis deux semaines une lettre de son fils, qui était parti à Buenos Aires. Quand le facteur arriva enfin, elle se remit à sourire.",
      "grille": [
        "« solía » rendu par avoir l'habitude de",
        "Passé simple pour « no la abrió » et « llegó »",
        "« Llevaba dos semanas esperando » rendu par depuis",
        "Plus-que-parfait « était parti »",
        "« volvió a sonreír » rendu par se remit à sourire",
        "Français correct, sans oubli"
      ]
    },
    {
      "id": "llcer-esp-m3",
      "mat": "llcer-esp",
      "titre": "Analyser une image dans la synthèse",
      "formules": [
        "Teniendo en cuenta las especificidades de los documentos…",
        "El documento C es una fotografía / un cartel / un cuadro…"
      ],
      "vu": [
        "Format de l'écrit de LLCER depuis la session 2021",
        "Bac 2026 métropole (sujet 2 : « Dominations et insoumissions », axe « Révolutions et ruptures », les femmes dans la guerre civile)"
      ],
      "pts": "une partie de la synthèse",
      "attendu": "L'image doit être traitée comme un vrai document : nature, auteur, date, description précise avec le vocabulaire de l'image (planos, encuadre, colores, luz), puis interprétation de son message et lien avec les textes.",
      "etapes": [
        "Identifier la nature : photographie, affiche, peinture, dessin de presse.",
        "Décrire du premier plan à l'arrière-plan.",
        "Relever le cadrage, les couleurs, la lumière, le texte éventuel.",
        "Dire ce que l'image veut montrer ou dénoncer.",
        "La relier à une idée des textes."
      ],
      "mots": [
        "en primer plano",
        "al fondo",
        "el encuadre",
        "el contrapicado",
        "los colores apagados",
        "el contraste",
        "la imagen pone de relieve"
      ],
      "pieges": [
        "Oublier l'image dans la synthèse.",
        "Décrire sans interpréter.",
        "Ignorer le texte d'une affiche (slogan)."
      ],
      "cas": "Une photographie de 1937 montre une jeune miliciana debout, fusil à l'épaule, qui sourit, devant un groupe d'hommes assis.",
      "question": "Rédige le paragraphe qui analyse cette photographie et la relie à l'idée de rupture.",
      "modele": "El documento C es una fotografía en blanco y negro tomada en 1937, en plena Guerra Civil. En primer plano aparece una joven miliciana de pie, con un fusil al hombro, que sonríe; detrás de ella, varios hombres están sentados. El encuadre la sitúa en el centro y por encima de ellos, lo que pone de relieve su seguridad. Esta imagen simboliza una ruptura: la mujer abandona el papel de esposa sumisa para luchar en el frente, al igual que las protagonistas del texto A.",
      "grille": [
        "Nature et date de l'image",
        "Description par plans avec le vocabulaire",
        "Analyse du cadrage",
        "Message dégagé (rupture)",
        "Lien avec un autre document"
      ]
    },
    {
      "id": "llcer-esp-m4",
      "mat": "llcer-esp",
      "titre": "L'oral : présenter son dossier",
      "formules": [
        "Presenta tu dossier y justifica tus elecciones.",
        "¿Por qué elegiste estos documentos?"
      ],
      "vu": [
        "Format de l'écrit de LLCER depuis la session 2021",
        "Bac 2026 métropole (sujet 2 : « Dominations et insoumissions », axe « Révolutions et ruptures », les femmes dans la guerre civile)"
      ],
      "pts": "la moitié de la note de la spécialité",
      "attendu": "Un oral de 20 minutes sans préparation : une présentation de ton dossier (une œuvre intégrale et des documents choisis, autour d'une problématique liée à un axe), puis un échange avec le jury. On attend un espagnol clair, une problématique, des liens entre les documents et une réflexion personnelle.",
      "etapes": [
        "Annoncer le titre du dossier, l'axe et la problématique.",
        "Présenter l'œuvre intégrale (auteur, date, histoire en deux phrases).",
        "Présenter chaque document et dire pourquoi tu l'as choisi.",
        "Montrer les liens entre les documents et l'œuvre.",
        "Conclure par ce que ce travail t'a appris, puis répondre aux questions."
      ],
      "mots": [
        "he elegido",
        "mi problemática es",
        "este documento me permite",
        "en relación con",
        "me ha llamado la atención",
        "para concluir"
      ],
      "pieges": [
        "Réciter un texte appris par cœur.",
        "Présenter des documents sans lien entre eux.",
        "Ne pas savoir résumer l'œuvre intégrale."
      ],
      "cas": "Dossier sur l'axe « Oppressions, résistances et révoltes » autour de También la lluvia, avec une affiche de la Guerra del agua et un extrait de Las venas abiertas de América Latina.",
      "question": "Rédige ta présentation d'ouverture (titre, problématique, œuvre).",
      "modele": "Mi dossier se titula « El agua, una lucha de siempre » y se inscribe en el eje Opresiones, resistencias y revueltas. Mi problemática es la siguiente: ¿de qué manera la lucha por el agua en Bolivia prolonga la resistencia indígena frente a la conquista? He elegido como obra integral la película También la lluvia, de Icíar Bollaín, estrenada en 2010: un equipo español rueda en Cochabamba una película sobre Cristóbal Colón mientras estalla la Guerra del agua. Me ha llamado la atención el personaje de Daniel, que interpreta al rebelde Hatuey y dirige las protestas.",
      "grille": [
        "Titre et axe annoncés",
        "Problématique claire",
        "Œuvre présentée (auteur, date, histoire)",
        "Choix personnel justifié",
        "Espagnol clair et correct"
      ]
    }
  ],
  sujets: [
    {
      id: "llcer-esp-s1", matiere: 'llcer-esp', titre: "Sujet d'entraînement 1 : Dominations et insoumissions", duree: 210,
      enonce: `## Sujet d'entraînement 1 (inventé, au format de l'écrit)

Ce sujet est inventé pour s'entraîner : les trois documents ont été écrits ou décrits pour cet exercice. Durée : 3 h 30. Dictionnaire unilingue autorisé.

Thématique : **Dominations et insoumissions**. Axe : **Oppressions, résistances et révoltes**.

### Documento A : fragmento de novela (inventado), « La plaza », 2015

Todos los jueves, a las tres y media, Elena se ponía el pañuelo blanco delante del espejo del pasillo. No lo hacía deprisa. Lo doblaba con cuidado, como si fuera la sábana de una cuna, y se lo ataba bajo la barbilla.

Su hijo Martín llevaba diez años desaparecido. Al principio, en la comisaría, le habían dicho que seguramente se había ido con una novia, que los jóvenes eran así. Después ya no le dijeron nada.

En la plaza, las otras madres la esperaban. No gritaban. Caminaban despacio, en círculo, alrededor de la pirámide, y ese silencio era más fuerte que cualquier discurso. Los policías las miraban sin saber qué hacer con aquellas mujeres que no se cansaban nunca.

### Documento B : poema (inventado), « Tierra », 2008

Me dijeron que la tierra
tenía dueño y papeles,
que mi abuelo la labraba
pero no era suya.
Hoy la tierra me mira
desde detrás de la alambrada
y yo le digo, bajito:
volveremos.

### Documento C : fotografía (descrita)

Una fotografía en color tomada en Buenos Aires en 2006. En primer plano, tres mujeres mayores con pañuelos blancos en la cabeza sostienen una gran pancarta con fotos de jóvenes en blanco y negro y la frase « ¿Dónde están? ». Al fondo, la Casa Rosada. Las mujeres miran de frente al objetivo, serias. La luz de la tarde ilumina sus rostros.

### Parte 1 : síntesis (en español, unas 500 palabras)

Teniendo en cuenta las especificidades de los documentos, muestra cómo expresan la resistencia frente a la opresión.

### Parte 2 : traducción

Traduce al francés el documento A, desde « Su hijo Martín » hasta « ya no le dijeron nada. »`,
      corrige: `## Corrigé du sujet d'entraînement 1

### Parte 1 : pistes de synthèse

Introducción. Los tres documentos tratan de la resistencia frente a la opresión. El documento A es un fragmento de una novela de 2015 que narra la lucha silenciosa de Elena, madre de un desaparecido argentino. El documento B es un poema de 2008 sobre un campesino privado de su tierra. El documento C es una fotografía tomada en Buenos Aires en 2006 que muestra a tres Madres de Plaza de Mayo. Mientras que los textos dan voz a individuos, la imagen muestra una lucha colectiva. Cabe preguntarse cómo los documentos convierten el dolor en una forma de resistencia. Veremos primero las formas de la opresión y después las armas de la resistencia.

I. Una opresión que borra a las personas. En el documento A, la desaparición de Martín es una herida que dura « diez años »; la policía miente y luego calla. En el documento C, las fotos en blanco y negro de los jóvenes y la pregunta « ¿Dónde están? » recuerdan a los desaparecidos de la dictadura. En el documento B, la opresión es económica: la tierra « tenía dueño y papeles », y la alambrada separa al campesino de ella.

II. Las armas de los que resisten: el silencio, la constancia y la palabra. Las madres del documento A « no gritaban »: su silencio es « más fuerte que cualquier discurso ». Del mismo modo, en la foto, las mujeres miran de frente, serias, delante de la Casa Rosada, sede del poder. El pañuelo blanco, doblado « como si fuera la sábana de una cuna », se convierte en símbolo. En el poema, la resistencia es una promesa susurrada: « volveremos ».

Conclusión. Los tres documentos muestran que la resistencia no siempre es violenta: la memoria, la paciencia y la palabra son armas frente a la opresión. Se puede pensar también en el movimiento Ni una menos o en la Guerra del agua de También la lluvia.

### Parte 2 : propuesta de traducción

Son fils Martín avait disparu depuis dix ans. Au début, au commissariat, on lui avait dit qu'il était sûrement parti avec une petite amie, que les jeunes étaient comme ça. Ensuite, on ne lui dit plus rien.

Les points à réussir : « llevaba diez años desaparecido » (avait disparu depuis dix ans) ; le « on » pour « le habían dicho » ; « seguramente » (sûrement) ; « una novia » (une petite amie) ; « así » (comme ça) ; « ya no » (ne… plus) ; le passé simple ou passé composé pour « no le dijeron ».`,
      grille: [{"c":"Synthèse : introduction qui présente les trois documents et pose une problématique","pts":3},{"c":"Synthèse : plan par idées, documents croisés et comparés","pts":4},{"c":"Synthèse : citations précises et analyse des procédés (dont la photographie)","pts":3},{"c":"Synthèse : qualité de l'espagnol (correction, richesse, connecteurs)","pts":6},{"c":"Traduction : sens exact, sans oubli, « llevaba… desaparecido » et « ya no » bien rendus","pts":4}],
    },
  ],
};
