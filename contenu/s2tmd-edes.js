// Économie, droit et environnement du spectacle vivant (EDESV) — S2TMD. Sources : voir matiere.sources.
// Programme : BO n° 31 du 29/08/2019, annexe 1. C'est un enseignement de spécialité de PREMIÈRE seulement :
// il n'y a pas de programme de terminale. Les 6 chapitres suivent les 6 questions du programme, dans l'ordre.
// Évaluation : spécialité suivie uniquement en première, prise en compte dans le contrôle continu (moyennes de première).
// En 2021, une épreuve commune orale sur projet existait (BO n° 40 du 31/10/2019) : elle sert de modèle aux questions types.
export default {
  matiere: {
    id: 's2tmd-edes',
    nom: 'Économie, droit et environnement du spectacle vivant',
    voie: 's2tmd',
    epreuve: { type: 'controle continu', quand: 'en première', note: 'Enseignement de spécialité suivi seulement en classe de première : pas d\'épreuve finale. La note vient des moyennes de première et compte dans le contrôle continu (coefficient 8). Les notions restent utiles en terminale pour le grand oral et pour l\'épreuve de culture et sciences.' },
    sources: [
      'https://eduscol.education.fr/document/23239/download',
      'https://eduscol.education.gouv.fr/5844/programmes-et-ressources-en-serie-s2tmd',
      'https://eduscol.education.fr/document/19354/download',
      'https://eduscol.education.fr/document/23260/download',
      'https://eduscol.education.fr/document/23266/download',
      'https://www.education.gouv.fr/bo/19/Hebdo40/MENE1929467N.htm',
      'https://ses.ens-lyon.fr/enseigner/programmes/les-themes-du-programme-d-edesv-en-premiere',
    ],
    chapitres: [
      { id: 's2tmd-edes-1', t: 'Quels sont les facteurs de différenciation des pratiques culturelles ?', theme: 'Sociologie des pratiques culturelles' },
      { id: 's2tmd-edes-2', t: 'Quel est le poids de la culture dans l\'économie et l\'emploi ?', theme: 'Économie de la culture et du spectacle vivant' },
      { id: 's2tmd-edes-3', t: 'Quelles sont les spécificités de l\'économie du spectacle vivant ?', theme: 'Économie de la culture et du spectacle vivant' },
      { id: 's2tmd-edes-4', t: 'Quels sont les objectifs et les évolutions de la politique culturelle ?', theme: 'Économie de la culture et du spectacle vivant' },
      { id: 's2tmd-edes-5', t: 'Quelles sont les caractéristiques de l\'environnement professionnel du spectacle vivant ?', theme: 'Environnement professionnel du spectacle vivant' },
      { id: 's2tmd-edes-6', t: 'Quelles sont les principales caractéristiques du droit du spectacle vivant ?', theme: 'Droit du spectacle vivant' },
    ],
  },
  paquets: [
    // ---------------------------------------------------------------- 1
    {
      chapitre: 's2tmd-edes-1',
      fiche: `## Quels sont les facteurs de différenciation des pratiques culturelles ?

### Deux sens du mot culture
- Au **sens courant**, la culture désigne les œuvres et les savoirs reconnus : aller à l'opéra, lire des classiques, connaître les grands peintres. On dit de quelqu'un qu'il est « cultivé ».
- Au **sens sociologique**, la culture est l'ensemble des **manières de penser, de sentir et d'agir** partagées par un groupe : ses valeurs, ses normes, ses goûts, ses loisirs. Tout groupe a une culture, il n'y a pas de groupe « sans culture ».

### Les pratiques culturelles
- Les **pratiques culturelles** recouvrent des activités très diverses :
- la **consommation** de biens et de services culturels (aller au concert, au théâtre, écouter de la musique, regarder une série) ;
- la **participation** à des activités artistiques en amateur (jouer d'un instrument, faire du théâtre, danser).
- Elles sont mesurées par de grandes **enquêtes** statistiques, comme l'enquête « Pratiques culturelles des Français » du ministère de la Culture, qui interroge un large échantillon de personnes.

### Des goûts socialement différenciés
- Les pratiques ne sont pas réparties au hasard : elles varient selon plusieurs **facteurs**.
- La **catégorie socioprofessionnelle** (PCS) : les cadres vont beaucoup plus souvent au théâtre ou à l'opéra que les ouvriers.
- Le **niveau de diplôme** : c'est souvent le facteur le plus fort. Plus on est diplômé, plus on fréquente les spectacles vivants.
- L'**âge et la génération** : les jeunes écoutent plus de musique en ligne et vont plus aux concerts de musiques actuelles ; une génération garde en vieillissant des habitudes prises dans sa jeunesse.
- Le **sexe** : les femmes lisent plus et vont plus souvent au théâtre ou à la danse.
- Le **lieu d'habitat** : en ville, l'offre est plus proche et plus abondante qu'à la campagne.
- Ces pratiques participent à la définition de **styles de vie** : des manières de vivre propres à un groupe.

### Les explications des sociologues
- Pierre **Bourdieu** (La Distinction, 1979) : les goûts dépendent du **capital culturel** transmis par la famille et l'école. Les classes supérieures possèdent la culture la plus **légitime** (valorisée) et s'en servent pour se **distinguer**.
- Richard Peterson : aujourd'hui, les classes supérieures sont plutôt **omnivores** : elles aiment à la fois l'opéra et des musiques populaires.
- Bernard **Lahire** (La Culture des individus, 2004) : un même individu reçoit des **influences socialisatrices** variées (famille, amis, école, médias). Il peut avoir des goûts très légitimes dans un domaine et populaires dans un autre : ce sont des **dissonances culturelles**. Elles sont très fréquentes.

### Le numérique
- Le **numérique** modifie l'**accès** à la culture : écoute en ligne, vidéos de spectacles, billetterie sur internet, réseaux sociaux qui font découvrir des artistes.
- Il modifie aussi les **usages** : on écoute plus de musique, mais souvent en fond et morceau par morceau ; les recommandations des plateformes orientent les choix.
- Il rend la culture plus accessible, mais ne supprime pas les inégalités : les plus diplômés en profitent souvent plus pour découvrir des œuvres variées.

### Lire les données sur le public
- On rencontre surtout des **pourcentages de répartition** (« 40 % des spectateurs de théâtre sont des cadres ») et des **taux de fréquentation** (« 15 % des ouvriers sont allés au théâtre dans l'année »). Ce ne sont pas les mêmes informations : il faut toujours lire le titre, la source, l'unité et le champ.
- Exemple de calcul : un festival passe de 20 000 à 25 000 spectateurs. Taux de variation = (25 000 − 20 000) ÷ 20 000 × 100 = **+ 25 %**.

### À retenir pour le bac
- Distinguer culture au sens courant et au sens sociologique.
- Les facteurs : PCS, diplôme, âge et génération, sexe, lieu d'habitat.
- Bourdieu : capital culturel, distinction. Lahire : dissonances culturelles.
- Le numérique change l'accès et les usages, sans effacer les inégalités.
- Ne pas confondre une répartition et un taux de fréquentation.`,
      cartes: [
        { q: "Qu'est-ce que la culture au sens sociologique ?", r: "L'ensemble des manières de penser, de sentir et d'agir partagées par un groupe : valeurs, normes, goûts, loisirs." },
        { q: "Qu'est-ce que la culture au sens courant ?", r: "Les œuvres et les savoirs reconnus comme précieux : opéra, littérature classique, grands peintres." },
        { q: "Que recouvrent les pratiques culturelles ?", r: "La consommation de biens et services culturels et la participation à des activités artistiques en amateur." },
        { q: "Quels sont les facteurs de différenciation des pratiques culturelles ?", r: "La PCS, le niveau de diplôme, l'âge et la génération, le sexe et le lieu d'habitat." },
        { q: "Quel est souvent le facteur le plus fort pour aller au théâtre ?", r: "Le niveau de diplôme : plus on est diplômé, plus on fréquente les spectacles vivants." },
        { q: "Qu'est-ce qu'un style de vie ?", r: "Une manière de vivre propre à un groupe social, à laquelle participent ses pratiques culturelles." },
        { q: "Qu'est-ce que le capital culturel chez Bourdieu ?", r: "Les savoirs, les diplômes et les goûts transmis par la famille et l'école, qui donnent accès à la culture légitime." },
        { q: "Que veut dire « se distinguer » chez Bourdieu ?", r: "Utiliser ses goûts pour la culture légitime afin de marquer sa différence avec les autres groupes sociaux." },
        { q: "Qu'est-ce qu'un individu omnivore culturel ?", r: "Une personne qui aime à la fois des œuvres très légitimes et des pratiques populaires (Peterson)." },
        { q: "Qu'est-ce qu'une dissonance culturelle ?", r: "Le fait qu'un même individu ait des goûts légitimes dans un domaine et populaires dans un autre (Lahire)." },
        { q: "D'où viennent les dissonances culturelles selon Lahire ?", r: "De la pluralité des influences socialisatrices : famille, amis, école, médias, conjoint." },
        { q: "Comment le numérique modifie-t-il les pratiques culturelles ?", r: "Il change l'accès (écoute en ligne, billetterie, vidéos) et les usages (écoute en fond, recommandations des plateformes)." },
        { q: "Le numérique supprime-t-il les inégalités d'accès à la culture ?", r: "Non : il rend l'accès plus facile, mais les plus diplômés en profitent souvent davantage pour découvrir des œuvres variées." },
        { q: "Répartition ou taux de fréquentation ?", r: "La répartition dit qui compose le public (40 % sont des cadres) ; le taux dit quelle part d'un groupe y va (15 % des ouvriers)." },
        { q: "Un festival passe de 20 000 à 25 000 spectateurs : taux de variation ?", r: "(25 000 − 20 000) ÷ 20 000 × 100 = + 25 %." },
      ],
      quiz: [
        { q: "Au sens sociologique, la culture désigne :", choix: ["les œuvres reconnues par les spécialistes", "les connaissances apprises au lycée", "les manières de penser, de sentir et d'agir d'un groupe", "les spectacles subventionnés par l'État et les collectivités"], bonne: 2, expl: "Le sens sociologique est large : tout groupe a une culture. Les œuvres reconnues relèvent du sens courant.", niv: 1 },
        { q: "Selon les enquêtes, quel facteur joue souvent le plus sur la fréquentation des théâtres ?", choix: ["Le niveau de diplôme", "Le mois de naissance", "La taille du logement", "Le nombre de frères et sœurs"], bonne: 0, expl: "Le diplôme, lié au capital culturel, est le facteur le plus discriminant pour les sorties au spectacle.", niv: 1 },
        { q: "Une élève de famille ouvrière va à l'opéra avec son lycée et écoute aussi du rap. Lahire parlerait de :", choix: ["distinction", "culture légitime", "capital économique", "dissonance culturelle"], bonne: 3, expl: "Elle combine des goûts de légitimité différente, sous des influences variées : c'est une dissonance.", niv: 2 },
        { q: "Pour Bourdieu, les classes supérieures utilisent leurs goûts culturels pour :", choix: ["se rapprocher des classes populaires", "se distinguer des autres groupes", "gagner plus d'argent", "suivre les recommandations des plateformes"], bonne: 1, expl: "La culture légitime sert de marque de distinction sociale.", niv: 1 },
        { q: "« 40 % des spectateurs de théâtre sont des cadres. » Cette donnée signifie que :", choix: ["sur 100 spectateurs de théâtre, 40 sont des cadres", "40 % des cadres vont au théâtre", "les cadres vont 40 fois plus au théâtre", "40 % des théâtres de France sont dirigés par des cadres"], bonne: 0, expl: "C'est une répartition du public, pas un taux de fréquentation des cadres.", niv: 2 },
        { q: "Une salle de concert passe de 12 000 à 9 000 spectateurs par an. Le taux de variation est de :", choix: ["− 3 000 %", "+ 25 %", "− 25 %", "− 33 %"], bonne: 2, expl: "(9 000 − 12 000) ÷ 12 000 × 100 = − 25 %.", niv: 2 },
        { q: "Quel effet du numérique sur les pratiques culturelles est juste ?", choix: ["Il a fait disparaître les inégalités d'accès", "Il a fait baisser l'écoute de musique", "Il a surtout touché les personnes âgées, plus que les jeunes", "Il modifie l'accès aux œuvres et la manière de les écouter"], bonne: 3, expl: "Il change l'accès et les usages, mais les inégalités selon le diplôme demeurent.", niv: 2 },
        { q: "Qu'est-ce qu'un « omnivore » culturel selon Peterson ?", choix: ["Quelqu'un qui mêle goûts légitimes et pratiques populaires", "Quelqu'un qui ne consomme que des œuvres classiques", "Quelqu'un qui préfère le cinéma aux spectacles", "Quelqu'un qui pratique plusieurs instruments de musique classique"], bonne: 0, expl: "Les classes supérieures sont souvent omnivores : elles apprécient des genres très variés.", niv: 1 },
        { q: "Pourquoi des habitants d'un village vont-ils moins souvent au théâtre que des habitants d'une grande ville ?", choix: ["Ils ont moins de capital culturel par nature", "Le théâtre leur est interdit", "L'offre de spectacles est plus éloignée et plus rare", "Ils préfèrent par goût les activités sportives aux spectacles"], bonne: 2, expl: "Le lieu d'habitat joue par la proximité et l'abondance de l'offre culturelle.", niv: 3 },
        { q: "Laquelle de ces affirmations sur les pratiques culturelles n'est **pas** juste ?", choix: ["Elles varient selon le sexe, l'âge et le lieu d'habitation", "Elles sont réparties au hasard dans la population", "Elles participent aux styles de vie", "Elles incluent les pratiques en amateur"], bonne: 1, expl: "Elles sont socialement différenciées : c'est tout l'objet du chapitre.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 2
    {
      chapitre: 's2tmd-edes-2',
      fiche: `## Quel est le poids de la culture dans l'économie et l'emploi ?

### La diversité des activités culturelles
- Les **biens culturels reproductibles** peuvent être copiés en de nombreux exemplaires : livres, presse, musique enregistrée, films, jeux vidéo, audiovisuel.
- Les **biens non reproductibles** sont uniques : le **patrimoine** (monuments, musées), l'**architecture**, les œuvres des **arts visuels** (un tableau original).
- Les **services culturels** : le **spectacle vivant** (théâtre, danse, concerts, cirque), l'**enseignement culturel** (conservatoires, écoles de musique).
- Les **industries culturelles et créatives** produisent en série des biens reproductibles, avec des **coûts fixes** élevés (enregistrer un album, tourner un film) et un coût faible pour chaque copie supplémentaire.
- Le **spectacle vivant fait exception** : chaque représentation doit être refaite en présence du public, avec les artistes. Il ne se reproduit pas en série.

### Mesurer le poids de la culture
- La **production** culturelle se mesure par la **valeur ajoutée** des branches culturelles, et on la compare au **PIB** (la somme des valeurs ajoutées du pays).
- Le poids **direct** de la culture en France représente **environ 2 % de l'économie**, et l'emploi culturel un peu plus de **2 % de l'emploi total** : c'est comparable à des branches comme l'agroalimentaire, et supérieur à certaines branches industrielles.
- La **consommation** culturelle se mesure par les **dépenses culturelles des ménages** (billets, abonnements, livres, instruments) et leur part dans leur budget.
- **Calculer une part** : part = valeur de la partie ÷ valeur du tout × 100. Exemple : un pays a un PIB de 2 500 milliards d'euros et une valeur ajoutée culturelle de 50 milliards : 50 ÷ 2 500 × 100 = **2 %**.
- **Calculer une évolution** : taux de variation = (valeur d'arrivée − valeur de départ) ÷ valeur de départ × 100. Exemple : dépenses de 120 à 132 euros par ménage : **+ 10 %**.

### Les déterminants
- Le **prix** : quand le prix des billets augmente, la demande peut baisser.
- La **fréquentation** : le nombre de spectateurs ou de visiteurs, qui dépend des goûts, du revenu, du temps libre et de l'offre.
- Les **dépenses publiques** : l'État et les collectivités territoriales financent une grande partie de l'offre culturelle (subventions, équipements).
- Des chocs peuvent tout changer : la fermeture des salles en 2020, pendant la crise sanitaire, a fait chuter les recettes du spectacle vivant.

### Les tendances
- Le **numérique** fait progresser les dépenses d'abonnements (musique et vidéo en ligne) et recule celles de supports physiques (CD, DVD).
- Les recettes des concerts et festivals ont pris de l'importance pour les artistes de musique, car l'enregistrement rapporte moins qu'avant.
- La culture a aussi des **effets indirects** sur l'économie : un festival fait travailler les hôtels, les restaurants et les commerces de la ville.

### Lire un document statistique
- Toujours repérer : le **titre**, la **source**, l'**unité** (euros, milliers d'emplois, pourcentage), le **champ** (France entière, année) et la **date**.
- Faire une phrase avec une donnée : « Selon le ministère de la Culture, en telle année, la culture représentait environ 2 % de la valeur ajoutée en France. »
- Comparer avec d'autres branches pour juger si le poids est important.

### À retenir pour le bac
- Reproductible (livre, disque), non reproductible (patrimoine), services (spectacle vivant).
- Le spectacle vivant fait exception aux industries culturelles.
- La culture pèse environ 2 % du PIB et un peu plus de 2 % de l'emploi.
- Savoir calculer une part et un taux de variation.
- Déterminants : prix, fréquentation, dépenses publiques.`,
      cartes: [
        { q: "Qu'est-ce qu'un bien culturel reproductible ?", r: "Un bien qu'on peut copier en de nombreux exemplaires : livre, disque, film, jeu vidéo." },
        { q: "Donne deux exemples de biens culturels non reproductibles.", r: "Un monument du patrimoine et un tableau original." },
        { q: "Pourquoi le spectacle vivant fait-il exception aux industries culturelles ?", r: "Chaque représentation doit être refaite en présence du public et des artistes : il ne se reproduit pas en série." },
        { q: "Qu'est-ce qui caractérise une industrie culturelle ?", r: "Une production en série de biens reproductibles, avec des coûts fixes élevés et un coût faible par copie supplémentaire." },
        { q: "Comment mesure-t-on le poids de la culture dans la production ?", r: "Par la valeur ajoutée des branches culturelles, comparée au PIB." },
        { q: "Quel est l'ordre de grandeur du poids direct de la culture en France ?", r: "Environ 2 % de l'économie, et un peu plus de 2 % de l'emploi total." },
        { q: "Comment calcule-t-on une part en pourcentage ?", r: "Valeur de la partie ÷ valeur du tout × 100." },
        { q: "PIB 2 500 milliards d'euros, valeur ajoutée culturelle 50 milliards : part ?", r: "50 ÷ 2 500 × 100 = 2 %." },
        { q: "Comment calcule-t-on un taux de variation ?", r: "(valeur d'arrivée − valeur de départ) ÷ valeur de départ × 100." },
        { q: "Quels sont les principaux déterminants des dépenses culturelles ?", r: "Le prix, la fréquentation et les dépenses publiques." },
        { q: "Comment le numérique a-t-il changé les dépenses culturelles ?", r: "Les abonnements en ligne progressent, les achats de supports physiques (CD, DVD) reculent." },
        { q: "Qu'est-ce qu'un effet indirect de la culture sur l'économie ?", r: "L'activité créée autour d'elle : un festival fait travailler les hôtels, les restaurants et les commerces." },
        { q: "Que faut-il repérer avant de lire un tableau statistique ?", r: "Le titre, la source, l'unité, le champ et la date." },
        { q: "Pourquoi les concerts ont-ils pris de l'importance pour les musiciens ?", r: "La musique enregistrée leur rapporte moins qu'avant : les recettes des concerts compensent en partie." },
      ],
      quiz: [
        { q: "Lequel de ces biens est un bien culturel reproductible ?", choix: ["Un château classé monument historique", "Un album de musique enregistrée", "Une représentation de danse", "Une sculpture originale"], bonne: 1, expl: "Un album peut être copié à l'infini ; le patrimoine et les œuvres originales sont uniques.", niv: 1 },
        { q: "Un pays a un PIB de 3 000 milliards d'euros et une valeur ajoutée culturelle de 66 milliards. Le poids de la culture est de :", choix: ["0,22 %", "4,5 %", "22 %", "2,2 %"], bonne: 3, expl: "66 ÷ 3 000 × 100 = 2,2 %.", niv: 2 },
        { q: "Pourquoi le spectacle vivant ne fait-il pas partie des industries culturelles ?", choix: ["Il doit être refait à chaque représentation devant le public", "Il est financé surtout par des fonds publics et non par des ventes", "Il n'emploie que des bénévoles", "Il est le plus souvent gratuit"], bonne: 0, expl: "Il n'y a pas de production en série : chaque spectacle est une prestation unique.", niv: 2 },
        { q: "Le poids direct de la culture dans l'économie française est de l'ordre de :", choix: ["5 %", "2 %", "20 %", "50 %"], bonne: 1, expl: "Environ 2 % de l'économie, comparable à des branches comme l'agroalimentaire.", niv: 1 },
        { q: "Les dépenses culturelles d'un ménage passent de 800 à 1 000 euros. Le taux de variation est de :", choix: ["+ 200 %", "+ 20 %", "+ 80 %", "+ 25 %"], bonne: 3, expl: "(1 000 − 800) ÷ 800 × 100 = + 25 %. Attention : on divise par la valeur de départ.", niv: 2 },
        { q: "Un festival attire 100 000 visiteurs et les hôtels de la ville sont complets. C'est :", choix: ["un effet indirect de la culture sur l'économie", "un effet direct de la subvention publique sur l'emploi", "une industrie culturelle", "une baisse de fréquentation"], bonne: 0, expl: "L'activité culturelle crée des dépenses dans d'autres branches : ce sont des effets indirects.", niv: 2 },
        { q: "Quelle évolution liée au numérique est juste ?", choix: ["Les ventes de CD augmentent fortement", "Les concerts ont disparu", "Les abonnements de musique en ligne progressent", "Le spectacle vivant est devenu un bien reproductible"], bonne: 2, expl: "Les dépenses se déplacent des supports physiques vers les abonnements.", niv: 1 },
        { q: "En 2020, la fermeture des salles a fait chuter les recettes du spectacle vivant. Quel déterminant a joué ?", choix: ["Le prix des billets", "La fréquentation, devenue presque nulle", "La hausse des dépenses publiques", "Le progrès technique"], bonne: 1, expl: "Sans public, il n'y a plus de recettes de billetterie : la fréquentation s'est effondrée.", niv: 3 },
        { q: "Pour juger si 2 % du PIB est un poids important, la meilleure démarche est de :", choix: ["comparer avec le poids d'autres branches de l'économie", "multiplier par 100", "le comparer au prix d'un billet", "se contenter de lire le titre du document, sans les chiffres"], bonne: 0, expl: "Un pourcentage seul ne dit rien : on le compare à d'autres branches ou dans le temps.", niv: 3 },
        { q: "Un conservatoire de musique municipal produit :", choix: ["un bien reproductible", "un bien patrimonial", "un service d'enseignement culturel", "un produit des industries culturelles"], bonne: 2, expl: "L'enseignement culturel est un service, comme le spectacle vivant.", niv: 2 },
      ],
    },
    // ---------------------------------------------------------------- 3
    {
      chapitre: 's2tmd-edes-3',
      fiche: `## Quelles sont les spécificités de l'économie du spectacle vivant ?

### La diversité du spectacle vivant
- Les **domaines** : théâtre, danse, musique (classique, opéra, musiques actuelles, jazz), cirque, arts de la rue, marionnettes.
- Les **entreprises** sont très diverses :
- selon leur **taille** : la plupart sont de très petites structures (une compagnie de quelques personnes), quelques-unes sont grandes (un opéra national emploie des centaines de salariés) ;
- selon leur **fonction** : la **création** (une compagnie qui invente un spectacle), la **production** (réunir l'argent, les artistes, les moyens), la **diffusion** (un théâtre qui programme et vend les billets) ;
- selon leur **statut** : **privé** (une société de production de concerts, une association) ou **public** (un établissement financé par l'État ou une ville).
- Beaucoup de compagnies sont des **associations** loi 1901.

### La « fatalité des coûts »
- Les économistes William **Baumol** et William **Bowen** (1966) ont montré que le spectacle vivant est une activité économique particulière.
- **Productivité du travail stagnante** : jouer un quatuor de Beethoven demande toujours quatre musiciens pendant le même temps qu'au XIXe siècle. Dans l'industrie, au contraire, on produit beaucoup plus par heure de travail qu'avant.
- **Faible impact du progrès technique** : la technique améliore la lumière ou le son, mais ne remplace pas les artistes sur scène.
- **Faible substituabilité** entre travail et capital : on ne peut pas remplacer un comédien par une machine.
- **Rendements d'échelle décroissants** : la taille de la salle est limitée ; ajouter des représentations demande à nouveau du travail.
- Pourtant, les salaires du spectacle suivent ceux du reste de l'économie. Les **coûts augmentent** donc plus vite que les recettes : c'est la **fatalité des coûts** (ou « maladie des coûts »).
- Le prix des billets ne peut pas monter sans limite : la demande est sensible au prix (**élasticité-prix**). Si une hausse des prix fait fuir le public, les recettes baissent.
- Conclusion : sans aide, beaucoup de spectacles seraient déficitaires. Cela justifie le **soutien des pouvoirs publics**.

### Les stratégies contre la fatalité des coûts
- **Accroître la fréquentation** : tournées, représentations supplémentaires, salles plus grandes, festivals, nouveaux publics.
- **Accroître la qualité** perçue : têtes d'affiche, créations attendues, pour justifier un prix plus élevé.
- **Rechercher des gains de productivité** : décors légers et réutilisables, distribution plus réduite, mutualisation du matériel.
- **Développer des activités dérivées** : captations vendues aux télévisions ou en ligne, produits dérivés, ateliers, bar et restauration, location de la salle.
- **Diversifier les financements** : **mécénat** d'entreprises (avec une réduction d'impôt), **fondations**, financement participatif.

### Le modèle français
- En France, le **secteur public** joue un rôle important :
- dans la **production** : des théâtres et opéras publics, des centres dramatiques nationaux ;
- dans le **financement** : **subventions** de l'État et des collectivités, et incitations fiscales pour le **mécénat** et les **fondations** (en France, une entreprise mécène peut déduire de ses impôts 60 % de son don, dans certaines limites) ;
- dans la **régulation** : le principe d'**exception culturelle**, défendu par la France dans les négociations commerciales internationales, selon lequel la culture n'est pas une marchandise comme les autres et peut être protégée et aidée.
- Dans d'autres pays, comme les États-Unis, le financement repose davantage sur le mécénat privé et la billetterie.

### À retenir pour le bac
- Création, production, diffusion : trois fonctions.
- Fatalité des coûts (Baumol et Bowen) : productivité stagnante, coûts qui montent.
- Stratégies : fréquentation, qualité, productivité, activités dérivées, mécénat.
- Spécificité française : poids du secteur public et exception culturelle.`,
      cartes: [
        { q: "Quelles sont les trois fonctions des entreprises de spectacle vivant ?", r: "La création, la production et la diffusion." },
        { q: "Création, production ou diffusion : un théâtre qui programme des spectacles et vend les billets ?", r: "La diffusion." },
        { q: "Qui a formulé la loi de la fatalité des coûts, et quand ?", r: "Les économistes William Baumol et William Bowen, en 1966." },
        { q: "Pourquoi la productivité du travail stagne-t-elle dans le spectacle vivant ?", r: "Un quatuor demande toujours quatre musiciens pendant le même temps : on ne peut pas jouer plus vite ni avec moins d'artistes." },
        { q: "Qu'est-ce que la faible substituabilité travail-capital ?", r: "On ne peut pas remplacer les artistes sur scène par des machines." },
        { q: "Pourquoi les coûts du spectacle vivant augmentent-ils plus vite que ses recettes ?", r: "Les salaires suivent ceux du reste de l'économie alors que la productivité n'augmente pas." },
        { q: "Pourquoi ne peut-on pas simplement augmenter le prix des billets ?", r: "La demande est sensible au prix : une forte hausse ferait fuir le public et baisser les recettes." },
        { q: "Qu'est-ce que l'élasticité-prix de la demande ?", r: "La sensibilité de la quantité demandée à une variation du prix." },
        { q: "Pourquoi la fatalité des coûts justifie-t-elle le soutien public ?", r: "Sans aide, beaucoup de spectacles seraient déficitaires et disparaîtraient." },
        { q: "Donne trois stratégies contre la fatalité des coûts.", r: "Accroître la fréquentation (tournées), chercher des gains de productivité (décors réutilisables), développer des activités dérivées (captations)." },
        { q: "Qu'est-ce qu'une activité dérivée pour un théâtre ?", r: "Une activité qui rapporte en plus des billets : captation vendue, produits dérivés, ateliers, bar, location de la salle." },
        { q: "Qu'est-ce que le mécénat ?", r: "Un don d'une entreprise ou d'un particulier pour soutenir une activité d'intérêt général, sans contrepartie équivalente ; il ouvre droit à une réduction d'impôt." },
        { q: "Quelle part de son don une entreprise mécène peut-elle déduire de ses impôts en France ?", r: "60 % du don, dans certaines limites." },
        { q: "Qu'est-ce que l'exception culturelle ?", r: "Le principe selon lequel la culture n'est pas une marchandise comme les autres : elle peut être protégée et aidée par l'État." },
        { q: "En quoi le modèle français se distingue-t-il ?", r: "Par le poids du secteur public dans la production, le financement et la régulation du spectacle vivant." },
      ],
      quiz: [
        { q: "Une compagnie de danse invente une nouvelle pièce en répétant pendant six mois. Elle assure surtout la fonction de :", choix: ["diffusion", "régulation", "création", "billetterie"], bonne: 2, expl: "Inventer le spectacle, c'est la création ; le théâtre qui le programmera assurera la diffusion.", niv: 1 },
        { q: "Selon Baumol et Bowen, le spectacle vivant souffre de :", choix: ["une productivité du travail qui augmente très vite", "la fatalité des coûts", "une demande sans aucune sensibilité au prix", "un excès de capital"], bonne: 1, expl: "La productivité stagne alors que les salaires suivent ceux de l'économie : les coûts montent.", niv: 1 },
        { q: "Quel exemple illustre la productivité stagnante du spectacle vivant ?", choix: ["Un quatuor demande toujours quatre musiciens pendant le même temps", "Une usine produit aujourd'hui deux fois plus de voitures qu'en 1990", "Un album s'écoute en ligne des millions de fois", "Un billet se vend sur internet"], bonne: 0, expl: "On ne peut pas jouer plus vite ou avec moins d'artistes sans changer l'œuvre.", niv: 2 },
        { q: "Un théâtre augmente fortement ses prix et perd la moitié de son public. Cela montre :", choix: ["que la demande ne dépend pas du prix", "l'exception culturelle", "un gain de productivité", "que la demande est sensible au prix"], bonne: 3, expl: "C'est l'élasticité-prix : la hausse fait fuir les spectateurs et peut faire baisser les recettes.", niv: 2 },
        { q: "Un orchestre vend la captation de son concert à une chaîne de télévision. C'est :", choix: ["une activité dérivée", "une subvention", "une hausse des coûts", "une baisse de qualité"], bonne: 0, expl: "La captation rapporte des recettes en plus de la billetterie : c'est une activité dérivée.", niv: 2 },
        { q: "Une entreprise donne 10 000 euros à un festival. En France, elle peut réduire ses impôts d'environ :", choix: ["1 000 euros", "6 000 euros", "10 000 euros", "60 000 euros"], bonne: 1, expl: "La réduction est de 60 % du don, dans certaines limites : 6 000 euros.", niv: 2 },
        { q: "Une compagnie conçoit des décors légers qu'elle réutilise d'un spectacle à l'autre. Elle cherche :", choix: ["à augmenter la qualité", "à obtenir l'exception culturelle", "une baisse de la fréquentation", "des gains de productivité"], bonne: 3, expl: "Elle réduit ses coûts pour le même résultat : c'est un gain de productivité.", niv: 2 },
        { q: "Le principe d'exception culturelle signifie que :", choix: ["les spectacles doivent être gratuits", "les aides publiques sont réservées aux artistes de nationalité française", "la culture peut être protégée et aidée, comme un bien à part", "l'État interdit le mécénat"], bonne: 2, expl: "La culture n'est pas une marchandise comme les autres : elle peut échapper à certaines règles du libre-échange.", niv: 1 },
        { q: "Pourquoi la fatalité des coûts aide-t-elle à comprendre les subventions publiques ?", choix: ["Parce que les spectacles sont en général très rentables", "Parce que sans aide beaucoup de spectacles seraient déficitaires", "Parce que la loi oblige l'État à payer le salaire des artistes", "Parce que le progrès technique a fait disparaître les coûts de production"], bonne: 1, expl: "Les coûts montent plus vite que les recettes : l'aide publique permet à une offre variée d'exister.", niv: 3 },
        { q: "Par rapport aux États-Unis, le spectacle vivant français se finance davantage par :", choix: ["le mécénat privé uniquement", "la publicité", "les jeux d'argent", "les subventions publiques"], bonne: 3, expl: "En France, l'État et les collectivités financent une grande partie du secteur ; aux États-Unis, le mécénat privé domine.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 4
    {
      chapitre: 's2tmd-edes-4',
      fiche: `## Quels sont les objectifs et les évolutions de la politique culturelle ?

### Les trois grands objectifs
- Une **politique culturelle** est l'ensemble des actions des pouvoirs publics (État, régions, départements, communes) en faveur de la culture.
- **Protéger le patrimoine** : classer et restaurer les monuments historiques, entretenir les musées, conserver les archives. Exemple : les Journées européennes du patrimoine ouvrent chaque année au public des lieux souvent fermés.
- **Aider la création** : subventionner les compagnies et les artistes, passer des commandes d'œuvres, soutenir des lieux de fabrication des spectacles.
- **Démocratiser l'accès à la culture** : permettre à tous, quels que soient leur milieu et leur lieu de vie, d'accéder aux œuvres et aux pratiques. L'**éducation artistique et culturelle** (EAC) à l'école en est un outil essentiel : sorties au spectacle, rencontres avec des artistes, pratique en classe.

### Les étapes depuis 1945
- **Après la guerre**, la **décentralisation théâtrale** crée des troupes et des centres dramatiques en dehors de Paris. Jean Vilar fonde le Festival d'Avignon (1947) et dirige le Théâtre national populaire, avec l'idée d'un théâtre « service public » pour tous.
- **1959** : création du ministère des Affaires culturelles, confié à **André Malraux**. Son idée : la **démocratisation de la culture**. Il faut rendre les **grandes œuvres** accessibles au plus grand nombre, en les rapprochant du public. Il crée des **maisons de la culture** dans plusieurs villes.
- **1981** : **Jack Lang** devient ministre. Le budget du ministère double en 1982. La politique s'ouvre à des formes jusque-là peu reconnues (musiques actuelles, bande dessinée, arts de la rue, hip-hop) et aux **pratiques amateurs**. On parle de **démocratisation culturelle** ou de démocratie culturelle : reconnaître la diversité des cultures et des pratiques de chacun. La **Fête de la musique** est lancée le 21 juin 1982.
- Depuis, les **collectivités territoriales** (surtout les communes et les régions) ont pris une très grande place dans le financement de la culture.
- Le réseau de lieux **labellisés** s'étend : centres dramatiques nationaux, scènes nationales, centres chorégraphiques nationaux, scènes de musiques actuelles.
- Plus récemment : le **pass Culture** (généralisé en 2021) donne aux jeunes un crédit pour des biens et sorties culturels ; l'EAC vise tous les élèves.

### Démocratisation de la culture ou démocratisation culturelle ?
- **Démocratisation de la culture** : une seule culture, la culture légitime, à diffuser vers ceux qui en sont éloignés (logique de Malraux).
- **Démocratisation culturelle** : reconnaître que chacun a des pratiques culturelles légitimes, et valoriser leur diversité (logique des années 1980).
- Les deux logiques coexistent aujourd'hui.

### Un bilan débattu
- Points positifs : l'**offre** s'est fortement développée sur tout le territoire ; les festivals et les lieux se sont multipliés ; la **diversité culturelle** a progressé (plus de genres reconnus et aidés). Des règles protègent aussi la création, comme les quotas de chansons d'expression française à la radio.
- Limites : les enquêtes montrent que le **public** des spectacles subventionnés reste **majoritairement diplômé** et issu des catégories favorisées. La démocratisation de la culture a donc une **efficacité limitée** : l'offre ne suffit pas à faire venir de nouveaux publics.
- D'où l'importance donnée à la **médiation culturelle** (accompagner les publics), aux tarifs réduits et à l'EAC dès l'enfance.

### À retenir pour le bac
- Trois objectifs : patrimoine, création, démocratisation (avec l'EAC).
- Malraux (1959) : démocratisation de la culture. Lang (1981) : démocratisation culturelle, Fête de la musique.
- Le rôle croissant des collectivités territoriales.
- Bilan : plus d'offre et de diversité, mais un public encore socialement sélectionné.`,
      cartes: [
        { q: "Qu'est-ce qu'une politique culturelle ?", r: "L'ensemble des actions des pouvoirs publics (État et collectivités) en faveur de la culture." },
        { q: "Quels sont les trois grands objectifs de la politique culturelle ?", r: "Protéger le patrimoine, aider la création et démocratiser l'accès à la culture." },
        { q: "Qu'est-ce que l'éducation artistique et culturelle (EAC) ?", r: "L'ensemble des actions à l'école qui font rencontrer des œuvres et des artistes, pratiquer et acquérir des connaissances sur les arts." },
        { q: "Qu'est-ce que la décentralisation théâtrale ?", r: "La création, après 1945, de troupes et de centres dramatiques hors de Paris, pour que le théâtre existe sur tout le territoire." },
        { q: "Qui a fondé le Festival d'Avignon, et en quelle année ?", r: "Jean Vilar, en 1947." },
        { q: "Quand le ministère des Affaires culturelles est-il créé, et pour qui ?", r: "En 1959, pour André Malraux." },
        { q: "Qu'est-ce que la démocratisation de la culture selon Malraux ?", r: "Rendre les grandes œuvres accessibles au plus grand nombre, par exemple grâce aux maisons de la culture." },
        { q: "Qu'est-ce que la démocratisation culturelle ?", r: "Reconnaître et valoriser la diversité des pratiques et des cultures de chacun, y compris les pratiques amateurs." },
        { q: "Quels changements apporte Jack Lang à partir de 1981 ?", r: "Un budget doublé en 1982, la reconnaissance des musiques actuelles, de la bande dessinée, des arts de la rue, et la Fête de la musique." },
        { q: "Quand a lieu la Fête de la musique, et depuis quand ?", r: "Le 21 juin, depuis 1982." },
        { q: "Qui finance une très grande part des dépenses culturelles publiques aujourd'hui ?", r: "Les collectivités territoriales, surtout les communes et les régions." },
        { q: "Qu'est-ce que le pass Culture ?", r: "Un dispositif public, généralisé en 2021, qui donne aux jeunes un crédit pour des biens et des sorties culturels." },
        { q: "Quelle est la principale limite de la démocratisation de la culture ?", r: "Le public des spectacles subventionnés reste majoritairement diplômé et favorisé : l'offre ne suffit pas à attirer de nouveaux publics." },
        { q: "Qu'est-ce que la médiation culturelle ?", r: "L'ensemble des actions qui accompagnent les publics vers les œuvres : rencontres, ateliers, présentations." },
      ],
      quiz: [
        { q: "La restauration d'un château classé monument historique relève de l'objectif :", choix: ["de protection du patrimoine", "d'aide à la création", "de démocratie culturelle", "d'exception culturelle"], bonne: 0, expl: "Conserver et restaurer les monuments est la mission patrimoniale de la politique culturelle.", niv: 1 },
        { q: "Quel ministre est associé à la création du ministère des Affaires culturelles en 1959 ?", choix: ["Jean Vilar", "Jack Lang", "Pierre Bourdieu", "André Malraux"], bonne: 3, expl: "André Malraux en fut le premier ministre ; Jean Vilar était homme de théâtre, pas ministre.", niv: 1 },
        { q: "Les maisons de la culture de Malraux visaient surtout à :", choix: ["reconnaître et soutenir les pratiques amateurs des habitants", "rendre les grandes œuvres accessibles au plus grand nombre", "vendre des produits dérivés", "remplacer les théâtres privés"], bonne: 1, expl: "C'est la logique de démocratisation de la culture : rapprocher la culture légitime du public.", niv: 2 },
        { q: "La reconnaissance du hip-hop et des arts de la rue par l'État dans les années 1980 illustre :", choix: ["la décentralisation théâtrale", "la protection du patrimoine", "la démocratisation culturelle", "la fatalité des coûts"], bonne: 2, expl: "On valorise des pratiques jusque-là peu reconnues : c'est la démocratisation culturelle.", niv: 2 },
        { q: "Une classe de collège rencontre une chorégraphe puis voit son spectacle. C'est un exemple :", choix: ["d'aide au mécénat des entreprises locales", "de décentralisation théâtrale", "de protection du patrimoine", "d'éducation artistique et culturelle"], bonne: 3, expl: "L'EAC associe rencontre avec les artistes, fréquentation des œuvres et pratique.", niv: 1 },
        { q: "La Fête de la musique, lancée en 1982, a été créée sous le ministère de :", choix: ["Jack Lang", "André Malraux", "Jean Vilar", "Jeanne Laurent"], bonne: 0, expl: "Elle symbolise l'ouverture aux pratiques amateurs voulue par Jack Lang.", niv: 1 },
        { q: "Des enquêtes montrent que le public des scènes nationales est surtout diplômé. Ce constat sert à discuter :", choix: ["l'aide à la création", "l'efficacité de la démocratisation de la culture", "la productivité du travail", "la diversité des statuts d'artistes et de techniciens"], bonne: 1, expl: "Malgré une offre abondante, les nouveaux publics viennent peu : la démocratisation a une efficacité limitée.", niv: 3 },
        { q: "Quel acteur finance aujourd'hui une très grande part des dépenses culturelles publiques ?", choix: ["L'Union européenne, par ses programmes culturels", "Les entreprises mécènes", "Les collectivités territoriales", "Les sociétés d'auteurs"], bonne: 2, expl: "Les communes et les régions sont devenues des financeurs majeurs de la culture.", niv: 2 },
        { q: "Quelle différence entre démocratisation de la culture et démocratisation culturelle ?", choix: ["La première diffuse la culture légitime, la seconde valorise toutes les pratiques", "La première est privée, la seconde est publique", "La première concerne surtout le patrimoine, la seconde surtout le spectacle vivant", "Elles désignent exactement la même politique"], bonne: 0, expl: "Malraux veut diffuser les grandes œuvres ; la logique des années 1980 valorise toutes les cultures.", niv: 3 },
        { q: "Pour faire venir un public éloigné des théâtres, quelle mesure répond le mieux aux limites constatées ?", choix: ["Augmenter le prix des places", "Fermer les petites salles", "Programmer davantage de classiques du répertoire pour attirer les abonnés", "Développer la médiation et l'éducation artistique dès l'enfance"], bonne: 3, expl: "L'offre seule ne suffit pas : il faut accompagner les publics et agir tôt.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 5
    {
      chapitre: 's2tmd-edes-5',
      fiche: `## Quelles sont les caractéristiques de l'environnement professionnel du spectacle vivant ?

### Trois familles de métiers
- **Métiers artistiques** : comédien, danseur, musicien, chanteur, metteur en scène, chorégraphe, circassien.
- **Métiers techniques** : régisseur général, régisseur lumière ou son, éclairagiste, ingénieur du son, machiniste, costumier, constructeur de décors.
- **Métiers administratifs** : administrateur de production, chargé de diffusion (il vend le spectacle aux théâtres), chargé de communication, chargé des relations avec le public (médiation), directeur de lieu.
- L'artiste est au centre, mais un spectacle n'existe que grâce à tous ces métiers qui travaillent ensemble.

### Trois spécificités
- La **polyvalence** : une même personne exerce plusieurs fonctions. Une danseuse peut aussi s'occuper de la production, de la communication de sa compagnie et animer des ateliers (médiation).
- La **mobilité** : on change souvent de lieu (tournées, festivals), d'employeur et d'horaires. Le travail se fait le soir, le week-end, parfois loin de chez soi, avec des périodes très chargées et d'autres sans contrat.
- La **pluriactivité** : on exerce dans plusieurs champs d'activité, par exemple musicien interprète et professeur dans une école de musique, ou comédien et intervenant dans un lycée.
- Beaucoup d'artistes changent aussi d'orientation au cours de leur carrière (devenir professeur, metteur en scène, administrateur).

### Une économie de projet et de réseau
- Le spectacle vivant fonctionne par **projets** : une équipe se réunit pour un spectacle, pendant une durée limitée, puis se sépare.
- Les étapes d'un spectacle :
- la **création** : écriture, conception, répétitions ;
- la **production** : réunir les moyens (argent, salles de répétition, équipe), payer les salaires, signer les contrats ;
- la **diffusion** : vendre et jouer le spectacle dans des lieux, en tournée, en festival.
- Le **réseau** est essentiel : les contacts avec les programmateurs, les autres artistes, les lieux et les festivals permettent de trouver les projets suivants. On travaille souvent avec les mêmes personnes.

### Le travail et l'emploi
- L'emploi est souvent **discontinu** : une succession de contrats courts (contrats à durée déterminée, notamment le CDD d'usage) chez plusieurs employeurs.
- Beaucoup d'artistes et de techniciens relèvent du régime de l'**intermittence du spectacle** : une assurance chômage particulière, qui verse des allocations entre deux contrats s'ils ont travaillé au moins **507 heures sur 12 mois**.
- Le nombre de professionnels a beaucoup augmenté, plus vite que le volume de travail disponible : la **concurrence** est forte et les **revenus** sont très **inégaux** entre quelques artistes très connus et la majorité.
- Les emplois sont concentrés dans les grandes villes, surtout en région parisienne.
- Un organisateur occasionnel (une association, une mairie) peut déclarer et payer simplement des artistes grâce à un guichet unique, le GUSO.

### Le numérique
- **Production** : logiciels de création sonore et lumière, outils de répétition à distance.
- **Communication** : réseaux sociaux, vidéos de présentation, sites internet pour se faire connaître des programmateurs et du public.
- **Diffusion** : captations, spectacles diffusés en ligne, billetterie sur internet.
- Il demande de nouvelles compétences et peut renforcer la polyvalence.

### À retenir pour le bac
- Métiers artistiques, techniques, administratifs.
- Polyvalence, mobilité, pluriactivité : savoir les définir et les illustrer.
- Économie de projet et fonctionnement en réseau.
- Création, production, diffusion.
- Emploi discontinu, intermittence (507 heures), revenus inégaux.`,
      cartes: [
        { q: "Quelles sont les trois familles de métiers du spectacle vivant ?", r: "Les métiers artistiques, techniques et administratifs." },
        { q: "Donne deux métiers techniques du spectacle vivant.", r: "Régisseur lumière et ingénieur du son (ou machiniste, costumier)." },
        { q: "Que fait un chargé de diffusion ?", r: "Il vend le spectacle aux théâtres et aux festivals pour organiser la tournée." },
        { q: "Qu'est-ce que la polyvalence dans le spectacle vivant ?", r: "Exercer plusieurs fonctions : par exemple interpréter, produire, communiquer et faire de la médiation." },
        { q: "Qu'est-ce que la mobilité dans le spectacle vivant ?", r: "Changer souvent de lieu, d'employeur et d'horaires : tournées, festivals, travail le soir et le week-end." },
        { q: "Qu'est-ce que la pluriactivité ?", r: "Exercer dans plusieurs champs d'activité, par exemple musicien interprète et professeur de musique." },
        { q: "Qu'est-ce qu'une économie de projet ?", r: "Une équipe se réunit pour un spectacle, pendant une durée limitée, puis se sépare." },
        { q: "Pourquoi le réseau est-il essentiel ?", r: "Les contacts avec les programmateurs, les lieux et les autres artistes permettent de trouver les projets suivants." },
        { q: "Quelles sont les étapes de la réalisation d'un spectacle ?", r: "La création, la production et la diffusion." },
        { q: "Qu'est-ce que la production d'un spectacle ?", r: "Réunir les moyens : argent, lieux de répétition, équipe, contrats et salaires." },
        { q: "Pourquoi l'emploi est-il discontinu dans le spectacle vivant ?", r: "Il est fait d'une succession de contrats courts chez plusieurs employeurs, liés à chaque projet." },
        { q: "Qu'est-ce que l'intermittence du spectacle ?", r: "Un régime d'assurance chômage particulier qui indemnise artistes et techniciens entre deux contrats." },
        { q: "Combien d'heures faut-il pour ouvrir des droits à l'intermittence ?", r: "Au moins 507 heures de travail sur 12 mois." },
        { q: "Comment le numérique modifie-t-il le travail dans le spectacle vivant ?", r: "Il change la production (logiciels), la communication (réseaux sociaux) et la diffusion (captations, billetterie en ligne)." },
        { q: "À quoi sert le GUSO ?", r: "C'est un guichet unique qui permet à un organisateur occasionnel de déclarer et payer simplement des artistes." },
      ],
      quiz: [
        { q: "Une comédienne joue le soir et enseigne le théâtre au conservatoire le mercredi. C'est un exemple de :", choix: ["mobilité géographique", "polyvalence technique", "pluriactivité", "fatalité des coûts"], bonne: 2, expl: "Elle exerce dans deux champs d'activité, l'interprétation et l'enseignement : c'est la pluriactivité.", niv: 2 },
        { q: "Le régisseur lumière exerce un métier :", choix: ["technique", "administratif", "artistique", "juridique"], bonne: 0, expl: "La régie lumière, le son et les décors relèvent des métiers techniques.", niv: 1 },
        { q: "Un musicien enchaîne trois tournées dans trois régions avec trois employeurs différents en un an. Cela illustre surtout :", choix: ["la pluriactivité", "la démocratisation culturelle", "l'exception culturelle", "la mobilité"], bonne: 3, expl: "Il change de lieu, d'employeur et de rythme de travail : c'est la mobilité.", niv: 2 },
        { q: "Le chorégraphe d'une petite compagnie écrit aussi les dossiers de subvention et gère la page de la compagnie sur les réseaux. C'est :", choix: ["de la pluriactivité", "de la polyvalence", "de la diffusion", "du mécénat"], bonne: 1, expl: "Il exerce plusieurs fonctions au sein du même projet : création, production, communication.", niv: 3 },
        { q: "Que signifie « économie de projet » dans le spectacle vivant ?", choix: ["Une équipe se réunit pour un spectacle puis se sépare", "Chaque artiste a un contrat à vie dans un théâtre", "Les spectacles sont produits en série", "Les projets sont financés en majorité par l'État et les régions"], bonne: 0, expl: "Le travail s'organise spectacle par spectacle, avec des équipes temporaires.", niv: 1 },
        { q: "Pour ouvrir des droits à l'assurance chômage des intermittents, il faut avoir travaillé au moins :", choix: ["35 heures sur 12 mois", "1 607 heures sur 12 mois", "507 heures sur 12 mois", "507 heures sur 5 ans"], bonne: 2, expl: "La condition est de 507 heures sur une période de 12 mois.", niv: 1 },
        { q: "Une compagnie vient de finir ses répétitions et cherche des théâtres pour jouer sa pièce. Elle entre dans la phase de :", choix: ["création", "production", "écriture", "diffusion"], bonne: 3, expl: "Vendre et jouer le spectacle dans des lieux, c'est la diffusion.", niv: 2 },
        { q: "Pourquoi les revenus sont-ils très inégaux entre artistes ?", choix: ["La loi fixe un salaire unique pour les artistes", "Le nombre de professionnels augmente plus vite que le travail disponible", "Les artistes refusent les contrats courts", "Les artistes célèbres paient moins de cotisations sociales que les débutants"], bonne: 1, expl: "La forte concurrence concentre les gros revenus sur quelques artistes très demandés.", niv: 3 },
        { q: "Un chargé de diffusion s'occupe :", choix: ["de vendre le spectacle aux lieux et aux festivals", "de régler les lumières", "d'écrire la musique du spectacle", "de construire les décors et de les transporter en tournée"], bonne: 0, expl: "Il organise la tournée en vendant le spectacle aux programmateurs.", niv: 2 },
        { q: "Quel effet du numérique sur l'environnement professionnel est juste ?", choix: ["Il a supprimé les métiers techniques", "Il empêche les captations de spectacles", "Il rend inutile le réseau professionnel et les rencontres entre programmateurs", "Il change la communication des compagnies, par exemple avec les réseaux sociaux"], bonne: 3, expl: "Le numérique touche production, communication et diffusion, sans remplacer le réseau.", niv: 2 },
      ],
    },
    // ---------------------------------------------------------------- 6
    {
      chapitre: 's2tmd-edes-6',
      fiche: `## Quelles sont les principales caractéristiques du droit du spectacle vivant ?

### Les obligations de l'entrepreneur de spectacles
- Un **entrepreneur de spectacles** exploite un lieu, produit ou diffuse des spectacles avec des artistes payés.
- Il doit **déclarer son activité** à l'administration (cette déclaration a remplacé l'ancienne « licence » en 2019, mais on parle encore souvent de licence). Le récépissé est valable 5 ans. Il existe **trois catégories** : les exploitants de lieux, les producteurs (et entrepreneurs de tournées), les diffuseurs.
- Un organisateur **occasionnel**, qui ne fait que quelques représentations par an (six au plus), n'a pas à faire cette déclaration.
- Il respecte les **normes de sécurité** des établissements recevant du public : nombre maximal de spectateurs (la jauge), issues de secours, matériaux non inflammables, contrôles par une commission de sécurité.
- Il prend une **assurance** de responsabilité civile, qui couvre les dommages causés au public ou aux artistes.
- Il organise l'**accueil du public** : accessibilité aux personnes handicapées, billetterie, information.

### Les contrats du spectacle vivant
- **Contrat de cession** : le producteur vend un spectacle « clé en main » à un organisateur, pour un **prix de cession** fixe. Le producteur reste l'employeur des artistes.
- **Contrat de coproduction** : plusieurs partenaires financent ensemble la production et partagent les risques.
- **Contrat de coréalisation** : le lieu et la compagnie se **partagent les recettes** de billetterie.
- **Contrat d'engagement** : le contrat de travail qui lie l'artiste à son employeur.
- **Cession de droits** : l'auteur cède par écrit certains de ses droits (le droit de jouer sa pièce, par exemple) à un producteur, en précisant le lieu, la durée et la rémunération.
- **Contrat d'enregistrement** : il fixe les conditions dans lesquelles l'interprétation d'un artiste est enregistrée et exploitée.

### Les statuts
- L'**auteur** crée l'œuvre : le dramaturge, le compositeur, le chorégraphe. L'**artiste-interprète** la joue : le comédien, le musicien, le danseur. Une même personne peut avoir les deux statuts.
- Le travailleur peut être **salarié** (il travaille sous l'autorité d'un employeur) ou **indépendant**. La loi pose une **présomption de salariat** : un artiste engagé pour un spectacle contre rémunération est en principe salarié.
- Les relations de travail sont régies par le **code du travail** et par des **conventions collectives** propres au spectacle (secteur public subventionné, secteur privé).

### Les contrats de travail et la protection sociale
- **CDI** : contrat à durée indéterminée, sans date de fin, surtout dans les grandes structures (administration, technique).
- **CDD** : contrat à durée déterminée, pour une mission précise.
- **CDD d'usage** (CDDU) : CDD autorisé dans le spectacle, parce que l'emploi y est par nature temporaire ; il peut être renouvelé plusieurs fois de suite, ce qui est beaucoup plus encadré pour un CDD ordinaire.
- Les salariés en contrats courts relèvent, sous conditions (507 heures sur 12 mois), du **régime de l'intermittence** de l'assurance chômage.

### La propriété intellectuelle
- Le **droit d'auteur** protège une **œuvre originale** dès sa création, sans formalité. Il comprend :
- le **droit moral** : être reconnu comme l'auteur, faire respecter son œuvre. Il est **perpétuel** et ne peut pas être vendu ;
- les **droits patrimoniaux** : autoriser la représentation et la reproduction de l'œuvre contre rémunération. Ils durent toute la vie de l'auteur et **70 ans après sa mort** ; l'œuvre entre ensuite dans le **domaine public**.
- Les **droits voisins** (créés en France par une loi de 1985) protègent ceux qui ne sont pas auteurs mais permettent à l'œuvre d'exister : les **artistes-interprètes**, les **producteurs** de disques et de vidéos, les entreprises de communication audiovisuelle ; depuis 2019, aussi les éditeurs de presse.

### La gestion collective
- Les **organismes de gestion collective** perçoivent les droits auprès des utilisateurs (salles, radios, plateformes) et les reversent aux ayants droit.
- **SACEM** : Société des auteurs, compositeurs et éditeurs de musique.
- **SACD** : Société des auteurs et compositeurs dramatiques (théâtre, danse, audiovisuel).
- **SPEDIDAM** : Société de perception et de distribution des droits des artistes-interprètes. L'ADAMI gère aussi des droits d'artistes-interprètes.
- Exemple : un festival qui fait jouer une pièce d'un auteur vivant verse des droits à la SACD, qui les reverse à l'auteur.

### Le numérique
- L'écoute en ligne a créé de nouvelles sources de droits, mais les rémunérations par écoute sont faibles et leur partage est discuté.
- Le **piratage** prive les créateurs de revenus ; une autorité publique (l'Arcom) lutte contre lui. Les plateformes doivent mieux contrôler les contenus protégés.

### À retenir pour le bac
- Entrepreneur : déclaration (« licence »), sécurité, assurance, accueil du public.
- Cession (prix fixe), coproduction (risques partagés), coréalisation (recettes partagées).
- Auteur ou interprète ; salarié (présomption) ou indépendant ; CDI, CDD, CDDU.
- Droit d'auteur (moral perpétuel, patrimonial jusqu'à 70 ans après la mort) ; droits voisins.
- SACEM, SACD, SPEDIDAM.`,
      cartes: [
        { q: "Quelles sont les obligations principales d'un entrepreneur de spectacles ?", r: "Déclarer son activité (l'ancienne licence), respecter les normes de sécurité, s'assurer et organiser l'accueil du public." },
        { q: "Combien de temps le récépissé de déclaration d'entrepreneur de spectacles est-il valable ?", r: "5 ans." },
        { q: "Quelles sont les trois catégories d'entrepreneurs de spectacles ?", r: "Les exploitants de lieux, les producteurs (et entrepreneurs de tournées) et les diffuseurs." },
        { q: "Qu'est-ce qu'un contrat de cession ?", r: "Le producteur vend un spectacle clé en main à un organisateur pour un prix fixe ; il reste l'employeur des artistes." },
        { q: "Coproduction ou coréalisation ?", r: "Coproduction : plusieurs partenaires financent la production et partagent les risques. Coréalisation : le lieu et la compagnie partagent les recettes." },
        { q: "Auteur ou artiste-interprète ?", r: "L'auteur crée l'œuvre (dramaturge, compositeur) ; l'artiste-interprète la joue (comédien, musicien)." },
        { q: "Qu'est-ce que la présomption de salariat des artistes ?", r: "Un artiste engagé pour un spectacle contre rémunération est en principe considéré comme salarié." },
        { q: "Qu'est-ce qu'un CDD d'usage ?", r: "Un contrat à durée déterminée autorisé dans le spectacle, car l'emploi y est par nature temporaire." },
        { q: "Qu'est-ce que le droit moral de l'auteur ?", r: "Le droit d'être reconnu comme auteur et de faire respecter son œuvre ; il est perpétuel et ne peut pas être vendu." },
        { q: "Que sont les droits patrimoniaux de l'auteur ?", r: "Le droit d'autoriser la représentation et la reproduction de l'œuvre contre rémunération." },
        { q: "Combien de temps durent les droits patrimoniaux ?", r: "Toute la vie de l'auteur et 70 ans après sa mort ; ensuite l'œuvre entre dans le domaine public." },
        { q: "Qui est protégé par les droits voisins ?", r: "Les artistes-interprètes, les producteurs de disques et de vidéos, les entreprises de communication audiovisuelle, et depuis 2019 les éditeurs de presse." },
        { q: "Que fait un organisme de gestion collective ?", r: "Il perçoit les droits auprès des salles, radios et plateformes et les reverse aux auteurs ou aux artistes." },
        { q: "SACEM ou SACD ?", r: "La SACEM gère les droits des auteurs, compositeurs et éditeurs de musique ; la SACD ceux des auteurs dramatiques (théâtre, danse, audiovisuel)." },
        { q: "Que gère la SPEDIDAM ?", r: "Des droits voisins des artistes-interprètes." },
        { q: "Comment le numérique affecte-t-il les droits d'auteur ?", r: "Il crée de nouvelles sources de droits (écoute en ligne), mais aussi le piratage, et la faible rémunération par écoute est discutée." },
      ],
      quiz: [
        { q: "Un théâtre achète à une compagnie son spectacle pour un prix fixe de 5 000 euros. Ils signent :", choix: ["un contrat de coréalisation", "un contrat de cession", "un contrat d'enregistrement", "un CDI"], bonne: 1, expl: "Le spectacle est vendu clé en main pour un prix fixe : c'est un contrat de cession.", niv: 2 },
        { q: "La compagnie et le lieu se partagent la billetterie : 60 % pour la compagnie, 40 % pour le lieu. C'est :", choix: ["une cession de droits", "un contrat de cession", "une coproduction", "une coréalisation"], bonne: 3, expl: "Le partage des recettes entre le lieu et la compagnie caractérise la coréalisation.", niv: 2 },
        { q: "Le droit moral d'un auteur :", choix: ["est perpétuel et ne peut pas être vendu", "s'éteint à la mort de l'auteur", "peut être cédé à un producteur contre une rémunération", "ne concerne que la musique"], bonne: 0, expl: "On peut céder les droits patrimoniaux, jamais le droit moral, qui est perpétuel.", niv: 1 },
        { q: "Un auteur de théâtre est mort en 1950. En 2027, ses pièces :", choix: ["sont encore protégées par les droits patrimoniaux", "appartiennent à la SACEM", "sont dans le domaine public", "ne peuvent plus être jouées"], bonne: 2, expl: "Les droits patrimoniaux durent 70 ans après la mort : depuis 2021, ses pièces sont dans le domaine public (le droit moral demeure).", niv: 3 },
        { q: "Un guitariste joue sur l'album d'un chanteur. Ses droits sur cet enregistrement sont :", choix: ["des droits voisins", "des droits d'auteur", "un droit moral d'auteur", "des subventions"], bonne: 0, expl: "Il interprète sans être l'auteur : il est protégé par les droits voisins.", niv: 2 },
        { q: "Une association organise deux concerts par an avec des musiciens payés. Elle peut déclarer les artistes simplement :", choix: ["en devenant une scène nationale", "par le GUSO, sans déclaration d'entrepreneur de spectacles", "en signant un contrat de coproduction avec une compagnie", "par la SACD"], bonne: 1, expl: "Un organisateur occasionnel n'a pas à se déclarer comme entrepreneur et utilise le guichet unique.", niv: 3 },
        { q: "Quel organisme reverse aux auteurs dramatiques les droits d'une pièce jouée dans un théâtre ?", choix: ["La SPEDIDAM", "La SACEM", "L'Arcom", "La SACD"], bonne: 3, expl: "La SACD gère les droits des auteurs de théâtre, de danse et de l'audiovisuel.", niv: 1 },
        { q: "Pourquoi le CDD d'usage est-il autorisé dans le spectacle vivant ?", choix: ["L'emploi y est par nature temporaire, lié à chaque projet", "Les artistes refusent les CDI", "La loi interdit aux employeurs de signer un CDI avec des artistes", "Il remplace l'assurance chômage"], bonne: 0, expl: "Chaque spectacle a une durée limitée : le CDD d'usage correspond à cette réalité.", niv: 2 },
        { q: "Lequel de ces éléments relève des obligations de sécurité de l'entrepreneur de spectacles ?", choix: ["Payer les droits à la SACEM", "Signer un contrat d'enregistrement avec un label", "Respecter la jauge et les issues de secours", "Obtenir un mécénat"], bonne: 2, expl: "La jauge et les issues de secours font partie des normes de sécurité des lieux recevant du public.", niv: 1 },
        { q: "Un comédien est engagé et payé pour jouer dans une pièce. Sauf exception, il est :", choix: ["indépendant", "salarié", "auteur", "entrepreneur de spectacles"], bonne: 1, expl: "La présomption de salariat s'applique à l'artiste engagé contre rémunération.", niv: 2 },
      ],
    },
  ],
  methode: [
    {
      id: 's2tmd-edes-m1', mat: 's2tmd-edes', titre: "Présenter un projet à l'oral (modèle de l'épreuve de 2021)",
      formules: ["Présentez votre projet et la démarche suivie.", "Quelles notions du programme votre projet mobilise-t-il ?", "Que feriez-vous autrement ?"],
      vu: ["Épreuve commune de contrôle continu de la session 2021 (BO n° 40 du 31 octobre 2019) : oral de 20 minutes en deux parties de 10 minutes, appuyé sur un dossier d'environ cinq pages", "Évaluations orales de l'année prévues par le programme (présentation d'une recherche ou d'un projet)"],
      pts: "En 2021 : grille sur la démarche d'analyse, la maîtrise des connaissances et la qualité de l'oral. Depuis, la note vient des moyennes de première.",
      attendu: "Un exposé de 10 minutes sans lire, qui présente le projet (une enquête sur le public d'une salle, l'étude d'un lieu culturel, la production d'un spectacle), la question posée, la démarche suivie et les résultats, en utilisant les notions du programme. Puis un échange où l'élève justifie ses choix et relie son projet au cours.",
      etapes: ["Présenter le projet et sa question en une minute.", "Expliquer la démarche : sources, enquête, entretiens, chiffres recueillis.", "Exposer deux ou trois résultats, chacun relié à une notion du programme.", "Dire les limites du travail et ce qu'on améliorerait.", "Pendant l'échange : définir les notions utilisées et donner des exemples précis."],
      mots: ["démarche", "pratiques culturelles", "fatalité des coûts", "diffusion", "médiation"],
      pieges: ["Raconter le projet sans le relier au programme.", "Lire son dossier.", "Utiliser un mot du cours sans savoir le définir.", "Donner des chiffres sans source ni unité."],
      cas: "Projet de classe : une enquête par questionnaire auprès de 120 spectateurs d'une salle de musiques actuelles de la ville, pour savoir qui vient et pourquoi.",
      question: "Rédige l'introduction et le plan de ta présentation orale.",
      modele: "« Qui sont les spectateurs de la salle de musiques actuelles de notre ville ? Pour le savoir, nous avons interrogé 120 spectateurs pendant trois concerts. » Plan : I. Notre démarche : un questionnaire de dix questions (âge, diplôme, profession, fréquence des sorties, moyen de connaître la salle), et un entretien avec la chargée des relations avec le public. II. Nos résultats : un public jeune, surtout étudiant ou de profession intermédiaire, ce qui confirme que l'âge et le diplôme différencient les pratiques culturelles ; beaucoup ont connu la salle par les réseaux sociaux, ce qui montre le rôle du numérique. III. Les limites : un échantillon petit, interrogé seulement le week-end. Ouverture : la salle pourrait développer la médiation pour toucher d'autres publics.",
      grille: ["J'ai posé une question claire au début.", "J'ai expliqué ma démarche.", "J'ai relié chaque résultat à une notion du programme.", "J'ai dit une limite de mon travail."],
    },
    {
      id: 's2tmd-edes-m2', mat: 's2tmd-edes', titre: "Lire et exploiter un document statistique",
      formules: ["À l'aide du document, montrez que…", "Calculez la part de… et commentez.", "Comparez l'évolution de…"],
      vu: ["Objectif du programme : interpréter les données sur le public des spectacles et sur le poids de la culture dans le PIB", "Évaluations écrites de première sur dossier documentaire"],
      pts: "Une question de 2 à 4 points dans une évaluation sur dossier",
      attendu: "Présenter le document (titre, source, date, unité), faire une phrase juste avec une donnée, calculer si besoin une part ou un taux de variation, puis interpréter avec une notion du cours.",
      etapes: ["Lire le titre, la source, la date, l'unité et le champ.", "Choisir les données qui répondent à la question.", "Faire une phrase avec chaque donnée, sans confondre répartition et taux.", "Calculer : part = partie ÷ tout × 100 ; taux de variation = (arrivée − départ) ÷ départ × 100.", "Interpréter en mobilisant une notion (facteur de différenciation, poids de la culture)."],
      mots: ["selon", "en", "soit", "part", "taux de variation"],
      pieges: ["Confondre « 40 % des spectateurs sont des cadres » et « 40 % des cadres vont au théâtre ».", "Diviser par la valeur d'arrivée dans un taux de variation.", "Oublier l'unité.", "Recopier des chiffres sans les interpréter."],
      cas: "Document fictif : répartition du public d'un théâtre municipal. Cadres 38 %, professions intermédiaires 24 %, employés 14 %, ouvriers 6 %, retraités 12 %, autres 6 %. Dans la ville, les ouvriers représentent 20 % de la population et les cadres 15 %. Fréquentation : 30 000 spectateurs en 2024, 33 600 en 2025.",
      question: "Montre, à l'aide du document, que le public de ce théâtre est socialement sélectionné, puis calcule l'évolution de la fréquentation.",
      modele: "D'après ce document fictif, 38 % des spectateurs du théâtre sont des cadres, alors que les cadres ne représentent que 15 % des habitants de la ville : ils sont plus de deux fois plus présents dans le public que dans la population. À l'inverse, les ouvriers forment 20 % des habitants mais seulement 6 % du public. Le public est donc socialement sélectionné, ce que l'on explique par le capital culturel et le niveau de diplôme, facteurs de différenciation des pratiques culturelles. La fréquentation est passée de 30 000 à 33 600 spectateurs, soit un taux de variation de (33 600 − 30 000) ÷ 30 000 × 100 = + 12 %.",
      grille: ["J'ai cité la source et l'unité.", "J'ai comparé le public et la population.", "Mon calcul est juste et rédigé.", "J'ai expliqué avec une notion du cours."],
    },
    {
      id: 's2tmd-edes-m3', mat: 's2tmd-edes', titre: "Expliquer la fatalité des coûts et les stratégies pour y faire face",
      formules: ["Expliquez pourquoi le spectacle vivant est soumis à la fatalité des coûts.", "Présentez deux stratégies permettant de lutter contre la fatalité des coûts.", "Montrez que le soutien public au spectacle vivant se justifie."],
      vu: ["Objectif du programme : comprendre la loi de la fatalité des coûts et les stratégies des entreprises de spectacle", "Fiche ressource officielle sur les spécificités de l'économie du spectacle vivant"],
      pts: "Une question de mobilisation des connaissances ou un paragraphe argumenté de 4 à 6 points",
      attendu: "Définir la fatalité des coûts (Baumol et Bowen, 1966), expliquer son mécanisme (productivité stagnante, salaires qui suivent l'économie, demande sensible au prix), puis donner des stratégies précises et illustrées.",
      etapes: ["Définir la notion et citer Baumol et Bowen.", "Expliquer le mécanisme avec un exemple (le quatuor, la pièce à dix comédiens).", "Montrer la conséquence : des coûts qui montent plus vite que les recettes.", "Présenter deux ou trois stratégies (fréquentation, productivité, activités dérivées, mécénat).", "Conclure sur le rôle du soutien public."],
      mots: ["productivité", "fatalité des coûts", "élasticité-prix", "activités dérivées", "subvention"],
      pieges: ["Dire que les artistes « coûtent trop cher » sans expliquer la productivité.", "Oublier pourquoi on ne peut pas monter le prix des billets.", "Citer des stratégies sans exemple.", "Confondre gain de productivité et hausse de qualité."],
      cas: "Une compagnie fictive joue une pièce avec huit comédiens. Ses salaires ont augmenté de 15 % en cinq ans, comme ceux du reste de l'économie, mais il faut toujours huit comédiens et deux heures pour jouer la pièce. Le prix de vente du spectacle n'a augmenté que de 5 %.",
      question: "Explique pourquoi la compagnie est confrontée à la fatalité des coûts et propose deux stratégies.",
      modele: "Selon Baumol et Bowen (1966), le spectacle vivant subit la fatalité des coûts : la productivité du travail n'y augmente pas, car il faut toujours huit comédiens pendant deux heures pour jouer la pièce, alors que les salaires suivent ceux du reste de l'économie (+ 15 % en cinq ans). Les coûts augmentent donc plus vite que les recettes (+ 5 %), car un prix trop élevé ferait fuir les programmateurs et le public. Pour y faire face, la compagnie peut d'abord accroître la fréquentation, par exemple en organisant une tournée plus longue : les coûts de création sont alors répartis sur plus de représentations. Elle peut aussi développer des activités dérivées, comme des ateliers de théâtre dans les lycées ou la vente d'une captation. Ces limites expliquent aussi le rôle des subventions publiques.",
      grille: ["J'ai défini la fatalité des coûts et cité ses auteurs.", "J'ai expliqué le mécanisme avec les données.", "J'ai proposé deux stratégies illustrées.", "Mon texte est rédigé et organisé."],
    },
    {
      id: 's2tmd-edes-m4', mat: 's2tmd-edes', titre: "Résoudre un cas pratique de droit du spectacle",
      formules: ["Qualifiez le contrat conclu entre…", "Indiquez si l'artiste est salarié ou indépendant.", "Quels droits l'auteur peut-il faire valoir ?"],
      vu: ["Objectif du programme : connaître les obligations de l'entrepreneur, les contrats, les statuts et la propriété intellectuelle, à partir de cas concrets", "Fiche ressource officielle sur les caractéristiques du droit du spectacle vivant"],
      pts: "Une question de 2 à 4 points",
      attendu: "Un raisonnement en trois temps : les faits utiles, la règle de droit (avec le mot juste), puis la solution appliquée au cas.",
      etapes: ["Relever les faits utiles (qui, quoi, combien, quel accord).", "Poser le problème juridique en une question.", "Énoncer la règle : la définition du contrat, du statut ou du droit concerné.", "Appliquer la règle aux faits.", "Conclure par une réponse claire."],
      mots: ["contrat de cession", "coréalisation", "présomption de salariat", "droit moral", "droits voisins"],
      pieges: ["Répondre « oui » ou « non » sans règle.", "Confondre cession et coréalisation.", "Confondre droits d'auteur et droits voisins.", "Oublier de conclure sur le cas précis."],
      cas: "Le festival fictif Les Nuits de Valmont paie 6 000 euros à la compagnie Le Fil Rouge pour deux représentations de sa pièce, quelle que soit la billetterie. La pièce a été écrite par une autrice vivante. Après le spectacle, le festival veut mettre la vidéo de la pièce en ligne sans rien demander.",
      question: "Qualifie le contrat entre le festival et la compagnie, puis dis si le festival peut diffuser la vidéo librement.",
      modele: "Faits : le festival verse un prix fixe de 6 000 euros, sans lien avec la billetterie, pour deux représentations. Règle : un contrat par lequel un producteur vend un spectacle clé en main pour un prix fixe est un contrat de cession ; la compagnie reste l'employeur des artistes. Application : c'est donc un contrat de cession, et non une coréalisation, qui supposerait un partage des recettes. Pour la vidéo : l'autrice a des droits patrimoniaux sur sa pièce, qui lui permettent d'autoriser ou non sa reproduction et sa diffusion ; les comédiens ont des droits voisins sur leur interprétation. Le festival doit donc obtenir leur autorisation (souvent par la SACD pour l'autrice) et les rémunérer : il ne peut pas diffuser la vidéo librement.",
      grille: ["J'ai relevé les faits utiles.", "J'ai énoncé la règle avec le bon mot.", "J'ai appliqué la règle au cas.", "J'ai conclu clairement."],
    },
    {
      id: 's2tmd-edes-m5', mat: 's2tmd-edes', titre: "Construire une argumentation à partir d'un dossier",
      formules: ["À l'aide du dossier et de vos connaissances, montrez que…", "Dans quelle mesure… ?", "Discutez l'efficacité de…"],
      vu: ["Programme : « le développement d'une argumentation à partir d'un dossier documentaire » fait partie des évaluations prévues", "Thème le plus souvent travaillé ainsi : le bilan de la politique culturelle"],
      pts: "6 à 8 points dans une évaluation de 2 heures",
      attendu: "Un texte organisé en paragraphes : une courte introduction qui définit les mots du sujet, deux ou trois arguments construits chacun avec une idée, une explication tirée du cours et une illustration tirée du dossier, puis une conclusion qui répond.",
      etapes: ["Définir les mots clés du sujet.", "Classer les informations du dossier par idée.", "Construire chaque paragraphe : affirmation, explication, exemple chiffré, petite conclusion.", "Si le sujet dit « dans quelle mesure », présenter aussi une limite.", "Conclure en répondant à la question."],
      mots: ["d'une part", "d'autre part", "en effet", "par exemple, selon le document", "cependant"],
      pieges: ["Paraphraser les documents sans connaissances.", "Oublier de définir les mots du sujet.", "Faire une liste au lieu de paragraphes.", "Ne pas répondre à la question en conclusion."],
      cas: "Dossier fictif : les labels publics se sont multipliés dans les villes moyennes ; une enquête montre que 60 % du public des scènes labellisées a un diplôme du supérieur, contre environ un tiers des adultes ; le pass Culture a surtout servi à acheter des livres et des places de concert.",
      question: "Dans quelle mesure la politique de démocratisation de la culture a-t-elle atteint ses objectifs ?",
      modele: "La démocratisation de la culture vise à rendre les œuvres accessibles à tous, quel que soit le milieu social ou le lieu de vie. D'une part, elle a réussi à développer l'offre : depuis Malraux et la décentralisation théâtrale, des lieux labellisés existent dans de nombreuses villes moyennes, comme le montre le dossier, ce qui rapproche les spectacles des habitants. Le pass Culture a aussi permis à des jeunes d'acheter des livres et des places de concert. Cependant, l'offre ne suffit pas à changer les publics : selon l'enquête, 60 % du public des scènes labellisées est diplômé du supérieur, contre environ un tiers des adultes. Comme l'explique Bourdieu, le goût pour les spectacles dépend du capital culturel transmis par la famille et l'école. La démocratisation a donc partiellement atteint ses objectifs : elle a élargi l'accès, mais elle n'a pas supprimé les inégalités, d'où l'importance de la médiation et de l'éducation artistique dès l'enfance.",
      grille: ["J'ai défini les mots du sujet.", "Chaque paragraphe a une idée, une explication et un exemple.", "J'ai utilisé le dossier et le cours.", "J'ai répondu à la question en nuançant."],
    },
  ],
  sujets: [
    {
      id: 's2tmd-edes-s1', matiere: 's2tmd-edes', titre: "Sujet d'entraînement 1 : la compagnie Le Fil Rouge", duree: 120,
      enonce: `## Sujet d'entraînement 1 (inventé)

Durée : 2 heures. Évaluation de première sur dossier documentaire, au format des évaluations prévues par le programme. La compagnie, le festival, les personnes et les chiffres sont fictifs.

### Présentation de la structure
La compagnie Le Fil Rouge est une association de théâtre installée dans la ville fictive de Valmont. Elle compte une salariée permanente (une administratrice) et emploie, pour chaque spectacle, des comédiens et des techniciens en contrats courts. Sa directrice artistique, Lina Morel, est metteuse en scène et comédienne ; elle anime aussi des ateliers de théâtre dans deux lycées. Pour sa nouvelle pièce, écrite par une autrice vivante, la compagnie a réuni huit comédiens et trois techniciens.

**Document 1 : budget de la nouvelle pièce (en euros)**
- Charges : salaires et cotisations des artistes et techniciens 52 000 ; décors et costumes 9 000 ; droits d'auteur 3 000 ; communication 4 000 ; transports et hébergement 7 000. Total : 75 000.
- Produits : dix représentations vendues à des théâtres par contrat de cession, à 4 200 euros chacune ; subventions de l'État 12 000, de la région 8 000 et de la ville 6 000 ; mécénat d'une entreprise de Valmont 4 000.

**Document 2 : public du théâtre municipal de Valmont (répartition en %)**
Cadres 38 ; professions intermédiaires 24 ; employés 14 ; ouvriers 6 ; retraités 12 ; autres 6. Dans la population de Valmont, les cadres représentent 15 % et les ouvriers 20 % des habitants.

**Document 3 : extrait d'un entretien avec l'administratrice**
« Nos salaires suivent ceux du reste de l'économie, mais il faut toujours huit comédiens pour jouer la pièce. Nous ne pouvons pas vendre le spectacle beaucoup plus cher : les théâtres ont des budgets serrés. Quatre théâtres d'autres régions nous proposent des dates supplémentaires ; chaque nouvelle date nous coûterait environ 1 800 euros de plus (salaires du jour, transport). Un festival nous propose aussi de filmer la pièce. »

### Partie 1 : mobilisation des connaissances (6 points)
- Q1 (2 points). Distinguez la création, la production et la diffusion, en les illustrant à l'aide de la compagnie.
- Q2 (2 points). Montrez que Lina Morel est pluriactive et polyvalente.
- Q3 (2 points). Distinguez les droits d'auteur de l'autrice et les droits des comédiens sur leur interprétation.

### Partie 2 : étude des documents (8 points)
- Q4 (3 points). À l'aide du document 1, calculez le total des produits, le résultat de la pièce et la part des subventions dans les produits.
- Q5 (2 points). À l'aide du document 2, montrez que le public du théâtre municipal est socialement sélectionné, et proposez une explication.
- Q6 (3 points). À l'aide du document 3 et de vos connaissances, expliquez pourquoi la compagnie est confrontée à la fatalité des coûts.

### Partie 3 : argumentation (6 points)
- Q7 (6 points). À l'aide du dossier et de vos connaissances, montrez que la compagnie peut mettre en œuvre plusieurs stratégies pour faire face à la fatalité des coûts. Vous calculerez l'effet des quatre dates supplémentaires sur le résultat.`,
      corrige: `## Corrigé

### Q1
- La **création** est la conception du spectacle : l'écriture de la pièce par l'autrice et les répétitions dirigées par Lina Morel.
- La **production** consiste à réunir les moyens : la compagnie engage les huit comédiens et les trois techniciens, paie les décors et cherche des financements (subventions, mécénat).
- La **diffusion** consiste à faire jouer le spectacle devant le public : la compagnie vend dix représentations à des théâtres par contrat de cession.

### Q2
- **Pluriactive** : elle exerce dans plusieurs champs d'activité, la création et l'interprétation (metteuse en scène et comédienne) et l'enseignement (ateliers dans deux lycées).
- **Polyvalente** : au sein de la compagnie, elle cumule plusieurs fonctions (direction artistique, mise en scène, jeu), auxquelles s'ajoute la médiation lors des ateliers.

### Q3
- L'autrice a un **droit d'auteur** sur sa pièce, œuvre originale : un droit moral perpétuel (être reconnue, faire respecter le texte) et des droits patrimoniaux (autoriser la représentation contre rémunération, ici 3 000 euros), jusqu'à 70 ans après sa mort. Ils sont souvent gérés par la SACD.
- Les comédiens ne sont pas auteurs : ils ont des **droits voisins** sur leur interprétation, notamment si elle est enregistrée ou filmée, gérés par des organismes comme la SPEDIDAM ou l'ADAMI.

### Q4
- Cessions : 10 × 4 200 = 42 000 euros. Subventions : 12 000 + 8 000 + 6 000 = 26 000 euros. Mécénat : 4 000 euros.
- **Total des produits** : 42 000 + 26 000 + 4 000 = **72 000 euros**.
- **Résultat** : 72 000 − 75 000 = **− 3 000 euros** : la pièce est déficitaire.
- **Part des subventions** : 26 000 ÷ 72 000 × 100 ≈ **36,1 %** des produits.

### Q5
- D'après ce document fictif, 38 % des spectateurs sont des cadres alors qu'ils ne forment que 15 % des habitants, soit une présence plus de deux fois plus forte. Les ouvriers forment 20 % des habitants mais seulement 6 % du public.
- Explication : les pratiques culturelles sont socialement différenciées ; selon Bourdieu, le goût pour le théâtre dépend du capital culturel et du niveau de diplôme.

### Q6
- Selon Baumol et Bowen (1966), le spectacle vivant subit la **fatalité des coûts**.
- La **productivité du travail stagne** : il faut toujours huit comédiens pour jouer la pièce, on ne peut pas les remplacer par des machines.
- Pourtant, les **salaires suivent** ceux du reste de l'économie : les coûts augmentent.
- Le prix de vente ne peut pas suivre, car les théâtres ont des budgets serrés (la demande est sensible au prix).
- Les coûts augmentent donc plus vite que les recettes : la pièce est déficitaire de 3 000 euros, malgré 26 000 euros de subventions.

### Q7
Réponse attendue, rédigée en paragraphes :
- **Accroître la fréquentation** : les quatre dates supplémentaires rapportent 4 × 4 200 = 16 800 euros et coûtent 4 × 1 800 = 7 200 euros, soit + 9 600 euros. Le résultat passerait de − 3 000 à **+ 6 600 euros**. Les coûts de création (décors, répétitions) sont répartis sur 14 représentations au lieu de 10.
- **Développer des activités dérivées** : la captation proposée par le festival peut être vendue ou diffusée, à condition d'obtenir l'accord de l'autrice et des comédiens et de les rémunérer (droits d'auteur et droits voisins). Les ateliers dans les lycées rapportent aussi des recettes et font connaître la compagnie à de nouveaux publics (médiation).
- **Diversifier les financements** : le mécénat (4 000 euros) peut être développé, car une entreprise mécène réduit ses impôts de 60 % de son don ; le don lui coûte donc en réalité 4 000 × 0,4 = 1 600 euros.
- **Chercher des gains de productivité** : des décors légers et réutilisables réduiraient les transports.
- Limite : ces stratégies ne suppriment pas la fatalité des coûts, ce qui justifie le maintien des subventions publiques, spécificité du modèle français.`,
      grille: [
        { c: "Partie 1 : création, production, diffusion illustrées (Q1)", pts: 2 },
        { c: "Partie 1 : pluriactivité et polyvalence définies et appliquées (Q2)", pts: 2 },
        { c: "Partie 1 : droits d'auteur et droits voisins distingués (Q3)", pts: 2 },
        { c: "Partie 2 : calculs justes du total, du résultat et de la part des subventions (Q4)", pts: 3 },
        { c: "Partie 2 : lecture juste du document 2 et explication sociologique (Q5)", pts: 2 },
        { c: "Partie 2 : fatalité des coûts expliquée avec le document 3 (Q6)", pts: 3 },
        { c: "Partie 3 : argumentation organisée, avec le calcul des dates supplémentaires et au moins trois stratégies illustrées (Q7)", pts: 6 },
      ],
    },
  ],
};
