// Sciences de l'ingénieur (spécialité, terminale) — voie générale. Sources : voir matiere.sources.
// Programme : arrêté du 19 juillet 2019 (BO spécial n°8 du 25 juillet 2019), toujours en vigueur pour le bac 2027,
// avec son programme de sciences physiques complémentaire. Un chapitre par grande partie : démarche et analyse,
// chaînes de puissance et d'information, modélisation (mécanique, énergie, électricité, asservissement, structures),
// information numérique, puis deux chapitres de sciences physiques.
// Épreuve écrite de 4 h : partie sciences de l'ingénieur (environ 3 h, notée sur 20, compte pour 75 %)
// et partie sciences physiques (environ 1 h, notée sur 20, compte pour 25 %). Formules écrites en texte simple.

export default {
  matiere: {
    id: 'si',
    nom: 'Sciences de l\'ingénieur',
    voie: 'generale',
    epreuve: { type: 'ecrit', duree: 240, coef: 16, quand: 'juin', note: 'Écrit de 4 h : sciences de l\'ingénieur (environ 3 h, 75 % de la note) et sciences physiques (environ 1 h, 25 % de la note), sur deux copies séparées' },
    sources: [
      'https://eduscol.education.gouv.fr/2155/programmes-et-ressources-en-sciences-de-l-ingenieur-voie-g',
      'https://www.education.gouv.fr/bo/19/Special8/MENE1921232A.htm',
      'https://www.education.gouv.fr/bo/20/Special2/MENE2001801N.htm',
      'https://aufutur.fr/baccalaureat/epreuve-specialite-sciences-ingenieur-bac/',
      'https://www.freemaths.fr/sujets-du-bac/baccalaureat-general/sciences-de-l-ingenieur/annees/annee-2024/polynesie/sujet-1-et-correction/bac-sciences-de-l-ingenieur-polynesie-2024-sujet-1.pdf',
    ],
    chapitres: [
      { id: 'si-1', t: 'La démarche de l\'ingénieur : cahier des charges, SysML et écarts', theme: 'Innover et analyser' },
      { id: 'si-2', t: 'Chaîne de puissance et chaîne d\'information', theme: 'Analyser' },
      { id: 'si-3', t: 'Énergie, puissance et rendement', theme: 'Modéliser et résoudre' },
      { id: 'si-4', t: 'Cinématique et transmission du mouvement', theme: 'Modéliser et résoudre' },
      { id: 'si-5', t: 'La statique : actions mécaniques et équilibre', theme: 'Modéliser et résoudre' },
      { id: 'si-6', t: 'La dynamique : principe fondamental et inertie', theme: 'Modéliser et résoudre' },
      { id: 'si-7', t: 'La résistance des matériaux', theme: 'Modéliser et résoudre' },
      { id: 'si-8', t: 'Moteurs électriques, convertisseurs et batteries', theme: 'Modéliser et résoudre' },
      { id: 'si-9', t: 'Les systèmes asservis', theme: 'Modéliser et résoudre' },
      { id: 'si-10', t: 'L\'information : numérique, capteurs et communication', theme: 'Modéliser et expérimenter' },
      { id: 'si-11', t: 'Sciences physiques : mouvements et interactions', theme: 'Sciences physiques' },
      { id: 'si-12', t: 'Sciences physiques : énergie, circuits et ondes', theme: 'Sciences physiques' },
    ],
  },
  paquets: [
    { chapitre: 'si-1',
      fiche: `## La démarche de l'ingénieur : cahier des charges, SysML et écarts

### Le cahier des charges
- Le **cahier des charges** décrit ce que le produit doit faire et les contraintes à respecter.
- Une **fonction de service** dit ce que le produit apporte à l'utilisateur (« transporter une personne »).
- Chaque fonction a des **critères**, avec un **niveau** et une **tolérance** : « vitesse maximale : 25 km/h ± 1 km/h ».
- Les **contraintes** limitent les choix : normes, masse, coût, environnement.

### Les diagrammes SysML
- SysML est un langage graphique pour décrire un système. Au bac, il faut savoir **lire** les diagrammes du dossier technique.
- **Diagramme de cas d'utilisation** : les **services rendus** aux **acteurs** (utilisateur, technicien).
- **Diagramme des exigences** : ce que le système **doit satisfaire**, avec des valeurs (« autonomie ≥ 40 km »). Une exigence peut être découpée en exigences plus précises.
- **Diagramme de définition de blocs** : les **composants** du système et leur organisation.
- **Diagramme de blocs internes** : les **flux** (énergie, information, matière) qui circulent entre les blocs, par des **ports** reliés par des **connecteurs**.
- **Diagramme d'états** : les **modes de fonctionnement** (veille, marche, défaut) et les **transitions** entre eux, déclenchées par des événements.
- **Diagramme de séquence** : l'**ordre chronologique** des échanges de messages entre les éléments.

### Les trois performances et leurs écarts
- **Performance attendue** : celle du cahier des charges.
- **Performance mesurée** : celle relevée sur le système réel, par un essai.
- **Performance simulée** : celle donnée par un **modèle** numérique.
- **Écart relatif** = (différence entre les deux valeurs, prise positive) / valeur de référence × 100. Exemple : autonomie attendue 40 km, mesurée 36 km. Écart = 4 / 40 × 100 = 10 %.
- Écart **attendu / mesuré** : le système respecte-t-il le cahier des charges ?
- Écart **mesuré / simulé** : le modèle est-il **fidèle** au réel ? Un faible écart (quelques %) valide le modèle.
- Écart **attendu / simulé** : le modèle prévoit-il le respect du cahier des charges ?
- Quand un écart est trop grand, on cherche sa cause, puis on **modifie** la conception, les composants ou le modèle.

### Pourquoi simuler ?
- Un modèle permet de **prévoir** les performances, de **comparer** plusieurs solutions et de les tester **sans fabriquer** de prototype : on gagne du temps et de l'argent.
- Mais un modèle est une **simplification** du réel : il faut toujours le **valider** par des mesures.

### L'éco-conception
- **Éco-concevoir**, c'est réduire les impacts environnementaux **dès la conception**.
- L'**analyse du cycle de vie** étudie les impacts à chaque étape : extraction des matières, fabrication, transport, utilisation, **fin de vie**.
- Leviers : moins de matière, matériaux recyclables, moins d'énergie à l'usage, produit réparable et démontable.

### À retenir pour le bac
- Lire un diagramme SysML et dire ce qu'il montre.
- Calculer un écart relatif en précisant la valeur de référence.
- Interpréter chaque écart : cahier des charges respecté ou non, modèle fidèle ou non.
- Piège : un modèle fidèle (écart mesuré / simulé faible) ne veut pas dire que le cahier des charges est respecté.
- Proposer une modification de conception quand le cahier des charges n'est pas respecté.`,
      cartes: [
        { q: "Qu'est-ce qu'un cahier des charges ?", r: "Le document qui décrit ce que le produit doit faire, avec des critères, des niveaux, des tolérances et des contraintes." },
        { q: "Diagramme de cas d'utilisation ?", r: "Il montre les services rendus par le système à ses acteurs." },
        { q: "Diagramme des exigences ?", r: "Il liste ce que le système doit satisfaire, avec des valeurs chiffrées." },
        { q: "Diagramme de définition de blocs ?", r: "Il montre les composants du système et leur organisation." },
        { q: "Diagramme de blocs internes ?", r: "Il montre les flux d'énergie, d'information et de matière entre les blocs, par des ports et des connecteurs." },
        { q: "Diagramme d'états ?", r: "Il montre les modes de fonctionnement du système et les transitions entre eux." },
        { q: "Diagramme de séquence ?", r: "Il montre l'ordre chronologique des messages échangés entre les éléments." },
        { q: "Les trois performances ?", r: "Attendue (cahier des charges), mesurée (essai réel), simulée (modèle)." },
        { q: "Formule de l'écart relatif ?", r: "Différence entre les deux valeurs, prise positive, divisée par la valeur de référence, × 100." },
        { q: "Que dit l'écart mesuré / simulé ?", r: "Si le modèle est fidèle au système réel." },
        { q: "Que dit l'écart attendu / mesuré ?", r: "Si le système réel respecte le cahier des charges." },
        { q: "Pourquoi simuler ?", r: "Prévoir les performances et comparer des solutions sans fabriquer de prototype, donc à moindre coût." },
        { q: "Qu'est-ce que l'éco-conception ?", r: "Réduire les impacts environnementaux d'un produit dès sa conception." },
        { q: "Étapes de l'analyse du cycle de vie ?", r: "Extraction des matières, fabrication, transport, utilisation, fin de vie." },
      ],
      quiz: [
        { q: "Le diagramme SysML qui liste ce que le système doit satisfaire, avec des valeurs, est le diagramme :", choix: ["de blocs internes", "des exigences", "d'états", "de séquence"], bonne: 1, expl: "Exemple : « autonomie ≥ 40 km ».", niv: 1 },
        { q: "Autonomie attendue : 40 km. Autonomie mesurée : 36 km. Écart relatif par rapport à l'attendu ?", choix: ["11 %", "4 %", "10 %", "36 %"], bonne: 2, expl: "(40 - 36) / 40 × 100 = 10 %. Le piège 11 % divise par 36 au lieu de la valeur de référence.", niv: 2 },
        { q: "Le diagramme qui décrit les modes veille, marche et défaut d'un système est le diagramme :", choix: ["de définition de blocs", "des exigences", "de cas d'utilisation", "d'états"], bonne: 3, expl: "Il montre les états et les transitions entre eux.", niv: 2 },
        { q: "Le diagramme de cas d'utilisation montre :", choix: ["les services rendus aux acteurs", "la structure interne en blocs", "l'ordre des messages dans le temps", "les valeurs des exigences"], bonne: 0, expl: "L'ordre des messages dans le temps, c'est le diagramme de séquence.", niv: 1 },
        { q: "L'écart entre performance simulée et performance mesurée renseigne surtout sur :", choix: ["un prix de vente", "le respect du cahier des charges", "la fidélité du modèle", "le choix des acteurs"], bonne: 2, expl: "Le respect du cahier des charges se juge avec l'écart attendu / mesuré.", niv: 2 },
        { q: "Temps de réponse attendu ≤ 2 s ; mesuré 2,6 s ; simulé 2,5 s. Conclusion la plus juste :", choix: ["modèle fidèle, cahier des charges non respecté", "cahier des charges respecté", "modèle faux à refaire entièrement", "mesure erronée à recommencer"], bonne: 0, expl: "Simulé et mesuré sont proches (écart d'environ 4 %), mais 2,6 s dépasse les 2 s exigées.", niv: 3 },
        { q: "L'analyse du cycle de vie étudie les impacts environnementaux d'un produit :", choix: ["pendant son utilisation chez le client", "de l'extraction des matières à la fin de vie", "lors de sa fabrication en usine", "pendant le transport vers le magasin"], bonne: 1, expl: "Elle prend en compte toutes les étapes, pas une seule.", niv: 1 },
        { q: "Dans un diagramme de blocs internes, le flux d'énergie entre la batterie et le moteur est représenté par :", choix: ["un acteur extérieur", "une exigence dérivée", "une transition entre deux états", "des ports reliés par un connecteur"], bonne: 3, expl: "Les ports et connecteurs montrent les flux entre blocs.", niv: 2 },
        { q: "Pourquoi simuler un système avant de le fabriquer ?", choix: ["Pour se passer de cahier des charges", "Pour supprimer les essais sur prototype", "Parce qu'un modèle reproduit le réel sans écart", "Pour prévoir ses performances à moindre coût"], bonne: 3, expl: "Un modèle simplifie le réel : il doit être validé par des mesures.", niv: 3 },
        { q: "Dans un cahier des charges, « vitesse maximale : 25 km/h ± 1 km/h » est :", choix: ["une fonction de service", "un critère avec son niveau et sa tolérance", "un acteur du système", "un diagramme de séquence"], bonne: 1, expl: "La fonction est ce que fait le produit ; le critère la chiffre.", niv: 2 },
        { q: "L'éco-conception consiste à :", choix: ["réduire les impacts environnementaux dès la conception", "recycler les produits après leur usage", "vendre des produits moins chers", "fabriquer dans un pays voisin"], bonne: 0, expl: "Le recyclage n'est qu'une étape ; l'éco-conception agit avant la fabrication.", niv: 1 },
        { q: "L'écart entre performance attendue et performance mesurée est trop grand. Que faire d'abord ?", choix: ["refaire la mesure sans rien changer", "supprimer l'exigence du cahier des charges", "chercher la cause et modifier la conception", "améliorer le modèle de simulation"], bonne: 2, expl: "Le système réel ne respecte pas le besoin : il faut agir sur la conception ou les composants.", niv: 3 },
      ] },
    { chapitre: 'si-2',
      fiche: `## Chaîne de puissance et chaîne d'information

### Deux chaînes qui travaillent ensemble
- Un système automatisé se décrit avec deux chaînes :
- la **chaîne d'information** décide : elle mesure, traite et envoie des **ordres** ;
- la **chaîne de puissance** agit : elle transforme l'énergie pour produire l'**effet voulu** (déplacer, chauffer, soulever).
- Exemple : un portail automatique. Le capteur détecte la télécommande, la carte décide d'ouvrir, le moteur fait tourner le portail.

### La chaîne d'information
- **Acquérir** : prendre une information grâce à un **capteur** (fin de course, capteur de température, codeur, caméra) ou une interface (bouton, écran tactile).
- **Traiter** : décider selon un programme, avec un **microcontrôleur**, un automate ou un ordinateur.
- **Communiquer** : envoyer des ordres à la chaîne de puissance, afficher une information ou l'échanger avec un autre système (écran, voyant, module wifi ou Bluetooth).

### La chaîne de puissance
- **Alimenter** : fournir l'énergie (batterie, réseau électrique, panneau solaire).
- **Distribuer** (ou moduler) : doser l'énergie envoyée à l'actionneur selon les ordres (relais, contacteur, **hacheur**, variateur, distributeur pneumatique).
- **Convertir** : transformer l'énergie (le **moteur électrique** convertit l'énergie électrique en énergie mécanique ; un vérin, une résistance chauffante).
- **Transmettre** : adapter et transmettre l'énergie mécanique (**réducteur**, engrenages, poulies et courroie, vis-écrou).
- Puis l'**effecteur** agit sur la matière d'œuvre (roue, pince, hélice).

### Le rendement d'une chaîne
- Chaque composant perd un peu d'énergie, surtout sous forme de **chaleur**. Son rendement est η = puissance utile / puissance absorbée, toujours inférieur à 1.
- Le **rendement global** d'une chaîne est le **produit** des rendements : η global = η1 × η2 × η3.
- Exemple : hacheur 0,95, moteur 0,80, réducteur 0,90. η global = 0,95 × 0,80 × 0,90 = 0,684.
- Si la puissance utile en sortie vaut 342 W, la puissance absorbée vaut 342 / 0,684 = 500 W.

### Les grandeurs qui circulent
- Énergie électrique : tension U (V) et courant I (A).
- Énergie mécanique de rotation : couple C (N·m) et vitesse angulaire ω (rad/s).
- Énergie mécanique de translation : force F (N) et vitesse v (m/s).

### À retenir pour le bac
- Placer chaque composant d'un système dans la bonne fonction : alimenter, distribuer, convertir, transmettre ; acquérir, traiter, communiquer.
- Calculer un rendement global en multipliant les rendements.
- Retrouver une puissance absorbée à partir de la puissance utile.
- Piège : le moteur convertit, le réducteur transmet, le hacheur distribue.
- Piège : la chaîne d'information envoie des ordres, pas de l'énergie de puissance.`,
      cartes: [
        { q: "Rôle de la chaîne d'information ?", r: "Acquérir les informations, les traiter et communiquer des ordres." },
        { q: "Rôle de la chaîne de puissance ?", r: "Alimenter, distribuer, convertir et transmettre l'énergie pour agir sur la matière d'œuvre." },
        { q: "Composant qui acquiert ?", r: "Un capteur ou une interface : fin de course, capteur de température, codeur, bouton." },
        { q: "Composant qui traite ?", r: "Un microcontrôleur, un automate ou un ordinateur." },
        { q: "Composant qui communique ?", r: "Un écran, un voyant, un module wifi ou Bluetooth, ou la liaison vers la chaîne de puissance." },
        { q: "Composant qui alimente ?", r: "Une batterie, le réseau électrique, un panneau solaire." },
        { q: "Composant qui distribue ?", r: "Un hacheur, un variateur, un relais ou un contacteur." },
        { q: "Composant qui convertit ?", r: "Un moteur électrique, un vérin, une résistance chauffante." },
        { q: "Composant qui transmet ?", r: "Un réducteur, des engrenages, des poulies et courroie, un système vis-écrou." },
        { q: "Rendement d'un composant ?", r: "η = puissance utile / puissance absorbée, inférieur à 1." },
        { q: "Rendement global d'une chaîne ?", r: "Le produit des rendements de ses composants." },
        { q: "Où partent les pertes d'énergie ?", r: "Surtout en chaleur (frottements, effet Joule)." },
        { q: "Grandeurs d'une puissance de rotation ?", r: "Le couple C en N·m et la vitesse angulaire ω en rad/s." },
      ],
      quiz: [
        { q: "Dans la chaîne de puissance, le moteur électrique réalise la fonction :", choix: ["convertir", "distribuer", "transmettre", "alimenter"], bonne: 0, expl: "Il transforme l'énergie électrique en énergie mécanique.", niv: 1 },
        { q: "Un hacheur qui règle la tension envoyée au moteur réalise la fonction :", choix: ["acquérir", "convertir", "distribuer", "transmettre"], bonne: 2, expl: "Il dose l'énergie selon les ordres reçus : il distribue (ou module).", niv: 2 },
        { q: "Un réducteur à engrenages placé entre le moteur et la roue réalise la fonction :", choix: ["convertir", "transmettre", "distribuer", "alimenter"], bonne: 1, expl: "L'énergie reste mécanique : il l'adapte et la transmet.", niv: 2 },
        { q: "Dans la chaîne d'information, un capteur réalise la fonction :", choix: ["distribuer", "traiter", "communiquer", "acquérir"], bonne: 3, expl: "Il prend une information sur le système ou son environnement.", niv: 1 },
        { q: "Rendements : hacheur 0,95 ; moteur 0,80 ; réducteur 0,90. Quel est le rendement global ?", choix: ["0,883", "0,684", "2,65", "0,80"], bonne: 1, expl: "0,95 × 0,80 × 0,90 = 0,684. Le piège 0,883 fait la moyenne ; 2,65 fait la somme.", niv: 2 },
        { q: "Puissance utile en sortie 342 W, rendement global 0,684. Quelle est la puissance absorbée ?", choix: ["500 W", "234 W", "342 W", "684 W"], bonne: 0, expl: "Pa = Pu / η = 342 / 0,684 = 500 W. 234 W vient d'une multiplication.", niv: 3 },
        { q: "Le microcontrôleur d'un système réalise la fonction :", choix: ["alimenter", "acquérir", "convertir", "traiter"], bonne: 3, expl: "Il exécute le programme qui décide des ordres.", niv: 1 },
        { q: "Le module Bluetooth qui envoie l'état du système à un smartphone réalise la fonction :", choix: ["distribuer", "acquérir", "communiquer", "transmettre"], bonne: 2, expl: "Transmettre concerne l'énergie mécanique dans la chaîne de puissance.", niv: 2 },
        { q: "Dans une chaîne de puissance, les pertes d'énergie apparaissent surtout sous forme :", choix: ["d'énergie chimique", "de lumière visible", "de chaleur", "de son audible"], bonne: 2, expl: "Frottements et effet Joule chauffent les composants.", niv: 3 },
        { q: "La batterie d'un vélo à assistance électrique réalise la fonction :", choix: ["traiter", "convertir", "transmettre", "alimenter"], bonne: 3, expl: "Elle fournit l'énergie électrique à la chaîne de puissance.", niv: 2 },
        { q: "La chaîne d'information envoie à la chaîne de puissance :", choix: ["de l'énergie mécanique", "des ordres", "des grandeurs physiques à mesurer", "la matière d'œuvre"], bonne: 1, expl: "Elle décide ; la chaîne de puissance agit.", niv: 1 },
        { q: "Pourquoi le rendement global d'une chaîne est-il plus faible que celui de chaque composant ?", choix: ["Les rendements, tous inférieurs à 1, se multiplient", "Les rendements de la chaîne s'additionnent", "Le dernier composant impose son rendement", "Les pertes des composants s'annulent"], bonne: 0, expl: "Multiplier des nombres inférieurs à 1 donne un nombre plus petit que chacun d'eux.", niv: 3 },
      ] },
    { chapitre: 'si-3',
      fiche: `## Énergie, puissance et rendement

### Énergie et puissance
- L'**énergie** E se mesure en **joules** (J). On utilise aussi le **wattheure** : 1 Wh = 3 600 J et 1 kWh = 3,6 × 10^6 J.
- La **puissance** P est l'énergie transférée par seconde, en **watts** (W) : **E = P × t**, avec t en secondes pour E en joules, ou t en heures pour E en Wh.
- Exemple : un appareil de 2 000 W qui fonctionne 30 min consomme 2 000 × 0,5 = 1 000 Wh = 1 kWh.

### Les formules de puissance à connaître
- **Électrique** (courant continu) : **P = U × I**. Un moteur sous 24 V parcouru par 5 A absorbe 120 W.
- **Mécanique, translation** : **P = F × v** (F en N, v en m/s). Un treuil qui tire 500 N à 0,4 m/s fournit 200 W.
- **Mécanique, rotation** : **P = C × ω** (C en N·m, ω en rad/s). Un moteur qui donne 2 N·m à 300 rad/s fournit 600 W.
- **Conversion des vitesses** : ω (rad/s) = N (tr/min) × 2π / 60. 1 500 tr/min font environ 157 rad/s.

### Le rendement
- **η = puissance utile / puissance absorbée**, sans unité, entre 0 et 1 (ou en %).
- **Pertes** = puissance absorbée - puissance utile. Exemple : moteur qui absorbe 400 W avec η = 0,85 : Pu = 340 W, pertes = 60 W, dissipées en chaleur.
- Pour une chaîne, on **multiplie** les rendements.

### L'énergie stockée dans une batterie
- La **capacité** d'une batterie est donnée en ampères-heures (A·h). Énergie stockée : **E = U × Q**. Une batterie de 36 V et 10 A·h stocke 360 Wh.
- **Autonomie** = énergie disponible / puissance consommée. Exemple : 360 Wh pour un moteur qui consomme 180 W : 2 h.

### Énergies mécaniques
- **Énergie cinétique** : Ec = ½ × m × v² (translation) ; Ec = ½ × J × ω² (rotation, J moment d'inertie).
- **Énergie potentielle de pesanteur** : Ep = m × g × h, avec g ≈ 9,81 m/s².
- Lors d'un freinage, l'énergie cinétique est perdue en chaleur dans les freins, sauf si un système de **récupération** la renvoie dans la batterie, ce qui améliore l'autonomie.

### Méthode
- Repérer les grandeurs connues et leurs unités, convertir (min en s, tr/min en rad/s, mAh en A·h).
- Écrire la formule, puis le calcul, puis le résultat avec l'unité.
- Comparer au cahier des charges et conclure par une phrase : la performance est-elle suffisante ?
- Garder des résultats intermédiaires précis et n'arrondir qu'à la fin.

### À retenir pour le bac
- P = U × I ; P = F × v ; P = C × ω ; E = P × t ; η = Pu / Pa.
- Convertir les tr/min en rad/s : × 2π / 60.
- Calculer une énergie de batterie en Wh et une autonomie.
- Piège : confondre puissance (W) et énergie (J ou Wh).
- Piège : oublier de convertir les minutes en heures ou en secondes.`,
      cartes: [
        { q: "Relation entre énergie et puissance ?", r: "E = P × t : en joules avec t en secondes, en Wh avec t en heures." },
        { q: "Combien de joules dans 1 kWh ?", r: "3,6 × 10^6 J (1 Wh = 3 600 J)." },
        { q: "Puissance électrique en continu ?", r: "P = U × I." },
        { q: "Puissance mécanique en translation ?", r: "P = F × v, avec F en N et v en m/s." },
        { q: "Puissance mécanique en rotation ?", r: "P = C × ω, avec C en N·m et ω en rad/s." },
        { q: "Convertir des tr/min en rad/s ?", r: "ω = N × 2π / 60." },
        { q: "Définition du rendement ?", r: "η = puissance utile / puissance absorbée, entre 0 et 1." },
        { q: "Calcul des pertes ?", r: "Pertes = puissance absorbée - puissance utile." },
        { q: "Énergie stockée dans une batterie ?", r: "E = U × Q : 36 V × 10 A·h = 360 Wh." },
        { q: "Calcul d'une autonomie ?", r: "Énergie disponible / puissance consommée." },
        { q: "Énergie cinétique en translation ?", r: "Ec = ½ × m × v²." },
        { q: "Énergie cinétique en rotation ?", r: "Ec = ½ × J × ω², avec J le moment d'inertie." },
        { q: "Énergie potentielle de pesanteur ?", r: "Ep = m × g × h, avec g ≈ 9,81 m/s²." },
      ],
      quiz: [
        { q: "La puissance mécanique d'un arbre en rotation vaut :", choix: ["P = C / ω", "P = F / v", "P = U / I", "P = C × ω"], bonne: 3, expl: "Couple en N·m fois vitesse angulaire en rad/s.", niv: 1 },
        { q: "Un moteur fournit un couple de 2 N·m à 300 rad/s. Quelle puissance mécanique fournit-il ?", choix: ["600 W", "150 W", "0,0067 W", "302 W"], bonne: 0, expl: "P = C × ω = 2 × 300 = 600 W.", niv: 2 },
        { q: "Un treuil soulève une charge avec une force de 500 N à 0,4 m/s. Quelle puissance fournit-il ?", choix: ["500,4 W", "1 250 W", "200 W", "0,0008 W"], bonne: 2, expl: "P = F × v = 500 × 0,4 = 200 W. 1 250 W vient d'une division.", niv: 2 },
        { q: "Le rendement d'un composant vaut :", choix: ["puissance absorbée / puissance utile", "puissance utile / puissance absorbée", "puissance utile - puissance absorbée", "puissance utile × puissance absorbée"], bonne: 1, expl: "Il est inférieur à 1 car la puissance utile est plus faible.", niv: 1 },
        { q: "Un moteur tourne à 1 500 tr/min. Quelle est sa vitesse angulaire, environ ?", choix: ["157 rad/s", "25 rad/s", "9 425 rad/s", "1 500 rad/s"], bonne: 0, expl: "1 500 × 2π / 60 ≈ 157 rad/s. 25 est la vitesse en tours par seconde.", niv: 2 },
        { q: "Une batterie de 36 V et de 10 A·h stocke une énergie de :", choix: ["3,6 Wh", "360 Wh", "46 Wh", "1 296 kWh"], bonne: 1, expl: "E = U × Q = 36 × 10 = 360 Wh, soit environ 1,3 × 10^6 J.", niv: 3 },
        { q: "Dans le Système international, l'énergie s'exprime en :", choix: ["volts", "watts", "newtons", "joules"], bonne: 3, expl: "Le watt est l'unité de la puissance.", niv: 1 },
        { q: "Un appareil de 2 000 W fonctionne pendant 30 min. Quelle énergie consomme-t-il ?", choix: ["4 kWh", "60 kWh", "1 kWh", "0,067 kWh"], bonne: 2, expl: "E = P × t = 2 kW × 0,5 h = 1 kWh. 60 kWh oublie de convertir les minutes.", niv: 2 },
        { q: "Un moteur absorbe 400 W avec un rendement de 0,85. Quelles sont ses pertes ?", choix: ["470 W", "340 W", "60 W", "85 W"], bonne: 2, expl: "Pu = 0,85 × 400 = 340 W ; pertes = 400 - 340 = 60 W.", niv: 3 },
        { q: "Un moteur est alimenté sous 24 V et parcouru par 5 A. Quelle puissance absorbe-t-il ?", choix: ["120 W", "4,8 W", "29 W", "0,21 W"], bonne: 0, expl: "P = U × I = 24 × 5 = 120 W.", niv: 2 },
        { q: "1 kWh correspond à :", choix: ["60 000 J", "1 000 J", "3 600 J", "3,6 × 10^6 J"], bonne: 3, expl: "1 000 W pendant 3 600 s : 3 600 000 J.", niv: 1 },
        { q: "Pourquoi la récupération d'énergie au freinage améliore-t-elle l'autonomie d'un véhicule électrique ?", choix: ["La masse du véhicule augmente", "L'énergie cinétique recharge la batterie", "Les frottements de l'air disparaissent", "La tension de la batterie double"], bonne: 1, expl: "Sans récupération, cette énergie serait perdue en chaleur dans les freins.", niv: 3 },
      ] },
    { chapitre: 'si-4',
      fiche: `## Cinématique et transmission du mouvement

### Décrire un mouvement
- La **cinématique** étudie les mouvements sans s'occuper des forces qui les causent.
- **Translation rectiligne** : un solide se déplace en ligne droite. Position x (m), vitesse v (m/s), accélération a (m/s²).
- **Rotation** : un solide tourne autour d'un axe. Angle θ (rad), vitesse angulaire ω (rad/s), accélération angulaire (rad/s²).
- Le mouvement est toujours décrit **par rapport à un repère** (le sol, le bâti de la machine).

### Les deux mouvements types
- **Mouvement uniforme** : vitesse constante, accélération nulle. x = v × t + x0.
- **Mouvement uniformément accéléré** : accélération constante. v = a × t + v0 et x = ½ × a × t² + v0 × t + x0.
- Exemple, départ arrêté avec a = 2 m/s² : après 5 s, v = 10 m/s et la distance parcourue vaut ½ × 2 × 25 = 25 m.
- Une **loi de vitesse en trapèze** (accélération, vitesse constante, décélération) est très courante pour les axes motorisés. La distance parcourue est l'**aire** sous la courbe de vitesse.

### Relier rotation et translation
- Roue qui roule sans glisser : **v = R × ω**. Une roue de rayon 0,3 m à 20 rad/s fait avancer le véhicule à 6 m/s.
- **Système vis-écrou** : il transforme une rotation en translation. v = pas × N. Une vis de pas 4 mm à 300 tr/min fait avancer l'écrou de 1 200 mm/min, soit 20 mm/s.
- **Pignon et crémaillère** : v = R × ω, avec R le rayon primitif du pignon.

### Les transmissions de rotation
- Le **rapport de transmission** est k = ω sortie / ω entrée. Pour un **réducteur**, k est inférieur à 1 : la vitesse diminue.
- **Engrenages** : k = Z menant / Z mené (Z = nombre de dents). Pignon de 15 dents qui entraîne une roue de 45 dents : k = 15 / 45 = 1/3.
- **Poulies et courroie** : k = D menante / D menée. Poulie motrice de 50 mm et poulie réceptrice de 200 mm : la réceptrice tourne 4 fois moins vite.
- Pour plusieurs étages, on **multiplie** les rapports.
- Exemple : réducteur de rapport 1/20, moteur à 3 000 tr/min : sortie à 150 tr/min.

### Vitesse et couple
- Si le rendement vaut 1, la puissance se conserve : C entrée × ω entrée = C sortie × ω sortie.
- Un réducteur qui **divise la vitesse** par 10 **multiplie le couple** par 10 (un peu moins en réalité, à cause du rendement).
- C'est pourquoi on place un réducteur derrière un moteur rapide mais peu puissant en couple.

### À retenir pour le bac
- v = R × ω ; ω = N × 2π / 60 ; v = pas × N pour une vis-écrou.
- Rapport de transmission : produit des rapports de chaque étage.
- Lire une courbe de vitesse : pente = accélération, aire = distance.
- Piège : un réducteur diminue la vitesse mais augmente le couple.
- Piège : vérifier les unités (mm, m, tr/min, rad/s).`,
      cartes: [
        { q: "Mouvement uniforme ?", r: "Vitesse constante, accélération nulle : x = v × t + x0." },
        { q: "Mouvement uniformément accéléré ?", r: "Accélération constante : v = a × t + v0 et x = ½ × a × t² + v0 × t + x0." },
        { q: "Lien entre vitesse de roue et vitesse du véhicule ?", r: "v = R × ω, si la roue roule sans glisser." },
        { q: "Vitesse d'un écrou dans un système vis-écrou ?", r: "v = pas × N (N en tours par unité de temps)." },
        { q: "Rapport de transmission ?", r: "k = ω sortie / ω entrée ; inférieur à 1 pour un réducteur." },
        { q: "Rapport d'un engrenage ?", r: "k = Z menant / Z mené." },
        { q: "Rapport d'une transmission par poulies ?", r: "k = diamètre de la poulie menante / diamètre de la poulie menée." },
        { q: "Rapport de plusieurs étages ?", r: "Le produit des rapports de chaque étage." },
        { q: "Effet d'un réducteur sur le couple ?", r: "Il augmente le couple dans le rapport inverse de la vitesse (au rendement près)." },
        { q: "Que représente la pente d'une courbe de vitesse ?", r: "L'accélération." },
        { q: "Que représente l'aire sous une courbe de vitesse ?", r: "La distance parcourue." },
        { q: "Transformation d'un système vis-écrou ?", r: "Une rotation en translation." },
        { q: "Convertir des tr/min en rad/s ?", r: "Multiplier par 2π / 60." },
      ],
      quiz: [
        { q: "Dans un mouvement rectiligne uniforme, l'accélération est :", choix: ["croissante", "constante et non nulle", "nulle", "égale à la vitesse"], bonne: 2, expl: "La vitesse ne change pas, donc l'accélération est nulle.", niv: 1 },
        { q: "Une roue de rayon 0,3 m tourne à 20 rad/s sans glisser. À quelle vitesse avance le véhicule ?", choix: ["20,3 m/s", "66,7 m/s", "0,015 m/s", "6 m/s"], bonne: 3, expl: "v = R × ω = 0,3 × 20 = 6 m/s.", niv: 2 },
        { q: "Un réducteur de rapport 1/20 est monté sur un moteur à 3 000 tr/min. Vitesse en sortie ?", choix: ["150 tr/min", "60 000 tr/min", "2 980 tr/min", "3 000 tr/min"], bonne: 0, expl: "3 000 × 1/20 = 150 tr/min.", niv: 2 },
        { q: "Le rapport de transmission d'un réducteur est :", choix: ["ω entrée × ω sortie", "ω sortie / ω entrée", "C entrée / ω sortie", "Z mené × ω entrée"], bonne: 1, expl: "Pour un réducteur, il est inférieur à 1.", niv: 1 },
        { q: "Un pignon moteur de 15 dents entraîne une roue de 45 dents. Rapport ω sortie / ω entrée ?", choix: ["15", "3", "1/45", "1/3"], bonne: 3, expl: "k = Z menant / Z mené = 15 / 45 = 1/3 : la roue tourne 3 fois moins vite.", niv: 2 },
        { q: "Départ arrêté, accélération constante de 2 m/s². Quelle est la vitesse après 5 s ?", choix: ["2,5 m/s", "25 m/s", "10 m/s", "7 m/s"], bonne: 2, expl: "v = a × t = 2 × 5 = 10 m/s. 25 est la distance parcourue, en mètres.", niv: 3 },
        { q: "Un système vis-écrou transforme :", choix: ["une translation en rotation", "une rotation en translation", "une rotation lente en rotation rapide", "une énergie électrique en énergie mécanique"], bonne: 1, expl: "La vis tourne, l'écrou avance.", niv: 1 },
        { q: "Une vis de pas 4 mm tourne à 300 tr/min. À quelle vitesse avance l'écrou ?", choix: ["20 mm/s", "1 200 mm/s", "75 mm/s", "1,33 mm/s"], bonne: 0, expl: "v = 4 × 300 = 1 200 mm/min, soit 20 mm/s. 1 200 mm/s oublie la conversion des minutes.", niv: 2 },
        { q: "Départ arrêté, a = 2 m/s² pendant 5 s. Quelle distance est parcourue ?", choix: ["25 m", "10 m", "50 m", "5 m"], bonne: 0, expl: "x = ½ × a × t² = ½ × 2 × 25 = 25 m. 50 m oublie le ½.", niv: 3 },
        { q: "Un réducteur divise la vitesse par 10, avec un rendement de 1. Le couple en sortie est :", choix: ["inchangé", "divisé par 10", "multiplié par 10", "multiplié par 100"], bonne: 2, expl: "La puissance C × ω se conserve : si ω est divisé par 10, C est multiplié par 10.", niv: 2 },
        { q: "Une vitesse angulaire ω s'exprime en :", choix: ["m/s", "rad/s", "rad/s²", "N·m"], bonne: 1, expl: "rad/s² est l'unité de l'accélération angulaire.", niv: 1 },
        { q: "Poulie motrice de 50 mm de diamètre, poulie réceptrice de 200 mm. La poulie réceptrice tourne :", choix: ["2 fois moins vite", "4 fois plus vite", "à la même vitesse", "4 fois moins vite"], bonne: 3, expl: "k = 50 / 200 = 1/4 : la grande poulie tourne 4 fois moins vite.", niv: 3 },
      ] },
    { chapitre: 'si-5',
      fiche: `## La statique : actions mécaniques et équilibre

### Les actions mécaniques
- Une **action mécanique** est modélisée par une **force** : un point d'application, une direction, un sens et une intensité en **newtons** (N).
- Le **poids** : **P = m × g**, avec g ≈ 9,81 m/s². Une masse de 50 kg pèse environ 490,5 N.
- Une action peut aussi faire tourner : c'est le **moment**. Le moment d'une force F par rapport à un point O vaut **M = F × d**, où d est la **distance** entre O et la **droite d'action** de la force (le **bras de levier**). Unité : N·m.
- Exemple : une clé de 0,25 m serrée par une force de 80 N perpendiculaire : couple de 80 × 0,25 = 20 N·m.
- Plus le bras de levier est grand, moins il faut de force pour un même moment : c'est pourquoi la poignée d'une porte est loin des gonds.

### Le principe fondamental de la statique
- Un solide est **en équilibre** (immobile ou en mouvement rectiligne uniforme) si :
- la **somme des forces** extérieures est **nulle** ;
- la **somme des moments** de ces forces, par rapport à n'importe quel point, est **nulle**.
- **Solide soumis à deux forces** : elles ont la même droite d'action, des sens opposés et la même intensité.
- Méthode : isoler le solide, faire le **bilan des actions extérieures**, écrire l'équilibre, en général en projetant sur des axes et en calculant les moments par rapport à un point bien choisi (où passent les forces inconnues).

### Exemples
- **Levier** : charge de 600 N à 0,2 m de l'appui. Moments par rapport à l'appui : F × 1,2 = 600 × 0,2, donc F = 100 N à 1,2 m.
- **Treuil immobile** : câble tendu à 2 000 N sur un tambour de rayon 0,1 m : le moteur doit fournir un couple de 2 000 × 0,1 = 200 N·m.

### Les liaisons
- Une **liaison** décrit comment deux pièces peuvent bouger l'une par rapport à l'autre.
- **Encastrement** : aucun mouvement possible.
- **Pivot** : une seule **rotation** autour d'un axe (une roue sur son axe).
- **Glissière** : une seule **translation** (un tiroir).
- **Pivot glissant** : une rotation et une translation de même axe.
- **Rotule** : trois rotations. **Appui plan**, **liaison ponctuelle** : plusieurs mouvements possibles.
- Une liaison transmet des efforts dans les directions où elle **empêche** le mouvement.

### Le frottement
- Entre deux solides en contact, l'effort se décompose en un effort **normal** N et un effort **tangentiel** T.
- **Loi de Coulomb** : il n'y a pas de glissement tant que **T ≤ f × N**, avec f le **coefficient de frottement** (sans unité).
- Exemple : f = 0,3 et N = 1 000 N : on peut transmettre jusqu'à 300 N sans glisser.
- Le frottement est utile (freins, pneus, embrayage) ou gênant (pertes dans les liaisons).

### À retenir pour le bac
- M = F × d avec la distance à la droite d'action ; P = m × g.
- Isoler, faire le bilan des actions, écrire somme des forces nulle et somme des moments nulle.
- Connaître les liaisons usuelles et leurs mouvements possibles.
- Loi de Coulomb : T ≤ f × N.
- Piège : prendre la distance perpendiculaire à la force, pas la longueur de la pièce si la force est inclinée.`,
      cartes: [
        { q: "Comment modélise-t-on une action mécanique ?", r: "Par une force : point d'application, direction, sens et intensité en newtons." },
        { q: "Formule du poids ?", r: "P = m × g, avec g ≈ 9,81 m/s²." },
        { q: "Moment d'une force par rapport à un point ?", r: "M = F × d, avec d la distance du point à la droite d'action de la force." },
        { q: "Principe fondamental de la statique ?", r: "Somme des forces extérieures nulle et somme des moments nulle." },
        { q: "Solide soumis à deux forces en équilibre ?", r: "Les deux forces ont même droite d'action, sens opposés et même intensité." },
        { q: "Première étape d'une étude statique ?", r: "Isoler le solide et faire le bilan des actions mécaniques extérieures." },
        { q: "Liaison encastrement ?", r: "Aucun mouvement relatif possible." },
        { q: "Liaison pivot ?", r: "Une seule rotation autour d'un axe." },
        { q: "Liaison glissière ?", r: "Une seule translation." },
        { q: "Liaison pivot glissant ?", r: "Une rotation et une translation de même axe." },
        { q: "Loi de Coulomb ?", r: "Pas de glissement tant que T ≤ f × N, avec f le coefficient de frottement." },
        { q: "Pourquoi un long bras de levier aide-t-il ?", r: "Le même moment s'obtient avec moins de force, car M = F × d." },
        { q: "Où choisir le point pour écrire les moments ?", r: "Là où passent des forces inconnues : leurs moments y sont nuls." },
      ],
      quiz: [
        { q: "Le moment d'une force F par rapport à un point O, avec d la distance de O à sa droite d'action, vaut :", choix: ["F / d", "F × d", "F + d", "F × d²"], bonne: 1, expl: "On l'exprime en N·m.", niv: 1 },
        { q: "Une clé de 0,25 m reçoit à son extrémité une force perpendiculaire de 80 N. Quel est le couple de serrage ?", choix: ["20 N·m", "320 N·m", "80,25 N·m", "0,003 N·m"], bonne: 0, expl: "M = F × d = 80 × 0,25 = 20 N·m. 320 vient d'une division.", niv: 2 },
        { q: "Une masse de 50 kg est suspendue, immobile, à un câble (g = 9,81 m/s²). Tension du câble ?", choix: ["5,1 N", "50 N", "490,5 N", "59,81 N"], bonne: 2, expl: "Équilibre : T = P = 50 × 9,81 = 490,5 N. 50 est la masse, pas une force.", niv: 2 },
        { q: "Un solide est en équilibre. Le principe fondamental de la statique impose :", choix: ["somme des forces égale à m × a", "somme des forces égale au poids", "somme des moments égale au poids", "somme des forces nulle et somme des moments nulle"], bonne: 3, expl: "m × a, c'est le principe fondamental de la dynamique.", niv: 1 },
        { q: "Levier : charge de 600 N à 0,2 m de l'appui. Quelle force exercer à 1,2 m de l'appui pour l'équilibre ?", choix: ["100 N", "3 600 N", "144 N", "720 N"], bonne: 0, expl: "F × 1,2 = 600 × 0,2, donc F = 120 / 1,2 = 100 N.", niv: 2 },
        { q: "Coefficient de frottement f = 0,3 ; effort normal 1 000 N. Effort tangentiel maximal avant glissement ?", choix: ["700 N", "3 333 N", "1 300 N", "300 N"], bonne: 3, expl: "T max = f × N = 0,3 × 1 000 = 300 N.", niv: 3 },
        { q: "Une liaison pivot autorise :", choix: ["une seule translation", "une seule rotation", "une rotation et une translation de même axe", "trois rotations"], bonne: 1, expl: "Trois rotations, c'est la rotule ; rotation et translation de même axe, le pivot glissant.", niv: 1 },
        { q: "Un solide soumis à deux forces est en équilibre. Ces deux forces sont :", choix: ["parallèles et de même sens", "perpendiculaires et de même intensité", "opposées, de même droite d'action et intensité", "sur deux droites d'action différentes"], bonne: 2, expl: "Sinon leur somme ou leur moment ne serait pas nul.", niv: 2 },
        { q: "Pourquoi la poignée d'une porte est-elle placée loin des gonds ?", choix: ["La porte est plus légère de ce côté", "Un grand bras de levier demande moins de force", "Le frottement y est plus faible", "Le poids de la porte y est nul"], bonne: 1, expl: "M = F × d : à moment égal, une distance plus grande demande une force plus petite.", niv: 3 },
        { q: "Une liaison encastrement autorise :", choix: ["deux translations", "une rotation", "aucun mouvement relatif", "une rotation et une translation"], bonne: 2, expl: "Les deux pièces sont fixées l'une à l'autre.", niv: 2 },
        { q: "Le poids d'un objet de masse m vaut :", choix: ["P = m × g", "P = m / g", "P = m + g", "P = g / m"], bonne: 0, expl: "Avec g ≈ 9,81 m/s² sur Terre.", niv: 1 },
        { q: "Un treuil maintient immobile un câble tendu à 2 000 N, sur un tambour de rayon 0,1 m. Couple moteur nécessaire ?", choix: ["20 N·m", "20 000 N·m", "2 000 N·m", "200 N·m"], bonne: 3, expl: "C = T × R = 2 000 × 0,1 = 200 N·m.", niv: 3 },
      ] },
    { chapitre: 'si-6',
      fiche: `## La dynamique : principe fondamental et inertie

### Quand utiliser la dynamique ?
- La statique suffit quand le solide est immobile ou à vitesse constante.
- Dès qu'il **accélère** ou **freine**, il faut le **principe fondamental de la dynamique** (PFD) : il relie les efforts au mouvement.
- C'est le cas des phases de démarrage et d'arrêt, qui imposent souvent le choix du moteur.

### Le PFD en translation
- **Somme des forces extérieures = m × a** (m en kg, a en m/s²).
- Exemple : un chariot de 200 kg accélère à 0,5 m/s², sans frottement : la force motrice vaut 200 × 0,5 = 100 N.
- Exemple vertical : un ascenseur de 800 kg monte en accélérant à 1 m/s². T - P = m × a, donc T = m × (g + a) = 800 × 10,81 = 8 648 N. À vitesse constante, a = 0 et T = P = 7 848 N.

### Le PFD en rotation
- **Somme des couples = J × dω/dt**, avec J le **moment d'inertie** (kg·m²) et dω/dt l'**accélération angulaire** (rad/s²).
- Le **moment d'inertie** mesure la résistance d'un solide à la mise en rotation. Il dépend de la masse et surtout de sa **répartition** : plus la masse est loin de l'axe, plus J est grand.
- Cylindre plein de masse m et de rayon R : **J = ½ × m × R²**. Pour 4 kg et 0,1 m : J = 0,02 kg·m².
- Exemple : couple moteur de 3 N·m, inertie 0,05 kg·m², pas de couple résistant : accélération = 3 / 0,05 = 60 rad/s².

### Le couple moteur nécessaire
- Au démarrage, le moteur doit à la fois **vaincre le couple résistant** et **accélérer les inerties** :
- **C moteur = J × dω/dt + C résistant**.
- Exemple : couple résistant 2 N·m, inertie 0,1 kg·m², accélération 20 rad/s² : C = 0,1 × 20 + 2 = 4 N·m.
- En régime établi (vitesse constante), seul le couple résistant reste : c'est pourquoi le couple de démarrage est plus grand.

### L'inertie ramenée sur l'arbre moteur
- Une charge d'inertie J entraînée à travers un réducteur de rapport k (k = ω charge / ω moteur) se comporte, vue du moteur, comme une inertie **J × k²**.
- Avec k = 1/10, la charge « pèse » 100 fois moins pour le moteur. C'est un autre intérêt des réducteurs.
- Une masse m en translation, entraînée par une roue ou un tambour de rayon R, équivaut sur cet arbre à une inertie **m × R²**.

### Énergie et dynamique
- On peut aussi raisonner en énergie : la variation d'énergie cinétique est égale au travail des forces (théorème de l'énergie cinétique).
- Ec = ½ × m × v² en translation ; Ec = ½ × J × ω² en rotation.

### À retenir pour le bac
- Translation : somme des forces = m × a. Rotation : somme des couples = J × dω/dt.
- J d'un cylindre plein : ½ × m × R².
- Couple moteur au démarrage = J × dω/dt + couple résistant.
- Inertie ramenée à travers un réducteur : J × k².
- Piège : à vitesse constante, l'accélération est nulle, pas la force motrice.`,
      cartes: [
        { q: "PFD en translation ?", r: "Somme des forces extérieures = m × a." },
        { q: "PFD en rotation ?", r: "Somme des couples = J × dω/dt." },
        { q: "Qu'est-ce que le moment d'inertie ?", r: "La résistance d'un solide à la mise en rotation ; il dépend de la masse et de sa répartition autour de l'axe." },
        { q: "Unité du moment d'inertie ?", r: "Le kg·m²." },
        { q: "Moment d'inertie d'un cylindre plein ?", r: "J = ½ × m × R²." },
        { q: "Couple moteur au démarrage ?", r: "C = J × dω/dt + C résistant." },
        { q: "Couple moteur à vitesse constante ?", r: "Il est égal au couple résistant, car l'accélération est nulle." },
        { q: "Tension du câble d'un ascenseur qui monte en accélérant ?", r: "T = m × (g + a)." },
        { q: "Inertie ramenée à travers un réducteur de rapport k ?", r: "J ramenée = J × k², avec k = ω charge / ω moteur." },
        { q: "Masse en translation vue d'un arbre de rayon R ?", r: "Une inertie équivalente m × R²." },
        { q: "Théorème de l'énergie cinétique ?", r: "La variation d'énergie cinétique est égale au travail des forces appliquées." },
        { q: "Pourquoi une masse loin de l'axe augmente-t-elle J ?", r: "J dépend du carré de la distance à l'axe." },
      ],
      quiz: [
        { q: "En translation, le principe fondamental de la dynamique s'écrit :", choix: ["somme des forces = m × a", "somme des forces = m × v", "somme des forces = 0", "somme des forces = ½ × m × v²"], bonne: 0, expl: "Somme des forces = 0, c'est le cas particulier de l'équilibre.", niv: 1 },
        { q: "Un chariot de 200 kg accélère à 0,5 m/s², frottements négligés. Quelle est la force motrice ?", choix: ["400 N", "100 N", "200,5 N", "1 962 N"], bonne: 1, expl: "F = m × a = 200 × 0,5 = 100 N.", niv: 2 },
        { q: "Couple moteur 3 N·m, inertie totale 0,05 kg·m², couple résistant nul. Accélération angulaire ?", choix: ["150 rad/s²", "0,15 rad/s²", "3,05 rad/s²", "60 rad/s²"], bonne: 3, expl: "dω/dt = C / J = 3 / 0,05 = 60 rad/s².", niv: 2 },
        { q: "Le moment d'inertie J traduit :", choix: ["l'élasticité d'un matériau", "la vitesse maximale d'un moteur", "la résistance d'un solide à la mise en rotation", "le frottement dans une liaison"], bonne: 2, expl: "Plus J est grand, plus il faut de couple pour accélérer.", niv: 1 },
        { q: "Un ascenseur de 800 kg monte en accélérant à 1 m/s² (g = 9,81 m/s²). Tension du câble ?", choix: ["800 N", "7 848 N", "8 648 N", "7 048 N"], bonne: 2, expl: "T = m × (g + a) = 800 × 10,81 = 8 648 N. 7 848 N vaut seulement le poids.", niv: 2 },
        { q: "Le même ascenseur de 800 kg monte à vitesse constante. Tension du câble ?", choix: ["8 648 N", "7 848 N", "0 N", "800 N"], bonne: 1, expl: "a = 0 : la tension compense exactement le poids, 800 × 9,81 = 7 848 N.", niv: 3 },
        { q: "En rotation, le principe fondamental de la dynamique s'écrit :", choix: ["somme des couples = J × dω/dt", "somme des couples = J × ω", "somme des couples = m × a", "somme des couples = ½ × J × ω²"], bonne: 0, expl: "½ × J × ω² est l'énergie cinétique de rotation.", niv: 1 },
        { q: "Cylindre plein de masse 4 kg et de rayon 0,1 m, avec J = ½ × m × R². Moment d'inertie ?", choix: ["0,002 kg·m²", "0,2 kg·m²", "0,04 kg·m²", "0,02 kg·m²"], bonne: 3, expl: "½ × 4 × 0,01 = 0,02 kg·m². 0,04 oublie le ½.", niv: 2 },
        { q: "Une charge d'inertie J est entraînée par un réducteur de rapport k = 1/10. Vue de l'arbre moteur, son inertie vaut :", choix: ["J / 10", "J / 100", "10 × J", "100 × J"], bonne: 1, expl: "L'inertie ramenée vaut J × k² = J / 100.", niv: 3 },
        { q: "Couple résistant 2 N·m ; on accélère une inertie de 0,1 kg·m² à 20 rad/s². Couple moteur nécessaire ?", choix: ["22 N·m", "2 N·m", "40 N·m", "4 N·m"], bonne: 3, expl: "C = J × dω/dt + Cr = 0,1 × 20 + 2 = 4 N·m.", niv: 2 },
        { q: "L'unité du moment d'inertie est :", choix: ["le kg·m²", "le N·m", "le kg·m/s", "le rad/s²"], bonne: 0, expl: "Le N·m est l'unité d'un couple.", niv: 1 },
        { q: "Pourquoi le couple moteur est-il plus grand au démarrage qu'à vitesse constante ?", choix: ["La tension baisse au démarrage", "Le couple résistant disparaît ensuite", "Il faut aussi accélérer les inerties", "L'inertie diminue avec la vitesse"], bonne: 2, expl: "Au démarrage, C = J × dω/dt + Cr ; ensuite, il ne reste que Cr.", niv: 3 },
      ] },
    { chapitre: 'si-7',
      fiche: `## La résistance des matériaux

### Pourquoi la résistance des matériaux ?
- Une pièce doit supporter les efforts **sans se rompre** et **sans trop se déformer**. La résistance des matériaux (RDM) permet de le vérifier et de choisir la forme, les dimensions et le matériau.
- Les sollicitations simples : **traction**, compression, **flexion**, torsion, cisaillement.

### La contrainte
- Dans une barre en traction, l'effort se répartit sur la section : la **contrainte normale** vaut **σ = F / S**.
- Unité : le **mégapascal** (MPa). **1 MPa = 1 N/mm²**. Avec F en N et S en mm², on obtient directement des MPa.
- Exemple : effort de 5 000 N sur une section de 50 mm² : σ = 100 MPa.

### La déformation et la loi de Hooke
- La **déformation** (ou allongement relatif) vaut **ε = ΔL / L0**, sans unité.
- Dans le **domaine élastique**, la pièce reprend sa forme quand on retire la charge, et **σ = E × ε** (loi de Hooke).
- **E** est le **module d'Young** : il mesure la **rigidité** du matériau. Acier : environ 200 000 MPa ; aluminium : environ 70 000 MPa, soit à peu près trois fois moins.
- Exemple : σ = 100 MPa dans un acier de module 200 000 MPa : ε = 0,0005. Une barre de 2 m s'allonge alors de 1 mm.
- Au-delà de la **limite élastique Re**, la déformation devient **permanente** ; plus loin encore, la pièce **rompt**.

### La condition de résistance
- On ne charge jamais une pièce jusqu'à sa limite : on prend une marge, le **coefficient de sécurité** s.
- **Condition : σ max ≤ Re / s**. Exemple : Re = 300 MPa et s = 2 : la contrainte ne doit pas dépasser 150 MPa.
- Inversement, le coefficient de sécurité obtenu vaut Re / σ max. Exemple : 240 / 180 ≈ 1,33.

### La flexion
- Une **poutre** chargée perpendiculairement à son axe fléchit : le haut est comprimé, le bas tendu (ou l'inverse).
- La **flèche** est le déplacement maximal de la poutre. Elle diminue quand la **rigidité** augmente : un matériau plus rigide (E grand) ou une section mieux placée.
- Une section en **I** ou un tube placent la matière **loin du centre** : à masse égale, ils fléchissent beaucoup moins qu'une section pleine.

### La simulation
- Les logiciels de **simulation par éléments finis** découpent la pièce en petits éléments et calculent les contraintes et les déplacements en chaque point.
- On lit la **contrainte maximale** (souvent appelée contrainte de Von Mises) et le **déplacement maximal**, puis on les compare à la limite élastique et au cahier des charges.

### À retenir pour le bac
- σ = F / S en MPa (N/mm²) ; ε = ΔL / L0 ; σ = E × ε.
- Condition de résistance : σ max ≤ Re / s.
- Interpréter une simulation : contrainte maximale, déplacement, coefficient de sécurité.
- Piège : confondre résistance (Re, rupture) et rigidité (E, déformation).
- Piège : les unités, 1 MPa = 1 N/mm² et pas 1 N/m².`,
      cartes: [
        { q: "Contrainte normale en traction ?", r: "σ = F / S." },
        { q: "Que vaut 1 MPa ?", r: "1 N/mm²." },
        { q: "Définition de la déformation ?", r: "ε = ΔL / L0, sans unité." },
        { q: "Loi de Hooke ?", r: "σ = E × ε, dans le domaine élastique." },
        { q: "Qu'est-ce que le module d'Young ?", r: "Une grandeur qui mesure la rigidité d'un matériau, en MPa." },
        { q: "Ordres de grandeur de E ?", r: "Acier environ 200 000 MPa ; aluminium environ 70 000 MPa." },
        { q: "Qu'est-ce que le domaine élastique ?", r: "Le domaine où la pièce reprend sa forme quand on retire la charge." },
        { q: "Qu'est-ce que la limite élastique Re ?", r: "La contrainte au-delà de laquelle la déformation devient permanente." },
        { q: "Condition de résistance ?", r: "σ max ≤ Re / s, avec s le coefficient de sécurité." },
        { q: "Calcul d'un coefficient de sécurité obtenu ?", r: "s = Re / σ max." },
        { q: "Qu'est-ce que la flèche d'une poutre ?", r: "Son déplacement maximal sous la charge." },
        { q: "Intérêt d'une section en I ?", r: "La matière loin du centre rend la poutre plus rigide en flexion, à masse égale." },
        { q: "Que donne une simulation par éléments finis ?", r: "Les contraintes et les déplacements en chaque point de la pièce." },
      ],
      quiz: [
        { q: "Dans une barre en traction, la contrainte normale vaut :", choix: ["σ = F × L", "σ = F × S", "σ = S / F", "σ = F / S"], bonne: 3, expl: "L'effort se répartit sur la section.", niv: 1 },
        { q: "Une barre de section 50 mm² subit un effort de traction de 5 000 N. Quelle est la contrainte ?", choix: ["0,01 MPa", "250 000 MPa", "100 MPa", "5 050 MPa"], bonne: 2, expl: "σ = 5 000 / 50 = 100 N/mm² = 100 MPa.", niv: 2 },
        { q: "Acier de limite élastique 300 MPa, coefficient de sécurité 2. Contrainte maximale admissible ?", choix: ["150 MPa", "600 MPa", "298 MPa", "302 MPa"], bonne: 0, expl: "Re / s = 300 / 2 = 150 MPa.", niv: 2 },
        { q: "Dans le domaine élastique, la loi de Hooke s'écrit :", choix: ["σ = E / ε", "σ = E × ε", "ε = E × σ", "σ = E + ε"], bonne: 1, expl: "La contrainte est proportionnelle à la déformation.", niv: 1 },
        { q: "Une barre de 2 m subit une déformation ε = 0,001. De combien s'allonge-t-elle ?", choix: ["0,5 mm", "2 mm", "20 mm", "0,002 mm"], bonne: 1, expl: "ΔL = ε × L0 = 0,001 × 2 000 mm = 2 mm.", niv: 2 },
        { q: "Contrainte de 100 MPa dans un acier de module E = 200 000 MPa. Quelle est la déformation ε ?", choix: ["0,0005", "2 000", "0,005", "0,05"], bonne: 0, expl: "ε = σ / E = 100 / 200 000 = 0,0005.", niv: 3 },
        { q: "Dans le domaine élastique, quand on retire la charge, la pièce :", choix: ["se rompt", "garde une déformation permanente", "reprend sa forme initiale", "continue de s'allonger"], bonne: 2, expl: "La déformation permanente apparaît au-delà de la limite élastique.", niv: 1 },
        { q: "Un module d'Young élevé signifie qu'un matériau est :", choix: ["conducteur : il laisse passer le courant", "fragile : il casse facilement", "léger : il a une faible masse", "rigide : il se déforme peu"], bonne: 3, expl: "E mesure la rigidité, pas la résistance à la rupture ni la masse.", niv: 2 },
        { q: "Pourquoi les poutres métalliques ont-elles souvent une section en I ?", choix: ["La matière loin du centre limite la flexion", "Le I réduit la contrainte de traction", "Le I augmente le module d'Young", "La forme supprime le poids propre"], bonne: 0, expl: "À masse égale, la poutre est bien plus rigide en flexion.", niv: 3 },
        { q: "Simulation : contrainte maximale 180 MPa, limite élastique 240 MPa. Coefficient de sécurité obtenu ?", choix: ["4,32", "0,75", "60", "1,33"], bonne: 3, expl: "s = Re / σ max = 240 / 180 ≈ 1,33. 0,75 est le rapport inverse.", niv: 2 },
        { q: "1 MPa correspond à :", choix: ["1 kN/mm²", "1 N/m²", "1 N/mm²", "1 N/cm²"], bonne: 2, expl: "1 N/m², c'est 1 Pa, un million de fois moins.", niv: 1 },
        { q: "On remplace une pièce en acier par la même en aluminium (E trois fois plus faible). Sous la même charge :", choix: ["elle se déforme trois fois moins", "elle se déforme environ trois fois plus", "sa contrainte est divisée par trois", "elle résiste mieux à la rupture"], bonne: 1, expl: "La contrainte σ = F / S ne change pas ; ε = σ / E triple.", niv: 3 },
      ] },
    { chapitre: 'si-8',
      fiche: `## Moteurs électriques, convertisseurs et batteries

### Le moteur à courant continu
- Il convertit l'énergie électrique en énergie mécanique de rotation. Trois relations à connaître, avec k la constante du moteur :
- **E = k × Ω** : la force électromotrice E (V) est proportionnelle à la vitesse Ω (rad/s).
- **C = k × I** : le couple C (N·m) est proportionnel au courant I (A).
- **U = E + R × I** : la tension d'alimentation couvre la force électromotrice et la chute de tension dans la résistance R de l'induit.
- Conséquences : la **vitesse** dépend surtout de la **tension** ; le **couple** dépend du **courant**.
- Exemples : k = 0,05 V·s/rad et Ω = 200 rad/s donnent E = 10 V. Avec U = 12 V, R = 1 Ω et I = 2 A : E = 12 - 2 = 10 V. Pour fournir 0,2 N·m avec k = 0,05 N·m/A, il faut I = 4 A.
- Bilan de puissance : puissance absorbée U × I ; pertes par effet Joule R × I² ; puissance électromagnétique E × I.

### Les autres moteurs
- **Moteur sans balais** (brushless, synchrone) : très bon rendement, peu d'entretien ; il demande une électronique de commande. Fréquent dans les drones, trottinettes et vélos électriques.
- **Moteur pas à pas** : il tourne par petits angles réguliers, sans capteur ; utilisé dans les imprimantes 3D.
- **Moteur asynchrone** : robuste, alimenté en alternatif ; utilisé dans l'industrie.

### Les convertisseurs
- **Hacheur** : continu → continu réglable. Il ouvre et ferme très vite un interrupteur. Le **rapport cyclique α** est la fraction de la période où l'interrupteur est fermé. **Tension moyenne = α × U**. Exemple : 24 V et α = 0,75 donnent 18 V.
- **Onduleur** : continu → alternatif (pour alimenter un moteur synchrone ou injecter de l'électricité solaire dans le réseau).
- **Redresseur** : alternatif → continu (chargeur de batterie).
- Ces convertisseurs ont un **excellent rendement** (souvent plus de 90 %), contrairement à une résistance qui dissiperait l'énergie en chaleur.

### Les batteries
- **Capacité** Q en ampères-heures (A·h) ; **énergie** E = U × Q en wattheures.
- **En série** : les tensions s'additionnent, la capacité reste la même. Trois éléments de 3,6 V et 2 A·h donnent 10,8 V et 2 A·h.
- **En parallèle** : les capacités s'additionnent, la tension reste la même. Deux éléments de 3,6 V et 2 A·h donnent 3,6 V et 4 A·h, soit 14,4 Wh.
- **État de charge** : pourcentage d'énergie restante. On évite de vider complètement une batterie lithium, ce qui l'abîme.
- Un **système de gestion de batterie** surveille tensions, courants et températures.

### À retenir pour le bac
- E = k × Ω ; C = k × I ; U = E + R × I.
- Hacheur : tension moyenne = α × U.
- Série : tensions additionnées ; parallèle : capacités additionnées.
- Savoir quel convertisseur choisir : hacheur, onduleur, redresseur.
- Piège : le couple d'un moteur à courant continu dépend du courant, pas de la tension.`,
      cartes: [
        { q: "Force électromotrice d'un moteur à courant continu ?", r: "E = k × Ω : proportionnelle à la vitesse." },
        { q: "Couple d'un moteur à courant continu ?", r: "C = k × I : proportionnel au courant." },
        { q: "Équation électrique du moteur à courant continu ?", r: "U = E + R × I." },
        { q: "De quoi dépend surtout la vitesse d'un moteur à courant continu ?", r: "De la tension d'alimentation." },
        { q: "Rôle d'un hacheur ?", r: "Convertir un continu fixe en continu réglable : tension moyenne = α × U." },
        { q: "Qu'est-ce que le rapport cyclique ?", r: "La fraction de la période pendant laquelle l'interrupteur du hacheur est fermé." },
        { q: "Rôle d'un onduleur ?", r: "Convertir du continu en alternatif." },
        { q: "Rôle d'un redresseur ?", r: "Convertir de l'alternatif en continu." },
        { q: "Éléments de batterie en série ?", r: "Les tensions s'additionnent, la capacité reste la même." },
        { q: "Éléments de batterie en parallèle ?", r: "Les capacités s'additionnent, la tension reste la même." },
        { q: "Pertes par effet Joule dans un moteur ?", r: "R × I²." },
        { q: "Avantage d'un moteur sans balais ?", r: "Très bon rendement et peu d'entretien, mais il demande une électronique de commande." },
        { q: "Pourquoi un hacheur plutôt qu'une résistance pour régler la vitesse ?", r: "Le hacheur a un excellent rendement ; une résistance perdrait l'énergie en chaleur." },
      ],
      quiz: [
        { q: "Dans un moteur à courant continu, le couple est proportionnel :", choix: ["à la vitesse", "à la tension", "au courant", "de la résistance du bobinage"], bonne: 2, expl: "C = k × I. La vitesse, elle, dépend surtout de la tension.", niv: 1 },
        { q: "Moteur à courant continu : k = 0,05 V·s/rad, vitesse 200 rad/s. Force électromotrice ?", choix: ["4 000 V", "10 V", "0,00025 V", "200,05 V"], bonne: 1, expl: "E = k × Ω = 0,05 × 200 = 10 V.", niv: 2 },
        { q: "Un hacheur alimenté en 24 V a un rapport cyclique de 0,75. Tension moyenne aux bornes du moteur ?", choix: ["24 V", "32 V", "6 V", "18 V"], bonne: 3, expl: "U moy = α × U = 0,75 × 24 = 18 V.", niv: 2 },
        { q: "Un onduleur convertit :", choix: ["du continu en alternatif", "de l'alternatif en continu", "du continu en continu réglable", "du mécanique en électrique"], bonne: 0, expl: "L'alternatif en continu, c'est le redresseur.", niv: 1 },
        { q: "Moteur à courant continu : U = 12 V, R = 1 Ω, I = 2 A. Force électromotrice E ?", choix: ["10 V", "14 V", "6 V", "12 V"], bonne: 0, expl: "E = U - R × I = 12 - 1 × 2 = 10 V.", niv: 2 },
        { q: "Moteur à courant continu : k = 0,05 N·m/A ; il doit fournir 0,2 N·m. Quel courant absorbe-t-il ?", choix: ["0,25 A", "0,01 A", "4 A", "40 A"], bonne: 2, expl: "I = C / k = 0,2 / 0,05 = 4 A.", niv: 3 },
        { q: "Le rapport cyclique α d'un hacheur est :", choix: ["le rapport entre deux tensions de batterie", "la part de la période où l'interrupteur est fermé", "le nombre de périodes par seconde", "un rendement du hacheur"], bonne: 1, expl: "Le nombre de périodes par seconde est la fréquence de découpage.", niv: 1 },
        { q: "Trois éléments de batterie de 3,6 V et 2 A·h sont montés en série. On obtient :", choix: ["3,6 V et 2 A·h", "3,6 V et 6 A·h", "10,8 V et 6 A·h", "10,8 V et 2 A·h"], bonne: 3, expl: "En série, les tensions s'additionnent et la capacité ne change pas.", niv: 2 },
        { q: "Pourquoi régler la vitesse d'un moteur avec un hacheur plutôt qu'avec une résistance en série ?", choix: ["La résistance est plus encombrante", "La résistance augmente la vitesse", "Le hacheur supprime le couple résistant", "Le hacheur a un bien meilleur rendement"], bonne: 3, expl: "La résistance dissiperait une grande partie de l'énergie en chaleur.", niv: 3 },
        { q: "Un redresseur convertit :", choix: ["du continu en alternatif", "de l'alternatif en continu", "une tension en vitesse", "de l'énergie chimique en électrique"], bonne: 1, expl: "C'est le cœur d'un chargeur de batterie branché sur le secteur.", niv: 2 },
        { q: "La vitesse d'un moteur à courant continu est à peu près proportionnelle :", choix: ["au couple résistant", "au courant absorbé", "à la tension d'alimentation", "à la température"], bonne: 2, expl: "U ≈ E = k × Ω quand R × I est petit.", niv: 1 },
        { q: "Deux éléments identiques de 3,6 V et 2 A·h montés en parallèle stockent une énergie de :", choix: ["14,4 Wh", "7,2 Wh", "28,8 Wh", "3,6 Wh"], bonne: 0, expl: "3,6 V et 4 A·h : E = 3,6 × 4 = 14,4 Wh. 7,2 Wh est l'énergie d'un seul élément.", niv: 3 },
      ] },
    { chapitre: 'si-9',
      fiche: `## Les systèmes asservis

### Boucle ouverte et boucle fermée
- En **boucle ouverte**, on envoie un ordre sans vérifier le résultat : un grille-pain chauffe pendant un temps réglé, quelle que soit la couleur du pain.
- En **boucle fermée** (système **asservi**), un **capteur** mesure la sortie et la renvoie vers l'entrée : le système **corrige** lui-même ses écarts. Exemples : régulateur de vitesse d'une voiture, chauffage avec thermostat, drone qui garde son altitude.

### La structure d'un asservissement
- La **consigne** : la valeur voulue (90 km/h, 20 °C).
- Le **comparateur** calcule l'**écart** : **ε = consigne - mesure**.
- Le **correcteur** transforme l'écart en commande (souvent dans le microcontrôleur).
- L'**actionneur** et le système produisent la **sortie**.
- Le **capteur** mesure la sortie et renvoie la **mesure** au comparateur.
- Une **perturbation** est une grandeur extérieure qui écarte la sortie de la consigne : une montée pour un véhicule, une fenêtre ouverte pour un chauffage. La boucle fermée permet de la compenser.

### Les trois critères de performance
- **Stabilité** : la sortie se stabilise au lieu d'osciller sans fin ou de diverger. Un **dépassement** (la sortie dépasse la consigne avant de revenir) se mesure en %.
- **Précision** : l'**erreur statique** est l'écart qui reste en régime établi. Consigne 20 °C, mesure finale 19,5 °C : erreur de 0,5 °C.
- **Rapidité** : le **temps de réponse à 5 %** est le temps au bout duquel la sortie reste à moins de 5 % de sa valeur finale.

### Le modèle du premier ordre
- Beaucoup de systèmes (moteur, four) répondent à un échelon comme un **premier ordre** : la sortie monte sans dépasser, de plus en plus lentement.
- **Gain statique** K = variation de la sortie / variation de l'entrée, en régime établi. Échelon de 10 V, sortie finale 5 000 tr/min : K = 500 tr/min par volt.
- **Constante de temps** τ : au bout de τ, la sortie atteint **63 %** de sa valeur finale. Le temps de réponse à 5 % vaut environ **3τ**.

### La boucle fermée et le correcteur
- Avec un retour unitaire et un gain total K (système et correcteur proportionnel), la sortie finale vaut **consigne × K / (1 + K)**. Exemple : K = 9 et consigne 100 : sortie finale 90, erreur statique 10.
- **Correcteur proportionnel** (gain Kp) : augmenter Kp rend le système **plus rapide** et **plus précis**, mais crée des **dépassements** et peut le rendre **instable**. Il faut un compromis.
- **Correcteur intégral** : il accumule l'écart dans le temps et **annule l'erreur statique**, mais peut ralentir ou faire osciller le système.

### À retenir pour le bac
- Repérer consigne, comparateur, correcteur, actionneur, capteur et perturbation sur un schéma-bloc.
- Lire sur une courbe : valeur finale, erreur statique, dépassement, temps de réponse à 5 %.
- Premier ordre : 63 % à τ ; temps de réponse à 5 % d'environ 3τ.
- Piège : un gain proportionnel trop fort améliore la précision mais dégrade la stabilité.
- Comparer les performances mesurées aux exigences du cahier des charges.`,
      cartes: [
        { q: "Boucle ouverte ou boucle fermée ?", r: "Ouverte : pas de mesure de la sortie. Fermée : un capteur renvoie la sortie pour corriger l'écart." },
        { q: "Formule de l'écart ?", r: "ε = consigne - mesure." },
        { q: "Rôle du correcteur ?", r: "Transformer l'écart en commande pour l'actionneur." },
        { q: "Qu'est-ce qu'une perturbation ?", r: "Une grandeur extérieure qui écarte la sortie de la consigne." },
        { q: "Les trois critères de performance ?", r: "Stabilité, précision, rapidité." },
        { q: "Qu'est-ce que l'erreur statique ?", r: "L'écart entre consigne et sortie qui reste en régime établi." },
        { q: "Qu'est-ce que le temps de réponse à 5 % ?", r: "Le temps au bout duquel la sortie reste à moins de 5 % de sa valeur finale." },
        { q: "Qu'est-ce que le gain statique ?", r: "Variation de la sortie / variation de l'entrée, en régime établi." },
        { q: "Que se passe-t-il au bout de τ pour un premier ordre ?", r: "La sortie atteint 63 % de sa valeur finale." },
        { q: "Temps de réponse à 5 % d'un premier ordre ?", r: "Environ 3τ." },
        { q: "Effet d'un gain proportionnel plus fort ?", r: "Plus rapide et plus précis, mais plus de dépassement et un risque d'instabilité." },
        { q: "Rôle d'un correcteur intégral ?", r: "Annuler l'erreur statique." },
        { q: "Sortie finale en boucle fermée à retour unitaire ?", r: "Consigne × K / (1 + K), avec K le gain total." },
      ],
      quiz: [
        { q: "Dans un système asservi, l'écart est :", choix: ["la somme de la consigne et de la mesure", "la différence entre consigne et mesure", "la vitesse maximale du système", "le gain du correcteur"], bonne: 1, expl: "ε = consigne - mesure : c'est ce que le correcteur cherche à réduire.", niv: 1 },
        { q: "Consigne de température 20 °C ; température mesurée en régime établi 19,5 °C. Erreur statique ?", choix: ["2,5 °C", "19,5 °C", "39,5 °C", "0,5 °C"], bonne: 3, expl: "20 - 19,5 = 0,5 °C.", niv: 2 },
        { q: "Système du premier ordre de constante de temps τ = 2 s. Temps de réponse à 5 %, environ ?", choix: ["6 s", "2 s", "0,67 s", "4 s"], bonne: 0, expl: "Environ 3τ = 6 s. Au bout de 2 s, la sortie n'est qu'à 63 %.", niv: 2 },
        { q: "Ce qui distingue un système en boucle fermée d'un système en boucle ouverte, c'est :", choix: ["l'absence de consigne", "la présence d'un moteur", "la mesure de la sortie renvoyée vers l'entrée", "un rendement plus élevé"], bonne: 2, expl: "Le retour par un capteur permet de corriger les écarts.", niv: 1 },
        { q: "Premier ordre : échelon d'entrée de 10 V, sortie finale 5 000 tr/min. Gain statique ?", choix: ["5 010 tr/min par V", "50 000 tr/min par V", "0,002 V par tr/min", "500 tr/min par V"], bonne: 3, expl: "K = 5 000 / 10 = 500 tr/min par volt.", niv: 2 },
        { q: "On augmente fortement le gain d'un correcteur proportionnel. Quel est le risque principal ?", choix: ["un système beaucoup plus lent", "des dépassements, voire une instabilité", "une erreur statique plus grande", "une consigne impossible à régler"], bonne: 1, expl: "Le système devient plus rapide et plus précis, mais il oscille de plus en plus.", niv: 3 },
        { q: "Le temps de réponse à 5 % mesure :", choix: ["la stabilité", "la précision", "la rapidité", "le rendement"], bonne: 2, expl: "La précision se mesure avec l'erreur statique.", niv: 1 },
        { q: "Premier ordre soumis à un échelon : la sortie atteint 63 % de sa valeur finale au bout de :", choix: ["τ", "3τ", "τ / 2", "10τ"], bonne: 0, expl: "Au bout de 3τ, elle atteint 95 %.", niv: 2 },
        { q: "Boucle fermée à retour unitaire ; gain total K = 9 ; consigne 100. Quelle est la sortie finale ?", choix: ["9", "10", "90", "50"], bonne: 2, expl: "100 × 9 / (1 + 9) = 90. Il reste une erreur statique de 10.", niv: 3 },
        { q: "Un correcteur intégral sert surtout à :", choix: ["annuler l'erreur statique", "réduire le prix du système", "remplacer le capteur", "diminuer la consigne"], bonne: 0, expl: "Il accumule l'écart tant qu'il n'est pas nul.", niv: 2 },
        { q: "Dans un système asservi, une perturbation est :", choix: ["le gain du correcteur", "un ordre envoyé par l'utilisateur", "le signal renvoyé par le capteur", "une grandeur extérieure qui écarte la sortie"], bonne: 3, expl: "Exemple : une montée pour un régulateur de vitesse.", niv: 1 },
        { q: "Un régulateur de vitesse garde 90 km/h dans une montée. Comment ?", choix: ["La montée ne change pas l'effort résistant", "La vitesse mesurée baisse et le correcteur augmente la commande", "La voiture fonctionne en boucle ouverte", "La consigne baisse pendant la montée"], bonne: 1, expl: "La boucle fermée détecte l'écart créé par la perturbation et le compense.", niv: 3 },
      ] },
    { chapitre: 'si-10',
      fiche: `## L'information : numérique, capteurs et communication

### Coder l'information
- Un **bit** vaut 0 ou 1. Un **octet** contient **8 bits**.
- Avec **n bits**, on code **2^n** valeurs : de 0 à 2^n - 1. Avec 8 bits : 256 valeurs, de 0 à 255.
- **Binaire** vers décimal : 1011 = 1 × 8 + 0 × 4 + 1 × 2 + 1 × 1 = 11.
- **Hexadécimal** (base 16, chiffres de 0 à 9 puis A à F) : un chiffre hexadécimal remplace 4 bits. 0xFF = 15 × 16 + 15 = 255.

### Les capteurs
- Un capteur transforme une grandeur physique (température, position, vitesse, lumière) en signal électrique.
- **Tout ou rien** (TOR) : deux états seulement, comme un fin de course ouvert ou fermé.
- **Analogique** : une tension qui varie de façon continue avec la grandeur (capteur de température).
- **Numérique** : il envoie directement un nombre (capteur qui communique par un bus).
- **Codeur incrémental** : il donne un nombre de points par tour. Avec 500 points par tour, la résolution vaut 360 / 500 = 0,72°.

### La conversion analogique-numérique
- Un **convertisseur analogique-numérique** (CAN) transforme une tension en nombre.
- Son **quantum** (ou résolution) vaut **plage de tension / 2^n**. Un CAN de 10 bits sur 0 à 5 V a un quantum de 5 / 1 024 ≈ 4,9 mV.
- Plus il y a de bits, plus la mesure est **fine**.
- L'**échantillonnage** consiste à prendre des mesures à intervalles réguliers. Pour bien reproduire un signal, la fréquence d'échantillonnage doit être au moins **le double** de la plus haute fréquence du signal (critère de Shannon). Un son jusqu'à 20 kHz demande au moins 40 kHz.

### Traiter l'information
- Un **microcontrôleur** lit les capteurs, exécute un **programme** et pilote les sorties.
- Le programme se décrit par un **algorigramme** ou un **diagramme d'états** : conditions, boucles, temporisations.
- Le traitement peut aussi filtrer une mesure bruitée, par exemple en faisant la moyenne de plusieurs valeurs.

### Communiquer
- Les systèmes échangent des données en **réseau** : wifi, Bluetooth, Ethernet, bus filaires (I2C, liaison série).
- Les données circulent en **trames** : en-tête (adresses), données, contrôle d'erreur.
- **Adresse IP** : identifie une machine dans un réseau. **Adresse MAC** : identifie la carte réseau.
- **Débit** en bit/s. **Durée de transmission** = taille en bits / débit. 2 Mo = 16 × 10^6 bits à 8 Mbit/s : 2 s au minimum.
- Le modèle **client-serveur** : un client envoie une requête, le serveur répond (une application de smartphone qui interroge un objet connecté).

### À retenir pour le bac
- 2^n valeurs avec n bits ; conversions binaire, décimal, hexadécimal.
- Quantum d'un CAN : plage / 2^n.
- Durée de transmission : taille en bits / débit, attention aux octets (× 8).
- Piège : 1 octet = 8 bits, et Mo (mégaoctet) n'est pas Mbit.
- Choisir un capteur adapté : TOR, analogique ou numérique, et sa résolution.`,
      cartes: [
        { q: "Combien de valeurs avec n bits ?", r: "2^n valeurs, de 0 à 2^n - 1." },
        { q: "Combien de bits dans un octet ?", r: "8 bits." },
        { q: "Que vaut 1011 en décimal ?", r: "8 + 2 + 1 = 11." },
        { q: "Que vaut 0xFF en décimal ?", r: "15 × 16 + 15 = 255." },
        { q: "Capteur tout ou rien ?", r: "Un capteur à deux états seulement : ouvert ou fermé." },
        { q: "Capteur analogique ?", r: "Il fournit une tension qui varie de façon continue avec la grandeur mesurée." },
        { q: "Résolution d'un codeur incrémental ?", r: "360° / nombre de points par tour." },
        { q: "Rôle d'un CAN ?", r: "Transformer une tension analogique en nombre." },
        { q: "Quantum d'un CAN ?", r: "Plage de tension / 2^n." },
        { q: "Critère de Shannon ?", r: "Échantillonner à au moins le double de la plus haute fréquence du signal." },
        { q: "Rôle d'une adresse IP ?", r: "Identifier une machine dans un réseau." },
        { q: "Durée de transmission ?", r: "Taille en bits / débit en bit/s." },
        { q: "Qu'est-ce qu'une trame ?", r: "Un paquet de données avec un en-tête (adresses), les données et un contrôle d'erreur." },
      ],
      quiz: [
        { q: "Avec n bits, on peut coder :", choix: ["2^n valeurs", "n² valeurs", "2 × n valeurs", "n valeurs"], bonne: 0, expl: "Chaque bit double le nombre de possibilités.", niv: 1 },
        { q: "Que vaut le nombre binaire 1011 en décimal ?", choix: ["1 011", "13", "11", "4"], bonne: 2, expl: "1 × 8 + 0 × 4 + 1 × 2 + 1 × 1 = 11.", niv: 2 },
        { q: "Un CAN de 10 bits mesure de 0 à 5 V. Quel est son quantum, environ ?", choix: ["9,8 mV", "0,5 V", "50 mV", "4,9 mV"], bonne: 3, expl: "5 / 2^10 = 5 / 1 024 ≈ 4,9 mV. 0,5 V divise par 10 au lieu de 2^10.", niv: 2 },
        { q: "Un capteur tout ou rien fournit :", choix: ["une tension proportionnelle à la grandeur", "deux états seulement", "des images numériques", "une valeur codée sur 16 bits"], bonne: 1, expl: "Exemple : un fin de course, ouvert ou fermé.", niv: 1 },
        { q: "Que vaut 0xFF en décimal ?", choix: ["15", "256", "255", "100"], bonne: 2, expl: "F vaut 15 : 15 × 16 + 15 = 255, la plus grande valeur sur un octet.", niv: 2 },
        { q: "Un fichier de 2 Mo est envoyé à 8 Mbit/s. Durée de transmission minimale ?", choix: ["128 s", "0,25 s", "16 s", "2 s"], bonne: 3, expl: "2 Mo = 16 × 10^6 bits ; 16 × 10^6 / 8 × 10^6 = 2 s. 0,25 s oublie de convertir les octets en bits.", niv: 3 },
        { q: "Un convertisseur analogique-numérique sert à :", choix: ["transformer une tension en nombre", "transformer un nombre en tension", "amplifier un signal faible", "filtrer un signal bruité"], bonne: 0, expl: "Transformer un nombre en tension, c'est le rôle d'un convertisseur numérique-analogique.", niv: 1 },
        { q: "Un codeur incrémental donne 500 points par tour. Quelle est sa résolution angulaire ?", choix: ["1,39°", "0,72°", "500°", "3,6°"], bonne: 1, expl: "360 / 500 = 0,72°.", niv: 2 },
        { q: "Pour numériser un son qui contient des fréquences jusqu'à 20 kHz, il faut échantillonner à au moins :", choix: ["20 kHz", "40 kHz", "10 kHz", "400 kHz"], bonne: 1, expl: "Critère de Shannon : au moins le double de la plus haute fréquence.", niv: 3 },
        { q: "Un octet contient :", choix: ["8 bits", "4 bits", "10 bits", "16 bits"], bonne: 0, expl: "4 bits correspondent à un chiffre hexadécimal.", niv: 2 },
        { q: "Dans un réseau, l'adresse IP sert à :", choix: ["alimenter la carte réseau", "mesurer le débit", "chiffrer les données", "identifier une machine"], bonne: 3, expl: "L'adresse MAC, elle, identifie la carte réseau.", niv: 1 },
        { q: "Pourquoi choisir un CAN avec davantage de bits ?", choix: ["Pour réduire la plage de mesure", "Pour mesurer des tensions plus élevées", "Pour mesurer la grandeur plus finement", "Pour supprimer l'échantillonnage"], bonne: 2, expl: "Le quantum, plage / 2^n, diminue quand n augmente.", niv: 3 },
      ] },
    { chapitre: 'si-11',
      fiche: `## Sciences physiques : mouvements et interactions

Cette partie est évaluée dans la partie « sciences physiques » de l'épreuve (environ 1 h). Les notions de première peuvent aussi être mobilisées.

### Décrire un mouvement
- On choisit un **système** (l'objet étudié) et un **référentiel** (le sol, supposé galiléen).
- Le **vecteur vitesse** est tangent à la trajectoire. Le **vecteur accélération** traduit la variation de la vitesse : a = dv / dt.
- **Mouvement rectiligne uniforme** : vitesse constante, accélération nulle.
- **Mouvement circulaire uniforme** : la valeur de la vitesse est constante, mais sa direction change. L'accélération est dirigée **vers le centre** et vaut **a = v² / R**. Exemple : 10 m/s sur un rayon de 50 m : a = 100 / 50 = 2 m/s².

### La deuxième loi de Newton
- Dans un référentiel galiléen : **somme des forces extérieures = m × a**.
- Exemple : une force unique de 50 N sur un objet de 10 kg : a = 50 / 10 = 5 m/s².
- **Première loi** (principe d'inertie) : si la somme des forces est nulle, le mouvement est rectiligne uniforme ou l'objet est immobile.
- **Troisième loi** : deux objets en interaction exercent l'un sur l'autre des forces opposées.

### La chute libre
- Un objet en **chute libre** n'est soumis qu'à son **poids** : son accélération vaut g (environ 9,8 m/s²), vers le bas.
- Lâché sans vitesse : **v = g × t** et **distance parcourue = ½ × g × t²**. Après 2 s : v = 19,6 m/s et 19,6 m parcourus.
- **Lancer horizontal** : la vitesse **horizontale reste constante** (aucune force horizontale), la vitesse verticale augmente comme en chute libre. La trajectoire est une **parabole**.

### L'énergie mécanique
- **Énergie cinétique** : Ec = ½ × m × v². Pour 2 kg à 3 m/s : Ec = 9 J.
- **Énergie potentielle de pesanteur** : Ep = m × g × h.
- **Énergie mécanique** : Em = Ec + Ep.
- **Sans frottement**, l'énergie mécanique **se conserve**. Un objet qui glisse sans frottement d'une hauteur h depuis le repos arrive en bas avec v = racine de (2 × g × h). Pour h = 5 m et g = 10 m/s² : v = 10 m/s.
- **Avec frottements**, une partie de l'énergie mécanique est **transformée en énergie thermique** : l'énergie mécanique diminue.
- **Théorème de l'énergie cinétique** : la variation d'énergie cinétique est égale à la somme des **travaux** des forces. Travail d'une force constante : W = F × d × cos α.

### À retenir pour le bac
- Deuxième loi de Newton : somme des forces = m × a, dans un référentiel galiléen.
- Chute libre : v = g × t, distance = ½ × g × t² ; lancer horizontal : vitesse horizontale constante.
- Mouvement circulaire uniforme : accélération vers le centre, a = v² / R.
- Conservation de l'énergie mécanique sans frottement.
- Piège : en mouvement circulaire uniforme, l'accélération n'est pas nulle.`,
      cartes: [
        { q: "Deuxième loi de Newton ?", r: "Dans un référentiel galiléen, somme des forces extérieures = m × a." },
        { q: "Principe d'inertie ?", r: "Si la somme des forces est nulle, l'objet est immobile ou en mouvement rectiligne uniforme." },
        { q: "Troisième loi de Newton ?", r: "Deux objets en interaction exercent l'un sur l'autre des forces opposées." },
        { q: "Qu'est-ce qu'une chute libre ?", r: "Un mouvement où le seul effort est le poids : l'accélération vaut g." },
        { q: "Vitesse et distance en chute libre depuis le repos ?", r: "v = g × t et distance = ½ × g × t²." },
        { q: "Lancer horizontal sans frottement ?", r: "Vitesse horizontale constante, chute verticale comme en chute libre : trajectoire parabolique." },
        { q: "Accélération en mouvement circulaire uniforme ?", r: "Dirigée vers le centre, de valeur v² / R." },
        { q: "Énergie cinétique ?", r: "Ec = ½ × m × v²." },
        { q: "Énergie potentielle de pesanteur ?", r: "Ep = m × g × h." },
        { q: "Énergie mécanique ?", r: "Em = Ec + Ep ; elle se conserve sans frottement." },
        { q: "Effet des frottements sur l'énergie mécanique ?", r: "Une partie est transformée en énergie thermique : l'énergie mécanique diminue." },
        { q: "Théorème de l'énergie cinétique ?", r: "La variation de Ec est égale à la somme des travaux des forces." },
        { q: "Vitesse en bas d'une descente sans frottement depuis le repos ?", r: "v = racine de (2 × g × h)." },
      ],
      quiz: [
        { q: "Dans un référentiel galiléen, la deuxième loi de Newton s'écrit :", choix: ["a = m × somme des forces", "somme des forces = m × v", "somme des forces = 0", "somme des forces = m × a"], bonne: 3, expl: "Somme des forces = 0 correspond au principe d'inertie.", niv: 1 },
        { q: "Un objet est lâché sans vitesse, en chute libre (g = 9,8 m/s²). Quelle est sa vitesse après 2 s ?", choix: ["9,8 m/s", "19,6 m/s", "39,2 m/s", "4,9 m/s"], bonne: 1, expl: "v = g × t = 9,8 × 2 = 19,6 m/s.", niv: 2 },
        { q: "Le même objet, lâché sans vitesse : quelle distance parcourt-il en 2 s ?", choix: ["9,8 m", "39,2 m", "19,6 m", "78,4 m"], bonne: 2, expl: "½ × 9,8 × 2² = 19,6 m. 39,2 m oublie le ½.", niv: 2 },
        { q: "Dans un mouvement circulaire uniforme, l'accélération est :", choix: ["dirigée vers le centre", "nulle", "tangente à la trajectoire", "dirigée vers l'extérieur"], bonne: 0, expl: "La direction de la vitesse change : l'accélération n'est pas nulle.", niv: 1 },
        { q: "Un objet de 2 kg se déplace à 3 m/s. Quelle est son énergie cinétique ?", choix: ["6 J", "9 J", "18 J", "3 J"], bonne: 1, expl: "Ec = ½ × 2 × 3² = 9 J. 18 J oublie le ½.", niv: 2 },
        { q: "Un objet glisse sans frottement d'une hauteur de 5 m, depuis le repos (g = 10 m/s²). Sa vitesse en bas ?", choix: ["100 m/s", "50 m/s", "10 m/s", "5 m/s"], bonne: 2, expl: "m × g × h = ½ × m × v², donc v = racine de (2 × 10 × 5) = 10 m/s.", niv: 3 },
        { q: "Sans frottement, l'énergie mécanique d'un système :", choix: ["vaut l'énergie cinétique", "augmente avec la vitesse", "diminue avec l'altitude", "se conserve"], bonne: 3, expl: "L'énergie cinétique et l'énergie potentielle s'échangent, mais leur somme reste constante.", niv: 1 },
        { q: "Une voiture roule à 10 m/s sur un virage circulaire de rayon 50 m, à vitesse constante. Accélération ?", choix: ["2 m/s²", "0,2 m/s²", "0,5 m/s²", "1 m/s²"], bonne: 0, expl: "a = v² / R = 100 / 50 = 2 m/s².", niv: 2 },
        { q: "Une balle est lancée horizontalement. Sans frottement, sa vitesse horizontale :", choix: ["reste constante", "augmente", "diminue jusqu'à zéro", "double à chaque seconde"], bonne: 0, expl: "Aucune force n'agit horizontalement : la composante horizontale ne change pas.", niv: 3 },
        { q: "Une force unique de 50 N s'exerce sur un objet de 10 kg. Son accélération vaut :", choix: ["60 m/s²", "500 m/s²", "0,2 m/s²", "5 m/s²"], bonne: 3, expl: "a = F / m = 50 / 10 = 5 m/s².", niv: 2 },
        { q: "L'énergie potentielle de pesanteur s'écrit :", choix: ["Ep = ½ × m × v²", "Ep = m × g × h", "Ep = m × g / h", "Ep = m × h"], bonne: 1, expl: "½ × m × v² est l'énergie cinétique.", niv: 1 },
        { q: "Quand il y a des frottements, une partie de l'énergie mécanique est :", choix: ["gardée sous forme cinétique", "créée par le mouvement", "transformée en énergie thermique", "transformée en masse"], bonne: 2, expl: "L'énergie ne se crée pas : elle se transforme, ici en chaleur.", niv: 3 },
      ] },
    { chapitre: 'si-12',
      fiche: `## Sciences physiques : énergie, circuits et ondes

Cette partie est évaluée dans la partie « sciences physiques » de l'épreuve. Les notions de première peuvent aussi être mobilisées.

### Le condensateur et le circuit RC
- Un **condensateur** stocke des charges : **q = C × u**, avec C la **capacité** en farads (F). On utilise souvent le µF (10^-6 F).
- Il stocke une énergie **E = ½ × C × u²**. Un condensateur de 100 µF chargé sous 10 V stocke ½ × 10^-4 × 100 = 5 × 10^-3 J, soit 5 mJ.
- Dans un circuit **RC** soumis à un échelon de tension E, le condensateur se charge progressivement. La **constante de temps** vaut **τ = R × C**.
- Au bout de τ, la tension atteint **63 %** de E ; au bout de **5τ**, la charge est considérée comme terminée.
- Exemple : R = 10 kΩ et C = 100 µF : τ = 10^4 × 10^-4 = 1 s.

### Les transferts thermiques
- Trois modes : la **conduction** (de proche en proche dans un solide, sans déplacement de matière), la **convection** (déplacement d'un fluide, comme l'air chaud qui monte), le **rayonnement** (ondes électromagnétiques, comme la chaleur du soleil).
- Le **flux thermique** à travers une paroi vaut **Φ = ΔT / Rth**, en watts, avec Rth la **résistance thermique** en K/W. Exemple : Rth = 0,05 K/W et ΔT = 20 °C : Φ = 400 W.
- Un **isolant** épais augmente la résistance thermique : les pertes diminuent.
- **Énergie pour chauffer** un corps : **Q = m × c × ΔT**, avec c la capacité thermique massique. Pour 2 kg d'eau (c = 4 180 J/(kg·°C)) de 20 °C à 70 °C : Q = 2 × 4 180 × 50 = 418 000 J.

### Les ondes
- Une **onde** transporte de l'énergie sans transport de matière.
- **Ondes mécaniques** : elles ont besoin d'un milieu (le son, environ 340 m/s dans l'air). **Ondes électromagnétiques** : elles se propagent aussi dans le vide (la lumière, environ 3 × 10^8 m/s, les ondes radio et wifi).
- Pour une onde périodique : **période** T (s), **fréquence f = 1 / T** (Hz), **longueur d'onde** λ (m), et **v = λ × f**.
- Exemples : un son de 680 Hz dans l'air a une longueur d'onde de 340 / 680 = 0,5 m. Une période de 2 ms correspond à une fréquence de 500 Hz.
- La lumière transporte aussi son énergie par **photons** : E = h × f, avec h la constante de Planck.

### À retenir pour le bac
- τ = R × C ; 63 % au bout de τ ; charge terminée vers 5τ ; E = ½ × C × u².
- Φ = ΔT / Rth ; Q = m × c × ΔT ; conduction, convection, rayonnement.
- v = λ × f et f = 1 / T.
- Piège : convertir les µF, kΩ et ms avant de calculer.
- Piège : une onde transporte de l'énergie, pas de matière.`,
      cartes: [
        { q: "Relation charge, capacité, tension ?", r: "q = C × u." },
        { q: "Énergie stockée dans un condensateur ?", r: "E = ½ × C × u²." },
        { q: "Constante de temps d'un circuit RC ?", r: "τ = R × C." },
        { q: "Tension au bout de τ lors d'une charge ?", r: "Environ 63 % de la tension finale." },
        { q: "Quand la charge est-elle terminée ?", r: "Vers 5τ." },
        { q: "Les trois modes de transfert thermique ?", r: "Conduction, convection, rayonnement." },
        { q: "Flux thermique à travers une paroi ?", r: "Φ = ΔT / Rth, en watts." },
        { q: "Énergie pour chauffer un corps ?", r: "Q = m × c × ΔT." },
        { q: "Onde mécanique ou électromagnétique ?", r: "Mécanique : il faut un milieu (son). Électromagnétique : propagation possible dans le vide (lumière)." },
        { q: "Relation entre célérité, longueur d'onde et fréquence ?", r: "v = λ × f." },
        { q: "Relation entre fréquence et période ?", r: "f = 1 / T." },
        { q: "Vitesse du son dans l'air et de la lumière ?", r: "Environ 340 m/s et 3 × 10^8 m/s." },
        { q: "Énergie d'un photon ?", r: "E = h × f." },
      ],
      quiz: [
        { q: "La constante de temps d'un circuit RC vaut :", choix: ["τ = C / R", "τ = R / C", "τ = R × C", "τ = R + C"], bonne: 2, expl: "Avec R en ohms et C en farads, τ est en secondes.", niv: 1 },
        { q: "R = 10 kΩ et C = 100 µF. Quelle est la constante de temps ?", choix: ["1 s", "10 s", "100 s", "1 000 s"], bonne: 0, expl: "τ = 10^4 × 10^-4 = 1 s. Il faut convertir les kΩ et les µF.", niv: 2 },
        { q: "Un son de 680 Hz se propage dans l'air à 340 m/s. Quelle est sa longueur d'onde ?", choix: ["2 m", "0,5 m", "231 200 m", "1 020 m"], bonne: 1, expl: "λ = v / f = 340 / 680 = 0,5 m.", niv: 2 },
        { q: "La relation entre célérité, longueur d'onde et fréquence est :", choix: ["v = λ + f", "v = λ / f", "v = f / λ", "v = λ × f"], bonne: 3, expl: "La longueur d'onde est la distance parcourue pendant une période.", niv: 1 },
        { q: "Paroi de résistance thermique 0,05 K/W ; écart de température 20 °C. Flux thermique ?", choix: ["400 W", "1 W", "20,05 W", "0,0025 W"], bonne: 0, expl: "Φ = ΔT / Rth = 20 / 0,05 = 400 W.", niv: 2 },
        { q: "Énergie pour chauffer 2 kg d'eau de 20 °C à 70 °C, avec c = 4 180 J/(kg·°C) ?", choix: ["209 000 J", "8 360 J", "585 200 J", "418 000 J"], bonne: 3, expl: "Q = 2 × 4 180 × 50 = 418 000 J. 585 200 J utilise 70 au lieu de l'écart de 50.", niv: 3 },
        { q: "Le transfert thermique de proche en proche dans un solide s'appelle :", choix: ["le rayonnement", "la convection", "la conduction", "l'évaporation"], bonne: 2, expl: "La convection demande un fluide qui se déplace.", niv: 1 },
        { q: "Un condensateur de 100 µF est chargé sous 10 V. Quelle énergie stocke-t-il ?", choix: ["0,5 J", "5 mJ", "10 mJ", "50 mJ"], bonne: 1, expl: "E = ½ × 10^-4 × 10² = 5 × 10^-3 J = 5 mJ.", niv: 2 },
        { q: "Charge d'un circuit RC sous un échelon : au bout de τ, la tension du condensateur atteint environ :", choix: ["100 % de la valeur finale", "37 % de la valeur finale", "50 % de la valeur finale", "63 % de la valeur finale"], bonne: 3, expl: "37 % est ce qui reste à atteindre, ou la valeur lors d'une décharge.", niv: 3 },
        { q: "Une onde a une période de 2 ms. Quelle est sa fréquence ?", choix: ["2 Hz", "500 Hz", "0,5 Hz", "50 Hz"], bonne: 1, expl: "f = 1 / T = 1 / 0,002 = 500 Hz.", niv: 2 },
        { q: "La lumière est une onde :", choix: ["sonore", "mécanique", "électromagnétique", "longitudinale"], bonne: 2, expl: "Elle se propage dans le vide, contrairement au son.", niv: 1 },
        { q: "Pourquoi une épaisse couche d'isolant réduit-elle les pertes d'une maison ?", choix: ["Elle augmente la résistance thermique de la paroi", "Elle augmente l'écart de température", "Elle supprime le rayonnement solaire", "Elle diminue la masse d'air chauffée"], bonne: 0, expl: "Φ = ΔT / Rth : si Rth augmente, le flux perdu diminue.", niv: 3 },
      ] },
  ],

  methode: [
    { id: 'si-m1', mat: 'si', titre: "Calculer un écart et conclure sur le cahier des charges",
      formules: ["Calculer l'écart relatif entre la valeur mesurée et la valeur simulée", "Conclure sur le respect de l'exigence", "Proposer une cause aux écarts constatés", "Le système répond-il au cahier des charges ?"],
      vu: ["Présent dans presque tous les sujets d'ingénierie : la démarche compare souvent attendu, mesuré et simulé"], pts: "1 à 2 points par question",
      attendu: "Un calcul d'écart avec sa formule, la valeur de référence annoncée et un résultat en pourcentage, puis une phrase de conclusion qui cite l'exigence chiffrée du cahier des charges. Si l'écart est grand, une cause plausible : hypothèse du modèle trop simple, paramètre mal estimé, frottements négligés.",
      etapes: ["Repérer les trois valeurs : exigée (cahier des charges), mesurée (réel), simulée (modèle)", "Choisir la valeur de référence, en général la mesure, et l'écrire", "Calculer : écart relatif = (différence entre les deux valeurs, prise positive) / valeur de référence", "Comparer la mesure à l'exigence et conclure par oui ou non", "Si le modèle s'éloigne du réel, citer une hypothèse simplificatrice"],
      mots: ["écart relatif", "valeur de référence", "exigence", "cahier des charges", "modèle", "hypothèse simplificatrice", "conforme"],
      pieges: ["Calculer un écart sans dire par rapport à quoi", "Oublier de conclure par une phrase", "Comparer la simulation à l'exigence au lieu de la mesure", "Donner un écart sans unité ni pourcentage"],
      cas: "Un drone de prise de vue fictif doit voler au moins 20 min (exigence). Le modèle numérique prévoit 22 min ; l'essai réel donne 18,5 min.",
      question: "Calculer l'écart relatif entre le modèle et le réel, conclure sur l'exigence, puis proposer une cause à l'écart.",
      modele: `Écart relatif modèle-réel = (22 - 18,5) / 18,5 = 3,5 / 18,5 ≈ 0,19, soit environ 19 %, en prenant la mesure comme référence.

Exigence : au moins 20 min. Le drone réel vole 18,5 min : l'exigence n'est pas respectée.

Cause possible : le modèle néglige le vent ou suppose une batterie neuve et un rendement des moteurs trop optimiste. Il faut recaler le modèle avec les mesures avant de l'utiliser pour modifier le drone.`,
      grille: ["La formule de l'écart est écrite avec sa référence", "Le résultat est juste et donné en pourcentage", "La conclusion cite l'exigence chiffrée", "Une cause plausible de l'écart est proposée"] },

    { id: 'si-m2', mat: 'si', titre: "Chaîne de puissance : rendement global et puissance absorbée",
      formules: ["Calculer le rendement global de la chaîne de puissance", "Déterminer la puissance absorbée par le moteur", "Calculer le courant fourni par la batterie", "Compléter la chaîne de puissance"],
      vu: ["Très fréquent : presque chaque système étudié contient une batterie, un convertisseur, un moteur et une transmission"], pts: "1 à 3 points",
      attendu: "Les blocs de la chaîne dans l'ordre (alimenter, distribuer, convertir, transmettre), le rendement global comme produit des rendements, puis la puissance absorbée = puissance utile / rendement, et enfin le courant = puissance électrique / tension. Chaque résultat avec son unité.",
      etapes: ["Placer chaque composant dans la bonne fonction de la chaîne de puissance", "Multiplier les rendements de tous les blocs traversés", "Partir de la puissance utile en sortie et diviser par le rendement global", "Diviser la puissance électrique par la tension de la batterie pour avoir le courant", "Vérifier l'ordre de grandeur : la puissance absorbée est toujours plus grande que la puissance utile"],
      mots: ["alimenter", "distribuer", "convertir", "transmettre", "rendement global", "puissance utile", "puissance absorbée", "pertes"],
      pieges: ["Additionner les rendements au lieu de les multiplier", "Multiplier par le rendement au lieu de diviser pour remonter vers la source", "Oublier un bloc de la chaîne", "Confondre puissance (W) et énergie (Wh ou J)"],
      cas: "Un portail motorisé fictif : batterie 24 V, hacheur de rendement 0,95, moteur de rendement 0,8, réducteur de rendement 0,9. Le portail demande une puissance mécanique de 120 W.",
      question: "Calculer le rendement global, la puissance fournie par la batterie et le courant débité.",
      modele: `Rendement global = 0,95 × 0,8 × 0,9 = 0,684.

Puissance fournie par la batterie = 120 / 0,684 ≈ 175 W.

Courant = 175 / 24 ≈ 7,3 A.

Les pertes valent environ 175 - 120 = 55 W, surtout dans le moteur.`,
      grille: ["Les rendements sont multipliés", "La puissance absorbée est obtenue en divisant par le rendement", "Le courant est calculé avec la tension de la batterie", "Les unités sont écrites"] },

    { id: 'si-m3', mat: 'si', titre: "Dimensionner un moteur avec le principe fondamental de la dynamique",
      formules: ["Déterminer l'effort dans le câble pendant la phase d'accélération", "En déduire le couple sur le tambour", "Calculer le couple que doit fournir le moteur", "Le moteur choisi convient-il ?"],
      vu: ["Fréquent dans les sujets sur les ascenseurs, monte-charges, robots et véhicules"], pts: "2 à 3 points",
      attendu: "Un système isolé, le bilan des actions extérieures, l'application du principe fondamental de la dynamique (somme des forces = m × a) dans le bon sens, puis le passage au couple (effort × rayon) et au moteur en tenant compte du rapport de réduction et du rendement. Conclusion en comparant au couple disponible.",
      etapes: ["Isoler la charge et faire le bilan : poids vers le bas, tension du câble vers le haut", "Écrire le principe fondamental de la dynamique sur l'axe vertical : T - m × g = m × a", "Calculer le couple sur le tambour : C = T × rayon", "Remonter au moteur : couple moteur = couple tambour × rapport de réduction / rendement", "Comparer au couple nominal du moteur et conclure"],
      mots: ["système isolé", "bilan des actions mécaniques", "principe fondamental de la dynamique", "couple", "rapport de réduction", "rendement", "phase d'accélération"],
      pieges: ["Oublier le terme m × a et faire un calcul de statique", "Inverser le rapport de réduction", "Multiplier par le rendement au lieu de diviser", "Oublier de convertir les mm en m"],
      cas: "Un monte-charge fictif soulève 200 kg avec une accélération de 0,5 m/s². Le câble s'enroule sur un tambour de rayon 0,1 m, entraîné par un réducteur de rapport 1/20 et de rendement 0,9. Le moteur prévu fournit 12 N·m. On prend g = 9,81 m/s².",
      question: "Calculer la tension du câble, le couple sur le tambour, puis le couple moteur nécessaire. Le moteur convient-il ?",
      modele: `Charge isolée : T - m × g = m × a, donc T = m × (g + a) = 200 × (9,81 + 0,5) = 2 062 N.

Couple sur le tambour : C = T × r = 2 062 × 0,1 ≈ 206 N·m.

Couple moteur = 206 × (1/20) / 0,9 ≈ 11,5 N·m.

Le moteur fournit 12 N·m, un peu plus que les 11,5 N·m nécessaires : il convient, mais avec peu de marge.`,
      grille: ["Le bilan des actions et le principe fondamental de la dynamique sont écrits", "La tension du câble est juste", "Le couple moteur tient compte du réducteur et du rendement", "La conclusion compare au couple disponible"] },

    { id: 'si-m4', mat: 'si', titre: "Vérifier qu'une pièce résiste",
      formules: ["Calculer la contrainte dans la pièce", "Vérifier la condition de résistance", "Calculer le coefficient de sécurité", "La pièce est-elle correctement dimensionnée ?"],
      vu: ["Régulier : une pièce en traction ou en flexion est souvent vérifiée, parfois à partir d'une simulation par éléments finis"], pts: "1 à 2 points",
      attendu: "La contrainte σ = F / S avec la section en mm² (résultat en MPa), la contrainte admissible = Re / s, puis la comparaison et une conclusion. Avec une simulation, il faut lire la contrainte maximale et la comparer de la même façon.",
      etapes: ["Repérer l'effort F en newtons et la section S en mm²", "Calculer σ = F / S : le résultat est en MPa", "Calculer la contrainte admissible : Re / s", "Comparer σ à la contrainte admissible", "Conclure, et donner le coefficient de sécurité réel Re / σ si on le demande"],
      mots: ["contrainte", "section", "limite élastique", "coefficient de sécurité", "contrainte admissible", "MPa"],
      pieges: ["Mélanger les m² et les mm²", "Comparer σ à Re sans tenir compte du coefficient de sécurité", "Conclure sans phrase", "Confondre limite élastique et rupture"],
      cas: "Un tirant fictif en acier de section 50 mm² supporte un effort de traction de 4 000 N. L'acier a une limite élastique Re = 235 MPa. Le cahier des charges impose un coefficient de sécurité de 2.",
      question: "Calculer la contrainte dans le tirant et vérifier la condition de résistance.",
      modele: `Contrainte : σ = F / S = 4 000 / 50 = 80 MPa.

Contrainte admissible : Re / s = 235 / 2 = 117,5 MPa.

80 MPa est inférieur à 117,5 MPa : la condition de résistance est vérifiée. Le coefficient de sécurité réel vaut 235 / 80 ≈ 2,9.`,
      grille: ["La contrainte est juste, en MPa", "La contrainte admissible tient compte du coefficient de sécurité", "La comparaison est faite et la conclusion écrite"] },

    { id: 'si-m5', mat: 'si', titre: "Lire la réponse d'un système asservi",
      formules: ["Relever sur la courbe la valeur finale et le temps de réponse à 5 %", "Calculer l'erreur statique et le dépassement", "Les performances respectent-elles le cahier des charges ?", "Quel réglage du correcteur proposer ?"],
      vu: ["Fréquent quand le système est asservi en vitesse, en position ou en température"], pts: "1 à 3 points",
      attendu: "Les valeurs relevées sur la courbe avec leur unité, l'erreur statique (consigne - valeur finale), le dépassement en pourcentage de la valeur finale, le temps de réponse à 5 %, puis la comparaison critère par critère avec le cahier des charges et une conclusion.",
      etapes: ["Lire la consigne et la valeur finale de la sortie", "Calculer l'erreur statique, en valeur et en pourcentage de la consigne", "Lire le maximum et calculer le dépassement : (maximum - valeur finale) / valeur finale", "Tracer la bande à plus ou moins 5 % de la valeur finale et lire le temps où la courbe y reste", "Comparer chaque critère à l'exigence et conclure"],
      mots: ["consigne", "valeur finale", "erreur statique", "dépassement", "temps de réponse à 5 %", "stabilité", "précision", "rapidité", "correcteur"],
      pieges: ["Prendre le premier passage dans la bande de 5 % au lieu du moment où la courbe y reste", "Calculer le dépassement par rapport à la consigne sans le dire", "Oublier un des trois critères", "Proposer d'augmenter le gain sans parler du risque de dépassement"],
      cas: "Un four fictif reçoit une consigne de 200 °C. La température monte jusqu'à 210 °C, puis se stabilise à 197 °C ; elle reste dans la bande de 5 % au bout de 12 min. Exigences : erreur statique de 2 % au plus, dépassement de 5 % au plus, temps de réponse à 5 % de 15 min au plus.",
      question: "Calculer les performances et conclure sur chaque exigence. Quel type de correction proposer ?",
      modele: `Erreur statique : 200 - 197 = 3 °C, soit 3 / 200 = 1,5 % : exigence respectée.

Dépassement : (210 - 197) / 197 ≈ 0,066, soit 6,6 % : exigence non respectée (5 % au plus).

Temps de réponse à 5 % : 12 min, inférieur à 15 min : exigence respectée.

Conclusion : seul le dépassement pose problème. On peut diminuer un peu le gain du correcteur proportionnel : le dépassement baisse, au prix d'une réponse un peu plus lente et d'une erreur statique un peu plus grande, qu'il faudra vérifier, ou qu'un correcteur intégral pourra annuler.`,
      grille: ["Les valeurs lues sont justes, avec leur unité", "L'erreur statique et le dépassement sont calculés", "Chaque critère est comparé à son exigence", "La proposition de réglage tient compte du compromis"] },
  ],

  sujets: [
    { id: 'si-s1', matiere: 'si', titre: "Sujet d'entraînement : le vélo cargo électrique Portéo (fictif)", duree: 240,
      enonce: `Sujet d'entraînement inventé pour réviser : le vélo Portéo, ses chiffres et son cahier des charges sont fictifs. Il a la forme de l'épreuve : une partie sciences de l'ingénieur (environ 3 h, notée ici sur 15) et une partie sciences physiques (environ 1 h, notée ici sur 5), à rédiger sur deux copies séparées. Calculatrice autorisée. On prend g = 9,81 m/s².

PRÉSENTATION

Portéo est un vélo cargo à assistance électrique pour livrer des colis en ville. Un moteur placé dans le moyeu de la roue arrière (sans réducteur) aide le cycliste. L'assistance se coupe au-delà de 25 km/h.

Extrait du cahier des charges :
- Exigence 1 : monter une pente de 5 % à 15 km/h, chargé, le moteur fournissant au plus sa puissance nominale de 250 W.
- Exigence 2 : autonomie d'au moins 40 km à 20 km/h sur le plat.
- Exigence 3 : vitesse limitée à 25 km/h, avec une erreur statique de 1 km/h au plus et un temps de réponse à 5 % de 5 s au plus.
- Exigence 4 : les tirants du caisson ont un coefficient de sécurité d'au moins 3.
- Exigence 5 : le couple du cycliste est mesuré avec une résolution de 0,5 N·m au moins.

Données :
- Masse totale (vélo, colis et cycliste) : m = 150 kg. Rayon de la roue : r = 0,25 m.
- Batterie : éléments lithium de 3,6 V et 3,5 A·h. On n'utilise que 80 % de l'énergie, pour préserver la batterie.
- Rendement du contrôleur (convertisseur) : 0,95. Rendement du moteur : 0,8.
- Résistances à l'avancement (roulement et air) à 15 km/h : environ 16 N.

PARTIE SCIENCES DE L'INGÉNIEUR (15 points)

Q1. Recopier et compléter la chaîne de puissance du Portéo en plaçant la batterie, le contrôleur, le moteur et la roue dans les fonctions alimenter, distribuer, convertir et transmettre. Calculer le rendement global de la batterie à la roue.

Q2. La batterie doit fournir 36 V et 14 A·h. Combien d'éléments faut-il mettre en série, et combien de branches en parallèle ? Calculer l'énergie stockée en wattheures.

Q3. Le vélo monte la pente de 5 % à 15 km/h, à vitesse constante. On assimile le sinus de l'angle de la pente à 0,05. Calculer la composante du poids le long de la pente, puis l'effort total à vaincre (on l'arrondira à 90 N). En déduire la puissance nécessaire à la roue.

Q4. Le cycliste fournit 125 W. Calculer la puissance que doit fournir le moteur, puis le couple sur la roue et sa vitesse de rotation. L'exigence 1 est-elle respectée ?

Q5. Dans cette montée, calculer la puissance électrique fournie par la batterie et le courant débité.

Q6. Sur le plat à 20 km/h, le moteur fournit en moyenne 120 W mécaniques. Calculer la puissance électrique moyenne, la durée de fonctionnement avec l'énergie utilisable, puis l'autonomie en kilomètres. Calculer l'écart relatif avec l'exigence 2 et conclure.

Q7. Un essai de limitation de vitesse donne ces résultats : consigne 25 km/h ; la vitesse monte sans dépasser et se stabilise à 24,5 km/h ; elle reste à moins de 5 % de sa valeur finale à partir de t = 4 s. Conclure sur l'exigence 3. Que se passerait-il si l'on augmentait fortement le gain du correcteur proportionnel ?

Q8. Le caisson est suspendu par deux tirants en acier (Re = 235 MPa) de section 20 mm². Chaque tirant supporte 600 N. Calculer la contrainte, puis le coefficient de sécurité. L'exigence 4 est-elle respectée ?

Q9. Le capteur de couple du pédalier donne une tension de 0 V pour 0 N·m et de 5 V pour 100 N·m. Elle est lue par un convertisseur analogique-numérique de 10 bits sur la plage 0 à 5 V. Calculer le quantum en volts puis la résolution en N·m. L'exigence 5 est-elle respectée ?

PARTIE SCIENCES PHYSIQUES (5 points)

Exercice A — Freinage. Le Portéo roule à 25 km/h sur le plat et freine avec une décélération constante de 3 m/s².
A1. Calculer la vitesse en m/s et l'énergie cinétique du vélo.
A2. Calculer la durée et la distance de freinage, puis la force de freinage totale.
A3. Toute l'énergie cinétique est transformée en chaleur dans deux disques de frein identiques en acier, de 0,12 kg chacun (c = 460 J/(kg·°C)). Calculer l'élévation de température d'un disque.

Exercice B — Communication. Le vélo échange des données avec un smartphone par une onde de fréquence 2,4 GHz, qui se propage à 3 × 10^8 m/s.
B1. Cette onde est-elle mécanique ou électromagnétique ? Justifier.
B2. Calculer sa longueur d'onde.`,
      corrige: `PARTIE SCIENCES DE L'INGÉNIEUR

Q1. Alimenter : batterie. Distribuer : contrôleur. Convertir : moteur (électrique vers mécanique). Transmettre : roue, entraînée directement par le moteur-moyeu.
Rendement global = 0,95 × 0,8 = 0,76.

Q2. En série : 36 / 3,6 = 10 éléments. En parallèle : 14 / 3,5 = 4 branches. Soit 40 éléments.
Énergie = 36 × 14 = 504 Wh.

Q3. Composante du poids : m × g × 0,05 = 150 × 9,81 × 0,05 ≈ 73,6 N.
Effort total : 73,6 + 16 ≈ 89,6 N, arrondi à 90 N.
Vitesse : 15 km/h = 15 / 3,6 ≈ 4,17 m/s.
Puissance à la roue : 90 × 4,17 ≈ 375 W.

Q4. Puissance du moteur : 375 - 125 = 250 W.
Effort du moteur à la roue : 250 / 4,17 ≈ 60 N ; couple : 60 × 0,25 = 15 N·m.
Vitesse de rotation : ω = v / r = 4,17 / 0,25 ≈ 16,7 rad/s (vérification : 15 × 16,7 ≈ 250 W).
Le moteur fournit exactement sa puissance nominale de 250 W : l'exigence 1 est respectée, sans marge.

Q5. Puissance électrique : 250 / 0,76 ≈ 329 W. Courant : 329 / 36 ≈ 9,1 A.

Q6. Puissance électrique moyenne : 120 / 0,76 ≈ 158 W.
Énergie utilisable : 0,8 × 504 = 403,2 Wh.
Durée : 403,2 / 158 ≈ 2,55 h.
Autonomie : 2,55 × 20 ≈ 51 km.
Écart relatif avec l'exigence : (51 - 40) / 40 ≈ 0,28, soit environ 28 % de marge. L'exigence 2 est respectée.

Q7. Erreur statique : 25 - 24,5 = 0,5 km/h, inférieure à 1 km/h. Temps de réponse à 5 % : 4 s, inférieur à 5 s. Pas de dépassement. L'exigence 3 est respectée.
Avec un gain beaucoup plus fort, la réponse serait plus rapide et l'erreur statique plus faible, mais des dépassements apparaîtraient (vitesse au-dessus de 25 km/h), voire une instabilité.

Q8. σ = F / S = 600 / 20 = 30 MPa. Coefficient de sécurité = Re / σ = 235 / 30 ≈ 7,8.
7,8 est supérieur à 3 : l'exigence 4 est respectée (les tirants sont même surdimensionnés ; on pourrait les alléger).

Q9. Quantum = 5 / 2^10 = 5 / 1 024 ≈ 4,9 mV.
Résolution en couple : 100 / 1 024 ≈ 0,1 N·m.
0,1 N·m est plus fin que 0,5 N·m : l'exigence 5 est respectée.

PARTIE SCIENCES PHYSIQUES

A1. v = 25 / 3,6 ≈ 6,94 m/s. Ec = ½ × 150 × 6,94² ≈ 3 617 J, soit environ 3,6 kJ.

A2. Durée : t = v / a = 6,94 / 3 ≈ 2,3 s.
Distance : d = v² / (2 × a) = 48,2 / 6 ≈ 8,0 m.
Force de freinage (deuxième loi de Newton) : F = m × a = 150 × 3 = 450 N.

A3. Chaque disque reçoit 3 617 / 2 ≈ 1 808 J.
ΔT = Q / (m × c) = 1 808 / (0,12 × 460) = 1 808 / 55,2 ≈ 33 °C.

B1. Elle est électromagnétique : c'est une onde radio, qui se propage aussi dans le vide, sans milieu matériel.

B2. λ = v / f = 3 × 10^8 / 2,4 × 10^9 = 0,125 m, soit 12,5 cm.`,
      grille: [
        { c: "SI, Q1 et Q2 : chaîne de puissance, rendement global, batterie", pts: 3 },
        { c: "SI, Q3 et Q4 : effort, puissance à la roue, couple moteur, exigence 1", pts: 3.5 },
        { c: "SI, Q5 et Q6 : courant, autonomie, écart et conclusion", pts: 3.5 },
        { c: "SI, Q7 : performances de l'asservissement et effet du gain", pts: 2 },
        { c: "SI, Q8 et Q9 : contrainte et coefficient de sécurité, quantum et résolution", pts: 3 },
        { c: "Physique, exercice A : énergie cinétique, freinage, échauffement des disques", pts: 4 },
        { c: "Physique, exercice B : nature de l'onde et longueur d'onde", pts: 1 },
      ] },
  ],
};
