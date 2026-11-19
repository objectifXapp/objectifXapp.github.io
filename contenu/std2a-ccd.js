// Conception et création en design et métiers d'art (spécialité, terminale STD2A). Sources : voir matiere.sources.
// Programme : programme de design et métiers d'art de première, d'analyse et méthode en design et de conception et création de terminale STD2A (arrêté du 17 janvier 2019), cinq pôles.
// Épreuve : note de service du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026), épreuve pratique de 4 heures à partir de la session 2027 ; attendus détaillés dans la note d'accompagnement de l'inspection (session 2024).
// Ce fichier porte sur la démarche de conception (lire une demande, chercher, dessiner, annoter). La culture du design (histoire, matériaux, vocabulaire plastique) est dans std2a-amd.js et n'est pas répétée.
export default {
  matiere: {
    id: 'std2a-ccd',
    nom: 'Conception et création en design et métiers d\'art',
    voie: 'std2a',
    epreuve: { type: 'pratique', duree: 240, coef: 16, quand: 'juin', note: 'Épreuve pratique de 4 heures, notée sur 20. Le sujet donne un titre, une question, trois à cinq incitations créatives et trois ressources au plus (textes, images). Le candidat mène une exploration créative personnelle sous forme graphique annotée : esquisses, croquis, schémas, mises en situation, avec des annotations écrites qui complètent le dessin. Il répond à une ou plusieurs incitations, dans un ou plusieurs domaines du design et des métiers d\'art. Les supports fournis peuvent être découpés et assemblés, puis repliés au format A4 dans la copie. Quatre critères : cohérence de la démarche, foisonnement et qualité de l\'exploration, mobilisation des connaissances techniques et culturelles, efficience des modes de représentation.' },
    sources: [
      'https://www.education.gouv.fr/bo/2026/Special4/MENE2622654N (épreuves STD2A à partir de la session 2027 : épreuve pratique de conception et création, 4 heures)',
      'https://sti.eduscol.education.fr/sites/eduscol.education.fr.sti/files/ressources/pedagogiques/13133/13133-bac-2024-note-daccompagnement-ccdma.pdf (attendus, critères détaillés et formulation type d\'un sujet)',
      'https://eduscol.education.fr/document/24820/download (programme de design et métiers d\'art de première, d\'analyse et méthode en design et de conception et création de terminale)',
      'https://www.freemaths.fr/sujets-du-bac/baccalaureat-technologique/std2a/conception-et-creation-en-design-et-metiers-d-art/ (sujets 2023 à 2026 : Économiser au quotidien, Retour de la nature, Bien-être en milieu scolaire, Accompagner le vieillissement, À table, L\'attente, J\'peux pas j\'ai piscine, Le temps d\'un pique-nique)',
    ],
    chapitres: [
      { id: 'std2a-ccd-1', t: 'L\'épreuve : lire le sujet et ses incitations', theme: 'Démarche' },
      { id: 'std2a-ccd-2', t: 'Analyser la demande : besoin, usagers, contexte et contraintes', theme: 'Démarche' },
      { id: 'std2a-ccd-3', t: 'Les méthodes de créativité', theme: 'Démarche' },
      { id: 'std2a-ccd-4', t: 'Diverger puis converger : des hypothèses variées et cohérentes', theme: 'Démarche' },
      { id: 'std2a-ccd-5', t: 'Dessiner pour concevoir : croquis et modes de représentation', theme: 'Communication' },
      { id: 'std2a-ccd-6', t: 'Annoter et composer ses planches', theme: 'Communication' },
      { id: 'std2a-ccd-7', t: 'Concevoir un espace', theme: 'Domaines de conception' },
      { id: 'std2a-ccd-8', t: 'Concevoir un objet, un vêtement, un service', theme: 'Domaines de conception' },
      { id: 'std2a-ccd-9', t: 'Concevoir en communication visuelle', theme: 'Domaines de conception' },
      { id: 'std2a-ccd-10', t: 'Les terrains contemporains des sujets', theme: 'Domaines de conception' },
    ],
  },
  paquets: [
    {
      chapitre: 'std2a-ccd-1',
      fiche: `## L'épreuve : lire le sujet et ses incitations

### Ce que contient le sujet
- Un **titre** court, souvent une expression familière : « À table ! », « L'attente », « J'peux pas, j'ai piscine ! », « Le temps d'un pique-nique », « Accompagner le vieillissement ».
- Une **demande** avec une **question** centrale, claire, qui pose l'enjeu majeur : « Comment exploiter le temps de l'attente dans les espaces publics ? », « Comment susciter les interactions sociales autour du repas ? ».
- Trois à cinq **incitations créatives** : chacune oriente la recherche selon un angle (« Faire de l'attente un moment ludique », « Tendre vers le zéro-déchet »). On en choisit **une ou plusieurs**.
- Trois **ressources** au plus : extraits de textes (article, interview, histoire d'une pratique) et documents visuels (projets, lieux, objets).
- Des **modalités** : supports de travail fournis, que l'on peut découper, coller et assembler, mais qu'il faut replier au format A4 dans la copie ; la documentation du sujet ne se découpe pas.
- Quatre **critères d'évaluation**.

### Les quatre critères
- **Cohérence de la démarche** fondée sur les enjeux repérés et questionnés : les enjeux sont compris, le problème est interrogé avec bon sens et recul, les propositions en découlent.
- **Foisonnement et qualité de l'exploration créative** : des hypothèses nombreuses, **diversifiées**, un cheminement **mobile**, des propositions qui répondent aux enjeux.
- **Mobilisation des connaissances techniques et culturelles** : propositions ancrées dans le design et les métiers d'art, **bon sens technologique**, références revisitées sans copier l'existant.
- **Efficience des modes de représentation et d'expression** : dessin clair, annotations lisibles, explicites et utiles, vocabulaire et représentations adaptés.

### Ce que l'on attend vraiment
- C'est une **épreuve graphique** : on pense en dessinant. Le dessin domine, les mots le complètent.
- On ne demande **pas un projet fini**, mais une **exploration** : chercher, faire, défaire, proposer de nouvelles voies.
- La réflexion peut être **raisonnée** (on part d'une analyse) ou **intuitive** (on part d'une image, d'une idée) ; l'essentiel est d'être **foisonnant** tout en restant **cohérent** avec la question.
- On peut rester dans **un domaine** ou circuler entre **plusieurs** (espace, objet, graphisme, mode, service, métier d'art).

### Les erreurs fréquentes
- Ne développer qu'une seule idée, très dessinée, sans alternatives.
- Oublier la question et dessiner « ce qu'on sait faire ».
- Copier un projet des documents.
- Des dessins beaux mais incompréhensibles, sans annotation ni mise en situation.
- Des pages de texte : ce n'est pas une épreuve de rédaction.

### À retenir pour le bac
- Titre, question centrale, trois à cinq incitations, trois ressources au plus, modalités, critères.
- Une ou plusieurs incitations, un ou plusieurs domaines.
- Quatre critères : cohérence, foisonnement, connaissances, représentation.
- Exploration graphique annotée, pas un projet fini.`,
      cartes: [
        { q: "Que contient un sujet de conception et création ?", r: "Un titre, une question centrale, trois à cinq incitations créatives, trois ressources au plus, des modalités et des critères." },
        { q: "Qu'est-ce qu'une incitation créative ?", r: "Une piste qui oriente la recherche selon un angle, par exemple « faire de l'attente un moment ludique »." },
        { q: "Combien d'incitations faut-il traiter ?", r: "Une ou plusieurs, au choix du candidat." },
        { q: "Quelle est la durée de l'épreuve ?", r: "4 heures." },
        { q: "Que peut-on faire des supports fournis ?", r: "Les découper, les coller et les assembler, puis les replier au format A4 dans la copie." },
        { q: "Que n'a-t-on pas le droit de faire avec la documentation ?", r: "La découper ou la coller." },
        { q: "Quels sont les quatre critères d'évaluation ?", r: "Cohérence de la démarche, foisonnement de l'exploration, mobilisation des connaissances, efficience des modes de représentation." },
        { q: "Que veut dire foisonnement ?", r: "Des hypothèses nombreuses et diversifiées, un cheminement créatif mobile." },
        { q: "Qu'est-ce que le bon sens technologique ?", r: "Des propositions réalisables, qui tiennent compte des matériaux, de la fabrication et de l'usage." },
        { q: "Le dessin ou le texte domine-t-il ?", r: "Le dessin domine ; les annotations le complètent sans le répéter." },
        { q: "Attend-on un projet fini ?", r: "Non : une exploration créative, avec des pistes variées." },
        { q: "Qu'est-ce qu'une démarche intuitive ?", r: "Une recherche qui part d'une image ou d'une idée, plutôt que d'une analyse raisonnée." },
      ],
      quiz: [
        { q: "L'épreuve de conception et création dure :", choix: ["2 heures", "3 heures", "4 heures", "1 heure"], bonne: 2, expl: "C'est une épreuve pratique de 4 heures.", niv: 1 },
        { q: "Les incitations créatives proposées dans un sujet sont au nombre de :", choix: ["trois à cinq", "une seule", "dix au moins", "vingt"], bonne: 0, expl: "Chacune oriente la question centrale selon un angle.", niv: 1 },
        { q: "La documentation du sujet peut-elle être découpée et collée ?", choix: ["Oui, si on la rend à la fin", "Oui, c'est conseillé", "Seulement les images en noir et blanc", "Non, c'est interdit"], bonne: 3, expl: "Seuls les supports de travail fournis se découpent.", niv: 1 },
        { q: "Le critère « foisonnement » évalue surtout :", choix: ["une ressemblance du travail avec les documents du sujet", "la beauté d'un dessin final", "la longueur du texte", "le nombre et la variété des hypothèses"], bonne: 3, expl: "On attend un cheminement mobile et divers.", niv: 1 },
        { q: "Un élève dessine une seule chaise, très détaillée, en quatre heures. Quel critère risque-t-il de perdre ?", choix: ["Le foisonnement de l'exploration", "La lisibilité du dessin et des annotations", "Le respect du format A4", "La propreté de la copie"], bonne: 0, expl: "Il manque des hypothèses divergentes.", niv: 2 },
        { q: "Pour la question « Comment exploiter le temps de l'attente dans les espaces publics ? », on peut répondre :", choix: ["avec une affiche", "dans un ou plusieurs domaines du design", "par une dissertation rédigée sur copie", "par une maquette en carton"], bonne: 1, expl: "Espace, objet, graphisme, service : tout domaine est possible.", niv: 2 },
        { q: "Que signifie « questionner les enjeux » de la demande ?", choix: ["Recopier la question en grand", "Comprendre ce qui est en jeu et l'interroger avec recul", "Choisir le matériau le moins cher pour chaque piste", "Lister les documents"], bonne: 1, expl: "C'est le premier critère : la cohérence de la démarche.", niv: 2 },
        { q: "Un candidat reproduit fidèlement le projet du document 2. Ce choix est :", choix: ["pénalisé, car on attend une exploration personnelle", "valorisé, car il montre une grande attention au sujet", "neutre pour la note", "obligatoire pour le premier critère"], bonne: 0, expl: "Il faut revisiter, pas copier.", niv: 2 },
        { q: "Lequel n'est **pas** un critère de l'épreuve ?", choix: ["La cohérence de la démarche", "La qualité d'une dissertation de trois pages", "L'efficience des modes de représentation", "La mobilisation des connaissances techniques"], bonne: 1, expl: "C'est une épreuve graphique, pas une rédaction.", niv: 2 },
        { q: "Pourquoi les incitations sont-elles plusieurs ?", choix: ["Elles indiquent la bonne réponse", "Il faut les traiter en détail une par une, dans l'ordre", "Elles servent de plan de dissertation en trois parties", "Elles ouvrent des angles variés sur la même question"], bonne: 3, expl: "Le candidat choisit et peut combiner.", niv: 3 },
        { q: "Pourquoi l'épreuve accepte-t-elle une démarche intuitive ?", choix: ["Parce que le dessin ne compte pas", "Parce que l'analyse est interdite", "Une image ou une idée peut lancer la recherche, si elle reste cohérente", "Les critères ne disent rien de la cohérence des pistes proposées"], bonne: 2, expl: "L'essentiel est d'être foisonnant et cohérent.", niv: 3 },
        { q: "Que montre une page couverte de texte et de deux petits croquis ?", choix: ["Une parfaite efficience graphique", "La meilleure méthode pour cette épreuve graphique", "Un déséquilibre : le dessin doit porter la pensée", "Le respect strict des modalités"], bonne: 2, expl: "Les annotations complètent le dessin, pas l'inverse.", niv: 3 },
      ],
    },
    {
      chapitre: 'std2a-ccd-2',
      fiche: `## Analyser la demande : besoin, usagers, contexte et contraintes

### Partir de la question
- La question centrale pose un **problème** et un **enjeu** : « Comment favoriser le bien-être au lycée ? » parle de santé, de repos, de relations, d'espace scolaire.
- On la **décortique** : qui ? où ? quand ? quoi ? comment ? pourquoi ? (la méthode des questions **QQOQCP**).

### Le besoin
- Le **besoin** est un manque, une difficulté ou un désir de l'usager : se reposer, s'isoler, se rencontrer, se repérer, être à l'abri.
- Il peut être **exprimé** (ce que les usagers disent) ou **latent** (ce qu'on observe sans qu'ils le formulent).
- Les ressources du sujet servent à repérer ces besoins : un article qui décrit des nageurs pressés à la pause de midi montre un besoin de rapidité et de transitions fluides.

### Les usagers
- **Usager principal** et **usagers secondaires** : au lycée, les élèves, mais aussi les professeurs, les agents, les parents.
- Les décrire : âge, capacités, habitudes, émotions, moments de la journée.
- **Persona** : un personnage inventé mais réaliste qui représente un type d'usager (« Odette, 82 ans, vit seule, marche avec une canne, aime jardiner ») ; il aide à concevoir pour quelqu'un de précis.
- Penser aux usagers **vulnérables** : personnes âgées, en situation de handicap, enfants.

### Le contexte
- **Lieu** : intérieur ou extérieur, public ou privé, ville ou campagne, climat.
- **Temps** : moment de la journée, saison, durée de l'usage (quelques minutes d'attente, un repas, une année).
- **Contexte social et culturel** : pratiques, habitudes, règles, traditions (le repas est encadré par des normes sociales).
- **Contexte environnemental et économique** : ressources, budget, durabilité.

### Les contraintes
- **Fonctionnelles** : ce que le projet doit permettre (s'asseoir, ranger, informer).
- **Techniques** : matériaux, fabrication, entretien, résistance (au vandalisme, à l'eau, au soleil).
- **Réglementaires** : sécurité, hygiène, accessibilité.
- **Ergonomiques** : adaptation au corps et aux gestes.
- **Environnementales** : sobriété, réemploi, fin de vie.
- Une contrainte n'est pas un frein : elle peut **stimuler** la créativité.

### Les enjeux
- Ce qui est en jeu au-delà de l'objet : **sociaux** (lien entre les générations, inclusion, convivialité), **environnementaux** (déchets, énergie, nature en ville), **économiques**, **culturels** (transmission, patrimoine), **sanitaires** (bien-être, activité physique).
- Repérer les enjeux donne une **direction** à la recherche et permet de justifier ses choix.

### Formaliser l'analyse
- Au début de la planche, une **zone d'analyse** courte : mots clés, schéma des usagers et des lieux, carte mentale, besoins repérés, enjeux retenus. Elle montre au correcteur d'où viennent les propositions.

### À retenir pour le bac
- Décortiquer la question : qui, où, quand, quoi, comment, pourquoi.
- Besoin exprimé ou latent ; usagers principaux et secondaires ; persona.
- Contexte : lieu, temps, pratiques sociales, environnement.
- Contraintes fonctionnelles, techniques, réglementaires, ergonomiques, environnementales.
- Enjeux sociaux, environnementaux, culturels, sanitaires : ils guident les choix.`,
      cartes: [
        { q: "Que signifie QQOQCP ?", r: "Qui, quoi, où, quand, comment, pourquoi : une méthode pour décortiquer une question." },
        { q: "Qu'est-ce qu'un besoin ?", r: "Un manque, une difficulté ou un désir de l'usager." },
        { q: "Besoin exprimé ou latent ?", r: "Exprimé : dit par les usagers ; latent : observé sans être formulé." },
        { q: "Qu'est-ce qu'un usager secondaire ?", r: "Une personne concernée par le projet sans en être l'usager principal, comme un agent d'entretien." },
        { q: "Qu'est-ce qu'un persona ?", r: "Un personnage inventé mais réaliste qui représente un type d'usager." },
        { q: "Quels éléments du contexte analyser ?", r: "Le lieu, le temps, le contexte social et culturel, l'environnement et l'économie." },
        { q: "Citez trois types de contraintes.", r: "Fonctionnelles, techniques, réglementaires, ergonomiques, environnementales." },
        { q: "Une contrainte est-elle un frein ?", r: "Non : elle peut stimuler la créativité." },
        { q: "Qu'est-ce qu'un enjeu ?", r: "Ce qui est en jeu au-delà de l'objet : social, environnemental, économique, culturel, sanitaire." },
        { q: "À quoi sert de repérer les enjeux ?", r: "À donner une direction à la recherche et à justifier ses choix." },
        { q: "Que mettre dans la zone d'analyse de la planche ?", r: "Mots clés, schéma des usagers et des lieux, carte mentale, besoins et enjeux retenus." },
        { q: "À quoi servent les ressources du sujet ?", r: "À repérer les besoins, les usagers, le contexte et les enjeux." },
      ],
      quiz: [
        { q: "La méthode qui pose les questions qui, quoi, où, quand, comment, pourquoi s'appelle :", choix: ["QQOQCP", "SCAMPER", "la carte mentale", "le moodboard"], bonne: 0, expl: "Elle aide à décortiquer la question centrale.", niv: 1 },
        { q: "Un personnage inventé qui représente un type d'usager est :", choix: ["un pictogramme", "un prototype", "un gabarit", "un persona"], bonne: 3, expl: "Il permet de concevoir pour quelqu'un de précis.", niv: 1 },
        { q: "L'obligation de laisser passer un fauteuil roulant est une contrainte :", choix: ["typographique", "décorative", "réglementaire", "économique"], bonne: 2, expl: "Les règles d'accessibilité s'imposent.", niv: 1 },
        { q: "Un besoin que les usagers ne formulent pas mais que l'on observe est :", choix: ["réglementaire", "exprimé", "latent", "secondaire"], bonne: 2, expl: "L'observation révèle ce qui n'est pas dit.", niv: 1 },
        { q: "Dans un projet pour un lycée, les agents d'entretien sont des usagers :", choix: ["principaux", "secondaires", "absents", "commanditaires"], bonne: 1, expl: "Ils sont concernés par le nettoyage et la maintenance.", niv: 2 },
        { q: "Un banc pour arrêt de bus doit résister à la pluie et aux dégradations. C'est une contrainte :", choix: ["culturelle", "esthétique", "technique", "typographique"], bonne: 2, expl: "Matériau et fabrication doivent tenir dehors.", niv: 2 },
        { q: "Pour « Accompagner le vieillissement », l'enjeu de créer des liens entre générations est :", choix: ["réglementaire", "typographique", "technique", "social"], bonne: 3, expl: "Il concerne l'isolement et le vivre-ensemble.", niv: 2 },
        { q: "Un article décrit des nageurs qui ont peu de temps à la pause de midi. Il révèle un besoin :", choix: ["de décoration murale", "de rapidité et de transitions fluides", "de bassins plus profonds et plus longs", "d'éclairage nocturne"], bonne: 1, expl: "Les ressources servent à repérer les besoins.", niv: 2 },
        { q: "Lequel n'est **pas** un élément du contexte ?", choix: ["La couleur du stylo du candidat", "Le moment de la journée où l'on utilise le lieu", "Le lieu", "Les pratiques sociales"], bonne: 0, expl: "Le contexte concerne la situation étudiée.", niv: 2 },
        { q: "Pourquoi placer une courte zone d'analyse au début de la planche ?", choix: ["Elle n'est pas lue par le correcteur", "Elle remplace les dessins", "Elle doit faire deux pages rédigées", "Elle montre d'où viennent les propositions"], bonne: 3, expl: "Elle prouve la cohérence de la démarche.", niv: 3 },
        { q: "Pourquoi une contrainte peut-elle stimuler la créativité ?", choix: ["Elle oblige à chercher des solutions inattendues", "Elle supprime toute recherche", "Elle impose la solution", "Elle rend le dessin inutile et la recherche vaine"], bonne: 0, expl: "Faire avec peu de place ou peu de matière pousse à inventer.", niv: 3 },
        { q: "Pourquoi construire un persona pour un sujet sur les personnes âgées ?", choix: ["Pour éviter de dessiner des personnes", "Pour concevoir pour des capacités et des habitudes précises", "Pour remplacer l'analyse du contexte et des ressources", "Pour choisir un matériau"], bonne: 1, expl: "Il rend l'usager concret.", niv: 3 },
      ],
    },
    {
      chapitre: 'std2a-ccd-3',
      fiche: `## Les méthodes de créativité

### Pourquoi des méthodes ?
- Elles évitent la **page blanche** et la première idée banale. Elles obligent à **sortir des évidences** et à produire beaucoup d'idées avant de juger.
- Règle de base : pendant la recherche, on **ne censure pas** ; on trie après.

### Les méthodes pour lancer les idées
- **Remue-méninges** (brainstorming) : noter très vite toutes les idées, même étranges, sur un temps court.
- **Carte mentale** : le mot central (le titre ou la question) au milieu, puis des branches de mots associés (usagers, lieux, gestes, émotions, matières, époques).
- **Associations de mots** et **champ lexical** : partir des sens du titre (« pique-nique » : picorer, partager, nappe, panier, herbe, plein air).
- **Moodboard** (planche d'ambiance) : rassembler couleurs, matières, images pour fixer une atmosphère.

### Les méthodes pour transformer
- **SCAMPER** : sept questions pour transformer un objet ou une situation existante :
  - **Substituer** (changer un matériau, un usager, un lieu) ;
  - **Combiner** (réunir deux objets ou deux fonctions) ;
  - **Adapter** (reprendre une solution d'un autre domaine) ;
  - **Modifier** (agrandir, réduire, changer la forme ou la couleur) ;
  - **Proposer d'autres usages** ;
  - **Éliminer** (supprimer une partie) ;
  - **Renverser** ou réorganiser (inverser l'ordre, le sens, le rôle).
- **Analogie** : s'inspirer d'un autre domaine ou du vivant (une coque de graine pour un abri, une ruche pour un rangement) ; c'est aussi la base du **biomimétisme**.
- **Changement d'échelle** : imaginer la même idée à l'échelle de la main, du corps, de la pièce, de la rue.
- **Détournement** : utiliser un objet ou un code dans un autre contexte.
- **Inversion** : prendre le contre-pied (rendre l'attente active au lieu de passive, faire de la règle un jeu).
- **Contrainte volontaire** : s'imposer un seul matériau, une seule couleur, un seul geste.

### Les méthodes pour se mettre à la place de l'usager
- **Scénario d'usage** : raconter en quelques images comment l'usager rencontre, utilise et quitte le dispositif (avant, pendant, après).
- **Parcours usager** : les étapes et les moments clés d'une expérience (arriver à la piscine, se changer, nager, repartir).
- **Jeu de rôle** mental : « je suis un enfant de six ans », « je suis en fauteuil roulant ».

### Se nourrir de références
- Revisiter des **références** (objets, lieux, pratiques d'autres cultures et d'autres époques) pour ne pas refaire l'existant, mais s'en inspirer (sujet « Économiser au quotidien » : « reconvoquer des usages d'un autre temps, d'une autre culture »).

### À retenir pour le bac
- Produire beaucoup sans censurer, trier ensuite.
- Remue-méninges, carte mentale, champ lexical, moodboard.
- SCAMPER : substituer, combiner, adapter, modifier, proposer d'autres usages, éliminer, renverser.
- Analogie, changement d'échelle, détournement, inversion, contrainte.
- Scénario d'usage et parcours usager.`,
      cartes: [
        { q: "Quelle est la règle de base de la recherche d'idées ?", r: "Ne pas censurer : produire beaucoup, puis trier." },
        { q: "Qu'est-ce qu'une carte mentale ?", r: "Un mot central d'où partent des branches de mots associés." },
        { q: "Qu'est-ce qu'un moodboard ?", r: "Une planche d'ambiance qui rassemble couleurs, matières et images." },
        { q: "Que signifie SCAMPER ?", r: "Substituer, combiner, adapter, modifier, proposer d'autres usages, éliminer, renverser." },
        { q: "Qu'est-ce que combiner, dans SCAMPER ?", r: "Réunir deux objets ou deux fonctions en un seul." },
        { q: "Qu'est-ce qu'une analogie en conception ?", r: "S'inspirer d'un autre domaine ou du vivant pour trouver une solution." },
        { q: "Qu'est-ce que le changement d'échelle ?", r: "Imaginer la même idée à l'échelle de la main, du corps, de la pièce ou de la rue." },
        { q: "Qu'est-ce que l'inversion ?", r: "Prendre le contre-pied d'une situation, comme rendre l'attente active." },
        { q: "Qu'est-ce qu'une contrainte volontaire ?", r: "S'imposer une limite (un seul matériau, une seule couleur) pour stimuler les idées." },
        { q: "Qu'est-ce qu'un scénario d'usage ?", r: "Le récit en images de la rencontre, de l'usage et du départ de l'usager." },
        { q: "Qu'est-ce qu'un parcours usager ?", r: "Les étapes et les moments clés d'une expérience." },
        { q: "Pourquoi revisiter des références ?", r: "Pour s'en inspirer sans refaire ce qui existe déjà." },
      ],
      quiz: [
        { q: "Noter très vite toutes les idées sans les juger, c'est :", choix: ["une vue éclatée", "un remue-méninges", "un cahier des charges", "une coupe"], bonne: 1, expl: "On trie seulement après.", niv: 1 },
        { q: "Dans SCAMPER, la lettre E correspond à :", choix: ["éclairer", "étirer", "exposer", "éliminer"], bonne: 3, expl: "On supprime une partie pour voir ce qui change.", niv: 1 },
        { q: "Une planche de couleurs, de matières et d'images qui fixe une atmosphère est :", choix: ["un persona", "un plan de masse", "un moodboard", "un story-board"], bonne: 2, expl: "On parle aussi de planche d'ambiance.", niv: 1 },
        { q: "Raconter en quelques images comment l'usager utilise le dispositif, c'est :", choix: ["une carte mentale", "une axonométrie de l'abri", "un scénario d'usage", "un nuancier"], bonne: 2, expl: "Avant, pendant, après.", niv: 1 },
        { q: "Réunir un banc et un abri à vélos en un seul mobilier, c'est :", choix: ["éliminer", "combiner", "renverser", "substituer"], bonne: 1, expl: "Deux fonctions dans un même objet.", niv: 2 },
        { q: "S'inspirer de la forme d'une pomme de pin qui s'ouvre à la chaleur pour un store, c'est :", choix: ["un changement de couleur", "un détournement de code", "une contrainte réglementaire", "une analogie avec le vivant"], bonne: 3, expl: "C'est le principe du biomimétisme.", niv: 2 },
        { q: "Transformer une salle d'attente en lieu de jeu plutôt qu'en lieu d'ennui relève de :", choix: ["la coupe", "l'élimination", "la substitution de matériau", "l'inversion"], bonne: 3, expl: "On prend le contre-pied de l'attente passive.", niv: 2 },
        { q: "Imaginer le même motif sur une tasse, sur un mur puis sur une place publique, c'est :", choix: ["un changement d'échelle", "un persona", "un plan de masse", "un éclaté"], bonne: 0, expl: "La même idée à plusieurs tailles.", niv: 2 },
        { q: "Laquelle n'est **pas** une méthode de créativité ?", choix: ["La cotation d'un plan à l'échelle", "L'analogie", "La carte mentale des mots associés", "Le détournement"], bonne: 0, expl: "La cotation sert à préciser une solution, pas à lancer des idées.", niv: 2 },
        { q: "Pourquoi éviter de juger les idées pendant la recherche ?", choix: ["Parce que le tri est interdit", "Toutes les idées se valent de toute façon", "Une idée étrange peut en faire naître une bonne", "Parce que le correcteur aime les idées irréalisables"], bonne: 2, expl: "La censure tue le foisonnement.", niv: 3 },
        { q: "« Reconvoquer des usages d'un autre temps » invite surtout à :", choix: ["copier à l'identique un objet ancien d'un musée", "revisiter des pratiques anciennes pour le présent", "refuser toute référence", "dessiner en perspective"], bonne: 1, expl: "Une pratique ancienne peut inspirer une solution sobre.", niv: 3 },
        { q: "Pourquoi s'imposer un seul matériau peut-il aider à créer ?", choix: ["La limite oblige à explorer toutes ses possibilités", "Le règlement interdit d'en utiliser plusieurs", "Cela évite de dessiner", "Cela supprime la question"], bonne: 0, expl: "La contrainte stimule la recherche.", niv: 3 },
      ],
    },
    {
      chapitre: 'std2a-ccd-4',
      fiche: `## Diverger puis converger : des hypothèses variées et cohérentes

### Deux mouvements
- **Diverger** : ouvrir, multiplier les pistes, explorer des directions différentes.
- **Converger** : comparer, trier, choisir, approfondir les pistes les plus pertinentes.
- Dans l'épreuve, la part de **divergence** est importante (critère du foisonnement), mais la **convergence** montre la cohérence et la maturité.

### Hypothèse, piste, variante
- Une **hypothèse** (ou piste) est une **réponse possible** à la question, qui repose sur une **intention** claire : « faire de l'attente un moment d'activité physique ».
- Une **variante** est une version différente de la même hypothèse : autre forme, autre matériau, autre échelle, autre usager.
- Des hypothèses **divergentes** sont vraiment différentes entre elles : un mobilier, un service, un dispositif graphique, un vêtement, et non trois chaises presque pareilles.

### Comment diversifier
- Changer d'**incitation** : une hypothèse par incitation, ou des croisements entre incitations.
- Changer de **domaine** : espace, objet, graphisme, mode et textile, service, métier d'art.
- Changer d'**échelle** : de la main au territoire.
- Changer d'**usager** : enfant, adulte, personne âgée, groupe, famille.
- Changer de **moment** : avant, pendant, après l'usage ; jour, nuit ; été, hiver.
- Changer de **registre** : ludique, poétique, pratique, discret, spectaculaire.
- Changer de **principe technique** : pliable, gonflable, modulable, empilable, mobile, fixe.

### Comment converger
- Évaluer chaque piste au regard des **enjeux** et des **contraintes** : répond-elle à la question ? est-elle réalisable ? qui en profite ?
- Comparer avec un **tableau** ou une grille simple (avantages, limites).
- Choisir **une ou deux** pistes à approfondir : détails, mise en situation, matériaux, fonctionnement.
- Montrer le **cheminement** : flèches entre les pistes, idées abandonnées barrées légèrement, idées reprises et développées.

### Cohérence de la démarche
- Chaque hypothèse doit pouvoir se **relier** à un besoin, un enjeu ou une incitation : l'annoter.
- Les propositions doivent rester **dans le design et les métiers d'art** et faire preuve de **bon sens technologique** (on doit pouvoir imaginer comment c'est fabriqué et utilisé).
- On peut être **audacieux**, mais pas absurde : une idée poétique doit garder un usage.

### Exemple de cheminement
- Question : « Comment susciter les interactions sociales autour du repas ? »
- Divergence : une table aux plateaux qui tournent et obligent à se servir les uns les autres ; des couverts qui s'emboîtent par deux ; un service à partager posé au centre ; une nappe brodée de jeux ; une signalétique de cantine qui invite à s'asseoir avec d'autres ; un atelier où les convives cuisinent ensemble.
- Convergence : la table tournante est approfondie (mécanisme, matériaux, nombre de places, mise en situation à la cantine).

### À retenir pour le bac
- Diverger (multiplier) puis converger (choisir et approfondir).
- Hypothèse = réponse possible avec une intention ; variante = autre version.
- Diversifier : incitation, domaine, échelle, usager, moment, registre, principe technique.
- Converger avec les enjeux et les contraintes ; montrer le cheminement.`,
      cartes: [
        { q: "Que veut dire diverger ?", r: "Ouvrir et multiplier les pistes dans des directions différentes." },
        { q: "Que veut dire converger ?", r: "Comparer, trier, choisir et approfondir les meilleures pistes." },
        { q: "Qu'est-ce qu'une hypothèse ?", r: "Une réponse possible à la question, fondée sur une intention claire." },
        { q: "Qu'est-ce qu'une variante ?", r: "Une version différente de la même hypothèse : autre forme, matériau, échelle ou usager." },
        { q: "Qu'est-ce que des hypothèses divergentes ?", r: "Des pistes vraiment différentes entre elles, par exemple un mobilier, un service et un dispositif graphique." },
        { q: "Citez quatre façons de diversifier ses pistes.", r: "Changer d'incitation, de domaine, d'échelle, d'usager, de moment, de registre ou de principe technique." },
        { q: "Citez des principes techniques à explorer.", r: "Pliable, gonflable, modulable, empilable, mobile, fixe." },
        { q: "Comment choisir les pistes à approfondir ?", r: "En les évaluant au regard des enjeux et des contraintes, par exemple avec un tableau avantages et limites." },
        { q: "Comment montrer le cheminement ?", r: "Par des flèches entre les pistes, des idées abandonnées barrées et des idées reprises et développées." },
        { q: "Que faut-il annoter pour chaque hypothèse ?", r: "Le besoin, l'enjeu ou l'incitation auquel elle répond." },
        { q: "Une idée poétique est-elle acceptée ?", r: "Oui, si elle garde un usage et reste réalisable." },
        { q: "Combien de pistes approfondir ?", r: "Une ou deux, après une large divergence." },
      ],
      quiz: [
        { q: "Multiplier les pistes dans des directions différentes, c'est :", choix: ["converger", "diverger", "coter", "conclure"], bonne: 1, expl: "On ouvre avant de choisir.", niv: 1 },
        { q: "Une autre version d'une même idée, avec un autre matériau, est :", choix: ["une variante", "une incitation", "une contrainte", "une ressource"], bonne: 0, expl: "L'intention reste la même.", niv: 1 },
        { q: "Choisir les pistes à approfondir, c'est :", choix: ["converger", "diverger", "détourner", "colorier"], bonne: 0, expl: "On trie au regard des enjeux.", niv: 1 },
        { q: "Une hypothèse repose d'abord sur :", choix: ["un matériau précieux", "une intention claire", "une couleur vive", "une perspective parfaite"], bonne: 1, expl: "Elle dit ce que l'on cherche à provoquer.", niv: 1 },
        { q: "Trois bancs presque identiques, seulement de couleurs différentes, montrent :", choix: ["une parfaite convergence", "un foisonnement exemplaire", "peu de divergence", "un changement de domaine"], bonne: 2, expl: "Ce sont des variantes de surface, pas des pistes différentes.", niv: 2 },
        { q: "Passer d'un mobilier d'attente à une application qui propose des jeux, c'est changer :", choix: ["de format de feuille", "de couleur", "de domaine", "de crayon"], bonne: 2, expl: "On passe de l'objet au service ou à l'interface.", niv: 2 },
        { q: "Penser le même dispositif pour la nuit et pour l'hiver, c'est changer :", choix: ["d'incitation", "d'usager", "de technique graphique", "de moment d'usage"], bonne: 3, expl: "Le temps transforme les besoins.", niv: 2 },
        { q: "Un tableau « avantages et limites » sert surtout à :", choix: ["écrire une dissertation sur le sujet", "décorer la planche", "remplacer les croquis", "comparer les pistes avant de choisir"], bonne: 3, expl: "C'est un outil de convergence.", niv: 2 },
        { q: "Laquelle n'est **pas** une manière de diversifier ses hypothèses ?", choix: ["Redessiner la même idée plus soigneusement", "Changer d'usager", "Changer d'échelle", "Passer du pliable au gonflable"], bonne: 0, expl: "Soigner un dessin n'ouvre pas de nouvelle piste.", niv: 2 },
        { q: "Pourquoi laisser visibles les idées abandonnées ?", choix: ["Elles comptent comme des idées finies", "Elles montrent le cheminement de la réflexion", "Pour remplir la planche", "Le correcteur exige de garder chaque idée"], bonne: 1, expl: "La démarche se lit dans le parcours.", niv: 3 },
        { q: "Une piste très audacieuse mais sans usage possible est jugée :", choix: ["obligatoire pour le foisonnement", "idéale pour le premier critère", "peu cohérente avec la demande", "neutre"], bonne: 2, expl: "L'audace doit rester utile et réalisable.", niv: 3 },
        { q: "Pourquoi relier chaque hypothèse à une incitation ou un enjeu ?", choix: ["Pour copier les documents", "Pour éviter de dessiner", "Pour respecter le format A4 imposé par les modalités", "Pour prouver la cohérence de la démarche"], bonne: 3, expl: "Le premier critère juge ce lien.", niv: 3 },
      ],
    },
    {
      chapitre: 'std2a-ccd-5',
      fiche: `## Dessiner pour concevoir : croquis et modes de représentation

### Les quatre dessins du programme
- **Dessin d'observation** : saisir le réel (un objet, un lieu, un geste).
- **Dessin analytique** : comprendre une structure, un fonctionnement.
- **Dessin d'intention** : formaliser et communiquer une idée de projet.
- **Dessin d'expression** : traduire une ambiance, une émotion, une pensée par la forme.

### Esquisse, croquis, ébauche, schéma
- **Esquisse** : première idée, rapide, au trait léger.
- **Croquis** : dessin rapide mais plus lisible, qui montre la forme et l'usage.
- **Ébauche** : début de mise en forme d'une solution.
- **Schéma** : représentation simplifiée d'un principe (fonctionnement, circulation, assemblage), avec des flèches et des symboles.

### Les perspectives
- **Perspective cavalière** : la face avant est vue de face, en vraie grandeur ; les fuyantes partent en biais, en général à 45°, avec une réduction de la profondeur. Simple et rapide pour un objet.
- **Perspective axonométrique isométrique** : les trois axes forment des angles de 120° ; pas de point de fuite ; les dimensions se reportent sans réduction. Utile pour un objet ou un petit espace.
- **Perspective conique** (ou linéaire) : la plus proche de la vision ; les lignes fuyantes se rejoignent en un ou deux **points de fuite** placés sur la **ligne d'horizon**, qui est à la hauteur des yeux de l'observateur. À un point de fuite : vue de face d'une pièce, d'une rue ; à deux points de fuite : vue d'angle.

### Les vues techniques
- **Vue de face**, **de côté**, **de dessus** : les **géométraux** (projections orthogonales), sans déformation, pour donner les vraies proportions.
- **Plan** : vue de dessus d'un espace, comme une coupe horizontale à environ un mètre du sol.
- **Coupe** : vue de l'intérieur d'un objet ou d'un bâtiment, tranché par un plan vertical.
- **Élévation** : vue d'une façade ou d'un mur.
- **Vue éclatée** : les pièces d'un objet légèrement écartées pour montrer l'assemblage.
- **Détail** : un zoom sur un point précis (une articulation, une fixation, une matière).
- **Échelle** : rapport entre le dessin et la réalité (au 1/10, 1 cm représente 10 cm ; au 1/50, 1 cm représente 50 cm).

### Montrer l'usage
- **Mise en situation** : le projet dans son lieu, avec des usagers.
- **Silhouette humaine** : elle donne l'échelle (une personne debout mesure environ 1,70 m ; les yeux sont vers 1,60 m).
- **Story-board** (ou scénario en vignettes) : la suite des moments de l'usage.
- **Gestuelle** : des mains, des flèches de mouvement pour montrer comment on ouvre, plie, s'assoit.

### Les outils graphiques
- Crayon graphite, feutres, crayons de couleur, stylos ; **collage** et découpe des supports fournis ; petits volumes en papier si le sujet le permet.
- **Valeurs** (ombre et lumière) pour donner le volume ; **couleur** pour hiérarchiser ou montrer les matériaux, avec un code constant.

### À retenir pour le bac
- Dessins d'observation, analytique, d'intention, d'expression.
- Esquisse, croquis, ébauche, schéma.
- Cavalière (45°), isométrique (120°), conique (points de fuite sur l'horizon).
- Géométraux, plan, coupe, élévation, vue éclatée, détail, échelle.
- Mise en situation, silhouette, story-board, gestuelle.`,
      cartes: [
        { q: "Quels sont les quatre dessins du programme ?", r: "Le dessin d'observation, analytique, d'intention et d'expression." },
        { q: "Esquisse ou croquis ?", r: "L'esquisse est la première idée au trait léger ; le croquis est plus lisible et montre forme et usage." },
        { q: "Qu'est-ce qu'un schéma ?", r: "Une représentation simplifiée d'un principe, avec flèches et symboles." },
        { q: "Comment se construit une perspective cavalière ?", r: "Face avant en vraie grandeur, fuyantes en biais à 45° avec une profondeur réduite." },
        { q: "Comment se construit une perspective isométrique ?", r: "Trois axes à 120°, sans point de fuite, sans réduction des dimensions." },
        { q: "Où se placent les points de fuite en perspective conique ?", r: "Sur la ligne d'horizon, à la hauteur des yeux de l'observateur." },
        { q: "Perspective à un ou deux points de fuite ?", r: "À un point : vue de face d'une pièce ou d'une rue ; à deux points : vue d'angle." },
        { q: "Qu'est-ce qu'un géométral ?", r: "Une vue de face, de côté ou de dessus sans déformation." },
        { q: "Qu'est-ce qu'un plan ?", r: "Une vue de dessus d'un espace, comme une coupe horizontale à environ un mètre du sol." },
        { q: "Qu'est-ce qu'une coupe ?", r: "La vue de l'intérieur d'un objet ou d'un bâtiment tranché par un plan vertical." },
        { q: "Qu'est-ce qu'une vue éclatée ?", r: "Les pièces d'un objet écartées pour montrer l'assemblage." },
        { q: "Que signifie une échelle au 1/50 ?", r: "1 cm sur le dessin représente 50 cm en réalité." },
        { q: "À quoi sert une silhouette humaine dans un croquis ?", r: "À donner l'échelle et à montrer l'usage." },
        { q: "Qu'est-ce qu'un story-board ?", r: "La suite des moments de l'usage, en vignettes." },
      ],
      quiz: [
        { q: "En perspective isométrique, les trois axes forment entre eux des angles de :", choix: ["45°", "120°", "90°", "60°"], bonne: 1, expl: "Les dimensions se reportent sans réduction.", niv: 1 },
        { q: "En perspective conique, la ligne d'horizon est placée :", choix: ["en bas de la feuille", "à la hauteur des yeux de l'observateur", "au niveau du plafond de la pièce", "au milieu de l'objet"], bonne: 1, expl: "Les points de fuite s'y trouvent.", niv: 1 },
        { q: "Une vue où les pièces d'un objet sont écartées pour montrer l'assemblage est :", choix: ["une vue éclatée", "une élévation", "une coupe", "une perspective cavalière"], bonne: 0, expl: "Elle explique le montage.", niv: 1 },
        { q: "À l'échelle 1/50, un mur de 5 m mesure sur le dessin :", choix: ["5 cm", "50 cm", "10 cm", "2,5 cm"], bonne: 2, expl: "500 cm divisés par 50 donnent 10 cm.", niv: 1 },
        { q: "Pour montrer l'intérieur d'un abri et l'épaisseur de ses parois, on dessine :", choix: ["une vue de dessus seule", "une coupe", "un moodboard", "une silhouette"], bonne: 1, expl: "On tranche l'abri par un plan vertical.", niv: 2 },
        { q: "Pour montrer une rue vue de face, avec ses lignes qui se rejoignent au loin, on choisit :", choix: ["une perspective conique à un point de fuite", "une vue éclatée", "une axonométrie isométrique de la rue", "un géométral de côté"], bonne: 0, expl: "Toutes les fuyantes convergent vers un seul point.", niv: 2 },
        { q: "Pourquoi dessiner une silhouette à côté d'un mobilier ?", choix: ["Pour remplacer les annotations écrites du projet", "Pour remplir la feuille", "Pour imiter une photo", "Pour donner l'échelle et montrer l'usage"], bonne: 3, expl: "On comprend tout de suite la taille.", niv: 2 },
        { q: "Une suite de vignettes qui montre l'usager arriver, s'installer puis repartir est :", choix: ["une coupe", "un plan coté au 1/50", "une élévation", "un story-board"], bonne: 3, expl: "Le scénario d'usage en images.", niv: 2 },
        { q: "Lequel n'est **pas** un mode de représentation technique ?", choix: ["Le plan", "La coupe", "Le remue-méninges", "L'élévation d'une façade"], bonne: 2, expl: "C'est une méthode de créativité.", niv: 2 },
        { q: "Pourquoi un croquis rapide vaut-il mieux qu'un dessin fini au début de la recherche ?", choix: ["Il permet de tester beaucoup d'idées vite", "Il est plus beau", "Il est exigé seul", "Il remplace la réflexion sur les enjeux"], bonne: 0, expl: "La vitesse sert le foisonnement.", niv: 3 },
        { q: "Pourquoi utiliser la perspective cavalière pour un petit objet ?", choix: ["Elle n'a pas de fuyantes", "Elle imite fidèlement la vision humaine, comme une photo", "Elle est rapide et garde la face avant en vraie grandeur", "Elle est obligatoire à l'examen"], bonne: 2, expl: "Simple à construire, lisible.", niv: 3 },
        { q: "Quand un détail agrandi est-il utile ?", choix: ["Pour décorer les marges de la planche", "Pour chaque idée, même abandonnée", "À la place de la vue d'ensemble de la piste approfondie", "Quand une fixation ou une articulation n'est pas lisible à petite échelle"], bonne: 3, expl: "Il montre le bon sens technologique.", niv: 3 },
      ],
    },
    {
      chapitre: 'std2a-ccd-6',
      fiche: `## Annoter et composer ses planches

### À quoi servent les annotations
- Elles **complètent** le dessin : elles disent ce que le dessin ne montre pas bien (matériau, intention, usage, fonctionnement, usager visé, lien avec l'enjeu).
- Elles ne doivent **pas répéter** le dessin (« ceci est un banc » sous un banc).
- Elles sont **courtes**, **lisibles** et **précises** : quelques mots ou une phrase, avec le vocabulaire technique juste.

### Les types d'annotations
- **Titre de la piste** : un nom court qui résume l'intention (« Le banc qui s'étire », « La nappe à histoires »).
- **Intention** : ce que la piste cherche à provoquer (« inciter à partager le plat », « isoler du bruit sans enfermer »).
- **Usage et fonctionnement** : comment on s'en sert, ce qui bouge, s'ouvre, se plie.
- **Matériaux et procédés** : bois massif, tôle pliée, textile enduit, céramique émaillée, impression 3D… avec la raison du choix.
- **Dimensions** et **échelle** : quelques cotes utiles (hauteur d'assise, largeur de passage).
- **Lien avec la demande** : l'incitation ou l'enjeu auquel la piste répond.
- **Références** : un mot sur ce qui a inspiré la piste (un objet, une pratique, une autre culture).
- **Limites** et **questions** : ce qu'il faudrait vérifier ou améliorer.

### La forme des annotations
- Écriture lisible, en capitales ou en script soigné ; taille adaptée.
- **Flèches** et **traits de rappel** qui relient le mot à la partie concernée.
- **Code couleur** constant (par exemple une couleur pour les matériaux, une pour l'usage).
- **Pictogrammes** simples (soleil, pluie, nuit, personne âgée, enfant) pour aller vite.

### Composer la planche
- **Organisation** : une zone d'analyse (mots clés, enjeux), puis les pistes, puis les approfondissements. La lecture doit être facile, souvent de gauche à droite et de haut en bas.
- **Hiérarchie** : la piste approfondie est plus grande, plus détaillée, éventuellement en couleur ; les recherches rapides sont plus petites.
- **Respiration** : des espaces blancs entre les zones ; éviter l'accumulation illisible.
- **Liens** entre les pistes : flèches, numéros, mots de passage (« je reprends l'idée de… »).
- **Supports** : on peut découper, coller, assembler les supports fournis (rabats, pliages, superpositions, calques), mais le tout doit se replier au format A4.

### Gérer ses quatre heures
- Environ **30 minutes** : lire le sujet, analyser, faire la carte mentale, repérer les enjeux.
- Environ **2 heures** : diverger, produire de nombreuses pistes en croquis rapides.
- Environ **1 heure** : converger, approfondir une ou deux pistes, mises en situation, détails.
- Environ **30 minutes** : annoter, hiérarchiser, relier, vérifier la cohérence et la lisibilité.
- Ces durées sont un repère, à adapter ; l'essentiel est de **ne pas passer trois heures sur une seule idée**.

### À retenir pour le bac
- Annotations courtes, précises, qui complètent sans répéter.
- Titre, intention, usage, matériaux, dimensions, lien avec la demande, références, limites.
- Flèches, code couleur, pictogrammes.
- Planche organisée et hiérarchisée, avec des espaces et des liens.
- Temps : analyse, divergence, convergence, mise au propre.`,
      cartes: [
        { q: "À quoi sert une annotation ?", r: "À compléter le dessin : matériau, intention, usage, fonctionnement, lien avec l'enjeu." },
        { q: "Qu'est-ce qu'une mauvaise annotation ?", r: "Une annotation qui répète le dessin, comme « ceci est un banc »." },
        { q: "Qu'est-ce qu'une annotation d'intention ?", r: "Elle dit ce que la piste cherche à provoquer chez l'usager." },
        { q: "Pourquoi donner un titre à chaque piste ?", r: "Pour résumer l'intention et faciliter la lecture." },
        { q: "Comment relier une annotation au dessin ?", r: "Par une flèche ou un trait de rappel." },
        { q: "À quoi sert un code couleur ?", r: "À distinguer de façon constante des informations, comme les matériaux et l'usage." },
        { q: "Comment organiser une planche ?", r: "Zone d'analyse, puis pistes, puis approfondissements, avec un sens de lecture clair." },
        { q: "Qu'est-ce que la hiérarchie d'une planche ?", r: "La piste approfondie est plus grande et plus détaillée que les recherches rapides." },
        { q: "Pourquoi laisser des espaces blancs ?", r: "Pour que la planche respire et reste lisible." },
        { q: "Que peut-on faire avec les supports fournis ?", r: "Les découper, coller, plier, superposer, à condition de tout replier au format A4." },
        { q: "Comment répartir les quatre heures ?", r: "Environ 30 min d'analyse, 2 h de divergence, 1 h d'approfondissement, 30 min de mise au propre." },
        { q: "Quelle est l'erreur de gestion du temps la plus grave ?", r: "Passer trois heures sur une seule idée." },
      ],
      quiz: [
        { q: "Une annotation efficace :", choix: ["complète le dessin sans le répéter", "décrit ce que le dessin montre déjà", "remplace le dessin par un paragraphe", "reste au brouillon"], bonne: 0, expl: "Elle dit ce que le dessin ne montre pas.", niv: 1 },
        { q: "Pour relier un mot à la partie d'un objet, on utilise :", choix: ["un nouveau dessin", "une page séparée", "un tableau de dates et de chiffres", "un trait de rappel ou une flèche"], bonne: 3, expl: "Le lien doit être immédiat.", niv: 1 },
        { q: "Le travail rendu doit être replié au format :", choix: ["A4", "A5", "A3", "A2"], bonne: 0, expl: "Il est glissé dans la copie d'examen.", niv: 1 },
        { q: "« Inciter à partager le plat » est une annotation :", choix: ["d'un titre de document", "de dimension", "de matériau", "d'intention"], bonne: 3, expl: "Elle dit ce que la piste cherche à provoquer.", niv: 1 },
        { q: "Sur une planche, la piste approfondie doit être :", choix: ["cachée sous un rabat", "aussi petite que les esquisses de recherche", "plus grande et plus détaillée que les autres", "écrite et non dessinée"], bonne: 2, expl: "La hiérarchie guide la lecture.", niv: 2 },
        { q: "« Contreplaqué de bouleau, léger et résistant à l'usage intensif » est une annotation de :", choix: ["référence culturelle", "titre de piste", "matériau justifié", "scénario d'usage"], bonne: 2, expl: "Le choix est expliqué.", niv: 2 },
        { q: "Un élève utilise du bleu pour l'usage sur une piste et pour les matériaux sur une autre. Le problème est :", choix: ["un code couleur incohérent", "un excès de pistes", "une mauvaise perspective", "une annotation trop courte"], bonne: 0, expl: "Le code doit rester constant.", niv: 2 },
        { q: "Combien de temps environ consacrer à la divergence sur quatre heures ?", choix: ["10 minutes", "4 heures", "3 heures et demie", "2 heures"], bonne: 3, expl: "C'est le cœur du foisonnement.", niv: 2 },
        { q: "Laquelle n'est **pas** une information utile dans les annotations ?", choix: ["L'intention de la piste", "Le nom du stylo utilisé", "Le matériau choisi", "Le lien avec l'incitation"], bonne: 1, expl: "Les annotations servent le projet.", niv: 2 },
        { q: "Pourquoi noter les limites d'une piste ?", choix: ["Cela fait perdre des points au critère de cohérence", "Cela montre du recul et du bon sens", "Cela remplace les dessins", "Cela est interdit"], bonne: 1, expl: "Le correcteur valorise le regard critique.", niv: 3 },
        { q: "Pourquoi éviter de remplir chaque centimètre de la planche ?", choix: ["Les espaces blancs sont notés à part par le jury", "Le papier coûte cher", "Une planche trop chargée devient illisible", "Il faut rendre une feuille vide"], bonne: 2, expl: "La respiration aide la lecture.", niv: 3 },
        { q: "Un rabat collé qui se soulève pour montrer l'intérieur d'un abri est :", choix: ["interdit par les modalités de l'épreuve", "une manière astucieuse d'utiliser les supports", "un dessin d'observation", "une annotation écrite"], bonne: 1, expl: "On peut découper et assembler les supports fournis.", niv: 3 },
      ],
    },
    {
      chapitre: 'std2a-ccd-7',
      fiche: `## Concevoir un espace

### Ce que l'on conçoit
- Un **aménagement intérieur** (hall de lycée, salle d'attente, vestiaire de piscine, cantine), un **espace extérieur** (place, cour, parc, aire de pique-nique), un **mobilier urbain** (banc, abri, fontaine, kiosque), une **scénographie** (exposition, événement), un **dispositif éphémère** (installation temporaire, pop-up).

### Les paramètres de conception
- **Échelle humaine** : l'espace se pense par rapport au corps (debout, assis, allongé, en mouvement).
- **Circulations** : les chemins des usagers, les flux (entrées, sorties, croisements), les zones de passage et les zones d'arrêt. On les montre sur un **plan** avec des flèches.
- **Seuils et transitions** : les passages d'un espace à un autre (dehors et dedans, bruyant et calme, sec et mouillé), qui peuvent être marqués par un changement de sol, de lumière, de hauteur.
- **Zonage** : répartir les activités (calme et animé, individuel et collectif).
- **Lumière** : naturelle (orientation, ombre, ouvertures) et artificielle (éclairage d'ambiance, de repère).
- **Acoustique** : réduire le bruit (matériaux absorbants, textiles, végétaux, cloisons) ; c'est un enjeu de bien-être dans les lieux collectifs.
- **Climat** : abri contre la pluie, le vent, le soleil ; confort thermique ; végétation.
- **Matériaux et entretien** : résistance, sécurité, hygiène (milieu humide d'une piscine), facilité de nettoyage.
- **Intimité** : paravents, alcôves, cabines, rideaux, niches qui permettent de s'isoler sans se couper du groupe.
- **Accessibilité** : cheminements assez larges (environ 1,40 m), portes d'environ 0,90 m, aire de rotation d'un fauteuil roulant d'environ 1,50 m de diamètre, repères visuels et tactiles, hauteur d'accès adaptée.
- **Repères** et **signalétique** intégrés : couleurs, sols, pictogrammes.

### Quelques repères de dimensions
- Hauteur d'assise : environ 45 cm ; hauteur de table : environ 72 à 75 cm ; hauteur d'un plan de travail debout : environ 90 cm.
- Hauteur des yeux d'un adulte debout : environ 1,60 m ; d'une personne assise : environ 1,20 m.

### Les modes de représentation adaptés
- **Plan** (vue de dessus) pour le zonage et les circulations ; **coupe** pour les hauteurs et le rapport au corps ; **perspective conique** pour l'ambiance ; **axonométrie** pour un petit aménagement ; **mise en situation** avec des silhouettes.

### Pistes typiques dans les sujets
- « J'peux pas, j'ai piscine » : faciliter les **transitions** entre vestiaires et bassin, créer de l'**intimité** dans les vestiaires, rendre les règles engageantes par la signalétique, permettre des usages variés (nager vite, jouer, se détendre).
- « L'attente » : mobilier qui protège du climat, invite au repos, au jeu, à l'activité physique, à l'échange.
- « Bien-être en milieu scolaire » : coins de repos informels, espaces pour s'isoler du bruit, lieux qui favorisent l'entraide.

### À retenir pour le bac
- Échelle humaine, circulations, seuils, zonage, lumière, acoustique, climat, intimité.
- Accessibilité : passages d'environ 1,40 m, aire de rotation d'environ 1,50 m.
- Assise environ 45 cm, table environ 75 cm.
- Plan, coupe, perspective conique, mise en situation.`,
      cartes: [
        { q: "Que peut-on concevoir en design d'espace ?", r: "Un aménagement intérieur, un espace extérieur, un mobilier urbain, une scénographie, un dispositif éphémère." },
        { q: "Qu'est-ce qu'une circulation ?", r: "Le chemin des usagers dans un espace : entrées, sorties, croisements." },
        { q: "Qu'est-ce qu'un seuil ?", r: "Un passage d'un espace à un autre, marqué par un changement de sol, de lumière ou de hauteur." },
        { q: "Qu'est-ce que le zonage ?", r: "La répartition des activités dans un espace : calme et animé, individuel et collectif." },
        { q: "Comment réduire le bruit dans un lieu collectif ?", r: "Avec des matériaux absorbants, des textiles, des végétaux, des cloisons." },
        { q: "Comment créer de l'intimité sans isoler ?", r: "Avec des paravents, des alcôves, des niches, des rideaux." },
        { q: "Quelle largeur prévoir pour un cheminement accessible ?", r: "Environ 1,40 m." },
        { q: "Quel diamètre pour la rotation d'un fauteuil roulant ?", r: "Environ 1,50 m." },
        { q: "Quelle est la hauteur d'une assise ?", r: "Environ 45 cm." },
        { q: "Quelle est la hauteur d'une table ?", r: "Environ 72 à 75 cm." },
        { q: "Quel mode de représentation pour les circulations ?", r: "Le plan, vue de dessus, avec des flèches." },
        { q: "Quel mode de représentation pour les hauteurs ?", r: "La coupe." },
        { q: "Pourquoi penser l'entretien d'un espace ?", r: "Pour l'hygiène, la sécurité et la durée, surtout en milieu humide ou public." },
      ],
      quiz: [
        { q: "La hauteur courante d'une assise est d'environ :", choix: ["55 cm", "95 cm", "75 cm", "45 cm"], bonne: 3, expl: "La table est vers 72 à 75 cm.", niv: 1 },
        { q: "Pour montrer les flux de visiteurs dans un hall, on dessine surtout :", choix: ["un plan avec des flèches", "une vue éclatée", "un moodboard", "un logotype"], bonne: 0, expl: "La vue de dessus montre les circulations.", niv: 1 },
        { q: "L'aire de rotation d'un fauteuil roulant mesure environ :", choix: ["0,60 m de diamètre", "3 m de diamètre", "1,50 m de diamètre", "5 m de diamètre"], bonne: 2, expl: "C'est un repère d'accessibilité.", niv: 1 },
        { q: "Le passage entre le vestiaire et le bassin d'une piscine est :", choix: ["un logotype", "un seuil", "une élévation", "un story-board"], bonne: 1, expl: "C'est une transition entre deux espaces.", niv: 1 },
        { q: "Des panneaux de feutre au plafond d'une cantine servent surtout à :", choix: ["guider les flux", "éclairer la salle", "chauffer l'air", "réduire le bruit"], bonne: 3, expl: "Le textile absorbe le son.", niv: 2 },
        { q: "Dans un vestiaire de piscine, le choix des matériaux doit d'abord tenir compte :", choix: ["de la typographie", "de la mode de l'année", "du goût personnel du candidat pour les couleurs", "de l'humidité et de l'hygiène"], bonne: 3, expl: "Milieu humide, nettoyage fréquent.", niv: 2 },
        { q: "Pour montrer qu'un banc protège de la pluie et à quelle hauteur est le toit, on choisit :", choix: ["un plan de dessus sans cote ni silhouette", "une coupe avec une silhouette", "un moodboard", "une carte mentale"], bonne: 1, expl: "La coupe montre les hauteurs.", niv: 2 },
        { q: "Séparer un coin calme d'un coin animé dans un foyer de lycée, c'est :", choix: ["du zonage", "de la cotation", "du détournement", "de l'extrusion"], bonne: 0, expl: "On répartit les activités.", niv: 2 },
        { q: "Lequel n'est **pas** un paramètre de conception d'un espace ?", choix: ["Les circulations", "La graisse d'une police", "L'acoustique du lieu", "La lumière"], bonne: 1, expl: "La graisse relève de la typographie.", niv: 2 },
        { q: "Pourquoi marquer un seuil par un changement de sol ?", choix: ["Pour rendre l'espace inaccessible aux visiteurs", "Pour décorer sans raison", "Pour signaler sans mot le passage à un autre espace", "Pour réduire la lumière"], bonne: 2, expl: "Le sol devient un repère.", niv: 3 },
        { q: "Pourquoi une alcôve répond-elle bien à « améliorer le sentiment d'intimité » ?", choix: ["Elle abrite sans couper totalement du groupe", "Elle enferme l'usager à clé dans une cabine", "Elle supprime la lumière", "Elle agrandit l'espace"], bonne: 0, expl: "On s'isole tout en restant présent.", niv: 3 },
        { q: "Pourquoi dessiner une perspective conique d'un espace aménagé ?", choix: ["Elle remplace le plan", "Elle donne les vraies mesures de chaque élément", "Elle montre l'ambiance telle qu'un usager la voit", "Elle est la seule autorisée"], bonne: 2, expl: "Elle est proche de la vision.", niv: 3 },
      ],
    },
    {
      chapitre: 'std2a-ccd-8',
      fiche: `## Concevoir un objet, un vêtement, un service

### Concevoir un objet
- **Fonction** et **usage** : ce que l'objet permet de faire, dans quelle situation, pour qui.
- **Gestes** : saisir, verser, porter, plier, ouvrir, ranger ; l'objet doit accompagner le geste (prise en main, poids, équilibre).
- **Ergonomie** : dimensions adaptées au corps et aux capacités (force, vue, mobilité) ; pour une personne âgée, une poignée plus épaisse, un contraste de couleur, un poids réduit.
- **Principe technique** : pliable, empilable, emboîtable, modulable, réglable, transformable, roulant.
- **Matériaux et procédés** : choisis pour l'usage (résistance, poids, contact alimentaire, toucher) et pour la fabrication (moulage, pliage, assemblage, tournage).
- **Assemblage** : vis, emboîtement, charnière, aimant, couture, clipsage ; un assemblage démontable facilite la réparation.
- **Cycle de vie** : réparation, réemploi, recyclage, choix de matériaux locaux ou recyclés.
- **Représentations utiles** : croquis en perspective, vue éclatée, détail du mécanisme, mise en situation avec les mains.

### Concevoir un vêtement ou un accessoire
- **Corps** : morphologie, mouvement, confort, température ; le vêtement est une deuxième peau ou un abri portatif.
- **Usages** : protéger (pluie, froid, soleil), transporter (poches, sacs), signaler (couleurs, réflecteurs), se transformer (vêtement qui devient couverture, cape qui devient abri).
- **Matières textiles** : tissée, tricotée, enduite (imperméable), technique (respirante, isolante), naturelle ou recyclée.
- **Construction** : patron, coupe, coutures, fermetures (boutons, zip, pressions, lacets), modularité (pièces amovibles).
- **Métiers d'art associés** : broderie, tissage, plissage, maroquinerie, chapellerie.
- **Représentations utiles** : silhouette de mode (figurine), dessin à plat du vêtement (face et dos), détail de la fermeture, échantillons de matière.

### Concevoir un service
- Un **service** est une organisation qui répond à un besoin : prêt de matériel, accueil, aide, activité collective, application.
- On conçoit le **parcours usager** (avant, pendant, après) et les **points de contact** : lieux, objets, supports graphiques, interfaces, personnes.
- Exemples tirés des sujets : un service de prêt de paniers de pique-nique zéro déchet ; des ateliers intergénérationnels ; un système d'entraide entre élèves.
- **Représentations utiles** : story-board, schéma de fonctionnement (acteurs, flèches, étapes), maquettes d'écrans, mise en situation.

### Concevoir avec les métiers d'art
- Partir d'un **savoir-faire** (vannerie, céramique, ébénisterie, verre, broderie) pour répondre au besoin, ou l'associer à un objet de série.
- Le geste artisanal apporte **qualité**, **singularité**, **durabilité** et une dimension de **transmission**.
- Penser la faisabilité : on ne tresse pas un banc public en osier sans protection contre la pluie.

### À retenir pour le bac
- Objet : fonction, geste, ergonomie, principe technique, matériaux, assemblage, cycle de vie.
- Vêtement : corps, mouvement, protection, matière, construction, modularité.
- Service : parcours usager et points de contact.
- Métiers d'art : savoir-faire au service de la réponse, avec bon sens technique.`,
      cartes: [
        { q: "Quels gestes penser pour un objet ?", r: "Saisir, verser, porter, plier, ouvrir, ranger." },
        { q: "Comment adapter un objet à une personne âgée ?", r: "Poignée plus épaisse, contraste de couleur, poids réduit, gestes simples." },
        { q: "Citez des principes techniques d'objet.", r: "Pliable, empilable, emboîtable, modulable, réglable, transformable, roulant." },
        { q: "Pourquoi un assemblage démontable ?", r: "Pour faciliter la réparation, le transport et le recyclage." },
        { q: "Quelle représentation pour un mécanisme ?", r: "Une vue éclatée ou un détail agrandi." },
        { q: "Quels usages peut avoir un vêtement ?", r: "Protéger, transporter, signaler, se transformer." },
        { q: "Qu'est-ce qu'un textile enduit ?", r: "Un tissu recouvert d'une couche qui le rend imperméable." },
        { q: "Qu'est-ce qu'un dessin à plat en mode ?", r: "Le vêtement dessiné de face et de dos, sans corps, pour montrer sa construction." },
        { q: "Qu'est-ce qu'un service ?", r: "Une organisation qui répond à un besoin : prêt, accueil, aide, activité, application." },
        { q: "Qu'est-ce qu'un point de contact ?", r: "Un lieu, objet, support, interface ou personne par lequel l'usager rencontre le service." },
        { q: "Comment représenter un service ?", r: "Par un story-board, un schéma de fonctionnement, des écrans, une mise en situation." },
        { q: "Qu'apporte un métier d'art à un projet ?", r: "Qualité, singularité, durabilité et transmission d'un savoir-faire." },
      ],
      quiz: [
        { q: "Un tabouret qui se range en s'empilant sur d'autres est :", choix: ["enduit", "gonflable", "empilable", "monobloc fixe"], bonne: 2, expl: "C'est un principe technique de rangement.", niv: 1 },
        { q: "Le dessin d'un vêtement de face et de dos, sans corps, est :", choix: ["un dessin à plat", "une coupe d'architecte", "un plan de masse", "un moodboard"], bonne: 0, expl: "Il montre la construction du vêtement.", niv: 1 },
        { q: "Un tissu rendu imperméable par une couche ajoutée est :", choix: ["tricoté", "enduit", "brodé", "plissé"], bonne: 1, expl: "On parle de textile enduit.", niv: 1 },
        { q: "Le parcours usager d'un service se représente bien par :", choix: ["la cotation", "une perspective isométrique d'un objet", "une élévation de façade", "un story-board"], bonne: 3, expl: "On montre les étapes avant, pendant, après.", niv: 1 },
        { q: "Pour une personne âgée qui tremble, une tasse gagne à avoir :", choix: ["un poids élevé", "un pied très fin", "une paroi lisse et glissante en verre fin", "une large poignée et une base stable"], bonne: 3, expl: "L'ergonomie suit les capacités de l'usager.", niv: 2 },
        { q: "Une cape de pluie qui se déplie en tapis de sol pour pique-niquer illustre un vêtement :", choix: ["enduit", "standardisé", "transformable", "décoratif"], bonne: 2, expl: "Il change d'usage selon la situation.", niv: 2 },
        { q: "Un prêt de paniers réutilisables avec une borne de retour relève du design :", choix: ["de service", "textile", "typographique", "d'ornement"], bonne: 0, expl: "On conçoit une organisation et ses points de contact.", niv: 2 },
        { q: "Pour expliquer comment s'articule le pied pliant d'une table, on dessine :", choix: ["un moodboard", "un détail du mécanisme", "une silhouette de mode", "un logotype"], bonne: 1, expl: "Le détail montre le bon sens technique.", niv: 2 },
        { q: "Lequel n'est **pas** un point de contact d'un service ?", choix: ["Une borne d'accueil", "Une application", "La graisse d'un caractère", "Un agent qui accueille le public"], bonne: 2, expl: "C'est un réglage typographique.", niv: 2 },
        { q: "Pourquoi un banc public en osier tressé pose-t-il un problème de bon sens technique ?", choix: ["L'osier non protégé se dégrade vite dehors", "L'osier est un matériau interdit dans le mobilier public", "Il est trop lourd à porter", "Il ne peut pas être tressé"], bonne: 0, expl: "Il faut adapter le savoir-faire au contexte.", niv: 3 },
        { q: "Pourquoi un assemblage par vis plutôt que par colle peut-il servir l'environnement ?", choix: ["Il est plus rapide à jeter", "La colle coûte plus cher que les vis", "Les vis sont invisibles", "L'objet se démonte, se répare et se trie"], bonne: 3, expl: "La fin de vie est facilitée.", niv: 3 },
        { q: "Pourquoi associer un métier d'art à un objet de série ?", choix: ["Pour le produire plus vite et en plus grand nombre", "Pour lui donner singularité et durabilité", "Pour supprimer la conception", "Pour le rendre jetable"], bonne: 1, expl: "Le geste artisanal ajoute de la valeur.", niv: 3 },
      ],
    },
    {
      chapitre: 'std2a-ccd-9',
      fiche: `## Concevoir en communication visuelle

### Ce que l'on conçoit
- **Signalétique** : panneaux, marquages au sol, pictogrammes pour orienter, informer, rappeler des règles.
- **Identité visuelle** : logotype, couleurs, typographie et règles pour un lieu, un événement, une association.
- **Affiche**, **flyer**, **campagne** : informer, sensibiliser, inciter à agir.
- **Édition** : livret, carnet, menu, mode d'emploi, jeu de cartes.
- **Packaging** (emballage) : protéger, transporter, informer, donner envie, avec une attention au zéro-déchet.
- **Interface** : écrans d'une application, d'une borne interactive.
- **Dispositif graphique dans l'espace** : fresque, supergraphisme (grand motif peint sur un mur ou un sol), parcours au sol.

### Les paramètres de conception
- **Message** : ce que l'on veut dire, en une idée simple.
- **Destinataire** : à qui l'on parle (enfants, adolescents, personnes âgées, touristes), et dans quelle situation (en marchant, en attendant, de loin).
- **Lisibilité** : taille des caractères selon la distance, contraste entre texte et fond, choix d'une police claire.
- **Hiérarchie** : ce qui se lit en premier (titre, image), puis le reste.
- **Image** : photo, illustration, pictogramme, motif ; registre (humoristique, poétique, sérieux).
- **Couleur** : code de repérage (une couleur par zone), contraste pour les personnes malvoyantes, cohérence avec l'identité.
- **Support et format** : papier, mur, sol, textile, écran ; petit ou très grand format ; durable ou éphémère.
- **Système** : une identité ou une signalétique fonctionne comme un ensemble de règles qui se déclinent sur plusieurs supports.

### Rendre une règle engageante
- Sujet 2026 « J'peux pas, j'ai piscine ! » : « rendre engageantes les règles collectives ». Pistes : pictogrammes humoristiques, personnages récurrents, marquages au sol ludiques, jeux de mots, messages positifs plutôt que des interdictions.
- La règle se comprend mieux si elle est **visible au bon endroit**, au **bon moment** et formulée de manière **positive**.

### Le graphisme participatif
- Les usagers dessinent ou complètent des éléments (affiches à colorier, cartes à compléter, mur d'expression). Cela crée de l'**appropriation** et du **lien**.

### Les représentations utiles
- **Planche de recherche** de logotypes et de pictogrammes en petit format, puis une version agrandie.
- **Mise en situation** : l'affiche sur un mur, le marquage au sol vu par un usager, l'écran dans la main.
- **Déclinaison** : la même identité sur plusieurs supports (panneau, gobelet, badge, écran).

### À retenir pour le bac
- Signalétique, identité, affiche, édition, packaging, interface, supergraphisme.
- Message, destinataire, lisibilité, hiérarchie, image, couleur, support, système.
- Règles engageantes : bon endroit, bon moment, formulation positive, humour.
- Graphisme participatif ; mise en situation et déclinaison.`,
      cartes: [
        { q: "Qu'est-ce que la signalétique ?", r: "L'ensemble des panneaux, marquages et pictogrammes qui orientent et informent dans un lieu." },
        { q: "Qu'est-ce qu'un supergraphisme ?", r: "Un grand motif peint sur un mur ou un sol, dans l'espace." },
        { q: "Quels sont les rôles d'un packaging ?", r: "Protéger, transporter, informer et donner envie." },
        { q: "De quoi dépend la lisibilité d'un panneau ?", r: "De la taille des caractères selon la distance, du contraste et du choix de la police." },
        { q: "Qu'est-ce que la hiérarchie d'un message ?", r: "L'ordre dans lequel les éléments se lisent : titre et image d'abord." },
        { q: "À quoi sert un code couleur dans une signalétique ?", r: "À repérer des zones, une couleur par zone." },
        { q: "Pourquoi penser au contraste ?", r: "Pour que les personnes malvoyantes puissent lire." },
        { q: "Qu'est-ce qu'un système graphique ?", r: "Un ensemble de règles qui se déclinent sur plusieurs supports." },
        { q: "Comment rendre une règle engageante ?", r: "La placer au bon endroit et au bon moment, la formuler positivement, avec humour ou jeu." },
        { q: "Qu'est-ce que le graphisme participatif ?", r: "Un graphisme que les usagers dessinent ou complètent eux-mêmes." },
        { q: "Qu'est-ce qu'une déclinaison ?", r: "L'application d'une même identité sur plusieurs supports." },
        { q: "Pourquoi mettre une affiche en situation ?", r: "Pour montrer comment elle est vue et lue dans son lieu." },
      ],
      quiz: [
        { q: "Les panneaux et marquages qui orientent dans un lieu forment :", choix: ["la signalétique", "le packaging des produits", "la coupe", "le moodboard"], bonne: 0, expl: "Ils informent et guident.", niv: 1 },
        { q: "Un grand motif peint sur le sol d'une cour de lycée est :", choix: ["une vue éclatée", "un logotype", "un supergraphisme", "un dessin à plat"], bonne: 2, expl: "C'est un dispositif graphique dans l'espace.", niv: 1 },
        { q: "Appliquer une même identité sur un panneau, un badge et un écran, c'est :", choix: ["l'éliminer de certains supports", "la décliner", "la couper", "l'empiler"], bonne: 1, expl: "L'identité fonctionne comme un système.", niv: 1 },
        { q: "Un emballage protège, transporte, informe et :", choix: ["donne envie", "remplace le produit", "sert de plan", "mesure le produit"], bonne: 0, expl: "C'est aussi un support de communication.", niv: 1 },
        { q: "Un panneau lu de loin par des nageurs sans lunettes doit surtout avoir :", choix: ["une police très décorée", "beaucoup de texte en petits caractères serrés", "des couleurs pâles", "de grands caractères et un fort contraste"], bonne: 3, expl: "La lisibilité dépend de la distance.", niv: 2 },
        { q: "« Ici, on se douche avant de plonger » plutôt que « Interdit de plonger sans douche » est une formulation :", choix: ["ambiguë", "réglementaire stricte", "positive", "typographique"], bonne: 2, expl: "Le message engage au lieu d'interdire.", niv: 2 },
        { q: "Une couleur différente pour chaque zone d'une piscine sert à :", choix: ["décorer sans fonction", "se repérer facilement", "cacher les panneaux", "réduire le bruit"], bonne: 1, expl: "C'est un code de repérage.", niv: 2 },
        { q: "Des affiches que les usagers complètent en y dessinant relèvent du graphisme :", choix: ["historique et patrimonial", "industriel", "technique", "participatif"], bonne: 3, expl: "Les usagers s'approprient le support.", niv: 2 },
        { q: "Lequel n'est **pas** un paramètre de conception graphique ?", choix: ["La lisibilité", "L'aire de rotation d'un fauteuil roulant", "La hiérarchie", "Le destinataire du message"], bonne: 1, expl: "C'est un paramètre d'accessibilité des espaces.", niv: 2 },
        { q: "Pourquoi une règle placée au bon endroit est-elle mieux respectée ?", choix: ["On la cache à l'usager", "Elle est plus petite", "Elle se passe d'image et de couleur", "L'usager la voit au moment où il doit agir"], bonne: 3, expl: "Le contexte de lecture compte.", niv: 3 },
        { q: "Pourquoi un personnage récurrent peut-il rendre une signalétique engageante ?", choix: ["Il crée un repère familier et un ton amusant", "Il supprime les messages", "Il rend la lecture impossible", "Il remplace les pictogrammes de sécurité obligatoires"], bonne: 0, expl: "L'humour facilite l'adhésion.", niv: 3 },
        { q: "Pourquoi dessiner un logo d'abord en petit, plusieurs fois ?", choix: ["Pour économiser l'encre", "Les grands formats sont interdits par le règlement de l'épreuve", "Pour explorer des pistes avant d'en agrandir une", "Pour éviter la couleur"], bonne: 2, expl: "On diverge, puis on converge.", niv: 3 },
      ],
    },
    {
      chapitre: 'std2a-ccd-10',
      fiche: `## Les terrains contemporains des sujets

### Les thèmes tombés
- 2023 : « Économiser au quotidien ? » (réemploi, détournement, usages sobres, usages d'autrefois ou d'ailleurs) ; « Retour de la nature ? » (éléments naturels au quotidien, nature en ville, concilier nature et objet fabriqué).
- 2024 : « Bien-être en milieu scolaire » (se reposer, s'isoler, s'entraider, dialoguer, interclasse) ; « Accompagner le vieillissement » (gestes du quotidien, activités dehors, liens entre générations).
- 2025 : « À table ! » (interactions sociales, transmission, détournement des règles du repas, participation, coopération) ; « L'attente » (confort climatique, jeu, échange, repos, activité physique).
- 2026 : « J'peux pas, j'ai piscine ! » (diversité des usages, intimité, règles collectives, transitions) ; « Le temps d'un pique-nique » (s'arrêter, toutes saisons, partage, dégustation, zéro déchet).
- Points communs : des **situations du quotidien**, des **usagers** précis, des **enjeux sociaux** (lien, inclusion, bien-être) et **environnementaux** (sobriété, nature, déchets).

### Transformer un enjeu en pistes
- **Lien social** : mobiliers à partager (tables longues, assises face à face), objets qui demandent la coopération (plat qui ne se porte qu'à deux), jeux collectifs, rituels.
- **Intergénérationnel** : activités communes jeunes et âgés (jardin partagé, atelier de cuisine), objets compréhensibles par tous, transmission de savoir-faire.
- **Inclusion** : accessibilité, lisibilité, gestes simples, absence de stigmatisation (un objet adapté qui reste beau et désirable).
- **Bien-être** : calme, lumière, végétation, confort, possibilité de choisir entre seul et ensemble.
- **Sobriété et zéro déchet** : réemploi, consigne, matériaux locaux ou de récupération, objets multifonctions, low-tech, réparabilité.
- **Nature** : végétaliser, accueillir la biodiversité (nichoirs, hôtels à insectes), utiliser l'eau de pluie, matériaux biosourcés, s'inspirer du vivant.
- **Activité et santé** : mobilier qui invite à bouger, parcours ludiques, jeux de plein air.
- **Saisons et climat** : abris, ombre, chaleur, protection contre la pluie, usages d'hiver et d'été.

### Mobiliser ses connaissances sans copier
- Les **références** (projets, pratiques, objets anciens, autres cultures) servent de **tremplin** : on les cite en annotation, on en reprend un principe, on le transforme.
- Exemples de principes à revisiter : la table de banquet et la commensalité, le panier de pique-nique, le paravent japonais, les bains publics comme lieu social, la cour d'école végétalisée, la consigne du verre.

### Les ressources du sujet
- Les textes donnent des **besoins** et des **enjeux** ; les images montrent des **réponses existantes** à analyser et à dépasser.
- Une bonne copie **cite** une idée des ressources dans ses annotations (« comme les thermes romains, faire de la piscine un lieu de rencontre »).

### À retenir pour le bac
- Les sujets partent du quotidien : repas, école, vieillissement, attente, piscine, pique-nique, sobriété, nature.
- Enjeux récurrents : lien social, inclusion, bien-être, sobriété, nature, santé, climat.
- Chaque enjeu peut se traduire en pistes dans plusieurs domaines.
- Références et ressources : tremplins à revisiter, jamais à copier.`,
      cartes: [
        { q: "Citez quatre titres de sujets récents.", r: "À table !, L'attente, J'peux pas j'ai piscine !, Le temps d'un pique-nique, Bien-être en milieu scolaire, Accompagner le vieillissement." },
        { q: "Quels points communs ont les sujets ?", r: "Des situations du quotidien, des usagers précis, des enjeux sociaux et environnementaux." },
        { q: "Comment traduire l'enjeu du lien social en pistes ?", r: "Mobiliers à partager, objets qui demandent la coopération, jeux collectifs, rituels." },
        { q: "Comment traduire l'enjeu intergénérationnel ?", r: "Activités communes jeunes et âgés, objets compréhensibles par tous, transmission de savoir-faire." },
        { q: "Qu'est-ce qu'un objet inclusif réussi ?", r: "Un objet adapté qui reste beau et désirable, sans stigmatiser." },
        { q: "Comment traduire l'enjeu zéro déchet ?", r: "Réemploi, consigne, matériaux locaux ou récupérés, objets multifonctions, réparabilité." },
        { q: "Comment faire revenir la nature en ville ?", r: "Végétaliser, accueillir la biodiversité, récupérer l'eau de pluie, utiliser des matériaux biosourcés." },
        { q: "Comment le design peut-il favoriser la santé ?", r: "Avec des mobiliers qui invitent à bouger et des parcours ludiques." },
        { q: "Comment utiliser une référence sans la copier ?", r: "En reprendre un principe, le transformer, et le citer en annotation." },
        { q: "Que donnent les textes des ressources ?", r: "Des besoins et des enjeux." },
        { q: "Que montrent les images des ressources ?", r: "Des réponses existantes à analyser et à dépasser." },
        { q: "Pourquoi citer les ressources dans ses annotations ?", r: "Pour montrer que les pistes s'appuient sur la demande." },
      ],
      quiz: [
        { q: "Le sujet « À table ! » (2025) posait la question :", choix: ["Comment susciter les interactions sociales autour du repas ?", "Comment fabriquer des couverts de cantine en grande série à bas prix ?", "Comment dessiner une table en perspective ?", "Comment réduire le prix des repas ?"], bonne: 0, expl: "Les incitations parlaient de transmission, de participation, de coopération.", niv: 1 },
        { q: "Un hôtel à insectes intégré à un banc répond à l'enjeu :", choix: ["de la nature en ville", "de la typographie", "du prêt-à-porter", "de la vitesse"], bonne: 0, expl: "Il accueille la biodiversité.", niv: 1 },
        { q: "Un plat qui ne peut se porter qu'à deux personnes favorise :", choix: ["le gaspillage", "l'isolement", "la coopération", "la vitesse du service"], bonne: 2, expl: "L'objet oblige à s'entraider.", niv: 1 },
        { q: "Un système de consigne pour les boîtes de pique-nique répond à l'enjeu :", choix: ["du bruit et de l'acoustique", "de l'intimité", "de la lisibilité", "du zéro déchet"], bonne: 3, expl: "Les contenants sont réutilisés.", niv: 1 },
        { q: "Un jardin partagé entre une école et une résidence de personnes âgées vise surtout :", choix: ["les liens entre générations", "la vitesse de circulation des voitures", "la publicité", "l'isolement"], bonne: 0, expl: "C'est un enjeu intergénérationnel.", niv: 2 },
        { q: "Pour « Permettre le repas à l'extérieur en toutes saisons », une piste pertinente est :", choix: ["une nappe en papier jetable", "une table avec un abri amovible contre la pluie et le vent", "un logo pour un restaurant de plein air", "un plat en verre fragile"], bonne: 1, expl: "On répond au climat.", niv: 2 },
        { q: "Les thermes romains cités dans un document peuvent inspirer une piste parce qu'ils étaient :", choix: ["réservés à la natation de compétition des athlètes", "des lieux de rencontre et de mixité sociale", "des lieux sans usage", "des bassins privés"], bonne: 1, expl: "La référence est un tremplin.", niv: 2 },
        { q: "Une piste reprend le principe du paravent pour isoler un coin du foyer. C'est :", choix: ["une erreur de bon sens technologique", "copier un document", "un hors-sujet", "revisiter une référence"], bonne: 3, expl: "On transforme un principe connu.", niv: 2 },
        { q: "Lequel n'est **pas** un enjeu récurrent des sujets ?", choix: ["Le lien social", "La sobriété", "Le bien-être des usagers", "La hausse des prix de l'immobilier de bureau"], bonne: 3, expl: "Les sujets partent des situations du quotidien.", niv: 2 },
        { q: "Pourquoi un objet adapté aux personnes âgées doit-il rester désirable ?", choix: ["La beauté de l'objet est notée seule", "Pour coûter plus cher", "Pour ne pas stigmatiser ceux qui l'utilisent", "Pour être réservé aux musées"], bonne: 2, expl: "C'est le principe du design inclusif.", niv: 3 },
        { q: "Pourquoi les sujets partent-ils de situations du quotidien ?", choix: ["Pour éviter toute réflexion", "Pour que le candidat observe des usages réels et propose des améliorations", "Le design concerne avant tout les objets de luxe et de prestige", "Pour imposer une seule réponse"], bonne: 1, expl: "L'observation du présent nourrit l'innovation.", niv: 3 },
        { q: "Un même enjeu de bien-être peut se traduire par :", choix: ["une dissertation", "une seule réponse possible dans un domaine", "un mobilier, une signalétique et un service", "un plan sans usager"], bonne: 2, expl: "Changer de domaine diversifie les pistes.", niv: 3 },
      ],
    },
  ],
  methode: [
    { id: 'std2a-ccd-m1', mat: 'std2a-ccd', titre: 'Analyser la demande et repérer les enjeux (critère 1 : cohérence de la démarche)',
      formules: ['En vous aidant des ressources proposées et de vos propres connaissances, vous devez déployer une exploration créative personnelle à partir de la question suivante', 'Cohérence de la démarche fondée sur les enjeux repérés et questionnés de la demande'],
      vu: ['Bac 2026 : « Comment améliorer l\'expérience individuelle et collective au sein des complexes aquatiques ? » ; « Comment ré-enchanter l\'expérience du déjeuner en plein air ? »', 'Bac 2025 : « Comment susciter les interactions sociales autour du repas ? » ; « Comment exploiter le temps de l\'attente dans les espaces publics ? »', 'Bac 2024 : « Comment favoriser le bien-être au lycée ? » ; « Comment contribuer à faciliter le quotidien des personnes âgées ? »'],
      pts: 'Un des quatre critères (le barème détaillé n\'est pas publié)',
      attendu: 'Les correcteurs se demandent si les enjeux du sujet sont compris et questionnés, si le candidat interroge le problème avec bon sens et recul, et si la démarche est cohérente avec ce qui a été repéré. Concrètement : une zone d\'analyse courte et visuelle au début (mots clés, usagers, lieux, moments, besoins, enjeux), puis des pistes qui en découlent visiblement.',
      etapes: ['Lire le titre, la question et toutes les incitations.', 'Lire les ressources en soulignant besoins, usagers, lieux et chiffres.', 'Faire une carte mentale autour de la question.', 'Noter trois ou quatre enjeux et les usagers visés.', 'Choisir une ou plusieurs incitations et l\'écrire clairement sur la planche.'],
      mots: ['besoin', 'usager', 'enjeu', 'contexte', 'contrainte', 'incitation', 'persona', 'scénario'],
      pieges: ['Commencer à dessiner sans avoir lu les ressources.', 'Oublier l\'usager.', 'Une analyse de deux pages écrites.', 'Des pistes sans lien avec les enjeux repérés.'],
      cas: 'Sujet inventé : « SOUS LA PLUIE ». Question : comment rendre agréable le quotidien des jours de pluie en ville ? Une ressource décrit des parents qui attendent leurs enfants à la sortie de l\'école sous l\'averse et des collégiens qui s\'abritent tous sous le même auvent trop petit.',
      question: 'Décrivez la zone d\'analyse que vous placeriez en haut de votre première planche.',
      modele: 'Au centre, le mot PLUIE dans une carte mentale : branches « usagers » (parents, enfants, collégiens, personnes âgées, livreurs à vélo), « lieux » (sortie d\'école, arrêt de bus, marché, trottoir), « moments » (attente, trajet, arrivée mouillée), « sensations » (froid, bruit des gouttes, odeur de terre, ennui), « ressources » (eau de pluie à récupérer). Trois enjeux encadrés : s\'abriter ensemble sans se gêner, faire de la pluie un moment agréable voire ludique, valoriser l\'eau de pluie. Un petit croquis de l\'auvent trop petit de la ressource, avec des flèches qui montrent la bousculade. L\'incitation choisie est écrite en titre.',
      grille: ['Usagers et lieux repérés', 'Besoins tirés des ressources', 'Enjeux formulés', 'Incitation choisie visible', 'Analyse courte et graphique'] },
    { id: 'std2a-ccd-m2', mat: 'std2a-ccd', titre: 'Produire des hypothèses divergentes (critère 2 : foisonnement)',
      formules: ['Votre exploration s\'appuie sur une ou plusieurs incitations créatives parmi celles proposées', 'Foisonnement et qualité de l\'exploration créative'],
      vu: ['Tous les sujets depuis 2023 : trois à cinq incitations, par exemple en 2025 « Faire de l\'attente un moment ludique », « Inviter à la déconnexion et au repos », « Favoriser l\'activité physique »'],
      pts: 'Un des quatre critères',
      attendu: 'Les correcteurs se demandent si les hypothèses sont diversifiées, si le cheminement créatif est mobile et si les propositions répondent aux enjeux. On attend de nombreuses pistes vraiment différentes (domaines, échelles, usagers, principes), en croquis rapides, puis une ou deux pistes approfondies.',
      etapes: ['Pour chaque incitation retenue, chercher au moins trois pistes en croquis rapides.', 'Changer volontairement de domaine, d\'échelle et d\'usager.', 'Utiliser une méthode (SCAMPER, analogie, inversion) quand les idées s\'épuisent.', 'Donner un titre court à chaque piste.', 'Relier les pistes par des flèches qui montrent le cheminement.'],
      mots: ['hypothèse', 'piste', 'variante', 'divergence', 'convergence', 'modulable', 'transformable', 'scénario d\'usage'],
      pieges: ['Une seule idée développée pendant quatre heures.', 'Des variantes de couleur présentées comme des idées différentes.', 'Rester dans un seul domaine sans le vouloir.', 'Des idées hors sujet.'],
      cas: 'Suite du sujet inventé « Sous la pluie », incitation choisie : « Faire de la pluie un moment ludique ».',
      question: 'Décrivez six pistes divergentes pour cette incitation.',
      modele: 'Piste 1, espace : un auvent d\'arrêt de bus dont les gouttières font sonner des tubes métalliques de longueurs différentes, comme un carillon d\'eau. Piste 2, graphisme : des motifs peints au sol avec une peinture qui n\'apparaît que lorsqu\'elle est mouillée, pour un parcours de marelle sur le chemin de l\'école. Piste 3, objet : un parapluie à deux poignées, assez large pour un parent et un enfant, avec une fenêtre transparente. Piste 4, mode : une cape d\'enfant dont les plis s\'ouvrent quand on court et forment des ailes. Piste 5, service : un prêt de parapluies dans les commerces du quartier, avec un jeu de tampons à collectionner. Piste 6, métier d\'art : des vitraux de couleur sur un abri, dont les reflets dansent sur le trottoir quand il pleut. Approfondissement de la piste 1 : coupe de l\'auvent, détail des tubes, mise en situation avec des collégiens.',
      grille: ['Au moins six pistes', 'Plusieurs domaines', 'Pistes vraiment différentes', 'Titres et intentions', 'Une piste approfondie'] },
    { id: 'std2a-ccd-m3', mat: 'std2a-ccd', titre: 'Mobiliser connaissances techniques et culturelles (critère 3)',
      formules: ['Vos réponses sont inscrites dans les domaines du design et des métiers d\'art', 'Mobilisation adaptée des connaissances techniques et culturelles au service de la démarche'],
      vu: ['Tous les sujets : critère commun ; la note d\'accompagnement demande de « faire preuve de bon sens technologique » et d\'« interroger ses connaissances pour ne pas refaire ce qui existe déjà mais s\'inspirer, revisiter »'],
      pts: 'Un des quatre critères',
      attendu: 'Les hypothèses sont ancrées dans le design et les métiers d\'art et font preuve de bon sens technologique : matériaux plausibles pour le lieu, assemblage et fonctionnement imaginables, dimensions cohérentes. Les références (projets, pratiques anciennes, autres cultures) sont revisitées et signalées en annotation, sans copie.',
      etapes: ['Pour la piste approfondie, choisir et justifier un ou deux matériaux.', 'Dessiner le principe de fonctionnement ou d\'assemblage.', 'Vérifier les dimensions par rapport au corps (silhouette, cotes principales).', 'Noter la référence qui a inspiré la piste et ce qu\'on en transforme.', 'Penser la fabrication, l\'entretien et la fin de vie.'],
      mots: ['tôle pliée', 'bois massif', 'textile enduit', 'céramique émaillée', 'assemblage', 'charnière', 'démontable', 'référence'],
      pieges: ['Un matériau impossible dans le contexte (papier sous la pluie).', 'Un mécanisme inexplicable.', 'Une copie d\'un projet connu.', 'Aucune dimension ni échelle.'],
      cas: 'Suite du sujet inventé : la piste approfondie est l\'auvent-carillon d\'un arrêt de bus.',
      question: 'Quelles annotations techniques et culturelles accompagnent cette piste ?',
      modele: 'Structure en acier galvanisé (résiste à la corrosion), toiture en verre feuilleté pour garder la lumière. Gouttière en tôle pliée qui conduit l\'eau vers six tubes d\'aluminium de longueurs différentes (de 30 à 80 cm) : chaque goutte frappe une lame qui fait vibrer un tube, d\'où des notes différentes. Assise à 45 cm, en bois de mélèze, naturellement résistant à l\'humidité. Hauteur sous auvent 2,30 m. Récupération du trop-plein dans une jardinière au pied de l\'abri. Référence : les carillons à vent japonais et les fontaines musicales ; principe repris : le son naît d\'un élément naturel, ici la pluie au lieu du vent.',
      grille: ['Matériaux justifiés pour le contexte', 'Fonctionnement expliqué', 'Dimensions cohérentes', 'Référence revisitée et citée', 'Pensée de l\'entretien ou de la fin de vie'] },
    { id: 'std2a-ccd-m4', mat: 'std2a-ccd', titre: 'Choisir ses modes de représentation (critère 4 : efficience)',
      formules: ['Vous communiquez vos intentions sous forme graphique annotée', 'Efficience des modes de représentation et d\'expression'],
      vu: ['Tous les sujets : modalités communes ; la note d\'accompagnement rappelle que c\'est une épreuve graphique où les annotations écrites complètent le dessin'],
      pts: 'Un des quatre critères',
      attendu: 'Les correcteurs se demandent si le dessin est clair, si les annotations sont lisibles, explicites et utiles, et si le vocabulaire et les modes de représentation sont adaptés. On attend des représentations variées et choisies selon ce qu\'il faut montrer : croquis rapides pour chercher, perspective et mise en situation pour l\'usage, coupe, plan ou vue éclatée pour le fonctionnement.',
      etapes: ['Pour chaque information, se demander quelle représentation la montre le mieux.', 'Chercher en croquis rapides, au trait.', 'Pour la piste approfondie : une mise en situation avec silhouettes, une vue technique (coupe, plan ou éclaté) et un détail.', 'Utiliser les valeurs et la couleur pour hiérarchiser, avec un code constant.', 'Annoter avec des flèches et des mots précis.'],
      mots: ['croquis', 'esquisse', 'coupe', 'plan', 'vue éclatée', 'perspective conique', 'axonométrie', 'mise en situation', 'story-board'],
      pieges: ['Une seule vue qui ne montre pas l\'usage.', 'Des perspectives fausses qui trompent sur la forme.', 'Pas de silhouette, donc pas d\'échelle.', 'Des couleurs sans code.'],
      cas: 'Suite du sujet inventé : il faut montrer l\'auvent-carillon pour qu\'un correcteur comprenne sa taille, son fonctionnement et l\'expérience des usagers.',
      question: 'Quelles représentations choisissez-vous, et pour montrer quoi ?',
      modele: 'Une perspective conique à deux points de fuite, depuis le trottoir, avec trois collégiens et une mère avec une poussette sous l\'auvent : elle montre l\'ambiance et l\'échelle. Une coupe transversale avec une silhouette assise et une debout : elle montre la hauteur, l\'assise et le trajet de l\'eau (flèches bleues). Un détail agrandi de la gouttière et d\'un tube : il explique comment la goutte fait sonner le tube. Un story-board de trois vignettes : la pluie commence, les enfants découvrent les sons, ils attendent le bus en jouant. Code couleur : bleu pour l\'eau, orange pour les usagers, gris pour la structure.',
      grille: ['Représentations variées', 'Choix adapté à chaque information', 'Échelle visible', 'Code couleur constant', 'Lisibilité d\'ensemble'] },
    { id: 'std2a-ccd-m5', mat: 'std2a-ccd', titre: 'Organiser ses quatre heures et ses planches',
      formules: ['Les supports de travail fournis peuvent être utilisés librement (découpage, collage, etc.)', 'Vous pouvez assembler les supports entre eux, mais ils doivent être obligatoirement repliés au format A4 et glissés dans la copie double d\'examen'],
      vu: ['Tous les sujets depuis 2023 : modalités identiques'],
      pts: 'Indirect : la lisibilité et la cohérence de la démarche en dépendent',
      attendu: 'Une production lisible dans un ordre logique (analyse, pistes, approfondissement), qui montre le cheminement, et un temps réparti pour ne pas s\'enfermer dans une seule idée. Les supports peuvent être découpés, pliés ou superposés, mais le rendu se replie au format A4.',
      etapes: ['Environ 30 minutes : lecture, analyse, carte mentale, enjeux.', 'Environ 2 heures : divergence en croquis rapides.', 'Environ 1 heure : convergence et approfondissement d\'une ou deux pistes.', 'Environ 30 minutes : annotations, titres, flèches, vérification de la lisibilité.', 'Numéroter les planches et prévoir le pliage au format A4.'],
      mots: ['planche', 'hiérarchie', 'sens de lecture', 'cheminement', 'rabat', 'calque', 'pliage'],
      pieges: ['Passer trois heures sur une seule idée.', 'Garder les meilleures idées pour la fin et manquer de temps.', 'Un assemblage qui ne se replie pas au format A4.', 'Découper la documentation du sujet, ce qui est interdit.'],
      cas: 'Un candidat a fini à 11 h la lecture du sujet « Sous la pluie », commencé à 8 h, et n\'a dessiné qu\'une piste très soignée.',
      question: 'Quels conseils lui donner pour réorganiser son temps lors d\'un prochain entraînement ?',
      modele: 'Limiter la lecture et l\'analyse à trente minutes, en notant les enjeux sous forme de carte mentale plutôt que de phrases. Ensuite, se forcer à produire au moins six pistes en croquis rapides de cinq à dix minutes chacune, sans les mettre au propre. Choisir vers 10 h 30 la piste la plus riche et lui consacrer une heure (mise en situation, coupe, détail). Garder la dernière demi-heure pour les titres, les annotations, les flèches et le pliage. Ainsi, le foisonnement et la cohérence seront visibles, même si aucun dessin n\'est parfait.',
      grille: ['Temps réparti', 'Divergence suffisante', 'Approfondissement présent', 'Mise au propre finale', 'Respect des modalités'] },
  ],
  sujets: [
    { id: 'std2a-ccd-s1', matiere: 'std2a-ccd', titre: 'Sujet d\'entraînement inventé : « Sous la pluie »', duree: 240,
      enonce: `## Sujet d'entraînement (entièrement inventé)

Les ressources, les personnes et les projets de ce sujet sont fictifs ; les documents sont décrits en mots. Durée : 4 heures. Épreuve pratique notée sur 20 points.

**SOUS LA PLUIE**

**Demande**
En vous aidant des ressources proposées et de vos propres connaissances, vous devez déployer une exploration créative personnelle à partir de la question suivante :

**Comment rendre agréable le quotidien des jours de pluie en ville ?**

Votre exploration s'appuie sur une ou plusieurs incitations créatives parmi celles proposées. Vos réponses sont inscrites dans les domaines du design et des métiers d'art. Vous communiquez vos intentions sous forme graphique annotée.

**Incitations créatives**
- S'abriter ensemble sans se gêner
- Faire de la pluie un moment ludique ou poétique
- Rester au sec pendant ses déplacements
- Valoriser l'eau de pluie dans l'espace public
- Rendre la ville lisible et sûre par mauvais temps

**Modalités**
Les supports de travail fournis peuvent être utilisés librement (découpage, collage, etc.). Il est interdit de découper et de coller la documentation du sujet. Les supports assemblés doivent être repliés au format A4 et glissés dans la copie double d'examen.

**Ressource 1 : extrait d'un article inventé d'une revue d'urbanisme**
« Dans notre ville, il pleut un jour sur trois. Pourtant, la pluie reste pensée comme un problème à évacuer le plus vite possible : on l'envoie dans les égouts, on s'en protège chacun sous son parapluie. À la sortie des écoles, les parents se serrent sous un auvent prévu pour quatre personnes ; les collégiens attendent le bus sous l'averse ; les personnes âgées renoncent à sortir de peur de glisser. Et si la pluie devenait une ressource, et l'abri un lieu de rencontre ? »

**Ressource 2 : description d'une photographie inventée**
Une place pavée par temps de pluie. Le sol est creusé de rigoles en pierre claire qui dessinent des lignes courbes et conduisent l'eau vers un bassin planté d'herbes hautes. Des enfants en bottes suivent les rigoles en sautant. Légende : place fictive des Ondées, aménagement d'un collectif de paysagistes, 2022.

**Ressource 3 : description d'un objet inventé**
Un parapluie dont la toile transparente porte des motifs imprimés à l'encre thermochromique, qui changent de couleur au contact des gouttes froides. Légende : atelier fictif Nimbus, prototype, 2024.

**Critères d'évaluation**
- Cohérence de la démarche fondée sur les enjeux repérés et questionnés.
- Foisonnement et qualité de l'exploration créative.
- Mobilisation adaptée des connaissances techniques et culturelles au service de la démarche.
- Efficience des modes de représentation et d'expression.`,
      corrige: `## Éléments attendus (il n'y a pas de réponse unique)

### Analyse attendue
- Usagers : parents et enfants à la sortie de l'école, collégiens à l'arrêt de bus, personnes âgées qui ont peur de glisser, piétons, cyclistes.
- Besoins : s'abriter à plusieurs, ne pas glisser, voir et être vu, ne pas s'ennuyer en attendant, garder ses affaires au sec.
- Enjeux : social (partager l'abri, sortir malgré la pluie), sécurité et inclusion (personnes âgées, visibilité), environnemental (la pluie comme ressource, désimperméabiliser les sols), sensible (sons, couleurs, odeurs de la pluie).
- Les ressources montrent deux principes à revisiter : conduire l'eau visiblement dans l'espace (ressource 2), faire réagir un matériau à la pluie (ressource 3).

### Exemples de pistes divergentes
- Espace : un abri de sortie d'école extensible, dont des toiles se déploient à l'heure de la sortie ; un auvent-carillon dont les gouttes font sonner des tubes ; des rigoles qui conduisent l'eau vers des jardins de pluie au pied des arbres.
- Objet : un parapluie à deux poignées pour un adulte et un enfant ; un banc qui bascule pour rester sec ; une canne-parapluie à embout antidérapant pour les personnes âgées.
- Graphisme : une peinture de sol qui révèle une marelle ou un plan du quartier quand elle est mouillée ; une signalétique réfléchissante pour les jours sombres.
- Mode et textile : une cape d'enfant visible de loin, en textile enduit recyclé, qui se range dans une poche-pochette ; des bandes brodées réfléchissantes.
- Service : un prêt de parapluies entre commerces ; un « bus pédestre » abrité qui accompagne les enfants à l'école.
- Métier d'art : des vitraux sur un abri dont les reflets colorés dansent au sol ; des gargouilles contemporaines en céramique qui transforment l'écoulement en spectacle.

### Approfondissement attendu
- Une ou deux pistes développées : mise en situation avec silhouettes, coupe ou vue éclatée, détail technique, matériaux justifiés (acier galvanisé, verre feuilleté, mélèze, textile enduit), dimensions principales, scénario d'usage.

### Ce qui est valorisé
- Des pistes nombreuses et vraiment différentes, reliées aux incitations et aux enjeux.
- Du bon sens technologique : matériaux qui résistent à l'eau, sécurité au sol, entretien.
- Des références revisitées (jardins de pluie, gargouilles, carillons à vent, encre thermochromique) et citées en annotation.
- Une planche lisible, hiérarchisée, avec un code couleur et des annotations utiles.`,
      grille: [
        { c: 'Cohérence de la démarche : usagers, besoins et enjeux repérés à partir des ressources, pistes qui en découlent', pts: 5 },
        { c: 'Foisonnement et qualité de l\'exploration : pistes nombreuses, divergentes, dans plusieurs domaines, une ou deux approfondies', pts: 5 },
        { c: 'Connaissances techniques et culturelles : matériaux et fonctionnement plausibles, références revisitées', pts: 5 },
        { c: 'Efficience des représentations : croquis clairs, vues adaptées, échelle, annotations lisibles et utiles', pts: 5 },
      ] },
  ],
};
