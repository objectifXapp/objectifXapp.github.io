// Philosophie — voie générale, terminale. Sources : voir matiere.sources.
// Programme : arrêté du 17 juillet 2019, BO spécial n° 8 du 25 juillet 2019 (17 notions, repères, auteurs),
// toujours en vigueur pour le bac 2027. Un chapitre par notion, dans l'ordre (alphabétique) du programme.
// Épreuve : 4 heures, coefficient 8, au choix entre deux sujets de dissertation et une explication de texte.
export default {
  matiere: {
    id: 'philo-g',
    nom: 'Philosophie',
    voie: 'generale',
    epreuve: { type: 'ecrit', duree: 240, coef: 8, quand: 'juin', note: 'Au choix : une dissertation (deux sujets proposés) ou une explication de texte' },
    sources: [
      'https://www.education.gouv.fr/bo/19/Special8/MENE1921247A.htm',
      'https://eduscol.education.fr/1735/programmes-et-ressources-en-philosophie-voie-generale-et-technologique',
      'https://www.education.gouv.fr/reussir-au-lycee/les-epreuves-du-baccalaureat-general-41562',
      'https://www.letudiant.fr/bac/corriges-du-bac/article/sujets-et-corriges-bac-philosophie-2026-serie-generale-et-technologique.html',
      'https://www.letudiant.fr/bac/direct-bac-2025-suivez-avec-nous-lepreuve-de-philo.html',
    ],
    chapitres: [
      { id: 'philo-g-1', t: 'L\'art', theme: 'Notion' },
      { id: 'philo-g-2', t: 'Le bonheur', theme: 'Notion' },
      { id: 'philo-g-3', t: 'La conscience', theme: 'Notion' },
      { id: 'philo-g-4', t: 'Le devoir', theme: 'Notion' },
      { id: 'philo-g-5', t: 'L\'État', theme: 'Notion' },
      { id: 'philo-g-6', t: 'L\'inconscient', theme: 'Notion' },
      { id: 'philo-g-7', t: 'La justice', theme: 'Notion' },
      { id: 'philo-g-8', t: 'Le langage', theme: 'Notion' },
      { id: 'philo-g-9', t: 'La liberté', theme: 'Notion' },
      { id: 'philo-g-10', t: 'La nature', theme: 'Notion' },
      { id: 'philo-g-11', t: 'La raison', theme: 'Notion' },
      { id: 'philo-g-12', t: 'La religion', theme: 'Notion' },
      { id: 'philo-g-13', t: 'La science', theme: 'Notion' },
      { id: 'philo-g-14', t: 'La technique', theme: 'Notion' },
      { id: 'philo-g-15', t: 'Le temps', theme: 'Notion' },
      { id: 'philo-g-16', t: 'Le travail', theme: 'Notion' },
      { id: 'philo-g-17', t: 'La vérité', theme: 'Notion' },
    ],
  },
  paquets: [
    // ---------------------------------------------------------------- 1 L'art
    {
      chapitre: 'philo-g-1',
      fiche: `## L'art

### Définir la notion
- Au sens large, l'**art** (du latin *ars*, en grec *technè*) désigne un **savoir-faire** : l'art du cuisinier, l'art de la guerre.
- Au sens moderne, les **beaux-arts** produisent des **œuvres** qui n'ont pas d'abord une utilité, mais visent la **beauté** ou l'expression. Une chaise sert à s'asseoir ; un tableau est fait pour être regardé.
- L'**artiste** crée une œuvre originale, l'**artisan** fabrique selon des règles connues un objet utile.
- L'**esthétique** est la partie de la philosophie qui étudie le beau et l'art.

### Thèse 1 : l'art imite, et c'est un problème (Platon)
- Pour **Platon** (« La République », livre X), le peintre qui peint un lit imite le lit du menuisier, qui imite lui-même l'**Idée** du lit. L'œuvre est une **copie de copie**, « éloignée de trois degrés » de la vérité.
- L'art flatte les passions et trompe : Platon se méfie des poètes dans la cité idéale.
- **Aristote** (« Poétique ») défend au contraire l'**imitation** (*mimèsis*) : l'homme apprend en imitant et prend plaisir à reconnaître. La tragédie produit la **catharsis**, une purification des passions (pitié et crainte).

### Thèse 2 : le beau, un jugement à part (Kant)
- Pour **Kant** (« Critique de la faculté de juger », 1790), le beau n'est ni l'agréable ni l'utile.
- Le jugement de goût est **désintéressé** : je n'ai pas besoin de posséder l'œuvre pour la trouver belle.
- Le beau est « ce qui plaît **universellement sans concept** » : je ne peux pas le démontrer, mais je pense que tout le monde devrait être d'accord. Différence avec l'agréable : « chacun son goût » vaut pour un plat, pas pour le beau.
- Le **génie** est un talent naturel qui donne ses règles à l'art : on ne peut pas l'apprendre par une recette.
- **Hume** (« De la norme du goût ») cherche une norme du goût chez les critiques expérimentés.

### Thèse 3 : l'art révèle le réel
- **Hegel** : l'art est une manifestation **sensible** de l'esprit. Le beau artistique est supérieur au beau naturel, car il est produit par l'esprit.
- **Bergson** (« Le Rire ») : nous percevons les choses à travers des étiquettes utiles. L'artiste, plus détaché, **voit mieux** et nous fait voir ce que nous ne remarquions pas.
- **Nietzsche** : l'art rend la vie supportable, il nous protège d'une vérité trop dure.

### Repères et exemples
- **Subjectif / objectif** : le goût est-il seulement personnel ?
- **Concept / image / métaphore** : l'art pense-t-il par images ?
- Exemples : la « Fontaine » de Marcel **Duchamp** (1917), un urinoir exposé comme œuvre, pose la question « qu'est-ce qui fait une œuvre ? ». Walter **Benjamin** montre que la reproduction technique fait perdre à l'œuvre son **aura** (son caractère unique).

### À retenir pour le bac
- Distinguer art et artisanat, beau et agréable, imitation et création.
- Platon (copie de copie) contre Aristote (imitation qui instruit, catharsis).
- Kant : désintéressé, universel sans concept, génie.
- Piège : « Chacun ses goûts » ne règle pas la question du beau. Sujet tombé en 2025 (centres étrangers) : « L'art peut-il nous apprendre à voir le monde autrement ? »`,
      cartes: [
        { q: "Quelle différence entre l'artiste et l'artisan ?", r: "L'artisan fabrique selon des règles connues un objet utile. L'artiste crée une œuvre originale, qui n'a pas d'abord une fonction utile." },
        { q: "Pourquoi Platon dit-il que l'œuvre est « éloignée de trois degrés » de la vérité ?", r: "Le peintre imite le lit du menuisier, qui imite l'Idée du lit : l'œuvre est une copie de copie (La République, livre X)." },
        { q: "Qu'est-ce que la mimèsis ?", r: "L'imitation, en grec. Pour Aristote, elle est naturelle à l'homme et lui permet d'apprendre." },
        { q: "Qu'est-ce que la catharsis selon Aristote ?", r: "La purification des passions (pitié et crainte) que produit la tragédie chez le spectateur (Poétique)." },
        { q: "Pourquoi le jugement de goût est-il désintéressé selon Kant ?", r: "Je trouve une chose belle sans vouloir la posséder ni l'utiliser : le plaisir ne dépend pas de l'existence de l'objet pour moi." },
        { q: "Que signifie « le beau plaît universellement sans concept » ?", r: "Je ne peux pas prouver qu'une chose est belle par un raisonnement, mais j'attends que tous partagent mon jugement (Kant)." },
        { q: "Beau ou agréable : quelle différence chez Kant ?", r: "L'agréable est personnel (chacun son goût pour un plat). Le beau prétend à l'accord de tous." },
        { q: "Qu'est-ce que le génie pour Kant ?", r: "Un talent naturel qui donne ses règles à l'art. Il ne s'apprend pas par une recette." },
        { q: "Pourquoi Hegel juge-t-il le beau artistique supérieur au beau naturel ?", r: "Parce qu'il est produit par l'esprit : l'art est une manifestation sensible de l'esprit." },
        { q: "Que fait l'artiste selon Bergson ?", r: "Plus détaché des besoins pratiques, il voit la réalité sans étiquettes et nous la fait voir (Le Rire)." },
        { q: "Quelle question pose la « Fontaine » de Duchamp (1917) ?", r: "Un objet ordinaire exposé comme œuvre : qu'est-ce qui fait qu'un objet est une œuvre d'art ?" },
        { q: "Qu'est-ce que l'aura d'une œuvre selon Benjamin ?", r: "Son caractère unique, ici et maintenant, que la reproduction technique (photo, imprimé) lui fait perdre." },
      ],
      quiz: [
        { q: "Pour Platon, le tableau d'un lit est éloigné de la vérité car il :", choix: ["exprime les émotions du peintre", "imite un objet qui imite l'Idée", "plaît sans concept à tout le monde", "purifie les passions du spectateur"], bonne: 1, expl: "Copie du lit fabriqué, lui-même copie de l'Idée : copie de copie. La purification des passions, c'est la catharsis d'Aristote.", niv: 1 },
        { q: "Quel auteur parle de catharsis à propos de la tragédie ?", choix: ["Aristote", "Platon", "Kant", "Hegel"], bonne: 0, expl: "Dans la Poétique, Aristote explique que la tragédie purifie la pitié et la crainte.", niv: 1 },
        { q: "« Je trouve ce paysage beau, même si je ne pourrai jamais y aller. » Ce jugement illustre, selon Kant :", choix: ["l'agréable", "l'utilité de l'art", "le désintéressement du goût", "la mimèsis"], bonne: 2, expl: "Le plaisir esthétique ne dépend pas de la possession ni de l'usage de l'objet : il est désintéressé.", niv: 2 },
        { q: "Un ami dit : « Chacun ses goûts, ce film est beau pour moi seul. » Kant répondrait que :", choix: ["le beau se démontre par des règles", "le beau se confond avec l'agréable", "le beau dépend de l'utilité de l'objet", "le beau prétend à l'accord de tous"], bonne: 3, expl: "Le jugement de beauté prétend à l'universalité, contrairement à l'agréable. Mais il ne se démontre pas : il est sans concept.", niv: 2 },
        { q: "Selon Kant, le génie :", choix: ["donne ses règles à l'art", "applique avec soin les règles connues", "copie fidèlement la nature", "s'apprend dans une bonne école"], bonne: 0, expl: "Le génie est un don naturel, qui invente des règles nouvelles au lieu de suivre une recette.", niv: 1 },
        { q: "Un peintre nous fait remarquer des couleurs dans l'ombre que nous n'avions jamais vues. Quel auteur éclaire cet exemple ?", choix: ["Platon", "Bergson", "Hume", "Benjamin"], bonne: 1, expl: "Pour Bergson, l'artiste perçoit sans les étiquettes utiles de la vie pratique et dévoile le réel.", niv: 2 },
        { q: "Une affiche imprimée à un million d'exemplaires d'un tableau célèbre perd, selon Benjamin :", choix: ["sa catharsis", "son concept", "son aura", "sa mimèsis"], bonne: 2, expl: "La reproduction technique fait perdre à l'œuvre son caractère unique, son aura.", niv: 2 },
        { q: "Pour Hegel, le beau artistique est supérieur au beau naturel parce qu'il :", choix: ["est produit par l'esprit", "imite parfaitement la nature", "procure un plaisir plus fort", "est utile à la société"], bonne: 0, expl: "L'art est une manifestation sensible de l'esprit ; la nature n'a pas cette dimension.", niv: 2 },
        { q: "Pourquoi l'exemple de la « Fontaine » de Duchamp gêne-t-il la définition de l'art comme imitation du beau ?", choix: ["L'objet imite trop fidèlement le réel", "L'objet n'est ni fabriqué par l'artiste ni beau", "L'objet a été détruit par le public", "L'objet a été peint par un génie"], bonne: 1, expl: "Un objet industriel, choisi et exposé, devient œuvre : la beauté et la fabrication ne suffisent plus à définir l'art.", niv: 3 },
        { q: "Quelle confusion fait perdre des points dans un sujet sur l'art ?", choix: ["Distinguer l'œuvre et l'objet technique", "Distinguer le beau naturel et le beau artistique", "Confondre le beau et l'agréable", "Opposer Platon et Aristote sur l'imitation"], bonne: 2, expl: "L'agréable est purement personnel ; le beau prétend à l'accord de tous. Les confondre ruine l'analyse.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 2 Le bonheur
    {
      chapitre: 'philo-g-2',
      fiche: `## Le bonheur

### Définir la notion
- Le **bonheur** est un état de **satisfaction complète et durable**. Il se distingue du **plaisir**, qui est passager et partiel, et de la **joie**, qui est un sentiment vif mais ponctuel.
- Le mot vient de « bon heur », la bonne chance : le bonheur dépend-il du hasard ou de nous ?
- Tout le monde veut être heureux, mais personne ne s'accorde sur ce qu'est le bonheur.

### Thèse 1 : le bonheur est la fin de la vie humaine (Aristote, Épicure)
- **Aristote** (« Éthique à Nicomaque ») : le bonheur est la **fin dernière**, ce qu'on veut pour lui-même et jamais en vue d'autre chose. Il consiste dans une **activité conforme à la vertu**, ce qui demande du temps : « une hirondelle ne fait pas le printemps ».
- **Épicure** (« Lettre à Ménécée ») : le bonheur est le **plaisir** compris comme **absence de trouble**. Absence de douleur du corps (**aponie**) et de trouble de l'âme (**ataraxie**).
- Il classe les **désirs** : **naturels et nécessaires** (manger, boire, se protéger), **naturels non nécessaires** (manger raffiné), **vains** (richesse, gloire). Pour être heureux, satisfaire les premiers et se méfier des derniers. Ce n'est pas la débauche !

### Thèse 2 : le bonheur dépend de notre jugement (stoïciens)
- **Épictète** (« Manuel ») : il faut distinguer **ce qui dépend de nous** (nos jugements, nos désirs) et **ce qui n'en dépend pas** (la santé, la réputation, la mort).
- Ce qui nous trouble, ce ne sont pas les choses, mais nos jugements sur les choses. Le sage est heureux même dans l'épreuve, car il accepte l'ordre du monde.

### Thèse 3 : le bonheur est incertain ou insuffisant
- **Kant** : le bonheur est un **idéal de l'imagination**, et non de la raison : on ne sait jamais exactement ce qui nous rendra heureux. La morale ne consiste pas à chercher le bonheur, mais à se rendre **digne d'être heureux** en faisant son devoir.
- **Pascal** (« Pensées ») : l'homme fuit la pensée de sa misère dans le **divertissement**. Il cherche la chasse plutôt que la prise.
- **Schopenhauer** : la vie oscille comme un pendule entre la **souffrance** (le désir non satisfait) et l'**ennui** (le désir satisfait).
- Platon (« Gorgias ») : Calliclès veut satisfaire tous ses désirs ; Socrate lui répond que c'est remplir un **tonneau percé**.

### Repères et exemples
- **Idéal / réel** : le bonheur est-il un idéal inaccessible ?
- **Subjectif / objectif** : peut-on définir le bonheur pour tous ?
- Exemple : un gagnant du loto n'est pas forcément plus heureux deux ans après ; ses désirs ont grandi.

### À retenir pour le bac
- Distinguer bonheur, plaisir, joie.
- Épicure : désirs naturels et nécessaires, ataraxie ; l'épicurisme n'est pas la débauche.
- Stoïciens : ce qui dépend de nous ; Kant : idéal de l'imagination, être digne du bonheur.
- Tombé en 2026 (métropole) : « Peut-on être heureux quand les autres ne le sont pas ? » Penser au lien entre bonheur personnel et vie avec autrui (Aristote : l'homme est un animal politique).`,
      cartes: [
        { q: "Quelle différence entre bonheur et plaisir ?", r: "Le plaisir est passager et partiel ; le bonheur est une satisfaction complète et durable." },
        { q: "Pourquoi le bonheur est-il la fin dernière selon Aristote ?", r: "On le veut pour lui-même et jamais en vue d'autre chose, alors que l'argent ou la santé sont voulus en vue du bonheur." },
        { q: "En quoi consiste le bonheur pour Aristote ?", r: "Dans une activité conforme à la vertu, sur toute une vie : « une hirondelle ne fait pas le printemps »." },
        { q: "Que signifient ataraxie et aponie ?", r: "Ataraxie : absence de trouble de l'âme. Aponie : absence de douleur du corps. Pour Épicure, c'est le bonheur." },
        { q: "Quels sont les trois types de désirs chez Épicure ?", r: "Naturels et nécessaires (manger, boire), naturels non nécessaires (manger raffiné), vains (richesse, gloire)." },
        { q: "L'épicurisme est-il une recherche de tous les plaisirs ?", r: "Non : Épicure recommande la modération et le tri des désirs. Certains plaisirs entraînent plus de peines qu'ils n'apportent de joie." },
        { q: "Quelle distinction est au cœur du Manuel d'Épictète ?", r: "Ce qui dépend de nous (jugements, désirs) et ce qui n'en dépend pas (santé, réputation, mort)." },
        { q: "Selon les stoïciens, qu'est-ce qui nous trouble ?", r: "Non pas les choses elles-mêmes, mais les jugements que nous portons sur elles." },
        { q: "Pourquoi le bonheur est-il un « idéal de l'imagination » pour Kant ?", r: "On ne peut pas savoir à l'avance ce qui nous rendra heureux : richesse, savoir ou santé peuvent aussi nous nuire." },
        { q: "Qu'est-ce que se rendre « digne d'être heureux » ?", r: "Pour Kant, agir moralement par devoir, plutôt que chercher directement son bonheur." },
        { q: "Qu'est-ce que le divertissement chez Pascal ?", r: "Tout ce qui détourne l'homme de penser à sa condition misérable : jeu, chasse, agitation." },
        { q: "Quelle image Schopenhauer utilise-t-il pour la vie humaine ?", r: "Un pendule qui oscille entre la souffrance (désir insatisfait) et l'ennui (désir satisfait)." },
      ],
      quiz: [
        { q: "Pour Épicure, le bonheur consiste surtout dans :", choix: ["l'accumulation des plaisirs", "l'absence de trouble de l'âme", "l'activité politique dans la cité", "l'obéissance au devoir moral"], bonne: 1, expl: "L'ataraxie, absence de trouble. Épicure n'est pas un partisan de l'accumulation des plaisirs, contrairement à une idée reçue.", niv: 1 },
        { q: "Selon Épicure, le désir de devenir célèbre est un désir :", choix: ["naturel et nécessaire", "naturel non nécessaire", "nécessaire non naturel", "vain"], bonne: 3, expl: "La gloire n'est ni naturelle ni nécessaire : c'est un désir vain, source de trouble.", niv: 2 },
        { q: "Quel auteur distingue ce qui dépend de nous et ce qui n'en dépend pas ?", choix: ["Épictète", "Aristote", "Pascal", "Kant"], bonne: 0, expl: "C'est l'ouverture du Manuel d'Épictète, texte central du stoïcisme.", niv: 1 },
        { q: "Un candidat rate un concours et se répète : « mon effort dépendait de moi, la décision du jury non ». Il raisonne en :", choix: ["épicurien", "kantien", "stoïcien", "pascalien"], bonne: 2, expl: "Il applique la distinction stoïcienne entre ce qui dépend de nous et ce qui n'en dépend pas.", niv: 2 },
        { q: "« Une hirondelle ne fait pas le printemps » signifie, chez Aristote, que le bonheur :", choix: ["se juge toujours sur une vie entière", "dépend des saisons, de la chance et du hasard", "n'est qu'un plaisir passager", "est réservé aux plus riches"], bonne: 0, expl: "Un moment de joie ne suffit pas : le bonheur est une activité vertueuse durable.", niv: 2 },
        { q: "Pourquoi Kant refuse-t-il de fonder la morale sur le bonheur ?", choix: ["Le bonheur est contraire à la morale", "Le bonheur est une notion trop indéterminée", "Le bonheur dépend de la grâce divine et du salut", "Le bonheur est impossible à désirer"], bonne: 1, expl: "Chacun se fait une idée différente du bonheur, qui ne peut fournir de règle universelle. La morale doit venir de la raison.", niv: 3 },
        { q: "Un homme passe ses soirées sur des jeux vidéo pour ne jamais penser à sa mort. Pascal parlerait de :", choix: ["catharsis", "désir vain", "ataraxie", "divertissement"], bonne: 3, expl: "Le divertissement détourne l'homme de la pensée de sa condition.", niv: 2 },
        { q: "Pour Schopenhauer, quand un désir est satisfait, l'homme tombe dans :", choix: ["la souffrance", "l'ennui", "l'ataraxie", "la joie durable"], bonne: 1, expl: "Le pendule va de la souffrance (manque) à l'ennui (satisfaction) : le bonheur durable est impossible.", niv: 1 },
        { q: "Calliclès veut satisfaire tous ses désirs sans limite. Quelle image Socrate lui oppose-t-il ?", choix: ["L'hirondelle et le printemps", "Le pendule de la vie", "La chasse et la prise", "Le tonneau percé"], bonne: 3, expl: "Dans le Gorgias, l'homme aux désirs illimités remplit sans fin des tonneaux percés.", niv: 2 },
        { q: "Un gagnant du loto n'est pas plus heureux deux ans après. Quelle thèse cet exemple soutient-il le mieux ?", choix: ["Le bonheur est la fin dernière de toute action", "Le bonheur dépend surtout des biens extérieurs", "Les désirs grandissent avec leur satisfaction", "Les divertissements rendent vraiment heureux"], bonne: 2, expl: "Les nouveaux moyens créent de nouveaux désirs : on retrouve le tonneau percé ou le pendule de Schopenhauer.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 3 La conscience
    {
      chapitre: 'philo-g-3',
      fiche: `## La conscience

### Définir la notion
- La **conscience** est la capacité de savoir ce que l'on vit, perçoit ou pense, au moment où on le vit. Le mot vient du latin *cum scientia*, « avec savoir ».
- **Conscience immédiate** (ou spontanée) : je vois, j'entends, je sens, et je le sais.
- **Conscience réfléchie** : je fais retour sur moi, je me prends comme objet (« je sais que je pense »). C'est la **conscience de soi**.
- **Conscience morale** : la capacité de juger le bien et le mal de ses propres actes (avoir « mauvaise conscience »).

### Thèse 1 : la conscience est la première certitude (Descartes)
- **Descartes** (« Discours de la méthode », 1637 ; « Méditations métaphysiques », 1641) doute de tout : des sens, des mathématiques, du monde. Mais pendant qu'il doute, il pense, et pour penser il faut être. D'où le **cogito** : « Je pense, donc je suis ».
- Le sujet est une **chose qui pense** : la conscience est transparente à elle-même, elle connaît ses pensées avec certitude.
- **Kant** : le « Je pense » doit pouvoir accompagner toutes mes représentations. L'enfant qui commence à dire « je » au lieu de parler de lui à la troisième personne accède à la conscience de soi.

### Thèse 2 : la conscience est toujours tournée vers autre chose
- **Husserl** : « toute conscience est conscience de quelque chose ». C'est l'**intentionnalité** : la conscience n'est pas une boîte fermée, elle vise le monde.
- **Sartre** reprend cette idée : la conscience est un mouvement vers le monde, un « éclatement ».
- **Hegel** : la conscience de soi passe par **autrui**. Je ne me connais vraiment qu'en étant **reconnu** par un autre (dialectique du maître et de l'esclave). L'enfant qui jette des cailloux dans l'eau s'admire dans ce qu'il produit.

### Thèse 3 : la conscience a des limites
- **Leibniz** : nous avons sans cesse des **petites perceptions** dont nous n'avons pas conscience, comme le bruit de chaque vague dans le bruit de la mer.
- **Hume** : quand je cherche mon « moi », je ne trouve qu'un **faisceau de perceptions** (chaud, froid, plaisir), jamais un moi fixe.
- **Locke** : l'**identité personnelle** repose sur la conscience et la **mémoire** : je suis la même personne aussi loin que ma conscience peut remonter.
- **Freud** et l'inconscient (voir ce chapitre) : la conscience n'est pas maîtresse de tout ce qui se passe en nous.
- **Bergson** : toute conscience est **mémoire**, elle retient le passé et anticipe l'avenir.

### Repères et exemples
- **Médiat / immédiat** : se connaît-on immédiatement ou par détours (autrui, œuvres) ?
- **Objectif / subjectif / intersubjectif**.
- Exemple : un conducteur qui fait un trajet habituel « en pilote automatique » agit sans conscience réfléchie.

### À retenir pour le bac
- Distinguer conscience immédiate, réfléchie et morale.
- Cogito de Descartes : certitude de soi comme chose qui pense.
- Contre la transparence : intentionnalité (Husserl), autrui (Hegel), petites perceptions (Leibniz), faisceau (Hume), inconscient (Freud).
- Piège : « avoir conscience » ne veut pas dire « se connaître ». Être conscient de soi n'est pas connaître ses désirs profonds.`,
      cartes: [
        { q: "D'où vient le mot conscience ?", r: "Du latin cum scientia, « avec savoir » : savoir ce que l'on vit ou pense, en même temps qu'on le vit." },
        { q: "Conscience immédiate ou réfléchie ?", r: "Immédiate : je perçois et je le sais. Réfléchie : je fais retour sur moi et me prends comme objet de pensée." },
        { q: "Qu'est-ce que la conscience morale ?", r: "La capacité de juger le bien et le mal de ses propres actes." },
        { q: "Comment Descartes arrive-t-il au cogito ?", r: "En doutant de tout : même s'il se trompe sur tout, il pense pendant qu'il doute, donc il existe. « Je pense, donc je suis »." },
        { q: "Dans quelles œuvres Descartes formule-t-il le cogito ?", r: "Le Discours de la méthode (1637), puis les Méditations métaphysiques (1641)." },
        { q: "Que dit Kant de l'enfant qui commence à dire « je » ?", r: "Qu'il accède à la conscience de soi : avant, il parlait de lui comme d'une autre personne." },
        { q: "Qu'est-ce que l'intentionnalité selon Husserl ?", r: "Le fait que toute conscience est conscience de quelque chose : elle est toujours tournée vers un objet." },
        { q: "Pourquoi la conscience de soi passe-t-elle par autrui chez Hegel ?", r: "Parce que je n'ai pleinement conscience de moi qu'en étant reconnu par un autre (dialectique du maître et de l'esclave)." },
        { q: "Que sont les petites perceptions de Leibniz ?", r: "Des perceptions trop faibles pour être conscientes, comme le bruit de chaque vague dans le bruit de la mer." },
        { q: "Que trouve Hume quand il cherche son moi ?", r: "Seulement un faisceau de perceptions qui se succèdent, jamais un moi fixe." },
        { q: "Sur quoi Locke fonde-t-il l'identité personnelle ?", r: "Sur la conscience et la mémoire : je suis la même personne aussi loin que ma conscience remonte." },
        { q: "Pourquoi « avoir conscience » n'est-il pas « se connaître » ?", r: "On peut savoir qu'on pense sans connaître les causes profondes de ses pensées et désirs (petites perceptions, inconscient)." },
      ],
      quiz: [
        { q: "Quel auteur a formulé « Je pense, donc je suis » ?", choix: ["Kant", "Locke", "Descartes", "Husserl"], bonne: 2, expl: "C'est le cogito du Discours de la méthode (1637).", niv: 1 },
        { q: "« Toute conscience est conscience de quelque chose » : ce principe définit :", choix: ["l'intentionnalité", "le cogito", "la conscience morale", "les petites perceptions"], bonne: 0, expl: "L'intentionnalité, chez Husserl : la conscience est toujours visée d'un objet.", niv: 1 },
        { q: "Un conducteur fait son trajet habituel sans se souvenir d'un seul virage. Il lui manquait surtout :", choix: ["la conscience morale", "la conscience de soi chez Hegel", "toute perception du monde", "la conscience réfléchie"], bonne: 3, expl: "Il percevait la route (sinon il aurait eu un accident), mais sans y faire attention ni y revenir : pas de conscience réfléchie.", niv: 2 },
        { q: "Pourquoi le cogito résiste-t-il au doute selon Descartes ?", choix: ["Le monde extérieur est certain", "Douter, c'est encore penser", "Les sens ne trompent jamais", "Dieu garantit les mathématiques"], bonne: 1, expl: "Même si je me trompe en tout, je pense en doutant : ma pensée et mon existence sont certaines.", niv: 2 },
        { q: "Je n'entends pas une vague isolée, mais j'entends le bruit de la mer. Leibniz en conclut qu'il existe :", choix: ["des petites perceptions inconscientes", "un faisceau de perceptions sans moi", "une conscience purement réfléchie", "une intentionnalité du son"], bonne: 0, expl: "Chaque vague produit une perception trop faible pour être consciente, mais leur somme est perçue.", niv: 2 },
        { q: "Quel auteur fonde l'identité personnelle sur la mémoire ?", choix: ["Hume", "Hegel", "Leibniz", "Locke"], bonne: 3, expl: "Pour Locke, l'identité de la personne s'étend aussi loin que la conscience peut remonter dans le passé.", niv: 1 },
        { q: "Une élève découvre qui elle est en voyant comment ses amis réagissent à ses choix. Quel auteur éclaire ce cas ?", choix: ["Descartes", "Hegel", "Leibniz", "Locke"], bonne: 1, expl: "Pour Hegel, la conscience de soi passe par la reconnaissance d'autrui, et non par un simple retour sur soi.", niv: 2 },
        { q: "Quand Hume cherche son moi, il trouve :", choix: ["une chose qui pense", "un esprit immortel", "un faisceau de perceptions", "une conscience transparente"], bonne: 2, expl: "Il ne saisit que des perceptions qui se succèdent, jamais un moi stable : critique de la substance pensante de Descartes.", niv: 2 },
        { q: "Pourquoi l'exemple du cogito ne prouve-t-il pas que je me connais parfaitement ?", choix: ["Il prouve que j'existe, pas ce que je désire au fond", "Il prouve surtout que le monde existe hors de moi", "Il repose sur le témoignage des sens et de la mémoire", "Il n'est valable que pour les philosophes"], bonne: 0, expl: "Le cogito établit l'existence de la pensée, pas la connaissance de tout ce qui se passe en moi.", niv: 3 },
        { q: "Quelle distinction faut-il faire dans un sujet comme « Se connaître soi-même, est-ce possible ? »", choix: ["Conscience et perception", "Avoir conscience de soi et se connaître", "Conscience morale et devoir", "Immédiat et instinct"], bonne: 1, expl: "On peut être conscient de soi sans connaître ses désirs ni les causes de ses actes : c'est le cœur du problème.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 4 Le devoir
    {
      chapitre: 'philo-g-4',
      fiche: `## Le devoir

### Définir la notion
- Le **devoir** est ce que l'on **doit** faire, une **obligation**. Il s'oppose à ce que l'on désire ou à ce qui nous intéresse.
- **Obligation / contrainte** (repère) : la **contrainte** est une force extérieure qui m'empêche d'agir autrement (des menottes). L'**obligation** s'adresse à ma liberté : je peux désobéir, mais je dois obéir. Le devoir est une obligation, pas une contrainte.
- Devoirs **légaux** (fixés par la loi : payer ses impôts) et devoirs **moraux** (ne pas mentir à un ami). **Légal / légitime** : ce qui est conforme à la loi n'est pas forcément juste.

### Thèse 1 : le devoir vient de la raison (Kant)
- **Kant** (« Fondements de la métaphysique des mœurs », 1785) : une action n'a de valeur morale que si elle est faite **par devoir**, et non seulement **conformément au devoir**.
- Exemple du **commerçant** honnête : il rend la monnaie juste à un enfant, mais seulement pour garder ses clients. Il agit conformément au devoir, pas par devoir.
- **Impératif hypothétique** : « si tu veux X, fais Y » (si tu veux réussir, travaille). **Impératif catégorique** : « fais Y », sans condition. C'est la forme du devoir moral.
- Première formule : agis seulement d'après une règle (maxime) dont tu peux vouloir qu'elle devienne une **loi universelle**. Le mensonge ne passe pas ce test : si tout le monde mentait, plus personne ne croirait personne.
- Deuxième formule : traite toujours l'humanité, en toi et en autrui, **comme une fin**, jamais simplement comme un moyen.
- L'**autonomie** : obéir au devoir, c'est obéir à la loi que ma propre raison se donne.

### Thèse 2 : le devoir se juge à ses conséquences (utilitarisme)
- **Bentham** et **John Stuart Mill** : une action est bonne si elle produit le **plus grand bonheur du plus grand nombre**.
- C'est une morale **conséquentialiste** : on calcule les effets. Mentir peut être un devoir si cela sauve une vie.
- Critique : on peut alors sacrifier un innocent pour le bien de la majorité.

### Thèse 3 : le devoir a une origine sociale ou suspecte
- **Durkheim** : la morale est d'abord une règle **sociale**, intériorisée par l'éducation.
- **Nietzsche** (« Généalogie de la morale », 1887) : la morale du devoir a été inventée par les faibles pour dompter les forts ; il faut en faire la **généalogie**.
- **Sartre** (« L'existentialisme est un humanisme », 1946) : un élève hésite entre rejoindre la France libre et rester auprès de sa mère. Aucune morale toute faite ne peut lui dire quoi faire : il doit **choisir** et en porter la responsabilité.

### À retenir pour le bac
- Obligation n'est pas contrainte ; légal n'est pas légitime.
- Kant : par devoir et conformément au devoir, impératif catégorique, universalisation, personne comme fin, autonomie.
- Utilitarisme : conséquences, plus grand bonheur du plus grand nombre.
- Piège : le devoir n'est pas seulement ce que la loi impose ; on peut avoir le devoir de désobéir à une loi injuste.`,
      cartes: [
        { q: "Obligation ou contrainte : quelle différence ?", r: "La contrainte est une force extérieure qui empêche d'agir autrement. L'obligation s'adresse à ma liberté : je peux désobéir, mais je ne dois pas." },
        { q: "Légal ou légitime ?", r: "Légal : conforme à la loi en vigueur. Légitime : conforme à ce qui est juste. Une loi peut être légale sans être légitime." },
        { q: "Agir par devoir ou conformément au devoir (Kant) ?", r: "Conformément : l'acte correspond au devoir mais par intérêt. Par devoir : on agit seulement par respect de la loi morale. Seul le second a une valeur morale." },
        { q: "Quel exemple Kant donne-t-il pour l'action conforme au devoir ?", r: "Le commerçant qui rend la monnaie juste à un enfant pour garder sa clientèle, et non par honnêteté." },
        { q: "Impératif hypothétique ou catégorique ?", r: "Hypothétique : conditionnel (« si tu veux X, fais Y »). Catégorique : sans condition (« fais Y »). Le devoir moral est catégorique." },
        { q: "Énonce la formule de l'universalisation.", r: "Agis seulement d'après une maxime dont tu peux vouloir en même temps qu'elle devienne une loi universelle (Kant)." },
        { q: "Pourquoi le mensonge échoue-t-il au test de l'universalisation ?", r: "Si tout le monde mentait, plus personne ne croirait personne : le mensonge lui-même deviendrait impossible." },
        { q: "Que dit la formule de l'humanité chez Kant ?", r: "Traiter l'humanité, en soi et en autrui, toujours comme une fin, jamais simplement comme un moyen." },
        { q: "Qu'est-ce que l'autonomie chez Kant ?", r: "Le fait d'obéir à la loi que ma propre raison se donne, et non à une autorité extérieure ou à mes désirs." },
        { q: "Quel est le principe de l'utilitarisme ?", r: "Une action est bonne si elle produit le plus grand bonheur du plus grand nombre (Bentham, Mill)." },
        { q: "Quelle critique adresse-t-on à l'utilitarisme ?", r: "Il peut justifier de sacrifier un innocent si cela augmente le bonheur total." },
        { q: "Quel exemple Sartre donne-t-il dans L'existentialisme est un humanisme ?", r: "Un élève hésite entre rejoindre la France libre et rester avec sa mère : aucune morale ne décide pour lui, il doit choisir." },
      ],
      quiz: [
        { q: "Un prisonnier enchaîné ne peut pas fuir. Il s'agit :", choix: ["d'une obligation morale", "d'un impératif catégorique", "d'une contrainte", "d'un devoir légal"], bonne: 2, expl: "Les chaînes empêchent physiquement d'agir autrement : c'est une contrainte, pas une obligation.", niv: 2 },
        { q: "Un commerçant ne triche pas, uniquement pour garder ses clients. Selon Kant, il agit :", choix: ["conformément au devoir", "par devoir", "de façon autonome", "selon l'impératif catégorique"], bonne: 0, expl: "L'acte est correct, mais motivé par l'intérêt : il est seulement conforme au devoir, sans valeur morale.", niv: 2 },
        { q: "« Si tu veux être en forme, fais du sport » est un impératif :", choix: ["catégorique", "moral", "universel", "hypothétique"], bonne: 3, expl: "Il dépend d'une condition (si tu veux…) : impératif hypothétique, qui relève de l'habileté et non de la morale.", niv: 1 },
        { q: "Quel auteur défend le plus grand bonheur du plus grand nombre ?", choix: ["Kant", "Mill", "Nietzsche", "Sartre"], bonne: 1, expl: "C'est le principe utilitariste de Bentham et de Mill.", niv: 1 },
        { q: "Pourquoi, selon Kant, le mensonge est-il interdit ?", choix: ["Il nuit à la personne trompée et à la société", "La loi le punit sévèrement", "Sa maxime ne peut pas devenir universelle", "Il rend celui qui ment malheureux"], bonne: 2, expl: "Universalisé, le mensonge se détruit : plus personne ne croirait personne. C'est la forme, pas les conséquences, qui compte.", niv: 2 },
        { q: "Une entreprise traite ses salariés seulement comme des outils à rentabiliser. Elle viole :", choix: ["l'impératif hypothétique", "le principe d'utilité", "la règle de l'universalisation des désirs", "la formule de l'humanité comme fin"], bonne: 3, expl: "Kant demande de traiter l'humanité toujours comme une fin, jamais simplement comme un moyen.", niv: 2 },
        { q: "Pour Kant, être autonome signifie :", choix: ["obéir à la loi que sa raison se donne", "faire ce qui nous plaît sans contrainte", "obéir aux règles de la société", "ne dépendre de personne pour vivre"], bonne: 0, expl: "L'autonomie est l'obéissance à la loi morale rationnelle, pas l'absence de règles.", niv: 1 },
        { q: "Un médecin mentirait pour sauver cinq vies. Quelle morale l'approuve sans difficulté ?", choix: ["La morale kantienne", "La morale utilitariste", "La morale de l'autonomie", "La morale de l'impératif catégorique"], bonne: 1, expl: "L'utilitarisme juge par les conséquences : cinq vies sauvées l'emportent sur le mensonge.", niv: 2 },
        { q: "Un sujet demande : « Faut-il toujours obéir à la loi ? » Quelle distinction est la plus utile ?", choix: ["Hypothétique et catégorique", "Bonheur et plaisir", "Légal et légitime", "Conscience et inconscient"], bonne: 2, expl: "Une loi légale peut être illégitime : le devoir moral peut alors commander de désobéir.", niv: 3 },
        { q: "Quelle objection l'exemple de l'élève de Sartre fait-il à une morale de règles ?", choix: ["Les règles ne décident pas à notre place dans un dilemme", "Les règles morales changent selon les pays et les époques", "Le devoir se réduit au bonheur de la mère", "Le devoir ne concerne que les adultes"], bonne: 0, expl: "Deux devoirs entrent en conflit : aucune règle ne tranche, l'élève doit choisir et assumer.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 5 L'État
    {
      chapitre: 'philo-g-5',
      fiche: `## L'État

### Définir la notion
- L'**État** est l'ensemble des institutions qui exercent le **pouvoir politique** sur un territoire et une population : gouvernement, administration, justice, police, armée.
- Il se distingue de la **société** (l'ensemble des relations entre individus) et du **gouvernement** (ceux qui dirigent l'État à un moment donné).
- **Max Weber** (« Le Savant et le politique », 1919) : l'État revendique le **monopole de la violence physique légitime**.
- **Public / privé** (repère) : l'État s'occupe des affaires communes, il ne doit pas tout contrôler dans la vie privée.

### Thèse 1 : l'État naît d'un contrat pour garantir la sécurité et les droits
- **Aristote** (« Les Politiques ») : l'homme est un **animal politique** ; la cité est naturelle, elle permet de « bien vivre ».
- Les théories du **contrat social** imaginent un **état de nature** sans État.
- **Hobbes** (« Léviathan », 1651) : à l'état de nature, c'est la **guerre de chacun contre chacun**, la vie est courte et misérable. Les hommes transfèrent leur pouvoir à un **souverain** absolu, en échange de la **sécurité**.
- **Locke** (« Second traité du gouvernement civil », 1690) : les hommes ont des **droits naturels** (vie, liberté, propriété). L'État doit les protéger ; s'il les viole, le peuple a un **droit de résistance**.
- **Rousseau** (« Du contrat social », 1762) : chacun se donne à tous ; l'État exprime la **volonté générale**, qui vise l'intérêt commun. Obéir à la loi qu'on s'est donnée, c'est être libre.

### Thèse 2 : il faut limiter le pouvoir de l'État
- **Montesquieu** (« De l'esprit des lois », 1748) : tout homme qui a du pouvoir est porté à en abuser. Il faut que « le pouvoir arrête le pouvoir » : **séparation des pouvoirs** législatif, exécutif, judiciaire.
- **Tocqueville** : la démocratie peut produire un **despotisme doux**, un État protecteur qui rend les citoyens passifs.
- **Machiavel** (« Le Prince », 1532) : le pouvoir politique a ses propres règles ; le prince doit parfois savoir ne pas être bon pour conserver l'État.

### Thèse 3 : l'État comme instrument de domination
- **Marx** et **Engels** : l'État n'est pas neutre ; il sert les intérêts de la **classe dominante**. Dans une société sans classes, il devrait disparaître (**dépérir**).
- Les **anarchistes** (Proudhon, Bakounine) refusent l'État lui-même comme source d'oppression.

### Repères et exemples
- **Légal / légitime** : un État est-il juste parce qu'il est légal ?
- **Obligation / contrainte** : l'État contraint par la force, mais il cherche à obtenir l'obéissance libre des citoyens.
- Exemple : le confinement de 2020 montre l'État qui restreint les libertés pour protéger la santé.

### À retenir pour le bac
- Weber : monopole de la violence physique légitime.
- Hobbes (sécurité, souverain absolu), Locke (droits naturels, résistance), Rousseau (volonté générale).
- Montesquieu : séparation des pouvoirs ; Marx : État de classe.
- Piège : ne pas confondre État, gouvernement et nation. Sujet possible : « L'État nous doit-il quelque chose ? » ou « L'État est-il l'ennemi de la liberté ? »`,
      cartes: [
        { q: "Comment Max Weber définit-il l'État ?", r: "Comme l'institution qui revendique avec succès le monopole de la violence physique légitime sur un territoire (Le Savant et le politique, 1919)." },
        { q: "État ou gouvernement ?", r: "L'État est l'ensemble durable des institutions du pouvoir. Le gouvernement est l'équipe qui le dirige à un moment donné." },
        { q: "Que signifie « l'homme est un animal politique » (Aristote) ?", r: "L'homme ne peut s'accomplir que dans une cité : la vie politique est naturelle pour lui." },
        { q: "Qu'est-ce que l'état de nature ?", r: "Une situation imaginée où les hommes vivraient sans État. Elle sert à comprendre pourquoi l'État existe." },
        { q: "Comment Hobbes décrit-il l'état de nature ?", r: "Comme une guerre de chacun contre chacun, où la vie est courte et misérable (Léviathan, 1651)." },
        { q: "Pourquoi les hommes créent-ils l'État selon Hobbes ?", r: "Pour obtenir la sécurité : ils transfèrent leur pouvoir à un souverain absolu qui fait régner la paix." },
        { q: "Quels droits naturels l'État doit-il protéger selon Locke ?", r: "La vie, la liberté et la propriété. Si l'État les viole, le peuple a un droit de résistance." },
        { q: "Qu'est-ce que la volonté générale chez Rousseau ?", r: "La volonté du peuple tourné vers l'intérêt commun, et non la somme des intérêts particuliers (Du contrat social, 1762)." },
        { q: "Pourquoi Montesquieu veut-il séparer les pouvoirs ?", r: "Parce que tout homme qui a du pouvoir tend à en abuser : il faut que le pouvoir arrête le pouvoir." },
        { q: "Quels sont les trois pouvoirs à séparer ?", r: "Le législatif (faire les lois), l'exécutif (les appliquer), le judiciaire (juger)." },
        { q: "Qu'est-ce que le despotisme doux chez Tocqueville ?", r: "Un pouvoir protecteur qui s'occupe de tout et rend les citoyens passifs, sans violence apparente." },
        { q: "Quelle est la thèse de Marx sur l'État ?", r: "L'État sert les intérêts de la classe dominante ; dans une société sans classes, il doit dépérir." },
      ],
      quiz: [
        { q: "Qui définit l'État par le monopole de la violence physique légitime ?", choix: ["Hobbes", "Montesquieu", "Max Weber", "Rousseau"], bonne: 2, expl: "C'est la définition de Weber dans Le Savant et le politique (1919).", niv: 1 },
        { q: "Chez Hobbes, les hommes renoncent à leur liberté naturelle surtout pour obtenir :", choix: ["la sécurité", "l'égalité des richesses", "le droit de résistance", "la séparation des pouvoirs"], bonne: 0, expl: "Fuir la guerre de chacun contre chacun : le souverain garantit la paix.", niv: 1 },
        { q: "Un peuple se soulève contre un roi qui confisque les terres de ses sujets. Quel auteur justifie ce soulèvement ?", choix: ["Hobbes", "Machiavel", "Weber", "Locke"], bonne: 3, expl: "Pour Locke, l'État qui viole les droits naturels (dont la propriété) perd sa légitimité : droit de résistance.", niv: 2 },
        { q: "Pour Rousseau, la volonté générale est :", choix: ["la somme des volontés particulières", "la volonté tournée vers l'intérêt commun", "la volonté du souverain absolu", "toujours celle de la majorité des votants"], bonne: 1, expl: "La volonté générale vise l'intérêt commun ; elle n'est pas la simple addition des intérêts privés.", niv: 2 },
        { q: "Un président peut nommer les juges et écrire seul les lois. Quel principe est violé ?", choix: ["Le monopole de la violence légitime", "Le contrat social", "La séparation des pouvoirs", "La volonté générale"], bonne: 2, expl: "Exécutif, législatif et judiciaire sont réunis dans une seule main : Montesquieu y voit le risque du despotisme.", niv: 2 },
        { q: "Pour Marx, l'État est avant tout :", choix: ["l'instrument de la classe dominante", "l'arbitre neutre des intérêts", "l'expression de la volonté générale", "le garant des droits naturels"], bonne: 0, expl: "L'État n'est pas neutre : il protège les intérêts de ceux qui possèdent les moyens de production.", niv: 1 },
        { q: "Un État verse des aides à tous et décide de tout, et les citoyens cessent de s'intéresser à la politique. Tocqueville parlerait de :", choix: ["guerre de chacun contre chacun", "dépérissement de l'État", "volonté générale", "despotisme doux"], bonne: 3, expl: "Un pouvoir protecteur et bienveillant peut rendre les citoyens passifs : c'est le despotisme doux.", niv: 2 },
        { q: "Selon Machiavel, un prince qui veut conserver l'État doit :", choix: ["rester bon et honnête en toute circonstance", "savoir ne pas être bon selon la nécessité", "se soumettre à la volonté générale", "partager le pouvoir avec les juges"], bonne: 1, expl: "Le Prince (1532) sépare l'efficacité politique de la morale ordinaire.", niv: 2 },
        { q: "Pourquoi l'état de nature n'est-il pas un fait historique chez les théoriciens du contrat ?", choix: ["C'est une hypothèse pour penser le fondement de l'État", "Les historiens l'ont daté avec précision", "Il décrit précisément la vie des peuples anciens d'Europe", "Il a disparu avec la Révolution française"], bonne: 0, expl: "C'est une fiction théorique : elle sert à comprendre pourquoi l'obéissance à l'État est justifiée (origine / fondement).", niv: 3 },
        { q: "Quelle confusion fausse un sujet comme « L'État est-il l'ennemi de la liberté ? »", choix: ["Distinguer liberté naturelle et liberté civile", "Confondre l'État avec le gouvernement du moment", "Opposer Hobbes et Locke", "Distinguer légal et légitime"], bonne: 1, expl: "Critiquer un gouvernement n'est pas critiquer l'État en tant qu'institution : il faut garder le niveau général.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 6 L'inconscient
    {
      chapitre: 'philo-g-6',
      fiche: `## L'inconscient

### Définir la notion
- Comme adjectif, **inconscient** qualifie ce qui se fait sans conscience : un geste automatique, une habitude.
- Comme nom, **l'inconscient** désigne, chez **Freud**, une partie du psychisme faite de désirs et de souvenirs **refoulés**, qui ne peuvent pas devenir conscients directement mais qui agissent sur nous.
- C'est une **hypothèse** : on ne l'observe pas, on la déduit de ses effets.

### Avant Freud : des perceptions et des causes inconscientes
- **Leibniz** : les **petites perceptions** (le bruit de chaque vague) sont inconscientes mais réelles.
- **Spinoza** (« Éthique ») : les hommes se croient libres parce qu'ils sont **conscients de leurs désirs** mais **ignorants des causes** qui les déterminent. Une pierre lancée qui penserait se croirait libre.

### Thèse 1 : l'inconscient psychique (Freud)
- **Freud** fonde la **psychanalyse** au début du XXe siècle.
- Certains désirs, surtout liés à la sexualité et à l'enfance, sont **inacceptables** pour la conscience. Ils sont **refoulés** : repoussés hors de la conscience, mais toujours actifs.
- Ils reviennent sous une forme déguisée : **rêves** (« la voie royale » vers l'inconscient, « L'Interprétation du rêve », 1900), **actes manqués** et **lapsus**, **symptômes** névrotiques.
- Deuxième modèle (1923) : le **ça** (les pulsions), le **surmoi** (les interdits intériorisés), le **moi** (qui essaie de concilier les deux et la réalité).
- L'inconscient est une **blessure narcissique** pour l'humanité, après Copernic (la Terre n'est pas au centre) et Darwin (l'homme descend de l'animal) : « le moi n'est pas maître dans sa propre maison ».
- Pourquoi l'hypothèse est **légitime** selon Freud : les données de la conscience présentent des **lacunes** que seule elle explique.

### Thèse 2 : les critiques de l'inconscient
- **Alain** : l'inconscient risque d'être un « autre moi » mystérieux qu'on accuse pour s'excuser. Il n'y a que le corps et la conscience.
- **Sartre** : ce qu'on appelle inconscient est souvent de la **mauvaise foi** : je me mens à moi-même pour fuir ma liberté et ma responsabilité.
- **Karl Popper** : la psychanalyse n'est pas une science, car elle est **irréfutable** : elle explique tout et son contraire.
- Mais on peut répondre que l'inconscient ne supprime pas la responsabilité : la cure vise justement à rendre le sujet plus libre en prenant conscience de ce qui le détermine.

### Repères et exemples
- **Expliquer / comprendre** : interpréter un rêve, est-ce expliquer par des causes ou comprendre un sens ?
- **Hypothèse / conséquence / conclusion**.
- Exemple de lapsus : un président de séance déclare « la séance est close » au lieu de « ouverte » (exemple cité par Freud).

### À retenir pour le bac
- Distinguer l'inconscient (Freud) et le simple non-conscient (habitudes, petites perceptions).
- Refoulement, rêve, lapsus, acte manqué ; ça, moi, surmoi ; blessure narcissique.
- Critiques : Alain, Sartre (mauvaise foi), Popper (irréfutabilité).
- Piège : « c'est mon inconscient » n'excuse pas tout ; la question de la responsabilité est au cœur des sujets.`,
      cartes: [
        { q: "Quelle différence entre « inconscient » adjectif et « l'inconscient » chez Freud ?", r: "L'adjectif qualifie ce qui se fait sans conscience (habitude). Le nom désigne chez Freud une partie du psychisme faite de désirs refoulés qui agissent sur nous." },
        { q: "Que dit Spinoza de la liberté humaine ?", r: "Les hommes se croient libres car ils sont conscients de leurs désirs mais ignorants des causes qui les déterminent (Éthique)." },
        { q: "Qu'est-ce que le refoulement ?", r: "Le processus qui repousse hors de la conscience des désirs ou souvenirs inacceptables, qui restent pourtant actifs." },
        { q: "Pourquoi Freud appelle-t-il le rêve « la voie royale » ?", r: "Parce que le rêve est le meilleur chemin pour accéder à l'inconscient : il réalise de façon déguisée des désirs refoulés (L'Interprétation du rêve, 1900)." },
        { q: "Qu'est-ce qu'un acte manqué ?", r: "Un acte raté en apparence (oublier un rendez-vous, perdre un objet) qui exprime en réalité un désir inconscient." },
        { q: "Que sont le ça, le moi et le surmoi ?", r: "Ça : les pulsions. Surmoi : les interdits intériorisés. Moi : l'instance qui négocie entre les deux et la réalité." },
        { q: "Quelles sont les trois blessures narcissiques selon Freud ?", r: "Copernic (la Terre n'est pas au centre), Darwin (l'homme descend de l'animal), la psychanalyse (le moi n'est pas maître chez lui)." },
        { q: "Comment Freud justifie-t-il l'hypothèse de l'inconscient ?", r: "Les données de la conscience ont des lacunes (rêves, lapsus, symptômes) que seule cette hypothèse permet d'expliquer." },
        { q: "Quelle critique Alain fait-il de l'inconscient ?", r: "C'est un « autre moi » imaginaire, commode pour s'excuser ; il n'y a que le corps et la conscience." },
        { q: "Qu'est-ce que la mauvaise foi chez Sartre ?", r: "Le fait de se mentir à soi-même pour fuir sa liberté et sa responsabilité. Sartre l'oppose à l'inconscient freudien." },
        { q: "Pourquoi Popper refuse-t-il le statut de science à la psychanalyse ?", r: "Elle est irréfutable : aucune observation ne peut la contredire, puisqu'elle explique tout et son contraire." },
        { q: "L'inconscient supprime-t-il la responsabilité ?", r: "Pas forcément : la cure vise à prendre conscience de ce qui nous détermine pour devenir plus libre." },
      ],
      quiz: [
        { q: "Selon Freud, un désir inacceptable repoussé hors de la conscience mais toujours actif a été :", choix: ["sublimé", "refoulé", "oublié", "rationalisé"], bonne: 1, expl: "Le refoulement repousse sans supprimer : le désir revient sous forme déguisée.", niv: 1 },
        { q: "Quel auteur écrit que les hommes se croient libres par ignorance des causes ?", choix: ["Leibniz", "Alain", "Spinoza", "Sartre"], bonne: 2, expl: "Spinoza, dans l'Éthique : conscients de leurs désirs, ignorants des causes.", niv: 1 },
        { q: "Un étudiant « oublie » toujours son rendez-vous chez un dentiste qu'il redoute. Freud y verrait :", choix: ["un acte manqué", "une petite perception", "de la mauvaise foi", "un simple hasard"], bonne: 0, expl: "L'oubli répété exprime un désir inconscient (éviter le rendez-vous) : c'est un acte manqué.", niv: 2 },
        { q: "Dans le second modèle de Freud, l'instance qui porte les interdits intériorisés est :", choix: ["le ça", "le moi", "l'inconscient", "le surmoi"], bonne: 3, expl: "Le surmoi intériorise les interdits parentaux et sociaux. Le ça est le réservoir des pulsions.", niv: 1 },
        { q: "« Le moi n'est pas maître dans sa propre maison » désigne :", choix: ["la blessure psychologique de la psychanalyse", "la blessure cosmologique de Copernic", "la blessure biologique de Darwin", "la critique de Freud par Alain"], bonne: 0, expl: "C'est la troisième blessure narcissique, infligée selon Freud par la psychanalyse.", niv: 2 },
        { q: "Une femme dit : « Je n'y peux rien, c'est mon inconscient qui m'a fait mentir. » Sartre répondrait qu'elle est :", choix: ["victime de son surmoi", "dominée par son ça", "de mauvaise foi", "dans un rêve éveillé"], bonne: 2, expl: "Pour Sartre, invoquer un inconscient pour s'excuser, c'est se mentir à soi-même et fuir sa responsabilité.", niv: 2 },
        { q: "Pourquoi Popper juge-t-il la psychanalyse non scientifique ?", choix: ["Elle n'utilise pas de laboratoire", "Elle parle trop de sexualité", "Elle ne guérit jamais personne", "Elle ne peut être réfutée par aucun fait"], bonne: 3, expl: "Une théorie scientifique doit pouvoir être réfutée par un fait ; la psychanalyse explique tout, donc rien ne la contredit.", niv: 2 },
        { q: "Les habitudes et les petites perceptions de Leibniz se distinguent de l'inconscient freudien car elles :", choix: ["ne sont pas refoulées", "n'existent pas vraiment", "sont toujours conscientes", "concernent seulement le rêve"], bonne: 0, expl: "Elles sont non conscientes mais pas refoulées : aucun conflit ne les écarte de la conscience.", niv: 3 },
        { q: "Un orateur dit « je déclare la séance close » au lieu de « ouverte ». Freud y voit :", choix: ["une erreur de mémoire sans sens", "un lapsus révélant un désir", "un effet de la mauvaise foi", "une petite perception"], bonne: 1, expl: "Le lapsus trahit le désir inconscient que la séance soit déjà finie.", niv: 2 },
        { q: "Dans un sujet « L'hypothèse de l'inconscient supprime-t-elle la liberté ? », quel argument nuance le mieux ?", choix: ["L'inconscient n'existe pas du tout", "La cure vise à rendre le sujet plus libre", "La liberté est toujours absolue", "Le surmoi décide de nos actes à notre place"], bonne: 1, expl: "Prendre conscience de ce qui nous détermine permet de reprendre une part de maîtrise : l'inconscient n'efface pas toute liberté.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 7 La justice
    {
      chapitre: 'philo-g-7',
      fiche: `## La justice

### Définir la notion
- La **justice** désigne d'abord une **valeur** : ce qui est juste, conforme au droit et à l'égalité. Elle désigne aussi une **institution** : les tribunaux qui appliquent les lois.
- **Le droit positif** : l'ensemble des lois en vigueur dans un pays à une époque. **Le droit naturel** : des droits que tout homme possèderait par nature, qui servent à juger les lois.
- **Légal / légitime** (repère) : une loi peut être légale et injuste (les lois de ségrégation raciale aux États-Unis).
- **Égalité / identité / différence** (repère) : être juste, est-ce traiter tout le monde de façon identique ?

### Thèse 1 : la justice comme harmonie et comme égalité (Platon, Aristote)
- **Platon** (« La République ») : le berger **Gygès** trouve un anneau qui le rend invisible ; il commet alors toutes les injustices. Serions-nous justes si nous ne risquions rien ? Pour Platon, la justice est une **harmonie** de l'âme (la raison commande aux désirs) et de la cité.
- **Aristote** (« Éthique à Nicomaque », livre V) distingue :
- la justice **commutative** (dans les échanges) : égalité **arithmétique**, chacun reçoit l'équivalent de ce qu'il donne ;
- la justice **distributive** (dans le partage des biens et honneurs) : égalité **géométrique**, chacun reçoit selon son mérite ;
- l'**équité** : elle corrige la loi quand sa généralité la rend injuste dans un cas particulier.

### Thèse 2 : la justice n'est que le droit du plus fort ?
- **Calliclès** (« Gorgias » de Platon) : la justice de la loi a été inventée par les faibles ; la justice naturelle serait que le fort domine.
- **Pascal** (« Pensées ») : « Ne pouvant faire que ce qui est juste fût fort, on a fait que ce qui est fort fût juste. » La justice des lois dépend souvent de la force et de la coutume.
- **Hobbes** : avant l'État, il n'y a ni juste ni injuste ; la justice naît des lois du souverain.

### Thèse 3 : penser une société juste (Rawls)
- **John Rawls** (« Théorie de la justice », 1971) imagine des individus qui choisissent les règles de la société sous un **voile d'ignorance** : ils ne savent pas quelle place ils occuperont (riche ou pauvre, valide ou non).
- Ils choisiraient deux principes : 1) des **libertés de base égales** pour tous ; 2) les inégalités ne sont justes que si elles sont attachées à des positions ouvertes à tous (égalité des chances) et si elles profitent aux **plus défavorisés** (**principe de différence**).
- Exemple : un médecin peut gagner plus si ce système améliore aussi les soins des plus pauvres.
- Rawls est tombé en explication de texte au bac 2025 (métropole).

### À retenir pour le bac
- Distinguer droit positif et droit naturel, légal et légitime.
- Aristote : commutative (arithmétique), distributive (géométrique, mérite), équité.
- Calliclès, Pascal : justice et force ; Rawls : voile d'ignorance, principe de différence.
- Piège : justice ne veut pas dire égalité stricte. Traiter de la même façon des situations différentes peut être injuste.`,
      cartes: [
        { q: "Droit positif ou droit naturel ?", r: "Droit positif : les lois en vigueur dans une société. Droit naturel : des droits que tout homme posséderait par nature, qui servent à juger les lois." },
        { q: "Que raconte le mythe de l'anneau de Gygès ?", r: "Un berger devient invisible grâce à un anneau et commet des injustices : serions-nous justes sans risque d'être vus ? (Platon, La République)." },
        { q: "Qu'est-ce que la justice pour Platon ?", r: "Une harmonie : dans l'âme, la raison commande aux désirs ; dans la cité, chacun est à sa place." },
        { q: "Qu'est-ce que la justice commutative chez Aristote ?", r: "La justice des échanges : égalité arithmétique, chacun reçoit l'équivalent exact de ce qu'il donne." },
        { q: "Qu'est-ce que la justice distributive chez Aristote ?", r: "La justice du partage des biens et des honneurs : égalité géométrique (proportionnelle), selon le mérite de chacun." },
        { q: "Qu'est-ce que l'équité chez Aristote ?", r: "Une correction de la loi quand sa généralité la rend injuste dans un cas particulier." },
        { q: "Que soutient Calliclès dans le Gorgias ?", r: "Que les lois ont été faites par les faibles pour se protéger, et que la justice naturelle voudrait que le fort domine." },
        { q: "Que veut dire Pascal par « on a fait que ce qui est fort fût juste » ?", r: "Faute de pouvoir rendre la justice forte, on a déclaré juste ce qui était imposé par la force." },
        { q: "Pourquoi n'y a-t-il pas de justice à l'état de nature selon Hobbes ?", r: "Parce que le juste et l'injuste naissent des lois ; sans État ni loi, il n'y a que la force." },
        { q: "Qu'est-ce que le voile d'ignorance de Rawls ?", r: "Une situation imaginaire où l'on choisit les règles de la société sans savoir quelle place on y aura." },
        { q: "Qu'est-ce que le principe de différence de Rawls ?", r: "Les inégalités sont justes seulement si elles profitent aux plus défavorisés (et si les positions sont ouvertes à tous)." },
        { q: "Quand Rawls a-t-il publié Théorie de la justice ?", r: "En 1971. Un extrait est tombé en explication de texte au bac 2025 (métropole)." },
      ],
      quiz: [
        { q: "Une loi interdisant aux femmes de voter était légale à son époque. On peut pourtant la dire :", choix: ["illégitime", "illégale", "commutative", "positive"], bonne: 0, expl: "Elle était conforme au droit positif (légale) mais contraire à la justice (illégitime).", niv: 2 },
        { q: "Dans un échange, je paie le prix exact de la marchandise. Aristote parle de justice :", choix: ["distributive", "géométrique", "commutative", "naturelle"], bonne: 2, expl: "La justice des échanges est commutative et suit une égalité arithmétique.", niv: 1 },
        { q: "Une bourse est attribuée selon les notes et les besoins de chaque élève. C'est la justice :", choix: ["commutative", "arithmétique", "de l'anneau de Gygès", "distributive"], bonne: 3, expl: "Partager selon le mérite ou les besoins, c'est la justice distributive, proportionnelle.", niv: 2 },
        { q: "Quel personnage de Platon soutient que le juste par nature, c'est la domination du fort ?", choix: ["Gygès", "Calliclès", "Socrate", "Glaucon"], bonne: 1, expl: "Dans le Gorgias, Calliclès oppose la loi des faibles à la justice naturelle du fort.", niv: 1 },
        { q: "Un juge adapte une règle générale qui, appliquée à la lettre, serait cruelle dans un cas précis. Il fait preuve :", choix: ["d'équité", "de justice commutative", "de droit positif", "d'un voile d'ignorance"], bonne: 0, expl: "L'équité corrige la loi quand sa généralité la rend injuste dans un cas particulier (Aristote).", niv: 2 },
        { q: "Quel auteur imagine le voile d'ignorance ?", choix: ["Hobbes", "Pascal", "Aristote", "Rawls"], bonne: 3, expl: "Rawls, Théorie de la justice (1971).", niv: 1 },
        { q: "Selon le principe de différence, une inégalité de revenus est juste si :", choix: ["elle récompense l'effort de chacun selon son travail", "elle améliore la situation des plus défavorisés", "elle est votée par la majorité", "elle respecte la loi du plus fort"], bonne: 1, expl: "Rawls admet des inégalités seulement si elles profitent aussi aux plus défavorisés.", niv: 2 },
        { q: "Que montre l'histoire de l'anneau de Gygès ?", choix: ["La justice dépend de la richesse et du rang des citoyens", "Les cités grecques donnent le droit au plus fort", "Les hommes sont parfois justes par peur d'être vus", "La justice consiste à rendre à chacun son dû"], bonne: 2, expl: "Devenu invisible, Gygès commet des injustices : est-on juste par vertu ou par crainte de la sanction ?", niv: 2 },
        { q: "Pourquoi traiter tout le monde exactement de la même façon peut-il être injuste ?", choix: ["Les situations différentes appellent un traitement adapté", "L'égalité stricte est interdite par la loi française", "La justice ne concerne que les échanges entre commerçants honnêtes", "Seule la force décide de ce qui est juste"], bonne: 0, expl: "La justice distributive et l'équité tiennent compte des différences : égalité n'est pas identité.", niv: 3 },
        { q: "« On a fait que ce qui est fort fût juste. » Pascal veut dire que :", choix: ["la force doit se soumettre au droit naturel", "la justice des lois repose souvent sur la force", "les faibles ont inventé la morale pour dompter les forts", "la justice est une harmonie de l'âme"], bonne: 1, expl: "Faute de rendre la justice forte, on a habillé la force en justice. Ne pas confondre avec Calliclès, pour qui les faibles inventent la loi.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 8 Le langage
    {
      chapitre: 'philo-g-8',
      fiche: `## Le langage

### Définir la notion
- Le **langage** est la capacité d'exprimer et de communiquer sa pensée au moyen de **signes**. Une **langue** est un système particulier de signes (le français, la langue des signes).
- Un **signe** associe un **signifiant** (le son ou l'écrit « arbre ») et un **signifié** (le concept d'arbre). **Saussure** (« Cours de linguistique générale », 1916) : ce lien est **arbitraire**, il n'y a aucune raison naturelle pour que ce son désigne cette chose.

### Thèse 1 : le langage est propre à l'homme
- **Aristote** (« Les Politiques ») : l'homme est le seul animal doté du **logos** (parole et raison). La voix animale exprime le plaisir et la douleur ; la parole humaine exprime l'utile, le juste et l'injuste.
- **Descartes** (lettre au marquis de Newcastle, 1646) : les pies et perroquets prononcent des mots, mais ne **répondent** pas à propos. Le vrai langage montre une **pensée**.
- **Benveniste** : la « danse » des **abeilles** (étudiée par Karl von Frisch) transmet une information (direction, distance du pollen), mais ce n'est pas un langage : pas de **dialogue**, pas de signes combinables à l'infini, message fixe.

### Thèse 2 : le langage et la pensée sont liés
- **Hegel** : « c'est dans les mots que nous pensons ». Une pensée sans mots est confuse ; l'**ineffable** (ce qui ne peut se dire) n'est qu'une pensée encore obscure.
- **Bergson** : à l'inverse, les mots sont des **étiquettes** générales, utiles pour agir, qui ne saisissent pas ce que nos sentiments ont d'unique. Le langage trahit l'**intériorité**.

### Thèse 3 : le langage agit et peut manipuler
- **Austin** (« Quand dire, c'est faire », 1962) : certains énoncés ne décrivent pas, ils **accomplissent** une action : « Je vous déclare unis par le mariage », « Je promets ». Ce sont des énoncés **performatifs**.
- **Platon** (« Gorgias ») critique la **rhétorique** des sophistes : l'art de **persuader** sans se soucier du vrai, qui flatte au lieu d'instruire.
- **Persuader / convaincre** (repère) : **convaincre**, c'est obtenir l'accord par des **raisons** valables pour tous ; **persuader**, c'est l'obtenir par les **émotions**, la séduction, l'autorité.
- **Concept / image / métaphore** (repère) : le langage poétique et la métaphore peuvent dire autrement ce que le concept ne dit pas.

### Repères et exemples
- Exemple : la publicité et la propagande utilisent la persuasion plus que la conviction.
- Les mots peuvent blesser : l'insulte est un acte, pas seulement un son.

### À retenir pour le bac
- Signe, signifiant, signifié, arbitraire (Saussure).
- Langage humain contre communication animale (Aristote, Descartes, Benveniste).
- Langage et pensée : Hegel (on pense dans les mots), Bergson (les mots-étiquettes).
- Tombé en 2026 (métropole) : « Avons-nous la maîtrise de nos paroles ? » Penser aux performatifs, à la persuasion et au lapsus (Freud).`,
      cartes: [
        { q: "Langage ou langue ?", r: "Le langage est la capacité de communiquer par des signes. Une langue est un système particulier de signes (français, anglais, langue des signes)." },
        { q: "Signifiant et signifié (Saussure) ?", r: "Signifiant : la forme sonore ou écrite du mot. Signifié : le concept qu'il désigne." },
        { q: "Pourquoi le signe est-il arbitraire selon Saussure ?", r: "Rien dans le son « arbre » ne ressemble à un arbre : le lien entre signifiant et signifié est conventionnel." },
        { q: "Quelle différence Aristote fait-il entre la voix et la parole ?", r: "La voix animale exprime plaisir et douleur. La parole humaine (logos) exprime l'utile, le juste et l'injuste." },
        { q: "Pourquoi les perroquets ne parlent-ils pas vraiment selon Descartes ?", r: "Ils répètent des mots mais ne répondent pas à propos : leur parole ne montre aucune pensée." },
        { q: "Pourquoi la danse des abeilles n'est-elle pas un langage selon Benveniste ?", r: "Pas de dialogue (une abeille ne répond pas par un message), contenu limité, pas de signes recombinables à l'infini." },
        { q: "Que veut dire Hegel par « c'est dans les mots que nous pensons » ?", r: "La pensée a besoin des mots pour devenir claire ; l'ineffable n'est qu'une pensée encore confuse." },
        { q: "Quelle critique Bergson fait-il du langage ?", r: "Les mots sont des étiquettes générales utiles pour agir, qui ne saisissent pas ce que nos sentiments ont d'unique." },
        { q: "Qu'est-ce qu'un énoncé performatif (Austin) ?", r: "Un énoncé qui accomplit l'action qu'il dit : « Je promets », « Je vous déclare unis »." },
        { q: "Persuader ou convaincre ?", r: "Convaincre : obtenir l'accord par des raisons valables pour tous. Persuader : l'obtenir par les émotions, la séduction ou l'autorité." },
        { q: "Que reproche Platon à la rhétorique des sophistes ?", r: "C'est l'art de persuader sans souci de la vérité, qui flatte au lieu d'instruire (Gorgias)." },
        { q: "Quel sujet sur le langage est tombé au bac 2026 (métropole) ?", r: "« Avons-nous la maîtrise de nos paroles ? »" },
      ],
      quiz: [
        { q: "Pour Saussure, le lien entre le mot « chat » et l'idée de chat est :", choix: ["naturel", "arbitraire", "performatif", "ineffable"], bonne: 1, expl: "Le signe est arbitraire : rien dans les sons ne ressemble à l'animal (d'autres langues disent cat, gato).", niv: 1 },
        { q: "Un maire déclare : « Je vous déclare unis par les liens du mariage. » Cet énoncé est :", choix: ["descriptif", "rhétorique", "ineffable", "performatif"], bonne: 3, expl: "Dire, c'est ici faire : l'énoncé accomplit le mariage (Austin).", niv: 2 },
        { q: "Quel auteur refuse de voir un langage dans la danse des abeilles ?", choix: ["Benveniste", "Saussure", "Austin", "Hegel"], bonne: 0, expl: "Benveniste montre que cette communication n'a ni dialogue ni signes recombinables.", niv: 1 },
        { q: "Un perroquet dit « bonjour » à chaque fois qu'on ouvre la porte, même la nuit. Descartes en conclurait que :", choix: ["il possède un langage simple", "il pense comme un enfant", "il ne répond pas à propos", "il persuade son maître"], bonne: 2, expl: "Le vrai langage s'adapte à la situation et manifeste une pensée ; la répétition mécanique non.", niv: 2 },
        { q: "Selon Aristote, la parole humaine permet d'exprimer, à la différence de la voix animale :", choix: ["le plaisir et la douleur", "le juste et l'injuste", "la peur et la colère", "les besoins du corps"], bonne: 1, expl: "La voix exprime plaisir et douleur ; le logos exprime l'utile, le juste et l'injuste, base de la vie politique.", niv: 2 },
        { q: "« Je sens bien ce que je veux dire, mais je ne trouve pas les mots. » Hegel répondrait que :", choix: ["la pensée est toujours supérieure aux mots", "le langage trahit la pensée", "les mots sont arbitraires", "une pensée sans mots reste confuse"], bonne: 3, expl: "Pour Hegel, on pense dans les mots ; l'ineffable est une pensée inachevée. Le choix « le langage trahit la pensée » serait plutôt bergsonien.", niv: 2 },
        { q: "Pourquoi, selon Bergson, les mots ne disent-ils pas exactement nos sentiments ?", choix: ["Ils sont des étiquettes générales", "Ils sont tous d'origine latine", "Ils sont arbitraires et changent sans cesse", "Ils ne servent qu'à persuader"], bonne: 0, expl: "Le mot « amour » vaut pour tous les amours : il efface ce que mon sentiment a d'unique.", niv: 2 },
        { q: "Une publicité montre un acteur souriant pour faire acheter un crédit. Elle cherche surtout à :", choix: ["convaincre", "démontrer", "persuader", "définir"], bonne: 2, expl: "Elle joue sur l'émotion et l'image, pas sur des raisons valables pour tous : c'est persuader.", niv: 2 },
        { q: "Pour traiter « Avons-nous la maîtrise de nos paroles ? », quel argument montre que nos mots peuvent nous échapper ?", choix: ["Le signe est un mélange de son et de sens", "Le lapsus révèle ce que nous ne voulions pas dire", "Les animaux communiquent sans parler", "La langue française est arbitraire"], bonne: 1, expl: "Le lapsus (Freud) montre une parole qui dit plus que ce que veut le locuteur. Les autres choix ne parlent pas de maîtrise.", niv: 3 },
        { q: "Pourquoi Platon oppose-t-il la rhétorique à la philosophie ?", choix: ["La rhétorique cherche l'accord sans souci du vrai", "La rhétorique utilise trop de mots savants et obscurs", "La philosophie refuse tout usage du langage", "La philosophie veut d'abord plaire au peuple"], bonne: 0, expl: "La rhétorique sophistique persuade ; la philosophie cherche le vrai par le dialogue.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 9 La liberté
    {
      chapitre: 'philo-g-9',
      fiche: `## La liberté

### Définir la notion
- Au sens courant, être **libre**, c'est faire ce que l'on veut, sans obstacle. Mais faire ce qu'on veut, est-ce être libre si nos désirs nous dominent ?
- **Libre arbitre** : le pouvoir de choisir entre plusieurs possibles, sans être déterminé.
- **Déterminisme** : l'idée que tout ce qui arrive a des causes qui le rendent nécessaire.
- **Liberté politique** : les droits garantis par la loi (expression, réunion, vote).
- **Contingent / nécessaire** (repère) : est contingent ce qui pourrait ne pas être ; nécessaire, ce qui ne peut pas être autrement.

### Thèse 1 : nous avons un libre arbitre (Descartes, Sartre)
- **Descartes** (« Méditations », IV) : la volonté est **infinie**, c'est en elle que l'homme ressemble le plus à Dieu. Mais la **liberté d'indifférence** (choisir sans raison) est le **plus bas degré** de la liberté. La vraie liberté suit ce que l'entendement voit clairement comme vrai et bon.
- **Sartre** (« L'existentialisme est un humanisme », 1946) : chez l'homme, « l'**existence précède l'essence** ». Il n'a pas de nature fixée d'avance : il se définit par ses actes. Il est « **condamné à être libre** », donc **responsable** de ce qu'il fait. Invoquer sa nature pour s'excuser, c'est être de **mauvaise foi**.

### Thèse 2 : la liberté est une illusion (Spinoza)
- **Spinoza** (« Éthique », lettre à Schuller) : une pierre lancée qui penserait se croirait libre de continuer son mouvement. Les hommes se croient libres parce qu'ils sont **conscients de leurs désirs** et **ignorants des causes** qui les déterminent.
- La vraie liberté n'est pas le libre arbitre, mais la **connaissance de la nécessité** : comprendre les causes qui nous font agir pour agir selon notre propre nature.

### Thèse 3 : la liberté passe par la loi
- **Rousseau** (« Du contrat social », 1762) : « l'obéissance à la loi qu'on s'est prescrite est liberté ». Perdre la liberté naturelle, c'est gagner la **liberté civile**.
- **Montesquieu** : la liberté politique est le droit de faire tout ce que les lois permettent.
- **Kant** : être libre, c'est être **autonome**, obéir à la loi morale que la raison se donne, et non à ses penchants.
- **John Stuart Mill** (« De la liberté », 1859) : la seule raison légitime de limiter la liberté d'un individu est d'empêcher qu'il **nuise à autrui** (principe de non-nuisance).

### Repères et exemples
- **Obligation / contrainte** : la loi oblige sans forcément contraindre.
- **Possible / impossible**.
- Exemple : un fumeur qui « choisit » sa cigarette est-il libre, ou dépendant ?

### À retenir pour le bac
- Libre arbitre, déterminisme, liberté politique : ne pas mélanger.
- Descartes (volonté infinie, indifférence = plus bas degré), Sartre (existence précède l'essence, condamné à être libre).
- Spinoza : illusion du libre arbitre ; liberté = connaissance de la nécessité.
- Piège : la liberté n'est pas l'absence de toute règle. Rousseau, Kant : obéir à la loi qu'on se donne, c'est être libre.`,
      cartes: [
        { q: "Qu'est-ce que le libre arbitre ?", r: "Le pouvoir de choisir entre plusieurs possibles sans y être déterminé par une cause extérieure." },
        { q: "Qu'est-ce que le déterminisme ?", r: "L'idée que tout ce qui arrive a des causes qui le rendent nécessaire." },
        { q: "Contingent ou nécessaire ?", r: "Contingent : ce qui pourrait ne pas être ou être autrement. Nécessaire : ce qui ne peut pas être autrement." },
        { q: "Pourquoi la volonté est-elle infinie selon Descartes ?", r: "Je peux vouloir ou refuser n'importe quoi : c'est par la volonté que l'homme ressemble le plus à Dieu (Méditation IV)." },
        { q: "Qu'est-ce que la liberté d'indifférence chez Descartes ?", r: "Choisir sans raison de préférer un parti à l'autre. C'est le plus bas degré de la liberté." },
        { q: "Que signifie « l'existence précède l'essence » (Sartre) ?", r: "L'homme existe d'abord, puis se définit par ses actes : il n'a pas de nature fixée d'avance." },
        { q: "Pourquoi l'homme est-il « condamné à être libre » selon Sartre ?", r: "Il ne peut pas ne pas choisir ; même refuser de choisir est un choix. Il est donc responsable de tout ce qu'il fait." },
        { q: "Quel exemple Spinoza utilise-t-il contre le libre arbitre ?", r: "La pierre lancée qui, si elle pensait, se croirait libre de continuer son mouvement (lettre à Schuller)." },
        { q: "Qu'est-ce que la liberté pour Spinoza ?", r: "Non pas le libre arbitre, mais la connaissance des causes qui nous déterminent, pour agir selon notre propre nature." },
        { q: "Que dit Rousseau de l'obéissance à la loi ?", r: "« L'obéissance à la loi qu'on s'est prescrite est liberté » : dans le contrat social, on gagne la liberté civile." },
        { q: "Comment Montesquieu définit-il la liberté politique ?", r: "Le droit de faire tout ce que les lois permettent." },
        { q: "Qu'est-ce que le principe de non-nuisance de Mill ?", r: "La seule raison légitime de limiter la liberté d'un individu est d'empêcher qu'il nuise à autrui (De la liberté, 1859)." },
      ],
      quiz: [
        { q: "« Les hommes se croient libres parce qu'ils sont conscients de leurs désirs et ignorants des causes. » Cette thèse est de :", choix: ["Descartes", "Sartre", "Spinoza", "Rousseau"], bonne: 2, expl: "C'est la critique spinoziste du libre arbitre (Éthique, lettre à Schuller).", niv: 1 },
        { q: "Pour Descartes, choisir au hasard entre deux chemins identiques relève de :", choix: ["la liberté d'indifférence", "la plus haute liberté", "la mauvaise foi", "la liberté civile"], bonne: 0, expl: "C'est la liberté d'indifférence, le plus bas degré de la liberté selon la Méditation IV.", niv: 2 },
        { q: "« L'existence précède l'essence » signifie que l'homme :", choix: ["a une nature fixée par Dieu", "est déterminé par son milieu", "ne peut rien choisir", "se définit par ses actes"], bonne: 3, expl: "Pour Sartre, l'homme n'a pas de nature donnée d'avance ; il se fait par ses choix.", niv: 1 },
        { q: "Un homme dit : « Je suis comme ça, je suis né colérique. » Sartre y verrait :", choix: ["un déterminisme prouvé", "de la mauvaise foi", "une liberté d'indifférence", "une obéissance à la loi"], bonne: 1, expl: "Se cacher derrière une prétendue nature pour fuir sa responsabilité, c'est la mauvaise foi.", niv: 2 },
        { q: "Selon Rousseau, en entrant dans le contrat social, l'homme gagne :", choix: ["la liberté naturelle", "le libre arbitre", "la liberté civile", "la liberté d'indifférence"], bonne: 2, expl: "Il perd la liberté naturelle illimitée mais gagne la liberté civile, garantie par la loi commune.", niv: 2 },
        { q: "Un État interdit de fumer dans les lieux publics, mais pas chez soi. Quel principe justifie cette limite ?", choix: ["Le libre arbitre cartésien", "La liberté d'indifférence", "La connaissance de la nécessité", "Le principe de non-nuisance"], bonne: 3, expl: "Mill : on peut limiter la liberté d'un individu seulement pour empêcher qu'il nuise à autrui.", niv: 2 },
        { q: "Pour Spinoza, être libre consiste à :", choix: ["connaître les causes qui nous déterminent", "choisir sans être causé par rien", "faire tout ce que l'on désire", "obéir aux ordres et aux lois de la cité où l'on vit"], bonne: 0, expl: "La liberté est la connaissance de la nécessité, non un pouvoir de choisir sans cause.", niv: 1 },
        { q: "Un fumeur affirme qu'il choisit librement chaque cigarette. Quel argument nuance le mieux ?", choix: ["Il obéit à la loi qu'il s'est prescrite", "Il peut faire ce qu'il veut sans être libre de ce qu'il veut", "Il fait preuve de liberté d'indifférence", "Il agit selon le principe de non-nuisance défendu par John Stuart Mill"], bonne: 1, expl: "Faire ce qu'on veut ne suffit pas : son désir lui-même peut être une dépendance.", niv: 3 },
        { q: "Pourquoi peut-on dire que la loi n'est pas l'ennemie de la liberté ?", choix: ["Elle supprime les contraintes de la vie sociale", "Elle permet de faire tout ce qu'on désire", "Elle protège chacun de la domination des autres", "Elle rend les hommes égaux en force et en richesse"], bonne: 2, expl: "Sans loi, le plus fort domine ; la loi garantit à chacun une sphère de liberté (Rousseau, Montesquieu).", niv: 3 },
        { q: "Pour Descartes, la volonté humaine est :", choix: ["limitée comme l'entendement", "infinie, à l'image de Dieu", "une illusion due à l'ignorance", "déterminée par les passions"], bonne: 1, expl: "L'entendement est limité, mais la volonté est infinie : c'est l'écart entre les deux qui explique l'erreur.", niv: 2 },
      ],
    },
    // ---------------------------------------------------------------- 10 La nature
    {
      chapitre: 'philo-g-10',
      fiche: `## La nature

### Définir la notion
- La **nature** désigne d'abord l'ensemble des êtres et des phénomènes qui existent **sans intervention humaine** : montagnes, animaux, climat. Elle s'oppose à l'**artifice** (ce que l'homme fabrique) et à la **culture** (ce qu'il transmet et apprend).
- Elle désigne aussi l'**essence** d'une chose : la « nature humaine », ce qui fait qu'un homme est un homme.
- **Kant** : la nature est l'ensemble des phénomènes soumis à des **lois** (sens scientifique).

### Thèse 1 : la nature est un ordre qui a sa propre fin (Aristote)
- **Aristote** (« Physique ») : la nature (*phusis*) est un **principe de mouvement** interne. Une graine devient arbre d'elle-même ; un lit ne devient pas lit tout seul.
- « La nature ne fait rien en vain » : chaque être tend vers sa **fin** (sa forme accomplie). Vision **finaliste**.
- **Spinoza** : « Dieu, c'est-à-dire la nature » (*Deus sive natura*) ; il n'y a pas de fins dans la nature, seulement des causes nécessaires.

### Thèse 2 : la nature comme matière à maîtriser (Descartes)
- **Descartes** (« Discours de la méthode », VI, 1637) : grâce à la science, nous pouvons nous rendre « **comme maîtres et possesseurs de la nature** ». La nature est une **machine** (mécanisme), sans intention.
- Ce projet a permis la médecine moderne, mais il a aussi conduit à l'**exploitation** de la nature.
- **Hans Jonas** (« Le Principe responsabilité », 1979) : la puissance technique menace la nature et les générations futures. Il faut agir de façon à ce que les effets de nos actes soient compatibles avec la permanence d'une vie humaine authentique.

### Thèse 3 : y a-t-il une nature humaine ?
- **Rousseau** (« Discours sur l'origine de l'inégalité », 1755) : l'**état de nature** est une hypothèse. L'homme naturel est bon et libre ; ce qui le distingue de l'animal, c'est la **perfectibilité**, la capacité de se transformer. Mais cette faculté le pervertit aussi.
- **Sartre** : il n'y a pas de nature humaine, mais une **condition** humaine.
- **Merleau-Ponty** (« Phénoménologie de la perception ») : chez l'homme, « tout est fabriqué et tout est naturel » : on ne peut pas séparer en lui ce qui est naturel et ce qui est culturel.
- **Lévi-Strauss** (« Les Structures élémentaires de la parenté », 1949) : la **prohibition de l'inceste** est universelle (comme la nature) mais c'est une règle (comme la culture) : elle marque le passage de la nature à la culture.

### Repères et exemples
- **En fait / en droit** : ce qui est naturel (en fait) est-il pour autant bon (en droit) ?
- **Origine / fondement** : l'état de nature n'est pas une origine historique, mais un fondement théorique.
- Exemple : les « enfants sauvages » (Victor de l'Aveyron) montrent que, sans éducation, l'homme ne développe ni langage ni comportement humain ordinaire.

### À retenir pour le bac
- Nature opposée à artifice et à culture ; nature comme essence.
- Aristote (finalisme), Descartes (maîtres et possesseurs, mécanisme), Jonas (responsabilité).
- Rousseau (perfectibilité), Merleau-Ponty, Lévi-Strauss (prohibition de l'inceste).
- Piège : « naturel » ne veut pas dire « bon ». Passer du fait au droit est une erreur de raisonnement.`,
      cartes: [
        { q: "À quoi s'oppose la nature ?", r: "À l'artifice (ce que l'homme fabrique) et à la culture (ce qu'il apprend et transmet)." },
        { q: "Qu'est-ce que la phusis chez Aristote ?", r: "La nature comme principe interne de mouvement : la graine devient arbre d'elle-même, le lit ne se fait pas tout seul." },
        { q: "Que signifie « la nature ne fait rien en vain » ?", r: "Pour Aristote, chaque être naturel tend vers une fin : c'est une vision finaliste de la nature." },
        { q: "Que signifie Deus sive natura chez Spinoza ?", r: "« Dieu, c'est-à-dire la nature » : Dieu n'est pas extérieur au monde, il est la nature elle-même, sans fins ni intentions." },
        { q: "Que propose Descartes dans la sixième partie du Discours de la méthode ?", r: "Que la science nous rende « comme maîtres et possesseurs de la nature »." },
        { q: "Qu'est-ce que le mécanisme cartésien ?", r: "L'idée que la nature fonctionne comme une machine, selon des lois, sans but ni intention." },
        { q: "Quelle est l'idée centrale du Principe responsabilité de Jonas (1979) ?", r: "La puissance technique menace la nature et l'avenir : nous sommes responsables envers les générations futures." },
        { q: "Qu'est-ce que la perfectibilité chez Rousseau ?", r: "La capacité propre à l'homme de se transformer et de développer ses facultés. Elle fait son progrès mais aussi sa corruption." },
        { q: "Que dit Merleau-Ponty du naturel et du culturel chez l'homme ?", r: "Que chez l'homme « tout est fabriqué et tout est naturel » : on ne peut pas séparer les deux." },
        { q: "Pourquoi la prohibition de l'inceste marque-t-elle le passage de la nature à la culture (Lévi-Strauss) ?", r: "Elle est universelle comme ce qui est naturel, mais c'est une règle comme ce qui est culturel." },
        { q: "Que montrent les enfants sauvages ?", r: "Sans vie sociale ni éducation, l'homme ne développe ni langage ni comportements humains ordinaires." },
        { q: "Pourquoi « naturel » ne veut-il pas dire « bon » ?", r: "Ce qui est un fait de nature n'est pas pour autant une norme : passer du fait au droit est une erreur." },
      ],
      quiz: [
        { q: "Pour Aristote, ce qui distingue un être naturel d'un objet fabriqué, c'est :", choix: ["son utilité pour l'homme", "sa beauté", "un principe interne de mouvement", "sa matière vivante"], bonne: 2, expl: "La graine devient arbre d'elle-même ; le lit a besoin d'un menuisier.", niv: 1 },
        { q: "« Nous rendre comme maîtres et possesseurs de la nature » est une expression de :", choix: ["Bacon", "Jonas", "Rousseau", "Descartes"], bonne: 3, expl: "Discours de la méthode, sixième partie (1637).", niv: 1 },
        { q: "Une entreprise dit : « Ce produit est naturel, donc il est bon pour vous. » Quelle erreur commet-elle ?", choix: ["Elle passe du fait au droit", "Elle confond nature et culture", "Elle confond origine et fondement", "Elle oublie la perfectibilité"], bonne: 0, expl: "Être naturel est un fait ; être bon est un jugement de valeur. Les poisons aussi sont naturels.", niv: 2 },
        { q: "Quel auteur fait de la prohibition de l'inceste le passage de la nature à la culture ?", choix: ["Rousseau", "Lévi-Strauss", "Merleau-Ponty", "Aristote"], bonne: 1, expl: "Lévi-Strauss, Les Structures élémentaires de la parenté (1949).", niv: 1 },
        { q: "Un philosophe demande que nos actions ne compromettent pas la vie des générations futures. Il s'inspire de :", choix: ["Descartes", "Spinoza", "Jonas", "Aristote"], bonne: 2, expl: "C'est l'éthique de la responsabilité de Hans Jonas face à la puissance technique.", niv: 2 },
        { q: "Pour Rousseau, ce qui distingue l'homme de l'animal à l'état de nature, c'est :", choix: ["la perfectibilité", "la force physique", "la raison calculatrice", "la vie en société"], bonne: 0, expl: "La perfectibilité, faculté de se transformer, est propre à l'homme selon le Discours sur l'origine de l'inégalité.", niv: 2 },
        { q: "Victor de l'Aveyron, trouvé seul dans la forêt, ne parlait pas. Cet exemple montre que :", choix: ["le langage est entièrement inné", "l'homme est mauvais par nature", "la nature humaine est fixée dès la naissance de l'enfant", "les capacités humaines exigent toujours une culture"], bonne: 3, expl: "Sans éducation, les capacités humaines ne se développent pas : la culture est nécessaire à l'homme.", niv: 2 },
        { q: "Chez l'homme, « tout est fabriqué et tout est naturel » : cette formule de Merleau-Ponty signifie que :", choix: ["la culture a fait disparaître la nature en l'homme moderne", "on ne peut séparer nature et culture en l'homme", "l'homme n'a pas de corps naturel", "la nature humaine est une machine"], bonne: 1, expl: "Même manger ou marcher est façonné par la culture ; même la culture repose sur le corps naturel.", niv: 2 },
        { q: "Pourquoi l'état de nature de Rousseau n'est-il pas une période de l'histoire ?", choix: ["C'est une hypothèse pour penser ce qu'est l'homme", "Les archéologues ont prouvé qu'il n'a pas existé", "Il a été inventé par Hobbes", "Il ne concerne que les animaux"], bonne: 0, expl: "Rousseau écarte les faits : l'état de nature est un fondement théorique, pas une origine historique.", niv: 3 },
        { q: "Quelle différence oppose Aristote et Descartes sur la nature ?", choix: ["Aristote la croit sans lois, Descartes divine", "Aristote y voit des fins, Descartes un mécanisme", "Aristote veut la dominer, Descartes la respecter", "Aristote la croit humaine, Descartes animale"], bonne: 1, expl: "Finalisme (chaque être tend vers sa fin) contre mécanisme (une machine sans but).", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 11 La raison
    {
      chapitre: 'philo-g-11',
      fiche: `## La raison

### Définir la notion
- La **raison** est la faculté de **penser de façon ordonnée** : juger, raisonner, distinguer le vrai du faux et le bien du mal. Elle est souvent présentée comme ce qui distingue l'homme de l'animal (« animal raisonnable »).
- On distingue la raison **théorique** (connaître) et la raison **pratique** (bien agir).
- « Avoir une raison » : une **cause** ou un **motif**. **Principe / cause / fin** (repère) : la raison cherche le pourquoi des choses.
- **Intuitif / discursif** (repère) : connaître d'un seul regard (intuition) ou par étapes enchaînées (raisonnement).

### Thèse 1 : la raison est universelle et guide la connaissance (Descartes, Leibniz)
- **Descartes** (« Discours de la méthode », 1637) : « le **bon sens** est la chose du monde la mieux partagée ». Tous les hommes ont la même raison ; les différences viennent de la **méthode**.
- Ses **quatre règles** : n'accepter que l'évidence ; diviser les difficultés (**analyse**) ; aller du simple au complexe (**synthèse**) ; faire des dénombrements complets.
- **Leibniz** : le **principe de raison suffisante** : rien n'arrive sans qu'il y ait une raison pour laquelle c'est ainsi plutôt qu'autrement.

### Thèse 2 : la raison a des limites
- **Pascal** (« Pensées ») : « Le **cœur** a ses raisons que la raison ne connaît point. » Certaines vérités (les premiers principes, Dieu) sont senties par le cœur, pas démontrées.
- **Hume** (« Traité de la nature humaine ») : « la raison est et ne doit être que l'**esclave des passions** ». Elle calcule les moyens, mais ce sont les désirs qui fixent les buts.
- **Kant** (« Critique de la raison pure », 1781) : la raison connaît les phénomènes, mais quand elle veut connaître ce qui dépasse l'expérience (Dieu, l'âme, le monde comme un tout), elle tombe dans des contradictions. Kant dit qu'il a dû limiter le savoir pour faire place à la **croyance**.
- **Croire / savoir** (repère) : savoir, c'est pouvoir justifier ; croire, c'est tenir pour vrai sans preuve suffisante.

### Thèse 3 : la raison émancipe, mais peut aussi dominer
- **Kant** (« Qu'est-ce que les Lumières ? », 1784) : les Lumières sont la sortie de l'homme de l'état de **minorité**, où il se laisse guider par d'autres. Devise : « **Sapere aude** », « Ose te servir de ton propre entendement ».
- **Hegel** : « Ce qui est rationnel est réel, et ce qui est réel est rationnel » ; l'histoire a un sens rationnel.
- **Adorno** et **Horkheimer** : la raison peut devenir **instrumentale**, simple calcul d'efficacité au service de la domination (les crimes du XXe siècle ont été organisés avec méthode).

### Repères et exemples
- **Analyse / synthèse** ; **intuitif / discursif** ; **croire / savoir**.
- Exemple : une démonstration mathématique est discursive ; « deux et deux font quatre » se saisit par intuition.

### À retenir pour le bac
- Descartes : bon sens universel et méthode ; Leibniz : raison suffisante.
- Limites : Pascal (le cœur), Hume (esclave des passions), Kant (limites de la connaissance).
- Lumières (Kant, sapere aude) contre raison instrumentale (Adorno, Horkheimer).
- Tombé en 2025 (centres étrangers) : « Peut-on douter des pouvoirs de la raison ? »`,
      cartes: [
        { q: "Raison théorique ou raison pratique ?", r: "Théorique : la raison qui cherche à connaître. Pratique : la raison qui guide l'action morale." },
        { q: "Intuitif ou discursif ?", r: "Intuitif : saisi d'un seul regard, immédiatement. Discursif : obtenu par étapes, par un raisonnement." },
        { q: "Que dit Descartes du bon sens au début du Discours de la méthode ?", r: "Que c'est la chose du monde la mieux partagée : les différences viennent de la façon de conduire sa raison, de la méthode." },
        { q: "Quelles sont les quatre règles de la méthode de Descartes ?", r: "Évidence, analyse (diviser les difficultés), synthèse (aller du simple au complexe), dénombrements complets." },
        { q: "Qu'est-ce que le principe de raison suffisante (Leibniz) ?", r: "Rien n'arrive sans une raison pour laquelle c'est ainsi plutôt qu'autrement." },
        { q: "Que veut dire Pascal par « le cœur a ses raisons » ?", r: "Certaines vérités (premiers principes, Dieu) sont senties par le cœur, pas démontrées par la raison." },
        { q: "Pourquoi Hume dit-il que la raison est l'esclave des passions ?", r: "La raison calcule les moyens, mais ce sont les passions qui fixent les buts de l'action." },
        { q: "Quelles limites Kant fixe-t-il à la raison ?", r: "Elle connaît les phénomènes de l'expérience, mais pas ce qui la dépasse (Dieu, l'âme, le monde comme un tout)." },
        { q: "Croire ou savoir ?", r: "Savoir : tenir pour vrai avec une justification suffisante. Croire : tenir pour vrai sans preuve suffisante." },
        { q: "Qu'est-ce que les Lumières selon Kant (1784) ?", r: "La sortie de l'homme de l'état de minorité, où il se laisse guider par d'autres. Devise : « Sapere aude », ose penser par toi-même." },
        { q: "Qu'est-ce que la raison instrumentale (Adorno, Horkheimer) ?", r: "Une raison réduite au calcul des moyens efficaces, sans réflexion sur les fins, qui peut servir la domination." },
        { q: "Quel sujet sur la raison est tombé en 2025 (centres étrangers) ?", r: "« Peut-on douter des pouvoirs de la raison ? »" },
      ],
      quiz: [
        { q: "« Le bon sens est la chose du monde la mieux partagée. » Cette phrase ouvre un livre de :", choix: ["Pascal", "Kant", "Leibniz", "Descartes"], bonne: 3, expl: "C'est la première phrase du Discours de la méthode (1637).", niv: 1 },
        { q: "Diviser un problème difficile en petites parties correspond à la règle cartésienne :", choix: ["de l'évidence", "de l'analyse", "de la synthèse", "du dénombrement"], bonne: 1, expl: "La deuxième règle demande de diviser chaque difficulté : c'est l'analyse.", niv: 1 },
        { q: "« La raison est et ne doit être que l'esclave des passions » est une thèse de :", choix: ["Hume", "Pascal", "Hegel", "Kant"], bonne: 0, expl: "Hume, Traité de la nature humaine : la raison calcule, les passions décident.", niv: 1 },
        { q: "Un ingénieur optimise un système sans se demander s'il sert une bonne cause. Il illustre :", choix: ["les Lumières", "le principe de raison suffisante", "la raison pratique kantienne", "la raison instrumentale"], bonne: 3, expl: "Calculer l'efficacité des moyens sans penser aux fins : c'est la raison instrumentale critiquée par Adorno et Horkheimer.", niv: 2 },
        { q: "« Je ne sais pas démontrer qu'elle m'aime, mais j'en suis sûr. » Quel auteur éclaire cette phrase ?", choix: ["Descartes", "Leibniz", "Pascal", "Hegel"], bonne: 2, expl: "Pour Pascal, le cœur connaît des vérités que la raison ne démontre pas.", niv: 2 },
        { q: "Un élève recopie les réponses d'un camarade sans chercher à comprendre. Kant dirait qu'il reste dans :", choix: ["l'état de minorité", "la raison instrumentale", "la liberté d'indifférence", "le doute méthodique"], bonne: 0, expl: "Se laisser guider par un autre au lieu de penser par soi-même, c'est la minorité dont les Lumières veulent sortir.", niv: 2 },
        { q: "Pour Kant, que se passe-t-il quand la raison veut connaître Dieu ou l'âme ?", choix: ["Elle les démontre par l'expérience", "Elle dépasse ses limites et tombe dans l'illusion", "Elle les connaît par intuition sensible", "Elle obéit aux passions"], bonne: 1, expl: "Au-delà de l'expérience, la raison produit des illusions, et parfois des thèses contraires également défendables : la connaissance est impossible, la croyance reste possible.", niv: 2 },
        { q: "Résoudre une équation en plusieurs étapes est une connaissance :", choix: ["intuitive", "sensible", "affective", "discursive"], bonne: 3, expl: "Elle procède par étapes enchaînées : elle est discursive.", niv: 2 },
        { q: "Pourquoi la critique de Hume ne revient-elle pas à dire que la raison est inutile ?", choix: ["Elle reste nécessaire pour trouver les moyens d'un but", "Elle décide seule des fins de l'action", "Elle commande aux passions et les fait taire", "Elle remplace la croyance religieuse par des calculs certains"], bonne: 0, expl: "Pour Hume, la raison est un outil indispensable, mais elle ne fixe pas les buts.", niv: 3 },
        { q: "Dans « Peut-on douter des pouvoirs de la raison ? », quel paradoxe faut-il repérer ?", choix: ["Douter de la raison, c'est encore utiliser la raison", "La raison et le cœur disent la même chose", "Le doute est une passion comme les autres", "Les animaux doutent plus souvent que les hommes de leurs sens"], bonne: 0, expl: "Critiquer la raison exige des raisons : c'est le cœur du problème (Kant fait une critique de la raison par elle-même).", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 12 La religion
    {
      chapitre: 'philo-g-12',
      fiche: `## La religion

### Définir la notion
- Une **religion** est un ensemble de **croyances** et de **pratiques** (rites, prières, fêtes) relatives au **sacré**, qui unit une communauté de fidèles.
- Le mot viendrait du latin *religare* (relier : les hommes entre eux et avec le divin) ou *relegere* (relire, recueillir avec soin).
- **Croire / savoir** (repère) : la **foi** est une confiance qui ne repose pas sur une démonstration.
- **Public / privé** (repère) : dans un État **laïque** (en France, loi de séparation des Églises et de l'État, 1905), la religion relève de la conscience de chacun.

### Thèse 1 : la religion a une fonction sociale (Durkheim)
- **Durkheim** (« Les Formes élémentaires de la vie religieuse », 1912) : toute religion distingue le **sacré** (ce qui est séparé et protégé par des interdits) et le **profane** (la vie ordinaire).
- La religion **unit** les fidèles dans une même communauté morale, une **Église**. À travers le culte, la société se célèbre elle-même.
- **Bergson** (« Les Deux Sources de la morale et de la religion », 1932) distingue la religion **statique** (qui protège la société) et la religion **dynamique** (l'élan des mystiques).

### Thèse 2 : la religion comme illusion ou aliénation
- **Feuerbach** (« L'Essence du christianisme », 1841) : Dieu est une **projection** des qualités humaines (amour, puissance, sagesse) idéalisées. L'homme s'appauvrit en donnant à Dieu ce qui lui appartient.
- **Marx** (1843) : la religion est « l'**opium du peuple** » : elle console de la misère réelle au lieu de pousser à la transformer.
- **Freud** (« L'Avenir d'une illusion », 1927) : la religion est une **illusion**, c'est-à-dire une croyance motivée par un **désir** : celui d'être protégé par un père tout-puissant.
- **Nietzsche** : « Dieu est mort » : les valeurs religieuses ont perdu leur force dans la culture moderne.

### Thèse 3 : foi et raison peuvent-elles s'accorder ?
- **Pascal** (« Pensées ») : le **pari** : si Dieu existe et que je crois, je gagne tout ; s'il n'existe pas, je ne perds presque rien. Il est donc raisonnable de parier sur Dieu. Pour Pascal, c'est le **cœur** qui sent Dieu, non la raison.
- **Kant** : on ne peut pas **démontrer** l'existence de Dieu, mais on peut la **postuler** pour donner un sens à la morale (« La religion dans les limites de la simple raison », 1793).
- **Spinoza** (« Traité théologico-politique », 1670) et **Locke** (« Lettre sur la tolérance », 1689) défendent la **liberté de penser** et la **tolérance** : l'État ne doit pas imposer une croyance.

### À retenir pour le bac
- Sacré et profane, rites et croyances, communauté (Durkheim).
- Critiques : Feuerbach (projection), Marx (opium du peuple), Freud (illusion), Nietzsche (mort de Dieu).
- Foi et raison : pari de Pascal, Kant (postulat), tolérance (Spinoza, Locke).
- Piège : chez Freud, une illusion n'est pas forcément fausse ; elle est une croyance née d'un désir.`,
      cartes: [
        { q: "Comment définir une religion ?", r: "Un ensemble de croyances et de pratiques relatives au sacré, qui unit une communauté de fidèles." },
        { q: "Quelles sont les deux étymologies possibles de religion ?", r: "Religare (relier les hommes entre eux et au divin) et relegere (relire, recueillir avec soin)." },
        { q: "Sacré ou profane (Durkheim) ?", r: "Sacré : ce qui est séparé et protégé par des interdits. Profane : la vie ordinaire." },
        { q: "Quelle est la fonction de la religion selon Durkheim ?", r: "Unir les fidèles dans une même communauté morale ; à travers le culte, la société se célèbre elle-même." },
        { q: "Religion statique ou dynamique (Bergson) ?", r: "Statique : elle protège et soude la société. Dynamique : l'élan créateur des mystiques, ouvert à toute l'humanité." },
        { q: "Quelle est la thèse de Feuerbach ?", r: "Dieu est la projection des qualités humaines idéalisées ; l'homme s'appauvrit en les attribuant à Dieu (L'Essence du christianisme, 1841)." },
        { q: "Pourquoi Marx dit-il que la religion est « l'opium du peuple » ?", r: "Elle console de la misère réelle au lieu de pousser à la transformer." },
        { q: "Qu'est-ce qu'une illusion selon Freud ?", r: "Une croyance motivée par un désir. Elle n'est pas forcément fausse, contrairement à une erreur." },
        { q: "Quel désir est à l'origine de la religion selon Freud ?", r: "Le désir d'être protégé par un père tout-puissant face à la détresse (L'Avenir d'une illusion, 1927)." },
        { q: "En quoi consiste le pari de Pascal ?", r: "Si Dieu existe et que je crois, je gagne tout ; s'il n'existe pas, je perds peu. Il est raisonnable de parier qu'il existe." },
        { q: "Que dit Kant de l'existence de Dieu ?", r: "On ne peut pas la démontrer, mais on peut la postuler pour donner un sens à la morale." },
        { q: "Que défendent Spinoza et Locke face à la religion ?", r: "La liberté de penser et la tolérance : l'État ne doit pas imposer de croyance." },
      ],
      quiz: [
        { q: "Pour Durkheim, toute religion repose d'abord sur la distinction entre :", choix: ["la foi et la raison", "le sacré et le profane", "le corps et l'âme", "le bien et le mal"], bonne: 1, expl: "Les Formes élémentaires de la vie religieuse (1912) : le sacré est séparé du profane par des interdits.", niv: 1 },
        { q: "« La religion est l'opium du peuple » est une formule de :", choix: ["Freud", "Nietzsche", "Feuerbach", "Marx"], bonne: 3, expl: "Marx, 1843 : la religion console de la misère au lieu de la combattre.", niv: 1 },
        { q: "Selon Feuerbach, Dieu est :", choix: ["une projection des qualités humaines", "un postulat de la raison pratique", "le fondement de la société", "une vérité sentie par le cœur"], bonne: 0, expl: "L'homme projette en Dieu ses propres qualités idéalisées et s'en dépossède.", niv: 1 },
        { q: "Un supporter refuse toute critique de son idole, qu'il protège par des interdits. Quel auteur aide à analyser ce comportement ?", choix: ["Pascal", "Kant", "Durkheim", "Spinoza"], bonne: 2, expl: "Séparer un objet par des interdits et un culte collectif : on retrouve la logique du sacré chez Durkheim.", niv: 2 },
        { q: "Pour Freud, la religion est une illusion parce qu'elle :", choix: ["a été prouvée fausse par la science", "naît du désir d'être protégé", "est imposée par l'État", "unit les fidèles entre eux"], bonne: 1, expl: "L'illusion est une croyance motivée par un désir ; elle n'est pas nécessairement fausse.", niv: 2 },
        { q: "« Si je gagne, je gagne tout ; si je perds, je ne perds rien. » Cet argument est :", choix: ["la projection de Feuerbach", "le postulat de Kant", "la religion dynamique", "le pari de Pascal"], bonne: 3, expl: "Pascal, Pensées : parier sur Dieu est raisonnable vu ce qui est en jeu.", niv: 2 },
        { q: "Une loi interdit d'imposer une religion et protège toutes les croyances. Elle applique un principe défendu par :", choix: ["Locke", "Marx", "Freud", "Feuerbach"], bonne: 0, expl: "Locke, Lettre sur la tolérance (1689) : l'État ne doit pas contraindre les consciences.", niv: 2 },
        { q: "Pour Kant, l'existence de Dieu :", choix: ["se démontre par la raison théorique", "est une illusion née du désir", "peut être postulée par la raison pratique", "se constate dans l'expérience"], bonne: 2, expl: "Indémontrable théoriquement, Dieu est un postulat qui donne sens à la morale.", niv: 2 },
        { q: "Pourquoi l'« illusion » de Freud n'est-elle pas une simple erreur ?", choix: ["Elle peut être vraie, mais naît toujours d'un désir", "Elle est fausse par définition", "Elle ne concerne que les enfants", "Elle est démontrée fausse par la psychanalyse et la science"], bonne: 0, expl: "Une erreur se corrige par les faits ; l'illusion se définit par son origine dans le désir. Piège classique.", niv: 3 },
        { q: "Quelle objection fait-on à la thèse de Marx sur la religion ?", choix: ["Elle oublie que la religion console les pauvres de leur misère", "La religion a aussi inspiré des luttes pour la justice", "Marx croyait au pari de Pascal", "La religion n'a pas de rites communs"], bonne: 1, expl: "Des croyants ont porté des combats sociaux (abolition de l'esclavage, droits civiques) : la religion ne fait pas que résigner.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 13 La science
    {
      chapitre: 'philo-g-13',
      fiche: `## La science

### Définir la notion
- La **science** est une **connaissance** rigoureuse, vérifiable et organisée, qui cherche à **expliquer** les phénomènes par des **lois**. Elle s'oppose à l'**opinion** (croyance non justifiée).
- On distingue les sciences **formelles** (mathématiques, logique : vérité par démonstration), les sciences de la **nature** (physique, biologie : vérité par l'expérience) et les sciences **humaines** (sociologie, histoire).
- **Expliquer / comprendre** (repère) : expliquer, c'est trouver les causes ; comprendre, c'est saisir le sens d'une action humaine.

### Thèse 1 : la science rompt avec l'opinion (Bachelard)
- **Bachelard** (« La Formation de l'esprit scientifique », 1938) : « l'**opinion** pense mal ; elle ne pense pas ». La science se construit **contre** les idées spontanées.
- Ces idées sont des **obstacles épistémologiques** : l'expérience première, les images, les généralisations hâtives. Exemple : croire qu'un objet lourd tombe plus vite qu'un léger.
- Rien n'est donné, tout est **construit** : un fait scientifique est préparé par une théorie.

### Thèse 2 : la méthode expérimentale
- **Galilée** (« L'Essayeur », 1623) : le grand livre de la nature est écrit en **langage mathématique**.
- **Cl. Bernard** (« Introduction à l'étude de la médecine expérimentale », 1865) : observation, **hypothèse**, **expérience** qui la vérifie ou l'infirme, conclusion. L'hypothèse est indispensable : on ne trouve que ce qu'on cherche.
- **Hume** : le problème de l'**induction** : avoir vu mille cygnes blancs ne prouve pas que tous les cygnes sont blancs.

### Thèse 3 : une vérité scientifique est provisoire
- **Karl Popper** (« La Logique de la découverte scientifique », 1934) : une théorie est scientifique si elle est **réfutable** (falsifiable) : si on peut imaginer un fait qui la contredirait. La science avance par **essais et erreurs** ; une théorie n'est jamais définitivement prouvée, seulement **corroborée**.
- **Thomas Kuhn** (« La Structure des révolutions scientifiques », 1962) : la science normale travaille dans un **paradigme** (un cadre partagé) ; quand les anomalies s'accumulent, une **révolution scientifique** change de paradigme (passage de Ptolémée à Copernic, de Newton à Einstein).
- **Auguste Comte** : le **positivisme** : l'esprit humain passe par l'âge théologique, métaphysique, puis positif (scientifique).

### Repères et exemples
- **Hypothèse / conséquence / conclusion** ; **exemple / preuve** : un exemple illustre, il ne prouve pas.
- **Objectif / subjectif** : la science vise l'objectivité par le contrôle de la communauté des chercheurs.

### À retenir pour le bac
- Science contre opinion (Bachelard, obstacles épistémologiques).
- Méthode expérimentale (Cl. Bernard), langage mathématique (Galilée), problème de l'induction (Hume).
- Réfutabilité (Popper), paradigmes et révolutions (Kuhn).
- Tombé en 2025 (métropole) : « La vérité est-elle toujours convaincante ? » ; sujet classique : « La science peut-elle tout expliquer ? »`,
      cartes: [
        { q: "Qu'est-ce qui distingue la science de l'opinion ?", r: "La science est une connaissance justifiée, vérifiable et organisée ; l'opinion est une croyance non justifiée." },
        { q: "Expliquer ou comprendre ?", r: "Expliquer : trouver les causes d'un phénomène. Comprendre : saisir le sens d'une action ou d'une œuvre humaine." },
        { q: "Que dit Bachelard de l'opinion ?", r: "« L'opinion pense mal ; elle ne pense pas. » La science se construit contre elle (La Formation de l'esprit scientifique, 1938)." },
        { q: "Qu'est-ce qu'un obstacle épistémologique ?", r: "Une idée spontanée (expérience première, image, généralisation hâtive) qui empêche de penser scientifiquement." },
        { q: "Que dit Galilée du livre de la nature ?", r: "Qu'il est écrit en langage mathématique (L'Essayeur, 1623)." },
        { q: "Quelles sont les étapes de la méthode expérimentale (Cl. Bernard) ?", r: "Observation, hypothèse, expérience pour la tester, conclusion." },
        { q: "Qu'est-ce que le problème de l'induction (Hume) ?", r: "Des observations répétées ne prouvent pas une loi générale : mille cygnes blancs ne prouvent pas que tous le sont." },
        { q: "Qu'est-ce que la réfutabilité selon Popper ?", r: "Une théorie est scientifique si l'on peut imaginer un fait qui la contredirait." },
        { q: "Pourquoi une théorie n'est-elle jamais définitivement prouvée selon Popper ?", r: "On peut seulement la corroborer en échouant à la réfuter ; un fait futur peut encore la contredire." },
        { q: "Qu'est-ce qu'un paradigme selon Kuhn ?", r: "Le cadre de théories et de méthodes partagé par les savants à une époque (La Structure des révolutions scientifiques, 1962)." },
        { q: "Qu'est-ce qu'une révolution scientifique (Kuhn) ?", r: "Le remplacement d'un paradigme par un autre quand les anomalies s'accumulent (de Ptolémée à Copernic)." },
        { q: "Quels sont les trois âges de l'esprit selon Comte ?", r: "Théologique, métaphysique, puis positif (scientifique)." },
      ],
      quiz: [
        { q: "« L'opinion pense mal ; elle ne pense pas » est une formule de :", choix: ["Popper", "Kuhn", "Bachelard", "Comte"], bonne: 2, expl: "Bachelard, La Formation de l'esprit scientifique (1938).", niv: 1 },
        { q: "Selon Popper, une théorie est scientifique si elle est :", choix: ["prouvée par de nombreux exemples", "acceptée par tous les savants", "écrite en langage mathématique", "réfutable par un fait possible"], bonne: 3, expl: "Le critère de démarcation est la réfutabilité, pas l'accumulation de confirmations.", niv: 1 },
        { q: "Croire qu'un objet lourd tombe forcément plus vite qu'un léger est, pour Bachelard :", choix: ["un obstacle épistémologique", "une hypothèse scientifique", "un paradigme", "une révolution scientifique"], bonne: 0, expl: "L'expérience première trompe : c'est un obstacle que la science doit surmonter.", niv: 2 },
        { q: "Un astrologue explique tout ce qui arrive, quoi qu'il arrive. Popper dirait que sa théorie :", choix: ["est très solide", "n'est pas réfutable, donc pas scientifique", "relève d'un nouveau paradigme", "est vérifiée par l'induction"], bonne: 1, expl: "Une théorie qui ne peut être contredite par aucun fait n'est pas scientifique.", niv: 2 },
        { q: "Un chercheur voit 500 corbeaux noirs et conclut que tous les corbeaux sont noirs. Quel problème rencontre-t-il ?", choix: ["L'obstacle de l'image", "La révolution scientifique", "L'induction", "L'âge métaphysique"], bonne: 2, expl: "Des cas particuliers, même nombreux, ne prouvent pas une loi universelle (Hume).", niv: 2 },
        { q: "Le passage de la physique de Newton à celle d'Einstein est, pour Kuhn :", choix: ["une simple correction de calcul", "un obstacle épistémologique", "une induction réussie", "un changement de paradigme"], bonne: 3, expl: "Le cadre théorique lui-même change : c'est une révolution scientifique.", niv: 2 },
        { q: "Pour Cl. Bernard, l'hypothèse est :", choix: ["toujours nécessaire pour orienter l'expérience", "un reste de l'opinion qu'il faut supprimer au laboratoire", "inutile si l'on observe bien", "réservée aux mathématiques"], bonne: 0, expl: "On ne trouve que ce que l'on cherche : l'hypothèse guide l'expérience qui la teste.", niv: 2 },
        { q: "Qui a écrit que le livre de la nature est écrit en langage mathématique ?", choix: ["Bachelard", "Galilée", "Cl. Bernard", "Hume"], bonne: 1, expl: "Galilée, L'Essayeur (1623).", niv: 1 },
        { q: "Pourquoi un résultat scientifique peut-il être vrai sans convaincre tout le monde ?", choix: ["La vérité dépend de chacun", "Les scientifiques se trompent sans cesse", "Il s'oppose à des opinions installées", "Il n'est jamais démontré"], bonne: 2, expl: "La vérité scientifique rompt avec l'opinion (Bachelard) : elle peut heurter des croyances. Utile pour « La vérité est-elle toujours convaincante ? »", niv: 3 },
        { q: "« Un exemple ne prouve rien. » Quel repère du programme éclaire cette idée ?", choix: ["Médiat et immédiat", "Public et privé", "Origine et fondement", "Exemple et preuve"], bonne: 3, expl: "Un exemple illustre une idée, il ne la démontre pas : piège fréquent en dissertation.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 14 La technique
    {
      chapitre: 'philo-g-14',
      fiche: `## La technique

### Définir la notion
- La **technique** est l'ensemble des **procédés** et des **outils** que l'homme invente pour transformer la nature et atteindre ses fins. En grec, *technè* désigne le savoir-faire.
- Un **outil** prolonge la main (le marteau) ; une **machine** fonctionne de façon plus autonome grâce à une énergie (la machine à vapeur).
- La **technologie** est la technique appuyée sur la science.
- **Moyen / fin** : la technique est-elle un simple moyen neutre ?

### Thèse 1 : la technique est le propre de l'homme
- Dans le **mythe de Prométhée** (Platon, « Protagoras »), Épiméthée distribue toutes les qualités aux animaux et oublie l'homme, nu et sans défense. Prométhée vole le **feu** et les arts techniques pour le sauver. L'homme compense sa faiblesse naturelle par la technique.
- **Aristote** : la **main** est l'« outil des outils » ; l'homme n'est pas intelligent parce qu'il a des mains, il a des mains parce qu'il est intelligent.
- **Bergson** (« L'Évolution créatrice », 1907) : l'homme est **homo faber** avant d'être *homo sapiens* : l'intelligence est d'abord la faculté de fabriquer des outils.

### Thèse 2 : la technique libère et transforme le monde
- **Descartes** : grâce à une science utile, nous pouvons devenir « comme **maîtres et possesseurs de la nature** » : soulager le travail, guérir les maladies.
- La technique fait gagner du temps, de la sécurité, du confort.

### Thèse 3 : la technique peut asservir et menacer
- **Marx** : dans l'usine, l'ouvrier devient un **appendice de la machine** ; la technique, au lieu de libérer, **aliène** le travailleur.
- **Heidegger** (« La question de la technique », 1954) : la technique moderne n'est pas un simple moyen ; c'est une façon de voir le monde comme un **stock** à exploiter (l'**arraisonnement**). Un fleuve devient une simple réserve d'énergie.
- **Hans Jonas** (« Le Principe responsabilité », 1979) : notre puissance technique peut détruire la nature et l'humanité future : il faut une éthique de la **responsabilité** et de la **prudence**.
- **Simondon** (« Du mode d'existence des objets techniques », 1958) : l'aliénation vient surtout de notre **ignorance** des objets techniques ; il faut une **culture technique**.

### Repères et exemples
- **Principe / cause / fin** ; **abstrait / concret**.
- Exemple : le smartphone permet de communiquer partout, mais il capte l'attention et crée des dépendances.
- Exemple : l'énergie nucléaire produit de l'électricité mais pose la question des déchets et des accidents.

### À retenir pour le bac
- Outil, machine, technologie ; technique comme moyen.
- Prométhée, Aristote (la main), Bergson (homo faber) : la technique est propre à l'homme.
- Descartes (maîtrise) contre Marx (aliénation), Heidegger (arraisonnement), Jonas (responsabilité).
- Tombé en 2025 (métropole) : « Notre avenir dépend-il de la technique ? » Piège : ne pas faire un catalogue « pour / contre » sans problématique.`,
      cartes: [
        { q: "Comment définir la technique ?", r: "L'ensemble des procédés et des outils inventés par l'homme pour transformer la nature et atteindre ses fins." },
        { q: "Outil ou machine ?", r: "L'outil prolonge la main et dépend de sa force. La machine fonctionne de façon plus autonome grâce à une source d'énergie." },
        { q: "Que raconte le mythe de Prométhée (Protagoras de Platon) ?", r: "Épiméthée oublie de doter l'homme ; Prométhée vole le feu et les arts techniques pour compenser sa faiblesse naturelle." },
        { q: "Pourquoi Aristote appelle-t-il la main « l'outil des outils » ?", r: "Elle peut devenir griffe, pince ou marteau : elle permet tous les outils. L'homme a des mains parce qu'il est intelligent." },
        { q: "Que signifie homo faber chez Bergson ?", r: "L'homme qui fabrique : pour Bergson, l'intelligence est d'abord la faculté de fabriquer des outils (L'Évolution créatrice, 1907)." },
        { q: "Qu'espère Descartes de la technique ?", r: "Nous rendre comme maîtres et possesseurs de la nature : soulager le travail et conserver la santé." },
        { q: "Pourquoi Marx parle-t-il d'aliénation dans l'usine ?", r: "L'ouvrier devient un appendice de la machine : la technique le soumet au lieu de le libérer." },
        { q: "Qu'est-ce que l'arraisonnement chez Heidegger ?", r: "La façon dont la technique moderne voit la nature comme un stock à exploiter (le fleuve comme réserve d'énergie)." },
        { q: "Quand Heidegger a-t-il écrit « La question de la technique » ?", r: "En 1954." },
        { q: "Que demande Hans Jonas face à la technique ?", r: "Une éthique de la responsabilité et de la prudence envers les générations futures (Le Principe responsabilité, 1979)." },
        { q: "D'où vient l'aliénation technique selon Simondon ?", r: "De notre ignorance des objets techniques ; il faut développer une culture technique." },
        { q: "Quel sujet sur la technique est tombé au bac 2025 (métropole) ?", r: "« Notre avenir dépend-il de la technique ? »" },
      ],
      quiz: [
        { q: "Dans le mythe de Prométhée, l'homme reçoit la technique pour :", choix: ["dominer les dieux", "compenser sa faiblesse naturelle", "remplacer le travail des animaux", "imiter la beauté de la nature"], bonne: 1, expl: "Oublié par Épiméthée, l'homme est nu et sans défense : le feu et les arts le sauvent.", niv: 1 },
        { q: "Quel auteur fait de l'homme un homo faber ?", choix: ["Heidegger", "Marx", "Jonas", "Bergson"], bonne: 3, expl: "Bergson, L'Évolution créatrice (1907) : l'intelligence est d'abord fabricatrice.", niv: 1 },
        { q: "Un barrage transforme un fleuve en simple réserve d'énergie. Heidegger parlerait :", choix: ["d'arraisonnement", "d'aliénation", "d'homo faber", "de culture technique"], bonne: 0, expl: "La technique moderne voit la nature comme un stock à exploiter : c'est l'arraisonnement.", niv: 2 },
        { q: "Un ouvrier répète le même geste au rythme de la chaîne, sans comprendre la production. Marx parlerait :", choix: ["d'arraisonnement", "de maîtrise de la nature", "d'aliénation", "de responsabilité"], bonne: 2, expl: "Soumis à la machine, l'ouvrier est dépossédé de son activité : il est aliéné.", niv: 2 },
        { q: "« L'homme a des mains parce qu'il est intelligent. » Cette thèse est de :", choix: ["Anaxagore", "Aristote", "Descartes", "Bergson"], bonne: 1, expl: "Aristote répond à Anaxagore, qui disait l'inverse : la main est l'outil des outils.", niv: 2 },
        { q: "Face aux risques de la génétique, un comité recommande la prudence pour protéger les générations futures. Il suit :", choix: ["Descartes", "Simondon", "Bergson", "Jonas"], bonne: 3, expl: "L'éthique de la responsabilité de Jonas répond à la puissance nouvelle de la technique.", niv: 2 },
        { q: "Selon Simondon, ce qui nous rend esclaves des machines, c'est surtout :", choix: ["notre ignorance des objets techniques", "la puissance de la science", "la beauté des machines", "le désir de profit seul"], bonne: 0, expl: "Simondon appelle à une culture technique pour ne plus subir les objets techniques.", niv: 2 },
        { q: "Une machine se distingue d'un outil parce qu'elle :", choix: ["prolonge la main de l'homme qui la tient", "fonctionne grâce à une énergie propre", "est plus dangereuse pour l'ouvrier", "n'a pas d'utilité pratique directe"], bonne: 1, expl: "L'outil dépend de la force de l'utilisateur ; la machine dispose d'une source d'énergie et d'un fonctionnement plus autonome.", niv: 1 },
        { q: "Pourquoi l'idée d'une technique « neutre, simple moyen » est-elle discutée ?", choix: ["Les outils ne servent qu'aux artisans", "La technique transforme aussi notre façon de voir le monde", "La technique ancienne était plus utile", "Seule la science est un moyen neutre au service des hommes libres"], bonne: 1, expl: "Pour Heidegger, la technique moderne n'est pas qu'un instrument : elle change notre rapport à la nature.", niv: 3 },
        { q: "Pour « Notre avenir dépend-il de la technique ? », quelle distinction est la plus féconde ?", choix: ["Dépendre de la technique et être déterminé par elle", "Technique artisanale et technique industrielle moderne", "Outil et machine", "Science et opinion"], bonne: 0, expl: "Avoir besoin de la technique n'est pas lui laisser décider : la question est celle de notre maîtrise de nos fins.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 15 Le temps
    {
      chapitre: 'philo-g-15',
      fiche: `## Le temps

### Définir la notion
- Le **temps** est la dimension dans laquelle les événements se **succèdent** : passé, présent, futur. Il est irréversible : on ne revient pas en arrière.
- On distingue le **temps objectif** (mesuré par les horloges, le même pour tous) et le **temps vécu** (subjectif : une heure d'ennui paraît longue, une heure de jeu passe vite).
- La **durée** est le temps qui s'écoule ; l'**instant** est un point sans épaisseur ; l'**éternité** est ce qui est hors du temps.

### Thèse 1 : le temps est difficile à saisir (Augustin)
- **Saint Augustin** (« Confessions », livre XI) : « Qu'est-ce donc que le temps ? Si personne ne me le demande, je le sais ; si je veux l'expliquer à qui me le demande, je ne le sais plus. »
- Le passé n'est plus, le futur n'est pas encore, le présent passe sans cesse : comment le temps peut-il être ?
- Réponse : le temps existe dans l'**esprit**. Il y a un présent du passé (la **mémoire**), un présent du présent (l'**attention**), un présent de l'avenir (l'**attente**).

### Thèse 2 : le temps mesuré et le temps vécu
- **Aristote** (« Physique », IV) : le temps est le **nombre du mouvement** selon l'avant et l'après. Sans changement, nous ne percevrions pas le temps.
- **Kant** : le temps est une **forme a priori de la sensibilité** : ce n'est pas une chose du monde, mais la condition sous laquelle nous percevons tout.
- **Bergson** : le temps des horloges est un temps **spatialisé**, découpé en unités égales. La vraie **durée** est vécue par la conscience, continue et qualitative. Exemple : pour faire un verre d'eau sucrée, « il faut attendre que le sucre fonde » : cette attente a une durée vécue que la mesure ne saisit pas.

### Thèse 3 : comment vivre dans le temps ?
- **Pascal** (« Pensées ») : nous ne vivons jamais dans le présent ; nous pensons au passé ou à l'avenir. « Ainsi nous ne vivons jamais, mais nous espérons de vivre. »
- **Sénèque** (« De la brièveté de la vie ») : la vie n'est pas courte, c'est nous qui la gaspillons dans des occupations vaines.
- **Épicure** : la mort n'est rien pour nous, car quand nous sommes, la mort n'est pas là, et quand la mort est là, nous ne sommes plus. Il ne faut pas craindre l'avenir.
- **Heidegger** : l'homme est un « **être-pour-la-mort** » : la conscience de sa finitude peut donner un sens à son existence.

### Repères et exemples
- **Objectif / subjectif** ; **médiat / immédiat** (le temps vécu est saisi immédiatement, le temps mesuré par des instruments).
- **Contingent / nécessaire** : l'avenir est-il déjà écrit ?
- Exemple : la nostalgie (regretter le passé) et l'impatience (vivre dans l'avenir) illustrent Pascal.

### À retenir pour le bac
- Temps objectif (mesuré) et temps vécu (durée).
- Augustin : mémoire, attention, attente ; Aristote : nombre du mouvement ; Kant : forme a priori.
- Bergson : durée contre temps spatialisé (le sucre qui fond).
- Pascal (nous ne vivons jamais), Sénèque (vie gaspillée), Épicure (la mort n'est rien pour nous).
- Piège : ne pas parler seulement de la mort ou de l'horloge ; le sujet porte souvent sur notre rapport au temps.`,
      cartes: [
        { q: "Temps objectif ou temps vécu ?", r: "Objectif : mesuré par les horloges, le même pour tous. Vécu : ressenti par la conscience, qui paraît long ou court." },
        { q: "Instant, durée, éternité ?", r: "Instant : point du temps sans épaisseur. Durée : temps qui s'écoule. Éternité : ce qui est hors du temps." },
        { q: "Que dit Augustin quand on lui demande ce qu'est le temps ?", r: "Que s'il ne se pose pas la question, il le sait ; mais que s'il veut l'expliquer, il ne le sait plus (Confessions, XI)." },
        { q: "Quels sont les trois présents selon Augustin ?", r: "Le présent du passé (mémoire), le présent du présent (attention), le présent de l'avenir (attente)." },
        { q: "Comment Aristote définit-il le temps ?", r: "Comme le nombre du mouvement selon l'avant et l'après (Physique, IV)." },
        { q: "Qu'est-ce que le temps pour Kant ?", r: "Une forme a priori de la sensibilité : la condition sous laquelle nous percevons tout, pas une chose du monde." },
        { q: "Durée ou temps spatialisé chez Bergson ?", r: "Le temps spatialisé est découpé en unités égales (horloges). La durée est le temps vécu, continu et qualitatif." },
        { q: "Que montre l'exemple du sucre qui fond chez Bergson ?", r: "Il faut attendre que le sucre fonde : cette attente est une durée vécue que la mesure du temps ne saisit pas." },
        { q: "Que reproche Pascal aux hommes à propos du temps ?", r: "Ils ne vivent jamais dans le présent mais dans le passé ou l'avenir : « nous ne vivons jamais, mais nous espérons de vivre »." },
        { q: "Quelle est la thèse de Sénèque dans De la brièveté de la vie ?", r: "La vie n'est pas courte ; c'est nous qui la gaspillons dans des occupations vaines." },
        { q: "Pourquoi la mort n'est-elle rien pour nous selon Épicure ?", r: "Quand nous sommes, la mort n'est pas là ; quand elle est là, nous ne sommes plus." },
        { q: "Que signifie « être-pour-la-mort » chez Heidegger ?", r: "L'homme sait qu'il va mourir ; cette conscience de la finitude peut donner un sens et une authenticité à l'existence." },
      ],
      quiz: [
        { q: "Pour Augustin, l'avenir existe dans l'esprit sous la forme de :", choix: ["la mémoire", "l'attention", "l'attente", "la durée"], bonne: 2, expl: "Le présent de l'avenir, c'est l'attente ; le présent du passé, c'est la mémoire.", niv: 1 },
        { q: "Le temps comme « nombre du mouvement selon l'avant et l'après » est une définition de :", choix: ["Kant", "Augustin", "Bergson", "Aristote"], bonne: 3, expl: "Aristote, Physique, livre IV.", niv: 1 },
        { q: "Une heure de cours ennuyeux semble durer trois heures. Cet exemple concerne surtout :", choix: ["le temps vécu", "le temps des horloges", "l'éternité", "le temps comme forme a priori"], bonne: 0, expl: "Le temps mesuré est identique ; c'est le temps vécu par la conscience qui s'allonge.", niv: 2 },
        { q: "« Il faut attendre que le sucre fonde » illustre chez Bergson :", choix: ["le temps spatialisé", "le nombre du mouvement", "l'instant présent", "la durée vécue"], bonne: 3, expl: "L'attente est vécue comme une durée qualitative que l'horloge ne saisit pas.", niv: 2 },
        { q: "Un élève passe ses vacances à attendre la rentrée et à regretter l'été dernier. Quel auteur décrit cette attitude ?", choix: ["Aristote", "Kant", "Pascal", "Épicure"], bonne: 2, expl: "Pascal : nous ne vivons jamais dans le présent, nous espérons de vivre.", niv: 2 },
        { q: "Pour Kant, le temps est :", choix: ["une substance qui existe hors de nous", "une forme a priori de la sensibilité", "une illusion de l'imagination", "le mouvement des astres"], bonne: 1, expl: "Le temps est la condition de toute perception, apportée par le sujet.", niv: 1 },
        { q: "Un ami dit : « La vie est trop courte. » Sénèque répondrait que :", choix: ["nous la gaspillons en occupations vaines", "la mort n'est rien pour nous", "le temps n'existe que dans l'esprit", "seul l'instant présent existe"], bonne: 0, expl: "De la brièveté de la vie : la vie est assez longue si on sait l'employer.", niv: 2 },
        { q: "Quel argument d'Épicure vise à supprimer la peur de la mort ?", choix: ["L'âme est immortelle et sera récompensée", "La mort n'est qu'un long sommeil réparateur", "Quand la mort est là, nous ne sommes plus", "Il faut penser à la mort à chaque instant"], bonne: 2, expl: "La mort ne nous concerne pas : il n'y a pas de sujet pour la subir.", niv: 2 },
        { q: "Pourquoi la mesure du temps par les horloges ne suffit-elle pas, selon Bergson ?", choix: ["Elle découpe en unités égales une durée vécue continue", "Les horloges mécaniques sont imprécises", "Le temps n'existe que pour les savants qui le mesurent avec soin", "Le temps est une chose immobile"], bonne: 0, expl: "La mesure spatialise le temps ; elle manque la qualité de la durée vécue.", niv: 3 },
        { q: "Dans un sujet « Le temps est-il notre ennemi ? », quelle idée nuance le mieux la thèse ?", choix: ["Le temps est mesuré par des horloges de plus en plus précises", "La conscience de la finitude peut donner sens à la vie", "Le passé n'existe plus pour nous", "L'avenir est toujours certain"], bonne: 1, expl: "Heidegger : être-pour-la-mort, la finitude est aussi ce qui donne du prix à l'existence.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 16 Le travail
    {
      chapitre: 'philo-g-16',
      fiche: `## Le travail

### Définir la notion
- Le **travail** est une activité par laquelle l'homme **transforme la nature** (ou une matière) pour produire ce dont il a besoin. Il demande un **effort** et vise une **fin** extérieure.
- Le mot viendrait du latin *tripalium*, un instrument de torture : le travail a longtemps été vu comme une **peine**.
- **Travail** et **emploi** : l'emploi est un travail rémunéré et reconnu socialement ; on peut travailler sans emploi (travail domestique, bénévolat).
- **Obligation / contrainte** (repère) : travaille-t-on par nécessité ou par choix ?

### Thèse 1 : le travail est une peine ou une contrainte
- Dans la **Genèse**, le travail est une punition : l'homme devra gagner son pain à la sueur de son front.
- Chez **Aristote**, le travail manuel est réservé aux esclaves ; l'homme libre se consacre au **loisir** (la politique, la philosophie).
- **Hannah Arendt** (« Condition de l'homme moderne », 1958) distingue le **travail** (produire ce que l'on consomme pour vivre, sans fin), l'**œuvre** (fabriquer des objets durables, un monde) et l'**action** (agir et parler avec les autres, la politique).

### Thèse 2 : le travail humanise et libère
- **Hegel** (« Phénoménologie de l'esprit », 1807) : dans la **dialectique du maître et de l'esclave**, l'esclave, en travaillant la matière, se forme et prend conscience de lui-même ; le maître, lui, devient dépendant. Le travail **forme**.
- **Marx** (« Le Capital », 1867) : le travail est propre à l'homme. « Ce qui distingue dès l'abord le plus mauvais architecte de l'abeille la plus experte, c'est qu'il a construit la cellule dans sa tête avant de la construire dans la ruche. » Le travail humain est **conscient** et **projeté**.
- **Locke** : le travail fonde la **propriété** : en travaillant une terre, je la fais mienne.

### Thèse 3 : le travail peut aliéner
- **Marx** (« Manuscrits de 1844 ») : dans le capitalisme, l'ouvrier est **aliéné** : il ne possède ni le produit de son travail, ni son activité ; il ne travaille que pour survivre. Le travail le rend étranger à lui-même.
- **Adam Smith** (« La Richesse des nations », 1776) : la **division du travail** (la manufacture d'épingles) multiplie la productivité, mais elle rend le travail répétitif et abrutissant.
- **Nietzsche** (« Aurore ») : l'éloge du travail sert à **discipliner** les individus ; le travail est « la meilleure des polices ».
- **Simone Weil** (« La Condition ouvrière ») décrit de l'intérieur l'épuisement et la perte de pensée du travail à la chaîne.

### À retenir pour le bac
- Travail, emploi, loisir ; travail, œuvre et action (Arendt).
- Le travail forme : Hegel (maître et esclave), Marx (l'architecte et l'abeille).
- Le travail aliène : Marx (1844), Smith (division du travail), Nietzsche (la meilleure des polices).
- Piège : opposer seulement « travail = souffrance » et « travail = épanouissement ». Se demander à quelles conditions le travail libère.`,
      cartes: [
        { q: "Comment définir le travail ?", r: "Une activité, demandant un effort, par laquelle l'homme transforme une matière ou la nature pour produire ce dont il a besoin." },
        { q: "D'où viendrait le mot travail ?", r: "Du latin tripalium, un instrument de torture : le travail a longtemps été vu comme une peine." },
        { q: "Travail ou emploi ?", r: "L'emploi est un travail rémunéré et reconnu socialement ; on peut travailler sans emploi (bénévolat, tâches domestiques)." },
        { q: "Quelle place Aristote donne-t-il au travail ?", r: "Le travail manuel est réservé aux esclaves ; l'homme libre se consacre au loisir (politique, philosophie)." },
        { q: "Travail, œuvre et action chez Arendt ?", r: "Travail : produire pour consommer et vivre. Œuvre : fabriquer des objets durables. Action : agir et parler avec les autres (politique)." },
        { q: "Que gagne l'esclave par son travail chez Hegel ?", r: "En transformant la matière, il se forme et prend conscience de lui-même, tandis que le maître devient dépendant." },
        { q: "Que distingue l'architecte de l'abeille selon Marx ?", r: "L'architecte a construit la cellule dans sa tête avant de la construire : le travail humain est conscient et projeté (Le Capital, 1867)." },
        { q: "Quel lien Locke fait-il entre travail et propriété ?", r: "Le travail fonde la propriété : en travaillant une terre, je la fais mienne." },
        { q: "Qu'est-ce que l'aliénation chez Marx ?", r: "L'ouvrier ne possède ni le produit ni l'activité de son travail ; il travaille seulement pour survivre et devient étranger à lui-même (Manuscrits de 1844)." },
        { q: "Que montre l'exemple de la manufacture d'épingles chez Smith ?", r: "La division du travail multiplie la productivité, mais elle rend les tâches répétitives (La Richesse des nations, 1776)." },
        { q: "Pourquoi Nietzsche dit-il que le travail est « la meilleure des polices » ?", r: "Il occupe les individus, les fatigue et les discipline, ce qui empêche la rêverie et la révolte (Aurore)." },
        { q: "Que décrit Simone Weil dans La Condition ouvrière ?", r: "De l'intérieur, l'épuisement et la perte de pensée provoqués par le travail répétitif à l'usine." },
      ],
      quiz: [
        { q: "Chez Arendt, fabriquer une table durable relève :", choix: ["du travail", "de l'action", "de l'œuvre", "du loisir"], bonne: 2, expl: "L'œuvre produit des objets durables qui forment un monde ; le travail produit ce qui est consommé.", niv: 1 },
        { q: "« Le plus mauvais architecte » est supérieur à « l'abeille la plus experte » selon :", choix: ["Hegel", "Smith", "Locke", "Marx"], bonne: 3, expl: "Marx, Le Capital : l'architecte a le projet dans la tête avant de construire.", niv: 1 },
        { q: "Dans la dialectique du maître et de l'esclave, qui finit par se former par le travail ?", choix: ["Le maître", "L'esclave", "Le maître et l'esclave", "Ni le maître ni l'esclave"], bonne: 1, expl: "L'esclave, en travaillant la matière, prend conscience de lui-même ; le maître dépend de lui.", niv: 2 },
        { q: "Une ouvrière fabrique des pièces dont elle ignore l'usage, pour un salaire qui couvre tout juste son loyer. Marx parlerait :", choix: ["d'œuvre", "d'action", "de loisir", "d'aliénation"], bonne: 3, expl: "Dépossédée du produit et du sens de son activité, travaillant pour survivre : c'est l'aliénation.", niv: 2 },
        { q: "Dix ouvriers spécialisés produisent bien plus d'épingles qu'un seul qui fait tout. Cet exemple est de :", choix: ["Adam Smith", "Karl Marx", "John Locke", "Hannah Arendt"], bonne: 0, expl: "La manufacture d'épingles illustre la division du travail dans La Richesse des nations (1776).", niv: 2 },
        { q: "Un colon défriche une terre et la déclare sienne. Quel auteur justifie ce raisonnement ?", choix: ["Hegel", "Nietzsche", "Locke", "Aristote"], bonne: 2, expl: "Pour Locke, le travail ajouté à la nature fonde la propriété.", niv: 2 },
        { q: "Pour Aristote, l'homme libre se consacre surtout :", choix: ["au travail manuel", "au commerce", "à l'œuvre durable", "au loisir"], bonne: 3, expl: "Le loisir (politique, contemplation) est l'activité de l'homme libre ; le travail est laissé aux esclaves.", niv: 1 },
        { q: "Nietzsche voit dans l'éloge du travail :", choix: ["un moyen de discipliner les individus", "la vraie source de la liberté", "le fondement de la propriété", "une forme de l'œuvre durable"], bonne: 0, expl: "Le travail occupe et fatigue : c'est « la meilleure des polices » (Aurore).", niv: 2 },
        { q: "Pourquoi le travail peut-il à la fois aliéner et libérer chez Marx ?", choix: ["Il est propre à l'homme, mais ses conditions peuvent le dénaturer", "Il libère les riches et aliène les pauvres", "Il dépend du salaire versé", "Il n'est libérateur que pour les artisans qui possèdent leurs outils"], bonne: 0, expl: "Le travail est l'essence de l'homme (architecte), mais le capitalisme le transforme en simple moyen de survie.", niv: 3 },
        { q: "Pour « Le travail permet-il de se réaliser ? », quelle distinction évite le hors-sujet ?", choix: ["Travail et salaire versé chaque mois", "Travail en soi et conditions du travail", "Travail et loisir des hommes libres", "Travail humain et travail instinctif des abeilles"], bonne: 1, expl: "Le travail peut former (Hegel) ou aliéner (Marx) : tout dépend de ses conditions.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 17 La vérité
    {
      chapitre: 'philo-g-17',
      fiche: `## La vérité

### Définir la notion
- La **vérité** est la qualité d'un énoncé **conforme à la réalité** : « il pleut » est vrai s'il pleut. C'est la définition par la **correspondance** (au Moyen Âge, Thomas d'Aquin parle d'**adéquation** de la chose et de l'intelligence).
- Il faut distinguer le **vrai** (qualité d'un jugement) et le **réel** (ce qui existe). Une chose n'est ni vraie ni fausse ; c'est ce qu'on en dit qui l'est.
- **Vérité formelle / matérielle** (repère formel / matériel) : un raisonnement peut être **valide** (bien construit) avec des prémisses fausses.
- **Leibniz** distingue les **vérités de raison** (nécessaires : 2 + 2 = 4) et les **vérités de fait** (contingentes : César a franchi le Rubicon).

### Thèse 1 : la vérité existe et se conquiert
- **Platon** (« La République », livre VII) : l'**allégorie de la caverne**. Des prisonniers ne voient que des ombres et les prennent pour la réalité. Le philosophe sort de la caverne et découvre le soleil (l'Idée du Bien). La vérité demande un effort pour se libérer des **apparences** et de l'**opinion** (*doxa*).
- **Descartes** : le **doute méthodique** rejette tout ce qui est incertain. Le critère du vrai est l'**évidence** : les idées **claires et distinctes**.
- **Spinoza** : « le vrai est la norme de lui-même et du faux » : qui a une idée vraie sait en même temps qu'elle est vraie.

### Thèse 2 : la vérité est-elle relative ?
- **Protagoras** (rapporté par Platon) : « L'homme est la mesure de toutes choses » : chacun aurait sa vérité. Mais ce **relativisme** se contredit : s'il est vrai pour tous que tout est relatif, alors tout n'est pas relatif.
- **Nietzsche** (« Vérité et mensonge au sens extra-moral », 1873) : les vérités sont des **illusions** dont on a oublié qu'elles sont des illusions, des métaphores usées. Nous croyons au vrai parce que c'est utile à la vie.
- **Subjectif / objectif / intersubjectif** (repère) : la vérité scientifique vise l'**objectivité** par l'accord contrôlé des chercheurs.

### Thèse 3 : faut-il toujours dire la vérité ?
- **Kant** (« Sur un prétendu droit de mentir par humanité », 1797) : on ne doit jamais mentir, même à un assassin qui demande où se cache notre ami. La véracité est un devoir **inconditionnel**.
- **Benjamin Constant** lui répond qu'on ne doit la vérité qu'à ceux qui y ont **droit**.
- **Hannah Arendt** (« Vérité et politique », 1967) : les **vérités de fait** sont fragiles ; le pouvoir peut les nier (propagande). Les protéger est un enjeu politique.

### Repères et exemples
- **Croire / savoir** ; **persuader / convaincre** : une vérité doit convaincre par des raisons, mais elle ne persuade pas toujours.
- Exemple : les « fake news » montrent qu'une information fausse peut convaincre plus vite qu'une vraie.

### À retenir pour le bac
- Vérité comme correspondance ; vrai et réel ; validité formelle et vérité matérielle ; vérités de raison et de fait.
- Platon (caverne), Descartes (évidence), Spinoza (norme de lui-même).
- Relativisme (Protagoras) et ses contradictions ; Nietzsche ; Kant contre Constant sur le mensonge ; Arendt.
- Tombé en 2025 (métropole) : « La vérité est-elle toujours convaincante ? »`,
      cartes: [
        { q: "Qu'est-ce que la vérité comme correspondance ?", r: "Un énoncé est vrai s'il est conforme à la réalité : « il pleut » est vrai s'il pleut." },
        { q: "Pourquoi distinguer le vrai et le réel ?", r: "Le réel est ce qui existe ; le vrai qualifie un jugement sur le réel. Une chose n'est ni vraie ni fausse, ce qu'on en dit l'est." },
        { q: "Un raisonnement valide est-il forcément vrai ?", r: "Non : il peut être bien construit (valide) et partir de prémisses fausses. La validité est formelle, la vérité est matérielle." },
        { q: "Vérités de raison ou de fait (Leibniz) ?", r: "De raison : nécessaires, leur contraire est impossible (2 + 2 = 4). De fait : contingentes, leur contraire est possible (César a franchi le Rubicon)." },
        { q: "Que représente la caverne chez Platon ?", r: "Le monde des apparences et de l'opinion ; sortir de la caverne, c'est accéder par l'effort à la vérité (La République, VII)." },
        { q: "Quel est le critère du vrai selon Descartes ?", r: "L'évidence : ne recevoir pour vrai que ce qui se présente clairement et distinctement à l'esprit." },
        { q: "Que veut dire Spinoza par « le vrai est la norme de lui-même » ?", r: "Avoir une idée vraie, c'est savoir en même temps qu'elle est vraie : le vrai n'a pas besoin d'un autre critère." },
        { q: "Que signifie « l'homme est la mesure de toutes choses » (Protagoras) ?", r: "Chacun aurait sa vérité, selon ce qui lui apparaît : c'est le relativisme." },
        { q: "Pourquoi le relativisme se contredit-il ?", r: "Dire « tout est relatif » prétend être vrai pour tous : c'est donc une vérité absolue, ce qui le contredit." },
        { q: "Que sont les vérités pour Nietzsche ?", r: "Des illusions dont on a oublié qu'elles en sont, des métaphores usées (Vérité et mensonge au sens extra-moral, 1873)." },
        { q: "Quel débat oppose Kant et Benjamin Constant ?", r: "Kant : ne jamais mentir, même à un assassin. Constant : on ne doit la vérité qu'à ceux qui y ont droit." },
        { q: "Pourquoi les vérités de fait sont-elles fragiles selon Arendt ?", r: "Le pouvoir peut les nier ou les réécrire par la propagande ; elles ne se démontrent pas comme les mathématiques (Vérité et politique, 1967)." },
      ],
      quiz: [
        { q: "Dans l'allégorie de Platon, les ombres sur le mur de la caverne représentent :", choix: ["les Idées", "le Bien", "les apparences", "la science"], bonne: 2, expl: "Les prisonniers prennent les ombres pour le réel : ce sont les apparences et l'opinion.", niv: 1 },
        { q: "« Tous les chats volent ; Félix est un chat ; donc Félix vole. » Ce raisonnement est :", choix: ["faux et invalide", "vrai et valide", "vrai mais invalide", "valide mais faux"], bonne: 3, expl: "La forme est correcte (valide), mais la prémisse est fausse : la conclusion est fausse.", niv: 2 },
        { q: "Pour Leibniz, « 2 + 2 = 4 » est une vérité :", choix: ["de raison", "de fait", "relative", "contingente"], bonne: 0, expl: "Son contraire est impossible : c'est une vérité de raison, nécessaire.", niv: 1 },
        { q: "Un ami dit : « À chacun sa vérité, c'est vrai pour tout le monde. » Quelle objection lui faire ?", choix: ["Il oublie que les sens trompent", "Il affirme comme absolue une thèse relativiste", "Il confond le vrai et le valide", "Il ignore l'allégorie de la caverne"], bonne: 1, expl: "Le relativisme se contredit : il prétend être vrai pour tous.", niv: 3 },
        { q: "Pour Descartes, le critère de la vérité est :", choix: ["l'accord de la majorité", "l'utilité pour la vie", "l'expérience des sens", "l'évidence des idées claires et distinctes"], bonne: 3, expl: "Première règle de la méthode : ne recevoir pour vrai que ce qui est évident.", niv: 1 },
        { q: "Un assassin demande où se cache votre ami. Kant soutient que vous devez :", choix: ["mentir pour le protéger", "garder le silence et fuir", "ne pas mentir", "dire la moitié de la vérité"], bonne: 2, expl: "Pour Kant, la véracité est un devoir inconditionnel, même dans ce cas (1797). Constant le conteste.", niv: 2 },
        { q: "« Les vérités sont des illusions dont on a oublié qu'elles le sont » est une thèse de :", choix: ["Protagoras", "Arendt", "Spinoza", "Nietzsche"], bonne: 3, expl: "Nietzsche, Vérité et mensonge au sens extra-moral (1873).", niv: 2 },
        { q: "Un régime efface d'une photo officielle un opposant pour réécrire l'histoire. Arendt y verrait :", choix: ["la fragilité des vérités de fait", "une vérité de raison", "le doute méthodique", "un relativisme naïf"], bonne: 0, expl: "Les vérités de fait peuvent être niées par le pouvoir ; c'est leur fragilité politique.", niv: 2 },
        { q: "Pourquoi une vérité peut-elle ne pas convaincre ?", choix: ["Une vérité est évidente pour chacun dès qu'on la lui dit", "Accepter le vrai demande un effort contre ses opinions", "La vérité n'existe jamais", "Seules les fausses idées sont claires"], bonne: 1, expl: "Le prisonnier libéré est d'abord ébloui et veut retourner aux ombres : le vrai dérange. Utile pour le sujet 2025.", niv: 3 },
        { q: "Une rumeur fausse se répand plus vite qu'un démenti. Quelle distinction l'éclaire ?", choix: ["Vérité de raison et vérité de fait", "Valide et invalide", "Persuader et convaincre", "Réel et apparent"], bonne: 2, expl: "La rumeur persuade par l'émotion ; la vérité doit convaincre par des raisons, ce qui prend du temps.", niv: 3 },
      ],
    },
  ],
  methode: [
    {
      id: 'philo-g-m1', mat: 'philo-g', titre: 'Dissertation : analyser le sujet et trouver le problème',
      formules: ['Peut-on… ?', 'Faut-il… ?', '… est-il / est-elle… ?', 'Avons-nous… ?', 'Notre… dépend-il de… ?'],
      vu: ['Bac 2026 métropole : « Avons-nous la maîtrise de nos paroles ? »', 'Bac 2026 métropole : « Peut-on être heureux quand les autres ne le sont pas ? »', 'Bac 2025 métropole : « Notre avenir dépend-il de la technique ? »', 'Bac 2025 métropole : « La vérité est-elle toujours convaincante ? »'],
      pts: 'Toute la note (20 points) repose sur ce travail : sans problème, pas de dissertation',
      attendu: 'Le correcteur veut voir que la question n\'est pas évidente : chaque mot est défini, et le sujet est transformé en problème, c\'est-à-dire en tension entre deux réponses qui semblent toutes les deux défendables.',
      etapes: ['Recopier le sujet et entourer chaque mot, y compris les petits (peut-on, toujours, notre).', 'Définir chaque mot important, avec plusieurs sens possibles s\'il le faut.', 'Chercher la réponse spontanée (l\'opinion) et ce qui la rend fragile.', 'Formuler le problème : « D\'un côté… pourtant… ».', 'Repérer les notions du programme liées au sujet et les distinctions utiles (repères).'],
      mots: ['problème', 'paradoxe', 'en apparence', 'pourtant', 'distinction'],
      pieges: ['Réciter un cours sur la notion au lieu de répondre à la question posée.', 'Oublier un mot du sujet (« toujours », « notre », « peut-on »).', 'Répondre oui ou non dès l\'introduction sans montrer de difficulté.', 'Confondre le problème et la simple reformulation du sujet.'],
      cas: 'Sujet d\'entraînement.',
      question: 'Analysez le sujet « La vérité est-elle toujours convaincante ? » et formulez son problème.',
      modele: 'La vérité est la conformité d\'un jugement avec le réel. Être convaincant, c\'est obtenir l\'accord de l\'autre par des raisons, à la différence de persuader, qui joue sur les émotions. « Toujours » demande si c\'est vrai dans tous les cas. Spontanément, on pense que oui : une vérité bien démontrée devrait s\'imposer à tout esprit raisonnable, comme une démonstration mathématique. Pourtant, des vérités ont longtemps été refusées (le mouvement de la Terre), et des erreurs ou des rumeurs convainquent souvent plus vite que le vrai. Le problème est donc le suivant : si la vérité a en elle la force de convaincre, pourquoi échoue-t-elle si souvent face à l\'opinion, et cet échec vient-il de la vérité elle-même ou de ceux qui la reçoivent ?',
      grille: ['Chaque mot du sujet est défini, y compris « toujours ».', 'J\'ai distingué convaincre et persuader.', 'J\'ai montré une réponse spontanée et ce qui la contredit.', 'Mon problème est une vraie tension, pas une simple question répétée.'],
    },
    {
      id: 'philo-g-m2', mat: 'philo-g', titre: 'Dissertation : construire le plan',
      formules: ['Plan en deux ou trois parties qui avancent', 'Chaque partie répond au problème d\'une façon différente'],
      vu: ['Toutes les sessions : dissertation sur deux sujets au choix'],
      pts: 'La construction et la progression comptent pour une grande part de la note',
      attendu: 'Un plan qui progresse : chaque partie défend une réponse argumentée, la suivante en montre la limite et va plus loin. Chaque argument est expliqué, illustré par un exemple précis et, si possible, appuyé sur un auteur.',
      etapes: ['Partie 1 : la réponse qui semble la plus évidente, défendue sérieusement.', 'Transition : la limite de cette réponse (un exemple, une objection).', 'Partie 2 : une réponse qui tient compte de cette limite.', 'Partie 3 (si possible) : une réponse plus nuancée qui dépasse l\'opposition, souvent grâce à une distinction.', 'Dans chaque partie : 2 ou 3 paragraphes, chacun avec une idée, une explication, un exemple, une référence.'],
      mots: ['dans un premier temps', 'cependant', 'or', 'c\'est pourquoi', 'il faut donc distinguer'],
      pieges: ['Un plan « oui / non » qui se contredit sans avancer.', 'Une suite d\'auteurs résumés (« Descartes dit…, Kant dit… ») sans argument.', 'Des exemples vagues (« de nos jours, beaucoup de gens… »).', 'Une troisième partie qui ne fait que répéter la première.'],
      cas: 'Sujet : « Notre avenir dépend-il de la technique ? »',
      question: 'Proposez un plan en trois parties pour ce sujet.',
      modele: 'I. Notre avenir dépend en grande partie de la technique : l\'homme est un être technique par nature (Prométhée, Bergson et l\'homo faber) ; la technique lui permet de survivre, de se soigner et de se protéger (Descartes : nous rendre comme maîtres et possesseurs de la nature). II. Mais en dépendre ne veut pas dire lui confier notre avenir : la technique peut asservir (Marx, l\'ouvrier appendice de la machine) et menacer l\'avenir lui-même (Jonas, responsabilité envers les générations futures). III. Il faut distinguer dépendre de la technique et être déterminé par elle : la technique fournit des moyens, mais les fins restent à choisir. Notre avenir dépend surtout de notre capacité à décider collectivement ce que nous voulons faire de la technique (culture technique chez Simondon, choix politiques).',
      grille: ['Les parties progressent au lieu de se contredire.', 'Chaque partie répond au problème.', 'J\'ai au moins un exemple précis et une référence par partie.', 'La dernière partie repose sur une distinction.'],
    },
    {
      id: 'philo-g-m3', mat: 'philo-g', titre: 'Dissertation : introduction et conclusion',
      formules: ['Introduction : accroche, définitions, problème, annonce du plan', 'Conclusion : bilan qui répond à la question'],
      vu: ['Toutes les sessions'],
      pts: 'L\'introduction est lue en premier : elle donne au correcteur son impression de départ',
      attendu: 'Une introduction d\'une quinzaine de lignes qui conduit au problème sans le résoudre, et une conclusion qui répond clairement à la question en rappelant le chemin parcouru.',
      etapes: ['Accroche : un exemple concret ou une opinion courante liée au sujet (pas « depuis la nuit des temps »).', 'Définition des termes et première réponse spontanée.', 'Ce qui rend cette réponse fragile, puis la formulation du problème sous forme de question.', 'Annonce du plan en une ou deux phrases, sans « je vais parler de ».', 'Conclusion : reprendre la réponse de chaque partie, puis donner sa réponse finale. Ouverture facultative.'],
      mots: ['il semble que', 'pourtant', 'dès lors', 'nous verrons d\'abord', 'en définitive'],
      pieges: ['Une accroche générale et vide (« depuis toujours l\'homme se pose des questions »).', 'Annoncer le plan avant d\'avoir posé le problème.', 'Une conclusion qui ne répond pas à la question ou qui ouvre sur un sujet sans rapport.'],
      cas: 'Sujet : « Peut-on être heureux quand les autres ne le sont pas ? »',
      question: 'Rédigez l\'introduction.',
      modele: 'Le soir, devant les images d\'une guerre lointaine, beaucoup continuent leur repas sans que leur soirée en soit gâchée. Le bonheur, satisfaction durable et complète, semble en effet une affaire personnelle : il dépend de mes désirs, de mes proches, de ma façon de juger les choses, comme le disaient les stoïciens. Pourtant, un bonheur qui ignorerait la souffrance des autres paraît suspect : peut-on vraiment être comblé en sachant que d\'autres sont malheureux, surtout si nous y sommes pour quelque chose ? Et l\'homme, animal politique selon Aristote, peut-il s\'accomplir seul ? Le problème est donc de savoir si le bonheur est un état intérieur qui ne dépend que de moi, ou s\'il suppose un monde partagé où le malheur d\'autrui me concerne. Nous verrons d\'abord que le bonheur semble pouvoir se construire indépendamment des autres, puis que cette indépendance a des limites morales et sociales, avant de montrer que le bonheur véritable inclut une part de souci pour autrui.',
      grille: ['L\'accroche est concrète et liée au sujet.', 'Le bonheur est défini.', 'Le problème est posé sous forme de tension.', 'Le plan est annoncé simplement.'],
    },
    {
      id: 'philo-g-m4', mat: 'philo-g', titre: 'Explication de texte : thèse, problème, structure',
      formules: ['Expliquer le texte suivant', 'La connaissance de la doctrine de l\'auteur n\'est pas requise : il faut rendre compte, par la compréhension précise du texte, du problème dont il est question'],
      vu: ['Bac 2026 métropole : un extrait de Nietzsche, « Humain, trop humain » (1878)', 'Bac 2025 métropole : un extrait de Rawls, « Théorie de la justice » (1971)', 'Bac 2025 centres étrangers (Asie) : un extrait de Bentham, « Traités de législation civile et pénale »'],
      pts: 'Toute la note (20 points) si l\'explication est choisie',
      attendu: 'Montrer qu\'on a compris ce que le texte affirme (sa thèse), à quelle question il répond (son problème), comment il avance (ses étapes), et expliquer chaque idée avec ses propres mots et des exemples, sans résumer ni paraphraser.',
      etapes: ['Lire le texte plusieurs fois et souligner les connecteurs (mais, donc, car, en effet).', 'Trouver le thème (de quoi il parle) et la thèse (ce qu\'il en dit) en une phrase.', 'Formuler le problème : la question à laquelle le texte répond, et pourquoi elle se pose.', 'Découper le texte en 2 ou 3 moments, en donnant les lignes et l\'idée de chacun.', 'Introduction : thème, thèse, problème, enjeu, plan du texte.'],
      mots: ['l\'auteur soutient que', 'thèse', 'enjeu', 'dans un premier moment', 'l\'auteur s\'oppose à'],
      pieges: ['Paraphraser : redire le texte avec d\'autres mots sans l\'expliquer.', 'Plaquer un cours sur l\'auteur au lieu de lire ce texte-là.', 'Oublier le problème : la thèse seule ne suffit pas.', 'Découper le texte au hasard, sans suivre son raisonnement.'],
      cas: 'Texte d\'entraînement écrit pour l\'exercice, inspiré de la pensée de Rousseau : « Celui qui n\'obéit qu\'à ses envies n\'est pas libre : il est l\'esclave de ce qui le pousse. Mais celui qui obéit à une loi qu\'il a lui-même voulue, avec les autres citoyens, n\'obéit au fond qu\'à lui-même. C\'est pourquoi la loi, loin d\'être l\'ennemie de la liberté, en est la condition : sans elle, chacun serait livré à la force du plus puissant. »',
      question: 'Dégagez le thème, la thèse, le problème et la structure de ce texte.',
      modele: 'Thème : le rapport entre la liberté et la loi. Thèse : la loi qu\'on s\'est donnée ne limite pas la liberté, elle la rend possible. Problème : on croit spontanément qu\'être libre, c\'est faire ce qu\'on veut, et que toute loi est une contrainte ; comment alors l\'obéissance pourrait-elle être une liberté ? Enjeu : savoir si la vie en société nous enlève notre liberté ou nous la donne. Structure : 1) première phrase, critique de la liberté comme simple obéissance aux envies ; 2) deuxième phrase, définition de la vraie liberté comme obéissance à une loi qu\'on a voulue ; 3) dernière phrase, conclusion : la loi protège de la domination du plus fort.',
      grille: ['La thèse tient en une phrase juste.', 'Le problème est formulé comme une difficulté.', 'Les moments du texte suivent ses connecteurs.', 'Je n\'ai rien résumé sans l\'expliquer.'],
    },
    {
      id: 'philo-g-m5', mat: 'philo-g', titre: 'Explication de texte : expliquer une phrase',
      formules: ['Expliquer pas à pas, phrase après phrase', 'Définir, reformuler, illustrer, discuter'],
      vu: ['Toutes les sessions qui proposent une explication de texte'],
      pts: 'Le développement est la plus grande partie de la note',
      attendu: 'Pour chaque idée : citer le passage, définir ses mots importants, dire ce qu\'il veut dire, montrer pourquoi l\'auteur l\'affirme, l\'illustrer par un exemple, et parfois montrer ce qu\'on pourrait lui objecter.',
      etapes: ['Citer le passage entre guillemets avec ses lignes.', 'Définir les mots importants.', 'Reformuler l\'idée et dire à quoi elle s\'oppose.', 'Expliquer le lien avec la phrase précédente (le connecteur).', 'Donner un exemple concret qui éclaire l\'idée.', 'Éventuellement, une objection ou un auteur qui éclaire ou discute l\'idée.'],
      mots: ['autrement dit', 'l\'auteur entend par là', 'par exemple', 'on pourrait objecter que'],
      pieges: ['Répéter la phrase sans la définir ni l\'expliquer.', 'Partir hors du texte pendant une page.', 'Oublier le rôle des petits mots (« au fond », « loin de », « c\'est pourquoi »).'],
      cas: 'Même texte d\'entraînement que la question type précédente.',
      question: 'Expliquez la phrase : « celui qui obéit à une loi qu\'il a lui-même voulue […] n\'obéit au fond qu\'à lui-même ».',
      modele: 'Cette phrase définit la vraie liberté par opposition à la première phrase. Obéir, c\'est d\'ordinaire suivre la volonté d\'un autre, ce qui semble contraire à la liberté. Mais l\'auteur précise que la loi a été « voulue » par celui qui y obéit, « avec les autres citoyens » : elle n\'est pas imposée de l\'extérieur. L\'expression « au fond » indique qu\'il faut dépasser l\'apparence : en apparence, j\'obéis à la loi ; en réalité, j\'obéis à ma propre volonté, devenue commune. Par exemple, une classe qui fixe elle-même ses règles de vie les respecte plus facilement, car elle s\'y reconnaît. C\'est l\'idée d\'autonomie, que l\'on retrouve chez Rousseau (« l\'obéissance à la loi qu\'on s\'est prescrite est liberté ») et chez Kant pour la morale. On pourrait objecter qu\'une minorité qui a voté contre une loi n\'a pas voulu cette loi : obéit-elle encore à elle-même ?',
      grille: ['J\'ai défini « obéir » et « voulue ».', 'J\'ai expliqué le rôle de « au fond ».', 'J\'ai donné un exemple concret.', 'J\'ai relié l\'idée à un auteur ou proposé une objection.'],
    },
  ],
  sujets: [
    {
      id: 'philo-g-s1', matiere: 'philo-g', titre: 'Sujet d\'entraînement 1 : dissertation', duree: 240,
      enonce: `## Dissertation (sujet d'entraînement)

Sujet inventé pour s'entraîner, sur le modèle de l'épreuve. À l'examen, le candidat choisit entre deux sujets de dissertation et une explication de texte.

### Sujet
Obéir à la loi, est-ce renoncer à sa liberté ?`,
      corrige: `## Corrigé (sujet d'entraînement)

### Analyse du sujet
- **Obéir** : se conformer à un ordre ou à une règle qui vient d'une autorité.
- **La loi** : règle générale et obligatoire, fixée par l'État (loi civile), mais aussi loi morale.
- **Liberté** : au sens courant, faire ce que l'on veut sans obstacle ; au sens politique, droits garantis ; au sens moral, autonomie.
- **Renoncer** : abandonner volontairement quelque chose.
- Distinction utile : **obligation / contrainte** ; **légal / légitime**.

### Problème
Si être libre, c'est faire ce que l'on veut, toute loi semble une limite. Pourtant, sans loi, le plus fort domine et personne n'est vraiment libre. La loi est-elle l'ennemie de la liberté ou sa condition ?

### Plan possible
I. En apparence, obéir, c'est renoncer à une part de sa liberté.
- La loi interdit et punit : elle limite ce que je peux faire (on ne peut pas rouler aussi vite qu'on veut).
- Chez Hobbes, les hommes abandonnent leur liberté naturelle au souverain en échange de la sécurité : c'est un véritable renoncement.

II. Mais sans loi, la liberté n'est qu'apparente.
- À l'état de nature, la liberté de chacun est menacée par la force des autres (Hobbes : guerre de chacun contre chacun).
- Rousseau : en passant au contrat social, on perd la liberté naturelle mais on gagne la liberté civile ; « l'obéissance à la loi qu'on s'est prescrite est liberté ».
- Montesquieu : la liberté politique est le droit de faire tout ce que les lois permettent ; la loi protège chacun.
- Kant : l'autonomie consiste à obéir à la loi que sa raison se donne.

III. Tout dépend de la loi à laquelle on obéit.
- Une loi peut être légale sans être légitime (lois de ségrégation) : y obéir serait renoncer à sa liberté et à sa dignité.
- La désobéissance civile peut alors être un acte de liberté responsable.
- Obéir n'est donc pas renoncer à sa liberté lorsque la loi est juste et voulue en commun ; c'est y renoncer lorsque la loi est imposée par la force ou injuste.

### Conclusion
Obéir à la loi n'est pas, en soi, renoncer à sa liberté : c'est souvent la condition d'une liberté réelle et partagée. Mais cette obéissance n'est libre que si la loi est légitime, ce qui suppose que les citoyens restent capables de la juger.`,
      grille: [
        { c: 'Introduction : définitions, problème réel, annonce du plan', pts: 4 },
        { c: 'Progression du plan : chaque partie répond au problème et la suivante va plus loin', pts: 5 },
        { c: 'Arguments expliqués, avec des exemples précis', pts: 5 },
        { c: 'Références utilisées à bon escient (Hobbes, Rousseau, Montesquieu, Kant)', pts: 3 },
        { c: 'Conclusion qui répond clairement, qualité de l\'expression', pts: 3 },
      ],
    },
    {
      id: 'philo-g-s2', matiere: 'philo-g', titre: 'Sujet d\'entraînement 2 : explication de texte', duree: 240,
      enonce: `## Explication de texte (sujet d'entraînement)

Texte écrit pour l'exercice, inspiré de la pensée des stoïciens (il ne s'agit pas d'une citation). À l'examen, le texte est un extrait authentique d'un auteur du programme.

### Texte
« Nous nous plaignons sans cesse des événements : la pluie qui gâche une promenade, la maladie, la critique d'un ami. Pourtant, ce ne sont pas ces choses qui nous blessent, mais l'idée que nous nous en faisons. La pluie n'est ni bonne ni mauvaise ; c'est notre jugement qui la déclare insupportable. Or nos jugements dépendent de nous, alors que la pluie, la maladie ou l'opinion des autres n'en dépendent pas. Celui qui place son bonheur dans ce qui ne dépend pas de lui se condamne à l'inquiétude ; celui qui le place dans ce qui dépend de lui ne peut plus être troublé par rien. »

### Consigne
Expliquez le texte. La connaissance de la doctrine de l'auteur n'est pas requise : il faut rendre compte, par la compréhension précise du texte, du problème dont il est question.`,
      corrige: `## Corrigé (sujet d'entraînement)

### Introduction
- **Thème** : l'origine de nos troubles et la condition du bonheur.
- **Thèse** : ce ne sont pas les événements qui nous font souffrir, mais nos jugements sur eux ; or nos jugements dépendent de nous, donc le bonheur aussi.
- **Problème** : notre bonheur semble dépendre de ce qui nous arrive (santé, succès, opinion des autres). Peut-on être heureux si l'on ne maîtrise pas les événements ?
- **Enjeu** : savoir si l'on peut se rendre indépendant de la chance.
- **Structure** : 1) le constat de nos plaintes et sa correction (« ce ne sont pas ces choses… ») ; 2) l'argument : distinguer ce qui dépend de nous et ce qui n'en dépend pas ; 3) la conclusion sur le bonheur.

### Développement
1. Le constat : nous accusons les événements. L'auteur part d'exemples ordinaires (pluie, maladie, critique). Le connecteur « pourtant » renverse l'opinion : ce qui nous blesse, c'est « l'idée que nous nous en faisons ». La pluie est neutre ; c'est notre jugement qui la qualifie. Exemple : la même pluie réjouit l'agriculteur et désole le promeneur.
2. L'argument : « or » introduit la distinction centrale entre ce qui dépend de nous (nos jugements) et ce qui n'en dépend pas (le monde, le corps, l'opinion d'autrui). C'est la distinction d'Épictète, au début du Manuel. Si le trouble vient du jugement, et si le jugement dépend de nous, alors le trouble aussi dépend de nous.
3. La conclusion : placer son bonheur dans ce qui ne dépend pas de nous, c'est se condamner à l'inquiétude, car on peut tout perdre. Le placer dans nos jugements, c'est le rendre inattaquable : c'est l'idéal du sage.

### Discussion possible
- Force du texte : il libère de la dépendance à la chance et donne une méthode concrète (changer son regard).
- Limite : peut-on vraiment juger la maladie grave ou la mort d'un proche comme « ni bonne ni mauvaise » ? Le texte risque de conduire à l'indifférence, voire à la résignation devant l'injustice.
- Épicure ou Aristote rappellent que certains biens extérieurs (santé, amis) comptent pour le bonheur.

### Conclusion
Le texte montre que notre bonheur dépend moins des événements que de notre manière de les juger. Il propose une liberté intérieure exigeante, dont on peut discuter la portée face aux souffrances les plus graves.`,
      grille: [
        { c: 'Introduction : thème, thèse, problème, structure', pts: 4 },
        { c: 'Compréhension précise du texte, rôle des connecteurs', pts: 6 },
        { c: 'Définitions, exemples et explication des idées sans paraphrase', pts: 5 },
        { c: 'Discussion pertinente et références à bon escient', pts: 3 },
        { c: 'Conclusion et qualité de l\'expression', pts: 2 },
      ],
    },
  ],
};
