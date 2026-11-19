// LLCA latin (littérature et langues et cultures de l'Antiquité), terminale générale. Sources : voir matiere.sources.
// Programme en vigueur : BO spécial n° 8 du 25 juillet 2019 (terminale LLCA). Œuvres : programme limitatif 2026-2027 et 2027-2028 (BO n° 11 du 12 mars 2026, Ovide, Tristes III, et Karen Blixen, La Ferme africaine). Épreuve : note de service du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026), en vigueur à la session 2027.
export default {
  matiere: {
    id: 'llca-lat',
    nom: 'LLCA latin',
    voie: 'generale',
    epreuve: {"type":"ecrit","duree":240,"coef":16,"quand":"juin","note":"Écrit de 4 heures, seul le dictionnaire latin-français est autorisé. Le corpus compte trois textes : un extrait de l'œuvre antique au programme (Ovide, Tristes, livre III), en latin avec sa traduction ; un extrait de l'œuvre moderne (Karen Blixen, La Ferme africaine) ; un court texte grec ou latin en traduction. Partie 1, étude de la langue, sur 10 points : traduction d'environ 90 mots (6 points), un fait de langue à analyser puis à interpréter (2 points), un mot ou une notion à expliquer en contexte (2 points). Partie 2, sur 10 points : un essai organisé et argumenté qui s'appuie sur le corpus, les deux œuvres, l'objet d'étude, le portfolio et les lectures personnelles. La maîtrise de la langue française est évaluée sur toute la copie. Coefficient 16, celui des spécialités de terminale."},
    sources: [
      "https://eduscol.education.fr/document/23926/download",
      "https://www.education.gouv.fr/bo/2026/Hebdo11/MENE2605298N",
      "https://www.education.gouv.fr/bo/2026/Special4/MENE2622660N",
      "https://eduscol.education.fr/document/52917/download",
      "https://eduscol.education.gouv.fr/sites/default/files/document/26-llcalaag1-128349.pdf",
      "https://eduscol.education.gouv.fr/sites/default/files/document/26-llcalapo1-127877.pdf",
      "https://www.cafepedagogique.net/wp-content/uploads/2026/06/26-LLCALAME1.pdf",
      "https://eduscol.education.gouv.fr/5808/programmes-et-ressources-en-langues-et-cultures-de-l-antiquite-voie-gt",
    ],
    chapitres: [
      { id: "llca-lat-1", t: "Ovide : une vie, une œuvre, une relégation", theme: "Œuvre antique : Ovide, Tristes III" },
      { id: "llca-lat-2", t: "Tristes III : le parcours du livre", theme: "Œuvre antique : Ovide, Tristes III" },
      { id: "llca-lat-3", t: "L'élégie de l'exil : forme et genre", theme: "Œuvre antique : Ovide, Tristes III" },
      { id: "llca-lat-4", t: "Tomes et les barbares : la terre de l'exil", theme: "Œuvre antique : Ovide, Tristes III" },
      { id: "llca-lat-5", t: "Écrire pour survivre : le poète et son œuvre", theme: "Œuvre antique : Ovide, Tristes III" },
      { id: "llca-lat-6", t: "Karen Blixen, La Ferme africaine", theme: "Œuvre moderne : Blixen" },
      { id: "llca-lat-7", t: "Ovide et Blixen : confronter les deux œuvres", theme: "Confronter les œuvres" },
      { id: "llca-lat-8", t: "Objet d'étude : L'homme, le monde, le destin", theme: "Objets d'étude" },
      { id: "llca-lat-9", t: "Objet d'étude : Croire, savoir, douter", theme: "Objets d'étude" },
      { id: "llca-lat-10", t: "Objet d'étude : Méditerranée, présence des mondes antiques", theme: "Objets d'étude" },
      { id: "llca-lat-11", t: "Langue : les notions de terminale", theme: "Langue latine" },
      { id: "llca-lat-12", t: "Langue : analyser une forme verbale", theme: "Langue latine" },
      { id: "llca-lat-13", t: "Lexique : les mots-concepts de l'exil et du destin", theme: "Langue latine" },
      { id: "llca-lat-14", t: "Méthode : réussir l'écrit de 4 heures", theme: "Méthode de l'épreuve" },
    ],
  },
  paquets: [
  { chapitre: "llca-lat-1",
    fiche: `## Ovide : une vie, une œuvre, une relégation

L'œuvre antique au programme de 2027 est le livre III des **Tristia** (les Tristes) d'Ovide. Pour la comprendre, il faut connaître la vie du poète : elle bascule d'un coup, en 8 après J.-C., quand l'empereur Auguste l'éloigne de Rome pour toujours.

### Un poète célèbre à Rome
- **Publius Ovidius Naso** (en français Ovide, et dans ses poèmes **Naso**, Nason) naît en **43 av. J.-C.** à **Sulmone** (Sulmo), dans les Abruzzes, dans une famille de chevaliers.
- Il étudie la rhétorique à Rome pour devenir avocat et magistrat, mais choisit la poésie.
- Il vit sous le règne d'**Auguste**, au temps de la paix romaine. Il est plus jeune que Virgile et Horace.
- Ses premières œuvres parlent d'amour, avec humour et liberté : les **Amours** (Amores), les **Héroïdes** (lettres d'héroïnes à leur amant absent), l'**Art d'aimer** (Ars amatoria) et les **Remèdes à l'amour**.
- Il compose ensuite les **Métamorphoses**, quinze livres de récits mythologiques de transformations, et les **Fastes**, sur le calendrier religieux romain.

### Le coup de tonnerre de l'an 8
- En **8 ap. J.-C.**, Auguste frappe Ovide d'une **relegatio** : il doit partir pour **Tomes** (Tomis, aujourd'hui **Constanța**, en Roumanie), sur la rive du **Pont-Euxin** (la mer Noire), près des bouches de l'**Hister** (le Danube).
- La **relégation** est plus douce que l'**exsilium** au sens juridique : Ovide garde sa **citoyenneté** et ses biens. Mais il ne peut pas choisir son lieu de vie ni revenir à Rome.
- Il donne deux causes : « **carmen et error** » (Tristes, II, 207). Le **carmen**, le poème, est l'Art d'aimer, jugé contraire aux lois d'Auguste sur les mœurs. L'**error**, l'erreur, reste mystérieuse : Ovide dit avoir vu quelque chose qu'il n'aurait pas dû voir, sans jamais préciser quoi.
- On a fait beaucoup d'hypothèses sur cette erreur ; aucune n'est prouvée. À l'épreuve, il suffit de dire qu'elle reste inconnue.

### Les poèmes de l'exil
- À Tomes, Ovide écrit les **Tristia** (Tristes), cinq livres d'élégies, puis les **Epistulae ex Ponto** (Pontiques), lettres en vers envoyées du Pont.
- Le livre I est écrit pendant le voyage ; le livre II est une longue lettre à Auguste pour se défendre ; les livres III à V sont écrits à Tomes.
- Il supplie Auguste, puis Tibère (empereur à partir de 14), de le rappeler ou de l'envoyer dans un lieu moins rude. Il n'obtient rien.
- Il meurt à Tomes vers **17 ou 18 ap. J.-C.**, sans avoir revu Rome. La relégation, qui pouvait sembler provisoire, est devenue définitive.

### Pourquoi ce destin intéresse le programme
- L'objet d'étude de l'œuvre est « **L'homme, le monde, le destin** » : Ovide se présente comme un homme frappé par une puissance qui le dépasse, la colère de **Caesar** (Auguste), qu'il compare souvent à la foudre de Jupiter.
- Il parle de son **fatum** (destin) et de sa **fortuna** (sort changeant) : « **Ergo erat in fatis Scythiam quoque uisere nostris** » (III, 2, 1), « Il était donc dans mon destin de voir aussi la Scythie ».
- Son destin est aussi celui d'un écrivain : son **ingenium** (talent) l'a perdu, mais c'est encore la poésie qui le fait vivre à Rome.

### À retenir pour le bac
- Ovide (Naso), né en 43 av. J.-C. à Sulmone, mort vers 17-18 ap. J.-C. à Tomes.
- Relégué (**relegatio**) par Auguste en 8 ap. J.-C. : il garde citoyenneté et biens, mais ne peut pas revenir.
- Deux causes : **carmen et error** (l'Art d'aimer et une faute restée secrète).
- Œuvres de l'exil : Tristes (5 livres) et Pontiques ; la relégation devient définitive.`,
    cartes: [
      { q: "Nom latin d'Ovide", r: "Publius Ovidius Naso ; dans ses poèmes il se nomme Naso (Nason)." },
      { q: "Naissance d'Ovide", r: "En 43 av. J.-C., à Sulmone (Sulmo), dans une famille de chevaliers." },
      { q: "Œuvres amoureuses d'Ovide", r: "Amours, Héroïdes, Art d'aimer, Remèdes à l'amour." },
      { q: "Grandes œuvres d'Ovide avant l'exil", r: "Les Métamorphoses (15 livres de récits de transformations) et les Fastes (calendrier religieux)." },
      { q: "Date de la relégation d'Ovide", r: "8 ap. J.-C., décidée par Auguste." },
      { q: "Lieu de la relégation", r: "Tomes (Tomis, aujourd'hui Constanța en Roumanie), sur le Pont-Euxin, près du Danube." },
      { q: "Relegatio et exsilium", r: "La relégation laisse la citoyenneté et les biens, mais impose un lieu et interdit le retour." },
      { q: "Les deux causes de la relégation", r: "« carmen et error » (Tristes, II, 207) : un poème, l'Art d'aimer, et une erreur jamais expliquée." },
      { q: "Œuvres de l'exil", r: "Les Tristes (cinq livres d'élégies) et les Pontiques (lettres en vers)." },
      { q: "Où sont écrits les livres III à V des Tristes ?", r: "À Tomes, après l'arrivée du poète." },
      { q: "Mort d'Ovide", r: "Vers 17 ou 18 ap. J.-C., à Tomes, sans avoir été rappelé." },
      { q: "Empereurs sollicités par Ovide", r: "Auguste, puis Tibère à partir de 14 ap. J.-C. : aucun ne le rappelle." },
      { q: "Objet d'étude lié aux Tristes", r: "« L'homme, le monde, le destin »." },
    ],
    quiz: [
      { q: "En quelle année Ovide est-il relégué à Tomes ?",
        choix: ["En 43 av. J.-C.", "En 14 ap. J.-C.", "En 8 ap. J.-C.", "En 31 av. J.-C."],
        bonne: 2, niv: 1,
        expl: "Auguste l'éloigne en 8 ap. J.-C. ; il était né en 43 av. J.-C." },
      { q: "Où se trouve Tomes, la ville où Ovide est relégué ?",
        choix: ["Sur la côte de la mer Noire", "Sur la côte de la Gaule", "Dans une île de la mer Égée", "Au bord du Nil"],
        bonne: 0, niv: 1,
        expl: "Tomis est aujourd'hui Constanța, en Roumanie, sur le Pont-Euxin." },
      { q: "Que garde Ovide grâce au statut de la relegatio ?",
        choix: ["Le droit de revenir à Rome quand il le souhaite", "Le choix de sa ville", "Sa place au sénat", "Sa citoyenneté et ses biens"],
        bonne: 3, niv: 2,
        expl: "La relégation est plus douce que l'exil au sens juridique." },
      { q: "Que désigne le mot carmen dans « carmen et error » ?",
        choix: ["Les Métamorphoses", "Une prière à Jupiter", "Une chanson populaire", "L'Art d'aimer"],
        bonne: 3, niv: 2,
        expl: "Ce poème était jugé contraire aux lois d'Auguste sur les mœurs." },
      { q: "Que sait-on de l'error d'Ovide ?",
        choix: ["Il a volé le trésor d'un temple de Rome pour payer ses dettes", "Il dit avoir vu ce qu'il ne fallait pas voir, sans préciser", "C'était une dette impayée", "Une faute de traduction dans un poème"],
        bonne: 1, niv: 2,
        expl: "Les hypothèses sont nombreuses, aucune n'est prouvée." },
      { q: "Quel est le nom que le poète se donne dans ses vers ?",
        choix: ["Publius", "Naso", "Ouidius", "Caesar"],
        bonne: 1, niv: 1,
        expl: "Naso est son cognomen ; il l'emploie dans son épitaphe (III, 3)." },
      { q: "Quelle œuvre Ovide écrit-il en exil ?",
        choix: ["Les Héroïdes", "L'Art d'aimer", "Les Pontiques", "Les Amours"],
        bonne: 2, niv: 2,
        expl: "Les Tristes et les Pontiques sont les œuvres de l'exil." },
      { q: "Combien de livres comptent les Tristes ?",
        choix: ["Deux", "Quinze", "Cinq", "Douze"],
        bonne: 2, niv: 2,
        expl: "Les Métamorphoses, elles, en comptent quinze." },
      { q: "Quel livre des Tristes est une longue défense adressée à Auguste ?",
        choix: ["Le livre III", "Le livre II", "Le livre V", "Le livre I"],
        bonne: 1, niv: 3,
        expl: "Le livre I est écrit pendant le voyage, les livres III à V à Tomes." },
      { q: "Que traduit le vers « Ergo erat in fatis Scythiam quoque uisere nostris » ?",
        choix: ["Je voulais donc aller voir la Scythie avec mes amis les plus chers", "La Scythie était donc dans mes livres", "Il était donc dans mon destin de voir aussi la Scythie", "Le destin m'a donc ramené de Scythie"],
        bonne: 2, niv: 3,
        expl: "Fatis vient de fatum, le destin ; uisere signifie voir, visiter." },
      { q: "Pourquoi dit-on que la relégation d'Ovide est devenue définitive ?",
        choix: ["Auguste l'a condamné à mort, puis Tibère a confirmé la sentence", "Il a refusé de revenir", "Tibère l'a envoyé plus loin", "Il meurt à Tomes vers 17-18 sans avoir été rappelé"],
        bonne: 3, niv: 3,
        expl: "Ni Auguste ni Tibère n'ont accepté de le rappeler." },
    ] },
  { chapitre: "llca-lat-2",
    fiche: `## Tristes III : le parcours du livre

Le livre III des Tristes réunit quatorze élégies (la quatrième est parfois coupée en deux, 4a et 4b). Ce sont les premiers poèmes écrits à Tomes. On n'a pas besoin de tout savoir par cœur, mais il faut pouvoir situer chaque passage : à qui Ovide parle, et de quoi.

### Ouverture : le livre part pour Rome (III, 1)
- C'est le **liber**, le livre lui-même, qui parle : « **Missus in hanc uenio timide liber exulis urbem** » (v. 1), « Envoyé dans cette ville, moi, livre d'un exilé, j'arrive timidement ».
- Il visite Rome, passe devant les monuments d'Auguste, puis cherche un abri ; les bibliothèques publiques lui ferment leurs portes.
- Idée clé : le livre va là où le poète n'a plus le droit d'aller.

### L'arrivée et la souffrance (III, 2 et III, 3)
- **III, 2** : Ovide découvre la Scythie. Il se plaint de son destin et souhaite la mort.
- **III, 3** : lettre à sa femme, écrite alors qu'il est malade. Il imagine sa mort loin des siens et compose sa propre **épitaphe** : « **Hic ego qui iaceo tenerorum lusor amorum / ingenio perii Naso poeta meo** » (v. 73-74), « Moi qui repose ici, qui ai joué avec les tendres amours, moi, le poète Nason, j'ai péri par mon propre talent ».

### Les amis restés à Rome (III, 4 à III, 7)
- **III, 4** : conseil à un ami de vivre loin des puissants : « **bene qui latuit bene uixit** » (v. 25), « celui qui a su rester caché a bien vécu ». Puis le poète pense de loin à ses amis.
- **III, 5** et **III, 6** : à des amis fidèles. Ovide ne les nomme pas, pour ne pas les compromettre.
- **III, 7** : à **Perilla**, une jeune femme qui écrit des vers. Il l'encourage à continuer. Le talent est le seul bien que nul ne peut enlever : « **Caesar in hoc potuit iuris habere nihil** » (v. 48), « César n'a pu avoir aucun droit sur cela ».

### Le pays de l'exil (III, 8 à III, 12)
- **III, 8** : Ovide rêve d'un char volant, celui de **Triptolème** ou celui de Médée, pour revenir chez lui.
- **III, 9** : origine du nom de **Tomis**. Des Grecs de **Milet** ont fondé la ville. Selon la légende, Médée y aurait coupé en morceaux son frère **Absyrte** pour retarder son père : le nom viendrait du grec « couper ».
- **III, 10** : l'**hiver** à Tomes. La neige ne fond pas, le vin gèle dans les jarres, l'Hister gelé laisse passer les cavaliers barbares qui pillent la campagne.
- **III, 11** : contre un ennemi qui l'attaque encore à Rome ; Ovide évoque le **taureau de Pérille**, instrument de torture du tyran Phalaris, pour montrer que la cruauté se retourne contre son auteur.
- **III, 12** : le **printemps** à Tomes. Ovide imagine les fêtes de Rome et guette les navires, dans l'espoir de nouvelles.

### Fin du livre (III, 13 et III, 14)
- **III, 13** : son **anniversaire** en exil, qu'il refuse de fêter.
- **III, 14** : au gardien de ses œuvres, à Rome. Ovide s'excuse de la qualité de ses vers : entouré de langues barbares, il sent son latin s'user.

### À retenir pour le bac
- Quatorze élégies : le livre à Rome (1), la souffrance (2-3), les amis (4-7), le pays de l'exil (8-12), le poète et ses œuvres (13-14).
- Le livre voyage à la place du poète ; l'épitaphe de III, 3 fait de l'exil une mort.
- III, 9 relie Tomes au mythe de Médée ; III, 10 et III, 12 décrivent l'hiver puis le printemps.
- III, 7 et III, 14 : seul le talent (**ingenium**) échappe au pouvoir de César.`,
    cartes: [
      { q: "Nombre d'élégies du livre III", r: "Quatorze (la quatrième est parfois divisée en 4a et 4b)." },
      { q: "Qui parle dans l'élégie III, 1 ?", r: "Le livre lui-même, envoyé à Rome par le poète exilé." },
      { q: "Accueil du livre à Rome (III, 1)", r: "Les bibliothèques publiques lui ferment leurs portes." },
      { q: "Sujet de l'élégie III, 3", r: "Lettre à sa femme, écrite malade ; Ovide imagine sa mort et compose son épitaphe." },
      { q: "Traduction de « ingenio perii Naso poeta meo »", r: "« Moi, le poète Nason, j'ai péri par mon propre talent. »" },
      { q: "Maxime de l'élégie III, 4", r: "« bene qui latuit bene uixit » : celui qui a su rester caché a bien vécu." },
      { q: "Pourquoi Ovide ne nomme-t-il pas ses amis ?", r: "Pour ne pas les compromettre auprès d'Auguste." },
      { q: "Destinataire de l'élégie III, 7", r: "Perilla, une jeune femme qui écrit des vers." },
      { q: "Idée de « Caesar in hoc potuit iuris habere nihil »", r: "César n'a aucun pouvoir sur le talent du poète." },
      { q: "Sujet de l'élégie III, 9", r: "L'origine du nom de Tomis, liée à Médée qui y aurait découpé son frère Absyrte." },
      { q: "Sujet de l'élégie III, 10", r: "L'hiver à Tomes : neige, vin gelé, Danube gelé franchi par les barbares." },
      { q: "Sujet de l'élégie III, 12", r: "Le printemps à Tomes et l'attente des navires porteurs de nouvelles." },
      { q: "Sujet de l'élégie III, 14", r: "Au gardien de ses œuvres : Ovide sent son latin s'user parmi les barbares." },
    ],
    quiz: [
      { q: "Dans l'élégie III, 1, qui prend la parole ?",
        choix: ["Auguste", "La femme d'Ovide", "Le livre du poète", "Un habitant de Tomes"],
        bonne: 2, niv: 1,
        expl: "« Missus in hanc uenio timide liber exulis urbem » : c'est le liber qui parle." },
      { q: "Que fait Ovide dans l'élégie III, 3 ?",
        choix: ["Il écrit sa propre épitaphe", "Il décrit l'hiver", "Il raconte la fondation de Tomis", "Il se moque d'un ennemi"],
        bonne: 0, niv: 1,
        expl: "Malade, il imagine sa mort et le texte de sa tombe." },
      { q: "Comment traduire « bene qui latuit bene uixit » ?",
        choix: ["Celui qui a bien vécu à Rome a aussi bien écrit ses poèmes", "Celui qui a su rester caché a bien vécu", "Celui qui se cache vit mal", "Il vaut mieux vivre à Rome"],
        bonne: 1, niv: 2,
        expl: "Latuit vient de lateo, être caché ; uixit de uiuo, vivre." },
      { q: "À qui s'adresse l'élégie III, 7 ?",
        choix: ["À Perilla, une jeune poétesse", "À Auguste", "À Tibère", "À Médée"],
        bonne: 0, niv: 1,
        expl: "Il l'encourage à continuer d'écrire." },
      { q: "Que veut dire Ovide par « Caesar in hoc potuit iuris habere nihil » ?",
        choix: ["César n'a pas le droit légal d'exiler un chevalier romain", "Le talent échappe au pouvoir de César", "Les lois de César ignorent les poètes", "César a perdu son pouvoir"],
        bonne: 1, niv: 3,
        expl: "Le talent est le seul bien qu'on ne peut pas confisquer." },
      { q: "Quel mythe explique le nom de Tomis dans l'élégie III, 9 ?",
        choix: ["Ulysse chez les Cyclopes", "La chute d'Icare", "Médée découpant son frère Absyrte", "Orphée aux Enfers"],
        bonne: 2, niv: 2,
        expl: "Le nom viendrait du verbe grec qui signifie couper." },
      { q: "Qui a fondé Tomis, selon l'élégie III, 9 ?",
        choix: ["Des soldats romains", "Des Gètes", "Des Grecs venus de Milet", "Des marchands d'Égypte"],
        bonne: 2, niv: 1,
        expl: "Ovide s'étonne de trouver des villes grecques en ce lieu." },
      { q: "Quel détail de l'hiver de Tomes apparaît dans l'élégie III, 10 ?",
        choix: ["Le vin gèle et garde la forme de la jarre", "Le soleil ne se lève plus pendant les longs mois d'hiver", "La mer se transforme en sable", "Les arbres fleurissent"],
        bonne: 0, niv: 2,
        expl: "Le froid fige tout ; l'Hister gelé laisse passer les barbares." },
      { q: "Quelle élégie évoque le taureau de Pérille ?",
        choix: ["III, 2, l'arrivée", "III, 13, l'anniversaire", "III, 7, à Perilla", "III, 11, contre un ennemi"],
        bonne: 3, niv: 3,
        expl: "Ovide rappelle que la cruauté se retourne contre son auteur." },
      { q: "Que redoute Ovide dans l'élégie III, 14 ?",
        choix: ["Que son latin s'use parmi les barbares", "Que ses amis de Rome l'oublient et cessent de lui écrire", "Que le printemps n'arrive pas", "Que sa femme quitte Rome"],
        bonne: 0, niv: 3,
        expl: "Il s'excuse auprès du gardien de ses œuvres." },
      { q: "Que fait Ovide dans l'élégie III, 12 ?",
        choix: ["Il prépare son retour à Rome sur un navire grec", "Il fête son anniversaire", "Il écrit à Auguste", "Il guette les navires porteurs de nouvelles"],
        bonne: 3, niv: 2,
        expl: "C'est le printemps : la mer s'ouvre de nouveau aux bateaux." },
    ] },
  { chapitre: "llca-lat-3",
    fiche: `## L'élégie de l'exil : forme et genre

Les Tristes sont des **élégies**. Avant Ovide, l'élégie romaine (Tibulle, Properce, et Ovide lui-même dans les Amours) chantait surtout l'amour malheureux. Dans l'exil, Ovide garde la forme mais change le sujet : la plainte d'amour devient la plainte d'un homme loin de sa patrie.

### Le distique élégiaque
- L'élégie latine s'écrit en **distiques élégiaques** : un **hexamètre** (vers de six mesures, celui de l'épopée) suivi d'un **pentamètre** (vers plus court, coupé en deux moitiés).
- Exemple : « **Missus in hanc uenio timide liber exulis urbem** » (hexamètre) est suivi d'un pentamètre, et ainsi de suite.
- Chaque distique forme souvent une unité de sens : une idée, une image, une plainte. On traduit donc souvent deux vers par deux vers.
- Ovide joue lui-même avec ce rythme « boiteux », un vers long puis un vers court : il dit que l'élégie avance en boitant, comme le poète blessé.

### Un genre de la plainte
- Le mot grec élégie est associé dès l'Antiquité au chant de deuil. Les Tristes retrouvent ce sens : Ovide pleure sa vie perdue.
- Le titre lui-même, **Tristia**, vient de l'adjectif **tristis** : « les choses tristes ».
- Thèmes récurrents : la douleur (**dolor**), les larmes (**lacrimae**), la mort souhaitée ou imaginée, la nostalgie de Rome (**Vrbs**) et de la maison (**domus**).
- Ovide transforme aussi des thèmes de l'élégie amoureuse : la porte fermée de l'amante devient la porte des bibliothèques fermées à son livre (III, 1) ; l'amant malheureux devient l'exilé loin de sa femme.

### Une poésie épistolaire
- Beaucoup d'élégies sont des **lettres** en vers : à sa femme (III, 3), à des amis (III, 4 à III, 6), à Perilla (III, 7), au gardien de ses œuvres (III, 14).
- Ovide ne nomme presque jamais ses destinataires dans les Tristes, pour ne pas leur nuire. Dans les Pontiques, écrites plus tard, il donne leurs noms.
- La lettre crée une présence : le poème parcourt la distance que le poète ne peut pas franchir.

### Un destinataire caché : Auguste
- Même quand il écrit à un ami, Ovide pense à **Caesar** (Auguste), qui peut le lire. Il le flatte, le compare à **Jupiter** et à sa foudre, et espère sa clémence (**clementia**).
- Il reconnaît une faute (**culpa**) mais refuse de parler de crime (**crimen**, **scelus**) : il parle d'**error**.

### Les procédés à repérer dans un commentaire
- **Comparaisons mythologiques** : Ovide se compare à des héros malheureux, Ulysse surtout, dont l'errance fut pourtant moins longue et moins lointaine.
- **Hyperboles** : le froid, les barbares, la souffrance sont exagérés pour toucher le lecteur romain.
- **Antithèses** : Rome contre Tomes, la paix contre la guerre, le passé heureux contre le présent misérable.
- **Apostrophes** et questions : il interpelle ses amis, son livre, les dieux.
- **Jeux sur son nom** : il se nomme **Naso** à la troisième personne, comme s'il se voyait de l'extérieur, déjà mort.

### À retenir pour le bac
- Élégie = distique élégiaque (hexamètre + pentamètre) ; à l'origine, chant de deuil et d'amour malheureux.
- Les Tristes : la plainte amoureuse devient plainte de l'exilé.
- Lettres en vers à des destinataires non nommés, avec Auguste en lecteur caché.
- Procédés : comparaisons mythologiques, hyperboles, antithèses Rome-Tomes, apostrophes.`,
    cartes: [
      { q: "Distique élégiaque", r: "Un hexamètre suivi d'un pentamètre ; c'est le vers de l'élégie latine." },
      { q: "Hexamètre", r: "Vers de six mesures, celui de l'épopée." },
      { q: "Pentamètre", r: "Vers plus court, coupé en deux moitiés, qui suit l'hexamètre dans le distique." },
      { q: "Sujet traditionnel de l'élégie romaine", r: "L'amour malheureux (Tibulle, Properce, les Amours d'Ovide)." },
      { q: "Origine du titre Tristia", r: "L'adjectif tristis : les Tristia sont « les choses tristes »." },
      { q: "Ce que devient l'élégie dans l'exil", r: "Une plainte de l'exilé loin de Rome, de sa femme et de ses amis." },
      { q: "Forme de nombreuses élégies des Tristes", r: "Des lettres en vers adressées à sa femme, à des amis, à Perilla." },
      { q: "Destinataires dans les Tristes", r: "Presque jamais nommés, pour ne pas leur nuire." },
      { q: "Destinataires dans les Pontiques", r: "Nommés, contrairement aux Tristes." },
      { q: "Lecteur caché des Tristes", r: "Auguste (Caesar), dont Ovide espère la clémence." },
      { q: "Culpa, crimen, error", r: "Ovide reconnaît une faute (culpa), une erreur (error), mais refuse le mot de crime (crimen)." },
      { q: "Héros auquel Ovide se compare souvent", r: "Ulysse, dont l'errance fut selon lui moins dure que la sienne." },
      { q: "Antithèse majeure des Tristes", r: "Rome, la Ville de la paix et de la culture, contre Tomes, terre froide et barbare." },
    ],
    quiz: [
      { q: "Quel vers suit l'hexamètre dans le distique élégiaque ?",
        choix: ["Un second hexamètre", "Le trimètre iambique", "L'alexandrin", "Le pentamètre"],
        bonne: 3, niv: 1,
        expl: "Hexamètre puis pentamètre forment le distique." },
      { q: "Quel était le sujet habituel de l'élégie romaine avant l'exil d'Ovide ?",
        choix: ["L'amour malheureux", "La guerre de Troie", "L'histoire de Rome", "La philosophie de la nature"],
        bonne: 0, niv: 1,
        expl: "Tibulle, Properce et les Amours d'Ovide chantent l'amour." },
      { q: "De quel mot latin vient le titre Tristia ?",
        choix: ["Du nom tristitia, la tristesse du deuil", "De tero, frotter", "Du nom de la Thrace", "De l'adjectif tristis"],
        bonne: 3, niv: 2,
        expl: "Tristia est un neutre pluriel : « les choses tristes »." },
      { q: "Pourquoi Ovide nomme-t-il rarement ses amis dans les Tristes ?",
        choix: ["Parce qu'il a oublié leurs noms depuis son départ", "Parce qu'ils sont morts", "Pour respecter le mètre", "Pour ne pas les compromettre"],
        bonne: 3, niv: 2,
        expl: "Être ami d'un relégué pouvait nuire auprès d'Auguste." },
      { q: "Quel lecteur Ovide a-t-il en tête même quand il écrit à un ami ?",
        choix: ["Homère", "Auguste", "Les Gètes", "Virgile"],
        bonne: 1, niv: 1,
        expl: "Il espère toucher l'empereur et obtenir sa clémence." },
      { q: "Quel mot Ovide refuse-t-il pour désigner sa faute ?",
        choix: ["Error", "Culpa", "Crimen", "Carmen"],
        bonne: 2, niv: 3,
        expl: "Il parle d'erreur et de faute, pas de crime." },
      { q: "Quel héros Ovide prend-il souvent comme point de comparaison ?",
        choix: ["Hercule", "Ulysse", "Achille", "Romulus"],
        bonne: 1, niv: 2,
        expl: "Ulysse a erré, mais moins loin et moins longtemps selon Ovide." },
      { q: "Quelle antithèse structure les Tristes ?",
        choix: ["Le jour contre la nuit", "La mer contre le désert", "Rome contre Tomes", "Grèce contre Égypte"],
        bonne: 2, niv: 2,
        expl: "La Ville de la paix s'oppose à la terre barbare et froide." },
      { q: "Que devient le motif de la porte fermée de l'élégie amoureuse dans III, 1 ?",
        choix: ["Les bibliothèques fermées au livre", "La porte de la maison qu'Ovide a dû quitter à Rome", "Le temple de Janus", "Les portes de Tomes"],
        bonne: 0, niv: 3,
        expl: "Ovide recycle un motif de l'élégie d'amour." },
      { q: "Qu'est-ce qui change entre les Tristes et les Pontiques ?",
        choix: ["Le mètre devient l'hexamètre seul", "Ovide est rentré à Rome", "Les destinataires sont nommés", "Le sujet devient l'amour"],
        bonne: 2, niv: 3,
        expl: "Les Pontiques restent des lettres en distiques." },
      { q: "Pourquoi Ovide se nomme-t-il Naso à la troisième personne ?",
        choix: ["Il cite un autre poète qui portait le même nom que lui", "Il se voit de l'extérieur, comme déjà mort", "Il imite Auguste", "Il veut cacher son nom"],
        bonne: 1, niv: 3,
        expl: "Le procédé est net dans l'épitaphe de III, 3." },
    ] },
  { chapitre: "llca-lat-4",
    fiche: `## Tomes et les barbares : la terre de l'exil

Pour un Romain cultivé, Tomes est le bout du monde. Ovide en fait un lieu presque mythique, glacé et dangereux, qui s'oppose en tout à Rome. Il faut savoir décrire ce paysage et comprendre pourquoi le poète l'exagère.

### Un lieu au bord du monde connu
- **Tomis** est une ancienne colonie grecque de **Milet**, sur la rive ouest du **Pont-Euxin** (Pontus Euxinus, la mer Noire), au sud des bouches de l'**Hister** (le Danube). C'est aujourd'hui **Constanța**, en Roumanie.
- Ovide appelle souvent la région **Scythia** (la Scythie), un nom qui, pour les Romains, évoque des steppes froides et des peuples nomades.
- Les peuples voisins sont les **Getae** (Gètes), les **Sauromatae** (Sarmates) et les **Bessi** (Besses). Ovide les décrit armés d'arcs et de flèches empoisonnées.

### Le climat : un hiver sans fin (III, 10)
- La neige tombe et ne fond pas ; le vent du nord, **Boreas**, souffle sans cesse.
- Le vin gèle dans les jarres : on le sert en morceaux, et il garde la forme du récipient.
- Le Danube et même la mer gèlent : on marche sur l'eau. Les barbares traversent le fleuve gelé à cheval et pillent la campagne, emmènent les habitants, brûlent les fermes.
- Ovide oppose ce pays à la douceur de l'Italie : pas de vignes, pas de fruits, pas d'arbres en fleurs.

### Une saison d'espoir : le printemps (III, 12)
- Le printemps revient, mais sans les fêtes et les jeux de Rome qu'Ovide imagine de loin.
- La mer s'ouvre de nouveau : le poète guette les marins, espère qu'ils parlent grec ou latin et apportent des nouvelles.

### La langue, frontière de la civilisation
- Pour un Romain, le **barbarus** est d'abord celui qui ne parle ni grec ni latin. À Tomes, Ovide devient lui-même l'étranger : « **Barbarus hic ego sum, quia non intellegor ulli** » (Tristes, V, 10, 37), « Ici, c'est moi le barbare, parce que personne ne me comprend ».
- Il dit entendre partout des langues barbares et craint d'oublier le latin (III, 14). Plus tard, dans les Pontiques, il affirme avoir appris le gète et même écrit un poème dans cette langue.
- Le renversement est fort : le poète le plus raffiné de Rome se sent devenir barbare.

### Exagération et vérité
- Les historiens notent que Tomes était une vraie cité grecque, avec ses magistrats et son commerce. Ovide noircit le tableau : il veut émouvoir Auguste et ses lecteurs romains pour obtenir un lieu d'exil plus doux.
- Dans un commentaire, on peut donc parler d'**hyperbole** et de **paysage moral** : le froid et la guerre traduisent la tristesse et la peur du poète.
- Le lieu de l'exil rejoint aussi la géographie mythique : la Colchide de Médée, les Argonautes, la mer inhospitalière (le nom grec du Pont-Euxin signifie au contraire « hospitalier », par antiphrase selon une explication ancienne).

### À retenir pour le bac
- Tomis : colonie de Milet, sur le Pont-Euxin, près de l'Hister ; peuples voisins : Gètes, Sarmates, Besses.
- III, 10 : hiver extrême, vin gelé, Danube gelé, raids des barbares ; III, 12 : printemps et attente des navires.
- **Barbarus** : celui qu'on ne comprend pas ; Ovide se sent devenir le barbare.
- Un tableau volontairement exagéré : hyperbole, paysage de l'âme, appel à la pitié d'Auguste.`,
    cartes: [
      { q: "Fondateurs de Tomis", r: "Des colons grecs venus de Milet." },
      { q: "Nom latin de la mer Noire", r: "Pontus Euxinus, le Pont-Euxin." },
      { q: "Nom latin du Danube chez Ovide", r: "Hister." },
      { q: "Peuples voisins de Tomes chez Ovide", r: "Les Gètes (Getae), les Sarmates (Sauromatae), les Besses (Bessi)." },
      { q: "Nom de région souvent employé par Ovide", r: "Scythia, la Scythie, qui évoque pour un Romain un pays froid et nomade." },
      { q: "Vent du nord dans les Tristes", r: "Boreas (Borée)." },
      { q: "Images de l'hiver en III, 10", r: "Neige qui ne fond pas, vin gelé qui garde la forme de la jarre, Danube gelé." },
      { q: "Danger de l'hiver à Tomes", r: "Les barbares traversent le fleuve gelé à cheval et pillent la campagne." },
      { q: "Sens de barbarus", r: "Celui qui ne parle ni grec ni latin, l'étranger qu'on ne comprend pas." },
      { q: "Traduction de « Barbarus hic ego sum, quia non intellegor ulli »", r: "« Ici, c'est moi le barbare, parce que personne ne me comprend » (Tristes, V, 10, 37)." },
      { q: "Langue apprise par Ovide selon les Pontiques", r: "Le gète, dans lequel il dit avoir écrit un poème." },
      { q: "Pourquoi Ovide noircit-il Tomes ?", r: "Pour émouvoir Auguste et ses lecteurs, et obtenir un exil plus doux." },
      { q: "Paysage moral", r: "Un paysage qui traduit les sentiments : ici, le froid dit la tristesse et la peur du poète." },
    ],
    quiz: [
      { q: "Qui a fondé la cité de Tomis ?",
        choix: ["Des légionnaires romains", "Des colons grecs de Milet", "Des Gètes nomades", "Des marins phéniciens"],
        bonne: 1, niv: 1,
        expl: "Ovide le rappelle au début de III, 9." },
      { q: "Quel est le nom latin du Danube dans les Tristes ?",
        choix: ["Hister", "Tiberis", "Rhenus", "Padus"],
        bonne: 0, niv: 1,
        expl: "Le Tibre, le Rhin et le Pô ont d'autres noms." },
      { q: "Quels peuples Ovide place-t-il autour de Tomes ?",
        choix: ["Gaulois et Germains", "Gètes, Sarmates et Besses", "Parthes et Arméniens", "Numides et Maures"],
        bonne: 1, niv: 1,
        expl: "Il les décrit armés d'arcs et de flèches." },
      { q: "Quel détail montre la violence du froid en III, 10 ?",
        choix: ["Les loups entrent dans les maisons pour chercher de la nourriture", "La mer devient chaude", "Le vin gèle et garde la forme de la jarre", "Le soleil disparaît six mois"],
        bonne: 2, niv: 2,
        expl: "On sert le vin en morceaux, et non à boire." },
      { q: "Pourquoi l'hiver est-il aussi la saison du danger ?",
        choix: ["Les navires romains attaquent", "Les barbares franchissent le Danube gelé", "Les loups descendent des montagnes", "La ville est inondée"],
        bonne: 1, niv: 2,
        expl: "Le fleuve ne protège plus la ville quand il gèle." },
      { q: "Que signifie d'abord barbarus pour un Romain ?",
        choix: ["Celui qui porte la barbe longue, comme les philosophes grecs", "Celui qui ne parle ni grec ni latin", "Celui qui vit dans une ville", "Celui qui a commis un crime"],
        bonne: 1, niv: 2,
        expl: "Le mot vient du grec et vise la langue incompréhensible." },
      { q: "Que dit Ovide dans « Barbarus hic ego sum, quia non intellegor ulli » ?",
        choix: ["Que les Gètes sont des barbares cruels qu'il faut combattre", "Qu'il comprend la langue des barbares", "Qu'il a combattu les barbares", "Qu'il est devenu le barbare, car on ne le comprend pas"],
        bonne: 3, niv: 3,
        expl: "Le renversement est saisissant : le poète romain devient l'étranger." },
      { q: "Que fait Ovide pendant le printemps de III, 12 ?",
        choix: ["Il prépare sa fuite", "Il part en guerre", "Il interroge en pensée les marins sur Rome", "Il visite la Grèce"],
        bonne: 2, niv: 2,
        expl: "Il espère des marins qui parlent grec ou latin." },
      { q: "Pourquoi peut-on dire que la description de Tomes est exagérée ?",
        choix: ["Le climat y était doux, avec une mer chaude en hiver", "Tomes était une vraie cité grecque organisée", "Ovide a vécu à Athènes", "Tomes se trouvait en Italie"],
        bonne: 1, niv: 3,
        expl: "Ovide noircit le tableau pour émouvoir Auguste." },
      { q: "Dans un commentaire, comment nommer un paysage qui traduit les sentiments du poète ?",
        choix: ["Un paysage réaliste", "Une ekphrasis", "Un paysage moral", "Une périphrase"],
        bonne: 2, niv: 3,
        expl: "Le froid et la guerre disent la tristesse et la peur." },
      { q: "Quel nom Ovide donne-t-il souvent à la région de son exil ?",
        choix: ["Scythia", "Gallia", "Hispania", "Africa"],
        bonne: 0, niv: 1,
        expl: "Le mot évoque pour un Romain des steppes froides." },
    ] },
  { chapitre: "llca-lat-5",
    fiche: `## Écrire pour survivre : le poète et son œuvre

Le livre III ne parle pas seulement de l'exil : il parle de la poésie. Ovide se demande ce que vaut l'écriture quand elle a causé votre perte, et découvre qu'elle reste le seul lien avec Rome et la seule chose qu'on ne peut pas lui prendre.

### La poésie, cause de la perte
- Le **carmen** (l'Art d'aimer) est l'une des deux causes de la relégation. Ovide le dit dans son épitaphe : « **ingenio perii Naso poeta meo** » (III, 3, 74), « moi, le poète Nason, j'ai péri par mon propre talent ».
- L'**ingenium** désigne le talent naturel, le génie créateur. Il l'a rendu célèbre, puis l'a perdu.
- Pourtant, il continue d'écrire : c'est ce qu'il sait faire, et c'est sa seule voix vers Rome.

### Le livre, double du poète (III, 1 et III, 14)
- En III, 1, le **liber** parle et entre à Rome à la place de son auteur. Il est « timide », mal habillé, comme un exilé : le livre porte les marques de la souffrance.
- Les bibliothèques publiques refusent de l'accueillir : l'œuvre subit le même rejet que l'homme.
- En III, 14, Ovide confie ses livres au gardien de ses œuvres. Il les traite comme ses **enfants** restés à Rome et lui demande de les protéger.
- Il évoque les **Métamorphoses**, restées inachevées quand il est parti : le poème a été sauvé de justesse.

### La poésie, seul bien inviolable (III, 7)
- À Perilla, Ovide dit que tout peut être enlevé, la richesse, la beauté, la patrie, sauf le talent : « **Caesar in hoc potuit iuris habere nihil** » (III, 7, 48).
- Le poète garde aussi l'espoir d'une gloire durable : tant qu'on lira ses vers, il vivra. C'était déjà l'idée de la fin des Métamorphoses, où il annonce qu'il vivra par sa renommée.

### La poésie, consolation
- La **Musa** (la Muse) accompagne le poète dans l'exil : écrire l'occupe, le distrait de ses souffrances, lui donne une raison de vivre.
- Écrire, c'est aussi garder sa langue : à Tomes, le latin est menacé ; chaque poème est une façon de rester Romain.

### Un style qui se dit affaibli
- Ovide s'excuse sans cesse : ses vers seraient moins bons, son latin s'userait, le malheur aurait brisé son talent (III, 14).
- Il ne faut pas le croire trop vite : c'est un procédé de **modestie**, et les Tristes sont très travaillés. L'humilité fait partie de la stratégie pour obtenir la pitié.

### Pour l'essai : l'écriture face au destin
- Ovide ne peut pas changer son destin, mais il choisit de le raconter : il devient le poète de l'exil.
- Lien possible avec **La Ferme africaine** : Karen Blixen écrit, des années après, pour garder vivante une ferme perdue.
- On peut aussi citer d'autres écrivains exilés lus en cours ou par soi-même (Victor Hugo à Guernesey, par exemple).

### À retenir pour le bac
- L'**ingenium** a perdu Ovide (« ingenio perii ») mais reste son seul bien inviolable (III, 7).
- Le **liber** voyage et souffre à la place du poète (III, 1) ; les livres sont ses enfants (III, 14).
- Écrire console, garde la langue latine et donne l'espoir de la gloire.
- La modestie d'Ovide sur son style est un procédé.`,
    cartes: [
      { q: "Sens d'ingenium", r: "Le talent naturel, le génie créateur d'une personne." },
      { q: "Ce que dit « ingenio perii »", r: "« J'ai péri par mon talent » : la poésie a causé la perte d'Ovide." },
      { q: "Rôle du livre en III, 1", r: "Il entre à Rome à la place de son auteur et subit le même rejet." },
      { q: "Aspect du livre en III, 1", r: "Timide et pauvrement vêtu, comme un exilé." },
      { q: "Comment Ovide présente ses livres en III, 14", r: "Comme ses enfants restés à Rome, à protéger." },
      { q: "État des Métamorphoses au départ d'Ovide", r: "Inachevées : le poème a été sauvé de justesse." },
      { q: "Seul bien qu'on ne peut pas enlever, selon III, 7", r: "Le talent, sur lequel César n'a aucun droit." },
      { q: "Espoir que garde le poète", r: "Vivre par la gloire de ses vers tant qu'on les lira." },
      { q: "Musa", r: "La Muse, qui accompagne et console le poète en exil." },
      { q: "Pourquoi écrire en latin à Tomes ?", r: "Pour garder sa langue et rester Romain parmi les barbares." },
      { q: "Procédé de modestie", r: "Ovide dit ses vers affaiblis pour attirer la pitié, alors qu'ils sont très travaillés." },
      { q: "Idée reprise de la fin des Métamorphoses", r: "Le poète vivra par sa renommée, tant qu'on lira ses vers." },
      { q: "Lien avec La Ferme africaine", r: "Blixen aussi écrit après coup pour garder vivant ce qu'elle a perdu." },
    ],
    quiz: [
      { q: "Que signifie le mot ingenium ?",
        choix: ["L'ingénieur", "La naissance noble", "Le talent naturel", "La ruse"],
        bonne: 2, niv: 1,
        expl: "C'est le génie créateur du poète." },
      { q: "Que veut dire « ingenio perii Naso poeta meo » ?",
        choix: ["Moi, le poète Nason, j'ai péri par mon talent", "Nason a écrit un poème sur la mort", "Le talent de Nason ne mourra pas", "Le poète Nason a perdu son livre"],
        bonne: 0, niv: 2,
        expl: "Perii est le parfait de pereo, périr." },
      { q: "Pourquoi le livre de III, 1 est-il comparé à un exilé ?",
        choix: ["Il est écrit en langue gète", "Il a été brûlé", "Il revient de Grèce", "Il est rejeté de Rome comme son auteur"],
        bonne: 3, niv: 2,
        expl: "Les bibliothèques lui ferment leurs portes." },
      { q: "Comment Ovide désigne-t-il ses livres en III, 14 ?",
        choix: ["Comme ses ennemis", "Comme ses enfants", "Comme ses maîtres", "Comme des esclaves"],
        bonne: 1, niv: 1,
        expl: "Il les confie au gardien de ses œuvres." },
      { q: "Selon III, 7, quel bien échappe au pouvoir de César ?",
        choix: ["La fortune", "Les amis", "La patrie", "Le talent"],
        bonne: 3, niv: 1,
        expl: "« Caesar in hoc potuit iuris habere nihil »." },
      { q: "Quelle œuvre Ovide dit-il avoir laissée inachevée en partant ?",
        choix: ["Les Métamorphoses", "Les Amours", "Les Héroïdes", "Les Pontiques"],
        bonne: 0, niv: 2,
        expl: "Il évoque ce poème sauvé de justesse." },
      { q: "Quel rôle la Muse joue-t-elle dans l'exil ?",
        choix: ["Elle l'accuse devant Auguste", "Elle console et occupe le poète", "Elle l'empêche d'écrire", "Elle le ramène à Rome"],
        bonne: 1, niv: 2,
        expl: "Écrire le distrait de ses souffrances." },
      { q: "Pourquoi ne faut-il pas croire Ovide quand il dit ses vers affaiblis ?",
        choix: ["Il ne savait plus le latin après quelques mois passés chez les Gètes", "C'est un procédé de modestie pour attirer la pitié", "Ses amis ont réécrit les poèmes", "Il traduisait des poèmes gètes"],
        bonne: 1, niv: 3,
        expl: "Les Tristes sont au contraire très travaillés." },
      { q: "Quelle idée de la fin des Métamorphoses revient dans les Tristes ?",
        choix: ["Le poète vivra par sa renommée", "Le poète doit se taire", "Les dieux punissent les poètes", "Rome sera détruite"],
        bonne: 0, niv: 3,
        expl: "Tant qu'on lira ses vers, Ovide vivra." },
      { q: "Quel rapport Ovide et Blixen ont-ils avec l'écriture ?",
        choix: ["Elle les fait rentrer chez eux", "Elle garde vivant ce qu'ils ont perdu", "Elle leur rapporte de l'argent", "Elle leur sert à accuser leurs ennemis"],
        bonne: 1, niv: 3,
        expl: "Blixen écrit sa ferme des années après l'avoir quittée." },
      { q: "Que garde Ovide en écrivant en latin à Tomes ?",
        choix: ["Ses biens", "Son poste de magistrat", "Sa langue et son identité romaine", "L'amitié des Gètes"],
        bonne: 2, niv: 2,
        expl: "Le latin est menacé parmi les langues barbares." },
    ] },
  { chapitre: "llca-lat-6",
    fiche: `## Karen Blixen, La Ferme africaine

L'œuvre moderne associée aux Tristes est **La Ferme africaine** de Karen Blixen (traduction du danois par Alain Gnaedig, Folio, 2006). Comme Ovide, la narratrice a perdu un lieu qu'elle aimait et l'écrit de loin, après coup.

### L'autrice
- **Karen Blixen** naît en **1885** au Danemark et meurt en **1962**. Elle signe souvent ses livres en anglais du pseudonyme **Isak Dinesen**.
- En 1914, elle épouse un baron suédois, Bror Blixen, et s'installe avec lui en **Afrique de l'Est britannique**, l'actuel **Kenya**, alors colonie britannique.
- Le couple achète une **plantation de café** au pied des collines du **Ngong**, près de **Nairobi**. Ils divorcent en 1925 ; elle dirige seule la ferme.
- La ferme ne réussit pas : l'altitude convient mal au café, les récoltes sont faibles, puis les prix s'effondrent avec la crise mondiale. En **1931**, ruinée, elle doit vendre et rentre au **Danemark**, malade et seule.

### Le livre
- Publié en **1937**, en anglais (Out of Africa) et en danois. Il est écrit au Danemark, plusieurs années après le départ.
- Dès la première phrase, la narratrice dit qu'elle avait une ferme en Afrique, au pied du Ngong : le temps du récit est le passé, tout est déjà perdu quand elle écrit.
- Ce n'est pas un journal ni une autobiographie complète : le livre est fait de **tableaux** et de **récits** (des personnes, des animaux, des paysages, des événements), puis raconte la fin de la ferme et le départ.

### Les personnes et les lieux
- Le **paysage** : les hauts plateaux, l'air léger, les collines du Ngong, les grandes plaines, les animaux sauvages.
- Les gens de la ferme : les **Kikuyu**, qui vivent et cultivent sur les terres de la ferme ; **Kamante**, un jeune garçon kikuyu qu'elle soigne et qui devient son cuisinier ; **Farah**, son serviteur somali, fidèle jusqu'au bout ; les **Masaï**, peuple d'éleveurs voisins.
- **Denys Finch Hatton**, un Anglais, ami très proche, qui l'emmène survoler l'Afrique dans son petit avion. Il meurt dans un accident d'avion en **1931** et il est enterré dans les collines du Ngong.
- Lulu, une petite antilope recueillie à la ferme, qui retourne vivre dans la forêt.

### Les grands thèmes
- **L'amour d'un lieu** : la narratrice dit avoir trouvé en Afrique l'endroit où elle devait être.
- **La perte et la fin** : en peu de temps, elle perd la ferme, Denys, et le monde qu'elle avait construit. Elle cherche jusqu'au bout une terre où les Kikuyu de la ferme pourront rester ensemble.
- **Le destin** : la narratrice accepte ce qui arrive avec une grande dignité ; elle observe des signes et cherche un sens aux événements.
- **Le regard colonial** : le livre parle des Africains avec respect et curiosité, mais depuis la position d'une propriétaire européenne. Un lecteur d'aujourd'hui doit le remarquer et le nuancer.
- **La mémoire et l'écriture** : écrire, c'est garder la ferme vivante.

### Une œuvre devenue célèbre
- Le film **Out of Africa** de **Sydney Pollack** (1985) en a fait une histoire d'amour très connue ; il s'éloigne du livre, plus centré sur la ferme et ses habitants. Il peut servir de document pour le **portfolio**.

### À retenir pour le bac
- Karen Blixen (1885-1962), ferme de café au pied du Ngong, près de Nairobi, de 1914 à 1931.
- Livre publié en 1937, écrit au Danemark après le départ : un récit du souvenir.
- Personnes clés : Kamante, Farah, les Kikuyu, les Masaï, Denys Finch Hatton (mort en 1931).
- Thèmes : amour d'un lieu, perte, destin accepté, regard colonial, écriture qui garde la mémoire.`,
    cartes: [
      { q: "Dates de Karen Blixen", r: "Née en 1885 au Danemark, morte en 1962." },
      { q: "Pseudonyme de Karen Blixen", r: "Isak Dinesen, pour ses livres en anglais." },
      { q: "Où se trouve la ferme ?", r: "Au pied des collines du Ngong, près de Nairobi, au Kenya." },
      { q: "Que cultive la ferme ?", r: "Du café." },
      { q: "Durée de la vie à la ferme", r: "De 1914 à 1931." },
      { q: "Pourquoi la ferme échoue-t-elle ?", r: "Altitude peu favorable au café, mauvaises récoltes, puis effondrement des prix." },
      { q: "Retour de Blixen", r: "En 1931, ruinée, malade et seule, elle rentre au Danemark." },
      { q: "Publication de La Ferme africaine", r: "En 1937, en anglais (Out of Africa) et en danois." },
      { q: "Ce que dit la première phrase du livre", r: "Que la narratrice avait une ferme en Afrique, au pied du Ngong : tout est raconté au passé." },
      { q: "Kamante", r: "Jeune Kikuyu soigné par la narratrice, devenu son cuisinier." },
      { q: "Farah", r: "Serviteur somali de la narratrice, fidèle jusqu'à son départ." },
      { q: "Denys Finch Hatton", r: "Anglais, ami très proche ; mort en avion en 1931, enterré dans les collines du Ngong." },
      { q: "Film tiré du livre", r: "Out of Africa, de Sydney Pollack (1985)." },
    ],
    quiz: [
      { q: "Dans quel pays actuel se trouve la ferme de Karen Blixen ?",
        choix: ["Au Kenya", "En Afrique du Sud", "Au Maroc", "À Madagascar"],
        bonne: 0, niv: 1,
        expl: "Elle est près de Nairobi, au pied du Ngong." },
      { q: "Que cultive la ferme de la narratrice ?",
        choix: ["Du coton", "Du thé", "De la canne à sucre", "Du café"],
        bonne: 3, niv: 1,
        expl: "C'est une plantation de café." },
      { q: "En quelle année Karen Blixen quitte-t-elle l'Afrique ?",
        choix: ["En 1914", "En 1931", "En 1925", "En 1929"],
        bonne: 1, niv: 2,
        expl: "1914 est l'arrivée, 1925 le divorce ; le livre paraît en 1937." },
      { q: "Quel pseudonyme Karen Blixen utilise-t-elle pour ses livres en anglais ?",
        choix: ["Isak Dinesen", "Denys Finch Hatton", "Alain Gnaedig", "Bror Blixen"],
        bonne: 0, niv: 2,
        expl: "Alain Gnaedig est le traducteur de l'édition au programme." },
      { q: "Qui est Kamante ?",
        choix: ["Le mari de la narratrice", "Un chef masaï", "Un pilote anglais", "Un jeune Kikuyu devenu cuisinier"],
        bonne: 3, niv: 1,
        expl: "La narratrice l'a soigné quand il était enfant." },
      { q: "Qui est Farah ?",
        choix: ["Le chef d'un village kikuyu voisin de la ferme", "Le serviteur somali de la narratrice", "Un colon danois", "Le médecin de Nairobi"],
        bonne: 1, niv: 2,
        expl: "Il reste à ses côtés jusqu'au départ." },
      { q: "Que devient Denys Finch Hatton ?",
        choix: ["Il meurt dans un accident d'avion en 1931", "Il épouse la narratrice et part vivre avec elle au Danemark", "Il achète la ferme", "Il rentre en Angleterre"],
        bonne: 0, niv: 2,
        expl: "Il est enterré dans les collines du Ngong." },
      { q: "Pourquoi le temps du récit est-il le passé ?",
        choix: ["Le livre est écrit après la perte de la ferme", "La narratrice raconte un rêve qu'elle a fait au Danemark", "C'est une traduction", "Elle raconte la vie de sa mère"],
        bonne: 0, niv: 3,
        expl: "Dès la première phrase, la ferme appartient au passé." },
      { q: "Quelle raison explique l'échec de la ferme ?",
        choix: ["Une guerre détruit les champs", "L'altitude convient mal au café", "Les Kikuyu refusent de travailler", "Le gouvernement interdit le café"],
        bonne: 1, niv: 3,
        expl: "S'y ajoute l'effondrement des prix lors de la crise mondiale." },
      { q: "Que cherche la narratrice pour les Kikuyu avant de partir ?",
        choix: ["Un emploi à Nairobi", "Un bateau pour l'Europe", "Une terre où ils pourront rester ensemble", "Une école en Angleterre"],
        bonne: 2, niv: 3,
        expl: "Elle se soucie du sort des gens de la ferme." },
      { q: "Quel regard un lecteur d'aujourd'hui doit-il nuancer dans le livre ?",
        choix: ["Le regard d'un enfant kikuyu qui découvre les Européens de la ferme", "Le regard d'un soldat romain", "Le regard d'un touriste moderne", "Le regard colonial d'une propriétaire européenne"],
        bonne: 3, niv: 2,
        expl: "Respect et curiosité n'effacent pas la position coloniale." },
    ] },
  { chapitre: "llca-lat-7",
    fiche: `## Ovide et Blixen : confronter les deux œuvres

L'essai de l'épreuve demande de **confronter** l'œuvre antique et l'œuvre moderne. Il ne suffit pas de parler de l'une puis de l'autre : il faut montrer, dans chaque partie, ce qui les rapproche et ce qui les sépare. Voici les grands axes.

### Deux départs forcés
- **Ovide** est chassé par une décision politique, la **relegatio** d'Auguste, en 8 ap. J.-C. Il part de Rome, centre du monde, vers ses marges.
- **Karen Blixen** part en 1931 parce que la ferme est ruinée et vendue. Personne ne la condamne, mais elle n'a pas le choix.
- Renversement : pour Ovide, l'exil est la terre lointaine ; pour Blixen, la terre aimée est l'Afrique, et le retour en Europe ressemble à un exil.
- Point commun : un séjour que l'un et l'autre n'imaginaient pas définitif devient irréversible. Ovide meurt à Tomes ; Blixen ne retourne pas vivre en Afrique.

### Le destin : une force qui dépasse l'individu
- Chez Ovide, le destin a un visage : **Caesar**, comparé à **Jupiter** et à sa foudre. Le poète parle aussi de **fatum**, de **fortuna**, de dieux hostiles.
- Chez Blixen, le destin est fait de causes diverses : le climat, la crise économique, la mort de Denys. La narratrice y cherche un sens et l'accepte avec dignité.
- Ovide se plaint et supplie ; Blixen raconte avec calme. Deux attitudes face au même malheur : la **plainte** élégiaque et l'**acceptation**.

### Le regard sur l'autre
- Ovide décrit les **Gètes** et les **Sarmates** comme des **barbari** dangereux et grossiers ; il finit par se sentir lui-même barbare, car personne ne le comprend.
- Blixen décrit les Kikuyu, les Somalis, les Masaï avec respect et curiosité ; elle apprend d'eux. Mais elle reste une propriétaire coloniale, et ce regard doit être nuancé.
- Dans les deux cas, la rencontre avec l'autre fait réfléchir à sa propre identité.

### Le paysage et le temps
- Tomes : hiver glacé, fleuve gelé, terre sans arbres, guerre (III, 10). Le paysage dit la souffrance.
- Ngong : air léger, collines, plaines, lumière. Le paysage dit le bonheur perdu.
- Les deux œuvres font sentir le passage des saisons (l'hiver puis le printemps chez Ovide, les saisons des pluies et la sécheresse chez Blixen).

### La mort et la mémoire
- Ovide imagine sa mort et compose son **épitaphe** (III, 3) : l'exil est déjà une mort.
- Blixen raconte la mort de Denys et sa tombe dans les collines : la perte d'un être aimé accompagne la perte du lieu.
- Écrire, pour l'un comme pour l'autre, c'est sauver de l'oubli : le livre d'Ovide part pour Rome (III, 1) ; Blixen fait revivre la ferme dans son récit.

### La langue
- Ovide craint de perdre son latin parmi les langues barbares (III, 14).
- Blixen écrit d'abord ce livre en anglais, une langue qui n'est pas sa langue maternelle, puis en danois. Le passage d'une langue à l'autre fait aussi partie de son histoire.

### Des sujets d'essai possibles
- « Peut-on être heureux loin de chez soi ? »
- « L'écriture permet-elle de surmonter la perte ? »
- « Le destin est-il toujours subi ? »
- « Quel regard l'exilé porte-t-il sur les autres ? »

### À retenir pour le bac
- Confronter dans chaque partie : départ forcé (politique pour Ovide, économique pour Blixen), irréversible pour les deux.
- Destin : Caesar et les dieux chez Ovide, enchaînement de malheurs chez Blixen ; plainte contre acceptation.
- Regard sur l'autre : barbari rejetés et peuples d'Afrique admirés, avec un regard colonial à nuancer.
- Mort, mémoire, langue : l'écriture sauve de l'oubli ce qui a été perdu.`,
    cartes: [
      { q: "Confronter deux œuvres", r: "Montrer, dans chaque partie de l'essai, ce qui les rapproche et ce qui les sépare." },
      { q: "Cause du départ d'Ovide", r: "Une décision politique : la relégation par Auguste en 8 ap. J.-C." },
      { q: "Cause du départ de Blixen", r: "La ruine de la ferme, vendue en 1931." },
      { q: "Renversement entre les deux œuvres", r: "Pour Ovide, l'exil est la terre lointaine ; pour Blixen, la terre aimée est l'Afrique et le retour ressemble à un exil." },
      { q: "Point commun des deux départs", r: "Ils deviennent irréversibles : Ovide meurt à Tomes, Blixen ne revient pas vivre en Afrique." },
      { q: "Visage du destin chez Ovide", r: "Caesar (Auguste), comparé à Jupiter et à sa foudre." },
      { q: "Visage du destin chez Blixen", r: "Le climat, la crise économique, la mort de Denys." },
      { q: "Attitudes face au malheur", r: "Plainte et supplication chez Ovide, acceptation digne chez Blixen." },
      { q: "Regard d'Ovide sur les Gètes", r: "Des barbares dangereux ; il finit par se sentir lui-même barbare." },
      { q: "Regard de Blixen sur les peuples d'Afrique", r: "Respect et curiosité, depuis une position coloniale à nuancer." },
      { q: "Mort et mémoire chez les deux auteurs", r: "Épitaphe d'Ovide (III, 3) ; mort et tombe de Denys chez Blixen." },
      { q: "Rôle commun de l'écriture", r: "Sauver de l'oubli ce qui a été perdu." },
      { q: "La langue chez Blixen", r: "Elle écrit le livre en anglais, qui n'est pas sa langue maternelle, puis en danois." },
    ],
    quiz: [
      { q: "Que demande l'essai de l'épreuve à propos des deux œuvres ?",
        choix: ["De résumer l'une puis l'autre", "De les confronter dans chaque partie", "De choisir la meilleure", "De traduire l'œuvre moderne"],
        bonne: 1, niv: 1,
        expl: "Une partie sur Ovide puis une partie sur Blixen ne suffit pas." },
      { q: "Quelle est la cause du départ d'Ovide ?",
        choix: ["La ruine de sa ferme", "Une guerre civile", "Son propre choix", "Une décision politique d'Auguste"],
        bonne: 3, niv: 1,
        expl: "C'est la relegatio de 8 ap. J.-C." },
      { q: "Quelle est la cause du départ de Karen Blixen ?",
        choix: ["Une condamnation par la justice", "Une révolte des Kikuyu", "La ruine et la vente de la ferme", "Un ordre du roi du Danemark"],
        bonne: 2, niv: 1,
        expl: "Personne ne la condamne, mais elle n'a pas le choix." },
      { q: "Quel renversement oppose les deux œuvres ?",
        choix: ["Pour Ovide, Tomes devient peu à peu une terre aimée et choisie", "Blixen rentre en Afrique à la fin", "Pour Blixen, la terre aimée est la terre lointaine", "Ovide choisit de partir"],
        bonne: 2, niv: 2,
        expl: "Le retour au Danemark ressemble à un exil." },
      { q: "Quel point commun ont les deux départs ?",
        choix: ["Ils durent un an", "Ils sont voulus", "Ils sont joyeux", "Ils deviennent irréversibles"],
        bonne: 3, niv: 2,
        expl: "Ovide meurt à Tomes ; Blixen ne revient pas vivre en Afrique." },
      { q: "Quel visage le destin prend-il chez Ovide ?",
        choix: ["Celui de la crise économique", "Celui de Caesar, comparé à Jupiter", "Celui d'une maladie", "Celui d'un oracle de Delphes"],
        bonne: 1, niv: 2,
        expl: "La colère de l'empereur est comparée à la foudre." },
      { q: "Quelle attitude face au malheur distingue Blixen d'Ovide ?",
        choix: ["Elle supplie l'empereur", "Elle raconte avec calme et acceptation", "Elle maudit les dieux", "Elle refuse d'en parler"],
        bonne: 1, niv: 2,
        expl: "Ovide, lui, se plaint et supplie." },
      { q: "Quel élément rapproche l'épitaphe d'Ovide et la tombe de Denys ?",
        choix: ["Le latin classique dans lequel elles sont rédigées", "Elles se trouvent à Rome", "La mort accompagne la perte du lieu", "Le film de 1985 les a inventées"],
        bonne: 2, niv: 3,
        expl: "L'exil et la perte sont vécus comme des deuils." },
      { q: "Comment Ovide finit-il par se voir parmi les Gètes ?",
        choix: ["Comme leur roi", "Comme un dieu", "Comme un marchand grec", "Comme le barbare qu'on ne comprend pas"],
        bonne: 3, niv: 3,
        expl: "Le regard sur l'autre le renvoie à lui-même." },
      { q: "Que faut-il nuancer dans le regard de Blixen sur les peuples d'Afrique ?",
        choix: ["Son mépris affiché pour les Kikuyu et les Somalis de la ferme", "Sa position de propriétaire coloniale", "Une ignorance de leurs langues", "Son refus de les rencontrer"],
        bonne: 1, niv: 3,
        expl: "Elle les décrit avec respect, mais d'une place de colon." },
      { q: "Quel sujet d'essai convient à la confrontation des deux œuvres ?",
        choix: ["Auguste était-il un bon empereur pour les poètes de son temps ?", "Faut-il cultiver le café ?", "Le latin est-il difficile ?", "L'écriture permet-elle de surmonter la perte ?"],
        bonne: 3, niv: 2,
        expl: "Il touche le destin, la perte et la mémoire." },
    ] },
  { chapitre: "llca-lat-8",
    fiche: `## Objet d'étude : L'homme, le monde, le destin

C'est l'objet d'étude des œuvres au programme : les Tristes et La Ferme africaine y sont rattachés. Le programme de terminale le divise en quatre sous-ensembles ; on n'est pas obligé de tous les étudier, mais il faut savoir les reconnaître et citer quelques textes.

### Le vocabulaire du destin
- **fatum** : le destin, littéralement « ce qui a été dit » (du verbe **fari**, parler) ; la parole divine fixe ce qui doit arriver. Au pluriel, **fata**.
- **fortuna** : le sort, la chance, qui peut tourner ; on la représente avec une roue ou un gouvernail.
- **Parcae** (les Parques) : les trois fileuses qui tissent la vie des hommes et coupent le fil.
- **numen** : la puissance divine, la volonté d'un dieu.
- **sors** : le sort tiré, la part qui revient à chacun.

### 1. Genèse et cosmogonies
- Une **cosmogonie** raconte la naissance du monde. Les Grecs et les Romains en ont plusieurs.
- **Hésiode**, Théogonie : au commencement, Chaos, puis Gaïa (la Terre), les Titans, enfin Zeus.
- **Ovide**, Métamorphoses, livre I : un dieu sépare les éléments mêlés dans le **Chaos** et organise le monde, puis l'homme est créé, debout pour regarder le ciel.
- **Lucrèce**, De rerum natura : pour l'épicurien, le monde naît de la rencontre des **atomes**, sans intervention des dieux.
- On peut comparer avec la Genèse biblique, où un Dieu unique crée le monde par sa parole.

### 2. Les voix du destin : oracles, prophéties et rêves
- Les Anciens cherchent à connaître l'avenir : **oracle** de Delphes (la Pythie parle au nom d'Apollon), la **Sibylle** de Cumes (Virgile, Énéide, VI).
- À Rome, la **divination** est officielle : les **augures** observent le vol des oiseaux, les **haruspices** examinent les entrailles des victimes.
- Les **songes** (somnia) annoncent l'avenir : apparition d'Hector à Énée la nuit de la chute de Troie (Énéide, II), Songe de Scipion chez Cicéron.
- Les prophéties sont souvent obscures : on les comprend trop tard, comme Œdipe.

### 3. Mythe et théâtre : héros et familles maudites
- La tragédie met en scène des familles frappées d'une malédiction transmise : les **Atrides** (Atrée, Thyeste, Agamemnon, Oreste), les **Labdacides** (Laïos, Œdipe, Antigone).
- **Sénèque** écrit des tragédies latines (Médée, Phèdre, Thyeste, Œdipe) où la passion (**furor**) pousse le héros au crime (**scelus**).
- Médée, déjà présente dans le programme précédent, est évoquée par Ovide à Tomes (III, 9) : la légende de son frère Absyrte explique le nom de la ville.

### 4. Le « grand théâtre du monde » : vérité et illusion
- Image du **theatrum mundi** : la vie est une pièce, chacun y joue un rôle donné par le destin ou par Dieu.
- Sénèque compare la vie à une pièce de théâtre : ce qui compte n'est pas sa longueur, mais la qualité du jeu (Lettres à Lucilius, 77).
- L'idée revient chez les modernes : Shakespeare (« le monde entier est un théâtre »), Calderón (La vie est un songe).

### Lien avec les œuvres au programme
- Ovide se dit victime de son **fatum** et de la colère de Caesar ; il se voit comme un héros tragique chassé du monde civilisé.
- Blixen raconte une vie qui bascule ; sa narratrice lit des signes dans les événements et accepte son destin.

### À retenir pour le bac
- **fatum** (ce qui a été dit), **fortuna** (le sort changeant), **Parcae**, **numen**, **sors**.
- Cosmogonies : Hésiode, Ovide (Chaos ordonné), Lucrèce (atomes), Genèse.
- Voix du destin : Pythie, Sibylle, augures, haruspices, songes.
- Familles maudites : Atrides, Labdacides ; Sénèque et le **furor** ; theatrum mundi.`,
    cartes: [
      { q: "Fatum", r: "Le destin, littéralement « ce qui a été dit » (de fari, parler)." },
      { q: "Fortuna", r: "Le sort, la chance, qui peut tourner d'un moment à l'autre." },
      { q: "Parcae", r: "Les Parques : trois fileuses qui filent la vie des hommes et coupent le fil." },
      { q: "Cosmogonie", r: "Récit de la naissance du monde." },
      { q: "Début du monde selon Ovide (Métamorphoses, I)", r: "Un dieu sépare les éléments mêlés dans le Chaos et organise le monde." },
      { q: "Origine du monde selon Lucrèce", r: "La rencontre des atomes, sans intervention des dieux." },
      { q: "Pythie", r: "Prêtresse d'Apollon qui rend les oracles à Delphes." },
      { q: "Sibylle de Cumes", r: "Prophétesse qui guide Énée aux Enfers (Énéide, VI)." },
      { q: "Augures", r: "Prêtres romains qui interprètent le vol et le chant des oiseaux." },
      { q: "Haruspices", r: "Devins qui lisent l'avenir dans les entrailles des victimes." },
      { q: "Atrides", r: "Famille maudite d'Atrée : Thyeste, Agamemnon, Oreste." },
      { q: "Labdacides", r: "Famille maudite de Laïos : Œdipe, Antigone." },
      { q: "Theatrum mundi", r: "Idée que le monde est un théâtre où chacun joue le rôle reçu." },
    ],
    quiz: [
      { q: "Quel est le sens premier de fatum ?",
        choix: ["Ce qui est caché", "Ce qui a été dit", "Ce qui brille", "Ce qui est écrit sur la pierre"],
        bonne: 1, niv: 2,
        expl: "Le mot vient de fari, parler : la parole divine fixe l'avenir." },
      { q: "Quel mot latin désigne le sort changeant, représenté avec une roue ?",
        choix: ["Fatum", "Numen", "Fortuna", "Pietas"],
        bonne: 2, niv: 1,
        expl: "La Fortune peut élever puis abattre." },
      { q: "Qu'est-ce qu'une cosmogonie ?",
        choix: ["Une carte du ciel", "Un récit de la naissance du monde", "Un oracle", "Un rite funéraire"],
        bonne: 1, niv: 1,
        expl: "Hésiode, Ovide et Lucrèce en proposent." },
      { q: "Selon Lucrèce, comment le monde est-il né ?",
        choix: ["Par la parole de Jupiter", "Par la rencontre des atomes", "Par le combat des Titans", "Par un songe"],
        bonne: 1, niv: 2,
        expl: "L'épicurisme écarte l'intervention des dieux." },
      { q: "Que fait le dieu au début des Métamorphoses d'Ovide ?",
        choix: ["Il sépare les éléments du Chaos", "Il détruit la Terre", "Il fonde Rome", "Il crée les Parques"],
        bonne: 0, niv: 2,
        expl: "Le monde ordonné sort du mélange primitif." },
      { q: "Qui rend les oracles d'Apollon à Delphes ?",
        choix: ["La Sibylle de Cumes", "La Pythie", "Médée", "Les haruspices"],
        bonne: 1, niv: 1,
        expl: "La Sibylle prophétise à Cumes, en Italie." },
      { q: "Que font les augures à Rome ?",
        choix: ["Ils observent le vol des oiseaux", "Ils lisent les entrailles", "Ils interprètent les rêves", "Ils jugent les procès"],
        bonne: 0, niv: 2,
        expl: "Les haruspices, eux, examinent les entrailles." },
      { q: "Quelle famille maudite compte Œdipe et Antigone ?",
        choix: ["Les Atrides", "Les Labdacides", "Les Julii", "Les Argonautes"],
        bonne: 1, niv: 2,
        expl: "Les Atrides sont la famille d'Agamemnon." },
      { q: "Quel mot latin désigne la passion furieuse des héros de Sénèque ?",
        choix: ["Pietas", "Otium", "Furor", "Fides"],
        bonne: 2, niv: 3,
        expl: "Le furor pousse Médée au scelus, le crime." },
      { q: "Que signifie l'image du theatrum mundi ?",
        choix: ["La vie est une pièce où chacun joue un rôle", "Les théâtres se trouvaient au centre des villes romaines et grecques", "Les dieux sont des acteurs", "Le monde a la forme d'un théâtre"],
        bonne: 0, niv: 3,
        expl: "Sénèque, Shakespeare et Calderón la reprennent." },
      { q: "Quel lien Ovide établit-il entre Tomes et le mythe tragique ?",
        choix: ["Médée y aurait découpé son frère Absyrte", "Œdipe y serait mort après avoir quitté Thèbes avec Antigone", "Ulysse y aurait fait naufrage", "Thyeste y aurait régné"],
        bonne: 0, niv: 3,
        expl: "C'est l'objet de l'élégie III, 9." },
    ] },
  { chapitre: "llca-lat-9",
    fiche: `## Objet d'étude : Croire, savoir, douter

Deuxième objet d'étude du programme de terminale. Il n'est pas celui des œuvres au programme, mais il peut nourrir l'essai, le portfolio et l'oral. Il interroge la façon dont les Anciens ont cru, cherché à savoir et appris à douter.

### Le vocabulaire
- **religio** : le scrupule religieux, le lien avec les dieux et l'ensemble des rites.
- **superstitio** : la croyance excessive, la crainte déraisonnable des dieux.
- **pietas** : le respect des devoirs envers les dieux, la patrie et la famille (Énée est **pius**).
- **ratio** : la raison, le calcul, la méthode.
- **scientia** : le savoir ; **sapientia** : la sagesse ; **dubitatio** : le doute.
- **magus**, **magia** : le mage, la magie (mots venus du perse par le grec).

### 1. Magie et pratiques magiques
- Grandes magiciennes de la littérature : **Médée**, qui rajeunit Éson (Ovide, Métamorphoses, VII), **Circé**, qui change les compagnons d'Ulysse en porcs, et chez Horace la sorcière **Canidie**.
- **Apulée**, Les Métamorphoses (ou L'Âne d'or) : Lucius, curieux de magie, est changé en âne.
- Pratiques réelles : **tablettes de défixion** (des malédictions gravées sur du plomb et enterrées), amulettes, philtres. La loi romaine punissait la magie nuisible.

### 2. Naissance de la pensée rationnelle
- Les premiers philosophes grecs (**Thalès**, **Héraclite**, **Démocrite**) cherchent l'origine des choses dans la nature, et non dans les mythes.
- **Lucrèce**, De rerum natura : la physique d'**Épicure** libère l'homme de la peur des dieux et de la mort ; tout est fait d'atomes et de vide.
- **Cicéron**, De diuinatione : il examine la divination et en montre les faiblesses ; le doute devient une méthode.
- **Pline l'Ancien**, Histoire naturelle : une encyclopédie du savoir sur la nature. Il meurt en 79 lors de l'éruption du Vésuve, en allant observer le phénomène de près.

### 3. Maîtres et disciples
- **Socrate** et **Platon** : le maître ne donne pas de réponses, il fait chercher par des questions.
- **Sénèque** écrit à son jeune ami **Lucilius** des lettres de philosophie stoïcienne : apprendre à vivre et à mourir.
- **Quintilien**, Institution oratoire : comment former un orateur depuis l'enfance.
- Les limites du rapport maître-élève : Sénèque, précepteur de **Néron**, n'a pas empêché les crimes de l'empereur ; il est contraint de se donner la mort en 65.

### 4. Polythéismes et monothéismes
- La religion romaine est **civique** : on honore de nombreux dieux par des rites précis pour garder la **pax deorum**, la paix avec les dieux. Croire, c'est d'abord pratiquer.
- Rome accueille des cultes venus d'Orient : Cybèle, Isis, Mithra.
- Le **judaïsme** et le **christianisme** affirment un dieu unique. Les chrétiens, qui refusent le culte de l'empereur, sont parfois persécutés.
- **Constantin** autorise le christianisme (313) ; sous **Théodose**, il devient la religion officielle à la fin du IVe siècle.

### Lien avec Ovide
- Ovide prie les dieux et l'empereur divinisé, parle de la colère divine, mais garde un regard ironique sur les croyances dans ses œuvres de jeunesse.

### À retenir pour le bac
- **religio** et **superstitio**, **pietas**, **ratio**, **sapientia**.
- Magie : Médée, Circé, Canidie, Apulée ; tablettes de défixion.
- Raison : présocratiques, Lucrèce et Épicure, Cicéron et le doute, Pline l'Ancien.
- Maîtres : Socrate, Sénèque et Lucilius (et Néron), Quintilien. Religion civique et **pax deorum**, puis monothéismes.`,
    cartes: [
      { q: "Religio", r: "Le lien avec les dieux, le scrupule religieux et l'ensemble des rites." },
      { q: "Superstitio", r: "La croyance excessive, la crainte déraisonnable des dieux." },
      { q: "Pietas", r: "Le respect des devoirs envers les dieux, la patrie et la famille." },
      { q: "Ratio", r: "La raison, le calcul, la méthode." },
      { q: "Tablette de défixion", r: "Malédiction gravée sur du plomb et enterrée pour nuire à quelqu'un." },
      { q: "Héros des Métamorphoses d'Apulée", r: "Lucius, changé en âne par curiosité pour la magie." },
      { q: "Projet de Lucrèce dans le De rerum natura", r: "Libérer l'homme de la peur des dieux et de la mort grâce à la physique d'Épicure." },
      { q: "Œuvre de Cicéron sur la divination", r: "Le De diuinatione, qui examine et critique les pratiques divinatoires." },
      { q: "Mort de Pline l'Ancien", r: "En 79, lors de l'éruption du Vésuve, en voulant observer le phénomène." },
      { q: "Destinataire des lettres de Sénèque", r: "Lucilius, son jeune ami, à qui il enseigne la sagesse stoïcienne." },
      { q: "Élève célèbre de Sénèque", r: "Néron, dont il fut le précepteur." },
      { q: "Pax deorum", r: "La paix avec les dieux, que la religion civique romaine cherche à préserver par les rites." },
      { q: "Christianisme et Empire", r: "Autorisé par Constantin en 313, religion officielle sous Théodose à la fin du IVe siècle." },
    ],
    quiz: [
      { q: "Que désigne superstitio pour un Romain ?",
        choix: ["Le culte officiel", "La philosophie", "Une crainte excessive des dieux", "Une fête religieuse"],
        bonne: 2, niv: 2,
        expl: "Elle s'oppose à la religio, le rapport juste avec les dieux." },
      { q: "Quel héros de Virgile est dit pius ?",
        choix: ["Turnus", "Achille", "Ulysse", "Énée"],
        bonne: 3, niv: 1,
        expl: "La pietas est le respect des devoirs envers les dieux, la patrie et la famille." },
      { q: "Qu'est-ce qu'une tablette de défixion ?",
        choix: ["Un calendrier religieux", "Une malédiction gravée sur du plomb", "Un registre d'impôts", "Une prière gravée au temple"],
        bonne: 1, niv: 2,
        expl: "On l'enterrait pour nuire à un rival." },
      { q: "Dans le roman d'Apulée, en quoi Lucius est-il transformé ?",
        choix: ["En âne", "En loup", "En oiseau", "En pierre"],
        bonne: 0, niv: 1,
        expl: "Sa curiosité pour la magie le perd." },
      { q: "Que veut montrer Lucrèce dans le De rerum natura ?",
        choix: ["Que les dieux gouvernent chaque chose dans la nature et la cité", "Que la magie est utile", "Que la nature s'explique sans craindre les dieux", "Que Rome est éternelle"],
        bonne: 2, niv: 2,
        expl: "Il expose la physique d'Épicure." },
      { q: "Quelle œuvre de Cicéron soumet la divination au doute ?",
        choix: ["Le De rerum natura", "L'Histoire naturelle", "Le De diuinatione", "L'Institution oratoire"],
        bonne: 2, niv: 2,
        expl: "Cicéron y examine les arguments pour et contre." },
      { q: "Comment meurt Pline l'Ancien ?",
        choix: ["Lors de l'éruption du Vésuve, en 79", "Exilé à Tomes", "Condamné par Néron", "Dans une bataille navale"],
        bonne: 0, niv: 1,
        expl: "Il voulait observer le phénomène de près." },
      { q: "À qui Sénèque adresse-t-il ses lettres de philosophie ?",
        choix: ["À Lucilius", "À Néron", "À Auguste", "À Quintilien"],
        bonne: 0, niv: 2,
        expl: "Néron fut son élève, pas le destinataire des lettres." },
      { q: "Que cherche à garder la religion civique romaine ?",
        choix: ["Le salut de l'âme", "La connaissance des atomes", "La pax deorum, la paix avec les dieux", "La fortune des marchands"],
        bonne: 2, niv: 3,
        expl: "Croire, à Rome, c'est d'abord accomplir les rites." },
      { q: "Que montre l'exemple de Sénèque et Néron ?",
        choix: ["Le maître ne peut pas tout sur son élève", "L'élève finit par dépasser le maître en sagesse et en vertu", "Le maître doit obéir à l'élève", "Le stoïcisme interdit d'enseigner"],
        bonne: 0, niv: 3,
        expl: "Sénèque est contraint de se donner la mort en 65." },
      { q: "Sous quel empereur le christianisme devient-il religion officielle ?",
        choix: ["Auguste", "Néron", "Tibère", "Théodose"],
        bonne: 3, niv: 3,
        expl: "Constantin l'avait autorisé en 313." },
    ] },
  { chapitre: "llca-lat-10",
    fiche: `## Objet d'étude : Méditerranée, présence des mondes antiques

Troisième objet d'étude, centré sur les traces matérielles de l'Antiquité : sites, villes, lieux de savoir et œuvres d'art. Il sert surtout pour le **portfolio** (images, documents) et pour donner des exemples précis dans l'essai.

### La Méditerranée, « notre mer »
- Les Romains l'appellent **mare nostrum**, « notre mer » : à partir du Ier siècle av. J.-C., toutes ses rives appartiennent à l'Empire.
- Les Grecs avaient fondé des **colonies** sur ses côtes et jusque sur le **Pont-Euxin** : Marseille (Massalia), fondée par des Grecs de Phocée, ou Tomis, fondée par des Grecs de Milet.

### 1. Sites archéologiques
- **Pompéi** et **Herculanum**, ensevelies par l'éruption du **Vésuve** en **79** : maisons, fresques, boutiques, inscriptions sur les murs. Une ville figée dans un instant.
- **Ostie**, le port de Rome, avec ses entrepôts et ses immeubles.
- En Gaule : **Nîmes** (Maison carrée, arènes), le **pont du Gard**, Arles, Orange (théâtre).
- En Afrique du Nord : **Carthage**, **Leptis Magna**, Timgad.
- L'archéologie apprend ce que les textes ne disent pas : la vie quotidienne, les gens ordinaires.

### 2. Les grandes villes et leurs transformations
- **Rome** : de la cité de Romulus au centre de l'Empire. **Auguste** se vante, selon Suétone, d'avoir trouvé une ville de briques et laissé une ville de marbre. Ovide décrit ses monuments en III, 1.
- **Athènes**, ville de la démocratie, de l'Acropole et des philosophes.
- **Alexandrie**, fondée par **Alexandre** en Égypte, célèbre pour son phare et sa bibliothèque.
- **Constantinople**, l'ancienne Byzance, refondée par Constantin en **330**, devient la nouvelle capitale de l'Empire.

### 3. Lieux de culture et figures du savoir
- La **bibliothèque d'Alexandrie** et le **Musée** : des savants y rassemblent et copient les livres du monde grec.
- À Athènes, l'**Académie** de Platon et le **Lycée** d'Aristote.
- À Rome, les premières **bibliothèques publiques** sont créées sous Auguste ; ce sont elles qui refusent le livre d'Ovide (III, 1).
- Figures du savoir : **Archimède** (mathématiques), **Ératosthène** (mesure de la Terre), **Hypatie** à Alexandrie.

### 4. L'art grec, romain, méditerranéen
- **Architecture** : les trois ordres grecs, **dorique** (chapiteau simple), **ionique** (volutes), **corinthien** (feuilles d'acanthe) ; les Romains ajoutent l'arc, la voûte et le béton (Panthéon, Colisée).
- **Peinture** : les fresques de Pompéi. **Mosaïque** : sols et murs décorés de petits cubes de pierre ou de verre.
- **Sculpture** : statues de dieux et d'athlètes en Grèce ; le **portrait** réaliste à Rome.

### Présence de l'Antiquité aujourd'hui
- Les mots (le français vient du latin), le droit, les monuments encore debout, les mythes repris par les films et les romans.
- Le programme invite à rapprocher une image ancienne et une image contemporaine dans le portfolio.

### À retenir pour le bac
- **mare nostrum** ; colonies grecques (Massalia, Tomis).
- Sites : Pompéi et Herculanum (79), Ostie, Nîmes et le pont du Gard, Carthage, Leptis Magna.
- Villes : Rome d'Auguste, Athènes, Alexandrie, Constantinople (330).
- Savoir : bibliothèque d'Alexandrie, Académie, Lycée ; art : ordres dorique, ionique, corinthien, fresque, mosaïque, portrait.`,
    cartes: [
      { q: "Mare nostrum", r: "« Notre mer » : le nom romain de la Méditerranée, entièrement entourée par l'Empire." },
      { q: "Fondateurs de Marseille", r: "Des Grecs de Phocée (la ville s'appelait Massalia)." },
      { q: "Date de l'éruption du Vésuve", r: "79 ap. J.-C. : Pompéi et Herculanum sont ensevelies." },
      { q: "Ostie", r: "Le port de Rome, à l'embouchure du Tibre." },
      { q: "Monuments romains de Nîmes", r: "La Maison carrée et les arènes ; le pont du Gard est tout proche." },
      { q: "Mot attribué à Auguste par Suétone", r: "Il aurait trouvé une Rome de briques et laissé une Rome de marbre." },
      { q: "Fondateur d'Alexandrie", r: "Alexandre le Grand, en Égypte." },
      { q: "Constantinople", r: "L'ancienne Byzance, refondée par Constantin en 330." },
      { q: "Académie et Lycée", r: "Les écoles de Platon et d'Aristote à Athènes." },
      { q: "Premières bibliothèques publiques de Rome", r: "Créées sous Auguste ; elles refusent le livre d'Ovide en III, 1." },
      { q: "Ordres grecs d'architecture", r: "Dorique (simple), ionique (volutes), corinthien (feuilles d'acanthe)." },
      { q: "Apports romains en architecture", r: "L'arc, la voûte et le béton (Panthéon, Colisée)." },
      { q: "Mosaïque", r: "Décor fait de petits cubes de pierre ou de verre assemblés." },
    ],
    quiz: [
      { q: "Que signifie mare nostrum ?",
        choix: ["La mer noire", "Mer des dieux", "Notre mer", "Une mer lointaine"],
        bonne: 2, niv: 1,
        expl: "Toutes les rives appartiennent alors à Rome." },
      { q: "Quelle ville a été fondée par des Grecs de Phocée ?",
        choix: ["Marseille", "Rome", "Tomis", "Carthage"],
        bonne: 0, niv: 1,
        expl: "Tomis fut fondée par des Grecs de Milet." },
      { q: "En quelle année Pompéi est-elle ensevelie ?",
        choix: ["En 8", "En 79", "En 14", "En 64"],
        bonne: 1, niv: 1,
        expl: "L'éruption du Vésuve fige la ville." },
      { q: "Quel est le rôle d'Ostie dans l'Empire ?",
        choix: ["C'est la capitale de la Gaule", "C'est le port de Rome", "C'est un sanctuaire grec", "C'est une ville d'Égypte"],
        bonne: 1, niv: 2,
        expl: "Elle se trouve à l'embouchure du Tibre." },
      { q: "Selon Suétone, de quoi Auguste se vantait-il ?",
        choix: ["D'avoir fondé Alexandrie", "D'avoir conquis Athènes", "D'avoir brûlé Carthage", "D'avoir laissé une Rome de marbre"],
        bonne: 3, niv: 2,
        expl: "Il aurait trouvé une ville de briques." },
      { q: "Qui refonde Byzance sous le nom de Constantinople ?",
        choix: ["Constantin", "Auguste", "Alexandre", "Théodose"],
        bonne: 0, niv: 2,
        expl: "La refondation date de 330." },
      { q: "Quelle école fut fondée par Aristote ?",
        choix: ["L'Académie", "Le Lycée", "Le Musée", "Le Portique"],
        bonne: 1, niv: 2,
        expl: "L'Académie est l'école de Platon." },
      { q: "Quel ordre d'architecture se reconnaît à ses feuilles d'acanthe ?",
        choix: ["Le dorique", "L'ionique", "Le corinthien", "Le toscan"],
        bonne: 2, niv: 2,
        expl: "L'ionique a des volutes, le dorique un chapiteau simple." },
      { q: "Quels procédés les Romains développent-ils en architecture ?",
        choix: ["L'arc, la voûte et le béton", "La colonne dorique", "La pyramide", "Le vitrail"],
        bonne: 0, niv: 3,
        expl: "Panthéon et Colisée en sont des exemples." },
      { q: "Quel lien unit les bibliothèques d'Auguste et le livre III des Tristes ?",
        choix: ["Elles refusent d'accueillir le livre d'Ovide", "Ovide en était le gardien avant son départ pour Tomes", "Elles conservent les Pontiques", "Elles ont brûlé sous Auguste"],
        bonne: 0, niv: 3,
        expl: "En III, 1, le livre exilé trouve les portes fermées." },
      { q: "Quel apport l'archéologie offre-t-elle à l'historien ?",
        choix: ["Elle remplace la lecture des textes anciens, devenus inutiles", "Elle montre la vie des gens ordinaires", "Elle donne la date de chaque mythe", "Elle traduit le latin"],
        bonne: 1, niv: 3,
        expl: "Les textes parlent surtout des élites." },
    ] },
  { chapitre: "llca-lat-11",
    fiche: `## Langue : les notions de terminale

Le programme de terminale ajoute quelques notions de langue à celles des années précédentes. Elles peuvent tomber dans la question de fait de langue ou servir à la traduction.

### Les relatifs indéfinis : quicumque et quisquis
- **quicumque, quaecumque, quodcumque** : « quiconque, quel que soit celui qui ». Il se décline comme **qui, quae, quod**, avec **-cumque** invariable : cuiuscumque, quemcumque…
- **quisquis, quidquid** (ou quicquid) : « quiconque, quoi que ce soit qui ». Les deux parties se déclinent, mais on rencontre surtout quisquis et quidquid.
- Exemple : **Quidquid id est, timeo Danaos et dona ferentes** (Virgile, Énéide, II, 49) : « Quoi que ce soit, je crains les Grecs, même quand ils apportent des présents. »
- Ils introduisent une proposition relative au sens général, souvent à l'indicatif.

### Les exclamatifs
- **quam** + adjectif ou adverbe : « combien, comme ». Exemple en III, 10, 6 : **quam non ingenio nomina digna meo !** « noms si peu dignes de mon talent ! »
- **quantus, a, um** (combien grand), **qualis, e** (quel), **quot** (combien nombreux, invariable).
- **o** + vocatif ou accusatif exclamatif : **o tempora, o mores !** (Cicéron), « quelle époque, quelles mœurs ! »

### Les parfaits sans présent
- **memini** : je me souviens ; **noui** (de **nosco**, apprendre à connaître) : je sais, je connais ; **odi** : je hais.
- Leur **parfait** a le sens d'un **présent**, leur **plus-que-parfait** (meminerat, nouerat, oderat) a le sens d'un imparfait, leur **futur antérieur** celui d'un futur.
- **memini** se construit avec le génitif ou l'accusatif : **meminit Nasonis** (III, 10, 1), « il se souvient de Nason ». Impératif : **memento**, « souviens-toi ».

### L'expression de l'âge
- **natus** + accusatif du nombre d'années : **uiginti annos natus**, « âgé de vingt ans » (littéralement « né depuis vingt ans »).
- **puer decem annorum** : « un enfant de dix ans » (génitif de qualité).
- **annum agere** + ordinal : **tricesimum annum agit**, « il est dans sa trentième année ».

### Le style indirect
- Il rapporte les paroles de quelqu'un après un verbe de parole (dico, nuntio, respondeo) sans les citer.
- Les **propositions principales** affirmatives passent à la **proposition infinitive** : sujet à l'accusatif, verbe à l'infinitif.
- Les **ordres** et les questions passent au **subjonctif**.
- Les **subordonnées** passent au **subjonctif**, selon la concordance des temps.
- Les pronoms changent : **se**, **suus** renvoient à celui qui parle.

### L'attraction modale
- Une subordonnée qui dépend d'une proposition au **subjonctif** ou d'une **proposition infinitive**, et qui fait partie de la pensée rapportée, se met elle aussi au **subjonctif** : c'est l'attraction modale.
- Exemple : **Dicit se librum, quem scripserit, mittere** : « Il dit qu'il envoie le livre qu'il a écrit. » Scripserit est au subjonctif parce que la relative dépend de l'infinitive.
- On le traduit en français par un indicatif.

### À retenir pour le bac
- **quicumque** et **quisquis** : quiconque, quoi que ce soit.
- Exclamatifs : **quam**, **quantus**, **qualis**, **quot**.
- **memini**, **noui**, **odi** : forme de parfait, sens de présent.
- Âge : **annos natus** ; style indirect : infinitive et subjonctif ; attraction modale.`,
    cartes: [
      { q: "Sens de quicumque", r: "Quiconque, quel que soit celui qui." },
      { q: "Déclinaison de quicumque", r: "Comme qui, quae, quod, avec -cumque invariable : cuiuscumque, quemcumque." },
      { q: "Sens de quisquis, quidquid", r: "Quiconque ; quoi que ce soit qui." },
      { q: "Traduction de « Quidquid id est, timeo Danaos et dona ferentes »", r: "« Quoi que ce soit, je crains les Grecs, même quand ils apportent des présents » (Énéide, II, 49)." },
      { q: "Exclamatif quam + adjectif", r: "Combien, comme : quam non digna, « combien peu dignes »." },
      { q: "Sens de quot", r: "Combien nombreux ; mot invariable." },
      { q: "Les trois parfaits sans présent", r: "memini (je me souviens), noui (je sais), odi (je hais)." },
      { q: "Sens d'un plus-que-parfait comme meminerat", r: "Un sens d'imparfait : il se souvenait." },
      { q: "Construction de memini", r: "Avec le génitif ou l'accusatif : meminit Nasonis." },
      { q: "Traduire uiginti annos natus", r: "Âgé de vingt ans." },
      { q: "Style indirect : les principales affirmatives", r: "Elles passent à la proposition infinitive." },
      { q: "Style indirect : les ordres et les subordonnées", r: "Ils passent au subjonctif." },
      { q: "Attraction modale", r: "Une subordonnée dépendant d'un subjonctif ou d'une infinitive se met au subjonctif." },
    ],
    quiz: [
      { q: "Comment traduire quicumque ?",
        choix: ["Quelqu'un", "Personne", "Chacun des deux", "Quiconque"],
        bonne: 3, niv: 1,
        expl: "Quicumque est un relatif indéfini." },
      { q: "Quel est le sens de quidquid dans « Quidquid id est » ?",
        choix: ["Tout ce qui est grand", "Rien de ce qui existe", "Quoi que ce soit", "Celui qui est là"],
        bonne: 2, niv: 2,
        expl: "Laocoon se méfie des Grecs (Énéide, II, 49)." },
      { q: "Dans « quam non ingenio nomina digna meo ! », quelle est la valeur de quam ?",
        choix: ["Exclamative", "Comparative", "Relative", "Interrogative"],
        bonne: 0, niv: 2,
        expl: "Quam + adjectif : « combien peu dignes »." },
      { q: "Quel sens a memini ?",
        choix: ["Je me suis souvenu autrefois", "Je me souviens", "Je me souviendrai", "Je mens"],
        bonne: 1, niv: 1,
        expl: "C'est un parfait à sens de présent." },
      { q: "Quel est le sens de oderat ?",
        choix: ["Il avait haï", "Il haïra", "Il haïssait", "Il hait"],
        bonne: 2, niv: 3,
        expl: "Le plus-que-parfait des parfaits sans présent a un sens d'imparfait." },
      { q: "Quel cas suit meminit dans « meminit Nasonis » ?",
        choix: ["L'ablatif", "Le datif", "Le vocatif", "Le génitif"],
        bonne: 3, niv: 2,
        expl: "Memini se construit avec le génitif ou l'accusatif." },
      { q: "Comment dire « âgé de vingt ans » en latin ?",
        choix: ["Viginti annis natus", "Viginti annos natus", "Viginti anni nati", "Annus uicesimus"],
        bonne: 1, niv: 2,
        expl: "Natus + accusatif du nombre d'années." },
      { q: "Au style indirect, que devient une principale affirmative ?",
        choix: ["Une proposition au subjonctif", "Une proposition infinitive", "Un ablatif absolu", "Une proposition à l'impératif"],
        bonne: 1, niv: 2,
        expl: "Sujet à l'accusatif, verbe à l'infinitif." },
      { q: "Au style indirect, quel mode prend un ordre ?",
        choix: ["L'impératif", "Le participe", "Le subjonctif", "L'indicatif"],
        bonne: 2, niv: 2,
        expl: "Les subordonnées passent aussi au subjonctif." },
      { q: "Pourquoi scripserit est-il au subjonctif dans « Dicit se librum, quem scripserit, mittere » ?",
        choix: ["Parce que c'est un souhait de celui qui parle", "C'est un ordre", "Par attraction modale", "Il exprime une condition irréelle"],
        bonne: 2, niv: 3,
        expl: "La relative dépend d'une proposition infinitive." },
      { q: "Comment traduit-on en français un subjonctif d'attraction modale ?",
        choix: ["Par un subjonctif", "Par un indicatif", "Par un infinitif", "Par un participe"],
        bonne: 1, niv: 3,
        expl: "Le subjonctif latin est ici purement grammatical." },
    ] },
  { chapitre: "llca-lat-12",
    fiche: `## Langue : analyser une forme verbale

Aux sujets de 2026, la question de fait de langue a porté sur des **formes verbales** : redde, timetur, perge, aude, incipe. Il faut donner le **temps**, le **mode**, la **voix** et la **personne**, puis interpréter. Voici les repères pour ne rien oublier.

### La méthode en quatre temps
- **Verbe d'origine** : retrouver l'infinitif et les temps primitifs dans le dictionnaire (ex. **defendo, is, ere, defendi, defensum**).
- **Radical** : radical du présent (temps du présent, de l'imparfait, du futur) ou radical du parfait (parfait, plus-que-parfait, futur antérieur).
- **Marque de mode et de temps** : -ba- pour l'imparfait de l'indicatif, -e- ou -a- pour le subjonctif présent, l'infinitif + désinence pour le subjonctif imparfait.
- **Désinence** : elle donne la personne, le nombre et la voix.

### Les désinences
- Voix active : **-o / -m, -s, -t, -mus, -tis, -nt**.
- Voix passive : **-or / -r, -ris, -tur, -mur, -mini, -ntur**. Exemples : **timetur** (il est craint), **defendimur** (nous sommes protégés).
- Parfait actif : **-i, -isti, -it, -imus, -istis, -erunt** : **latuit**, **uixit**, **perii**.

### L'impératif
- 2e personne du singulier : le radical du présent, sans désinence : **ama**, **mone**, **lege**, **audi** ; **redde** (de reddo, rends), **perge** (de pergo, continue), **aude** (de audeo, ose), **incipe** (de incipio, commence).
- 2e personne du pluriel : **-te** : **amate**, **legite**, **audite**.
- Formes courtes à connaître : **dic**, **duc**, **fac**, **fer**.
- **Interprétation** : un ordre, une exhortation adressée à soi-même ou à un autre ; chez Médée, ces impératifs montrent qu'elle se pousse elle-même au crime.

### Le subjonctif présent dans une principale
- Formation : **-e-** pour la 1re conjugaison (**amet**), **-a-** pour les autres (**moneat**, **legat**, **audiat**). Attention : en 3e conjugaison, **leget** est un futur, **legat** un subjonctif.
- Valeurs : **ordre** ou défense (subjonctif jussif : **me sciat**, « qu'il sache »), **souhait** (souvent avec **utinam**), délibération.

### Le passif et les déponents
- Le **passif** montre que le sujet **subit** l'action ; le complément d'agent est à l'ablatif avec **a / ab** pour une personne, à l'ablatif seul pour une chose.
- Un **déponent** a une forme passive et un sens actif : **loquor** (je parle), **sequor** (je suis), **patior** (je souffre), **morior** (je meurs), **queror** (je me plains, verbe fréquent dans les Tristes).
- Pour bien analyser, on dit : « forme passive, sens actif (verbe déponent) ».

### Les participes et l'ablatif absolu
- Participe présent (**-ns, -ntis**) : action simultanée ; participe parfait passif (**-tus, -sus**) : action antérieure et subie (**adempti**, « arraché »).
- **Ablatif absolu** : un nom et un participe à l'ablatif, détachés de la phrase : **Augusto iubente**, « sur l'ordre d'Auguste ».

### Interpréter : quelques pistes
- **Impératif** : urgence, volonté, autorité, ou lutte intérieure.
- **Passif** : impuissance, sujet qui subit le destin (Ovide relégué, protégé, oublié).
- **Parfait** : action accomplie, irréversible (**perii**, « j'ai péri », c'est fini).
- **Subjonctif** : souhait, ordre, possibilité, tout ce qui n'est pas encore réel.

### À retenir pour le bac
- Donner tout ce qui est demandé : temps, mode, voix, personne, verbe d'origine.
- Passif : -r, -ris, -tur, -mur, -mini, -ntur ; déponent : forme passive, sens actif.
- Impératif singulier = radical du présent (redde, perge, aude) ; subjonctif présent en -e- ou -a-.
- Interpréter en reliant la forme au personnage : volonté, impuissance, irréversible, souhait.`,
    cartes: [
      { q: "Informations à donner pour une forme verbale", r: "Verbe d'origine, temps, mode, voix, personne et nombre." },
      { q: "Désinences du passif", r: "-or ou -r, -ris, -tur, -mur, -mini, -ntur." },
      { q: "Analyse de timetur", r: "Indicatif présent passif, 3e personne du singulier, de timeo : il est craint." },
      { q: "Analyse de defendimur", r: "Indicatif présent passif, 1re personne du pluriel, de defendo : nous sommes protégés." },
      { q: "Formation de l'impératif présent singulier", r: "Le radical du présent seul : ama, mone, lege, audi." },
      { q: "Analyse de redde", r: "Impératif présent actif, 2e personne du singulier, de reddo : rends." },
      { q: "Impératifs courts irréguliers", r: "dic, duc, fac, fer." },
      { q: "Marque du subjonctif présent", r: "-e- en 1re conjugaison (amet), -a- dans les autres (legat)." },
      { q: "Leget ou legat ?", r: "Leget est un futur de l'indicatif, legat un subjonctif présent." },
      { q: "Valeur de sciat dans « me sciat… uiuere »", r: "Subjonctif jussif : « qu'il sache »." },
      { q: "Verbe déponent", r: "Verbe de forme passive et de sens actif : loquor, sequor, patior, morior, queror." },
      { q: "Ablatif absolu", r: "Nom et participe à l'ablatif, détachés de la phrase : Augusto iubente, sur l'ordre d'Auguste." },
      { q: "Interprétation fréquente du passif chez Ovide", r: "Le poète subit son destin, il est impuissant." },
    ],
    quiz: [
      { q: "Quelle désinence marque la 3e personne du singulier passive ?",
        choix: ["-nt", "-mini", "-tur", "-ris"],
        bonne: 2, niv: 1,
        expl: "Timetur : il est craint." },
      { q: "Comment analyser timetur ?",
        choix: ["Subjonctif présent actif, 3e personne du singulier", "Indicatif parfait passif, 3e personne du pluriel", "Impératif présent passif", "Indicatif présent passif, 3e personne du singulier"],
        bonne: 3, niv: 2,
        expl: "Timetur vient de timeo, craindre." },
      { q: "Quel mode est redde (de reddo) ?",
        choix: ["L'impératif", "L'indicatif", "Le subjonctif", "L'infinitif"],
        bonne: 0, niv: 1,
        expl: "Au singulier, l'impératif est le radical du présent." },
      { q: "Quel est l'impératif singulier de facio ?",
        choix: ["Fac", "Face", "Facis", "Faciat"],
        bonne: 0, niv: 1,
        expl: "Dic, duc, fac et fer sont des formes courtes." },
      { q: "Quelle forme est un subjonctif présent de lego ?",
        choix: ["Leget", "Legat", "Legit", "Legebat"],
        bonne: 1, niv: 2,
        expl: "Leget est un futur de l'indicatif." },
      { q: "Quelle est la valeur de sciat dans « me sciat… uiuere » ?",
        choix: ["Un futur : il saura", "Un passé : il a su", "Une question : sait-il ?", "Un ordre : qu'il sache"],
        bonne: 3, niv: 2,
        expl: "C'est un subjonctif jussif dans une principale." },
      { q: "Qu'est-ce qu'un verbe déponent ?",
        choix: ["Un verbe impersonnel employé à la troisième personne", "Un verbe sans parfait", "Un verbe qui n'a pas de futur", "Un verbe de forme passive et de sens actif"],
        bonne: 3, niv: 2,
        expl: "Loquor signifie je parle." },
      { q: "Comment traduire queror ?",
        choix: ["Je suis plaint", "Je me plains", "Je cherche", "Je me tais"],
        bonne: 1, niv: 3,
        expl: "C'est un déponent fréquent dans les Tristes." },
      { q: "Que traduit l'ablatif absolu Augusto iubente ?",
        choix: ["Auguste qui ordonne de partir", "Sur l'ordre d'Auguste", "Pour Auguste qui ordonne", "Auguste ayant été ordonné"],
        bonne: 1, niv: 3,
        expl: "Le participe présent indique la simultanéité." },
      { q: "Que peut révéler l'emploi d'impératifs comme perge, aude, incipe ?",
        choix: ["Un personnage qui se pousse lui-même à agir", "Un personnage qui hésite à parler devant les dieux et les hommes", "Un personnage qui se souvient", "Un personnage qui se repose"],
        bonne: 0, niv: 3,
        expl: "Au sujet de 2026, Médée s'exhorte au crime." },
      { q: "Quel effet produit un passif comme defendimur chez Ovide ?",
        choix: ["Il montre qu'Ovide commande une armée", "Il exprime un souhait", "Il marque un ordre", "Il montre que le poète subit et dépend"],
        bonne: 3, niv: 2,
        expl: "Ovide est protégé, il ne se protège pas." },
    ] },
  { chapitre: "llca-lat-13",
    fiche: `## Lexique : les mots-concepts de l'exil et du destin

La question de lexique demande le sens d'un mot **en contexte** : scelus, caecus ignis, fraus aux sujets de 2026. Il faut connaître les mots-clés des œuvres, leurs sens et leurs nuances. Le programme parle de **mots-concepts** : des mots qui portent une idée importante de la culture romaine.

### L'exil
- **exsilium, ii, n.** : l'exil ; **exul, exulis** : l'exilé (le livre de III, 1 est **liber exulis**, « le livre d'un exilé »).
- **relegatio, onis, f.** : la relégation, du verbe **relego**, envoyer au loin ; mesure plus douce que l'exil juridique.
- **patria, ae, f.** : la patrie, la terre des pères (**pater**).
- **Vrbs, urbis, f.** : la ville ; avec une majuscule, Rome, la Ville par excellence.
- **domus, us, f.** : la maison, le foyer, la famille.
- **barbarus, a, um** : étranger, qui ne parle ni grec ni latin ; puis grossier, cruel. **barbaria** : le pays des barbares.

### La faute et la peine
- **carmen, inis, n.** : le chant, le poème ; aussi la formule magique ou religieuse.
- **error, oris, m.** : l'errance, puis l'égarement, la faute involontaire.
- **culpa, ae, f.** : la faute dont on est responsable.
- **crimen, inis, n.** : l'accusation, puis le crime ; **scelus, eris, n.** : le crime abominable, sacrilège.
- **ira, ae, f.** : la colère ; chez Ovide, la colère de Caesar, comparée à celle de Jupiter.
- **clementia, ae, f.** : la clémence, vertu que l'on prête à Auguste et qu'Ovide espère.

### Le destin et les dieux
- **fatum, i, n.** : le destin, « ce qui a été dit » ; **fortuna, ae, f.** : le sort changeant.
- **numen, inis, n.** : la puissance divine ; Ovide l'emploie aussi pour l'empereur.
- **pietas, atis, f.** : le respect des devoirs envers les dieux, la patrie, les parents ; fidélité des amis et de l'épouse.

### Le poète et son œuvre
- **ingenium, ii, n.** : le talent naturel ; « **ingenio perii** » (III, 3, 74).
- **ars, artis, f.** : la technique, le métier, l'art (l'**Ars amatoria**).
- **Musa, ae, f.** : la Muse, l'inspiration.
- **fama, ae, f.** : la renommée, la rumeur ; ce qui survit au poète.
- **liber, libri, m.** : le livre ; à ne pas confondre avec **liber, era, erum** (libre) ni **liberi** (les enfants).

### Les sentiments
- **dolor, oris, m.** : la douleur, physique ou morale.
- **lacrimae, arum, f. pl.** : les larmes.
- **querela, ae, f.** : la plainte ; verbe **queror**.
- **spes, spei, f.** : l'espoir ; **metus, us, m.** et **timor, oris, m.** : la crainte.
- **solacium, ii, n.** : la consolation, ce que la poésie apporte au poète.

### Répondre à une question de lexique
- Donner la forme du dictionnaire, puis le sens premier et les autres sens.
- Choisir le sens qui convient ici, en s'appuyant sur les mots voisins.
- Élargir : ce que le mot dit du personnage, du thème ou de l'objet d'étude.

### À retenir pour le bac
- Exil : **exsilium**, **exul**, **relegatio**, **patria**, **Vrbs**, **barbarus**.
- Faute : **carmen**, **error**, **culpa**, **crimen**, **scelus** ; pouvoir : **ira**, **clementia**.
- Destin : **fatum**, **fortuna**, **numen**, **pietas** ; poésie : **ingenium**, **ars**, **Musa**, **fama**.
- Sentiments : **dolor**, **lacrimae**, **querela**, **spes**, **metus**, **solacium**.`,
    cartes: [
      { q: "exul, exulis", r: "L'exilé ; le livre de III, 1 se dit liber exulis, le livre d'un exilé." },
      { q: "relegatio", r: "La relégation : envoi au loin, plus doux que l'exil juridique." },
      { q: "patria", r: "La patrie, la terre des pères (pater)." },
      { q: "Vrbs", r: "La ville ; avec une majuscule, Rome." },
      { q: "carmen", r: "Le chant, le poème ; aussi la formule magique ou religieuse." },
      { q: "error", r: "L'errance, puis l'égarement, la faute involontaire." },
      { q: "culpa et scelus", r: "Culpa : faute dont on est responsable ; scelus : crime abominable, sacrilège." },
      { q: "clementia", r: "La clémence, vertu attribuée à Auguste, qu'Ovide espère." },
      { q: "numen", r: "La puissance divine ; Ovide l'emploie aussi pour l'empereur." },
      { q: "ingenium et ars", r: "Ingenium : le talent naturel ; ars : la technique, le métier." },
      { q: "fama", r: "La renommée, la rumeur ; ce qui survit au poète." },
      { q: "liber, libri ou liber, era, erum", r: "Le livre, ou l'adjectif libre ; liberi signifie les enfants." },
      { q: "solacium", r: "La consolation, que la poésie apporte au poète exilé." },
    ],
    quiz: [
      { q: "Que signifie exul ?",
        choix: ["Le soldat", "L'exilé", "L'ennemi", "Le voyageur marchand"],
        bonne: 1, niv: 1,
        expl: "Liber exulis : le livre d'un exilé." },
      { q: "De quel mot vient patria ?",
        choix: ["De pax, la paix", "De pars, la part", "De pateo, être ouvert", "De pater, le père"],
        bonne: 3, niv: 1,
        expl: "La patrie est la terre des pères." },
      { q: "Que désigne Vrbs écrit avec une majuscule ?",
        choix: ["Tomes", "Athènes", "Toute ville grecque", "Rome"],
        bonne: 3, niv: 1,
        expl: "C'est la Ville par excellence." },
      { q: "Quel est le sens premier de error ?",
        choix: ["L'errance", "Le crime", "Le mensonge", "La colère"],
        bonne: 0, niv: 2,
        expl: "Le sens de faute involontaire vient ensuite." },
      { q: "Quel mot désigne le crime abominable, sacrilège ?",
        choix: ["Culpa", "Scelus", "Error", "Ira"],
        bonne: 1, niv: 1,
        expl: "Au bac 2026, scelus était la question de lexique." },
      { q: "Quel autre sens peut avoir carmen ?",
        choix: ["Une colère", "Une formule magique", "Une maison", "Un navire"],
        bonne: 1, niv: 2,
        expl: "Le chant, le poème, mais aussi l'incantation." },
      { q: "Que signifie clementia ?",
        choix: ["La douceur du climat", "La colère divine", "La renommée", "La clémence"],
        bonne: 3, niv: 2,
        expl: "Ovide espère la clémence d'Auguste." },
      { q: "Quelle différence y a-t-il entre ingenium et ars ?",
        choix: ["La colère des dieux et la douceur des hommes", "La patrie et l'exil", "Le livre et l'enfant", "Le talent naturel et la technique apprise"],
        bonne: 3, niv: 3,
        expl: "Ovide unit les deux dans sa poésie." },
      { q: "Que signifie liberi ?",
        choix: ["Les livres", "Les hommes libres", "Les enfants", "Les bibliothèques"],
        bonne: 2, niv: 3,
        expl: "Liber, libri : le livre ; liber, era, erum : libre." },
      { q: "Quel mot latin désigne ce qui survit au poète, sa renommée ?",
        choix: ["Fama", "Fatum", "Fortuna", "Forma"],
        bonne: 0, niv: 2,
        expl: "Fama signifie aussi la rumeur." },
      { q: "Dans une question de lexique, que faut-il faire après avoir donné les sens du mot ?",
        choix: ["Choisir le sens du passage et le justifier", "Recopier l'article du dictionnaire en entier, sans choisir", "Traduire tout le texte", "Donner l'étymologie grecque"],
        bonne: 0, niv: 3,
        expl: "Le contexte est le cœur de la question." },
    ] },
  { chapitre: "llca-lat-14",
    fiche: `## Méthode : réussir l'écrit de 4 heures

L'écrit de LLCA latin dure **4 heures** et se note sur 20 : 10 points pour l'étude de la langue, 10 points pour l'essai. Seul le **dictionnaire latin-français** est autorisé. Voici comment s'organiser.

### Ce que contient le sujet
- **Texte A** : un extrait de l'œuvre antique au programme (Tristes, livre III), en latin avec sa traduction, de 300 mots latins au plus.
- **Texte B** : un extrait de l'œuvre moderne (La Ferme africaine).
- **Texte C** : un court texte grec ou latin en traduction, en lien avec l'objet d'étude.
- **Partie 1** : traduction d'environ 90 mots (6 points), un fait de langue (2 points), un mot ou une notion en contexte (2 points). Les questions 2 et 3 ne portent pas sur le passage à traduire.
- **Partie 2** : un essai organisé et argumenté (10 points).
- La **maîtrise de la langue française** compte sur toute la copie : une copie très fautive ne peut pas avoir la moyenne.

### Gérer son temps (conseil)
- Lecture du sujet et des trois textes : 20 minutes.
- Traduction : environ 1 h 15, brouillon compris.
- Fait de langue et lexique : 20 minutes.
- Essai : environ 1 h 45 (plan au brouillon puis rédaction).
- Relecture : 20 minutes, en vérifiant surtout l'orthographe et les accords.

### Traduire : la démarche
- Lire le **chapeau** (le résumé qui situe le passage) et les **notes** : elles donnent souvent le sens des mots rares et les noms propres.
- Repérer les **verbes conjugués** : un verbe conjugué, une proposition. Repérer les mots de liaison (**et**, **sed**, **tamen**, **nam**, **cum**, **dum**, **ut**, **si**).
- Dans chaque proposition, chercher le **sujet** (nominatif), puis les compléments d'après leur **cas**.
- En poésie, l'ordre des mots est libre : les accords relient des mots éloignés (**suppositum… aequor**). Le distique forme souvent une unité.
- Faire un mot à mot au brouillon, puis écrire un français correct et naturel.
- Bien utiliser le dictionnaire : chercher le mot sous sa forme de base (nominatif, première personne du présent), lire tout l'article et choisir le sens qui convient au contexte.

### L'essai : la démarche
- **Analyser** la question : mots-clés, présupposés. Exemple : « Quels rôles jouent les vêtements décrits dans ce corpus ? » (bac 2026) appelle plusieurs rôles, donc plusieurs parties.
- **Chercher les exemples** : les trois textes, les deux œuvres lues en entier, le **portfolio** (documents choisis pendant l'année, textes et images), les lectures personnelles.
- **Construire un plan** en deux ou trois parties qui progressent.
- **Rédiger** : introduction (amorce, présentation du corpus, question, annonce du plan), paragraphes argumentés (idée, exemple précis, explication), conclusion qui répond.
- **Confronter** les deux œuvres dans chaque partie : c'est ce qui distingue une bonne copie.
- Citer un mot latin du texte A quand c'est utile : il montre qu'on a lu le texte de près.

### L'échelle de l'essai
- La note officielle de l'épreuve décrit quatre niveaux : très insuffisant, insuffisant, satisfaisant, très satisfaisant. Une copie satisfaisante répond à la question avec un plan, des exemples précis et une langue correcte ; une copie très satisfaisante confronte finement les œuvres et nuance sa réponse.

### Les erreurs à éviter
- Laisser des blancs dans la traduction : il vaut mieux proposer un sens plausible.
- Analyser un fait de langue sans interpréter.
- Faire un essai qui résume les œuvres au lieu de répondre.
- Oublier le texte C, le portfolio ou l'une des deux œuvres.

### À retenir pour le bac
- 4 heures, dictionnaire latin-français seul ; langue sur 10 (traduction 6, fait de langue 2, lexique 2), essai sur 10.
- Traduire : chapeau et notes, verbes conjugués, cas, mot à mot, bon français.
- Essai : analyser, chercher, construire, rédiger, confronter.
- La langue française compte sur toute la copie.`,
    cartes: [
      { q: "Durée de l'écrit de LLCA latin", r: "4 heures." },
      { q: "Document autorisé", r: "Le dictionnaire latin-français seul." },
      { q: "Barème de la partie 1", r: "Traduction 6 points, fait de langue 2 points, lexique 2 points." },
      { q: "Barème de la partie 2", r: "Essai organisé et argumenté sur 10 points." },
      { q: "Longueur du passage à traduire", r: "Environ 90 mots latins." },
      { q: "Les trois textes du corpus", r: "Extrait de l'œuvre antique en latin et traduction, extrait de l'œuvre moderne, court texte grec ou latin en traduction." },
      { q: "Sur quoi portent les questions 2 et 3 ?", r: "Sur des passages du texte A qui ne sont pas à traduire." },
      { q: "Rôle de la maîtrise du français", r: "Évaluée sur toute la copie : une copie très fautive ne peut pas avoir la moyenne." },
      { q: "Premier réflexe pour traduire", r: "Lire le chapeau et les notes, puis repérer les verbes conjugués." },
      { q: "Chercher un mot au dictionnaire", r: "Sous sa forme de base, puis lire tout l'article et choisir le sens du contexte." },
      { q: "Sources d'exemples pour l'essai", r: "Les trois textes, les deux œuvres en entier, le portfolio, les lectures personnelles." },
      { q: "Ce qui distingue une bonne copie d'essai", r: "La confrontation des deux œuvres dans chaque partie." },
      { q: "Que faire d'un passage incompris en traduction ?", r: "Proposer un sens plausible plutôt que laisser un blanc." },
    ],
    quiz: [
      { q: "Combien de temps dure l'écrit de LLCA latin ?",
        choix: ["2 heures", "4 heures", "3 heures", "3 heures 30"],
        bonne: 1, niv: 1,
        expl: "C'est l'une des épreuves les plus longues du bac." },
      { q: "Quel document est autorisé à l'écrit ?",
        choix: ["La traduction complète des œuvres", "Un manuel de grammaire", "Le portfolio", "Le dictionnaire latin-français"],
        bonne: 3, niv: 1,
        expl: "Le portfolio sert à préparer l'essai, pas pendant l'épreuve." },
      { q: "Combien de points vaut la traduction ?",
        choix: ["4 points", "2 points", "6 points", "5 points"],
        bonne: 2, niv: 1,
        expl: "Fait de langue et lexique valent 2 points chacun." },
      { q: "Combien de mots latins compte environ le passage à traduire ?",
        choix: ["Environ 30", "Environ 300", "Environ 200", "Environ 90"],
        bonne: 3, niv: 2,
        expl: "Le texte A peut aller jusqu'à 300 mots, avec sa traduction." },
      { q: "Sur quoi portent le fait de langue et le lexique ?",
        choix: ["Sur des passages qui ne sont pas à traduire", "Sur le passage à traduire, pour vérifier la traduction", "Sur le texte B", "Sur le portfolio"],
        bonne: 0, niv: 3,
        expl: "La note de service le précise." },
      { q: "Que se passe-t-il si une copie est très fautive en français ?",
        choix: ["Elle ne peut pas avoir la moyenne", "On ne compte que la traduction", "Elle est notée sur 10", "Rien, seul le latin compte"],
        bonne: 0, niv: 2,
        expl: "La maîtrise de la langue est évaluée sur toute la copie." },
      { q: "Par quoi commencer une traduction ?",
        choix: ["Chercher chaque mot au dictionnaire", "Traduire le dernier vers", "Lire le chapeau et les notes", "Écrire directement au propre"],
        bonne: 2, niv: 1,
        expl: "Ils situent le passage et donnent les mots rares." },
      { q: "En poésie latine, comment relier des mots éloignés ?",
        choix: ["Grâce aux accords de cas, genre et nombre", "Grâce à la ponctuation, qui sépare chaque groupe de mots", "Grâce à l'ordre des mots", "Grâce aux majuscules"],
        bonne: 0, niv: 2,
        expl: "Suppositum… aequor sont éloignés mais accordés." },
      { q: "Que doit faire l'essai avec les deux œuvres ?",
        choix: ["Les confronter dans chaque partie", "Les résumer l'une après l'autre, en deux parties séparées", "Choisir l'une des deux", "Les citer en conclusion"],
        bonne: 0, niv: 2,
        expl: "La confrontation distingue une bonne copie." },
      { q: "Quel ensemble de documents l'élève construit-il pendant l'année ?",
        choix: ["Le dossier de traduction", "Le carnet de vocabulaire", "Le corpus du sujet", "Le portfolio"],
        bonne: 3, niv: 3,
        expl: "Il mêle textes et images et nourrit l'essai." },
      { q: "Que faire d'un passage incompris en traduction ?",
        choix: ["Proposer un sens plausible", "Laisser un blanc", "Recopier le latin", "Écrire une note au correcteur"],
        bonne: 0, niv: 3,
        expl: "Un blanc est compté comme une faute certaine." },
    ] },
  ],
  methode: [
    {
      "id": "llca-lat-m1",
      "mat": "llca-lat",
      "titre": "Traduire le passage latin",
      "formules": [
        "Traduisez le passage suivant (vers … à …)",
        "Traduisez les vers … à … (des notes de traduction sont données en bas de page)"
      ],
      "vu": [
        "Bac 2026 métropole (Sénèque, Médée, v. 459-501)",
        "Bac 2026, second sujet (Médée, v. 549-606)",
        "Bac 2026 Polynésie (Médée, v. 891-905)"
      ],
      "pts": "6 points",
      "attendu": "Une traduction complète d'environ 90 mots, exacte et écrite dans un français correct. Le correcteur vérifie que chaque mot est rendu, que les constructions sont comprises (sujet, verbe, compléments, subordonnées) et que la phrase française se lit sans effort.",
      "etapes": [
        "Lire le titre, le chapeau et les notes : ils donnent la situation et souvent le sens des mots rares",
        "Repérer les verbes conjugués et délimiter les propositions",
        "Pour chaque proposition, trouver le sujet (nominatif) et les compléments (cas)",
        "Traduire d'abord mot à mot au brouillon, au plus près de la construction",
        "Réécrire en bon français sans trahir le sens, et ne rien laisser de côté",
        "Relire en comparant vers par vers avec le latin"
      ],
      "mots": [
        "proposition",
        "cas",
        "accord",
        "subordonnée",
        "ordre des mots"
      ],
      "pieges": [
        "Sauter un mot ou un vers difficile : c'est compté comme une faute",
        "Chercher chaque mot au dictionnaire sans regarder sa terminaison",
        "Traduire l'ordre des mots latins tel quel, ce qui rend la phrase illisible",
        "Changer les temps : un parfait n'est pas un présent"
      ],
      "cas": "Ovide arrive à Tomes. Le premier vers de l'élégie III, 2 dit : « Ergo erat in fatis Scythiam quoque uisere nostris ». Mots utiles : ergo, donc ; fatum, i, n. : le destin ; Scythia, ae, f. : la Scythie ; uisere : aller voir, visiter ; noster : notre (ici pluriel poétique pour « mon »).",
      "question": "Traduisez ce vers en expliquant comment vous avez trouvé la construction.",
      "modele": "Le verbe conjugué est erat (imparfait de sum, 3e personne du singulier). Il n'a pas de sujet au nominatif : son sujet est l'infinitif uisere, construction impersonnelle « il était… de ». In fatis nostris est un complément à l'ablatif après in : « dans nos destins ». Scythiam est à l'accusatif, complément de uisere ; quoque signifie « aussi ». Traduction : « Il était donc dans mon destin de voir aussi la Scythie. » Le pluriel nostris est poétique : Ovide parle de lui seul.",
      "grille": [
        "Le verbe erat et son temps sont bien rendus",
        "La construction impersonnelle avec l'infinitif est comprise",
        "In fatis nostris est traduit et le pluriel poétique expliqué",
        "Scythiam et quoque sont rendus",
        "La phrase française est correcte"
      ]
    },
    {
      "id": "llca-lat-m2",
      "mat": "llca-lat",
      "titre": "Analyser puis interpréter un fait de langue",
      "formules": [
        "Analysez la forme verbale … (temps, mode, personne). En quoi cette forme met-elle en évidence … ?",
        "Analysez les formes verbales … (mode, temps et voix). Que révèle l'emploi de ces formes ?"
      ],
      "vu": [
        "Bac 2026 métropole : redde (v. 482), et la souffrance de Médée",
        "Bac 2026, second sujet : Perge, aude et incipe, et l'état d'esprit de Médée",
        "Bac 2026 Polynésie : timetur (v. 887), et les actes de Médée"
      ],
      "pts": "2 points (1 pour l'analyse, 1 pour l'interprétation)",
      "attendu": "Une analyse grammaticale exacte et complète (tout ce qui est demandé : temps, mode, voix, personne, verbe d'origine), puis une phrase d'interprétation qui relie cette forme au sens du texte. L'analyse seule ne donne que la moitié des points.",
      "etapes": [
        "Trouver le verbe d'origine (infinitif) à l'aide du radical et du dictionnaire",
        "Identifier la désinence : personne, nombre, voix",
        "Identifier le temps et le mode (radical du présent ou du parfait, marque du subjonctif)",
        "Rédiger l'analyse complète sur une ligne",
        "Interpréter : que montre cette forme (un ordre, un souhait, une action subie, un fait accompli) sur le personnage ou la situation ?"
      ],
      "mots": [
        "impératif",
        "subjonctif",
        "voix passive",
        "parfait",
        "désinence",
        "radical"
      ],
      "pieges": [
        "Oublier une des informations demandées (souvent la voix)",
        "Confondre subjonctif présent et futur de l'indicatif dans la 3e conjugaison",
        "S'arrêter à l'analyse sans interpréter",
        "Interpréter sans lien précis avec le texte"
      ],
      "cas": "Dans l'élégie III, 4, Ovide donne ce conseil à un ami : « bene qui latuit bene uixit » (v. 25). Latuit vient de lateo, ere, latui : être caché ; uixit vient de uiuo, ere, uixi : vivre.",
      "question": "Analysez les formes latuit et uixit (temps, mode, voix, personne). Que révèle l'emploi de ce temps dans le conseil d'Ovide ?",
      "modele": "Latuit et uixit sont à l'indicatif parfait actif, 3e personne du singulier, de lateo et de uiuo. Le parfait présente l'action comme accomplie : la phrase prend la forme d'une vérité générale tirée de l'expérience, « celui qui a bien vécu caché a bien vécu ». Ovide parle en homme qui a payé pour savoir : lui n'est pas resté caché, et il est puni. La maxime sonne comme une leçon amère de son propre destin.",
      "grille": [
        "Le temps (parfait) est donné",
        "Le mode (indicatif) et la voix (active) sont donnés",
        "La personne et les verbes d'origine sont exacts",
        "L'interprétation relie le parfait à la valeur de vérité générale",
        "L'interprétation fait le lien avec la situation d'Ovide"
      ]
    },
    {
      "id": "llca-lat-m3",
      "mat": "llca-lat",
      "titre": "Expliquer un mot ou une notion en contexte",
      "formules": [
        "Donnez en contexte le sens du mot … (v. …)",
        "Donnez en contexte le sens du groupe nominal … (v. …)",
        "Définissez en contexte le sens du nom … (v. …)"
      ],
      "vu": [
        "Bac 2026 métropole : scelus (v. 474)",
        "Bac 2026, second sujet : caecus ignis (v. 591)",
        "Bac 2026 Polynésie : fraude (v. 881)"
      ],
      "pts": "2 points",
      "attendu": "Le sens général du mot (avec ses principales valeurs données par le dictionnaire), puis le sens précis qu'il prend dans ce passage, justifié par le contexte et, si possible, relié à l'objet d'étude.",
      "etapes": [
        "Donner la nature du mot, sa forme dans le texte et sa forme au dictionnaire",
        "Donner son sens premier et ses autres sens",
        "Montrer, avec les mots voisins, quel sens il prend ici",
        "Élargir : ce que le mot dit du personnage, du thème ou de l'objet d'étude"
      ],
      "mots": [
        "sens propre",
        "sens figuré",
        "polysémie",
        "étymologie",
        "contexte"
      ],
      "pieges": [
        "Recopier la traduction du dictionnaire sans choisir",
        "Oublier le contexte, qui est le cœur de la question",
        "Écrire une demi-page : quelques phrases précises suffisent"
      ],
      "cas": "Dans Tristes, II, 207, Ovide explique les causes de sa relégation par deux mots : « carmen et error ». Le carmen désigne son Art d'aimer.",
      "question": "Donnez en contexte le sens du mot error.",
      "modele": "Error, erroris, m., vient du verbe erro, are : errer, aller çà et là, s'égarer. Il désigne d'abord l'errance, puis, au figuré, l'égarement, la faute commise sans le vouloir. Ici, Ovide l'oppose à crimen, le crime : il présente sa faute comme une erreur, une imprudence (il dit ailleurs avoir vu quelque chose qu'il n'aurait pas dû voir), et non comme un acte voulu. Le mot est habile : il reconnaît une faute tout en diminuant sa gravité. Il rejoint aussi le thème de l'exil, puisque l'errance est devenue la condition même du poète.",
      "grille": [
        "La forme et l'origine du mot sont données",
        "Le sens propre et le sens figuré sont distingués",
        "Le sens en contexte (faute involontaire) est justifié",
        "Le lien avec la situation d'Ovide ou l'exil est fait"
      ]
    },
    {
      "id": "llca-lat-m4",
      "mat": "llca-lat",
      "titre": "Rédiger l'essai organisé et argumenté",
      "formules": [
        "« … ? » Votre réponse prendra la forme d'un essai organisé et argumenté. Vous prendrez appui sur les trois textes du corpus, sur votre connaissance des deux œuvres, sur le portfolio, sur vos lectures personnelles."
      ],
      "vu": [
        "Bac 2026 métropole : « La mort d'un frère peut-elle influencer le destin tragique d'une héroïne ? »",
        "Bac 2026, second sujet : « Quels rôles jouent les vêtements décrits dans ce corpus de textes ? »",
        "Bac 2026 Polynésie : « Dans quelle mesure l'ordre du monde peut-il être bouleversé par des actes hors norme ? »"
      ],
      "pts": "10 points",
      "attendu": "Une introduction qui pose la question et annonce un plan, deux ou trois parties argumentées, chacune appuyée sur des exemples précis tirés des trois textes, des deux œuvres en entier, du portfolio et de lectures personnelles, puis une conclusion qui répond nettement. Le correcteur valorise la confrontation des œuvres antique et moderne.",
      "etapes": [
        "Analyser les mots de la question et la reformuler",
        "Relever dans les trois textes ce qui répond à la question",
        "Ajouter des passages des deux œuvres lues en entier, un document du portfolio, une lecture personnelle",
        "Construire un plan en deux ou trois parties qui progresse",
        "Rédiger chaque paragraphe : idée, exemple précis, explication",
        "Conclure en répondant à la question, puis relire l'orthographe"
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
        "Ne parler que des textes du corpus, sans les œuvres lues en entier",
        "Traiter Ovide puis Blixen en deux blocs séparés, sans les comparer",
        "Raconter les œuvres au lieu d'argumenter",
        "Oublier le texte C et le portfolio"
      ],
      "cas": "Corpus : Ovide, Tristes, III, 10 (l'hiver à Tomes) ; Karen Blixen, La Ferme africaine, le départ de la ferme ; Virgile, Bucoliques, I (le berger chassé de ses terres).",
      "question": "Rédigez l'introduction et le plan détaillé de l'essai : « Perdre sa terre, est-ce perdre une part de soi-même ? »",
      "modele": "Introduction : Ovide, relégué à Tomes en 8 ap. J.-C., ne reverra jamais Rome ; Karen Blixen quitte en 1931 la ferme africaine où elle a vécu dix-sept ans ; le berger de Virgile doit abandonner ses champs. Tous trois perdent un lieu qui les faisait vivre. Mais cette perte les atteint-elle dans leur identité même ? I. Perdre sa terre, c'est perdre ce qui fondait l'identité : Ovide se sent devenir un barbare et craint d'oublier son latin (III, 14) ; Blixen perd la ferme et les gens qui la peuplaient ; le berger perd ses douces campagnes. II. Pourtant l'écriture garde et recrée ce qui a été perdu : Ovide envoie son livre à Rome à sa place (III, 1) ; Blixen fait revivre la ferme dans un livre écrit après coup ; le portfolio peut offrir une image de l'exil. III. La perte devient alors une part nouvelle de soi : Ovide se définit désormais comme exilé et écrit sa propre épitaphe (III, 3) ; Blixen tire de cet échec une œuvre et un nom d'écrivain.",
      "grille": [
        "L'introduction présente le corpus et pose la question",
        "Le plan répond à la question et progresse",
        "Les exemples viennent des trois textes et des deux œuvres en entier",
        "Ovide et Blixen sont confrontés dans les mêmes parties",
        "Le portfolio ou une lecture personnelle est mobilisé",
        "La conclusion répond nettement"
      ]
    },
    {
      "id": "llca-lat-m5",
      "mat": "llca-lat",
      "titre": "Réussir l'oral de contrôle",
      "formules": [
        "Présentez et commentez le passage, puis traduisez les vers indiqués (environ 25 mots)."
      ],
      "vu": [
        "Note de service du 11 septembre 2026 : 20 minutes de préparation, 20 minutes d'épreuve"
      ],
      "pts": "Note sur 20 (exposé 10 minutes, entretien 10 minutes)",
      "attendu": "Un exposé de 10 minutes : présentation du passage de l'œuvre au programme, commentaire organisé et traduction d'environ 25 mots, puis un entretien de 10 minutes où l'examinateur fait préciser, élargit aux deux œuvres, à l'objet d'étude et au portfolio.",
      "etapes": [
        "Situer le passage dans le livre III des Tristes (quelle élégie, à qui, à quel moment)",
        "Traduire au brouillon les mots demandés",
        "Dégager deux ou trois idées pour le commentaire, chacune appuyée sur un mot latin",
        "Présenter : situation, traduction, commentaire, ouverture vers La Ferme africaine",
        "Pendant l'entretien, répondre simplement et appuyer chaque réponse sur un exemple"
      ],
      "mots": [
        "situer",
        "commentaire",
        "relégation",
        "élégie",
        "ouverture"
      ],
      "pieges": [
        "Lire ses notes sans regarder l'examinateur",
        "Garder la traduction pour la fin et manquer de temps",
        "Ne citer aucun mot latin dans le commentaire"
      ],
      "cas": "Le passage tiré au sort est la fin de l'élégie III, 3, où Ovide écrit sa propre épitaphe : « Hic ego qui iaceo tenerorum lusor amorum / ingenio perii Naso poeta meo ».",
      "question": "Préparez la traduction et deux idées de commentaire.",
      "modele": "Traduction : « Moi qui repose ici, qui ai joué avec les tendres amours, moi, le poète Nason, j'ai péri par mon propre talent. » Idée 1 : Ovide se dit déjà mort ; l'exil est vécu comme une mort loin de Rome. Le parfait perii présente la perte comme accomplie. Idée 2 : il désigne la cause de sa perte, son ingenium, son talent ; la poésie amoureuse qui l'a rendu célèbre l'a aussi perdu. Ouverture : comme Blixen, il transforme sa perte en œuvre.",
      "grille": [
        "Le passage est situé dans l'élégie et dans le livre",
        "La traduction est exacte",
        "Le commentaire s'appuie sur des mots latins précis",
        "Une ouverture vers l'autre œuvre ou l'objet d'étude est faite"
      ]
    }
  ],
  sujets: [
    { id: "llca-lat-s1", matiere: 'llca-lat', titre: "Sujet d'entraînement 1 : perdre sa terre", duree: 240,
      enonce: `Sujet d'entraînement inventé, sur le modèle de l'épreuve écrite de LLCA latin (session 2027). Les textes cités sont authentiques ; les traductions et les questions sont écrites pour cet entraînement. Durée : 4 heures. Seul le dictionnaire latin-français est autorisé.
Pour s'entraîner dans les conditions de l'épreuve, on prend dans son édition des Tristes (Les Belles Lettres, Classiques en poche) le texte latin et la traduction de l'élégie III, 10, et dans La Ferme africaine (Folio) les dernières pages du livre, celles du départ.

Le corpus
Texte A : Ovide, Tristes, livre III, élégie 10 (l'hiver à Tomes), dans votre édition. Les huit premiers vers sont reproduits ci-dessous.
Texte B : Karen Blixen, La Ferme africaine, les dernières pages (la narratrice quitte la ferme et regarde une dernière fois les collines du Ngong), dans votre édition.
Texte C : Virgile, Bucoliques, I, v. 3-4. Le berger Mélibée, chassé de ses terres, parle à Tityre, qui a pu garder les siennes. Traduction : « Nous, nous quittons les frontières de la patrie et nos douces campagnes ; nous, nous fuyons la patrie. »

Texte A, vers 1 à 8
Siquis adhuc istic meminit Nasonis adempti,
et superest sine me nomen in urbe meum,
suppositum stellis numquam tangentibus aequor
me sciat in media uiuere barbaria.
Sauromatae cingunt, fera gens, Bessique Getaeque,
quam non ingenio nomina digna meo!
Dum tamen aura tepet, medio defendimur Histro:
ille suis liquidus bella repellit aquis.

Notes : istic : là où tu es, à Rome ; Naso, onis, m. : Nason, c'est-à-dire Ovide ; adimo, ere, ademi, ademptum : enlever, arracher ; stellis numquam tangentibus aequor : les étoiles qui ne touchent jamais la mer, c'est-à-dire les constellations du nord, qui ne se couchent pas ; barbaria, ae, f. : le pays des barbares ; Sauromatae, Bessi, Getae : les Sarmates, les Besses, les Gètes, peuples voisins de Tomes ; Hister, tri, m. : l'Hister (le Danube) ; tepeo, ere : être tiède.

PARTIE 1 — Étude de la langue (10 points)
1. Traduction (6 points). Traduisez les vers 1 à 6.
2. Fait de langue (2 points). a. Analysez la forme verbale defendimur (v. 7) : temps, mode, voix, personne. b. Que révèle cette forme sur la situation d'Ovide à Tomes ?
3. Lexique (2 points). Donnez en contexte le sens du nom bella (v. 8).

PARTIE 2 — Essai (10 points)
« Perdre sa terre, est-ce perdre une part de soi-même ? »
Votre réponse prendra la forme d'un essai organisé et argumenté. Vous prendrez appui sur les trois textes du corpus, sur votre connaissance des deux œuvres, Tristes, livre III, d'Ovide et La Ferme africaine de Karen Blixen, sur le portfolio, sur vos lectures personnelles.

Remarque : à l'épreuve, le passage à traduire compte environ 90 mots ; il est plus court ici (37 mots). Pour s'entraîner sur une vraie longueur, on traduit en plus les vers 7 à 14 de l'élégie dans son édition.`,
      corrige: `PARTIE 1
1. Traduction proposée (vers 1 à 6) : « Si quelqu'un, là-bas, se souvient encore de Nason qu'on a arraché à sa patrie, et si mon nom survit sans moi dans la Ville, qu'il sache que je vis, sous les étoiles qui ne touchent jamais la mer, au milieu des barbares. Les Sarmates m'entourent, peuple farouche, et les Besses et les Gètes : noms si peu dignes de mon talent ! »
Points à vérifier : meminit est un parfait sans présent (memini) à sens de présent, « se souvient », construit avec le génitif Nasonis ; adempti est un participe parfait passif accordé avec Nasonis, « Nason enlevé, arraché » ; superest : « reste, survit » ; urbe désigne Rome, la Ville ; sciat est un subjonctif présent de sens jussif, « qu'il sache », dont dépend la proposition infinitive me… uiuere ; suppositum… aequor est un accusatif de lieu, « sous les étoiles » (littéralement, la mer placée sous les étoiles) ; in media barbaria : « au milieu du pays des barbares » ; quam non… digna est une exclamation, « combien peu dignes ».
Barème indicatif : 1 point par vers juste et bien écrit, avec des fautes de construction plus lourdes qu'une imprécision de vocabulaire.

2. a. Defendimur : indicatif présent passif, 1re personne du pluriel, du verbe defendo, ere, defendi, defensum (protéger, défendre). Le pluriel désigne Ovide et les habitants de Tomes (ou c'est un pluriel poétique).
b. La voix passive montre qu'Ovide ne se défend pas lui-même : il est protégé, et protégé seulement par un fleuve (medio Histro, ablatif de moyen). Le présent est limité par dum tamen aura tepet : la protection ne dure que tant que l'air est tiède. Le poète se présente comme vulnérable, à la merci de la saison et des barbares ; la suite de l'élégie montre l'Hister gelé que les ennemis traversent l'hiver.

3. Bellum, i, n. désigne la guerre, au sens d'un conflit entre peuples, et au pluriel les guerres, les combats. Ici, il ne s'agit pas de grandes guerres entre États, mais des attaques des peuples voisins, des razzias et des incursions armées. Le fleuve liquide les « repousse » comme un rempart. Le mot montre qu'à Tomes la guerre est une menace de chaque jour : Ovide, poète de l'amour à Rome, vit désormais dans un monde de violence.

PARTIE 2 — Pistes pour l'essai
Introduction : présenter les trois exils (Ovide relégué à Tomes en 8 ap. J.-C. ; Karen Blixen quittant sa ferme du Kenya en 1931 ; Mélibée chassé de ses champs), puis poser la question : la perte d'une terre atteint-elle l'identité ?
I. Perdre sa terre, c'est d'abord perdre une part de soi : Ovide n'est plus qu'un nom à Rome (nomen sine me) et se sent entouré de barbares au point de craindre de perdre son latin (III, 14) ; la narratrice de Blixen perd la ferme, les gens qui y vivaient, les animaux et le paysage du Ngong ; Mélibée répète nos… nos patriam fugimus, comme si la patrie faisait partie du « nous ».
II. Mais la mémoire et l'écriture gardent ce qui est perdu : Ovide envoie son livre à Rome à sa place (III, 1) ; La Ferme africaine est écrite au Danemark, des années après, pour faire revivre la ferme ; un document du portfolio (une image de Tomes, une scène du film de Sydney Pollack, 1985) peut montrer cette reconstruction.
III. La perte devient alors une part nouvelle de l'identité : Ovide se définit comme exilé, rédige son épitaphe (III, 3) et transforme sa souffrance en poésie ; Blixen devient l'écrivain de l'Afrique perdue. Le destin subi devient une œuvre choisie.
Conclusion : perdre sa terre, c'est perdre une part de soi, mais l'écriture permet de la garder et parfois d'en créer une autre.`,
      grille: [{"c":"Traduction : exactitude des constructions (meminit et le génitif, sciat et la proposition infinitive, exclamation)","pts":4},{"c":"Traduction : vocabulaire juste et français correct, rien n'est oublié","pts":2},{"c":"Fait de langue : analyse complète de defendimur (temps, mode, voix, personne)","pts":1},{"c":"Fait de langue : interprétation reliée à la vulnérabilité d'Ovide","pts":1},{"c":"Lexique : sens général de bellum et sens en contexte justifié","pts":2},{"c":"Essai : introduction, problématique et plan qui progresse","pts":2.5},{"c":"Essai : exemples précis tirés des trois textes et des deux œuvres en entier, confrontés","pts":4},{"c":"Essai : portfolio ou lectures personnelles, conclusion qui répond nettement","pts":2},{"c":"Essai : maîtrise de la langue française","pts":1.5}] },
  ],
};
