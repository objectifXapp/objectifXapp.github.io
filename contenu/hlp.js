// Humanités, littérature et philosophie (HLP) — terminale, voie générale. Sources : voir matiere.sources.
// Programme : arrêté du 19 juillet 2019 (BO spécial n° 8 du 25 juillet 2019), toujours en vigueur pour le bac 2027.
// Semestre 1 « La recherche de soi » (du romantisme au XXe siècle) : 3 entrées. Semestre 2 « L'Humanité en question »
// (période contemporaine, XXe et XXIe siècles) : 3 entrées. Un chapitre par entrée, dans l'ordre du programme, puis un chapitre de méthode.
// Épreuve 2027 : note de service du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026). 4 heures, coefficient 16.
// Un texte, deux questions : une interprétation et un essai (l'une littéraire, l'autre philosophique), chacune sur 10 points,
// rédigées sur deux copies séparées. La maîtrise de la langue est évaluée.
export default {
  matiere: {
    id: 'hlp',
    nom: 'Humanités, littérature et philosophie',
    voie: 'generale',
    epreuve: { type: 'ecrit', duree: 240, coef: 16, quand: 'juin', note: 'Un texte, deux questions sur 10 points : une interprétation et un essai, l\'une littéraire, l\'autre philosophique' },
    sources: [
      'https://www.education.gouv.fr/bo/19/Special8/MENE1921252A.htm',
      'https://eduscol.education.fr/1739/programmes-et-ressources-en-humanites-litterature-et-philosophie-voie-g',
      'https://www.digischool.fr/articles/lycee/bac/specialite-hlp/',
      'https://www.digischool.fr/articles/lycee/bac/sujet-hlp-2026-et-corrige/',
      'https://diplomeo.com/actualite-sujets_hlp_bac_2025',
      'https://fr.wikisource.org/wiki/Les_Confessions_(Rousseau)/Livre_I',
    ],
    chapitres: [
      { id: 'hlp-1', t: 'Éducation, transmission et émancipation', theme: 'La recherche de soi' },
      { id: 'hlp-2', t: 'Les expressions de la sensibilité', theme: 'La recherche de soi' },
      { id: 'hlp-3', t: 'Les métamorphoses du moi', theme: 'La recherche de soi' },
      { id: 'hlp-4', t: 'Création, continuités et ruptures', theme: 'L\'Humanité en question' },
      { id: 'hlp-5', t: 'Histoire et violence', theme: 'L\'Humanité en question' },
      { id: 'hlp-6', t: 'L\'humain et ses limites', theme: 'L\'Humanité en question' },
      { id: 'hlp-7', t: 'Méthode : l\'interprétation et l\'essai', theme: 'Méthode' },
    ],
  },
  paquets: [
    // ---------------------------------------------------------------- 1 Éducation, transmission, émancipation
    {
      chapitre: 'hlp-1',
      fiche: `## Éducation, transmission et émancipation

### De quoi parle cette entrée ?
- **Éduquer**, c'est faire grandir un être humain : lui apprendre à penser, à vivre avec les autres, à se conduire.
- **Transmettre**, c'est faire passer d'une génération à l'autre un savoir, une langue, une culture, des valeurs.
- **S'émanciper**, c'est se libérer d'une tutelle (parents, maîtres, traditions, préjugés) pour penser et agir par soi-même.
- La tension de l'entrée : on a besoin de recevoir pour devenir soi, mais il faut aussi savoir s'arracher à ce qu'on a reçu.

### Les philosophes : éduquer pour libérer
- **Rousseau**, « Émile » (1762) : l'enfant n'est pas un petit adulte. Il propose une **éducation négative** : ne pas remplir l'enfant de leçons trop tôt, mais protéger son développement naturel et le laisser apprendre par l'expérience.
- **Kant**, « Qu'est-ce que les Lumières ? » (1784) : les Lumières sont la sortie de l'homme hors de l'état de **minorité**, c'est-à-dire l'incapacité de se servir de son entendement sans être dirigé par un autre. Sa devise : « **Sapere aude** ! Aie le courage de te servir de ton propre entendement. »
- **Condorcet**, « Cinq mémoires sur l'instruction publique » (1791) : l'instruction publique doit rendre chaque citoyen capable de juger par lui-même, pour qu'il ne dépende pas des autres. (Un extrait est tombé au bac 2025, sur l'éducation à la pitié.)
- **Durkheim** : l'éducation est d'abord une **socialisation** : la société transmet à l'enfant ce dont il a besoin pour vivre en elle.
- **Arendt**, « La crise de l'éducation » (1958) : l'école doit **protéger** l'enfant du monde et le monde de la nouveauté que l'enfant apporte. Elle transmet un monde ancien à des nouveaux venus, qui pourront ensuite le changer.

### Les écrivains : apprendre à vivre
- Le **roman d'apprentissage** (ou de formation) raconte comment un jeune héros se forme au contact du monde. Modèle : Goethe, « Les Années d'apprentissage de Wilhelm Meister » (1795-1796).
- **Stendhal**, « Le Rouge et le Noir » (1830) : Julien Sorel, fils de charpentier, veut s'élever par son intelligence.
- **Balzac**, « Le Père Goriot » (1835) : à la fin, Rastignac, qui a perdu ses illusions, lance à Paris : « **À nous deux maintenant !** »
- **Flaubert**, « L'Éducation sentimentale » (1869) : Frédéric Moreau rate sa vie ; le roman montre une éducation qui échoue.
- **Jules Vallès**, « L'Enfant » (1879) : une enfance sous les coups et l'autorité, qui pousse à la révolte.
- **Simone de Beauvoir** : « Mémoires d'une jeune fille rangée » (1958) raconte comment elle s'est libérée de son milieu bourgeois. Dans « Le Deuxième Sexe » (1949) : « **On ne naît pas femme : on le devient.** » L'éducation fabrique aussi des rôles qu'il faut interroger.

### Les grandes questions
- Peut-on s'émanciper **sans** ce qu'on nous a transmis ? Pour critiquer une tradition, il faut d'abord la connaître.
- L'éducation libère-t-elle ou enferme-t-elle ? Elle peut ouvrir l'esprit (Kant, Condorcet) ou dresser et formater (Vallès).
- Qui doit éduquer : la famille, l'école, l'expérience, les livres ?

### À retenir pour le bac
- Trois mots à définir : éduquer, transmettre, s'émanciper.
- Kant : la minorité, « Sapere aude ». Rousseau : l'éducation négative. Arendt : l'école protège l'enfant et le monde.
- Le roman d'apprentissage : Stendhal, Balzac (Rastignac), Flaubert (une éducation ratée).
- Piège : opposer simplement transmission et émancipation. On s'émancipe souvent grâce à ce qu'on a reçu.`,
      cartes: [
        { q: "Que veut dire « s'émanciper » ?", r: "Se libérer d'une tutelle (parents, maîtres, traditions, préjugés) pour penser et agir par soi-même." },
        { q: "Qu'est-ce que l'éducation négative chez Rousseau ?", r: "Ne pas remplir l'enfant de leçons trop tôt, mais protéger son développement naturel et le laisser apprendre par l'expérience (« Émile », 1762)." },
        { q: "Qu'est-ce que la minorité selon Kant ?", r: "L'incapacité de se servir de son entendement sans être dirigé par un autre. Les Lumières sont la sortie de cet état (1784)." },
        { q: "Que signifie « Sapere aude » ?", r: "« Ose savoir » : Kant en fait la devise des Lumières. « Aie le courage de te servir de ton propre entendement. »" },
        { q: "Quel est le but de l'instruction publique selon Condorcet ?", r: "Rendre chaque citoyen capable de juger par lui-même, pour qu'il ne dépende pas des autres (« Cinq mémoires sur l'instruction publique », 1791)." },
        { q: "Comment Durkheim définit-il l'éducation ?", r: "Comme une socialisation : la société transmet à l'enfant ce dont il a besoin pour vivre en elle." },
        { q: "Que doit protéger l'école selon Arendt ?", r: "L'enfant contre le monde, et le monde contre la nouveauté de l'enfant : elle transmet un monde ancien à des nouveaux venus." },
        { q: "Qu'est-ce qu'un roman d'apprentissage ?", r: "Un roman qui raconte comment un jeune héros se forme au contact du monde. Modèle : « Wilhelm Meister » de Goethe." },
        { q: "Qui lance « À nous deux maintenant ! », et dans quel roman ?", r: "Rastignac, à la fin du « Père Goriot » de Balzac (1835), face à Paris qu'il veut conquérir." },
        { q: "Pourquoi « L'Éducation sentimentale » est-elle une éducation ratée ?", r: "Frédéric Moreau ne réalise ni ses amours ni ses ambitions : le roman de Flaubert (1869) montre l'échec de la formation." },
        { q: "Que dit Beauvoir dans « Le Deuxième Sexe » (1949) ?", r: "« On ne naît pas femme : on le devient. » Les rôles féminins viennent de l'éducation et de la société, pas de la nature." },
        { q: "Pourquoi transmission et émancipation ne s'opposent-elles pas simplement ?", r: "Pour critiquer une tradition, il faut d'abord l'avoir reçue : on s'émancipe souvent grâce à ce qu'on a appris." },
      ],
      quiz: [
        { q: "Pour Kant, l'état de minorité, c'est :", choix: ["le fait d'avoir moins de dix-huit ans", "ne pas oser penser sans un guide", "appartenir à un groupe peu nombreux", "refuser d'aller à l'école"], bonne: 1, expl: "La minorité n'est pas une question d'âge : c'est la dépendance intellectuelle, dont on sort par le courage de penser.", niv: 1 },
        { q: "Quelle œuvre de Rousseau est un traité d'éducation ?", choix: ["Les Confessions", "Les Rêveries du promeneur solitaire", "Du contrat social", "Émile"], bonne: 3, expl: "« Émile ou De l'éducation » (1762) suit l'éducation d'un enfant imaginaire.", niv: 1 },
        { q: "Rastignac s'écrie « À nous deux maintenant ! » à la fin de :", choix: ["Le Père Goriot", "Le Rouge et le Noir", "L'Éducation sentimentale", "L'Enfant"], bonne: 0, expl: "C'est la dernière réplique du « Père Goriot » de Balzac.", niv: 1 },
        { q: "Un élève accepte tout ce que dit un influenceur sans chercher à vérifier. Kant dirait qu'il :", choix: ["est trop éduqué", "s'émancipe par la curiosité", "reste dans la minorité", "pratique l'éducation négative"], bonne: 2, expl: "Laisser un autre penser à sa place, par paresse ou par lâcheté, c'est rester mineur.", niv: 2 },
        { q: "Un parent laisse son enfant apprendre en manipulant et en se trompant, sans lui donner de cours trop tôt. Il suit :", choix: ["Durkheim", "Condorcet", "Rousseau", "Arendt"], bonne: 2, expl: "C'est l'éducation négative de l'« Émile » : protéger et laisser l'expérience instruire.", niv: 2 },
        { q: "Selon Arendt, que doit faire l'école ?", choix: ["Transmettre le monde ancien aux nouveaux venus", "Laisser les enfants inventer seuls tout leur monde", "Préparer d'abord au métier", "Supprimer toute tradition"], bonne: 0, expl: "L'école protège l'enfant et le monde : elle transmet d'abord, pour que les nouveaux puissent ensuite changer le monde.", niv: 2 },
        { q: "Dans « L'Éducation sentimentale », le parcours de Frédéric Moreau est surtout :", choix: ["une ascension sociale réussie", "une révolte contre son père", "un apprentissage religieux", "une formation qui échoue"], bonne: 3, expl: "Flaubert renverse le roman d'apprentissage : son héros rate ses amours comme ses ambitions.", niv: 2 },
        { q: "« On ne naît pas femme : on le devient » signifie que :", choix: ["les femmes changent de nature en vieillissant", "les rôles féminins sont appris, pas naturels", "le corps ne compte jamais", "seules les femmes s'éduquent"], bonne: 1, expl: "Beauvoir montre que ce qu'on croit naturel est en grande partie appris.", niv: 2 },
        { q: "Quel argument nuance le mieux l'idée que l'émancipation rejette toute transmission ?", choix: ["Il faut connaître une tradition pour la critiquer", "Les enfants n'ont jamais besoin des adultes pour penser", "La tradition est toujours injuste", "S'émanciper, c'est oublier tout ce qu'on sait"], bonne: 0, expl: "Kant et Condorcet comptent sur l'instruction pour rendre autonome : on se libère avec ce qu'on a reçu.", niv: 3 },
        { q: "Quelle différence entre Condorcet et Durkheim sur l'éducation ?", choix: ["Condorcet vise l'adaptation, Durkheim la révolte", "Ils refusent l'un et l'autre l'école publique", "Condorcet vise le jugement libre, Durkheim la socialisation", "Durkheim parle des enfants, Condorcet seulement des adultes"], bonne: 2, expl: "Condorcet veut des citoyens qui jugent par eux-mêmes ; Durkheim insiste sur ce que la société transmet pour qu'on vive en elle.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 2 Les expressions de la sensibilité
    {
      chapitre: 'hlp-2',
      fiche: `## Les expressions de la sensibilité

### De quoi parle cette entrée ?
- La **sensibilité**, c'est la capacité d'être touché : par ses sens (voir, entendre), par ses **émotions** (peur, joie), par ses **passions** (amour, jalousie, ambition) et par le beau.
- Une **émotion** est vive et brève (sursauter de peur). Une **passion** est durable et peut dominer toute une vie (l'amour fou, l'ambition).
- Question centrale : comment exprimer ce que l'on ressent, et que vaut ce qu'on ressent face à la raison ?

### Le romantisme : le moi qui souffre et qui chante
- Le **romantisme** (fin du 18e et première moitié du 19e siècle) met au premier plan le **moi**, les sentiments, la nature, la mélancolie.
- **Rousseau**, « Les Rêveries du promeneur solitaire » (publiées en 1782) : la rêverie au bord du lac de Bienne, le simple sentiment d'exister.
- **Chateaubriand**, « René » (1802) : le « **vague des passions** », une tristesse sans objet, l'ennui d'une jeunesse qui ne sait où aller.
- **Lamartine**, « Le Lac » (1820) : « **Ô temps ! suspends ton vol** » ; le poète pleure l'amour perdu et le temps qui passe.
- **Musset**, « La Nuit de mai » (1835) : « **Les plus désespérés sont les chants les plus beaux** » ; la douleur devient source de poésie.
- **Hugo**, « Les Contemplations » (1856) : le deuil de sa fille Léopoldine (« Demain, dès l'aube… »).

### Après le romantisme : affiner la sensation
- **Baudelaire**, « Les Fleurs du mal » (1857) : le **spleen** (un ennui profond et angoissé) et l'**idéal**. Dans « Correspondances », les parfums, les couleurs et les sons se répondent.
- **Proust**, « Du côté de chez Swann » (1913) : la **madeleine** trempée dans le thé fait revenir toute son enfance. Une sensation réveille la **mémoire involontaire**.

### Les philosophes : la sensibilité contre la raison ?
- Longtemps, la philosophie se méfie des passions, qui troublent le jugement.
- **Hume** (1739) renverse l'ordre : « **la raison est, et ne doit être, que l'esclave des passions** ». La raison calcule les moyens, mais ce sont nos désirs qui fixent les buts.
- **Hegel** : « **Rien de grand ne s'est accompli dans le monde sans passion.** » Les passions sont l'énergie de l'histoire.
- **Kant** (1790) distingue le **beau** (qui plaît par une forme harmonieuse) et le **sublime** (une tempête, une montagne immense, qui nous dépasse et nous fait sentir à la fois notre petitesse et la grandeur de notre raison).
- **Sartre**, « Esquisse d'une théorie des émotions » (1939) : l'émotion est une **conduite magique**. Face à un problème trop difficile, on transforme le monde en pensée au lieu d'agir (s'évanouir devant le danger, c'est le faire disparaître).

### Les grandes questions
- La sensibilité s'éduque-t-elle ? (Sujet 2025 : « La littérature a-t-elle pour vocation d'éduquer à la sensibilité ? »)
- Peut-on exprimer exactement ce qu'on ressent, ou les mots trahissent-ils l'émotion ?
- Faut-il se méfier de ses émotions, ou nous apprennent-elles quelque chose ?

### À retenir pour le bac
- Émotion et passion ; beau et sublime.
- Romantisme : Chateaubriand (vague des passions), Lamartine (« Le Lac »), Musset, Hugo.
- Baudelaire (spleen, « Correspondances »), Proust (la madeleine).
- Hume (raison esclave des passions), Hegel (rien de grand sans passion), Sartre (conduite magique).
- Piège : opposer simplement raison et sensibilité. Chez Hume et Hegel, les passions donnent sa force à l'action.`,
      cartes: [
        { q: "Émotion ou passion ?", r: "L'émotion est vive et brève (sursauter de peur). La passion est durable et peut dominer une vie (l'amour fou, l'ambition)." },
        { q: "Qu'est-ce que le romantisme ?", r: "Un mouvement de la fin du 18e et de la première moitié du 19e siècle qui met au premier plan le moi, les sentiments, la nature et la mélancolie." },
        { q: "Qu'est-ce que le « vague des passions » chez Chateaubriand ?", r: "Une tristesse sans objet précis, l'ennui d'une jeunesse qui ne sait où aller (« René », 1802)." },
        { q: "Quel poème contient « Ô temps ! suspends ton vol » ?", r: "« Le Lac » de Lamartine (1820) : le poète pleure l'amour perdu et le temps qui passe." },
        { q: "Que dit Musset de la douleur dans « La Nuit de mai » ?", r: "« Les plus désespérés sont les chants les plus beaux » : la souffrance devient source de poésie." },
        { q: "Qu'est-ce que le spleen chez Baudelaire ?", r: "Un ennui profond et angoissé, opposé à l'idéal, dans « Les Fleurs du mal » (1857)." },
        { q: "Que montre le poème « Correspondances » de Baudelaire ?", r: "Que les parfums, les couleurs et les sons se répondent : les sens communiquent entre eux." },
        { q: "Que montre l'épisode de la madeleine chez Proust ?", r: "Une simple sensation (le goût d'une madeleine dans le thé) réveille tout un passé : c'est la mémoire involontaire (1913)." },
        { q: "Que dit Hume de la raison et des passions ?", r: "« La raison est, et ne doit être, que l'esclave des passions » : nos désirs fixent les buts, la raison calcule les moyens." },
        { q: "Que dit Hegel des passions ?", r: "« Rien de grand ne s'est accompli dans le monde sans passion » : elles sont l'énergie de l'histoire." },
        { q: "Beau ou sublime selon Kant ?", r: "Le beau plaît par une forme harmonieuse. Le sublime (une tempête, une montagne immense) nous dépasse et nous fait sentir la grandeur de notre raison." },
        { q: "Pourquoi Sartre dit-il que l'émotion est une « conduite magique » ?", r: "Face à une situation trop difficile, on transforme le monde en pensée au lieu d'agir : s'évanouir devant un danger, c'est le faire disparaître." },
      ],
      quiz: [
        { q: "L'amour qui occupe toute la vie d'un personnage pendant des années est plutôt :", choix: ["une émotion", "une sensation", "un sentiment sublime", "une passion"], bonne: 3, expl: "La passion dure et domine ; l'émotion est vive et passagère.", niv: 1 },
        { q: "« Ô temps ! suspends ton vol » est un vers de :", choix: ["Musset", "Lamartine", "Baudelaire", "Hugo"], bonne: 1, expl: "C'est un vers du « Lac » de Lamartine (1820).", niv: 1 },
        { q: "Qui a écrit « Les plus désespérés sont les chants les plus beaux » ?", choix: ["Chateaubriand", "Hugo", "Musset", "Lamartine"], bonne: 2, expl: "Musset, dans « La Nuit de mai » (1835).", niv: 1 },
        { q: "Une odeur de crêpes fait soudain revenir à Inès un après-midi oublié chez sa grand-mère. Cela illustre :", choix: ["la mémoire involontaire de Proust", "le spleen de Baudelaire", "le sublime de Kant", "la conduite magique décrite par Sartre"], bonne: 0, expl: "Comme la madeleine, une sensation fait resurgir le passé sans qu'on le cherche.", niv: 2 },
        { q: "Pour Hume, quel est le rôle de la raison ?", choix: ["Faire taire toutes les passions qui nous troublent", "Trouver comment obtenir ce que l'on désire", "Choisir seule nos buts", "Produire des émotions"], bonne: 1, expl: "La raison est « esclave des passions » : elle calcule, mais le désir fixe les fins.", niv: 2 },
        { q: "Devant une tempête en mer immense, Paul se sent minuscule mais fasciné. Kant parlerait :", choix: ["du beau", "de l'agréable", "du spleen", "du sublime"], bonne: 3, expl: "Le sublime naît de ce qui nous dépasse par sa grandeur ou sa force.", niv: 2 },
        { q: "Un élève s'évanouit au moment d'un oral qu'il redoute. Pour Sartre, cette émotion est :", choix: ["une conduite magique", "une passion durable", "une sensation physique sans sens", "un raisonnement"], bonne: 0, expl: "Ne pouvant affronter la situation, la conscience la supprime « magiquement ».", niv: 2 },
        { q: "Le « vague des passions » décrit par Chateaubriand est :", choix: ["un amour précis et heureux", "une colère violente contre la société", "une tristesse sans objet précis", "une passion politique"], bonne: 2, expl: "René souffre sans savoir de quoi : c'est le mal du siècle romantique.", niv: 2 },
        { q: "Quelle idée, défendue par Hegel, s'oppose à l'idée que les passions sont nuisibles ?", choix: ["Les passions sont des maladies dont il faut guérir", "Le sage doit fuir toute passion", "Rien de grand ne s'est accompli sans passion", "L'émotion trouble le jugement"], bonne: 2, expl: "Pour Hegel, les passions sont l'énergie des grandes actions.", niv: 3 },
        { q: "Pour « La littérature a-t-elle pour vocation d'éduquer à la sensibilité ? », quelle idée est la plus utile ?", choix: ["La littérature sert surtout à informer", "Les livres nous aident à nommer nos émotions", "Les émotions ne s'expriment jamais par des mots", "Seule la philosophie parle des sentiments"], bonne: 1, expl: "Lire Lamartine ou Proust, c'est apprendre des mots et des nuances pour ce qu'on ressent.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 3 Les métamorphoses du moi
    {
      chapitre: 'hlp-3',
      fiche: `## Les métamorphoses du moi

### De quoi parle cette entrée ?
- Le **moi**, c'est ce que je désigne quand je dis « je » : une personne qui pense, se souvient et se sent la même au fil du temps.
- Pourtant, je change : mon corps, mes goûts, mes idées. Suis-je encore le même qu'à six ans ? C'est le problème de l'**identité personnelle**.
- Une **métamorphose** est un changement de forme. L'entrée demande : le moi est-il stable, ou ne cesse-t-il de se transformer ?

### Se connaître et se raconter
- **Montaigne**, « Essais » (1580) : il se prend lui-même comme sujet, car « **chaque homme porte la forme entière de l'humaine condition** ». Il se découvre changeant.
- **Rousseau**, « Les Confessions » : il veut se montrer « dans toute la vérité de la nature ». Il fonde l'**autobiographie** moderne.
- **Philippe Lejeune** (1975) parle de **pacte autobiographique** : l'auteur, le narrateur et le personnage sont la même personne, et l'auteur promet de dire la vérité.
- **Ricœur** : notre identité est une **identité narrative** ; nous savons qui nous sommes en racontant notre histoire.

### Le moi est-il une chose stable ?
- **Descartes** (1637, 1641) : « **Je pense, donc je suis** ». Le moi est une chose qui pense, dont je suis certain même si je doute de tout le reste.
- **Locke** : ce qui fait que je suis la même personne, c'est la **conscience** et la **mémoire** de mes actes passés.
- **Hume** (1739) : quand je regarde en moi, je ne trouve que des perceptions qui se succèdent (chaud, froid, plaisir, douleur). Le moi n'est qu'un **faisceau de perceptions**.
- **Freud** : une grande partie de notre vie psychique est **inconsciente**. Après Copernic et Darwin, c'est une troisième blessure : « **le moi n'est pas maître dans sa propre maison** ».
- **Sartre** (1945) : « **l'existence précède l'essence** ». L'homme n'a pas de nature fixée d'avance : il se fait par ses choix.

### Les écrivains : le moi qui se dédouble
- **Rimbaud**, lettres de mai 1871 : « **Je est un autre** ». Le poète découvre en lui une voix qui le dépasse.
- **Nerval**, « Aurélia » (1855) : le rêve et la folie brouillent les limites du moi.
- **Stevenson**, « L'Étrange Cas du docteur Jekyll et de M. Hyde » (1886) : un homme se divise en deux, le respectable et le monstrueux.
- **Kafka**, « La Métamorphose » (1915) : Gregor Samsa se réveille transformé en insecte ; sa famille ne le reconnaît plus.
- **Proust**, « À la recherche du temps perdu » : nous sommes faits de « moi » successifs, que seule la mémoire relie.

### À retenir pour le bac
- Identité personnelle : rester le même en changeant.
- Descartes (je pense), Locke (mémoire), Hume (faisceau de perceptions), Freud (le moi n'est pas maître), Sartre (l'existence précède l'essence).
- Autobiographie : Montaigne, Rousseau, le pacte de Lejeune, l'identité narrative de Ricœur.
- « Je est un autre » (Rimbaud), Jekyll et Hyde, Gregor Samsa.
- Sujet 2026 : « Dans quelle mesure peut-on, selon ce texte, se connaître authentiquement ? » (texte de Raymond Aron).`,
      cartes: [
        { q: "Qu'est-ce que le problème de l'identité personnelle ?", r: "Comment puis-je rester la même personne alors que mon corps, mes goûts et mes idées changent ?" },
        { q: "Pourquoi Montaigne se prend-il pour sujet de ses « Essais » ?", r: "Parce que « chaque homme porte la forme entière de l'humaine condition » : en s'étudiant, on étudie l'homme." },
        { q: "Qu'est-ce que le pacte autobiographique (Lejeune, 1975) ?", r: "Auteur, narrateur et personnage sont la même personne, et l'auteur promet au lecteur de dire la vérité." },
        { q: "Qu'est-ce que l'identité narrative chez Ricœur ?", r: "Nous savons qui nous sommes en racontant notre histoire : l'identité se construit par le récit." },
        { q: "Que montre le « je pense, donc je suis » de Descartes ?", r: "Même si je doute de tout, je suis certain d'exister comme chose qui pense." },
        { q: "Pour Locke, qu'est-ce qui fait que je reste la même personne ?", r: "La conscience et la mémoire de mes actes passés." },
        { q: "Que trouve Hume quand il regarde en lui-même ?", r: "Seulement des perceptions qui se succèdent : le moi n'est qu'un faisceau de perceptions (1739)." },
        { q: "Que veut dire Freud par « le moi n'est pas maître dans sa propre maison » ?", r: "Une grande partie de notre vie psychique est inconsciente : nous ne contrôlons pas tout ce qui se passe en nous." },
        { q: "Que signifie « l'existence précède l'essence » (Sartre) ?", r: "L'homme n'a pas de nature fixée d'avance : il existe d'abord, puis se définit par ses choix." },
        { q: "Qui a écrit « Je est un autre », et quand ?", r: "Rimbaud, dans ses lettres de mai 1871 : le poète découvre en lui une voix qui le dépasse." },
        { q: "Que raconte « La Métamorphose » de Kafka (1915) ?", r: "Gregor Samsa se réveille transformé en insecte ; sa famille finit par ne plus le reconnaître." },
        { q: "Que montre « Docteur Jekyll et M. Hyde » (Stevenson, 1886) ?", r: "Un homme se divise en deux : le respectable et le monstrueux. Le moi n'est pas un bloc." },
      ],
      quiz: [
        { q: "Pour Hume, le moi est :", choix: ["un faisceau de perceptions", "une chose qui pense", "une âme immortelle", "l'essence fixe de l'homme"], bonne: 0, expl: "Hume ne trouve en lui que des perceptions successives, pas un moi stable. « Chose qui pense », c'est Descartes.", niv: 1 },
        { q: "« Je est un autre » est une formule de :", choix: ["Nerval", "Proust", "Rimbaud", "Kafka"], bonne: 2, expl: "Rimbaud, dans ses lettres de mai 1871.", niv: 1 },
        { q: "Pour Locke, ce qui fait l'identité d'une personne, c'est :", choix: ["le corps qu'il possède", "le nom inscrit à l'état civil", "l'âme qu'il reçoit", "la mémoire de son passé"], bonne: 3, expl: "Je suis la même personne tant que je me souviens de mes actes comme miens.", niv: 1 },
        { q: "Une personne frappée d'amnésie ne se souvient plus de sa vie passée. Quel auteur pourrait dire qu'elle n'est plus tout à fait la même personne ?", choix: ["Descartes", "Locke", "Sartre", "Montaigne"], bonne: 1, expl: "Si l'identité repose sur la mémoire, la perdre, c'est perdre une part de soi.", niv: 2 },
        { q: "Un ami oublie sans cesse les rendez-vous avec quelqu'un qu'il dit apprécier. Freud y verrait :", choix: ["un désir inconscient", "une simple distraction sans sens", "une preuve de liberté totale", "un faisceau de perceptions"], bonne: 0, expl: "Pour Freud, un acte manqué révèle un désir caché : le moi n'est pas maître chez lui.", niv: 2 },
        { q: "Dans une autobiographie, qu'est-ce qui distingue le pacte autobiographique ?", choix: ["L'auteur invente librement", "Le héros est un personnage de fiction", "Auteur, narrateur et personnage ne font qu'un", "Le récit est écrit à la troisième personne du singulier"], bonne: 2, expl: "C'est la définition de Lejeune : une seule personne, et une promesse de vérité.", niv: 2 },
        { q: "« Je suis comme ça depuis toujours, c'est ma nature. » Quel auteur s'oppose à cette phrase ?", choix: ["Hume", "Rousseau", "Montaigne", "Sartre"], bonne: 3, expl: "Pour Sartre, il n'y a pas de nature humaine fixée : l'homme se fait par ses choix.", niv: 2 },
        { q: "Quelle œuvre montre un homme qui se divise en deux, un respectable et un monstrueux ?", choix: ["La Métamorphose", "Aurélia", "Docteur Jekyll et M. Hyde", "Les Années d'apprentissage de Wilhelm Meister"], bonne: 2, expl: "Stevenson (1886). Chez Kafka, la transformation est physique : Gregor devient insecte.", niv: 1 },
        { q: "Pourquoi l'autobiographie pose-t-elle un problème de vérité ?", choix: ["Les souvenirs sont en général inventés", "On choisit, on oublie et on s'embellit", "Elle est en général écrite par quelqu'un d'autre", "Elle ne parle pas de l'auteur"], bonne: 1, expl: "Même sincère, on se raconte avec sa mémoire et ses désirs : on n'est pas un témoin neutre de soi.", niv: 3 },
        { q: "Pour « Peut-on se connaître soi-même ? », quelle objection vient de Freud ?", choix: ["La pensée prouve notre existence", "Nous nous connaissons grâce à nos souvenirs", "On se connaît parfaitement en écrivant ses mémoires", "Une part de nous échappe toujours à la conscience"], bonne: 3, expl: "Si l'inconscient existe, l'introspection ne suffit jamais à se connaître entièrement.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 4 Création, continuités et ruptures
    {
      chapitre: 'hlp-4',
      fiche: `## Création, continuités et ruptures

### De quoi parle cette entrée ?
- **Créer**, c'est faire exister quelque chose de nouveau : une œuvre, une idée, une forme.
- Une **continuité**, c'est ce qui se prolonge : on reprend une tradition, on imite des modèles, on hérite d'un genre (le roman, le sonnet).
- Une **rupture**, c'est un changement brutal : on casse les règles anciennes pour inventer autre chose.
- Au 20e siècle, les artistes et les penseurs se demandent : peut-on encore créer comme avant après les guerres, les machines, les nouvelles techniques ? Faut-il tout recommencer ?

### Les ruptures en littérature et dans les arts
- **Apollinaire**, « Alcools » (1913) : le poème « Zone » s'ouvre sur « À la fin tu es las de ce monde ancien ». Pas de ponctuation, des images de la ville moderne (avions, affiches).
- **Dada** (à partir de 1916) puis le **surréalisme** : **André Breton**, « Manifeste du surréalisme » (1924), définit l'**écriture automatique** : écrire sans contrôle de la raison, pour laisser parler l'inconscient.
- **Marcel Duchamp**, « Fontaine » (1917) : un urinoir exposé comme œuvre. Ce n'est plus la main de l'artiste qui fait l'œuvre, c'est son choix.
- Le **théâtre de l'absurde** : **Ionesco**, « La Cantatrice chauve » (1950) ; des personnages qui parlent pour ne rien dire, un langage qui tourne à vide.
- Le **Nouveau Roman** (années 1950) : **Nathalie Sarraute**, « L'Ère du soupçon » (1956), **Alain Robbe-Grillet**. On se méfie du personnage et de l'intrigue traditionnels.

### Les continuités : créer avec des règles
- Rompre n'empêche pas de reprendre : les surréalistes se réclament de Rimbaud et de Lautréamont.
- L'**Oulipo** (Ouvroir de littérature potentielle, fondé en 1960) crée à partir de **contraintes** : **Queneau**, « Exercices de style » (1947), raconte 99 fois la même petite histoire ; **Perec**, « La Disparition » (1969), est un roman entier écrit sans la lettre « e ».
- La contrainte n'étouffe pas la création : elle oblige à inventer.

### Les philosophes : qu'est-ce que créer ?
- **Bergson**, « L'Évolution créatrice » (1907) : la vie elle-même est **création** de formes nouvelles et imprévisibles ; le temps vécu n'est pas répétition.
- **Walter Benjamin**, « L'Œuvre d'art à l'époque de sa reproductibilité technique » (1935) : la photo et le cinéma font perdre à l'œuvre son **aura**, c'est-à-dire sa présence unique, ici et maintenant. Mais ils rendent l'art accessible à tous.
- **Kuhn**, « La Structure des révolutions scientifiques » (1962) : la science n'avance pas seulement par accumulation, mais aussi par **révolutions** (passer de la Terre au centre à la Terre qui tourne autour du Soleil).
- Une création **absolue**, partie de rien, existe-t-elle ? Tout créateur hérite d'une langue, de techniques, d'œuvres passées.

### Les grandes questions
- Faut-il rompre avec le passé pour créer ?
- Une œuvre doit-elle être nouvelle pour avoir de la valeur ?
- La technique (photo, cinéma, numérique) appauvrit-elle ou renouvelle-t-elle la création ?

### À retenir pour le bac
- Définir création, continuité, rupture.
- Ruptures : Apollinaire (« Zone »), Breton (écriture automatique), Duchamp, Ionesco, Nouveau Roman.
- Continuités : l'Oulipo et la contrainte (Queneau, Perec).
- Benjamin (l'aura), Bergson (la vie crée), Kuhn (révolutions scientifiques).
- Piège : croire qu'une rupture part de rien. Même les avant-gardes ont des modèles.`,
      cartes: [
        { q: "Continuité ou rupture ?", r: "La continuité prolonge une tradition (reprendre un genre, imiter des modèles). La rupture casse les règles anciennes pour inventer autre chose." },
        { q: "Comment s'ouvre le poème « Zone » d'Apollinaire ?", r: "« À la fin tu es las de ce monde ancien » : un poème sans ponctuation, plein d'images de la ville moderne (« Alcools », 1913)." },
        { q: "Qu'est-ce que l'écriture automatique ?", r: "Écrire sans contrôle de la raison, pour laisser parler l'inconscient. Breton la définit dans le « Manifeste du surréalisme » (1924)." },
        { q: "Pourquoi la « Fontaine » de Duchamp (1917) est-elle une rupture ?", r: "Un urinoir exposé devient œuvre : ce n'est plus la main de l'artiste qui fait l'œuvre, c'est son choix." },
        { q: "Qu'est-ce que le théâtre de l'absurde ?", r: "Un théâtre où les personnages parlent pour ne rien dire et où le langage tourne à vide, comme dans « La Cantatrice chauve » d'Ionesco (1950)." },
        { q: "De quoi se méfie le Nouveau Roman ?", r: "Du personnage et de l'intrigue traditionnels (Sarraute, « L'Ère du soupçon », 1956 ; Robbe-Grillet)." },
        { q: "Qu'est-ce que l'Oulipo ?", r: "L'Ouvroir de littérature potentielle, fondé en 1960 : un groupe qui crée à partir de contraintes d'écriture." },
        { q: "Que fait Queneau dans « Exercices de style » (1947) ?", r: "Il raconte 99 fois la même petite histoire, chaque fois dans un style différent." },
        { q: "Quelle contrainte suit « La Disparition » de Perec (1969) ?", r: "Le roman entier est écrit sans la lettre « e »." },
        { q: "Qu'est-ce que l'aura selon Walter Benjamin ?", r: "La présence unique d'une œuvre, ici et maintenant, que la photo et le cinéma font perdre en la reproduisant (1935)." },
        { q: "Que dit Bergson dans « L'Évolution créatrice » (1907) ?", r: "La vie elle-même est création de formes nouvelles et imprévisibles : le temps vécu n'est pas une répétition." },
        { q: "Comment la science avance-t-elle selon Kuhn (1962) ?", r: "Pas seulement par accumulation : aussi par des révolutions, quand une nouvelle façon de voir remplace l'ancienne." },
      ],
      quiz: [
        { q: "Écrire sans contrôle de la raison, pour laisser parler l'inconscient, c'est :", choix: ["le Nouveau Roman", "l'Oulipo", "l'écriture automatique", "le théâtre de l'absurde"], bonne: 2, expl: "Breton la définit dans le « Manifeste du surréalisme » (1924).", niv: 1 },
        { q: "« À la fin tu es las de ce monde ancien » ouvre un poème de :", choix: ["Apollinaire", "Breton", "Baudelaire", "Rimbaud"], bonne: 0, expl: "C'est le premier vers de « Zone », dans « Alcools » (1913).", niv: 1 },
        { q: "Quel roman est écrit entièrement sans la lettre « e » ?", choix: ["Exercices de style", "La Disparition", "L'Ère du soupçon", "La Cantatrice chauve"], bonne: 1, expl: "« La Disparition » de Perec (1969), un exemple de contrainte oulipienne.", niv: 1 },
        { q: "Une chanteuse reprend une chanson ancienne en changeant tout l'arrangement. C'est surtout :", choix: ["une rupture totale", "une création à partir de rien", "une écriture automatique", "une continuité qui renouvelle"], bonne: 3, expl: "Elle reprend un héritage et la transforme : continuité et invention vont ensemble.", niv: 2 },
        { q: "Pour Benjamin, que perd une œuvre reproduite des millions de fois en photo ?", choix: ["Sa beauté", "Son prix", "Son aura", "Son auteur"], bonne: 2, expl: "L'aura, c'est la présence unique de l'œuvre ici et maintenant.", niv: 2 },
        { q: "Dans une pièce, deux personnages échangent des phrases banales qui ne mènent à rien. On pense :", choix: ["au surréalisme", "au théâtre de l'absurde", "au roman d'apprentissage", "à l'Oulipo"], bonne: 1, expl: "Chez Ionesco, le langage tourne à vide : c'est le théâtre de l'absurde.", niv: 2 },
        { q: "Pourquoi la contrainte de l'Oulipo n'étouffe-t-elle pas la création ?", choix: ["Elle force à trouver des idées neuves", "Elle supprime tout travail", "Elle impose de copier les auteurs anciens", "Elle laisse écrire sans règle"], bonne: 0, expl: "Écrire sans « e » force à chercher des mots et des tournures auxquels on n'aurait pas pensé.", niv: 2 },
        { q: "Quand l'idée que la Terre tourne autour du Soleil remplace l'ancienne, Kuhn parle de :", choix: ["continuité", "progrès lent", "révolution scientifique", "aura"], bonne: 2, expl: "Une révolution scientifique change toute la façon de voir le monde.", niv: 2 },
        { q: "Quelle objection fait-on à l'idée d'une rupture totale avec le passé ?", choix: ["Les avant-gardes n'ont rien inventé de nouveau", "Le passé vaut mieux que le présent", "Les artistes refusent de créer", "Les surréalistes eux-mêmes ont des modèles"], bonne: 3, expl: "Tout créateur hérite d'une langue et de modèles : une rupture se fait toujours par rapport à quelque chose.", niv: 3 },
        { q: "Pour « Faut-il rompre avec le passé pour créer ? », quelle distinction aide le plus ?", choix: ["Copier un modèle ou s'en servir pour inventer", "Créer pour soi ou créer pour être célèbre", "Travailler seul ou avec d'autres artistes", "Peindre la nature ou peindre la ville moderne"], bonne: 0, expl: "On peut hériter sans copier : la vraie question est ce qu'on fait de ce qu'on reçoit.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 5 Histoire et violence
    {
      chapitre: 'hlp-5',
      fiche: `## Histoire et violence

### De quoi parle cette entrée ?
- L'**histoire**, c'est à la fois ce qui est arrivé aux hommes et le **récit** qu'on en fait.
- La **violence** est l'usage de la force pour contraindre ou détruire. Le 20e siècle a connu une violence de masse : deux guerres mondiales, des génocides (la **Shoah**), la bombe atomique.
- Questions de l'entrée : la violence est-elle le moteur de l'histoire ? Peut-on dire l'horreur ? Que doit-on à la mémoire des victimes ?

### Écrire la guerre
- **Henri Barbusse**, « Le Feu » (1916, prix Goncourt) : la vie des soldats dans les tranchées, la boue, la peur, la mort.
- **Louis-Ferdinand Céline**, « Voyage au bout de la nuit » (1932) : Bardamu découvre l'absurdité de la guerre et de la société.
- **Paul Valéry**, « La Crise de l'esprit » (1919) : « **Nous autres, civilisations, nous savons maintenant que nous sommes mortelles.** » Après 1918, l'Europe découvre qu'elle peut disparaître.
- **Simone Weil**, « L'Iliade ou le poème de la force » (1940) : la **force** change en chose celui qui la subit, et elle enivre celui qui l'exerce.
- **Marguerite Duras**, « Hiroshima mon amour » (1959, film d'Alain Resnais) : comment se souvenir d'une catastrophe qu'on n'a pas vécue ?

### Témoigner de l'inhumain
- **Primo Levi**, « Si c'est un homme » (1947) : le récit de sa déportation à Auschwitz. Le camp cherche à détruire l'humanité des déportés.
- **Robert Antelme**, « L'Espèce humaine » (1947) : même réduits à presque rien, les déportés restent des hommes ; les bourreaux ne peuvent pas changer l'espèce humaine.
- **Adorno** (1949) : « **écrire un poème après Auschwitz est barbare** ». Mais la littérature de témoignage montre qu'il faut aussi écrire pour ne pas oublier.
- Le **devoir de mémoire** : transmettre ce qui s'est passé pour que cela ne se reproduise pas.

### Les philosophes : comprendre la violence
- **Kant** (1784) : l'**insociable sociabilité**. Les hommes ont besoin de vivre ensemble mais veulent aussi dominer ; ce conflit pousse paradoxalement l'humanité à progresser.
- **Hegel** : l'histoire avance à travers les conflits ; les grands hommes servent, sans le savoir, un but qui les dépasse (la **ruse de la raison**).
- **Freud**, « Malaise dans la civilisation » (1930) : il y a en l'homme une **pulsion d'agression** que la civilisation doit sans cesse contenir.
- **Hannah Arendt**, « Eichmann à Jérusalem » (1963) : Eichmann, qui a organisé la déportation des Juifs, n'était pas un monstre, mais un fonctionnaire qui ne pensait pas. C'est la **banalité du mal**.
- **Camus**, « La Peste » (1947) : une épidémie, image du nazisme ; « L'Homme révolté » (1951) : la révolte est juste, mais elle doit refuser de tuer au nom d'un avenir meilleur.

### À retenir pour le bac
- L'histoire : ce qui arrive et le récit qu'on en fait.
- Témoins : Barbusse, Levi, Antelme ; Valéry (civilisations mortelles), Weil (la force).
- Kant (insociable sociabilité), Freud (pulsion d'agression), Arendt (banalité du mal).
- Sujet 2025 : « Peut-on conserver son humanité dans des circonstances qui risquent de nous en dépouiller ? » (après un poème de Wisława Szymborska sur les victimes de la guerre).
- Piège : expliquer n'est pas excuser. Comprendre la violence aide à la combattre.`,
      cartes: [
        { q: "Quels sont les deux sens du mot « histoire » ?", r: "Ce qui est arrivé aux hommes, et le récit qu'on en fait." },
        { q: "Que raconte « Le Feu » de Barbusse (1916) ?", r: "La vie des soldats dans les tranchées de la Première Guerre mondiale : la boue, la peur, la mort. Il a reçu le prix Goncourt." },
        { q: "Que dit Valéry dans « La Crise de l'esprit » (1919) ?", r: "« Nous autres, civilisations, nous savons maintenant que nous sommes mortelles » : après 1918, l'Europe découvre qu'elle peut disparaître." },
        { q: "Que montre Simone Weil dans « L'Iliade ou le poème de la force » ?", r: "La force change en chose celui qui la subit, et elle enivre celui qui l'exerce (1940)." },
        { q: "Que raconte « Si c'est un homme » de Primo Levi (1947) ?", r: "Sa déportation à Auschwitz, où le camp cherchait à détruire l'humanité des déportés." },
        { q: "Quelle est l'idée de « L'Espèce humaine » d'Antelme (1947) ?", r: "Même réduits à presque rien, les déportés restent des hommes : les bourreaux ne peuvent pas changer l'espèce humaine." },
        { q: "Que dit Adorno de la poésie après Auschwitz ?", r: "« Écrire un poème après Auschwitz est barbare » (1949) : l'art semble impuissant ou indécent face à l'horreur." },
        { q: "Qu'est-ce que le devoir de mémoire ?", r: "Transmettre ce qui s'est passé, et le souvenir des victimes, pour que cela ne se reproduise pas." },
        { q: "Qu'est-ce que l'insociable sociabilité selon Kant ?", r: "Les hommes ont besoin de vivre ensemble mais veulent aussi dominer ; ce conflit pousse paradoxalement l'humanité à progresser (1784)." },
        { q: "Que dit Freud dans « Malaise dans la civilisation » (1930) ?", r: "Il y a en l'homme une pulsion d'agression que la civilisation doit sans cesse contenir." },
        { q: "Qu'est-ce que la banalité du mal selon Arendt ?", r: "Eichmann n'était pas un monstre mais un fonctionnaire qui ne pensait pas : le pire peut venir de gens ordinaires qui obéissent (1963)." },
        { q: "Que représente l'épidémie dans « La Peste » de Camus (1947) ?", r: "Elle est souvent lue comme une image du nazisme et de l'Occupation, face auxquels certains résistent." },
      ],
      quiz: [
        { q: "« Nous autres, civilisations, nous savons maintenant que nous sommes mortelles » est de :", choix: ["Camus", "Valéry", "Céline", "Barbusse"], bonne: 1, expl: "Paul Valéry, « La Crise de l'esprit » (1919), juste après la Première Guerre mondiale.", niv: 1 },
        { q: "Quelle œuvre raconte la déportation de son auteur à Auschwitz ?", choix: ["Le Feu", "La Peste", "Si c'est un homme", "Voyage au bout de la nuit"], bonne: 2, expl: "Primo Levi, « Si c'est un homme » (1947).", niv: 1 },
        { q: "« La banalité du mal » est une expression de :", choix: ["Hannah Arendt", "Simone Weil", "Freud", "Adorno"], bonne: 0, expl: "Arendt, à propos du procès d'Eichmann (1963).", niv: 1 },
        { q: "Un employé applique des ordres terribles sans jamais se demander ce qu'il fait. Quelle notion éclaire ce cas ?", choix: ["L'insociable sociabilité", "La ruse de la raison", "Le devoir de mémoire", "La banalité du mal"], bonne: 3, expl: "Pour Arendt, le mal peut venir de l'absence de pensée chez des gens ordinaires.", niv: 2 },
        { q: "Pour Simone Weil, la force fait de celui qui la subit :", choix: ["un héros", "une chose", "un juge", "une idole"], bonne: 1, expl: "La force « change en chose » celui qui la subit, et elle enivre celui qui l'exerce.", niv: 2 },
        { q: "Pour Kant, le conflit entre les hommes peut :", choix: ["pousser l'humanité à progresser", "disparaître tout seul", "seulement détruire", "être supprimé par la force de l'État"], bonne: 0, expl: "C'est l'insociable sociabilité : la rivalité oblige les hommes à développer leurs talents.", niv: 2 },
        { q: "Pourquoi Antelme intitule-t-il son livre « L'Espèce humaine » ?", choix: ["Son livre étudie la biologie humaine", "Il décrit l'évolution des espèces animales", "Il accuse toute l'humanité de ces crimes", "Les bourreaux ne peuvent changer l'homme"], bonne: 3, expl: "Même réduit à presque rien, le déporté reste un homme : il n'y a qu'une seule espèce humaine.", niv: 2 },
        { q: "Une classe visite un ancien camp de concentration pour comprendre ce qui s'y est passé. Elle accomplit :", choix: ["une ruse de la raison", "un travail de mémoire involontaire", "un devoir de mémoire", "une écriture automatique"], bonne: 2, expl: "Transmettre le souvenir des victimes pour que cela ne se reproduise pas.", niv: 2 },
        { q: "Quelle limite de la phrase d'Adorno la littérature de témoignage montre-t-elle ?", choix: ["Les poèmes sont tous barbares", "Il faut aussi écrire pour ne pas oublier", "Les témoins préfèrent se taire", "Seuls les historiens ont le droit d'en parler"], bonne: 1, expl: "Levi ou Antelme montrent que les mots, même insuffisants, sont nécessaires pour transmettre.", niv: 3 },
        { q: "Pourquoi expliquer la violence n'est-ce pas l'excuser ?", choix: ["Expliquer, c'est déjà pardonner aux coupables", "La violence n'a pas de cause", "Les bourreaux sont des fous", "Comprendre ses causes aide à la prévenir"], bonne: 3, expl: "Freud ou Arendt cherchent les causes du mal pour mieux le combattre, pas pour l'absoudre.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 6 L'humain et ses limites
    {
      chapitre: 'hlp-6',
      fiche: `## L'humain et ses limites

### De quoi parle cette entrée ?
- Une **limite**, c'est à la fois une **frontière** (ce qui sépare l'humain de l'animal, de la machine, de Dieu) et une **borne** qu'on ne peut pas dépasser (la mort, la faiblesse du corps).
- Deux questions : qu'est-ce qui fait qu'un être est humain ? Et l'homme doit-il accepter ses limites ou chercher à les dépasser ?

### L'homme, un être fragile
- **Pascal** (« Pensées », 17e siècle) : « **L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant.** » Sa grandeur est de savoir qu'il est faible et qu'il va mourir.
- **Montaigne** : « **Que philosopher, c'est apprendre à mourir** » ; accepter la mort pour mieux vivre.
- **Camus**, « Le Mythe de Sisyphe » (1942) : la vie n'a pas de sens donné d'avance, c'est l'**absurde**. Sisyphe roule son rocher pour toujours, mais « **il faut imaginer Sisyphe heureux** » : il assume sa condition.

### Dépasser ses limites grâce à la technique ?
- **Mary Shelley**, « Frankenstein » (1818) : un savant crée un être vivant, puis l'abandonne ; la créature devient monstrueuse parce qu'elle est rejetée.
- **Aldous Huxley**, « Le Meilleur des mondes » (1932) : une société où les enfants sont fabriqués en laboratoire et conditionnés pour être heureux. On y a perdu la liberté.
- **George Orwell**, « 1984 » (1949) : une surveillance totale (« Big Brother ») qui contrôle jusqu'aux pensées.
- **Jean Giono**, « Triomphe de la vie » (1941) : un regard inquiet sur le travail de la machine. (Extrait tombé au bac 2026, avec l'essai « Dans quelle mesure les machines échappent-elles à l'humain ? ».)
- **Günther Anders**, « L'Obsolescence de l'homme » (1956) : la **honte prométhéenne**, celle de l'homme qui se sent dépassé et imparfait face aux machines qu'il a fabriquées.
- **Hans Jonas**, « Le Principe responsabilité » (1979) : notre puissance technique menace l'avenir ; il faut agir de façon que la vie humaine puisse continuer sur Terre.
- Le **transhumanisme** veut utiliser la technique pour « augmenter » l'homme et repousser la mort. Est-on encore humain si l'on supprime toutes ses limites ?

### Les frontières de l'humain
- **L'homme et l'animal** : pendant longtemps, on a fait de la raison et du langage la frontière. Aujourd'hui, l'étude des animaux (outils, émotions, cultures chez les grands singes) rend cette frontière plus floue.
- **Le normal et le pathologique** : **Canguilhem** (1943) montre que la santé n'est pas une norme fixe ; être en bonne santé, c'est pouvoir s'adapter et créer de nouvelles normes de vie.
- **Le visage d'autrui** : pour **Levinas**, le visage de l'autre, fragile et exposé, me dit « tu ne tueras point ». La limite que je ne dois pas franchir, c'est l'autre.

### À retenir pour le bac
- Limite : frontière et borne.
- Pascal (roseau pensant), Montaigne (apprendre à mourir), Camus (Sisyphe heureux).
- Récits d'anticipation : Frankenstein, Le Meilleur des mondes, 1984.
- Anders (honte prométhéenne), Jonas (responsabilité), le transhumanisme.
- Piège : présenter la technique comme seulement bonne ou seulement mauvaise. La vraie question est ce qu'elle fait de l'humain.`,
      cartes: [
        { q: "Quels sont les deux sens du mot « limite » ?", r: "Une frontière (ce qui sépare l'humain de l'animal ou de la machine) et une borne qu'on ne peut pas dépasser (la mort, la faiblesse)." },
        { q: "Que veut dire Pascal par « roseau pensant » ?", r: "L'homme est le plus faible de la nature, mais sa grandeur est de penser, et de savoir qu'il est faible et mortel." },
        { q: "Que signifie « philosopher, c'est apprendre à mourir » (Montaigne) ?", r: "Accepter la mort, en y pensant, pour ne plus en avoir peur et mieux vivre." },
        { q: "Qu'est-ce que l'absurde chez Camus ?", r: "Le décalage entre notre besoin de sens et un monde qui n'en donne pas d'avance (« Le Mythe de Sisyphe », 1942)." },
        { q: "Pourquoi « il faut imaginer Sisyphe heureux » ?", r: "Parce qu'il assume sa condition et sa tâche sans fin : sa révolte lucide lui donne sa dignité." },
        { q: "Que raconte « Frankenstein » de Mary Shelley (1818) ?", r: "Un savant crée un être vivant puis l'abandonne ; rejetée, la créature devient monstrueuse." },
        { q: "Que décrit « Le Meilleur des mondes » de Huxley (1932) ?", r: "Une société où les enfants sont fabriqués et conditionnés pour être heureux, au prix de leur liberté." },
        { q: "Que décrit « 1984 » d'Orwell (1949) ?", r: "Une société de surveillance totale, sous « Big Brother », qui contrôle jusqu'aux pensées." },
        { q: "Qu'est-ce que la honte prométhéenne (Anders, 1956) ?", r: "La honte de l'homme qui se sent dépassé et imparfait face aux machines qu'il a lui-même fabriquées." },
        { q: "Que demande Hans Jonas dans « Le Principe responsabilité » (1979) ?", r: "D'agir de façon que la vie humaine puisse continuer sur Terre, car notre puissance technique menace l'avenir." },
        { q: "Qu'est-ce que le transhumanisme ?", r: "Le projet d'utiliser la technique pour « augmenter » l'homme et repousser la maladie, le vieillissement, voire la mort." },
        { q: "Que montre Canguilhem sur la santé (1943) ?", r: "La santé n'est pas une norme fixe : être en bonne santé, c'est pouvoir s'adapter et créer de nouvelles normes de vie." },
      ],
      quiz: [
        { q: "« L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant » est de :", choix: ["Pascal", "Montaigne", "Camus", "Descartes"], bonne: 0, expl: "Pascal, « Pensées ».", niv: 1 },
        { q: "Quel roman décrit des enfants fabriqués et conditionnés pour être heureux ?", choix: ["1984", "Frankenstein", "Triomphe de la vie", "Le Meilleur des mondes"], bonne: 3, expl: "Huxley (1932). « 1984 » décrit plutôt une surveillance totale.", niv: 1 },
        { q: "Pour Camus, l'absurde naît :", choix: ["de la folie des hommes", "d'un besoin de sens que le monde déçoit", "de la technique moderne qui nous dépasse", "du seul fait que Dieu est mort"], bonne: 1, expl: "Nous cherchons un sens, le monde n'en donne pas d'avance : c'est l'absurde.", niv: 2 },
        { q: "Un ouvrier se sent lent et maladroit à côté du robot qu'il surveille. Anders parlerait de :", choix: ["honte prométhéenne", "banalité du mal", "roseau pensant", "insociable sociabilité"], bonne: 0, expl: "L'homme a honte d'être moins parfait que ses propres machines.", niv: 2 },
        { q: "Une entreprise promet d'implanter des puces pour rendre la mémoire humaine illimitée. Ce projet relève :", choix: ["du stoïcisme", "de l'absurde", "du transhumanisme", "du devoir de mémoire"], bonne: 2, expl: "Le transhumanisme veut dépasser les limites naturelles de l'homme par la technique.", niv: 2 },
        { q: "Dans « Frankenstein », pourquoi la créature devient-elle monstrueuse ?", choix: ["Elle est née mauvaise", "Elle a été mal fabriquée", "Elle veut devenir humaine", "Elle est rejetée par tous"], bonne: 3, expl: "Le roman montre que le rejet, plus que la fabrication, crée le monstre.", niv: 2 },
        { q: "Pour Canguilhem, être en bonne santé, c'est :", choix: ["ne jamais être malade", "pouvoir s'adapter et créer ses normes", "avoir des analyses dans la moyenne des gens", "vivre sans limite"], bonne: 1, expl: "La santé n'est pas une moyenne fixe, mais une capacité d'adaptation.", niv: 3 },
        { q: "Une personne qui rend visite chaque semaine à des malades sans espoir de guérison montre surtout :", choix: ["la honte prométhéenne d'Anders", "le rêve d'un homme sans faiblesse", "qu'on peut accepter nos limites", "le Meilleur des mondes"], bonne: 2, expl: "Reconnaître la fragilité et rester présent, c'est une façon d'assumer la condition humaine.", niv: 2 },
        { q: "Quelle frontière l'étude des grands singes rend-elle plus floue ?", choix: ["Entre l'homme et l'animal", "Entre la santé et la maladie", "Entre l'homme et la machine", "Entre la vie et la mort"], bonne: 0, expl: "Outils, émotions et cultures existent aussi chez certains animaux.", niv: 2 },
        { q: "Pour « Dans quelle mesure les machines échappent-elles à l'humain ? », quelle nuance est la plus juste ?", choix: ["Les machines obéissent en tout à l'homme", "Les machines pensent déjà exactement comme nous", "Nées de l'homme, elles peuvent lui échapper", "Seuls les ingénieurs utilisent des machines"], bonne: 2, expl: "Fabriquées par l'homme, elles produisent des effets qu'il ne maîtrise pas toujours (Anders, Jonas).", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 7 Méthode
    {
      chapitre: 'hlp-7',
      fiche: `## Méthode : l'interprétation et l'essai

### L'épreuve
- **4 heures**, **coefficient 16**. On reçoit **un seul texte** (littéraire ou philosophique), lié à une entrée du programme de terminale, et **deux questions**.
- Une question d'**interprétation** et une question d'**essai**. L'une est **littéraire**, l'autre **philosophique** : le sujet le précise.
- Chaque question est notée sur **10**, sur une **copie séparée** : l'une est corrigée par un professeur de lettres, l'autre par un professeur de philosophie.
- Il faut **obligatoirement** traiter les deux questions : une question laissée blanche vaut 0, et la note ne peut alors pas dépasser 10.
- La **maîtrise de la langue** est évaluée : orthographe, syntaxe, vocabulaire, clarté, organisation.
- Partage du temps conseillé : environ **2 heures** par question, en gardant 10 minutes de relecture pour chaque copie.

### Lire le texte
- Lire le texte **deux fois**, puis lire les deux questions. Chercher l'entrée du programme concernée.
- Repérer le **genre** (poème, récit, essai, traité), l'**énonciation** (qui parle ? à qui ?), le **thème**, la **thèse** ou l'idée centrale.
- Souligner les mots qui répondent à la question d'interprétation.

### L'interprétation
- Elle répond à **une question précise sur le texte** : ce n'est pas un commentaire de tout, ni un résumé.
- **Interprétation littéraire** : montrer comment le texte produit son sens, par l'**analyse** des procédés (images, rythme, figures de style, énonciation, registre), toujours reliée à la question.
- **Interprétation philosophique** : reconstruire l'**argumentation** de l'auteur (thèse, concepts, étapes, exemples), expliquer les mots importants, dire ce que le texte apporte à la question.
- Forme : une courte **introduction** (présenter le texte, reprendre la question, annoncer le chemin), un **développement** en 2 ou 3 parties, une **conclusion** qui répond.
- Chaque idée s'appuie sur une **citation courte**, entre guillemets, **analysée** : citer ne suffit jamais.

### L'essai
- L'essai part de la question posée, liée au texte, mais **va plus loin** : c'est ta réflexion personnelle, argumentée.
- Définir les mots de la question, poser un **problème** (pourquoi la réponse n'est pas évidente), construire 2 ou 3 parties qui **progressent**.
- Nourrir chaque partie d'**exemples précis** : œuvres lues en HLP ou en français, auteurs, films, situations concrètes. Le texte du sujet peut servir d'exemple, mais pas d'unique référence.
- **Essai littéraire** : la réflexion porte souvent sur la littérature elle-même (que permet-elle ? à quoi sert-elle ?) ; les exemples sont surtout des œuvres.
- **Essai philosophique** : la réflexion porte sur une notion (l'humanité, la technique, le moi) ; on s'appuie sur des concepts, des distinctions et des auteurs.

### Les erreurs qui coûtent cher
- Paraphraser le texte au lieu de l'analyser.
- Réciter une fiche de cours sans répondre à la question.
- Faire de l'essai une deuxième interprétation, sans sortir du texte.
- Oublier de conclure, ou laisser une question inachevée faute de temps.

### À retenir pour le bac
- Un texte, deux questions sur 10, deux copies : traiter les deux, environ 2 heures chacune.
- Interprétation : répondre à la question en analysant le texte, citations à l'appui.
- Essai : définir, problématiser, argumenter avec des exemples variés.
- La langue compte : relire chaque copie.`,
      cartes: [
        { q: "Combien de questions comporte le sujet de HLP, et sur combien de points chacune ?", r: "Deux questions sur un même texte, chacune sur 10 points : une interprétation et un essai." },
        { q: "Comment se répartissent lettres et philosophie dans le sujet ?", r: "Une question est littéraire, l'autre philosophique ; le sujet le précise. Chacune est rédigée sur une copie séparée." },
        { q: "Que se passe-t-il si on ne traite pas une des deux questions ?", r: "Elle vaut 0, et la note de l'épreuve ne peut pas dépasser 10 sur 20." },
        { q: "Quel partage du temps conseiller pour les 4 heures ?", r: "Environ 2 heures par question, en gardant 10 minutes de relecture pour chaque copie." },
        { q: "Qu'est-ce qu'une interprétation ?", r: "Une réponse argumentée à une question précise sur le texte, appuyée sur son analyse. Ce n'est ni un résumé ni un commentaire de tout le texte." },
        { q: "Que fait-on dans une interprétation littéraire ?", r: "On montre comment le texte produit son sens en analysant ses procédés (images, rythme, figures, énonciation), toujours en lien avec la question." },
        { q: "Que fait-on dans une interprétation philosophique ?", r: "On reconstruit l'argumentation : thèse, concepts, étapes, exemples, puis on dit ce que le texte apporte à la question." },
        { q: "Comment bien utiliser une citation ?", r: "La choisir courte, la mettre entre guillemets, puis l'analyser : dire ce qu'elle montre pour la question." },
        { q: "Qu'est-ce que l'essai ?", r: "Une réflexion personnelle et argumentée sur une question liée au texte, qui va plus loin que le texte." },
        { q: "Comment construire un essai ?", r: "Définir les mots, poser un problème, construire 2 ou 3 parties qui progressent, avec des exemples précis, puis conclure." },
        { q: "Essai littéraire ou essai philosophique ?", r: "L'essai littéraire réfléchit souvent sur la littérature et s'appuie sur des œuvres. L'essai philosophique réfléchit sur une notion avec des concepts et des auteurs." },
        { q: "Quelle est l'erreur la plus fréquente dans l'interprétation ?", r: "Paraphraser : répéter le texte avec d'autres mots au lieu de l'analyser pour répondre à la question." },
      ],
      quiz: [
        { q: "À l'épreuve de HLP, combien de textes reçoit-on ?", choix: ["Deux textes, un par question", "Trois textes au choix", "Un dossier de plusieurs documents", "Un seul, pour les deux questions"], bonne: 3, expl: "Un seul texte, sur lequel portent l'interprétation et l'essai.", niv: 1 },
        { q: "Que faut-il faire des deux questions du sujet ?", choix: ["Les traiter toutes les deux", "En choisir une seule", "Traiter l'essai si on a le temps", "Les rédiger sur une seule copie"], bonne: 0, expl: "Une question non traitée vaut 0 et bloque la note à 10 au plus.", niv: 1 },
        { q: "Une interprétation qui reprend le texte phrase par phrase avec d'autres mots est surtout :", choix: ["un essai", "une problématique", "une paraphrase", "une analyse"], bonne: 2, expl: "Paraphraser, c'est répéter sans analyser : c'est l'erreur principale de l'interprétation.", niv: 2 },
        { q: "Dans une interprétation littéraire, une citation doit être :", choix: ["la plus longue possible", "courte, puis analysée", "placée en fin de paragraphe", "recopiée sans commentaire"], bonne: 1, expl: "Une citation ne prouve rien seule : c'est son analyse qui répond à la question.", niv: 1 },
        { q: "« Que dit ce poème des victimes de la guerre ? » (2025) appelle :", choix: ["un essai philosophique", "un résumé du poème", "une dissertation sur la guerre", "une interprétation littéraire"], bonne: 3, expl: "La question porte sur le texte et sur ce qu'il dit : c'est l'interprétation, ici littéraire.", niv: 2 },
        { q: "Pour une interprétation philosophique, l'essentiel est de :", choix: ["relever les rimes", "raconter en détail la vie de l'auteur", "reconstruire toute l'argumentation", "donner tout de suite son avis"], bonne: 2, expl: "Thèse, concepts, étapes : on explique comment l'auteur raisonne pour répondre à la question.", niv: 2 },
        { q: "Un élève n'utilise dans son essai que le texte du sujet. Quel est le problème ?", choix: ["L'essai doit aller au-delà du texte", "Le texte est interdit dans l'essai", "L'essai doit rester sans exemple", "Il fallait plutôt faire un résumé du texte"], bonne: 0, expl: "Le texte peut servir d'exemple, mais l'essai demande une réflexion nourrie d'autres références.", niv: 2 },
        { q: "« Dans quelle mesure les machines échappent-elles à l'humain ? » (2026) appelle surtout :", choix: ["une analyse des images du texte", "une réflexion sur la technique", "un relevé des procédés", "une biographie de l'auteur"], bonne: 1, expl: "C'est un essai philosophique : on réfléchit sur une notion avec des concepts et des auteurs.", niv: 2 },
        { q: "Pourquoi garder du temps de relecture pour chaque copie ?", choix: ["Pour recopier le sujet", "Pour ajouter une troisième partie entière", "Pour changer de question au dernier moment", "Pour soigner la langue, qui est notée"], bonne: 3, expl: "Orthographe, syntaxe et clarté comptent : une copie très fautive ne peut pas avoir la moyenne.", niv: 2 },
        { q: "Quelle différence entre l'interprétation et l'essai ?", choix: ["L'interprétation est plus courte que l'essai", "L'une analyse le texte, l'autre va au-delà", "L'essai ne demande aucun plan", "L'interprétation ne cite jamais le texte"], bonne: 1, expl: "L'interprétation analyse le texte pour répondre ; l'essai part de la question et va au-delà du texte.", niv: 3 },
      ],
    },
  ],
  methode: [
    {
      id: 'hlp-m1', mat: 'hlp', titre: "Interprétation littéraire",
      formules: ["Quel regard l'auteur porte-t-il sur… ?", "Que dit ce poème de… ?", "Comment le texte fait-il de… ?", "En quoi ce texte… ?"],
      vu: ["Bac 2026 : « Quel regard Jean Giono porte-t-il sur le travail de la machine ? » (Triomphe de la vie)", "Bac 2025 : « Que dit ce poème des victimes de la guerre ? » (poème de Wisława Szymborska)"],
      pts: "10 points, sur une copie corrigée par un professeur de lettres",
      attendu: "Une réponse claire à la question, construite en 2 ou 3 parties, où chaque idée s'appuie sur une citation courte et sur l'analyse précise d'un procédé (image, rythme, figure, énonciation). Le correcteur veut une lecture personnelle et justifiée, pas un relevé de procédés sans but.",
      etapes: ["Lire le texte deux fois et souligner ce qui répond à la question.", "Repérer genre, énonciation, registre, mouvement du texte.", "Écrire en une phrase sa réponse à la question : ce sera le fil de la copie.", "Construire 2 ou 3 parties, chacune avec une idée, des citations et leur analyse.", "Introduction (texte, question, annonce) et conclusion (réponse nette)."],
      mots: ["le poète", "l'image de", "le rythme", "ce procédé souligne", "le lecteur"],
      pieges: ["Paraphraser le texte.", "Relever des figures de style sans dire ce qu'elles montrent.", "Parler du texte en général sans répondre à la question.", "Confondre le poète et le « je » du poème sans le justifier."],
      cas: "Lamartine, « Le Lac » (1820), première strophe : « Ainsi, toujours poussés vers de nouveaux rivages, / Dans la nuit éternelle emportés sans retour, / Ne pourrons-nous jamais sur l'océan des âges / Jeter l'ancre un seul jour ? »",
      question: "Quelle image du temps cette strophe donne-t-elle ?",
      modele: "Dans cette ouverture du « Lac », Lamartine donne du temps l'image d'un courant qui emporte l'homme malgré lui. La métaphore marine le montre : la vie est un « océan des âges », et nous sommes « poussés » et « emportés », deux participes passifs qui font de l'homme un objet sans pouvoir. L'adverbe « toujours » et l'expression « sans retour » insistent sur ce mouvement continu et irréversible ; la « nuit éternelle » annonce la mort au bout du voyage. Mais la strophe se termine par une question : le poète voudrait « jeter l'ancre un seul jour ». Le dernier vers, plus court que les autres, ralentit le rythme, comme si le poème essayait lui-même de s'arrêter. Le temps apparaît donc comme une force qui nous entraîne, contre laquelle le poète ne peut que formuler un désir, celui de retenir un instant de bonheur.",
      grille: ["Ma réponse à la question est claire dès l'introduction.", "Chaque idée est appuyée sur une citation courte.", "J'ai analysé au moins trois procédés (métaphore, passif, rythme…).", "Ma conclusion répond à la question."],
    },
    {
      id: 'hlp-m2', mat: 'hlp', titre: "Interprétation philosophique",
      formules: ["Pourquoi, d'après ce texte, … ?", "Dans quelle mesure peut-on, selon ce texte, … ?", "Comment l'auteur justifie-t-il… ?"],
      vu: ["Bac 2026 : « Dans quelle mesure peut-on, selon ce texte, se connaître authentiquement ? » (texte de Raymond Aron)", "Bac 2025 : « Pourquoi, d'après ce texte, faut-il « exercer l'âme des enfants » à la pitié ? » (Condorcet, Cinq mémoires sur l'instruction publique)"],
      pts: "10 points, sur une copie corrigée par un professeur de philosophie",
      attendu: "Une réponse à la question qui s'appuie sur la reconstruction de l'argumentation : la thèse, les concepts définis, les étapes du raisonnement, le rôle des exemples. Le correcteur veut voir que tu as compris pourquoi l'auteur pense ce qu'il pense.",
      etapes: ["Repérer la thèse et l'idée que l'auteur combat.", "Définir les concepts clés du texte.", "Découper le raisonnement en étapes, en citant les lignes.", "Expliquer chaque étape avec ses mots et un exemple.", "Conclure en répondant à la question, et dire ce que le texte apporte."],
      mots: ["l'auteur soutient que", "ce concept désigne", "il en déduit que", "l'exemple montre", "la thèse adverse"],
      pieges: ["Résumer au lieu d'expliquer.", "Donner son avis à la place de celui de l'auteur.", "Laisser un concept du texte sans définition.", "Oublier de revenir à la question posée."],
      cas: "Pascal, « Pensées » : « L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant. Il ne faut pas que l'univers entier s'arme pour l'écraser : une vapeur, une goutte d'eau, suffît pour le tuer. Mais, quand l'univers l'écraserait, l'homme serait encore plus noble que ce qui le tue, parce qu'il sait qu'il meurt, et l'avantage que l'univers a sur lui ; l'univers n'en sait rien. »",
      question: "Pourquoi, d'après ce texte, l'homme est-il plus noble que l'univers ?",
      modele: "Pascal soutient que la grandeur de l'homme ne vient pas de sa force, mais de sa pensée. Il commence par un constat de faiblesse : l'homme n'est qu'un « roseau », que « une vapeur, une goutte d'eau » peuvent tuer ; face à la nature, il ne pèse rien. Mais le connecteur « mais » renverse la perspective : c'est un roseau « pensant ». Pascal en tire une conséquence : même écrasé, l'homme reste « plus noble » que ce qui le tue, « parce qu'il sait qu'il meurt ». La noblesse désigne ici une supériorité de valeur, non de puissance. L'univers a la force, mais il « n'en sait rien » : il agit sans conscience. L'homme est donc plus noble parce qu'il a conscience de sa mort et de sa faiblesse. Sa grandeur et sa misère viennent du même fait : savoir qu'il est fragile.",
      grille: ["J'ai énoncé la thèse avec mes mots.", "J'ai défini « noble » et « pensant ».", "J'ai suivi les étapes : faiblesse, renversement, conséquence.", "J'ai répondu clairement au « pourquoi »."],
    },
    {
      id: 'hlp-m3', mat: 'hlp', titre: "Essai littéraire",
      formules: ["La littérature a-t-elle pour vocation de… ?", "La littérature permet-elle de… ?", "Faut-il… pour écrire ?"],
      vu: ["Bac 2026 : « La littérature permet-elle « de discerner les sentiments que l'on éprouve et ceux que l'on se figure éprouver » ? »", "Bac 2025 : « La littérature a-t-elle pour vocation d'éduquer à la sensibilité ? »"],
      pts: "10 points, sur une copie corrigée par un professeur de lettres",
      attendu: "Une réflexion personnelle et organisée sur une question qui porte souvent sur le pouvoir ou le rôle de la littérature. Le correcteur attend un problème, deux ou trois parties qui avancent et des exemples littéraires précis (titres, auteurs, passages), pas seulement le texte du sujet.",
      etapes: ["Définir les mots de la question (littérature, vocation, sensibilité…).", "Poser le problème : pourquoi la réponse n'est-elle pas évidente ?", "Partie 1 : la réponse qui semble la plus juste, avec deux œuvres.", "Partie 2 : sa limite, avec d'autres exemples.", "Partie 3 ou conclusion : une réponse nuancée."],
      mots: ["l'œuvre", "le lecteur", "certes", "cependant", "en définitive"],
      pieges: ["Ne citer aucune œuvre en dehors du texte du sujet.", "Faire une liste d'exemples sans argument.", "Répondre oui ou non sans nuance.", "Transformer l'essai en nouvelle interprétation du texte."],
      cas: "Même strophe du « Lac » de Lamartine.",
      question: "La poésie peut-elle retenir le temps ?",
      modele: "Le poème du « Lac » supplie le temps de « suspendre son vol » : la poésie semble née du désir de retenir ce qui passe. D'abord, elle le peut en un sens : elle fixe un instant et le transmet. Les amours de Lamartine, le deuil de Hugo dans « Les Contemplations », la madeleine de Proust en prose, survivent à ceux qui les ont vécus parce qu'ils ont été écrits. Ronsard le promettait déjà à celle qu'il aimait : ses vers la feraient vivre après sa mort. Cependant, la poésie ne rend pas le moment lui-même : elle en garde une trace, pas la présence. Lamartine écrit justement parce que l'instant est perdu ; le poème est un tombeau autant qu'un souvenir. En définitive, la poésie ne retient pas le temps, mais elle lui arrache une forme durable : elle transforme ce qui passe en ce qui se transmet.",
      grille: ["J'ai défini poésie et « retenir le temps ».", "J'ai posé un problème.", "J'ai au moins trois exemples d'œuvres précis.", "Ma conclusion est nuancée et répond."],
    },
    {
      id: 'hlp-m4', mat: 'hlp', titre: "Essai philosophique",
      formules: ["Dans quelle mesure… ?", "Peut-on… ?", "Faut-il… ?"],
      vu: ["Bac 2026 : « Dans quelle mesure les machines échappent-elles à l'humain ? »", "Bac 2025 : « Peut-on conserver son humanité dans des circonstances qui risquent de nous en dépouiller ? »"],
      pts: "10 points, sur une copie corrigée par un professeur de philosophie",
      attendu: "Une réflexion argumentée sur une notion du programme : définitions, problème, parties qui progressent, distinctions, auteurs et exemples concrets. Le texte du sujet peut ouvrir la réflexion, mais l'essai doit le dépasser.",
      etapes: ["Définir chaque mot de la question, y compris « dans quelle mesure » (jusqu'où ?).", "Poser le problème : deux réponses défendables.", "Partie 1 : la réponse la plus évidente, argumentée.", "Partie 2 : une objection forte, avec un auteur.", "Partie 3 : une réponse qui distingue des cas ou des sens."],
      mots: ["il faut distinguer", "on pourrait objecter", "or", "dès lors", "jusqu'à un certain point"],
      pieges: ["Répondre par oui ou non à « dans quelle mesure ».", "Réciter des auteurs sans lien avec la question.", "Oublier les exemples concrets.", "Ne pas définir les notions."],
      cas: "Même texte de Pascal sur le roseau pensant.",
      question: "La fragilité de l'homme fait-elle sa grandeur ?",
      modele: "La fragilité est la faiblesse de ce qui peut être blessé ou détruit ; la grandeur, une valeur qui élève. On pense d'abord que la fragilité est un défaut : malade ou vieillissant, l'homme subit. Pourtant, Pascal montre que l'homme est grand parce qu'il sait qu'il est faible : la conscience de sa mort le rend « plus noble » que l'univers qui l'écrase. On peut objecter que la fragilité écrase aussi : dans les camps, Primo Levi montre que la souffrance extrême peut détruire la pensée elle-même. Il faut donc distinguer subir sa fragilité et la reconnaître. Ce n'est pas la faiblesse en elle-même qui fait la grandeur, mais la façon de l'assumer : Camus l'exprime avec Sisyphe, qui connaît son sort et le porte avec lucidité. La fragilité fait la grandeur de l'homme dans la mesure où il en prend conscience et en fait un motif de solidarité.",
      grille: ["J'ai défini fragilité et grandeur.", "J'ai posé un problème.", "J'ai une objection avec un exemple précis.", "Ma réponse finale repose sur une distinction."],
    },
  ],
  sujets: [
    {
      id: 'hlp-s1', matiere: 'hlp', titre: "Sujet d'entraînement 1 : Rousseau, « Les Confessions »", duree: 240,
      enonce: `## Sujet d'entraînement (sur le modèle de l'épreuve)

Entrée du programme : « Les métamorphoses du moi » (semestre 1, « La recherche de soi »).

### Texte
Jean-Jacques Rousseau, « Les Confessions », début du livre I (rédigé à partir de 1765, publié après sa mort en 1782). Texte cité d'après l'édition Launette de 1889.

Je forme une entreprise qui n’eut jamais d’exemple, et dont l’exécution n’aura point d’imitateur. Je veux montrer à mes semblables un homme dans toute la vérité de la nature, et cet homme, ce sera moi.

Moi seul. Je sens mon cœur, et je connais les hommes. Je ne suis fait comme aucun de ceux que j’ai vus ; j’ose croire n’être fait comme aucun de ceux qui existent. Si je ne vaux pas mieux, au moins je suis autre. Si la nature a bien ou mal fait de briser le moule dans lequel elle m’a jeté, c’est ce dont on ne peut juger qu’après m’avoir lu.

Que la trompette du jugement dernier sonne quand elle voudra, je viendrai, ce livre à la main, me présenter devant le souverain juge. Je dirai hautement : Voilà ce que j’ai fait, ce que j’ai pensé, ce que je fus. J’ai dit le bien et le mal avec la même franchise. Je n’ai rien tu de mauvais, rien ajouté de bon ; et s’il m’est arrivé d’employer quelque ornement indifférent, ce n’a jamais été que pour remplir un vide occasionné par mon défaut de mémoire. J’ai pu supposer vrai ce que je savais avoir pu l’être, jamais ce que je savais être faux. Je me suis montré tel que je fus : méprisable et vil quand je l’ai été ; bon, généreux, sublime, quand je l’ai été : j’ai dévoilé mon intérieur tel que tu l’as vu toi-même, Être éternel. Rassemble autour de moi l’innombrable foule de mes semblables ; qu’ils écoutent mes confessions, qu’ils gémissent de mes indignités, qu’ils rougissent de mes misères. Que chacun d’eux découvre à son tour son cœur au pied de ton trône avec la même sincérité, et puis qu’un seul te dise, s’il l’ose, Je fus meilleur que cet homme-là.

### Questions (les deux sont obligatoires, sur deux copies séparées)
- **Interprétation littéraire (10 points)** : Quelle image de lui-même Rousseau veut-il donner au lecteur dans ce début des « Confessions » ?
- **Essai philosophique (10 points)** : Peut-on être sincère quand on parle de soi ?`,
      corrige: `## Corrigé (sujet d'entraînement)

### Interprétation littéraire : l'image que Rousseau donne de lui-même

**Introduction**
- Au seuil de son autobiographie, Rousseau ne raconte pas encore sa vie : il annonce son projet et s'adresse à son lecteur, puis à Dieu.
- Réponse attendue : il se présente comme un être **unique**, d'une **sincérité totale**, au point de lancer un **défi** à tous les hommes. Mais cette image mêle humilité et orgueil.

**I. Un homme unique**
- Les hyperboles du début : une entreprise « qui n'eut jamais d'exemple » et « n'aura point d'imitateur » ; le projet est aussi unique que l'homme.
- La phrase nominale isolée « **Moi seul.** », en tête de paragraphe, met le moi en pleine lumière.
- La répétition de « je » et le parallélisme « Je ne suis fait comme aucun de ceux que j'ai vus ; j'ose croire n'être fait comme aucun de ceux qui existent » : il se dit différent de tous.
- L'image du **moule brisé** : la nature l'aurait fait en un seul exemplaire. « Si je ne vaux pas mieux, au moins je suis autre » : il ne prétend pas être meilleur, mais différent.

**II. Un homme qui promet de tout dire**
- Le champ lexical de la vérité : « toute la vérité de la nature », « franchise », « sincérité », « tel que je fus ».
- Les antithèses « le bien et le mal », « méprisable et vil » / « bon, généreux, sublime » : il promet de montrer aussi le pire de lui-même.
- Il avoue d'avance ses limites : quelque « ornement indifférent » pour combler un « défaut de mémoire ». Cet aveu renforce paradoxalement sa crédibilité : il sépare l'oubli (excusable) du mensonge (« jamais ce que je savais être faux »).

**III. Un homme qui défie ses juges**
- La scène du **jugement dernier** : « la trompette », « le souverain juge », « ce livre à la main ». Le livre devient sa défense devant Dieu.
- L'apostrophe à l'« Être éternel » et l'impératif « Rassemble » : il ose donner des ordres à Dieu et convoquer « l'innombrable foule » des hommes.
- La chute : « qu'un seul te dise, s'il l'ose, Je fus meilleur que cet homme-là ». Le lecteur, qui allait juger Rousseau, se retrouve jugé à son tour.
- On sent ici l'**orgueil** : la confession, au lieu d'être humble, devient une affirmation de soi.

**Conclusion**
- Rousseau se présente comme unique, sincère jusqu'à l'aveu de ses fautes, et assez sûr de lui pour défier tous les hommes. Il fonde ainsi le pacte de l'autobiographie moderne, mais le lecteur peut se demander si une telle mise en scène de la sincérité est elle-même tout à fait sincère.

### Essai philosophique : peut-on être sincère quand on parle de soi ?

**Analyse et problème**
- Être **sincère**, c'est dire ce que l'on pense vraiment, sans chercher à tromper. La sincérité n'est pas la **vérité** : on peut être sincère et se tromper.
- Parler de soi : se décrire, se raconter (autobiographie, confidence, réseaux sociaux).
- Problème : je suis le seul à avoir accès à mes pensées, donc le mieux placé pour dire qui je suis ; mais je suis aussi le plus intéressé à me donner le beau rôle. La sincérité sur soi est-elle possible, ou toujours mêlée de mise en scène ?

**I. La sincérité sur soi semble possible**
- Je connais mes pensées de l'intérieur : pour Descartes, l'existence de ma pensée est la première certitude.
- La sincérité dépend d'une **intention** : ne pas vouloir tromper. Montaigne prévient son lecteur qu'il se peint lui-même, avec ses défauts ; Rousseau promet de dire « le bien et le mal avec la même franchise ».
- Exemple : un témoin qui avoue une faute alors que personne ne l'aurait su.

**II. Mais parler de soi déforme presque toujours**
- La **mémoire** choisit et embellit : Rousseau lui-même avoue des « ornements » pour combler ses oublis.
- L'**amour-propre** nous pousse à nous montrer sous un bon jour ; on se raconte pour être aimé ou admiré. Sur les réseaux sociaux, on montre une image choisie de sa vie.
- **Freud** : une part de nous est inconsciente ; le moi « n'est pas maître dans sa propre maison ». On peut être sincère et ignorer ce qui nous fait agir.
- **Sartre** : la mauvaise foi consiste à se mentir à soi-même ; on peut croire de bonne foi à une image de soi qui nous arrange.

**III. La sincérité est un effort, pas un état**
- Il faut distinguer la sincérité (intention de ne pas tromper) et la vérité complète sur soi (impossible à atteindre).
- Être sincère, ce n'est pas tout savoir de soi, mais reconnaître ses limites : avouer ses doutes, ses oublis, ses contradictions.
- **Ricœur** : on se comprend en se racontant ; le récit de soi n'est pas une simple copie de ce qu'on est, il aide à se construire. Parler de soi sincèrement, c'est accepter que ce récit reste ouvert.

**Conclusion**
- On peut être sincère quand on parle de soi, au sens où l'on peut refuser de tromper. Mais on ne peut pas être sûr de dire toute la vérité sur soi : la sincérité est une exigence qu'on poursuit, pas une certitude qu'on possède.

### Erreurs fréquentes
- Interprétation : résumer le texte paragraphe par paragraphe sans répondre à la question.
- Interprétation : oublier la scène du jugement dernier, qui donne au texte sa dimension de défi.
- Essai : confondre sincérité et vérité.
- Essai : ne parler que de Rousseau, sans autres exemples ni auteurs.`,
      grille: [
        { c: "Interprétation : réponse claire à la question et lecture d'ensemble du texte", pts: 3 },
        { c: "Interprétation : analyse précise de procédés avec citations (hyperboles, antithèses, scène du jugement, apostrophe)", pts: 5 },
        { c: "Interprétation : construction et conclusion", pts: 2 },
        { c: "Essai : définitions (sincérité, vérité) et problème", pts: 3 },
        { c: "Essai : arguments, objection et références variées (Descartes, Freud, Sartre, Ricœur, exemples)", pts: 5 },
        { c: "Essai : construction, conclusion et maîtrise de la langue", pts: 2 },
      ],
    },
  ],
};
