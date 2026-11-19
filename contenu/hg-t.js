// Histoire-géographie — terminale, voie technologique (toutes séries). Sources : voir matiere.sources.
// Programme : arrêté du 19 juillet 2019 (BO spécial n° 8 du 25 juillet 2019, annexe 2 : terminale technologique), toujours en vigueur pour le bac 2027.
// Chaque thème associe une question obligatoire et deux sujets d'étude, dont la classe en traite un. Un chapitre par question
// obligatoire, puis un chapitre qui regroupe les deux sujets d'étude du thème : 12 chapitres, histoire puis géographie.
// Pas d'épreuve finale : la note vient des moyennes de l'année (contrôle continu).
export default {
  matiere: {
    id: 'hg-t',
    nom: 'Histoire-géographie',
    voie: 'technologique',
    epreuve: { type: 'controle continu', coef: 3, quand: 'toute l\'année', note: 'Pas d\'épreuve finale : la moyenne de terminale compte pour un coefficient 3 (6 sur la première et la terminale). Les devoirs reprennent la forme de la banque nationale de sujets : questions sur la question obligatoire, puis étude de document(s) sur un sujet d\'étude.' },
    sources: [
      'https://www.education.gouv.fr/bo/19/Special8/MENE1921243A.htm',
      'https://eduscol.education.gouv.fr/1675/programmes-et-ressources-en-histoire-geographie-voie-gt',
      'https://eduscol.education.gouv.fr/2622/banque-nationale-de-sujets',
      'https://pedagogie.ac-strasbourg.fr/fileadmin/pedagogie/histoiregeographie/Ressources_lycee_2019/Ressources_TleTechno_2020/Pre__sentation_Programme_Terminale_Histoire_voie_Techno.pdf',
      'https://histoire-geographie-pedagogie.web.ac-grenoble.fr/sites/default/files/Media/document/jdi_geo-terminale_voie_technologique_20201.pdf',
    ],
    chapitres: [
      { id: 'hg-t-1', t: 'L\'affirmation des totalitarismes et la guerre', theme: 'Histoire, thème 1 : totalitarismes et Seconde Guerre mondiale (question obligatoire)' },
      { id: 'hg-t-2', t: 'Sujets d\'étude : la guerre d\'anéantissement à l\'Est et le génocide des Juifs ; de Gaulle et la France libre', theme: 'Histoire, thème 1 : totalitarismes et Seconde Guerre mondiale (sujets d\'étude)' },
      { id: 'hg-t-3', t: 'Le monde de 1945 à nos jours', theme: 'Histoire, thème 2 : du monde bipolaire au monde multipolaire (question obligatoire)' },
      { id: 'hg-t-4', t: 'Sujets d\'étude : de Youri Gagarine à la guerre des étoiles ; le 11 septembre 2001', theme: 'Histoire, thème 2 : du monde bipolaire au monde multipolaire (sujets d\'étude)' },
      { id: 'hg-t-5', t: 'La France depuis 1945 : politique et société', theme: 'Histoire, thème 3 : la France de 1945 à nos jours, une démocratie (question obligatoire)' },
      { id: 'hg-t-6', t: 'Sujets d\'étude : la guerre d\'Algérie ; la place et les droits des femmes', theme: 'Histoire, thème 3 : la France de 1945 à nos jours, une démocratie (sujets d\'étude)' },
      { id: 'hg-t-7', t: 'Mers et océans : vecteurs essentiels de la mondialisation', theme: 'Géographie, thème 1 : mers et océans, au cœur de la mondialisation (question obligatoire)' },
      { id: 'hg-t-8', t: 'Sujets d\'étude : les câbles sous-marins ; le détroit de Malacca', theme: 'Géographie, thème 1 : mers et océans, au cœur de la mondialisation (sujets d\'étude)' },
      { id: 'hg-t-9', t: 'Des dynamiques territoriales contrastées au sein de la mondialisation', theme: 'Géographie, thème 2 : des territoires inégalement intégrés dans la mondialisation (question obligatoire)' },
      { id: 'hg-t-10', t: 'Sujets d\'étude : New York ; l\'aéroport de Roissy-Charles-de-Gaulle', theme: 'Géographie, thème 2 : des territoires inégalement intégrés dans la mondialisation (sujets d\'étude)' },
      { id: 'hg-t-11', t: 'Les lieux de l\'influence française dans la mondialisation', theme: 'Géographie, thème 3 : la France et ses régions dans l\'UE et dans la mondialisation (question obligatoire)' },
      { id: 'hg-t-12', t: 'Sujets d\'étude : le Centre spatial guyanais ; Disneyland Paris', theme: 'Géographie, thème 3 : la France et ses régions dans l\'UE et dans la mondialisation (sujets d\'étude)' },
    ],
  },
  paquets: [
    {
      chapitre: 'hg-t-1',
      fiche: `## L'affirmation des totalitarismes et la guerre

### Des régimes nés de la crise
- Après la Première Guerre mondiale, puis la **crise de 1929** (krach de Wall Street en octobre 1929, chômage de masse), beaucoup de démocraties sont fragilisées.
- Des **régimes totalitaires** s'installent. Un régime totalitaire veut contrôler **toute la société** : la politique, l'économie, la culture et même les pensées.
- Leurs traits communs : un **parti unique**, un **chef** adulé (**culte de la personnalité**), une **idéologie** officielle, la **propagande**, l'**encadrement** de la jeunesse, la **terreur** (police politique, camps).
- À distinguer du **régime autoritaire**, qui supprime les libertés mais ne cherche pas à transformer toute la société.

### L'URSS de Staline
- **Staline** dirige seul l'URSS à la fin des années 1920. Son idéologie est le **communisme** : une société sans classes, où l'État possède tout.
- **Collectivisation** des terres à partir de **1929** (fermes collectives, les kolkhozes) ; les paysans aisés, les koulaks, sont déportés. Une famine fait plusieurs millions de morts en **Ukraine** en 1932-1933.
- **Plans quinquennaux** pour l'industrie lourde.
- **Grande Terreur** (1936-1938) : procès truqués, environ 700 000 exécutions ; les camps du **Goulag** reçoivent des millions de détenus.

### L'Allemagne nazie
- **Hitler** devient chancelier le **30 janvier 1933**. En quelques mois, il interdit les autres partis ; en 1934, il devient **Führer**.
- L'idéologie nazie est **raciste** et **antisémite** : elle croit à une « race aryenne » supérieure et veut un **espace vital** à l'Est.
- Les Juifs sont exclus : **lois de Nuremberg** (**1935**), **Nuit de cristal** (novembre **1938**).
- Terreur de la **Gestapo** et de la **SS** ; premier camp de concentration à **Dachau** (1933). Propagande de Goebbels, Jeunesses hitlériennes.

### De l'expansion à la guerre
- Hitler annexe l'Autriche (**Anschluss**, mars 1938), puis obtient les Sudètes aux **accords de Munich** (septembre 1938).
- Le **pacte germano-soviétique** (23 août **1939**) lui laisse les mains libres. Le **1er septembre 1939**, l'Allemagne envahit la Pologne : la France et le Royaume-Uni déclarent la guerre.
- 1940 : défaite de la France. 1941 : attaque de l'URSS (22 juin) et attaque japonaise de **Pearl Harbor** (7 décembre), qui fait entrer les États-Unis dans la guerre.
- Tournants : **Stalingrad** (capitulation allemande le 2 février 1943), débarquement en **Normandie** (6 juin 1944).
- Fin : l'Allemagne capitule le **8 mai 1945** ; le Japon, après les bombes atomiques d'**Hiroshima** et **Nagasaki** (août), capitule le **2 septembre 1945**.

### Une guerre d'une violence extrême
- C'est une **guerre totale** : économie, science et propagande sont **mobilisées**, et les civils deviennent des cibles.
- Le **génocide** des Juifs fait environ **6 millions** de victimes ; les Tsiganes sont aussi exterminés. On parle de **crime contre l'humanité**.
- Bilan : **entre 50 et 60 millions de morts**, en majorité des civils.
- En 1945, les vainqueurs créent l'**ONU** et jugent les chefs nazis au **procès de Nuremberg**.

### À retenir pour le bac
- Les traits communs des totalitarismes, avec un exemple pour chacun (URSS, Allemagne).
- Les grandes dates : 1929, 1933, 1939, 1941, 1943, 1944, 1945.
- Piège : totalitarisme et régime autoritaire ne sont pas synonymes.`,
      cartes: [
        { q: "Qu'est-ce qu'un régime totalitaire ?", r: "Un régime qui veut contrôler toute la société, jusqu'aux pensées, grâce à un parti unique, une idéologie, la propagande et la terreur." },
        { q: "Quelle différence entre régime autoritaire et régime totalitaire ?", r: "Le régime autoritaire supprime les libertés ; le totalitaire veut en plus transformer toute la société et créer un homme nouveau." },
        { q: "Qu'est-ce que la collectivisation en URSS ?", r: "À partir de 1929, les terres des paysans sont regroupées de force dans des fermes collectives contrôlées par l'État." },
        { q: "Qu'est-ce que le Goulag ?", r: "Le système des camps de travail forcé en URSS, où sont envoyés des millions de détenus." },
        { q: "Quand Hitler devient-il chancelier ?", r: "Le 30 janvier 1933." },
        { q: "Sur quoi repose l'idéologie nazie ?", r: "Sur le racisme et l'antisémitisme, la croyance en une « race aryenne » supérieure et la conquête d'un espace vital à l'Est." },
        { q: "Que sont les lois de Nuremberg ?", r: "Des lois de 1935 qui retirent la citoyenneté allemande aux Juifs." },
        { q: "Qu'est-ce que le pacte germano-soviétique ?", r: "Un accord de non-agression signé le 23 août 1939 entre Hitler et Staline, qui permet l'invasion de la Pologne." },
        { q: "Quand l'Allemagne envahit-elle la Pologne ?", r: "Le 1er septembre 1939. La France et le Royaume-Uni lui déclarent la guerre le 3." },
        { q: "Pourquoi l'attaque de Pearl Harbor est-elle importante ?", r: "Le 7 décembre 1941, le Japon attaque la flotte américaine : les États-Unis entrent dans la guerre, qui devient mondiale." },
        { q: "Qu'est-ce qu'une guerre totale ?", r: "Une guerre qui mobilise toutes les forces d'un pays (économie, science, propagande) et qui frappe aussi les civils." },
        { q: "Qu'est-ce qu'un crime contre l'humanité ?", r: "Un crime de masse commis contre des civils pour des raisons politiques, raciales ou religieuses. La notion est utilisée au procès de Nuremberg." },
        { q: "Quand l'Allemagne capitule-t-elle ?", r: "Le 8 mai 1945. Le Japon capitule le 2 septembre 1945." },
        { q: "Quel est le bilan humain de la Seconde Guerre mondiale ?", r: "Entre 50 et 60 millions de morts, en majorité des civils." },
      ],
      quiz: [
        { q: "Hitler devient chancelier en :", choix: ["1936", "1933", "1935", "1939"], bonne: 1, expl: "Le 30 janvier 1933 ; 1935 est l'année des lois de Nuremberg.", niv: 1 },
        { q: "Les camps de travail forcé de l'URSS forment :", choix: ["la Gestapo", "le kolkhoze", "le Goulag", "le Komintern"], bonne: 2, expl: "Les kolkhozes sont des fermes collectives.", niv: 1 },
        { q: "L'accord qui permet à Hitler d'attaquer la Pologne sans craindre l'URSS est :", choix: ["le traité de Versailles", "les accords de Munich", "l'Anschluss", "le pacte germano-soviétique"], bonne: 3, expl: "Il est signé le 23 août 1939 ; Munich date de 1938.", niv: 1 },
        { q: "Un régime interdit les partis d'opposition mais ne cherche pas à changer les pensées de chacun. C'est un régime :", choix: ["totalitaire", "autoritaire", "démocratique", "parlementaire"], bonne: 1, expl: "Le totalitarisme veut en plus contrôler les esprits.", niv: 2 },
        { q: "Une affiche nazie montre des familles blondes et dénonce les Juifs. Elle illustre :", choix: ["l'idéologie raciste du régime", "la collectivisation", "le culte de Staline", "la propagande communiste du Komintern"], bonne: 0, expl: "Le racisme et l'antisémitisme sont au cœur du nazisme.", niv: 2 },
        { q: "Des paysans ukrainiens meurent de faim en 1933 après la saisie de leurs récoltes. C'est une conséquence de :", choix: ["la guerre d'Espagne", "la crise de 1929", "la collectivisation", "l'Anschluss"], bonne: 2, expl: "La collectivisation forcée provoque une famine meurtrière.", niv: 2 },
        { q: "Les États-Unis entrent dans la guerre en :", choix: ["décembre 1941", "septembre 1939", "juin 1940", "mai 1941"], bonne: 0, expl: "Après l'attaque japonaise de Pearl Harbor, le 7 décembre 1941.", niv: 2 },
        { q: "Des usines de voitures fabriquent des avions et des chars pendant la guerre. C'est un trait de :", choix: ["la collaboration", "la guerre éclair", "la propagande", "la guerre totale"], bonne: 3, expl: "Toute l'économie est mobilisée pour la guerre.", niv: 2 },
        { q: "Pourquoi la crise de 1929 favorise-t-elle les totalitarismes ?", choix: ["Elle fragilise les démocraties par le chômage", "Elle fait disparaître les partis communistes", "Elle enrichit les classes moyennes européennes", "Elle oblige les dictateurs à démissionner"], bonne: 0, expl: "Les régimes en crise perdent la confiance des citoyens, qui se tournent vers les extrêmes.", niv: 3 },
        { q: "Lequel n'est **pas** un trait commun de l'URSS de Staline et de l'Allemagne nazie ?", choix: ["la terreur policière", "le parti unique", "la même idéologie", "le culte du chef"], bonne: 2, expl: "Le communisme et le nazisme sont des idéologies opposées.", niv: 3 },
      ],
    },
    {
      chapitre: 'hg-t-2',
      fiche: `## Sujets d'étude : la guerre à l'Est et le génocide ; de Gaulle et la France libre

Le programme propose deux sujets d'étude. La classe en traite un, mais les deux peuvent servir d'exemple.

### Sujet 1 : la guerre d'anéantissement à l'Est
- Le **22 juin 1941**, l'Allemagne envahit l'**URSS** : c'est l'**opération Barbarossa**, avec plus de trois millions de soldats.
- Hitler veut une **guerre d'anéantissement** : détruire le communisme, tuer ou asservir les **Slaves** jugés « inférieurs » et conquérir un **espace vital**.
- Les **prisonniers de guerre soviétiques** sont affamés : environ 3 millions meurent, sur 5,7 millions capturés.
- Le **siège de Leningrad** (1941-1944) fait environ un million de morts civils, surtout de faim.
- L'Armée rouge arrête les Allemands devant Moscou (hiver 1941), puis gagne à **Stalingrad** (février **1943**). La guerre à l'Est est la plus meurtrière : l'URSS perd plus de 20 millions de personnes.

### Sujet 1 (suite) : le génocide des Juifs
- Un **génocide** est l'extermination volontaire et organisée d'un peuple. Le mot apparaît en 1944.
- Les Juifs de Pologne sont d'abord enfermés dans des **ghettos** (Varsovie, Lodz), où beaucoup meurent de faim. Le ghetto de Varsovie se soulève en avril 1943.
- Derrière l'armée, des unités spéciales, les **Einsatzgruppen**, fusillent les Juifs : à **Babi Yar**, près de Kiev, près de 34 000 Juifs sont tués en deux jours (septembre 1941). C'est la **Shoah par balles**.
- La **conférence de Wannsee** (20 janvier **1942**) organise la « **solution finale** » : déporter les Juifs de toute l'Europe vers des **centres de mise à mort** en Pologne (**Auschwitz-Birkenau**, Treblinka, Sobibor, Belzec), où ils sont tués dans des chambres à gaz.
- Environ **6 millions** de Juifs sont assassinés, dont environ un million à Auschwitz-Birkenau. On parle de **Shoah** (« catastrophe » en hébreu).

### Sujet 2 : de Gaulle et la France libre
- En juin 1940, la France est vaincue. Le **17 juin**, le maréchal **Pétain** demande l'armistice.
- Le **18 juin 1940**, le général **Charles de Gaulle**, réfugié à Londres, lance un **appel** à la radio de la BBC : « la France a perdu une bataille, mais la France n'a pas perdu la guerre ».
- Le **28 juin 1940**, le Premier ministre britannique **Churchill** le reconnaît comme chef des **Français libres**. Il crée les **Forces françaises libres** (FFL).
- À l'été **1940**, une partie de l'empire se rallie, d'abord le **Tchad** avec le gouverneur **Félix Éboué**. L'Afrique équatoriale devient une base de la France libre.
- Les FFL combattent : serment de **Koufra** du colonel **Leclerc** (1941), résistance héroïque à **Bir Hakeim** en Libye (mai-juin **1942**).
- De Gaulle unit la Résistance intérieure grâce à **Jean Moulin**, qui crée le **Conseil national de la Résistance** (mai **1943**).
- En juin 1944, la France libre devient le **Gouvernement provisoire de la République française** (GPRF). Le **25 août 1944**, Paris est libéré avec la **2e division blindée** de Leclerc ; de Gaulle prononce un discours à l'Hôtel de Ville.
- Grâce à la France libre, la France est dans le camp des **vainqueurs** en 1945.

### À retenir pour le bac
- Guerre d'anéantissement : 22 juin 1941, Slaves et Juifs visés, prisonniers affamés, Stalingrad.
- Génocide : ghettos, Shoah par balles, Wannsee (1942), centres de mise à mort, 6 millions de morts.
- France libre : 18 juin 1940, Churchill, Tchad, Bir Hakeim, CNR, 25 août 1944.
- Piège : un camp de concentration (travail forcé) n'est pas un centre de mise à mort (extermination dès l'arrivée).`,
      cartes: [
        { q: "Qu'est-ce que l'opération Barbarossa ?", r: "L'invasion de l'URSS par l'Allemagne, le 22 juin 1941." },
        { q: "Pourquoi parle-t-on de guerre d'anéantissement à l'Est ?", r: "Hitler veut détruire le communisme et tuer ou asservir les Slaves et les Juifs, pas seulement vaincre une armée." },
        { q: "Combien de prisonniers soviétiques meurent aux mains des nazis ?", r: "Environ 3 millions, sur 5,7 millions capturés, surtout de faim." },
        { q: "Que se passe-t-il à Babi Yar en septembre 1941 ?", r: "Près de 34 000 Juifs de Kiev sont fusillés en deux jours par un Einsatzgruppe." },
        { q: "Qu'est-ce que la Shoah par balles ?", r: "L'assassinat des Juifs par fusillade, à l'Est, à partir de 1941, par les Einsatzgruppen et leurs auxiliaires." },
        { q: "Qu'est-ce qu'un ghetto ?", r: "Un quartier fermé où les nazis enferment les Juifs, comme à Varsovie, avant de les déporter." },
        { q: "Que décide la conférence de Wannsee ?", r: "Le 20 janvier 1942, elle organise la « solution finale » : la déportation et l'extermination des Juifs d'Europe." },
        { q: "Qu'est-ce qu'un centre de mise à mort ?", r: "Un lieu où les déportés sont tués dès leur arrivée, dans des chambres à gaz, comme Treblinka ou Auschwitz-Birkenau." },
        { q: "Combien de Juifs sont assassinés pendant la Shoah ?", r: "Environ 6 millions." },
        { q: "Que dit de Gaulle le 18 juin 1940 ?", r: "Depuis Londres, à la BBC, il appelle les Français à continuer le combat : la France a perdu une bataille, pas la guerre." },
        { q: "Quel territoire de l'empire se rallie le premier à la France libre ?", r: "Le Tchad, en août 1940, avec le gouverneur Félix Éboué." },
        { q: "Qu'est-ce que la bataille de Bir Hakeim ?", r: "En mai-juin 1942 en Libye, les Forces françaises libres résistent longtemps aux troupes allemandes et italiennes." },
        { q: "Quel est le rôle de Jean Moulin ?", r: "Envoyé de De Gaulle, il unifie la Résistance intérieure et crée le Conseil national de la Résistance en mai 1943." },
        { q: "Quand Paris est-il libéré ?", r: "Le 25 août 1944, avec la 2e division blindée du général Leclerc." },
      ],
      quiz: [
        { q: "L'Allemagne envahit l'URSS le :", choix: ["22 juin 1941", "1er septembre 1939", "7 décembre 1941", "2 février 1943"], bonne: 0, expl: "Le 1er septembre 1939 est l'invasion de la Pologne.", niv: 1 },
        { q: "La réunion qui organise la « solution finale » est :", choix: ["la conférence de Wannsee", "la conférence de Munich", "le procès de Nuremberg", "la conférence de Yalta"], bonne: 0, expl: "Elle se tient le 20 janvier 1942.", niv: 1 },
        { q: "De Gaulle lance son appel depuis :", choix: ["Alger", "Londres", "Brazzaville", "Bordeaux"], bonne: 1, expl: "Il parle à la radio britannique, la BBC.", niv: 1 },
        { q: "À Babi Yar, des Juifs sont fusillés par milliers derrière le front en 1941. Il s'agit de :", choix: ["la rafle du Vél' d'Hiv", "la déportation vers Auschwitz", "la Nuit de cristal", "la Shoah par balles"], bonne: 3, expl: "Les Einsatzgruppen tuent par fusillade à l'Est.", niv: 2 },
        { q: "Un convoi arrive à Treblinka et ses passagers sont gazés le jour même. Treblinka est :", choix: ["un ghetto", "un camp de concentration", "un centre de mise à mort", "un camp de prisonniers"], bonne: 2, expl: "On y tue dès l'arrivée ; un camp de concentration impose le travail forcé.", niv: 2 },
        { q: "Des prisonniers soviétiques meurent de faim par centaines de milliers en 1941. Cela montre :", choix: ["la drôle de guerre", "la guerre éclair", "la collaboration", "la guerre d'anéantissement"], bonne: 3, expl: "Les Slaves sont traités comme des êtres à éliminer.", niv: 2 },
        { q: "En août 1940, le gouverneur du Tchad rejoint de Gaulle. Il s'agit de :", choix: ["Pierre Koenig", "Jean Moulin", "Philippe Leclerc", "Félix Éboué"], bonne: 3, expl: "Le Tchad est le premier territoire de l'empire rallié.", niv: 2 },
        { q: "Paris est libéré en :", choix: ["juin 1944", "août 1944", "mai 1945", "novembre 1942"], bonne: 1, expl: "Le 25 août 1944 ; juin 1944 est le débarquement.", niv: 2 },
        { q: "Pourquoi la France libre est-elle importante en 1945 ?", choix: ["Elle place la France dans le camp des vainqueurs", "Elle signe l'armistice avec l'Allemagne nazie en juin 1940", "Elle gouverne la France depuis Vichy", "Elle libère seule tout le territoire"], bonne: 0, expl: "Grâce à elle, la France occupe l'Allemagne et siège à l'ONU ; l'armistice est l'œuvre de Pétain.", niv: 3 },
        { q: "Quelle affirmation sur le génocide des Juifs est juste ?", choix: ["Il est décidé après la fin de la guerre, en 1946 à Nuremberg", "Il se déroule surtout en France", "Il commence par des fusillades avant les chambres à gaz", "Il ne touche que les Juifs allemands"], bonne: 2, expl: "La Shoah par balles précède l'usage des centres de mise à mort.", niv: 3 },
      ],
    },
    {
      chapitre: 'hg-t-3',
      fiche: `## Le monde de 1945 à nos jours

### 1945 : un nouvel ordre mondial
- L'**ONU** naît en **1945** (charte de San Francisco) pour garantir la paix. Cinq membres permanents ont un **droit de veto** au Conseil de sécurité : États-Unis, URSS (Russie aujourd'hui), Royaume-Uni, France, Chine.
- Deux **superpuissances** dominent : les **États-Unis** et l'**URSS**.

### La guerre froide (1947-1991) : un monde bipolaire
- La **guerre froide** oppose deux **blocs**, sans guerre directe entre les deux Grands. On parle de **monde bipolaire**.
- Le bloc de l'Ouest (démocratie, capitalisme) face au bloc de l'Est (communisme, parti unique).
- **1947** : **doctrine Truman** (endiguement du communisme) et **plan Marshall** (aide à la reconstruction de l'Europe).
- **Berlin**, symbole de la division : **blocus** (1948-1949), construction du **mur** le **13 août 1961**.
- **1949** : création de l'**OTAN** ; l'URSS a la bombe atomique. **1955** : **pacte de Varsovie**.
- Crises et guerres : **Corée** (1950-1953), **crise de Cuba** (octobre **1962**), **Vietnam** (engagement américain massif de 1965 à 1973).
- Après Cuba, les deux Grands choisissent la **détente** (téléphone rouge, accords sur les armes).
- Fin : **Gorbatchev** réforme l'URSS (1985), le **mur de Berlin tombe** le **9 novembre 1989**, l'**URSS disparaît** en **décembre 1991**.

### La décolonisation et le tiers-monde
- La **décolonisation** est l'accès à l'indépendance des colonies : **Inde** (1947), Indochine (1954), **Algérie** (1962) après une guerre, la plupart des pays d'Afrique en **1960**.
- Le **tiers-monde** désigne les pays pauvres, souvent nouvellement indépendants. À **Bandung** (1955), ils condamnent le colonialisme ; en 1961, le **mouvement des non-alignés** refuse de choisir un bloc.

### La construction européenne
- Pour rendre la guerre impossible, la France et la RFA mettent en commun charbon et acier (**CECA**, **1951**), puis six pays créent la **CEE** par le **traité de Rome** (**1957**).
- Le **traité de Maastricht** (**1992**) crée l'**Union européenne** ; l'**euro** circule depuis **2002** ; l'UE s'élargit à l'Est en **2004** et compte **27 membres** après le **Brexit** (2020).

### Depuis 1991 : un monde multipolaire et instable
- Les **États-Unis** restent la première puissance, mais d'autres s'affirment : la **Chine** (deuxième économie mondiale), l'Inde, le Brésil, la Russie. On parle de **monde multipolaire**.
- De nouvelles formes de conflits : **guerres civiles** (ex-Yougoslavie, génocide des Tutsi au **Rwanda** en **1994**), **terrorisme** (attentats du **11 septembre 2001**), **cyberattaques**.
- La **Russie** annexe la Crimée (2014) et envahit l'**Ukraine** (24 février **2022**).
- La **diplomatie** et le **multilatéralisme** (ONU, accord de Paris sur le climat en 2015) cherchent à répondre aux défis communs.

### À retenir pour le bac
- Trois grandes périodes : guerre froide (1947-1991), décolonisation (1945-1975), monde multipolaire (depuis 1991).
- Les dates : 1945, 1947, 1957, 1961, 1962, 1989, 1991, 2001.
- Piège : le monde bipolaire, c'est deux pôles (États-Unis, URSS) ; le monde multipolaire en compte plusieurs.`,
      cartes: [
        { q: "Qu'est-ce que la guerre froide ?", r: "L'affrontement entre les États-Unis et l'URSS de 1947 à 1991, sans guerre directe entre eux." },
        { q: "Qu'est-ce qu'un monde bipolaire ?", r: "Un monde organisé autour de deux puissances rivales, comme les États-Unis et l'URSS pendant la guerre froide." },
        { q: "Qu'est-ce qu'un monde multipolaire ?", r: "Un monde où plusieurs puissances comptent : États-Unis, Chine, Union européenne, Russie, Inde…" },
        { q: "Que proposent la doctrine Truman et le plan Marshall (1947) ?", r: "Contenir l'avancée du communisme et aider l'Europe à se reconstruire grâce à l'argent américain." },
        { q: "Pourquoi Berlin est-il un symbole de la guerre froide ?", r: "La ville est coupée en deux ; le blocus de 1948-1949 et le mur construit en 1961 montrent la division du monde." },
        { q: "Qu'est-ce que l'OTAN ?", r: "L'alliance militaire des pays occidentaux autour des États-Unis, créée en 1949." },
        { q: "Que se passe-t-il pendant la crise de Cuba ?", r: "En octobre 1962, l'URSS installe des missiles nucléaires à Cuba ; le monde frôle la guerre nucléaire." },
        { q: "Qu'est-ce que la détente ?", r: "La période après 1962 où les deux Grands dialoguent davantage et limitent leurs armes nucléaires." },
        { q: "Quand tombe le mur de Berlin ?", r: "Le 9 novembre 1989." },
        { q: "Qu'est-ce que la décolonisation ?", r: "L'accès à l'indépendance des colonies, par la négociation ou par la guerre, surtout entre 1945 et 1975." },
        { q: "Qu'est-ce que le tiers-monde ?", r: "L'ensemble des pays pauvres, souvent anciennes colonies, qui cherchent à exister entre les deux blocs." },
        { q: "Que crée le traité de Rome (1957) ?", r: "La Communauté économique européenne (CEE), entre six pays dont la France et la RFA." },
        { q: "Que crée le traité de Maastricht (1992) ?", r: "L'Union européenne et la citoyenneté européenne ; il prépare l'euro." },
        { q: "Quelles nouvelles formes de conflits apparaissent après 1991 ?", r: "Les guerres civiles, le terrorisme mondialisé et les cyberattaques." },
      ],
      quiz: [
        { q: "Le mur de Berlin est construit en :", choix: ["1961", "1948", "1955", "1957"], bonne: 0, expl: "Il tombe en 1989 ; 1948 est le début du blocus.", niv: 1 },
        { q: "L'alliance militaire occidentale créée en 1949 est :", choix: ["l'ONU", "le pacte de Varsovie", "l'OTAN", "la CEE"], bonne: 2, expl: "Le pacte de Varsovie est l'alliance du bloc de l'Est (1955).", niv: 1 },
        { q: "Le traité de Rome crée en 1957 :", choix: ["l'Union européenne", "la CEE", "l'euro", "la CECA"], bonne: 1, expl: "L'Union européenne naît du traité de Maastricht en 1992.", niv: 1 },
        { q: "En 1947, les États-Unis financent la reconstruction de l'Europe de l'Ouest. C'est :", choix: ["la doctrine Jdanov", "le plan Marshall", "le pacte de Varsovie", "la détente"], bonne: 1, expl: "Le plan Marshall attache aussi l'Europe de l'Ouest au camp américain.", niv: 2 },
        { q: "En 1962, des missiles soviétiques sont découverts près des États-Unis. C'est :", choix: ["la crise de Suez", "le blocus de Berlin", "la guerre de Corée", "la crise de Cuba"], bonne: 3, expl: "C'est le moment le plus dangereux de la guerre froide.", niv: 2 },
        { q: "Un pays d'Afrique devient indépendant par la négociation en 1960. C'est un exemple de :", choix: ["décolonisation", "détente", "bipolarisation", "non-alignement"], bonne: 0, expl: "1960 est l'année des indépendances africaines.", niv: 2 },
        { q: "L'URSS disparaît en :", choix: ["1989", "1985", "1991", "1986"], bonne: 2, expl: "1985 est l'arrivée de Gorbatchev, 1989 la chute du mur.", niv: 2 },
        { q: "Aujourd'hui, les États-Unis, la Chine, l'UE et l'Inde pèsent dans les décisions mondiales. On parle de :", choix: ["tiers-monde", "monde bipolaire", "guerre froide", "monde multipolaire"], bonne: 3, expl: "Plusieurs pôles de puissance se partagent l'influence.", niv: 2 },
        { q: "Pourquoi appelle-t-on ce conflit la guerre « froide » ?", choix: ["Il se déroule surtout dans les régions polaires", "Il ne met pas directement aux prises les deux Grands", "Il ne fait presque pas de victimes", "Il oppose l'Europe à l'URSS"], bonne: 1, expl: "Il y a pourtant des guerres chaudes ailleurs, en Corée ou au Vietnam.", niv: 3 },
        { q: "Quelle affirmation sur le monde depuis 1991 est juste ?", choix: ["Les États-Unis y ont perdu leur rang au profit de la Russie et de l'Inde", "Il connaît une paix totale grâce à l'ONU", "Les conflits y sont souvent des guerres civiles ou du terrorisme", "L'URSS y domine le monde"], bonne: 2, expl: "Rwanda, ex-Yougoslavie, 11 septembre 2001 en sont des exemples.", niv: 3 },
      ],
    },
    {
      chapitre: 'hg-t-4',
      fiche: `## Sujets d'étude : de Gagarine à la guerre des étoiles ; le 11 septembre 2001

### Sujet 1 : la conquête spatiale, une course de la guerre froide
- L'espace devient un terrain d'affrontement entre les deux Grands. Il a trois enjeux : **scientifique** (prouver sa supériorité technique), **militaire** (une fusée qui envoie un satellite peut porter une bombe nucléaire) et **symbolique** (le prestige du modèle).
- Le **4 octobre 1957**, l'URSS lance **Spoutnik 1**, premier satellite artificiel. C'est un choc aux États-Unis. En novembre, la chienne **Laïka** est le premier être vivant en orbite.
- Les États-Unis réagissent : création de la **NASA** en **1958**, effort massif pour les sciences à l'école.
- Le **12 avril 1961**, le Soviétique **Youri Gagarine** est le premier homme dans l'espace, à bord de **Vostok 1**. L'URSS en fait un héros et un outil de propagande.
- En **1961**, le président **Kennedy** fixe un objectif : envoyer un homme sur la Lune avant la fin de la décennie. C'est le **programme Apollo**.
- L'URSS garde de l'avance : première femme dans l'espace (**Valentina Terechkova**, 1963), première sortie dans l'espace (Alexeï Leonov, 1965).
- En **juillet 1969**, la mission **Apollo 11** pose **Neil Armstrong** et Buzz Aldrin sur la Lune. Des centaines de millions de personnes regardent à la télévision : les États-Unis gagnent la course à la Lune.
- La **détente** se voit aussi dans l'espace : en **1975**, les vaisseaux **Apollo et Soyouz** s'arriment en orbite.
- Le **traité de l'espace** (1967) interdit d'y placer des armes nucléaires.
- En **1983**, le président **Reagan** lance l'**Initiative de défense stratégique** (IDS), surnommée « **guerre des étoiles** » : un bouclier spatial contre les missiles soviétiques. Ce projet relance la course aux armements, que l'URSS n'a plus les moyens de suivre.

### Sujet 2 : le 11 septembre 2001
- Le **11 septembre 2001**, **19 terroristes** du groupe **al-Qaïda**, dirigé par **Oussama ben Laden**, détournent **quatre avions** de ligne.
- Deux avions frappent les **tours jumelles du World Trade Center** à **New York**, qui s'effondrent ; un troisième frappe le **Pentagone** (ministère de la Défense) près de Washington ; le quatrième s'écrase en **Pennsylvanie** après la révolte des passagers.
- Bilan : près de **3 000 morts**. C'est l'attentat le plus meurtrier de l'histoire.
- Les cibles sont des **symboles** de la puissance américaine : économique (World Trade Center) et militaire (Pentagone).
- Les attentats sont vus en direct dans le monde entier : c'est un **événement mondial**.
- Réactions : solidarité internationale ; pour la première fois, l'**OTAN** déclare qu'une attaque contre un membre est une attaque contre tous. Le président **George W. Bush** lance la « **guerre contre le terrorisme** ».
- Conséquences : guerre en **Afghanistan** (octobre **2001**) contre les talibans qui protègent al-Qaïda ; guerre en **Irak** (**2003**), sans mandat de l'ONU ; renforcement de la surveillance (Patriot Act) ; prison de **Guantánamo**.
- Ben Laden est tué par un commando américain au Pakistan en **mai 2011**. Les troupes américaines quittent l'Afghanistan en **août 2021**, et les talibans reprennent le pouvoir.
- Le 11 Septembre montre que l'**hyperpuissance** américaine est **vulnérable** et qu'un acteur **non étatique** peut frapper partout : c'est une nouvelle forme de conflit.

### À retenir pour le bac
- Espace : 1957 (Spoutnik), 1961 (Gagarine), 1969 (Apollo 11), 1975 (Apollo-Soyouz), 1983 (guerre des étoiles).
- 11 Septembre : al-Qaïda, quatre avions, près de 3 000 morts, Afghanistan, Irak.
- Piège : la « guerre des étoiles » n'est pas une guerre réelle, c'est un projet de défense des années 1980.`,
      cartes: [
        { q: "Qu'est-ce que Spoutnik 1 ?", r: "Le premier satellite artificiel, lancé par l'URSS le 4 octobre 1957." },
        { q: "Quand Youri Gagarine va-t-il dans l'espace ?", r: "Le 12 avril 1961, à bord de Vostok 1 : c'est le premier homme dans l'espace." },
        { q: "Pourquoi la conquête spatiale a-t-elle un enjeu militaire ?", r: "Une fusée capable de placer un satellite en orbite peut aussi envoyer une bombe nucléaire sur un autre continent." },
        { q: "Pourquoi la conquête spatiale a-t-elle un enjeu symbolique ?", r: "Chaque Grand veut prouver la supériorité de son modèle aux yeux du monde." },
        { q: "Quand la NASA est-elle créée ?", r: "En 1958, en réponse au lancement de Spoutnik." },
        { q: "Qui est Valentina Terechkova ?", r: "Une cosmonaute soviétique, première femme dans l'espace en 1963." },
        { q: "Que se passe-t-il en juillet 1969 ?", r: "Avec la mission Apollo 11, Neil Armstrong et Buzz Aldrin marchent sur la Lune." },
        { q: "Que symbolise la mission Apollo-Soyouz de 1975 ?", r: "La détente : un vaisseau américain et un vaisseau soviétique s'arriment en orbite." },
        { q: "Qu'est-ce que la « guerre des étoiles » ?", r: "Le surnom de l'Initiative de défense stratégique lancée par Reagan en 1983 : un bouclier spatial contre les missiles soviétiques." },
        { q: "Qui organise les attentats du 11 septembre 2001 ?", r: "Le groupe terroriste al-Qaïda, dirigé par Oussama ben Laden." },
        { q: "Quelles cibles sont frappées le 11 septembre 2001 ?", r: "Les tours jumelles du World Trade Center à New York et le Pentagone ; un quatrième avion s'écrase en Pennsylvanie." },
        { q: "Combien de victimes font les attentats du 11 Septembre ?", r: "Près de 3 000 morts." },
        { q: "Quelle est la première conséquence militaire du 11 Septembre ?", r: "La guerre en Afghanistan, en octobre 2001, contre les talibans qui protègent al-Qaïda." },
        { q: "Que montre le 11 Septembre sur la puissance américaine ?", r: "Que l'hyperpuissance est vulnérable à un acteur non étatique capable de frapper sur son sol." },
      ],
      quiz: [
        { q: "Le premier satellite artificiel, Spoutnik, est lancé en :", choix: ["1969", "1961", "1957", "1965"], bonne: 2, expl: "1961 est le vol de Gagarine, 1969 le premier pas sur la Lune.", niv: 1 },
        { q: "Le premier homme à marcher sur la Lune est :", choix: ["Youri Gagarine", "Neil Armstrong", "Alexeï Leonov", "John Kennedy"], bonne: 1, expl: "Gagarine est le premier homme dans l'espace, en 1961.", niv: 1 },
        { q: "Le groupe responsable des attentats du 11 Septembre est :", choix: ["le FLN", "Daech", "les talibans", "al-Qaïda"], bonne: 3, expl: "Les talibans afghans protégeaient al-Qaïda, sans organiser l'attaque.", niv: 1 },
        { q: "Une affiche soviétique de 1961 montre un cosmonaute souriant sous une étoile rouge. Elle célèbre :", choix: ["la mission Apollo-Soyouz", "Neil Armstrong", "Youri Gagarine", "Spoutnik"], bonne: 2, expl: "Le vol de Gagarine est un grand succès de la propagande soviétique.", niv: 2 },
        { q: "En 1975, un vaisseau américain et un vaisseau soviétique s'arriment dans l'espace. Cela illustre :", choix: ["la détente", "la crise de Cuba", "la guerre des étoiles", "l'endiguement"], bonne: 0, expl: "Les deux Grands coopèrent pendant la période de détente.", niv: 2 },
        { q: "En 1983, un président américain veut protéger son pays par des armes dans l'espace. C'est :", choix: ["le programme Apollo", "l'Initiative de défense stratégique", "le traité de l'espace", "l'accord Apollo-Soyouz"], bonne: 1, expl: "On la surnomme « guerre des étoiles ».", niv: 2 },
        { q: "Le Pentagone, frappé le 11 septembre 2001, est un symbole de la puissance :", choix: ["diplomatique", "économique", "culturelle", "militaire"], bonne: 3, expl: "C'est le ministère de la Défense ; le World Trade Center symbolise l'économie.", niv: 2 },
        { q: "Les États-Unis attaquent l'Afghanistan après le 11 Septembre en :", choix: ["2011", "2003", "2001", "2021"], bonne: 2, expl: "En octobre 2001 ; 2003 est la guerre d'Irak, 2021 le retrait.", niv: 2 },
        { q: "Pourquoi le lancement de Spoutnik inquiète-t-il les Américains ?", choix: ["Le satellite espionne déjà les villes américaines", "La fusée pourrait porter une bombe jusqu'aux États-Unis", "Il met fin à la détente", "Il prouve que l'URSS a marché sur la Lune"], bonne: 1, expl: "La même fusée peut devenir un missile intercontinental.", niv: 3 },
        { q: "Quelle affirmation sur le 11 Septembre est juste ?", choix: ["Il ne touche que New York", "Il déclenche une guerre contre l'URSS", "Il est organisé par le gouvernement irakien", "Il est l'œuvre d'un acteur non étatique"], bonne: 3, expl: "Al-Qaïda est un réseau terroriste, pas un État ; le Pentagone est aussi frappé.", niv: 3 },
      ],
    },
    {
      chapitre: 'hg-t-5',
      fiche: `## La France depuis 1945 : politique et société

### Refonder la République (1944-1946)
- À la Libération, le **Gouvernement provisoire de la République française** (GPRF) du général **de Gaulle** rétablit la **démocratie**.
- Les **femmes** votent pour la première fois en **1945** (droit accordé en 1944).
- La **Sécurité sociale** (1945) protège contre la maladie et la vieillesse ; des entreprises sont **nationalisées** (Renault, électricité, banques).

### La IVe République (1946-1958)
- Le **Parlement** est puissant, les gouvernements tombent souvent : c'est l'**instabilité ministérielle**.
- Elle reconstruit le pays et participe à la construction européenne (CECA en 1951, traité de Rome en 1957).
- Elle ne parvient pas à régler la **guerre d'Algérie** : en mai **1958**, une crise à Alger ramène de Gaulle au pouvoir.

### La Ve République (depuis 1958)
- La **Constitution du 4 octobre 1958**, adoptée par **référendum**, renforce le pouvoir du **président de la République** : il nomme le Premier ministre, peut dissoudre l'Assemblée et consulter le peuple par référendum.
- Depuis le référendum de **1962**, le président est élu au **suffrage universel direct** (première élection en 1965).
- Le régime s'adapte : **alternance** en **1981** (la gauche arrive au pouvoir avec **François Mitterrand**), **cohabitations** (1986-1988, 1993-1995, 1997-2002) où le président et le Premier ministre sont de camps opposés, **quinquennat** depuis 2002 (mandat de 5 ans).
- Les **institutions** restent solides : on parle d'une démocratie stable.

### La France dans le monde
- Elle perd son **empire colonial** : Indochine (1954), indépendances africaines (1960), Algérie (1962).
- Elle garde une influence : membre permanent du Conseil de sécurité de l'ONU, bombe atomique (1960), liens avec l'Afrique (la « Françafrique »), moteur de la **construction européenne** avec l'Allemagne.

### Une société transformée
- Les **Trente Glorieuses** (1945-1975) : forte croissance, plein emploi, **société de consommation** (voiture, télévision, électroménager).
- Le **baby-boom** : beaucoup de naissances de 1945 au milieu des années 1960.
- L'**exode rural** et l'**urbanisation** : les agriculteurs deviennent très peu nombreux, les villes grandissent (grands ensembles, banlieues).
- L'**immigration** répond aux besoins de main-d'œuvre (Italiens, Espagnols, Portugais, Algériens, Marocains). Le **regroupement familial** est autorisé en 1976.
- La **tertiarisation** : la plupart des actifs travaillent aujourd'hui dans les services.
- **Mai 1968** : révolte étudiante et grève générale qui réclament plus de libertés ; les accords de Grenelle augmentent les salaires.
- Depuis **1975**, la crise apporte le **chômage de masse**. De nouveaux droits apparaissent : majorité à 18 ans (1974), IVG (1975), abolition de la **peine de mort** (**1981**), décentralisation (1982), parité (2000).
- La **laïcité** (loi de 1905) reste un principe de la République, réaffirmé par la loi de **2004** sur les signes religieux à l'école.

### À retenir pour le bac
- 1944-1946 : refondation. 1958 : Ve République. 1962 : élection directe du président. 1981 : alternance. 1986 : première cohabitation.
- La société : Trente Glorieuses, baby-boom, urbanisation, immigration, tertiarisation, chômage après 1975.
- Piège : la Constitution date de 1958, l'élection directe du président de 1962.`,
      cartes: [
        { q: "Qu'est-ce que le GPRF ?", r: "Le Gouvernement provisoire de la République française, dirigé par de Gaulle de 1944 à 1946, qui rétablit la démocratie." },
        { q: "Quand les femmes votent-elles pour la première fois en France ?", r: "En 1945, aux élections municipales ; le droit de vote leur a été accordé en 1944." },
        { q: "Quel est le défaut principal de la IVe République ?", r: "L'instabilité ministérielle : le Parlement renverse souvent les gouvernements." },
        { q: "Quels pouvoirs la Constitution de 1958 donne-t-elle au président ?", r: "Il nomme le Premier ministre, peut dissoudre l'Assemblée nationale et organiser un référendum." },
        { q: "Que change le référendum de 1962 ?", r: "Le président de la République est élu au suffrage universel direct." },
        { q: "Qu'est-ce que l'alternance de 1981 ?", r: "La gauche arrive au pouvoir pour la première fois sous la Ve République, avec François Mitterrand." },
        { q: "Qu'est-ce qu'une cohabitation ?", r: "Un président et un Premier ministre de camps politiques opposés, comme en 1986-1988." },
        { q: "Qu'est-ce que le quinquennat ?", r: "Le mandat présidentiel de 5 ans, appliqué depuis 2002." },
        { q: "Que sont les Trente Glorieuses ?", r: "La période de forte croissance et de plein emploi en France, de 1945 à 1975." },
        { q: "Qu'est-ce que le baby-boom ?", r: "La forte hausse des naissances après 1945, jusqu'au milieu des années 1960." },
        { q: "Qu'est-ce que l'exode rural ?", r: "Le départ des habitants des campagnes vers les villes, très fort pendant les Trente Glorieuses." },
        { q: "Qu'est-ce que la tertiarisation ?", r: "La hausse de la part des emplois dans les services (commerce, santé, éducation, banques…)." },
        { q: "Que se passe-t-il en mai 1968 ?", r: "Une révolte étudiante puis une grève générale réclament plus de libertés et de meilleurs salaires." },
        { q: "Quand la peine de mort est-elle abolie ?", r: "En 1981, par la loi défendue par Robert Badinter." },
      ],
      quiz: [
        { q: "La Constitution de la Ve République date de :", choix: ["1945", "1946", "1952", "1958"], bonne: 3, expl: "1946 est la IVe République ; 1945, le premier vote des femmes.", niv: 1 },
        { q: "La période de forte croissance de 1945 à 1975 s'appelle :", choix: ["le baby-boom", "les Trente Glorieuses", "la Belle Époque", "la détente"], bonne: 1, expl: "Le baby-boom désigne la hausse des naissances.", niv: 1 },
        { q: "La première alternance de la Ve République a lieu en :", choix: ["1981", "1968", "1974", "1986"], bonne: 0, expl: "1986 est la première cohabitation.", niv: 1 },
        { q: "Un président de gauche gouverne avec un Premier ministre de droite. C'est :", choix: ["un quinquennat", "une alternance", "une cohabitation", "une dissolution"], bonne: 2, expl: "L'alternance est le changement de camp au pouvoir.", niv: 2 },
        { q: "Sous la IVe République, un gouvernement est renversé après quelques mois. Cela illustre :", choix: ["l'instabilité ministérielle", "la cohabitation", "le pouvoir fort du président", "le quinquennat"], bonne: 0, expl: "Le Parlement y renverse souvent les gouvernements.", niv: 2 },
        { q: "Une famille d'agriculteurs du Massif central part travailler en ville en 1960. C'est :", choix: ["l'exode rural", "le baby-boom", "la décentralisation", "le regroupement familial"], bonne: 0, expl: "Les campagnes se vident au profit des villes pendant les Trente Glorieuses.", niv: 2 },
        { q: "Aujourd'hui, la plupart des Français travaillent dans le commerce, la santé ou l'éducation. C'est :", choix: ["l'exode rural", "l'industrialisation", "la tertiarisation", "la nationalisation"], bonne: 2, expl: "Le secteur tertiaire regroupe les services.", niv: 2 },
        { q: "Le président est élu au suffrage universel direct depuis le référendum de :", choix: ["2000", "1958", "1969", "1962"], bonne: 3, expl: "2000 est le référendum sur le quinquennat.", niv: 2 },
        { q: "Pourquoi dit-on que la Ve République est un régime stable ?", choix: ["Le Parlement ne peut plus voter de lois", "Le même parti la dirige depuis 1958", "Elle a traversé alternances et cohabitations sans changer de Constitution", "Elle fait élire le président à vie"], bonne: 2, expl: "La même Constitution s'applique depuis 1958.", niv: 3 },
        { q: "Quelle affirmation sur la société française depuis 1975 est juste ?", choix: ["Le plein emploi se maintient jusqu'en 2000 grâce au pétrole bon marché", "Le chômage de masse s'installe après la fin des Trente Glorieuses", "L'agriculture redevient le premier employeur", "L'immigration s'arrête complètement"], bonne: 1, expl: "Les chocs pétroliers mettent fin à la forte croissance.", niv: 3 },
      ],
    },
    {
      chapitre: 'hg-t-6',
      fiche: `## Sujets d'étude : la guerre d'Algérie ; la place et les droits des femmes

### Sujet 1 : la guerre d'Algérie (1954-1962)
- L'Algérie est française depuis **1830**. En 1954, environ un million d'Européens, les **pieds-noirs**, y vivent avec environ neuf millions d'Algériens musulmans, qui ont moins de droits.
- Le **1er novembre 1954** (la « **Toussaint rouge** »), le **Front de libération nationale** (FLN) lance une série d'attentats : c'est le début de la guerre.
- La France envoie l'armée, puis les **appelés du contingent** (environ 1,5 million de jeunes Français pendant toute la guerre).
- En **1957**, pendant la **bataille d'Alger**, les parachutistes du général Massu démantèlent le FLN en utilisant la **torture**.
- Le **13 mai 1958**, une émeute à Alger provoque la chute de la IVe République et le retour de **de Gaulle**.
- De Gaulle propose l'**autodétermination** en 1959. Des généraux tentent un **putsch** en avril **1961** ; l'**OAS** (Organisation armée secrète) multiplie les attentats pour garder l'Algérie française.
- En métropole, la police réprime violemment une manifestation d'Algériens à Paris le **17 octobre 1961**, puis une manifestation contre l'OAS au métro **Charonne** (février 1962).
- Les **accords d'Évian** (**18 mars 1962**) donnent un cessez-le-feu ; l'Algérie devient **indépendante** le **5 juillet 1962**.
- Bilan : des centaines de milliers de morts algériens, environ 25 000 soldats français tués. Les **pieds-noirs** quittent l'Algérie ; beaucoup de **harkis** (Algériens qui ont combattu avec l'armée française) sont massacrés, les autres sont mal accueillis en France.
- Les **mémoires** de cette guerre restent douloureuses et divisées (anciens appelés, pieds-noirs, harkis, Algériens, immigrés). En **1999**, la France reconnaît officiellement le terme « guerre d'Algérie ».

### Sujet 2 : la place et les droits des femmes depuis 1945
- **Droits politiques** : droit de vote et d'éligibilité (**1944**), premier vote en **1945**. Le préambule de la Constitution de **1946** affirme l'égalité entre hommes et femmes.
- **Droits civils** : en **1965**, une femme mariée peut travailler et ouvrir un compte en banque sans l'accord de son mari. En **1970**, l'**autorité parentale** partagée remplace la « puissance paternelle ».
- **Droit de disposer de son corps** : la loi **Neuwirth** (**1967**) autorise la **contraception** ; la loi **Veil** (**1975**) légalise l'**IVG**. Le **Mouvement de libération des femmes** (MLF) milite depuis 1970. En **2024**, la liberté de recourir à l'IVG entre dans la Constitution.
- **Travail** : les femmes sont de plus en plus actives, surtout dans les services. La loi **Roudy** (**1983**) impose l'égalité professionnelle. Mais l'**écart de salaire** avec les hommes persiste, et les femmes occupent plus souvent des temps partiels.
- **Vie politique** : Simone Veil préside le Parlement européen (1979) ; **Édith Cresson** est la première Première ministre (**1991**). La loi sur la **parité** (**2000**) oblige les partis à présenter autant de femmes que d'hommes sur les listes.
- **Violences** : depuis le mouvement **#MeToo** (2017), la parole des femmes victimes de violences se libère ; la lutte contre les féminicides devient une priorité.

### À retenir pour le bac
- Algérie : 1er novembre 1954, bataille d'Alger (1957), 13 mai 1958, putsch (1961), Évian (18 mars 1962), indépendance (5 juillet 1962).
- Femmes : 1944, 1965, 1967, 1975, 1983, 2000.
- Piège : l'égalité des droits ne veut pas dire égalité réelle (salaires, partage des tâches, postes de direction).`,
      cartes: [
        { q: "Qu'est-ce que la Toussaint rouge ?", r: "La série d'attentats lancée par le FLN le 1er novembre 1954 : le début de la guerre d'Algérie." },
        { q: "Qu'est-ce que le FLN ?", r: "Le Front de libération nationale, le mouvement qui mène la lutte armée pour l'indépendance de l'Algérie." },
        { q: "Qui sont les appelés du contingent ?", r: "Les jeunes Français faisant leur service militaire, envoyés en Algérie : environ 1,5 million pendant la guerre." },
        { q: "Que se passe-t-il pendant la bataille d'Alger (1957) ?", r: "Les parachutistes démantèlent le FLN dans la ville en utilisant la torture." },
        { q: "Qu'est-ce que l'OAS ?", r: "L'Organisation armée secrète, qui commet des attentats en Algérie et en France pour empêcher l'indépendance." },
        { q: "Que décident les accords d'Évian ?", r: "Signés le 18 mars 1962, ils prévoient un cessez-le-feu et ouvrent la voie à l'indépendance de l'Algérie." },
        { q: "Qui sont les harkis ?", r: "Des Algériens qui ont combattu aux côtés de l'armée française ; beaucoup sont massacrés après l'indépendance." },
        { q: "Quand l'Algérie devient-elle indépendante ?", r: "Le 5 juillet 1962." },
        { q: "Que permet la loi de 1965 aux femmes mariées ?", r: "Travailler et ouvrir un compte en banque sans l'autorisation de leur mari." },
        { q: "Que permet la loi Neuwirth de 1967 ?", r: "L'usage de la contraception, notamment la pilule." },
        { q: "Que permet la loi Veil de 1975 ?", r: "Elle légalise l'interruption volontaire de grossesse (IVG)." },
        { q: "Qui est Édith Cresson ?", r: "La première femme Première ministre en France, en 1991." },
        { q: "Qu'impose la loi sur la parité de 2000 ?", r: "Que les partis présentent autant de femmes que d'hommes sur les listes électorales." },
        { q: "Quelles inégalités entre femmes et hommes persistent ?", r: "Les écarts de salaire, le temps partiel subi, le partage des tâches domestiques, la rareté des femmes aux postes de direction." },
      ],
      quiz: [
        { q: "La guerre d'Algérie commence en :", choix: ["1954", "1957", "1958", "1962"], bonne: 0, expl: "Le 1er novembre 1954 ; 1962 est l'indépendance.", niv: 1 },
        { q: "La loi qui légalise l'IVG en 1975 porte le nom de :", choix: ["Yvette Roudy", "Lucien Neuwirth", "Simone Veil", "Robert Badinter"], bonne: 2, expl: "La loi Neuwirth (1967) autorise la contraception.", niv: 1 },
        { q: "Les accords qui mettent fin à la guerre d'Algérie sont signés à :", choix: ["Évian", "Genève", "Alger", "Paris"], bonne: 0, expl: "Ils sont signés le 18 mars 1962.", niv: 1 },
        { q: "Un jeune Lyonnais de 20 ans part en Algérie en 1957 pour son service militaire. C'est :", choix: ["un harki", "un appelé du contingent", "un pied-noir", "un membre de l'OAS"], bonne: 1, expl: "Le gouvernement envoie les appelés à partir de 1956.", niv: 2 },
        { q: "En 1962, des Algériens qui ont combattu pour la France sont menacés de mort. Ce sont :", choix: ["les pieds-noirs", "les harkis", "les appelés", "les membres du FLN"], bonne: 1, expl: "Les pieds-noirs sont les Européens d'Algérie.", niv: 2 },
        { q: "En avril 1961, des généraux prennent le pouvoir à Alger contre de Gaulle. C'est :", choix: ["la Toussaint rouge", "la bataille d'Alger", "le putsch des généraux", "le 13 mai 1958"], bonne: 2, expl: "Le putsch échoue en quelques jours.", niv: 2 },
        { q: "En 1966, une femme mariée ouvre un compte bancaire seule pour la première fois. C'est possible grâce à la loi de :", choix: ["1965", "1944", "1975", "2000"], bonne: 0, expl: "La réforme des régimes matrimoniaux de 1965 le permet.", niv: 2 },
        { q: "Un parti doit présenter autant de femmes que d'hommes sur sa liste. Il applique la loi sur :", choix: ["l'IVG", "la parité", "l'autorité parentale", "la contraception"], bonne: 1, expl: "La loi sur la parité date de 2000.", niv: 2 },
        { q: "Pourquoi les mémoires de la guerre d'Algérie sont-elles divisées ?", choix: ["La France n'a pas participé à cette guerre", "La guerre a épargné les civils", "Les archives ont été détruites en 1962", "Chaque groupe a vécu la guerre différemment"], bonne: 3, expl: "Appelés, pieds-noirs, harkis et Algériens ont des souvenirs opposés.", niv: 3 },
        { q: "Quelle affirmation sur l'égalité femmes-hommes est juste ?", choix: ["Les femmes ne travaillent presque pas avant 2000", "L'égalité réelle est atteinte depuis le droit de vote accordé en 1944", "L'égalité des droits n'a pas fait disparaître l'écart de salaire", "La parité s'applique aux salaires des entreprises"], bonne: 2, expl: "Les écarts de salaire et de carrière persistent.", niv: 3 },
      ],
    },
    {
      chapitre: 'hg-t-7',
      fiche: `## Mers et océans : vecteurs essentiels de la mondialisation

### La maritimisation de l'économie
- La **mondialisation** est la mise en relation des différentes parties du monde par des flux de marchandises, de capitaux, de personnes et d'informations.
- La **maritimisation** : environ **80 % du commerce mondial en volume** passe par la mer. Le transport maritime est lent, mais c'est le moins cher pour les grandes quantités.
- La **conteneurisation** a fait baisser les coûts : les marchandises voyagent dans des boîtes standard, mesurées en **EVP** (équivalent vingt pieds), chargées sans être ouvertes du navire au train ou au camion.
- Les navires sont de plus en plus gros : les plus grands porte-conteneurs emportent plus de 24 000 EVP, les plus grands pétroliers plus de 300 000 tonnes.
- Les flux suivent des **routes maritimes**, surtout entre l'**Asie orientale**, l'**Europe** et l'**Amérique du Nord**.

### Ports et façades maritimes
- Les **ports** sont des portes d'entrée de la mondialisation. Les plus grands ports à conteneurs sont asiatiques : **Shanghai** (premier du monde), **Singapour**, Ningbo, Shenzhen. **Rotterdam** est le premier port d'Europe.
- Une **façade maritime** regroupe plusieurs ports proches : la **Northern Range** (du Havre à Hambourg) en Europe, la façade de l'Asie orientale, la côte est des États-Unis.
- Les ports deviennent des **plateformes multimodales** qui relient bateau, train, camion et péniche.

### Des passages stratégiques
- Les **canaux** et les **détroits internationaux** sont des passages obligés : **Suez** (1869), **Panama** (1914), les détroits de **Malacca**, **Ormuz**, **Bab el-Mandeb**, **Gibraltar** et le **Pas-de-Calais**, le plus fréquenté du monde.
- Un blocage a des effets mondiaux : un porte-conteneurs bloque le canal de Suez pendant six jours en mars 2021 ; des attaques de navires en mer Rouge détournent le trafic vers le cap de Bonne-Espérance à partir de fin 2023.

### Les ressources des mers et des océans
- **Pêche** et **aquaculture** : elles nourrissent des milliards de personnes, mais la **surpêche** menace des espèces.
- **Énergie** : pétrole et gaz **offshore** (en mer du Nord, dans le golfe de Guinée, au Brésil), éoliennes en mer.
- **Minerais** des grands fonds (nodules), encore peu exploités.
- **Tourisme** littoral et croisières.

### Contrôler les mers
- La **convention de Montego Bay** (**1982**) définit la **mer territoriale** (12 milles marins) et la **zone économique exclusive** (**ZEE**, jusqu'à **200 milles marins**), où l'État exploite seul les ressources. Au-delà, la **haute mer** est libre.
- Les grandes puissances ont des **marines de guerre** pour protéger leurs routes : les États-Unis ont 11 porte-avions ; la Chine construit une grande flotte.
- Des **tensions** : en **mer de Chine méridionale**, la Chine revendique presque tout l'espace ; **piraterie** dans le golfe d'Aden et le golfe de Guinée.
- Les océans sont aussi fragilisés : **pollution** plastique, marées noires, réchauffement. Des **aires marines protégées** et un traité sur la haute mer (2023) cherchent à les protéger.

### À retenir pour le bac
- Le vocabulaire : maritimisation, route maritime, canaux et détroits internationaux, façade maritime, ZEE.
- Les grands repères : Suez, Panama, Malacca, Ormuz, Shanghai, Singapour, Rotterdam.
- Piège : la ZEE donne des droits sur les ressources, pas le droit d'interdire le passage des navires.`,
      cartes: [
        { q: "Qu'est-ce que la mondialisation ?", r: "La mise en relation des différentes parties du monde par des flux de marchandises, de capitaux, de personnes et d'informations." },
        { q: "Qu'est-ce que la maritimisation ?", r: "La part croissante des échanges qui passent par la mer : environ 80 % du commerce mondial en volume." },
        { q: "Pourquoi le transport maritime domine-t-il le commerce ?", r: "C'est le moins cher pour transporter de grandes quantités sur de longues distances." },
        { q: "Qu'est-ce qu'un EVP ?", r: "L'équivalent vingt pieds : l'unité qui mesure les conteneurs et la capacité des navires." },
        { q: "Qu'est-ce qu'une route maritime ?", r: "Un itinéraire régulier emprunté par les navires de commerce entre les grands ports." },
        { q: "Quels sont les premiers ports à conteneurs du monde ?", r: "Des ports asiatiques : Shanghai, Singapour, Ningbo, Shenzhen. Rotterdam est le premier d'Europe." },
        { q: "Qu'est-ce qu'une façade maritime ?", r: "Un ensemble de ports proches qui desservent un même arrière-pays, comme la Northern Range du Havre à Hambourg." },
        { q: "Qu'est-ce qu'une plateforme multimodale ?", r: "Un lieu où l'on passe d'un mode de transport à un autre : bateau, train, camion, péniche." },
        { q: "Pourquoi les détroits sont-ils stratégiques ?", r: "Ce sont des passages étroits et obligés : leur blocage arrête une partie du commerce mondial." },
        { q: "Quand ont ouvert les canaux de Suez et de Panama ?", r: "Suez en 1869, Panama en 1914." },
        { q: "Qu'est-ce que la ZEE ?", r: "La zone économique exclusive, jusqu'à 200 milles marins des côtes, où l'État exploite seul les ressources." },
        { q: "Qu'est-ce que la haute mer ?", r: "L'espace au-delà des ZEE, qui n'appartient à aucun État : la navigation y est libre." },
        { q: "Quelles ressources offrent les mers ?", r: "La pêche, le pétrole et le gaz offshore, l'énergie des éoliennes en mer, des minerais, le tourisme." },
        { q: "Pourquoi la mer de Chine méridionale est-elle un espace de tensions ?", r: "La Chine revendique presque toute cette mer, contre les Philippines, le Vietnam ou la Malaisie." },
      ],
      quiz: [
        { q: "La part du commerce mondial en volume transportée par la mer est d'environ :", choix: ["30 %", "80 %", "50 %", "60 %"], bonne: 1, expl: "La mer est le moyen le moins cher pour les grandes quantités.", niv: 1 },
        { q: "Le premier port à conteneurs du monde est :", choix: ["Shanghai", "Rotterdam", "New York", "Le Havre"], bonne: 0, expl: "Rotterdam est le premier port européen.", niv: 1 },
        { q: "Le canal de Suez ouvre en :", choix: ["1945", "1914", "1869", "1982"], bonne: 2, expl: "1914 est l'ouverture du canal de Panama.", niv: 1 },
        { q: "Un pétrolier qui quitte le golfe Persique doit franchir le détroit :", choix: ["de Malacca d'abord", "de Gibraltar", "du Pas-de-Calais", "d'Ormuz"], bonne: 3, expl: "Ormuz est la seule sortie du golfe Persique.", niv: 2 },
        { q: "Un conteneur passe d'un navire à un train à Rotterdam sans être ouvert. Rotterdam est :", choix: ["un détroit international", "une zone économique exclusive", "une plateforme multimodale", "un espace de haute mer"], bonne: 2, expl: "Le port relie plusieurs modes de transport.", niv: 2 },
        { q: "Un État exploite seul le pétrole à 150 milles de ses côtes. Il est dans sa :", choix: ["ZEE", "mer territoriale", "haute mer", "route maritime"], bonne: 0, expl: "La ZEE va jusqu'à 200 milles ; la mer territoriale s'arrête à 12.", niv: 2 },
        { q: "En 2021, un navire bloque le canal de Suez pendant six jours. Cela montre :", choix: ["la fin de la maritimisation", "la fragilité des passages stratégiques", "la protection de la haute mer", "la puissance de la Northern Range"], bonne: 1, expl: "Des centaines de navires attendent et les livraisons sont retardées dans le monde.", niv: 2 },
        { q: "Les ports du Havre, d'Anvers, de Rotterdam et de Hambourg forment :", choix: ["une route transatlantique", "un détroit stratégique", "une ZEE commune", "la Northern Range"], bonne: 3, expl: "C'est la première façade maritime européenne.", niv: 2 },
        { q: "Pourquoi les grands ports à conteneurs sont-ils surtout en Asie ?", choix: ["Le transport par la mer y est gratuit", "Les autres continents n'ont pas de littoral assez profond pour les grands navires", "L'Asie orientale est l'atelier du monde qui exporte massivement", "Les ports européens ont été fermés"], bonne: 2, expl: "Les usines asiatiques expédient leurs produits vers le monde entier.", niv: 3 },
        { q: "Quelle affirmation sur la ZEE est juste ?", choix: ["Elle appartient à l'ONU", "Elle permet d'interdire le passage des navires de commerce étrangers", "Elle s'arrête à 12 milles des côtes", "Elle donne des droits sur les ressources, pas sur le passage"], bonne: 3, expl: "Les navires étrangers peuvent la traverser librement.", niv: 3 },
      ],
    },
    {
      chapitre: 'hg-t-8',
      fiche: `## Sujets d'étude : les câbles sous-marins ; le détroit de Malacca

### Sujet 1 : les réseaux de câbles sous-marins
- Sous les océans courent environ **1,4 million de kilomètres** de **câbles sous-marins**, en **fibre optique**. Ils transportent plus de **99 % des communications intercontinentales** : Internet, appels, transactions financières.
- Les satellites ne transportent qu'une petite part des données : les câbles sont plus rapides et moins chers.
- L'histoire commence avec le **télégraphe** : le premier câble transatlantique durable est posé en **1866**.
- Le réseau dessine la carte de la mondialisation : les liaisons les plus denses relient l'**Amérique du Nord**, l'**Europe** et l'**Asie orientale**. L'Afrique est moins bien reliée, mais de nouveaux câbles l'entourent.
- Les câbles « atterrissent » dans des **points d'atterrissement** sur les côtes. **Marseille** est devenu un grand carrefour de câbles entre l'Europe, l'Afrique, le Moyen-Orient et l'Asie, avec de nombreux centres de données.
- Les **acteurs** : des opérateurs de télécommunications, de plus en plus les **géants du numérique** (Google, Meta, Amazon, Microsoft), qui financent leurs propres câbles. Google a ainsi posé le câble **Dunant** entre les États-Unis et la France (2021). Peu d'entreprises savent fabriquer et poser ces câbles, dont **Alcatel Submarine Networks**, une entreprise française.
- Les câbles sont **vulnérables** : coupures par des ancres ou des chaluts, séismes, et **sabotages** (soupçons en mer Baltique en 2023 et 2024). Les États les protègent avec leur marine : c'est un enjeu de **souveraineté** et d'espionnage.

### Sujet 2 : le détroit de Malacca, un passage majeur et stratégique
- Le détroit de **Malacca** sépare la péninsule malaise de l'île indonésienne de **Sumatra**. Il relie l'**océan Indien** à la mer de Chine méridionale et au **Pacifique**.
- Il mesure environ **800 km** de long, mais moins de **3 km** de large dans sa partie navigable la plus étroite, près de Singapour.
- C'est l'un des détroits les plus fréquentés du monde : environ **90 000 navires** par an, porte-conteneurs entre l'Asie et l'Europe, **pétroliers** venant du golfe Persique vers la Chine, le Japon, la Corée du Sud.
- Trois **États riverains** : la **Malaisie**, l'**Indonésie** et **Singapour**. **Singapour**, cité-État située à la sortie du détroit, en a fait l'un des **premiers ports du monde** et une grande place financière.
- Les **risques** : collisions, **pollution**, **piraterie** (fréquente au début des années 2000, réduite depuis les patrouilles communes des États riverains lancées en 2004).
- Un enjeu **géopolitique** : la **Chine** importe par ce détroit une grande partie de son pétrole. En 2003, son président parle du « **dilemme de Malacca** » : un blocage par une marine ennemie l'asphyxierait.
- Pour le contourner, la Chine finance des **routes alternatives** dans le cadre des **nouvelles routes de la soie** (2013) : oléoduc et gazoduc à travers la Birmanie, ports au Pakistan ; d'autres navires passent par les détroits de la Sonde ou de Lombok, plus longs.

### À retenir pour le bac
- Câbles : 99 % des communications intercontinentales, géants du numérique, Marseille, vulnérabilité.
- Malacca : océan Indien-Pacifique, 90 000 navires par an, Singapour, piraterie, dilemme chinois.
- Piège : Internet passe surtout par la mer, pas par les satellites.`,
      cartes: [
        { q: "Quelle part des communications intercontinentales passe par les câbles sous-marins ?", r: "Plus de 99 % : Internet, appels, transactions financières." },
        { q: "Quelle longueur totale font les câbles sous-marins ?", r: "Environ 1,4 million de kilomètres." },
        { q: "Pourquoi les câbles sont-ils préférés aux satellites ?", r: "Ils transportent beaucoup plus de données, plus vite et moins cher." },
        { q: "Qu'est-ce qu'un point d'atterrissement ?", r: "L'endroit de la côte où un câble sous-marin sort de la mer pour être relié aux réseaux terrestres." },
        { q: "Pourquoi Marseille est-il un carrefour numérique ?", r: "De nombreux câbles reliant l'Europe à l'Afrique, au Moyen-Orient et à l'Asie y atterrissent, avec des centres de données." },
        { q: "Qui finance de plus en plus les câbles sous-marins ?", r: "Les géants du numérique comme Google, Meta, Amazon et Microsoft." },
        { q: "Quelles menaces pèsent sur les câbles ?", r: "Les coupures par des ancres ou des chaluts, les séismes, les sabotages et l'espionnage." },
        { q: "Où se trouve le détroit de Malacca ?", r: "Entre la péninsule malaise et l'île de Sumatra ; il relie l'océan Indien au Pacifique." },
        { q: "Combien de navires franchissent le détroit de Malacca chaque année ?", r: "Environ 90 000." },
        { q: "Quels sont les États riverains du détroit de Malacca ?", r: "La Malaisie, l'Indonésie et Singapour." },
        { q: "Pourquoi Singapour profite-t-il du détroit ?", r: "Placé à sa sortie, il en a fait l'un des premiers ports du monde et une grande place financière." },
        { q: "Qu'est-ce que le « dilemme de Malacca » ?", r: "La peur chinoise d'un blocage du détroit, par où passe une grande partie de son pétrole importé." },
        { q: "Comment la piraterie a-t-elle reculé à Malacca ?", r: "Grâce aux patrouilles communes de la Malaisie, de l'Indonésie et de Singapour, lancées en 2004." },
        { q: "Comment la Chine cherche-t-elle à contourner Malacca ?", r: "Par des oléoducs et gazoducs via la Birmanie et des ports au Pakistan, dans le cadre des nouvelles routes de la soie." },
      ],
      quiz: [
        { q: "La part des communications intercontinentales passant par les câbles sous-marins est de plus de :", choix: ["99 %", "50 %", "75 %", "30 %"], bonne: 0, expl: "Les satellites ne transportent qu'une petite partie des données.", niv: 1 },
        { q: "Le détroit de Malacca relie l'océan Indien et :", choix: ["la Méditerranée", "l'Atlantique", "le Pacifique", "l'océan Arctique"], bonne: 2, expl: "Il mène vers la mer de Chine méridionale et le Pacifique.", niv: 1 },
        { q: "La cité-État située à la sortie du détroit de Malacca est :", choix: ["Shanghai", "Hong Kong", "Dubaï", "Singapour"], bonne: 3, expl: "Singapour est l'un des premiers ports du monde.", niv: 1 },
        { q: "Un câble entre les États-Unis et la France est financé par Google. Cela montre le rôle :", choix: ["des États riverains", "des géants du numérique", "des marines de guerre", "des organisations internationales"], bonne: 1, expl: "Ces entreprises construisent leurs propres réseaux.", niv: 2 },
        { q: "Une ancre de navire arrache un câble et coupe Internet sur une île. Cela montre :", choix: ["la vulnérabilité des câbles", "la fin des satellites", "la protection de la haute mer", "l'utilité des détroits"], bonne: 0, expl: "Un incident local peut couper les échanges d'un territoire.", niv: 2 },
        { q: "Un pétrolier part d'Arabie saoudite vers la Chine par la route la plus courte. Il passe par :", choix: ["Panama puis Malacca", "Suez puis Gibraltar", "Ormuz puis Malacca", "Bab el-Mandeb puis Suez"], bonne: 2, expl: "Il sort du golfe Persique, traverse l'océan Indien, puis Malacca.", niv: 2 },
        { q: "Une ville française accueille de nombreux câbles et centres de données. Il s'agit de :", choix: ["Strasbourg", "Marseille", "Lille", "Toulouse"], bonne: 1, expl: "Marseille est un carrefour vers l'Afrique et l'Asie.", niv: 2 },
        { q: "Le nombre de navires qui franchissent Malacca chaque année est d'environ :", choix: ["60 000", "9 000", "900", "90 000"], bonne: 3, expl: "C'est l'un des détroits les plus fréquentés du monde.", niv: 2 },
        { q: "Pourquoi la Chine parle-t-elle d'un « dilemme de Malacca » ?", choix: ["Son pétrole passe par un détroit qu'elle ne contrôle pas", "Elle possède le détroit et doit le défendre contre ses voisins d'Asie", "Le détroit est fermé aux navires chinois", "Elle importe son pétrole par voie terrestre"], bonne: 0, expl: "Un blocage priverait la Chine d'une grande partie de son énergie.", niv: 3 },
        { q: "Quelle affirmation sur les câbles sous-marins est juste ?", choix: ["Ils sont gérés par l'ONU", "Ils servent encore surtout au télégraphe", "Ils sont pour tous les États un enjeu de souveraineté", "Ils relient aussi bien l'Afrique que l'Europe"], bonne: 2, expl: "Les États les protègent contre le sabotage et l'espionnage.", niv: 3 },
      ],
    },
    {
      chapitre: 'hg-t-9',
      fiche: `## Des dynamiques territoriales contrastées au sein de la mondialisation

### Les moteurs de la mondialisation : décideurs publics et entreprises
- Les **décideurs publics** (États, régions, villes) aménagent leur territoire pour attirer les entreprises : ports, aéroports, autoroutes, zones d'activités, avantages fiscaux.
- Exemple : la Chine crée des **zones économiques spéciales** (ZES), comme **Shenzhen** en **1980**, où les entreprises étrangères paient moins d'impôts.
- Les **firmes transnationales** (FTN) ont des filiales dans plusieurs pays. Elles organisent des **réseaux internationaux de production** : conception dans un pays riche, fabrication des pièces dans plusieurs pays, assemblage là où la main-d'œuvre coûte moins cher, vente dans le monde entier.
- Leur **centre de décision** (le siège social) reste souvent dans une grande métropole des pays riches.
- Elles choisissent leurs implantations selon le coût du travail, la qualification, les marchés, les infrastructures et la stabilité.

### Les distances : un frein qui demeure
- Les transports (conteneurs, avions) et Internet ont réduit les **distances-temps** et les **distances-coûts**.
- Mais la distance compte encore : un territoire loin des ports, enclavé, mal relié ou en montagne attire peu d'entreprises. Le coût du transport pèse dans les décisions.

### Les territoires moteurs, à toutes les échelles
- Les **métropoles** concentrent les centres de décision, les emplois qualifiés, les universités : New York, Londres, Tokyo, Paris, Shanghai. C'est la **métropolisation**.
- Les **hubs** (plaques tournantes) aériens et portuaires concentrent et redistribuent les flux : Dubaï, Singapour, Roissy-Charles-de-Gaulle.
- Les **littoraux** attirent ports et industries : c'est la **littoralisation**.
- À l'échelle mondiale, trois grands pôles dominent : **Amérique du Nord**, **Europe occidentale**, **Asie orientale**. Les **pays émergents** (Chine, Inde, Brésil) s'intègrent de plus en plus.
- La **division internationale du travail** a changé : les pays émergents ne fabriquent plus seulement des produits simples ; la Chine produit aussi des voitures électriques et des panneaux solaires.

### Les territoires en marge
- Des territoires sont peu reliés aux flux : une grande partie de l'**Afrique subsaharienne**, le **Sahel**, les régions enclavées, des espaces ruraux isolés, certaines zones en guerre.
- Les inégalités existent aussi **dans un même pays** (littoral chinois riche et intérieur plus pauvre) et **dans une même ville** (quartier d'affaires et bidonvilles d'une métropole comme Bombay).
- On parle d'un modèle **centre-périphérie** : des centres qui commandent et des périphéries qui dépendent d'eux.

### À retenir pour le bac
- Deux acteurs principaux : décideurs publics et FTN.
- Des territoires intégrés (métropoles, hubs, littoraux) et des marges, à toutes les échelles.
- Notions : centre de décision, réseau international de production, hub, métropole, plateforme multimodale.
- Piège : la mondialisation ne fait pas disparaître les distances ; elle les rend inégales.`,
      cartes: [
        { q: "Qu'est-ce qu'un décideur public ?", r: "Un État, une région ou une ville qui prend des décisions d'aménagement pour son territoire." },
        { q: "Qu'est-ce qu'une zone économique spéciale ?", r: "Une zone où les entreprises étrangères bénéficient d'impôts réduits, comme Shenzhen en Chine depuis 1980." },
        { q: "Qu'est-ce qu'une firme transnationale ?", r: "Une entreprise qui a des filiales, des usines ou des bureaux dans plusieurs pays." },
        { q: "Qu'est-ce qu'un réseau international de production ?", r: "L'organisation de la fabrication d'un produit entre plusieurs pays : conception, pièces, assemblage, vente." },
        { q: "Qu'est-ce qu'un centre de décision ?", r: "Le lieu où se prennent les décisions importantes, comme le siège social d'une FTN, souvent dans une grande métropole." },
        { q: "Sur quoi les FTN fondent-elles le choix de leurs implantations ?", r: "Le coût et la qualification de la main-d'œuvre, l'accès aux marchés, les infrastructures, la stabilité du pays." },
        { q: "Qu'est-ce que la distance-temps ?", r: "La distance mesurée par le temps nécessaire pour aller d'un lieu à un autre." },
        { q: "Qu'est-ce qu'un territoire enclavé ?", r: "Un territoire difficile d'accès, sans débouché sur la mer ou mal relié aux réseaux de transport." },
        { q: "Qu'est-ce que la métropolisation ?", r: "La concentration des populations, des activités et des pouvoirs dans les plus grandes villes." },
        { q: "Qu'est-ce qu'un hub ?", r: "Une plaque tournante où les flux convergent puis sont redistribués, comme un grand aéroport de correspondance." },
        { q: "Qu'est-ce que la littoralisation ?", r: "La concentration des hommes et des activités sur les littoraux." },
        { q: "Quels sont les trois grands pôles de la mondialisation ?", r: "L'Amérique du Nord, l'Europe occidentale et l'Asie orientale." },
        { q: "Qu'est-ce qu'une marge de la mondialisation ?", r: "Un territoire peu relié aux flux mondiaux, comme le Sahel ou des espaces ruraux isolés." },
        { q: "Qu'est-ce que le modèle centre-périphérie ?", r: "Une organisation où des centres riches commandent et des périphéries dépendent d'eux." },
      ],
      quiz: [
        { q: "La zone économique spéciale de Shenzhen est créée en :", choix: ["2001", "1949", "1995", "1980"], bonne: 3, expl: "2001 est l'entrée de la Chine à l'OMC.", niv: 1 },
        { q: "Le lieu où une FTN prend ses grandes décisions est :", choix: ["sa plateforme multimodale", "son usine d'assemblage", "son centre de décision", "son point de vente"], bonne: 2, expl: "C'est en général le siège social, dans une métropole.", niv: 1 },
        { q: "Une plaque tournante où les flux convergent puis repartent s'appelle :", choix: ["un hub", "une marge", "une ZES", "un centre de décision"], bonne: 0, expl: "Les grands aéroports de correspondance sont des hubs.", niv: 1 },
        { q: "Un téléphone est conçu en Californie, fabriqué avec des pièces coréennes et assemblé en Chine. C'est :", choix: ["une zone économique exclusive", "un réseau international de production", "un hub aéroportuaire", "une métropolisation"], bonne: 1, expl: "La production est répartie entre plusieurs pays.", niv: 2 },
        { q: "Une région construit une autoroute et une zone d'activités pour attirer des usines. Elle agit en :", choix: ["décideur public", "firme transnationale", "organisation internationale", "ONG"], bonne: 0, expl: "Les collectivités aménagent le territoire pour le rendre attractif.", niv: 2 },
        { q: "Un pays sans accès à la mer et loin des ports attire peu d'usines. Il est :", choix: ["métropolisé", "littoralisé", "enclavé", "multimodal"], bonne: 2, expl: "La distance aux ports reste un frein.", niv: 2 },
        { q: "Un quartier d'affaires de Bombay jouxte un immense bidonville. Cela montre des inégalités à l'échelle :", choix: ["continentale", "mondiale", "locale", "nationale"], bonne: 2, expl: "Les contrastes existent aussi à l'intérieur d'une même ville.", niv: 2 },
        { q: "Les trois grands pôles de la mondialisation sont l'Amérique du Nord, l'Europe occidentale et :", choix: ["l'Afrique de l'Ouest", "l'Asie orientale", "l'Amérique du Sud", "l'Océanie"], bonne: 1, expl: "Chine, Japon et Corée du Sud forment ce troisième pôle.", niv: 2 },
        { q: "Pourquoi les distances restent-elles un frein malgré les transports modernes ?", choix: ["Les conteneurs sont interdits sur certaines routes", "Les avions ne transportent plus de marchandises depuis la crise du covid", "Internet ne fonctionne pas entre continents", "Le transport a toujours un coût et certains lieux sont mal reliés"], bonne: 3, expl: "L'accès aux réseaux est très inégal selon les territoires.", niv: 3 },
        { q: "Quelle affirmation sur les pays émergents est juste ?", choix: ["Ils restent en marge de la mondialisation", "Ils produisent aussi des biens de haute technologie", "Ils ne fabriquent que des produits simples", "Ils refusent les FTN étrangères"], bonne: 1, expl: "La Chine produit voitures électriques et panneaux solaires.", niv: 3 },
      ],
    },
    {
      chapitre: 'hg-t-10',
      fiche: `## Sujets d'étude : New York ; l'aéroport de Roissy-Charles-de-Gaulle

### Sujet 1 : New York, un centre de la mondialisation
- **New York** compte environ **8,5 millions** d'habitants dans la ville et une vingtaine de millions dans son agglomération. C'est la première ville des États-Unis.
- Elle est au cœur de la **mégalopole** du Nord-Est américain (de Boston à Washington), l'un des espaces les plus riches du monde.
- C'est une **ville mondiale** : elle commande des flux à l'échelle de la planète.
- **Centre financier** : la **Bourse de New York** (Wall Street) est la première du monde ; les grandes banques et sociétés d'investissement s'y trouvent.
- **Centre de décision** : de nombreuses FTN y ont leur siège ; le quartier d'affaires de **Manhattan** concentre les gratte-ciel.
- **Centre politique** : le siège de l'**ONU** y est installé depuis 1952.
- **Centre culturel** : musées (MoMA, Metropolitan Museum), théâtres de **Broadway**, médias, mode, universités (Columbia, New York University). Son image (Statue de la Liberté, Times Square) attire plus de 60 millions de visiteurs par an.
- **Carrefour de flux** : trois grands aéroports (**JFK**, Newark, LaGuardia), l'un des premiers ports de la côte est (New York-New Jersey), des câbles sous-marins vers l'Europe.
- C'est une ville d'**immigration** : plus d'un habitant sur trois est né à l'étranger.
- Des **contrastes** : quartiers très riches de Manhattan et quartiers pauvres du Bronx ; la **gentrification** (arrivée de ménages aisés dans des quartiers populaires, comme à Brooklyn ou Harlem) fait monter les loyers. Les attentats du **11 septembre 2001** ont montré sa **vulnérabilité**.

### Sujet 2 : Roissy-Charles-de-Gaulle, un hub au cœur des échanges européens
- L'aéroport **Paris-Charles-de-Gaulle**, à **Roissy**, au nord-est de Paris, est ouvert en **1974**. Il est géré par le **Groupe ADP**.
- Il accueille environ **70 millions de passagers** par an : c'est l'un des **trois premiers aéroports européens**, avec Londres-Heathrow et Istanbul.
- C'est le **hub** de la compagnie **Air France** (groupe Air France-KLM) : les passagers venus de toute la France et d'Europe y prennent des correspondances vers le monde entier, et inversement.
- C'est aussi un grand aéroport de **fret** (marchandises urgentes, colis, produits de luxe, médicaments).
- C'est une **plateforme multimodale** : une **gare TGV** (depuis **1994**) et le **RER B** le relient au reste du pays ; une liaison directe vers Paris, le CDG Express, est en construction.
- Il est l'un des premiers pôles d'emploi d'Île-de-France : des dizaines de milliers de salariés travaillent sur la plateforme, et de nombreuses entreprises de logistique et d'hôtellerie s'installent autour.
- Il est en **concurrence** avec d'autres hubs : Londres-Heathrow, **Amsterdam-Schiphol** (hub de KLM), **Francfort**, **Istanbul**, et les hubs du Golfe comme **Dubaï**, qui captent les liaisons entre l'Europe et l'Asie.
- Pour rester attractif, il doit s'agrandir et se moderniser, mais il fait face à des **contraintes** : **nuisances sonores** pour les riverains, pollution, objectifs de réduction des émissions de CO2. Le projet d'un nouveau terminal (T4) a été abandonné en 2021.

### À retenir pour le bac
- New York : finance (Wall Street), ONU, sièges de FTN, culture, aéroports, immigration, contrastes sociaux.
- Roissy-CDG : hub d'Air France, environ 70 millions de passagers, gare TGV, concurrence européenne et du Golfe, nuisances.
- Notions : ville mondiale, centre de décision, hub, plateforme multimodale.
- Piège : un hub n'est pas seulement un grand aéroport, c'est un lieu de correspondances qui redistribue les flux.`,
      cartes: [
        { q: "Pourquoi New York est-elle une ville mondiale ?", r: "Elle commande des flux mondiaux : finance, sièges de FTN, ONU, culture, médias, aéroports internationaux." },
        { q: "Qu'est-ce que Wall Street ?", r: "Le quartier de la Bourse de New York, la première du monde, symbole de la puissance financière américaine." },
        { q: "Depuis quand le siège de l'ONU est-il à New York ?", r: "Depuis 1952, sur l'île de Manhattan." },
        { q: "Qu'est-ce que la mégalopole du Nord-Est américain ?", r: "Une chaîne de grandes villes reliées entre elles, de Boston à Washington, avec New York en son centre." },
        { q: "Quelle part des New-Yorkais est née à l'étranger ?", r: "Plus d'un habitant sur trois." },
        { q: "Qu'est-ce que la gentrification ?", r: "L'arrivée de ménages aisés dans un quartier populaire, qui fait monter les loyers et pousse les plus pauvres à partir." },
        { q: "Quand l'aéroport de Roissy-Charles-de-Gaulle a-t-il ouvert ?", r: "En 1974." },
        { q: "Combien de passagers accueille Roissy-CDG par an ?", r: "Environ 70 millions, ce qui le place parmi les trois premiers aéroports européens." },
        { q: "Pourquoi Roissy-CDG est-il un hub ?", r: "C'est la plaque tournante d'Air France : les passagers y prennent des correspondances entre la France, l'Europe et le monde." },
        { q: "Pourquoi Roissy-CDG est-il une plateforme multimodale ?", r: "Il relie l'avion au TGV (gare depuis 1994), au RER et aux autoroutes." },
        { q: "Avec quels hubs Roissy-CDG est-il en concurrence ?", r: "Londres-Heathrow, Amsterdam-Schiphol, Francfort, Istanbul et les hubs du Golfe comme Dubaï." },
        { q: "Quelles contraintes freinent le développement de Roissy-CDG ?", r: "Les nuisances sonores pour les riverains, la pollution et les objectifs de réduction des émissions de CO2." },
        { q: "Qui gère l'aéroport de Roissy-CDG ?", r: "Le Groupe ADP (Aéroports de Paris)." },
        { q: "Pourquoi Roissy-CDG compte-t-il pour l'économie francilienne ?", r: "Des dizaines de milliers de personnes y travaillent, et la logistique et l'hôtellerie se développent autour." },
      ],
      quiz: [
        { q: "La première Bourse du monde se trouve à :", choix: ["New York", "Londres", "Tokyo", "Paris"], bonne: 0, expl: "Wall Street domine la finance mondiale.", niv: 1 },
        { q: "L'aéroport de Roissy-Charles-de-Gaulle ouvre en :", choix: ["1980", "1974", "1994", "2001"], bonne: 1, expl: "1994 est l'ouverture de sa gare TGV.", niv: 1 },
        { q: "La compagnie dont Roissy-CDG est le hub est :", choix: ["Lufthansa", "KLM", "Air France", "Emirates"], bonne: 2, expl: "KLM, du même groupe, a son hub à Amsterdam.", niv: 1 },
        { q: "Un passager venu de Nantes change d'avion à Roissy pour aller à Tokyo. Roissy joue le rôle de :", choix: ["zone franche", "marge", "centre de décision", "hub"], bonne: 3, expl: "Le hub redistribue les passagers vers d'autres destinations.", niv: 2 },
        { q: "Des artistes et des familles aisées s'installent dans un ancien quartier ouvrier de Brooklyn. C'est :", choix: ["la littoralisation", "la métropolisation", "la gentrification", "la périurbanisation"], bonne: 2, expl: "La hausse des loyers chasse les habitants les plus modestes.", niv: 2 },
        { q: "Le siège de l'ONU à New York fait de la ville un centre :", choix: ["agricole", "industriel", "politique", "portuaire"], bonne: 2, expl: "Les diplomates du monde entier y siègent.", niv: 2 },
        { q: "Un voyageur arrive à Roissy en avion et repart directement en TGV vers Lyon. Roissy est :", choix: ["une plateforme multimodale", "un espace en marge", "une zone économique spéciale", "une façade maritime"], bonne: 0, expl: "Plusieurs modes de transport s'y connectent.", niv: 2 },
        { q: "Le nombre de passagers de Roissy-CDG par an est d'environ :", choix: ["7 millions", "70 millions", "20 millions", "50 millions"], bonne: 1, expl: "Il est parmi les trois premiers aéroports européens.", niv: 2 },
        { q: "Pourquoi les hubs du Golfe concurrencent-ils Roissy ?", choix: ["Ils sont plus proches de l'Amérique", "Ils captent les correspondances entre l'Europe et l'Asie", "Ils accueillent la plupart des vols intérieurs français et européens", "Ils remplacent les gares TGV"], bonne: 1, expl: "Dubaï est placé à mi-chemin entre l'Europe et l'Asie.", niv: 3 },
        { q: "Quelle affirmation sur New York est juste ?", choix: ["Sa puissance mondiale cohabite avec de fortes inégalités", "Ses habitants sont nés pour la plupart aux États-Unis", "Elle a perdu son rôle financier depuis 2001", "Elle n'a qu'un seul aéroport"], bonne: 0, expl: "Manhattan et le Bronx montrent ces contrastes.", niv: 3 },
      ],
    },
    {
      chapitre: 'hg-t-11',
      fiche: `## Les lieux de l'influence française dans la mondialisation

### Trois notions
- Le **rayonnement** : la présence et l'image d'un pays dans le monde.
- L'**influence** : la capacité à peser sur les décisions des autres pays.
- L'**attractivité** : la capacité d'un territoire à attirer touristes, étudiants, entreprises et investissements.

### Une puissance insérée dans la mondialisation
- La France est l'une des dix premières **économies** du monde. Ses grandes **entreprises** sont présentes partout : **TotalEnergies** (énergie), **LVMH** (premier groupe mondial du luxe), **Airbus** (aéronautique, avec ses partenaires européens), L'Oréal, Danone.
- Elle exporte des avions, des produits de luxe, des cosmétiques, des médicaments, des vins.
- Elle reste dépendante : elle importe plus qu'elle n'exporte (**déficit commercial**).

### Un rayonnement diplomatique et militaire
- **Membre permanent du Conseil de sécurité** de l'ONU, avec droit de veto ; **puissance nucléaire**.
- Elle a l'un des plus grands **réseaux diplomatiques** du monde (ambassades, consulats).
- Elle accueille des **organisations internationales** : l'**UNESCO** et l'**OCDE** à Paris, le **Parlement européen** et le **Conseil de l'Europe** à Strasbourg.
- Elle a des **bases militaires** à l'étranger (Djibouti, Émirats arabes unis) et des forces en **outre-mer**.
- L'**outre-mer** lui donne une présence sur tous les océans et la **deuxième ZEE du monde** (environ 10 millions de km²).
- Elle est un moteur de l'**Union européenne**, souvent avec l'Allemagne.

### Un rayonnement culturel et scientifique
- La **francophonie** : environ **320 millions** de francophones dans le monde, surtout en Afrique ; l'Organisation internationale de la Francophonie réunit des dizaines d'États.
- Un réseau culturel : **Instituts français**, **Alliances françaises**, lycées français à l'étranger, médias internationaux (RFI, France 24, TV5 Monde).
- La **science** : le réseau des **Instituts Pasteur** dans le monde, le **Centre spatial guyanais**, la recherche nucléaire.
- La **culture** : cinéma (festival de Cannes), gastronomie (inscrite au patrimoine immatériel de l'UNESCO en 2010), mode, sport (Jeux olympiques de Paris **2024**).

### Un territoire attractif
- La France est la **première destination touristique du monde** : environ **100 millions** de touristes internationaux par an.
- Elle accueille plus de 400 000 **étudiants étrangers**.
- Elle est le **premier pays européen** pour le nombre de projets d'**investissements étrangers** chaque année depuis 2019.
- Les lieux de cette attractivité : **Paris** (ville mondiale, La Défense, Roissy-CDG), les grandes **métropoles** régionales (Lyon, Toulouse, Marseille), les littoraux et les montagnes touristiques, les régions frontalières.
- Toutes les régions ne profitent pas autant : certains espaces ruraux et anciens bassins industriels attirent peu.

### À retenir pour le bac
- Notions : rayonnement, influence, attractivité.
- Les lieux de l'influence : Paris, Strasbourg, l'outre-mer (Kourou, ZEE), les bases militaires, le réseau culturel.
- Piège : rayonnement (ce que la France projette dans le monde) et attractivité (ce qu'elle attire chez elle) sont deux choses différentes.`,
      cartes: [
        { q: "Qu'est-ce que le rayonnement d'un pays ?", r: "Sa présence et son image dans le monde, par sa diplomatie, sa culture, sa langue, ses entreprises." },
        { q: "Qu'est-ce que l'influence ?", r: "La capacité d'un pays à peser sur les décisions des autres États et des organisations internationales." },
        { q: "Qu'est-ce que l'attractivité ?", r: "La capacité d'un territoire à attirer touristes, étudiants, entreprises et investissements." },
        { q: "Quel siège la France occupe-t-elle à l'ONU ?", r: "Un siège de membre permanent du Conseil de sécurité, avec droit de veto." },
        { q: "Quelles organisations internationales ont leur siège à Paris ?", r: "L'UNESCO et l'OCDE, par exemple." },
        { q: "Quelles institutions européennes siègent à Strasbourg ?", r: "Le Parlement européen et le Conseil de l'Europe." },
        { q: "Combien y a-t-il de francophones dans le monde ?", r: "Environ 320 millions, surtout en Afrique." },
        { q: "Qu'est-ce que le réseau culturel français à l'étranger ?", r: "Les Instituts français, les Alliances françaises, les lycées français et des médias comme RFI ou France 24." },
        { q: "Pourquoi l'outre-mer compte-t-il pour l'influence française ?", r: "Il donne à la France une présence sur tous les océans, la deuxième ZEE du monde et des bases comme Kourou." },
        { q: "Quelle est la place de la France dans le tourisme mondial ?", r: "Première destination du monde, avec environ 100 millions de touristes internationaux par an." },
        { q: "Combien d'étudiants étrangers la France accueille-t-elle ?", r: "Plus de 400 000." },
        { q: "Qu'est-ce qu'un déficit commercial ?", r: "Une situation où un pays importe plus qu'il n'exporte en valeur." },
        { q: "Où la France a-t-elle des bases militaires à l'étranger ?", r: "À Djibouti et aux Émirats arabes unis, par exemple, en plus de ses forces en outre-mer." },
        { q: "Quel groupe français est le premier du luxe dans le monde ?", r: "LVMH (Louis Vuitton Moët Hennessy)." },
      ],
      quiz: [
        { q: "La France est la première destination touristique mondiale avec environ :", choix: ["10 millions de touristes", "100 millions de touristes", "40 millions de touristes", "300 millions de touristes"], bonne: 1, expl: "Il s'agit des arrivées de touristes internationaux par an.", niv: 1 },
        { q: "Le Parlement européen siège à :", choix: ["Lille", "Paris", "Lyon", "Strasbourg"], bonne: 3, expl: "Paris accueille l'UNESCO et l'OCDE.", niv: 1 },
        { q: "La capacité à attirer des entreprises et des touristes s'appelle :", choix: ["l'attractivité", "le rayonnement", "la francophonie", "la souveraineté"], bonne: 0, expl: "Le rayonnement est l'image projetée dans le monde.", niv: 1 },
        { q: "Une Alliance française donne des cours de français au Pérou. Elle contribue au :", choix: ["commerce de luxe", "déficit commercial", "tourisme intérieur", "rayonnement culturel"], bonne: 3, expl: "Le réseau culturel diffuse la langue et la culture françaises.", niv: 2 },
        { q: "Un groupe américain choisit la France pour une nouvelle usine. Cela traduit :", choix: ["le déficit commercial", "le rayonnement de la francophonie", "l'attractivité du territoire", "la fin de la mondialisation"], bonne: 2, expl: "Attirer un investissement étranger relève de l'attractivité.", niv: 2 },
        { q: "La France bloque une résolution au Conseil de sécurité. Elle utilise :", choix: ["son droit de veto", "sa ZEE", "son réseau culturel", "son statut de destination touristique"], bonne: 0, expl: "Le veto est réservé aux cinq membres permanents.", niv: 2 },
        { q: "La deuxième ZEE du monde appartient à la France surtout grâce :", choix: ["à la Méditerranée", "à l'outre-mer", "à la Manche", "à la Corse"], bonne: 1, expl: "La Polynésie et la Nouvelle-Calédonie en forment une grande part.", niv: 2 },
        { q: "Le nombre de francophones dans le monde est d'environ :", choix: ["320 millions", "68 millions", "100 millions", "1 milliard"], bonne: 0, expl: "La majorité vit en Afrique.", niv: 2 },
        { q: "Pourquoi l'influence française est-elle inégale selon les territoires ?", choix: ["Les régions rurales accueillent l'ONU", "Seule l'outre-mer attire des étrangers, grâce à son climat et à ses plages", "Paris et les métropoles concentrent sièges, organisations et touristes", "Les régions attirent autant les unes que les autres"], bonne: 2, expl: "Paris est une ville mondiale ; certains espaces ruraux attirent peu.", niv: 3 },
        { q: "Quelle affirmation sur la puissance française est juste ?", choix: ["Elle a quitté le Conseil de sécurité", "Elle exporte bien plus qu'elle n'importe depuis le début des années 2000", "Elle a retiré ses forces militaires hors d'Europe", "Elle rayonne dans le monde mais importe plus qu'elle n'exporte"], bonne: 3, expl: "La balance commerciale est déficitaire depuis le début des années 2000.", niv: 3 },
      ],
    },
    {
      chapitre: 'hg-t-12',
      fiche: `## Sujets d'étude : le Centre spatial guyanais ; Disneyland Paris

### Sujet 1 : le Centre spatial guyanais (Kourou) : coopérer pour s'affirmer à l'échelle mondiale
- Le **Centre spatial guyanais** (CSG) est situé à **Kourou**, en **Guyane**, une région française d'outre-mer en Amérique du Sud.
- Le site est choisi en **1964** par le **CNES** (Centre national d'études spatiales, créé en 1961). Le premier lancement a lieu en **1968**.
- Ses **atouts** :
- Il est proche de l'**équateur** (environ 5° de latitude nord) : la rotation de la Terre y est plus rapide, ce qui donne un élan aux fusées et économise du carburant pour placer les satellites en orbite.
- Il est ouvert sur l'**océan Atlantique** à l'est : les fusées survolent la mer, sans risque pour les villes.
- La région est peu peuplée et épargnée par les cyclones et les séismes.
- C'est la **base spatiale de l'Europe** : l'**Agence spatiale européenne** (ESA, créée en **1975**), qui réunit plus de vingt pays, finance une grande partie du site. La France **coopère** avec ses partenaires européens pour peser face aux États-Unis, à la Russie et à la Chine.
- Les fusées européennes **Ariane** y décollent : premier vol le **24 décembre 1979** ; **Ariane 5** (1996-2023) a lancé de grands satellites et le télescope spatial **James Webb** (2021) ; **Ariane 6** a fait son premier vol le **9 juillet 2024**. La petite fusée **Vega** y décolle aussi. Des fusées russes **Soyouz** y ont décollé de 2011 à 2022, jusqu'à la guerre en Ukraine.
- La société **Arianespace** commercialise les lancements pour des clients du monde entier.
- La **concurrence** est forte, surtout avec l'américain **SpaceX** et ses fusées réutilisables, moins chères.
- Le CSG est un moteur de l'économie guyanaise, mais il contraste avec les difficultés de la Guyane : chômage élevé, manque d'équipements. En **2017**, un grand mouvement social a bloqué le territoire et les lancements.

### Sujet 2 : Disneyland Paris, un marqueur de l'intégration de la France dans la mondialisation
- **Disneyland Paris** ouvre le **12 avril 1992** à **Marne-la-Vallée** (Chessy), en Seine-et-Marne, à l'est de Paris.
- Il est le fruit d'un **accord** signé en **1987** entre l'**État français** et la firme américaine **Walt Disney Company**, une **FTN** du divertissement. L'État apporte terrains et infrastructures ; Disney apporte la marque et l'investissement.
- Pourquoi ici : un grand bassin de population en Europe à quelques heures de route ou de train, des terrains disponibles dans une **ville nouvelle**, une bonne desserte.
- **Accessibilité** : autoroute A4, **RER A**, gare TGV **Marne-la-Vallée-Chessy** (**1994**), proximité des aéroports de Roissy-CDG et d'Orly. C'est une **plateforme multimodale**.
- C'est le **premier site touristique payant d'Europe** : environ 15 millions de visites par an, dont une grande part d'étrangers (Royaume-Uni, Espagne, Belgique…).
- C'est l'un des premiers **employeurs** d'Île-de-France sur un seul site. Autour du parc s'est développé un nouveau quartier, **Val d'Europe** : centre commercial, hôtels, logements, entreprises.
- Il illustre la mondialisation : une **culture américaine** diffusée en Europe, des touristes venus du monde entier, une firme transnationale. Il a été critiqué à son ouverture comme une forme d'américanisation.
- Il montre l'**attractivité** du territoire français : la France a été préférée à d'autres pays européens, comme l'Espagne.

### À retenir pour le bac
- Kourou : équateur, ouverture sur l'Atlantique, ESA, Ariane, coopération européenne, concurrence de SpaceX.
- Disneyland Paris : 1992, accord État-Disney, RER et TGV, premier site touristique payant d'Europe, Val d'Europe.
- Piège : Kourou illustre le rayonnement par la coopération européenne ; Disneyland Paris illustre l'attractivité et l'intégration de la France dans la mondialisation.`,
      cartes: [
        { q: "Où se trouve le Centre spatial guyanais ?", r: "À Kourou, en Guyane, région française d'outre-mer en Amérique du Sud." },
        { q: "Pourquoi la proximité de l'équateur est-elle un atout pour Kourou ?", r: "La rotation de la Terre y est plus rapide : elle donne de l'élan aux fusées et économise du carburant." },
        { q: "Pourquoi l'ouverture sur l'Atlantique est-elle un atout pour Kourou ?", r: "Les fusées décollent vers l'est au-dessus de la mer, sans survoler de zones habitées." },
        { q: "Qu'est-ce que l'ESA ?", r: "L'Agence spatiale européenne, créée en 1975, qui réunit plus de vingt pays et finance une grande partie du site de Kourou." },
        { q: "Quand a lieu le premier vol d'Ariane ?", r: "Le 24 décembre 1979, depuis Kourou." },
        { q: "Quand Ariane 6 vole-t-elle pour la première fois ?", r: "Le 9 juillet 2024." },
        { q: "Quel est le grand concurrent d'Ariane ?", r: "L'entreprise américaine SpaceX, avec ses fusées réutilisables et moins chères." },
        { q: "Quel contraste existe entre le CSG et la Guyane ?", r: "Une base de haute technologie dans un territoire marqué par le chômage et le manque d'équipements (mouvement social de 2017)." },
        { q: "Quand Disneyland Paris ouvre-t-il ?", r: "Le 12 avril 1992, à Marne-la-Vallée, en Seine-et-Marne." },
        { q: "Qui a permis l'installation de Disneyland Paris ?", r: "Un accord signé en 1987 entre l'État français et la firme américaine Walt Disney Company." },
        { q: "Comment Disneyland Paris est-il desservi ?", r: "Par l'autoroute A4, le RER A et la gare TGV Marne-la-Vallée-Chessy ouverte en 1994." },
        { q: "Quelle est la place de Disneyland Paris dans le tourisme européen ?", r: "C'est le premier site touristique payant d'Europe, avec environ 15 millions de visites par an." },
        { q: "Qu'est-ce que Val d'Europe ?", r: "Le nouveau quartier né autour de Disneyland Paris : centre commercial, hôtels, logements et entreprises." },
        { q: "Pourquoi Disneyland Paris illustre-t-il la mondialisation ?", r: "Une FTN américaine y diffuse sa culture à des touristes venus du monde entier." },
      ],
      quiz: [
        { q: "Le Centre spatial guyanais se trouve à :", choix: ["Pointe-à-Pitre", "Cayenne", "Toulouse", "Kourou"], bonne: 3, expl: "Toulouse accueille l'industrie spatiale, pas les lancements.", niv: 1 },
        { q: "Disneyland Paris ouvre en :", choix: ["1987", "1992", "1994", "2002"], bonne: 1, expl: "1987 est l'accord avec l'État, 1994 l'ouverture de la gare TGV.", niv: 1 },
        { q: "L'agence qui finance une grande partie de la base de Kourou est :", choix: ["la NASA", "l'Agence spatiale européenne", "l'ONU", "l'OTAN"], bonne: 1, expl: "L'ESA réunit plus de vingt pays européens.", niv: 1 },
        { q: "Une fusée décollant près de l'équateur consomme moins de carburant. Cela s'explique par :", choix: ["la proximité de l'Europe", "l'absence de vent tropical", "la chaleur tropicale qui allège la fusée au décollage", "la rotation plus rapide de la Terre à l'équateur"], bonne: 3, expl: "La vitesse de rotation donne un élan supplémentaire.", niv: 2 },
        { q: "Ariane 5 lance en 2021 un télescope spatial américain et européen. Cela montre :", choix: ["la coopération internationale autour de Kourou", "la concurrence de SpaceX", "le retrait progressif de l'Europe de la conquête spatiale", "le rôle de la Russie à Kourou"], bonne: 0, expl: "Le télescope James Webb est un projet international.", niv: 2 },
        { q: "Une famille anglaise arrive en TGV directement au parc d'attractions. Elle descend à :", choix: ["Lille-Europe", "Roissy-CDG", "Paris-Gare de Lyon", "Marne-la-Vallée-Chessy"], bonne: 3, expl: "La gare TGV du parc ouvre en 1994.", niv: 2 },
        { q: "Un nouveau quartier avec hôtels et centre commercial naît autour du parc Disney. C'est :", choix: ["Euralille", "La Défense", "Val d'Europe", "Marne-la-Vallée-Chessy"], bonne: 2, expl: "Val d'Europe s'est développé grâce au parc.", niv: 2 },
        { q: "Le nombre de visites à Disneyland Paris par an est d'environ :", choix: ["5 millions", "1,5 million", "15 millions", "10 millions"], bonne: 2, expl: "C'est le premier site touristique payant d'Europe.", niv: 2 },
        { q: "Pourquoi la France coopère-t-elle avec l'Europe pour l'espace ?", choix: ["Seule, elle ne pourrait pas rivaliser avec les grandes puissances spatiales", "Le règlement de l'ONU interdit aux États d'avoir des programmes spatiaux nationaux", "La Guyane appartient à l'ESA", "Les fusées françaises sont interdites de vol"], bonne: 0, expl: "Le coût et la concurrence américaine et chinoise imposent la coopération.", niv: 3 },
        { q: "Quelle affirmation sur Disneyland Paris est juste ?", choix: ["Il résulte d'un accord entre l'État et une FTN américaine", "Il appartient entièrement à l'État français", "Il attire surtout des Franciliens", "Il a été construit loin des grands réseaux de transport franciliens"], bonne: 0, expl: "L'État a fourni terrains et infrastructures, Disney l'investissement.", niv: 3 },
      ],
    },
  ],
  methode: [
    { id: "hg-t-m1", mat: "hg-t", titre: "Répondre aux questions sur la question obligatoire",
      formules: ["Définissez…", "Donnez deux exemples de…", "Quelle est la date de… ?", "Expliquez pourquoi…"],
      vu: ["Banque nationale de sujets de terminale technologique (2020-2021)", "Devoirs sur table de terminale"], pts: "Environ 5 points",
      attendu: "Des réponses courtes, exactes et précises : une définition en une phrase, une date juste, un exemple nommé. Le correcteur attend les notions et repères du programme, sans phrases inutiles.",
      etapes: ["Lire chaque question et souligner le verbe de consigne (définir, citer, expliquer)", "Répondre par une phrase complète qui reprend les mots de la question", "Pour une définition : la notion, puis un exemple", "Pour une date : l'année, et le jour pour un grand repère", "Pour « expliquer » : une cause ou une conséquence, avec « car » ou « donc »"],
      mots: ["définition", "exemple", "date", "car", "donc", "notion"],
      pieges: ["Répondre par un mot isolé sans phrase", "Confondre deux notions voisines (monde bipolaire et multipolaire, rayonnement et attractivité)", "Une définition sans exemple", "Des dates approximatives"],
      cas: "Devoir sur le thème 2 d'histoire.",
      question: "Définissez la guerre froide, puis donnez la date de la chute du mur de Berlin.",
      modele: "La guerre froide est l'affrontement entre les États-Unis et l'URSS de 1947 à 1991, sans guerre directe entre eux, mais avec des crises comme celle de Cuba en 1962. Le mur de Berlin tombe le 9 novembre 1989.",
      grille: ["La définition tient en une phrase juste", "Un exemple précis accompagne la définition", "La date est exacte", "La réponse est une phrase complète"] },
    { id: "hg-t-m2", mat: "hg-t", titre: "Rédiger une réponse construite (un paragraphe argumenté)",
      formules: ["Montrez que…", "Expliquez en quelques lignes comment…", "Rédigez un court texte qui…", "En vous appuyant sur vos connaissances, montrez…"],
      vu: ["Banque nationale de sujets de terminale technologique (2020-2021)", "Devoirs sur table de terminale"], pts: "Environ 5 points",
      attendu: "Un texte d'une quinzaine de lignes : une phrase d'introduction qui reprend la question, deux ou trois idées chacune appuyée sur un exemple daté ou localisé, une phrase de conclusion. Les connecteurs logiques montrent l'organisation.",
      etapes: ["Souligner les mots clés et les limites du sujet", "Noter au brouillon trois idées et un exemple pour chacune", "Écrire une phrase d'introduction qui reprend la question", "Rédiger une idée par paragraphe, avec son exemple", "Lier les idées par des connecteurs (d'abord, ensuite, enfin)", "Conclure en une phrase qui répond à la question"],
      mots: ["d'abord", "ensuite", "enfin", "par exemple", "en effet", "ainsi"],
      pieges: ["Raconter sans répondre à la question", "Oublier les exemples précis", "Un bloc de texte sans organisation", "Sortir des dates ou des lieux du sujet"],
      cas: "Devoir sur le thème 3 d'histoire.",
      question: "Montrez que la Ve République est un régime stable depuis 1958.",
      modele: "Depuis 1958, la Ve République a montré une grande stabilité. D'abord, la Constitution du 4 octobre 1958 renforce le pouvoir du président, qui nomme le Premier ministre et peut dissoudre l'Assemblée, ce qui met fin à l'instabilité de la IVe République. Ensuite, l'élection du président au suffrage universel direct, décidée par le référendum de 1962, lui donne une forte légitimité. Enfin, le régime a supporté des changements de majorité : l'alternance de 1981 avec François Mitterrand, puis les cohabitations, comme celle de 1986-1988. Ainsi, la même Constitution s'applique depuis plus de soixante ans.",
      grille: ["L'introduction reprend la question", "Au moins deux idées distinctes", "Chaque idée a un exemple daté", "Des connecteurs organisent le texte", "La conclusion répond à la question"] },
    { id: "hg-t-m3", mat: "hg-t", titre: "Étudier un ou deux documents sur un sujet d'étude",
      formules: ["Présentez le document", "Relevez dans le document…", "Expliquez la phrase soulignée", "Montrez que le document…", "Quelle est la limite de ce document ?"],
      vu: ["Banque nationale de sujets de terminale technologique (2020-2021)", "Devoirs sur table de terminale"], pts: "10 points",
      attendu: "Répondre à une série de questions guidées sur un ou deux documents liés à un sujet d'étude : présenter le document, relever des informations, les expliquer avec ses connaissances, puis prendre du recul (point de vue, limite).",
      etapes: ["Lire toutes les questions avant le document", "Repérer la nature, l'auteur, la date et la source", "Surligner les passages utiles à chaque question", "Relever en citant entre guillemets ou en donnant les chiffres", "Expliquer chaque relevé avec une connaissance du cours", "Pour la dernière question, signaler le point de vue de l'auteur ou ce que le document ne dit pas"],
      mots: ["nature", "auteur", "date", "source", "selon le document", "point de vue", "limite"],
      pieges: ["Recopier le document sans l'expliquer", "Répondre avec le cours sans citer le document", "Oublier la source et la date", "Ne pas voir qu'un document est de la propagande"],
      cas: "Document décrit en mots : extrait de l'appel du 18 juin 1940 du général de Gaulle, prononcé à la radio de Londres, la BBC. Il affirme que la France a perdu une bataille mais pas la guerre, qu'elle a un vaste empire derrière elle et qu'elle peut s'appuyer sur l'Empire britannique et l'industrie des États-Unis.",
      question: "Présentez le document, puis relevez les raisons d'espérer que donne de Gaulle et expliquez son importance.",
      modele: "C'est un discours radiodiffusé du général de Gaulle, prononcé à Londres sur la BBC le 18 juin 1940, au lendemain de la demande d'armistice de Pétain. De Gaulle refuse la défaite : selon lui, la France « a perdu une bataille » mais pas la guerre. Il donne trois raisons d'espérer : l'empire colonial français, l'alliance avec l'Empire britannique et la puissance industrielle des États-Unis, encore neutres. Ce discours fonde la France libre : peu entendu le jour même, il devient le symbole du refus de l'armistice et de la Résistance. Sa limite : en juin 1940, de Gaulle est presque seul et peu connu.",
      grille: ["Nature, auteur, date et contexte sont présentés", "Les informations sont relevées avec précision", "Chaque relevé est expliqué par une connaissance", "La portée ou la limite du document est indiquée"] },
    { id: "hg-t-m4", mat: "hg-t", titre: "Compléter un croquis ou un schéma de géographie",
      formules: ["Complétez la légende et le croquis", "Localisez sur le fond de carte…", "Placez les éléments suivants…", "Donnez un titre au schéma"],
      vu: ["Banque nationale de sujets de terminale technologique (2020-2021)", "Exercices de géographie en classe"], pts: "Environ 4 à 5 points",
      attendu: "Compléter une légende déjà organisée et reporter sur le fond de carte les figurés et les noms de lieux demandés, proprement et au bon endroit.",
      etapes: ["Lire la légende fournie et ses parties", "Trouver dans le cours ou le document ce qui manque", "Choisir un figuré adapté : couleur pour une surface, point pour une ville, flèche pour un flux", "Reporter le figuré à l'identique sur le croquis", "Écrire les noms de lieux à l'horizontale", "Vérifier que chaque élément de la légende apparaît sur le croquis"],
      mots: ["légende", "figuré", "flux", "hub", "façade maritime", "détroit", "métropole"],
      pieges: ["Un figuré différent entre la légende et la carte", "Des lieux mal placés (détroits, ports)", "Oublier le titre", "Un croquis surchargé et illisible"],
      cas: "Fond de carte du monde décrit en mots, avec une légende en deux parties : I. Les grandes routes maritimes ; II. Les passages stratégiques. Trois cases sont vides.",
      question: "Complétez la légende : un figuré pour les grands ports, un pour les détroits, et nommez trois détroits à placer.",
      modele: "Grands ports : cercles noirs pleins, placés à Shanghai, Singapour et Rotterdam. Détroits : petits cercles rouges, placés à Malacca (entre la Malaisie et Sumatra), Ormuz (sortie du golfe Persique) et Bab el-Mandeb (entrée de la mer Rouge). Les noms sont écrits à l'horizontale, à côté de chaque figuré.",
      grille: ["Les figurés de la légende sont choisis avec logique", "Les mêmes figurés sont reportés sur le croquis", "Les lieux sont bien localisés", "Les noms sont écrits lisiblement"] },
  ],
  sujets: [
    { id: "hg-t-s1", matiere: "hg-t", titre: "Devoir d'entraînement 1 : la France depuis 1945 et mers et océans", duree: 120,
      enonce: `Devoir d'entraînement inventé pour réviser, sur le modèle de la banque nationale de sujets. Durée : 2 heures. Deux parties.

Partie 1 (histoire, 10 points) : questions sur la question obligatoire « La France depuis 1945 : politique et société »
1. Définissez la cohabitation et donnez un exemple daté. (2 points)
2. Donnez la date de la Constitution de la Ve République et celle du référendum qui instaure l'élection du président au suffrage universel direct. (2 points)
3. Citez deux transformations de la société française pendant les Trente Glorieuses. (2 points)
4. Rédigez une réponse construite d'une quinzaine de lignes : montrez que la place des femmes dans la société française a changé depuis 1945. (4 points)

Partie 2 (géographie, 10 points) : étude de document sur le sujet d'étude « Le détroit de Malacca »
Document inventé pour l'entraînement : extrait d'un article d'un magazine imaginaire, Horizons maritimes, publié en 2026.
« Long d'environ 800 kilomètres, le détroit de Malacca voit passer quelque 90 000 navires par an. Entre la Malaisie et l'île indonésienne de Sumatra, porte-conteneurs et pétroliers se suivent à la file. À sa sortie, Singapour a bâti l'un des plus grands ports du monde. Pékin, qui fait venir par ce couloir une large part de son pétrole, redoute qu'un conflit ne le ferme. D'où ses oléoducs à travers la Birmanie. Les États riverains, eux, patrouillent ensemble depuis vingt ans pour éloigner les pirates. »
1. Présentez le document (nature, date, sujet). (1 point)
2. Relevez deux informations qui montrent que le détroit est un passage majeur du commerce mondial. (2 points)
3. Expliquez pourquoi Singapour profite de sa position. (2 points)
4. Relevez et expliquez les inquiétudes de la Chine et sa réponse. (2 points)
5. Montrez, avec vos connaissances, que le détroit est aussi un espace de risques. (2 points)
6. Indiquez une limite de ce document. (1 point)`,
      corrige: `Partie 1 : éléments de réponse
1. Une cohabitation est la situation où le président de la République et le Premier ministre appartiennent à des camps politiques opposés. Exemple : de 1986 à 1988, le président François Mitterrand (gauche) gouverne avec le Premier ministre Jacques Chirac (droite).
2. La Constitution de la Ve République est promulguée le 4 octobre 1958. Le référendum de 1962 instaure l'élection du président au suffrage universel direct.
3. Deux transformations parmi : le baby-boom, l'exode rural et l'urbanisation, la société de consommation (voiture, télévision), l'immigration de travail, la hausse des emplois dans les services.
4. Réponse construite : en 1945, les femmes votent pour la première fois (droit accordé en 1944). D'abord, elles gagnent des droits civils : en 1965, une femme mariée peut travailler et ouvrir un compte sans l'accord de son mari ; en 1970, l'autorité parentale est partagée. Ensuite, elles obtiennent le droit de disposer de leur corps : contraception (loi Neuwirth, 1967), IVG (loi Veil, 1975). Enfin, elles prennent plus de place dans le travail et la vie politique : loi Roudy (1983), première Première ministre (Édith Cresson, 1991), loi sur la parité (2000). Cependant, des inégalités demeurent, comme l'écart de salaire.

Partie 2 : éléments de réponse
1. Extrait d'un article de magazine inventé, publié en 2026, sur le détroit de Malacca, passage entre l'océan Indien et le Pacifique.
2. « quelque 90 000 navires par an » ; « porte-conteneurs et pétroliers se suivent à la file ». Le détroit relie l'Asie orientale à l'Europe et au golfe Persique : c'est une grande route maritime.
3. Singapour est à la sortie du détroit, sur le passage obligé des navires : elle en a fait l'un des premiers ports du monde, un hub où l'on transborde les conteneurs, et une place financière.
4. La Chine « redoute qu'un conflit ne le ferme » car une grande part de son pétrole y passe : c'est le « dilemme de Malacca ». Elle construit des oléoducs à travers la Birmanie pour le contourner (nouvelles routes de la soie).
5. Le détroit est étroit (moins de 3 km à certains endroits) : risques de collisions et de pollution. La piraterie y a été forte au début des années 2000 ; les patrouilles communes de la Malaisie, de l'Indonésie et de Singapour l'ont réduite.
6. Limite : un court article, sans carte ni chiffres sur le pétrole ; il ne parle pas des autres routes possibles (détroits de la Sonde ou de Lombok).`,
      grille: [
        { c: "Partie 1 : définition et exemple de cohabitation", pts: 2 },
        { c: "Partie 1 : dates de 1958 et 1962", pts: 2 },
        { c: "Partie 1 : deux transformations de la société", pts: 2 },
        { c: "Partie 1 : réponse construite (idées, exemples datés, organisation)", pts: 4 },
        { c: "Partie 2 : présentation du document", pts: 1 },
        { c: "Partie 2 : relevés et explications (questions 2 à 4)", pts: 6 },
        { c: "Partie 2 : connaissances sur les risques et limite du document", pts: 3 },
      ] },
  ],
};
