// Anglais, monde contemporain (LLCER AMC) — spécialité, terminale voie générale. Sources : voir matiere.sources.
// Programme : BO n° 29 du 16 juillet 2020 (trois thématiques, trois axes chacune) ; pas de programme limitatif d'œuvres.
// Épreuve : écrit 3 h 30 (synthèse en anglais d'environ 500 mots sur 16, traduction ou transposition sur 4) et oral de 20 minutes.
export default {
  matiere: {
    id: 'amc',
    nom: 'Anglais, monde contemporain',
    voie: 'generale',
    epreuve: { type: 'ecrit', duree: 210, coef: 16, quand: 'juin (écrit) et juin-juillet (oral)', note: 'Écrit de 3 h 30 : synthèse en anglais d’environ 500 mots d’un dossier de trois documents (16 points) et traduction ou transposition en français (4 points), dictionnaire unilingue autorisé ; un oral de 20 minutes complète l’épreuve' },
    sources: [
      "https://anglais-pedagogie.web.ac-grenoble.fr/sites/default/files/inline-images/ouI1nl9geMBmxWp1fO170zUIKkReN1DdJpvDOr4KWoRYU3nVf5.pdf",
      "https://www.education.gouv.fr/le-conseil-superieur-des-programmes/projet-de-programme-d-anglais-monde-contemporain-pour-le-lycee-504242",
      "https://www.sujetdebac.fr/annales-pdf/2025/spe-llcer-amc-2025-polynesie-sujet-officiel.pdf",
      "https://diplomeo.com/actualite-sujets_llcer_anglais_monde_contemporain_bac_2025",
    ],
    chapitres: [
      { id: "amc-1", t: "Faire société : unité et pluralité", theme: "Faire société" },
      { id: "amc-2", t: "Faire société : égalités et inégalités", theme: "Faire société" },
      { id: "amc-3", t: "Faire société : libertés publiques et libertés individuelles", theme: "Faire société" },
      { id: "amc-4", t: "Environnements en mutation : frontière et espace", theme: "Environnements en mutation" },
      { id: "amc-5", t: "Environnements en mutation : repenser la ville", theme: "Environnements en mutation" },
      { id: "amc-6", t: "Environnements en mutation : de la protection de la nature à la transition écologique", theme: "Environnements en mutation" },
      { id: "amc-7", t: "Relation au monde : puissance et influence", theme: "Relation au monde" },
      { id: "amc-8", t: "Relation au monde : rivalités et interdépendances", theme: "Relation au monde" },
      { id: "amc-9", t: "Relation au monde : héritage commun et diversité", theme: "Relation au monde" },
      { id: "amc-10", t: "Méthode : la synthèse en anglais", theme: "Méthode de l'écrit" },
      { id: "amc-11", t: "Méthode : traduction et transposition", theme: "Méthode de l'écrit" },
    ],
  },
  paquets: [
    {
      chapitre: "amc-1",
      fiche: `## Unité et pluralité

Comment faire tenir ensemble des peuples, des langues et des religions différents ? Les pays anglophones se sont construits avec des **immigrés** et des **peuples autochtones**, et ils répondent chacun à leur manière à cette question. Cet axe étudie la tension entre l'**unité** de la nation et la **pluralité** de ses membres.

### Le vocabulaire à connaître
- **unity** : l'unité ; **diversity** ; **a multicultural society** ; **a minority** ; **an ethnic group** ; **to belong** : appartenir ; **a sense of belonging** : un sentiment d'appartenance.
- **the melting pot** (le creuset où tout se fond) / **the salad bowl** (le saladier où chacun garde sa saveur) ; **assimilation** ; **integration**.
- **Indigenous peoples** : les peuples autochtones ; **Native Americans** ; **First Nations** (Canada) ; **Aboriginal and Torres Strait Islander peoples** (Australie) ; **Māori** (Nouvelle-Zélande).
- **a nation** ; **a state** ; **devolution** : la dévolution, transfert de pouvoirs ; **independence** ; **a referendum**.
- **a citizen** ; **citizenship** ; **to swear allegiance** : prêter serment ; **a census** : un recensement.

### Les États-Unis : E pluribus unum
- La devise **E pluribus unum** (« de plusieurs, un seul ») résume l'idéal américain.
- Le **melting pot** (expression popularisée par une pièce d'Israel Zangwill, 1908) imaginait des immigrés qui se fondent dans une identité commune. On parle aujourd'hui plutôt de **salad bowl** : chacun garde sa culture.
- Des symboles soudent la nation : le drapeau, le **Pledge of Allegiance** récité à l'école, la fête de **Thanksgiving**, le **Fourth of July**.
- Mais la société est aussi **polarisée** : divisions politiques entre démocrates et républicains, débats sur l'immigration.

### Le Royaume-Uni : quatre nations
- Le **United Kingdom** réunit l'**Angleterre**, l'**Écosse**, le **pays de Galles** et l'**Irlande du Nord**.
- **Devolution** (1998-1999) : l'Écosse obtient un Parlement, le pays de Galles une Assemblée (aujourd'hui le Senedd), l'Irlande du Nord une Assemblée.
- **Référendum écossais** de **2014** : 55 % pour rester dans le Royaume-Uni. Le **Brexit** (référendum de **2016**, 52 % pour partir) a montré des divisions : l'Écosse et l'Irlande du Nord avaient voté pour rester.
- La société britannique est **multiculturelle** depuis l'arrivée de la **Windrush generation** (migrants des Caraïbes, à partir de 1948).

### Les peuples autochtones
- **Canada** : premier pays à adopter une politique officielle de **multiculturalisme** (1971). Les **pensionnats autochtones** (residential schools) ont arraché des enfants à leurs familles ; une commission vérité et réconciliation a rendu son rapport en 2015.
- **Australie** : excuses officielles du Premier ministre aux **Stolen Generations** en **2008** ; en **2023**, le référendum sur une **Voice to Parliament** autochtone est **rejeté**.
- **Nouvelle-Zélande** : le **traité de Waitangi** (1840) entre la Couronne et les Māori est le texte fondateur du pays ; la langue māori est officielle.

### À retenir pour le bac
- E pluribus unum ; melting pot / salad bowl ; Pledge of Allegiance.
- UK : quatre nations, devolution, Écosse 2014, Brexit 2016 ; Windrush.
- Autochtones : Canada (multiculturalisme 1971), Australie (2008, Voice rejetée en 2023), Waitangi (1840).`,
      cartes: [
        { q: "Traduire en anglais : un sentiment d'appartenance", r: "A sense of belonging." },
        { q: "Que signifie « E pluribus unum » ?", r: "« De plusieurs, un seul » : la devise des États-Unis." },
        { q: "Quelle différence entre melting pot et salad bowl ?", r: "Melting pot : les cultures se fondent en une seule. Salad bowl : chacun garde sa culture dans un ensemble commun." },
        { q: "Traduire en anglais : les peuples autochtones", r: "Indigenous peoples." },
        { q: "Que signifie « devolution » au Royaume-Uni ?", r: "Le transfert de pouvoirs de Londres vers l'Écosse, le pays de Galles et l'Irlande du Nord (1998-1999)." },
        { q: "Quelles sont les quatre nations du Royaume-Uni ?", r: "L'Angleterre, l'Écosse, le pays de Galles et l'Irlande du Nord." },
        { q: "Quel a été le résultat du référendum écossais de 2014 ?", r: "55 % pour rester dans le Royaume-Uni." },
        { q: "Quel a été le résultat du référendum sur le Brexit en 2016 ?", r: "52 % pour quitter l'Union européenne." },
        { q: "Qui est la Windrush generation ?", r: "Les migrants des Caraïbes arrivés au Royaume-Uni à partir de 1948." },
        { q: "Qu'est-ce que le Pledge of Allegiance ?", r: "Le serment de fidélité au drapeau américain, récité notamment à l'école." },
        { q: "Quel pays adopte le premier une politique officielle de multiculturalisme ?", r: "Le Canada, en 1971." },
        { q: "Que sont les Stolen Generations ?", r: "Les enfants aborigènes retirés de force à leurs familles en Australie ; excuses officielles en 2008." },
        { q: "Qu'est-ce que le traité de Waitangi ?", r: "Le traité de 1840 entre la Couronne britannique et les Māori, texte fondateur de la Nouvelle-Zélande." },
        { q: "Traduire en anglais : un recensement", r: "A census." },
      ],
      quiz: [
        { q: "Que signifie « to belong » ?", choix: ["Appartenir","Prolonger","Allonger le temps","Désirer fortement"], bonne: 0, expl: "A sense of belonging = un sentiment d'appartenance.", niv: 1 },
        { q: "Quelle est la devise des États-Unis ?", choix: ["God save the King","E pluribus unum","Liberté, égalité, fraternité","Dieu et mon droit"], bonne: 1, expl: "« De plusieurs, un seul ».", niv: 1 },
        { q: "Quelle nation ne fait **pas** partie du Royaume-Uni ?", choix: ["La république d'Irlande","Le pays de Galles","L'Écosse","L'Irlande du Nord"], bonne: 0, expl: "La république d'Irlande est un État indépendant, membre de l'Union européenne.", niv: 1 },
        { q: "Comment dit-on « un recensement » en anglais ?", choix: ["A censure","A census","A sensor","A consensus"], bonne: 1, expl: "The census = le recensement de la population.", niv: 1 },
        { q: "Quelle image décrit une société où chacun garde sa culture ?", choix: ["The melting pot","The great divide","The salad bowl","The iron curtain"], bonne: 2, expl: "Dans le saladier, les ingrédients restent distincts.", niv: 2 },
        { q: "En quelle année a eu lieu le référendum sur l'indépendance de l'Écosse ?", choix: ["2016","2014","2020","2023"], bonne: 1, expl: "55 % des votants ont choisi de rester dans le Royaume-Uni.", niv: 2 },
        { q: "D'où venaient les migrants de la Windrush generation ?", choix: ["De l'Inde et du Pakistan","D'Irlande et d'Écosse","Des Caraïbes","D'Australie et de Nouvelle-Zélande"], bonne: 2, expl: "Le navire Empire Windrush arrive en 1948.", niv: 2 },
        { q: "Quel texte fonde la relation entre la Couronne et les Māori ?", choix: ["La Magna Carta","Le traité de Waitangi","La Déclaration d'indépendance","Le Commonwealth Act"], bonne: 1, expl: "Il a été signé en 1840.", niv: 2 },
        { q: "Que montre le vote du Brexit en Écosse et en Irlande du Nord ?", choix: ["Une unité parfaite autour du départ de l'UE","Un désintérêt pour la question européenne","Des divisions entre les nations du Royaume-Uni","Une volonté commune de rejoindre les États-Unis d'Amérique"], bonne: 2, expl: "Elles ont voté pour rester alors que le pays a voté pour partir.", niv: 2 },
        { q: "Pourquoi parle-t-on aujourd'hui de salad bowl plutôt que de melting pot ?", choix: ["Les immigrés ont quitté les États-Unis","Le gouvernement fédéral interdit les langues étrangères à l'école","On valorise la diversité plutôt que l'assimilation","La cuisine américaine a changé de modèle"], bonne: 2, expl: "L'idéal n'est plus de tout fondre en une seule identité.", niv: 3 },
        { q: "Que montre le rejet de la Voice to Parliament en Australie en 2023 ?", choix: ["Les Aborigènes refusent la citoyenneté","L'Australie quitte le Commonwealth","Le Parlement accorde un droit de veto aux peuples autochtones","La reconnaissance des autochtones divise encore"], bonne: 3, expl: "La réconciliation reste un débat national.", niv: 3 },
        { q: "Un document montre des enfants récitant le Pledge of Allegiance. Quelle idée développer ?", choix: ["La construction de l'unité nationale par des rituels","La pluralité des langues parlées dans les écoles américaines","Le rejet du drapeau par la jeunesse","La fin de l'immigration aux États-Unis"], bonne: 0, expl: "Le rituel quotidien fabrique un sentiment d'appartenance.", niv: 3 },
      ],
    },
    {
      chapitre: "amc-2",
      fiche: `## Égalités et inégalités

La Déclaration d'indépendance américaine affirme que « all men are created equal ». Pourtant, l'histoire des pays anglophones est faite de luttes pour que cette égalité devienne réelle : droits civiques, droits des femmes, fin de l'apartheid. Aujourd'hui encore, les inégalités de revenus, de race et de genre restent au cœur des débats.

### Le vocabulaire à connaître
- **equality** / **inequality** ; **equal rights** ; **equal opportunities** : l'égalité des chances ; **social mobility** : l'ascension sociale.
- **discrimination** ; **racism** ; **segregation** ; **prejudice** : le préjugé ; **to be discriminated against**.
- **the gender pay gap** : l'écart de salaire entre femmes et hommes ; **the glass ceiling** : le plafond de verre ; **sexism** ; **harassment** : le harcèlement.
- **poverty** : la pauvreté ; **the poverty line** : le seuil de pauvreté ; **the wealth gap** ; **a food bank** : une banque alimentaire ; **the homeless** : les sans-abri ; **welfare** : l'aide sociale.
- **affirmative action** : la discrimination positive ; **civil rights** ; **a landmark ruling** : une décision historique ; **to campaign for**.

### Le mouvement des droits civiques aux États-Unis
- Après l'esclavage (aboli par le **13e amendement**, 1865), les lois **Jim Crow** imposent la **ségrégation** dans le Sud.
- **Brown v. Board of Education** (**1954**) : la Cour suprême déclare la ségrégation scolaire inconstitutionnelle.
- **Rosa Parks** refuse de céder sa place dans un bus à Montgomery (**1955**) : boycott des bus.
- **Martin Luther King** : discours « **I Have a Dream** » lors de la marche sur Washington (**1963**).
- **Civil Rights Act** (**1964**) et **Voting Rights Act** (**1965**).
- **Black Lives Matter** naît en **2013** ; la mort de **George Floyd** (Minneapolis, **2020**) provoque des manifestations mondiales.
- En **2023**, la Cour suprême met fin à l'**affirmative action** dans les admissions universitaires.

### Les droits des femmes
- Royaume-Uni : les **suffragettes** (Emmeline Pankhurst) ; droit de vote pour certaines femmes en **1918**, à égalité avec les hommes en **1928**.
- États-Unis : **19e amendement** (**1920**) ; l'arrêt **Roe v. Wade** (1973) garantit l'avortement au niveau fédéral, puis est annulé par **Dobbs** en **2022**.
- **#MeToo** (**2017**) dénonce le harcèlement sexuel. Le **gender pay gap** persiste ; au Royaume-Uni, les grandes entreprises doivent le publier depuis 2017.

### Afrique du Sud et inégalités sociales
- L'**apartheid** (1948-1991) sépare officiellement les races ; **Nelson Mandela**, emprisonné 27 ans, devient président en **1994**.
- Au Royaume-Uni, l'**État-providence** (**welfare state**) naît après 1945, avec le **NHS** (**1948**). Mais les **food banks** se multiplient depuis la crise de 2008.
- Aux États-Unis, le **wealth gap** est très élevé ; l'**American Dream** promet la réussite par le travail, mais la mobilité sociale recule.

### À retenir pour le bac
- Brown (1954), Rosa Parks (1955), « I Have a Dream » (1963), Civil Rights Act (1964), BLM (2013), George Floyd (2020).
- Suffragettes (1918, 1928), 19e amendement (1920), Dobbs (2022), #MeToo (2017).
- Apartheid et Mandela (1994) ; welfare state, NHS (1948), food banks.`,
      cartes: [
        { q: "Traduire en anglais : l'égalité des chances", r: "Equal opportunities." },
        { q: "Que signifie « the gender pay gap » ?", r: "L'écart de salaire entre les femmes et les hommes." },
        { q: "Traduire en anglais : le plafond de verre", r: "The glass ceiling." },
        { q: "Que signifie « a food bank » ?", r: "Une banque alimentaire." },
        { q: "Traduire en anglais : l'ascension sociale", r: "Social mobility." },
        { q: "Que signifie « affirmative action » ?", r: "La discrimination positive." },
        { q: "Que décide l'arrêt Brown v. Board of Education (1954) ?", r: "La ségrégation dans les écoles publiques est inconstitutionnelle." },
        { q: "Que fait Rosa Parks en 1955 ?", r: "Elle refuse de céder sa place à un Blanc dans un bus de Montgomery, ce qui lance un boycott." },
        { q: "Quand Martin Luther King prononce-t-il « I Have a Dream » ?", r: "En 1963, lors de la marche sur Washington." },
        { q: "Quelles lois mettent fin à la ségrégation légale aux États-Unis ?", r: "Le Civil Rights Act (1964) et le Voting Rights Act (1965)." },
        { q: "Quand les Britanniques obtiennent-elles le droit de vote à égalité avec les hommes ?", r: "En 1928 (certaines femmes dès 1918)." },
        { q: "Que décide l'arrêt Dobbs en 2022 ?", r: "Il annule Roe v. Wade : l'avortement n'est plus garanti au niveau fédéral aux États-Unis." },
        { q: "Qu'est-ce que l'apartheid ?", r: "Le régime de séparation officielle des races en Afrique du Sud (1948-1991)." },
        { q: "Quand est créé le NHS ?", r: "En 1948, au Royaume-Uni." },
      ],
      quiz: [
        { q: "Comment dit-on « le harcèlement » en anglais ?", choix: ["Harassment","Harshness","Hardship","Harmony"], bonne: 0, expl: "Sexual harassment = le harcèlement sexuel.", niv: 1 },
        { q: "Qui a prononcé le discours « I Have a Dream » ?", choix: ["Malcolm X","Martin Luther King","Barack Obama","Nelson Mandela"], bonne: 1, expl: "Le 28 août 1963, à Washington.", niv: 1 },
        { q: "Que signifie « the glass ceiling » ?", choix: ["La vitrine d'un magasin","Le plafond de verre","Le toit d'une serre","Le verre de l'amitié"], bonne: 1, expl: "Les obstacles invisibles qui bloquent les femmes au sommet.", niv: 1 },
        { q: "Quel mouvement naît en 2013 contre les violences policières ?", choix: ["Black Lives Matter","#MeToo","Occupy Wall Street","Extinction Rebellion"], bonne: 0, expl: "Il prend une ampleur mondiale après la mort de George Floyd en 2020.", niv: 1 },
        { q: "En quelle année l'arrêt Brown v. Board of Education est-il rendu ?", choix: ["1963","1964","1968","1954"], bonne: 3, expl: "Il déclare la ségrégation scolaire inconstitutionnelle.", niv: 2 },
        { q: "Qui sont les suffragettes ?", choix: ["Des infirmières de la Première Guerre mondiale","Des ouvrières en grève dans les usines textiles du nord de l'Angleterre","Des reines de l'Empire britannique","Des militantes britanniques du droit de vote des femmes"], bonne: 3, expl: "Emmeline Pankhurst en est la figure principale.", niv: 2 },
        { q: "Que signifie « welfare » ?", choix: ["La guerre juste","Le bien-être animal","L'aide sociale","La fête populaire"], bonne: 2, expl: "The welfare state = l'État-providence.", niv: 2 },
        { q: "Quel arrêt de 2022 a annulé Roe v. Wade ?", choix: ["Dobbs","Brown","Miranda","Plessy"], bonne: 0, expl: "L'avortement relève désormais des États.", niv: 2 },
        { q: "Qui devient président de l'Afrique du Sud en 1994 ?", choix: ["Desmond Tutu","Frederik de Klerk","Nelson Mandela","Steve Biko"], bonne: 2, expl: "Après 27 ans de prison.", niv: 2 },
        { q: "Pourquoi les food banks montrent-elles une limite du welfare state ?", choix: ["L'État a remplacé les banques par des magasins d'alimentation publics","Les supermarchés offrent toute leur nourriture","Les écoles ont cessé de servir des repas","Des familles qui travaillent n'arrivent plus à se nourrir"], bonne: 3, expl: "La pauvreté touche aussi des travailleurs (in-work poverty).", niv: 3 },
        { q: "Pourquoi la fin de l'affirmative action en 2023 fait-elle débat ?", choix: ["La Cour interdit aux femmes d'entrer à l'université","Elle rétablit la ségrégation dans les écoles du Sud","Certains y voient une égalité de traitement, d'autres un recul pour les minorités","Elle supprime le droit de vote des minorités"], bonne: 2, expl: "La Cour suprême juge que la race ne peut plus compter dans les admissions.", niv: 3 },
        { q: "Un document oppose « all men are created equal » à une photo de ségrégation. Quelle idée ?", choix: ["La réussite de l'American Dream pour chacun","Le décalage entre l'idéal et la réalité","La fin de l'esclavage en 1776","L'égalité réelle dès la fondation"], bonne: 1, expl: "La promesse d'égalité n'a été tenue que par des luttes.", niv: 3 },
      ],
    },
    {
      chapitre: "amc-3",
      fiche: `## Libertés publiques et libertés individuelles

Les pays anglophones se voient comme des berceaux de la liberté : Magna Carta, Bill of Rights, First Amendment. Mais la liberté de l'un s'arrête-t-elle là où commence la sécurité de tous ? Armes à feu, surveillance, liberté d'expression sur les réseaux sociaux : cet axe étudie ces tensions entre l'**individu** et la **collectivité**.

### Le vocabulaire à connaître
- **freedom** et **liberty** ; **civil liberties** ; **a right** : un droit ; **to infringe on a right** : porter atteinte à un droit.
- **freedom of speech** ; **freedom of the press** ; **freedom of religion** ; **freedom of assembly** : la liberté de réunion.
- **censorship** ; **hate speech** : les discours de haine ; **misinformation** / **disinformation** ; **fake news** ; **to ban** : interdire.
- **privacy** : la vie privée ; **surveillance** ; **data** : les données ; **a whistleblower** : un lanceur d'alerte ; **national security**.
- **gun control** ; **a mass shooting** : une tuerie de masse ; **the right to bear arms** ; **a lobby** ; **the Supreme Court**.

### Des textes fondateurs
- **Magna Carta** (**1215**) : le roi d'Angleterre doit respecter la loi. **Habeas Corpus Act** (**1679**) : pas de détention sans jugement.
- **Bill of Rights** anglais (1689), puis **Bill of Rights** américain (**1791**) : les dix premiers amendements de la Constitution.
- **First Amendment** : liberté de religion, d'expression, de la presse, de réunion.
- **Second Amendment** : « the right of the people to keep and bear arms ».
- Le Royaume-Uni n'a **pas de constitution écrite** en un seul texte ; le **Human Rights Act** (**1998**) intègre la Convention européenne des droits de l'homme.

### Les armes à feu
- Les États-Unis comptent plus d'armes que d'habitants. Les **mass shootings** (Columbine 1999, Sandy Hook 2012, Parkland 2018, Uvalde 2022) relancent le débat.
- La **NRA** (National Rifle Association) défend le Second Amendment. Les lycéens de Parkland lancent **March for Our Lives** (2018).
- Le Royaume-Uni et l'Australie ont adopté des lois très strictes après des tueries (Dunblane 1996, Port Arthur 1996).

### Sécurité et surveillance
- Après le **11 septembre 2001**, le **Patriot Act** élargit les pouvoirs de surveillance.
- En **2013**, le lanceur d'alerte **Edward Snowden** révèle la surveillance de masse de la **NSA**.
- Le Royaume-Uni est l'un des pays d'Europe les plus équipés en caméras de surveillance (**CCTV**). Le roman *1984* de George Orwell (1949) et son **Big Brother** restent la référence.

### Liberté d'expression et réseaux sociaux
- Les plateformes doivent-elles **modérer** les contenus ? Débats sur la **cancel culture**, les **fake news**, la protection des mineurs (l'**Online Safety Act** britannique, 2023).
- L'Australie interdit les réseaux sociaux aux moins de 16 ans (loi de 2024).

### À retenir pour le bac
- Magna Carta (1215), Habeas Corpus (1679), Bill of Rights (1791), First et Second Amendments.
- Armes : NRA, mass shootings, March for Our Lives ; lois strictes au Royaume-Uni et en Australie.
- Patriot Act (2001), Snowden (2013), CCTV, Big Brother ; réseaux sociaux et modération.`,
      cartes: [
        { q: "Traduire en anglais : la liberté d'expression", r: "Freedom of speech." },
        { q: "Que signifie « a whistleblower » ?", r: "Un lanceur d'alerte." },
        { q: "Traduire en anglais : la vie privée", r: "Privacy." },
        { q: "Que signifie « hate speech » ?", r: "Les discours de haine." },
        { q: "Traduire en anglais : une tuerie de masse", r: "A mass shooting." },
        { q: "Que signifie « to infringe on a right » ?", r: "Porter atteinte à un droit." },
        { q: "Qu'est-ce que la Magna Carta ?", r: "La charte de 1215 qui oblige le roi d'Angleterre à respecter la loi." },
        { q: "Que garantit l'Habeas Corpus ?", r: "Personne ne peut être détenu sans être présenté à un juge (1679)." },
        { q: "Que garantit le First Amendment ?", r: "La liberté de religion, d'expression, de la presse et de réunion." },
        { q: "Que garantit le Second Amendment ?", r: "Le droit du peuple de posséder et de porter des armes." },
        { q: "Qu'est-ce que la NRA ?", r: "La National Rifle Association, puissant lobby qui défend le droit de porter des armes." },
        { q: "Qu'a révélé Edward Snowden en 2013 ?", r: "La surveillance de masse des communications par la NSA américaine." },
        { q: "Qu'est-ce que le Patriot Act ?", r: "La loi votée après le 11 septembre 2001 qui élargit les pouvoirs de surveillance." },
        { q: "Qu'est-ce que March for Our Lives ?", r: "Le mouvement lancé par les lycéens de Parkland en 2018 pour un meilleur contrôle des armes." },
      ],
      quiz: [
        { q: "Comment dit-on « un lanceur d'alerte » en anglais ?", choix: ["A firestarter","A troublemaker","A gatekeeper","A whistleblower"], bonne: 3, expl: "To blow the whistle = donner l'alerte.", niv: 1 },
        { q: "Quel amendement protège la liberté d'expression ?", choix: ["Le Second Amendment","Le Fifth Amendment","Le First Amendment","Le Nineteenth Amendment"], bonne: 2, expl: "Il protège aussi la presse, la religion et la réunion.", niv: 1 },
        { q: "Que signifie « privacy » ?", choix: ["La privation","La vie privée","Le privilège","La propriété privée"], bonne: 1, expl: "Privacy concerns = inquiétudes sur la vie privée.", niv: 1 },
        { q: "Qui a écrit 1984 et inventé Big Brother ?", choix: ["Aldous Huxley","Margaret Atwood","George Orwell","Ray Bradbury"], bonne: 2, expl: "Roman publié en 1949.", niv: 1 },
        { q: "Quel texte de 1215 limite le pouvoir du roi d'Angleterre ?", choix: ["Le Bill of Rights","La Magna Carta","L'Habeas Corpus Act","Le Human Rights Act"], bonne: 1, expl: "Elle est le symbole du règne de la loi (rule of law).", niv: 2 },
        { q: "Quel organisme défend le Second Amendment ?", choix: ["La NSA","Le NHS","La NASA","La NRA"], bonne: 3, expl: "La National Rifle Association est un lobby très influent.", niv: 2 },
        { q: "Quelle loi suit les attentats du 11 septembre 2001 ?", choix: ["Le Civil Rights Act","Le Voting Rights Act","L'Online Safety Act","Le Patriot Act"], bonne: 3, expl: "Elle élargit la surveillance au nom de la sécurité nationale.", niv: 2 },
        { q: "Que signifie « gun control » ?", choix: ["Le contrôle d'un pistolet à eau","La surveillance des frontières","Le contrôle des armes à feu","La maîtrise de soi au tir"], bonne: 2, expl: "Les partisans veulent des vérifications et des interdictions.", niv: 2 },
        { q: "Comment le Royaume-Uni a-t-il réagi à la tuerie de Dunblane (1996) ?", choix: ["En armant les enseignants dans les écoles primaires du pays","En interdisant la plupart des armes de poing","En supprimant la police de proximité","En autorisant les armes à chaque adulte"], bonne: 1, expl: "Les lois britanniques sont parmi les plus strictes.", niv: 2 },
        { q: "Quel dilemme pose l'affaire Snowden ?", choix: ["Liberté de la presse contre liberté de religion et de culte","Droit de vote contre droit de grève","Sécurité nationale contre respect de la vie privée","Égalité des salaires contre mobilité sociale"], bonne: 2, expl: "Surveiller pour protéger, au risque d'espionner les citoyens.", niv: 3 },
        { q: "Pourquoi le débat sur les armes est-il si difficile aux États-Unis ?", choix: ["Les armes sont interdites dans la plupart des États","La Cour suprême refuse de juger la question depuis sa création en 1789","Le droit de porter des armes est inscrit dans la Constitution","Les Américains ne possèdent presque pas d'armes"], bonne: 2, expl: "Changer le Second Amendment demande une majorité très large.", niv: 3 },
        { q: "Un document montre des caméras CCTV dans une rue de Londres. Quel axe ?", choix: ["Unité et pluralité","De la protection de la nature à la transition écologique","Héritage commun et diversité","Libertés publiques et libertés individuelles"], bonne: 3, expl: "La surveillance limite-t-elle la liberté individuelle ?", niv: 3 },
      ],
    },
    {
      chapitre: "amc-4",
      fiche: `## Frontière et espace

Aux États-Unis, la **frontier** n'est pas seulement une ligne sur une carte : c'est un mythe, celui d'un espace à conquérir vers l'ouest, puis vers l'espace. Aujourd'hui, les frontières se ferment (mur avec le Mexique, Brexit, traversées de la Manche) tandis que de nouveaux espaces s'ouvrent : l'Arctique, la Lune, Mars. Cet axe étudie ces mutations.

### Le vocabulaire à connaître
- **a border** : une frontière entre États ; **the frontier** : le front pionnier, la limite de la conquête ; **a boundary** : une limite.
- **to cross** ; **a checkpoint** ; **a wall** ; **a fence** : une clôture ; **border control** ; **an asylum seeker** ; **a small boat**.
- **to settle** : s'installer ; **a settler** : un colon, un pionnier ; **the wilderness** : la nature sauvage ; **to expand** ; **expansion**.
- **outer space** : l'espace ; **a spacecraft** ; **a rocket** ; **to launch** : lancer ; **a space race** ; **to land** : atterrir.
- **a territory** ; **a claim** : une revendication ; **resources** ; **the Arctic** : l'Arctique ; **melting ice** : la fonte des glaces.

### Le mythe de la frontier
- **Manifest Destiny** (expression de John O'Sullivan, **1845**) : les Américains se croient destinés par Dieu à s'étendre jusqu'au Pacifique.
- Cette conquête se fait au détriment des **Native Americans** (Trail of Tears, 1838 ; réserves).
- **Frederick Jackson Turner** (**1893**) : la frontier a forgé le caractère américain (individualisme, démocratie) ; elle est alors « fermée ».
- Le western (John Ford, *The Searchers*, 1956) a fait de la conquête un mythe, revisité plus tard de manière critique.

### Les frontières d'aujourd'hui
- **États-Unis et Mexique** : environ 3 100 km ; mur renforcé, débats sur l'immigration, politique de Donald Trump (« Build the wall »).
- **Irlande** : l'**accord du Vendredi saint** (**Good Friday Agreement**, **1998**) met fin aux Troubles et efface la frontière visible. Le Brexit pose la question d'une frontière entre les deux Irlandes ; le **Windsor Framework** (**2023**) règle les contrôles en mer d'Irlande.
- **La Manche** : des migrants traversent en **small boats** vers l'Angleterre ; le gouvernement britannique durcit sa politique.

### La nouvelle frontière : l'espace
- John F. Kennedy parle de **New Frontier** (1960) et lance la course à la Lune contre l'URSS.
- **Apollo 11** : le **20 juillet 1969**, **Neil Armstrong** marche sur la Lune : « That's one small step for man, one giant leap for mankind ».
- Aujourd'hui : la **NASA** et son programme **Artemis** (retour sur la Lune), et des entreprises privées comme **SpaceX** (Elon Musk) ou **Blue Origin** (Jeff Bezos). Débat : l'espace doit-il rester un bien commun ou devenir un marché ?
- Le **traité de l'espace** (**Outer Space Treaty**, **1967**) interdit qu'un pays s'approprie un corps céleste.

### L'Arctique, un espace qui s'ouvre
- La **fonte des glaces** ouvre de nouvelles routes (passage du Nord-Ouest au Canada) et l'accès à des ressources : rivalités entre États.

### À retenir pour le bac
- Manifest Destiny (1845), Turner (1893), le western ; border ≠ frontier.
- Mur avec le Mexique ; Good Friday Agreement (1998), Windsor Framework (2023) ; small boats.
- New Frontier, Apollo 11 (1969), Outer Space Treaty (1967), Artemis, SpaceX.`,
      cartes: [
        { q: "Quelle différence entre « border » et « frontier » ?", r: "Border : frontière entre deux États. Frontier : front pionnier, limite de la conquête, et mythe américain." },
        { q: "Traduire en anglais : un colon, un pionnier", r: "A settler." },
        { q: "Que signifie « the wilderness » ?", r: "La nature sauvage." },
        { q: "Traduire en anglais : une clôture", r: "A fence." },
        { q: "Que signifie « to launch a rocket » ?", r: "Lancer une fusée." },
        { q: "Qu'est-ce que le Manifest Destiny ?", r: "L'idée (1845) que les Américains sont destinés à s'étendre jusqu'au Pacifique." },
        { q: "Que dit Frederick Jackson Turner en 1893 ?", r: "Que la frontier a forgé le caractère américain et qu'elle est désormais fermée." },
        { q: "Qu'est-ce que le Good Friday Agreement ?", r: "L'accord de paix de 1998 en Irlande du Nord, qui met fin aux Troubles." },
        { q: "Qu'est-ce que le Windsor Framework ?", r: "L'accord de 2023 entre Londres et l'UE sur les contrôles commerciaux pour l'Irlande du Nord." },
        { q: "Que désigne « small boats » au Royaume-Uni ?", r: "Les petites embarcations de migrants qui traversent la Manche." },
        { q: "Que dit Neil Armstrong en 1969 ?", r: "« That's one small step for man, one giant leap for mankind »." },
        { q: "Que désigne la New Frontier de Kennedy ?", r: "Son programme de 1960, dont la conquête de l'espace." },
        { q: "Que dit l'Outer Space Treaty de 1967 ?", r: "Aucun pays ne peut s'approprier la Lune ou un autre corps céleste." },
        { q: "Pourquoi l'Arctique devient-il un enjeu ?", r: "La fonte des glaces ouvre de nouvelles routes maritimes et l'accès à des ressources." },
      ],
      quiz: [
        { q: "Comment dit-on « une clôture » en anglais ?", choix: ["A fan","A fence","A fend","A fencing match"], bonne: 1, expl: "Border fence = clôture frontalière.", niv: 1 },
        { q: "Qui a marché le premier sur la Lune ?", choix: ["Neil Armstrong","Buzz Aldrin, son copilote","Youri Gagarine","John Glenn"], bonne: 0, expl: "Le 20 juillet 1969, mission Apollo 11.", niv: 1 },
        { q: "Que signifie « a settler » ?", choix: ["Un colon","Un vendeur","Un banquier","Un régleur de comptes"], bonne: 0, expl: "Les settlers s'installent sur les terres de l'Ouest.", niv: 1 },
        { q: "Quelle entreprise privée d'Elon Musk lance des fusées ?", choix: ["Blue Origin","Virgin Galactic","SpaceX","Boeing"], bonne: 2, expl: "Elle ravitaille aussi la Station spatiale internationale.", niv: 1 },
        { q: "En quelle année est signé le Good Friday Agreement ?", choix: ["2016","2020","2023","1998"], bonne: 3, expl: "Il met fin aux Troubles en Irlande du Nord.", niv: 2 },
        { q: "Que désigne le Manifest Destiny ?", choix: ["La croyance en une expansion voulue par Dieu vers l'Ouest","Le premier manifeste des Native Americans","La déclaration d'indépendance du Texas","Le plan de construction du mur à la frontière avec le Mexique"], bonne: 0, expl: "Expression de John O'Sullivan, 1845.", niv: 2 },
        { q: "Quel genre de film a fait de la conquête de l'Ouest un mythe ?", choix: ["La comédie musicale","Le film catastrophe","Le film de science-fiction","Le western"], bonne: 3, expl: "John Ford, The Searchers (1956).", niv: 2 },
        { q: "Pourquoi le Brexit pose-t-il problème pour l'Irlande ?", choix: ["Il oblige la république d'Irlande à quitter l'Union européenne","Il risque de recréer une frontière entre les deux Irlandes","Il rattache l'Irlande du Nord à l'Écosse","Il supprime le Good Friday Agreement"], bonne: 1, expl: "Une frontière visible pourrait raviver les tensions.", niv: 2 },
        { q: "Que traverse un migrant arrivé en small boat en Angleterre ?", choix: ["La mer du Nord","La mer d'Irlande","La Manche","L'océan Atlantique"], bonne: 2, expl: "De la côte française vers le Kent.", niv: 2 },
        { q: "Pourquoi l'espace est-il une « nouvelle frontier » ?", choix: ["Il est interdit à la plupart des pays","Il appartient aux États-Unis depuis 1969","Il reprend le mythe d'un territoire à conquérir","Il sert de frontière avec le Mexique"], bonne: 2, expl: "Kennedy reprend le vocabulaire de la conquête de l'Ouest.", niv: 3 },
        { q: "Quel débat posent SpaceX et Blue Origin ?", choix: ["L'espace doit-il rester un bien commun ou devenir un marché ?","Faut-il interdire les satellites de télévision ?","La Lune appartient-elle déjà à une entreprise ?","Les fusées doivent-elles être fabriquées en Europe plutôt qu'en Floride ?"], bonne: 0, expl: "Le traité de 1967 visait les États, pas les entreprises.", niv: 3 },
        { q: "Que révèle la vision critique du western depuis les années 1970 ?", choix: ["Les cowboys n'ont pas existé du tout","L'Ouest était un territoire vide avant l'arrivée des premiers colons","La conquête s'est faite aux dépens des Native Americans","Le western glorifie les peuples autochtones"], bonne: 2, expl: "On montre la violence de la conquête et le point de vue des vaincus.", niv: 3 },
      ],
    },
    {
      chapitre: "amc-5",
      fiche: `## Repenser la ville

Plus de la moitié de l'humanité vit en ville, et plus de 80 % des habitants des États-Unis ou du Royaume-Uni. Les villes anglophones doivent répondre à de grands défis : logement trop cher, pollution, embouteillages, inégalités entre quartiers, désindustrialisation. Cet axe étudie comment on **réinvente** la ville.

### Le vocabulaire à connaître
- **urban** ; **urbanisation** ; **a city** ; **a town** ; **the inner city** : les quartiers centraux pauvres ; **the suburbs** : la banlieue résidentielle ; **urban sprawl** : l'étalement urbain.
- **gentrification** ; **to gentrify** ; **rent** : le loyer ; **affordable housing** : le logement abordable ; **a housing crisis** ; **homelessness** : le sans-abrisme.
- **a skyscraper** : un gratte-ciel ; **a tower block** : une tour d'habitation ; **a neighbourhood** : un quartier ; **a community**.
- **traffic jams** : les embouteillages ; **public transport** ; **a congestion charge** : un péage urbain ; **cycle lanes** : les pistes cyclables ; **air pollution**.
- **a smart city** ; **green spaces** ; **to regenerate** : réhabiliter ; **urban renewal** ; **a brownfield site** : une friche industrielle.

### Banlieues et étalement urbain
- Après 1945, les Américains partent vivre dans les **suburbs** (comme **Levittown**, maisons identiques construites en série). La voiture devient indispensable : **urban sprawl**.
- Les centres-villes s'appauvrissent : c'est la **white flight**, le départ des classes moyennes blanches vers les banlieues.

### Désindustrialisation et renouveau
- **Detroit**, ancienne capitale de l'automobile (Motor City), perd plus de la moitié de sa population et fait **faillite en 2013**. Des quartiers renaissent grâce à des jardins urbains et à de nouvelles entreprises.
- Au Royaume-Uni, les **Docklands** de Londres, anciens docks, deviennent un quartier d'affaires (Canary Wharf).
- À New York, la **High Line** (ouverte en **2009**) transforme une voie ferrée abandonnée en promenade plantée.

### La gentrification
- Des quartiers populaires attirent artistes puis classes aisées : les loyers montent, les anciens habitants partent (Brooklyn, Shoreditch à Londres, San Francisco avec la tech).
- Conséquences : **housing crisis**, **homelessness**, tentes dans les rues de San Francisco ou de Los Angeles.

### Une ville plus durable
- **Londres** : **congestion charge** (péage urbain, **2003**) puis **ULEZ** (zone à très faibles émissions, **2019**), pistes cyclables.
- L'idée de la **15-minute city** : tout avoir à quinze minutes à pied ou à vélo. Elle a aussi suscité des polémiques au Royaume-Uni.
- **Smart cities** : capteurs, données, transports connectés ; mais risque de surveillance.
- L'incendie de la **Grenfell Tower** à Londres (**2017**, 72 morts) a révélé la négligence envers les logements sociaux.

### À retenir pour le bac
- Suburbs, Levittown, urban sprawl, white flight ; Detroit (faillite 2013).
- Gentrification, housing crisis, homelessness ; Grenfell (2017).
- High Line (2009), congestion charge (2003), ULEZ (2019), 15-minute city, smart city.`,
      cartes: [
        { q: "Traduire en anglais : l'étalement urbain", r: "Urban sprawl." },
        { q: "Que signifie « affordable housing » ?", r: "Le logement abordable." },
        { q: "Traduire en anglais : le loyer", r: "Rent." },
        { q: "Que signifie « the suburbs » ?", r: "La banlieue résidentielle." },
        { q: "Traduire en anglais : un péage urbain", r: "A congestion charge." },
        { q: "Que signifie « a brownfield site » ?", r: "Une friche industrielle." },
        { q: "Qu'est-ce que la gentrification ?", r: "L'arrivée de classes aisées dans un quartier populaire, qui fait monter les loyers et chasse les anciens habitants." },
        { q: "Qu'est-ce que la white flight ?", r: "Le départ des classes moyennes blanches des centres-villes vers les banlieues américaines." },
        { q: "Qu'est-ce que Levittown ?", r: "Une banlieue américaine de l'après-guerre aux maisons identiques construites en série." },
        { q: "Quand Detroit a-t-elle fait faillite ?", r: "En 2013." },
        { q: "Qu'est-ce que la High Line ?", r: "Une ancienne voie ferrée de New York transformée en promenade plantée (2009)." },
        { q: "Qu'est-ce que l'ULEZ ?", r: "L'Ultra Low Emission Zone de Londres (2019), qui fait payer les véhicules les plus polluants." },
        { q: "Qu'est-ce que la 15-minute city ?", r: "Une ville où l'on trouve tout l'essentiel à quinze minutes à pied ou à vélo." },
        { q: "Que s'est-il passé à la Grenfell Tower en 2017 ?", r: "Un incendie a tué 72 personnes dans une tour de logements sociaux de Londres." },
      ],
      quiz: [
        { q: "Comment dit-on « le loyer » en anglais ?", choix: ["Rent","Rate","Rant","Rental car"], bonne: 0, expl: "To pay the rent = payer le loyer.", niv: 1 },
        { q: "Que signifie « a skyscraper » ?", choix: ["Un gratte-ciel","Un avion de ligne","Un nuage d'orage","Un parachutiste"], bonne: 0, expl: "Littéralement : qui gratte le ciel.", niv: 1 },
        { q: "Quelle ville américaine était la capitale de l'automobile ?", choix: ["Chicago","Detroit","Pittsburgh","Seattle"], bonne: 1, expl: "Surnommée Motor City.", niv: 1 },
        { q: "Que signifie « the inner city » ?", choix: ["Les quartiers centraux pauvres","Le centre d'affaires très riche","La vieille ville historique","La ville intérieure d'un pays"], bonne: 0, expl: "Aux États-Unis, l'expression évoque la pauvreté du centre.", niv: 1 },
        { q: "En quelle année Londres a-t-elle créé son péage urbain ?", choix: ["2009","2013","2003","2019"], bonne: 2, expl: "La congestion charge réduit le trafic dans le centre.", niv: 2 },
        { q: "Que désigne la white flight ?", choix: ["Un vol aérien réservé aux hommes d'affaires","Le départ des classes moyennes blanches vers les banlieues","La fuite des capitaux des grandes villes vers les paradis fiscaux","La neige qui bloque les villes l'hiver"], bonne: 1, expl: "Elle a appauvri les centres-villes américains.", niv: 2 },
        { q: "Qu'est-ce que la High Line de New York ?", choix: ["Un nouveau gratte-ciel de Manhattan","Une autoroute urbaine à péage","Une voie ferrée devenue promenade","Une ligne de métro aérienne"], bonne: 2, expl: "Exemple de renouveau urbain (2009).", niv: 2 },
        { q: "Quelle conséquence a souvent la gentrification ?", choix: ["Les anciens habitants sont chassés par la hausse des loyers","Les loyers baissent pour les familles pauvres","Les artistes deviennent propriétaires du quartier","Le quartier se vide de ses commerces et de ses habitants aisés"], bonne: 0, expl: "Les classes populaires partent vers la périphérie.", niv: 2 },
        { q: "Qu'a révélé l'incendie de la Grenfell Tower ?", choix: ["Le manque de pompiers à Londres","La richesse des quartiers de l'Est","La négligence envers les logements sociaux","Le succès des tours modernes"], bonne: 2, expl: "Le revêtement inflammable avait été choisi pour réduire les coûts.", niv: 2 },
        { q: "Pourquoi l'étalement urbain pose-t-il un problème écologique ?", choix: ["Il rend la voiture indispensable et consomme des terres","Il réduit le nombre de maisons individuelles","Il supprime les autoroutes autour des villes","Il oblige les familles à vivre dans des tours très hautes en centre-ville"], bonne: 0, expl: "Plus de trajets en voiture, plus d'émissions.", niv: 3 },
        { q: "Quel risque présentent les smart cities ?", choix: ["La disparition de l'électricité en ville","L'interdiction des téléphones portables","Le retour des voitures à essence","Une surveillance accrue des habitants"], bonne: 3, expl: "Capteurs et données peuvent menacer la vie privée.", niv: 3 },
        { q: "Un document montre des tentes de sans-abri au pied de sièges d'entreprises tech. Quelle idée ?", choix: ["La ville creuse les inégalités","La ville accueille bien les plus pauvres","Les entreprises tech logent leurs salariés dehors","Le camping devient une mode urbaine"], bonne: 0, expl: "Richesse et pauvreté se côtoient, comme à San Francisco.", niv: 3 },
      ],
    },
    {
      chapitre: "amc-6",
      fiche: `## De la protection de la nature à la transition écologique

Les pays anglophones ont inventé les parcs nationaux et l'écologie militante, mais ils comptent aussi parmi les plus gros émetteurs de gaz à effet de serre. On est passé de la **protection** d'espaces sauvages à une question plus vaste : comment changer toute l'économie pour lutter contre le **changement climatique** ?

### Le vocabulaire à connaître
- **the environment** ; **wildlife** : la faune sauvage ; **an endangered species** : une espèce menacée ; **biodiversity** ; **conservation** : la protection de la nature.
- **climate change** ; **global warming** ; **greenhouse gases** ; **carbon emissions** ; **fossil fuels** : les énergies fossiles ; **a carbon footprint** : l'empreinte carbone.
- **renewable energy** ; **wind farms** : les parcs éoliens ; **solar panels** ; **net zero** : la neutralité carbone ; **to phase out** : abandonner progressivement.
- **an activist** ; **a climate strike** ; **civil disobedience** ; **greenwashing** : l'écoblanchiment ; **sustainable** : durable.
- **a wildfire** ou **a bushfire** (Australie) : un incendie ; **a drought** : une sécheresse ; **a flood** : une inondation ; **extreme weather**.

### Protéger la nature sauvage
- **Yellowstone** devient en **1872** le **premier parc national du monde**. Le naturaliste **John Muir** défend la wilderness et inspire la création d'autres parcs.
- **Rachel Carson**, *Silent Spring* (**1962**), dénonce les pesticides (DDT) : naissance de l'écologie moderne.
- Premier **Earth Day** en **1970** aux États-Unis ; création de l'Agence de protection de l'environnement (**EPA**).

### Le défi climatique
- **Accord de Paris** (**2015**) : limiter le réchauffement « bien en dessous de 2 °C ». Les États-Unis en sortent sous Trump, y reviennent en 2021 sous Biden, puis en sortent de nouveau en 2025.
- Le Royaume-Uni inscrit dans la loi l'objectif **net zero** pour **2050** (**2019**) et ferme sa dernière centrale au charbon en **2024**.
- L'**Inflation Reduction Act** (**2022**) américain finance massivement les énergies renouvelables.
- **Australie** : les **bushfires** de 2019-2020 (« Black Summer ») et le blanchissement de la **Grande Barrière de corail** montrent les effets du réchauffement.

### Militer pour le climat
- **Greta Thunberg** lance la grève scolaire pour le climat en **2018** (Fridays for Future).
- **Extinction Rebellion**, né au Royaume-Uni en **2018**, pratique la **désobéissance civile**.
- Les **peuples autochtones** sont en première ligne : à **Standing Rock** (2016), les Sioux s'opposent à un oléoduc.
- Débats : **greenwashing** des entreprises, coût de la transition pour les plus pauvres, **fracking** (gaz de schiste) aux États-Unis.

### À retenir pour le bac
- Yellowstone (1872), John Muir, Silent Spring (1962), Earth Day (1970).
- Paris (2015), net zero 2050 au Royaume-Uni, Inflation Reduction Act (2022), bushfires australiens.
- Greta Thunberg et Extinction Rebellion (2018), Standing Rock, greenwashing.`,
      cartes: [
        { q: "Traduire en anglais : une espèce menacée", r: "An endangered species." },
        { q: "Que signifie « fossil fuels » ?", r: "Les énergies fossiles (charbon, pétrole, gaz)." },
        { q: "Traduire en anglais : l'empreinte carbone", r: "A carbon footprint." },
        { q: "Que signifie « net zero » ?", r: "La neutralité carbone : ne pas émettre plus que ce qu'on absorbe." },
        { q: "Traduire en anglais : l'écoblanchiment", r: "Greenwashing." },
        { q: "Que signifie « to phase out » ?", r: "Abandonner progressivement." },
        { q: "Quel est le premier parc national du monde ?", r: "Yellowstone, aux États-Unis, en 1872." },
        { q: "Qui était John Muir ?", r: "Un naturaliste qui défendait la nature sauvage et inspira la création de parcs nationaux." },
        { q: "Quel livre de 1962 lance l'écologie moderne ?", r: "Silent Spring de Rachel Carson, contre les pesticides." },
        { q: "Quand a lieu le premier Earth Day ?", r: "En 1970, aux États-Unis." },
        { q: "Quel est l'objectif de l'accord de Paris (2015) ?", r: "Limiter le réchauffement bien en dessous de 2 °C." },
        { q: "Qu'est-ce qu'Extinction Rebellion ?", r: "Un mouvement écologiste né au Royaume-Uni en 2018, qui pratique la désobéissance civile." },
        { q: "Que s'est-il passé à Standing Rock en 2016 ?", r: "Les Sioux et leurs soutiens ont protesté contre un oléoduc traversant leurs terres." },
        { q: "Que désigne le Black Summer australien ?", r: "Les immenses bushfires de 2019-2020." },
      ],
      quiz: [
        { q: "Comment dit-on « une sécheresse » en anglais ?", choix: ["A draught beer","A drought","A dread","A dragon"], bonne: 1, expl: "Drought = manque d'eau prolongé.", niv: 1 },
        { q: "Quel est le premier parc national du monde ?", choix: ["Yosemite","Yellowstone","Grand Canyon","Lake District"], bonne: 1, expl: "Créé en 1872.", niv: 1 },
        { q: "Qui a lancé la grève scolaire pour le climat ?", choix: ["Rachel Carson","John Muir","Greta Thunberg","Al Gore"], bonne: 2, expl: "En 2018, devant le Parlement suédois.", niv: 1 },
        { q: "Que signifie « renewable energy » ?", choix: ["Les énergies renouvelables","Les énergies fossiles","L'énergie nucléaire et le charbon","L'énergie dépensée en renouvelant un contrat"], bonne: 0, expl: "Vent, soleil, eau.", niv: 1 },
        { q: "Quel livre dénonce les pesticides en 1962 ?", choix: ["The Grapes of Wrath","Walden","Silent Spring","An Inconvenient Truth"], bonne: 2, expl: "Rachel Carson y dénonce le DDT.", niv: 2 },
        { q: "Que signifie « greenwashing » ?", choix: ["Laver ses vêtements à froid","Faire croire qu'on est écologique","Nettoyer un parc national","Peindre les bâtiments en vert"], bonne: 1, expl: "Une communication verte sans vrais efforts.", niv: 2 },
        { q: "Quel pays a connu les bushfires du Black Summer ?", choix: ["Le Canada","La Nouvelle-Zélande","L'Australie","L'Irlande"], bonne: 2, expl: "En 2019-2020, des millions d'hectares ont brûlé.", niv: 2 },
        { q: "Quel objectif le Royaume-Uni a-t-il inscrit dans la loi en 2019 ?", choix: ["Zéro voiture neuve dès 2020","Net zero en 2050","Fermer les parcs nationaux","Doubler l'usage du charbon"], bonne: 1, expl: "Neutralité carbone d'ici 2050.", niv: 2 },
        { q: "Que pratique Extinction Rebellion ?", choix: ["La lutte armée contre les entreprises","Le lobbying discret au Parlement","Le boycott des parcs nationaux","La désobéissance civile non violente"], bonne: 3, expl: "Blocages de ponts et de routes à Londres.", niv: 2 },
        { q: "Quelle évolution résume le titre de l'axe ?", choix: ["On abandonne la protection des parcs nationaux au profit des villes nouvelles","On protège surtout les animaux sauvages","On passe de protéger des espaces à transformer toute l'économie","On remplace l'écologie par la croissance"], bonne: 2, expl: "La transition touche l'énergie, les transports, l'industrie.", niv: 3 },
        { q: "Pourquoi les peuples autochtones sont-ils en première ligne ?", choix: ["Leurs terres et modes de vie sont menacés par les projets d'extraction","Leurs chefs dirigent les grandes compagnies pétrolières et minières","Ils vivent loin de la nature, dans les villes","Ils refusent les énergies renouvelables"], bonne: 0, expl: "Exemple : Standing Rock et l'oléoduc Dakota Access.", niv: 3 },
        { q: "Que montrent les sorties et retours successifs des États-Unis de l'accord de Paris ?", choix: ["La politique climatique dépend de l'alternance politique","Les États-Unis ont atteint la neutralité carbone","L'accord de Paris a été annulé par l'ONU","Les présidents américains successifs sont d'accord sur le climat"], bonne: 0, expl: "Trump en sort, Biden y revient, Trump en ressort.", niv: 3 },
      ],
    },
    {
      chapitre: "amc-7",
      fiche: `## Puissance et influence

Le Royaume-Uni a dominé le XIXe siècle avec son empire ; les États-Unis dominent depuis 1945. Mais la puissance ne se mesure pas seulement en soldats et en dollars : elle passe aussi par la culture, la langue, les universités, le numérique. Cet axe distingue le **hard power** et le **soft power**.

### Le vocabulaire à connaître
- **power** ; **a superpower** ; **a world power** ; **hard power** (force militaire et économique) ; **soft power** (pouvoir d'attraction) ; **smart power**.
- **influence** ; **to influence** ; **leadership** ; **dominance** ; **hegemony** : l'hégémonie ; **to decline** : décliner.
- **an empire** ; **a colony** ; **the Commonwealth** ; **decolonisation** ; **a dominion**.
- **an ally** ; **an alliance** ; **the military** : l'armée ; **defence spending** : les dépenses militaires ; **a sanction**.
- **Big Tech** ; **the entertainment industry** ; **a brand** : une marque ; **the lingua franca** : la langue commune internationale.

### Du British Empire au Commonwealth
- À son apogée (vers 1920), l'**Empire britannique** couvre un quart des terres émergées : « the empire on which the sun never sets ».
- Après 1945, **décolonisation** : indépendance de l'**Inde** en **1947**, des colonies africaines dans les années 1950-1960.
- Le **Commonwealth of Nations** réunit aujourd'hui **56 pays**, la plupart d'anciennes colonies ; le roi **Charles III** en est le chef symbolique.
- Le Royaume-Uni garde une influence : siège permanent au **Conseil de sécurité de l'ONU**, arme nucléaire, **BBC World Service**, la City de Londres, ses universités (Oxford, Cambridge).

### La puissance américaine
- **Hard power** : premier budget militaire du monde, bases sur tous les continents, le **dollar** monnaie de référence, l'**OTAN** (**NATO**, **1949**).
- **Soft power** : notion inventée par le politologue **Joseph Nye** (**1990**). Hollywood, la musique, les séries, les marques (Coca-Cola, McDonald's, Nike), les universités (Harvard, MIT), l'**American Dream**.
- **Big Tech** : Google, Apple, Meta, Amazon, Microsoft dominent le numérique mondial ; leur influence pose des questions de régulation.
- La **special relationship** entre Londres et Washington (expression de **Churchill**, **1946**).

### L'anglais, langue mondiale
- L'anglais est la **lingua franca** des affaires, de la science, d'Internet et de l'aviation. Il est parlé par environ 1,5 milliard de personnes, dont une minorité de locuteurs natifs.
- Cette domination est un atout de soft power, mais elle peut menacer d'autres langues.

### Une puissance contestée
- Des puissances montent (**Chine**, Inde) ; les États-Unis sont accusés d'unilatéralisme (guerre d'Irak, **2003**) ; le Royaume-Uni redéfinit son rôle après le Brexit (**Global Britain**).

### À retenir pour le bac
- Hard power / soft power (Joseph Nye, 1990) ; Big Tech ; Hollywood ; NATO (1949).
- Empire britannique, indépendance de l'Inde (1947), Commonwealth (56 pays), siège à l'ONU, BBC.
- Special relationship (Churchill, 1946) ; l'anglais lingua franca.`,
      cartes: [
        { q: "Quelle différence entre hard power et soft power ?", r: "Hard power : contraindre par la force militaire ou économique. Soft power : attirer et convaincre par la culture et les valeurs." },
        { q: "Qui a inventé la notion de soft power ?", r: "Le politologue américain Joseph Nye, en 1990." },
        { q: "Traduire en anglais : un allié", r: "An ally." },
        { q: "Que signifie « defence spending » ?", r: "Les dépenses militaires." },
        { q: "Traduire en anglais : l'hégémonie", r: "Hegemony." },
        { q: "Que signifie « the lingua franca » ?", r: "La langue commune utilisée entre des personnes de langues différentes." },
        { q: "Que signifie « the empire on which the sun never sets » ?", r: "L'empire sur lequel le soleil ne se couche jamais : l'Empire britannique, présent sur tous les continents." },
        { q: "Quand l'Inde devient-elle indépendante ?", r: "En 1947." },
        { q: "Combien de pays compte le Commonwealth ?", r: "56 pays, pour la plupart d'anciennes colonies britanniques." },
        { q: "Quand est créée l'OTAN ?", r: "En 1949." },
        { q: "Qui a parlé le premier de la special relationship ?", r: "Winston Churchill, en 1946." },
        { q: "Que désigne Big Tech ?", r: "Les géants américains du numérique : Google, Apple, Meta, Amazon, Microsoft." },
        { q: "Cite trois atouts du soft power britannique.", r: "La BBC, les universités (Oxford, Cambridge), la monarchie et la culture (musique, football, littérature)." },
        { q: "Qu'est-ce que Global Britain ?", r: "Le slogan du gouvernement britannique après le Brexit pour affirmer un rôle mondial hors de l'UE." },
      ],
      quiz: [
        { q: "Que signifie « an ally » ?", choix: ["Une allée","Un allié","Un alliage","Un rallye"], bonne: 1, expl: "NATO allies = les alliés de l'OTAN.", niv: 1 },
        { q: "Qui a forgé la notion de soft power ?", choix: ["Winston Churchill","Henry Kissinger","Joseph Nye","John F. Kennedy"], bonne: 2, expl: "Politologue de Harvard, en 1990.", niv: 1 },
        { q: "Quelle organisation militaire est créée en 1949 ?", choix: ["L'ONU","Le Commonwealth","L'OTAN","L'Union européenne"], bonne: 2, expl: "NATO = North Atlantic Treaty Organization.", niv: 1 },
        { q: "Quelle chaîne incarne le soft power britannique ?", choix: ["CNN","Fox News","Al Jazeera","La BBC"], bonne: 3, expl: "Le BBC World Service émet dans le monde entier.", niv: 1 },
        { q: "Quand l'Inde obtient-elle son indépendance ?", choix: ["1919","1931","1945","1947"], bonne: 3, expl: "Fin du « joyau de la Couronne ».", niv: 2 },
        { q: "Lequel est un exemple de hard power ?", choix: ["Des bases militaires à l'étranger","Le succès d'une série à l'étranger","Les étudiants étrangers à Harvard","La diffusion d'une langue"], bonne: 0, expl: "Le hard power contraint par la force.", niv: 2 },
        { q: "Combien de pays compte le Commonwealth ?", choix: ["12","27","56","33"], bonne: 2, expl: "Le Gabon et le Togo l'ont rejoint en 2022.", niv: 2 },
        { q: "Que désigne la special relationship ?", choix: ["L'amitié entre la reine Élisabeth II et le président français","Le lien étroit entre le Royaume-Uni et les États-Unis","Le mariage d'un prince avec une Américaine","L'accord commercial entre l'Inde et la Chine"], bonne: 1, expl: "Expression de Churchill (1946).", niv: 2 },
        { q: "Que signifie « to decline » à propos d'une puissance ?", choix: ["Déclarer la guerre","Décliner une invitation à dîner","Dessiner une carte","Décliner"], bonne: 3, expl: "The decline of the British Empire.", niv: 2 },
        { q: "Pourquoi Hollywood est-il un outil de soft power ?", choix: ["Il fabrique des armes pour l'armée","Il finance les bases militaires à l'étranger","Il diffuse les valeurs et le mode de vie américains","Il impose des sanctions économiques"], bonne: 2, expl: "Les films rendent l'Amérique familière et attirante.", niv: 3 },
        { q: "Pourquoi l'influence de Big Tech inquiète-t-elle certains gouvernements ?", choix: ["Ces entreprises contrôlent des données et l'information mondiales","Ces groupes possèdent une partie de l'armée et des bases américaines","Elles ont interdit l'anglais sur Internet","Elles fabriquent la monnaie du dollar"], bonne: 0, expl: "Données, publicité, algorithmes : une puissance privée.", niv: 3 },
        { q: "Que montre le slogan Global Britain après le Brexit ?", choix: ["Le retour de l'Empire britannique en Inde","L'abandon du siège britannique à l'ONU","Le rattachement du Royaume-Uni aux États-Unis comme nouvel État fédéré","La volonté de garder une influence mondiale hors de l'UE"], bonne: 3, expl: "Londres cherche de nouveaux partenaires (Indo-Pacifique, Commonwealth).", niv: 3 },
      ],
    },
    {
      chapitre: "amc-8",
      fiche: `## Rivalités et interdépendances

Les pays du monde sont à la fois **rivaux** et **dépendants** les uns des autres. Les États-Unis et la Chine se disputent la première place, mais leurs économies sont liées ; le Royaume-Uni a quitté l'Union européenne, mais reste son voisin et son client. La pandémie de Covid-19 et la guerre en Ukraine ont montré la fragilité de ces liens.

### Le vocabulaire à connaître
- **a rivalry** ; **a rival** ; **competition** ; **a trade war** : une guerre commerciale ; **tariffs** : les droits de douane ; **protectionism**.
- **interdependence** ; **globalisation** ; **free trade** : le libre-échange ; **a trade deal** ; **imports** / **exports** ; **a supply chain** : une chaîne d'approvisionnement.
- **the Cold War** ; **an arms race** : une course aux armements ; **a superpower** ; **a threat** : une menace ; **deterrence** : la dissuasion.
- **cooperation** ; **a treaty** ; **a summit** : un sommet ; **diplomacy** ; **an embargo** ; **to rely on** : dépendre de.
- **a chip** ou **a semiconductor** : une puce électronique ; **critical minerals** ; **cybersecurity** ; **a cyberattack**.

### De la guerre froide à la rivalité sino-américaine
- **Cold War** (1947-1991) : les États-Unis contre l'URSS, course aux armements et à l'espace, rideau de fer (**Iron Curtain**, Churchill, 1946).
- Aujourd'hui, la **Chine** est le grand rival des États-Unis : économie, technologies (5G, puces électroniques, logiciels), influence en Asie et en Afrique (**Belt and Road Initiative**, 2013).
- **Trade war** à partir de **2018** : Donald Trump impose des **tariffs** sur les produits chinois ; la Chine réplique. Nouvelle hausse des droits de douane en 2025.
- Le **CHIPS and Science Act** (**2022**) veut relocaliser la fabrication de puces aux États-Unis.

### Des économies liées
- La **mondialisation** a créé des **supply chains** mondiales : un iPhone est conçu en Californie et assemblé en Asie.
- La pandémie de **Covid-19** (**2020**) révèle la dépendance aux masques et médicaments venus d'Asie.
- Accords régionaux : l'**ALENA** (**NAFTA**, **1994**) entre États-Unis, Canada et Mexique, remplacé par l'**USMCA** en **2020**.

### Le Royaume-Uni après le Brexit
- Sortie de l'UE le **31 janvier 2020** ; accord de commerce et de coopération fin **2020**. L'UE reste le premier partenaire commercial du Royaume-Uni.
- Nouvelles alliances : **AUKUS** (**2021**, Australie, Royaume-Uni, États-Unis : sous-marins nucléaires face à la Chine), adhésion au partenariat transpacifique (CPTPP).

### La guerre en Ukraine
- Depuis l'invasion russe de **février 2022**, les États-Unis et le Royaume-Uni fournissent une aide militaire importante à l'Ukraine ; sanctions contre la Russie ; crise de l'énergie en Europe.
- Les **Five Eyes** (États-Unis, Royaume-Uni, Canada, Australie, Nouvelle-Zélande) partagent leurs renseignements.

### À retenir pour le bac
- Cold War (1947-1991), Iron Curtain ; rivalité avec la Chine, Belt and Road, trade war (2018), CHIPS Act (2022).
- Supply chains, Covid-19 ; NAFTA (1994) puis USMCA (2020).
- Brexit (2020), AUKUS (2021), Five Eyes, Ukraine (2022).`,
      cartes: [
        { q: "Traduire en anglais : une guerre commerciale", r: "A trade war." },
        { q: "Que signifie « tariffs » ?", r: "Les droits de douane." },
        { q: "Traduire en anglais : une chaîne d'approvisionnement", r: "A supply chain." },
        { q: "Que signifie « deterrence » ?", r: "La dissuasion." },
        { q: "Traduire en anglais : dépendre de", r: "To rely on (to depend on)." },
        { q: "Que signifie « free trade » ?", r: "Le libre-échange." },
        { q: "Quelles sont les dates de la guerre froide ?", r: "De 1947 à 1991, fin de l'URSS." },
        { q: "Qu'est-ce que l'Iron Curtain ?", r: "Le rideau de fer : l'expression de Churchill (1946) pour la coupure de l'Europe en deux." },
        { q: "Qu'est-ce que la Belt and Road Initiative ?", r: "Les nouvelles routes de la soie : le grand programme chinois d'infrastructures lancé en 2013." },
        { q: "Quand commence la guerre commerciale entre les États-Unis et la Chine ?", r: "En 2018, avec les droits de douane de Donald Trump." },
        { q: "Qu'est-ce qu'AUKUS ?", r: "L'alliance de 2021 entre l'Australie, le Royaume-Uni et les États-Unis, notamment pour des sous-marins nucléaires." },
        { q: "Qui sont les Five Eyes ?", r: "Les États-Unis, le Royaume-Uni, le Canada, l'Australie et la Nouvelle-Zélande, qui partagent leurs renseignements." },
        { q: "Qu'est-ce qui a remplacé l'ALENA (NAFTA) ?", r: "L'USMCA, en 2020." },
        { q: "Quand le Royaume-Uni quitte-t-il l'Union européenne ?", r: "Le 31 janvier 2020." },
      ],
      quiz: [
        { q: "Comment dit-on « les droits de douane » en anglais ?", choix: ["Taxis","Tariffs","Tolls","Fares"], bonne: 1, expl: "To impose tariffs = imposer des droits de douane.", niv: 1 },
        { q: "Quel pays est le grand rival des États-Unis aujourd'hui ?", choix: ["Le Canada","Le Royaume-Uni","La Chine","L'Australie"], bonne: 2, expl: "Rivalité économique, technologique et militaire.", niv: 1 },
        { q: "Qui a parlé d'un Iron Curtain en 1946 ?", choix: ["Harry Truman","Winston Churchill","Joseph Staline","John F. Kennedy"], bonne: 1, expl: "Discours de Fulton, aux États-Unis.", niv: 1 },
        { q: "Que signifie « a supply chain » ?", choix: ["Une chaîne de magasins de luxe","Une chaîne de télévision","Une chaîne de montagnes","Une chaîne d'approvisionnement"], bonne: 3, expl: "De la matière première au produit fini.", niv: 1 },
        { q: "En quelle année le Royaume-Uni quitte-t-il l'UE ?", choix: ["2016","2014","2008","2020"], bonne: 3, expl: "Le référendum date de 2016, la sortie de janvier 2020.", niv: 2 },
        { q: "Quels pays forment AUKUS ?", choix: ["L'Australie, le Royaume-Uni et les États-Unis","L'Autriche, l'Ukraine et la Suède","L'Afrique du Sud, l'Ouganda et le Kenya","L'Allemagne, l'Union européenne et la Suisse"], bonne: 0, expl: "Alliance de 2021 tournée vers l'Indo-Pacifique.", niv: 2 },
        { q: "Que révèle la pandémie de Covid-19 ?", choix: ["L'indépendance totale de l'Europe pour la fabrication des médicaments","La dépendance aux chaînes d'approvisionnement lointaines","La fin de la mondialisation dès 2019","L'absence de commerce avec la Chine"], bonne: 1, expl: "Masques et médicaments manquaient en 2020.", niv: 2 },
        { q: "Que veut le CHIPS and Science Act (2022) ?", choix: ["Interdire les ordinateurs dans les écoles","Vendre les usines américaines à la Chine","Supprimer les droits de douane sur les puces venues de Taïwan et de Corée","Produire plus de puces électroniques aux États-Unis"], bonne: 3, expl: "Réduire la dépendance à l'Asie pour les semi-conducteurs.", niv: 2 },
        { q: "Que partagent les Five Eyes ?", choix: ["Une monnaie commune","Des renseignements","Une armée unique","Un passeport commun"], bonne: 1, expl: "Une alliance née pendant la Seconde Guerre mondiale.", niv: 2 },
        { q: "Pourquoi parle-t-on d'interdépendance entre les États-Unis et la Chine ?", choix: ["Ils sont rivaux mais commercent énormément entre eux","Ils ont signé une alliance militaire","Ils partagent la même monnaie","Ils ont fusionné leurs entreprises tech"], bonne: 0, expl: "Une guerre commerciale nuit aux deux économies.", niv: 3 },
        { q: "Pourquoi une guerre commerciale peut-elle nuire aux consommateurs américains ?", choix: ["Les droits de douane font monter les prix des produits importés","Les magasins américains doivent fermer le dimanche pour protéger les salariés","Le dollar n'a plus cours aux États-Unis","Les produits chinois deviennent gratuits"], bonne: 0, expl: "Les entreprises répercutent les tariffs sur les prix.", niv: 3 },
        { q: "Un dessin montre l'Oncle Sam et un dragon se disputant une puce électronique. Quel axe ?", choix: ["Unité et pluralité","Repenser la ville","Égalités et inégalités","Rivalités et interdépendances"], bonne: 3, expl: "La rivalité technologique entre les États-Unis et la Chine.", niv: 3 },
      ],
    },
    {
      chapitre: "amc-9",
      fiche: `## Héritage commun et diversité

Des pays très différents partagent un héritage venu de l'Empire britannique : la langue anglaise, des institutions, des sports, des textes. Mais cet héritage est aussi celui de la **colonisation** et de l'**esclavage**, et chaque pays l'a transformé à sa manière. On ne parle plus d'un seul anglais mais de **World Englishes**.

### Le vocabulaire à connaître
- **heritage** : l'héritage, le patrimoine ; **legacy** : l'héritage (souvent d'une période) ; **to inherit** : hériter ; **shared values**.
- **colonialism** ; **postcolonial** ; **slavery** : l'esclavage ; **the slave trade** : la traite ; **reparations** ; **an apology** : des excuses.
- **a statue** ; **to tear down** : abattre ; **a monument** ; **memory** ; **to commemorate** ; **to decolonise the curriculum**.
- **an accent** ; **a dialect** ; **Standard English** ; **pidgin** ; **creole** ; **Singlish** ; **a native speaker**.
- **the Anglosphere** ; **a sporting event** ; **the Commonwealth Games** ; **cricket** ; **rugby**.

### Un héritage partagé
- La **langue anglaise**, la **common law** (droit fondé sur la jurisprudence), le **régime parlementaire** de type **Westminster** (Canada, Australie, Inde, Nouvelle-Zélande).
- Des sports nés en Angleterre : **football**, **rugby**, **cricket** (très populaire en Inde, au Pakistan, en Australie, aux Antilles). Les **Commonwealth Games** ont lieu tous les quatre ans.
- Des textes : **Shakespeare**, la **King James Bible** (1611).

### World Englishes
- On distingue l'anglais britannique, américain, australien, indien, nigérian, jamaïcain… Le linguiste **Braj Kachru** décrit des cercles : pays où l'anglais est langue maternelle, où il est langue officielle seconde (Inde, Nigeria, Singapour), où il est langue étrangère.
- Exemples : **Singlish** à Singapour, **pidgin** au Nigeria, **patois** jamaïcain. Ces variétés sont longtemps méprisées, aujourd'hui revendiquées par des écrivains (Chimamanda Ngozi Adichie, Salman Rushdie).

### Un héritage contesté
- **Rhodes Must Fall** (Le Cap, **2015**) : des étudiants obtiennent le retrait de la statue du colonisateur **Cecil Rhodes**.
- **Bristol, 2020** : pendant les manifestations Black Lives Matter, la statue du marchand d'esclaves **Edward Colston** est jetée dans le port.
- **Windrush scandal** (**2018**) : des Britanniques d'origine caribéenne, arrivés légalement, sont menacés d'expulsion faute de papiers.
- Débats sur les **réparations** pour l'esclavage et sur le rôle de la monarchie ; la Barbade devient une **république** en **2021** tout en restant dans le Commonwealth.

### La diversité célébrée
- Le **Notting Hill Carnival** (Londres, depuis **1966**) célèbre la culture caribéenne.
- **Black History Month** (octobre au Royaume-Uni, février aux États-Unis).
- Des cuisines, des musiques (reggae, grime, afrobeats) et des fêtes (Diwali à Leicester) font partie du patrimoine commun.

### À retenir pour le bac
- Langue, common law, Westminster, cricket, Shakespeare : un héritage commun.
- World Englishes (Kachru) : Singlish, pidgin, patois.
- Rhodes Must Fall (2015), Colston (2020), Windrush scandal (2018), Barbade république (2021), Notting Hill Carnival (1966).`,
      cartes: [
        { q: "Quelle différence entre heritage et legacy ?", r: "Heritage : le patrimoine transmis. Legacy : l'héritage laissé par une personne ou une période, parfois négatif." },
        { q: "Traduire en anglais : l'esclavage", r: "Slavery." },
        { q: "Que signifie « to tear down a statue » ?", r: "Abattre, déboulonner une statue." },
        { q: "Traduire en anglais : des excuses officielles", r: "An official apology." },
        { q: "Que signifie « reparations » ?", r: "Les réparations : compensations demandées pour l'esclavage ou la colonisation." },
        { q: "Qu'est-ce que la common law ?", r: "Un droit fondé sur les décisions des juges (la jurisprudence), hérité de l'Angleterre." },
        { q: "Que désigne « World Englishes » ?", r: "Les nombreuses variétés d'anglais parlées dans le monde (indien, nigérian, singapourien…)." },
        { q: "Qu'est-ce que le Singlish ?", r: "L'anglais de Singapour, mêlé de mots et de tournures chinoises et malaises." },
        { q: "Qu'est-ce que Rhodes Must Fall ?", r: "Le mouvement étudiant de 2015 au Cap qui a obtenu le retrait de la statue de Cecil Rhodes." },
        { q: "Que s'est-il passé à Bristol en 2020 ?", r: "La statue du marchand d'esclaves Edward Colston a été jetée dans le port." },
        { q: "Qu'est-ce que le Windrush scandal ?", r: "Le scandale de 2018 : des Britanniques d'origine caribéenne menacés d'expulsion faute de papiers." },
        { q: "Quand la Barbade devient-elle une république ?", r: "En 2021, tout en restant dans le Commonwealth." },
        { q: "Que célèbre le Notting Hill Carnival ?", r: "La culture caribéenne de Londres, depuis 1966." },
        { q: "Quand est le Black History Month au Royaume-Uni ?", r: "En octobre (en février aux États-Unis)." },
      ],
      quiz: [
        { q: "Comment dit-on « l'esclavage » en anglais ?", choix: ["Slavishness","Slovenia","Salvage","Slavery"], bonne: 3, expl: "The slave trade = la traite des esclaves.", niv: 1 },
        { q: "Quel sport, né en Angleterre, est roi en Inde ?", choix: ["Le cricket","Le baseball","Le hockey sur glace","Le football américain"], bonne: 0, expl: "L'Inde est une grande nation de cricket.", niv: 1 },
        { q: "Quelle statue a été jetée dans le port de Bristol en 2020 ?", choix: ["Celle de Winston Churchill","Celle de la reine Victoria","Celle d'Edward Colston","Celle de Cecil Rhodes"], bonne: 2, expl: "Marchand d'esclaves du XVIIe siècle.", niv: 1 },
        { q: "Que signifie « to inherit » ?", choix: ["Habiter","Inhiber","Inscrire","Hériter"], bonne: 3, expl: "An inheritance = un héritage.", niv: 1 },
        { q: "Quel mouvement étudiant naît au Cap en 2015 ?", choix: ["Black Lives Matter","Occupy Wall Street","Fridays for Future","Rhodes Must Fall"], bonne: 3, expl: "Il visait la statue de Cecil Rhodes.", niv: 2 },
        { q: "Quel pays devient une république en 2021 ?", choix: ["L'Australie","Le Canada","La Barbade","La Jamaïque"], bonne: 2, expl: "Elle reste membre du Commonwealth.", niv: 2 },
        { q: "Qu'est-ce que la common law ?", choix: ["Une loi votée par le Commonwealth","Le droit des communes rurales anglaises","Un droit fondé sur la jurisprudence des juges","Une constitution écrite commune"], bonne: 2, expl: "Héritée de l'Angleterre, elle est partagée par de nombreux pays.", niv: 2 },
        { q: "Qu'est-ce que le Singlish ?", choix: ["L'anglais de Singapour","Une chanson anglaise","L'anglais chanté à l'église","L'anglais des pilotes d'avion"], bonne: 0, expl: "Une variété d'anglais revendiquée comme identité.", niv: 2 },
        { q: "Que révèle le Windrush scandal de 2018 ?", choix: ["La fermeture des ports britanniques aux navires","La création d'un nouveau carnaval caribéen dans les rues de l'est de Londres","Des citoyens caribéens arrivés légalement traités comme des clandestins","L'arrivée de migrants d'Europe de l'Est"], bonne: 2, expl: "Ils ne pouvaient pas prouver leur droit de rester.", niv: 2 },
        { q: "Pourquoi parle-t-on de World Englishes au pluriel ?", choix: ["Chaque pays a fait de l'anglais une langue à lui","L'anglais britannique a disparu du monde","Les Américains interdisent l'anglais de Londres","Les langues locales ont remplacé l'anglais"], bonne: 0, expl: "Accents, mots et grammaires varient selon les pays.", niv: 3 },
        { q: "Pourquoi l'héritage colonial est-il contesté ?", choix: ["Il a été effacé des livres d'histoire","Il rappelle aussi la domination et l'esclavage","Les anciennes colonies ont oublié l'anglais","Il a laissé peu de traces aujourd'hui"], bonne: 1, expl: "Statues et programmes scolaires sont remis en question.", niv: 3 },
        { q: "Un document montre le Notting Hill Carnival. Quelle idée développer ?", choix: ["La diversité culturelle comme part de l'identité britannique","La disparition des traditions caribéennes","Le rejet de la culture caribéenne par la mairie et la police de Londres","Une fête interdite par la monarchie"], bonne: 0, expl: "Le carnaval, né en 1966, est devenu un symbole de Londres.", niv: 3 },
      ],
    },
    {
      chapitre: "amc-10",
      fiche: `## La synthèse en anglais

La partie 1 de l'écrit (3 h 30 en tout) vaut **16 points sur 20**. On reçoit un dossier de trois documents (A, B, C) sur une thématique, avec **au moins un article de presse**, parfois une image, une infographie ou un extrait de discours. On rédige **en anglais**, en **environ 500 mots**, une réponse organisée à une consigne.

### Comprendre la consigne
- Formules fréquentes : « **Taking into account the specificities of the three documents, discuss…** », « **Explore the relationship between…** », « **paying particular attention to…** ».
- Les mots-clés de la consigne donnent la problématique : les souligner et y revenir à chaque partie.

### Lire le dossier (environ 1 h)
- Pour chaque document : **nature** (article, éditorial, discours, photo, dessin de presse, graphique), **source** (journal, site, pays), **date**, **point de vue** (neutre, engagé, ironique), **public visé**.
- Relever les idées, les chiffres, les citations courtes, et pour une image : composition, couleurs, texte, symboles.
- Faire un **tableau** à double entrée : documents en colonnes, idées de la consigne en lignes. Les croisements donnent le plan.

### Construire le plan
- **Deux ou trois parties** organisées par **idées**, pas par documents.
- Chaque partie confronte au moins deux documents : points communs, nuances, oppositions.
- Plans utiles : **constat / causes / solutions** ; **perceptions opposées** (inside / outside, supporters / critics) ; **mythe / réalité**.

### Rédiger
- **Introduction** : une phrase d'accroche, la présentation des trois documents (nature, source, date), la problématique, l'annonce du plan.
- **Développement** : une idée claire au début de chaque partie, des références précises (« document A, l. 12 »), des citations courtes, une analyse des **procédés** (chiffres, témoignages, ton, image).
- **Conclusion** : réponse à la consigne, éventuellement ouverture sur un fait d'actualité.
- Pas d'opinion personnelle non justifiée ; pas de connaissances hors sujet qui remplacent les documents.

### Les mots de liaison
- Comparer : **similarly**, **likewise**, **both documents**, **in the same way**, **echoes**.
- Opposer : **whereas**, **while**, **however**, **on the contrary**, **conversely**, **unlike document B**.
- Ajouter : **moreover**, **furthermore**, **besides**, **not only… but also**.
- Expliquer et conclure : **therefore**, **thus**, **as a result**, **to sum up**, **all in all**.
- Présenter : **the article published in…**, **the journalist argues that**, **the cartoon depicts**, **the chart shows**, **according to**.

### Les erreurs à éviter
- La **juxtaposition** (document A, puis B, puis C).
- Le **résumé** sans analyse ; oublier l'image ou le graphique.
- Des citations trop longues ; les gallicismes (« actually » ≠ actuellement, « eventually » ≠ éventuellement).
- Compter ses mots : environ 500, ni 250 ni 900.

### À retenir pour le bac
- 16 points, 500 mots, trois documents croisés, plan par idées.
- Nature, source, date et point de vue de chaque document ; connecteurs : whereas, however, both, similarly, therefore.`,
      cartes: [
        { q: "Combien de points vaut la synthèse en AMC ?", r: "16 points sur 20." },
        { q: "Combien de mots environ fait la synthèse ?", r: "Environ 500 mots, en anglais." },
        { q: "Quel type de document est obligatoire dans le dossier d'AMC ?", r: "Au moins un article de presse." },
        { q: "Traduire en anglais : alors que (opposition)", r: "Whereas (while)." },
        { q: "Traduire en anglais : de même", r: "Similarly (likewise)." },
        { q: "Que signifie « conversely » ?", r: "Inversement, à l'inverse." },
        { q: "Traduire en anglais : les deux documents", r: "Both documents." },
        { q: "Que signifie « furthermore » ?", r: "De plus, en outre." },
        { q: "Que signifie « actually » ?", r: "En fait, en réalité (faux ami : actuellement se dit currently)." },
        { q: "Que signifie « eventually » ?", r: "Finalement (faux ami : éventuellement se dit possibly)." },
        { q: "Que faut-il relever pour chaque document ?", r: "Sa nature, sa source, sa date, son point de vue et son public." },
        { q: "Qu'est-ce qu'une synthèse juxtaposée ?", r: "Une synthèse qui traite les documents l'un après l'autre sans les croiser : l'erreur à éviter." },
        { q: "Que doit contenir l'introduction ?", r: "Une accroche, la présentation des trois documents, la problématique et l'annonce du plan." },
        { q: "Traduire en anglais : le dessin de presse représente", r: "The cartoon depicts (shows)." },
      ],
      quiz: [
        { q: "Combien de mots environ demande la synthèse ?", choix: ["150 mots","250 mots","300 mots","500 mots"], bonne: 3, expl: "Les sujets récents demandent environ 500 mots.", niv: 1 },
        { q: "Que signifie « whereas » ?", choix: ["Où que ce soit","Puisque","Bien sûr","Alors que"], bonne: 3, expl: "Connecteur d'opposition.", niv: 1 },
        { q: "Que signifie « actually » ?", choix: ["Actuellement","Activement","En fait","Exactement"], bonne: 2, expl: "Actuellement se dit « currently ».", niv: 1 },
        { q: "Sur combien de points est notée la synthèse ?", choix: ["4 points","8 points","10 points","16 points"], bonne: 3, expl: "La traduction ou transposition vaut 4 points.", niv: 1 },
        { q: "Quel connecteur sert à comparer ?", choix: ["However","Similarly","Whereas","Therefore"], bonne: 1, expl: "Similarly = de même.", niv: 2 },
        { q: "Que signifie « the cartoon depicts » ?", choix: ["Le dessin animé raconte","Le carton contient","Le caricaturiste dépeint son ami","Le dessin de presse représente"], bonne: 3, expl: "A cartoon = un dessin humoristique ou de presse.", niv: 2 },
        { q: "Quelle est la meilleure façon d'organiser la synthèse ?", choix: ["Un paragraphe par document, dans l'ordre","Un résumé du document le plus long","Une liste de citations sans commentaire","Un plan par idées qui croise les documents"], bonne: 3, expl: "Le plan par idées évite la juxtaposition.", niv: 2 },
        { q: "Que faut-il noter pour une photographie du dossier ?", choix: ["Le prix de l'appareil photo utilisé","Sa composition, ses couleurs et son message","Le nom du modèle de l'appareil","Surtout sa date de prise de vue"], bonne: 1, expl: "L'image est un document à analyser comme un texte.", niv: 2 },
        { q: "Que signifie « eventually » ?", choix: ["Finalement","Éventuellement","Également","Événementiel"], bonne: 0, expl: "Éventuellement se dit « possibly ».", niv: 2 },
        { q: "Une consigne demande « paying particular attention to the conflicting perceptions ». Quel plan choisir ?", choix: ["Opposer les points de vue des différents acteurs","Résumer chaque document l'un après l'autre","Raconter l'histoire du pays depuis l'origine","Donner avant tout son opinion personnelle"], bonne: 0, expl: "La consigne invite à confronter des perceptions.", niv: 3 },
        { q: "Pourquoi relever la source et la date d'un article ?", choix: ["Elles permettent de recopier l'article sans faire de fautes d'anglais","Elles éclairent le point de vue et le contexte","Elles remplacent l'analyse du contenu","Elles servent à compter les mots"], bonne: 1, expl: "Un journal britannique et un journal africain ne voient pas la même chose.", niv: 3 },
        { q: "Quel est le défaut de « Document A is about elephants. Document B is about elephants too. » ?", choix: ["Il utilise un mauvais temps grammatical","Il cite trop longuement le document au lieu de le reformuler en anglais","Il oublie le titre de l'article","Il juxtapose sans montrer ce que les documents apportent"], bonne: 3, expl: "Il faut dire ce que chaque document montre et comment.", niv: 3 },
      ],
    },
    {
      chapitre: "amc-11",
      fiche: `## Traduction et transposition

La partie 2 de l'écrit vaut **4 points**. On traduit **en français** un passage d'environ cinq à huit lignes d'un des documents (souvent un article), ou on fait une **transposition** (réécrire un passage en changeant de point de vue, de registre ou de forme). On évalue la **fidélité** au sens et la **qualité du français**.

### La méthode
- Relire tout le document pour comprendre le contexte du passage.
- Repérer les **temps**, les **structures** difficiles, les mots inconnus (dictionnaire unilingue autorisé).
- Traduire phrase par phrase, puis **relire en français seul** : la phrase doit être naturelle, sans calque.
- Ne rien oublier, ne rien ajouter, garder les chiffres et les noms propres.

### Les temps
- **Present perfect** (has provoked) : souvent un passé composé (« a provoqué »).
- **Preterite** (said, allowed) : passé composé dans un article (« a déclaré »), passé simple dans un récit littéraire.
- **Past perfect** (had been) : plus-que-parfait.
- **Be + -ing** : présent ou imparfait, parfois « être en train de ».
- **Will** : futur ; **would** : conditionnel, ou « avait l'habitude de » pour une habitude passée.

### Les structures à savoir rendre
- Le **passif** : « it has been shown » → « il a été démontré » ou « on a montré » ; le français préfère souvent **on** ou la voix active.
- Les **noms composés** : « a conservation strategy » → « une stratégie de protection » ; lire de droite à gauche.
- Le **génitif** : « Botswana's elephants » → « les éléphants du Botswana » ; « the world's largest » → « le plus grand du monde ».
- **While** : « alors que » (opposition) ou « pendant que » (temps).
- Les **modaux** : should = devrait ; may / might = pourrait ; must = doit.
- Les verbes à particule : **to tackle** a problem = s'attaquer à ; **to give up** = abandonner ; **to carry out** = mener.

### Les faux amis fréquents dans la presse
- **actually** = en fait ; **eventually** = finalement ; **currently** = actuellement.
- **to realise** = se rendre compte ; **to pretend** = faire semblant ; **to attend** = assister à.
- **a library** = une bibliothèque ; **a journey** = un voyage ; **sensible** = raisonnable ; **sympathetic** = compatissant.
- **a figure** = un chiffre ; **a scheme** = un plan, un programme ; **control** = maîtrise, parfois contrôle.

### La transposition
- Consignes possibles : réécrire un article sous forme de **discours**, de **lettre**, de **tweet**, ou du point de vue d'un autre acteur ; passer du **discours direct** au **discours indirect**.
- Respecter le contenu et changer ce que la consigne demande (pronoms, temps, registre).

### À retenir pour le bac
- 4 points ; fidélité et bon français.
- Present perfect → passé composé ; passif → « on » ; noms composés à l'envers ; while = alors que.
- Faux amis : actually, eventually, realise, pretend, figure, sensible.`,
      cartes: [
        { q: "Sur combien de points est notée la traduction ?", r: "4 points sur 20." },
        { q: "Comment traduire souvent le present perfect dans un article ?", r: "Par un passé composé (« has provoked » = « a provoqué »)." },
        { q: "Comment rendre « it has been shown that » ?", r: "« On a montré que » ou « il a été démontré que »." },
        { q: "Comment traduire « a conservation strategy » ?", r: "Une stratégie de protection (de conservation) : on lit le nom composé de droite à gauche." },
        { q: "Que signifie « to tackle a problem » ?", r: "S'attaquer à un problème." },
        { q: "Que signifie « to realise » ?", r: "Se rendre compte (faux ami)." },
        { q: "Que signifie « to pretend » ?", r: "Faire semblant (faux ami)." },
        { q: "Que signifie « sensible » ?", r: "Raisonnable (faux ami)." },
        { q: "Que signifie « a figure » dans un article ?", r: "Un chiffre (ou une personnalité)." },
        { q: "Que signifie « to attend » ?", r: "Assister à (faux ami)." },
        { q: "Quels sont les deux sens de « while » ?", r: "Alors que (opposition) ou pendant que (simultanéité)." },
        { q: "Comment traduire « the world's largest elephant population » ?", r: "La plus grande population d'éléphants du monde." },
        { q: "Que signifie « a scheme » ?", r: "Un plan, un programme (souvent public)." },
        { q: "Qu'est-ce qu'une transposition ?", r: "Réécrire un passage en changeant le point de vue, le registre ou la forme selon la consigne." },
      ],
      quiz: [
        { q: "Que signifie « to realise » ?", choix: ["Réaliser un film","Se rendre compte","Réaliser un rêve","Relancer un projet"], bonne: 1, expl: "Faux ami : réaliser un film = to make a film.", niv: 1 },
        { q: "Que signifie « a journey » ?", choix: ["Une journée","Un journal","Un jour férié","Un voyage"], bonne: 3, expl: "Une journée = a day.", niv: 1 },
        { q: "Que signifie « sensible » ?", choix: ["Sensible","Sensuel","Sensationnel","Raisonnable"], bonne: 3, expl: "Sensible (français) se dit « sensitive ».", niv: 1 },
        { q: "Combien de points vaut la traduction ?", choix: ["4 points","8 points","10 points","16 points"], bonne: 0, expl: "Elle complète la synthèse sur 16.", niv: 1 },
        { q: "Comment traduire « Masisi said Botswana allowed trophy hunting » ?", choix: ["Masisi disait que le Botswana permettra la chasse sportive","Masisi dit que le Botswana a été autorisé par la chasse","Masisi avait dit que la chasse autorise le Botswana","Masisi a déclaré que le Botswana autorisait la chasse aux trophées"], bonne: 3, expl: "Preterite d'un article → passé composé ; concordance des temps.", niv: 2 },
        { q: "Comment rendre le passif « it has been shown » ?", choix: ["Il a été montré par lui","Cela a montré","Il montrera","On a montré"], bonne: 3, expl: "Le français préfère souvent « on ».", niv: 2 },
        { q: "Que signifie « to tackle poaching » ?", choix: ["Pratiquer la pêche au filet","Lutter contre le braconnage","Plaquer un joueur de rugby","Cuisiner un œuf poché"], bonne: 1, expl: "To tackle = s'attaquer à ; poaching = braconnage.", niv: 2 },
        { q: "Que signifie « a figure » dans « official figures » ?", choix: ["Un visage","Un chiffre","Une figurine","Une forme géométrique"], bonne: 1, expl: "Official figures = chiffres officiels.", niv: 2 },
        { q: "Que signifie « while » dans « While hunting shocks the public, it helps wildlife » ?", choix: ["Alors que","Pendant que","Tant que","Jusqu'à ce que"], bonne: 0, expl: "Ici, while exprime l'opposition.", niv: 2 },
        { q: "Comment traduire « should provide alternatives » ?", choix: ["Devraient proposer des solutions de remplacement","Doivent fournir des alternatives dès demain","Pourront peut-être fournir un jour","Ont fourni des alternatives"], bonne: 0, expl: "Should = conseil, devrait.", niv: 3 },
        { q: "Une consigne demande de transposer un article en discours du président. Que changer ?", choix: ["Traduire l'article en français","Passer à la première personne et à un registre oral","Résumer l'article en dix mots","Ajouter de nouveaux faits inventés pour rendre le discours plus vivant"], bonne: 1, expl: "On garde le contenu, on change la voix et le registre.", niv: 3 },
        { q: "Pourquoi relire sa traduction sans regarder l'anglais ?", choix: ["Pour ajouter ses propres idées","Pour vérifier qu'elle sonne comme du vrai français","Pour raccourcir le passage de moitié","Pour remplacer les chiffres par des mots"], bonne: 1, expl: "On repère ainsi les calques et les maladresses.", niv: 3 },
      ],
    },
  ],
  methode: [
    {
      "id": "amc-m1",
      "mat": "amc",
      "titre": "La synthèse de dossier",
      "formules": [
        "Taking into account the specificities of the three documents, discuss…",
        "Explore the relationship between… depicted in the three documents, paying particular attention to…",
        "In about 500 words…"
      ],
      "vu": [
        "Format de l'écrit d'AMC depuis la session 2021 (synthèse sur 16, traduction ou transposition sur 4)",
        "Bac 2025 Polynésie (sujet 1 « Relation au monde » : éléphants du Botswana ; sujet 2 « Faire société » : l'héritage des cowboys)"
      ],
      "pts": "16 points sur 20",
      "attendu": "Une synthèse en anglais d'environ 500 mots qui répond à la consigne en croisant les trois documents. Le correcteur attend une introduction qui présente les documents et pose une problématique, deux ou trois parties organisées par idées, des références précises (lignes, chiffres, détails de l'image), l'analyse du point de vue de chaque source et une conclusion qui répond à la question.",
      "etapes": [
        "Souligner les mots-clés de la consigne.",
        "Lire chaque document et noter nature, source, date, point de vue.",
        "Remplir un tableau : idées de la consigne en lignes, documents en colonnes.",
        "Choisir un plan par idées (par exemple perceptions opposées, ou mythe et réalité).",
        "Rédiger l'introduction, les parties avec au moins deux documents chacune, la conclusion.",
        "Compter environ 500 mots et relire la langue."
      ],
      "mots": [
        "both documents",
        "whereas",
        "however",
        "similarly",
        "the article published in",
        "the journalist argues that",
        "the picture depicts",
        "therefore"
      ],
      "pieges": [
        "Traiter les documents l'un après l'autre.",
        "Oublier l'image ou le graphique.",
        "Remplacer l'analyse par son opinion.",
        "Écrire beaucoup moins ou beaucoup plus que 500 mots."
      ],
      "cas": "Dossier « Faire société » : un article du Guardian sur les food banks en Grande-Bretagne, un graphique de l'évolution des colis distribués depuis 2010, un discours d'un ministre qui défend sa politique sociale.",
      "question": "Taking into account the specificities of the three documents, discuss the causes and perceptions of food poverty in the UK. Rédige l'introduction.",
      "modele": "Food banks were once rare in Britain; today they have become part of everyday life in many towns. Document A is an article from The Guardian describing families who rely on food banks, document B is a chart showing the rise in food parcels handed out since 2010, and document C is an extract from a speech in which a government minister defends his social policy. Whereas the article and the chart present food poverty as a growing crisis, the minister offers a very different perception of the situation. We will therefore wonder to what extent food banks reveal the limits of the welfare state. First, we will examine the scale and causes of food poverty, before analysing the conflicting perceptions of the problem.",
      "grille": [
        "Accroche",
        "Les trois documents présentés (nature, source)",
        "Problématique qui reprend la consigne",
        "Annonce d'un plan par idées",
        "Anglais correct et connecteurs"
      ]
    },
    {
      "id": "amc-m2",
      "mat": "amc",
      "titre": "La traduction d'un passage d'article",
      "formules": [
        "Traduisez en français le passage suivant du document A (l. 15-20).",
        "Traduisez en français le passage suivant du document C."
      ],
      "vu": [
        "Format de l'écrit d'AMC depuis la session 2021 (synthèse sur 16, traduction ou transposition sur 4)",
        "Bac 2025 Polynésie (sujet 1 « Relation au monde » : éléphants du Botswana ; sujet 2 « Faire société » : l'héritage des cowboys)"
      ],
      "pts": "4 points sur 20",
      "attendu": "Une traduction fidèle (rien d'oublié, rien d'ajouté) dans un français correct et naturel. Le correcteur regarde les temps (present perfect, preterite), le passif, les noms composés, les connecteurs comme while, les faux amis et la ponctuation.",
      "etapes": [
        "Relire le document entier pour le contexte.",
        "Souligner les verbes et leur temps.",
        "Repérer passifs, noms composés, génitifs et faux amis.",
        "Traduire au brouillon phrase par phrase.",
        "Relire le français seul et corriger les calques.",
        "Vérifier chiffres, noms propres et oublis."
      ],
      "mots": [
        "a provoqué (has provoked)",
        "on a montré (has been shown)",
        "alors que (while)",
        "le plus grand du monde (the world's largest)",
        "s'attaquer à (to tackle)"
      ],
      "pieges": [
        "Traduire mot à mot et garder l'ordre anglais.",
        "Confondre actually et actuellement.",
        "Oublier un adjectif ou un adverbe.",
        "Laisser un passif lourd en français."
      ],
      "cas": "Passage inventé : « While the city has spent millions on new cycle lanes, many residents still feel unsafe on their bikes. Officials said the scheme would eventually reduce traffic, but local shopkeepers have complained that they are losing customers. »",
      "question": "Traduis le passage en français.",
      "modele": "Alors que la ville a dépensé des millions pour de nouvelles pistes cyclables, de nombreux habitants ne se sentent toujours pas en sécurité à vélo. Les responsables ont déclaré que ce programme finirait par réduire la circulation, mais les commerçants du quartier se sont plaints de perdre des clients.",
      "grille": [
        "« While » rendu par alors que",
        "Present perfect rendu par le passé composé",
        "« scheme » rendu par programme ou projet",
        "« eventually » rendu par finir par ou finalement",
        "Français naturel, sans oubli"
      ]
    },
    {
      "id": "amc-m3",
      "mat": "amc",
      "titre": "Analyser une image, un dessin de presse ou un graphique",
      "formules": [
        "Document B is a cartoon / a photograph / a chart…",
        "Taking into account the specificities of the three documents…"
      ],
      "vu": [
        "Format de l'écrit d'AMC depuis la session 2021 (synthèse sur 16, traduction ou transposition sur 4)",
        "Bac 2025 Polynésie (sujet 1 « Relation au monde » : éléphants du Botswana ; sujet 2 « Faire société » : l'héritage des cowboys)"
      ],
      "pts": "une partie importante de la synthèse",
      "attendu": "Le document visuel doit être présenté (nature, source, date), décrit avec précision (composition, couleurs, texte, chiffres clés) puis interprété : quel message, quel point de vue, quel lien avec les textes ? Pour un graphique : tendance générale, chiffres extrêmes, comparaison.",
      "etapes": [
        "Identifier la nature et la source du document.",
        "Décrire : foreground, background, centre, couleurs, légende ; ou axes, unités, tendance.",
        "Repérer le symbole ou le chiffre le plus frappant.",
        "Interpréter le message ou le point de vue.",
        "Relier à une idée des autres documents."
      ],
      "mots": [
        "in the foreground",
        "in the background",
        "the cartoonist mocks",
        "the chart shows a sharp rise",
        "figures",
        "symbolises",
        "ironically"
      ],
      "pieges": [
        "Décrire sans interpréter.",
        "Oublier la légende ou la source.",
        "Recopier tous les chiffres d'un graphique."
      ],
      "cas": "Une couverture d'album de 2024 montre la chanteuse Beyoncé à cheval, en tenue de cowboy, tenant un drapeau américain, sur un fond noir.",
      "question": "Rédige le paragraphe d'analyse de cette image pour une synthèse sur l'héritage des cowboys.",
      "modele": "Document A, the cover of Beyoncé's 2024 album Cowboy Carter, shows the singer riding a white horse and holding the American flag against a black background. By borrowing the most famous symbols of the American West, the cowboy hat, the horse and the flag, she places herself at the heart of a national myth which has long been depicted as white. The image can therefore be read as a reclaiming of cowboy heritage by African Americans, an idea echoed in document B, which recalls that one cowboy out of four was Black.",
      "grille": [
        "Nature, auteur, date",
        "Description précise des symboles",
        "Interprétation du message",
        "Lien avec un autre document",
        "Anglais correct"
      ]
    },
    {
      "id": "amc-m4",
      "mat": "amc",
      "titre": "Rédiger l'introduction et la conclusion",
      "formules": [
        "Discuss…",
        "Explore…",
        "To what extent…?"
      ],
      "vu": [
        "Format de l'écrit d'AMC depuis la session 2021 (synthèse sur 16, traduction ou transposition sur 4)",
        "Bac 2025 Polynésie (sujet 1 « Relation au monde » : éléphants du Botswana ; sujet 2 « Faire société » : l'héritage des cowboys)"
      ],
      "pts": "souvent 3 à 4 points sur les 16 de la synthèse",
      "attendu": "Une introduction courte (environ 80 mots) qui accroche, présente les trois documents, pose une problématique et annonce le plan ; une conclusion (environ 60 mots) qui répond clairement à la consigne et peut s'ouvrir sur l'actualité.",
      "etapes": [
        "Écrire une accroche liée à l'actualité ou à un fait frappant.",
        "Présenter chaque document en une phrase (nature, source, date, sujet).",
        "Formuler la problématique sous forme de question.",
        "Annoncer le plan en deux ou trois étapes.",
        "En conclusion : répondre, résumer le cheminement, ouvrir."
      ],
      "mots": [
        "nowadays",
        "the issue of",
        "we will wonder whether",
        "first… then… finally",
        "to sum up",
        "all in all",
        "it remains to be seen whether"
      ],
      "pieges": [
        "Une introduction trop longue qui commence l'analyse.",
        "Oublier la problématique.",
        "Une conclusion qui répète l'introduction mot pour mot."
      ],
      "cas": "Dossier « Environnements en mutation » : un article sur la ULEZ de Londres, un témoignage d'artisan opposé, une photo d'une rue piétonne.",
      "question": "Rédige la conclusion de la synthèse sur la transformation des villes.",
      "modele": "To sum up, the three documents show that rethinking the city is both necessary and controversial. While cleaner air and safer streets benefit residents, measures such as the ULEZ also weigh on workers who depend on their vans. All in all, the success of the urban transition depends on making it fair. It remains to be seen whether other cities will follow London's example.",
      "grille": [
        "Réponse claire à la consigne",
        "Reprise des idées des parties",
        "Ouverture pertinente",
        "Connecteurs de conclusion",
        "Anglais correct"
      ]
    }
  ],
  sujets: [
    {
      id: "amc-s1", matiere: 'amc', titre: "Sujet d'entraînement 1 : Environnements en mutation", duree: 210,
      enonce: `## Sujet d'entraînement 1 (inventé, au format de l'écrit)

Ce sujet est inventé pour s'entraîner : les trois documents ont été écrits ou décrits pour cet exercice, les personnes et les chiffres sont imaginaires. Durée : 3 h 30. Dictionnaire anglais unilingue autorisé. Synthèse : 16 points ; traduction : 4 points.

Ce sujet porte sur la thématique « Environnements en mutation ».

### Document A : article (inventé), « Northport's car-free experiment divides residents », The Daily Courier, 12 March 2026

When Northport City Council closed three central streets to cars last spring, it promised cleaner air, quieter evenings and busier shops. A year later, the first two promises seem to have been kept: air pollution near the station has fallen by almost a third, according to the council's own figures.

The third is more disputed. "My regular customers used to park outside," said Linda Marsh, who has run a hardware shop on Bridge Street for twenty years. "Now they drive to the retail park on the ring road. The council talks about the future, but I have to pay my rent today."

Others are enthusiastic. Café owner Sam Okafor has put tables on what used to be a parking lane. "On sunny days the street is full of families. People stay longer, and they come back." While the council insists that the scheme will eventually benefit every business, it has agreed to review delivery hours after complaints from traders.

### Document B : infographie (décrite)

Une infographie publiée par le conseil municipal de Northport en 2026. À gauche, un graphique en barres montre la pollution au dioxyde d'azote près de la gare : 42 en 2024, 29 en 2026 (microgrammes par mètre cube). Au centre, un camembert indique comment les habitants se rendent dans le centre : à pied 38 %, à vélo 17 %, en bus 25 %, en voiture 20 % (contre 41 % en 2024). À droite, une icône de boutique avec la mention « 7 shops closed, 11 new businesses opened ». En haut, le slogan en lettres vertes : « Northport: a city for people, not for cars ».

### Document C : dessin de presse (décrit)

Un dessin de presse de 2026. Au premier plan, un homme âgé en costume, chargé de sacs de courses, regarde avec désespoir un panneau « No cars beyond this point ». Derrière le panneau, une rue verte et ensoleillée où des jeunes gens en tenue de sport boivent des cafés et font du vélo. Au loin, une pancarte d'agence immobilière indique « Luxury flats: from £600,000 ». La bulle de l'homme dit : « A city for people… which people? »

### Partie 1 (16 points) : synthèse en anglais, environ 500 mots

Taking into account the specificities of the three documents, discuss the ways in which the transformation of Northport's city centre is perceived.

### Partie 2 (4 points) : traduction

Traduisez en français le passage suivant du document A, de « My regular customers » à « I have to pay my rent today. »`,
      corrige: `## Corrigé du sujet d'entraînement 1

### Partie 1 : pistes de synthèse

Introduction. Across the English-speaking world, cities are trying to reduce the place of cars. Document A is an article from The Daily Courier (March 2026) reporting on the car-free streets introduced in Northport; document B is an infographic published by the city council itself; document C is a cartoon from the same year. While the council presents the project as a clear success, the other documents reveal more mixed perceptions. We will wonder whether Northport's transformation benefits all its residents. We will first see the positive results put forward, then the doubts and criticisms the project raises.

I. A greener, more pleasant city centre. The three documents agree that the environment has improved. The article reports that pollution near the station « has fallen by almost a third », which the infographic confirms with precise figures (42 to 29 micrograms). The council's slogan « a city for people, not for cars » and its green lettering present the change as a victory. Café owner Sam Okafor, quoted in document A, describes streets « full of families ». Even the cartoon, in its background, shows a sunny, green street full of cyclists.

II. Winners and losers. However, the documents also question who really benefits. Linda Marsh's testimony shows that some small businesses are losing customers, and the infographic, although it stresses the opening of 11 new businesses, admits that 7 shops have closed. The cartoon is the most critical document: the old man weighed down by his shopping cannot enter, while young, sporty people enjoy the street; the sign advertising « luxury flats » suggests that the project could lead to gentrification. His question, « which people? », directly echoes and mocks the council's slogan.

III. A source of debate. The point of view of each document matters: the infographic is a piece of communication by the council, which selects favourable figures; the article balances two testimonies; the cartoon uses irony to denounce a two-speed city. The council's decision to « review delivery hours » shows that the debate is still open.

Conclusion. To sum up, the transformation of Northport is seen as an environmental success, but also as a source of inequalities between residents and traders. As in London with the ULEZ, the success of the urban transition depends on making it fair.

### Partie 2 : proposition de traduction

« Mes clients habituels se garaient devant la boutique, a déclaré Linda Marsh, qui tient une quincaillerie de Bridge Street depuis vingt ans. Maintenant, ils vont en voiture jusqu'à la zone commerciale de la rocade. La mairie parle de l'avenir, mais moi, c'est aujourd'hui que je dois payer mon loyer. »

Les points à réussir : « used to park » (habitude passée : se garaient, avaient l'habitude de se garer) ; « has run… for twenty years » (present perfect + for = présent + depuis) ; « a hardware shop » (une quincaillerie) ; « the retail park » (la zone commerciale) ; « the ring road » (la rocade, le périphérique) ; « the council » (la mairie, le conseil municipal) ; l'insistance finale « today », rendue par une mise en relief.`,
      grille: [{"c":"Synthèse : introduction (documents présentés, problématique, plan)","pts":3},{"c":"Synthèse : plan par idées, documents croisés","pts":4},{"c":"Synthèse : références précises, chiffres, analyse du point de vue des sources et du dessin","pts":3},{"c":"Synthèse : qualité de l'anglais (correction, richesse, connecteurs)","pts":6},{"c":"Traduction : sens exact, « used to » et « has run… for » bien rendus, français naturel","pts":4}],
    },
  ],
};
