// Philosophie — voie technologique (toutes séries), terminale. Sources : voir matiere.sources.
// Programme : arrêté du 17 juillet 2019, BO spécial n° 8 du 25 juillet 2019 : 7 notions pour la voie technologique
// (l'art, la justice, la liberté, la nature, la religion, la technique, la vérité), toujours en vigueur pour le bac 2027.
// Épreuve : 4 heures, coefficient 4. Au choix : deux sujets de dissertation ou une explication de texte guidée par des questions.
// Un chapitre par notion, dans l'ordre du programme, puis un chapitre de méthode (philo-t-8).
export default {
  matiere: {
    id: 'philo-t',
    nom: 'Philosophie',
    voie: 'technologique',
    epreuve: { type: 'ecrit', duree: 240, coef: 4, quand: 'juin', note: 'Au choix : une dissertation (deux sujets proposés) ou une explication de texte guidée par des questions' },
    sources: [
      'https://www.education.gouv.fr/bo/19/Special8/MENE1921247A.htm',
      'https://eduscol.education.fr/1735/programmes-et-ressources-en-philosophie-voie-generale-et-technologique',
      'https://www.education.gouv.fr/reussir-au-lycee/les-epreuves-du-baccalaureat-technologique-41570',
      'https://www.letudiant.fr/bac/corriges-du-bac/article/sujets-et-corriges-bac-philosophie-2026-serie-generale-et-technologique.html',
    ],
    chapitres: [
      { id: 'philo-t-1', t: 'L\'art', theme: 'Notion' },
      { id: 'philo-t-2', t: 'La justice', theme: 'Notion' },
      { id: 'philo-t-3', t: 'La liberté', theme: 'Notion' },
      { id: 'philo-t-4', t: 'La nature', theme: 'Notion' },
      { id: 'philo-t-5', t: 'La religion', theme: 'Notion' },
      { id: 'philo-t-6', t: 'La technique', theme: 'Notion' },
      { id: 'philo-t-7', t: 'La vérité', theme: 'Notion' },
      { id: 'philo-t-8', t: 'Méthode : la dissertation et l\'explication de texte guidée', theme: 'Méthode' },
    ],
  },
  paquets: [
    // ---------------------------------------------------------------- 1 L'art
    {
      chapitre: 'philo-t-1',
      fiche: `## L'art

### Définir la notion
- L'**art** regroupe les activités qui produisent des **œuvres** faites pour être regardées, écoutées ou lues pour elles-mêmes : peinture, musique, cinéma, littérature, danse.
- **Artiste ou artisan ?** L'**artisan** fabrique un objet **utile** en suivant des règles connues (un boulanger, un menuisier). L'**artiste** crée une œuvre **unique**, qui n'a pas d'abord une utilité pratique.
- Le **beau** : ce qui nous plaît par sa forme. Attention : beau et **agréable** ne sont pas la même chose.

### L'art imite-t-il la nature ?
- **Platon** se méfie de l'art. Le peintre qui peint un lit copie le lit du menuisier, qui copie lui-même l'idée du lit. L'œuvre est une **copie de copie** : elle nous éloigne de la vérité.
- **Aristote** défend au contraire l'**imitation** : c'est ainsi que l'enfant apprend. On prend même plaisir à voir peintes des choses laides (un cadavre, un monstre), car on apprend en les reconnaissant.

### Les goûts se discutent-ils ?
- On dit : « Des goûts et des couleurs, on ne discute pas. » C'est vrai pour l'**agréable** : aimer les frites ou non, c'est personnel.
- **Kant** montre que le **beau** est différent : quand je dis « ce film est beau », je pense que les autres devraient être d'accord. Le beau « plaît **universellement** sans concept » : on ne peut pas le démontrer comme un théorème, mais on en discute.
- Le plaisir du beau est **désintéressé** : je n'ai pas besoin de posséder le tableau pour le trouver beau.

### L'art nous apprend-il à voir ?
- **Bergson** : dans la vie de tous les jours, nous voyons les choses selon leur **utilité** (une chaise sert à s'asseoir). L'artiste, plus détaché, voit ce que nous ne remarquons plus, et nous le **révèle**. Après avoir vu des tableaux de Monet, on regarde autrement les reflets sur l'eau.

### À quoi sert l'art ?
- Il n'est pas utile comme un outil, mais il peut **émouvoir**, faire **réfléchir**, **dénoncer** et transmettre une **culture**.
- Exemple : « Guernica » de Picasso (1937) dénonce le bombardement d'une ville espagnole pendant la guerre civile.
- Le **génie**, selon Kant, est un don naturel qui invente ses propres règles. Mais une œuvre demande aussi du **travail** et une **technique**.
- Exemple : la « Fontaine » de Marcel **Duchamp** (1917), un urinoir exposé comme œuvre, pose la question : qu'est-ce qui fait qu'un objet devient une œuvre ?

### À retenir pour le bac
- Distinguer artiste et artisan, beau et agréable.
- Platon (copie de copie) contre Aristote (l'imitation instruit).
- Kant : le beau prétend à l'accord de tous ; Bergson : l'art nous apprend à voir.
- Sujets tombés : « Avons-nous besoin d'art ? » (2025), « L'artiste est-il maître de son travail ? » (2024).`,
      cartes: [
        { q: "Quelle différence entre un artiste et un artisan ?", r: "L'artisan fabrique un objet utile selon des règles connues. L'artiste crée une œuvre unique, faite pour être contemplée." },
        { q: "Pourquoi Platon dit-il que l'art est une « copie de copie » ?", r: "Le peintre copie le lit du menuisier, qui copie lui-même l'idée du lit : l'œuvre s'éloigne de la vérité." },
        { q: "Que pense Aristote de l'imitation ?", r: "Elle est naturelle à l'homme : elle lui permet d'apprendre et lui procure du plaisir." },
        { q: "Pourquoi prend-on plaisir à voir peinte une chose laide, selon Aristote ?", r: "Parce qu'on apprend en reconnaissant ce qui est représenté." },
        { q: "Beau ou agréable : quelle différence ?", r: "L'agréable est personnel (chacun ses goûts). Le beau prétend à l'accord de tous (Kant)." },
        { q: "Que veut dire Kant par « le beau plaît universellement sans concept » ?", r: "On ne peut pas prouver qu'une œuvre est belle, mais on attend que tout le monde partage notre jugement." },
        { q: "Pourquoi le plaisir du beau est-il désintéressé ?", r: "On n'a pas besoin de posséder ni d'utiliser l'œuvre pour la trouver belle." },
        { q: "Que fait l'artiste selon Bergson ?", r: "Il voit ce que nous ne remarquons plus, parce que nous regardons les choses selon leur utilité, et il nous le révèle." },
        { q: "Qu'est-ce que le génie selon Kant ?", r: "Un don naturel qui invente ses propres règles, au lieu de suivre une recette." },
        { q: "Que dénonce « Guernica » de Picasso (1937) ?", r: "Le bombardement d'une ville espagnole pendant la guerre civile : l'art peut dénoncer la violence." },
        { q: "Quelle question pose la « Fontaine » de Duchamp (1917) ?", r: "Un urinoir exposé comme œuvre : qu'est-ce qui fait qu'un objet devient une œuvre d'art ?" },
        { q: "L'art est-il inutile ?", r: "Il n'est pas utile comme un outil, mais il émeut, fait réfléchir, dénonce et transmet une culture." },
      ],
      quiz: [
        { q: "Un boulanger qui suit sa recette pour faire du pain est plutôt :", choix: ["un artiste", "un artisan", "un génie", "un imitateur"], bonne: 1, expl: "Il fabrique un objet utile selon des règles connues : c'est un artisan.", niv: 1 },
        { q: "Pour Platon, le tableau d'un lit est :", choix: ["plus vrai que le lit réel", "une œuvre de génie", "un objet utile", "une copie de copie"], bonne: 3, expl: "Le peintre copie le lit du menuisier, lui-même copie de l'idée du lit.", niv: 1 },
        { q: "Quel auteur pense que l'imitation nous apprend quelque chose ?", choix: ["Aristote", "Platon", "Marcel Duchamp", "Picasso"], bonne: 0, expl: "Pour Aristote, l'homme apprend en imitant ; Platon, lui, se méfie de l'imitation.", niv: 1 },
        { q: "« J'adore les frites, toi non, c'est une question de goût. » Kant parlerait ici :", choix: ["du beau", "du génie", "de l'agréable", "de l'utile"], bonne: 2, expl: "Un plaisir personnel qui ne demande pas l'accord des autres, c'est l'agréable.", niv: 2 },
        { q: "Quand je dis « ce film est beau », selon Kant :", choix: ["je peux le prouver par des règles", "j'attends que les autres soient d'accord", "je parle seulement de mon goût", "le film est forcément utile"], bonne: 1, expl: "Le jugement de beauté prétend à l'universalité, même s'il ne se démontre pas.", niv: 2 },
        { q: "Après une exposition de Monet, Léa remarque les reflets de l'eau qu'elle ne voyait plus. Quel auteur éclaire cet exemple ?", choix: ["Platon", "Kant", "Bergson", "Aristote"], bonne: 2, expl: "Pour Bergson, l'artiste nous fait voir ce que notre regard pratique ne remarque plus.", niv: 2 },
        { q: "« Guernica » de Picasso montre surtout que l'art peut :", choix: ["copier fidèlement la nature", "dénoncer la violence", "servir d'outil pratique", "rester purement décoratif"], bonne: 1, expl: "L'œuvre dénonce le bombardement d'une ville : l'art peut avoir une portée politique.", niv: 2 },
        { q: "Je trouve un château beau sans vouloir l'acheter ni y habiter. Ce plaisir est :", choix: ["intéressé", "utile", "personnel", "désintéressé"], bonne: 3, expl: "Le plaisir du beau ne dépend pas de la possession de l'objet : il est désintéressé.", niv: 2 },
        { q: "Pourquoi la « Fontaine » de Duchamp est-elle un bon exemple dans un sujet sur l'art ?", choix: ["Un objet ordinaire peut devenir une œuvre", "Elle prouve que l'art copie la nature", "C'est le tableau le plus cher du monde", "Elle montre que l'art doit être utile"], bonne: 0, expl: "Un urinoir exposé devient œuvre : ce n'est ni la beauté ni la fabrication qui fait l'œuvre ici.", niv: 3 },
        { q: "Dans « Avons-nous besoin d'art ? », quelle distinction aide le plus ?", choix: ["Artiste et génie", "Platon et Aristote", "Peinture, sculpture et musique", "Besoin vital et besoin humain"], bonne: 3, expl: "On ne meurt pas sans art, mais on peut en avoir besoin pour vivre humainement : c'est le cœur du problème.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 2 La justice
    {
      chapitre: 'philo-t-2',
      fiche: `## La justice

### Définir la notion
- La **justice** est d'abord une **valeur** : ce qui est juste, c'est ce qui respecte les droits de chacun. C'est aussi une **institution** : les tribunaux, les juges.
- **Légal ou légitime ?** Est **légal** ce qui est conforme à la loi en vigueur. Est **légitime** ce qui est juste. Une loi peut être légale et injuste : en France, les femmes n'ont pas pu voter jusqu'en 1944.
- **Égalité ou équité ?** L'**égalité** donne la même chose à tous. L'**équité** tient compte des différences : donner plus de temps à un élève dyslexique pour un examen n'est pas injuste.

### Serions-nous justes sans risque d'être punis ?
- **Platon** raconte l'histoire du berger **Gygès**, qui trouve un anneau qui le rend invisible. Il en profite pour voler et tuer. Question : sommes-nous justes parce que nous aimons la justice, ou seulement par **peur** d'être punis ?
- Pour Platon, l'homme juste est celui dont la **raison** commande à ses **désirs**.

### Comment partager de façon juste ?
- **Aristote** distingue deux justices :
- la justice des **échanges** (commutative) : on rend l'équivalent de ce qu'on reçoit (payer le juste prix) ;
- la justice du **partage** (distributive) : chacun reçoit selon son **mérite** ou ses **besoins** (une bourse selon les revenus des parents).
- L'**équité** corrige la loi quand, appliquée à la lettre, elle serait injuste dans un cas particulier.

### La justice n'est-elle que la loi du plus fort ?
- Dans un dialogue de Platon, **Calliclès** affirme que la loi a été inventée par les faibles, et que la vraie justice serait que le plus fort domine.
- **Pascal** remarque que, souvent, on a déclaré juste ce qui était imposé par la force.
- Pourquoi ne pas se faire justice soi-même ? Parce que je suis **juge et partie** : la colère me fait exagérer. La loi et un **juge neutre** remplacent la vengeance.

### Peut-on désobéir à une loi injuste ?
- **Antigone** (tragédie de Sophocle) enterre son frère malgré l'interdiction du roi : elle obéit à une loi plus haute que celle de la cité.
- **Martin Luther King** défend la **désobéissance civile** : désobéir publiquement, sans violence, à une loi injuste (la ségrégation raciale), en acceptant la sanction.
- **Rawls** (1971) imagine qu'on choisit les règles de la société sans savoir quelle place on y aura : c'est le **voile d'ignorance**. On accepterait alors des inégalités seulement si elles aident aussi les plus défavorisés.

### À retenir pour le bac
- Légal ou légitime, égalité ou équité : les deux distinctions clés.
- Gygès (juste par peur ?), Aristote (échanges et partage), Calliclès (la loi du plus fort).
- Désobéissance civile : Antigone, Martin Luther King.
- Sujets possibles : « Est-il juste de désobéir à la loi ? », « L'égalité est-elle toujours juste ? », « Peut-on se faire justice soi-même ? ».`,
      cartes: [
        { q: "Légal ou légitime ?", r: "Légal : conforme à la loi en vigueur. Légitime : conforme à ce qui est juste. Une loi peut être légale et injuste." },
        { q: "Égalité ou équité ?", r: "L'égalité donne la même chose à tous. L'équité tient compte des différences de situation." },
        { q: "Donne un exemple de loi légale mais injuste.", r: "Jusqu'en 1944, la loi française interdisait aux femmes de voter." },
        { q: "Que raconte l'histoire de l'anneau de Gygès (Platon) ?", r: "Un berger devient invisible et commet des injustices. Serions-nous justes sans risque d'être punis ?" },
        { q: "Qu'est-ce que l'homme juste pour Platon ?", r: "Celui dont la raison commande aux désirs." },
        { q: "Qu'est-ce que la justice des échanges chez Aristote ?", r: "Rendre l'équivalent de ce qu'on reçoit : par exemple, payer le juste prix." },
        { q: "Qu'est-ce que la justice du partage chez Aristote ?", r: "Donner à chacun selon son mérite ou ses besoins : par exemple, une bourse selon les revenus." },
        { q: "Que soutient Calliclès ?", r: "Que la loi a été inventée par les faibles, et que la vraie justice serait la domination du plus fort." },
        { q: "Pourquoi ne pas se faire justice soi-même ?", r: "Parce qu'on est juge et partie : la colère fait exagérer. Un juge neutre remplace la vengeance." },
        { q: "Pourquoi Antigone est-elle un exemple de désobéissance ?", r: "Elle enterre son frère malgré l'interdiction du roi, au nom d'une loi plus haute que celle de la cité (Sophocle)." },
        { q: "Qu'est-ce que la désobéissance civile ?", r: "Désobéir publiquement et sans violence à une loi injuste, en acceptant la sanction (Martin Luther King)." },
        { q: "Qu'est-ce que le voile d'ignorance de Rawls ?", r: "Choisir les règles de la société sans savoir quelle place on y aura. On choisirait alors des règles justes pour tous." },
      ],
      quiz: [
        { q: "Une loi qui interdisait aux femmes de voter était :", choix: ["légale mais illégitime", "légitime mais illégale", "illégale et illégitime", "équitable mais inégale"], bonne: 0, expl: "Elle était conforme au droit de l'époque (légale) mais injuste (illégitime).", niv: 2 },
        { q: "Un élève dyslexique a plus de temps pour son examen. C'est :", choix: ["une inégalité injuste", "un privilège illégal", "une vengeance", "une mesure d'équité"], bonne: 3, expl: "L'équité tient compte des différences pour rétablir une vraie égalité des chances.", niv: 2 },
        { q: "Que pose comme question l'histoire de l'anneau de Gygès ?", choix: ["Faut-il obéir au roi ?", "Est-on juste seulement par peur ?", "Le plus fort a-t-il raison ?", "La loi est-elle égale pour tous ?"], bonne: 1, expl: "Invisible, Gygès devient injuste : notre justice viendrait-elle de la peur d'être vu ?", niv: 1 },
        { q: "Payer le juste prix d'une marchandise relève, chez Aristote, de la justice :", choix: ["du partage", "du plus fort", "des échanges", "divine"], bonne: 2, expl: "Dans un échange, on rend l'équivalent de ce qu'on reçoit : c'est la justice commutative.", niv: 1 },
        { q: "Une mairie donne des aides plus fortes aux familles les plus pauvres. C'est la justice :", choix: ["des échanges", "du partage", "du plus fort", "de la vengeance"], bonne: 1, expl: "Répartir selon les besoins, c'est la justice distributive.", niv: 2 },
        { q: "Quel personnage dit que la loi a été inventée par les faibles ?", choix: ["Antigone", "Gygès", "Socrate", "Calliclès"], bonne: 3, expl: "Calliclès, dans le Gorgias de Platon.", niv: 1 },
        { q: "Pourquoi un juge neutre vaut-il mieux que la vengeance personnelle ?", choix: ["La victime est juge et partie", "Le juge est plus fort que la victime", "La vengeance est trop lente", "La loi interdit d'avoir des émotions"], bonne: 0, expl: "La victime, en colère, ne peut pas juger avec mesure ; un tiers neutre le peut.", niv: 2 },
        { q: "Rosa Parks refuse en 1955 de céder sa place à un Blanc, contre la loi de ségrégation. Son geste est :", choix: ["une vengeance", "une désobéissance civile", "un abus de pouvoir", "une justice des échanges"], bonne: 1, expl: "Elle désobéit publiquement et sans violence à une loi injuste : c'est la désobéissance civile.", niv: 2 },
        { q: "Pourquoi l'égalité stricte n'est-elle pas toujours juste ?", choix: ["Les situations ne sont pas toujours les mêmes", "La loi interdit l'égalité", "Seuls les forts méritent d'être aidés", "Elle coûte bien trop cher à l'État et aux impôts"], bonne: 0, expl: "Donner la même chose à des personnes dans des situations différentes peut maintenir l'injustice.", niv: 3 },
        { q: "Dans « Est-il juste de désobéir à la loi ? », quelle distinction est indispensable ?", choix: ["Échanges et partage", "Juge et avocat", "Légal et légitime", "Raison et désir"], bonne: 2, expl: "Désobéir à une loi légale mais injuste peut être juste : tout le sujet repose sur cette distinction.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 3 La liberté
    {
      chapitre: 'philo-t-3',
      fiche: `## La liberté

### Définir la notion
- Au sens courant, être **libre**, c'est **faire ce que l'on veut**, sans obstacle.
- Mais il faut distinguer :
- la **liberté d'action** : pouvoir agir sans être empêché (un prisonnier ne l'a pas) ;
- la **liberté de choix** (le **libre arbitre**) : pouvoir décider soi-même entre plusieurs possibilités ;
- la **liberté politique** : les droits garantis par la loi (s'exprimer, voter, se réunir).
- **Obligation ou contrainte ?** La **contrainte** m'empêche physiquement (des menottes). L'**obligation** s'adresse à ma volonté : je peux désobéir, mais je ne dois pas (le code de la route).

### Faire ce qu'on veut, est-ce être libre ?
- Un fumeur qui « veut » sa cigarette est-il libre, ou **dépendant** ? Nos désirs eux-mêmes peuvent nous dominer.
- **Spinoza** : les hommes se croient libres parce qu'ils sont **conscients de leurs désirs** mais **ignorent les causes** qui les poussent. Une pierre lancée qui penserait se croirait libre de voler.
- Exemple : les réseaux sociaux nous proposent ce que nous « choisissons » de regarder, grâce à des algorithmes.

### Nous sommes responsables de nos choix
- **Descartes** : notre volonté est **libre** ; nous pouvons toujours dire oui ou non.
- **Sartre** : l'homme n'a pas de nature fixée d'avance : il se définit par ses actes. Il est « **condamné à être libre** » : même ne pas choisir est un choix. Il est donc **responsable**.
- Dire « je suis comme ça, je n'y peux rien », c'est, selon Sartre, être de **mauvaise foi**.

### Une liberté intérieure ?
- Les **stoïciens** (Épictète, ancien esclave) : même enchaîné, je reste libre de mes **jugements**. Il faut distinguer ce qui dépend de nous (nos pensées) et ce qui n'en dépend pas.
- Exemple : des résistants emprisonnés pendant la Seconde Guerre mondiale ont gardé leur liberté de penser et de refuser.

### La loi contre la liberté ?
- Sans loi, le plus fort impose sa volonté : personne n'est vraiment libre.
- **Rousseau** : « l'obéissance à la loi qu'on s'est prescrite est liberté ». Obéir à une loi votée par les citoyens, c'est obéir à soi-même.
- **Montesquieu** : la liberté politique, c'est pouvoir faire tout ce que les lois permettent.
- Exemple : le code de la route limite ma liberté de rouler, mais il me permet de circuler en sécurité.

### À retenir pour le bac
- Liberté d'action, de choix, politique ; contrainte et obligation.
- Spinoza : on se croit libre parce qu'on ignore les causes.
- Sartre : condamné à être libre, donc responsable ; Épictète : liberté intérieure.
- Rousseau : la loi qu'on se donne rend libre. Sujet tombé en 2025 : « Sommes-nous libres en toutes circonstances ? »`,
      cartes: [
        { q: "Quelle est la définition courante de la liberté ?", r: "Faire ce que l'on veut, sans obstacle." },
        { q: "Liberté d'action ou liberté de choix ?", r: "Action : pouvoir agir sans être empêché. Choix (libre arbitre) : décider soi-même entre plusieurs possibilités." },
        { q: "Contrainte ou obligation ?", r: "La contrainte m'empêche physiquement d'agir autrement. L'obligation s'adresse à ma volonté : je peux désobéir, mais je ne dois pas." },
        { q: "Pourquoi les hommes se croient-ils libres selon Spinoza ?", r: "Ils sont conscients de leurs désirs mais ignorent les causes qui les poussent." },
        { q: "Quel exemple Spinoza donne-t-il ?", r: "Une pierre lancée qui, si elle pensait, se croirait libre de continuer à voler." },
        { q: "Que veut dire Sartre par « condamné à être libre » ?", r: "On ne peut pas ne pas choisir : même ne rien faire est un choix. On est donc responsable de ce qu'on fait." },
        { q: "Qu'est-ce que la mauvaise foi chez Sartre ?", r: "Se mentir à soi-même pour fuir sa responsabilité : « je suis comme ça, je n'y peux rien »." },
        { q: "Que disent les stoïciens de l'esclave enchaîné ?", r: "Il reste libre de ses jugements : ses pensées dépendent de lui, ses chaînes non." },
        { q: "Qui était Épictète ?", r: "Un philosophe stoïcien, ancien esclave, pour qui il faut distinguer ce qui dépend de nous et ce qui n'en dépend pas." },
        { q: "Que dit Rousseau de l'obéissance à la loi ?", r: "« L'obéissance à la loi qu'on s'est prescrite est liberté » : obéir à une loi qu'on a votée, c'est obéir à soi-même." },
        { q: "Comment Montesquieu définit-il la liberté politique ?", r: "Le droit de faire tout ce que les lois permettent." },
        { q: "Pourquoi le code de la route n'est-il pas seulement une limite à la liberté ?", r: "Il limite ma vitesse, mais il me permet de circuler en sécurité : sans lui, personne ne pourrait rouler librement." },
      ],
      quiz: [
        { q: "Un prisonnier dans sa cellule a perdu surtout :", choix: ["sa liberté de penser", "sa liberté d'action", "son libre arbitre", "sa conscience morale"], bonne: 1, expl: "Il ne peut plus agir comme il veut, mais il peut encore penser et juger.", niv: 1 },
        { q: "Le code de la route est pour l'automobiliste :", choix: ["une contrainte physique", "un désir", "une obligation", "une mauvaise foi"], bonne: 2, expl: "Il peut désobéir, mais il ne doit pas : c'est une obligation, pas une contrainte.", niv: 2 },
        { q: "Quel auteur dit que les hommes se croient libres parce qu'ils ignorent les causes de leurs désirs ?", choix: ["Sartre", "Rousseau", "Descartes", "Spinoza"], bonne: 3, expl: "Spinoza, avec l'exemple de la pierre lancée.", niv: 1 },
        { q: "Hugo regarde des vidéos pendant trois heures en pensant qu'il le choisit, alors que l'application les lui impose. Quel auteur éclaire ce cas ?", choix: ["Spinoza", "Montesquieu", "Épictète", "Rousseau"], bonne: 0, expl: "Il est conscient de son envie, mais pas des causes qui la produisent : il se croit libre.", niv: 2 },
        { q: "« Je suis né timide, je n'y peux rien. » Sartre y verrait :", choix: ["une liberté intérieure", "un devoir moral", "de la mauvaise foi", "une contrainte légale"], bonne: 2, expl: "Se cacher derrière une prétendue nature pour fuir sa responsabilité, c'est la mauvaise foi.", niv: 2 },
        { q: "Pour Épictète, un esclave enchaîné reste libre :", choix: ["de ses jugements", "de ses déplacements", "de sa santé", "de sa réputation"], bonne: 0, expl: "Seuls nos jugements dépendent de nous ; le corps et la réputation n'en dépendent pas.", niv: 1 },
        { q: "« L'obéissance à la loi qu'on s'est prescrite est liberté » est une phrase de :", choix: ["Spinoza", "Rousseau", "Sartre", "Épictète"], bonne: 1, expl: "Rousseau, Du contrat social (1762).", niv: 1 },
        { q: "Un fumeur dit qu'il fume « parce qu'il le veut ». Quelle objection lui faire ?", choix: ["Il n'a aucun désir", "La loi l'oblige à fumer", "Il agit sous une contrainte physique", "Son désir peut être une dépendance"], bonne: 3, expl: "Faire ce qu'on veut ne suffit pas pour être libre si ce désir nous domine.", niv: 2 },
        { q: "Pourquoi une société sans loi ne rendrait-elle pas les gens plus libres ?", choix: ["Le plus fort imposerait sa volonté", "Les gens n'auraient plus de désirs", "Tout le monde serait en prison", "Les lois sont justes par définition"], bonne: 0, expl: "Sans loi commune, la liberté des faibles dépend du bon vouloir des forts.", niv: 3 },
        { q: "Pour « Sommes-nous libres en toutes circonstances ? », quelle idée nuance le mieux ?", choix: ["La prison empêche toute pensée et tout geste", "On perd la liberté d'agir, pas celle de juger", "La loi interdit presque tout", "Nos désirs disparaissent en prison"], bonne: 1, expl: "Distinguer liberté d'action et liberté de jugement permet de répondre sans tomber dans le oui ou non.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 4 La nature
    {
      chapitre: 'philo-t-4',
      fiche: `## La nature

### Définir la notion
- La **nature**, c'est d'abord tout ce qui existe **sans intervention humaine** : les montagnes, les animaux, les saisons. Elle s'oppose à l'**artifice** (ce que l'homme fabrique) et à la **culture** (ce que l'homme apprend et transmet).
- C'est aussi l'**essence** d'une chose : la « nature humaine », ce qui fait qu'un homme est un homme.
- Attention : **naturel** ne veut pas dire **bon**. Les poisons et les virus aussi sont naturels.

### L'homme est-il un être naturel ?
- L'homme a un **corps** naturel : il a faim, il dort, il vieillit.
- Mais presque tout chez lui passe par la **culture** : manger avec des couverts, parler une langue, s'habiller. **Merleau-Ponty** : chez l'homme, « tout est fabriqué et tout est naturel » ; on ne peut pas séparer les deux.
- Les **enfants sauvages** (Victor de l'Aveyron, trouvé vers 1800) montrent que, sans éducation, l'homme ne développe ni langage ni comportements humains ordinaires.
- **Rousseau** : ce qui distingue l'homme de l'animal, c'est la **perfectibilité**, la capacité de se transformer et d'apprendre. Le chat d'aujourd'hui vit comme celui d'il y a mille ans ; l'homme, non.

### Faut-il maîtriser la nature ?
- **Descartes** (1637) : grâce à la science, nous pouvons devenir « comme **maîtres et possesseurs de la nature** » : se protéger du froid, guérir les maladies, produire plus.
- Ce projet a apporté des progrès immenses (médecine, agriculture), mais aussi la **pollution** et le **réchauffement climatique**.
- **Hans Jonas** (1979) : notre puissance technique est devenue si grande qu'elle menace la nature et les générations futures. Nous avons une **responsabilité** envers elles.

### La nature est-elle hostile ou bienveillante ?
- La nature nous nourrit et nous émerveille, mais elle peut aussi tuer : tempêtes, séismes, épidémies.
- L'homme est **faible** par nature (sans griffes, sans fourrure) ; c'est pourquoi il a besoin de la **technique** et de la **société**. Dans le mythe de **Prométhée** (Platon), l'homme reçoit le feu pour compenser sa faiblesse.

### Ce qui est naturel est-il toujours bon ?
- La publicité vante les produits « naturels » comme s'ils étaient forcément meilleurs : c'est confondre un **fait** (c'est naturel) et une **valeur** (c'est bien).
- La loi du plus fort est « naturelle » chez les animaux, mais la justice humaine cherche justement à protéger les faibles.

### À retenir pour le bac
- Nature contre artifice et culture ; nature comme essence.
- L'homme : un corps naturel, mais tout passe par la culture (Merleau-Ponty, enfants sauvages, perfectibilité de Rousseau).
- Descartes (maîtres et possesseurs) contre Jonas (responsabilité).
- Piège : « naturel » ne veut pas dire « bon ». Sujet tombé en 2024 : « La nature est-elle hostile à l'homme ? »`,
      cartes: [
        { q: "À quoi s'oppose la nature ?", r: "À l'artifice (ce que l'homme fabrique) et à la culture (ce que l'homme apprend et transmet)." },
        { q: "Que signifie « nature humaine » ?", r: "Ce qui ferait l'essence de l'homme, ce qu'il y a de commun à tous les hommes." },
        { q: "Pourquoi « naturel » ne veut-il pas dire « bon » ?", r: "Être naturel est un fait, être bon est une valeur : les poisons et les virus aussi sont naturels." },
        { q: "Que dit Merleau-Ponty de la nature et de la culture chez l'homme ?", r: "Chez l'homme, « tout est fabriqué et tout est naturel » : on ne peut pas séparer les deux." },
        { q: "Que montrent les enfants sauvages comme Victor de l'Aveyron ?", r: "Sans éducation ni vie sociale, l'homme ne développe ni langage ni comportements humains ordinaires." },
        { q: "Qu'est-ce que la perfectibilité selon Rousseau ?", r: "La capacité propre à l'homme de se transformer et d'apprendre, que l'animal n'a pas." },
        { q: "Que propose Descartes face à la nature ?", r: "Que la science nous rende « comme maîtres et possesseurs de la nature » (1637)." },
        { q: "Quels sont les effets positifs et négatifs de la maîtrise de la nature ?", r: "Positifs : médecine, agriculture, confort. Négatifs : pollution, réchauffement climatique, disparition d'espèces." },
        { q: "Que demande Hans Jonas ?", r: "Une responsabilité envers la nature et les générations futures, car notre puissance technique les menace (1979)." },
        { q: "Pourquoi l'homme est-il faible par nature ?", r: "Il n'a ni griffes, ni fourrure, ni grande force : il a besoin de la technique et de la société." },
        { q: "Que raconte le mythe de Prométhée ?", r: "L'homme, oublié lors de la distribution des qualités, reçoit le feu et les techniques pour compenser sa faiblesse." },
        { q: "Quel sujet sur la nature est tombé en 2024 (voie technologique) ?", r: "« La nature est-elle hostile à l'homme ? »" },
      ],
      quiz: [
        { q: "Une voiture, un pont et un ordinateur relèvent :", choix: ["de la nature", "de l'essence", "de l'artifice", "du hasard"], bonne: 2, expl: "Ce que l'homme fabrique est artificiel, par opposition à la nature.", niv: 1 },
        { q: "Une marque affirme : « Notre crème est naturelle, donc bonne pour vous. » Quelle erreur commet-elle ?", choix: ["Elle confond un fait et une valeur", "Elle confond nature et culture", "Elle oublie la perfectibilité humaine", "Elle confond art et artisanat"], bonne: 0, expl: "Être naturel est un fait ; être bon est un jugement de valeur. Les deux ne vont pas forcément ensemble.", niv: 2 },
        { q: "Victor de l'Aveyron, trouvé seul dans la forêt, ne parlait pas. Cet exemple montre que :", choix: ["le langage est inné", "l'homme est mauvais par nature", "les animaux parlent aussi", "l'homme a besoin d'une éducation"], bonne: 3, expl: "Sans culture, les capacités humaines ne se développent pas.", niv: 2 },
        { q: "Pour Rousseau, l'homme se distingue de l'animal par :", choix: ["sa force", "la perfectibilité", "son instinct", "son corps"], bonne: 1, expl: "La perfectibilité est la capacité de se transformer, propre à l'homme.", niv: 1 },
        { q: "« Comme maîtres et possesseurs de la nature » est une expression de :", choix: ["Jonas", "Rousseau", "Merleau-Ponty", "Descartes"], bonne: 3, expl: "Descartes, Discours de la méthode (1637).", niv: 1 },
        { q: "Un pays décide de limiter ses forêts coupées pour que ses petits-enfants aient encore du bois. Il suit l'idée de :", choix: ["Descartes", "Jonas", "Calliclès", "Spinoza"], bonne: 1, expl: "Hans Jonas défend une responsabilité envers les générations futures.", niv: 2 },
        { q: "Manger avec une fourchette montre que chez l'homme :", choix: ["un besoin naturel passe par la culture", "la nature a disparu", "la culture est inutile", "l'instinct décide de tout ce qu'il fait"], bonne: 0, expl: "La faim est naturelle, la façon de manger est culturelle : chez l'homme, les deux se mêlent.", niv: 2 },
        { q: "Dans le mythe de Prométhée, l'homme reçoit le feu parce que :", choix: ["il est le plus fort des animaux", "il l'a volé aux animaux", "il est faible par nature", "il le mérite plus que les dieux"], bonne: 2, expl: "Oublié lors de la distribution des qualités, l'homme est nu et sans défense : la technique le sauve.", niv: 2 },
        { q: "Pourquoi la maîtrise de la nature voulue par Descartes est-elle aujourd'hui discutée ?", choix: ["Elle n'a jamais rien apporté", "Elle a aussi produit pollution et réchauffement", "Elle est interdite par la loi", "Elle ne concerne que les animaux"], bonne: 1, expl: "Elle a apporté des progrès, mais aussi des dégâts qui menacent l'avenir.", niv: 3 },
        { q: "Pour « La nature est-elle hostile à l'homme ? », quelle idée nuance le mieux ?", choix: ["La nature veut le bien de l'homme", "Les séismes n'existent pas", "La nature menace et nourrit à la fois", "L'homme n'a pas du tout besoin de la nature"], bonne: 2, expl: "La nature n'a pas d'intention : elle peut tuer comme elle peut nourrir. C'est notre rapport à elle qui compte.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 5 La religion
    {
      chapitre: 'philo-t-5',
      fiche: `## La religion

### Définir la notion
- Une **religion** est un ensemble de **croyances** (en un ou plusieurs dieux, en un sacré) et de **rites** (prières, fêtes, cérémonies) partagés par une communauté.
- Le mot viendrait du latin **religare**, « relier » : relier les hommes à Dieu et les hommes entre eux.
- **Croire ou savoir ?** **Savoir**, c'est pouvoir **prouver** (un théorème, une expérience). **Croire**, c'est tenir pour vrai **sans preuve** suffisante. La **foi** est une confiance personnelle, pas une démonstration.
- Le **sacré** est ce qui est séparé, protégé, intouchable ; le **profane** est la vie ordinaire.

### À quoi sert la religion ?
- **Durkheim** (sociologue, 1912) : la religion **unit** une société. Les rites rassemblent le groupe autour de ce qu'il juge sacré. Elle crée un **lien social**.
- Elle donne aussi un **sens** à la vie et à la mort, et une **morale** (ne pas tuer, aider son prochain).
- Exemple : les grandes fêtes religieuses (Noël, l'Aïd, Kippour) réunissent les familles et marquent le calendrier.

### La religion est-elle une illusion ?
- **Marx** (1844) : la religion est « l'**opium du peuple** ». Elle console les pauvres de leur misère en promettant un paradis, mais elle les empêche de se révolter contre les injustices réelles.
- **Freud** (1927) : la religion est une **illusion**, c'est-à-dire une croyance née d'un **désir**. Adulte, l'homme reste fragile, comme un enfant ; il imagine un Dieu protecteur, comme un père.
- Attention : pour Freud, une illusion n'est pas forcément fausse ; elle est surtout **motivée par un désir**.

### Raison et foi
- **Pascal** (17e siècle) : « Le **cœur** a ses raisons que la raison ne connaît point. » La foi ne se démontre pas comme un calcul.
- Son **pari** : si Dieu existe et que j'ai cru, je gagne tout ; s'il n'existe pas, je ne perds presque rien. Il est donc raisonnable de parier que Dieu existe.
- **Kant** : la raison ne peut **ni prouver ni réfuter** l'existence de Dieu. Il faut donc limiter le savoir pour laisser une place à la foi.

### Religion et vivre ensemble
- Les religions ont inspiré la **charité**, l'art (cathédrales, musique sacrée), mais aussi des **guerres** (guerres de Religion en France au 16e siècle).
- **Locke** (1689) défend la **tolérance** : l'État ne doit pas imposer une religion, car on ne peut pas forcer quelqu'un à croire.
- La **laïcité** (loi française de **1905**) : l'État ne reconnaît ni ne finance aucun culte, et il garantit la liberté de croire ou de ne pas croire.

### À retenir pour le bac
- Croire et savoir ; sacré et profane.
- Durkheim : la religion crée du lien social.
- Marx (opium du peuple) et Freud (illusion née d'un désir) critiquent la religion.
- Pascal (le cœur, le pari), Kant (ni preuve ni réfutation). Locke et la laïcité : tolérance.
- Sujets possibles : « La religion est-elle une illusion ? », « Peut-on se passer de croire ? », « La raison peut-elle s'opposer à la foi ? ».`,
      cartes: [
        { q: "Qu'est-ce qu'une religion ?", r: "Un ensemble de croyances et de rites partagés par une communauté, autour d'un ou plusieurs dieux ou d'un sacré." },
        { q: "D'où viendrait le mot « religion » ?", r: "Du latin religare, « relier » : relier les hommes à Dieu et les hommes entre eux." },
        { q: "Croire ou savoir ?", r: "Savoir, c'est pouvoir prouver. Croire, c'est tenir pour vrai sans preuve suffisante." },
        { q: "Sacré ou profane ?", r: "Le sacré est séparé, protégé, intouchable. Le profane est la vie ordinaire." },
        { q: "Quel rôle Durkheim donne-t-il à la religion ?", r: "Elle unit la société : les rites rassemblent le groupe autour de ce qu'il juge sacré et créent du lien social." },
        { q: "Que veut dire Marx par « l'opium du peuple » ?", r: "La religion console les pauvres de leur misère, mais les empêche de se révolter contre les injustices réelles." },
        { q: "Pourquoi Freud parle-t-il d'illusion à propos de la religion ?", r: "C'est une croyance née d'un désir : l'homme, fragile comme un enfant, imagine un Dieu protecteur comme un père." },
        { q: "Une illusion est-elle forcément fausse selon Freud ?", r: "Non : elle est surtout motivée par un désir. Ce qui compte, c'est son origine." },
        { q: "Que signifie « le cœur a ses raisons que la raison ne connaît point » (Pascal) ?", r: "La foi ne se démontre pas comme un calcul : elle vient d'une autre source que le raisonnement." },
        { q: "Qu'est-ce que le pari de Pascal ?", r: "Si Dieu existe et que j'ai cru, je gagne tout ; sinon, je ne perds presque rien. Il est donc raisonnable de croire." },
        { q: "Que dit Kant de l'existence de Dieu ?", r: "La raison ne peut ni la prouver ni la réfuter : il y a donc une place pour la foi." },
        { q: "Qu'est-ce que la laïcité en France ?", r: "Depuis la loi de 1905, l'État ne reconnaît ni ne finance aucun culte et garantit la liberté de croire ou non." },
      ],
      quiz: [
        { q: "« Je pense que cette équation est juste, et je peux le démontrer. » C'est :", choix: ["une croyance", "un acte de foi", "une illusion", "un savoir"], bonne: 3, expl: "Pouvoir prouver, c'est savoir ; croire, c'est tenir pour vrai sans preuve.", niv: 1 },
        { q: "Pour Durkheim, la religion sert surtout à :", choix: ["unir les membres d'une société", "expliquer la physique", "enrichir les prêtres et les temples", "remplacer la loi"], bonne: 0, expl: "Les rites rassemblent le groupe : la religion crée du lien social.", niv: 1 },
        { q: "« L'opium du peuple » est une formule de :", choix: ["Freud", "Pascal", "Marx", "Durkheim"], bonne: 2, expl: "Marx, en 1844 : la religion console mais endort la révolte.", niv: 1 },
        { q: "Selon Freud, une illusion est une croyance :", choix: ["prouvée par la science", "née d'un désir", "imposée par la loi", "partagée par un seul homme"], bonne: 1, expl: "Ce qui définit l'illusion, c'est son origine : un désir, ici celui d'être protégé.", niv: 2 },
        { q: "Un ouvrier très pauvre se dit : « Je serai récompensé au paradis, inutile de réclamer. » Quel auteur critiquerait cette attitude ?", choix: ["Marx", "Pascal", "Locke", "Kant"], bonne: 0, expl: "Pour Marx, la religion détourne les opprimés de la lutte contre l'injustice réelle.", niv: 2 },
        { q: "Pour Pascal, la foi vient surtout :", choix: ["d'une démonstration", "de la loi de l'État", "de la peur du gendarme", "du cœur"], bonne: 3, expl: "« Le cœur a ses raisons que la raison ne connaît point. »", niv: 1 },
        { q: "Que dit Kant de l'existence de Dieu ?", choix: ["La science l'a démontrée", "Elle est seulement une invention des prêtres", "La raison ne peut ni la prouver ni la réfuter", "Elle dépend de l'État"], bonne: 2, expl: "La question dépasse les limites de la raison : elle relève de la foi.", niv: 2 },
        { q: "Une école publique française n'affiche aucun signe religieux. Elle applique :", choix: ["la tolérance de Pascal", "le pari de Kant", "la morale de Marx", "la laïcité"], bonne: 3, expl: "La laïcité (1905) : l'État et ses services restent neutres envers tous les cultes.", niv: 2 },
        { q: "Pourquoi Locke dit-il que l'État ne doit pas imposer une religion ?", choix: ["Toutes les religions sont fausses", "On ne peut pas forcer quelqu'un à croire", "Les rois sont rarement croyants", "La religion coûte trop cher aux citoyens"], bonne: 1, expl: "La foi est intérieure : la contrainte ne produit que de l'hypocrisie.", niv: 3 },
        { q: "Pour « La religion est-elle une illusion ? », quelle précision évite un contresens ?", choix: ["Illusion ne veut pas dire erreur", "Toutes les religions sont des mensonges", "Freud a prouvé que Dieu n'existe pas", "Personne ne croit vraiment"], bonne: 0, expl: "Chez Freud, « illusion » ne veut pas dire « erreur » : la copie doit le préciser.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 6 La technique
    {
      chapitre: 'philo-t-6',
      fiche: `## La technique

### Définir la notion
- La **technique** est l'ensemble des **moyens** que l'homme invente pour transformer la nature et atteindre ses buts : outils, machines, savoir-faire.
- Le mot vient du grec **technè**, qui voulait dire à la fois « art » et « savoir-faire ».
- **Outil ou machine ?** L'**outil** prolonge la main et dépend d'elle (un marteau). La **machine** fonctionne avec sa propre énergie et peut remplacer l'homme (une machine à laver).
- La **technologie** est une technique appuyée sur la **science** (un smartphone, un scanner médical).

### L'homme est-il un être technique ?
- Le mythe de **Prométhée** (raconté par Platon) : l'homme naît nu, sans griffes ni fourrure. Prométhée lui donne le **feu** et les techniques pour survivre.
- **Aristote** : la **main** est « l'outil des outils » ; elle peut devenir pince, marteau ou crochet.
- **Bergson** : l'homme est **homo faber**, celui qui fabrique des outils, avant même d'être homo sapiens. Fabriquer des outils est le signe de son intelligence.

### La technique nous libère-t-elle ?
- Elle nous libère de nombreuses contraintes : la médecine soigne, le chauffage protège du froid, les machines font les travaux pénibles, Internet relie le monde.
- **Descartes** voyait dans la science et la technique le moyen de devenir « comme **maîtres et possesseurs de la nature** ».

### La technique peut-elle nous asservir ?
- **Marx** : à l'usine, l'ouvrier devient un simple **rouage** de la machine ; il répète le même geste et ne se reconnaît plus dans ce qu'il produit. C'est l'**aliénation**.
- Exemple : le film « Les Temps modernes » de Charlie **Chaplin** (1936) montre un ouvrier rendu fou par le travail à la chaîne.
- Aujourd'hui : la dépendance aux écrans, la surveillance par les données, les emplois remplacés par les robots.

### La technique est-elle neutre ?
- On dit souvent : la technique n'est ni bonne ni mauvaise, **tout dépend de l'usage**. Un couteau sert à cuisiner ou à blesser.
- Mais certaines techniques sont si puissantes que leurs effets dépassent nos intentions : la bombe atomique (Hiroshima, 1945), le réchauffement climatique.
- **Hans Jonas** (1979) : avec une telle puissance, il faut un **principe de responsabilité** ; agir de façon que la vie humaine puisse continuer sur Terre.

### À retenir pour le bac
- Outil, machine, technologie.
- Prométhée et homo faber (Bergson) : l'homme est un être technique.
- La technique libère (Descartes) mais peut aliéner (Marx, Chaplin).
- Neutre ? L'usage compte, mais la puissance aussi (Jonas).
- Sujets : « La technique peut-elle être mauvaise ? » (2026), « La technique nous rend-elle plus libres ? ».`,
      cartes: [
        { q: "Qu'est-ce que la technique ?", r: "L'ensemble des moyens inventés par l'homme pour transformer la nature et atteindre ses buts : outils, machines, savoir-faire." },
        { q: "Outil ou machine ?", r: "L'outil prolonge la main et dépend d'elle. La machine fonctionne avec sa propre énergie et peut remplacer l'homme." },
        { q: "Qu'est-ce que la technologie ?", r: "Une technique appuyée sur la science, comme un scanner médical ou un smartphone." },
        { q: "Que raconte le mythe de Prométhée sur la technique ?", r: "L'homme naît nu et faible ; Prométhée lui donne le feu et les techniques pour survivre." },
        { q: "Pourquoi Aristote dit-il que la main est « l'outil des outils » ?", r: "Elle peut devenir pince, marteau ou crochet, et elle fabrique tous les autres outils." },
        { q: "Que veut dire « homo faber » chez Bergson ?", r: "L'homme est d'abord celui qui fabrique des outils : c'est le signe de son intelligence." },
        { q: "Comment la technique nous libère-t-elle ?", r: "Elle soigne, protège du froid, fait les travaux pénibles à notre place et relie les hommes." },
        { q: "Qu'est-ce que l'aliénation selon Marx ?", r: "L'ouvrier devient un rouage de la machine, répète le même geste et ne se reconnaît plus dans ce qu'il produit." },
        { q: "Que montre le film « Les Temps modernes » (Chaplin, 1936) ?", r: "Un ouvrier rendu fou par le travail à la chaîne : la machine impose son rythme à l'homme." },
        { q: "Pourquoi dit-on que la technique est neutre ?", r: "Elle ne serait ni bonne ni mauvaise : tout dépend de l'usage. Un couteau sert à cuisiner ou à blesser." },
        { q: "Quelle est la limite de l'idée de neutralité ?", r: "Certaines techniques sont si puissantes que leurs effets dépassent nos intentions : la bombe atomique, le réchauffement climatique." },
        { q: "Que demande le principe de responsabilité de Jonas ?", r: "Agir de façon que la vie humaine puisse continuer sur Terre, en pensant aux générations futures." },
      ],
      quiz: [
        { q: "Un marteau, qui prolonge la main et dépend d'elle, est :", choix: ["une machine", "une technologie", "un outil", "un robot"], bonne: 2, expl: "L'outil prolonge le geste ; la machine fonctionne avec sa propre énergie.", niv: 1 },
        { q: "Selon Bergson, l'homme est d'abord homo faber, c'est-à-dire :", choix: ["celui qui prie", "celui qui fabrique", "celui qui parle", "celui qui joue"], bonne: 1, expl: "Fabriquer des outils est, pour Bergson, le premier signe de l'intelligence.", niv: 1 },
        { q: "Dans le mythe de Prométhée, pourquoi l'homme a-t-il besoin de la technique ?", choix: ["Il veut dominer les dieux", "Il s'ennuie", "Il est plus fort que les animaux", "Il naît nu et sans défense"], bonne: 3, expl: "Oublié lors du partage des qualités, l'homme compense sa faiblesse par le feu et les techniques.", niv: 2 },
        { q: "Une machine à laver se distingue d'un outil parce qu'elle :", choix: ["a son propre moteur", "dépend de la main qui la tient", "est plus ancienne", "ne sert à rien"], bonne: 0, expl: "La machine peut remplacer le geste humain, l'outil seulement le prolonger.", niv: 1 },
        { q: "Un ouvrier qui serre le même boulon toute la journée sans savoir à quoi il sert est, selon Marx :", choix: ["libéré", "inventif", "aliéné", "artiste"], bonne: 2, expl: "Réduit à un rouage, il ne se reconnaît plus dans son travail : c'est l'aliénation.", niv: 2 },
        { q: "Quel exemple montre le mieux que la technique nous libère ?", choix: ["Le travail à la chaîne", "La surveillance des données", "La bombe atomique", "Le vaccin contre une maladie"], bonne: 3, expl: "La médecine nous libère d'une contrainte naturelle : la maladie.", niv: 2 },
        { q: "« Un couteau sert à cuisiner ou à blesser. » Cet exemple défend l'idée que la technique :", choix: ["est neutre, tout dépend de l'usage", "est mauvaise par nature, quel que soit l'usage", "n'a pas d'effet réel", "est toujours dangereuse"], bonne: 0, expl: "L'objet n'est ni bon ni mauvais : seul l'usage qu'on en fait l'est.", niv: 2 },
        { q: "Quelle objection fait-on à l'idée que la technique est neutre ?", choix: ["Les outils n'existent pas", "Les machines ne sont que des objets décoratifs", "Certaines techniques dépassent nos intentions", "Chaplin a interdit les usines"], bonne: 2, expl: "La bombe atomique ou le réchauffement climatique montrent des effets que personne ne maîtrise.", niv: 3 },
        { q: "Hans Jonas demande d'agir :", choix: ["sans penser à l'avenir", "pour que la vie humaine puisse continuer", "pour produire toujours plus de richesses", "en laissant faire les machines"], bonne: 1, expl: "Le principe de responsabilité vise les générations futures.", niv: 1 },
        { q: "Pour « La technique peut-elle être mauvaise ? », quelle première partie est la plus logique ?", choix: ["Elle est neutre : tout dépend de l'usage", "Chaplin était un grand cinéaste", "Les machines existent depuis l'Antiquité", "La technique est un cadeau des dieux aux hommes"], bonne: 0, expl: "On part de l'idée la plus courante (la neutralité), puis on la discute avec Marx et Jonas.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 7 La vérité
    {
      chapitre: 'philo-t-7',
      fiche: `## La vérité

### Définir la notion
- Une phrase est **vraie** quand elle est **conforme à la réalité** : « il pleut » est vrai s'il pleut vraiment.
- **Vérité ou réalité ?** La **réalité**, c'est ce qui existe. La **vérité** est une qualité de ce qu'on **dit** ou **pense** de la réalité.
- **Opinion ou savoir ?** L'**opinion** est un avis sans preuve (« je pense que… »). Le **savoir** est justifié par des **preuves** ou des démonstrations.
- **Sincérité ou vérité ?** On peut être **sincère** et se tromper : croire de bonne foi une fausse information.

### Pourquoi est-il difficile d'atteindre la vérité ?
- **Platon**, l'allégorie de la **caverne** : des prisonniers enchaînés ne voient que des ombres sur un mur et les prennent pour la réalité. Il faut un effort pour sortir et découvrir le vrai.
- Nos **sens** peuvent nous tromper : un bâton plongé dans l'eau paraît brisé.
- Nos **désirs** aussi : on croit plus facilement ce qui nous arrange.
- Exemple : les **fausses informations** circulent vite sur les réseaux, car elles choquent ou confirment ce qu'on pense déjà.

### Comment chercher la vérité ?
- **Descartes** : **douter** de tout ce qui n'est pas certain. Une seule chose résiste au doute : « **Je pense, donc je suis** ». Même si je me trompe sur tout, pour me tromper, il faut que je pense.
- **Socrate** : « Je sais que je ne sais rien. » Reconnaître son ignorance est le premier pas vers la vérité. Il cherche le vrai par le **dialogue**.
- La **science** cherche la vérité par l'**expérience** et la **démonstration**. Pour **Popper**, une théorie scientifique doit pouvoir être **testée** et éventuellement réfutée.

### Débattre, est-ce chercher la vérité ?
- Un **débat** peut faire progresser : chacun corrige les erreurs de l'autre (le dialogue socratique).
- Mais on débat souvent pour **gagner**, pas pour trouver le vrai : les **sophistes**, dans l'Antiquité, apprenaient à convaincre de n'importe quoi.
- Exemple : un débat télévisé où chacun coupe la parole à l'autre cherche plus à séduire le public qu'à trouver le vrai.

### Faut-il toujours dire la vérité ?
- **Kant** : mentir est **toujours** interdit, même pour sauver un ami poursuivi par un assassin. Si chacun mentait, plus personne ne pourrait se faire confiance.
- **Benjamin Constant** lui répond : on ne doit la vérité qu'à ceux qui ont **droit** à la vérité ; l'assassin n'y a pas droit.
- Dans la vie courante : faut-il annoncer brutalement une mauvaise nouvelle ? La vérité peut blesser ; le **tact** compte aussi.

### À retenir pour le bac
- Vrai : conforme à la réalité. Opinion et savoir ; sincérité et vérité.
- Platon (la caverne), Descartes (le doute, « je pense, donc je suis »), Socrate (je sais que je ne sais rien).
- Kant contre Constant sur le mensonge.
- Sujets : « Débattre, est-ce chercher la vérité ? » (2026), « Faut-il toujours dire la vérité ? ».`,
      cartes: [
        { q: "Quand une phrase est-elle vraie ?", r: "Quand elle est conforme à la réalité : « il pleut » est vrai s'il pleut vraiment." },
        { q: "Vérité ou réalité ?", r: "La réalité, c'est ce qui existe. La vérité est une qualité de ce qu'on dit ou pense de la réalité." },
        { q: "Opinion ou savoir ?", r: "L'opinion est un avis sans preuve. Le savoir est justifié par des preuves ou des démonstrations." },
        { q: "Peut-on être sincère et se tromper ?", r: "Oui : on peut croire de bonne foi une information fausse. Sincérité et vérité ne sont pas la même chose." },
        { q: "Que raconte l'allégorie de la caverne (Platon) ?", r: "Des prisonniers ne voient que des ombres et les prennent pour la réalité. Atteindre le vrai demande un effort." },
        { q: "Pourquoi nos sens peuvent-ils nous tromper ?", r: "Ils donnent des apparences : un bâton plongé dans l'eau paraît brisé alors qu'il est droit." },
        { q: "Pourquoi les fausses informations circulent-elles vite ?", r: "Elles choquent ou confirment ce qu'on pense déjà : on croit plus facilement ce qui nous arrange." },
        { q: "Que résiste au doute de Descartes ?", r: "« Je pense, donc je suis » : même si je me trompe, il faut que je pense pour me tromper." },
        { q: "Que veut dire Socrate par « je sais que je ne sais rien » ?", r: "Reconnaître son ignorance est le premier pas pour chercher la vérité, par le dialogue." },
        { q: "Que demande Popper à une théorie scientifique ?", r: "Qu'elle puisse être testée par l'expérience et éventuellement réfutée." },
        { q: "Qui étaient les sophistes ?", r: "Des maîtres de l'Antiquité qui apprenaient à convaincre, même de choses fausses : débattre pour gagner, pas pour le vrai." },
        { q: "Kant ou Constant sur le mensonge ?", r: "Kant : ne jamais mentir, même à un assassin. Constant : on ne doit la vérité qu'à ceux qui y ont droit." },
      ],
      quiz: [
        { q: "« Il pleut » est une phrase vraie si :", choix: ["il pleut vraiment", "tout le monde le croit", "je le dis sincèrement", "un journal l'annonce"], bonne: 0, expl: "La vérité est l'accord entre ce qu'on dit et la réalité.", niv: 1 },
        { q: "« Je pense que les extraterrestres existent, mais je n'ai aucune preuve. » C'est :", choix: ["un savoir", "une démonstration", "une expérience", "une opinion"], bonne: 3, expl: "Un avis sans preuve est une opinion, pas un savoir.", niv: 1 },
        { q: "Tom partage une fausse information en y croyant vraiment. Il est :", choix: ["menteur", "sophiste", "sincère mais dans l'erreur", "dans la vérité puisqu'il y croit"], bonne: 2, expl: "On peut être sincère et se tromper : la sincérité ne garantit pas la vérité.", niv: 2 },
        { q: "Dans l'allégorie de la caverne, les ombres représentent :", choix: ["les dieux", "les apparences prises pour la réalité", "la science", "les autres prisonniers"], bonne: 1, expl: "Les prisonniers confondent les apparences avec le réel.", niv: 1 },
        { q: "Quelle vérité résiste au doute de Descartes ?", choix: ["Le monde existe", "Mes sens disent vrai", "Dieu est bon", "Je pense, donc je suis"], bonne: 3, expl: "Même si je doute de tout, il faut que je pense pour douter.", niv: 1 },
        { q: "Un élève répond « je ne sais pas, mais cherchons ensemble ». Il imite :", choix: ["Socrate", "Calliclès", "un sophiste", "Kant"], bonne: 0, expl: "Socrate reconnaît son ignorance et cherche le vrai par le dialogue.", niv: 2 },
        { q: "Un avocat apprend à convaincre le jury, que son client soit coupable ou non. Il ressemble aux :", choix: ["stoïciens", "scientifiques", "sophistes", "prisonniers de la caverne"], bonne: 2, expl: "Les sophistes enseignaient l'art de convaincre, sans souci du vrai.", niv: 2 },
        { q: "Selon Kant, peut-on mentir à un assassin pour sauver un ami ?", choix: ["Oui, car la vie de l'ami compte plus que tout", "Non, mentir est interdit dans tous les cas", "Oui, si personne ne le sait", "Cela dépend de ce que l'ami demande"], bonne: 1, expl: "Pour Kant, le devoir de vérité n'admet aucune exception.", niv: 2 },
        { q: "Pour Benjamin Constant, on doit la vérité :", choix: ["à tout le monde sans exception", "seulement aux juges", "à ceux qui y ont droit", "à sa famille d'abord"], bonne: 2, expl: "L'assassin, qui veut nuire, n'a pas droit à la vérité.", niv: 3 },
        { q: "Pour « Débattre, est-ce chercher la vérité ? », quelle distinction est la plus utile ?", choix: ["Opinion et réalité", "Débattre pour gagner ou pour comprendre", "Le dialogue de Platon et le doute de Descartes", "Parler et écrire"], bonne: 1, expl: "Le dialogue socratique cherche le vrai ; le débat des sophistes cherche la victoire.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 8 Méthode
    {
      chapitre: 'philo-t-8',
      fiche: `## Méthode : la dissertation et l'explication de texte guidée

### L'épreuve en voie technologique
- **4 heures**, **coefficient 4**. On choisit **un seul** des trois sujets : deux sujets de **dissertation** ou une **explication de texte**.
- En voie technologique, le texte est accompagné de **questions** qui guident la lecture. On y répond **dans l'ordre**, en phrases rédigées.
- Le correcteur ne note pas des connaissances récitées : il note une **réflexion** claire, argumentée et illustrée par des **exemples précis**.

### La dissertation en 5 étapes
- **1. Analyser le sujet** (30 minutes) : définir chaque mot, y compris les petits (« toujours », « peut-on », « nous »).
- **2. Trouver le problème** : montrer que la réponse n'est pas évidente. « D'un côté… pourtant… ».
- **3. Faire le plan** : deux ou trois parties qui **avancent**. Partie 1 : la réponse la plus évidente. Partie 2 : sa limite. Partie 3 : une réponse nuancée, souvent grâce à une **distinction** (légal et légitime, contrainte et obligation…).
- **4. Rédiger** : dans chaque paragraphe, une **idée**, une **explication**, un **exemple**, si possible un **auteur**.
- **5. Conclure** : répondre clairement à la question, en rappelant le chemin parcouru.
- Introduction : une **accroche** concrète, les définitions, le problème, l'annonce du plan.

### L'explication de texte guidée : lire avant de répondre
- **Lire le texte trois fois**, numéroter les phrases ou les lignes, entourer les **connecteurs** (mais, donc, or, ainsi).
- Repérer le **thème** (de quoi parle le texte), la **thèse** (ce que l'auteur affirme) et la **thèse adverse** (ce qu'il critique).
- Les questions ne sont pas indépendantes : elles suivent le texte du début à la fin. Lire **toutes** les questions avant de commencer.

### Question 1 : la thèse et les étapes
- Écrire la thèse en **une phrase**, avec ses propres mots : « L'auteur soutient que… ».
- Découper le texte en **2 ou 3 étapes** et donner à chacune une **fonction** : constat, critique, exemple, conclusion. Citer les lignes.

### Question 2 : expliquer une phrase ou une expression
- **Citer** la phrase, puis la **reformuler** simplement.
- **Définir** les mots importants.
- Dire **pourquoi** l'auteur l'affirme (le lien avec la phrase d'avant).
- Donner un **exemple concret** qui l'illustre.

### Question 3 : la question de réflexion
- C'est une **petite dissertation** : une question liée au problème du texte (souvent la notion du programme).
- Annoncer sa réponse, l'**argumenter** avec des exemples, envisager une **objection**, conclure. On peut s'appuyer sur le texte, mais il faut aussi apporter ses propres idées.

### Gérer les 4 heures
- Dissertation : 1 h de brouillon, 2 h 30 de rédaction, 30 minutes de relecture.
- Explication : 1 h de lecture et de brouillon, puis environ 1 h par grande question, 15 minutes de relecture.

### À retenir pour le bac
- Toujours définir les mots du sujet et poser un problème.
- Un paragraphe = idée, explication, exemple.
- Explication guidée : thèse en une phrase, étapes avec lignes, phrases expliquées avec un exemple, question 3 argumentée.
- Ne jamais réciter un cours sans répondre à la question posée.`,
      cartes: [
        { q: "Combien de temps dure l'épreuve de philosophie en voie technologique, et quel est son coefficient ?", r: "4 heures, coefficient 4." },
        { q: "Combien de sujets choisit-on à l'épreuve ?", r: "Un seul, parmi trois : deux sujets de dissertation et une explication de texte." },
        { q: "Qu'a de particulier l'explication de texte en voie technologique ?", r: "Le texte est accompagné de questions qui guident la lecture ; on y répond dans l'ordre, en phrases rédigées." },
        { q: "Quelle est la première étape d'une dissertation ?", r: "Analyser le sujet : définir chaque mot, y compris les petits mots comme « toujours » ou « peut-on »." },
        { q: "Qu'est-ce que le problème d'un sujet ?", r: "La difficulté qui fait que la réponse n'est pas évidente : « D'un côté… pourtant… »." },
        { q: "Comment construire un plan qui avance ?", r: "Partie 1 : la réponse évidente. Partie 2 : sa limite. Partie 3 : une réponse nuancée, souvent grâce à une distinction." },
        { q: "Que contient un bon paragraphe ?", r: "Une idée, son explication, un exemple précis et, si possible, un auteur." },
        { q: "Que mettre dans l'introduction ?", r: "Une accroche concrète, les définitions, le problème, puis l'annonce du plan." },
        { q: "Thème ou thèse ?", r: "Le thème, c'est le sujet dont parle le texte. La thèse, c'est ce que l'auteur affirme sur ce sujet." },
        { q: "Comment répondre à la question 1 (thèse et étapes) ?", r: "Écrire la thèse en une phrase avec ses mots, puis découper le texte en 2 ou 3 étapes, en citant les lignes." },
        { q: "Comment expliquer une phrase du texte (question 2) ?", r: "La citer, la reformuler, définir les mots importants, dire pourquoi l'auteur l'affirme, donner un exemple." },
        { q: "Qu'est-ce que la question 3 ?", r: "Une question de réflexion liée au texte : une petite dissertation, avec une réponse argumentée, des exemples et une objection." },
      ],
      quiz: [
        { q: "À l'épreuve, combien de sujets faut-il traiter ?", choix: ["Les trois", "Deux sur trois", "Un seul", "Une dissertation et le texte"], bonne: 2, expl: "On choisit un seul sujet parmi les trois proposés.", niv: 1 },
        { q: "Dans un sujet de dissertation, quels mots faut-il définir ?", choix: ["Tous les mots, même les petits", "Le nom de la notion", "Les verbes difficiles", "Les mots que l'on connaît"], bonne: 0, expl: "Un petit mot comme « toujours » ou « peut-on » change tout le sens du sujet.", niv: 1 },
        { q: "« L'auteur parle de la technique. » Cette phrase donne :", choix: ["la thèse", "le problème", "une étape", "le thème"], bonne: 3, expl: "C'est le sujet du texte ; la thèse dirait ce que l'auteur affirme sur la technique.", niv: 2 },
        { q: "Quelle phrase formule le mieux un problème ?", choix: ["Je vais parler de la liberté", "La loi limite la liberté, pourtant elle la protège", "Rousseau a écrit Du contrat social", "La liberté est une notion très importante pour l'homme"], bonne: 1, expl: "Le problème oppose deux idées défendables : « … pourtant … ».", niv: 2 },
        { q: "Pour la question 1, comment écrire la thèse ?", choix: ["En une phrase, avec ses mots", "En recopiant le texte entier", "En donnant son avis personnel", "En citant le titre de l'œuvre"], bonne: 0, expl: "« L'auteur soutient que… » : une phrase claire, reformulée.", niv: 1 },
        { q: "Pour expliquer une phrase du texte, que faut-il faire après l'avoir citée ?", choix: ["La recopier une seconde fois", "Dire qu'on est d'accord avec l'auteur", "La reformuler et donner un exemple", "Passer à la phrase suivante"], bonne: 2, expl: "Reformuler, définir, justifier, illustrer : c'est cela, expliquer.", niv: 2 },
        { q: "Un plan « oui / non / peut-être » est souvent critiqué parce que :", choix: ["la copie est trop courte", "il oublie l'introduction et la conclusion", "il cite trop d'auteurs", "ses parties se contredisent"], bonne: 3, expl: "Chaque partie doit tenir compte de la précédente et aller plus loin.", niv: 3 },
        { q: "Pourquoi lire toutes les questions avant de répondre à la première ?", choix: ["Pour recopier les questions", "Elles suivent le texte et se complètent", "Pour choisir celle que l'on peut sauter", "Le correcteur l'exige par écrit"], bonne: 1, expl: "Les questions ne sont pas indépendantes : elles guident la lecture du texte entier.", niv: 2 },
        { q: "Dans la question 3, quelle erreur faut-il éviter ?", choix: ["Donner des exemples précis", "Envisager une objection", "Répondre sans jamais argumenter", "Conclure clairement"], bonne: 2, expl: "La question 3 est une petite dissertation : une réponse non argumentée ne vaut presque rien.", niv: 3 },
        { q: "Laquelle de ces accroches est la meilleure pour « La technique nous rend-elle plus libres ? » ?", choix: ["Le téléphone nous relie, mais nous rend dépendants", "Depuis la nuit des temps, l'homme utilise des outils", "La technique est un sujet très important", "Je vais parler de la technique"], bonne: 0, expl: "Une accroche concrète qui annonce déjà la tension du sujet ; les autres sont vides.", niv: 3 },
      ],
    },
  ],
  methode: [
    {
      id: 'philo-t-m1', mat: 'philo-t', titre: "Dissertation : analyser le sujet et trouver le problème",
      formules: ["Peut-on… ?", "Faut-il… ?", "… est-il / est-elle… ?", "Avons-nous besoin de… ?", "…, est-ce… ?"],
      vu: ["Bac 2026 : « Débattre, est-ce chercher la vérité ? »", "Bac 2026 : « La technique peut-elle être mauvaise ? »", "Bac 2025 : « Sommes-nous libres en toutes circonstances ? », « Avons-nous besoin d'art ? »", "Bac 2024 : « La nature est-elle hostile à l'homme ? », « L'artiste est-il maître de son travail ? »"],
      pts: "Toute la note de la dissertation en dépend : sans problème, la copie devient une récitation",
      attendu: "Le correcteur veut voir que tu as compris la question posée : chaque mot est défini, et tu montres que la réponse n'est pas évidente, parce que deux réponses opposées semblent toutes les deux défendables.",
      etapes: ["Recopier le sujet et entourer chaque mot, même les petits (peut-on, toujours, nous).", "Écrire une définition simple de chaque mot important.", "Écrire la réponse spontanée, celle que tout le monde donnerait.", "Chercher un exemple qui contredit cette réponse.", "Écrire le problème : « D'un côté… pourtant… Alors… ? »"],
      mots: ["en apparence", "pourtant", "or", "il faut distinguer", "le problème est donc"],
      pieges: ["Réciter tout le cours sur la notion sans répondre à la question.", "Oublier un petit mot du sujet, comme « toujours » ou « en toutes circonstances ».", "Répondre oui ou non dès la première ligne.", "Recopier le sujet en croyant écrire le problème."],
      cas: "Sujet d'entraînement.",
      question: "Analyse le sujet « La technique peut-elle être mauvaise ? » et écris son problème.",
      modele: "La technique désigne l'ensemble des outils, machines et savoir-faire que l'homme invente pour transformer la nature. « Mauvaise » peut vouloir dire nuisible (qui fait du mal) ou moralement condamnable (qui est mal en elle-même). « Peut-elle » demande si c'est possible, pas si c'est toujours le cas. Spontanément, on répond que la technique n'est ni bonne ni mauvaise : un couteau sert à cuisiner ou à blesser, tout dépend de l'usage. Pourtant, certaines techniques semblent dangereuses quel que soit l'usage, comme la bombe atomique, ou produisent des effets que personne n'a voulus, comme le réchauffement climatique. Le problème est donc le suivant : la technique est-elle seulement un moyen neutre dont l'homme est responsable, ou peut-elle échapper à nos intentions au point de devenir mauvaise par elle-même ?",
      grille: ["J'ai défini « technique » et les deux sens de « mauvaise ».", "J'ai tenu compte du mot « peut-elle ».", "J'ai écrit la réponse spontanée avec un exemple.", "Mon problème oppose deux réponses défendables."],
    },
    {
      id: 'philo-t-m2', mat: 'philo-t', titre: "Dissertation : le plan, l'introduction et les paragraphes",
      formules: ["Plan en deux ou trois parties qui avancent", "Un paragraphe = une idée, une explication, un exemple"],
      vu: ["Toutes les sessions : deux sujets de dissertation au choix"],
      pts: "La construction et les exemples font une grande partie de la note",
      attendu: "Une introduction qui pose le problème, un plan qui progresse (chaque partie tient compte de la précédente) et des paragraphes où chaque idée est expliquée et illustrée par un exemple précis.",
      etapes: ["Partie 1 : défendre sérieusement la réponse spontanée.", "Partie 2 : montrer sa limite avec un exemple ou un auteur.", "Partie 3 : proposer une réponse nuancée grâce à une distinction.", "Introduction : accroche concrète, définitions, problème, annonce du plan.", "Dans chaque paragraphe : idée, explication, exemple, auteur si possible."],
      mots: ["d'abord", "cependant", "c'est pourquoi", "par exemple", "en définitive"],
      pieges: ["Un plan oui / non qui se contredit sans avancer.", "Une liste d'auteurs résumés sans argument.", "Des exemples vagues (« de nos jours, beaucoup de gens… »).", "Une accroche vide (« depuis la nuit des temps »)."],
      cas: "Sujet : « La technique nous rend-elle plus libres ? »",
      question: "Écris l'introduction et le plan détaillé en trois parties.",
      modele: "Introduction : un téléphone nous permet d'appeler n'importe qui, de nous orienter, de payer ; pourtant, beaucoup avouent ne plus pouvoir s'en passer. La technique, ensemble des moyens inventés pour transformer la nature, semble nous libérer de nombreuses contraintes. Mais être libre, ce n'est pas seulement avoir plus de possibilités : c'est aussi décider soi-même. La technique nous libère-t-elle, ou crée-t-elle de nouvelles dépendances ? Nous verrons d'abord qu'elle nous délivre de contraintes naturelles, puis qu'elle peut nous asservir, avant de montrer que notre liberté dépend de l'usage que nous en faisons. Plan : I. La technique libère : l'homme, faible par nature, survit grâce à elle (Prométhée) ; elle soigne, protège, épargne les travaux pénibles (Descartes : maîtres et possesseurs de la nature). II. Mais elle peut asservir : l'ouvrier devient un rouage de la machine (Marx, « Les Temps modernes » de Chaplin) ; les écrans captent notre attention. III. La technique est un moyen : elle rend libres ceux qui gardent le choix des buts (distinction entre les fins et les moyens ; responsabilité selon Jonas).",
      grille: ["Mon accroche est un exemple concret.", "J'ai défini technique et liberté.", "Mes trois parties avancent au lieu de se contredire.", "Chaque partie a au moins un exemple précis et un auteur."],
    },
    {
      id: 'philo-t-m3', mat: 'philo-t', titre: "Explication guidée : dégager la thèse et les étapes (question 1)",
      formules: ["Quelle est la thèse du texte ?", "Dégagez l'idée principale du texte et les étapes de son argumentation", "Montrez comment le texte est construit"],
      vu: ["Bac 2025 : texte d'Adam Smith (Théorie des sentiments moraux)", "Bac 2024 : texte de Platon (Les Lois)"],
      pts: "La première question ouvre la copie : si la thèse est fausse, tout le reste s'en ressent",
      attendu: "Le correcteur attend la thèse en une phrase, avec tes propres mots, puis le mouvement du texte en 2 ou 3 étapes, chacune avec ses lignes et son rôle. Les corrigés officiels valorisent les copies qui reconstituent la progression du raisonnement.",
      etapes: ["Lire le texte trois fois et numéroter les phrases.", "Entourer les connecteurs (mais, or, donc, ainsi) : ils marquent les étapes.", "Repérer le thème, la thèse et l'idée que l'auteur critique.", "Écrire : « L'auteur soutient que… ».", "Pour chaque étape : lignes, idée, rôle (constat, objection, exemple, conclusion)."],
      mots: ["l'auteur soutient que", "dans un premier temps", "le connecteur « mais » marque", "il en conclut que", "thèse adverse"],
      pieges: ["Confondre le thème (de quoi parle le texte) et la thèse (ce qu'il affirme).", "Paraphraser le texte phrase par phrase.", "Oublier de donner les lignes ou le rôle de chaque étape.", "Donner son avis dès cette question."],
      cas: "Texte d'entraînement écrit pour l'exercice : (1) Celui qui a été blessé croit savoir mieux que personne ce qui lui est dû. (2) C'est pourtant lui qui le sait le moins : la douleur grossit l'offense, et la colère réclame plus qu'elle n'a perdu. (3) Voilà pourquoi les hommes ont confié à un tiers le soin de juger. (4) Le juge n'a pas souffert ; il peut donc mesurer. (5) Renoncer à se venger n'est pas renoncer à la justice : c'est lui permettre enfin d'exister.",
      question: "Dégage la thèse du texte et les étapes de son argumentation.",
      modele: "Thèse : l'auteur soutient que la victime ne peut pas juger elle-même ce qui lui est dû, et que la justice n'existe vraiment que si l'on confie le jugement à un tiers neutre. Étapes : phrase 1, l'auteur expose l'idée qu'il va critiquer : la victime croit être la mieux placée pour juger. Phrases 2 à 4, le connecteur « pourtant » marque la critique : la douleur et la colère font exagérer, c'est pourquoi un juge qui n'a pas souffert peut mesurer la peine. Phrase 5, il conclut : renoncer à la vengeance, ce n'est pas perdre la justice, c'est la rendre possible.",
      grille: ["Ma thèse tient en une phrase, avec mes mots.", "J'ai repéré l'idée critiquée (phrase 1).", "Chaque étape a ses lignes et son rôle.", "J'ai utilisé les connecteurs du texte."],
    },
    {
      id: 'philo-t-m4', mat: 'philo-t', titre: "Explication guidée : expliquer une phrase (question 2)",
      formules: ["Expliquez : « … »", "Pourquoi l'auteur affirme-t-il que… ?", "Que signifie l'expression « … » ?"],
      vu: ["Toutes les sessions : deux ou trois phrases du texte à expliquer"],
      pts: "C'est souvent la question qui rapporte le plus : chaque phrase expliquée compte",
      attendu: "Pour chaque phrase demandée, le correcteur veut voir que tu la comprends : reformulation simple, définition des mots clés, lien avec le reste du texte, et un exemple concret qui l'illustre.",
      etapes: ["Citer la phrase entre guillemets.", "La reformuler avec des mots simples : « Autrement dit… ».", "Définir les mots importants.", "Dire pourquoi l'auteur l'affirme : quel lien avec la phrase d'avant ou d'après ?", "Donner un exemple concret, tiré de la vie courante ou de l'actualité."],
      mots: ["autrement dit", "c'est-à-dire", "l'auteur veut montrer que", "par exemple", "cela s'explique par"],
      pieges: ["Recopier la phrase sans l'expliquer.", "Donner un exemple sans le relier à la phrase.", "Expliquer une autre phrase que celle demandée.", "Oublier de définir le mot difficile."],
      cas: "Même texte d'entraînement : (2) C'est pourtant lui qui le sait le moins : la douleur grossit l'offense, et la colère réclame plus qu'elle n'a perdu. (4) Le juge n'a pas souffert ; il peut donc mesurer.",
      question: "Explique : « la colère réclame plus qu'elle n'a perdu ».",
      modele: "Autrement dit, la personne en colère demande une réparation plus grande que le tort qu'elle a subi. La colère est une émotion violente qui pousse à répondre tout de suite au mal reçu. L'auteur l'affirme pour justifier sa critique de la phrase 1 : si la victime exagère toujours ce qu'on lui doit, elle ne peut pas être un bon juge. Par exemple, un automobiliste dont on a rayé la voiture peut vouloir crever les quatre pneus de l'autre : il rend plus qu'il n'a reçu. C'est pourquoi l'auteur dit ensuite qu'un juge, qui n'a pas souffert, peut « mesurer », c'est-à-dire proportionner la peine à la faute.",
      grille: ["J'ai reformulé la phrase avec mes mots.", "J'ai défini « colère ».", "J'ai relié la phrase à ce qui précède et à ce qui suit.", "J'ai donné un exemple concret."],
    },
    {
      id: 'philo-t-m5', mat: 'philo-t', titre: "Explication guidée : la question de réflexion (question 3)",
      formules: ["Pensez-vous que… ?", "Peut-on… ?", "Une question sur la notion du texte, posée comme un sujet de dissertation"],
      vu: ["Toutes les sessions : dernière question du texte"],
      pts: "Une petite dissertation : elle compte souvent autant que les explications",
      attendu: "Une réponse personnelle et argumentée, en deux temps au moins : une idée défendue avec un exemple, puis une objection ou une nuance, et une conclusion claire. Tu peux t'appuyer sur le texte, mais il faut aussi apporter tes propres arguments.",
      etapes: ["Définir les mots de la question.", "Annoncer sa réponse en une phrase.", "Premier argument, expliqué et illustré.", "Une objection ou une limite, avec un exemple.", "Conclusion : réponse nuancée."],
      mots: ["certes", "cependant", "on pourrait objecter que", "il faut distinguer", "ainsi"],
      pieges: ["Répondre en deux lignes.", "Résumer de nouveau le texte au lieu de réfléchir.", "Donner un avis sans aucun argument (« je pense que oui car c'est vrai »).", "Oublier la conclusion."],
      cas: "Même texte d'entraînement sur la vengeance et la justice.",
      question: "Peut-on se faire justice soi-même ?",
      modele: "Se faire justice soi-même, c'est punir celui qui nous a fait du tort sans passer par la loi ni par un juge. Certes, on peut le comprendre quand la justice est trop lente ou absente : une victime abandonnée a le sentiment qu'on ne la protège pas. Cependant, comme le montre le texte, celui qui a souffert n'est pas en état de juger : la colère fait exagérer, et la vengeance appelle une autre vengeance, comme dans les querelles de familles qui durent des générations. Un juge neutre, au contraire, applique la même loi à tous et proportionne la peine. On peut donc seulement se défendre face à un danger immédiat (la légitime défense), mais punir est le rôle de la justice : sans tiers, il n'y a plus de justice, seulement la loi du plus fort.",
      grille: ["J'ai défini « se faire justice soi-même ».", "J'ai un argument expliqué avec un exemple.", "J'ai une objection ou une nuance.", "Ma conclusion répond clairement à la question."],
    },
  ],
  sujets: [
    {
      id: 'philo-t-s1', matiere: 'philo-t', titre: "Sujet d'entraînement 1 : explication de texte guidée", duree: 240,
      enonce: `## Explication de texte (sujet d'entraînement)

Texte écrit pour l'exercice, sur le modèle de l'épreuve de la voie technologique. Les phrases sont numérotées pour t'aider.

### Texte
(1) On répète volontiers que les machines nous ont libérés. (2) Il est vrai que la machine à laver a rendu des heures à ceux qui lavaient le linge à la main, et que le moteur a remplacé les bras dans les travaux les plus durs. (3) Mais un homme n'est pas libre parce qu'il a moins d'efforts à fournir ; il est libre lorsqu'il décide lui-même de ce qu'il fait de son temps. (4) Or le temps gagné par une machine est souvent aussitôt repris par une autre : celui qui n'a plus à laver son linge passe ses soirées devant un écran conçu pour le retenir. (5) Ainsi l'objet qui devait nous servir finit par nous commander, et nous lui obéissons d'autant mieux que nous croyons l'avoir choisi. (6) Il ne faut pas pour autant maudire les machines, ni rêver d'un retour à la charrue. (7) La technique n'est pas un maître par elle-même ; elle le devient quand nous cessons de nous demander à quoi elle doit servir. (8) Être libre avec la technique, c'est donc garder la main sur les fins, et ne laisser aux machines que les moyens.

### Questions
Pour expliquer ce texte, réponds aux questions suivantes, qui sont faites pour guider ta lecture. Elles ne sont pas indépendantes les unes des autres : étudie d'abord le texte dans son ensemble.

- **1.** Dégage la thèse du texte et les étapes de son argumentation.
- **2. a)** Explique : « un homme n'est pas libre parce qu'il a moins d'efforts à fournir ».
- **2. b)** Pourquoi l'auteur dit-il que « nous lui obéissons d'autant mieux que nous croyons l'avoir choisi » ?
- **2. c)** Explique la phrase 8 en distinguant les fins et les moyens.
- **3.** La technique nous rend-elle plus libres ?`,
      corrige: `## Corrigé (sujet d'entraînement)

### Question 1 : thèse et étapes
- **Thèse** : l'auteur soutient que la technique ne nous rend pas libres par elle-même ; elle nous libère seulement si nous gardons le choix des buts, sinon elle nous domine.
- **Étape 1 (phrases 1 et 2)** : il expose l'opinion courante et lui accorde une part de vérité : les machines épargnent du temps et de la fatigue (machine à laver, moteur).
- **Étape 2 (phrases 3 à 5)** : le connecteur « mais » marque la critique. Avoir moins d'efforts à faire n'est pas être libre ; le temps gagné est repris par d'autres machines, qui finissent par nous commander.
- **Étape 3 (phrases 6 à 8)** : il refuse de condamner la technique et conclut : elle devient un maître seulement quand nous oublions à quoi elle doit servir.

### Question 2 a)
- Autrement dit, être soulagé d'un travail pénible ne suffit pas pour être libre. L'**effort** est la peine qu'on se donne ; la **liberté** est ici le pouvoir de décider soi-même.
- L'auteur distingue donc le **confort** et la **liberté** : un prisonnier bien nourri n'a pas d'efforts à faire, et il n'est pas libre pour autant.
- Exemple : une personne qui a un robot aspirateur gagne du temps, mais si son patron l'appelle à toute heure sur son téléphone, elle ne décide pas de ce temps.

### Question 2 b)
- L'objet « nous commande » : il décide à notre place de l'emploi de notre temps (l'écran « conçu pour nous retenir »).
- Nous lui obéissons « d'autant mieux » que nous croyons l'avoir choisi : comme nous pensons agir librement, nous ne voyons pas la dépendance et nous ne cherchons pas à nous en défaire.
- On peut rapprocher cette idée de **Spinoza** : les hommes se croient libres parce qu'ils sont conscients de leurs désirs mais ignorent ce qui les cause. Exemple : les vidéos proposées sans fin par une application, que l'on croit choisir.

### Question 2 c)
- Les **fins** sont les buts que l'on poursuit (se soigner, apprendre, voir ses proches). Les **moyens** sont ce qui permet de les atteindre (un médicament, un ordinateur, une voiture).
- « Garder la main sur les fins », c'est décider nous-mêmes de ce que nous voulons ; « laisser aux machines les moyens », c'est les utiliser comme des outils au service de ces buts.
- Exemple : utiliser un GPS pour aller voir un ami (moyen au service d'une fin choisie) n'est pas la même chose que passer la soirée à faire défiler des vidéos sans l'avoir décidé (le moyen devient la fin).

### Question 3 : la technique nous rend-elle plus libres ?
- **Définitions** : la technique est l'ensemble des moyens inventés pour transformer la nature ; être libre, c'est pouvoir agir et décider soi-même.
- **D'abord, oui** : l'homme, faible par nature, survit grâce à la technique (mythe de **Prométhée**). Elle nous libère de contraintes naturelles : la maladie (vaccins), le froid, les travaux pénibles. **Descartes** espérait qu'elle nous rende « comme maîtres et possesseurs de la nature ».
- **Cependant**, elle peut asservir : chez **Marx**, l'ouvrier devient un rouage de la machine (« Les Temps modernes » de Chaplin). Aujourd'hui, les écrans captent notre attention, et nos données sont surveillées.
- **Conclusion** : la technique augmente nos possibilités, mais elle ne nous rend libres que si nous gardons le choix des buts et pensons à ses conséquences (**Jonas** et la responsabilité). C'est l'usage réfléchi, et non la technique seule, qui rend libre.

### Erreurs fréquentes
- Confondre le thème (la technique) et la thèse (elle ne libère que si nous gardons les fins).
- Expliquer la phrase 3 sans exemple.
- Répondre à la question 3 en deux lignes ou en résumant de nouveau le texte.`,
      grille: [
        { c: "Question 1 : thèse exacte, en une phrase, et trois étapes avec lignes et rôle", pts: 5 },
        { c: "Question 2 a) : effort et liberté distingués, avec un exemple", pts: 3 },
        { c: "Question 2 b) : illusion du choix expliquée, avec un exemple", pts: 3 },
        { c: "Question 2 c) : fins et moyens définis et illustrés", pts: 3 },
        { c: "Question 3 : réponse argumentée, avec exemples, objection et conclusion", pts: 5 },
        { c: "Expression claire et rédigée", pts: 1 },
      ],
    },
    {
      id: 'philo-t-s2', matiere: 'philo-t', titre: "Sujet d'entraînement 2 : dissertation", duree: 240,
      enonce: `## Dissertation (sujet d'entraînement)

Sujet d'entraînement sur le modèle de l'épreuve. À l'examen, on choisit entre deux sujets de dissertation et une explication de texte.

### Sujet
Faut-il toujours dire la vérité ?`,
      corrige: `## Corrigé (sujet d'entraînement)

### Analyse du sujet
- **Faut-il** : est-ce un devoir moral ? Ce n'est pas la même question que « est-ce utile ? ».
- **Toujours** : dans tous les cas, sans exception.
- **Dire la vérité** : dire ce que l'on croit vrai. Le contraire est le **mensonge** (dire ce que l'on sait faux pour tromper), pas l'**erreur** (se tromper de bonne foi).
- Distinction utile : **se taire** n'est pas **mentir**.

### Problème
D'un côté, dire la vérité semble un devoir : sans elle, personne ne pourrait faire confiance à personne. Pourtant, la vérité peut blesser, ou mettre quelqu'un en danger. Le devoir de vérité admet-il des exceptions ?

### Plan possible
I. Dire la vérité est un devoir.
- Le mensonge détruit la **confiance** : si chacun mentait, on ne pourrait plus croire aucune parole, ni aucune promesse.
- **Kant** : mentir est interdit dans tous les cas, même à un assassin qui demande où se cache notre ami.

II. Mais la vérité n'est pas due à tous, ni n'importe comment.
- **Benjamin Constant** : on ne doit la vérité qu'à ceux qui y ont droit ; l'assassin n'y a pas droit.
- Exemples : pendant la Seconde Guerre mondiale, des familles ont caché des enfants juifs et menti aux policiers pour les sauver. Un médecin choisit les mots et le moment pour annoncer une maladie grave.

III. Il faut distinguer mentir, se taire et dire avec tact.
- Ne pas tout dire n'est pas mentir : on peut garder un secret ou se taire.
- Dire la vérité avec **tact**, c'est choisir le moment et les mots, sans tromper.
- La vérité reste la règle, car la confiance en dépend ; le mensonge ne se justifie que pour protéger une vie, et doit rester une exception.

### Conclusion
Il faut dire la vérité presque toujours, car la confiance entre les hommes en dépend. Mais ce devoir ne nous oblige ni à tout dire, ni à la dire à celui qui veut s'en servir pour nuire.

### Erreurs fréquentes
- Oublier le mot « toujours » et répondre seulement « oui, c'est mieux ».
- Confondre mentir et se tromper.
- Ne citer que Kant sans discuter sa position.`,
      grille: [
        { c: "Analyse du sujet : « faut-il », « toujours », mensonge et erreur définis", pts: 4 },
        { c: "Problème clair dans l'introduction", pts: 3 },
        { c: "Partie 1 argumentée, avec Kant et un exemple", pts: 4 },
        { c: "Partie 2 et partie 3 : exceptions, distinction mentir / se taire, exemples précis", pts: 6 },
        { c: "Conclusion qui répond à la question, expression claire", pts: 3 },
      ],
    },
  ],
};
