// Enseignement moral et civique — terminale, toutes les voies (générale et technologique). Sources : voir matiere.sources.
// PROGRAMME EN VIGUEUR : nouveau programme d'EMC (arrêté du 29 mai 2024, BO n° 24 du 13 juin 2024), entré en vigueur
// en première à la rentrée 2025 et en TERMINALE À LA RENTRÉE 2026 (note de service publiée au BO du 18 décembre 2025).
// Il remplace le programme de 2019 (fin du « projet de l'année »). Thème annuel de terminale : « La vie démocratique :
// débat, délibération et prise de décision », en deux parties de 9 heures chacune (livret d'accompagnement Éduscol 2026) :
// « Les principes et les espaces du débat démocratique » (chapitres 1 à 4) et « La délibération dans les institutions
// (nationales, européennes, internationales) » (chapitres 5 à 9).
// Évaluation : contrôle continu (moyenne annuelle, coefficient 1 en terminale) ; évaluation ponctuelle pour les candidats
// individuels, dont le format est fixé par la note de service du 10 septembre 2026 (BO n° 35), non lue ici.
export default {
  matiere: {
    id: 'emc',
    nom: 'Enseignement moral et civique',
    voie: 'tous',
    epreuve: { type: 'controle continu', quand: 'toute l\'année', note: 'Pas d\'épreuve finale : la moyenne annuelle de terminale (18 heures de cours, au moins trois notes dans l\'année) compte dans le contrôle continu, avec un coefficient 1 (coefficient 2 en tout avec la première). Les évaluations prennent des formes variées : analyse de documents, réponse argumentée, étude de cas, débat ou exposé oral. Les candidats individuels passent une évaluation ponctuelle.' },
    sources: [
      'https://eduscol.education.gouv.fr/5787/programmes-et-ressources-en-enseignement-moral-et-civique-voie-gt',
      'https://eduscol.education.gouv.fr/sites/default/files/document/2026livretaccompagnementemclyceegtterminale-129307.pdf',
      'https://www.education.gouv.fr/bo/2025/Hebdo48/MENE2531481N',
      'https://www.education.gouv.fr/bo/2026/Hebdo35/MENE2622365N',
      'https://www.education.gouv.fr/reussir-au-lycee/comment-calculer-votre-note-au-baccalaureat-325511',
    ],
    chapitres: [
      { id: 'emc-1', t: 'Culture du débat et éthique de la discussion', theme: 'Les principes et les espaces du débat démocratique' },
      { id: 'emc-2', t: 'Partis politiques, société civile organisée et crise de la représentation', theme: 'Les principes et les espaces du débat démocratique' },
      { id: 'emc-3', t: 'Démocratie participative et démocratie délibérative : conventions citoyennes et CESE', theme: 'Les principes et les espaces du débat démocratique' },
      { id: 'emc-4', t: 'Le débat démocratique à l\'ère numérique : information, désinformation, ingérences', theme: 'Les principes et les espaces du débat démocratique' },
      { id: 'emc-5', t: 'Intérêt général, représentativité et légitimité', theme: 'La délibération dans les institutions' },
      { id: 'emc-6', t: 'Délibérer et décider en France : le Parlement, la loi et le budget', theme: 'La délibération dans les institutions' },
      { id: 'emc-7', t: 'Délibérer et décider dans l\'Union européenne', theme: 'La délibération dans les institutions' },
      { id: 'emc-8', t: 'Délibérer et décider à l\'échelle internationale : l\'ONU et le multilatéralisme', theme: 'La délibération dans les institutions' },
      { id: 'emc-9', t: 'Après la décision : majorité, opposition, contrôle et contestation légale', theme: 'La délibération dans les institutions' },
    ],
  },
  paquets: [
    // ---------------------------------------------------------------- 1
    {
      chapitre: 'emc-1',
      fiche: `## Culture du débat et éthique de la discussion

En terminale, l'EMC étudie comment une décision se prend en démocratie : un **débat** émerge, il se structure, puis il conduit à une **délibération** et à une **décision**. Tout commence par une culture du débat.

### Qu'est-ce que la culture du débat ?
- Un **débat** est une discussion organisée où des **arguments** s'opposent en vue d'une **décision collective**.
- La culture du débat est un **socle de la démocratie** : les citoyens participent aux choix publics, pas seulement le jour du vote.
- Elle **s'apprend** : l'École l'enseigne par le **débat réglé**, la **discussion argumentée** et le **dilemme moral**. Le but n'est pas d'opposer des opinions, mais de mobiliser des **connaissances** pour formuler des arguments rigoureux.

### Le débat dans la société d'aujourd'hui
- Les réseaux sociaux et la course à l'audience **polarisent** les échanges : le débat tend à devenir un « **clash** », fait d'attaques personnelles et de rapports de force.
- Deux attitudes bloquent le dialogue : le **relativisme** (tout se vaut) et le **dogmatisme** (j'ai raison, je ne discute pas).
- Pourtant, beaucoup de lieux pratiquent un vrai débat : associations, entreprises, **jurys**, commissions parlementaires.

### L'éthique de la discussion (Habermas)
- Le philosophe allemand **Jürgen Habermas** (avec Karl-Otto Apel) défend une **éthique de la discussion** : « discuter, ce n'est pas gagner, c'est se comprendre ».
- Toute prise de parole doit respecter **trois exigences** : la **vérité** (des faits, des preuves), la **justesse** (respect de la dignité et de l'égalité) et la **sincérité** (dire ce que l'on pense vraiment).
- Les conditions : chacun parle **à égalité**, écoute les autres, accepte de **réviser** son avis, renonce à l'intimidation et à la domination.
- La norme la plus **légitime** est celle que **tous** peuvent accepter librement après un débat argumenté : c'est la force du **meilleur argument**.
- Limites : des **asymétries** (experts, figures d'autorité) orientent les échanges, et un débat n'est jamais vraiment clos. Habermas voit la discussion comme un processus qui se **corrige** lui-même.

### Les principes qui rendent le débat possible
- Le **pluralisme** : la diversité des opinions est reconnue et représentée.
- La **liberté d'expression** (article 11 de la Déclaration des droits de l'homme et du citoyen de 1789), avec des **limites** fixées par la loi : diffamation, injure, provocation à la haine.
- La **laïcité** garantit la liberté de conscience et la neutralité de l'État.
- Le **compromis** : un accord où chacun renonce à une partie de ses demandes ; le **consensus** : un accord sans opposition.

### À retenir pour le bac
- Débat, délibération, décision : les trois étapes de la vie démocratique.
- Habermas : vérité, justesse, sincérité ; la force du meilleur argument.
- Relativisme et dogmatisme : deux obstacles au dialogue.
- Pluralisme et liberté d'expression encadrée par la loi.`,
      cartes: [
        { q: "Quel est le thème de l'EMC en terminale ?", r: "La vie démocratique : débat, délibération et prise de décision." },
        { q: "Qu'est-ce qu'un débat ?", r: "Une discussion organisée où des arguments s'opposent en vue d'une décision collective." },
        { q: "Quels exercices l'École utilise-t-elle pour apprendre à débattre ?", r: "Le débat réglé, la discussion argumentée et le dilemme moral." },
        { q: "Qu'appelle-t-on la culture du clash ?", r: "Un débat réduit à des attaques personnelles et des rapports de force, souvent nourri par les réseaux sociaux." },
        { q: "Relativisme et dogmatisme : quelle différence ?", r: "Le relativisme pense que tout se vaut ; le dogmatisme refuse de discuter ses certitudes. Les deux bloquent le dialogue." },
        { q: "Qui a théorisé l'éthique de la discussion ?", r: "Jürgen Habermas, avec Karl-Otto Apel." },
        { q: "Quelles sont les trois exigences d'une prise de parole selon Habermas ?", r: "La vérité, la justesse et la sincérité." },
        { q: "Que veut dire « la force du meilleur argument » ?", r: "Une décision doit l'emporter parce qu'elle est mieux justifiée, non par intimidation ou domination." },
        { q: "Quelle norme est la plus légitime selon Habermas ?", r: "Celle que tous peuvent accepter librement au terme d'un débat argumenté." },
        { q: "Quelles limites rencontre l'éthique de la discussion ?", r: "Des asymétries (experts, autorités) orientent les échanges, et un débat n'est jamais définitivement clos." },
        { q: "Qu'est-ce que le pluralisme ?", r: "La reconnaissance de la diversité des opinions et leur représentation dans la vie politique." },
        { q: "Quel article de la DDHC protège la liberté d'expression ?", r: "L'article 11 de la Déclaration de 1789." },
        { q: "Quelles limites la loi fixe-t-elle à la liberté d'expression ?", r: "Notamment la diffamation, l'injure et la provocation à la haine." },
        { q: "Compromis et consensus : quelle différence ?", r: "Le compromis fait renoncer chacun à une partie de ses demandes ; le consensus est un accord sans opposition." },
      ],
      quiz: [
        { q: "Quel est le thème annuel de l'EMC en terminale ?", choix: ["La laïcité à l'école et dans les services publics", "Les libertés individuelles et leurs limites", "La vie démocratique : débat, délibération, décision", "La défense nationale et l'engagement militaire"], bonne: 2, expl: "C'est le thème du programme entré en vigueur en terminale à la rentrée 2026.", niv: 1 },
        { q: "Selon Habermas, discuter consiste surtout à :", choix: ["se comprendre", "gagner le débat", "imposer son avis", "faire rire le public"], bonne: 0, expl: "« Discuter, ce n'est pas gagner : c'est se comprendre. »", niv: 1 },
        { q: "Quelle exigence d'Habermas une personne qui ment en débat ne respecte-t-elle **pas** ?", choix: ["La justesse", "L'égalité", "La rapidité de parole", "La sincérité"], bonne: 3, expl: "La sincérité, c'est dire ce que l'on pense vraiment.", niv: 2 },
        { q: "Penser que « toutes les opinions se valent » relève :", choix: ["du dogmatisme religieux", "du relativisme", "du pluralisme", "de la laïcité"], bonne: 1, expl: "Le relativisme empêche de chercher le meilleur argument.", niv: 2 },
        { q: "Refuser de remettre en cause ses certitudes, c'est faire preuve de :", choix: ["relativisme", "pluralisme", "dogmatisme", "sincérité"], bonne: 2, expl: "Le dogmatisme bloque, lui aussi, le dialogue.", niv: 1 },
        { q: "Pour Habermas, quelle norme est la plus légitime ?", choix: ["Celle que tous peuvent accepter après un débat argumenté", "Celle que défend la personne la plus diplômée", "Celle qui obtient le plus de vues sur les réseaux sociaux", "Celle qui est imposée par le plus fort"], bonne: 0, expl: "C'est la force du meilleur argument.", niv: 2 },
        { q: "Quel article de la DDHC de 1789 protège la libre communication des pensées ?", choix: ["L'article 1er", "L'article 6", "L'article 3", "L'article 11"], bonne: 3, expl: "L'article 11 fait de la liberté d'expression l'un des droits les plus précieux.", niv: 2 },
        { q: "Laquelle de ces paroles dépasse les limites légales de la liberté d'expression ?", choix: ["Critiquer un projet de loi", "Provoquer à la haine d'un groupe", "Se moquer d'une idée politique", "Défendre une opinion minoritaire"], bonne: 1, expl: "La loi punit notamment la diffamation, l'injure et la provocation à la haine.", niv: 2 },
        { q: "Un accord obtenu sans aucune opposition formelle est :", choix: ["un vote à la majorité simple", "un compromis forcé", "un consensus", "un veto"], bonne: 2, expl: "Le compromis, lui, fait renoncer chacun à une partie de ses demandes.", niv: 2 },
        { q: "Quelle limite de l'éthique de la discussion vient des experts et des figures d'autorité ?", choix: ["Les asymétries de compétences", "Le manque de temps de parole pour chacun", "Le refus de voter", "L'absence de règles écrites"], bonne: 0, expl: "Leur poids peut orienter les échanges.", niv: 3 },
        { q: "Pourquoi le débat réglé est-il pratiqué à l'École ?", choix: ["Pour remplacer les cours d'histoire", "Pour désigner les délégués de classe", "Pour noter l'éloquence et la voix de chaque élève", "Pour apprendre à argumenter avec des connaissances"], bonne: 3, expl: "Le but n'est pas d'opposer des opinions, mais de formuler des arguments rigoureux.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 2
    {
      chapitre: 'emc-2',
      fiche: `## Partis politiques, société civile organisée et crise de la représentation

Le débat démocratique a lieu dans des **espaces multiples** (institutions, médias, associations), portés par des acteurs différents : les **partis politiques** et la **société civile organisée**.

### Les partis politiques
- Un parti est une **organisation durable**, implantée sur le territoire, qui veut **accéder au pouvoir** grâce au soutien populaire.
- Ils deviennent centraux à la **fin du XIXe siècle** : ils permettent à des candidats sans fortune de se présenter.
- L'**article 4** de la Constitution de 1958 : les partis « **concourent à l'expression du suffrage** » ; ils participent au **pluralisme**.
- Leurs fonctions : proposer des **programmes**, **sélectionner et former** les candidats, encadrer les élus (discipline de vote des groupes parlementaires), **socialiser** et **mobiliser** les citoyens, porter la voix de groupes sociaux (fonction « **tribunitienne** »).

### La société civile organisée
- Elle regroupe des **associations**, des **syndicats** et des **ONG**, en dehors de l'État et des entreprises, qui défendent des **intérêts**, des **valeurs** ou des **causes**.
- Exemples : la **FNSEA** (syndicat agricole), **Médecins sans frontières** (ONG humanitaire), **Foodwatch** (association de consommateurs).
- Leurs stratégies : l'**influence** (le **lobbying** : convaincre les décideurs, par exemple les députés), la **coopération** (les syndicats gèrent avec le patronat la Sécurité sociale : c'est le **paritarisme**), la **protestation** (manifestations, campagnes).
- Elles sont des **intermédiaires** entre citoyens et pouvoirs publics.

### Une crise de la représentation ?
- La **professionnalisation** de la politique : le sociologue **Robert Michels** parle dès **1911** de « **loi d'airain de l'oligarchie** » : tout parti finit dirigé par une petite élite, loin des militants.
- Le **recul du militantisme** : moins d'adhérents, des engagements plus **souples** et ponctuels, souvent dans des associations.
- La **défiance** : la confiance dans les partis, le Parlement et les médias est très basse, surtout en France.
- La montée de l'**abstention** depuis les années **1980**, avec des regains ponctuels (législatives de **2024**). Les politistes distinguent deux abstentions :
- l'abstention « **hors du jeu politique** » : des citoyens peu informés ou qui se sentent illégitimes ;
- l'abstention « **dans le jeu politique** » : des citoyens politisés qui ne votent pas pour exprimer un **mécontentement** face à l'offre.

### Rendre la vie politique plus exemplaire
- La **Haute Autorité pour la transparence de la vie publique** (**HATVP**, créée en **2013**) contrôle le patrimoine et les intérêts des élus.
- Le **financement des partis** est encadré par la loi (plafonds, interdiction des dons d'entreprises depuis 1995).

### À retenir pour le bac
- Article 4 de la Constitution : les partis concourent à l'expression du suffrage.
- Société civile organisée : associations, syndicats, ONG ; influence, coopération, protestation.
- Michels (1911), loi d'airain de l'oligarchie.
- Deux abstentions : hors du jeu, dans le jeu.`,
      cartes: [
        { q: "Qu'est-ce qu'un parti politique ?", r: "Une organisation durable, implantée sur le territoire, qui veut accéder au pouvoir grâce au soutien populaire." },
        { q: "Que dit l'article 4 de la Constitution de 1958 sur les partis ?", r: "Qu'ils « concourent à l'expression du suffrage » et participent au pluralisme." },
        { q: "Citez trois fonctions des partis politiques.", r: "Proposer des programmes, sélectionner et former les candidats, mobiliser et socialiser les citoyens." },
        { q: "Qu'est-ce que la fonction tribunitienne d'un parti ?", r: "Porter la voix de groupes sociaux qui se sentent peu entendus, notamment les catégories populaires." },
        { q: "Qu'est-ce que la société civile organisée ?", r: "Associations, syndicats et ONG qui agissent hors de l'État et du marché pour défendre des intérêts ou des causes." },
        { q: "Qu'est-ce que le lobbying ?", r: "L'ensemble des démarches pour influencer les décisions des pouvoirs publics en faveur de certains intérêts." },
        { q: "Qu'est-ce que le paritarisme ?", r: "La gestion commune d'organismes (comme la Sécurité sociale) par les syndicats de salariés et d'employeurs." },
        { q: "Quelles sont les trois stratégies de la société civile organisée ?", r: "L'influence, la coopération et la protestation." },
        { q: "Qu'est-ce que la loi d'airain de l'oligarchie ?", r: "L'idée de Robert Michels (1911) : toute organisation finit dirigée par une petite élite, loin de sa base." },
        { q: "Pourquoi le militantisme recule-t-il ?", r: "Professionnalisation de la politique, déceptions et individualisation : on préfère des engagements souples et ponctuels." },
        { q: "Qu'est-ce que l'abstention « hors du jeu politique » ?", r: "Celle de citoyens peu informés ou qui se sentent illégitimes pour voter." },
        { q: "Qu'est-ce que l'abstention « dans le jeu politique » ?", r: "Celle de citoyens politisés qui ne votent pas pour exprimer leur mécontentement face à l'offre." },
        { q: "Qu'est-ce que la HATVP ?", r: "La Haute Autorité pour la transparence de la vie publique, créée en 2013, qui contrôle patrimoine et intérêts des élus." },
        { q: "Depuis quand les entreprises ne peuvent-elles plus financer les partis ?", r: "Depuis 1995." },
      ],
      quiz: [
        { q: "Selon l'article 4 de la Constitution, les partis politiques :", choix: ["nomment le Premier ministre", "concourent à l'expression du suffrage", "votent les lois à la place du Parlement", "contrôlent les médias publics"], bonne: 1, expl: "Ils participent ainsi au pluralisme.", niv: 1 },
        { q: "Laquelle de ces organisations appartient à la société civile organisée ?", choix: ["Le Sénat", "Le Conseil constitutionnel", "Une préfecture", "Médecins sans frontières"], bonne: 3, expl: "ONG, associations et syndicats agissent hors de l'État.", niv: 1 },
        { q: "Convaincre des députés de voter un amendement favorable à un secteur, c'est faire :", choix: ["du lobbying", "de la désobéissance civile", "du paritarisme", "de la propagande d'État"], bonne: 0, expl: "Le lobbying vise à influencer les décisions publiques.", niv: 1 },
        { q: "La gestion de la Sécurité sociale par les syndicats de salariés et d'employeurs illustre :", choix: ["la protestation", "le lobbying", "la coopération paritaire", "la fonction tribunitienne"], bonne: 2, expl: "C'est le paritarisme.", niv: 2 },
        { q: "Qui a formulé la « loi d'airain de l'oligarchie » ?", choix: ["Max Weber", "Jürgen Habermas", "Jean-Jacques Rousseau", "Robert Michels"], bonne: 3, expl: "En 1911, à propos des partis politiques.", niv: 2 },
        { q: "Un électeur très politisé qui ne vote pas pour protester contre l'offre électorale pratique une abstention :", choix: ["dans le jeu politique", "hors du jeu politique", "obligatoire", "involontaire"], bonne: 0, expl: "L'abstention « hors du jeu » touche plutôt des citoyens peu informés.", niv: 2 },
        { q: "Pourquoi les partis se développent-ils à la fin du XIXe siècle ?", choix: ["Ils remplacent les syndicats interdits", "Ils sont prévus en détail par la Constitution de 1958 elle-même", "Ils permettent à des candidats sans fortune de se présenter", "Ils servent à désigner le roi"], bonne: 2, expl: "Le parti finance et organise les campagnes.", niv: 3 },
        { q: "Que contrôle la HATVP, créée en 2013 ?", choix: ["Le contenu des programmes scolaires", "Le patrimoine et les intérêts des élus", "Les sondages électoraux", "Les comptes des associations sportives"], bonne: 1, expl: "Elle vise l'exemplarité des responsables publics.", niv: 2 },
        { q: "Quelle tendance décrit le mieux l'engagement des citoyens aujourd'hui ?", choix: ["Un militantisme à vie dans un seul et même parti", "La disparition de tout engagement", "L'adhésion obligatoire à un syndicat", "Des engagements plus souples et ponctuels"], bonne: 3, expl: "Souvent dans des associations, parfois nés sur les réseaux.", niv: 3 },
        { q: "Depuis 1995, le financement des partis par les entreprises est :", choix: ["interdit", "plafonné à un million d'euros", "réservé aux grandes sociétés", "libre et sans limite"], bonne: 0, expl: "Le financement des partis est strictement encadré.", niv: 3 },
        { q: "Quelle fonction remplit un parti qui sélectionne et forme ses futurs élus ?", choix: ["Une fonction judiciaire", "Une fonction de recrutement politique", "Une fonction militaire", "Une fonction diplomatique et consulaire"], bonne: 1, expl: "Il professionnalise ainsi la vie publique.", niv: 2 },
      ],
    },
    // ---------------------------------------------------------------- 3
    {
      chapitre: 'emc-3',
      fiche: `## Démocratie participative et démocratie délibérative : conventions citoyennes et CESE

Face à la défiance et à l'abstention, de nouveaux dispositifs cherchent à associer les citoyens aux décisions, entre deux élections.

### Démocratie représentative, directe, participative
- **Représentative** : les citoyens élisent des représentants qui décident en leur nom (article 3 de la Constitution : la souveraineté nationale appartient au peuple qui l'exerce par ses représentants et par la voie du **référendum**).
- **Directe** : les citoyens décident eux-mêmes, par **référendum** (article 11 et article 89 de la Constitution).
- **Participative** : les citoyens sont **consultés** et associés à la décision. L'idée naît dans les années **1960** aux États-Unis, dans la critique de l'autorité qui mène aussi à **Mai 68**.

### Des exemples de démocratie participative
- Le **budget participatif** de **Porto Alegre** (Brésil), lancé en **1989** : les habitants fixent des priorités du budget de la ville ; les quartiers pauvres en profitent. Le modèle s'est exporté (Paris en a un depuis 2014).
- Les **conseils de quartier**, **obligatoires** dans les communes de plus de **80 000 habitants** depuis la loi du **27 février 2002** (démocratie de proximité).
- Les **pétitions** au Parlement, les **consultations** publiques, les enquêtes publiques avant un grand aménagement.

### La démocratie délibérative
- Inspirée de **Habermas** : une décision est légitime non seulement parce qu'elle a la **majorité**, mais parce qu'elle sort d'une **délibération** argumentée, libre, informée.
- Elle critique une vision « **agrégative** » de la démocratie, qui se contente d'additionner des voix.
- Dispositifs : **jurys citoyens**, **conférences de consensus**, sondages délibératifs, **conventions citoyennes**.

### La convention citoyenne, étape par étape
- **Tirage au sort** d'un panel de citoyens, varié (âge, sexe, diplôme, métier, territoire). Le tirage au sort donne à **chacun** la même chance de participer.
- **Phase d'acculturation** : on auditionne des **experts**, des représentants d'intérêts, des institutions.
- **Phase de délibération**, avec des animateurs : on forme une **opinion éclairée**.
- **Adoption** de propositions dans un **rapport**.

### Le CESE et les conventions
- Le **Conseil économique, social et environnemental** (**article 69** de la Constitution) est la **troisième assemblée** de la République. Il conseille le Gouvernement et le Parlement et réunit syndicats, patronat, associations.
- **Convention citoyenne pour le climat** (**2019-2020**), après la crise des **Gilets jaunes** : **150** citoyens tirés au sort, **149 propositions** pour réduire les gaz à effet de serre dans la justice sociale. Une partie a été reprise dans la loi **Climat et résilience** (2021).
- **Convention citoyenne sur la fin de vie** (**2022-2023**) : une majorité des participants s'est prononcée pour une aide active à mourir, sous conditions.

### Limites
- Les propositions ne sont **pas obligatoires** : le pouvoir peut ne pas les reprendre, ce qui crée de la **déception**.
- La **légitimité** de quelques citoyens tirés au sort face aux élus est discutée.

### À retenir pour le bac
- Représentative, directe, participative, délibérative : savoir les distinguer.
- Porto Alegre (1989) ; conseils de quartier (loi de 2002, plus de 80 000 habitants).
- Convention citoyenne : tirage au sort, acculturation, délibération, rapport.
- CESE, article 69 ; climat (2019-2020) et fin de vie (2022-2023).`,
      cartes: [
        { q: "Qu'est-ce que la démocratie représentative ?", r: "Les citoyens élisent des représentants qui décident en leur nom." },
        { q: "Qu'est-ce que la démocratie directe ?", r: "Les citoyens décident eux-mêmes, par exemple par référendum." },
        { q: "Qu'est-ce que la démocratie participative ?", r: "Les citoyens sont consultés et associés aux décisions, entre deux élections." },
        { q: "Que dit l'article 3 de la Constitution ?", r: "La souveraineté nationale appartient au peuple, qui l'exerce par ses représentants et par la voie du référendum." },
        { q: "Qu'est-ce que le budget participatif de Porto Alegre ?", r: "Depuis 1989, les habitants de cette ville du Brésil fixent des priorités du budget municipal." },
        { q: "Où les conseils de quartier sont-ils obligatoires ?", r: "Dans les communes de plus de 80 000 habitants, depuis la loi du 27 février 2002." },
        { q: "Qu'est-ce que la démocratie délibérative ?", r: "L'idée qu'une décision est légitime si elle sort d'une délibération argumentée, libre et informée, pas seulement d'une majorité." },
        { q: "Pourquoi tirer au sort les membres d'une convention citoyenne ?", r: "Pour donner à chacun la même chance de participer, quels que soient ses moyens ou son diplôme." },
        { q: "Quelles sont les étapes d'une convention citoyenne ?", r: "Tirage au sort, acculturation (auditions d'experts), délibération, adoption d'un rapport." },
        { q: "Qu'est-ce que le CESE ?", r: "Le Conseil économique, social et environnemental, troisième assemblée de la République (article 69), qui conseille Gouvernement et Parlement." },
        { q: "Qu'est-ce que la Convention citoyenne pour le climat ?", r: "150 citoyens tirés au sort (2019-2020) qui ont fait 149 propositions pour réduire les gaz à effet de serre." },
        { q: "Quelle loi a repris une partie des propositions de la Convention pour le climat ?", r: "La loi Climat et résilience de 2021." },
        { q: "Sur quoi portait la convention citoyenne de 2022-2023 ?", r: "Sur la fin de vie ; une majorité s'est prononcée pour une aide active à mourir sous conditions." },
        { q: "Quelle est la principale limite des conventions citoyennes ?", r: "Leurs propositions ne s'imposent pas : le pouvoir peut ne pas les reprendre." },
      ],
      quiz: [
        { q: "Élire des députés qui votent la loi au nom des citoyens relève de la démocratie :", choix: ["directe", "participative", "représentative", "délibérative"], bonne: 2, expl: "Les représentants décident au nom du peuple.", niv: 1 },
        { q: "Quelle ville a lancé en 1989 un budget participatif devenu célèbre ?", choix: ["Porto Alegre", "Barcelone", "Grenoble", "Montréal"], bonne: 0, expl: "Au Brésil, les habitants fixent des priorités du budget.", niv: 1 },
        { q: "Depuis 2002, les conseils de quartier sont obligatoires dans les communes de plus de :", choix: ["10 000 habitants", "20 000 habitants", "50 000 habitants", "80 000 habitants"], bonne: 3, expl: "Loi du 27 février 2002 relative à la démocratie de proximité.", niv: 2 },
        { q: "Comment sont choisis les membres d'une convention citoyenne ?", choix: ["Par élection au suffrage universel", "Par tirage au sort", "Par concours", "Par nomination du président"], bonne: 1, expl: "Le tirage au sort donne à chacun la même chance.", niv: 1 },
        { q: "Quelle étape d'une convention citoyenne consiste à auditionner des experts ?", choix: ["L'acculturation", "Le tirage au sort", "Le référendum", "La promulgation"], bonne: 0, expl: "Elle prépare la délibération pour former une opinion éclairée.", niv: 2 },
        { q: "Quel article de la Constitution consacre le CESE ?", choix: ["L'article 4", "L'article 49", "L'article 34", "L'article 69"], bonne: 3, expl: "C'est la troisième assemblée de la République.", niv: 2 },
        { q: "Combien de citoyens composaient la Convention citoyenne pour le climat ?", choix: ["577", "150", "348", "1 000"], bonne: 1, expl: "Ils ont formulé 149 propositions en 2019-2020.", niv: 2 },
        { q: "Quelle idée défend la démocratie délibérative ?", choix: ["La majorité suffit à rendre juste n'importe quelle décision prise", "Seuls les experts doivent décider", "La légitimité vient aussi de la qualité de la délibération", "Le vote doit être supprimé"], bonne: 2, expl: "Elle critique la démocratie « agrégative » qui additionne des voix.", niv: 3 },
        { q: "Quelle est la principale limite des conventions citoyennes ?", choix: ["Elles sont réservées aux élus", "Leur coût dépasse celui d'une élection", "Elles sont tirées au sort parmi les anciens ministres", "Leurs propositions ne s'imposent pas au pouvoir"], bonne: 3, expl: "Cela peut créer de la déception chez les participants.", niv: 3 },
        { q: "Dans quel contexte la Convention citoyenne pour le climat est-elle lancée ?", choix: ["Après la crise des Gilets jaunes", "Après la guerre d'Algérie", "Après Mai 68", "Après le référendum européen de 2005"], bonne: 0, expl: "Un contexte de forte défiance envers les institutions.", niv: 2 },
        { q: "Sur quel sujet porte la convention citoyenne de 2022-2023 ?", choix: ["Les retraites", "L'école", "La fin de vie", "L'immigration"], bonne: 2, expl: "Une majorité s'y est prononcée pour une aide active à mourir sous conditions.", niv: 1 },
      ],
    },
    // ---------------------------------------------------------------- 4
    {
      chapitre: 'emc-4',
      fiche: `## Le débat démocratique à l'ère numérique : information, désinformation, ingérences

Le programme insiste : le numérique a **transformé** la communication. Chacun peut publier, les informations et les opinions deviennent **virales**, et des acteurs peuvent **brouiller** le débat.

### Ce qui a changé
- Les **médias traditionnels** (presse, radio, télévision) ne filtrent plus seuls l'information : tout le monde peut devenir **émetteur**.
- Les **algorithmes** des réseaux sociaux mettent en avant ce qui fait réagir (colère, peur) : ils favorisent la **polarisation**.
- Les **bulles de filtre** et les **chambres d'écho** enferment chacun dans des contenus qui confirment ses opinions.
- Des **logiciels de génération** permettent de fabriquer de faux contenus très réalistes (images, voix, vidéos : les **hypertrucages**).

### Les formes du désordre informationnel
- La **désinformation** : une fausse information diffusée **volontairement** pour tromper.
- La **mésinformation** : une fausse information partagée **de bonne foi**.
- Le **complotisme** : expliquer les événements par un complot caché d'un petit groupe.
- Les **ingérences étrangères** : des États ou des groupes étrangers tentent d'influencer un débat ou une élection (faux comptes, campagnes coordonnées).
- La **mise en avant d'intérêts privés** par des groupes d'influence qui ne disent pas qui ils sont.

### Les réponses du droit
- La loi du **22 décembre 2018** contre la **manipulation de l'information** permet à un juge de faire retirer en urgence une fausse information pendant les **trois mois** avant une élection nationale.
- **Viginum** (créé en **2021**) est le service de l'État chargé de détecter les **ingérences numériques étrangères**.
- L'**Arcom** (née en **2022** de la fusion du CSA et de la Hadopi) régule l'audiovisuel et le numérique.
- Le règlement européen **DSA** (Digital Services Act, adopté en **2022**) oblige les grandes plateformes à lutter contre les contenus illicites et à expliquer leurs algorithmes.

### Le rôle des journalistes et des citoyens
- La **liberté de la presse** (loi du **29 juillet 1881**) et la protection du **secret des sources** des journalistes.
- Le **fact-checking** (vérification des faits) par des rédactions.
- L'**éducation aux médias et à l'information** : vérifier la **source**, la **date**, croiser avec d'autres sources, distinguer **fait** et **opinion**.

### Un débat démocratique à protéger
- La **liberté d'expression** reste la règle : lutter contre la désinformation ne doit pas devenir une **censure**. C'est une tension à expliquer.
- L'**esprit critique** est une compétence de citoyen : douter de façon méthodique, pas tout rejeter.

### À retenir pour le bac
- Algorithmes, bulles de filtre, polarisation, hypertrucages.
- Désinformation (volontaire) et mésinformation (de bonne foi).
- Loi de 2018, Viginum (2021), Arcom (2022), DSA (2022).
- Vérifier une information : source, date, croisement, fait ou opinion.`,
      cartes: [
        { q: "Qu'est-ce qui a changé avec le numérique dans le débat public ?", r: "Chacun peut publier ; les médias traditionnels ne filtrent plus seuls l'information, qui devient virale." },
        { q: "Pourquoi les algorithmes favorisent-ils la polarisation ?", r: "Ils mettent en avant les contenus qui font réagir, souvent la colère ou la peur." },
        { q: "Qu'est-ce qu'une bulle de filtre ?", r: "Un environnement en ligne où l'algorithme ne montre que des contenus qui confirment nos opinions." },
        { q: "Qu'est-ce qu'un hypertrucage ?", r: "Un faux contenu très réaliste (image, voix, vidéo) fabriqué par un logiciel de génération d'images ou de sons." },
        { q: "Désinformation ou mésinformation ?", r: "La désinformation est volontaire, pour tromper ; la mésinformation est partagée de bonne foi." },
        { q: "Qu'est-ce qu'une ingérence étrangère ?", r: "Une action d'un État ou d'un groupe étranger pour influencer un débat ou une élection, par exemple avec de faux comptes." },
        { q: "Que permet la loi du 22 décembre 2018 ?", r: "De faire retirer en urgence, par un juge, une fausse information pendant les trois mois avant une élection nationale." },
        { q: "Qu'est-ce que Viginum ?", r: "Le service de l'État, créé en 2021, chargé de détecter les ingérences numériques étrangères." },
        { q: "Qu'est-ce que l'Arcom ?", r: "L'autorité de régulation de l'audiovisuel et du numérique, née en 2022 de la fusion du CSA et de la Hadopi." },
        { q: "Qu'impose le DSA européen ?", r: "Aux grandes plateformes de lutter contre les contenus illicites et d'expliquer leurs algorithmes (règlement de 2022)." },
        { q: "Quelle loi fonde la liberté de la presse ?", r: "La loi du 29 juillet 1881." },
        { q: "Comment vérifier une information ?", r: "Identifier la source et la date, croiser avec d'autres sources, distinguer fait et opinion." },
        { q: "Quelle tension pose la lutte contre la désinformation ?", r: "Elle ne doit pas devenir une censure : la liberté d'expression reste la règle." },
        { q: "Qu'est-ce que le complotisme ?", r: "Expliquer les événements par un complot caché d'un petit groupe." },
      ],
      quiz: [
        { q: "Partager une fausse information en croyant qu'elle est vraie, c'est de la :", choix: ["désinformation", "propagande d'État", "censure", "mésinformation"], bonne: 3, expl: "La désinformation, elle, est volontaire.", niv: 1 },
        { q: "Un environnement en ligne qui ne montre que des contenus proches de nos opinions s'appelle :", choix: ["une bulle de filtre", "le fil d'actualité neutre", "un moteur de recherche", "un média de service public"], bonne: 0, expl: "Elle renforce la polarisation.", niv: 1 },
        { q: "Pourquoi les algorithmes des réseaux sociaux favorisent-ils la polarisation ?", choix: ["Ils sont programmés par l'État", "Ils trient les informations par date de publication", "Ils mettent en avant ce qui fait réagir", "Ils suppriment les avis minoritaires"], bonne: 2, expl: "La colère et la peur génèrent plus de clics et de partages.", niv: 2 },
        { q: "Quel service de l'État détecte les ingérences numériques étrangères ?", choix: ["L'Arcom", "Viginum", "La CNIL", "La HATVP"], bonne: 1, expl: "Il a été créé en 2021.", niv: 2 },
        { q: "La loi de 2018 contre la manipulation de l'information s'applique surtout :", choix: ["aux cours de récréation", "pendant les campagnes pour les élections municipales", "aux publicités pour enfants", "dans les trois mois avant une élection nationale"], bonne: 3, expl: "Un juge peut faire retirer en urgence une fausse information.", niv: 3 },
        { q: "Quel texte européen impose des obligations aux grandes plateformes numériques ?", choix: ["Le DSA", "La charte de Venise", "Le traité de Rome", "La convention de Genève"], bonne: 0, expl: "Le Digital Services Act a été adopté en 2022.", niv: 2 },
        { q: "Quelle vidéo réaliste d'un dirigeant disant des propos inventés est un exemple de :", choix: ["fact-checking", "secret des sources", "hypertrucage", "bulle de filtre"], bonne: 2, expl: "Des logiciels de génération permettent de fabriquer ces faux contenus.", niv: 2 },
        { q: "Quelle loi de 1881 protège la liberté de la presse ?", choix: ["La loi du 9 décembre 1905", "La loi du 29 juillet 1881", "La loi du 1er juillet 1901", "La loi du 22 décembre 2018"], bonne: 1, expl: "Elle reste le cadre de la liberté de la presse en France.", niv: 2 },
        { q: "Quel réflexe est le plus utile pour vérifier une information ?", choix: ["Regarder le nombre de partages et de mentions", "Croire le compte le plus suivi", "Lire le titre et s'arrêter là", "Croiser avec d'autres sources fiables"], bonne: 3, expl: "On vérifie aussi la source, la date, et on distingue fait et opinion.", niv: 1 },
        { q: "Pourquoi la lutte contre la désinformation pose-t-elle un problème démocratique ?", choix: ["Elle ne doit pas devenir une censure", "Elle est interdite par la Constitution", "Elle coûte trop cher aux plateformes", "Elle empêche de voter"], bonne: 0, expl: "La liberté d'expression reste la règle, avec des limites fixées par la loi.", niv: 3 },
        { q: "De quelle fusion est née l'Arcom en 2022 ?", choix: ["Du CESE et du Sénat", "De la CNIL et de Viginum", "Du CSA et de la Hadopi", "De l'AFP et de Radio France"], bonne: 2, expl: "Elle régule l'audiovisuel et le numérique.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 5
    {
      chapitre: 'emc-5',
      fiche: `## Intérêt général, représentativité et légitimité

Une décision démocratique doit servir l'**intérêt général**, être prise par des représentants **reconnus** et apparaître **légitime**. Ces trois notions sont au cœur de la deuxième partie du programme.

### Les institutions
- Une **institution** est un ensemble de structures politiques **régies par le droit**, qui fixent des règles, les font appliquer et les maintiennent (le Parlement, le Gouvernement, les tribunaux, les communes).
- Le représentant n'agit pas en son nom propre, mais **au nom de l'institution**, dans le cadre de ses compétences.

### L'intérêt général
- Il n'a pas de définition juridique unique : c'est ce qui **dépasse les intérêts particuliers** et justifie l'action publique.
- Deux conceptions s'opposent :
- pour les **utilitaristes** (Jeremy **Bentham**), l'intérêt général est la **somme** des intérêts particuliers : il faut le plus grand bonheur du plus grand nombre ;
- pour **Rousseau** (Du contrat social, 1762), il existe un **intérêt commun** différent de cette somme, porté par la **volonté générale**. L'**article 6** de la DDHC de 1789 : « la loi est l'expression de la volonté générale ».
- Au XXe siècle, **John Rawls** (Théorie de la justice, 1971) ajoute que l'action pour le bien commun doit respecter les **libertés** de chacun et profiter d'abord aux **plus désavantagés**.

### La représentativité
- C'est le fait d'être reconnu pour **parler et agir au nom** d'un groupe (électeurs, adhérents d'un syndicat).
- En France, elle repose sur l'**élection** et le **principe majoritaire**.
- Elle a une dimension **sociale** : si certaines catégories (ouvriers, jeunes, femmes autrefois) sont peu présentes parmi les élus, la représentation paraît moins légitime. La **parité** (loi de **2000**) a été une réponse.
- Les **députés** représentent la **nation entière**, pas seulement leur circonscription : le **mandat impératif** est interdit (article 27 de la Constitution).

### La légitimité
- La légitimité est la capacité à faire **accepter** son pouvoir.
- **Max Weber** distingue trois légitimités : **traditionnelle** (la coutume, les dynasties), **charismatique** (une personnalité exceptionnelle), **rationnelle-légale** (des règles impersonnelles ; on obéit à la fonction, pas à la personne).
- **Légalité** et **légitimité** ne se confondent pas : une action légale peut sembler illégitime, une action illégale peut sembler légitime (la désobéissance civile).
- Selon l'échelle, la légitimité a des sources différentes : le **suffrage universel** pour un Parlement national ; une **double légitimité** dans l'Union européenne (les citoyens et les États) ; le **consentement des États** dans les organisations internationales.

### La confiance
- L'adhésion aux décisions dépend de la **confiance** : elle est à un niveau très bas en France envers les partis, le Parlement et les médias, surtout chez les jeunes.

### À retenir pour le bac
- Intérêt général : Bentham (somme), Rousseau (volonté générale), Rawls (les plus désavantagés).
- Article 6 de la DDHC : la loi, expression de la volonté générale.
- Weber : trois légitimités.
- Légal ne veut pas dire légitime.`,
      cartes: [
        { q: "Qu'est-ce qu'une institution ?", r: "Un ensemble de structures politiques régies par le droit, qui fixent des règles, les font appliquer et les maintiennent." },
        { q: "Qu'est-ce que l'intérêt général ?", r: "Ce qui dépasse les intérêts particuliers et justifie l'action des pouvoirs publics." },
        { q: "Comment Bentham définit-il l'intérêt général ?", r: "Comme la somme des intérêts particuliers : le plus grand bonheur du plus grand nombre (utilitarisme)." },
        { q: "Comment Rousseau définit-il l'intérêt général ?", r: "Comme un intérêt commun, différent de la somme des intérêts particuliers, porté par la volonté générale." },
        { q: "Que dit l'article 6 de la DDHC de 1789 ?", r: "« La loi est l'expression de la volonté générale. »" },
        { q: "Qu'ajoute John Rawls (1971) ?", r: "L'action pour le bien commun doit respecter les libertés de chacun et profiter d'abord aux plus désavantagés." },
        { q: "Qu'est-ce que la représentativité ?", r: "Le fait d'être reconnu pour parler et agir au nom d'un groupe." },
        { q: "Pourquoi la représentativité a-t-elle une dimension sociale ?", r: "Si des catégories sont peu présentes parmi les élus, la représentation paraît moins légitime." },
        { q: "Qu'est-ce que le mandat impératif, et est-il permis ?", r: "Un mandat qui obligerait l'élu à suivre les ordres de ses électeurs ; il est interdit (article 27 de la Constitution)." },
        { q: "Quelles sont les trois légitimités selon Max Weber ?", r: "Traditionnelle, charismatique et rationnelle-légale." },
        { q: "Qu'est-ce que la légitimité rationnelle-légale ?", r: "Celle qui repose sur des règles impersonnelles : on obéit à la fonction, pas à la personne." },
        { q: "Légalité et légitimité : quelle différence ?", r: "La légalité est la conformité au droit ; la légitimité est l'acceptation du pouvoir. Les deux peuvent diverger." },
        { q: "Qu'est-ce que la double légitimité de l'Union européenne ?", r: "Elle repose à la fois sur les citoyens (Parlement européen) et sur les États (Conseil)." },
        { q: "Sur quoi repose la légitimité des organisations internationales ?", r: "Sur le consentement des États souverains, qui ont ratifié leurs traités." },
      ],
      quiz: [
        { q: "Pour l'utilitarisme de Bentham, l'intérêt général est :", choix: ["la volonté du roi", "la somme des intérêts particuliers", "un intérêt différent de cette somme", "l'intérêt des plus riches"], bonne: 1, expl: "Il s'agit du plus grand bonheur du plus grand nombre.", niv: 2 },
        { q: "Quel article de la DDHC affirme que « la loi est l'expression de la volonté générale » ?", choix: ["L'article 1er", "L'article 4", "L'article 2", "L'article 6"], bonne: 3, expl: "L'idée vient de Rousseau.", niv: 2 },
        { q: "Qui défend une justice qui profite d'abord aux plus désavantagés ?", choix: ["John Rawls", "Max Weber", "Jeremy Bentham", "Robert Michels"], bonne: 0, expl: "Théorie de la justice, 1971.", niv: 2 },
        { q: "Un pouvoir accepté parce qu'il suit des règles impersonnelles relève de la légitimité :", choix: ["traditionnelle", "charismatique", "rationnelle-légale", "religieuse"], bonne: 2, expl: "On obéit à la fonction, pas à la personne.", niv: 2 },
        { q: "Un député qui serait obligé de voter selon les ordres de ses électeurs aurait un mandat :", choix: ["représentatif", "impératif", "européen", "local"], bonne: 1, expl: "Le mandat impératif est interdit par l'article 27 de la Constitution.", niv: 3 },
        { q: "Que représentent les députés selon la Constitution ?", choix: ["La nation tout entière", "Leur seule circonscription", "Leur parti politique", "Le président de la République"], bonne: 0, expl: "Ils peuvent porter les attentes de leur circonscription, mais votent au nom de la nation.", niv: 2 },
        { q: "Quel exemple montre qu'une action peut être légale mais jugée illégitime ?", choix: ["Un juge qui applique la loi votée par le Parlement", "Un vote clair à une large majorité", "Une élection libre et transparente", "Une loi votée que beaucoup jugent injuste"], bonne: 3, expl: "Légalité et légitimité ne se confondent pas.", niv: 3 },
        { q: "Quelle loi de 2000 répond au manque de femmes parmi les élus ?", choix: ["La loi sur la parité", "La loi sur la laïcité", "La loi sur la presse", "La loi sur les associations"], bonne: 0, expl: "Elle impose l'égal accès des femmes et des hommes aux mandats.", niv: 2 },
        { q: "Sur quoi repose la légitimité de l'ONU ?", choix: ["Sur une élection directe par les habitants de la Terre", "Sur la volonté du secrétaire général", "Sur le consentement des États qui ont ratifié la Charte", "Sur la puissance militaire et économique des États-Unis"], bonne: 2, expl: "Les organisations internationales tirent leur autorité des traités.", niv: 3 },
        { q: "Une institution est :", choix: ["une association de quartier sans statut juridique", "une opinion partagée par la majorité", "un parti politique au pouvoir", "un ensemble de structures régies par le droit"], bonne: 3, expl: "Elle fixe des règles, les fait appliquer et les maintient.", niv: 1 },
        { q: "Un chef obéi grâce à sa personnalité jugée exceptionnelle tire sa légitimité :", choix: ["de la tradition", "du charisme", "de la loi", "du tirage au sort"], bonne: 1, expl: "C'est la légitimité charismatique de Weber.", niv: 1 },
      ],
    },
    // ---------------------------------------------------------------- 6
    {
      chapitre: 'emc-6',
      fiche: `## Délibérer et décider en France : le Parlement, la loi et le budget

En France, la délibération institutionnelle a lieu d'abord au **Parlement**, composé de l'**Assemblée nationale** (**577 députés**, élus au suffrage universel direct pour cinq ans) et du **Sénat** (**348 sénateurs**, élus au suffrage indirect pour six ans).

### Le vote de la loi
- L'initiative vient du **Gouvernement** (**projet** de loi) ou des parlementaires (**proposition** de loi).
- Le texte est étudié en **commission**, puis en **séance publique** : on dépose et on vote des **amendements**.
- La **navette** : le texte passe d'une chambre à l'autre jusqu'à un vote dans les mêmes termes. En cas de désaccord, une **commission mixte paritaire** (7 députés et 7 sénateurs) cherche un compromis ; à la fin, l'Assemblée nationale peut avoir le **dernier mot**.
- Le président de la République **promulgue** la loi, qui est publiée au **Journal officiel**.
- Les décisions se prennent en général à la **majorité** : la minorité doit accepter le résultat, mais garde ses **droits**.

### Le vote du budget : la loi de finances
- Chaque automne, le Parlement vote la **loi de finances** : les recettes (impôts) et les dépenses de l'État pour l'année suivante. C'est l'un des pouvoirs les plus anciens des assemblées (consentir à l'impôt).
- Selon l'**article 47** de la Constitution, le Parlement a **70 jours** pour se prononcer ; sinon, le Gouvernement peut appliquer le budget par **ordonnance**.
- Le Gouvernement peut engager sa responsabilité avec l'**article 49, alinéa 3** : le texte est adopté sans vote, sauf si une **motion de censure** est votée par la majorité absolue des députés. Depuis 2008, cet outil est limité, sauf pour les textes budgétaires.
- Le **4 décembre 2024**, une motion de censure a renversé le gouvernement de Michel Barnier, pour la première fois depuis **1962**, lors du débat budgétaire.

### Le contrôle de la décision
- Le **Conseil constitutionnel** vérifie que la loi respecte la Constitution. Il peut être saisi avant la promulgation par **60 députés** ou **60 sénateurs** (depuis **1974**), et après, par un citoyen grâce à la **question prioritaire de constitutionnalité** (**QPC**, en vigueur depuis **2010**).
- Le Parlement **contrôle** le Gouvernement : questions au Gouvernement, **commissions d'enquête**, motions de censure.

### D'autres lieux de délibération
- Le **conseil municipal** délibère en séance **publique** ; le **référendum** (article 11) permet au peuple de trancher directement.
- Le **référendum d'initiative partagée** (RIP, créé en **2008**) demande un cinquième des parlementaires et un dixième des électeurs inscrits.

### À retenir pour le bac
- 577 députés, 348 sénateurs ; projet ou proposition ; navette ; commission mixte paritaire ; promulgation.
- Loi de finances : 70 jours (article 47) ; article 49.3 et motion de censure.
- Conseil constitutionnel : saisine par 60 parlementaires (1974), QPC (2010).
- Décider à la majorité, c'est accepter le désaccord.`,
      cartes: [
        { q: "Combien y a-t-il de députés et de sénateurs ?", r: "577 députés et 348 sénateurs." },
        { q: "Comment sont élus les députés et les sénateurs ?", r: "Les députés au suffrage universel direct pour cinq ans ; les sénateurs au suffrage indirect pour six ans." },
        { q: "Projet ou proposition de loi ?", r: "Un projet vient du Gouvernement ; une proposition vient des parlementaires." },
        { q: "Qu'est-ce qu'un amendement ?", r: "Une modification d'un texte de loi proposée et votée pendant son examen." },
        { q: "Qu'est-ce que la navette parlementaire ?", r: "Le va-et-vient d'un texte entre l'Assemblée et le Sénat jusqu'à un vote dans les mêmes termes." },
        { q: "Qu'est-ce qu'une commission mixte paritaire ?", r: "Sept députés et sept sénateurs qui cherchent un compromis quand les deux chambres ne s'accordent pas." },
        { q: "Qui promulgue la loi ?", r: "Le président de la République ; elle est publiée au Journal officiel." },
        { q: "Qu'est-ce que la loi de finances ?", r: "Le budget de l'État : les recettes et les dépenses pour l'année suivante, votées chaque automne." },
        { q: "Combien de temps le Parlement a-t-il pour voter le budget ?", r: "70 jours (article 47) ; sinon, le Gouvernement peut l'appliquer par ordonnance." },
        { q: "Qu'est-ce que l'article 49.3 ?", r: "Le Gouvernement engage sa responsabilité : le texte est adopté sans vote, sauf si une motion de censure est votée." },
        { q: "Que s'est-il passé le 4 décembre 2024 ?", r: "Une motion de censure a renversé le gouvernement Barnier, pour la première fois depuis 1962." },
        { q: "Qui peut saisir le Conseil constitutionnel avant la promulgation ?", r: "Notamment 60 députés ou 60 sénateurs, depuis 1974." },
        { q: "Qu'est-ce que la QPC ?", r: "La question prioritaire de constitutionnalité : depuis 2010, un citoyen peut contester une loi déjà en vigueur lors d'un procès." },
        { q: "Qu'est-ce que le référendum d'initiative partagée ?", r: "Un référendum lancé par un cinquième des parlementaires et soutenu par un dixième des électeurs inscrits (créé en 2008)." },
      ],
      quiz: [
        { q: "Combien de députés siègent à l'Assemblée nationale ?", choix: ["348", "577", "450", "500"], bonne: 1, expl: "Le Sénat compte 348 sénateurs ; 925 parlementaires en tout.", niv: 1 },
        { q: "Un texte de loi déposé par le Gouvernement s'appelle :", choix: ["un projet de loi", "une proposition de loi", "un amendement", "une ordonnance"], bonne: 0, expl: "Une proposition vient des parlementaires.", niv: 1 },
        { q: "Le va-et-vient d'un texte entre l'Assemblée et le Sénat s'appelle :", choix: ["la censure", "la promulgation", "la cohabitation", "la navette"], bonne: 3, expl: "Il dure jusqu'à un vote dans les mêmes termes.", niv: 1 },
        { q: "Quand les deux chambres ne s'accordent pas, qui cherche un compromis ?", choix: ["Le Conseil d'État", "La Cour des comptes", "Une commission mixte paritaire", "Le Conseil constitutionnel, saisi par le Sénat"], bonne: 2, expl: "Sept députés et sept sénateurs.", niv: 2 },
        { q: "Combien de jours le Parlement a-t-il pour voter la loi de finances ?", choix: ["30 jours", "45 jours", "60 jours", "70 jours"], bonne: 3, expl: "Article 47 de la Constitution ; sinon, ordonnance possible.", niv: 2 },
        { q: "Avec l'article 49.3, un texte est adopté sans vote sauf si :", choix: ["le Sénat s'y oppose", "une motion de censure est votée", "le président de la République refuse de signer", "un référendum est organisé"], bonne: 1, expl: "Il faut la majorité absolue des députés pour la censure.", niv: 2 },
        { q: "En décembre 2024, une motion de censure a renversé un gouvernement pour la première fois depuis :", choix: ["1962", "1968", "1981", "2005"], bonne: 0, expl: "Le gouvernement Barnier est tombé pendant le débat budgétaire.", niv: 3 },
        { q: "Depuis 2010, comment un citoyen peut-il contester une loi déjà en vigueur ?", choix: ["Par une pétition en ligne", "Par une lettre recommandée au président de la République", "Par un vote au conseil municipal", "Par une question prioritaire de constitutionnalité"], bonne: 3, expl: "La QPC est posée lors d'un procès.", niv: 2 },
        { q: "Pourquoi décider à la majorité suppose-t-il d'accepter le désaccord ?", choix: ["Parce que la minorité perd ses droits", "Parce que la décision peut mécontenter une minorité", "Parce que l'unanimité est interdite", "Parce que les votes sont secrets"], bonne: 1, expl: "La minorité accepte le résultat mais garde ses droits d'opposition.", niv: 3 },
        { q: "Que faut-il pour un référendum d'initiative partagée ?", choix: ["Un cinquième des parlementaires et un dixième des électeurs", "Tous les maires de France", "L'accord du Conseil de sécurité de l'Organisation des Nations unies", "La moitié des sénateurs seulement"], bonne: 0, expl: "Ce dispositif a été créé par la révision de 2008.", niv: 3 },
        { q: "Qui promulgue une loi votée par le Parlement ?", choix: ["Le Premier ministre", "Le président de l'Assemblée", "Le président de la République", "Le Conseil constitutionnel"], bonne: 2, expl: "Elle est ensuite publiée au Journal officiel.", niv: 1 },
      ],
    },
    // ---------------------------------------------------------------- 7
    {
      chapitre: 'emc-7',
      fiche: `## Délibérer et décider dans l'Union européenne

L'Union européenne (**27 États** membres) prend des décisions qui s'appliquent directement en France. Le livret Éduscol propose d'étudier « ce que l'Europe fait pour moi ».

### Les institutions qui délibèrent
- La **Commission européenne** : un commissaire par État ; elle a l'**initiative** des lois (elle propose) et veille à l'application des traités.
- Le **Parlement européen** : **720 députés** élus au suffrage universel direct en **2024** pour cinq ans, dont **81** pour la France. Il représente les **citoyens**.
- Le **Conseil de l'Union européenne** : les **ministres** des États, selon le sujet (agriculture, environnement…). Il représente les **États**.
- Le **Conseil européen** : les **chefs d'État ou de gouvernement** ; il fixe les grandes orientations, en général par **consensus**.

### Comment une loi européenne est adoptée
- La **procédure législative ordinaire** (la « codécision ») : la Commission propose, puis le **Parlement** et le **Conseil** doivent adopter le même texte. Des négociations à trois (les « **trilogues** ») cherchent un compromis.
- Deux grands types de textes : le **règlement**, qui s'applique directement et de la même façon partout ; la **directive**, qui fixe un objectif que chaque État **transpose** dans sa loi.

### Majorité, consensus, unanimité
- Au Conseil, la règle la plus courante est la **majorité qualifiée** : **55 % des États** (au moins 15 sur 27) représentant **65 % de la population** de l'Union.
- Certaines décisions demandent l'**unanimité** : la **politique étrangère**, la fiscalité, l'entrée d'un nouvel État. Un seul État peut alors bloquer.
- Cette **hybridation** concilie l'**efficacité** (la majorité) et le respect des **souverainetés** (l'unanimité).

### La double légitimité
- L'Union est à la fois une **union de peuples** (le Parlement européen) et une **union d'États** (les deux Conseils) : c'est sa **double légitimité**.
- Le droit européen **prime** sur le droit national (principe de **primauté**) ; la **Cour de justice de l'Union européenne** (Luxembourg) veille à son respect.

### Ce que l'Europe fait pour moi
- La fin des **frais d'itinérance** pour le téléphone dans l'Union (**2017**).
- Le **RGPD** (**2018**) : la protection des **données personnelles** en ligne.
- Le **chargeur universel** USB-C obligatoire pour les téléphones neufs (**fin 2024**).
- Le programme **Erasmus+** pour étudier ou se former à l'étranger.

### Les critiques
- On parle de « **déficit démocratique** » : des décisions jugées lointaines, complexes, prises par des institutions peu connues.
- L'**abstention** aux élections européennes reste forte, même si la participation a remonté en 2019 et en 2024 (autour de 50 % dans l'Union).

### À retenir pour le bac
- Commission (propose), Parlement (citoyens), Conseil de l'UE (États), Conseil européen (orientations).
- 720 députés dont 81 français (2024) ; codécision ; règlement et directive.
- Majorité qualifiée : 55 % des États, 65 % de la population ; unanimité en politique étrangère.
- Double légitimité ; primauté du droit européen.`,
      cartes: [
        { q: "Combien d'États compte l'Union européenne ?", r: "27 États membres." },
        { q: "Quel est le rôle de la Commission européenne ?", r: "Elle a l'initiative des lois européennes et veille à l'application des traités." },
        { q: "Combien de députés européens ont été élus en 2024, et combien pour la France ?", r: "720, dont 81 pour la France." },
        { q: "Qui siège au Conseil de l'Union européenne ?", r: "Les ministres des États membres, selon le sujet traité." },
        { q: "Qui siège au Conseil européen ?", r: "Les chefs d'État ou de gouvernement, qui fixent les grandes orientations." },
        { q: "Qu'est-ce que la procédure législative ordinaire ?", r: "La codécision : la Commission propose, puis le Parlement et le Conseil doivent adopter le même texte." },
        { q: "Règlement ou directive ?", r: "Le règlement s'applique directement partout ; la directive fixe un objectif que chaque État transpose dans sa loi." },
        { q: "Qu'est-ce que la majorité qualifiée au Conseil ?", r: "55 % des États (au moins 15 sur 27) représentant 65 % de la population de l'Union." },
        { q: "Dans quels domaines faut-il l'unanimité ?", r: "Notamment la politique étrangère, la fiscalité et l'entrée d'un nouvel État." },
        { q: "Qu'est-ce que la double légitimité de l'Union ?", r: "Elle est à la fois une union de peuples (Parlement) et une union d'États (Conseils)." },
        { q: "Qu'est-ce que la primauté du droit européen ?", r: "Le droit européen l'emporte sur le droit national en cas de conflit." },
        { q: "Qu'est-ce que le RGPD ?", r: "Le règlement européen de 2018 qui protège les données personnelles." },
        { q: "Citez deux effets concrets du droit européen.", r: "La fin des frais d'itinérance (2017) et le chargeur universel USB-C (fin 2024)." },
        { q: "Qu'appelle-t-on le déficit démocratique ?", r: "La critique de décisions européennes jugées lointaines, complexes et peu contrôlées par les citoyens." },
      ],
      quiz: [
        { q: "Quelle institution européenne a l'initiative des lois ?", choix: ["Le Parlement européen", "La Commission européenne", "La Cour de justice", "Le Conseil européen"], bonne: 1, expl: "Elle propose, puis le Parlement et le Conseil adoptent.", niv: 1 },
        { q: "Combien de députés européens la France élit-elle depuis 2024 ?", choix: ["81", "72", "79", "74"], bonne: 0, expl: "Sur 720 députés au total.", niv: 2 },
        { q: "Qui représente les États dans la procédure législative ?", choix: ["Le Parlement européen", "La Banque centrale européenne de Francfort", "Le Médiateur européen", "Le Conseil de l'Union européenne"], bonne: 3, expl: "Il réunit les ministres des États membres.", niv: 2 },
        { q: "Un texte européen qui s'applique directement dans tous les États est :", choix: ["une directive", "une recommandation", "un règlement", "un avis"], bonne: 2, expl: "La directive doit être transposée par chaque État.", niv: 2 },
        { q: "La majorité qualifiée au Conseil exige 55 % des États représentant au moins :", choix: ["65 % de la population", "70 % de la population", "75 % de la population", "90 % de la population"], bonne: 0, expl: "Soit au moins 15 États sur 27.", niv: 3 },
        { q: "Dans quel domaine l'unanimité reste-t-elle la règle ?", choix: ["Le prix des téléphones", "La politique étrangère", "Les normes des chargeurs", "Les frais d'itinérance"], bonne: 1, expl: "Un seul État peut alors bloquer une décision.", niv: 2 },
        { q: "Pourquoi parle-t-on de « double légitimité » de l'Union européenne ?", choix: ["Elle a deux capitales, Bruxelles et Strasbourg", "Elle a deux monnaies", "Elle a deux présidents élus par les peuples européens chaque année", "Elle représente à la fois les citoyens et les États"], bonne: 3, expl: "Parlement pour les citoyens, Conseils pour les États.", niv: 3 },
        { q: "Quel texte européen de 2018 protège les données personnelles ?", choix: ["Le DSA", "Le traité de Maastricht", "Le RGPD", "La charte de l'ONU"], bonne: 2, expl: "Le règlement général sur la protection des données.", niv: 1 },
        { q: "Comment s'appellent les négociations entre Commission, Parlement et Conseil sur un texte ?", choix: ["Les trilogues", "Les navettes", "Les conventions", "Les référendums"], bonne: 0, expl: "Elles cherchent un compromis entre les institutions.", niv: 3 },
        { q: "Que signifie la primauté du droit européen ?", choix: ["Il ne s'applique qu'aux étrangers", "Il l'emporte sur le droit national en cas de conflit", "Il remplace entièrement la Constitution française de 1958", "Il est voté par les maires"], bonne: 1, expl: "La Cour de justice de l'Union veille à son respect.", niv: 2 },
        { q: "Quelle critique désigne l'expression « déficit démocratique » ?", choix: ["Le manque d'argent de l'Union", "L'absence d'élections européennes depuis la création de l'Union", "Le nombre trop élevé d'États", "Des décisions jugées lointaines et peu contrôlées"], bonne: 3, expl: "Elle nourrit en partie l'abstention aux élections européennes.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 8
    {
      chapitre: 'emc-8',
      fiche: `## Délibérer et décider à l'échelle internationale : l'ONU et le multilatéralisme

À l'échelle mondiale, il n'existe pas de gouvernement ni de Parlement élu. Les décisions reposent sur la **négociation** entre **États souverains** : c'est le **multilatéralisme**.

### L'Organisation des Nations unies
- Créée par la **Charte de San Francisco** en **1945**, après la Seconde Guerre mondiale, pour maintenir la **paix** et la **sécurité** internationales. Elle compte **193 États** membres.
- L'**Assemblée générale** : **un État, une voix**. Elle vote des **résolutions**, en général **non contraignantes** ; les questions importantes demandent une majorité des **deux tiers**.
- Le **Conseil de sécurité** : **15 membres**, dont **5 permanents** (États-Unis, Russie, Chine, Royaume-Uni, France) qui disposent d'un **droit de veto**. Une décision demande **9 voix** et aucun veto. Ses résolutions sont **obligatoires** et peuvent autoriser l'usage de la force (chapitre VII de la Charte).
- Le **secrétaire général** dirige l'administration et joue un rôle de médiateur.
- La **Cour internationale de justice** (La Haye) règle les différends entre États qui acceptent sa compétence.

### Le consensus, une règle fréquente
- Dans beaucoup d'enceintes (conférences sur le climat, Organisation mondiale du commerce), on décide par **consensus** : aucun État ne s'oppose formellement.
- Avantage : l'**adhésion** de tous. Inconvénients : la **lenteur**, des compromis **minimalistes**, des **blocages**.
- Exemple : l'**accord de Paris** sur le climat (**COP21**, **2015**) adopté par consensus par près de 200 délégations : limiter le réchauffement « nettement en dessous de 2 °C ».

### Les limites du multilatéralisme
- Le **veto** peut paralyser le Conseil de sécurité, par exemple sur la Syrie ou sur l'Ukraine depuis 2022.
- Les organisations internationales dépendent du **bon vouloir** des États et de leur financement.
- La **représentativité** du Conseil de sécurité est critiquée : sa composition reflète le monde de 1945 (aucun membre permanent africain ou latino-américain).

### Apprendre en simulant
- Le livret Éduscol propose la **Modélisation des Nations unies** (MNU) : des élèves jouent des délégués, négocient et votent des résolutions. On y découvre la **diplomatie**, le **compromis** et le poids des rapports de force.

### À retenir pour le bac
- ONU : 1945, Charte de San Francisco, 193 États.
- Assemblée générale : un État, une voix ; résolutions non contraignantes.
- Conseil de sécurité : 15 membres, 5 permanents avec veto, 9 voix pour décider.
- Consensus : adhésion de tous mais lenteur et blocages ; accord de Paris (2015).`,
      cartes: [
        { q: "Quand et par quel texte l'ONU est-elle créée ?", r: "En 1945, par la Charte de San Francisco." },
        { q: "Combien d'États sont membres de l'ONU ?", r: "193." },
        { q: "Comment vote l'Assemblée générale de l'ONU ?", r: "Un État, une voix ; ses résolutions sont en général non contraignantes." },
        { q: "Combien de membres compte le Conseil de sécurité ?", r: "15, dont 5 permanents." },
        { q: "Quels sont les membres permanents du Conseil de sécurité ?", r: "Les États-Unis, la Russie, la Chine, le Royaume-Uni et la France." },
        { q: "Qu'est-ce que le droit de veto ?", r: "Le pouvoir d'un membre permanent de bloquer seul une décision du Conseil de sécurité." },
        { q: "Combien de voix faut-il pour une décision du Conseil de sécurité ?", r: "9 voix sur 15, sans veto d'un membre permanent." },
        { q: "Les résolutions du Conseil de sécurité sont-elles obligatoires ?", r: "Oui ; elles peuvent même autoriser l'usage de la force (chapitre VII)." },
        { q: "Qu'est-ce que le multilatéralisme ?", r: "La coopération et la négociation entre de nombreux États pour prendre des décisions communes." },
        { q: "Qu'est-ce qu'une décision par consensus ?", r: "Une décision adoptée sans opposition formelle d'aucun État." },
        { q: "Quels sont les inconvénients du consensus ?", r: "La lenteur, des compromis minimalistes et des blocages." },
        { q: "Qu'est-ce que l'accord de Paris ?", r: "L'accord sur le climat de la COP21 (2015), adopté par consensus, pour limiter le réchauffement nettement sous 2 °C." },
        { q: "Pourquoi la représentativité du Conseil de sécurité est-elle critiquée ?", r: "Sa composition reflète le monde de 1945 : aucun membre permanent africain ou latino-américain." },
        { q: "Qu'est-ce que la Cour internationale de justice ?", r: "Le tribunal de l'ONU, à La Haye, qui règle les différends entre États." },
      ],
      quiz: [
        { q: "En quelle année l'ONU est-elle créée ?", choix: ["1945", "1948", "1957", "1989"], bonne: 0, expl: "Par la Charte de San Francisco, après la Seconde Guerre mondiale.", niv: 1 },
        { q: "À l'Assemblée générale de l'ONU, chaque État dispose :", choix: ["d'un nombre de voix selon sa population", "d'un droit de veto", "d'une voix, comme tous les autres", "d'une voix s'il paie sa cotisation"], bonne: 2, expl: "Un État, une voix, quelle que soit sa taille.", niv: 1 },
        { q: "Combien de membres permanents compte le Conseil de sécurité ?", choix: ["Trois", "Dix", "Quinze", "Cinq"], bonne: 3, expl: "États-Unis, Russie, Chine, Royaume-Uni, France.", niv: 1 },
        { q: "Quel pays n'est **pas** membre permanent du Conseil de sécurité ?", choix: ["La Chine", "L'Allemagne", "La France", "Le Royaume-Uni"], bonne: 1, expl: "Les membres permanents sont les vainqueurs de 1945.", niv: 2 },
        { q: "Combien de voix faut-il pour adopter une décision du Conseil de sécurité ?", choix: ["5", "7", "9", "8"], bonne: 2, expl: "9 voix sur 15, et aucun veto d'un membre permanent.", niv: 2 },
        { q: "Quelle différence entre les résolutions de l'Assemblée générale et du Conseil de sécurité ?", choix: ["Celles du Conseil de sécurité sont obligatoires", "Celles de l'Assemblée générale sont obligatoires", "Elles ont la même valeur juridique", "Elles ne sont pas votées"], bonne: 0, expl: "Le Conseil peut même autoriser l'usage de la force.", niv: 3 },
        { q: "Une décision adoptée sans opposition formelle d'aucun État est prise :", choix: ["à la majorité simple", "par veto", "par tirage au sort", "par consensus"], bonne: 3, expl: "C'est fréquent dans les conférences sur le climat.", niv: 1 },
        { q: "Quel est le principal inconvénient du consensus ?", choix: ["Il favorise les grandes puissances seules", "Il peut ralentir et bloquer la décision", "Il interdit toute négociation", "Il oblige à voter chaque jour"], bonne: 1, expl: "Il produit aussi des compromis minimalistes.", niv: 2 },
        { q: "Quel accord de 2015 a été adopté par consensus à la COP21 ?", choix: ["Le traité de Lisbonne", "La Charte des Nations unies de San Francisco", "Le protocole de Kyoto", "L'accord de Paris sur le climat"], bonne: 3, expl: "Il vise à limiter le réchauffement nettement sous 2 °C.", niv: 2 },
        { q: "Pourquoi la composition du Conseil de sécurité est-elle critiquée ?", choix: ["Elle reflète le monde de 1945", "Elle change chaque mois", "Elle exclut la France", "Elle compte trop de membres africains"], bonne: 0, expl: "Aucun membre permanent n'est africain ou latino-américain.", niv: 3 },
        { q: "Qu'apprend-on en simulant une Modélisation des Nations unies ?", choix: ["À devenir fonctionnaire de l'ONU après le bac", "À écrire une Constitution", "La négociation et le compromis entre États", "Le fonctionnement d'un tribunal"], bonne: 2, expl: "Les élèves jouent des délégués et votent des résolutions.", niv: 2 },
      ],
    },
    // ---------------------------------------------------------------- 9
    {
      chapitre: 'emc-9',
      fiche: `## Après la décision : majorité, opposition, contrôle et contestation légale

Le consensus total est rare. Une décision prise à la **majorité** peut créer des **désaccords**. En démocratie, on peut être dans l'**opposition**, se faire entendre et **contester légalement** une décision.

### Accepter la décision majoritaire
- La décision majoritaire, ou celle qui s'appuie sur la **légitimité de l'élection**, s'impose à tous : c'est la condition de l'**État de droit**.
- Mais la **minorité** n'est pas écrasée : ses droits sont **garantis**. Vivre en démocratie, c'est aussi accepter d'être dans l'opposition.

### Les droits de l'opposition
- Depuis la révision de **2008**, l'**article 51-1** de la Constitution reconnaît des **droits spécifiques** aux groupes d'opposition au Parlement.
- La présidence de la **commission des finances** de l'Assemblée revient à un député de l'opposition.
- L'opposition peut saisir le **Conseil constitutionnel** (60 députés ou 60 sénateurs), déposer une **motion de censure**, demander des **commissions d'enquête**, poser des **questions au Gouvernement**.

### Contester une décision par le droit
- Le **juge** peut être saisi par un citoyen, une association, des élus. Il contrôle la décision et peut l'**annuler**.
- Le **juge administratif** (tribunal administratif, puis **Conseil d'État**) contrôle les actes de l'administration ; le **référé-liberté** permet d'obtenir une décision en **48 heures** si une liberté fondamentale est menacée.
- La **QPC** (depuis 2010) permet de contester une loi devant le Conseil constitutionnel.
- Au niveau européen, la **Cour européenne des droits de l'homme** (Strasbourg, Conseil de l'Europe) juge le respect de la Convention européenne des droits de l'homme.
- Le **Défenseur des droits** (créé en **2011**) aide gratuitement les personnes face à une administration ou à une discrimination.

### Se faire entendre autrement
- La **manifestation** est une liberté (déclaration préalable en préfecture).
- La **grève** est un droit reconnu par le **préambule de 1946**.
- Les **pétitions** au Parlement et les **pétitions citoyennes européennes** (un million de signatures dans au moins sept États pour demander une loi à la Commission).
- Le **vote** à l'élection suivante reste le moyen principal de changer de majorité : c'est l'**alternance**.

### Les limites
- La **violence** et les **dégradations** sortent du cadre légal.
- La **désobéissance civile** (refuser publiquement et sans violence d'obéir à une loi jugée injuste) pose la question du lien entre **légalité** et **légitimité** : elle accepte la sanction.

### À retenir pour le bac
- La décision majoritaire s'impose, mais les droits de la minorité sont garantis (article 51-1).
- Contester par le droit : juge administratif, référé-liberté (48 heures), QPC, CEDH, Défenseur des droits.
- Se faire entendre : manifestation, grève, pétition, vote et alternance.
- La désobéissance civile interroge légalité et légitimité.`,
      cartes: [
        { q: "Pourquoi la décision majoritaire s'impose-t-elle à tous ?", r: "C'est la condition de l'État de droit : elle est prise selon des règles reconnues par tous." },
        { q: "Que garantit l'article 51-1 de la Constitution ?", r: "Des droits spécifiques aux groupes d'opposition au Parlement (depuis 2008)." },
        { q: "Quelle commission l'opposition préside-t-elle à l'Assemblée ?", r: "La commission des finances." },
        { q: "Qui contrôle les actes de l'administration ?", r: "Le juge administratif : tribunal administratif, cour administrative d'appel, Conseil d'État." },
        { q: "Qu'est-ce que le référé-liberté ?", r: "Une procédure d'urgence : le juge se prononce en 48 heures si une liberté fondamentale est menacée." },
        { q: "Qu'est-ce que la CEDH ?", r: "La Cour européenne des droits de l'homme, à Strasbourg, qui juge le respect de la Convention européenne des droits de l'homme." },
        { q: "Qu'est-ce que le Défenseur des droits ?", r: "Une autorité créée en 2011 qui aide gratuitement face à une administration ou à une discrimination." },
        { q: "Que faut-il pour organiser une manifestation ?", r: "Une déclaration préalable en préfecture : c'est une liberté encadrée." },
        { q: "Quel texte reconnaît le droit de grève ?", r: "Le préambule de la Constitution de 1946." },
        { q: "Qu'est-ce qu'une initiative citoyenne européenne ?", r: "Un million de signatures dans au moins sept États pour demander une loi à la Commission." },
        { q: "Qu'est-ce que l'alternance ?", r: "Le changement de majorité au pouvoir à la suite d'une élection." },
        { q: "Qu'est-ce que la désobéissance civile ?", r: "Refuser publiquement et sans violence d'obéir à une loi jugée injuste, en acceptant la sanction." },
        { q: "Quelle question pose la désobéissance civile ?", r: "Celle du lien entre légalité et légitimité." },
      ],
      quiz: [
        { q: "Depuis 2008, quel article de la Constitution reconnaît des droits à l'opposition ?", choix: ["L'article 16", "L'article 51-1", "L'article 3", "L'article 49"], bonne: 1, expl: "Il garantit des droits spécifiques aux groupes d'opposition.", niv: 2 },
        { q: "Quelle commission de l'Assemblée nationale est présidée par l'opposition ?", choix: ["La commission des lois", "La commission de la défense", "La commission des affaires sociales", "La commission des finances"], bonne: 3, expl: "Elle contrôle ainsi l'usage de l'argent public.", niv: 3 },
        { q: "Quel juge contrôle une décision d'un préfet ?", choix: ["Le juge administratif", "Le juge des enfants", "La cour d'assises", "Le conseil de prud'hommes"], bonne: 0, expl: "Tribunal administratif, puis Conseil d'État.", niv: 2 },
        { q: "En combien de temps le juge statue-t-il sur un référé-liberté ?", choix: ["Un an", "Un mois", "Une semaine", "48 heures"], bonne: 3, expl: "C'est une procédure d'urgence pour protéger une liberté fondamentale.", niv: 2 },
        { q: "Où siège la Cour européenne des droits de l'homme ?", choix: ["À Bruxelles", "À Strasbourg", "À Luxembourg", "À La Haye"], bonne: 1, expl: "Elle dépend du Conseil de l'Europe, pas de l'Union européenne.", niv: 2 },
        { q: "Quel texte reconnaît le droit de grève ?", choix: ["La Déclaration des droits de 1789", "La loi de 1905", "Le préambule de 1946", "Le traité de Rome"], bonne: 2, expl: "Il fait partie du bloc de constitutionnalité.", niv: 2 },
        { q: "Quelle autorité aide gratuitement une personne victime de discrimination ?", choix: ["Le Défenseur des droits", "Le Conseil constitutionnel", "La HATVP", "Le CESE"], bonne: 0, expl: "Créé en 2011.", niv: 1 },
        { q: "Le moyen principal de changer de majorité en démocratie est :", choix: ["la grève générale", "une pétition", "la manifestation", "le vote et l'alternance"], bonne: 3, expl: "Les autres moyens permettent de se faire entendre entre deux élections.", niv: 1 },
        { q: "Combien de signatures faut-il pour une initiative citoyenne européenne ?", choix: ["Cent mille", "Un million", "Dix millions", "Cinq cent mille"], bonne: 1, expl: "Dans au moins sept États membres.", niv: 3 },
        { q: "Qu'est-ce qui distingue la désobéissance civile d'une émeute ?", choix: ["Elle est publique, non violente et accepte la sanction", "Elle est autorisée par la loi", "Elle est organisée par l'État et encadrée par la police", "Elle se fait en secret"], bonne: 0, expl: "Elle interroge le lien entre légalité et légitimité.", niv: 3 },
        { q: "Pourquoi dit-on que vivre en démocratie, c'est aussi accepter d'être dans l'opposition ?", choix: ["Parce que l'opposition gouverne", "Parce que la minorité perd ses droits", "Parce qu'une décision majoritaire s'impose à tous", "Parce que le vote est obligatoire pour chaque citoyen majeur"], bonne: 2, expl: "La minorité garde ses droits et peut contester légalement.", niv: 3 },
      ],
    },
  ],
  // Pas d'annales nationales en EMC : les évaluations sont faites par le professeur (contrôle continu).
  // Les types d'exercices ci-dessous viennent des démarches proposées par le livret Éduscol de terminale (2026).
  methode: [
    { id: 'emc-m1', mat: 'emc', titre: 'Définir et mobiliser une notion',
      formules: ['Définissez la notion de…', 'Qu\'est-ce que… ? Donnez un exemple.', 'Expliquez ce qu\'on entend par…'],
      vu: ['Livret Éduscol EMC terminale 2026 : notions clés de chaque thème', 'Évaluations en classe (contrôle continu)'],
      pts: '2 à 4 points',
      attendu: 'Une définition précise en une ou deux phrases, puis un exemple concret et daté tiré du cours ou de l\'actualité. Le correcteur vérifie que le vocabulaire est exact.',
      etapes: ['Recopier la notion et la définir en une phrase', 'Préciser un élément important (qui, comment, quelle règle)', 'Donner un exemple précis (date, institution, chiffre)', 'Dire en une phrase pourquoi c\'est important pour la démocratie'],
      mots: ['délibération', 'légitimité', 'représentativité', 'intérêt général', 'consensus', 'majorité'],
      pieges: ['Donner un exemple sans définition', 'Une définition vague (« c\'est quand les gens parlent »)', 'Confondre légalité et légitimité'],
      cas: 'Dans une ville, 150 habitants tirés au sort se réunissent six week-ends pour proposer un plan de transports.',
      question: 'Définissez la démocratie délibérative à partir de cet exemple.',
      modele: 'La démocratie délibérative cherche à fonder les décisions sur un débat argumenté et informé entre citoyens. Ici, 150 habitants tirés au sort s\'informent, écoutent des experts et débattent avant de proposer un plan : c\'est le principe des conventions citoyennes, comme la Convention citoyenne pour le climat (2019-2020). Sa légitimité vient de la qualité de la délibération, pas seulement du vote.',
      grille: ['Définition exacte', 'Lien avec le cas', 'Exemple réel daté', 'Vocabulaire précis'] },
    { id: 'emc-m2', mat: 'emc', titre: 'Analyser un document',
      formules: ['Présentez le document puis montrez que…', 'Relevez deux informations et expliquez-les', 'Que nous apprend ce document sur… ?'],
      vu: ['Livret Éduscol EMC terminale 2026 : étude d\'articles de la Constitution, de graphiques de participation, d\'extraits de débats'],
      pts: '4 à 6 points',
      attendu: 'Présenter le document (nature, auteur, date, sujet), relever des informations précises, puis les expliquer avec ses connaissances. On ne recopie pas : on cite et on explique.',
      etapes: ['Présenter : nature, auteur, date, sujet', 'Relever deux ou trois informations, entre guillemets ou avec les chiffres', 'Expliquer chacune avec une connaissance du cours', 'Montrer la limite ou l\'intérêt du document'],
      mots: ['selon le document', 'ce chiffre montre que', 'on peut en déduire', 'cependant'],
      pieges: ['Paraphraser le document sans rien ajouter', 'Oublier de présenter le document', 'Recopier des lignes entières'],
      cas: 'Document (inventé pour l\'exercice) : un graphique montre la participation aux élections européennes en France : 42 % en 2014, 50 % en 2019, 52 % en 2024.',
      question: 'Que montre ce document sur la participation aux élections européennes ?',
      modele: 'Ce graphique présente la participation des Français aux élections européennes de 2014 à 2024. Elle augmente : de 42 % à 52 %, soit dix points de plus. Pourtant, près d\'un électeur sur deux s\'abstient encore : cela nourrit la critique du « déficit démocratique », l\'idée que les décisions européennes paraissent lointaines alors que le Parlement européen vote les lois avec le Conseil.',
      grille: ['Présentation du document', 'Chiffres cités', 'Explication avec le cours', 'Limite ou nuance'] },
    { id: 'emc-m3', mat: 'emc', titre: 'Réponse argumentée (court essai)',
      formules: ['Dans une réponse argumentée, montrez que…', 'Pensez-vous que… ? Justifiez.', 'En quoi… ?'],
      vu: ['Livret Éduscol EMC terminale 2026 : questions problématisées de chaque axe', 'Évaluations en classe'],
      pts: '8 à 10 points',
      attendu: 'Une courte introduction qui reprend la question, deux ou trois paragraphes avec chacun une idée, une explication et un exemple précis, puis une conclusion qui répond clairement. Une nuance est appréciée.',
      etapes: ['Reformuler la question en introduction', 'Paragraphe 1 : une idée, son explication, un exemple', 'Paragraphe 2 : une autre idée ou une nuance, avec un exemple', 'Conclure en répondant à la question en une ou deux phrases'],
      mots: ['d\'abord', 'ensuite', 'cependant', 'par exemple', 'ainsi', 'en conclusion'],
      pieges: ['Donner son avis sans argument', 'Un seul long paragraphe', 'Des exemples vagues sans date ni nom', 'Ne pas répondre à la question en conclusion'],
      cas: 'Un élève affirme : « Une décision votée à la majorité est forcément juste. »',
      question: 'Montrez que la majorité ne suffit pas toujours à rendre une décision légitime.',
      modele: 'En démocratie, la majorité permet de décider. D\'abord, elle donne une légitimité : la loi votée par le Parlement exprime la volonté générale (article 6 de la DDHC). Cependant, une majorité peut se tromper ou écraser la minorité : c\'est pourquoi le Conseil constitutionnel contrôle les lois et que l\'opposition a des droits (article 51-1). Ensuite, la légitimité dépend aussi de la qualité du débat : une loi adoptée sans vote, par l\'article 49.3, est légale mais souvent contestée. Ainsi, la majorité est nécessaire, mais elle ne suffit pas : il faut aussi le respect des droits et un vrai débat.',
      grille: ['Introduction qui reprend la question', 'Au moins deux arguments expliqués', 'Exemples précis et exacts', 'Une nuance', 'Conclusion qui répond'] },
    { id: 'emc-m4', mat: 'emc', titre: 'Étude de cas : un processus de décision',
      formules: ['Retracez les étapes de…', 'Qui décide et comment ?', 'Montrez comment cette décision a été prise'],
      vu: ['Livret Éduscol EMC terminale 2026 : la loi de finances, la procédure législative européenne, une résolution de l\'ONU'],
      pts: '6 à 8 points',
      attendu: 'Nommer les acteurs, retracer les étapes dans l\'ordre, dire quelle règle de décision s\'applique (majorité, majorité qualifiée, unanimité, consensus) et les limites du processus.',
      etapes: ['Nommer les acteurs et leur rôle', 'Retracer les étapes dans l\'ordre', 'Préciser la règle de vote', 'Dire ce qui peut bloquer ou être contesté'],
      mots: ['initiative', 'navette', 'commission mixte paritaire', 'codécision', 'majorité qualifiée', 'veto', 'consensus'],
      pieges: ['Mélanger le Conseil européen et le Conseil de l\'UE', 'Oublier la règle de vote', 'Raconter sans ordre'],
      cas: 'La Commission européenne propose un règlement pour imposer un chargeur unique sur les téléphones.',
      question: 'Expliquez comment ce texte peut devenir une loi européenne.',
      modele: 'La Commission a l\'initiative : elle propose le texte. Selon la procédure législative ordinaire, le Parlement européen (720 députés élus) et le Conseil de l\'UE (les ministres des États) doivent adopter le même texte ; des trilogues cherchent un compromis. Au Conseil, la majorité qualifiée suffit : 55 % des États représentant 65 % de la population. Le texte étant un règlement, il s\'applique directement dans les 27 États : c\'est le cas du chargeur USB-C, obligatoire depuis fin 2024.',
      grille: ['Acteurs nommés', 'Étapes dans l\'ordre', 'Règle de vote exacte', 'Exemple ou conséquence concrète'] },
    { id: 'emc-m5', mat: 'emc', titre: 'Débat réglé et oral argumenté',
      formules: ['Préparez un argumentaire pour le débat sur…', 'Présentez votre position puis répondez à une objection', 'Rendez compte du débat de la classe'],
      vu: ['Livret Éduscol EMC terminale 2026 : débat réglé, Modélisation des Nations unies, simulation de séance parlementaire'],
      pts: 'évaluation orale, souvent notée sur 20',
      attendu: 'Prendre la parole à son tour, défendre une position avec des arguments et des exemples, écouter et reformuler l\'argument adverse, respecter les règles du débat.',
      etapes: ['Préparer deux ou trois arguments avec un exemple chacun', 'Prévoir l\'objection principale et sa réponse', 'Écouter et reformuler avant de répondre', 'Conclure en rappelant sa position'],
      mots: ['je comprends ton argument, mais', 'par exemple', 'je propose', 'nous sommes d\'accord sur'],
      pieges: ['Couper la parole', 'Attaquer la personne au lieu de l\'argument', 'Parler sans exemple', 'Lire ses notes mot à mot'],
      cas: 'Débat en classe : faut-il rendre le vote obligatoire en France ?',
      question: 'Préparez une intervention d\'une minute pour ou contre.',
      modele: 'Je suis pour le vote obligatoire. D\'abord, il réduirait l\'abstention, qui dépasse souvent 50 % aux élections européennes, et les élus seraient plus représentatifs. Ensuite, la Belgique le pratique depuis longtemps. Je comprends l\'argument de la liberté de ne pas voter, mais on pourrait compter le vote blanc. Je propose donc un vote obligatoire avec un vrai vote blanc.',
      grille: ['Position claire', 'Arguments avec exemples', 'Réponse à une objection', 'Respect des règles du débat'] },
  ],
  sujets: [
    { id: 'emc-s1', matiere: 'emc', titre: 'Devoir d\'entraînement : décider ensemble', duree: 60,
      enonce: `Devoir d'entraînement inventé pour s'exercer (documents et chiffres fictifs). Durée : 1 heure.

## Document 1 (inventé)
Dans la commune fictive de Valmont (25 000 habitants), le maire veut fermer une rue du centre aux voitures. Une pétition contre le projet recueille 3 000 signatures. Le conseil municipal organise une assemblée de 40 habitants tirés au sort, qui débat pendant trois samedis et propose une fermeture le week-end seulement. Le conseil municipal adopte finalement ce compromis par 21 voix contre 12.

## Document 2 (inventé)
Sondage fictif auprès de 1 000 jeunes de 18 à 24 ans : 68 % pensent que « les citoyens devraient participer davantage aux décisions » ; 31 % ont voté aux dernières élections municipales.

## Questions
1. Définissez la démocratie participative et la démocratie représentative. (4 points)
2. Document 1 : relevez les différentes façons dont les habitants de Valmont ont participé à la décision. (4 points)
3. Document 2 : que montrent ces chiffres sur l'engagement des jeunes ? (3 points)
4. Réponse argumentée : en vous appuyant sur les documents et sur vos connaissances, montrez que la participation des citoyens peut renforcer la légitimité d'une décision, mais qu'elle a aussi des limites. (9 points)`,
      corrige: `## 1. Définitions
- La **démocratie représentative** : les citoyens élisent des représentants qui décident en leur nom (députés, conseillers municipaux).
- La **démocratie participative** : les citoyens participent directement à la préparation des décisions (budgets participatifs, conseils de quartier, pétitions, consultations), sans remplacer les élus.

## 2. Les formes de participation à Valmont
- Une **pétition** de 3 000 signatures : les habitants expriment leur désaccord.
- Une **assemblée tirée au sort** de 40 habitants : forme délibérative, comme les conventions citoyennes.
- Le **vote du conseil municipal** (21 contre 12) : la décision finale revient aux élus, c'est la démocratie représentative.

## 3. Les jeunes et l'engagement
- 68 % des jeunes veulent participer davantage, mais seulement 31 % ont voté : ils s'engagent autrement, de façon plus ponctuelle.
- On retrouve la **crise de la représentation** : méfiance envers les élus et forte abstention, mais pas de désintérêt pour la vie publique.

## 4. Réponse argumentée
- Introduction : en démocratie, la décision revient aux élus, mais les citoyens demandent à participer. La participation renforce-t-elle la légitimité ?
- La participation **renforce la légitimité** : la décision de Valmont tient compte des opposants et repose sur un débat argumenté ; c'est l'idée de la Convention citoyenne pour le climat (2019-2020) ou du budget participatif de Paris.
- Mais elle a des **limites** : 40 tirés au sort ne représentent pas tous les habitants ; une pétition peut porter un intérêt particulier ; les propositions ne s'imposent pas aux élus ; la participation reste faible chez certains publics.
- Conclusion : la participation complète la démocratie représentative sans la remplacer ; elle renforce la légitimité si les élus en tiennent compte et l'expliquent.`,
      grille: [
        { c: 'Question 1 : deux définitions exactes', pts: 4 },
        { c: 'Question 2 : trois formes de participation relevées et nommées', pts: 4 },
        { c: 'Question 3 : chiffres cités et interprétés', pts: 3 },
        { c: 'Question 4 : arguments en faveur de la participation, avec exemples', pts: 4 },
        { c: 'Question 4 : limites et nuance', pts: 3 },
        { c: 'Question 4 : introduction, conclusion et expression claire', pts: 2 },
      ] },
  ],
};
