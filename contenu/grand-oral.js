// Grand oral — toutes les voies (générale et technologique). Sources : voir matiere.sources.
// Règles en vigueur pour le bac 2027 : notes de service du 10 septembre 2026 (BO spécial n° 4 du 17 septembre 2026),
// qui remplacent celles de 2021 : deux temps de 10 minutes, plus de temps sur l'orientation, coefficient 8 (générale) ou 12 (technologique).
export default {
  matiere: {
    id: 'grand-oral',
    nom: 'Grand oral',
    voie: 'tous',
    epreuve: {"type":"oral","duree":20,"coef":8,"quand":"fin juin - début juillet","note":"20 minutes de préparation, puis 20 minutes devant un jury de deux professeurs : 10 minutes d'exposé sur une des deux questions, 10 minutes d'échange. Coefficient 8 en voie générale, 12 en voie technologique, à partir de la session 2027."},
    sources: [
      "https://www.education.gouv.fr/bo/2026/Special4/MENE2622694N",
      "https://www.education.gouv.fr/bo/2026/Special4/MENE2622701N",
      "https://sti.eduscol.education.fr/actualites/epreuve-orale-terminale-dite-grand-oral-du-baccalaureat-general",
      "https://eduscol.education.gouv.fr/5661/presentation-du-grand-oral",
      "https://www.education.gouv.fr/sites/default/files/document/annexe-1-grille-d-evaluation-indicative-de-l-epreuve-orale-terminale-520747.pdf",
    ],
    chapitres: [
      { id: "grand-oral-1", t: "Comprendre l'épreuve en 2027", theme: "L'épreuve" },
      { id: "grand-oral-2", t: "Choisir et formuler ses deux questions", theme: "Avant l'épreuve" },
      { id: "grand-oral-3", t: "Les 20 minutes de préparation et le support", theme: "Le jour de l'épreuve" },
      { id: "grand-oral-4", t: "Construire son exposé de 10 minutes", theme: "Le premier temps" },
      { id: "grand-oral-5", t: "Voix, corps et regard", theme: "Le premier temps" },
      { id: "grand-oral-6", t: "L'échange avec le jury", theme: "Le second temps" },
      { id: "grand-oral-7", t: "Gérer le stress", theme: "Se préparer" },
      { id: "grand-oral-8", t: "La grille d'évaluation et les erreurs qui coûtent des points", theme: "L'évaluation" },
    ],
  },
  paquets: [
  { chapitre: "grand-oral-1",
    fiche: `## Comprendre l'épreuve en 2027

Le Grand oral est l'épreuve orale de fin de terminale, pour tous les élèves de la voie générale et de la voie technologique. Ses règles ont changé à partir de la **session 2027** : de nouvelles notes de service, publiées en septembre 2026, remplacent celles de 2021.

### Ce qui change en 2027
- L'épreuve se fait désormais en **deux temps de 10 minutes**. Le temps consacré au **projet d'orientation n'existe plus**.
- Le **coefficient** baisse : **8 en voie générale** (au lieu de 10) et **12 en voie technologique** (au lieu de 14).
- Le reste ne change pas : 20 minutes de préparation, 20 minutes d'épreuve, un jury de deux professeurs, une note sur 20.
- Attention aux vidéos et aux sites anciens : beaucoup décrivent encore l'épreuve en trois temps (5, 10 et 5 minutes).

### Avant l'épreuve : les deux questions
- Pendant l'année, on prépare **deux questions** avec ses professeurs.
- **Voie générale** : elles portent sur les **deux spécialités**. On peut faire une question par spécialité, ou une question qui relie les deux (transversale), ou deux questions transversales.
- **Voie technologique** : elles sont liées à la spécialité dans laquelle on fait le **projet** ou l'**étude approfondie**.
- Les questions sont écrites sur une **feuille** remise au jury. Pour un élève scolarisé, elle est signée par les professeurs et porte le cachet du lycée.
- Si on arrive sans questions conformes (pas de questions, une seule, ou des questions qui ne respectent pas les règles), l'épreuve **n'a pas lieu** : on est convoqué à la session de remplacement. Si cela se reproduit, la note est **0**.

### Le déroulé, minute par minute
- **Le jury choisit une des deux questions**, en fonction des spécialités de ses membres. On ne sait pas à l'avance laquelle.
- **20 minutes de préparation** : on organise ses idées et on peut faire un **support** (plan, schéma), qui **n'est pas évalué**. Aucun matériel n'est autorisé, sauf de quoi écrire.
- **Premier temps, 10 minutes** : debout (sauf aménagement), on explique **pourquoi on a choisi la question**, puis on la **développe** et on y **répond**.
- **Second temps, 10 minutes** : le jury pose des questions pour **préciser et approfondir**. Elles peuvent porter sur tout le **programme du cycle terminal** (première et terminale) des spécialités, en lien avec la question. On peut être assis ou debout, et utiliser un tableau s'il y en a un.

### Le jury
- **Deux professeurs** de disciplines différentes.
- En voie générale : l'un représente une des deux spécialités de l'élève ; l'autre une autre spécialité, un enseignement commun, ou c'est un **professeur documentaliste**.
- En voie technologique : l'un représente la spécialité du projet ou de l'étude ; l'autre un autre enseignement, ou c'est un professeur documentaliste.
- Le jury n'est donc pas forcément spécialiste du sujet : il faut être clair pour quelqu'un qui ne connaît pas tout.

### Ce qui est noté
- La note est sur **20**. Une **grille indicative** sert de repère. Elle regarde cinq choses : la **qualité orale**, la **prise de parole en continu**, la **qualité des connaissances**, la **qualité de l'interaction** et la **qualité de l'argumentation**.
- La **formulation** de la question et son **intérêt** ne sont **pas notés**. Ce qui compte, c'est la façon de la traiter.
- Le jury valorise aussi l'esprit critique, la précision de l'expression, l'engagement et la force de conviction.

### Calendrier
- L'épreuve a lieu en fin d'année, après les écrits, en général entre la fin juin et le début juillet. La date et l'heure sont sur la convocation.
- Le Grand oral fait partie du premier groupe d'épreuves : il ne se repasse pas au rattrapage.

### À retenir pour le bac
- 2027 : deux temps de 10 minutes, plus de temps sur l'orientation.
- Coefficient 8 en voie générale, 12 en voie technologique.
- Deux questions obligatoires, le jury en choisit une.
- Le support n'est pas noté, la formulation de la question non plus.`,
    cartes: [
      { q: "Durée totale du Grand oral", r: "20 minutes d'épreuve, après 20 minutes de préparation." },
      { q: "Les deux temps de l'épreuve en 2027", r: "Un exposé de 10 minutes, puis un échange de 10 minutes avec le jury." },
      { q: "Que devient le temps sur l'orientation en 2027 ?", r: "Il est supprimé par les notes de service de septembre 2026." },
      { q: "Coefficient en voie générale (session 2027)", r: "8 (il était de 10 avant)." },
      { q: "Coefficient en voie technologique (session 2027)", r: "12 (il était de 14 avant)." },
      { q: "Sur quoi portent les deux questions en voie générale ?", r: "Sur les deux spécialités : une par spécialité, ou des questions qui relient les deux." },
      { q: "Sur quoi portent les questions en voie technologique ?", r: "Sur la spécialité dans laquelle l'élève fait son projet ou son étude approfondie." },
      { q: "Qui choisit la question traitée ?", r: "Le jury, parmi les deux questions de l'élève." },
      { q: "Composition du jury", r: "Deux professeurs de disciplines différentes, dont l'un représente une spécialité de l'élève." },
      { q: "Le support préparé est-il noté ?", r: "Non, il n'est pas évalué." },
      { q: "Les 5 critères de la grille indicative", r: "Qualité orale, prise de parole en continu, connaissances, interaction, argumentation." },
      { q: "Que se passe-t-il sans questions conformes ?", r: "L'épreuve n'a pas lieu : convocation à la session de remplacement. Si cela se reproduit, la note est 0." },
      { q: "Sur quoi peut porter l'échange ?", r: "Sur le programme du cycle terminal des spécialités, en lien avec la question présentée." },
      { q: "La formulation de la question est-elle notée ?", r: "Non : ni sa formulation ni son intérêt ne sont notés, seulement la façon de la traiter." },
    ],
    quiz: [
      { q: "Combien de temps dure l'exposé du premier temps en 2027 ?",
        choix: ["5 minutes", "8 minutes", "10 minutes", "7 minutes"],
        bonne: 2, niv: 1,
        expl: "Depuis la session 2027, l'épreuve compte deux temps de 10 minutes. Les 5 minutes, c'était l'ancienne règle." },
      { q: "Un camarade dit qu'il prépare « les 5 minutes sur son orientation ». Qu'en penses-tu pour 2027 ?",
        choix: ["C'est le dernier temps de l'épreuve", "C'est le premier temps de l'épreuve", "Ce temps n'existe plus en 2027", "Il se fait pendant la préparation"],
        bonne: 2, niv: 2,
        expl: "Les notes de service de septembre 2026 ont supprimé ce temps. Ses informations viennent d'une source ancienne." },
      { q: "Quel est le coefficient du Grand oral en voie générale pour la session 2027 ?",
        choix: ["10", "12", "14", "8"],
        bonne: 3, niv: 1,
        expl: "Il passe de 10 à 8 en voie générale. 12 est le coefficient de la voie technologique." },
      { q: "Qui décide laquelle de tes deux questions tu vas traiter ?",
        choix: ["Toi, au début de l'épreuve", "Un tirage au sort", "Le jury", "Le professeur de spécialité"],
        bonne: 2, niv: 1,
        expl: "Le jury choisit, en tenant compte des spécialités de ses membres." },
      { q: "Tu arrives avec une seule question au lieu de deux. Que se passe-t-il ?",
        choix: ["Tu passes quand même sur cette question", "Tu perds la moitié des points de l'épreuve", "Le jury te donne une question à traiter", "L'épreuve n'a pas lieu ce jour-là"],
        bonne: 3, niv: 2,
        expl: "Sans questions conformes, l'épreuve n'a pas lieu : convocation à la session de remplacement, puis 0 si cela recommence." },
      { q: "En voie générale, laquelle de ces paires de questions est conforme ?",
        choix: ["Deux questions qui portent sur une seule des spécialités", "Une question transversale et une question de spécialité", "Une question de spécialité et une question de français", "Une question sur l'orientation et une question de spécialité"],
        bonne: 1, niv: 3,
        expl: "Les questions portent sur les deux spécialités : une par spécialité, une transversale, ou deux transversales." },
      { q: "Ton support de préparation est très beau. Combien de points peut-il te rapporter ?",
        choix: ["Jusqu'à 2 points", "Jusqu'à 5 points", "Aucun, il n'est pas évalué", "Il compte pour la qualité orale"],
        bonne: 2, niv: 2,
        expl: "Le support est une aide, il n'est jamais noté. Il ne faut pas y passer toute la préparation." },
      { q: "Le jury trouve ta question mal formulée. Est-ce que cela baisse ta note ?",
        choix: ["Non, la formulation n'est pas notée", "Oui, c'est un critère de la grille officielle", "Oui, cela retire 2 points", "En voie technologique, oui"],
        bonne: 0, niv: 3,
        expl: "Ni la formulation ni l'intérêt de la question ne sont notés. Seul le traitement compte." },
      { q: "Pendant l'échange, sur quoi le jury peut-il t'interroger ?",
        choix: ["Ce que tu as dit pendant ton exposé, rien d'autre", "Les spécialités, en lien avec ta question", "Le programme des autres matières du bac", "Ton projet d'orientation et tes vœux"],
        bonne: 1, niv: 3,
        expl: "L'échange porte sur le programme du cycle terminal des spécialités, en lien avec la question présentée." },
      { q: "Lequel de ces critères fait partie de la grille indicative ?",
        choix: ["La beauté du support", "L'originalité du sujet", "La qualité de l'interaction", "La note de l'écrit de spécialité"],
        bonne: 2, niv: 1,
        expl: "Les cinq critères : qualité orale, prise de parole en continu, connaissances, interaction, argumentation." },
      { q: "Le second membre du jury est professeur documentaliste. Que dois-tu en déduire ?",
        choix: ["Il ne posera aucune question sur le fond", "Il ne note que la forme et la voix", "Tu peux employer plus de mots techniques", "Il faut être clair pour un non-spécialiste"],
        bonne: 3, niv: 2,
        expl: "Le jury n'est pas forcément spécialiste : expliquer simplement les notions est indispensable." },
      { q: "Quel matériel peux-tu apporter dans la salle ?",
        choix: ["Tes fiches de révision", "Seulement de quoi écrire", "Une tablette avec ton diaporama", "Un résumé de ton exposé"],
        bonne: 1, niv: 2,
        expl: "Aucun matériel n'est autorisé, hormis le nécessaire d'écriture." },
    ] },
  { chapitre: "grand-oral-2",
    fiche: `## Choisir et formuler ses deux questions

Les deux questions se préparent pendant l'année, avec les professeurs de spécialité. Une bonne question rend tout le reste plus facile : l'exposé, la préparation et l'échange.

### Ce qu'est une bonne question
- C'est une **vraie question**, à laquelle on peut répondre de plusieurs façons. Elle appelle une **démarche** : expliquer, comparer, discuter.
- Elle s'appuie sur des **notions du programme** de spécialité. Le jury doit voir les connaissances de terminale (et de première).
- Elle est **précise** : un sujet trop large (« L'environnement ») ne se traite pas en 10 minutes.
- Elle est **intéressante pour soi** : on va la travailler des mois et en parler avec conviction.
- Exemple faible : « Qu'est-ce que l'inflation ? » (une définition, pas de débat).
- Exemple meilleur : « L'inflation est-elle toujours mauvaise pour les ménages ? » (on peut nuancer, selon les revenus, l'épargne, les dettes).

### Les formes qui marchent
- **« Pourquoi… ? »** : expliquer des causes. Exemple : « Pourquoi les abeilles sont-elles menacées ? »
- **« Comment… ? »** : expliquer un mécanisme. Exemple : « Comment un vaccin apprend-il au corps à se défendre ? »
- **« Peut-on… ? », « Faut-il… ? »** : discuter. Exemple : « Faut-il interdire les voitures en centre-ville ? »
- **« Dans quelle mesure… ? »** : nuancer. Exemple : « Dans quelle mesure les mathématiques permettent-elles de prévoir une épidémie ? »
- Une question fermée (réponse oui ou non sans discussion) donne un exposé court et plat.

### Les règles à respecter
- **Voie générale** : les questions portent sur les **deux spécialités**. Trois possibilités : une question par spécialité ; une question par spécialité ou une question **transversale** qui relie les deux ; deux questions transversales.
- **Voie technologique** : les questions sont liées à la spécialité dans laquelle on mène le **projet** ou l'**étude approfondie**.
- La feuille avec les deux questions est signée par les professeurs et porte le cachet du lycée. Sans deux questions conformes, l'épreuve n'a pas lieu.
- La **formulation** n'est pas notée : inutile de chercher une phrase compliquée. Elle doit surtout permettre un bon exposé.

### Pourquoi deux questions bien préparées
- Le jury choisit **l'une des deux**. Si on n'en a travaillé qu'une, on a une chance sur deux d'être en difficulté.
- Il faut donc préparer les **deux exposés complets**, avec plan, exemples et réponse.

### Comment trouver une question
- Partir d'un chapitre qu'on a aimé, d'une actualité, d'un objet de la vie courante, d'une expérience faite en classe.
- Se demander : « Qu'est-ce qui m'a surpris ? Qu'est-ce que je ne comprends pas encore ? »
- Vérifier qu'on trouve des **sources fiables** (manuels, sites officiels, articles de presse sérieux) et des **notions** du programme pour y répondre.
- En parler tôt avec les professeurs : ils aident à **resserrer** la question.

### Expliquer pourquoi on l'a choisie
- Au début de l'exposé, il faut dire **pourquoi on a choisi cette question**. C'est demandé par les textes.
- Une bonne raison relie un **intérêt personnel** (une expérience, une curiosité, un projet) et un **lien avec les spécialités**.
- Exemple : « J'ai choisi cette question parce que mon grand-père est diabétique, et qu'en SVT nous avons étudié la régulation de la glycémie. »

### À retenir pour le bac
- Deux questions, toutes les deux préparées en entier.
- Une vraie question, précise, qui s'appuie sur le programme.
- Éviter les questions de définition et les sujets trop larges.
- Savoir dire en deux phrases pourquoi on l'a choisie.`,
    cartes: [
      { q: "Qu'est-ce qu'une bonne question de Grand oral ?", r: "Une vraie question, précise, qui appelle une démarche et s'appuie sur des notions du programme." },
      { q: "Pourquoi éviter une question de définition ?", r: "Elle n'offre aucun débat : l'exposé devient une récitation courte." },
      { q: "Pourquoi éviter un sujet trop large ?", r: "On ne peut pas le traiter sérieusement en 10 minutes : l'exposé reste superficiel." },
      { q: "Les trois possibilités en voie générale", r: "Une question par spécialité ; une par spécialité ou une transversale ; deux questions transversales." },
      { q: "Qu'est-ce qu'une question transversale ?", r: "Une question qui relie les deux spécialités de l'élève." },
      { q: "À quoi sont liées les questions en voie technologique ?", r: "À la spécialité dans laquelle l'élève mène son projet ou son étude approfondie." },
      { q: "Faut-il préparer les deux questions en entier ?", r: "Oui : le jury choisit l'une des deux, on ne sait pas laquelle." },
      { q: "Que doit-on dire au début de l'exposé ?", r: "Pourquoi on a choisi cette question, avant de la développer et d'y répondre." },
      { q: "Une bonne raison d'avoir choisi sa question", r: "Un intérêt personnel relié à une notion des spécialités." },
      { q: "Forme de question qui invite à nuancer", r: "« Dans quelle mesure… ? »" },
      { q: "Forme de question qui invite à débattre", r: "« Faut-il… ? » ou « Peut-on… ? »" },
      { q: "La formulation de la question est-elle notée ?", r: "Non. Elle doit seulement permettre un bon exposé." },
      { q: "Où trouver des idées de question ?", r: "Un chapitre aimé, une actualité, un objet du quotidien, une expérience faite en classe." },
    ],
    quiz: [
      { q: "Laquelle de ces questions se prête le mieux au Grand oral ?",
        choix: ["Qu'est-ce que l'inflation en économie ?", "Quelle est la définition exacte de l'inflation ?", "Quel était le taux d'inflation en France en 2025 ?", "L'inflation est-elle toujours mauvaise ?"],
        bonne: 3, niv: 2,
        expl: "Elle appelle une discussion et des nuances. Les trois autres demandent une définition ou un chiffre." },
      { q: "Un élève propose « L'environnement » comme question. Quel est le problème principal ?",
        choix: ["C'est un sujet interdit au Grand oral", "C'est bien trop difficile pour un élève", "C'est un thème trop large", "Le jury n'aime pas ce genre de thème"],
        bonne: 2, niv: 2,
        expl: "Ce n'est ni une question ni un sujet précis : impossible à traiter en 10 minutes." },
      { q: "En voie générale, une question transversale est une question qui :",
        choix: ["porte sur l'orientation", "porte sur un enseignement commun", "relie les deux spécialités", "relie une spécialité et une option"],
        bonne: 2, niv: 1,
        expl: "Transversale signifie qu'elle croise les deux spécialités de l'élève." },
      { q: "Tu n'as vraiment travaillé qu'une de tes deux questions. Quel est le risque ?",
        choix: ["Faible, tu choisis celle que tu traites", "Le jury peut choisir l'autre", "Le jury te pénalise de 2 points", "L'épreuve est annulée et reportée"],
        bonne: 1, niv: 2,
        expl: "Le jury choisit l'une des deux : il faut préparer les deux exposés en entier." },
      { q: "Quelle raison de choix de question est la plus convaincante ?",
        choix: ["Mon professeur m'a dit que c'était un sujet facile à traiter", "Un proche diabétique et le cours de SVT sur la glycémie", "J'ai trouvé cette question toute prête sur un site Internet", "C'est le tout premier chapitre du programme de l'année"],
        bonne: 1, niv: 2,
        expl: "Elle relie un intérêt personnel à une notion des spécialités, ce que le jury attend." },
      { q: "En voie technologique, à quoi sont liées les deux questions ?",
        choix: ["À la spécialité du projet ou de l'étude", "Aux matières du tronc commun du bac", "Au projet d'orientation après le baccalauréat", "À la philosophie et au français de première"],
        bonne: 0, niv: 1,
        expl: "Les notes de service de 2026 les lient à la spécialité où l'élève mène son projet ou son étude." },
      { q: "« Faut-il interdire les voitures en centre-ville ? » Quel type d'exposé appelle cette question ?",
        choix: ["Un exposé qui donne une seule définition précise", "Un exposé qui pèse le pour et le contre", "Un exposé qui raconte une expérience personnelle", "Un exposé qui récite un chapitre entier du cours"],
        bonne: 1, niv: 1,
        expl: "« Faut-il » invite à peser des arguments puis à prendre position." },
      { q: "Ta question est « Le vaccin protège-t-il ? ». Comment l'améliorer ?",
        choix: ["Le vaccin protège-t-il vraiment les gens ?", "Comment un vaccin protège-t-il le corps ?", "Qu'est-ce qu'un vaccin selon le dictionnaire ?", "Le vaccin protège-t-il tout le monde, oui ou non ?"],
        bonne: 1, niv: 3,
        expl: "La version « Comment » appelle une explication de mécanisme, avec les notions de SVT." },
      { q: "Ta question repose surtout sur un fait divers, sans notion du programme. Pourquoi est-ce risqué ?",
        choix: ["Les faits divers sont interdits au Grand oral", "La question sera jugée mal formulée par le jury", "Tes connaissances ne pourront pas être évaluées", "Le jury refusera de choisir cette question-là"],
        bonne: 2, niv: 3,
        expl: "Les connaissances sont un critère de la grille : sans notion du programme, on perd ces points." },
      { q: "Un professeur te conseille de resserrer ta question. Que veut-il dire ?",
        choix: ["La rendre plus longue et plus complexe", "En faire une question fermée", "La rendre plus précise et plus limitée", "Lui ajouter une seconde spécialité"],
        bonne: 2, niv: 2,
        expl: "Une question resserrée se traite en profondeur en 10 minutes." },
      { q: "Ta formulation n'est pas parfaite, mais ton exposé sera solide. Faut-il t'inquiéter ?",
        choix: ["Oui, c'est le premier critère de la grille", "Non, la formulation n'est jamais notée", "Oui, la question peut être refusée", "Seulement si le jury la trouve banale"],
        bonne: 1, niv: 3,
        expl: "Ni la formulation ni l'intérêt de la question ne sont notés. Le traitement compte." },
    ] },
  { chapitre: "grand-oral-3",
    fiche: `## Les 20 minutes de préparation et le support

Quand le jury a choisi la question, on a 20 minutes pour se préparer. Ce n'est pas le moment d'inventer l'exposé : il doit être prêt depuis des semaines. La préparation sert à le **remettre en tête** et à se **calmer**.

### Avant le jour J
- Avoir un **plan** pour chacune des deux questions, appris par cœur dans les grandes lignes.
- Avoir **répété à voix haute** chaque exposé, chronomètre en main, au moins plusieurs fois.
- Connaître sans hésiter les **mots clés**, les **définitions**, les **chiffres**, les **dates** et les **auteurs** qu'on cite.
- Préparer à l'avance le **schéma** ou le **plan** qu'on refera au brouillon.

### Ce qu'on a le droit d'avoir
- **Aucun matériel**, sauf de quoi écrire. Les fiches, le téléphone, la tablette et les documents sont interdits.
- On reçoit du papier pour la préparation.

### Le support
- Pendant les 20 minutes, on peut réaliser un **support** : un plan, un schéma, un graphique simple, une carte, quelques mots clés.
- Ce support **n'est pas évalué**. Il sert à aider l'exposé et à rendre une explication plus claire pour le jury.
- Pendant l'échange, on peut aussi utiliser un **tableau** s'il y en a un dans la salle.
- Un bon support est **lisible** et **léger** : quelques mots écrits gros, pas un texte.

### Une préparation en 20 minutes, étape par étape
- **Minute 0 à 2** : lire la question, respirer, se rappeler l'accroche.
- **Minute 2 à 8** : écrire le **plan** en gros (deux ou trois parties), et sous chaque partie, les mots clés et l'exemple.
- **Minute 8 à 12** : écrire **en entier** la première phrase (l'accroche), la phrase qui explique le choix, et la **réponse finale**. Ce sont les moments où l'on a le plus peur de bafouiller.
- **Minute 12 à 16** : faire le **schéma** ou le support s'il est utile.
- **Minute 16 à 20** : répéter dans sa tête, chronométrer les parties, se calmer.

### Ce qu'il ne faut pas faire
- **Rédiger tout l'exposé** : on n'aura pas le temps, et on serait tenté de lire.
- Se lancer dans une nouvelle idée découverte au dernier moment.
- Passer 15 minutes sur un beau schéma : il n'est pas noté.
- Rester bloqué sur un oubli : mieux vaut passer à la suite et y revenir.

### Pendant l'exposé, comment utiliser sa feuille
- On peut y **jeter un œil** pour suivre le plan, puis relever la tête.
- On ne la **lit pas** : la grille note la prise de parole en continu et la qualité orale.
- On peut la **montrer** au jury pour un schéma : « Comme le montre ce schéma… ».

### Le cas des aménagements
- Les élèves qui ont un **aménagement** (handicap, trouble des apprentissages, par exemple) peuvent avoir des conditions adaptées : rester assis, temps de préparation majoré, autre forme de support. Cela se demande **à l'avance**, dans les délais fixés par l'académie.

### À retenir pour le bac
- La préparation remet en tête un exposé déjà construit ; elle ne le crée pas.
- Le support n'est pas noté : simple, lisible, utile.
- Écrire en entier seulement l'accroche, le choix de la question et la conclusion.
- Garder quelques minutes pour se calmer.`,
    cartes: [
      { q: "Durée de la préparation", r: "20 minutes, après le choix de la question par le jury." },
      { q: "Matériel autorisé en préparation", r: "Seulement de quoi écrire : pas de fiches, pas de téléphone, pas de documents." },
      { q: "Le support est-il noté ?", r: "Non, il n'est pas évalué. Il aide seulement l'exposé." },
      { q: "Exemples de support utile", r: "Un plan, un schéma, un graphique simple, une carte, quelques mots clés." },
      { q: "À quoi sert vraiment la préparation ?", r: "À remettre en tête un exposé déjà construit et à se calmer, pas à l'inventer." },
      { q: "Quelles phrases écrire en entier ?", r: "L'accroche, la phrase sur le choix de la question, et la réponse finale." },
      { q: "Pourquoi ne pas rédiger tout l'exposé ?", r: "On manquerait de temps et on serait tenté de lire, ce qui coûte des points." },
      { q: "Comment utiliser sa feuille pendant l'exposé ?", r: "Y jeter un œil pour suivre le plan, puis relever la tête. Ne pas la lire." },
      { q: "Peut-on utiliser un tableau ?", r: "Oui, pendant l'échange, s'il y en a un dans la salle." },
      { q: "Qu'est-ce qu'un bon support ?", r: "Lisible et léger : quelques mots écrits gros, pas un texte." },
      { q: "Que faire si on a un trou en préparation ?", r: "Passer à la suite et y revenir plus tard, sans rester bloqué." },
      { q: "Quand demander un aménagement ?", r: "À l'avance, dans les délais fixés par l'académie." },
    ],
    quiz: [
      { q: "Combien de temps dure la préparation ?",
        choix: ["20 minutes", "10 minutes", "15 minutes", "5 minutes"],
        bonne: 0, niv: 1,
        expl: "Le jury choisit la question, puis l'élève a 20 minutes pour se préparer." },
      { q: "Peux-tu consulter tes fiches pendant la préparation ?",
        choix: ["Les fiches manuscrites, oui", "Pendant les 5 premières minutes", "Si le jury les a vérifiées avant", "Aucun document n'est autorisé"],
        bonne: 3, niv: 1,
        expl: "Aucun matériel n'est autorisé, sauf de quoi écrire." },
      { q: "Tu passes 15 minutes sur un beau schéma en couleurs. Quel est le problème ?",
        choix: ["Il n'est pas noté et te vole du temps", "Les couleurs sont interdites dans un support", "Le jury refusera de le regarder pendant l'exposé", "Il aurait dû être préparé à la maison"],
        bonne: 0, niv: 2,
        expl: "Le support n'est pas évalué : il doit rester simple et ne pas manger la préparation." },
      { q: "Que vaut-il mieux écrire en entier pendant la préparation ?",
        choix: ["Tout l'exposé, mot pour mot, sans rien oublier", "Le titre exact de la question choisie", "L'accroche, le choix et la conclusion", "Les questions que le jury posera pendant l'échange"],
        bonne: 2, niv: 2,
        expl: "Ce sont les moments où l'on bafouille le plus. Le reste en mots clés." },
      { q: "Pendant l'exposé, comment utiliser ta feuille de préparation ?",
        choix: ["La lire du début à la fin", "La regarder d'un œil, puis relever la tête", "La laisser retournée sur la table", "La donner au jury dès le début"],
        bonne: 1, niv: 2,
        expl: "On suit son plan sans lire : la qualité orale et la prise de parole en continu sont notées." },
      { q: "À quoi sert surtout la préparation de 20 minutes ?",
        choix: ["À découvrir le sujet de son exposé du jour", "À rédiger un texte complet que l'on lira", "À apprendre les définitions du cours de l'année", "À se remettre en tête un exposé déjà prêt"],
        bonne: 3, niv: 3,
        expl: "L'exposé se construit pendant l'année. Les 20 minutes servent à le rappeler et à se calmer." },
      { q: "En préparation, tu as une idée nouvelle et brillante, jamais travaillée. Que fais-tu ?",
        choix: ["Tu refais tout ton plan autour d'elle", "Tu l'ajoutes au début de l'exposé", "Tu la remplaces par ta conclusion", "Tu la gardes pour l'échange, si elle vient"],
        bonne: 3, niv: 3,
        expl: "Changer de plan au dernier moment est risqué. Mieux vaut s'en servir si le jury ouvre ce sujet." },
      { q: "Quel support est le plus utile ?",
        choix: ["Un texte entièrement rédigé de deux pages", "La liste complète de tes références en petit", "Un plan en trois parties et un schéma", "Une copie de ton cours de spécialité"],
        bonne: 2, niv: 2,
        expl: "Lisible et léger : il aide à suivre le plan et à expliquer, sans tenter de lire." },
      { q: "Tu as un trou sur un chiffre pendant la préparation. Que fais-tu ?",
        choix: ["Tu passes à la suite et tu y reviens", "Tu bloques jusqu'à le retrouver", "Tu inventes un chiffre plausible", "Tu changes de question"],
        bonne: 0, niv: 2,
        expl: "Rester bloqué fait perdre du temps. Si le chiffre ne revient pas, on donne un ordre de grandeur honnête." },
      { q: "Un élève dyslexique voudrait un temps de préparation majoré. Quand doit-il le demander ?",
        choix: ["Le jour même, directement au jury de l'épreuve", "Après l'épreuve, pour faire revoir sa note", "Ce n'est possible pour aucun élève", "À l'avance, selon les délais de l'académie"],
        bonne: 3, niv: 2,
        expl: "Les aménagements se demandent avant l'examen, selon la procédure de l'académie." },
      { q: "Pourquoi garder les dernières minutes de la préparation pour toi ?",
        choix: ["Pour répéter dans ta tête et te calmer", "Pour écrire encore plus de texte sur ta feuille", "Pour relire mentalement tout ton cours de l'année", "Pour préparer rapidement ton autre question"],
        bonne: 0, niv: 1,
        expl: "Arriver calme et avec l'accroche en tête rend les premières minutes beaucoup plus faciles." },
    ] },
  { chapitre: "grand-oral-4",
    fiche: `## Construire son exposé de 10 minutes

Le premier temps dure **10 minutes**. On y explique **pourquoi on a choisi la question**, puis on la **développe** et on y **répond**. Dix minutes, c'est long à l'oral : il faut un vrai plan, avec du contenu.

### Ce que disent les textes
- Le candidat explique d'abord les **raisons du choix** de sa question.
- Il la **développe** puis il y **répond**.
- Le jury évalue ses **capacités argumentatives** et ses **qualités oratoires**.
- On parle **debout**, sauf aménagement.

### Un plan qui marche (environ 10 minutes)
- **Accroche (30 secondes)** : un fait concret, une image, une situation de la vie courante, une citation courte. Exemple : « Quand on recharge un téléphone la nuit, l'électricité coûte parfois moins cher. Pourquoi ? »
- **Choix de la question (1 minute)** : un intérêt personnel et le lien avec la ou les spécialités.
- **Annonce du plan (20 secondes)** : « Je verrai d'abord…, puis…, enfin… ».
- **Développement (7 minutes)** : deux ou trois parties, environ 2 à 3 minutes chacune. Dans chaque partie : une idée, une **notion du programme** expliquée simplement, un **exemple** précis.
- **Conclusion (1 minute)** : on **répond clairement** à la question, puis on peut **ouvrir** sur une piste plus large.

### Mettre du contenu de spécialité
- Le critère « qualité des connaissances » se joue ici. Il faut des **définitions justes**, des **mécanismes**, des **chiffres** ou des **dates** sûrs, des **auteurs** si la matière en a.
- Expliquer les notions comme à quelqu'un d'une autre matière : le second membre du jury n'est pas forcément spécialiste.
- Exemple en physique : ne pas dire seulement « l'énergie se conserve », mais expliquer ce que cela veut dire sur un exemple.

### Argumenter, pas seulement réciter
- Chaque partie **sert la réponse**. On se demande : « En quoi cette partie aide-t-elle à répondre ? »
- Utiliser des **mots de liaison** : d'abord, ensuite, cependant, c'est pourquoi, en effet, par conséquent.
- Montrer une **nuance** : « Ce n'est pas toujours vrai : dans le cas de…, au contraire… ». L'esprit critique est valorisé.

### Les transitions
- Une phrase pour finir une partie et lancer la suivante : « Nous avons vu que… Mais cela pose une question : … ».
- Elles montrent au jury qu'il y a un **fil** et l'aident à suivre.

### La bonne durée
- Viser **9 à 10 minutes**. Un exposé de 5 minutes laisse un vide et montre un manque de travail.
- S'entraîner chronomètre en main, plusieurs fois, à voix haute, devant quelqu'un si possible.
- Si le jury arrête au bout de 10 minutes, il faut avoir déjà donné la réponse. C'est pour cela qu'on **garde la conclusion courte** et qu'on surveille le temps.

### Apprendre sans réciter
- Apprendre par cœur le **plan**, les **mots clés**, l'**accroche** et la **conclusion**.
- Ne pas apprendre le reste **mot à mot** : cela donne un ton récité, et un seul trou fait tout perdre.
- Raconter son exposé plusieurs fois avec des mots un peu différents : c'est ce qui le rend naturel.

### À retenir pour le bac
- Accroche, choix de la question, plan, deux ou trois parties, réponse claire.
- Des notions du programme dans chaque partie, expliquées simplement.
- Environ 10 minutes : ni 5, ni 15.
- Apprendre le plan, pas le texte.`,
    cartes: [
      { q: "Durée du premier temps", r: "10 minutes." },
      { q: "Les trois choses à faire dans l'exposé", r: "Expliquer le choix de la question, la développer, y répondre." },
      { q: "Qu'est-ce qu'une accroche ?", r: "Une première phrase concrète (fait, image, situation) qui donne envie d'écouter." },
      { q: "Durée conseillée pour le développement", r: "Environ 7 minutes, en deux ou trois parties." },
      { q: "Que mettre dans chaque partie ?", r: "Une idée, une notion du programme expliquée simplement, un exemple précis." },
      { q: "Que doit faire la conclusion ?", r: "Répondre clairement à la question, puis éventuellement ouvrir." },
      { q: "À quoi servent les transitions ?", r: "À montrer le fil de l'exposé et à aider le jury à suivre." },
      { q: "Pourquoi éviter un exposé de 5 minutes ?", r: "Il laisse un vide et montre un manque de travail sur le contenu." },
      { q: "Que faut-il apprendre par cœur ?", r: "Le plan, les mots clés, l'accroche et la conclusion. Pas tout le texte." },
      { q: "Pourquoi ne pas apprendre le texte mot à mot ?", r: "Le ton devient récité, et un seul trou peut tout bloquer." },
      { q: "Comment montrer de l'esprit critique ?", r: "Ajouter une nuance : un cas où l'idée ne marche pas, une limite." },
      { q: "Exemples de mots de liaison utiles", r: "D'abord, ensuite, cependant, en effet, c'est pourquoi, par conséquent." },
      { q: "Comment s'entraîner au chronométrage ?", r: "À voix haute, chronomètre en main, plusieurs fois, si possible devant quelqu'un." },
    ],
    quiz: [
      { q: "Combien de temps dure l'exposé du premier temps ?",
        choix: ["10 minutes", "5 minutes", "8 minutes", "6 minutes"],
        bonne: 0, niv: 1,
        expl: "Depuis la session 2027, le premier temps dure 10 minutes." },
      { q: "Par quoi commence ton exposé, après t'être présenté ?",
        choix: ["La conclusion, pour gagner du temps", "Une accroche, puis le choix de la question", "La liste de tes sources", "Une définition lue dans le dictionnaire"],
        bonne: 1, niv: 1,
        expl: "L'accroche capte l'attention, puis on explique pourquoi on a choisi la question." },
      { q: "Ton exposé dure 5 minutes à l'entraînement. Que fais-tu ?",
        choix: ["Je rajoute des exemples et des notions", "Je parle plus lentement pour tenir 10 minutes", "Je laisse le jury combler le temps", "Je répète deux fois ma conclusion"],
        bonne: 0, niv: 2,
        expl: "Il manque du contenu : il faut enrichir les parties, pas étirer la voix." },
      { q: "Tu as appris ton exposé mot à mot. Quel est le principal risque ?",
        choix: ["Un ton récité et un trou qui bloque tout", "Un exposé trop court de quelques minutes", "Un jury qui pense que tu as triché", "Aucun risque, c'est la meilleure méthode"],
        bonne: 0, niv: 2,
        expl: "On apprend le plan et les mots clés, pas le texte : cela reste naturel et solide." },
      { q: "Que doit contenir chaque partie du développement ?",
        choix: ["Une anecdote personnelle et une blague", "Une citation et une question au jury", "Une idée, une notion et un exemple", "Un chiffre et une date, sans plus"],
        bonne: 2, niv: 1,
        expl: "La grille note les connaissances et l'argumentation : chaque partie doit en montrer." },
      { q: "Le jury t'arrête à 10 minutes, avant ta conclusion. Qu'aurait-il fallu faire ?",
        choix: ["Parler beaucoup plus vite dès le départ", "Commencer directement par le développement", "Demander une minute de plus au jury", "Surveiller le temps et garder une conclusion courte"],
        bonne: 3, niv: 3,
        expl: "La réponse à la question doit être donnée : on vérifie le temps et on prévoit une fin courte." },
      { q: "Quelle conclusion est la meilleure ?",
        choix: ["Voilà, j'ai fini mon exposé, merci", "C'est un sujet très intéressant, je trouve", "Ma réponse : oui en partie, car…, mais…", "Je vous laisse poser vos questions"],
        bonne: 2, niv: 2,
        expl: "La conclusion répond clairement, avec la nuance. Les autres n'apportent rien." },
      { q: "Le second membre du jury n'enseigne pas ta spécialité. Comment présentes-tu une notion ?",
        choix: ["Je l'explique simplement avec un exemple", "Je l'emploie sans l'expliquer", "Je l'évite pour ne pas le perdre", "Je la lis dans mon cours de mémoire"],
        bonne: 0, niv: 2,
        expl: "Il faut être compris de tous, sans renoncer aux notions du programme." },
      { q: "Tu ajoutes « mais ce n'est pas toujours vrai, par exemple… ». Que montres-tu au jury ?",
        choix: ["Que tu n'es pas sûr de ton sujet", "Que tu sais nuancer tes idées", "Que ta question est mal choisie", "Que tu manques de temps pour finir"],
        bonne: 1, niv: 3,
        expl: "Nuancer est valorisé : cela montre qu'on réfléchit, pas qu'on doute." },
      { q: "À quoi servent les transitions entre les parties ?",
        choix: ["À remplir le temps quand on hésite", "À répéter ce qu'on vient de dire", "À annoncer la fin de l'exposé", "À montrer le fil de ton raisonnement"],
        bonne: 3, niv: 2,
        expl: "Elles relient les idées et aident le jury à suivre la démarche." },
      { q: "Ton exposé a trois parties, mais la troisième ne sert pas à répondre. Que faire ?",
        choix: ["La garder, car trois parties sont obligatoires", "La placer en introduction", "La supprimer ou la relier à la question", "La raconter plus vite"],
        bonne: 2, niv: 3,
        expl: "Chaque partie doit servir la réponse. Le nombre de parties n'est pas imposé." },
    ] },
  { chapitre: "grand-oral-5",
    fiche: `## Voix, corps et regard

La grille du Grand oral note la **qualité orale** et la **prise de parole en continu**. On peut avoir un bon contenu et perdre des points parce qu'on parle trop bas, trop vite, ou les yeux sur sa feuille. Bonne nouvelle : cela se travaille.

### La voix
- **Le volume** : parler assez fort pour être entendu au fond de la salle, sans crier. On respire avec le ventre, pas avec les épaules.
- **Le débit** : sous le stress, tout le monde parle trop vite. Viser un débit **posé**, avec des phrases courtes.
- **Les pauses** : une pause de deux secondes après une idée importante aide le jury à retenir. Le silence n'est pas une faute.
- **L'intonation** : varier le ton évite la monotonie. On insiste sur les mots clés.
- **L'articulation** : bien prononcer la fin des mots, surtout les termes techniques.

### Les mots
- Un **registre courant**, correct : pas de familier (« genre », « en mode », « trop de ouf »), pas de phrases compliquées.
- Éviter les **tics de langage** répétés (« euh », « du coup », « voilà »). Un « euh » de temps en temps n'est pas grave ; trente en dix minutes, si.
- Employer les **mots justes** de la spécialité, en les expliquant.
- Parler au **présent** et avec « je » quand on donne son avis : « Je pense que… », « Je montrerai que… ».

### Le corps
- **Debout**, les deux pieds bien ancrés au sol, à largeur de hanches. On évite de se balancer d'un pied sur l'autre.
- Les **mains** : libres, elles accompagnent la parole (compter les parties, montrer un schéma). On évite de les cacher dans les poches ou de jouer avec un stylo.
- La **posture** : épaules ouvertes, tête droite. Elle donne de l'assurance, au jury et à soi-même.
- Pendant l'échange, on peut s'asseoir : rester droit et attentif.

### Le regard
- **Regarder les deux membres du jury**, à tour de rôle, et pas seulement celui qui semble le plus gentil ou le spécialiste.
- Le regard montre qu'on **s'adresse** à quelqu'un et qu'on n'est pas en train de réciter.
- On peut baisser les yeux sur sa feuille pour retrouver le plan, puis on **relève la tête**.

### La prise de parole en continu
- C'est la capacité à parler **sans interruption**, de façon fluide, sans lire.
- Elle demande un plan bien su : quand on sait où l'on va, on parle naturellement.
- En cas de trou : on s'arrête, on respire, on regarde son plan, on reprend avec une transition (« Pour reprendre mon idée… »).

### Comment s'entraîner
- **S'enregistrer** (voix ou vidéo) et se réécouter : on repère vite ses tics et sa vitesse.
- Présenter son exposé à des proches, debout, en les regardant.
- Faire des **exercices de respiration** avant de commencer : inspirer en 4 secondes, souffler en 6.
- Répéter dans une pièce, en marchant, pour fixer le plan dans le corps.

### À retenir pour le bac
- Voix posée, assez forte, avec des pauses.
- Regarder les deux membres du jury.
- Ne pas lire : relever la tête.
- Registre correct, mots de la spécialité expliqués, peu de tics.`,
    cartes: [
      { q: "Deux critères de la grille liés à la forme", r: "La qualité orale et la prise de parole en continu." },
      { q: "Que veut dire « prise de parole en continu » ?", r: "Parler de façon fluide, sans interruption et sans lire." },
      { q: "Pourquoi faire des pauses ?", r: "Elles aident le jury à retenir une idée importante. Un silence court n'est pas une faute." },
      { q: "Que faire contre le débit trop rapide ?", r: "Faire des phrases courtes, respirer, marquer des pauses." },
      { q: "Qui regarder pendant l'exposé ?", r: "Les deux membres du jury, à tour de rôle." },
      { q: "Quel registre de langue employer ?", r: "Un registre courant et correct, sans familiarités, avec les mots justes de la spécialité." },
      { q: "Que faire de ses mains ?", r: "Les laisser libres pour accompagner la parole, sans les cacher ni jouer avec un objet." },
      { q: "Bonne posture debout", r: "Pieds ancrés à largeur de hanches, épaules ouvertes, tête droite, sans se balancer." },
      { q: "Que faire en cas de trou ?", r: "S'arrêter, respirer, regarder son plan, reprendre avec une transition." },
      { q: "Meilleur moyen de repérer ses tics de langage", r: "S'enregistrer et se réécouter." },
      { q: "Exemples de tics à limiter", r: "« Euh », « du coup », « voilà », « genre »." },
      { q: "Un exercice de respiration simple", r: "Inspirer en 4 secondes, souffler en 6, plusieurs fois." },
    ],
    quiz: [
      { q: "Pendant l'exposé, qui dois-tu regarder ?",
        choix: ["Surtout le professeur de ta spécialité", "Chacun des deux membres, tour à tour", "Ta feuille, pour ne rien oublier", "Le mur du fond, pour moins stresser"],
        bonne: 1, niv: 1,
        expl: "Regarder les deux membres montre qu'on s'adresse à eux, et pas seulement au spécialiste." },
      { q: "Tu as un trou au milieu de l'exposé. Que fais-tu ?",
        choix: ["Je respire, je regarde mon plan, je reprends", "Je m'excuse et je passe à la conclusion", "Je dis que j'ai oublié et je m'arrête", "Je reprends tout depuis le début"],
        bonne: 0, niv: 2,
        expl: "Un court silence n'est pas grave. On retrouve le fil avec le plan et une transition." },
      { q: "Que note le critère « prise de parole en continu » ?",
        choix: ["Parler sans jamais faire de pause", "Parler le plus vite possible", "Parler de façon fluide sans lire", "Parler sans regarder le jury"],
        bonne: 2, niv: 1,
        expl: "Fluide ne veut pas dire sans pause : les pauses sont même conseillées." },
      { q: "Tu dis « du coup » toutes les deux phrases. Quel est le meilleur moyen de t'en rendre compte ?",
        choix: ["M'enregistrer et me réécouter", "Demander au jury de me le signaler", "Apprendre une liste de synonymes", "Parler plus vite pour les cacher"],
        bonne: 0, niv: 2,
        expl: "L'enregistrement montre ses tics et son débit : on peut ensuite les corriger." },
      { q: "Sous le stress, tu parles très vite. Que fais-tu ?",
        choix: ["Je fais des phrases courtes et des pauses", "Je parle encore plus fort qu'avant", "Je lis ma feuille pour me calmer", "Je raccourcis mon exposé de moitié"],
        bonne: 0, niv: 2,
        expl: "Phrases courtes et pauses ralentissent naturellement le débit." },
      { q: "Le professeur de ta spécialité sourit, l'autre membre du jury reste neutre. Que fais-tu de ton regard ?",
        choix: ["Je regarde surtout celui qui sourit", "Je regarde surtout l'autre membre", "Je regarde mes notes pour rester calme", "Je regarde les deux, tour à tour"],
        bonne: 3, niv: 3,
        expl: "Les deux membres notent. Un jury neutre n'est pas un jury hostile." },
      { q: "Quelle phrase est dans le bon registre ?",
        choix: ["Ce résultat, genre, c'est trop de ouf comme truc", "En mode, ce résultat il est vraiment trop bizarre", "Ce résultat m'a surpris, il contredit l'idée reçue", "Bah ce résultat il est chelou, voilà quoi, du coup"],
        bonne: 2, niv: 1,
        expl: "Registre courant et correct : ni familier ni compliqué." },
      { q: "Pourquoi faire une pause après une idée importante ?",
        choix: ["Pour montrer qu'on a oublié la suite", "Pour gagner du temps sur l'exposé", "Parce que c'est obligatoire à l'oral", "Pour laisser le jury la retenir"],
        bonne: 3, niv: 2,
        expl: "Une pause met l'idée en valeur. Elle n'est pas un signe de faiblesse." },
      { q: "Pendant l'exposé, tu tiens ton stylo et tu le fais tourner. Que vaut-il mieux faire ?",
        choix: ["Le garder pour montrer ton plan", "Le mettre dans ta poche avec tes mains", "Le poser et laisser les mains libres", "Le tenir derrière ton dos"],
        bonne: 2, niv: 2,
        expl: "Les mains libres accompagnent la parole. Un objet dans les mains trahit le stress." },
      { q: "Tu as un excellent contenu mais tu lis ta feuille. Quelle conséquence ?",
        choix: ["Rien, le contenu suffit à la grille", "Le jury arrête l'épreuve sur-le-champ", "Tu perds des points de qualité orale", "Ta note est plafonnée à 10 sur 20"],
        bonne: 2, niv: 3,
        expl: "La qualité orale et la prise de parole en continu font partie de la grille." },
      { q: "Juste avant d'entrer, ton cœur bat fort. Quel geste simple aide ?",
        choix: ["Relire très vite tout l'exposé", "Boire un café ou une boisson énergisante", "Retenir sa respiration le plus longtemps", "Inspirer en 4 secondes, souffler en 6"],
        bonne: 3, niv: 2,
        expl: "Une expiration plus longue que l'inspiration calme le corps." },
    ] },
  { chapitre: "grand-oral-6",
    fiche: `## L'échange avec le jury

Le second temps dure **10 minutes**. Le jury pose des questions pour **préciser** et **approfondir** ce que l'élève a dit. C'est souvent là que se fait la différence entre une note moyenne et une bonne note.

### Ce que disent les textes
- Le jury interroge le candidat pour l'amener à **préciser et approfondir sa pensée**.
- Les questions peuvent porter sur **toute partie du programme du cycle terminal** (première et terminale) des spécialités, **en lien avec la question** présentée.
- Le candidat peut être **assis ou debout**, et utiliser un **tableau** s'il y en a un.
- Le jury ne fait pas faire d'exercice écrit : c'est une **discussion**.

### Les questions que le jury pose souvent
- **Préciser** : « Pouvez-vous définir… ? », « Qu'entendez-vous par… ? »
- **Approfondir** : « Pourquoi ce phénomène se produit-il ? », « Comment le mesure-t-on ? »
- **Élargir** au programme : « Quel lien faites-vous avec le chapitre sur… ? »
- **Contredire** : « Ne pourrait-on pas dire au contraire que… ? » Ce n'est pas une attaque : le jury teste l'**argumentation** et l'**esprit critique**.
- **Revenir sur l'exposé** : « Vous avez cité tel chiffre, d'où vient-il ? »
- **Faire réagir** : « Que pensez-vous personnellement de… ? »

### Comment bien répondre
- **Écouter la question jusqu'au bout**, sans couper.
- Prendre **deux secondes** pour réfléchir : c'est permis et cela évite de partir dans tous les sens.
- **Répondre d'abord directement**, en une phrase, puis **justifier** (une notion, un exemple).
- Rester **bref** : 30 secondes à 1 minute par réponse. Le jury veut poser plusieurs questions.
- Faire des liens avec d'autres chapitres ou l'autre spécialité quand c'est possible.

### Quand on ne sait pas
- Ne **jamais inventer** une réponse fausse avec assurance : le jury s'en rend compte.
- Dire honnêtement : « Je ne suis pas sûr, mais je pense que… », puis **raisonner à voix haute** à partir de ce qu'on sait.
- Si on ne comprend pas la question, demander de la **reformuler** : « Pouvez-vous reformuler votre question ? ». C'est mieux que de répondre à côté.
- Accepter une **correction** du jury et la reprendre : « Vous avez raison, j'aurais dû dire… ».

### Quand le jury conteste
- Garder son **calme**, ne pas se vexer.
- Soit **défendre** son idée avec un nouvel argument, soit **nuancer** : « C'est vrai dans ce cas, mais… ».
- Changer d'avis à chaque objection donne une impression de fragilité ; s'entêter sans argument aussi. Le bon équilibre : **argumenter**.

### L'interaction
- C'est un critère de la grille : la **qualité de l'interaction**. On montre qu'on écoute, qu'on réagit à ce que dit le jury, qu'on rebondit.
- On regarde la personne qui pose la question, puis l'autre membre en répondant.
- On peut reprendre une idée du jury : « Comme vous le disiez… ».

### Le projet d'orientation
- Depuis la session 2027, il n'y a **plus de temps** prévu sur l'orientation et elle n'est pas évaluée.
- Si un membre du jury en parle quand même, on répond simplement et brièvement, puis on revient au sujet si on le peut.

### À retenir pour le bac
- Réponse directe, puis justification, en peu de temps.
- Ne rien inventer : raisonner à voix haute.
- Une objection est une invitation à argumenter.
- Réviser tout le programme des spécialités lié à ses questions, première comprise.`,
    cartes: [
      { q: "Durée du second temps", r: "10 minutes." },
      { q: "À quoi servent les questions du jury ?", r: "À faire préciser et approfondir la pensée de l'élève." },
      { q: "Sur quoi peuvent porter les questions ?", r: "Sur le programme de première et de terminale des spécialités, en lien avec la question." },
      { q: "Peut-on s'asseoir pendant l'échange ?", r: "Oui, on peut être assis ou debout." },
      { q: "Comment structurer une réponse ?", r: "Répondre d'abord directement en une phrase, puis justifier avec une notion et un exemple." },
      { q: "Durée conseillée d'une réponse", r: "Environ 30 secondes à 1 minute." },
      { q: "Que faire si on ne comprend pas la question ?", r: "Demander poliment au jury de la reformuler." },
      { q: "Que faire si on ne connaît pas la réponse ?", r: "Le dire honnêtement, puis raisonner à voix haute à partir de ce qu'on sait." },
      { q: "Pourquoi le jury contredit-il parfois ?", r: "Pour tester l'argumentation et l'esprit critique, pas pour piéger." },
      { q: "Comment réagir à une objection ?", r: "Rester calme, défendre son idée avec un argument ou la nuancer." },
      { q: "Qu'est-ce que la qualité de l'interaction ?", r: "Écouter, réagir à ce que dit le jury, rebondir sur ses remarques." },
      { q: "Le jury fait-il faire un exercice écrit ?", r: "Non, l'échange est une discussion." },
      { q: "L'orientation est-elle évaluée en 2027 ?", r: "Non, ce temps a été supprimé." },
    ],
    quiz: [
      { q: "Combien de temps dure l'échange avec le jury en 2027 ?",
        choix: ["12 minutes", "15 minutes", "10 minutes", "20 minutes"],
        bonne: 2, niv: 1,
        expl: "L'épreuve compte deux temps de 10 minutes : l'exposé, puis l'échange." },
      { q: "Le jury te demande : « Ne pourrait-on pas dire au contraire que… ? ». Que fais-tu ?",
        choix: ["J'abandonne mon idée pour lui donner raison", "Je répète mon exposé plus fort", "J'argumente ou je nuance, calmement", "Je réponds que je ne suis pas d'accord, sans plus"],
        bonne: 2, niv: 2,
        expl: "L'objection teste l'argumentation : on défend ou on nuance avec un nouvel argument." },
      { q: "Le jury te pose une question dont tu ne connais pas la réponse. Que fais-tu ?",
        choix: ["J'invente une réponse avec assurance", "Je change de sujet rapidement", "Je dis « je ne sais pas » et j'attends", "Je raisonne à voix haute avec ce que je sais"],
        bonne: 3, niv: 2,
        expl: "On reste honnête et on montre sa réflexion. Inventer se voit, se taire n'apporte rien." },
      { q: "Tu ne comprends pas la question du jury. Quelle est la meilleure réaction ?",
        choix: ["Lui demander de la reformuler", "Répondre à une question proche", "Sourire et passer à autre chose", "Reprendre la fin de ton exposé"],
        bonne: 0, niv: 1,
        expl: "Demander une reformulation est normal. Répondre à côté fait perdre des points." },
      { q: "Sur quoi le jury peut-il t'interroger pendant l'échange ?",
        choix: ["Le programme des spécialités, première comprise", "Ce que tu as dit dans l'exposé, rien d'autre", "Le programme des matières communes du bac", "Ton projet d'orientation après le bac"],
        bonne: 0, niv: 1,
        expl: "Les questions portent sur le cycle terminal des spécialités, en lien avec la question." },
      { q: "Quelle réponse est la mieux construite ?",
        choix: ["Alors, c'est compliqué, il y a beaucoup de choses", "Euh, je dirais que ça dépend, voilà", "Comme je l'ai dit dans mon exposé…", "Oui, parce que… Par exemple…"],
        bonne: 3, niv: 2,
        expl: "Réponse directe d'abord, puis justification et exemple." },
      { q: "Tes réponses durent toutes 3 minutes. Quel est le problème ?",
        choix: ["C'est parfait, c'est très complet", "Le jury pose moins de questions", "Le jury pense que tu stresses", "Tu risques de dépasser 20 minutes"],
        bonne: 1, niv: 3,
        expl: "Des réponses courtes permettent plus de questions, donc plus d'occasions de montrer ce qu'on sait." },
      { q: "Le jury te corrige sur une définition. Que réponds-tu ?",
        choix: ["Vous avez raison, j'aurais dû dire…", "Je maintiens ma définition, elle est juste", "C'est ce qu'on m'a appris en cours", "Ce n'est pas très important pour mon sujet"],
        bonne: 0, niv: 3,
        expl: "Accepter et reprendre une correction montre une bonne interaction. S'entêter sans argument coûte des points." },
      { q: "Un membre du jury te demande ton projet après le bac. Que fais-tu ?",
        choix: ["Je refuse, car ce n'est plus au programme", "Je parle cinq minutes de mon projet", "Je dis que je n'en ai pas encore", "Je réponds brièvement, puis je reviens au sujet"],
        bonne: 3, niv: 3,
        expl: "L'orientation n'est plus évaluée en 2027, mais répondre poliment et brièvement reste le bon réflexe." },
      { q: "Le jury te demande : « Quel lien faites-vous avec le chapitre sur… ? ». Que vérifie-t-il ?",
        choix: ["Que tu as lu tout le manuel de l'année", "Que tu sais relier les savoirs entre eux", "Que tu connais ton cours par cœur", "Que tu sais dessiner un schéma au tableau"],
        bonne: 1, niv: 2,
        expl: "Relier les connaissances est l'un des points valorisés par les textes." },
      { q: "Pendant l'échange, que peux-tu faire ?",
        choix: ["Consulter tes fiches de cours", "Utiliser ton téléphone pour un chiffre", "Demander une pause de 5 minutes", "T'asseoir ou rester debout"],
        bonne: 3, niv: 1,
        expl: "Assis ou debout, avec un tableau s'il y en a un. Aucun document n'est permis." },
    ] },
  { chapitre: "grand-oral-7",
    fiche: `## Gérer le stress

Presque tout le monde a peur de parler devant un jury. Le stress n'est pas un défaut : il donne de l'énergie. Le but n'est pas de le faire disparaître, mais de **le rendre gérable**.

### Comprendre le stress
- Le stress est une **réaction normale** du corps devant une situation importante : le cœur bat plus vite, les mains tremblent, la bouche est sèche.
- Le jury le **sait** et ne le sanctionne pas. Ce qui compte, c'est ce qu'on dit et comment on le dit.
- Le stress diminue presque toujours **après la première minute**. D'où l'intérêt de connaître parfaitement son début.

### Ce qui réduit le plus le stress : la préparation
- Un exposé **répété à voix haute** de nombreuses fois devient automatique : la peur a moins de place.
- **Répéter dans des conditions proches du réel** : debout, chronomètre, devant une ou deux personnes, avec des questions après.
- Préparer des **réponses aux questions probables** : définitions, chiffres, objections classiques.
- Savoir par cœur la **première phrase** et la **dernière**.

### Les jours d'avant
- **Dormir** suffisamment, surtout les deux nuits qui précèdent.
- Ne pas apprendre de nouvelles choses la veille : **relire** son plan et ses mots clés, c'est tout.
- Préparer ses affaires et sa **convocation**, vérifier l'heure et le trajet, arriver **en avance**.
- Prévoir une **tenue correcte** dans laquelle on est à l'aise. Il n'y a pas de tenue imposée.

### Juste avant d'entrer
- **Respirer lentement** : inspirer par le nez en 4 secondes, souffler par la bouche en 6. Recommencer cinq fois. Souffler plus longtemps qu'on inspire calme le corps.
- **Bouger un peu** : marcher, relâcher les épaules, secouer les mains.
- Se répéter **l'accroche** dans sa tête.
- Éviter les boissons énergisantes et le café en grande quantité : ils augmentent l'agitation.
- Avoir une **bouteille d'eau** si c'est autorisé par le centre d'examen.

### Pendant l'épreuve
- Commencer **lentement** : saluer, se poser, respirer, puis parler.
- Si la voix tremble : **ralentir** et parler un peu plus fort.
- En cas de trou : s'arrêter, respirer, regarder son plan. Un silence de quelques secondes paraît bien plus long à celui qui parle qu'au jury.
- Se concentrer sur **ce qu'on explique**, pas sur soi.

### Les pensées qui aident
- Remplacer « Je vais rater » par « Je connais mon sujet mieux que la plupart des gens ».
- Le jury n'est **pas un ennemi** : il cherche ce qu'on sait, pas ce qu'on ignore.
- Une erreur n'est pas une catastrophe : on peut se corriger (« Pardon, je reprends : … »).

### Si le stress est très fort
- Si le stress empêche vraiment de parler, en parler tôt dans l'année à un professeur, à l'infirmière ou au psychologue de l'Éducation nationale.
- Les élèves qui ont un trouble reconnu peuvent demander un **aménagement** de l'épreuve, à l'avance.

### À retenir pour le bac
- Le stress est normal et le jury le sait.
- La meilleure arme : avoir répété à voix haute, souvent.
- Respiration lente avant d'entrer, début lent.
- Un trou se rattrape : respirer, regarder son plan, reprendre.`,
    cartes: [
      { q: "Le stress est-il sanctionné par le jury ?", r: "Non : le jury sait qu'il est normal. Il note le contenu et la façon de parler." },
      { q: "Quand le stress baisse-t-il en général ?", r: "Après la première minute, une fois lancé." },
      { q: "Meilleur moyen de réduire le stress", r: "Avoir répété l'exposé à voix haute de nombreuses fois." },
      { q: "Que faire la veille ?", r: "Relire son plan et ses mots clés, bien dormir, préparer sa convocation. Rien de nouveau." },
      { q: "Respiration qui calme", r: "Inspirer en 4 secondes, souffler en 6, plusieurs fois." },
      { q: "Pourquoi souffler plus longtemps qu'on inspire ?", r: "Une expiration longue ralentit le cœur et calme le corps." },
      { q: "Que faire si la voix tremble ?", r: "Ralentir et parler un peu plus fort." },
      { q: "Comment commencer l'épreuve ?", r: "Lentement : saluer, se poser, respirer, puis parler." },
      { q: "Que faire en cas d'erreur pendant l'exposé ?", r: "Se corriger simplement : « Pardon, je reprends : … »." },
      { q: "Pourquoi connaître sa première phrase par cœur ?", r: "Le début est le moment le plus stressant : le réussir lance la suite." },
      { q: "Boissons à éviter avant l'épreuve", r: "Les boissons énergisantes et beaucoup de café, qui augmentent l'agitation." },
      { q: "Vers qui se tourner si le stress est très fort ?", r: "Un professeur, l'infirmière ou le psychologue de l'Éducation nationale, tôt dans l'année." },
    ],
    quiz: [
      { q: "Tes mains tremblent en entrant dans la salle. Que pense le jury ?",
        choix: ["Que c'est normal : il ne le sanctionne jamais", "Que tu as mal préparé ton exposé", "Que tu mérites moins de points", "Que tu caches quelque chose au jury"],
        bonne: 0, niv: 1,
        expl: "Le jury voit des élèves stressés toute la journée : il note le fond et la forme, pas le trac." },
      { q: "Quelle méthode réduit le plus le stress du Grand oral ?",
        choix: ["Relire l'exposé en silence la veille", "Répéter l'exposé à voix haute, souvent", "Ne plus y penser jusqu'au jour J", "Apprendre de nouveaux exemples la veille"],
        bonne: 1, niv: 2,
        expl: "La répétition à voix haute rend l'exposé automatique et laisse moins de place à la peur." },
      { q: "La veille de l'épreuve, que fais-tu ?",
        choix: ["Je relis mon plan et je dors bien", "J'apprends un nouveau chapitre lié", "Je refais complètement mon exposé", "Je révise toute la nuit"],
        bonne: 0, niv: 2,
        expl: "La veille, on consolide, on ne change rien. Le sommeil compte plus qu'une heure de plus." },
      { q: "Juste avant d'entrer, quelle respiration choisis-tu ?",
        choix: ["Inspirer vite et fort plusieurs fois", "Retenir sa respiration le plus possible", "Inspirer en 4 secondes, souffler en 6", "Souffler en 2 secondes, inspirer en 8"],
        bonne: 2, niv: 1,
        expl: "Une expiration plus longue que l'inspiration calme le cœur." },
      { q: "Ta voix tremble au début de l'exposé. Que fais-tu ?",
        choix: ["Je parle plus vite pour en finir", "Je m'arrête et je demande à sortir", "Je baisse la voix pour qu'on l'entende moins", "Je ralentis et je parle un peu plus fort"],
        bonne: 3, niv: 2,
        expl: "Ralentir et poser sa voix stabilise le tremblement." },
      { q: "Tu te trompes de chiffre au milieu de l'exposé. Que fais-tu ?",
        choix: ["Je continue en espérant qu'on ne l'ait pas vu", "Je m'arrête et je recommence tout", "J'explique au jury que je suis stressé", "Je dis « pardon, je reprends » et je corrige"],
        bonne: 3, niv: 2,
        expl: "Se corriger simplement montre qu'on maîtrise son sujet. Le jury l'apprécie." },
      { q: "Pourquoi est-il utile de connaître sa première phrase par cœur ?",
        choix: ["Le jury note surtout la première phrase", "C'est obligatoire dans le règlement", "Le début est le moment le plus stressant", "Elle compte pour le choix de la question"],
        bonne: 2, niv: 3,
        expl: "Une fois lancé, le stress baisse : bien réussir le début aide pour la suite." },
      { q: "Tu penses « Je vais rater ». Quelle pensée aide le plus ?",
        choix: ["Le jury veut me piéger, je dois me méfier", "Je connais mon sujet, je l'ai répété", "De toute façon, le coefficient est faible", "Si je rate, je repasserai en septembre"],
        bonne: 1, niv: 3,
        expl: "Une pensée réaliste et positive aide. Le Grand oral ne se repasse pas au rattrapage." },
      { q: "Un silence de 3 secondes pendant ton exposé, c'est :",
        choix: ["Une faute qui coûte des points", "Le signe que tu as tout oublié", "Plus long pour toi que pour le jury", "Interdit par la grille d'évaluation"],
        bonne: 2, niv: 3,
        expl: "Le silence paraît bien plus long à celui qui parle. Il permet de se reprendre." },
      { q: "Le matin de l'épreuve, quelle boisson éviter en grande quantité ?",
        choix: ["Les tisanes à la camomille", "Les jus de fruits frais", "L'eau minérale gazeuse", "Les boissons énergisantes"],
        bonne: 3, niv: 1,
        expl: "Les excitants augmentent l'agitation et le tremblement." },
      { q: "Ton stress t'empêche vraiment de parler en public, depuis toujours. Que faire ?",
        choix: ["En parler tôt et voir si un aménagement est possible", "Attendre le jour J en espérant que ça passe", "Ne pas préparer pour moins y penser", "Prendre un médicament sans avis médical"],
        bonne: 0, niv: 2,
        expl: "Un professeur, l'infirmière ou le psychologue peuvent aider ; un aménagement se demande à l'avance." },
    ] },
  { chapitre: "grand-oral-8",
    fiche: `## La grille d'évaluation et les erreurs qui coûtent des points

Le jury s'appuie sur une **grille indicative**, publiée avec la note de service. La connaître permet de savoir exactement sur quoi on est noté, et d'éviter les erreurs classiques.

### Les cinq critères de la grille
- **Qualité orale** : voix audible, débit posé, articulation, registre correct, regard.
- **Prise de parole en continu** : parler de façon fluide, sans lire, en tenant le temps.
- **Qualité des connaissances** : notions du programme justes et précises, définitions, exemples, chiffres sûrs.
- **Qualité de l'interaction** : écouter, comprendre les questions, réagir, rebondir.
- **Qualité et construction de l'argumentation** : un plan clair, des arguments reliés, des nuances, une réponse à la question.
- Chaque critère est décrit sur **quatre niveaux**, de **très insuffisant** à **très satisfaisant**. La note finale est sur **20**.
- Les textes valorisent aussi la **solidité des connaissances**, la capacité à **relier les savoirs**, l'**esprit critique**, la **précision** de l'expression, l'**engagement** et la **force de conviction**.

### Ce qui n'est pas noté
- La **formulation** de la question et son **intérêt**.
- Le **support** préparé pendant les 20 minutes.
- Le **projet d'orientation** : il n'y a plus de temps qui lui est consacré depuis 2027.
- La tenue vestimentaire (mais une tenue correcte met dans de bonnes conditions).

### Les erreurs qui coûtent cher
- **Lire sa feuille** ou réciter un texte appris mot à mot : on perd sur la qualité orale et la prise de parole en continu.
- **Un exposé trop court** (5 minutes au lieu de 10) : le contenu manque, les connaissances sont peu visibles.
- **Ne pas répondre à la question** : un exposé qui décrit le thème sans conclure.
- **Oublier d'expliquer le choix** de la question au début, alors que c'est demandé.
- **Des connaissances floues** : définitions approximatives, chiffres inventés, confusions de notions.
- **N'avoir préparé qu'une question** : le jury peut choisir l'autre.
- **Arriver sans questions conformes** : l'épreuve n'a pas lieu ; à la deuxième fois, la note est 0.
- **Inventer une réponse** pendant l'échange au lieu de raisonner honnêtement.
- **Se fermer ou se vexer** quand le jury contredit.
- **Un vocabulaire familier** ou beaucoup de tics de langage.

### Les erreurs qui coûtent peu (et qu'on surestime)
- Un « euh » de temps en temps.
- Une hésitation, un silence de quelques secondes.
- Une petite erreur **corrigée** par soi-même.
- Des mains qui tremblent au début.

### Comment se servir de la grille pour s'entraîner
- Faire passer son exposé à un proche, puis lui demander de cocher chaque critère : « Est-ce que je t'ai regardé ? Est-ce que j'ai répondu à la question ? As-tu compris les notions ? ».
- Se filmer, puis se noter soi-même sur les cinq critères.
- Travailler en priorité le critère le plus faible.

### Une bonne note, concrètement
- Un exposé d'environ 10 minutes, dit sans lire, avec un plan clair.
- Des notions de spécialité expliquées simplement, avec des exemples.
- Une réponse nette à la question, nuancée.
- Un échange où l'élève écoute, répond court, argumente et accepte la discussion.

### À retenir pour le bac
- Cinq critères : qualité orale, prise de parole en continu, connaissances, interaction, argumentation.
- Non notés : formulation de la question, support, orientation.
- Les pires erreurs : lire, finir trop tôt, ne pas répondre, inventer.
- Les petites hésitations comptent peu.`,
    cartes: [
      { q: "Les cinq critères de la grille", r: "Qualité orale, prise de parole en continu, connaissances, interaction, argumentation." },
      { q: "Combien de niveaux par critère ?", r: "Quatre, de très insuffisant à très satisfaisant." },
      { q: "Sur combien est noté le Grand oral ?", r: "Sur 20." },
      { q: "Trois éléments qui ne sont pas notés", r: "La formulation de la question, le support, le projet d'orientation." },
      { q: "Que recouvre la qualité orale ?", r: "Voix audible, débit, articulation, registre de langue, regard." },
      { q: "Que recouvre la qualité des connaissances ?", r: "Des notions du programme justes et précises, avec définitions et exemples." },
      { q: "Que recouvre l'argumentation ?", r: "Un plan clair, des arguments reliés, des nuances, une vraie réponse." },
      { q: "Erreur la plus pénalisante sur la forme", r: "Lire sa feuille ou réciter un texte appris mot à mot." },
      { q: "Erreur la plus pénalisante sur le fond", r: "Ne pas répondre à la question, ou avoir des connaissances floues." },
      { q: "Que risque-t-on sans questions conformes ?", r: "L'épreuve n'a pas lieu ; si cela se reproduit, la note est 0." },
      { q: "Erreurs qu'on surestime", r: "Un « euh » de temps en temps, une courte hésitation, une petite erreur corrigée." },
      { q: "Comment utiliser la grille pour s'entraîner ?", r: "Se faire noter par un proche ou se filmer, puis travailler le critère le plus faible." },
    ],
    quiz: [
      { q: "Lequel de ces éléments est un critère de la grille indicative ?",
        choix: ["La qualité visuelle du support", "L'intérêt du sujet choisi", "Le projet d'orientation du candidat", "La prise de parole en continu"],
        bonne: 3, niv: 1,
        expl: "Les trois autres ne sont pas notés." },
      { q: "Combien de niveaux décrit la grille pour chaque critère ?",
        choix: ["3", "2", "4", "1"],
        bonne: 2, niv: 1,
        expl: "Quatre niveaux, de très insuffisant à très satisfaisant." },
      { q: "Lequel de ces éléments n'est **pas** noté ?",
        choix: ["L'argumentation construite", "Le support", "Les connaissances précises", "La qualité de l'interaction"],
        bonne: 1, niv: 1,
        expl: "Le support est une aide, il n'est pas évalué." },
      { q: "Ton exposé décrit bien le thème mais ne conclut pas. Quel critère est surtout touché ?",
        choix: ["La qualité orale", "L'argumentation", "L'interaction", "La prise de parole en continu"],
        bonne: 1, niv: 2,
        expl: "Une argumentation doit mener à une réponse à la question posée." },
      { q: "Tu donnes un chiffre approximatif en le présentant comme exact. Quel critère est touché ?",
        choix: ["La qualité des connaissances", "La qualité orale", "La prise de parole en continu", "L'interaction"],
        bonne: 0, niv: 2,
        expl: "Mieux vaut un ordre de grandeur annoncé comme tel qu'un chiffre faux affirmé." },
      { q: "Un élève dit trois « euh » en 10 minutes. Est-ce grave ?",
        choix: ["Oui, cela retire un point chacun", "Non, cela compte très peu", "C'est un critère éliminatoire", "Oui, si le jury les compte"],
        bonne: 1, niv: 2,
        expl: "Quelques hésitations sont normales. Ce sont les tics répétés en permanence qui gênent." },
      { q: "Pendant l'échange, tu coupes la parole au jury et réponds à côté. Quel critère perds-tu ?",
        choix: ["La qualité des connaissances", "La qualité de l'interaction", "La qualité orale", "L'argumentation"],
        bonne: 1, niv: 2,
        expl: "L'interaction, c'est écouter, comprendre la question et y répondre." },
      { q: "Ton exposé dure 5 minutes, sans erreur. Qu'est-ce qui risque d'en souffrir ?",
        choix: ["Les connaissances et la prise de parole", "La qualité orale, rien d'autre", "L'interaction, rien d'autre", "Rien, l'essentiel est dit"],
        bonne: 0, niv: 3,
        expl: "Trop court, l'exposé montre peu de contenu et ne tient pas la prise de parole attendue." },
      { q: "Le jury trouve ta question banale. Que vaut cette remarque pour ta note ?",
        choix: ["Un point de moins en argumentation", "Rien, ce n'est jamais noté", "Un point de moins en connaissances", "Une note plafonnée à 12"],
        bonne: 1, niv: 3,
        expl: "Ni la formulation ni l'intérêt de la question ne sont notés." },
      { q: "Lequel de ces comportements coûte le plus de points ?",
        choix: ["Faire une pause de 3 secondes", "Lire tout son exposé sur sa feuille", "Avoir les mains qui tremblent", "Se corriger après une petite erreur"],
        bonne: 1, niv: 3,
        expl: "Lire pénalise la qualité orale et la prise de parole en continu. Les autres comptent peu." },
      { q: "Comment utiliser la grille avant l'épreuve ?",
        choix: ["L'apprendre par cœur pour la réciter au jury", "La recopier sur son support", "La lire pendant la préparation", "Se faire noter sur chaque critère par un proche"],
        bonne: 3, niv: 2,
        expl: "Se noter critère par critère montre quoi travailler en priorité." },
    ] },
  ],
  methode: [
    {
      "id": "grand-oral-m1",
      "mat": "grand-oral",
      "titre": "Les 20 minutes de préparation",
      "formules": [
        "Le jury choisit l'une de vos deux questions",
        "Vous disposez de 20 minutes pour préparer votre exposé"
      ],
      "vu": [
        "Notes de service du 10 septembre 2026 (voies générale et technologique)"
      ],
      "pts": "Non noté, mais il décide de tout le reste",
      "attendu": "La préparation n'est pas notée. Elle sert à remettre en tête un exposé déjà construit pendant l'année, et à préparer, si on le veut, un support simple (plan, schéma, mots clés) qui n'est pas évalué.",
      "etapes": [
        "Lire la question choisie et respirer une minute",
        "Écrire en gros le plan en 3 parties et la réponse finale",
        "Noter les 5 ou 6 mots clés et les 2 ou 3 chiffres, dates ou auteurs à citer",
        "Faire un schéma ou un support simple si la question s'y prête",
        "Répéter dans sa tête l'accroche et la conclusion mot pour mot",
        "Garder les 2 dernières minutes pour se calmer"
      ],
      "mots": [
        "plan",
        "mots clés",
        "accroche",
        "réponse à la question",
        "support non évalué"
      ],
      "pieges": [
        "Rédiger tout le texte, puis le lire",
        "Découvrir sa question le jour même au lieu de l'avoir travaillée",
        "Faire un support trop chargé qu'on n'arrive pas à suivre"
      ],
      "cas": "Une élève a pour question : « Pourquoi le prix de l'électricité varie-t-il selon l'heure de la journée ? ». Le jury vient de choisir cette question.",
      "question": "Que doit contenir sa feuille de préparation au bout de 20 minutes ?",
      "modele": "En haut, l'accroche (une situation de la vie courante : recharger un téléphone la nuit coûte moins cher). Puis la question, recopiée. Ensuite trois parties en mots clés : la demande d'électricité change selon l'heure ; la production doit s'adapter, avec des moyens plus chers aux heures de pointe ; les prix servent à étaler la demande. Sous chaque partie, un exemple ou un chiffre. Enfin, la réponse en une phrase, écrite en entier.",
      "grille": [
        "L'accroche est prête",
        "Le plan tient en 3 parties",
        "Chaque partie a un exemple ou une notion précise",
        "La réponse finale est écrite en entier",
        "Rien n'est rédigé comme un texte à lire"
      ]
    },
    {
      "id": "grand-oral-m2",
      "mat": "grand-oral",
      "titre": "Premier temps : l'exposé de 10 minutes",
      "formules": [
        "Vous expliquez pourquoi vous avez choisi cette question, puis vous la développez et vous y répondez",
        "Debout, sauf aménagement"
      ],
      "vu": [
        "Notes de service du 10 septembre 2026",
        "Grille d'évaluation indicative : qualité orale, prise de parole en continu, connaissances, argumentation"
      ],
      "pts": "Évalué avec la grille de l'épreuve (sur 20 avec le second temps)",
      "attendu": "Un exposé qui dure à peu près 10 minutes, construit et dit sans lire : pourquoi cette question, une démarche en parties, des connaissances précises de la spécialité, puis une vraie réponse.",
      "etapes": [
        "Saluer, se présenter brièvement, annoncer la question",
        "Accroche : un exemple concret ou un chiffre",
        "Expliquer le choix de la question (lien avec la spécialité, intérêt personnel)",
        "Annoncer le plan",
        "Développer 2 ou 3 parties avec notions et exemples",
        "Conclure : répondre clairement, puis ouvrir"
      ],
      "mots": [
        "problématique",
        "notion du programme",
        "exemple précis",
        "transition",
        "en conclusion",
        "ma réponse est"
      ],
      "pieges": [
        "Finir en 4 minutes",
        "Réciter un texte appris par cœur",
        "Raconter sa vie au lieu d'expliquer le choix",
        "Ne jamais répondre à la question posée"
      ],
      "cas": "Un élève de spécialités SES et HGGSP a pour question : « Les réseaux sociaux renforcent-ils la démocratie ? ».",
      "question": "Rédige la première minute de son exposé (accroche, choix de la question, annonce du plan).",
      "modele": "Bonjour. Le soir d'une élection, beaucoup de jeunes apprennent les résultats non pas à la télévision, mais sur leur téléphone, par une vidéo ou un message partagé. Je me suis demandé si cela rendait notre démocratie plus forte ou plus fragile, d'où ma question : les réseaux sociaux renforcent-ils la démocratie ? Je l'ai choisie parce qu'elle relie mes deux spécialités : les SES, avec l'opinion publique et la participation politique, et l'HGGSP, avec la question de l'information. Je montrerai d'abord que les réseaux facilitent la participation, puis qu'ils peuvent aussi fragiliser le débat, avant de voir comment on peut les réguler.",
      "grille": [
        "Une accroche concrète",
        "Le choix de la question est justifié par les spécialités",
        "La question est dite clairement",
        "Le plan est annoncé",
        "Le ton est naturel, pas récité"
      ]
    },
    {
      "id": "grand-oral-m3",
      "mat": "grand-oral",
      "titre": "Second temps : l'échange de 10 minutes avec le jury",
      "formules": [
        "Pouvez-vous préciser ce que vous entendez par… ?",
        "Ne pourrait-on pas dire au contraire que… ?",
        "Quel lien faites-vous avec… du programme ?"
      ],
      "vu": [
        "Notes de service du 10 septembre 2026 : l'échange porte sur le programme du cycle terminal des spécialités, en lien avec la question"
      ],
      "pts": "Évalué avec la grille : connaissances, interaction, argumentation",
      "attendu": "Le jury cherche à voir si l'élève comprend vraiment ce qu'il dit. Il attend des réponses précises, des définitions, des exemples, une capacité à reconnaître les limites de son raisonnement et à défendre un avis argumenté.",
      "etapes": [
        "Écouter la question jusqu'au bout, sans couper",
        "Reformuler si besoin, ou demander de répéter",
        "Répondre d'abord directement, en une phrase",
        "Justifier avec une notion et un exemple",
        "Reconnaître une limite ou une nuance si la question y invite",
        "S'arrêter, et regarder le jury pour la suite"
      ],
      "mots": [
        "si je comprends bien votre question",
        "c'est-à-dire",
        "par exemple",
        "cependant",
        "je ne suis pas certain, mais je pense que"
      ],
      "pieges": [
        "Inventer une réponse sûre de soi",
        "Répondre « je ne sais pas » sans rien proposer",
        "Refaire l'exposé au lieu de répondre",
        "Se vexer quand le jury conteste"
      ],
      "cas": "Après l'exposé sur les réseaux sociaux, un membre du jury demande : « Vous parlez de bulles de filtre. Est-ce que cela existait déjà avant Internet ? »",
      "question": "Que pourrait répondre l'élève ?",
      "modele": "C'est une bonne remarque. En partie oui : avant Internet, on lisait souvent un journal proche de ses idées, et on discutait surtout avec des gens de son milieu. Ce qui change avec les réseaux, c'est que le tri est fait par un algorithme, sans qu'on le voie, et de façon beaucoup plus rapide. Donc le phénomène n'est pas nouveau, mais il est sans doute renforcé.",
      "grille": [
        "Une réponse directe dès la première phrase",
        "Un exemple ou une notion à l'appui",
        "Une nuance assumée",
        "Un ton calme, qui accepte la discussion"
      ]
    }
  ],
  sujets: [

  ],
};
