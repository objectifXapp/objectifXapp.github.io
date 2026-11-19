// Histoire-géographie — terminale, voie générale. Sources : voir matiere.sources.
// Programme : arrêté du 19 juillet 2019 (BO spécial n° 8 du 25 juillet 2019), toujours en vigueur pour le bac 2027.
// Pas d'épreuve finale : la note vient des moyennes de l'année (contrôle continu). Les exercices types sont ceux des devoirs
// sur table, tels que la banque nationale de sujets les a fixés : question problématisée, analyse de document(s), croquis.
// Les 20 chapitres officiels sont regroupés en 12 chapitres : 8 en histoire, 4 en géographie, dans l'ordre du programme.
export default {
  matiere: {
    id: 'hg-g',
    nom: 'Histoire-géographie',
    voie: 'generale',
    epreuve: { type: 'controle continu', coef: 3, quand: 'toute l\'année', note: 'Pas d\'épreuve finale : la moyenne de terminale compte pour un coefficient 3 (6 sur la première et la terminale). Les devoirs sur table reprennent les exercices de la banque nationale de sujets : question problématisée, analyse de document(s), croquis.' },
    sources: [
      'https://www.education.gouv.fr/bo/19/Special8/MENE1921243A.htm',
      'https://eduscol.education.gouv.fr/1675/programmes-et-ressources-en-histoire-geographie-voie-gt',
      'https://eduscol.education.gouv.fr/2622/banque-nationale-de-sujets',
      'https://www.education.gouv.fr/reussir-au-lycee/le-baccalaureat-general-10457',
    ],
    chapitres: [
      { id: 'hg-g-1', t: 'L\'impact de la crise de 1929 : déséquilibres économiques et sociaux', theme: 'Histoire, thème 1 : fragilités des démocraties, totalitarismes et Seconde Guerre mondiale (1929-1945)' },
      { id: 'hg-g-2', t: 'Les régimes totalitaires', theme: 'Histoire, thème 1 : fragilités des démocraties, totalitarismes et Seconde Guerre mondiale (1929-1945)' },
      { id: 'hg-g-3', t: 'La Seconde Guerre mondiale', theme: 'Histoire, thème 1 : fragilités des démocraties, totalitarismes et Seconde Guerre mondiale (1929-1945)' },
      { id: 'hg-g-4', t: 'Un nouvel ordre mondial : bipolarisation et émergence du tiers-monde', theme: 'Histoire, thème 2 : la multiplication des acteurs internationaux dans un monde bipolaire (1945-début des années 1970)' },
      { id: 'hg-g-5', t: 'La France : une nouvelle place dans le monde (1945-1970)', theme: 'Histoire, thème 2 : la multiplication des acteurs internationaux dans un monde bipolaire (1945-début des années 1970)' },
      { id: 'hg-g-6', t: 'Les remises en cause des années 1970 à 1991 et la France de 1974 à 1988', theme: 'Histoire, thème 3 : les remises en cause économiques, politiques et sociales des années 1970 à 1991' },
      { id: 'hg-g-7', t: 'Le monde et la construction européenne depuis les années 1990', theme: 'Histoire, thème 4 : le monde, l\'Europe et la France depuis les années 1990, entre coopérations et conflits' },
      { id: 'hg-g-8', t: 'La République française depuis les années 1990', theme: 'Histoire, thème 4 : le monde, l\'Europe et la France depuis les années 1990, entre coopérations et conflits' },
      { id: 'hg-g-9', t: 'Mers et océans : au cœur de la mondialisation', theme: 'Géographie, thème 1 : mers et océans, au cœur de la mondialisation' },
      { id: 'hg-g-10', t: 'Des territoires inégalement intégrés : coopérations, tensions et régulations', theme: 'Géographie, thème 2 : dynamiques territoriales, coopérations et tensions dans la mondialisation' },
      { id: 'hg-g-11', t: 'La France : rayonnement international et inégale attractivité', theme: 'Géographie, thème 2 : dynamiques territoriales, coopérations et tensions dans la mondialisation' },
      { id: 'hg-g-12', t: 'L\'Union européenne dans la mondialisation, la France et ses régions', theme: 'Géographie, thème 3 et thème conclusif' },
    ],
  },
  paquets: [
    {
      chapitre: 'hg-g-1',
      fiche: `## L'impact de la crise de 1929

### Le krach de Wall Street
- Dans les années 1920, les États-Unis connaissent une forte croissance. Beaucoup d'Américains achètent des actions **à crédit** en pensant les revendre plus cher : c'est la **spéculation**.
- Le **jeudi 24 octobre 1929** (le « jeudi noir »), les cours s'effondrent à la Bourse de **Wall Street** à New York : c'est le **krach**.
- Les spéculateurs ne peuvent plus rembourser. Des milliers de **banques font faillite**, les épargnants perdent tout.

### De la crise boursière à la Grande Dépression
- Sans crédit, les entreprises réduisent leur production et licencient : c'est la **dépression**, une baisse durable de l'activité.
- En 1933, environ **un quart des actifs américains** est au **chômage**. Les files d'attente devant les soupes populaires et les bidonvilles (les « Hoovervilles ») en sont les images.
- Les prix agricoles s'effondrent : beaucoup de fermiers sont ruinés et partent vers l'Ouest.

### Une crise mondiale
- Les banques américaines **rapatrient leurs capitaux** prêtés à l'Europe. L'**Allemagne** et l'**Autriche**, très dépendantes de ces prêts, sont touchées dès 1930-1931 (faillite de la grande banque autrichienne Kreditanstalt en 1931).
- Les États choisissent le **protectionnisme** : ils taxent les importations pour protéger leurs produits (loi Hawley-Smoot aux États-Unis en 1930). Le **commerce mondial s'effondre** de plus de moitié en valeur entre 1929 et 1933.
- La **France** est touchée plus tard, à partir de **1931**, mais la crise y dure longtemps.

### Les réponses des États
- D'abord la **déflation** : baisser les dépenses publiques et les salaires pour équilibrer le budget (président Hoover aux États-Unis, Pierre Laval en France en 1935). Elle aggrave la crise.
- Le **New Deal** de **Franklin D. Roosevelt**, élu en 1932 : l'**État intervient** dans l'économie. Grands travaux (la Tennessee Valley Authority construit des barrages), aide aux agriculteurs, contrôle des banques, **Social Security Act** (1935) qui crée une retraite et une assurance chômage.
- L'économiste britannique **John Maynard Keynes** justifie cette intervention dans sa *Théorie générale* (1936) : l'État doit relancer la demande.
- En France, le **Front populaire** (gauche unie, **Léon Blum** président du Conseil) gagne les élections en 1936. Les **accords de Matignon** (juin 1936) augmentent les salaires ; des lois créent **deux semaines de congés payés** et la **semaine de 40 heures**.

### Des démocraties fragilisées
- La crise provoque le chômage de masse et la peur du déclassement. Les **partis extrémistes** progressent.
- En Allemagne, il y a environ **6 millions de chômeurs** en 1932 : le parti nazi devient le premier parti. **Hitler** est nommé chancelier le **30 janvier 1933**.
- En France, les **ligues** d'extrême droite manifestent violemment le **6 février 1934** à Paris. En réaction, les partis de gauche s'unissent : c'est l'origine du Front populaire.

### À retenir pour le bac
- Le mécanisme : spéculation, krach, faillites bancaires, dépression, chômage, diffusion par les capitaux et le commerce.
- Deux réponses opposées : la déflation et l'intervention de l'État (New Deal, Front populaire).
- Le lien avec la suite : la crise fragilise les démocraties et aide les nazis à prendre le pouvoir.
- Piège : la crise ne touche pas tous les pays en même temps (France en 1931).`,
      cartes: [
        { q: "Que se passe-t-il le 24 octobre 1929 ?", r: "Le « jeudi noir » : les cours s'effondrent à la Bourse de Wall Street, à New York. C'est le début du krach." },
        { q: "Qu'est-ce que la spéculation ?", r: "Acheter un bien, ici des actions, en espérant le revendre plus cher rapidement. Dans les années 1920, on achète souvent à crédit." },
        { q: "Qu'est-ce qu'une dépression économique ?", r: "Une baisse forte et durable de la production, qui entraîne un chômage de masse." },
        { q: "Pourquoi la crise touche-t-elle vite l'Allemagne ?", r: "Les banques américaines rapatrient les capitaux qu'elles lui avaient prêtés. L'économie allemande, qui en dépendait, s'effondre." },
        { q: "Qu'est-ce que le protectionnisme ?", r: "Une politique qui taxe ou limite les importations pour protéger la production nationale. Pendant la crise, elle fait chuter le commerce mondial." },
        { q: "Qu'est-ce qu'une politique de déflation ?", r: "Baisser les dépenses publiques, les salaires et les prix pour rétablir l'équilibre du budget. Elle aggrave la crise en réduisant la demande." },
        { q: "Qu'est-ce que le New Deal ?", r: "La politique de Roosevelt à partir de 1933 : l'État intervient dans l'économie par des grands travaux, l'aide aux agriculteurs, le contrôle des banques." },
        { q: "Que crée le Social Security Act de 1935 ?", r: "Une retraite et une assurance chômage financées par l'État fédéral américain." },
        { q: "Quelle idée défend Keynes en 1936 ?", r: "L'État doit dépenser pour relancer la demande et faire reculer le chômage, même au prix d'un déficit." },
        { q: "Qui dirige le gouvernement du Front populaire ?", r: "Léon Blum, président du Conseil à partir de juin 1936." },
        { q: "Quelles mesures sociales le Front populaire obtient-il en 1936 ?", r: "Hausse des salaires (accords de Matignon), deux semaines de congés payés, semaine de 40 heures, conventions collectives." },
        { q: "Que se passe-t-il le 6 février 1934 à Paris ?", r: "Les ligues d'extrême droite manifestent violemment devant l'Assemblée. La gauche s'unit ensuite contre ce danger." },
        { q: "Quand Hitler devient-il chancelier ?", r: "Le 30 janvier 1933, dans une Allemagne qui compte environ 6 millions de chômeurs." },
        { q: "À partir de quand la France est-elle touchée par la crise ?", r: "À partir de 1931, plus tard que les États-Unis et l'Allemagne, mais la crise y dure longtemps." },
      ],
      quiz: [
        { q: "Le krach de Wall Street a lieu en :", choix: ["janvier 1933", "octobre 1931", "octobre 1929", "juin 1936"], bonne: 2, expl: "Le jeudi noir est le 24 octobre 1929 ; 1933 est l'arrivée de Hitler au pouvoir.", niv: 1 },
        { q: "La politique de Roosevelt face à la crise s'appelle :", choix: ["le plan Marshall", "le Front populaire", "la déflation", "le New Deal"], bonne: 3, expl: "Le New Deal fait intervenir l'État ; le plan Marshall date de 1947.", niv: 1 },
        { q: "Les congés payés sont créés en France par :", choix: ["le New Deal en 1933", "Pierre Laval en 1935", "le Front populaire en 1936", "les ligues en 1934"], bonne: 2, expl: "Ce sont deux semaines votées en 1936 sous Léon Blum.", niv: 1 },
        { q: "Un banquier américain rapatrie l'argent prêté à une usine allemande en 1930. Cela montre :", choix: ["le protectionnisme allemand", "la réussite du New Deal", "la diffusion de la crise par les capitaux", "la fin de la spéculation à crédit à Wall Street"], bonne: 2, expl: "Le retrait des capitaux américains transmet la crise à l'Europe.", niv: 2 },
        { q: "Un gouvernement baisse les salaires des fonctionnaires pour équilibrer son budget. C'est :", choix: ["une politique de déflation", "une politique de relance", "une mesure du New Deal", "une mesure protectionniste"], bonne: 0, expl: "La déflation réduit les dépenses ; la relance les augmente.", niv: 2 },
        { q: "Un document montre des barrages construits par l'État fédéral dans le Tennessee. Il illustre :", choix: ["la politique de déflation de Hoover", "les grands travaux du New Deal", "les accords de Matignon", "la spéculation des années 1920"], bonne: 1, expl: "La Tennessee Valley Authority est un symbole de l'intervention de l'État.", niv: 2 },
        { q: "Entre 1929 et 1933, la valeur du commerce mondial :", choix: ["baisse d'environ 10 %", "baisse de plus de moitié", "reste stable", "augmente grâce au protectionnisme"], bonne: 1, expl: "Le protectionnisme et la chute des prix font s'effondrer les échanges.", niv: 2 },
        { q: "Quel pays est touché par la crise plus tard que les autres ?", choix: ["les États-Unis", "l'Allemagne", "l'Autriche", "la France"], bonne: 3, expl: "La France est touchée à partir de 1931, mais la crise y dure.", niv: 2 },
        { q: "Pourquoi la crise aide-t-elle les nazis à prendre le pouvoir ?", choix: ["Les ligues françaises soutiennent Hitler", "Elle pousse l'Allemagne à quitter aussitôt la Société des Nations en 1930", "Le New Deal est appliqué en Allemagne dès 1930", "Le chômage de masse discrédite la république et les partis modérés"], bonne: 3, expl: "Avec 6 millions de chômeurs, beaucoup se tournent vers les extrêmes.", niv: 3 },
        { q: "Laquelle n'est **pas** une conséquence de la crise de 1929 ?", choix: ["le chômage de masse", "la création de l'ONU", "la montée des partis extrémistes", "la chute du commerce mondial"], bonne: 1, expl: "L'ONU est créée en 1945, après la Seconde Guerre mondiale.", niv: 3 },
      ],
    },
    {
      chapitre: 'hg-g-2',
      fiche: `## Les régimes totalitaires

### Qu'est-ce qu'un totalitarisme ?
- Un **régime totalitaire** veut contrôler **toute** la société, jusqu'à la vie privée et aux pensées. La philosophe **Hannah Arendt** l'a analysé (*Les Origines du totalitarisme*, 1951).
- Ses traits communs : un **parti unique**, un **chef** adulé (**culte de la personnalité**), une **idéologie** officielle, la **propagande**, l'**embrigadement** de la jeunesse, la **terreur** policière et les **camps**.
- Son but : créer un **homme nouveau**, entièrement au service du régime.
- Les trois exemples du programme : l'**URSS de Staline**, l'**Italie fasciste** et l'**Allemagne nazie**. Ils ont des points communs mais des **idéologies opposées** (communisme d'un côté, fascisme et nazisme de l'autre).

### L'URSS de Staline
- **Staline** s'impose à la tête du parti communiste après la mort de Lénine (1924) et domine seul à la fin des années 1920.
- **Collectivisation** des terres à partir de **1929** : les paysans doivent entrer dans des fermes collectives, les **kolkhozes**. Les paysans aisés, les **koulaks**, sont déportés ou tués.
- La collectivisation provoque une terrible **famine** en 1932-1933, surtout en **Ukraine** (l'Holodomor) : plusieurs millions de morts.
- **Plans quinquennaux** : l'État fixe la production pour cinq ans, en priorité l'industrie lourde.
- **Grande Terreur** (1936-1938) : procès truqués, environ 700 000 exécutions, des centaines de milliers de déportés dans les camps du **Goulag**.

### L'Italie fasciste
- **Benito Mussolini**, le **Duce**, prend le pouvoir après la **marche sur Rome** (octobre **1922**).
- Les **lois fascistissimes** (1925-1926) interdisent les autres partis et la presse libre.
- Le fascisme exalte la **nation**, la force et la guerre. Il encadre la jeunesse et rêve d'un empire (conquête de l'Éthiopie en 1935-1936).

### L'Allemagne nazie
- **Hitler** devient chancelier le **30 janvier 1933**. Après l'incendie du Reichstag (février 1933), il obtient les **pleins pouvoirs** (mars 1933) et interdit les autres partis.
- À la mort du président Hindenburg (août **1934**), il devient **Führer** : chef de l'État et du gouvernement.
- La terreur : la **Gestapo** (police politique) et la **SS** ; le premier camp de concentration, **Dachau**, ouvre en mars 1933 pour les opposants.
- L'**antisémitisme** est au cœur de l'idéologie : les **lois de Nuremberg** (septembre **1935**) privent les Juifs de la citoyenneté ; la **Nuit de cristal** (9-10 novembre **1938**) est un pogrom dans tout le pays.
- Le nazisme veut un **espace vital** (*Lebensraum*) à l'Est pour la « race » qu'il croit supérieure.
- Propagande de **Goebbels**, Jeunesses hitlériennes, grands rassemblements de Nuremberg.

### Vers la guerre
- Hitler viole le traité de Versailles : remilitarisation de la **Rhénanie** (1936), annexion de l'Autriche, l'**Anschluss** (mars **1938**).
- Aux **accords de Munich** (septembre **1938**), la France et le Royaume-Uni cèdent aux exigences de Hitler sur les Sudètes.
- La **guerre d'Espagne** (1936-1939) voit l'Allemagne et l'Italie aider Franco, l'URSS aider les républicains.
- Le **pacte germano-soviétique** (23 août **1939**) permet à Hitler d'attaquer la Pologne sans craindre l'URSS.

### À retenir pour le bac
- Définir le totalitarisme par ses traits communs, puis nuancer : idéologies opposées.
- Dates : 1922, 1929, 30 janvier 1933, 1935, 1936-1938, 1938, 23 août 1939.
- Piège : le fascisme italien laisse en place le roi et l'Église ; son contrôle est moins total que celui des nazis ou de Staline.`,
      cartes: [
        { q: "Qu'est-ce qu'un régime totalitaire ?", r: "Un régime qui veut contrôler toute la société, jusqu'aux pensées, par un parti unique, une idéologie, la propagande et la terreur." },
        { q: "Quelle philosophe a analysé le totalitarisme ?", r: "Hannah Arendt, dans Les Origines du totalitarisme (1951)." },
        { q: "Qu'est-ce que le culte de la personnalité ?", r: "L'adoration organisée du chef par la propagande : portraits, statues, discours qui le présentent comme un guide infaillible." },
        { q: "Qu'est-ce qu'un kolkhoze ?", r: "Une ferme collective en URSS, où les paysans travaillent la terre mise en commun sous le contrôle de l'État." },
        { q: "Qui sont les koulaks ?", r: "Les paysans aisés d'URSS, accusés de s'opposer à la collectivisation, déportés ou tués à partir de 1929." },
        { q: "Qu'est-ce que l'Holodomor ?", r: "La famine de 1932-1933 en Ukraine, provoquée par la collectivisation et les réquisitions : plusieurs millions de morts." },
        { q: "Qu'est-ce que le Goulag ?", r: "L'administration des camps de travail forcé en URSS, où sont envoyés des millions de détenus." },
        { q: "Quand a lieu la Grande Terreur en URSS ?", r: "En 1936-1938 : procès truqués, environ 700 000 exécutions et des déportations massives." },
        { q: "Comment Mussolini arrive-t-il au pouvoir ?", r: "Après la marche sur Rome des fascistes en octobre 1922, le roi le nomme chef du gouvernement." },
        { q: "Que sont les lois de Nuremberg (1935) ?", r: "Des lois nazies qui retirent la citoyenneté allemande aux Juifs et interdisent les mariages avec des non-Juifs." },
        { q: "Qu'est-ce que la Nuit de cristal ?", r: "Le pogrom des 9 et 10 novembre 1938 : synagogues brûlées, magasins juifs pillés, environ 30 000 Juifs envoyés en camp." },
        { q: "Qu'est-ce que le Lebensraum ?", r: "L'« espace vital » que les nazis veulent conquérir à l'Est pour la population allemande." },
        { q: "Que décident les accords de Munich (septembre 1938) ?", r: "La France et le Royaume-Uni acceptent que Hitler annexe les Sudètes, région de Tchécoslovaquie, pour éviter la guerre." },
        { q: "Qu'est-ce que le pacte germano-soviétique ?", r: "Un accord de non-agression entre Hitler et Staline, signé le 23 août 1939, avec un partage secret de la Pologne." },
      ],
      quiz: [
        { q: "La marche sur Rome qui porte Mussolini au pouvoir a lieu en :", choix: ["1929", "1922", "1933", "1938"], bonne: 1, expl: "Octobre 1922 ; 1933 est l'arrivée de Hitler au pouvoir.", niv: 1 },
        { q: "Les fermes collectives de l'URSS s'appellent :", choix: ["les goulags", "les koulaks", "les kolkhozes", "les soviets"], bonne: 2, expl: "Les koulaks sont les paysans aisés éliminés pendant la collectivisation.", niv: 1 },
        { q: "Les lois qui privent les Juifs allemands de la citoyenneté datent de :", choix: ["1929", "1933", "1919", "1935"], bonne: 3, expl: "Ce sont les lois de Nuremberg ; 1933 est l'arrivée de Hitler au pouvoir.", niv: 1 },
        { q: "Une affiche montre Staline en guide souriant entouré d'enfants. Elle illustre :", choix: ["la collectivisation", "la Grande Terreur", "le culte de la personnalité", "le plan quinquennal"], bonne: 2, expl: "La propagande présente le chef comme un père bienveillant.", niv: 2 },
        { q: "Un paysan ukrainien est déporté en 1930 parce qu'il refuse d'entrer au kolkhoze. Il est traité comme :", choix: ["un membre du parti", "un koulak", "un fasciste", "un stakhanoviste"], bonne: 1, expl: "La dékoulakisation frappe ceux qui résistent à la collectivisation.", niv: 2 },
        { q: "Un garçon de 14 ans participe à des camps et des défilés en uniforme en 1936 en Allemagne. Cela montre :", choix: ["l'embrigadement de la jeunesse", "le plan de quatre ans", "la collectivisation des terres", "la politique d'espace vital"], bonne: 0, expl: "Les Jeunesses hitlériennes encadrent les jeunes pour former l'homme nouveau.", niv: 2 },
        { q: "Hitler devient Führer, chef de l'État et du gouvernement, en :", choix: ["mars 1938", "janvier 1933", "mars 1933", "août 1934"], bonne: 3, expl: "Il cumule les fonctions à la mort de Hindenburg ; janvier 1933 est sa nomination comme chancelier.", niv: 2 },
        { q: "Le pacte germano-soviétique d'août 1939 permet surtout à Hitler :", choix: ["d'attaquer la Pologne sans craindre l'URSS", "d'annexer l'Autriche", "de remilitariser la Rhénanie", "de récupérer les Sudètes, région de Tchécoslovaquie"], bonne: 0, expl: "L'Anschluss et les Sudètes datent de 1938, la Rhénanie de 1936.", niv: 3 },
        { q: "Quelle différence sépare le nazisme du stalinisme ?", choix: ["Le culte du chef, absent en Allemagne", "Le parti unique, qui n'existe pas en URSS à l'époque de Staline", "La terreur, absente en Allemagne", "L'idéologie : racisme pour l'un, communisme pour l'autre"], bonne: 3, expl: "Les deux ont parti unique, terreur et culte du chef ; l'idéologie les oppose.", niv: 3 },
        { q: "Lequel n'est **pas** un trait commun aux trois régimes totalitaires ?", choix: ["le pluralisme des partis", "la propagande", "la terreur policière", "l'encadrement de la jeunesse"], bonne: 0, expl: "Ils imposent tous un parti unique.", niv: 3 },
      ],
    },
    {
      chapitre: 'hg-g-3',
      fiche: `## La Seconde Guerre mondiale

### Une guerre mondiale (1939-1945)
- Le **1er septembre 1939**, l'Allemagne envahit la **Pologne**. Le **3 septembre**, le Royaume-Uni et la France lui déclarent la guerre.
- Par la **guerre éclair** (Blitzkrieg : chars et avions concentrés), l'Allemagne bat la France en mai-juin **1940**.
- Le **22 juin 1941**, Hitler attaque l'**URSS** (opération Barbarossa). Le **7 décembre 1941**, le Japon attaque la flotte américaine à **Pearl Harbor** : les États-Unis entrent en guerre. La guerre devient mondiale.
- Les tournants : **Midway** (juin 1942) dans le Pacifique, **El-Alamein** (fin 1942) en Afrique, **Stalingrad**, où l'armée allemande capitule le **2 février 1943**.
- Le **6 juin 1944**, les Alliés débarquent en **Normandie** ; le 15 août, en Provence.
- L'Allemagne capitule le **8 mai 1945**. Après les bombes atomiques sur **Hiroshima** (6 août) et **Nagasaki** (9 août), le Japon capitule le **2 septembre 1945**.

### Une guerre d'anéantissement
- C'est une **guerre totale** : toutes les forces des pays sont mobilisées (économie, sciences, propagande), et les **civils** sont des cibles (bombardements des villes, massacres, famines).
- À l'Est, les nazis mènent une **guerre d'anéantissement** contre les Slaves et les communistes : les prisonniers soviétiques meurent par millions.
- Bilan : entre **50 et 60 millions de morts**, dont une majorité de civils. L'URSS perd plus de 20 millions de personnes.

### Les génocides des Juifs et des Tsiganes
- Un **génocide** est la destruction volontaire et organisée d'un peuple. Le mot est créé en 1944 par le juriste **Raphael Lemkin**.
- Étapes : persécutions et **ghettos** en Pologne ; à partir de juin 1941, des unités mobiles, les **Einsatzgruppen**, fusillent plus d'un million de Juifs à l'Est (la « Shoah par balles ») ; la **conférence de Wannsee** (20 janvier **1942**) organise la « solution finale » ; déportation vers des **centres de mise à mort** (Auschwitz-Birkenau, Treblinka, Sobibor…) où l'on tue par le gaz.
- Environ **6 millions de Juifs** sont assassinés : c'est la **Shoah**. Les **Tsiganes** sont aussi victimes d'un génocide.
- Il faut distinguer les **camps de concentration** (travail forcé, mort lente) et les **centres de mise à mort** (extermination dès l'arrivée).

### La France dans la guerre
- Le **18 juin 1940**, le général **de Gaulle** lance depuis Londres un appel à continuer le combat : c'est la naissance de la **France libre**.
- L'**armistice** est signé le **22 juin 1940**. Le **10 juillet 1940**, le Parlement vote les pleins pouvoirs au maréchal **Pétain** : c'est la fin de la République et le début du **régime de Vichy** (l'« État français »).
- Vichy mène une **Révolution nationale** (« Travail, Famille, Patrie »), exclut les Juifs (statut des Juifs d'**octobre 1940**) et choisit la **collaboration** avec l'Allemagne (entrevue de Montoire, octobre 1940).
- La police française participe à la **rafle du Vél' d'Hiv** (16-17 juillet **1942**) : 13 000 Juifs arrêtés à Paris. Environ 75 000 Juifs sont déportés de France.
- La **Résistance** intérieure s'organise. **Jean Moulin** l'unifie dans le **Conseil national de la Résistance** (CNR, mai **1943**), dont le programme (mars 1944) prépare la Sécurité sociale.

### À retenir pour le bac
- Les grandes dates des deux fronts, de 1939 à 1945.
- Le vocabulaire : guerre totale, guerre d'anéantissement, génocide, Shoah, collaboration, Résistance.
- Piège : ne pas confondre l'appel du 18 juin (de Gaulle) et l'armistice du 22 juin (Pétain).`,
      cartes: [
        { q: "Quand commence la Seconde Guerre mondiale en Europe ?", r: "Le 1er septembre 1939, quand l'Allemagne envahit la Pologne. La France et le Royaume-Uni déclarent la guerre le 3." },
        { q: "Qu'est-ce que la guerre éclair ?", r: "Une attaque rapide qui concentre chars et avions pour percer le front, comme contre la France en mai-juin 1940." },
        { q: "Qu'est-ce que l'opération Barbarossa ?", r: "L'invasion de l'URSS par l'Allemagne, le 22 juin 1941." },
        { q: "Pourquoi Pearl Harbor est-il un tournant ?", r: "L'attaque japonaise du 7 décembre 1941 fait entrer les États-Unis dans la guerre : le conflit devient mondial." },
        { q: "Quand l'armée allemande capitule-t-elle à Stalingrad ?", r: "Le 2 février 1943. C'est le grand tournant de la guerre à l'Est." },
        { q: "Qu'est-ce qu'une guerre totale ?", r: "Une guerre qui mobilise toutes les ressources d'un pays (économie, science, propagande) et où les civils deviennent des cibles." },
        { q: "Qu'est-ce qu'un génocide ?", r: "La destruction volontaire et organisée d'un peuple. Le mot est créé en 1944 par le juriste Raphael Lemkin." },
        { q: "Qui sont les Einsatzgruppen ?", r: "Des unités mobiles nazies qui fusillent plus d'un million de Juifs à l'Est à partir de juin 1941." },
        { q: "Que décide la conférence de Wannsee (20 janvier 1942) ?", r: "Elle organise la mise en œuvre de la « solution finale » : la déportation et l'extermination des Juifs d'Europe." },
        { q: "Quelle différence entre camp de concentration et centre de mise à mort ?", r: "Dans le premier, on meurt du travail forcé et des mauvais traitements. Dans le second, on est tué dès l'arrivée, par le gaz." },
        { q: "Que se passe-t-il le 10 juillet 1940 ?", r: "Le Parlement vote les pleins pouvoirs au maréchal Pétain. La République disparaît, remplacée par le régime de Vichy." },
        { q: "Qu'est-ce que la rafle du Vél' d'Hiv ?", r: "L'arrestation de 13 000 Juifs à Paris par la police française, les 16 et 17 juillet 1942, avant leur déportation." },
        { q: "Quel est le rôle de Jean Moulin ?", r: "Envoyé par de Gaulle, il unifie la Résistance intérieure dans le Conseil national de la Résistance, créé en mai 1943." },
        { q: "Quand le Japon capitule-t-il ?", r: "Le 2 septembre 1945, après les bombes atomiques sur Hiroshima (6 août) et Nagasaki (9 août)." },
      ],
      quiz: [
        { q: "Le débarquement allié en Normandie a lieu le :", choix: ["6 juin 1944", "8 mai 1945", "22 juin 1941", "15 août 1944"], bonne: 0, expl: "Le 15 août 1944 est le débarquement de Provence.", niv: 1 },
        { q: "L'appel du général de Gaulle à continuer le combat date du :", choix: ["25 juin 1940", "22 juin 1940", "10 juillet 1940", "18 juin 1940"], bonne: 3, expl: "L'armistice de Pétain est signé quatre jours plus tard, le 22 juin.", niv: 1 },
        { q: "Les unités qui fusillent les Juifs à l'Est à partir de 1941 sont :", choix: ["les Jeunesses hitlériennes", "la Gestapo", "les Einsatzgruppen", "la Wehrmacht seule"], bonne: 2, expl: "La Shoah par balles est leur œuvre, avec l'aide d'autres unités.", niv: 1 },
        { q: "Une usine américaine qui fabriquait des voitures produit des chars en 1942. C'est un signe de :", choix: ["la guerre éclair", "la guerre totale", "la collaboration", "la guerre d'anéantissement"], bonne: 1, expl: "Toute l'économie est mobilisée pour la guerre.", niv: 2 },
        { q: "Un convoi part de Drancy vers un lieu où les déportés sont gazés dès l'arrivée. Ce lieu est :", choix: ["un ghetto", "un camp de concentration", "un centre de mise à mort", "un camp de prisonniers de guerre"], bonne: 2, expl: "Auschwitz-Birkenau tuait dès l'arrivée la majorité des déportés.", niv: 2 },
        { q: "Un résistant reçoit en 1943 la mission d'unir tous les mouvements. Il s'agit de :", choix: ["Philippe Pétain", "Jean Moulin", "Pierre Laval", "Léon Blum"], bonne: 1, expl: "Jean Moulin crée le CNR en mai 1943.", niv: 2 },
        { q: "Une affiche de 1941 proclame « Travail, Famille, Patrie ». Elle vient :", choix: ["du Conseil national de la Résistance", "de la France libre", "du Front populaire", "du régime de Vichy"], bonne: 3, expl: "C'est la devise de l'État français, qui remplace « Liberté, Égalité, Fraternité ».", niv: 2 },
        { q: "Le nombre de Juifs assassinés pendant la Shoah est d'environ :", choix: ["600 000", "6 millions", "1 million", "3 millions"], bonne: 1, expl: "Ils sont tués par balles, par le gaz, par la faim dans les ghettos.", niv: 2 },
        { q: "Pourquoi la bataille de Stalingrad est-elle un tournant ?", choix: ["L'Afrique du Nord est libérée grâce à elle", "Elle fait entrer les États-Unis en guerre", "Elle provoque la capitulation du Japon", "L'Allemagne y perd l'initiative à l'Est"], bonne: 3, expl: "Après février 1943, l'Armée rouge avance jusqu'à Berlin ; Pearl Harbor fait entrer les États-Unis.", niv: 3 },
        { q: "Quelle affirmation sur le régime de Vichy est juste ?", choix: ["Il mène sa propre politique antisémite dès 1940", "Il est imposé par l'Allemagne contre l'avis des élus", "Il refuse de collaborer avec l'occupant", "Il protège les Juifs étrangers réfugiés en France"], bonne: 0, expl: "Le statut des Juifs d'octobre 1940 est une décision française, sans demande allemande.", niv: 3 },
      ],
    },
    {
      chapitre: 'hg-g-4',
      fiche: `## Un nouvel ordre mondial : bipolarisation et tiers-monde

### 1945 : reconstruire et juger
- L'**Organisation des Nations unies** (ONU) est fondée par la **charte de San Francisco** (26 juin **1945**) pour maintenir la paix. Son **Conseil de sécurité** compte cinq membres permanents avec un **droit de veto** : États-Unis, URSS, Royaume-Uni, France, Chine.
- Les **accords de Bretton Woods** (juillet **1944**) organisent l'économie mondiale autour du **dollar** et créent le **FMI** et la **Banque mondiale**.
- Le **procès de Nuremberg** (1945-1946) juge les dirigeants nazis. Il crée la notion de **crime contre l'humanité**.
- La **Déclaration universelle des droits de l'homme** est adoptée par l'ONU en **1948**.

### La guerre froide : deux blocs face à face
- La **guerre froide** est l'affrontement entre les **États-Unis** et l'**URSS** de 1947 à 1991, sans guerre directe entre eux. Chacun défend un modèle : démocratie libérale et capitalisme contre communisme et économie planifiée.
- En **1947**, la **doctrine Truman** propose l'**endiguement** du communisme ; le **plan Marshall** aide l'Europe à se reconstruire. L'URSS répond par la **doctrine Jdanov**, qui décrit un monde coupé en deux camps.
- Le **blocus de Berlin** (1948-1949) est la première grande crise : les Américains ravitaillent Berlin-Ouest par un pont aérien. En **1949**, l'Allemagne est coupée en deux (RFA et RDA) et l'**OTAN** est créée ; le **pacte de Varsovie** suit en **1955**.
- Les deux Grands se dotent de la bombe atomique (URSS en 1949) : c'est l'**équilibre de la terreur**.
- Les crises : **guerre de Corée** (1950-1953), construction du **mur de Berlin** (13 août **1961**), **crise de Cuba** (octobre **1962**), où le monde frôle la guerre nucléaire. Ensuite vient la **détente** (téléphone rouge, traités de limitation des armements).
- La **guerre du Vietnam** (engagement américain massif de 1965 à 1973) est un conflit périphérique de la guerre froide.

### La décolonisation et le tiers-monde
- La **décolonisation** est l'accès à l'indépendance des colonies. Elle se fait par la **négociation** ou par la **guerre**.
- L'**Inde** devient indépendante en **1947** (partition avec le Pakistan). La France perd l'**Indochine** après **Diên Biên Phu** (1954) et mène la **guerre d'Algérie** (1954-1962), terminée par les **accords d'Évian** (mars 1962). En **1960**, la plupart des colonies d'Afrique subsaharienne deviennent indépendantes.
- Le mot **tiers-monde** est inventé par **Alfred Sauvy** en 1952 : les pays pauvres, souvent nouvellement indépendants.
- La **conférence de Bandung** (avril **1955**) réunit 29 pays d'Asie et d'Afrique qui condamnent le colonialisme. En **1961**, le **mouvement des non-alignés** naît à Belgrade : il refuse de choisir entre les deux blocs.
- La **crise de Suez** (1956) : l'Égyptien **Nasser** nationalise le canal ; la France et le Royaume-Uni interviennent, puis reculent sous la pression des deux Grands.

### Le Moyen-Orient, foyer de conflits
- L'État d'**Israël** est proclamé le **14 mai 1948**. La première guerre israélo-arabe suit aussitôt ; des centaines de milliers de Palestiniens deviennent réfugiés.
- Nouvelles guerres en 1956, en **1967** (guerre des Six Jours : Israël occupe la Cisjordanie, Gaza, le Sinaï, le Golan) et en 1973.

### À retenir pour le bac
- Les dates de la guerre froide : 1947, 1948-1949, 1955, 1961, 1962.
- La multiplication des acteurs : ONU, nouveaux États, non-alignés.
- Piège : guerre froide ne veut pas dire absence de combats ; il y a des guerres périphériques (Corée, Vietnam).`,
      cartes: [
        { q: "Qu'est-ce que la guerre froide ?", r: "L'affrontement entre les États-Unis et l'URSS de 1947 à 1991, sans guerre directe entre eux, mais avec des crises et des guerres périphériques." },
        { q: "Qui a un droit de veto au Conseil de sécurité de l'ONU ?", r: "Les cinq membres permanents : États-Unis, Russie (ex-URSS), Royaume-Uni, France, Chine." },
        { q: "Que créent les accords de Bretton Woods (1944) ?", r: "Un système monétaire international fondé sur le dollar, avec le FMI et la Banque mondiale." },
        { q: "Quelle notion le procès de Nuremberg crée-t-il ?", r: "Le crime contre l'humanité, pour juger les crimes de masse contre les civils." },
        { q: "Qu'est-ce que l'endiguement ?", r: "La politique américaine, annoncée par la doctrine Truman en 1947, qui vise à empêcher l'extension du communisme." },
        { q: "À quoi sert le plan Marshall ?", r: "Une aide américaine à la reconstruction de l'Europe à partir de 1947, qui l'attache aussi au camp occidental." },
        { q: "Que se passe-t-il pendant le blocus de Berlin ?", r: "En 1948-1949, l'URSS coupe les accès terrestres à Berlin-Ouest ; les Occidentaux la ravitaillent par un pont aérien." },
        { q: "Qu'est-ce que l'équilibre de la terreur ?", r: "La paix forcée entre deux puissances nucléaires : chacune sait qu'une attaque entraînerait sa propre destruction." },
        { q: "Quand est construit le mur de Berlin ?", r: "Dans la nuit du 13 août 1961, pour empêcher les habitants de RDA de fuir vers l'Ouest." },
        { q: "Pourquoi la crise de Cuba (1962) est-elle grave ?", r: "L'URSS installe des missiles nucléaires à Cuba ; pendant treize jours, le monde frôle la guerre nucléaire avant le retrait des missiles." },
        { q: "Qui invente l'expression « tiers-monde » ?", r: "Le démographe Alfred Sauvy, en 1952, par comparaison avec le tiers état d'avant 1789." },
        { q: "Qu'est-ce que la conférence de Bandung ?", r: "La réunion, en avril 1955 en Indonésie, de 29 pays d'Asie et d'Afrique qui condamnent le colonialisme." },
        { q: "Qu'est-ce que le non-alignement ?", r: "Le refus de rejoindre l'un des deux blocs. Le mouvement des non-alignés naît à Belgrade en 1961." },
        { q: "Comment se termine la guerre d'Algérie ?", r: "Par les accords d'Évian (mars 1962), puis l'indépendance de l'Algérie en juillet 1962." },
        { q: "Quand l'État d'Israël est-il proclamé ?", r: "Le 14 mai 1948 ; la première guerre israélo-arabe commence aussitôt." },
      ],
      quiz: [
        { q: "L'OTAN est créée en :", choix: ["1946", "1945", "1949", "1947"], bonne: 2, expl: "Le pacte de Varsovie, son rival, date de 1955.", niv: 1 },
        { q: "La politique américaine qui vise à contenir le communisme s'appelle :", choix: ["la détente", "l'endiguement", "le non-alignement", "la coexistence pacifique"], bonne: 1, expl: "Elle est annoncée par la doctrine Truman en 1947.", niv: 1 },
        { q: "La conférence de Bandung a lieu en :", choix: ["1961", "1947", "1955", "1962"], bonne: 2, expl: "En 1961, c'est la naissance du mouvement des non-alignés à Belgrade.", niv: 1 },
        { q: "Des avions américains apportent chaque jour du charbon et de la farine à une ville encerclée en 1948. C'est :", choix: ["la crise de Cuba", "le blocus de Berlin", "la guerre de Corée", "le mur de Berlin"], bonne: 1, expl: "Le pont aérien brise le blocus soviétique de Berlin-Ouest.", niv: 2 },
        { q: "En octobre 1962, des photos aériennes montrent des rampes de missiles soviétiques. On est à :", choix: ["Suez", "Berlin", "Cuba", "Séoul"], bonne: 2, expl: "La crise de Cuba est le moment le plus dangereux de la guerre froide.", niv: 2 },
        { q: "Un chef d'État africain refuse en 1961 de s'allier aux États-Unis comme à l'URSS. Il pratique :", choix: ["la doctrine Jdanov", "l'endiguement", "la décolonisation", "le non-alignement"], bonne: 3, expl: "Les non-alignés refusent la logique des blocs.", niv: 2 },
        { q: "Nasser nationalise le canal de Suez en :", choix: ["1956", "1948", "1954", "1952"], bonne: 0, expl: "En 1952, des officiers nationalistes prennent le pouvoir en Égypte.", niv: 2 },
        { q: "Un dirigeant nazi est condamné en 1946 pour des massacres de civils. L'accusation utilise la notion de :", choix: ["violation de la charte", "génocide reconnu par l'ONU", "crime de guerre froide", "crime contre l'humanité"], bonne: 3, expl: "Le procès de Nuremberg crée le crime contre l'humanité.", niv: 2 },
        { q: "Pourquoi parle-t-on de « multiplication des acteurs » après 1945 ?", choix: ["L'URSS et les États-Unis se divisent en plusieurs pays", "De nombreux États indépendants et l'ONU s'ajoutent aux deux Grands", "Les empires coloniaux s'agrandissent", "L'Europe redevient le centre du monde"], bonne: 1, expl: "La décolonisation fait naître des dizaines d'États qui siègent à l'ONU.", niv: 3 },
        { q: "Quelle affirmation sur la guerre froide est juste ?", choix: ["Elle oppose l'Europe aux États-Unis", "Elle oppose surtout la Chine à l'URSS", "Elle se termine par la crise de Cuba", "Elle ne met jamais face à face les armées des deux Grands"], bonne: 3, expl: "Ils s'affrontent par des guerres périphériques (Corée, Vietnam) ; la guerre froide se termine en 1991.", niv: 3 },
      ],
    },
    {
      chapitre: 'hg-g-5',
      fiche: `## La France : une nouvelle place dans le monde (1945-1970)

### Refonder la République (1944-1946)
- À la Libération, le **Gouvernement provisoire de la République française** (GPRF), dirigé par **de Gaulle**, rétablit la République.
- Les **femmes** obtiennent le **droit de vote** (ordonnance du 21 avril **1944**) ; elles votent pour la première fois en **1945**.
- La **Sécurité sociale** est créée par les ordonnances d'octobre **1945** : assurance maladie, retraite, allocations familiales. C'est l'**État-providence**, inspiré du programme du CNR.
- **Nationalisations** : Renault, les houillères, l'électricité et le gaz (EDF-GDF), les grandes banques passent sous le contrôle de l'État.

### La IVe République (1946-1958)
- Elle donne beaucoup de pouvoir au **Parlement**. Les gouvernements tombent souvent : c'est l'**instabilité ministérielle** (une vingtaine de gouvernements en douze ans).
- Elle réussit pourtant la **reconstruction** et lance les **Trente Glorieuses**, une période de forte croissance de 1945 à 1975 (expression de l'économiste Jean Fourastié). C'est l'époque de la **société de consommation** et de l'exode rural.
- Elle est dépassée par la **décolonisation** : défaite en **Indochine** (Diên Biên Phu, **1954**), puis la **guerre d'Algérie** à partir de **1954**.

### La France et la construction européenne
- Le **9 mai 1950**, **Robert Schuman** propose de mettre en commun le charbon et l'acier français et allemands, pour rendre la guerre impossible : la **CECA** naît en **1951** (six pays).
- Le **traité de Rome** (25 mars **1957**) crée la **Communauté économique européenne** (CEE), un marché commun entre six pays : France, RFA, Italie, Belgique, Pays-Bas, Luxembourg.

### La Ve République et la politique de grandeur
- En **mai 1958**, la crise algérienne fait tomber la IVe République ; de Gaulle revient au pouvoir. La **Constitution de la Ve République** est adoptée par référendum et promulguée le **4 octobre 1958**. Elle renforce le pouvoir du **président** et de l'exécutif.
- Par le référendum de **1962**, le président est élu au **suffrage universel direct** ; première élection en **1965**.
- De Gaulle met fin à la guerre d'Algérie (**accords d'Évian**, mars **1962**) : environ un million de **pieds-noirs** et des harkis gagnent la métropole.
- La **politique de grandeur** affirme l'**indépendance** de la France : première bombe atomique (**1960**), reconnaissance de la Chine communiste (**1964**), sortie du **commandement intégré de l'OTAN** (**1966**), discours critiquant la guerre américaine au Vietnam (Phnom Penh, 1966).
- Avec le chancelier Adenauer, il signe le **traité de l'Élysée** (**1963**), base de la réconciliation franco-allemande.
- Avec l'Afrique, la France garde des liens étroits après 1960 (coopération, accords militaires) : on parle de **Françafrique**.

### Mai 1968
- Une crise étudiante puis une **grève générale** (environ 7 millions de grévistes) contestent la société et le pouvoir gaullien. Les **accords de Grenelle** augmentent le salaire minimum de 35 %. De Gaulle démissionne en **1969** après l'échec d'un référendum.

### À retenir pour le bac
- 1944-1945 : droit de vote des femmes, Sécurité sociale. 1957 : traité de Rome. 1958 : Ve République. 1962 : Évian et élection directe du président.
- La France perd son empire mais garde une influence : bombe, siège permanent à l'ONU, Europe.
- Piège : la CECA (1951) précède la CEE (1957).`,
      cartes: [
        { q: "Quand les femmes obtiennent-elles le droit de vote en France ?", r: "Par l'ordonnance du 21 avril 1944 ; elles votent pour la première fois en 1945." },
        { q: "Qu'est-ce que la Sécurité sociale (1945) ?", r: "Un système qui protège tous les travailleurs contre la maladie, la vieillesse et les charges de famille, financé par des cotisations." },
        { q: "Qu'est-ce que l'État-providence ?", r: "Un État qui protège les citoyens contre les risques de la vie (maladie, chômage, vieillesse) et réduit les inégalités." },
        { q: "Qu'est-ce qu'une nationalisation ?", r: "Le passage d'une entreprise privée sous le contrôle de l'État, comme Renault en 1945." },
        { q: "Quel est le grand défaut de la IVe République ?", r: "L'instabilité ministérielle : le Parlement renverse souvent les gouvernements, une vingtaine en douze ans." },
        { q: "Que sont les Trente Glorieuses ?", r: "La forte croissance économique de 1945 à 1975 en France, avec plein emploi et développement de la consommation." },
        { q: "Que propose Robert Schuman le 9 mai 1950 ?", r: "Mettre en commun le charbon et l'acier de la France et de la RFA pour rendre la guerre impossible : c'est la future CECA." },
        { q: "Que crée le traité de Rome (1957) ?", r: "La Communauté économique européenne (CEE), un marché commun entre six pays." },
        { q: "Quand la Constitution de la Ve République est-elle promulguée ?", r: "Le 4 octobre 1958, après son adoption par référendum." },
        { q: "Que change le référendum de 1962 ?", r: "Le président de la République est désormais élu au suffrage universel direct ; première élection en 1965." },
        { q: "Qu'est-ce que la politique de grandeur ?", r: "La politique de De Gaulle pour affirmer l'indépendance et le rang de la France : bombe atomique, sortie du commandement de l'OTAN." },
        { q: "Quand la France quitte-t-elle le commandement intégré de l'OTAN ?", r: "En 1966, sans quitter l'Alliance atlantique elle-même." },
        { q: "Qu'est-ce que le traité de l'Élysée (1963) ?", r: "Le traité d'amitié franco-allemand signé par de Gaulle et Adenauer, base de la coopération entre les deux pays." },
        { q: "Qui sont les pieds-noirs ?", r: "Les Français d'Algérie, dont environ un million gagnent la métropole en 1962." },
      ],
      quiz: [
        { q: "La Sécurité sociale est créée en :", choix: ["1968", "1936", "1958", "1945"], bonne: 3, expl: "1936 est le Front populaire ; 1945, les ordonnances d'octobre.", niv: 1 },
        { q: "La Constitution de la Ve République est promulguée en :", choix: ["1962", "1946", "1958", "1965"], bonne: 2, expl: "1962 est le référendum sur l'élection directe du président.", niv: 1 },
        { q: "La croissance forte de 1945 à 1975 s'appelle :", choix: ["les Trente Glorieuses", "les Années folles", "la Belle Époque", "la Grande Dépression"], bonne: 0, expl: "L'expression vient de l'économiste Jean Fourastié.", niv: 1 },
        { q: "La France et la RFA mettent en commun leur charbon et leur acier en :", choix: ["1951", "1957", "1963", "1955"], bonne: 0, expl: "C'est la CECA ; la CEE date de 1957.", niv: 2 },
        { q: "En 1966, la France quitte le commandement intégré de l'OTAN. C'est un exemple de :", choix: ["la détente", "la politique de grandeur", "la décolonisation", "la construction européenne"], bonne: 1, expl: "De Gaulle veut que la France décide seule de sa défense.", niv: 2 },
        { q: "Un gouvernement de la IVe République est renversé après six mois. Cela illustre :", choix: ["la cohabitation", "l'instabilité ministérielle", "le pouvoir fort du président", "la politique de grandeur"], bonne: 1, expl: "Sous la IVe, le Parlement renverse souvent les gouvernements.", niv: 2 },
        { q: "Une famille d'Oran arrive à Marseille en juillet 1962 avec deux valises. Ce sont :", choix: ["des réfugiés indochinois", "des harkis du FLN", "des immigrés italiens", "des pieds-noirs"], bonne: 3, expl: "Environ un million de Français d'Algérie quittent le pays en 1962 ; les harkis combattaient le FLN.", niv: 2 },
        { q: "La première bombe atomique française explose en :", choix: ["1960", "1945", "1949", "1958"], bonne: 0, expl: "1945 est la bombe américaine, 1949 la bombe soviétique.", niv: 2 },
        { q: "Pourquoi la IVe République tombe-t-elle en 1958 ?", choix: ["Le traité de Rome lui retire ses pouvoirs", "Elle perd la guerre d'Indochine cette année-là, à Diên Biên Phu", "Elle ne parvient pas à régler la crise algérienne", "Mai 1968 la force à démissionner"], bonne: 2, expl: "La crise du 13 mai 1958 à Alger ramène de Gaulle ; Diên Biên Phu date de 1954.", niv: 3 },
        { q: "Quelle affirmation sur la Ve République est juste ?", choix: ["Elle supprime le Parlement", "Le président y est élu au suffrage universel direct dès 1958", "Elle renforce le pouvoir exécutif face au Parlement", "Elle est adoptée sans référendum"], bonne: 2, expl: "L'élection directe date de 1962 ; la Constitution est adoptée par référendum.", niv: 3 },
      ],
    },
    {
      chapitre: 'hg-g-6',
      fiche: `## Les remises en cause des années 1970 à 1991

### La fin de la croissance des Trente Glorieuses
- Le **15 août 1971**, le président américain **Nixon** suspend la conversion du dollar en or : c'est la fin du système de **Bretton Woods**. Les monnaies deviennent flottantes.
- **Premier choc pétrolier** (**1973**) : pendant la guerre du Kippour, les pays arabes de l'**OPEP** réduisent leur production et le prix du pétrole est multiplié par quatre. **Second choc** en **1979**, avec la révolution iranienne.
- Les pays riches connaissent la **stagflation** : faible croissance, **chômage de masse** et forte inflation en même temps. En France, le chômage passe d'environ 3 % à près de 10 % des actifs en quinze ans.
- Réponse **néolibérale** : **Margaret Thatcher** (Royaume-Uni, 1979) et **Ronald Reagan** (États-Unis, 1981) réduisent le rôle de l'État, baissent les impôts, privatisent et **dérégulent** (suppriment des règles, surtout en finance).
- Les pays riches se concertent : premier sommet du **G6** à Rambouillet en **1975** (il devient le G7).

### Un monde qui change
- **1979** : la **révolution iranienne** installe une république islamique avec l'ayatollah **Khomeini** ; l'URSS envahit l'**Afghanistan** (elle s'y enlise jusqu'en 1989).
- **Démocratisation** de l'Europe du Sud : révolution des Œillets au **Portugal** (1974), fin de la dictature des colonels en **Grèce** (1974), mort de **Franco** en **Espagne** (1975). Ces pays entrent dans la CEE (Grèce 1981, Espagne et Portugal 1986).
- L'**Acte unique européen** (**1986**) prépare le marché unique.
- En URSS, **Mikhaïl Gorbatchev** (au pouvoir en **1985**) lance la **perestroïka** (réformes économiques) et la **glasnost** (transparence, plus de liberté d'expression).
- Le **mur de Berlin** tombe le **9 novembre 1989** ; l'Allemagne est **réunifiée** le **3 octobre 1990**. L'**URSS disparaît** en **décembre 1991** : c'est la fin de la guerre froide.

### La France de 1974 à 1988 : un tournant social et politique
- **Valéry Giscard d'Estaing** (président de 1974 à 1981) modernise la société : **majorité à 18 ans** (1974), **loi Veil** qui légalise l'**IVG** (1975), divorce par consentement mutuel (1975).
- **François Mitterrand** est élu en **1981** : première **alternance** de la Ve République, la gauche arrive au pouvoir.
- Ses réformes : **abolition de la peine de mort** (loi Badinter, octobre **1981**), retraite à 60 ans, cinquième semaine de congés payés, 39 heures (1982), **lois Defferre** de **décentralisation** (1982), qui donnent plus de pouvoirs aux régions, départements et communes. Libération des ondes : **radios libres**.
- En **1983**, le **tournant de la rigueur** : face à l'inflation et au déficit, le gouvernement freine les dépenses et choisit l'Europe.
- En **1986**, la droite gagne les législatives : **Jacques Chirac** devient Premier ministre de Mitterrand. C'est la première **cohabitation** (1986-1988).
- Nouvelles questions : l'**immigration** (Marche pour l'égalité et contre le racisme, **1983**), la montée du Front national, la place des **femmes** (loi Roudy sur l'égalité professionnelle, 1983).

### À retenir pour le bac
- 1971, 1973, 1979 : les chocs qui mettent fin aux Trente Glorieuses.
- 1985-1991 : de Gorbatchev à la fin de l'URSS.
- France : 1974-1975 (Giscard), 1981 (alternance), 1983 (rigueur), 1986 (cohabitation).
- Piège : l'abolition de la peine de mort est votée en 1981, pas en 1974.`,
      cartes: [
        { q: "Que se passe-t-il le 15 août 1971 ?", r: "Le président Nixon suspend la conversion du dollar en or : le système de Bretton Woods prend fin." },
        { q: "Qu'est-ce que le premier choc pétrolier ?", r: "En 1973, les pays arabes de l'OPEP réduisent leur production : le prix du pétrole est multiplié par quatre." },
        { q: "Qu'est-ce que la stagflation ?", r: "Une situation qui combine faible croissance, chômage élevé et forte inflation, comme dans les pays riches après 1973." },
        { q: "Qu'est-ce que le néolibéralisme ?", r: "Une politique qui réduit le rôle de l'État : baisse des impôts, privatisations, déréglementation. Thatcher et Reagan l'appliquent." },
        { q: "Que se passe-t-il en Iran en 1979 ?", r: "Une révolution renverse le shah et installe une république islamique dirigée par l'ayatollah Khomeini." },
        { q: "Qu'est-ce que la perestroïka ?", r: "Les réformes économiques lancées par Gorbatchev en URSS à partir de 1985, avec la glasnost (transparence)." },
        { q: "Quand tombe le mur de Berlin ?", r: "Le 9 novembre 1989. L'Allemagne est réunifiée le 3 octobre 1990." },
        { q: "Quand l'URSS disparaît-elle ?", r: "En décembre 1991, avec la démission de Gorbatchev : c'est la fin de la guerre froide." },
        { q: "Que permet la loi Veil de 1975 ?", r: "Elle légalise l'interruption volontaire de grossesse (IVG) en France." },
        { q: "Pourquoi l'élection de 1981 est-elle une alternance ?", r: "Pour la première fois sous la Ve République, la gauche arrive au pouvoir avec François Mitterrand." },
        { q: "Quand la peine de mort est-elle abolie en France ?", r: "En octobre 1981, par la loi défendue par le ministre de la Justice Robert Badinter." },
        { q: "Qu'est-ce que la décentralisation de 1982 ?", r: "Les lois Defferre transfèrent des pouvoirs de l'État aux régions, départements et communes." },
        { q: "Qu'est-ce que le tournant de la rigueur (1983) ?", r: "Le gouvernement Mitterrand freine les dépenses pour lutter contre l'inflation et le déficit, et rester dans le système monétaire européen." },
        { q: "Qu'est-ce qu'une cohabitation ?", r: "Un président et un Premier ministre de camps opposés. La première a lieu de 1986 à 1988 (Mitterrand et Chirac)." },
      ],
      quiz: [
        { q: "Le premier choc pétrolier a lieu en :", choix: ["1986", "1971", "1979", "1973"], bonne: 3, expl: "1979 est le second choc, lié à la révolution iranienne.", niv: 1 },
        { q: "La majorité à 18 ans et la loi Veil sont prises sous la présidence de :", choix: ["Valéry Giscard d'Estaing", "Charles de Gaulle", "François Mitterrand", "Jacques Chirac"], bonne: 0, expl: "Giscard est président de 1974 à 1981.", niv: 1 },
        { q: "Les réformes économiques de Gorbatchev s'appellent :", choix: ["la détente", "la glasnost", "la perestroïka", "la NEP"], bonne: 2, expl: "La glasnost est la transparence, la liberté d'expression.", niv: 1 },
        { q: "Un pays connaît en 1975 une croissance nulle, 12 % d'inflation et un chômage en hausse. C'est :", choix: ["la stagflation", "la déflation", "les Trente Glorieuses", "la reconstruction"], bonne: 0, expl: "La stagflation combine stagnation et inflation.", niv: 2 },
        { q: "Une Première ministre britannique privatise les mines et baisse les impôts dans les années 1980. C'est :", choix: ["Ronald Reagan", "Margaret Thatcher", "Mikhaïl Gorbatchev", "François Mitterrand"], bonne: 1, expl: "Thatcher applique le néolibéralisme à partir de 1979.", niv: 2 },
        { q: "En 1986, un président de gauche nomme un Premier ministre de droite. C'est :", choix: ["une alternance", "une cohabitation", "un référendum", "une dissolution"], bonne: 1, expl: "L'alternance est le changement de camp au pouvoir, comme en 1981.", niv: 2 },
        { q: "Un conseil régional obtient de nouveaux pouvoirs en 1982. C'est l'effet de :", choix: ["la nationalisation", "la cohabitation", "la décentralisation", "la rigueur"], bonne: 2, expl: "Les lois Defferre transfèrent des compétences aux collectivités.", niv: 2 },
        { q: "L'Allemagne est réunifiée en :", choix: ["1986", "1989", "1987", "1990"], bonne: 3, expl: "Le mur tombe en 1989, la réunification a lieu le 3 octobre 1990.", niv: 2 },
        { q: "Pourquoi le gouvernement français choisit-il la rigueur en 1983 ?", choix: ["La droite a gagné les élections", "Le FMI l'oblige à quitter la Communauté économique européenne", "La relance a creusé le déficit et l'inflation", "Le premier choc pétrolier commence"], bonne: 2, expl: "La relance de 1981 profite aux importations ; la droite ne gagne qu'en 1986.", niv: 3 },
        { q: "Quelle affirmation sur la fin de la guerre froide est juste ?", choix: ["Les réformes de Gorbatchev l'accélèrent sans le vouloir", "Elle se termine par une guerre ouverte entre les deux Grands", "La chute du mur suffit à faire disparaître l'URSS", "Elle se termine dès la crise de Cuba"], bonne: 0, expl: "La glasnost libère la parole et fragilise le régime, qui disparaît en 1991.", niv: 3 },
      ],
    },
    {
      chapitre: 'hg-g-7',
      fiche: `## Le monde et la construction européenne depuis les années 1990

### Après la guerre froide : une hyperpuissance contestée
- Après 1991, les **États-Unis** sont la seule superpuissance. Le ministre français Hubert Védrine parle d'**hyperpuissance**.
- **Guerre du Golfe** (1990-1991) : l'Irak envahit le Koweït ; une coalition dirigée par les États-Unis, avec l'accord de l'ONU, le libère au début de **1991**.
- Le **11 septembre 2001**, les attentats d'**al-Qaïda** à New York et Washington font près de 3 000 morts. Les États-Unis répondent par la guerre en **Afghanistan** (2001), puis en **Irak** (**2003**), cette fois **sans mandat de l'ONU** ; la France s'y oppose.
- De nouvelles puissances s'affirment : la **Chine** (entrée à l'**OMC** en **2001**, deuxième économie mondiale), l'Inde, le Brésil. Les **BRICS** (Brésil, Russie, Inde, Chine, Afrique du Sud) se réunissent à partir de 2009.
- La **Russie** de **Vladimir Poutine** veut retrouver sa puissance : guerre en Géorgie (2008), annexion de la **Crimée** (**2014**), invasion de l'**Ukraine** le **24 février 2022**.

### Des conflits nouveaux et une justice internationale
- Les conflits sont surtout des **guerres civiles**, avec des acteurs non étatiques (milices, groupes terroristes) et des civils comme cibles.
- **Ex-Yougoslavie** (1991-1995) : guerres et **purification ethnique** ; à **Srebrenica** (juillet **1995**), environ 8 000 hommes et garçons bosniaques musulmans sont massacrés.
- **Rwanda** (avril-juillet **1994**) : **génocide des Tutsi**, environ 800 000 morts en trois mois.
- L'ONU crée des **tribunaux pénaux internationaux** (pour l'ex-Yougoslavie en 1993, pour le Rwanda en 1994). La **Cour pénale internationale** (CPI) est créée par le statut de Rome (**1998**) et fonctionne depuis **2002**.
- Le **terrorisme djihadiste** devient une menace mondiale : al-Qaïda, puis **Daech** (État islamique), qui proclame un « califat » en Irak et en Syrie en 2014.
- Les **enjeux mondiaux** demandent une coopération : le **climat** (protocole de Kyoto en 1997, **accord de Paris** en **2015**, lors de la COP21), les pandémies (covid-19 en 2020).

### L'Union européenne : approfondissement
- Le **traité de Maastricht** (signé en février **1992**) crée l'**Union européenne** et la **citoyenneté européenne** (droit de vote aux élections municipales et européennes dans le pays où l'on vit). Il prépare la monnaie unique.
- L'**euro** est lancé en **1999** pour les banques et entre dans les porte-monnaie le **1er janvier 2002**.
- L'**espace Schengen** supprime les contrôles aux frontières intérieures (accords de 1985, appliqués à partir de **1995**).
- Le **traité de Lisbonne** (signé en **2007**, en vigueur en **2009**) crée un président stable du Conseil européen et renforce le Parlement européen.

### L'Union européenne : élargissement
- En **2004**, dix pays entrent dans l'UE, dont huit anciens pays communistes d'Europe centrale et orientale (Pologne, Hongrie, République tchèque, pays baltes…). Puis la Roumanie et la Bulgarie (**2007**), la Croatie (**2013**). L'UE compte aujourd'hui **27 membres**.
- Cet élargissement **réunifie l'Europe** coupée par la guerre froide, mais rend les décisions plus difficiles à 27.

### Des remises en question
- En **2005**, les Français (29 mai) et les Néerlandais rejettent par référendum le **traité établissant une Constitution pour l'Europe**.
- La **crise financière de 2008** puis la **crise des dettes** (Grèce, à partir de 2010) montrent les fragilités de la zone euro.
- Le **Brexit** : par référendum le **23 juin 2016**, les Britanniques votent à 52 % pour quitter l'UE. Le Royaume-Uni en sort le **31 janvier 2020**.
- Les partis **eurosceptiques** progressent. Mais l'UE montre aussi sa capacité à agir ensemble : plan de relance financé par un emprunt commun (2020), aide à l'Ukraine.

### À retenir pour le bac
- Dates clés : 1991, 1992, 1994, 1995, 2001, 2002, 2004, 2005, 2014, 2016, 2022.
- Entre coopérations (ONU, CPI, accord de Paris, UE) et conflits (terrorisme, guerres civiles, Ukraine).
- Piège : Maastricht crée l'UE en 1992 ; la CEE date de 1957.`,
      cartes: [
        { q: "Pourquoi parle-t-on d'hyperpuissance américaine après 1991 ?", r: "Après la disparition de l'URSS, les États-Unis dominent seuls sur les plans militaire, économique et culturel." },
        { q: "Que se passe-t-il le 11 septembre 2001 ?", r: "Le groupe terroriste al-Qaïda détourne des avions et frappe New York et Washington : près de 3 000 morts." },
        { q: "Pourquoi la guerre d'Irak de 2003 est-elle contestée ?", r: "Les États-Unis la lancent sans mandat de l'ONU ; la France et l'Allemagne s'y opposent." },
        { q: "Que sont les BRICS ?", r: "Un groupe de puissances émergentes : Brésil, Russie, Inde, Chine, Afrique du Sud. Les sommets commencent en 2009." },
        { q: "Quand la Russie envahit-elle l'Ukraine ?", r: "Le 24 février 2022, après avoir annexé la Crimée en 2014." },
        { q: "Que se passe-t-il au Rwanda en 1994 ?", r: "Le génocide des Tutsi : environ 800 000 morts entre avril et juillet." },
        { q: "Que se passe-t-il à Srebrenica en juillet 1995 ?", r: "Environ 8 000 hommes et garçons bosniaques musulmans sont massacrés par des forces serbes de Bosnie." },
        { q: "Qu'est-ce que la Cour pénale internationale ?", r: "Un tribunal permanent créé par le statut de Rome (1998), qui juge depuis 2002 les génocides, crimes contre l'humanité et crimes de guerre." },
        { q: "Qu'est-ce que l'accord de Paris (2015) ?", r: "Un accord sur le climat signé lors de la COP21 : limiter le réchauffement bien en dessous de 2 °C." },
        { q: "Que crée le traité de Maastricht ?", r: "L'Union européenne, la citoyenneté européenne et le chemin vers la monnaie unique. Il est signé en 1992." },
        { q: "Quand l'euro entre-t-il dans les porte-monnaie ?", r: "Le 1er janvier 2002 ; il existe pour les banques depuis 1999." },
        { q: "Qu'est-ce que l'espace Schengen ?", r: "Un espace où les contrôles aux frontières intérieures sont supprimés, appliqué depuis 1995." },
        { q: "Qu'a de particulier l'élargissement de 2004 ?", r: "Dix pays entrent dans l'UE, dont huit anciens pays communistes d'Europe centrale et orientale." },
        { q: "Que se passe-t-il en 2005 ?", r: "La France et les Pays-Bas rejettent par référendum le traité établissant une Constitution pour l'Europe." },
        { q: "Qu'est-ce que le Brexit ?", r: "La sortie du Royaume-Uni de l'UE, votée par référendum le 23 juin 2016 et effective le 31 janvier 2020." },
      ],
      quiz: [
        { q: "Le génocide des Tutsi au Rwanda a lieu en :", choix: ["1994", "1991", "1995", "2001"], bonne: 0, expl: "1995 est le massacre de Srebrenica, en Bosnie.", niv: 1 },
        { q: "Le traité qui crée l'Union européenne est :", choix: ["le traité de Lisbonne", "le traité de Rome", "le traité de Maastricht", "l'Acte unique"], bonne: 2, expl: "Le traité de Rome crée la CEE en 1957.", niv: 1 },
        { q: "Le Royaume-Uni sort de l'Union européenne en :", choix: ["2020", "2005", "2016", "2018"], bonne: 0, expl: "Le référendum date de 2016, la sortie effective de janvier 2020.", niv: 1 },
        { q: "Un tribunal de La Haye juge en 2016 un chef de milice pour crimes contre l'humanité. Il s'agit sans doute :", choix: ["du Parlement européen", "du Conseil de sécurité", "de la Cour de justice de l'Union européenne", "de la Cour pénale internationale"], bonne: 3, expl: "La CPI siège à La Haye depuis 2002.", niv: 2 },
        { q: "Une Polonaise vote en 2024 aux élections municipales de Lyon, où elle habite. Elle utilise :", choix: ["la nationalité française", "la citoyenneté européenne", "l'espace Schengen", "le traité de Rome"], bonne: 1, expl: "Maastricht donne ce droit aux citoyens de l'UE.", niv: 2 },
        { q: "Dix pays entrent dans l'Union européenne la même année, dont la Pologne. C'est en :", choix: ["1995", "2004", "2007", "2013"], bonne: 1, expl: "2007 : Roumanie et Bulgarie ; 2013 : Croatie.", niv: 2 },
        { q: "En 2003, les États-Unis attaquent un pays sans l'accord de l'ONU. Il s'agit de :", choix: ["le Koweït", "l'Afghanistan", "l'Irak", "la Serbie"], bonne: 2, expl: "La guerre d'Afghanistan de 2001 suit le 11 Septembre ; le Koweït est libéré en 1991.", niv: 2 },
        { q: "En 2005, un traité européen est rejeté par référendum en France. C'est :", choix: ["les accords de Schengen", "le traité de Maastricht", "le traité de Lisbonne", "le traité constitutionnel"], bonne: 3, expl: "Maastricht a été approuvé de justesse en 1992 ; Lisbonne a été ratifié par le Parlement.", niv: 2 },
        { q: "Pourquoi parle-t-on de « nouvelles conflictualités » après 1991 ?", choix: ["Les guerres civiles et les milices s'y multiplient", "Les guerres opposent encore deux blocs armés", "Les civils y sont protégés par l'ONU", "Les États-Unis n'interviennent plus"], bonne: 0, expl: "Milices, terroristes et civils pris pour cibles marquent ces conflits.", niv: 3 },
        { q: "Quelle affirmation sur l'Europe depuis 1992 est juste ?", choix: ["Elle abandonne l'euro après 2010", "Elle s'élargit sans crise ni rejet", "Elle s'approfondit et s'élargit, mais suscite aussi des rejets", "Elle refuse d'accueillir les anciens pays communistes de l'Est européen"], bonne: 2, expl: "Le non de 2005 et le Brexit montrent ces rejets ; 2004 accueille les pays de l'Est.", niv: 3 },
      ],
    },
    {
      chapitre: 'hg-g-8',
      fiche: `## La République française depuis les années 1990

### Une Constitution qui évolue
- La **Constitution de 1958** reste en vigueur, mais elle a été révisée plus de vingt fois. Une révision se fait par **référendum** ou par le **Congrès** (députés et sénateurs réunis à Versailles).
- Le **quinquennat** : la durée du mandat présidentiel passe de 7 à **5 ans** par le référendum de **2000** (appliqué en 2002). Les élections législatives suivent désormais la présidentielle, ce qui rend la cohabitation rare.
- La révision de **2008** limite le président à **deux mandats consécutifs** et crée la **question prioritaire de constitutionnalité** (QPC, en vigueur en 2010) : tout justiciable peut contester une loi déjà votée devant le **Conseil constitutionnel**.
- La **Charte de l'environnement** est intégrée au bloc constitutionnel en **2005**.
- En **2024**, la liberté de recourir à l'**IVG** est inscrite dans la Constitution.

### Une République décentralisée
- Depuis **2003**, l'article 1er dit que l'organisation de la République est **décentralisée**.
- Les collectivités (communes, départements, **régions**) gèrent les lycées, les transports, l'action sociale.
- En **2016**, les régions de métropole passent de 22 à **13** pour peser davantage.

### L'égalité et de nouveaux droits
- **Parité** : la révision de 1999 et la loi du **6 juin 2000** obligent les partis à présenter autant de femmes que d'hommes à de nombreuses élections. Les femmes sont plus présentes à l'Assemblée, mais restent minoritaires dans les exécutifs locaux.
- Le **PACS** (pacte civil de solidarité, **1999**) reconnaît les couples non mariés, de même sexe ou non. Le **mariage pour tous** (loi du **17 mai 2013**) ouvre le mariage et l'adoption aux couples de même sexe.
- La protection sociale s'étend : **RMI** (1988), puis **RSA** (2009) ; **CMU** (couverture maladie universelle, 1999).
- Le **Défenseur des droits** (créé en 2008) défend les citoyens face aux administrations et aux discriminations.

### La laïcité
- La **loi du 9 décembre 1905** sépare les Églises et l'État : l'État garantit la **liberté de conscience** et ne finance aucun culte.
- La **loi du 15 mars 2004** interdit les **signes religieux ostensibles** à l'école publique (élèves).
- La loi de **2010** interdit de dissimuler son visage dans l'espace public.
- La laïcité est un **principe constitutionnel** (article 1er : la France est une République « laïque »).

### Les citoyens et la République
- Le **service militaire** obligatoire est **suspendu** en **1997** ; il est remplacé par une journée défense et citoyenneté.
- La **participation électorale** recule : l'**abstention** dépasse la moitié des inscrits aux premiers tours des législatives de 2017 et 2022.
- L'engagement prend d'autres formes : **associations**, manifestations, mouvements comme les **gilets jaunes** (2018-2019), pétitions, conventions citoyennes (climat, 2019-2020).
- La République doit répondre au **terrorisme** : attentats de 2015 (*Charlie Hebdo* en janvier, Paris et Saint-Denis le 13 novembre), état d'urgence de 2015 à 2017.

### À retenir pour le bac
- Les révisions clés : 2000 (quinquennat), 2003 (décentralisation), 2008 (QPC, deux mandats), 2024 (IVG).
- De nouveaux droits : parité (2000), PACS (1999), mariage pour tous (2013).
- Piège : la loi de 2004 s'applique aux élèves de l'école publique, pas à tout l'espace public.`,
      cartes: [
        { q: "Comment révise-t-on la Constitution de 1958 ?", r: "Par référendum ou par un vote du Congrès, qui réunit députés et sénateurs à Versailles." },
        { q: "Qu'est-ce que le quinquennat ?", r: "Le mandat présidentiel de 5 ans, adopté par le référendum de 2000 et appliqué depuis 2002." },
        { q: "Qu'est-ce que la QPC ?", r: "La question prioritaire de constitutionnalité : depuis 2010, un justiciable peut contester une loi devant le Conseil constitutionnel." },
        { q: "Que dit l'article 1er depuis 2003 ?", r: "Que l'organisation de la République française est décentralisée." },
        { q: "Combien de régions compte la métropole depuis 2016 ?", r: "Treize, contre 22 auparavant." },
        { q: "Qu'impose la loi sur la parité du 6 juin 2000 ?", r: "Que les partis présentent autant de femmes que d'hommes aux élections à scrutin de liste." },
        { q: "Qu'est-ce que le PACS ?", r: "Le pacte civil de solidarité, créé en 1999 : un contrat d'union entre deux personnes, de même sexe ou non." },
        { q: "Que permet la loi du 17 mai 2013 ?", r: "Le mariage et l'adoption pour les couples de même sexe : c'est le mariage pour tous." },
        { q: "Que dit la loi du 9 décembre 1905 ?", r: "Elle sépare les Églises et l'État : liberté de conscience garantie, aucun culte reconnu ni financé." },
        { q: "Qu'interdit la loi du 15 mars 2004 ?", r: "Le port de signes religieux ostensibles par les élèves des écoles, collèges et lycées publics." },
        { q: "Quand le service militaire obligatoire est-il suspendu ?", r: "En 1997 ; il est remplacé par la journée défense et citoyenneté." },
        { q: "Qu'est-ce que l'abstention ?", r: "Le fait de ne pas voter alors qu'on est inscrit. Elle dépasse 50 % aux premiers tours des législatives de 2017 et 2022." },
        { q: "Que devient l'IVG dans la Constitution en 2024 ?", r: "La liberté de recourir à l'IVG y est inscrite, par un vote du Congrès en mars 2024." },
        { q: "Qu'est-ce que le Défenseur des droits ?", r: "Une autorité indépendante, créée en 2008, qui aide les citoyens face aux administrations et aux discriminations." },
      ],
      quiz: [
        { q: "Le mandat présidentiel passe à cinq ans à la suite du référendum de :", choix: ["1962", "2000", "2008", "1958"], bonne: 1, expl: "1962 instaure l'élection directe ; 2008 limite à deux mandats consécutifs.", niv: 1 },
        { q: "La loi qui sépare les Églises et l'État date de :", choix: ["2004", "1958", "1905", "1946"], bonne: 2, expl: "La loi de 2004 porte sur les signes religieux à l'école.", niv: 1 },
        { q: "Le mariage pour les couples de même sexe est ouvert en :", choix: ["2008", "1999", "2004", "2013"], bonne: 3, expl: "1999 est la création du PACS.", niv: 1 },
        { q: "Un avocat conteste devant le Conseil constitutionnel une loi appliquée à son client. Il utilise :", choix: ["la question prioritaire de constitutionnalité", "le référendum d'initiative partagée devant le Sénat", "la motion de censure", "le droit de dissolution"], bonne: 0, expl: "La QPC existe depuis 2010.", niv: 2 },
        { q: "Un parti doit alterner femmes et hommes sur sa liste aux régionales. C'est l'effet de :", choix: ["la loi sur le quinquennat", "la loi sur la laïcité", "la décentralisation", "la loi sur la parité"], bonne: 3, expl: "La loi du 6 juin 2000 impose la parité pour les scrutins de liste.", niv: 2 },
        { q: "Une région finance la rénovation d'un lycée. Elle exerce une compétence issue de :", choix: ["la décentralisation", "la cohabitation", "la parité", "la QPC"], bonne: 0, expl: "Les lycées sont confiés aux régions depuis les lois de décentralisation.", niv: 2 },
        { q: "Une lycéenne d'un lycée public doit retirer un grand signe religieux en classe. C'est l'application de la loi de :", choix: ["2010", "1905", "2004", "2013"], bonne: 2, expl: "La loi de 2010 porte sur la dissimulation du visage dans l'espace public.", niv: 2 },
        { q: "Depuis 2016, le nombre de régions de métropole est de :", choix: ["27", "22", "18", "13"], bonne: 3, expl: "On compte 18 régions avec l'outre-mer ; 27 est le nombre de pays de l'UE.", niv: 2 },
        { q: "Pourquoi le quinquennat rend-il la cohabitation rare ?", choix: ["Il interdit au président de nommer un Premier ministre d'un autre parti", "Il place les législatives juste après la présidentielle", "Il supprime les élections législatives", "Il donne au Sénat le choix du Premier ministre"], bonne: 1, expl: "Les électeurs confirment souvent leur choix quelques semaines après la présidentielle.", niv: 3 },
        { q: "Quelle affirmation sur la citoyenneté depuis les années 1990 est juste ?", choix: ["Le vote recule mais d'autres formes d'engagement se développent", "L'abstention a presque disparu grâce au vote rendu obligatoire en 2017", "Le service militaire a été rétabli en 2019", "Les associations ont été interdites"], bonne: 0, expl: "Associations, pétitions, mouvements sociaux compensent en partie l'abstention.", niv: 3 },
      ],
    },
    {
      chapitre: 'hg-g-9',
      fiche: `## Mers et océans : au cœur de la mondialisation

### Des routes essentielles pour le commerce
- La **maritimisation** de l'économie : environ **80 % du commerce mondial en volume** passe par la mer, car c'est le transport le moins cher pour les grandes quantités.
- La **conteneurisation** a tout changé : une boîte standard (unité de mesure : l'**EVP**, équivalent vingt pieds) passe du navire au train ou au camion sans être ouverte. Les plus grands **porte-conteneurs** transportent plus de 24 000 EVP.
- Les flux suivent de grandes **routes maritimes**, surtout entre l'Asie orientale, l'Europe et l'Amérique du Nord.
- Les **ports** sont des **interfaces** entre la terre et la mer. Les premiers ports à conteneurs du monde sont en Asie : **Shanghai** (premier), **Singapour**, Ningbo, Shenzhen. **Rotterdam** est le premier port européen.
- Une **façade maritime** est un ensemble de ports proches qui desservent un même arrière-pays (l'**hinterland**). La **Northern Range** va du Havre à Hambourg.

### Des passages stratégiques
- Les **détroits** et les **canaux** sont des points de passage obligés : on les appelle **verrous** ou points de congestion.
- Détroits : **Malacca** (entre l'océan Indien et le Pacifique), **Ormuz** (sortie du golfe Persique, pour le pétrole), **Bab el-Mandeb** (entrée de la mer Rouge), **Pas-de-Calais** (le plus fréquenté du monde), Gibraltar.
- Canaux : **Suez** (ouvert en **1869**) et **Panama** (ouvert en **1914**, élargi en 2016).
- Leur fermeture perturbe le monde entier : blocage du canal de Suez par un porte-conteneurs en mars 2021, attaques de navires en mer Rouge à partir de fin 2023.
- Sous la mer passent les **câbles sous-marins**, qui transportent l'essentiel des données d'Internet entre les continents.

### Appropriation : qui possède la mer ?
- La **convention de Montego Bay** (Convention des Nations unies sur le droit de la mer, **1982**) découpe les mers :
- **Mer territoriale** : jusqu'à **12 milles marins** (environ 22 km) des côtes ; l'État y est souverain.
- **Zone économique exclusive** (**ZEE**) : jusqu'à **200 milles marins** (environ 370 km) ; l'État y exploite seul les ressources (pêche, pétrole, minerais).
- **Haute mer** : au-delà, elle n'appartient à personne et la **navigation y est libre**. Elle couvre près des deux tiers des océans.
- Des **tensions** naissent de ces limites : en **mer de Chine méridionale**, la Chine revendique presque toute la mer et construit des îles artificielles dans les **Spratleys**, contre les Philippines, le Vietnam ou la Malaisie.

### Protéger et sécuriser
- Menaces : **piraterie** (golfe d'Aden, golfe de Guinée), **surpêche**, **pollution** (plastique, marées noires), réchauffement et acidification des océans.
- Réponses : patrouilles internationales (opération européenne **Atalante** contre les pirates somaliens depuis 2008), **aires marines protégées**, **traité sur la haute mer** adopté à l'ONU en **2023** pour protéger la biodiversité au-delà des ZEE.
- La fonte de la banquise ouvre de nouvelles routes dans l'**Arctique**, convoitées par la Russie, la Chine, les États-Unis.

### La France, une puissance maritime ?
- La France possède la **deuxième ZEE du monde** (environ **10 millions de km²**), juste derrière celle des États-Unis. Plus de **95 %** de cette ZEE se trouve en **outre-mer** (Polynésie, Nouvelle-Calédonie, Terres australes…).
- Sa **Marine nationale** est l'une des rares à pouvoir agir partout : porte-avions **Charles-de-Gaulle**, sous-marins nucléaires lanceurs d'engins (base de l'Île Longue, près de Brest).
- **CMA CGM**, dont le siège est à **Marseille**, est l'un des trois premiers armateurs mondiaux.
- Mais ses ports restent modestes : **Marseille-Fos** (premier port français en tonnage) et **Le Havre** (premier pour les conteneurs) sont loin derrière Rotterdam et Anvers.

### À retenir pour le bac
- Le vocabulaire : maritimisation, conteneurisation, interface, façade, hinterland, verrou, ZEE.
- Montego Bay : 12 milles, 200 milles, haute mer.
- Piège : la France est une grande puissance maritime par sa ZEE et sa marine, beaucoup moins par ses ports.`,
      cartes: [
        { q: "Qu'est-ce que la maritimisation ?", r: "Le fait que les échanges mondiaux passent de plus en plus par la mer : environ 80 % du commerce mondial en volume." },
        { q: "Qu'est-ce que la conteneurisation ?", r: "Le transport des marchandises dans des boîtes standard, qui passent du navire au train ou au camion sans être ouvertes." },
        { q: "Que signifie EVP ?", r: "Équivalent vingt pieds : l'unité qui mesure les conteneurs et la capacité des navires et des ports." },
        { q: "Quel est le premier port à conteneurs du monde ?", r: "Shanghai, en Chine. Rotterdam est le premier port européen." },
        { q: "Qu'est-ce qu'une interface ?", r: "Une zone de contact entre deux espaces différents, qui favorise les échanges, comme un port entre la terre et la mer." },
        { q: "Qu'est-ce que l'hinterland ?", r: "L'arrière-pays desservi par un port : la zone d'où partent et où arrivent ses marchandises." },
        { q: "Qu'est-ce que la Northern Range ?", r: "La première façade maritime d'Europe, du Havre à Hambourg, avec Rotterdam et Anvers." },
        { q: "Pourquoi le détroit d'Ormuz est-il stratégique ?", r: "Il est la sortie du golfe Persique : une grande partie du pétrole exporté dans le monde y passe." },
        { q: "Quand les canaux de Suez et de Panama ont-ils ouvert ?", r: "Suez en 1869, Panama en 1914." },
        { q: "Qu'est-ce que la mer territoriale ?", r: "La bande de mer jusqu'à 12 milles marins des côtes, où l'État est souverain comme sur terre." },
        { q: "Qu'est-ce qu'une ZEE ?", r: "Une zone économique exclusive, jusqu'à 200 milles des côtes, où l'État exploite seul les ressources." },
        { q: "Qu'est-ce que la haute mer ?", r: "L'espace au-delà des ZEE : il n'appartient à aucun État et la navigation y est libre." },
        { q: "Pourquoi la mer de Chine méridionale est-elle un espace de tensions ?", r: "La Chine revendique presque toute cette mer et y construit des îles artificielles, contre les autres États riverains." },
        { q: "Quelle est la taille de la ZEE française ?", r: "Environ 10 millions de km², la deuxième du monde, à plus de 95 % en outre-mer." },
        { q: "Que prévoit le traité sur la haute mer de 2023 ?", r: "Protéger la biodiversité marine au-delà des ZEE, notamment par des aires marines protégées." },
      ],
      quiz: [
        { q: "La part du commerce mondial en volume qui passe par la mer est d'environ :", choix: ["65 %", "20 %", "50 %", "80 %"], bonne: 3, expl: "La mer est le moyen le moins cher pour transporter de grandes quantités.", niv: 1 },
        { q: "La ZEE s'étend jusqu'à :", choix: ["12 milles marins", "200 milles marins", "24 milles marins", "350 milles marins"], bonne: 1, expl: "12 milles est la limite de la mer territoriale.", niv: 1 },
        { q: "La convention qui organise le droit de la mer est signée à :", choix: ["Kyoto en 1997", "Bretton Woods en 1944", "San Francisco en 1945", "Montego Bay en 1982"], bonne: 3, expl: "Elle crée la mer territoriale, la ZEE et la haute mer.", niv: 1 },
        { q: "Un porte-conteneurs part de Shanghai pour Rotterdam par la route la plus courte. Il franchit :", choix: ["Ormuz et le Bosphore", "Panama et Gibraltar", "Malacca, Bab el-Mandeb et Suez", "le Pas-de-Calais et Panama"], bonne: 2, expl: "La route Asie-Europe passe par l'océan Indien et la mer Rouge.", niv: 2 },
        { q: "Un pêcheur philippin est chassé par des garde-côtes chinois à 150 milles des Philippines. Le conflit porte sur :", choix: ["une ZEE disputée", "la haute mer", "un canal international", "une mer territoriale reconnue"], bonne: 0, expl: "À 150 milles, on est dans la ZEE revendiquée par les Philippines.", niv: 2 },
        { q: "Une carte montre les ports du Havre, Anvers, Rotterdam et Hambourg. Ils forment :", choix: ["la Northern Range", "un hinterland", "une ZEE", "un détroit"], bonne: 0, expl: "C'est la première façade maritime européenne.", niv: 2 },
        { q: "La ZEE française se trouve surtout :", choix: ["en Méditerranée", "en outre-mer", "dans la Manche", "dans le golfe de Gascogne"], bonne: 1, expl: "Plus de 95 % de la ZEE française entoure les territoires d'outre-mer.", niv: 2 },
        { q: "Le canal de Panama ouvre en :", choix: ["1945", "1869", "1914", "2016"], bonne: 2, expl: "1869 est l'ouverture de Suez ; 2016, l'élargissement de Panama.", niv: 2 },
        { q: "Pourquoi le blocage d'un détroit inquiète-t-il le monde entier ?", choix: ["Il oblige à reconstruire les ports", "Il ferme aux pêcheurs les ZEE des pays riverains du détroit", "Il interdit la navigation en haute mer", "Il bloque des usines qui travaillent en flux tendus"], bonne: 3, expl: "Les usines travaillent en flux tendus ; un retard bloque toute la chaîne.", niv: 3 },
        { q: "Laquelle n'est **pas** un atout maritime de la France ?", choix: ["des ports parmi les premiers du monde", "la deuxième ZEE du monde", "un grand armateur mondial", "une marine capable d'intervenir loin de ses côtes"], bonne: 0, expl: "Marseille-Fos et Le Havre restent loin derrière les grands ports européens.", niv: 3 },
      ],
    },
    {
      chapitre: 'hg-g-10',
      fiche: `## Des territoires inégalement intégrés : coopérations, tensions et régulations

### La mondialisation, une mise en relation inégale
- La **mondialisation** est la mise en relation des différentes parties du monde par des **flux** : marchandises, capitaux, personnes, informations.
- Ses **acteurs** : les **États**, les **firmes transnationales** (FTN, entreprises présentes dans plusieurs pays), les organisations internationales, les ONG, les individus (migrants, touristes, consommateurs).
- Les FTN organisent des **chaînes de valeur mondiales** : un téléphone est conçu aux États-Unis, ses composants viennent d'Asie, il est assemblé en Chine. Elles investissent à l'étranger par des **IDE** (investissements directs à l'étranger).

### Des territoires intégrés
- Les **métropoles mondiales** (New York, Londres, Tokyo, Paris, Shanghai…) concentrent sièges sociaux, Bourses, universités, aéroports. Ce sont des **centres d'impulsion**.
- Trois grands pôles dominent : **Amérique du Nord**, **Europe de l'Ouest**, **Asie orientale**.
- Les **littoraux** et les **façades maritimes** attirent usines et ports : c'est la **littoralisation**.
- Les **zones économiques spéciales** (ZES), comme **Shenzhen** (créée en **1980** en Chine), attirent les investisseurs par des avantages fiscaux.
- Les **interfaces**, comme la frontière États-Unis-Mexique, mettent en contact des pays de niveaux différents : les **maquiladoras** mexicaines assemblent des produits pour le marché américain.

### Des territoires en marge
- Les **marges** sont peu intégrées : une grande partie de l'Afrique subsaharienne, le **Sahel**, l'intérieur des continents, les montagnes, beaucoup d'espaces ruraux.
- Les **pays les moins avancés** (PMA) participent très peu au commerce mondial.
- Les inégalités existent à toutes les **échelles** : entre pays, entre régions d'un même pays (littoral chinois et Chine de l'Ouest), et dans une même ville (quartiers d'affaires et bidonvilles de Bombay).

### Coopérer et réguler à l'échelle mondiale
- L'**OMC** (Organisation mondiale du commerce, créée en **1995**, qui succède au GATT de 1947) fixe les règles du commerce et règle les conflits entre États membres.
- Le **G20** (créé en 1999, sommets des chefs d'État depuis la crise de **2008**) réunit les grandes économies pour coordonner leurs politiques.
- Les ONG et les consommateurs poussent à une autre régulation : labels de **commerce équitable**, devoir de vigilance des entreprises.

### Coopérer à l'échelle régionale
- Les États se regroupent dans des **organisations régionales** : l'**ASEAN** (Asie du Sud-Est, 1967), le **Mercosur** (Amérique du Sud, 1991), l'**ALENA** (1994) remplacé en **2020** par l'**ACEUM** (États-Unis, Mexique, Canada), la **zone de libre-échange continentale africaine** (ZLECAf, échanges lancés en 2021).
- L'**Union européenne** est l'organisation régionale la plus intégrée.

### Des tensions à toutes les échelles
- **Mondiale** : **guerre commerciale** entre la Chine et les États-Unis à partir de **2018** (hausses de droits de douane), rivalité pour les puces électroniques et les terres rares.
- **Régionale** : partage de l'**eau** (le grand barrage de la Renaissance construit par l'Éthiopie sur le Nil inquiète l'Égypte).
- **Locale** : **conflits d'usage** autour d'un projet (aéroport de Notre-Dame-des-Landes, abandonné en 2018), contestation d'une usine ou d'un entrepôt.
- Depuis la crise du covid-19, certains États veulent **relocaliser** des productions stratégiques (médicaments, puces).

### À retenir pour le bac
- Un territoire est plus ou moins intégré selon ses atouts : position, infrastructures, main-d'œuvre, stabilité.
- Toujours raisonner à plusieurs échelles (mondiale, régionale, locale).
- Piège : intégration ne veut pas dire développement pour tous ; une ZES peut cacher de fortes inégalités.`,
      cartes: [
        { q: "Qu'est-ce que la mondialisation ?", r: "La mise en relation des différentes parties du monde par des flux de marchandises, de capitaux, de personnes et d'informations." },
        { q: "Qu'est-ce qu'une firme transnationale ?", r: "Une entreprise qui a des filiales, des usines ou des bureaux dans plusieurs pays." },
        { q: "Qu'est-ce qu'un IDE ?", r: "Un investissement direct à l'étranger : une entreprise crée ou achète une usine ou une filiale dans un autre pays." },
        { q: "Qu'est-ce qu'une chaîne de valeur mondiale ?", r: "La découpe de la production d'un bien entre plusieurs pays : conception, composants, assemblage, vente." },
        { q: "Qu'est-ce qu'une métropole mondiale ?", r: "Une très grande ville qui commande l'économie mondiale : sièges de FTN, Bourse, universités, grand aéroport." },
        { q: "Qu'est-ce que la littoralisation ?", r: "La concentration des hommes et des activités sur les littoraux, attirés par les ports et les échanges." },
        { q: "Qu'est-ce qu'une zone économique spéciale ?", r: "Une zone qui attire les investisseurs étrangers par des avantages fiscaux et douaniers, comme Shenzhen depuis 1980." },
        { q: "Qu'est-ce qu'une maquiladora ?", r: "Une usine mexicaine, près de la frontière, qui assemble des produits pour le marché américain." },
        { q: "Qu'est-ce qu'une marge dans la mondialisation ?", r: "Un territoire peu relié aux flux mondiaux, comme le Sahel ou des espaces de montagne." },
        { q: "Quel est le rôle de l'OMC ?", r: "Fixer les règles du commerce international et régler les différends entre États. Elle est créée en 1995." },
        { q: "Qu'est-ce que le G20 ?", r: "Un groupe qui réunit les grandes économies du monde pour coordonner leurs politiques, au niveau des chefs d'État depuis 2008." },
        { q: "Qu'est-ce que le Mercosur ?", r: "Le marché commun d'Amérique du Sud, créé en 1991, autour du Brésil et de l'Argentine." },
        { q: "Qu'est-ce qu'un conflit d'usage ?", r: "Une opposition entre acteurs qui veulent utiliser un même espace de façons différentes, comme pour Notre-Dame-des-Landes." },
        { q: "Qu'est-ce que la guerre commerciale sino-américaine ?", r: "Depuis 2018, les États-Unis et la Chine augmentent mutuellement leurs droits de douane." },
      ],
      quiz: [
        { q: "L'Organisation mondiale du commerce est créée en :", choix: ["1986", "1947", "1967", "1995"], bonne: 3, expl: "1947 est la création du GATT, qu'elle remplace.", niv: 1 },
        { q: "Une entreprise présente dans plusieurs pays par ses filiales est :", choix: ["une ONG", "une firme transnationale", "une zone franche", "une organisation régionale"], bonne: 1, expl: "Les FTN organisent la production à l'échelle mondiale.", niv: 1 },
        { q: "L'organisation régionale d'Asie du Sud-Est s'appelle :", choix: ["l'ACEUM", "le Mercosur", "l'ASEAN", "la ZLECAf"], bonne: 2, expl: "Le Mercosur est sud-américain, l'ACEUM nord-américain.", niv: 1 },
        { q: "Une entreprise française rachète une usine au Maroc. C'est :", choix: ["un investissement direct à l'étranger", "une délocalisation forcée par l'OMC", "un flux de main-d'œuvre", "une zone économique exclusive"], bonne: 0, expl: "Un IDE est un investissement dans une activité à l'étranger.", niv: 2 },
        { q: "Une usine de Tijuana assemble des téléviseurs vendus aux États-Unis. C'est :", choix: ["un centre d'impulsion", "une zone économique spéciale chinoise", "une maquiladora", "une métropole mondiale"], bonne: 2, expl: "Les maquiladoras longent la frontière mexicaine.", niv: 2 },
        { q: "Une ville concentre une Bourse, des sièges de FTN et un grand aéroport international. C'est :", choix: ["une marge", "une métropole mondiale", "une maquiladora", "une interface maritime"], bonne: 1, expl: "Elle commande les flux de la mondialisation.", niv: 2 },
        { q: "Des agriculteurs s'opposent à un projet d'aéroport sur leurs terres. C'est :", choix: ["un investissement étranger", "une guerre commerciale", "une régulation mondiale", "un conflit d'usage"], bonne: 3, expl: "Deux usages du même espace s'opposent, à l'échelle locale.", niv: 2 },
        { q: "La zone économique spéciale de Shenzhen est créée en :", choix: ["1980", "1949", "2001", "1995"], bonne: 0, expl: "2001 est l'entrée de la Chine à l'OMC.", niv: 2 },
        { q: "Pourquoi l'intérieur de la Chine est-il moins intégré que le littoral ?", choix: ["Il est interdit aux firmes étrangères depuis 1980", "Il est loin des ports et attire moins d'investissements", "Il est couvert de forêts protégées par l'État", "Il appartient à une autre organisation régionale que le littoral"], bonne: 1, expl: "La littoralisation concentre ports, ZES et investissements sur la côte.", niv: 3 },
        { q: "Quelle affirmation sur l'intégration à la mondialisation est juste ?", choix: ["Elle crée des inégalités à toutes les échelles, même dans une ville", "Elle profite de la même façon aux habitants", "Elle s'arrête aux pays du Nord", "Elle fait disparaître les frontières et les écarts entre les pays du monde"], bonne: 0, expl: "Quartiers d'affaires et bidonvilles coexistent à Bombay.", niv: 3 },
      ],
    },
    {
      chapitre: 'hg-g-11',
      fiche: `## La France : rayonnement international et inégale attractivité

### Une puissance qui rayonne dans le monde
- La France est **membre permanent du Conseil de sécurité** de l'ONU, avec droit de veto, et une **puissance nucléaire**.
- Elle accueille des **organisations internationales** : l'**UNESCO** et l'**OCDE** à Paris, le **Parlement européen** et le **Conseil de l'Europe** à Strasbourg.
- Son **réseau diplomatique** est l'un des plus étendus du monde, et son armée intervient loin (Sahel de 2013 à 2022).
- Grâce à l'**outre-mer**, elle est présente sur tous les océans ; le **Centre spatial guyanais** à **Kourou** lance les fusées européennes.

### Un rayonnement culturel : le soft power
- Le **soft power** est la capacité à influencer par l'attrait, sans contrainte : langue, culture, mode de vie.
- La **francophonie** : environ **320 millions** de personnes parlent français. L'**Organisation internationale de la Francophonie** (OIF) réunit des dizaines d'États.
- La France est la **première destination touristique du monde** (environ **100 millions** d'arrivées de touristes internationaux par an). Paris, la Côte d'Azur, les Alpes, les châteaux de la Loire en sont les hauts lieux.
- Le **luxe** (LVMH, premier groupe mondial du luxe), la gastronomie (le repas gastronomique des Français est inscrit au patrimoine immatériel de l'UNESCO en **2010**), le cinéma et les grands événements (Jeux olympiques de Paris **2024**) renforcent son image.

### Une puissance économique attractive
- La France attire les investisseurs étrangers : elle est **le premier pays européen** pour le nombre de projets d'**investissements étrangers** chaque année depuis 2019.
- Ses atouts : position au cœur de l'Europe, bonnes **infrastructures** (TGV depuis 1981, autoroutes, aéroport de **Roissy-Charles-de-Gaulle**, tunnel sous la Manche depuis **1994**), main-d'œuvre qualifiée, recherche.
- Ses points forts à l'export : **aéronautique** (**Airbus** à **Toulouse**), luxe et cosmétiques, pharmacie, vins et produits agricoles.
- Ses faiblesses : un **déficit commercial** important, une industrie qui a reculé (**désindustrialisation**), un coût du travail élevé.

### Des territoires inégalement attractifs
- **Paris** est une **ville mondiale** : quartier d'affaires de **La Défense**, sièges de grandes entreprises, universités, tourisme. L'Île-de-France produit environ 30 % de la richesse du pays.
- Les grandes **métropoles** régionales (Lyon, Toulouse, Bordeaux, Nantes, Lille, Marseille) attirent emplois et habitants.
- Les **littoraux**, l'Ouest et le Sud, ainsi que les **régions frontalières** (Alsace, Genevois), sont dynamiques.
- Les espaces **moins attractifs** : les anciens bassins industriels du **Nord** et de l'**Est** en reconversion, les espaces ruraux isolés de la **diagonale des faibles densités** (des Ardennes et de la Meuse jusqu'aux Landes), une partie de l'**outre-mer** (chômage élevé).
- La **métropolisation** renforce ces écarts : les grandes villes concentrent les emplois les plus qualifiés.

### À retenir pour le bac
- Distinguer **rayonnement** (influence dans le monde) et **attractivité** (capacité à attirer touristes, investissements, habitants).
- Une attractivité **différenciée** : forte dans les métropoles, les littoraux et les régions frontalières, faible dans certains espaces ruraux et anciens bassins industriels.
- Piège : le premier rang touristique en nombre d'arrivées ne veut pas dire premier rang en recettes (les États-Unis gagnent plus).`,
      cartes: [
        { q: "Qu'est-ce que le rayonnement d'un pays ?", r: "Son influence dans le monde, par sa diplomatie, son armée, sa culture, sa langue et son économie." },
        { q: "Qu'est-ce que l'attractivité d'un territoire ?", r: "Sa capacité à attirer des habitants, des touristes, des entreprises et des investissements." },
        { q: "Qu'est-ce que le soft power ?", r: "La capacité d'un pays à influencer par l'attrait de sa culture, de sa langue et de son mode de vie, sans contrainte." },
        { q: "Quelles organisations internationales ont leur siège à Paris ?", r: "L'UNESCO et l'OCDE, par exemple." },
        { q: "Combien de personnes parlent français dans le monde ?", r: "Environ 320 millions, surtout en Afrique." },
        { q: "Quel rang touristique la France occupe-t-elle ?", r: "Première destination du monde, avec environ 100 millions d'arrivées de touristes internationaux par an." },
        { q: "À quoi sert le Centre spatial guyanais ?", r: "Il lance les fusées européennes depuis Kourou, en Guyane, près de l'équateur." },
        { q: "Qu'est-ce qu'un déficit commercial ?", r: "Une situation où un pays importe plus qu'il n'exporte en valeur." },
        { q: "Qu'est-ce que la désindustrialisation ?", r: "Le recul de la part de l'industrie dans l'emploi et la production d'un pays." },
        { q: "Qu'est-ce que La Défense ?", r: "Le grand quartier d'affaires de la métropole parisienne, qui accueille des sièges de grandes entreprises." },
        { q: "Qu'est-ce que la diagonale des faibles densités ?", r: "Une bande d'espaces ruraux peu peuplés, des Ardennes et de la Meuse jusqu'aux Landes." },
        { q: "Qu'est-ce que la métropolisation ?", r: "La concentration des populations, des activités et des pouvoirs dans les plus grandes villes." },
        { q: "Quand le tunnel sous la Manche est-il ouvert ?", r: "En 1994 ; il relie la France et le Royaume-Uni." },
        { q: "Où est le siège d'Airbus ?", r: "À Toulouse (Blagnac), cœur de l'industrie aéronautique européenne." },
      ],
      quiz: [
        { q: "La France est la première destination touristique mondiale par :", choix: ["le nombre d'arrivées internationales", "les recettes du tourisme", "le nombre d'hôtels de luxe", "les dépenses de ses habitants à l'étranger"], bonne: 0, expl: "En recettes, les États-Unis la devancent.", niv: 1 },
        { q: "L'UNESCO a son siège à :", choix: ["Bruxelles", "Strasbourg", "Genève", "Paris"], bonne: 3, expl: "Strasbourg accueille le Parlement européen et le Conseil de l'Europe.", niv: 1 },
        { q: "L'influence d'un pays par l'attrait de sa culture s'appelle :", choix: ["le hard power", "le soft power", "la métropolisation", "la littoralisation"], bonne: 1, expl: "Le hard power repose sur la force militaire ou économique.", niv: 1 },
        { q: "Une entreprise japonaise ouvre une usine en Alsace pour sa position au cœur de l'Europe. Cela illustre :", choix: ["la francophonie", "le rayonnement culturel", "l'attractivité de la France", "la désindustrialisation"], bonne: 2, expl: "Attirer un investissement étranger relève de l'attractivité.", niv: 2 },
        { q: "Un village de la Creuse perd ses habitants et ses commerces. Il fait partie de :", choix: ["un ancien bassin minier", "la Northern Range", "la diagonale des faibles densités", "la métropole lyonnaise"], bonne: 2, expl: "La Creuse est au cœur de cet espace rural peu peuplé.", niv: 2 },
        { q: "Une fusée européenne décolle de Guyane. Cela montre :", choix: ["la francophonie en Amérique du Sud", "le poids du tourisme en outre-mer", "la désindustrialisation de la métropole", "l'apport de l'outre-mer à la puissance française"], bonne: 3, expl: "Kourou, près de l'équateur, est un atout spatial.", niv: 2 },
        { q: "Un ancien bassin minier du Nord cherche à attirer de nouvelles usines. Il est en :", choix: ["littoralisation", "métropolisation", "reconversion", "rayonnement"], bonne: 2, expl: "La reconversion remplace les activités disparues.", niv: 2 },
        { q: "La part de la richesse française produite en Île-de-France est d'environ :", choix: ["30 %", "40 %", "50 %", "70 %"], bonne: 0, expl: "La région capitale concentre emplois qualifiés et sièges sociaux.", niv: 2 },
        { q: "Pourquoi parle-t-on d'attractivité « différenciée » de la France ?", choix: ["Le pays attire bien plus de touristes que d'investisseurs étrangers chaque année", "Métropoles et littoraux attirent bien plus que certains espaces ruraux", "Seule Paris attire des étrangers", "L'outre-mer est plus attractif que la métropole"], bonne: 1, expl: "L'attractivité varie fortement d'un territoire à l'autre.", niv: 3 },
        { q: "Quelle affirmation sur la puissance française est juste ?", choix: ["Elle combine soft power et moyens militaires, mais son commerce est déficitaire", "Elle exporte plus qu'elle n'importe depuis 2000", "Elle a perdu son influence mondiale avec la fin de son empire colonial en Afrique", "Elle repose surtout sur son industrie lourde"], bonne: 0, expl: "La France importe plus qu'elle n'exporte depuis le début des années 2000.", niv: 3 },
      ],
    },
    {
      chapitre: 'hg-g-12',
      fiche: `## L'Union européenne dans la mondialisation, la France et ses régions

### Un grand pôle de la mondialisation
- L'**Union européenne** compte **27 États** et environ **450 millions** d'habitants. C'est l'un des trois grands pôles de la mondialisation, avec l'Amérique du Nord et l'Asie orientale.
- Le **marché unique** (depuis le **1er janvier 1993**) garantit la **libre circulation** des marchandises, des services, des capitaux et des personnes.
- L'UE est l'une des **premières puissances commerciales** du monde. Sa **politique commerciale** est commune : c'est la Commission européenne qui négocie les accords pour les 27 (accord avec le Canada, le **CETA**, appliqué à titre provisoire depuis **2017** ; accord avec le Japon en 2019).
- L'**euro** est la deuxième monnaie du monde après le dollar.
- Son cœur économique est la **mégalopole européenne**, de Londres à Milan, et la façade de la **Northern Range**.

### Un espace plus ou moins ouvert
- Ouvert aux échanges, l'espace européen contrôle davantage ses frontières extérieures pour les **personnes** : l'**espace Schengen** supprime les contrôles intérieurs, mais renforce les contrôles extérieurs avec l'agence **Frontex** (créée en **2004**).
- La **Méditerranée** est une interface marquée par les **migrations** et des drames (naufrages au large de Lampedusa).
- L'UE défend aussi ses intérêts : normes sanitaires et environnementales imposées aux produits importés, enquêtes contre les produits subventionnés.
- Des inégalités internes demeurent entre un centre riche et des périphéries (Est, Sud, régions rurales).
- La **politique régionale** les réduit grâce à des fonds comme le **FEDER**. Les **régions ultrapériphériques** (RUP) sont des territoires de l'UE éloignés de l'Europe, dont six régions françaises d'outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte, Saint-Martin).

### Les territoires transfrontaliers
- Une **région transfrontalière** est un espace de part et d'autre d'une frontière, dont les habitants et les activités sont liés.
- Des centaines de milliers de **travailleurs frontaliers** habitent en France et travaillent en **Suisse**, au **Luxembourg**, en Allemagne ou en Belgique, attirés par des **salaires plus élevés**.
- Des effets contrastés : emplois et revenus pour les frontaliers, mais **prix des logements** en hausse côté français et embouteillages.
- La coopération s'organise : programmes européens **Interreg** (depuis 1990), **Eurométropole Lille-Kortrijk-Tournai** (premier groupement européen de coopération territoriale, **2008**), **Grand Genève**, **Eurodistrict Strasbourg-Ortenau**, tramway Strasbourg-Kehl (**2017**), aéroport franco-suisse de Bâle-Mulhouse.
- Certaines frontières restent des **coupures** : langue, règles sociales et fiscales différentes ; contrôles rétablis pendant le covid-19.

### La France et ses régions dans l'UE et la mondialisation
- Depuis **2016**, la France compte **13 régions métropolitaines** et 5 régions d'outre-mer.
- Les **régions** gèrent une grande partie des **fonds européens** (FEDER) sur leur territoire depuis 2014 : ils financent routes, numérique, aides aux entreprises.
- Chaque région a ses atouts dans la mondialisation : l'Île-de-France (ville mondiale), Auvergne-Rhône-Alpes (industrie, recherche, frontière suisse), Occitanie (aéronautique), Hauts-de-France (logistique, carrefour vers le Benelux et le Royaume-Uni), les régions d'outre-mer (ZEE, biodiversité).

### À retenir pour le bac
- L'UE : un pôle ouvert aux échanges, mais qui filtre les personnes à ses frontières extérieures.
- Le transfrontalier : coopération réelle mais **asymétries** (salaires, logement).
- Piège : Schengen et l'Union européenne ne coïncident pas (la Suisse est dans Schengen sans être dans l'UE ; l'Irlande est dans l'UE sans être dans Schengen).`,
      cartes: [
        { q: "Combien d'États compte l'Union européenne ?", r: "27 États depuis la sortie du Royaume-Uni en 2020, pour environ 450 millions d'habitants." },
        { q: "Qu'est-ce que le marché unique ?", r: "Depuis 1993, la libre circulation des marchandises, des services, des capitaux et des personnes entre les pays de l'UE." },
        { q: "Qui négocie les accords commerciaux de l'UE ?", r: "La Commission européenne, au nom des 27 : la politique commerciale est commune." },
        { q: "Qu'est-ce que le CETA ?", r: "L'accord de libre-échange entre l'UE et le Canada, appliqué à titre provisoire depuis 2017." },
        { q: "Qu'est-ce que Frontex ?", r: "L'agence européenne de garde-frontières, créée en 2004, qui aide à contrôler les frontières extérieures de l'espace Schengen." },
        { q: "Qu'est-ce que la mégalopole européenne ?", r: "L'axe le plus riche et le plus peuplé de l'UE, de Londres à Milan, en passant par le Benelux et la vallée du Rhin." },
        { q: "À quoi sert le FEDER ?", r: "Ce fonds européen de développement régional finance des projets pour réduire les écarts entre régions." },
        { q: "Qu'est-ce qu'une région ultrapériphérique ?", r: "Un territoire de l'UE très éloigné de l'Europe, comme La Réunion ou la Guyane, qui reçoit des aides spécifiques." },
        { q: "Qu'est-ce qu'un travailleur frontalier ?", r: "Une personne qui habite dans un pays et travaille dans un pays voisin, en rentrant chez elle chaque jour ou chaque semaine." },
        { q: "Pourquoi beaucoup de Français travaillent-ils en Suisse ou au Luxembourg ?", r: "Les salaires y sont nettement plus élevés." },
        { q: "Quel effet négatif le travail frontalier a-t-il côté français ?", r: "La hausse des prix des logements, qui pénalise les habitants qui travaillent en France." },
        { q: "Qu'est-ce qu'Interreg ?", r: "Un programme européen qui finance depuis 1990 des projets de coopération entre régions de part et d'autre des frontières." },
        { q: "Qu'est-ce que l'Eurométropole Lille-Kortrijk-Tournai ?", r: "Le premier groupement européen de coopération territoriale, créé en 2008 entre la France et la Belgique." },
        { q: "Combien la France compte-t-elle de régions ?", r: "18 : 13 en métropole depuis 2016, et 5 en outre-mer." },
        { q: "Schengen et l'UE sont-ils le même espace ?", r: "Non : la Suisse est dans Schengen sans être dans l'UE, l'Irlande est dans l'UE sans être dans Schengen." },
      ],
      quiz: [
        { q: "Le marché unique européen entre en vigueur en :", choix: ["1986", "1957", "1993", "2002"], bonne: 2, expl: "1986 est l'Acte unique qui le prépare ; 2002, l'arrivée des billets en euros.", niv: 1 },
        { q: "L'agence européenne de garde-frontières s'appelle :", choix: ["Europol", "Interreg", "le FEDER", "Frontex"], bonne: 3, expl: "Interreg et le FEDER financent des projets régionaux.", niv: 1 },
        { q: "Le premier groupement européen de coopération territoriale réunit :", choix: ["Strasbourg et Kehl", "Lille, Courtrai et Tournai", "Genève et Annecy", "Bâle et Mulhouse"], bonne: 1, expl: "L'Eurométropole est créée en 2008.", niv: 1 },
        { q: "Une infirmière habite à Thionville et travaille chaque jour à Luxembourg. Elle est :", choix: ["travailleuse détachée", "travailleuse frontalière", "migrante saisonnière", "expatriée définitive"], bonne: 1, expl: "Elle franchit chaque jour la frontière pour travailler.", niv: 2 },
        { q: "Une route en Guyane est financée en partie par l'Union européenne. Cela s'explique par :", choix: ["son statut de région ultrapériphérique", "son appartenance à l'espace Schengen depuis 1995", "l'accord du CETA", "le rôle de Frontex"], bonne: 0, expl: "Les RUP reçoivent des fonds européens adaptés à leur éloignement.", niv: 2 },
        { q: "Le Genevois français voit le prix de ses logements grimper. La cause principale est :", choix: ["la baisse de la population", "la fermeture de la frontière", "le départ des entreprises suisses vers la France voisine", "l'afflux de frontaliers bien payés en Suisse"], bonne: 3, expl: "Les salaires suisses font monter les prix de l'immobilier côté français.", niv: 2 },
        { q: "La Commission européenne négocie un accord commercial avec le Japon. Cela montre que :", choix: ["le Japon entre dans l'UE", "chaque État négocie seul ses accords avec les pays asiatiques", "l'UE refuse le libre-échange", "la politique commerciale est commune aux 27"], bonne: 3, expl: "Le commerce extérieur est une compétence de l'Union.", niv: 2 },
        { q: "Le nombre de régions de la France métropolitaine depuis 2016 est de :", choix: ["22", "13", "18", "27"], bonne: 1, expl: "18 régions en comptant les 5 d'outre-mer.", niv: 2 },
        { q: "Pourquoi dit-on que l'UE est un espace « plus ou moins ouvert » ?", choix: ["Elle échange beaucoup mais filtre l'entrée des personnes", "Elle ferme ses ports aux produits étrangers", "Elle accueille les migrants sans contrôle", "Elle refuse les investissements étrangers dans ses régions industrielles"], bonne: 0, expl: "Les marchandises circulent, les frontières extérieures sont surveillées.", niv: 3 },
        { q: "Quelle affirmation sur l'espace Schengen est juste ?", choix: ["Il supprime toutes les frontières extérieures", "Il regroupe exactement les pays de l'UE", "Il inclut des pays qui ne sont pas dans l'UE", "Il a été créé par le traité de Rome"], bonne: 2, expl: "La Suisse ou la Norvège sont dans Schengen sans être dans l'UE.", niv: 3 },
      ],
    },
  ],
  methode: [
    { id: "hg-g-m1", mat: "hg-g", titre: "Répondre à une question problématisée",
      formules: ["En quoi… ?", "Comment… ?", "Dans quelle mesure… ?", "Montrez que…"],
      vu: ["Banque nationale de sujets de terminale (2020-2021)", "Devoirs sur table de terminale"], pts: "10 points (environ 1 heure)",
      attendu: "Une réponse rédigée et organisée, plus courte qu'une dissertation : une introduction qui définit les termes et reprend la question, deux ou trois parties avec des connaissances précises (dates, acteurs, exemples), une conclusion qui répond clairement.",
      etapes: ["Souligner les mots clés et les bornes (dates, lieux) de la question", "Définir chaque mot clé au brouillon", "Lister au brouillon dates, acteurs, exemples et notions du chapitre", "Classer ces idées en deux ou trois parties qui répondent à la question", "Rédiger l'introduction : contexte, définitions, question, annonce du plan", "Rédiger chaque partie : une idée, puis un exemple daté et expliqué", "Conclure en répondant à la question en deux ou trois phrases"],
      mots: ["bornes chronologiques", "acteurs", "repères", "notion", "en effet", "par exemple", "ainsi", "cependant"],
      pieges: ["Raconter le cours dans l'ordre sans répondre à la question", "Oublier les dates et les exemples précis", "Sortir des bornes fixées par la question", "Une introduction sans définitions ni annonce du plan", "Une conclusion qui ne répond pas"],
      cas: "Sujet donné en devoir : la question porte sur la France de 1958 à 1969.",
      question: "Comment de Gaulle affirme-t-il la place de la France dans le monde entre 1958 et 1969 ?",
      modele: "Introduction : en 1958, la IVe République s'effondre dans la crise algérienne et de Gaulle revient au pouvoir. La France a perdu une partie de son empire et vit dans un monde dominé par deux superpuissances. Comment de Gaulle lui rend-il un rang ? I. Il règle la décolonisation : accords d'Évian en mars 1962, indépendance de l'Algérie, liens maintenus avec l'Afrique devenue indépendante en 1960. II. Il affirme l'indépendance nationale : bombe atomique en 1960, reconnaissance de la Chine populaire en 1964, sortie du commandement intégré de l'OTAN en 1966. III. Il fait de l'Europe un appui : traité de l'Élysée avec l'Allemagne en 1963, construction de la CEE. Conclusion : par la politique de grandeur, la France reste une puissance moyenne mais indépendante, sans quitter le camp occidental.",
      grille: ["Les mots clés et les bornes sont définis en introduction", "La réponse est organisée en parties annoncées", "Chaque partie contient au moins une date et un exemple précis", "Les connaissances répondent à la question, sans récit hors sujet", "La conclusion répond clairement à la question"] },
    { id: "hg-g-m2", mat: "hg-g", titre: "Analyser un ou deux documents",
      formules: ["En analysant le document, montrez que…", "Présentez le document, puis expliquez…", "Après avoir présenté les documents, vous montrerez…", "Consigne suivie d'un document (texte, carte, graphique, affiche)"],
      vu: ["Banque nationale de sujets de terminale (2020-2021)", "Devoirs sur table de terminale"], pts: "10 points (environ 1 heure)",
      attendu: "Présenter le document (nature, auteur, date, contexte), puis répondre à la consigne en prélevant des informations précises et en les expliquant avec ses connaissances. Le correcteur veut des citations courtes ou des chiffres, chacun suivi d'une explication.",
      etapes: ["Lire la consigne en premier : elle donne le plan", "Identifier la nature, l'auteur, la date, la source et le destinataire", "Souligner dans le document les passages qui répondent à la consigne", "Pour chaque passage, noter une connaissance du cours qui l'explique", "Rédiger une courte présentation du document", "Rédiger deux ou trois parties suivant la consigne : citation, explication, connaissance", "Finir par la portée ou les limites du document (point de vue de l'auteur, ce qu'il ne dit pas)"],
      mots: ["nature", "auteur", "contexte", "selon l'auteur", "le document montre", "cependant", "point de vue", "limite"],
      pieges: ["Paraphraser : recopier le document sans l'expliquer", "Réciter le cours sans citer le document", "Oublier de présenter le document", "Ne pas repérer le point de vue de l'auteur (propagande, discours officiel)", "Négliger les chiffres, la légende ou le titre d'une carte"],
      cas: "Document inventé pour l'entraînement : affiche de propagande soviétique de 1932 (décrite en mots). Au centre, Staline sourit devant des tracteurs alignés dans un champ ; en bas, le slogan « Le plan quinquennal en quatre ans ! ».",
      question: "Présentez le document, puis montrez ce qu'il révèle des méthodes du régime stalinien et de ce qu'il cache.",
      modele: "Ce document est une affiche de propagande soviétique de 1932, produite par le régime pendant le premier plan quinquennal et la collectivisation. Elle met en scène Staline, ce qui montre le culte de la personnalité. Les tracteurs et le slogan sur le plan réalisé en quatre ans vantent la modernisation et la réussite de l'économie planifiée. L'affiche vise à mobiliser les travailleurs et à créer l'image d'un homme nouveau tourné vers le progrès. Mais elle cache la réalité : la collectivisation forcée, la déportation des koulaks et la terrible famine de 1932-1933 en Ukraine. C'est un document de propagande, à lire avec esprit critique.",
      grille: ["La nature, la date et l'auteur du document sont présentés", "Au moins trois éléments sont prélevés dans le document", "Chaque élément est expliqué par une connaissance", "Le point de vue ou la limite du document est signalé", "La réponse suit la consigne"] },
    { id: "hg-g-m3", mat: "hg-g", titre: "Réaliser un croquis ou un schéma de géographie",
      formules: ["À partir du texte, réalisez un croquis sur…", "Complétez le fond de carte et sa légende", "Réalisez un schéma montrant…", "Donnez un titre à votre croquis"],
      vu: ["Banque nationale de sujets de terminale (2020-2021)", "Devoirs sur table de géographie"], pts: "10 points (environ 1 heure)",
      attendu: "Un croquis lisible sur le fond de carte fourni, avec un titre et une légende organisée en deux ou trois parties. Le correcteur note autant la légende (choix des informations, classement) que le dessin (couleurs justes, figurés propres, noms de lieux).",
      etapes: ["Lire le texte ou la consigne et souligner les informations à cartographier", "Classer les informations en deux ou trois parties de légende", "Choisir un figuré par information : surface (couleur), point, ligne ou flèche", "Construire la légende au brouillon avec des titres de parties", "Dessiner d'abord les surfaces, puis les points, puis les flèches", "Écrire les noms de lieux à l'horizontale, au crayon puis au feutre fin", "Donner un titre qui reprend le sujet"],
      mots: ["légende organisée", "figuré de surface", "figuré ponctuel", "figuré linéaire", "flux", "interface", "façade maritime", "hiérarchie"],
      pieges: ["Une légende en liste sans parties", "Trop de couleurs ou des couleurs sans logique (rouge et vert pour la même idée)", "Oublier le titre", "Des noms de lieux manquants ou écrits de travers", "Un figuré dans la légende qui n'apparaît pas sur la carte"],
      cas: "Fond de carte du monde, à décrire en mots ici. Le texte d'accompagnement parle des grandes routes maritimes, des trois façades principales, des détroits et canaux, et de la mer de Chine méridionale comme espace de tensions.",
      question: "Proposez la légende organisée d'un croquis intitulé « Mers et océans, au cœur de la mondialisation ».",
      modele: "Titre : Mers et océans, au cœur de la mondialisation. I. Des flux maritimes essentiels : grandes routes maritimes (flèches épaisses entre Asie orientale, Europe et Amérique du Nord) ; principales façades maritimes (bandes de couleur : Asie orientale, Northern Range, côte est des États-Unis) ; grands ports (points proportionnels : Shanghai, Singapour, Rotterdam). II. Des passages stratégiques : détroits (cercles rouges : Malacca, Ormuz, Bab el-Mandeb, Pas-de-Calais) ; canaux (cercles : Suez, Panama). III. Des espaces de tensions : mer de Chine méridionale disputée (hachures) ; zones de piraterie (étoiles : golfe d'Aden, golfe de Guinée) ; nouvelles routes de l'Arctique (flèches en pointillé).",
      grille: ["Le croquis a un titre", "La légende est organisée en parties titrées", "Chaque information a un figuré adapté (surface, point, ligne)", "Les lieux principaux sont nommés", "Le dessin est propre et lisible"] },
    { id: "hg-g-m4", mat: "hg-g", titre: "Maîtriser les repères : dater, situer, définir",
      formules: ["Donnez la date de…", "Situez sur la carte…", "Définissez…", "Complétez la frise chronologique"],
      vu: ["Évaluations de repères en début de devoir", "Questions courtes de la banque nationale de sujets"], pts: "2 à 5 points dans un devoir",
      attendu: "Des réponses exactes et brèves : une date précise, un lieu bien placé, une définition en une phrase avec un exemple. Ces repères servent ensuite dans toutes les réponses rédigées.",
      etapes: ["Apprendre les repères chapitre par chapitre, avec les cartes de l'app", "Pour une date, donner l'année, et le jour si c'est un grand repère (6 juin 1944)", "Pour une définition : la notion en une phrase, puis un exemple", "Pour un lieu : le situer par rapport à un océan, un pays, une ville connue", "Relire pour vérifier les chiffres et les orthographes"],
      mots: ["date", "repère", "définition", "exemple", "situer", "localiser"],
      pieges: ["Confondre deux dates proches (appel du 18 juin et armistice du 22 juin 1940)", "Confondre deux notions voisines (camp de concentration et centre de mise à mort, ZEE et mer territoriale)", "Une définition sans exemple", "Placer un détroit au mauvais endroit"],
      cas: "Début d'un devoir sur la guerre froide et la décolonisation.",
      question: "Donnez la date de la construction du mur de Berlin et de la conférence de Bandung, puis définissez le non-alignement.",
      modele: "Le mur de Berlin est construit dans la nuit du 13 août 1961. La conférence de Bandung a lieu en avril 1955. Le non-alignement est le refus de rejoindre l'un des deux blocs de la guerre froide ; le mouvement des non-alignés naît à Belgrade en 1961, autour de pays comme l'Inde, l'Égypte et la Yougoslavie.",
      grille: ["Les dates sont exactes", "La définition tient en une phrase claire", "Un exemple accompagne la définition", "L'orthographe des noms propres est juste"] },
  ],
  sujets: [
    { id: "hg-g-s1", matiere: "hg-g", titre: "Devoir d'entraînement 1 : guerre froide et mers et océans", duree: 120,
      enonce: `Devoir d'entraînement inventé pour réviser, sur le modèle de la banque nationale de sujets. Durée : 2 heures. Deux parties à traiter.

Partie 1 (histoire, 10 points) : question problématisée
En quoi la guerre froide oppose-t-elle deux modèles entre 1947 et 1962 ?
Vous rédigerez une réponse organisée avec une introduction, un développement et une conclusion.

Partie 2 (géographie, 10 points) : analyse de document
Document inventé pour l'entraînement : extrait d'un article d'un journal imaginaire, La Gazette des ports, publié en 2026.
« Chaque jour, près de 90 navires franchissent le détroit de Malacca, entre la Malaisie et l'Indonésie. Pétroliers venus du golfe Persique, porte-conteneurs chargés à Shanghai pour Rotterdam : tout ce qui relie l'Asie orientale à l'Europe passe par ce couloir large de quelques kilomètres à peine dans sa partie la plus étroite. Singapour, à sa sortie, en a fait l'un des premiers ports du monde. Mais ce passage concentre aussi les risques : collisions, actes de piraterie, pollution. Et la Chine, qui dépend de ce détroit pour son pétrole, cherche d'autres routes, par terre ou par l'Arctique. »
Consigne : présentez le document, puis montrez que le détroit de Malacca est un passage stratégique de la mondialisation, mais aussi un espace de vulnérabilités. Vous utiliserez vos connaissances.`,
      corrige: `Partie 1 : éléments de réponse
Introduction : la guerre froide est l'affrontement indirect entre les États-Unis et l'URSS à partir de 1947. Elle commence avec la doctrine Truman et la doctrine Jdanov ; 1962 marque son point le plus dangereux, la crise de Cuba. Elle oppose deux modèles : démocratie libérale et capitalisme d'un côté, communisme et économie planifiée de l'autre. Annonce : deux visions du monde, deux blocs organisés, des crises qui montrent l'affrontement.
I. Deux visions du monde : la doctrine Truman (mars 1947) propose l'endiguement ; la doctrine Jdanov (septembre 1947) décrit deux camps. Démocratie libérale, libertés et marché contre parti unique, idéologie communiste et planification.
II. Deux blocs organisés : plan Marshall (1947) d'un côté ; OTAN (1949) et pacte de Varsovie (1955) ; deux Allemagnes en 1949. La propagande vante chaque modèle ; la course aux armements mène à l'équilibre de la terreur.
III. Des crises qui montrent l'affrontement : blocus de Berlin (1948-1949), guerre de Corée (1950-1953), mur de Berlin (13 août 1961), qui empêche les habitants de RDA de fuir vers l'Ouest et montre l'échec du modèle soviétique à les retenir, crise de Cuba (octobre 1962).
Conclusion : entre 1947 et 1962, deux modèles politiques, économiques et culturels s'affrontent partout sauf directement ; après Cuba, les deux Grands choisissent la détente.

Partie 2 : éléments de réponse
Présentation : extrait d'un article de presse inventé, de 2026, sur le détroit de Malacca, en Asie du Sud-Est, entre l'océan Indien et le Pacifique.
I. Un passage stratégique : environ 90 navires par jour, pétroliers et porte-conteneurs ; il relie l'Asie orientale à l'Europe (route Shanghai-Rotterdam, par Bab el-Mandeb et Suez). C'est un verrou de la maritimisation (80 % du commerce mondial en volume par la mer). Singapour, interface entre océans, en profite pour devenir l'un des premiers ports du monde.
II. Un espace de vulnérabilités : passage étroit, risques de collision et de pollution ; piraterie ; dépendance de la Chine pour son pétrole, d'où la recherche d'autres routes (routes terrestres, Arctique). Un blocage aurait des effets mondiaux, comme celui du canal de Suez en 2021.
Limite : article de presse, sans carte ni chiffres de trafic total ; il ne parle pas des tensions en mer de Chine méridionale, juste à côté.`,
      grille: [
        { c: "Partie 1 : introduction (définitions, bornes, problématique, annonce du plan)", pts: 2 },
        { c: "Partie 1 : connaissances précises et datées au service de la question", pts: 5 },
        { c: "Partie 1 : organisation en parties et conclusion qui répond", pts: 2 },
        { c: "Partie 1 : expression claire et correcte", pts: 1 },
        { c: "Partie 2 : présentation du document", pts: 2 },
        { c: "Partie 2 : informations prélevées et expliquées sur les deux aspects de la consigne", pts: 4 },
        { c: "Partie 2 : connaissances ajoutées (verrous, maritimisation, ports, tensions)", pts: 3 },
        { c: "Partie 2 : portée ou limite du document", pts: 1 },
      ] },
  ],
};
