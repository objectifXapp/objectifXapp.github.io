// Sciences et techniques sanitaires et sociales — terminale ST2S. Sources : voir matiere.sources.
// Programme : arrêté du 19 juillet 2019 (BO spécial n° 8 du 25 juillet 2019, annexe 2). En terminale : un module du pôle thématique
// (« Politiques, dispositifs de santé publique et d'action sociale », deux questions) et une question du pôle méthodologique (démarche de projet).
// Épreuve : note de service du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026), à partir de la session 2027 :
// 3 heures ; partie 1 « mobilisation des connaissances » sur 5 points, partie 2 « dossier documentaire » sur 13 points, 2 points de langue.
// Les notions de première peuvent être mobilisées : le dernier chapitre les rappelle, car les vrais sujets les utilisent beaucoup.
// Chiffres : seulement des chiffres officiels et datés ; dans le doute, aucun chiffre.
export default {
  matiere: {
    id: 'st2s-stss',
    nom: 'Sciences et techniques sanitaires et sociales',
    voie: 'st2s',
    epreuve: { type: 'ecrit', duree: 180, coef: 16, quand: 'juin', note: 'Écrit de 3 heures en deux parties : mobilisation des connaissances sans document (5 points), développement s\'appuyant sur un dossier documentaire de cinq documents au plus (13 points), et 2 points pour la langue. Barème en vigueur à partir de la session 2027.' },
    sources: [
      'https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/19/8/spe258_annexe2_1159198.pdf',
      'https://www.education.gouv.fr/bo/19/Special8/MENE1921258A.htm',
      'https://www.education.gouv.fr/bo/2026/Hebdo4/MENE2622648N',
      'Sujets officiels de STSS : Polynésie 2025, métropole 2026 (17 juin 2026), Polynésie 2026',
      'https://www.legifrance.gouv.fr (Code de la santé publique, Code de l\'action sociale et des familles)',
      'https://drees.solidarites-sante.gouv.fr (comptes de la santé, protection sociale)',
      'https://www.santepubliquefrance.fr et https://www.insee.fr',
    ],
    chapitres: [
      { id: 'st2s-stss-1', t: 'Politique de santé et gouvernance du système de santé', theme: 'Politiques de santé' },
      { id: 'st2s-stss-2', t: 'Du système de santé au système de soins : acteurs, accès aux soins, prévention et veille', theme: 'Politiques de santé' },
      { id: 'st2s-stss-3', t: 'Des politiques sociales vers l\'action sociale', theme: 'Politiques sociales' },
      { id: 'st2s-stss-4', t: 'Étude de dispositifs : lutter contre la précarité, la pauvreté et l\'exclusion', theme: 'Politiques sociales' },
      { id: 'st2s-stss-5', t: 'La démarche de projet (1) : le projet dans son contexte, l\'étude et la conception', theme: 'Méthodologie' },
      { id: 'st2s-stss-6', t: 'La démarche de projet (2) : mise en œuvre, évaluation et place de la population cible', theme: 'Méthodologie' },
      { id: 'st2s-stss-7', t: 'Notions de première à mobiliser : santé, déterminants, inégalités et protection sociale', theme: 'Rappels de première' },
    ],
  },
  paquets: [
    {
      chapitre: 'st2s-stss-1',
      fiche: `## Politique de santé et gouvernance du système de santé

### Qu'est-ce qu'une politique de santé ?
- Une **politique de santé** est l'ensemble des choix et des actions des pouvoirs publics pour **améliorer l'état de santé** de la population et **réduire les inégalités de santé**. En France, elle relève de la **responsabilité de l'État** (article L1411-1 du Code de la santé publique).
- Elle agit sur les **déterminants de santé** : comportements (tabac, alcool, alimentation), environnement (pollution, logement), conditions de vie et de travail, accès aux soins.
- Elle fixe des **priorités sanitaires** (cancers, santé mentale, maladies chroniques, vaccination) à partir de l'**état de santé** observé et des **besoins** de la population.
- La **stratégie nationale de santé** fixe les grandes orientations pour plusieurs années ; elle est déclinée par chaque région.

### Une approche historique
- **1902** : première grande loi de santé publique (vaccination contre la variole obligatoire, hygiène).
- **1945** : création de la **Sécurité sociale** (ordonnances d'octobre 1945) : l'accès aux soins devient possible pour les salariés et leur famille.
- **1958** : création des **centres hospitaliers universitaires (CHU)**, qui réunissent soins, enseignement et recherche.
- **1996** : ordonnances Juppé : le Parlement vote chaque année la **loi de financement de la sécurité sociale (LFSS)** et l'**objectif national de dépenses d'assurance maladie (ONDAM)**.
- **2002** : loi du **4 mars 2002** relative aux **droits des malades** et à la qualité du système de santé : information, consentement, accès au dossier médical, **démocratie sanitaire**.
- **2004** : loi relative à la politique de santé publique (objectifs de santé chiffrés) et loi sur l'assurance maladie (**médecin traitant**, parcours de soins coordonnés).
- **2009** : loi **Hôpital, patients, santé, territoires (HPST)** : création des **agences régionales de santé (ARS)** en 2010.
- **2016** : loi de modernisation de notre système de santé : **groupements hospitaliers de territoire (GHT)**, communautés professionnelles territoriales de santé, création de **Santé publique France**.
- **2019** : loi relative à l'organisation et à la transformation du système de santé : fin du *numerus clausus*, hôpitaux de proximité, espace numérique de santé (**Mon espace santé**, ouvert en 2022).
- Évolution des objectifs : d'une logique d'**hygiène** et de lutte contre les épidémies, on passe à l'**accès aux soins pour tous**, puis à la **prévention**, à la **qualité**, à la **maîtrise des dépenses** et aux **droits des patients**.

### L'élaboration aux différents échelons
- **International** : l'**Organisation mondiale de la santé (OMS)**, créée en **1948**, siège à Genève : normes, alertes, règlement sanitaire international, programmes de vaccination.
- **Européen** : l'Union européenne a une compétence d'**appui** en santé (la politique de santé reste nationale) : coordination face aux crises sanitaires, autorisation des médicaments, programmes de santé, règlements et directives.
- **National** :
  - le **Parlement** vote les lois de santé et chaque année la LFSS ;
  - le **ministère de la Santé** prépare et pilote la politique ;
  - des **agences sanitaires** apportent une expertise : la **Haute Autorité de santé (HAS)** (recommandations, certification des établissements), **Santé publique France** (surveillance, prévention), l'agence du médicament (**ANSM**) ;
  - l'**Assurance maladie** gère les remboursements et participe à la prévention.
- **Régional** : l'**ARS** met en œuvre la politique de santé dans sa région. Elle élabore le **projet régional de santé (PRS)**, autorise les établissements, organise l'offre de soins et la prévention. La **conférence régionale de la santé et de l'autonomie** donne son avis.
- **Local** : **contrats locaux de santé** signés entre l'ARS et les collectivités, conseils territoriaux de santé, communes (ateliers santé ville).

### La démocratie sanitaire
- C'est la **participation** de tous les acteurs (usagers, professionnels, élus, associations) à l'élaboration et à la mise en œuvre de la politique de santé, dans un esprit de dialogue.
- Exemples : **représentants des usagers** dans les établissements de santé (commission des usagers), associations agréées d'usagers, conférences de santé nationale et régionales, débats publics, consultations citoyennes.
- Intérêt : des décisions mieux adaptées aux besoins, mieux acceptées, et une place reconnue à la personne.

### Composantes, gouvernance et financement
- Le **système de santé** regroupe tous les acteurs, moyens et actions qui visent à **préserver, améliorer ou rétablir la santé** : prévention, soins, veille sanitaire, recherche, formation.
- La **gouvernance** est la façon dont les décisions sont prises et partagées entre l'État, l'Assurance maladie, les ARS, les complémentaires santé, les professionnels et les usagers.
- Le **financement** : Sécurité sociale (cotisations, CSG, impôts), complémentaires santé (mutuelles, institutions de prévoyance, assurances), État et collectivités, ménages (reste à charge).
- Les **comptes de la santé**, publiés chaque année par la **DREES**, mesurent la dépense, notamment la **consommation de soins et de biens médicaux (CSBM)**. La Sécurité sociale en finance la plus grande part, environ quatre cinquièmes.

### À retenir pour le bac
- Présenter le **processus d'élaboration** : constat des besoins, priorités, décision, mise en œuvre, évaluation, à chaque échelon.
- Montrer que la politique de santé agit sur les **déterminants** : sur les comportements, l'environnement et l'accès aux soins.
- Sujet tombé : « Expliquer comment la démocratie sanitaire est mise en œuvre dans les politiques de santé » (Polynésie 2026, partie 1).`,
      cartes: [
        { q: "Qu'est-ce qu'une politique de santé ?", r: "L'ensemble des choix et actions des pouvoirs publics pour améliorer la santé de la population et réduire les inégalités de santé. Elle relève de l'État." },
        { q: "Sur quoi agit une politique de santé ?", r: "Sur les déterminants de santé : comportements, environnement, conditions de vie et de travail, accès aux soins." },
        { q: "Qu'apporte la loi du 4 mars 2002 ?", r: "Les droits des malades (information, consentement, accès au dossier médical) et la démocratie sanitaire." },
        { q: "Que crée la loi HPST de 2009 ?", r: "Les agences régionales de santé (ARS), installées en 2010." },
        { q: "Que vote le Parlement chaque année en matière de santé ?", r: "La loi de financement de la sécurité sociale, qui fixe l'objectif national de dépenses d'assurance maladie (ONDAM)." },
        { q: "Quel est le rôle de l'OMS ?", r: "Organisation mondiale de la santé, créée en 1948 à Genève : normes, alertes, règlement sanitaire international, programmes de santé." },
        { q: "Quelle est la compétence de l'Union européenne en santé ?", r: "Une compétence d'appui : coordination face aux crises, autorisation des médicaments, programmes ; la politique de santé reste nationale." },
        { q: "Quel est le rôle de l'ARS ?", r: "Mettre en œuvre la politique de santé dans la région : projet régional de santé, autorisations, organisation des soins et de la prévention." },
        { q: "Qu'est-ce que le projet régional de santé ?", r: "Le document de l'ARS qui fixe les objectifs et l'organisation de la santé dans la région pour plusieurs années." },
        { q: "Qu'est-ce qu'une agence sanitaire ? Donner un exemple.", r: "Un organisme public d'expertise et de sécurité sanitaire. Exemples : Haute Autorité de santé, Santé publique France, ANSM." },
        { q: "Qu'est-ce que la démocratie sanitaire ?", r: "La participation des usagers, professionnels, élus et associations à l'élaboration et à la mise en œuvre de la politique de santé." },
        { q: "Donner deux exemples de démocratie sanitaire.", r: "Les représentants des usagers dans les établissements (commission des usagers) et les conférences régionales de la santé et de l'autonomie." },
        { q: "Qu'est-ce que le système de santé ?", r: "L'ensemble des acteurs, moyens et actions qui visent à préserver, améliorer ou rétablir la santé : prévention, soins, veille, recherche." },
        { q: "Qu'est-ce que la gouvernance du système de santé ?", r: "La façon dont les décisions sont prises et partagées entre l'État, l'Assurance maladie, les ARS, les complémentaires, les professionnels et les usagers." },
        { q: "Que mesurent les comptes de la santé ?", r: "La dépense de santé, notamment la consommation de soins et de biens médicaux (CSBM). Ils sont publiés chaque année par la DREES." },
      ],
      quiz: [
        { q: "Quelle loi crée les agences régionales de santé ?", choix: ["La loi HPST de 2009", "La loi du 4 mars 2002", "Les ordonnances de 1945", "La loi de 2019"], bonne: 0, expl: "La loi Hôpital, patients, santé, territoires (2009) crée les ARS, installées en 2010.", niv: 1 },
        { q: "Quelle loi pose les droits des malades et la démocratie sanitaire ?", choix: ["La loi de 1902", "La loi HPST", "La loi du 4 mars 2002", "La loi de financement de la sécurité sociale"], bonne: 2, expl: "La loi du 4 mars 2002 (droits des malades et qualité du système de santé).", niv: 1 },
        { q: "En quelle année l'OMS est-elle créée ?", choix: ["1919", "1945", "1948", "1958"], bonne: 2, expl: "L'OMS est créée en 1948 ; son siège est à Genève.", niv: 1 },
        { q: "Quel organisme publie chaque année les comptes de la santé ?", choix: ["Le Conseil d'État", "L'OMS", "La Haute Autorité de santé", "La DREES"], bonne: 3, expl: "La DREES, service statistique des ministères sociaux, publie les comptes de la santé.", niv: 1 },
        { q: "Une ARS élabore un document qui fixe pour plusieurs années les objectifs de santé de la région. C'est :", choix: ["la loi de financement de la sécurité sociale", "un contrat de séjour", "le projet régional de santé", "le règlement sanitaire international"], bonne: 2, expl: "Le projet régional de santé décline la politique nationale à l'échelle de la région.", niv: 2 },
        { q: "Des représentants d'associations de patients siègent dans la commission des usagers d'un hôpital. C'est un exemple :", choix: ["de démocratie sanitaire", "de veille sanitaire", "de permanence des soins", "de gouvernance européenne"], bonne: 0, expl: "Les usagers participent à la vie et aux décisions du système de santé : c'est la démocratie sanitaire.", niv: 2 },
        { q: "Une campagne nationale contre le tabac agit sur quel type de déterminant ?", choix: ["Les déterminants biologiques", "Les comportements", "L'accès aux soins", "Le patrimoine génétique"], bonne: 1, expl: "Elle cherche à modifier un comportement individuel. Une politique de santé agit sur les déterminants modifiables.", niv: 2 },
        { q: "Quel rôle joue l'Union européenne en matière de santé ?", choix: ["Elle fixe les taux de remboursement des soins de chaque pays membre de l'ONU", "Elle appuie et coordonne les États, qui gardent leur politique de santé", "Elle remplace les ARS", "Elle gère les hôpitaux publics"], bonne: 1, expl: "L'Union a une compétence d'appui : la politique de santé et l'organisation des soins restent nationales.", niv: 2 },
        { q: "Quel acteur n'intervient **pas** à l'échelon national de la politique de santé ?", choix: ["Le Parlement", "Le ministère de la Santé", "La Haute Autorité de santé", "Le contrat local de santé"], bonne: 3, expl: "Le contrat local de santé est signé entre l'ARS et une collectivité : il relève de l'échelon local.", niv: 2 },
        { q: "Pourquoi la démocratie sanitaire améliore-t-elle les politiques de santé ?", choix: ["Elle transfère au ministère les décisions prises jusque-là par les régions", "Elle rend les décisions plus adaptées aux besoins et mieux acceptées", "Elle remplace les professionnels de santé", "Elle réduit les remboursements"], bonne: 1, expl: "Associer usagers et professionnels permet de mieux cerner les besoins et favorise l'adhésion aux mesures.", niv: 3 },
        { q: "Quelle évolution des objectifs de la politique de santé est la plus juste ?", choix: ["De la prévention vers l'hygiène seule", "Elle n'a pas évolué depuis 1945", "Des droits des patients vers la maîtrise des dépenses et la fermeture des hôpitaux", "De l'hygiène vers l'accès aux soins, la prévention et les droits des patients"], bonne: 3, expl: "Hygiène au début du XXe siècle, accès aux soins en 1945, puis prévention, qualité, maîtrise des dépenses et droits des patients.", niv: 3 },
        { q: "Pourquoi parle-t-on de gouvernance partagée du système de santé ?", choix: ["Les décisions se partagent entre État, Assurance maladie, ARS, professionnels et usagers", "Le ministère décide et les ARS se contentent de transmettre ses ordres aux hôpitaux", "Les patients financent les soins", "L'OMS dirige les hôpitaux français"], bonne: 0, expl: "Plusieurs acteurs décident, financent et mettent en œuvre : la gouvernance est partagée.", niv: 3 },
      ],
    },
    {
      chapitre: 'st2s-stss-2',
      fiche: `## Du système de santé au système de soins

### Deux notions à distinguer
- Le **système de santé** est large : prévention, promotion de la santé, soins, veille sanitaire, recherche, et les politiques qui les organisent.
- Le **système de soins** en est une partie : l'**offre de soins** (professionnels, établissements, médicaments) qui répond à la **demande de soins** des personnes malades.
- L'**offre de soins** est l'ensemble des moyens disponibles ; la **demande de soins** est le recours effectif des personnes aux soins.

### Les acteurs du système de soins
- **Les soins de ville** (ou ambulatoires) : médecins généralistes et spécialistes libéraux, infirmiers, kinésithérapeutes, pharmacies, laboratoires, **maisons de santé pluriprofessionnelles** et centres de santé.
- **Les établissements de santé** :
  - **publics** (centres hospitaliers, CHU), qui assurent des missions de service public ;
  - **privés à but non lucratif** (souvent associatifs ou mutualistes) ;
  - **privés à but lucratif** (cliniques).
- **Le secteur médico-social** : établissements et services pour personnes âgées ou handicapées (par exemple les établissements d'hébergement pour personnes âgées dépendantes).
- Ces acteurs sont **complémentaires** : le médecin traitant oriente, l'hôpital prend en charge les cas graves, les soins de suite et le retour à domicile assurent la continuité. Sur un territoire, ils se **coordonnent** : groupements hospitaliers de territoire, communautés professionnelles territoriales de santé, dispositifs d'appui à la coordination.

### Le parcours de soins et la permanence des soins
- Le **parcours de soins coordonnés** (2004) : chaque assuré de 16 ans et plus déclare un **médecin traitant**, qui l'oriente vers les spécialistes. Hors parcours, il est moins bien remboursé.
- Le parcours permet une **prise en charge globale** : suivi dans la durée, coordination entre professionnels, prévention, partage des informations (Mon espace santé).
- La **permanence des soins** assure l'accès à un médecin la nuit, le week-end et les jours fériés : médecins de garde, régulation par le **SAMU (15)**, numéro 116 117, urgences hospitalières.

### Lutter contre les inégalités et favoriser l'accès aux soins
- Obstacles : **financiers** (reste à charge, dépassements d'honoraires), **géographiques** (déserts médicaux), **sociaux et culturels** (manque d'information, langue, renoncement aux soins).
- Dispositifs :
  - la **protection universelle maladie** (2016) : toute personne qui travaille ou réside en France de façon stable et régulière a droit à la prise en charge de ses soins ;
  - la **complémentaire santé solidaire** (2019) : une complémentaire gratuite ou à faible coût selon les ressources ;
  - l'**aide médicale de l'État** pour les étrangers en situation irrégulière aux faibles ressources ;
  - les **permanences d'accès aux soins de santé (PASS)** à l'hôpital, pour les personnes en situation de précarité ;
  - le **tiers payant** (pas d'avance de frais), la **télémédecine**, les aides à l'installation des médecins dans les zones sous-dotées, les maisons de santé.

### La place de la personne
- La personne est **actrice** de sa santé : droit à l'**information**, au **consentement libre et éclairé**, à l'**accès à son dossier médical**, désignation d'une **personne de confiance**, **directives anticipées** pour la fin de vie.
- Elle peut être représentée par des associations d'usagers ; elle participe à son **éducation thérapeutique** en cas de maladie chronique.

### Prévention, promotion de la santé et veille sanitaire
- Selon l'OMS, la **prévention** est l'ensemble des mesures qui évitent ou réduisent les maladies :
  - **primaire** : avant la maladie (vaccination, campagnes contre le tabac) ;
  - **secondaire** : dépister tôt (dépistage organisé du cancer du sein) ;
  - **tertiaire** : limiter les complications et les rechutes (rééducation).
- La **promotion de la santé** (**charte d'Ottawa**, 1986) donne aux personnes les moyens d'agir sur leur santé : environnements favorables, action communautaire, aptitudes individuelles.
- Exemples : vaccinations obligatoires des nourrissons, **Mois sans tabac** chaque novembre, rendez-vous de prévention à certains âges.
- La **veille sanitaire** surveille en continu l'état de santé de la population pour **détecter** une menace et **alerter** les autorités. Elle est assurée par **Santé publique France** avec les ARS : **déclaration obligatoire** de certaines maladies par les médecins, réseaux de médecins sentinelles, surveillance des passages aux urgences. Les **vigilances** surveillent les effets indésirables des produits de santé (pharmacovigilance).

### La protection sociale dans le système de soins
- L'**Assurance maladie** rembourse une partie des soins ; une part reste à la charge de l'assuré (**ticket modérateur**, participations forfaitaires, franchises), souvent couverte par la **complémentaire santé**.
- Elle permet l'accès aux soins et réduit le **renoncement aux soins**.

### À retenir pour le bac
- Montrer la **complémentarité** des acteurs sur un territoire.
- Sujets tombés : « Expliquer que le parcours de soins permet une prise en charge globale des patients » (métropole 2026) ; « Expliquer comment la protection sociale contribue à lutter contre les inégalités d'accès aux soins » (Polynésie 2025).`,
      cartes: [
        { q: "Quelle différence entre système de santé et système de soins ?", r: "Le système de santé inclut prévention, promotion, soins, veille et recherche ; le système de soins n'est que l'offre de soins aux malades." },
        { q: "Quelle différence entre offre et demande de soins ?", r: "L'offre est l'ensemble des moyens disponibles (professionnels, établissements) ; la demande est le recours effectif des personnes aux soins." },
        { q: "Qu'appelle-t-on soins de ville ?", r: "Les soins ambulatoires hors hôpital : médecins libéraux, infirmiers, pharmacies, laboratoires, maisons de santé." },
        { q: "Quels sont les trois types d'établissements de santé ?", r: "Publics (centres hospitaliers, CHU), privés à but non lucratif et privés à but lucratif (cliniques)." },
        { q: "Qu'est-ce que le parcours de soins coordonnés ?", r: "Depuis 2004, l'assuré déclare un médecin traitant qui l'oriente vers les spécialistes ; hors parcours, il est moins bien remboursé." },
        { q: "Pourquoi le parcours de soins permet-il une prise en charge globale ?", r: "Le médecin traitant suit le patient dans la durée, coordonne les professionnels, fait de la prévention et partage les informations." },
        { q: "Qu'est-ce que la permanence des soins ?", r: "L'organisation qui garantit l'accès à un médecin la nuit, le week-end et les jours fériés (gardes, régulation par le 15)." },
        { q: "Quels obstacles freinent l'accès aux soins ?", r: "Financiers (reste à charge), géographiques (déserts médicaux), sociaux et culturels (information, langue, renoncement)." },
        { q: "Qu'est-ce que la complémentaire santé solidaire ?", r: "Depuis 2019, une complémentaire santé gratuite ou à faible coût pour les personnes aux revenus modestes." },
        { q: "Qu'est-ce qu'une PASS ?", r: "Une permanence d'accès aux soins de santé, à l'hôpital, qui soigne et accompagne les personnes en situation de précarité." },
        { q: "Quels droits la personne a-t-elle dans le système de soins ?", r: "Information, consentement libre et éclairé, accès à son dossier médical, personne de confiance, directives anticipées." },
        { q: "Quels sont les trois niveaux de prévention selon l'OMS ?", r: "Primaire (éviter la maladie), secondaire (la dépister tôt), tertiaire (limiter complications et rechutes)." },
        { q: "Qu'est-ce que la promotion de la santé ?", r: "Donner aux personnes les moyens d'agir sur leur santé (charte d'Ottawa, 1986) : environnements favorables, action communautaire." },
        { q: "Qu'est-ce que la veille sanitaire ?", r: "La surveillance continue de l'état de santé de la population pour détecter une menace et alerter les autorités." },
        { q: "Qui assure la veille sanitaire en France ?", r: "Santé publique France, avec les ARS, grâce notamment aux déclarations obligatoires et aux réseaux de médecins sentinelles." },
      ],
      quiz: [
        { q: "En quelle année le parcours de soins coordonnés avec médecin traitant est-il créé ?", choix: ["1996", "1945", "2004", "2016"], bonne: 2, expl: "La loi de 2004 sur l'assurance maladie crée le médecin traitant et le parcours de soins.", niv: 1 },
        { q: "Quel numéro permet la régulation médicale des urgences ?", choix: ["Le 15", "Le 18", "Le 17", "Le 119"], bonne: 0, expl: "Le 15 joint le SAMU. Le 17 est la police, le 18 les pompiers, le 119 l'enfance en danger.", niv: 1 },
        { q: "Un dépistage organisé du cancer du sein relève de la prévention :", choix: ["primaire", "secondaire", "tertiaire", "palliative"], bonne: 1, expl: "Dépister tôt une maladie déjà présente, c'est la prévention secondaire.", niv: 1 },
        { q: "Quel organisme assure la veille sanitaire nationale ?", choix: ["La DREES", "L'Assurance maladie", "Le Conseil départemental", "Santé publique France"], bonne: 3, expl: "Santé publique France surveille l'état de santé de la population et alerte les autorités.", niv: 1 },
        { q: "Une clinique appartenant à un groupe coté en Bourse est un établissement :", choix: ["public", "privé à but lucratif", "privé à but non lucratif", "médico-social"], bonne: 1, expl: "Elle cherche à dégager des bénéfices pour ses actionnaires : privé à but lucratif.", niv: 2 },
        { q: "Une personne sans domicile se présente à l'hôpital sans couverture maladie. Quel dispositif l'accueille ?", choix: ["La PASS", "Le médecin traitant", "La Haute Autorité de santé", "La complémentaire d'entreprise"], bonne: 0, expl: "Les permanences d'accès aux soins de santé soignent les personnes en précarité et les aident à ouvrir leurs droits.", niv: 2 },
        { q: "Un patient diabétique apprend à adapter son traitement avec une infirmière. C'est :", choix: ["de la veille sanitaire", "de l'éducation thérapeutique", "de la permanence des soins", "de la prévention primaire"], bonne: 1, expl: "L'éducation thérapeutique rend le patient acteur de la gestion de sa maladie chronique.", niv: 2 },
        { q: "Un médecin signale une méningite à l'ARS. Il participe :", choix: ["à la permanence des soins", "à la démocratie sanitaire", "au tiers payant", "à la veille sanitaire"], bonne: 3, expl: "Certaines maladies doivent être déclarées par les médecins : c'est un outil de la veille sanitaire.", niv: 2 },
        { q: "Quel obstacle à l'accès aux soins n'est **pas** financier ?", choix: ["Le reste à charge", "Les dépassements d'honoraires", "L'éloignement du premier médecin", "L'avance des frais"], bonne: 2, expl: "La distance est un obstacle géographique. Les trois autres touchent au coût des soins.", niv: 2 },
        { q: "Pourquoi le parcours de soins permet-il une prise en charge globale ?", choix: ["Le médecin traitant coordonne le suivi, la prévention et l'orientation", "Le patient ne peut plus consulter de spécialiste, même avec une orientation", "Le parcours rend les consultations gratuites pour les patients déclarés", "Il remplace l'hôpital"], bonne: 0, expl: "Le médecin traitant connaît le patient dans la durée et coordonne les différents professionnels.", niv: 3 },
        { q: "Comment la protection sociale réduit-elle les inégalités d'accès aux soins ?", choix: ["En imposant le même médecin à chaque patient", "En supprimant le reste à charge des ménages aisés grâce à une taxe sur les cliniques", "En fermant les cliniques privées", "En remboursant les soins de tous et en aidant les modestes à payer leur complémentaire"], bonne: 3, expl: "Remboursements, complémentaire santé solidaire et tiers payant diminuent le coût des soins pour ceux qui ont peu de moyens.", niv: 3 },
        { q: "Pourquoi les acteurs du système de soins sont-ils complémentaires sur un territoire ?", choix: ["Ils proposent les mêmes soins, ce qui permet au patient de choisir le moins cher", "L'hôpital assure la prise en charge du début à la fin, sans relais en ville", "Chacun intervient à une étape, de la ville à l'hôpital puis au domicile", "Les soins de ville ont disparu"], bonne: 2, expl: "Médecin traitant, hôpital, soins de suite et services à domicile assurent ensemble la continuité des soins.", niv: 3 },
      ],
    },
    {
      chapitre: 'st2s-stss-3',
      fiche: `## Des politiques sociales vers l'action sociale

### Qu'est-ce qu'une politique sociale ?
- Une **politique sociale** est l'ensemble des décisions et actions des pouvoirs publics pour **protéger** les personnes face aux risques de la vie, **réduire les inégalités** et renforcer la **cohésion sociale** (le lien qui unit les membres d'une société).
- Elle concerne la famille, le handicap, la vieillesse, le logement, l'emploi, la pauvreté et l'exclusion.
- Elle participe au **bien-être** des individus (revenu, logement, autonomie, participation sociale) et des **groupes** (familles, personnes âgées, jeunes).

### Une approche historique
- Avant 1945 : la **charité** (Église, œuvres) puis l'**assistance publique** (lois d'aide médicale gratuite de 1893, d'assistance aux vieillards de 1905).
- **1945** : la Sécurité sociale protège les travailleurs par l'**assurance**.
- **1975** : lois du 30 juin 1975 en faveur des **personnes handicapées** et sur les **institutions sociales et médico-sociales**.
- **1982-1983** : **décentralisation** : le **département** reçoit l'essentiel de l'aide sociale.
- **1988** : revenu minimum d'insertion (RMI), remplacé par le **revenu de solidarité active (RSA)** en **2009**.
- **1998** : loi d'orientation relative à la **lutte contre les exclusions** (accès aux droits fondamentaux : emploi, logement, santé).
- **2002** : loi du **2 janvier 2002** rénovant l'action sociale et médico-sociale : **droits des usagers** et outils pour les garantir (livret d'accueil, contrat de séjour, conseil de la vie sociale, projet d'établissement).
- **2004** : le département devient **chef de file** de l'action sociale.
- **2005** : loi du **11 février 2005** sur le handicap : droit à **compensation**, maisons départementales des personnes handicapées (**MDPH**), prestation de compensation du handicap.
- **2015** : loi d'adaptation de la société au vieillissement.
- Évolution : de l'**assistance** à l'**insertion**, puis à l'**inclusion** et à la **participation** des personnes.

### De l'identification d'un problème social à une politique sociale
- Un **problème social** est une situation jugée **inacceptable** par la société et qui appelle une réponse collective (pauvreté des enfants, isolement des personnes âgées, sans-abrisme).
- Étapes :
  - **émergence** : des faits sont observés, mesurés (statistiques, enquêtes) et dénoncés par des acteurs (associations, travailleurs sociaux, médias, chercheurs) ;
  - **mise à l'agenda** politique : les pouvoirs publics reconnaissent le problème ;
  - **décision** : loi, plan, stratégie nationale, avec des objectifs et des moyens ;
  - **mise en œuvre** par des dispositifs et des acteurs de terrain ;
  - **évaluation** des résultats, puis ajustement.

### Les caractéristiques des politiques sociales
- Elles peuvent être **universelles** (pour tous, comme les allocations familiales) ou **ciblées** (pour certaines catégories, sous conditions de ressources, comme le RSA).
- Elles versent des **prestations en espèces** (allocations) ou en **nature** (services, hébergement, accompagnement).
- Elles sont **territorialisées** : adaptées aux besoins d'un territoire.
- Elles reposent sur la **contractualisation** (contrats entre l'État, les collectivités et les associations ; contrat d'engagement avec l'allocataire) et le **partenariat**.
- Elles s'inscrivent aussi dans un cadre **européen** : traités, règlements, socle européen des droits sociaux, fonds social européen.

### L'action sociale
- L'**action sociale** regroupe les interventions qui visent à **aider** les personnes en difficulté, à **prévenir** les exclusions, à favoriser l'**autonomie** et la cohésion sociale (Code de l'action sociale et des familles).
- On distingue :
  - l'**aide sociale légale** : des prestations **obligatoires** fixées par la loi, versées sous conditions (protection de l'enfance, aide aux personnes âgées et handicapées, RSA) ;
  - l'**action sociale facultative** : des aides décidées librement par une collectivité ou un organisme (secours d'urgence d'une commune, aide aux vacances d'une caisse d'allocations familiales).
- Les acteurs :
  - l'**État** (lois, hébergement d'urgence, financement) ;
  - le **département**, chef de file (protection de l'enfance, autonomie, insertion) ;
  - la **commune**, par son **centre communal d'action sociale (CCAS)** ;
  - les **organismes de sécurité sociale** (caisses d'allocations familiales, caisses de retraite) ;
  - les **associations**, très nombreuses dans le secteur social ;
  - les **travailleurs sociaux** (assistants de service social, éducateurs spécialisés, conseillers en économie sociale et familiale).

### Une pluralité de financements
- **Impôts** de l'État et des collectivités (département surtout).
- **Cotisations** et contributions sociales (caisses d'allocations familiales, caisse nationale de solidarité pour l'autonomie).
- Fonds **européens**, **dons** et **bénévolat** pour les associations, participation des usagers parfois.

### La place de l'usager
- Autrefois simple **assisté**, l'usager est devenu **acteur** : il a des **droits** (information, libre choix, respect de sa dignité, participation), il participe à son accompagnement et à la vie des établissements (conseil de la vie sociale).
- Les politiques récentes cherchent à développer son **pouvoir d'agir** et sa **participation** à la construction des dispositifs.

### À retenir pour le bac
- Montrer comment une politique sociale agit sur le **bien-être** et la **cohésion sociale**.
- Illustrer la **pluralité des financements** et l'**évolution de la place de l'usager** (loi de 2002).`,
      cartes: [
        { q: "Qu'est-ce qu'une politique sociale ?", r: "L'ensemble des décisions et actions publiques pour protéger les personnes face aux risques de la vie, réduire les inégalités et renforcer la cohésion sociale." },
        { q: "Qu'est-ce que la cohésion sociale ?", r: "Le lien qui unit les membres d'une société : ils partagent des règles et des valeurs et se sentent solidaires." },
        { q: "Qu'est-ce qu'un problème social ?", r: "Une situation jugée inacceptable par la société, qui appelle une réponse collective (pauvreté, isolement, sans-abrisme)." },
        { q: "Quelles sont les étapes de l'élaboration d'une politique sociale ?", r: "Émergence du problème, mise à l'agenda, décision, mise en œuvre par des dispositifs, évaluation." },
        { q: "Quelle différence entre politique universelle et ciblée ?", r: "Universelle : pour tous (allocations familiales). Ciblée : pour certaines personnes, souvent sous conditions de ressources (RSA)." },
        { q: "Que change la décentralisation de 1982-1983 ?", r: "Le département reçoit l'essentiel de l'aide sociale ; il devient chef de file de l'action sociale en 2004." },
        { q: "Qu'apporte la loi du 2 janvier 2002 ?", r: "Elle rénove l'action sociale et médico-sociale et garantit les droits des usagers (livret d'accueil, contrat de séjour, conseil de la vie sociale)." },
        { q: "Qu'apporte la loi du 11 février 2005 ?", r: "Le droit à compensation du handicap, les MDPH et la prestation de compensation du handicap." },
        { q: "Qu'est-ce que l'action sociale ?", r: "Les interventions qui aident les personnes en difficulté, préviennent l'exclusion et favorisent l'autonomie et la cohésion sociale." },
        { q: "Quelle différence entre aide sociale légale et action sociale facultative ?", r: "L'aide sociale légale est obligatoire et fixée par la loi ; l'action sociale facultative est décidée librement par une collectivité ou un organisme." },
        { q: "Quel est le rôle du CCAS ?", r: "Le centre communal d'action sociale mène l'action sociale de la commune : aides, accueil, analyse des besoins sociaux." },
        { q: "Comment l'action sociale est-elle financée ?", r: "Par les impôts de l'État et des collectivités, les cotisations et contributions sociales, les fonds européens, les dons." },
        { q: "Comment a évolué la place de l'usager ?", r: "D'assisté, il est devenu acteur : il a des droits, participe à son accompagnement et à la vie des établissements." },
        { q: "Qu'est-ce que la contractualisation ?", r: "Le recours à des contrats entre l'État, les collectivités, les associations ou avec l'allocataire, qui fixent les engagements de chacun." },
      ],
      quiz: [
        { q: "En quelle année le RSA remplace-t-il le RMI ?", choix: ["1988", "1998", "2009", "2016"], bonne: 2, expl: "Le RMI date de 1988 ; le RSA le remplace en 2009.", niv: 1 },
        { q: "Quelle collectivité est chef de file de l'action sociale ?", choix: ["La région", "Le département", "La commune", "L'Union européenne"], bonne: 1, expl: "Le département gère l'essentiel de l'aide sociale depuis la décentralisation et en est chef de file depuis 2004.", niv: 1 },
        { q: "Quelle loi crée les maisons départementales des personnes handicapées ?", choix: ["La loi de 1975", "La loi du 2 janvier 2002", "La loi du 11 février 2005", "La loi de 1998"], bonne: 2, expl: "La loi de 2005 crée les MDPH et le droit à compensation du handicap.", niv: 1 },
        { q: "Quel organisme mène l'action sociale d'une commune ?", choix: ["La caisse primaire d'assurance maladie", "Le centre communal d'action sociale", "L'agence régionale de santé", "La maison départementale des personnes handicapées"], bonne: 1, expl: "Le CCAS met en œuvre l'action sociale municipale.", niv: 1 },
        { q: "Les allocations familiales versées à toutes les familles dès deux enfants relèvent d'une logique :", choix: ["ciblée sous condition de ressources", "d'action sociale facultative", "d'assistance individuelle", "universelle"], bonne: 3, expl: "Elles concernent toutes les familles concernées, quel que soit le revenu (seul leur montant varie avec les ressources).", niv: 2 },
        { q: "Une commune offre des colis alimentaires en plus des aides prévues par la loi. C'est :", choix: ["de l'action sociale facultative", "de l'aide sociale légale", "une prestation de sécurité sociale", "une politique européenne"], bonne: 0, expl: "La commune décide librement de cette aide : elle est facultative.", niv: 2 },
        { q: "Des associations alertent sur la hausse du nombre de familles à la rue, puis le gouvernement lance un plan. Cette étape s'appelle :", choix: ["l'évaluation", "la contractualisation", "la mise à l'agenda politique", "la décentralisation"], bonne: 2, expl: "Le problème est reconnu par les pouvoirs publics, qui décident d'agir.", niv: 2 },
        { q: "Dans un établissement social, résidents et familles donnent leur avis sur le fonctionnement au sein :", choix: ["de l'agence régionale de santé", "de la commission des usagers de l'hôpital", "du conseil municipal", "du conseil de la vie sociale"], bonne: 3, expl: "Le conseil de la vie sociale, prévu par la loi de 2002, fait participer les usagers.", niv: 2 },
        { q: "Quelle source ne finance **pas** l'action sociale ?", choix: ["Les bénéfices reversés par les hôpitaux publics", "Les cotisations versées aux caisses d'allocations familiales", "Les fonds européens", "Les impôts du département"], bonne: 0, expl: "Les hôpitaux publics ne financent pas l'action sociale. Impôts, cotisations, fonds européens et dons, oui.", niv: 2 },
        { q: "Comment une politique sociale participe-t-elle à la cohésion sociale ?", choix: ["En réservant ses aides aux salariés", "En réduisant les aides aux familles pour financer celles des personnes âgées", "En confiant les décisions aux associations", "En réduisant les inégalités et en évitant que des personnes soient exclues"], bonne: 3, expl: "En protégeant les plus fragiles et en favorisant leur participation, elle maintient le lien entre les membres de la société.", niv: 3 },
        { q: "Quelle évolution des politiques sociales est la plus juste ?", choix: ["De l'assistance vers l'insertion, puis l'inclusion et la participation", "De l'inclusion vers la charité", "De l'assurance sociale vers la charité privée, puis vers l'aide des familles", "Elles n'ont pas changé depuis 1945"], bonne: 0, expl: "On passe d'une logique d'aide aux pauvres à l'insertion (RMI), puis à l'inclusion et au pouvoir d'agir des personnes.", niv: 3 },
        { q: "Pourquoi dit-on que l'usager est devenu acteur dans les politiques sociales ?", choix: ["Il finance les dispositifs par ses cotisations et choisit les travailleurs sociaux", "Il a des droits et participe à son accompagnement et aux instances", "Il remplace les travailleurs sociaux", "Il vote les lois sociales"], bonne: 1, expl: "La loi de 2002 lui donne des droits et des outils de participation (contrat de séjour, conseil de la vie sociale).", niv: 3 },
      ],
    },
    {
      chapitre: 'st2s-stss-4',
      fiche: `## Étude de dispositifs : lutter contre la précarité, la pauvreté et l'exclusion

### Des notions à distinguer
- La **précarité** est l'absence d'une ou plusieurs sécurités (emploi stable, revenu, logement) qui empêche de faire face à ses obligations et de jouir de ses droits ; elle peut mener à la pauvreté.
- La **pauvreté monétaire** : en France, une personne est pauvre si son niveau de vie est inférieur à **60 % du niveau de vie médian** (définition de l'INSEE).
- L'**exclusion sociale** est la rupture des liens sociaux et l'éloignement durable des droits (emploi, logement, santé, participation à la vie sociale).
- L'**insertion** est le processus qui permet à une personne de retrouver une place dans la société, par l'emploi, le logement, les liens sociaux.

### Analyser un dispositif
- Un **dispositif** est un ensemble organisé de moyens, d'acteurs et d'actions mis en place pour répondre à un problème social dans le cadre d'une politique.
- Pour l'analyser :
  - le **périmètre** : quelle **population** (public cible), quelles **missions**, quels **objectifs** ;
  - les **modalités d'intervention** : accueil, accompagnement individuel, actions collectives, « **aller vers** » (maraudes, permanences dans les quartiers), intervention **avec** les publics et pas seulement **pour** eux ;
  - les **acteurs** : qui porte le dispositif, qui finance, qui intervient ; leur **partenariat** et leur **complémentarité** ;
  - la **participation** de la population ;
  - le **cadre institutionnel** (loi, décret, plan) et le **financement**.

### Exemples de dispositifs
- **Le revenu de solidarité active (RSA)** : un revenu minimum versé par la caisse d'allocations familiales, financé par le **département**, avec un **accompagnement** vers l'emploi et un **contrat d'engagement** réciproque. Depuis la loi pour le plein emploi (2023), les allocataires sont inscrits à **France Travail** et suivent un accompagnement renforcé.
- **L'insertion par l'activité économique (IAE)** : des structures (ateliers et chantiers d'insertion, entreprises d'insertion, associations intermédiaires) embauchent des personnes **très éloignées de l'emploi** et leur offrent un **travail** et un **accompagnement social et professionnel**. L'État verse des aides au poste ; le département, France Travail et les entreprises du territoire sont partenaires (sujet Polynésie 2025).
- **L'hébergement d'urgence** : le **115**, le **service intégré d'accueil et d'orientation (SIAO)** qui oriente vers une place, les centres d'hébergement et de réinsertion sociale (**CHRS**), les accueils de jour, les maraudes. Pilotage par l'**État**, mise en œuvre par des associations.
- **L'aide alimentaire** : associations (Restos du cœur, créés en 1985, Banques alimentaires, Secours populaire), épiceries sociales, avec des fonds publics et européens et le travail de **bénévoles**.
- **L'habitat inclusif** (loi ÉLAN de 2018) : des logements ordinaires, partagés par quelques personnes âgées ou handicapées, avec un **projet de vie sociale et partagée** ; un animateur est financé par l'**aide à la vie partagée** versée par le département (sujet métropole 2026).
- **La domiciliation** : une adresse administrative pour les personnes sans domicile, afin d'ouvrir leurs droits.

### Le diagnostic des besoins sociaux sur un territoire
- Avant de concevoir une politique locale ou un dispositif, on réalise un **diagnostic** : qui sont les habitants, quels sont leurs besoins, quelles réponses existent déjà, quels manques.
- Les **CCAS** doivent réaliser une **analyse des besoins sociaux** de leur commune dans l'année qui suit chaque élection municipale.
- Sources : données de l'INSEE et des caisses d'allocations familiales, enquêtes auprès des habitants, entretiens avec les professionnels et les associations.
- Intérêt : adapter les actions aux **besoins réels**, éviter les doublons, repérer les publics « invisibles », fixer des priorités et justifier les financements.

### Partenariat et complémentarité
- Aucun acteur ne peut répondre seul à l'exclusion, qui touche plusieurs domaines à la fois (revenu, emploi, logement, santé, liens sociaux).
- Le **partenariat** associe l'État, le département, la commune, les caisses de sécurité sociale, France Travail, les associations, les bailleurs sociaux, les entreprises. Chacun apporte son **financement**, ses **compétences** ou ses **locaux**.
- Il se formalise par des **conventions**, des comités de pilotage, des appels à projets.
- Le **travail social** assure l'accompagnement global de la personne et la coordination des aides.

### Les limites
- **Non-recours** aux droits : une partie des personnes éligibles ne demande pas les aides (méconnaissance, complexité, peur d'être stigmatisé).
- Complexité et cloisonnement des dispositifs, places insuffisantes (hébergement), financements instables des associations.

### À retenir pour le bac
- Pour **analyser un dispositif**, suivre la grille : public, missions, objectifs, modalités, acteurs, partenariat, participation, cadre, financement.
- Sujet tombé : « Montrer comment les acteurs du dispositif de l'insertion par l'activité économique se complètent pour favoriser l'insertion sociale des personnes en difficultés » (Polynésie 2025).`,
      cartes: [
        { q: "Qu'est-ce que la précarité ?", r: "L'absence d'une ou plusieurs sécurités (emploi stable, revenu, logement) qui empêche de faire face à ses obligations ; elle peut mener à la pauvreté." },
        { q: "Comment l'INSEE définit-il la pauvreté monétaire ?", r: "Un niveau de vie inférieur à 60 % du niveau de vie médian." },
        { q: "Qu'est-ce que l'exclusion sociale ?", r: "La rupture des liens sociaux et l'éloignement durable des droits : emploi, logement, santé, participation." },
        { q: "Qu'est-ce que l'insertion ?", r: "Le processus qui permet à une personne de retrouver une place dans la société par l'emploi, le logement et les liens sociaux." },
        { q: "Quels éléments analyser dans un dispositif ?", r: "Public, missions, objectifs, modalités d'intervention, acteurs et partenariat, participation, cadre institutionnel, financement." },
        { q: "Qu'est-ce que l'« aller vers » ?", r: "Aller à la rencontre des personnes là où elles sont (maraudes, permanences), au lieu d'attendre qu'elles viennent." },
        { q: "Qui finance le RSA ?", r: "Le département. Il est versé par la caisse d'allocations familiales, avec un accompagnement vers l'emploi." },
        { q: "Qu'est-ce que l'insertion par l'activité économique ?", r: "Des structures qui embauchent des personnes très éloignées de l'emploi et leur offrent un travail et un accompagnement social et professionnel." },
        { q: "Qu'est-ce que le SIAO ?", r: "Le service intégré d'accueil et d'orientation : il recense les places d'hébergement et oriente les personnes sans abri, notamment via le 115." },
        { q: "Qu'est-ce qu'un CHRS ?", r: "Un centre d'hébergement et de réinsertion sociale : il héberge et accompagne des personnes en difficulté vers l'autonomie." },
        { q: "Qu'est-ce que l'habitat inclusif ?", r: "Des logements ordinaires partagés par quelques personnes âgées ou handicapées, avec un projet de vie sociale et partagée (loi ÉLAN, 2018)." },
        { q: "Qu'est-ce que l'analyse des besoins sociaux ?", r: "Le diagnostic des besoins de la population que chaque CCAS réalise dans l'année qui suit chaque élection municipale." },
        { q: "Pourquoi un partenariat est-il nécessaire contre l'exclusion ?", r: "L'exclusion touche plusieurs domaines à la fois ; chaque acteur apporte financement, compétences ou locaux." },
        { q: "Qu'est-ce que le non-recours ?", r: "Le fait que des personnes éligibles ne demandent pas les aides : méconnaissance, complexité, peur d'être stigmatisé." },
      ],
      quiz: [
        { q: "Selon l'INSEE, le seuil de pauvreté monétaire correspond à :", choix: ["60 % du niveau de vie médian", "50 % du SMIC", "40 % du revenu moyen des ménages", "Le montant du RSA"], bonne: 0, expl: "Est pauvre une personne dont le niveau de vie est inférieur à 60 % du niveau de vie médian.", niv: 1 },
        { q: "Quel numéro d'urgence permet de demander un hébergement pour une personne sans abri ?", choix: ["Le 15", "Le 115", "Le 119", "Le 3919"], bonne: 1, expl: "Le 115 est le numéro de l'urgence sociale. Le 15 est le SAMU, le 119 l'enfance en danger, le 3919 les violences faites aux femmes.", niv: 1 },
        { q: "Quelle collectivité finance le RSA ?", choix: ["La région", "Le département", "La commune", "L'Union européenne"], bonne: 1, expl: "Le département finance le RSA ; la caisse d'allocations familiales le verse.", niv: 1 },
        { q: "Quelle loi définit l'habitat inclusif ?", choix: ["La loi de 1975", "La loi du 2 janvier 2002", "La loi ÉLAN de 2018", "La loi de 1998"], bonne: 2, expl: "La loi ÉLAN du 23 novembre 2018 définit l'habitat inclusif.", niv: 1 },
        { q: "Des travailleurs sociaux vont chaque soir à la rencontre des personnes qui dorment dans la rue. C'est :", choix: ["un contrat d'engagement", "une action sociale légale", "une analyse des besoins sociaux", "une démarche d'« aller vers »"], bonne: 3, expl: "La maraude va au-devant des personnes qui ne demandent plus d'aide.", niv: 2 },
        { q: "Un chantier d'insertion embauche des chômeurs de longue durée pour rénover des sentiers, avec un accompagnement social. Il relève :", choix: ["de l'hébergement d'urgence", "de l'insertion par l'activité économique", "de la protection de l'enfance", "de l'aide médicale de l'État"], bonne: 1, expl: "Travail et accompagnement pour des personnes éloignées de l'emploi : c'est l'IAE.", niv: 2 },
        { q: "Un CCAS interroge les habitants et analyse les données de la caisse d'allocations familiales avant de créer une épicerie sociale. Il réalise :", choix: ["une évaluation finale", "un contrat de séjour", "un diagnostic des besoins sociaux", "une veille sanitaire"], bonne: 2, expl: "Le diagnostic permet de vérifier le besoin et d'adapter l'action au territoire.", niv: 2 },
        { q: "Dans un habitat inclusif, qui finance l'animateur du projet de vie sociale ?", choix: ["Les habitants, par une cotisation versée à la commune", "L'Assurance maladie", "L'Union européenne", "Le département, par l'aide à la vie partagée"], bonne: 3, expl: "L'aide à la vie partagée est versée par le conseil départemental au porteur du projet.", niv: 2 },
        { q: "Quel élément n'entre **pas** dans l'analyse d'un dispositif ?", choix: ["Le public visé", "Les acteurs, leur statut et le partenariat qui les relie", "Les opinions politiques des bénéficiaires", "Le financement"], bonne: 2, expl: "On analyse public, missions, objectifs, modalités, acteurs, cadre et financement, jamais les opinions des personnes.", niv: 2 },
        { q: "Pourquoi les acteurs de l'insertion par l'activité économique sont-ils complémentaires ?", choix: ["L'État finance, les structures accompagnent, les entreprises recrutent ensuite", "Les entreprises financent les salaires et les structures recrutent ensuite les salariés", "L'association intervient sans partenaire", "France Travail verse le salaire des salariés en insertion"], bonne: 0, expl: "Chacun apporte une ressource différente : financement, emploi, accompagnement, débouchés.", niv: 3 },
        { q: "Pourquoi le non-recours aux droits est-il une limite des politiques de lutte contre la pauvreté ?", choix: ["Les aides sont versées en trop grand nombre", "Il augmente le nombre de places d'hébergement et le coût des aides pour l'État", "Il supprime les associations", "Des personnes éligibles restent sans aide et leur situation s'aggrave"], bonne: 3, expl: "Méconnaissance, complexité ou peur du regard des autres privent des personnes de droits qui pourraient les aider.", niv: 3 },
        { q: "Comment l'habitat inclusif favorise-t-il les liens sociaux ?", choix: ["Il combine logement privé, espaces partagés et ouverture sur le quartier", "Il impose une vie collective obligatoire", "Il installe chaque habitant dans une chambre d'un établissement fermé au public", "Il remplace la famille"], bonne: 0, expl: "Les habitants gardent leur chez-soi mais partagent des activités et participent à la vie locale.", niv: 3 },
      ],
    },
    {
      chapitre: 'st2s-stss-5',
      fiche: `## La démarche de projet (1) : contexte, étude et conception

### Qu'est-ce qu'un projet en santé et social ?
- Un **projet** est un ensemble d'**actions coordonnées**, limité dans le **temps**, qui mobilise des **ressources** pour atteindre un **objectif** : améliorer la santé ou le bien-être d'une population.
- Exemples : un programme de prévention du diabète dans un quartier, la création d'une épicerie sociale, un atelier mémoire pour des personnes âgées, une action contre le harcèlement au collège.
- La **démarche de projet** suit quatre **phases** : l'**étude**, la **conception du plan d'actions**, la **mise en œuvre** et l'**évaluation**.

### Les spécificités du secteur sanitaire et social
- Le public est souvent **vulnérable** (malades, personnes âgées, en situation de handicap, en précarité) : il faut le respecter, ne pas le stigmatiser, recueillir son **consentement**.
- Le projet s'inscrit dans un **cadre juridique et politique** : lois, plans nationaux, projet régional de santé, contrat local de santé, priorités d'un département.
- Il obéit à une **éthique** et à une **déontologie** : secret professionnel, confidentialité des données, respect de la dignité.
- Il associe de nombreux **partenaires** et dépend souvent de **financements publics** obtenus par des **appels à projets**.
- La **population cible** doit être associée à toutes les phases.

### Le projet dans son contexte
- Identifier le **contexte** : le territoire (quartier, commune, établissement), le problème de santé ou social, les politiques en lien, les ressources existantes.
- Repérer les acteurs :
  - le **commanditaire** (qui demande le projet), le **porteur** (qui le mène), les **partenaires** (qui apportent compétences et moyens), les **financeurs** ;
  - le **comité de pilotage** : il prend les décisions importantes, valide les choix et suit l'avancement ;
  - le **coordinateur** ou chef de projet : il organise et fait le lien entre les acteurs.
- Repérer les **contraintes** : budget, délais, réglementation, disponibilité des professionnels et du public.

### Phase 1 : l'étude (le diagnostic)
- L'**étude** permet de comprendre la situation avant d'agir. Elle aboutit à un **diagnostic** : état de santé ou situation sociale de la population, **besoins** (exprimés ou non), **ressources** du territoire, **problèmes prioritaires**.
- Méthodes de recueil :
  - la **recherche documentaire** dans des sources fiables (Santé publique France, DREES, INSEE, observatoires régionaux de santé) ;
  - l'**enquête par questionnaire** : beaucoup de personnes, des réponses chiffrées, mais peu de nuances ;
  - l'**entretien** : peu de personnes, des réponses riches et détaillées ;
  - l'**observation** sur le terrain.
- On distingue données **quantitatives** (chiffres, taux) et **qualitatives** (opinions, vécu).
- L'étude **justifie** le projet : elle montre que le besoin existe, aide à choisir les priorités et le public, et sert de **point de départ** pour mesurer plus tard les effets.

### Phase 2 : la conception du plan d'actions
- Fixer les **objectifs** :
  - l'**objectif général** : le but à long terme (réduire l'isolement des personnes âgées de la commune) ;
  - les **objectifs spécifiques** : des étapes pour l'atteindre (créer des occasions de rencontre) ;
  - les **objectifs opérationnels** : des actions précises, **mesurables** et **datées** (organiser deux ateliers par semaine d'ici septembre).
- Choisir les **actions** adaptées au public et aux ressources.
- Élaborer le **plan d'actions** : qui fait quoi, quand, avec quels moyens humains, matériels et financiers.
- Établir un **calendrier** (souvent un diagramme de Gantt) et un **budget** prévisionnel.
- Prévoir dès le départ les **critères** et les **indicateurs** de l'évaluation.

### Construire un corpus documentaire
- Rassembler des documents **fiables**, **récents** et **variés** (textes officiels, statistiques, études, témoignages) pour appuyer l'analyse.
- Vérifier la **source** (auteur, organisme, date), la **pertinence** et croiser les informations.

### À retenir pour le bac
- Citer les **quatre phases** dans l'ordre et dire à quoi sert chacune.
- **Justifier l'apport de l'étude** : sans diagnostic, l'action risque de ne pas répondre au vrai besoin.`,
      cartes: [
        { q: "Qu'est-ce qu'un projet en santé et social ?", r: "Un ensemble d'actions coordonnées, limité dans le temps, qui mobilise des ressources pour améliorer la santé ou le bien-être d'une population." },
        { q: "Quelles sont les quatre phases de la démarche de projet ?", r: "L'étude, la conception du plan d'actions, la mise en œuvre et l'évaluation." },
        { q: "Quelles sont les spécificités d'un projet en santé et social ?", r: "Un public souvent vulnérable, un cadre juridique et politique, une éthique et une déontologie, de nombreux partenaires, des financements publics." },
        { q: "Quelle différence entre commanditaire et porteur de projet ?", r: "Le commanditaire demande le projet ; le porteur le conduit et en est responsable." },
        { q: "Quel est le rôle du comité de pilotage ?", r: "Il prend les décisions importantes, valide les choix et suit l'avancement du projet." },
        { q: "Qu'est-ce qu'une contrainte dans un projet ?", r: "Une limite à respecter : budget, délais, réglementation, disponibilité des acteurs et du public." },
        { q: "À quoi sert la phase d'étude ?", r: "À établir un diagnostic : besoins, ressources, problèmes prioritaires. Elle justifie le projet et sert de point de départ à l'évaluation." },
        { q: "Quels sont les avantages et limites du questionnaire ?", r: "Il touche beaucoup de personnes et donne des chiffres, mais offre peu de nuances." },
        { q: "Quels sont les avantages et limites de l'entretien ?", r: "Il donne des réponses riches et détaillées, mais auprès de peu de personnes et avec plus de temps." },
        { q: "Quelle différence entre données quantitatives et qualitatives ?", r: "Quantitatives : des chiffres, des taux. Qualitatives : des opinions, des ressentis, des récits." },
        { q: "Quelle différence entre objectif général et objectif opérationnel ?", r: "L'objectif général est le but à long terme ; l'objectif opérationnel est une action précise, mesurable et datée." },
        { q: "Que contient un plan d'actions ?", r: "Les actions, les responsables, le calendrier, les moyens humains, matériels et financiers." },
        { q: "À quoi sert un diagramme de Gantt ?", r: "À planifier les actions dans le temps et visualiser leur durée et leur enchaînement." },
        { q: "Quelles qualités doit avoir un corpus documentaire ?", r: "Des documents fiables, récents, variés et pertinents, dont on vérifie la source et qu'on croise entre eux." },
      ],
      quiz: [
        { q: "Quelle est la première phase de la démarche de projet ?", choix: ["La mise en œuvre", "L'étude", "L'évaluation", "La valorisation"], bonne: 1, expl: "On commence par l'étude (diagnostic), puis la conception, la mise en œuvre et l'évaluation.", niv: 1 },
        { q: "Quel acteur valide les grandes décisions d'un projet ?", choix: ["Le journaliste local", "Le public cible", "Le financeur européen", "Le comité de pilotage"], bonne: 3, expl: "Le comité de pilotage décide, valide et suit l'avancement.", niv: 1 },
        { q: "Quel outil sert à planifier les actions dans le temps ?", choix: ["Le questionnaire", "Le diagnostic", "La grille d'entretien", "Le diagramme de Gantt"], bonne: 3, expl: "Le diagramme de Gantt représente les actions et leur durée sur un calendrier.", niv: 1 },
        { q: "Quelle méthode permet de recueillir l'avis de 400 lycéens rapidement et en chiffres ?", choix: ["Le questionnaire", "L'observation", "L'entretien individuel", "Le récit de vie"], bonne: 0, expl: "Le questionnaire touche beaucoup de personnes et donne des données quantitatives.", niv: 1 },
        { q: "« Organiser deux ateliers d'équilibre par semaine à la résidence d'ici septembre » est un objectif :", choix: ["spécifique", "général", "opérationnel", "politique"], bonne: 2, expl: "Il est précis, mesurable et daté : c'est un objectif opérationnel.", niv: 2 },
        { q: "Une mairie demande à une association de mener une action contre l'isolement. La mairie est :", choix: ["le porteur", "le public cible", "le coordinateur", "le commanditaire"], bonne: 3, expl: "Elle demande le projet ; l'association, qui le mène, en est le porteur.", niv: 2 },
        { q: "Pour comprendre le vécu de quelques aidants familiaux épuisés, la méthode la plus adaptée est :", choix: ["un questionnaire à choix multiples", "des entretiens", "un comptage des passages", "l'analyse de statistiques nationales"], bonne: 1, expl: "L'entretien permet de recueillir des réponses riches et nuancées auprès de peu de personnes.", niv: 2 },
        { q: "Quelle source est la plus fiable pour connaître l'état de santé d'une population ?", choix: ["Un forum de discussion", "Une publicité pour un complément alimentaire", "Une publication de Santé publique France", "Une vidéo sans auteur"], bonne: 2, expl: "Un organisme public d'expertise, identifié et daté, est une source fiable.", niv: 2 },
        { q: "Quel élément n'est **pas** une spécificité d'un projet en santé et social ?", choix: ["Un public souvent vulnérable", "La recherche du profit maximal", "L'inscription dans une politique de santé ou sociale", "Le respect du secret professionnel"], bonne: 1, expl: "Le but est d'améliorer la santé ou le bien-être, pas de faire du profit.", niv: 2 },
        { q: "Pourquoi l'étude est-elle indispensable à la démarche de projet ?", choix: ["Elle montre le vrai besoin et sert de point de départ pour mesurer les effets", "Elle remplace l'évaluation", "Elle fixe le salaire des intervenants", "Elle permet de choisir les partenaires avant même de connaître le problème"], bonne: 0, expl: "Sans diagnostic, l'action risque de manquer sa cible, et on ne peut pas mesurer ce qui a changé.", niv: 3 },
        { q: "Pourquoi prévoir les indicateurs d'évaluation dès la conception ?", choix: ["Pour savoir dès le départ ce qu'on mesurera et recueillir les bonnes données", "Parce que la loi interdit d'évaluer un projet une fois que les actions ont commencé", "Pour supprimer la phase d'étude", "Pour ne pas avoir de budget"], bonne: 0, expl: "Des indicateurs fixés tôt permettent de comparer l'avant et l'après.", niv: 3 },
        { q: "Pourquoi le cadre politique compte-t-il dans un projet de santé ?", choix: ["Il oblige le projet à être gratuit pour le public et à durer au moins cinq années", "Il est sans effet sur les projets", "Le projet s'inscrit dans des priorités qui conditionnent soutien et financement", "Le cadre interdit les partenariats avec les associations"], bonne: 2, expl: "Un projet cohérent avec le projet régional de santé ou un plan national obtient plus facilement des financements.", niv: 3 },
      ],
    },
    {
      chapitre: 'st2s-stss-6',
      fiche: `## La démarche de projet (2) : mise en œuvre, évaluation et population cible

### Phase 3 : la mise en œuvre
- C'est la réalisation des actions prévues dans le plan d'actions.
- Elle demande :
  - la **coordination** des acteurs : chacun sait ce qu'il fait et quand ; réunions régulières ;
  - le **pilotage** : suivre l'avancement avec un **tableau de bord** (actions réalisées, budget dépensé, participation), comparer au prévu ;
  - la **communication** : informer le public (affiches, réseaux, relais de proximité) et les partenaires ;
  - l'**ajustement** : adapter le projet si un obstacle apparaît (faible participation, retard, imprévu).
- Le **respect du calendrier** et du **budget** est une contrainte forte.

### Phase 4 : l'évaluation
- **Évaluer**, c'est porter un jugement sur la valeur d'une action en comparant ce qui a été obtenu à ce qui était prévu, à partir d'informations recueillies.
- Les moments de l'évaluation :
  - **avant** (évaluation initiale ou ex ante), grâce au diagnostic ;
  - **pendant** (évaluation en cours ou formative), pour réajuster ;
  - **à la fin** (évaluation finale ou sommative), pour mesurer les résultats ;
  - **après** (ex post), pour mesurer les effets durables.
- Ce qu'on évalue :
  - le **processus** : les actions ont-elles été réalisées comme prévu ? (nombre de séances, participation, respect des délais) ;
  - les **résultats** : les objectifs sont-ils atteints ? ;
  - l'**impact** : les effets à plus long terme sur la santé ou le bien-être, y compris les effets inattendus.
- Les **critères** (ce que l'on juge) :
  - la **pertinence** : l'action répond-elle au besoin ?
  - l'**efficacité** : les objectifs sont-ils atteints ?
  - l'**efficience** : les résultats sont-ils obtenus à un coût raisonnable ?
  - la **cohérence** : les actions et moyens sont-ils adaptés aux objectifs ?
  - la **satisfaction** du public.
- Les **indicateurs** (ce que l'on mesure) :
  - **quantitatifs** : nombre de participants, taux de dépistage, nombre de personnes relogées ;
  - **qualitatifs** : satisfaction exprimée, sentiment d'isolement, autonomie ressentie.
- Outils : questionnaires avant et après, fiches de présence, entretiens, observation.

### La valorisation
- **Valoriser**, c'est faire connaître le projet et ses résultats : rapport d'activité, article, présentation aux financeurs, aux élus et au public.
- Intérêt : rendre compte de l'argent public utilisé, obtenir de nouveaux financements, **pérenniser** l'action, la **reproduire** ailleurs.

### La place de la population cible
- La **population cible** est le groupe de personnes à qui s'adresse le projet. On distingue les **bénéficiaires directs** (les participants) et **indirects** (familles, entourage, professionnels).
- Sa **participation** à toutes les phases est essentielle :
  - pendant l'**étude**, elle exprime ses besoins (questionnaires, entretiens, réunions) ;
  - pendant la **conception**, elle donne son avis sur les actions ;
  - pendant la **mise en œuvre**, elle peut animer ou relayer (pairs, bénévoles) ;
  - pendant l'**évaluation**, elle dit ce que le projet a changé pour elle.
- Avantages : des actions **adaptées** à ses besoins réels, une meilleure **adhésion**, moins de stigmatisation, un renforcement de son **pouvoir d'agir** (capacité à agir sur sa propre situation). C'est le principe de la **santé communautaire**.
- Limites : le public le plus fragile participe moins ; la participation demande du temps et un accompagnement.

### Éthique et déontologie dans l'action
- Recueillir le **consentement** des participants, garantir la **confidentialité** des données, respecter la **dignité** et éviter toute **stigmatisation**.

### À retenir pour le bac
- Ne pas confondre **critère** (efficacité) et **indicateur** (taux de participation).
- Distinguer évaluation du **processus** et des **résultats**.
- Montrer l'intérêt de la **participation** du public à chaque phase.`,
      cartes: [
        { q: "Que demande la mise en œuvre d'un projet ?", r: "La coordination des acteurs, le pilotage avec un tableau de bord, la communication et l'ajustement en cas d'obstacle." },
        { q: "Qu'est-ce qu'un tableau de bord de projet ?", r: "Un outil de suivi qui compare le réalisé au prévu : actions, budget, participation, délais." },
        { q: "Qu'est-ce qu'évaluer un projet ?", r: "Porter un jugement sur la valeur d'une action en comparant ce qui est obtenu à ce qui était prévu." },
        { q: "Quels sont les moments de l'évaluation ?", r: "Avant (initiale), pendant (en cours ou formative), à la fin (finale ou sommative), après (effets durables)." },
        { q: "Quelle différence entre évaluation du processus et des résultats ?", r: "Le processus : les actions ont-elles été réalisées comme prévu ? Les résultats : les objectifs sont-ils atteints ?" },
        { q: "Qu'est-ce que l'impact d'un projet ?", r: "Ses effets à plus long terme sur la santé ou le bien-être, y compris les effets inattendus." },
        { q: "Quelle différence entre efficacité et efficience ?", r: "Efficacité : les objectifs sont atteints. Efficience : ils le sont à un coût raisonnable." },
        { q: "Qu'est-ce que la pertinence d'une action ?", r: "Le fait qu'elle réponde bien au besoin identifié dans le diagnostic." },
        { q: "Quelle différence entre critère et indicateur ?", r: "Le critère est ce que l'on juge (efficacité) ; l'indicateur est ce que l'on mesure (taux de participation)." },
        { q: "Donner un indicateur quantitatif et un qualitatif.", r: "Quantitatif : nombre de participants. Qualitatif : satisfaction exprimée par les participants." },
        { q: "Qu'est-ce que valoriser un projet ?", r: "Faire connaître le projet et ses résultats pour rendre compte, obtenir des financements, le pérenniser ou le reproduire." },
        { q: "Quelle différence entre bénéficiaires directs et indirects ?", r: "Directs : les participants. Indirects : leur entourage, leurs familles, les professionnels." },
        { q: "Pourquoi faire participer la population cible ?", r: "Des actions adaptées aux vrais besoins, une meilleure adhésion, moins de stigmatisation et plus de pouvoir d'agir." },
        { q: "Qu'est-ce que le pouvoir d'agir ?", r: "La capacité des personnes à agir sur leur propre situation et sur ce qui les concerne." },
      ],
      quiz: [
        { q: "Quelle est la dernière phase de la démarche de projet ?", choix: ["L'étude", "L'évaluation", "La mise en œuvre", "La conception"], bonne: 1, expl: "L'évaluation termine la démarche ; elle peut ensuite relancer un nouveau projet.", niv: 1 },
        { q: "Le nombre de personnes venues aux ateliers est :", choix: ["un critère", "un objectif général", "un indicateur quantitatif", "un indicateur qualitatif"], bonne: 2, expl: "C'est une mesure chiffrée : un indicateur quantitatif.", niv: 1 },
        { q: "Une évaluation menée pendant le projet pour le réajuster est une évaluation :", choix: ["finale", "en cours (formative)", "initiale", "ex post"], bonne: 1, expl: "Elle a lieu pendant l'action pour corriger ce qui ne va pas.", niv: 1 },
        { q: "Les résultats ont été atteints avec un budget deux fois plus faible que prévu. Le projet est :", choix: ["pertinent", "incohérent", "inefficace", "efficient"], bonne: 3, expl: "Obtenir les résultats à moindre coût, c'est l'efficience.", niv: 2 },
        { q: "Une action de prévention répond exactement au besoin repéré dans le diagnostic. Elle est :", choix: ["efficiente", "rentable", "pertinente", "obligatoire"], bonne: 2, expl: "La pertinence mesure l'adéquation entre l'action et le besoin.", niv: 2 },
        { q: "Seules 6 personnes viennent au premier atelier au lieu de 20. Que doit faire le coordinateur ?", choix: ["Arrêter le projet et rendre les financements aux partenaires du quartier", "Attendre la fin pour en parler", "Analyser les raisons et ajuster la communication ou les horaires", "Supprimer l'évaluation"], bonne: 2, expl: "Le pilotage permet de réajuster pendant la mise en œuvre.", niv: 2 },
        { q: "Les jeunes d'un quartier animent eux-mêmes des séances de prévention auprès d'autres jeunes. C'est :", choix: ["de l'évaluation ex post", "une intervention par les pairs, qui fait participer la population cible", "un comité de pilotage", "un indicateur qualitatif recueilli par questionnaire auprès des jeunes du quartier"], bonne: 1, expl: "La population cible participe à la mise en œuvre : son message est mieux reçu par les autres jeunes.", niv: 2 },
        { q: "Les parents des enfants participant à un atelier nutrition sont :", choix: ["des bénéficiaires indirects", "les commanditaires", "le comité de pilotage", "des financeurs"], bonne: 0, expl: "Ils profitent indirectement de l'action, par ce que les enfants rapportent à la maison.", niv: 2 },
        { q: "Quel élément ne relève **pas** de l'évaluation du processus ?", choix: ["Le recul du diabète dans le quartier cinq ans après", "Le respect du calendrier", "Le nombre de séances réalisées", "Le taux de participation des habitants aux ateliers de cuisine"], bonne: 0, expl: "La baisse du diabète des années plus tard relève de l'impact, pas du processus.", niv: 2 },
        { q: "Pourquoi associer la population cible dès l'étude ?", choix: ["Pour éviter de fixer des objectifs", "Pour réduire le nombre de partenaires et le budget du projet de moitié", "Parce qu'elle finance le projet", "Pour connaître ses besoins réels et favoriser son adhésion"], bonne: 3, expl: "Elle est la mieux placée pour dire ce dont elle a besoin ; associée tôt, elle adhère davantage.", niv: 3 },
        { q: "Pourquoi la valorisation est-elle utile à la fin d'un projet ?", choix: ["Elle aide à pérenniser l'action et à obtenir de nouveaux financements", "Elle remplace l'évaluation", "Elle est interdite pour les projets publics", "Elle sert à la publicité d'une entreprise qui finance une partie du projet"], bonne: 0, expl: "Faire connaître les résultats permet de rendre compte aux financeurs et de prolonger ou reproduire l'action.", niv: 3 },
        { q: "Quelle limite de la participation du public est la plus souvent relevée ?", choix: ["La participation rend le projet moins adapté aux besoins du public", "Elle est interdite par l'éthique", "Elle supprime le rôle des professionnels", "Les personnes les plus fragiles y prennent moins part"], bonne: 3, expl: "Participer demande du temps, de la confiance et un accompagnement : les plus isolés sont souvent absents.", niv: 3 },
      ],
    },
    {
      chapitre: 'st2s-stss-7',
      fiche: `## Notions de première à mobiliser : santé, déterminants, inégalités et protection sociale

### Pourquoi ce chapitre ?
- L'épreuve porte sur le programme de terminale, mais les **notions de première peuvent être mobilisées**. Les vrais sujets en utilisent beaucoup : effets du chômage sur la santé, risques psychosociaux, protection sociale et accès aux soins.

### La santé et le bien-être
- Selon l'**OMS** (1946), « la santé est un état de complet **bien-être physique, mental et social** et ne consiste pas seulement en une absence de maladie ou d'infirmité ».
- On distingue la santé **objective** (mesurée par des indicateurs : mortalité, morbidité) et la santé **perçue** (ce que la personne ressent).
- Indicateurs : **espérance de vie** à la naissance, **mortalité** (prématurée avant 65 ans, évitable), **morbidité** (maladies dans une population : **prévalence** = cas existants, **incidence** = nouveaux cas), espérance de vie **sans incapacité**.
- Le **bien-être** dépasse la santé : satisfaction dans la vie, liens sociaux, sécurité, conditions matérielles.

### Les déterminants de santé
- Les **déterminants de santé** sont les facteurs qui influencent l'état de santé. Le modèle de **Dahlgren et Whitehead** (1991) les représente en couches :
  - les facteurs **individuels** non modifiables (âge, sexe, hérédité) ;
  - les **comportements** et modes de vie (alimentation, activité physique, tabac, alcool) ;
  - les **réseaux sociaux et communautaires** (famille, amis, soutien) ;
  - les **conditions de vie et de travail** (logement, emploi, éducation, accès aux services de santé) ;
  - les **conditions socio-économiques, culturelles et environnementales** générales.
- Exemple : le **chômage** agit sur la santé par la perte de revenu, le stress, l'isolement, la perte d'estime de soi, le renoncement aux soins (sujet Polynésie 2025).
- Le **travail** aussi : les **risques psychosociaux** (stress, épuisement professionnel, violences) liés à la charge de travail, au manque d'autonomie ou de reconnaissance peuvent dégrader la santé physique et mentale (sujet Polynésie 2026).

### Les inégalités sociales de santé
- Ce sont des **différences d'état de santé** entre groupes sociaux, qui sont **évitables** et **injustes**.
- Elles suivent un **gradient social** : à chaque niveau de l'échelle sociale, la santé est un peu meilleure qu'au niveau inférieur. Les cadres vivent en moyenne plus longtemps que les ouvriers, et en meilleure santé.
- Elles se combinent avec des **inégalités territoriales** (déserts médicaux, quartiers défavorisés, outre-mer).

### Le bien-être et la cohésion sociale
- La **cohésion sociale** repose sur des liens sociaux forts, la **solidarité** et la **participation** de chacun à la vie de la société.
- Elle est menacée par la pauvreté, l'isolement, les discriminations, l'exclusion.
- Les **liens sociaux** protègent la santé : soutien, entraide, sentiment d'utilité.

### La protection sociale
- La **protection sociale** est l'ensemble des mécanismes collectifs qui protègent les personnes contre les conséquences financières des **risques sociaux** : maladie, invalidité, accident du travail, vieillesse, famille, chômage, logement, pauvreté et exclusion.
- Trois logiques :
  - l'**assurance** (modèle de Bismarck) : on cotise et on reçoit selon ses cotisations (retraites, indemnités de chômage) ;
  - l'**assistance** : une aide sous **conditions de ressources**, sans cotisation (RSA) ;
  - l'**universalité** (modèle de Beveridge, 1942) : une prestation pour tous, financée par l'impôt (prise en charge des soins pour tous les résidents).
- Organisation : la **Sécurité sociale** (1945) avec ses branches **maladie**, **accidents du travail et maladies professionnelles**, **famille**, **retraite** et **autonomie** (depuis 2021) ; l'**assurance chômage** ; l'**aide sociale** des départements ; la protection **complémentaire** (mutuelles, institutions de prévoyance, assurances).
- Financement : **cotisations sociales**, **contribution sociale généralisée** (CSG, créée en 1991), impôts et taxes affectés.
- Selon la DREES, les prestations de protection sociale représentent près d'un tiers du produit intérieur brut de la France.
- Rôles : **protéger** contre les risques, **réduire les inégalités** (redistribution), favoriser l'**accès aux soins** et la **cohésion sociale**.

### Les modes d'intervention en santé et action sociale
- **Prévention** et **promotion de la santé**, **éducation pour la santé**, **soins**, **accompagnement social**, **protection** (des enfants, des majeurs vulnérables), **insertion**.

### À retenir pour le bac
- Utiliser le **modèle des déterminants** pour expliquer comment une situation (chômage, travail, logement) agit sur la santé.
- Relier la **protection sociale** à l'accès aux soins et à la réduction des inégalités.`,
      cartes: [
        { q: "Comment l'OMS définit-elle la santé (1946) ?", r: "Un état de complet bien-être physique, mental et social, qui ne consiste pas seulement en une absence de maladie ou d'infirmité." },
        { q: "Quelle différence entre santé objective et santé perçue ?", r: "La santé objective est mesurée par des indicateurs ; la santé perçue est ce que la personne ressent." },
        { q: "Quelle différence entre prévalence et incidence ?", r: "La prévalence compte les cas existants à un moment donné ; l'incidence compte les nouveaux cas sur une période." },
        { q: "Qu'est-ce que la mortalité prématurée ?", r: "Les décès survenus avant 65 ans." },
        { q: "Qu'est-ce qu'un déterminant de santé ?", r: "Un facteur qui influence l'état de santé : individuel, comportemental, social, lié aux conditions de vie ou à l'environnement." },
        { q: "Que représente le modèle de Dahlgren et Whitehead ?", r: "Les déterminants de santé en couches, des facteurs individuels jusqu'aux conditions socio-économiques et environnementales générales (1991)." },
        { q: "Comment le chômage agit-il sur la santé ?", r: "Par la perte de revenu, le stress, l'isolement, la perte d'estime de soi et le renoncement aux soins." },
        { q: "Que sont les risques psychosociaux ?", r: "Des risques pour la santé physique et mentale liés au travail : stress, épuisement professionnel, violences." },
        { q: "Qu'est-ce que les inégalités sociales de santé ?", r: "Des différences d'état de santé entre groupes sociaux, évitables et injustes." },
        { q: "Qu'est-ce que le gradient social de santé ?", r: "À chaque niveau de l'échelle sociale, la santé est un peu meilleure qu'au niveau inférieur." },
        { q: "Qu'est-ce que la protection sociale ?", r: "L'ensemble des mécanismes collectifs qui protègent contre les conséquences financières des risques sociaux." },
        { q: "Quelles sont les trois logiques de la protection sociale ?", r: "L'assurance (cotisations), l'assistance (sous conditions de ressources) et l'universalité (pour tous, financée par l'impôt)." },
        { q: "Quelles sont les branches de la Sécurité sociale ?", r: "Maladie, accidents du travail et maladies professionnelles, famille, retraite et autonomie (depuis 2021)." },
        { q: "Comment la protection sociale est-elle financée ?", r: "Par les cotisations sociales, la CSG (créée en 1991), et des impôts et taxes affectés." },
        { q: "Pourquoi les liens sociaux protègent-ils la santé ?", r: "Ils apportent soutien, entraide et sentiment d'utilité, et réduisent l'isolement et le stress." },
      ],
      quiz: [
        { q: "En quelle année l'OMS donne-t-elle sa définition de la santé ?", choix: ["1958", "1986", "1946", "2002"], bonne: 2, expl: "La définition figure dans la constitution de l'OMS, adoptée en 1946. 1986 est la charte d'Ottawa.", niv: 1 },
        { q: "Le nombre de nouveaux cas de diabète diagnostiqués dans l'année mesure :", choix: ["la prévalence", "l'incidence", "la mortalité", "l'espérance de vie"], bonne: 1, expl: "L'incidence compte les nouveaux cas sur une période ; la prévalence, tous les cas existants.", niv: 1 },
        { q: "Le RSA, versé sous conditions de ressources sans cotisation préalable, relève de la logique :", choix: ["d'assurance", "d'universalité", "de capitalisation", "d'assistance"], bonne: 3, expl: "L'assistance aide les plus démunis sans contrepartie de cotisation.", niv: 1 },
        { q: "Quelle branche de la Sécurité sociale est créée en 2021 ?", choix: ["La branche famille", "La branche retraite", "La branche maladie", "La branche autonomie"], bonne: 3, expl: "La cinquième branche, autonomie, est créée en 2021.", niv: 1 },
        { q: "Une personne au chômage depuis deux ans ne se soigne plus faute d'argent et se sent inutile. Quels déterminants sont en jeu ?", choix: ["L'âge et le sexe de la personne", "Les conditions de vie et l'estime de soi", "Le patrimoine génétique", "Le climat et l'altitude de la région de résidence"], bonne: 1, expl: "La perte de revenu et le stress du chômage agissent sur l'accès aux soins et la santé mentale.", niv: 2 },
        { q: "Un salarié surchargé de travail, sans reconnaissance, développe des troubles du sommeil et de l'anxiété. Il est exposé :", choix: ["à des risques psychosociaux", "à une maladie infectieuse", "à un accident de trajet", "à un risque génétique"], bonne: 0, expl: "Charge de travail excessive et manque de reconnaissance sont des sources de risques psychosociaux.", niv: 2 },
        { q: "La prise en charge des soins pour toute personne qui réside en France de façon stable relève de la logique :", choix: ["d'universalité", "d'assurance", "d'assistance", "de charité"], bonne: 0, expl: "La protection universelle maladie couvre tous les résidents : c'est une logique universelle.", niv: 2 },
        { q: "Les cadres vivent en moyenne plus longtemps que les ouvriers. Cela illustre :", choix: ["une inégalité territoriale", "un déterminant biologique", "une inégalité sociale de santé", "une logique d'assurance"], bonne: 2, expl: "Une différence de santé entre groupes sociaux, évitable : c'est une inégalité sociale de santé.", niv: 2 },
        { q: "Quel facteur n'est **pas** un déterminant de santé modifiable ?", choix: ["L'alimentation", "L'âge", "Le logement", "L'activité physique"], bonne: 1, expl: "L'âge est un facteur individuel non modifiable ; les autres peuvent changer.", niv: 2 },
        { q: "Pourquoi la protection sociale contribue-t-elle à la cohésion sociale ?", choix: ["Elle fait disparaître les inégalités de revenu entre les ménages français", "Elle remplace les liens familiaux", "Elle ne concerne que les salariés", "Elle repose sur la solidarité et protège tous ceux qui subissent un risque"], bonne: 3, expl: "En mutualisant les risques, elle crée une solidarité entre actifs et inactifs, malades et bien-portants.", niv: 3 },
        { q: "Pourquoi parle-t-on de gradient social de santé plutôt que d'un simple écart entre riches et pauvres ?", choix: ["Parce que les plus pauvres sont en mauvaise santé et les autres en bonne santé", "Parce que les inégalités n'existent pas", "Parce que la santé s'améliore à chaque niveau de l'échelle sociale", "Parce que la santé dépend surtout de l'hérédité"], bonne: 2, expl: "Les inégalités traversent toute la société, pas seulement ses deux extrémités.", niv: 3 },
        { q: "Pourquoi le chômage peut-il aggraver les inégalités de santé ?", choix: ["Il touche davantage les moins qualifiés, déjà plus exposés", "Il touche de la même façon cadres, employés et ouvriers, quel que soit le métier", "Il améliore la santé par le repos", "Il supprime le droit aux soins"], bonne: 0, expl: "Le chômage frappe surtout les moins qualifiés et cumule ses effets avec des conditions de vie déjà difficiles.", niv: 3 },
      ],
    },
  ],
  methode: [
    { id: 'st2s-stss-m1', mat: 'st2s-stss', titre: 'Partie 1 : la mobilisation des connaissances',
      formules: ['Expliquer comment… (une politique, un dispositif, la protection sociale) contribue à…', 'Expliquer que… permet…', 'Présenter… / Montrer que…'],
      vu: ['Bac 2026 métropole : « Expliquer que le parcours de soins permet une prise en charge globale des patients »', 'Bac 2026 Polynésie : « Expliquer comment la démocratie sanitaire est mise en œuvre dans les politiques de santé »', 'Bac 2025 Polynésie : « Expliquer comment la protection sociale contribue à lutter contre les inégalités d\'accès aux soins »'],
      pts: '5 points à partir de 2027 (6 points jusqu\'en 2026), sans document',
      attendu: 'Une réponse rédigée, sans document, qui mobilise des connaissances précises : définitions, acteurs, dispositifs, lois, exemples. Elle est organisée en deux ou trois idées, chacune expliquée et illustrée, avec une courte introduction qui définit les notions et une phrase de conclusion.',
      etapes: ['Souligner le verbe (expliquer, montrer, présenter) et les notions de la question.', 'Définir chaque notion en une phrase dans l\'introduction.', 'Chercher deux ou trois idées qui répondent au « comment » ou au « pourquoi ».', 'Pour chaque idée : un mécanisme, un acteur ou dispositif nommé, un exemple.', 'Conclure en une phrase qui reprend la question.'],
      mots: ['politique de santé', 'démocratie sanitaire', 'parcours de soins', 'protection sociale', 'accès aux soins', 'acteurs', 'dispositif', 'inégalités'],
      pieges: ['Ne pas définir les notions.', 'Une liste de mots sans phrases ni explication.', 'Hors sujet : réciter tout le chapitre.', 'Oublier de nommer des acteurs et des dispositifs précis.'],
      cas: 'Question : « Expliquer que le parcours de soins permet une prise en charge globale des patients. »',
      question: 'Rédigez la réponse.',
      modele: 'Le parcours de soins coordonnés, créé en 2004, organise le suivi du patient autour d\'un médecin traitant qu\'il déclare à l\'Assurance maladie ; une prise en charge globale tient compte de toutes les dimensions de la santé de la personne et de son suivi dans la durée. D\'abord, le médecin traitant connaît le patient, ses antécédents et ses conditions de vie : il assure le suivi régulier, la prévention (vaccinations, dépistages) et le repérage précoce des problèmes. Ensuite, il coordonne les autres professionnels : il oriente vers les spécialistes, l\'hôpital, les infirmiers ou les services sociaux, et centralise les informations, aujourd\'hui partagées grâce à Mon espace santé. Enfin, le parcours assure la continuité des soins entre la ville, l\'hôpital et le retour à domicile, ce qui est essentiel pour les maladies chroniques. Ainsi, le parcours de soins place le patient au centre d\'une prise en charge coordonnée, préventive et continue.',
      grille: ['Les notions sont définies', 'Au moins deux idées distinctes et expliquées', 'Des acteurs et dispositifs nommés', 'Une conclusion qui répond'] },
    { id: 'st2s-stss-m2', mat: 'st2s-stss', titre: 'Partie 2 : montrer qu\'une situation affecte la santé',
      formules: ['Montrer que… impacte la santé de…', 'Montrer que… peut affecter la santé de…'],
      vu: ['Bac 2025 Polynésie : « Montrer que le chômage impacte la santé des personnes en recherche d\'emploi »', 'Bac 2026 Polynésie : « Montrer que les risques psychosociaux peuvent affecter la santé des travailleurs »'],
      pts: 'Environ la moitié de la partie 2 (7 points sur 14 en 2025 et 2026)',
      attendu: 'Montrer, à partir du dossier et des connaissances, les mécanismes par lesquels une situation (chômage, conditions de travail, isolement) agit sur la santé physique, mentale et sociale. Le correcteur attend la définition de la santé, l\'appui sur les déterminants, des données tirées des annexes citées précisément, et une organisation en paragraphes.',
      etapes: ['Définir la situation (chômage, risques psychosociaux) et la santé selon l\'OMS.', 'Classer les effets en trois dimensions : physique, mentale, sociale.', 'Pour chaque effet, expliquer le mécanisme avec un déterminant (revenu, stress, isolement, comportements, accès aux soins).', 'Appuyer chaque idée sur une donnée ou une citation d\'annexe, avec son numéro.', 'Conclure en montrant que la situation agit sur plusieurs déterminants à la fois.'],
      mots: ['santé physique, mentale et sociale', 'déterminants de santé', 'renoncement aux soins', 'stress', 'isolement', 'estime de soi', 'selon l\'annexe'],
      pieges: ['Recopier les annexes sans expliquer.', 'Ne parler que de la santé mentale.', 'Donner des chiffres sans dire ce qu\'ils montrent.', 'Oublier de citer les annexes.'],
      cas: 'Annexe inventée pour l\'entraînement : une enquête fictive auprès de 500 chômeurs de longue durée indique que 41 % ont renoncé à au moins un soin pour raison financière, que 52 % déclarent des troubles du sommeil et que 38 % disent voir moins leurs amis depuis la perte de leur emploi.',
      question: 'Montrez que le chômage de longue durée affecte la santé des personnes concernées.',
      modele: 'Selon l\'OMS, la santé est un état de complet bien-être physique, mental et social. Le chômage de longue durée, c\'est-à-dire une recherche d\'emploi de plus d\'un an, agit sur ces trois dimensions. Sur le plan physique, la baisse de revenu conduit à renoncer aux soins : selon l\'annexe, 41 % des personnes interrogées ont renoncé à au moins un soin, ce qui peut aggraver des maladies non traitées. Sur le plan mental, l\'incertitude et la perte d\'estime de soi provoquent du stress : 52 % déclarent des troubles du sommeil. Sur le plan social, la perte du travail fait disparaître des relations et un rythme de vie : 38 % voient moins leurs amis, ce qui accroît l\'isolement. Le chômage agit donc sur plusieurs déterminants de santé à la fois : revenu, accès aux soins, liens sociaux et santé mentale.',
      grille: ['La santé et la situation sont définies', 'Les trois dimensions de la santé sont traitées', 'Chaque effet est expliqué par un mécanisme', 'Les annexes sont citées avec des données', 'Une conclusion qui répond'] },
    { id: 'st2s-stss-m3', mat: 'st2s-stss', titre: 'Partie 2 : montrer la complémentarité des acteurs d\'un dispositif',
      formules: ['Montrer comment les acteurs du dispositif… se complètent pour…', 'Montrer que la mise en œuvre de… repose sur un partenariat entre différents acteurs.', 'Expliquer comment les différents acteurs participent à la prévention de…'],
      vu: ['Bac 2025 Polynésie : acteurs de l\'insertion par l\'activité économique', 'Bac 2026 métropole : partenariat dans la mise en œuvre de l\'habitat inclusif', 'Bac 2026 Polynésie : acteurs de la prévention des risques psychosociaux'],
      pts: 'Environ la moitié de la partie 2 (7 points sur 14 en 2025 et 2026)',
      attendu: 'Identifier les acteurs (publics, associatifs, privés, usagers), dire ce que chacun apporte (financement, compétences, accompagnement, locaux, décision) et montrer comment ces apports s\'additionnent pour atteindre l\'objectif. Le correcteur attend des acteurs nommés avec leur statut, un appui précis sur les annexes et le mot « partenariat » expliqué.',
      etapes: ['Définir le dispositif et le partenariat.', 'Repérer dans les annexes chaque acteur et le classer : État, collectivités, organismes de protection sociale, associations, professionnels, usagers.', 'Dire pour chacun son rôle : financer, porter, accompagner, loger, soigner, participer.', 'Montrer les liens entre eux : conventions, coordination, complémentarité des compétences.', 'Conclure : aucun acteur ne pourrait atteindre seul l\'objectif.'],
      mots: ['partenariat', 'complémentarité', 'porteur', 'financeur', 'convention', 'coordination', 'collectivité territoriale', 'association'],
      pieges: ['Lister les acteurs sans dire ce qu\'ils font.', 'Oublier les usagers eux-mêmes comme acteurs.', 'Confondre le financeur et le porteur.', 'Ne pas montrer les liens entre acteurs.'],
      cas: 'Dispositif inventé : un atelier et chantier d\'insertion de la ville fictive de Morvane rénove des vélos. Il est porté par une association, reçoit une aide au poste de l\'État, une subvention du département pour les allocataires du RSA, les candidats sont orientés par France Travail, et deux entreprises de la ville recrutent des salariés en fin de parcours.',
      question: 'Montrez comment les acteurs de ce dispositif se complètent pour favoriser l\'insertion des personnes en difficulté.',
      modele: 'L\'insertion par l\'activité économique offre un travail et un accompagnement à des personnes très éloignées de l\'emploi ; elle repose sur un partenariat, c\'est-à-dire une coopération entre acteurs qui mettent en commun leurs moyens. L\'association porte le chantier : elle embauche, encadre le travail de rénovation et assure l\'accompagnement social (logement, santé, démarches). L\'État finance une aide au poste, ce qui permet de payer les salaires, et le département, chef de file de l\'insertion, finance l\'accompagnement des allocataires du RSA. France Travail repère et oriente les candidats. Enfin, les entreprises de la ville recrutent en fin de parcours, ce qui donne un débouché durable. Chaque acteur apporte une ressource différente : ensemble, ils permettent de passer du chômage à l\'emploi stable.',
      grille: ['Le dispositif et le partenariat sont définis', 'Chaque acteur est nommé avec son statut', 'Le rôle de chacun est expliqué', 'Les liens entre acteurs sont montrés', 'Les annexes ou le cas sont utilisés'] },
    { id: 'st2s-stss-m4', mat: 'st2s-stss', titre: 'Partie 2 : expliquer comment un dispositif répond à un besoin',
      formules: ['Expliquer comment… favorise…', 'Analyser le dispositif… au regard du problème social…', 'Montrer comment… participe au bien-être…'],
      vu: ['Bac 2026 métropole : « Expliquer comment l\'habitat inclusif favorise les liens sociaux »'],
      pts: 'Environ la moitié de la partie 2 (7 points sur 14 en 2026)',
      attendu: 'Présenter le dispositif (public, objectifs, fonctionnement) puis expliquer, mécanisme par mécanisme, comment ses caractéristiques répondent au besoin visé, en s\'appuyant sur les annexes.',
      etapes: ['Définir le besoin ou la notion visée (liens sociaux, bien-être, autonomie).', 'Présenter le dispositif en deux phrases : public, objectif, cadre.', 'Relever dans les annexes ses caractéristiques (espaces partagés, activités, accompagnement, participation).', 'Pour chacune, expliquer en quoi elle répond au besoin.', 'Nuancer si les documents le permettent (limites, conditions).'],
      mots: ['dispositif', 'public', 'objectif', 'lien social', 'participation', 'autonomie', 'inclusion'],
      pieges: ['Décrire le dispositif sans le relier au besoin.', 'Oublier de citer les annexes.', 'Confondre le dispositif et la politique qui l\'encadre.'],
      cas: 'Dispositif inventé : dans la commune fictive de Brévilles, un « café des aidants » réunit une fois par mois des proches de personnes malades, avec une psychologue et une assistante sociale, dans une salle prêtée par la mairie.',
      question: 'Expliquez comment ce dispositif favorise le bien-être des aidants.',
      modele: 'Un aidant est une personne qui aide régulièrement un proche malade ou dépendant ; cette charge peut provoquer fatigue, stress et isolement. Le café des aidants réunit chaque mois des aidants avec des professionnels. D\'abord, il rompt l\'isolement : les aidants rencontrent d\'autres personnes qui vivent la même situation et peuvent échanger librement. Ensuite, la présence d\'une psychologue permet de parler de ses difficultés et de prévenir l\'épuisement. Enfin, l\'assistante sociale informe sur les aides existantes, ce qui allège la charge et donne accès à des droits. En combinant soutien moral, information et lien social, le dispositif améliore le bien-être mental et social des aidants.',
      grille: ['La notion visée est définie', 'Le dispositif est présenté', 'Chaque caractéristique est reliée au besoin', 'Les annexes ou le cas sont utilisés'] },
    { id: 'st2s-stss-m5', mat: 'st2s-stss', titre: 'Exploiter le dossier documentaire et rédiger',
      formules: ['Le dossier : cinq documents au plus, cinq pages au plus (textes, graphiques, tableaux)', 'Consigne générale : exploiter les documents, faire appel à ses connaissances, développer une analyse, une argumentation ou une synthèse'],
      vu: ['Note de service du 11 septembre 2026 (BO spécial n° 4), à partir de la session 2027', 'Sujets 2025 et 2026 : deux questions sur le dossier, chacune notée sur 7 points'],
      pts: '13 points pour la partie 2 et 2 points pour la langue',
      attendu: 'Sélectionner, trier et hiérarchiser les informations utiles des annexes, les citer (« selon l\'annexe 2 »), les compléter par ses connaissances et les organiser en une réponse rédigée et structurée. La qualité de l\'expression compte en plus des 2 points de langue.',
      etapes: ['Lire les questions avant les annexes, pour savoir quoi chercher.', 'Lire chaque annexe en notant sa source, sa date et l\'idée principale.', 'Surligner les informations utiles à chaque question, avec une couleur par question.', 'Faire un plan rapide au brouillon : deux ou trois idées par question.', 'Rédiger en paragraphes : une idée, une preuve tirée d\'une annexe, une explication, une connaissance.', 'Garder 10 minutes pour relire l\'orthographe.'],
      mots: ['selon l\'annexe', 'en effet', 'de plus', 'ainsi', 'cependant', 'données', 'source'],
      pieges: ['Paraphraser les documents.', 'Utiliser une seule annexe.', 'Ne pas rattacher les documents au cours.', 'Négliger l\'orthographe : 2 points.', 'Mal gérer le temps : environ 50 minutes par question.'],
      cas: 'Un graphique inventé montre qu\'en 2024 la part des personnes âgées de 75 ans ou plus vivant seules est de 38 % dans la commune fictive de Val-d\'Orme, contre 30 % dix ans plus tôt.',
      question: 'Exploitez ce document en une phrase rédigée qui pourrait figurer dans une réponse sur l\'isolement des personnes âgées.',
      modele: 'Selon l\'annexe 2, l\'isolement résidentiel des personnes âgées progresse à Val-d\'Orme : 38 % des personnes de 75 ans ou plus vivent seules en 2024, contre 30 % dix ans plus tôt, soit 8 points de plus ; or vivre seul augmente le risque d\'isolement social, facteur de dégradation de la santé mentale.',
      grille: ['La source est citée', 'Les chiffres sont exacts avec leur date', 'L\'évolution est calculée correctement', 'L\'information est reliée à la question et au cours'] },
  ],
  sujets: [
    { id: 'st2s-stss-s1', matiere: 'st2s-stss', titre: 'Sujet d\'entraînement inventé : l\'isolement des personnes âgées', duree: 180,
      enonce: `## Sujet d'entraînement (entièrement inventé)

Les communes, associations, personnes et chiffres de ce sujet sont fictifs. Durée : 3 heures. Barème de la session 2027 : partie 1 sur 5 points, partie 2 sur 13 points, langue sur 2 points.

## Partie 1 : mobilisation des connaissances (5 points)

Présenter le rôle de l'agence régionale de santé dans la mise en œuvre de la politique de santé.

## Partie 2 : développement s'appuyant sur un dossier documentaire (13 points)

**Rompre l'isolement des personnes âgées**

**Annexe 1 (texte inventé).** Observatoire fictif de la commune de Val-d'Orme, 2025 : « Une personne âgée sur quatre déclare ne voir personne de la semaine en dehors de ses aides à domicile. Les médecins de la commune signalent davantage de dénutrition, de chutes et de symptômes dépressifs chez les personnes qui vivent seules. Beaucoup renoncent à sortir faute de transport adapté. »

**Annexe 2 (données inventées).** Part des personnes de 75 ans ou plus vivant seules à Val-d'Orme : 30 % en 2014 ; 38 % en 2024. Parmi elles, 45 % disent se sentir seules souvent ou très souvent, contre 18 % de celles qui vivent en couple.

**Annexe 3 (texte inventé).** Le dispositif « Lien d'Orme », créé en 2023 : le centre communal d'action sociale repère les personnes isolées grâce à un registre et aux signalements des aides à domicile ; l'association fictive Voisins Solidaires organise des visites de bénévoles et un café hebdomadaire ; le département finance un minibus pour les sorties ; la caisse de retraite propose des ateliers de prévention des chutes ; les habitants âgés choisissent eux-mêmes les activités lors d'une réunion trimestrielle.

**Annexe 4 (données inventées).** Bilan de « Lien d'Orme » après un an : 210 personnes suivies, 1 450 visites de bénévoles, 64 % des participants disent se sentir moins seuls, 12 chutes déclarées contre 21 l'année précédente dans le même groupe.

**Travail à faire.**
1. Montrer que l'isolement social peut affecter la santé des personnes âgées. (6,5 points)
2. Montrer comment les acteurs du dispositif « Lien d'Orme » se complètent pour rompre l'isolement des personnes âgées. (6,5 points)`,
      corrige: `## Corrigé

### Partie 1 (5 points)
- Définitions : la politique de santé est l'ensemble des choix et actions des pouvoirs publics pour améliorer la santé de la population ; l'agence régionale de santé (ARS), créée par la loi HPST de 2009 et installée en 2010, est un établissement public de l'État dans chaque région.
- Elle **décline** la politique nationale : elle élabore le **projet régional de santé**, qui fixe les objectifs et l'organisation de la santé dans la région, après avis de la conférence régionale de la santé et de l'autonomie (démocratie sanitaire).
- Elle **organise l'offre de soins et médico-sociale** : elle autorise l'ouverture des établissements, répartit les moyens, lutte contre les déserts médicaux.
- Elle mène la **prévention** et la **veille sanitaire** avec Santé publique France : campagnes, gestion des alertes et des crises.
- Elle agit avec les **collectivités** grâce aux contrats locaux de santé.
- Conclusion : l'ARS est le pilote régional qui adapte la politique de santé aux besoins du territoire.

### Partie 2

**Question 1 (6,5 points).**
- Définir la santé (OMS, 1946) et l'isolement social (manque durable de relations).
- Santé mentale : selon l'annexe 2, 45 % des personnes âgées vivant seules se sentent souvent seules, contre 18 % de celles qui vivent en couple ; l'annexe 1 relève des symptômes dépressifs.
- Santé physique : l'annexe 1 signale dénutrition et chutes chez les personnes seules ; sans personne pour aider ou alerter, les problèmes s'aggravent ; le renoncement à sortir réduit l'activité physique.
- Santé sociale : une personne sur quatre ne voit personne de la semaine (annexe 1) ; la part des personnes de 75 ans ou plus vivant seules passe de 30 % à 38 % en dix ans (+ 8 points), ce qui montre un problème qui s'étend.
- Lien avec les déterminants : réseaux sociaux, conditions de vie (transport), comportements (alimentation).
- Conclusion : l'isolement agit sur les trois dimensions de la santé et constitue un problème de santé publique.

**Question 2 (6,5 points).**
- Définir le partenariat et présenter le dispositif (annexe 3).
- Le **CCAS** repère les personnes isolées (registre, signalements) : il porte l'action sociale de la commune.
- L'association **Voisins Solidaires** mobilise des bénévoles : visites et café recréent du lien (1 450 visites, annexe 4).
- Le **département**, compétent pour les personnes âgées, finance le minibus qui lève l'obstacle du transport.
- La **caisse de retraite** apporte la prévention des chutes : 12 chutes contre 21 (annexe 4).
- Les **personnes âgées** participent au choix des activités : meilleure adhésion.
- Conclusion : chacun apporte une compétence ou un financement différent ; ensemble, ils agissent sur l'isolement et la santé (64 % se sentent moins seuls).`,
      grille: [
        { c: 'Partie 1 : définitions, rôles de l\'ARS (projet régional, offre de soins, prévention et veille, partenariats), conclusion', pts: 5 },
        { c: 'Partie 2, question 1 : trois dimensions de la santé, mécanismes expliqués, annexes citées avec chiffres justes', pts: 6.5 },
        { c: 'Partie 2, question 2 : chaque acteur nommé avec son rôle, complémentarité montrée, annexes utilisées', pts: 6.5 },
        { c: 'Maîtrise de la langue : orthographe et syntaxe', pts: 2 },
      ] },
  ],
};
