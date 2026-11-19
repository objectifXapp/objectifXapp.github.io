// Arts plastiques (enseignement de spécialité) — terminale, voie générale. Sources : voir matiere.sources.
// Programme : programme de terminale de la spécialité (BO spécial n° 8 du 25 juillet 2019), trois champs de questionnements :
// plasticiens, artistiques interdisciplinaires, artistiques transversaux.
// Questions limitatives à compter de la rentrée 2026, donc pour la session 2027 (BOENJS n° 4 du 22 janvier 2026, annexe 2) :
// deux thèmes et quatre œuvres (Vernet et Gursky : « Documenter ou augmenter le réel » ; Bourgeois et Giambologna :
// « Expérience des espaces physiques et symboliques de l'œuvre ») et six questionnements précisés, qui donnent les chapitres 2 à 7.
// Épreuve : note de service consolidée de mai 2024 (écrit de 3 h 30 et oral de 30 minutes, chacun pour moitié de la note).
export default {
  matiere: {
    id: 'arts-pla',
    nom: 'Arts plastiques',
    voie: 'generale',
    epreuve: { type: 'ecrit+pratique', duree: 210, coef: 16, quand: 'juin', note: 'Écrit de 3 h 30 noté sur 20 : analyse méthodique d\'un corpus de 3 à 5 œuvres et réflexion (12 points), puis au choix un commentaire critique d\'un document sur l\'art (sujet A) ou une note d\'intention pour exposer une œuvre du corpus (sujet B) (8 points). Oral de 30 minutes noté sur 20 : présentation d\'un projet abouti (12 points) puis entretien (8 points). Chaque partie compte pour la moitié de la note.' },
    sources: [
      'https://eduscol.education.gouv.fr/5772/programmes-et-ressources-en-arts-plastiques-voie-gt',
      'https://eduscol.education.gouv.fr/sites/default/files/document/progrlimitatif-spe-artpla-tleg-rs2026pdf-125603.pdf',
      'https://www.education.gouv.fr/bo/2026/Hebdo4/MENE2536492N',
      'https://arts-plastiques.ac-versailles.fr/IMG/pdf/tableau_comparatif_des_questions_limitatives_sessions_2026_2027_v2.pdf',
      'https://eduscol.education.gouv.fr/sites/default/files/document/nds-consolidee-definition-epreuve-bac-arts-102129.pdf',
      'https://pedagogie.ac-montpellier.fr/bac-2027-programme-limitatif-en-arts-plastiques-et-specialite-arts',
    ],
    chapitres: [
      { id: 'arts-pla-1', t: 'Analyser une œuvre et un corpus : la méthode', theme: 'Outils d\'analyse' },
      { id: 'arts-pla-2', t: 'La représentation : rapport au réel, mimèsis, ressemblance, vraisemblance et écart', theme: 'Questionnements plasticiens' },
      { id: 'arts-pla-3', t: 'La matière, les matériaux et la matérialité de l\'œuvre', theme: 'Questionnements plasticiens' },
      { id: 'arts-pla-4', t: 'La monstration et la diffusion de l\'œuvre : lieux, situations, publics', theme: 'Questionnements plasticiens' },
      { id: 'arts-pla-5', t: 'Projet de l\'œuvre : du projet à la production artistique', theme: 'Questionnements plasticiens' },
      { id: 'arts-pla-6', t: 'Arts plastiques, architecture, paysage et design : environnement et usages', theme: 'Questionnements interdisciplinaires' },
      { id: 'arts-pla-7', t: 'Mondialisation de la création artistique : métissages ou relativité des cultures', theme: 'Questionnements transversaux' },
      { id: 'arts-pla-8', t: 'Documenter ou augmenter le réel : Vernet et Gursky', theme: 'Œuvres et thèmes de référence' },
      { id: 'arts-pla-9', t: 'Expérience des espaces physiques et symboliques de l\'œuvre : Bourgeois et Giambologna', theme: 'Œuvres et thèmes de référence' },
      { id: 'arts-pla-10', t: 'L\'oral : projet abouti, dossier et carnet de travail', theme: 'Pratique et oral' },
    ],
  },
  paquets: [
    // ---------------------------------------------------------------- 1
    {
      chapitre: 'arts-pla-1',
      fiche: `## Analyser une œuvre et un corpus : la méthode

À l'écrit, la première partie (12 points sur 20) donne un **corpus** de trois à cinq œuvres reproduites et une **consigne**. Une partie des œuvres vient des questions limitatives. Il faut analyser les œuvres avec méthode, puis construire une **réflexion argumentée**.

### Identifier l'œuvre
- Relever le **cartel** : artiste, titre, date, technique, dimensions, lieu de conservation. Les dimensions comptent : une toile de 2,60 m de large ou une sculpture de 9 m ne s'éprouvent pas comme un petit dessin.
- Préciser le **type de pratique** : peinture, sculpture, photographie, installation, architecture, vidéo, œuvre numérique, performance.

### Les six entrées de l'analyse
- **Plastique** : formes, couleurs, lumière, lignes, composition, cadrage, espace, échelle.
- **Technique** : outils, supports, matériaux, gestes (huile sur toile, bronze, tirage photographique, retouche numérique).
- **Procédurale** : comment l'œuvre a été faite (étapes, assistants, protocole, montage, assemblage).
- **Iconique** : ce que l'œuvre représente, ce qu'on reconnaît.
- **Sémantique** : le sens qu'elle produit, le message ou les questions qu'elle pose.
- **Symbolique** : les symboles, les références culturelles, ce qu'elle évoque au-delà de ce qu'elle montre.
- On n'est pas obligé de tout traiter : on choisit les entrées qui servent la consigne.

### Faire dialoguer le corpus
- Le corpus n'est pas une liste : il faut **comparer**. Chercher les **points communs** (un thème, un procédé, une question) et les **écarts** (époques, techniques, intentions).
- Utiliser des mots de liaison : « de même », « à l'inverse », « alors que », « cette tension se retrouve chez ».

### Enrichir avec ses références
- Le sujet attend d'**autres références** de son choix, **précises** et **situées** (artiste, titre, date). Exemple : « Andy Warhol, Campbell's Soup Cans, 1962 », et non « Warhol a peint des soupes ».
- On peut aussi citer d'autres arts (cinéma, architecture, littérature) si cela éclaire le propos.
- On peut ajouter des **croquis**, **schémas** ou **décalques** pour montrer une composition ou un point de vue.

### Construire la réflexion
- **Introduction** : présenter le corpus en une ou deux phrases, reformuler la consigne, poser une **problématique**, annoncer le plan.
- **Développement** : deux ou trois parties ; chaque partie a une idée, s'appuie sur des œuvres du corpus et sur une référence personnelle.
- **Conclusion** : répondre à la problématique, avec une ouverture (une œuvre, une question actuelle).

### À retenir pour le bac
- Toujours partir du cartel : la technique et les dimensions sont des indices de sens.
- Ne pas décrire les œuvres une par une : les comparer selon la consigne.
- Des références personnelles précises et datées font la différence.
- Une description sans interprétation ne rapporte presque rien.`,
      cartes: [
        { q: "Qu'est-ce qu'un cartel ?", r: "La petite étiquette qui identifie une œuvre : artiste, titre, date, technique, dimensions et lieu de conservation." },
        { q: "Pourquoi les dimensions comptent-elles dans l'analyse ?", r: "Elles changent l'expérience du spectateur : une œuvre immense enveloppe ou écrase le corps, une petite œuvre oblige à s'approcher." },
        { q: "Que regarde l'entrée plastique ?", r: "Formes, couleurs, lumière, lignes, composition, cadrage, espace et échelle." },
        { q: "Que regarde l'entrée technique ?", r: "Les outils, supports, matériaux et gestes utilisés : huile sur toile, bronze, tirage photographique, retouche numérique." },
        { q: "Que regarde l'entrée procédurale ?", r: "La manière dont l'œuvre a été fabriquée : étapes, protocole, assistants, assemblage, montage." },
        { q: "Différence entre entrée iconique et entrée sémantique ?", r: "L'iconique décrit ce qui est représenté ; le sémantique dit le sens produit, les questions posées." },
        { q: "Que regarde l'entrée symbolique ?", r: "Les symboles et les références culturelles : ce que l'œuvre évoque au-delà de ce qu'elle montre." },
        { q: "Faut-il traiter toutes les entrées pour chaque œuvre ?", r: "Non : on choisit celles qui servent la consigne." },
        { q: "Comment traiter un corpus ?", r: "En comparant les œuvres : points communs et écarts selon la consigne, et non une description œuvre par œuvre." },
        { q: "Qu'est-ce qu'une référence précise et située ?", r: "Une œuvre citée avec l'artiste, le titre et la date, par exemple Andy Warhol, Campbell's Soup Cans, 1962." },
        { q: "Peut-on dessiner à l'écrit ?", r: "Oui : croquis, schémas, collages ou décalques peuvent compléter la rédaction, sauf indication contraire." },
        { q: "Que contient l'introduction de la première partie ?", r: "Une présentation du corpus, la consigne reformulée, une problématique et l'annonce du plan." },
        { q: "Combien de points vaut la première partie de l'écrit ?", r: "12 points sur 20 ; la deuxième partie, au choix, vaut 8 points." },
        { q: "Quel est le défaut le plus pénalisé ?", r: "Décrire sans interpréter, ou décrire les œuvres une à une sans les relier à la consigne." },
      ],
      quiz: [
        { q: "Dans un cartel, « bronze, marbre et acier inoxydable » renseigne surtout sur :", choix: ["la technique et les matériaux", "le lieu de conservation de l'œuvre", "la date de création", "le sujet représenté"], bonne: 0, expl: "Le cartel donne les matériaux, indice essentiel pour l'analyse technique.", niv: 1 },
        { q: "Décrire comment une photographie a été retouchée et assemblée relève de l'entrée :", choix: ["iconique", "symbolique", "procédurale", "sémantique"], bonne: 2, expl: "L'entrée procédurale décrit la fabrication : étapes, montage, retouche.", niv: 2 },
        { q: "« L'araignée représente une mère protectrice et menaçante. » Cette phrase relève surtout de l'entrée :", choix: ["technique", "plastique", "procédurale", "symbolique"], bonne: 3, expl: "On dépasse ce qui est montré pour dire ce qui est évoqué : c'est l'entrée symbolique.", niv: 2 },
        { q: "Pourquoi faut-il noter les dimensions d'une œuvre du corpus ?", choix: ["Elles fixent le prix de l'œuvre sur le marché de l'art", "Elles changent l'expérience du spectateur", "Le jury les recopie dans sa note", "Elles permettent de dater l'œuvre"], bonne: 1, expl: "Une œuvre de 9 m n'engage pas le corps comme un petit dessin : l'échelle fait sens.", niv: 3 },
        { q: "Quelle référence personnelle est la mieux formulée ?", choix: ["« Warhol a souvent peint des produits de supermarché. »", "« Un artiste américain célèbre a peint des boîtes de soupe. »", "« Andy Warhol, Campbell's Soup Cans, 1962. »", "« Le pop art en général, dans les années soixante. »"], bonne: 2, expl: "Une référence doit être précise et située : artiste, titre, date.", niv: 2 },
        { q: "Face à un corpus de quatre œuvres, la démarche attendue est de :", choix: ["comparer les œuvres selon la consigne", "décrire chaque œuvre l'une après l'autre", "choisir une seule œuvre et oublier les autres", "raconter la vie de chaque artiste du corpus"], bonne: 0, expl: "Le corpus se traite par comparaison : points communs et écarts.", niv: 1 },
        { q: "Dire ce qu'on reconnaît dans une œuvre (un port, des bateaux, des promeneurs) relève de l'entrée :", choix: ["technique", "procédurale", "symbolique", "iconique"], bonne: 3, expl: "L'iconique décrit ce qui est représenté.", niv: 1 },
        { q: "Un élève écrit : « Le tableau est grand et très coloré. » Qu'est-ce qui manque surtout ?", choix: ["Le nom du musée de conservation", "Le sens produit par ces choix", "Le prix de vente de l'œuvre", "La biographie du peintre"], bonne: 1, expl: "Une description sans interprétation ne rapporte presque rien : il faut dire l'effet et le sens.", niv: 3 },
        { q: "Combien de points rapporte la première partie de l'écrit ?", choix: ["8 points", "10 points", "12 points", "6 points"], bonne: 2, expl: "La première partie vaut 12 points, la seconde 8 points.", niv: 1 },
        { q: "Peut-on ajouter des croquis à sa copie dans la première partie ?", choix: ["Oui, sauf indication contraire du sujet", "Non, seule la rédaction est permise", "Oui, mais ils remplacent toute rédaction", "Seulement quand le sujet le demande"], bonne: 0, expl: "Croquis, schémas, collages ou décalques peuvent compléter librement la rédaction.", niv: 2 },
        { q: "Pourquoi une bonne copie ne traite-t-elle **pas** toutes les entrées d'analyse pour chaque œuvre ?", choix: ["Parce que le sujet interdit l'entrée symbolique", "Parce que les entrées sont réservées à l'oral", "Parce que seules les œuvres anciennes s'analysent ainsi", "Parce qu'elle choisit celles qui servent la consigne"], bonne: 3, expl: "Les entrées sont des points d'appui : on retient celles qui éclairent la question posée.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 2
    {
      chapitre: 'arts-pla-2',
      fiche: `## La représentation : rapport au réel, mimèsis, ressemblance, vraisemblance et écart

Questionnement précisé par les questions limitatives : « La représentation, ses langages, moyens plastiques et enjeux artistiques. Rapport au réel : mimèsis, ressemblance, vraisemblance et valeur expressive de l'écart. »

### Les mots à maîtriser
- La **mimèsis** (mot grec) est l'imitation du réel par l'art. Pour Platon, l'image n'est qu'une copie de copie ; pour Aristote, imiter est naturel à l'homme et permet d'apprendre.
- La **ressemblance** est la proximité visuelle entre l'image et ce qu'elle représente : un portrait ressemble à son modèle.
- La **vraisemblance** est ce qui paraît **crédible**, même si ce n'est pas exact. Un paysage composé de plusieurs lieux peut être vraisemblable sans être fidèle.
- L'**écart** est la distance volontaire prise avec le réel : déformation, simplification, exagération, couleur arbitraire. Il a une **valeur expressive** : il fait voir une émotion ou une idée.

### Imiter le réel
- Une anecdote de Pline l'Ancien raconte que le peintre grec **Zeuxis** peignit des raisins si ressemblants que des oiseaux vinrent les picorer.
- À la Renaissance, la **perspective** et le modelé construisent l'illusion de l'espace.
- Au XIXe siècle, le **réalisme** de Gustave Courbet veut montrer le monde tel qu'il est, y compris le quotidien des humbles.
- Aujourd'hui, l'**hyperréalisme** pousse l'imitation à l'extrême : les sculptures de **Duane Hanson** ou de **Ron Mueck** troublent par leur ressemblance avec des corps vivants. Ron Mueck joue aussi sur l'**échelle** (des corps géants ou minuscules).

### Questionner la représentation
- **René Magritte**, **La Trahison des images**, 1929 : sous une pipe peinte, il écrit « Ceci n'est pas une pipe ». Une image n'est pas la chose : elle est une représentation.
- La **photographie** (1839, annonce du daguerréotype) semble enregistrer le réel, mais elle cadre, choisit, retouche. Elle peut documenter autant qu'elle construit.

### La valeur expressive de l'écart
- **Edvard Munch**, **Le Cri**, 1893 : les lignes ondulent, les couleurs sont violentes ; le paysage déformé exprime l'angoisse.
- Le **cubisme** (Picasso et Braque, à partir de 1907-1908) montre un objet sous plusieurs points de vue à la fois : l'écart sert à penser autrement l'espace.
- **Alberto Giacometti** étire des figures très minces : elles semblent lointaines et fragiles.
- L'écart n'est pas une erreur : c'est un **choix** qui crée du sens.

### Lien avec les œuvres de référence
- **Vernet** compose un port de Toulon très documenté, mais il arrange les figures et la lumière : vraisemblance plus que copie exacte.
- **Gursky** présente un supermarché si net qu'il paraît plus réel que le réel, grâce à la retouche numérique : la ressemblance devient construction.
- **Giambologna** donne forme humaine à une montagne : le Colosse est une personnification de l'Apennin.

### À retenir pour le bac
- Distinguer ressemblance (proche à l'œil) et vraisemblance (crédible).
- L'écart a une valeur expressive : dire laquelle (angoisse, fragilité, critique).
- Une représentation n'est jamais le réel lui-même (Magritte).
- Relier les notions aux quatre œuvres de référence.`,
      cartes: [
        { q: "Qu'est-ce que la mimèsis ?", r: "L'imitation du réel par l'art, une notion venue de la philosophie grecque (Platon, Aristote)." },
        { q: "Ressemblance ou vraisemblance ?", r: "La ressemblance est la proximité visuelle avec le modèle ; la vraisemblance est ce qui paraît crédible, même si ce n'est pas exact." },
        { q: "Qu'est-ce que l'écart en arts plastiques ?", r: "La distance volontaire prise avec le réel (déformation, couleur arbitraire, simplification) pour exprimer une émotion ou une idée." },
        { q: "Que raconte l'anecdote de Zeuxis ?", r: "Selon Pline l'Ancien, le peintre grec Zeuxis peignit des raisins si ressemblants que des oiseaux vinrent les picorer." },
        { q: "Que montre La Trahison des images de Magritte ?", r: "Une pipe peinte avec « Ceci n'est pas une pipe » (1929) : l'image n'est pas la chose, c'est une représentation." },
        { q: "Qu'est-ce que l'hyperréalisme ?", r: "Une imitation poussée à l'extrême, jusqu'au trouble : par exemple les sculptures de Duane Hanson ou de Ron Mueck." },
        { q: "Comment Ron Mueck crée-t-il un écart ?", r: "Ses corps très ressemblants sont à une échelle inhabituelle, géante ou minuscule, ce qui trouble le spectateur." },
        { q: "Quel écart expressif dans Le Cri de Munch ?", r: "Les lignes ondulent et les couleurs sont violentes : le paysage déformé exprime l'angoisse (1893)." },
        { q: "Que fait le cubisme avec la représentation ?", r: "Il montre un objet sous plusieurs points de vue à la fois, à partir de 1907-1908, avec Picasso et Braque." },
        { q: "Que veut montrer le réalisme de Courbet ?", r: "Le monde tel qu'il est, y compris la vie ordinaire et le travail des gens modestes, au XIXe siècle." },
        { q: "La photographie reproduit-elle le réel tel quel ?", r: "Non : elle cadre, choisit un moment, peut être retouchée. Elle documente mais construit aussi une image." },
        { q: "Vernet copie-t-il exactement le port de Toulon ?", r: "Il le documente avec précision mais arrange les figures et la lumière : c'est une image vraisemblable plus qu'une copie." },
        { q: "Pourquoi le Colosse de Giambologna est-il une personnification ?", r: "Il donne la forme d'un géant à une chaîne de montagnes, l'Apennin." },
        { q: "Quelle est la position de Platon sur l'image ?", r: "Pour lui, l'image d'artiste n'est qu'une copie de copie, éloignée de la vérité." },
      ],
      quiz: [
        { q: "Un paysage peint réunit des éléments de plusieurs lieux, mais il paraît tout à fait crédible. Il est :", choix: ["vraisemblable", "abstrait", "hyperréaliste", "cubiste"], bonne: 0, expl: "La vraisemblance, c'est paraître crédible sans être exact.", niv: 2 },
        { q: "Le mot grec mimèsis désigne :", choix: ["la déformation volontaire", "l'imitation du réel", "la couleur arbitraire", "l'art sans figure"], bonne: 1, expl: "La mimèsis est l'imitation, notion de Platon et d'Aristote.", niv: 1 },
        { q: "Dans Le Cri (1893), Munch déforme le paysage. L'effet principal est :", choix: ["d'imiter fidèlement un fjord norvégien", "de faire une étude de perspective exacte", "d'exprimer une angoisse intérieure", "de documenter la météo du jour"], bonne: 2, expl: "L'écart a une valeur expressive : ici, l'angoisse.", niv: 2 },
        { q: "« Ceci n'est pas une pipe » : que veut dire Magritte ?", choix: ["Que la pipe est mal peinte", "Que l'objet a été volé", "Que la peinture doit devenir entièrement abstraite", "Que l'image n'est pas la chose représentée"], bonne: 3, expl: "La représentation est distincte de l'objet réel.", niv: 2 },
        { q: "Qui raconte l'anecdote des raisins de Zeuxis picorés par des oiseaux ?", choix: ["Platon", "Pline l'Ancien", "Vasari", "Aristote"], bonne: 1, expl: "Pline l'Ancien la rapporte dans son Histoire naturelle.", niv: 1 },
        { q: "Les sculptures de Ron Mueck troublent surtout par :", choix: ["leur ressemblance et leur échelle", "leur abstraction totale et leurs couleurs vives", "leur matière brute laissée sans travail", "leur absence de tout corps humain"], bonne: 0, expl: "Hyperréalisme et changement d'échelle créent un écart troublant.", niv: 2 },
        { q: "Quelle différence entre ressemblance et vraisemblance ?", choix: ["La ressemblance concerne la sculpture, la vraisemblance la peinture", "La première est moderne, la seconde antique", "La première est visuelle, la seconde est la crédibilité", "Ce sont deux synonymes en histoire de l'art"], bonne: 2, expl: "Une image peut ressembler sans être crédible, ou être crédible sans ressembler exactement.", niv: 3 },
        { q: "Le cubisme de Picasso et Braque (vers 1907-1908) se caractérise par :", choix: ["des couleurs posées en petites touches pures", "une imitation parfaite de la photographie", "des figures très étirées et fragiles", "un objet vu sous plusieurs angles"], bonne: 3, expl: "Le cubisme fragmente et multiplie les points de vue.", niv: 1 },
        { q: "Pourquoi peut-on dire qu'une photographie construit le réel autant qu'elle le documente ?", choix: ["Elle cadre, choisit un instant, peut être retouchée", "Elle garde les couleurs exactes de la scène", "Elle montre rarement des personnes en mouvement", "Elle est plus petite que la réalité photographiée"], bonne: 0, expl: "Cadrage, moment, retouche : la photo est un regard, pas une copie neutre.", niv: 3 },
        { q: "Les figures très étirées de Giacometti produisent surtout un effet de :", choix: ["force et de puissance", "fragilité et de distance", "joie et de fête", "réalisme photographique précis"], bonne: 1, expl: "L'étirement rend les figures lointaines, fragiles, solitaires.", niv: 2 },
        { q: "Pourquoi l'écart n'est-il **pas** une erreur de l'artiste ?", choix: ["Parce qu'il est imposé par le musée", "Parce qu'il vient d'un manque de technique", "Parce qu'il est un choix qui crée du sens", "Parce qu'il disparaît avec le temps"], bonne: 2, expl: "La valeur expressive de l'écart vient d'un choix volontaire.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 3
    {
      chapitre: 'arts-pla-3',
      fiche: `## La matière, les matériaux et la matérialité de l'œuvre

Questionnement précisé : « Propriétés de la matière et des matériaux, leur transformation : états, caractéristiques, potentiels plastiques. »

### Les mots à maîtriser
- La **matière** est ce dont l'œuvre est faite, considérée dans sa substance (pâte, liquide, poudre, chair).
- Les **matériaux** sont les matières choisies et travaillées : bronze, marbre, bois, toile, pigment, papier, plastique, objets trouvés.
- La **matérialité** est la présence physique de l'œuvre, ce qu'on perçoit de sa matière : poids, texture, brillance, transparence, odeur, fragilité.
- Les **propriétés** d'un matériau : dur ou mou, lourd ou léger, opaque ou transparent, durable ou périssable.
- Les **états** : solide, liquide, gazeux ; une matière peut changer d'état (la fonte du bronze, la cire qui fond, la glace).
- Le **potentiel plastique** est ce qu'un matériau permet de faire : se mouler, s'étirer, se plier, se tacher.

### Des matériaux nobles aux matériaux pauvres
- Longtemps, l'art privilégie des matériaux **nobles** et durables : le marbre, le bronze, l'or, la peinture à l'huile.
- Au XXe siècle, les artistes utilisent des matériaux **pauvres**, ordinaires ou périssables. Le mouvement italien **Arte povera** (nommé par le critique Germano Celant en 1967) emploie terre, branches, chiffons, légumes.
- **Joseph Beuys** fait du **feutre** et de la **graisse** des matériaux chargés de sens (la chaleur, la protection).
- **Jean Dubuffet** invente en 1945 l'expression **art brut** et travaille des pâtes épaisses mêlées de sable et de goudron.
- Avec le **ready-made**, **Marcel Duchamp** choisit un objet manufacturé déjà fait : **Fontaine** (1917) est un urinoir signé « R. Mutt ».

### Transformer la matière
- Le **bronze** est coulé : on fait un modèle, un moule, puis on verse le métal fondu. On peut tirer plusieurs **exemplaires** (une édition) : Maman de Louise Bourgeois existe en plusieurs fontes.
- La **taille** enlève de la matière (la pierre, le bois) ; le **modelage** en ajoute (la terre, la cire).
- Des artistes laissent la matière **évoluer** : **Michel Blazy** crée des œuvres qui moisissent, poussent ou se décomposent pendant l'exposition.
- **Pierre Soulages** travaille le noir en relief à partir de 1979 (l'**outrenoir**) : la lumière se reflète sur la matière noire striée.
- **Yves Klein** dépose un pigment bleu intense, l'**IKB** (International Klein Blue, brevet de 1960), pour que la couleur devienne matière.

### Lien avec les œuvres de référence
- **Maman** associe le bronze, l'acier inoxydable et des œufs de marbre : dureté, poids et fragilité en même temps.
- Le **Colosse de l'Apennin** est taillé dans la roche et recouvert d'enduits qui imitent la boue, les algues et les stalactites : la matière fait croire que la montagne elle-même prend corps. L'**eau** des jeux d'eau fait partie de l'œuvre.
- **99 Cent** de Gursky est une photographie sous **Diasec** (collée sous une plaque de verre acrylique) : une surface brillante et lisse, comme les emballages photographiés.

### À retenir pour le bac
- Distinguer matière, matériau et matérialité.
- Toujours relier un matériau à son effet et à son sens (le poids, la fragilité, la mémoire).
- Matériaux nobles, pauvres, objets trouvés, matières vivantes : savoir citer un exemple daté pour chacun.
- Le bronze permet des éditions : une même œuvre peut exister en plusieurs exemplaires.`,
      cartes: [
        { q: "Matière, matériau, matérialité : quelle différence ?", r: "La matière est la substance ; le matériau est la matière choisie et travaillée ; la matérialité est la présence physique perçue de l'œuvre." },
        { q: "Qu'est-ce que le potentiel plastique d'un matériau ?", r: "Ce qu'il permet de faire : se mouler, s'étirer, se plier, se tacher, réfléchir la lumière." },
        { q: "Qu'est-ce qu'un matériau noble ?", r: "Un matériau prestigieux et durable, longtemps privilégié : marbre, bronze, or, peinture à l'huile." },
        { q: "Qu'est-ce que l'Arte povera ?", r: "Un mouvement italien nommé par Germano Celant en 1967, qui utilise des matériaux pauvres : terre, branches, chiffons, légumes." },
        { q: "Quels matériaux Joseph Beuys utilise-t-il ?", r: "Notamment le feutre et la graisse, chargés pour lui de sens : la chaleur, la protection." },
        { q: "Qui invente l'expression art brut et quand ?", r: "Jean Dubuffet, en 1945." },
        { q: "Qu'est-ce qu'un ready-made ?", r: "Un objet manufacturé choisi par l'artiste et présenté comme œuvre, comme Fontaine de Marcel Duchamp (1917)." },
        { q: "Comment fait-on une sculpture en bronze ?", r: "On réalise un modèle, puis un moule, dans lequel on coule le métal fondu. On peut tirer plusieurs exemplaires." },
        { q: "Taille ou modelage ?", r: "La taille enlève de la matière (pierre, bois) ; le modelage en ajoute (terre, cire)." },
        { q: "Que fait Michel Blazy avec la matière ?", r: "Il crée des œuvres qui évoluent pendant l'exposition : elles moisissent, poussent ou se décomposent." },
        { q: "Qu'est-ce que l'outrenoir de Soulages ?", r: "Une peinture noire en relief, commencée en 1979, où la lumière se reflète sur les stries de la matière." },
        { q: "Qu'est-ce que l'IKB ?", r: "International Klein Blue, le bleu intense d'Yves Klein, breveté en 1960, où la couleur devient matière." },
        { q: "Quels matériaux composent Maman de Louise Bourgeois ?", r: "Le bronze, l'acier inoxydable et le marbre des œufs portés dans un sac sous l'araignée." },
        { q: "Comment la matière fait-elle croire à une montagne dans le Colosse de l'Apennin ?", r: "La roche est taillée puis couverte d'enduits qui imitent la boue, les algues et les stalactites, avec des jeux d'eau." },
        { q: "Qu'est-ce qu'un tirage sous Diasec ?", r: "Une photographie collée sous une plaque de verre acrylique, qui donne une surface lisse et brillante, comme 99 Cent de Gursky." },
      ],
      quiz: [
        { q: "Le poids, la texture, la brillance et l'odeur d'une œuvre relèvent de sa :", choix: ["composition", "matérialité", "iconographie", "perspective"], bonne: 1, expl: "La matérialité est la présence physique de l'œuvre telle qu'on la perçoit.", niv: 1 },
        { q: "Qui a donné son nom au mouvement Arte povera en 1967 ?", choix: ["Germano Celant", "Pierre Restany", "André Breton", "Clement Greenberg"], bonne: 0, expl: "Le critique italien Germano Celant nomme l'Arte povera en 1967.", niv: 1 },
        { q: "Un artiste expose des fruits qui pourrissent peu à peu pendant l'exposition. Il exploite surtout :", choix: ["la noblesse durable du matériau", "une perspective de la Renaissance", "l'évolution de la matière dans le temps", "la ressemblance photographique"], bonne: 2, expl: "La matière périssable change d'état : l'œuvre inclut le temps.", niv: 2 },
        { q: "Fontaine (1917) de Marcel Duchamp est :", choix: ["une sculpture en marbre taillé dans un bloc", "un tableau en relief noir", "un moulage en bronze d'une fontaine", "un objet manufacturé choisi et signé"], bonne: 3, expl: "C'est un ready-made : un urinoir signé « R. Mutt ».", niv: 1 },
        { q: "Une sculpteure enlève peu à peu de la pierre avec un ciseau. Cette technique est :", choix: ["la taille", "le modelage", "la fonte", "l'assemblage"], bonne: 0, expl: "La taille retire de la matière ; le modelage en ajoute.", niv: 2 },
        { q: "Pourquoi Maman de Louise Bourgeois existe-t-elle en plusieurs exemplaires ?", choix: ["L'artiste l'a refaite à la main plusieurs fois", "Le bronze coulé permet plusieurs fontes", "Chaque musée l'a fait recopier par un sculpteur", "Elle est imprimée en trois dimensions"], bonne: 1, expl: "Le moule permet de tirer plusieurs fontes : celle de Bilbao est l'exemplaire 2 sur 6.", niv: 2 },
        { q: "Chez Joseph Beuys, le feutre et la graisse sont choisis surtout pour :", choix: ["le prix très élevé de ces matériaux", "leur ressemblance avec le marbre", "leur capacité à imiter la photographie", "le sens qu'ils portent, comme la chaleur"], bonne: 3, expl: "Le matériau n'est pas neutre : il porte une signification.", niv: 2 },
        { q: "Dans le Colosse de l'Apennin, les enduits qui imitent boue et stalactites servent à :", choix: ["protéger la roche de la pluie et du gel", "faire croire que la montagne prend corps", "rendre la statue plus légère", "imiter le bronze à moindre coût"], bonne: 1, expl: "La matière travaillée donne l'illusion d'un géant né de la montagne.", niv: 3 },
        { q: "Le bleu d'Yves Klein, breveté en 1960, s'appelle :", choix: ["outrenoir", "Diasec", "IKB", "Arte povera"], bonne: 2, expl: "IKB : International Klein Blue. L'outrenoir est de Soulages.", niv: 1 },
        { q: "Pourquoi l'usage de matériaux pauvres au XXe siècle est-il une rupture ?", choix: ["Il remet en cause les matériaux nobles", "Il impose le marbre comme seul matériau", "Il interdit les objets du quotidien", "Il rend les œuvres plus durables que le bronze"], bonne: 0, expl: "Terre, chiffons ou objets trouvés deviennent dignes de l'art, contre la tradition des matériaux nobles.", niv: 3 },
        { q: "Le Diasec de 99 Cent donne une surface lisse et brillante. On peut le relier :", choix: ["aux pâtes épaisses et sableuses de l'art brut", "au feutre protecteur de Beuys", "à la roche taillée du Colosse", "à l'aspect brillant des emballages montrés"], bonne: 3, expl: "La matérialité de l'image rejoint celle des produits de consommation photographiés.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 4
    {
      chapitre: 'arts-pla-4',
      fiche: `## La monstration et la diffusion de l'œuvre : lieux, situations, publics

Questionnement précisé : « Contextes d'une monstration de l'œuvre : lieux, situations, publics. » C'est le questionnement du **sujet B** de l'écrit (la note d'intention pour une exposition).

### Les mots à maîtriser
- La **monstration** est le fait de montrer une œuvre au public : où, comment, à qui.
- La **diffusion** fait circuler l'œuvre ou son image : reproductions, livres, affiches, écrans, réseaux.
- Le **commissaire d'exposition** choisit les œuvres, construit le propos et l'organisation d'une exposition.
- La **scénographie** est la mise en espace : parcours, cloisons, couleurs des murs, éclairage, hauteur d'accrochage, socles, vitrines.
- Le **cartel** et les textes de salle donnent les informations ; la **médiation** aide le public à comprendre (visites, ateliers, audioguides).

### Les lieux
- Le **musée** conserve, étudie et expose les œuvres. Le Louvre ouvre au public en **1793**.
- La **galerie** expose pour vendre. Les **Salons** du XIXe siècle exposaient les œuvres acceptées par un jury ; en **1863**, Napoléon III autorise un **Salon des refusés**, où l'on voit Le Déjeuner sur l'herbe de Manet.
- Le **white cube** (le « cube blanc »), étudié par Brian O'Doherty en 1976, est la salle aux murs blancs et neutres de l'art moderne : il isole l'œuvre du monde.
- Les **biennales** et grandes manifestations : la Biennale de **Venise** (créée en 1895), la **documenta** de Kassel (créée en 1955).
- L'**espace public** : places, rues, jardins, parcs. L'œuvre y rencontre des passants qui ne sont pas venus pour elle.
- Le **paysage** : le land art sort de la galerie. **Robert Smithson**, **Spiral Jetty**, 1970, une spirale de roches dans le Grand Lac Salé, connue surtout par les photographies et le film.

### Œuvre et lieu
- Une œuvre **in situ** est conçue pour un lieu précis et n'a de sens que là. Exemple : **Daniel Buren**, **Les Deux Plateaux**, 1986, colonnes rayées dans la cour du Palais-Royal à Paris.
- Une œuvre **mobile** change de sens selon l'endroit : Maman de Louise Bourgeois a été montrée sous la grande verrière de la Tate Modern à Londres en 2000, puis ses fontes en bronze ont été installées dans plusieurs villes, dont Bilbao, devant le musée Guggenheim.
- **Les Christo** (Christo et sa compagne, qui signaient ensemble) emballent des monuments pour quelques jours, comme le **Pont-Neuf** à Paris en 1985 : l'œuvre est éphémère, puis diffusée par les images.

### Publics et diffusion
- Le spectateur peut être **sollicité** : tourner autour de l'œuvre, passer dessous, entrer à l'intérieur, toucher, participer.
- **Walter Benjamin** (essai de 1935) explique que la reproduction technique fait perdre à l'œuvre son **aura**, sa présence unique ici et maintenant.
- Aujourd'hui, beaucoup d'œuvres sont connues par des **écrans** : la reproduction écrase l'échelle et la matière.

### Construire une note d'intention d'exposition (sujet B)
- Choisir une œuvre du corpus et un **lieu** (musée, espace public, lieu inattendu).
- Dire le **propos** : ce qu'on veut faire comprendre ou ressentir.
- Décrire les **modalités** : accrochage, éclairage, parcours, distance, voisinages, médiation, public visé.
- Justifier chaque choix et ajouter **schémas et croquis**, obligatoires dans ce sujet.

### À retenir pour le bac
- Monstration (montrer) et diffusion (faire circuler) : deux notions distinctes.
- In situ : conçu pour un lieu précis ; savoir citer un exemple daté.
- Le contexte change le sens : une même œuvre au musée ou dans la rue n'est pas reçue pareil.
- Sujet B : croquis obligatoires et choix toujours justifiés.`,
      cartes: [
        { q: "Qu'est-ce que la monstration ?", r: "Le fait de montrer une œuvre au public : le lieu, la manière et le public visé." },
        { q: "Quelle différence entre monstration et diffusion ?", r: "La monstration montre l'œuvre elle-même dans un lieu ; la diffusion fait circuler l'œuvre ou son image (reproductions, écrans)." },
        { q: "Quel est le rôle du commissaire d'exposition ?", r: "Il choisit les œuvres, construit le propos et l'organisation de l'exposition." },
        { q: "Qu'est-ce que la scénographie d'une exposition ?", r: "Sa mise en espace : parcours, cloisons, couleurs des murs, éclairage, accrochage, socles et vitrines." },
        { q: "Qu'est-ce que la médiation ?", r: "Tout ce qui aide le public à comprendre les œuvres : visites, ateliers, textes, audioguides." },
        { q: "Quand le Louvre ouvre-t-il au public ?", r: "En 1793." },
        { q: "Qu'est-ce que le Salon des refusés ?", r: "L'exposition autorisée par Napoléon III en 1863 pour les œuvres refusées par le jury du Salon ; on y voit Le Déjeuner sur l'herbe de Manet." },
        { q: "Qu'est-ce que le white cube ?", r: "La salle aux murs blancs et neutres de l'art moderne, qui isole l'œuvre du monde ; analysée par Brian O'Doherty en 1976." },
        { q: "Qu'est-ce qu'une œuvre in situ ?", r: "Une œuvre conçue pour un lieu précis, qui n'a de sens que là, comme Les Deux Plateaux de Daniel Buren (1986)." },
        { q: "Qu'est-ce que Spiral Jetty ?", r: "Une spirale de roches de Robert Smithson dans le Grand Lac Salé (1970), œuvre de land art connue surtout par photos et film." },
        { q: "Quand les Christo emballent-ils le Pont-Neuf ?", r: "En 1985, pour quelques jours : une œuvre éphémère diffusée ensuite par les images." },
        { q: "Où Maman a-t-elle été montrée pour la première fois ?", r: "Sous la grande verrière de la Tate Modern, à Londres, en 2000, dans sa version en acier." },
        { q: "Qu'est-ce que l'aura selon Walter Benjamin ?", r: "La présence unique de l'œuvre ici et maintenant, que la reproduction technique fait perdre (essai de 1935)." },
        { q: "Quand naissent la Biennale de Venise et la documenta ?", r: "La Biennale de Venise en 1895, la documenta de Kassel en 1955." },
        { q: "Que faut-il obligatoirement ajouter dans le sujet B ?", r: "Des schémas et des croquis qui montrent le dispositif d'exposition." },
      ],
      quiz: [
        { q: "Les colonnes rayées de Buren au Palais-Royal (1986) n'ont de sens que dans ce lieu. Elles sont :", choix: ["éphémères", "in situ", "nomades", "virtuelles"], bonne: 1, expl: "In situ : conçu pour un lieu précis.", niv: 1 },
        { q: "Qui choisit les œuvres et construit le propos d'une exposition ?", choix: ["Le restaurateur", "Le galeriste qui vend les œuvres", "Le commissaire d'exposition", "Le médiateur"], bonne: 2, expl: "Le commissaire conçoit l'exposition ; le médiateur aide le public.", niv: 1 },
        { q: "Une affiche, un livre ou une image sur un écran relèvent surtout de :", choix: ["la diffusion de l'œuvre", "la monstration in situ", "la restauration de l'œuvre", "la conservation au musée"], bonne: 0, expl: "La diffusion fait circuler l'œuvre ou son image.", niv: 2 },
        { q: "Le Déjeuner sur l'herbe de Manet est montré en 1863 :", choix: ["au Louvre", "à la documenta de Kassel", "dans un white cube", "au Salon des refusés"], bonne: 3, expl: "Refusé par le jury du Salon, il est exposé au Salon des refusés.", niv: 1 },
        { q: "Une sculpture déplacée du musée vers une place publique change de sens surtout parce que :", choix: ["sa matière se transforme", "les passants ne viennent pas pour elle", "son titre est modifié", "son prix de vente augmente fortement"], bonne: 1, expl: "Le contexte et le public changent la réception de l'œuvre.", niv: 3 },
        { q: "Selon Walter Benjamin (1935), la reproduction technique fait perdre à l'œuvre :", choix: ["son aura", "son cartel", "sa couleur", "son auteur"], bonne: 0, expl: "L'aura est la présence unique de l'œuvre ici et maintenant.", niv: 1 },
        { q: "Les murs blancs et neutres qui isolent l'œuvre du monde sont appelés :", choix: ["la scénographie immersive", "le cabinet de curiosités", "le white cube", "le Salon"], bonne: 2, expl: "Brian O'Doherty a analysé ce modèle en 1976.", niv: 1 },
        { q: "Spiral Jetty (1970) est surtout connue du public par :", choix: ["des visites guidées quotidiennes", "des copies en musée", "son exposition au Louvre", "des photographies et un film"], bonne: 3, expl: "Œuvre de land art lointaine, elle circule par ses images.", niv: 2 },
        { q: "Dans le sujet B, quelle phrase justifie le mieux une décision d'exposition ?", choix: ["« Éclairée d'en bas, elle paraît menaçante. »", "« Je la mets au milieu parce que c'est joli. »", "« Je l'expose car elle est célèbre. »", "« Je fais une salle comme dans les musées. »"], bonne: 0, expl: "Chaque modalité doit être reliée à un effet ou à un sens.", niv: 3 },
        { q: "Les Christo emballent le Pont-Neuf en 1985 pour quelques jours. L'œuvre est surtout :", choix: ["in situ et permanente", "éphémère, puis diffusée en images", "conservée dans un musée parisien", "un ready-made de Duchamp"], bonne: 1, expl: "L'emballage disparaît, les images restent.", niv: 2 },
        { q: "Quel élément n'est **pas** une modalité de scénographie ?", choix: ["La couleur des murs", "La hauteur d'accrochage", "L'éclairage des œuvres", "La date de naissance"], bonne: 3, expl: "La biographie est une information, pas une mise en espace.", niv: 2 },
      ],
    },
    // ---------------------------------------------------------------- 5
    {
      chapitre: 'arts-pla-5',
      fiche: `## Projet de l'œuvre : du projet à la production artistique

Questionnement précisé : « Projet de l'œuvre : modalités et moyens du passage du projet à la production artistique, diversité des approches. » Il relève du domaine « penser l'œuvre, faire œuvre ».

### De quoi s'agit-il ?
- Entre l'**idée** et l'**œuvre finie**, il y a un chemin : recherches, essais, choix, abandons. Le programme demande d'étudier ce passage et la **diversité** des façons de faire.
- Ce questionnement sert aussi à l'**oral** : on y présente un projet abouti et sa démarche.

### Les outils du projet
- Le **croquis** est un dessin rapide, pris sur le vif. L'**esquisse** fixe l'organisation générale d'une œuvre. L'**étude** travaille un détail (une main, un drapé).
- La **maquette** est un modèle réduit d'une œuvre en volume ou d'une installation.
- Le **protocole** est une suite d'instructions qui permet de réaliser l'œuvre, parfois par d'autres. **Sol LeWitt** écrit des consignes pour ses dessins muraux, exécutés par des assistants. Dans ses Paragraphs on Conceptual Art (1967), il affirme que l'**idée** devient la machine qui fait l'art.
- Le **carnet** garde les traces : notes, dessins, images collectées, essais ratés. Les carnets de Léonard de Vinci mêlent dessins d'art et de sciences.

### Diversité des approches
- Le **projet planifié** : tout est prévu avant la réalisation, comme une architecture.
- Le projet **ouvert** : l'œuvre se découvre en se faisant. **Jackson Pollock** pose la toile au sol et projette la peinture (le **dripping**, à partir de 1947) ; le geste et le hasard participent à l'œuvre.
- La **délégation** : l'artiste conçoit, d'autres fabriquent. Dans l'atelier de **Rubens** au XVIIe siècle, des collaborateurs peignaient une partie des tableaux. Aujourd'hui, des artistes comme Jeff Koons ou Takashi Murakami dirigent de grands ateliers. La fonte du bronze est faite en **fonderie**.
- Le projet **à grande échelle** : **les Christo** (Christo et sa compagne, qui signaient ensemble) préparent leurs emballages pendant des années ; la vente des dessins et collages préparatoires finance les projets.

### Les étapes d'une production
- Une **intention** de départ (une question, une émotion, une contrainte).
- Des **recherches** (références, matériaux, essais).
- Des **choix** (format, technique, échelle, présentation).
- La **réalisation**, avec ses imprévus et ses ajustements.
- La **présentation** au public : l'œuvre se termine aussi dans la manière de la montrer.

### Lien avec les œuvres de référence
- **Maman** : un dessin d'araignée et des sculptures plus petites précèdent l'œuvre géante ; la fabrication est confiée à une fonderie.
- Le **Colosse de l'Apennin** est un projet collectif de grande ampleur, commandé par le grand-duc François Ier de Médicis pour le parc de Pratolino.
- **99 Cent** : Gursky photographie un supermarché puis retravaille l'image numériquement : la prise de vue n'est qu'une étape.

### À retenir pour le bac
- Distinguer croquis, esquisse, étude, maquette, protocole.
- Le projet peut être planifié ou ouvert au hasard : citer Sol LeWitt et Pollock.
- La délégation de la fabrication ne retire pas à l'artiste la paternité de l'œuvre.
- À l'oral, montrer le passage du projet à l'œuvre : intentions, choix, ajustements.`,
      cartes: [
        { q: "Croquis, esquisse, étude : quelle différence ?", r: "Le croquis est un dessin rapide ; l'esquisse fixe l'organisation d'ensemble ; l'étude travaille un détail." },
        { q: "Qu'est-ce qu'une maquette ?", r: "Un modèle réduit d'une œuvre en volume ou d'une installation, qui sert à tester l'organisation." },
        { q: "Qu'est-ce qu'un protocole en art ?", r: "Une suite d'instructions qui permet de réaliser l'œuvre, parfois par d'autres personnes que l'artiste." },
        { q: "Que dit Sol LeWitt en 1967 ?", r: "Dans ses Paragraphs on Conceptual Art, que l'idée devient la machine qui fait l'art." },
        { q: "Comment sont réalisés les dessins muraux de Sol LeWitt ?", r: "Par des assistants qui suivent ses consignes écrites." },
        { q: "Qu'est-ce que le dripping ?", r: "La technique de Jackson Pollock, à partir de 1947 : la peinture est projetée ou coulée sur une toile posée au sol." },
        { q: "Projet planifié ou projet ouvert ?", r: "Le projet planifié prévoit tout avant la réalisation ; le projet ouvert laisse l'œuvre se découvrir en se faisant." },
        { q: "Qu'est-ce que la délégation de la fabrication ?", r: "L'artiste conçoit l'œuvre et d'autres la fabriquent : assistants, ateliers, fonderies." },
        { q: "Comment travaillait l'atelier de Rubens ?", r: "Au XVIIe siècle, des collaborateurs peignaient une partie des tableaux sous sa direction." },
        { q: "Comment les Christo financent-ils leurs projets ?", r: "Par la vente des dessins et collages préparatoires de leurs projets." },
        { q: "Que contiennent les carnets de Léonard de Vinci ?", r: "Des dessins, des études et des notes qui mêlent art et sciences." },
        { q: "Quelles sont les étapes d'une production artistique ?", r: "Une intention, des recherches, des choix, la réalisation avec ses imprévus, puis la présentation au public." },
        { q: "Qui commande le Colosse de l'Apennin ?", r: "Le grand-duc François Ier de Médicis, pour le parc de sa villa de Pratolino, près de Florence." },
        { q: "Pourquoi la prise de vue n'est-elle qu'une étape dans 99 Cent ?", r: "Gursky retravaille ensuite l'image sur ordinateur : la photographie est construite." },
      ],
      quiz: [
        { q: "Un dessin rapide pris sur le vif, dans la rue, est :", choix: ["une étude", "une esquisse", "un protocole", "un croquis"], bonne: 3, expl: "Le croquis est rapide ; l'esquisse organise l'ensemble d'une œuvre.", niv: 1 },
        { q: "Sol LeWitt écrit des consignes réalisées sur les murs par des assistants. Son œuvre repose sur :", choix: ["un protocole", "un ready-made", "une fonte en bronze", "un dripping"], bonne: 0, expl: "Les instructions écrites permettent à d'autres de réaliser l'œuvre.", niv: 2 },
        { q: "Dans le dripping de Pollock, le projet est surtout :", choix: ["entièrement planifié sur une maquette", "ouvert au geste et au hasard", "confié à une fonderie", "dicté par un commanditaire"], bonne: 1, expl: "L'œuvre se découvre en se faisant, par le geste.", niv: 2 },
        { q: "Quelle phrase sur la délégation est juste ?", choix: ["L'artiste perd tout droit sur l'œuvre", "Elle n'est apparue qu'avec l'art numérique", "Elle est interdite pour la sculpture", "L'artiste reste l'auteur du projet"], bonne: 3, expl: "De l'atelier de Rubens aux fonderies, l'artiste reste l'auteur du projet.", niv: 3 },
        { q: "Un modèle réduit d'une installation, pour tester son organisation dans l'espace, est :", choix: ["une étude", "une maquette", "un croquis", "un cartel"], bonne: 1, expl: "La maquette réduit l'œuvre en volume.", niv: 1 },
        { q: "Pour Sol LeWitt (1967), dans l'art conceptuel :", choix: ["la main de l'artiste est indispensable", "le hasard du geste décide de l'œuvre", "l'idée devient la machine qui fait l'art", "seule la couleur compte"], bonne: 2, expl: "L'idée prime sur l'exécution.", niv: 2 },
        { q: "Comment les Christo financent-ils leurs grands projets ?", choix: ["Par la vente de leurs dessins", "Par des subventions de l'État", "Par la vente de billets d'entrée aux visiteurs", "Par la publicité sur les emballages"], bonne: 0, expl: "Ils vendent esquisses, dessins et collages des projets.", niv: 2 },
        { q: "Un dessin qui travaille seulement une main avant un grand tableau est :", choix: ["une esquisse", "un croquis", "une maquette", "une étude"], bonne: 3, expl: "L'étude porte sur un détail.", niv: 1 },
        { q: "Pourquoi dit-on que l'œuvre se termine aussi dans sa présentation ?", choix: ["Le cadre doré vaut souvent plus cher que la toile elle-même", "La manière de la montrer fait partie de son sens", "Chaque visiteur la repeint", "Le musée change son titre"], bonne: 1, expl: "Accrochage, échelle, lieu : la présentation participe à l'œuvre.", niv: 3 },
        { q: "Pour 99 Cent, Gursky photographie un supermarché, puis :", choix: ["retravaille l'image sur ordinateur", "peint la photographie à l'huile", "la fait tisser en tapisserie", "la projette sur un mur de la ville"], bonne: 0, expl: "La retouche numérique fait partie du projet.", niv: 2 },
        { q: "À l'oral, pour présenter le passage du projet à l'œuvre, il vaut mieux :", choix: ["montrer l'œuvre finie, sans rien dire de plus", "raconter chaque séance de travail", "expliquer intentions et choix", "lire le carnet de travail page par page"], bonne: 2, expl: "Le jury attend la démarche et les raisons des choix.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 6
    {
      chapitre: 'arts-pla-6',
      fiche: `## Arts plastiques, architecture, paysage et design : environnement et usages

Questionnement précisé : « Liens entre arts plastiques et architecture, paysage, design d'espace et d'objet. Environnement et usages de l'œuvre ou de l'objet. »

### De quoi s'agit-il ?
- Une œuvre ne vit pas seulement sur un mur : elle peut prendre place dans un **bâtiment**, un **jardin**, une **ville**, ou devenir un **objet** qu'on utilise.
- Le programme demande d'étudier les liens entre l'œuvre et son **environnement** (le lieu qui l'entoure) et ses **usages** (ce qu'on en fait : la traverser, s'y asseoir, s'y abriter, la regarder de loin).

### Architecture et œuvre
- L'**architecture** organise l'espace pour l'usage humain. Une sculpture placée devant un bâtiment dialogue avec lui (échelle, matière, couleur).
- Le **musée Guggenheim de Bilbao**, de l'architecte **Frank Gehry** (1997), aux courbes couvertes de titane, est lui-même vu comme une œuvre. Maman est installée sur son esplanade, au bord du fleuve.
- Le **Bauhaus**, école fondée en **1919** à Weimar par l'architecte **Walter Gropius**, réunit art, artisanat et industrie : on y apprend à concevoir aussi bien un bâtiment qu'une chaise ou une lampe.
- **Le Corbusier** défend une architecture moderne fonctionnelle ; la Villa Savoye (1931) en est un exemple.

### Paysage et jardin
- Le **jardin** est un paysage composé. Le jardin à la française, comme celui de **Versailles** dessiné par André Le Nôtre, ordonne la nature par la géométrie.
- Le jardin **maniériste** de la Renaissance italienne est un lieu de surprises : grottes, automates, jeux d'eau, statues géantes. Le **Colosse de l'Apennin** à **Pratolino** en est un exemple.
- Le **land art** (fin des années 1960) travaille directement dans le paysage.
- Le paysagiste **Gilles Clément** défend le « **jardin en mouvement** », qui laisse les plantes se déplacer.

### Design d'espace et d'objet
- Le **design** conçoit des objets et des espaces en pensant à leur **fonction**, leur **forme** et leur production.
- Une formule célèbre, souvent associée au designer américain Louis Sullivan, dit que « la forme suit la fonction ». **Ludwig Mies van der Rohe** est associé à l'expression « **less is more** » (moins, c'est plus).
- **Charlotte Perriand** conçoit des meubles modernes avec Le Corbusier dans les années 1920-1930.
- Le **design d'espace** organise un lieu pour une expérience : une boutique, une exposition, un espace public.

### Œuvre ou objet ?
- Quand une œuvre a un usage (un banc sculpté, une fontaine, une sculpture qu'on traverse), la frontière entre art et objet devient floue.
- À l'inverse, un objet de design peut entrer au musée et être regardé comme une œuvre.

### Lien avec les œuvres de référence
- **Maman** dialogue avec l'architecture de Gehry et avec la ville : on passe sous ses pattes, on mesure son corps à elle.
- Le **Colosse** est à la fois une sculpture, un élément de jardin, une fontaine et un petit bâtiment : son intérieur a des **chambres** sur trois niveaux, avec des vues sur l'extérieur.
- **99 Cent** montre un espace de vente pensé pour la consommation : rayons, éclairage, ordre des produits relèvent du design d'espace.

### À retenir pour le bac
- Environnement (le lieu autour de l'œuvre) et usage (ce qu'on fait de l'œuvre).
- Repères : Bauhaus 1919, Villa Savoye 1931, Guggenheim Bilbao 1997.
- Le Colosse est à la fois sculpture, fontaine, architecture et élément de jardin.
- Citer au moins un exemple de design et un exemple de paysage.`,
      cartes: [
        { q: "Que désigne l'environnement d'une œuvre ?", r: "Le lieu qui l'entoure et avec lequel elle dialogue : bâtiment, ville, jardin, paysage." },
        { q: "Que désigne l'usage d'une œuvre ou d'un objet ?", r: "Ce qu'on en fait : le traverser, s'y asseoir, s'y abriter, le regarder de loin, l'utiliser." },
        { q: "Qui a construit le musée Guggenheim de Bilbao, et quand ?", r: "L'architecte Frank Gehry, en 1997, avec des courbes couvertes de titane." },
        { q: "Qu'est-ce que le Bauhaus ?", r: "Une école fondée en 1919 à Weimar par Walter Gropius, qui réunit art, artisanat et industrie, de l'architecture aux objets." },
        { q: "Quel bâtiment de Le Corbusier est un repère de l'architecture moderne ?", r: "La Villa Savoye, à Poissy, achevée en 1931." },
        { q: "Qu'est-ce qu'un jardin à la française ?", r: "Un jardin qui ordonne la nature par la géométrie, comme celui de Versailles dessiné par André Le Nôtre." },
        { q: "Qu'est-ce qui caractérise le jardin maniériste italien ?", r: "Un lieu de surprises : grottes, automates, jeux d'eau et statues géantes, comme à Pratolino." },
        { q: "Que défend Gilles Clément ?", r: "Le « jardin en mouvement », qui laisse les plantes se déplacer et évoluer." },
        { q: "Qu'est-ce que le design ?", r: "La conception d'objets et d'espaces en pensant ensemble leur fonction, leur forme et leur production." },
        { q: "Que signifie « less is more » ?", r: "« Moins, c'est plus » : une expression associée à l'architecte Mies van der Rohe, éloge de la simplicité." },
        { q: "Qui est Charlotte Perriand ?", r: "Une designer française qui conçoit des meubles modernes, notamment avec Le Corbusier dans les années 1920-1930." },
        { q: "Pourquoi le Colosse de l'Apennin est-il aussi une architecture ?", r: "Son intérieur contient des chambres communicantes sur trois niveaux, avec des vues sur l'extérieur." },
        { q: "Comment Maman dialogue-t-elle avec le Guggenheim de Bilbao ?", r: "Installée sur l'esplanade, elle répond à l'échelle et aux courbes du bâtiment ; on passe sous ses pattes." },
        { q: "En quoi 99 Cent touche-t-il au design d'espace ?", r: "L'image montre un magasin organisé pour vendre : rayons, éclairage et ordre des produits." },
      ],
      quiz: [
        { q: "Qui a fondé le Bauhaus en 1919 ?", choix: ["Le Corbusier", "Walter Gropius", "Frank Gehry", "Mies van der Rohe"], bonne: 1, expl: "Walter Gropius fonde le Bauhaus à Weimar ; Mies van der Rohe le dirigera plus tard.", niv: 1 },
        { q: "Un banc public sculpté par une artiste, où les passants s'assoient, pose surtout la question :", choix: ["de la limite entre œuvre et objet", "de la ressemblance avec le réel", "du dripping et du hasard", "de la reproduction technique des images"], bonne: 0, expl: "L'usage brouille la limite entre art et objet.", niv: 2 },
        { q: "Le musée Guggenheim de Bilbao (1997) est l'œuvre de :", choix: ["Renzo Piano", "Jean Nouvel", "Frank Gehry", "Tadao Ando"], bonne: 2, expl: "Frank Gehry le couvre de titane aux formes courbes.", niv: 1 },
        { q: "Grottes, jeux d'eau et statues géantes caractérisent surtout :", choix: ["le jardin à la française", "le jardin en mouvement", "le land art américain des années 1970", "le jardin maniériste"], bonne: 3, expl: "Pratolino est un jardin maniériste de surprises.", niv: 2 },
        { q: "Pourquoi le Colosse de l'Apennin relève-t-il aussi de l'architecture ?", choix: ["Il est construit en béton armé", "Il abrite des chambres", "Il sert de siège à un gouvernement", "Il a été dessiné par Le Nôtre"], bonne: 1, expl: "Base, ventre et tête contiennent des pièces avec des vues sur l'extérieur.", niv: 2 },
        { q: "Le jardin de Versailles, dessiné par Le Nôtre, est un exemple de :", choix: ["jardin à la française", "land art", "jardin en mouvement", "design d'objet"], bonne: 0, expl: "La nature y est ordonnée par la géométrie.", niv: 1 },
        { q: "« La forme suit la fonction » est une idée centrale :", choix: ["du réalisme de Courbet", "de l'expressionnisme", "du cubisme", "du design moderne"], bonne: 3, expl: "Le design pense la forme à partir de l'usage.", niv: 2 },
        { q: "Maman est installée devant le Guggenheim de Bilbao. Son sens dépend aussi :", choix: ["du prix de la fonte", "de la date de naissance de l'artiste à Paris", "de son dialogue avec le lieu", "de la couleur de son cartel"], bonne: 2, expl: "L'environnement fait partie de l'expérience de l'œuvre.", niv: 3 },
        { q: "Quelle affirmation sur le Bauhaus est juste ?", choix: ["Il refusait tout lien avec l'industrie", "Il unissait art et industrie", "Il n'enseignait que la peinture", "Il est né à Paris en 1931"], bonne: 1, expl: "Le Bauhaus forme à concevoir bâtiments et objets.", niv: 2 },
        { q: "Un objet de design exposé au musée sur un socle, sans être utilisé, devient :", choix: ["un objet vu comme une œuvre", "un ready-made de Duchamp", "une œuvre in situ", "un paysage composé par un jardinier"], bonne: 0, expl: "Le contexte de monstration change le statut de l'objet.", niv: 3 },
        { q: "Dans 99 Cent, l'ordre des rayons et l'éclairage du magasin relèvent :", choix: ["du jardin maniériste", "de l'art brut", "de l'architecture antique", "du design d'espace"], bonne: 3, expl: "Le magasin est un espace conçu pour la vente.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 7
    {
      chapitre: 'arts-pla-7',
      fiche: `## Mondialisation de la création artistique : métissages ou relativité des cultures

Questionnement transversal précisé : « Mondialisation de la création artistique : métissages ou relativité des cultures du monde. » C'est le questionnement du **sujet A** de l'écrit (le commentaire critique d'un document sur l'art).

### Les mots à maîtriser
- La **mondialisation** est l'intensification des échanges dans le monde : marchandises, images, personnes, idées. L'art circule plus vite : foires, biennales, internet, marché mondial.
- Le **métissage** est le mélange de cultures qui produit des formes nouvelles.
- La **relativité des cultures** est l'idée qu'aucune culture n'est la mesure de toutes les autres : ce qu'on appelle « art » varie selon les cultures.
- L'**appropriation** est le fait de reprendre des formes d'une autre culture ; elle pose la question du respect et du pouvoir entre cultures.

### Des échanges anciens
- Les échanges ne datent pas d'hier : au XIXe siècle, le **japonisme** marque les impressionnistes. **Van Gogh** copie des estampes japonaises ; la Vague d'**Hokusai** (vers 1830) circule en Europe.
- Au début du XXe siècle, **Picasso** et d'autres artistes découvrent des masques et sculptures d'Afrique et d'Océanie. Ces objets nourrissent Les Demoiselles d'Avignon (1907). On parle alors de **primitivisme**, mot aujourd'hui critiqué, car il suppose une hiérarchie entre les cultures.

### Un tournant : Les Magiciens de la terre (1989)
- En **1989**, l'exposition **Les Magiciens de la terre**, dirigée par Jean-Hubert Martin au Centre Pompidou et à la Grande Halle de la Villette, présente à égalité des artistes occidentaux et des créateurs du monde entier.
- Elle pose une question : peut-on comparer des œuvres venues de cultures qui n'ont pas la même idée de l'art ? Elle a été admirée et critiquée.

### Des artistes du métissage
- **Yinka Shonibare**, artiste britannique d'origine nigériane, utilise des tissus **wax**, perçus comme africains, mais d'origine liée à des tissus indonésiens et à une production européenne : ils montrent que l'identité culturelle est souvent un mélange.
- **El Anatsui**, artiste ghanéen, assemble des milliers de capsules de bouteilles en grandes tentures métalliques, entre tradition textile et objets de la consommation mondiale.
- **Takashi Murakami** mêle l'estampe japonaise, le manga et le marché de l'art international.
- **Ai Weiwei**, artiste chinois, interroge la tradition, la production en série et la politique.

### Le marché et les lieux mondiaux
- Les **biennales** se multiplient dans le monde. Les foires d'art et les ventes aux enchères fixent des prix mondiaux : en 2007, une version de **99 Cent** de Gursky (99 Cent II, un diptyque) dépasse 3 millions de dollars aux enchères, un record pour une photographie à l'époque.
- Le musée du **quai Branly** à Paris (2006) expose des arts d'Afrique, d'Asie, d'Océanie et des Amériques ; il fait débat sur la façon de présenter les objets d'autres cultures.

### Lien avec les œuvres de référence
- **99 Cent** : des produits de consommation de partout, alignés à l'infini, image de la **mondialisation** marchande.
- **Giambologna**, né à **Douai** en Flandre, fait carrière à **Florence** : un artiste européen mobile dès le XVIe siècle.
- **Louise Bourgeois**, née à Paris, fait sa carrière à New York ; ses araignées sont exposées dans de nombreuses villes du monde.

### Rédiger le sujet A
- Présenter le document (auteur, date, nature, idée principale).
- Expliquer ses arguments avec ses propres mots.
- **Discuter** : être d'accord, nuancer, contester, avec des exemples d'œuvres précises.
- Conclure par un avis personnel argumenté.

### À retenir pour le bac
- Métissage : un mélange créateur ; relativité : aucune culture n'est la norme.
- Repères : japonisme au XIXe siècle, 1907, Les Magiciens de la terre en 1989.
- Le mot « primitivisme » est critiqué : savoir dire pourquoi.
- Sujet A : un commentaire critique, pas un résumé.`,
      cartes: [
        { q: "Qu'est-ce que la mondialisation de la création artistique ?", r: "L'intensification des échanges d'œuvres, d'images, d'artistes et d'idées dans le monde : biennales, foires, internet, marché mondial." },
        { q: "Qu'est-ce que le métissage en art ?", r: "Un mélange de cultures qui produit des formes nouvelles." },
        { q: "Que signifie la relativité des cultures ?", r: "Aucune culture n'est la mesure de toutes les autres ; ce qu'on appelle art varie selon les cultures." },
        { q: "Qu'est-ce que le japonisme ?", r: "L'influence de l'art japonais, surtout des estampes, sur les artistes européens au XIXe siècle, comme Van Gogh." },
        { q: "Pourquoi le mot primitivisme est-il critiqué ?", r: "Il suppose une hiérarchie entre les cultures, comme si les arts d'Afrique ou d'Océanie étaient moins avancés." },
        { q: "Quelle œuvre de Picasso de 1907 doit beaucoup aux masques africains ?", r: "Les Demoiselles d'Avignon." },
        { q: "Qu'est-ce que l'exposition Les Magiciens de la terre ?", r: "Une exposition de 1989, dirigée par Jean-Hubert Martin, qui présente à égalité des artistes occidentaux et des créateurs du monde entier." },
        { q: "Pourquoi Yinka Shonibare utilise-t-il le tissu wax ?", r: "Perçu comme africain, il est lié à des tissus indonésiens et à une production européenne : il montre que l'identité culturelle est un mélange." },
        { q: "Que fait El Anatsui ?", r: "Cet artiste ghanéen assemble des milliers de capsules de bouteilles en grandes tentures métalliques." },
        { q: "Que mêle Takashi Murakami ?", r: "L'estampe japonaise, le manga et le marché de l'art international." },
        { q: "Quel record a battu 99 Cent en 2007 ?", r: "Une version, 99 Cent II (diptyque), a dépassé 3 millions de dollars aux enchères, un record pour une photographie à l'époque." },
        { q: "Qu'est-ce que l'appropriation culturelle ?", r: "Le fait de reprendre des formes d'une autre culture ; elle pose la question du respect et des rapports de pouvoir." },
        { q: "Où est né Giambologna et où a-t-il travaillé ?", r: "Né à Douai, en Flandre, en 1529, il fait carrière à Florence." },
        { q: "Que faut-il faire dans le sujet A ?", r: "Présenter le document, expliquer ses arguments, les discuter avec des œuvres précises et donner un avis personnel." },
      ],
      quiz: [
        { q: "L'idée qu'aucune culture n'est la mesure de toutes les autres s'appelle :", choix: ["le japonisme", "le primitivisme", "la relativité culturelle", "l'Arte povera italien"], bonne: 2, expl: "C'est la relativité des cultures ; le primitivisme suppose au contraire une hiérarchie.", niv: 1 },
        { q: "Van Gogh copie des estampes japonaises. Ce phénomène du XIXe siècle s'appelle :", choix: ["le japonisme", "le land art", "le cubisme", "le métissage numérique"], bonne: 0, expl: "Le japonisme marque l'art européen au XIXe siècle.", niv: 1 },
        { q: "En quelle année a lieu l'exposition Les Magiciens de la terre ?", choix: ["1907", "1955", "2006", "1989"], bonne: 3, expl: "En 1989, au Centre Pompidou et à la Grande Halle de la Villette.", niv: 1 },
        { q: "Pourquoi le mot « primitivisme » est-il aujourd'hui critiqué ?", choix: ["Il désigne un style trop récent", "Il hiérarchise les cultures", "Il ne concerne que la musique", "Il a été inventé par un musée"], bonne: 1, expl: "Il présente les arts non occidentaux comme moins avancés.", niv: 3 },
        { q: "Le tissu wax de Yinka Shonibare montre surtout que :", choix: ["l'Afrique a découvert le textile grâce aux Européens", "l'art doit refuser tout tissu", "une identité culturelle est un mélange", "les tissus européens sont plus nobles"], bonne: 2, expl: "Ce tissu « africain » a une histoire indonésienne et européenne.", niv: 2 },
        { q: "El Anatsui assemble en tentures métalliques :", choix: ["des capsules", "des feuilles d'or", "des écrans de téléphone", "des plaques de marbre"], bonne: 0, expl: "Des milliers de capsules, entre tradition textile et consommation mondiale.", niv: 2 },
        { q: "Dans 99 Cent, les produits alignés à l'infini peuvent être lus comme une image :", choix: ["de la nature sauvage", "du commerce mondial", "d'un jardin maniériste", "de l'art brut"], bonne: 1, expl: "La photo montre l'abondance des biens de consommation mondiaux.", niv: 2 },
        { q: "Les Demoiselles d'Avignon (1907) de Picasso doivent beaucoup :", choix: ["aux estampes japonaises", "à l'Arte povera italien", "au land art américain", "aux masques d'Afrique"], bonne: 3, expl: "La découverte des arts africains nourrit le tableau.", niv: 1 },
        { q: "Dans le sujet A, que veut dire « commentaire critique » ?", choix: ["Résumer le texte dans l'ordre", "Dire si l'on aime le texte et pourquoi on l'aime", "Expliquer puis discuter les idées", "Recopier les phrases importantes"], bonne: 2, expl: "Il faut comprendre, puis prendre position de façon argumentée.", niv: 3 },
        { q: "Giambologna, né à Douai et actif à Florence, montre que :", choix: ["les artistes circulaient déjà au XVIe siècle", "la mondialisation de l'art date d'internet", "les sculpteurs restaient dans leur ville natale", "Florence interdisait les artistes étrangers"], bonne: 0, expl: "La circulation des artistes est ancienne.", niv: 3 },
        { q: "Quel musée parisien, ouvert en 2006, expose les arts d'Afrique, d'Asie, d'Océanie et des Amériques ?", choix: ["Le Louvre", "Le Centre Pompidou", "Le musée d'Orsay", "Le quai Branly"], bonne: 3, expl: "Le musée du quai Branly ouvre en 2006.", niv: 2 },
      ],
    },
    // ---------------------------------------------------------------- 8
    {
      chapitre: 'arts-pla-8',
      fiche: `## Documenter ou augmenter le réel : Vernet et Gursky

Thème de référence des questions limitatives à compter de la rentrée 2026. Deux œuvres à connaître précisément : leurs cartels, leur contexte, leurs procédés et leurs enjeux.

### Les cartels
- **Joseph Vernet** (1714-1789), **La ville et la rade de Toulon, deuxième vue, le port de Toulon, vue du Mont Faron**, **1756**, huile sur toile, 165 x 263 cm, Paris, **musée du Louvre**.
- **Andreas Gursky** (né en 1955), **99 Cent**, **1999**, photographie, épreuve chromogène sous Diasec, tirage 5 sur 6, environ 206 x 337 cm, Paris, **musée national d'art moderne** (Centre Pompidou).

### Vernet : documenter les ports du royaume
- Peintre né à Avignon, Vernet passe une vingtaine d'années à Rome, où il devient célèbre pour ses marines et ses paysages.
- En **1753**, il reçoit une **commande royale** de Louis XV, par l'intermédiaire du marquis de Marigny : peindre les **Ports de France**. Il en réalise **quinze** entre 1754 et 1765.
- Le but est **documentaire** et **politique** : montrer la puissance maritime et commerciale du royaume, les activités de chaque port, ses navires, ses habitants.
- Pour Toulon, grand port militaire, Vernet choisit une vue **en hauteur**, depuis le Mont Faron : la ville, l'arsenal et la rade se déploient en un vaste **panorama**.
- Le tableau n'est pas une simple copie : Vernet **compose**. Il place des personnages au premier plan qui animent la scène, règle la lumière et l'atmosphère, organise les plans successifs. C'est une image **vraisemblable**, à la fois exacte et embellie.
- Les Ports de France sont ensuite **gravés** et diffusés en estampes : l'image circule bien au-delà du tableau.

### Gursky : une photographie qui augmente le réel
- Gursky a étudié à l'Académie des beaux-arts de **Düsseldorf**, auprès de **Bernd et Hilla Becher**, connus pour leurs photographies frontales et sérielles de bâtiments industriels.
- **99 Cent** montre l'intérieur d'un magasin à bas prix de Los Angeles où tout coûte moins d'un dollar. La vue est **frontale** et **en hauteur** ; les rayons saturés de produits colorés couvrent toute l'image, sans centre ni point de fuite dominant : une composition **all-over**.
- L'image est **retouchée numériquement** : Gursky assemble et modifie des éléments, par exemple les reflets du plafond, pour obtenir une netteté et une densité impossibles à l'œil nu. La photo semble documentaire, mais elle **augmente** le réel.
- Le **très grand format** et le Diasec brillant rapprochent la photographie du tableau et de la vitrine.
- Les clients sont minuscules : la marchandise domine l'humain. L'œuvre parle de **consommation de masse** et de **mondialisation**. Le marché de l'art lui-même s'empare de Gursky : une version de 99 Cent dépasse 3 millions de dollars aux enchères en 2007.

### Ce qui rapproche et oppose les deux œuvres
- **Points communs** : une vue d'en haut, un grand format, une image d'un lieu de l'économie (un port, un magasin), une composition très construite, une visée **documentaire** dépassée par l'invention.
- **Écarts** : peinture à l'huile et photographie numérique ; commande royale et démarche personnelle ; XVIIIe siècle et fin du XXe siècle ; éloge de la puissance d'un royaume et regard ambigu sur la société de consommation.
- **Documenter** : enregistrer, informer, garder une trace fidèle. **Augmenter** : ajouter, intensifier, rendre plus visible que le réel, par la composition ou la retouche.

### Pour aller plus loin
- **Louis Daguerre**, **Boulevard du Temple**, **1838** : un daguerréotype où l'on voit l'un des premiers humains photographiés, un homme qui se fait cirer les chaussures ; les passants en mouvement ont disparu à cause du long temps de pose.
- **Andy Warhol**, **Campbell's Soup Cans**, **1962** : 32 toiles de boîtes de soupe, la répétition des produits comme chez Gursky.

### À retenir pour le bac
- Connaître les deux cartels par cœur : artiste, titre, date, technique, lieu.
- Vernet : commande royale de 1753, quinze ports, vue du Mont Faron, image composée.
- Gursky : école de Düsseldorf, retouche numérique, all-over, consommation.
- La question clé : la frontière entre document et invention.`,
      cartes: [
        { q: "Donne le cartel de l'œuvre de Vernet au programme.", r: "Joseph Vernet, La ville et la rade de Toulon, deuxième vue, le port de Toulon, vue du Mont Faron, 1756, huile sur toile, 165 x 263 cm, musée du Louvre." },
        { q: "Donne le cartel de l'œuvre de Gursky au programme.", r: "Andreas Gursky, 99 Cent, 1999, épreuve chromogène sous Diasec, tirage 5 sur 6, environ 206 x 337 cm, musée national d'art moderne." },
        { q: "Qui commande les Ports de France, et quand ?", r: "Louis XV, par l'intermédiaire du marquis de Marigny, en 1753." },
        { q: "Combien de Ports de France Vernet a-t-il peints ?", r: "Quinze, entre 1754 et 1765." },
        { q: "Pourquoi cette commande a-t-elle un but politique ?", r: "Elle montre la puissance maritime et commerciale du royaume à travers ses ports et leurs activités." },
        { q: "D'où Vernet peint-il Toulon ?", r: "D'un point de vue élevé, le Mont Faron, qui déploie la ville, l'arsenal et la rade en panorama." },
        { q: "Pourquoi le tableau de Vernet n'est-il pas une copie exacte ?", r: "Vernet compose : il place des personnages, règle la lumière et organise les plans. L'image est vraisemblable et embellie." },
        { q: "Comment les Ports de France ont-ils été diffusés ?", r: "Par des gravures, des estampes qui ont fait circuler les images bien au-delà des tableaux." },
        { q: "Auprès de qui Gursky a-t-il étudié ?", r: "Auprès de Bernd et Hilla Becher, à l'Académie des beaux-arts de Düsseldorf." },
        { q: "Que montre 99 Cent ?", r: "L'intérieur d'un magasin à bas prix de Los Angeles, aux rayons saturés de produits colorés, vu de face et en hauteur." },
        { q: "Qu'est-ce qu'une composition all-over ?", r: "Une composition qui couvre toute la surface de façon égale, sans centre dominant." },
        { q: "En quoi Gursky augmente-t-il le réel ?", r: "Par la retouche numérique, il assemble et modifie l'image pour une netteté et une densité impossibles à l'œil nu." },
        { q: "Que suggèrent les clients minuscules dans 99 Cent ?", r: "Que la marchandise domine l'humain : un regard sur la consommation de masse." },
        { q: "Documenter ou augmenter : quelle différence ?", r: "Documenter, c'est garder une trace fidèle ; augmenter, c'est intensifier ou rendre plus visible que le réel." },
        { q: "Que montre le Boulevard du Temple de Daguerre (1838) ?", r: "L'un des premiers humains photographiés, un homme immobile qui se fait cirer les chaussures ; les passants ont disparu à cause du temps de pose." },
        { q: "Quels points communs entre Vernet et Gursky ?", r: "Une vue d'en haut, un grand format, un lieu de l'économie, une composition construite, un document dépassé par l'invention." },
      ],
      quiz: [
        { q: "Où est conservée l'œuvre de Vernet au programme ?", choix: ["Au musée d'Orsay", "Au musée du Louvre", "Au musée de la Marine à Toulon", "Au château de Versailles"], bonne: 1, expl: "Le cartel officiel indique Paris, musée du Louvre.", niv: 1 },
        { q: "Quel roi commande à Vernet la série des Ports de France ?", choix: ["Louis XIV", "Louis XVI", "Napoléon Ier", "Louis XV"], bonne: 3, expl: "La commande date de 1753, sous Louis XV.", niv: 1 },
        { q: "Combien de Ports de France Vernet a-t-il réalisés ?", choix: ["Quinze", "Vingt-quatre", "Huit", "Trente"], bonne: 0, expl: "Il en peint quinze entre 1754 et 1765.", niv: 2 },
        { q: "Pourquoi Vernet peint-il Toulon depuis le Mont Faron ?", choix: ["Pour cacher l'arsenal militaire", "Parce que la ville était interdite aux peintres", "Pour déployer la ville et la rade en panorama", "Pour imiter un tableau de Gursky"], bonne: 2, expl: "La vue élevée permet de tout montrer, comme une carte vivante.", niv: 2 },
        { q: "Gursky a été formé à Düsseldorf par :", choix: ["Bernd et Hilla Becher", "Gilbert et George", "Claes Oldenburg et Coosje van Bruggen", "Pierre et Gilles"], bonne: 0, expl: "Les Becher photographiaient de face et en série des bâtiments industriels.", niv: 1 },
        { q: "Dans 99 Cent, l'image couvre toute la surface sans centre dominant. C'est une composition :", choix: ["pyramidale", "en perspective centrale", "en clair-obscur", "all-over"], bonne: 3, expl: "All-over : la surface est traitée de manière égale.", niv: 2 },
        { q: "Pourquoi dit-on que 99 Cent « augmente » le réel ?", choix: ["Il agrandit le magasin réel par un objectif grand-angle", "La retouche donne une netteté impossible à l'œil", "Il ajoute des personnages peints", "Son tirage est exposé en hauteur"], bonne: 1, expl: "L'image retouchée est plus dense et plus nette que la vision réelle.", niv: 3 },
        { q: "Quelle affirmation sur le tableau de Vernet est juste ?", choix: ["Un relevé mécanique, sans part d'invention", "Un paysage imaginaire", "Une image documentaire, mais composée", "Une étude faite en une heure sur le motif"], bonne: 2, expl: "Vernet documente avec précision tout en arrangeant figures et lumière.", niv: 3 },
        { q: "Dans 99 Cent, les clients sont minuscules face aux rayons. Cela suggère :", choix: ["la domination de la marchandise", "la richesse des clients du magasin", "la nature sauvage autour de la ville", "le respect de la tradition artisanale"], bonne: 0, expl: "L'abondance des produits écrase les humains : un regard sur la consommation.", niv: 2 },
        { q: "Les Ports de France ont été largement diffusés grâce à :", choix: ["des photographies", "des tapisseries", "des affiches publicitaires", "des gravures"], bonne: 3, expl: "Les estampes gravées d'après les tableaux ont fait circuler les images.", niv: 2 },
        { q: "Quel écart principal sépare les deux œuvres ?", choix: ["Ce sont deux photographies retouchées sur ordinateur à la fin du XXe siècle", "Commande royale d'un côté, démarche personnelle de l'autre", "Elles montrent chacune un port militaire", "Elles sont chacune petites et intimes"], bonne: 1, expl: "Commande d'État au XVIIIe siècle, démarche d'artiste à la fin du XXe siècle.", niv: 3 },
        { q: "Dans le Boulevard du Temple (1838), pourquoi les passants ont-ils disparu ?", choix: ["Ils ont été effacés à la main", "La rue était fermée ce jour-là", "La pose était trop longue", "Daguerre photographiait la nuit"], bonne: 2, expl: "Seul l'homme resté immobile assez longtemps apparaît.", niv: 2 },
      ],
    },
    // ---------------------------------------------------------------- 9
    {
      chapitre: 'arts-pla-9',
      fiche: `## Expérience des espaces physiques et symboliques de l'œuvre : Bourgeois et Giambologna

Thème de référence des questions limitatives à compter de la rentrée 2026. Deux œuvres monumentales qu'on ne regarde pas seulement : on les **éprouve** avec son corps.

### Les cartels
- **Louise Bourgeois** (1911-2010), **Maman**, **1999** (fonte de **2001**), bronze, marbre et acier inoxydable, environ 9 x 10 x 12 m, édition 2 sur 6, **Bilbao**, musée Guggenheim.
- **Jean Bologne**, dit **Giambologna** (1529-1608), **Le Colosse de l'Apennin** (ou Jupiter), **1579 à 1583**, sculpture d'environ **14 m** taillée dans la roche, en partie recouverte d'enduits qui imitent la boue, les algues et les stalactites, avec des jeux d'eau ; l'intérieur contient des **chambres** sur trois niveaux (base, ventre, tête) avec des vues sur l'extérieur. Vaglia, **villa de Pratolino**, près de Florence.

### Maman de Louise Bourgeois
- Louise Bourgeois naît à Paris en 1911. Ses parents tiennent un atelier de **restauration de tapisseries**. Elle s'installe à New York en 1938 et y fait toute sa carrière.
- **Maman** est une araignée géante. Une première version en acier est montrée en **2000** sous la grande verrière de la **Tate Modern** à Londres ; des fontes en bronze sont ensuite installées dans plusieurs villes du monde.
- Sous son corps, un **sac** contient des **œufs de marbre**.
- **Sens** : l'araignée est un hommage à la **mère** de l'artiste. Comme une araignée, la mère **tisse** et **répare** (les tapisseries), elle est patiente et protectrice. Mais l'araignée est aussi **menaçante** : la figure maternelle est **ambivalente**, à la fois refuge et peur.
- **Expérience physique** : le spectateur passe **sous** l'araignée, entre ses longues pattes fines. Il se sent petit, comme un enfant face à sa mère. L'œuvre crée un **espace** : un dessous, un abri, une cage.
- Le contraste des matières : des pattes très fines qui portent un corps lourd, la dureté du bronze et la fragilité des œufs.

### Le Colosse de l'Apennin de Giambologna
- Giambologna, né à **Douai** en Flandre, fait carrière à **Florence** au service des **Médicis**. On lui doit aussi l'Enlèvement des Sabines (1582, Loggia dei Lanzi).
- Le Colosse est commandé par le grand-duc **François Ier de Médicis** pour le parc de sa villa de **Pratolino**, un jardin plein de grottes, d'automates et de jeux d'eau.
- C'est une **personnification** : la chaîne de montagnes de l'**Apennin** devient un vieillard géant, accroupi au bord d'un bassin. Il semble sortir de la roche ; la mousse, la boue et les stalactites imitées le confondent avec la montagne. Il presse de la main la tête d'un monstre d'où l'eau s'écoule dans le bassin.
- **Expérience physique** : on le découvre dans le parc, on en fait le tour, et on peut **entrer** à l'intérieur : des pièces sur trois niveaux, avec des vues sur l'extérieur. Le corps du géant devient une **architecture**.
- **Espace symbolique** : l'œuvre joue sur la frontière entre **nature** et **artifice**, typique du **maniérisme** et de son goût pour l'émerveillement et la surprise.

### Ce qui rapproche et oppose les deux œuvres
- **Points communs** : le gigantisme ; une figure (une araignée, un géant) qui devient un **espace** à parcourir ; l'importance du **lieu** (un parc, une esplanade de musée) ; un sens symbolique fort (la mère, la montagne).
- **Écarts** : XVIe siècle et fin du XXe siècle ; commande d'un prince et œuvre autobiographique ; roche taillée sur place et bronze coulé en plusieurs exemplaires ; intérieur habitable et dessous traversable.
- **Espace physique** : celui que le corps parcourt (dessous, autour, dedans). **Espace symbolique** : celui du sens (la protection maternelle, la nature divinisée).

### À retenir pour le bac
- Connaître les deux cartels et les matériaux.
- Maman : hommage à la mère, tisserande et réparatrice, protectrice et menaçante.
- Le Colosse : personnification de l'Apennin, intérieur habitable, maniérisme.
- Toujours parler du corps du spectateur : échelle, déplacement, intérieur et extérieur.`,
      cartes: [
        { q: "Donne le cartel de Maman au programme.", r: "Louise Bourgeois, Maman, 1999, fonte de 2001, bronze, marbre et acier inoxydable, environ 9 m de haut, édition 2 sur 6, musée Guggenheim de Bilbao." },
        { q: "Donne le cartel du Colosse de l'Apennin.", r: "Giambologna, Le Colosse de l'Apennin, 1579-1583, environ 14 m, taillé dans la roche et couvert d'enduits, jeux d'eau, villa de Pratolino, près de Florence." },
        { q: "Quel métier exerçaient les parents de Louise Bourgeois ?", r: "Ils tenaient un atelier de restauration de tapisseries." },
        { q: "Où Maman a-t-elle été montrée pour la première fois ?", r: "En 2000, dans sa version en acier, sous la verrière de la Tate Modern à Londres." },
        { q: "Que porte l'araignée sous son corps ?", r: "Un sac qui contient des œufs de marbre." },
        { q: "Pourquoi l'araignée représente-t-elle la mère ?", r: "Comme la mère de l'artiste, qui réparait des tapisseries, l'araignée tisse et répare ; elle est patiente et protectrice." },
        { q: "Pourquoi la figure maternelle de Maman est-elle ambivalente ?", r: "L'araignée protège ses œufs mais elle fait aussi peur : la mère est à la fois refuge et menace." },
        { q: "Quelle expérience physique propose Maman ?", r: "On passe sous l'araignée, entre ses pattes ; on se sent petit, comme un enfant face à sa mère." },
        { q: "Où est né Giambologna et pour qui a-t-il travaillé ?", r: "À Douai, en Flandre, en 1529 ; il a travaillé à Florence pour les Médicis." },
        { q: "Qui commande le Colosse de l'Apennin ?", r: "Le grand-duc François Ier de Médicis, pour le parc de sa villa de Pratolino." },
        { q: "Que personnifie le Colosse ?", r: "La chaîne de montagnes de l'Apennin, sous la forme d'un vieillard géant accroupi au bord d'un bassin." },
        { q: "Que trouve-t-on à l'intérieur du Colosse ?", r: "Des chambres communicantes sur trois niveaux (base, ventre, tête), avec des vues sur l'extérieur." },
        { q: "Qu'est-ce que le maniérisme cherche dans les jardins ?", r: "L'émerveillement et la surprise, en brouillant la frontière entre nature et artifice : grottes, automates, jeux d'eau." },
        { q: "Espace physique ou espace symbolique ?", r: "L'espace physique est celui que le corps parcourt ; l'espace symbolique est celui du sens que l'œuvre porte." },
        { q: "Quels écarts entre Maman et le Colosse ?", r: "XVIe et XXe siècles, commande d'un prince et œuvre autobiographique, roche taillée sur place et bronze coulé en plusieurs exemplaires." },
        { q: "Quelle autre œuvre célèbre de Giambologna est à Florence ?", r: "L'Enlèvement des Sabines (1582), sous la Loggia dei Lanzi." },
      ],
      quiz: [
        { q: "Où se trouve la fonte de Maman citée au programme ?", choix: ["À Londres, à la Tate Modern", "À Paris, au Centre Pompidou", "À Bilbao", "À New York, au MoMA"], bonne: 2, expl: "Le cartel officiel cite l'édition 2 sur 6 de Bilbao. La Tate Modern a montré la première version en acier.", niv: 1 },
        { q: "Quel métier des parents de Louise Bourgeois éclaire le sens de Maman ?", choix: ["Restaurateurs de tapis", "Fondeurs de bronze", "Jardiniers paysagistes", "Marchands de tableaux"], bonne: 0, expl: "L'araignée tisse et répare, comme la mère de l'artiste.", niv: 1 },
        { q: "Que contient le sac sous le corps de l'araignée ?", choix: ["Des pierres de rivière", "Des cocons de soie", "Des fragments de tapisserie", "Des œufs de marbre"], bonne: 3, expl: "Des œufs de marbre : la mère protège sa descendance.", niv: 1 },
        { q: "Pourquoi dit-on que la mère, dans Maman, est une figure ambivalente ?", choix: ["L'œuvre existe en deux matériaux", "Elle est protectrice et menaçante", "L'araignée a deux têtes", "La mère de l'artiste était elle-même sculptrice de bronze"], bonne: 1, expl: "L'araignée protège ses œufs mais fait peur : refuge et menace.", niv: 3 },
        { q: "Qui commande le Colosse de l'Apennin ?", choix: ["Le pape Jules II", "Le roi François Ier de France", "Laurent le Magnifique", "François Ier de Médicis"], bonne: 3, expl: "François Ier de Médicis, pour le parc de Pratolino. Attention au roi de France du même prénom.", niv: 2 },
        { q: "Le Colosse donne la forme d'un vieillard géant à une chaîne de montagnes. C'est :", choix: ["une personnification", "un ready-made", "une anamorphose", "un portrait réaliste"], bonne: 0, expl: "L'Apennin devient un personnage.", niv: 2 },
        { q: "Les enduits qui imitent boue, algues et stalactites jouent surtout sur :", choix: ["la limite entre nature et artifice", "la reproduction en série", "l'opposition entre couleur et dessin", "la perspective centrale"], bonne: 0, expl: "Le géant semble né de la montagne : c'est le goût maniériste de l'illusion.", niv: 3 },
        { q: "Qu'est-ce qui rapproche le Colosse d'une architecture ?", choix: ["Il porte un toit de tuiles", "Il a été dessiné par un architecte romain", "Il contient des pièces sur trois niveaux", "Il sert de pont sur un fleuve"], bonne: 2, expl: "Base, ventre et tête abritent des chambres avec des vues sur l'extérieur.", niv: 2 },
        { q: "Face à Maman, le spectateur qui passe sous les pattes éprouve surtout :", choix: ["une vue d'ensemble de la ville", "le sentiment d'être petit", "le toucher du marbre des œufs", "l'odeur de la fonderie"], bonne: 1, expl: "L'échelle place le corps du spectateur sous la figure maternelle.", niv: 2 },
        { q: "Où est né Giambologna ?", choix: ["À Florence", "À Rome", "À Douai", "À Anvers"], bonne: 2, expl: "Né à Douai, en Flandre, il fait carrière à Florence.", niv: 1 },
        { q: "Quel écart sépare le Colosse et Maman ?", choix: ["Roche taillée contre bronze coulé", "Ce sont deux peintures murales", "Elles sont commandées par un prince", "Elles datent du XVIe siècle"], bonne: 0, expl: "Le Colosse est unique et fixé au lieu ; Maman est éditée en plusieurs fontes.", niv: 3 },
        { q: "Dans ce thème, l'espace symbolique de Maman renvoie surtout :", choix: ["au trajet du visiteur sous l'araignée", "à la mère, qui protège et fait peur", "aux dimensions exactes de la sculpture", "à la place de l'œuvre sur l'esplanade"], bonne: 1, expl: "L'espace physique est celui du corps ; l'espace symbolique est celui du sens.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 10
    {
      chapitre: 'arts-pla-10',
      fiche: `## L'oral : projet abouti, dossier et carnet de travail

La partie orale dure **30 minutes**, après **10 minutes de préparation**. Elle compte pour la **moitié** de la note de l'épreuve. Elle porte sur la **pratique** et la **culture plastiques**, à partir d'un **projet abouti à visée artistique** réalisé en terminale.

### Ce qu'on apporte
- Le **projet** : une ou plusieurs **réalisations plastiques**, **quatre au maximum**. Elles doivent pouvoir être transportées et installées par le candidat **seul**, sans aide ni dispositif d'accrochage particulier. Le jury ne les manipule pas.
- Le **dossier** : il documente le projet (esquisses, essais, photographies d'ensemble, traces des évolutions, échantillons, captations). Sa forme est libre, dans un format de type **raisin** (environ 50 x 65 cm) et de **5 cm** d'épaisseur au plus.
- Le **carnet de travail**, obligatoire : un objet **personnel** qui garde les traces de toute l'année (projets, essais ratés, rencontres, références). Sa forme est libre.
- Les œuvres très grandes, en mouvement, numériques ou liées à un lieu sont montrées en **photo** ou en **vidéo**, sur un matériel que le candidat apporte et dont il est responsable ; prévoir une **version imprimée** en cas de panne.
- Un **document de synthèse**, rédigé par le **professeur**, d'une page, décrit le travail de la classe et atteste l'authenticité du projet. Il est envoyé au jury **quinze jours avant**.

### Le déroulé
- **Préparation (10 minutes)** : on installe ses réalisations et son dossier dans la salle, **sans parler** au jury. On peut y faire passer une courte vidéo.
- **Première partie (10 minutes au plus)** : présentation du projet. On dit brièvement **pourquoi ce projet** parmi d'autres, puis ses **intentions**, sa **démarche**, ses **moyens** et ses **processus**. On peut évoquer des rencontres avec des œuvres, des artistes, des lieux.
- **Deuxième partie (le temps restant)** : un **entretien**. Le jury fait revenir sur les **partis pris**, les techniques, les influences, et demande un **retour critique**. Il s'appuie aussi sur le carnet de travail.
- **Notation** : 12 points pour la présentation, 8 points pour l'entretien. Les réalisations et le carnet ne sont **pas notés** en eux-mêmes : c'est ce qu'on en dit qui compte.
- Le jury réunit **deux professeurs** d'arts plastiques.

### Réussir sa présentation
- Commencer par une phrase claire sur l'**intention** : « J'ai voulu montrer… », « Je me suis demandé si… ».
- Expliquer **deux ou trois choix** plastiques précis (matériau, format, couleur, présentation) et leur **effet**.
- Montrer l'**évolution** : ce qui a été essayé, abandonné, transformé, grâce au dossier.
- Citer une ou deux **références** précises et situées, et dire ce qu'on leur doit.
- Parler de la **présentation** de l'œuvre : comment on l'a disposée et pourquoi.

### Réussir l'entretien
- Écouter la question, prendre un temps, répondre précisément.
- Accepter la critique : dire ce qu'on changerait, ce qui marche moins bien.
- Relier son travail à sa **culture artistique** : les œuvres de référence, les questionnements du programme.

### À retenir pour le bac
- Quatre réalisations au plus, transportables seul ; dossier format raisin, 5 cm.
- Préparation de 10 minutes sans commentaire ; 10 minutes de présentation ; entretien.
- 12 points pour la présentation, 8 pour l'entretien.
- Le carnet de travail est obligatoire, personnel et non noté.`,
      cartes: [
        { q: "Combien dure l'oral, et la préparation ?", r: "30 minutes d'oral, après 10 minutes de préparation pour installer son projet." },
        { q: "Combien de réalisations peut-on présenter au plus ?", r: "Quatre, transportables et installables par le candidat seul." },
        { q: "Que contient le dossier ?", r: "Ce qui documente le projet : esquisses, essais, photos d'ensemble, traces des évolutions, échantillons, captations." },
        { q: "Quel est le format maximal du dossier ?", r: "Un format de type raisin (environ 50 x 65 cm) et 5 cm d'épaisseur." },
        { q: "Le carnet de travail est-il obligatoire ?", r: "Oui, il doit être apporté le jour de l'épreuve. C'est un objet personnel, de forme libre." },
        { q: "Qu'est-ce que le document de synthèse ?", r: "Une page rédigée par le professeur sur le travail de la classe, qui atteste l'authenticité du projet, envoyée quinze jours avant." },
        { q: "Que fait-on pendant les 10 minutes de préparation ?", r: "On installe ses réalisations et son dossier sans commentaire ; on peut y diffuser une courte vidéo." },
        { q: "Que dit-on dans la présentation ?", r: "Pourquoi ce projet, puis ses intentions, sa démarche, ses moyens et ses processus, avec éventuellement des rencontres artistiques." },
        { q: "Sur quoi porte l'entretien ?", r: "Sur les partis pris, les techniques, les influences, un retour critique, en s'appuyant sur le projet et le carnet de travail." },
        { q: "Comment l'oral est-il noté ?", r: "12 points pour la présentation, 8 points pour l'entretien." },
        { q: "Les réalisations et le carnet sont-ils notés ?", r: "Non : ils servent d'appui ; c'est la prestation orale qui est évaluée." },
        { q: "Comment montrer une œuvre trop grande ou numérique ?", r: "Par des photos ou une vidéo sur un matériel que l'on apporte, avec une version imprimée en cas de panne." },
        { q: "Qui compose le jury de l'oral ?", r: "Deux professeurs d'arts plastiques." },
        { q: "Comment commencer sa présentation ?", r: "Par une phrase claire sur l'intention : « J'ai voulu montrer… » ou « Je me suis demandé si… »." },
      ],
      quiz: [
        { q: "Combien de réalisations plastiques peut-on présenter au plus à l'oral ?", choix: ["Deux", "Six", "Quatre", "Dix"], bonne: 2, expl: "Une sélection de quatre au maximum.", niv: 1 },
        { q: "Pendant les 10 minutes de préparation, le candidat :", choix: ["installe son projet sans commentaire", "présente déjà ses intentions au jury", "répond aux questions du jury", "rédige un texte sur son projet"], bonne: 0, expl: "La préparation sert à disposer réalisations et dossier, sans parler.", niv: 1 },
        { q: "Comment l'oral est-il noté ?", choix: ["10 points chacune des deux parties", "8 points la présentation, 12 l'entretien", "20 points sur les réalisations seules", "12 points la présentation, 8 l'entretien"], bonne: 3, expl: "Présentation sur 12, entretien sur 8.", niv: 1 },
        { q: "Une élève a fait une installation de 5 m de long. Pour l'oral :", choix: ["elle demande au jury de l'aider à la monter", "elle la montre en photos ou en vidéo", "elle renonce à la présenter", "elle en apporte un morceau, sans explication"], bonne: 1, expl: "Les très grands formats sont restitués par photo ou vidéo.", niv: 2 },
        { q: "Qui rédige le document de synthèse ?", choix: ["Le candidat", "Le chef d'établissement seul", "Le professeur de la classe", "Le jury"], bonne: 2, expl: "Le professeur le rédige ; il est visé par le chef d'établissement.", niv: 2 },
        { q: "Le carnet de travail est :", choix: ["facultatif et noté sur 4 points", "rédigé par le professeur", "remis au jury un mois avant", "obligatoire et jamais noté en lui-même"], bonne: 3, expl: "Il est apporté le jour de l'épreuve et sert d'appui à l'entretien.", niv: 2 },
        { q: "Quelle phrase d'ouverture de présentation est la meilleure ?", choix: ["« J'ai voulu montrer la lumière sur un objet banal. »", "« Voici mon travail, j'espère qu'il vous plaira. »", "« J'ai fait ce projet car il fallait en faire un. »", "« Je vais tout vous raconter depuis septembre. »"], bonne: 0, expl: "Une intention claire dès le début guide toute la présentation.", niv: 3 },
        { q: "Pendant l'entretien, le jury pointe une faiblesse. La meilleure réaction est :", choix: ["défendre que tout est réussi", "dire ce qu'on changerait", "changer de sujet rapidement", "répondre qu'on n'a pas eu le temps"], bonne: 1, expl: "Le retour critique est attendu et valorisé.", niv: 3 },
        { q: "Pourquoi prévoir une version imprimée d'une vidéo ?", choix: ["Pour remplacer le carnet de travail", "Parce que le jury refuse les écrans", "En cas de panne du matériel", "Pour obtenir des points en plus"], bonne: 2, expl: "Le candidat est responsable de son matériel et doit anticiper une panne.", niv: 2 },
        { q: "Quel est le format maximal du dossier ?", choix: ["Un format raisin, 5 cm", "Un classeur A4 de 2 cm", "Une boîte de 1 m de côté", "Une clé USB et un ordinateur portable fourni par le lycée"], bonne: 0, expl: "Le dossier doit tenir dans un format de type raisin, 5 cm d'épaisseur.", niv: 1 },
        { q: "Qu'est-ce qui est réellement évalué à l'oral ?", choix: ["La beauté des réalisations", "Le nombre de pages du carnet", "Le prix des matériaux utilisés", "La réflexion sur la démarche"], bonne: 3, expl: "Les réalisations et le carnet ne sont pas évalués en tant que tels.", niv: 3 },
      ],
    },
  ],
  methode: [
    {
      id: 'arts-pla-m1', mat: 'arts-pla', titre: "Analyser un corpus et conduire une réflexion (première partie de l'écrit)",
      formules: ["À partir de l'analyse méthodique des œuvres du corpus, vous conduirez une réflexion sur…", "En vous appuyant sur le corpus et sur des références de votre choix, interrogez…"],
      vu: ["Première partie de tous les sujets nationaux depuis la session 2022 (note de service consolidée de mai 2024)", "Corpus de trois à cinq œuvres, dont une partie tirée des questions limitatives"],
      pts: "12 points sur 20, environ 2 heures",
      attendu: "Une analyse méthodique des œuvres (plastique, technique, procédurale, iconique, sémantique, symbolique) mise au service d'une réflexion organisée qui répond à la consigne, compare les œuvres entre elles et s'enrichit de références personnelles précises et situées.",
      etapes: ["Lire la consigne et en souligner les mots clés.", "Relever les cartels : technique, dimensions, date, lieu.", "Faire un tableau rapide : pour chaque œuvre, ce qui répond à la consigne.", "Trouver une problématique et un plan en deux ou trois parties.", "Dans chaque partie, comparer au moins deux œuvres du corpus et ajouter une référence personnelle.", "Ajouter un croquis si cela éclaire une composition ou un point de vue."],
      mots: ["composition", "échelle", "matérialité", "dispositif", "point de vue"],
      pieges: ["Décrire les œuvres une par une sans les relier.", "Oublier la consigne en route.", "Citer des références vagues (« comme chez Picasso »).", "Ne jamais parler des dimensions et de la matière."],
      cas: "Corpus : Vernet, Le port de Toulon, vue du Mont Faron (1756) ; Gursky, 99 Cent (1999). Consigne : en quoi l'artiste qui documente le réel le transforme-t-il ?",
      question: "Rédige l'introduction et la première partie.",
      modele: "Introduction : à près de deux siècles et demi d'écart, Vernet peint le port de Toulon pour Louis XV et Gursky photographie un supermarché de Los Angeles. Les deux œuvres semblent documenter un lieu de l'économie, mais sont-elles de simples enregistrements du réel ? Nous verrons qu'elles prennent bien la forme du document, puis qu'elles le transforment par la composition et la technique. Première partie : les deux images ont l'apparence du document. Vernet répond à une commande qui demande de montrer avec exactitude les activités de chaque port : depuis le Mont Faron, il déploie la ville, l'arsenal et la rade comme une carte, sur une toile de 2,63 m de large. Gursky adopte une vue frontale et en hauteur, héritée de Bernd et Hilla Becher, et une netteté qui donne l'impression de tout voir : chaque produit est lisible sur un tirage de plus de 3 m. Comme Daguerre en 1838 avec le Boulevard du Temple, ils semblent laisser le lieu parler de lui-même.",
      grille: ["J'ai posé une problématique liée à la consigne.", "J'ai comparé les œuvres au lieu de les décrire une à une.", "J'ai utilisé les cartels (technique, dimensions).", "J'ai cité une référence personnelle précise et datée."],
    },
    {
      id: 'arts-pla-m2', mat: 'arts-pla', titre: "Rédiger un commentaire critique d'un document sur l'art (sujet A)",
      formules: ["Vous rédigerez un commentaire critique de ce document, en lien avec le questionnement « mondialisation de la création artistique ».", "Commentez de façon critique ce texte en vous appuyant sur des œuvres précises."],
      vu: ["Sujet A de la deuxième partie depuis la session 2022 (note de service consolidée de mai 2024)", "Pour la session 2027 : questionnement transversal « mondialisation de la création artistique : métissages ou relativité des cultures du monde »"],
      pts: "8 points, une à deux pages",
      attendu: "Un texte personnel, argumenté et étayé, qui présente le document, explique sa thèse avec ses propres mots, puis la discute (accord, nuance, objection) à l'aide d'œuvres précises, et montre un vrai recul critique.",
      etapes: ["Présenter le document : nature, auteur, date, idée principale.", "Expliquer deux ou trois arguments du document.", "Discuter : un point d'accord illustré par une œuvre, puis une limite illustrée par une autre.", "Relier au questionnement du programme.", "Conclure par un avis personnel argumenté."],
      mots: ["métissage", "relativité des cultures", "appropriation", "circulation", "hybridation"],
      pieges: ["Résumer le document sans le discuter.", "Donner un avis sans exemple d'œuvre.", "Oublier le questionnement imposé.", "Écrire plus de deux pages au détriment de la première partie."],
      cas: "Document fictif : « Dans un monde où les mêmes images circulent partout, l'art devient une langue unique : un artiste de Lagos et un artiste de Berlin finissent par faire la même chose. »",
      question: "Rédige un commentaire critique de cette affirmation.",
      modele: "Ce court texte fictif affirme que la mondialisation uniformise l'art : la circulation des images effacerait les différences entre cultures. L'idée est en partie juste : biennales, foires et marché mondial imposent des formats proches, et une photographie comme 99 Cent de Gursky montre des produits identiques d'un pays à l'autre. Pourtant, l'affirmation oublie que la circulation produit aussi des métissages. El Anatsui, artiste ghanéen, assemble des capsules de bouteilles venues de la consommation mondiale, mais en tentures qui évoquent les traditions textiles d'Afrique de l'Ouest. Yinka Shonibare utilise le tissu wax pour montrer qu'une culture qu'on croit pure est déjà mélangée. La mondialisation ne crée donc pas une langue unique, mais des langues hybrides. Je pense qu'elle menace surtout la diversité quand le marché décide seul de ce qui a de la valeur.",
      grille: ["J'ai présenté le document et sa thèse.", "J'ai discuté avec au moins deux œuvres précises.", "J'ai relié au questionnement sur la mondialisation.", "J'ai donné un avis personnel argumenté."],
    },
    {
      id: 'arts-pla-m3', mat: 'arts-pla', titre: "Rédiger une note d'intention pour exposer une œuvre (sujet B)",
      formules: ["Choisissez une œuvre du corpus et présentez vos intentions pour son exposition dans tel lieu.", "Imaginez l'exposition d'une œuvre du corpus pour tel public et justifiez vos choix."],
      vu: ["Sujet B de la deuxième partie depuis la session 2022 (note de service consolidée de mai 2024)", "Pour la session 2027 : questionnement « la monstration et la diffusion de l'œuvre, les lieux, les espaces, les contextes »"],
      pts: "8 points, une à deux pages avec schémas et croquis obligatoires",
      attendu: "Une note qui choisit une œuvre du corpus, dit le propos de l'exposition, décrit précisément les modalités (lieu, parcours, accrochage, éclairage, distance, voisinages, médiation, public) et justifie chaque choix par un effet, avec des schémas et croquis lisibles.",
      etapes: ["Choisir l'œuvre et dire pourquoi elle convient à la consigne.", "Formuler le propos : ce que le public doit comprendre ou ressentir.", "Décrire le lieu et le parcours du visiteur.", "Préciser accrochage, éclairage, distance, voisinages et médiation.", "Dessiner un plan vu de dessus et une vue du dispositif.", "Justifier chaque choix par son effet."],
      mots: ["scénographie", "parcours", "point de vue", "médiation", "contexte"],
      pieges: ["Oublier les croquis, obligatoires.", "Décrire l'œuvre au lieu de l'exposition.", "Faire des choix sans les justifier.", "Choisir une œuvre hors du corpus."],
      cas: "Consigne : exposez 99 Cent de Gursky dans un lieu qui n'est pas un musée.",
      question: "Rédige la note d'intention (sans les croquis) et décris les deux croquis prévus.",
      modele: "Je choisis d'exposer 99 Cent dans la galerie marchande d'un grand centre commercial, face à l'entrée d'un supermarché. Mon propos est de faire voir aux clients ce qu'ils ne regardent plus : l'abondance des marchandises et la petitesse des humains qui les achètent. Le tirage, de plus de 3 m de large, est suspendu à hauteur des yeux contre une cloison noire, pour qu'il tranche avec les vitrines colorées autour. Un éclairage doux et constant évite les reflets sur le Diasec brillant. Devant l'œuvre, une bande au sol marque la distance de 4 m où l'on voit l'ensemble, puis un second repère, à 50 cm, invite à s'approcher pour découvrir les produits un par un et les clients minuscules. Un cartel simple, sans prix, et une courte phrase de médiation demandent : « Où êtes-vous dans cette image ? ». Croquis 1 : plan vu de dessus de la galerie, avec la cloison, l'entrée du supermarché et les deux repères au sol. Croquis 2 : vue de face du dispositif, un visiteur dessiné à l'échelle à côté du tirage.",
      grille: ["J'ai choisi une œuvre du corpus et un propos clair.", "J'ai décrit lieu, accrochage, éclairage et parcours.", "Chaque choix est justifié par un effet.", "J'ai prévu des croquis lisibles."],
    },
    {
      id: 'arts-pla-m4', mat: 'arts-pla', titre: "Présenter son projet abouti à l'oral",
      formules: ["Présentez votre projet.", "Pourquoi avoir choisi ce projet parmi d'autres ?", "Quelles sont vos intentions et votre démarche ?"],
      vu: ["Première partie de l'oral (10 minutes au plus), note de service consolidée de mai 2024"],
      pts: "12 points sur 20 pour la présentation",
      attendu: "Un exposé de 10 minutes au plus, sans lire, qui dit pourquoi ce projet, puis ses intentions, sa démarche, ses moyens et ses processus, en s'appuyant sur les réalisations installées, le dossier et, si besoin, le carnet de travail, avec des références situées.",
      etapes: ["Dire en une phrase pourquoi ce projet parmi d'autres.", "Énoncer l'intention de départ.", "Expliquer deux ou trois choix plastiques et leurs effets.", "Montrer l'évolution grâce au dossier (essais, abandons).", "Citer une ou deux références précises.", "Dire pourquoi l'œuvre est disposée ainsi dans la salle."],
      mots: ["intention", "démarche", "parti pris", "processus", "dispositif de présentation"],
      pieges: ["Raconter les séances une à une.", "Lire son carnet.", "Ne parler que de technique, sans intention.", "Dépasser les 10 minutes."],
      cas: "Projet : une série de trois moulages en plâtre de mains de membres de sa famille, posés sur des tissus usés, inspirée par la question de la mémoire et du soin.",
      question: "Rédige le début de ta présentation.",
      modele: "« J'ai choisi ce projet parce que c'est celui où j'ai le plus pris de risques. Je me suis demandé comment garder la trace de gestes qui disparaissent : ceux de ma grand-mère qui coud, de mon père qui répare, de ma sœur qui dessine. J'ai fait des moulages en plâtre de leurs mains, en train de faire ces gestes. Le plâtre garde tout : les rides, les ongles, une cicatrice. J'ai posé chaque main sur un tissu usé qui vient de la maison, pour relier le geste à un objet de soin. Au début, je voulais des mains en bronze, comme une sculpture noble ; le dossier montre ces essais. J'ai préféré le plâtre, blanc et fragile, plus proche de la mémoire. Je pense à Louise Bourgeois, qui relie Maman au travail de réparation de sa mère. J'ai disposé les trois mains à hauteur de table pour qu'on se penche vers elles, comme on se penche vers quelqu'un. »",
      grille: ["J'ai dit pourquoi ce projet.", "J'ai énoncé une intention claire.", "J'ai justifié au moins deux choix plastiques.", "J'ai montré l'évolution et cité une référence."],
    },
    {
      id: 'arts-pla-m5', mat: 'arts-pla', titre: "Réussir l'entretien avec le jury",
      formules: ["Pourquoi ce matériau plutôt qu'un autre ?", "Quelles influences ont nourri votre travail ?", "Que changeriez-vous aujourd'hui ?"],
      vu: ["Deuxième partie de l'oral, note de service consolidée de mai 2024 : retour critique sur le projet et la présentation, partis pris, techniques, influences, carnet de travail"],
      pts: "8 points sur 20",
      attendu: "Des réponses précises et réfléchies, qui reviennent sur les partis pris, les moyens plastiques et les influences, montrent un retour critique honnête et relient le projet à une culture artistique, en s'appuyant sur le carnet de travail.",
      etapes: ["Écouter la question jusqu'au bout et la reformuler si besoin.", "Répondre avec un exemple précis tiré du projet ou du carnet.", "Expliquer le choix fait et une autre solution possible.", "Relier à une œuvre de référence ou à un questionnement.", "Accepter la critique et dire ce qu'on changerait."],
      mots: ["parti pris", "retour critique", "référence", "matérialité", "intention"],
      pieges: ["Se justifier au lieu de réfléchir.", "Répondre par oui ou par non.", "Citer une référence qu'on ne connaît pas.", "Dire que tout est réussi."],
      cas: "Le jury demande : « Pourquoi avoir posé vos moulages à plat plutôt que de les accrocher au mur ? »",
      question: "Rédige ta réponse.",
      modele: "« Accrochées au mur, les mains seraient devenues des trophées, presque des reliques à admirer de loin. À plat, sur les tissus, elles restent dans le monde du geste quotidien, à hauteur de table, comme là où elles travaillent. Le visiteur doit se pencher : c'est un mouvement de soin, que je voulais faire vivre au corps. Mon carnet montre un essai au mur, page 12 : les ombres étaient belles, mais l'ensemble paraissait froid. Avec du recul, je regrette de ne pas avoir mieux éclairé la troisième main, qui disparaît un peu. Si je recommençais, j'ajouterais une lumière rasante pour faire ressortir les rides, comme Soulages fait vibrer la surface du noir. »",
      grille: ["J'ai justifié mon choix par un effet.", "J'ai cité mon carnet de travail.", "J'ai montré un retour critique honnête.", "J'ai relié ma réponse à une référence."],
    },
  ],
  sujets: [
    {
      id: 'arts-pla-s1', matiere: 'arts-pla', titre: "Sujet d'entraînement 1 : documenter le réel", duree: 210,
      enonce: `## Sujet d'entraînement 1 (inventé)

Durée : 3 heures 30. Sujet construit sur le modèle de la partie écrite de l'épreuve. Les œuvres du corpus sont réelles ; le document du sujet A est fictif. Sauf indication contraire, la rédaction peut être complétée par des croquis, schémas ou décalques.

### Corpus
- Document 1 : Joseph Vernet, La ville et la rade de Toulon, deuxième vue, le port de Toulon, vue du Mont Faron, 1756, huile sur toile, 165 x 263 cm, Paris, musée du Louvre.
- Document 2 : Andreas Gursky, 99 Cent, 1999, épreuve chromogène sous Diasec, environ 206 x 337 cm, Paris, musée national d'art moderne.
- Document 3 : Louis Daguerre, Boulevard du Temple, 1838, daguerréotype, petit format, une vue de boulevard parisien prise depuis une fenêtre, où seul apparaît un homme immobile qui se fait cirer les chaussures.
- Document 4 : Andy Warhol, Campbell's Soup Cans, 1962, 32 toiles peintes, chacune d'environ 51 x 41 cm, New York, Museum of Modern Art.

### Première partie (12 points)
À partir de l'analyse méthodique des œuvres du corpus, et en vous appuyant sur d'autres références de votre choix, vous conduirez une réflexion sur la question suivante : documenter le réel, est-ce seulement l'enregistrer ?

### Deuxième partie (8 points) : traitez au choix le sujet A ou le sujet B

**Sujet A : commentaire critique d'un document sur l'art.** Document fictif, extrait d'un article : « Des rayons de supermarché de Gursky aux boîtes de soupe de Warhol, l'art contemporain n'a fait que recopier les produits que le monde entier consomme. Il ne montre plus des cultures, il montre un seul marché. » En une à deux pages, vous rédigerez un commentaire critique de ce document, en lien avec le questionnement « mondialisation de la création artistique : métissages ou relativité des cultures du monde ».

**Sujet B : note d'intention pour un projet d'exposition.** Choisissez une œuvre du corpus. Vous devez l'exposer dans un lieu qui n'est pas un musée, pour un public qui ne fréquente pas les expositions. En une à deux pages, présentez vos intentions et justifiez les modalités envisagées (lieu, situation, public). Votre rédaction sera obligatoirement accompagnée de quelques schémas et croquis.`,
      corrige: `## Corrigé

### Première partie : pistes de réflexion
- **Problématique possible** : les artistes du corpus semblent garder une trace fidèle du réel ; mais en le documentant, ne le choisissent-ils pas, ne le composent-ils pas, voire ne l'augmentent-ils pas ?
- **I. Des images qui ont la forme du document**
  - Vernet répond à une commande royale de 1753 qui demande de montrer les ports du royaume avec exactitude : la vue depuis le Mont Faron déploie ville, arsenal et rade comme une carte.
  - Daguerre enregistre mécaniquement une rue en 1838 : l'image semble produite par la lumière seule.
  - Gursky adopte une vue frontale héritée de Bernd et Hilla Becher et une netteté totale ; Warhol reproduit fidèlement l'étiquette d'un produit.
- **II. Documenter, c'est choisir et composer**
  - Vernet arrange personnages, lumière et plans : son image est vraisemblable plus qu'exacte.
  - Le daguerréotype lui-même transforme le réel : le long temps de pose efface les passants en mouvement et ne garde qu'un homme immobile. L'outil impose sa vision.
  - Warhol choisit la répétition de 32 toiles presque identiques et un format de tableau : la sérialité dit quelque chose de la production industrielle.
- **III. Augmenter le réel pour le rendre visible**
  - Gursky retouche numériquement 99 Cent : l'image devient plus dense et plus nette que la vision ; l'all-over et le très grand format font ressentir l'excès de la consommation.
  - Le changement d'échelle (une boîte de soupe à hauteur de tableau, un magasin de plus de 3 m) pousse à regarder ce qu'on ne voit plus.
  - Référence personnelle possible : les sculptures hyperréalistes de Duane Hanson, plus vraies que nature.
- **Conclusion** : documenter n'est jamais seulement enregistrer ; c'est un regard qui choisit, compose, et parfois augmente le réel pour le faire comprendre.

### Deuxième partie, sujet A : attendus
- Présenter la thèse : l'art contemporain ne montrerait plus des cultures mais un marché unique.
- **Accord partiel** : Warhol et Gursky montrent bien des produits de consommation de masse ; le marché de l'art est mondial (une version de 99 Cent dépasse 3 millions de dollars en 2007).
- **Objection** : ces œuvres ne recopient pas, elles **critiquent** ou **interrogent** par la répétition et l'échelle ; et la mondialisation produit aussi des **métissages** (El Anatsui, Yinka Shonibare).
- **Relativité des cultures** : le document prend l'art occidental comme seule mesure ; l'exposition Les Magiciens de la terre (1989) a justement posé cette question.
- Un avis personnel argumenté en conclusion.

### Deuxième partie, sujet B : attendus
- Une œuvre du corpus choisie et justifiée (par exemple Campbell's Soup Cans dans un supermarché, ou le port de Vernet dans une gare maritime).
- Un **propos** clair pour ce public : faire regarder autrement un lieu familier.
- Des **modalités précises** : emplacement, accrochage, hauteur, éclairage, distance, voisinages, médiation adaptée à un public non spécialiste.
- Chaque choix **justifié** par un effet ; des **croquis** obligatoires et lisibles (plan vu de dessus, vue du dispositif avec un personnage pour l'échelle).`,
      grille: [
        { c: "Première partie : analyse méthodique des œuvres (cartels, plastique, technique, sens)", pts: 4 },
        { c: "Première partie : réflexion organisée qui répond à la question et compare les œuvres", pts: 5 },
        { c: "Première partie : références personnelles précises et situées", pts: 3 },
        { c: "Deuxième partie : compréhension du document (A) ou propos d'exposition clair (B)", pts: 3 },
        { c: "Deuxième partie : discussion argumentée avec des œuvres (A) ou modalités justifiées (B)", pts: 3 },
        { c: "Deuxième partie : avis personnel (A) ou schémas et croquis lisibles (B)", pts: 2 },
      ],
    },
  ],
};
