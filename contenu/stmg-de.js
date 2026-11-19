// Droit et économie — terminale STMG. Sources : voir matiere.sources.
// Programme : arrêté du 19 juillet 2019 (BO spécial n° 8 du 25 juillet 2019, annexe 1), en vigueur pour le bac 2027.
// Épreuve : note de service du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026), à partir de la session 2027.
// L'épreuve porte sur le programme de terminale (économie : thèmes 6 à 9 ; droit : thèmes 5 à 8) ; les notions de première peuvent être mobilisées.
// Les gros thèmes (économie 6, droit 7) sont coupés en deux chapitres.
export default {
  matiere: {
    id: 'stmg-de',
    nom: 'Droit et économie',
    voie: 'stmg',
    epreuve: { type: 'ecrit', duree: 240, coef: 16, quand: 'juin', note: 'Deux parties indépendantes de 10 points : une partie juridique et une partie économique, chacune avec un dossier de documents et des questions.' },
    sources: [
      'https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/13/9/spe262_annexe1_1159139.pdf',
      'https://www.education.gouv.fr/bo/19/Special8/MENE1921262A.htm',
      'https://www.education.gouv.fr/bo/2026/Special4/MENE2622652N',
      'https://www.legifrance.gouv.fr (Code civil, Code du travail, Code de la consommation, Code de commerce)',
      'https://www.insee.fr (chômage, emploi, finances publiques, pauvreté)',
      'Sujets officiels de droit et économie STMG : Polynésie 2025, Polynésie 2026, Asie 2026',
    ],
    chapitres: [
      { id: 'stmg-de-1', t: 'Comment l\'État peut-il intervenir dans l\'économie ? (1) Rôle de l\'État et défaillances du marché', theme: 'Économie' },
      { id: 'stmg-de-2', t: 'Comment l\'État peut-il intervenir dans l\'économie ? (2) Politiques économiques et sociales', theme: 'Économie' },
      { id: 'stmg-de-3', t: 'Quelle est l\'influence de l\'État sur l\'évolution de l\'emploi et du chômage ?', theme: 'Économie' },
      { id: 'stmg-de-4', t: 'Comment organiser le commerce international dans un contexte d\'ouverture des échanges ?', theme: 'Économie' },
      { id: 'stmg-de-5', t: 'Comment concilier la croissance économique et le développement durable ?', theme: 'Économie' },
      { id: 'stmg-de-6', t: 'Quel est le rôle du contrat ?', theme: 'Droit' },
      { id: 'stmg-de-7', t: 'Qu\'est-ce qu\'être responsable ?', theme: 'Droit' },
      { id: 'stmg-de-8', t: 'Comment le droit encadre-t-il le travail salarié ? (1) Le contrat de travail', theme: 'Droit' },
      { id: 'stmg-de-9', t: 'Comment le droit encadre-t-il le travail salarié ? (2) Rupture du contrat et libertés des salariés', theme: 'Droit' },
      { id: 'stmg-de-10', t: 'Dans quel cadre et comment entreprendre ?', theme: 'Droit' },
    ],
  },
  paquets: [
    {
      chapitre: 'stmg-de-1',
      fiche: `## Le rôle de l'État et les défaillances du marché

### De l'État-gendarme à l'État-providence
- L'**État-gendarme** se limite aux **fonctions régaliennes** : police, justice, armée, diplomatie, levée de l'impôt. C'est la vision **libérale** (Adam Smith : le marché s'autorégule).
- L'**État-providence** intervient aussi dans l'économie et protège contre les risques sociaux. Il se développe après la crise de 1929 et surtout après 1945 (Keynes, plan Beveridge de 1942, Sécurité sociale en France en 1945). C'est la vision **interventionniste**.
- Les trois fonctions de l'État (Richard Musgrave) :
  - **allocation des ressources** : produire ce que le marché ne fournit pas assez (écoles, routes, recherche) ;
  - **redistribution** : réduire les inégalités par les impôts et les prestations ;
  - **régulation ou stabilisation** : soutenir la croissance et l'emploi, limiter l'inflation.
- L'État est aussi **producteur** et **actionnaire** : entreprises **publiques** (SNCF, RATP, EDF, détenues entièrement par l'État), **semi-publiques** (l'État possède une partie du capital, comme chez Renault ou Air France-KLM) ou **privées**. Il a ouvert à la concurrence d'anciens monopoles (télécommunications à la fin des années 1990, électricité, trains régionaux) et en a privatisé certains (France Télécom, devenue Orange).

### Mesurer la place de l'État
- Le **taux de prélèvements obligatoires** = impôts et cotisations sociales / PIB : environ **43 %** en France, l'un des plus élevés du monde.
- Les **dépenses publiques** représentent environ **57 % du PIB** (État, collectivités, Sécurité sociale).
- **Déficit public** : sur une année, les dépenses publiques dépassent les recettes. En **2024**, il atteint **5,8 % du PIB**. C'est un **flux**.
- **Dette publique** : le total de ce que les administrations publiques ont emprunté et pas encore remboursé : environ **3 300 milliards d'euros** fin 2024, soit environ **113 % du PIB**. C'est un **stock**.
- Lien : chaque déficit est financé par l'**emprunt**, qui gonfle la dette ; la dette crée des **intérêts** à payer, qui creusent le déficit.

### Les quatre défaillances du marché
Une **défaillance du marché** est une situation où le marché seul n'aboutit pas à une **allocation efficace des ressources**.
- **Asymétrie d'information** : un des deux côtés en sait plus que l'autre (le vendeur d'une voiture d'occasion connaît ses défauts). Réponse : obliger à informer, labels, contrôle (Autorité des marchés financiers).
- **Concurrence imparfaite** : monopole, oligopole, **ententes** sur les prix. Les prix sont trop hauts. Réponse : **politique de la concurrence** (Autorité de la concurrence, Commission européenne).
- **Externalités** : effet d'une activité sur d'autres, sans compensation. **Négative** : la pollution d'une usine. **Positive** : la recherche, la vaccination. Réponse : taxer ou réglementer les négatives, subventionner les positives.
- **Biens publics et biens communs** :
  - un **bien public** est **non rival** (ma consommation ne réduit pas la tienne) et **non excluable** (on ne peut empêcher personne d'en profiter) : éclairage public, défense. Chacun attend que les autres paient : c'est le **passager clandestin**. L'État le produit et le finance par l'impôt ;
  - un **bien commun** est **rival** mais **non excluable** : les poissons de la mer, une nappe d'eau. Risque de **surexploitation** (la « tragédie des communs »). Réponse : quotas, règles de gestion.

### Les défaillances de l'État
- L'État peut aussi mal faire : coût élevé, lenteur, mauvaise information, décisions guidées par les élections, dette trop lourde, mesures qui ont des effets imprévus.
- C'est l'argument des **libéraux** pour limiter son intervention.

### À retenir pour le bac
- Ne jamais confondre **déficit** (une année, un flux) et **dette** (le total, un stock) : c'est une question qui tombe.
- Savoir citer les **quatre défaillances du marché** et une réponse de l'État pour chacune.
- Bien public : non rival et non excluable ; bien commun : rival et non excluable.
- Toujours appuyer sa réponse sur un chiffre du document, avec l'année.`,
      cartes: [
        { q: "Qu'est-ce que l'État-gendarme ?", r: "Un État limité à ses fonctions régaliennes : police, justice, armée, diplomatie et levée de l'impôt." },
        { q: "Qu'est-ce que l'État-providence ?", r: "Un État qui intervient dans l'économie et protège les individus contre les risques sociaux (maladie, chômage, vieillesse…)." },
        { q: "Quelles sont les trois fonctions de l'État selon Musgrave ?", r: "Allocation des ressources, redistribution des revenus, régulation (ou stabilisation) de l'économie." },
        { q: "Qu'est-ce que le taux de prélèvements obligatoires ?", r: "Le rapport entre les impôts et cotisations sociales et le PIB. Il est d'environ 43 % en France." },
        { q: "Qu'est-ce que le déficit public ?", r: "La situation où, sur une année, les dépenses des administrations publiques dépassent leurs recettes. C'est un flux." },
        { q: "Qu'est-ce que la dette publique ?", r: "Le total des emprunts des administrations publiques pas encore remboursés. C'est un stock, nourri par les déficits." },
        { q: "Quel est le lien entre déficit et dette publique ?", r: "Le déficit est financé par l'emprunt, qui augmente la dette. Les intérêts de la dette sont une dépense qui creuse le déficit." },
        { q: "Qu'est-ce qu'une défaillance du marché ?", r: "Une situation où le marché seul ne permet pas une allocation efficace des ressources." },
        { q: "Quelles sont les quatre défaillances du marché ?", r: "Les asymétries d'information, la concurrence imparfaite, les externalités, les biens publics et biens communs." },
        { q: "Qu'est-ce qu'une asymétrie d'information ?", r: "Une situation où l'un des échangistes dispose de plus d'informations que l'autre (le vendeur d'une voiture d'occasion)." },
        { q: "Qu'est-ce qu'une externalité négative ?", r: "Un effet nuisible d'une activité sur d'autres agents, sans compensation financière : la pollution d'une usine." },
        { q: "Qu'est-ce qu'un bien public ?", r: "Un bien non rival et non excluable : tout le monde peut en profiter en même temps sans pouvoir être exclu (éclairage public)." },
        { q: "Qu'est-ce qu'un bien commun ?", r: "Un bien rival mais non excluable, menacé de surexploitation : les poissons de la mer." },
        { q: "Qu'est-ce que le comportement de passager clandestin ?", r: "Profiter d'un bien sans payer, en comptant sur les autres. C'est pourquoi l'État finance les biens publics par l'impôt." },
        { q: "Qu'est-ce qu'une défaillance de l'État ?", r: "Une situation où l'intervention publique est inefficace ou coûteuse : lenteurs, mauvaises décisions, effets pervers, dette." },
      ],
      quiz: [
        { q: "Quelle fonction de l'État consiste à fournir des écoles et des routes ?", choix: ["La redistribution", "La stabilisation", "L'allocation des ressources", "Une fonction régalienne (la justice)"], bonne: 2, expl: "Fournir des biens que le marché ne produit pas assez relève de l'allocation. La redistribution vise à réduire les inégalités.", niv: 1 },
        { q: "Quelles fonctions exerce l'État-gendarme ?", choix: ["Les fonctions régaliennes", "Une protection contre les risques sociaux", "La relance de la demande", "La production de l'électricité"], bonne: 0, expl: "L'État-gendarme se limite à la police, la justice, l'armée, la diplomatie et l'impôt. La protection sociale relève de l'État-providence.", niv: 1 },
        { q: "Un bien non rival et non excluable est :", choix: ["un bien commun", "un bien privé", "un bien de club", "un bien public"], bonne: 3, expl: "Le bien public est non rival et non excluable. Le bien commun est rival : sa consommation par l'un réduit celle des autres.", niv: 1 },
        { q: "La dette publique est :", choix: ["le solde négatif du budget d'une seule année", "le stock des emprunts publics non remboursés", "le montant annuel des impôts", "la part des dépenses dans le PIB"], bonne: 1, expl: "La dette est un stock. Le solde négatif d'une année, c'est le déficit, qui est un flux.", niv: 1 },
        { q: "Un vendeur de voitures d'occasion cache les défauts des véhicules. Quelle défaillance du marché est-ce ?", choix: ["Une externalité négative", "Une asymétrie d'information", "Un bien commun", "Une situation de concurrence imparfaite"], bonne: 1, expl: "Le vendeur en sait plus que l'acheteur : c'est une asymétrie d'information. Elle peut décourager les échanges.", niv: 2 },
        { q: "Une usine rejette des fumées qui salissent le linge des voisins, sans les indemniser. L'État peut :", choix: ["subventionner l'usine pour produire plus", "créer un label de qualité", "nationaliser les voisins", "taxer l'usine selon sa pollution"], bonne: 3, expl: "Une taxe fait payer au pollueur le coût de l'externalité négative (principe pollueur-payeur). Subventionner l'aggraverait.", niv: 2 },
        { q: "Trois entreprises s'entendent pour fixer le même prix élevé. Qui peut les sanctionner en France ?", choix: ["L'Autorité de la concurrence", "La Banque centrale européenne", "L'Autorité des marchés financiers", "Le Conseil constitutionnel"], bonne: 0, expl: "L'Autorité de la concurrence sanctionne les ententes. L'AMF surveille surtout l'information sur les marchés financiers.", niv: 2 },
        { q: "En 2024, le déficit public est de 5,8 % du PIB et la dette de 113 % du PIB. Que peut-on dire ?", choix: ["La dette va baisser en 2025", "La dette est financée par les impôts", "Le déficit vient s'ajouter à la dette", "Le déficit est plus élevé que la dette"], bonne: 2, expl: "Un déficit doit être financé par l'emprunt : il augmente donc la dette. Les deux chiffres ne se comparent pas directement (flux et stock).", niv: 2 },
        { q: "Des pêcheurs vident une zone de ses poissons car personne ne peut les en empêcher. Il s'agit :", choix: ["d'une entente entre pêcheurs", "d'un bien public mal financé par les impôts", "d'une asymétrie d'information", "d'une surexploitation d'un bien commun"], bonne: 3, expl: "Les poissons sont rivaux et non excluables : c'est un bien commun. La réponse classique est de fixer des quotas.", niv: 2 },
        { q: "Pourquoi le marché produit-il trop peu de biens publics ?", choix: ["Tous peuvent en profiter sans payer", "Leur production coûte très cher", "Ils sont interdits aux entreprises privées", "Leur consommation les détruit vite"], bonne: 0, expl: "Comme on ne peut exclure personne, chacun attend que les autres paient (passager clandestin) : aucune entreprise n'est rentable.", niv: 3 },
        { q: "Quel argument utilisent les libéraux contre une forte intervention de l'État ?", choix: ["Le marché crée des externalités", "L'action publique a aussi ses défaillances", "Les entreprises publiques sont rentables par nature", "Les biens publics sont gratuits"], bonne: 1, expl: "Les défaillances de l'État (coûts, lenteurs, effets pervers) justifient pour eux de limiter son rôle. Les externalités servent l'argument inverse.", niv: 3 },
        { q: "Quelle affirmation sur l'État et les entreprises est juste ?", choix: ["L'État a privatisé ses entreprises", "Une entreprise publique ne peut pas être privatisée", "L'État peut être actionnaire d'une entreprise privée", "L'ouverture à la concurrence supprime l'État"], bonne: 2, expl: "L'État détient des parts de sociétés comme Renault : elles sont semi-publiques. Des entreprises publiques ont été privatisées (France Télécom).", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-de-2',
      fiche: `## Les politiques économiques et sociales de l'État et de l'Europe

### Les fluctuations de l'économie
- L'activité ne progresse pas de façon régulière : elle connaît des **cycles**.
  - **Expansion** : la croissance du PIB est forte, le chômage baisse ;
  - **récession** : le PIB baisse (on parle souvent de récession après deux trimestres de baisse de suite) ;
  - **dépression** : une baisse forte et durable ;
  - **crise** : le moment où l'on bascule de l'expansion à la récession.
- Une **politique contracyclique** va dans le sens inverse du cycle : soutenir l'économie quand elle ralentit, la freiner quand elle surchauffe.

### Politique budgétaire et politique monétaire
- La **politique budgétaire** utilise le budget de l'État : dépenses publiques et impôts.
  - **Relance** : hausse des dépenses ou baisse des impôts pour soutenir la **demande** (plan France Relance de 2020). Grâce à l'**effet multiplicateur** (Keynes), une dépense crée des revenus qui sont dépensés à leur tour. Risque : hausse du **déficit** et de la **dette**.
  - **Rigueur** : baisse des dépenses ou hausse des impôts pour réduire le déficit. Risque : ralentir la croissance.
- La **politique monétaire** agit sur la quantité de monnaie et le coût du crédit, surtout par les **taux directeurs**. Une baisse des taux rend le crédit moins cher : on emprunte, on consomme et on investit plus.
- Dans la **zone euro**, la politique monétaire n'appartient plus aux États : c'est la **Banque centrale européenne (BCE)**, indépendante, dont l'objectif premier est la **stabilité des prix** (une inflation proche de **2 %** à moyen terme). Exemple : la BCE a fortement relevé ses taux en 2022-2023 pour freiner l'inflation.

### Politiques de demande et politiques d'offre
- Les **politiques de demande** soutiennent la consommation et l'investissement (relance budgétaire, baisse des taux). Elles agissent surtout à **court terme** (politiques **conjoncturelles**).
- Les **politiques d'offre** améliorent la capacité des entreprises à produire : baisse du **coût du travail**, aide à l'**innovation** (crédit d'impôt recherche), formation, **politique de la concurrence**, ouverture d'anciens monopoles. Elles agissent à **long terme** (politiques **structurelles**).
- Les deux peuvent être menées en même temps.

### Le cadre européen
- Les pays de la zone euro partagent une monnaie et une politique monétaire.
- Ils doivent respecter des règles budgétaires communes (**pacte de stabilité et de croissance**) : un **déficit public** inférieur à **3 % du PIB** et une **dette** inférieure à **60 % du PIB** (critères de Maastricht). Ces règles ont été assouplies pendant la crise sanitaire puis réformées en 2024.
- L'Union européenne finance aussi des politiques communes (agriculture, aménagement du territoire, plan de relance européen de 2020).

### Les politiques sociales
- Les **risques sociaux** : maladie, invalidité, accident du travail, vieillesse, charges de famille, chômage, pauvreté et exclusion.
- La **protection sociale** suit trois logiques :
  - **assurance** : on cotise et on reçoit des prestations si le risque arrive (retraite, indemnités chômage) ; financée par les **cotisations sociales** ;
  - **assistance** : une aide aux plus démunis, sous **condition de ressources**, sans cotisation (RSA, minimum vieillesse) ; financée par l'**impôt** ;
  - **universalité** : une prestation pour tous, quel que soit le revenu (remboursement des soins).
- Prestations **pécuniaires** (en argent : pensions, allocations) et **non pécuniaires** (services : hôpital, crèches).
- **Redistribution horizontale** : des personnes non touchées par un risque vers celles qui le sont (des bien-portants vers les malades, des actifs vers les retraités).
- **Redistribution verticale** : des ménages aisés vers les ménages modestes, pour réduire les **inégalités**.
- **Progressivité** : un prélèvement est **progressif** si son taux augmente avec le revenu (impôt sur le revenu) ; **proportionnel** si le taux est le même pour tous (CSG) ; **dégressif** si son poids baisse quand le revenu monte (la TVA pèse plus sur les ménages modestes, qui consomment presque tout leur revenu).
- Débat actuel : le coût de la protection sociale (environ un tiers du PIB) et son efficacité.

### À retenir pour le bac
- Distinguer politique **budgétaire** (l'État) et **monétaire** (la BCE dans la zone euro).
- Distinguer politique de **demande** (court terme) et d'**offre** (long terme).
- Redistribution **horizontale** (face aux risques) ou **verticale** (contre les inégalités).
- Piège : la TVA n'est pas progressive ; elle pèse proportionnellement plus sur les ménages modestes.`,
      cartes: [
        { q: "Qu'est-ce qu'une récession ?", r: "Une baisse du PIB. On parle souvent de récession après deux trimestres de baisse consécutifs." },
        { q: "Qu'est-ce qu'une politique contracyclique ?", r: "Une politique qui va contre le cycle : soutenir l'activité quand elle ralentit, la freiner quand elle s'emballe." },
        { q: "Qu'est-ce qu'une politique budgétaire de relance ?", r: "Augmenter les dépenses publiques ou baisser les impôts pour soutenir la demande et l'emploi." },
        { q: "Qu'est-ce que l'effet multiplicateur ?", r: "Une dépense publique crée des revenus qui sont dépensés à leur tour : la production augmente plus que la dépense de départ." },
        { q: "Qui décide de la politique monétaire en France ?", r: "La Banque centrale européenne (BCE), indépendante, pour toute la zone euro." },
        { q: "Quel est l'objectif premier de la BCE ?", r: "La stabilité des prix : une inflation proche de 2 % à moyen terme." },
        { q: "Comment une baisse des taux directeurs soutient-elle l'activité ?", r: "Le crédit devient moins cher : ménages et entreprises empruntent davantage pour consommer et investir." },
        { q: "Qu'est-ce qu'une politique d'offre ?", r: "Une politique qui améliore la capacité de production des entreprises : baisse du coût du travail, innovation, formation, concurrence." },
        { q: "Quels sont les critères européens de déficit et de dette ?", r: "Un déficit public inférieur à 3 % du PIB et une dette publique inférieure à 60 % du PIB." },
        { q: "Qu'est-ce que la logique d'assurance ?", r: "On cotise et on reçoit des prestations si le risque survient (retraite, chômage). Financée par les cotisations sociales." },
        { q: "Qu'est-ce que la logique d'assistance ?", r: "Une aide aux plus démunis, sous condition de ressources et sans cotisation préalable (RSA). Financée par l'impôt." },
        { q: "Qu'est-ce que la redistribution horizontale ?", r: "Un transfert des personnes non touchées par un risque vers celles qui le sont : des bien-portants vers les malades." },
        { q: "Qu'est-ce que la redistribution verticale ?", r: "Un transfert des ménages aisés vers les ménages modestes, pour réduire les inégalités de revenus." },
        { q: "Qu'est-ce qu'un prélèvement progressif ?", r: "Un prélèvement dont le taux augmente avec le revenu, comme l'impôt sur le revenu." },
        { q: "Pourquoi dit-on que la TVA est dégressive ?", r: "Les ménages modestes consomment presque tout leur revenu : la TVA en prend une plus grande part que chez les ménages aisés." },
      ],
      quiz: [
        { q: "Qui fixe les taux directeurs pour la France ?", choix: ["La Banque centrale européenne", "La Banque de France seule", "Le ministère de l'Économie et des Finances", "Le Parlement européen"], bonne: 0, expl: "Dans la zone euro, la politique monétaire est confiée à la BCE. La Banque de France applique ses décisions.", niv: 1 },
        { q: "Quel est le plafond de déficit public fixé par les règles européennes ?", choix: ["4 % du PIB", "5 % du PIB", "60 % du PIB", "3 % du PIB"], bonne: 3, expl: "Le déficit ne doit pas dépasser 3 % du PIB. 60 % est le plafond de la dette publique.", niv: 1 },
        { q: "Le RSA, versé sous condition de ressources sans cotisation préalable, relève de la logique :", choix: ["d'assurance", "d'universalité", "d'assistance", "de capitalisation"], bonne: 2, expl: "L'assistance aide les plus démunis sans cotisation. L'assurance suppose d'avoir cotisé avant.", niv: 1 },
        { q: "Un impôt dont le taux augmente avec le revenu est :", choix: ["proportionnel", "dégressif", "progressif", "forfaitaire"], bonne: 2, expl: "C'est la définition de la progressivité, comme pour l'impôt sur le revenu. La CSG, au taux unique, est proportionnelle.", niv: 1 },
        { q: "En pleine récession, l'État lance un grand plan d'investissements publics. C'est :", choix: ["une politique de rigueur", "une politique de relance budgétaire", "une politique monétaire", "une politique d'offre de long terme"], bonne: 1, expl: "Augmenter les dépenses publiques pour soutenir la demande est une relance budgétaire. La politique monétaire relève de la BCE.", niv: 2 },
        { q: "Un ménage malade reçoit des remboursements financés par les cotisations de tous les assurés. C'est :", choix: ["une redistribution horizontale", "une politique d'offre", "une redistribution verticale", "un prélèvement progressif sur les revenus"], bonne: 0, expl: "Le transfert va des bien-portants vers les malades, quel que soit le revenu : c'est la redistribution horizontale.", niv: 2 },
        { q: "La BCE relève fortement ses taux en 2022-2023. Quel était son but ?", choix: ["Relancer la consommation", "Faire baisser le chômage", "Réduire la dette des États", "Freiner l'inflation"], bonne: 3, expl: "Un crédit plus cher freine la demande et donc la hausse des prix. Son objectif premier est la stabilité des prix.", niv: 2 },
        { q: "Le gouvernement baisse les cotisations patronales pour rendre les entreprises plus compétitives. C'est :", choix: ["une politique de demande", "une politique d'offre", "une politique monétaire", "une redistribution verticale"], bonne: 1, expl: "Baisser le coût du travail améliore la capacité de production des entreprises : c'est une politique d'offre.", niv: 2 },
        { q: "Un ménage modeste dépense tout son revenu. Quel prélèvement pèse le plus lourd pour lui, en proportion ?", choix: ["La TVA", "La taxe foncière", "L'impôt sur la fortune immobilière", "L'impôt sur le revenu"], bonne: 0, expl: "La TVA frappe la consommation : un ménage qui consomme tout son revenu en paie une plus grande part qu'un ménage aisé qui épargne.", niv: 2 },
        { q: "Quel est le principal risque d'une relance budgétaire ?", choix: ["Une baisse de la consommation", "La fin de la protection sociale", "Une hausse du déficit et de la dette", "Une forte hausse du chômage à court terme"], bonne: 2, expl: "Dépenser plus ou prélever moins creuse le déficit, financé par l'emprunt. Une relance vise au contraire à soutenir l'emploi.", niv: 3 },
        { q: "Pourquoi un pays de la zone euro ne peut-il **pas** baisser seul ses taux d'intérêt ?", choix: ["Les taux sont fixés par le Parlement", "Les taux sont interdits par les traités", "Il doit d'abord ramener sa dette sous 60 % du PIB", "La politique monétaire est confiée à la BCE"], bonne: 3, expl: "En adoptant l'euro, les États ont transféré la politique monétaire à la BCE. Il ne leur reste que la politique budgétaire.", niv: 3 },
        { q: "Quelle affirmation sur les politiques d'offre est juste ?", choix: ["Elles agissent surtout à court terme", "Elles visent à améliorer la production à long terme", "Elles cherchent à augmenter la demande", "Elles sont menées par la BCE"], bonne: 1, expl: "Les politiques d'offre sont structurelles : elles agissent sur la capacité de production, à long terme. Les politiques de demande agissent à court terme.", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-de-3',
      fiche: `## L'État, l'emploi et le chômage

### Mesurer l'activité et le chômage
- La **population active** = les **actifs occupés** (ceux qui ont un emploi) + les **chômeurs**. Les autres sont **inactifs** : élèves, retraités, personnes au foyer.
- Un **chômeur au sens du BIT** (Bureau international du travail) est une personne de 15 ans ou plus qui :
  - n'a pas travaillé, même une heure, pendant la semaine de référence ;
  - est **disponible** pour travailler dans les deux semaines ;
  - a **cherché activement** un emploi dans les quatre dernières semaines (ou en a trouvé un qui commence dans moins de trois mois).
- Trois taux à savoir calculer :
  - **taux d'activité** = actifs / population en âge de travailler (15-64 ans) × 100 ;
  - **taux d'emploi** = actifs occupés / population en âge de travailler × 100 ;
  - **taux de chômage** = chômeurs / **population active** × 100.
- En France, le taux de chômage est d'environ **7,5 %** et le taux d'emploi des 15-64 ans d'environ **69 %**, un niveau historiquement haut.
- Le **halo du chômage** : des personnes sans emploi qui veulent travailler mais ne remplissent pas tous les critères du BIT (découragées, non disponibles tout de suite).
- Le **sous-emploi** : des personnes qui ont un emploi mais travaillent moins qu'elles le voudraient (**temps partiel subi**, chômage technique).
- Le **plein emploi** : il ne reste qu'un chômage minimal, le temps de passer d'un emploi à un autre.

### Le marché du travail
- **Piège de vocabulaire** :
  - la **demande de travail** vient des **entreprises** : c'est l'**offre d'emploi** ;
  - l'**offre de travail** vient des **ménages** : c'est la **demande d'emploi**.
- La demande de travail des entreprises dépend de quatre facteurs :
  - la **demande anticipée** pour leurs produits ;
  - la **productivité** du travail (plus elle augmente, moins il faut de travail pour la même production) ;
  - la **substituabilité** entre le travail et le capital (remplacer des salariés par des machines) ;
  - le **coût du travail** (salaires et cotisations).
- Le **salaire** se fixe par la rencontre de l'offre et de la demande, mais aussi par les **négociations salariales**, les **conventions collectives** et la loi (**salaire minimum** : le **SMIC**).

### Les formes de chômage
- **Chômage frictionnel** : le temps de passer d'un emploi à un autre. Il existe même au plein emploi.
- **Chômage conjoncturel** : dû à une **demande insuffisante** (ralentissement, crise). Les entreprises vendent moins et embauchent moins.
- **Chômage structurel** : dû au fonctionnement durable du marché du travail : qualifications qui ne correspondent pas aux postes, coût du travail jugé trop élevé pour les moins qualifiés, mauvaise mobilité, rigidités.
- **Chômage volontaire** : la personne refuse un emploi au salaire proposé (analyse **classique**). **Chômage involontaire** : la personne accepterait le salaire mais ne trouve pas d'emploi (analyse **keynésienne**).

### Les politiques de l'emploi
- Contre le chômage **conjoncturel** : **relance de la demande** (hausse des dépenses publiques, baisse des taux d'intérêt). Dans la zone euro, les taux dépendent de la BCE.
- Contre le chômage **structurel** :
  - **politiques actives** : elles améliorent le fonctionnement du marché du travail : **formation**, accompagnement des chômeurs par **France Travail** (ancien Pôle emploi), aides à l'embauche, baisse des cotisations sur les bas salaires, apprentissage ;
  - **politiques passives** : elles limitent les conséquences du chômage : **indemnisation** des chômeurs, préretraites, minima sociaux.
- Débat : trop d'indemnisation peut-elle décourager la reprise d'emploi ? Le SMIC protège-t-il les salariés ou freine-t-il l'embauche des moins qualifiés ?

### À retenir pour le bac
- Savoir **calculer** les trois taux, sans se tromper de dénominateur (le taux de chômage se calcule sur les **actifs**).
- Ne pas inverser offre et demande de travail.
- Relier chaque forme de chômage à la bonne politique : conjoncturel → relance ; structurel → politiques actives.
- Piège : un étudiant qui ne cherche pas d'emploi est **inactif**, pas chômeur.`,
      cartes: [
        { q: "Comment se compose la population active ?", r: "Les actifs occupés (qui ont un emploi) et les chômeurs." },
        { q: "Quelles sont les trois conditions pour être chômeur au sens du BIT ?", r: "Ne pas avoir travaillé, même une heure, dans la semaine ; être disponible sous deux semaines ; avoir cherché activement un emploi." },
        { q: "Comment calcule-t-on le taux de chômage ?", r: "Chômeurs / population active × 100." },
        { q: "Comment calcule-t-on le taux d'emploi ?", r: "Actifs occupés / population en âge de travailler (15-64 ans) × 100." },
        { q: "Comment calcule-t-on le taux d'activité ?", r: "Actifs (occupés et chômeurs) / population en âge de travailler × 100." },
        { q: "Qu'est-ce que le halo du chômage ?", r: "Des personnes sans emploi qui souhaitent travailler mais ne remplissent pas tous les critères du BIT (découragées, non disponibles)." },
        { q: "Qu'est-ce que le sous-emploi ?", r: "La situation de personnes qui travaillent moins qu'elles le voudraient : temps partiel subi, chômage technique." },
        { q: "Qui exprime la demande de travail ?", r: "Les entreprises : la demande de travail correspond aux offres d'emploi." },
        { q: "De quoi dépend la demande de travail des entreprises ?", r: "De la demande anticipée, de la productivité, de la possibilité de remplacer le travail par du capital et du coût du travail." },
        { q: "Qu'est-ce que le chômage conjoncturel ?", r: "Un chômage dû à une demande insuffisante lors d'un ralentissement de l'activité." },
        { q: "Qu'est-ce que le chômage structurel ?", r: "Un chômage durable lié au fonctionnement du marché du travail : qualifications inadaptées, coût du travail, faible mobilité." },
        { q: "Qu'est-ce que le chômage frictionnel ?", r: "Le chômage du temps de passage d'un emploi à un autre. Il existe même en situation de plein emploi." },
        { q: "Qu'est-ce qu'une politique active de l'emploi ?", r: "Une politique qui améliore le fonctionnement du marché du travail : formation, accompagnement, aides à l'embauche." },
        { q: "Qu'est-ce qu'une politique passive de l'emploi ?", r: "Une politique qui limite les conséquences du chômage : indemnisation, préretraites, minima sociaux." },
      ],
      quiz: [
        { q: "Dans un pays, 2,4 millions de chômeurs et 30 millions d'actifs. Quel est le taux de chômage ?", choix: ["8,4 %", "8,7 %", "9,2 %", "8 %"], bonne: 3, expl: "2,4 / 30 × 100 = 8 %. Le taux de chômage se calcule sur la population active.", niv: 2 },
        { q: "Qui exprime l'offre de travail ?", choix: ["Les entreprises", "Les ménages", "France Travail", "L'État employeur"], bonne: 1, expl: "Les ménages offrent leur travail : c'est la demande d'emploi. Les entreprises demandent du travail en proposant des emplois.", niv: 1 },
        { q: "Le taux de chômage se calcule en divisant le nombre de chômeurs par :", choix: ["la population active", "la population totale", "la population de 15 à 64 ans", "le nombre d'actifs occupés"], bonne: 0, expl: "Le dénominateur est la population active (occupés et chômeurs). Le taux d'emploi, lui, se calcule sur les 15-64 ans.", niv: 1 },
        { q: "Une étudiante de 19 ans fait ses études sans chercher d'emploi. Elle est :", choix: ["inactive", "chômeuse au sens du BIT", "dans le halo du chômage", "en sous-emploi"], bonne: 0, expl: "Elle ne cherche pas d'emploi : elle n'est pas dans la population active. Elle est inactive.", niv: 2 },
        { q: "Une salariée à mi-temps aimerait travailler à temps plein mais ne trouve pas. Elle est :", choix: ["chômeuse au sens du BIT", "inactive", "en sous-emploi", "en chômage frictionnel"], bonne: 2, expl: "Elle a un emploi, donc elle n'est pas chômeuse. Son temps partiel est subi : c'est du sous-emploi.", niv: 2 },
        { q: "Quel organisme accompagne les demandeurs d'emploi depuis 2024 ?", choix: ["L'Insee", "Le BIT", "La Dares", "France Travail"], bonne: 3, expl: "France Travail a remplacé Pôle emploi le 1er janvier 2024. L'Insee mesure le chômage, il n'accompagne pas les chômeurs.", niv: 1 },
        { q: "Une crise fait chuter les commandes et les entreprises cessent d'embaucher. Quel chômage augmente ?", choix: ["Le chômage frictionnel", "Le chômage conjoncturel", "Le chômage volontaire", "Le chômage structurel"], bonne: 1, expl: "Le chômage vient d'une baisse de la demande liée à la conjoncture. Le chômage structurel dépend du fonctionnement durable du marché.", niv: 2 },
        { q: "L'État finance des formations au numérique pour des chômeurs peu qualifiés. C'est :", choix: ["une politique passive de l'emploi", "une politique de relance monétaire", "une politique active de l'emploi", "une indemnisation du chômage"], bonne: 2, expl: "Former améliore l'adéquation entre qualifications et postes : c'est une politique active, contre le chômage structurel.", niv: 2 },
        { q: "Une entreprise remplace des caissiers par des caisses automatiques. Quel facteur de la demande de travail joue ?", choix: ["La demande anticipée", "La substitution du capital au travail", "Le salaire minimum", "La négociation salariale entre syndicats et patronat"], bonne: 1, expl: "Les machines remplacent des salariés : c'est la substituabilité entre capital et travail.", niv: 2 },
        { q: "Pourquoi une relance de la demande est-elle peu efficace contre le chômage structurel ?", choix: ["Elle provoque une forte inflation", "Elle fait baisser les salaires", "Elle est interdite dans la zone euro", "Elle ne règle pas l'inadéquation des qualifications"], bonne: 3, expl: "Le chômage structurel vient du fonctionnement du marché du travail (qualifications, mobilité). Plus de demande ne crée pas les compétences manquantes.", niv: 3 },
        { q: "Pourquoi le taux de chômage peut-il baisser sans que l'emploi augmente ?", choix: ["Des chômeurs découragés cessent de chercher", "Le SMIC a été supprimé", "La population active a augmenté", "Les chômeurs sont partis à la retraite"], bonne: 0, expl: "En arrêtant de chercher, ils sortent du chômage BIT et passent dans le halo du chômage ou l'inactivité, sans avoir trouvé d'emploi.", niv: 3 },
        { q: "Selon l'analyse classique, un salaire minimum trop élevé peut :", choix: ["augmenter la productivité de tous", "supprimer le chômage frictionnel", "réduire l'embauche des moins qualifiés", "faire baisser l'offre de travail"], bonne: 2, expl: "Si le coût du travail dépasse ce que rapporte un salarié peu qualifié, l'entreprise embauche moins. D'autres jugent que le SMIC soutient la demande.", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-de-4',
      fiche: `## Organiser le commerce international

### Un commerce mondial transformé
- Les échanges internationaux ont explosé depuis 1950 grâce à la **baisse des coûts de transport** (conteneurs) et de communication, à l'**ouverture des frontières** et aux **économies d'échelle** (produire en grande quantité coûte moins cher par unité).
- On échange des **biens** (voitures, pétrole) et de plus en plus de **services** (tourisme, transport, numérique, finance).
- **Exportations** : ce qu'un pays vend à l'étranger. **Importations** : ce qu'il achète à l'étranger.
- La **balance des biens et services** compare exportations et importations. Son **solde** est excédentaire si les exportations dépassent les importations, déficitaire sinon.
- La France a une balance des **biens déficitaire** depuis le début des années 2000 (environ 80 milliards d'euros en 2024, après un record en 2022 lié au prix de l'énergie), mais une balance des **services excédentaire** (tourisme, transport maritime).

### La chaîne de valeur mondiale
- La production d'un bien est **segmentée** : conception, fabrication des composants, assemblage, vente se font dans des pays différents. Exemple : un smartphone conçu aux États-Unis, avec des composants venus d'Asie, assemblé en Chine.
- Les **produits intermédiaires** (composants, pièces) représentent plus de la moitié des échanges mondiaux. Les **produits finis** sont prêts à être vendus.
- Chaque étape dégage une **valeur ajoutée** différente : la conception, la marque et la vente rapportent beaucoup ; l'assemblage rapporte peu. Certains pays ne sont qu'**assembleurs**.

### IDE et firmes multinationales
- Un **investissement direct à l'étranger (IDE)** est un investissement par lequel une entreprise crée ou rachète une entreprise à l'étranger, ou y prend au moins **10 %** du capital pour peser sur sa gestion.
- Les IDE créent des **firmes multinationales (FMN)** : des entreprises qui ont des filiales dans plusieurs pays. Elles réalisent une grande part du commerce mondial, dont une partie entre leurs propres filiales.
- Motifs : **réduire les coûts** (main-d'œuvre, impôts) et **conquérir de nouveaux marchés** (produire sur place).
- Effets : souvent positifs pour la croissance du pays d'accueil (emplois, **transferts de technologie**), plus discutés pour l'emploi dans le pays d'origine (**délocalisations**), les conditions de travail et l'environnement.
- Le niveau des IDE reçus mesure l'**attractivité** d'un pays.

### Libre-échange ou protectionnisme ?
- Le **libre-échange** supprime les obstacles aux échanges. Selon **David Ricardo** (1817), chaque pays gagne à se **spécialiser** dans ce qu'il produit le mieux, par comparaison (**avantage comparatif**). Avantages : prix plus bas, plus de choix, économies d'échelle, réduction des écarts entre pays.
- Limites : concurrence pour les industries fragiles, hausse des **inégalités** à l'intérieur des pays, dépendance (pénuries de masques en 2020).
- L'**autarcie** est la situation d'un pays qui ne commerce pas avec l'extérieur.
- Le **protectionnisme** protège la production nationale :
  - **droits de douane** : une taxe sur les produits importés ;
  - **restrictions quantitatives** (quotas) : une quantité maximale importée ;
  - **barrières non tarifaires** : normes techniques ou sanitaires, procédures douanières complexes, obligation d'utiliser des éléments locaux.
- Exemples : hausse des droits de douane américains sur l'acier en 2018, puis sur de très nombreux produits en 2025.
- La **régionalisation** : des pays voisins forment des zones d'échanges privilégiés : l'**Union européenne** (marché unique), l'accord entre États-Unis, Mexique et Canada, le **Mercosur** en Amérique du Sud.

### L'OMC
- L'**Organisation mondiale du commerce** remplace le GATT le **1er janvier 1995**. Siège : **Genève**. Elle compte 166 membres.
- Missions : négocier la **baisse des droits de douane** et des barrières non tarifaires au cours de **cycles** (rounds), et régler les **litiges** entre États.
- Ses principes :
  - **clause de la nation la plus favorisée** : un avantage accordé à un pays doit être accordé à tous les membres ;
  - **traitement national** : un produit importé doit être traité comme un produit national une fois entré ;
  - **réciprocité** : les concessions sont mutuelles.
- L'**Organe de règlement des différends (ORD)** juge les litiges commerciaux. Il est affaibli depuis 2019 : les États-Unis bloquent la nomination des juges de son organe d'appel.

### À retenir pour le bac
- Savoir lire un **solde** (exportations moins importations) et dire s'il est excédentaire ou déficitaire.
- Définir IDE, FMN, segmentation, valeur ajoutée.
- Classer les mesures protectionnistes : tarifaires (droits de douane) et non tarifaires (quotas, normes).
- Piège : un solde déficitaire n'est pas forcément un signe de faiblesse ; il peut venir de la hausse du prix de l'énergie importée.`,
      cartes: [
        { q: "Qu'est-ce que le solde de la balance des biens et services ?", r: "Exportations moins importations de biens et services. Il est excédentaire s'il est positif, déficitaire s'il est négatif." },
        { q: "Comment évolue la balance commerciale de la France ?", r: "Les biens sont déficitaires depuis le début des années 2000 ; les services sont excédentaires (tourisme, transport)." },
        { q: "Qu'est-ce que la segmentation de la production ?", r: "La division de la fabrication d'un bien en étapes réalisées dans des pays différents." },
        { q: "Qu'est-ce qu'un produit intermédiaire ?", r: "Un bien utilisé pour fabriquer un autre bien (composant, pièce). Ils font plus de la moitié des échanges mondiaux." },
        { q: "Qu'est-ce qu'un IDE ?", r: "Un investissement pour créer ou racheter une entreprise à l'étranger, ou y prendre au moins 10 % du capital afin de peser sur sa gestion." },
        { q: "Qu'est-ce qu'une firme multinationale ?", r: "Une entreprise qui possède des filiales de production ou de vente dans plusieurs pays." },
        { q: "Pourquoi une entreprise réalise-t-elle des IDE ?", r: "Pour réduire ses coûts (main-d'œuvre, impôts) ou pour conquérir de nouveaux marchés en produisant sur place." },
        { q: "Qu'est-ce que l'avantage comparatif selon Ricardo ?", r: "Chaque pays gagne à se spécialiser dans la production où il est relativement le plus efficace, puis à échanger (1817)." },
        { q: "Qu'est-ce que le libre-échange ?", r: "Un commerce international sans obstacles : pas de droits de douane, pas de quotas, pas de barrières non tarifaires." },
        { q: "Qu'est-ce que le protectionnisme ?", r: "L'ensemble des mesures qui protègent la production nationale de la concurrence étrangère." },
        { q: "Qu'est-ce qu'un droit de douane ?", r: "Une taxe sur les produits importés, qui les rend plus chers que les produits nationaux." },
        { q: "Qu'est-ce qu'une barrière non tarifaire ?", r: "Un obstacle aux importations qui n'est pas une taxe : quota, norme technique ou sanitaire, procédure douanière complexe." },
        { q: "Quand l'OMC est-elle créée, et où siège-t-elle ?", r: "Le 1er janvier 1995, à Genève. Elle remplace le GATT de 1947." },
        { q: "Que dit la clause de la nation la plus favorisée ?", r: "Un avantage commercial accordé à un pays membre de l'OMC doit être accordé à tous les autres membres." },
        { q: "Qu'est-ce que l'ORD ?", r: "L'Organe de règlement des différends de l'OMC : il juge les litiges commerciaux entre États membres." },
      ],
      quiz: [
        { q: "Quand l'OMC est-elle créée ?", choix: ["1947", "1995", "1986", "1957"], bonne: 1, expl: "L'OMC naît le 1er janvier 1995. 1947 est la date du GATT ; 1986, le lancement du cycle d'Uruguay.", niv: 1 },
        { q: "Un pays exporte pour 500 milliards et importe pour 580 milliards. Son solde est :", choix: ["excédentaire de 80 milliards", "déficitaire de 1 080 milliards", "déficitaire de 80 milliards", "équilibré"], bonne: 2, expl: "Solde = 500 − 580 = −80 milliards : il est déficitaire. Un solde excédentaire suppose plus d'exportations que d'importations.", niv: 2 },
        { q: "À partir de quelle part du capital parle-t-on d'investissement direct à l'étranger ?", choix: ["5 %", "25 %", "50 %", "10 %"], bonne: 3, expl: "Au-delà de 10 % du capital, l'investisseur peut peser sur la gestion : c'est un IDE. En dessous, c'est un placement financier.", niv: 1 },
        { q: "Quel économiste a défendu le libre-échange par l'avantage comparatif ?", choix: ["David Ricardo", "Friedrich List", "John Maynard Keynes", "Richard Musgrave"], bonne: 0, expl: "Ricardo (1817). Friedrich List défendait au contraire un protectionnisme temporaire pour les industries naissantes.", niv: 1 },
        { q: "Un pays exige que les jouets importés respectent des normes très strictes. C'est :", choix: ["un droit de douane", "un quota d'importation", "une clause de la nation la plus favorisée", "une barrière non tarifaire"], bonne: 3, expl: "Une norme n'est pas une taxe : c'est une barrière non tarifaire. Un quota limiterait la quantité importée.", niv: 2 },
        { q: "Un constructeur français construit une usine au Maroc pour vendre en Afrique. Il s'agit :", choix: ["d'une importation", "d'un quota", "d'un IDE", "d'une barrière tarifaire"], bonne: 2, expl: "Créer une filiale à l'étranger est un investissement direct à l'étranger. Le motif ici est la conquête d'un marché.", niv: 2 },
        { q: "Dans la fabrication d'un smartphone, quelle étape dégage le moins de valeur ajoutée ?", choix: ["La phase d'assemblage", "La marque et le marketing", "La vente au client", "La conception"], bonne: 0, expl: "L'assemblage rapporte peu par appareil, alors que la conception et la marque captent l'essentiel de la valeur.", niv: 2 },
        { q: "Un pays accorde une baisse de droits de douane au Japon. Selon l'OMC, il doit :", choix: ["demander l'accord de l'ORD", "l'accorder à tous les membres", "la limiter à cinq ans", "la réserver aux pays voisins"], bonne: 1, expl: "C'est la clause de la nation la plus favorisée : un avantage accordé à un membre profite à tous.", niv: 2 },
        { q: "Deux États sont en conflit sur des subventions à l'aéronautique. Qui peut trancher ?", choix: ["La Banque mondiale", "Le Conseil de sécurité des Nations unies", "L'Organe de règlement des différends", "La Commission européenne seule"], bonne: 2, expl: "L'ORD de l'OMC juge les différends commerciaux entre États membres.", niv: 2 },
        { q: "Pourquoi le déficit commercial français s'est-il creusé en 2022 ?", choix: ["La France a cessé d'exporter", "Les prix de l'énergie importée ont flambé", "L'OMC a interdit certaines exportations françaises", "Le tourisme s'est effondré"], bonne: 1, expl: "Le gaz et le pétrole, importés, sont devenus beaucoup plus chers : la facture des importations a explosé.", niv: 3 },
        { q: "Quelle limite du libre-échange est la plus souvent soulignée ?", choix: ["Il fait monter les prix", "Il supprime tout échange de services", "Il oblige les pays à vivre en autarcie", "Il peut accroître les inégalités internes"], bonne: 3, expl: "Les consommateurs gagnent des prix plus bas, mais les salariés des secteurs concurrencés peuvent perdre leur emploi : les inégalités internes augmentent.", niv: 3 },
        { q: "Quel effet des IDE est le plus discuté ?", choix: ["Leur effet sur l'emploi du pays d'origine", "Leur effet sur la croissance du pays d'accueil", "Leur lien avec les firmes multinationales", "Leur rôle dans l'attractivité d'un pays"], bonne: 0, expl: "Le programme le souligne : l'effet sur la croissance du pays d'accueil est plutôt positif ; l'effet sur l'emploi du pays investisseur (délocalisations) est débattu.", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-de-5',
      fiche: `## Croissance économique et développement durable

### La croissance et ses sources
- La **croissance économique** est l'augmentation **durable** de la production d'un pays, mesurée par le **PIB** (produit intérieur brut).
- Deux sources :
  - l'**accumulation des facteurs de production** : plus de **travail** (plus d'actifs, plus d'heures) et plus de **capital** (machines, bâtiments). C'est la croissance **extensive** ;
  - la hausse de la **productivité globale des facteurs** : produire plus avec les mêmes facteurs, grâce au **progrès technique** et à une meilleure organisation. C'est la croissance **intensive**.
- Le **progrès technique** vient surtout de l'**innovation** (nouveaux produits, nouveaux procédés). Il est **endogène** : il naît dans l'économie elle-même, de la recherche, de la formation et des investissements des entreprises.
- Les **institutions** comptent : les **droits de propriété** (brevets, propriété des terres) incitent à investir et à innover, car l'innovateur sait qu'il profitera de son invention. Un système financier solide permet de financer les projets.

### Les limites écologiques de la croissance
- La croissance consomme des **ressources** :
  - **renouvelables** : elles se reconstituent (forêt, eau, soleil, vent), à condition de ne pas les surexploiter ;
  - **non renouvelables** : leur stock s'épuise (pétrole, gaz, charbon, minerais).
- Elle provoque des **pollutions** et le **changement climatique** (émissions de gaz à effet de serre, dues surtout aux énergies fossiles).
- Dès **1972**, le rapport Meadows (« Les limites à la croissance ») alertait sur une croissance infinie dans un monde fini.

### Le développement durable
- Le **développement durable** est « un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures de répondre aux leurs » (**rapport Brundtland, 1987**).
- Il a **trois piliers** : **économique** (croissance, emploi), **social** (réduire la pauvreté et les inégalités), **environnemental** (préserver les ressources et le climat).
- Indicateurs : l'**IDH** (indicateur de développement humain : revenu, santé, éducation), l'**empreinte écologique**, l'**empreinte carbone**, le taux de pauvreté.

### Les instruments de la transition écologique
- La **transition écologique** est le passage à un mode de production et de consommation plus sobre en ressources et en carbone.
- Quatre grands instruments :
  - la **réglementation** : normes et interdictions (fin de la vente des voitures neuves thermiques dans l'Union européenne prévue pour 2035, interdiction des plastiques à usage unique) ;
  - la **taxation** : principe **pollueur-payeur** (taxe carbone) ;
  - le **marché de quotas d'émission** : les entreprises reçoivent ou achètent des droits à polluer échangeables (marché européen du carbone depuis 2005) ;
  - les **subventions** : aides à la rénovation énergétique, au véhicule électrique.
- Effets : ils modifient la **production** (procédés plus propres), la **consommation** (prix relatifs) et l'**investissement** (énergies renouvelables), mais ils ont un coût et peuvent peser sur les ménages modestes.

### De nouvelles formes d'activité
- L'**économie circulaire** : réduire, réutiliser, réparer, **recycler**, au lieu de « produire, consommer, jeter ». En France, la loi anti-gaspillage de 2020 interdit de détruire les invendus non alimentaires.
- L'**économie collaborative** : des particuliers **mutualisent** ou s'échangent des biens et services, souvent par des plateformes (covoiturage, location entre particuliers, revente d'occasion).
- L'**économie sociale et solidaire (ESS)** : des organisations qui placent l'utilité sociale avant le profit, avec une gouvernance démocratique (« une personne, une voix ») : **associations**, **coopératives**, **mutuelles**, **fondations** et **entreprises sociales**. Reconnue par la loi du **31 juillet 2014**, elle représente environ un emploi salarié sur dix en France.

### Biens publics mondiaux et pauvreté
- Un **bien public mondial** est un bien public qui concerne toute la planète : le **climat**, la biodiversité, la stabilité financière. Aucun pays ne peut le protéger seul : il faut une **coopération internationale** (accord de Paris de 2015).
- La **pauvreté absolue** : ne pas avoir le minimum vital. La Banque mondiale la mesure par un seuil d'environ **3 dollars par jour** (seuil relevé en 2025). Elle a fortement **reculé** depuis 1990.
- La **pauvreté relative** : avoir beaucoup moins que les autres dans son pays. En France, est pauvre une personne dont le niveau de vie est inférieur à **60 % du niveau de vie médian** : environ **15 %** de la population.
- L'**éducation** et la **formation** (le **capital humain**) sont parmi les premiers moteurs du développement et de la lutte contre la pauvreté.

### À retenir pour le bac
- Définir croissance et développement durable, et citer les **trois piliers**.
- Classer les instruments : réglementation, taxe, quotas, subventions, avec un exemple chacun.
- Distinguer pauvreté **absolue** (seuil fixe) et **relative** (par rapport aux autres).
- Sujet tombé : « L'intervention de l'État est-elle efficace pour assurer la transition écologique ? » (bac 2026, Asie).`,
      cartes: [
        { q: "Qu'est-ce que la croissance économique ?", r: "L'augmentation durable de la production d'un pays, mesurée par le PIB." },
        { q: "Quelle différence entre croissance extensive et intensive ?", r: "Extensive : on utilise plus de travail et de capital. Intensive : on produit plus avec les mêmes facteurs, grâce à la productivité." },
        { q: "Qu'est-ce que la productivité globale des facteurs ?", r: "La part de la croissance qui ne vient pas de l'ajout de travail et de capital, mais du progrès technique et de l'organisation." },
        { q: "Pourquoi dit-on que le progrès technique est endogène ?", r: "Il naît dans l'économie elle-même : recherche, formation, investissements des entreprises." },
        { q: "Pourquoi les droits de propriété favorisent-ils la croissance ?", r: "Ils garantissent à l'innovateur ou à l'investisseur qu'il profitera de son effort (brevets) : cela incite à innover." },
        { q: "Quelle différence entre ressources renouvelables et non renouvelables ?", r: "Les renouvelables se reconstituent (forêt, vent, soleil). Les non renouvelables s'épuisent (pétrole, charbon, minerais)." },
        { q: "Comment le rapport Brundtland (1987) définit-il le développement durable ?", r: "Un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs." },
        { q: "Quels sont les trois piliers du développement durable ?", r: "L'économique, le social et l'environnemental." },
        { q: "Quels sont les instruments de la transition écologique ?", r: "La réglementation, la taxation (pollueur-payeur), le marché de quotas d'émission et les subventions." },
        { q: "Comment fonctionne un marché de quotas d'émission ?", r: "Les entreprises reçoivent ou achètent des droits à polluer, qu'elles peuvent revendre si elles polluent moins." },
        { q: "Qu'est-ce que l'économie circulaire ?", r: "Un modèle qui réduit, réutilise, répare et recycle, au lieu de « produire, consommer, jeter »." },
        { q: "Quelles organisations forment l'économie sociale et solidaire ?", r: "Les associations, coopératives, mutuelles, fondations et entreprises sociales." },
        { q: "Qu'est-ce qu'un bien public mondial ?", r: "Un bien public qui concerne toute la planète (climat, biodiversité). Sa protection exige une coopération internationale." },
        { q: "Quelle différence entre pauvreté absolue et relative ?", r: "Absolue : sous un minimum vital fixe. Relative : nettement moins que les autres du même pays (en France, sous 60 % du niveau de vie médian)." },
        { q: "Pourquoi l'éducation est-elle un moteur du développement ?", r: "Elle augmente le capital humain : des actifs mieux formés sont plus productifs, innovent davantage et sortent plus facilement de la pauvreté." },
      ],
      quiz: [
        { q: "Quel rapport définit le développement durable en 1987 ?", choix: ["Le rapport Brundtland", "Le rapport Meadows", "Le rapport du GIEC", "Le rapport Stern"], bonne: 0, expl: "Le rapport Brundtland (ONU, 1987). Le rapport Meadows (1972) portait sur les limites de la croissance.", niv: 1 },
        { q: "En France, le seuil de pauvreté relative est fixé à :", choix: ["50 % du revenu moyen", "40 % du SMIC", "60 % du niveau de vie médian", "3 dollars par jour"], bonne: 2, expl: "60 % du niveau de vie médian. 3 dollars par jour est le seuil de pauvreté absolue de la Banque mondiale.", niv: 1 },
        { q: "Quelle organisation ne fait **pas** partie de l'économie sociale et solidaire ?", choix: ["Une mutuelle de santé", "Une société cotée en Bourse", "Une coopérative agricole", "Une association d'aide aux sans-abri"], bonne: 1, expl: "Une société cotée cherche d'abord le profit de ses actionnaires. Mutuelles, coopératives et associations relèvent de l'ESS.", niv: 1 },
        { q: "Le pétrole est une ressource :", choix: ["renouvelable", "circulaire", "collaborative", "non renouvelable"], bonne: 3, expl: "Son stock s'est formé en des millions d'années : il s'épuise à l'échelle humaine.", niv: 1 },
        { q: "Une entreprise produit plus avec le même nombre de salariés grâce à un nouveau logiciel. C'est :", choix: ["une hausse de la productivité", "une croissance extensive", "une baisse du capital humain", "une économie collaborative"], bonne: 0, expl: "Produire plus avec les mêmes facteurs, c'est une hausse de la productivité : la croissance est intensive.", niv: 2 },
        { q: "Le gouvernement interdit la vente de certains plastiques à usage unique. Quel instrument utilise-t-il ?", choix: ["La taxation", "La réglementation", "Le marché de quotas", "La subvention"], bonne: 1, expl: "Une interdiction est une réglementation. Une taxe ferait payer la pollution sans l'interdire.", niv: 2 },
        { q: "Une aciérie pollue moins que prévu et revend une partie de ses droits à polluer. Elle participe :", choix: ["à une subvention verte versée par l'État", "à une taxe carbone", "à un marché de quotas d'émission", "à l'économie collaborative"], bonne: 2, expl: "Les droits à polluer échangeables forment un marché de quotas, comme le marché européen du carbone depuis 2005.", niv: 2 },
        { q: "Une application permet à des particuliers de partager leurs trajets en voiture. Elle relève de :", choix: ["l'économie circulaire", "l'économie sociale et solidaire", "l'économie collaborative", "la croissance extensive"], bonne: 2, expl: "Les particuliers mutualisent un bien (la voiture) : c'est l'économie collaborative. L'économie circulaire vise le recyclage et la réparation.", niv: 2 },
        { q: "Pourquoi le climat est-il un bien public mondial ?", choix: ["Il appartient à l'ONU", "Seuls les pays riches en profitent", "Son usage est payant", "Aucun pays ne peut être exclu de ses effets"], bonne: 3, expl: "Tout le monde subit le climat et personne ne peut en être exclu : chaque pays est tenté de laisser les autres agir (passager clandestin).", niv: 2 },
        { q: "Pourquoi une taxe carbone peut-elle être contestée socialement ?", choix: ["Elle pèse plus sur les ménages modestes", "Elle ne change jamais les comportements", "Elle est interdite par l'OMC", "Elle supprime le marché du carbone"], bonne: 0, expl: "Le carburant et le chauffage pèsent lourd dans le budget des ménages modestes : la taxe peut être injuste sans compensation.", niv: 3 },
        { q: "La pauvreté absolue a reculé dans le monde depuis 1990. Que peut-on en déduire ?", choix: ["La pauvreté relative a aussi disparu", "Les inégalités de revenus ont baissé dans chaque pays du monde", "Le développement durable est atteint", "Beaucoup moins de personnes vivent sous le minimum vital"], bonne: 3, expl: "Le recul de la pauvreté absolue n'empêche pas le maintien de la pauvreté relative et la hausse des inégalités dans beaucoup de pays.", niv: 3 },
        { q: "Pourquoi la croissance pose-t-elle un problème au développement durable ?", choix: ["Elle fait baisser l'emploi", "Elle consomme des ressources et émet des gaz à effet de serre", "Elle réduit le niveau de vie", "Elle empêche tout progrès technique"], bonne: 1, expl: "Le pilier économique peut entrer en conflit avec le pilier environnemental. La croissance augmente au contraire en général l'emploi et le niveau de vie.", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-de-6',
      fiche: `## Quel est le rôle du contrat ?

### Le contrat, un accord qui oblige
- Le **contrat** est « un accord de volontés entre deux ou plusieurs personnes destiné à créer, modifier, transmettre ou éteindre des obligations » (**article 1101 du Code civil**).
- Il sécurise les échanges : chacun sait ce qu'il doit donner et ce qu'il peut exiger. Vente, bail, contrat de travail, abonnement : la vie économique repose sur des contrats.
- **Liberté contractuelle** (article 1102) : chacun est libre de contracter ou non, de choisir son cocontractant et le contenu du contrat, dans les limites de l'**ordre public** (on ne peut pas vendre un organe ni écarter les règles protectrices des salariés).
- **Force obligatoire** (article 1103) : « Les contrats légalement formés tiennent lieu de loi à ceux qui les ont faits. » Une partie ne peut pas se dégager seule de son engagement.
- **Effet relatif** (article 1199) : le contrat ne crée d'obligations qu'entre les parties ; il ne peut pas obliger un tiers.
- **Bonne foi** (article 1104) : les contrats doivent être négociés, formés et exécutés de bonne foi. C'est une règle d'ordre public.

### Les conditions de validité
- L'**article 1128** du Code civil exige trois conditions :
  - le **consentement** des parties ;
  - leur **capacité** de contracter (un mineur non émancipé ou un majeur sous tutelle est en principe incapable) ;
  - un **contenu licite et certain** (on ne peut pas s'engager sur une chose illégale ou indéterminée).
- Le consentement doit être **libre et éclairé**. Il peut être altéré par un **vice du consentement** (article 1130) :
  - l'**erreur** : se tromper sur une qualité essentielle de la prestation ou du cocontractant ;
  - le **dol** : des manœuvres, des mensonges ou un silence volontaire de l'autre partie pour tromper ;
  - la **violence** : une contrainte physique ou morale, y compris l'abus d'un état de dépendance.
- **Obligation précontractuelle d'information** (article 1112-1) : celui qui connaît une information déterminante pour l'autre doit la lui donner.
- Sanction d'une condition manquante : la **nullité** du contrat, qui est censé n'avoir jamais existé (on se restitue ce qu'on a reçu).
  - **Nullité relative** : elle protège un intérêt privé (vice du consentement, incapacité) ; seule la partie protégée peut la demander.
  - **Nullité absolue** : elle protège l'intérêt général (contenu illicite) ; toute personne intéressée peut la demander.

### Protéger la partie faible
- Le **consommateur** (personne physique qui agit hors de son activité professionnelle) est protégé face au **professionnel**.
- **Clause abusive** : une clause qui crée un **déséquilibre significatif** entre les droits et obligations des parties, au détriment du consommateur. Elle est **réputée non écrite** : elle disparaît, le reste du contrat demeure.
- **Droit de rétractation** : pour un achat à distance (internet, téléphone) ou hors établissement, le consommateur dispose de **14 jours** pour changer d'avis sans motif ni pénalité (article L221-18 du Code de la consommation). Exceptions : biens personnalisés, denrées périssables, par exemple.
- **Contrat électronique** : la commande doit être vérifiée puis confirmée (principe du « double clic »).

### L'exécution du contrat
- **Obligation de moyens** : le débiteur promet de tout faire pour atteindre un résultat, sans le garantir (le médecin). La victime doit prouver une faute.
- **Obligation de résultat** : le débiteur garantit un résultat précis (le transporteur doit livrer à temps). Il est responsable dès que le résultat n'est pas atteint.

### L'inexécution et ses sanctions
- Si une partie n'exécute pas ses obligations, l'autre peut (article 1217), après une **mise en demeure** en principe :
  - **refuser d'exécuter sa propre obligation** (exception d'inexécution, article 1219), si le manquement est suffisamment grave ;
  - **poursuivre l'exécution forcée** en nature ;
  - **obtenir une réduction du prix** ;
  - **provoquer la résolution** du contrat (article 1224) : il est anéanti ; pour un contrat à exécution successive (bail, abonnement), on parle de **résiliation** pour l'avenir ;
  - **demander des dommages et intérêts** pour réparer le préjudice subi.
- **Clause pénale** : une somme forfaitaire fixée d'avance en cas d'inexécution. Le juge peut la réduire si elle est manifestement excessive.
- **Force majeure** (article 1218) : un événement qui échappe au contrôle du débiteur, imprévisible et irrésistible. Il libère le débiteur.

### À retenir pour le bac
- Citer l'**article** et vérifier chaque **condition** une par une face aux faits.
- Ne pas confondre **nullité** (problème à la formation) et **résolution** (problème à l'exécution).
- Les sanctions de l'inexécution peuvent se cumuler si elles sont compatibles (résolution et dommages et intérêts).`,
      cartes: [
        { q: "Comment l'article 1101 du Code civil définit-il le contrat ?", r: "Un accord de volontés entre deux ou plusieurs personnes destiné à créer, modifier, transmettre ou éteindre des obligations." },
        { q: "Que permet la liberté contractuelle ?", r: "Contracter ou non, choisir son cocontractant et fixer le contenu du contrat, dans les limites de l'ordre public (article 1102)." },
        { q: "Qu'est-ce que la force obligatoire du contrat ?", r: "Le contrat légalement formé tient lieu de loi aux parties (article 1103) : elles doivent l'exécuter." },
        { q: "Qu'est-ce que l'effet relatif du contrat ?", r: "Le contrat ne crée d'obligations qu'entre les parties ; il ne peut pas obliger un tiers (article 1199)." },
        { q: "Quelles sont les trois conditions de validité d'un contrat ?", r: "Le consentement des parties, leur capacité de contracter, un contenu licite et certain (article 1128)." },
        { q: "Quels sont les trois vices du consentement ?", r: "L'erreur, le dol et la violence (article 1130)." },
        { q: "Qu'est-ce que le dol ?", r: "Des manœuvres, des mensonges ou un silence volontaire d'une partie pour tromper l'autre et obtenir son consentement." },
        { q: "Quelle différence entre nullité relative et nullité absolue ?", r: "Relative : protège un intérêt privé, seule la partie protégée agit. Absolue : protège l'intérêt général, toute personne intéressée peut agir." },
        { q: "Qu'est-ce qu'une clause abusive ?", r: "Une clause qui crée un déséquilibre significatif au détriment du consommateur. Elle est réputée non écrite." },
        { q: "Combien de temps dure le droit de rétractation d'un achat en ligne ?", r: "14 jours, sans motif ni pénalité (article L221-18 du Code de la consommation)." },
        { q: "Quelle différence entre obligation de moyens et obligation de résultat ?", r: "Moyens : tout faire pour atteindre le but, sans le garantir. Résultat : garantir un résultat précis." },
        { q: "Quelles sanctions en cas d'inexécution du contrat ?", r: "Exception d'inexécution, exécution forcée, réduction du prix, résolution et dommages et intérêts (article 1217)." },
        { q: "Qu'est-ce que l'exception d'inexécution ?", r: "Le droit de refuser d'exécuter sa propre obligation tant que l'autre partie n'exécute pas la sienne, si le manquement est grave." },
        { q: "Qu'est-ce qu'une clause pénale ?", r: "Une somme fixée d'avance que devra payer la partie qui n'exécute pas le contrat. Le juge peut la modérer." },
      ],
      quiz: [
        { q: "Quel article du Code civil pose la force obligatoire du contrat ?", choix: ["L'article 1101", "L'article 1100", "L'article 1102", "L'article 1103"], bonne: 3, expl: "Article 1103 : les contrats légalement formés tiennent lieu de loi à ceux qui les ont faits. L'article 1102 pose la liberté contractuelle.", niv: 1 },
        { q: "Quelles sont les conditions de validité du contrat (article 1128) ?", choix: ["Consentement, capacité, contenu licite et certain", "Écrit, signature, date", "Prix, chose, notaire", "Consentement, témoin, enregistrement aux impôts, écrit"], bonne: 0, expl: "Trois conditions : consentement, capacité, contenu licite et certain. Un écrit n'est en principe pas exigé.", niv: 1 },
        { q: "Combien de jours dure le droit de rétractation pour un achat sur internet ?", choix: ["7 jours", "10 jours", "14 jours", "30 jours"], bonne: 2, expl: "14 jours (article L221-18 du Code de la consommation).", niv: 1 },
        { q: "Un vendeur cache volontairement qu'une voiture a été accidentée. L'acheteur peut invoquer :", choix: ["la violence", "le dol", "l'erreur sur la valeur", "la force majeure"], bonne: 1, expl: "Un silence volontaire pour tromper est un dol (réticence dolosive). L'erreur sur la seule valeur n'est pas une cause de nullité.", niv: 2 },
        { q: "Un contrat de vente de drogue est frappé :", choix: ["de nullité relative", "de résolution", "de nullité absolue", "de résiliation"], bonne: 2, expl: "Le contenu est illicite : la nullité protège l'intérêt général, elle est absolue.", niv: 2 },
        { q: "Un abonnement contient une clause permettant au seul professionnel de modifier le prix à tout moment. Elle est :", choix: ["réputée non écrite comme abusive", "valable car le contrat est signé", "une clause pénale", "une cause de nullité de tout le contrat"], bonne: 0, expl: "Elle crée un déséquilibre significatif au détriment du consommateur : clause abusive, réputée non écrite. Le reste du contrat demeure.", niv: 2 },
        { q: "Un locataire ne paie plus son loyer depuis six mois. Le bailleur demande la fin du contrat pour l'avenir. Il s'agit :", choix: ["d'une nullité", "d'une résiliation", "d'une rétractation", "d'une exception d'inexécution"], bonne: 1, expl: "Le bail est un contrat à exécution successive : sa fin pour inexécution est une résiliation, sans effet sur le passé.", niv: 2 },
        { q: "Un transporteur s'engage à livrer un colis intact le 3 mars. Son obligation est :", choix: ["une obligation de moyens", "une obligation naturelle", "une clause abusive", "une obligation de résultat"], bonne: 3, expl: "Il garantit un résultat précis : si le colis n'arrive pas intact et à temps, sa responsabilité est engagée sans preuve de faute.", niv: 2 },
        { q: "Quel élément ne fait **pas** partie des sanctions de l'inexécution (article 1217) ?", choix: ["La réduction du prix", "La rétractation", "L'exécution forcée", "Les dommages et intérêts"], bonne: 1, expl: "La rétractation est un droit du consommateur de changer d'avis, pas une sanction de l'inexécution.", niv: 1 },
        { q: "Pourquoi le juge peut-il réduire une clause pénale ?", choix: ["Dans un contrat de travail", "À la demande du créancier", "Seulement si le contrat est nul", "Si elle est manifestement excessive"], bonne: 3, expl: "Le juge peut modérer une clause pénale manifestement excessive ou dérisoire, même si les parties l'ont acceptée.", niv: 3 },
        { q: "Un client ne paie pas le garage, qui garde la voiture réparée. Le garage invoque :", choix: ["la force majeure", "la nullité du contrat", "l'exception d'inexécution", "le droit de rétractation"], bonne: 2, expl: "Le garage refuse d'exécuter son obligation (rendre la voiture) tant que le client n'exécute pas la sienne (payer).", niv: 3 },
        { q: "Pourquoi le droit protège-t-il davantage le consommateur que le professionnel ?", choix: ["Le consommateur est en position de faiblesse, moins informé", "Le professionnel n'a aucune obligation", "Le consommateur est souvent mineur", "La loi interdit tout contrat entre eux"], bonne: 0, expl: "Le professionnel connaît son produit et rédige le contrat : le droit rééquilibre la relation (information, clauses abusives, rétractation).", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-de-7',
      fiche: `## Qu'est-ce qu'être responsable ?

### Responsabilité civile et responsabilité pénale
- Être **responsable**, c'est devoir répondre de ses actes.
- La **responsabilité pénale** sanctionne une **infraction** (contravention, délit, crime) au nom de la société : amende, prison. Elle suppose un texte qui prévoit l'infraction et la peine.
- La **responsabilité civile** oblige à **réparer** le dommage causé à autrui, en général en versant des **dommages et intérêts**. Son but est d'indemniser la victime, pas de punir.
- Un même fait peut engager les deux (un conducteur ivre qui blesse un piéton).

### Les conditions de la responsabilité civile
- Il faut réunir **trois conditions** :
  - un **dommage** (ou préjudice) ;
  - un **fait générateur** (une faute, le fait d'une chose, le fait d'autrui) ;
  - un **lien de causalité** entre les deux.
- Le dommage peut être **matériel** (biens abîmés, perte de revenus), **corporel** (atteinte au corps) ou **moral** (souffrance, atteinte à l'honneur).
- Pour être réparé, il doit être **certain** (réel ou futur mais sûr ; une **perte de chance** sérieuse compte), **direct** (lié au fait), **personnel** et **légitime**.
- Le **préjudice écologique** (atteinte à l'environnement) est réparable depuis 2016 (articles 1246 et suivants du Code civil).

### Responsabilité contractuelle et extracontractuelle
- **Contractuelle** : le dommage vient de la mauvaise exécution d'un **contrat** (article 1231-1). Exemple : un traiteur livre un repas avarié.
- **Extracontractuelle** : il n'y a pas de contrat entre l'auteur et la victime. Elle comprend trois régimes.

### Les trois faits générateurs extracontractuels
- **Le fait personnel** (articles **1240 et 1241**) : « Tout fait quelconque de l'homme, qui cause à autrui un dommage, oblige celui par la faute duquel il est arrivé à le réparer. » La faute peut être volontaire ou une simple **imprudence** ou **négligence**. La victime doit **prouver** la faute.
- **Le fait des choses** (article **1242 alinéa 1**) : le **gardien** d'une chose (celui qui en a l'usage, la direction et le contrôle) est responsable du dommage qu'elle cause, **sans faute à prouver**. Cas particuliers : les **animaux** (article 1243), la **ruine d'un bâtiment** (article 1244).
- **Le fait d'autrui** : on répond de personnes dont on a la charge :
  - les **parents** pour leur enfant mineur qui habite avec eux (article 1242 alinéa 4) ;
  - les **commettants** (employeurs) pour leurs **préposés** (salariés) agissant dans leurs fonctions (alinéa 5).

### Des régimes spéciaux qui facilitent l'indemnisation
- **Accidents de la circulation** (loi **Badinter** du 5 juillet 1985) : toute victime d'un accident impliquant un **véhicule terrestre à moteur** est indemnisée par l'assureur du véhicule. Les victimes non conductrices sont presque toujours indemnisées de leurs dommages corporels.
- **Produits défectueux** (articles 1245 et suivants) : le **producteur** répond des dommages causés par un produit qui n'offre pas la sécurité attendue, même sans faute.
- **Accidents du travail** : le salarié est indemnisé par la Sécurité sociale, sans avoir à prouver une faute.

### Une responsabilité de plus en plus objective
- On est passé d'une responsabilité fondée sur la **faute** (subjective) à une responsabilité fondée sur le **risque** (objective) : celui qui crée un risque ou en tire profit doit en assumer les conséquences.
- Le but : que la **victime** soit indemnisée, même quand aucune faute n'est prouvable.
- L'**assurance** rend cela possible : elle **mutualise** les risques. Certaines assurances sont **obligatoires** (véhicule, responsabilité civile des professionnels de santé).

### Les causes d'exonération
- Le responsable peut s'exonérer (en tout ou partie) s'il prouve :
  - la **force majeure** : un événement **imprévisible**, **irrésistible** et **extérieur** (une tempête exceptionnelle) ;
  - la **faute de la victime** (exonération partielle ou totale) ;
  - le **fait d'un tiers**.
- Une **clause limitative** de responsabilité peut exister dans un contrat entre professionnels, mais pas pour un dommage corporel.

### À retenir pour le bac
- Toujours vérifier les **trois conditions** : dommage, fait générateur, lien de causalité.
- Identifier le **bon régime** : faute (1240), chose (1242 al. 1), animal (1243), parents (1242 al. 4), employeur (1242 al. 5), circulation (loi de 1985).
- Puis chercher une cause d'**exonération** dans les faits.`,
      cartes: [
        { q: "Quelle différence entre responsabilité civile et pénale ?", r: "La civile oblige à réparer le dommage causé à la victime. La pénale sanctionne une infraction au nom de la société." },
        { q: "Quelles sont les trois conditions de la responsabilité civile ?", r: "Un dommage, un fait générateur et un lien de causalité entre les deux." },
        { q: "Quels sont les types de dommages ?", r: "Matériel (biens, revenus), corporel (atteinte au corps) et moral (souffrance, honneur)." },
        { q: "Quels caractères doit avoir le dommage réparable ?", r: "Il doit être certain, direct, personnel et légitime." },
        { q: "Quand la responsabilité est-elle contractuelle ?", r: "Quand le dommage vient de l'inexécution ou de la mauvaise exécution d'un contrat entre l'auteur et la victime (article 1231-1)." },
        { q: "Que prévoient les articles 1240 et 1241 du Code civil ?", r: "La responsabilité du fait personnel : celui qui cause un dommage par sa faute, son imprudence ou sa négligence doit le réparer." },
        { q: "Qu'est-ce que le gardien d'une chose ?", r: "Celui qui en a l'usage, la direction et le contrôle. Il répond du dommage qu'elle cause (article 1242 alinéa 1)." },
        { q: "Quel article vise les dommages causés par un animal ?", r: "L'article 1243 : le propriétaire ou celui qui s'en sert répond du dommage, même si l'animal s'est échappé." },
        { q: "Quand les parents sont-ils responsables de leur enfant ?", r: "Pour les dommages causés par leur enfant mineur qui habite avec eux (article 1242 alinéa 4), même sans faute de leur part." },
        { q: "Qu'est-ce que la responsabilité du commettant ?", r: "L'employeur répond des dommages causés par son salarié (préposé) agissant dans le cadre de ses fonctions (article 1242 alinéa 5)." },
        { q: "Que prévoit la loi Badinter de 1985 ?", r: "L'indemnisation des victimes d'accidents impliquant un véhicule terrestre à moteur, par l'assureur du véhicule." },
        { q: "Quelles sont les causes d'exonération ?", r: "La force majeure, la faute de la victime et le fait d'un tiers." },
        { q: "Quels sont les caractères de la force majeure ?", r: "Un événement imprévisible, irrésistible et extérieur." },
        { q: "Pourquoi dit-on que la responsabilité devient objective ?", r: "Elle repose de plus en plus sur le risque créé et non sur la faute, pour que la victime soit indemnisée." },
        { q: "Quel est le rôle de l'assurance en responsabilité ?", r: "Elle mutualise les risques : l'assureur paie l'indemnité, ce qui garantit que la victime sera indemnisée." },
      ],
      quiz: [
        { q: "Quelles sont les trois conditions de la responsabilité civile ?", choix: ["Faute, intention de nuire, condamnation pénale", "Dommage, fait générateur, lien de causalité", "Contrat, signature, dommage", "Plainte, enquête, jugement"], bonne: 1, expl: "Dommage, fait générateur et lien de causalité. Une intention de nuire n'est pas nécessaire : une imprudence suffit.", niv: 1 },
        { q: "Quel article pose la responsabilité pour faute ?", choix: ["L'article 1103", "L'article 1128", "L'article 1104", "L'article 1240"], bonne: 3, expl: "Article 1240 (et 1241 pour l'imprudence et la négligence). L'article 1104 impose la bonne foi dans les contrats.", niv: 1 },
        { q: "Quel est le but premier de la responsabilité civile ?", choix: ["Réparer le dommage de la victime", "Protéger l'ordre public", "Punir l'auteur", "Envoyer l'auteur en prison"], bonne: 0, expl: "La responsabilité civile indemnise la victime. Punir est le rôle de la responsabilité pénale.", niv: 1 },
        { q: "Un pot de fleurs tombe d'un balcon et blesse un passant. Le régime applicable est :", choix: ["le fait personnel", "le fait d'autrui", "le fait des choses", "la responsabilité contractuelle"], bonne: 2, expl: "Le pot est une chose dont l'occupant est gardien : article 1242 alinéa 1, sans faute à prouver.", niv: 2 },
        { q: "Un enfant de 12 ans casse la vitre d'un voisin avec un ballon. Qui doit réparer ?", choix: ["Ses parents", "L'enfant lui-même, seul", "Le voisin", "Le fabricant du ballon"], bonne: 0, expl: "Les parents répondent de leur enfant mineur qui habite avec eux (article 1242 alinéa 4), même sans faute de leur part.", niv: 2 },
        { q: "Un livreur salarié renverse un piéton en faisant sa tournée à vélo. La victime peut agir contre :", choix: ["la Sécurité sociale du piéton", "l'employeur du livreur", "le client du livreur", "la mairie"], bonne: 1, expl: "Le commettant répond de son préposé qui agit dans ses fonctions (article 1242 alinéa 5).", niv: 2 },
        { q: "Un piéton est renversé par une voiture. Quel texte s'applique ?", choix: ["L'article 1243", "Le Code de la consommation", "L'article 1103", "La loi Badinter de 1985"], bonne: 3, expl: "Un véhicule terrestre à moteur est impliqué : la loi du 5 juillet 1985 s'applique, l'assureur indemnise.", niv: 2 },
        { q: "Un chien s'échappe de son jardin et mord un cycliste. Qui est responsable ?", choix: ["Le propriétaire du chien", "La commune", "Personne, le chien s'est échappé", "Le cycliste, qui passait trop près"], bonne: 0, expl: "Article 1243 : le propriétaire répond du dommage causé par l'animal, qu'il soit sous sa garde, égaré ou échappé.", niv: 2 },
        { q: "Quel dommage n'est **pas** réparable ?", choix: ["Une perte de revenus prouvée", "La souffrance après un deuil", "Un gain espéré purement hypothétique", "Des frais d'hôpital"], bonne: 2, expl: "Le dommage doit être certain. Un gain seulement hypothétique ne l'est pas ; une perte de chance sérieuse, elle, peut l'être.", niv: 2 },
        { q: "Une cliente glisse dans un magasin à cause d'un sol mouillé non signalé, puis le magasin invoque la force majeure. Ce moyen :", choix: ["réussit dans tous les cas", "réussit, car la cliente n'a pas fait attention", "échoue, le sol mouillé était prévisible et évitable", "échoue, car la force majeure n'existe qu'en droit pénal"], bonne: 2, expl: "La force majeure doit être imprévisible, irrésistible et extérieure. Un sol mouillé non signalé ne l'est pas.", niv: 3 },
        { q: "Pourquoi la responsabilité sans faute s'est-elle développée ?", choix: ["Pour punir plus sévèrement les auteurs de dommages corporels", "Pour indemniser la victime sans aucune faute à prouver", "Pour supprimer l'assurance", "Pour réduire le nombre de procès"], bonne: 1, expl: "Avec les machines, les voitures et les produits industriels, la faute est souvent impossible à prouver : le droit s'appuie sur le risque.", niv: 3 },
        { q: "Un cycliste traverse au rouge et se fait percuter par une voiture. Sa faute peut :", choix: ["engager la responsabilité pénale du conducteur", "transformer l'accident en contrat", "rendre l'assurance du véhicule illégale", "réduire ou supprimer son indemnisation"], bonne: 3, expl: "La faute de la victime est une cause d'exonération. Pour un dommage corporel en accident de la circulation, seule une faute inexcusable du piéton ou du cycliste peut supprimer l'indemnisation.", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-de-8',
      fiche: `## Le travail salarié (1) : le contrat de travail

### Travail salarié ou travail indépendant ?
- Le **contrat de travail** est la convention par laquelle une personne s'engage à travailler **pour le compte** et **sous la direction** d'une autre, moyennant une **rémunération**.
- Trois éléments : une **prestation de travail**, une **rémunération** et surtout un **lien de subordination**.
- Le **lien de subordination** existe quand l'employeur a le pouvoir de **donner des ordres**, d'en **contrôler l'exécution** et de **sanctionner** les manquements (Cour de cassation, 1996).
- Le **travailleur indépendant** (artisan, consultant, auto-entrepreneur) travaille pour son compte, sans subordination. Il conclut un **contrat d'entreprise** (de prestation de services) avec ses clients.
- Le juge regarde la **réalité** de la relation, pas le nom donné au contrat : c'est la **requalification**. En 2020, la Cour de cassation a requalifié en contrat de travail la relation entre un chauffeur et la plateforme Uber, car la plateforme fixait les tarifs, contrôlait et sanctionnait.
- Être salarié donne accès à une forte **protection** : salaire minimum, durée du travail, protection sociale, règles du licenciement.

### Les pouvoirs de l'employeur
- **Pouvoir de direction** : organiser le travail, donner des consignes, fixer les horaires.
- **Pouvoir réglementaire** : rédiger un **règlement intérieur**, obligatoire dès **50 salariés**, qui fixe les règles d'hygiène, de sécurité et de discipline.
- **Pouvoir disciplinaire** : sanctionner une faute (avertissement, mise à pied, licenciement), selon une procédure et de manière **proportionnée**. Les **amendes** sont interdites.
- Ces pouvoirs sont limités par la loi, les accords collectifs et les **droits et libertés** du salarié.

### Le CDI, contrat de droit commun
- Le **contrat à durée indéterminée (CDI)** est la **forme normale** de la relation de travail. Il peut être verbal à temps plein, mais un écrit est conseillé.
- Il peut prévoir une **période d'essai** pour tester le salarié : en principe **2 mois** pour un ouvrier ou employé, **3 mois** pour un agent de maîtrise ou technicien, **4 mois** pour un cadre, renouvelable une fois si un accord de branche le prévoit.
- Les parties peuvent ajouter des **clauses** :
  - **clause de mobilité** : le salarié accepte d'avance un changement de lieu de travail dans une zone définie ;
  - **clause de non-concurrence** : après son départ, le salarié s'interdit de travailler chez un concurrent. Elle n'est valable que si elle est indispensable aux intérêts de l'entreprise, limitée dans le temps et l'espace, tient compte de l'emploi du salarié et prévoit une **contrepartie financière** ;
  - **clause de télétravail** ou d'exclusivité.

### Les contrats précaires
- Le **contrat à durée déterminée (CDD)** :
  - **écrit obligatoire** ;
  - seulement pour des **cas limités** : remplacement d'un salarié absent, **accroissement temporaire d'activité**, emploi saisonnier ;
  - il ne peut **pas** pourvoir durablement un emploi lié à l'activité normale de l'entreprise ;
  - durée maximale en principe **18 mois**, renouvellements compris ;
  - à la fin, **indemnité de précarité** de **10 %** de la rémunération totale brute (sauf exceptions, comme le CDD saisonnier) ;
  - sanction en cas d'abus : **requalification en CDI**.
- Le **contrat de travail temporaire** (intérim) : relation à trois entre l'agence d'intérim (l'employeur), le salarié et l'entreprise utilisatrice.
- Ces contrats répondent au besoin de **flexibilité** des entreprises, mais créent de la **précarité** pour les salariés.

### Les sources du droit du travail
- La **loi** et le **Code du travail** fixent un socle (SMIC, durée légale de 35 heures, congés payés de 5 semaines).
- Les **conventions et accords collectifs** sont négociés par les **partenaires sociaux** (syndicats de salariés et employeurs) :
  - **accord de branche** (convention collective d'un secteur, par exemple la métallurgie) ;
  - **accord d'entreprise**.
- Depuis les **ordonnances de 2017**, l'**accord d'entreprise** prime sur l'accord de branche dans de nombreux domaines (organisation du temps de travail, primes), pour adapter les règles au terrain.
- Le **contrat de travail** ne peut prévoir que des dispositions **plus favorables** au salarié que la loi.

### À retenir pour le bac
- Pour qualifier un contrat de travail, chercher les **trois indices** du lien de subordination : ordres, contrôle, sanction.
- Pour un CDD, vérifier le **motif**, l'**écrit** et la **durée** ; un manquement entraîne la requalification en CDI.
- Une clause de non-concurrence sans contrepartie financière est **nulle**.`,
      cartes: [
        { q: "Quels sont les trois éléments du contrat de travail ?", r: "Une prestation de travail, une rémunération et un lien de subordination." },
        { q: "Qu'est-ce que le lien de subordination ?", r: "Le pouvoir de l'employeur de donner des ordres, d'en contrôler l'exécution et de sanctionner les manquements." },
        { q: "Quelle différence entre salarié et travailleur indépendant ?", r: "Le salarié travaille sous la direction d'un employeur. L'indépendant travaille pour son compte, sans subordination, avec un contrat d'entreprise." },
        { q: "Qu'est-ce que la requalification d'un contrat ?", r: "Le juge donne au contrat son vrai nom d'après la réalité de la relation, par exemple un faux contrat de prestation devient un contrat de travail." },
        { q: "Quels sont les trois pouvoirs de l'employeur ?", r: "Le pouvoir de direction, le pouvoir réglementaire (règlement intérieur) et le pouvoir disciplinaire." },
        { q: "À partir de combien de salariés le règlement intérieur est-il obligatoire ?", r: "50 salariés." },
        { q: "Quelle est la forme normale du contrat de travail ?", r: "Le contrat à durée indéterminée (CDI)." },
        { q: "Quelle est la durée de la période d'essai d'un cadre en CDI ?", r: "4 mois au maximum, renouvelable une fois si un accord de branche le prévoit." },
        { q: "Qu'est-ce qu'une clause de mobilité ?", r: "Une clause par laquelle le salarié accepte d'avance un changement de lieu de travail dans une zone géographique définie." },
        { q: "Quelles sont les conditions d'une clause de non-concurrence ?", r: "Indispensable aux intérêts de l'entreprise, limitée dans le temps et l'espace, adaptée à l'emploi du salarié, avec une contrepartie financière." },
        { q: "Dans quels cas peut-on conclure un CDD ?", r: "Remplacement d'un salarié absent, accroissement temporaire d'activité, emploi saisonnier, entre autres cas prévus par la loi." },
        { q: "Quelle est l'indemnité de fin de CDD ?", r: "L'indemnité de précarité : 10 % de la rémunération totale brute, sauf exceptions." },
        { q: "Quelle est la sanction d'un CDD irrégulier ?", r: "La requalification en CDI." },
        { q: "Qu'ont changé les ordonnances de 2017 ?", r: "L'accord d'entreprise prime sur l'accord de branche dans de nombreux domaines." },
      ],
      quiz: [
        { q: "Quel élément distingue le contrat de travail des autres contrats ?", choix: ["Le paiement d'un prix", "La signature devant notaire", "Le lien de subordination", "La durée de plus d'un an"], bonne: 2, expl: "Le lien de subordination (ordres, contrôle, sanction) est le critère décisif du contrat de travail.", niv: 1 },
        { q: "À partir de combien de salariés le règlement intérieur est-il obligatoire ?", choix: ["11", "50", "20", "250"], bonne: 1, expl: "50 salariés. 11 est le seuil du comité social et économique.", niv: 1 },
        { q: "Quel est le montant de l'indemnité de précarité d'un CDD ?", choix: ["5 %", "20 %", "15 %", "10 %"], bonne: 3, expl: "10 % de la rémunération totale brute versée pendant le contrat.", niv: 1 },
        { q: "Quelle est la durée maximale de principe d'un CDD, renouvellements compris ?", choix: ["18 mois", "12 mois", "15 mois", "6 mois"], bonne: 0, expl: "18 mois en principe. Certains cas particuliers permettent 9 ou 24 mois.", niv: 1 },
        { q: "Un chauffeur « indépendant » reçoit ses courses, ses tarifs et des sanctions d'une plateforme. Le juge peut :", choix: ["refuser de regarder la réalité", "annuler la plateforme", "transformer le chauffeur en associé", "requalifier la relation en contrat de travail"], bonne: 3, expl: "Le juge regarde la réalité : ordres, contrôle et sanctions caractérisent un lien de subordination (Uber, 2020).", niv: 2 },
        { q: "Une entreprise embauche en CDD pour remplacer une salariée en congé maternité. Ce motif est :", choix: ["interdit", "valable", "réservé aux cadres", "valable sans écrit"], bonne: 1, expl: "Le remplacement d'un salarié absent est un motif légal de CDD. L'écrit reste obligatoire.", niv: 2 },
        { q: "Une clause interdit à un vendeur de travailler pour un concurrent pendant deux ans, sans aucune indemnité. Elle est :", choix: ["valable, car il l'a signée", "valable si elle est courte", "nulle, faute de contrepartie financière", "transformée par le juge en clause de mobilité"], bonne: 2, expl: "La contrepartie financière est une condition de validité de la clause de non-concurrence.", niv: 2 },
        { q: "Un employeur retient 50 euros sur le salaire d'un employé arrivé en retard. Cette sanction est :", choix: ["interdite, car c'est une amende", "prévue par le règlement intérieur", "obligatoire après trois retards", "autorisée par le pouvoir disciplinaire"], bonne: 0, expl: "Les sanctions pécuniaires (amendes) sont interdites, même si le règlement intérieur les prévoit.", niv: 2 },
        { q: "Quelle mention n'est **pas** exigée pour un CDD ?", choix: ["L'accord de l'inspection du travail", "Un motif prévu par la loi", "Un écrit", "Une durée ou un terme"], bonne: 0, expl: "Aucune autorisation administrative n'est nécessaire. Écrit, motif et terme sont exigés.", niv: 2 },
        { q: "Une entreprise enchaîne des CDD pour le même poste permanent depuis trois ans. Le salarié peut :", choix: ["réclamer une clause de mobilité", "obtenir une indemnité de précarité doublée", "être licencié pour faute", "demander la requalification en CDI"], bonne: 3, expl: "Un CDD ne peut pas pourvoir durablement un emploi permanent : le juge requalifie en CDI.", niv: 3 },
        { q: "Pourquoi les ordonnances de 2017 donnent-elles la priorité à l'accord d'entreprise ?", choix: ["Pour supprimer les syndicats", "Pour que la loi ne s'applique plus", "Pour adapter les règles à chaque entreprise", "Pour remplacer le contrat de travail"], bonne: 2, expl: "L'idée est de négocier au plus près du terrain. Le socle légal (SMIC, ordre public) reste toujours applicable.", niv: 3 },
        { q: "Pourquoi le statut de salarié est-il plus protecteur que celui d'indépendant ?", choix: ["Il permet de fixer librement ses tarifs", "Il ouvre droit au SMIC et à la protection sociale", "Il exclut tout contrôle", "Il garantit un emploi à vie avec une hausse de salaire chaque année"], bonne: 1, expl: "En échange de la subordination, le salarié bénéficie du Code du travail : SMIC, durée du travail, protection contre le licenciement.", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-de-9',
      fiche: `## Le travail salarié (2) : rupture du contrat et libertés du salarié

### Les modes de rupture du CDI
- Le CDI peut prendre fin de plusieurs façons :
  - la **démission** : le salarié décide de partir. Sa volonté doit être **claire et non équivoque**. Il respecte un **préavis** (fixé par la convention collective) et n'a en principe pas droit au chômage ;
  - le **licenciement** : l'employeur rompt le contrat, pour un motif **personnel** ou **économique** ;
  - la **rupture conventionnelle** : les deux parties se mettent d'accord (créée en **2008**) ;
  - la retraite, le décès, la force majeure.

### Le licenciement pour motif personnel
- Il doit reposer sur une **cause réelle et sérieuse** : des faits exacts, précis et assez graves (insuffisance professionnelle, faute).
- Les **degrés de faute** :
  - **faute simple** : le salarié garde son préavis et ses indemnités ;
  - **faute grave** : elle rend impossible le maintien du salarié dans l'entreprise ; pas de préavis ni d'indemnité de licenciement ;
  - **faute lourde** : faute grave commise avec l'**intention de nuire** à l'employeur.
- **La procédure** :
  - **convocation** à un **entretien préalable** (lettre recommandée ou remise en main propre) ;
  - **entretien** au moins **5 jours ouvrables** après la convocation ; le salarié peut se faire assister ;
  - **lettre de licenciement**, envoyée au moins **2 jours ouvrables** après l'entretien et énonçant les motifs.
- L'**indemnité légale de licenciement** est due après **8 mois** d'ancienneté (sauf faute grave ou lourde) : 1/4 de mois de salaire par année jusqu'à 10 ans, 1/3 au-delà.
- Si le licenciement est **sans cause réelle et sérieuse**, le conseil de prud'hommes accorde des dommages et intérêts encadrés par un **barème** (planchers et plafonds selon l'ancienneté, depuis 2017). Le barème ne s'applique pas si le licenciement est **nul** (discrimination, harcèlement, atteinte à une liberté fondamentale).

### Le licenciement pour motif économique
- Motif **non inhérent à la personne** du salarié : suppression ou transformation d'emploi due à des **difficultés économiques**, des **mutations technologiques**, une **réorganisation** pour sauvegarder la compétitivité, ou la cessation d'activité (article L1233-3 du Code du travail).
- L'employeur doit tenter de **reclasser** le salarié et respecter des critères d'ordre. Au-delà d'un certain nombre de licenciements, un **plan de sauvegarde de l'emploi (PSE)** est obligatoire dans les entreprises d'au moins 50 salariés.

### La rupture conventionnelle
- L'employeur et le salarié conviennent ensemble de la fin du CDI et de ses conditions.
- Chacun dispose de **15 jours** pour se rétracter, puis l'administration doit **homologuer** la convention.
- Le salarié touche une indemnité au moins égale à l'indemnité légale de licenciement et a **droit au chômage**.
- La **rupture conventionnelle collective** (2017) permet des départs volontaires négociés par accord collectif.

### À la fin du contrat
- L'employeur remet un **certificat de travail**, une **attestation France Travail** (pour le chômage) et un **reçu pour solde de tout compte**.

### Les libertés du salarié dans l'entreprise
- Le salarié garde ses droits de citoyen. Selon l'article **L1121-1** du Code du travail, l'employeur ne peut restreindre ses libertés que si c'est **justifié par la nature de la tâche** et **proportionné au but recherché**.
- **Vie privée** : l'employeur ne peut pas lire les messages identifiés comme **personnels** du salarié (arrêt Nikon, 2001). Un fait de la vie privée ne justifie un licenciement que s'il se rattache à la vie professionnelle ou cause un trouble objectif.
- **Liberté d'expression** : le salarié peut critiquer son employeur, sauf **abus** (propos injurieux, diffamatoires ou excessifs).
- **Obligation de loyauté** : en retour, le salarié ne doit pas nuire à son employeur (concurrence pendant le contrat, divulgation de secrets).
- **Surveillance** : la vidéosurveillance ou le contrôle des outils numériques est possible si les salariés sont **informés** et le CSE consulté.

### Les droits collectifs
- **Droit de grève** (reconnu par la Constitution) : cessation **collective** et **concertée** du travail pour des **revendications professionnelles**. Dans le privé, pas de préavis exigé ; dans les services publics, préavis de **5 jours**. Le salaire n'est pas versé pendant la grève, mais le gréviste ne peut pas être sanctionné, sauf faute lourde.
- **Liberté syndicale** : adhérer ou non à un syndicat, sans discrimination.
- **Représentation** : le **comité social et économique (CSE)** est élu dès **11 salariés** ; un **délégué syndical**, qui négocie les accords, peut être désigné dès **50 salariés**.

### À retenir pour le bac
- Pour un licenciement, vérifier le **motif** (cause réelle et sérieuse) **et** la **procédure** (délais de 5 et 2 jours ouvrables).
- Pour une restriction de liberté, appliquer le test : **justifiée** par la tâche et **proportionnée** au but.`,
      cartes: [
        { q: "Quels sont les principaux modes de rupture du CDI ?", r: "La démission, le licenciement (personnel ou économique) et la rupture conventionnelle." },
        { q: "Que faut-il pour qu'une démission soit valable ?", r: "Une volonté claire et non équivoque du salarié de quitter l'entreprise." },
        { q: "Qu'est-ce qu'une cause réelle et sérieuse ?", r: "Un motif de licenciement fondé sur des faits exacts, précis et suffisamment graves." },
        { q: "Quelle différence entre faute grave et faute lourde ?", r: "La faute grave rend impossible le maintien dans l'entreprise. La faute lourde est une faute grave commise avec l'intention de nuire." },
        { q: "Quelles sont les étapes de la procédure de licenciement personnel ?", r: "Convocation, entretien préalable au moins 5 jours ouvrables après, lettre de licenciement au moins 2 jours ouvrables après l'entretien." },
        { q: "Quand l'indemnité légale de licenciement est-elle due ?", r: "Après 8 mois d'ancienneté, sauf faute grave ou lourde." },
        { q: "Qu'est-ce que le barème des indemnités prud'homales ?", r: "Depuis 2017, des planchers et plafonds de dommages et intérêts selon l'ancienneté, en cas de licenciement sans cause réelle et sérieuse." },
        { q: "Qu'est-ce qu'un licenciement économique ?", r: "Un licenciement pour un motif non lié à la personne : difficultés économiques, mutations technologiques, réorganisation, cessation d'activité." },
        { q: "Comment fonctionne la rupture conventionnelle ?", r: "Accord des deux parties, 15 jours de rétractation, homologation par l'administration ; le salarié a droit au chômage." },
        { q: "Que dit l'article L1121-1 du Code du travail ?", r: "Les restrictions aux libertés du salarié doivent être justifiées par la nature de la tâche et proportionnées au but recherché." },
        { q: "Que décide l'arrêt Nikon (2001) ?", r: "L'employeur ne peut pas lire les messages personnels du salarié, même envoyés depuis l'ordinateur de travail." },
        { q: "Qu'est-ce que la grève ?", r: "Une cessation collective et concertée du travail pour appuyer des revendications professionnelles." },
        { q: "Quel préavis de grève dans les services publics ?", r: "5 jours. Dans le secteur privé, aucun préavis n'est exigé." },
        { q: "À partir de quel effectif un CSE est-il élu ?", r: "11 salariés." },
      ],
      quiz: [
        { q: "Quand la rupture conventionnelle a-t-elle été créée ?", choix: ["2008", "1973", "2001", "1995"], bonne: 0, expl: "En 2008. 2017 est l'année de la rupture conventionnelle collective et du barème prud'homal.", niv: 1 },
        { q: "Après combien d'ancienneté l'indemnité légale de licenciement est-elle due ?", choix: ["1 mois", "8 mois", "1 an", "2 ans"], bonne: 1, expl: "8 mois d'ancienneté ininterrompue, sauf faute grave ou lourde.", niv: 1 },
        { q: "À partir de combien de salariés le CSE est-il élu ?", choix: ["50", "20", "100", "11"], bonne: 3, expl: "11 salariés. 50 est le seuil du délégué syndical et du règlement intérieur.", niv: 1 },
        { q: "Un salarié est convoqué le lundi à un entretien préalable fixé au mercredi suivant. La procédure :", choix: ["est régulière", "est régulière s'il est cadre", "n'est pas respectée : il faut 5 jours ouvrables", "n'existe que pour le licenciement économique"], bonne: 2, expl: "L'entretien doit avoir lieu au moins 5 jours ouvrables après la convocation.", niv: 2 },
        { q: "Un salarié détourne volontairement des fichiers clients pour ruiner son employeur. C'est :", choix: ["une faute simple", "une insuffisance professionnelle", "un motif économique", "une faute lourde"], bonne: 3, expl: "La faute lourde suppose l'intention de nuire à l'employeur.", niv: 2 },
        { q: "Une entreprise supprime un poste à cause d'une chute durable de ses commandes. Le motif est :", choix: ["économique", "disciplinaire", "personnel", "une démission"], bonne: 0, expl: "La suppression d'emploi due à des difficultés économiques est un motif économique (article L1233-3).", niv: 2 },
        { q: "Un employeur ouvre un dossier nommé « personnel » sur l'ordinateur d'une salariée, en son absence. Il :", choix: ["exerce son pouvoir de direction", "applique le règlement intérieur", "porte atteinte à sa vie privée", "réalise une rupture conventionnelle"], bonne: 2, expl: "Les fichiers identifiés comme personnels ne peuvent pas être ouverts hors de la présence du salarié (jurisprudence Nikon et suivantes).", niv: 2 },
        { q: "Un salarié critique poliment, sur un réseau social, l'organisation de son service. Il :", choix: ["commet une faute grave", "exerce sa liberté d'expression", "fait grève", "rompt son contrat"], bonne: 1, expl: "Le salarié peut s'exprimer, sauf abus (injure, diffamation, propos excessifs). Une critique mesurée n'est pas fautive.", niv: 2 },
        { q: "Quel élément ne caractérise **pas** une grève ?", choix: ["Un arrêt collectif", "Un arrêt concerté", "Des revendications professionnelles", "Un préavis obligatoire dans le secteur privé"], bonne: 3, expl: "Dans le privé, aucun préavis n'est exigé. Le préavis de 5 jours ne concerne que les services publics.", niv: 2 },
        { q: "Une entreprise impose un code vestimentaire strict à des salariés qui ne voient jamais de clients. Cette règle :", choix: ["est valable, l'employeur dirige", "est sans doute injustifiée et disproportionnée", "est un motif économique", "est obligatoire dès 50 salariés"], bonne: 1, expl: "Article L1121-1 : la restriction doit être justifiée par la tâche et proportionnée au but. Sans contact client, la justification est faible.", niv: 3 },
        { q: "Un licenciement est jugé sans cause réelle et sérieuse. Le salarié obtient :", choix: ["des dommages et intérêts selon le barème", "sa réintégration automatique dans tous les cas", "une indemnité de précarité", "une rupture conventionnelle"], bonne: 0, expl: "Le juge accorde des dommages et intérêts encadrés par le barème. Celui-ci ne s'applique pas si le licenciement est nul (discrimination, harcèlement).", niv: 3 },
        { q: "Pourquoi la rupture conventionnelle est-elle souvent choisie ?", choix: ["Elle est la seule rupture sans procédure", "Elle interdit le versement de toute indemnité au salarié", "Elle évite un conflit et ouvre le droit au chômage", "Elle se passe de l'accord du salarié"], bonne: 2, expl: "Elle sécurise la rupture pour l'employeur et permet au salarié de toucher le chômage, contrairement à la démission.", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-de-10',
      fiche: `## Dans quel cadre et comment entreprendre ?

### Choisir une structure juridique
- L'entrepreneur choisit entre exercer **en son nom propre** (entreprise individuelle) ou créer une **société**, qui est une personne distincte de lui.
- Critères : protection du **patrimoine personnel**, nombre de personnes, besoins en **capitaux**, régime fiscal et social, formalités.

### L'entreprise individuelle (EI)
- L'entrepreneur exerce seul, **sans créer de personne morale**. Formalités simples, coût faible. La micro-entreprise est un régime simplifié de l'EI.
- **Le patrimoine** : l'ensemble des biens, droits et dettes d'une personne. En principe, une personne n'a qu'un seul patrimoine (**unicité du patrimoine**).
- Depuis le **15 mai 2022** (loi du 14 février 2022), l'entrepreneur individuel a **automatiquement deux patrimoines** :
  - un **patrimoine professionnel** (biens utiles à l'activité), seul gage des créanciers professionnels ;
  - un **patrimoine personnel**, protégé des dettes professionnelles.
- Limites : l'entrepreneur peut **renoncer** à cette protection au profit d'un créancier (souvent une banque qui l'exige), et elle ne joue pas en cas de fraude ou de dettes fiscales et sociales dans certains cas.
- Sa **résidence principale** est insaisissable par les créanciers professionnels depuis **2015**.
- L'**EIRL** (2010), qui demandait une déclaration, ne peut plus être créée depuis 2022.

### La société
- La **société** est « instituée par deux ou plusieurs personnes qui conviennent par un contrat d'affecter à une entreprise commune des biens ou leur industrie en vue de partager le bénéfice ou de profiter de l'économie qui pourra en résulter » (**article 1832 du Code civil**). Elle peut aussi être créée par **une seule personne** (EURL, SASU).
- Trois éléments : des **apports**, la **volonté de s'associer** (*affectio societatis*) et le **partage des bénéfices et des pertes**.
- Les **apports** :
  - **en numéraire** (argent) ;
  - **en nature** (un local, une machine, un brevet) ;
  - **en industrie** (savoir-faire, travail), qui ne forme pas le capital.
- La société acquiert la **personnalité morale** à son **immatriculation au registre du commerce et des sociétés (RCS)** : elle a son propre nom, son siège, son patrimoine, et peut agir en justice.
- Les **statuts** sont le contrat écrit qui organise la société.
- Dans les sociétés à **responsabilité limitée** (SARL, SAS, SA), les associés ne perdent au plus que leurs **apports** ; dans la SNC, ils sont responsables indéfiniment et solidairement.
- **Organes** : les **dirigeants** gèrent au quotidien (gérant, président) ; les **associés** réunis en **assemblée générale** prennent les grandes décisions (approbation des comptes, modification des statuts).

### Entreprendre autrement
- Les **sociétés coopératives** (SCOP) : les **salariés** détiennent au moins **51 % du capital** et **65 % des droits de vote** ; le principe est « **une personne, une voix** », quel que soit le capital détenu.
- Les **associations** (loi de 1901) : but non lucratif, mais elles peuvent avoir une activité économique.
- La **franchise** : un franchiseur transmet sa marque et son savoir-faire à un franchisé indépendant contre une redevance. Il doit lui remettre un **document d'information précontractuelle** au moins **20 jours** avant la signature (loi Doubin, 1989).
- La **sous-traitance** : une entreprise confie à une autre une partie de sa production.

### Le cadre de la concurrence
- L'entreprise est libre d'entreprendre et de concurrencer les autres (**liberté du commerce et de l'industrie**), mais loyalement.
- **Concurrence déloyale** (sanctionnée sur le fondement de l'article **1240**) :
  - **dénigrement** d'un concurrent ou de ses produits ;
  - **confusion** : imiter un nom, un logo, une présentation pour tromper le client ;
  - **parasitisme** : profiter sans frais des efforts et de la réputation d'autrui ;
  - **désorganisation** d'un concurrent (débauchage massif de salariés).
- **Pratiques anticoncurrentielles**, qui faussent le marché :
  - les **ententes** : des concurrents s'accordent sur les prix ou se répartissent les marchés (article L420-1 du Code de commerce, article 101 du traité sur le fonctionnement de l'Union européenne) ;
  - l'**abus de position dominante** : une entreprise dominante impose des conditions abusives ou évince ses concurrents (article L420-2, article 102 du traité).
- Elles sont sanctionnées par l'**Autorité de la concurrence** en France et la **Commission européenne**, avec des amendes pouvant atteindre **10 % du chiffre d'affaires mondial**.

### À retenir pour le bac
- Comparer EI et société selon la **protection du patrimoine** et le **nombre de personnes**.
- Distinguer concurrence **déloyale** (faute envers un concurrent, article 1240) et pratiques **anticoncurrentielles** (atteinte au marché, Autorité de la concurrence).`,
      cartes: [
        { q: "Qu'est-ce qu'un patrimoine ?", r: "L'ensemble des biens, droits et dettes d'une personne, évaluables en argent." },
        { q: "Que change la loi du 14 février 2022 pour l'entrepreneur individuel ?", r: "Depuis le 15 mai 2022, il a automatiquement deux patrimoines : professionnel et personnel, ce dernier protégé des dettes professionnelles." },
        { q: "La résidence principale de l'entrepreneur individuel est-elle saisissable ?", r: "Non, elle est insaisissable par les créanciers professionnels depuis 2015." },
        { q: "Comment l'article 1832 du Code civil définit-il la société ?", r: "Un contrat par lequel des personnes affectent des biens ou leur industrie à une entreprise commune pour en partager le bénéfice." },
        { q: "Quels sont les trois éléments du contrat de société ?", r: "Des apports, la volonté de s'associer (affectio societatis) et le partage des bénéfices et des pertes." },
        { q: "Quels sont les trois types d'apports ?", r: "En numéraire (argent), en nature (biens) et en industrie (savoir-faire, travail)." },
        { q: "Quand une société acquiert-elle la personnalité morale ?", r: "À son immatriculation au registre du commerce et des sociétés (RCS)." },
        { q: "Que signifie responsabilité limitée aux apports ?", r: "En cas de dettes de la société, l'associé ne peut perdre au plus que ce qu'il a apporté." },
        { q: "Quelle différence entre organes de direction et assemblée générale ?", r: "Les dirigeants gèrent au quotidien ; l'assemblée des associés prend les grandes décisions (comptes, statuts)." },
        { q: "Qu'est-ce qu'une SCOP ?", r: "Une société coopérative où les salariés détiennent au moins 51 % du capital et 65 % des voix, selon le principe une personne, une voix." },
        { q: "Qu'impose la loi Doubin de 1989 au franchiseur ?", r: "Remettre au futur franchisé un document d'information précontractuelle au moins 20 jours avant la signature." },
        { q: "Quelles sont les formes de concurrence déloyale ?", r: "Le dénigrement, la confusion, le parasitisme et la désorganisation d'un concurrent." },
        { q: "Qu'est-ce qu'une entente ?", r: "Un accord entre concurrents pour fixer les prix ou se répartir les marchés. C'est une pratique anticoncurrentielle." },
        { q: "Qu'est-ce qu'un abus de position dominante ?", r: "Une entreprise dominante sur un marché qui en profite pour imposer des conditions abusives ou évincer ses concurrents." },
        { q: "Qui sanctionne les pratiques anticoncurrentielles ?", r: "L'Autorité de la concurrence en France et la Commission européenne, avec des amendes jusqu'à 10 % du chiffre d'affaires mondial." },
      ],
      quiz: [
        { q: "Depuis quand l'entrepreneur individuel a-t-il automatiquement deux patrimoines ?", choix: ["2008", "2015", "2010", "2022"], bonne: 3, expl: "Depuis le 15 mai 2022 (loi du 14 février 2022). 2015 concerne l'insaisissabilité de la résidence principale.", niv: 1 },
        { q: "Quand une société acquiert-elle la personnalité morale ?", choix: ["À la signature des statuts", "Au premier bénéfice", "À son immatriculation au RCS", "À l'embauche du premier salarié"], bonne: 2, expl: "Elle naît juridiquement à son immatriculation au registre du commerce et des sociétés.", niv: 1 },
        { q: "Un associé apporte son savoir-faire de cuisinier. C'est un apport :", choix: ["en industrie", "en numéraire", "en nature", "en capital"], bonne: 0, expl: "L'apport en industrie (travail, savoir-faire) ne forme pas le capital social.", niv: 1 },
        { q: "Dans une SCOP, les salariés détiennent au moins :", choix: ["25 % du capital", "51 % du capital", "40 % du capital", "33 % du capital"], bonne: 1, expl: "Au moins 51 % du capital et 65 % des droits de vote, avec le principe une personne, une voix.", niv: 1 },
        { q: "Une boulangère en entreprise individuelle ne peut plus payer son fournisseur de farine. Que peut-il saisir ?", choix: ["Tous ses biens sans exception", "Uniquement les biens de son patrimoine professionnel", "Sa résidence principale en priorité", "Rien du tout"], bonne: 1, expl: "Depuis 2022, le créancier professionnel n'a pour gage que le patrimoine professionnel, sauf renonciation de l'entrepreneur.", niv: 2 },
        { q: "Trois associés d'une SARL ont apporté 10 000 € chacun. La société fait faillite avec 200 000 € de dettes. Chaque associé perd au plus :", choix: ["10 000 €", "66 667 €", "200 000 €", "30 000 €"], bonne: 0, expl: "La responsabilité est limitée aux apports : chacun perd au plus ses 10 000 €.", niv: 2 },
        { q: "Un restaurant copie le nom et le logo d'un restaurant voisin célèbre. C'est :", choix: ["un abus de position dominante", "une entente", "de la concurrence déloyale par confusion", "une franchise"], bonne: 2, expl: "Créer une confusion dans l'esprit des clients est un acte de concurrence déloyale (article 1240).", niv: 2 },
        { q: "Trois fabricants de lessive s'accordent secrètement sur leurs prix. Il s'agit :", choix: ["d'une sous-traitance", "de parasitisme", "d'un apport en nature", "d'une entente"], bonne: 3, expl: "Un accord entre concurrents sur les prix est une entente, interdite (article L420-1, article 101 du traité).", niv: 2 },
        { q: "Quel élément ne fait **pas** partie du contrat de société (article 1832) ?", choix: ["L'embauche d'un salarié", "Le partage des bénéfices", "La volonté de s'associer", "Les apports"], bonne: 0, expl: "Apports, affectio societatis et partage des résultats suffisent. Une société peut ne pas avoir de salarié.", niv: 2 },
        { q: "Un créateur veut lancer seul une activité risquée avec des investisseurs plus tard. Quel choix est le plus adapté ?", choix: ["Une entreprise individuelle", "Une association", "Une SASU", "Une société en nom collectif"], bonne: 2, expl: "La SASU limite la responsabilité aux apports, peut être créée seul et accueillir ensuite d'autres associés.", niv: 3 },
        { q: "Pourquoi la protection automatique du patrimoine personnel a-t-elle des limites en pratique ?", choix: ["La loi l'a supprimée en 2023", "Elle oblige à créer une SCOP", "Elle ne vaut que pour les sociétés", "Les banques demandent souvent à l'entrepreneur d'y renoncer"], bonne: 3, expl: "Pour accorder un prêt, une banque peut exiger une renonciation à la protection sur certains biens.", niv: 3 },
        { q: "Quelle différence entre concurrence déloyale et pratique anticoncurrentielle ?", choix: ["L'une relève du juge pénal, l'autre du tribunal civil", "L'une vise un concurrent, l'autre fausse le marché", "Elles sont identiques", "La seconde ne concerne que les associations"], bonne: 1, expl: "La concurrence déloyale est une faute envers un concurrent (article 1240) ; une pratique anticoncurrentielle (entente, abus) fausse le fonctionnement du marché.", niv: 3 },
      ],
    },
  ],
  methode: [
    { id: 'stmg-de-m1', mat: 'stmg-de', titre: 'Droit : qualifier juridiquement les parties et les faits',
      formules: ['Qualifiez juridiquement les parties, les faits et les dommages.', 'Qualifiez juridiquement les parties et les faits.'],
      vu: ['Bac 2026 Polynésie', 'Bac 2026 Asie', 'Bac 2025 Polynésie'],
      pts: '2 à 3 points sur 10',
      attendu: 'Traduire l\'histoire en mots du droit. Pour chaque partie : personne physique ou morale, et son rôle (victime, auteur, gardien, consommateur, professionnel, employeur, salarié). Pour les faits : la nature juridique (contrat de vente, accident de la circulation, dommage causé par une chose). Pour les dommages : matériel, corporel ou moral. Pas d\'article ni de raisonnement : seulement des qualifications exactes.',
      etapes: ['Lister chaque personne du cas, y compris les sociétés.', 'Pour chacune : personne physique ou morale, puis son rôle juridique.', 'Résumer les faits en une phrase avec le vocabulaire du droit.', 'Classer chaque dommage : matériel, corporel, moral.', 'Présenter le tout sous forme de liste claire.'],
      mots: ['personne physique', 'personne morale', 'victime', 'auteur du dommage', 'gardien', 'consommateur', 'professionnel', 'dommage matériel', 'dommage corporel', 'dommage moral'],
      pieges: ['Raconter l\'histoire au lieu de la qualifier.', 'Oublier qu\'une société est une personne morale.', 'Oublier le dommage moral.', 'Commencer à argumenter : ce n\'est pas demandé ici.'],
      cas: 'Cas fictif : Inès, 19 ans, circule à vélo. Un pot de fleurs tombe du balcon de M. Faure et la blesse au bras. Son vélo est détruit et elle est choquée.',
      question: 'Qualifiez juridiquement les parties, les faits et les dommages.',
      modele: 'Parties : Inès est une personne physique, victime. M. Faure est une personne physique, gardien du pot de fleurs et auteur présumé du dommage. Faits : un dommage causé par le fait d\'une chose (le pot de fleurs), en dehors de tout contrat : il s\'agit de responsabilité extracontractuelle. Dommages : un dommage corporel (bras blessé), un dommage matériel (vélo détruit) et un dommage moral (choc subi).',
      grille: ['Chaque partie est personne physique ou morale', 'Le rôle juridique de chaque partie est donné', 'Les faits sont qualifiés avec les mots du droit', 'Les trois types de dommages sont identifiés'] },
    { id: 'stmg-de-m2', mat: 'stmg-de', titre: 'Droit : construire l\'argumentation d\'une partie',
      formules: ['Développez l\'argumentation juridique que peut avancer X pour obtenir réparation.', 'Présentez les arguments juridiques que peut lui opposer Y.', 'Développez l\'argumentation juridique qui pourrait lui être opposée.'],
      vu: ['Bac 2026 Polynésie', 'Bac 2026 Asie', 'Bac 2025 Polynésie'],
      pts: '3 à 4 points sur 10 pour chaque argumentation',
      attendu: 'Un raisonnement en trois temps (le syllogisme juridique) : la règle de droit avec son article, les faits du cas qui correspondent à chaque condition, puis la solution. Pour la partie adverse, chercher ce qui manque (une condition non remplie) ou une cause d\'exonération (force majeure, faute de la victime, fait d\'un tiers).',
      etapes: ['Annoncer le problème juridique : X peut-il obtenir réparation de Y ?', 'Majeure : énoncer la règle et l\'article (par exemple l\'article 1243 du Code civil pour un animal).', 'Lister les conditions de la règle.', 'Mineure : vérifier chaque condition avec les faits précis du cas.', 'Conclusion : dire clairement ce que X peut obtenir.', 'Pour la partie adverse : chercher une condition qui manque ou une cause d\'exonération, et la prouver avec les faits.'],
      mots: ['en l\'espèce', 'or', 'donc', 'conditions', 'lien de causalité', 'cause d\'exonération', 'force majeure', 'faute de la victime'],
      pieges: ['Citer un article sans dire ses conditions.', 'Sauter une condition (souvent le lien de causalité).', 'Ne pas conclure.', 'Pour la défense, inventer des faits qui ne sont pas dans le cas.'],
      cas: 'Cas fictif : Lucas, 15 ans, tire la queue du chien de Mme Roche, qui le mord à la main. Ses parents demandent réparation à Mme Roche.',
      question: 'Développez l\'argumentation des parents de Lucas, puis celle que peut leur opposer Mme Roche.',
      modele: 'Parents de Lucas : selon l\'article 1243 du Code civil, le propriétaire d\'un animal répond du dommage que l\'animal a causé, sans qu\'une faute soit nécessaire. Il faut un dommage, le fait d\'un animal et un lien de causalité. En l\'espèce, Lucas a une blessure à la main (dommage corporel), causée par la morsure du chien de Mme Roche, qui en est propriétaire. Donc Mme Roche doit réparer. Mme Roche : la faute de la victime peut réduire ou supprimer la responsabilité. Or Lucas a tiré la queue du chien, ce qui a provoqué la morsure. Mme Roche peut donc demander que son obligation de réparer soit réduite, voire écartée si cette faute est la seule cause du dommage.',
      grille: ['La règle et l\'article sont cités', 'Chaque condition est vérifiée avec les faits', 'Une conclusion claire pour la victime', 'Une cause d\'exonération est trouvée dans les faits', 'Une conclusion pour la partie adverse'] },
    { id: 'stmg-de-m3', mat: 'stmg-de', titre: 'Droit : la question de réflexion',
      formules: ['Pourquoi … ?', 'Dans quelle mesure le droit permet-il de … ?', 'Après avoir rappelé …, vous répondrez à la question suivante à l\'aide de l\'annexe et de vos connaissances.'],
      vu: ['Bac 2026 Polynésie : « Pourquoi existe-t-il plusieurs régimes de responsabilité civile ? »', 'Bac 2026 Asie : protection des consommateurs par le droit', 'Bac 2025 Polynésie : « Pourquoi le législateur a-t-il prévu des causes d\'exonération ? »'],
      pts: '3 à 4 points sur 10',
      attendu: 'Une réponse rédigée et structurée qui ne se limite pas au cas : une courte introduction qui définit les mots clés, deux idées organisées avec des règles précises (articles, lois) et des exemples, et une phrase de conclusion qui répond. Pour « Dans quelle mesure », il faut une nuance : le droit protège, mais avec des limites.',
      etapes: ['Définir les mots clés de la question.', 'Chercher deux idées : pour « Pourquoi », deux raisons ; pour « Dans quelle mesure », un oui puis un mais.', 'Illustrer chaque idée par une règle précise (article, loi, date) et un exemple.', 'Utiliser l\'annexe si elle est donnée, en la citant.', 'Conclure en une phrase qui répond à la question.'],
      mots: ['protéger', 'partie faible', 'équilibre', 'sécurité juridique', 'indemnisation', 'limites'],
      pieges: ['Refaire le cas pratique au lieu de répondre en général.', 'Une liste de mots sans phrases.', 'Oublier la nuance dans une question « Dans quelle mesure ».', 'Ne pas utiliser l\'annexe.'],
      cas: 'Question : « Pourquoi le droit protège-t-il le cyberconsommateur ? »',
      question: 'Rédigez une réponse structurée à cette question.',
      modele: 'Un cyberconsommateur est une personne qui achète en ligne pour ses besoins personnels à un professionnel. Le droit le protège d\'abord parce qu\'il est en position de faiblesse : il ne voit pas le produit et ne connaît pas le vendeur. Le Code de la consommation impose donc au professionnel une obligation d\'information sur le produit, le prix et l\'identité du vendeur, et le principe du double clic l\'oblige à vérifier sa commande avant de la confirmer. Ensuite, le droit veut lui permettre de revenir sur un achat fait vite et à distance : il dispose d\'un droit de rétractation de 14 jours sans motif (article L221-18), sauf pour des biens personnalisés. Enfin, les clauses abusives sont réputées non écrites. Ainsi, le droit rééquilibre une relation inégale pour donner confiance dans le commerce en ligne.',
      grille: ['Les mots clés sont définis', 'Au moins deux idées distinctes', 'Des règles précises (articles, délais)', 'Une conclusion qui répond'] },
    { id: 'stmg-de-m4', mat: 'stmg-de', titre: 'Économie : expliquer un lien, distinguer, présenter',
      formules: ['Expliquez le lien entre … et …', 'Distinguez … et …', 'Présentez les avantages recherchés par…', 'Présentez les types d\'instruments de … et leurs actions.', 'Classez les agents économiques selon…'],
      vu: ['Bac 2026 Polynésie : lien entre déficit public et dette publique ; avantages de l\'investissement public', 'Bac 2025 Polynésie : politiques active et passive de l\'emploi', 'Bac 2026 Asie : instruments de la politique environnementale'],
      pts: '2 à 3 points sur 10',
      attendu: 'Une réponse courte mais complète : définir chaque notion, puis montrer le mécanisme (A entraîne B, parce que…) ou la différence, avec un exemple ou un chiffre tiré des documents. Le correcteur valorise les définitions exactes et l\'usage des annexes.',
      etapes: ['Définir chaque notion de la question.', 'Pour un lien : écrire la chaîne « A, donc B, parce que… ». Pour une distinction : « A est…, alors que B est… ». Pour une présentation : une idée par type ou avantage.', 'Ajouter un exemple ou un chiffre des annexes, en citant l\'annexe.', 'Finir par une phrase qui répond directement.'],
      mots: ['définition', 'mécanisme', 'entraîne', 'alors que', 'selon l\'annexe', 'par exemple'],
      pieges: ['Ne pas définir les notions (la cause la plus fréquente de points perdus).', 'Répondre en un mot ou une liste.', 'Recopier l\'annexe sans l\'expliquer.', 'Inverser la cause et l\'effet.'],
      cas: 'Question : expliquez le lien entre le déficit public et la dette publique. Donnée fictive : déficit de 5 % du PIB pendant plusieurs années.',
      question: 'Rédigez la réponse.',
      modele: 'Le déficit public est la situation où, sur une année, les dépenses des administrations publiques dépassent leurs recettes. La dette publique est le total des sommes empruntées et non encore remboursées par l\'État, les collectivités locales et la Sécurité sociale. Pour financer un déficit, l\'État emprunte : chaque déficit s\'ajoute donc à la dette. Avec un déficit de 5 % du PIB chaque année, la dette augmente d\'année en année. De plus, la dette fait payer des intérêts, qui augmentent les dépenses et donc le déficit suivant : c\'est l\'effet boule de neige.',
      grille: ['Le déficit public est défini', 'La dette publique est définie', 'Le mécanisme est expliqué (le déficit se finance par l\'emprunt)', 'Un chiffre ou un exemple est utilisé'] },
    { id: 'stmg-de-m5', mat: 'stmg-de', titre: 'Économie : commenter une évolution chiffrée',
      formules: ['Commentez l\'évolution de … entre … et …', 'Commentez l\'évolution des composantes du PIB.'],
      vu: ['Bac 2026 Polynésie : composantes du PIB entre 2023 et 2024', 'Bac 2026 Asie : empreinte carbone de 1990 à 2023'],
      pts: '2 à 3 points sur 10',
      attendu: 'Décrire la tendance générale, la chiffrer avec les bons mots (pourcentage, points de pourcentage, multiplié par), comparer les éléments entre eux, puis proposer une explication avec ses connaissances. Le correcteur attend des chiffres précis et la source.',
      etapes: ['Présenter le document : source, date, unité.', 'Dire la tendance générale en une phrase.', 'Donner les chiffres clés : le plus fort, le plus faible, ce qui baisse.', 'Comparer : quel élément tire la croissance, lequel la freine.', 'Expliquer avec une connaissance du cours.'],
      mots: ['augmente de … %', 'diminue de … %', 'points de pourcentage', 'tendance', 'contribue', 'tandis que', 'selon l\'INSEE'],
      pieges: ['Paraphraser sans un seul chiffre.', 'Confondre « % » et « points de pourcentage ».', 'Oublier les éléments qui baissent.', 'Ne pas expliquer.'],
      cas: 'Données de l\'INSEE entre 2023 et 2024 : PIB +1,2 % ; consommation des ménages +1,0 % ; consommation des administrations +1,3 % ; investissement −1,1 % (entreprises −2,2 %, ménages −5,4 %, administrations +4,8 %) ; exportations +2,5 % ; importations −1,2 %.',
      question: 'Commentez l\'évolution des composantes du PIB entre 2023 et 2024.',
      modele: 'Selon l\'INSEE, le PIB français augmente de 1,2 % en volume entre 2023 et 2024 : la croissance est positive mais faible. Elle est portée par la consommation, celle des ménages (+1,0 %) et surtout celle des administrations publiques (+1,3 %), et par le commerce extérieur : les exportations progressent de 2,5 % tandis que les importations reculent de 1,2 %. En revanche, l\'investissement total baisse de 1,1 % : l\'investissement des ménages chute de 5,4 % et celui des entreprises de 2,2 %, seul l\'investissement public progresse (+4,8 %). Ce recul s\'explique notamment par la hausse des taux d\'intérêt décidée par la BCE pour lutter contre l\'inflation, qui renchérit les crédits immobiliers et les emprunts des entreprises.',
      grille: ['La source et la tendance générale sont données', 'Les chiffres sont cités avec le bon vocabulaire', 'Les composantes en hausse et en baisse sont comparées', 'Une explication tirée du cours'] },
    { id: 'stmg-de-m6', mat: 'stmg-de', titre: 'Économie : rédiger l\'argumentation',
      formules: ['Rédigez une argumentation pour répondre à la question suivante : …'],
      vu: ['Bac 2026 Polynésie : « Les dépenses publiques favorisent-elles la croissance économique française ? »', 'Bac 2026 Asie : « L\'intervention de l\'État est-elle efficace pour assurer la transition écologique ? »', 'Bac 2025 Polynésie : « Les politiques de lutte contre le chômage permettent-elles de réduire les inégalités sur le marché du travail ? »'],
      pts: '4 à 5 points sur 10',
      attendu: 'Un texte structuré : une introduction (définitions, contexte, question reformulée), deux parties avec un oui puis un mais (ou deux aspects), chacune avec des arguments expliqués et appuyés sur les annexes et le cours, et une conclusion qui répond clairement. Le correcteur valorise les définitions, l\'usage des annexes et la nuance.',
      etapes: ['Définir les mots clés de la question.', 'Chercher dans les annexes les arguments pour et contre.', 'Partie 1 : deux arguments qui vont dans le sens de la question, chacun expliqué et chiffré.', 'Partie 2 : deux limites ou contre-arguments, expliqués et chiffrés.', 'Conclure en répondant : oui, mais à certaines conditions.'],
      mots: ['d\'une part', 'd\'autre part', 'cependant', 'en effet', 'selon l\'annexe', 'ainsi', 'dans une certaine mesure'],
      pieges: ['Un catalogue d\'idées sans mécanismes.', 'Pas de définitions.', 'Ignorer les annexes.', 'Aucune conclusion, ou une conclusion qui ne répond pas.', 'Contresens : confondre politique de relance et politique de rigueur.'],
      cas: 'Question : « Les dépenses publiques favorisent-elles la croissance économique française ? » Annexes fictives : hausse de l\'investissement public, dette publique supérieure à 110 % du PIB.',
      question: 'Rédigez le plan détaillé avec les arguments principaux.',
      modele: 'Introduction : les dépenses publiques sont les dépenses des administrations publiques (État, collectivités, Sécurité sociale) ; la croissance est la hausse durable du PIB. I. Oui, elles soutiennent la croissance : la consommation publique et les prestations sociales soutiennent la demande (stabilisateurs automatiques) ; l\'investissement public (infrastructures, recherche, éducation) a un effet multiplicateur et améliore la productivité à long terme. II. Mais leurs effets sont limités : financées par le déficit, elles alourdissent la dette, dont les intérêts réduisent les marges ; une hausse des impôts pour les financer peut freiner la consommation et l\'investissement privés (effet d\'éviction) ; les règles européennes limitent le déficit à 3 % du PIB. Conclusion : les dépenses publiques favorisent la croissance surtout quand ce sont des investissements utiles, mais leur financement doit rester soutenable.',
      grille: ['Les mots clés sont définis', 'Deux parties qui se répondent', 'Des mécanismes expliqués (multiplicateur, éviction)', 'Les annexes sont utilisées', 'Une conclusion qui répond'] },
  ],
  sujets: [
    { id: 'stmg-de-s1', matiere: 'stmg-de', titre: 'Sujet d\'entraînement inventé : la société Rivéo et la question de l\'emploi', duree: 240,
      enonce: `## Sujet d'entraînement (entièrement inventé)

Les personnes, entreprises et chiffres de ce sujet sont fictifs. Durée : 4 heures. Les deux parties sont indépendantes et notées chacune sur 10 points.

## Partie juridique (10 points)

**Situation.** La société Rivéo, SAS qui loue des trottinettes électriques à Nantes, emploie 40 salariés. Le 2 mars, M. Benali, 35 ans, loue une trottinette par l'application de Rivéo. Les conditions générales, acceptées d'un clic, contiennent une clause : « Rivéo n'est responsable d'aucun dommage, quelle qu'en soit la cause. » Au bout de 300 mètres, le frein avant cède. M. Benali chute : poignet cassé, téléphone détruit, trois semaines d'arrêt de travail. Une expertise montre que le frein n'avait pas été révisé depuis huit mois, alors que le constructeur impose une révision tous les deux mois.

Par ailleurs, Mme Lefort, technicienne chez Rivéo en CDD depuis 26 mois pour « accroissement temporaire d'activité », se voit annoncer que son contrat ne sera pas renouvelé.

**Annexe 1 (extrait).** Article 1231-1 du Code civil : « Le débiteur est condamné, s'il y a lieu, au paiement de dommages et intérêts soit à raison de l'inexécution de l'obligation, soit à raison du retard dans l'exécution, s'il ne justifie pas que l'exécution a été empêchée par la force majeure. »

**Annexe 2 (extrait).** Article L212-1 du Code de la consommation : dans les contrats conclus entre professionnels et consommateurs, sont abusives les clauses qui ont pour objet ou pour effet de créer, au détriment du consommateur, un déséquilibre significatif entre les droits et obligations des parties au contrat.

**Travail à faire.**
1. Qualifiez juridiquement les parties, les faits et les dommages de la situation de M. Benali. (2 points)
2. Développez l'argumentation juridique que peut avancer M. Benali pour obtenir réparation, puis celle que peut lui opposer Rivéo. (3,5 points)
3. Mme Lefort peut-elle contester la fin de son contrat ? Justifiez. (1,5 point)
4. À l'aide des annexes et de vos connaissances, répondez à la question : pourquoi le droit encadre-t-il les clauses des contrats de consommation ? (1,5 point)

Orthographe et expression : 1,5 point.

## Partie économique (10 points)

**Annexe 3 (données fictives) : taux de chômage d'un pays imaginaire, en % de la population active.**
- Ensemble : 9,1 % en 2015 ; 7,4 % en 2025.
- 15-24 ans : 24,0 % en 2015 ; 17,8 % en 2025.
- Sans diplôme : 17,5 % en 2015 ; 15,9 % en 2025.
- Diplômés du supérieur : 5,8 % en 2015 ; 4,9 % en 2025.

**Annexe 4 (texte fictif).** « Depuis dix ans, le gouvernement a multiplié les contrats en alternance, financé des formations pour les demandeurs d'emploi et réduit les cotisations sur les bas salaires. Le chômage a baissé, mais l'écart reste fort entre diplômés et non-diplômés. Dans le même temps, les dépenses d'indemnisation ont été revues à la baisse. »

**Travail à faire.**
1. Distinguez politique active et politique passive de l'emploi, en vous appuyant sur l'annexe 4. (2,5 points)
2. Commentez l'évolution du chômage entre 2015 et 2025 selon l'annexe 3. (2,5 points)
3. Rédigez une argumentation pour répondre à la question : « Les politiques de l'emploi permettent-elles de réduire les inégalités face au chômage ? » (4,5 points)

Orthographe et expression : 0,5 point.`,
      corrige: `## Corrigé

### Partie juridique

**1. Qualification (2 points).** M. Benali est une personne physique, consommateur, victime. La société Rivéo est une personne morale (SAS), professionnel, débiteur d'une obligation de sécurité. Faits : un contrat de location conclu en ligne entre un professionnel et un consommateur, mal exécuté (trottinette défectueuse). Dommages : corporel (poignet cassé), matériel (téléphone détruit, perte de revenus pendant l'arrêt de travail), moral (douleur, choc).

**2. Argumentations (3,5 points).**
- M. Benali : selon l'article 1231-1 du Code civil (annexe 1), le débiteur qui n'exécute pas ou exécute mal son obligation doit des dommages et intérêts. Il faut un contrat, une inexécution, un dommage et un lien de causalité. En l'espèce, un contrat de location existe ; Rivéo devait fournir une trottinette sûre et ne l'a pas fait (frein non révisé depuis huit mois au lieu de deux) ; M. Benali a subi des dommages corporel, matériel et moral, causés directement par la rupture du frein. Il peut donc obtenir réparation. La clause « Rivéo n'est responsable d'aucun dommage » crée un déséquilibre significatif au détriment du consommateur : c'est une clause abusive (annexe 2), réputée non écrite ; elle est de toute façon sans effet pour un dommage corporel.
- Rivéo : seule la force majeure exonère le débiteur (annexe 1). Mais une panne de frein due à un défaut d'entretien n'est ni imprévisible, ni irrésistible, ni extérieure. Rivéo pourrait chercher une faute de M. Benali (vitesse excessive), mais le cas n'en mentionne aucune. Son argumentation a donc peu de chances d'aboutir.

**3. Le CDD de Mme Lefort (1,5 point).** Un CDD pour accroissement temporaire d'activité ne peut pas, en principe, dépasser 18 mois renouvellements compris, ni pourvoir durablement un emploi lié à l'activité normale. Avec 26 mois, la limite est dépassée : Mme Lefort peut demander au conseil de prud'hommes la requalification en CDI. La fin du contrat s'analyserait alors comme un licenciement sans cause réelle et sérieuse.

**4. Question de réflexion (1,5 point).** Le consommateur est la partie faible : il ne rédige pas le contrat et l'accepte souvent d'un clic. Le droit rééquilibre la relation : les clauses abusives sont réputées non écrites (annexe 2), le professionnel doit informer le consommateur, et un droit de rétractation de 14 jours existe pour les achats à distance. Le but est de protéger le consommateur et de maintenir la confiance dans les échanges.

### Partie économique

**1. Politique active et passive (2,5 points).** Une politique passive de l'emploi vise à atténuer les conséquences du chômage, sans chercher à créer des emplois : indemnisation des chômeurs, préretraites. L'annexe 4 évoque les dépenses d'indemnisation, revues à la baisse. Une politique active vise à augmenter le nombre d'emplois ou l'employabilité : alternance, formation des demandeurs d'emploi, baisse des cotisations sur les bas salaires (qui réduit le coût du travail peu qualifié), toutes citées dans l'annexe 4.

**2. Commentaire (2,5 points).** Selon l'annexe 3, le chômage baisse entre 2015 et 2025, de 9,1 % à 7,4 % de la population active, soit 1,7 point de moins. Il recule pour toutes les catégories, surtout pour les 15-24 ans (−6,2 points, de 24,0 % à 17,8 %). Mais les écarts restent forts : en 2025, une personne sans diplôme a un taux de chômage plus de trois fois supérieur à celui d'un diplômé du supérieur (15,9 % contre 4,9 %), et le chômage des sans-diplôme ne baisse que de 1,6 point. Le diplôme protège du chômage, car il signale des compétences recherchées par les employeurs.

**3. Argumentation (4,5 points).**
- Introduction : les politiques de l'emploi sont les mesures publiques qui agissent sur le marché du travail ; les inégalités face au chômage sont les écarts de risque selon l'âge, le diplôme ou le sexe.
- I. Elles réduisent certaines inégalités : l'alternance et les aides à l'embauche des jeunes ont fait reculer leur chômage (annexe 3 : −6,2 points) ; la formation améliore l'employabilité des moins qualifiés ; la baisse des cotisations sur les bas salaires favorise l'embauche des peu qualifiés.
- II. Mais elles ont des limites : l'écart entre diplômés et non-diplômés reste très fort (annexe 3) ; les formations profitent souvent davantage à ceux qui sont déjà qualifiés ; la baisse de l'indemnisation peut fragiliser les chômeurs les plus pauvres ; une partie du chômage dépend de la conjoncture plus que des politiques de l'emploi.
- Conclusion : les politiques de l'emploi réduisent le chômage et une partie des inégalités, surtout pour les jeunes, mais elles ne suffisent pas à effacer l'avantage du diplôme : l'éducation reste le levier principal.`,
      grille: [
        { c: 'Droit, question 1 : qualification complète des parties, des faits et des trois dommages', pts: 2 },
        { c: 'Droit, question 2 : syllogisme de la victime (article, conditions, faits, clause abusive) et défense de Rivéo (force majeure écartée)', pts: 3.5 },
        { c: 'Droit, question 3 : durée maximale du CDD et requalification en CDI', pts: 1.5 },
        { c: 'Droit, question 4 : réponse structurée qui utilise les annexes', pts: 1.5 },
        { c: 'Droit : orthographe et expression', pts: 1.5 },
        { c: 'Économie, question 1 : définitions et exemples tirés de l\'annexe 4', pts: 2.5 },
        { c: 'Économie, question 2 : chiffres exacts, points de pourcentage, comparaison et explication', pts: 2.5 },
        { c: 'Économie, question 3 : argumentation en deux parties, annexes utilisées, conclusion qui répond', pts: 4.5 },
        { c: 'Économie : orthographe et expression', pts: 0.5 },
      ] },
  ],
};
