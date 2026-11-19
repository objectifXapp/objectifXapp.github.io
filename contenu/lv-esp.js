// Espagnol, langue vivante A ou B (enseignement commun), terminale, toutes les voies. Sources : voir matiere.sources.
// Programme : enseignement commun de langues vivantes du cycle terminal (arrêté du 17 janvier 2019, BO spécial n° 1 du 22 janvier 2019),
// huit axes culturels. Niveaux visés en fin de terminale : B2 en langue A, B1 en langue B (article D. 312-16 du Code de l'éducation).
// Évaluation : contrôle continu (moyennes annuelles de première et de terminale, coefficient 6 par langue sur le cycle) et attestation
// de langues vivantes. Format de l'évaluation de fin de terminale : note de service du 28 juillet 2021, version consolidée de juin 2025
// (évaluations ponctuelles des candidats individuels, reprises en classe comme modèle des devoirs).
// Ne pas confondre avec LLCER espagnol (llcer-esp.js), qui est une spécialité.
export default {
  matiere: {
    id: 'lv-esp',
    nom: 'Espagnol (langue vivante A ou B)',
    voie: 'tous',
    epreuve: {"type":"controle continu","quand":"toute l'année (moyennes du bulletin)","note":"En classe, l'espagnol est évalué en contrôle continu : les moyennes annuelles de première et de terminale comptent pour le bac (coefficient 6 par langue sur les deux ans, 3 par année). Une attestation de langues vivantes, qui donne le niveau du Cadre européen (CECRL), est délivrée à tous les candidats pour la langue A et la langue B. Niveau visé en fin de terminale : B2 en langue A, B1 en langue B. Les devoirs reprennent souvent le format officiel de l'évaluation de fin de terminale (celui des candidats qui ne suivent pas de cours) : un écrit de 1 h 30, avec la compréhension d'un document audio ou vidéo de 1 min 30 au plus, écouté trois fois, la compréhension d'un ou deux textes (2 500 à 4 300 signes) et une expression écrite en espagnol ; puis un oral de 10 minutes après 10 minutes de préparation : le candidat choisit un axe parmi trois, explique pendant 5 minutes au plus quel document ou quelle citation l'illustre le mieux, puis répond aux questions. Compréhension et expression comptent à parts égales. En voie technologique, l'ETLV peut remplacer cet oral."},
    sources: [
      "https://eduscol.education.fr/document/50429/download",
      "https://eduscol.education.gouv.fr/5664/modalites-d-evaluation-de-langues-vivantes-aux-baccalaureats-general-et-technologique-et-attestation-de-langues",
      "https://eduscol.education.fr/document/67730/download",
    ],
    chapitres: [
      { id: "lv-esp-1", t: "L'évaluation en espagnol au bac 2027", theme: "Méthode" },
      { id: "lv-esp-2", t: "Comprendre un document écrit ou oral", theme: "Méthode" },
      { id: "lv-esp-3", t: "S'exprimer : argumenter à l'écrit et à l'oral", theme: "Méthode" },
      { id: "lv-esp-4", t: "Ser, estar, hay et les verbes comme gustar", theme: "Grammaire" },
      { id: "lv-esp-5", t: "Raconter au passé : indefinido, imperfecto, perfecto", theme: "Grammaire" },
      { id: "lv-esp-6", t: "Le subjonctif présent et l'impératif", theme: "Grammaire" },
      { id: "lv-esp-7", t: "Concordance des temps, hypothèse et discours rapporté", theme: "Grammaire" },
      { id: "lv-esp-8", t: "Axes 1 et 2 : identités et échanges ; espace privé et espace public", theme: "Axes culturels" },
      { id: "lv-esp-9", t: "Axes 3 et 4 : art et pouvoir ; citoyenneté et mondes virtuels", theme: "Axes culturels" },
      { id: "lv-esp-10", t: "Axes 5 et 6 : fictions et réalités ; innovations scientifiques et responsabilité", theme: "Axes culturels" },
      { id: "lv-esp-11", t: "Axes 7 et 8 : diversité et inclusion ; territoire et mémoire", theme: "Axes culturels" },
      { id: "lv-esp-12", t: "Le monde hispanique : repères et pièges de langue", theme: "Vocabulaire" },
    ],
  },
  paquets: [
    { chapitre: 'lv-esp-1',
      fiche: `## L'évaluation en espagnol au bac 2027

L'espagnol du tronc commun (langue A ou langue B) n'a pas d'épreuve finale en juin pour les élèves qui suivent des cours : il compte en **contrôle continu**. Ce sont donc tes notes de l'année qui font la note du bac. Les devoirs reprennent en général le format officiel décrit ci-dessous : le connaître, c'est savoir ce que le professeur attend.

### Ce qui compte pour le bac
- Les **moyennes annuelles** de première et de terminale, avec un **coefficient 6** par langue sur les deux années (3 par an). Une langue vivante pèse autant que l'histoire-géographie.
- Une **attestation de langues vivantes** est délivrée à tous les candidats pour la langue A et la langue B. Elle indique le niveau atteint dans le **Cadre européen commun de référence pour les langues** (CECRL).
- Niveau visé en fin de terminale : **B2** en langue A (« avancé »), **B1** en langue B (« seuil »).

### Les niveaux du CECRL en bref
- **A2** : comprendre et dire des choses simples et familières.
- **B1** : comprendre l'essentiel d'un document clair, raconter, donner son avis simplement.
- **B2** : comprendre les idées principales d'un document complexe, argumenter, nuancer, réagir avec aisance.

### Les quatre activités évaluées
- **Compréhension de l'oral** (CO) : un document audio ou vidéo de **1 min 30** au plus, écouté **trois fois**, avec une minute entre deux écoutes. On prend des notes, puis on en rend compte **en français**.
- **Compréhension de l'écrit** (CE) : un ou deux textes, de **2 500 à 4 300 signes** en tout. On en rend compte en français ou en espagnol, selon la consigne, de façon libre ou guidée.
- **Expression écrite** (EE) : en espagnol, une ou deux questions liées au thème du dossier, parfois à partir d'une image.
- **Expression orale** (EO) : 10 minutes de préparation, 10 minutes d'oral. On choisit **un axe parmi trois** ; on explique pendant **5 minutes au plus** quel document ou quelle citation illustre le mieux cet axe, et pourquoi ; puis un entretien.

### Le format officiel de fin de terminale
- **Premier temps : écrit de 1 h 30** (sans compter les écoutes) : CO et CE, puis EE. Tout le sujet est donné au début : on gère son temps.
- **Second temps : oral** de 10 minutes.
- **Compréhension et expression comptent à parts égales**, notées avec des grilles publiées sur Éduscol.
- C'est le format des **candidats individuels** (qui ne suivent pas de cours) et des évaluations de remplacement ; en classe, le professeur s'en inspire.
- En voie technologique, l'**ETLV** (enseignement technologique en langue vivante) peut remplacer l'oral : 5 minutes de présentation d'un projet de la spécialité, puis un entretien.

### Ce que les grilles valorisent
- En compréhension : repérer le **thème**, les **idées principales**, les **détails significatifs**, le **point de vue** et l'**implicite** (ironie, intention).
- En expression : un propos **clair et organisé**, des **arguments** et des **exemples**, une langue **correcte et variée** (temps, subjonctif, connecteurs).
- À l'oral : parler sans lire, **réagir** aux questions, relier le document à l'**axe** du programme.

### À retenir pour le bac
- Contrôle continu : moyennes de première et de terminale, coefficient 6.
- Niveau visé : B2 en langue A, B1 en langue B ; attestation pour tous.
- Écrit de 1 h 30 : CO (3 écoutes), CE, EE en espagnol.
- Oral : un axe parmi trois, 5 minutes de présentation, puis entretien.
- Piège : traduire mot à mot au lieu de rendre compte des idées.`,
      cartes: [
        { q: "Comment l'espagnol LVA ou LVB compte-t-il au bac ?", r: "En contrôle continu : les moyennes annuelles de première et de terminale." },
        { q: "Coefficient d'une langue vivante sur le cycle ?", r: "6 (3 en première, 3 en terminale)." },
        { q: "Niveau visé en langue A ?", r: "B2, niveau avancé." },
        { q: "Niveau visé en langue B ?", r: "B1, niveau seuil." },
        { q: "Qu'est-ce que le CECRL ?", r: "Le Cadre européen commun de référence pour les langues, qui définit les niveaux de A1 à C2." },
        { q: "Attestation de langues vivantes ?", r: "Un document délivré à tous les candidats, qui indique le niveau atteint en langue A et B." },
        { q: "Durée maximale du document de compréhension de l'oral ?", r: "1 min 30, écouté trois fois avec une minute entre les écoutes." },
        { q: "En quelle langue rend-on compte du document oral ?", r: "En français." },
        { q: "Longueur des textes de compréhension de l'écrit ?", r: "De 2 500 à 4 300 signes en tout, pour un ou deux textes." },
        { q: "Durée de l'écrit de fin de terminale ?", r: "1 h 30, sans compter les écoutes." },
        { q: "Déroulement de l'oral ?", r: "10 minutes de préparation ; choix d'un axe parmi trois ; 5 minutes de présentation au plus ; entretien." },
        { q: "Que présente-t-on à l'oral ?", r: "Le document ou la citation qui illustre le mieux l'axe choisi, et pourquoi." },
        { q: "ETLV ?", r: "Enseignement technologique en langue vivante : en voie technologique, il peut remplacer l'oral." },
        { q: "Poids de la compréhension et de l'expression ?", r: "Elles comptent à parts égales." },
      ],
      quiz: [
        { q: "Pour un élève en classe, l'espagnol LVA compte au bac :", choix: ["par une épreuve écrite de 4 h en juin", "en contrôle continu, par les moyennes annuelles", "grâce à un oral en fin de première", "au grand oral"], bonne: 1, expl: "Moyennes de première et de terminale.", niv: 1 },
        { q: "Le niveau visé en langue B en fin de terminale est :", choix: ["B2", "C1", "B1", "A2"], bonne: 2, expl: "B2 pour la langue A.", niv: 2 },
        { q: "Le document de compréhension de l'oral est écouté :", choix: ["autant de fois qu'on le souhaite", "une seule fois, sans prise de notes", "deux fois, sans pause entre les écoutes", "trois fois, avec une minute entre les écoutes"], bonne: 3, expl: "On peut prendre des notes pendant les écoutes.", niv: 2 },
        { q: "Quel est le coefficient d'une langue vivante sur les deux années du cycle ?", choix: ["6", "8", "10", "12"], bonne: 0, expl: "3 en première et 3 en terminale.", niv: 1 },
        { q: "On rend compte du document oral :", choix: ["en anglais", "en espagnol", "en français", "par un dessin légendé"], bonne: 2, expl: "La compréhension se vérifie en français.", niv: 2 },
        { q: "À l'oral, le candidat a choisi l'axe « Art et pouvoir ». Que doit-il faire d'abord ?", choix: ["Dire quel document ou citation illustre le mieux l'axe, et pourquoi", "Réciter une liste de vocabulaire de l'axe", "Lire à voix haute les deux documents proposés", "Traduire la citation mot à mot en français"], bonne: 0, expl: "5 minutes au plus, puis un entretien.", niv: 3 },
        { q: "Que donne l'attestation de langues vivantes ?", choix: ["une note de grand oral", "le niveau atteint, pour chaque langue, selon le CECRL", "la moyenne générale du bac", "un diplôme de traducteur"], bonne: 1, expl: "Elle est délivrée à tous les candidats.", niv: 1 },
        { q: "L'écrit de fin de terminale dure :", choix: ["4 h, écoutes comprises", "3 h, sans compter les écoutes", "30 minutes en tout", "1 h 30, sans compter les écoutes"], bonne: 3, expl: "CO, CE puis EE.", niv: 2 },
        { q: "Un élève comprend les idées principales d'un article complexe et argumente avec nuance. Son niveau est plutôt :", choix: ["B1", "A1", "A2", "B2"], bonne: 3, expl: "B1 : l'essentiel d'un document clair, un avis simple.", niv: 3 },
        { q: "Dans les grilles, compréhension et expression :", choix: ["comptent pour 1/4 et 3/4", "comptent à parts égales", "ne sont pas notées ensemble", "ne comptent qu'à l'oral"], bonne: 1, expl: "Note globale sur 20.", niv: 2 },
        { q: "En voie technologique, l'ETLV peut remplacer :", choix: ["l'oral de la langue vivante", "l'écrit de philosophie", "le grand oral", "l'épreuve de spécialité"], bonne: 0, expl: "Présentation d'un projet de la spécialité, puis entretien.", niv: 1 },
        { q: "Quelle copie de compréhension est la meilleure ?", choix: ["Elle recopie les phrases du texte en espagnol", "Elle traduit le texte phrase par phrase", "Elle donne le thème, les idées, les détails utiles et le point de vue de l'auteur", "Elle donne surtout l'avis personnel de l'élève"], bonne: 2, expl: "On rend compte du sens, on ne traduit pas.", niv: 3 },
      ] },
    { chapitre: 'lv-esp-2',
      fiche: `## Comprendre un document écrit ou oral

En compréhension, on ne te demande pas de tout traduire : on te demande de montrer que tu as saisi **de quoi parle le document, ce qu'il dit et dans quel but**. Une méthode simple permet de comprendre beaucoup même avec des mots inconnus.

### Avant de lire ou d'écouter : anticiper
- Lire le **titre**, la **source** (journal, radio, pays, date), le **chapeau**, regarder l'**image** : ils annoncent souvent le thème.
- Lire les **consignes** avant le document : elles disent ce qu'il faut chercher.
- Se demander à quel **axe** du programme le document se rattache.

### Pendant : repérer l'essentiel
- Les questions de base : **¿quién?** (qui), **¿qué?** (quoi), **¿dónde?** (où), **¿cuándo?** (quand), **¿por qué?** (pourquoi), **¿cómo?** (comment).
- Les **mots transparents** : **la emigración**, **la tecnología**, **el gobierno**. Ils aident à deviner le sens.
- Les **mots de la même famille** : **trabajar**, **el trabajo**, **el trabajador**.
- Les **chiffres et dates** : **mil novecientos treinta y seis** (1936), **el cuarenta por ciento** (40 %).
- Les **connecteurs**, qui montrent la logique : **sin embargo** ou **no obstante** (cependant), **además** (de plus), **por eso** ou **por lo tanto** (c'est pourquoi, donc), **aunque** (bien que, même si), **mientras que** (alors que), **en cambio** (en revanche), **a pesar de** (malgré), **es decir** (c'est-à-dire), **sobre todo** (surtout).

### Comprendre le point de vue
- Qui parle ? Un témoin, un journaliste, un expert, un personnage ?
- Les marques d'opinion : **según** (selon), **creo que**, **me parece que**, **es una vergüenza** (c'est une honte), **por desgracia** (malheureusement), **por suerte** (heureusement).
- L'**implicite** : ironie, critique, émotion. Un titre comme « **¡Qué bien vivimos!** » peut être ironique si l'article décrit la pauvreté.

### Les pièges de compréhension
- Les **faux amis** : **embarazada** = enceinte (pas embarrassée) ; **constipado** = enrhumé ; **largo** = long (pas large) ; **la carta** = la lettre (ou le menu) ; **el éxito** = le succès ; **la firma** = la signature ; **suceso** = fait divers.
- Les **négations** : **ya no** (ne plus), **todavía no** (pas encore), **ni... ni** (ni... ni), **nunca** (jamais).

### Compréhension de l'oral : les trois écoutes
- **1re écoute** : le thème, le type de document (reportage, interview, débat), le nombre de voix, le ton.
- **2e écoute** : les idées principales, noms, lieux, chiffres.
- **3e écoute** : les détails, les liens logiques, l'opinion.
- Prendre des notes en abrégé, en espagnol ou en français, sans écrire des phrases.

### Rendre compte en français
- Une première phrase qui situe : nature du document, source, thème.
- Puis les idées dans un ordre logique, avec les détails importants (chiffres, exemples).
- Enfin le point de vue ou l'intention du document.
- Ne pas inventer : ce qui n'est pas compris est laissé de côté plutôt que deviné au hasard.

### À retenir pour le bac
- Anticiper : titre, source, image, consignes.
- Qui, quoi, où, quand, pourquoi, comment.
- Connecteurs : sin embargo, además, por eso, aunque, mientras que, en cambio.
- Repérer le point de vue et l'implicite.
- Piège : les faux amis (embarazada, constipado, largo, éxito).`,
      cartes: [
        { q: "Que signifie « sin embargo » ?", r: "Cependant, pourtant." },
        { q: "Que signifie « además » ?", r: "De plus, en outre." },
        { q: "Que signifie « por lo tanto » ?", r: "Donc, par conséquent." },
        { q: "Que signifie « aunque » ?", r: "Bien que, même si." },
        { q: "Que signifie « mientras que » ?", r: "Alors que, tandis que." },
        { q: "Que signifie « en cambio » ?", r: "En revanche." },
        { q: "Que signifie « a pesar de » ?", r: "Malgré." },
        { q: "Que signifie « embarazada » ?", r: "Enceinte (faux ami : pas « embarrassée »)." },
        { q: "Que signifie « constipado » ?", r: "Enrhumé (faux ami)." },
        { q: "Que signifie « largo » ?", r: "Long (faux ami : « large » se dit ancho)." },
        { q: "Que signifie « el éxito » ?", r: "Le succès (faux ami : pas « la sortie », qui se dit la salida)." },
        { q: "ya no et todavía no ?", r: "Ya no : ne... plus. Todavía no : pas encore." },
        { q: "Que signifie « según » ?", r: "Selon, d'après." },
        { q: "Que chercher à la première écoute ?", r: "Le thème, le type de document, le nombre de voix et le ton." },
      ],
      quiz: [
        { q: "« Sin embargo » signifie :", choix: ["cependant", "sans doute", "de plus", "par exemple"], bonne: 0, expl: "Synonyme : no obstante.", niv: 1 },
        { q: "« Mi hermana está embarazada » veut dire :", choix: ["ma sœur est enrhumée", "ma sœur est embarrassée", "ma sœur est enceinte", "ma sœur est en retard"], bonne: 2, expl: "Un faux ami classique.", niv: 2 },
        { q: "« Aunque llueve, salimos » se traduit par :", choix: ["Comme il pleut, nous restons", "Bien qu'il pleuve, nous sortons", "Quand il pleuvra, nous sortirons", "Il pleut, donc nous sortons"], bonne: 1, expl: "Aunque introduit une concession.", niv: 2 },
        { q: "« Ya no vive aquí » signifie :", choix: ["Il vit encore ici", "Il vit déjà ici", "Il ne vit pas encore ici", "Il ne vit plus ici"], bonne: 3, expl: "Ya no = ne... plus ; todavía no = pas encore.", niv: 1 },
        { q: "Quel connecteur exprime une conséquence ?", choix: ["sin embargo", "por lo tanto", "aunque", "mientras que"], bonne: 1, expl: "Por lo tanto = donc.", niv: 2 },
        { q: "Un article décrit des rues sales et s'intitule « ¡Qué ciudad tan limpia! ». Le titre est :", choix: ["ironique", "neutre", "publicitaire", "faux par erreur"], bonne: 0, expl: "Il dit le contraire de ce que montre l'article.", niv: 3 },
        { q: "« Mil novecientos setenta y cinco » correspond à :", choix: ["1965", "1957", "1795", "1975"], bonne: 3, expl: "Setenta = 70, cinco = 5.", niv: 1 },
        { q: "« En cambio » se traduit par :", choix: ["en changeant", "en échange d'argent", "en revanche", "en même temps"], bonne: 2, expl: "Il introduit une opposition.", niv: 2 },
        { q: "Pendant la 3e écoute d'un document oral, on cherche surtout :", choix: ["le nombre de voix", "le thème général et le type de document", "les détails, les liens logiques et l'opinion", "la traduction de chaque mot"], bonne: 2, expl: "La 1re écoute sert au thème et au type.", niv: 3 },
        { q: "« Es un hombre constipado » signifie qu'il est :", choix: ["content", "constipé", "constant", "enrhumé"], bonne: 3, expl: "Un faux ami.", niv: 2 },
        { q: "« ¿Dónde? » demande :", choix: ["quand", "où", "qui", "pourquoi"], bonne: 1, expl: "¿Cuándo? = quand ; ¿por qué? = pourquoi.", niv: 1 },
        { q: "Quelle première phrase de compte rendu est la meilleure ?", choix: ["Ce reportage de la radio espagnole traite de l'exode des jeunes ruraux", "Le document dit beaucoup de choses intéressantes", "J'ai compris le document assez bien", "Le texte est en espagnol et il est long"], bonne: 0, expl: "Nature, source et thème.", niv: 3 },
      ] },
    { chapitre: 'lv-esp-3',
      fiche: `## S'exprimer : argumenter à l'écrit et à l'oral

En expression, la note dépend de trois choses : **répondre à la consigne**, **organiser ses idées** et **écrire ou parler une langue correcte et variée**. Quelques structures sûres suffisent pour faire une bonne copie ou un bon oral, à condition de les maîtriser.

### Organiser un texte argumenté
- **Introduire** : **Hoy en día** (de nos jours), **cada vez más** (de plus en plus), **se plantea la cuestión de** (la question se pose de).
- **Enchaîner** : **en primer lugar** (d'abord), **en segundo lugar** (ensuite), **por un lado... por otro lado** (d'un côté... de l'autre), **además** (de plus), **también** (aussi).
- **Opposer** : **sin embargo**, **pero**, **en cambio**, **mientras que**.
- **Illustrer** : **por ejemplo**, **como** (comme), **es el caso de** (c'est le cas de).
- **Conclure** : **en conclusión**, **para terminar**, **en definitiva** (en somme).

### Donner son avis (attention au mode)
- **Creo que**, **pienso que**, **me parece que** + **indicatif** : **Creo que es importante**.
- À la forme négative, ces verbes demandent le **subjonctif** : **No creo que sea importante**.
- **Es verdad que** + indicatif ; **no es verdad que** + subjonctif.
- **Es necesario que**, **es importante que**, **es una pena que** (c'est dommage que) + subjonctif : **Es importante que los jóvenes voten**.
- **Desde mi punto de vista**, **a mi modo de ver**, **en mi opinión** : selon moi.
- **Estoy de acuerdo con** / **no estoy de acuerdo con** : je suis d'accord / pas d'accord avec.
- **Hay que** + infinitif (il faut, de façon générale) ; **tener que** + infinitif (devoir, pour une personne).

### Les formes d'expression écrite
- **Artículo** : un titre, une introduction qui accroche, des paragraphes, une conclusion.
- **Carta** ou **correo** : **Querido Pablo** (familier), **Estimada señora** (formel) ; fin : **Un abrazo** (amical), **Atentamente** (formel).
- **Diálogo** : des répliques introduites par un tiret, avec des personnages qui défendent des avis différents.
- **Continuación de un relato** : garder le temps (souvent le passé), les personnages et le ton du texte.

### Présenter un document à l'oral
- **Elijo este documento porque...** (je choisis ce document parce que...).
- Une image : **en la foto se ve...** (on voit), **en primer plano** (au premier plan), **en el fondo** (à l'arrière-plan), **a la izquierda**, **a la derecha**.
- Une citation : **esta cita significa que...**, **el autor quiere decir que...**, **me hace pensar en...** (elle me fait penser à).
- Relier à l'axe : **este documento ilustra bien el eje...** (ce document illustre bien l'axe...).
- Gagner du temps sans se taire : **pues**, **bueno**, **a ver** (voyons).

### Les erreurs qui coûtent cher
- Oublier les points **¿** et **¡** au début des questions et exclamations.
- Oublier les **accents écrits** : **está**, **también**, **país**, **política**.
- Écrire **muy** devant un nom (on dit **mucho tiempo**, pas « muy tiempo »).
- Calquer le français : « je pense que » se dit **pienso que**, pas « pienso de que ».

### À retenir pour le bac
- Introduire, enchaîner, opposer, illustrer, conclure : un connecteur pour chaque étape.
- Creo que + indicatif ; no creo que + subjonctif.
- Es importante que + subjonctif ; hay que + infinitif.
- À l'oral : dire pourquoi on choisit le document et le relier à l'axe.
- Piège : oublier ¿ et ¡ en tête de phrase.`,
      cartes: [
        { q: "Traduire en espagnol : de nos jours", r: "Hoy en día." },
        { q: "Traduire en espagnol : de plus en plus", r: "Cada vez más." },
        { q: "Traduire en espagnol : d'un côté... de l'autre", r: "Por un lado... por otro lado." },
        { q: "Traduire en espagnol : en somme", r: "En definitiva." },
        { q: "Mode après « creo que » ?", r: "L'indicatif : creo que es verdad." },
        { q: "Mode après « no creo que » ?", r: "Le subjonctif : no creo que sea verdad." },
        { q: "Mode après « es importante que » ?", r: "Le subjonctif : es importante que votes." },
        { q: "Hay que ou tener que ?", r: "Hay que + infinitif : obligation générale. Tener que + infinitif : obligation pour une personne." },
        { q: "Début et fin d'une lettre amicale ?", r: "Querido Pablo... Un abrazo." },
        { q: "Début et fin d'une lettre formelle ?", r: "Estimada señora... Atentamente." },
        { q: "Traduire en espagnol : au premier plan, à l'arrière-plan", r: "En primer plano, en el fondo." },
        { q: "Comment dire « je choisis ce document parce que » ?", r: "Elijo este documento porque..." },
        { q: "Traduire en espagnol : selon moi", r: "En mi opinión, a mi modo de ver, desde mi punto de vista." },
        { q: "Muy ou mucho devant un nom ?", r: "Mucho : mucho tiempo. Muy se met devant un adjectif ou un adverbe : muy largo." },
      ],
      quiz: [
        { q: "« Hoy en día » signifie :", choix: ["en plein jour", "ce jour précis", "il y a un jour", "de nos jours"], bonne: 3, expl: "Une bonne façon d'introduire un sujet de société.", niv: 1 },
        { q: "Compléter : « No creo que ___ fácil. »", choix: ["sea", "es", "será", "era"], bonne: 0, expl: "Creer à la forme négative entraîne le subjonctif.", niv: 2 },
        { q: "Compléter : « Creo que ___ una buena idea. »", choix: ["fuera", "sea", "es", "seas"], bonne: 2, expl: "À la forme affirmative : indicatif.", niv: 2 },
        { q: "Pour finir une lettre formelle, on écrit :", choix: ["Un abrazo", "Atentamente", "Besos", "Hasta luego, guapo"], bonne: 1, expl: "Un abrazo est amical.", niv: 1 },
        { q: "Compléter : « Es importante que los jóvenes ___ . »", choix: ["voten", "votan", "votar", "votaron"], bonne: 0, expl: "Es importante que + subjonctif présent.", niv: 2 },
        { q: "Quelle phrase dit sans faute « j'étudie l'espagnol depuis longtemps » ?", choix: ["Hace muy tiempo que estudio español", "Hace mucho tiempo que estudio español", "Hace mucho tiempo que estudio espanol", "Hace muy tiempos que estudio español"], bonne: 1, expl: "Mucho devant un nom, et le ñ de español.", niv: 3 },
        { q: "« En primer plano » signifie :", choix: ["à l'arrière-plan", "en premier lieu", "sur le premier plan d'une ville", "au premier plan"], bonne: 3, expl: "En el fondo = à l'arrière-plan.", niv: 1 },
        { q: "Pour opposer deux idées, on utilise :", choix: ["por ejemplo", "además", "en cambio", "en primer lugar"], bonne: 2, expl: "Además ajoute, por ejemplo illustre.", niv: 2 },
        { q: "Quelle question est bien écrite ?", choix: ["¿Que piensas de las redes sociales?", "Qué piensas de las redes sociales?", "¿Qué piensas de las redes sociales?", "¿Qué piensas de las redes sociales¿"], bonne: 2, expl: "Point d'interrogation renversé au début, accent sur qué interrogatif.", niv: 3 },
        { q: "« Hay que proteger el planeta » exprime :", choix: ["une obligation générale", "un souhait personnel", "une hypothèse", "un regret"], bonne: 0, expl: "Hay que + infinitif.", niv: 2 },
        { q: "« Querido Pablo » s'emploie pour commencer :", choix: ["un discours officiel", "une lettre à une administration", "un article de journal", "une lettre amicale"], bonne: 3, expl: "Estimado señor est formel.", niv: 1 },
        { q: "À l'oral, quelle phrase relie le mieux le document à l'axe ?", choix: ["Este documento es muy bonito y me gusta", "Este documento ilustra bien el eje Arte y poder porque muestra la censura", "No sé qué decir de este documento", "En la foto hay muchas cosas y personas"], bonne: 1, expl: "Elle nomme l'axe et donne une raison.", niv: 3 },
      ] },
    { chapitre: 'lv-esp-4',
      fiche: `## Ser, estar, hay et les verbes comme gustar

« Être » se dit de deux façons en espagnol, et « il y a » d'une troisième. Ces erreurs sont parmi les plus fréquentes dans les copies : les éviter montre tout de suite un bon niveau.

### Ser : ce que l'on est
- L'**identité** et la **définition** : **Soy Lucía**, **es un problema grave**.
- La **nature**, le **caractère**, les traits durables : **es alto**, **es simpática**.
- L'**origine**, la **nationalité** : **somos de Sevilla**, **es mexicano**.
- La **profession** : **es médico**.
- La **matière** et la **possession** : **la mesa es de madera**, **el libro es de Ana**.
- L'**heure**, la **date** : **son las tres**, **hoy es lunes**.
- Le lieu d'un **événement** : **la fiesta es en mi casa**.
- La **voix passive** : **el puente fue construido en 1990** (le pont a été construit).

### Estar : comment ou où l'on est
- La **localisation** d'une personne ou d'une chose connue : **Madrid está en el centro de España**, **estoy en clase**.
- Un **état passager** : **estoy cansado**, **está enfadada** (fâchée), **la sopa está fría**.
- Le **résultat** d'une action : **la puerta está abierta**, **la tienda está cerrada**.
- **Estar + gérondif** : une action en cours, **estoy estudiando** (je suis en train d'étudier).
- **Estar de** + fonction provisoire : **está de camarero este verano** (il travaille comme serveur cet été).

### Les adjectifs qui changent de sens
- **ser listo** (être intelligent) / **estar listo** (être prêt).
- **ser malo** (être méchant, mauvais) / **estar malo** (être malade).
- **ser rico** (être riche) / **estar rico** (être délicieux).
- **ser aburrido** (être ennuyeux) / **estar aburrido** (s'ennuyer).
- **ser orgulloso** (être orgueilleux) / **estar orgulloso de** (être fier de).

### Hay : il y a
- **Hay** présente quelque chose de **nouveau ou d'indéfini** : **hay un libro en la mesa**, **hay muchos jóvenes en paro** (au chômage).
- Pour situer une chose **déjà connue**, on prend **estar** : **el libro está en la mesa**.
- **Hay** est invariable : **hay un problema**, **hay problemas**. Au passé : **había** (il y avait), **hubo** (il y eut).
- **Hay que** + infinitif : il faut.

### Gustar et les verbes du même modèle
- On dit littéralement « le cinéma me plaît » : **me gusta el cine**. Le verbe s'accorde avec **ce qui plaît** : **me gustan las películas**.
- Pronoms : **me, te, le, nos, os, les**. Pour insister : **a mí me gusta**, **a ella le gusta**.
- Même modèle : **encantar** (adorer), **interesar**, **doler** (faire mal : **me duele la cabeza**), **preocupar** (inquiéter), **faltar** (manquer), **parecer** (sembler : **me parece injusto**).

### À retenir pour le bac
- Ser : identité, nature, origine, profession, heure, voix passive.
- Estar : lieu, état passager, résultat, action en cours.
- Listo, malo, rico, aburrido changent de sens selon ser ou estar.
- Hay pour l'indéfini ; estar pour situer une chose connue.
- Piège : me gusta las películas ; il faut me gustan.`,
      cartes: [
        { q: "Ser ou estar pour l'origine ?", r: "Ser : somos de Sevilla." },
        { q: "Ser ou estar pour un état passager ?", r: "Estar : estoy cansado." },
        { q: "Ser ou estar pour situer un lieu ?", r: "Estar : Madrid está en el centro de España." },
        { q: "Ser ou estar pour une profession ?", r: "Ser : es médico (estar de pour une fonction provisoire)." },
        { q: "Ser ou estar pour l'heure ?", r: "Ser : son las tres." },
        { q: "Ser ou estar pour le lieu d'un événement ?", r: "Ser : la fiesta es en mi casa." },
        { q: "Estar + gérondif ?", r: "Une action en cours : estoy estudiando." },
        { q: "Ser listo et estar listo ?", r: "Être intelligent / être prêt." },
        { q: "Ser malo et estar malo ?", r: "Être méchant ou mauvais / être malade." },
        { q: "Ser rico et estar rico ?", r: "Être riche / être délicieux." },
        { q: "Ser aburrido et estar aburrido ?", r: "Être ennuyeux / s'ennuyer." },
        { q: "Hay ou estar ?", r: "Hay pour une chose nouvelle ou indéfinie ; estar pour situer une chose connue." },
        { q: "Accord de gustar ?", r: "Avec ce qui plaît : me gusta el cine, me gustan las películas." },
        { q: "Traduire en espagnol : j'ai mal à la tête", r: "Me duele la cabeza." },
      ],
      quiz: [
        { q: "Compléter : « Mi padre ___ médico. »", choix: ["hay", "está", "es", "son"], bonne: 2, expl: "La profession : ser.", niv: 1 },
        { q: "Compléter : « Hoy ___ muy cansada. »", choix: ["es", "soy", "hay", "estoy"], bonne: 3, expl: "Un état passager : estar.", niv: 2 },
        { q: "Compléter : « ___ muchos jóvenes en paro. »", choix: ["Hay", "Están", "Son", "Es"], bonne: 0, expl: "Hay présente une réalité indéfinie.", niv: 2 },
        { q: "Compléter : « Me ___ las películas de Almodóvar. »", choix: ["gusta", "gustan", "gusto", "gustas"], bonne: 1, expl: "Le verbe s'accorde avec las películas.", niv: 1 },
        { q: "« La sopa está muy rica » signifie :", choix: ["la soupe est très épaisse", "la soupe est chère", "la soupe est riche en calories", "la soupe est délicieuse"], bonne: 3, expl: "Estar rico = être délicieux.", niv: 2 },
        { q: "Où se tient la réunion ? Quelle phrase est juste ?", choix: ["La reunión hay en el aula 12", "La reunión está en el aula 12", "La reunión es en el aula 12", "La reunión son en el aula 12"], bonne: 2, expl: "Le lieu d'un événement se dit avec ser.", niv: 3 },
        { q: "Compléter : « Barcelona ___ en Cataluña. »", choix: ["es", "está", "hay", "son"], bonne: 1, expl: "Situer un lieu connu : estar.", niv: 1 },
        { q: "« Estoy listo » signifie :", choix: ["je suis prêt", "je suis intelligent", "je suis lisse", "je suis libre"], bonne: 0, expl: "Ser listo = être intelligent.", niv: 2 },
        { q: "Quelle phrase traduit « le pont a été construit en 1990 » ?", choix: ["El puente fue construido en 1990", "El puente estuvo construido en 1990", "El puente hubo construido en 1990", "El puente ha construido en 1990"], bonne: 0, expl: "La voix passive se forme avec ser.", niv: 3 },
        { q: "Compléter : « Estamos ___ la noticia. »", choix: ["leer", "leído", "leyendo", "leemos"], bonne: 2, expl: "Estar + gérondif : action en cours.", niv: 2 },
        { q: "« Me duele la cabeza » signifie :", choix: ["je me cogne la tête", "j'ai mal à la tête", "je pense beaucoup", "ma tête me plaît"], bonne: 1, expl: "Doler se construit comme gustar.", niv: 1 },
        { q: "Quelle phrase dit « cet élève s'ennuie en cours » ?", choix: ["Este alumno se es aburrido en clase", "Este alumno es aburrido en clase", "Este alumno hay aburrido en clase", "Este alumno está aburrido en clase"], bonne: 3, expl: "Ser aburrido = être ennuyeux.", niv: 3 },
      ] },
    { chapitre: 'lv-esp-5',
      fiche: `## Raconter au passé : indefinido, imperfecto, perfecto

Pour résumer un récit, raconter une expérience ou continuer une histoire, il faut choisir le bon temps du passé. L'espagnol en a trois principaux, plus le plus-que-parfait.

### Le pretérito indefinido : l'action achevée
- Il raconte une action **terminée**, dans une période **finie** : **ayer**, **el año pasado**, **en 1975**, **aquel día**.
- Il correspond au passé simple ou au passé composé français : **Ayer vi una película** (hier, j'ai vu un film).
- Verbes en **-ar** : **hablé, hablaste, habló, hablamos, hablasteis, hablaron**.
- Verbes en **-er / -ir** : **comí, comiste, comió, comimos, comisteis, comieron**.
- Irréguliers à connaître : **ser** et **ir** → **fui, fuiste, fue, fuimos, fuisteis, fueron** ; **tener** → **tuve** ; **estar** → **estuve** ; **hacer** → **hice, hizo** ; **poder** → **pude** ; **poner** → **puse** ; **decir** → **dije, dijeron** ; **venir** → **vine** ; **querer** → **quise** ; **saber** → **supe** ; **dar** → **di**.
- Verbes à diphtongue en **-ir** : **pedir** → **pidió**, **dormir** → **durmió**, **sentir** → **sintió**.

### Le pretérito imperfecto : le décor et l'habitude
- Il décrit le **cadre**, l'**état**, l'**habitude** : **Era de noche, llovía** ; **de niño, jugaba al fútbol cada día**.
- Verbes en **-ar** : **hablaba, hablabas, hablaba, hablábamos, hablabais, hablaban**.
- Verbes en **-er / -ir** : **comía, comías, comía, comíamos, comíais, comían**.
- Seulement trois irréguliers : **ser** → **era**, **ir** → **iba**, **ver** → **veía**.
- Avec l'indefinido : **Leía cuando sonó el teléfono** (je lisais quand le téléphone a sonné). Le décor à l'imparfait, l'événement à l'indefinido.

### Le pretérito perfecto : le passé lié au présent
- **Haber** au présent + participe : **he, has, ha, hemos, habéis, han** + **hablado / comido / vivido**.
- Pour une période **pas encore finie** (**hoy**, **esta semana**, **este año**) ou une action qui a des effets **maintenant** : **Este año he leído tres novelas**.
- Participes irréguliers : **hecho** (fait), **dicho** (dit), **escrito**, **visto**, **puesto**, **vuelto**, **abierto**, **muerto**, **roto** (cassé).
- En Amérique latine et dans une partie de l'Espagne, on emploie plus souvent l'indefinido.

### Le pluscuamperfecto : l'antériorité
- **Había** + participe : une action **antérieure** à une autre action passée : **Cuando llegué, el tren ya había salido**.

### Les expressions de temps utiles
- **Hace dos años** : il y a deux ans.
- **Desde hace** : depuis (une durée) ; **llevar** + gérondif : **llevo dos años estudiando español** (j'étudie l'espagnol depuis deux ans).
- **Acabar de** + infinitif : venir de ; **acabo de llegar**.
- **Volver a** + infinitif : refaire ; **volvió a llamar** (il a rappelé).
- **Soler** + infinitif : avoir l'habitude de ; **solía leer** (il lisait d'habitude).

### À retenir pour le bac
- Indefinido : action achevée, date ou période finie (ayer, en 1975).
- Imperfecto : décor, état, habitude ; irréguliers era, iba, veía.
- Perfecto : he + participe, période non finie (hoy, este año).
- Pluscuamperfecto : había + participe, antériorité.
- Piège : ser et ir ont le même indefinido (fui, fue).`,
      cartes: [
        { q: "Emploi du pretérito indefinido ?", r: "Une action achevée dans une période finie : ayer, el año pasado, en 1975." },
        { q: "Indefinido de hablar ?", r: "Hablé, hablaste, habló, hablamos, hablasteis, hablaron." },
        { q: "Indefinido de ser et ir ?", r: "Fui, fuiste, fue, fuimos, fuisteis, fueron (les mêmes formes)." },
        { q: "Indefinido de tener, estar, hacer ?", r: "Tuve, estuve, hice (él hizo)." },
        { q: "Indefinido de decir à la 3e personne du pluriel ?", r: "Dijeron." },
        { q: "Indefinido de pedir et dormir (él) ?", r: "Pidió, durmió." },
        { q: "Emploi de l'imperfecto ?", r: "Le décor, l'état, l'habitude dans le passé." },
        { q: "Les trois imparfaits irréguliers ?", r: "Ser → era ; ir → iba ; ver → veía." },
        { q: "Formation du pretérito perfecto ?", r: "Haber au présent (he, has, ha...) + participe passé." },
        { q: "Participes irréguliers de hacer, decir, escribir, volver ?", r: "Hecho, dicho, escrito, vuelto." },
        { q: "Pluscuamperfecto ?", r: "Había + participe : action antérieure à une autre action passée." },
        { q: "Traduire en espagnol : il y a deux ans", r: "Hace dos años." },
        { q: "Traduire en espagnol : j'apprends l'espagnol depuis deux ans", r: "Llevo dos años estudiando español (ou estudio español desde hace dos años)." },
        { q: "Acabar de et volver a ?", r: "Acabar de + infinitif : venir de. Volver a + infinitif : refaire." },
      ],
      quiz: [
        { q: "Compléter : « Ayer ___ una película muy buena. » (ver, yo)", choix: ["veía", "vi", "he visto", "veo"], bonne: 1, expl: "Ayer : période finie, indefinido.", niv: 1 },
        { q: "Compléter : « De niño, ___ al fútbol cada día. » (jugar, yo)", choix: ["jugaba", "jugué", "he jugado", "jugara"], bonne: 0, expl: "Une habitude passée : imperfecto.", niv: 2 },
        { q: "Quelle est la forme de « hacer » à l'indefinido, 3e personne du singulier ?", choix: ["hice", "hació", "hizo", "hacía"], bonne: 2, expl: "Hice, hiciste, hizo.", niv: 2 },
        { q: "« Fue » peut venir de :", choix: ["fumar", "ser", "ir", "ser ou ir"], bonne: 3, expl: "Ser et ir ont le même indefinido : seul le contexte permet de choisir.", niv: 1 },
        { q: "Compléter : « Este año ___ tres novelas. » (leer, yo)", choix: ["he leído", "leí", "leía", "había leído"], bonne: 0, expl: "Este año : période non finie, perfecto.", niv: 2 },
        { q: "Compléter : « Cuando llegué a la estación, el tren ya ___ . »", choix: ["salía", "salió", "ha salido", "había salido"], bonne: 3, expl: "Antériorité dans le passé : pluscuamperfecto.", niv: 3 },
        { q: "Le participe passé de « escribir » est :", choix: ["escribido", "escrito", "escrito y leído", "escribí"], bonne: 1, expl: "Un participe irrégulier.", niv: 1 },
        { q: "Compléter : « Leía cuando ___ el teléfono. »", choix: ["ha sonado", "sonaba", "sonó", "suena"], bonne: 2, expl: "Le décor à l'imparfait, l'événement à l'indefinido.", niv: 2 },
        { q: "Quelle phrase dit « ils ont demandé de l'aide » (récit au passé) ?", choix: ["Pedieron ayuda", "Pidieron ayuda", "Pidaron ayuda", "Pidían ayudas"], bonne: 1, expl: "Pedir : e devient i à la 3e personne de l'indefinido.", niv: 3 },
        { q: "« Acabo de llegar » signifie :", choix: ["j'arrive à la fin", "je finis par arriver", "je viens d'arriver", "je vais arriver"], bonne: 2, expl: "Acabar de + infinitif = venir de.", niv: 2 },
        { q: "Imparfait de « ir », 1re personne :", choix: ["iba", "ía", "fui", "iría"], bonne: 0, expl: "Un des trois imparfaits irréguliers.", niv: 1 },
        { q: "Quelle phrase traduit « elle a rappelé le lendemain » ?", choix: ["Volvía de llamar el día siguiente", "Llamó otra vez mañana", "Ha vuelto llamar al otro día", "Volvió a llamar al día siguiente"], bonne: 3, expl: "Volver a + infinitif = refaire ; al día siguiente = le lendemain.", niv: 3 },
      ] },
    { chapitre: 'lv-esp-6',
      fiche: `## Le subjonctif présent et l'impératif

Le subjonctif est beaucoup plus fréquent en espagnol qu'en français. Bien employé, il fait passer une copie de B1 à B2. Il sert aussi à former l'impératif négatif.

### Former le subjonctif présent
- On part de la **1re personne du présent** (yo), on enlève le **-o**, et on « inverse » la voyelle : les verbes en **-ar** prennent un **e**, ceux en **-er / -ir** prennent un **a**.
- **hablar** → **hable, hables, hable, hablemos, habléis, hablen**.
- **comer** → **coma** ; **vivir** → **viva**.
- Les irrégularités du « yo » se gardent : **tengo** → **tenga** ; **hago** → **haga** ; **digo** → **diga** ; **pongo** → **ponga** ; **salgo** → **salga** ; **vengo** → **venga** ; **conozco** → **conozca**.
- Les diphtongues se gardent sauf à nous et vous : **quiera, quieras, quiera, queramos, queráis, quieran**.
- Irréguliers à part : **ser** → **sea** ; **ir** → **vaya** ; **estar** → **esté** ; **dar** → **dé** ; **saber** → **sepa** ; **haber** → **haya**.

### Quand l'employer
- **Volonté, ordre, demande** : **Quiero que vengas** (je veux que tu viennes) ; **te pido que me ayudes**.
- **Sentiment** : **me alegra que estés aquí** (je suis content que tu sois là) ; **es una pena que** (c'est dommage que).
- **Jugement** : **es importante que**, **es necesario que**, **es normal que**.
- **Doute** et opinion **négative** : **dudo que sea verdad** ; **no creo que tenga razón**.
- **But** : **para que** : **Lo explico para que lo entiendas** (pour que tu le comprennes).
- **Souhait** : **ojalá** + subjonctif : **¡Ojalá llueva!** (pourvu qu'il pleuve).
- **Futur** après **cuando**, **en cuanto** (dès que), **hasta que** (jusqu'à ce que) : **Cuando sea mayor, viajaré** (quand je serai grand). Le français met un futur, l'espagnol un **subjonctif**.
- **Aunque** + subjonctif : « même si », pour une hypothèse : **aunque llueva, saldré** (même s'il pleut).
- **Quizás**, **tal vez** (peut-être) : subjonctif si le doute est fort.

### L'impératif
- **Tú**, affirmatif : la 3e personne du présent : **habla**, **come**, **vive**.
- Huit irréguliers pour tú : **ten** (tener), **haz** (hacer), **di** (decir), **pon** (poner), **sal** (salir), **ven** (venir), **ve** (ir), **sé** (ser).
- **Vosotros**, affirmatif : on remplace le **-r** de l'infinitif par **-d** : **hablad**, **comed**.
- **Usted, ustedes, nosotros** : le subjonctif : **hable usted**, **hablemos** (parlons).
- **Négatif** : toujours **no** + subjonctif : **no hables**, **no comas**, **no vayas**, **no lo hagáis**.
- Les pronoms se **collent** à l'impératif affirmatif : **dímelo** (dis-le-moi), **siéntate** (assieds-toi). Au négatif, ils se placent **avant** : **no me lo digas**.

### À retenir pour le bac
- Subjonctif : radical du yo, voyelle inversée (hable, coma, tenga).
- Irréguliers : sea, vaya, esté, dé, sepa, haya.
- Après querer que, es importante que, no creo que, para que, ojalá.
- Cuando + subjonctif pour le futur : cuando sea mayor.
- Impératif négatif : no + subjonctif (no hables).`,
      cartes: [
        { q: "Formation du subjonctif présent ?", r: "Radical du yo au présent, puis voyelle inversée : -ar → e, -er/-ir → a." },
        { q: "Subjonctif présent de hablar ?", r: "Hable, hables, hable, hablemos, habléis, hablen." },
        { q: "Subjonctif de tener, hacer, decir (yo) ?", r: "Tenga, haga, diga." },
        { q: "Subjonctif de ser, ir, estar ?", r: "Sea, vaya, esté." },
        { q: "Subjonctif de saber, haber, dar ?", r: "Sepa, haya, dé." },
        { q: "Mode après « quiero que » ?", r: "Le subjonctif : quiero que vengas." },
        { q: "Mode après « para que » ?", r: "Le subjonctif : para que lo entiendas." },
        { q: "Traduire en espagnol : pourvu qu'il pleuve !", r: "¡Ojalá llueva!" },
        { q: "Traduire en espagnol : quand je serai grand", r: "Cuando sea mayor (cuando + subjonctif pour le futur)." },
        { q: "Aunque + subjonctif ?", r: "Même si (hypothèse) : aunque llueva, saldré." },
        { q: "Impératif affirmatif de tú pour tener, hacer, decir ?", r: "Ten, haz, di." },
        { q: "Impératif affirmatif de tú pour poner, salir, venir, ir, ser ?", r: "Pon, sal, ven, ve, sé." },
        { q: "Impératif négatif ?", r: "No + subjonctif : no hables, no vayas." },
        { q: "Place des pronoms à l'impératif ?", r: "Collés au verbe à l'affirmatif (dímelo) ; avant le verbe au négatif (no me lo digas)." },
      ],
      quiz: [
        { q: "Compléter : « Quiero que ___ conmigo. » (venir, tú)", choix: ["vengas", "vienes", "venir", "vendrás"], bonne: 0, expl: "Querer que + subjonctif.", niv: 1 },
        { q: "Subjonctif présent de « ser », 3e personne du singulier :", choix: ["es", "sea", "fuera", "esté"], bonne: 1, expl: "Ser → sea.", niv: 2 },
        { q: "Compléter : « Cuando ___ mayor, viajaré por América Latina. »", choix: ["sería", "seré", "soy", "sea"], bonne: 3, expl: "Cuando + subjonctif pour un futur.", niv: 2 },
        { q: "Impératif négatif de « hablar » pour tú :", choix: ["no hablar : l'infinitif", "no habla : la 3e personne", "no hables : toujours no + subjonctif", "no hablas : l'indicatif"], bonne: 2, expl: "No + subjonctif.", niv: 1 },
        { q: "Compléter : « Te lo explico para que lo ___ . »", choix: ["entender", "entiendes", "entiendas", "entendiste"], bonne: 2, expl: "Para que + subjonctif.", niv: 2 },
        { q: "Quelle phrase traduit correctement « je doute qu'il ait raison » ?", choix: ["Dudo que tiene razón", "Dudo que tenga razón", "Dudo de que tendrá razón", "Dudo que tener razón"], bonne: 1, expl: "Le doute entraîne le subjonctif.", niv: 3 },
        { q: "« ¡Ojalá ___ buen tiempo mañana! »", choix: ["haga", "hace", "hará", "hacer"], bonne: 0, expl: "Ojalá + subjonctif.", niv: 1 },
        { q: "Impératif affirmatif de « hacer » pour tú :", choix: ["hacé", "hace", "haga", "haz"], bonne: 3, expl: "Un des huit irréguliers.", niv: 2 },
        { q: "Quelle phrase traduit « ne me le dis pas » ?", choix: ["No dímelo", "No me lo digas", "No me lo dices", "No dígamelo tú"], bonne: 1, expl: "Négatif : pronoms avant le verbe au subjonctif.", niv: 3 },
        { q: "Compléter : « Es importante que todos ___ . » (votar)", choix: ["votar", "votan", "votarán", "voten"], bonne: 3, expl: "Un jugement + subjonctif.", niv: 2 },
        { q: "Subjonctif présent de « ir », 1re personne :", choix: ["vaya", "voy", "iba", "fuera"], bonne: 0, expl: "Ir → vaya.", niv: 1 },
        { q: "« Aunque llueva, saldremos » signifie :", choix: ["Comme il pleut, nous sortirons", "Bien qu'il pleuve, nous sortons", "Même s'il pleut, nous sortirons", "Quand il pleuvait, nous sortions"], bonne: 2, expl: "Aunque + subjonctif : hypothèse.", niv: 3 },
      ] },
    { chapitre: 'lv-esp-7',
      fiche: `## Concordance des temps, hypothèse et discours rapporté

Dès qu'on raconte au passé ou qu'on imagine une situation, il faut accorder les temps. C'est la grammaire qui distingue le plus un niveau B2. Trois outils : le **subjonctif imparfait**, le **conditionnel** et le **discours rapporté**.

### Le futur et le conditionnel
- **Futur** : infinitif + **é, ás, á, emos, éis, án** : **hablaré**, **comerás**.
- **Conditionnel** : infinitif + **ía, ías, ía, íamos, íais, ían** : **hablaría** (je parlerais).
- Radicaux irréguliers, les mêmes pour les deux temps : **tendr-** (tener), **har-** (hacer), **dir-** (decir), **podr-** (poder), **pondr-** (poner), **saldr-** (salir), **vendr-** (venir), **querr-** (querer), **sabr-** (saber), **habr-** (haber).
- Le conditionnel sert aussi à être **poli** : **me gustaría** (j'aimerais), **¿podría ayudarme?**

### Le subjonctif imparfait
- On part de la **3e personne du pluriel de l'indefinido**, on enlève **-ron**, on ajoute **-ra** (ou **-se**) : **hablaron** → **hablara** ; **tuvieron** → **tuviera** ; **fueron** → **fuera** ; **dijeron** → **dijera** ; **hicieron** → **hiciera** ; **pudieron** → **pudiera**.
- Les deux formes (**hablara**, **hablase**) ont le même sens ; **-ra** est la plus courante.
- Accent à nous : **habláramos**, **tuviéramos**.

### La concordance des temps
- Verbe principal au **présent** ou au **futur** → **subjonctif présent** : **Quiero que vengas**.
- Verbe principal au **passé** (indefinido, imperfecto) ou au **conditionnel** → **subjonctif imparfait** : **Quería que vinieras** ; **Le pedí que me ayudara** ; **Me gustaría que vinieras**.
- Le français dit souvent « que tu viennes » dans les deux cas : l'espagnol, lui, change de temps.

### L'hypothèse avec si
- Hypothèse **réalisable** : **si** + présent, futur : **Si llueve, me quedaré en casa**.
- Hypothèse **irréelle** dans le présent : **si** + subjonctif imparfait, conditionnel : **Si tuviera dinero, viajaría** (si j'avais de l'argent, je voyagerais).
- **Jamais** de futur ni de conditionnel juste après **si** : « si tendría » est une faute.
- **Como si** + subjonctif imparfait : **habla como si lo supiera todo** (comme s'il savait tout).

### Le discours rapporté
- Introduit au **présent** : les temps ne changent pas : **Dice que está cansado**.
- Introduit au **passé** : les temps reculent. « **Estoy cansado** » → **Dijo que estaba cansado**. « **Vendré** » → **Dijo que vendría**. « **Lo hice** » → **Dijo que lo había hecho**.
- Un **ordre** devient **pedir / decir que** + subjonctif : « **¡Ven!** » → **Me pidió que fuera**.
- Une **question** : **preguntó si** (si oui ou non) ou **preguntó dónde, cuándo, por qué...**
- Les repères changent : **hoy** → **aquel día** ; **mañana** → **al día siguiente** ; **aquí** → **allí** ; **este** → **aquel**.

### À retenir pour le bac
- Futur et conditionnel : mêmes radicaux irréguliers (tendr-, har-, dir-...).
- Subjonctif imparfait : 3e pluriel de l'indefinido, -ron → -ra (tuviera, fuera).
- Principale au passé ou au conditionnel → subjonctif imparfait.
- Si + subjonctif imparfait, conditionnel : si tuviera, viajaría.
- Piège : jamais de conditionnel après si.`,
      cartes: [
        { q: "Formation du conditionnel ?", r: "Infinitif + ía, ías, ía, íamos, íais, ían : hablaría." },
        { q: "Radicaux irréguliers du futur et du conditionnel ?", r: "Tendr-, har-, dir-, podr-, pondr-, saldr-, vendr-, querr-, sabr-, habr-." },
        { q: "Formation du subjonctif imparfait ?", r: "3e personne du pluriel de l'indefinido, -ron remplacé par -ra (ou -se) : hablaron → hablara." },
        { q: "Subjonctif imparfait de tener, ser, decir ?", r: "Tuviera, fuera, dijera." },
        { q: "Concordance après un verbe au présent ?", r: "Subjonctif présent : quiero que vengas." },
        { q: "Concordance après un verbe au passé ou au conditionnel ?", r: "Subjonctif imparfait : quería que vinieras ; me gustaría que vinieras." },
        { q: "Hypothèse réalisable avec si ?", r: "Si + présent, futur : si llueve, me quedaré." },
        { q: "Hypothèse irréelle avec si ?", r: "Si + subjonctif imparfait, conditionnel : si tuviera dinero, viajaría." },
        { q: "Mode après como si ?", r: "Le subjonctif imparfait : como si lo supiera todo." },
        { q: "« Estoy cansado », rapporté au passé ?", r: "Dijo que estaba cansado." },
        { q: "« Vendré », rapporté au passé ?", r: "Dijo que vendría." },
        { q: "« ¡Ven! », rapporté au passé ?", r: "Me pidió que fuera (ou que viniera)." },
        { q: "Hoy et mañana dans le discours rapporté au passé ?", r: "Aquel día ; al día siguiente." },
        { q: "Comment être poli avec le conditionnel ?", r: "Me gustaría... ; ¿podría ayudarme?" },
      ],
      quiz: [
        { q: "Conditionnel de « tener », 1re personne :", choix: ["tendré", "tenería", "tuviera", "tendría"], bonne: 3, expl: "Radical irrégulier tendr- + ía.", niv: 1 },
        { q: "Compléter : « Si ___ dinero, viajaría por todo el mundo. »", choix: ["tengo", "tendría", "tuviera", "tenía"], bonne: 2, expl: "Si + subjonctif imparfait, conditionnel.", niv: 2 },
        { q: "Compléter : « Mi madre quería que ___ médico. » (ser, yo)", choix: ["fuera", "sea", "soy", "sería"], bonne: 0, expl: "Principale au passé : subjonctif imparfait.", niv: 2 },
        { q: "Subjonctif imparfait de « hacer », 3e personne du singulier :", choix: ["haciera", "hiciera", "haga", "haría"], bonne: 1, expl: "Hicieron → hiciera.", niv: 1 },
        { q: "« Me gustaría que ___ a mi fiesta. » (venir, tú)", choix: ["vengas", "vinieras", "vienes", "vendrías"], bonne: 1, expl: "Conditionnel dans la principale : subjonctif imparfait.", niv: 2 },
        { q: "Quelle hypothèse est bien construite ?", choix: ["Si llueve mañana, me quedaré en casa", "Si lloverá mañana, me quedaré en casa", "Si llovería mañana, me quedo en casa", "Si lloviera mañana, me quedaré en casa"], bonne: 0, expl: "Hypothèse réalisable : si + présent, futur.", niv: 3 },
        { q: "Futur de « decir », 1re personne :", choix: ["dijera", "deciré", "diré", "diría"], bonne: 2, expl: "Radical irrégulier dir-.", niv: 1 },
        { q: "« Estoy cansada », dit-elle hier. Discours rapporté :", choix: ["Dice que estaría cansada", "Dijo que está cansada", "Dijo que estuviera cansada", "Dijo que estaba cansada"], bonne: 3, expl: "Au passé, le présent devient imparfait.", niv: 2 },
        { q: "« ¡Cierra la puerta! », me dijo. Discours rapporté :", choix: ["Me dijo que cerrara la puerta", "Me dijo que cierro la puerta", "Me dijo que cerraría la puerta", "Me dijo cerrar que la puerta"], bonne: 0, expl: "Un ordre rapporté au passé : decir que + subjonctif imparfait.", niv: 3 },
        { q: "Compléter : « Habla como si lo ___ todo. »", choix: ["sepa", "sabe", "sabría", "supiera"], bonne: 3, expl: "Como si + subjonctif imparfait.", niv: 2 },
        { q: "Dans un récit au passé, « mañana » devient :", choix: ["hoy mismo", "ayer", "al día siguiente", "la víspera"], bonne: 2, expl: "La víspera = la veille.", niv: 1 },
        { q: "Quelle phrase traduit « s'il avait le temps, il t'aiderait » ?", choix: ["Si tendría tiempo, te ayudaría", "Si tuviera tiempo, te ayudaría", "Si tenía tiempo, te ayudara", "Si tiene tiempo, te ayudaría"], bonne: 1, expl: "Irréel : si + subjonctif imparfait, conditionnel.", niv: 3 },
      ] },
    { chapitre: 'lv-esp-8',
      fiche: `## Axes 1 et 2 : identités et échanges ; espace privé et espace public

Les documents des évaluations se rattachent toujours à un des **huit axes** du programme. Pour chacun, il faut du **vocabulaire** et quelques **repères** du monde hispanique à placer dans une expression écrite ou à l'oral.

### Axe 1 : identités et échanges
Comment les migrations, les voyages et les rencontres transforment-ils les personnes et les sociétés ?
- **Vocabulaire** : **emigrar** (émigrer), **el emigrante**, **el inmigrante**, **el exilio** (l'exil), **la frontera** (la frontière), **cruzar la frontera**, **el muro** (le mur), **los sin papeles** (les sans-papiers), **la patera** et **el cayuco** (petits bateaux de migrants), **integrarse**, **el desarraigo** (le déracinement), **echar de menos** (regretter, manquer : **echo de menos a mi familia**), **el mestizaje** (le métissage), **la identidad**.
- **L'exil républicain** : à la fin de la guerre civile, en **1939**, près d'un demi-million d'Espagnols fuient vers la France : c'est **la Retirada**.
- **L'émigration économique** des années 1960 : des centaines de milliers d'Espagnols partent travailler en France, en Allemagne, en Suisse.
- Après la crise de **2008**, beaucoup de jeunes diplômés quittent à nouveau l'Espagne : on parle de **fuga de cerebros** (fuite des cerveaux).
- **La frontière entre le Mexique et les États-Unis** : un mur, des migrants venus du Mexique et d'Amérique centrale, des familles séparées.
- Les **Hispanos** ou **Latinos** aux États-Unis : plus de 60 millions de personnes ; certains mêlent anglais et espagnol, le **spanglish**.
- Les arrivées de migrants africains par la mer, vers le sud de l'Espagne ou les **îles Canaries**.
- Les **échanges** : **Erasmus**, **el intercambio** (l'échange scolaire), **viajar**, **descubrir otra cultura**.

### Axe 2 : espace privé et espace public
Où passe la limite entre la vie intime et la vie sous le regard des autres ?
- **Vocabulaire** : **la intimidad** (l'intimité), **la vida privada**, **la calle** (la rue), **la plaza** (la place), **el barrio** (le quartier), **la vivienda** (le logement), **el alquiler** (le loyer), **compartir piso** (vivre en colocation), **las redes sociales**, **publicar**, **la videovigilancia**, **el acoso callejero** (le harcèlement de rue).
- **La plaza** est au cœur de la vie espagnole et latino-américaine : on s'y retrouve, on y fait la fête, on y manifeste (la **Puerta del Sol** à Madrid, la **Plaza de Mayo** à Buenos Aires).
- **La vie dans la rue** : les terrasses, les **fiestas** de quartier, mais aussi le **botellón** (des jeunes qui boivent ensemble dehors), souvent interdit.
- **Le confinement de 2020** : chaque soir, les Espagnols **applaudissaient depuis leurs balcons** les soignants (**los sanitarios**). Le balcon devient un espace entre privé et public.
- **Le logement** : en Espagne, beaucoup de jeunes vivent tard chez leurs parents, faute de pouvoir payer un **alquiler**.
- **Les réseaux sociaux** exposent la vie privée : ce que l'on publie devient public.
- **Les femmes et l'espace public** : la lutte contre le harcèlement de rue et les violences (voir l'axe « diversité et inclusion »).

### Phrases utiles
- **Este documento ilustra el eje « identidades e intercambios » porque...**
- **Muchos jóvenes se ven obligados a emigrar para encontrar trabajo.**
- **Las redes sociales borran la frontera entre lo privado y lo público.**

### À retenir pour le bac
- Axe 1 : migrations, exil (la Retirada, 1939), fuga de cerebros, frontière Mexique - États-Unis.
- Mots : emigrar, el exilio, la frontera, echar de menos, el mestizaje.
- Axe 2 : la plaza, la calle, la vivienda, las redes sociales, la intimidad.
- Repère : les balcons du confinement de 2020.
- Piège : confondre emigrante (qui part) et inmigrante (qui arrive).`,
      cartes: [
        { q: "Que signifie « el exilio » ?", r: "L'exil." },
        { q: "Que signifie « echar de menos » ?", r: "Regretter l'absence de, manquer : echo de menos a mi familia (ma famille me manque)." },
        { q: "Que signifie « el desarraigo » ?", r: "Le déracinement." },
        { q: "Que signifie « la patera » ?", r: "Une petite embarcation utilisée par des migrants." },
        { q: "Traduire en espagnol : les sans-papiers", r: "Los sin papeles." },
        { q: "La Retirada ?", r: "L'exil vers la France, en 1939, de près d'un demi-million de républicains espagnols." },
        { q: "Fuga de cerebros ?", r: "La fuite des cerveaux : des jeunes diplômés espagnols partis après la crise de 2008." },
        { q: "Spanglish ?", r: "Le mélange d'anglais et d'espagnol parlé par certains Latinos des États-Unis." },
        { q: "Emigrante ou inmigrante ?", r: "Emigrante : celui qui part de son pays. Inmigrante : celui qui arrive dans un pays." },
        { q: "Que signifie « la vivienda » ?", r: "Le logement." },
        { q: "Traduire en espagnol : vivre en colocation", r: "Compartir piso." },
        { q: "Que signifie « el acoso callejero » ?", r: "Le harcèlement de rue." },
        { q: "Les balcons pendant le confinement de 2020 ?", r: "Chaque soir, les Espagnols y applaudissaient les soignants (los sanitarios)." },
        { q: "Que signifie « la intimidad » ?", r: "L'intimité, la vie privée." },
      ],
      quiz: [
        { q: "« Echo de menos a mi familia » signifie :", choix: ["Ma famille me voit moins", "Je jette ma famille dehors", "Ma famille me manque", "On ment à ma famille"], bonne: 2, expl: "Echar de menos = regretter l'absence.", niv: 1 },
        { q: "La Retirada désigne :", choix: ["le départ des Espagnols vers l'Amérique en 1492", "l'exil des républicains espagnols vers la France en 1939", "la retraite des soldats de Napoléon en 1813", "l'émigration des jeunes diplômés après 2008"], bonne: 1, expl: "Près d'un demi-million de personnes.", niv: 2 },
        { q: "Un « inmigrante » est une personne qui :", choix: ["refuse de bouger", "quitte son pays", "voyage pour le tourisme", "arrive dans un pays pour y vivre"], bonne: 3, expl: "L'emigrante, lui, part.", niv: 2 },
        { q: "« Compartir piso » signifie :", choix: ["vivre en colocation", "partager un étage", "acheter un appartement", "vendre sa maison"], bonne: 0, expl: "El piso = l'appartement.", niv: 1 },
        { q: "Que désigne la « fuga de cerebros » en Espagne ?", choix: ["le départ de jeunes diplômés à l'étranger", "une maladie du cerveau", "la fuite de prisonniers", "l'arrivée de chercheurs étrangers"], bonne: 0, expl: "Surtout après la crise de 2008.", niv: 2 },
        { q: "Une photo montre des voisins qui applaudissent à leurs balcons en 2020. Quel axe illustre-t-elle le mieux ?", choix: ["Innovations scientifiques et responsabilité", "Art et pouvoir", "Espace privé et espace public", "Fictions et réalités"], bonne: 2, expl: "Le balcon est entre l'intime et la rue.", niv: 3 },
        { q: "« La frontera » signifie :", choix: ["le front", "la frontière", "le fronton", "la frange"], bonne: 1, expl: "Cruzar la frontera = passer la frontière.", niv: 1 },
        { q: "Le « spanglish » est :", choix: ["l'espagnol parlé à Londres", "un dialecte de Galice", "une langue indigène du Mexique", "un mélange d'anglais et d'espagnol"], bonne: 3, expl: "Parlé par certains Latinos des États-Unis.", niv: 2 },
        { q: "Quelle phrase relie le mieux les réseaux sociaux à l'axe 2 ?", choix: ["Hay muchas redes sociales en el mundo", "Las redes sociales son muy divertidas para todos", "Uso las redes sociales cada día en mi móvil", "Las redes sociales borran la frontera entre lo privado y lo público"], bonne: 3, expl: "Elle nomme l'enjeu de l'axe.", niv: 3 },
        { q: "« La vivienda » signifie :", choix: ["la vie quotidienne", "le logement", "la viande", "le vivier"], bonne: 1, expl: "El alquiler = le loyer.", niv: 2 },
        { q: "« El acoso callejero » désigne :", choix: ["une course dans la rue", "un accident de la route", "le harcèlement de rue", "un marché de rue"], bonne: 2, expl: "La calle = la rue.", niv: 1 },
        { q: "Quelle phrase traduit « beaucoup de jeunes sont obligés d'émigrer pour trouver du travail » ?", choix: ["Muchos jóvenes se ven obligados a emigrar para encontrar trabajo", "Muchos jóvenes están obligados emigrar por encontrar trabajo", "Mucho jóvenes son obligados de emigrar para encontrar trabajo", "Muchos jóvenes tienen obligado emigrar para trabajo encontrar"], bonne: 0, expl: "Verse obligado a + infinitif ; para = pour (but).", niv: 3 },
      ] },
    { chapitre: 'lv-esp-9',
      fiche: `## Axes 3 et 4 : art et pouvoir ; citoyenneté et mondes virtuels

L'art hispanique a souvent servi le pouvoir ou l'a dénoncé : les tableaux les plus célèbres sont des œuvres engagées. Et aujourd'hui, la citoyenneté se joue aussi sur Internet. Deux axes riches en exemples pour l'oral.

### Axe 3 : art et pouvoir
L'artiste sert-il le pouvoir, le critique-t-il, peut-il rester libre ?
- **Vocabulaire** : **el cuadro** (le tableau), **el pintor**, **el retrato** (le portrait), **el mural** (la peinture murale), **la obra** (l'œuvre), **el poder**, **la dictadura**, **el dictador**, **la censura**, **censurar**, **denunciar** (dénoncer), **la propaganda**, **comprometido** (engagé), **la libertad de expresión**.
- **Velázquez**, **Las Meninas** (1656) : peintre de la cour du roi **Philippe IV**, il représente l'infante et se peint lui-même au travail. L'art au service du roi, mais qui affirme aussi la place du peintre.
- **Goya**, **El 3 de mayo de 1808 en Madrid** (1814), au musée du **Prado** : des soldats de Napoléon fusillent des civils madrilènes. Avec la série **Los desastres de la guerra**, Goya montre l'horreur de la guerre.
- **Picasso**, **Guernica** (1937) : la ville basque de Guernica est bombardée le 26 avril 1937 par l'aviation allemande alliée de Franco. Le tableau, noir et blanc, montre des corps et des animaux déchirés. Il est exposé à Paris en 1937 ; il est aujourd'hui au **museo Reina Sofía** à Madrid.
- **Le muralisme mexicain** : après la révolution mexicaine (1910-1920), **Diego Rivera**, **José Clemente Orozco** et **David Alfaro Siqueiros** peignent l'histoire du peuple sur les murs des bâtiments publics. Un art pour tous.
- **La censure sous Franco** (1939-1975) : livres, films et chansons sont contrôlés.
- **Víctor Jara**, chanteur chilien engagé, est assassiné en **1973**, après le coup d'État de Pinochet.
- Aujourd'hui : le **street art** et les **graffitis** dénoncent les injustices dans la rue.

### Axe 4 : citoyenneté et mondes virtuels
Internet renforce-t-il la démocratie ou la menace-t-il ?
- **Vocabulaire** : **el ciudadano** (le citoyen), **la ciudadanía**, **votar**, **las elecciones**, **manifestarse**, **la manifestación**, **las redes sociales**, **el internauta**, **los bulos** ou **las noticias falsas** (les fausses informations), **el ciberacoso** (le cyberharcèlement), **los datos personales**, **la brecha digital** (la fracture numérique), **el móvil** (le téléphone portable), **engancharse** (devenir accro).
- **La Transition démocratique** : après la mort de Franco (1975), l'Espagne devient une démocratie ; la **Constitución de 1978** garantit les libertés.
- **Le mouvement du 15-M** (15 mai 2011), ou mouvement des **indignados** : des milliers de jeunes occupent la **Puerta del Sol** à Madrid pour dénoncer le chômage et la corruption. Ils s'organisent par les **réseaux sociaux**.
- **Les risques** : les **bulos** se répandent vite, le **ciberacoso** touche beaucoup d'adolescents, les **datos personales** sont exploités.
- **La brecha digital** : les personnes âgées ou les zones rurales ont moins accès à Internet et aux démarches en ligne.

### Phrases utiles
- **Picasso pintó Guernica para denunciar el bombardeo de la ciudad.**
- **Las redes sociales permiten movilizar a los ciudadanos, pero también difunden bulos.**
- **El arte puede ser una forma de resistencia frente al poder.**

### À retenir pour le bac
- Velázquez, Las Meninas (1656) : l'art au service du roi.
- Goya, El 3 de mayo de 1808 (1814) ; Picasso, Guernica (1937) : l'art qui dénonce.
- Muralisme mexicain : Rivera, Orozco, Siqueiros.
- Axe 4 : le 15-M (2011), los bulos, el ciberacoso, la brecha digital.
- Piège : Guernica est une ville bombardée en 1937, pas une bataille de Napoléon.`,
      cartes: [
        { q: "Que signifie « el cuadro » ?", r: "Le tableau." },
        { q: "Que signifie « la censura » ?", r: "La censure." },
        { q: "Que signifie « comprometido » ?", r: "Engagé (un artiste comprometido)." },
        { q: "Las Meninas ?", r: "Tableau de Velázquez (1656), peintre de la cour de Philippe IV : l'infante et le peintre lui-même au travail." },
        { q: "El 3 de mayo de 1808 ?", r: "Tableau de Goya (1814), au Prado : des soldats de Napoléon fusillent des civils madrilènes." },
        { q: "Guernica ?", r: "Tableau de Picasso (1937) sur le bombardement de la ville basque par l'aviation allemande alliée de Franco." },
        { q: "Où se trouve Guernica aujourd'hui ?", r: "Au museo Reina Sofía, à Madrid." },
        { q: "Le muralisme mexicain ?", r: "Peintures murales publiques sur l'histoire du peuple, après la révolution : Rivera, Orozco, Siqueiros." },
        { q: "Víctor Jara ?", r: "Chanteur chilien engagé, assassiné en 1973 après le coup d'État de Pinochet." },
        { q: "Que signifie « los bulos » ?", r: "Les fausses informations (aussi : las noticias falsas)." },
        { q: "Que signifie « el ciberacoso » ?", r: "Le cyberharcèlement." },
        { q: "Que signifie « la brecha digital » ?", r: "La fracture numérique." },
        { q: "Le mouvement du 15-M ?", r: "Les indignados, en mai 2011 : des jeunes occupent la Puerta del Sol contre le chômage et la corruption, organisés par les réseaux sociaux." },
        { q: "Constitución de 1978 ?", r: "La Constitution de l'Espagne démocratique, après la mort de Franco (1975)." },
      ],
      quiz: [
        { q: "Qui a peint Guernica ?", choix: ["Goya", "Picasso", "Velázquez", "Dalí"], bonne: 1, expl: "En 1937.", niv: 1 },
        { q: "Guernica dénonce :", choix: ["la révolution mexicaine", "une bataille contre Napoléon", "la conquête de l'Amérique", "le bombardement d'une ville basque en 1937"], bonne: 3, expl: "Par l'aviation allemande alliée de Franco.", niv: 2 },
        { q: "El 3 de mayo de 1808 en Madrid est un tableau de :", choix: ["Goya", "Picasso", "Frida Kahlo", "Diego Rivera"], bonne: 0, expl: "Peint en 1814, au Prado.", niv: 2 },
        { q: "« Los bulos » sont :", choix: ["des taureaux", "des bulles de savon", "des fausses informations", "des bureaux de vote"], bonne: 2, expl: "Synonyme : las noticias falsas.", niv: 1 },
        { q: "Diego Rivera est connu pour :", choix: ["ses chansons contre Pinochet", "ses portraits de rois d'Espagne", "ses films sur la guerre civile", "ses peintures murales sur l'histoire du peuple mexicain"], bonne: 3, expl: "Le muralisme mexicain.", niv: 2 },
        { q: "Quel exemple illustre le mieux « l'artiste au service du pouvoir » ?", choix: ["Picasso dénonçant le bombardement de Guernica", "Velázquez, peintre de la cour, dans Las Meninas", "Víctor Jara chantant contre la dictature", "Un graffiti contre la corruption"], bonne: 1, expl: "Les autres exemples critiquent le pouvoir.", niv: 3 },
        { q: "« La brecha digital » signifie :", choix: ["le code numérique", "la brèche dans un mur", "la fracture numérique", "la panne d'Internet"], bonne: 2, expl: "Inégalité d'accès au numérique.", niv: 1 },
        { q: "Le mouvement du 15-M (2011) a occupé :", choix: ["la Puerta del Sol à Madrid", "la Plaza de Mayo à Buenos Aires", "le Zócalo de Mexico", "la Rambla de Barcelone"], bonne: 0, expl: "Les indignados.", niv: 2 },
        { q: "Quelle phrase résume l'ambivalence des réseaux sociaux pour la citoyenneté ?", choix: ["Están prohibidos en España desde 2011", "Son útiles para ver vídeos de gatos", "Permiten movilizar a los ciudadanos, pero difunden bulos", "Sirven para votar en las elecciones"], bonne: 2, expl: "Un avantage et un risque.", niv: 3 },
        { q: "« El ciberacoso » désigne :", choix: ["le cyberharcèlement", "un achat en ligne", "le piratage informatique", "des cafés Internet"], bonne: 0, expl: "Acosar = harceler.", niv: 2 },
        { q: "La Constitution démocratique espagnole date de :", choix: ["1953", "1931", "1939", "1978"], bonne: 3, expl: "Trois ans après la mort de Franco.", niv: 1 },
        { q: "Víctor Jara est un symbole de l'axe « art et pouvoir » car :", choix: ["il a peint le portrait de Pinochet", "chanteur engagé, il est assassiné après le coup d'État de 1973", "chef de la censure, il interdit des chansons", "fondateur du muralisme mexicain"], bonne: 1, expl: "L'artiste victime du pouvoir.", niv: 3 },
      ] },
    { chapitre: 'lv-esp-10',
      fiche: `## Axes 5 et 6 : fictions et réalités ; innovations scientifiques et responsabilité

La littérature et le cinéma hispaniques jouent sans cesse avec la frontière entre rêve et réalité. La science, elle, pose la question de la responsabilité face à l'environnement et à l'humain.

### Axe 5 : fictions et réalités
La fiction nous éloigne-t-elle du réel, ou nous aide-t-elle à le comprendre ?
- **Vocabulaire** : **la novela** (le roman), **el cuento** (le conte, la nouvelle), **el relato** (le récit), **el personaje** (le personnage), **el narrador**, **la película** (le film), **el guion** (le scénario), **la serie**, **soñar** (rêver), **el sueño** (le rêve, le sommeil), **la imaginación**, **inventar**, **la mentira** (le mensonge), **engañar** (tromper).
- **Cervantes**, **Don Quijote de la Mancha** (1605 et 1615) : un **hidalgo** qui a trop lu de romans de chevalerie prend des **moulins à vent** pour des **géants**. Son écuyer **Sancho Panza** voit la réalité. Le premier grand roman moderne.
- **Calderón de la Barca**, **La vida es sueño** (1635) : une pièce où le héros ne sait plus si sa vie est rêve ou réalité.
- **Le réalisme magique** : le surnaturel est raconté comme normal. **Gabriel García Márquez** (Colombie), **Cien años de soledad** (1967), dans le village imaginaire de **Macondo** ; prix Nobel en 1982.
- **Jorge Luis Borges** (Argentine), **Ficciones** (1944) : labyrinthes, miroirs, bibliothèques infinies.
- **Guillermo del Toro**, **El laberinto del fauno** (2006) : une petite fille fuit dans un monde de conte la violence de l'Espagne franquiste de 1944.
- **Pedro Almodóvar** : un cinéma où le mélodrame dit les réalités de la société espagnole.

### Axe 6 : innovations scientifiques et responsabilité
Le progrès est-il toujours un bien ? Qui est responsable de ses effets ?
- **Vocabulaire** : **el invento** (l'invention), **el avance** (le progrès), **el científico**, **la investigación** (la recherche, faux ami), **investigar** (faire de la recherche), **el medio ambiente** (l'environnement), **el calentamiento global** (le réchauffement), **la sequía** (la sécheresse), **la contaminación** (la pollution, faux ami), **el reciclaje**, **las energías renovables**, **la energía solar / eólica**, **la robótica**, **los algoritmos**, **el riesgo** (le risque), **la ética**.
- **Santiago Ramón y Cajal** : prix Nobel de médecine en **1906** pour ses travaux sur les **neurones**.
- **Les énergies renouvelables** : l'Espagne produit une grande partie de son électricité grâce au **soleil** et au **vent**.
- **La sécheresse** et l'eau : les serres d'**Almería** (le « **mar de plástico** ») permettent une agriculture intensive qui consomme beaucoup d'eau.
- **La déforestation de l'Amazonie**, partagée entre plusieurs pays d'Amérique du Sud, menace le climat et les peuples indigènes.
- **Les algorithmes et les robots** : utiles en médecine, ils posent des questions de **datos personales**, d'**emploi** et de **vérité** des images.

### Phrases utiles
- **Don Quijote confunde la ficción con la realidad.**
- **El progreso científico no es siempre positivo: depende del uso que hagamos de él.**
- **Es urgente que los gobiernos luchen contra el calentamiento global.**

### À retenir pour le bac
- Don Quijote (1605) : la fiction qui déforme le réel ; Sancho Panza voit la réalité.
- Réalisme magique : García Márquez, Cien años de soledad (1967), Macondo.
- El laberinto del fauno (2006) : conte et franquisme.
- Axe 6 : Ramón y Cajal (Nobel 1906), renouvelables, sécheresse, mar de plástico, algorithmes.
- Piège : investigación = recherche ; contaminación = pollution.`,
      cartes: [
        { q: "Que signifie « la novela » ?", r: "Le roman." },
        { q: "Que signifie « el personaje » ?", r: "Le personnage." },
        { q: "Que signifie « el sueño » ?", r: "Le rêve (ou le sommeil)." },
        { q: "Don Quijote de la Mancha ?", r: "Roman de Cervantes (1605 et 1615) : un hidalgo qui prend des moulins à vent pour des géants." },
        { q: "Sancho Panza ?", r: "L'écuyer de Don Quichotte, qui voit la réalité telle qu'elle est." },
        { q: "La vida es sueño ?", r: "Pièce de Calderón de la Barca (1635) sur la frontière entre rêve et réalité." },
        { q: "Le réalisme magique ?", r: "Un récit où le surnaturel est raconté comme normal (García Márquez, Cien años de soledad, 1967)." },
        { q: "Macondo ?", r: "Le village imaginaire de Cien años de soledad." },
        { q: "El laberinto del fauno ?", r: "Film de Guillermo del Toro (2006) : un monde de conte face à la violence franquiste de 1944." },
        { q: "Que signifie « la investigación » ?", r: "La recherche scientifique (faux ami)." },
        { q: "Que signifie « la sequía » ?", r: "La sécheresse." },
        { q: "Que signifie « el medio ambiente » ?", r: "L'environnement." },
        { q: "Santiago Ramón y Cajal ?", r: "Scientifique espagnol, prix Nobel de médecine en 1906 pour ses travaux sur les neurones." },
        { q: "Le « mar de plástico » ?", r: "Les serres d'Almería : une agriculture intensive qui consomme beaucoup d'eau." },
      ],
      quiz: [
        { q: "Qui a écrit Don Quijote de la Mancha ?", choix: ["Cervantes", "Calderón de la Barca", "García Márquez", "Borges"], bonne: 0, expl: "Publié en 1605 et 1615.", niv: 1 },
        { q: "Don Quichotte prend des moulins à vent pour :", choix: ["des dragons", "des châteaux", "des géants", "des soldats"], bonne: 2, expl: "La fiction déforme sa vision du réel.", niv: 2 },
        { q: "Le réalisme magique consiste à :", choix: ["parler de magiciens célèbres", "décrire la réalité sans fiction", "écrire des contes pour enfants", "raconter le surnaturel comme s'il était normal"], bonne: 3, expl: "García Márquez en est le maître.", niv: 2 },
        { q: "« La investigación » signifie :", choix: ["une enquête de police", "la recherche scientifique", "un investissement financier", "une invitation"], bonne: 1, expl: "Un faux ami.", niv: 1 },
        { q: "Cien años de soledad se déroule à :", choix: ["Buenos Aires", "Madrid", "Macondo", "La Mancha"], bonne: 2, expl: "Un village imaginaire.", niv: 2 },
        { q: "Pourquoi El laberinto del fauno illustre-t-il l'axe « fictions et réalités » ?", choix: ["Il montre la conquête de l'Amérique", "C'est un documentaire sur les faunes", "Il raconte la vie de Cervantes", "Un monde de conte répond à la violence réelle du franquisme"], bonne: 3, expl: "Le conte comme refuge et comme regard sur l'histoire.", niv: 3 },
        { q: "« La sequía » signifie :", choix: ["la sécheresse", "la séquence", "la sécurité", "la scie"], bonne: 0, expl: "Un enjeu majeur en Espagne.", niv: 1 },
        { q: "Ramón y Cajal a reçu le prix Nobel de médecine pour ses travaux sur :", choix: ["les vaccins", "les neurones", "l'ADN", "le cœur"], bonne: 1, expl: "En 1906.", niv: 2 },
        { q: "Le « mar de plástico » d'Almería pose surtout un problème de :", choix: ["pêche industrielle en mer", "consommation d'eau et de pollution", "tourisme de plage", "bruit des avions"], bonne: 1, expl: "Agriculture intensive sous serre.", niv: 3 },
        { q: "« El calentamiento global » désigne :", choix: ["le réchauffement climatique", "le chauffage central", "la mondialisation", "un coup de chaleur"], bonne: 0, expl: "Calentar = chauffer.", niv: 2 },
        { q: "La vida es sueño est une œuvre de :", choix: ["Goya", "Picasso", "Almodóvar", "Calderón de la Barca"], bonne: 3, expl: "Une pièce de 1635.", niv: 1 },
        { q: "Quelle phrase nuance le mieux l'idée de progrès ?", choix: ["El progreso es bueno para todos los países", "El progreso es malo y hay que prohibirlo", "El progreso no es siempre positivo: depende del uso que hagamos de él", "No me interesa el progreso científico"], bonne: 2, expl: "Hagamos : subjonctif après el uso que (usage indéterminé).", niv: 3 },
      ] },
    { chapitre: 'lv-esp-11',
      fiche: `## Axes 7 et 8 : diversité et inclusion ; territoire et mémoire

Le monde hispanique est fait de peuples, de langues et d'histoires très différents, et il garde la trace de dictatures récentes. Ces deux axes reviennent très souvent dans les documents.

### Axe 7 : diversité et inclusion
Comment une société fait-elle place à toutes et à tous ?
- **Vocabulaire** : **la diversidad**, **la igualdad** (l'égalité), **la desigualdad**, **la discriminación**, **el racismo**, **el prejuicio** (le préjugé), **la minoría**, **los derechos** (les droits), **el machismo**, **la violencia de género** (les violences faites aux femmes), **el feminicidio**, **la discapacidad** (le handicap), **incluir**, **excluir**.
- **Les peuples indigènes** (**los pueblos originarios**) : **quechua** (Pérou, Bolivie, Équateur), **aimara**, **guaraní** (langue officielle du Paraguay avec l'espagnol), **náhuatl** (Mexique), **mapuche** (Chili et Argentine). Beaucoup luttent pour leurs terres et leur langue.
- **Rigoberta Menchú**, Maya du Guatemala, reçoit le **prix Nobel de la paix en 1992** pour la défense des droits des peuples indigènes.
- **L'égalité femmes-hommes** : en Argentine, le mouvement **Ni una menos** (2015) dénonce les **feminicidios** ; en Espagne, le **8 de marzo** (8M) rassemble chaque année d'immenses manifestations féministes.
- **Les droits LGBT** : l'Espagne autorise le **matrimonio igualitario** (mariage pour tous) dès **2005**, parmi les premiers pays au monde.

### Axe 8 : territoire et mémoire
Comment un pays vit-il avec les blessures de son passé ?
- **Vocabulaire** : **la memoria**, **el recuerdo** (le souvenir), **recordar** (se souvenir), **olvidar** (oublier), **el olvido**, **la dictadura**, **el golpe de Estado** (le coup d'État), **los desaparecidos** (les disparus), **la fosa común** (la fosse commune), **la transición**, **la reconciliación**, **el territorio**, **el pueblo** (le village, ou le peuple), **despoblado** (dépeuplé).
- **Espagne** : la **guerra civil** (1936-1939), puis la **dictature de Franco** (1939-1975). Des milliers de victimes restent dans des **fosas comunes**. La **ley de Memoria Histórica** (2007), puis la **ley de Memoria Democrática** (2022) aident à les retrouver et à reconnaître les victimes. En **2019**, les restes de Franco sont sortis du mausolée où il était honoré.
- **Argentine** : la dictature militaire (1976-1983) fait disparaître des milliers d'opposants, **los desaparecidos**. Depuis **1977**, les **Madres de Plaza de Mayo**, un foulard blanc sur la tête, marchent pour demander la vérité ; les **Abuelas** recherchent les bébés volés.
- **Chili** : le **golpe de Estado** du **11 septembre 1973** porte au pouvoir **Pinochet**, jusqu'en 1990.
- **Le territoire** : **la España vaciada** (l'Espagne vidée) désigne les campagnes qui perdent leurs habitants ; l'Espagne compte **17 comunidades autónomas** et des langues **cooficiales** (catalan, galicien, basque).

### Phrases utiles
- **Recordar el pasado es necesario para que no se repita.**
- **Las Madres de Plaza de Mayo siguen luchando por la verdad.**
- **Es inaceptable que todavía haya discriminación.**

### À retenir pour le bac
- Axe 7 : pueblos originarios, Rigoberta Menchú (Nobel 1992), Ni una menos (2015), matrimonio igualitario (2005).
- Axe 8 : guerre civile (1936-1939), Franco (1939-1975), lois de mémoire (2007, 2022).
- Argentine : desaparecidos, Madres de Plaza de Mayo ; Chili : coup d'État de 1973.
- La España vaciada, 17 comunidades autónomas.
- Piège : el pueblo = le village ou le peuple, selon le contexte.`,
      cartes: [
        { q: "Que signifie « la igualdad » ?", r: "L'égalité." },
        { q: "Que signifie « el prejuicio » ?", r: "Le préjugé." },
        { q: "Que signifie « la discapacidad » ?", r: "Le handicap." },
        { q: "Los pueblos originarios ?", r: "Les peuples indigènes : quechua, aimara, guaraní, náhuatl, mapuche..." },
        { q: "Rigoberta Menchú ?", r: "Maya du Guatemala, prix Nobel de la paix en 1992 pour les droits des peuples indigènes." },
        { q: "Ni una menos ?", r: "Mouvement né en Argentine en 2015 contre les feminicidios." },
        { q: "Matrimonio igualitario en Espagne ?", r: "Le mariage pour tous, autorisé dès 2005." },
        { q: "Que signifie « los desaparecidos » ?", r: "Les disparus : opposants enlevés et tués par les dictatures, en Argentine notamment." },
        { q: "Que signifie « la fosa común » ?", r: "La fosse commune." },
        { q: "Dates de la guerre civile et du franquisme ?", r: "Guerre civile : 1936-1939. Dictature de Franco : 1939-1975." },
        { q: "Lois de mémoire en Espagne ?", r: "Ley de Memoria Histórica (2007), puis ley de Memoria Democrática (2022)." },
        { q: "Madres de Plaza de Mayo ?", r: "Depuis 1977, des mères de disparus argentins marchent, un foulard blanc sur la tête, pour la vérité." },
        { q: "Coup d'État au Chili ?", r: "Le 11 septembre 1973 : Pinochet prend le pouvoir jusqu'en 1990." },
        { q: "La España vaciada ?", r: "Les campagnes espagnoles qui perdent leurs habitants." },
      ],
      quiz: [
        { q: "« La igualdad » signifie :", choix: ["l'identité", "l'église", "l'égoïsme", "l'égalité"], bonne: 3, expl: "La desigualdad = l'inégalité.", niv: 1 },
        { q: "Rigoberta Menchú a reçu le prix Nobel de la paix en :", choix: ["1906", "1992", "1982", "2005"], bonne: 1, expl: "500 ans après l'arrivée de Colomb en Amérique.", niv: 2 },
        { q: "Les Madres de Plaza de Mayo réclament la vérité sur :", choix: ["les migrants de la frontière mexicaine", "les victimes de la guerre civile espagnole", "les disparus de la dictature argentine", "les mineurs du Chili"], bonne: 2, expl: "Depuis 1977.", niv: 2 },
        { q: "La dictature de Franco a duré de :", choix: ["1939 à 1975", "1936 à 1939", "1975 à 1978", "1931 à 1936"], bonne: 0, expl: "1936-1939 : la guerre civile.", niv: 1 },
        { q: "« El prejuicio » signifie :", choix: ["le préjudice", "le préjugé", "le procès", "le prix"], bonne: 1, expl: "Un faux ami partiel.", niv: 2 },
        { q: "Une photo montre des femmes âgées portant un foulard blanc sur une place de Buenos Aires. Quel axe illustre-t-elle le mieux ?", choix: ["Fictions et réalités", "Innovations scientifiques et responsabilité", "Territoire et mémoire", "Citoyenneté et mondes virtuels"], bonne: 2, expl: "Les Madres de Plaza de Mayo.", niv: 3 },
        { q: "Le guaraní est langue officielle, avec l'espagnol, au :", choix: ["Pérou", "Mexique", "Chili", "Paraguay"], bonne: 3, expl: "Un pays bilingue.", niv: 1 },
        { q: "« Ni una menos » est un mouvement contre :", choix: ["les féminicides", "la pollution", "la censure", "le chômage des jeunes"], bonne: 0, expl: "Né en Argentine en 2015.", niv: 2 },
        { q: "Pourquoi les lois de mémoire de 2007 et 2022 sont-elles importantes en Espagne ?", choix: ["Elles aident à retrouver et reconnaître les victimes de la guerre et du franquisme", "Elles interdisent d'étudier la guerre civile au lycée", "Elles ont fixé la fin de la dictature de Franco", "Elles organisent les élections régionales"], bonne: 0, expl: "Fosses communes, reconnaissance.", niv: 3 },
        { q: "« La España vaciada » désigne :", choix: ["les régions sans eau", "les plages vides en hiver", "les villes après le confinement", "les campagnes qui perdent leurs habitants"], bonne: 3, expl: "Vaciar = vider.", niv: 2 },
        { q: "Le coup d'État de Pinochet au Chili a lieu en :", choix: ["1939", "1973", "1953", "1963"], bonne: 1, expl: "Le 11 septembre 1973.", niv: 1 },
        { q: "Quelle phrase traduit « il faut se souvenir du passé pour qu'il ne se répète pas » ?", choix: ["Tiene que recordar el pasado por no repetirse", "Hay que recordar el pasado para que no se repite", "Hay que recordar el pasado para que no se repita", "Hay que acordar el pasado para no se repita"], bonne: 2, expl: "Para que + subjonctif.", niv: 3 },
      ] },
    { chapitre: 'lv-esp-12',
      fiche: `## Le monde hispanique : repères et pièges de langue

Quelques repères sur les pays hispanophones et quelques règles de langue qui reviennent dans toutes les copies : accents, por ou para, tú ou usted, faux amis. Ce sont des points faciles à gagner.

### Repères
- L'espagnol est la langue officielle d'une **vingtaine de pays** : l'Espagne, le Mexique, l'Amérique centrale, une grande partie de l'Amérique du Sud, Cuba, la République dominicaine, Porto Rico, et la Guinée équatoriale en Afrique.
- Près de **500 millions** de personnes l'ont pour langue maternelle : c'est une des langues les plus parlées au monde. Le Mexique est le pays qui compte le plus d'hispanophones.
- L'Espagne est divisée en **17 comunidades autónomas** ; le **catalán**, le **gallego** et l'**euskera** (basque) y sont **cooficiales** dans leurs régions.
- En Amérique latine, on dit **ustedes** pour « vous » au pluriel, même entre amis (pas de **vosotros**). En Argentine et en Uruguay, on emploie **vos** à la place de **tú** : **vos tenés** (tu as).
- Quelques mots changent selon les pays : **el coche** (Espagne) / **el carro** ou **el auto** (Amérique) ; **el ordenador** / **la computadora** ; **el móvil** / **el celular**.

### Les accents écrits
- Un mot terminé par une **voyelle**, **n** ou **s** porte l'accent oral sur l'avant-dernière syllabe : **casa**, **joven**, **lunes**. S'il est accentué ailleurs, on écrit l'accent : **café**, **canción**, **francés**.
- Un mot terminé par une autre consonne porte l'accent oral sur la dernière syllabe : **ciudad**, **hablar**. Sinon, accent écrit : **árbol**, **fácil**.
- Les mots accentués sur l'antépénultième (**esdrújulas**) portent **toujours** un accent écrit : **música**, **teléfono**, **político**.
- Les mots interrogatifs ont un accent : **qué**, **cómo**, **dónde**, **cuándo**, **por qué**.
- L'accent distingue des mots courts : **tú** (toi) / **tu** (ton) ; **él** (lui) / **el** (le) ; **sí** (oui) / **si** (si) ; **más** (plus) / **mas** (mais, rare).

### Por ou para
- **Para** : le **but** (**estudio para aprobar**), le **destinataire** (**un regalo para ti**), la **destination** (**salgo para Madrid**), l'**échéance** (**para el lunes**).
- **Por** : la **cause** (**por culpa de**, à cause de ; **gracias a**, grâce à), le **moyen** (**por teléfono**), le **lieu traversé** (**paseo por la ciudad**), le **prix** et l'**échange** (**lo compré por diez euros**), l'**agent** du passif (**escrito por Cervantes**).

### Autres pièges fréquents
- **Tú** ou **usted** : **usted** est le vouvoiement de politesse, avec le verbe à la 3e personne : **¿Cómo está usted?**
- L'**apocope** : **bueno**, **malo**, **primero**, **tercero**, **alguno**, **ninguno** perdent leur **-o** devant un nom masculin singulier : **un buen libro**, **el primer día**, **ningún problema**. **Grande** devient **gran** devant tout nom singulier : **una gran ciudad**.
- « On » : **se** + verbe (**se dice que**), ou la 3e personne du pluriel (**dicen que**).
- Faux amis : **la salida** (la sortie), **el vaso** (le verre), **la tienda** (le magasin), **la ropa** (les vêtements), **el polvo** (la poussière), **quitar** (enlever), **recordar** (se souvenir).

### À retenir pour le bac
- Une vingtaine de pays, près de 500 millions de locuteurs natifs.
- Esdrújulas : toujours un accent écrit ; interrogatifs accentués.
- Para : but, destinataire ; por : cause, moyen, lieu traversé, prix.
- Apocope : buen, mal, primer, gran, ningún.
- Piège : tu (ton) et tú (toi), el (le) et él (lui).`,
      cartes: [
        { q: "Dans combien de pays l'espagnol est-il langue officielle ?", r: "Une vingtaine, sur trois continents (Europe, Amérique, Afrique)." },
        { q: "Pays qui compte le plus d'hispanophones ?", r: "Le Mexique." },
        { q: "Langues cooficiales en Espagne ?", r: "Le catalan, le galicien et le basque (euskera), dans leurs régions." },
        { q: "« Vous » au pluriel en Amérique latine ?", r: "Ustedes, même entre amis : on n'emploie pas vosotros." },
        { q: "Le voseo ?", r: "En Argentine et en Uruguay, vos remplace tú : vos tenés." },
        { q: "Règle des esdrújulas ?", r: "Elles portent toujours un accent écrit : música, teléfono." },
        { q: "Tú et tu ?", r: "Tú : toi (pronom). Tu : ton, ta (possessif)." },
        { q: "Sí et si ?", r: "Sí : oui. Si : si (condition)." },
        { q: "Para : quels emplois ?", r: "Le but, le destinataire, la destination, l'échéance." },
        { q: "Por : quels emplois ?", r: "La cause, le moyen, le lieu traversé, le prix, l'agent du passif." },
        { q: "Apocope de bueno, primero, ninguno ?", r: "Buen, primer, ningún devant un nom masculin singulier." },
        { q: "Comment traduire « on dit que » ?", r: "Se dice que, ou dicen que." },
        { q: "Que signifie « la ropa » ?", r: "Les vêtements (faux ami)." },
        { q: "Que signifie « la tienda » ?", r: "Le magasin (ou la tente)." },
      ],
      quiz: [
        { q: "Le pays qui compte le plus d'hispanophones est :", choix: ["l'Argentine", "l'Espagne", "le Mexique", "la Colombie"], bonne: 2, expl: "Bien plus peuplé que l'Espagne.", niv: 1 },
        { q: "Compléter : « Este regalo es ___ ti. »", choix: ["para", "por", "a", "en"], bonne: 0, expl: "Le destinataire : para.", niv: 2 },
        { q: "Compléter : « Paseamos ___ la ciudad. »", choix: ["para", "por", "a", "de"], bonne: 1, expl: "Le lieu traversé : por.", niv: 2 },
        { q: "« La ropa » signifie :", choix: ["le chemin", "une robe", "la corde", "les vêtements"], bonne: 3, expl: "Un faux ami.", niv: 1 },
        { q: "Quelle forme est correcte ?", choix: ["el primer día", "el primero día", "el primera día", "el primo día"], bonne: 0, expl: "Apocope devant un nom masculin singulier.", niv: 2 },
        { q: "Pourquoi « música » porte-t-il un accent écrit ?", choix: ["Pour le distinguer de musica, mot féminin", "Il finit par une voyelle", "C'est un mot d'origine latine", "Les mots accentués sur l'antépénultième en portent toujours un"], bonne: 3, expl: "Les esdrújulas.", niv: 3 },
        { q: "En Argentine, « vos tenés » signifie :", choix: ["il a", "vous avez", "tu as", "nous avons"], bonne: 2, expl: "Le voseo : vos remplace tú.", niv: 1 },
        { q: "Quelle phrase dit « lui, il parle espagnol » ?", choix: ["El habla español", "Él habla español", "Le habla español", "Él hablas español"], bonne: 1, expl: "Él avec accent = lui.", niv: 2 },
        { q: "Quelle phrase traduit « on dit que la crise est finie » ?", choix: ["Se dicen que la crisis está terminada", "On dice que la crisis ha terminado", "Uno dicen que la crisis ha terminado", "Se dice que la crisis ha terminado"], bonne: 3, expl: "Se + 3e personne du singulier, ou dicen que.", niv: 3 },
        { q: "« Lo compré ___ diez euros. »", choix: ["para", "por", "con", "de"], bonne: 1, expl: "Le prix : por.", niv: 2 },
        { q: "En Amérique latine, pour dire « vous » à plusieurs amis, on emploie :", choix: ["vos, entre amis", "vosotros, entre amis", "ustedes, toujours", "usted, entre amis"], bonne: 2, expl: "Ustedes, toujours, même entre amis.", niv: 1 },
        { q: "Quelle phrase dit sans faute « Madrid est une grande ville » ?", choix: ["Madrid es una gran ciudad", "Madrid es una grande ciudad", "Madrid es una gran ciudad grande", "Madrid es un gran ciudad"], bonne: 0, expl: "Grande devient gran devant un nom singulier.", niv: 3 },
      ] },
  ],
  methode: [
    {
      id: "lv-esp-m1", mat: "lv-esp", titre: "Rendre compte d'un document oral",
      formules: ["Rendez compte en français de ce que vous avez compris du document.", "Vous rendrez compte du document en français en vous aidant des questions suivantes."],
      vu: ["Évaluation de langues vivantes de terminale (note de service du 28 juillet 2021, version consolidée de juin 2025)", "Évaluations de classe et de remplacement : document de 1 min 30 au plus, trois écoutes"],
      pts: "la moitié de la note de compréhension (10 points sur 20 avec l'écrit)",
      attendu: "Un compte rendu en français, rédigé en phrases, qui dit de quel document il s'agit (interview, reportage, publicité), qui parle, de quoi, puis les informations précises : faits, chiffres, raisons, opinions. Le correcteur valorise la précision et les liens logiques, pas la traduction mot à mot.",
      etapes: ["Avant l'écoute, lire le titre et deviner le thème et le vocabulaire possibles.", "1re écoute : noter le type de document, les voix, le thème général.", "2e écoute : noter les mots-clés, les noms, les dates et les chiffres.", "Pendant la minute de pause, trier les notes en idées.", "3e écoute : vérifier les détails, repérer les liens logiques et le ton.", "Rédiger en français : présentation, puis idées dans l'ordre logique, puis l'opinion ou l'intention."],
      mots: ["Il s'agit d'un reportage diffusé par…", "La journaliste interroge…", "Selon lui…", "Il explique que…", "Elle regrette que…", "En conclusion…"],
      pieges: ["Écrire une liste de mots isolés au lieu de phrases.", "Inventer ce qu'on n'a pas entendu pour remplir.", "Confondre les nombres (quince, cincuenta, quinientos).", "Oublier de dire qui parle et quel est son point de vue."],
      cas: "Un reportage radio d'une minute sur un village de Castille qui rouvre son école grâce à l'arrivée de familles venues de la ville. On entend le maire, une mère de famille et une institutrice.",
      question: "Rédigez en français les deux premières phrases d'un compte rendu de ce document.",
      modele: "Il s'agit d'un reportage radio consacré à un village de Castille qui rouvre son école. Le maire, une mère de famille et l'institutrice expliquent comment l'arrivée de familles venues de la ville a sauvé le village, qui se vidait depuis des années.",
      grille: ["Type de document et thème annoncés", "Les intervenants identifiés", "Des informations précises (faits, causes)", "Des phrases complètes en français"]
    },
    {
      id: "lv-esp-m2", mat: "lv-esp", titre: "Comprendre un texte écrit",
      formules: ["Rendez compte en français du texte.", "Répondez aux questions suivantes en espagnol.", "Relevez dans le texte les éléments qui montrent que…", "¿Qué siente el personaje? Justifica con elementos del texto."],
      vu: ["Évaluation de langues vivantes de terminale (note de service du 28 juillet 2021, version consolidée de juin 2025)", "Un ou deux textes de 2 500 à 4 300 signes, compte rendu libre ou guidé"],
      pts: "la moitié de la note de compréhension",
      attendu: "Montrer qu'on a compris le sens général et les détails : situation, personnages, faits, sentiments, point de vue de l'auteur. Chaque idée doit s'appuyer sur le texte (citation courte entre guillemets ou reformulation). Si on répond en espagnol, on reformule au lieu de recopier.",
      etapes: ["Lire le paratexte : auteur, date, source, titre.", "Lire une première fois pour répondre à : qui, quoi, où, quand, pourquoi.", "Relire en soulignant les mots qui disent les sentiments et l'opinion.", "Repérer l'organisation du texte (début, tournant, fin).", "Rédiger en citant de courts passages pour justifier.", "Relire pour vérifier qu'aucune partie du texte n'est oubliée."],
      mots: ["El texto es un fragmento de…", "El narrador cuenta que…", "Según el autor…", "Lo demuestra la frase…", "En cambio…", "Al final…"],
      pieges: ["Recopier des lignes entières sans les expliquer.", "Raconter le texte sans dire le point de vue de l'auteur.", "Se bloquer sur un mot inconnu au lieu de le deviner par le contexte.", "Contresens sur un faux ami (embarazada, constipado)."],
      cas: "Un article de presse inventé : une jeune ingénieure de Madrid quitte la capitale pour télétravailler dans le village de ses grands-parents, dans la province de Soria.",
      question: "¿Por qué decidió Lucía instalarse en el pueblo? Contesta en español con tus propias palabras.",
      modele: "Lucía decidió instalarse en el pueblo porque estaba cansada del ritmo de Madrid y del precio de los pisos. Gracias al teletrabajo, puede conservar su empleo y vivir en la casa de sus abuelos, más cerca de la naturaleza.",
      grille: ["Réponse exacte d'après le texte", "Reformulation, pas de copie", "Au moins deux raisons", "Espagnol compréhensible"]
    },
    {
      id: "lv-esp-m3", mat: "lv-esp", titre: "S'exprimer à l'écrit : argumenter",
      formules: ["¿Qué opinas de…? Argumenta tu respuesta.", "Escribe un artículo para la revista de tu instituto.", "Imagina la carta que…", "Comenta esta imagen en relación con el eje…"],
      vu: ["Évaluation de langues vivantes de terminale (note de service du 28 juillet 2021, version consolidée de juin 2025)", "Une ou deux questions d'expression, parfois à partir d'une image"],
      pts: "la note d'expression écrite (10 points sur 20)",
      attendu: "Un texte en espagnol qui respecte la forme demandée (article, lettre, essai), la longueur indiquée et le sujet. Le correcteur attend des idées organisées en paragraphes, des exemples précis tirés des axes, des connecteurs, et une langue correcte et variée (ser et estar, passés, subjonctif).",
      etapes: ["Lire la consigne : forme, destinataire, longueur, thème.", "Chercher trois idées et un exemple pour chacune (pays, œuvre, fait).", "Faire un plan : introduction, deux ou trois paragraphes, conclusion.", "Rédiger avec des connecteurs et au moins une phrase au subjonctif.", "Garder 10 minutes pour relire accents, accords, ser et estar."],
      mots: ["En primer lugar", "Además", "Sin embargo", "Por eso", "Es necesario que + subjonctif", "En conclusión"],
      pieges: ["Oublier la forme demandée (une lettre sans formule d'appel ni signature).", "Écrire trop court ou très au-delà de la longueur demandée.", "Traduire mot à mot depuis le français.", "Rester général sans aucun exemple hispanique."],
      cas: "Sujet : la revue du lycée prépare un numéro sur la « España vaciada ». Écris un article (150 mots environ) : faut-il aider les jeunes à vivre à la campagne ?",
      question: "Écris l'introduction de l'article en espagnol (3 ou 4 phrases).",
      modele: "Hoy en día, miles de pueblos españoles se están quedando sin habitantes: es lo que se llama la España vaciada. Los jóvenes se van a las ciudades para estudiar y trabajar. Sin embargo, el teletrabajo ofrece nuevas oportunidades. ¿Es necesario que el Estado ayude a los jóvenes a vivir en el campo?",
      grille: ["Le thème et l'enjeu présentés", "Une question qui annonce l'argumentation", "Un connecteur d'opposition", "Une phrase au subjonctif correcte"]
    },
    {
      id: "lv-esp-m4", mat: "lv-esp", titre: "L'oral : choisir le document qui illustre le mieux un axe",
      formules: ["Choisissez un des trois axes proposés.", "Expliquez en quoi l'un des deux documents illustre le mieux l'axe choisi.", "¿Cuál de los dos documentos ilustra mejor el eje?"],
      vu: ["Évaluation de langues vivantes de terminale (note de service du 28 juillet 2021, version consolidée de juin 2025)", "Oral de 10 minutes après 10 minutes de préparation : 5 minutes de présentation au plus, puis entretien"],
      pts: "la note d'expression orale (moitié de la note de l'oral)",
      attendu: "Le candidat choisit un axe parmi trois, présente rapidement les deux documents (images, citations), puis explique en espagnol lequel illustre le mieux l'axe et pourquoi. Pendant l'entretien, il répond aux questions, précise et nuance. Le jury note la compréhension des documents, l'argumentation, la richesse de la langue et la capacité à dialoguer.",
      etapes: ["Choisir l'axe que l'on connaît le mieux.", "Décrire chaque document en deux phrases (nature, contenu).", "Relier chaque document à l'axe.", "Dire lequel illustre le mieux l'axe, avec deux raisons.", "Prévoir une phrase de conclusion et une ouverture vers un exemple vu en classe."],
      mots: ["He elegido el eje…", "En la foto se ve…", "Esta cita significa que…", "A mi parecer, el documento A ilustra mejor el eje porque…", "Mientras que el documento B…", "Para terminar…"],
      pieges: ["Réciter une fiche apprise sans parler des documents.", "Décrire l'image sans jamais la relier à l'axe.", "Dépasser 5 minutes de présentation.", "Répondre en un mot pendant l'entretien."],
      cas: "Axe « Territoire et mémoire ». Document A : une photographie de la Valle de Cuelgamuros. Document B : une citation d'une association qui recherche les disparus de la guerre civile.",
      question: "Rédige la phrase qui annonce ton choix et ta première raison.",
      modele: "A mi parecer, el documento B ilustra mejor el eje Territorio y memoria, porque muestra que las familias todavía buscan a sus desaparecidos: la memoria de la guerra civil sigue viva en el territorio español.",
      grille: ["L'axe nommé", "Un choix clair entre les documents", "Une raison liée au contenu du document", "Espagnol correct à l'oral"]
    },
    {
      id: "lv-esp-m5", mat: "lv-esp", titre: "Relier deux documents et prendre position",
      formules: ["¿Qué tienen en común los dos documentos?", "En relación con el eje…, ¿qué muestran los documentos?", "Après avoir pris connaissance du dossier, répondez à la question suivante."],
      vu: ["Évaluation de langues vivantes de terminale (note de service du 28 juillet 2021, version consolidée de juin 2025) : question possible sur l'ensemble du dossier", "En voie technologique, l'ETLV peut remplacer l'oral (5 minutes de présentation puis entretien)"],
      pts: "une partie de la compréhension ou de l'expression",
      attendu: "Montrer le lien entre deux documents (même thème, points de vue différents ou complémentaires) et les rattacher à un axe. Une phrase par document, puis une phrase de synthèse, puis un avis nuancé.",
      etapes: ["Résumer chaque document en une phrase.", "Trouver le point commun (le thème, l'axe).", "Trouver la différence (point de vue, époque, pays, ton).", "Conclure par un avis personnel nuancé."],
      mots: ["Ambos documentos", "Al igual que", "En cambio", "Mientras que", "Los dos muestran que…", "Personalmente, pienso que…"],
      pieges: ["Traiter un seul document.", "Juxtaposer deux résumés sans les comparer.", "Donner un avis sans le justifier."],
      cas: "Document oral : un reportage sur une école de village qui rouvre. Document écrit : une ingénieure qui s'installe dans le village de ses grands-parents.",
      question: "¿Qué tienen en común los dos documentos? Contesta en español en dos o tres frases.",
      modele: "Ambos documentos tratan de la España vaciada y muestran que algunos pueblos pueden revivir gracias a la llegada de nuevos habitantes. Mientras que el reportaje insiste en las familias y la escuela, el artículo cuenta la historia de una sola persona y del teletrabajo.",
      grille: ["Le point commun", "Une différence", "Des connecteurs de comparaison", "Espagnol correct"]
    },
  ],
  sujets: [
    {
      id: "lv-esp-s1", matiere: 'lv-esp', titre: "Devoir d'entraînement : la España vaciada (axe Territoire et mémoire)", duree: 90,
      enonce: `## Devoir d'entraînement (inventé, au format de l'évaluation écrite de terminale)

Ce devoir est inventé pour s'entraîner : le document oral et le texte ont été écrits pour cet exercice, les personnes et le village n'existent pas. Durée : 1 h 30. Axe : **Territoire et mémoire** (avec un lien possible vers **Espace privé et espace public**).

### Partie 1 : compréhension de l'oral (5 points)
Document : « **La escuela vuelve a abrir en Villaseca** », reportage radio (environ 1 min 20). Si personne ne peut te le lire, lis la transcription ci-dessous **une seule fois**, cache-la, puis réponds.

Transcription :
« Buenos días. Hoy estamos en Villaseca, un pueblo de la provincia de Soria que hace diez años solo tenía cuarenta habitantes. Esta mañana, por primera vez desde 2009, los niños han vuelto a la escuela. Son once alumnos, de tres a doce años. El alcalde, Andrés Gómez, está muy emocionado: "Cuando cerraron la escuela, pensamos que el pueblo iba a morir. Pero en los últimos tres años han llegado siete familias de Madrid y de Valencia. Les ofrecimos casas a precio muy bajo y una buena conexión a internet." Marta, una de las madres, explica por qué se fue de la ciudad: "En Madrid pagábamos mil doscientos euros de alquiler y no veíamos a nuestros hijos. Aquí trabajo desde casa y ellos juegan en la calle." La maestra, Carmen, también está contenta, pero tiene una preocupación: "Si el año que viene no llegan más familias, la escuela podría cerrar otra vez. Hace falta que el gobierno ayude a los pueblos con transportes y médicos." Desde Villaseca, para Radio Castilla, Pablo Ortega. »

**Consigne** : rends compte en français de ce que tu as compris (qui parle, quel événement, pourquoi, quelles inquiétudes), en 8 à 12 lignes.

### Partie 2 : compréhension de l'écrit (5 points)
Texte : « **Volver al pueblo de los abuelos** » (article inventé).

Lucía Martín tiene veintinueve años y es ingeniera informática. Hasta el año pasado vivía en un piso pequeño en el centro de Madrid, compartido con dos compañeros. «Trabajaba diez horas al día, pasaba una hora en el metro y, al llegar a casa, solo tenía ganas de dormir», recuerda. Cuando su empresa le propuso teletrabajar cuatro días por semana, no lo dudó: hizo las maletas y se instaló en la casa de sus abuelos, en un pueblo de ochenta habitantes en la provincia de Soria.

La casa llevaba quince años cerrada. Lucía tuvo que arreglar el tejado, pintar las paredes y, sobre todo, conseguir una buena conexión a internet. «Al principio, los vecinos me miraban como a una extraterrestre. No entendían que alguien pudiera trabajar para una empresa de Madrid sin salir de su cocina», cuenta riéndose. Hoy, los mayores del pueblo le piden ayuda para hacer trámites en línea y ella aprende de ellos a cuidar el huerto.

Para Lucía, volver al pueblo es también una manera de recuperar una memoria familiar. En el desván encontró las cartas que su abuelo escribía a su abuela cuando trabajaba en Alemania, en los años sesenta, como tantos españoles que emigraron entonces. «Mi abuelo se fue porque aquí no había trabajo. Yo vuelvo porque, por fin, el trabajo puede venir conmigo», explica.

Sin embargo, no todo es fácil. El médico pasa por el pueblo una vez por semana, el autobús solo llega dos veces al día y la tienda más cercana está a veinte kilómetros. En invierno, las temperaturas bajan a menos diez grados y muchas tardes Lucía no ve a nadie. «A veces echo de menos a mis amigos y los conciertos. Pero no me arrepiento: aquí tengo tiempo para vivir.»

Su caso no es único. Según varias asociaciones, cada año algunos cientos de jóvenes eligen instalarse en pueblos de la llamada España vaciada, aunque siguen siendo pocos frente a los miles que se marchan. Para ellos, el reto es que estos pueblos no se conviertan solo en lugares de vacaciones, sino en sitios donde se pueda trabajar, estudiar y envejecer con dignidad.

**Consigne** : réponds en français.
- a) Présente Lucía et dis pourquoi elle a quitté Madrid.
- b) Quelles difficultés a-t-elle rencontrées en arrivant ? Comment ses relations avec les voisins ont-elles évolué ?
- c) Explique le lien entre l'histoire du grand-père et celle de Lucía.
- d) Quelles limites de la vie au village le texte montre-t-il ? Que pense Lucía de son choix ?

### Partie 3 : expression écrite (10 points)
Réponds en espagnol à **une** des deux questions (150 mots environ).
- **Sujet A** : La revista de tu instituto prepara un número sobre la España vaciada. Escribe un artículo: ¿hay que ayudar a los jóvenes a vivir en el campo? Da ejemplos.
- **Sujet B** : Diez años después, Lucía escribe una carta a una amiga de Madrid para contarle su vida en el pueblo. Imagina esta carta.`,
      corrige: `## Corrigé et conseils

### Partie 1 : compréhension de l'oral
Éléments attendus :
- Type de document : un **reportage radio** (Radio Castilla), dans le village de **Villaseca**, province de **Soria**.
- L'événement : l'école **rouvre** pour la première fois depuis **2009** ; **11 élèves** de 3 à 12 ans. Il y a dix ans, le village n'avait que **40 habitants**.
- Le **maire** (Andrés Gómez) est ému : il pensait que le village allait mourir. **Sept familles** venues de Madrid et de Valence sont arrivées en trois ans, grâce à des **maisons peu chères** et une **bonne connexion internet**.
- **Marta**, une mère : à Madrid, elle payait **1 200 euros de loyer** et ne voyait pas ses enfants ; ici, elle **télétravaille** et les enfants jouent dans la rue.
- **Carmen**, l'institutrice : contente mais **inquiète** : sans nouvelles familles, l'école pourrait **refermer** ; elle demande au gouvernement des **transports** et des **médecins**.
Pour 5/5 : toutes ces idées, dans des phrases claires. Pour 2,5/5 : l'événement et une ou deux raisons seulement.

### Partie 2 : compréhension de l'écrit
- a) Lucía Martín, **29 ans**, **ingénieure informatique**. Elle vivait en colocation à Madrid, travaillait dix heures par jour et passait une heure dans le métro. Le **télétravail** (quatre jours par semaine) lui a permis de partir dans la maison de ses grands-parents, près de Soria.
- b) La maison était **fermée depuis quinze ans** : toit, peinture, connexion internet. Les voisins la regardaient « comme une extraterrestre » ; aujourd'hui ils lui demandent de l'aide pour les démarches en ligne et elle apprend d'eux à cultiver le potager : un **échange entre générations**.
- c) Le grand-père a **émigré en Allemagne** dans les années soixante parce qu'il n'y avait pas de travail ; Lucía revient parce que le travail « peut venir avec elle ». Le texte oppose **l'exode d'hier** et **le retour d'aujourd'hui**, et relie le lieu à la **mémoire familiale** (les lettres trouvées au grenier).
- d) Limites : médecin une fois par semaine, bus deux fois par jour, magasin à vingt kilomètres, froid, solitude ; elle regrette ses amis et les concerts. Mais elle **ne regrette pas** son choix : elle a « le temps de vivre ». Le texte rappelle que ces jeunes restent **peu nombreux** face aux départs.

### Partie 3 : expression écrite (exemple pour le sujet A, environ 150 mots)
**¿Hay que ayudar a los jóvenes a vivir en el campo?**
Hoy en día, miles de pueblos españoles se están quedando sin habitantes: es la llamada España vaciada. Sin embargo, algunos jóvenes deciden volver, como lo muestra el ejemplo de Villaseca, en Soria, donde la escuela ha vuelto a abrir.
En primer lugar, ayudar a los jóvenes es necesario porque sin ellos los pueblos mueren: sin niños, las escuelas cierran y los mayores se quedan solos. Además, el teletrabajo permite trabajar para una empresa de la ciudad sin vivir en ella.
No obstante, las ayudas no bastan si no hay médicos, autobuses ni internet. Por eso, es importante que el gobierno invierta en servicios públicos y no solo en casas baratas.
En conclusión, pienso que vivir en el campo puede ser una oportunidad, siempre que el Estado garantice los mismos derechos que en la ciudad.

Ce que le correcteur regarde : la forme (titre d'article), des paragraphes, des exemples précis, des connecteurs (sin embargo, además, por eso), un subjonctif (es importante que invierta), ser et estar justes.`,
      grille: [
        { c: "Oral : type de document, lieu et événement identifiés", pts: 2 },
        { c: "Oral : intervenants, raisons et inquiétude rendues avec précision", pts: 3 },
        { c: "Écrit : situation de Lucía et raisons du départ (a, b)", pts: 2 },
        { c: "Écrit : lien avec le grand-père, limites et point de vue (c, d)", pts: 3 },
        { c: "Expression : respect de la forme, du sujet et de la longueur", pts: 2 },
        { c: "Expression : idées organisées, exemples, connecteurs", pts: 4 },
        { c: "Expression : langue correcte et variée (temps, subjonctif, ser et estar)", pts: 4 },
      ]
    },
  ],
};
