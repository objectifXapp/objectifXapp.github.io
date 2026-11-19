// Danse (enseignement de spécialité arts, danse), terminale générale. Sources : voir matiere.sources.
// Programme : BO spécial n° 8 du 25 juillet 2019 (terminale), thème d'étude « La danse, une interrogation portée sur le monde ».
// Programme limitatif de terminale pour le bac 2027 : note de service du 10 juin 2022 (BO n° 27 du 7 juillet 2022), en vigueur
// jusqu'à la rentrée 2027. Son texte n'a pas pu être lu (page bloquée) ; les références traitées ici sont celles de la note du
// 27 avril 2020, reprises dans les ressources Eduscol de 2022 : réinterprétations du Lac des cygnes, post-modern dance,
// démarche de Maguy Marin. À confirmer avec le professeur. Le nouveau programme (Rosas danst Rosas, Angelin Preljocaj,
// « De la rue à la scène », BO n° 4 du 22 janvier 2026) ne s'applique en terminale qu'à la rentrée 2027, donc au bac 2028.
// Épreuve : note de service du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026), en vigueur à la session 2027.
export default {
  matiere: {
    id: 'danse',
    nom: 'Danse',
    voie: 'generale',
    epreuve: {"type":"ecrit+pratique","duree":210,"coef":16,"quand":"juin (écrit) ; oral et présentation dansée selon le calendrier de l'académie","note":"Écrit de 3 h 30 noté sur 20 : deux sujets au choix, tous deux sur le thème de terminale et les œuvres étudiées. Sujet 1 : composition sur un sujet général de culture chorégraphique. Sujet 2 : analyse d'un ensemble de documents (texte, image ou vidéo) pour construire une réponse argumentée au sujet. La grille officielle compte trois champs d'égale importance pour le sujet général (compréhension du sujet ; connaissances, références, expériences et lexique ; organisation, argumentation et langue) et quatre pour l'analyse de documents (s'y ajoute l'appui sur les documents). Oral de 30 minutes après 30 minutes de préparation et d'échauffement : présentation chorégraphique de 8 à 10 minutes au plus (composition de 3 à 5 minutes, de 1 à 4 danseurs, préparée dans l'année ; le candidat est chorégraphe et interprète), notée sur 12, puis entretien sur la démarche, noté sur 8. Chaque partie compte pour la moitié de la note. Programme limitatif du bac 2027 : note de service du 10 juin 2022, à faire confirmer par le professeur."},
    sources: [
      "https://www.education.gouv.fr/bo/2026/Special4/MENE2622657N",
      "https://www.education.gouv.fr/bo/22/Hebdo27/MENE2216110N.htm",
      "https://www.education.gouv.fr/bo/20/Hebdo21/MENE2009187N.htm",
      "https://www.education.gouv.fr/bo/2026/Hebdo4/MENE2536492N",
      "https://www.pedagogie.ac-nice.fr/eps/wp-content/uploads/sites/20/2023/03/Enseignement-de-specialite-DANSE-Terminale.pdf",
      "https://eduscol.education.gouv.fr/sites/default/files/document/ra22lyceegtdansemaguymarinpdf-94050.pdf",
      "https://eduscol.education.gouv.fr/sites/default/files/document/ra22lyceegtdanselacdescygnespdf-94386.pdf",
      "https://compagnie-maguy-marin.fr/transmission/lycees-enseignement-de-specialite-danse",
      "https://www.education.gouv.fr/sites/default/files/document/baccalaureat-general-2026-arts-danse-517577.pdf",
      "https://eduscol.education.fr/document/66361/download",
      "https://eduscol.education.fr/document/68504/download",
      "https://eduscol.education.fr/document/55686/download",
    ],
    chapitres: [
      { id: "danse-1", t: "L'épreuve de danse au bac 2027", theme: "Méthode de l'épreuve" },
      { id: "danse-2", t: "Analyser une œuvre chorégraphique", theme: "Outils d'analyse" },
      { id: "danse-3", t: "Composer : les outils de l'écriture chorégraphique", theme: "Outils d'analyse" },
      { id: "danse-4", t: "La danse, une interrogation portée sur le monde", theme: "Thème d'étude" },
      { id: "danse-5", t: "Le Lac des cygnes de 1895, le modèle", theme: "Programme limitatif" },
      { id: "danse-6", t: "Les réinterprétations du Lac des cygnes", theme: "Programme limitatif" },
      { id: "danse-7", t: "La post-modern dance : rupture et contestation", theme: "Programme limitatif" },
      { id: "danse-8", t: "La post-modern dance : artistes et œuvres", theme: "Programme limitatif" },
      { id: "danse-9", t: "Maguy Marin : un parcours engagé", theme: "Programme limitatif" },
      { id: "danse-10", t: "Maguy Marin : quatre œuvres à connaître", theme: "Programme limitatif" },
      { id: "danse-11", t: "Identités et dialogues interculturels : de la rue à la scène", theme: "Axes du thème" },
      { id: "danse-12", t: "Danse, technologies, consommation et écologie", theme: "Axes du thème" },
    ],
  },
  paquets: [
    { chapitre: 'danse-1',
      fiche: `## L'épreuve de danse au bac 2027

L'épreuve de spécialité danse a deux parties, qui comptent chacune pour la moitié de la note : un écrit de 3 h 30 et un oral pratique de 30 minutes. Le coefficient total est 16. Les deux parties mêlent la pratique et la théorie : on attend de toi un regard de danseur, de chorégraphe, de spectateur, de critique et de chercheur.

### La partie écrite (3 h 30, sur 20)
- **Deux sujets au choix**, tous deux sur le thème de terminale « La danse, une interrogation portée sur le monde ». Il faut s'appuyer sur les **œuvres étudiées**, en particulier celles du programme limitatif.
- **Sujet 1 : sujet d'ordre général.** Une question ou une citation de culture chorégraphique, à traiter comme une dissertation : définir, questionner, argumenter avec des exemples.
- **Sujet 2 : analyse de documents.** Un ensemble de documents (texte, photographie, extrait vidéo décrit). Il faut construire une **analyse personnelle et argumentée** qui répond au sujet en **confrontant** les documents.
- On attend une approche **sensible** (ce que l'œuvre fait ressentir) et **scientifique** (vocabulaire précis, contexte, références), élargie à **d'autres arts** quand c'est pertinent.

### La grille de l'écrit
- **Sujet général : trois champs d'égale importance.** 1) Analyse et compréhension du sujet : mots clés définis et contextualisés, questionnement, fil conducteur. 2) Connaissances, références, expériences et lexique : références précises, expériences vécues en cours, vocabulaire chorégraphique juste. 3) Organisation de la réflexion et langue : devoir structuré, point de vue argumenté, orthographe et syntaxe.
- **Analyse de documents : quatre champs.** Les trois précédents, plus l'**appui sur les documents** : tous les documents exploités, confrontés entre eux et reliés au sujet.
- Chaque champ va de « très insuffisant » (1 à 6) à « très satisfaisant » (16 à 20). Une copie illisible ne peut pas dépasser 10.
- Les « expériences » comptent : ce que tu as vécu comme danseur, chorégraphe ou spectateur est une vraie preuve, à condition d'être relié au sujet.

### La partie orale (30 minutes, sur 20)
- **30 minutes de préparation et d'échauffement**, puis 30 minutes devant le jury (un professeur et un artiste partenaire).
- **Premier temps (12 points), 8 à 10 minutes au plus : présentation chorégraphique.** Une composition de **3 à 5 minutes**, de **1 à 4 danseurs**, préparée pendant l'année. Le candidat est chorégraphe et interprète de la même pièce, ou chorégraphe de l'une et interprète d'une autre. Il est noté dans chaque rôle. Les trios et quatuors passent deux fois.
- **Second temps (8 points) : entretien.** Le jury l'interroge sur sa démarche de chorégraphe, son expérience d'interprète, sa culture chorégraphique et son parcours de spectateur. L'entretien est toujours individuel.
- Le candidat peut s'appuyer sur ses **carnets** (carnet de bord, carnet de création), qui ne sont pas notés.
- Un candidat blessé peut demander un report en septembre, danser partiellement, ou être noté seulement comme chorégraphe (6 sur 12 au plus pour le premier temps).

### L'oral de contrôle
- 30 minutes de préparation, 30 minutes d'épreuve : un exposé de 10 minutes sur un thème choisi par le jury dans le sommaire du **carnet de bord**, puis un entretien qui aborde le programme limitatif.

### Le programme limitatif du bac 2027
- En terminale 2026-2027, c'est encore la note de service du **10 juin 2022** qui s'applique. Ce fichier traite les références connues de ce programme : les **réinterprétations du Lac des cygnes**, la **post-modern dance** et la **démarche de Maguy Marin**. Celles que la classe étudie sont à faire confirmer par le professeur.
- Le nouveau programme (Rosas danst Rosas, Angelin Preljocaj, « De la rue à la scène ») concerne les terminales à partir de la rentrée 2027, donc le bac 2028.

### À retenir pour le bac
- Écrit 3 h 30 : sujet général ou analyse de documents, au choix.
- Grille : comprendre le sujet, références précises, devoir organisé et bien écrit.
- Oral : composition de 3 à 5 minutes sur 12, entretien sur 8.
- Toujours citer des œuvres précises : chorégraphe, titre, date, ce qu'on y voit.
- Piège : réciter son cours sans répondre au sujet (« plaquage »).`,
      cartes: [
        { q: "Durée de l'écrit de danse ?", r: "3 h 30." },
        { q: "Combien de sujets à l'écrit ?", r: "Deux sujets au choix : un sujet d'ordre général et une analyse de documents." },
        { q: "Thème d'étude de terminale ?", r: "« La danse, une interrogation portée sur le monde »." },
        { q: "Que demande l'analyse de documents ?", r: "Une analyse personnelle et argumentée qui répond au sujet en exploitant et en confrontant tous les documents." },
        { q: "Les trois champs de la grille du sujet général ?", r: "Compréhension du sujet ; connaissances, références, expériences et lexique ; organisation, argumentation et langue." },
        { q: "Champ en plus pour l'analyse de documents ?", r: "L'appui sur les documents : tous exploités, confrontés entre eux et reliés au sujet." },
        { q: "Qu'appelle-t-on « plaquage » de connaissances ?", r: "Réciter son cours sans le relier au sujet. La grille le classe « très insuffisant »." },
        { q: "Durée de la composition de l'oral ?", r: "De 3 à 5 minutes, de 1 à 4 danseurs." },
        { q: "Barème de l'oral ?", r: "Présentation chorégraphique sur 12 points, entretien sur 8 points." },
        { q: "Sur quoi porte l'entretien ?", r: "La démarche de chorégraphe, l'expérience d'interprète, la culture chorégraphique et le parcours de spectateur." },
        { q: "Carnet de bord et carnet de création ?", r: "Bord : trace de tout le parcours. Création : la démarche de la composition du bac. Ni l'un ni l'autre n'est noté." },
        { q: "Qui compose le jury de l'oral ?", r: "Un professeur et un artiste partenaire qui est intervenu dans l'enseignement." },
        { q: "Poids de l'écrit et de l'oral ?", r: "Chacun compte pour la moitié de la note ; coefficient total 16." },
      ],
      quiz: [
        { q: "Combien de temps dure la partie écrite de l'épreuve de danse ?", choix: ["2 h 30", "3 h 30", "2 h", "1 h 30"], bonne: 1, expl: "Durée commune à tous les enseignements artistiques.", niv: 1 },
        { q: "À l'écrit, le candidat :", choix: ["répond à des questions courtes", "traite les deux sujets proposés, l'un après l'autre, dans l'ordre", "choisit entre un sujet général et une analyse de documents", "commente un extrait sonore"], bonne: 2, expl: "Deux sujets au choix, tous deux sur le thème de terminale.", niv: 2 },
        { q: "Dans l'analyse de documents, il faut :", choix: ["résumer le texte et laisser l'image", "décrire chaque document l'un après l'autre, sans les relier", "choisir le document préféré", "exploiter chacun des documents et les confronter"], bonne: 3, expl: "Une prise en compte partielle des documents est jugée insuffisante.", niv: 2 },
        { q: "La composition présentée à l'oral dure :", choix: ["de 3 à 5 minutes", "de 1 à 2 minutes", "de 10 à 15 minutes", "30 minutes"], bonne: 0, expl: "Avec 1 à 4 danseurs.", niv: 1 },
        { q: "Comment l'oral est-il noté ?", choix: ["présentation sur 15, entretien sur 5", "présentation sur 10, entretien sur 10", "présentation sur 12, entretien sur 8", "présentation sur 8, entretien sur 12"], bonne: 2, expl: "Total sur 20.", niv: 2 },
        { q: "Un candidat écrit trois pages sur Maguy Marin sans lien avec le sujet. La grille parle de :", choix: ["plaquage de connaissances, niveau très insuffisant", "connaissances riches et nombreuses, niveau très satisfaisant", "simple maladresse de style, sans effet", "bonne contextualisation des mots clés"], bonne: 0, expl: "Le sujet devient un prétexte : c'est le premier défaut de la grille.", niv: 3 },
        { q: "Le thème d'étude de terminale s'intitule :", choix: ["Le corps en danse", "La danse, une interrogation portée sur le monde", "La danse entre continuités et ruptures", "De la rue à la scène"], bonne: 1, expl: "« Le corps en danse » et « continuités et ruptures » viennent de première.", niv: 1 },
        { q: "Que deviennent les carnets lors de l'entretien ?", choix: ["un support interdit pendant l'oral", "une pièce notée sur 4 points", "un document à rendre avant l'écrit", "un appui possible, non noté"], bonne: 3, expl: "Ils aident à expliquer sa démarche.", niv: 2 },
        { q: "Quelle copie a la meilleure note pour le champ « connaissances » ?", choix: ["Des avis personnels sans référence", "Beaucoup de dates et de noms de chorégraphes, mais pas d'exemple", "Un seul exemple très détaillé", "Des références variées, précises, reliées à ses expériences"], bonne: 3, expl: "Très satisfaisant : connaissances variées, illustrées, référencées, articulées aux expériences.", niv: 3 },
        { q: "Le jury de l'oral réunit :", choix: ["deux professeurs de lettres", "un professeur et un artiste partenaire", "trois inspecteurs", "le professeur de la classe, sans autre membre de jury"], bonne: 1, expl: "Un artiste qui est intervenu dans l'enseignement.", niv: 2 },
        { q: "L'écrit et l'oral comptent :", choix: ["chacun pour la moitié de la note", "pour 1/3 et 2/3", "pour 3/4 et 1/4", "à égalité avec le grand oral, coefficient compris"], bonne: 0, expl: "Coefficient total 16.", niv: 1 },
        { q: "Une candidate blessée ne danse pas mais était chorégraphe de son trio. Note maximale du premier temps ?", choix: ["4 sur 12", "3 sur 12", "6 sur 12", "0 sur 12"], bonne: 2, expl: "Elle est notée seulement comme chorégraphe, à condition d'assister au passage.", niv: 3 },
      ] },
    { chapitre: 'danse-2',
      fiche: `## Analyser une œuvre chorégraphique

Le programme demande de « lire une œuvre » de deux façons : une **lecture sensible** (ce que je perçois et ressens) et une **lecture référencée** (ce que je sais du contexte, de l'artiste, de l'histoire de la danse). À l'écrit comme à l'oral, une bonne analyse part de ce qu'on voit, avec des mots précis, avant d'interpréter.

### Quatre étapes
- **Identifier** : chorégraphe, titre, date, compagnie, nombre de danseurs, durée, lieu de création.
- **Décrire** : ce qu'on voit et entend, sans juger. Le mouvement, l'espace, le son, la scénographie.
- **Interpréter** : quel sens, quel propos, quel point de vue sur le monde ? Chaque idée s'appuie sur un détail décrit.
- **Situer et juger** : relier à un courant, à d'autres œuvres, à d'autres arts ; donner un avis argumenté.

### Les composantes du mouvement
- **Le corps** : parties engagées (tronc, bras, tête, pieds), segments isolés ou corps entier, postures, appuis, rapport au sol, codes (en dehors, pointes, pieds flex, pieds nus).
- **L'espace** : espace proche (la **kinesphère**, la bulle autour du corps), niveaux (au sol, debout, en l'air), directions, trajets (lignes, cercles, diagonales), orientation vers le public ou non, espace scénique (avant-scène, lointain, cour, jardin).
- **Le temps** : tempo, accélérations, ralentis, arrêts, immobilité, répétitions, rapport à la musique (sur le temps, en contrepoint, en silence), durée.
- **L'énergie** (ou les qualités du mouvement) : fort ou léger, soudain ou soutenu, fluide ou saccadé, lié ou retenu. Le théoricien **Rudolf Laban** a décrit ces facteurs : poids, temps, espace et flux.
- **Les relations** : entre danseurs (unisson, canon, question-réponse, contact, portés, contrepoint), avec le public, avec les objets.

### Les composantes du spectacle
- **Scénographie** : décor, objets, plateau nu ou chargé, lieu non conventionnel (rue, musée, toit).
- **Lumière** : pleins feux, découpes, pénombre, couleurs, lumière qui sculpte les corps ou les cache.
- **Costumes et maquillage** : ils montrent ou effacent l'individu, le genre, l'époque.
- **Univers sonore** : musique écrite pour l'œuvre, musique existante, bruitages, voix, silence. Lien de dépendance ou d'indépendance avec la danse.
- **Dramaturgie** : y a-t-il un récit, des personnages, une progression, ou une danse abstraite ?

### Le vocabulaire qui rapporte des points
- Unisson, canon, accumulation, répétition, contrepoint, solo, duo, trio, quatuor, corps de ballet.
- Ancrage, suspension, chute, rebond, déséquilibre, transfert de poids, spirale.
- Lecture sensible, lecture référencée, point de vue, propos, parti pris, esthétique.

### Exemple de phrase d'analyse
« Dans May B (1981), Maguy Marin fait avancer dix danseurs en groupe serré, à petits pas traînants : l'unisson ne montre pas la virtuosité, il montre une humanité qui avance ensemble malgré l'usure. » Une description (groupe serré, petits pas, unisson) est suivie de son sens (humanité, usure).

### À retenir pour le bac
- Identifier, décrire, interpréter, situer et juger.
- Corps, espace, temps, énergie, relations : la grille de lecture du mouvement.
- Scénographie, lumière, costumes, son et dramaturgie complètent l'analyse.
- Chaque interprétation s'appuie sur un détail précis.
- Piège : juger (« c'est beau ») avant d'avoir décrit.`,
      cartes: [
        { q: "Lecture sensible ?", r: "Ce que le spectateur perçoit et ressent devant l'œuvre." },
        { q: "Lecture référencée ?", r: "L'analyse appuyée sur des connaissances : contexte, artiste, courant, autres œuvres." },
        { q: "Les quatre étapes d'une analyse ?", r: "Identifier, décrire, interpréter, situer et juger." },
        { q: "Kinesphère ?", r: "L'espace proche autour du corps, que l'on atteint sans se déplacer (Laban)." },
        { q: "Les trois niveaux de l'espace ?", r: "Au sol, debout (niveau moyen), en l'air (sauts, portés)." },
        { q: "Facteurs de l'énergie selon Laban ?", r: "Poids, temps, espace et flux." },
        { q: "Unisson ?", r: "Plusieurs danseurs font le même mouvement en même temps." },
        { q: "Canon ?", r: "Le même mouvement repris en décalé par les danseurs, l'un après l'autre." },
        { q: "Contrepoint en danse ?", r: "Des mouvements différents menés en même temps, ou une danse qui ne suit pas la musique." },
        { q: "Cour et jardin ?", r: "Vu de la salle, la cour est à droite et le jardin à gauche." },
        { q: "Lointain et avant-scène ?", r: "Lointain : le fond du plateau ; avant-scène : le bord, près du public." },
        { q: "Scénographie ?", r: "L'organisation de l'espace de jeu : décor, objets, lieu, place du public." },
        { q: "Dramaturgie d'une pièce dansée ?", r: "Sa construction et son sens : récit ou non, progression, propos." },
        { q: "Danse abstraite ?", r: "Une danse sans récit ni personnages, centrée sur le mouvement lui-même." },
      ],
      quiz: [
        { q: "Trois danseurs font le même geste au même moment. On parle :", choix: ["de l'unisson", "de canon", "de contrepoint", "de solo"], bonne: 0, expl: "En canon, le geste serait repris en décalé.", niv: 1 },
        { q: "La kinesphère désigne :", choix: ["l'espace réservé au public, de la salle jusqu'au balcon", "la scène entière", "l'espace atteignable autour du corps sans se déplacer", "la trajectoire d'un saut"], bonne: 2, expl: "Notion de Rudolf Laban.", niv: 2 },
        { q: "Quel ordre suivre pour analyser une œuvre ?", choix: ["juger, décrire, identifier, interpréter", "identifier, décrire, interpréter, situer et juger", "interpréter, juger, décrire, identifier", "décrire, juger, situer, identifier"], bonne: 1, expl: "On décrit avant d'interpréter, on juge en dernier.", niv: 2 },
        { q: "Vu de la salle, le côté jardin est :", choix: ["au bord de scène", "à droite", "au fond", "à gauche"], bonne: 3, expl: "La cour est à droite pour le public.", niv: 1 },
        { q: "« Les danseurs reprennent la phrase l'un après l'autre, avec un temps de décalage. » C'est :", choix: ["un unisson", "un canon", "une accumulation", "un porté"], bonne: 1, expl: "Le décalage dans le temps définit le canon.", niv: 2 },
        { q: "Quelle phrase relève de l'interprétation et non de la description ?", choix: ["Leurs pas traînants disent l'usure des corps", "Les danseurs avancent à petits pas", "La lumière est faible au lointain", "Dix interprètes sont en groupe serré au centre du plateau"], bonne: 0, expl: "Elle donne un sens à un détail observé.", niv: 3 },
        { q: "Les facteurs de l'énergie selon Laban sont :", choix: ["cour, jardin, lointain, avant-scène", "corps, décor, lumière, son", "solo, duo, trio, quatuor", "poids, temps, espace, flux"], bonne: 3, expl: "Ils décrivent la qualité du mouvement.", niv: 1 },
        { q: "Une lecture référencée d'une œuvre s'appuie sur :", choix: ["le prix du billet", "ses émotions personnelles, sans explication ni exemple", "le contexte, l'artiste et d'autres œuvres", "la durée des applaudissements"], bonne: 2, expl: "La lecture sensible, elle, part du ressenti.", niv: 2 },
        { q: "Une danse va contre les accents de la musique. Quel mot convient ?", choix: ["accumulation", "unisson", "contrepoint", "kinesphère"], bonne: 2, expl: "La danse et le son suivent des logiques différentes.", niv: 3 },
        { q: "Le lointain est :", choix: ["la régie lumière", "le côté droit vu de la salle", "le bord de scène près du public", "le fond du plateau"], bonne: 3, expl: "L'avant-scène est le bord, près du public.", niv: 2 },
        { q: "Une pièce sans récit, centrée sur le mouvement, est dite :", choix: ["narrative", "abstraite", "folklorique", "réaliste"], bonne: 1, expl: "Elle ne raconte pas d'histoire.", niv: 1 },
        { q: "Quel commentaire de lumière est le plus utile dans une analyse ?", choix: ["Une découpe isole le soliste : il paraît seul face au groupe", "La lumière est jolie", "Il y avait des projecteurs", "La lumière a dû coûter cher"], bonne: 0, expl: "Il décrit un effet précis et lui donne un sens.", niv: 3 },
      ] },
    { chapitre: 'danse-3',
      fiche: `## Composer : les outils de l'écriture chorégraphique

À l'oral, tu présentes une composition et tu expliques ta démarche. À l'écrit, tu dois nommer les procédés que tu vois dans une œuvre. Les mêmes mots servent dans les deux cas : connaître les outils de composition, c'est pouvoir parler en chorégraphe.

### Partir d'une intention
- Une pièce naît d'une **intention** : une idée, une question, une image, un texte, une musique, un fait d'actualité. C'est le **point de départ** (on dit aussi **inducteur**).
- On cherche ensuite un **matériau** : des gestes trouvés en **improvisation**, à partir de **consignes** (tâches à accomplir, contraintes d'espace ou de temps).
- On fixe des **phrases** (suites de mouvements) que l'on peut transformer, répéter, assembler.
- Le **carnet de création** garde la trace de ces choix : point de départ, essais, abandons, raisons.

### Les procédés de composition
- **Répétition** : reprendre un geste ou une phrase. Elle peut créer une obsession, un rituel, une usure.
- **Accumulation** : ajouter un geste à chaque reprise (1 ; 1-2 ; 1-2-3...). Procédé célèbre de Trisha Brown (Accumulation, 1971).
- **Rétrograde** : exécuter la phrase à l'envers, du dernier geste au premier.
- **Variations** : changer la vitesse (accélérer, ralentir), l'amplitude (agrandir, réduire), le niveau (au sol, en l'air), l'orientation, la partie du corps (transposer un geste du bras au pied), l'énergie.
- **Unisson, canon, question-réponse, contrepoint** : les façons d'organiser plusieurs danseurs.
- **Hasard** : Merce Cunningham tirait au sort l'ordre des séquences ou les directions. Le résultat échappe aux habitudes du chorégraphe.
- **Rupture** : un arrêt, un silence, un changement brutal de qualité qui relance l'attention.

### Construire la pièce
- **Structure** : début, développement, fin ; ou forme en boucle, en tableaux, en crescendo.
- **Espace** : trajets, placements, entrées et sorties, rapport frontal au public ou non.
- **Son** : danser avec la musique, contre elle, ou en silence. La musique peut être choisie après la danse.
- **Scénographie, lumière, costumes** : des choix qui servent l'intention, pas des décorations.
- **Interprète** : présence, regard, engagement, mémoire de la pièce, qualité du mouvement. Le chorégraphe dirige ; l'interprète donne vie.

### Noter la danse
- **Notation Feuillet** (1700) : elle note les danses de la cour de Louis XIV par des trajets dessinés.
- **Cinétographie Laban** ou **Labanotation** (1928) : des symboles sur une portée verticale pour chaque partie du corps.
- **Notation Benesh** (1955) : une portée de cinq lignes, utilisée dans le ballet.
- Aujourd'hui, la **vidéo** et les **partitions** personnelles (dessins, mots, schémas) servent aussi à garder une pièce.

### Expliquer sa démarche à l'oral
- Dire **d'où l'on part** (intention), **comment** on a travaillé (consignes, procédés), **pourquoi** ces choix (lien avec l'intention), **ce qu'on a appris** comme interprète.
- Relier sa pièce à **une ou deux œuvres** de référence : « comme Trisha Brown, j'ai utilisé l'accumulation, mais pour montrer l'essoufflement ».

### À retenir pour le bac
- Intention, matériau, procédés, structure : les étapes d'une composition.
- Répétition, accumulation, rétrograde, variations, canon, hasard.
- Chaque choix (son, lumière, costume) doit servir l'intention.
- Feuillet, Laban et Benesh : trois systèmes pour noter la danse.
- Piège : décrire sa pièce sans expliquer pourquoi on a fait ces choix.`,
      cartes: [
        { q: "Intention chorégraphique ?", r: "L'idée ou la question de départ que la pièce veut porter." },
        { q: "Inducteur ?", r: "Le point de départ d'une création : image, texte, musique, objet, consigne." },
        { q: "Phrase chorégraphique ?", r: "Une suite de mouvements fixée, que l'on peut répéter et transformer." },
        { q: "Accumulation ?", r: "Ajouter un geste à chaque reprise : 1 ; 1-2 ; 1-2-3. Procédé de Trisha Brown." },
        { q: "Rétrograde ?", r: "Exécuter une phrase à l'envers, du dernier geste au premier." },
        { q: "Variation d'amplitude ?", r: "Agrandir ou réduire la taille d'un geste." },
        { q: "Transposition en danse ?", r: "Faire avec une autre partie du corps un geste prévu pour une première." },
        { q: "Hasard chez Cunningham ?", r: "Il tirait au sort l'ordre des séquences ou les directions pour échapper à ses habitudes." },
        { q: "Rôle d'une rupture ?", r: "Un arrêt, un silence ou un changement brutal qui relance l'attention." },
        { q: "Notation Feuillet ?", r: "Système de 1700 qui note les danses de cour par des trajets dessinés." },
        { q: "Labanotation ?", r: "Notation de Rudolf Laban (1928) : symboles sur une portée verticale." },
        { q: "Notation Benesh ?", r: "Notation de 1955 sur une portée de cinq lignes, utilisée dans le ballet." },
        { q: "Carnet de création ?", r: "Trace de la démarche de la composition du bac : intention, essais, choix." },
        { q: "Que dire de sa composition à l'entretien ?", r: "L'intention, la méthode, les raisons des choix, ce qu'on a appris, et une ou deux références." },
      ],
      quiz: [
        { q: "Ajouter un geste à chaque reprise de la phrase, c'est :", choix: ["l'unisson", "le rétrograde de la phrase", "le canon", "l'accumulation"], bonne: 3, expl: "1 ; 1-2 ; 1-2-3...", niv: 1 },
        { q: "Danser une phrase du dernier geste au premier, c'est :", choix: ["le rétrograde", "l'accumulation", "la transposition", "l'amplitude"], bonne: 0, expl: "Comme rembobiner un film.", niv: 2 },
        { q: "Quel chorégraphe utilisait le hasard pour composer ?", choix: ["Lev Ivanov", "Marius Petipa", "Merce Cunningham", "Pierre Beauchamp, maître à danser"], bonne: 2, expl: "Il tirait au sort l'ordre ou les directions.", niv: 2 },
        { q: "Le point de départ d'une création s'appelle aussi :", choix: ["le rétrograde", "l'inducteur", "la découpe", "le canon"], bonne: 1, expl: "Image, texte, musique, objet...", niv: 1 },
        { q: "Un geste du bras est refait avec la jambe. Procédé ?", choix: ["la transposition", "l'accumulation", "l'unisson", "la rupture"], bonne: 0, expl: "On change de partie du corps.", niv: 2 },
        { q: "Une élève compose sur l'enfermement et choisit un carré de lumière étroit. Que dire au jury ?", choix: ["La lumière était la plus facile à régler", "La lumière réduit l'espace et rend visible l'enfermement", "Le carré était déjà installé dans la salle", "La lumière est un élément technique sans lien avec la danse"], bonne: 1, expl: "Chaque choix doit être relié à l'intention.", niv: 3 },
        { q: "Quelle notation date de 1700 ?", choix: ["la vidéo numérique", "Benesh", "Laban", "Feuillet"], bonne: 3, expl: "Laban : 1928 ; Benesh : 1955.", niv: 1 },
        { q: "Le carnet de création porte sur :", choix: ["les spectacles vus pendant les années de seconde et de première", "les notes de l'année", "la démarche de la composition présentée au bac", "le règlement de l'épreuve"], bonne: 2, expl: "Le carnet de bord, lui, couvre tout le parcours.", niv: 2 },
        { q: "Pour montrer l'épuisement, quel procédé est le plus parlant ?", choix: ["un grand saut unique au début de la pièce, puis l'immobilité", "un unisson rapide et joyeux", "répéter la même phrase de plus en plus lentement", "changer de costume"], bonne: 2, expl: "La répétition et le ralenti font sentir l'usure.", niv: 3 },
        { q: "Changer la taille d'un geste, c'est jouer sur :", choix: ["l'amplitude", "le tempo", "l'orientation", "le niveau"], bonne: 0, expl: "Agrandir ou réduire.", niv: 2 },
        { q: "Une suite de mouvements fixée s'appelle :", choix: ["une kinesphère", "un inducteur", "une découpe", "une phrase"], bonne: 3, expl: "On peut ensuite la transformer.", niv: 1 },
        { q: "Quelle phrase d'entretien montre le mieux une démarche de chorégraphe ?", choix: ["J'ai mis les gestes que je savais faire", "J'ai accumulé les gestes pour que le groupe paraisse débordé", "La musique me plaisait beaucoup", "On a fini la pièce la veille de l'épreuve"], bonne: 1, expl: "Elle nomme un procédé et dit pourquoi.", niv: 3 },
      ] },
    { chapitre: 'danse-4',
      fiche: `## La danse, une interrogation portée sur le monde

C'est le thème d'étude de terminale. Tous les sujets d'écrit s'y rattachent. Il s'agit de questionner la danse **en tant qu'art** : quels points de vue, quels partis pris, quelles radicalités esthétiques ou politiques les œuvres et les artistes portent-ils ?

### Ce que dit le programme
- L'**art** est un **espace de liberté d'expression** ; la **création** est un **espace de transgression**. Les deux portent des interrogations sur le monde.
- L'élève construit un **point de vue critique** : il apprécie l'importance d'une démarche artistique, mais aussi ses **limites** possibles.
- Il interroge les **a priori**, les **stéréotypes** et les **représentations** (du corps, du genre, de la beauté, de l'autre).
- Le thème se travaille à travers **au moins deux axes**, qui posent la question de l'**engagement politique et esthétique** : la danse et les avancées scientifiques et technologiques ; la danse et les biens culturels de consommation ; la danse et les questions d'identité ; la danse et les dialogues interculturels ; la danse et les questions d'écologie.

### Les mots du thème
- **Engagement** : l'artiste prend position sur une question de société. L'engagement peut être **politique** (le propos) ou **esthétique** (la forme elle-même rompt avec les normes).
- **Transgression** : franchir une règle ou un code, par exemple montrer un corps que la scène cachait, refuser la virtuosité, mélanger les genres.
- **Radicalité** : aller jusqu'au bout d'un choix, quitte à dérouter le public (immobilité, lenteur extrême, nudité, laideur assumée).
- **Point de vue sur le monde** : ce que l'œuvre fait penser de la société, de l'humain, du pouvoir, de la guerre, de l'exclusion.
- **Représentations et stéréotypes** : les images toutes faites (la ballerine fragile, le danseur viril, le corps « parfait ») que certaines œuvres reprennent et d'autres détournent.

### Des repères historiques d'une danse engagée
- **1913, Le Sacre du printemps** (Nijinski, Stravinsky) : pieds en dedans, corps lourds, rythmes brutaux. Le scandale de la création montre qu'une **forme** peut choquer autant qu'un propos.
- **1932, La Table verte** (Kurt Jooss) : des diplomates négocient autour d'une table, la guerre éclate, la Mort emporte tout le monde. Une pièce contre la guerre.
- **1936** : **Martha Graham** refuse de participer au festival des Jeux olympiques de Berlin, organisés par le régime nazi.
- **1960, Revelations** (Alvin Ailey) : l'histoire et la spiritualité des Afro-Américains, au temps de la lutte pour les droits civiques.
- **Années 1960-1970 : la post-modern dance** conteste la virtuosité, le spectacle et les valeurs de la société américaine.
- **Depuis les années 1980** : Maguy Marin, les relectures du Lac des cygnes, la danse hip-hop sur scène font de la danse un lieu de débat sur la société.

### Engagement et limites
- Une œuvre engagée peut **éveiller les consciences**, donner une **visibilité** à des corps ou des cultures oubliés, faire **débattre**.
- Limites possibles : le message peut écraser l'œuvre ; le public déjà convaincu est seul à venir ; un propos trop explicite devient un **slogan** ; une œuvre peut être **récupérée** par ce qu'elle critique.
- Une danse sans message apparent peut aussi être engagée : refuser de raconter, refuser la virtuosité, c'est déjà prendre position (c'est le cas de la post-modern dance).

### À retenir pour le bac
- Art comme liberté d'expression, création comme transgression.
- Engagement politique (propos) et esthétique (forme).
- Cinq axes : sciences et technologies, consommation, identité, interculturalité, écologie.
- Savoir dire l'intérêt et les limites d'une démarche engagée.
- Piège : réduire l'engagement au seul message ; la forme compte autant.`,
      cartes: [
        { q: "Thème d'étude de terminale ?", r: "« La danse, une interrogation portée sur le monde »." },
        { q: "L'art selon ce thème ?", r: "Un espace de liberté d'expression." },
        { q: "La création selon ce thème ?", r: "Un espace de transgression." },
        { q: "Engagement politique ou esthétique ?", r: "Politique : le propos prend position. Esthétique : la forme rompt avec les normes de la danse." },
        { q: "Les cinq axes proposés ?", r: "Sciences et technologies ; biens culturels de consommation ; identité ; dialogues interculturels ; écologie." },
        { q: "Combien d'axes faut-il étudier ?", r: "Au moins deux." },
        { q: "Transgression en danse ?", r: "Franchir un code ou une règle : corps montré autrement, refus de la virtuosité, mélange des genres." },
        { q: "Pourquoi Le Sacre du printemps (1913) fit-il scandale ?", r: "Par sa forme : pieds en dedans, corps lourds, rythmes brutaux, loin du ballet attendu." },
        { q: "La Table verte (1932) ?", r: "Pièce de Kurt Jooss contre la guerre : diplomates, guerre, la Mort emporte tout le monde." },
        { q: "Martha Graham en 1936 ?", r: "Elle refuse de participer au festival des Jeux olympiques de Berlin, sous le régime nazi." },
        { q: "Revelations (1960) ?", r: "Pièce d'Alvin Ailey sur l'histoire et la spiritualité afro-américaines." },
        { q: "Limites d'une œuvre engagée ?", r: "Message qui écrase l'œuvre, slogan, public déjà convaincu, récupération." },
        { q: "Stéréotype en danse ?", r: "Une image toute faite : ballerine fragile, danseur viril, corps parfait." },
      ],
      quiz: [
        { q: "Selon le programme, la création est un espace :", choix: ["de compétition sportive", "de divertissement pur", "de transgression", "de reproduction fidèle du réel"], bonne: 2, expl: "Et l'art est un espace de liberté d'expression.", niv: 1 },
        { q: "Combien d'axes du thème faut-il étudier au minimum ?", choix: ["5", "3", "4", "2"], bonne: 3, expl: "Au moins deux des axes proposés.", niv: 2 },
        { q: "Lequel n'est pas un axe du thème de terminale ?", choix: ["la danse et la compétition sportive", "la danse et les questions d'identité", "la danse et les questions d'écologie", "la danse et les biens culturels de consommation"], bonne: 0, expl: "Les autres axes sont sciences et technologies, et dialogues interculturels.", niv: 2 },
        { q: "Quelle pièce de 1932 dénonce la guerre ?", choix: ["Le Lac des cygnes de Petipa et Ivanov", "La Table verte de Kurt Jooss", "Revelations d'Alvin Ailey", "Trio A d'Yvonne Rainer"], bonne: 1, expl: "Des diplomates, la guerre, puis la Mort.", niv: 1 },
        { q: "Un engagement esthétique, c'est :", choix: ["une pièce financée par l'État", "un discours politique lu sur scène entre deux danses", "un spectacle de gala", "une forme qui rompt avec les normes de la danse"], bonne: 3, expl: "La forme elle-même prend position.", niv: 2 },
        { q: "Pourquoi une pièce sans message explicite peut-elle être engagée ?", choix: ["Les danseurs y défendent un parti politique devant le public chaque soir", "Elle évite de choquer le public et la presse", "Refuser la virtuosité ou le récit est déjà une prise de position", "Les spectateurs y votent à la fin"], bonne: 2, expl: "C'est le cas de la post-modern dance.", niv: 3 },
        { q: "En 1936, Martha Graham :", choix: ["crée Le Sacre du printemps", "refuse de danser au festival des Jeux de Berlin", "fonde le Judson Dance Theater à New York avec Cage", "danse Odette à Saint-Pétersbourg"], bonne: 1, expl: "Un refus politique face au régime nazi.", niv: 2 },
        { q: "Le scandale du Sacre du printemps (1913) vient surtout :", choix: ["de sa forme : pieds en dedans, corps lourds, rythmes brutaux", "d'un discours politique", "de l'absence de musique", "de l'emploi de la vidéo"], bonne: 0, expl: "Une forme peut choquer autant qu'un propos.", niv: 3 },
        { q: "Quelle limite d'une œuvre engagée peut-on discuter dans une copie ?", choix: ["Un message trop explicite qui devient un slogan", "Une durée trop courte pour le prix", "Un nombre de danseurs trop élevé", "Une salle trop grande pour le public venu voir la pièce"], bonne: 0, expl: "Le programme demande d'apprécier l'importance et les limites d'une démarche.", niv: 3 },
        { q: "Revelations (1960) d'Alvin Ailey évoque :", choix: ["la vie de cour à Versailles au temps de Louis XIV", "la guerre de 1914", "l'histoire et la spiritualité afro-américaines", "les réseaux sociaux"], bonne: 2, expl: "Créée au temps de la lutte pour les droits civiques.", niv: 2 },
        { q: "Le thème de terminale s'intitule :", choix: ["La danse et l'histoire des costumes de scène en Europe", "La danse, une interrogation portée sur le monde", "Le corps en danse", "La danse entre continuités et ruptures"], bonne: 1, expl: "Les deux derniers sont des thèmes de première.", niv: 1 },
        { q: "Une chorégraphe montre des danseurs âgés là où l'on attend des corps jeunes. Elle interroge surtout :", choix: ["la durée des spectacles", "les techniques d'éclairage", "les règles du droit d'auteur au théâtre", "les représentations du corps"], bonne: 3, expl: "Elle détourne un stéréotype du corps dansant.", niv: 3 },
      ] },
    { chapitre: 'danse-5',
      fiche: `## Le Lac des cygnes de 1895, le modèle

Pour comprendre ce que les chorégraphes contemporains transforment, il faut connaître l'original. Le Lac des cygnes est devenu le symbole même du ballet classique : tutus blancs, pointes, corps de ballet aligné, ballerine à la fois Odette et Odile.

### Une création en deux temps
- **Musique de Piotr Ilitch Tchaïkovski**, commandée par le théâtre du Bolchoï de Moscou. Première version en **1877** (chorégraphie de Julius Reisinger) : accueil mitigé.
- Tchaïkovski meurt en 1893. Au théâtre **Mariinsky** de **Saint-Pétersbourg**, **Marius Petipa** et **Lev Ivanov** créent la version qui fait référence, en **1895**. Le chef Riccardo Drigo révise la partition.
- **Ivanov** règle les **actes II et IV** (les actes « blancs », au bord du lac) ; **Petipa** règle les **actes I et III** (la cour, le bal).
- Pierina Legnani crée le double rôle **Odette et Odile**.

### L'histoire en quatre actes
- **Acte I** : le prince **Siegfried** fête sa majorité ; sa mère lui demande de choisir une épouse au bal du lendemain.
- **Acte II** : au bord d'un lac, il rencontre **Odette**, princesse changée en cygne par le sorcier **Rothbart** ; elle ne redevient femme que la nuit. Seul un serment d'amour fidèle peut la délivrer.
- **Acte III** : au bal, Rothbart présente sa fille **Odile**, le cygne noir, qui ressemble à Odette. Siegfried, trompé, lui jure son amour.
- **Acte IV** : Odette est perdue ; les amants choisissent la mort ensemble et le sortilège se brise (la fin varie selon les versions).

### Les codes du ballet classique
- **En dehors** (jambes tournées vers l'extérieur), **pointes** pour les danseuses, **verticalité**, **légèreté**, sauts et tours qui défient la pesanteur.
- **Hiérarchie** : la danseuse **étoile**, les **solistes**, le **corps de ballet** qui forme lignes, diagonales et figures **symétriques**.
- **Ballet blanc** : tutus blancs, univers surnaturel, héritage du ballet romantique (La Sylphide, 1832 ; Giselle, 1841).
- **Pantomime** : des gestes codés racontent l'histoire (jurer, aimer, menacer).
- **Danses de caractère** à l'acte III : espagnole, napolitaine, hongroise, mazurka, inspirées de danses populaires stylisées.

### Les passages célèbres
- La **danse des petits cygnes** : quatre danseuses bras croisés, pas rapides et identiques, à l'unisson parfait.
- L'**adage** de l'acte II : duo lent d'Odette et Siegfried, ports de bras qui imitent les ailes.
- Le **pas de deux du cygne noir** à l'acte III, avec les **32 fouettés** d'Odile, prouesse de virtuosité.

### Ce que le ballet représente
- La **dualité** : blanc et noir, pureté et séduction, vérité et mensonge.
- Une image de la **femme** idéalisée, fragile, à sauver, et un **homme** qui porte et choisit.
- Un **corps normé** (mince, jeune, technique), un art lié à la **cour** et à l'aristocratie.
- C'est justement tout cela que les réinterprétations interrogent : le genre, le pouvoir, le corps, l'élitisme.

### À retenir pour le bac
- Tchaïkovski ; version de référence de Petipa et Ivanov, Mariinsky, 1895.
- Odette (cygne blanc) et Odile (cygne noir) dansées par la même ballerine.
- Codes : en dehors, pointes, verticalité, hiérarchie, symétrie du corps de ballet.
- Ivanov : actes blancs II et IV ; Petipa : actes I et III.
- Piège : confondre la date de la musique (1877) et celle de la version de référence (1895).`,
      cartes: [
        { q: "Compositeur du Lac des cygnes ?", r: "Piotr Ilitch Tchaïkovski." },
        { q: "Version de référence ?", r: "Marius Petipa et Lev Ivanov, théâtre Mariinsky, Saint-Pétersbourg, 1895." },
        { q: "Première version ?", r: "1877, au Bolchoï de Moscou, chorégraphie de Julius Reisinger ; accueil mitigé." },
        { q: "Qui règle les actes II et IV ?", r: "Lev Ivanov : les actes blancs, au bord du lac." },
        { q: "Qui règle les actes I et III ?", r: "Marius Petipa : la cour et le bal." },
        { q: "Odette ?", r: "Princesse changée en cygne par Rothbart, femme seulement la nuit : le cygne blanc." },
        { q: "Odile ?", r: "Fille de Rothbart, le cygne noir, qui trompe Siegfried au bal." },
        { q: "Qui danse Odette et Odile ?", r: "La même ballerine, ce qui souligne la dualité." },
        { q: "En dehors ?", r: "Les jambes tournées vers l'extérieur depuis la hanche, base du ballet classique." },
        { q: "Ballet blanc ?", r: "Scènes en tutus blancs dans un monde surnaturel, héritées du ballet romantique." },
        { q: "Danse des petits cygnes ?", r: "Quatre danseuses bras croisés, pas rapides à l'unisson parfait." },
        { q: "32 fouettés ?", r: "Prouesse d'Odile dans le pas de deux du cygne noir, à l'acte III." },
        { q: "Hiérarchie du ballet ?", r: "Étoile, solistes, corps de ballet." },
        { q: "Danses de caractère ?", r: "Danses populaires stylisées (espagnole, napolitaine, hongroise, mazurka) au bal de l'acte III." },
      ],
      quiz: [
        { q: "Qui a composé la musique du Lac des cygnes ?", choix: ["Igor Stravinsky", "Tchaïkovski", "Prokofiev", "Schubert"], bonne: 1, expl: "Commande du Bolchoï, première version en 1877.", niv: 1 },
        { q: "La version de référence date de :", choix: ["1895", "1877", "1832", "1841"], bonne: 0, expl: "Petipa et Ivanov, au Mariinsky.", niv: 2 },
        { q: "Dans la version de 1895, Lev Ivanov règle :", choix: ["le seul acte III", "les actes I et III, à la cour et au bal", "les actes II et IV, au bord du lac", "la musique"], bonne: 2, expl: "Petipa règle la cour et le bal.", niv: 2 },
        { q: "Odile est :", choix: ["une invitée espagnole du bal de l'acte III", "la mère de Siegfried", "le cygne blanc", "le cygne noir, fille de Rothbart"], bonne: 3, expl: "Elle se fait passer pour Odette.", niv: 1 },
        { q: "La danse des petits cygnes réunit :", choix: ["quatre danseuses bras croisés à l'unisson", "deux danseurs en duo lent", "tout le corps de ballet en canon", "Siegfried et sa mère"], bonne: 0, expl: "Pas rapides et identiques.", niv: 2 },
        { q: "Pourquoi la même ballerine danse-t-elle Odette et Odile ?", choix: ["Pour laisser le corps de ballet au repos", "Pour réduire le nombre de danseuses", "Parce que le livret de 1877 l'impose aux compagnies russes", "Pour rendre sensible la dualité blanc et noir"], bonne: 3, expl: "Pureté et séduction, vérité et mensonge.", niv: 3 },
        { q: "Les jambes tournées vers l'extérieur depuis la hanche, c'est :", choix: ["le flex", "l'en dehors", "le parallèle", "l'en dedans"], bonne: 1, expl: "Base du vocabulaire classique.", niv: 1 },
        { q: "Les danses espagnole, napolitaine et hongroise de l'acte III sont des :", choix: ["improvisations", "danses abstraites", "danses de caractère", "danses de rue improvisées"], bonne: 2, expl: "Danses populaires stylisées pour le bal.", niv: 2 },
        { q: "Quel aspect du ballet de 1895 les réinterprétations contestent-elles souvent ?", choix: ["la qualité de la musique de Tchaïkovski et de Drigo", "l'image d'une féminité fragile et d'un corps normé", "la durée du premier acte", "l'éclairage électrique"], bonne: 1, expl: "Genre, pouvoir, corps, élitisme.", niv: 3 },
        { q: "Les 32 fouettés sont exécutés par :", choix: ["les petits cygnes", "Siegfried, à l'acte I", "Odile, au pas de deux du cygne noir", "Rothbart, à l'acte IV"], bonne: 2, expl: "Une prouesse de virtuosité.", niv: 2 },
        { q: "Où la version de 1895 est-elle créée ?", choix: ["au Mariinsky de Saint-Pétersbourg", "au Bolchoï de Moscou, comme en 1877", "à l'Opéra de Paris", "à Londres"], bonne: 0, expl: "La première version de 1877 était au Bolchoï.", niv: 1 },
        { q: "Une copie écrit : « Le Lac des cygnes, ballet de 1877 de Petipa ». Quelle correction faire ?", choix: ["Il faut remplacer Petipa par Tchaïkovski seul", "Il faut écrire 1913 et Nijinski", "C'est exact, rien à corriger", "1877 est la première version, de Reisinger ; Petipa et Ivanov, c'est 1895"], bonne: 3, expl: "Ne pas confondre les deux créations.", niv: 3 },
      ] },
    { chapitre: 'danse-6',
      fiche: `## Les réinterprétations du Lac des cygnes

Le programme demande d'étudier **au moins deux pièces** parmi celles de Matthew Bourne, Andy de Groat, Mats Ek, Raimund Hoghe, Jean-Christophe Maillot, Dada Masilo et Robyn Orlin. Elles sont abordées comme des **espaces d'expression ou de transgression** qui portent un **point de vue sur le monde**, et posent la question de la **danse comme art engagé**. Le professeur précise lesquelles la classe étudie.

### Les façons de reprendre une œuvre
- **Relecture** : garder l'histoire mais en changer le sens (psychologie, société).
- **Citation** : reprendre un passage reconnaissable (les petits cygnes, la musique) dans un autre contexte.
- **Détournement** ou **parodie** : utiliser l'œuvre pour s'en moquer ou critiquer ce qu'elle représente.
- **Déconstruction** : défaire les codes (pointes, symétrie, hiérarchie) pour montrer ce qu'ils cachent.
- **Transposition** : placer l'histoire dans un autre lieu, une autre époque, une autre culture.

### Les chorégraphes de la liste
- **Mats Ek** (Suède), **Le Lac des cygnes**, **1987**, pour le Ballet Cullberg. Cygnes au crâne rasé, pieds nus, pieds en dedans et flex, corps ancrés au sol : l'inverse de la légèreté classique. Siegfried est un jeune homme étouffé par sa mère, lecture **psychologique** pleine d'humour.
- **Matthew Bourne** (Royaume-Uni), **Swan Lake**, **1995**, Londres. Les cygnes sont des **hommes** torse nu, puissants, sauvages. Le prince, mal aimé par une reine froide, est attiré par le Cygne. La pièce interroge la **masculinité**, le désir entre hommes et la monarchie. Le film **Billy Elliot** (2000) se termine sur ce spectacle.
- **Dada Masilo** (Afrique du Sud), **Swan Lake**, **2010**. Elle mêle le **ballet** et des **danses d'Afrique du Sud**, fait porter le tutu aux hommes et aux femmes. Siegfried aime un homme ; la pièce dénonce l'**homophobie**, le mariage forcé, et évoque les morts du sida.
- **Robyn Orlin** (Afrique du Sud), **Daddy, I've seen this piece six times before and I still don't know why they're hurting each other**, **1998**. Une satire du ballet blanc comme art d'une **élite**, après l'**apartheid** : danseurs noirs, humour, adresse au public.
- **Raimund Hoghe** (Allemagne), **Swan Lake, 4 Acts**, **2005**. Ancien dramaturge de Pina Bausch, il danse avec son **corps bossu**, loin des normes. Gestes lents, rituels, présence nue : une réflexion sur la **beauté** et sur les corps exclus de la scène.
- **Jean-Christophe Maillot** (France, Monaco), **LAC**, **2011**, Ballets de Monte-Carlo, avec l'écrivain Jean Rouaud. Le conte devient une histoire **familiale** sombre sur le désir et le pouvoir, avec une technique classique transformée.
- **Andy de Groat** (États-Unis), proche du metteur en scène Robert Wilson et connu pour ses danses **tournoyantes**, crée sa version en **1982** : une relecture décalée, qui joue avec les codes du ballet.

### Ce que ces œuvres interrogent
- **Le genre** : hommes-cygnes (Bourne), tutus pour tous (Masilo), couples de même sexe.
- **Le corps** : corps ancrés (Ek), corps hors normes (Hoghe), corps noirs sur une scène blanche (Orlin, Masilo).
- **Le pouvoir et la société** : monarchie (Bourne), apartheid et élitisme (Orlin), famille (Ek, Maillot).
- **La tradition** : on ne rejette pas le ballet, on dialogue avec lui. Sans le connaître, on ne comprend pas la transgression.

### Écrire sur une réinterprétation
- Toujours comparer avec **un élément précis** de 1895 : « Là où Ivanov aligne des cygnes légers sur pointes, Mats Ek pose des cygnes pieds nus, genoux pliés, ancrés au sol. »
- Dire **ce qui change** (forme), puis **ce que cela signifie** (point de vue sur le monde).

### À retenir pour le bac
- Au moins deux pièces étudiées : connaître chorégraphe, titre, date, choix forts.
- Ek 1987, Orlin 1998, Bourne 1995, Hoghe 2005, Masilo 2010, Maillot 2011, de Groat 1982.
- Relecture, citation, détournement, déconstruction, transposition.
- Genre, corps, pouvoir, tradition : les quatre questions.
- Piège : décrire la version moderne sans la comparer au modèle.`,
      cartes: [
        { q: "Combien de réinterprétations étudier au minimum ?", r: "Au moins deux pièces parmi celles de la liste du programme limitatif." },
        { q: "Mats Ek, Le Lac des cygnes ?", r: "1987, Ballet Cullberg : cygnes au crâne rasé, pieds nus, ancrés au sol ; Siegfried étouffé par sa mère." },
        { q: "Matthew Bourne, Swan Lake ?", r: "1995, Londres : cygnes masculins torse nu, puissants ; masculinité, désir, monarchie." },
        { q: "Dada Masilo, Swan Lake ?", r: "2010 : ballet et danses sud-africaines, tutus pour tous, Siegfried aime un homme ; contre l'homophobie." },
        { q: "Robyn Orlin, Daddy... ?", r: "1998 : satire du ballet blanc comme art d'élite, après l'apartheid, avec humour." },
        { q: "Raimund Hoghe, Swan Lake, 4 Acts ?", r: "2005 : il danse avec son corps bossu ; lenteur, rituel, réflexion sur la beauté et l'exclusion." },
        { q: "Jean-Christophe Maillot, LAC ?", r: "2011, Ballets de Monte-Carlo, avec Jean Rouaud : conte familial sombre sur le désir et le pouvoir." },
        { q: "Andy de Groat ?", r: "Chorégraphe américain proche de Robert Wilson, danses tournoyantes ; version du Lac en 1982." },
        { q: "Relecture ?", r: "Garder l'histoire en lui donnant un autre sens." },
        { q: "Citation chorégraphique ?", r: "Reprendre un passage reconnaissable dans un autre contexte." },
        { q: "Détournement ?", r: "Utiliser une œuvre pour la critiquer ou s'en moquer." },
        { q: "Déconstruction ?", r: "Défaire les codes d'une œuvre pour montrer ce qu'ils cachent." },
        { q: "Quel film finit sur le Swan Lake de Bourne ?", r: "Billy Elliot (2000)." },
        { q: "Méthode pour écrire sur une relecture ?", r: "Comparer à un élément précis de 1895, dire ce qui change, puis ce que cela signifie." },
      ],
      quiz: [
        { q: "Dans le Swan Lake de Matthew Bourne (1995), les cygnes sont :", choix: ["des hommes torse nu, puissants", "des danseuses sur pointes, en tutu", "des marionnettes", "des enfants"], bonne: 0, expl: "La pièce interroge la masculinité et le désir.", niv: 1 },
        { q: "Les cygnes de Mats Ek (1987) se reconnaissent à :", choix: ["leurs pointes et leur légèreté", "leur crâne rasé et leurs pieds nus, ancrés au sol", "leurs costumes noirs à paillettes et leurs couronnes", "leur absence de musique"], bonne: 1, expl: "L'inverse de la légèreté classique.", niv: 2 },
        { q: "Quelle chorégraphe mêle ballet et danses d'Afrique du Sud dans un Swan Lake de 2010 ?", choix: ["Yvonne Rainer", "Maguy Marin", "Trisha Brown", "Dada Masilo"], bonne: 3, expl: "Tutus pour tous, contre l'homophobie.", niv: 2 },
        { q: "Reprendre la danse des petits cygnes dans une pièce sur l'usine, c'est :", choix: ["une improvisation libre sur la musique", "une notation", "une citation transposée", "une danse de caractère"], bonne: 2, expl: "Passage reconnaissable dans un autre contexte.", niv: 1 },
        { q: "Robyn Orlin vise surtout, dans sa pièce de 1998 :", choix: ["la musique de Tchaïkovski", "la technique des pointes", "le ballet comme art d'une élite blanche", "le hip-hop, jugé trop présent sur les scènes"], bonne: 2, expl: "Satire au lendemain de l'apartheid.", niv: 2 },
        { q: "Quelle phrase est la meilleure dans une copie sur Mats Ek ?", choix: ["Mats Ek a fait une version moderne très réussie", "Là où Ivanov aligne des cygnes sur pointes, Ek les ancre au sol, genoux pliés", "La version de Mats Ek est différente de l'originale", "Mats Ek aime beaucoup le Lac des cygnes"], bonne: 1, expl: "Elle compare précisément au modèle.", niv: 3 },
        { q: "Raimund Hoghe, dans Swan Lake, 4 Acts (2005) :", choix: ["danse avec son corps bossu et interroge la beauté", "remplace les cygnes par des robots", "reprend la version de 1895 à l'identique, en costumes d'époque", "met en scène un concours de danse"], bonne: 0, expl: "Un corps exclu de la scène classique.", niv: 1 },
        { q: "Le LAC de Jean-Christophe Maillot (2011) est créé pour :", choix: ["le Mariinsky", "le Ballet Cullberg", "les Ballets russes de Diaghilev", "les Ballets de Monte-Carlo"], bonne: 3, expl: "Avec l'écrivain Jean Rouaud.", niv: 2 },
        { q: "Pourquoi ces pièces ont-elles besoin de l'original pour être comprises ?", choix: ["Elles en reprennent toute la chorégraphie", "La transgression n'apparaît que face au modèle", "Le public doit connaître le livret par cœur", "Elles durent aussi longtemps que lui"], bonne: 1, expl: "On dialogue avec la tradition plutôt que de l'ignorer.", niv: 3 },
        { q: "Dans la version de Dada Masilo, Siegfried :", choix: ["tue Rothbart", "épouse Odette", "devient un cygne", "aime un homme"], bonne: 3, expl: "La pièce dénonce l'homophobie.", niv: 2 },
        { q: "Andy de Groat a travaillé avec :", choix: ["le metteur en scène Robert Wilson", "Marius Petipa, à Saint-Pétersbourg", "Kurt Jooss", "Martha Graham"], bonne: 0, expl: "Il est connu pour ses danses tournoyantes.", niv: 1 },
        { q: "Bourne montre des hommes-cygnes, Masilo fait porter le tutu à tous. Axe du thème ?", choix: ["la danse et les sciences", "la danse et l'écologie", "la danse et les questions d'identité", "la danse et les biens de consommation"], bonne: 2, expl: "Genre et identité sont questionnés.", niv: 3 },
      ] },
    { chapitre: 'danse-7',
      fiche: `## La post-modern dance : rupture et contestation

Le programme limitatif demande d'aborder ce courant **en relation avec d'autres arts**, sous l'angle de la **contestation des valeurs, des représentations et des imaginaires de la société américaine des années 1960-1970**. Autrement dit : comment des danseurs de New York ont refusé ce que la danse et la société attendaient d'eux.

### Contre quoi ?
- **La danse moderne** américaine (Martha Graham, Doris Humphrey, José Limón) : une technique codée, des récits psychologiques, des héros tragiques, un style reconnaissable. Pour la nouvelle génération, elle est devenue une norme à son tour.
- **Le spectacle** : la virtuosité, la star, le décor, l'illusion, le théâtre à l'italienne.
- **La société** : la guerre du Vietnam, le racisme (lutte pour les droits civiques), la consommation, la place des femmes. Les années 1960-1970 sont celles de la **contre-culture**.

### Les précurseurs
- **Merce Cunningham** : l'espace sans centre (chaque point du plateau vaut les autres), l'**indépendance** de la danse, de la musique et du décor, le **hasard** dans la composition. Il travaille avec le compositeur **John Cage**.
- **John Cage** : 4'33'' (1952), une pièce où le pianiste ne joue pas ; les bruits de la salle deviennent la musique. Tout son peut être musique, tout mouvement peut être danse.
- **Anna Halprin** : en Californie, elle fait danser en plein air, à partir de **tâches** (porter, marcher, s'habiller) et d'**improvisation**. Plusieurs futurs post-modernes suivent ses ateliers.
- **Robert Dunn** donne de 1960 à 1962, dans le studio de Cunningham, un atelier de composition inspiré de Cage.

### Le Judson Dance Theater (1962)
- Le **6 juillet 1962**, les élèves de Dunn présentent un concert de danse à la **Judson Memorial Church**, une église de Greenwich Village, à **New York**. C'est l'acte de naissance du groupe.
- Pas de scène surélevée, pas de billets chers : danseurs, plasticiens, musiciens et non-danseurs y montrent leurs expériences.
- Le mot « post-modern dance » sera popularisé par la critique **Sally Banes** (Terpsichore in Sneakers, 1980).

### Les principes
- **Gestes quotidiens** (marcher, courir, s'asseoir) : le corps « piéton », sans technique spectaculaire.
- **Tâches** et **règles du jeu** plutôt que récit : on fait une action, on ne joue pas un personnage.
- **Refus de la virtuosité** et de l'expressivité : visage neutre, énergie égale.
- **Non-danseurs** sur scène : tout corps peut danser. Une idée **démocratique**, sans hiérarchie.
- **Lieux non conventionnels** : toits, murs, parcs, galeries, gymnases.
- **Improvisation**, **hasard**, **répétition**, **accumulation**, structures simples : une parenté avec l'art minimal.
- En 1965, **Yvonne Rainer** écrit son **No manifesto** : non au spectacle, non à la virtuosité, non à la magie et à l'illusion, non à la star.

### Les liens avec les autres arts
- **Arts plastiques** : Robert Rauschenberg (combine paintings, décors pour Cunningham et Trisha Brown), l'**art minimal** (Robert Morris, Donald Judd, Sol LeWitt), le **pop art** qui prend les objets de consommation.
- **Happenings** (Allan Kaprow, à partir de 1959) et **Fluxus** : des actions éphémères qui mêlent art et vie.
- **Musique** : Cage, puis les compositeurs répétitifs (Philip Glass, Steve Reich).

### À retenir pour le bac
- New York, années 1960-1970 : contestation de la danse moderne et de la société.
- Précurseurs : Cunningham, Cage, Halprin, Dunn.
- Judson Dance Theater, 6 juillet 1962, Judson Memorial Church.
- Gestes quotidiens, tâches, refus de la virtuosité, non-danseurs, lieux non conventionnels.
- Piège : croire que « post-moderne » veut dire « danse d'aujourd'hui » ; c'est un courant daté.`,
      cartes: [
        { q: "Angle d'étude de la post-modern dance au programme ?", r: "La contestation des valeurs, représentations et imaginaires de la société américaine des années 1960-1970, en lien avec d'autres arts." },
        { q: "Contre quelle danse réagit-elle ?", r: "La danse moderne américaine (Graham, Humphrey, Limón) : technique codée, récits psychologiques." },
        { q: "Apports de Merce Cunningham ?", r: "Espace sans centre, indépendance danse-musique-décor, hasard dans la composition." },
        { q: "4'33'' de John Cage ?", r: "Pièce de 1952 où le pianiste ne joue pas : les bruits de la salle deviennent la musique." },
        { q: "Anna Halprin ?", r: "Chorégraphe de Californie : danse en plein air, tâches, improvisation ; elle forme plusieurs post-modernes." },
        { q: "Robert Dunn ?", r: "Musicien qui anime de 1960 à 1962 un atelier de composition inspiré de Cage." },
        { q: "Naissance du Judson Dance Theater ?", r: "Le 6 juillet 1962, concert à la Judson Memorial Church, New York." },
        { q: "Mouvement « piéton » ?", r: "Les gestes quotidiens (marcher, courir, s'asseoir) utilisés comme danse." },
        { q: "Tâche (task) ?", r: "Une action concrète à accomplir sur scène, à la place d'un personnage ou d'un récit." },
        { q: "No manifesto ?", r: "Texte d'Yvonne Rainer (1965) : non au spectacle, à la virtuosité, à l'illusion, à la star." },
        { q: "Qui popularise le terme « post-modern dance » ?", r: "La critique Sally Banes, dans Terpsichore in Sneakers (1980)." },
        { q: "Lien avec l'art minimal ?", r: "Formes simples, répétition, structures claires, refus de l'expression personnelle." },
        { q: "Happening ?", r: "Une action artistique éphémère qui mêle art et vie (Allan Kaprow, à partir de 1959)." },
        { q: "Pourquoi des non-danseurs sur scène ?", r: "Pour affirmer que tout corps peut danser : une idée démocratique, sans hiérarchie." },
      ],
      quiz: [
        { q: "La post-modern dance naît surtout à :", choix: ["Berlin", "Saint-Pétersbourg", "Paris", "New York"], bonne: 3, expl: "Greenwich Village, au début des années 1960.", niv: 1 },
        { q: "Le premier concert du Judson Dance Theater a lieu en :", choix: ["1981", "1913", "1962", "1895"], bonne: 2, expl: "Le 6 juillet 1962, à la Judson Memorial Church.", niv: 2 },
        { q: "Quel compositeur a écrit 4'33'' ?", choix: ["John Cage", "Philip Glass", "Tchaïkovski", "Steve Reich"], bonne: 0, expl: "Les bruits de la salle deviennent la musique.", niv: 2 },
        { q: "Le « mouvement piéton », ce sont :", choix: ["les pas de ballet sur pointes", "les gestes quotidiens utilisés comme danse", "les danses de rue en compétition dans des cercles", "les sauts virtuoses"], bonne: 1, expl: "Marcher, courir, s'asseoir.", niv: 1 },
        { q: "Quel principe vient de Merce Cunningham ?", choix: ["la pantomime codée", "l'indépendance de la danse et de la musique", "le récit psychologique", "la hiérarchie étoile-corps de ballet"], bonne: 1, expl: "Danse, musique et décor sont créés séparément.", niv: 2 },
        { q: "Un danseur porte des chaises d'un coin à l'autre, sans expression. C'est :", choix: ["une tâche, typique de la post-modern dance", "une danse de caractère", "un adage classique", "une pantomime romantique racontant un conte"], bonne: 0, expl: "On fait une action, on ne joue pas un personnage.", niv: 3 },
        { q: "Le No manifesto (1965) est écrit par :", choix: ["Maguy Marin", "Martha Graham", "Yvonne Rainer", "Anna Pavlova, ballerine russe"], bonne: 2, expl: "Non au spectacle, à la virtuosité, à la star.", niv: 1 },
        { q: "Contre quelle danse la post-modern dance réagit-elle d'abord ?", choix: ["le flamenco", "le hip-hop", "la danse baroque de la cour de France", "la danse moderne de Graham et Limón"], bonne: 3, expl: "Technique codée et récits psychologiques.", niv: 2 },
        { q: "Pourquoi danser sur un toit ou dans un parc a-t-il un sens politique ?", choix: ["On sort du théâtre et de son public payant", "Les théâtres étaient fermés par la loi", "La lumière naturelle coûte moins", "Les pointes y glissent moins"], bonne: 0, expl: "On rapproche l'art de la vie et de tous.", niv: 3 },
        { q: "Quel mouvement plastique partage le goût des formes simples et répétées ?", choix: ["le romantisme", "l'impressionnisme", "le baroque", "l'art minimal"], bonne: 3, expl: "Robert Morris, Donald Judd, Sol LeWitt.", niv: 2 },
        { q: "Anna Halprin travaillait surtout :", choix: ["en Russie, au théâtre Bolchoï", "à l'Opéra de Paris", "en Californie, en plein air", "à Monte-Carlo"], bonne: 2, expl: "Tâches et improvisation.", niv: 1 },
        { q: "Un élève écrit : « La post-modern dance, c'est la danse actuelle. » Que corriger ?", choix: ["Il faut dire « danse classique moderne »", "C'est un courant daté, à New York dans les années 1960-1970", "C'est exact, rien à corriger", "Il faut parler des années 1830"], bonne: 1, expl: "Ne pas confondre avec « danse contemporaine ».", niv: 3 },
      ] },
    { chapitre: 'danse-8',
      fiche: `## La post-modern dance : artistes et œuvres

À l'écrit, il ne suffit pas de dire « la post-modern dance refuse la virtuosité » : il faut le montrer avec une œuvre précise, son auteur, sa date et ce qu'on y voit. Voici les références les plus utiles.

### Yvonne Rainer
- **Trio A** (**1966**) : une phrase d'environ 4 à 5 minutes, sans répétition, avec une **énergie égale** du début à la fin. Le regard **évite le public** : le danseur ne se met pas en valeur. Pensée pour être dansée par des danseurs comme par des amateurs.
- **Trio A with Flags** (**1970**) : des danseurs nus, un drapeau américain noué autour du cou, dansent Trio A. Une protestation contre la **censure** et contre la **guerre du Vietnam**.
- Son **No manifesto** (1965) résume le refus du spectacle et de la virtuosité.

### Steve Paxton
- **Satisfyin' Lover** (**1967**) : une trentaine de personnes ordinaires, en vêtements de tous les jours, traversent la scène en **marchant**, s'arrêtent, s'assoient. La marche devient danse ; chaque corps est différent.
- Il invente en **1972** le **contact improvisation** : deux partenaires improvisent à partir d'un **point de contact** et du **poids partagé** (rouler, porter, être porté). Pas de meneur, pas de genre : homme ou femme peut porter l'autre.

### Trisha Brown
- **Man Walking Down the Side of a Building** (**1970**) : un homme, attaché à un harnais, descend en marchant le **mur d'un immeuble** de New York. La pesanteur et la ville deviennent la matière de la danse.
- **Roof Piece** (début des années 1970) : des danseurs postés sur des **toits** de New York se transmettent un mouvement de proche en proche.
- **Accumulation** (**1971**) : un geste, puis le premier et un deuxième, puis trois... sur place.
- **Set and Reset** (**1983**) : décor de **Robert Rauschenberg**, musique de **Laurie Anderson**. Un mouvement fluide, des danseurs qui entrent et sortent des coulisses visibles.

### Lucinda Childs
- **Dance** (**1979**) : musique répétitive de **Philip Glass**, film de **Sol LeWitt** projeté sur un écran devant les danseurs. Des trajets simples, des pas sautillés et des pivots répétés, avec de légères variations : la parenté avec l'**art minimal** est évidente.
- Elle danse aussi dans **Einstein on the Beach** (1976) de Robert Wilson et Philip Glass.

### Simone Forti
- **Dance Constructions** (**1961**), dont **Huddle** : un groupe serré, debout, dont chaque membre escalade à son tour les autres. Une œuvre entre **sculpture vivante** et danse.

### Le collectif et l'héritage
- **Grand Union** (1970-1976) : un groupe d'improvisation collective, sans chef (Rainer, Paxton, Brown, d'autres).
- En France, ces idées nourrissent la **nouvelle danse française** des années 1980 et la **non-danse** des années 1990 (Jérôme Bel, par exemple), qui questionne à son tour le spectacle.

### Comment les utiliser dans une copie
- **Refus de la virtuosité** : Trio A, Satisfyin' Lover.
- **Danse et ville, lieux non conventionnels** : Man Walking Down the Side of a Building, Roof Piece.
- **Égalité, démocratie, genre** : contact improvisation, non-danseurs.
- **Engagement politique explicite** : Trio A with Flags.
- **Lien avec les arts plastiques et la musique** : Childs, Glass, LeWitt ; Brown, Rauschenberg.

### À retenir pour le bac
- Rainer : Trio A (1966), Trio A with Flags (1970).
- Paxton : Satisfyin' Lover (1967), contact improvisation (1972).
- Brown : Man Walking Down the Side of a Building (1970), Accumulation (1971).
- Childs : Dance (1979) avec Glass et LeWitt ; Forti : Huddle (1961).
- Piège : citer un nom sans dire ce qu'on voit dans l'œuvre.`,
      cartes: [
        { q: "Trio A ?", r: "Yvonne Rainer, 1966 : phrase sans répétition, énergie égale, regard qui évite le public." },
        { q: "Trio A with Flags ?", r: "1970 : danseurs nus, drapeau américain au cou ; contre la censure et la guerre du Vietnam." },
        { q: "Satisfyin' Lover ?", r: "Steve Paxton, 1967 : une trentaine de personnes ordinaires traversent la scène en marchant." },
        { q: "Contact improvisation ?", r: "Inventé par Steve Paxton en 1972 : improvisation à deux à partir d'un point de contact et du poids partagé." },
        { q: "Man Walking Down the Side of a Building ?", r: "Trisha Brown, 1970 : un homme en harnais descend en marchant le mur d'un immeuble." },
        { q: "Roof Piece ?", r: "Trisha Brown : des danseurs sur des toits de New York se transmettent un mouvement." },
        { q: "Accumulation ?", r: "Trisha Brown, 1971 : un geste, puis deux, puis trois, ajoutés à chaque reprise." },
        { q: "Set and Reset ?", r: "Trisha Brown, 1983 : décor de Rauschenberg, musique de Laurie Anderson." },
        { q: "Dance de Lucinda Childs ?", r: "1979 : musique de Philip Glass, film de Sol LeWitt projeté devant les danseurs ; trajets répétés." },
        { q: "Huddle ?", r: "Simone Forti, 1961 : un groupe serré dont chacun escalade les autres, entre sculpture et danse." },
        { q: "Grand Union ?", r: "Collectif d'improvisation (1970-1976) sans chef, avec Rainer, Paxton, Brown." },
        { q: "Héritage en France ?", r: "La nouvelle danse française des années 1980 et la non-danse des années 1990." },
        { q: "Quelle œuvre pour le lien danse-ville ?", r: "Man Walking Down the Side of a Building ou Roof Piece, de Trisha Brown." },
        { q: "Quelle œuvre pour un engagement politique explicite ?", r: "Trio A with Flags d'Yvonne Rainer (1970)." },
      ],
      quiz: [
        { q: "Qui a créé Trio A (1966) ?", choix: ["Lucinda Childs", "Trisha Brown", "Yvonne Rainer", "Simone Forti"], bonne: 2, expl: "Énergie égale, regard qui évite le public.", niv: 1 },
        { q: "Steve Paxton invente en 1972 :", choix: ["la notation Benesh pour le ballet", "le contact improvisation", "le ballet blanc", "le krump"], bonne: 1, expl: "Point de contact et poids partagé.", niv: 2 },
        { q: "Dans Man Walking Down the Side of a Building, un homme :", choix: ["reste immobile dans une vitrine de magasin", "danse sur pointes", "traverse un lac", "descend en marchant le mur d'un immeuble"], bonne: 3, expl: "Trisha Brown, 1970.", niv: 2 },
        { q: "Dance (1979) de Lucinda Childs a une musique de :", choix: ["Philip Glass", "Tchaïkovski", "Schubert", "Igor Stravinsky"], bonne: 0, expl: "Et un film de Sol LeWitt.", niv: 1 },
        { q: "Dans Satisfyin' Lover, les interprètes :", choix: ["marchent, s'arrêtent et s'assoient", "exécutent des fouettés", "dansent un pas de deux", "suivent une pantomime codée du XIXe siècle"], bonne: 0, expl: "Des personnes ordinaires.", niv: 2 },
        { q: "Pourquoi Trio A with Flags (1970) est-il un exemple d'engagement politique ?", choix: ["Les danseurs chantent l'hymne national", "La pièce est financée par l'armée", "Des corps nus portent le drapeau contre la censure et la guerre", "Elle se joue lors d'une élection"], bonne: 2, expl: "Le contexte du Vietnam et des lois sur le drapeau.", niv: 3 },
        { q: "Huddle (1961) est une œuvre de :", choix: ["Yvonne Rainer", "Simone Forti", "Maguy Marin", "Steve Paxton"], bonne: 1, expl: "Un groupe serré que chacun escalade.", niv: 1 },
        { q: "Le décor de Set and Reset (1983) est signé :", choix: ["Pablo Picasso", "Sol LeWitt", "Andy Warhol et ses sérigraphies", "Robert Rauschenberg"], bonne: 3, expl: "La musique est de Laurie Anderson.", niv: 2 },
        { q: "Quelle œuvre choisir pour montrer l'égalité des genres dans la danse ?", choix: ["Revelations d'Alvin Ailey", "le pas de deux du cygne noir", "la danse des petits cygnes", "le contact improvisation, où chacun peut porter l'autre"], bonne: 3, expl: "Pas de rôle réservé à l'homme ou à la femme.", niv: 3 },
        { q: "Grand Union est :", choix: ["une compagnie de ballet russe", "un collectif d'improvisation sans chef", "un festival de hip-hop créé en banlieue parisienne", "un théâtre parisien"], bonne: 1, expl: "1970-1976, avec Rainer, Paxton, Brown.", niv: 2 },
        { q: "Accumulation (1971) est de :", choix: ["Steve Paxton", "Lucinda Childs", "Trisha Brown", "Anna Halprin"], bonne: 2, expl: "Un geste ajouté à chaque reprise.", niv: 1 },
        { q: "Pour illustrer « la danse sort du théâtre », quelle paire est la plus juste ?", choix: ["Roof Piece et Man Walking Down the Side of a Building", "Trio A et Dance", "Huddle et Accumulation", "Set and Reset et Satisfyin' Lover"], bonne: 0, expl: "Toits et murs de New York.", niv: 3 },
      ] },
    { chapitre: 'danse-9',
      fiche: `## Maguy Marin : un parcours engagé

Le programme limitatif demande d'**appréhender le regard porté sur le monde par Maguy Marin tout au long de son parcours**, en s'appuyant sur des pièces **parfois radicales** et aux **esthétiques sans cesse renouvelées**. Il faut donc connaître sa vie d'artiste, ses grandes idées et plusieurs pièces de périodes différentes.

### Les étapes d'un parcours
- Née en **1951** à **Toulouse**, dans une famille de **républicains espagnols** réfugiés en France après la guerre civile. Cette histoire de l'exil et de la pauvreté nourrit son regard sur les « vaincus ».
- Formation **classique** au conservatoire de Toulouse, danseuse au Ballet de Strasbourg, puis élève de **Mudra**, l'école de **Maurice Béjart** à Bruxelles, où l'on mêle danse, théâtre, chant et rythme. Elle danse dans la compagnie de Béjart.
- **1978** : elle fonde une compagnie avec Daniel Ambash et remporte un prix au **concours chorégraphique de Bagnolet**, tremplin de la jeune danse française.
- **1981** : création de **May B**, sa pièce la plus célèbre. La compagnie s'installe à **Créteil**, qui devient un **Centre chorégraphique national** (CCN).
- **1998-2011** : directrice du CCN de **Rillieux-la-Pape**, dans une banlieue populaire près de Lyon. Elle y lie création et vie du quartier.
- Ensuite, elle travaille à **Toulouse**, puis à **Ramdam**, un lieu de création près de Lyon, ouvert à d'autres artistes.
- Depuis **1987**, elle collabore avec le musicien **Denis Mariotte** (musique, dispositifs scéniques).
- **2016** : **Lion d'or** de la Biennale de Venise pour l'ensemble de son œuvre.

### Un regard sur le monde
- **L'humanité fragile** : des corps ordinaires, usés, abîmés, qui avancent ensemble malgré tout (May B).
- **La critique de la société** : la consommation, le travail, l'argent, le capitalisme (Umwelt, Deux mille dix-sept), les **déchets** que l'on produit.
- **La violence de l'histoire** : guerres, exclusion, oubli des plus faibles (Les applaudissements ne se mangent pas, 2002 ; Description d'un combat, 2009 ; Salves, 2010 ; Y aller voir de plus près, 2021).
- **Le collectif** : la difficulté et la nécessité de **vivre ensemble**. Pour elle, l'art est un lieu de **résistance** et de pensée partagée.

### Une esthétique sans cesse renouvelée
- Elle passe par le **théâtre dansé**, le **grotesque**, le **masque**, le **conte relu** (Cendrillon, 1985), la **répétition obsédante**, le **dispositif** (miroirs et vent d'Umwelt), le **rythme pur** (BiT, 2014).
- Elle refuse la virtuosité pour elle-même : **marcher**, **trébucher**, **se répéter**, **rester immobile** sont des choix qui dérangent et font penser.
- Certaines pièces sont **radicales** : peu de « danse » au sens attendu, de longues répétitions, de l'obscurité, du bruit. Le public est parfois dérouté : c'est voulu.

### Repères d'œuvres
- **May B** (1981) ; **Cendrillon** (1985, Ballet de l'Opéra de Lyon) ; **Eden** (1986) ; **Groosland** (1989) ; **Umwelt** (2004) ; **Salves** (2010) ; **BiT** (2014) ; **Deux mille dix-sept** (2017) ; **Y aller voir de plus près** (2021).

### À retenir pour le bac
- Née en 1951 à Toulouse, famille de républicains espagnols exilés.
- Mudra (Béjart), Bagnolet 1978, Créteil, puis CCN de Rillieux-la-Pape (1998-2011).
- Un regard sur les plus fragiles, la société de consommation, la violence de l'histoire.
- Esthétiques variées : théâtre dansé, masques, dispositifs, rythme.
- Piège : ne citer que May B ; le programme demande « tout au long de son parcours ».`,
      cartes: [
        { q: "Ce que le programme demande sur Maguy Marin ?", r: "Le regard porté sur le monde tout au long de son parcours, à travers des pièces parfois radicales aux esthétiques renouvelées." },
        { q: "Naissance et origine de Maguy Marin ?", r: "1951, Toulouse, famille de républicains espagnols exilés." },
        { q: "Mudra ?", r: "L'école de Maurice Béjart à Bruxelles, où Maguy Marin s'est formée." },
        { q: "Concours de Bagnolet ?", r: "Concours chorégraphique tremplin de la jeune danse française ; Maguy Marin y est primée en 1978." },
        { q: "Où s'installe sa compagnie en 1981 ?", r: "À Créteil, qui devient un Centre chorégraphique national." },
        { q: "CCN de Rillieux-la-Pape ?", r: "Elle le dirige de 1998 à 2011, dans une banlieue populaire près de Lyon." },
        { q: "Denis Mariotte ?", r: "Musicien, son collaborateur depuis 1987 (musique, dispositifs)." },
        { q: "Distinction de 2016 ?", r: "Le Lion d'or de la Biennale de Venise pour l'ensemble de son œuvre." },
        { q: "Ramdam ?", r: "Lieu de création près de Lyon où elle travaille et accueille d'autres artistes." },
        { q: "Grands thèmes de Maguy Marin ?", r: "L'humanité fragile, la société de consommation, la violence de l'histoire, le vivre ensemble." },
        { q: "Pourquoi parler de pièces « radicales » ?", r: "Peu de danse attendue, répétitions longues, bruit, obscurité : des choix qui dérangent pour faire penser." },
        { q: "Cendrillon de Maguy Marin ?", r: "1985, Ballet de l'Opéra de Lyon : un conte relu avec des danseurs masqués en poupées." },
        { q: "Trois pièces sur la violence de l'histoire ?", r: "Description d'un combat (2009), Salves (2010), Y aller voir de plus près (2021)." },
      ],
      quiz: [
        { q: "Maguy Marin est née en 1951 à :", choix: ["Lyon", "Toulouse", "Bruxelles", "Madrid"], bonne: 1, expl: "Dans une famille de républicains espagnols exilés.", niv: 1 },
        { q: "Mudra, où elle se forme, est l'école de :", choix: ["Pina Bausch", "Merce Cunningham", "Marius Petipa", "Maurice Béjart"], bonne: 3, expl: "À Bruxelles : danse, théâtre, chant, rythme.", niv: 2 },
        { q: "De 1998 à 2011, Maguy Marin dirige le CCN de :", choix: ["Rillieux-la-Pape", "Créteil", "Montpellier, ville de festival", "Grenoble"], bonne: 0, expl: "Une banlieue populaire près de Lyon ; Créteil, c'était avant.", niv: 2 },
        { q: "Son collaborateur musical depuis 1987 est :", choix: ["John Cage", "Philip Glass", "Denis Mariotte", "Laurie Anderson"], bonne: 2, expl: "Musique et dispositifs scéniques.", niv: 1 },
        { q: "En 2016, elle reçoit :", choix: ["le prix Nobel", "la Palme d'or du festival de Cannes 2016", "un Oscar", "le Lion d'or de la Biennale de Venise"], bonne: 3, expl: "Pour l'ensemble de son œuvre.", niv: 2 },
        { q: "Pourquoi l'histoire familiale de Maguy Marin éclaire-t-elle son œuvre ?", choix: ["Sa famille dirigeait une compagnie de ballet", "L'exil et la pauvreté nourrissent son attention aux vaincus", "Elle a grandi à l'Opéra de Paris", "Ses parents étaient danseurs de flamenco"], bonne: 1, expl: "Des républicains espagnols réfugiés après la guerre civile.", niv: 3 },
        { q: "Sa pièce la plus célèbre, créée en 1981, est :", choix: ["BiT", "Umwelt", "May B", "Salves"], bonne: 2, expl: "Jouée des centaines de fois dans le monde.", niv: 1 },
        { q: "Quel thème traverse Umwelt et Deux mille dix-sept ?", choix: ["la critique de la consommation et de l'argent", "l'amour courtois", "la vie des cygnes", "la conquête spatiale et les voyages vers la Lune"], bonne: 0, expl: "Objets, déchets, capitalisme.", niv: 2 },
        { q: "Le programme demande d'étudier Maguy Marin « tout au long de son parcours ». Quelle copie répond le mieux ?", choix: ["Elle raconte la jeunesse de la chorégraphe", "Elle détaille May B scène par scène, sans parler d'autre pièce", "Elle compare May B (1981), Umwelt (2004) et BiT (2014)", "Elle cite dix titres sans les décrire"], bonne: 2, expl: "Plusieurs périodes, des œuvres décrites.", niv: 3 },
        { q: "En 1978, Maguy Marin est primée :", choix: ["au concours de Bagnolet", "à la Biennale de Venise", "au festival d'Avignon, dans la cour d'honneur", "aux Jeux olympiques"], bonne: 0, expl: "Le tremplin de la jeune danse française.", niv: 2 },
        { q: "Cendrillon (1985) est créée pour :", choix: ["le Mariinsky", "le Ballet Cullberg", "le Judson Dance Theater de New York", "le Ballet de l'Opéra de Lyon"], bonne: 3, expl: "Avec des danseurs masqués en poupées.", niv: 1 },
        { q: "Une spectatrice trouve qu'il y a « peu de danse » dans une pièce de Maguy Marin. Comment l'expliquer ?", choix: ["La compagnie manquait de répétitions", "Le refus de la danse attendue est un choix radical qui fait penser", "Les danseurs étaient blessés ce soir-là", "La pièce était une version pour enfants"], bonne: 1, expl: "La radicalité est voulue.", niv: 3 },
      ] },
    { chapitre: 'danse-10',
      fiche: `## Maguy Marin : quatre œuvres à connaître

Pour parler de Maguy Marin, il faut pouvoir décrire précisément quelques pièces de périodes différentes. Ces quatre œuvres couvrent plus de trente ans et montrent des esthétiques très différentes au service d'un même regard sur l'humain.

### May B (1981)
- Inspirée de l'univers de **Samuel Beckett** (En attendant Godot, Fin de partie). Dix interprètes.
- Corps et visages **blanchis à l'argile**, longues chemises de nuit sales : des êtres usés, sans âge, presque des morts-vivants.
- Ils avancent en **groupe serré**, à **petits pas traînants**, se bousculent, grognent, rient, mangent un gâteau d'anniversaire avec avidité. À la fin, certains partent avec des **valises**.
- Musique : un **lied de Schubert**, des fanfares, et Jesus' Blood Never Failed Me Yet de **Gavin Bryars**, la voix d'un sans-abri qui chante en boucle.
- Sens : une humanité fragile et grotesque, tendre et cruelle, qui continue à vivre ensemble. Une **rupture** avec le corps glorieux du ballet. Jouée des centaines de fois depuis 1981.

### Cendrillon (1985)
- Créée pour le **Ballet de l'Opéra de Lyon**, sur la musique de **Prokofiev**.
- Le conte devient un **jeu d'enfants** dans une **maison de poupées** à étages. Les danseurs portent des **masques de poupées** et des costumes rembourrés.
- Une technique classique est détournée : corps raides et mécaniques, gestes de jouets.
- Sens : relire un conte pour interroger les rêves qu'on fabrique pour les enfants et le **destin tout tracé** des filles. Exemple de **relecture** d'un ballet, comme les Lacs des cygnes du programme.

### Umwelt (2004)
- Le titre allemand signifie « **monde environnant** ».
- Au fond, une rangée de **panneaux-miroirs** ; un **vent** constant souffle sur le plateau ; un **fil tendu** frotte des guitares électriques et produit un **bourdonnement** sans fin.
- Neuf interprètes surgissent entre les panneaux, font une **action quotidienne** de quelques secondes (manger, s'embrasser, se battre, jeter un objet), disparaissent, reviennent. Les **déchets** s'accumulent au sol.
- Sens : une humanité prise dans une **répétition mécanique**, une société qui consomme et salit. Une pièce **radicale** : à sa création, une partie du public a protesté ou quitté la salle.

### BiT (2014)
- Une pièce sur le **rythme** : six interprètes, souvent **en chaîne**, se tenant par la main comme dans les **danses traditionnelles** (farandoles), sur un plateau aux **pentes** qui rendent l'équilibre difficile.
- Le rythme collectif, d'abord joyeux, laisse apparaître des images de **domination** et de violence : ce dont l'humain est capable quand le lien entre les êtres se défait.
- Sens : le collectif peut libérer ou écraser.

### Comparer les quatre pièces
- **Le corps** : usé (May B), mécanique et masqué (Cendrillon), ordinaire et pressé (Umwelt), pris dans une chaîne (BiT).
- **Le temps** : lenteur traînante, répétition en boucle, pulsation.
- **Le regard sur le monde** : fragilité humaine, rêves imposés, consommation, violence du groupe.

### À retenir pour le bac
- May B (1981) : Beckett, corps blanchis, groupe à petits pas, humanité fragile.
- Cendrillon (1985) : maison de poupées, masques, conte relu.
- Umwelt (2004) : miroirs, vent, gestes quotidiens répétés, déchets.
- BiT (2014) : rythme, chaînes, plateau en pente, violence du groupe.
- Piège : décrire sans dire le sens, ou interpréter sans décrire.`,
      cartes: [
        { q: "May B : inspiration ?", r: "L'univers de Samuel Beckett (En attendant Godot, Fin de partie)." },
        { q: "May B : aspect des interprètes ?", r: "Corps et visages blanchis à l'argile, chemises de nuit sales : des êtres usés, sans âge." },
        { q: "May B : mouvement principal ?", r: "Un groupe serré qui avance à petits pas traînants." },
        { q: "May B : musiques ?", r: "Un lied de Schubert, des fanfares, et Jesus' Blood Never Failed Me Yet de Gavin Bryars." },
        { q: "May B : sens ?", r: "Une humanité fragile et grotesque qui continue à vivre ensemble ; rupture avec le corps glorieux du ballet." },
        { q: "Cendrillon : décor et costumes ?", r: "Une maison de poupées à étages ; masques de poupées et costumes rembourrés." },
        { q: "Cendrillon : musique ?", r: "Prokofiev." },
        { q: "Cendrillon : sens ?", r: "Relire un conte pour interroger les rêves et le destin tout tracé imposés aux filles." },
        { q: "Umwelt : sens du titre ?", r: "« Monde environnant », en allemand." },
        { q: "Umwelt : dispositif ?", r: "Panneaux-miroirs, vent constant, fil tendu sur des guitares électriques qui bourdonne." },
        { q: "Umwelt : action des danseurs ?", r: "Des gestes quotidiens de quelques secondes, répétés en boucle ; les déchets s'accumulent." },
        { q: "Umwelt : réaction du public à la création ?", r: "Une partie a protesté ou quitté la salle : une pièce radicale." },
        { q: "BiT : sujet ?", r: "Le rythme collectif, en chaînes de danses traditionnelles, qui glisse vers la domination et la violence." },
        { q: "BiT : difficulté du plateau ?", r: "Des pentes qui rendent l'équilibre difficile." },
      ],
      quiz: [
        { q: "May B s'inspire de l'univers de :", choix: ["Samuel Beckett", "Shakespeare", "Molière", "Victor Hugo et ses romans"], bonne: 0, expl: "En attendant Godot, Fin de partie.", niv: 1 },
        { q: "Dans May B, les interprètes ont :", choix: ["le visage caché sous un grand masque de poupée et une perruque", "des tutus blancs et des pointes", "le corps blanchi à l'argile et des chemises de nuit sales", "des costumes de super-héros"], bonne: 2, expl: "Des êtres usés, sans âge.", niv: 2 },
        { q: "Le dispositif d'Umwelt (2004) comprend :", choix: ["des écrans vidéo géants placés autour du public", "un lac et des cygnes", "une maison de poupées", "des panneaux-miroirs et un vent constant"], bonne: 3, expl: "Plus un fil qui frotte des guitares.", niv: 2 },
        { q: "Cendrillon (1985) de Maguy Marin se déroule dans :", choix: ["une usine", "une maison de poupées", "un supermarché de banlieue", "une église"], bonne: 1, expl: "Les danseurs portent des masques de poupées.", niv: 1 },
        { q: "« Umwelt » signifie :", choix: ["fin du monde", "monde perdu", "monde environnant", "nouveau monde"], bonne: 2, expl: "Un mot allemand.", niv: 2 },
        { q: "Dans Umwelt, que dit la répétition des gestes quotidiens et l'accumulation des déchets ?", choix: ["La beauté de la virtuosité", "La joie d'une fête populaire", "L'histoire d'amour d'un prince", "Une humanité mécanique dans une société qui consomme et salit"], bonne: 3, expl: "Un regard critique sur la consommation.", niv: 3 },
        { q: "La musique de Cendrillon (1985) est de :", choix: ["Prokofiev", "Tchaïkovski", "Philip Glass", "Gavin Bryars"], bonne: 0, expl: "Gavin Bryars est dans May B.", niv: 1 },
        { q: "BiT (2014) est surtout une pièce sur :", choix: ["la vie de Beckett", "le rythme et le collectif", "un conte de fées", "la danse sur pointes des ballerines"], bonne: 1, expl: "Chaînes, farandoles, pentes.", niv: 2 },
        { q: "Quelle phrase compare le mieux May B et Umwelt ?", choix: ["Elles racontent un même conte de fées avec des masques", "Corps ordinaires : fragiles dans May B, mécaniques dans Umwelt", "Elles utilisent des tutus, des pointes et la musique de Tchaïkovski", "Umwelt reprend la chorégraphie de May B, en version plus courte"], bonne: 1, expl: "Un point commun, puis une différence.", niv: 3 },
        { q: "Dans May B, la voix qui chante en boucle est celle :", choix: ["d'un sans-abri, enregistrée par Gavin Bryars", "de Maguy Marin elle-même", "d'un chœur d'opéra enregistré à Vienne en 1981", "d'un enfant"], bonne: 0, expl: "Jesus' Blood Never Failed Me Yet.", niv: 2 },
        { q: "Combien d'interprètes dans May B ?", choix: ["40", "2", "4", "10"], bonne: 3, expl: "Un groupe serré de dix.", niv: 1 },
        { q: "Pour illustrer « le collectif peut libérer ou écraser », quelle pièce est la plus juste ?", choix: ["Eden, pour son duo amoureux", "Cendrillon, pour sa maison de poupées et ses masques", "BiT, où la chaîne joyeuse glisse vers la domination", "Umwelt, pour ses miroirs"], bonne: 2, expl: "Le rythme commun devient violence.", niv: 3 },
      ] },
    { chapitre: 'danse-11',
      fiche: `## Identités et dialogues interculturels : de la rue à la scène

Deux axes du thème de terminale sont « la danse et les questions d'identité » et « la danse et les dialogues interculturels ». La danse hip-hop, née dans la rue et arrivée sur les grandes scènes, est un exemple parfait pour les traiter. C'est aussi le courant « De la rue à la scène » du nouveau programme limitatif (terminale à partir du bac 2028) : ces repères te serviront de toute façon.

### Naissance du hip-hop
- **Bronx, New York, début des années 1970** : des fêtes de quartier où le DJ **Kool Herc** passe en boucle les passages rythmiques des disques (les « breaks »). Les danseurs qui s'y lancent sont les **b-boys** et **b-girls** : c'est le **breaking**.
- **Afrika Bambaataa** fonde la **Zulu Nation** : remplacer la violence des gangs par des **battles** de danse, de rap et de graffiti. La culture hip-hop réunit DJ, rap, graffiti et danse.
- Sur la côte ouest, d'autres styles naissent : le **locking** et le **popping** (contractions saccadées).
- Le vocabulaire du breaking : **top rock** (debout), **footwork** (au sol), **power moves** (rotations), **freeze** (arrêt figé). On danse dans un **cercle**, en **battle**, face à d'autres danseurs.
- À Los Angeles, au début des années 2000, naît le **krump** : une danse explosive, rageuse, qui exprime la colère et la douleur des quartiers.

### L'arrivée en France
- **1984** : l'émission **H.I.P. H.O.P.** sur TF1, animée par **Sidney**, fait découvrir le breaking à toute une génération.
- Années 1990 : des danseurs passent du cercle à la **scène**. Le festival **Suresnes Cités Danse** (1993) et la **Biennale de la danse de Lyon** les font rencontrer des chorégraphes contemporains.
- **Kader Attou** et **Mourad Merzouki** fondent la compagnie **Accrorap** (1989) ; Merzouki crée ensuite **Käfig** (1996). Tous deux dirigeront des **Centres chorégraphiques nationaux** (La Rochelle, Créteil).
- **Pixel** (2014, Merzouki avec Adrien M et Claire B) : des danseurs hip-hop dans des projections numériques interactives.
- **2024** : le breaking est discipline olympique aux Jeux de **Paris**.

### Ce que la scène change
- On passe de l'**improvisation** et du **défi** à l'**écriture** d'une pièce, avec dramaturgie, lumière, musique choisie.
- **Hybridation** : hip-hop mêlé à la danse contemporaine, au cirque, à la musique classique.
- **Débat** : la reconnaissance par l'institution est une victoire, mais certains craignent que la danse perde son lien avec la rue, son esprit de défi et sa liberté.
- **Les Indes galantes** : film de **Clément Cogitore** (2017) où des danseurs de **krump** dansent sur Rameau, puis mise en scène à l'**Opéra Bastille** (2019) avec la chorégraphe **Bintou Dembélé**. La rencontre entre un opéra baroque et une danse des banlieues interroge qui a le droit d'occuper les grandes scènes.

### Identités et dialogues interculturels
- La danse dit **qui l'on est** : une origine, un quartier, un genre, une génération. Elle peut aussi **déjouer les clichés** (b-girls dans un monde d'hommes, danseurs de banlieue à l'Opéra).
- **Akram Khan** mêle le **kathak** (danse classique de l'Inde du Nord) et la danse contemporaine ; avec **Sidi Larbi Cherkaoui**, il crée **Zero Degrees** (2005) sur l'identité et les frontières.
- **Germaine Acogny**, fondatrice de l'**École des Sables** au Sénégal, invente une technique de danse africaine contemporaine.
- **Dada Masilo** mêle ballet et danses sud-africaines dans son Swan Lake (2010).
- Questions à poser : **métissage** ou **appropriation** ? Dialogue d'égal à égal ou exotisme ?

### À retenir pour le bac
- Bronx, années 1970 : Kool Herc, Afrika Bambaataa, b-boys, battles.
- France : émission H.I.P. H.O.P. (1984), Suresnes Cités Danse (1993), Käfig, Pixel (2014).
- Du cercle à la scène : improvisation devenue écriture, hybridation, débat sur l'institution.
- Akram Khan, Germaine Acogny, Dada Masilo : dialogues interculturels.
- Piège : présenter le hip-hop comme une simple mode, sans son histoire ni son propos.`,
      cartes: [
        { q: "Où et quand naît le breaking ?", r: "Dans le Bronx, à New York, au début des années 1970." },
        { q: "Rôle de Kool Herc ?", r: "DJ qui passe en boucle les breaks des disques ; les danseurs s'y lancent : les b-boys." },
        { q: "Zulu Nation ?", r: "Mouvement d'Afrika Bambaataa : remplacer la violence des gangs par des battles artistiques." },
        { q: "Battle ?", r: "Un défi où des danseurs s'affrontent tour à tour, en improvisation, dans un cercle." },
        { q: "Freeze ?", r: "Un arrêt figé, souvent en équilibre, qui termine un passage de breaking." },
        { q: "Krump ?", r: "Danse explosive née à Los Angeles au début des années 2000, qui exprime colère et douleur." },
        { q: "Émission H.I.P. H.O.P. ?", r: "1984, sur TF1, animée par Sidney : elle fait découvrir le breaking en France." },
        { q: "Suresnes Cités Danse ?", r: "Festival créé en 1993 qui fait passer le hip-hop à la scène." },
        { q: "Käfig ?", r: "Compagnie de Mourad Merzouki (1996), issue d'Accrorap, fondée avec Kader Attou en 1989." },
        { q: "Pixel ?", r: "Pièce de Mourad Merzouki (2014) avec Adrien M et Claire B : hip-hop et projections numériques interactives." },
        { q: "Les Indes galantes de Clément Cogitore ?", r: "Film de 2017 avec des danseurs de krump sur Rameau, puis opéra à Bastille en 2019 avec Bintou Dembélé." },
        { q: "Akram Khan ?", r: "Chorégraphe qui mêle le kathak indien et la danse contemporaine ; Zero Degrees (2005) avec Cherkaoui." },
        { q: "Germaine Acogny ?", r: "Fondatrice de l'École des Sables au Sénégal, technique de danse africaine contemporaine." },
        { q: "Débat sur le hip-hop sur scène ?", r: "Reconnaissance par l'institution, mais risque de perdre le lien avec la rue et l'esprit de défi." },
      ],
      quiz: [
        { q: "Le breaking naît au début des années 1970 :", choix: ["à Lyon", "à Paris", "dans un théâtre de Saint-Pétersbourg", "dans le Bronx, à New York"], bonne: 3, expl: "Dans des fêtes de quartier.", niv: 1 },
        { q: "Afrika Bambaataa fonde la Zulu Nation pour :", choix: ["former des danseurs classiques", "remplacer la violence des gangs par des battles artistiques", "organiser des concours de ballet", "créer une chaîne de télévision"], bonne: 1, expl: "DJ, rap, graffiti et danse.", niv: 2 },
        { q: "En France, l'émission H.I.P. H.O.P. est diffusée en :", choix: ["1995", "1990", "1984", "2001"], bonne: 2, expl: "Sur TF1, animée par Sidney.", niv: 2 },
        { q: "Un arrêt figé qui termine un passage de breaking s'appelle :", choix: ["un freeze", "un fouetté", "un canon", "un adage"], bonne: 0, expl: "Souvent en équilibre sur les mains.", niv: 1 },
        { q: "Mourad Merzouki crée la compagnie :", choix: ["Cullberg", "Käfig", "Grand Union", "Mudra"], bonne: 1, expl: "En 1996, après Accrorap.", niv: 2 },
        { q: "Quel risque certains voient-ils dans l'entrée du hip-hop dans les théâtres ?", choix: ["Devoir danser sur pointes", "Ne plus pouvoir utiliser de musique", "Perdre le lien avec la rue et l'esprit de défi", "Être interdit aux jeunes de moins de dix-huit ans"], bonne: 2, expl: "La reconnaissance a un prix.", niv: 3 },
        { q: "Le krump naît :", choix: ["à Bruxelles, en 1970", "à Paris, en 1984", "au Sénégal, à l'École des Sables, en 1950", "à Los Angeles, au début des années 2000"], bonne: 3, expl: "Une danse de colère et de douleur.", niv: 1 },
        { q: "Akram Khan mêle la danse contemporaine et :", choix: ["le kathak indien", "le flamenco", "le tango", "la danse baroque française"], bonne: 0, expl: "Danse classique de l'Inde du Nord.", niv: 2 },
        { q: "Pourquoi Les Indes galantes à l'Opéra Bastille (2019) interroge-t-il les identités ?", choix: ["Des danseurs de banlieue occupent une scène réservée à une autre culture", "L'opéra y est joué sans musique", "Les chanteurs y dansent sur pointes", "Le public y est choisi par tirage au sort"], bonne: 0, expl: "Qui a le droit d'occuper les grandes scènes ?", niv: 3 },
        { q: "Le festival Suresnes Cités Danse est créé en :", choix: ["1981", "1973", "2014", "1993"], bonne: 3, expl: "Il fait passer le hip-hop du cercle à la scène.", niv: 2 },
        { q: "En 2024, le breaking est :", choix: ["interdit en France", "discipline olympique à Paris", "inscrit au programme de l'Opéra", "remplacé par le krump"], bonne: 1, expl: "Aux Jeux de Paris.", niv: 1 },
        { q: "Une copie oppose « danse de rue » et « vraie danse ». Quelle objection lui faire ?", choix: ["La danse de rue est la seule vraie danse", "Le hip-hop n'existe plus aujourd'hui", "Pixel ou Käfig montrent une écriture chorégraphique à part entière", "Le ballet est né dans la rue"], bonne: 2, expl: "Le passage à la scène a produit des œuvres écrites.", niv: 3 },
      ] },
    { chapitre: 'danse-12',
      fiche: `## Danse, technologies, consommation et écologie

Trois autres axes du thème de terminale : « la danse et les avancées scientifiques et technologiques », « la danse et les biens culturels de consommation », « la danse et les questions d'écologie ». Ils te donnent des exemples pour élargir une copie et la relier à d'autres arts.

### Danse et technologies
- **Loïe Fuller** (fin du XIXe siècle) : sa **danse serpentine** fait tournoyer d'immenses voiles prolongés par des baguettes, éclairés par la **lumière électrique** colorée, nouveauté de l'époque. Elle dépose des **brevets** pour ses inventions. Le corps disparaît derrière des formes de lumière.
- **Merce Cunningham** : dans **Variations V** (1965, avec John Cage), les mouvements des danseurs déclenchent des sons grâce à des antennes et des cellules. À partir de 1989, il compose avec le logiciel **LifeForms**. **Biped** (1999) projette des silhouettes numériques issues de la **capture de mouvement**.
- **Adrien M et Claire B** : des projections numériques qui réagissent aux corps (Pixel avec Mourad Merzouki, 2014 ; Hakanaï, 2013, une danseuse dans un cube d'images).
- Questions : la machine **augmente**-t-elle le corps ou le **remplace**-t-elle ? Le spectateur regarde-t-il encore le danseur ou l'image ? La technologie est-elle un outil ou un sujet critique ?

### Danse et biens culturels de consommation
- La danse est aussi un **produit** : comédie musicale, clip, publicité, jeux vidéo, défis dansés des réseaux sociaux. Le clip **Thriller** (1983) de Michael Jackson a fait danser le monde entier sur la même chorégraphie.
- **Jérôme Bel**, **The show must go on** (2001) : sur des tubes pop, les danseurs font simplement ce que disent les paroles (danser quand la chanson dit « let's dance », disparaître dans le noir). La pièce interroge la culture de masse et l'attente du public.
- **Maguy Marin** critique la consommation dans **Umwelt** (2004) et **Deux mille dix-sept** (2017).
- Le **pop art** (Andy Warhol) avait déjà fait des objets de consommation un sujet d'art.
- Questions : à qui appartient un pas de danse ? Des danseurs ont attaqué en justice un jeu vidéo qui vendait leurs pas comme « danses » de personnages. Le succès commercial vide-t-il la danse de son sens ?

### Danse et écologie
- **Anna Halprin** : danses en plein air, rituels collectifs comme **Planetary Dance** (à partir de 1981), où des participants du monde entier dansent pour la paix et la Terre.
- **Pina Bausch** : le plateau couvert de **terre** du Sacre du printemps (1975), le champ d'**œillets** de Nelken (1982). La matière naturelle change la manière de bouger.
- **Danse in situ** : danser dans un paysage, une forêt, au bord de la mer, pour faire voir le lieu autrement, comme le **land art** en arts plastiques.
- La danse peut aussi agir par ses **pratiques** : décors réutilisés, tournées moins lointaines, rapport plus sobre à la technique.
- Questions : la danse montre-t-elle la nature comme décor ou comme partenaire ? Peut-elle changer notre rapport au vivant ?

### Utiliser ces axes dans une copie
- Un axe sert à **élargir** : après une analyse de Maguy Marin ou de la post-modern dance, un exemple de Loïe Fuller ou de Jérôme Bel montre une **culture variée**.
- Toujours relier l'exemple au **sujet** : un nom sans lien ne rapporte rien.

### À retenir pour le bac
- Loïe Fuller : danse serpentine et lumière électrique.
- Cunningham : Variations V, LifeForms, Biped et capture de mouvement.
- Jérôme Bel, The show must go on (2001) : danse et culture de masse.
- Halprin, Planetary Dance ; Bausch, terre et œillets ; danse in situ.
- Piège : citer une technologie comme un gadget, sans dire ce qu'elle change pour le corps et le regard.`,
      cartes: [
        { q: "Danse serpentine ?", r: "Danse de Loïe Fuller : d'immenses voiles tournoyants éclairés par la lumière électrique colorée." },
        { q: "Pourquoi Loïe Fuller dépose-t-elle des brevets ?", r: "Pour protéger ses inventions d'éclairage et de costume." },
        { q: "Variations V ?", r: "Cunningham et Cage, 1965 : les mouvements des danseurs déclenchent des sons." },
        { q: "LifeForms ?", r: "Logiciel avec lequel Merce Cunningham compose à partir de 1989." },
        { q: "Biped ?", r: "Cunningham, 1999 : silhouettes numériques projetées, issues de la capture de mouvement." },
        { q: "Adrien M et Claire B ?", r: "Artistes du numérique : projections qui réagissent aux corps (Pixel, Hakanaï)." },
        { q: "The show must go on ?", r: "Jérôme Bel, 2001 : sur des tubes pop, les danseurs font ce que disent les paroles." },
        { q: "Danse et biens de consommation : exemples ?", r: "Clips (Thriller, 1983), comédies musicales, jeux vidéo, défis dansés des réseaux sociaux." },
        { q: "Planetary Dance ?", r: "Rituel collectif d'Anna Halprin, à partir de 1981, pour la paix et la Terre." },
        { q: "Le Sacre du printemps de Pina Bausch ?", r: "1975 : le plateau est couvert de terre, qui salit et alourdit les corps." },
        { q: "Nelken ?", r: "Pina Bausch, 1982 : un plateau couvert d'œillets." },
        { q: "Danse in situ ?", r: "Une danse créée pour un lieu précis, souvent un paysage, pour le faire voir autrement." },
        { q: "Question critique sur la technologie ?", r: "La machine augmente-t-elle le corps ou le remplace-t-elle ? Que regarde le spectateur ?" },
        { q: "À quoi sert un axe dans une copie ?", r: "À élargir avec des exemples variés, toujours reliés au sujet." },
      ],
      quiz: [
        { q: "La danse serpentine est associée à :", choix: ["Maguy Marin", "Yvonne Rainer", "Loïe Fuller", "Mats Ek"], bonne: 2, expl: "Voiles tournoyants et lumière électrique.", niv: 1 },
        { q: "Dans Variations V (1965), les mouvements des danseurs :", choix: ["déclenchent des sons", "sont dessinés au sol", "suivent un récit", "sont filmés en direct pour la télévision"], bonne: 0, expl: "Antennes et cellules, avec John Cage.", niv: 2 },
        { q: "Biped (1999) de Cunningham utilise :", choix: ["un lac artificiel", "la capture de mouvement", "des masques de poupées en carton", "des tubes pop"], bonne: 1, expl: "Silhouettes numériques projetées.", niv: 2 },
        { q: "The show must go on (2001) est une pièce de :", choix: ["Pina Bausch", "Trisha Brown", "Akram Khan", "Jérôme Bel"], bonne: 3, expl: "Les danseurs font ce que disent les paroles.", niv: 1 },
        { q: "Quel axe du thème illustre le mieux le clip Thriller (1983) ?", choix: ["la danse et les biens culturels de consommation", "la danse et l'écologie", "la danse et les sciences", "la danse et les réinterprétations du Lac des cygnes"], bonne: 0, expl: "Une chorégraphie diffusée en masse.", niv: 2 },
        { q: "Pourquoi le plateau couvert de terre du Sacre de Pina Bausch (1975) peut-il servir l'axe écologie ?", choix: ["Elle évite de régler les lumières", "La terre sert d'isolant pour le son", "Elle remplace les costumes", "La matière naturelle devient partenaire et change le mouvement"], bonne: 3, expl: "Les corps s'alourdissent et se salissent.", niv: 3 },
        { q: "Planetary Dance est un rituel collectif créé par :", choix: ["Dada Masilo", "Lucinda Childs", "Anna Halprin", "Loïe Fuller"], bonne: 2, expl: "À partir de 1981.", niv: 1 },
        { q: "Une danse créée pour un paysage précis est dite :", choix: ["en dehors", "in situ", "rétrograde", "de caractère"], bonne: 1, expl: "Comme le land art en arts plastiques.", niv: 2 },
        { q: "Quelle question critique poser sur la danse numérique ?", choix: ["Faut-il des chaussons à pointes pour danser devant un écran ?", "Combien coûte un projecteur ?", "Les danseurs savent-ils programmer ?", "L'image attire-t-elle le regard au détriment du danseur ?"], bonne: 3, expl: "Ce que la technologie change pour le corps et le regard.", niv: 3 },
        { q: "Nelken (1982) de Pina Bausch se danse sur :", choix: ["un mur d'immeuble", "un plateau couvert d'œillets", "des miroirs", "une maison de poupées à étages"], bonne: 1, expl: "La matière naturelle transforme le jeu.", niv: 2 },
        { q: "Merce Cunningham compose à partir de 1989 avec :", choix: ["une boîte à musique", "la notation Feuillet", "le logiciel LifeForms", "un métronome réglé sur la musique"], bonne: 2, expl: "Un outil numérique pour inventer des mouvements.", niv: 1 },
        { q: "Un candidat cite Loïe Fuller dans un sujet sur l'engagement, sans explication. Que lui manque-t-il ?", choix: ["Le lien entre l'exemple et le sujet", "Une date plus récente", "Un deuxième nom de chorégraphe de la même époque", "Une description des pointes"], bonne: 0, expl: "Un nom sans lien ne rapporte rien.", niv: 3 },
      ] },
  ],
  methode: [
    {
      id: "danse-m1",
      mat: "danse",
      titre: "Commenter une affirmation (sujet d'ordre général)",
      formules: [
        "Vous commenterez cette affirmation en vous appuyant sur vos connaissances et vos expériences.",
        "Vous discuterez cette affirmation en prenant appui sur vos connaissances et vos expériences.",
        "Commenter et illustrer cette affirmation en prenant appui sur des œuvres chorégraphiques, sur vos connaissances et vos expériences."
      ],
      vu: [
        "Bac 2023 (mars) : « L'art chorégraphique ne cesse de se renouveler, tout en prenant appui sur le passé. »",
        "Bac 2025 (juin) : « La danse hip-hop enrichit la création chorégraphique. »",
        "Bac 2025 (septembre) : « Le costume joue un rôle à part entière dans la création chorégraphique. »",
        "Bac 2026 Antilles-Guyane : « Depuis le début du XXe siècle, certaines œuvres chorégraphiques convoquent une diversité de corps. »"
      ],
      pts: "20 points (c'est tout le devoir)",
      attendu: "Une composition organisée qui définit les mots clés, transforme l'affirmation en question, suit un fil conducteur et défend un point de vue nuancé. Chaque idée s'appuie sur une œuvre précise (chorégraphe, titre, date, ce qu'on y voit) et, quand c'est possible, sur une expérience vécue en cours comme danseur, chorégraphe ou spectateur. La grille compte trois champs d'égale importance : compréhension du sujet ; connaissances, références, expériences et lexique ; organisation et langue.",
      etapes: [
        "Souligner les mots clés et les définir au brouillon (par exemple « renouveler », « passé », « enrichit »)",
        "Reformuler l'affirmation en question : jusqu'où est-elle vraie ? à quelles conditions ?",
        "Lister ses références : programme limitatif, œuvres vues, expériences de pratique",
        "Construire un plan en deux ou trois parties qui avance (oui, mais, donc autrement)",
        "Rédiger l'introduction : accroche, définitions, problématique, annonce du plan",
        "Dans chaque partie : une idée, une œuvre décrite précisément, ce qu'elle montre, un lien avec le sujet",
        "Conclure : réponse nette à la question, puis ouverture"
      ],
      mots: [
        "relecture",
        "transgression",
        "répertoire",
        "codes",
        "engagement",
        "représentations du corps",
        "point de vue sur le monde",
        "lecture sensible et référencée"
      ],
      pieges: [
        "Réciter son cours sur Maguy Marin ou le Lac des cygnes sans répondre au sujet (le « plaquage »)",
        "Citer des noms sans décrire ce qu'on voit dans les œuvres",
        "Oublier de définir les mots clés",
        "Faire un catalogue d'exemples sans fil conducteur",
        "Ne jamais parler de sa propre pratique alors que la consigne demande les « expériences »"
      ],
      cas: "Sujet : « L'art chorégraphique ne cesse de se renouveler, tout en prenant appui sur le passé. » (bac 2023). Un élève a noté au brouillon : Le Lac des cygnes (Petipa et Ivanov, 1895) ; Mats Ek, Le Lac des cygnes (1987) ; Dada Masilo, Swan Lake (2010) ; Trio A d'Yvonne Rainer (1966) ; en cours, la classe a repris la danse des petits cygnes en la ralentissant et en la dansant au sol.",
      question: "Rédigez le paragraphe de la première partie, qui montre que le renouvellement s'appuie sur le passé.",
      modele: "Le renouvellement de la danse passe souvent par un dialogue avec le répertoire. Le Lac des cygnes de Petipa et Ivanov (1895) fixe des codes forts : cygnes alignés sur pointes, légèreté, symétrie du corps de ballet, féminité fragile. En 1987, Mats Ek reprend l'histoire mais renverse ces codes : ses cygnes ont le crâne rasé, dansent pieds nus, genoux pliés, ancrés dans le sol, et Siegfried devient un jeune homme étouffé par sa mère. La nouveauté n'existe ici que face au modèle : le spectateur reconnaît le ballet, et c'est cet écart qui fait sens. Nous l'avons vécu en cours en dansant la danse des petits cygnes au ralenti et au sol : en gardant la structure (quatre danseurs, bras liés, unisson), nous avons découvert que changer une seule qualité du mouvement suffit à transformer le propos. S'appuyer sur le passé n'est donc pas copier : c'est une manière de le questionner.",
      grille: [
        "Le paragraphe commence par une idée qui répond au sujet",
        "Le modèle de 1895 est décrit par des codes précis",
        "La relecture est nommée (chorégraphe, titre, date) et décrite",
        "L'écart entre les deux est interprété",
        "Une expérience de pratique est reliée à l'idée",
        "Une phrase finale ramène au sujet"
      ]
    },
    {
      id: "danse-m2",
      mat: "danse",
      titre: "Commenter une citation d'artiste (sujet d'ordre général)",
      formules: [
        "Commenter cette citation et montrer comment certains chorégraphes interrogent [une notion], en prenant appui sur des œuvres chorégraphiques, sur vos connaissances et vos expériences."
      ],
      vu: [
        "Bac 2026 métropole : citation de Maguy Marin sur May B et les corps exclus de la scène (« les gros, les petits, les maigres, les handicapés, les vieux »), avec la consigne de montrer comment des chorégraphes interrogent les représentations du corps dansant"
      ],
      pts: "20 points (c'est tout le devoir)",
      attendu: "Expliquer la citation (qui parle, quand, de quoi, contre quoi), en tirer une question, puis l'élargir à d'autres chorégraphes avec des œuvres précises. Quand la citation vient d'un artiste du programme limitatif, le correcteur attend que l'œuvre citée soit connue et décrite.",
      etapes: [
        "Situer la citation : auteur, date, œuvre évoquée, contexte (ici 1981, le règne des « beaux corps »)",
        "Reformuler l'idée avec ses propres mots",
        "Repérer la notion à travailler (représentations du corps dansant)",
        "Poser une question : comment et pourquoi la danse fait-elle place à d'autres corps ? avec quelles limites ?",
        "Décrire l'œuvre citée, puis élargir à deux ou trois autres artistes",
        "Finir par un point de vue personnel argumenté"
      ],
      mots: [
        "corps normé",
        "hiérarchie",
        "virtuosité",
        "corps ordinaire",
        "esthétique convenue",
        "rupture",
        "représentation",
        "inclusion"
      ],
      pieges: [
        "Paraphraser la citation sans l'expliquer",
        "Parler de Maguy Marin seulement, alors que la consigne dit « certains chorégraphes »",
        "Juger les corps (« beaux », « laids ») au lieu d'analyser les choix des artistes",
        "Oublier la date : le sens de la citation dépend de 1981"
      ],
      cas: "Citation de Maguy Marin (2017) : à l'époque de May B, « c'était encore le règne des beaux corps », et elle demande ce qu'on fait « des autres corps ». Vous connaissez May B (1981), Swan Lake, 4 Acts de Raimund Hoghe (2005), Satisfyin' Lover de Steve Paxton (1967).",
      question: "Rédigez l'introduction du devoir.",
      modele: "En 1981, la scène chorégraphique française valorise encore des corps jeunes, minces, entraînés, hiérarchisés entre étoiles et corps de ballet. C'est contre ce « règne des beaux corps » que Maguy Marin dit avoir créé May B, où dix interprètes blanchis à l'argile avancent en groupe, à petits pas, comme des êtres usés. Sa question, « qu'est-ce qu'on fait des autres corps ? », touche aux représentations du corps dansant : les images de ce qu'un corps doit être pour avoir le droit de danser. Nous nous demanderons comment des chorégraphes font place à des corps exclus de la scène, et ce que ce choix change pour le regard du spectateur. Nous verrons d'abord que la post-modern dance et Maguy Marin ont fait entrer sur scène des corps ordinaires, puis que d'autres artistes, comme Raimund Hoghe, exposent leur propre corps hors normes, avant de nous interroger sur les limites de cette démarche.",
      grille: [
        "La citation est située (auteur, date, œuvre)",
        "Son idée est reformulée et expliquée",
        "La notion « représentations du corps dansant » est définie",
        "Une problématique claire est posée",
        "Le plan annoncé élargit à d'autres chorégraphes"
      ]
    },
    {
      id: "danse-m3",
      mat: "danse",
      titre: "Analyse de documents : commenter une affirmation avec trois documents",
      formules: [
        "Vous commenterez cette affirmation en vous appuyant sur les trois documents présentés, ainsi que sur vos connaissances et vos expériences.",
        "Vous discuterez cette affirmation en vous appuyant sur les trois documents présentés ainsi que sur vos connaissances et vos expériences."
      ],
      vu: [
        "Bac 2023 (mars) : les relations avec le spectateur (gala de l'Opéra de Paris, Planetary Dance d'Anna Halprin, Maguy Marin sur les réactions violentes du public d'Umwelt)",
        "Bac 2025 (juin) : l'individu et le collectif (Le Lac des cygnes à l'Opéra de Paris, atelier de contact improvisation, Gala de Jérôme Bel)",
        "Bac 2025 (septembre) : l'espace scénique (Cunningham, Leaning Duets de Trisha Brown dans les rues de New York, Meg Stuart)",
        "Bac 2026 métropole : les expérimentations radicales (Floor of the Forest de Trisha Brown, Cage et Cunningham, Odile Duboc)"
      ],
      pts: "20 points (c'est tout le devoir)",
      attendu: "Une réponse argumentée au sujet, pas trois commentaires séparés. Les trois documents sont décrits, analysés, puis confrontés (points communs, différences) et reliés au sujet ; ils sont complétés par des œuvres connues et des expériences. La grille ajoute un quatrième champ, l'appui sur les documents : oublier un document ou ne faire que le décrire fait perdre des points.",
      etapes: [
        "Lire le sujet et définir ses mots clés",
        "Identifier chaque document : nature (photo, texte), auteur, titre, date",
        "Relever dans chaque document ce qui répond au sujet (corps, espace, relation, dispositif)",
        "Chercher ce qui rapproche et ce qui oppose les documents",
        "Construire un plan par idées, où chaque partie fait dialoguer au moins deux documents",
        "Ajouter dans chaque partie une œuvre connue ou une expérience",
        "Conclure en répondant nettement au sujet"
      ],
      mots: [
        "dispositif scénique",
        "frontalité",
        "espace non conventionnel",
        "collectif",
        "unisson",
        "participation",
        "expérimentation",
        "confrontation des documents"
      ],
      pieges: [
        "Commenter les documents un par un (plan document 1, document 2, document 3)",
        "Décrire une photo sans l'interpréter",
        "Oublier un document",
        "Ne citer aucune œuvre en dehors des documents",
        "Recopier de longs passages du texte au lieu de les analyser"
      ],
      cas: "Sujet (bac 2025) : « La création chorégraphique s'appuie sur les relations entre l'individu et le collectif. » Document 1 : photo du Lac des cygnes (Opéra de Paris, 2020), étoiles au centre, corps de ballet aligné en arrière. Document 2 : photo d'un atelier de contact improvisation, plusieurs corps en appui les uns sur les autres. Document 3 : photo de Gala de Jérôme Bel (2015), amateurs de tous âges et de toutes morphologies, chacun dans son costume.",
      question: "Rédigez une partie du développement qui confronte au moins deux documents.",
      modele: "Dans le ballet classique, la relation entre l'individu et le collectif repose sur une hiérarchie. La photographie du Lac des cygnes (document 1) le montre : les étoiles occupent le centre et la lumière, tandis que le corps de ballet, aligné en arrière, forme un décor vivant parfaitement symétrique ; l'unisson efface les individus au profit de la ligne. Le contact improvisation (document 2) renverse ce rapport : aucun danseur n'est au centre, les corps s'appuient les uns sur les autres, et le mouvement naît du poids partagé, sans meneur. Inventé par Steve Paxton en 1972, il traduit l'idéal démocratique de la post-modern dance. Jérôme Bel, dans Gala (document 3), va plus loin : chaque amateur garde son corps, son costume et sa façon de danser, et le collectif devient la somme de différences visibles. En cours, en improvisant en contact, nous avons senti que personne ne pouvait décider seul de la suite : le collectif n'est plus une forme imposée mais une écoute. Les trois documents montrent ainsi trois façons d'articuler individu et collectif : la hiérarchie, l'égalité, la diversité.",
      grille: [
        "La partie part d'une idée, pas d'un document",
        "Au moins deux documents sont décrits avec des détails précis",
        "Les documents sont confrontés (opposition ou progression)",
        "Une connaissance extérieure est ajoutée (Paxton, 1972, post-modern dance)",
        "Une expérience de pratique est reliée",
        "La phrase finale répond au sujet"
      ]
    },
    {
      id: "danse-m4",
      mat: "danse",
      titre: "Analyse de documents : répondre à une question",
      formules: [
        "Répondre à cette question en vous appuyant sur les trois documents présentés ainsi que sur vos connaissances et vos expériences."
      ],
      vu: [
        "Bac 2026 Antilles-Guyane : « Qu'est-ce qui détermine le choix du costume dans une œuvre chorégraphique ? » (Le Lac des cygnes à Kiev, texte sur le costume chez Cunningham, Parades and Changes d'Anna Halprin repris par Anne Collod)"
      ],
      pts: "20 points (c'est tout le devoir)",
      attendu: "Une réponse organisée en plusieurs facteurs (le plan découle de la question : qu'est-ce qui détermine... ? plusieurs raisons), chaque facteur appuyé sur les documents et sur des œuvres connues, avec une conclusion qui hiérarchise ces facteurs.",
      etapes: [
        "Définir les mots de la question (ici : costume, choix, déterminer)",
        "Trouver dans chaque document une réponse possible",
        "Regrouper ces réponses en deux ou trois grandes raisons",
        "Pour chaque raison : un document, une œuvre connue, une expérience",
        "Conclure en disant quelle raison paraît la plus forte, et pourquoi"
      ],
      mots: [
        "tutu",
        "corps visible",
        "dramaturgie",
        "personnage",
        "neutralité",
        "nudité",
        "codes",
        "identité"
      ],
      pieges: [
        "Répondre par oui ou non à une question ouverte",
        "Faire une liste de costumes sans dire ce qui détermine leur choix",
        "Oublier de relier un document à une raison"
      ],
      cas: "Question : « Qu'est-ce qui détermine le choix du costume dans une œuvre chorégraphique ? » Document 1 : photo du Lac des cygnes, tutus blancs du corps de ballet. Document 2 : texte sur Cunningham, pour qui le costume doit laisser le corps visible. Document 3 : photo de Parades and Changes (Halprin, 1965), danseurs qui s'habillent et se déshabillent.",
      question: "Rédigez le plan détaillé (idées et exemples) de votre réponse.",
      modele: "Introduction : le costume habille le danseur mais participe aussi au sens ; question : selon quels critères le chorégraphe le choisit-il ? I. Le costume sert le récit et les codes d'un style : les tutus blancs du Lac des cygnes (document 1) disent le monde surnaturel des cygnes et la hiérarchie du ballet ; les relectures changent le costume pour changer le sens (Bourne habille ses cygnes d'hommes torse nu ; Masilo met le tutu à tous). II. Le costume sert le mouvement et la visibilité du corps : chez Cunningham (document 2), un corps non surchargé, visible, car la danse est le sujet ; la post-modern dance choisit des vêtements de tous les jours (Satisfyin' Lover). III. Le costume porte un propos sur le monde : dans Parades and Changes (document 3), s'habiller et se déshabiller devient l'action même de la danse et défie la censure ; dans May B, l'argile et les chemises sales disent l'usure des corps. Expérience : dans notre composition, nous avons choisi des vêtements de ville pour que le spectateur s'identifie. Conclusion : le costume est déterminé par l'intention du chorégraphe, qu'il serve le récit, le mouvement ou le propos.",
      grille: [
        "Le plan donne plusieurs raisons qui répondent à la question",
        "Chaque document est placé dans une partie",
        "Des œuvres connues complètent chaque partie",
        "Une expérience personnelle est utilisée",
        "La conclusion hiérarchise ou synthétise"
      ]
    },
    {
      id: "danse-m5",
      mat: "danse",
      titre: "L'entretien de l'oral : expliquer sa démarche",
      formules: [
        "Le jury interroge le candidat sur sa composition afin d'apprécier ses capacités à expliciter sa démarche de chorégraphe, son expérience d'interprète, en relation avec sa culture chorégraphique et son parcours d'élève spectateur, critique, chercheur."
      ],
      vu: [
        "Partie orale de l'épreuve, note de service du 11 septembre 2026 (session 2027) : entretien noté sur 8 points, après la présentation chorégraphique notée sur 12"
      ],
      pts: "8 points sur les 20 de l'oral",
      attendu: "Un discours clair et personnel : d'où vient la pièce, comment elle a été construite, pourquoi ces choix, ce que l'interprète a ressenti et appris, et à quelles œuvres elle se relie. Le jury attend des mots précis (procédés, espace, temps, énergie) et des références de culture chorégraphique.",
      etapes: [
        "Préparer une présentation de deux minutes : intention, procédés, choix de scénographie et de son",
        "Expliquer un ou deux choix forts avec leur raison",
        "Parler de son rôle d'interprète : difficulté, sensation, évolution",
        "Relier la pièce à une ou deux œuvres (programme limitatif ou spectacle vu)",
        "Accepter les questions et reconnaître ce qu'on changerait"
      ],
      mots: [
        "intention",
        "inducteur",
        "accumulation",
        "canon",
        "contrepoint",
        "qualité de mouvement",
        "scénographie",
        "carnet de création"
      ],
      pieges: [
        "Raconter l'histoire de la pièce au lieu d'expliquer la démarche",
        "Répondre « parce que c'était joli »",
        "Réciter une fiche sur un chorégraphe sans lien avec sa pièce",
        "Oublier le rôle d'interprète"
      ],
      cas: "Une élève a composé un trio de 4 minutes, « Ligne de fuite », sur la course permanente de la vie quotidienne : une même phrase de gestes (regarder son téléphone, marcher vite, se retourner) est accumulée, accélérée, puis dansée en canon ; à la fin, une danseuse s'arrête, immobile, pendant que les deux autres continuent. Musique : un battement régulier, puis le silence.",
      question: "Rédigez sa réponse à la question du jury : « Pourquoi avoir terminé par cette immobilité ? »",
      modele: "Toute la pièce repose sur l'accumulation et l'accélération : la phrase de gestes quotidiens grossit et va de plus en plus vite, pour faire sentir la pression d'une vie où l'on ne s'arrête jamais. J'ai voulu que la fin crée une rupture : une danseuse s'immobilise pendant que les deux autres continuent, et le battement s'arrête en même temps. Le spectateur voit alors le contraste entre celle qui choisit de sortir du mouvement et celles qui restent prises dedans. Comme interprète, cette immobilité a été le passage le plus difficile : rester présente sans bouger, en soutenant le regard du public, demande beaucoup de concentration. Je me suis inspirée d'Umwelt de Maguy Marin, où des gestes quotidiens répétés en boucle montrent une humanité mécanique ; mais j'ai voulu ouvrir une possibilité de s'en libérer.",
      grille: [
        "Le choix est relié à l'intention de la pièce",
        "Un procédé est nommé (accumulation, rupture, contraste)",
        "L'effet sur le spectateur est expliqué",
        "L'expérience d'interprète est évoquée",
        "Une œuvre de référence est citée et reliée"
      ]
    }
  ],
  sujets: [
    { id: "danse-s1", matiere: 'danse', titre: "Sujet d'entraînement 1 : reprendre une œuvre du passé", duree: 210,
      enonce: `Sujet d'entraînement inventé, sur le modèle du sujet 1 (sujet d'ordre général) de la partie écrite de l'épreuve de danse (session 2027). L'affirmation à discuter a été écrite pour cet entraînement. Durée : 3 h 30. Dictionnaire et calculatrice interdits. Le jour du bac, le candidat choisit entre ce type de sujet et une analyse de documents (voir le sujet d'entraînement 2).

SUJET 1 : sujet d'ordre général

« Reprendre une œuvre du passé, c'est prendre position sur son époque. »

Vous discuterez cette affirmation en prenant appui sur des œuvres chorégraphiques, sur vos connaissances et vos expériences.`,
      corrige: `Ce corrigé donne une démarche et un plan possibles ; d'autres plans sont acceptés s'ils répondent au sujet.

INTRODUCTION
- Accroche : en 1987, Mats Ek fait danser les cygnes du Lac pieds nus, crâne rasé, genoux pliés ; le public reconnaît le ballet de 1895 et mesure aussitôt l'écart.
- Définitions : « reprendre » peut vouloir dire remonter fidèlement (reprise de répertoire), relire (garder l'histoire et changer le sens), citer, détourner. « Une œuvre du passé » : une pièce du répertoire, classique ou non. « Prendre position » : affirmer un point de vue, sur la danse ou sur la société. « Son époque » est ambigu : l'époque de l'œuvre reprise, ou celle du chorégraphe qui la reprend.
- Problématique : reprendre une œuvre est-ce forcément un geste critique, ou peut-on aussi reprendre pour transmettre ?
- Annonce du plan.

I. Reprendre pour critiquer : la relecture comme prise de position
- Le modèle : Le Lac des cygnes de Petipa et Ivanov (1895), ses codes (pointes, en dehors, symétrie, hiérarchie, féminité fragile, art de cour).
- Mats Ek (1987) : corps ancrés, lecture psychologique, humour ; il critique la légèreté et l'idéal du ballet.
- Matthew Bourne (1995) : cygnes masculins ; prise de position sur la masculinité, le désir, la monarchie britannique.
- Dada Masilo (2010) et Robyn Orlin (1998) : le ballet confronté à l'Afrique du Sud, au racisme, à l'homophobie. La reprise devient un acte politique sur l'époque du chorégraphe.
- Maguy Marin, Cendrillon (1985) : un conte relu en maison de poupées, qui interroge les rêves imposés aux filles.

II. Reprendre pour transmettre : une position moins visible
- Les grandes compagnies remontent le Lac des cygnes presque à l'identique : on conserve un patrimoine, on forme les danseurs, on fait vivre un savoir. Même là, il y a des choix (fin heureuse ou tragique, costumes), mais la prise de position est discrète.
- La post-modern dance elle-même est transmise : Trio A d'Yvonne Rainer (1966) est enseigné à de nouveaux interprètes ; Anne Collod a reconstitué Parades and Changes d'Anna Halprin (1965). Reprendre sert à garder la mémoire d'une danse fragile, qui n'existe que dans les corps.
- Les notations (Feuillet, Laban, Benesh) et la vidéo rendent ces reprises possibles.

III. Toute reprise est pourtant un regard d'aujourd'hui
- Une œuvre reprise est vue par un public nouveau : le même ballet ne dit plus la même chose en 1895 et aujourd'hui (image de la femme, du corps).
- Reprendre, c'est choisir quoi garder : Raimund Hoghe (2005) garde la musique et la structure en quatre actes, mais y met son corps bossu ; la position porte sur la beauté et l'exclusion.
- Expérience : en reprenant en classe la danse des petits cygnes au ralenti et au sol, on a vu qu'un seul changement de qualité transforme le sens.

CONCLUSION
- Réponse : reprendre n'est pas forcément critiquer, mais aucune reprise n'est neutre ; la position est explicite dans les relectures (Ek, Bourne, Masilo), plus discrète dans les reprises de répertoire.
- Ouverture : la danse hip-hop, en reprenant des œuvres baroques (Les Indes galantes, 2019), prend position sur qui a le droit d'occuper les grandes scènes.`,
      grille: [{"c":"Mots clés définis (reprendre, œuvre du passé, prendre position, époque) et ambiguïté repérée","pts":3},{"c":"Problématique claire et fil conducteur qui répond au sujet","pts":3},{"c":"Références précises et variées : chorégraphe, titre, date, description (Lac de 1895 et au moins deux relectures, autre courant)","pts":5},{"c":"Expériences de pratique ou de spectateur reliées au sujet","pts":2},{"c":"Lexique chorégraphique juste (relecture, codes, en dehors, corps de ballet, transgression)","pts":2},{"c":"Point de vue personnel argumenté et nuancé, conclusion qui répond","pts":3},{"c":"Orthographe, syntaxe et clarté de l'expression","pts":2}] },
    { id: "danse-s2", matiere: 'danse', titre: "Sujet d'entraînement 2 : rendre visibles les invisibles", duree: 210,
      enonce: `Sujet d'entraînement inventé, sur le modèle du sujet 2 (analyse de documents) de la partie écrite de l'épreuve de danse (session 2027). Les documents 1 et 2 sont imaginés pour cet entraînement : la compagnie, la pièce et la chorégraphe n'existent pas. Le document 3 décrit une œuvre réelle avec des mots, car l'application ne peut pas montrer d'image. Durée : 3 h 30. Dictionnaire et calculatrice interdits.

SUJET 2 : analyse de documents

La danse peut-elle rendre visibles ceux que la société ne regarde pas ?

Répondre à cette question en vous appuyant sur les trois documents présentés ainsi que sur vos connaissances et vos expériences.

DOCUMENT 1 (photographie décrite)
« Les Invisibles », pièce imaginée pour l'entraînement, compagnie Fil Tendu (compagnie imaginaire), 2022.
Sur un plateau nu, éclairé par une rangée de néons blancs, six interprètes de 20 à 75 ans, en blouses de travail bleues, poussent lentement des chariots de ménage de cour à jardin. Au premier plan, une femme âgée s'est arrêtée : debout, les bras le long du corps, elle regarde le public droit dans les yeux. Derrière elle, les cinq autres continuent à avancer, le dos un peu courbé.

DOCUMENT 2 (texte)
« Je ne cherche pas des corps qui savent danser, je cherche des corps qui ont vécu. Une femme qui a nettoyé des bureaux pendant trente ans a un geste que personne ne peut imiter : il est précis, économe, usé. Sur scène, je ne lui demande rien d'autre que de le refaire, lentement. Le spectateur, qui passe chaque matin devant elle sans la voir, ne peut plus détourner les yeux. Est-ce que je l'expose ? Peut-être. C'est la question que je me pose à chaque représentation. »
Propos d'une chorégraphe imaginaire, écrits pour cet entraînement.

DOCUMENT 3 (extrait décrit)
Satisfyin' Lover, Steve Paxton, 1967.
Une trentaine de personnes de tous âges et de toutes morphologies, en vêtements de tous les jours, traversent l'espace en marchant, l'une après l'autre ou par petits groupes, de cour à jardin. Certaines s'arrêtent, d'autres s'assoient sur une chaise, puis repartent. Il n'y a ni musique ni virtuosité : seulement des démarches différentes, que le public regarde comme une danse.`,
      corrige: `Ce corrigé donne une démarche et un plan possibles ; d'autres plans sont acceptés s'ils répondent au sujet et exploitent les trois documents.

INTRODUCTION
- Accroche : en 1981, Maguy Marin crée May B contre le « règne des beaux corps » ; dix êtres usés, blanchis à l'argile, avancent en groupe.
- Définitions : « rendre visible » : montrer, mais aussi faire regarder, donner de la valeur. « Ceux que la société ne regarde pas » : travailleurs invisibles, personnes âgées, corps hors normes, minorités. « La danse peut-elle » : en a-t-elle les moyens, et le droit ?
- Présentation rapide des documents : une pièce sur des agents d'entretien (document 1), les propos de sa chorégraphe (document 2), Satisfyin' Lover de Steve Paxton (document 3).
- Problématique : par quels moyens la danse fait-elle exister sur scène des corps ignorés, et à quelles limites se heurte cette démarche ?

I. La scène comme lieu où l'on est enfin regardé
- Document 1 : la femme âgée au premier plan, immobile, regard frontal : la frontalité renverse le rapport habituel (c'est elle qui nous regarde). Le plateau nu et les néons rappellent un lieu de travail.
- Document 3 : des corps ordinaires traversent la scène ; la simple marche devient danse. La post-modern dance a fait entrer les non-danseurs sur scène, par idéal démocratique (Paxton, Rainer).
- Connaissances : May B de Maguy Marin (1981) ; Raimund Hoghe, Swan Lake, 4 Acts (2005), qui danse avec son corps bossu ; Gala de Jérôme Bel (2015).

II. Les moyens chorégraphiques : le geste quotidien, la lenteur, la répétition
- Document 2 : le geste de travail « précis, économe, usé » est montré tel quel, ralenti ; la lenteur oblige à regarder.
- Document 1 : le groupe qui avance dos courbé, en unisson discret, dit la répétition des journées ; contraste avec l'immobilité de la femme au premier plan.
- Connaissances : Umwelt de Maguy Marin (2004), gestes quotidiens répétés en boucle ; la tâche dans la post-modern dance.
- Expérience : un travail en classe à partir de gestes de métiers, ralentis et accumulés, a montré que le spectateur finit par regarder la personne plus que le geste.

III. Les limites : montrer, est-ce exposer ?
- Document 2 : la chorégraphe pose elle-même la question (« Est-ce que je l'expose ? »). Risque de voyeurisme ou d'embellir la misère.
- Le public des théâtres n'est pas toujours celui qui croise ces personnes ; la visibilité sur scène ne change pas forcément leur place dans la société.
- Réponses possibles : donner la parole aux interprètes, travailler avec eux dans la durée, l'humour (Robyn Orlin), la beauté des corps différents (Dada Masilo).

CONCLUSION
- Réponse : oui, la danse peut rendre visibles des corps ignorés en déplaçant le regard (frontalité, lenteur, geste quotidien), mais cette visibilité est fragile et pose une question éthique que l'artiste doit assumer.
- Ouverture : la danse hip-hop sur les grandes scènes (Les Indes galantes, Opéra Bastille, 2019).`,
      grille: [{"c":"Mots clés définis et question problématisée","pts":3},{"c":"Les trois documents exploités, avec des détails précis","pts":3},{"c":"Documents confrontés entre eux et reliés au sujet (et pas commentés un par un)","pts":3},{"c":"Connaissances et références précises extérieures aux documents (Maguy Marin, post-modern dance, Hoghe, Bel...)","pts":4},{"c":"Expériences reliées au sujet et lexique chorégraphique juste","pts":2},{"c":"Devoir organisé autour d'un fil conducteur, point de vue nuancé sur les limites","pts":3},{"c":"Orthographe, syntaxe et clarté de l'expression","pts":2}] },
  ],
};
