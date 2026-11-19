// LLCA grec ancien (littérature et langues et cultures de l'Antiquité), terminale générale. Sources : voir matiere.sources.
// Programme en vigueur : BO spécial n° 8 du 25 juillet 2019 (terminale LLCA). Œuvres : programme limitatif 2026-2027 et 2027-2028 (BO n° 11 du 12 mars 2026 : Lucien, Histoires vraies, et Italo Calvino, Le Baron perché). Épreuve : note de service du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026), en vigueur à la session 2027.
export default {
  matiere: {
    id: 'llca-grec',
    nom: 'LLCA grec ancien',
    voie: 'generale',
    epreuve: {"type":"ecrit","duree":240,"coef":16,"quand":"juin","note":"Écrit de 4 heures, seul le dictionnaire grec-français est autorisé. Le corpus compte trois textes : un extrait de l'œuvre antique au programme (Lucien, Histoires vraies), en grec avec sa traduction ; un extrait de l'œuvre moderne (Italo Calvino, Le Baron perché) ; un court texte grec ou latin en traduction. Partie 1, étude de la langue, sur 10 points : traduction d'environ 90 mots (6 points), une question de grammaire à analyser puis à interpréter (2 points), un mot clé à expliquer en contexte (2 points). Partie 2, sur 10 points : un essai organisé et argumenté qui s'appuie sur le corpus, les deux œuvres, les objets d'étude, le portfolio et les lectures personnelles. La maîtrise de la langue française est évaluée sur toute la copie. Coefficient 16, celui des spécialités de terminale."},
    sources: [
      "https://eduscol.education.fr/document/23926/download",
      "https://www.education.gouv.fr/bo/2026/Hebdo11/MENE2605298N",
      "https://www.education.gouv.fr/bo/2026/Special4/MENE2622660N",
      "https://www.cafepedagogique.net/2026/03/30/llca-nouveau-programme-cuvee-septembre-2026/",
      "https://www.cafepedagogique.net/wp-content/uploads/2026/06/26-LLCAGRAME1.pdf",
      "https://eduscol.education.gouv.fr/sites/default/files/document/26-llcagraag1-128346.pdf",
      "https://eduscol.education.gouv.fr/sites/default/files/document/26-llcagrapo1-127874.pdf",
      "https://eduscol.education.gouv.fr/5808/programmes-et-ressources-en-langues-et-cultures-de-l-antiquite-voie-gt",
    ],
    chapitres: [
      { id: "llca-grec-1", t: "Lucien de Samosate : un Syrien maître du grec", theme: "Œuvre antique : Lucien, Histoires vraies" },
      { id: "llca-grec-2", t: "Le prologue : un menteur qui l'avoue", theme: "Œuvre antique : Lucien, Histoires vraies" },
      { id: "llca-grec-3", t: "Livre I : de l'Océan à la Lune", theme: "Œuvre antique : Lucien, Histoires vraies" },
      { id: "llca-grec-4", t: "Dans le ventre du monstre marin", theme: "Œuvre antique : Lucien, Histoires vraies" },
      { id: "llca-grec-5", t: "Livre II : l'île des Bienheureux et la fin du voyage", theme: "Œuvre antique : Lucien, Histoires vraies" },
      { id: "llca-grec-6", t: "Parodie, satire et rire : les procédés de Lucien", theme: "Œuvre antique : Lucien, Histoires vraies" },
      { id: "llca-grec-7", t: "Italo Calvino, Le Baron perché", theme: "Œuvre moderne : Calvino" },
      { id: "llca-grec-8", t: "Lucien et Calvino : confronter les deux œuvres", theme: "Confronter les œuvres" },
      { id: "llca-grec-9", t: "Objet d'étude : Croire, savoir, douter", theme: "Objets d'étude" },
      { id: "llca-grec-10", t: "Objet d'étude : L'homme, le monde, le destin", theme: "Objets d'étude" },
      { id: "llca-grec-11", t: "Objet d'étude : Méditerranée, présence des mondes antiques", theme: "Objets d'étude" },
      { id: "llca-grec-12", t: "Langue : les notions de terminale", theme: "Langue grecque" },
      { id: "llca-grec-13", t: "Langue : analyser une forme verbale", theme: "Langue grecque" },
      { id: "llca-grec-14", t: "Lexique : les mots-clés du voyage, du vrai et du faux", theme: "Langue grecque" },
      { id: "llca-grec-15", t: "Méthode : réussir l'écrit de 4 heures", theme: "Méthode de l'épreuve" },
    ],
  },
  paquets: [
  { chapitre: "llca-grec-1",
    fiche: `## Lucien de Samosate : un Syrien maître du grec

L'œuvre antique au programme de 2027 est **Histoires vraies** de Lucien, dans l'édition de Jacques Bompaire (Les Belles Lettres, 2011). Son auteur est l'un des grands rieurs de l'Antiquité : il se moque des dieux, des philosophes, des historiens et des menteurs.

### Une vie entre l'Orient et l'Occident
- Lucien (en grec **Loukianos**) naît vers **120 ap. J.-C.** à **Samosate**, sur l'Euphrate, en Commagène (dans l'actuelle Turquie, à la frontière de la Syrie). Il meurt après 180.
- Il vit au IIe siècle, sous les empereurs Antonins (Hadrien, Antonin, Marc Aurèle) : l'Empire romain est en paix et le grec reste la langue de la culture dans tout l'Orient.
- Sa langue maternelle n'est sans doute pas le grec : il se présente lui-même comme un « Syrien » ou un « barbare » qui a appris le grec. Il écrit pourtant un **grec attique** très pur, imité des auteurs classiques d'Athènes.
- Dans un texte intitulé Le Songe, il raconte qu'adolescent, il devait devenir sculpteur, mais qu'il a choisi l'éducation, la **paideia**.

### Un orateur devenu écrivain
- Il exerce d'abord comme **rhéteur** (professeur d'éloquence et orateur) et voyage en donnant des conférences, jusqu'en Gaule et en Italie, puis s'installe un temps à Athènes.
- Il appartient à la période qu'on appelle la **Seconde Sophistique** : des orateurs grecs célèbres, admirés comme des vedettes, qui font revivre la langue et la culture de l'Athènes classique.
- À la fin de sa vie, il occupe un poste dans l'administration romaine en Égypte.

### Une œuvre variée et moqueuse
- On lui attribue environ quatre-vingts textes : dialogues, discours, récits, pamphlets.
- Les **Dialogues des morts** : aux Enfers, les morts, riches ou puissants de leur vivant, se retrouvent tous égaux.
- Les **Dialogues des dieux** : les dieux de l'Olympe se disputent comme de simples humains.
- **Icaroménippe** : le philosophe Ménippe s'envole vers la Lune et l'Olympe avec des ailes.
- **Comment il faut écrire l'histoire** : un traité qui demande à l'historien de dire la vérité, sans flatter.
- **Le Menteur** (Philopseudès) : des hommes instruits se racontent des histoires de fantômes et de magie, et le narrateur refuse d'y croire.
- **Alexandre ou le faux prophète** : la dénonciation d'un charlatan qui avait fondé un oracle.

### Le rire comme arme
- Lucien mélange le **dialogue** philosophique et la **comédie** : il dit avoir inventé un genre nouveau, un mélange qui fait rire et réfléchir.
- Il s'inspire du philosophe cynique **Ménippe**, qui se moquait de tout : c'est la **satire ménippée**.
- Ses cibles : la superstition, les faux philosophes, les orateurs prétentieux, les historiens menteurs, la crédulité. Son arme : l'ironie, la parodie, l'exagération.
- Il a inspiré beaucoup d'auteurs modernes : Érasme, Rabelais, Cyrano de Bergerac, Swift, Voltaire.

### À retenir pour le bac
- Lucien, né vers 120 à Samosate (Commagène), mort après 180 ; un Syrien qui écrit un grec attique classique.
- Rhéteur de la **Seconde Sophistique**, voyageur, puis fonctionnaire en Égypte.
- Œuvres : Dialogues des morts, Dialogues des dieux, Icaroménippe, Le Menteur, Comment il faut écrire l'histoire.
- Un rieur satirique, héritier de Ménippe, qui combat la crédulité et inspire Rabelais, Swift et Voltaire.`,
    cartes: [
      { q: "Nom grec de Lucien", r: "Loukianos." },
      { q: "Naissance de Lucien", r: "Vers 120 ap. J.-C., à Samosate, sur l'Euphrate, en Commagène." },
      { q: "Époque de Lucien", r: "Le IIe siècle ap. J.-C., sous les Antonins, en pleine paix romaine." },
      { q: "Langue d'écriture de Lucien", r: "Un grec attique très pur, imité des classiques d'Athènes, alors qu'il se dit Syrien." },
      { q: "Paideia", r: "L'éducation, la culture grecque que Lucien choisit plutôt que le métier de sculpteur (Le Songe)." },
      { q: "Premier métier de Lucien", r: "Rhéteur : professeur d'éloquence et orateur qui donne des conférences." },
      { q: "Seconde Sophistique", r: "Période des orateurs grecs célèbres du IIe siècle, qui font revivre la culture de l'Athènes classique." },
      { q: "Dernier poste de Lucien", r: "Un emploi dans l'administration romaine en Égypte." },
      { q: "Sujet des Dialogues des morts", r: "Aux Enfers, riches et puissants sont égaux aux autres morts." },
      { q: "Sujet d'Icaroménippe", r: "Le philosophe Ménippe vole jusqu'à la Lune et l'Olympe." },
      { q: "Sujet du Menteur (Philopseudès)", r: "Des savants se racontent des histoires de fantômes ; le narrateur refuse d'y croire." },
      { q: "Satire ménippée", r: "Mélange moqueur de prose et de comédie, inspiré du cynique Ménippe." },
      { q: "Auteurs modernes inspirés par Lucien", r: "Érasme, Rabelais, Cyrano de Bergerac, Swift, Voltaire." },
    ],
    quiz: [
      { q: "Où Lucien est-il né ?",
        choix: ["À Athènes, au pied de l'Acropole", "À Alexandrie", "À Samosate, sur l'Euphrate", "À Rome"],
        bonne: 2, niv: 1,
        expl: "Samosate se trouve en Commagène, aux confins de la Syrie." },
      { q: "À quel siècle vit Lucien ?",
        choix: ["Au Ve siècle av. J.-C.", "Au IIe siècle ap. J.-C.", "Au Ier siècle av. J.-C.", "Au IVe siècle ap. J.-C."],
        bonne: 1, niv: 1,
        expl: "Il naît vers 120, sous Hadrien." },
      { q: "Quel grec Lucien écrit-il ?",
        choix: ["Le dialecte ionien d'Hérodote", "Un grec homérique", "Le grec moderne", "Un grec attique classique"],
        bonne: 3, niv: 2,
        expl: "Il imite la langue de l'Athènes classique." },
      { q: "Que choisit Lucien adolescent, selon Le Songe ?",
        choix: ["La sculpture plutôt que l'éducation", "L'éducation plutôt que la sculpture", "La médecine", "L'armée romaine"],
        bonne: 1, niv: 2,
        expl: "La paideia l'emporte sur le métier de son oncle sculpteur." },
      { q: "Qu'est-ce que la Seconde Sophistique ?",
        choix: ["Une école de philosophie fondée par Socrate à Athènes au Ve siècle avant J.-C.", "Une guerre entre Athènes et Sparte", "Le nom d'un dialogue de Platon", "La période des orateurs grecs célèbres du IIe siècle"],
        bonne: 3, niv: 2,
        expl: "Ces orateurs font revivre la culture classique." },
      { q: "De quoi parlent les Dialogues des morts ?",
        choix: ["De l'égalité des morts aux Enfers", "Des guerres menées par Rome contre les Parthes d'Orient", "De la naissance des dieux", "Des jeux Olympiques"],
        bonne: 0, niv: 2,
        expl: "Les riches et les puissants y perdent tout." },
      { q: "Qui vole jusqu'à la Lune dans Icaroménippe ?",
        choix: ["Le héros Héraclès", "Le philosophe Ménippe", "Le roi Alexandre", "Le poète Homère"],
        bonne: 1, niv: 1,
        expl: "Il s'est fabriqué des ailes, comme Icare." },
      { q: "Que dénonce Le Menteur (Philopseudès) ?",
        choix: ["La lâcheté des soldats romains face aux barbares du Danube", "La crédulité de savants qui croient aux fantômes", "La cruauté des empereurs", "La mauvaise cuisine athénienne"],
        bonne: 1, niv: 3,
        expl: "Le narrateur refuse ces histoires merveilleuses." },
      { q: "De quel philosophe vient l'expression satire ménippée ?",
        choix: ["Du cynique Ménippe", "Du stoïcien Épictète", "De l'épicurien Lucrèce", "De Platon"],
        bonne: 0, niv: 2,
        expl: "Ménippe se moquait de tout dans un mélange de prose et de vers." },
      { q: "Quel auteur moderne doit beaucoup à Lucien ?",
        choix: ["Swift, auteur des Voyages de Gulliver", "Victor Hugo, auteur des Misérables et de Notre-Dame de Paris", "Molière, auteur du Misanthrope", "Racine, auteur de Phèdre"],
        bonne: 0, niv: 3,
        expl: "Rabelais, Cyrano et Voltaire lui doivent aussi." },
      { q: "Que réclame Lucien dans Comment il faut écrire l'histoire ?",
        choix: ["Que l'historien invente pour plaire à l'empereur et à ses lecteurs", "Que l'historien dise la vérité sans flatter", "Que l'histoire soit écrite en vers", "Que l'historien ne parle que des dieux"],
        bonne: 1, niv: 3,
        expl: "Ce souci de vérité éclaire la parodie des Histoires vraies." },
    ] },
  { chapitre: "llca-grec-2",
    fiche: `## Le prologue : un menteur qui l'avoue

Les Histoires vraies (en grec **Alêthê diêgêmata**, « récits vrais ») comptent **deux livres**. Le titre est déjà une plaisanterie : le prologue (livre I, 1 à 4) annonce que tout sera faux. Ce passage est essentiel pour l'épreuve, car il donne la clé de lecture de toute l'œuvre.

### Un divertissement pour l'esprit (I, 1-2)
- Lucien compare le lecteur à un athlète : après l'effort, il faut du repos. De même, après des lectures sérieuses, l'esprit a besoin d'une lecture qui détende.
- Mais ce repos doit rester intelligent : le texte offrira non seulement de l'agrément, mais aussi une réflexion, grâce aux allusions cachées aux poètes, aux historiens et aux philosophes qui ont raconté des choses incroyables.
- Le lecteur cultivé est donc invité à un **jeu** : reconnaître les auteurs parodiés.

### Les cibles de la parodie (I, 2-3)
- **Ctésias de Cnide**, auteur d'un livre sur l'Inde, qui a écrit sur ce pays des choses qu'il n'avait ni vues ni entendues.
- **Iamboulos**, auteur d'un récit sur des merveilles de la grande mer, que tout le monde savait inventé, mais agréable à lire.
- Beaucoup d'autres ont raconté des voyages, des bêtes monstrueuses, des peuples étranges.
- Leur modèle et maître est l'**Ulysse d'Homère**, qui raconte chez Alcinoos, roi des Phéaciens, des histoires de vents enfermés dans une outre, de géants à un œil, de compagnons changés en bêtes.
- Lucien ne leur reproche pas de mentir, mais de vouloir qu'on les croie.

### L'aveu du mensonge (I, 4)
- Lucien veut lui aussi laisser quelque chose à la postérité, mais il n'a rien de vrai à raconter. Il choisit donc un mensonge plus honnête que les autres : il **avoue** qu'il ment.
- Phrase célèbre : « **hen gar dê touto alêtheusô legôn hoti pseudomai** » : « car je dirai la vérité sur ce seul point : en disant que je mens ».
- Il annonce qu'il écrit sur des choses qu'il n'a ni vues, ni vécues, ni apprises d'autrui, qui n'existent pas et ne pourraient pas exister. Les lecteurs ne doivent donc **pas** les croire.

### Un paradoxe et un pacte
- Le **paradoxe du menteur** : si je dis « je mens », est-ce vrai ou faux ? Lucien joue avec ce problème connu des philosophes grecs.
- Le **pacte de lecture** est clair : le lecteur sait dès le début qu'il lit une fiction. Il peut alors jouir des inventions sans être trompé.
- La différence entre **mensonge** (**pseudos**, vouloir tromper) et **fiction** (inventer en le disant) est au cœur de l'œuvre.

### Un récit à la première personne
- Le narrateur dit « je » et raconte son voyage comme un témoin. Il imite le ton sérieux des historiens : chiffres, distances, dates, détails concrets.
- Ce sérieux apparent rend l'invention encore plus drôle : c'est la **parodie** du récit véridique.

### À retenir pour le bac
- Titre : **Alêthê diêgêmata** ; deux livres ; prologue en I, 1-4.
- Cibles : Ctésias, Iamboulos, et leur maître l'Ulysse d'Homère chez Alcinoos.
- Aveu : « hen gar dê touto alêtheusô legôn hoti pseudomai » : le seul point vrai, c'est que je mens.
- Paradoxe du menteur, pacte de lecture, différence entre mensonge (**pseudos**) et fiction.`,
    cartes: [
      { q: "Titre grec des Histoires vraies", r: "Alêthê diêgêmata : « récits vrais »." },
      { q: "Nombre de livres des Histoires vraies", r: "Deux." },
      { q: "Où se trouve le prologue ?", r: "Au début du livre I, paragraphes 1 à 4." },
      { q: "Comparaison du début du prologue", r: "Le lecteur est comme un athlète : après l'effort sérieux, il a besoin d'un repos." },
      { q: "Ce que le lecteur cultivé doit reconnaître", r: "Les allusions aux poètes, historiens et philosophes qui ont raconté des choses incroyables." },
      { q: "Ctésias de Cnide", r: "Auteur d'un livre sur l'Inde, rempli de choses qu'il n'avait ni vues ni entendues." },
      { q: "Iamboulos", r: "Auteur d'un récit inventé sur les merveilles de la grande mer." },
      { q: "Maître de tous ces menteurs selon Lucien", r: "L'Ulysse d'Homère, qui raconte ses aventures chez Alcinoos." },
      { q: "Reproche de Lucien à ces auteurs", r: "Non pas de mentir, mais de vouloir qu'on les croie." },
      { q: "Traduction de « hen gar dê touto alêtheusô legôn hoti pseudomai »", r: "« Car je dirai la vérité sur ce seul point : en disant que je mens. »" },
      { q: "Ce que Lucien dit de ses récits", r: "Il n'a rien vu, rien vécu, rien appris d'autrui ; rien n'existe ni ne pourrait exister." },
      { q: "Pacte de lecture", r: "Accord entre auteur et lecteur : ici, le lecteur sait qu'il lit une fiction avouée." },
      { q: "Mensonge et fiction", r: "Le mensonge veut tromper ; la fiction invente en le disant." },
    ],
    quiz: [
      { q: "Que signifie le titre grec Alêthê diêgêmata ?",
        choix: ["Voyages fabuleux", "Mensonges plaisants", "Récits vrais", "Dialogues des dieux"],
        bonne: 2, niv: 1,
        expl: "Le titre est ironique : tout sera inventé." },
      { q: "Combien de livres comptent les Histoires vraies ?",
        choix: ["Un seul", "Deux", "Cinq", "Vingt-quatre"],
        bonne: 1, niv: 1,
        expl: "L'Odyssée, elle, compte vingt-quatre chants." },
      { q: "À qui Lucien compare-t-il le lecteur au début du prologue ?",
        choix: ["À un soldat qui part en guerre loin de sa patrie et de sa famille", "À un athlète qui a besoin de repos", "À un marin perdu en mer", "À un élève puni par son maître"],
        bonne: 1, niv: 2,
        expl: "Après l'effort sérieux, l'esprit doit se détendre." },
      { q: "Quel auteur Lucien accuse-t-il d'avoir inventé des merveilles sur l'Inde ?",
        choix: ["Thucydide d'Athènes", "Platon", "Ctésias de Cnide", "Sophocle"],
        bonne: 2, niv: 2,
        expl: "Il a écrit sur des choses qu'il n'avait ni vues ni entendues." },
      { q: "Qui est, selon Lucien, le maître de tous ces menteurs ?",
        choix: ["L'Ulysse d'Homère", "Le Zeus d'Hésiode", "Le Socrate de Platon", "L'Achille de l'Iliade"],
        bonne: 0, niv: 2,
        expl: "Chez Alcinoos, Ulysse raconte des histoires incroyables." },
      { q: "Que reproche Lucien aux auteurs de récits merveilleux ?",
        choix: ["De vouloir qu'on croie leurs inventions", "D'écrire dans un grec médiocre, plein de fautes de grammaire", "D'être trop courts", "De ne pas citer Homère"],
        bonne: 0, niv: 3,
        expl: "Inventer n'est pas une faute ; tromper en est une." },
      { q: "Comment traduire « hen gar dê touto alêtheusô legôn hoti pseudomai » ?",
        choix: ["Je mentirai sur un seul point pour mieux dire la vérité sur le reste", "Je dis la vérité quand je parle", "Je dirai la vérité sur ce seul point : je mens", "J'ai menti sur ce point, je l'avoue"],
        bonne: 2, niv: 2,
        expl: "Alêtheusô est un futur ; pseudomai signifie je mens." },
      { q: "Que demande Lucien aux lecteurs à la fin du prologue ?",
        choix: ["De vérifier ses récits sur place", "De ne pas croire ce qu'ils vont lire", "De croire chaque mot du récit", "De lire Homère avant lui"],
        bonne: 1, niv: 1,
        expl: "Il écrit sur ce qui n'existe pas et ne pourrait exister." },
      { q: "Quel problème de logique Lucien utilise-t-il ?",
        choix: ["Le paradoxe du menteur", "Le théorème de Pythagore", "Le pari de Pascal", "Le cercle vicieux de la poule"],
        bonne: 0, niv: 3,
        expl: "Si je dis que je mens, est-ce vrai ou faux ?" },
      { q: "Pourquoi le narrateur multiplie-t-il chiffres et distances ?",
        choix: ["Pour parodier le sérieux des historiens", "Pour aider les marins de son temps à se repérer sur l'Océan", "Parce qu'il était géographe", "Pour remplir le livre"],
        bonne: 0, niv: 2,
        expl: "Le ton véridique rend l'invention plus drôle." },
      { q: "Quel jeu le prologue propose-t-il au lecteur cultivé ?",
        choix: ["Deviner la fin du voyage", "Trouver une erreur de grec", "Résoudre une énigme mathématique", "Reconnaître les auteurs parodiés"],
        bonne: 3, niv: 3,
        expl: "Le texte est plein d'allusions aux poètes et historiens." },
    ] },
  { chapitre: "llca-grec-3",
    fiche: `## Livre I : de l'Océan à la Lune

Après le prologue, le narrateur part en voyage. Le livre I le mène au-delà du monde connu, puis jusqu'à la Lune, où il assiste à une guerre cosmique. Voici les grandes étapes, à savoir situer.

### Le départ : au-delà des colonnes d'Héraclès
- Le narrateur part des **colonnes d'Héraclès** (le détroit de Gibraltar), limite du monde connu, et s'engage dans l'**Océan** occidental avec une cinquantaine de compagnons.
- La raison du voyage : la **curiosité** de l'esprit, le désir de voir des choses nouvelles et de savoir où finit l'Océan, quels hommes vivent de l'autre côté.
- Le navire est bien équipé : vivres, eau, armes, un pilote expérimenté. Ce réalisme parodie les récits d'expédition.

### L'île du vin et les femmes-vignes
- Après une tempête, les voyageurs abordent une île où une inscription signale le passage d'**Héraclès** et de **Dionysos** ; on y voit leurs traces de pas, l'une immense.
- Un **fleuve de vin** coule dans l'île ; ses poissons ont le goût du vin et enivrent ceux qui les mangent.
- Ils rencontrent des **femmes-vignes** : femmes en haut, ceps de vigne en bas. Celles-ci embrassent les compagnons, qui restent pris, enracinés et changés en vignes. Le narrateur s'enfuit.
- On reconnaît l'humour de Lucien : une métamorphose comme chez Ovide ou Homère, mais traitée en farce.

### Le voyage dans les airs
- Un **tourbillon** soulève le navire et l'emporte dans le ciel pendant plusieurs jours, jusqu'à la **Lune**, une terre brillante suspendue dans l'air.

### La guerre de la Lune et du Soleil
- Sur la Lune règne **Endymion**, le berger aimé de Séléné dans le mythe. Il est en guerre contre **Phaéthon**, roi du Soleil, pour la colonisation de l'étoile du Matin.
- Les armées sont faites de créatures extraordinaires : les **Hippogypes** (des vautours géants qui servent de chevaux), des cavaliers montés sur des puces géantes, des soldats armés de légumes. Les chiffres des armées sont énormes et donnés avec précision.
- La bataille, la défaite, le traité de paix rédigé en bonne et due forme imitent les historiens de la guerre (Hérodote, Thucydide) : c'est la parodie de l'**histoire militaire**.
- Message satirique : les guerres pour des territoires lointains sont absurdes, sur la Lune comme sur la Terre.

### Les mœurs des Sélénites
- Sur la Lune, il n'y a pas de femmes ; les enfants naissent du mollet des hommes. Les habitants ne mangent pas : ils respirent la fumée de grenouilles grillées.
- Un miroir posé au-dessus d'un puits permet de voir et d'entendre tout ce qui se passe sur la Terre.
- Cette **ethnographie** imaginaire parodie les descriptions de peuples étranges chez Hérodote ou Ctésias.

### Le retour vers la mer
- En redescendant, les voyageurs passent par **Lychnopolis**, la ville des lampes, et par **Néphélococcygie**, la « ville des coucous dans les nuées » inventée par Aristophane dans Les Oiseaux.
- Ils retombent dans l'Océan, où les attend une nouvelle aventure : un monstre marin.

### À retenir pour le bac
- Départ des colonnes d'Héraclès vers l'Océan, poussé par la curiosité.
- Île au fleuve de vin, traces d'Héraclès et de Dionysos, femmes-vignes.
- Tourbillon, Lune, guerre d'Endymion et de Phaéthon : parodie de l'histoire militaire et satire de la guerre.
- Sélénites sans femmes, enfants nés du mollet ; Lychnopolis, Néphélococcygie (clin d'œil à Aristophane).`,
    cartes: [
      { q: "Point de départ du voyage", r: "Les colonnes d'Héraclès (détroit de Gibraltar), limite du monde connu." },
      { q: "Raison du voyage", r: "La curiosité : voir du nouveau et savoir ce qu'il y a au bout de l'Océan." },
      { q: "Traces trouvées sur l'île du vin", r: "Les traces de pas d'Héraclès et de Dionysos, l'une immense." },
      { q: "Particularité du fleuve de l'île", r: "C'est un fleuve de vin ; ses poissons enivrent." },
      { q: "Femmes-vignes", r: "Femmes en haut, ceps de vigne en bas ; elles enracinent les compagnons qui les embrassent." },
      { q: "Moyen d'aller sur la Lune", r: "Un tourbillon soulève le navire dans les airs." },
      { q: "Roi de la Lune", r: "Endymion." },
      { q: "Roi du Soleil", r: "Phaéthon." },
      { q: "Cause de la guerre cosmique", r: "La colonisation de l'étoile du Matin." },
      { q: "Hippogypes", r: "Vautours géants qui servent de chevaux aux soldats de la Lune." },
      { q: "Naissance des enfants sur la Lune", r: "Ils naissent du mollet des hommes, car il n'y a pas de femmes." },
      { q: "Lychnopolis", r: "La ville des lampes, traversée au retour de la Lune." },
      { q: "Néphélococcygie", r: "La ville des coucous dans les nuées, inventée par Aristophane dans Les Oiseaux." },
    ],
    quiz: [
      { q: "D'où part le narrateur pour son voyage ?",
        choix: ["Du port du Pirée", "Des colonnes d'Héraclès", "De l'embouchure du Nil", "De l'île d'Ithaque"],
        bonne: 1, niv: 1,
        expl: "C'est la limite occidentale du monde connu." },
      { q: "Quelle raison le narrateur donne-t-il à son voyage ?",
        choix: ["Un ordre de l'empereur, qui veut conquérir de nouvelles terres", "La fuite après un crime", "La recherche d'un trésor", "La curiosité et le désir de savoir"],
        bonne: 3, niv: 2,
        expl: "Il veut savoir ce qu'il y a au-delà de l'Océan." },
      { q: "Quel fleuve coule dans la première île ?",
        choix: ["Un fleuve de vin", "Un fleuve de lait", "Un fleuve d'or fondu", "Un fleuve de miel"],
        bonne: 0, niv: 1,
        expl: "Ses poissons enivrent ceux qui les mangent." },
      { q: "Que deviennent les compagnons qui embrassent les femmes-vignes ?",
        choix: ["Ils sont enracinés et changés en vignes", "Ils deviennent immortels et règnent sur l'île à leur place", "Ils retrouvent leur patrie", "Ils sont changés en poissons"],
        bonne: 0, niv: 2,
        expl: "Le narrateur, lui, s'enfuit à temps." },
      { q: "Comment le navire arrive-t-il sur la Lune ?",
        choix: ["Tiré par des oiseaux géants", "Grâce à une échelle de nuages", "Porté par une baleine volante", "Soulevé par un tourbillon"],
        bonne: 3, niv: 1,
        expl: "Le voyage dans les airs dure plusieurs jours." },
      { q: "Qui règne sur la Lune ?",
        choix: ["Phaéthon", "Séléné", "Zeus", "Endymion"],
        bonne: 3, niv: 2,
        expl: "Dans le mythe, Endymion est le berger aimé de Séléné." },
      { q: "Pourquoi la Lune et le Soleil se font-ils la guerre ?",
        choix: ["Pour coloniser l'étoile du Matin", "Pour la main d'une princesse", "Pour venger la mort d'un roi", "Pour un troupeau volé"],
        bonne: 0, niv: 2,
        expl: "La cause est aussi dérisoire que celle des guerres humaines." },
      { q: "Que parodie le récit de la bataille et du traité ?",
        choix: ["Les tragédies de Sophocle, où les héros meurent sur scène", "Les lois de Solon", "Les historiens de la guerre comme Thucydide", "Les hymnes à Apollon"],
        bonne: 2, niv: 3,
        expl: "Chiffres, ordre de bataille et traité imitent l'histoire militaire." },
      { q: "Comment naissent les enfants chez les Sélénites ?",
        choix: ["D'un œuf déposé dans un arbre", "D'une étoile qui tombe", "De la fumée des grenouilles", "Du mollet des hommes"],
        bonne: 3, niv: 2,
        expl: "Il n'y a pas de femmes sur la Lune." },
      { q: "De quelle comédie vient Néphélococcygie ?",
        choix: ["Les Nuées d'Aristophane", "L'Odyssée d'Homère", "Les Bacchantes d'Euripide", "Les Oiseaux d'Aristophane"],
        bonne: 3, niv: 3,
        expl: "C'est la ville des coucous dans les nuées." },
      { q: "Quel message satirique porte la guerre de la Lune et du Soleil ?",
        choix: ["Les dieux protègent les justes et punissent les rois", "La Lune est plus forte que le Soleil", "Les guerres de conquête sont absurdes", "Il faut obéir aux rois"],
        bonne: 2, niv: 3,
        expl: "La guerre cosmique renvoie aux guerres humaines." },
    ] },
  { chapitre: "llca-grec-4",
    fiche: `## Dans le ventre du monstre marin

À la fin du livre I, les voyageurs, revenus sur l'Océan, sont avalés avec leur navire par un monstre marin, un **kêtos** (le mot grec qui désigne les grands monstres de la mer, d'où vient le mot « cétacé »). Cet épisode, qui se prolonge au début du livre II, est l'un des plus célèbres de l'œuvre.

### Un monde à l'intérieur du monstre
- Le monstre est gigantesque : Lucien donne sa taille en stades, comme un géographe. Il avale le navire tout entier.
- À l'intérieur, il fait d'abord noir ; puis les voyageurs découvrent une vaste étendue, avec une **île**, des collines, des **forêts**, des oiseaux, et même un temple de **Poséidon**.
- Ils y rencontrent un vieillard et son fils, avalés eux aussi bien des années plus tôt, qui cultivent un jardin et vivent de poissons. Le vieillard, Chypriote, raconte son histoire.

### Une société dans le monstre
- D'autres peuples étranges vivent dans le ventre de la bête : ils ont des corps mi-humains, mi-poissons ou d'autres formes absurdes, et ils maltraitent le vieillard.
- Le narrateur organise une **guerre** contre eux, la gagne, et devient maître de ce petit monde. Le récit imite encore une fois les historiens : préparatifs, stratégie, bataille, bilan.
- Les voyageurs vivent là longtemps (plus d'un an et demi, dit le récit), occupés à cultiver et à chasser.

### Un spectacle depuis la gueule
- Depuis la gueule du monstre, ils assistent à une **bataille navale** entre des géants qui naviguent sur des îles flottantes en guise de navires. C'est une parodie des grandes batailles navales racontées par les historiens.

### La sortie (début du livre II)
- Lassés, ils décident de sortir. Ils mettent le feu à la forêt intérieure ; le monstre finit par mourir. Ils calent sa gueule ouverte et ressortent avec leur navire.
- Ils traversent ensuite une mer gelée, puis une mer de lait où se trouve une île de fromage, et rencontrent des hommes aux pieds de liège qui marchent sur l'eau.

### Comment lire l'épisode
- **Le vraisemblable dans l'invraisemblable** : la logique interne est rigoureuse (la lumière vient de la gueule ouverte, l'eau salée devient potable dans un puits…). C'est ce sérieux qui fait rire.
- **Un monde en miniature** : dans le ventre du monstre, on retrouve la société humaine avec ses guerres et ses conquêtes ; la satire porte sur l'homme lui-même.
- **Des échos littéraires** : l'histoire biblique de **Jonas**, avalé par un grand poisson, est souvent rapprochée de l'épisode ; plus tard, Rabelais (Pantagruel dont la bouche contient un monde) et Collodi (Pinocchio et Geppetto dans le ventre d'un monstre marin) reprennent le motif.
- **Le motif de l'enfermement** se prête à une comparaison avec Le Baron perché : un lieu impossible où l'on organise toute une vie.

### À retenir pour le bac
- **kêtos** : le monstre marin qui avale le navire à la fin du livre I.
- Dans son ventre : île, forêts, temple de Poséidon, un vieillard chypriote et son fils, des peuples hostiles.
- Guerre gagnée par le narrateur, long séjour, bataille de géants sur des îles flottantes.
- Sortie par le feu au début du livre II ; logique rigoureuse de l'absurde ; échos : Jonas, Rabelais, Pinocchio.`,
    cartes: [
      { q: "Kêtos", r: "Mot grec pour le grand monstre marin ; il a donné « cétacé »." },
      { q: "Où se trouve l'épisode du monstre marin ?", r: "À la fin du livre I, et sa sortie au début du livre II." },
      { q: "Ce que les voyageurs découvrent dans le monstre", r: "Une île, des collines, des forêts, des oiseaux et un temple de Poséidon." },
      { q: "Habitants trouvés dans le monstre", r: "Un vieillard chypriote et son fils, avalés des années plus tôt." },
      { q: "Autres peuples du ventre du monstre", r: "Des êtres aux formes absurdes, hostiles au vieillard." },
      { q: "Ce que fait le narrateur contre eux", r: "Il leur fait la guerre, la gagne et devient maître des lieux." },
      { q: "Durée du séjour dans le monstre", r: "Plus d'un an et demi, selon le récit." },
      { q: "Spectacle vu depuis la gueule", r: "Une bataille navale entre géants qui naviguent sur des îles flottantes." },
      { q: "Moyen de sortir du monstre", r: "Mettre le feu à la forêt intérieure : le monstre meurt et on cale sa gueule ouverte." },
      { q: "Merveilles après la sortie", r: "Une mer gelée, une mer de lait avec une île de fromage, des hommes aux pieds de liège." },
      { q: "Ce qui rend l'épisode drôle", r: "La logique rigoureuse et le ton sérieux appliqués à l'impossible." },
      { q: "Sens satirique de l'épisode", r: "Dans le ventre du monstre, la société humaine se reproduit avec ses guerres." },
      { q: "Œuvres qui reprennent le motif", r: "L'histoire biblique de Jonas (rapprochement), Rabelais, Pinocchio de Collodi." },
    ],
    quiz: [
      { q: "Que désigne le mot grec kêtos ?",
        choix: ["Un navire de guerre", "Une île flottante", "Un dieu de la mer", "Un grand monstre marin"],
        bonne: 3, niv: 1,
        expl: "Il a donné le mot français cétacé." },
      { q: "Que découvrent les voyageurs dans le ventre du monstre ?",
        choix: ["Un trésor de pièces d'or", "Le royaume des morts", "Une île avec des forêts et un temple", "Une ville de verre"],
        bonne: 2, niv: 1,
        expl: "Un monde entier se trouve à l'intérieur." },
      { q: "Qui vit dans le monstre avant l'arrivée des voyageurs ?",
        choix: ["Un vieillard chypriote et son fils", "Le roi Endymion, chassé de la Lune par Phaéthon", "Ulysse et ses compagnons", "Des femmes-vignes"],
        bonne: 0, niv: 2,
        expl: "Ils y ont été avalés bien des années plus tôt." },
      { q: "Quel dieu a un temple dans le ventre du monstre ?",
        choix: ["Apollon", "Poséidon", "Héphaïstos", "Arès"],
        bonne: 1, niv: 2,
        expl: "Le dieu de la mer, logiquement." },
      { q: "Que fait le narrateur face aux peuples hostiles du ventre ?",
        choix: ["Il les fuit en nageant", "Il les convertit à la philosophie", "Il leur fait la guerre et la gagne", "Il leur offre son navire"],
        bonne: 2, niv: 2,
        expl: "Le récit imite les historiens de la guerre." },
      { q: "Que voient les voyageurs depuis la gueule du monstre ?",
        choix: ["Le lever du Soleil sur la Lune et les étoiles du matin", "La ville de Rome", "Les Champs Élysées", "Une bataille de géants sur des îles flottantes"],
        bonne: 3, niv: 2,
        expl: "Les îles servent de navires aux géants." },
      { q: "Comment les voyageurs sortent-ils du monstre ?",
        choix: ["En creusant un tunnel dans son flanc", "Grâce à l'aide de Poséidon", "En attendant qu'il les recrache", "En mettant le feu à la forêt intérieure"],
        bonne: 3, niv: 2,
        expl: "Le monstre meurt et ils calent sa gueule ouverte." },
      { q: "Quelle merveille rencontrent-ils après leur sortie ?",
        choix: ["Une mer de vin avec des poissons d'or", "Une mer de lait avec une île de fromage", "Une forêt de cristal", "Un désert de neige noire"],
        bonne: 1, niv: 1,
        expl: "Ils traversent aussi une mer gelée." },
      { q: "Qu'est-ce qui rend comique cet épisode impossible ?",
        choix: ["Ses nombreuses chansons à boire, reprises en chœur par les compagnons", "Sa logique rigoureuse et son ton sérieux", "Ses fautes volontaires de grammaire", "La présence de dieux ridicules"],
        bonne: 1, niv: 3,
        expl: "Lucien traite l'absurde avec la précision d'un géographe." },
      { q: "Quel est le sens satirique de la vie dans le monstre ?",
        choix: ["Les animaux valent mieux que les hommes, même les plus sages", "La mer est le domaine des dieux", "La société humaine s'y reproduit avec ses guerres", "Il faut fuir les villes"],
        bonne: 2, niv: 3,
        expl: "Même dans un monstre, les hommes se font la guerre." },
      { q: "Quel récit rapproche-t-on souvent de cet épisode ?",
        choix: ["Œdipe face au Sphinx", "Persée sauvant Andromède", "Thésée dans le Labyrinthe", "Jonas avalé par un grand poisson"],
        bonne: 3, niv: 3,
        expl: "Pinocchio et Rabelais reprennent aussi le motif." },
    ] },
  { chapitre: "llca-grec-5",
    fiche: `## Livre II : l'île des Bienheureux et la fin du voyage

Le livre II conduit les voyageurs dans l'au-delà des héros, l'île des Bienheureux, où Lucien rencontre poètes et philosophes. C'est le cœur de la satire littéraire de l'œuvre.

### L'île des Bienheureux
- Les voyageurs abordent l'**île des Bienheureux** (en grec **Makarôn nêsos**), séjour des héros et des sages après leur mort. L'air y est parfumé, la lumière douce, ni jour ni nuit.
- Le juge des lieux est **Rhadamanthe**, l'un des juges des morts dans la mythologie. Il examine le cas des vivants arrivés là et leur accorde un séjour limité.
- Les habitants n'ont pas de corps, mais une forme qui en a l'apparence ; ils festoient, chantent et boivent sans fin.

### Homère interrogé
- Le narrateur rencontre **Homère** et lui pose les questions que se posaient les savants d'Alexandrie : d'où il vient (il répond qu'il est babylonien et non grec), s'il a écrit les vers que les critiques jugent faux, pourquoi l'Iliade commence par la colère d'Achille.
- Homère répond simplement, sans grande théorie, ce qui ridiculise les **philologues** qui se disputaient sur ces questions.
- On assiste aussi à des jeux et à des combats, où Homère et Hésiode s'affrontent dans un concours de poésie.

### Philosophes et héros
- **Socrate** est là et continue de questionner tout le monde ; **Platon**, lui, est absent : il vit, dit-on, dans la cité qu'il a lui-même imaginée, sa République.
- **Pythagore** et d'autres sages sont présents ; certains philosophes trop sévères ou trop orgueilleux ne sont pas admis.
- Les héros de la guerre de Troie y vivent, Achille et Ulysse notamment ; **Hélène** est là aussi.

### Scandale et départ
- Un compagnon du narrateur, **Kinyras**, s'éprend d'Hélène et s'enfuit avec elle : nouvel enlèvement d'Hélène, parodie de la cause de la guerre de Troie. Les fugitifs sont rattrapés et punis.
- Les voyageurs sont renvoyés de l'île. Avant le départ, **Ulysse** confie en secret au narrateur une lettre pour **Calypso**, la nymphe qui l'avait retenu sur son île.

### L'île des Impies et l'île des Songes
- Ils passent près de l'**île des Impies**, où les pires criminels sont punis ; parmi eux, les auteurs qui ont écrit des mensonges, comme **Ctésias** et **Hérodote**. Le narrateur, rassuré, se dit qu'il n'a jamais menti à ses lecteurs.
- Ils visitent ensuite l'**île des Songes**, peuplée de rêves aux formes variées, qui rappelle les portes des songes chez Homère.
- Sur l'île de **Calypso**, ils remettent la lettre d'Ulysse : la nymphe pleure en la lisant.

### La fin : un dernier mensonge
- D'autres aventures suivent (pirates, femmes aux jambes d'âne qui dévorent les voyageurs), puis le navire fait naufrage sur la terre ferme d'un autre continent, de l'autre côté de l'Océan.
- Le livre se termine en annonçant que la suite sera racontée dans les livres suivants. Ils n'ont jamais été écrits : c'est la dernière plaisanterie, le dernier mensonge de Lucien.

### À retenir pour le bac
- Île des Bienheureux (**Makarôn nêsos**) : Rhadamanthe, Homère interrogé, Socrate présent, Platon absent dans sa République.
- Satire des philologues (questions sur Homère) et parodie de l'enlèvement d'Hélène par Kinyras.
- Lettre d'Ulysse à Calypso ; île des Impies où sont punis les menteurs, Ctésias et Hérodote ; île des Songes.
- Fin sur une suite promise et jamais écrite : le dernier mensonge.`,
    cartes: [
      { q: "Makarôn nêsos", r: "L'île des Bienheureux, séjour des héros et des sages après la mort." },
      { q: "Juge de l'île des Bienheureux", r: "Rhadamanthe, l'un des juges des morts." },
      { q: "Origine d'Homère selon sa réponse", r: "Il se dit babylonien, et non grec." },
      { q: "Ce que ridiculisent les questions posées à Homère", r: "Les disputes des philologues sur sa patrie et ses vers." },
      { q: "Philosophe absent de l'île", r: "Platon, qui vit dans la cité qu'il a imaginée, sa République." },
      { q: "Ce que fait Socrate sur l'île", r: "Il continue de questionner tout le monde." },
      { q: "Kinyras", r: "Compagnon du narrateur qui enlève Hélène : parodie de la cause de la guerre de Troie." },
      { q: "Message confié par Ulysse", r: "Une lettre secrète pour la nymphe Calypso." },
      { q: "Île des Impies", r: "Île où sont punis les criminels, dont les auteurs menteurs comme Ctésias et Hérodote." },
      { q: "Île des Songes", r: "Île peuplée de rêves, qui rappelle les portes des songes chez Homère." },
      { q: "Réaction de Calypso à la lettre", r: "Elle pleure en la lisant." },
      { q: "Où finit le voyage ?", r: "Le navire fait naufrage sur un autre continent, de l'autre côté de l'Océan." },
      { q: "Dernier mensonge de Lucien", r: "Il promet une suite dans d'autres livres, jamais écrits." },
    ],
    quiz: [
      { q: "Comment s'appelle l'île où vivent les héros après leur mort ?",
        choix: ["L'île des Songes", "L'île des Impies", "L'île des Bienheureux", "L'île de Calypso"],
        bonne: 2, niv: 1,
        expl: "En grec, Makarôn nêsos." },
      { q: "Qui juge les arrivants sur l'île des Bienheureux ?",
        choix: ["Rhadamanthe", "Zeus", "Charon", "Minos et Hadès ensemble"],
        bonne: 0, niv: 2,
        expl: "Il accorde aux vivants un séjour limité." },
      { q: "Que répond Homère quand on lui demande sa patrie ?",
        choix: ["Qu'il est babylonien", "Qu'il est né à Athènes", "Qu'il est d'Ithaque", "Qu'il l'a oubliée"],
        bonne: 0, niv: 2,
        expl: "La réponse ridiculise les disputes des savants." },
      { q: "Pourquoi Platon est-il absent de l'île ?",
        choix: ["Il a été chassé par Socrate après une dispute sur l'âme", "Il est puni sur l'île des Impies", "Il vit dans la cité qu'il a imaginée", "Il voyage sur la Lune"],
        bonne: 2, niv: 3,
        expl: "Il habite sa propre République." },
      { q: "Que fait Kinyras, le compagnon du narrateur ?",
        choix: ["Il tue un héros troyen", "Il s'enfuit avec Hélène", "Il vole la lettre d'Ulysse", "Il devient roi de l'île"],
        bonne: 1, niv: 2,
        expl: "C'est la parodie de l'enlèvement d'Hélène." },
      { q: "Que confie Ulysse au narrateur ?",
        choix: ["Son arc pour Pénélope", "Une lettre pour Calypso", "Une carte de l'Océan", "Le secret de son retour"],
        bonne: 1, niv: 1,
        expl: "Calypso pleure en la lisant." },
      { q: "Qui est puni sur l'île des Impies ?",
        choix: ["Les compagnons du narrateur", "Les femmes-vignes", "Des auteurs menteurs comme Ctésias et Hérodote", "Des soldats de la Lune"],
        bonne: 2, niv: 2,
        expl: "Le narrateur se félicite de n'avoir pas trompé ses lecteurs." },
      { q: "Quel détail est ironique quand le narrateur voit les menteurs punis ?",
        choix: ["Il reconnaît son propre père", "Il décide d'arrêter d'écrire", "Il se croit à l'abri alors qu'il ment sans cesse", "Il prend la place de Rhadamanthe"],
        bonne: 2, niv: 3,
        expl: "Il a pourtant avoué mentir dès le prologue." },
      { q: "Quelle île est peuplée de rêves ?",
        choix: ["L'île des Bienheureux", "L'île du vin", "L'île de fromage", "L'île des Songes"],
        bonne: 3, niv: 1,
        expl: "Elle rappelle les portes des songes chez Homère." },
      { q: "Où se termine le voyage ?",
        choix: ["À Athènes, devant l'Acropole", "Sur la Lune, dans un palais", "Dans le ventre d'un monstre", "Sur un autre continent, après un naufrage"],
        bonne: 3, niv: 2,
        expl: "Il se trouve de l'autre côté de l'Océan." },
      { q: "Pourquoi la fin du livre II est-elle un dernier mensonge ?",
        choix: ["Le narrateur meurt dans le naufrage, au moment d'arriver", "Le voyage n'était qu'un rêve", "La suite promise n'a pas été écrite", "Homère a écrit la fin à sa place"],
        bonne: 2, niv: 3,
        expl: "Lucien annonce d'autres livres qui n'existent pas." },
    ] },
  { chapitre: "llca-grec-6",
    fiche: `## Parodie, satire et rire : les procédés de Lucien

Pour commenter un passage des Histoires vraies, il faut savoir nommer les procédés comiques et dire à quoi ils servent. Lucien ne rit pas seulement pour amuser : il apprend à son lecteur à douter.

### La parodie
- La **parodie** (le mot vient du grec **parôidia**, chant à côté) imite un texte ou un genre sérieux pour en rire.
- Lucien parodie l'**épopée** (l'Odyssée d'Homère : voyage, tempêtes, monstres, retour impossible), le **récit de voyage** (Ctésias, Iamboulos) et l'**histoire** (Hérodote pour les peuples étranges, Thucydide pour la guerre).
- Il reprend leurs formules : « je l'ai vu de mes yeux », les chiffres précis, les distances en stades, les inscriptions trouvées sur place, les témoins.

### L'exagération et le merveilleux en série
- L'**hyperbole** grossit tout : armées de millions de soldats, monstre long de centaines de stades, araignées géantes qui tissent une toile entre la Lune et l'étoile du Matin.
- Les **merveilles** (**thaumasia**) s'enchaînent sans pause : le lecteur n'a pas le temps de s'étonner d'une invention qu'une autre arrive.
- L'**accumulation** de détails pratiques (ce qu'on mange, comment on s'habille, comment on naît) donne l'impression d'un reportage.

### La logique de l'absurde
- Lucien part d'une idée impossible et en tire toutes les conséquences avec rigueur : si les Sélénites n'ont pas de femmes, il faut expliquer comment naissent les enfants ; si l'on vit dans un monstre, il faut de la lumière et de l'eau.
- Ce sérieux appliqué à l'absurde est le ressort principal du comique.

### L'ironie
- L'**ironie** consiste à dire le contraire de ce qu'on pense en laissant le lecteur le comprendre. Le titre « récits vrais » en est le premier exemple.
- Autre exemple : sur l'île des Impies, le narrateur se félicite de n'avoir jamais menti, alors que tout son récit est mensonge.

### La satire
- La **satire** critique en se moquant. Ses cibles chez Lucien : la **crédulité** des lecteurs, la vanité des historiens qui inventent, les disputes des savants sur Homère, l'absurdité des **guerres** de conquête, l'orgueil des philosophes.
- Le rire devient une arme contre l'erreur et le mensonge : c'est un rire **critique**.

### Le jeu avec le lecteur cultivé
- Le texte est plein d'**intertextualité** : allusions à Homère, Hérodote, Aristophane, Platon. Le lecteur qui les reconnaît rit deux fois.
- Lucien crée une **complicité** : auteur et lecteur savent tous deux que tout est faux.

### Une œuvre fondatrice
- Les Histoires vraies sont souvent présentées comme l'un des premiers récits de **voyage imaginaire**, et même comme un ancêtre de la science-fiction (voyage sur la Lune, guerre entre planètes).
- Elles inspirent Rabelais (Quart Livre), Cyrano de Bergerac (Les États et Empires de la Lune), Swift (Voyages de Gulliver), Voltaire (Micromégas).

### À retenir pour le bac
- Parodie (**parôidia**) de l'épopée, du récit de voyage et de l'histoire.
- Hyperbole, accumulation de merveilles (**thaumasia**), logique rigoureuse de l'absurde.
- Ironie et satire : crédulité, faux savants, guerres, philosophes orgueilleux.
- Intertextualité et complicité ; ancêtre du voyage imaginaire et de la science-fiction.`,
    cartes: [
      { q: "Parodie", r: "Imitation comique d'un texte ou d'un genre sérieux ; du grec parôidia, chant à côté." },
      { q: "Genres parodiés par Lucien", r: "L'épopée, le récit de voyage et l'histoire." },
      { q: "Formules d'historien imitées", r: "« Je l'ai vu de mes yeux », chiffres précis, distances, inscriptions, témoins." },
      { q: "Hyperbole", r: "Exagération : armées immenses, monstre gigantesque, araignées géantes." },
      { q: "Thaumasia", r: "Les merveilles, les choses étonnantes qu'accumulent les récits de voyage." },
      { q: "Logique de l'absurde", r: "Tirer avec rigueur toutes les conséquences d'une idée impossible." },
      { q: "Ironie", r: "Dire le contraire de ce qu'on pense en laissant le lecteur le comprendre." },
      { q: "Exemple d'ironie dans l'œuvre", r: "Le titre « récits vrais », ou le narrateur qui se dit honnête devant les menteurs punis." },
      { q: "Satire", r: "Critique moqueuse des défauts et des erreurs des hommes." },
      { q: "Cibles de la satire de Lucien", r: "La crédulité, les historiens menteurs, les savants, les guerres, les philosophes orgueilleux." },
      { q: "Intertextualité", r: "Présence d'allusions à d'autres textes (Homère, Hérodote, Aristophane, Platon)." },
      { q: "Pourquoi parle-t-on d'ancêtre de la science-fiction ?", r: "Voyage sur la Lune, guerre entre astres, peuples extraterrestres." },
      { q: "Héritiers modernes des Histoires vraies", r: "Rabelais, Cyrano de Bergerac, Swift, Voltaire (Micromégas)." },
    ],
    quiz: [
      { q: "Que signifie à l'origine le grec parôidia ?",
        choix: ["Un chant de deuil", "Un chant de guerre", "Un chant à côté", "Un chant d'amour"],
        bonne: 2, niv: 2,
        expl: "La parodie imite un texte sérieux pour en rire." },
      { q: "Quel genre épique Lucien parodie-t-il surtout ?",
        choix: ["La Théogonie d'Hésiode", "Les Travaux et les Jours", "Les Hymnes homériques", "L'Odyssée d'Homère"],
        bonne: 3, niv: 1,
        expl: "Voyage, tempêtes et monstres viennent d'Ulysse." },
      { q: "Quel procédé grossit tout dans le récit ?",
        choix: ["La litote", "L'hyperbole", "L'euphémisme", "La métonymie"],
        bonne: 1, niv: 1,
        expl: "Les armées et les monstres sont démesurés." },
      { q: "Que désigne le mot grec thaumasia ?",
        choix: ["Les mensonges", "Les merveilles", "Les guerres", "Les voyages"],
        bonne: 1, niv: 2,
        expl: "Ce sont les choses étonnantes des récits de voyage." },
      { q: "Quel est le ressort principal du comique de Lucien ?",
        choix: ["Le sérieux appliqué à une idée absurde", "Les jeux de mots grossiers", "Des chutes et des coups", "Les quiproquos amoureux"],
        bonne: 0, niv: 3,
        expl: "Il tire toutes les conséquences d'une idée impossible." },
      { q: "Quel exemple d'ironie trouve-t-on dès le titre ?",
        choix: ["Appeler « voyage » un séjour immobile dans une seule ville", "Donner un titre latin à un texte grec", "Laisser le livre sans titre", "Appeler « récits vrais » un livre de mensonges"],
        bonne: 3, niv: 1,
        expl: "Le prologue avoue que tout est faux." },
      { q: "Que critique la satire de Lucien ?",
        choix: ["Les jeux Olympiques", "La démocratie athénienne", "La crédulité et les faux savants", "La religion chrétienne naissante"],
        bonne: 2, niv: 2,
        expl: "Elle vise aussi l'absurdité des guerres." },
      { q: "Qu'est-ce que l'intertextualité ?",
        choix: ["La présence d'allusions à d'autres textes", "La traduction d'un texte dans une autre langue", "Le résumé d'un texte", "La division d'un livre en chapitres"],
        bonne: 0, niv: 2,
        expl: "Lucien renvoie à Homère, Hérodote, Aristophane, Platon." },
      { q: "Quelle relation Lucien crée-t-il avec son lecteur ?",
        choix: ["Une méfiance : il le trompe sans le lui dire, du début à la fin", "Une complicité : l'auteur et lui savent que c'est faux", "Une distance : il refuse de lui parler", "Une obéissance : il lui donne des ordres"],
        bonne: 1, niv: 3,
        expl: "Le pacte du prologue fonde ce jeu." },
      { q: "Pourquoi voit-on dans l'œuvre un ancêtre de la science-fiction ?",
        choix: ["Elle décrit des machines modernes", "Elle se passe dans le futur", "Elle raconte un voyage sur la Lune et une guerre entre astres", "Elle invente des robots"],
        bonne: 2, niv: 2,
        expl: "Cyrano et Voltaire reprendront le voyage dans l'espace." },
      { q: "Quelle œuvre de Voltaire hérite du voyage imaginaire de Lucien ?",
        choix: ["Candide", "Zadig", "L'Ingénu", "Micromégas"],
        bonne: 3, niv: 3,
        expl: "Un géant venu d'une autre planète y observe les hommes." },
    ] },
  { chapitre: "llca-grec-7",
    fiche: `## Italo Calvino, Le Baron perché

L'œuvre moderne associée aux Histoires vraies est **Le Baron perché** d'Italo Calvino (traduction de Martin Rueff, Folio, 2019). Comme le voyageur de Lucien, son héros quitte le monde ordinaire pour mieux l'observer.

### L'auteur
- **Italo Calvino** (1923-1985) naît à Cuba, mais grandit à **San Remo**, en Ligurie, sur la côte italienne. Il combat dans la **Résistance** contre le fascisme pendant la Seconde Guerre mondiale.
- Écrivain italien majeur, il passe du réalisme de ses débuts à des récits pleins d'imagination et de jeu (Les Villes invisibles, Si par une nuit d'hiver un voyageur). Il rejoint plus tard l'**Oulipo**, groupe d'écrivains qui inventent des contraintes d'écriture.
- Le Baron perché (en italien Il barone rampante) paraît en **1957**. C'est le deuxième volet d'une trilogie, **Nos ancêtres**, entre Le Vicomte pourfendu (1952) et Le Chevalier inexistant (1959).

### L'histoire
- Le récit commence le **15 juin 1767**, à **Ombrosa**, une ville imaginaire de Ligurie. Au déjeuner, le jeune **Cosimo Piovasco di Rondò**, douze ans, fils aîné du baron, refuse de manger un plat d'**escargots**.
- Puni, il quitte la table, grimpe dans l'yeuse (un chêne vert) du jardin et déclare qu'il n'en descendra plus. Il tient parole : il vivra toute sa vie dans les **arbres**, sans jamais remettre pied à terre.
- Le narrateur est son frère cadet, **Biagio**, resté à terre, qui raconte la vie de Cosimo avec admiration et un peu d'incompréhension.

### Une vie entière dans les arbres
- Cosimo passe d'arbre en arbre à travers les forêts, apprend à chasser, à se protéger, à dormir là-haut.
- Il aime **Viola**, une jeune voisine, d'un amour passionné et difficile.
- Il lit énormément, correspond avec des savants, s'intéresse aux idées des **Lumières** ; il aide les habitants (contre les incendies, contre des pirates), organise des projets pour la communauté.
- Il traverse l'histoire de son époque : la Révolution française, les guerres napoléoniennes ; il rencontre même Napoléon.
- Vieux et malade, il saisit au vol la corde d'une **montgolfière** qui passe au-dessus de la mer et disparaît : il ne touche donc jamais la terre, même mort.

### Les grands thèmes
- **La liberté et la révolte** : un refus d'enfant devient le choix d'une vie, fidèle à une décision.
- **Prendre de la hauteur** : vivre à l'écart pour mieux voir et mieux juger la société, sans s'en couper. Cosimo reste mêlé à la vie des hommes.
- **Les Lumières** : la raison, la curiosité, la critique des privilèges et des préjugés.
- **Le rapport à la nature** : les arbres, la forêt, les animaux.
- **Le conte philosophique** : une situation impossible racontée avec précision et humour, comme chez Voltaire, pour faire réfléchir.

### À retenir pour le bac
- Calvino (1923-1985), écrivain italien, résistant, puis membre de l'Oulipo ; Le Baron perché, 1957, trilogie Nos ancêtres.
- 15 juin 1767, Ombrosa : Cosimo, douze ans, refuse les escargots et monte dans les arbres pour toujours ; narrateur : son frère Biagio.
- Amour pour Viola, lectures et idées des Lumières, Révolution et Napoléon ; départ final accroché à une montgolfière.
- Thèmes : liberté, hauteur et regard critique, Lumières, nature, conte philosophique.`,
    cartes: [
      { q: "Dates d'Italo Calvino", r: "1923-1985." },
      { q: "Ville de jeunesse de Calvino", r: "San Remo, en Ligurie, sur la côte italienne." },
      { q: "Engagement de Calvino pendant la guerre", r: "La Résistance contre le fascisme." },
      { q: "Date de parution du Baron perché", r: "1957." },
      { q: "Trilogie Nos ancêtres", r: "Le Vicomte pourfendu (1952), Le Baron perché (1957), Le Chevalier inexistant (1959)." },
      { q: "Date et lieu du début du récit", r: "Le 15 juin 1767, à Ombrosa, ville imaginaire de Ligurie." },
      { q: "Pourquoi Cosimo monte-t-il dans l'arbre ?", r: "Il refuse de manger un plat d'escargots et quitte la table." },
      { q: "Âge de Cosimo quand il monte dans l'arbre", r: "Douze ans." },
      { q: "Narrateur du roman", r: "Biagio, le frère cadet de Cosimo, resté à terre." },
      { q: "Viola", r: "La jeune voisine que Cosimo aime d'un amour passionné et difficile." },
      { q: "Idées qui passionnent Cosimo", r: "Celles des Lumières : raison, curiosité, critique des préjugés." },
      { q: "Fin de Cosimo", r: "Vieux et malade, il s'accroche à une montgolfière et disparaît au-dessus de la mer." },
      { q: "Groupe littéraire rejoint par Calvino", r: "L'Oulipo, qui invente des contraintes d'écriture." },
    ],
    quiz: [
      { q: "En quelle année paraît Le Baron perché ?",
        choix: ["En 1767", "En 1923", "En 1957", "En 1985"],
        bonne: 2, niv: 1,
        expl: "1767 est l'année où commence le récit." },
      { q: "Dans quelle trilogie s'inscrit Le Baron perché ?",
        choix: ["Les Villes invisibles", "La Comédie humaine", "Nos ancêtres", "Les Rougon-Macquart"],
        bonne: 2, niv: 2,
        expl: "Il se place entre Le Vicomte pourfendu et Le Chevalier inexistant." },
      { q: "Quel plat Cosimo refuse-t-il de manger le 15 juin 1767 ?",
        choix: ["Une soupe de poissons de la côte ligure", "Du gibier", "Des huîtres", "Des escargots"],
        bonne: 3, niv: 1,
        expl: "Puni, il quitte la table et monte dans l'yeuse du jardin." },
      { q: "Quel âge a Cosimo quand il monte dans l'yeuse ?",
        choix: ["Douze ans", "Huit ans", "Seize ans", "Vingt ans"],
        bonne: 0, niv: 1,
        expl: "C'est le 15 juin 1767." },
      { q: "Qui raconte l'histoire de Cosimo ?",
        choix: ["Cosimo lui-même", "Sa voisine Viola", "Son frère cadet Biagio", "Son père le baron"],
        bonne: 2, niv: 2,
        expl: "Le narrateur est resté à terre." },
      { q: "Où se déroule le récit ?",
        choix: ["À Ombrosa, ville imaginaire de Ligurie", "À Paris, pendant la Révolution", "À Rome, au Vatican", "À Cuba, dans une plantation"],
        bonne: 0, niv: 2,
        expl: "Calvino a grandi en Ligurie." },
      { q: "Quelles idées passionnent Cosimo ?",
        choix: ["Celles du Moyen Âge chevaleresque", "Celles des Lumières", "Celles du romantisme allemand", "Celles du surréalisme"],
        bonne: 1, niv: 2,
        expl: "Il lit et correspond avec des savants." },
      { q: "Quel grand personnage historique Cosimo rencontre-t-il ?",
        choix: ["Louis XIV", "Jules César", "Garibaldi", "Napoléon"],
        bonne: 3, niv: 2,
        expl: "Le roman traverse la Révolution et l'Empire." },
      { q: "Comment Cosimo quitte-t-il le monde à la fin ?",
        choix: ["En redescendant enfin sur terre pour mourir dans la maison de son enfance", "Accroché à une montgolfière au-dessus de la mer", "Par une chute depuis la plus haute branche", "En partant en bateau pour l'Amérique"],
        bonne: 1, niv: 3,
        expl: "Il ne touche donc jamais la terre." },
      { q: "Que signifie le choix de vivre dans les arbres ?",
        choix: ["Fuir définitivement toute société, sans plus parler à personne", "Prendre de la hauteur sans se couper des hommes", "Obéir à son père", "Imiter les singes de la forêt"],
        bonne: 1, niv: 3,
        expl: "Cosimo reste mêlé à la vie d'Ombrosa." },
      { q: "À quel genre le roman fait-il penser par sa situation impossible racontée avec humour ?",
        choix: ["À la tragédie classique", "Au roman policier", "À l'épopée homérique", "Au conte philosophique"],
        bonne: 3, niv: 3,
        expl: "Comme chez Voltaire, l'invention fait réfléchir." },
    ] },
  { chapitre: "llca-grec-8",
    fiche: `## Lucien et Calvino : confronter les deux œuvres

L'essai demande de **confronter** l'œuvre antique et l'œuvre moderne. Les présentations officielles du programme rapprochent les deux héros par leur **curiosité** : l'un prend le large, l'autre prend de la hauteur pour mieux observer le monde, sans se tenir à l'écart des mondes traversés, où les guerres font rage. Voici les grands axes à mobiliser dans chaque partie.

### Deux façons de quitter le monde ordinaire
- Le voyageur de Lucien **prend le large** : il franchit les colonnes d'Héraclès et part sur l'Océan, puis jusqu'à la Lune.
- Cosimo **prend de la hauteur** : il monte dans un arbre et n'en redescend plus, mais il reste à Ombrosa, au-dessus de sa propre ville.
- Le premier s'éloigne dans l'espace, le second se déplace verticalement. Tous deux regardent le monde d'un point de vue nouveau.

### La curiosité, moteur du récit
- Chez Lucien, le voyage naît de la curiosité de l'esprit, du désir de savoir ce qu'il y a au bout de l'Océan.
- Chez Calvino, Cosimo lit, observe la nature, s'informe, correspond avec des savants : sa curiosité est celle des **Lumières**.
- Dans les deux cas, la curiosité est une valeur : savoir, découvrir, ne pas se contenter des idées reçues.

### Un monde à part qui ressemble au nôtre
- La Lune, le ventre du monstre, l'île des Bienheureux reproduisent la société humaine : guerres, lois, banquets, disputes.
- Le monde des arbres de Cosimo est lui aussi organisé : il y a ses chemins, ses voisins, ses amours, ses combats.
- Ce monde à part sert de **miroir** : en le regardant, on voit mieux les défauts du nôtre.

### La guerre partout
- Chez Lucien : guerre de la Lune et du Soleil, guerre dans le ventre du monstre, bataille des géants sur les îles.
- Chez Calvino : la Révolution française, les guerres napoléoniennes, les conflits qui traversent la Ligurie.
- Les deux héros ne fuient pas ces guerres : ils y prennent part, et le récit montre leur absurdité ou leur violence.

### Vérité, fiction et invraisemblance
- Lucien **avoue** son mensonge dès le prologue ; son récit impossible imite le ton des historiens.
- Calvino raconte une vie impossible avec un grand **réalisme** des détails (comment manger, dormir, se laver dans les arbres) ; le narrateur, Biagio, se présente comme un témoin.
- Dans les deux cas, l'invraisemblable raconté avec précision produit le comique et invite à réfléchir : c'est le principe du **conte philosophique**.

### Le rire et la critique
- Lucien raille la crédulité, les faux savants et les guerres.
- Calvino sourit des préjugés de la noblesse, des disputes familiales, des modes intellectuelles, tout en admirant la fidélité de Cosimo à son choix.
- Un lien historique : les auteurs des Lumières (Voltaire, Swift) ont lu Lucien ; Calvino écrit un roman situé au siècle des Lumières.

### Des sujets d'essai possibles
- « Faut-il s'éloigner du monde pour mieux le voir ? »
- « Pourquoi raconter des histoires qui ne sont pas vraies ? »
- « La curiosité est-elle toujours une qualité ? »
- « Le héros peut-il échapper aux guerres de son temps ? »

### À retenir pour le bac
- L'un prend le large (Lucien), l'autre prend de la hauteur (Calvino) : un regard nouveau sur le monde.
- La curiosité comme valeur ; un monde à part qui sert de miroir au nôtre.
- La guerre traverse les deux œuvres ; les héros y prennent part.
- L'invraisemblable raconté avec précision : comique, conte philosophique, héritage de Lucien chez les Lumières.`,
    cartes: [
      { q: "Confronter deux œuvres", r: "Montrer, dans chaque partie de l'essai, ce qui les rapproche et ce qui les sépare." },
      { q: "Mouvement du voyageur de Lucien", r: "Il prend le large : l'Océan, puis la Lune." },
      { q: "Mouvement de Cosimo", r: "Il prend de la hauteur : il monte dans les arbres au-dessus de sa ville." },
      { q: "Point commun des deux héros", r: "La curiosité, qui leur fait regarder le monde d'un point de vue nouveau." },
      { q: "Curiosité de Cosimo", r: "Celle des Lumières : lectures, observation de la nature, correspondance avec des savants." },
      { q: "Rôle des mondes à part", r: "Servir de miroir où l'on voit mieux les défauts de notre monde." },
      { q: "Guerres chez Lucien", r: "Lune contre Soleil, guerre dans le monstre, bataille des géants." },
      { q: "Guerres chez Calvino", r: "La Révolution française et les guerres napoléoniennes." },
      { q: "Attitude des héros face aux guerres", r: "Ils ne les fuient pas : ils y prennent part." },
      { q: "Rapport à la vérité chez Lucien", r: "Il avoue mentir et imite le ton des historiens." },
      { q: "Rapport à la vérité chez Calvino", r: "Une vie impossible racontée avec un grand réalisme des détails, par un frère témoin." },
      { q: "Conte philosophique", r: "Récit invraisemblable raconté avec précision et humour pour faire réfléchir." },
      { q: "Lien historique entre les deux œuvres", r: "Les auteurs des Lumières ont lu Lucien ; Calvino situe son roman au siècle des Lumières." },
    ],
    quiz: [
      { q: "Que demande l'essai à propos des deux œuvres ?",
        choix: ["De les confronter dans chaque partie", "De les résumer l'une après l'autre", "De choisir la meilleure des deux", "De traduire l'œuvre moderne en grec"],
        bonne: 0, niv: 1,
        expl: "Une partie par œuvre ne suffit pas." },
      { q: "Quel mouvement fait le voyageur de Lucien ?",
        choix: ["Il prend le large sur l'Océan", "Il descend sous la terre", "Il reste dans sa ville", "Il monte dans un arbre"],
        bonne: 0, niv: 1,
        expl: "Il franchit les colonnes d'Héraclès." },
      { q: "Quel mouvement fait Cosimo ?",
        choix: ["Il prend la mer", "Il s'enfonce dans une grotte", "Il prend de la hauteur", "Il part pour l'Afrique"],
        bonne: 2, niv: 1,
        expl: "Il reste au-dessus de sa propre ville." },
      { q: "Quelle qualité commune aux deux héros les présentations officielles soulignent-elles ?",
        choix: ["La prudence", "La curiosité", "L'obéissance", "La richesse"],
        bonne: 1, niv: 2,
        expl: "Ils veulent mieux observer le monde." },
      { q: "À quoi servent les mondes à part des deux œuvres ?",
        choix: ["De refuge loin de toute société", "De décor sans importance", "De preuve de l'existence des dieux", "De miroir pour voir les défauts du nôtre"],
        bonne: 3, niv: 2,
        expl: "La Lune comme les arbres reproduisent la société humaine." },
      { q: "Quelles guerres traversent Le Baron perché ?",
        choix: ["La guerre de Troie", "La Révolution et les guerres napoléoniennes", "La guerre du Péloponnèse", "La Première Guerre mondiale"],
        bonne: 1, niv: 2,
        expl: "Cosimo rencontre même Napoléon." },
      { q: "Quelle attitude les deux héros ont-ils face aux guerres ?",
        choix: ["Ils les ignorent", "Ils les empêchent par magie", "Ils les fuient sans cesse", "Ils y prennent part"],
        bonne: 3, niv: 2,
        expl: "Ils ne se tiennent pas à l'écart des mondes traversés." },
      { q: "Qu'ont en commun les deux récits dans leur manière de raconter ?",
        choix: ["Un style poétique en vers réguliers, imité des épopées d'Homère", "Une fin heureuse et morale", "Un narrateur omniscient divin", "Un invraisemblable raconté avec précision"],
        bonne: 3, niv: 3,
        expl: "C'est le principe du conte philosophique." },
      { q: "Quel est le rôle de Biagio dans Le Baron perché ?",
        choix: ["Un ennemi qui veut faire tomber Cosimo de son arbre pour hériter du titre", "Un frère témoin qui raconte la vie de Cosimo", "Un savant qui écrit à Cosimo", "Un pirate qui attaque Ombrosa"],
        bonne: 1, niv: 3,
        expl: "Il donne au récit l'air d'un témoignage." },
      { q: "Quel lien historique relie Lucien et le roman de Calvino ?",
        choix: ["Calvino a traduit Lucien en italien", "Lucien a vécu en Ligurie", "Elles ont paru la même année", "Les Lumières ont lu Lucien ; le roman se passe au XVIIIe siècle"],
        bonne: 3, niv: 3,
        expl: "Voltaire et Swift sont des héritiers de Lucien." },
      { q: "Quel sujet d'essai convient à la confrontation ?",
        choix: ["Les escargots sont-ils un plat digne de la table d'un baron ?", "Faut-il s'éloigner du monde pour mieux le voir ?", "La Lune est-elle habitée ?", "Homère est-il babylonien ?"],
        bonne: 1, niv: 2,
        expl: "Il touche la curiosité et le regard critique." },
    ] },
  { chapitre: "llca-grec-9",
    fiche: `## Objet d'étude : Croire, savoir, douter

Cet objet d'étude du programme de terminale éclaire directement les Histoires vraies : vérité et mensonge, croyance et doute y sont au premier plan. Il compte quatre sous-ensembles : magie et pratiques magiques ; naissance de la pensée rationnelle ; maîtres et disciples ; polythéismes et monothéismes.

### Le vocabulaire grec
- **alêtheia** : la vérité, littéralement « ce qui n'est pas caché, pas oublié ».
- **pseudos** : le mensonge, l'erreur, la fausseté (d'où le préfixe pseudo-).
- **pistis** : la confiance, la foi, la preuve ; **pisteuô** : croire, avoir confiance.
- **doxa** : l'opinion, ce qui paraît vrai, opposée à l'**epistêmê**, la science, le savoir fondé.
- **muthos** : le récit, le mythe ; **logos** : la parole, le raisonnement, la raison.
- **historia** : l'enquête (chez Hérodote), puis le récit des faits.
- **skepsis** : l'examen, d'où le scepticisme.

### 1. Magie et pratiques magiques
- **Circé** change en porcs les compagnons d'Ulysse (Odyssée, X) ; **Médée** est la magicienne de la Colchide.
- Théocrite, dans une idylle, met en scène une femme qui prépare un charme pour faire revenir son amant.
- Lucien se moque de la magie dans Le Menteur, avec l'histoire de l'apprenti sorcier qui ne sait plus arrêter le pilon transformé en porteur d'eau (reprise par Goethe et par Walt Disney dans Fantasia).

### 2. Naissance de la pensée rationnelle
- Les **présocratiques** (Thalès, Anaximandre, Héraclite, Démocrite) cherchent l'origine des choses dans la nature (**phusis**) et non dans les mythes : c'est le passage du **muthos** au **logos**.
- **Hérodote** fait une **historia**, une enquête, mais rapporte aussi des merveilles ; **Thucydide** veut un récit exact et critique les sources.
- **Épicure** et son disciple latin Lucrèce expliquent le monde par les atomes et libèrent de la peur des dieux.
- Lucien, admirateur d'Épicure, combat les superstitions et les charlatans (Alexandre ou le faux prophète).

### 3. Maîtres et disciples
- **Socrate** n'écrit rien et interroge : sa **maïeutique** fait accoucher les esprits. **Platon**, son disciple, met ses conversations en dialogues ; **Aristote** est l'élève de Platon puis le précepteur d'Alexandre.
- Sur l'île des Bienheureux, Lucien montre Socrate qui continue de questionner tout le monde.
- Le dialogue entre maître et élève est un modèle pour apprendre à douter.

### 4. Polythéismes et monothéismes
- Les Grecs honorent de nombreux dieux par des **sacrifices**, des fêtes, des **oracles** (Delphes). Les dieux de l'Olympe ont des passions humaines.
- Des philosophes critiquent déjà ces images : **Xénophane** remarque que les hommes prêtent aux dieux leur propre forme.
- Lucien pousse plus loin la moquerie : dans les Dialogues des dieux, les Olympiens se querellent comme des humains.
- Judaïsme et christianisme affirment un dieu unique ; Lucien se moque d'ailleurs des premiers chrétiens dans un texte, La Mort de Pérégrinos.

### Lien avec Le Baron perché
- Cosimo vit au siècle des **Lumières**, qui préfèrent la raison et l'examen à la croyance aveugle ; il lit les auteurs de son temps et correspond avec des savants.

### À retenir pour le bac
- **alêtheia** et **pseudos**, **pistis**, **doxa** et **epistêmê**, **muthos** et **logos**, **historia**.
- Magie : Circé, Médée, l'apprenti sorcier du Menteur de Lucien.
- Raison : présocratiques, Hérodote et Thucydide, Épicure ; Lucien contre les charlatans.
- Maîtres : Socrate, Platon, Aristote ; critique des dieux par Xénophane et Lucien.`,
    cartes: [
      { q: "alêtheia", r: "La vérité, littéralement « ce qui n'est pas caché »." },
      { q: "pseudos", r: "Le mensonge, l'erreur ; d'où le préfixe pseudo-." },
      { q: "pistis", r: "La confiance, la foi, la preuve ; verbe pisteuô, croire." },
      { q: "doxa et epistêmê", r: "L'opinion, ce qui paraît vrai, et le savoir fondé, la science." },
      { q: "muthos et logos", r: "Le récit mythique, et la parole raisonnée, la raison." },
      { q: "historia", r: "L'enquête (Hérodote), puis le récit des faits." },
      { q: "Présocratiques", r: "Premiers philosophes grecs (Thalès, Héraclite, Démocrite) qui expliquent la nature sans les mythes." },
      { q: "Passage du muthos au logos", r: "Le passage de l'explication par les mythes à l'explication raisonnée." },
      { q: "Différence entre Hérodote et Thucydide", r: "Hérodote enquête mais rapporte des merveilles ; Thucydide veut un récit exact et critique." },
      { q: "Histoire de l'apprenti sorcier chez Lucien", r: "Dans Le Menteur, un apprenti ne sait plus arrêter le pilon devenu porteur d'eau." },
      { q: "Maïeutique", r: "Méthode de Socrate qui fait « accoucher » les esprits par des questions." },
      { q: "Critique de Xénophane", r: "Les hommes prêtent aux dieux leur propre forme humaine." },
      { q: "Texte de Lucien sur un chrétien", r: "La Mort de Pérégrinos, où il se moque des premiers chrétiens." },
    ],
    quiz: [
      { q: "Que signifie alêtheia ?",
        choix: ["Le mensonge", "L'opinion", "La vérité", "La croyance"],
        bonne: 2, niv: 1,
        expl: "Littéralement, ce qui n'est pas caché." },
      { q: "Quel mot grec désigne le mensonge ?",
        choix: ["Logos", "Pseudos", "Pistis", "Historia"],
        bonne: 1, niv: 1,
        expl: "Il a donné le préfixe pseudo-." },
      { q: "Quelle est la différence entre doxa et epistêmê ?",
        choix: ["L'opinion et le savoir fondé", "Le mythe et la raison", "La foi et la magie", "La vérité et le mensonge"],
        bonne: 0, niv: 2,
        expl: "La doxa est ce qui paraît vrai." },
      { q: "Que veut dire l'expression « passage du muthos au logos » ?",
        choix: ["On remplace les dieux grecs par les dieux romains", "On écrit en prose plutôt qu'en vers", "On traduit les mythes en latin", "On explique le monde par la raison et non plus par les mythes"],
        bonne: 3, niv: 2,
        expl: "C'est la démarche des présocratiques." },
      { q: "Que signifie d'abord le mot historia chez Hérodote ?",
        choix: ["L'enquête", "Le mensonge", "La poésie", "La prophétie"],
        bonne: 0, niv: 2,
        expl: "Le sens de récit des faits vient ensuite." },
      { q: "Quel historien veut un récit exact et critique ses sources ?",
        choix: ["Hérodote", "Ctésias", "Iamboulos", "Thucydide"],
        bonne: 3, niv: 2,
        expl: "Hérodote rapporte aussi des merveilles." },
      { q: "Quelle histoire célèbre Lucien raconte-t-il dans Le Menteur ?",
        choix: ["Celle du cheval de Troie", "Celle de la boîte de Pandore", "Celle d'Orphée et Eurydice", "Celle de l'apprenti sorcier"],
        bonne: 3, niv: 3,
        expl: "Goethe et Walt Disney l'ont reprise." },
      { q: "Comment appelle-t-on la méthode de questionnement de Socrate ?",
        choix: ["La maïeutique", "La rhétorique", "La dialectique de Hegel", "La sophistique"],
        bonne: 0, niv: 2,
        expl: "Il fait « accoucher » les esprits." },
      { q: "Quel philosophe remarque que les hommes prêtent aux dieux leur propre forme ?",
        choix: ["Xénophane", "Épicure", "Thalès", "Aristote"],
        bonne: 0, niv: 3,
        expl: "Il critique l'image humaine des dieux." },
      { q: "Quel philosophe Lucien admire-t-il dans sa lutte contre les superstitions ?",
        choix: ["Pythagore", "Platon", "Épicure", "Zénon de Citium"],
        bonne: 2, niv: 3,
        expl: "Il dénonce aussi les charlatans comme Alexandre." },
      { q: "De quel mot vient le verbe pisteuô, croire ?",
        choix: ["De pseudos, le mensonge", "De phusis, la nature", "De polis, la cité", "De pistis, la confiance"],
        bonne: 3, niv: 1,
        expl: "Pistis signifie aussi la foi et la preuve." },
    ] },
  { chapitre: "llca-grec-10",
    fiche: `## Objet d'étude : L'homme, le monde, le destin

Cet objet d'étude interroge la place de l'homme dans l'univers et face à ce qui le dépasse. Ses quatre sous-ensembles : genèse et cosmogonies ; les voix du destin (oracles, prophéties, rêves) ; mythe et théâtre (héros et familles maudites) ; le « grand théâtre du monde » (vérité et illusion). Les Histoires vraies y touchent par le voyage dans le cosmos, l'île des Songes et le jeu entre vérité et illusion.

### Le vocabulaire grec
- **kosmos** : l'ordre, la parure, puis l'univers ordonné (d'où cosmos, cosmétique).
- **khaos** : le vide béant des origines.
- **moira** : la part, le lot attribué à chacun, le destin ; les **Moires** filent la vie des hommes.
- **anankê** : la nécessité, la contrainte.
- **tukhê** : le hasard, la fortune.
- **hubris** : la démesure, l'orgueil qui dépasse les limites humaines et attire la punition.
- **oneiros** : le songe.

### 1. Genèse et cosmogonies
- **Hésiode**, Théogonie : d'abord Chaos, puis Gaïa (la Terre), Éros ; viennent Ouranos, les Titans, Cronos, enfin Zeus, qui établit l'ordre.
- Les présocratiques cherchent un principe : l'eau pour Thalès, le feu pour Héraclite, les atomes pour Démocrite.
- Platon, dans le Timée, imagine un artisan divin, le **démiurge**, qui fabrique le monde.
- Lucien voyage dans ce cosmos : la Lune, le Soleil, les étoiles deviennent des pays habités, ce qui rend familier et comique l'univers des savants.

### 2. Les voix du destin
- L'**oracle de Delphes** : la Pythie parle au nom d'Apollon ; ses réponses sont souvent ambiguës (Crésus chez Hérodote).
- Les **devins** comme Tirésias, les **songes** envoyés par les dieux. Chez Homère, les songes passent par deux portes : celle de corne pour les songes vrais, celle d'ivoire pour les songes trompeurs (Odyssée, XIX).
- Lucien visite une **île des Songes** et dénonce dans Alexandre ou le faux prophète un oracle fabriqué pour exploiter les crédules.

### 3. Mythe et théâtre : héros et familles maudites
- La tragédie grecque (Eschyle, Sophocle, Euripide) montre des familles frappées par une malédiction : les **Atrides** (Agamemnon, Oreste) et les **Labdacides** (Laïos, Œdipe, Antigone).
- Le héros tragique, souvent coupable d'**hubris**, ne peut échapper à son destin : Œdipe accomplit l'oracle en voulant le fuir.

### 4. Le « grand théâtre du monde » : vérité et illusion
- Image du **theatrum mundi** : la vie est une pièce où chacun joue un rôle. Lucien l'utilise : dans un de ses dialogues, Ménippe compare la vie humaine à une procession de théâtre où la Fortune distribue les costumes, puis les reprend à la mort.
- Platon, avec le **mythe de la caverne** (République, VII), montre des hommes qui prennent des ombres pour la réalité.
- Les Histoires vraies jouent sur cette frontière : un récit présenté comme vrai, avoué comme faux, qui fait réfléchir sur l'illusion.

### Lien avec Le Baron perché
- Cosimo choisit son destin par un acte de volonté et s'y tient toute sa vie ; sa disparition dans le ciel, accroché à une montgolfière, donne à sa vie la forme d'un conte.

### À retenir pour le bac
- **kosmos**, **khaos**, **moira**, **anankê**, **tukhê**, **hubris**, **oneiros**.
- Cosmogonies : Hésiode, présocratiques, démiurge du Timée ; Lucien rend le cosmos habité et comique.
- Voix du destin : Delphes, devins, songes (portes de corne et d'ivoire) ; île des Songes, faux prophète.
- Familles maudites (Atrides, Labdacides) ; theatrum mundi et caverne de Platon : vérité et illusion.`,
    cartes: [
      { q: "kosmos", r: "L'ordre, la parure, puis l'univers ordonné." },
      { q: "khaos", r: "Le vide béant des origines, chez Hésiode." },
      { q: "moira", r: "La part, le lot de chacun, le destin ; les Moires filent la vie." },
      { q: "anankê", r: "La nécessité, la contrainte." },
      { q: "tukhê", r: "Le hasard, la fortune." },
      { q: "hubris", r: "La démesure, l'orgueil qui dépasse les limites humaines et attire la punition." },
      { q: "oneiros", r: "Le songe." },
      { q: "Ordre des origines dans la Théogonie", r: "Chaos, puis Gaïa et Éros ; puis Ouranos, les Titans, Cronos et enfin Zeus." },
      { q: "Démiurge", r: "Dans le Timée de Platon, l'artisan divin qui fabrique le monde." },
      { q: "Portes des songes chez Homère", r: "La porte de corne pour les songes vrais, celle d'ivoire pour les songes trompeurs." },
      { q: "Exemple d'oracle ambigu", r: "La réponse de Delphes à Crésus, chez Hérodote." },
      { q: "Œdipe et le destin", r: "En voulant fuir l'oracle, il l'accomplit." },
      { q: "Theatrum mundi chez Lucien", r: "La vie comparée à une procession où la Fortune distribue puis reprend les costumes." },
    ],
    quiz: [
      { q: "Que signifie d'abord le mot kosmos ?",
        choix: ["Le vide originel", "La nuit étoilée", "L'ordre, la parure", "Le destin des hommes"],
        bonne: 2, niv: 2,
        expl: "Le sens d'univers ordonné vient ensuite." },
      { q: "Qu'y a-t-il au commencement selon la Théogonie d'Hésiode ?",
        choix: ["Zeus", "Ouranos", "Chaos", "Apollon"],
        bonne: 2, niv: 1,
        expl: "Viennent ensuite Gaïa et Éros." },
      { q: "Quel mot grec désigne la démesure punie par les dieux ?",
        choix: ["Hubris", "Moira", "Tukhê", "Kosmos"],
        bonne: 0, niv: 1,
        expl: "Le héros tragique en est souvent coupable." },
      { q: "Que désigne moira ?",
        choix: ["Le hasard aveugle", "La colère divine", "La part de chacun, le destin", "La beauté du monde"],
        bonne: 2, niv: 2,
        expl: "Les Moires filent la vie des hommes." },
      { q: "Qui fabrique le monde dans le Timée de Platon ?",
        choix: ["Prométhée", "Héphaïstos", "Chaos", "Le démiurge"],
        bonne: 3, niv: 2,
        expl: "C'est un artisan divin." },
      { q: "Par quelle porte passent les songes vrais chez Homère ?",
        choix: ["La porte de corne", "La porte d'ivoire", "La porte d'or", "La porte de bronze"],
        bonne: 0, niv: 3,
        expl: "La porte d'ivoire laisse passer les songes trompeurs." },
      { q: "Quelle île des Histoires vraies rejoint l'objet d'étude par le thème du rêve ?",
        choix: ["L'île du vin", "L'île des Songes", "L'île de fromage", "L'île des Impies"],
        bonne: 1, niv: 2,
        expl: "Elle rappelle les portes des songes d'Homère." },
      { q: "Quel héros accomplit l'oracle en voulant le fuir ?",
        choix: ["Ulysse", "Achille", "Héraclès", "Œdipe"],
        bonne: 3, niv: 1,
        expl: "Il tue son père et épouse sa mère sans le savoir." },
      { q: "Comment Lucien illustre-t-il l'idée du theatrum mundi ?",
        choix: ["Les dieux construisent un théâtre sur la Lune pour les morts", "La Fortune distribue puis reprend les costumes", "Homère joue chaque rôle", "Les morts deviennent acteurs"],
        bonne: 1, niv: 3,
        expl: "La mort ôte à chacun son rôle." },
      { q: "Que montre le mythe de la caverne de Platon ?",
        choix: ["La naissance des dieux de l'Olympe", "Des hommes qui prennent des ombres pour la réalité", "Le voyage d'Ulysse aux Enfers", "Une prison construite par Minos"],
        bonne: 1, niv: 2,
        expl: "Le thème est celui de la vérité et de l'illusion." },
      { q: "Comment Lucien traite-t-il le cosmos des savants ?",
        choix: ["Il en fait des pays habités et comiques", "Il le décrit avec des calculs exacts, à la manière des astronomes", "Il refuse d'en parler", "Il le présente comme sacré"],
        bonne: 0, niv: 3,
        expl: "La Lune et le Soleil deviennent des royaumes en guerre." },
    ] },
  { chapitre: "llca-grec-11",
    fiche: `## Objet d'étude : Méditerranée, présence des mondes antiques

Ce troisième objet d'étude porte sur les traces matérielles et culturelles de l'Antiquité autour de la Méditerranée : sites, villes, lieux de savoir, art. Il nourrit surtout le **portfolio** et les exemples de l'essai. Pour le grec, il permet aussi de situer Lucien, Syrien de culture grecque, dans un monde méditerranéen unifié par Rome.

### Un monde grec très étendu
- Dès le VIIIe siècle av. J.-C., les Grecs fondent des **colonies** (**apoikiai**) tout autour de la Méditerranée et de la mer Noire : Marseille (**Massalia**), Syracuse, Naples (**Neapolis**, « ville nouvelle »), Byzance.
- Après les conquêtes d'**Alexandre** (IVe siècle av. J.-C.), le grec devient la langue commune de l'Orient, la **koinê**. C'est pourquoi Lucien, né sur l'Euphrate, écrit en grec.
- Sous l'Empire romain, la Méditerranée est unifiée : on peut voyager de Syrie en Gaule, comme Lucien l'a fait.

### 1. Sites archéologiques
- **Delphes**, sanctuaire d'Apollon et de son oracle ; **Olympie**, sanctuaire de Zeus et lieu des jeux.
- **Mycènes**, avec la porte des Lionnes ; **Cnossos**, en Crète, palais de la civilisation minoenne.
- **Pompéi**, ensevelie par le Vésuve en 79 ap. J.-C., montre une ville romaine imprégnée de culture grecque.
- L'archéologie fait connaître la vie quotidienne, que les textes disent peu.

### 2. Les grandes villes et leurs transformations
- **Athènes** : la démocratie, l'**Acropole** et le **Parthénon**, construit au Ve siècle av. J.-C. sous Périclès ; au temps de Lucien, elle reste la ville des écoles de philosophie.
- **Alexandrie**, fondée par Alexandre en Égypte, capitale des Ptolémées, avec son phare et sa bibliothèque.
- **Byzance**, devenue Constantinople en 330, capitale de l'Empire romain d'Orient, où l'on parle grec pendant plus de mille ans.

### 3. Lieux de culture et figures du savoir
- À Athènes : l'**Académie** de Platon, le **Lycée** d'Aristote, le **Jardin** d'Épicure, le **Portique** (stoa) des stoïciens.
- À Alexandrie : la **Bibliothèque** et le **Musée** (le « lieu des Muses »), où des savants (Ératosthène, Euclide) et des philologues étudient et corrigent Homère. Lucien se moque de ces philologues quand il interroge Homère sur l'île des Bienheureux.
- Le **théâtre**, lieu de culture civique ; le **gymnase**, lieu d'éducation.

### 4. L'art grec, romain, méditerranéen
- **Architecture** : ordres **dorique**, **ionique** et **corinthien** ; le temple, le théâtre, le stade.
- **Sculpture** : des **kouroi** archaïques aux statues classiques (Phidias, Praxitèle) ; les Romains copient massivement les statues grecques.
- **Céramique** : vases à figures noires puis à figures rouges, qui illustrent les mythes (Ulysse, Héraclès).
- La **mosaïque** et la fresque décorent les maisons.

### Présence aujourd'hui
- Beaucoup de mots français viennent du grec : démocratie, philosophie, théâtre, cosmos, histoire, et le préfixe pseudo-.
- Les mythes et les récits de voyage (Ulysse, Lucien) inspirent romans, films et bandes dessinées.

### À retenir pour le bac
- Colonies grecques (**apoikiai**) : Massalia, Syracuse, Neapolis, Byzance ; la **koinê** après Alexandre.
- Sites : Delphes, Olympie, Mycènes, Cnossos, Pompéi.
- Villes : Athènes (Acropole, Parthénon), Alexandrie (Bibliothèque, Musée), Constantinople (330).
- Écoles d'Athènes : Académie, Lycée, Jardin, Portique ; art : ordres, sculpture, vases à figures noires et rouges.`,
    cartes: [
      { q: "apoikia", r: "La colonie grecque, fondée par une cité mère." },
      { q: "Colonies grecques célèbres", r: "Massalia (Marseille), Syracuse, Neapolis (Naples), Byzance." },
      { q: "Sens de Neapolis", r: "La ville nouvelle (Naples)." },
      { q: "koinê", r: "La langue grecque commune de l'Orient après Alexandre." },
      { q: "Pourquoi Lucien écrit-il en grec ?", r: "Le grec est la langue de culture de tout l'Orient depuis Alexandre." },
      { q: "Delphes", r: "Sanctuaire d'Apollon, siège de l'oracle de la Pythie." },
      { q: "Olympie", r: "Sanctuaire de Zeus, lieu des jeux Olympiques." },
      { q: "Parthénon", r: "Temple d'Athéna sur l'Acropole, construit au Ve siècle av. J.-C. sous Périclès." },
      { q: "Musée d'Alexandrie", r: "Le « lieu des Muses », centre de savants et de philologues." },
      { q: "Les quatre grandes écoles d'Athènes", r: "L'Académie (Platon), le Lycée (Aristote), le Jardin (Épicure), le Portique (stoïciens)." },
      { q: "Lien entre Alexandrie et Lucien", r: "Lucien se moque des philologues qui corrigeaient Homère." },
      { q: "Vases à figures rouges", r: "Céramique où les personnages restent de la couleur de l'argile sur fond noir." },
      { q: "Mots français venus du grec", r: "Démocratie, philosophie, théâtre, cosmos, histoire, préfixe pseudo-." },
    ],
    quiz: [
      { q: "Comment s'appelait Marseille dans l'Antiquité ?",
        choix: ["Massalia", "Neapolis", "Byzantion", "Syrakousai"],
        bonne: 0, niv: 1,
        expl: "C'est une colonie grecque fondée par des Phocéens." },
      { q: "Que signifie le nom de Neapolis (Naples) ?",
        choix: ["La ville haute", "La ville nouvelle", "La ville sacrée", "La ville du port"],
        bonne: 1, niv: 2,
        expl: "Néa : nouvelle ; polis : ville." },
      { q: "Qu'est-ce que la koinê ?",
        choix: ["Une monnaie romaine", "Un temple de Delphes", "La langue grecque commune après Alexandre", "Une loi athénienne"],
        bonne: 2, niv: 2,
        expl: "Elle explique pourquoi un Syrien comme Lucien écrit en grec." },
      { q: "Quel dieu est honoré à Delphes ?",
        choix: ["Zeus", "Poséidon", "Apollon", "Dionysos"],
        bonne: 2, niv: 1,
        expl: "Sa prêtresse, la Pythie, rend les oracles." },
      { q: "Où se déroulaient les jeux Olympiques ?",
        choix: ["À Athènes, sur l'Acropole", "À Delphes, près du temple", "Sur le mont Olympe", "À Olympie, sanctuaire de Zeus"],
        bonne: 3, niv: 2,
        expl: "Le mont Olympe est la demeure des dieux, pas le lieu des jeux." },
      { q: "Sous quel homme d'État le Parthénon est-il construit ?",
        choix: ["Solon", "Périclès", "Alexandre", "Hadrien"],
        bonne: 1, niv: 2,
        expl: "Il date du Ve siècle av. J.-C." },
      { q: "Que signifie le nom du Musée d'Alexandrie ?",
        choix: ["La maison des rois", "Le palais des dieux", "Le temple de la mer", "Le lieu des Muses"],
        bonne: 3, niv: 2,
        expl: "Des savants et des philologues y travaillaient." },
      { q: "Quelle école d'Athènes a fondée Épicure ?",
        choix: ["Le Lycée", "Le Jardin", "L'Académie", "Le Portique"],
        bonne: 1, niv: 3,
        expl: "Le Portique est l'école des stoïciens." },
      { q: "Pourquoi peut-on relier Alexandrie aux Histoires vraies ?",
        choix: ["Lucien y place la fin du voyage, après le naufrage sur un autre continent", "Le monstre marin vient d'Égypte", "Lucien se moque des philologues qui corrigeaient Homère", "Homère y serait né"],
        bonne: 2, niv: 3,
        expl: "Il interroge Homère sur les vers jugés faux." },
      { q: "Sur un vase à figures rouges, de quelle couleur sont les personnages ?",
        choix: ["Entièrement noirs", "Peints en bleu", "De la couleur de l'argile", "Dorés à l'or fin"],
        bonne: 2, niv: 3,
        expl: "Le fond est noir, les figures gardent la couleur de l'argile." },
      { q: "Quelle ville devient Constantinople en 330 ?",
        choix: ["Alexandrie", "Byzance", "Athènes", "Antioche"],
        bonne: 1, niv: 1,
        expl: "On y parlera grec pendant plus de mille ans." },
    ] },
  { chapitre: "llca-grec-12",
    fiche: `## Langue : les notions de terminale

Le programme de terminale ajoute quelques notions à celles des années précédentes. Elles peuvent tomber dans la question de grammaire (au bac 2026, un optatif potentiel a été demandé : « Ti dêt' an eiê ? ») et elles aident à traduire. Les formes sont données ici en lettres latines (translittération).

### Les adjectifs en -us
- Type **hêdus, hêdeia, hêdu** (ἡδύς, ἡδεῖα, ἡδύ) : doux, agréable. Masculin et neutre de la 3e déclinaison (génitif **hêdeos**), féminin de la 1re (génitif **hêdeias**).
- Autres adjectifs du même type : **ôkus** (rapide), **barus** (lourd), **brakhus** (court), **eurus** (large).
- Au programme : savoir les repérer dans un texte.

### Les pronoms personnels réfléchis
- Ils renvoient au sujet : **emautou** (de moi-même), **seautou** ou **sautou** (de toi-même), **heautou** ou **hautou** (de soi-même) ; au pluriel, **hêmôn autôn**, **humôn autôn**, **heautôn**.
- Exemple tiré du bac 2026 (Aristophane) : **phulatte sautên** (φύλαττε σαυτήν), « garde-toi », c'est-à-dire « fais attention à toi ».
- Au programme : l'emploi direct, quand le pronom renvoie au sujet du verbe dont il dépend.

### L'optatif
- Mode du souhait et de la possibilité. Marque : **-oi-** ou **-ai-** entre le radical et la désinence.
- Optatif présent actif de **luô** (délier) : **luoimi, luois, luoi, luoimen, luoite, luoien**.
- Optatif aoriste actif **sigmatique** : **lusaimi, lusais, lusai, lusaimen, lusaite, lusaien** (on trouve aussi lusaias, lusaie, lusaian).
- Optatif aoriste **thématique** (aoriste second) : sur le radical de l'aoriste, avec les désinences du présent : **lipoimi** (de **leipô**, laisser, aoriste elipon).
- Le verbe être a un optatif à connaître : **eiên, eiês, eiê**.

### L'expression du souhait
- **Optatif seul**, ou précédé de **eithe** ou **ei gar** : un souhait réalisable. Exemple célèbre (Sophocle, Ajax, 550) : **ô pai, genoio patros eutukhesteros**, « ô mon enfant, puisses-tu être plus heureux que ton père ».

### L'expression du potentiel
- **Optatif + an** : une possibilité, une affirmation atténuée. On traduit par un conditionnel ou par « pouvoir ».
- Exemple du bac 2026 : **Ti dêt' an eiê ?** (Τί δῆτ᾽ ἂν εἴη ;), « Que peut-il donc y avoir ? » : question au potentiel qui montre l'inquiétude du personnage.
- Chez Lucien, dans le prologue : **an moi dokô… ekphugein**, « il me semble que j'échapperais » (potentiel exprimé par an avec l'infinitif).

### L'éventuel : le futur dans les subordonnées
- Pour une action future envisagée, la subordonnée se met au **subjonctif + an** :
- hypothétique : **ean** (ei + an) + subjonctif, « si jamais » ;
- temporelle : **hotan** (hote + an) + subjonctif, « quand, chaque fois que » ;
- relative : **hos an** + subjonctif, « celui qui (le cas échéant) ».
- La principale est souvent au futur ou à l'impératif.

### L'accusatif de relation
- Il précise sur quel point porte l'adjectif ou le verbe. On le traduit par « quant à », « pour ce qui est de », ou par un complément : **ôkus podas**, « rapide quant aux pieds », « aux pieds rapides » (épithète d'Achille chez Homère) ; **algô tên kephalên**, « j'ai mal à la tête ».

### À retenir pour le bac
- Adjectifs en -us : **hêdus, hêdeia, hêdu** ; réfléchis : **emautou, seautou, heautou**.
- Optatif : **luoimi** (présent), **lusaimi** (aoriste sigmatique), **lipoimi** (aoriste thématique).
- Souhait : optatif (eithe, ei gar) ; potentiel : optatif + **an** ; éventuel : **ean, hotan, hos an** + subjonctif.
- Accusatif de relation : **ôkus podas**, « aux pieds rapides ».`,
    cartes: [
      { q: "Modèle des adjectifs en -us", r: "hêdus, hêdeia, hêdu (doux, agréable)." },
      { q: "Génitif de hêdus", r: "hêdeos au masculin et au neutre, hêdeias au féminin." },
      { q: "Pronoms réfléchis au singulier", r: "emautou (de moi-même), seautou (de toi-même), heautou (de soi-même)." },
      { q: "Traduction de phulatte sautên", r: "« Garde-toi », fais attention à toi (bac 2026)." },
      { q: "Marque de l'optatif", r: "-oi- ou -ai- entre le radical et la désinence." },
      { q: "Optatif présent actif de luô", r: "luoimi, luois, luoi, luoimen, luoite, luoien." },
      { q: "Optatif aoriste sigmatique de luô", r: "lusaimi, lusais, lusai, lusaimen, lusaite, lusaien." },
      { q: "Optatif aoriste thématique", r: "Radical de l'aoriste second et désinences du présent : lipoimi (de leipô)." },
      { q: "Souhait en grec", r: "Optatif seul, ou avec eithe ou ei gar : genoio, « puisses-tu être »." },
      { q: "Potentiel en grec", r: "Optatif + an : une possibilité, traduite par un conditionnel ou par « pouvoir »." },
      { q: "Traduction de Ti dêt' an eiê ?", r: "« Que peut-il donc y avoir ? » (potentiel, bac 2026)." },
      { q: "Éventuel dans les subordonnées", r: "ean, hotan, hos an + subjonctif : si jamais, chaque fois que, celui qui." },
      { q: "Accusatif de relation", r: "Il précise le point concerné : ôkus podas, « aux pieds rapides »." },
    ],
    quiz: [
      { q: "Quel est le féminin de hêdus ?",
        choix: ["hêdê", "hêdus", "hêdeos", "hêdeia"],
        bonne: 3, niv: 2,
        expl: "Le féminin suit la 1re déclinaison." },
      { q: "Que signifie le réfléchi heautou ?",
        choix: ["De soi-même", "De moi-même", "De toi-même", "De nous-mêmes"],
        bonne: 0, niv: 1,
        expl: "Il renvoie à un sujet de 3e personne." },
      { q: "Quelle marque caractérise l'optatif ?",
        choix: ["L'augment e-", "Le redoublement du radical", "Le suffixe -thê-", "-oi- ou -ai- avant la désinence"],
        bonne: 3, niv: 1,
        expl: "L'augment marque les passés de l'indicatif." },
      { q: "Quelle forme est un optatif aoriste sigmatique ?",
        choix: ["luoimi", "elusa", "lusaimi", "lusô"],
        bonne: 2, niv: 2,
        expl: "Luoimi est l'optatif présent, lusô le futur." },
      { q: "De quel verbe lipoimi est-il l'optatif aoriste ?",
        choix: ["lupeô, chagriner", "luô, délier", "leipô, laisser", "legô, dire"],
        bonne: 2, niv: 3,
        expl: "L'aoriste second de leipô est elipon." },
      { q: "Que traduit l'optatif + an ?",
        choix: ["Le souhait irréalisable", "L'ordre", "Le passé", "Le potentiel"],
        bonne: 3, niv: 2,
        expl: "On traduit par un conditionnel ou par « pouvoir »." },
      { q: "Comment traduire Ti dêt' an eiê ? (bac 2026)",
        choix: ["Qu'y avait-il donc ?", "Il y avait donc quelque chose.", "Qu'y aura-t-il demain ?", "Que peut-il donc y avoir ?"],
        bonne: 3, niv: 2,
        expl: "C'est une question au potentiel." },
      { q: "Que signifie genoio dans « ô pai, genoio patros eutukhesteros » ?",
        choix: ["Tu es devenu", "Puisses-tu être", "Tu deviendras", "Sois né"],
        bonne: 1, niv: 3,
        expl: "C'est un optatif aoriste de souhait (Sophocle, Ajax)." },
      { q: "Quelle conjonction introduit une hypothèse éventuelle ?",
        choix: ["ean + subjonctif", "ei + indicatif présent", "hôs + infinitif", "hina + optatif"],
        bonne: 0, niv: 2,
        expl: "Ean vient de ei + an." },
      { q: "Quel est le sens de hotan + subjonctif ?",
        choix: ["Parce que", "Afin que, dans le but que, pour que", "Bien que, quoique", "Quand, chaque fois que"],
        bonne: 3, niv: 2,
        expl: "C'est une temporelle à valeur éventuelle." },
      { q: "Comment traduire l'accusatif de relation dans ôkus podas ?",
        choix: ["Il court vers les pieds", "Aux pieds rapides", "Rapide grâce à ses pieds blessés", "Les pieds de quelqu'un de rapide"],
        bonne: 1, niv: 3,
        expl: "L'accusatif précise le point sur lequel porte l'adjectif." },
    ] },
  { chapitre: "llca-grec-13",
    fiche: `## Langue : analyser une forme verbale

La question de grammaire porte souvent sur une forme verbale : au bac 2026, **Περιμείνατε** (« attendez ») et l'élision dans **κατευτρέπιζ᾽**. Il faut donner tout ce qui est demandé (mode, temps, voix, personne, verbe d'origine), puis interpréter.

### La méthode
- **Verbe d'origine** : retrouver le présent de l'indicatif, première personne (forme du dictionnaire) : **menô**, **legô**, **luô**.
- **Augment** : un **e-** devant le radical (ou une voyelle allongée) signale un **passé de l'indicatif** (imparfait, aoriste, plus-que-parfait) : **elegon**, **elusa**. Les autres modes n'ont pas d'augment.
- **Radical et suffixe** : sigma pour le futur et l'aoriste sigmatique (**lusô**, **elusa**), radical modifié pour l'aoriste second (**elipon**), **-thê-** pour l'aoriste passif (**eluthên**).
- **Désinence** : personne, nombre, voix (active ou moyenne-passive).

### L'aspect, clé de l'aoriste
- En grec, le temps exprime d'abord un **aspect** : le **présent** voit l'action en cours ou répétée ; l'**aoriste** la voit comme un tout, ponctuelle ; le **parfait** voit le résultat présent d'une action passée.
- Hors de l'indicatif, l'aoriste n'est **pas** un passé : un impératif aoriste donne un ordre ponctuel, un infinitif aoriste désigne l'action globale (**ekphugein**, échapper).

### L'impératif
- 2e personne du singulier présent : **lue**, **lege** ; pluriel : **luete**, **legete**.
- Aoriste sigmatique : **luson**, **lusate**. Les verbes à radical en liquide (l, m, n, r) n'ont pas de sigma : **perimeinate** (de **perimenô**, attendre), impératif aoriste actif, 2e personne du pluriel, « attendez ! ».
- Interprétation : ordre, exhortation, urgence, autorité du personnage (au bac 2026, celle de Praxagora qui dirige les femmes).

### La voix moyenne
- Désinences moyennes-passives : **-omai, -êi, -etai, -ometha, -esthe, -ontai**.
- Le **moyen** indique que le sujet agit pour lui-même ou sur lui-même : **luomai**, « je délie pour moi » (je rachète). Certains verbes n'existent qu'au moyen : **boulomai** (vouloir), **gignomai** (devenir).
- Exemple de Lucien : **pseudomai**, « je mens » (moyen de pseudô, tromper).

### Élision et crase
- **Élision** : la voyelle finale brève tombe devant un mot qui commence par une voyelle, et elle est remplacée par une apostrophe : **kateutrepiz'** pour **kateutrepize** (impératif présent, « prépare »), au bac 2026 ; **d'** pour **de** ; **par'** pour **para**.
- **Crase** : deux mots fusionnent : **tandros** pour **tou andros** (de l'homme) ; **kagô** pour **kai egô** (et moi).

### Les participes
- Présent actif : **luôn, luousa, luon** (génitif luontos) ; aoriste actif : **lusas, lusasa, lusan** ; moyen : **luomenos**.
- Le participe s'accorde avec un nom ou un pronom : chercher toujours à qui il se rapporte. Précédé de l'article, il devient un nom : **hoi entunkhanontes**, « ceux qui lisent ».
- Valeurs : temps (pendant que, après que), cause (puisque), condition, but (participe futur).

### À retenir pour le bac
- Analyse complète : verbe d'origine, mode, temps, voix, personne, nombre.
- Augment = passé de l'indicatif ; aoriste = aspect global, pas un passé hors de l'indicatif.
- Impératif aoriste **perimeinate** (attendez) ; moyen en **-omai** (**pseudomai**).
- Élision (apostrophe) et crase (fusion) ; participes en **-ôn, -ousa, -on** et **-sas** ; article + participe = nom.`,
    cartes: [
      { q: "Forme du dictionnaire d'un verbe grec", r: "Le présent de l'indicatif actif, 1re personne du singulier : luô, legô." },
      { q: "Augment", r: "Un e- (ou une voyelle allongée) devant le radical, marque des passés de l'indicatif." },
      { q: "Marque de l'aoriste sigmatique", r: "Un sigma ajouté au radical : elusa." },
      { q: "Marque de l'aoriste passif", r: "Le suffixe -thê- : eluthên." },
      { q: "Aspect de l'aoriste", r: "L'action vue comme un tout, ponctuelle ; hors de l'indicatif, ce n'est pas un passé." },
      { q: "Aspect du présent", r: "L'action en cours ou répétée." },
      { q: "Analyse de perimeinate (bac 2026)", r: "Impératif aoriste actif, 2e personne du pluriel, de perimenô : attendez." },
      { q: "Désinences moyennes-passives du présent", r: "-omai, -êi, -etai, -ometha, -esthe, -ontai." },
      { q: "Sens du moyen", r: "Le sujet agit pour lui-même ou sur lui-même." },
      { q: "Élision", r: "Chute d'une voyelle finale brève devant voyelle, remplacée par une apostrophe." },
      { q: "Crase", r: "Fusion de deux mots : tandros pour tou andros." },
      { q: "Participe présent actif de luô", r: "luôn, luousa, luon ; génitif luontos." },
      { q: "Article + participe", r: "Le participe devient un nom : hoi entunkhanontes, ceux qui lisent." },
    ],
    quiz: [
      { q: "Que signale l'augment e- devant un radical ?",
        choix: ["Un passé de l'indicatif", "Un subjonctif", "Un futur", "Un impératif"],
        bonne: 0, niv: 1,
        expl: "Imparfait, aoriste et plus-que-parfait de l'indicatif." },
      { q: "Quelle forme est un aoriste passif ?",
        choix: ["elusa", "lusô", "luomai", "eluthên"],
        bonne: 3, niv: 2,
        expl: "Le suffixe -thê- marque l'aoriste passif." },
      { q: "Que marque l'aoriste hors de l'indicatif ?",
        choix: ["Une action passée, quel que soit le mode", "Un futur proche", "Un aspect global, pas un passé", "Une action répétée"],
        bonne: 2, niv: 3,
        expl: "Un infinitif aoriste désigne l'action prise globalement." },
      { q: "Comment analyser Περιμείνατε (bac 2026) ?",
        choix: ["Impératif aoriste actif, 2e personne du pluriel", "Indicatif présent actif, 2e personne du pluriel", "Optatif aoriste moyen, 3e personne du singulier", "Infinitif aoriste actif"],
        bonne: 0, niv: 2,
        expl: "Le verbe est perimenô, attendre." },
      { q: "Pourquoi perimeinate n'a-t-il pas de sigma ?",
        choix: ["Son radical se termine par une liquide", "C'est un présent de l'indicatif, qui n'a pas de sigma", "C'est un aoriste passif", "Le sigma est élidé"],
        bonne: 0, niv: 3,
        expl: "Les radicaux en l, m, n, r ont un aoriste sans sigma." },
      { q: "Quel est le sens de la voix moyenne ?",
        choix: ["Le sujet subit l'action d'un autre", "L'action a lieu au milieu de la phrase", "Le sujet agit pour lui-même ou sur lui-même", "L'action est simplement souhaitée, sans être réalisée par le sujet"],
        bonne: 2, niv: 2,
        expl: "Certains verbes n'existent qu'au moyen." },
      { q: "Que signifie pseudomai ?",
        choix: ["Je suis trompé", "Je mens", "Je trompe les autres", "J'ai menti autrefois"],
        bonne: 1, niv: 1,
        expl: "C'est le moyen de pseudô, tromper." },
      { q: "Qu'est-ce que l'élision ?",
        choix: ["La fusion de deux mots en un", "La chute d'une voyelle finale devant une voyelle", "L'ajout d'un e- au début du verbe", "Le redoublement d'une consonne"],
        bonne: 1, niv: 1,
        expl: "Elle est notée par une apostrophe." },
      { q: "Que représente tandros dans un texte ?",
        choix: ["Une élision de tandrôn", "Un datif pluriel", "Un nom propre", "Une crase pour tou andros"],
        bonne: 3, niv: 2,
        expl: "Deux mots fusionnent : de l'homme." },
      { q: "Quel est le génitif du participe luôn ?",
        choix: ["luonos", "luousês", "luomenou", "luontos"],
        bonne: 3, niv: 3,
        expl: "Le participe présent actif se décline sur la 3e déclinaison au masculin." },
      { q: "Comment traduire hoi entunkhanontes ?",
        choix: ["Ils ont lu", "En lisant", "Ceux qui lisent", "Lisez !"],
        bonne: 2, niv: 2,
        expl: "L'article transforme le participe en nom." },
    ] },
  { chapitre: "llca-grec-14",
    fiche: `## Lexique : les mots-clés du voyage, du vrai et du faux

La question de lexique demande le sens d'un mot **en contexte** et ce qu'il révèle des enjeux de l'œuvre (au bac 2026 : **lathein**, se cacher ; **arkhê**, le pouvoir ; **andreiotatai**, les plus courageuses). Voici les mots-clés à connaître pour les Histoires vraies, en translittération, avec leurs familles.

### Le vrai et le faux
- **alêtheia, as (hê)** : la vérité ; **alêthês** : vrai ; **alêtheuô** : dire la vérité. Le titre de l'œuvre : **Alêthê diêgêmata**.
- **pseudos, ous (to)** : le mensonge ; **pseudomai** : mentir ; **pseudês** : menteur, faux.
- **pistis, eôs (hê)** : la confiance, la foi ; **pisteuô** + datif : croire, ajouter foi à ; **apistos** : incroyable ou incrédule.
- **doxa, ês (hê)** : l'opinion, la réputation ; **dokeô** : sembler, paraître, croire.
- **lathein**, infinitif aoriste de **lanthanô** : échapper aux regards, se cacher (même racine que **a-lêtheia**, « ce qui n'est pas caché »).

### Le récit
- **diêgêma, atos (to)** : le récit ; **diêgeomai** : raconter en détail.
- **muthos, ou (ho)** : la parole, le récit, le mythe ; **muthologeô** : raconter des fables.
- **logos, ou (ho)** : la parole, le discours, la raison.
- **historia, as (hê)** : l'enquête, puis l'histoire ; **historeô** : s'informer, raconter.
- **thauma, atos (to)** : la merveille ; **thaumazô** : s'étonner, admirer ; **thaumasios** : étonnant.

### Le voyage
- **ploion, ou (to)** : le navire ; **plous, ou (ho)** : la navigation, la traversée ; **pleô** : naviguer.
- **nêsos, ou (hê)** : l'île (d'où Péloponnèse, Polynésie).
- **thalassa, ês (hê)** : la mer ; **Ôkeanos** : l'Océan qui entoure la terre.
- **xenos, ou (ho)** : l'étranger, l'hôte ; **xenia** : l'hospitalité, devoir sacré chez les Grecs.
- **kêtos, ous (to)** : le monstre marin.

### L'homme et le monde
- **polemos, ou (ho)** : la guerre ; **eirênê, ês (hê)** : la paix.
- **basileus, eôs (ho)** : le roi ; **arkhê, ês (hê)** : le commencement, puis le pouvoir, le commandement.
- **kosmos, ou (ho)** : l'ordre, l'univers ; **phusis, eôs (hê)** : la nature.
- **paideia, as (hê)** : l'éducation, la culture.
- **gelôs, ôtos (ho)** : le rire ; **eirôneia** : l'ironie, la feinte ignorance (celle de Socrate) ; **parôidia** : la parodie.

### Répondre à une question de lexique
- Donner la forme du dictionnaire, puis le sens premier et les autres sens, éventuellement la famille de mots.
- Choisir le sens qui convient au passage, en citant les mots voisins.
- Montrer ce que le mot révèle des enjeux de l'œuvre : vérité et mensonge, voyage et curiosité, guerre et pouvoir.

### Les familles en français
- Beaucoup de mots français viennent de ces racines : pseudonyme, mythologie, logique, histoire, thaumaturge, nautique et archipel, xénophobie, polémique, monarchie, physique, pédagogie, ironie.
- Les connaître aide à retenir le sens des mots grecs.

### À retenir pour le bac
- Vrai et faux : **alêtheia**, **pseudos**, **pistis**, **doxa**, **lanthanô**.
- Récit : **diêgêma**, **muthos**, **logos**, **historia**, **thauma**.
- Voyage : **ploion**, **nêsos**, **thalassa**, **xenos**, **kêtos** ; monde : **polemos**, **arkhê**, **kosmos**, **phusis**, **paideia**.
- Répondre : sens général, sens en contexte, enjeu de l'œuvre.`,
    cartes: [
      { q: "alêtheia et alêthês", r: "La vérité et l'adjectif vrai." },
      { q: "pseudos et pseudomai", r: "Le mensonge et le verbe mentir." },
      { q: "pisteuô", r: "Croire, ajouter foi à ; se construit avec le datif." },
      { q: "apistos", r: "Incroyable, ou incrédule." },
      { q: "lanthanô (infinitif aoriste lathein)", r: "Échapper aux regards, se cacher ; même racine que alêtheia." },
      { q: "diêgêma", r: "Le récit ; de diêgeomai, raconter en détail." },
      { q: "thauma", r: "La merveille ; thaumazô, s'étonner." },
      { q: "ploion et plous", r: "Le navire et la navigation." },
      { q: "nêsos", r: "L'île (Péloponnèse, Polynésie)." },
      { q: "xenos et xenia", r: "L'étranger, l'hôte, et l'hospitalité." },
      { q: "arkhê", r: "Le commencement, puis le pouvoir, le commandement (bac 2026)." },
      { q: "eirôneia", r: "L'ironie, la feinte ignorance, celle de Socrate." },
      { q: "paideia", r: "L'éducation, la culture." },
    ],
    quiz: [
      { q: "Que signifie alêthês ?",
        choix: ["Faux", "Étonnant", "Étranger", "Vrai"],
        bonne: 3, niv: 1,
        expl: "Le titre grec de l'œuvre est Alêthê diêgêmata." },
      { q: "Quel cas suit le verbe pisteuô ?",
        choix: ["Le génitif", "L'accusatif", "Le vocatif", "Le datif"],
        bonne: 3, niv: 2,
        expl: "On ajoute foi à quelqu'un ou à quelque chose." },
      { q: "Quel est le double sens de apistos ?",
        choix: ["Incroyable ou incrédule", "Vrai ou faux", "Étranger ou ami", "Navire ou île"],
        bonne: 0, niv: 3,
        expl: "Le mot vient de pistis avec un a- privatif." },
      { q: "Quelle racine partagent lanthanô et alêtheia ?",
        choix: ["Celle de l'idée de cacher", "Celle de l'idée de voyager", "Celle de l'idée de combattre", "Celle de l'idée de rire"],
        bonne: 0, niv: 3,
        expl: "Alêtheia : ce qui n'est pas caché." },
      { q: "Que signifie diêgêma ?",
        choix: ["Le voyage", "Le mensonge", "Le récit", "Le monstre"],
        bonne: 2, niv: 1,
        expl: "Diêgeomai : raconter en détail." },
      { q: "Que désigne thauma ?",
        choix: ["La merveille", "La peur", "La tempête", "Le théâtre"],
        bonne: 0, niv: 2,
        expl: "Les récits de voyage accumulent les merveilles." },
      { q: "Que signifie nêsos ?",
        choix: ["L'île", "La mer", "Le navire", "Le port"],
        bonne: 0, niv: 1,
        expl: "On le retrouve dans Péloponnèse et Polynésie." },
      { q: "Quel est le sens de xenia ?",
        choix: ["La guerre", "L'hospitalité", "L'exil", "La peur des étrangers"],
        bonne: 1, niv: 2,
        expl: "Recevoir l'étranger est un devoir sacré chez les Grecs." },
      { q: "Quels sens peut prendre arkhê ?",
        choix: ["La mer et le navire", "Le rire et l'ironie", "Le commencement et le pouvoir", "La vérité et le mensonge"],
        bonne: 2, niv: 2,
        expl: "Au bac 2026, il désignait le pouvoir." },
      { q: "Que désigne eirôneia chez Socrate ?",
        choix: ["La feinte ignorance", "La colère contre ses juges", "Le goût des voyages", "La croyance aux oracles"],
        bonne: 0, niv: 3,
        expl: "Socrate fait semblant de ne rien savoir." },
      { q: "Quel mot français vient de polemos, la guerre ?",
        choix: ["Politique", "Polémique", "Polynésie", "Pôle"],
        bonne: 1, niv: 2,
        expl: "Politique vient de polis, la cité." },
    ] },
  { chapitre: "llca-grec-15",
    fiche: `## Méthode : réussir l'écrit de 4 heures

L'écrit de LLCA grec ancien dure **4 heures** et se note sur 20 : 10 points pour l'étude de la langue, 10 points pour l'essai. Seul le **dictionnaire grec-français** est autorisé. Voici comment s'organiser.

### Ce que contient le sujet
- **Texte A** : un extrait des Histoires vraies, en grec avec sa traduction, de 300 mots grecs au plus.
- **Texte B** : un extrait du Baron perché, en français.
- **Texte C** : un court texte grec ou latin en traduction, en lien avec l'objet d'étude.
- **Partie 1** : traduction d'environ 90 mots (6 points), une question de grammaire (2 points : 1 pour l'analyse, 1 pour l'interprétation), une question de lexique (2 points). Les questions de grammaire et de lexique ne portent pas sur le passage à traduire.
- **Partie 2** : un essai organisé et argumenté (10 points).
- La **maîtrise du français** compte sur toute la copie : une copie défaillante sur ce point ne peut pas avoir la moyenne.

### Gérer son temps (conseil)
- Lecture du sujet et des trois textes : 20 minutes.
- Traduction : environ 1 h 15, brouillon compris.
- Grammaire et lexique : 20 minutes.
- Essai : environ 1 h 45 (plan au brouillon puis rédaction).
- Relecture : 20 minutes.

### Traduire : la démarche
- Lire le **chapeau** et les **notes** : au bac 2026, elles expliquaient les crases (tandros = tou andros) et donnaient le sens de formes rares.
- Repérer les **verbes conjugués** et les mots de liaison : **kai** (et), **de** (et, mais), **gar** (car), **alla** (mais), **oun** (donc), **men… de** (d'un côté… de l'autre).
- Grouper chaque **article** avec son nom : l'article donne le cas, le genre et le nombre, et il aide à repérer les participes substantivés.
- Chercher le **sujet** (nominatif) et les compléments d'après leur cas.
- Au dictionnaire, chercher le verbe au présent de l'indicatif, le nom au nominatif ; lire tout l'article pour choisir le bon sens.
- Faire un mot à mot au brouillon, puis écrire un français correct et naturel. Ne jamais laisser de blanc.

### L'essai : la démarche
- **Analyser** la question : « Le récit se déroule de nuit. Qu'apporte ce cadre nocturne à chacun des extraits ? » (bac 2026) appelle plusieurs apports, donc plusieurs parties.
- **Chercher les exemples** : les trois textes, les deux œuvres lues en entier, les textes des objets d'étude, le **portfolio**, les lectures personnelles, et les connaissances de latin si on le pratique aussi.
- **Construire** un plan en deux ou trois parties qui progressent.
- **Rédiger** : introduction (amorce, présentation du corpus, question, annonce du plan), paragraphes (idée, exemple précis, explication), conclusion qui répond.
- **Confronter** Lucien et Calvino dans chaque partie.
- Citer un mot grec du texte A quand c'est utile : il montre une lecture précise.

### L'échelle de l'essai
- La note officielle décrit quatre niveaux : très insuffisant, insuffisant, satisfaisant, très satisfaisant. Une copie satisfaisante répond au sujet avec une réflexion appuyée sur le corpus, les œuvres et une culture personnelle ; une copie très satisfaisante y répond de manière fine.

### Les erreurs à éviter
- Laisser des blancs dans la traduction.
- Analyser une forme sans l'interpréter.
- Résumer les œuvres au lieu de répondre.
- Oublier le texte C, le portfolio ou l'une des deux œuvres.

### À retenir pour le bac
- 4 heures, dictionnaire grec-français seul ; langue sur 10 (traduction 6, grammaire 2, lexique 2), essai sur 10.
- Traduire : chapeau et notes, verbes, mots de liaison, article et nom, cas, mot à mot, bon français.
- Essai : analyser, chercher, construire, rédiger, confronter.
- Le français compte sur toute la copie.`,
    cartes: [
      { q: "Durée de l'écrit de LLCA grec", r: "4 heures." },
      { q: "Document autorisé à l'écrit", r: "Le dictionnaire grec-français seul." },
      { q: "Barème de la partie 1", r: "Traduction 6 points, grammaire 2 points, lexique 2 points." },
      { q: "Barème de la partie 2", r: "Essai organisé et argumenté sur 10 points." },
      { q: "Longueur du passage à traduire", r: "Environ 90 mots grecs." },
      { q: "Les trois textes du corpus", r: "Extrait des Histoires vraies en grec et traduction, extrait du Baron perché, court texte antique en traduction." },
      { q: "Sur quoi portent grammaire et lexique ?", r: "Sur des passages du texte A qui ne sont pas à traduire." },
      { q: "Rôle de la maîtrise du français", r: "Évaluée sur toute la copie : une copie défaillante ne peut pas avoir la moyenne." },
      { q: "Sens de men… de", r: "D'un côté… de l'autre ; il oppose ou met en parallèle deux éléments." },
      { q: "Utilité de l'article en traduction", r: "Il donne le cas, le genre et le nombre du nom, et signale les participes substantivés." },
      { q: "Chercher un verbe au dictionnaire", r: "Au présent de l'indicatif, 1re personne du singulier." },
      { q: "Sources d'exemples pour l'essai", r: "Les trois textes, les deux œuvres en entier, les objets d'étude, le portfolio, les lectures personnelles." },
      { q: "Ce qui distingue une bonne copie d'essai", r: "La confrontation de Lucien et de Calvino dans chaque partie." },
    ],
    quiz: [
      { q: "Combien de temps dure l'écrit de LLCA grec ?",
        choix: ["2 heures", "3 heures", "3 heures 30", "4 heures"],
        bonne: 3, niv: 1,
        expl: "C'est l'une des plus longues épreuves du bac." },
      { q: "Quel document est autorisé à l'écrit ?",
        choix: ["Les œuvres au programme", "Une grammaire grecque", "Le dictionnaire grec-français", "Le portfolio de l'année"],
        bonne: 2, niv: 2,
        expl: "Les œuvres sont autorisées à l'oral de contrôle, pas à l'écrit." },
      { q: "Combien de points vaut la traduction ?",
        choix: ["4 points", "2 points", "5 points", "6 points"],
        bonne: 3, niv: 1,
        expl: "Grammaire et lexique valent 2 points chacun." },
      { q: "Combien de mots grecs compte environ le passage à traduire ?",
        choix: ["Environ 30", "Environ 300", "Environ 90", "Environ 200"],
        bonne: 2, niv: 2,
        expl: "Le texte A peut aller jusqu'à 300 mots." },
      { q: "Sur quoi portent les questions de grammaire et de lexique ?",
        choix: ["Sur le passage à traduire, pour vérifier la traduction", "Sur l'extrait du Baron perché", "Sur des passages qui ne sont pas à traduire", "Sur le portfolio"],
        bonne: 2, niv: 3,
        expl: "La note de service le précise." },
      { q: "Que se passe-t-il pour une copie défaillante en français ?",
        choix: ["On ne note que la traduction", "Elle ne peut pas avoir la moyenne", "Elle est notée sur 10", "Rien, seul le grec compte"],
        bonne: 1, niv: 2,
        expl: "La langue est évaluée sur toute la copie." },
      { q: "Que signifie la particule gar ?",
        choix: ["Car", "Mais", "Donc", "Et"],
        bonne: 0, niv: 1,
        expl: "Elle introduit une explication." },
      { q: "Que signifie le couple men… de ?",
        choix: ["Si… alors", "Ni… ni", "D'un côté… de l'autre", "Parce que… donc"],
        bonne: 2, niv: 2,
        expl: "Il oppose ou met en parallèle deux éléments." },
      { q: "Pourquoi grouper l'article avec son nom ?",
        choix: ["Il donne le cas, le genre et le nombre", "Il indique le temps et le mode du verbe principal de la phrase", "Il remplace le verbe absent", "Il marque la fin de la phrase"],
        bonne: 0, niv: 2,
        expl: "Il aide aussi à repérer les participes substantivés." },
      { q: "Que doit faire l'essai avec Lucien et Calvino ?",
        choix: ["Les résumer l'un après l'autre, en deux blocs séparés", "Les confronter dans chaque partie", "N'en garder qu'un seul", "Les citer en conclusion"],
        bonne: 1, niv: 3,
        expl: "La confrontation distingue une bonne copie." },
      { q: "Que faire d'un passage incompris en traduction ?",
        choix: ["Proposer un sens plausible", "Laisser un blanc", "Recopier le grec", "Écrire une note au correcteur"],
        bonne: 0, niv: 3,
        expl: "Un blanc est une faute certaine." },
    ] },
  ],
  methode: [
    {
      "id": "llca-grec-m1",
      "mat": "llca-grec",
      "titre": "Traduire le passage grec",
      "formules": [
        "Vous traduirez les vers (ou les lignes) … à …",
        "Traduction (6 points) : des notes donnent le sens des formes rares et des crases"
      ],
      "vu": [
        "Bac 2026 Polynésie (Aristophane, L'Assemblée des femmes, vers 1 à 14)",
        "Bac 2026 métropole (L'Assemblée des femmes, v. 17-59, notes sur les crases)",
        "Bac 2026, second sujet (v. 478-531)"
      ],
      "pts": "6 points",
      "attendu": "Une traduction complète d'environ 90 mots, exacte et écrite dans un français correct. Le correcteur vérifie que chaque mot est rendu, que les constructions sont comprises (article et nom, sujet et verbe, participes, subordonnées) et que la phrase française se lit sans effort.",
      "etapes": [
        "Lire le chapeau et toutes les notes : elles donnent le sens des formes difficiles",
        "Repérer les verbes conjugués et les mots de liaison (kai, de, gar, alla, oun)",
        "Grouper l'article avec son nom : l'article donne le cas, le genre et le nombre",
        "Repérer les participes et chercher à quoi ils se rapportent",
        "Faire un mot à mot au brouillon, puis écrire en bon français",
        "Relire en vérifiant qu'aucun mot n'a été oublié"
      ],
      "mots": [
        "article",
        "particule",
        "participe",
        "proposition",
        "cas"
      ],
      "pieges": [
        "Traduire les particules de et gar comme des mots vides : de lie ou oppose, gar explique",
        "Oublier un participe ou le traduire comme un verbe principal sans lien",
        "Chercher au dictionnaire une forme conjuguée au lieu du présent de l'indicatif",
        "Garder l'ordre des mots grecs et produire un français illisible"
      ],
      "cas": "Dans le prologue des Histoires vraies (I, 4), Lucien écrit : « ἓν γὰρ δὴ τοῦτο ἀληθεύσω λέγων ὅτι ψεύδομαι ». Mots utiles : hen (neutre de heis) : une seule chose ; alêtheuô : dire la vérité ; legô : dire ; hoti : que ; pseudomai : mentir.",
      "question": "Traduisez cette phrase en expliquant la construction.",
      "modele": "Le verbe principal est alêtheusô, futur de l'indicatif actif, 1re personne du singulier : « je dirai la vérité ». Hen touto, à l'accusatif neutre, en est le complément : « sur ce seul point ». Gar dê marque l'explication avec insistance : « car, en effet ». Legôn est un participe présent actif au nominatif, qui se rapporte au sujet « je » : « en disant ». Hoti introduit la complétive : « que je mens ». Traduction : « Car je dirai la vérité sur ce seul point : en disant que je mens. »",
      "grille": [
        "Le futur alêtheusô est bien rendu",
        "Hen touto est compris comme « ce seul point »",
        "Le participe legôn est rattaché au sujet",
        "La complétive hoti pseudomai est traduite",
        "La phrase française est correcte"
      ]
    },
    {
      "id": "llca-grec-m2",
      "mat": "llca-grec",
      "titre": "Analyser puis interpréter un fait de langue",
      "formules": [
        "Analysez la forme … dans l'extrait. Que nous révèle l'emploi de cette forme concernant … ?",
        "Quel type de phrase le personnage emploie-t-il ? À quels indices le reconnaissez-vous ?",
        "Quelle est la lettre élidée dans la forme … ? Justifiez en analysant cette forme."
      ],
      "vu": [
        "Bac 2026, second sujet : Περιμείνατε (v. 517), et le caractère de Praxagora",
        "Bac 2026 métropole : le type de phrase de Τί δῆτ᾽ ἂν εἴη ; (v. 24), et l'état d'esprit du personnage",
        "Bac 2026 Polynésie : l'élision dans κατευτρέπιζ᾽ (v. 34), et le rôle de Praxagora"
      ],
      "pts": "2 points (1 pour l'analyse, 1 pour l'interprétation)",
      "attendu": "Une analyse exacte et complète (mode, temps, voix, personne, verbe d'origine, ou indices du type de phrase), puis une phrase d'interprétation qui relie cette forme au personnage ou à la situation. L'analyse seule ne donne que la moitié des points.",
      "etapes": [
        "Retrouver le verbe d'origine (présent de l'indicatif, comme au dictionnaire)",
        "Repérer l'augment (passé de l'indicatif) et le sigma (futur, aoriste sigmatique)",
        "Identifier la désinence : personne, nombre, voix",
        "Rédiger l'analyse complète",
        "Interpréter : un ordre, un souhait, une possibilité, une question montrent-ils l'autorité, l'inquiétude, l'espoir du personnage ?"
      ],
      "mots": [
        "aoriste",
        "impératif",
        "optatif",
        "particule an",
        "voix moyenne",
        "augment"
      ],
      "pieges": [
        "Oublier la voix (active, moyenne, passive)",
        "Confondre l'aoriste et l'imparfait : l'aoriste n'est un passé qu'à l'indicatif",
        "Analyser sans interpréter",
        "Ignorer la particule an, qui change le sens de l'optatif"
      ],
      "cas": "Dans le même prologue, Lucien ajoute : « διὸ δεῖ τοὺς ἐντυγχάνοντας μηδαμῶς πιστεύειν αὐτοῖς » (c'est pourquoi ceux qui les liront ne doivent en aucune façon y croire). Entunkhanô signifie rencontrer, et aussi lire un livre.",
      "question": "Analysez la forme ἐντυγχάνοντας. Que révèle cette forme sur la relation entre l'auteur et ses lecteurs ?",
      "modele": "Entunkhanontas est un participe présent actif, à l'accusatif masculin pluriel, du verbe entunkhanô ; précédé de l'article tous, il est substantivé : « ceux qui rencontrent (le livre) », c'est-à-dire les lecteurs. Il est sujet de l'infinitive après dei. Le participe présent désigne tous les lecteurs, à tout moment, ceux d'aujourd'hui comme ceux de demain : Lucien s'adresse directement à eux et les avertit. Il établit un pacte de lecture paradoxal : il leur demande de ne rien croire, ce qui les rend complices du jeu.",
      "grille": [
        "La forme (participe présent actif) est identifiée",
        "Le cas, le genre et le nombre sont exacts",
        "La substantivation par l'article est expliquée",
        "L'interprétation parle du pacte de lecture et de la complicité du lecteur"
      ]
    },
    {
      "id": "llca-grec-m3",
      "mat": "llca-grec",
      "titre": "Expliquer un mot clé en contexte",
      "formules": [
        "Définissez en contexte le sens du mot … En quoi ce verbe (ce terme) est-il révélateur des enjeux de l'œuvre ?",
        "Sur quel adjectif … est-il formé ? En quoi convient-il particulièrement à … ?"
      ],
      "vu": [
        "Bac 2026 métropole : λαθεῖν (v. 23 et 26)",
        "Bac 2026, second sujet : ἀρχή (v. 517)",
        "Bac 2026 Polynésie : ἀνδρειόταται (v. 43)"
      ],
      "pts": "2 points (1 pour le sens, 1 pour le lien avec l'œuvre)",
      "attendu": "Le sens du mot au dictionnaire, avec ses principales valeurs, puis le sens précis dans le passage, justifié par le contexte, enfin ce que le mot révèle des enjeux de l'œuvre ou de l'objet d'étude.",
      "etapes": [
        "Donner la forme de dictionnaire et la nature du mot",
        "Donner le sens premier et les autres sens, éventuellement la famille de mots",
        "Choisir le sens qui convient au passage et le justifier",
        "Relier le mot aux enjeux de l'œuvre (vérité et mensonge, voyage, savoir)"
      ],
      "mots": [
        "famille de mots",
        "sens propre",
        "sens figuré",
        "enjeu",
        "contexte"
      ],
      "pieges": [
        "Répondre à la première partie seulement",
        "Copier l'article du dictionnaire sans choisir",
        "Oublier de citer le contexte précis"
      ],
      "cas": "Dans le prologue (I, 4), Lucien conclut : « διὸ δεῖ τοὺς ἐντυγχάνοντας μηδαμῶς πιστεύειν αὐτοῖς ».",
      "question": "Définissez en contexte le sens du verbe πιστεύειν. En quoi ce verbe est-il révélateur des enjeux de l'œuvre ?",
      "modele": "Pisteuein est l'infinitif présent actif de pisteuô, de la famille de pistis (la confiance, la foi, la preuve) : avoir confiance, croire, ajouter foi à. Il se construit avec le datif : autois, « à ces choses ». Ici, nié par mêdamôs, il signifie « ne pas ajouter foi aux récits » : Lucien demande à son lecteur de ne pas croire ce qu'il va lire. Le mot est au cœur de l'œuvre : les Histoires vraies jouent avec la croyance du lecteur et se moquent des voyageurs et historiens qui veulent faire croire des merveilles. L'œuvre rejoint ainsi l'objet d'étude « Croire, savoir, douter ».",
      "grille": [
        "Le sens au dictionnaire et la famille (pistis) sont donnés",
        "La construction avec le datif est remarquée",
        "Le sens en contexte, avec la négation, est expliqué",
        "Le lien avec les enjeux de l'œuvre est fait"
      ]
    },
    {
      "id": "llca-grec-m4",
      "mat": "llca-grec",
      "titre": "Rédiger l'essai organisé et argumenté",
      "formules": [
        "« … ? » Vous répondrez à cette question sous la forme d'un essai organisé et argumenté qui prendra appui sur votre connaissance des deux œuvres au programme, sur celle des textes ou documents étudiés dans le cadre des différents objets d'étude, sur le portfolio, sur vos lectures personnelles et, le cas échéant, sur les connaissances acquises dans l'autre langue ancienne."
      ],
      "vu": [
        "Bac 2026 métropole : « Le récit se déroule de nuit. Qu'apporte ce cadre nocturne à chacun des extraits ? »",
        "Bac 2026, second sujet : « Comment les textes du corpus mettent-ils en lumière l'intelligence des femmes face à l'oppression masculine ? »"
      ],
      "pts": "10 points",
      "attendu": "Une introduction qui présente le corpus et pose la question, deux ou trois parties argumentées, chacune appuyée sur des exemples précis tirés des trois textes, des deux œuvres lues en entier, du portfolio et de lectures personnelles, puis une conclusion qui répond nettement. Le correcteur valorise la confrontation de Lucien et de Calvino.",
      "etapes": [
        "Analyser les mots de la question et la reformuler",
        "Relever dans les trois textes ce qui y répond",
        "Ajouter des épisodes des deux œuvres en entier, un document du portfolio, une lecture personnelle",
        "Construire un plan en deux ou trois parties qui progresse",
        "Rédiger chaque paragraphe : idée, exemple précis, explication",
        "Conclure en répondant, puis relire l'orthographe"
      ],
      "mots": [
        "confrontation",
        "corpus",
        "œuvre intégrale",
        "portfolio",
        "problématique",
        "argument"
      ],
      "pieges": [
        "Ne parler que des extraits, sans les œuvres en entier",
        "Traiter Lucien puis Calvino en deux blocs séparés",
        "Raconter au lieu d'argumenter",
        "Oublier le texte C et le portfolio"
      ],
      "cas": "Corpus : Lucien, Histoires vraies, I, 1-4 (le prologue) ; Calvino, Le Baron perché, chapitre I (Cosimo monte dans l'arbre) ; Homère, Odyssée, IX, 19-20 (Ulysse se présente avant de raconter ses aventures).",
      "question": "Rédigez l'introduction et le plan détaillé de l'essai : « Faut-il s'éloigner du monde pour mieux le voir ? »",
      "modele": "Introduction : Lucien embarque ses lecteurs dans un voyage jusqu'à la Lune et dans le ventre d'une baleine ; Cosimo, le héros de Calvino, monte dans un arbre à douze ans et n'en redescend plus ; Ulysse raconte ses aventures loin d'Ithaque. Tous trois s'éloignent du monde ordinaire. Cet éloignement permet-il de mieux le voir ? I. S'éloigner, c'est d'abord découvrir : les terres extraordinaires de Lucien, la forêt et les arbres d'Ombrosa pour Cosimo, les peuples rencontrés par Ulysse. II. La distance donne un regard critique : les Sélénites et la guerre de la Lune et du Soleil font rire des guerres humaines ; d'en haut, Cosimo juge sa famille, la société de son temps et participe aux idées des Lumières. III. Mais on ne quitte jamais tout à fait le monde : Cosimo agit sur la terre sans la toucher ; les inventions de Lucien parlent toujours des hommes de son temps. Conclusion : l'éloignement ne coupe pas du monde, il aide à le comprendre et à le juger.",
      "grille": [
        "L'introduction présente le corpus et pose la question",
        "Le plan répond à la question et progresse",
        "Les exemples viennent des trois textes et des deux œuvres en entier",
        "Lucien et Calvino sont confrontés dans les mêmes parties",
        "Le portfolio ou une lecture personnelle est mobilisé",
        "La conclusion répond nettement"
      ]
    },
    {
      "id": "llca-grec-m5",
      "mat": "llca-grec",
      "titre": "Réussir l'oral de contrôle",
      "formules": [
        "Lisez en grec, situez et commentez le passage en le mettant en perspective avec Le Baron perché, puis traduisez l'extrait indiqué (25 mots au plus)."
      ],
      "vu": [
        "Note de service du 11 septembre 2026 : 20 minutes de préparation, 20 minutes d'épreuve (exposé 10 minutes, entretien 10 minutes)"
      ],
      "pts": "Note sur 20",
      "attendu": "Un passage d'une vingtaine de lignes des Histoires vraies, donné en grec et en traduction : le candidat le lit en grec, le situe, le commente en le rapprochant du roman de Calvino, puis traduit un extrait de 25 mots au plus en faisant des remarques de grammaire et de vocabulaire. Le dictionnaire et les deux œuvres sont autorisés. L'entretien revient sur le commentaire et la traduction et élargit aux deux œuvres.",
      "etapes": [
        "Situer le passage dans le voyage (quel livre, quel épisode, avant et après)",
        "Traduire au brouillon l'extrait demandé en s'écartant de la traduction fournie",
        "Dégager deux idées de commentaire, chacune appuyée sur un mot grec",
        "Préparer un rapprochement précis avec un épisode du Baron perché",
        "Lire le grec à voix haute calmement, puis exposer"
      ],
      "mots": [
        "situer",
        "commentaire",
        "mise en perspective",
        "traduction personnelle",
        "remarque grammaticale"
      ],
      "pieges": [
        "Recopier la traduction fournie au lieu d'en proposer une personnelle",
        "Oublier de lire le passage en grec",
        "Ne pas parler du Baron perché"
      ],
      "cas": "Le passage tiré au sort est l'épisode où les voyageurs sont avalés par un monstre marin, à la fin du livre I des Histoires vraies.",
      "question": "Préparez deux idées de commentaire et un rapprochement avec Le Baron perché.",
      "modele": "Idée 1 : la précision des chiffres (la longueur du monstre, la durée du séjour) donne un air de vérité au récit le plus incroyable ; c'est la parodie des voyageurs qui accumulent les mesures. Idée 2 : à l'intérieur du monstre, les voyageurs trouvent une île, des arbres, un temple et des habitants : un monde complet en miniature, qui reproduit les guerres et les usages humains. Rapprochement : comme Cosimo dans les arbres d'Ombrosa, les voyageurs organisent une vie entière dans un lieu impossible ; dans les deux œuvres, un monde à part fait voir autrement le nôtre.",
      "grille": [
        "Le passage est situé dans le voyage",
        "La traduction est personnelle et précise",
        "Le commentaire s'appuie sur des mots grecs du passage",
        "Le rapprochement avec Le Baron perché est précis"
      ]
    }
  ],
  sujets: [
    { id: "llca-grec-s1", matiere: 'llca-grec', titre: "Sujet d'entraînement 1 : le menteur qui dit la vérité", duree: 240,
      enonce: `Sujet d'entraînement inventé, sur le modèle de l'épreuve écrite de LLCA grec ancien (session 2027). Le texte grec est celui du prologue de Lucien ; les traductions et les questions sont écrites pour cet entraînement. Avant de commencer, vérifier le texte grec dans son édition (Les Belles Lettres, texte établi par Jacques Bompaire). Durée : 4 heures. Seul le dictionnaire grec-français est autorisé.

Le corpus
Texte A : Lucien, Histoires vraies, livre I, 4 (fin du prologue). Avant de raconter son voyage, le narrateur explique pourquoi il écrit et comment il faut le lire.
Texte B : Italo Calvino, Le Baron perché, chapitre I (le 15 juin 1767, Cosimo refuse le plat d'escargots, monte dans l'yeuse du jardin et annonce qu'il n'en redescendra pas), dans votre édition (Folio).
Texte C : Homère, Odyssée, IX, v. 19-20. Chez les Phéaciens, Ulysse se présente avant de raconter ses aventures. Traduction : « Je suis Ulysse, fils de Laërte ; tous les hommes me connaissent pour mes ruses, et ma gloire monte jusqu'au ciel. »

Texte A
ἓν γὰρ δὴ τοῦτο ἀληθεύσω λέγων ὅτι ψεύδομαι. οὕτω δ᾽ ἄν μοι δοκῶ καὶ τὴν παρὰ τῶν ἄλλων κατηγορίαν ἐκφυγεῖν αὐτὸς ὁμολογῶν μηδὲν ἀληθὲς λέγειν. γράφω τοίνυν περὶ ὧν μήτε εἶδον μήτε ἔπαθον μήτε παρ᾽ ἄλλων ἐπυθόμην, ἔτι δὲ μήτε ὅλως ὄντων μήτε τὴν ἀρχὴν γενέσθαι δυναμένων. διὸ δεῖ τοὺς ἐντυγχάνοντας μηδαμῶς πιστεύειν αὐτοῖς.

Notes : ἀληθεύω : dire la vérité ; ἐκφυγεῖν : infinitif aoriste de ἐκφεύγω, échapper à ; κατηγορία, ας (ἡ) : l'accusation ; ὁμολογέω : reconnaître, avouer ; τοίνυν : donc ; εἶδον, ἔπαθον, ἐπυθόμην : aoristes de ὁράω (voir), πάσχω (éprouver, vivre), πυνθάνομαι (apprendre) ; τὴν ἀρχήν : employé comme adverbe, « du tout, absolument » ; ἐντυγχάνω : rencontrer, ici lire (un livre).

PARTIE 1 — Étude de la langue (10 points)
1. Traduction (6 points). Traduisez le texte depuis ἓν γὰρ δὴ jusqu'à δυναμένων.
2. Grammaire (2 points). a. Analysez la forme ἐντυγχάνοντας. b. Que révèle l'emploi de cette forme sur la relation entre l'auteur et ses lecteurs ?
3. Lexique (2 points). a. Définissez en contexte le sens du verbe πιστεύειν. b. En quoi ce verbe est-il révélateur des enjeux de l'œuvre ?

PARTIE 2 — Compréhension et interprétation (10 points)
« Pourquoi raconter des histoires qui ne sont pas vraies ? »
Vous répondrez à cette question sous la forme d'un essai organisé et argumenté qui prendra appui sur votre connaissance des deux œuvres au programme, sur celle des textes ou documents étudiés dans le cadre des différents objets d'étude, sur le portfolio, sur vos lectures personnelles et, le cas échéant, sur les connaissances acquises dans l'autre langue ancienne.

Remarque : à l'épreuve, le passage à traduire compte environ 90 mots ; il est plus court ici (48 mots). Pour s'entraîner sur une vraie longueur, on traduit en plus, dans son édition, le début du paragraphe 4.`,
      corrige: `PARTIE 1
1. Traduction proposée : « Car je dirai la vérité sur ce seul point : en disant que je mens. Ainsi, me semble-t-il, j'échapperais aussi à l'accusation venue des autres, puisque j'avoue moi-même ne rien dire de vrai. J'écris donc sur des choses que je n'ai ni vues, ni vécues, ni apprises d'autrui, et qui, de plus, n'existent pas du tout et ne pourraient absolument pas exister. »
Points à vérifier : ἀληθεύσω est un futur de l'indicatif, 1re personne du singulier ; λέγων, participe présent au nominatif, se rapporte au sujet ; ἄν + infinitif (ἐκφυγεῖν) après δοκῶ exprime le potentiel, d'où le conditionnel « j'échapperais » ; αὐτὸς ὁμολογῶν est un participe à valeur causale (« puisque j'avoue moi-même ») ; περὶ ὧν = περὶ τούτων ἅ, « sur les choses que » ; les trois aoristes εἶδον, ἔπαθον, ἐπυθόμην sont des passés ; ὄντων et δυναμένων sont des participes au génitif qui se rapportent à ὧν.
Barème indicatif : environ 1,5 point par phrase juste et bien écrite ; les fautes de construction pèsent plus que les imprécisions de vocabulaire.

2. a. ἐντυγχάνοντας : participe présent actif, accusatif masculin pluriel, du verbe ἐντυγχάνω. Précédé de l'article τούς, il est substantivé : « ceux qui rencontrent le livre », les lecteurs. Il est sujet de l'infinitif πιστεύειν, qui dépend de δεῖ.
b. Le participe présent désigne tous les lecteurs, présents et futurs : Lucien s'adresse directement à eux. Il leur donne une consigne étonnante, ne rien croire, ce qui établit un pacte de lecture fondé sur la complicité : le lecteur sait qu'on lui ment et prend plaisir au jeu.

3. a. πιστεύω, de la famille de πίστις (la confiance, la foi), signifie avoir confiance, croire, ajouter foi à ; il se construit avec le datif (αὐτοῖς, « à ces choses »). Ici, nié par μηδαμῶς, il veut dire : ne pas tenir pour vrais les récits qui vont suivre.
b. L'œuvre entière joue avec la croyance du lecteur. Lucien se moque des voyageurs, des poètes et des historiens (Ctésias, Iamboulos, l'Ulysse d'Homère) qui racontent des merveilles en voulant être crus. En demandant qu'on ne le croie pas, il fait réfléchir à la différence entre mensonge et fiction, et rejoint l'objet d'étude « Croire, savoir, douter ».

PARTIE 2 — Pistes pour l'essai
Introduction : Lucien annonce qu'il ne dira que des mensonges ; Calvino invente un baron qui vit toute sa vie dans les arbres ; Ulysse se vante de ses ruses avant un récit plein de merveilles. Pourquoi inventer des histoires que personne ne peut croire ?
I. Pour le plaisir de l'imagination et du rire : la Lune, la baleine, l'île des Bienheureux chez Lucien ; l'invention d'une vie entière dans les arbres chez Calvino ; le plaisir du récit d'Ulysse chez les Phéaciens.
II. Pour faire réfléchir et critiquer : Lucien parodie les récits de voyage qui se prétendent vrais et rit des guerres humaines (la guerre de la Lune et du Soleil) ; Cosimo, d'en haut, juge sa famille et la société et vit les idées des Lumières ; le texte C montre un conteur fier de ses ruses, qui invite à douter.
III. Pour dire autrement une vérité : la fiction avouée est plus honnête que le mensonge qui se cache ; Le Baron perché parle de la liberté, de la fidélité à soi-même, de l'histoire européenne ; un document du portfolio (une gravure de voyage imaginaire, une adaptation) peut illustrer cette idée.
Conclusion : une histoire qui n'est pas vraie n'est pas forcément un mensonge ; elle peut faire rire, critiquer et révéler le monde réel.`,
      grille: [{"c":"Traduction : constructions comprises (futur et participe, potentiel avec ἄν, relative περὶ ὧν, participes au génitif)","pts":4},{"c":"Traduction : vocabulaire juste et français correct, rien n'est oublié","pts":2},{"c":"Grammaire : analyse complète de ἐντυγχάνοντας et de sa substantivation","pts":1},{"c":"Grammaire : interprétation sur le pacte de lecture","pts":1},{"c":"Lexique : sens et construction de πιστεύω, lien avec les enjeux de l'œuvre","pts":2},{"c":"Essai : introduction, problématique et plan qui progresse","pts":2.5},{"c":"Essai : exemples précis tirés des trois textes et des deux œuvres en entier, confrontés","pts":4},{"c":"Essai : portfolio ou lectures personnelles, conclusion qui répond nettement","pts":2},{"c":"Essai : maîtrise de la langue française","pts":1.5}] },
  ],
};
