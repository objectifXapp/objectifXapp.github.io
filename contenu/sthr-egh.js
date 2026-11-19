// Économie et gestion hôtelière (spécialité, terminale STHR). Sources : voir matiere.sources.
// Programme : arrêté publié au BO n° 11 du 17 mars 2016 (annexe 8), partie terminale : 3 thèmes, 12 questions. Un chapitre par question, dans l'ordre du programme.
// Épreuve : étude de cas écrite de 4 heures, coefficient 16, en trois ou quatre dossiers indépendants (sujets de métropole 2025 et 2026).
// Les normes chiffrées du secteur citées ici sont celles données dans les annexes des sujets officiels ; elles varient selon les établissements.
export default {
  matiere: {
    id: 'sthr-egh',
    nom: 'Économie et gestion hôtelière',
    voie: 'sthr',
    epreuve: { type: 'ecrit', duree: 240, coef: 16, quand: 'juin', note: 'Étude de cas de 4 heures sur une entreprise hôtelière réelle ou inspirée du réel : trois ou quatre dossiers indépendants, une dizaine d\'annexes et des annexes à compléter et à rendre avec la copie. Barème en points indiqué sur le sujet (100 points en 2025 et 2026), ramené sur 20. À partir de la session 2027, 2 points sur 20 sont réservés à l\'orthographe et à la syntaxe (note de service du 11 septembre 2026). Calculatrice autorisée.' },
    sources: [
      'https://eduscol.education.fr/document/24109/download (programme d\'économie et gestion hôtelière, BO n° 11 du 17 mars 2016, annexe 8)',
      'https://www.education.gouv.fr/bo/16/Hebdo11/MENE1604565A.htm',
      'https://www.education.gouv.fr/bo/19/Special1/MENE1901600A.htm',
      'https://www.education.gouv.fr/bo/2026/Special4/MENE2622664N (épreuves STHR à partir de la session 2027 : 2 points sur 20 pour la langue)',
      'Sujet de métropole 2026, 16 juin 2026 (26-HREGHME1) : « Le Swing »',
      'Sujet de métropole 2025 (25-HREGHME1) : « Le Val d\'Allier »',
      'Sujet de Polynésie 2025 (25-HREGHPO1)',
      'https://www.atout-france.fr (classement des hébergements) et https://www.service-public.fr (licences, affichage des prix, TVA)',
    ],
    chapitres: [
      { id: 'sthr-egh-1', t: 'Qu\'est-ce qu\'une entreprise hôtelière performante ?', theme: 'Performance et entreprise hôtelière' },
      { id: 'sthr-egh-2', t: 'L\'État agit-il sur la performance de l\'entreprise hôtelière ?', theme: 'Performance et entreprise hôtelière' },
      { id: 'sthr-egh-3', t: 'Les flux touristiques ont-ils une incidence sur la performance de l\'entreprise hôtelière ?', theme: 'Performance et entreprise hôtelière' },
      { id: 'sthr-egh-4', t: 'Comment mesurer la performance d\'exploitation ?', theme: 'Performance économique' },
      { id: 'sthr-egh-5', t: 'Qu\'apporte l\'analyse des coûts à la prise de décision ?', theme: 'Performance économique' },
      { id: 'sthr-egh-6', t: 'Comment l\'entreprise hôtelière gère-t-elle sa trésorerie pour faire face à ses dépenses courantes ?', theme: 'Performance économique' },
      { id: 'sthr-egh-7', t: 'Comment l\'entreprise hôtelière fixe-t-elle ses prix ?', theme: 'Performance économique' },
      { id: 'sthr-egh-8', t: 'La performance passe-t-elle par une communication maîtrisée ?', theme: 'Performance économique' },
      { id: 'sthr-egh-9', t: 'La performance de l\'entreprise hôtelière repose-t-elle sur la fidélisation des clients ?', theme: 'Performance économique' },
      { id: 'sthr-egh-10', t: 'Comment l\'entreprise hôtelière mobilise-t-elle ses ressources humaines ?', theme: 'Performance sociale et environnementale' },
      { id: 'sthr-egh-11', t: 'Comment l\'entreprise gère-t-elle la masse salariale ?', theme: 'Performance sociale et environnementale' },
      { id: 'sthr-egh-12', t: 'L\'entreprise hôtelière peut-elle contribuer à une croissance soutenable ?', theme: 'Performance sociale et environnementale' },
    ],
  },
  paquets: [
    {
      chapitre: 'sthr-egh-1',
      fiche: `## Qu'est-ce qu'une entreprise hôtelière performante ?

### La notion de performance
- Être **performant**, c'est atteindre ses objectifs en utilisant bien ses ressources.
- **Efficacité** : atteindre l'objectif fixé (remplir l'hôtel à 75 %).
- **Efficience** : l'atteindre avec le moins de ressources possible (le même taux de remplissage avec moins d'heures de travail ou moins de dépenses de publicité). On peut être efficace sans être efficient.
- **Pérennité** : la performance doit durer. Une entreprise qui gagne beaucoup une saison mais épuise ses salariés ou abîme son image met sa survie en danger.

### Les trois dimensions de la performance
- **Économique** : chiffre d'affaires, rentabilité, profitabilité, part de marché, remplissage. Elle se mesure par des indicateurs de gestion (chapitres suivants).
- **Sociale** : conditions de travail, bien-être, formation, faible absentéisme, faible rotation du personnel, bon climat social.
- **Environnementale** : économies d'énergie et d'eau, réduction et tri des déchets, achats locaux et de saison, lutte contre le gaspillage alimentaire.
- Les trois sont liées : une équipe stable et motivée sert mieux les clients, ce qui améliore la fidélité et le chiffre d'affaires ; moins de gaspillage réduit le coût des matières.

### La responsabilité sociétale des entreprises (RSE)
- La **RSE** consiste à intégrer volontairement des préoccupations sociales et environnementales dans son activité et dans ses relations avec les **parties prenantes** (clients, salariés, fournisseurs, habitants, collectivités).
- Elle se traduit par des engagements, des labels (par exemple l'Écolabel européen ou la Clef verte pour l'hébergement) et une communication sur ces actions.
- Avantages : image, fidélité des clients sensibles à ces sujets, attractivité pour les salariés, économies. Risque : l'**écoblanchiment**, c'est-à-dire communiquer sur des actions qui n'existent pas ou presque, ce qui détruit la confiance.

### Les leviers de la performance : l'innovation
- **Innovation de produit** (de service) : une offre nouvelle, comme un bar à cocktails sans alcool, un brunch, des chambres familiales, un simulateur de golf au restaurant.
- **Innovation de procédé** : une nouvelle façon de produire ou de servir, comme l'enregistrement en ligne, la borne de commande, la cuisson sous vide.
- **Innovation organisationnelle** : une nouvelle organisation du travail, comme la polyvalence, les plannings partagés, la semaine de quatre jours.
- **Innovation environnementale** : réduire l'impact de l'activité, comme une chaudière à bois, la récupération de chaleur, le compostage.
- L'innovation permet de se **différencier** des concurrents, d'attirer de nouvelles clientèles et de réduire certains coûts. Elle demande un investissement et comporte un risque d'échec.

### Une performance qui dépend du contexte
- La performance dépend d'éléments **internes** (compétences, équipements, organisation, emplacement) et **externes** (concurrence, conjoncture, météo, réglementation, flux touristiques).
- L'entreprise s'adapte : elle observe son environnement, repère ses forces et faiblesses, et ajuste son offre.
- Dans l'étude de cas, on montre la performance d'un établissement en s'appuyant sur des chiffres tirés des annexes et en couvrant, si possible, les trois dimensions.

### À retenir pour le bac
- Efficacité : atteindre l'objectif ; efficience : l'atteindre avec peu de ressources.
- Trois dimensions : économique, sociale, environnementale, liées entre elles.
- RSE : intégrer volontairement le social et l'environnement, avec les parties prenantes.
- Innovation de produit, de procédé, organisationnelle, environnementale.
- La performance doit être durable (pérennité).`,
      cartes: [
        { q: "Qu'est-ce que la performance d'une entreprise ?", r: "Atteindre ses objectifs en utilisant bien ses ressources, de façon durable." },
        { q: "Efficacité ou efficience ?", r: "Efficacité : atteindre l'objectif. Efficience : l'atteindre avec le moins de ressources possible." },
        { q: "Qu'est-ce que la pérennité ?", r: "La capacité de l'entreprise à durer : sa performance ne doit pas épuiser ses salariés, ses clients ou son environnement." },
        { q: "Quelles sont les trois dimensions de la performance ?", r: "Économique, sociale et environnementale." },
        { q: "Donnez deux indicateurs de performance sociale.", r: "Le taux d'absentéisme et le taux de rotation du personnel ; aussi le nombre d'heures de formation, les accidents du travail." },
        { q: "Donnez deux actions de performance environnementale d'un restaurant.", r: "Réduire le gaspillage alimentaire, trier et composter les déchets, acheter local et de saison, économiser l'énergie." },
        { q: "Qu'est-ce que la RSE ?", r: "La responsabilité sociétale des entreprises : intégrer volontairement le social et l'environnement dans l'activité et les relations avec les parties prenantes." },
        { q: "Qu'est-ce qu'une partie prenante ?", r: "Un acteur concerné par l'activité de l'entreprise : clients, salariés, fournisseurs, banques, habitants, collectivités." },
        { q: "Qu'est-ce que l'écoblanchiment ?", r: "Communiquer sur un engagement écologique qui n'existe pas ou presque : cela détruit la confiance des clients." },
        { q: "Qu'est-ce qu'une innovation de produit ?", r: "Une offre nouvelle ou améliorée : un brunch, des chambres familiales, une carte sans alcool." },
        { q: "Qu'est-ce qu'une innovation de procédé ?", r: "Une nouvelle façon de produire ou de servir : enregistrement en ligne, borne de commande, cuisson sous vide." },
        { q: "Qu'est-ce qu'une innovation organisationnelle ?", r: "Une nouvelle organisation du travail : polyvalence, plannings partagés, semaine de quatre jours." },
        { q: "Pourquoi les trois dimensions de la performance sont-elles liées ?", r: "Une équipe stable sert mieux les clients, ce qui accroît la fidélité et le chiffre d'affaires ; moins de gaspillage réduit les coûts." },
      ],
      quiz: [
        { q: "Un hôtel atteint son objectif de 75 % d'occupation. Il est :", choix: ["efficace", "efficient", "pérenne", "certifié"], bonne: 0, expl: "Atteindre l'objectif, c'est l'efficacité ; l'efficience porte sur les ressources utilisées.", niv: 1 },
        { q: "Le taux de rotation du personnel mesure surtout la performance :", choix: ["économique", "sociale", "environnementale", "commerciale"], bonne: 1, expl: "Les départs et arrivées de salariés renseignent sur la performance sociale.", niv: 1 },
        { q: "L'installation d'une chaudière à bois dans un hôtel est une innovation :", choix: ["de produit", "organisationnelle", "commerciale", "environnementale"], bonne: 3, expl: "Elle réduit l'impact de l'activité sur l'environnement.", niv: 1 },
        { q: "La RSE est une démarche :", choix: ["imposée à chaque entreprise par un label unique", "réservée aux grandes chaînes", "volontaire qui intègre le social et l'environnement à l'activité", "qui ne concerne que les actionnaires"], bonne: 2, expl: "La RSE est volontaire et tient compte de toutes les parties prenantes.", niv: 1 },
        { q: "Un restaurant garde le même nombre de couverts avec 10 % d'heures de travail en moins. Il a amélioré son :", choix: ["efficacité", "chiffre d'affaires", "image de marque", "efficience"], bonne: 3, expl: "Même résultat avec moins de ressources : c'est un gain d'efficience.", niv: 2 },
        { q: "La mise en place de la polyvalence entre salle et réception est une innovation :", choix: ["de produit", "de procédé de production", "organisationnelle", "environnementale"], bonne: 2, expl: "Elle change l'organisation du travail.", niv: 2 },
        { q: "Un hôtel affiche « 100 % écologique » sans aucune action réelle. Il risque :", choix: ["d'obtenir automatiquement l'Écolabel européen pour ses chambres et son restaurant", "d'être accusé d'écoblanchiment et de perdre la confiance des clients", "d'améliorer sa performance sociale", "une baisse de ses charges de personnel"], bonne: 1, expl: "Communiquer sur un engagement inexistant est de l'écoblanchiment.", niv: 2 },
        { q: "Quel élément n'est **pas** externe à l'entreprise hôtelière ?", choix: ["La conjoncture économique", "La compétence de son équipe", "L'arrivée d'un concurrent", "Une nouvelle réglementation"], bonne: 1, expl: "Les compétences de l'équipe sont une ressource interne ; les trois autres viennent de l'environnement.", niv: 2 },
        { q: "Pourquoi réduire le gaspillage alimentaire améliore-t-il aussi la performance économique ?", choix: ["Parce qu'il supprime la TVA", "Parce qu'il augmente automatiquement les prix de vente de la carte", "Parce qu'il baisse le coût des matières consommées", "Parce qu'il réduit le nombre de clients"], bonne: 2, expl: "Moins de denrées jetées, c'est un coût matières plus faible pour le même chiffre d'affaires.", niv: 2 },
        { q: "Un hôtel très rentable connaît 40 % de départs de salariés par an. Que conclure ?", choix: ["Sa performance sociale fragilise sa pérennité", "Sa performance est complète", "Il est sûrement efficient", "Il doit baisser ses prix"], bonne: 0, expl: "Une forte rotation coûte en recrutement et en qualité de service : la performance n'est pas durable.", niv: 3 },
        { q: "Quel risque principal accompagne une innovation de produit ?", choix: ["Un investissement qui peut ne pas trouver sa clientèle", "La perte obligatoire de clients fidèles", "L'interdiction de communiquer", "La hausse des taux de change pour les clients venant de la zone euro"], bonne: 0, expl: "L'innovation demande un investissement et peut échouer si la demande n'est pas au rendez-vous.", niv: 3 },
        { q: "Pour montrer la performance globale d'un établissement dans une étude de cas, il faut :", choix: ["citer le seul chiffre d'affaires", "donner son avis personnel sans chiffre", "recopier les annexes", "s'appuyer sur des chiffres des annexes et couvrir les trois dimensions"], bonne: 3, expl: "Le correcteur attend une analyse chiffrée, économique, sociale et environnementale.", niv: 3 },
      ],
    },
    {
      chapitre: 'sthr-egh-2',
      fiche: `## L'État agit-il sur la performance de l'entreprise hôtelière ?

### Le rôle de l'État
- **Fonctions régaliennes** : ce que seul l'État assure, comme la justice, la police, la défense et la diplomatie. Elles garantissent la sécurité, indispensable au tourisme.
- **Services non marchands** : fournis gratuitement ou presque (éducation, routes, entretien des sites, formation des futurs professionnels en lycée hôtelier).
- **Redistribution** : prélever des impôts et des cotisations pour verser des prestations et réduire les inégalités.
- **Réglementation** : fixer des règles pour protéger les clients, les salariés et la concurrence.
- **Protection sociale** : la Sécurité sociale (maladie, retraite, famille, accidents du travail, autonomie) et l'assurance chômage protègent contre les risques de la vie. Elles sont financées surtout par des **cotisations sociales**, que l'employeur verse en plus du salaire.

### Pourquoi l'État intervient dans une économie de marché
- Dans une **économie de marché**, les prix se forment par la rencontre de l'offre et de la demande. Mais le marché a des **imperfections** :
- **Asymétrie d'information** : le client ne connaît pas la qualité d'un hôtel avant d'y dormir. D'où le **classement** et l'**affichage des prix**.
- **Externalités** : effets d'une activité sur les autres sans compensation (bruit d'un bar, déchets, pollution).
- **Concurrence imparfaite** : des entreprises peuvent s'entendre sur les prix au détriment des clients.
- Sur le **marché du travail** : chômage, salaires trop bas, conditions de travail difficiles, d'où un salaire minimum et un droit du travail.
- La **régulation économique et sociale** corrige ces imperfections.

### Les politiques économiques
- **Politiques conjoncturelles** : agir à court terme sur l'activité. Relance (baisse d'impôts, hausse des dépenses publiques) quand l'activité ralentit ; rigueur pour réduire le déficit.
- **Politiques structurelles** : transformer l'économie à long terme (formation, infrastructures, simplification administrative, aide à l'innovation).
- **Politique budgétaire** : utiliser les recettes (impôts) et les dépenses publiques. Exemples pour le secteur : taux de **TVA** réduit à **10 %** pour l'hébergement et la restauration (les boissons alcoolisées restent à 20 %), aides pendant une crise, financement de la promotion touristique.
- Ces politiques créent des **opportunités** (aides, baisse de charges, clientèle soutenue) ou des **contraintes** (hausse d'un impôt, nouvelle norme coûteuse) pour l'entreprise.

### La réglementation du secteur
- **Liberté du commerce et de l'industrie** : chacun peut créer et exploiter une entreprise, principe posé en **1791**. Elle a des limites fixées par la loi.
- **Débits de boissons** : vendre de l'alcool exige une **licence** adaptée et un **permis d'exploitation** obtenu après une formation.
- **Hygiène** : au moins une personne formée à l'hygiène alimentaire dans les restaurants commerciaux, respect des règles sanitaires, contrôles.
- **Classement des hôtels** : de 1 à 5 étoiles, **volontaire**, attribué pour 5 ans par Atout France après la visite d'un organisme accrédité.
- **Sécurité et accessibilité** : règles contre l'incendie et accès des personnes handicapées dans les établissements recevant du public.
- **Information des clients** : affichage des prix et des allergènes.
- **Clause de non-concurrence** : dans un contrat de travail ou de cession, elle interdit de s'installer en concurrent ; elle doit être limitée dans le temps et l'espace, justifiée et, pour un salarié, compensée financièrement.

### Effets sur la performance
- Positifs : confiance des clients (classement, hygiène), concurrence loyale, aides, formation de la main-d'œuvre.
- Négatifs : coûts de mise aux normes, démarches administratives, impôts et cotisations qui pèsent sur les marges.

### À retenir pour le bac
- Rôles de l'État : régalien, services non marchands, redistribution, réglementation, protection sociale.
- Imperfections du marché : asymétrie d'information, externalités, concurrence imparfaite.
- Politiques conjoncturelles (court terme) et structurelles (long terme) ; politique budgétaire (TVA à 10 %).
- Réglementation : licence et permis d'exploitation, hygiène, classement volontaire, sécurité, affichage.
- L'action de l'État est à la fois une contrainte et une opportunité.`,
      cartes: [
        { q: "Qu'est-ce qu'une fonction régalienne ?", r: "Une mission que seul l'État assure : justice, police, défense, diplomatie." },
        { q: "Qu'est-ce qu'un service non marchand ?", r: "Un service fourni gratuitement ou presque par les administrations : éducation, routes, entretien des sites." },
        { q: "Qu'est-ce que la redistribution ?", r: "Prélever impôts et cotisations pour verser des prestations et réduire les inégalités." },
        { q: "Qu'est-ce que l'asymétrie d'information ?", r: "Une partie sait plus que l'autre : le client ignore la qualité d'un hôtel avant d'y séjourner." },
        { q: "Qu'est-ce qu'une externalité ?", r: "L'effet d'une activité sur d'autres personnes sans compensation : bruit d'un bar, déchets." },
        { q: "Politique conjoncturelle ou structurelle ?", r: "Conjoncturelle : agir à court terme sur l'activité (relance, rigueur). Structurelle : transformer l'économie à long terme (formation, infrastructures)." },
        { q: "Qu'est-ce que la politique budgétaire ?", r: "L'utilisation des impôts et des dépenses publiques pour agir sur l'économie." },
        { q: "Quel taux de TVA pour l'hébergement et la restauration ?", r: "10 % ; les boissons alcoolisées restent à 20 %." },
        { q: "Que faut-il pour vendre de l'alcool dans un établissement ?", r: "Une licence adaptée aux boissons vendues et un permis d'exploitation obtenu après une formation." },
        { q: "Comment fonctionne le classement des hôtels ?", r: "De 1 à 5 étoiles, volontaire, attribué pour 5 ans par Atout France après la visite d'un organisme accrédité." },
        { q: "Qu'est-ce que la liberté du commerce et de l'industrie ?", r: "Le droit de créer et d'exploiter une entreprise, posé en 1791, dans les limites fixées par la loi." },
        { q: "À quelles conditions une clause de non-concurrence est-elle valable ?", r: "Limitée dans le temps et l'espace, justifiée par un intérêt légitime et, pour un salarié, compensée financièrement." },
        { q: "Comment est financée la protection sociale ?", r: "Surtout par les cotisations sociales versées par les employeurs et les salariés, et par des impôts." },
      ],
      quiz: [
        { q: "La justice et la police sont des fonctions :", choix: ["de redistribution", "marchandes", "régaliennes", "conjoncturelles"], bonne: 2, expl: "Ce sont des missions que seul l'État assure : les fonctions régaliennes.", niv: 1 },
        { q: "Le taux de TVA appliqué à une nuit d'hôtel est de :", choix: ["10 %", "5,5 %", "20 %", "0 %"], bonne: 0, expl: "L'hébergement hôtelier relève du taux de 10 % ; 20 % est le taux normal.", niv: 1 },
        { q: "Le classement d'un hôtel en étoiles est :", choix: ["obligatoire et permanent", "réservé aux chaînes", "attribué par la mairie chaque année", "volontaire et valable 5 ans"], bonne: 3, expl: "Le classement est demandé volontairement et vaut 5 ans.", niv: 1 },
        { q: "Une baisse d'impôts pour relancer rapidement l'activité est une politique :", choix: ["structurelle", "monétaire", "régalienne", "conjoncturelle"], bonne: 3, expl: "Agir à court terme sur l'activité, c'est une politique conjoncturelle.", niv: 1 },
        { q: "Le bruit d'un bar de nuit qui gêne les voisins est :", choix: ["une asymétrie d'information", "une externalité négative", "un service non marchand", "une politique budgétaire"], bonne: 1, expl: "L'activité touche des tiers sans compensation : c'est une externalité négative.", niv: 2 },
        { q: "Pourquoi le classement hôtelier corrige-t-il une imperfection du marché ?", choix: ["Il finance les hôtels", "Il fixe le prix maximum des chambres dans chaque catégorie", "Il supprime la concurrence", "Il réduit l'asymétrie d'information sur la qualité"], bonne: 3, expl: "Le client connaît à l'avance le niveau de confort : l'information est mieux partagée.", niv: 2 },
        { q: "Un restaurateur veut servir du vin à table. Que lui faut-il ?", choix: ["Une licence adaptée et un permis d'exploitation", "Un classement en étoiles", "Une autorisation écrite de l'office de tourisme de la commune", "Une clause de non-concurrence"], bonne: 0, expl: "La vente d'alcool exige une licence adaptée et un permis d'exploitation.", niv: 2 },
        { q: "Financer la formation des futurs cuisiniers sur dix ans relève d'une politique :", choix: ["conjoncturelle de relance", "de rigueur", "structurelle", "régalienne"], bonne: 2, expl: "Elle transforme l'économie à long terme : c'est une politique structurelle.", niv: 2 },
        { q: "Quelle mesure ne relève **pas** de la réglementation du secteur ?", choix: ["L'affichage des allergènes", "Le choix du menu du jour par le chef", "Les règles de sécurité incendie", "La formation à l'hygiène alimentaire"], bonne: 1, expl: "Le menu du jour est un choix de gestion libre ; les trois autres sont des obligations.", niv: 2 },
        { q: "Une clause interdit à un ancien chef de travailler pour un concurrent partout en France pendant 20 ans, sans compensation. Elle est :", choix: ["probablement non valable, car excessive et non compensée", "valable, car le contrat l'a prévue", "obligatoire dans la restauration", "valable dès lors que le chef l'a acceptée oralement lors de son embauche"], bonne: 0, expl: "Une clause de non-concurrence doit être limitée dans le temps et l'espace et compensée.", niv: 3 },
        { q: "Une nouvelle norme d'accessibilité oblige un hôtel à installer un ascenseur. L'effet sur sa performance est :", choix: ["une baisse de la TVA", "nul, car l'État rembourse la totalité des travaux de mise aux normes", "un coût à court terme, mais une clientèle élargie", "la perte de son classement"], bonne: 2, expl: "La réglementation est une contrainte coûteuse mais aussi une opportunité commerciale.", niv: 3 },
        { q: "Pourquoi le maintien d'un taux de TVA réduit soutient-il la performance des restaurants ?", choix: ["Il supprime les cotisations sociales des salariés de la restauration", "Il permet des prix TTC plus bas ou des marges plus fortes", "Il augmente le prix des matières", "Il remplace le classement"], bonne: 1, expl: "Moins de TVA sur le prix payé laisse de la place pour baisser le prix ou garder plus de marge.", niv: 3 },
      ],
    },
    {
      chapitre: 'sthr-egh-3',
      fiche: `## Les flux touristiques ont-ils une incidence sur la performance de l'entreprise hôtelière ?

### Le tourisme, un échange international
- Un **touriste** passe au moins une nuit hors de son environnement habituel, pour moins d'un an (loisirs, affaires, visite à la famille). Un **excursionniste** ne dort pas sur place.
- Les **flux touristiques** sont les déplacements de touristes entre pays et régions. Ils dépendent du revenu, des prix, des transports, de la sécurité, de la météo et des modes.
- Le tourisme international est un échange de **services** : quand un touriste étranger dort à Paris, la France **exporte** un service ; quand un Français part en vacances à l'étranger, la France **importe**.
- La France est la **première destination mondiale** en nombre d'arrivées de touristes internationaux.

### La balance des transactions courantes
- Elle enregistre les échanges de biens, de services et de revenus d'un pays avec le reste du monde.
- Le poste **voyages** y compare les dépenses des touristes étrangers en France (recettes) et celles des Français à l'étranger (dépenses). Le solde voyages de la France est habituellement **excédentaire** : le tourisme rapporte des devises.

### Le taux de change
- Le **taux de change** est le prix d'une monnaie exprimé dans une autre : 1 € = 1,10 dollar, par exemple.
- **Conversion** : un menu à 44 € coûte 44 x 1,10 = 48,40 dollars à un Américain. Si l'euro monte à 1 € = 1,25 dollar, le même menu coûte 55 dollars.
- Une **baisse de l'euro** rend la France moins chère pour les touristes hors zone euro : elle attire des clients (américains, britanniques, japonais). Une **hausse de l'euro** a l'effet inverse et rend aussi les voyages des Européens à l'étranger moins chers.
- Pour les clients de la zone euro (Allemands, Italiens, Belges…), le taux de change ne joue pas.

### La compétitivité
- **Compétitivité-prix** : attirer grâce à des prix plus bas que les destinations concurrentes.
- **Compétitivité hors prix** : attirer grâce à la qualité, au patrimoine, à la gastronomie, à l'accueil, aux langues parlées, aux labels, à la sécurité.
- Le tourisme est très concurrentiel : l'entreprise hôtelière doit soigner les deux.

### L'interculturalité
- Accueillir des clients de cultures différentes demande de s'adapter : langues parlées, habitudes de repas et horaires, régimes alimentaires (religieux, végétarien, sans gluten), codes de politesse, attentes de confort.
- Une équipe formée à l'interculturalité améliore la satisfaction, les avis en ligne et la fidélité de ces clientèles.

### Les organisations du tourisme
- L'**Organisation mondiale du tourisme** (appelée ONU Tourisme) est l'institution des Nations unies chargée du tourisme : statistiques, conseils, promotion d'un tourisme responsable.
- **Atout France** est l'agence de développement touristique de la France : promotion de la destination à l'étranger, accompagnement des professionnels, gestion du classement des hébergements.
- Les comités régionaux et départementaux du tourisme et les **offices de tourisme** agissent au niveau local.

### Effets sur la performance de l'entreprise
- Plus de touristes étrangers : meilleur taux d'occupation, prix moyens plus élevés, moins de dépendance à la saison locale.
- Mais aussi : sensibilité aux crises (pandémie, attentats, conflits), aux variations du taux de change et du prix des transports, besoin d'adapter le personnel et l'offre.

### À retenir pour le bac
- Touriste : au moins une nuit, moins d'un an ; excursionniste : sans nuit.
- Tourisme étranger en France = exportation de services ; solde voyages habituellement excédentaire.
- Euro en baisse : la France devient moins chère pour les clients hors zone euro.
- Compétitivité-prix et hors prix ; interculturalité.
- ONU Tourisme au niveau mondial, Atout France au niveau national.`,
      cartes: [
        { q: "Qu'est-ce qu'un touriste ?", r: "Une personne qui passe au moins une nuit hors de son environnement habituel, pour moins d'un an." },
        { q: "Qu'est-ce qu'un excursionniste ?", r: "Un visiteur qui ne passe pas la nuit sur place." },
        { q: "Pourquoi le tourisme étranger en France est-il une exportation ?", r: "La France vend un service (nuit, repas) à un non-résident : des devises entrent dans le pays." },
        { q: "Qu'est-ce que le poste voyages de la balance des transactions courantes ?", r: "Il compare les dépenses des touristes étrangers en France et celles des Français à l'étranger." },
        { q: "Qu'est-ce qu'un taux de change ?", r: "Le prix d'une monnaie exprimé dans une autre : 1 € = 1,10 dollar." },
        { q: "Comment convertir un prix en euros en dollars ?", r: "On multiplie par le taux : 44 € x 1,10 = 48,40 dollars si 1 € = 1,10 dollar." },
        { q: "Quel est l'effet d'une baisse de l'euro ?", r: "La France devient moins chère pour les touristes hors zone euro : elle en attire davantage." },
        { q: "Compétitivité-prix ou hors prix ?", r: "Prix : attirer par des prix plus bas. Hors prix : attirer par la qualité, l'accueil, le patrimoine, la gastronomie, les langues." },
        { q: "Qu'est-ce que l'interculturalité en hôtellerie ?", r: "La capacité à accueillir des clients de cultures différentes : langues, horaires, régimes alimentaires, codes de politesse." },
        { q: "Quel est le rôle d'Atout France ?", r: "Promouvoir la destination France à l'étranger, accompagner les professionnels et gérer le classement des hébergements." },
        { q: "Qu'est-ce que l'Organisation mondiale du tourisme ?", r: "L'institution des Nations unies chargée du tourisme (ONU Tourisme) : statistiques, conseils, tourisme responsable." },
        { q: "Quels risques les flux internationaux font-ils courir à l'hôtel ?", r: "Une forte sensibilité aux crises sanitaires ou géopolitiques, aux taux de change et au prix des transports." },
      ],
      quiz: [
        { q: "Une famille dort deux nuits à Lyon pour visiter la ville. Ce sont :", choix: ["des excursionnistes", "des travailleurs frontaliers", "des résidents", "des touristes"], bonne: 3, expl: "Au moins une nuit hors de chez soi, pour moins d'un an : ce sont des touristes.", niv: 1 },
        { q: "Un touriste japonais qui paie son hôtel à Paris correspond, pour la France, à :", choix: ["une importation de services", "une dépense publique", "une subvention", "une exportation de services"], bonne: 3, expl: "La France vend un service à un non-résident : c'est une exportation.", niv: 1 },
        { q: "L'organisme qui gère le classement des hébergements en France est :", choix: ["la Banque de France", "l'Insee", "Atout France", "l'Urssaf"], bonne: 2, expl: "Atout France gère le classement et la promotion de la destination.", niv: 1 },
        { q: "Si 1 € = 1,20 dollar, un menu à 50 € coûte à un Américain :", choix: ["60 dollars", "50 dollars", "41,67 dollars", "55 dollars"], bonne: 0, expl: "50 x 1,20 = 60 dollars ; diviser par le taux donnerait la conversion inverse.", niv: 2 },
        { q: "L'euro passe de 1,10 à 1,30 dollar. Pour les touristes américains, la France devient :", choix: ["aussi chère", "moins chère", "plus chère", "gratuite"], bonne: 2, expl: "Il faut plus de dollars pour obtenir un euro : les prix français augmentent pour eux.", niv: 2 },
        { q: "Pour un client allemand, une baisse de l'euro face au dollar :", choix: ["ne change pas le prix en euros de son séjour en France", "rend la France moins chère, car l'euro perd de la valeur face au dollar", "rend la France plus chère", "supprime la TVA"], bonne: 0, expl: "L'Allemagne est dans la zone euro : il paie en euros, le taux de change ne joue pas.", niv: 2 },
        { q: "Un hôtel forme son personnel à l'anglais et au mandarin. Il améliore sa compétitivité :", choix: ["prix", "hors prix", "fiscale", "monétaire"], bonne: 1, expl: "L'accueil dans la langue du client est un atout hors prix.", niv: 2 },
        { q: "Quel facteur ne relève **pas** de la compétitivité hors prix d'une destination ?", choix: ["La qualité de l'accueil", "Un prix inférieur aux concurrents", "Le patrimoine", "La gastronomie"], bonne: 1, expl: "Un prix plus bas relève de la compétitivité-prix.", niv: 2 },
        { q: "Le solde du poste voyages de la France est habituellement :", choix: ["excédentaire", "déficitaire", "nul", "sans lien avec le tourisme"], bonne: 0, expl: "Les touristes étrangers dépensent davantage en France que les Français à l'étranger.", niv: 2 },
        { q: "Un hôtel dont 70 % des clients viennent des États-Unis est surtout exposé :", choix: ["aux baisses de TVA", "aux variations du taux de change euro-dollar", "aux grèves de ses fournisseurs locaux de produits frais", "au classement de ses concurrents"], bonne: 1, expl: "Sa clientèle paie en dollars à l'origine : une hausse de l'euro peut la faire fuir.", niv: 3 },
        { q: "Pourquoi adapter le petit-déjeuner aux habitudes des clientèles étrangères peut-il améliorer la performance ?", choix: ["Parce que la loi l'impose", "Parce que cela supprime le coût d'achat des produits du petit-déjeuner servis aux clients", "Parce que satisfaction et avis en ligne s'améliorent, ce qui attire et fidélise", "Parce que cela réduit le taux de change"], bonne: 2, expl: "L'interculturalité améliore la satisfaction, donc la fidélité et la réputation.", niv: 3 },
        { q: "Une crise sanitaire mondiale ferme les frontières. Quel établissement souffre le plus ?", choix: ["Une boulangerie de village", "Une cantine scolaire", "Un restaurant de quartier fréquenté surtout par des habitués du voisinage", "Un hôtel parisien très tourné vers la clientèle internationale"], bonne: 3, expl: "Plus un établissement dépend des flux internationaux, plus il est exposé à ce type de crise.", niv: 3 },
      ],
    },
    {
      chapitre: 'sthr-egh-4',
      fiche: `## Comment mesurer la performance d'exploitation ?

### Les soldes intermédiaires de gestion (SIG)
- Ils découpent le compte de résultat en étapes pour comprendre d'où vient le résultat.
- **Excédent brut d'exploitation (EBE)** : ce que l'activité courante dégage avant les amortissements et les frais financiers. Il mesure la capacité de l'exploitation à générer des ressources.
- **Résultat d'exploitation (RE)** : l'EBE après amortissements et provisions ; il mesure la performance de l'activité normale.
- **Résultat courant avant impôt** : le résultat d'exploitation plus ou moins le résultat financier (intérêts des emprunts).

### Le tableau de gestion propre au secteur
- Les sujets utilisent un **tableau de gestion** adapté à l'hôtellerie-restauration, chaque ligne en euros et en **% du CA HT** :
- **Chiffre d'affaires HT** (100 %)
- moins **coût des matières consommées** (nourriture et boissons) = **marge brute**
- moins **charges de personnel** = **marge sur coût principal**
- moins **frais généraux** (énergie, entretien, publicité, assurances…) = **résultat brut d'exploitation (RBE)**
- moins **coûts d'occupation** (loyer, amortissements, intérêts liés aux locaux et équipements) = **résultat courant avant impôt**
- **Coût principal** = coût des matières + charges de personnel : c'est le poste le plus lourd.
- On compare chaque pourcentage aux **normes du secteur** données en annexe (dans un sujet récent : matières 26 à 35 %, personnel 30 à 35 %, frais généraux 10 à 15 % du CA) et à l'année précédente.

### Les indicateurs commerciaux
- **Taux d'occupation** (TO) = chambres louées / chambres disponibles x 100.
- **Prix moyen chambre** (PMC) = CA hébergement HT / chambres louées.
- **RevPAR** (revenu par chambre disponible) = CA hébergement HT / chambres disponibles, soit aussi TO x PMC. Il résume à la fois le remplissage et le prix.
- **Indice de fréquentation** = clients hébergés / chambres louées (nombre moyen de personnes par chambre).
- **Taux de remplissage** du restaurant = couverts servis / capacité en couverts x 100.
- **Ticket moyen** HT = CA restauration HT / couverts servis.
- Exemple : 4 600 chambres louées sur 7 500 disponibles et 299 564 € de CA hébergement : TO = 61,3 % ; PMC = 65,12 € ; RevPAR = 39,94 €.

### Profitabilité et rentabilité
- **Profitabilité** = résultat / chiffre d'affaires : ce que rapporte chaque euro vendu.
- **Rentabilité** = résultat / capitaux investis : ce que rapporte chaque euro investi.

### Budget, écarts et tableau de bord
- Le **budget d'exploitation** prévoit les ventes et les charges de l'année.
- Un **écart** = réalisé - prévu. Pour une recette, un écart positif est **favorable** ; pour une charge, un écart positif est **défavorable**.
- Le **tableau de bord** réunit quelques indicateurs clés, suivis chaque mois et comparés aux objectifs, avec des signaux visuels, pour réagir vite.

### Analyser de façon structurée
- Dans l'étude de cas : constater (chiffres et évolution), comparer (année précédente, normes, objectifs), expliquer (causes trouvées dans les annexes), conclure et proposer des actions.

### À retenir pour le bac
- Tableau de gestion : CA HT, coût matières, marge brute, personnel, marge sur coût principal, frais généraux, RBE, coûts d'occupation, résultat courant.
- TO, PMC, RevPAR, indice de fréquentation, taux de remplissage, ticket moyen.
- Profitabilité = résultat / CA ; rentabilité = résultat / capitaux investis.
- Écart = réalisé - prévu ; favorable ou défavorable selon recette ou charge.
- Toujours justifier les calculs et comparer aux normes.`,
      cartes: [
        { q: "Qu'est-ce que l'EBE ?", r: "L'excédent brut d'exploitation : ce que l'activité courante dégage avant amortissements et frais financiers." },
        { q: "Comment calcule-t-on la marge brute ?", r: "CA HT - coût des matières consommées." },
        { q: "Comment calcule-t-on la marge sur coût principal ?", r: "Marge brute - charges de personnel." },
        { q: "Qu'est-ce que le coût principal ?", r: "Coût des matières consommées + charges de personnel." },
        { q: "Comment obtient-on le RBE dans le tableau de gestion ?", r: "Marge sur coût principal - frais généraux." },
        { q: "Que sont les coûts d'occupation ?", r: "Les coûts liés aux locaux et aux équipements : loyer, amortissements, intérêts d'emprunt, assurances des locaux." },
        { q: "Comment calcule-t-on le taux d'occupation ?", r: "Chambres louées / chambres disponibles x 100." },
        { q: "Comment calcule-t-on le prix moyen chambre ?", r: "CA hébergement HT / nombre de chambres louées." },
        { q: "Qu'est-ce que le RevPAR ?", r: "Le revenu par chambre disponible : CA hébergement HT / chambres disponibles, soit TO x PMC." },
        { q: "Qu'est-ce que l'indice de fréquentation ?", r: "Clients hébergés / chambres louées : le nombre moyen de personnes par chambre." },
        { q: "Comment calcule-t-on le ticket moyen ?", r: "CA restauration HT / nombre de couverts servis." },
        { q: "Profitabilité ou rentabilité ?", r: "Profitabilité = résultat / CA. Rentabilité = résultat / capitaux investis." },
        { q: "Quand un écart est-il favorable ?", r: "Écart = réalisé - prévu : positif sur une recette, ou négatif sur une charge." },
        { q: "Comment analyser un tableau de gestion ?", r: "Constater, comparer (année précédente, normes), expliquer avec les annexes, conclure et proposer." },
      ],
      quiz: [
        { q: "La marge brute se calcule ainsi :", choix: ["CA HT - coût des matières consommées", "CA HT - charges de personnel", "CA TTC - frais généraux", "Résultat - impôt"], bonne: 0, expl: "On retire du CA HT le coût des matières : c'est la marge brute.", niv: 1 },
        { q: "Le coût principal regroupe :", choix: ["les frais généraux et les loyers", "la TVA et les impôts", "le coût des matières et les charges de personnel", "les amortissements et les intérêts des emprunts bancaires"], bonne: 2, expl: "Matières et personnel forment le coût principal, le poste le plus lourd du secteur.", niv: 1 },
        { q: "Le RevPAR se calcule ainsi :", choix: ["CA hébergement HT / chambres louées", "CA hébergement HT / chambres disponibles", "Chambres louées / chambres disponibles", "Clients / chambres louées"], bonne: 1, expl: "Le RevPAR divise le CA par les chambres disponibles ; diviser par les chambres louées donne le PMC.", niv: 1 },
        { q: "Le ticket moyen du restaurant se calcule ainsi :", choix: ["CA restauration HT / couverts servis", "Couverts servis / capacité", "CA total / nombre de salariés", "Coût matières / CA"], bonne: 0, expl: "Le ticket moyen est la dépense moyenne par couvert.", niv: 1 },
        { q: "4 600 chambres louées sur 7 500 disponibles. Le taux d'occupation est d'environ :", choix: ["38,7 %", "61,3 %", "65,0 %", "163,0 %"], bonne: 1, expl: "4 600 / 7 500 x 100 = 61,3 %.", niv: 2 },
        { q: "CA hébergement HT : 299 564 € pour 4 600 chambres louées. Le prix moyen chambre est d'environ :", choix: ["39,94 €", "72,00 €", "65,12 €", "4 600 €"], bonne: 2, expl: "299 564 / 4 600 = 65,12 € ; 39,94 € est le RevPAR (division par les chambres disponibles).", niv: 2 },
        { q: "200 chambres louées accueillent 340 clients. L'indice de fréquentation est de :", choix: ["1,70", "0,59", "1,07", "0,17"], bonne: 0, expl: "340 / 200 = 1,7 personne par chambre en moyenne.", niv: 2 },
        { q: "Charges de personnel prévues : 120 000 € ; réalisées : 131 000 €. L'écart est :", choix: ["+ 11 000 €, favorable", "+ 11 000 €, défavorable", "- 11 000 €, favorable", "nul"], bonne: 1, expl: "Réalisé - prévu = + 11 000 € sur une charge : c'est défavorable.", niv: 2 },
        { q: "Le coût des matières représente 38 % du CA pour une norme de 26 à 35 %. On en conclut :", choix: ["que la norme est fausse", "que le restaurant est très profitable grâce à ses achats bien négociés", "qu'il faut baisser les prix", "que la gestion des achats et des pertes est à surveiller"], bonne: 3, expl: "Un ratio au-dessus de la norme signale des achats chers, du gaspillage ou des prix trop bas.", niv: 2 },
        { q: "Un hôtel a un TO de 80 % et un PMC de 60 € ; un concurrent un TO de 60 % et un PMC de 90 €. Lequel a le meilleur RevPAR ?", choix: ["Le premier, 48 €", "Ils sont égaux", "Le second, 54 €", "On ne peut pas comparer"], bonne: 2, expl: "RevPAR = TO x PMC : 0,8 x 60 = 48 € contre 0,6 x 90 = 54 €.", niv: 3 },
        { q: "Pourquoi le RevPAR est-il souvent préféré au seul taux d'occupation ?", choix: ["Parce qu'il mesure la satisfaction", "Parce qu'il ne dépend pas du nombre de chambres disponibles dans l'hôtel", "Parce qu'il est obligatoire par la loi", "Parce qu'il tient compte à la fois du remplissage et du prix"], bonne: 3, expl: "Remplir en bradant les prix peut faire baisser le RevPAR : il combine les deux.", niv: 3 },
        { q: "Résultat : 60 000 € ; CA : 800 000 € ; capitaux investis : 400 000 €. La profitabilité est de :", choix: ["13,3 %", "15 %", "50 %", "7,5 %"], bonne: 3, expl: "60 000 / 800 000 = 7,5 % ; 15 % est la rentabilité (division par les capitaux).", niv: 3 },
      ],
    },
    {
      chapitre: 'sthr-egh-5',
      fiche: `## Qu'apporte l'analyse des coûts à la prise de décision ?

### Classer les charges
- **Charges variables** : elles varient avec l'activité (matières premières, blanchissage du linge, produits d'accueil, commissions des sites de réservation).
- **Charges fixes** : elles ne varient pas avec l'activité à court terme (loyer, assurances, amortissements, salaires des permanents, abonnements).
- **Charges directes** : rattachées sans calcul à un service (les matières du restaurant, la blanchisserie de l'hébergement).
- **Charges indirectes** : communes à plusieurs services, à répartir (direction, énergie du bâtiment, comptabilité).

### L'amortissement
- Un investissement (four, chaudière, mobilier) sert plusieurs années. L'**amortissement** répartit son coût sur sa **durée d'utilisation**.
- **Amortissement linéaire** : annuité = valeur d'origine / durée. Une chaudière de 60 000 € sur 10 ans donne 6 000 € par an. La première année, on calcule au prorata du temps : achetée le 1er juillet, elle donne 3 000 € la première année.
- La **valeur nette comptable** = valeur d'origine - cumul des amortissements.
- L'amortissement est une **charge** qui diminue le résultat, mais elle ne sort pas d'argent : c'est une charge **calculée**. Il apparaît dans les coûts d'occupation du tableau de gestion.

### Le crédit-bail
- Louer un équipement avec une **option d'achat** à la fin du contrat. Les loyers sont des charges ; l'entreprise n'a pas besoin d'emprunter ni de mobiliser sa trésorerie au départ. En contrepartie, le coût total est souvent plus élevé.

### Le seuil de rentabilité
- **Marge sur coût variable** (MCV) = chiffre d'affaires - charges variables.
- **Taux de MCV** = MCV / CA.
- **Seuil de rentabilité** (SR) = charges fixes / taux de MCV : le chiffre d'affaires à partir duquel l'entreprise ne perd plus d'argent (résultat nul).
- Exemple : CA 400 000 €, charges variables 160 000 €, charges fixes 180 000 €. MCV = 240 000 € ; taux = 60 % ; SR = 180 000 / 0,6 = 300 000 €.
- **Point mort** : la date où le SR est atteint. Avec une activité régulière : SR / CA x 12 = 9 mois, soit fin septembre.
- Le SR peut aussi s'exprimer en **quantité** : nombre de couverts ou de chambres à vendre pour couvrir les charges fixes (charges fixes / marge sur coût variable unitaire).
- **Marge de sécurité** = CA - SR : de combien les ventes peuvent baisser avant la perte.

### Le contrôle nourriture et boissons
- **Coût des matières consommées** = stock initial + achats - stock final.
- **Ratio nourriture** (ou boissons) = coût des matières consommées / CA correspondant x 100.
- La **procédure de contrôle** : fiches techniques (quantités et coût de chaque plat), réception contrôlée, inventaires réguliers, comparaison du coût matière **théorique** (d'après les ventes et les fiches) et **réel** (d'après les stocks).
- Un écart révèle du gaspillage, des portions trop grosses, des vols, des erreurs de commande ou une hausse des prix d'achat.
- Le **coefficient multiplicateur** relie coût matière et prix : prix de vente HT = coût matière x coefficient. Un coefficient de 3,5 correspond à un ratio matière d'environ 29 %.

### Décider grâce aux coûts
- Accepter un banquet à prix réduit ? Oui s'il couvre ses coûts variables et apporte une marge qui aide à payer les charges fixes.
- Investir ? Comparer le gain attendu (ventes, économies d'énergie) à l'amortissement et aux frais.
- Ouvrir le lundi ? Comparer la marge sur coût variable attendue aux charges supplémentaires (personnel, énergie).

### À retenir pour le bac
- Charges fixes ou variables ; directes ou indirectes.
- Amortissement linéaire = valeur / durée, au prorata la première année ; charge calculée sans sortie d'argent.
- SR = charges fixes / taux de MCV ; point mort = SR / CA x 12.
- Coût matières consommées = SI + achats - SF ; ratio = coût matières / CA.
- Contrôle : fiches techniques, inventaires, coût théorique et coût réel.`,
      cartes: [
        { q: "Charge fixe ou charge variable ?", r: "Variable : elle suit l'activité (matières, blanchissage). Fixe : elle ne change pas à court terme (loyer, assurance, amortissement)." },
        { q: "Charge directe ou indirecte ?", r: "Directe : rattachée sans calcul à un service. Indirecte : commune à plusieurs services, à répartir (direction, énergie)." },
        { q: "Comment calcule-t-on un amortissement linéaire ?", r: "Annuité = valeur d'origine / durée d'utilisation, au prorata du temps la première année." },
        { q: "Qu'est-ce que la valeur nette comptable ?", r: "Valeur d'origine - cumul des amortissements." },
        { q: "Pourquoi l'amortissement est-il une charge calculée ?", r: "Il diminue le résultat mais ne provoque aucune sortie d'argent." },
        { q: "Qu'est-ce que le crédit-bail ?", r: "La location d'un équipement avec option d'achat à la fin : pas d'emprunt au départ, mais un coût total souvent plus élevé." },
        { q: "Qu'est-ce que la marge sur coût variable ?", r: "Chiffre d'affaires - charges variables." },
        { q: "Comment calcule-t-on le seuil de rentabilité ?", r: "Charges fixes / taux de marge sur coût variable : le CA pour lequel le résultat est nul." },
        { q: "Qu'est-ce que le point mort ?", r: "La date à laquelle le seuil de rentabilité est atteint : SR / CA x 12 mois si l'activité est régulière." },
        { q: "Qu'est-ce que la marge de sécurité ?", r: "CA - seuil de rentabilité : la baisse de ventes possible avant de faire une perte." },
        { q: "Comment calcule-t-on le coût des matières consommées ?", r: "Stock initial + achats - stock final." },
        { q: "Qu'est-ce que le ratio nourriture ?", r: "Coût des matières (nourriture) consommées / CA nourriture x 100." },
        { q: "Qu'est-ce qu'une fiche technique ?", r: "La fiche d'un plat avec les quantités et le coût de chaque ingrédient : elle sert à fixer le prix et à contrôler les coûts." },
        { q: "Quand accepter une commande à prix réduit ?", r: "Si elle couvre ses coûts variables et dégage une marge qui aide à payer les charges fixes." },
      ],
      quiz: [
        { q: "Le loyer du restaurant est une charge :", choix: ["variable", "fixe", "calculée", "directe de la cuisine"], bonne: 1, expl: "Le loyer ne varie pas avec le nombre de couverts : c'est une charge fixe.", niv: 1 },
        { q: "Une chaudière de 60 000 € est amortie en linéaire sur 10 ans. L'annuité pleine est de :", choix: ["8 000 €", "6 000 €", "10 000 €", "7 500 €"], bonne: 1, expl: "60 000 / 10 = 6 000 € par an.", niv: 1 },
        { q: "Le coût des matières consommées se calcule ainsi :", choix: ["CA - marge brute - achats", "achats - ventes", "stock final - stock initial", "stock initial + achats - stock final"], bonne: 3, expl: "On ajoute les achats au stock de départ et on retire ce qui reste.", niv: 1 },
        { q: "Le seuil de rentabilité est le chiffre d'affaires pour lequel :", choix: ["les charges variables sont nulles", "le résultat est maximal", "le résultat est nul", "la TVA est payée"], bonne: 2, expl: "Au seuil, la marge sur coût variable couvre exactement les charges fixes.", niv: 1 },
        { q: "CA 400 000 € ; charges variables 160 000 € ; charges fixes 180 000 €. Le seuil de rentabilité est :", choix: ["360 000 €", "450 000 €", "340 000 €", "300 000 €"], bonne: 3, expl: "MCV = 240 000 €, taux = 60 % ; SR = 180 000 / 0,6 = 300 000 €.", niv: 2 },
        { q: "Avec ce même exemple et une activité régulière, le point mort est atteint au bout de :", choix: ["6 mois", "7,5 mois", "9 mois", "8 mois"], bonne: 2, expl: "300 000 / 400 000 x 12 = 9 mois, soit fin septembre.", niv: 2 },
        { q: "Un four acheté 24 000 € le 1er juillet, amorti sur 8 ans en linéaire. L'amortissement de la première année est :", choix: ["6 000 €", "3 000 €", "1 500 €", "12 000 €"], bonne: 2, expl: "Annuité pleine 3 000 € ; la première année compte 6 mois : 3 000 x 6/12 = 1 500 €.", niv: 2 },
        { q: "Stock initial 4 000 € ; achats 26 000 € ; stock final 5 000 € ; CA nourriture 80 000 €. Le ratio nourriture est :", choix: ["31,25 %", "32,5 %", "37,5 %", "25 %"], bonne: 0, expl: "Coût consommé = 4 000 + 26 000 - 5 000 = 25 000 € ; 25 000 / 80 000 = 31,25 %.", niv: 2 },
        { q: "Le coût matière réel dépasse nettement le coût théorique calculé avec les fiches techniques. Une cause possible est :", choix: ["une hausse du taux d'occupation des chambres de l'hôtel", "du gaspillage ou des portions trop grosses", "une baisse de la TVA", "un amortissement trop faible"], bonne: 1, expl: "L'écart entre réel et théorique signale pertes, portions, vols ou erreurs de commande.", niv: 2 },
        { q: "Pourquoi l'amortissement diminue-t-il le résultat sans réduire la trésorerie de l'année ?", choix: ["Parce qu'il est compté dans la TVA", "Parce qu'il est payé par la banque", "Parce qu'il est remboursé par l'État à la fin de chaque exercice comptable", "Parce que c'est une charge calculée, sans sortie d'argent"], bonne: 3, expl: "L'argent est sorti au moment de l'achat ; l'amortissement répartit ce coût sur les années.", niv: 3 },
        { q: "Un groupe propose un banquet à 25 € par personne. Coût variable : 14 € par personne. Le restaurant est vide ce soir-là. Faut-il accepter ?", choix: ["Oui, chaque couvert apporte 11 € de marge pour couvrir les charges fixes", "Non, le prix proposé est inférieur au prix de la carte et ferait baisser la marge", "Non, chaque couvert doit couvrir l'ensemble des charges", "Oui, car les charges fixes disparaissent"], bonne: 0, expl: "Les charges fixes sont dues de toute façon ; une marge positive sur coût variable améliore le résultat.", niv: 3 },
        { q: "Charges fixes : 33 000 € ; marge sur coût variable par couvert : 22 €. Combien de couverts faut-il vendre pour atteindre le seuil ?", choix: ["1 500", "1 000", "2 200", "3 300"], bonne: 0, expl: "33 000 / 22 = 1 500 couverts.", niv: 3 },
      ],
    },
    {
      chapitre: 'sthr-egh-6',
      fiche: `## Comment l'entreprise hôtelière gère-t-elle sa trésorerie pour faire face à ses dépenses courantes ?

### La trésorerie
- La **trésorerie** est l'argent disponible : caisse et comptes bancaires. Elle sert à payer les fournisseurs, les salaires, les cotisations, les impôts et les remboursements d'emprunt **à la date prévue**.
- Une entreprise peut être **bénéficiaire et manquer de trésorerie** : les ventes et les dépenses ne tombent pas au même moment, surtout dans une activité **saisonnière**.

### Encaissements et décaissements
- **Encaissement** : une entrée d'argent, au moment où le client paie (pas au moment de la vente si un délai est accordé, par exemple à une entreprise cliente ou à une agence).
- **Décaissement** : une sortie d'argent, au moment du paiement (achats payés à 30 jours, salaires, loyer, emprunt, TVA, cotisations).
- Les montants sont en **TTC** quand la TVA est payée ou encaissée.
- Les amortissements ne sont **pas** des décaissements.

### Le budget de TVA
- L'entreprise **collecte** la TVA sur ses ventes et **récupère** (déduit) la TVA payée sur ses achats.
- **TVA à décaisser** = TVA collectée - TVA déductible. Elle est en général versée à l'État **le mois suivant**.
- Si la TVA déductible dépasse la TVA collectée (gros investissement, mois creux), il y a un **crédit de TVA**, qui se reporte ou se fait rembourser.
- Exemple : ventes de juin 50 000 € HT au taux de 10 %, soit 5 000 € collectés ; achats 20 000 € HT au taux de 20 %, soit 4 000 € déductibles ; TVA à décaisser 1 000 €, payée en juillet.

### Le budget de trésorerie
- Il prévoit, **mois par mois** : trésorerie au début + encaissements - décaissements = trésorerie à la fin, qui devient la trésorerie du début du mois suivant.
- Il permet d'**anticiper** les mois difficiles et d'agir avant.

### Faire face à un déficit
- **Découvert bancaire** autorisé ou **facilité de caisse** : solution courte, mais coûteuse en intérêts.
- **Négocier** : obtenir des délais auprès des fournisseurs, demander des acomptes aux clients (réservations de groupes, mariages).
- **Reporter** une dépense non urgente ou un investissement.
- Financer un investissement par **emprunt** ou **crédit-bail** plutôt que sur la trésorerie.
- **Apport** des associés.
- En cas d'**excédent** : placer l'argent, rembourser un emprunt, investir.

### Améliorer la trésorerie au quotidien
- Encaisser vite (paiement à la réservation, acomptes, relance des impayés), payer à l'échéance prévue, limiter les stocks inutiles, lisser l'activité hors saison (séminaires, offres d'hiver).

### À retenir pour le bac
- Trésorerie : l'argent disponible ; bénéfice n'est pas trésorerie.
- Encaissements et décaissements au moment du paiement, en TTC.
- TVA à décaisser = collectée - déductible, payée le mois suivant.
- Trésorerie fin = début + encaissements - décaissements.
- Déficit : découvert, délais, acomptes, report, emprunt, apport.`,
      cartes: [
        { q: "Qu'est-ce que la trésorerie ?", r: "L'argent disponible tout de suite : caisse et comptes bancaires." },
        { q: "Pourquoi une entreprise bénéficiaire peut-elle manquer de trésorerie ?", r: "Les encaissements et les décaissements ne tombent pas au même moment, surtout en activité saisonnière." },
        { q: "Qu'est-ce qu'un encaissement ?", r: "Une entrée d'argent, enregistrée au moment où le client paie." },
        { q: "Qu'est-ce qu'un décaissement ?", r: "Une sortie d'argent, enregistrée au moment du paiement : fournisseurs, salaires, loyer, TVA, emprunt." },
        { q: "L'amortissement est-il un décaissement ?", r: "Non : c'est une charge calculée, sans sortie d'argent." },
        { q: "Comment calcule-t-on la TVA à décaisser ?", r: "TVA collectée sur les ventes - TVA déductible sur les achats." },
        { q: "Quand la TVA à décaisser est-elle payée ?", r: "En général le mois suivant celui des opérations." },
        { q: "Qu'est-ce qu'un crédit de TVA ?", r: "Une situation où la TVA déductible dépasse la TVA collectée : le surplus se reporte ou se fait rembourser." },
        { q: "Quelle est la formule du budget de trésorerie ?", r: "Trésorerie début + encaissements - décaissements = trésorerie fin." },
        { q: "À quoi sert le budget de trésorerie ?", r: "À anticiper mois par mois les périodes de déficit pour agir à l'avance." },
        { q: "Citez trois solutions à un déficit de trésorerie.", r: "Découvert ou facilité de caisse, délais fournisseurs, acomptes des clients, report d'une dépense, apport des associés." },
        { q: "Pourquoi demander des acomptes ?", r: "Pour encaisser avant la prestation et sécuriser la réservation (groupes, mariages, séminaires)." },
        { q: "Que faire d'un excédent de trésorerie ?", r: "Le placer, rembourser un emprunt ou investir." },
      ],
      quiz: [
        { q: "Un amortissement de 6 000 € apparaît dans le budget de trésorerie :", choix: ["en décaissement", "en encaissement, le mois où l'équipement a été acheté", "en TVA collectée", "en aucun cas, car ce n'est pas une sortie d'argent"], bonne: 3, expl: "L'amortissement est une charge calculée, sans flux d'argent.", niv: 1 },
        { q: "La TVA à décaisser est égale à :", choix: ["TVA collectée - TVA déductible", "TVA déductible - TVA collectée", "TVA collectée + TVA déductible", "CA HT x 20 %"], bonne: 0, expl: "L'entreprise reverse à l'État la TVA collectée moins celle qu'elle a payée.", niv: 1 },
        { q: "Trésorerie début : 8 000 € ; encaissements : 30 000 € ; décaissements : 35 000 €. Trésorerie fin :", choix: ["3 000 €", "- 3 000 €", "2 000 €", "1 000 €"], bonne: 0, expl: "8 000 + 30 000 - 35 000 = 3 000 €.", niv: 1 },
        { q: "Un séminaire facturé en mars et payé en mai est encaissé :", choix: ["en mars", "en avril", "en mai", "en décembre"], bonne: 2, expl: "L'encaissement s'enregistre au moment du paiement.", niv: 1 },
        { q: "Ventes de juin : 50 000 € HT à 10 % ; achats : 20 000 € HT à 20 %. La TVA à décaisser est de :", choix: ["4 000 €", "1 000 €", "5 000 €", "9 000 €"], bonne: 1, expl: "5 000 € collectés - 4 000 € déductibles = 1 000 €, payés en juillet.", niv: 2 },
        { q: "Un hôtel de montagne prévoit un déficit en mai, entre deux saisons. La solution la plus adaptée est :", choix: ["la vente de l'hôtel", "un emprunt bancaire remboursable sur 20 ans pour couvrir les dépenses de mai", "une facilité de caisse ou un découvert autorisé négocié à l'avance", "la suppression de la TVA"], bonne: 2, expl: "Un déficit court et prévu se couvre par une solution bancaire courte.", niv: 2 },
        { q: "Demander un acompte de 30 % à la réservation d'un mariage améliore surtout :", choix: ["le résultat", "la marge brute", "le taux d'occupation", "la trésorerie"], bonne: 3, expl: "L'argent entre plus tôt : c'est la trésorerie qui en profite.", niv: 2 },
        { q: "Quel élément n'est **pas** un décaissement ?", choix: ["Le paiement des salaires", "Les remboursements mensuels de l'emprunt bancaire", "Le paiement de la TVA", "La dotation aux amortissements"], bonne: 3, expl: "La dotation aux amortissements ne fait sortir aucun argent.", niv: 2 },
        { q: "Un restaurant achète un four de 18 000 € TTC payé comptant. Le mois de l'achat, sa TVA déductible dépasse la TVA collectée. Il a :", choix: ["une TVA à décaisser plus forte", "un crédit de TVA", "un amortissement nul", "une perte obligatoire"], bonne: 1, expl: "Quand la TVA déductible dépasse la collectée, il y a crédit de TVA.", niv: 2 },
        { q: "Pourquoi un établissement rentable peut-il être en difficulté de trésorerie en début de saison ?", choix: ["Parce qu'il paie stocks et recrutements avant d'encaisser les recettes", "Parce que ses amortissements sont des sorties d'argent chaque mois de l'année", "Parce qu'il est rentable", "Parce que la TVA est supprimée l'été"], bonne: 0, expl: "Les dépenses précèdent les ventes : le décalage crée un besoin de trésorerie.", niv: 3 },
        { q: "Un hôtelier finance une rénovation de 200 000 € en puisant dans sa trésorerie. Quel est le principal risque ?", choix: ["Une hausse de son RevPAR", "Une baisse du taux de TVA appliqué aux travaux de rénovation", "Ne plus pouvoir payer les dépenses courantes", "La perte de son classement"], bonne: 2, expl: "Un investissement durable se finance plutôt par emprunt ou crédit-bail pour préserver la trésorerie.", niv: 3 },
        { q: "Trésorerie début de mois : - 2 000 € ; encaissements : 41 000 € ; décaissements : 36 500 €. Trésorerie fin :", choix: ["4 500 €", "2 500 €", "6 500 €", "- 6 500 €"], bonne: 1, expl: "- 2 000 + 41 000 - 36 500 = 2 500 €.", niv: 3 },
      ],
    },
    {
      chapitre: 'sthr-egh-7',
      fiche: `## Comment l'entreprise hôtelière fixe-t-elle ses prix ?

### Trois repères pour fixer un prix
- **Les coûts** : le prix doit couvrir le coût de revient et laisser une **marge**. En restauration, on part souvent du coût matière : prix de vente HT = coût matière x **coefficient multiplicateur**.
- **La demande** : ce que les clients acceptent de payer.
- **La concurrence** : les prix pratiqués par les établissements comparables.
- Et la **stratégie** : la **cible** visée et l'**image** voulue. Un prix trop bas peut faire douter de la qualité ; un prix trop haut fait fuir la cible.

### La demande et le prix
- **Prix d'acceptabilité** (ou prix psychologique) : le prix que la majorité des clients juge acceptable, ni trop cher ni suspect. On le trouve par enquête (« À partir de quel prix est-ce trop cher ? Pas assez cher pour être de bonne qualité ? »).
- **Élasticité-prix de la demande** = variation de la demande en % / variation du prix en %. Elle est généralement négative : quand le prix monte, la demande baisse.
- Si l'élasticité est forte (au-delà de 1 en valeur absolue), la demande réagit beaucoup : une hausse de prix fait baisser le chiffre d'affaires. Si elle est faible, une hausse de prix augmente le chiffre d'affaires.
- Exemple : le prix du menu passe de 20 € à 22 € (+ 10 %) et les couverts de 1 000 à 950 (- 5 %) : élasticité = - 0,5 ; la demande est peu sensible, le CA passe de 20 000 € à 20 900 €.

### Partir du coût ou du marché
- **Coût de production + marge** : simple, mais ignore ce que le client est prêt à payer.
- **Coût cible** : on part du prix acceptable par le marché, on retire la marge voulue et on obtient le coût à ne pas dépasser. Exemple : menu vendu 24 € HT, marge voulue 16 € : le coût matière ne doit pas dépasser 8 €.

### Les types de prix
- **Prix unique** : le même pour tous (un plat du jour).
- **Prix différenciés** : selon la période, le jour, l'heure, le canal ou le client (tarif week-end, tarif étudiant, happy hour).
- **Prix négociés** : pour les entreprises, groupes ou agences.
- **Prix forfaitaire** : un ensemble de prestations pour un prix global (demi-pension, forfait séminaire, coffret week-end).

### Le yield management
- La **gestion de l'offre et du revenu** consiste à faire varier les prix selon la demande prévue pour vendre chaque chambre au meilleur prix possible : prix élevés quand la demande est forte (salon, vacances), prix plus bas quand elle est faible, ouverture ou fermeture de certains tarifs.
- Il repose sur des données (historique, réservations en cours, événements, prix des concurrents) et vise à maximiser le **RevPAR**.
- **Tarification en temps réel** : les prix changent plusieurs fois par jour selon les réservations, souvent grâce à un logiciel.
- Il s'applique parce que la capacité est fixe et que la chambre non vendue ce soir est perdue.
- Limites : risque de mécontentement si les clients se sentent traités injustement, image brouillée, dépendance aux plateformes.

### Le cadre légal
- **Affichage des prix** obligatoire : prix **TTC, service compris**. Restaurants : carte affichée à l'extérieur pendant le service. Hôtels : prix affichés à l'extérieur et à la réception.
- **Ententes illégales** : il est interdit de s'entendre avec ses concurrents pour fixer les prix. L'Autorité de la concurrence peut sanctionner lourdement.

### À retenir pour le bac
- Coûts, demande, concurrence, cible et image.
- Prix d'acceptabilité ; élasticité = variation % de la demande / variation % du prix.
- Coût cible = prix acceptable - marge voulue.
- Prix unique, différenciés, négociés, forfaitaires.
- Yield management : adapter le prix à la demande pour maximiser le RevPAR.
- Affichage TTC service compris ; ententes interdites.`,
      cartes: [
        { q: "Sur quels trois repères fixe-t-on un prix ?", r: "Les coûts, la demande et la concurrence, en cohérence avec la cible et l'image." },
        { q: "Qu'est-ce que le coefficient multiplicateur ?", r: "Le nombre par lequel on multiplie le coût matière pour obtenir le prix de vente HT." },
        { q: "Qu'est-ce que le prix d'acceptabilité ?", r: "Le prix jugé acceptable par le plus grand nombre de clients, ni trop cher ni suspect ; on le trouve par enquête." },
        { q: "Comment calcule-t-on l'élasticité-prix ?", r: "Variation de la demande en % / variation du prix en %." },
        { q: "Que signifie une élasticité forte ?", r: "La demande réagit beaucoup au prix : une hausse de prix fait baisser le chiffre d'affaires." },
        { q: "Qu'est-ce que le coût cible ?", r: "Prix acceptable par le marché - marge voulue : le coût à ne pas dépasser." },
        { q: "Qu'est-ce qu'un prix différencié ?", r: "Un prix qui varie selon la période, l'heure, le canal ou le client : tarif week-end, happy hour, tarif étudiant." },
        { q: "Qu'est-ce qu'un prix forfaitaire ?", r: "Un prix global pour un ensemble de prestations : demi-pension, forfait séminaire." },
        { q: "Qu'est-ce que le yield management ?", r: "Faire varier les prix selon la demande prévue pour vendre chaque chambre au meilleur prix et maximiser le RevPAR." },
        { q: "Pourquoi le yield management convient-il à l'hôtellerie ?", r: "La capacité est fixe et une chambre non vendue ce soir est perdue." },
        { q: "Quelles sont les limites du yield management ?", r: "Sentiment d'injustice chez les clients, image brouillée, dépendance aux plateformes." },
        { q: "Quelles règles d'affichage des prix ?", r: "Prix TTC service compris ; carte affichée à l'extérieur des restaurants ; prix affichés à l'extérieur et à la réception des hôtels." },
        { q: "Qu'est-ce qu'une entente illégale ?", r: "Un accord entre concurrents pour fixer les prix ; l'Autorité de la concurrence peut sanctionner." },
      ],
      quiz: [
        { q: "La demi-pension est un exemple de prix :", choix: ["unique", "négocié", "forfaitaire", "d'acceptabilité"], bonne: 2, expl: "Un prix global pour la chambre, le dîner et le petit-déjeuner : c'est un forfait.", niv: 1 },
        { q: "Un tarif plus bas le dimanche soir est un prix :", choix: ["unique", "différencié", "illégal", "forfaitaire"], bonne: 1, expl: "Le prix varie selon le jour : c'est un prix différencié.", niv: 1 },
        { q: "En restaurant, les prix affichés doivent être :", choix: ["hors taxes", "TTC, service compris", "TTC, service en plus", "libres de tout affichage"], bonne: 1, expl: "Le client doit connaître le prix total qu'il paiera : TTC, service compris.", niv: 1 },
        { q: "Le yield management cherche surtout à maximiser :", choix: ["le nombre de salariés", "la TVA collectée", "le coût matière", "le RevPAR"], bonne: 3, expl: "Il combine remplissage et prix pour augmenter le revenu par chambre disponible.", niv: 1 },
        { q: "Coût matière d'un plat : 6 € ; coefficient multiplicateur : 3,5. Le prix de vente HT est :", choix: ["21,00 €", "18,00 €", "9,50 €", "20,00 €"], bonne: 0, expl: "6 x 3,5 = 21 € HT.", niv: 2 },
        { q: "Menu vendu 24 € HT ; marge voulue 16 €. Le coût cible est :", choix: ["8 €", "16 €", "24 €", "40 €"], bonne: 0, expl: "Coût cible = prix acceptable - marge voulue = 24 - 16 = 8 €.", niv: 2 },
        { q: "Le prix passe de 20 € à 22 € et les couverts de 1 000 à 950. L'élasticité-prix est de :", choix: ["- 5", "- 2", "+ 0,5", "- 0,5"], bonne: 3, expl: "- 5 % / + 10 % = - 0,5 : la demande est peu sensible au prix.", niv: 2 },
        { q: "Dans ce cas, la hausse de prix fait passer le chiffre d'affaires :", choix: ["de 20 000 € à 19 000 €", "de 20 000 € à 20 900 €", "de 22 000 € à 20 000 €", "de 20 000 € à 22 000 €"], bonne: 1, expl: "950 x 22 = 20 900 € contre 1 000 x 20 = 20 000 € : le CA augmente.", niv: 2 },
        { q: "Trois hôtels voisins se mettent d'accord pour ne jamais descendre sous 150 € la nuit. C'est :", choix: ["du yield management", "un prix forfaitaire légal", "un prix d'acceptabilité", "une entente illégale"], bonne: 3, expl: "S'entendre entre concurrents sur les prix est interdit.", niv: 2 },
        { q: "Pourquoi fixer un prix très inférieur à celui des concurrents peut-il nuire à un hôtel haut de gamme ?", choix: ["Parce que la TVA augmente", "Parce que la loi interdit les prix bas", "Parce que les clients peuvent douter de la qualité et l'image se brouille", "Parce que le RevPAR augmente alors nettement"], bonne: 2, expl: "Le prix est un signal de qualité : il doit rester cohérent avec la cible et l'image.", niv: 3 },
        { q: "Un grand salon professionnel a lieu en ville. Que fait un hôtel qui pratique le yield management ?", choix: ["Il garde le même prix unique toute l'année, quelle que soit la demande", "Il baisse ses prix pour remplir", "Il relève ses prix et ferme ses tarifs les plus bas", "Il ferme l'hôtel"], bonne: 2, expl: "Quand la demande prévue est forte, il vend plus cher pour maximiser le revenu.", niv: 3 },
        { q: "Une élasticité-prix de - 2 signifie qu'une hausse de prix de 5 % entraîne :", choix: ["une baisse de la demande de 10 %", "une hausse de la demande de 10 %", "une baisse de la demande de 2 %", "une demande inchangée"], bonne: 0, expl: "- 2 x 5 % = - 10 % : la demande est très sensible, le CA baisse.", niv: 3 },
      ],
    },
    {
      chapitre: 'sthr-egh-8',
      fiche: `## La performance passe-t-elle par une communication maîtrisée ?

### Deux grandes formes de communication
- **Communication commerciale** : faire connaître et vendre un produit ou un service (nouvelle carte, offre week-end).
- **Communication institutionnelle** : valoriser l'entreprise elle-même, ses valeurs et ses engagements (démarche écologique, savoir-faire, histoire de la maison).
- **Communication de crise** : réagir vite, avec transparence, quand un incident menace l'image (intoxication alimentaire, avis viral négatif, accident).

### Les outils
- **Médias** : publicité dans la presse, à la radio, à la télévision, par affichage, au cinéma et sur internet. Touche beaucoup de monde, mais coûte cher.
- **Hors médias** :
- **Marketing direct** (mercatique directe) : message personnalisé envoyé à un client connu (courriel, SMS, lettre) grâce au fichier clients.
- **Promotion des ventes** : avantage temporaire pour déclencher l'achat (happy hour, nuit offerte, menu à prix réduit).
- **Parrainage** : soutenir un événement ou une équipe en échange d'une visibilité commerciale (logo sur les maillots).
- **Mécénat** : soutenir une cause d'intérêt général (culture, solidarité) sans contrepartie commerciale directe ; il ouvre droit à une réduction d'impôt.
- **Événementiel** : organiser un événement (soirée à thème, dégustation, journée portes ouvertes).
- **Relations presse**, salons, partenariats avec l'office de tourisme.
- **Numérique** : site internet, réseaux sociaux, plateformes de réservation, référencement, newsletters.

### Le bouche-à-oreille et le buzz
- Le **bouche-à-oreille** : les clients parlent de l'établissement à leur entourage. C'est le média le plus crédible, gratuit mais incontrôlable.
- Le **buzz** : faire parler de soi très vite, surtout sur internet, par une action surprenante. Efficace, mais risqué s'il est mal reçu.

### L'e-réputation
- L'**e-réputation** est l'image de l'établissement sur internet : avis clients, notes, commentaires, photos, articles.
- Les avis pèsent fortement sur les réservations. Il faut les **surveiller** et y **répondre** : remercier, répondre poliment et précisément aux critiques, proposer une solution, corriger réellement le problème.
- **Image voulue** (celle que l'entreprise veut donner) et **image perçue** (celle qu'ont réellement les clients) : la communication cherche à les rapprocher. Un écart signale un problème de qualité ou de message.

### Mesurer l'efficacité de la communication
- Comparer le coût d'une action à ses résultats : hausse de la fréquentation ou du chiffre d'affaires, nombre de réservations venues d'une campagne, taux d'ouverture et de clic d'un courriel, nombre d'abonnés, évolution de la note moyenne.
- Une communication **maîtrisée** est cohérente avec l'offre réelle, la cible et l'image, et planifiée avec un budget.

### À retenir pour le bac
- Commerciale (le produit), institutionnelle (l'entreprise), de crise (protéger l'image).
- Médias et hors médias : marketing direct, promotion, parrainage, mécénat, événementiel.
- Bouche-à-oreille : crédible mais incontrôlable ; buzz : rapide mais risqué.
- E-réputation : surveiller et répondre aux avis ; image voulue et image perçue.
- Mesurer l'efficacité : coût de l'action comparé à ses résultats.`,
      cartes: [
        { q: "Communication commerciale ou institutionnelle ?", r: "Commerciale : faire vendre un produit ou un service. Institutionnelle : valoriser l'entreprise, ses valeurs, ses engagements." },
        { q: "Qu'est-ce que la communication de crise ?", r: "Réagir vite et avec transparence quand un incident menace l'image de l'établissement." },
        { q: "Différence entre médias et hors médias ?", r: "Médias : presse, radio, télévision, affichage, cinéma, internet. Hors médias : marketing direct, promotion, parrainage, mécénat, événementiel." },
        { q: "Qu'est-ce que le marketing direct ?", r: "Un message personnalisé envoyé à des clients connus (courriel, SMS, lettre) grâce au fichier clients." },
        { q: "Qu'est-ce que la promotion des ventes ?", r: "Un avantage temporaire pour déclencher l'achat : happy hour, nuit offerte, menu réduit." },
        { q: "Parrainage ou mécénat ?", r: "Parrainage : soutien avec contrepartie de visibilité commerciale. Mécénat : soutien à une cause d'intérêt général sans contrepartie directe, avec réduction d'impôt." },
        { q: "Qu'est-ce que le bouche-à-oreille ?", r: "Les clients parlent de l'établissement à leur entourage : très crédible, gratuit, mais incontrôlable." },
        { q: "Qu'est-ce que le buzz ?", r: "Faire parler de soi très vite, surtout en ligne, par une action surprenante ; efficace mais risqué." },
        { q: "Qu'est-ce que l'e-réputation ?", r: "L'image de l'établissement sur internet : avis, notes, commentaires, photos, articles." },
        { q: "Comment répondre à un avis négatif ?", r: "Remercier, répondre poliment et précisément, proposer une solution et corriger réellement le problème." },
        { q: "Image voulue ou image perçue ?", r: "Voulue : celle que l'entreprise veut donner. Perçue : celle qu'ont réellement les clients." },
        { q: "Comment mesurer l'efficacité d'une action de communication ?", r: "Comparer son coût à ses résultats : réservations générées, chiffre d'affaires, taux de clic, abonnés, note moyenne." },
        { q: "Qu'est-ce qu'une communication maîtrisée ?", r: "Une communication cohérente avec l'offre réelle, la cible et l'image, planifiée avec un budget." },
      ],
      quiz: [
        { q: "Un hôtel finance la restauration d'une chapelle du village sans contrepartie publicitaire. C'est du :", choix: ["parrainage", "marketing direct", "mécénat", "buzz"], bonne: 2, expl: "Soutenir une cause d'intérêt général sans contrepartie commerciale, c'est du mécénat.", niv: 1 },
        { q: "Un courriel personnalisé envoyé aux clients pour leur anniversaire relève :", choix: ["du marketing direct", "de la publicité télévisée", "du mécénat", "de la communication de crise"], bonne: 0, expl: "Message personnalisé à un client connu : marketing direct.", niv: 1 },
        { q: "Une « happy hour » de 18 h à 20 h est une action de :", choix: ["parrainage", "communication institutionnelle", "promotion des ventes", "relations presse"], bonne: 2, expl: "Un avantage temporaire pour déclencher l'achat : promotion des ventes.", niv: 1 },
        { q: "Un restaurant présente sur son site son engagement pour les producteurs locaux. Il fait surtout de la communication :", choix: ["de crise", "institutionnelle", "de promotion", "interne"], bonne: 1, expl: "Il valorise les valeurs de l'entreprise : communication institutionnelle.", niv: 1 },
        { q: "Le logo d'un hôtel sur les maillots du club de rugby local, en échange d'une visibilité, est :", choix: ["du mécénat", "du marketing direct", "de la promotion", "du parrainage"], bonne: 3, expl: "Un soutien avec contrepartie de visibilité commerciale : parrainage.", niv: 2 },
        { q: "Un client publie un avis très négatif mais en partie justifié. La meilleure réaction est :", choix: ["supprimer l'avis", "répondre poliment, reconnaître le problème et expliquer ce qui a été corrigé", "répondre avec agacement en rappelant au client qu'il a mal compris le service", "ignorer l'avis"], bonne: 1, expl: "Une réponse courtoise et suivie d'effets rassure les futurs clients qui lisent les avis.", niv: 2 },
        { q: "Pourquoi le bouche-à-oreille est-il précieux pour un restaurant ?", choix: ["Parce qu'il est obligatoire", "Parce que l'établissement le contrôle entièrement grâce à ses réseaux sociaux", "Parce qu'il est jugé très crédible et ne coûte rien", "Parce qu'il remplace la carte"], bonne: 2, expl: "On fait davantage confiance à ses proches qu'à une publicité ; mais on ne le contrôle pas.", niv: 2 },
        { q: "Quel outil ne relève **pas** de la communication hors médias ?", choix: ["Un spot à la radio", "Une soirée dégustation", "Un salon professionnel", "Un courriel personnalisé"], bonne: 0, expl: "La radio est un média ; les trois autres sont hors médias.", niv: 2 },
        { q: "Une campagne de 2 000 € a généré 80 réservations avec un panier moyen de 150 € HT. Le CA généré est de :", choix: ["2 000 €", "10 000 €", "24 000 €", "12 000 €"], bonne: 3, expl: "80 x 150 = 12 000 € HT, à comparer au coût de 2 000 €.", niv: 2 },
        { q: "L'hôtel se veut « familial et chaleureux », mais les avis parlent d'un accueil froid. Que révèle cet écart ?", choix: ["Un excellent travail de communication, qui doit simplement être poursuivi", "Un écart entre image voulue et image perçue, à corriger par le service", "Un problème de taux de change", "Une erreur de comptabilité"], bonne: 1, expl: "La communication ne suffit pas : il faut d'abord corriger ce que vivent les clients.", niv: 3 },
        { q: "Après une intoxication alimentaire relayée sur les réseaux sociaux, le restaurant doit d'abord :", choix: ["communiquer vite et avec transparence sur les faits et les mesures prises", "lancer une promotion à moitié prix", "fermer ses réseaux sociaux sans rien dire et attendre que l'affaire soit oubliée", "accuser les clients"], bonne: 0, expl: "La communication de crise repose sur la rapidité, la transparence et les actions correctrices.", niv: 3 },
        { q: "Pourquoi une communication qui promet plus que ce que l'établissement offre nuit-elle à la performance ?", choix: ["Elle est interdite par le classement", "Elle réduit la TVA", "Elle augmente durablement le taux d'occupation, quelle que soit la qualité réelle", "Elle déçoit les clients, qui laissent de mauvais avis et ne reviennent pas"], bonne: 3, expl: "La déception se traduit en avis négatifs et en perte de fidélité.", niv: 3 },
      ],
    },
    {
      chapitre: 'sthr-egh-9',
      fiche: `## La performance de l'entreprise hôtelière repose-t-elle sur la fidélisation des clients ?

### Satisfaction, fidélité, fidélisation
- La **satisfaction** est le sentiment du client qui compare ce qu'il a reçu à ce qu'il attendait. Elle dépend du **contexte** : le même service peut satisfaire un client pressé un midi et décevoir un couple qui fête un anniversaire.
- La **fidélité** est le comportement du client qui revient et recommande l'établissement.
- La **fidélisation** est l'ensemble des actions de l'entreprise pour rendre ses clients fidèles.
- Un client satisfait n'est pas forcément fidèle (il peut aimer changer, ou trouver moins cher ailleurs) ; un client insatisfait, lui, ne revient presque jamais et peut en parler autour de lui.

### Pourquoi fidéliser
- Attirer un nouveau client coûte plus cher (publicité, commissions des plateformes) que garder un client existant.
- Le client fidèle revient, dépense souvent davantage, se montre moins sensible au prix et recommande l'établissement : il améliore le chiffre d'affaires et l'e-réputation.
- Les **réservations directes** des clients fidèles évitent les commissions des plateformes et améliorent la marge.

### La base de données clients
- Elle enregistre des informations sur chaque client : identité, coordonnées, séjours ou repas, dépenses, préférences (chambre au calme, allergie, table habituelle), date d'anniversaire, canal de réservation, avis donnés.
- Elle permet de dresser le **profil** des clients, de les classer en **segments** (affaires, familles, groupes, habitués) et de personnaliser l'offre.
- Elle est soumise au **RGPD** : ne collecter que l'utile, informer le client, obtenir son accord pour la prospection par courriel, sécuriser les données, ne pas les garder trop longtemps.
- Elle fait souvent partie du **logiciel de gestion hôtelière** ou d'un **progiciel de gestion intégré** (PGI).

### Interroger la base : les requêtes
- Une **requête** extrait les informations utiles. Exemple de schéma : CLIENT (numClient, nom, ville, dateNaissance) ; SEJOUR (numSejour, dateArrivee, nbNuits, montant, #numClient).
- Clients venant de Lyon : SELECT nom FROM CLIENT WHERE ville = 'Lyon' ;
- Une **jointure** relie deux tables par la clé : SELECT nom, dateArrivee FROM CLIENT INNER JOIN SEJOUR ON CLIENT.numClient = SEJOUR.numClient ;
- Usage : retrouver les clients venus au moins trois fois, ceux qui ne sont pas revenus depuis un an, ceux dont c'est l'anniversaire le mois prochain.

### La gestion de la relation client (GRC)
- La **GRC** consiste à utiliser ces données pour entretenir une relation suivie et personnalisée : accueil par le nom, attention d'anniversaire, offre adaptée, relance des clients perdus.
- **Outils de fidélisation** : carte ou programme de fidélité (points, nuit offerte), avantages réservés, club client, lettre d'information, offres personnalisées, traitement soigneux des réclamations.
- Une réclamation bien traitée peut rendre un client plus fidèle qu'avant.

### Mesurer la satisfaction et la fidélité
- **Indicateurs de satisfaction** : note moyenne des avis, taux de clients satisfaits dans les questionnaires, nombre de réclamations, part de clients prêts à recommander.
- **Indicateurs de fidélité** : taux de clients qui reviennent, nombre moyen de séjours par client, part du chiffre d'affaires réalisée avec les habitués, nombre d'adhérents au programme de fidélité.

### À retenir pour le bac
- Satisfaction (un sentiment), fidélité (un comportement), fidélisation (des actions).
- Fidéliser coûte moins cher qu'attirer ; le client fidèle dépense et recommande.
- Base de données clients : profil, segments, personnalisation, dans le respect du RGPD.
- Requêtes SQL simples avec WHERE et jointure.
- Indicateurs de satisfaction et de fidélité.`,
      cartes: [
        { q: "Qu'est-ce que la satisfaction ?", r: "Le sentiment du client qui compare ce qu'il a reçu à ce qu'il attendait ; elle dépend du contexte." },
        { q: "Qu'est-ce que la fidélité ?", r: "Le comportement du client qui revient et recommande l'établissement." },
        { q: "Qu'est-ce que la fidélisation ?", r: "L'ensemble des actions de l'entreprise pour rendre ses clients fidèles." },
        { q: "Un client satisfait est-il forcément fidèle ?", r: "Non : il peut aimer changer ou trouver moins cher ailleurs. Mais un client insatisfait ne revient presque jamais." },
        { q: "Pourquoi fidéliser ?", r: "Garder un client coûte moins cher que d'en attirer un nouveau ; le client fidèle dépense plus et recommande." },
        { q: "Pourquoi les réservations directes améliorent-elles la marge ?", r: "Elles évitent les commissions versées aux plateformes de réservation." },
        { q: "Que contient une base de données clients ?", r: "Identité, coordonnées, séjours ou repas, dépenses, préférences, anniversaire, canal de réservation, avis." },
        { q: "Quelles règles du RGPD pour la base clients ?", r: "Collecter l'utile, informer, obtenir l'accord pour la prospection par courriel, sécuriser, limiter la durée de conservation." },
        { q: "Qu'est-ce qu'une requête ?", r: "Une interrogation de la base qui extrait les informations utiles, souvent écrite en SQL." },
        { q: "Qu'est-ce qu'une jointure ?", r: "Le lien entre deux tables par la clé : CLIENT.numClient = SEJOUR.numClient." },
        { q: "Qu'est-ce que la GRC ?", r: "La gestion de la relation client : utiliser les données pour une relation suivie et personnalisée." },
        { q: "Citez trois outils de fidélisation.", r: "Programme de fidélité, offres personnalisées, attention d'anniversaire, club client, traitement soigné des réclamations." },
        { q: "Citez deux indicateurs de fidélité.", r: "Taux de clients qui reviennent, nombre moyen de séjours par client, part du CA réalisée avec les habitués." },
      ],
      quiz: [
        { q: "Le fait qu'un client revienne chaque année est :", choix: ["de la satisfaction", "de la fidélité", "de la fidélisation", "de la prospection"], bonne: 1, expl: "Revenir est un comportement : la fidélité. La fidélisation désigne les actions de l'entreprise.", niv: 1 },
        { q: "Un programme qui offre une nuit après dix séjours est un outil de :", choix: ["yield management", "communication de crise", "fidélisation", "contrôle des coûts"], bonne: 2, expl: "Il récompense les clients qui reviennent : c'est de la fidélisation.", niv: 1 },
        { q: "Quelle requête affiche le nom des clients de Lyon ?", choix: ["SELECT nom FROM CLIENT WHERE ville = 'Lyon' ;", "SELECT CLIENT FROM nom WHERE Lyon ;", "SELECT ville FROM nom = 'Lyon' ;", "SELECT nom WHERE CLIENT = 'Lyon' ;"], bonne: 0, expl: "SELECT colonne, FROM table, WHERE condition : c'est l'ordre correct.", niv: 1 },
        { q: "La GRC consiste à :", choix: ["calculer la TVA", "gérer la rotation du personnel entre la salle et la réception", "gérer la relation client de façon suivie et personnalisée", "contrôler les stocks de boissons"], bonne: 2, expl: "La gestion de la relation client exploite les données pour personnaliser la relation.", niv: 1 },
        { q: "Pourquoi un client satisfait peut-il ne pas revenir ?", choix: ["Parce que la satisfaction empêche la fidélité chez la plupart des clients", "Parce qu'il peut aimer découvrir d'autres lieux ou trouver moins cher", "Parce que la loi l'interdit", "Parce que la base clients est pleine"], bonne: 1, expl: "La satisfaction est nécessaire mais ne suffit pas toujours à créer la fidélité.", niv: 2 },
        { q: "Pour envoyer des offres par courriel aux clients, l'hôtel doit selon le RGPD :", choix: ["garder leurs données sans limite", "acheter un fichier d'adresses", "publier leurs noms sur son site", "avoir obtenu leur accord"], bonne: 3, expl: "La prospection par courriel exige en principe l'accord de la personne.", niv: 2 },
        { q: "Dans SEJOUR (numSejour, dateArrivee, montant, #numClient), #numClient permet :", choix: ["de compter les salariés", "de calculer le prix de la chambre louée pendant le séjour", "de trier les chambres", "de relier chaque séjour au client qui l'a fait"], bonne: 3, expl: "La clé étrangère relie la table SEJOUR à la table CLIENT.", niv: 2 },
        { q: "Quel indicateur mesure le mieux la fidélité ?", choix: ["Le coût matière", "Le taux de TVA", "Le taux de clients qui reviennent", "Le nombre de chambres"], bonne: 2, expl: "La fidélité est un comportement de retour : on mesure les clients qui reviennent.", niv: 2 },
        { q: "Pourquoi une réservation directe d'un client fidèle est-elle plus rentable qu'une réservation par plateforme ?", choix: ["Elle évite la commission de la plateforme", "Elle supprime la TVA", "Elle augmente le prix affiché", "Elle réduit le taux d'occupation"], bonne: 0, expl: "Sans intermédiaire, l'hôtel garde toute la marge sur la nuit vendue.", niv: 2 },
        { q: "Un client mécontent d'un retard de chambre reçoit des excuses, un petit-déjeuner offert et un mot du directeur. Quel effet peut-on attendre ?", choix: ["Un client parfois plus fidèle qu'avant", "Une perte certaine du client", "Une baisse de la TVA", "Un effet nul sur sa fidélité"], bonne: 0, expl: "Une réclamation bien traitée peut renforcer la confiance et la fidélité.", niv: 3 },
        { q: "Pourquoi la satisfaction dépend-elle du contexte ?", choix: ["Parce que le service est identique pour chaque client", "Parce que les attentes changent selon la situation et la personne", "Parce qu'elle se mesure en euros", "Parce qu'elle est fixée par la loi"], bonne: 1, expl: "Un client d'affaires pressé et un couple en fête n'attendent pas la même chose.", niv: 3 },
        { q: "Un hôtel veut relancer les clients venus il y a plus d'un an. Que lui faut-il d'abord ?", choix: ["Un nouveau classement", "Un nouveau logo", "Une baisse de prix générale sur l'ensemble de ses chambres", "Une base de données à jour avec les dates de séjour"], bonne: 3, expl: "Une requête sur les dates de séjour identifie les clients à relancer.", niv: 3 },
      ],
    },
    {
      chapitre: 'sthr-egh-10',
      fiche: `## Comment l'entreprise hôtelière mobilise-t-elle ses ressources humaines ?

### Un secteur exigeant pour les salariés
- Horaires décalés, travail le soir, le week-end et les jours fériés, **coupures** dans la journée, rythme intense pendant le service, chaleur en cuisine, port de charges, station debout.
- Le secteur connaît des **difficultés de recrutement** et une forte **rotation** du personnel. Mobiliser et garder ses salariés devient un enjeu de performance.

### Mesurer la performance sociale
- **Taux d'absentéisme** = heures d'absence / heures de travail prévues x 100.
- **Taux de rotation** (turnover) = ((entrées + sorties) / 2) / effectif moyen x 100.
- Nombre et gravité des **accidents du travail**, heures de **formation** par salarié, nombre de conflits, résultats d'une enquête de satisfaction interne.
- Ces indicateurs figurent dans le **bilan social**, obligatoire à partir de 300 salariés, ou dans un tableau de bord social.
- Une performance sociale faible coûte cher : remplacements, recrutements, intégration, erreurs, baisse de la qualité de service.

### Les leviers de mobilisation
- **Conditions de travail** : équipements adaptés, limitation des coupures, plannings connus à l'avance, respect des temps de repos.
- **Organisation du travail** : polyvalence, autonomie, travail en équipe, semaine de quatre jours, repos consécutifs.
- **Bien-être au travail** : reconnaissance, bonne ambiance, management à l'écoute, équilibre entre vie professionnelle et vie personnelle.
- **Rémunération** : salaire de base et **rémunération périphérique** (primes, intéressement, participation, avantages en nature comme les repas, logement des saisonniers, mutuelle, tickets de transport).
- **Équité** : le salarié compare ce qu'il apporte et ce qu'il reçoit à ce que reçoivent ses collègues. Un sentiment d'injustice démotive.
- **Formation** : développer les compétences, préparer les évolutions, fidéliser. Le salarié peut aussi utiliser son compte personnel de formation.
- **Gestion de carrière** : entretiens professionnels, promotions internes, mobilité dans un groupe.

### Climat social et conflits
- Le **climat social** est l'ambiance générale dans l'entreprise, la façon dont les salariés vivent leur travail et leurs relations.
- **Conflit individuel** : entre un salarié et l'employeur (heures non payées, sanction). **Conflit collectif** : un groupe de salariés revendique (salaires, plannings).
- La **grève** est un arrêt collectif et concerté du travail pour appuyer des revendications professionnelles. C'est un droit constitutionnel.
- **Dialogue social** : échanges entre direction et représentants du personnel. Le **comité social et économique** (CSE) est obligatoire à partir de 11 salariés.

### La communication interne
- Informer, écouter, faire remonter les idées : réunions de briefing avant le service, tableau d'affichage, messagerie d'équipe, entretiens individuels, livret d'accueil pour les nouveaux.
- Elle renforce la cohésion, réduit les malentendus et aide à prévenir les conflits.

### À retenir pour le bac
- Absentéisme = heures d'absence / heures prévues x 100 ; rotation = ((entrées + sorties) / 2) / effectif moyen x 100.
- Leviers : conditions et organisation du travail, bien-être, rémunération périphérique, équité, formation, carrière.
- Conflit individuel ou collectif ; grève : arrêt collectif et concerté.
- Dialogue social (CSE dès 11 salariés) et communication interne.
- La performance sociale conditionne la performance économique à long terme.`,
      cartes: [
        { q: "Pourquoi mobiliser les salariés est-il un enjeu en hôtellerie-restauration ?", r: "Le secteur peine à recruter et connaît une forte rotation : garder une équipe stable conditionne la qualité de service." },
        { q: "Comment calcule-t-on le taux d'absentéisme ?", r: "Heures d'absence / heures de travail prévues x 100." },
        { q: "Comment calcule-t-on le taux de rotation ?", r: "((Entrées + sorties) / 2) / effectif moyen x 100." },
        { q: "Qu'est-ce que le bilan social ?", r: "Un document qui rassemble les indicateurs sociaux de l'entreprise, obligatoire à partir de 300 salariés." },
        { q: "Qu'est-ce que la rémunération périphérique ?", r: "Ce qui s'ajoute au salaire de base : primes, intéressement, participation, avantages en nature, mutuelle." },
        { q: "Qu'est-ce que l'équité au travail ?", r: "Le sentiment que ce qu'on reçoit est juste par rapport à ce qu'on apporte et à ce que reçoivent les collègues." },
        { q: "Citez deux leviers d'organisation du travail.", r: "Polyvalence, autonomie, plannings connus à l'avance, repos consécutifs, semaine de quatre jours." },
        { q: "Qu'est-ce que le climat social ?", r: "L'ambiance générale dans l'entreprise, la façon dont les salariés vivent leur travail et leurs relations." },
        { q: "Conflit individuel ou collectif ?", r: "Individuel : un salarié contre l'employeur. Collectif : un groupe de salariés porte des revendications communes." },
        { q: "Qu'est-ce que la grève ?", r: "Un arrêt collectif et concerté du travail pour appuyer des revendications professionnelles ; c'est un droit constitutionnel." },
        { q: "À partir de combien de salariés le CSE est-il obligatoire ?", r: "À partir de 11 salariés." },
        { q: "Citez trois outils de communication interne.", r: "Briefing avant le service, tableau d'affichage, messagerie d'équipe, entretiens individuels, livret d'accueil." },
        { q: "Pourquoi une forte rotation coûte-t-elle cher ?", r: "Recrutements, intégration, formation des nouveaux, erreurs et baisse de la qualité de service." },
      ],
      quiz: [
        { q: "Le comité social et économique est obligatoire à partir de :", choix: ["11 salariés", "5 salariés", "50 salariés", "300 salariés"], bonne: 0, expl: "Le CSE doit être mis en place à partir de 11 salariés ; 300 est le seuil du bilan social.", niv: 1 },
        { q: "Les repas pris sur place offerts au personnel font partie :", choix: ["du salaire de base", "de la rémunération périphérique", "des charges variables de la clientèle", "de la TVA"], bonne: 1, expl: "Les avantages en nature complètent le salaire : rémunération périphérique.", niv: 1 },
        { q: "Un arrêt collectif et concerté du travail pour des revendications professionnelles est :", choix: ["une démission", "un conflit individuel", "un licenciement", "une grève"], bonne: 3, expl: "C'est la définition de la grève, droit reconnu par la Constitution.", niv: 1 },
        { q: "Un briefing de dix minutes avant chaque service relève :", choix: ["de la communication de crise", "du mécénat", "de la communication interne", "de la publicité"], bonne: 2, expl: "Il informe et coordonne l'équipe : c'est de la communication interne.", niv: 1 },
        { q: "1 200 heures d'absence pour 24 000 heures prévues. Le taux d'absentéisme est :", choix: ["0,5 %", "50 %", "20 %", "5 %"], bonne: 3, expl: "1 200 / 24 000 x 100 = 5 %.", niv: 2 },
        { q: "Effectif moyen : 20 ; entrées : 6 ; sorties : 8. Le taux de rotation est :", choix: ["35 %", "45 %", "40 %", "70 %"], bonne: 0, expl: "((6 + 8) / 2) / 20 x 100 = 7 / 20 x 100 = 35 %.", niv: 2 },
        { q: "Une serveuse découvre qu'un collègue arrivé après elle, au même poste, gagne davantage. Quel levier est en cause ?", choix: ["La formation", "La polyvalence", "Le yield management", "L'équité"], bonne: 3, expl: "Elle compare sa situation à celle d'un collègue : c'est le sentiment d'équité.", niv: 2 },
        { q: "Quel indicateur ne mesure **pas** la performance sociale ?", choix: ["Le taux d'absentéisme", "Le taux de rotation", "Le RevPAR", "Le nombre d'accidents du travail"], bonne: 2, expl: "Le RevPAR est un indicateur commercial ; les trois autres sont sociaux.", niv: 2 },
        { q: "Un cuisinier conteste seul le paiement de ses heures supplémentaires. C'est :", choix: ["un conflit individuel", "une grève", "un conflit collectif", "du dialogue social"], bonne: 0, expl: "Un salarié face à l'employeur : conflit individuel.", niv: 2 },
        { q: "Pourquoi supprimer les coupures dans les plannings peut-il améliorer la performance économique ?", choix: ["Parce que cela supprime une grande partie des charges de personnel du restaurant", "Parce que moins de fatigue et de départs réduit les coûts et améliore le service", "Parce que cela augmente la TVA collectée", "Parce que cela ferme le restaurant le midi"], bonne: 1, expl: "La performance sociale soutient la qualité de service et réduit les coûts de rotation.", niv: 3 },
        { q: "Un hôtel a un taux de rotation de 60 %. Quelle action est la plus adaptée ?", choix: ["Recruter davantage de salariés sans rien changer à l'organisation du travail", "Analyser les causes des départs, puis agir sur les conditions de travail et la carrière", "Supprimer les entretiens", "Baisser les salaires"], bonne: 1, expl: "On cherche les causes avant d'agir sur les leviers de mobilisation.", niv: 3 },
        { q: "En quoi la formation contribue-t-elle à fidéliser les salariés ?", choix: ["Elle réduit leur salaire", "Elle supprime leurs congés", "Elle développe leurs compétences et leur ouvre des perspectives d'évolution", "Elle les oblige par contrat à rester dans l'entreprise pendant au moins dix ans"], bonne: 2, expl: "Se former et évoluer donne envie de rester dans l'entreprise.", niv: 3 },
      ],
    },
    {
      chapitre: 'sthr-egh-11',
      fiche: `## Comment l'entreprise gère-t-elle la masse salariale ?

### Le coût du travail
- Le **salaire brut** est le salaire prévu au contrat.
- Le **salaire net** = salaire brut - **cotisations salariales** : c'est ce que touche le salarié (avant impôt sur le revenu).
- Le **coût du travail** pour l'employeur = salaire brut + **cotisations patronales** (sécurité sociale, retraite, chômage…).
- Le salarié est à la fois une **ressource** (il produit le service, crée de la valeur) et une **charge** que l'entreprise cherche à maîtriser.

### La masse salariale
- La **masse salariale** est le total des rémunérations versées sur une période ; avec les cotisations patronales, elle forme les **charges de personnel** du tableau de gestion.
- Dans l'hôtellerie-restauration, c'est l'un des postes les plus lourds, souvent autour d'un tiers du chiffre d'affaires.

### Les facteurs qui la font varier
- **Effectif** : nombre de salariés et d'heures travaillées.
- **Niveau des salaires** : augmentations générales, hausse du salaire minimum, primes.
- **Qualifications** et **ancienneté** : un personnel plus qualifié ou plus ancien coûte plus cher (mais il est souvent plus efficace).
- **Rotation** : les remplaçants sont souvent moins payés, mais recruter et former coûte.
- **Heures supplémentaires** : majorées, donc plus chères.
- **Équipements** : un lave-vaisselle à convoyeur ou une borne de commande peut réduire le besoin d'heures.

### Les indicateurs de gestion
- **Ratio de charges de personnel** = charges de personnel / CA HT x 100 ; on le compare aux normes du secteur.
- **Taux horaire moyen** = charges de personnel / nombre d'heures travaillées.
- **Productivité physique** : quantité produite par heure de travail (couverts servis par heure, chambres préparées par heure).
- **Productivité en valeur** : CA par salarié ou par heure travaillée.
- Exemple : 9 000 couverts pour 3 600 heures de travail en salle : 2,5 couverts par heure.

### Adapter le temps de travail à l'activité
- L'activité varie selon l'heure, le jour et la **saison**, alors que la **capacité** est limitée (nombre de chambres et de places).
- Outils de **flexibilité** :
- **Contrats** : CDD saisonnier, extras (CDD d'usage pour un service ou un banquet), temps partiel, intérim.
- **Modulation** (aménagement) du temps de travail : plus d'heures en haute saison, moins en basse saison, avec un total fixé sur l'année par accord.
- **Heures supplémentaires**, polyvalence, plannings ajustés aux prévisions de réservation.
- Conséquences sur la **performance sociale** : précarité, fatigue, difficulté à concilier vie professionnelle et personnelle, si la flexibilité est mal gérée ; à l'inverse, des plannings stables et prévisibles fidélisent.

### Les politiques de l'emploi
- Mesures de l'État pour favoriser l'emploi : **réduction des cotisations patronales** sur les bas salaires, aides à l'embauche d'apprentis, contrats aidés, formation des demandeurs d'emploi.
- Elles baissent le coût du travail ou aident à recruter : l'entreprise doit les connaître pour gérer sa masse salariale.

### À retenir pour le bac
- Net = brut - cotisations salariales ; coût du travail = brut + cotisations patronales.
- Facteurs : effectif, heures, niveau des salaires, qualifications, ancienneté, rotation, heures supplémentaires, équipements.
- Ratio de charges de personnel, taux horaire moyen, productivité physique et en valeur.
- Flexibilité : CDD saisonniers, extras, temps partiel, modulation ; attention à la performance sociale.
- Politiques de l'emploi : baisse des cotisations, aides à l'apprentissage.`,
      cartes: [
        { q: "Comment passe-t-on du salaire brut au salaire net ?", r: "Salaire net = salaire brut - cotisations salariales." },
        { q: "Qu'est-ce que le coût du travail ?", r: "Ce que paie l'employeur : salaire brut + cotisations patronales." },
        { q: "Qu'est-ce que la masse salariale ?", r: "Le total des rémunérations versées sur une période ; avec les cotisations patronales, elle forme les charges de personnel." },
        { q: "Pourquoi le salarié est-il à la fois une ressource et une charge ?", r: "Il produit le service et crée de la valeur, mais son coût pèse sur le résultat." },
        { q: "Citez quatre facteurs qui font varier la masse salariale.", r: "Effectif et heures, niveau des salaires, qualifications et ancienneté, heures supplémentaires, rotation, équipements." },
        { q: "Comment calcule-t-on le ratio de charges de personnel ?", r: "Charges de personnel / CA HT x 100." },
        { q: "Comment calcule-t-on le taux horaire moyen ?", r: "Charges de personnel / nombre d'heures travaillées." },
        { q: "Productivité physique ou en valeur ?", r: "Physique : quantité par heure (couverts, chambres). En valeur : chiffre d'affaires par salarié ou par heure." },
        { q: "Qu'est-ce qu'un extra ?", r: "Un salarié embauché en CDD d'usage pour un service ou un événement précis (banquet, mariage)." },
        { q: "Qu'est-ce que la modulation du temps de travail ?", r: "Faire varier les horaires selon l'activité (plus en haute saison, moins en basse saison) avec un total fixé sur l'année." },
        { q: "Pourquoi adapter le temps de travail à l'activité ?", r: "L'activité varie selon l'heure, le jour et la saison alors que la capacité est limitée : il faut éviter le sureffectif comme le manque de personnel." },
        { q: "Quel risque social présente la flexibilité ?", r: "Précarité, fatigue, vie personnelle difficile à organiser, ce qui peut augmenter la rotation." },
        { q: "Citez deux mesures des politiques de l'emploi.", r: "Réduction des cotisations patronales sur les bas salaires, aides à l'embauche d'apprentis, contrats aidés." },
      ],
      quiz: [
        { q: "Le coût du travail pour l'employeur est égal à :", choix: ["salaire net", "salaire brut + cotisations patronales", "salaire brut - cotisations salariales", "salaire net + impôt sur le revenu"], bonne: 1, expl: "L'employeur paie le brut et ses propres cotisations.", niv: 1 },
        { q: "Le salaire net se calcule ainsi :", choix: ["masse salariale / effectif", "salaire brut + cotisations patronales", "coût du travail + primes", "salaire brut - cotisations salariales"], bonne: 3, expl: "On retire du brut les cotisations à la charge du salarié.", niv: 1 },
        { q: "Un serveur embauché pour un seul banquet est :", choix: ["un extra", "un salarié en CDI à temps plein", "un stagiaire de longue durée", "un intérimaire permanent"], bonne: 0, expl: "L'extra est recruté en CDD d'usage pour un service ou un événement.", niv: 1 },
        { q: "Le ratio de charges de personnel se calcule ainsi :", choix: ["salaire net / salaire brut", "effectif / CA", "CA / heures travaillées", "charges de personnel / CA HT x 100"], bonne: 3, expl: "On rapporte les charges de personnel au chiffre d'affaires HT.", niv: 1 },
        { q: "Charges de personnel : 248 795 € ; CA HT : 646 935 €. Le ratio est d'environ :", choix: ["38 %", "26 %", "45 %", "62 %"], bonne: 0, expl: "248 795 / 646 935 x 100 = 38,5 % environ, au-dessus d'une norme de 30 à 35 %.", niv: 2 },
        { q: "9 000 couverts servis pour 3 600 heures de travail en salle. La productivité est de :", choix: ["0,4 couvert par heure", "2,5 couverts par heure", "5 couverts par heure", "12 600 couverts"], bonne: 1, expl: "9 000 / 3 600 = 2,5 couverts par heure travaillée.", niv: 2 },
        { q: "Charges de personnel : 180 000 € pour 12 000 heures travaillées. Le taux horaire moyen est de :", choix: ["6,67 €", "15 €", "12 €", "18 €"], bonne: 1, expl: "180 000 / 12 000 = 15 € par heure.", niv: 2 },
        { q: "Quel facteur ne fait **pas** augmenter la masse salariale ?", choix: ["L'achat d'un lave-vaisselle qui réduit les heures de plonge", "Une hausse du salaire minimum", "Des heures supplémentaires", "L'embauche de deux saisonniers pour renforcer l'équipe pendant l'été"], bonne: 0, expl: "L'équipement réduit le besoin d'heures ; les trois autres augmentent la masse salariale.", niv: 2 },
        { q: "Un hôtel de bord de mer travaille surtout de juin à septembre. Quel outil adapte le mieux son personnel ?", choix: ["La suppression des congés", "Une hausse permanente des effectifs en CDI, identique toute l'année", "Des CDD saisonniers et la modulation du temps de travail", "Le crédit-bail"], bonne: 2, expl: "La flexibilité des contrats et des horaires suit la saisonnalité.", niv: 2 },
        { q: "Pourquoi une flexibilité mal gérée peut-elle dégrader la performance économique à terme ?", choix: ["Parce qu'elle baisse le RevPAR à zéro", "Parce qu'elle augmente la TVA", "Parce qu'elle supprime les cotisations sociales dues sur les contrats saisonniers", "Parce que fatigue et précarité augmentent la rotation et nuisent au service"], bonne: 3, expl: "La performance sociale conditionne la performance économique à long terme.", niv: 3 },
        { q: "Une réduction des cotisations patronales sur les bas salaires a pour effet direct de :", choix: ["supprimer le salaire minimum", "augmenter le salaire net", "baisser le coût du travail pour l'employeur", "augmenter le prix des chambres et des menus pour les clients"], bonne: 2, expl: "Moins de cotisations patronales, c'est un coût du travail plus faible.", niv: 3 },
        { q: "Un personnel plus ancien et plus qualifié coûte plus cher. Pourquoi est-ce parfois un bon choix ?", choix: ["Parce que la loi interdit le turnover", "Parce qu'il ne compte pas dans la masse salariale de l'établissement", "Parce qu'il est souvent plus efficace et sert mieux les clients", "Parce qu'il ne cotise pas"], bonne: 2, expl: "Le coût horaire plus élevé peut être compensé par la productivité et la fidélité des clients.", niv: 3 },
      ],
    },
    {
      chapitre: 'sthr-egh-12',
      fiche: `## L'entreprise hôtelière peut-elle contribuer à une croissance soutenable ?

### Le poids du secteur dans l'économie
- **Production marchande** : vendue à un prix qui couvre au moins son coût (un repas au restaurant, une nuit d'hôtel). **Production non marchande** : fournie gratuitement ou presque par les administrations (un musée public gratuit, l'entretien des plages).
- Le **produit intérieur brut** (PIB) mesure la production d'un pays sur une année ; il est égal à la somme des **valeurs ajoutées**.
- La **consommation touristique intérieure** regroupe les dépenses des touristes français et étrangers en France : hébergement, restauration, transports, loisirs, achats.
- Le tourisme, l'hôtellerie et la restauration pèsent lourd dans l'économie française : production, emplois souvent non délocalisables, recettes en devises.

### Croissance et développement
- La **croissance économique** est l'augmentation durable de la production (du PIB).
- Le **développement** est l'amélioration des conditions de vie de la population : santé, éducation, revenus, logement. La croissance y contribue, mais ne suffit pas.
- **Indicateurs du développement** : l'**indice de développement humain** (IDH) combine espérance de vie, niveau d'éducation et revenu par habitant.
- Le tourisme favorise le développement local : emplois, revenus, infrastructures (routes, équipements), maintien des commerces et des services.

### Les effets indésirables
- **Inégalités sociales** : emplois parfois précaires et peu payés, hausse des prix et des loyers dans les zones touristiques, qui gêne les habitants.
- **Externalités négatives** : pollution liée aux transports, consommation d'eau et d'énergie, déchets, bruit, artificialisation des sols, dégradation des sites naturels.
- **Surtourisme** : trop de visiteurs au même endroit, au même moment, au détriment des habitants et des sites.
- **Externalités positives** : valorisation du patrimoine, animation des villages, soutien aux producteurs locaux.

### La croissance soutenable
- Un **développement durable** répond aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs (rapport Brundtland, 1987). Il concilie l'économique, le social et l'environnemental.
- La croissance est **soutenable** quand elle peut durer sans épuiser les ressources ni dégrader la société.

### Ce que peut faire l'entreprise hôtelière
- **Qualité environnementale** : économies d'énergie et d'eau (réducteurs de débit, éclairage économe, linge changé à la demande), tri et recyclage des déchets, compostage, lutte contre le gaspillage alimentaire, choix de fournisseurs locaux et de produits de saison, locaux bien isolés.
- **Écotourisme** : un tourisme responsable dans les espaces naturels, qui protège l'environnement et profite aux habitants.
- **Innovation verte** : chaudière à bois, panneaux solaires, récupération de chaleur, mobilité douce proposée aux clients (vélos, bornes de recharge).
- **Contribution locale** : embaucher localement, travailler avec les producteurs et artisans du territoire, participer à la vie locale.
- **Labels** pour rendre ces efforts visibles et crédibles (Écolabel européen, Clef verte…).
- Effets sur la performance : économies, attractivité pour une clientèle sensible à ces enjeux, image, fierté des salariés ; mais aussi investissements de départ et efforts d'organisation.

### À retenir pour le bac
- Production marchande et non marchande ; PIB = somme des valeurs ajoutées ; consommation touristique intérieure.
- Croissance (quantité) et développement (conditions de vie, IDH).
- Effets indésirables : inégalités, externalités négatives, surtourisme.
- Développement durable : besoins du présent sans compromettre ceux du futur.
- Actions de l'hôtel : environnement, écotourisme, innovation verte, ancrage local, labels.`,
      cartes: [
        { q: "Production marchande ou non marchande ?", r: "Marchande : vendue à un prix qui couvre au moins son coût. Non marchande : fournie gratuitement ou presque par les administrations." },
        { q: "Qu'est-ce que le PIB ?", r: "La mesure de la production d'un pays sur une année, égale à la somme des valeurs ajoutées." },
        { q: "Qu'est-ce que la consommation touristique intérieure ?", r: "Les dépenses des touristes français et étrangers en France : hébergement, restauration, transports, loisirs, achats." },
        { q: "Croissance ou développement ?", r: "Croissance : hausse durable de la production. Développement : amélioration des conditions de vie (santé, éducation, revenus)." },
        { q: "Qu'est-ce que l'IDH ?", r: "L'indice de développement humain : il combine espérance de vie, niveau d'éducation et revenu par habitant." },
        { q: "Comment le tourisme favorise-t-il le développement local ?", r: "Emplois, revenus, infrastructures, maintien des commerces et des services." },
        { q: "Citez deux externalités négatives du tourisme.", r: "Pollution des transports, consommation d'eau et d'énergie, déchets, bruit, dégradation des sites." },
        { q: "Qu'est-ce que le surtourisme ?", r: "Trop de visiteurs au même endroit et au même moment, au détriment des habitants et des sites." },
        { q: "Qu'est-ce que le développement durable ?", r: "Répondre aux besoins du présent sans compromettre ceux des générations futures (rapport Brundtland, 1987)." },
        { q: "Qu'est-ce que l'écotourisme ?", r: "Un tourisme responsable dans les espaces naturels, qui protège l'environnement et profite aux habitants." },
        { q: "Citez trois actions environnementales d'un hôtel.", r: "Économies d'eau et d'énergie, linge changé à la demande, tri et compostage, fournisseurs locaux, produits de saison." },
        { q: "Qu'est-ce qu'une innovation verte ?", r: "Une innovation qui réduit l'impact environnemental : chaudière à bois, panneaux solaires, récupération de chaleur." },
        { q: "Quels avantages un hôtel tire-t-il de ses actions durables ?", r: "Économies, attractivité pour une clientèle sensible, image, fierté des salariés." },
      ],
      quiz: [
        { q: "Une nuit vendue dans un hôtel est une production :", choix: ["non marchande", "marchande", "domestique", "bénévole"], bonne: 1, expl: "Elle est vendue à un prix qui couvre au moins son coût.", niv: 1 },
        { q: "Le PIB est égal à :", choix: ["la somme des valeurs ajoutées", "la somme des chiffres d'affaires", "le total des impôts", "les dépenses des touristes"], bonne: 0, expl: "Additionner les chiffres d'affaires compterait plusieurs fois les mêmes consommations intermédiaires.", niv: 1 },
        { q: "L'IDH combine :", choix: ["espérance de vie, éducation et revenu", "PIB, inflation et chômage", "nombre de touristes, d'hôtels et de restaurants par habitant", "TVA, cotisations et impôts"], bonne: 0, expl: "L'indice de développement humain mesure santé, éducation et niveau de vie.", niv: 1 },
        { q: "La définition du développement durable vient :", choix: ["du RGPD", "de la loi de 1791", "du rapport Brundtland de 1987", "du classement hôtelier"], bonne: 2, expl: "Le rapport Brundtland de 1987 a popularisé cette définition.", niv: 1 },
        { q: "La hausse des loyers dans un village très touristique, qui oblige les habitants à partir, est :", choix: ["une production non marchande", "une externalité positive", "un indicateur de développement humain de la commune", "un effet indésirable du tourisme"], bonne: 3, expl: "C'est un effet négatif sur les habitants, source d'inégalités.", niv: 2 },
        { q: "Un hôtel qui ne change les serviettes qu'à la demande du client agit surtout sur :", choix: ["sa performance environnementale", "sa trésorerie de TVA", "son classement en étoiles", "son taux de change"], bonne: 0, expl: "Moins de lavages, c'est moins d'eau, d'énergie et de produits.", niv: 2 },
        { q: "Quelle action ne relève **pas** d'une démarche de croissance soutenable ?", choix: ["Acheter des produits locaux et de saison", "Jeter les invendus pour gagner du temps", "Composter les déchets de cuisine", "Embaucher des habitants du territoire"], bonne: 1, expl: "Le gaspillage va à l'encontre de la démarche ; les trois autres la soutiennent.", niv: 2 },
        { q: "Un gîte organise des randonnées guidées par des habitants dans un parc naturel protégé, en limitant les groupes. C'est :", choix: ["de la restauration collective", "du surtourisme", "du tourisme d'affaires", "de l'écotourisme"], bonne: 3, expl: "Tourisme responsable en milieu naturel, qui profite aux habitants : écotourisme.", niv: 2 },
        { q: "Pourquoi les emplois de l'hôtellerie-restauration sont-ils dits souvent non délocalisables ?", choix: ["Parce que la loi interdit aux hôtels d'embaucher des salariés à l'étranger", "Parce que le service est produit là où se trouve le client", "Parce que les salaires sont fixés par l'État", "Parce qu'il s'agit d'emplois publics pour la plupart"], bonne: 1, expl: "On ne peut pas servir un repas ou faire une chambre à distance.", niv: 2 },
        { q: "Une forte croissance du tourisme dans une région s'accompagne de pollution et de précarité. On peut dire :", choix: ["que l'IDH est nul", "qu'il y a nécessairement développement", "que le PIB du pays baisse nécessairement dans les années suivantes", "qu'il y a croissance sans développement soutenable"], bonne: 3, expl: "La croissance ne suffit pas : ses effets sociaux et environnementaux comptent.", niv: 3 },
        { q: "Pourquoi une démarche environnementale peut-elle améliorer la performance économique d'un hôtel ?", choix: ["Parce qu'elle augmente le taux de TVA", "Parce qu'elle supprime l'investissement nécessaire au renouvellement des équipements", "Parce qu'elle réduit les coûts et attire une clientèle sensible", "Parce qu'elle réduit le nombre de clients"], bonne: 2, expl: "Les trois dimensions de la performance se renforcent : moins de coûts, meilleure image.", niv: 3 },
        { q: "Quelle est la principale limite d'une chaudière à bois pour un petit hôtel ?", choix: ["L'interdiction de chauffer les chambres", "La hausse de sa consommation d'énergie fossile", "L'investissement de départ élevé", "La perte de son classement"], bonne: 2, expl: "L'innovation verte demande un investissement, amorti ensuite par les économies.", niv: 3 },
      ],
    },
  ],
  methode: [
    { id: 'sthr-egh-m1', mat: 'sthr-egh', titre: 'Compléter et justifier un tableau de gestion',
      formules: ['Justifier par le calcul les éléments du tableau de gestion', 'Compléter le tableau de gestion en annexe (à rendre avec la copie), en justifiant les calculs'],
      vu: ['Bac 2026 métropole, « Le Swing » : question 1.3', 'Bac 2025 métropole, « Le Val d\'Allier » : question 2.1 (coût matières, charges de personnel, frais généraux, coût d\'occupation)'],
      pts: 'Environ 6 à 10 points sur 100',
      attendu: 'Retrouver chaque ligne du tableau à partir du compte de résultat en annexe, en montrant le calcul, puis exprimer chaque solde en pourcentage du CA HT. Le correcteur vérifie le choix des bons comptes et l\'exactitude des calculs.',
      etapes: ['Repérer dans le compte de résultat les charges de chaque famille : matières, personnel, frais généraux, occupation.', 'Calculer le coût des matières consommées : achats + stock initial - stock final.', 'Additionner salaires et cotisations sociales pour les charges de personnel.', 'Descendre le tableau : marge brute, marge sur coût principal, RBE, résultat courant.', 'Calculer chaque pourcentage du CA HT et vérifier que les soldes se suivent.'],
      mots: ['CA HT', 'coût des matières consommées', 'marge brute', 'charges de personnel', 'marge sur coût principal', 'frais généraux', 'RBE', 'coûts d\'occupation'],
      pieges: ['Oublier la variation de stock.', 'Prendre le CA TTC.', 'Mettre l\'amortissement dans les frais généraux au lieu des coûts d\'occupation.', 'Donner un résultat sans le calcul.'],
      cas: 'Restaurant inventé « Le Comptoir des Halles » : CA HT 520 000 € ; achats de denrées 150 000 € ; stock initial 9 000 € ; stock final 11 000 € ; salaires 132 000 € ; cotisations sociales 46 000 €.',
      question: 'Calculez le coût des matières consommées, la marge brute, les charges de personnel et la marge sur coût principal, en euros et en % du CA.',
      modele: 'Coût des matières consommées = 150 000 + 9 000 - 11 000 = 148 000 €, soit 148 000 / 520 000 = 28,5 % du CA. Marge brute = 520 000 - 148 000 = 372 000 €, soit 71,5 %. Charges de personnel = 132 000 + 46 000 = 178 000 €, soit 34,2 %. Marge sur coût principal = 372 000 - 178 000 = 194 000 €, soit 37,3 % du CA.',
      grille: ['Variation de stock prise en compte', 'Salaires et cotisations additionnés', 'Soldes justes et dans l\'ordre', 'Pourcentages du CA HT exacts', 'Calculs montrés'] },
    { id: 'sthr-egh-m2', mat: 'sthr-egh', titre: 'Calculer et commenter les indicateurs commerciaux',
      formules: ['Compléter le tableau de bord commercial en justifiant les calculs', 'Compléter les indicateurs commerciaux', 'Commenter l\'évolution de la performance commerciale'],
      vu: ['Bac 2026 métropole, « Le Swing » : questions 1.1 et 1.2 (taux de remplissage, ticket moyen, part du CA, taux d\'évolution)', 'Bac 2025 métropole, « Le Val d\'Allier » : question 2.2 (taux d\'occupation, indice de fréquentation, prix moyen chambre, RevPAR, taux de remplissage, ticket moyen)'],
      pts: 'Environ 8 à 12 points sur 100',
      attendu: 'Des calculs justes et justifiés, puis un commentaire qui compare deux années ou une norme, explique les causes à l\'aide des annexes et conclut sur la performance commerciale.',
      etapes: ['Écrire la formule avant le calcul.', 'Calculer TO, PMC, RevPAR, indice de fréquentation, taux de remplissage, ticket moyen, taux d\'évolution.', 'Comparer : hausse ou baisse, en points pour les taux, en % pour les montants.', 'Expliquer avec les événements des annexes (travaux, concurrence, nouvelle offre).', 'Conclure : la performance commerciale s\'améliore-t-elle, et pourquoi ?'],
      mots: ['taux d\'occupation', 'prix moyen chambre', 'RevPAR', 'taux de remplissage', 'ticket moyen', 'taux d\'évolution', 'en points'],
      pieges: ['Confondre PMC (division par les chambres louées) et RevPAR (par les chambres disponibles).', 'Dire « hausse de 3 % » pour un taux qui gagne 3 points.', 'Calculer sans commenter.'],
      cas: 'Hôtel inventé « Les Tilleuls » : 2025 : 3 960 chambres louées sur 6 000 disponibles, CA hébergement HT 316 800 €. 2026 : 4 200 chambres louées sur 6 000, CA hébergement HT 352 800 €.',
      question: 'Calculez le TO, le PMC et le RevPAR des deux années, puis commentez.',
      modele: '2025 : TO = 3 960 / 6 000 = 66 % ; PMC = 316 800 / 3 960 = 80 € ; RevPAR = 316 800 / 6 000 = 52,80 €. 2026 : TO = 70 % ; PMC = 352 800 / 4 200 = 84 € ; RevPAR = 58,80 €. Le TO gagne 4 points et le PMC augmente de 5 % : l\'hôtel remplit mieux sans baisser ses prix. Le RevPAR progresse donc de 11,4 % ; la performance commerciale s\'améliore nettement.',
      grille: ['Formules écrites', 'Calculs justes', 'Évolutions en points et en %', 'Lien PMC, TO et RevPAR expliqué', 'Conclusion'] },
    { id: 'sthr-egh-m3', mat: 'sthr-egh', titre: 'Analyser de façon structurée la performance économique',
      formules: ['Analyser de façon structurée la performance économique', 'Analyser l\'évolution des coûts et de la profitabilité en comparant aux normes', 'Apprécier la profitabilité'],
      vu: ['Bac 2026 métropole, « Le Swing » : question 1.4', 'Bac 2025 métropole, « Le Val d\'Allier » : question 2.3'],
      pts: 'Environ 8 à 10 points sur 100',
      attendu: 'Une analyse rédigée et organisée, pas une liste de chiffres : chaque poste du tableau de gestion est comparé à la norme et à l\'année précédente, les écarts sont expliqués par les annexes, et la conclusion répond à la question posée.',
      etapes: ['Annoncer le plan : activité commerciale, coûts, profitabilité.', 'Pour chaque poste : chiffre, comparaison avec la norme, cause probable.', 'Commenter le RBE ou le résultat courant en % du CA (profitabilité).', 'Relier aux annexes (hausse des prix des denrées, embauches, travaux).', 'Conclure et proposer une ou deux pistes d\'amélioration.'],
      mots: ['au-dessus de la norme', 'en dessous de la norme', 'maîtrisé', 'profitabilité', 'coût principal', 'ce qui s\'explique par'],
      pieges: ['Recopier le tableau sans l\'analyser.', 'Oublier de comparer à la norme.', 'Ne pas conclure.'],
      cas: 'Restaurant inventé « La Table d\'Hélène » : matières 33 % du CA (norme 26 à 35 %), personnel 41 % (norme 30 à 35 %), frais généraux 12 % (norme 10 à 15 %), RBE 14 % du CA. L\'annexe indique trois embauches en CDI cette année, pour un chiffre d\'affaires stable.',
      question: 'Analysez la performance économique du restaurant.',
      modele: 'Le coût des matières (33 %) et les frais généraux (12 %) restent dans les normes du secteur : achats et dépenses courantes sont maîtrisés. En revanche, les charges de personnel atteignent 41 % du CA, soit 6 points au-dessus du haut de la norme : les trois embauches n\'ont pas été accompagnées d\'une hausse des ventes. Le coût principal (74 %) pèse donc lourd et le RBE ne représente que 14 % du CA, ce qui limite la profitabilité. Le restaurant doit soit augmenter son activité (nouveaux services, privatisations) pour employer pleinement ses salariés, soit ajuster ses plannings.',
      grille: ['Chaque poste comparé à la norme', 'Écart principal repéré et expliqué', 'Profitabilité commentée', 'Lien avec les annexes', 'Conclusion avec propositions'] },
    { id: 'sthr-egh-m4', mat: 'sthr-egh', titre: 'Étudier un projet : seuil de rentabilité et amortissement',
      formules: ['Calculer le seuil de rentabilité et indiquer le nombre moyen de… à vendre', 'Apprécier la profitabilité du projet', 'Compléter les premières lignes du tableau d\'amortissement', 'Rappeler l\'impact de l\'amortissement sur le compte de résultat'],
      vu: ['Bac 2026 métropole, « Le Swing » : questions 2.3 et 2.4 (simulateur de golf)', 'Bac 2025 métropole, « Le Val d\'Allier » : questions 4.2 et 4.3 (chaudière à bois)'],
      pts: 'Environ 10 à 15 points sur 100',
      attendu: 'Des calculs justes à partir du compte de résultat différentiel (marge sur coût variable, taux, seuil, point mort ou quantité à vendre), puis un avis argumenté sur l\'intérêt du projet. Pour l\'amortissement : annuité au prorata la première année, cumul, valeur nette comptable, et l\'idée qu\'il s\'agit d\'une charge sans sortie d\'argent.',
      etapes: ['Calculer la marge sur coût variable et son taux.', 'Seuil = charges fixes / taux de MCV ; en quantité : SR / prix unitaire.', 'Comparer le CA prévu au seuil : marge de sécurité.', 'Calculer le résultat et la profitabilité (résultat / CA).', 'Conclure : le projet est-il intéressant, et à quelles conditions ?'],
      mots: ['marge sur coût variable', 'taux de MCV', 'seuil de rentabilité', 'point mort', 'marge de sécurité', 'annuité', 'prorata', 'valeur nette comptable'],
      pieges: ['Diviser par la MCV en euros au lieu du taux.', 'Oublier le prorata la première année.', 'Ne pas donner d\'avis sur le projet.'],
      cas: 'Bar inventé « L\'Escale » : projet de soirées concerts. CA prévu 48 000 € ; charges variables 19 200 € ; charges fixes 21 600 € ; dépense moyenne par client 16 €.',
      question: 'Calculez le seuil de rentabilité en euros et en nombre de clients, puis appréciez le projet.',
      modele: 'MCV = 48 000 - 19 200 = 28 800 €, soit un taux de 60 %. SR = 21 600 / 0,6 = 36 000 €, soit 36 000 / 16 = 2 250 clients. Le CA prévu dépasse le seuil de 12 000 € (marge de sécurité de 25 %). Résultat = 28 800 - 21 600 = 7 200 €, soit une profitabilité de 15 %. Le projet est intéressant si la fréquentation prévue est réaliste ; il faut l\'appuyer sur une communication active.',
      grille: ['MCV et taux justes', 'Seuil en euros et en quantité', 'Marge de sécurité ou point mort', 'Profitabilité calculée', 'Avis argumenté'] },
    { id: 'sthr-egh-m5', mat: 'sthr-egh', titre: 'Mettre en évidence la performance sociale et proposer un plan d\'action',
      formules: ['Mettre en évidence la dégradation de la performance sociale', 'Présenter les leviers financiers et non financiers', 'Proposer un plan d\'action pour remobiliser le personnel'],
      vu: ['Bac 2026 métropole, « Le Swing » : dossier 3 « Améliorer le climat social »', 'Bac 2025 métropole, « Le Val d\'Allier » : dossier 3 « Fidélisation du personnel » (semaine de quatre jours)'],
      pts: 'Environ 20 à 30 points sur 100',
      attendu: 'Calculer ou relever les indicateurs sociaux (absentéisme, rotation, accidents, conflits), montrer leur évolution, en expliquer les causes à partir des annexes, puis proposer des actions précises, réalistes et classées (leviers financiers et non financiers).',
      etapes: ['Relever les indicateurs et leur évolution chiffrée.', 'Expliquer les causes : horaires, coupures, reconnaissance, management, salaires.', 'Repérer ce qui fonctionne déjà (points forts).', 'Proposer trois à cinq actions : rémunération périphérique, plannings, formation, communication interne, reconnaissance.', 'Montrer l\'effet attendu sur la performance économique.'],
      mots: ['taux d\'absentéisme', 'taux de rotation', 'climat social', 'rémunération périphérique', 'équité', 'communication interne', 'reconnaissance'],
      pieges: ['Proposer seulement une hausse de salaire.', 'Des actions vagues (« motiver les salariés »).', 'Oublier le lien avec la performance économique.'],
      cas: 'Brasserie inventée « Le Quai » : effectif moyen 12 ; 5 entrées et 7 sorties dans l\'année ; les salariés se plaignent de plannings donnés la veille et de coupures longues.',
      question: 'Calculez le taux de rotation et proposez trois actions pour fidéliser le personnel.',
      modele: 'Taux de rotation = ((5 + 7) / 2) / 12 x 100 = 50 % : la moitié de l\'équipe se renouvelle en un an, ce qui est très élevé. Actions : 1) publier les plannings deux semaines à l\'avance et limiter les coupures grâce à des horaires en continu sur certains postes ; 2) instaurer une prime d\'ancienneté ou un repas de qualité offert (levier financier) ; 3) organiser un briefing quotidien et un entretien annuel avec un plan de formation (levier non financier). Une équipe plus stable coûtera moins en recrutement et servira mieux les clients.',
      grille: ['Calcul juste et commenté', 'Causes reliées aux annexes', 'Actions précises et réalistes', 'Leviers financiers et non financiers', 'Lien avec la performance économique'] },
  ],
  sujets: [
    { id: 'sthr-egh-s1', matiere: 'sthr-egh', titre: 'Sujet d\'entraînement inventé : « Le Relais des Combes »', duree: 240,
      enonce: `## Sujet d'entraînement (entièrement inventé)

L'établissement, les personnes et tous les chiffres de ce sujet sont fictifs. Durée : 4 heures. Calculatrice autorisée. Barème sur 100 points : dossier 1 sur 35, dossier 2 sur 25, dossier 3 sur 25, dossier 4 sur 15. Comme au bac 2027, 2 points sur 20 de la note finale sont réservés à l'orthographe et à la syntaxe.

**Présentation.** « Le Relais des Combes » est un hôtel-restaurant indépendant de 18 chambres, situé dans un village fictif de moyenne montagne. Il est ouvert 300 jours par an. Son restaurant compte 40 places et assure deux services par jour. Claire Morand, la gérante, s'interroge sur sa performance après une année 2026 contrastée.

## Dossier 1 : Apprécier la performance d'exploitation (35 points)

À l'aide des annexes 1 et 2 :
1.1 Calculez, en justifiant, le taux d'occupation, l'indice de fréquentation, le prix moyen chambre et le RevPAR de 2026.
1.2 Calculez le taux de remplissage et le ticket moyen du restaurant en 2026.
1.3 Commentez l'évolution de la performance commerciale entre 2025 et 2026.
1.4 Analysez de façon structurée le tableau de gestion 2026 en le comparant aux normes.

## Dossier 2 : Étudier le projet de terrasse (25 points)

À l'aide de l'annexe 3 :
2.1 Calculez l'amortissement de la terrasse pour 2027.
2.2 Calculez le seuil de rentabilité de la terrasse en euros et en nombre de couverts, puis la date du point mort.
2.3 Appréciez la profitabilité du projet et donnez votre avis.

## Dossier 3 : Remobiliser le personnel (25 points)

À l'aide de l'annexe 4 :
3.1 Calculez le taux de rotation et le taux d'absentéisme de 2026, puis mettez en évidence l'évolution de la performance sociale.
3.2 Proposez un plan d'action pour remobiliser le personnel.

## Dossier 4 : S'engager dans une démarche durable (15 points)

À l'aide de l'annexe 5 :
4.1 Montrez que l'obtention d'un label environnemental peut améliorer la performance globale du Relais.
4.2 Proposez deux actions de communication pour faire connaître cet engagement.

## Annexes (fictives)

**Annexe 1. Indicateurs d'activité.**
- 2026 : 5 400 chambres disponibles, 3 780 chambres louées, 6 426 clients hébergés, CA hébergement HT 340 200 €. Capacité du restaurant 24 000 couverts, 14 400 couverts servis, CA restauration HT 489 600 €.
- 2025 : taux d'occupation 66 % ; prix moyen chambre 86 € ; RevPAR 56,76 € ; taux de remplissage 64 % ; ticket moyen 32 €.
- Événements de 2026 : nouvelle carte de saison avec des produits locaux, hausse des prix des chambres, départ du second de cuisine en mai, ouverture d'une brasserie concurrente à 3 km.

**Annexe 2. Tableau de gestion 2026 (CA total HT : 829 800 €).**
- Coût des matières consommées : 182 556 € ; marge brute : 647 244 €.
- Charges de personnel : 307 026 € ; marge sur coût principal : 340 218 €.
- Frais généraux : 107 874 € ; résultat brut d'exploitation : 232 344 €.
- Coûts d'occupation : 124 470 € ; résultat courant avant impôt : 107 874 €.
- Normes indiquées pour ce type d'établissement, en % du CA total HT : matières 20 à 25 %, personnel 30 à 35 %, frais généraux 10 à 15 %, coûts d'occupation 12 à 18 %.

**Annexe 3. Projet de terrasse panoramique.**
- Investissement : 36 000 € HT, mis en service le 1er avril 2027, amorti en linéaire sur 6 ans.
- Saison de la terrasse : du 1er juin au 30 septembre (4 mois, activité régulière).
- Prévisions pour une saison : CA HT 60 000 € ; charges variables 24 000 € ; charges fixes 27 000 € (dont amortissement en année pleine et personnel saisonnier). Ticket moyen prévu : 30 € HT.

**Annexe 4. Extrait du tableau de bord social.**
- 2026 : effectif moyen 16 ; 7 entrées et 9 sorties ; 1 680 heures d'absence pour 28 000 heures prévues.
- 2025 : taux de rotation 25 % ; taux d'absentéisme 3,5 %.
- Verbatims de salariés : « Le planning tombe le jeudi pour la semaine suivante. » « Les coupures de trois heures nous épuisent. » « On ne sait jamais si on fait du bon travail. »

**Annexe 5. Un label environnemental (texte fictif).**
- Le label exige un plan d'économies d'eau et d'énergie, le tri des déchets, des achats locaux et l'information des clients. Selon l'organisme fictif qui le délivre, les établissements labellisés réduisent leur facture d'énergie et attirent une clientèle sensible à ces enjeux, notamment étrangère.`,
      corrige: `## Corrigé

### Dossier 1
**1.1** TO = 3 780 / 5 400 x 100 = **70 %**. Indice de fréquentation = 6 426 / 3 780 = **1,7**. PMC = 340 200 / 3 780 = **90 €**. RevPAR = 340 200 / 5 400 = **63 €** (ou 70 % x 90 €).

**1.2** Taux de remplissage = 14 400 / 24 000 x 100 = **60 %**. Ticket moyen = 489 600 / 14 400 = **34 €**.

**1.3** Hébergement : le TO gagne 4 points (66 à 70 %) malgré la hausse du PMC (86 à 90 €, + 4,7 %) : la clientèle accepte les nouveaux prix. Le RevPAR progresse de 56,76 à 63 €, soit + 11 %. Restaurant : le ticket moyen monte de 32 à 34 € (+ 6,3 %), porté par la nouvelle carte, mais le taux de remplissage perd 4 points (64 à 60 %), sans doute à cause de la brasserie concurrente. Conclusion : bonne performance de l'hébergement, fréquentation du restaurant à surveiller.

**1.4** Matières : 182 556 / 829 800 = 22 %, dans la norme (20 à 25 %), malgré les produits locaux. Personnel : 307 026 / 829 800 = **37 %**, au-dessus de la norme (30 à 35 %) : le départ du second de cuisine a pu entraîner remplacements et heures supplémentaires, alors que la fréquentation du restaurant baisse. Frais généraux : 13 %, dans la norme. Coûts d'occupation : 15 %, dans la norme. RBE : 28 % du CA ; résultat courant : 13 % du CA, ce qui reste une profitabilité correcte. Le principal levier d'amélioration est la maîtrise des charges de personnel.

### Dossier 2
**2.1** Annuité pleine = 36 000 / 6 = 6 000 €. En 2027, la terrasse sert 9 mois (avril à décembre) : 6 000 x 9/12 = **4 500 €**. C'est une charge qui diminue le résultat sans sortie d'argent.

**2.2** MCV = 60 000 - 24 000 = 36 000 € ; taux = 60 %. SR = 27 000 / 0,6 = **45 000 €**, soit 45 000 / 30 = **1 500 couverts**. Point mort = 45 000 / 60 000 x 4 mois = 3 mois après le 1er juin, soit **fin août**.

**2.3** Résultat = 36 000 - 27 000 = 9 000 € ; profitabilité = 9 000 / 60 000 = **15 %**. Marge de sécurité : 15 000 €, soit 25 % du CA. Le projet est rentable, mais le seuil n'est atteint qu'en fin de saison : une météo défavorable ou la concurrence peuvent le compromettre. Avis favorable, avec une communication forte en début d'été.

### Dossier 3
**3.1** Rotation = ((7 + 9) / 2) / 16 x 100 = **50 %** (contre 25 %). Absentéisme = 1 680 / 28 000 x 100 = **6 %** (contre 3,5 %). Les deux indicateurs se dégradent fortement : la performance sociale baisse. Causes d'après les verbatims : plannings tardifs, longues coupures, manque de reconnaissance.

**3.2** Plan d'action : publier les plannings deux semaines à l'avance ; réduire les coupures (horaires en continu, repos consécutifs) ; entretien individuel annuel et retours réguliers sur le travail ; prime liée à l'ancienneté ou à la satisfaction des clients ; briefing quotidien ; plan de formation. Effet attendu : moins de départs et d'absences, des coûts de remplacement plus faibles et une meilleure qualité de service.

### Dossier 4
**4.1** Économique : baisse des factures d'eau et d'énergie, attractivité auprès d'une clientèle sensible, notamment étrangère, ce qui soutient le TO. Environnemental : moins de consommation, de déchets et de transport des produits. Social : fierté et implication des salariés, image d'employeur responsable. Les trois dimensions se renforcent, à condition que les engagements soient réels.

**4.2** Exemples : publier l'engagement sur le site et les réseaux sociaux, avec des photos des producteurs locaux (communication institutionnelle) ; informer les clients en chambre et dans le courriel de confirmation de réservation (marketing direct) ; organiser une soirée « produits du terroir » (événementiel).`,
      grille: [
        { c: 'Dossier 1 : indicateurs justes et justifiés, commentaire de l\'évolution, analyse structurée du tableau de gestion avec les normes', pts: 6 },
        { c: 'Dossier 2 : amortissement au prorata, seuil en euros et en couverts, point mort, profitabilité et avis argumenté', pts: 5 },
        { c: 'Dossier 3 : taux de rotation et d\'absentéisme, causes tirées des annexes, plan d\'action précis', pts: 4 },
        { c: 'Dossier 4 : effets sur les trois dimensions de la performance, deux actions de communication adaptées', pts: 3 },
        { c: 'Maîtrise de la langue : orthographe et syntaxe (2 points sur 20 à partir de 2027)', pts: 2 },
      ] },
  ],
};
