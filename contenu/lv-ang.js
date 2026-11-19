// Anglais, langue vivante A ou B (enseignement commun), toutes voies. Sources : voir matiere.sources.
// Programme : nouveau programme d'anglais du lycée (BO n° 22 du 29 mai 2025, annexe 4), en vigueur en terminale à la rentrée 2026, donc pour le bac 2027 :
// six axes en terminale (Espace privé et espace public ; Territoire et mémoire ; Fictions et réalités ; Enjeux et formes de la communication ; Citoyenneté et mondes virtuels ; Le Royaume-Uni et ses nations).
// Les huit axes de 2019 ne sont plus ceux de la terminale : le chapitre 8 révise les axes de première. Niveaux visés en fin de terminale : B2 en LVA, B1 en LVB.
// Évaluation : contrôle continu (moyennes de première et de terminale) ; format des évaluations : note de service du 28 juillet 2021, version consolidée de juin 2025.
export default {
  matiere: {
    id: "lv-ang",
    nom: "Anglais (langue vivante A ou B)",
    voie: "tous",
    epreuve: {"type":"controle continu","coef":6,"quand":"en première et en terminale","note":"Pas d’épreuve finale pour les élèves scolarisés : la note de LVA et celle de LVB viennent des moyennes annuelles de première et de terminale (coefficient 6 pour chaque langue sur les deux années). Les évaluations portent sur les quatre activités : compréhension de l’oral, compréhension de l’écrit, expression écrite, expression orale. Niveaux visés en fin de terminale : B2 en langue A, B1 en langue B. Modèle officiel d’évaluation de terminale : un écrit d’1 h 30 (compréhension d’un document audio ou vidéo écouté trois fois et d’un ou deux textes, puis expression écrite) et un oral de 10 minutes après 10 minutes de préparation ; compréhension et expression comptent à parts égales. Une attestation de langues indique le niveau atteint."},
    sources: [
      "https://www.education.gouv.fr/sites/default/files/annexe-4-programme-d-anglais-pour-les-classes-de-lyc-e-g-n-ral-et-technologique-440361.pdf",
      "https://www.education.gouv.fr/bo/2025/Hebdo22/MENE2504621A",
      "https://eduscol.education.fr/document/65240/download",
      "https://eduscol.education.fr/document/50429/download",
      "https://eduscol.education.fr/document/61194/download",
      "https://www.education.gouv.fr/bo/2026/Hebdo31/MENE2618128N",
    ],
    chapitres: [
      { id: "lv-ang-1", t: "L'anglais au bac : contrôle continu, niveaux et programme", theme: "Le cadre" },
      { id: "lv-ang-2", t: "Axe 1 : Espace privé et espace public", theme: "Axes de terminale" },
      { id: "lv-ang-3", t: "Axe 2 : Territoire et mémoire", theme: "Axes de terminale" },
      { id: "lv-ang-4", t: "Axe 3 : Fictions et réalités", theme: "Axes de terminale" },
      { id: "lv-ang-5", t: "Axe 4 : Enjeux et formes de la communication", theme: "Axes de terminale" },
      { id: "lv-ang-6", t: "Axe 5 : Citoyenneté et mondes virtuels", theme: "Axes de terminale" },
      { id: "lv-ang-7", t: "Axe 6 : Le Royaume-Uni et ses nations", theme: "Axes de terminale" },
      { id: "lv-ang-8", t: "Révision : les axes de première", theme: "Axes de première" },
      { id: "lv-ang-9", t: "Grammaire : le présent, le passé et le present perfect", theme: "Langue" },
      { id: "lv-ang-10", t: "Grammaire : futur, modaux et hypothèses", theme: "Langue" },
      { id: "lv-ang-11", t: "Grammaire : passif, discours rapporté, relatives et comparaison", theme: "Langue" },
      { id: "lv-ang-12", t: "Connecteurs et expressions pour argumenter", theme: "Langue" },
      { id: "lv-ang-13", t: "Méthode : comprendre un document oral ou écrit", theme: "Méthode" },
      { id: "lv-ang-14", t: "Méthode : l'expression écrite", theme: "Méthode" },
      { id: "lv-ang-15", t: "Méthode : l'expression orale et l'ETLV", theme: "Méthode" },
    ],
  },
  paquets: [
    {
      chapitre: "lv-ang-1",
      fiche: `## L'anglais au bac : contrôle continu, niveaux et programme

L'anglais, en **langue vivante A** (LVA) ou **langue vivante B** (LVB), n'a pas d'épreuve finale pour les élèves scolarisés : il compte dans le **contrôle continu**. Chaque langue a un **coefficient 6** sur l'ensemble du cycle terminal, à partir des **moyennes annuelles** de première et de terminale. Toutes les évaluations de l'année comptent donc.

### Les niveaux du CECRL
- Le **Cadre européen commun de référence pour les langues** (CECRL) décrit six niveaux : A1, A2 (utilisateur élémentaire), B1, B2 (utilisateur indépendant), C1, C2 (utilisateur expérimenté).
- Niveau visé en **fin de terminale** : **B2** en LVA, **B1** en LVB.
- **B1** : comprendre les points essentiels d'un message clair sur un sujet familier, raconter, donner son avis avec des raisons simples.
- **B2** : comprendre des textes et des interventions longs et complexes, **distinguer les faits des opinions**, repérer le **ton** et l'**intention** de l'auteur, argumenter de façon **claire, détaillée et nuancée**.

### Les activités évaluées
- **Compréhension de l'oral** (CO) : un document audio ou vidéo.
- **Compréhension de l'écrit** (CE) : un ou plusieurs textes.
- **Expression écrite** (EE) : un texte argumenté ou d'invention.
- **Expression orale** (EO) : **prise de parole en continu** et **interaction**.
- Le nouveau programme ajoute la **médiation** : reformuler, résumer ou expliquer pour quelqu'un d'autre un document ou une référence culturelle.

### Le modèle officiel d'évaluation de terminale
- Il sert pour les évaluations ponctuelles (candidats individuels, remplacement) et inspire beaucoup de devoirs de classe.
- **Écrit d'1 h 30** (sans compter les écoutes) :
  - un document **audio ou vidéo** de **1 min 30 au plus**, écouté **trois fois** avec une minute entre chaque écoute ; on prend des notes, puis on en rend compte **en français** ;
  - un ou deux **textes** (2 500 à 4 300 signes en tout), dont on rend compte en français ou en anglais selon la consigne ;
  - un **sujet d'expression écrite** en anglais, lié au thème du dossier.
- **Oral de 10 minutes**, après **10 minutes de préparation** : le candidat choisit un axe parmi **trois** proposés ; l'examinateur propose **deux documents** (images ou citations) ; le candidat explique pendant **5 minutes au plus** lequel illustre le mieux l'axe et pourquoi, puis un **entretien** suit.
- Note sur 20 : **compréhension** et **expression** comptent à **parts égales**.
- En voie technologique, l'oral peut être remplacé par l'**ETLV** (enseignement technologique en langue vivante) : 5 minutes de présentation d'un projet, puis entretien.

### Le programme de terminale (rentrée 2026)
- Un nouveau programme s'applique en terminale depuis la rentrée **2026**. Il compte **six axes** :
  1. **Espace privé et espace public** ;
  2. **Territoire et mémoire** ;
  3. **Fictions et réalités** ;
  4. **Enjeux et formes de la communication** ;
  5. **Citoyenneté et mondes virtuels** ;
  6. **Le Royaume-Uni et ses nations** (propre à l'anglais).
- En voie générale, le professeur traite **cinq axes sur six**, dont **obligatoirement l'axe 6** ; en voie technologique, **au moins trois**.
- Chaque axe est étudié à travers des **objets d'étude** (par exemple « Un Royaume toujours uni ? »).
- En LVA, la terminale comprend l'étude de **deux œuvres intégrales** (littérature, cinéma ou arts) ; en LVB, une seule.

### L'attestation de langues
- À la fin du lycée, chaque élève reçoit une **attestation** qui indique le **niveau du CECRL** atteint en LVA et en LVB.

### À retenir pour le bac
- Contrôle continu, coefficient 6 par langue ; niveaux visés : B2 en LVA, B1 en LVB.
- Quatre activités (CO, CE, EE, EO) et la médiation ; modèle d'évaluation : écrit d'1 h 30 et oral de 10 minutes.
- Six axes en terminale, dont l'axe 6 obligatoire sur le Royaume-Uni et ses nations.`,
      cartes: [
        { q: "Comment l'anglais est-il évalué au bac pour un élève scolarisé ?", r: "En contrôle continu, avec les moyennes annuelles de première et de terminale." },
        { q: "Quel est le coefficient de chaque langue vivante ?", r: "6 sur l'ensemble du cycle terminal." },
        { q: "Quel niveau vise-t-on en fin de terminale en LVA ?", r: "Le niveau B2 du CECRL." },
        { q: "Quel niveau vise-t-on en fin de terminale en LVB ?", r: "Le niveau B1 du CECRL." },
        { q: "Que signifie CECRL ?", r: "Cadre européen commun de référence pour les langues." },
        { q: "Que sait faire un élève de niveau B2 ?", r: "Comprendre des textes longs, distinguer faits et opinions, argumenter de façon détaillée et nuancée." },
        { q: "Quelles sont les quatre activités évaluées ?", r: "Compréhension de l'oral, compréhension de l'écrit, expression écrite, expression orale." },
        { q: "Qu'est-ce que la médiation ?", r: "Reformuler, résumer ou expliquer pour quelqu'un un document ou une référence culturelle." },
        { q: "Combien de fois écoute-t-on le document de compréhension de l'oral ?", r: "Trois fois, avec une minute entre chaque écoute." },
        { q: "Dans quelle langue rend-on compte du document oral ?", r: "En français." },
        { q: "Comment se passe l'oral de terminale ?", r: "10 minutes de préparation, 5 minutes de présentation sur un document choisi parmi deux, puis un entretien." },
        { q: "Combien d'axes compte le programme de terminale ?", r: "Six, dont l'axe 6 « Le Royaume-Uni et ses nations », obligatoire." },
        { q: "Quels sont les six axes de terminale ?", r: "Espace privé et espace public, Territoire et mémoire, Fictions et réalités, Enjeux et formes de la communication, Citoyenneté et mondes virtuels, Le Royaume-Uni et ses nations." },
        { q: "Qu'est-ce que l'attestation de langues ?", r: "Un document remis en fin de lycée qui indique le niveau du CECRL atteint dans chaque langue." },
      ],
      quiz: [
        { q: "Quel niveau du CECRL vise-t-on en fin de terminale en LVA ?", choix: ["A2","B1","C2","B2"], bonne: 3, expl: "B1 en LVB.", niv: 1 },
        { q: "Combien de fois le document audio est-il écouté dans l'évaluation de terminale ?", choix: ["Une seule fois","Trois fois","Deux fois","Cinq fois"], bonne: 1, expl: "Une minute entre chaque écoute.", niv: 1 },
        { q: "Quel axe est propre à l'anglais en terminale ?", choix: ["Le Royaume-Uni et ses nations","Art et pouvoir","Identités et échanges","Diversité et inclusion dans le monde"], bonne: 0, expl: "Axe 6 obligatoire.", niv: 1 },
        { q: "Combien dure l'écrit du modèle officiel de terminale ?", choix: ["30 minutes","1 h 30","45 minutes","1 heure"], bonne: 1, expl: "Hors temps d'écoute.", niv: 1 },
        { q: "Dans quelle langue rend-on compte du document oral ?", choix: ["En anglais","En français","Au choix du candidat","Dans une troisième langue"], bonne: 1, expl: "Selon le modèle officiel.", niv: 2 },
        { q: "Combien d'axes le professeur traite-t-il au moins en voie générale ?", choix: ["Cinq sur six","Deux sur six","Trois sur six","Quatre sur six"], bonne: 0, expl: "Dont l'axe 6.", niv: 2 },
        { q: "Que doit faire le candidat pendant les 5 minutes de prise de parole ?", choix: ["Lire à voix haute les deux documents proposés par l'examinateur","Résumer en français un texte étudié en classe","Réciter une leçon de grammaire","Expliquer quel document illustre le mieux l'axe et pourquoi"], bonne: 3, expl: "Choix argumenté.", niv: 2 },
        { q: "Quelle compétence distingue surtout le niveau B2 du niveau B1 ?", choix: ["Distinguer faits et opinions dans un document complexe","Comprendre un message très simple, lent et bien articulé","Se présenter avec quelques phrases courtes et simples","Épeler son nom et son prénom sans erreur"], bonne: 0, expl: "Niveau indépendant avancé.", niv: 2 },
        { q: "Qu'est-ce que la médiation en langue vivante ?", choix: ["Régler un conflit entre deux élèves de la classe","Traduire mot à mot un texte entier","Rendre accessible à autrui un document ou une référence","Corriger les fautes d'orthographe d'un camarade de classe"], bonne: 2, expl: "Nouveau programme.", niv: 2 },
        { q: "Pourquoi toutes les évaluations de l'année comptent-elles ?", choix: ["Le professeur garde la meilleure note de l'année","Seul le dernier devoir est retenu","Elles remplacent l'épreuve de français","La note du bac vient des moyennes annuelles"], bonne: 3, expl: "Contrôle continu.", niv: 3 },
        { q: "En voie technologique, qu'est-ce qui peut remplacer l'oral de terminale ?", choix: ["Un second écrit d'une heure","L'ETLV, présentation d'un projet en langue vivante","Un dossier envoyé par courrier","Une évaluation de grammaire"], bonne: 1, expl: "Enseignement technologique en langue vivante.", niv: 3 },
        { q: "Comment compte la compréhension dans la note de l'évaluation de terminale ?", choix: ["Pour un quart de la note","Pour les trois quarts de la note","À parts égales avec l'expression","Elle ne compte pas"], bonne: 2, expl: "Moitié-moitié.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-ang-2",
      fiche: `## Axe 1 : Espace privé et espace public

Questions du programme : quels sont les lieux de rencontre et de passage entre l'**espace privé** (**private sphere**) et l'**espace public** (**public sphere**) ? Dans quelle mesure la vie privée peut-elle résister à l'**intrusion** (**intrusion**) de la sphère publique ? L'axe permet aussi d'aborder le **fait religieux** (**religion**, **faith**, **beliefs**), très présent dans les pays anglophones.

### Objets d'étude possibles
- Le **corps des femmes** entre domaine public et sphère privée : droit à l'avortement (**abortion rights**) aux États-Unis, arrêt **Roe v. Wade** (1973) annulé par la Cour suprême en **2022** (**overturned**) ; mouvement **#MeToo** (2017) ; **body positivity**.
- Les **chasses aux sorcières** (**witch hunts**), de **Salem** à Hollywood :
  - les **procès de Salem** (**Salem witch trials**, Massachusetts, **1692**) : une vingtaine de personnes exécutées après des accusations collectives ;
  - le **maccarthysme** (**McCarthyism**, années 1950) : la chasse aux communistes, les **listes noires** (**blacklists**) d'artistes à Hollywood ;
  - la pièce **The Crucible** d'Arthur **Miller** (1953) relie les deux ;
  - aujourd'hui, le **tribunal médiatique** (**trial by media**) et la **culture de l'annulation** (**cancel culture**).
- Les **espaces de travail** (**workplace**) : bureau, **télétravail** (**remote working**, **working from home**), **open space**.
- Les nouvelles formes d'**habitat urbain** : **colocation** (**flatshare**, **co-living**), **résidences fermées** (**gated communities**), espaces partagés (**shared spaces**).

### Le fait religieux dans le monde anglophone
- Aux États-Unis, **séparation de l'Église et de l'État** (**separation of church and state**, premier amendement, 1791), mais une forte religiosité : la devise **In God We Trust**, le serment sur la Bible.
- Au Royaume-Uni, une **Église établie** (**established church**) : le monarque est chef de l'**Église d'Angleterre** (**Church of England**).
- **Liberté de culte** (**freedom of worship**), **laïcité** (**secularism**), **tolérance** (**tolerance**).

### Vocabulaire utile
- **privacy** : vie privée ; **to invade someone's privacy** : porter atteinte à la vie privée.
- **surveillance**, **CCTV** (vidéosurveillance), **to be watched**, **to keep an eye on**.
- **the home**, **household** (foyer), **neighbourhood** (quartier), **community**.
- **public space**, **street**, **square**, **park** ; **to gather** (se rassembler), **a protest** (une manifestation).
- **gossip** (ragots), **rumour**, **scapegoat** (bouc émissaire), **to accuse**, **hysteria**, **paranoia**.
- **to blur the line between** : brouiller la frontière entre.

### Expressions pour argumenter
- **The line between private and public life is getting thinner.**
- **Should public figures be entitled to privacy?**
- **The more people feel threatened, the more they look for scapegoats.**

### À retenir pour le bac
- Privé et public : **privacy**, **intrusion**, **surveillance**, **to blur the line**.
- Salem (1692), McCarthyism (années 1950), The Crucible (1953) ; Roe v. Wade (1973, annulé en 2022) ; #MeToo.
- Religion : premier amendement et séparation aux États-Unis ; Church of England au Royaume-Uni.`,
      cartes: [
        { q: "Comment dit-on « vie privée » en anglais ?", r: "privacy." },
        { q: "Que signifie to invade someone's privacy ?", r: "Porter atteinte à la vie privée de quelqu'un." },
        { q: "Que s'est-il passé à Salem en 1692 ?", r: "Des procès en sorcellerie : une vingtaine de personnes ont été exécutées." },
        { q: "Qu'est-ce que le McCarthyism ?", r: "La chasse aux communistes aux États-Unis dans les années 1950, avec des listes noires à Hollywood." },
        { q: "Qui a écrit The Crucible et de quoi parle la pièce ?", r: "Arthur Miller (1953) : les procès de Salem, en écho au maccarthysme." },
        { q: "Que signifie scapegoat ?", r: "Bouc émissaire." },
        { q: "Qu'était l'arrêt Roe v. Wade ?", r: "La décision de la Cour suprême de 1973 qui protégeait le droit à l'avortement, annulée en 2022." },
        { q: "Que veut dire remote working ?", r: "Le télétravail." },
        { q: "Qu'est-ce qu'une gated community ?", r: "Une résidence fermée et sécurisée, réservée à ses habitants." },
        { q: "Comment dit-on « vidéosurveillance » en anglais ?", r: "CCTV (closed-circuit television)." },
        { q: "Que signifie to blur the line between ?", r: "Brouiller la frontière entre deux choses." },
        { q: "Quel texte américain sépare l'Église et l'État ?", r: "Le premier amendement de la Constitution (1791)." },
        { q: "Qui est le chef de l'Église d'Angleterre ?", r: "Le monarque britannique." },
        { q: "Que signifie trial by media ?", r: "Le tribunal médiatique : une personne jugée par les médias avant la justice." },
      ],
      quiz: [
        { q: "Que signifie privacy ?", choix: ["La vie privée","Le secret professionnel d'un médecin","La propriété d'une maison","Le privilège royal"], bonne: 0, expl: "Faux ami à retenir.", niv: 1 },
        { q: "En quelle année ont eu lieu les procès des sorcières de Salem ?", choix: ["1776","1865","1950","1692"], bonne: 3, expl: "Massachusetts, époque coloniale.", niv: 1 },
        { q: "Qui a écrit The Crucible ?", choix: ["Arthur Miller","George Orwell","Charles Dickens","Mark Twain"], bonne: 0, expl: "Pièce de 1953.", niv: 1 },
        { q: "Comment dit-on « bouc émissaire » ?", choix: ["goatherd","scapegoat","witness","bystander"], bonne: 1, expl: "Personne accusée à la place des autres.", niv: 1 },
        { q: "Que désignait le McCarthyism ?", choix: ["Une campagne contre les sorcières en 1692","Une loi sur la vie privée en ligne","Un mouvement féministe des années 1970","La chasse aux communistes dans les années 1950"], bonne: 3, expl: "Listes noires à Hollywood.", niv: 2 },
        { q: "Pourquoi The Crucible parle-t-il aussi des années 1950 ?", choix: ["La pièce se passe dans un studio d'Hollywood en 1950","Miller y raconte sa propre enfance en Angleterre","Salem y sert de miroir à la chasse aux communistes","Elle a été écrite en 1692"], bonne: 2, expl: "Allégorie.", niv: 2 },
        { q: "Que s'est-il passé en 2022 pour Roe v. Wade ?", choix: ["La Cour suprême a annulé cet arrêt de 1973","Le Congrès l'a inscrit dans la Constitution","Il a été adopté pour la première fois","Il a été étendu au Royaume-Uni"], bonne: 0, expl: "overturned.", niv: 2 },
        { q: "Quelle phrase exprime que la frontière privé-public s'efface ?", choix: ["Public life is getting more and more private with every new century.","The line between private and public life is getting thinner.","The line is very thick and clear.","Private life has a line."], bonne: 1, expl: "Comparatif progressif.", niv: 2 },
        { q: "Que veut dire CCTV ?", choix: ["Une chaîne de télévision publique","La vidéosurveillance","Un réseau social","Un service de renseignement"], bonne: 1, expl: "Closed-circuit television.", niv: 2 },
        { q: "Quel exemple illustre le mieux le « tribunal médiatique » ?", choix: ["Un procès filmé avec l'accord du juge et des deux parties","Un journaliste qui interroge un ministre","Deux candidats qui débattent à la télévision","Une célébrité condamnée en ligne avant tout procès"], bonne: 3, expl: "trial by media.", niv: 3 },
        { q: "Pourquoi le télétravail brouille-t-il la frontière entre privé et public ?", choix: ["Il interdit les réunions physiques entre collègues de bureau","Il transforme le domicile en lieu de travail","Il oblige à déménager en ville","Il supprime les horaires de travail"], bonne: 1, expl: "to blur the line.", niv: 3 },
        { q: "Que montre la devise In God We Trust aux États-Unis ?", choix: ["L'existence d'une Église officielle d'État dirigée par le président","L'interdiction des autres religions","Une forte place de la religion malgré la séparation Église-État","Une loi récente sur la laïcité"], bonne: 2, expl: "Religiosité.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-ang-3",
      fiche: `## Axe 2 : Territoire et mémoire

Des peuples cherchent à **faire entendre leur voix** et à se **réapproprier leur passé** à travers des **lieux de mémoire** (**memorials**, **sites of memory**) et des **commémorations** (**commemorations**). Question du programme : comment aborder l'**histoire** (**history**) pour construire un **héritage collectif** (**collective heritage**, **legacy**) ?

### Mémoire de l'esclavage et de la colonisation
- La **traite transatlantique** (**transatlantic slave trade**) : des millions d'Africains déportés vers les Amériques du XVIe au XIXe siècle.
- Le Royaume-Uni abolit la traite en **1807** et l'esclavage dans son empire en **1833** (**Slavery Abolition Act**).
- Aux États-Unis, le **13e amendement** (**13th Amendment**, 1865) abolit l'esclavage après la **guerre de Sécession** (**Civil War**, 1861-1865). **Juneteenth** (19 juin) commémore l'annonce de la liberté aux esclaves du Texas en 1865 ; c'est un jour férié fédéral depuis **2021**.
- La **ségrégation** (**segregation**, lois **Jim Crow**) dure jusqu'au **mouvement des droits civiques** (**Civil Rights Movement**) : **Rosa Parks** (1955), **Martin Luther King** et la marche sur Washington (1963), **Civil Rights Act** (1964).
- Débats actuels : les **statues** contestées (statue du marchand d'esclaves **Edward Colston** jetée dans le port de **Bristol** en **2020**), les **réparations** (**reparations**), le mouvement **Black Lives Matter** (né en 2013).
- L'**Empire britannique** (**British Empire**) et la **décolonisation** (**decolonisation**) : indépendance de l'Inde en **1947**.

### Commémorations dans le Commonwealth
- Le **Commonwealth of Nations** regroupe surtout d'anciens territoires de l'Empire britannique (56 pays).
- **Remembrance Day** (**11 novembre**) : hommage aux soldats morts depuis la Première Guerre mondiale ; on porte un **coquelicot** (**poppy**), deux minutes de **silence**.
- **ANZAC Day** (25 avril) en Australie et en Nouvelle-Zélande : souvenir de **Gallipoli** (1915).

### Peuples autochtones
- **Indigenous peoples**, **Native Americans**, **First Nations** (Canada), **Aboriginal and Torres Strait Islander peoples** (Australie), **Māori** (Nouvelle-Zélande).
- **Assimilation** forcée : les **Stolen Generations** en Australie (enfants enlevés à leurs familles) ; excuses officielles du Premier ministre **Kevin Rudd** en **2008** (**the Apology**). Les **pensionnats** (**residential schools**) au Canada.
- **Land rights** (droits sur la terre), **reservations** (réserves), **cultural appropriation**.

### Vocabulaire utile
- **to remember**, **to commemorate**, **to pay tribute to** (rendre hommage), **to honour**.
- **a memorial**, **a monument**, **a museum**, **a plaque**, **a wreath** (couronne).
- **ancestors**, **descendants**, **roots**, **legacy**, **heritage**, **trauma**, **wound** (blessure).
- **to acknowledge** (reconnaître), **to apologise**, **to make amends**, **to come to terms with the past** (assumer son passé).
- **to erase**, **to rewrite history**, **to tear down a statue**.

### À retenir pour le bac
- Esclavage : abolition britannique 1833, 13th Amendment 1865, Juneteenth ; droits civiques (1955-1965) ; statue de Colston (2020).
- Commonwealth, Remembrance Day, poppy ; Stolen Generations et excuses de 2008.
- **heritage**, **legacy**, **to commemorate**, **to acknowledge**, **to come to terms with the past**.`,
      cartes: [
        { q: "Que signifie to commemorate ?", r: "Commémorer." },
        { q: "Quelle différence entre heritage et legacy ?", r: "Heritage : le patrimoine reçu en commun ; legacy : ce qu'une personne ou une époque laisse derrière elle." },
        { q: "Quand le Royaume-Uni abolit-il l'esclavage dans son empire ?", r: "En 1833 (Slavery Abolition Act)." },
        { q: "Quel texte abolit l'esclavage aux États-Unis ?", r: "Le 13e amendement, en 1865." },
        { q: "Que commémore Juneteenth ?", r: "L'annonce de la liberté aux derniers esclaves du Texas, le 19 juin 1865." },
        { q: "Qu'a fait Rosa Parks en 1955 ?", r: "Elle a refusé de céder sa place à un Blanc dans un bus de Montgomery." },
        { q: "Que s'est-il passé à Bristol en 2020 ?", r: "La statue du marchand d'esclaves Edward Colston a été jetée dans le port." },
        { q: "Qu'est-ce que Remembrance Day ?", r: "Le 11 novembre, hommage aux soldats morts à la guerre, avec le coquelicot (poppy)." },
        { q: "Qu'est-ce que le Commonwealth ?", r: "Une organisation de 56 pays, pour la plupart d'anciens territoires britanniques." },
        { q: "Qui sont les Stolen Generations ?", r: "Les enfants aborigènes enlevés à leurs familles en Australie pour être assimilés." },
        { q: "Qui a présenté les excuses officielles de l'Australie en 2008 ?", r: "Le Premier ministre Kevin Rudd." },
        { q: "Que signifie to come to terms with the past ?", r: "Assumer son passé, l'accepter et le regarder en face." },
        { q: "Que signifie to pay tribute to ?", r: "Rendre hommage à." },
        { q: "Comment appelle-t-on les peuples autochtones du Canada ?", r: "First Nations (avec les Inuit et les Métis)." },
      ],
      quiz: [
        { q: "Que signifie to pay tribute to ?", choix: ["Payer un impôt à","Faire un don à","Rembourser une dette à","Rendre hommage à"], bonne: 3, expl: "Commémorer.", niv: 1 },
        { q: "Quelle fleur porte-t-on pour Remembrance Day ?", choix: ["Le coquelicot","La rose rouge","La jonquille","Le chardon"], bonne: 0, expl: "poppy.", niv: 1 },
        { q: "En quelle année le 13e amendement abolit-il l'esclavage ?", choix: ["1865","1776","1807","1833"], bonne: 0, expl: "Fin de la guerre de Sécession.", niv: 1 },
        { q: "Que commémore Juneteenth ?", choix: ["La déclaration d'indépendance des États-Unis","La fin de l'esclavage au Texas","Le premier vote des femmes en Amérique","La fin de la Seconde Guerre mondiale"], bonne: 1, expl: "19 juin 1865.", niv: 1 },
        { q: "Que désigne heritage ?", choix: ["Le testament écrit par un notaire pour une famille","Une maison de vacances","Une dette nationale","Le patrimoine transmis à une communauté"], bonne: 3, expl: "Héritage collectif.", niv: 2 },
        { q: "Pourquoi la statue d'Edward Colston a-t-elle été renversée en 2020 ?", choix: ["Elle bloquait la circulation dans le centre de Bristol","Il avait perdu une élection municipale","Il s'était enrichi grâce à la traite des esclaves","Elle était devenue trop fragile"], bonne: 2, expl: "Mémoire contestée.", niv: 2 },
        { q: "Qui sont les Stolen Generations ?", choix: ["Des soldats australiens disparus à Gallipoli","Des enfants aborigènes retirés de force à leurs familles","Des migrants britanniques partis s'installer en Australie après 1945","Des jeunes privés de droit de vote"], bonne: 1, expl: "Assimilation forcée.", niv: 2 },
        { q: "Quel mot signifie « reconnaître » une faute ?", choix: ["to recognise someone's face in a crowd","to remind","to acknowledge","to forgive"], bonne: 2, expl: "Reconnaître officiellement.", niv: 2 },
        { q: "Que commémore ANZAC Day ?", choix: ["Les soldats australiens et néo-zélandais, depuis Gallipoli","La fondation de la ville de Sydney","L'indépendance de l'Inde","La reine Victoria"], bonne: 0, expl: "25 avril.", niv: 2 },
        { q: "Que signifie to come to terms with the past ?", choix: ["Effacer les traces de son passé gênant","Accepter et regarder en face son passé","Revenir vivre dans le passé","Négocier un contrat ancien"], bonne: 1, expl: "Travail de mémoire.", niv: 3 },
        { q: "Pourquoi les excuses de 2008 en Australie sont-elles un acte de mémoire ?", choix: ["Elles accordent la nationalité australienne aux Britanniques","Elles mettent fin au Commonwealth","Elles reconnaissent le tort fait aux Aborigènes","Elles ferment les musées aborigènes"], bonne: 2, expl: "the Apology.", niv: 3 },
        { q: "Quel argument défend le maintien d'une statue contestée avec un panneau explicatif ?", choix: ["On empêche les visiteurs de connaître l'histoire de la ville","On honore sans réserve le personnage représenté","On garde la trace de l'histoire tout en la critiquant","On efface le passé pour éviter les conflits"], bonne: 2, expl: "Contextualiser.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-ang-4",
      fiche: `## Axe 3 : Fictions et réalités

Questions du programme : comment s'articulent **réalité** (**reality**) et **fantasme** (**fantasy**) dans la construction d'un **récit national** (**national narrative**) ? Dans quelle mesure la **fiction** se nourrit-elle du **réel** pour le **questionner**, le **sublimer** ou le **réinventer** ?

### La dystopie
- Une **dystopie** (**dystopia**) décrit une société imaginaire cauchemardesque, souvent **totalitaire** (**totalitarian**), pour **mettre en garde** (**to warn**) contre les dérives du présent. Son contraire est l'**utopie** (**utopia**, mot inventé par Thomas More en 1516).
- **Nineteen Eighty-Four** de George **Orwell** (1949) : **Big Brother**, la **surveillance** permanente, la **novlangue** (**Newspeak**), la **police de la pensée** (**Thought Police**), la réécriture du passé.
- **Brave New World** d'Aldous **Huxley** (1932) : une société contrôlée par le plaisir, la **génétique** et une drogue, le **soma**.
- **The Handmaid's Tale** de Margaret **Atwood** (1985) : une théocratie qui prive les femmes de leurs droits ; adaptée en série en 2017.
- **The Hunger Games** de Suzanne Collins (2008) : un **spectacle** télévisé cruel au service du pouvoir.
- **Black Mirror** (série britannique, 2011) : les dérives des **technologies**.
- La dystopie comme **catharsis** : en exagérant les peurs, elle aide la société à les regarder en face.

### La société de classes britannique dans la fiction
- **Class system** : **upper class**, **middle class**, **working class**.
- Charles **Dickens** (Oliver Twist, 1838) dénonce la **pauvreté** (**poverty**) et le travail des enfants pendant la **révolution industrielle** (**Industrial Revolution**).
- Séries et films : **Downton Abbey** (maîtres et domestiques), les films de Ken **Loach** (I, Daniel Blake, 2016) sur les plus pauvres.

### Quand la science-fiction nourrit l'innovation
- **Science fiction** : H. G. **Wells** (The War of the Worlds, 1898 ; The Time Machine, 1895), Mary **Shelley** (Frankenstein, 1818).
- Des inventions imaginées avant d'exister : **vidéo-conférence**, **téléphone portable**, **reconnaissance faciale** (**facial recognition**).

### Le rêve américain
- Le **rêve américain** (**the American Dream**) : la promesse que chacun peut réussir par son **travail** (**hard work**), « **from rags to riches** » (de la misère à la richesse).
- La fiction le **questionne** :
  - **The Great Gatsby** de F. Scott **Fitzgerald** (1925) : richesse, illusions et échec ;
  - **Death of a Salesman** d'Arthur **Miller** (1949) : Willy Loman, représentant de commerce, broyé par son rêve de réussite ;
  - **Of Mice and Men** de John **Steinbeck** (1937) : le rêve d'une ferme à soi pendant la **Grande Dépression** (**Great Depression**).

### Vocabulaire utile
- **a novel** (un roman), **a short story** (une nouvelle), **a writer**, **a plot** (une intrigue), **a character**, **the narrator**, **a setting** (le cadre).
- **to depict**, **to portray** (représenter), **to denounce**, **to criticise**, **to foreshadow** (annoncer).
- **fictional**, **realistic**, **far-fetched** (tiré par les cheveux), **plausible**, **eerie** (inquiétant).
- **to come true** : se réaliser.

### À retenir pour le bac
- Dystopie : Orwell (1949), Huxley (1932), Atwood (1985) ; mettre en garde contre le présent.
- Classes sociales : Dickens, Ken Loach ; science-fiction : Wells, Shelley.
- American Dream : Gatsby (1925), Death of a Salesman (1949), Of Mice and Men (1937) ; **to depict**, **to portray**.`,
      cartes: [
        { q: "Qu'est-ce qu'une dystopie ?", r: "Le récit d'une société imaginaire cauchemardesque qui met en garde contre les dérives du présent." },
        { q: "Qui a écrit Nineteen Eighty-Four et quand ?", r: "George Orwell, en 1949." },
        { q: "Qu'est-ce que Big Brother ?", r: "Le chef invisible qui surveille tout le monde dans Nineteen Eighty-Four." },
        { q: "Qu'est-ce que la Newspeak chez Orwell ?", r: "La novlangue, une langue appauvrie pour empêcher de penser contre le pouvoir." },
        { q: "Qui a écrit Brave New World ?", r: "Aldous Huxley, en 1932." },
        { q: "De quoi parle The Handmaid's Tale ?", r: "D'une théocratie qui prive les femmes de leurs droits (Margaret Atwood, 1985)." },
        { q: "Qui a inventé le mot utopie ?", r: "Thomas More, en 1516." },
        { q: "Que dénonce Charles Dickens dans Oliver Twist ?", r: "La pauvreté et le sort des enfants pendant la révolution industrielle." },
        { q: "Qu'est-ce que l'American Dream ?", r: "L'idée que chacun peut réussir aux États-Unis grâce à son travail." },
        { q: "Que signifie from rags to riches ?", r: "Passer de la misère à la richesse." },
        { q: "Quel roman de Fitzgerald questionne le rêve américain ?", r: "The Great Gatsby (1925)." },
        { q: "Qui est Willy Loman ?", r: "Le représentant de commerce de Death of a Salesman (Arthur Miller), broyé par son rêve de réussite." },
        { q: "Que signifie to portray ?", r: "Représenter, dépeindre." },
        { q: "Que signifie far-fetched ?", r: "Tiré par les cheveux, peu crédible." },
      ],
      quiz: [
        { q: "Qui a écrit Nineteen Eighty-Four ?", choix: ["Aldous Huxley","George Orwell","H. G. Wells","Charles Dickens"], bonne: 1, expl: "Publié en 1949.", niv: 1 },
        { q: "Comment dit-on « une intrigue » en anglais ?", choix: ["a plan","a set","a plot","a scene"], bonne: 2, expl: "Faux amis possibles.", niv: 1 },
        { q: "Quel personnage surveille tout le monde chez Orwell ?", choix: ["Willy Loman","Jay Gatsby","Oliver Twist","Big Brother"], bonne: 3, expl: "Surveillance.", niv: 1 },
        { q: "Que signifie to depict ?", choix: ["Démolir un bâtiment ancien","Décevoir quelqu'un","Dépenser beaucoup d'argent","Représenter, dépeindre"], bonne: 3, expl: "to portray.", niv: 1 },
        { q: "Que cherche surtout à faire une dystopie ?", choix: ["Mettre en garde contre les dérives du présent","Décrire une société parfaite où chacun est heureux","Raconter des faits réels datés avec précision","Distraire le lecteur sans délivrer de message"], bonne: 0, expl: "to warn.", niv: 2 },
        { q: "Quel roman décrit une société contrôlée par le plaisir et une drogue ?", choix: ["Brave New World","The Great Gatsby","Oliver Twist","Of Mice and Men"], bonne: 0, expl: "Le soma.", niv: 2 },
        { q: "Que dénonce The Handmaid's Tale ?", choix: ["La pauvreté des enfants des usines dans l'Angleterre victorienne","La conquête de l'espace","Le racisme dans le sud des États-Unis","La privation des droits des femmes par un régime religieux"], bonne: 3, expl: "Margaret Atwood.", niv: 2 },
        { q: "Que veut dire from rags to riches ?", choix: ["Des vêtements neufs aux vêtements usés","De la campagne à la ville","De la misère à la richesse","Du travail à la retraite"], bonne: 2, expl: "Rêve américain.", niv: 2 },
        { q: "Quel auteur décrit la Grande Dépression dans Of Mice and Men ?", choix: ["Arthur Miller","George Orwell","John Steinbeck","Margaret Atwood"], bonne: 2, expl: "1937.", niv: 2 },
        { q: "Pourquoi dit-on que la science-fiction peut nourrir l'innovation ?", choix: ["Les ingénieurs sont obligés de lire de la science-fiction à l'école","Des objets imaginés dans des romans ont ensuite été inventés","Les romans donnent les plans exacts des machines","Elle ne décrit que des techniques qui existent déjà"], bonne: 1, expl: "to come true.", niv: 3 },
        { q: "Comment Death of a Salesman questionne-t-il le rêve américain ?", choix: ["Willy Loman s'épuise à poursuivre une réussite qui lui échappe","Willy Loman devient milliardaire grâce à son travail acharné à New York","La pièce célèbre la réussite des immigrés","Elle se passe dans une société totalitaire du futur"], bonne: 0, expl: "Mythe remis en cause.", niv: 3 },
        { q: "Pourquoi la dystopie peut-elle jouer un rôle de catharsis ?", choix: ["Elle fait disparaître les peurs en décrivant un monde parfait et apaisé","Elle remplace les livres d'histoire","Elle exagère nos peurs pour nous aider à les regarder en face","Elle oblige les lecteurs à voter"], bonne: 2, expl: "Catharsis sociétale.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-ang-5",
      fiche: `## Axe 4 : Enjeux et formes de la communication

Questions du programme : quel rôle singulier joue l'anglais, **langue-monde** (**global language**, **lingua franca**) ? Peut-il **fédérer** (**to unite**), faire entendre des **voix minoritaires** (**minority voices**), décrire le monde dans sa **diversité**, mais aussi **uniformiser** (**to standardise**) ou **manipuler** (**to manipulate**) ?

### L'anglais, langue-monde
- Environ **1,5 milliard** de personnes parlent anglais, dont une minorité de **locuteurs natifs** (**native speakers**) : la plupart l'apprennent comme **langue seconde** ou **étrangère**.
- Ses origines : l'expansion de l'**Empire britannique** puis la puissance des **États-Unis** (économie, cinéma, musique, internet).
- Les **variétés d'anglais** (**World Englishes**) : anglais indien, nigérian, singapourien (**Singlish**), australien ; **accents** et **dialectes**.
- Débat : l'anglais **rapproche les peuples** (**brings people together**) ou **aplanit les singularités** (**threatens linguistic diversity**) ? Des langues meurent, d'autres sont **revitalisées** (gallois, maori).

### Le discours politique, de Churchill aux réseaux sociaux
- Winston **Churchill**, Premier ministre pendant la Seconde Guerre mondiale, galvanise la population par la radio : « **We shall fight on the beaches** » (juin 1940), « **blood, toil, tears and sweat** » (mai 1940).
- Martin Luther **King**, « **I Have a Dream** » (1963) : la **rhétorique** (**rhetoric**) au service des droits civiques.
- Les procédés : **répétition** et **anaphore** (**anaphora**), **rythme ternaire**, **métaphores**, appel aux **émotions** (**pathos**), slogans (« **Yes we can** », Barack Obama, 2008 ; « **Make America Great Again** », Donald Trump, 2016 ; « **Take back control** », campagne du Brexit, 2016).
- Les **réseaux sociaux** (**social media**) : messages courts, **petites phrases** (**soundbites**), communication directe sans intermédiaire, mais risque de **polarisation** (**polarisation**).

### Chacun sa vérité ? Le défi du complotisme
- **Théorie du complot** (**conspiracy theory**) : explication d'un événement par l'action secrète d'un groupe.
- **Fake news**, **misinformation** (erreur partagée sans le savoir), **disinformation** (fausse information diffusée volontairement), **hoax** (canular), **post-truth** (« post-vérité », mot de l'année du dictionnaire d'Oxford en 2016).
- Remèdes : **fact-checking** (vérification des faits), **media literacy** (éducation aux médias), croiser les **sources** (**sources**), se méfier des **bulles de filtres** (**filter bubbles**) et des **chambres d'écho** (**echo chambers**).

### Les précautions de langage dans les œuvres
- **Sensitivity readers** : relecteurs chargés de repérer les passages jugés offensants.
- Débats : rééditions modifiées de romans de Roald **Dahl** (2023) ; mots racistes dans des classiques (Mark **Twain**, Harper **Lee**) : **inclusion**, **censure** (**censorship**) ou **trahison** de l'œuvre ?
- **Political correctness**, **inclusive language**, **freedom of speech** (liberté d'expression, protégée par le premier amendement aux États-Unis).

### À retenir pour le bac
- **lingua franca**, **World Englishes**, **native speakers** ; anglais qui rapproche ou qui uniformise.
- Churchill (1940), King (1963), slogans ; **rhetoric**, **soundbites**, **polarisation**.
- **conspiracy theory**, **misinformation** et **disinformation**, **fact-checking**, **echo chambers** ; **sensitivity readers**, **censorship**, **freedom of speech**.`,
      cartes: [
        { q: "Que signifie lingua franca ?", r: "Une langue commune utilisée par des gens de langues maternelles différentes." },
        { q: "Que désigne World Englishes ?", r: "Les différentes variétés d'anglais parlées dans le monde (indien, nigérian, singapourien…)." },
        { q: "Combien de personnes parlent anglais environ ?", r: "Environ 1,5 milliard, dont une minorité de locuteurs natifs." },
        { q: "Quel Premier ministre a prononcé « We shall fight on the beaches » ?", r: "Winston Churchill, en juin 1940." },
        { q: "Qu'est-ce qu'une anaphore ?", r: "La répétition d'un mot ou d'un groupe de mots en début de phrase, comme « I have a dream »." },
        { q: "Que signifie soundbite ?", r: "Une petite phrase choc, facile à reprendre dans les médias." },
        { q: "Quel slogan a été utilisé par les partisans du Brexit ?", r: "« Take back control »." },
        { q: "Qu'est-ce qu'une conspiracy theory ?", r: "Une théorie du complot : un événement expliqué par l'action secrète d'un groupe." },
        { q: "Différence entre misinformation et disinformation ?", r: "Misinformation : erreur partagée sans le savoir ; disinformation : fausse information diffusée volontairement." },
        { q: "Que signifie fact-checking ?", r: "La vérification des faits." },
        { q: "Qu'est-ce qu'une echo chamber ?", r: "Un espace où l'on n'entend que des opinions semblables aux siennes." },
        { q: "Qu'est-ce qu'un sensitivity reader ?", r: "Un relecteur chargé de repérer les passages qui pourraient offenser." },
        { q: "Que signifie freedom of speech ?", r: "La liberté d'expression." },
        { q: "Que signifie post-truth ?", r: "La post-vérité : quand les émotions comptent plus que les faits dans l'opinion." },
      ],
      quiz: [
        { q: "Que signifie fact-checking ?", choix: ["La fabrication de fausses nouvelles","Le contrôle des billets","La censure d'un journal","La vérification des faits"], bonne: 3, expl: "Remède à la désinformation.", niv: 1 },
        { q: "Qui a prononcé « I Have a Dream » ?", choix: ["Winston Churchill","Martin Luther King","Barack Obama","Abraham Lincoln"], bonne: 1, expl: "Washington, 1963.", niv: 1 },
        { q: "Comment dit-on « liberté d'expression » ?", choix: ["free speaking time","freedom of speech","speech therapy","freedom of the city"], bonne: 1, expl: "Premier amendement.", niv: 1 },
        { q: "Que signifie hoax ?", choix: ["Un slogan","Un débat","Un canular","Un journal"], bonne: 2, expl: "Fausse nouvelle inventée.", niv: 1 },
        { q: "Quelle est la différence entre misinformation et disinformation ?", choix: ["La seconde est diffusée volontairement pour tromper","La première concerne la politique, la seconde le sport","Elles désignent exactement la même chose","La première est vraie, la seconde fausse"], bonne: 0, expl: "Intention de tromper.", niv: 2 },
        { q: "Quel procédé utilise la répétition de « I have a dream » ?", choix: ["La litote","L'ellipse","L'anaphore","L'oxymore"], bonne: 2, expl: "Répétition en début de phrase.", niv: 2 },
        { q: "Qu'est-ce qu'une echo chamber ?", choix: ["Une salle de concert dotée d'une acoustique très particulière","Un studio de radio de la BBC","Un espace où l'on n'entend que des avis semblables au sien","Un débat organisé entre deux camps"], bonne: 2, expl: "Réseaux sociaux.", niv: 2 },
        { q: "Pourquoi dit-on que l'anglais est une lingua franca ?", choix: ["Il est parlé surtout par des locuteurs natifs, et non par des étrangers","Il sert à communiquer entre des personnes de langues différentes","Il est la langue officielle de chaque pays du monde","Il vient du français"], bonne: 1, expl: "Langue commune.", niv: 2 },
        { q: "Que craint-on avec l'usage mondial de l'anglais ?", choix: ["Une disparition de l'anglais britannique","Une hausse du nombre de dictionnaires","Un recul de la diversité des langues","Un oubli de la grammaire anglaise"], bonne: 2, expl: "Uniformisation.", niv: 2 },
        { q: "Pourquoi les rééditions modifiées de Roald Dahl ont-elles fait débat ?", choix: ["Certains y ont vu de l'inclusion, d'autres une censure de l'œuvre","L'auteur les avait lui-même demandées, dans son testament, avant sa mort","Elles traduisaient les livres en français","Elles ajoutaient de nouveaux chapitres"], bonne: 0, expl: "Inclusion, censure ou trahison ?", niv: 3 },
        { q: "Comment un slogan comme « Take back control » agit-il sur les électeurs ?", choix: ["Par une démonstration chiffrée et détaillée","Par une liste de mesures techniques","Par une formule courte et émotive facile à retenir","Par une citation d'un texte de loi"], bonne: 2, expl: "soundbite, pathos.", niv: 3 },
        { q: "Quel conseil aide le mieux à repérer une fausse information en ligne ?", choix: ["Partager vite pour avoir l'avis des autres","Croiser plusieurs sources fiables","Se fier au nombre de mentions « j'aime »","Se contenter de lire le titre"], bonne: 1, expl: "media literacy.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-ang-6",
      fiche: `## Axe 5 : Citoyenneté et mondes virtuels

Questions du programme : à l'heure des **mondes virtuels** (**virtual worlds**), quels sont les **enjeux démocratiques** (**democratic issues**) dans les pays anglophones ? Comment les **citoyens** (**citizens**) peuvent-ils s'emparer des **outils numériques** (**digital tools**) et en garder la **maîtrise** (**control**) ?

### Une vie connectée, une vie exposée ?
- Nous laissons une **empreinte numérique** (**digital footprint**) : publications, recherches, localisation.
- Les **données personnelles** (**personal data**) sont collectées par les grandes entreprises du numérique, les **Big Tech** (Google, Meta, Amazon, Apple, Microsoft), et revendues pour la **publicité ciblée** (**targeted advertising**).
- Le scandale **Cambridge Analytica** (révélé en **2018**) : les données de dizaines de millions d'utilisateurs de Facebook utilisées pour influencer des campagnes électorales.
- Edward **Snowden** révèle en **2013** la **surveillance de masse** (**mass surveillance**) pratiquée par l'agence américaine **NSA**.
- **Cyberharcèlement** (**cyberbullying**), **usurpation d'identité** (**identity theft**), **piratage** (**hacking**), **trolls**.

### La parole sur les réseaux sociaux
- **Social media** permet à chacun de **s'exprimer** et de **se mobiliser** : **#BlackLivesMatter** (2013, relancé en 2020), **#MeToo** (2017), les grèves pour le climat lancées par Greta Thunberg (2018).
- C'est un **pouvoir horizontal** (**horizontal power**) : sans chef ni intermédiaire. Mais il a des **limites** : **slacktivism** (militantisme du clic), **algorithmes** (**algorithms**) qui enferment dans des **bulles**, **haine en ligne** (**online hate**), **modération** (**content moderation**).
- Débat : faut-il **réguler** (**to regulate**) les plateformes ? Au Royaume-Uni, l'**Online Safety Act** (2023) impose des obligations aux réseaux pour protéger les mineurs.

### Le jeu vidéo, soft power américain ?
- Le **soft power** (notion du politiste américain Joseph **Nye**) : l'influence d'un pays par sa culture et son image, sans la force.
- Les **jeux vidéo** (**video games**) diffusent des récits, des valeurs et des paysages américains ; le **jeu en ligne** (**online gaming**) crée des communautés mondiales ; l'**e-sport** remplit des stades.

### Apprendre à l'heure des chatbots
- L'**AI** (**artificial intelligence**) et les **chatbots** transforment l'école : aide personnalisée, mais risques de **triche** (**cheating**), de **plagiat** (**plagiarism**), de dépendance et d'**erreurs** présentées avec assurance.
- Enjeu : développer l'**esprit critique** (**critical thinking**) et l'**éducation au numérique** (**digital literacy**).

### Vocabulaire utile
- **to post**, **to share**, **to like**, **to follow**, **a follower**, **an influencer**, **to go viral**.
- **screen time**, **to be addicted to**, **to log off** (se déconnecter), **a digital detox**.
- **to vote**, **an election**, **a ballot**, **a petition**, **to raise awareness** (sensibiliser).
- **to empower** (donner du pouvoir), **accountable** (responsable, qui doit rendre des comptes).

### À retenir pour le bac
- **digital footprint**, **personal data**, **targeted advertising** ; Cambridge Analytica (2018), Snowden (2013).
- Réseaux sociaux : mobilisation (#MeToo, BLM) et limites (**algorithms**, **online hate**, **slacktivism**) ; Online Safety Act (2023).
- **soft power** et jeux vidéo ; AI à l'école : **cheating**, **critical thinking**, **digital literacy**.`,
      cartes: [
        { q: "Que signifie digital footprint ?", r: "L'empreinte numérique : les traces que l'on laisse en ligne." },
        { q: "Que signifie targeted advertising ?", r: "La publicité ciblée." },
        { q: "Qu'a révélé le scandale Cambridge Analytica en 2018 ?", r: "L'usage des données de millions d'utilisateurs de Facebook pour influencer des élections." },
        { q: "Qu'a révélé Edward Snowden en 2013 ?", r: "La surveillance de masse pratiquée par l'agence américaine NSA." },
        { q: "Que signifie cyberbullying ?", r: "Le cyberharcèlement." },
        { q: "Que signifie to go viral ?", r: "Se propager très vite en ligne, devenir viral." },
        { q: "Qu'est-ce que le slacktivism ?", r: "Un militantisme du clic : liker ou partager sans agir vraiment." },
        { q: "Qu'est-ce que le soft power ?", r: "L'influence d'un pays par sa culture et son image, sans la force (Joseph Nye)." },
        { q: "Que fait l'Online Safety Act britannique de 2023 ?", r: "Il impose aux plateformes des obligations pour protéger les utilisateurs, surtout les mineurs." },
        { q: "Que signifie to raise awareness ?", r: "Sensibiliser, attirer l'attention sur un problème." },
        { q: "Que signifie to log off ?", r: "Se déconnecter." },
        { q: "Qu'est-ce que la digital literacy ?", r: "La capacité à utiliser et comprendre les outils numériques avec esprit critique." },
        { q: "Quels risques l'IA pose-t-elle à l'école ?", r: "La triche, le plagiat, la dépendance et des erreurs présentées avec assurance." },
        { q: "Que signifie accountable ?", r: "Responsable, tenu de rendre des comptes." },
      ],
      quiz: [
        { q: "Que signifie to log off ?", choix: ["Couper du bois","Tenir un journal","S'inscrire en ligne","Se déconnecter"], bonne: 3, expl: "Contraire de to log in.", niv: 1 },
        { q: "Comment dit-on « cyberharcèlement » ?", choix: ["cybercrime","hacking","cyberspace","cyberbullying"], bonne: 3, expl: "bully = harceleur.", niv: 1 },
        { q: "Qui a révélé la surveillance de masse de la NSA en 2013 ?", choix: ["Mark Zuckerberg","Edward Snowden","Julian Assange","Joseph Nye"], bonne: 1, expl: "Lanceur d'alerte.", niv: 1 },
        { q: "Que veut dire to go viral ?", choix: ["Se propager très vite en ligne","Tomber malade d'un virus","Être piraté par un virus informatique","Supprimer un compte"], bonne: 0, expl: "Partage massif.", niv: 1 },
        { q: "Qu'a révélé le scandale Cambridge Analytica ?", choix: ["Le piratage des comptes bancaires de la famille royale britannique","Une panne mondiale d'internet en 2018","L'utilisation de données Facebook pour influencer des élections","La création du premier réseau social"], bonne: 2, expl: "Données personnelles.", niv: 2 },
        { q: "Qu'est-ce que le soft power ?", choix: ["L'influence d'un pays par sa culture et son image","La puissance militaire d'un pays en temps de guerre","Un logiciel de jeu vidéo","Le pouvoir des influenceurs"], bonne: 0, expl: "Joseph Nye.", niv: 2 },
        { q: "Que désigne slacktivism ?", choix: ["Un militantisme limité à des clics","Une grève des travailleurs du numérique","Une campagne politique sur le terrain","Un logiciel de modération"], bonne: 0, expl: "slack = mou.", niv: 2 },
        { q: "Quel mot désigne la publicité ciblée ?", choix: ["billboard","commercial break","sponsorship deal","targeted advertising"], bonne: 3, expl: "Données personnelles.", niv: 2 },
        { q: "Que montre #MeToo sur le pouvoir des réseaux sociaux ?", choix: ["Les réseaux sont réservés aux personnalités politiques","Les voix isolées peuvent former un mouvement mondial","Les plateformes empêchent la mobilisation","Les mouvements en ligne restent sans effet"], bonne: 1, expl: "Pouvoir horizontal.", niv: 2 },
        { q: "Pourquoi les algorithmes peuvent-ils nuire au débat démocratique ?", choix: ["Ils interdisent les publications politiques","Ils traduisent automatiquement les messages dans d'autres langues","Ils montrent surtout des contenus qui confirment nos opinions","Ils obligent à voter en ligne"], bonne: 2, expl: "filter bubbles.", niv: 3 },
        { q: "Pourquoi l'IA impose-t-elle de développer l'esprit critique des élèves ?", choix: ["Elle ne fonctionne qu'en anglais","Elle remplace les professeurs dans chaque matière dès le collège","Elle interdit le plagiat","Elle peut produire des erreurs présentées avec assurance"], bonne: 3, expl: "critical thinking.", niv: 3 },
        { q: "Quel argument justifie de réguler les réseaux sociaux ?", choix: ["Augmenter le temps passé devant les écrans","Supprimer la liberté d'expression des adultes","Rendre les plateformes payantes","Protéger les mineurs et limiter la haine en ligne"], bonne: 3, expl: "Online Safety Act.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-ang-7",
      fiche: `## Axe 6 : Le Royaume-Uni et ses nations

C'est l'axe **obligatoire** de terminale, propre à l'anglais. Questions du programme : comment ont évolué les relations entre les **nations** (**nations**) qui composent le **Royaume-Uni** (**the United Kingdom**) ? Comment les **identités** individuelles et collectives se définissent-elles par rapport à ces nations ? Quels sont les **vecteurs d'union** ?

### Quatre nations, un État
- Le **Royaume-Uni de Grande-Bretagne et d'Irlande du Nord** réunit **quatre nations** : l'**Angleterre** (**England**, capitale **London**), l'**Écosse** (**Scotland**, **Edinburgh**), le **pays de Galles** (**Wales**, **Cardiff**) et l'**Irlande du Nord** (**Northern Ireland**, **Belfast**).
- **Great Britain** désigne l'île (Angleterre, Écosse, pays de Galles) ; **the British Isles** inclut aussi l'Irlande.
- Étapes de l'union :
  - le pays de Galles est rattaché à l'Angleterre par les **Laws in Wales Acts** (1535-1542) ;
  - les **Actes d'Union** (**Acts of Union**) de **1707** unissent l'Angleterre et l'Écosse ;
  - l'Irlande est intégrée en **1801** ; en **1921-1922**, le sud devient indépendant (aujourd'hui la **République d'Irlande**) et le nord reste britannique.
- Symboles : le **drapeau** **Union Jack** combine les croix de saint Georges (Angleterre), saint André (Écosse) et saint Patrick (Irlande) ; le pays de Galles n'y figure pas. Le **monarque** (**the Crown**) et le **Parlement de Westminster**.
- Langues : **gallois** (**Welsh**, parlé par environ un Gallois sur six), **gaélique écossais** (**Scottish Gaelic**), **scots**, **irlandais** (**Irish**).

### La dévolution
- La **dévolution** (**devolution**) transfère des pouvoirs de Londres aux nations : après des **référendums** en **1997**, un **Parlement écossais** et une **Assemblée galloise** (aujourd'hui **Senedd**) siègent depuis **1999** ; l'**Assemblée d'Irlande du Nord** est créée en **1998**.
- L'Angleterre n'a pas de parlement propre.

### Un Royaume toujours uni ?
- **Référendum sur l'indépendance de l'Écosse** (**2014**) : le **non** l'emporte avec environ **55 %**.
- **Brexit** : au **référendum** de **2016**, **52 %** des votants choisissent de quitter l'**Union européenne** ; sortie effective le **31 janvier 2020**. Mais l'**Écosse** (62 %) et l'**Irlande du Nord** (56 %) ont voté pour **rester** (**Remain**), ce qui relance les tensions.
- Le **Scottish National Party** (SNP) demande un second référendum.

### L'Irlande du Nord : identités plurielles
- Les **Troubles** (fin des années **1960** à **1998**) : conflit entre **unionistes** (**unionists**, **loyalists**, majoritairement **protestants**, attachés au Royaume-Uni) et **nationalistes** (**nationalists**, **republicans**, majoritairement **catholiques**, favorables à une Irlande unie) ; plus de **3 500 morts**. Le **Bloody Sunday** (Derry, **1972**).
- L'**accord du Vendredi saint** (**Good Friday Agreement**, **1998**) instaure un **partage du pouvoir** (**power-sharing**) ; les **murs de la paix** (**peace walls**) et les **fresques murales** (**murals**) de Belfast en gardent la trace.
- Après le Brexit, la question de la **frontière** (**border**) avec la République d'Irlande : le **Windsor Framework** (2023).

### Écosse : Glasgow et Édimbourg
- **Edinburgh** : capitale politique, château, festival (**Edinburgh Festival Fringe**), tourisme.
- **Glasgow** : ancienne ville industrielle (chantiers navals de la **Clyde**), reconvertie dans la culture et les services ; a accueilli la **COP26** en **2021**.

### La BBC, vecteur d'union et de soft power
- La **British Broadcasting Corporation** (fondée en **1922**) : service public financé par la **redevance** (**licence fee**) ; devise « **inform, educate and entertain** » ; le **BBC World Service** diffuse dans plus de 40 langues.

### À retenir pour le bac
- Quatre nations et leurs capitales ; Acts of Union 1707 ; Union Jack ; devolution (1997-1999).
- Écosse : référendum de 2014 (non à 55 %) ; Brexit (2016, 52 % ; sortie en 2020), Écosse et Irlande du Nord pour Remain.
- Irlande du Nord : Troubles, unionists et nationalists, Good Friday Agreement 1998 ; BBC (1922), **licence fee**.`,
      cartes: [
        { q: "Quelles sont les quatre nations du Royaume-Uni ?", r: "L'Angleterre, l'Écosse, le pays de Galles et l'Irlande du Nord." },
        { q: "Quelle est la capitale du pays de Galles ?", r: "Cardiff." },
        { q: "Que désigne Great Britain ?", r: "L'île qui réunit l'Angleterre, l'Écosse et le pays de Galles." },
        { q: "Quand l'Angleterre et l'Écosse s'unissent-elles ?", r: "En 1707, par les Acts of Union." },
        { q: "Qu'est-ce que la devolution ?", r: "Le transfert de pouvoirs de Londres vers l'Écosse, le pays de Galles et l'Irlande du Nord." },
        { q: "Depuis quand existe le Parlement écossais actuel ?", r: "Depuis 1999, après le référendum de 1997." },
        { q: "Quel a été le résultat du référendum écossais de 2014 ?", r: "Le non à l'indépendance, avec environ 55 %." },
        { q: "Quel a été le résultat du référendum sur le Brexit en 2016 ?", r: "52 % pour quitter l'Union européenne." },
        { q: "Quand le Royaume-Uni a-t-il quitté l'Union européenne ?", r: "Le 31 janvier 2020." },
        { q: "Quelles nations ont voté pour rester dans l'UE ?", r: "L'Écosse et l'Irlande du Nord." },
        { q: "Qui s'opposent pendant les Troubles ?", r: "Les unionistes, surtout protestants, et les nationalistes, surtout catholiques." },
        { q: "Quel accord met fin aux Troubles en 1998 ?", r: "Le Good Friday Agreement (accord du Vendredi saint)." },
        { q: "Qu'est-ce que la licence fee ?", r: "La redevance qui finance la BBC." },
        { q: "Quelle ville écossaise a accueilli la COP26 en 2021 ?", r: "Glasgow." },
      ],
      quiz: [
        { q: "Quelle est la capitale de l'Écosse ?", choix: ["Edinburgh","Glasgow","Cardiff","Belfast"], bonne: 0, expl: "Glasgow est la plus grande ville.", niv: 1 },
        { q: "En quelle année les Acts of Union unissent-ils l'Angleterre et l'Écosse ?", choix: ["1801","1922","1999","1707"], bonne: 3, expl: "Naissance de la Grande-Bretagne.", niv: 1 },
        { q: "Quelle nation n'est pas représentée sur l'Union Jack ?", choix: ["Écosse","Pays de Galles","Angleterre","Irlande du Nord"], bonne: 1, expl: "Pas de croix galloise.", niv: 1 },
        { q: "Quel pourcentage des votants a choisi de quitter l'UE en 2016 ?", choix: ["62 %","75 %","52 %","90 %"], bonne: 2, expl: "Résultat serré.", niv: 1 },
        { q: "Que signifie devolution ?", choix: ["Le retour de l'Écosse dans l'Union européenne","L'abolition de la monarchie","Le transfert de pouvoirs vers les nations","La sortie de l'Union européenne"], bonne: 2, expl: "1997-1999.", niv: 2 },
        { q: "Quel a été le résultat du référendum écossais de 2014 ?", choix: ["Les Écossais ont refusé l'indépendance","L'Écosse est devenue indépendante en 2015","Le référendum a été annulé par Londres","Les Écossais ont voté pour quitter l'UE"], bonne: 0, expl: "Environ 55 % de non.", niv: 2 },
        { q: "Pourquoi le Brexit a-t-il relancé le débat sur l'indépendance écossaise ?", choix: ["L'Écosse avait voté majoritairement pour rester dans l'UE","L'Écosse avait voté à 90 % pour sortir de l'Union européenne","Le Brexit a supprimé le Parlement écossais","L'Écosse est sortie seule de l'UE en 2016"], bonne: 0, expl: "62 % pour Remain.", niv: 2 },
        { q: "Que garantit le Good Friday Agreement de 1998 ?", choix: ["L'indépendance immédiate et complète de l'Irlande du Nord","La réunification de l'Irlande","La fin de la monarchie britannique","Un partage du pouvoir entre unionistes et nationalistes"], bonne: 3, expl: "power-sharing.", niv: 2 },
        { q: "Comment est financée la BBC ?", choix: ["Par la publicité entre les programmes","Par les abonnements payants de chaque chaîne","Par une redevance, la licence fee","Par la famille royale"], bonne: 2, expl: "Service public.", niv: 2 },
        { q: "Pourquoi le Brexit a-t-il posé un problème particulier en Irlande du Nord ?", choix: ["L'Irlande du Nord avait voté à 100 % pour sortir","Belfast voulait devenir la nouvelle capitale du Royaume-Uni","Il fallait éviter une frontière dure en Irlande","Les nationalistes voulaient rejoindre l'Écosse"], bonne: 2, expl: "Windsor Framework.", niv: 3 },
        { q: "Que montrent les peace walls de Belfast ?", choix: ["La réconciliation complète entre protestants et catholiques","Les divisions entre communautés laissées par les Troubles","Les remparts médiévaux de la ville","La frontière avec l'Écosse"], bonne: 1, expl: "Mémoire du conflit.", niv: 3 },
        { q: "Quel vecteur d'union entre les nations peut-on citer ?", choix: ["La monarchie et des institutions communes comme la BBC","Une langue galloise parlée dans tout le pays depuis le Moyen Âge","Un parlement propre à l'Angleterre","Un drapeau gallois sur l'Union Jack"], bonne: 0, expl: "Quels liens communs ?", niv: 3 },
      ],
    },
    {
      chapitre: "lv-ang-8",
      fiche: `## Révision : les axes de première

Les axes de première restent utiles en terminale : ils fournissent des **exemples** pour argumenter et reviennent souvent dans les documents. Les élèves qui passent le bac en 2027 ont fait leur première en 2025-2026 avec l'**ancien programme** (huit axes pour le cycle terminal) ; le nouveau programme de première garde plusieurs de ces axes : **Identités et échanges**, **Diversité et inclusion**, **Art et pouvoir**, **Innovations scientifiques et responsabilité**, auxquels il ajoute **L'être humain et la nature** et **Les aires anglophones américaines**.

### Identités et échanges
- **Migration** (**migration**, **immigrants**, **emigrants**, **refugees**, **asylum seekers**), **mondialisation** (**globalisation**).
- **Ellis Island** (New York, 1892-1954), porte d'entrée de millions d'immigrants ; la **Statue de la Liberté** (1886).
- La **génération Windrush** : des Caribéens arrivés au Royaume-Uni à partir de **1948** ; le **scandale Windrush** (2018) quand certains ont été menacés d'expulsion.
- **melting pot** (creuset) contre **salad bowl** (mosaïque) ; **identity**, **belonging** (appartenance), **roots**.

### Diversité et inclusion
- **Equality**, **discrimination**, **racism**, **prejudice**, **stereotype**, **minority**.
- **Civil Rights Act** (1964) aux États-Unis ; **Equality Act** (2010) au Royaume-Uni.
- **Handicap** (**disability**) : **Americans with Disabilities Act** (1990) ; **accessibility**.
- **Affirmative action** (discrimination positive) ; **LGBTQ+ rights** : mariage homosexuel légal dans tous les États-Unis depuis **2015**.

### Art et pouvoir
- L'art au service du pouvoir (**propaganda**, portraits officiels) ou contre lui (**protest songs**, **street art**).
- **Banksy**, artiste de rue anonyme de Bristol ; les **protest songs** de Bob **Dylan** (« Blowin' in the Wind », 1962) ; **Strange Fruit** chanté par Billie **Holiday** (1939) contre les lynchages.
- **censorship**, **satire**, **to challenge authority**, **artistic freedom**.

### Innovations scientifiques et responsabilité
- **Scientific breakthrough** (percée), **ethics** (éthique), **artificial intelligence**, **genetic engineering**, **cloning** (la brebis **Dolly**, Écosse, 1996).
- Le **projet Manhattan** et la bombe atomique (**Hiroshima**, **1945**) ; la conquête spatiale (**Apollo 11**, **1969**).
- **Frankenstein** (Mary Shelley, 1818) : le savant dépassé par sa créature.

### L'être humain et la nature
- **Environment**, **climate change**, **global warming**, **pollution**, **biodiversity**, **sustainable** (durable), **renewable energy**.
- **National parks** : **Yellowstone** (1872), premier parc national au monde.
- **Activism** : **Extinction Rebellion** (Londres, 2018), Greta Thunberg.

### Les aires anglophones américaines
- **États-Unis** et **Canada** (pays **bilingue** anglais-français), mais aussi les **Caraïbes** anglophones (Jamaïque, Trinité-et-Tobago) et le **Belize**.
- Diversité des **peuples autochtones**, des **migrations** et des cultures (reggae jamaïcain, Bob Marley).

### À retenir pour le bac
- Identités : Ellis Island, Windrush (1948), **melting pot** et **salad bowl**.
- Inclusion : Civil Rights Act 1964, Equality Act 2010, ADA 1990 ; art et pouvoir : Banksy, protest songs.
- Science : Dolly 1996, Hiroshima 1945, Apollo 11 1969, Frankenstein ; nature : Yellowstone 1872, **sustainable**.`,
      cartes: [
        { q: "Qu'était Ellis Island ?", r: "Le centre d'accueil des immigrants à New York, de 1892 à 1954." },
        { q: "Qui est la génération Windrush ?", r: "Les Caribéens venus au Royaume-Uni à partir de 1948 pour aider à la reconstruction." },
        { q: "Différence entre melting pot et salad bowl ?", r: "Melting pot : les cultures se fondent ; salad bowl : elles coexistent en gardant leur identité." },
        { q: "Que signifie belonging ?", r: "L'appartenance, le sentiment d'appartenir à un groupe." },
        { q: "Quelle loi britannique de 2010 lutte contre les discriminations ?", r: "L'Equality Act." },
        { q: "Que signifie disability ?", r: "Le handicap." },
        { q: "Que désigne affirmative action ?", r: "La discrimination positive." },
        { q: "Qui est Banksy ?", r: "Un artiste de rue anonyme, originaire de Bristol, aux œuvres souvent engagées." },
        { q: "Qu'est-ce qu'une protest song ?", r: "Une chanson engagée qui dénonce une injustice." },
        { q: "Qu'est-ce que Dolly ?", r: "La première brebis clonée à partir d'une cellule adulte, en Écosse en 1996." },
        { q: "Que signifie scientific breakthrough ?", r: "Une percée, une avancée scientifique majeure." },
        { q: "Que signifie sustainable ?", r: "Durable." },
        { q: "Quel est le premier parc national du monde ?", r: "Yellowstone, aux États-Unis, en 1872." },
        { q: "Quelles langues officielles parle-t-on au Canada ?", r: "L'anglais et le français." },
      ],
      quiz: [
        { q: "Que signifie sustainable ?", choix: ["Durable","Supportable","Soutenu","Suspendu"], bonne: 0, expl: "Développement durable.", niv: 1 },
        { q: "Quand la génération Windrush commence-t-elle à arriver ?", choix: ["1951","1969","1948","2018"], bonne: 2, expl: "Le scandale date de 2018.", niv: 1 },
        { q: "Comment dit-on « le handicap » ?", choix: ["inability","handicraft","disability","disease"], bonne: 2, expl: "Faux ami à éviter.", niv: 1 },
        { q: "Où a été clonée la brebis Dolly ?", choix: ["Au pays de Galles","Au Canada","En Australie","En Écosse"], bonne: 3, expl: "1996.", niv: 1 },
        { q: "Que signifie salad bowl ?", choix: ["Un repas typique des immigrants arrivés à New York","Une politique d'assimilation forcée","Une société où les cultures coexistent sans se fondre","Un quartier réservé aux étrangers"], bonne: 2, expl: "Contraire de melting pot.", niv: 2 },
        { q: "Quel artiste de rue anonyme vient de Bristol ?", choix: ["Bob Dylan","Banksy","Billie Holiday","Andy Warhol"], bonne: 1, expl: "Street art engagé.", niv: 2 },
        { q: "Que dénonce la chanson Strange Fruit ?", choix: ["La guerre du Vietnam et la conscription des jeunes","Les lynchages de Noirs dans le sud des États-Unis","La pollution des rivières","Une grande pauvreté à Londres"], bonne: 1, expl: "Billie Holiday, 1939.", niv: 2 },
        { q: "Quel roman met en scène un savant dépassé par sa créature ?", choix: ["Brave New World","The Great Gatsby","Frankenstein","Oliver Twist"], bonne: 2, expl: "Mary Shelley, 1818.", niv: 2 },
        { q: "Que désigne affirmative action ?", choix: ["La discrimination positive","Une action en justice","Une manifestation autorisée","Un vote à main levée"], bonne: 0, expl: "Favoriser des groupes défavorisés.", niv: 2 },
        { q: "Pourquoi le scandale Windrush de 2018 a-t-il choqué ?", choix: ["Le navire Windrush a coulé avec des immigrants","Des résidents de longue date ont été menacés d'expulsion","Les Caribéens ont été interdits de vote en 2018","Il a révélé une fraude électorale"], bonne: 1, expl: "Identité et appartenance.", niv: 3 },
        { q: "Quel exemple illustre l'axe Innovations scientifiques et responsabilité ?", choix: ["La construction de la Statue de la Liberté à New York","Le premier parc national, Yellowstone","Le projet Manhattan et la bombe d'Hiroshima","La chanson Blowin' in the Wind"], bonne: 2, expl: "Science et éthique.", niv: 3 },
        { q: "Pourquoi ces axes de première restent-ils utiles en terminale ?", choix: ["Ils sont évalués seuls lors d'une épreuve finale écrite en fin de terminale","Ils fournissent des exemples et reviennent dans les documents","Ils remplacent l'axe 6 obligatoire","Ils sont inutiles après la première"], bonne: 1, expl: "Culture réutilisable.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-ang-9",
      fiche: `## Grammaire : le présent, le passé et le present perfect

Bien choisir le **temps** est la première condition pour être compris. Les correcteurs de B1-B2 attendent une maîtrise solide du **présent**, du **prétérit**, du **present perfect** et du **pluperfect**.

### Le présent simple et le présent en be + -ing
- **Présent simple** : habitudes, vérités générales, goûts. **She works in London. Water boils at 100 °C.** Attention au **-s** à la 3e personne du singulier.
- **Présent be + -ing** (**present continuous**) : action en cours, situation temporaire, projet prévu. **He is writing an essay right now. I'm meeting her tomorrow.**
- Les verbes d'état (**like**, **know**, **believe**, **want**, **belong**) se mettent rarement en be + -ing : **I know the answer** (et non « I am knowing »).

### Le prétérit simple
- Action **terminée**, **datée** ou située dans un passé **coupé** du présent : **Martin Luther King gave his speech in 1963.**
- Marqueurs : **yesterday**, **last year**, **ago** (**two years ago** : il y a deux ans), **in 2016**, **when**.
- Verbes réguliers en **-ed** (**worked**) ; verbes irréguliers à connaître (**go – went – gone**, **write – wrote – written**, **take – took – taken**, **think – thought – thought**).
- Prétérit be + -ing : action en cours à un moment du passé, souvent interrompue. **I was reading when the phone rang.**

### Le present perfect
- Forme : **have / has + participe passé**. Il relie le **passé** au **présent** : on s'intéresse au **bilan** ou à la **conséquence** actuelle.
- Expérience : **Have you ever been to Scotland?** (es-tu déjà allé…)
- Résultat présent : **She has lost her keys** (elle ne les a pas).
- Action commencée dans le passé et qui **dure encore** : avec **for** (durée) et **since** (point de départ). **I have lived here for ten years / since 2016.** En français, on dit « j'habite ici depuis… » : le français met un présent, l'anglais un present perfect.
- Marqueurs : **ever**, **never**, **already**, **yet**, **just**, **so far**, **recently**.
- **have been + -ing** insiste sur l'activité qui dure : **It has been raining for hours.**
- Le present perfect est **incompatible** avec une date passée précise : on dit **I visited London in 2022**, pas « I have visited London in 2022 ».

### Le pluperfect
- Forme : **had + participe passé**. Action **antérieure** à une autre action passée. **When the police arrived, the thieves had already left.**

### Used to et would
- **used to + base verbale** : habitude passée révolue. **People used to write letters.**
- **would** peut aussi exprimer une habitude passée dans un récit : **Every Sunday, we would visit my grandparents.**
- Ne pas confondre avec **to be used to + -ing** : être habitué à. **I'm used to working late.**

### À retenir pour le bac
- Présent simple (habitude) et be + -ing (en cours) ; prétérit pour un fait daté et coupé du présent.
- Present perfect : lien avec le présent ; **for** + durée, **since** + point de départ ; jamais avec une date passée.
- Pluperfect (antériorité) ; **used to** (habitude révolue) et **to be used to + -ing** (être habitué à).`,
      cartes: [
        { q: "Quand emploie-t-on le présent simple ?", r: "Pour les habitudes, les vérités générales et les goûts." },
        { q: "Quand emploie-t-on le présent be + -ing ?", r: "Pour une action en cours, une situation temporaire ou un projet prévu." },
        { q: "Quand emploie-t-on le prétérit ?", r: "Pour une action terminée, datée ou coupée du présent." },
        { q: "Que signifie two years ago ?", r: "Il y a deux ans." },
        { q: "Comment se forme le present perfect ?", r: "Have ou has + participe passé." },
        { q: "Quel est le rôle du present perfect ?", r: "Relier le passé au présent : bilan, expérience, résultat ou action qui dure encore." },
        { q: "Quand utiliser for et since ?", r: "For + durée (for ten years) ; since + point de départ (since 2016)." },
        { q: "Comment traduire « J'habite ici depuis dix ans » ?", r: "I have lived here for ten years." },
        { q: "Peut-on dire I have visited London in 2022 ?", r: "Non : avec une date passée précise, on emploie le prétérit, I visited London in 2022." },
        { q: "Comment se forme le pluperfect ?", r: "Had + participe passé." },
        { q: "À quoi sert le pluperfect ?", r: "À exprimer une action antérieure à une autre action passée." },
        { q: "Que signifie used to + base verbale ?", r: "Une habitude passée qui n'existe plus." },
        { q: "Que signifie to be used to + -ing ?", r: "Être habitué à faire quelque chose." },
        { q: "Donne le prétérit et le participe passé de write.", r: "Wrote, written." },
      ],
      quiz: [
        { q: "Quel est le participe passé de take ?", choix: ["took","taked","taking","taken"], bonne: 3, expl: "take – took – taken.", niv: 1 },
        { q: "Complète : « She ___ in London since 2019. »", choix: ["has lived","lives","lived","is living"], bonne: 0, expl: "since + present perfect.", niv: 1 },
        { q: "Complète : « Banksy ___ this mural in 2005. »", choix: ["has painted","paints","has been painting","painted"], bonne: 3, expl: "Date passée : prétérit.", niv: 1 },
        { q: "Que signifie « two years ago » ?", choix: ["Depuis deux ans","Dans deux ans","Il y a deux ans","Pendant deux ans"], bonne: 2, expl: "ago + prétérit.", niv: 1 },
        { q: "Complète : « I have studied English ___ seven years. »", choix: ["since","ago","for","during the"], bonne: 2, expl: "for + durée.", niv: 2 },
        { q: "Complète : « When we arrived, the film ___ already started. »", choix: ["has","was","is","had"], bonne: 3, expl: "Antériorité dans le passé.", niv: 2 },
        { q: "Quelle phrase emploie le bon temps ?", choix: ["I have visited Edinburgh last summer.","I visited Edinburgh last summer.","I visit Edinburgh last summer.","I am visiting Edinburgh last summer."], bonne: 1, expl: "last summer : prétérit.", niv: 2 },
        { q: "Que veut dire « People used to write letters » ?", choix: ["Les gens sont habitués à écrire des lettres","Les gens utilisent des lettres pour écrire","Les gens écrivaient des lettres autrefois","Les gens écriront des lettres"], bonne: 2, expl: "Habitude révolue.", niv: 2 },
        { q: "Complète : « I was reading when the phone ___. »", choix: ["was ringing","has rung","rings","rang"], bonne: 3, expl: "Action brève qui interrompt.", niv: 2 },
        { q: "Pourquoi dit-on « I know the answer » et non « I am knowing » ?", choix: ["Know est un verbe d'état, peu compatible avec be + -ing","Know est un verbe irrégulier qui ne peut pas prendre de -ing","Be + -ing est réservé au passé","Le présent simple exprime une action en cours"], bonne: 0, expl: "Verbes d'état.", niv: 3 },
        { q: "Quelle différence entre « She has lost her keys » et « She lost her keys » ?", choix: ["La première se passe il y a très longtemps","La première insiste sur la conséquence présente : elle ne les a pas","La seconde est incorrecte en anglais","Elles ont exactement le même sens dans chaque contexte, à l'oral comme à l'écrit"], bonne: 1, expl: "Bilan présent.", niv: 3 },
        { q: "Traduis : « Je suis habitué à travailler tard. »", choix: ["I used to work late.","I'm used to work late.","I'm used to working late.","I use to working late."], bonne: 2, expl: "to be used to + -ing.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-ang-10",
      fiche: `## Grammaire : futur, modaux et hypothèses

Le niveau B2 demande d'exprimer **différents degrés de certitude**, de faire des **projets** et de formuler des **hypothèses**, y compris l'**irréel du passé**. Ce sont les outils de l'argumentation nuancée.

### Parler de l'avenir
- **will + base verbale** : prédiction, décision prise sur le moment, promesse. **Robots will replace many jobs. I'll help you.**
- **be going to** : intention déjà prise, ou prédiction fondée sur un indice présent. **I'm going to study law. Look at the clouds: it's going to rain.**
- **Présent be + -ing** : rendez-vous organisé. **I'm flying to Dublin on Monday.**
- **will be + -ing** : action en cours à un moment du futur ; **will have + participe passé** : action achevée avant un moment du futur. **By 2050, sea levels will have risen.**
- Après **when**, **as soon as**, **if** (sens temporel ou de condition), pas de will : **When I get my bac, I will travel.**

### Les modaux
- Toujours suivis de la **base verbale**, sans **to** et sans **-s** : **She can swim.**
- **Capacité** : **can**, **could** (passé), **be able to**.
- **Permission** : **can**, **may** (plus poli). **Interdiction** : **mustn't**, **can't**.
- **Obligation** : **must** (venant de celui qui parle), **have to** (venant de l'extérieur). **Absence d'obligation** : **don't have to** / **needn't** (« ne pas être obligé »). Attention : **you mustn't** = tu ne dois pas, c'est interdit ; **you don't have to** = tu n'es pas obligé.
- **Conseil** : **should**, **ought to**, **had better**. Reproche : **should have + participe passé** (**You should have told me** : tu aurais dû me le dire).
- **Probabilité**, du plus sûr au moins sûr : **must** (sûrement), **should**, **may**, **might**, **could** (peut-être), **can't** (impossible). **He must be tired. She might be late. That can't be true.**
- Au passé : **must have**, **might have**, **can't have + participe passé**. **They must have left early.**

### Les hypothèses (if-clauses)
- **Condition réelle** : **If + présent, will + base**. **If we act now, we will limit global warming.**
- **Irréel du présent** : **If + prétérit, would + base**. **If I were rich, I would travel the world.** (On emploie **were** à toutes les personnes dans la langue soignée.)
- **Irréel du passé** : **If + pluperfect, would have + participe passé**. **If Harper Lee had written her novel today, she would have used different words.**
- **Inversion** soutenue (B2) : **Had they known, they would have been more cautious** (= If they had known).
- **unless** = si… ne… pas (**unless we act** : si nous n'agissons pas).

### Souhaits et regrets
- **I wish + prétérit** : regret sur le présent. **I wish I spoke Welsh.** (j'aimerais parler gallois)
- **I wish + pluperfect** : regret sur le passé. **I wish I had studied harder.**
- **If only…** : si seulement… ; **I'd rather** : je préférerais.

### À retenir pour le bac
- Futur : will, be going to, be + -ing, will have + participe passé ; pas de will après when et if.
- Modaux + base verbale ; mustn't (interdit) et don't have to (pas obligé) ; must, may, might, can't pour la probabilité ; should have + participe passé.
- Trois types de conditions ; inversion **Had they known** ; **I wish** + prétérit ou pluperfect.`,
      cartes: [
        { q: "Quand emploie-t-on be going to ?", r: "Pour une intention déjà décidée ou une prédiction fondée sur un indice présent." },
        { q: "Que signifie By 2050, sea levels will have risen ?", r: "D'ici 2050, le niveau des mers aura monté." },
        { q: "Peut-on mettre will après when ?", r: "Non : When I get my bac, I will travel." },
        { q: "Quelle différence entre mustn't et don't have to ?", r: "Mustn't : c'est interdit ; don't have to : on n'est pas obligé." },
        { q: "Quelle différence entre must et have to ?", r: "Must : obligation venant de celui qui parle ; have to : obligation extérieure." },
        { q: "Comment exprimer un reproche sur le passé ?", r: "Should have + participe passé : you should have told me." },
        { q: "Que signifie He must be tired ?", r: "Il doit être fatigué (c'est très probable)." },
        { q: "Que signifie That can't be true ?", r: "Ce n'est pas possible, ça ne peut pas être vrai." },
        { q: "Quelle est la structure de l'irréel du présent ?", r: "If + prétérit, would + base verbale." },
        { q: "Quelle est la structure de l'irréel du passé ?", r: "If + pluperfect, would have + participe passé." },
        { q: "Comment dire If they had known avec une inversion ?", r: "Had they known." },
        { q: "Que signifie unless ?", r: "Si… ne… pas, à moins que." },
        { q: "Comment exprimer un regret sur le passé avec wish ?", r: "I wish + pluperfect : I wish I had studied harder." },
        { q: "Que suit toujours un modal ?", r: "La base verbale, sans to." },
      ],
      quiz: [
        { q: "Complète : « If I ___ rich, I would travel the world. »", choix: ["am","will be","have been","were"], bonne: 3, expl: "Irréel du présent.", niv: 1 },
        { q: "Quel modal exprime le conseil ?", choix: ["should","mustn't","can't","will"], bonne: 0, expl: "Tu devrais.", niv: 1 },
        { q: "Complète : « When I ___ my bac, I will travel. »", choix: ["will get","would get","got","get"], bonne: 3, expl: "Pas de will après when.", niv: 1 },
        { q: "Que signifie « You don't have to come » ?", choix: ["Tu ne dois pas venir, c'est interdit","Tu ne veux pas venir","Tu n'es pas obligé de venir","Tu ne pourras pas venir"], bonne: 2, expl: "Absence d'obligation.", niv: 1 },
        { q: "Complète : « If she had left earlier, she ___ the train. »", choix: ["would catch","will catch","would have caught","had caught"], bonne: 2, expl: "Irréel du passé.", niv: 2 },
        { q: "Quelle phrase exprime une forte probabilité ?", choix: ["He must be at home now.","He might be at home now, perhaps.","He can't be at home now.","He should go home now."], bonne: 0, expl: "must = sûrement.", niv: 2 },
        { q: "Que signifie « You should have told me » ?", choix: ["Tu aurais dû me le dire","Tu devras me le dire demain","Tu dois me le dire tout de suite","Tu m'as tout dit"], bonne: 0, expl: "Reproche.", niv: 2 },
        { q: "Complète : « We won't stop global warming ___ we change our habits. »", choix: ["if","because","unless","while"], bonne: 2, expl: "Si… ne… pas.", niv: 2 },
        { q: "Que signifie « I wish I spoke Welsh » ?", choix: ["J'aimerais parler gallois","Je parlais gallois autrefois","Je souhaite que tu parles gallois","J'ai parlé gallois hier soir"], bonne: 0, expl: "Regret présent.", niv: 2 },
        { q: "Quelle phrase équivaut à « If they had known, they would have helped » ?", choix: ["Did they know, they would have helped.","Have they known, they would help.","Had they known, they would have helped.","They had known, would they help."], bonne: 2, expl: "Inversion soutenue.", niv: 3 },
        { q: "Quelle phrase exprime une intention déjà décidée ?", choix: ["I'll probably study something, maybe.","I'm going to study law next year.","I would study law if I could.","I might study law someday."], bonne: 1, expl: "be going to.", niv: 3 },
        { q: "Pourquoi « She cans swim » est-il faux ?", choix: ["Can doit être suivi de to devant le verbe","Swim doit prendre un -s","Can n'existe qu'au passé","Un modal est invariable : pas de -s"], bonne: 3, expl: "Modal invariable.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-ang-11",
      fiche: `## Grammaire : passif, discours rapporté, relatives et comparaison

Ces structures permettent de **rendre compte** d'un document (ce que dit l'auteur), d'**enrichir** ses phrases et de **comparer**, trois compétences attendues au niveau B2.

### Le passif
- Forme : **be** (au temps voulu) + **participe passé**. Le complément d'agent est introduit par **by**.
- **The Good Friday Agreement was signed in 1998. Thousands of statues have been removed. A new law will be voted.**
- Usage : mettre en avant ce qui **subit** l'action, ou quand l'auteur est inconnu ou peu important. Le passif est fréquent dans la presse.
- Tournures utiles : **It is said that…** (on dit que), **He is believed to be…** (on pense qu'il est…), **to be born**.
- Passif « personnel » propre à l'anglais : **I was given a book** (on m'a donné un livre).

### Le discours rapporté
- Pour rendre compte d'un document : **The journalist explains / claims / argues / points out / denies that…**
- Verbes introducteurs précis : **to state** (affirmer), **to claim** (prétendre), **to argue** (soutenir), **to warn** (avertir), **to admit** (reconnaître), **to deny** (nier), **to suggest** (suggérer).
- Au passé, on **recule les temps** : présent → prétérit, present perfect et prétérit → pluperfect, will → would. **"I am tired," she said → She said (that) she was tired.**
- Les repères changent : **now → then**, **today → that day**, **tomorrow → the next day**, **here → there**.
- Questions rapportées : ordre sujet-verbe et **if / whether** : **He asked if I was ready.**
- **say** + paroles ; **tell** + personne : **She told me that…**

### Les propositions relatives
- **who** (personnes), **which** (choses), **that** (les deux, relatives déterminatives), **whose** (dont, possession), **where** (lieu), **when** (temps).
- **The woman who wrote this novel is Canadian. The city where the Titanic was built is Belfast. A writer whose books are banned.**
- Relative **déterminative** (sans virgule, indispensable au sens) et **non déterminative** (entre virgules, information en plus, jamais avec that) : **Glasgow, which hosted COP26, is in Scotland.**
- **what** = ce que : **What matters is the truth.**

### Gérondif ou infinitif
- **-ing** après une **préposition** (**interested in learning**, **instead of complaining**) et après certains verbes : **enjoy**, **avoid**, **mind**, **keep**, **can't stand**, **look forward to**.
- **to + base verbale** après **want**, **decide**, **hope**, **refuse**, **manage**, **would like**, et pour exprimer le **but** : **She works hard to succeed.**
- **make / let + base verbale sans to** : **Social media makes us feel connected.**

### Comparer
- Adjectifs courts : **-er / the -est** (**older**, **the oldest**) ; longs : **more / the most** (**more dangerous**). Irréguliers : **good – better – the best**, **bad – worse – the worst**, **far – further – the furthest**.
- Égalité : **as… as** ; infériorité : **less… than**, **not as… as**.
- Proportion (B2) : **The more people use social media, the more they are exposed.** **The sooner, the better.**
- Progression : **more and more**, **bigger and bigger**.

### À retenir pour le bac
- Passif : be + participe passé ; **It is said that** ; **I was given**.
- Discours rapporté : verbes précis (**claim**, **argue**, **deny**), recul des temps, **if/whether**, **say/tell**.
- Relatives : who, which, that, whose, where ; gérondif après préposition ; comparatifs et **the more… the more**.`,
      cartes: [
        { q: "Comment se forme le passif ?", r: "Be au temps voulu + participe passé (+ by pour l'agent)." },
        { q: "Mets au passif : They signed the agreement in 1998.", r: "The agreement was signed in 1998." },
        { q: "Comment traduire « On dit que » ?", r: "It is said that…" },
        { q: "Comment traduire « On m'a donné un livre » ?", r: "I was given a book." },
        { q: "Que signifie to claim ?", r: "Prétendre, affirmer (sans que ce soit forcément vrai)." },
        { q: "Que signifie to deny ?", r: "Nier." },
        { q: "Rapporte : « I am tired, » she said.", r: "She said (that) she was tired." },
        { q: "Que devient tomorrow au discours rapporté ?", r: "The next day (ou the following day)." },
        { q: "Différence entre say et tell ?", r: "Say + paroles ; tell + personne : she told me that…" },
        { q: "Quel pronom relatif exprime la possession ?", r: "Whose (dont) : a writer whose books are banned." },
        { q: "Peut-on employer that dans une relative entre virgules ?", r: "Non, on emploie who ou which." },
        { q: "Quelle forme après une préposition ?", r: "La forme en -ing : interested in learning." },
        { q: "Quel est le comparatif de bad ?", r: "Worse (le superlatif : the worst)." },
        { q: "Traduis : « Plus on utilise les réseaux, plus on est exposé. »", r: "The more people use social media, the more they are exposed." },
      ],
      quiz: [
        { q: "Mets au passif : « They built the Titanic in Belfast. »", choix: ["The Titanic was built in Belfast.","The Titanic has build in Belfast.","The Titanic built in Belfast.","The Titanic is building in Belfast."], bonne: 0, expl: "be + participe passé.", niv: 1 },
        { q: "Quel est le superlatif de good ?", choix: ["the goodest","the better","the most good","the best"], bonne: 3, expl: "Irrégulier.", niv: 1 },
        { q: "Quel relatif utiliser pour un lieu ?", choix: ["where","whose","who","what"], bonne: 0, expl: "The city where…", niv: 1 },
        { q: "Que signifie to deny ?", choix: ["Refuser un prix","Dénoncer","Décider","Nier"], bonne: 3, expl: "Contraire de to admit.", niv: 1 },
        { q: "Complète : « I'm looking forward to ___ you. »", choix: ["see","seeing","to see","saw"], bonne: 1, expl: "to est ici une préposition.", niv: 2 },
        { q: "Rapporte : « We will win, » he said.", choix: ["He said they will won.","He said they would win.","He said we win tomorrow.","He told that they would win."], bonne: 1, expl: "will → would.", niv: 2 },
        { q: "Complète : « Margaret Atwood, ___ wrote The Handmaid's Tale, is Canadian. »", choix: ["who","that","which","whose"], bonne: 0, expl: "Relative entre virgules, personne.", niv: 2 },
        { q: "Comment traduire « On pense qu'il est innocent » ?", choix: ["He believes to be innocent.","He is believed to be innocent.","It believes he is innocent.","One is believing him innocent."], bonne: 1, expl: "Passif soutenu.", niv: 2 },
        { q: "Quel verbe introducteur signifie « avertir » ?", choix: ["to warn","to wonder","to wander","to want"], bonne: 0, expl: "The scientist warns that…", niv: 2 },
        { q: "Complète : « The ___ we wait, the harder it will be. »", choix: ["long","longer","more long","longest"], bonne: 1, expl: "the -er… the -er.", niv: 3 },
        { q: "Pourquoi emploie-t-on souvent le passif dans la presse ?", choix: ["Parce que l'actif est interdit dans les articles de presse","Pour mettre en avant l'événement plutôt que l'auteur","Pour raconter au futur","Pour poser des questions"], bonne: 1, expl: "Focalisation.", niv: 3 },
        { q: "Complète : « Social media makes us ___ connected. »", choix: ["to feel","feeling","feel","felt"], bonne: 2, expl: "make + base verbale sans to.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-ang-12",
      fiche: `## Connecteurs et expressions pour argumenter

Au niveau B2, on attend une **argumentation organisée** et **nuancée**, qui tient compte d'**autres opinions**. Les **connecteurs logiques** (**linking words**) rendent le raisonnement visible ; les **expressions d'opinion** permettent de nuancer.

### Organiser son propos
- Introduire : **First of all**, **To begin with**, **Firstly**.
- Ajouter : **Moreover**, **Furthermore**, **In addition**, **What is more**, **Besides**.
- Énumérer : **Secondly**, **Then**, **Finally**, **Last but not least**.
- Conclure : **To conclude**, **In conclusion**, **All in all**, **To sum up**.

### Exprimer la cause et la conséquence
- Cause : **because** + proposition, **because of** + nom, **since**, **as**, **due to**, **owing to**.
- Conséquence : **so**, **therefore** (donc, par conséquent), **as a result**, **consequently**, **that is why**.
- But : **to**, **in order to**, **so as to**, **so that** + proposition.

### Opposer et concéder
- Opposition : **but**, **however** (cependant, en tête de phrase suivi d'une virgule), **on the other hand**, **whereas** et **while** (alors que), **instead of** + -ing.
- Concession : **although** / **even though** + proposition (bien que), **despite** / **in spite of** + nom ou -ing (malgré), **nevertheless**, **yet**, **even so**.
- Attention : **despite the rain**, pas « despite of » ; **although it was raining**.

### Illustrer et préciser
- **For example**, **for instance**, **such as** (tel que), **in particular**, **especially**, **namely** (à savoir), **in other words**, **that is to say**.

### Donner son opinion avec nuance
- **In my opinion**, **As far as I'm concerned**, **From my point of view**, **I believe / I'm convinced that**.
- Nuancer : **It seems to me that**, **To some extent** (dans une certaine mesure), **It depends on**, **I'm not sure that**, **probably**, **arguably**.
- Prendre en compte l'autre camp : **Some people argue that…**, **It is true that… but…**, **Admittedly** (certes), **I see your point, but…**, **On the one hand… on the other hand…**.
- Emphase : **What really matters is…**, **It is… that…** (**It is the media that shape our opinions**), auxiliaire d'insistance **do** (**They did imagine the laser beam**).

### Réagir dans une discussion (interaction)
- Être d'accord : **I agree with you**, **Exactly**, **That's a good point**.
- Ne pas être d'accord poliment : **I'm afraid I disagree**, **I don't quite see it that way**.
- Demander une précision : **What do you mean by…?**, **Could you explain…?**
- Gagner du temps : **Well, let me think…**, **That's an interesting question.**

### À retenir pour le bac
- Organiser : **firstly**, **moreover**, **finally**, **to conclude**.
- Cause et conséquence : **because of**, **due to**, **therefore**, **as a result** ; opposition et concession : **however**, **whereas**, **although** + proposition, **despite** + nom.
- Nuancer et tenir compte des autres avis : **to some extent**, **admittedly**, **some people argue that… but…**.`,
      cartes: [
        { q: "Que signifie moreover ?", r: "De plus, en outre." },
        { q: "Que signifie therefore ?", r: "Donc, par conséquent." },
        { q: "Quelle différence entre because et because of ?", r: "Because + proposition ; because of + nom." },
        { q: "Que signifie however et comment l'utiliser ?", r: "Cependant ; souvent en tête de phrase, suivi d'une virgule." },
        { q: "Que signifie whereas ?", r: "Alors que (opposition)." },
        { q: "Quelle différence entre although et despite ?", r: "Although + proposition ; despite + nom ou forme en -ing." },
        { q: "Peut-on dire despite of ?", r: "Non : despite ou in spite of." },
        { q: "Que signifie such as ?", r: "Tel que, comme (pour donner des exemples)." },
        { q: "Que signifie to some extent ?", r: "Dans une certaine mesure." },
        { q: "Que signifie admittedly ?", r: "Certes, il faut l'admettre." },
        { q: "Comment dire « en ce qui me concerne » ?", r: "As far as I'm concerned." },
        { q: "Comment exprimer poliment un désaccord ?", r: "I'm afraid I disagree, ou I don't quite see it that way." },
        { q: "Que signifie last but not least ?", r: "Enfin, et ce n'est pas le moins important." },
        { q: "Comment mettre en relief « ce sont les médias qui… » ?", r: "It is the media that…" },
      ],
      quiz: [
        { q: "Que signifie therefore ?", choix: ["Par conséquent","Cependant","De plus","Bien que"], bonne: 0, expl: "Conséquence.", niv: 1 },
        { q: "Quel connecteur signifie « bien que » ?", choix: ["despite","although","because","unless"], bonne: 1, expl: "+ proposition.", niv: 1 },
        { q: "Que signifie for instance ?", choix: ["Pour l'instant","Pour de bon","En revanche","Par exemple"], bonne: 3, expl: "= for example.", niv: 1 },
        { q: "Quel mot introduit une conclusion ?", choix: ["Moreover","To sum up","Whereas","Such as"], bonne: 1, expl: "Pour résumer.", niv: 1 },
        { q: "Complète : « ___ the rain, the march took place. »", choix: ["Although","Because","Despite of","Despite"], bonne: 3, expl: "+ nom.", niv: 2 },
        { q: "Complète : « The project failed ___ a lack of money. »", choix: ["because of","because","although","whereas"], bonne: 0, expl: "+ nom.", niv: 2 },
        { q: "Quelle expression nuance une opinion ?", choix: ["Without any doubt","Obviously and definitely","To some extent","Of course everybody agrees"], bonne: 2, expl: "Dans une certaine mesure.", niv: 2 },
        { q: "Que signifie whereas ?", choix: ["Où que","Alors que","Par conséquent","Peut-être"], bonne: 1, expl: "Opposition entre deux faits.", niv: 2 },
        { q: "Quelle formule permet de prendre en compte l'avis opposé ?", choix: ["Everybody knows that…","Some people argue that…, but…","It is obvious that…","I'm absolutely sure that…"], bonne: 1, expl: "Argumentation nuancée.", niv: 2 },
        { q: "Quelle phrase emploie correctement although ?", choix: ["Despite it was late, they kept talking.","Although of the late hour, they kept talking.","Despite of it was late, they kept talking.","Although it was late, they kept talking."], bonne: 3, expl: "although + proposition.", niv: 3 },
        { q: "Que montre l'auxiliaire did dans « They did imagine the laser beam » ?", choix: ["Une question au passé","Une négation","Un futur proche","Une insistance sur la réalité du fait"], bonne: 3, expl: "Emphase.", niv: 3 },
        { q: "Pourquoi les connecteurs sont-ils valorisés au niveau B2 ?", choix: ["Ils permettent d'écrire moins de mots pour le même résultat","Ils rendent l'enchaînement logique des idées visible","Ils remplacent les exemples","Ils évitent d'utiliser des verbes"], bonne: 1, expl: "Cohérence du discours.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-ang-13",
      fiche: `## Méthode : comprendre un document oral ou écrit

La **compréhension** compte pour la **moitié** de la note dans le modèle d'évaluation de terminale. On rend compte du document **oral** en **français** ; pour l'**écrit**, en français ou en anglais selon la **consigne**, de façon **libre** (un compte rendu rédigé) ou **guidée** (des questions).

### Avant d'écouter ou de lire : anticiper
- Lire le **titre**, la **source**, la **date**, le **type** de document (reportage, interview, extrait de roman, article d'opinion, discours).
- Faire des **hypothèses** à partir du titre, des images et de la **thématique** du dossier.
- Lister mentalement le **vocabulaire** probable du thème.

### Le document oral
- Durée : **1 min 30 au plus**, **trois écoutes** espacées d'une minute ; on prend des **notes**.
- **Première écoute** : situation générale. **Qui** parle ? **Où** ? **De quoi** ? Quel **ton** (sérieux, ironique, inquiet, enthousiaste) ?
- **Deuxième écoute** : les **idées principales** et les **mots accentués**, les **chiffres**, les **noms propres**, les **dates**.
- **Troisième écoute** : les **détails**, les **liens logiques** (because, but, so) et le **point de vue** du locuteur.
- Prendre des notes **en abrégé** avec des **flèches** et des **symboles** ; ne pas chercher à tout écrire.
- Ne pas bloquer sur un mot inconnu : le **contexte** aide à le deviner.

### Le document écrit
- Lire une première fois **en entier** pour le sens général, puis **surligner** les passages clés.
- Repérer la **structure** : introduction, étapes, retournement, conclusion ; les **connecteurs** (however, therefore).
- Distinguer les **faits** (dates, chiffres) des **opinions** (I think, arguably, adjectifs appréciatifs).
- Repérer les **indices d'implicite** : **ironie**, **humour**, **emphase**, **sous-entendu**.
- Deviner un mot inconnu grâce au **contexte**, à sa **famille** (**unemployment** vient de **employ**), aux **préfixes** (**un-**, **dis-**, **mis-**, **over-**) et suffixes (**-less** = sans, **-ful** = plein de, **-ness** = nom).
- Se méfier des **faux amis** (**actually** = en fait, **eventually** = finalement, **sensible** = raisonnable, **library** = bibliothèque).

### Rédiger le compte rendu
- Commencer par **présenter le document** : nature, source, date, sujet.
- Restituer les **informations essentielles** dans un **ordre logique**, avec des **phrases complètes**, en hiérarchisant (idée principale puis détails).
- Préciser le **point de vue** ou l'**intention** de l'auteur ou du locuteur.
- Ne pas **inventer**, ne pas **traduire mot à mot**, ne pas donner son avis (sauf si la consigne le demande).
- **Relier** le document au **dossier** et à l'**axe** si une question porte sur l'ensemble.

### Ce que valorise la grille
- Le **niveau** de compréhension : le **sujet** seul (faible), les **informations principales** (B1), puis les **détails pertinents**, la **structure** et le **point de vue implicite** (B2).

### À retenir pour le bac
- Anticiper avec le titre, la source et le thème ; trois écoutes ciblées (général, essentiel, détails et point de vue).
- Faits et opinions, implicite, mots inconnus devinés par le contexte et la formation des mots ; faux amis.
- Compte rendu organisé : présentation, idées hiérarchisées, intention de l'auteur, sans traduction mot à mot.`,
      cartes: [
        { q: "Dans quelle langue rend-on compte du document oral ?", r: "En français." },
        { q: "Combien de fois écoute-t-on le document oral ?", r: "Trois fois, avec une minute entre chaque écoute." },
        { q: "Que chercher à la première écoute ?", r: "La situation générale : qui parle, où, de quoi, sur quel ton." },
        { q: "Que chercher à la troisième écoute ?", r: "Les détails, les liens logiques et le point de vue du locuteur." },
        { q: "Comment prendre des notes efficacement ?", r: "En abrégé, avec des flèches et des symboles, sans tout écrire." },
        { q: "Que faire face à un mot inconnu ?", r: "S'appuyer sur le contexte, la famille du mot, les préfixes et suffixes." },
        { q: "Que signifie le suffixe -less ?", r: "Sans : homeless = sans abri." },
        { q: "Que signifie le préfixe mis- ?", r: "Mal, de travers : misunderstand = mal comprendre." },
        { q: "Que signifie actually ?", r: "En fait (faux ami : pas « actuellement »)." },
        { q: "Que signifie eventually ?", r: "Finalement (faux ami : pas « éventuellement »)." },
        { q: "Comment distinguer un fait d'une opinion ?", r: "Le fait se vérifie (date, chiffre) ; l'opinion porte un jugement (I think, adjectifs)." },
        { q: "Comment commencer un compte rendu ?", r: "En présentant le document : nature, source, date et sujet." },
        { q: "Que faut-il éviter dans un compte rendu ?", r: "Inventer, traduire mot à mot et donner son avis sans qu'on le demande." },
        { q: "Qu'est-ce qui distingue une compréhension B2 ?", r: "Les détails pertinents, la structure et le point de vue implicite sont compris." },
      ],
      quiz: [
        { q: "Que signifie actually ?", choix: ["Actuellement","Activement","En fait","Exactement"], bonne: 2, expl: "Faux ami.", niv: 1 },
        { q: "Que signifie le suffixe -less dans homeless ?", choix: ["Plein de","Moins de","Très","Sans"], bonne: 3, expl: "Sans abri.", niv: 1 },
        { q: "Que faut-il lire avant d'écouter ou de lire un document ?", choix: ["Le titre, la source et la date","La grille de correction","Le corrigé du devoir","La dernière ligne"], bonne: 0, expl: "Anticiper.", niv: 1 },
        { q: "Que signifie eventually ?", choix: ["Éventuellement","Évidemment","Ensemble","Finalement"], bonne: 3, expl: "Faux ami.", niv: 1 },
        { q: "Que faire à la première écoute ?", choix: ["Repérer qui parle, de quoi et sur quel ton","Noter chaque mot entendu dans l'ordre exact","Traduire le document phrase par phrase","Rédiger directement la conclusion"], bonne: 0, expl: "Vue d'ensemble.", niv: 2 },
        { q: "Que signifie misunderstand ?", choix: ["Ne pas entendre","Comprendre parfaitement","Faire semblant de comprendre","Mal comprendre"], bonne: 3, expl: "mis- = mal.", niv: 2 },
        { q: "Quel indice signale une opinion plutôt qu'un fait ?", choix: ["« The law was passed in 2023. »","« The town has 600,000 inhabitants. »","« The report was published last Monday by the government. »","« Arguably, this is the worst decision ever. »"], bonne: 3, expl: "Jugement de valeur.", niv: 2 },
        { q: "Comment deviner le sens de unemployment ?", choix: ["En le cherchant dans le titre","En le prononçant à voix haute","Par la famille du mot : employ et le préfixe un-","On ne peut pas le deviner"], bonne: 2, expl: "Formation des mots.", niv: 2 },
        { q: "Que doit contenir le début d'un compte rendu ?", choix: ["La nature, la source, la date et le sujet du document","Son opinion personnelle détaillée","La traduction du premier paragraphe","Une longue citation en anglais de chaque paragraphe du texte"], bonne: 0, expl: "Présenter.", niv: 2 },
        { q: "Pourquoi ne faut-il pas traduire mot à mot ?", choix: ["La traduction est interdite dans chaque évaluation de langue vivante","Les mots anglais n'ont pas d'équivalent","Le correcteur ne lit pas le français","Il faut restituer le sens et hiérarchiser les informations"], bonne: 3, expl: "Rendre compte.", niv: 3 },
        { q: "Un journaliste écrit « What a brilliant idea! » après une décision absurde. Que repérer ?", choix: ["Un éloge sincère de la décision","Une erreur de traduction","L'ironie, qui montre son désaccord","Une citation d'un ministre"], bonne: 2, expl: "Implicite.", niv: 3 },
        { q: "Qu'est-ce qui permet d'atteindre le niveau B2 en compréhension ?", choix: ["Saisir les détails, la structure et l'implicite","Repérer le sujet général seul","Relever quelques mots isolés","Compter le nombre de paragraphes et de lignes du texte"], bonne: 0, expl: "Grille.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-ang-14",
      fiche: `## Méthode : l'expression écrite

Dans le modèle d'évaluation de terminale, l'**expression écrite** suit la compréhension de l'écrit et compte pour un **quart** de la note de l'évaluation écrite. On choisit souvent **un sujet sur deux**. Le texte attendu est d'environ **120 mots** en LVB (niveau **B1**) et **150 mots** en LVA (niveau **B2**) : vérifier le nombre indiqué sur le sujet, une marge de 10 % est en général tolérée.

### Les types de sujets
- **Essay** (texte argumentatif) : répondre à une question ouverte, par exemple **Can fiction help us understand reality?**
- **Article** pour un journal ou un blog de lycée : un **titre accrocheur**, une **introduction** qui interpelle, des **paragraphes**.
- **Letter** ou **e-mail** : formules d'ouverture (**Dear Sir or Madam**, **Dear Tom**) et de clôture (**Yours faithfully** si on ne connaît pas le nom, **Yours sincerely** si on le connaît, **Best wishes** pour un proche).
- **Forum post** ou **speech** : on s'adresse à un public (**Fellow students**, **Ladies and gentlemen**).
- **Récit** ou **suite de texte** : imaginer la suite, un dialogue, le **journal intime** (**diary**) d'un personnage, en respectant la **cohérence** avec le document.

### La méthode en quatre étapes
- **Analyser le sujet** : souligner les **mots clés**, le **type de texte**, le **destinataire**, le **registre** (familier ou soutenu) et la **consigne de longueur**.
- **Chercher les idées** au brouillon, en anglais directement, avec des **exemples** tirés du dossier ou de la **culture** (axes du programme).
- **Faire un plan** : introduction (accroche et problématique), **deux ou trois paragraphes** (une idée par paragraphe, un exemple), conclusion (bilan et ouverture).
- **Rédiger et relire** : garder **dix minutes** pour la relecture.

### La relecture : une liste à cocher
- **-s** de la 3e personne au présent ; accords **this/these** ; pluriels irréguliers (**people are**, **children**).
- **Temps** : prétérit avec une date, present perfect avec **for/since**.
- **Ordre des mots** : adjectif avant le nom (**a dangerous idea**), pas de **-s** aux adjectifs.
- **Prépositions** courantes : **depend on**, **interested in**, **listen to**, **in 2025**, **on Monday**.
- **Faux amis** et **gallicismes** : **I agree** (pas « I am agree »), **information** sans -s, **advice**.
- Nombre de mots : écrire le total en bas de la copie si la consigne le demande.

### Ce que valorise la grille
- **Réalisation de la tâche** : le sujet est traité, le **type de texte** respecté, le texte est **convaincant** (B2) ou **compréhensible** (B1).
- **Cohérence** : idées enchaînées par des **connecteurs** variés, paragraphes.
- **Correction** de la langue et **richesse** : **vocabulaire précis** du thème, **structures variées** (relatives, passif, conditionnelles, modaux).
- Éviter le **hors sujet**, la **récitation** d'un texte appris par cœur et le **mot à mot** depuis le français.

### Expressions utiles
- Introduire : **Nowadays**, **It is often said that…**, **This raises the question of…**
- Conclure : **All things considered**, **In the end**, **Only time will tell whether…**

### À retenir pour le bac
- Environ 120 mots en LVB, 150 en LVA ; respecter le type de texte, le destinataire et le registre.
- Analyser, chercher des idées en anglais, plan en paragraphes, dix minutes de relecture.
- Grille : tâche réalisée, cohérence, correction et richesse de la langue.`,
      cartes: [
        { q: "Quelle longueur viser en LVA ?", r: "Environ 150 mots (niveau B2), selon le sujet." },
        { q: "Quelle longueur viser en LVB ?", r: "Environ 120 mots (niveau B1), selon le sujet." },
        { q: "Qu'est-ce qu'un essay ?", r: "Un texte argumentatif qui répond à une question ouverte." },
        { q: "Quand termine-t-on une lettre par Yours faithfully ?", r: "Quand on ne connaît pas le nom du destinataire (Dear Sir or Madam)." },
        { q: "Quand termine-t-on une lettre par Yours sincerely ?", r: "Quand on connaît le nom du destinataire." },
        { q: "Que faut-il repérer dans le sujet ?", r: "Les mots clés, le type de texte, le destinataire, le registre et la longueur." },
        { q: "En quelle langue chercher ses idées au brouillon ?", r: "Directement en anglais, pour éviter le mot à mot." },
        { q: "Quel plan pour un essay ?", r: "Introduction, deux ou trois paragraphes avec un exemple chacun, conclusion." },
        { q: "Combien de temps garder pour la relecture ?", r: "Environ dix minutes." },
        { q: "Comment dire « je suis d'accord » ?", r: "I agree (et non « I am agree »)." },
        { q: "Les adjectifs anglais prennent-ils un -s au pluriel ?", r: "Non : dangerous ideas." },
        { q: "Qu'est-ce qu'un diary ?", r: "Un journal intime." },
        { q: "Quels sont les trois critères de la grille d'expression écrite ?", r: "La réalisation de la tâche, la cohérence et la correction et richesse de la langue." },
        { q: "Que faut-il éviter en expression écrite ?", r: "Le hors sujet, la récitation d'un texte appris et le mot à mot depuis le français." },
      ],
      quiz: [
        { q: "Comment dire « je suis d'accord » ?", choix: ["I am agree","I am agreed with","I do agreeing","I agree"], bonne: 3, expl: "Gallicisme à éviter.", niv: 1 },
        { q: "Que signifie diary ?", choix: ["Dictionnaire","Quotidien national","Agenda de bureau","Journal intime"], bonne: 3, expl: "Faux ami partiel.", niv: 1 },
        { q: "Quelle formule ouvre une lettre formelle à un inconnu ?", choix: ["Hi guys","Dear Sir or Madam","Hello my friend","See you soon"], bonne: 1, expl: "Registre soutenu.", niv: 1 },
        { q: "Quel texte faut-il produire pour un sujet « essay » ?", choix: ["Un texte argumentatif","Un poème en vers","Un résumé du document","Une traduction du texte"], bonne: 0, expl: "Argumenter.", niv: 1 },
        { q: "Comment clore une lettre adressée à « Dear Mr Smith » ?", choix: ["Yours faithfully","Yours sincerely","Lots of love","Cheers mate"], bonne: 1, expl: "On connaît le nom.", niv: 2 },
        { q: "Quelle phrase respecte les accords ?", choix: ["This ideas are dangerous.","These ideas are dangerouses.","These ideas are dangerous.","These idea is dangerous."], bonne: 2, expl: "Accords.", niv: 2 },
        { q: "Quelle est la première étape face au sujet ?", choix: ["Écrire directement le texte au propre sans brouillon","Repérer le type de texte et le destinataire","Traduire le sujet mot à mot","Compter les mots du document"], bonne: 1, expl: "Analyser.", niv: 2 },
        { q: "Que doit contenir chaque paragraphe d'un essay ?", choix: ["Plusieurs idées sans lien","Une seule phrase très longue","La question du sujet recopiée","Une idée principale et un exemple"], bonne: 3, expl: "Une idée par paragraphe.", niv: 2 },
        { q: "Quelle phrase emploie la bonne préposition ?", choix: ["It depends on the context.","It depends of the context.","It depends from the context.","It is depending of context."], bonne: 0, expl: "depend on.", niv: 2 },
        { q: "Qu'est-ce qui rend un essay convaincant au niveau B2 ?", choix: ["Une longue liste d'idées sans exemple","La répétition de la question du sujet","Un texte appris par cœur avant l'épreuve","Des arguments nuancés, illustrés et bien reliés"], bonne: 3, expl: "Argumentation.", niv: 3 },
        { q: "Pourquoi chercher ses idées directement en anglais ?", choix: ["Parce que le brouillon est noté","Parce que le français est interdit au brouillon","Pour éviter les erreurs dues au mot à mot","Pour écrire plus de mots"], bonne: 2, expl: "Gallicismes.", niv: 3 },
        { q: "Une copie récite un texte appris sans rapport avec la question. Quel critère est touché ?", choix: ["L'orthographe du titre","La qualité de l'écriture manuscrite","La présentation des marges","La réalisation de la tâche"], bonne: 3, expl: "Hors sujet.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-ang-15",
      fiche: `## Méthode : l'expression orale et l'ETLV

Dans le modèle d'évaluation de terminale, l'**expression orale** est un temps **individuel** de **10 minutes**, après **10 minutes de préparation**. Elle compte pour un **quart** de la note globale. Le même schéma sert souvent en classe pour le contrôle continu.

### Le déroulement
- L'examinateur propose **trois axes** du programme ; le candidat en **choisit un**.
- Il reçoit alors deux **pistes de discussion** : **deux images**, **deux citations**, ou **une image et une citation**.
- Il explique en anglais, pendant **cinq minutes au plus**, **quel document illustre le mieux l'axe** à son avis, et **pourquoi**.
- Suit un **entretien** : l'examinateur pose des questions, puis élargit à des questions plus **générales**, par exemple sur le **travail fait en classe** sur cet axe.

### Préparer sa prise de parole (10 minutes)
- Noter des **mots clés** et un **plan**, pas un texte rédigé : on ne **lit** pas ses notes.
- **Présenter** brièvement les deux documents (**This picture shows…**, **In this quotation, the author claims that…**).
- **Choisir** et **justifier** : **I think the first document illustrates the axis better because…**
- **Comparer** les deux pistes (**whereas**, **unlike**, **both… but…**) et relier à l'**axe** et à des **exemples** vus en classe (œuvres, événements, personnalités).
- **Conclure** par une phrase de bilan et, si possible, une **ouverture** personnelle.

### Décrire une image
- Situer : **in the foreground** (au premier plan), **in the background** (à l'arrière-plan), **on the left / right**, **in the middle**.
- Interpréter avec prudence : **It seems that…**, **It may be…**, **It looks like…**, **This suggests that…**
- Nature du document : **a photograph**, **a cartoon** (dessin de presse), **a poster** (affiche), **a painting**, **an ad** (publicité).

### Pendant l'entretien
- **Écouter** la question et y **répondre** vraiment ; développer avec **because** et un exemple.
- Demander de **répéter** si besoin : **Could you repeat the question, please?** C'est **accepté** et ne fait pas perdre de points.
- Gagner du temps naturellement : **Well…**, **Let me think…**, **That's a good question.**
- **Se corriger** soi-même si on entend une erreur : c'est valorisé.

### Ce que valorise la grille
- **Prise de parole en continu** : discours **organisé**, **argumenté**, **nuancé** (B2) ou **simple et compréhensible** (B1).
- **Interaction** : capacité à **réagir**, **reformuler**, **défendre son point de vue**.
- **Intelligibilité** et **correction** : **prononciation** claire, **accent de mot** (**deVElopment**, **ecoNOmic**), **intonation**, vocabulaire et grammaire.
- À éviter : **lire** ses notes, **réciter**, rester **muet** devant une question.

### L'ETLV (voie technologique)
- L'**enseignement technologique en langue vivante** se substitue à l'oral de la langue qui lui est associée.
- **10 minutes sans préparation** devant **deux enseignants** (celui de la spécialité technologique et celui de langue) : **cinq minutes** de prise de parole sur un projet ou des ressources **produits par le candidat**, puis un **entretien**.

### À retenir pour le bac
- Choix d'un axe parmi trois, deux pistes, cinq minutes pour dire laquelle illustre le mieux l'axe et pourquoi, puis entretien.
- Préparer des mots clés et un plan, présenter, choisir, justifier, comparer, relier à l'axe et aux exemples de l'année.
- Grille : continu, interaction, intelligibilité ; demander de répéter est permis. ETLV : 10 minutes sans préparation, ressources du candidat.`,
      cartes: [
        { q: "Combien de temps dure l'oral du modèle de terminale ?", r: "10 minutes, après 10 minutes de préparation." },
        { q: "Combien d'axes l'examinateur propose-t-il ?", r: "Trois ; le candidat en choisit un." },
        { q: "Que reçoit le candidat après le choix de l'axe ?", r: "Deux pistes : deux images, deux citations, ou une image et une citation." },
        { q: "Que doit expliquer le candidat ?", r: "Quel document illustre le mieux l'axe à son avis, et pourquoi." },
        { q: "Combien de temps dure la prise de parole en continu ?", r: "Cinq minutes au plus." },
        { q: "Sur quoi peut porter l'entretien ?", r: "Sur les documents, puis sur des questions plus générales, comme le travail fait en classe sur l'axe." },
        { q: "Que noter pendant la préparation ?", r: "Des mots clés et un plan, pas un texte rédigé." },
        { q: "Comment dire « au premier plan » ?", r: "In the foreground." },
        { q: "Comment dire « à l'arrière-plan » ?", r: "In the background." },
        { q: "Qu'est-ce qu'un cartoon ?", r: "Un dessin humoristique ou de presse." },
        { q: "Peut-on demander de répéter une question ?", r: "Oui : Could you repeat the question, please?" },
        { q: "Quels sont les trois critères de la grille d'oral ?", r: "La prise de parole en continu, l'interaction et l'intelligibilité avec la correction de la langue." },
        { q: "Qu'est-ce que l'ETLV ?", r: "L'enseignement technologique en langue vivante, qui remplace l'oral de la langue associée en voie technologique." },
        { q: "Comment se passe l'évaluation d'ETLV ?", r: "10 minutes sans préparation : 5 minutes de présentation sur des ressources produites par le candidat, puis un entretien avec deux enseignants." },
      ],
      quiz: [
        { q: "Comment dire « au premier plan » ?", choix: ["In the background","In the foreground","In the first plan","On the front side"], bonne: 1, expl: "Description d'image.", niv: 1 },
        { q: "Qu'est-ce qu'un cartoon dans un sujet d'anglais ?", choix: ["Un carton d'emballage","Un dessin de presse ou humoristique","Une affiche publicitaire","Une photographie ancienne"], bonne: 1, expl: "Faux ami partiel.", niv: 1 },
        { q: "Combien d'axes l'examinateur propose-t-il au départ ?", choix: ["Un seul","Deux","Trois","Le candidat les choisit seul"], bonne: 2, expl: "Le candidat en choisit un.", niv: 1 },
        { q: "Quelle phrase permet de faire répéter une question ?", choix: ["Could you repeat the question, please?","Repeat, you must!","I don't care about the question.","Say again it now."], bonne: 0, expl: "Formule polie.", niv: 1 },
        { q: "Combien de temps dure la prise de parole en continu ?", choix: ["Cinq minutes au plus","Une minute au plus","Deux minutes","Le temps de lire ses notes"], bonne: 0, expl: "Puis entretien.", niv: 2 },
        { q: "Que doit faire le candidat avec les deux pistes de discussion ?", choix: ["Les traduire en français","Les décrire en détail sans donner son avis personnel","Les départager en justifiant son choix","Les résumer en une phrase"], bonne: 2, expl: "Choisir et argumenter.", niv: 2 },
        { q: "Que faut-il écrire pendant les 10 minutes de préparation ?", choix: ["Des mots clés et un plan","Un texte complet à lire","La traduction des citations","Une liste de questions à poser au jury"], bonne: 0, expl: "Ne pas lire.", niv: 2 },
        { q: "Quelle formule interprète une image avec prudence ?", choix: ["It is 100 % sure that…","Everybody knows that…","Without any doubt…","It seems that…"], bonne: 3, expl: "Nuance.", niv: 2 },
        { q: "Quelle syllabe est accentuée dans economic ?", choix: ["E : Economic","NO : ecoNOmic","MIC : ecoMIC","CO : eCOnomic"], bonne: 1, expl: "Accent de mot.", niv: 2 },
        { q: "Pourquoi relier les pistes aux exemples vus en classe ?", choix: ["Parce que l'examinateur interdit de parler des documents","Pour montrer sa culture sur l'axe","Pour éviter de parler cinq minutes","Pour réciter un exposé appris"], bonne: 1, expl: "Culture.", niv: 3 },
        { q: "Un candidat se rend compte qu'il a dit « he don't ». Que faire ?", choix: ["Se corriger aussitôt : he doesn't","Continuer sans rien dire, c'est plus sûr","S'arrêter et demander un dictionnaire","Recommencer depuis le début"], bonne: 0, expl: "L'autocorrection est valorisée.", niv: 3 },
        { q: "En quoi l'ETLV diffère-t-elle de l'oral habituel ?", choix: ["Elle dure une heure entière avec un texte imposé par le jury","Elle se passe à l'écrit en salle d'examen","Elle remplace l'épreuve écrite de spécialité","Elle porte sur des ressources produites par le candidat"], bonne: 3, expl: "Voie technologique.", niv: 3 },
      ],
    },
  ],
  methode: [
    {
      "id": "lv-ang-m1",
      "mat": "lv-ang",
      "titre": "Rendre compte en français d'un document oral",
      "formules": [
        "Rendez compte en français du document que vous avez entendu.",
        "Qui parle, de quoi, et dans quel but ?",
        "Quel est le point de vue du locuteur ?"
      ],
      "vu": [
        "Modèle officiel des évaluations de langues vivantes A et B en terminale (note de service, version consolidée de juin 2025) : document audio ou vidéo d'1 min 30 au plus, trois écoutes, compte rendu en français, libre ou guidé"
      ],
      "pts": "Environ 5 points sur 20 (la compréhension de l'oral et de l'écrit vaut la moitié de la note)",
      "attendu": "Le correcteur veut voir que tu as compris la situation (qui parle, à qui, où, quand), les informations principales dans un ordre logique, puis les détails importants (chiffres, noms, exemples) et le point de vue ou le ton du locuteur. Il attend des phrases complètes en français, sans traduction mot à mot ni invention.",
      "etapes": [
        "Avant l'écoute : lire le titre et anticiper le thème et le vocabulaire.",
        "Première écoute : noter qui parle, de quoi, sur quel ton.",
        "Deuxième écoute : noter les idées principales, les chiffres et les noms propres.",
        "Troisième écoute : compléter les détails, les liens logiques et l'opinion.",
        "Rédiger : présenter le document, puis restituer les idées dans un ordre logique.",
        "Finir par l'intention ou le point de vue du locuteur."
      ],
      "mots": [
        "le locuteur explique que",
        "selon lui",
        "il dénonce",
        "il met en garde",
        "elle se réjouit de",
        "le reportage montre",
        "en conclusion, il estime que"
      ],
      "pieges": [
        "Écrire une liste de mots sans phrases.",
        "Inventer ce qu'on n'a pas compris.",
        "Oublier le ton ou l'intention du locuteur.",
        "Écrire en anglais alors que le compte rendu se fait en français."
      ],
      "cas": "Document inventé : un reportage radio d'une minute. Une journaliste britannique interroge Amira, 17 ans, déléguée d'un lycée de Leeds, sur l'interdiction des téléphones portables en classe décidée par son établissement. Amira explique qu'au début les élèves étaient furieux, mais qu'après trois mois les résultats ont progressé et que les élèves se parlent davantage à la récréation. Elle regrette pourtant de ne plus pouvoir prévenir ses parents en cas de retard du bus, et propose des casiers où laisser les téléphones.",
      "question": "Rédige en français le compte rendu de ce reportage, comme si tu l'avais entendu.",
      "modele": "Il s'agit d'un reportage radio britannique dans lequel une journaliste interroge Amira, une lycéenne de 17 ans déléguée de son établissement à Leeds. Le sujet est l'interdiction des téléphones portables en classe. Amira explique que les élèves étaient d'abord très mécontents de cette décision. Cependant, après trois mois, elle constate deux effets positifs : les résultats scolaires se sont améliorés et les élèves discutent davantage entre eux pendant les pauses. Elle nuance toutefois son jugement : elle ne peut plus avertir ses parents quand le bus est en retard. Elle propose donc une solution de compromis, des casiers pour ranger les téléphones. Son point de vue est globalement favorable, mais réfléchi et nuancé.",
      "grille": [
        "Nature et source du document présentées",
        "Locutrice et sujet identifiés",
        "Les deux effets positifs restitués",
        "La réserve (prévenir les parents) comprise",
        "La proposition des casiers relevée",
        "Point de vue nuancé identifié"
      ]
    },
    {
      "id": "lv-ang-m2",
      "mat": "lv-ang",
      "titre": "Comprendre un texte écrit et répondre aux questions",
      "formules": [
        "Rendez compte du texte en français ou en anglais selon la consigne.",
        "What is the narrator's attitude towards…?",
        "Explain the title.",
        "Pick out a quotation showing that…"
      ],
      "vu": [
        "Modèle officiel des évaluations de langues vivantes A et B en terminale (note de service, version consolidée de juin 2025) : un ou deux textes, compte rendu libre ou guidé en français ou en anglais selon la consigne"
      ],
      "pts": "Environ 5 points sur 20",
      "attendu": "Le correcteur vérifie la compréhension globale (sujet, situation, personnages), les informations précises et l'implicite : ton, ironie, sentiments, intention de l'auteur. Les réponses doivent être justifiées par de courtes citations entre guillemets et formulées avec ses propres mots.",
      "etapes": [
        "Lire la source, le titre et la date avant le texte.",
        "Première lecture en entier pour le sens général.",
        "Relire les questions et surligner les passages qui y répondent.",
        "Distinguer faits et opinions, repérer l'ironie et les sentiments.",
        "Répondre avec ses mots, puis justifier par une courte citation."
      ],
      "mots": [
        "the narrator",
        "the main character",
        "the tone is ironic",
        "the author criticises",
        "as shown in line…",
        "this suggests that",
        "he feels bitter",
        "she is torn between"
      ],
      "pieges": [
        "Recopier de longs passages au lieu de reformuler.",
        "Répondre sans citation quand la consigne en demande une.",
        "Confondre l'avis de l'auteur et celui d'un personnage.",
        "Passer à côté de l'ironie et prendre un éloge au pied de la lettre."
      ],
      "cas": "Extrait inventé : « Grandpa Joe had worked at the mill for forty-two years. When it closed, the company sent him a card that said \"Thank you for your valuable contribution!\" with a smiling cartoon sun. He pinned it above the empty fireplace, next to the unpaid electricity bill. \"Valuable,\" he repeated every evening, and laughed a laugh that wasn't really a laugh. »",
      "question": "What is Grandpa Joe's attitude towards the company's card? Answer in English and justify with a quotation.",
      "modele": "Grandpa Joe is bitter and disillusioned about the card. The company thanks him for his \"valuable contribution\", but the message sounds hollow after forty-two years of work and the closure of the mill. He pins the card next to \"the unpaid electricity bill\", which shows the contrast between the company's cheerful words and his real financial difficulties. His laugh, \"a laugh that wasn't really a laugh\", reveals his sadness and his irony: he does not believe that the company really valued him.",
      "grille": [
        "Attitude identifiée (amertume, désillusion)",
        "Ironie du mot valuable comprise",
        "Contraste carte et facture relevé",
        "Citation exacte entre guillemets",
        "Réponse reformulée en anglais correct"
      ]
    },
    {
      "id": "lv-ang-m3",
      "mat": "lv-ang",
      "titre": "Écrire un essay argumenté",
      "formules": [
        "Do you think that…? Discuss.",
        "To what extent…?",
        "Should…? Give your opinion.",
        "Is it still possible to…?"
      ],
      "vu": [
        "Modèle officiel des évaluations de langues vivantes A et B en terminale (note de service, version consolidée de juin 2025) : expression écrite d'environ 120 mots en LVB et 150 mots en LVA, souvent un sujet au choix sur deux"
      ],
      "pts": "Environ 5 points sur 20 (l'expression écrite et orale vaut l'autre moitié)",
      "attendu": "Le correcteur attend un texte qui répond à la question posée, organisé en paragraphes, qui expose un point de vue clair, nuancé et illustré par des exemples précis (documents du dossier, culture vue en classe). La langue doit être correcte et variée : connecteurs, modaux, relatives, conditionnelles, vocabulaire du thème.",
      "etapes": [
        "Souligner les mots clés et la forme de la question (to what extent appelle une réponse nuancée).",
        "Chercher deux ou trois arguments directement en anglais, chacun avec un exemple.",
        "Introduction : accroche, reformulation de la question, annonce du plan.",
        "Paragraphes : un argument, un exemple, une conséquence ; connecteurs variés.",
        "Conclusion : réponse claire et ouverture.",
        "Relire : -s, temps, prépositions, nombre de mots."
      ],
      "mots": [
        "Nowadays",
        "To what extent",
        "On the one hand",
        "On the other hand",
        "Admittedly",
        "Moreover",
        "As a result",
        "All things considered"
      ],
      "pieges": [
        "Réciter un texte appris par cœur à côté de la question.",
        "Donner des idées sans aucun exemple.",
        "Dépasser très largement ou ne pas atteindre le nombre de mots.",
        "Écrire en pensant en français (I am agree, depend of)."
      ],
      "cas": "Axe « Citoyenneté et mondes virtuels ». Sujet : « To what extent can social media help young people become active citizens? » (environ 150 mots).",
      "question": "Rédige l'essay en environ 150 mots.",
      "modele": "Nowadays, most teenagers spend hours on social media. But can these platforms really turn them into active citizens? On the one hand, social media can raise awareness quickly. Greta Thunberg's school strike went viral in 2018 and millions of young people joined climate marches all over the world. Moreover, online petitions allow anyone to make their voice heard in a few clicks. On the other hand, clicking is not acting. Some people argue that \"slacktivism\" gives users the illusion of being engaged while nothing changes. What is more, algorithms trap users in echo chambers and fake news spreads faster than facts, as the Cambridge Analytica scandal showed. All things considered, social media can be a powerful starting point, but only if young people check their sources and turn online support into real action, such as voting or volunteering.",
      "grille": [
        "Réponse à la question posée (to what extent)",
        "Deux points de vue opposés",
        "Exemples précis et culturels",
        "Connecteurs variés et paragraphes",
        "Langue correcte et vocabulaire du thème",
        "Longueur respectée"
      ]
    },
    {
      "id": "lv-ang-m4",
      "mat": "lv-ang",
      "titre": "Écrire un article, une lettre ou une suite de texte",
      "formules": [
        "Write an article for your school magazine about…",
        "Write a letter to…",
        "Imagine the end of the story.",
        "Write the diary entry of…"
      ],
      "vu": [
        "Modèle officiel des évaluations de langues vivantes A et B en terminale (note de service, version consolidée de juin 2025) : expression écrite, souvent deux sujets au choix dont un sujet d'invention en lien avec le texte"
      ],
      "pts": "Environ 5 points sur 20",
      "attendu": "Le correcteur vérifie que le type de texte est respecté (titre pour un article, formules d'ouverture et de clôture pour une lettre, date et première personne pour un journal), que le registre convient au destinataire et que le texte reste cohérent avec le document de départ.",
      "etapes": [
        "Identifier le type de texte, le destinataire et le registre.",
        "Reprendre les éléments du document (personnages, lieu, époque) pour rester cohérent.",
        "Respecter les codes du genre : titre, formules, date, première personne.",
        "Organiser en paragraphes et varier les temps (récit au prétérit, dialogue au présent).",
        "Relire et compter les mots."
      ],
      "mots": [
        "Dear Sir or Madam",
        "Yours faithfully",
        "Yours sincerely",
        "Best wishes",
        "Dear diary",
        "I am writing to",
        "I look forward to hearing from you"
      ],
      "pieges": [
        "Oublier le titre de l'article ou les formules de la lettre.",
        "Mélanger registre familier et soutenu.",
        "Contredire le texte de départ (personnage, lieu, époque).",
        "Écrire un résumé au lieu d'une suite."
      ],
      "cas": "Axe « Espace privé et espace public ». Ton lycée veut installer des caméras de surveillance dans les couloirs. Écris une lettre d'environ 150 mots au proviseur (Mr Harris) pour donner ton avis.",
      "question": "Rédige la lettre en environ 150 mots.",
      "modele": "Dear Mr Harris,\n\nI am writing to you as a student representative about the plan to install CCTV cameras in the corridors.\n\nAdmittedly, I understand your concern. Several bikes were stolen last term and some students do not feel safe. Cameras might discourage thieves and help identify them.\n\nHowever, I believe this measure goes too far. School is a place where we learn to trust each other, not a place where we are constantly watched. As Orwell showed in Nineteen Eighty-Four, living under permanent surveillance changes the way people behave. Moreover, who will watch the recordings, and how long will they be kept?\n\nI would therefore suggest a compromise: cameras in the bike shed only, and a vote of the student council before any decision.\n\nI look forward to hearing from you.\n\nYours sincerely,\n\nSam Taylor, student representative",
      "grille": [
        "Formules d'ouverture et de clôture adaptées",
        "Objet de la lettre annoncé",
        "Argument concédé puis réfuté",
        "Référence culturelle pertinente",
        "Proposition concrète",
        "Registre soutenu respecté"
      ]
    },
    {
      "id": "lv-ang-m5",
      "mat": "lv-ang",
      "titre": "Prise de parole sur deux pistes et entretien",
      "formules": [
        "Which document best illustrates the axis you have chosen? Why?",
        "Can you tell me more about…?",
        "What did you study in class on this axis?",
        "Do you agree with this quotation?"
      ],
      "vu": [
        "Modèle officiel des évaluations de langues vivantes A et B en terminale (note de service, version consolidée de juin 2025) : oral individuel de 10 minutes après 10 minutes de préparation ; choix d'un axe parmi trois, deux pistes (images ou citations), 5 minutes de prise de parole puis entretien"
      ],
      "pts": "Environ 5 points sur 20",
      "attendu": "L'examinateur veut un discours organisé : présentation rapide des deux pistes, choix clair, justification par des arguments et des exemples vus en classe, comparaison, conclusion. Dans l'entretien, il évalue la capacité à réagir, à développer et à défendre son point de vue avec une prononciation intelligible.",
      "etapes": [
        "Choisir l'axe sur lequel on a le plus d'exemples.",
        "Noter des mots clés et un plan, pas un texte.",
        "Présenter les deux pistes en une ou deux phrases chacune.",
        "Annoncer son choix et le justifier par deux raisons.",
        "Relier à l'axe et à une œuvre ou un événement étudié.",
        "Conclure, puis dans l'entretien développer chaque réponse avec because et un exemple."
      ],
      "mots": [
        "This picture shows",
        "In the foreground",
        "This quotation suggests",
        "I would say that",
        "illustrates the axis better",
        "unlike",
        "whereas",
        "it reminds me of"
      ],
      "pieges": [
        "Lire ses notes mot à mot.",
        "Décrire les deux documents sans faire de choix.",
        "Répondre par oui ou non dans l'entretien.",
        "Ne citer aucun exemple étudié dans l'année."
      ],
      "cas": "Axe choisi : « Le Royaume-Uni et ses nations ». Piste 1 : une photo de manifestants pour l'indépendance de l'Écosse, drapeaux bleus et blancs, pancarte « Scotland's future in Scotland's hands ». Piste 2 : la citation inventée « We are four nations, but one team when it matters. »",
      "question": "Rédige en anglais l'essentiel de ta prise de parole (environ 150 mots).",
      "modele": "I have chosen the axis \"The United Kingdom and its nations\". The first document is a photograph of a pro-independence march in Scotland: in the foreground, people are waving Saltires and holding a sign saying \"Scotland's future in Scotland's hands\". The second document is a quotation claiming that the four nations are united when it matters. In my opinion, the photograph illustrates the axis better, because it shows that the Union is still debated. Since devolution in 1999, Scotland has had its own parliament, and in the 2014 referendum 45 % of voters chose independence. After Brexit, which most Scots rejected, the debate came back. The quotation is true to some extent, for example during the Olympics, when athletes compete for Team GB. But it hides the tensions. To conclude, the UK looks united from outside, but its nations have different identities and sometimes different political choices.",
      "grille": [
        "Axe et pistes présentés",
        "Choix annoncé et justifié",
        "Exemples culturels précis (dates, faits)",
        "Comparaison et nuance",
        "Conclusion claire",
        "Langue correcte et vocabulaire de description"
      ]
    }
  ],
  sujets: [
    {
      id: "lv-ang-s1", matiere: 'bioeco', titre: "Évaluation blanche d'anglais, axe « Citoyenneté et mondes virtuels » (sujet inventé)", duree: 90,
      enonce: `Évaluation blanche inventée pour l'entraînement, à la forme du modèle officiel de terminale (LVA et LVB). Les textes, le script audio et les personnes citées sont imaginaires. Faire lire le script à voix haute par quelqu'un d'autre, à vitesse normale, sans le regarder soi-même.

Dossier : « Growing up online ». Axe : Citoyenneté et mondes virtuels.

PREMIER TEMPS : ÉCRIT (1 h 30)

PARTIE 1. Compréhension de l'oral (environ 15 minutes, trois écoutes espacées d'une minute)
Script à faire lire (environ 1 minute) :
"Good morning, this is Radio Leeds. Last week, Hillside School decided to ban mobile phones from the moment students arrive until the final bell. Amira Khan, seventeen, is a student representative. 'At first, everyone was furious. People said it was like going back to the Stone Age,' she laughs. 'But after three months, I must admit our grades have gone up, and people actually talk to each other at lunch. Before, the canteen was silent, everybody was scrolling.' Not everything is perfect, though. 'When the bus is late, I can't text my mum, and she worries. So we've suggested lockers where we could leave our phones and pick them up in an emergency.' The headteacher says he will consider the idea at the next school council."
Consigne : rends compte en français de ce que tu as compris (qui parle, de quoi, faits, opinions, propositions).

PARTIE 2. Compréhension de l'écrit (environ 35 minutes)
Texte inventé, extrait d'un roman pour adolescents :
"Maya had 12,000 followers and not a single friend she could call at midnight. Every morning she posted the same picture: a perfect bowl of fruit, a perfect smile, the hashtag #livingmybestlife. Nobody knew that the fruit went back into the fridge, untouched, and that the smile disappeared the moment the camera clicked off.
The day her old friend Leo sent her a message, she almost deleted it. 'Saw your posts. You look happy. Are you?' Three short sentences. Nobody had asked her a real question in months. She typed 'Of course!' with three heart emojis, then erased everything, letter by letter.
That evening, for the first time, she posted nothing. Her phone vibrated twenty times: 'Are you OK?', 'Where's today's post?', 'Missing your content!' Not one of them asked about her. She switched the phone off, put on her coat and walked to Leo's house, where a real light was on in the kitchen."
Questions (réponds en anglais, ou en français si la consigne le demande) :
a. Who is Maya and what does she do online?
b. Explain the contrast between her online image and her real life. Quote two short phrases.
c. Why is Leo's message different from the others?
d. What does the ending suggest? Explain "a real light".

PARTIE 3. Expression écrite (environ 40 minutes) : traite UN des deux sujets, environ 150 mots en LVA, 120 en LVB.
Sujet A. To what extent can social media help young people become active citizens?
Sujet B. You are Maya. That night, you write in your diary about your evening at Leo's house and what you have decided to change.

DEUXIÈME TEMPS : ORAL (10 minutes après 10 minutes de préparation)
Choisis un axe parmi : « Fictions et réalités », « Citoyenneté et mondes virtuels », « Le Royaume-Uni et ses nations ». Pour « Citoyenneté et mondes virtuels », les deux pistes sont :
Piste 1 : une image décrite ainsi : une famille à table, chacun regarde son téléphone, le chien fixe l'assiette vide.
Piste 2 : la citation inventée « The internet gave everyone a voice, but not everyone a listener. »
Explique pendant cinq minutes au plus quelle piste illustre le mieux l'axe et pourquoi, puis réponds aux questions d'un camarade qui joue l'examinateur.`,
      corrige: `Éléments attendus (corrigé indicatif).

PARTIE 1 (compréhension de l'oral). Il s'agit d'un reportage de Radio Leeds. Un lycée de Leeds, Hillside School, a interdit les téléphones portables pendant toute la journée de cours. Amira Khan, 17 ans, déléguée des élèves, raconte que les élèves étaient d'abord furieux (« un retour à l'âge de pierre »). Après trois mois, elle reconnaît deux effets positifs : les notes ont progressé et les élèves se parlent de nouveau à la cantine, autrefois silencieuse. Elle signale un inconvénient : elle ne peut plus prévenir sa mère quand le bus est en retard. Les élèves proposent donc des casiers pour laisser les téléphones et les récupérer en cas d'urgence ; le proviseur étudiera l'idée au prochain conseil. Point de vue : favorable mais nuancé. Niveau B1 : sujet, interdiction, effets positifs. Niveau B2 : en plus, la réserve, la proposition, le ton (humour, honnêteté) et la réponse du proviseur.

PARTIE 2 (compréhension de l'écrit).
a. Maya is a teenager with 12,000 followers. Every morning she posts the same kind of picture to show a perfect life.
b. Online she looks perfect and happy ("a perfect smile", "#livingmybestlife"), but in reality she is lonely ("not a single friend she could call at midnight") and unhappy: "the smile disappeared the moment the camera clicked off"; she does not even eat the fruit.
c. Leo asks a real question about her feelings ("Are you?"); the others only care about her posts and "content", not about her.
d. The ending suggests that Maya chooses real relationships over her virtual image. "A real light" contrasts with the artificial light of the screen: it stands for warmth, sincerity and friendship.

PARTIE 3 (expression écrite).
Sujet A : introduction qui pose la question ; d'un côté, mobilisation rapide (grèves pour le climat de 2018, #MeToo, pétitions en ligne) ; de l'autre, slacktivism, chambres d'écho, fausses informations (Cambridge Analytica) ; conclusion nuancée : un point de départ utile si l'on vérifie ses sources et passe à l'action (voter, s'engager dans une association). Connecteurs (on the one hand, admittedly, as a result), modaux, conditionnelles.
Sujet B : date et « Dear diary », première personne, prétérit pour raconter la soirée, cohérence avec le texte (Leo, la cuisine éclairée, le téléphone éteint), sentiments (relief, shame, gratitude), décisions au futur (I'm going to post less, I will call Leo), éventuellement I wish I had… pour le regret.

ORAL. Présentation des deux pistes ; choix argumenté (par exemple la citation, qui résume le paradoxe d'un monde connecté mais peu attentif) ; lien avec le texte de Maya et avec le reportage ; exemples vus en classe ; vocabulaire : in the foreground, it seems that, whereas, echo chamber, screen time. Dans l'entretien, réponses développées avec because et un exemple.`,
      grille: [{"c":"Compréhension de l'oral : situation, faits, réserve, proposition, point de vue","pts":5},{"c":"Compréhension de l'écrit : personnage, contraste justifié par des citations, implicite de la fin","pts":5},{"c":"Expression écrite : tâche réalisée, cohérence, correction et richesse de la langue","pts":5},{"c":"Expression orale : prise de parole organisée, interaction, intelligibilité","pts":5}],
    },
  ],
};
