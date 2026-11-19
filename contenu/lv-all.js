// Allemand, langue vivante A ou B (enseignement commun), toutes voies. Sources : voir matiere.sources.
// Programme : nouveaux programmes de langues vivantes du lycée (BO n° 22 du 29 mai 2025), en vigueur en terminale à la rentrée 2026, donc pour le bac 2027 :
// six axes en terminale (Espace privé et espace public ; Territoire et mémoire ; Fictions et réalités ; Enjeux et formes de la communication ; Citoyenneté et mondes virtuels ; Deutsch, Sprache der Dichter, Denker und Künstler), objets d'étude d'après le document Eduscol « Repères culturels » de 2025.
// Les huit axes de 2019 ne sont plus ceux de la terminale : le chapitre 8 révise les axes de première. Niveaux visés en fin de terminale : B2 en LVA, B1 en LVB.
// Évaluation : contrôle continu (moyennes de première et de terminale) ; format des évaluations : note de service du 28 juillet 2021, version consolidée de juin 2025.
export default {
  matiere: {
    id: "lv-all",
    nom: "Allemand (langue vivante A ou B)",
    voie: "tous",
    epreuve: {"type":"controle continu","coef":6,"quand":"en première et en terminale","note":"Pas d’épreuve finale pour les élèves scolarisés : la note de LVA et celle de LVB viennent des moyennes annuelles de première et de terminale (coefficient 6 pour chaque langue sur les deux années). Les évaluations portent sur les quatre activités : compréhension de l’oral, compréhension de l’écrit, expression écrite, expression orale. Niveaux visés en fin de terminale : B2 en langue A, B1 en langue B. Modèle officiel d’évaluation de terminale : un écrit d’1 h 30 (compréhension d’un document audio ou vidéo écouté trois fois et d’un ou deux textes, puis expression écrite) et un oral de 10 minutes après 10 minutes de préparation ; compréhension et expression comptent à parts égales. Une attestation de langues indique le niveau atteint."},
    sources: [
      "https://www.education.gouv.fr/bo/2025/Hebdo22/MENE2504621A",
      "https://eduscol.education.fr/document/65234/download",
      "https://eduscol.education.fr/document/50429/download",
      "https://eduscol.education.fr/document/61194/download",
      "https://www.education.gouv.fr/bo/2026/Hebdo31/MENE2618128N",
    ],
    chapitres: [
      { id: "lv-all-1", t: "L'allemand au bac : contrôle continu, niveaux et programme", theme: "Le cadre" },
      { id: "lv-all-2", t: "Axe 1 : espace privé et espace public", theme: "Axes de terminale" },
      { id: "lv-all-3", t: "Axe 2 : territoire et mémoire", theme: "Axes de terminale" },
      { id: "lv-all-4", t: "Axe 3 : fictions et réalités", theme: "Axes de terminale" },
      { id: "lv-all-5", t: "Axe 4 : enjeux et formes de la communication", theme: "Axes de terminale" },
      { id: "lv-all-6", t: "Axe 5 : citoyenneté et mondes virtuels", theme: "Axes de terminale" },
      { id: "lv-all-7", t: "Axe 6 : Deutsch, Sprache der Dichter, Denker und Künstler", theme: "Axes de terminale" },
      { id: "lv-all-8", t: "Révision des axes de première", theme: "Axes de première" },
      { id: "lv-all-9", t: "Grammaire : les cas et les déclinaisons", theme: "Langue" },
      { id: "lv-all-10", t: "Grammaire : la place du verbe et les subordonnées", theme: "Langue" },
      { id: "lv-all-11", t: "Grammaire : les temps et les verbes de modalité", theme: "Langue" },
      { id: "lv-all-12", t: "Grammaire : passif, subjonctif, infinitives et relatives", theme: "Langue" },
      { id: "lv-all-13", t: "Connecteurs et expressions pour argumenter", theme: "Langue" },
      { id: "lv-all-14", t: "Méthode : comprendre un document oral ou écrit", theme: "Méthode" },
      { id: "lv-all-15", t: "Méthode : expression écrite et expression orale", theme: "Méthode" },
    ],
  },
  paquets: [
    {
      chapitre: "lv-all-1",
      fiche: `## L'allemand au bac : contrôle continu, niveaux et programme

L'allemand, en **langue vivante A** (LVA) ou **langue vivante B** (LVB), n'a pas d'épreuve finale pour les élèves scolarisés : il compte dans le **contrôle continu**. Chaque langue a un **coefficient 6** sur l'ensemble du cycle terminal, à partir des **moyennes annuelles** de première et de terminale. Toutes les évaluations de l'année comptent donc.

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
  - un ou deux **textes** (2 500 à 4 300 signes en tout), dont on rend compte en français ou en allemand selon la consigne ;
  - un **sujet d'expression écrite** en allemand, lié au thème du dossier.
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
  6. **Deutsch, Sprache der Dichter, Denker und Künstler** (propre à l'allemand : la langue des poètes, des penseurs et des artistes).
- En voie générale, le professeur traite **cinq axes sur six**, dont **obligatoirement l'axe 6** ; en voie technologique, **au moins trois**.
- Chaque axe est étudié à travers des **objets d'étude** (par exemple « Que reste-t-il du Mur de Berlin ? » ou « Le théâtre allemand, théâtre engagé ? »).
- En LVA, la terminale comprend l'étude de **deux œuvres intégrales** (littérature, cinéma ou arts) ; en LVB, une seule.

### L'attestation de langues
- À la fin du lycée, chaque élève reçoit une **attestation** qui indique le **niveau du CECRL** atteint en LVA et en LVB.

### À retenir pour le bac
- Contrôle continu, coefficient 6 par langue ; niveaux visés : B2 en LVA, B1 en LVB.
- Quatre activités (CO, CE, EE, EO) et la médiation ; modèle d'évaluation : écrit d'1 h 30 et oral de 10 minutes.
- Six axes en terminale, dont l'axe 6 obligatoire « Deutsch, Sprache der Dichter, Denker und Künstler ».`,
      cartes: [
        { q: "Comment l'allemand est-il évalué au bac pour un élève scolarisé ?", r: "En contrôle continu, avec les moyennes annuelles de première et de terminale." },
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
        { q: "Combien d'axes compte le programme de terminale ?", r: "Six, dont l'axe 6 « Deutsch, Sprache der Dichter, Denker und Künstler », obligatoire." },
        { q: "Quels sont les six axes de terminale ?", r: "Espace privé et espace public, Territoire et mémoire, Fictions et réalités, Enjeux et formes de la communication, Citoyenneté et mondes virtuels, Deutsch, Sprache der Dichter, Denker und Künstler." },
        { q: "Qu'est-ce que l'attestation de langues ?", r: "Un document remis en fin de lycée qui indique le niveau du CECRL atteint dans chaque langue." },
      ],
      quiz: [
        { q: "Quel niveau du CECRL vise-t-on en fin de terminale en LVA ?", choix: ["A2","B1","C2","B2"], bonne: 3, expl: "B1 en LVB.", niv: 1 },
        { q: "Combien de fois le document audio est-il écouté dans l'évaluation de terminale ?", choix: ["Une seule fois","Trois fois","Deux fois","Cinq fois"], bonne: 1, expl: "Une minute entre chaque écoute.", niv: 1 },
        { q: "Quel axe est propre à l'allemand en terminale ?", choix: ["Deutsch, Sprache der Dichter, Denker und Künstler","Art et pouvoir","Identités et échanges","Diversité et inclusion dans les pays de langue allemande"], bonne: 0, expl: "Axe 6 obligatoire.", niv: 1 },
        { q: "Combien dure l'écrit du modèle officiel de terminale ?", choix: ["30 minutes","1 h 30","45 minutes","1 heure"], bonne: 1, expl: "Hors temps d'écoute.", niv: 1 },
        { q: "Dans quelle langue rend-on compte du document oral ?", choix: ["En allemand","En français","Au choix du candidat","Dans une troisième langue"], bonne: 1, expl: "Selon le modèle officiel.", niv: 2 },
        { q: "Combien d'axes le professeur traite-t-il au moins en voie générale ?", choix: ["Cinq sur six","Deux sur six","Trois sur six","Quatre sur six"], bonne: 0, expl: "Dont l'axe 6.", niv: 2 },
        { q: "Que doit faire le candidat pendant les 5 minutes de prise de parole ?", choix: ["Lire à voix haute les deux documents proposés par l'examinateur","Résumer en français un texte étudié en classe","Réciter une leçon de grammaire","Expliquer quel document illustre le mieux l'axe et pourquoi"], bonne: 3, expl: "Choix argumenté.", niv: 2 },
        { q: "Quelle compétence distingue surtout le niveau B2 du niveau B1 ?", choix: ["Distinguer faits et opinions dans un document complexe","Comprendre un message très simple, lent et bien articulé","Se présenter avec quelques phrases courtes et simples","Épeler son nom et son prénom sans erreur"], bonne: 0, expl: "Niveau indépendant avancé.", niv: 2 },
        { q: "Qu'est-ce que la médiation en langue vivante ?", choix: ["Régler un conflit entre deux élèves de la classe","Traduire mot à mot un texte entier","Rendre accessible à autrui un document ou une référence","Corriger les fautes d'orthographe d'un camarade de classe"], bonne: 2, expl: "Nouveau programme.", niv: 2 },
        { q: "Pourquoi toutes les évaluations de l'année comptent-elles ?", choix: ["Le professeur garde la meilleure note de l'année","Seul le dernier devoir est retenu","Elles remplacent l'épreuve de français","La note du bac vient des moyennes annuelles"], bonne: 3, expl: "Contrôle continu.", niv: 3 },
        { q: "En voie technologique, qu'est-ce qui peut remplacer l'oral de terminale ?", choix: ["Un second écrit d'une heure","L'ETLV, présentation d'un projet en langue vivante","Un dossier écrit envoyé par courrier au rectorat","Une évaluation de grammaire"], bonne: 1, expl: "Enseignement technologique en langue vivante.", niv: 3 },
        { q: "Comment compte la compréhension dans la note de l'évaluation de terminale ?", choix: ["Pour un quart de la note","Pour les trois quarts de la note","À parts égales avec l'expression","Elle ne compte pas"], bonne: 2, expl: "Moitié-moitié.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-all-2",
      fiche: `## Axe 1 : espace privé et espace public

Où s'arrête la **vie privée** (**das Privatleben**, **die Privatsphäre**) et où commence l'**espace public** (**die Öffentlichkeit**) ? Dans les pays de langue allemande, la frontière a beaucoup bougé avec l'**histoire** (deux dictatures et leurs régimes de **surveillance**), l'**émancipation des femmes** et les **réseaux sociaux**.

### Kinder, Küche, Kirche… Karriere ? La place des femmes
- **KKK** (**Kinder, Küche, Kirche** : les enfants, la cuisine, l'église) a longtemps résumé le rôle attendu des femmes.
- Les femmes ont obtenu le **droit de vote** en Allemagne en **1918**. La **Loi fondamentale** (**das Grundgesetz**) de **1949** proclame l'égalité entre hommes et femmes.
- Figures de réussite : **Angela Merkel**, chancelière de **2005 à 2021**, et **Ursula von der Leyen**, présidente de la Commission européenne depuis **2019**.
- Défis actuels : l'**écart de salaire** (**der Gender Pay Gap**), le **plafond de verre** (**die gläserne Decke**), les **quotas** (**die Frauenquote**) et l'insulte de **Rabenmutter** (« mère corbeau ») visant les mères qui travaillent.
- Vocabulaire : **die Gleichberechtigung** (l'égalité des droits), **die Kinderbetreuung** (la garde des enfants), **die Teilzeit** (le temps partiel).

### Datenschutz : la protection des données, un enjeu très allemand
- Après le **nazisme** (**1933-1945**) et la **RDA** (**1949-1990**), la société allemande est très attachée aux **libertés individuelles**.
- La **Stasi** (**das Ministerium für Staatssicherheit**), police politique de la RDA, espionnait des millions de personnes grâce à des **informateurs** (**inoffizielle Mitarbeiter**). Ses **dossiers** (**die Akten**) peuvent être consultés depuis **1992**.
- Le film **Das Leben der Anderen** (**La Vie des autres**, 2006, Oscar 2007) montre un officier de la Stasi qui espionne un écrivain puis le protège.
- En **1983**, la Cour constitutionnelle reconnaît le **droit de chacun à décider de l'usage de ses données** (**informationelle Selbstbestimmung**).
- Débats : **Freiheit oder Sicherheit?** (liberté ou sécurité ?), le scandale de la **NSA** (2013), le refus de **Google Street View** par de nombreux habitants (2010).
- Vocabulaire : **der Datenschutz** (la protection des données), **überwachen** (surveiller), **die Überwachung**, **die Daten** (les données), **die Kamera**.

### La jeunesse sous les dictatures
- Les **Jeunesses hitlériennes** (**die Hitlerjugend**) puis, en RDA, la **FDJ** (**Freie Deutsche Jugend**) ont servi à **endoctriner** la jeunesse et à envahir le temps libre et la vie privée.

### Les Églises dans la vie publique
- La **Réforme** lancée par **Martin Luther** en **1517** a fait coexister catholiques et protestants.
- Séparées de l'État, les Églises sont financées par un **impôt d'Église** (**die Kirchensteuer**) et jouent un rôle social (**Caritas**, **Diakonie**).
- En **1989**, les **manifestations du lundi** (**Montagsdemonstrationen**) partent de l'église Saint-Nicolas de **Leipzig**.

### À retenir pour le bac
- KKK, Gleichberechtigung, Gender Pay Gap, gläserne Decke ; Merkel (2005-2021) et von der Leyen.
- Datenschutz, Stasi, Das Leben der Anderen, informationelle Selbstbestimmung (1983), Freiheit oder Sicherheit.
- Endoctrinement de la jeunesse (Hitlerjugend, FDJ) ; Luther 1517, Kirchensteuer, Montagsdemonstrationen.`,
      cartes: [
        { q: "Que signifie KKK ?", r: "Kinder, Küche, Kirche : les enfants, la cuisine, l'église, rôle traditionnel attendu des femmes." },
        { q: "Que signifie die Gleichberechtigung ?", r: "L'égalité des droits." },
        { q: "Que désigne die gläserne Decke ?", r: "Le plafond de verre, qui bloque l'accès des femmes aux postes de direction." },
        { q: "Qu'est-ce qu'une Rabenmutter ?", r: "Une « mère corbeau » : insulte visant une mère qui travaille et confierait trop ses enfants." },
        { q: "Quand Angela Merkel a-t-elle été chancelière ?", r: "De 2005 à 2021." },
        { q: "Que signifie der Datenschutz ?", r: "La protection des données." },
        { q: "Qu'était la Stasi ?", r: "Le ministère de la Sécurité d'État, police politique de la RDA." },
        { q: "De quoi parle Das Leben der Anderen ?", r: "D'un officier de la Stasi qui espionne un écrivain puis le protège (film de 2006)." },
        { q: "Que signifie überwachen ?", r: "Surveiller." },
        { q: "Qu'a reconnu la Cour constitutionnelle en 1983 ?", r: "Le droit de chacun à décider de l'usage de ses données personnelles." },
        { q: "Que résume la question Freiheit oder Sicherheit?", r: "Le débat entre la liberté et la sécurité face à la surveillance." },
        { q: "Qu'était la FDJ ?", r: "La Freie Deutsche Jugend, organisation de jeunesse de la RDA." },
        { q: "Qu'est-ce que die Kirchensteuer ?", r: "L'impôt d'Église, prélevé par l'État pour les Églises." },
        { q: "D'où sont parties les Montagsdemonstrationen de 1989 ?", r: "De l'église Saint-Nicolas de Leipzig." },
      ],
      quiz: [
        { q: "Que signifie die Privatsphäre ?", choix: ["La vie privée","La place publique","Le premier ministre","La sphère politique"], bonne: 0, expl: "die Öffentlichkeit = l'espace public.", niv: 1 },
        { q: "Que signifie überwachen ?", choix: ["Réveiller","Dépasser","Garder un enfant","Surveiller"], bonne: 3, expl: "die Überwachung = la surveillance.", niv: 1 },
        { q: "Quel mot désigne le plafond de verre ?", choix: ["die gläserne Decke","die Frauenquote","die Teilzeit","die Kinderbetreuung"], bonne: 0, expl: "Obstacle invisible.", niv: 1 },
        { q: "Quelle était la police politique de la RDA ?", choix: ["La Bundeswehr","La Stasi","La Gestapo","Le BND"], bonne: 1, expl: "Ministerium für Staatssicherheit.", niv: 1 },
        { q: "Que montre le film Das Leben der Anderen ?", choix: ["La construction du mur de Berlin pendant l'été 1961","La vie d'une famille sous l'Empire","La carrière d'Angela Merkel","La surveillance d'un écrivain par la Stasi"], bonne: 3, expl: "Oscar 2007.", niv: 2 },
        { q: "Que signifie Rabenmutter ?", choix: ["Une grand-mère qui garde ses petits-enfants chaque mercredi","Une mère de famille nombreuse récompensée","Une mère jugée trop absente car elle travaille","Une femme qui dirige une entreprise"], bonne: 2, expl: "Préjugé.", niv: 2 },
        { q: "Pourquoi les Allemands sont-ils très attachés à la protection des données ?", choix: ["Ils ont connu la surveillance de deux dictatures","Internet y est arrivé beaucoup plus tard que dans les pays voisins","La loi y interdit les réseaux sociaux","Les données y coûtent plus cher"], bonne: 0, expl: "Nazisme et RDA.", niv: 2 },
        { q: "Que signifie die Gleichberechtigung ?", choix: ["La justice des tribunaux","L'égalité des droits","Le droit de vote","L'équilibre du budget"], bonne: 1, expl: "Gleich = égal.", niv: 2 },
        { q: "Qui a lancé la Réforme en 1517 ?", choix: ["Martin Luther King","Martin Luther","Karl Marx","Otto von Bismarck"], bonne: 1, expl: "Thèses de Wittenberg.", niv: 2 },
        { q: "Que résume l'expression Freiheit oder Sicherheit? ?", choix: ["Le nom d'un parti politique","La devise officielle de la RDA dans les années 1970","Un slogan publicitaire","Le dilemme entre liberté et sécurité"], bonne: 3, expl: "Débat sur la surveillance.", niv: 3 },
        { q: "Quel rôle les Églises ont-elles joué en 1989 ?", choix: ["Elles ont fait construire le mur","Elles ont accueilli les manifestations du lundi à Leipzig","Elles ont organisé les élections libres de la RDA en mars 1990","Elles ont fondé la Stasi"], bonne: 1, expl: "Nikolaikirche.", niv: 3 },
        { q: "Pourquoi la Hitlerjugend et la FDJ touchent-elles à la vie privée ?", choix: ["Elles protégeaient les données des familles","Elles payaient les études universitaires des jeunes les plus pauvres","Elles encadraient le temps libre pour endoctriner les jeunes","Elles organisaient les mariages"], bonne: 2, expl: "Mise au pas.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-all-3",
      fiche: `## Axe 2 : territoire et mémoire

Comment un pays vit-il avec un **passé** (**die Vergangenheit**) douloureux ? L'Allemagne a dû affronter la mémoire du **nazisme** et de la **Shoah**, puis celle de la **division** du pays. On parle de **Vergangenheitsbewältigung** (le travail sur le passé) et de **Erinnerungskultur** (la culture du souvenir).

### Le mur de Berlin
- Construit dans la nuit du **13 août 1961** par la **RDA** pour empêcher la fuite de ses habitants vers l'Ouest ; il tombe le **9 novembre 1989**. L'Allemagne est **réunifiée** le **3 octobre 1990** (**der Tag der Deutschen Einheit**, fête nationale).
- Lieux de mémoire : le mémorial de la **Bernauer Straße**, l'**East Side Gallery** (la plus longue portion conservée, couverte de fresques), **Checkpoint Charlie**.
- Récits et films : **Sonnenallee** (1999), **Der Tunnel** (2001), **Der Himmel über Berlin** (Wim Wenders, 1987).
- Vocabulaire : **die Mauer** (le mur), **die Grenze** (la frontière), **fliehen** (fuir), **die Flucht** (la fuite), **die Wende** (le tournant de 1989), **die Wiedervereinigung** (la réunification), **die Ostalgie** (la nostalgie de la RDA).

### Lieux de mémoire de la Seconde Guerre mondiale
- Les anciens **camps de concentration** (**das Konzentrationslager**, KZ), comme **Dachau** ou **Buchenwald**, sont devenus des **mémoriaux** (**die Gedenkstätte**).
- Le **Mémorial aux Juifs assassinés d'Europe** (**das Holocaust-Mahnmal**), inauguré en **2005** près de la porte de Brandebourg, compte **2 711 stèles** de béton.
- Les **Stolpersteine** (« pierres sur lesquelles on trébuche ») de l'artiste **Gunter Demnig** : petites plaques de laiton posées depuis **1992** devant le dernier domicile choisi d'une victime du nazisme. On en compte plus de **100 000** en Europe.
- Le **Kniefall** de **Willy Brandt** : en **1970**, le chancelier s'agenouille devant le monument du **ghetto de Varsovie**.
- Avec la disparition des **derniers témoins** (**die Zeitzeugen**), la mémoire passe par les musées, les archives (**Arolsen Archives**), l'art et internet (le compte **@ichbinsophiescholl**, 2021).

### Un patrimoine embarrassant
- **Prora**, sur l'île de **Rügen** : immense station balnéaire construite par les nazis, devenue des appartements de vacances.
- La tête géante de **Karl Marx** à **Chemnitz** (**der Nischel**), conservée et devenue un symbole de la ville.
- La maison natale d'**Hitler** à **Braunau am Inn** (Autriche), que l'État a décidé de transformer en poste de police.

### Les minorités allemandes en Europe de l'Est
- Après **1945**, des millions d'Allemands sont **expulsés** (**die Vertriebenen**) ; des minorités restent en **Roumanie**, **Pologne**, **Hongrie** ou **République tchèque**. **Klaus Johannis**, issu des Saxons de Transylvanie, est élu président de la Roumanie en **2014**.

### À retenir pour le bac
- Vergangenheitsbewältigung, Erinnerungskultur, Zeitzeugen, Gedenkstätte.
- Mur : 13 août 1961, 9 novembre 1989, réunification le 3 octobre 1990 ; Bernauer Straße, East Side Gallery, Ostalgie.
- Holocaust-Mahnmal (2005), Stolpersteine (Demnig, 1992), Kniefall de Brandt (1970) ; Prora, Nischel ; minorités allemandes à l'Est.`,
      cartes: [
        { q: "Que signifie Vergangenheitsbewältigung ?", r: "Le travail d'un pays pour affronter et assumer son passé." },
        { q: "Que signifie Erinnerungskultur ?", r: "La culture du souvenir, la manière dont une société entretient la mémoire." },
        { q: "Quand le mur de Berlin a-t-il été construit ?", r: "Dans la nuit du 13 août 1961." },
        { q: "Quand le mur de Berlin est-il tombé ?", r: "Le 9 novembre 1989." },
        { q: "Quel jour célèbre-t-on le Tag der Deutschen Einheit ?", r: "Le 3 octobre, jour de la réunification de 1990." },
        { q: "Que signifie die Wende ?", r: "Le tournant de 1989-1990 en RDA, qui mène à la réunification." },
        { q: "Qu'est-ce que l'Ostalgie ?", r: "La nostalgie de la vie quotidienne en RDA." },
        { q: "Qu'est-ce que l'East Side Gallery ?", r: "La plus longue portion conservée du mur de Berlin, couverte de fresques." },
        { q: "Que sont les Stolpersteine ?", r: "Des plaques de laiton posées devant le domicile de victimes du nazisme, par l'artiste Gunter Demnig." },
        { q: "Quand le Holocaust-Mahnmal a-t-il été inauguré ?", r: "En 2005, à Berlin." },
        { q: "Qu'est-ce que le Kniefall de Willy Brandt ?", r: "Le chancelier s'agenouille en 1970 devant le monument du ghetto de Varsovie." },
        { q: "Que signifie die Zeitzeugen ?", r: "Les témoins d'une époque." },
        { q: "Qu'est-ce que Prora ?", r: "Une immense station balnéaire construite par les nazis sur l'île de Rügen." },
        { q: "Que signifie die Gedenkstätte ?", r: "Le mémorial, le lieu de mémoire." },
      ],
      quiz: [
        { q: "Que signifie die Mauer ?", choix: ["La mer","La mairie","Le marais","Le mur"], bonne: 3, expl: "die Berliner Mauer.", niv: 1 },
        { q: "Quand le mur de Berlin est-il tombé ?", choix: ["Le 9 novembre 1989","Le 13 août 1961","Le 17 juin 1953","Le 8 mai 1945"], bonne: 0, expl: "Mauerfall.", niv: 1 },
        { q: "Que signifie fliehen ?", choix: ["Fuir","Voler dans les airs","Fleurir","Couler"], bonne: 0, expl: "die Flucht = la fuite.", niv: 1 },
        { q: "Qui a créé les Stolpersteine ?", choix: ["Gerhard Richter","Gunter Demnig","Anselm Kiefer","Wim Wenders"], bonne: 1, expl: "Depuis 1992.", niv: 1 },
        { q: "Que signifie Ostalgie ?", choix: ["La douleur des réfugiés de l'Est","La fête de la réunification","La peur de l'Est communiste","La nostalgie de la RDA"], bonne: 3, expl: "Ost + Nostalgie.", niv: 2 },
        { q: "Que célèbre-t-on le 3 octobre en Allemagne ?", choix: ["La chute du mur","La fin de la guerre","La réunification","La Loi fondamentale"], bonne: 2, expl: "Tag der Deutschen Einheit, 1990.", niv: 2 },
        { q: "Où Willy Brandt s'est-il agenouillé en 1970 ?", choix: ["Devant le mur de Berlin","Devant le monument du ghetto de Varsovie","Dans l'ancien camp de concentration de Dachau, près de Munich","Au Bundestag à Bonn"], bonne: 1, expl: "Kniefall.", niv: 2 },
        { q: "Qu'est-ce que la Bernauer Straße aujourd'hui ?", choix: ["Une galerie d'art moderne","Le siège du gouvernement","Un mémorial du mur de Berlin","Un ancien camp de concentration"], bonne: 2, expl: "Gedenkstätte Berliner Mauer.", niv: 2 },
        { q: "Que signifie Vergangenheitsbewältigung ?", choix: ["Le travail pour affronter son passé","L'oubli volontaire du passé","La reconstruction des villes","L'étude de l'histoire ancienne de la Germanie romaine"], bonne: 0, expl: "Bewältigen = surmonter.", niv: 2 },
        { q: "Pourquoi les Stolpersteine sont-ils posés dans le trottoir ?", choix: ["Pour remplacer les pavés abîmés","Pour que le passant « trébuche » sur la mémoire au quotidien","Pour indiquer le chemin des musées","Pour signaler les anciennes frontières entre les deux Allemagnes"], bonne: 1, expl: "Mémoire décentralisée.", niv: 3 },
        { q: "Pourquoi la disparition des Zeitzeugen pose-t-elle un problème ?", choix: ["Les archives deviennent secrètes","Les musées doivent fermer","Les témoins disparaissent : la mémoire doit passer autrement","Les commémorations officielles sont interdites par la loi"], bonne: 2, expl: "Fin de la mémoire vivante.", niv: 3 },
        { q: "Que montre la transformation de Prora en lieu de vacances ?", choix: ["Les nazis construisaient des hôtels de luxe pour l'étranger","Le passé nazi est effacé des cartes","Un patrimoine embarrassant peut être réinventé","L'île de Rügen appartient à la Pologne"], bonne: 2, expl: "Débat sur le patrimoine.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-all-4",
      fiche: `## Axe 3 : fictions et réalités

Les pays de langue allemande ont forgé des **mythes** (**der Mythos**) et des **héros** (**der Held**), réels ou imaginaires. La **fiction** (**die Fiktion**, **der Roman**, **der Film**) peut célébrer, déformer ou éclairer la **réalité** (**die Wirklichkeit**) et l'**histoire** (**die Geschichte**, qui veut aussi dire « l'histoire » racontée).

### Les mythes anciens
- **Arminius** (**Hermann**) bat les légions romaines en l'an **9** dans la forêt de **Teutoburg**.
- **Frédéric Barberousse** (**Barbarossa**), empereur du XIIe siècle : selon la légende, il dort sous la montagne du **Kyffhäuser** et reviendra sauver l'Allemagne.
- **Siegfried**, héros de la **Chanson des Nibelungen** (**das Nibelungenlied**), tue un dragon. Richard **Wagner** en a tiré un cycle d'opéras, **Der Ring des Nibelungen**.

### Les « miracles » de l'après-guerre
- Le **miracle économique** (**das Wirtschaftswunder**) des années 1950 en RFA, associé au ministre **Ludwig Erhard** et à l'**économie sociale de marché** (**die soziale Marktwirtschaft**). Erhard lui-même refusait le mot « miracle » : la croissance venait du **travail** et de choix politiques.
- Le **miracle de Berne** (**das Wunder von Bern**) : l'Allemagne de l'Ouest gagne la **Coupe du monde de football** en **1954**, ce qui symbolise son retour parmi les nations (film de Sönke Wortmann, 2003).

### 1989, nouveau récit fondateur
- La **révolution pacifique** (**die friedliche Revolution**) : manifestations du lundi, slogan **Wir sind das Volk!** (Nous sommes le peuple), chute du mur.
- **Good Bye, Lenin!** (Wolfgang Becker, **2003**) : un jeune homme fait croire à sa mère, sortie du coma, que la RDA existe encore. Le film mêle humour, **Ostalgie** et réflexion sur le mensonge.
- Romans : **Am kürzeren Ende der Sonnenallee** (Thomas Brussig, 1999), **Kairos** (Jenny Erpenbeck, 2021).

### Héros de la résistance et héros fabriqués
- **Sophie Scholl** et son frère **Hans**, membres de la **Rose blanche** (**die Weiße Rose**), distribuent des tracts contre Hitler à Munich ; ils sont **exécutés** le **22 février 1943**.
- **Georg Elser** tente de tuer Hitler à Munich en **1939** ; **Claus von Stauffenberg** pose une bombe le **20 juillet 1944**.
- À l'inverse, les dictatures **fabriquent** des héros pour la **propagande** : **Hitlerjunge Quex** (film nazi de 1933), ou en RDA le cosmonaute **Sigmund Jähn** (premier Allemand dans l'espace, **1978**).

### Le roman historique
- La littérature **réécrit** l'histoire : **Tyll** (Daniel **Kehlmann**, 2017) pendant la guerre de Trente Ans ; **Der Turm** (Uwe Tellkamp, 2008) sur la fin de la RDA.

### Expressions utiles
- **Es war einmal…** (Il était une fois), **erfinden** (inventer), **erzählen** (raconter), **die Erzählung** (le récit), **wahr** (vrai), **der Widerstand** (la résistance).

### À retenir pour le bac
- Mythes anciens : Arminius, Barbarossa, Siegfried et les Nibelungen.
- Wirtschaftswunder (Erhard) et Wunder von Bern (1954) ; friedliche Revolution, Wir sind das Volk!, Good Bye, Lenin! (2003).
- Widerstand : Weiße Rose (Sophie Scholl, 1943), Elser, Stauffenberg (20 juillet 1944) ; héros de propagande.`,
      cartes: [
        { q: "Que signifie die Wirklichkeit ?", r: "La réalité." },
        { q: "Pourquoi die Geschichte a-t-il deux sens ?", r: "Il signifie à la fois l'Histoire et une histoire racontée." },
        { q: "Qui est Arminius ?", r: "Le chef germain qui bat les légions romaines en l'an 9 dans la forêt de Teutoburg." },
        { q: "Que dit la légende de Barbarossa ?", r: "L'empereur dort sous le Kyffhäuser et reviendra sauver l'Allemagne." },
        { q: "Qui est Siegfried ?", r: "Le héros de la Chanson des Nibelungen, vainqueur d'un dragon." },
        { q: "Qu'est-ce que le Wirtschaftswunder ?", r: "Le miracle économique ouest-allemand des années 1950." },
        { q: "Quel ministre est associé au Wirtschaftswunder ?", r: "Ludwig Erhard." },
        { q: "Qu'est-ce que le Wunder von Bern ?", r: "La victoire de la RFA à la Coupe du monde de football de 1954." },
        { q: "Que signifie Wir sind das Volk! ?", r: "Nous sommes le peuple : slogan des manifestations de 1989 en RDA." },
        { q: "De quoi parle Good Bye, Lenin! ?", r: "Un fils fait croire à sa mère, sortie du coma, que la RDA existe encore." },
        { q: "Qu'était die Weiße Rose ?", r: "La Rose blanche, groupe d'étudiants résistants de Munich (Hans et Sophie Scholl)." },
        { q: "Que s'est-il passé le 20 juillet 1944 ?", r: "L'attentat manqué de Claus von Stauffenberg contre Hitler." },
        { q: "Qui est Sigmund Jähn ?", r: "Le premier Allemand dans l'espace (1978), héros mis en avant par la RDA." },
        { q: "Que signifie der Widerstand ?", r: "La résistance." },
      ],
      quiz: [
        { q: "Que signifie der Held ?", choix: ["Le champ","Le héros","La santé","Le soldat"], bonne: 1, expl: "die Heldin = l'héroïne.", niv: 1 },
        { q: "Que signifie erfinden ?", choix: ["Trouver","Finir","Inventer","Raconter"], bonne: 2, expl: "die Erfindung = l'invention.", niv: 1 },
        { q: "Quel groupe de résistants Sophie Scholl a-t-elle rejoint ?", choix: ["La Main rouge","Le Cercle de Kreisau","Les Edelweiss","La Rose blanche"], bonne: 3, expl: "die Weiße Rose.", niv: 1 },
        { q: "En quelle année la RFA gagne-t-elle la Coupe du monde à Berne ?", choix: ["1974","1990","2014","1954"], bonne: 3, expl: "Das Wunder von Bern.", niv: 1 },
        { q: "Que raconte Good Bye, Lenin! ?", choix: ["Un fils cache à sa mère la fin de la RDA","Un espion de la Stasi passe à l'Ouest avec sa famille","Un soldat raconte la guerre de 1914","Une famille fuit par un tunnel"], bonne: 0, expl: "Film de 2003.", niv: 2 },
        { q: "Que dit la légende de Barbarossa ?", choix: ["L'empereur dort sous une montagne et reviendra","L'empereur a vaincu les légions romaines en l'an 9","L'empereur a tué un dragon dans le Rhin","L'empereur a fondé la ville de Berlin"], bonne: 0, expl: "Kyffhäuser.", niv: 2 },
        { q: "Que scandaient les manifestants de 1989 en RDA ?", choix: ["Wir schaffen das!","Ich bin ein Berliner!","Nie wieder Krieg!","Wir sind das Volk!"], bonne: 3, expl: "Révolution pacifique.", niv: 2 },
        { q: "Pourquoi Ludwig Erhard refusait-il le mot « miracle » ?", choix: ["Il pensait que la RFA restait un pays pauvre et ruiné","Il préférait parler de catastrophe","Il voyait dans la croissance le fruit du travail","Il était ministre en RDA"], bonne: 2, expl: "Soziale Marktwirtschaft.", niv: 2 },
        { q: "Qu'a tenté Claus von Stauffenberg le 20 juillet 1944 ?", choix: ["Une fuite vers la Suisse","Un coup d'État en RDA","Un attentat contre Hitler","Une grève générale"], bonne: 2, expl: "Opération Walkyrie.", niv: 2 },
        { q: "Pourquoi les dictatures fabriquent-elles des héros ?", choix: ["Pour récompenser les opposants les plus courageux du régime","Pour incarner leurs valeurs et gagner l'adhésion des masses","Pour encourager la liberté de la presse","Pour remplacer les élections"], bonne: 1, expl: "Propagande.", niv: 3 },
        { q: "Que suggère l'expression « nouveau mythe fondateur » pour 1989 ?", choix: ["1989 devient un récit qui fonde l'Allemagne unie","La chute du mur est une légende inventée par les journalistes","L'Allemagne de 1989 refuse son histoire","La RDA a été fondée en 1989"], bonne: 0, expl: "Récit national.", niv: 3 },
        { q: "Quel est l'intérêt d'un roman historique comme Tyll ?", choix: ["Remplacer les manuels d'histoire officiels","Raconter des événements de l'année en cours","Relire le présent à travers une époque passée","Donner les dates exactes de chaque bataille"], bonne: 2, expl: "Fiction et histoire.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-all-5",
      fiche: `## Axe 4 : enjeux et formes de la communication

Humour, discours, photographies, presse, publicité : le monde germanophone utilise des codes de **communication** (**die Kommunikation**) pour **informer** (**informieren**), **convaincre** (**überzeugen**), **émouvoir** ou faire **réfléchir** (**nachdenken**). Ces codes sont en partie universels, mais marqués par la langue et l'histoire.

### Un humour germanophone ?
- Les Allemands ont la réputation de manquer d'humour, mais la **satire** (**die Satire**) et la **caricature** (**die Karikatur**) y sont anciennes.
- **Kurt Tucholsky** (années 1920) : « Was darf Satire? Alles. » (Que peut se permettre la satire ? Tout.)
- **Karl Valentin** (comique munichois), **Loriot** (sketches télévisés des années 1970), les **blagues de RDA** (**DDR-Witze**) qui se moquaient du régime, l'émission satirique **heute-show**.
- Proverbe : **Humor ist der Regenschirm der Weisen** (l'humour est le parapluie des sages, Erich Kästner).

### L'allemand, langue de slogans
- La langue allemande permet des **mots composés** (**zusammengesetzte Wörter**) très courts et efficaces : **Das Auto** (Volkswagen), **Vorsprung durch Technik** (Audi), **Haribo macht Kinder froh**, **Quadratisch. Praktisch. Gut.** (Ritter Sport).
- Vocabulaire : **die Werbung** (la publicité), **der Werbespruch** ou **der Slogan**, **die Zielgruppe** (le public visé), **kaufen** (acheter).

### Discours et images qui ont marqué l'histoire
- **Ich bin ein Berliner** : **John F. Kennedy** à Berlin-Ouest, le **26 juin 1963**, en soutien à la ville encerclée.
- **Blühende Landschaften** (des paysages florissants) : **Helmut Kohl** en **1990** promet la prospérité à l'Est réunifié ; la formule est devenue ironique quand le chômage a explosé.
- **Wir schaffen das** (Nous y arriverons) : **Angela Merkel**, le **31 août 2015**, au moment de l'arrivée de centaines de milliers de réfugiés.
- La photo du soldat est-allemand **Conrad Schumann** sautant par-dessus les barbelés le **15 août 1961**.
- Procédés : **die Wiederholung** (la répétition), **die Metapher**, **das Schlagwort** (la formule choc).

### Les médias, quatrième pouvoir
- **Die vierte Gewalt** : depuis 1945, la presse est vue comme un contre-pouvoir. Titres : **Die Zeit**, la **FAZ**, **Der Spiegel**, le journal populaire **Bild** ; journal télévisé **Tagesschau** (ARD, depuis **1952**).
- L'extrême droite accuse les médias d'être une **Lügenpresse** (« presse menteuse »), un mot déjà employé par la propagande nazie.
- **Die Pressefreiheit** (la liberté de la presse) est garantie par l'**article 5** de la Loi fondamentale.

### Expressions utiles
- **Der Redner** (l'orateur), **die Rede** (le discours), **eine Rede halten** (prononcer un discours), **die Nachrichten** (les informations), **die Schlagzeile** (le gros titre).

### À retenir pour le bac
- Satire et Karikatur ; Tucholsky, Loriot, DDR-Witze.
- Slogans et mots composés ; Werbung, Zielgruppe.
- Kennedy 1963, Kohl 1990, Merkel 2015 ; die vierte Gewalt, Lügenpresse, Pressefreiheit (article 5).`,
      cartes: [
        { q: "Que signifie überzeugen ?", r: "Convaincre." },
        { q: "Que répond Tucholsky à « Was darf Satire? » ?", r: "Alles : tout." },
        { q: "Que sont les DDR-Witze ?", r: "Les blagues qui se moquaient du régime de la RDA." },
        { q: "Quel slogan est associé à Haribo ?", r: "Haribo macht Kinder froh." },
        { q: "Que signifie die Werbung ?", r: "La publicité." },
        { q: "Que signifie die Zielgruppe ?", r: "Le public visé, la cible." },
        { q: "Qui a dit Ich bin ein Berliner et quand ?", r: "John F. Kennedy, à Berlin-Ouest, le 26 juin 1963." },
        { q: "Que promettait Helmut Kohl avec blühende Landschaften ?", r: "La prospérité aux régions de l'Est réunifié (1990)." },
        { q: "Dans quel contexte Angela Merkel dit-elle Wir schaffen das ?", r: "En 2015, lors de l'arrivée de nombreux réfugiés." },
        { q: "Que montre la photo de Conrad Schumann ?", r: "Un soldat est-allemand qui saute les barbelés vers l'Ouest en 1961." },
        { q: "Que signifie die vierte Gewalt ?", r: "Le quatrième pouvoir : les médias." },
        { q: "Que signifie Lügenpresse ?", r: "« Presse menteuse », accusation employée par les nazis puis par l'extrême droite." },
        { q: "Que signifie die Schlagzeile ?", r: "Le gros titre d'un journal." },
        { q: "Que signifie eine Rede halten ?", r: "Prononcer un discours." },
      ],
      quiz: [
        { q: "Que signifie die Werbung ?", choix: ["La marchandise","L'avertissement","Le bavardage","La publicité"], bonne: 3, expl: "werben = faire de la publicité.", niv: 1 },
        { q: "Que signifie die Rede ?", choix: ["Le récit d'un rêve","Le discours","La rédaction d'un journal","Le rideau"], bonne: 1, expl: "eine Rede halten.", niv: 1 },
        { q: "Qui a prononcé « Ich bin ein Berliner » ?", choix: ["Ronald Reagan","John F. Kennedy","Willy Brandt","Helmut Kohl"], bonne: 1, expl: "26 juin 1963.", niv: 1 },
        { q: "Que signifie die Schlagzeile ?", choix: ["La ligne de frappe","La bagarre","Le gros titre","Le slogan d'un parti"], bonne: 2, expl: "Presse.", niv: 1 },
        { q: "Quelle formule d'Angela Merkel date de 2015 ?", choix: ["Wir schaffen das","Wir sind das Volk","Blühende Landschaften","Mehr Demokratie wagen"], bonne: 0, expl: "Crise des réfugiés.", niv: 2 },
        { q: "Pourquoi blühende Landschaften est-il devenu ironique ?", choix: ["Les paysages de l'Est ont été détruits par la guerre","Kohl parlait de jardins publics","Le chômage a fortement augmenté à l'Est après 1990","La formule venait de la RDA"], bonne: 2, expl: "Promesse déçue.", niv: 2 },
        { q: "Que signifie Lügenpresse ?", choix: ["Presse libre","Presse locale","Presse menteuse","Presse à scandale"], bonne: 2, expl: "Mot de propagande.", niv: 2 },
        { q: "Pourquoi l'allemand se prête-t-il bien aux slogans ?", choix: ["Il ne possède pas de verbes conjugués dans les phrases courtes","Ses mots composés condensent une idée en peu de mots","Les phrases y commencent par le verbe","Il n'a que des mots très courts"], bonne: 1, expl: "Langue synthétique.", niv: 2 },
        { q: "Quel article de la Loi fondamentale garantit la liberté de la presse ?", choix: ["L'article 12","L'article 20","L'article 5","L'article 146"], bonne: 2, expl: "Pressefreiheit.", niv: 2 },
        { q: "Pourquoi les DDR-Witze avaient-ils une fonction politique ?", choix: ["Ils permettaient de critiquer le régime par le rire","Ils étaient écrits par le gouvernement","Ils servaient à apprendre l'allemand aux soldats soviétiques","Ils remplaçaient les journaux télévisés"], bonne: 0, expl: "Humour et censure.", niv: 3 },
        { q: "Pourquoi la photo de Conrad Schumann est-elle devenue célèbre ?", choix: ["Elle montre la chute du mur en 1989","Elle a servi de publicité à l'armée est-allemande pendant des années","Elle résume en une image la fuite vers la liberté","Elle a été prise par la Stasi"], bonne: 2, expl: "Icône de la guerre froide.", niv: 3 },
        { q: "Que sous-entend l'expression die vierte Gewalt ?", choix: ["La presse dépend du gouvernement","Les médias contrôlent les trois autres pouvoirs","La télévision publique est la quatrième chaîne du pays","Les journalistes votent les lois"], bonne: 1, expl: "Contre-pouvoir.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-all-6",
      fiche: `## Axe 5 : citoyenneté et mondes virtuels

Les **réseaux sociaux** (**die sozialen Netzwerke**, **die sozialen Medien**) facilitent l'accès à l'**information**, le **débat** et l'**engagement** (**das Engagement**). Mais ils favorisent aussi le **repli sur soi**, la **défiance** et les **fausses informations** (**die Falschmeldung**, **die Fake News**). L'engagement citoyen, très valorisé en Allemagne, se transforme-t-il en ligne ?

### Les réseaux sociaux, nouvelle arène politique
- Les partis utilisent **TikTok**, **Instagram** ou **YouTube** pour toucher les jeunes ; les plus récents, comme l'**AfD** (extrême droite, fondée en **2013**) ou le **BSW** (2024), s'en sont emparés très tôt.
- Le **Parti pirate** (**die Piratenpartei**, 2006) voulait plus de démocratie numérique et de transparence.
- Le **Wahl-O-Mat** (depuis **2002**) : un outil en ligne de l'Agence fédérale pour l'éducation civique (**bpb**) qui compare ses réponses aux positions des partis avant une élection.
- Le droit de vote est à **18 ans** aux élections fédérales, mais à **16 ans** pour les **élections européennes** depuis **2024** et dans plusieurs **Länder**.

### Le hashtag-activisme
- **Pétitions en ligne**, **mots-dièse** (**der Hashtag**) : **#MeToo**, **#BlackLivesMatter**, **#niewiederistjetzt** (« plus jamais, c'est maintenant », contre l'extrême droite, 2024).
- Le mouvement **Fridays for Future**, très fort en Allemagne depuis **2019**, s'est organisé en ligne.
- Le film **Ich bin Karl** (2021) montre comment un jeune militant d'extrême droite séduit en ligne une étudiante.
- Limites : **slacktivism** (un clic sans action réelle), **bulles de filtres** (**die Filterblase**), **haine en ligne** (**die Hassrede**, **Hate Speech**).

### Peut-on faire confiance aux médias ?
- **L'affaire du Spiegel de 1962** (**die Spiegel-Affäre**) : le magazine révèle les faiblesses de l'armée ; son fondateur **Rudolf Augstein** est emprisonné. Le scandale renforce la **liberté de la presse**.
- Le **Code de la presse** (**der Pressekodex**) existe depuis **1973**.
- **L'affaire Relotius** (**2018**) : le journaliste **Claas Relotius** avait inventé une partie de ses reportages pour le Spiegel. Le magazine révèle lui-même la fraude et renforce la **vérification des faits** (**der Faktencheck**).
- La loi **NetzDG** (**2017**) oblige les grandes plateformes à supprimer rapidement les contenus manifestement illégaux.

### La KI (künstliche Intelligenz)
- Face aux géants américains, l'Allemagne et l'Union européenne veulent développer leurs propres outils (**KI-Strategie**, centre de recherche **DFKI**) et encadrer leurs usages : le règlement européen **AI Act** est adopté en **2024**.

### Expressions utiles
- **teilen** (partager), **posten**, **liken**, **sich engagieren** (s'engager), **wählen** (voter), **die Wahl** (l'élection), **der Bürger** (le citoyen), **die Meinungsfreiheit** (la liberté d'opinion), **überprüfen** (vérifier).

### À retenir pour le bac
- Réseaux sociaux et partis (AfD, Piratenpartei), Wahl-O-Mat ; vote à 16 ans aux européennes depuis 2024.
- Hashtag-activisme, Fridays for Future, Filterblase, Hassrede, NetzDG (2017).
- Spiegel-Affäre (1962), Pressekodex (1973), Relotius (2018), Faktencheck ; AI Act (2024).`,
      cartes: [
        { q: "Que signifie die sozialen Netzwerke ?", r: "Les réseaux sociaux." },
        { q: "Que signifie die Falschmeldung ?", r: "La fausse information." },
        { q: "Qu'est-ce que le Wahl-O-Mat ?", r: "Un outil en ligne qui compare ses opinions aux programmes des partis avant une élection." },
        { q: "À quel âge peut-on voter aux élections européennes en Allemagne depuis 2024 ?", r: "À 16 ans." },
        { q: "Que voulait la Piratenpartei ?", r: "Plus de démocratie numérique et de transparence." },
        { q: "Que signifie die Filterblase ?", r: "La bulle de filtres, qui enferme dans des contenus proches de ses opinions." },
        { q: "Que signifie die Hassrede ?", r: "Le discours de haine." },
        { q: "Qu'est-ce que #niewiederistjetzt ?", r: "Un mot-dièse contre l'extrême droite (2024) : « plus jamais, c'est maintenant »." },
        { q: "Qu'a révélé la Spiegel-Affäre de 1962 ?", r: "L'arrestation du fondateur du Spiegel a montré l'importance de la liberté de la presse." },
        { q: "Qu'est-ce que l'affaire Relotius ?", r: "En 2018, un journaliste du Spiegel avait inventé une partie de ses reportages." },
        { q: "Que signifie der Faktencheck ?", r: "La vérification des faits." },
        { q: "Que prévoit la loi NetzDG de 2017 ?", r: "Les grandes plateformes doivent supprimer vite les contenus manifestement illégaux." },
        { q: "Que signifie sich engagieren ?", r: "S'engager." },
        { q: "Que signifie die Meinungsfreiheit ?", r: "La liberté d'opinion." },
      ],
      quiz: [
        { q: "Que signifie teilen ?", choix: ["Tailler","Téléphoner","Télécharger","Partager"], bonne: 3, expl: "Un post teilen.", niv: 1 },
        { q: "Que signifie wählen ?", choix: ["Vouloir","Voyager","Marcher","Voter, choisir"], bonne: 3, expl: "die Wahl = l'élection.", niv: 1 },
        { q: "Que signifie der Bürger ?", choix: ["Le bourgmestre","Le citoyen","Le boulanger","Le château fort"], bonne: 1, expl: "die Bürgerin.", niv: 1 },
        { q: "Quel magazine est au cœur de l'affaire Relotius ?", choix: ["Der Spiegel","Die Zeit","Bild","Stern"], bonne: 0, expl: "2018.", niv: 1 },
        { q: "Que signifie die Filterblase ?", choix: ["Le filtre à café","La bulle financière","La bulle de filtres","Le pare-feu"], bonne: 2, expl: "Algorithmes.", niv: 2 },
        { q: "À quoi sert le Wahl-O-Mat ?", choix: ["Comparer ses opinions aux positions des partis","Voter par internet aux élections fédérales et européennes","Compter les voix le soir du vote","Signaler les fausses informations"], bonne: 0, expl: "bpb, depuis 2002.", niv: 2 },
        { q: "Que signifie die Hassrede ?", choix: ["Le discours de haine","Le discours d'adieu","La parole libre","Le débat télévisé"], bonne: 0, expl: "Hate Speech.", niv: 2 },
        { q: "Pourquoi l'affaire du Spiegel de 1962 est-elle un moment clé ?", choix: ["Elle a fait interdire le magazine","Elle a révélé un faux reportage publié par le magazine","Elle a créé la télévision publique","Elle a renforcé la liberté de la presse face au pouvoir"], bonne: 3, expl: "Rudolf Augstein.", niv: 2 },
        { q: "Que demande la loi NetzDG aux grandes plateformes ?", choix: ["Publier les données de leurs utilisateurs allemands chaque année","Supprimer vite les contenus manifestement illégaux","Fermer pendant les élections","Vérifier l'âge de chaque internaute"], bonne: 1, expl: "2017.", niv: 2 },
        { q: "Qu'est-ce qui limite l'efficacité du hashtag-activisme ?", choix: ["Les hashtags sont interdits en Allemagne depuis la loi de 2017","Les jeunes n'utilisent pas internet","Les clics ne se traduisent pas en actions","Les pétitions coûtent trop cher"], bonne: 2, expl: "Slacktivism.", niv: 3 },
        { q: "Comment le Spiegel a-t-il réagi à l'affaire Relotius ?", choix: ["En niant les faits devant la justice et en attaquant ses critiques","En fermant son site internet","En accusant ses lecteurs","En révélant lui-même la fraude et en renforçant ses vérifications"], bonne: 3, expl: "Transparence.", niv: 3 },
        { q: "Que montre le film Ich bin Karl ?", choix: ["La vie de Karl Marx à Londres au XIXe siècle, racontée par sa fille","Un concours de télé-réalité","La création du Wahl-O-Mat","La séduction de l'extrême droite sur les réseaux"], bonne: 3, expl: "2021.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-all-7",
      fiche: `## Axe 6 : Deutsch, Sprache der Dichter, Denker und Künstler

Cet axe, **obligatoire** en allemand, part d'une formule de l'historien de la littérature **Wolfgang Menzel** (**1836**) : l'Allemagne serait le **Land der Dichter und Denker** (le pays des poètes et des penseurs). La formule, reprise par le tourisme, ne doit pas être comprise de façon exclusive ; elle invite à découvrir le **patrimoine culturel** germanophone, bien au-delà de la littérature.

### Les Lumières (die Aufklärung)
- **Emmanuel Kant**, **Was ist Aufklärung?** (**1784**) : les Lumières sont la sortie de l'homme de sa minorité ; devise **Sapere aude!** (**Habe Mut, dich deines eigenen Verstandes zu bedienen!** : aie le courage de te servir de ta propre raison).
- **Gotthold Ephraim Lessing**, dans sa pièce de **1779** sur un sage juif de Jérusalem : la **parabole des trois anneaux** (**die Ringparabel**) défend la **tolérance** (**die Toleranz**) entre judaïsme, christianisme et islam.
- Ces valeurs (**die Vernunft**, la raison ; **die Toleranz** ; la dignité) fondent la **Loi fondamentale** de **1949** : **Die Würde des Menschen ist unantastbar** (la dignité de l'être humain est intangible, article 1).
- **Goethe** (**Faust**, **Die Leiden des jungen Werthers**, 1774) et **Schiller** (**Die Räuber**, **Ode an die Freude**, mise en musique par **Beethoven**, devenue l'hymne européen) dominent le classicisme de **Weimar**.

### Le romantisme (die Romantik)
- Début du XIXe siècle : la **nostalgie** et le désir d'ailleurs (**die Sehnsucht**), la **nature**, le **rêve**, le Moyen Âge.
- **Die blaue Blume** (la fleur bleue) de **Novalis** symbolise cette quête de l'infini.
- **Joseph von Eichendorff**, **Aus dem Leben eines Taugenichts** (1826) : un jeune vagabond qui suit ses envies.
- Les **frères Grimm** recueillent les **contes** (**die Märchen**, 1812).
- Le peintre **Caspar David Friedrich**, **Der Wanderer über dem Nebelmeer** (**vers 1818**) : un homme vu de dos face à une mer de brouillard.

### Le théâtre engagé
- **Bertolt Brecht** veut un théâtre qui soit un **marteau** pour changer la société : le **théâtre épique** et l'**effet de distanciation** (**der Verfremdungseffekt**) empêchent le spectateur de s'identifier et le poussent à **réfléchir**. **Die Dreigroschenoper** (1928), **Mutter Courage** (1939).
- Environ **150 théâtres publics** avec troupe ; la **Schaubühne** de Thomas **Ostermeier** à Berlin.

### Le cinéma et la danse
- **Expressionnisme** : **Das Cabinet des Dr. Caligari** (Robert Wiene, **1920**), **Nosferatu** (Murnau, 1922), **Metropolis** (Fritz **Lang**, **1927**).
- Réalisateurs plus récents : **Fassbinder**, **Wim Wenders**, **Fatih Akin**, **Maren Ade** ; Oscars du meilleur film étranger pour **Das Leben der Anderen** (2007) et **Im Westen nichts Neues** (Edward Berger, 2023).
- **Pina Bausch** et le **Tanztheater** (danse-théâtre) de **Wuppertal** ; la danse moderne en Allemagne est inscrite au **patrimoine immatériel de l'UNESCO** en **2022**.

### Expressions utiles
- **der Dichter** (le poète), **der Denker** (le penseur), **das Gedicht** (le poème), **das Werk** (l'œuvre), **der Maler** (le peintre), **das Gemälde** (le tableau), **die Bühne** (la scène).

### À retenir pour le bac
- Menzel (1836) : Land der Dichter und Denker.
- Aufklärung : Kant (Sapere aude, 1784), Lessing (Ringparabel, Toleranz) ; Goethe et Schiller à Weimar ; Grundgesetz article 1.
- Romantik : Sehnsucht, blaue Blume, Grimm, Caspar David Friedrich ; Brecht et le Verfremdungseffekt ; Metropolis, Pina Bausch.`,
      cartes: [
        { q: "Que signifie Land der Dichter und Denker ?", r: "Le pays des poètes et des penseurs (formule de Wolfgang Menzel, 1836)." },
        { q: "Quelle est la devise des Lumières selon Kant ?", r: "Sapere aude : aie le courage de te servir de ta propre raison." },
        { q: "Que défend la Ringparabel de Lessing ?", r: "La tolérance entre judaïsme, christianisme et islam." },
        { q: "Que signifie die Vernunft ?", r: "La raison." },
        { q: "Que dit l'article 1 de la Loi fondamentale ?", r: "Die Würde des Menschen ist unantastbar : la dignité humaine est intangible." },
        { q: "Quel poème de Schiller est devenu l'hymne européen ?", r: "L'Ode an die Freude, mise en musique par Beethoven." },
        { q: "Que signifie die Sehnsucht ?", r: "La nostalgie, le désir ardent d'ailleurs." },
        { q: "Que symbolise die blaue Blume ?", r: "La quête romantique de l'infini (Novalis)." },
        { q: "Que représente Der Wanderer über dem Nebelmeer ?", r: "Un homme vu de dos face à une mer de brouillard (Caspar David Friedrich)." },
        { q: "Qu'est-ce que le Verfremdungseffekt ?", r: "L'effet de distanciation de Brecht, qui pousse le spectateur à réfléchir au lieu de s'identifier." },
        { q: "Quel film de Fritz Lang date de 1927 ?", r: "Metropolis." },
        { q: "Qui a créé le Tanztheater de Wuppertal ?", r: "Pina Bausch." },
        { q: "Que signifie das Gedicht ?", r: "Le poème." },
        { q: "Que signifie die Bühne ?", r: "La scène." },
      ],
      quiz: [
        { q: "Que signifie der Dichter ?", choix: ["Le poète","Le penseur","Le chanteur","Le juge"], bonne: 0, expl: "das Gedicht = le poème.", niv: 1 },
        { q: "Qui a écrit Faust ?", choix: ["Kant","Brecht","Novalis","Goethe"], bonne: 3, expl: "Classicisme de Weimar.", niv: 1 },
        { q: "Que signifie das Gemälde ?", choix: ["Le poème","Le tableau","La sculpture","La statue"], bonne: 1, expl: "der Maler = le peintre.", niv: 1 },
        { q: "Quel peintre a réalisé Der Wanderer über dem Nebelmeer ?", choix: ["Albrecht Dürer","Gerhard Richter","Caspar David Friedrich","Max Ernst"], bonne: 2, expl: "Vers 1818.", niv: 1 },
        { q: "Quel sentiment romantique désigne die Sehnsucht ?", choix: ["La peur de la nature","La joie de vivre en ville","Un désir ardent d'ailleurs","Une colère contre les rois"], bonne: 2, expl: "Nostalgie.", niv: 2 },
        { q: "Que défend Lessing dans la parabole des trois anneaux ?", choix: ["La tolérance entre les religions","La supériorité d'une religion","La fin de toute croyance","Le pouvoir absolu du roi"], bonne: 0, expl: "Pièce de 1779.", niv: 2 },
        { q: "Que veut provoquer le Verfremdungseffekt de Brecht ?", choix: ["La réflexion critique du spectateur","L'identification complète du public au héros","La peur dans la salle","Le rire permanent du public"], bonne: 0, expl: "Théâtre épique.", niv: 2 },
        { q: "Quel film expressionniste date de 1920 ?", choix: ["Metropolis","Good Bye, Lenin!","Das Leben der Anderen","Das Cabinet des Dr. Caligari"], bonne: 3, expl: "Robert Wiene.", niv: 2 },
        { q: "Qui a recueilli les contes allemands en 1812 ?", choix: ["Goethe et Schiller","Kant et Lessing","Les frères Grimm","Les frères Mann"], bonne: 2, expl: "Kinder- und Hausmärchen.", niv: 2 },
        { q: "Quel lien existe entre les Lumières et la Loi fondamentale de 1949 ?", choix: ["Elle a été écrite par Kant","Elle interdit la philosophie","Elle place la dignité humaine et la raison au fondement des libertés","Elle reprend mot à mot le texte de la Ringparabel de Lessing"], bonne: 2, expl: "Article 1.", niv: 3 },
        { q: "Pourquoi la formule « Land der Dichter und Denker » est-elle discutée ?", choix: ["Elle a été inventée en 2020 par une agence de tourisme berlinoise","Elle sert au tourisme et ne doit pas faire oublier les autres arts","Elle ne parle que de la musique","Elle désignait l'Autriche"], bonne: 1, expl: "Wolfgang Menzel, 1836.", niv: 3 },
        { q: "Que veut dire Brecht quand il compare le théâtre à un marteau ?", choix: ["Le théâtre doit agir sur la société","Le théâtre doit être bruyant","Les décors doivent être solides","Les acteurs doivent être aussi des ouvriers"], bonne: 0, expl: "Théâtre engagé.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-all-8",
      fiche: `## Révision des axes de première

Les axes de **première** comptent pour la moyenne de première, et leurs exemples restent **réutilisables** en terminale : ils nourrissent l'argumentation et reviennent souvent dans les documents. Voici l'essentiel des six axes, avec les objets d'étude proposés pour l'allemand.

### Axe 1. Identités et échanges
- **Willkommenskultur** (la culture de l'accueil) : en **2015**, l'Allemagne accueille environ **un million** de réfugiés, notamment syriens. Débats sur l'**intégration** (**die Integration**) et l'**immigration** (**die Einwanderung**).
- Avant cela, les **travailleurs invités** (**die Gastarbeiter**) venus d'Italie puis de **Turquie** (accord de **1961**) ont transformé la société.
- Les grands **fleuves** (**der Rhein**, **die Donau**) relient les pays et les cultures ; la **gastronomie** reflète les échanges (le **Döner Kebab** berlinois).

### Axe 2. Diversité et inclusion
- **Inclusion** des personnes en situation de **handicap** (**die Behinderung**) ; **diversité des modes de vie** (**alternativ leben**).
- Le **tissu associatif** (**das Vereinswesen**) : des centaines de milliers d'**associations** (**der Verein**) font vivre la solidarité.
- Droits des minorités sexuelles : le **mariage pour tous** (**die Ehe für alle**) est adopté en **2017**.

### Axe 3. Art et pouvoir
- Sous le nazisme, l'art est mis au service du régime ; l'art moderne est qualifié d'**art dégénéré** (**entartete Kunst**, exposition de **1937**). **Autodafés** du **10 mai 1933** (**die Bücherverbrennung**).
- Des artistes partent en **exil** (**das Exil**) : **Thomas Mann**, **Bertolt Brecht**, **Marlene Dietrich**.
- En RDA, la **censure** (**die Zensur**) frappe des auteurs comme le chanteur **Wolf Biermann**, déchu de sa nationalité en **1976**.

### Axe 4. Innovations scientifiques et responsabilité
- Inventions allemandes : l'**imprimerie** de **Gutenberg** (vers **1450**), l'**automobile** de **Carl Benz** (**1886**), les **rayons X** de **Röntgen** (**1895**).
- **L'automobile**, fleuron de l'industrie, est en crise (scandale du **diesel** de **Volkswagen**, **2015**).
- **Lise Meitner** explique la **fission nucléaire** (1938-1939) sans recevoir le prix Nobel ; **Özlem Türeci** et **Uğur Şahin** fondent **BioNTech**, qui met au point un vaccin contre le Covid-19 en **2020**.
- **Robert Koch** découvre le bacille de la **tuberculose** en **1882**, en rivalité avec **Louis Pasteur**.

### Axe 5. L'être humain et la nature
- **Die Grünen** (les Verts), fondés en **1980**, participent au gouvernement de 1998 à 2005 et de 2021 à 2025.
- La **sortie du nucléaire** (**der Atomausstieg**) : les trois dernières centrales ferment le **15 avril 2023**. La **transition énergétique** se dit **die Energiewende**.
- Les **jardins familiaux** (**der Schrebergarten**), les **parcs nationaux** (**der Nationalpark**) et la **culture du corps libre** (**FKK**).

### Axe 6. L'Allemagne dans le monde
- L'**émigration** allemande vers l'**Amérique** au XIXe siècle (**die Auswanderung**).
- Le **soft power** : les **Goethe-Institute** (depuis **1951**), les voitures, le football.
- Le **colonialisme** : en **Namibie**, le **génocide des Herero et des Nama** (**1904-1908**), reconnu par l'Allemagne en **2021**.

### À retenir pour le bac
- Willkommenskultur (2015), Gastarbeiter (1961), Ehe für alle (2017), Vereinswesen.
- Bücherverbrennung (1933), entartete Kunst, Exil, Biermann (1976) ; Gutenberg, Benz, Röntgen, Meitner, BioNTech.
- Die Grünen (1980), Atomausstieg (2023), Energiewende ; Goethe-Institut, colonialisme en Namibie.`,
      cartes: [
        { q: "Que signifie Willkommenskultur ?", r: "La culture de l'accueil, notamment envers les réfugiés en 2015." },
        { q: "Qui étaient les Gastarbeiter ?", r: "Les travailleurs immigrés recrutés en RFA, par exemple de Turquie à partir de 1961." },
        { q: "Que signifie die Einwanderung ?", r: "L'immigration." },
        { q: "Que signifie der Verein ?", r: "L'association, le club." },
        { q: "Quand le mariage pour tous a-t-il été adopté en Allemagne ?", r: "En 2017 (Ehe für alle)." },
        { q: "Que s'est-il passé le 10 mai 1933 ?", r: "Des autodafés : les nazis brûlent des livres (Bücherverbrennung)." },
        { q: "Que désignait l'expression entartete Kunst ?", r: "L'art moderne, qualifié de « dégénéré » par les nazis." },
        { q: "Pourquoi Wolf Biermann est-il connu ?", r: "Chanteur critique, il est déchu de sa nationalité est-allemande en 1976." },
        { q: "Qu'a inventé Gutenberg vers 1450 ?", r: "L'imprimerie à caractères mobiles." },
        { q: "Qui est Lise Meitner ?", r: "La physicienne qui explique la fission nucléaire sans recevoir le prix Nobel." },
        { q: "Qu'ont créé Özlem Türeci et Uğur Şahin ?", r: "L'entreprise BioNTech, qui met au point un vaccin contre le Covid-19." },
        { q: "Que signifie die Energiewende ?", r: "La transition énergétique." },
        { q: "Quand l'Allemagne a-t-elle fermé ses dernières centrales nucléaires ?", r: "Le 15 avril 2023." },
        { q: "Quel génocide colonial l'Allemagne a-t-elle reconnu en 2021 ?", r: "Celui des Herero et des Nama en Namibie (1904-1908)." },
      ],
      quiz: [
        { q: "Que signifie die Einwanderung ?", choix: ["L'immigration","L'émigration","La randonnée","L'invasion"], bonne: 0, expl: "die Auswanderung = l'émigration.", niv: 1 },
        { q: "Que signifie der Atomausstieg ?", choix: ["La bombe atomique","Une centrale nucléaire","La sortie du nucléaire","Un accident nucléaire"], bonne: 2, expl: "15 avril 2023.", niv: 1 },
        { q: "Qui a inventé l'imprimerie à caractères mobiles ?", choix: ["Benz","Röntgen","Gutenberg","Koch"], bonne: 2, expl: "Vers 1450.", niv: 1 },
        { q: "En quelle année les Verts allemands sont-ils fondés ?", choix: ["1949","1961","1968","1980"], bonne: 3, expl: "die Grünen.", niv: 1 },
        { q: "Que désigne Willkommenskultur en 2015 ?", choix: ["La fête de la réunification","Un festival de musique berlinois qui accueille des artistes du monde","L'accueil d'environ un million de réfugiés","Un programme d'échanges scolaires"], bonne: 2, expl: "Merkel.", niv: 2 },
        { q: "Que s'est-il passé le 10 mai 1933 ?", choix: ["Le mur de Berlin a été construit","Les nazis ont brûlé des livres","Les femmes ont obtenu le vote","La RDA a été fondée"], bonne: 1, expl: "Bücherverbrennung.", niv: 2 },
        { q: "Quel écrivain allemand est parti en exil sous le nazisme ?", choix: ["Johann Wolfgang von Goethe","Thomas Mann","Novalis","Gotthold Ephraim Lessing"], bonne: 1, expl: "Prix Nobel 1929.", niv: 2 },
        { q: "Qu'a révélé le scandale de Volkswagen en 2015 ?", choix: ["Des voitures électriques défectueuses rappelées dans toute l'Europe","Une grève générale des ouvriers","Des tests de pollution truqués sur des moteurs diesel","La vente de l'entreprise à la Chine"], bonne: 2, expl: "Dieselgate.", niv: 2 },
        { q: "Que signifie das Vereinswesen ?", choix: ["Le tissu associatif","La réunification","Le système électoral","L'union européenne"], bonne: 0, expl: "der Verein = l'association.", niv: 2 },
        { q: "Pourquoi Lise Meitner illustre-t-elle les « oubliées de la science » ?", choix: ["Elle a refusé de publier ses travaux","Elle n'a pas reçu le Nobel pour la fission qu'elle avait expliquée","Elle a inventé l'automobile en secret","Elle a quitté la science pour faire de la politique au Bundestag"], bonne: 1, expl: "Nobel attribué à Otto Hahn.", niv: 3 },
        { q: "Que montre la reconnaissance du génocide en Namibie en 2021 ?", choix: ["L'Allemagne ne possédait pas de colonies","La Namibie est devenue un Land allemand rattaché à la Bavière","L'Allemagne regarde aussi son passé colonial","Le colonialisme y est célébré"], bonne: 2, expl: "Herero et Nama.", niv: 3 },
        { q: "Pourquoi réutiliser les exemples de première en terminale ?", choix: ["Ils sont évalués seuls lors d'une épreuve finale écrite en fin de terminale","Ils servent d'exemples pour argumenter et reviennent dans les documents","Ils remplacent l'axe 6 obligatoire","Ils sont inutiles après la première"], bonne: 1, expl: "Culture réutilisable.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-all-9",
      fiche: `## Grammaire : les cas et les déclinaisons

En allemand, la **fonction** d'un groupe nominal dans la phrase se voit à son **cas** (**der Kasus**), marqué surtout sur l'**article** et l'**adjectif**. Bien décliner est indispensable pour être compris et pour atteindre le niveau B1-B2.

### Les quatre cas
- **Nominatif** : le **sujet** et l'attribut. **Der Mann liest.**
- **Accusatif** : le **complément d'objet direct**. **Ich sehe den Mann.**
- **Datif** : le **complément d'objet indirect** (souvent une personne qui reçoit). **Ich gebe dem Mann das Buch.**
- **Génitif** : le **complément du nom** (possession). **Das Auto des Mannes.** À l'oral, on le remplace souvent par **von** + datif : **das Auto von meinem Vater**.

### L'article défini
- Masculin : **der – den – dem – des** ; féminin : **die – die – der – der** ; neutre : **das – das – dem – des** ; pluriel : **die – die – den – der**.
- Au **datif pluriel**, le nom prend un **-n** : **mit den Kindern**.
- Au **génitif** masculin et neutre, le nom prend **-s** ou **-es** : **des Landes**, **des Lehrers**.
- L'article indéfini suit le même modèle : **ein – einen – einem – eines** (masculin), **eine – eine – einer – einer** (féminin) ; **kein** et les possessifs (**mein**, **dein**, **sein**, **ihr**, **unser**) se déclinent comme lui.

### Les prépositions et leur cas
- Toujours **accusatif** : **durch**, **für**, **gegen**, **ohne**, **um**. **Für meinen Bruder.**
- Toujours **datif** : **aus**, **bei**, **mit**, **nach**, **seit**, **von**, **zu**, **gegenüber**. **Mit dem Zug, seit einem Jahr.**
- **Mixtes** (**an**, **auf**, **hinter**, **in**, **neben**, **über**, **unter**, **vor**, **zwischen**) : **accusatif** s'il y a **changement de lieu** (question **Wohin?**), **datif** pour un **lieu où l'on est** (question **Wo?**). **Ich gehe in die Stadt** (où je vais) ; **ich wohne in der Stadt** (où je suis).
- **Génitif** (langue soignée) : **wegen** (à cause de), **trotz** (malgré), **während** (pendant), **statt** (au lieu de). **Trotz des Regens.**

### La déclinaison de l'adjectif épithète
- Après l'**article défini** (**der**, **dieser**, **jeder**) : terminaison **-e** au nominatif singulier et à l'accusatif féminin et neutre, **-en** partout ailleurs. **Der junge Mann, den jungen Mann, mit dem jungen Mann.**
- Après l'**article indéfini** (**ein**, **kein**, **mein**) : l'adjectif porte la marque du genre quand l'article ne la montre pas : **ein junger Mann**, **ein kleines Kind**, **eine alte Frau**.
- **Sans article** : l'adjectif prend la terminaison de l'article défini : **mit großem Interesse**, **frisches Brot**.

### Les verbes et leur cas
- Verbes suivis du **datif** : **helfen**, **danken**, **gefallen**, **gehören**, **folgen**, **antworten**. **Ich helfe dir. Das Buch gefällt mir.**
- Les **pronoms personnels** se déclinent aussi : **ich – mich – mir**, **du – dich – dir**, **er – ihn – ihm**, **sie – sie – ihr**, **wir – uns – uns**.

### À retenir pour le bac
- Nominatif (sujet), accusatif (COD), datif (COI), génitif (complément du nom).
- Prépositions : durch, für, gegen, ohne, um + accusatif ; aus, bei, mit, nach, seit, von, zu + datif ; mixtes : Wohin? accusatif, Wo? datif.
- Adjectif : -e ou -en après der ; marque du genre après ein (ein junger Mann) ; helfen, danken, gefallen + datif.`,
      cartes: [
        { q: "Quel cas marque le sujet ?", r: "Le nominatif." },
        { q: "Quel cas marque le complément d'objet direct ?", r: "L'accusatif." },
        { q: "Quel cas marque le complément d'objet indirect ?", r: "Le datif." },
        { q: "Décline der au masculin singulier.", r: "der, den, dem, des." },
        { q: "Décline die au pluriel.", r: "die, die, den, der." },
        { q: "Que prend le nom au datif pluriel ?", r: "Un -n : mit den Kindern." },
        { q: "Quelles prépositions sont toujours suivies de l'accusatif ?", r: "durch, für, gegen, ohne, um." },
        { q: "Quelles prépositions sont toujours suivies du datif ?", r: "aus, bei, mit, nach, seit, von, zu (et gegenüber)." },
        { q: "Quand une préposition mixte est-elle suivie de l'accusatif ?", r: "Quand il y a changement de lieu (question Wohin?)." },
        { q: "Quel cas après wegen et trotz ?", r: "Le génitif (souvent le datif à l'oral)." },
        { q: "Complète : ein ___ Mann (jung).", r: "ein junger Mann." },
        { q: "Complète : mit dem ___ Mann (jung).", r: "mit dem jungen Mann." },
        { q: "Quel cas après helfen ?", r: "Le datif : ich helfe dir." },
        { q: "Décline le pronom er.", r: "er, ihn, ihm." },
      ],
      quiz: [
        { q: "Quel cas marque le complément d'objet direct ?", choix: ["Nominatif","Datif","Génitif","Accusatif"], bonne: 3, expl: "Ich sehe den Mann.", niv: 1 },
        { q: "Complète : « Ich fahre mit ___ Zug. »", choix: ["dem","den","der","das"], bonne: 0, expl: "mit + datif.", niv: 1 },
        { q: "Complète : « Das Geschenk ist für ___ Bruder. »", choix: ["meinem","meiner","mein","meinen"], bonne: 3, expl: "für + accusatif.", niv: 1 },
        { q: "Quel est l'accusatif de er ?", choix: ["ihm","ihr","ihn","sein"], bonne: 2, expl: "er – ihn – ihm.", niv: 1 },
        { q: "Complète : « Ich gehe in ___ Stadt. »", choix: ["der","den","die","dem"], bonne: 2, expl: "Wohin? accusatif.", niv: 2 },
        { q: "Complète : « Ich wohne in ___ Stadt. »", choix: ["die","den","das","der"], bonne: 3, expl: "Wo? datif.", niv: 2 },
        { q: "Complète : « Das ist ein ___ Problem. » (groß)", choix: ["große","großes","großen","großer"], bonne: 1, expl: "Neutre après ein.", niv: 2 },
        { q: "Complète : « Ich helfe ___ Mutter. »", choix: ["meine","meinen","meiner","mein"], bonne: 2, expl: "helfen + datif.", niv: 2 },
        { q: "Complète : « ___ des Regens gehen wir spazieren. »", choix: ["Mit","Für","Seit","Trotz"], bonne: 3, expl: "Malgré + génitif.", niv: 2 },
        { q: "Pourquoi dit-on « mit den Kindern » et non « mit den Kinder » ?", choix: ["Le nom prend un -n au datif pluriel","Kinder est un nom féminin","Mit est suivi du génitif","Le pluriel de Kind est Kindern au nominatif comme au datif"], bonne: 0, expl: "Datif pluriel.", niv: 3 },
        { q: "Complète : « Wir sprechen mit dem ___ Lehrer. » (neu)", choix: ["neue","neuen","neuer","neues"], bonne: 1, expl: "Datif : -en.", niv: 3 },
        { q: "Pourquoi dit-on « Das Buch gefällt mir » ?", choix: ["Mir est le sujet de la phrase","Gefallen se conjugue ici au pluriel","Gefallen se construit avec le datif","Buch est au datif"], bonne: 2, expl: "Litt. : le livre me plaît.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-all-10",
      fiche: `## Grammaire : la place du verbe et les subordonnées

En allemand, le **verbe conjugué** occupe une place **fixe**. C'est la règle la plus visible pour un correcteur : un verbe mal placé gêne la compréhension. Au niveau B1-B2, on attend des phrases **complexes** avec des **subordonnées** correctement construites.

### La proposition principale : verbe en 2e position
- Dans une phrase déclarative, le verbe conjugué est le **deuxième élément** : **Ich lerne Deutsch.**
- Si un autre élément est placé en tête (complément, adverbe, subordonnée), le **sujet passe après le verbe** (**inversion**) : **Heute lerne ich Deutsch. Seit 2020 wohnt sie in Berlin.**
- Les autres formes verbales (**infinitif**, **participe passé**, **particule séparable**) vont **à la fin** : **Ich habe gestern einen Film gesehen. Ich will morgen ins Kino gehen. Der Film fängt um acht Uhr an.**
- Ordre habituel du milieu de phrase : **temps – cause – manière – lieu** (**TeKaMoLo**) : **Ich fahre morgen wegen der Arbeit mit dem Zug nach Köln.**

### Les questions et l'impératif
- Question fermée : verbe en **1re position** : **Kommst du mit?**
- Question ouverte : mot interrogatif puis verbe : **Warum lernst du Deutsch?**
- Impératif : verbe en tête : **Hör zu! Seien Sie pünktlich!**

### Les conjonctions de coordination : pas d'effet
- **und**, **aber**, **oder**, **denn** (car), **sondern** (mais au contraire, après une négation) ne changent pas l'ordre des mots (« position 0 ») : **Ich bleibe zu Hause, denn ich bin krank.**

### La subordonnée : verbe conjugué à la fin
- Après une **conjonction de subordination**, le verbe conjugué va **à la fin** de la subordonnée, précédée d'une **virgule** : **Ich weiß, dass er recht hat.**
- Principales conjonctions : **dass** (que), **weil** (parce que), **obwohl** (bien que), **wenn** (si, quand pour une action répétée ou future), **als** (quand, pour un fait unique du passé), **ob** (si, question indirecte), **damit** (pour que), **während** (pendant que, alors que), **bevor** (avant que), **nachdem** (après que), **seitdem** (depuis que), **bis** (jusqu'à ce que).
- Avec un verbe composé, l'auxiliaire conjugué est le **dernier** : **…, weil er das Buch gelesen hat.**
- Les verbes à particule se **ressoudent** : **…, wenn der Film anfängt.**
- Si la subordonnée est **en tête**, elle compte comme premier élément : le verbe principal suit **directement** : **Weil es regnet, bleiben wir zu Hause.** (verbe – virgule – verbe)

### Als ou wenn ?
- **als** : une seule fois dans le passé. **Als ich klein war, wohnte ich in Wien.**
- **wenn** : chaque fois (**immer wenn**), au présent ou au futur, ou condition. **Wenn ich Zeit habe, lese ich.**

### Les questions indirectes
- Avec un mot interrogatif ou **ob**, verbe à la fin : **Ich frage mich, warum er nicht kommt. Weißt du, ob sie kommt?**

### À retenir pour le bac
- Principale : verbe conjugué en 2e position, inversion si un autre élément est en tête ; infinitif, participe et particule à la fin.
- und, aber, oder, denn, sondern : sans effet sur l'ordre.
- Subordonnée : verbe conjugué à la fin (dass, weil, obwohl, wenn, als, ob, damit) ; subordonnée en tête : verbe, virgule, verbe.`,
      cartes: [
        { q: "Où se place le verbe conjugué dans une principale ?", r: "En deuxième position." },
        { q: "Que se passe-t-il si un complément est placé en tête ?", r: "Le sujet passe après le verbe : Heute lerne ich Deutsch." },
        { q: "Où vont l'infinitif et le participe passé ?", r: "À la fin de la proposition." },
        { q: "Que signifie TeKaMoLo ?", r: "L'ordre temps, cause, manière, lieu dans le milieu de la phrase." },
        { q: "Quelles conjonctions ne changent pas l'ordre des mots ?", r: "und, aber, oder, denn, sondern." },
        { q: "Où va le verbe conjugué dans une subordonnée ?", r: "À la fin." },
        { q: "Que signifie obwohl ?", r: "Bien que." },
        { q: "Que signifie weil ?", r: "Parce que." },
        { q: "Quelle différence entre als et wenn ?", r: "Als : un fait unique dans le passé ; wenn : action répétée, présente, future ou condition." },
        { q: "Que signifie ob ?", r: "Si, dans une question indirecte : Ich weiß nicht, ob er kommt." },
        { q: "Que devient anfangen dans une subordonnée ?", r: "Le verbe se ressoude à la fin : …, wenn der Film anfängt." },
        { q: "Quel ordre si la subordonnée est en tête ?", r: "Verbe de la subordonnée, virgule, verbe de la principale : Weil es regnet, bleiben wir." },
        { q: "Que signifie sondern ?", r: "Mais au contraire, après une négation." },
        { q: "Où se place le verbe dans une question fermée ?", r: "En première position : Kommst du mit?" },
      ],
      quiz: [
        { q: "Où se place le verbe conjugué dans une proposition principale ?", choix: ["En première position","À la fin de la phrase","Juste après le complément d'objet","En deuxième position"], bonne: 3, expl: "Verbe 2.", niv: 1 },
        { q: "Que signifie obwohl ?", choix: ["Bien que","Parce que","Pour que","Après que"], bonne: 0, expl: "Concession.", niv: 1 },
        { q: "Quelle phrase place bien le verbe ?", choix: ["Heute ich gehe ins Kino.","Heute ich ins Kino gehe.","Heute ins Kino ich gehe.","Heute gehe ich ins Kino."], bonne: 3, expl: "Inversion.", niv: 1 },
        { q: "Quelle conjonction ne rejette pas le verbe à la fin ?", choix: ["weil","dass","denn","obwohl"], bonne: 2, expl: "Coordination.", niv: 1 },
        { q: "Complète : « Ich bleibe zu Hause, weil ich krank ___. »", choix: ["sein","war gewesen","bin","ist"], bonne: 2, expl: "Verbe à la fin.", niv: 2 },
        { q: "Complète : « ___ ich klein war, wohnte ich in Wien. »", choix: ["Als","Wenn","Ob","Wann"], bonne: 0, expl: "Fait unique du passé.", niv: 2 },
        { q: "Complète : « Weißt du, ___ sie morgen kommt? »", choix: ["ob","dass","wenn","als"], bonne: 0, expl: "Question indirecte.", niv: 2 },
        { q: "Quelle subordonnée est bien construite ?", choix: ["…, weil er hat das Buch gelesen.","…, weil hat er das Buch gelesen.","…, weil er das Buch gelesen hat.","…, weil er das Buch hat gelesen."], bonne: 2, expl: "Auxiliaire en dernier.", niv: 2 },
        { q: "Complète : « Ich weiß nicht, wann der Film ___. »", choix: ["anfängt","fängt an","an fängt","anfangen"], bonne: 0, expl: "Particule ressoudée.", niv: 2 },
        { q: "Quelle phrase est juste quand la subordonnée est en tête ?", choix: ["Weil es regnet, wir bleiben zu Hause.","Weil regnet es, bleiben wir zu Hause.","Weil es regnet, bleiben wir zu Hause.","Weil es regnet, wir zu Hause bleiben."], bonne: 2, expl: "Verbe, virgule, verbe.", niv: 3 },
        { q: "Pourquoi dit-on « Nicht er, sondern sie hat gewonnen » et non « aber » ?", choix: ["Aber est suivi de l'accusatif","Sondern corrige une négation","Sondern signifie « parce que »","Aber se place en fin de phrase"], bonne: 1, expl: "Mais au contraire.", niv: 3 },
        { q: "Quel ordre respecte TeKaMoLo ?", choix: ["Ich fahre nach Köln mit dem Zug wegen der Arbeit morgen.","Ich fahre mit dem Zug nach Köln morgen wegen der Arbeit.","Ich fahre wegen der Arbeit nach Köln morgen mit dem Zug.","Ich fahre morgen wegen der Arbeit mit dem Zug nach Köln."], bonne: 3, expl: "Temps, cause, manière, lieu.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-all-11",
      fiche: `## Grammaire : les temps et les verbes de modalité

Pour raconter, rendre compte d'un document ou donner son avis, il faut maîtriser les **temps du passé**, le **futur** et les **verbes de modalité**. Les correcteurs vérifient surtout l'**auxiliaire**, le **participe passé** et la **place** des verbes.

### Le présent
- Terminaisons : **-e, -st, -t, -en, -t, -en**. Les verbes forts changent de voyelle aux 2e et 3e personnes du singulier : **fahren – du fährst, er fährt** ; **sprechen – du sprichst** ; **lesen – er liest**.
- Le présent sert aussi pour le **futur proche** : **Morgen fahre ich nach Berlin.** Avec **seit**, il exprime une action qui dure encore : **Ich lerne seit fünf Jahren Deutsch** (j'apprends l'allemand depuis cinq ans).

### Le parfait (das Perfekt) : le passé de l'oral
- **haben** ou **sein** au présent + **participe passé** à la fin : **Ich habe Deutsch gelernt. Wir sind nach Wien gefahren.**
- **sein** avec les verbes de **déplacement** ou de **changement d'état** (**gehen**, **fahren**, **kommen**, **werden**, **sterben**, **aufstehen**) et avec **sein** et **bleiben**.
- Participe des verbes faibles : **ge-…-t** (**gemacht**, **gekauft**) ; des verbes forts : **ge-…-en**, souvent avec changement de voyelle (**gesehen**, **geschrieben**, **getrunken**). Verbes à particule séparable : **eingekauft**, **angefangen**. Sans **ge-** pour les verbes en **-ieren** (**studiert**) et à préfixe inséparable (**besucht**, **verstanden**, **erzählt**).

### Le prétérit (das Präteritum) : le passé de l'écrit
- Utilisé dans les **récits**, les **romans**, la **presse** : **Er wohnte in Berlin. Sie schrieb einen Brief.**
- Verbes faibles : **-te** (**machte**, **wohnte**) ; verbes forts : changement de voyelle (**gehen – ging**, **kommen – kam**, **sehen – sah**, **finden – fand**).
- À l'oral, on emploie le prétérit surtout pour **sein** (**war**), **haben** (**hatte**) et les **modaux** (**konnte**, **musste**, **wollte**).

### Le plus-que-parfait
- **hatte** ou **war** + participe passé : action **antérieure** à une autre action passée. **Nachdem er gegessen hatte, ging er spazieren.**

### Le futur
- **werden** + **infinitif à la fin** : **Ich werde morgen arbeiten.** Il exprime aussi une **supposition** : **Er wird krank sein** (il doit être malade).

### Les verbes de modalité
- **können** (pouvoir, savoir faire), **dürfen** (avoir la permission), **müssen** (devoir, nécessité), **sollen** (devoir, selon quelqu'un d'autre, conseil), **wollen** (vouloir fermement), **mögen** / **möchte** (aimer bien / voudrais).
- Construction : modal conjugué + **infinitif à la fin** : **Ich muss heute lernen.**
- Attention : **nicht müssen** = ne pas être obligé (**Du musst nicht kommen**) ; **nicht dürfen** = ne pas avoir le droit (**Du darfst hier nicht rauchen**).
- Au parfait avec un infinitif : **double infinitif** : **Ich habe nicht kommen können.**

### À retenir pour le bac
- Présent avec seit = action qui dure ; verbes forts : du fährst, er liest.
- Perfekt (haben ou sein + participe) à l'oral ; Präteritum dans les récits ; hatte/war + participe pour l'antériorité.
- werden + infinitif ; modaux + infinitif à la fin ; nicht müssen (pas obligé) et nicht dürfen (interdit).`,
      cartes: [
        { q: "Conjugue fahren à la 3e personne du singulier.", r: "er fährt." },
        { q: "Comment traduire « J'apprends l'allemand depuis cinq ans » ?", r: "Ich lerne seit fünf Jahren Deutsch." },
        { q: "Comment se forme le Perfekt ?", r: "haben ou sein au présent + participe passé à la fin." },
        { q: "Avec quels verbes emploie-t-on sein au Perfekt ?", r: "Les verbes de déplacement ou de changement d'état, et sein et bleiben." },
        { q: "Quel est le participe passé de schreiben ?", r: "geschrieben." },
        { q: "Pourquoi dit-on besucht et non gebesucht ?", r: "Les verbes à préfixe inséparable ne prennent pas ge-." },
        { q: "Quand emploie-t-on surtout le Präteritum ?", r: "À l'écrit, dans les récits, les romans et la presse." },
        { q: "Quel est le prétérit de gehen ?", r: "ging." },
        { q: "Comment se forme le plus-que-parfait ?", r: "hatte ou war + participe passé." },
        { q: "Comment se forme le futur ?", r: "werden + infinitif à la fin." },
        { q: "Que signifie Er wird krank sein ?", r: "Il doit être malade (supposition)." },
        { q: "Quelle différence entre müssen et sollen ?", r: "Müssen : nécessité ; sollen : obligation venant de quelqu'un d'autre, ou conseil." },
        { q: "Que signifie Du musst nicht kommen ?", r: "Tu n'es pas obligé de venir." },
        { q: "Que signifie Du darfst hier nicht rauchen ?", r: "Tu n'as pas le droit de fumer ici." },
      ],
      quiz: [
        { q: "Quel est le participe passé de sehen ?", choix: ["gesehen","gesieht","gesah","sehte"], bonne: 0, expl: "Verbe fort.", niv: 1 },
        { q: "Complète : « Wir ___ nach Wien gefahren. »", choix: ["haben","werden","hatten","sind"], bonne: 3, expl: "Déplacement : sein.", niv: 1 },
        { q: "Quel est le prétérit de kommen ?", choix: ["kam","kommte","kamte","gekommen"], bonne: 0, expl: "kommen – kam – gekommen.", niv: 1 },
        { q: "Quel modal exprime la permission ?", choix: ["müssen","wollen","mögen","dürfen"], bonne: 3, expl: "Darf ich…?", niv: 1 },
        { q: "Que signifie « Du musst nicht kommen » ?", choix: ["Tu n'as pas le droit de venir","Tu n'es pas obligé de venir","Tu ne veux pas venir","Tu ne peux pas venir"], bonne: 1, expl: "nicht müssen.", niv: 2 },
        { q: "Complète : « Ich lerne ___ fünf Jahren Deutsch. »", choix: ["vor","seit","für","während"], bonne: 1, expl: "Action qui dure : présent + seit.", niv: 2 },
        { q: "Quel est le participe passé de studieren ?", choix: ["studiert","gestudiert","gestudieren","studierte"], bonne: 0, expl: "Verbes en -ieren sans ge-.", niv: 2 },
        { q: "Complète : « Nachdem er gegessen ___, ging er spazieren. »", choix: ["hat","hatte","wird","habe"], bonne: 1, expl: "Plus-que-parfait.", niv: 2 },
        { q: "Que signifie « Er wird krank sein » ?", choix: ["Il doit être malade, je suppose","Il deviendra malade demain","Il a été malade hier","Il veut être malade"], bonne: 0, expl: "Futur de supposition.", niv: 2 },
        { q: "Pourquoi dit-on « Ich bin um 7 Uhr aufgestanden » ?", choix: ["Aufstehen est un verbe faible en -ieren, sans ge- au participe","Aufstehen est un changement d'état qui se conjugue avec sein","Le parfait se forme avec sein après um","Le participe ne prend pas de ge-"], bonne: 1, expl: "sein + participe.", niv: 3 },
        { q: "Quelle phrase emploie correctement le double infinitif ?", choix: ["Ich habe nicht gekommen gekonnt.","Ich habe nicht kommen können.","Ich bin nicht kommen gekonnt.","Ich habe nicht können kommen."], bonne: 1, expl: "Modal au Perfekt.", niv: 3 },
        { q: "Pourquoi les romans emploient-ils surtout le Präteritum ?", choix: ["Le Perfekt est interdit à l'écrit","Il exprime le futur","C'est le temps du récit écrit","Il n'existe que pour sein et haben"], bonne: 2, expl: "Temps du récit.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-all-12",
      fiche: `## Grammaire : passif, subjonctif, infinitives et relatives

Ces structures enrichissent les phrases et sont attendues au niveau **B2** : le **passif** pour rendre compte d'événements, le **subjonctif II** pour les **hypothèses** et la **politesse**, le **subjonctif I** pour le **discours indirect** de la presse, les **infinitives** et les **relatives** pour relier les idées.

### Le passif
- **Passif-action** : **werden** conjugué + **participe passé** à la fin. **Die Mauer wird 1961 gebaut. Die Mauer wurde 1961 gebaut.**
- Au parfait : **ist… worden** : **Die Mauer ist 1989 geöffnet worden.**
- Le complément d'agent : **von** + datif (une personne) : **Das Buch wurde von Goethe geschrieben.** ; **durch** + accusatif (un moyen).
- Avec un modal : **Das Problem muss gelöst werden.**
- **Passif-état** : **sein** + participe, pour un résultat : **Das Geschäft ist geschlossen.**
- Alternative active : **man** : **Man baute die Mauer 1961.**

### Le subjonctif II (Konjunktiv II) : l'irréel et la politesse
- Forme courante : **würde** + infinitif : **Ich würde gern nach Berlin fahren.**
- Formes propres à connaître : **wäre** (sein), **hätte** (haben), **könnte**, **müsste**, **dürfte**, **sollte**, **wüsste**, **käme**, **ginge**.
- **Irréel du présent** : **Wenn ich mehr Zeit hätte, würde ich mehr lesen.** (Si j'avais plus de temps, je lirais plus.)
- **Irréel du passé** : **hätte / wäre** + participe passé : **Wenn ich das gewusst hätte, wäre ich gekommen.**
- **Souhait** : **Wenn ich doch nur… !**, **Ich wünschte, ich könnte…**
- **Conseil et politesse** : **Du solltest mehr schlafen. Könnten Sie mir helfen? Ich hätte gern einen Kaffee.**

### Le subjonctif I (Konjunktiv I) : le discours indirect
- Utilisé dans la **presse** pour rapporter des propos **sans les prendre à son compte** : **Der Minister sagt, er sei zufrieden. Sie erklärt, sie habe keine Zeit.**
- Formes surtout à la 3e personne : **er sei**, **er habe**, **er komme**, **er könne**, **er werde**. Si la forme est identique à l'indicatif, on emploie le subjonctif II.

### Les infinitives
- **zu** + infinitif à la fin : **Es ist wichtig, die Umwelt zu schützen.** Avec un verbe à particule, **zu** s'intercale : **anzufangen**, **einzukaufen**.
- **um… zu** (pour, but, même sujet) : **Ich lerne Deutsch, um in Berlin zu studieren.** ; **damit** si les sujets sont différents.
- **ohne… zu** (sans) et **(an)statt… zu** (au lieu de) : **Er ging, ohne ein Wort zu sagen.**
- Pas de **zu** après les **modaux** ni après **werden**.

### Les relatives
- Le **pronom relatif** a le **genre** et le **nombre** de l'antécédent, et le **cas** de sa fonction dans la relative. Il ressemble à l'article défini, sauf **dessen**, **deren** (génitif) et **denen** (datif pluriel).
- Le verbe conjugué va **à la fin** : **Der Mann, der dort steht, ist mein Lehrer. Die Stadt, in der ich wohne, ist schön. Die Menschen, denen ich helfe, sind dankbar.**
- **was** après **alles**, **etwas**, **nichts**, **das** : **Alles, was er sagt, ist wahr.** ; **wo** pour un lieu.

### À retenir pour le bac
- Passif : werden + participe (ist… worden) ; von + datif ; passif avec un modal : muss gelöst werden.
- Konjunktiv II : würde + infinitif, wäre, hätte, könnte ; irréel du passé : hätte/wäre + participe ; Konjunktiv I dans la presse : er sei, er habe.
- zu + infinitif, um… zu, ohne… zu ; relatives : pronom qui s'accorde, verbe à la fin, dessen, deren, denen.`,
      cartes: [
        { q: "Comment se forme le passif-action ?", r: "werden conjugué + participe passé à la fin." },
        { q: "Mets au passif prétérit : Man baute die Mauer 1961.", r: "Die Mauer wurde 1961 gebaut." },
        { q: "Comment se forme le passif au parfait ?", r: "sein + participe + worden : ist geöffnet worden." },
        { q: "Comment introduit-on l'auteur d'une action au passif ?", r: "Avec von + datif : von Goethe." },
        { q: "Quelle est la forme courante du Konjunktiv II ?", r: "würde + infinitif." },
        { q: "Traduis : « Si j'avais plus de temps, je lirais plus. »", r: "Wenn ich mehr Zeit hätte, würde ich mehr lesen." },
        { q: "Comment se forme l'irréel du passé ?", r: "hätte ou wäre + participe passé." },
        { q: "Comment demander poliment de l'aide ?", r: "Könnten Sie mir helfen?" },
        { q: "À quoi sert le Konjunktiv I ?", r: "Au discours indirect, surtout dans la presse, pour rapporter sans prendre parti." },
        { q: "Quel est le Konjunktiv I de sein à la 3e personne ?", r: "er sei." },
        { q: "Que signifie um… zu ?", r: "Pour (but), quand le sujet est le même." },
        { q: "Où se place zu avec anfangen ?", r: "Entre la particule et le verbe : anzufangen." },
        { q: "Quel est le pronom relatif au datif pluriel ?", r: "denen." },
        { q: "Où va le verbe dans une relative ?", r: "À la fin." },
      ],
      quiz: [
        { q: "Complète : « Das Haus ___ 1900 gebaut. » (passif prétérit)", choix: ["wurde","würde","ist","hat"], bonne: 0, expl: "werden au prétérit.", niv: 1 },
        { q: "Quel est le Konjunktiv II de haben ?", choix: ["hatte","hätte","habe","hast"], bonne: 1, expl: "Ich hätte gern…", niv: 1 },
        { q: "Complète : « Ich lerne Deutsch, ___ in Wien zu studieren. »", choix: ["damit","weil","ohne","um"], bonne: 3, expl: "But, même sujet.", niv: 1 },
        { q: "Complète : « Der Mann, ___ dort steht, ist mein Lehrer. »", choix: ["den","der","dem","dessen"], bonne: 1, expl: "Sujet de la relative.", niv: 1 },
        { q: "Complète : « Wenn ich reich wäre, ___ ich um die Welt reisen. »", choix: ["werde","wurde","wird","würde"], bonne: 3, expl: "Irréel du présent.", niv: 2 },
        { q: "Complète : « Die Stadt, in ___ ich wohne, ist schön. »", choix: ["der","die","dem","den"], bonne: 0, expl: "in + datif, féminin.", niv: 2 },
        { q: "Complète : « Das Problem muss sofort gelöst ___. »", choix: ["worden","wurde","werden","sein"], bonne: 2, expl: "Passif avec un modal.", niv: 2 },
        { q: "Que signifie « Der Minister sagt, er sei zufrieden » ?", choix: ["Le ministre ordonne à chacun d'être satisfait de la situation","Le ministre dit qu'il est satisfait (propos rapportés)","Le ministre était satisfait hier","Le ministre sera satisfait demain"], bonne: 1, expl: "Konjunktiv I.", niv: 2 },
        { q: "Complète : « Es ist schwer, früh ___. » (aufstehen)", choix: ["zu aufstehen","aufzustehen","aufstehen zu","aufgestanden"], bonne: 1, expl: "zu intercalé.", niv: 2 },
        { q: "Traduis : « Si je l'avais su, je serais venu. »", choix: ["Wenn ich das wusste, kam ich.","Wenn ich das wissen würde, käme ich.","Wenn ich das gewusst habe, bin ich gekommen.","Wenn ich das gewusst hätte, wäre ich gekommen."], bonne: 3, expl: "Irréel du passé.", niv: 3 },
        { q: "Complète : « Die Kinder, ___ ich helfe, sind dankbar. »", choix: ["die","deren","den","denen"], bonne: 3, expl: "helfen + datif pluriel.", niv: 3 },
        { q: "Pourquoi les journalistes emploient-ils le Konjunktiv I ?", choix: ["Pour exprimer un ordre","Pour rapporter des propos sans les prendre à leur compte","Pour raconter au futur","Pour poser des questions polies aux personnes interrogées"], bonne: 1, expl: "Distance.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-all-13",
      fiche: `## Connecteurs et expressions pour argumenter

Au niveau B2, on attend une argumentation **organisée** et **nuancée**. En allemand, les **connecteurs** ont un effet sur la **place du verbe** : c'est là que se jouent beaucoup de points.

### Trois familles selon la place du verbe
- **Coordination** (aucun effet, « position 0 ») : **und**, **aber**, **oder**, **denn** (car), **sondern** (mais au contraire). **Ich bin dafür, denn es ist gerecht.**
- **Adverbes** (ils occupent la 1re position, le verbe suit, puis le sujet) : **deshalb**, **deswegen**, **darum** (c'est pourquoi), **trotzdem** (malgré tout), **außerdem** (en outre), **dann**, **danach**, **schließlich** (finalement), **einerseits… andererseits** (d'une part… d'autre part). **Es regnet, trotzdem gehen wir spazieren.**
- **Subordination** (verbe à la fin) : **weil**, **da** (comme, puisque), **obwohl**, **dass**, **wenn**, **damit**, **während** (alors que). **Obwohl es regnet, gehen wir spazieren.**

### Organiser son propos
- Introduire : **Zuerst**, **Zunächst** (tout d'abord), **Erstens**, **Es geht um…** (il s'agit de…).
- Ajouter : **Außerdem**, **Darüber hinaus** (de plus), **Zudem**, **Nicht nur…, sondern auch…** (non seulement… mais aussi).
- Énumérer : **Zweitens**, **Dann**, **Danach**, **Schließlich**.
- Conclure : **Zusammenfassend** (pour résumer), **Zum Schluss**, **Alles in allem** (dans l'ensemble), **Kurz gesagt**.

### Cause, conséquence, opposition
- Cause : **weil**, **da**, **denn**, **wegen** + génitif. **Wegen des Klimawandels…**
- Conséquence : **deshalb**, **deswegen**, **also** (donc), **so dass** (si bien que).
- Opposition : **aber**, **jedoch** (cependant), **dagegen** (en revanche), **während** (alors que), **im Gegensatz zu** + datif.
- Concession : **obwohl** + subordonnée, **trotzdem** + inversion, **trotz** + génitif, **zwar… aber** (certes… mais) : **Das Internet ist zwar praktisch, aber es kann gefährlich sein.**

### Donner son avis avec nuance
- **Meiner Meinung nach…** (à mon avis, suivi du verbe : **Meiner Meinung nach ist das falsch**), **Ich bin der Meinung, dass…**, **Ich finde / denke / glaube, dass…**
- Nuancer : **Es kommt darauf an** (ça dépend), **Einerseits… andererseits…**, **Bis zu einem gewissen Grad** (dans une certaine mesure), **vielleicht**, **wahrscheinlich** (probablement).
- Accord et désaccord : **Ich bin damit einverstanden** (je suis d'accord), **Da hast du recht**, **Ich sehe das anders**, **Das stimmt nicht ganz**.
- Illustrer : **zum Beispiel** (z. B.), **wie** (comme), **vor allem** (surtout), **nämlich** (en effet).

### Réagir dans l'entretien
- **Wie bitte?** **Können Sie die Frage bitte wiederholen?** (pouvez-vous répéter ?) ; **Was meinen Sie mit…?** ; **Moment, lassen Sie mich überlegen…** (laissez-moi réfléchir).

### À retenir pour le bac
- und, aber, oder, denn, sondern : sans effet ; deshalb, trotzdem, außerdem : inversion ; weil, obwohl, dass, damit : verbe à la fin.
- Zuerst, außerdem, schließlich, zusammenfassend ; zwar… aber ; nicht nur…, sondern auch.
- Meiner Meinung nach + verbe ; es kommt darauf an ; einerseits… andererseits.`,
      cartes: [
        { q: "Que signifie deshalb et quel est son effet ?", r: "C'est pourquoi ; il entraîne l'inversion (verbe puis sujet)." },
        { q: "Que signifie trotzdem ?", r: "Malgré tout, quand même ; il entraîne l'inversion." },
        { q: "Quelle différence entre denn et weil ?", r: "Les deux signifient « car, parce que » ; denn ne change pas l'ordre, weil rejette le verbe à la fin." },
        { q: "Que signifie außerdem ?", r: "En outre, de plus." },
        { q: "Que signifie einerseits… andererseits ?", r: "D'une part… d'autre part." },
        { q: "Que signifie zwar… aber ?", r: "Certes… mais." },
        { q: "Que signifie nicht nur…, sondern auch ?", r: "Non seulement…, mais aussi." },
        { q: "Que signifie jedoch ?", r: "Cependant." },
        { q: "Que signifie dagegen ?", r: "En revanche." },
        { q: "Que signifie zusammenfassend ?", r: "Pour résumer." },
        { q: "Comment dire « à mon avis » ?", r: "Meiner Meinung nach, suivi directement du verbe." },
        { q: "Que signifie Es kommt darauf an ?", r: "Ça dépend." },
        { q: "Comment dire « je suis d'accord » ?", r: "Ich bin damit einverstanden (ou : Da hast du recht)." },
        { q: "Comment demander de répéter la question ?", r: "Können Sie die Frage bitte wiederholen?" },
      ],
      quiz: [
        { q: "Que signifie deshalb ?", choix: ["Bien que","Pendant que","C'est pourquoi","Malgré tout"], bonne: 2, expl: "Conséquence.", niv: 1 },
        { q: "Que signifie außerdem ?", choix: ["Dehors","Sauf si","Ensuite","En outre"], bonne: 3, expl: "Ajout.", niv: 1 },
        { q: "Comment dire « ça dépend » ?", choix: ["Es kommt darauf an.","Es geht mir gut.","Es tut mir leid.","Es ist mir egal."], bonne: 0, expl: "Nuance.", niv: 1 },
        { q: "Que signifie zusammenfassend ?", choix: ["Ensemble","En même temps","Par conséquent","Pour résumer"], bonne: 3, expl: "Conclusion.", niv: 1 },
        { q: "Complète : « Es regnet, trotzdem ___ wir spazieren. »", choix: ["gehen","wir gehen","gehen wir","zu gehen"], bonne: 0, expl: "Inversion : verbe puis sujet.", niv: 2 },
        { q: "Quelle phrase est bien construite ?", choix: ["Meiner Meinung nach das ist falsch.","Meiner Meinung nach das falsch ist.","Meiner Meinung ist nach das falsch.","Meiner Meinung nach ist das falsch."], bonne: 3, expl: "Verbe en 2e position.", niv: 2 },
        { q: "Quel connecteur ne change pas l'ordre des mots ?", choix: ["deshalb","weil","trotzdem","denn"], bonne: 3, expl: "Coordination.", niv: 2 },
        { q: "Que signifie « Das Internet ist zwar praktisch, aber gefährlich » ?", choix: ["Internet est pratique parce qu'il est dangereux","Internet n'est ni pratique ni dangereux","Internet est certes pratique, mais dangereux","Internet sera pratique et dangereux"], bonne: 2, expl: "Concession.", niv: 2 },
        { q: "Quelle formule exprime poliment un désaccord ?", choix: ["Ich sehe das anders.","Ich bin damit einverstanden.","Da hast du recht.","Genau, so ist es."], bonne: 0, expl: "Désaccord.", niv: 2 },
        { q: "Pourquoi « Obwohl es regnet, gehen wir spazieren » est-il correct ?", choix: ["Obwohl est une conjonction de coordination","Gehen doit être en fin de phrase","Le sujet wir est placé en tête","La subordonnée en tête est suivie du verbe principal"], bonne: 3, expl: "Verbe, virgule, verbe.", niv: 3 },
        { q: "Quelle expression permet de présenter deux points de vue ?", choix: ["Zum Schluss…","Zum Beispiel…","Einerseits… andererseits…","Wie bitte?"], bonne: 2, expl: "Nuance.", niv: 3 },
        { q: "Pourquoi les connecteurs sont-ils valorisés au niveau B2 ?", choix: ["Ils rendent visible l'enchaînement logique des idées","Ils permettent d'écrire moins de mots pour le même résultat","Ils remplacent les exemples","Ils évitent de conjuguer les verbes"], bonne: 0, expl: "Cohérence.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-all-14",
      fiche: `## Méthode : comprendre un document oral ou écrit

La **compréhension** compte pour la **moitié** de la note dans le modèle d'évaluation de terminale. On rend compte du document **oral** en **français** ; pour l'**écrit**, en français ou en allemand selon la **consigne**, de façon **libre** (un compte rendu rédigé) ou **guidée** (des questions).

### Avant d'écouter ou de lire : anticiper
- Lire le **titre**, la **source**, la **date** et le **type** de document (reportage, interview, extrait de roman, article, discours).
- Faire des **hypothèses** à partir du titre, des images et du **thème** du dossier ; réviser mentalement le **vocabulaire** de l'axe.

### Le document oral
- Durée : **1 min 30 au plus**, **trois écoutes** espacées d'une minute ; on prend des **notes**.
- **Première écoute** : **wer?** (qui parle ?), **wo?**, **wann?**, **was?** (de quoi ?) et le **ton**.
- **Deuxième écoute** : les **idées principales**, les **chiffres**, les **noms propres**, les **dates**. Attention aux nombres allemands : l'unité avant la dizaine (**einundzwanzig** = 21, **neunzehnhundertneunundachtzig** = 1989).
- **Troisième écoute** : les **détails**, les **liens logiques** (**weil**, **aber**, **deshalb**) et le **point de vue**.
- Bien écouter la **négation** (**nicht**, **kein**, **nie**) : elle inverse le sens.
- Prendre des notes **en abrégé**, avec des flèches, sans chercher à tout écrire.

### Le document écrit
- Lire une première fois **en entier**, puis repérer la **structure** et les **connecteurs** (**jedoch**, **deshalb**, **trotzdem**).
- Dans une phrase longue, chercher le **verbe conjugué** (2e position ou fin de subordonnée) et la **particule séparable** à la fin : **Er ruft seine Mutter jeden Abend an** = **anrufen** (téléphoner).
- **Décomposer les mots composés** : le dernier élément donne le sens principal : **die Umweltverschmutzung** = **Umwelt** (environnement) + **Verschmutzung** (pollution).
- Reconnaître les **familles de mots** et les suffixes : **-ung**, **-heit**, **-keit** (noms féminins), **-los** (sans : **arbeitslos**, sans emploi), **un-** (contraire : **unmöglich**).
- Se méfier des **faux amis** : **das Gymnasium** (le lycée), **bekommen** (recevoir), **das Gift** (le poison), **also** (donc), **die Rente** (la retraite), **der Rat** (le conseil).
- Distinguer **faits** et **opinions** (**ich finde**, **leider**, **zum Glück**), repérer l'**ironie** et le **Konjunktiv I** (propos rapportés : **er sei**).

### Rédiger le compte rendu
- **Présenter le document** : nature, source, date, sujet.
- Restituer les **informations essentielles** dans un **ordre logique**, en **phrases complètes**, en hiérarchisant.
- Préciser le **point de vue** ou l'**intention** de l'auteur.
- Ne pas **inventer**, ne pas **traduire mot à mot**, ne pas donner son avis sauf si la consigne le demande.

### Ce que valorise la grille
- Niveau atteint : le **sujet** seul, puis les **informations principales** (B1), puis les **détails pertinents**, la **structure** et le **point de vue implicite** (B2).

### À retenir pour le bac
- Anticiper ; trois écoutes : général (wer, wo, was), essentiel (chiffres, noms), détails et point de vue ; attention aux nombres et à la négation.
- Écrit : trouver le verbe et la particule, décomposer les mots composés, faux amis, Konjunktiv I.
- Compte rendu organisé, hiérarchisé, avec l'intention de l'auteur, sans traduction mot à mot.`,
      cartes: [
        { q: "Dans quelle langue rend-on compte du document oral ?", r: "En français." },
        { q: "Combien de fois écoute-t-on le document oral ?", r: "Trois fois, avec une minute entre chaque écoute." },
        { q: "Que chercher à la première écoute ?", r: "Qui parle, où, quand, de quoi, et sur quel ton." },
        { q: "Comment se dit 21 en allemand ?", r: "einundzwanzig : l'unité avant la dizaine." },
        { q: "Pourquoi faut-il bien écouter nicht, kein et nie ?", r: "La négation inverse le sens de la phrase." },
        { q: "Où chercher la particule d'un verbe séparable ?", r: "À la fin de la proposition : Er ruft seine Mutter an = anrufen." },
        { q: "Comment comprendre un mot composé ?", r: "Le décomposer : le dernier élément donne le sens principal." },
        { q: "Que signifie die Umweltverschmutzung ?", r: "La pollution de l'environnement." },
        { q: "Que signifie le suffixe -los ?", r: "Sans : arbeitslos = sans emploi." },
        { q: "Que signifie das Gymnasium ?", r: "Le lycée (faux ami)." },
        { q: "Que signifie bekommen ?", r: "Recevoir (faux ami)." },
        { q: "Que signifie das Gift ?", r: "Le poison (faux ami)." },
        { q: "Comment commencer un compte rendu ?", r: "En présentant le document : nature, source, date et sujet." },
        { q: "Qu'est-ce qui distingue une compréhension B2 ?", r: "Les détails pertinents, la structure et le point de vue implicite sont compris." },
      ],
      quiz: [
        { q: "Que signifie das Gymnasium ?", choix: ["Le gymnase","La salle de sport","Le collège","Le lycée"], bonne: 3, expl: "Faux ami.", niv: 1 },
        { q: "Que signifie bekommen ?", choix: ["Devenir","Commencer","Comprendre","Recevoir"], bonne: 3, expl: "Faux ami.", niv: 1 },
        { q: "Quel nombre est neunzehnhundertneunundachtzig ?", choix: ["1998","1989","8919","9819"], bonne: 1, expl: "Unité avant la dizaine.", niv: 1 },
        { q: "Que signifie arbeitslos ?", choix: ["Sans emploi","Travailleur","Paresseux","Fatigué par le travail"], bonne: 0, expl: "-los = sans.", niv: 1 },
        { q: "Que faire à la première écoute ?", choix: ["Noter chaque mot entendu dans l'ordre exact du document","Repérer qui parle, où, de quoi et sur quel ton","Traduire phrase par phrase","Rédiger directement la conclusion"], bonne: 1, expl: "Vue d'ensemble.", niv: 2 },
        { q: "Que signifie die Umweltverschmutzung ?", choix: ["La protection de la nature","Le réchauffement climatique","La pollution de l'environnement","Le tri des déchets"], bonne: 2, expl: "Umwelt + Verschmutzung.", niv: 2 },
        { q: "Dans « Er ruft seine Mutter jeden Abend an », quel est le verbe ?", choix: ["rufen","anrufen","arufen","abrufen"], bonne: 1, expl: "Particule à la fin.", niv: 2 },
        { q: "Que signifie also ?", choix: ["Aussi","Alors que","Également","Donc"], bonne: 3, expl: "Faux ami.", niv: 2 },
        { q: "Que doit contenir le début d'un compte rendu ?", choix: ["La nature, la source, la date et le sujet du document","Son opinion personnelle détaillée","La traduction du premier paragraphe","Une longue citation allemande de chaque paragraphe du texte"], bonne: 0, expl: "Présenter.", niv: 2 },
        { q: "Un article écrit « Der Minister sagt, die Lage sei stabil ». Que comprendre ?", choix: ["Le journaliste affirme lui-même que tout va bien dans le pays, selon ses sources","Le ministre donne un ordre","La situation sera stable plus tard","Le journaliste rapporte ces propos sans les reprendre à son compte"], bonne: 3, expl: "Konjunktiv I.", niv: 3 },
        { q: "Pourquoi le dernier élément d'un mot composé est-il le plus important ?", choix: ["Il s'agit d'un verbe","Il se prononce plus fort","Il donne le sens principal et le genre du mot","Il est le seul élément qui se traduit vraiment en français"], bonne: 2, expl: "die Umwelt + die Verschmutzung.", niv: 3 },
        { q: "Qu'est-ce qui permet d'atteindre le niveau B2 en compréhension ?", choix: ["Repérer le sujet général seul","Relever quelques mots isolés","Compter les paragraphes et les lignes du texte","Saisir les détails, la structure et l'implicite"], bonne: 3, expl: "Grille.", niv: 3 },
      ],
    },
    {
      chapitre: "lv-all-15",
      fiche: `## Méthode : expression écrite et expression orale

L'**expression** compte pour la **moitié** de la note : un quart pour l'**écrit**, un quart pour l'**oral** dans le modèle d'évaluation de terminale.

### L'expression écrite
- Environ **120 mots** en LVB (niveau **B1**) et **150 mots** en LVA (niveau **B2**) : vérifier la consigne. On choisit souvent **un sujet sur deux**.
- Types de sujets : texte **argumentatif** (**Ist das Internet eine Chance für die Demokratie?**), **article** pour un journal de lycée (**die Schülerzeitung**), **lettre** ou **courriel**, **post de forum**, **suite de texte**, **journal intime** (**das Tagebuch**), **dialogue**.
- Lettre formelle : **Sehr geehrte Damen und Herren,** … **Mit freundlichen Grüßen** ; lettre à un proche : **Liebe Anna, / Lieber Tom,** … **Viele Grüße** ou **Liebe Grüße**. Après la virgule de l'en-tête, la lettre commence par une **minuscule**.
- Méthode : **analyser** le sujet (type de texte, destinataire, registre **du** ou **Sie**, longueur) ; chercher des idées **directement en allemand** ; **plan** en paragraphes (introduction, deux ou trois arguments avec exemples, conclusion) ; garder **dix minutes** pour relire.

### La relecture : une liste à cocher
- **Place du verbe** : 2e position, inversion après un complément en tête, verbe à la fin des subordonnées.
- **Majuscule** à tous les **noms** (**die Freiheit**, **das Lernen**).
- **Cas** après les prépositions (**mit dem**, **für den**) et **terminaisons des adjectifs**.
- **Auxiliaire** du Perfekt (**ich bin gefahren**) et **participes** (**gesehen**, **besucht**).
- **Accord** sujet-verbe (**die Leute sind**), **genre** des noms appris avec l'article.

### Ce que valorise la grille d'expression écrite
- **Réalisation de la tâche** (type de texte, sujet traité, texte convaincant), **cohérence** (connecteurs, paragraphes), **correction** et **richesse** de la langue (vocabulaire de l'axe, subordonnées, Konjunktiv II, passif).

### L'expression orale (10 minutes après 10 minutes de préparation)
- L'examinateur propose **trois axes** ; le candidat en **choisit un** et reçoit **deux pistes** : deux images, deux citations, ou une image et une citation.
- Pendant **cinq minutes au plus**, il explique **quelle piste illustre le mieux l'axe** et **pourquoi** ; puis vient un **entretien**, élargi au travail fait en classe.
- Préparer des **mots clés** et un **plan**, pas un texte à lire. Présenter les deux pistes, **choisir**, **justifier**, **comparer**, relier à des **exemples** de l'année.
- Décrire une image : **im Vordergrund** (au premier plan), **im Hintergrund** (à l'arrière-plan), **links**, **rechts**, **in der Mitte** ; **Auf dem Bild sieht man…**, **Es scheint, dass…**, **Das Bild zeigt…** ; **die Karikatur** (le dessin de presse), **das Plakat** (l'affiche), **das Foto**.
- Justifier : **Meiner Meinung nach passt das Zitat besser zur Achse, weil…** (**die Achse** = l'axe).
- Pendant l'entretien : **Können Sie die Frage bitte wiederholen?** est accepté ; développer chaque réponse avec **weil** et un exemple ; se **corriger** soi-même est valorisé.
- La grille évalue la **prise de parole en continu**, l'**interaction** et l'**intelligibilité** (prononciation : **ü**, **ö**, **ch**, accent sur la première syllabe dans la plupart des mots).

### L'ETLV (voie technologique)
- Si l'allemand porte l'**ETLV**, l'oral est remplacé par 10 minutes **sans préparation** devant **deux enseignants** : 5 minutes de présentation de ressources **produites par le candidat**, puis un entretien.

### À retenir pour le bac
- Écrit : 120 mots (LVB) ou 150 mots (LVA) ; type de texte, destinataire, du ou Sie ; Sehr geehrte Damen und Herren / Mit freundlichen Grüßen ; relecture : verbe, majuscules, cas.
- Oral : un axe parmi trois, deux pistes, cinq minutes pour choisir et justifier, puis entretien ; im Vordergrund, im Hintergrund.
- Grilles : tâche, cohérence, langue ; continu, interaction, intelligibilité.`,
      cartes: [
        { q: "Quelle longueur viser à l'écrit en LVA ?", r: "Environ 150 mots (niveau B2), selon le sujet." },
        { q: "Comment commencer une lettre formelle ?", r: "Sehr geehrte Damen und Herren," },
        { q: "Comment terminer une lettre formelle ?", r: "Mit freundlichen Grüßen." },
        { q: "Comment commencer une lettre à un ami nommé Tom ?", r: "Lieber Tom," },
        { q: "Que signifie die Schülerzeitung ?", r: "Le journal du lycée, des élèves." },
        { q: "Que signifie das Tagebuch ?", r: "Le journal intime." },
        { q: "Quels points vérifier en priorité à la relecture ?", r: "La place du verbe, les majuscules des noms, les cas et les terminaisons." },
        { q: "Combien dure l'oral du modèle de terminale ?", r: "10 minutes, après 10 minutes de préparation." },
        { q: "Que doit expliquer le candidat à l'oral ?", r: "Quelle piste illustre le mieux l'axe choisi, et pourquoi." },
        { q: "Comment dire « au premier plan » ?", r: "im Vordergrund." },
        { q: "Comment dire « à l'arrière-plan » ?", r: "im Hintergrund." },
        { q: "Que signifie die Achse ?", r: "L'axe." },
        { q: "Comment demander de répéter la question ?", r: "Können Sie die Frage bitte wiederholen?" },
        { q: "Quels sont les trois critères de la grille d'oral ?", r: "La prise de parole en continu, l'interaction et l'intelligibilité." },
      ],
      quiz: [
        { q: "Comment termine-t-on une lettre formelle ?", choix: ["Bis bald","Mit freundlichen Grüßen","Tschüss","Liebe Grüße"], bonne: 1, expl: "Registre soutenu.", niv: 1 },
        { q: "Comment dire « à l'arrière-plan » ?", choix: ["im Vordergrund","im Hintergrund","in der Mitte","auf der Seite"], bonne: 1, expl: "Description d'image.", niv: 1 },
        { q: "Que signifie das Plakat ?", choix: ["Le placard","La plaque","L'affiche","Le plateau"], bonne: 2, expl: "Faux ami.", niv: 1 },
        { q: "Combien de temps dure la prise de parole en continu à l'oral ?", choix: ["Cinq minutes au plus","Une minute au plus","Deux minutes","Trois minutes au plus"], bonne: 0, expl: "Puis entretien.", niv: 1 },
        { q: "Quel mot prend une majuscule dans « die schule beginnt um acht » ?", choix: ["schule","beginnt","acht","um"], bonne: 0, expl: "Majuscule aux noms.", niv: 2 },
        { q: "Comment commence une lettre à une amie nommée Anna ?", choix: ["Lieber Anna,","Sehr geehrte Anna,","Liebe Anna,","Hallo Frau Anna,"], bonne: 2, expl: "Féminin : Liebe.", niv: 2 },
        { q: "Que faut-il noter pendant les 10 minutes de préparation ?", choix: ["Des mots clés et un plan","Un texte complet à lire","La traduction des citations","Les questions à poser au jury"], bonne: 0, expl: "Ne pas lire.", niv: 2 },
        { q: "Quelle phrase justifie un choix à l'oral ?", choix: ["Das Zitat passt besser zur Achse, weil es provoziert ist gut.","Das Zitat besser passt zur Achse, weil es provoziert.","Das Zitat passt besser zur Achse, weil provoziert es.","Das Zitat passt besser zur Achse, weil es provoziert."], bonne: 3, expl: "Verbe à la fin après weil.", niv: 2 },
        { q: "Quelle est la première étape face à un sujet d'expression écrite ?", choix: ["Écrire directement au propre sans faire de brouillon","Repérer le type de texte et le destinataire","Traduire le sujet mot à mot","Compter les mots du document"], bonne: 1, expl: "Analyser.", niv: 2 },
        { q: "Pourquoi chercher ses idées directement en allemand ?", choix: ["Parce que le brouillon est noté","Pour éviter les erreurs dues au mot à mot depuis le français","Parce que le français est interdit au brouillon dans chaque épreuve écrite","Pour écrire plus de mots"], bonne: 1, expl: "Gallicismes.", niv: 3 },
        { q: "Un candidat entend qu'il a dit « weil ich habe keine Zeit ». Que faire ?", choix: ["Se corriger : weil ich keine Zeit habe","Continuer sans rien dire, c'est plus sûr","Demander un dictionnaire","Recommencer depuis le début"], bonne: 0, expl: "Autocorrection valorisée.", niv: 3 },
        { q: "Que valorise la grille d'expression écrite au niveau B2 ?", choix: ["Un texte appris par cœur avant l'épreuve et récité sans faute","Une longue liste d'idées sans exemple","La recopie de phrases du document","Un texte convaincant, cohérent et une langue riche"], bonne: 3, expl: "Tâche, cohérence, langue.", niv: 3 },
      ],
    },
  ],
  methode: [
    {
      "id": "lv-all-m1",
      "mat": "lv-all",
      "titre": "Rendre compte en français d'un document oral",
      "formules": [
        "Rendez compte en français du document que vous avez entendu.",
        "Qui parle, de quoi, et dans quel but ?",
        "Quel est le point de vue de la personne interrogée ?"
      ],
      "vu": [
        "Modèle officiel des évaluations de langues vivantes A et B en terminale (note de service, version consolidée de juin 2025) : document audio ou vidéo d'1 min 30 au plus, trois écoutes, compte rendu en français, libre ou guidé"
      ],
      "pts": "Environ 5 points sur 20 (la compréhension de l'oral et de l'écrit vaut la moitié de la note)",
      "attendu": "Le correcteur veut voir que tu as compris la situation (qui parle, à qui, où, quand), les informations principales dans un ordre logique, puis les détails importants (chiffres, noms, exemples) et le point de vue ou le ton. Il attend des phrases complètes en français, sans traduction mot à mot ni invention.",
      "etapes": [
        "Avant l'écoute : lire le titre et réviser le vocabulaire du thème.",
        "Première écoute : wer, wo, was, et le ton.",
        "Deuxième écoute : idées principales, chiffres (unité avant la dizaine), noms propres.",
        "Troisième écoute : détails, liens logiques (weil, aber, deshalb), opinion, négations.",
        "Rédiger : présenter le document, puis restituer les idées dans un ordre logique.",
        "Finir par l'intention ou le point de vue de la personne interrogée."
      ],
      "mots": [
        "la personne interrogée explique que",
        "selon elle",
        "il critique",
        "elle regrette",
        "le reportage montre",
        "en conclusion, il estime que"
      ],
      "pieges": [
        "Écrire une liste de mots sans phrases.",
        "Confondre 25 et 52 (fünfundzwanzig : l'unité vient d'abord).",
        "Ne pas entendre une négation (nicht, kein, nie) et comprendre le contraire.",
        "Écrire en allemand alors que le compte rendu se fait en français."
      ],
      "cas": "Document inventé : un reportage radio d'une minute. Une journaliste de Munich interroge Lena, 17 ans, qui fait du bénévolat le samedi dans une épicerie solidaire (Tafel). Lena raconte qu'elle a commencé il y a deux ans, pour son CV. Aujourd'hui elle y va surtout pour les rencontres : des retraités, des étudiants, des familles. Elle regrette que de plus en plus de gens aient besoin de la Tafel (52 familles de plus que l'an dernier) et souhaite que l'école compte ce travail comme un stage.",
      "question": "Rédige en français le compte rendu de ce reportage, comme si tu l'avais entendu.",
      "modele": "Il s'agit d'un reportage radio dans lequel une journaliste de Munich interroge Lena, une lycéenne de 17 ans. Le sujet est son engagement bénévole le samedi dans une épicerie solidaire, une Tafel. Lena explique qu'elle a commencé il y a deux ans pour enrichir son CV, mais qu'aujourd'hui elle y va surtout pour les rencontres avec des personnes très différentes : retraités, étudiants, familles. Elle s'inquiète cependant de la hausse du nombre de personnes qui ont besoin d'aide : 52 familles de plus que l'année précédente. Enfin, elle propose que l'école reconnaisse ce bénévolat comme un stage. Son point de vue est enthousiaste mais lucide sur la pauvreté.",
      "grille": [
        "Nature du document et personne interrogée présentées",
        "Engagement bénévole et lieu compris",
        "Évolution de sa motivation restituée",
        "Chiffre de 52 familles correct",
        "Proposition sur l'école relevée",
        "Point de vue identifié"
      ]
    },
    {
      "id": "lv-all-m2",
      "mat": "lv-all",
      "titre": "Comprendre un texte écrit et répondre aux questions",
      "formules": [
        "Rendez compte du texte en français ou en allemand selon la consigne.",
        "Wie reagiert die Hauptfigur?",
        "Erklären Sie den Titel.",
        "Belegen Sie Ihre Antwort mit einem Zitat."
      ],
      "vu": [
        "Modèle officiel des évaluations de langues vivantes A et B en terminale (note de service, version consolidée de juin 2025) : un ou deux textes, compte rendu libre ou guidé en français ou en allemand selon la consigne"
      ],
      "pts": "Environ 5 points sur 20",
      "attendu": "Le correcteur vérifie la compréhension globale (sujet, personnages, situation), les informations précises et l'implicite : sentiments, ironie, intention de l'auteur. Les réponses sont formulées avec ses propres mots et justifiées par de courtes citations.",
      "etapes": [
        "Lire la source, le titre et la date avant le texte.",
        "Première lecture en entier pour le sens général.",
        "Dans chaque phrase difficile, chercher le verbe conjugué et la particule à la fin.",
        "Décomposer les mots composés et deviner les mots inconnus par le contexte.",
        "Répondre avec ses mots, puis justifier par une courte citation entre guillemets."
      ],
      "mots": [
        "die Hauptfigur",
        "der Erzähler",
        "Der Text zeigt, dass",
        "Er fühlt sich",
        "einsam",
        "enttäuscht",
        "Das sieht man in Zeile",
        "ironisch"
      ],
      "pieges": [
        "Recopier de longs passages au lieu de reformuler.",
        "Oublier la particule séparable et se tromper de verbe.",
        "Confondre l'avis du narrateur et celui d'un personnage.",
        "Prendre au pied de la lettre une phrase ironique."
      ],
      "cas": "Extrait inventé : « Opa Karl hatte vierzig Jahre in der Fabrik gearbeitet. Als sie schloss, bekam er eine Karte: \"Vielen Dank für Ihren wertvollen Beitrag!\" Daneben lachte eine kleine gelbe Sonne. Er hängte die Karte an die Wand, direkt neben die Stromrechnung, die er nicht bezahlen konnte. \"Wertvoll\", sagte er jeden Abend und lachte. Aber es war kein richtiges Lachen. »",
      "question": "Wie reagiert Opa Karl auf die Karte? Antworten Sie auf Deutsch und belegen Sie Ihre Antwort mit einem Zitat.",
      "modele": "Opa Karl ist bitter und enttäuscht. Die Firma dankt ihm für seinen \"wertvollen Beitrag\", aber nach vierzig Jahren Arbeit und der Schließung der Fabrik klingt diese Karte leer. Er hängt sie \"direkt neben die Stromrechnung, die er nicht bezahlen konnte\": Der Kontrast zwischen den freundlichen Worten und seinen Geldproblemen ist ironisch. Sein Lachen ist \"kein richtiges Lachen\", es zeigt seine Traurigkeit.",
      "grille": [
        "Réaction identifiée (amertume, déception)",
        "Ironie du mot wertvoll comprise",
        "Contraste carte et facture relevé",
        "Citation exacte entre guillemets",
        "Réponse reformulée en allemand correct"
      ]
    },
    {
      "id": "lv-all-m3",
      "mat": "lv-all",
      "titre": "Écrire un texte argumentatif",
      "formules": [
        "Was denken Sie darüber?",
        "Ist… eine Chance oder eine Gefahr?",
        "Sollte man…? Nehmen Sie Stellung.",
        "Inwiefern…?"
      ],
      "vu": [
        "Modèle officiel des évaluations de langues vivantes A et B en terminale (note de service, version consolidée de juin 2025) : expression écrite d'environ 120 mots en LVB et 150 mots en LVA, souvent un sujet au choix sur deux"
      ],
      "pts": "Environ 5 points sur 20 (l'expression écrite et orale vaut l'autre moitié)",
      "attendu": "Le correcteur attend un texte qui répond à la question, organisé en paragraphes, avec un point de vue clair, nuancé et illustré par des exemples précis (documents du dossier, culture vue en classe). La langue doit être correcte, surtout la place du verbe, et variée : connecteurs, subordonnées, Konjunktiv II, passif.",
      "etapes": [
        "Souligner les mots clés et la forme de la question.",
        "Chercher deux ou trois arguments directement en allemand, chacun avec un exemple.",
        "Introduction : accroche et reformulation de la question.",
        "Paragraphes : un argument, un exemple, une conséquence, avec des connecteurs variés.",
        "Conclusion : réponse claire et ouverture.",
        "Relire : place du verbe, majuscules, cas, nombre de mots."
      ],
      "mots": [
        "Heutzutage",
        "Einerseits",
        "Andererseits",
        "Außerdem",
        "zwar… aber",
        "Deshalb",
        "Meiner Meinung nach",
        "Zusammenfassend"
      ],
      "pieges": [
        "Réciter un texte appris par cœur à côté de la question.",
        "Mettre le verbe en troisième position après un connecteur comme deshalb.",
        "Oublier les majuscules des noms.",
        "Donner des idées sans aucun exemple."
      ],
      "cas": "Axe « Citoyenneté et mondes virtuels ». Sujet : « Sind soziale Netzwerke eine Chance für die Demokratie? » (environ 150 mots).",
      "question": "Rédige le texte en environ 150 mots.",
      "modele": "Heutzutage informieren sich viele Jugendliche vor allem in sozialen Netzwerken. Sind sie eine Chance für die Demokratie? Einerseits können sie viele Menschen schnell mobilisieren. Die Bewegung Fridays for Future hat sich zum Beispiel im Internet organisiert, und Tausende junge Leute sind auf die Straße gegangen. Außerdem kann jeder seine Meinung sagen, auch wenn er nicht berühmt ist. Andererseits verbreiten sich Falschmeldungen sehr schnell. Viele Nutzer bleiben in ihrer Filterblase und lesen nur, was sie schon denken. Deshalb ist die Debatte oft aggressiv, und Hassrede ist ein großes Problem. Ein Klick ersetzt auch keine echte Wahl. Zusammenfassend bin ich der Meinung, dass soziale Netzwerke zwar eine Chance sind, aber nur, wenn man Informationen überprüft und auch offline aktiv wird. Wenn alle Schüler Medienkompetenz lernen würden, wäre das Internet ein besserer Ort für die Demokratie.",
      "grille": [
        "Réponse à la question posée",
        "Deux points de vue opposés",
        "Exemples précis et culturels",
        "Connecteurs variés et paragraphes",
        "Place du verbe et cas corrects",
        "Longueur respectée"
      ]
    },
    {
      "id": "lv-all-m4",
      "mat": "lv-all",
      "titre": "Écrire une lettre, un article ou une suite de texte",
      "formules": [
        "Schreiben Sie einen Brief an…",
        "Schreiben Sie einen Artikel für die Schülerzeitung.",
        "Schreiben Sie die Fortsetzung der Geschichte.",
        "Schreiben Sie einen Tagebucheintrag."
      ],
      "vu": [
        "Modèle officiel des évaluations de langues vivantes A et B en terminale (note de service, version consolidée de juin 2025) : expression écrite, souvent deux sujets au choix dont un sujet d'invention en lien avec le texte"
      ],
      "pts": "Environ 5 points sur 20",
      "attendu": "Le correcteur vérifie le respect du type de texte (titre pour un article, formules d'ouverture et de clôture pour une lettre, date et première personne pour un journal), le registre adapté au destinataire (du ou Sie) et la cohérence avec le document de départ.",
      "etapes": [
        "Identifier le type de texte, le destinataire et le registre (du ou Sie).",
        "Reprendre les éléments du document (personnages, lieu, époque).",
        "Respecter les codes : titre, formules de la lettre, date du journal.",
        "Organiser en paragraphes ; récit au Präteritum ou au Perfekt, dialogue au présent.",
        "Relire et compter les mots."
      ],
      "mots": [
        "Sehr geehrte Damen und Herren",
        "Sehr geehrter Herr…",
        "Mit freundlichen Grüßen",
        "Liebe…",
        "Viele Grüße",
        "Liebes Tagebuch",
        "Ich schreibe Ihnen, weil"
      ],
      "pieges": [
        "Oublier les formules d'ouverture ou de clôture.",
        "Mélanger du et Sie dans la même lettre.",
        "Commencer la lettre par une majuscule après la virgule de l'en-tête.",
        "Écrire un résumé au lieu d'une suite."
      ],
      "cas": "Axe « Espace privé et espace public ». Ton lycée veut installer des caméras dans les couloirs. Écris une lettre d'environ 150 mots au directeur, Herr Becker, pour donner ton avis.",
      "question": "Rédige la lettre en environ 150 mots.",
      "modele": "Sehr geehrter Herr Becker,\n\nich schreibe Ihnen als Klassensprecher, weil die Schule Kameras in den Fluren installieren möchte.\n\nZwar verstehe ich Ihre Sorge: Letztes Jahr wurden mehrere Fahrräder gestohlen, und manche Schüler fühlen sich nicht sicher. Kameras könnten Diebe abschrecken.\n\nTrotzdem bin ich dagegen. Eine Schule sollte ein Ort des Vertrauens sein. Wer immer beobachtet wird, verhält sich anders. In Deutschland wissen wir aus der Geschichte, wohin Überwachung führen kann: Der Film \"Das Leben der Anderen\" zeigt, wie die Stasi das Privatleben zerstört hat. Außerdem stellt sich die Frage des Datenschutzes: Wer sieht die Aufnahmen, und wie lange werden sie gespeichert?\n\nIch schlage deshalb einen Kompromiss vor: Kameras nur am Fahrradständer und eine Abstimmung im Schülerrat.\n\nMit freundlichen Grüßen\n\nTim Wagner, Klassensprecher der 12b",
      "grille": [
        "Formules d'ouverture et de clôture adaptées",
        "Objet de la lettre annoncé",
        "Argument concédé puis réfuté (zwar… trotzdem)",
        "Référence culturelle pertinente",
        "Proposition concrète",
        "Registre Sie respecté"
      ]
    },
    {
      "id": "lv-all-m5",
      "mat": "lv-all",
      "titre": "Prise de parole sur deux pistes et entretien",
      "formules": [
        "Welches Dokument illustriert die Achse am besten? Warum?",
        "Können Sie das genauer erklären?",
        "Was haben Sie im Unterricht zu dieser Achse gemacht?",
        "Sind Sie mit dem Zitat einverstanden?"
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
        "Annoncer son choix et le justifier par deux raisons (weil, denn).",
        "Relier à l'axe et à une œuvre ou un événement étudié.",
        "Conclure, puis dans l'entretien développer chaque réponse avec un exemple."
      ],
      "mots": [
        "Auf dem Bild sieht man",
        "im Vordergrund",
        "im Hintergrund",
        "Das Zitat bedeutet",
        "passt besser zur Achse",
        "im Gegensatz zu",
        "Das erinnert mich an"
      ],
      "pieges": [
        "Lire ses notes mot à mot.",
        "Décrire les deux documents sans faire de choix.",
        "Répondre par ja ou nein dans l'entretien.",
        "Ne citer aucun exemple étudié dans l'année."
      ],
      "cas": "Axe choisi : « Territoire et mémoire ». Piste 1 : une photo décrite ainsi : un passant baisse les yeux vers trois Stolpersteine brillants dans un trottoir de Hambourg. Piste 2 : la citation inventée « Wer die Vergangenheit vergisst, hat keine Zukunft. »",
      "question": "Rédige en allemand l'essentiel de ta prise de parole (environ 150 mots).",
      "modele": "Ich habe die Achse \"Territoire et mémoire\" gewählt. Auf dem Foto sieht man im Vordergrund drei Stolpersteine in einem Gehweg in Hamburg; ein Passant bleibt stehen und liest die Namen. Das Zitat sagt, dass man ohne Erinnerung keine Zukunft hat. Meiner Meinung nach illustriert das Foto die Achse besser, weil es zeigt, wie die Erinnerung im Alltag präsent ist. Die Stolpersteine von Gunter Demnig liegen seit 1992 vor den Häusern der Opfer des Nationalsozialismus, und man \"stolpert\" mit dem Kopf und dem Herzen darüber. Im Gegensatz zum Holocaust-Mahnmal in Berlin sind sie klein, aber überall. Das Zitat ist zwar richtig, aber sehr allgemein. Das Foto erinnert mich auch an den Kniefall von Willy Brandt im Jahr 1970: Erinnern bedeutet, Verantwortung zu übernehmen. Zusammenfassend zeigt das Foto, dass Erinnerungskultur in Deutschland eine Aufgabe für jeden Bürger ist.",
      "grille": [
        "Axe et pistes présentés",
        "Choix annoncé et justifié",
        "Exemples culturels précis (dates, noms)",
        "Comparaison et nuance",
        "Conclusion claire",
        "Place du verbe correcte et vocabulaire de description"
      ]
    }
  ],
  sujets: [
    {
      id: "lv-all-s1", matiere: 'bioeco', titre: "Évaluation blanche d'allemand, axe « Territoire et mémoire » (sujet inventé)", duree: 90,
      enonce: `Évaluation blanche inventée pour l'entraînement, à la forme du modèle officiel de terminale (LVA et LVB). Les textes, le script audio et les personnes citées sont imaginaires. Faire lire le script à voix haute par quelqu'un d'autre, à vitesse normale, sans le regarder soi-même.

Dossier : « Erinnern im Alltag ». Axe : Territoire et mémoire.

PREMIER TEMPS : ÉCRIT (1 h 30)

PARTIE 1. Compréhension de l'oral (environ 15 minutes, trois écoutes espacées d'une minute)
Script à faire lire (environ 1 minute) :
„Guten Tag, hier ist Radio Leipzig. In der Südstraße werden heute vier neue Stolpersteine verlegt. Die Idee kommt von einer Klasse des Goethe-Gymnasiums. Jonas, achtzehn Jahre alt, erzählt: ‚Im Geschichtsunterricht haben wir im Archiv nach der Familie Rosenthal gesucht. Sie hat bis 1938 in diesem Haus gewohnt. Wir haben Briefe gefunden, Fotos, sogar ein Zeugnis von der Tochter Ruth.' Am Anfang fanden einige Nachbarn die Steine nicht gut. ‚Sie sagten: Das ist doch so lange her', erklärt Jonas. ‚Aber heute sind viele gekommen. Eine Nachbarin hat sogar Blumen mitgebracht.' Die Klasse möchte jetzt eine Internetseite machen, damit auch andere Schulen die Geschichte der Familie kennenlernen."
Consigne : rends compte en français de ce que tu as compris (qui parle, de quoi, faits, réactions, projet).

PARTIE 2. Compréhension de l'écrit (environ 35 minutes)
Texte inventé, extrait d'un roman pour adolescents :
„Jeden Morgen ging Mia an dem kleinen Messingstein vor der Bäckerei vorbei, ohne ihn zu sehen. Ihr Handy zeigte ihr den schnellsten Weg zur Schule, nicht die Namen auf dem Boden.
An einem Montag fiel ihr Handy genau auf den Stein. Mia kniete sich hin, und zum ersten Mal las sie: ‚Hier wohnte Paul Weiss, Jahrgang 1925, deportiert 1942, ermordet in Auschwitz.' Paul war siebzehn gewesen. So alt wie sie.
In der Schule konnte sie sich nicht konzentrieren. Am Abend suchte sie im Internet, fand aber nur ein Datum und eine Adresse. ‚Ein Mensch kann doch nicht nur ein Datum sein', dachte sie.
Am nächsten Morgen kam sie zehn Minuten früher. Sie nahm ein Taschentuch aus der Tasche und putzte den Stein, bis er in der Sonne glänzte."
Questions (réponds en allemand, ou en français si la consigne le demande) :
a. Wer ist Mia und was macht sie jeden Morgen?
b. Warum bemerkt sie den Stein plötzlich? Was erfährt sie über Paul Weiss?
c. Erklären Sie den Satz: „Ein Mensch kann doch nicht nur ein Datum sein."
d. Was zeigt das Ende des Textes über Mias Entwicklung?

PARTIE 3. Expression écrite (environ 40 minutes) : traite UN des deux sujets, environ 150 mots en LVA, 120 en LVB.
Sujet A. Braucht man heute noch Gedenkorte wie das Holocaust-Mahnmal oder die Stolpersteine? Nehmen Sie Stellung.
Sujet B. Sie sind Mia. Am Abend schreiben Sie in Ihr Tagebuch: Was ist heute passiert, und was wollen Sie jetzt tun?

DEUXIÈME TEMPS : ORAL (10 minutes après 10 minutes de préparation)
Choisis un axe parmi : « Territoire et mémoire », « Fictions et réalités », « Deutsch, Sprache der Dichter, Denker und Künstler ». Pour « Territoire et mémoire », les deux pistes sont :
Piste 1 : une image décrite ainsi : des touristes prennent des selfies en souriant devant une fresque de l'East Side Gallery.
Piste 2 : la citation inventée « Eine Mauer fällt schneller als die Mauer in den Köpfen. »
Explique pendant cinq minutes au plus quelle piste illustre le mieux l'axe et pourquoi, puis réponds aux questions d'un camarade qui joue l'examinateur.`,
      corrige: `Éléments attendus (corrigé indicatif).

PARTIE 1 (compréhension de l'oral). Il s'agit d'un reportage de Radio Leipzig. Ce jour-là, quatre nouveaux Stolpersteine sont posés dans la Südstraße. L'idée vient d'une classe du lycée Goethe. Jonas, 18 ans, raconte qu'en cours d'histoire les élèves ont fait des recherches aux archives sur la famille Rosenthal, qui a habité cette maison jusqu'en 1938 ; ils ont trouvé des lettres, des photos et même un bulletin scolaire de la fille, Ruth. Au début, certains voisins étaient contre (« c'est si loin »), mais aujourd'hui beaucoup sont venus, et une voisine a apporté des fleurs. La classe veut créer un site internet pour que d'autres écoles découvrent l'histoire de la famille. Niveau B1 : pose des Stolpersteine, projet d'une classe, recherches. Niveau B2 : en plus, la date de 1938, les documents trouvés, l'évolution des voisins et le projet de site avec son but.

PARTIE 2 (compréhension de l'écrit).
a. Mia ist eine Schülerin. Jeden Morgen geht sie an einem Stolperstein vor der Bäckerei vorbei, ohne ihn zu sehen, weil sie auf ihr Handy schaut.
b. Ihr Handy fällt auf den Stein, sie kniet sich hin und liest den Text. Paul Weiss wurde 1925 geboren, 1942 deportiert und in Auschwitz ermordet; er war siebzehn, so alt wie Mia.
c. Mia findet im Internet nur ein Datum und eine Adresse. Sie will wissen, wer Paul als Mensch war: Ein Leben ist mehr als Zahlen. Die Erinnerung soll den Opfern ihre Identität zurückgeben.
d. Mia ändert sich: Zuerst war sie gleichgültig, jetzt übernimmt sie Verantwortung. Sie kommt früher und putzt den Stein, bis er „glänzte": Die Erinnerung wird wieder sichtbar.

PARTIE 3 (expression écrite).
Sujet A : introduction qui pose la question ; d'un côté, les derniers témoins disparaissent, les lieux de mémoire transmettent l'histoire (Holocaust-Mahnmal, 2005 ; Stolpersteine depuis 1992 ; Kniefall de Brandt, 1970) et protègent contre l'extrême droite ; de l'autre, le risque d'une mémoire devenue décor touristique ou indifférente ; conclusion nuancée : ils restent nécessaires s'ils sont expliqués et vivants (projets scolaires, sites internet). Connecteurs (einerseits, andererseits, zwar… aber), verbe à la fin des subordonnées, Konjunktiv II.
Sujet B : Liebes Tagebuch, date, première personne, Präteritum ou Perfekt pour raconter, cohérence avec le texte (le téléphone, la boulangerie, Paul Weiss, 17 ans), sentiments (schockiert, traurig, nachdenklich), projets (ich will…, ich werde…), éventuellement Konjunktiv II (Wenn ich mehr über Paul wüsste…).

ORAL. Présentation des deux pistes ; choix argumenté (par exemple la citation, qui rappelle qu'après la chute du mur en 1989 les différences entre l'Est et l'Ouest restent, ou la photo, qui pose la question d'une mémoire devenue touristique) ; exemples vus en classe (13 août 1961, 9 novembre 1989, Ostalgie, Good Bye, Lenin!) ; vocabulaire : im Vordergrund, es scheint, dass, im Gegensatz zu. Dans l'entretien, réponses développées avec weil et un exemple, verbe bien placé.`,
      grille: [{"c":"Compréhension de l'oral : situation, recherches, réaction des voisins, projet","pts":5},{"c":"Compréhension de l'écrit : personnage, faits sur Paul Weiss, sens de la phrase, évolution de Mia","pts":5},{"c":"Expression écrite : tâche réalisée, cohérence, correction et richesse de la langue","pts":5},{"c":"Expression orale : prise de parole organisée, interaction, intelligibilité","pts":5}],
    },
  ],
};
