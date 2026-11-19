// Ressources humaines et communication (enseignement spécifique de management, sciences de gestion et numérique) — terminale STMG. Sources : voir matiere.sources.
// Programme : arrêté du 19 juillet 2019 (BO spécial n° 8 du 25 juillet 2019, annexe 2), partie « Enseignement spécifique de ressources humaines et communication » : 3 thèmes, 9 questions. Un chapitre par question.
// Épreuve : la note de service du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026) dit que l'écrit de management, sciences de gestion et numérique porte sur la partie enseignement commun.
// L'enseignement spécifique n'a donc pas d'écrit à lui : il sert de support au projet présenté au grand oral, et ses notions RH aident aux questions RH de l'écrit commun.
export default {
  matiere: {
    id: 'stmg-rhc',
    nom: 'Ressources humaines et communication',
    voie: 'stmg',
    epreuve: { type: 'oral', duree: 20, coef: 14, quand: 'juin', note: 'Pas d\'écrit propre : l\'écrit de management (4 h, coefficient 16) porte sur l\'enseignement commun. L\'enseignement spécifique sert au grand oral : 20 minutes sur une question préparée à partir du projet mené en classe, puis un échange avec le jury. Coefficient du grand oral à vérifier pour la session 2027.' },
    sources: [
      'https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/14/1/spe262_annexe2_1159141.pdf',
      'https://www.education.gouv.fr/bo/19/Special8/MENE1921262A.htm',
      'https://www.education.gouv.fr/bo/2026/Special4/MENE2622652N',
      'https://eduscol.education.gouv.fr/5862/programmes-et-ressources-en-serie-stmg',
      'https://www.legifrance.gouv.fr (Code du travail, Code de la sécurité sociale)',
      'https://travail-emploi.gouv.fr et https://www.service-public.fr (formation, santé au travail, épargne salariale, dialogue social)',
    ],
    chapitres: [
      { id: 'stmg-rhc-1', t: 'Le recrutement suffit-il pour répondre aux besoins en compétences de l\'organisation ?', theme: 'Compétences' },
      { id: 'stmg-rhc-2', t: 'Peut-on tout évaluer dans le travail ?', theme: 'Compétences' },
      { id: 'stmg-rhc-3', t: 'La gestion des compétences et des talents permet-elle de garantir l\'employabilité de l\'individu ?', theme: 'Compétences' },
      { id: 'stmg-rhc-4', t: 'La recherche du mieux vivre au travail est-elle compatible avec les objectifs de performance ?', theme: 'Motivation et satisfaction' },
      { id: 'stmg-rhc-5', t: 'Les obligations en matière de santé et de sécurité au travail constituent-elles des atouts pour l\'organisation ?', theme: 'Motivation et satisfaction' },
      { id: 'stmg-rhc-6', t: 'La rémunération individuelle suffit-elle à reconnaître et valoriser l\'individu au travail ?', theme: 'Motivation et satisfaction' },
      { id: 'stmg-rhc-7', t: 'Les tensions professionnelles peuvent-elles renforcer la cohésion ?', theme: 'Cohésion' },
      { id: 'stmg-rhc-8', t: 'À quelles conditions le dialogue social peut-il renforcer durablement la cohésion ?', theme: 'Cohésion' },
      { id: 'stmg-rhc-9', t: 'Comment la communication participe-t-elle à la cohésion et à la performance de l\'organisation ?', theme: 'Cohésion' },
    ],
  },
  paquets: [
    {
      chapitre: 'stmg-rhc-1',
      fiche: `## Le recrutement suffit-il pour répondre aux besoins en compétences ?

### Compétences, qualification, potentiel
- La **compétence** est la capacité à mobiliser des **savoirs** (connaissances), des **savoir-faire** (pratique) et des **savoir-être** (comportements) dans une situation de travail réelle.
- La **qualification** est reconnue officiellement : un **diplôme**, un titre professionnel ou un niveau de la grille de classification de la convention collective. Elle sert notamment à fixer le salaire minimum du poste.
- Le **potentiel** est ce qu'une personne pourrait faire demain, avec de la formation et de l'expérience.
- Le **parcours professionnel** est la suite des emplois, formations et mobilités d'une personne. Les carrières sont de moins en moins linéaires : on change plus souvent d'entreprise et de métier.

### Anticiper : la GPEC
- La **gestion prévisionnelle des emplois et des compétences (GPEC)**, appelée aujourd'hui **GEPP** (gestion des emplois et des parcours professionnels), compare :
  - les **compétences disponibles** aujourd'hui (effectifs, âges, qualifications) ;
  - les **compétences nécessaires** demain (nouvelles technologies, nouveaux marchés, départs en retraite).
- L'**écart** se comble par le recrutement, la formation, la mobilité interne, ou en faisant appel à d'autres formes de travail.
- Outils : **référentiel de compétences**, **fiche de poste**, **cartographie des métiers**, **pyramide des âges**.
- La négociation sur la GEPP est obligatoire tous les **trois ans** dans les entreprises d'au moins **300 salariés**.

### Le processus de recrutement
- **Définir le besoin** : fiche de poste (missions, tâches) et **profil** recherché (compétences, qualification).
- **Rechercher des candidats** :
  - en **interne** (promotion, mobilité, bourse à l'emploi interne, **cooptation** : un salarié recommande quelqu'un) : rapide, peu coûteux et motivant, mais peu d'idées nouvelles ;
  - en **externe** (annonces, cabinets, France Travail, écoles, salons) : apport de compétences et d'idées nouvelles, mais plus long et plus cher.
- L'**e-recrutement** utilise internet : sites d'emploi, page carrière, **réseaux sociaux professionnels**, CVthèques, logiciels de tri des candidatures.
- **Sélectionner** : tri des CV, entretiens, tests, mises en situation. Les méthodes doivent être **pertinentes** au regard du poste et le candidat en est informé.
- **Respecter la loi** :
  - **non-discrimination** : interdiction de choisir selon l'origine, le sexe, l'âge, l'apparence, le handicap, l'adresse et plus de vingt autres critères (article L1132-1 du Code du travail) ;
  - **obligation d'emploi des travailleurs handicapés** : **6 %** de l'effectif dans les entreprises d'au moins **20 salariés**, sinon une contribution financière.
- La **marque employeur** (image de l'organisation comme lieu de travail) et une communication adaptée attirent les bons candidats.

### Accueillir, intégrer, fidéliser
- L'**intégration** (ou **onboarding**) prépare l'arrivée et accompagne les premiers mois : livret d'accueil, présentation de l'équipe, **tutorat** ou parrainage, points d'étape pendant la **période d'essai**.
- Une intégration ratée provoque des départs rapides, qui coûtent cher (le recrutement est à refaire).
- La **fidélisation** garde les salariés compétents : perspectives d'évolution, formation, reconnaissance, bonnes conditions de travail. Elle limite la « fuite » des compétences.
- Indicateur : le **taux de rotation** (turnover) = ((entrées + sorties) ÷ 2) ÷ effectif moyen × 100.

### Les autres formes de relation de travail
- Le recrutement d'un salarié n'est pas la seule façon d'obtenir des compétences :
  - **intérim** : un travailleur mis à disposition par une agence ;
  - **portage salarial** : un indépendant devient salarié d'une société de portage qui facture ses missions ;
  - **micro-entrepreneur** ou prestataire : un contrat commercial, sans lien de subordination ;
  - **bénévolat** dans les associations, **stage**, **alternance**.
- Avantages : souplesse, compétences rares disponibles vite. Limites : moins d'implication, compétences qui repartent, risque de requalification en contrat de travail.

### À retenir pour le bac
- Répondre à la question en deux temps : le recrutement est **essentiel** (il apporte les compétences), mais il **ne suffit pas** : il faut aussi anticiper (GPEC), intégrer, fidéliser et parfois recourir à d'autres formes de travail.`,
      cartes: [
        { q: "Qu'est-ce qu'une compétence ?", r: "La capacité à mobiliser des savoirs, des savoir-faire et des savoir-être dans une situation de travail." },
        { q: "Quelle différence entre compétence et qualification ?", r: "La qualification est reconnue officiellement (diplôme, classification). La compétence se constate en situation de travail." },
        { q: "Qu'est-ce que le potentiel d'un salarié ?", r: "Ce qu'il pourrait faire demain grâce à la formation et à l'expérience, au-delà de ses compétences actuelles." },
        { q: "Que fait la GPEC (ou GEPP) ?", r: "Elle compare les compétences disponibles et les compétences nécessaires demain, puis organise des actions pour combler l'écart." },
        { q: "Quand la négociation sur la GEPP est-elle obligatoire ?", r: "Tous les trois ans, dans les entreprises d'au moins 300 salariés." },
        { q: "Quels sont les outils de la GPEC ?", r: "Le référentiel de compétences, la fiche de poste, la cartographie des métiers et la pyramide des âges." },
        { q: "Quelles sont les étapes du recrutement ?", r: "Définir le besoin, rechercher des candidats, sélectionner, puis accueillir et intégrer le nouveau salarié." },
        { q: "Avantages et limites du recrutement interne ?", r: "Rapide, peu coûteux et motivant pour les salariés ; mais il apporte peu d'idées et de compétences nouvelles." },
        { q: "Qu'est-ce que l'e-recrutement ?", r: "Le recrutement par internet : sites d'emploi, page carrière, réseaux sociaux professionnels, CVthèques, tri automatisé." },
        { q: "Qu'est-ce que la cooptation ?", r: "Un salarié recommande une personne de son entourage pour un poste à pourvoir." },
        { q: "Quelle obligation d'emploi des travailleurs handicapés ?", r: "6 % de l'effectif dans les entreprises d'au moins 20 salariés, sinon une contribution financière." },
        { q: "Qu'est-ce que l'onboarding ?", r: "L'ensemble des actions qui préparent l'arrivée et accompagnent l'intégration d'un nouveau salarié (accueil, tutorat, suivi)." },
        { q: "Pourquoi fidéliser les salariés ?", r: "Le recrutement coûte cher et un départ fait perdre des compétences : il vaut mieux garder les talents." },
        { q: "Comment calcule-t-on le taux de rotation du personnel ?", r: "((Entrées + sorties) ÷ 2) ÷ effectif moyen × 100." },
        { q: "Qu'est-ce que le portage salarial ?", r: "Un indépendant devient salarié d'une société de portage, qui facture ses missions aux entreprises clientes." },
      ],
      quiz: [
        { q: "Une compétence associe :", choix: ["un diplôme, une ancienneté dans l'entreprise et un salaire", "des savoirs, des savoir-faire et des savoir-être", "une fiche de poste, un contrat et une prime", "un CV, une lettre et un entretien"], bonne: 1, expl: "La compétence mobilise connaissances, pratique et comportements en situation. Le diplôme relève de la qualification.", niv: 1 },
        { q: "Quel outil compare les compétences disponibles et celles nécessaires demain ?", choix: ["La GPEC", "La convention collective", "Le bilan social", "Le bulletin de paie"], bonne: 0, expl: "La gestion prévisionnelle des emplois et des compétences (aujourd'hui GEPP) mesure l'écart et prévoit des actions.", niv: 1 },
        { q: "Quelle part de travailleurs handicapés est exigée dans les entreprises d'au moins 20 salariés ?", choix: ["2 %", "4 %", "6 %", "5 %"], bonne: 2, expl: "6 % de l'effectif. À défaut, l'entreprise verse une contribution financière.", niv: 1 },
        { q: "Un salarié recommande un ami pour un poste vacant. C'est :", choix: ["une mobilité interne", "un recrutement par cabinet", "de la cooptation", "de l'intérim"], bonne: 2, expl: "La cooptation s'appuie sur le réseau des salariés. Elle est rapide et peu coûteuse, mais peut reproduire les mêmes profils.", niv: 1 },
        { q: "Une entreprise publie ses offres sur un réseau social professionnel et trie les CV avec un logiciel. Elle pratique :", choix: ["la cooptation", "l'e-recrutement", "le portage salarial", "la mobilité fonctionnelle"], bonne: 1, expl: "L'e-recrutement utilise internet à toutes les étapes : diffusion des offres, réception et tri des candidatures.", niv: 2 },
        { q: "Pourquoi le recrutement interne est-il motivant ?", choix: ["Il garantit le meilleur candidat", "Il évite tout entretien de sélection", "Il fait entrer beaucoup d'idées nouvelles venues d'ailleurs", "Il offre des perspectives d'évolution aux salariés"], bonne: 3, expl: "Les salariés voient qu'ils peuvent évoluer. En revanche, il apporte peu d'idées nouvelles, ce qui est l'atout du recrutement externe.", niv: 2 },
        { q: "Une annonce précise « candidat de moins de 30 ans ». Elle est :", choix: ["valable si le poste est physique", "valable dans une petite entreprise", "discriminatoire et interdite", "obligatoire pour un premier emploi"], bonne: 2, expl: "L'âge fait partie des critères de discrimination interdits par l'article L1132-1 du Code du travail.", niv: 2 },
        { q: "Une entreprise a 100 salariés en moyenne, 12 entrées et 8 sorties dans l'année. Son taux de rotation est :", choix: ["40 %", "10 %", "12 %", "20 %"], bonne: 1, expl: "((12 + 8) ÷ 2) ÷ 100 × 100 = 10 %.", niv: 2 },
        { q: "Quelle action ne fait **pas** partie de l'intégration d'un nouveau salarié ?", choix: ["Un livret d'accueil", "Le choix d'un tuteur", "Un point d'étape pendant la période d'essai", "La rédaction de la fiche de poste"], bonne: 3, expl: "La fiche de poste se rédige avant le recrutement, pour définir le besoin. Les trois autres actions accompagnent l'arrivée.", niv: 2 },
        { q: "Une start-up confie une mission de six mois à un développeur micro-entrepreneur. Quel est le principal risque ?", choix: ["La perte de son diplôme", "L'obligation de lui verser une prime de précarité", "L'interdiction de le payer à la mission", "Une requalification en contrat de travail"], bonne: 3, expl: "Si la start-up lui donne des ordres, contrôle et sanctionne comme un salarié, le juge peut requalifier la relation.", niv: 3 },
        { q: "Pourquoi une intégration ratée coûte-t-elle cher ?", choix: ["Le départ rapide oblige à refaire tout le recrutement", "La loi impose une amende", "Le salarié parti touche une indemnité de précarité de 10 %", "Le salaire augmente automatiquement"], bonne: 0, expl: "Un départ pendant ou juste après la période d'essai fait perdre le coût du recrutement et le temps de formation.", niv: 3 },
        { q: "Pourquoi peut-on dire que le recrutement ne suffit pas à répondre aux besoins en compétences ?", choix: ["Il faut aussi anticiper, intégrer et fidéliser", "Le recrutement est interdit sans GPEC", "Les entreprises ne peuvent plus recruter en externe", "Seul l'intérim apporte des compétences"], bonne: 0, expl: "Recruter apporte des compétences, mais il faut prévoir les besoins (GPEC), réussir l'intégration et garder les talents.", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-rhc-2',
      fiche: `## Peut-on tout évaluer dans le travail ?

### Pourquoi évaluer ?
- Pour l'**organisation** : mesurer la contribution de chacun, repérer les besoins de **formation**, décider des **augmentations**, des **promotions** et des **mobilités**, préparer la GPEC.
- Pour le **salarié** : savoir ce qu'on attend de lui, être **reconnu**, exprimer ses souhaits, construire son **projet professionnel**.

### Trois objets d'évaluation
- Les **résultats** du travail : ce qui a été produit, par rapport à des **objectifs** (chiffre d'affaires, nombre de dossiers traités, délais).
- Les **compétences** : ce que la personne sait faire et comment elle le fait.
- Le **potentiel** : ce qu'elle pourrait faire demain, dans un autre poste ou à un niveau supérieur.

### Les dispositifs d'évaluation
- L'**entretien annuel d'évaluation** (ou entretien périodique) :
  - il n'est **pas obligatoire** par la loi, mais il est très répandu ;
  - il fait le bilan de l'année, mesure l'atteinte des objectifs et fixe ceux de l'année suivante ;
  - de bons objectifs sont **SMART** : spécifiques, mesurables, atteignables, réalistes, définis dans le temps.
- L'**entretien professionnel** :
  - il est **obligatoire tous les deux ans** pour tous les salariés (loi du 5 mars 2014) ;
  - il porte sur les **perspectives d'évolution** (qualification, emploi, formation), **pas** sur l'évaluation du travail ;
  - il est aussi proposé au retour d'un long congé (maternité, parental, arrêt longue maladie) ;
  - tous les **six ans**, un **état des lieux récapitulatif** vérifie que le salarié a bénéficié des entretiens et d'au moins une formation non obligatoire. Dans les entreprises d'au moins 50 salariés, un manquement entraîne un abondement de son compte de formation.
- Le **bilan de compétences** :
  - il est à l'**initiative du salarié** (ou proposé, jamais imposé) ;
  - un organisme extérieur l'aide à analyser ses compétences, ses aptitudes et ses motivations pour construire un projet ;
  - il peut être financé par le **compte personnel de formation** ; les résultats appartiennent au salarié.
- L'**évaluation à 360 degrés** : le salarié est évalué par son responsable, ses collègues, ses collaborateurs, parfois des clients.

### Le cadre légal
- Le salarié doit être **informé à l'avance** des méthodes et techniques d'évaluation.
- Les méthodes doivent être **pertinentes** au regard du but poursuivi, et les informations demandées doivent avoir un **lien direct** avec le travail.
- Les résultats restent **confidentiels**. Une évaluation ne peut pas reposer sur un critère discriminatoire.
- Le CSE est informé et consulté sur les méthodes d'évaluation.

### Les limites : tout n'est pas mesurable
- Certaines dimensions du travail sont difficiles à mesurer : la **coopération**, l'**entraide**, la créativité, le travail invisible (rattraper l'erreur d'un collègue, rassurer un client).
- L'évaluation peut glisser vers un jugement **subjectif** de la personne plutôt que de son travail. Biais fréquents :
  - **effet de halo** : une qualité ou un défaut colore tout le jugement ;
  - **effet de récence** : seuls les derniers mois comptent ;
  - **tendance centrale** : tout le monde reçoit une note moyenne ;
  - **indulgence** ou **sévérité** excessive.
- Une évaluation mal faite **démotive**, crée un sentiment d'**injustice** et peut nuire à la coopération si elle met les salariés en concurrence.
- Pour **objectiver** : critères écrits et connus, grilles, formation des évaluateurs, droit de commentaire du salarié, plusieurs regards.

### À retenir pour le bac
- Ne pas confondre **entretien annuel d'évaluation** (facultatif, porte sur les résultats) et **entretien professionnel** (obligatoire tous les 2 ans, porte sur l'évolution).
- Réponse nuancée : on peut évaluer les résultats et les compétences avec des outils objectifs, mais pas **tout** : une part du travail échappe à la mesure.`,
      cartes: [
        { q: "Pourquoi l'organisation évalue-t-elle ses salariés ?", r: "Pour mesurer leur contribution, repérer les besoins de formation, décider des augmentations, promotions et mobilités." },
        { q: "Que gagne le salarié à être évalué ?", r: "Il sait ce qu'on attend de lui, il est reconnu, il exprime ses souhaits et construit son projet professionnel." },
        { q: "Quels sont les trois objets de l'évaluation ?", r: "Les résultats du travail, les compétences et le potentiel." },
        { q: "L'entretien annuel d'évaluation est-il obligatoire ?", r: "Non, la loi ne l'impose pas, mais il est très répandu. Il porte sur les résultats et les objectifs." },
        { q: "Que signifie un objectif SMART ?", r: "Spécifique, mesurable, atteignable, réaliste et défini dans le temps." },
        { q: "Qu'est-ce que l'entretien professionnel ?", r: "Un entretien obligatoire tous les deux ans sur les perspectives d'évolution du salarié (qualification, emploi, formation)." },
        { q: "Qu'est-ce que l'état des lieux récapitulatif ?", r: "Tous les six ans, un bilan qui vérifie que le salarié a eu ses entretiens professionnels et au moins une formation non obligatoire." },
        { q: "Qu'est-ce qu'un bilan de compétences ?", r: "Une démarche à l'initiative du salarié, avec un organisme extérieur, pour analyser ses compétences et motivations et construire un projet." },
        { q: "À qui appartiennent les résultats d'un bilan de compétences ?", r: "Au salarié seul. L'employeur ne peut les connaître qu'avec son accord." },
        { q: "Qu'est-ce que l'évaluation à 360 degrés ?", r: "Une évaluation par le responsable, les collègues, les collaborateurs et parfois les clients." },
        { q: "Quelles règles encadrent les méthodes d'évaluation ?", r: "Le salarié en est informé à l'avance, elles sont pertinentes, liées au travail, confidentielles et non discriminatoires." },
        { q: "Qu'est-ce que l'effet de halo ?", r: "Un biais d'évaluation : une seule qualité ou un seul défaut influence tout le jugement porté sur la personne." },
        { q: "Pourquoi tout n'est-il pas évaluable dans le travail ?", r: "La coopération, l'entraide, la créativité et le travail invisible sont difficiles à mesurer par des chiffres." },
        { q: "Comment rendre une évaluation plus objective ?", r: "Critères écrits et connus, grilles, formation des évaluateurs, plusieurs regards, droit de commentaire du salarié." },
      ],
      quiz: [
        { q: "Tous les combien l'entretien professionnel est-il obligatoire ?", choix: ["Deux fois par an", "Tous les deux ans", "Chaque année", "Tous les six ans"], bonne: 1, expl: "Tous les deux ans. Tous les six ans a lieu l'état des lieux récapitulatif.", niv: 1 },
        { q: "Qui prend en principe l'initiative d'un bilan de compétences ?", choix: ["Le salarié", "L'inspection du travail", "Le comité social et économique", "Le médecin du travail"], bonne: 0, expl: "Le bilan de compétences est une démarche volontaire du salarié. Il ne peut pas lui être imposé.", niv: 1 },
        { q: "Sur quoi porte l'entretien professionnel ?", choix: ["L'atteinte des objectifs fixés l'année précédente", "Le montant de la prime", "Les fautes commises", "Les perspectives d'évolution du salarié"], bonne: 3, expl: "Il porte sur l'évolution (qualification, emploi, formation), pas sur l'évaluation du travail.", niv: 1 },
        { q: "Un manager note tous ses collaborateurs « dans la moyenne » pour éviter les conflits. C'est le biais :", choix: ["de halo", "de récence", "de sévérité", "de tendance centrale"], bonne: 3, expl: "La tendance centrale écrase les différences : l'évaluation ne sert plus à rien.", niv: 2 },
        { q: "Un commercial très souriant est jugé excellent sur tout, même sur ses comptes rendus bâclés. C'est :", choix: ["la tendance centrale", "l'effet de récence", "l'effet de halo", "un objectif SMART"], bonne: 2, expl: "Une qualité visible (le sourire) colore tout le jugement : c'est l'effet de halo.", niv: 2 },
        { q: "Quel objectif est SMART ?", choix: ["Réduire de 10 % les délais de livraison d'ici juin", "Faire mieux que l'an dernier", "Être plus dynamique", "Satisfaire la clientèle"], bonne: 0, expl: "Il est précis, chiffré et daté. Les autres ne sont pas mesurables.", niv: 2 },
        { q: "Un employeur évalue ses salariés avec un questionnaire secret sur leur vie familiale. Ce dispositif est :", choix: ["autorisé tant que les réponses restent confidentielles", "obligatoire dès 50 salariés", "illégal, car caché et sans lien avec le travail", "une évaluation à 360 degrés"], bonne: 2, expl: "Les méthodes doivent être annoncées au salarié et les questions avoir un lien direct avec le travail.", niv: 2 },
        { q: "Quelle affirmation sur l'entretien annuel d'évaluation est exacte ?", choix: ["Il remplace l'entretien professionnel", "Il est facultatif mais très répandu", "Il est réservé aux cadres", "Il est imposé par la loi chaque année"], bonne: 1, expl: "Aucune loi ne l'impose. Il ne remplace pas l'entretien professionnel, qui lui est obligatoire.", niv: 2 },
        { q: "Quelle personne n'intervient **pas** dans une évaluation à 360 degrés ?", choix: ["Le responsable", "Les collègues", "Les collaborateurs", "L'inspecteur du travail"], bonne: 3, expl: "L'évaluation à 360 degrés réunit l'entourage professionnel, parfois les clients, jamais l'inspection du travail.", niv: 2 },
        { q: "Pourquoi l'évaluation individuelle des résultats peut-elle nuire à la coopération ?", choix: ["Elle oblige chacun à travailler seul, sans son équipe", "Elle met les salariés en concurrence entre eux", "Elle est interdite en équipe", "Elle supprime les objectifs"], bonne: 1, expl: "Si seule la performance individuelle compte, aider un collègue ne rapporte rien : l'entraide recule.", niv: 3 },
        { q: "Une entreprise de 80 salariés n'a fait aucun entretien professionnel à une salariée depuis six ans. Quelle conséquence ?", choix: ["Un abondement de son compte de formation", "La salariée doit être licenciée", "Le CSE est dissous", "Aucune, car l'entretien professionnel est facultatif"], bonne: 0, expl: "Dans les entreprises d'au moins 50 salariés, l'employeur doit alors abonder le compte personnel de formation de la salariée.", niv: 3 },
        { q: "Quelle réponse nuancée à « Peut-on tout évaluer dans le travail ? » est la plus juste ?", choix: ["Oui, avec assez d'indicateurs chiffrés", "Non, l'évaluation reste subjective", "On évalue résultats et compétences, pas tout le travail", "Non, la loi interdit d'évaluer le potentiel des salariés"], bonne: 2, expl: "Des outils objectifs existent, mais la coopération, l'entraide ou le travail invisible restent difficiles à mesurer.", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-rhc-3',
      fiche: `## La gestion des compétences et des talents garantit-elle l'employabilité ?

### L'employabilité
- L'**employabilité** est la capacité d'une personne à **garder son emploi** ou à **en retrouver un**, grâce à ses compétences, sa formation, son expérience et son réseau.
- Les métiers évoluent vite (numérique, transition écologique, automatisation) : des compétences deviennent **obsolètes**. Se former tout au long de la vie devient indispensable.
- La responsabilité est **partagée** : l'organisation a besoin de salariés compétents, et le salarié doit rester **acteur de son parcours**.

### Les obligations de l'employeur
- L'employeur doit **adapter** ses salariés à leur poste et veiller au maintien de leur **capacité à occuper un emploi**, au regard de l'évolution des emplois, des technologies et des organisations (article L6321-1 du Code du travail).
- Le **plan de développement des compétences** (qui a remplacé le plan de formation avec la loi « Avenir professionnel » du 5 septembre 2018) regroupe les formations décidées par l'employeur :
  - formations **obligatoires** (sécurité, habilitations), suivies pendant le temps de travail ;
  - formations de **développement**, qui préparent l'avenir.
- Les formations sont souvent décidées à partir des **résultats de l'évaluation** et des entretiens professionnels.

### Les dispositifs à l'initiative du salarié
- Le **compte personnel de formation (CPF)** :
  - il est crédité **en euros** : **500 euros par an**, dans la limite de **5 000 euros** (800 et 8 000 euros pour les moins qualifiés) ;
  - le salarié l'utilise librement pour une formation **certifiante** (diplôme, titre, certification, permis de conduire, bilan de compétences, VAE) ;
  - il le garde quand il change d'employeur ou perd son emploi ;
  - depuis 2024, une petite participation forfaitaire reste à sa charge, sauf exceptions ;
  - l'employeur peut **cofinancer** (abonder) le CPF : c'est le cofinancement entreprise et individu.
- Le **projet de transition professionnelle (PTP)** permet de suivre une formation longue pour **changer de métier**, en gardant sa rémunération en partie ou en totalité. Il est financé par une commission régionale (Transitions Pro).
- La **validation des acquis de l'expérience (VAE)** permet d'obtenir tout ou partie d'un diplôme grâce à son **expérience**, sans suivre la formation.
- Le **conseil en évolution professionnelle (CEP)** : un accompagnement gratuit pour faire le point sur sa carrière.

### Les nouvelles façons de se former
- L'**e-learning** : formation à distance sur un ordinateur ou un téléphone (modules en ligne, vidéos, classes virtuelles). Avantages : souplesse, coût réduit, nombre illimité d'apprenants. Limites : isolement, abandons, besoin d'autonomie.
- La formation **en situation de travail**, le **tutorat**, le partage de connaissances entre collègues : l'organisation devient **apprenante**.

### La gestion des talents et la mobilité
- Un **talent** est un salarié dont les compétences sont rares ou stratégiques. L'organisation a intérêt à les **repérer**, les **développer** et les **retenir**.
- La **mobilité professionnelle** :
  - **interne** (dans la même organisation) ou **externe** (vers une autre) ;
  - **fonctionnelle** (changer de métier ou de fonction) ou **géographique** (changer de lieu) ;
  - verticale (promotion) ou horizontale (même niveau).
- La gestion des **parcours professionnels** organise ces évolutions : entretiens, bourse à l'emploi interne, passerelles entre métiers.

### Une garantie ? Les limites
- Les dispositifs existent, mais ils profitent surtout aux salariés **déjà qualifiés**, aux **cadres** et aux **grandes entreprises**. Les moins qualifiés et les salariés des petites entreprises se forment moins.
- L'employeur forme d'abord pour **ses** besoins, pas toujours pour l'avenir du salarié hors de l'entreprise.
- Le salarié doit être informé et motivé : beaucoup ne connaissent pas leurs droits.
- La formation **augmente** l'employabilité mais ne la **garantit** pas : elle dépend aussi du marché du travail et de la situation économique.

### À retenir pour le bac
- Citer les dispositifs avec leur **initiative** : employeur (plan de développement des compétences) ou salarié (CPF, PTP, VAE, bilan de compétences).
- Conclure : la gestion des compétences **favorise** l'employabilité sans la **garantir**.`,
      cartes: [
        { q: "Qu'est-ce que l'employabilité ?", r: "La capacité d'une personne à garder son emploi ou à en retrouver un, grâce à ses compétences, sa formation et son expérience." },
        { q: "Quelle obligation de formation pèse sur l'employeur ?", r: "Adapter les salariés à leur poste et maintenir leur capacité à occuper un emploi (article L6321-1 du Code du travail)." },
        { q: "Qu'est-ce que le plan de développement des compétences ?", r: "L'ensemble des formations décidées par l'employeur, obligatoires ou de développement. Il a remplacé le plan de formation en 2018." },
        { q: "Comment le CPF est-il alimenté ?", r: "En euros : 500 euros par an, dans la limite de 5 000 euros (800 et 8 000 euros pour les moins qualifiés)." },
        { q: "Que peut-on financer avec son CPF ?", r: "Une formation certifiante : diplôme, titre, certification, permis de conduire, bilan de compétences, VAE." },
        { q: "Le salarié perd-il son CPF s'il change d'employeur ?", r: "Non, le compte lui appartient et le suit tout au long de sa vie professionnelle." },
        { q: "Qu'est-ce que le cofinancement d'une formation ?", r: "L'employeur abonde le CPF du salarié : la formation est financée à la fois par l'entreprise et par l'individu." },
        { q: "Qu'est-ce que le projet de transition professionnelle ?", r: "Une formation longue pour changer de métier, avec maintien de la rémunération, financée par Transitions Pro." },
        { q: "Qu'est-ce que la VAE ?", r: "La validation des acquis de l'expérience : obtenir tout ou partie d'un diplôme grâce à son expérience." },
        { q: "Avantages et limites de l'e-learning ?", r: "Souple et peu coûteux, mais il isole, provoque des abandons et demande beaucoup d'autonomie." },
        { q: "Qu'est-ce qu'un talent pour l'organisation ?", r: "Un salarié dont les compétences sont rares ou stratégiques, à repérer, développer et retenir." },
        { q: "Quelles sont les formes de mobilité professionnelle ?", r: "Interne ou externe, fonctionnelle ou géographique, verticale (promotion) ou horizontale." },
        { q: "Pourquoi la formation ne garantit-elle pas l'employabilité ?", r: "Elle profite surtout aux plus qualifiés, répond d'abord aux besoins de l'employeur et dépend du marché du travail." },
        { q: "Qu'est-ce qu'une organisation apprenante ?", r: "Une organisation où l'on apprend en continu : tutorat, partage de connaissances, formation en situation de travail." },
      ],
      quiz: [
        { q: "Combien d'euros par an un salarié à temps plein acquiert-il en principe sur son CPF ?", choix: ["150 €", "500 €", "400 €", "300 €"], bonne: 1, expl: "500 euros par an, dans la limite de 5 000 euros. 800 euros concerne les salariés les moins qualifiés.", niv: 1 },
        { q: "Quel dispositif permet d'obtenir un diplôme grâce à son expérience ?", choix: ["La VAE", "Le CPF", "L'entretien professionnel", "Le PTP"], bonne: 0, expl: "La validation des acquis de l'expérience reconnaît l'expérience par un diplôme.", niv: 1 },
        { q: "Quel document regroupe les formations décidées par l'employeur ?", choix: ["Le plan de développement des compétences", "Le bilan social", "Le règlement intérieur", "Le compte personnel de formation de chaque salarié"], bonne: 0, expl: "Le plan de développement des compétences relève de l'employeur. Le CPF relève du salarié.", niv: 1 },
        { q: "Un comptable devient responsable de la paie dans la même entreprise. C'est une mobilité :", choix: ["externe et géographique", "externe et fonctionnelle", "interne et fonctionnelle", "interne et géographique"], bonne: 2, expl: "Il reste dans l'entreprise (interne) et change de fonction (fonctionnelle).", niv: 1 },
        { q: "Une aide-soignante veut devenir infirmière grâce à une formation longue rémunérée. Elle peut demander :", choix: ["un projet de transition professionnelle", "un entretien annuel", "un bilan de compétences", "une rupture conventionnelle avec indemnité"], bonne: 0, expl: "Le PTP finance une formation longue pour changer de métier, avec maintien de la rémunération.", niv: 2 },
        { q: "Pourquoi le CPF renforce-t-il l'employabilité du salarié ?", choix: ["Il remplace le salaire pendant les périodes de chômage", "Il est géré par l'employeur", "Il ne sert qu'aux formations obligatoires", "Il appartient au salarié, même s'il change d'emploi"], bonne: 3, expl: "Le compte est attaché à la personne : il permet de se former même après un départ ou un licenciement.", niv: 2 },
        { q: "Une entreprise propose des modules de formation en ligne accessibles à toute heure. Quelle limite faut-il anticiper ?", choix: ["Un coût plus élevé qu'en salle", "L'interdiction par la loi", "L'isolement et les abandons", "L'impossibilité de former beaucoup de salariés"], bonne: 2, expl: "L'e-learning est souple et peu coûteux, mais sans accompagnement beaucoup d'apprenants décrochent.", niv: 2 },
        { q: "Un employeur abonde le CPF d'un salarié pour qu'il passe une certification utile à l'entreprise. C'est :", choix: ["une VAE", "un congé de transition professionnelle payé", "une mobilité externe", "un cofinancement entreprise et individu"], bonne: 3, expl: "L'abondement de l'employeur complète les droits du salarié : la formation est cofinancée.", niv: 2 },
        { q: "Quelle formation ne peut **pas** être financée par le CPF ?", choix: ["Un permis de conduire", "Un bilan de compétences", "Un stage de loisir sans certification", "Une VAE"], bonne: 2, expl: "Le CPF finance des formations certifiantes ou des dispositifs listés par la loi, pas des loisirs.", niv: 2 },
        { q: "Pourquoi l'organisation a-t-elle un intérêt stratégique à gérer ses talents ?", choix: ["Parce que la loi l'y oblige dès 11 salariés", "Pour garder des compétences rares", "Pour éviter tout recrutement externe", "Pour supprimer l'entretien professionnel"], bonne: 1, expl: "Les compétences rares sont un avantage concurrentiel : les perdre affaiblit l'organisation.", niv: 3 },
        { q: "Quelle limite des dispositifs de formation est la plus souvent relevée ?", choix: ["Ils sont réservés aux chômeurs", "Ils interdisent la mobilité", "Ils sont payants pour le salarié, sans aide possible", "Ils profitent surtout aux salariés déjà qualifiés"], bonne: 3, expl: "Cadres et salariés des grandes entreprises se forment beaucoup plus que les moins qualifiés : les inégalités se creusent.", niv: 3 },
        { q: "La gestion des compétences garantit-elle l'employabilité ?", choix: ["Oui, toute formation mène à un emploi", "Elle la favorise sans la garantir", "Oui, car l'employeur doit reclasser ses salariés", "Non, elle n'a aucun effet"], bonne: 1, expl: "Formation et mobilité augmentent les chances de garder ou retrouver un emploi, mais le marché du travail et l'implication du salarié comptent aussi.", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-rhc-4',
      fiche: `## Le mieux vivre au travail est-il compatible avec la performance ?

### La responsabilité sociétale de l'entreprise
- La **responsabilité sociétale de l'entreprise (RSE)** est la prise en compte volontaire, par l'organisation, des enjeux **sociaux**, **environnementaux** et **économiques** dans ses activités et ses relations avec ses parties prenantes. La norme internationale **ISO 26000** (2010) en donne les lignes directrices.
- Le volet **social** de la RSE concerne d'abord les salariés : conditions de travail, santé, formation, égalité, dialogue.
- La **performance sociale** mesure la façon dont l'organisation satisfait ses salariés : climat social, absentéisme, turnover, accidents, formation.

### La qualité de vie au travail
- La **qualité de vie et des conditions de travail (QVCT)**, appelée avant **QVT**, désigne le sentiment de bien-être au travail : contenu du travail, relations, autonomie, reconnaissance, environnement, conciliation entre vie professionnelle et vie personnelle. L'accord national interprofessionnel du **9 décembre 2020** l'a fait passer de QVT à QVCT.
- Elle dépasse les **obligations légales** : l'organisation peut faire plus que ce qu'impose la loi (salle de repos, horaires souples, crèche, activités sportives, télétravail).

### Les conditions de travail
- **L'environnement de travail** : bruit, éclairage, température, propreté, aménagement des espaces (bureaux partagés, espaces de détente).
- **L'ergonomie** : adapter le **poste** de travail à la personne (et non l'inverse) : siège réglable, écran à hauteur des yeux, outils légers, alternance des tâches. Des mesures simples réduisent la fatigue et les douleurs.
- **La durée du travail** :
  - durée légale : **35 heures par semaine** (au-delà, des **heures supplémentaires** majorées) ;
  - maximum : **10 heures par jour** et **48 heures** sur une semaine (**44 heures** en moyenne sur 12 semaines) ;
  - repos : **11 heures** consécutives par jour et **24 heures** par semaine en plus ;
  - **droit à la déconnexion** (depuis 2017) : ne pas répondre aux messages professionnels hors du temps de travail.
- **L'organisation du travail** : horaires variables, **télétravail**, autonomie dans les tâches.

### Les liens avec la motivation
- La **motivation** est l'ensemble des forces qui poussent une personne à agir et à faire des efforts.
- **Abraham Maslow** classe les besoins en pyramide : physiologiques, sécurité, appartenance, estime, accomplissement. Les conditions de travail répondent aux premiers niveaux ; la reconnaissance et l'autonomie aux suivants.
- **Frederick Herzberg** distingue :
  - les **facteurs d'hygiène** (conditions de travail, salaire, sécurité) : s'ils sont mauvais, ils créent de l'**insatisfaction**, mais s'ils sont bons, ils ne suffisent pas à motiver ;
  - les **facteurs moteurs** (intérêt du travail, responsabilité, reconnaissance, progression) : ce sont eux qui **motivent**.

### Bien-être et performance
- Arguments pour la compatibilité :
  - des salariés bien dans leur travail sont plus **motivés**, plus **impliqués** et plus **productifs** ;
  - moins d'**absentéisme**, de **turnover** et d'accidents : ce sont des **coûts cachés** en moins ;
  - une meilleure **marque employeur** attire les candidats et fidélise les talents ;
  - l'image de l'organisation auprès des clients et des investisseurs s'améliore.
- Limites :
  - les actions ont un **coût** immédiat, alors que les gains sont lents et difficiles à mesurer ;
  - le risque d'une communication de façade (« bonheur au travail » affiché sans changement réel) ;
  - la pression sur les résultats peut contredire le discours sur le bien-être ;
  - le télétravail peut isoler et brouiller la frontière avec la vie personnelle.

### À retenir pour le bac
- Définir RSE, QVCT, ergonomie, motivation.
- Utiliser Herzberg : les conditions de travail évitent l'insatisfaction, mais la motivation vient aussi du contenu du travail et de la reconnaissance.
- Conclure : bien-être et performance sont **compatibles** si les actions sont réelles, suivies par des indicateurs et pensées sur le long terme.`,
      cartes: [
        { q: "Qu'est-ce que la RSE ?", r: "La prise en compte volontaire des enjeux sociaux, environnementaux et économiques par l'organisation, dans ses activités et avec ses parties prenantes." },
        { q: "Quelle norme donne les lignes directrices de la RSE ?", r: "La norme ISO 26000 (2010)." },
        { q: "Qu'est-ce que la performance sociale ?", r: "La capacité de l'organisation à satisfaire ses salariés, mesurée par le climat social, l'absentéisme, le turnover, les accidents, la formation." },
        { q: "Qu'est-ce que la QVCT ?", r: "La qualité de vie et des conditions de travail : contenu du travail, relations, autonomie, reconnaissance, environnement, équilibre des temps de vie." },
        { q: "Qu'est-ce que l'ergonomie ?", r: "L'adaptation du poste et des conditions de travail à la personne, pour réduire la fatigue et les risques." },
        { q: "Quelle est la durée légale du travail ?", r: "35 heures par semaine. Au-delà, ce sont des heures supplémentaires majorées." },
        { q: "Quelles sont les durées maximales de travail ?", r: "10 heures par jour, 48 heures sur une semaine et 44 heures en moyenne sur 12 semaines." },
        { q: "Quels repos minimum la loi impose-t-elle ?", r: "11 heures consécutives par jour et 24 heures par semaine en plus de ces 11 heures." },
        { q: "Qu'est-ce que le droit à la déconnexion ?", r: "Le droit de ne pas répondre aux messages professionnels en dehors du temps de travail (depuis 2017)." },
        { q: "Qu'est-ce que la motivation ?", r: "L'ensemble des forces qui poussent une personne à agir et à fournir des efforts." },
        { q: "Quels sont les besoins de la pyramide de Maslow ?", r: "Physiologiques, sécurité, appartenance, estime et accomplissement." },
        { q: "Que distingue Herzberg ?", r: "Les facteurs d'hygiène, qui évitent l'insatisfaction, et les facteurs moteurs (intérêt, reconnaissance, responsabilité), qui motivent." },
        { q: "Pourquoi le bien-être peut-il améliorer la performance ?", r: "Plus de motivation et de productivité, moins d'absentéisme et de turnover, une meilleure marque employeur." },
        { q: "Quelles sont les limites des actions de bien-être ?", r: "Un coût immédiat, des gains lents et difficiles à mesurer, un risque de communication de façade." },
      ],
      quiz: [
        { q: "Quelle est la durée légale hebdomadaire du travail en France ?", choix: ["32 heures", "39 heures", "35 heures", "48 heures"], bonne: 2, expl: "35 heures. 48 heures est la durée maximale sur une semaine.", niv: 1 },
        { q: "Quelle norme internationale donne les lignes directrices de la RSE ?", choix: ["ISO 26000", "ISO 14001", "ISO 9001", "ISO 45001"], bonne: 0, expl: "ISO 26000. La 9001 porte sur la qualité, la 14001 sur l'environnement, la 45001 sur la santé et sécurité.", niv: 1 },
        { q: "Combien d'heures de repos consécutives par jour la loi impose-t-elle au minimum ?", choix: ["9 heures", "8 heures", "10 heures", "11 heures"], bonne: 3, expl: "11 heures consécutives de repos quotidien, sauf exceptions prévues par accord.", niv: 1 },
        { q: "Selon Herzberg, le salaire et les conditions de travail sont des facteurs :", choix: ["moteurs", "d'hygiène", "d'accomplissement", "d'estime"], bonne: 1, expl: "S'ils sont mauvais, ils créent de l'insatisfaction ; bons, ils ne suffisent pas à motiver.", niv: 1 },
        { q: "Une entreprise installe des sièges réglables et des écrans à hauteur des yeux. Elle agit sur :", choix: ["la durée du travail", "le dialogue social", "la rémunération", "l'ergonomie"], bonne: 3, expl: "Adapter le poste à la personne relève de l'ergonomie.", niv: 2 },
        { q: "Un salarié reçoit des courriels de son chef à 23 heures et se sent obligé d'y répondre. Quel droit est en jeu ?", choix: ["Le droit à la déconnexion", "Le droit de retrait", "Le droit d'alerte", "Le droit de grève"], bonne: 0, expl: "Le droit à la déconnexion protège le temps de repos et la vie personnelle.", niv: 2 },
        { q: "Selon Herzberg, quel facteur motive vraiment un salarié ?", choix: ["Une salle de pause entièrement rénovée et climatisée", "Une hausse du chauffage", "Des responsabilités nouvelles et reconnues", "Un parking gratuit"], bonne: 2, expl: "Les facteurs moteurs touchent au contenu du travail : responsabilité, reconnaissance, progression.", niv: 2 },
        { q: "Après la création d'horaires souples, l'absentéisme d'un service baisse de 6 % à 3 %. Cela montre :", choix: ["une baisse de la qualité de vie au travail", "un effet sur la performance sociale", "plus de départs de salariés", "une obligation légale nouvelle"], bonne: 1, expl: "Moins d'absences : la performance sociale progresse, et les coûts cachés diminuent.", niv: 2 },
        { q: "Quel élément ne relève **pas** de la qualité de vie et des conditions de travail ?", choix: ["L'autonomie dans les tâches", "La conciliation vie professionnelle et personnelle", "Le cours de l'action en Bourse", "Les relations entre collègues"], bonne: 2, expl: "Le cours de Bourse est un indicateur financier, sans lien direct avec le vécu du travail.", niv: 2 },
        { q: "Pourquoi le bien-être au travail peut-il réduire les coûts cachés ?", choix: ["Il supprime les cotisations sociales", "Il diminue l'absentéisme, le turnover et les accidents", "Il augmente la durée légale du travail", "Il dispense l'entreprise de la visite de médecine du travail"], bonne: 1, expl: "Absences, départs et accidents coûtent cher sans apparaître comme une dépense : les réduire améliore la performance économique.", niv: 3 },
        { q: "Une entreprise affiche « le bonheur au travail » sur son site mais multiplie les objectifs intenables. Quel risque ?", choix: ["Une communication de façade, peu crédible", "Une baisse de la durée légale", "Une hausse automatique des salaires", "Une obligation de créer un CSE dès le premier salarié"], bonne: 0, expl: "Le décalage entre discours et réalité déçoit les salariés et nuit à la marque employeur.", niv: 3 },
        { q: "Quelle conclusion est la plus juste sur bien-être et performance ?", choix: ["Ils sont incompatibles, car le bien-être coûte trop cher aux entreprises", "Seule la loi peut améliorer la performance", "Le bien-être est inutile si le salaire est élevé", "Ils sont compatibles si les actions sont réelles et durables"], bonne: 3, expl: "Les gains (motivation, image, coûts cachés) existent, mais ils supposent des actions sincères, mesurées et durables.", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-rhc-5',
      fiche: `## Santé et sécurité au travail : contrainte ou atout ?

### Une obligation de l'employeur
- L'employeur doit prendre les mesures nécessaires pour assurer la **sécurité** et protéger la **santé physique et mentale** des travailleurs (article **L4121-1** du Code du travail).
- Il agit par des actions de **prévention**, d'**information** et de **formation**, et par une organisation et des moyens adaptés.
- Les **principes généraux de prévention** (article L4121-2) : éviter les risques, évaluer ceux qui ne peuvent être évités, combattre les risques à la source, adapter le travail à l'homme, tenir compte de l'évolution de la technique, remplacer ce qui est dangereux, planifier la prévention, privilégier la protection collective sur l'individuelle, donner des instructions.
- Le **document unique d'évaluation des risques professionnels (DUERP)** recense les risques de chaque unité de travail et les actions prévues. Il est obligatoire dès le **premier salarié** et mis à jour au moins **chaque année** dans les entreprises d'au moins 11 salariés.
- Acteurs : l'employeur, le **service de prévention et de santé au travail** (médecin du travail), le **CSE**, l'inspection du travail.
- Si l'employeur connaissait le danger et n'a rien fait, sa **faute inexcusable** peut être reconnue : la victime obtient une meilleure indemnisation.

### Accidents du travail et maladies professionnelles
- **Accident du travail** : un accident survenu par le fait ou à l'occasion du travail, quelle qu'en soit la cause. L'**accident de trajet** (entre le domicile et le travail) est pris en charge de façon proche.
- **Maladie professionnelle** : une maladie due à l'exposition à un risque au travail. Elle est reconnue si elle figure dans un **tableau** officiel (ou après avis d'un comité d'experts).
- Le salarié prévient l'employeur, qui **déclare l'accident** à la caisse primaire d'assurance maladie dans les **48 heures**.
- La branche **accidents du travail et maladies professionnelles (AT-MP)** de la Sécurité sociale prend en charge les soins et verse des indemnités. Elle est financée par les **cotisations des employeurs**, plus élevées quand l'entreprise a beaucoup d'accidents : la prévention est donc aussi une économie.

### Les risques d'aujourd'hui
- Les **troubles musculo-squelettiques (TMS)** : douleurs des articulations, du dos, des poignets, dues à des gestes répétitifs ou à de mauvaises postures. Ce sont de loin les maladies professionnelles les plus reconnues en France.
- Les **risques psychosociaux (RPS)** : stress, épuisement professionnel (burn-out), violences, causés par la surcharge, le manque d'autonomie ou de reconnaissance, les conflits.
- La **souffrance au travail** : un mal-être durable lié au travail.
- Le **harcèlement** :
  - **moral** : des agissements répétés qui dégradent les conditions de travail et peuvent porter atteinte aux droits, à la santé ou à l'avenir professionnel du salarié ;
  - **sexuel** : des propos ou comportements à connotation sexuelle répétés, ou une pression grave même unique ;
  - l'employeur doit le **prévenir** et le **sanctionner** ; c'est aussi un délit pénal.

### Les indicateurs sociaux
- **Taux d'absentéisme** = heures d'absence ÷ heures de travail théoriques × 100.
- **Taux de rotation** du personnel = ((entrées + sorties) ÷ 2) ÷ effectif moyen × 100.
- **Taux de fréquence** des accidents = nombre d'accidents avec arrêt × 1 000 000 ÷ heures travaillées.
- **Taux de gravité** = jours d'arrêt × 1 000 ÷ heures travaillées.
- Il faut lire leur **évolution** et les comparer au secteur ; un tableur permet de les suivre.

### La protection sociale
- Le **régime général** de la Sécurité sociale comprend cinq branches : **maladie**, **AT-MP**, **famille**, **retraite** (vieillesse) et **autonomie** (depuis 2021).
- La **complémentaire santé** d'entreprise est **obligatoire** pour tous les salariés du privé depuis le **1er janvier 2016** ; l'employeur en finance au moins **50 %**. Elle rembourse ce que la Sécurité sociale ne prend pas en charge.
- Une bonne mutuelle, une **prévoyance** (décès, invalidité) ou une retraite supplémentaire sont des avantages qui rendent l'organisation **attractive**.

### Contrainte ou atout ?
- **Contraintes** : coût des équipements, des formations, du temps consacré à la prévention ; démarches administratives.
- **Atouts** : moins d'accidents et d'arrêts, donc moins de **coûts cachés** (remplacements, retards, non-qualité) ; des cotisations AT-MP plus faibles ; un meilleur climat social ; une marque employeur renforcée ; moins de contentieux.

### À retenir pour le bac
- Savoir **calculer** et **interpréter** un taux d'absentéisme ou de fréquence.
- Répondre en deux temps : une obligation **contraignante**, qui devient un **atout** quand elle réduit les coûts cachés et attire les talents.`,
      cartes: [
        { q: "Quelle est l'obligation de l'employeur en matière de santé ?", r: "Prendre les mesures nécessaires pour assurer la sécurité et protéger la santé physique et mentale des salariés (article L4121-1)." },
        { q: "Qu'est-ce que le DUERP ?", r: "Le document unique d'évaluation des risques professionnels : il recense les risques de chaque unité de travail et les actions de prévention." },
        { q: "Qu'est-ce qu'un accident du travail ?", r: "Un accident survenu par le fait ou à l'occasion du travail, quelle qu'en soit la cause." },
        { q: "Quand une maladie est-elle reconnue professionnelle ?", r: "Quand elle figure dans un tableau officiel de maladies professionnelles, ou après avis d'un comité d'experts." },
        { q: "Dans quel délai l'employeur déclare-t-il un accident du travail ?", r: "Dans les 48 heures, à la caisse primaire d'assurance maladie." },
        { q: "Qui finance la branche AT-MP ?", r: "Les cotisations des employeurs, plus élevées quand l'entreprise a beaucoup d'accidents." },
        { q: "Qu'est-ce qu'un TMS ?", r: "Un trouble musculo-squelettique : douleur des articulations, du dos ou des poignets due aux gestes répétitifs ou aux mauvaises postures." },
        { q: "Qu'est-ce que les risques psychosociaux ?", r: "Le stress, l'épuisement professionnel, les violences, causés par la surcharge, le manque d'autonomie ou de reconnaissance." },
        { q: "Qu'est-ce que le harcèlement moral ?", r: "Des agissements répétés qui dégradent les conditions de travail et peuvent atteindre les droits, la santé ou l'avenir du salarié." },
        { q: "Comment calcule-t-on le taux d'absentéisme ?", r: "Heures d'absence ÷ heures de travail théoriques × 100." },
        { q: "Comment calcule-t-on le taux de fréquence des accidents ?", r: "Nombre d'accidents avec arrêt × 1 000 000 ÷ heures travaillées." },
        { q: "Quelles sont les branches du régime général de la Sécurité sociale ?", r: "Maladie, accidents du travail et maladies professionnelles, famille, retraite et autonomie." },
        { q: "Que prévoit la loi sur la complémentaire santé d'entreprise ?", r: "Depuis 2016, elle est obligatoire pour les salariés du privé et l'employeur en finance au moins 50 %." },
        { q: "Pourquoi la prévention est-elle un atout ?", r: "Moins d'accidents et d'absences, donc moins de coûts cachés, des cotisations plus faibles et une meilleure image." },
        { q: "Qu'est-ce que la faute inexcusable de l'employeur ?", r: "Il connaissait ou aurait dû connaître le danger et n'a pas pris les mesures nécessaires : la victime est mieux indemnisée." },
      ],
      quiz: [
        { q: "Dans quel délai l'employeur doit-il déclarer un accident du travail ?", choix: ["24 heures", "48 heures", "8 jours", "15 jours"], bonne: 1, expl: "48 heures, auprès de la caisse primaire d'assurance maladie.", niv: 1 },
        { q: "Quel document recense les risques professionnels de l'entreprise ?", choix: ["Le règlement intérieur", "Le bilan social", "Le registre du personnel", "Le DUERP"], bonne: 3, expl: "Le document unique d'évaluation des risques professionnels, obligatoire dès le premier salarié.", niv: 1 },
        { q: "Quelles sont les maladies professionnelles les plus reconnues en France ?", choix: ["Les troubles musculo-squelettiques", "Les surdités", "Les cancers de l'amiante", "Les allergies"], bonne: 0, expl: "Les TMS représentent la très grande majorité des maladies professionnelles reconnues.", niv: 1 },
        { q: "Quelle part minimale de la complémentaire santé l'employeur doit-il financer ?", choix: ["25 %", "30 %", "40 %", "50 %"], bonne: 3, expl: "Au moins 50 %, obligation en vigueur depuis le 1er janvier 2016.", niv: 1 },
        { q: "Un salarié se tord la cheville dans l'escalier de l'entreprise pendant sa pause. C'est :", choix: ["un accident de trajet", "une maladie professionnelle", "un accident du travail", "un risque psychosocial"], bonne: 2, expl: "L'accident survient sur le lieu et pendant le temps de travail, à l'occasion du travail.", niv: 2 },
        { q: "Un service compte 300 heures d'absence pour 10 000 heures théoriques. Son taux d'absentéisme est :", choix: ["3 %", "30 %", "3,33 %", "0,3 %"], bonne: 0, expl: "300 ÷ 10 000 × 100 = 3 %.", niv: 2 },
        { q: "Une caissière souffre du poignet à force de scanner des articles. Quelle action de prévention est la plus adaptée ?", choix: ["Supprimer sa complémentaire santé", "Lui verser une prime", "Allonger ses horaires", "Revoir l'ergonomie et alterner les tâches"], bonne: 3, expl: "Combattre le risque à la source et adapter le travail à la personne : ce sont des principes généraux de prévention.", niv: 2 },
        { q: "Un manager humilie publiquement un salarié chaque semaine depuis des mois. Il s'agit de :", choix: ["un conflit fonctionnel", "un pouvoir disciplinaire normal", "du harcèlement moral", "une simple maladresse de management"], bonne: 2, expl: "Des agissements répétés qui dégradent les conditions de travail et la santé : c'est du harcèlement moral, sanctionné aussi pénalement.", niv: 2 },
        { q: "Quelle branche n'appartient **pas** au régime général de la Sécurité sociale ?", choix: ["Maladie", "Assurance chômage", "Famille", "Autonomie"], bonne: 1, expl: "L'assurance chômage est gérée à part (Unédic, France Travail), pas par une branche du régime général.", niv: 2 },
        { q: "Une entreprise a 5 accidents avec arrêt pour 500 000 heures travaillées. Son taux de fréquence est :", choix: ["10", "1", "100", "5"], bonne: 0, expl: "5 × 1 000 000 ÷ 500 000 = 10 accidents par million d'heures travaillées.", niv: 3 },
        { q: "Pourquoi la prévention peut-elle faire baisser les charges de l'entreprise ?", choix: ["Elle supprime les cotisations retraite", "La prévention est financée par l'État", "Les cotisations AT-MP dépendent du nombre d'accidents", "Elle permet de ne plus payer les arrêts de travail des salariés"], bonne: 2, expl: "Moins d'accidents, c'est moins de cotisations AT-MP, moins d'absences et moins de remplacements.", niv: 3 },
        { q: "Un employeur savait qu'une machine était dangereuse et n'a rien fait. Un salarié est blessé. Que peut obtenir la victime ?", choix: ["Rien de plus que l'indemnisation habituelle de la Sécurité sociale", "Une meilleure indemnisation pour faute inexcusable", "Une rupture conventionnelle", "Une VAE"], bonne: 1, expl: "La faute inexcusable de l'employeur majore l'indemnisation de la victime.", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-rhc-6',
      fiche: `## La rémunération individuelle suffit-elle à reconnaître le salarié ?

### Les éléments de la rémunération
- La **rémunération** est la première **contrepartie** du travail. Elle est encadrée par la loi (SMIC, égalité), les conventions collectives (salaires minimums de branche) et le contrat de travail.
- Elle comprend :
  - le **salaire de base** (fixe) ;
  - des **éléments variables** : primes, commissions, heures supplémentaires, bonus ;
  - des **avantages en nature** : voiture de fonction, logement, repas, téléphone ;
  - des **avantages sociaux** : complémentaire santé, titres-restaurant, chèques-vacances.
- **Salaire brut** = salaire avant cotisations. **Salaire net** = ce que reçoit le salarié après cotisations sociales salariales. Le **coût du travail** pour l'employeur inclut en plus les cotisations patronales.
- **Égalité** : à travail de valeur égale, salaire égal entre les femmes et les hommes. Les entreprises d'au moins **50 salariés** publient chaque année un **index de l'égalité professionnelle** noté sur 100 (des mesures correctrices sont obligatoires sous 75 points).

### L'individualisation de la rémunération
- Elle consiste à faire varier la rémunération selon la **performance** ou les **compétences** de chacun : augmentations individuelles, primes sur objectifs, bonus, commissions sur ventes.
- Avantages : **reconnaître** les efforts et le **mérite**, **motiver**, attirer et retenir les meilleurs.
- Limites :
  - la performance individuelle est **difficile à mesurer** (travail d'équipe, facteurs extérieurs) ;
  - un sentiment d'**injustice** peut apparaître : selon **John Stacy Adams** (théorie de l'**équité**), chacun compare ce qu'il apporte et ce qu'il reçoit avec ses collègues ;
  - elle peut développer l'**individualisme** et la concurrence au détriment de la coopération ;
  - selon **Victor Vroom** (théorie des **attentes**), une prime ne motive que si le salarié pense pouvoir atteindre l'objectif et si la récompense a de la valeur pour lui.

### Les formes de rémunération collective
- L'**intéressement** :
  - **facultatif**, mis en place par un **accord** ;
  - il associe les salariés aux **résultats** ou aux **performances** de l'entreprise (objectifs de productivité, de qualité, de sécurité) ;
  - les sommes sont exonérées de cotisations sociales (hors CSG et CRDS).
- La **participation** :
  - **obligatoire** dans les entreprises d'au moins **50 salariés** (facultative en dessous) ;
  - elle redistribue aux salariés une part des **bénéfices** selon une formule légale ;
  - les sommes sont en principe **bloquées cinq ans**, sauf cas de déblocage anticipé (mariage, achat de la résidence principale…).
- L'**épargne salariale** :
  - le **plan d'épargne entreprise (PEE)** et le plan d'épargne retraite collectif reçoivent l'intéressement, la participation et les versements volontaires ;
  - l'employeur peut ajouter un **abondement** (un complément).
- Le **partage de la valeur** : depuis 2025, les entreprises de **11 à 49 salariés** qui font des bénéfices réguliers doivent mettre en place un dispositif de partage (loi du 29 novembre 2023). La **prime de partage de la valeur** peut aussi être versée.
- Avantages : renforcer le sentiment d'appartenance et la **cohésion**, motiver autour d'objectifs communs, rendre la masse salariale plus souple. Limites : le lien entre l'effort de chacun et la prime est **lointain** ; les montants dépendent de résultats incertains. L'organisation doit **communiquer** pour faire comprendre ces dispositifs.

### Au-delà de l'argent : la reconnaissance
- La **reconnaissance** au travail ne passe pas seulement par le salaire : remerciements, **feedback**, autonomie, responsabilités, formation, possibilités d'évolution, participation aux décisions.
- Selon Herzberg, le salaire est surtout un **facteur d'hygiène** : insuffisant, il crée de l'insatisfaction ; élevé, il ne suffit pas à motiver durablement.
- La **rémunération globale** additionne salaire, avantages, épargne salariale, protection sociale : elle doit être **expliquée** aux salariés (bilan social individuel).

### À retenir pour le bac
- Distinguer **intéressement** (facultatif, performances) et **participation** (obligatoire dès 50 salariés, bénéfices).
- Réponse nuancée : la rémunération individuelle **reconnaît** le mérite, mais elle ne **suffit** pas : il faut l'équité, des formes collectives et une reconnaissance non financière.`,
      cartes: [
        { q: "Quels sont les éléments de la rémunération ?", r: "Le salaire de base, les éléments variables (primes, commissions, heures supplémentaires), les avantages en nature et les avantages sociaux." },
        { q: "Quelle différence entre salaire brut et salaire net ?", r: "Le brut est avant cotisations. Le net est ce que reçoit le salarié après les cotisations sociales salariales." },
        { q: "Qu'est-ce qu'un avantage en nature ?", r: "Un bien ou service fourni par l'employeur en plus du salaire : voiture de fonction, logement, repas." },
        { q: "Qu'est-ce que l'index de l'égalité professionnelle ?", r: "Une note sur 100 publiée chaque année par les entreprises d'au moins 50 salariés ; sous 75 points, des mesures correctrices sont obligatoires." },
        { q: "Qu'est-ce que l'individualisation de la rémunération ?", r: "Faire varier la rémunération selon la performance ou les compétences de chacun : augmentations individuelles, primes sur objectifs." },
        { q: "Que dit la théorie de l'équité d'Adams ?", r: "Chacun compare ce qu'il apporte et ce qu'il reçoit avec les autres ; un déséquilibre crée un sentiment d'injustice." },
        { q: "Que dit la théorie des attentes de Vroom ?", r: "Une récompense motive si le salarié pense pouvoir atteindre l'objectif et si la récompense a de la valeur pour lui." },
        { q: "Qu'est-ce que l'intéressement ?", r: "Un dispositif facultatif, mis en place par accord, qui associe les salariés aux résultats ou aux performances de l'entreprise." },
        { q: "Qu'est-ce que la participation ?", r: "La redistribution d'une part des bénéfices aux salariés, obligatoire dans les entreprises d'au moins 50 salariés." },
        { q: "Combien de temps les sommes de participation sont-elles bloquées ?", r: "En principe cinq ans, sauf cas de déblocage anticipé (mariage, achat de la résidence principale…)." },
        { q: "Qu'est-ce que l'abondement ?", r: "Le complément versé par l'employeur sur le plan d'épargne salariale du salarié." },
        { q: "Pourquoi la rémunération collective renforce-t-elle la cohésion ?", r: "Elle associe tous les salariés aux résultats communs et crée un sentiment d'appartenance." },
        { q: "Pourquoi le salaire ne suffit-il pas à motiver ?", r: "Selon Herzberg, c'est un facteur d'hygiène : la reconnaissance, l'autonomie et les responsabilités motivent davantage." },
        { q: "Qu'est-ce que la rémunération globale ?", r: "L'ensemble des contreparties : salaire, avantages, épargne salariale, protection sociale." },
      ],
      quiz: [
        { q: "À partir de combien de salariés la participation est-elle obligatoire ?", choix: ["11", "20", "50", "300"], bonne: 2, expl: "50 salariés. En dessous, elle est facultative.", niv: 1 },
        { q: "L'intéressement est :", choix: ["obligatoire dès 11 salariés", "facultatif, mis en place par accord", "réservé aux cadres", "versé chaque mois par la Sécurité sociale"], bonne: 1, expl: "L'intéressement est facultatif et repose sur un accord ; il dépend des performances ou des résultats.", niv: 1 },
        { q: "Une voiture de fonction utilisable le week-end est :", choix: ["un avantage en nature", "une prime d'intéressement", "un salaire de base", "un élément d'épargne salariale"], bonne: 0, expl: "Un bien fourni par l'employeur pour un usage privé est un avantage en nature.", niv: 1 },
        { q: "Pendant combien de temps les sommes de la participation sont-elles en principe bloquées ?", choix: ["1 an", "5 ans", "2 ans", "3 ans"], bonne: 1, expl: "Cinq ans, sauf cas de déblocage anticipé prévus par la loi.", niv: 1 },
        { q: "Une vendeuse touche 3 % de chaque vente qu'elle réalise. C'est :", choix: ["une rémunération collective", "un avantage en nature", "de la participation", "une rémunération individualisée"], bonne: 3, expl: "La commission dépend de la performance individuelle de la vendeuse.", niv: 2 },
        { q: "Deux collègues font le même travail, mais l'un touche une prime bien plus forte sans raison claire. Selon Adams, l'autre ressent :", choix: ["une motivation accrue", "un besoin d'accomplissement", "de la satisfaction", "un sentiment d'injustice"], bonne: 3, expl: "La théorie de l'équité : la comparaison défavorable crée de l'injustice et démotive.", niv: 2 },
        { q: "Une entreprise fixe une prime pour un objectif que les vendeurs jugent impossible à atteindre. Selon Vroom :", choix: ["la prime ne motive pas", "la prime motive quand même", "la prime est illégale", "la prime devient collective"], bonne: 0, expl: "Si l'objectif semble inaccessible, l'espoir de récompense disparaît : pas de motivation.", niv: 2 },
        { q: "Quel élément ne fait **pas** partie de l'épargne salariale ?", choix: ["Le plan d'épargne entreprise", "Les heures supplémentaires", "L'abondement de l'employeur", "Le placement de l'intéressement"], bonne: 1, expl: "Les heures supplémentaires sont un élément du salaire, versées directement sur la paie.", niv: 2 },
        { q: "Une entreprise de 30 salariés fait des bénéfices réguliers. Que doit-elle faire depuis 2025 ?", choix: ["Verser un treizième mois à tous", "Créer la participation comme à 50 salariés", "Mettre en place un partage de la valeur", "Rien, elle a moins de 50 salariés"], bonne: 2, expl: "La loi du 29 novembre 2023 impose un dispositif de partage de la valeur aux entreprises de 11 à 49 salariés bénéficiaires.", niv: 3 },
        { q: "Pourquoi l'individualisation peut-elle nuire au travail d'équipe ?", choix: ["Elle réduit les salaires", "Elle supprime l'entretien professionnel", "Elle est interdite dans les PME", "Elle met les salariés en concurrence"], bonne: 3, expl: "Si seul le résultat personnel est récompensé, aider les autres ne rapporte rien.", niv: 3 },
        { q: "Pourquoi l'organisation doit-elle communiquer sur la rémunération globale ?", choix: ["Pour montrer tous les avantages, au-delà du salaire", "Parce que la loi oblige à afficher les salaires de chacun", "Pour supprimer les primes individuelles", "Pour remplacer l'entretien annuel"], bonne: 0, expl: "Épargne salariale, mutuelle, prévoyance sont souvent mal connues : les expliquer renforce la reconnaissance et l'attractivité.", niv: 3 },
        { q: "La rémunération individuelle suffit-elle à reconnaître le salarié ?", choix: ["Oui, l'argent est le seul levier de motivation", "Non, elle est inutile", "Non, il faut aussi l'équité et une reconnaissance non financière", "Oui, à condition qu'elle soit versée surtout en avantages en nature"], bonne: 2, expl: "Elle reconnaît le mérite, mais la motivation durable passe aussi par le sentiment de justice, les dispositifs collectifs et la reconnaissance du travail.", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-rhc-7',
      fiche: `## Les tensions professionnelles peuvent-elles renforcer la cohésion ?

### Relations professionnelles et climat social
- Les **relations professionnelles** sont l'ensemble des échanges entre les acteurs d'une organisation : direction, managers, salariés, représentants du personnel. Elles alternent **dialogue**, **ajustements**, **compromis** et **tensions**.
- Le **climat social** est l'état d'esprit collectif des salariés à un moment donné : confiance ou méfiance, satisfaction ou mécontentement.
- Indicateurs d'un climat dégradé : hausse de l'**absentéisme**, du **turnover**, des **conflits** et des journées de grève, baisse de la qualité, plaintes, résultats des enquêtes internes.
- La **cohésion** est l'unité d'un groupe : ses membres partagent des objectifs et des valeurs et ont envie de travailler ensemble.

### Les formes de conflits
- Le **conflit interpersonnel** oppose deux ou quelques personnes : désaccord sur le travail, incompatibilité de caractère, rivalité, malentendu.
- Le **conflit collectif** (ou social) oppose un groupe de salariés à la direction, souvent sur les salaires, l'emploi, les conditions ou l'organisation du travail.
- Ses manifestations :
  - la **grève** : cessation collective et concertée du travail pour des revendications professionnelles ;
  - le **débrayage** : un arrêt de travail court ;
  - la pétition, la manifestation, le refus des heures supplémentaires.

### Les causes des tensions
- Des **intérêts divergents** : la direction cherche la rentabilité, les salariés veulent de meilleurs salaires et conditions.
- Des changements mal expliqués : réorganisation, nouveaux outils, déménagement.
- Un manque de **reconnaissance**, d'**information** ou de **communication**.
- Le **numérique** : il facilite l'échange d'informations, mais crée aussi des tensions :
  - **surcharge informationnelle** (trop de messages) ;
  - **hyperconnexion** et sollicitations permanentes ;
  - malentendus dans les messages écrits, ton sec, conflits visibles par tous sur les messageries de groupe ;
  - contrôle accru du travail par les logiciels.

### Les conséquences
- Négatives : perte de **production** et de chiffre d'affaires, dégradation de l'**image**, démotivation, départs, stress, rupture de la confiance.
- Positives possibles : le conflit fait **remonter** des problèmes cachés, oblige à les traiter, permet des **innovations** et des règles plus justes. On parle de **conflit fonctionnel** (utile) quand il fait progresser l'organisation, et **dysfonctionnel** quand il la paralyse.

### Dépasser le conflit
- Le conflit doit être **géré** (arrêter ses manifestations immédiates) mais surtout **dépassé** : trouver une solution durable.
- Les modes de résolution :
  - la **négociation** : les parties cherchent elles-mêmes un accord ;
  - la **médiation** : un tiers neutre aide les parties à trouver leur propre solution ;
  - la **conciliation** : un tiers rapproche les points de vue et peut proposer une solution ;
  - l'**arbitrage** : un tiers tranche, et sa décision s'impose ;
  - pour un conflit **individuel** (par exemple un licenciement contesté), le **conseil de prud'hommes**.
- Les **attitudes** face au conflit : l'évitement, la compétition (gagner contre l'autre), l'accommodation (céder), le **compromis** (chacun cède un peu) et la **collaboration** (chercher ensemble une solution gagnant-gagnant).
- Le rôle du **manager** : écouter, faire circuler l'information, intervenir tôt avant que le conflit ne s'aggrave.

### Les tensions renforcent-elles la cohésion ?
- **Oui**, quand le conflit est **exprimé**, **écouté** et **dépassé** : la solution trouvée ensemble renforce la confiance et le sentiment d'appartenance. Un groupe qui a surmonté une crise est souvent plus soudé.
- **Non**, quand il est ignoré, mal géré ou qu'il s'enlise : il divise les équipes et dégrade durablement le climat social.

### À retenir pour le bac
- Distinguer conflit **interpersonnel** et **collectif**, et les modes de résolution (négociation, médiation, conciliation, arbitrage).
- Réponse nuancée : la tension n'est pas en soi positive ; c'est son **dépassement** qui peut renforcer la cohésion.`,
      cartes: [
        { q: "Que sont les relations professionnelles ?", r: "L'ensemble des échanges entre direction, managers, salariés et représentants : dialogue, ajustements, compromis et tensions." },
        { q: "Qu'est-ce que le climat social ?", r: "L'état d'esprit collectif des salariés à un moment donné : confiance ou méfiance, satisfaction ou mécontentement." },
        { q: "Quels indicateurs révèlent un climat social dégradé ?", r: "La hausse de l'absentéisme, du turnover, des conflits et des grèves, la baisse de la qualité." },
        { q: "Qu'est-ce que la cohésion ?", r: "L'unité d'un groupe dont les membres partagent des objectifs et des valeurs et veulent travailler ensemble." },
        { q: "Quelle différence entre conflit interpersonnel et conflit collectif ?", r: "L'interpersonnel oppose quelques personnes ; le collectif oppose un groupe de salariés à la direction." },
        { q: "Qu'est-ce qu'un débrayage ?", r: "Un arrêt de travail de courte durée, forme de grève." },
        { q: "Comment le numérique peut-il créer des tensions ?", r: "Surcharge de messages, hyperconnexion, malentendus à l'écrit, conflits visibles par tous, contrôle accru du travail." },
        { q: "Qu'est-ce qu'un conflit fonctionnel ?", r: "Un conflit qui fait progresser l'organisation en révélant des problèmes et en poussant à les résoudre." },
        { q: "Qu'est-ce que la médiation ?", r: "Un tiers neutre aide les parties à trouver elles-mêmes une solution." },
        { q: "Qu'est-ce que l'arbitrage ?", r: "Un tiers tranche le conflit et sa décision s'impose aux parties." },
        { q: "Quelle différence entre conciliation et médiation ?", r: "Le conciliateur rapproche les points de vue et peut proposer une solution ; le médiateur aide surtout les parties à la construire." },
        { q: "Quelles attitudes peut-on avoir face à un conflit ?", r: "L'évitement, la compétition, l'accommodation, le compromis et la collaboration." },
        { q: "Quand un conflit renforce-t-il la cohésion ?", r: "Quand il est exprimé, écouté et dépassé par une solution construite ensemble." },
        { q: "Qui juge un conflit individuel entre un salarié et son employeur ?", r: "Le conseil de prud'hommes." },
      ],
      quiz: [
        { q: "Un tiers neutre aide deux collègues en désaccord à trouver eux-mêmes une solution. C'est :", choix: ["une médiation", "un arbitrage", "une grève", "un jugement prud'homal"], bonne: 0, expl: "Le médiateur ne tranche pas : il aide les parties à construire leur solution.", niv: 1 },
        { q: "Quel mode de résolution impose sa décision aux parties ?", choix: ["La négociation", "La médiation", "La conciliation", "La procédure d'arbitrage"], bonne: 3, expl: "L'arbitre tranche, et sa décision s'impose.", niv: 1 },
        { q: "Un conflit entre l'ensemble des ouvriers et la direction sur les salaires est un conflit :", choix: ["interpersonnel", "collectif", "fonctionnel par nature", "individuel"], bonne: 1, expl: "Un groupe de salariés s'oppose à la direction sur une revendication commune.", niv: 1 },
        { q: "Quel indicateur signale le plus directement une dégradation du climat social ?", choix: ["La hausse du chiffre d'affaires", "La hausse de l'absentéisme", "La baisse du prix des matières premières", "L'ouverture d'un magasin"], bonne: 1, expl: "Absentéisme, turnover et conflits traduisent le mal-être collectif.", niv: 1 },
        { q: "Les salariés reçoivent plus de cent messages par jour et se sentent débordés. C'est :", choix: ["une surcharge informationnelle", "une médiation", "un débrayage", "un conflit collectif"], bonne: 0, expl: "Le numérique peut créer des tensions par l'excès d'information.", niv: 2 },
        { q: "Deux managers se disputent sans cesse sur la répartition des tâches. Le conflit est :", choix: ["collectif", "une grève", "interpersonnel", "un arbitrage"], bonne: 2, expl: "Il oppose deux personnes, sans revendication commune d'un groupe face à la direction.", niv: 2 },
        { q: "Chacune des deux parties accepte de céder une partie de ses demandes. Cette attitude est :", choix: ["l'évitement", "la compétition", "le compromis", "l'accommodation"], bonne: 2, expl: "Dans un compromis, chacun fait un pas ; dans la collaboration, on cherche une solution qui satisfait pleinement les deux.", niv: 2 },
        { q: "Un conflit révèle que le nouveau logiciel fait perdre du temps à tous. Il est réglé par un changement d'outil. Ce conflit a été :", choix: ["fonctionnel", "dysfonctionnel", "illégal", "interpersonnel"], bonne: 0, expl: "Il a fait remonter un vrai problème et permis d'améliorer l'organisation.", niv: 2 },
        { q: "Quel effet n'est **pas** une conséquence négative d'un conflit mal géré ?", choix: ["Une perte de production", "Une image dégradée", "La révélation d'un problème caché", "Des départs de salariés"], bonne: 2, expl: "Faire remonter un problème caché est l'effet positif possible d'un conflit.", niv: 2 },
        { q: "Pourquoi un manager doit-il intervenir tôt dans un conflit entre collègues ?", choix: ["La loi l'oblige à sanctionner les deux", "Pour déclencher une grève", "Pour éviter que le CSE soit informé", "Plus il dure, plus il s'aggrave et divise l'équipe"], bonne: 3, expl: "Un conflit ignoré s'enlise : écouter et agir vite limite les dégâts sur la cohésion.", niv: 3 },
        { q: "À quelle condition une tension professionnelle peut-elle renforcer la cohésion ?", choix: ["Si elle n'est jamais exprimée", "Si elle est dépassée ensemble", "Si la direction impose seule la solution", "Si elle dure le plus longtemps possible"], bonne: 1, expl: "C'est le dépassement du conflit, et non le conflit lui-même, qui peut souder le groupe.", niv: 3 },
        { q: "Quelle attitude cherche une solution gagnant-gagnant ?", choix: ["L'accommodation", "L'évitement", "La compétition", "La collaboration"], bonne: 3, expl: "La collaboration prend du temps mais satisfait les deux parties et renforce la confiance.", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-rhc-8',
      fiche: `## À quelles conditions le dialogue social renforce-t-il la cohésion ?

### Qu'est-ce que le dialogue social ?
- Le **dialogue social** regroupe tous les échanges entre les **représentants des employeurs** et les **représentants des salariés** sur les questions économiques et sociales.
- Trois formes, de la plus simple à la plus engageante :
  - l'**information** : la direction communique des données ;
  - la **consultation** : la direction demande un **avis** avant de décider ; l'avis ne l'oblige pas ;
  - la **négociation** : les parties cherchent un **accord** qui les engage.
- Il a lieu à plusieurs niveaux : national (interprofessionnel), branche, **entreprise**, établissement.

### Les acteurs dans l'entreprise
- L'**employeur** ou ses représentants (direction des ressources humaines).
- Le **comité social et économique (CSE)** :
  - élu par les salariés dans les entreprises d'au moins **11 salariés** ;
  - de 11 à 49 salariés : il présente les réclamations des salariés et veille à la santé et à la sécurité ;
  - dès **50 salariés** : il a la personnalité morale, il est **informé et consulté** sur la marche de l'entreprise (orientations stratégiques, situation économique, politique sociale), dispose d'un **budget de fonctionnement** et d'un budget pour les **activités sociales et culturelles** ;
  - il a remplacé en 2018 les délégués du personnel, le comité d'entreprise et le CHSCT (ordonnances de 2017).
- Les **syndicats** : un syndicat est **représentatif** dans l'entreprise s'il obtient au moins **10 %** des voix au premier tour des élections du CSE. Il peut alors désigner un **délégué syndical** (entreprises d'au moins 50 salariés), qui **négocie** les accords.
- Dans les petites entreprises sans délégué syndical, l'employeur peut négocier avec des élus du CSE ou consulter directement les salariés par **référendum**.

### La négociation collective
- Les **négociations obligatoires** dans les entreprises qui ont au moins un délégué syndical :
  - chaque année : la **rémunération**, le **temps de travail** et le **partage de la valeur ajoutée** ; l'**égalité professionnelle** entre les femmes et les hommes et la **qualité de vie et des conditions de travail** ;
  - tous les trois ans, dans les entreprises d'au moins 300 salariés : la **gestion des emplois et des parcours professionnels**.
- Un accord d'entreprise est **valable** s'il est signé par des syndicats représentant **plus de 50 %** des voix des syndicats représentatifs (accord majoritaire). Sinon, des syndicats ayant plus de 30 % peuvent demander un référendum auprès des salariés.
- L'organisation peut aller **au-delà** des obligations : négocier sur le télétravail, le droit à la déconnexion, la RSE.

### Les outils et indicateurs
- La **base de données économiques, sociales et environnementales (BDESE)** : obligatoire dès 50 salariés, elle rassemble les informations transmises au CSE (effectifs, investissements, rémunérations, égalité, environnement). Elle permet un dialogue fondé sur des **faits**.
- Le **bilan social** : un document chiffré sur l'emploi, les rémunérations, la santé et la sécurité, les conditions de travail, la formation, les relations professionnelles sur trois ans. Il est obligatoire dès **300 salariés** et intégré à la BDESE.
- Indicateurs utiles : effectifs, absentéisme, turnover, accidents, heures de formation, écarts de salaire, nombre d'accords signés, journées de grève.
- Le **système d'information RH (SIRH)** centralise les données du personnel (paie, temps, compétences, formation) : il produit les indicateurs plus vite et plus fiablement.
- L'**intranet** diffuse les accords, les comptes rendus du CSE et les informations à tous les salariés.
- Un **tableur** permet de calculer et de suivre l'évolution des indicateurs sociaux.

### Les conditions d'un dialogue social qui renforce la cohésion
- Des **acteurs représentatifs** et **légitimes**, élus ou désignés par les salariés.
- Une **information loyale**, complète et partagée à temps (BDESE).
- La **confiance** et le **respect des engagements** : les accords signés doivent être appliqués et suivis.
- Une vraie **écoute** : la consultation ne doit pas être une formalité.
- Une **communication** des résultats aux salariés, pour qu'ils voient ce que le dialogue apporte.
- Des moyens : temps de délégation, formation des élus, budget.
- Quand ces conditions manquent, le dialogue devient formel, les salariés s'en détournent et les conflits reprennent.

### À retenir pour le bac
- Distinguer **information**, **consultation** et **négociation**.
- Connaître les **seuils** : CSE dès 11 salariés, délégué syndical et BDESE dès 50, bilan social et négociation sur les parcours dès 300.`,
      cartes: [
        { q: "Qu'est-ce que le dialogue social ?", r: "L'ensemble des échanges entre représentants des employeurs et des salariés sur les questions économiques et sociales." },
        { q: "Quelles sont les trois formes du dialogue social ?", r: "L'information, la consultation (un avis qui n'oblige pas) et la négociation (un accord qui engage)." },
        { q: "À partir de combien de salariés un CSE est-il élu ?", r: "11 salariés." },
        { q: "Quel est le rôle du CSE dès 50 salariés ?", r: "Il est informé et consulté sur la marche de l'entreprise et gère un budget de fonctionnement et des activités sociales et culturelles." },
        { q: "Quelles instances le CSE a-t-il remplacées ?", r: "Les délégués du personnel, le comité d'entreprise et le CHSCT (ordonnances de 2017)." },
        { q: "Quand un syndicat est-il représentatif dans l'entreprise ?", r: "Quand il obtient au moins 10 % des voix au premier tour des élections du CSE." },
        { q: "Quel est le rôle du délégué syndical ?", r: "Il représente son syndicat et négocie les accords d'entreprise (entreprises d'au moins 50 salariés)." },
        { q: "Quelles négociations sont obligatoires chaque année ?", r: "Rémunération, temps de travail et partage de la valeur ajoutée ; égalité professionnelle et qualité de vie et des conditions de travail." },
        { q: "Quand un accord d'entreprise est-il valable ?", r: "S'il est signé par des syndicats représentant plus de 50 % des voix des syndicats représentatifs, ou approuvé par référendum." },
        { q: "Qu'est-ce que la BDESE ?", r: "La base de données économiques, sociales et environnementales, obligatoire dès 50 salariés, qui informe le CSE." },
        { q: "Qu'est-ce que le bilan social ?", r: "Un document chiffré sur l'emploi, les salaires, la santé, la formation et les relations sociales sur trois ans, obligatoire dès 300 salariés." },
        { q: "Qu'est-ce qu'un SIRH ?", r: "Un système d'information des ressources humaines qui centralise les données du personnel et produit les indicateurs." },
        { q: "Quelles conditions rendent le dialogue social efficace ?", r: "Des acteurs légitimes, une information loyale, la confiance, le respect des engagements, une vraie écoute et la communication des résultats." },
      ],
      quiz: [
        { q: "À partir de combien de salariés le CSE est-il élu ?", choix: ["20", "11", "50", "300"], bonne: 1, expl: "11 salariés. Ses attributions s'élargissent à partir de 50 salariés.", niv: 1 },
        { q: "Quel score faut-il au premier tour des élections du CSE pour qu'un syndicat soit représentatif dans l'entreprise ?", choix: ["5 %", "50 %", "30 %", "10 %"], bonne: 3, expl: "10 % des suffrages exprimés au premier tour.", niv: 1 },
        { q: "À partir de quel effectif le bilan social est-il obligatoire ?", choix: ["300 salariés", "50 salariés", "100 salariés", "11 salariés"], bonne: 0, expl: "300 salariés. Il est intégré à la BDESE.", niv: 1 },
        { q: "La direction demande l'avis du CSE avant un déménagement, puis décide librement. C'est :", choix: ["une information", "une négociation", "une consultation", "un arbitrage"], bonne: 2, expl: "La consultation recueille un avis qui ne lie pas l'employeur.", niv: 1 },
        { q: "La direction et les délégués syndicaux signent un accord sur le télétravail. C'est :", choix: ["une consultation", "une information", "une négociation collective", "une médiation"], bonne: 2, expl: "La négociation aboutit à un accord qui engage les parties.", niv: 2 },
        { q: "Un accord est signé par des syndicats qui ont obtenu 35 % des voix des syndicats représentatifs. Il est :", choix: ["valable seulement si les salariés l'approuvent par référendum", "valable immédiatement", "annulé par l'inspection du travail", "transformé automatiquement en accord de branche par le ministère"], bonne: 0, expl: "Sous 50 %, l'accord n'est valable que si des syndicats ayant plus de 30 % demandent un référendum et que les salariés l'approuvent.", niv: 2 },
        { q: "Quel outil donne au CSE les données économiques et sociales de l'entreprise ?", choix: ["Le règlement intérieur", "Le contrat de travail", "La BDESE", "La fiche de poste"], bonne: 2, expl: "La BDESE rassemble les informations économiques, sociales et environnementales transmises au CSE.", niv: 2 },
        { q: "Quel thème ne fait **pas** partie des négociations annuelles obligatoires ?", choix: ["La rémunération", "L'égalité professionnelle", "La qualité de vie et des conditions de travail", "Le choix des fournisseurs"], bonne: 3, expl: "Le choix des fournisseurs relève de la gestion de l'entreprise, pas de la négociation collective obligatoire.", niv: 2 },
        { q: "Pourquoi un SIRH aide-t-il le dialogue social ?", choix: ["Il remplace les représentants du personnel", "Il fournit vite des indicateurs fiables et partagés", "Il signe les accords collectifs à la place des délégués syndicaux", "Il supprime le bilan social"], bonne: 1, expl: "Des données sociales exactes et à jour permettent de discuter sur des faits.", niv: 2 },
        { q: "Une direction consulte le CSE pour la forme, sans jamais tenir compte de ses avis. Quel risque ?", choix: ["Une perte de confiance et le retour des conflits", "Une hausse automatique des salaires des représentants élus", "La dissolution de l'entreprise", "Une obligation de bilan social"], bonne: 0, expl: "Un dialogue de façade décourage les représentants et les salariés : le climat social se dégrade.", niv: 3 },
        { q: "Pourquoi le respect des accords signés est-il une condition de la cohésion ?", choix: ["Il est facultatif pour l'employeur", "Il crée la confiance pour les négociations suivantes", "Il remplace la communication interne de la direction générale", "Il dispense d'élire un CSE"], bonne: 1, expl: "Un engagement tenu montre que le dialogue produit des effets réels : chacun accepte de continuer à négocier.", niv: 3 },
        { q: "Une entreprise négocie avec ses syndicats sur la RSE alors que la loi ne l'y oblige pas. Cela montre :", choix: ["une obligation légale nouvelle", "un dialogue social imposé par une décision du juge", "un conflit collectif", "une culture du dialogue au-delà de la loi"], bonne: 3, expl: "Élargir le dialogue à des thèmes non obligatoires renforce le climat interne et la cohésion.", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-rhc-9',
      fiche: `## Comment la communication participe-t-elle à la cohésion et à la performance ?

### La communication dans l'organisation
- Communiquer, c'est **transmettre un message** d'un **émetteur** à un **récepteur** par un **canal**, avec un **retour** (feedback). Des **bruits** (malentendus, surcharge, problème technique) peuvent déformer le message.
- La **communication interne** s'adresse aux membres de l'organisation :
  - **descendante** : de la direction vers les salariés (consignes, décisions, résultats) ;
  - **ascendante** : des salariés vers la direction (suggestions, réclamations, enquêtes d'opinion) ;
  - **horizontale** (ou transversale) : entre collègues et services du même niveau.
- La **communication externe** s'adresse aux partenaires extérieurs : candidats, clients, fournisseurs, médias, pouvoirs publics.
- La communication est présente dans **toutes** les activités RH : recrutement, intégration, formation, rémunération, santé, dialogue social.

### La communication au service du recrutement
- **Interne** : diffuser les postes par l'environnement numérique de travail ou l'intranet, une **bourse à l'emploi interne** pour favoriser la **mobilité**, des programmes de **cooptation**.
- **Externe** : publier les offres sur internet (site carrière, sites d'emploi, réseaux sociaux professionnels), participer à des salons, travailler avec les écoles.

### La marque employeur
- La **marque employeur** est l'image de l'organisation en tant qu'**employeur**, auprès de ses salariés et des futurs candidats. Elle adopte des techniques de **marketing** pour valoriser cette image.
- Elle se construit par : un site carrière, des témoignages de salariés (« ambassadeurs »), une présence sur les réseaux sociaux, des labels, mais surtout par la **réalité** vécue par les salariés.
- L'**e-réputation** compte : les candidats lisent les **avis** laissés par les salariés sur des plateformes en ligne.
- Effets :
  - sur la **cohésion** : elle diffuse l'idée qu'il fait bon travailler dans l'organisation, renforce la fierté d'appartenance ;
  - sur la **performance** : elle attire, recrute et **fidélise** les meilleurs profils, et apporte des **compétences distinctives** (rares, difficiles à copier).
- Limite : une promesse qui ne correspond pas à la réalité déçoit les nouveaux recrutés et provoque des départs.

### Les outils numériques au service de la cohésion
- L'**intranet** : un site interne, réservé aux membres, pour diffuser informations, documents, actualités, offres d'emploi internes.
- Le **réseau social d'entreprise (RSE numérique)** : un espace d'échange entre tous les collaborateurs (publications, groupes, commentaires).
- Les **outils collaboratifs** : messagerie instantanée, visioconférence, documents partagés et modifiés à plusieurs, agendas partagés, gestion de projets.
- Apports :
  - rapprocher des personnes **éloignées géographiquement** ou en télétravail ;
  - partager rapidement les **connaissances** ;
  - diffuser les **valeurs** et la **culture** de l'organisation à tous ;
  - donner la parole à chacun (communication ascendante et horizontale).
- Conditions : ces outils doivent être **maîtrisés**, ce qui demande souvent une **formation** ; leur usage doit être encadré (charte, droit à la déconnexion).
- Risques : **surcharge informationnelle**, hyperconnexion, exclusion des salariés peu à l'aise avec le numérique, moins d'échanges en face à face.

### Les autres outils de communication RH
- Le journal interne, la lettre d'information, les affichages, les réunions d'équipe, les séminaires, les événements (fêtes, journées d'intégration).
- Le **livret d'accueil** pour les nouveaux arrivants.
- Les enquêtes de satisfaction ou baromètres sociaux (communication ascendante).

### Communication, cohésion et performance
- La communication **informe** (chacun comprend les objectifs), **coordonne** (les tâches s'enchaînent), **implique** (les salariés se sentent écoutés) et **fédère** (une culture commune se crée).
- Une communication défaillante produit des rumeurs, des malentendus, des conflits et une baisse d'implication.

### À retenir pour le bac
- Distinguer communication **interne** (descendante, ascendante, horizontale) et **externe**.
- Montrer le double effet de la marque employeur et des outils collaboratifs : **cohésion** (appartenance, culture) et **performance** (attirer, fidéliser, coopérer), à condition qu'ils soient sincères et maîtrisés.`,
      cartes: [
        { q: "Quels sont les éléments du schéma de la communication ?", r: "L'émetteur, le message, le canal, le récepteur, le retour (feedback) et les bruits qui peuvent déformer le message." },
        { q: "Quelles sont les trois directions de la communication interne ?", r: "Descendante (direction vers salariés), ascendante (salariés vers direction) et horizontale (entre collègues)." },
        { q: "À qui s'adresse la communication externe ?", r: "Aux partenaires extérieurs : candidats, clients, fournisseurs, médias, pouvoirs publics." },
        { q: "Qu'est-ce qu'une bourse à l'emploi interne ?", r: "Un espace où l'organisation publie ses postes ouverts pour ses propres salariés, afin de favoriser la mobilité." },
        { q: "Qu'est-ce que la marque employeur ?", r: "L'image de l'organisation en tant qu'employeur, valorisée par des techniques de marketing auprès des salariés et des candidats." },
        { q: "Comment la marque employeur renforce-t-elle la cohésion ?", r: "Elle diffuse l'idée qu'il fait bon travailler dans l'organisation et renforce la fierté d'appartenance." },
        { q: "Comment la marque employeur améliore-t-elle la performance ?", r: "Elle attire, recrute et fidélise les meilleurs profils, et apporte des compétences distinctives." },
        { q: "Qu'est-ce que l'e-réputation d'un employeur ?", r: "Son image sur internet, notamment les avis laissés par les salariés sur des plateformes en ligne." },
        { q: "Qu'est-ce qu'un intranet ?", r: "Un site interne réservé aux membres de l'organisation, pour diffuser informations, documents et offres internes." },
        { q: "Qu'est-ce qu'un réseau social d'entreprise ?", r: "Un espace numérique d'échange entre collaborateurs : publications, groupes, commentaires." },
        { q: "Que permettent les outils collaboratifs ?", r: "Travailler à plusieurs à distance : messagerie instantanée, visioconférence, documents partagés, gestion de projets." },
        { q: "À quelle condition les outils collaboratifs renforcent-ils la cohésion ?", r: "S'ils sont maîtrisés grâce à une formation et encadrés (charte, droit à la déconnexion)." },
        { q: "Quels risques présentent les outils numériques de communication ?", r: "La surcharge informationnelle, l'hyperconnexion, l'exclusion des moins à l'aise et moins d'échanges en face à face." },
        { q: "Quelles sont les conséquences d'une communication défaillante ?", r: "Rumeurs, malentendus, conflits et baisse d'implication des salariés." },
      ],
      quiz: [
        { q: "Une enquête de satisfaction remplie par les salariés et analysée par la direction est une communication :", choix: ["descendante", "horizontale", "externe", "ascendante"], bonne: 3, expl: "L'information remonte des salariés vers la direction.", niv: 1 },
        { q: "Quel outil numérique est réservé aux membres de l'organisation ?", choix: ["Le site carrière public", "L'intranet", "Un site d'emploi", "Un réseau social grand public"], bonne: 1, expl: "L'intranet est un réseau interne, accessible aux seuls membres.", niv: 1 },
        { q: "La marque employeur désigne :", choix: ["l'image de l'organisation en tant qu'employeur", "le nom commercial déposé", "le logo des produits", "la marque de produits préférée des salariés de l'entreprise"], bonne: 0, expl: "Elle vise les salariés et les candidats, et non les clients.", niv: 1 },
        { q: "Dans le schéma de la communication, une surcharge de messages qui empêche de lire l'essentiel est :", choix: ["un feedback", "un bruit", "un canal", "un émetteur"], bonne: 1, expl: "Le bruit désigne tout ce qui gêne ou déforme la transmission du message.", niv: 1 },
        { q: "Deux services échangent chaque semaine leurs informations pour coordonner un projet. C'est une communication :", choix: ["ascendante", "descendante", "horizontale", "externe"], bonne: 2, expl: "Elle relie des services du même niveau.", niv: 2 },
        { q: "Une entreprise publie sur les réseaux des vidéos où ses salariés racontent leur métier. Elle travaille :", choix: ["sa communication financière", "son règlement intérieur", "sa marque employeur", "son dialogue social"], bonne: 2, expl: "Les témoignages de salariés « ambassadeurs » valorisent l'image de l'employeur auprès des candidats.", niv: 2 },
        { q: "Une équipe répartie dans trois villes partage ses documents en ligne et se réunit en visioconférence. L'apport principal est :", choix: ["de rapprocher des collègues éloignés", "de supprimer les réunions en face à face", "de réduire les salaires", "d'éviter toute formation"], bonne: 0, expl: "Les outils collaboratifs rapprochent des individus éloignés et facilitent la coopération.", niv: 2 },
        { q: "Une entreprise lance un réseau social interne sans former personne. Quel risque ?", choix: ["Un outil peu utilisé ou mal utilisé", "Une hausse automatique de la cohésion", "Une obligation de bilan social", "Un conflit avec ses clients"], bonne: 0, expl: "Ces outils ne renforcent la cohésion que s'ils sont maîtrisés, ce qui demande souvent une formation.", niv: 2 },
        { q: "Quel outil ne relève **pas** de la communication interne ?", choix: ["Le journal interne", "La bourse à l'emploi interne", "Le livret d'accueil", "Une campagne publicitaire pour les clients"], bonne: 3, expl: "La publicité vise les clients : c'est de la communication externe commerciale.", niv: 2 },
        { q: "Pourquoi une marque employeur trop flatteuse peut-elle nuire à la performance ?", choix: ["Elle fait baisser le chiffre d'affaires", "Elle est interdite par la loi", "Elle déçoit les nouveaux recrutés, qui partent vite", "Elle empêche tout recrutement interne pendant plusieurs années"], bonne: 2, expl: "Le décalage entre promesse et réalité provoque des départs rapides et des avis négatifs en ligne.", niv: 3 },
        { q: "Comment la marque employeur peut-elle apporter des compétences distinctives ?", choix: ["En remplaçant la formation", "En baissant les salaires", "En réduisant la communication interne au strict minimum", "En attirant et en retenant des profils rares"], bonne: 3, expl: "Une organisation réputée attire les meilleurs candidats et les garde : elle dispose de compétences que les concurrents n'ont pas.", niv: 3 },
        { q: "Pourquoi les outils numériques de communication peuvent-ils aussi menacer la cohésion ?", choix: ["Ils sont trop lents", "Ils peuvent surcharger ou isoler", "Ils empêchent la communication ascendante", "Ils sont réservés à la direction"], bonne: 1, expl: "Hyperconnexion, surcharge et fracture numérique fragilisent le collectif s'ils ne sont pas encadrés.", niv: 3 },
      ],
    },
  ],
  methode: [
    { id: 'stmg-rhc-m1', mat: 'stmg-rhc', titre: 'Comment cet enseignement est évalué au bac',
      formules: ['Pas de sujet écrit propre à l\'enseignement spécifique RHC', 'Écrit de management, sciences de gestion et numérique : 4 heures, sur l\'enseignement commun', 'Grand oral : deux questions préparées à partir du projet de l\'enseignement spécifique'],
      vu: ['Note de service du 11 septembre 2026 (BO spécial n° 4) : l\'écrit porte sur la partie enseignement commun du programme de terminale', 'Grand oral de la voie technologique : les questions s\'appuient sur le projet mené dans l\'enseignement spécifique'],
      pts: 'Grand oral noté sur 20 ; écrit de management noté sur 20 (coefficient 16)',
      attendu: 'Savoir où sert ce qu\'on apprend. Les notions RHC servent d\'abord au grand oral, où l\'élève présente une question liée à son projet de ressources humaines et communication, puis répond au jury. Elles aident aussi à l\'écrit de management, dont plusieurs sujets récents posent des questions de gestion des ressources humaines (recrutement, GPEC, motivation).',
      etapes: ['Choisir en classe un projet sur une organisation réelle (entreprise, association, administration) et un problème RH concret.', 'Rattacher ce projet à une ou deux questions du programme (par exemple 2.2 sur la santé et la sécurité).', 'Formuler deux questions de grand oral à partir du projet.', 'Réviser les notions des 9 chapitres : elles donnent le vocabulaire attendu par le jury.', 'Pour l\'écrit, s\'entraîner aux questions RH de l\'enseignement commun (voir la question type sur l\'écrit).'],
      mots: ['enseignement commun', 'enseignement spécifique', 'projet', 'grand oral', 'question du programme', 'organisation réelle'],
      pieges: ['Croire qu\'il y a un écrit de RHC en juin et réviser pour un sujet qui n\'existe pas.', 'Choisir une question de grand oral sans lien avec le projet mené en classe.', 'Négliger le vocabulaire RH, qui fait la différence à l\'oral comme à l\'écrit.'],
      cas: 'Un élève a mené en classe un projet sur l\'absentéisme dans un supermarché de sa ville.',
      question: 'À quelles questions du programme ce projet se rattache-t-il, et quelle question de grand oral peut-il en tirer ?',
      modele: 'Le projet se rattache surtout à la question 2.2 (les obligations en matière de santé et de sécurité au travail constituent-elles des atouts pour l\'organisation ?), car l\'absentéisme est un indicateur social lié à la santé et aux conditions de travail, et à la question 2.1 (mieux vivre au travail et performance). Une question de grand oral possible : « Réduire l\'absentéisme dans la grande distribution : simple coût à éviter ou levier de performance ? »',
      grille: ['Le projet est relié à une question précise du programme', 'La question de grand oral est une vraie question qui appelle un débat', 'Elle porte sur une situation réelle et concrète', 'Le vocabulaire RH est utilisé'] },
    { id: 'stmg-rhc-m2', mat: 'stmg-rhc', titre: 'Grand oral : construire sa question et son exposé',
      formules: ['Présentation de la question choisie par le jury parmi les deux de l\'élève', 'Exposé debout, sans notes', 'Échange avec le jury sur la question, puis sur le projet d\'orientation'],
      vu: ['Grand oral de chaque session : 20 minutes de préparation, puis 20 minutes d\'épreuve (environ 5 minutes d\'exposé, 10 minutes d\'échange sur la question, 5 minutes sur le projet d\'orientation)'],
      pts: 'Note sur 20 : qualité orale, construction de l\'argumentation, solidité des connaissances, capacité à interagir',
      attendu: 'Un exposé clair et construit : une accroche, le contexte de l\'organisation étudiée, la question et pourquoi elle se pose, une réponse en deux idées argumentées avec des notions du programme et des faits du projet, puis une conclusion qui répond. Le jury attend du vocabulaire précis (GPEC, QVCT, dialogue social, marque employeur) et une réponse nuancée.',
      etapes: ['Partir d\'un constat du projet : un chiffre, une difficulté, une décision de l\'organisation.', 'Écrire une question ouverte qui contient une tension (« est-ce un coût ou un atout ? », « suffit-il de… ? »).', 'Préparer deux parties : ce qui va dans le sens de la question, puis ses limites ou conditions.', 'Appuyer chaque idée sur une notion du programme et un fait observé dans le projet.', 'Préparer une accroche et une conclusion de deux phrases.', 'S\'entraîner à parler 5 minutes sans lire, puis à répondre aux questions possibles du jury (définitions, chiffres, contre-arguments).'],
      mots: ['problématique', 'constat', 'enjeu', 'notion', 'argument', 'nuance', 'en conclusion'],
      pieges: ['Une question fermée à laquelle on répond par oui ou non.', 'Raconter le projet sans répondre à la question.', 'Réciter un texte appris par cœur : le jury veut une parole vivante.', 'Ne pas savoir définir une notion qu\'on a citée.'],
      cas: 'Projet inventé pour l\'entraînement : une association d\'aide à domicile de 80 salariés peine à recruter et voit partir un tiers de ses nouvelles aides à domicile avant la fin de leur période d\'essai.',
      question: 'Proposez une question de grand oral et le plan de l\'exposé.',
      modele: 'Question : « Pour une association d\'aide à domicile, le recrutement suffit-il à répondre au manque de compétences ? » Accroche : un tiers des nouvelles recrues partent avant la fin de leur période d\'essai. I. Recruter reste indispensable : définir le besoin par une fiche de poste, diversifier les canaux (e-recrutement, partenariats avec les écoles, cooptation), soigner la marque employeur pour attirer dans un métier peu connu. II. Mais le recrutement ne suffit pas : sans intégration (tutorat, accompagnement des premières visites), les départs se multiplient ; il faut fidéliser par la formation, la qualité de vie au travail (plannings, temps de trajet) et la reconnaissance. Conclusion : le recrutement est la première étape d\'une gestion des compétences qui doit inclure l\'intégration et la fidélisation.',
      grille: ['La question est ouverte et contient une tension', 'L\'accroche s\'appuie sur un fait concret', 'Deux parties qui répondent à la question', 'Des notions du programme précises', 'Une conclusion qui répond'] },
    { id: 'stmg-rhc-m3', mat: 'stmg-rhc', titre: 'Écrit de management : les questions de gestion des ressources humaines',
      formules: ['Décrire les actions mises en œuvre afin d\'adapter ses ressources humaines à ses besoins.', 'Démontrer l\'intérêt d\'une démarche de gestion prévisionnelle des emplois et des compétences.', 'Présenter les pratiques RH mises en œuvre et montrer qu\'elles constituent des facteurs de motivation.'],
      vu: ['Bac 2025 métropole, management, sciences de gestion et numérique : question 3.2', 'Bac 2024 Polynésie, management, sciences de gestion et numérique : question 3.1'],
      pts: 'Environ 2 à 3 points sur 20 dans l\'écrit commun',
      attendu: 'Nommer les actions RH avec les mots du cours (recrutement, intégration, formation, GPEC, rémunération, conditions de travail), les prouver par le document et dire à quoi chacune sert : adapter les compétences, motiver, fidéliser. Les élèves de RHC ont ici un avantage s\'ils utilisent leur vocabulaire.',
      etapes: ['Lire la question : décrire, démontrer ou montrer n\'attendent pas la même réponse.', 'Relever dans le document chaque action RH et la classer : recrutement, intégration, formation, rémunération, conditions de travail.', 'Pour la GPEC : besoins futurs, ressources actuelles, écart, actions pour le combler.', 'Pour la motivation : distinguer facteurs extrinsèques (salaire, primes, avantages) et intrinsèques (intérêt du travail, reconnaissance, autonomie).', 'Relier chaque action à son effet avec « ce qui permet de… ».', 'Rédiger en phrases, sans liste sèche.'],
      mots: ['GPEC', 'compétences', 'recrutement', 'intégration', 'formation', 'fidélisation', 'motivation extrinsèque', 'motivation intrinsèque', 'marque employeur', 'qualité de vie au travail'],
      pieges: ['Lister les actions sans dire à quoi elles servent.', 'Confondre recrutement externe et mobilité interne.', 'Parler de motivation sans distinguer ses facteurs.', 'Recopier le document au lieu de le qualifier avec les mots du cours.'],
      cas: 'Organisation inventée : un parc de loisirs emploie 60 permanents et jusqu\'à 350 saisonniers d\'avril à octobre. Les candidats manquent. Le parc loge 40 saisonniers dans des studios, verse une prime d\'assiduité de 120 euros, recrute sur des sites d\'emploi, des réseaux sociaux et lors d\'un forum avec France Travail, et confie chaque nouveau saisonnier à un tuteur pendant sa première semaine.',
      question: 'Présentez les pratiques de gestion des ressources humaines du parc et montrez qu\'elles constituent des facteurs de motivation.',
      modele: 'Pour faire face au manque de saisonniers, le parc combine plusieurs pratiques RH. Le recrutement est diversifié (sites d\'emploi, réseaux sociaux, forum avec France Travail), ce qui touche plus de candidats et renforce sa marque employeur. L\'intégration repose sur un tuteur pendant la première semaine, ce qui rassure le nouveau salarié et limite les départs rapides. La rémunération inclut une prime d\'assiduité de 120 euros : c\'est un facteur de motivation extrinsèque qui récompense la présence. Les conditions de vie au travail sont améliorées par le logement de 40 saisonniers, ce qui lève un obstacle majeur et améliore la qualité de vie au travail. Enfin, se sentir accompagné et considéré nourrit une motivation intrinsèque : l\'appartenance et la reconnaissance. Ces pratiques motivent les saisonniers et les incitent à revenir la saison suivante.',
      grille: ['Les pratiques sont classées avec les mots du cours', 'Chaque pratique est prouvée par le cas', 'Facteurs extrinsèques et intrinsèques distingués', 'Le lien avec la motivation ou la fidélisation est expliqué', 'Rédigé en phrases'] },
    { id: 'stmg-rhc-m4', mat: 'stmg-rhc', titre: 'Calculer et interpréter des indicateurs sociaux',
      formules: ['Calculez le taux d\'absentéisme et commentez son évolution.', 'Calculez le taux de rotation du personnel.', 'Analysez les indicateurs du bilan social.'],
      vu: ['Programme officiel, question 2.2 : suivre les taux d\'absentéisme, de rotation, d\'accidents du travail et de maladies professionnelles, avec un tableur', 'Programme officiel, question 3.2 : bilan social et base de données économiques et sociales'],
      pts: 'Utile au projet, au grand oral et aux annexes chiffrées de l\'écrit commun',
      attendu: 'Poser la formule, faire le calcul juste avec l\'unité, puis interpréter : comparer dans le temps ou avec le secteur, proposer une cause et une action. Un chiffre sans interprétation ne rapporte presque rien.',
      etapes: ['Écrire la formule : absentéisme = heures d\'absence ÷ heures théoriques × 100 ; rotation = ((entrées + sorties) ÷ 2) ÷ effectif moyen × 100 ; fréquence = accidents avec arrêt × 1 000 000 ÷ heures travaillées.', 'Remplacer par les valeurs et calculer, en arrondissant à une décimale.', 'Comparer : hausse ou baisse, en points de pourcentage ; écart avec la moyenne du secteur.', 'Proposer une cause plausible tirée des documents (conditions de travail, charge, climat social).', 'Proposer une action RH (prévention, ergonomie, dialogue, reconnaissance).'],
      mots: ['taux d\'absentéisme', 'taux de rotation', 'taux de fréquence', 'points de pourcentage', 'coûts cachés', 'climat social'],
      pieges: ['Oublier le × 100 ou l\'unité.', 'Confondre « % » et « points de pourcentage ».', 'Calculer sans interpréter.', 'Prendre l\'effectif de fin d\'année au lieu de l\'effectif moyen.'],
      cas: 'Données inventées : une entreprise de logistique de 120 salariés en moyenne compte 9 800 heures d\'absence pour 196 000 heures théoriques en 2025 (contre 3,1 % en 2024). Elle a enregistré 25 entrées et 23 sorties dans l\'année.',
      question: 'Calculez le taux d\'absentéisme et le taux de rotation de 2025, puis interprétez-les.',
      modele: 'Taux d\'absentéisme 2025 = 9 800 ÷ 196 000 × 100 = 5 %. Il augmente de 1,9 point par rapport à 2024 (3,1 %). Taux de rotation = ((25 + 23) ÷ 2) ÷ 120 × 100 = 24 ÷ 120 × 100 = 20 %. Ces deux taux élevés signalent une dégradation du climat social ou des conditions de travail, fréquente dans la logistique (port de charges, cadences, TMS). Ils entraînent des coûts cachés : remplacements, heures supplémentaires, recrutements répétés. L\'entreprise pourrait agir sur l\'ergonomie des postes, la prévention des TMS et l\'intégration des nouveaux salariés.',
      grille: ['Les formules sont écrites', 'Les calculs sont justes avec l\'unité', 'L\'évolution est donnée en points', 'Une cause plausible est proposée', 'Une action RH adaptée est proposée'] },
  ],
  sujets: [],
};
