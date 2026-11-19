// 2I2D, enseignement spécifique « innovation technologique et éco-conception » (ITEC) — terminale STI2D. Sources : voir matiere.sources.
// Programme : annexe IT, I2D et 2I2D du cycle terminal STI2D ; on ne garde ici que ce qui est propre à ITEC ou approfondi
// en ITEC : démarche d'éco-conception et design, statique graphique, couples et équilibre, cinématique, transmissions,
// graphe des liaisons, vérins, dimensionnement en traction, matériaux et procédés, prototypage et simulation.
// Le tronc commun (analyse du cycle de vie, bases des liaisons, de la statique et de la résistance des matériaux) est dans sti2d-2i2d.js.
// Épreuve à partir de la session 2027 (note de service du 11 septembre 2026, BO spécial n° 4 du 17 septembre 2026) :
// la deuxième partie de l'écrit de 2I2D (3 h 30, coefficient 9) est un exercice propre à l'enseignement spécifique ;
// dans les sujets 2024 et 2025, elle valait 8 points sur 20. La partie pratique de 2 h (coefficient 7) porte sur ITEC.

export default {
  matiere: {
    id: 'sti2d-itec',
    nom: '2I2D : innovation technologique et éco-conception',
    voie: 'sti2d',
    epreuve: { type: 'ecrit', duree: 210, coef: 16, quand: 'juin', note: 'Partie spécifique ITEC de l\'écrit de 2I2D (3 h 30 au total, coefficient 9) : un exercice sur un mécanisme (efforts, mouvements, transmissions, actionneurs, dimensionnement, matériaux), environ 8 points sur 20 dans les sujets récents. La partie pratique de 2 h en laboratoire (coefficient 7) porte aussi sur ITEC.' },
    sources: [
      'https://www.education.gouv.fr/sites/default/files/document/bulletin-officiel-special-ndeg-4-du-17-septembre-2026-521113.pdf',
      'https://www.snes.edu/wp-content/uploads/sti2d_annexe-1_it_i2d_2i2d_bo.pdf',
      'https://www.freemaths.fr/sujets-du-bac/baccalaureat-technologique/sti2d/2i2d-innovation-technologique-eco-conception/annees/annee-2025/metropole/sujet-1-et-correction/bac-2i2d-innovation-technologique-eco-conception-metropole-2025-voie-technologique-sti2d-sujet-1.pdf',
      'https://www.freemaths.fr/sujets-du-bac/baccalaureat-technologique/sti2d/2i2d-innovation-technologique-eco-conception/annees/annee-2025/polynesie/sujet-1-et-correction/bac-2i2d-innovation-technologique-eco-conception-polynesie-2025-voie-technologique-sti2d-sujet-1.pdf',
      'https://www.freemaths.fr/sujets-du-bac/baccalaureat-technologique/sti2d/2i2d-innovation-technologique-eco-conception/annees/annee-2024/metropole/sujet-1-et-correction/bac-2i2d-innovation-technologique-eco-conception-metropole-2024-voie-technologique-sti2d-sujet-1.pdf',
      'https://www.freemaths.fr/sujets-du-bac/baccalaureat-technologique/sti2d/2i2d-innovation-technologique-eco-conception/annees/annee-2024/polynesie/sujet-1-et-correction/bac-2i2d-innovation-technologique-eco-conception-polynesie-2024-voie-technologique-sti2d-sujet-1.pdf',
    ],
    chapitres: [
      { id: 'sti2d-itec-1', t: 'Éco-conception, design et analyse de la valeur', theme: 'Concevoir' },
      { id: 'sti2d-itec-2', t: 'Statique graphique : isoler, BAME et triangle des forces', theme: 'Efforts' },
      { id: 'sti2d-itec-3', t: 'Moments, couples et équilibre d\'un mécanisme', theme: 'Efforts' },
      { id: 'sti2d-itec-4', t: 'Cinématique : trajectoires et vitesses', theme: 'Mouvements' },
      { id: 'sti2d-itec-5', t: 'Transmissions : rapports, couples et rendements', theme: 'Mouvements' },
      { id: 'sti2d-itec-6', t: 'Graphe des liaisons et schéma cinématique', theme: 'Mouvements' },
      { id: 'sti2d-itec-7', t: 'Vérins et actionneurs hydrauliques ou pneumatiques', theme: 'Efforts' },
      { id: 'sti2d-itec-8', t: 'Dimensionner en traction : contrainte, allongement, sécurité', theme: 'Dimensionner' },
      { id: 'sti2d-itec-9', t: 'Choisir un matériau et un procédé de fabrication', theme: 'Dimensionner' },
      { id: 'sti2d-itec-10', t: 'Maquette numérique, simulation et prototypage', theme: 'Concevoir' },
    ],
  },
  paquets: [
    { chapitre: 'sti2d-itec-1',
      fiche: `## Éco-conception, design et analyse de la valeur

Le tronc commun présente le développement durable et l'analyse du cycle de vie. En ITEC, on va plus loin : on choisit des **stratégies** pour réduire l'impact d'un produit, on travaille sa **forme** et son usage (design), et on cherche le meilleur rapport entre le service rendu et le coût.

### Les stratégies d'éco-conception
- La **roue des stratégies d'éco-conception** propose huit pistes, de la conception à la fin de vie :
- **Nouveau concept** (vendre un service plutôt qu'un objet, partager), **moins de matière** (alléger, simplifier), **matériaux à faible impact** (recyclés, biosourcés, sans substance dangereuse), **procédés plus propres** (moins d'énergie, moins de chutes), **distribution optimisée** (emballage réduit, produit compact, transport proche), **usage plus sobre** (moins d'énergie, moins de consommables), **durée de vie prolongée** (robustesse, réparabilité, mise à jour), **fin de vie** (démontage facile, matériaux recyclables, peu de mélanges).
- On commence par l'étape du cycle de vie qui pèse le plus (souvent la fabrication pour un objet sans énergie, l'usage pour un appareil électrique).
- Indicateurs : masse de matière, part de matière recyclée, énergie consommée, nombre de pièces, temps de démontage, **indice de réparabilité** (sur 10).
- Exemple : une pièce passe de 250 g à 200 g : gain de 50 / 250 = **20 %** de matière.

### L'économie circulaire
- Réduire, **réemployer** (même usage), **réparer**, **reconditionner**, **recycler** (refaire de la matière), puis seulement valoriser ou éliminer.
- Concevoir pour le démontage : vis plutôt que colle, pièces d'un seul matériau, marquage des plastiques (PP, ABS, PA…), éviter les inserts métalliques noyés dans le plastique.

### Le design
- Le **design** associe la fonction, l'usage et la forme. Un objet bien dessiné est compris sans notice, agréable à utiliser et cohérent avec sa marque.
- **Ergonomie** : adapter l'objet à l'utilisateur (dimensions du corps, effort, posture, lisibilité, sécurité). On s'appuie sur des données de **morphologie** (hauteur de prise, taille de la main) et sur des tests avec des usagers.
- **Sémantique** : la forme indique l'usage (une poignée invite à tirer, un creux à poser le doigt).
- Le design sert aussi l'éco-conception : moins de pièces, formes simples à fabriquer, matériaux apparents qui évitent la peinture.

### L'analyse fonctionnelle et la valeur
- On part du **besoin** : à qui le produit rend service, sur quoi il agit, dans quel but.
- **Fonctions de service** : ce que le produit doit faire pour l'utilisateur ; **contraintes** : ce qu'il doit respecter (normes, coût, environnement). Chaque fonction a des **critères**, des **niveaux** et une **flexibilité**.
- **Valeur = satisfaction du besoin / coût**. L'**analyse de la valeur** cherche à supprimer ce qui coûte sans rendre de service et à renforcer ce que l'utilisateur attend.
- On compare des solutions avec une **matrice de décision** : chaque critère reçoit un poids, chaque solution une note ; la meilleure somme pondérée l'emporte.

### L'innovation
- **Incrémentale** : on améliore un produit existant (plus léger, moins cher). **De rupture** : un principe nouveau qui change l'usage.
- La **propriété industrielle** protège une invention (brevet, 20 ans) ou une forme (dessin et modèle).

### À retenir pour le bac
- Huit stratégies d'éco-conception, de la matière à la fin de vie.
- Réemployer, réparer, recycler : concevoir pour le démontage.
- Design : fonction, usage, forme ; ergonomie adaptée à l'utilisateur.
- Valeur = satisfaction du besoin / coût ; matrice de décision pondérée.
- Piège : agir d'abord sur l'étape du cycle de vie qui pèse le plus.`,
      cartes: [
        { q: "But de l'éco-conception ?", r: "Réduire les impacts environnementaux d'un produit sur tout son cycle de vie, dès la conception." },
        { q: "Stratégie « moins de matière » ?", r: "Alléger et simplifier le produit pour utiliser moins de matière." },
        { q: "Stratégie « durée de vie prolongée » ?", r: "Rendre le produit robuste, réparable et évolutif." },
        { q: "Concevoir pour la fin de vie ?", r: "Démontage facile, matériaux recyclables, peu de mélanges, plastiques marqués." },
        { q: "Réemploi ou recyclage ?", r: "Réemployer : réutiliser l'objet ; recycler : refaire de la matière avec." },
        { q: "Pourquoi préférer une vis à la colle ?", r: "Le produit se démonte pour être réparé ou trié en fin de vie." },
        { q: "Qu'est-ce que l'ergonomie ?", r: "L'adaptation du produit à son utilisateur : dimensions, efforts, posture, sécurité." },
        { q: "Sémantique d'un objet ?", r: "Sa forme indique comment l'utiliser." },
        { q: "Fonction de service ?", r: "Ce que le produit doit faire pour l'utilisateur." },
        { q: "Contrainte dans un cahier des charges ?", r: "Une exigence à respecter : norme, coût, environnement." },
        { q: "Formule de la valeur ?", r: "Valeur = satisfaction du besoin / coût." },
        { q: "Matrice de décision ?", r: "Un tableau qui note chaque solution sur des critères pondérés pour choisir la meilleure." },
        { q: "Innovation incrémentale ou de rupture ?", r: "Incrémentale : amélioration d'un produit ; rupture : principe nouveau qui change l'usage." },
      ],
      quiz: [
        { q: "Une pièce passe de 250 g à 200 g grâce à des nervures. Gain de matière ?", choix: ["25 %", "20 %", "50 %", "80 %"], bonne: 1, expl: "50 / 250 = 0,2.", niv: 1 },
        { q: "Remplacer la colle d'un boîtier par des vis relève de la stratégie :", choix: ["procédés plus propres", "distribution optimisée", "concevoir pour la fin de vie et la réparation", "nouveau concept : vendre un service à la place du produit"], bonne: 2, expl: "Le boîtier se démonte : on répare, puis on trie les matériaux.", niv: 2 },
        { q: "Pour une bouilloire électrique, l'étape qui pèse le plus dans l'impact est souvent :", choix: ["la fin de vie", "l'emballage", "le transport", "l'usage, par l'énergie consommée"], bonne: 3, expl: "On agit d'abord là : isolation, chauffe juste de la quantité utile.", niv: 2 },
        { q: "La formule de la valeur d'un produit est :", choix: ["satisfaction du besoin / coût", "coût / satisfaction du besoin", "prix de vente - coût", "masse × prix"], bonne: 0, expl: "On augmente la valeur en rendant plus de service ou en baissant le coût.", niv: 1 },
        { q: "Solution A : 4 × 3 + 2 × 5 ; solution B : 4 × 5 + 2 × 2. Laquelle choisir ?", choix: ["A, car elle a la meilleure note sur 5", "A, 22 points contre 20", "B, 24 points contre 22", "B, 20 points contre 18"], bonne: 2, expl: "A = 12 + 10 = 22 ; B = 20 + 4 = 24.", niv: 2 },
        { q: "Un fabricant loue des perceuses au lieu de les vendre, et les entretient. Stratégie ?", choix: ["nouveau concept : vendre un service", "moins de matière", "matériaux à faible impact", "procédés plus propres"], bonne: 0, expl: "Une même perceuse sert à beaucoup de clients et dure plus longtemps.", niv: 3 },
        { q: "Une poignée dont la forme invite à tirer illustre :", choix: ["le recyclage", "la sémantique du produit", "le brevet", "l'analyse du cycle de vie"], bonne: 1, expl: "La forme dit l'usage sans notice.", niv: 1 },
        { q: "Une coque en plastique contient un insert métallique noyé. Problème en fin de vie ?", choix: ["L'insert rend la coque plus légère", "Le plastique devient conducteur", "La coque ne peut pas être peinte", "Métal et plastique se séparent mal pour le recyclage"], bonne: 3, expl: "Mieux vaut un assemblage démontable ou une pièce d'un seul matériau.", niv: 2 },
        { q: "Un produit rend le même service pour 40 € au lieu de 50 €. Sa valeur augmente de :", choix: ["40 %", "20 %", "10 %", "25 %"], bonne: 3, expl: "La valeur est inversement proportionnelle au coût : 50 / 40 = 1,25.", niv: 3 },
        { q: "Un critère d'une fonction de service est :", choix: ["le prix de vente final", "ce qui permet de mesurer si la fonction est remplie", "la référence de la pièce", "le procédé de fabrication retenu pour la série de pièces"], bonne: 1, expl: "Il a un niveau et une flexibilité, par exemple masse ≤ 1 kg ± 5 %.", niv: 2 },
        { q: "L'ergonomie d'un outil consiste à l'adapter :", choix: ["à son utilisateur", "à la machine qui le fabrique", "au transporteur", "au recycleur"], bonne: 0, expl: "Dimensions de la main, effort, posture, sécurité.", niv: 1 },
        { q: "Un smartphone a un indice de réparabilité de 4,2 sur 10. Quelle piste l'améliore le plus ?", choix: ["Un emballage plus luxueux", "Une coque plus colorée", "Batterie et écran remplaçables avec des vis standard", "Un processeur plus rapide et une mémoire de stockage plus grande"], bonne: 2, expl: "L'indice note le démontage, les pièces détachées et leur prix.", niv: 3 },
      ] },
    { chapitre: 'sti2d-itec-2',
      fiche: `## Statique graphique : isoler, BAME et triangle des forces

Les sujets ITEC demandent souvent de trouver des efforts par le tracé : on isole une pièce, on fait le bilan des actions, puis on construit un triangle des forces à l'échelle. Le tronc commun donne le principe fondamental de la statique ; ici, on apprend la méthode graphique pas à pas.

### Isoler et faire le BAME
- **Isoler** un solide : on le dessine seul, en enlevant tout ce qui le touche.
- **BAME** (bilan des actions mécaniques extérieures) : pour chaque action, on note dans un tableau le **point d'application**, la **direction** (droite d'action), le **sens** et l'**intensité** (norme, en N). On met un point d'interrogation pour ce qui est inconnu.
- Actions habituelles : le **poids** (vertical, vers le bas, au centre de gravité, P = m × g) ; une **liaison** sans frottement en un point (pivot, rotule) : direction souvent inconnue ; un **contact ponctuel** ou un appui sans frottement : action perpendiculaire à la surface ; un **câble** ou une **barre à deux articulations** : action selon l'axe du câble ou de la barre.

### Solide soumis à deux forces
- Les deux forces sont **opposées** : même droite d'action (celle qui passe par les deux points), même intensité, sens contraires.
- C'est le cas d'un **vérin** ou d'une **biellette** articulés à leurs deux extrémités, si leur poids est négligé : l'effort passe par l'axe du vérin.

### Solide soumis à trois forces non parallèles
- Les trois droites d'action sont **concourantes** : elles se coupent en un même point.
- La **somme vectorielle** est nulle : mises bout à bout, les trois forces forment un **triangle fermé**.
- Méthode : tracer les deux droites d'action connues et trouver leur point de concours I ; la troisième droite passe par I et par son point d'application ; tracer à l'échelle la force connue, puis fermer le triangle avec des parallèles aux deux autres directions ; mesurer et convertir avec l'échelle.
- Exemple d'échelle : 1 cm pour 1 000 N. Un côté de 4,6 cm représente 4 600 N.

### Vérifier par le calcul
- Si les forces sont à angle droit, on vérifie avec **Pythagore** ou la trigonométrie : F = racine(Fx² + Fy²), Fx = F × cos α.
- Exemple : une cabine de 1 000 kg (P = 9 810 N) tenue par un câble incliné : on décompose selon l'horizontale et la verticale.

### Les forces réparties et le centre de gravité
- Le poids d'un ensemble s'applique au **centre de gravité** ; pour des pièces simples : xG = (m1 × x1 + m2 × x2) / (m1 + m2).
- Une charge maximale (personnes, objet soulevé) se cumule au poids propre : 10 personnes de 80 kg = 800 kg, soit 7 848 N.

### À retenir pour le bac
- BAME : point, direction, sens, intensité, avec des points d'interrogation pour l'inconnu.
- Deux forces : opposées sur la même droite ; trois forces : concourantes et triangle fermé.
- Vérin, biellette, câble : effort selon leur axe.
- Mesurer sur le tracé, puis convertir avec l'échelle.
- Piège : oublier la charge transportée dans le poids total.`,
      cartes: [
        { q: "Isoler un solide ?", r: "Le dessiner seul, sans ce qui le touche, pour faire le bilan des actions qu'il subit." },
        { q: "Que contient un BAME ?", r: "Pour chaque action : point d'application, direction, sens, intensité." },
        { q: "Direction du poids ?", r: "Verticale, vers le bas, appliquée au centre de gravité." },
        { q: "Action d'un appui sans frottement ?", r: "Perpendiculaire à la surface de contact." },
        { q: "Action d'un câble ?", r: "Selon l'axe du câble, qui tire." },
        { q: "Solide soumis à deux forces ?", r: "Les forces sont opposées : même droite, même intensité, sens contraires." },
        { q: "Direction de l'effort dans un vérin articulé aux deux bouts ?", r: "Selon l'axe du vérin, si son poids est négligé." },
        { q: "Solide soumis à trois forces non parallèles ?", r: "Les droites d'action sont concourantes et les forces forment un triangle fermé." },
        { q: "Comment trouver la direction de la troisième force ?", r: "Elle passe par le point de concours des deux autres et par son point d'application." },
        { q: "Lire une force sur un tracé à l'échelle 1 cm pour 1 000 N ?", r: "Mesurer la longueur en cm et la multiplier par 1 000 N." },
        { q: "Poids de 10 personnes de 80 kg ?", r: "800 × 9,81 = 7 848 N." },
        { q: "Composante horizontale d'une force F inclinée de α ?", r: "F × cos α, si α est l'angle avec l'horizontale." },
        { q: "Centre de gravité de deux masses ?", r: "xG = (m1 × x1 + m2 × x2) / (m1 + m2)." },
      ],
      quiz: [
        { q: "Une cabine de 800 kg transporte 10 personnes de 80 kg. Poids total (g = 9,81) ?", choix: ["15 696 N", "7 848 N", "1 600 N", "157 N"], bonne: 0, expl: "800 + 800 = 1 600 kg ; 1 600 × 9,81 = 15 696 N.", niv: 1 },
        { q: "Un vérin articulé à ses deux extrémités, de poids négligé, est soumis à :", choix: ["une force verticale", "trois forces concourantes", "deux forces opposées selon son axe", "un couple pur"], bonne: 2, expl: "Solide soumis à deux forces : elles passent par les deux articulations.", niv: 2 },
        { q: "À l'échelle 1 cm pour 500 N, un vecteur mesure 6,4 cm. Intensité ?", choix: ["6 400 N", "3 200 N", "12 800 N", "32 000 N"], bonne: 1, expl: "6,4 × 500 = 3 200 N.", niv: 2 },
        { q: "Dans un BAME, l'action d'un sol sans frottement sur une roue est :", choix: ["de direction inconnue", "parallèle au sol", "dirigée vers le bas", "perpendiculaire au sol"], bonne: 3, expl: "Sans frottement, le contact ne transmet qu'une action normale.", niv: 1 },
        { q: "Trois forces non parallèles maintiennent un bras en équilibre. Leurs droites d'action :", choix: ["sont parallèles", "se coupent en un même point", "sont verticales", "se croisent en deux points"], bonne: 1, expl: "Et, mises bout à bout, les forces ferment un triangle.", niv: 2 },
        { q: "Force de 5 000 N inclinée de 30° sur l'horizontale. Composante verticale ?", choix: ["2 500 N", "4 330 N", "5 000 N", "1 500 N"], bonne: 0, expl: "5 000 × sin 30° = 2 500 N.", niv: 3 },
        { q: "Le poids d'un solide s'applique :", choix: ["à l'articulation la plus proche", "au point de contact avec le sol", "au milieu de sa base", "au centre de gravité"], bonne: 3, expl: "Il est vertical, vers le bas.", niv: 1 },
        { q: "Composantes perpendiculaires 3 000 N et 4 000 N. Intensité de la force ?", choix: ["25 000 N", "7 000 N", "5 000 N", "12 000 N"], bonne: 2, expl: "Racine de 3 000² + 4 000² = 5 000 N.", niv: 2 },
        { q: "Bras de grue : poids connu, effort du vérin selon son axe, action en A inconnue. Que tracer d'abord ?", choix: ["Une force horizontale en A, puis le poids à l'échelle choisie", "Le triangle avec l'action en A", "Le point de concours du poids et de l'axe du vérin", "La force du vérin à l'échelle"], bonne: 2, expl: "La direction de l'action en A passe par ce point de concours.", niv: 3 },
        { q: "Pourquoi met-on un point d'interrogation dans un BAME ?", choix: ["pour le poids", "pour une force négligée", "pour une erreur de tracé", "pour une caractéristique encore inconnue"], bonne: 3, expl: "La résolution permet ensuite de le trouver.", niv: 2 },
        { q: "Un câble tendu exerce sur une pièce une action :", choix: ["perpendiculaire au câble", "selon l'axe du câble, qui tire", "verticale vers le haut", "qui pousse la pièce"], bonne: 1, expl: "Un câble ne peut que tirer.", niv: 1 },
        { q: "Masses 2 kg à x = 0 et 6 kg à x = 40 cm. Position du centre de gravité ?", choix: ["x = 30 cm", "x = 20 cm", "x = 10 cm", "x = 40 cm"], bonne: 0, expl: "(2 × 0 + 6 × 40) / 8 = 30 cm.", niv: 3 },
      ] },
    { chapitre: 'sti2d-itec-3',
      fiche: `## Moments, couples et équilibre d'un mécanisme

Une force qui ne passe pas par l'axe d'une pièce la fait tourner. En ITEC, on calcule le couple qu'un moteur doit fournir, l'effort qu'un levier multiplie, ou la puissance nécessaire à un treuil.

### Le moment d'une force
- **Moment = force × bras de levier** : M = F × d, en N·m. Le **bras de levier** d est la distance entre l'axe et la **droite d'action** de la force, mesurée perpendiculairement.
- Une force dont la droite passe par l'axe a un moment nul.
- Sens : on choisit un sens positif (par exemple le sens trigonométrique) ; un moment qui fait tourner dans l'autre sens est négatif.
- Exemple : une clé de 0,25 m avec une force de 80 N perpendiculaire : M = 80 × 0,25 = **20 N·m**.

### L'équilibre en rotation
- Un solide est en équilibre si la **somme des forces est nulle** et si la **somme des moments** par rapport à un point est nulle.
- **Levier** : F1 × d1 = F2 × d2. Avec un bras de 1,2 m côté effort et 0,3 m côté charge, l'effort est divisé par 4 : pour soulever 2 000 N, il faut 500 N.
- On choisit souvent le point où passent les forces inconnues : leurs moments sont nuls, il ne reste qu'une inconnue.

### Le couple d'un moteur ou d'un treuil
- Un câble enroulé sur un tambour ou une poulie de rayon r, tendu par une force T : **C = T × r**.
- Exemple : un câble tracteur tire avec 20 000 N sur une poulie motrice de 2 m de rayon : C = 40 000 N·m = **40 kN·m**.
- Pour une cabine sur un câble incliné, l'effort à fournir dépend de la **pente** : seule la composante du poids parallèle au câble est à retenir, P × sin α. Plus la pente est forte, plus le couple est grand.
- **Répartir les charges** : sur un téléphérique, les cabines qui descendent compensent en partie celles qui montent ; le moteur ne fournit plus que la différence.

### Couple, vitesse et puissance
- **Puissance mécanique en rotation : P = C × ω**, avec ω en rad/s. En translation : P = F × v.
- ω = 2 × π × N / 60, avec N en tr/min.
- Exemple : C = 40 kN·m à 3 rad/s : P = 120 kW.
- Si le moteur passe par un réducteur, le couple côté moteur est plus petit et la vitesse plus grande ; la puissance se conserve aux pertes près.

### Les moments dans la vie courante
- Une poignée de porte placée loin des gonds demande peu d'effort ; une clé plus longue desserre plus facilement.
- En sécurité, on vérifie qu'une charge ne fait pas basculer un engin : moment du poids de la charge, comparé au moment du poids de l'engin autour de la roue avant.

### À retenir pour le bac
- M = F × d, avec d perpendiculaire à la droite d'action.
- Équilibre : somme des forces nulle et somme des moments nulle.
- Couple sur une poulie : C = T × r ; puissance P = C × ω.
- Sur une pente, l'effort utile est P × sin α.
- Piège : prendre la distance jusqu'au point d'application au lieu de la distance à la droite d'action.`,
      cartes: [
        { q: "Moment d'une force ?", r: "M = F × d, avec d le bras de levier, en N·m." },
        { q: "Bras de levier ?", r: "La distance perpendiculaire entre l'axe et la droite d'action de la force." },
        { q: "Moment d'une force qui passe par l'axe ?", r: "Il est nul." },
        { q: "Conditions d'équilibre d'un solide ?", r: "Somme des forces nulle et somme des moments nulle." },
        { q: "Équilibre d'un levier ?", r: "F1 × d1 = F2 × d2." },
        { q: "Couple sur une poulie ou un tambour ?", r: "C = T × r, tension du câble fois rayon." },
        { q: "Puissance en rotation ?", r: "P = C × ω, avec ω en rad/s." },
        { q: "Passer de tr/min à rad/s ?", r: "ω = 2 × π × N / 60." },
        { q: "Effort pour tenir une charge sur une pente ?", r: "La composante du poids le long de la pente : P × sin α." },
        { q: "Intérêt de répartir les cabines d'un téléphérique ?", r: "Les cabines qui descendent compensent celles qui montent ; le moteur fournit moins de couple." },
        { q: "Où écrire l'équilibre des moments ?", r: "En un point où passent les forces inconnues, pour faire disparaître leurs moments." },
        { q: "Effet d'un réducteur sur le couple ?", r: "Le couple augmente en sortie quand la vitesse diminue, la puissance se conserve aux pertes près." },
        { q: "Puissance en translation ?", r: "P = F × v." },
      ],
      quiz: [
        { q: "Force de 80 N perpendiculaire au bout d'une clé de 25 cm. Moment ?", choix: ["320 N·m", "2 000 N·m", "200 N·m", "20 N·m"], bonne: 3, expl: "80 × 0,25 = 20 N·m.", niv: 1 },
        { q: "Câble tendu à 20 000 N sur une poulie motrice de 2 m de rayon. Couple ?", choix: ["40 kN·m", "10 kN·m", "20 kN·m", "4 kN·m"], bonne: 0, expl: "20 000 × 2 = 40 000 N·m.", niv: 2 },
        { q: "Levier : 2 000 N à 0,3 m de l'axe, effort à 1,2 m de l'autre côté. Effort nécessaire ?", choix: ["2 000 N", "8 000 N", "500 N", "600 N"], bonne: 2, expl: "2 000 × 0,3 / 1,2 = 500 N.", niv: 2 },
        { q: "Le moment d'une force dont la droite d'action passe par l'axe de rotation est :", choix: ["maximal", "nul", "égal à la force", "négatif"], bonne: 1, expl: "Le bras de levier vaut zéro.", niv: 1 },
        { q: "Couple de 40 kN·m à 3 rad/s. Puissance ?", choix: ["120 kW", "13,3 kW", "43 kW", "40 kW"], bonne: 0, expl: "40 000 × 3 = 120 000 W.", niv: 2 },
        { q: "Cabine de 15 000 N sur un câble incliné de 30°. Effort le long du câble (sans frottement) ?", choix: ["15 000 N", "7 500 N", "13 000 N", "30 000 N"], bonne: 1, expl: "15 000 × sin 30° = 7 500 N.", niv: 3 },
        { q: "Pour ouvrir une porte avec peu d'effort, on place la poignée :", choix: ["au milieu de la hauteur", "près des gonds", "sur les gonds", "loin des gonds"], bonne: 3, expl: "Un grand bras de levier donne un grand moment pour un petit effort.", niv: 1 },
        { q: "Moteur à 1 500 tr/min. Vitesse angulaire, environ ?", choix: ["9 425 rad/s", "25 rad/s", "157 rad/s", "1 500 rad/s"], bonne: 2, expl: "2π × 1 500 / 60 ≈ 157 rad/s.", niv: 2 },
        { q: "Téléphérique : une cabine montante demande 30 kN·m, une descendante rend 22 kN·m. Couple net du moteur ?", choix: ["30 kN·m", "52 kN·m", "8 kN·m", "22 kN·m"], bonne: 2, expl: "30 - 22 = 8 kN·m : répartir les cabines soulage le moteur.", niv: 3 },
        { q: "Force de 300 N dont la droite d'action passe à 0,4 m de l'axe. Moment ?", choix: ["120 N·m", "750 N·m", "300 N·m", "0,4 N·m"], bonne: 0, expl: "300 × 0,4 = 120 N·m.", niv: 2 },
        { q: "La puissance mécanique d'un arbre en rotation vaut :", choix: ["tension × courant", "force × masse", "couple / vitesse angulaire", "couple × vitesse angulaire"], bonne: 3, expl: "P = C × ω, ω en rad/s.", niv: 1 },
        { q: "Treuil : tambour de 0,2 m de rayon, charge de 5 000 N levée à 0,5 m/s. Couple et puissance ?", choix: ["25 000 N·m et 2 500 W", "1 000 N·m et 2 500 W", "1 000 N·m et 10 000 W", "500 N·m et 5 000 W"], bonne: 1, expl: "C = 5 000 × 0,2 ; P = F × v = 5 000 × 0,5.", niv: 3 },
      ] },
    { chapitre: 'sti2d-itec-4',
      fiche: `## Cinématique : trajectoires et vitesses

La cinématique décrit les mouvements sans s'occuper des efforts. Les sujets demandent de nommer un mouvement, de calculer une vitesse en bout de pale ou de roue, de convertir des unités et parfois de calculer une accélération.

### Mouvements et trajectoires
- Le mouvement d'une pièce se décrit **par rapport à une autre** (le rotor par rapport à la nacelle, la cabine par rapport au sol).
- **Translation** : tous les points ont la même trajectoire (rectiligne ou courbe) et la même vitesse. **Rotation** autour d'un axe fixe : chaque point décrit un **cercle** centré sur l'axe.
- La **trajectoire** d'un point est la courbe qu'il décrit : droite, cercle, hélice (vis qui avance en tournant).

### Vitesse angulaire et vitesse linéaire
- **ω = 2 × π × N / 60** : N en tr/min, ω en rad/s. 13,2 tr/min donnent ω ≈ 1,38 rad/s.
- En rotation, la vitesse d'un point à la distance R de l'axe : **v = ω × R** (m/s). Le vecteur vitesse est **tangent** à la trajectoire, perpendiculaire au rayon.
- Exemple : une pale de 58 m à 1,38 rad/s : v ≈ 80 m/s en bout de pale.
- Conversions : m/s × 3,6 = km/h ; 80 m/s ≈ 288 km/h.
- Plus le point est loin de l'axe, plus il va vite : la vitesse en bout de pale limite la vitesse de rotation (bruit, efforts).

### Le rapport de vitesse en bout de pale
- Pour une éolienne, le **TSR** (rapport de vitesse en bout de pale) λ = vitesse en bout de pale / vitesse du vent. Une éolienne est dite « lente » si λ < 3, « rapide » si λ > 3.
- Exemple : 80 m/s en bout de pale par un vent de 20 m/s : λ = 4, éolienne rapide.

### Le mouvement rectiligne
- **Mouvement uniforme** : v constante ; distance d = v × t.
- **Mouvement uniformément accéléré** depuis l'arrêt : v = a × t et d = a × t² / 2. Une cabine qui passe de 0 à 6 m/s en 12 s a une accélération a = 0,5 m/s² et parcourt 0,5 × 144 / 2 = 36 m.
- Une accélération douce est un critère de **confort** pour les passagers (souvent moins de 1 m/s²).
- Vitesse moyenne = distance totale / durée totale.

### Lire et tracer
- Sur un document réponse, on trace le vecteur vitesse à l'échelle, tangent à la trajectoire, dans le sens du mouvement.
- Une courbe vitesse-temps donne l'accélération par sa pente et la distance par l'aire sous la courbe.

### À retenir pour le bac
- Translation : même vitesse partout ; rotation : trajectoires circulaires.
- ω = 2 × π × N / 60 ; v = ω × R ; m/s × 3,6 = km/h.
- TSR λ = v bout de pale / v vent.
- Accéléré depuis l'arrêt : v = a × t ; d = a × t² / 2.
- Piège : utiliser des tr/min dans v = ω × R sans conversion.`,
      cartes: [
        { q: "Mouvement de translation ?", r: "Tous les points ont la même trajectoire et la même vitesse." },
        { q: "Trajectoire d'un point en rotation autour d'un axe fixe ?", r: "Un cercle centré sur l'axe." },
        { q: "Conversion tr/min en rad/s ?", r: "ω = 2 × π × N / 60." },
        { q: "Vitesse d'un point en rotation ?", r: "v = ω × R, avec ω en rad/s et R en m." },
        { q: "Direction du vecteur vitesse en rotation ?", r: "Tangente à la trajectoire, perpendiculaire au rayon." },
        { q: "Conversion m/s en km/h ?", r: "Multiplier par 3,6." },
        { q: "TSR d'une éolienne ?", r: "Vitesse en bout de pale divisée par la vitesse du vent." },
        { q: "Éolienne lente ou rapide ?", r: "Lente si λ < 3, rapide si λ > 3." },
        { q: "Distance en mouvement uniforme ?", r: "d = v × t." },
        { q: "Vitesse en mouvement uniformément accéléré depuis l'arrêt ?", r: "v = a × t." },
        { q: "Distance en mouvement uniformément accéléré depuis l'arrêt ?", r: "d = a × t² / 2." },
        { q: "Ce que donne la pente d'une courbe vitesse-temps ?", r: "L'accélération." },
        { q: "Ce que donne l'aire sous une courbe vitesse-temps ?", r: "La distance parcourue." },
      ],
      quiz: [
        { q: "Un rotor tourne à 13,2 tr/min. Vitesse angulaire, environ ?", choix: ["13,2 rad/s", "0,22 rad/s", "1,38 rad/s", "83 rad/s"], bonne: 2, expl: "2π × 13,2 / 60 ≈ 1,38 rad/s.", niv: 1 },
        { q: "Pale de 58 m de rayon à 1,38 rad/s. Vitesse en bout de pale, environ ?", choix: ["1,38 m/s", "42 m/s", "58 m/s", "80 m/s"], bonne: 3, expl: "1,38 × 58 ≈ 80 m/s.", niv: 2 },
        { q: "80 m/s en km/h ?", choix: ["288 km/h", "22 km/h", "80 km/h", "180 km/h"], bonne: 0, expl: "80 × 3,6 = 288 km/h.", niv: 2 },
        { q: "Le mouvement d'un rotor d'éolienne par rapport à la nacelle est :", choix: ["une translation rectiligne", "une rotation", "une translation circulaire", "un mouvement hélicoïdal"], bonne: 1, expl: "Le rotor tourne autour de l'axe fixé à la nacelle.", niv: 1 },
        { q: "Bout de pale à 80 m/s, vent à 20 m/s. TSR et type d'éolienne ?", choix: ["60, éolienne rapide", "0,25, éolienne lente", "4, éolienne lente", "4, éolienne rapide"], bonne: 3, expl: "80 / 20 = 4, plus que 3 : rapide.", niv: 2 },
        { q: "Une cabine passe de 0 à 6 m/s en 12 s, accélération constante. Distance parcourue ?", choix: ["6 m", "24 m", "36 m", "18 m"], bonne: 2, expl: "a = 0,5 m/s² ; d = 0,5 × 12² / 2 = 36 m.", niv: 3 },
        { q: "Le vecteur vitesse d'un point d'une roue qui tourne est :", choix: ["dirigé vers le centre", "tangent à sa trajectoire", "dirigé vers l'extérieur du cercle", "vertical"], bonne: 1, expl: "Il est perpendiculaire au rayon.", niv: 1 },
        { q: "Une cabine doit atteindre 7,5 m/s avec une accélération de 0,5 m/s². Durée ?", choix: ["15 s", "3,75 s", "7,5 s", "0,07 s"], bonne: 0, expl: "t = v / a = 7,5 / 0,5 = 15 s.", niv: 2 },
        { q: "Roue de 0,4 m de rayon qui entraîne une cabine à 7,5 m/s sans glisser. Vitesse angulaire ?", choix: ["18,75 rad/s", "3 rad/s", "7,5 rad/s", "179 rad/s"], bonne: 0, expl: "ω = v / R = 7,5 / 0,4 = 18,75 rad/s.", niv: 3 },
        { q: "À vitesse de rotation égale, un point placé deux fois plus loin de l'axe va :", choix: ["à la même vitesse", "deux fois moins vite", "deux fois plus vite", "quatre fois plus vite"], bonne: 2, expl: "v = ω × R.", niv: 2 },
        { q: "Un convoyeur avance à 0,5 m/s pendant 40 s. Distance parcourue ?", choix: ["80 m", "20 m", "40 m", "45 m"], bonne: 1, expl: "d = v × t = 0,5 × 40.", niv: 1 },
        { q: "Pourquoi limite-t-on la vitesse en bout de pale d'une grande éolienne ?", choix: ["Pour réduire la hauteur du mât et le coût de la fondation", "Pour augmenter la masse des pales", "Pour que le vent tourne plus vite", "Pour limiter le bruit et les efforts sur la structure"], bonne: 3, expl: "La vitesse en bout de pale augmente avec le rayon.", niv: 3 },
      ] },
    { chapitre: 'sti2d-itec-5',
      fiche: `## Transmissions : rapports, couples et rendements

Entre un moteur et l'organe qu'il entraîne, on place souvent une transmission : engrenages, poulies et courroie, chaîne, vis-écrou, pignon-crémaillère. Le sujet demande de nommer le principe, de calculer un rapport, une vitesse de sortie ou un couple, puis de conclure sur le choix du moteur.

### Le rapport de transmission
- **r = vitesse de sortie / vitesse d'entrée** = ωs / ωe = Ns / Ne. Si r < 1, c'est un **réducteur** ; si r > 1, un **multiplicateur**.
- **Engrenage** de deux roues : r = Z menante / Z menée (Z = nombre de dents). Pignon de 20 dents qui entraîne une roue de 60 dents : r = 1/3.
- **Train d'engrenages** : r = produit des Z menantes / produit des Z menées. Une roue intermédiaire seule ne change pas le rapport, seulement le sens.
- **Poulies et courroie** : r = d menante / d menée (diamètres). Même sens de rotation ; la courroie peut glisser un peu (sauf courroie crantée).
- **Roue et vis sans fin** : grand rapport de réduction dans un petit volume, souvent irréversible (la charge ne peut pas faire tourner le moteur).
- Plusieurs étages en série : on **multiplie** les rapports.

### Transformer le mouvement
- **Vis-écrou** : une rotation devient une translation. Vitesse : v = pas × N. Vis au pas de 5 mm à 600 tr/min : 3 000 mm/min = 50 mm/s.
- **Pignon-crémaillère** : v = ω × R du pignon.
- **Roue ou galet qui entraîne par frottement** (pneu contre une cabine, roue contre un câble) : v = ω × R, sans glissement.
- **Bielle-manivelle** ou **came** : une rotation devient un va-et-vient.

### Couple et rendement
- Sans pertes, la puissance se conserve : Ce × ωe = Cs × ωs. Un réducteur **divise la vitesse** et **multiplie le couple**.
- Avec un **rendement** η : Ps = η × Pe, donc **Cs = Ce × η / r**.
- Exemple : moteur 10 N·m, réducteur r = 1/20, η = 0,9 : Cs = 10 × 0,9 × 20 = **180 N·m**.
- Rendements en série : on les **multiplie** (0,95 × 0,9 = 0,855).
- Ordres de grandeur : engrenages 0,95 à 0,98 par étage ; courroie 0,95 ; roue et vis 0,4 à 0,9.

### Choisir et vérifier une transmission
- On part de la vitesse et du couple voulus à la sortie, on calcule ce que doit fournir le moteur, puis on compare à la documentation (vitesse maximale, couple nominal).
- Critères : rapport, couple transmissible, encombrement, bruit, entretien, précision, réversibilité, coût.
- Exemple : il faut 15 tr/min à la sortie avec r = 1/100 : le moteur doit tourner à 1 500 tr/min.

### À retenir pour le bac
- r = ωs / ωe ; engrenages : Z menantes / Z menées ; poulies : d menante / d menée.
- Étages en série : on multiplie les rapports et les rendements.
- Vis-écrou : v = pas × N ; galet ou pignon : v = ω × R.
- Cs = Ce × η / r : un réducteur multiplie le couple.
- Piège : inverser menante et menée dans le rapport.`,
      cartes: [
        { q: "Rapport de transmission ?", r: "r = vitesse de sortie / vitesse d'entrée." },
        { q: "Réducteur ou multiplicateur ?", r: "Réducteur si r < 1, multiplicateur si r > 1." },
        { q: "Rapport d'un engrenage ?", r: "Z de la roue menante / Z de la roue menée." },
        { q: "Rapport d'un train d'engrenages ?", r: "Produit des Z menantes / produit des Z menées." },
        { q: "Rôle d'une roue intermédiaire seule ?", r: "Changer le sens de rotation sans changer le rapport." },
        { q: "Rapport d'une transmission par poulies et courroie ?", r: "Diamètre de la poulie menante / diamètre de la poulie menée." },
        { q: "Intérêt d'une roue et vis sans fin ?", r: "Une grande réduction dans un petit volume, souvent irréversible." },
        { q: "Vitesse d'une vis-écrou ?", r: "v = pas × fréquence de rotation." },
        { q: "Couple de sortie d'un réducteur ?", r: "Cs = Ce × η / r." },
        { q: "Rendements de plusieurs étages ?", r: "On les multiplie." },
        { q: "Rendement typique d'un étage d'engrenages ?", r: "Environ 0,95 à 0,98." },
        { q: "Transmission par galet sans glissement ?", r: "La vitesse linéaire vaut ω × R du galet." },
        { q: "Système qui change une rotation en va-et-vient ?", r: "Bielle-manivelle ou came." },
      ],
      quiz: [
        { q: "Pignon de 20 dents qui entraîne une roue de 60 dents. Rapport ?", choix: ["3", "1/3", "1/40", "1/80"], bonne: 1, expl: "20 / 60 = 1/3 : c'est un réducteur.", niv: 1 },
        { q: "Moteur à 1 500 tr/min, réducteur r = 1/25. Vitesse de sortie ?", choix: ["60 tr/min", "37 500 tr/min", "1 475 tr/min", "150 tr/min"], bonne: 0, expl: "1 500 / 25 = 60 tr/min.", niv: 2 },
        { q: "Moteur de 10 N·m, réducteur r = 1/20 de rendement 0,9. Couple de sortie ?", choix: ["20 N·m", "0,45 N·m", "180 N·m", "9 N·m"], bonne: 2, expl: "10 × 0,9 × 20 = 180 N·m.", niv: 2 },
        { q: "Poulie menante de 100 mm, poulie menée de 300 mm. La transmission est :", choix: ["sans effet sur la vitesse", "un multiplicateur de rapport 3", "un réducteur de rapport 1/300", "un réducteur de rapport 1/3"], bonne: 3, expl: "r = 100 / 300.", niv: 1 },
        { q: "Vis au pas de 5 mm à 600 tr/min. Vitesse de l'écrou ?", choix: ["50 mm/s", "3 000 mm/s", "120 mm/s", "5 mm/s"], bonne: 0, expl: "5 × 600 = 3 000 mm/min = 50 mm/s.", niv: 2 },
        { q: "Deux étages : 18/54 puis 15/45, rendements 0,95 chacun. Rapport et rendement global ?", choix: ["1/9 et 0,95", "2/3 et 1,90", "1/6 et 0,95", "1/9 et 0,90"], bonne: 3, expl: "(1/3) × (1/3) = 1/9 ; 0,95 × 0,95 ≈ 0,90.", niv: 3 },
        { q: "Une roue intermédiaire placée entre deux roues dentées :", choix: ["double le rapport", "change le sens sans changer le rapport", "divise le couple par deux", "supprime les pertes"], bonne: 1, expl: "Elle est menée puis menante : ses dents s'éliminent.", niv: 1 },
        { q: "Il faut 15 tr/min en sortie d'un réducteur r = 1/100. Vitesse du moteur ?", choix: ["115 tr/min", "0,15 tr/min", "1 500 tr/min", "150 tr/min"], bonne: 2, expl: "15 × 100 = 1 500 tr/min.", niv: 2 },
        { q: "Pour qu'une charge levée ne fasse pas tourner le moteur à l'arrêt, on choisit :", choix: ["une courroie lisse", "une roue et vis sans fin irréversible", "un engrenage droit à un étage", "une chaîne de vélo"], bonne: 1, expl: "La roue et vis est souvent irréversible : elle retient la charge.", niv: 3 },
        { q: "Un réducteur divise la vitesse par 10. Sans pertes, son couple de sortie est :", choix: ["inchangé", "divisé par 10", "multiplié par 10", "multiplié par 100"], bonne: 2, expl: "La puissance C × ω se conserve.", niv: 2 },
        { q: "Rendement global de deux éléments de rendements 0,9 et 0,8 :", choix: ["0,72", "1,7", "0,85", "0,8"], bonne: 0, expl: "On multiplie : 0,9 × 0,8.", niv: 1 },
        { q: "Pignon de crémaillère de 30 mm de rayon à 10 rad/s. Vitesse de la crémaillère ?", choix: ["0,03 m/s", "3 m/s", "300 m/s", "0,3 m/s"], bonne: 3, expl: "v = ω × R = 10 × 0,03 = 0,3 m/s.", niv: 3 },
      ] },
    { chapitre: 'sti2d-itec-6',
      fiche: `## Graphe des liaisons et schéma cinématique

Pour comprendre un mécanisme, on regroupe les pièces qui bougent ensemble, puis on cherche comment ces groupes sont reliés. Le sujet demande de compléter un graphe des liaisons (nom, axe, centre), de trouver un mouvement possible ou de lire un schéma cinématique.

### Les classes d'équivalence
- Une **classe d'équivalence** est un groupe de pièces **sans mouvement entre elles** (vissées, soudées, emmanchées). On la repère par une couleur ou un numéro.
- Les roulements, ressorts et joints ne sont pas des classes : on les range avec la pièce qu'ils guident ou on les néglige.

### Les liaisons usuelles
- On compte les **degrés de liberté** : les mouvements possibles parmi 3 translations et 3 rotations.
- **Encastrement** : aucun mouvement (0 degré). **Pivot** : 1 rotation autour d'un axe. **Glissière** : 1 translation selon un axe. **Hélicoïdale** : rotation et translation liées par le pas (vis-écrou).
- **Pivot glissant** : 1 rotation et 1 translation sur le même axe (2 degrés). **Rotule** (sphérique) : 3 rotations autour d'un centre. **Appui plan** : 2 translations et 1 rotation. **Linéaire rectiligne**, **linéaire annulaire**, **ponctuelle** : de plus en plus de libertés (4, 4 et 5).
- Une liaison se définit par son **nom**, son **axe** (ou sa normale) et son **centre** (un point), par exemple « pivot d'axe (A, z) ».

### Le graphe des liaisons
- Chaque classe est un **cercle** ; chaque liaison est un **trait** entre deux cercles, avec son nom, son axe et son centre.
- On lit sur le graphe le **chemin** entre deux pièces : les mouvements possibles de la caméra par rapport au socle combinent ceux des liaisons traversées.
- Exemple : socle, coque et caméra ; pivot d'axe vertical entre socle et coque, pivot d'axe horizontal entre coque et caméra. Par rapport au socle, la caméra peut tourner autour de deux axes : orientation panoramique et inclinaison.
- Un vérin se représente par deux classes (corps et tige) reliées par un **pivot glissant**, chacune articulée à une pièce.

### Le schéma cinématique
- Il représente les liaisons par des **symboles normalisés** sur un dessin simplifié qui garde la position des axes. Il sert à comprendre et à calculer les mouvements.
- Un **schéma architectural** montre en plus la technologie (roulements, guidages).

### Calculer un angle de mouvement
- Pour orienter une caméra ou un bras vers un point : trigonométrie dans un triangle rectangle, **tan α = côté opposé / côté adjacent**.
- Exemple : un point situé à 30 m devant et 40 m sur le côté : α = arctan(40 / 30) ≈ **53°**. Une cible 5 m plus bas à 20 m : inclinaison arctan(5 / 20) ≈ 14°.
- On vérifie que l'angle obtenu reste dans la **plage** autorisée par la documentation du constructeur.

### À retenir pour le bac
- Classe d'équivalence : pièces sans mouvement entre elles.
- Pivot (1 rotation), glissière (1 translation), pivot glissant (2), rotule (3 rotations), encastrement (0).
- Graphe : cercles = classes, traits = liaisons avec nom, axe et centre.
- Mouvements entre deux pièces : combiner les liaisons du chemin.
- Piège : la calculatrice doit être en degrés pour un angle en degrés.`,
      cartes: [
        { q: "Classe d'équivalence ?", r: "Un groupe de pièces sans mouvement relatif entre elles." },
        { q: "Degrés de liberté d'une liaison ?", r: "Les mouvements qu'elle permet parmi 3 translations et 3 rotations." },
        { q: "Liaison pivot ?", r: "Une seule rotation autour d'un axe." },
        { q: "Liaison glissière ?", r: "Une seule translation selon un axe." },
        { q: "Liaison pivot glissant ?", r: "Une rotation et une translation sur le même axe." },
        { q: "Liaison rotule ?", r: "Trois rotations autour d'un centre, aucune translation." },
        { q: "Liaison hélicoïdale ?", r: "Une rotation et une translation liées par le pas, comme une vis et son écrou." },
        { q: "Encastrement ?", r: "Aucun mouvement possible entre les deux pièces." },
        { q: "Comment définir une liaison sur un graphe ?", r: "Par son nom, son axe ou sa normale, et son centre." },
        { q: "Que représente un cercle sur le graphe des liaisons ?", r: "Une classe d'équivalence." },
        { q: "Liaison entre le corps et la tige d'un vérin ?", r: "Un pivot glissant." },
        { q: "Schéma cinématique ?", r: "Un dessin simplifié avec les symboles normalisés des liaisons à la place des pièces." },
        { q: "Angle à partir de deux côtés d'un triangle rectangle ?", r: "α = arctan(côté opposé / côté adjacent)." },
      ],
      quiz: [
        { q: "Une liaison qui permet une seule rotation autour d'un axe est :", choix: ["un pivot", "une glissière", "une rotule", "un encastrement"], bonne: 0, expl: "La glissière permet une translation, la rotule trois rotations.", niv: 1 },
        { q: "Nombre de degrés de liberté d'une liaison pivot glissant ?", choix: ["5", "2", "3", "4"], bonne: 1, expl: "Une rotation et une translation sur le même axe.", niv: 2 },
        { q: "Corps et tige d'un vérin sont liés par :", choix: ["un appui plan", "un encastrement", "une rotule", "un pivot glissant"], bonne: 3, expl: "La tige peut coulisser et tourner dans le corps.", niv: 2 },
        { q: "Sur un graphe des liaisons, un cercle représente :", choix: ["un effort", "une liaison", "une classe d'équivalence", "une vis"], bonne: 2, expl: "Les traits représentent les liaisons.", niv: 1 },
        { q: "Pivot d'axe vertical socle-coque, pivot d'axe horizontal coque-caméra. Mouvements caméra/socle ?", choix: ["deux translations", "une seule rotation", "deux rotations d'axes différents", "un encastrement"], bonne: 2, expl: "On combine les liaisons du chemin socle, coque, caméra.", niv: 2 },
        { q: "Une cible est 30 m devant la caméra et 40 m sur le côté. Angle de rotation à donner, environ ?", choix: ["37°", "53°", "45°", "70°"], bonne: 1, expl: "arctan(40 / 30) ≈ 53°.", niv: 3 },
        { q: "Une vis et son écrou forment une liaison :", choix: ["hélicoïdale", "pivot", "glissière", "rotule"], bonne: 0, expl: "La rotation et la translation sont liées par le pas.", niv: 1 },
        { q: "Pièces vissées et collées entre elles, sans aucun mouvement :", choix: ["doivent être séparées sur le graphe", "forment une liaison pivot", "forment une liaison glissière", "appartiennent à la même classe d'équivalence"], bonne: 3, expl: "Elles bougent ensemble.", niv: 2 },
        { q: "Une caméra à 5 m de haut vise un point au sol à 20 m. Inclinaison sous l'horizontale ?", choix: ["76°", "14°", "4°", "25°"], bonne: 1, expl: "arctan(5 / 20) ≈ 14°.", niv: 3 },
        { q: "Une liaison rotule autorise :", choix: ["deux translations", "trois translations", "une rotation", "trois rotations"], bonne: 3, expl: "Comme l'épaule.", niv: 2 },
        { q: "Une liaison sans aucun degré de liberté s'appelle :", choix: ["un encastrement", "une ponctuelle", "un appui plan", "une linéaire annulaire"], bonne: 0, expl: "La ponctuelle en a cinq.", niv: 1 },
        { q: "Pourquoi précise-t-on l'axe et le centre de chaque liaison sur un graphe ?", choix: ["Pour choisir la couleur des classes", "Pour connaître la masse des pièces", "Pour savoir autour de quoi et où se font les mouvements", "Pour calculer le prix du mécanisme et le temps de son montage"], bonne: 2, expl: "Deux pivots d'axes différents ne donnent pas le même mouvement.", niv: 3 },
      ] },
    { chapitre: 'sti2d-itec-7',
      fiche: `## Vérins et actionneurs hydrauliques ou pneumatiques

Un vérin transforme la pression d'un fluide en effort et en mouvement de translation. Les sujets récents demandent de choisir un vérin pour lever un bras de grue ou orienter une pale : calcul de section, de diamètre, d'effort et de course.

### Le principe
- Un fluide sous **pression p** pousse sur la surface S du piston : **F = p × S**.
- Unités : **1 bar = 0,1 MPa** ; **10 bar = 1 MPa = 1 N/mm²**. Avec p en MPa et S en mm², F est en N.
- **Hydraulique** (huile, 100 à 350 bar) : très grands efforts, mouvements précis, pour grues, engins, presses. **Pneumatique** (air, environ 6 bar) : efforts plus faibles, mouvements rapides, propres, pour l'automatisation.

### Sortie et rentrée de tige
- **Vérin simple effet** : le fluide pousse dans un sens, un ressort ou la charge ramène la tige. **Double effet** : le fluide pousse dans les deux sens.
- **Sortie de tige** : la pression agit sur toute la surface du piston, **S1 = π × D² / 4**.
- **Rentrée de tige** : la tige occupe une partie de la surface, **S2 = π × (D² - d²) / 4**. L'effort de rentrée est donc plus petit.
- Exemple : D = 100 mm, d = 70 mm, p = 250 bar = 25 MPa. S1 ≈ 7 854 mm², F1 ≈ 196 kN ; S2 ≈ 4 006 mm², F2 ≈ 100 kN.
- Si le vérin doit tirer, c'est F2 qui compte : si F2 suffit, F1, plus grand, suffit aussi pour pousser.

### Dimensionner un vérin
- **Section nécessaire : S = F / p**, puis **diamètre D = racine(4 × S / π)**.
- Exemple : il faut 50 kN sous 160 bar (16 MPa) : S = 50 000 / 16 = 3 125 mm² ; D = racine(4 × 3 125 / π) ≈ 63 mm. On choisit dans le catalogue le diamètre normalisé **juste au-dessus** (63 mm s'il existe, sinon 80 mm), sans surdimensionner.
- La **course** est la distance entre tige rentrée et tige sortie. On la mesure sur un tracé (positions extrêmes du mécanisme) et on vérifie qu'elle est inférieure à la course du vérin choisi.
- Lire une référence : par exemple 100/70/950 = piston de 100 mm, tige de 70 mm, course de 950 mm.

### Vitesse et débit
- **Vitesse de la tige : v = Q / S**, avec Q le débit. 10 L/min = 10 000 000 mm³ / 60 s ; sur 7 854 mm², v ≈ 21 mm/s.
- À débit égal, la tige rentre plus vite qu'elle ne sort (surface plus petite).
- **Puissance hydraulique : P = p × Q** (Pa × m³/s = W).

### Les composants du circuit
- **Groupe motopompe** (pression et débit), **distributeur** (il choisit le sens : 4/3, 5/2 selon les orifices et les positions), **limiteur de pression** (sécurité), **clapet anti-retour**, **réducteur de débit** (règle la vitesse), réservoir, filtre.
- Un distributeur en position centrale fermée bloque la tige : la charge reste en place.

### À retenir pour le bac
- F = p × S ; 10 bar = 1 MPa = 1 N/mm².
- Sortie : S1 = π × D² / 4 ; rentrée : S2 = π × (D² - d²) / 4.
- Dimensionner : S = F / p, D = racine(4 × S / π), diamètre normalisé juste au-dessus.
- Vitesse : v = Q / S ; vérifier la course sur le tracé.
- Piège : oublier de convertir les bars avant de calculer.`,
      cartes: [
        { q: "Effort d'un vérin ?", r: "F = p × S, pression fois surface du piston." },
        { q: "10 bar en MPa ?", r: "1 MPa, soit 1 N/mm²." },
        { q: "Hydraulique ou pneumatique ?", r: "Hydraulique : huile, grands efforts ; pneumatique : air à environ 6 bar, efforts faibles et mouvements rapides." },
        { q: "Vérin simple effet ?", r: "Le fluide pousse dans un seul sens ; un ressort ou la charge ramène la tige." },
        { q: "Surface en sortie de tige ?", r: "S1 = π × D² / 4." },
        { q: "Surface en rentrée de tige ?", r: "S2 = π × (D² - d²) / 4." },
        { q: "Pourquoi l'effort de rentrée est-il plus faible ?", r: "La tige occupe une partie de la surface du piston." },
        { q: "Diamètre de piston nécessaire ?", r: "S = F / p puis D = racine(4 × S / π), arrondi au diamètre normalisé supérieur." },
        { q: "Course d'un vérin ?", r: "La distance entre la position tige rentrée et la position tige sortie." },
        { q: "Vitesse de la tige ?", r: "v = Q / S, débit divisé par la surface." },
        { q: "Rôle d'un distributeur ?", r: "Diriger le fluide pour choisir le sens de déplacement de la tige." },
        { q: "Rôle d'un limiteur de pression ?", r: "Protéger le circuit en limitant la pression maximale." },
        { q: "Puissance hydraulique ?", r: "P = p × Q." },
      ],
      quiz: [
        { q: "250 bar en MPa ?", choix: ["0,25 MPa", "2 500 MPa", "2,5 MPa", "25 MPa"], bonne: 3, expl: "10 bar = 1 MPa.", niv: 1 },
        { q: "Piston de 100 mm de diamètre. Surface en sortie de tige, environ ?", choix: ["314 mm²", "31 416 mm²", "7 854 mm²", "785 mm²"], bonne: 2, expl: "π × 100² / 4 ≈ 7 854 mm².", niv: 2 },
        { q: "Piston 100 mm, tige 70 mm. Surface en rentrée de tige, environ ?", choix: ["4 006 mm²", "7 854 mm²", "15 708 mm²", "5 027 mm²"], bonne: 0, expl: "π × (100² - 70²) / 4 ≈ 4 006 mm².", niv: 2 },
        { q: "Un vérin pneumatique d'usine travaille en général sous environ :", choix: ["250 bar", "6 bar", "0,1 bar", "1 000 bar"], bonne: 1, expl: "Le réseau d'air comprimé est autour de 6 bar.", niv: 1 },
        { q: "Surface 4 006 mm² sous 25 MPa. Effort, environ ?", choix: ["160 kN", "100 kN", "400 kN", "1 000 kN"], bonne: 1, expl: "4 006 × 25 ≈ 100 000 N.", niv: 2 },
        { q: "Il faut 50 kN sous 160 bar. Diamètre minimal du piston, environ ?", choix: ["63 mm", "40 mm", "56 mm", "18 mm"], bonne: 0, expl: "S = 50 000 / 16 = 3 125 mm² ; D = racine(4 × 3 125 / π) ≈ 63 mm.", niv: 3 },
        { q: "À pression égale, l'effort d'un vérin double effet est plus grand :", choix: ["à mi-course", "en rentrée de tige", "en sortie de tige", "à l'arrêt"], bonne: 2, expl: "En sortie, la pression agit sur toute la surface du piston.", niv: 1 },
        { q: "Une référence de vérin 100/70/950 signifie :", choix: ["tige 100 mm, piston 70 mm, course 950 mm", "course 100 mm, piston 70 mm, tige 950 mm", "pression 100 bar, effort 70 kN, masse 950 kg", "piston 100 mm, tige 70 mm, course 950 mm"], bonne: 3, expl: "On compare la course à celle mesurée sur le tracé.", niv: 2 },
        { q: "Le tracé donne une course nécessaire de 920 mm ; le vérin a 950 mm. Conclusion ?", choix: ["Le vérin convient, avec 30 mm de marge", "Le vérin est trop court de 30 mm", "Il faut un vérin de 1 870 mm", "La course n'a pas d'importance pour ce choix de vérin hydraulique"], bonne: 0, expl: "950 mm est plus que 920 mm.", niv: 3 },
        { q: "Débit de 10 L/min sur une surface de 7 854 mm². Vitesse de la tige, environ ?", choix: ["0,2 mm/s", "1 273 mm/s", "785 mm/s", "21 mm/s"], bonne: 3, expl: "10 000 000 mm³ / 60 s ≈ 166 667 mm³/s ; / 7 854 ≈ 21 mm/s.", niv: 2 },
        { q: "Le composant qui choisit le sens de déplacement de la tige est :", choix: ["le filtre", "le réservoir", "le distributeur", "le manomètre"], bonne: 2, expl: "Il dirige l'huile vers l'une ou l'autre chambre.", niv: 1 },
        { q: "Le calcul donne D = 58 mm ; catalogue : 50, 63, 80 mm. Quel piston choisir ?", choix: ["50 mm", "63 mm", "80 mm", "58 mm sur mesure"], bonne: 1, expl: "Juste au-dessus du besoin, sans surdimensionner.", niv: 3 },
      ] },
    { chapitre: 'sti2d-itec-8',
      fiche: `## Dimensionner en traction : contrainte, allongement, sécurité

Les bases de la résistance des matériaux sont dans le tronc commun. En ITEC, on dimensionne réellement une pièce : un câble de téléphérique, un mousqueton, une liaison de pale. On calcule la section minimale, l'allongement et on vérifie le coefficient de sécurité.

### Contrainte et sécurité
- **Contrainte normale de traction : σ = F / S** (N/mm² = MPa).
- Le matériau a une **limite élastique Re** (au-delà, la déformation devient définitive) et une **résistance à la rupture Rm**.
- **Contrainte admissible : σadm = Re / s** (ou Rm / s quand le règlement le précise), avec s le **coefficient de sécurité** imposé (par exemple 5 pour un câble de remontée mécanique, 2 pour un mousqueton).
- **Section minimale : Smin = F / σadm = F × s / Re.**
- Exemple : un câble porte 200 kN, Rm = 1 770 MPa, s = 5 : σadm = 354 MPa ; Smin = 200 000 / 354 ≈ **565 mm²**. On choisit dans le catalogue la section juste au-dessus, la plus légère possible.
- **Coefficient de sécurité obtenu : s = Re / σ** (ou résistance / effort), à comparer au minimum.

### L'allongement
- Dans le domaine élastique, **loi de Hooke : σ = E × ε**, avec E le **module d'Young** (acier environ 210 000 MPa ; un câble toronné a un E apparent plus faible, environ 100 000 à 120 000 MPa) et ε l'**allongement relatif** (sans unité).
- **Allongement total : ΔL = ε × L.**
- Exemple : σ = 330 MPa, E = 110 000 MPa : ε = 0,003 ; sur un câble de 2 000 m, ΔL = 6 m. Une poulie de tension doit pouvoir rattraper cette longueur (course suffisante).

### Les sections
- Disque plein : S = π × d² / 4. Anneau ou tube : S = π × (D² - d²) / 4. Câble : on additionne la section des fils, ou on lit la **section métallique** dans le catalogue.
- Une pièce en forme d'anneau (mousqueton) travaille en flexion autant qu'en traction : on lit la contrainte maximale sur la **simulation**.

### Les efforts dus à la rotation
- Une pièce qui tourne subit une **force centrifuge**, dirigée vers l'extérieur : **F = m × R × ω²** (R : distance du centre de gravité à l'axe).
- Exemple : pale de 11 t, R = 15,4 m, ω = 1,38 rad/s : F ≈ 11 000 × 15,4 × 1,9 ≈ 323 kN.
- L'effort dans la liaison s'obtient par le **théorème de la résultante** : la liaison équilibre le poids et la force centrifuge. Il est le plus grand quand ces deux forces sont dans le même sens (pale en bas : 323 + 108 ≈ 431 kN).

### Lire une simulation
- La simulation donne une carte de **contraintes** (souvent de Von Mises) ; la zone la plus chaude est la plus sollicitée.
- On relève la contrainte maximale et on calcule s = Re / σmax ; on compare aussi le déplacement maximal à la limite donnée.
- Si la vérification échoue : augmenter la section, changer de matériau, changer de forme (arrondis contre les concentrations de contraintes), ou réduire la charge.

### À retenir pour le bac
- σ = F / S ; σadm = Re / s ; Smin = F × s / Re.
- Hooke : σ = E × ε ; ΔL = ε × L.
- Force centrifuge : F = m × R × ω².
- s obtenu = Re / σmax, à comparer au minimum.
- Piège : choisir la section juste au-dessus du minimum, pas la plus proche.`,
      cartes: [
        { q: "Contrainte de traction ?", r: "σ = F / S, en MPa." },
        { q: "Limite élastique Re ?", r: "La contrainte au-delà de laquelle la déformation devient définitive." },
        { q: "Contrainte admissible ?", r: "σadm = Re / s, avec s le coefficient de sécurité." },
        { q: "Section minimale d'une pièce tendue ?", r: "Smin = F × s / Re (ou / Rm selon le règlement)." },
        { q: "Coefficient de sécurité obtenu ?", r: "s = Re / σ réelle, à comparer au minimum imposé." },
        { q: "Loi de Hooke ?", r: "σ = E × ε, dans le domaine élastique." },
        { q: "Module d'Young de l'acier ?", r: "Environ 210 000 MPa." },
        { q: "Allongement total d'une pièce ?", r: "ΔL = ε × L." },
        { q: "Section d'un tube ou d'un anneau ?", r: "S = π × (D² - d²) / 4." },
        { q: "Force centrifuge ?", r: "F = m × R × ω², dirigée vers l'extérieur de la trajectoire." },
        { q: "Quand l'effort dans la liaison d'une pale est-il maximal ?", r: "Quand le poids et la force centrifuge sont dans le même sens, pale en bas." },
        { q: "Que lit-on sur une simulation de contraintes ?", r: "La contrainte maximale et sa zone, pour calculer le coefficient de sécurité." },
        { q: "Solutions si une pièce ne résiste pas ?", r: "Augmenter la section, changer de matériau ou de forme, réduire la charge." },
      ],
      quiz: [
        { q: "Barre de 200 mm² tendue par 30 000 N. Contrainte ?", choix: ["0,15 MPa", "6 000 MPa", "150 MPa", "15 MPa"], bonne: 2, expl: "30 000 / 200 = 150 N/mm².", niv: 1 },
        { q: "Câble : Rm = 1 770 MPa, coefficient de sécurité 5. Contrainte admissible ?", choix: ["8 850 MPa", "354 MPa", "1 765 MPa", "177 MPa"], bonne: 1, expl: "1 770 / 5 = 354 MPa.", niv: 2 },
        { q: "Effort 200 kN, contrainte admissible 354 MPa. Section minimale, environ ?", choix: ["1 130 mm²", "2 830 mm²", "70 800 mm²", "565 mm²"], bonne: 3, expl: "200 000 / 354 ≈ 565 mm².", niv: 2 },
        { q: "La loi de Hooke relie :", choix: ["contrainte et allongement relatif", "force et vitesse", "pression et débit", "couple et puissance"], bonne: 0, expl: "σ = E × ε dans le domaine élastique.", niv: 1 },
        { q: "σ = 330 MPa, E = 110 000 MPa, câble de 2 000 m. Allongement total ?", choix: ["6 m", "0,6 m", "60 m", "0,003 m"], bonne: 0, expl: "ε = 0,003 ; 0,003 × 2 000 = 6 m.", niv: 2 },
        { q: "Pale de 11 000 kg, centre de gravité à 15,4 m de l'axe, ω = 1,38 rad/s. Force centrifuge, environ ?", choix: ["108 kN", "234 kN", "323 kN", "169 kN"], bonne: 2, expl: "11 000 × 15,4 × 1,38² ≈ 323 000 N.", niv: 3 },
        { q: "Un coefficient de sécurité de 2 signifie que la pièce :", choix: ["peut casser deux fois", "supporte deux fois la charge prévue avant la limite", "pèse deux fois plus", "est fabriquée avec deux matériaux différents assemblés"], bonne: 1, expl: "σadm = Re / 2.", niv: 1 },
        { q: "Simulation : σmax = 140 MPa, Re = 280 MPa, sécurité exigée 2,5. Conclusion ?", choix: ["Non conforme : 140 dépasse 112", "Conforme : 140 est sous 280", "Conforme : 280 / 140 = 2,5", "Non conforme : 280 / 140 = 2 est sous 2,5"], bonne: 3, expl: "Le coefficient obtenu doit atteindre 2,5 : il faudrait σmax ≤ 112 MPa.", niv: 2 },
        { q: "Force centrifuge 323 kN et poids 108 kN. Effort maximal dans la liaison moyeu-pale ?", choix: ["108 kN", "215 kN", "323 kN", "431 kN"], bonne: 3, expl: "Pale en bas : les deux forces s'ajoutent.", niv: 3 },
        { q: "Section d'un tube de diamètres 40 et 30 mm, environ ?", choix: ["1 257 mm²", "550 mm²", "707 mm²", "2 200 mm²"], bonne: 1, expl: "π × (40² - 30²) / 4 = π × 700 / 4 ≈ 550 mm².", niv: 2 },
        { q: "Le module d'Young de l'acier vaut environ :", choix: ["7 850 MPa", "235 MPa", "210 000 MPa", "2 100 MPa"], bonne: 2, expl: "235 MPa est une limite élastique courante, pas un module.", niv: 1 },
        { q: "Sections du catalogue : 520, 580, 650 mm². Il faut au moins 565 mm² et le câble le plus léger. Choix ?", choix: ["580 mm²", "520 mm²", "650 mm²", "565 mm² sur mesure"], bonne: 0, expl: "Juste au-dessus du minimum : sécurité respectée et masse limitée.", niv: 3 },
      ] },
    { chapitre: 'sti2d-itec-9',
      fiche: `## Choisir un matériau et un procédé de fabrication

Le tronc commun présente les familles de matériaux. En ITEC, on choisit le matériau et le procédé d'une pièce précise à partir de critères chiffrés, en pensant à la masse, au coût, à l'impact et à la fabrication en série.

### Les critères de choix
- **Mécaniques** : limite élastique Re, module d'Young E, dureté, résistance à la fatigue et aux chocs.
- **Masse volumique ρ** : aluminium 2 700 kg/m³, acier 7 850, titane 4 500, polymères 900 à 1 400, bois 500, composite carbone environ 1 600.
- **Résistance spécifique Re / ρ** : elle compare la résistance pour une même masse. Alliage d'aluminium (Re = 270 MPa) : 270 / 2,7 = 100 ; acier (Re = 355 MPa) : 355 / 7,85 ≈ 45. À masse égale, l'aluminium résiste mieux.
- Autres critères : **corrosion**, tenue en température, **coût** (au kg et à la mise en forme), **recyclabilité**, impact carbone, aspect, usinabilité.
- Une **carte de matériaux** (diagramme d'Ashby) place les matériaux selon deux propriétés, par exemple résistance et masse volumique ; on trace la zone acceptable et on garde les candidats qui y tombent.

### Les familles et leurs usages
- **Métaux** : aciers (pas chers, résistants, lourds, rouillent sauf inox), **alliages d'aluminium** (légers, ne rouillent pas, se recyclent bien), titane (très résistant et léger, cher).
- **Polymères** : **thermoplastiques** (PP, ABS, PA, PET) qui se refondent, donc se recyclent ; **thermodurcissables** (époxy) qui ne se refondent pas.
- **Composites** : fibres (verre, carbone, lin) dans une résine ; très légers et rigides, mais difficiles à recycler.

### Les procédés
- **Fonderie et moulage** : métal liquide dans un moule ; formes complexes en série.
- **Injection plastique** : thermoplastique fondu injecté dans un moule ; très grandes séries, moule cher, pièce bon marché.
- **Forgeage** : déformation à chaud d'un lopin par chocs ou pression ; pièces très résistantes (fibres continues), comme un mousqueton ou un crochet.
- **Laminage** (tôles, barres), **extrusion** ou **filage** (profilés en aluminium), **tréfilage** (fils, câbles), **cintrage** (courber une barre), **emboutissage** (tôle mise en forme dans une matrice).
- **Usinage** (tournage, fraisage, perçage) : enlever de la matière pour une grande précision ; beaucoup de copeaux.
- **Découpe laser ou jet d'eau**, **pliage** de tôles.
- **Fabrication additive** (impression 3D) : couche par couche, sans moule ; idéale pour un prototype, une petite série ou une forme impossible autrement.
- Le procédé dépend de la **quantité** à produire : quelques pièces, impression 3D ou usinage ; des milliers, moulage, injection ou emboutissage.

### Calculer une masse et un coût
- **Masse = ρ × volume.** Pièce de 120 cm³ : en aluminium 0,000120 × 2 700 = 0,324 kg ; en acier 0,94 kg.
- **Coût matière = masse × prix au kg** ; avec un moule, coût unitaire = coût du moule / nombre de pièces + coût variable.

### À retenir pour le bac
- Critères : Re, E, ρ, Re / ρ, corrosion, coût, recyclabilité, impact.
- Thermoplastiques recyclables ; thermodurcissables non refondables ; composites légers mais durs à recycler.
- Forgeage pour la résistance, injection et emboutissage pour les grandes séries, impression 3D pour le prototype.
- Masse = ρ × V ; coût unitaire = moule / quantité + coût variable.
- Piège : comparer les matériaux à masse égale avec Re / ρ, pas avec Re seul.`,
      cartes: [
        { q: "Masse volumique de l'aluminium ?", r: "Environ 2 700 kg/m³." },
        { q: "Masse volumique de l'acier ?", r: "Environ 7 850 kg/m³." },
        { q: "Résistance spécifique ?", r: "Re / ρ : la résistance rapportée à la masse." },
        { q: "Intérêt d'une carte de matériaux ?", r: "Placer les matériaux selon deux propriétés et garder ceux de la zone acceptable." },
        { q: "Thermoplastique ou thermodurcissable ?", r: "Le thermoplastique se refond et se recycle ; le thermodurcissable non." },
        { q: "Point faible des composites ?", r: "Ils sont difficiles à recycler." },
        { q: "Forgeage ?", r: "Déformer à chaud un lopin par chocs ou pression : pièces très résistantes." },
        { q: "Injection plastique ?", r: "Thermoplastique fondu injecté dans un moule : très grandes séries." },
        { q: "Extrusion ?", r: "Pousser la matière à travers une filière pour obtenir un profilé." },
        { q: "Usinage ?", r: "Enlever de la matière (tournage, fraisage, perçage) pour une grande précision." },
        { q: "Intérêt de la fabrication additive ?", r: "Sans moule, couche par couche : prototypes, petites séries, formes complexes." },
        { q: "Calcul de la masse d'une pièce ?", r: "Masse = masse volumique × volume." },
        { q: "Coût unitaire avec un moule ?", r: "Coût du moule / nombre de pièces + coût variable par pièce." },
      ],
      quiz: [
        { q: "À masse égale, le matériau le plus résistant parmi ces quatre (Re / ρ) est :", choix: ["l'acier, 45", "l'alliage d'aluminium, 100", "le PP, 30", "le bois, 20"], bonne: 1, expl: "On compare la résistance spécifique.", niv: 1 },
        { q: "Pièce de 120 cm³ en aluminium (2 700 kg/m³). Masse ?", choix: ["0,032 kg", "324 kg", "3,24 kg", "0,324 kg"], bonne: 3, expl: "0,000120 m³ × 2 700 = 0,324 kg.", niv: 2 },
        { q: "Le même volume de 120 cm³ en acier (7 850 kg/m³) pèse environ :", choix: ["0,94 kg", "9,4 kg", "0,094 kg", "0,32 kg"], bonne: 0, expl: "0,000120 × 7 850 ≈ 0,94 kg.", niv: 2 },
        { q: "Un mousqueton doit être très résistant : son corps est obtenu par :", choix: ["injection de polypropylène", "impression 3D en PLA", "forgeage", "moulage en plâtre"], bonne: 2, expl: "Le forgeage donne des fibres continues et une grande résistance.", niv: 1 },
        { q: "Moule à 30 000 € ; coût variable 0,50 € ; 100 000 pièces. Coût unitaire ?", choix: ["3,50 €", "1,30 €", "30 000,50 €", "0,80 €"], bonne: 3, expl: "30 000 / 100 000 + 0,50 = 0,80 €.", niv: 2 },
        { q: "Profilé d'aluminium de section constante, en grande longueur. Procédé adapté ?", choix: ["le forgeage", "l'extrusion", "l'injection", "l'emboutissage"], bonne: 1, expl: "La matière est poussée à travers une filière qui donne la section.", niv: 3 },
        { q: "Un plastique que l'on peut refondre et recycler est :", choix: ["un composite carbone-époxy", "un thermodurcissable", "un thermoplastique", "une céramique"], bonne: 2, expl: "PP, ABS, PA, PET.", niv: 1 },
        { q: "Pour 5 prototypes d'une coque aux formes complexes, on choisit plutôt :", choix: ["la fabrication additive", "l'injection plastique", "l'emboutissage", "la fonderie sous pression"], bonne: 0, expl: "Pas de moule à payer pour quelques pièces.", niv: 2 },
        { q: "Une pièce passe de l'acier (0,94 kg) à l'aluminium (0,32 kg). Gain de masse, environ ?", choix: ["50 %", "34 %", "66 %", "194 %"], bonne: 2, expl: "(0,94 - 0,32) / 0,94 ≈ 0,66.", niv: 3 },
        { q: "Un composite carbone-époxy se distingue surtout par :", choix: ["sa grande rigidité pour une faible masse", "sa facilité de recyclage", "son faible prix", "sa conductivité thermique"], bonne: 0, expl: "Mais il se recycle mal.", niv: 2 },
        { q: "Pour obtenir des tôles d'acier fines à partir d'une brame, on utilise :", choix: ["le tournage", "le perçage", "le cintrage", "le laminage"], bonne: 3, expl: "La brame passe entre des cylindres.", niv: 1 },
        { q: "Pourquoi l'injection n'est-elle rentable qu'en grande série ?", choix: ["La matière est plus chère en injection", "Le moule coûte cher et s'amortit sur beaucoup de pièces", "Les pièces sont moins précises", "Le procédé est très lent et demande beaucoup de main-d'œuvre"], bonne: 1, expl: "Le coût du moule divisé par la quantité devient faible.", niv: 3 },
      ] },
    { chapitre: 'sti2d-itec-10',
      fiche: `## Maquette numérique, simulation et prototypage

En ITEC, on conçoit sur ordinateur avant de fabriquer. La maquette numérique sert à vérifier l'encombrement et les mouvements, la simulation à prévoir la résistance, et le prototype à tester en vrai. Les sujets demandent de lire une simulation, de comparer un résultat simulé à une mesure et de proposer une modification.

### La maquette numérique
- La **CAO** (conception assistée par ordinateur) crée des pièces en volume à partir d'**esquisses** contraintes (cotes, parallélisme, tangence) et de fonctions (extrusion, révolution, perçage, congé).
- L'**assemblage** place les pièces les unes par rapport aux autres avec des **contraintes d'assemblage** qui reproduisent les liaisons. On peut animer le mécanisme, mesurer une course, détecter des **collisions**.
- La maquette donne aussi la **masse**, le **centre de gravité** et le volume de chaque pièce, à partir du matériau choisi.
- Une **mise en plan** (dessin de définition) donne les cotes et les tolérances pour la fabrication.

### La simulation mécanique
- La méthode des **éléments finis** découpe la pièce en petits éléments (le **maillage**) et calcule contraintes et déplacements.
- Il faut définir le **matériau**, les **conditions aux limites** (ce qui est fixé) et les **chargements** (forces, pressions). Une erreur sur ces données donne un résultat faux, même joli.
- Résultats : **contrainte de Von Mises** (à comparer à Re), **déplacement** maximal, **coefficient de sécurité** = Re / σmax.
- Un maillage plus fin près des arrondis et des trous donne un résultat plus juste là où la contrainte se concentre.

### Comparer simulation et réel
- **Écart relatif = (valeur mesurée - valeur simulée) / valeur mesurée × 100** (ou par rapport à la valeur de référence indiquée).
- Exemple : flèche simulée 12,0 mm, mesurée 12,6 mm : écart = 0,6 / 12,6 ≈ 4,8 %.
- Causes d'écart : modèle simplifié (liaisons parfaites, matériau idéal), maillage trop grossier, défauts de fabrication, incertitude de mesure.

### Le prototypage
- **Maquette** d'aspect (forme, ergonomie), **prototype fonctionnel** (il marche), **présérie** (procédé de série).
- **Impression 3D** par dépôt de fil (FDM) : PLA ou PETG, couches de 0,1 à 0,3 mm, remplissage partiel (20 % par exemple) pour gagner matière et temps. Coût matière = masse imprimée × prix du filament.
- Exemple : 85 g de PLA à 25 € le kg : 85 × 0,025 = 2,13 €.
- Les pièces imprimées sont moins résistantes entre les couches : on oriente la pièce pour que l'effort ne sépare pas les couches.

### Tolérances et ajustements
- Une cote réelle n'est jamais exacte : on donne une **tolérance** (20 ± 0,1 mm : entre 19,9 et 20,1 mm).
- **Ajustement** entre un arbre et un alésage : avec **jeu** (l'arbre tourne, comme dans un pivot) ou **serré** (l'arbre est emmanché en force, comme un encastrement). Jeu = alésage - arbre.
- Exemple : alésage 20,00 à 20,05 mm, arbre 19,95 à 19,98 mm : jeu mini 0,02 mm, jeu maxi 0,10 mm.

### À retenir pour le bac
- CAO : esquisses contraintes, assemblage, collisions, masse et centre de gravité.
- Simulation : maillage, conditions aux limites, chargements ; Von Mises et déplacement.
- Écart relatif = différence / référence × 100 ; expliquer les causes.
- Prototype : impression 3D, coût = masse × prix ; orienter les couches.
- Piège : une simulation n'est fiable que si les liaisons et les charges sont bien définies.`,
      cartes: [
        { q: "Que signifie CAO ?", r: "Conception assistée par ordinateur." },
        { q: "Esquisse contrainte ?", r: "Un dessin 2D dont les cotes et relations (parallélisme, tangence) sont fixées." },
        { q: "Rôle des contraintes d'assemblage ?", r: "Placer les pièces entre elles en reproduisant les liaisons." },
        { q: "Ce que la maquette numérique permet de vérifier ?", r: "Encombrement, mouvements, courses, collisions, masse et centre de gravité." },
        { q: "Méthode des éléments finis ?", r: "Découper la pièce en petits éléments pour calculer contraintes et déplacements." },
        { q: "Conditions aux limites d'une simulation ?", r: "Ce qui est fixé ou guidé sur la pièce." },
        { q: "Contrainte de Von Mises ?", r: "Une contrainte équivalente à comparer à la limite élastique." },
        { q: "Écart relatif entre simulation et mesure ?", r: "(Mesure - simulation) / référence × 100." },
        { q: "Causes d'écart entre simulation et réel ?", r: "Modèle simplifié, maillage, défauts de fabrication, incertitude de mesure." },
        { q: "Maquette ou prototype ?", r: "La maquette montre la forme ; le prototype fonctionne vraiment." },
        { q: "Coût matière d'une impression 3D ?", r: "Masse imprimée × prix du filament au kg." },
        { q: "Point faible d'une pièce imprimée par dépôt de fil ?", r: "Elle résiste moins entre les couches." },
        { q: "Ajustement avec jeu ou serré ?", r: "Avec jeu : l'arbre peut tourner ; serré : l'arbre est emmanché en force." },
      ],
      quiz: [
        { q: "Flèche simulée 12,0 mm, mesurée 12,6 mm. Écart relatif par rapport à la mesure, environ ?", choix: ["4,8 %", "0,6 %", "5,0 %", "60 %"], bonne: 0, expl: "0,6 / 12,6 ≈ 0,048.", niv: 1 },
        { q: "Impression de 85 g de PLA à 25 € le kg. Coût matière ?", choix: ["8,50 €", "21,25 €", "2,13 €", "3,40 €"], bonne: 2, expl: "0,085 × 25 ≈ 2,13 €.", niv: 2 },
        { q: "Alésage 20,00 à 20,05 mm ; arbre 19,95 à 19,98 mm. Jeu maximal ?", choix: ["0,07 mm", "0,02 mm", "0,05 mm", "0,10 mm"], bonne: 3, expl: "20,05 - 19,95 = 0,10 mm.", niv: 2 },
        { q: "Dans une simulation, ce qui est fixé sur la pièce s'appelle :", choix: ["le maillage", "les conditions aux limites", "le chargement", "la mise en plan"], bonne: 1, expl: "Le chargement correspond aux forces appliquées.", niv: 1 },
        { q: "Simulation : σ Von Mises maximale 90 MPa ; Re = 270 MPa. Coefficient de sécurité ?", choix: ["1,5", "0,33", "3", "2,7"], bonne: 2, expl: "270 / 90 = 3.", niv: 2 },
        { q: "Une simulation donne une contrainte très faible, mais la pièce casse au test. Cause probable ?", choix: ["La pièce était trop légère pour supporter les efforts du test réel", "Le maillage était trop fin", "Le matériau réel est plus résistant", "Chargements ou liaisons mal définis dans le modèle"], bonne: 3, expl: "Le résultat ne vaut que ce que valent les données du modèle.", niv: 3 },
        { q: "Une maquette numérique d'assemblage permet de détecter :", choix: ["les collisions entre pièces", "le prix de vente final", "le goût des utilisateurs", "la météo du chantier"], bonne: 0, expl: "On anime le mécanisme et on repère les interférences.", niv: 1 },
        { q: "Cote 20 ± 0,1 mm. Valeur la plus petite acceptable ?", choix: ["19,99 mm", "19,9 mm", "20,1 mm", "19 mm"], bonne: 1, expl: "20 - 0,1 = 19,9 mm.", niv: 2 },
        { q: "Pièce imprimée en 3D soumise à une traction. Comment l'orienter ?", choix: ["Couches perpendiculaires à l'effort", "Couches parallèles à l'effort", "L'orientation ne change rien", "Pièce imprimée à 100 % de vide"], bonne: 1, expl: "Ainsi l'effort ne sépare pas les couches.", niv: 3 },
        { q: "Pourquoi affine-t-on le maillage près d'un trou ou d'un arrondi ?", choix: ["La contrainte s'y concentre", "Pour alléger la pièce", "Le logiciel l'impose", "Pour réduire le prix de la pièce"], bonne: 0, expl: "Un maillage fin calcule mieux les fortes variations.", niv: 2 },
        { q: "Un prototype fonctionnel sert à :", choix: ["montrer la couleur", "vendre le produit en magasin", "remplacer la série", "tester le fonctionnement réel"], bonne: 3, expl: "La maquette d'aspect montre la forme ; le prototype fonctionne.", niv: 1 },
        { q: "Masse simulée 1,20 kg avec l'acier ; on passe à l'aluminium (2 700 contre 7 850 kg/m³). Nouvelle masse ?", choix: ["1,20 kg", "3,49 kg", "0,41 kg", "0,12 kg"], bonne: 2, expl: "1,20 × 2 700 / 7 850 ≈ 0,41 kg.", niv: 3 },
      ] },
  ],

  methode: [
    { id: 'sti2d-itec-m1', mat: 'sti2d-itec', titre: "Vérifier la vitesse d'un rotor : ω, vitesse en bout de pale et TSR",
      formules: ["Préciser les raisons qui limitent la vitesse de rotation en bout de pale", "En déduire la vitesse angulaire maximale du rotor en rad/s", "Définir la nature du mouvement et de la trajectoire du point en bout de pale", "Calculer la vitesse tangentielle et en déduire la valeur en km/h", "Calculer le TSR et conclure si la vitesse de rotation est conforme"],
      vu: ["Métropole 2025, sujet sur une ferme éolienne, partie spécifique ITEC : questions A.1 à A.6 (rotor de 13,2 tr/min, vitesse en bout de pale, TSR)", "Métropole 2024, sujet sur un téléphérique urbain : vitesse d'un véhicule entraîné par des pneus, v = ω × R (questions C.3 et C.4)"], pts: "1,5 à 2,5 points",
      attendu: "Le mouvement de rotation et la trajectoire circulaire, la conversion ω = 2 × π × N / 60, v = ω × R avec le bon rayon, la conversion en km/h, λ = v / v vent, puis une conclusion qui compare aux limites du constructeur (bruit, efforts).",
      etapes: ["Nommer le mouvement (rotation) et la trajectoire (cercle de rayon R)", "Convertir N en ω", "Calculer v = ω × R en m/s, puis × 3,6 en km/h", "Calculer λ = v / v vent et classer l'éolienne", "Comparer aux limites et conclure"],
      mots: ["rotation", "trajectoire circulaire", "vitesse angulaire", "vitesse tangentielle", "TSR", "éolienne rapide"],
      pieges: ["Utiliser N en tr/min dans v = ω × R", "Prendre le diamètre au lieu du rayon", "Oublier la conversion en km/h", "Comparer des vitesses dans des unités différentes"],
      cas: "Une éolienne fictive a des pales de 50 m de rayon. Sa fréquence de rotation maximale est de 15 tr/min. Le constructeur limite la vitesse en bout de pale à 85 m/s. La vitesse de vent étudiée est de 22 m/s.",
      question: "Calculer la vitesse angulaire, la vitesse en bout de pale en m/s et en km/h, le TSR, puis conclure.",
      modele: `Mouvement : rotation du rotor par rapport à la nacelle ; le bout de pale décrit un cercle de 50 m de rayon.

Vitesse angulaire : ω = 2 × π × 15 / 60 ≈ 1,57 rad/s.

Vitesse en bout de pale : v = 1,57 × 50 ≈ 78,5 m/s, soit 78,5 × 3,6 ≈ 283 km/h.

TSR : λ = 78,5 / 22 ≈ 3,6, plus que 3 : éolienne rapide.

Conclusion : 78,5 m/s reste sous la limite de 85 m/s fixée par le constructeur : la vitesse de rotation est conforme.`,
      grille: ["Le mouvement et la trajectoire sont nommés", "ω est juste", "La vitesse en m/s et en km/h est juste", "Le TSR est calculé et la conclusion compare à la limite"] },

    { id: 'sti2d-itec-m2', mat: 'sti2d-itec', titre: "Choisir et vérifier un vérin hydraulique",
      formules: ["Déduire du tracé la course minimale de la tige", "Conclure à l'aide de la référence choisie si le vérin permet de garantir la plage de réglage", "Préciser le diamètre du piston et celui de la tige, calculer les surfaces S1 et S2", "Calculer l'effort correspondant à la rentrée de tige et conclure sur le choix du vérin", "Exprimer puis calculer la section et le diamètre du piston, choisir la référence du vérin"],
      vu: ["Métropole 2025, sujet sur une ferme éolienne, partie spécifique ITEC : questions B.3 à B.9 (vérin de calage 100/70/950 sous 250 bar)", "Polynésie 2025, sujet sur une grue, partie spécifique ITEC : questions A.6 à A.8 (section et diamètre du piston, choix sans surdimensionner)"], pts: "2 à 3 points",
      attendu: "La course mesurée comparée à la course du vérin, S1 = π × D² / 4 et S2 = π × (D² - d²) / 4, la conversion des bars en MPa, F = p × S, l'argument que l'effort de rentrée est le plus faible, et un choix de catalogue juste au-dessus du besoin.",
      etapes: ["Lire la référence : diamètre du piston, de la tige, course", "Comparer la course du vérin à la course nécessaire", "Convertir la pression : 10 bar = 1 MPa", "Calculer S1 et S2, puis F1 et F2", "Comparer l'effort le plus faible utile à l'effort demandé et conclure"],
      mots: ["vérin double effet", "sortie de tige", "rentrée de tige", "section annulaire", "pression d'alimentation", "course"],
      pieges: ["Oublier de retirer la section de la tige en rentrée", "Laisser la pression en bar", "Confondre diamètre et rayon dans π × D² / 4", "Choisir un vérin très surdimensionné"],
      cas: "Un vérin fictif oriente un volet. Référence : 80/56/650 (piston, tige, course en mm). Le tracé donne une course nécessaire de 600 mm. Pression d'alimentation : 200 bar. Le vérin doit fournir au moins 45 kN en rentrée de tige.",
      question: "Vérifier la course, calculer S1, S2, F1 et F2, puis conclure sur le choix.",
      modele: `Course : 650 mm disponibles pour 600 mm nécessaires : la course convient, avec 50 mm de marge.

Surfaces : S1 = π × 80² / 4 ≈ 5 027 mm² ; S2 = π × (80² - 56²) / 4 ≈ 2 564 mm².

Pression : 200 bar = 20 MPa. Efforts : F1 = 20 × 5 027 ≈ 100,5 kN en sortie ; F2 = 20 × 2 564 ≈ 51,3 kN en rentrée.

Conclusion : l'effort le plus faible, en rentrée, vaut 51,3 kN, plus que les 45 kN demandés : le vérin convient dans les deux sens, sans être très surdimensionné.`,
      grille: ["La course est vérifiée", "S1 et S2 sont justes", "La pression est convertie et F2 est juste", "La conclusion s'appuie sur l'effort le plus faible"] },

    { id: 'sti2d-itec-m3', mat: 'sti2d-itec', titre: "Calculer l'effort dans une liaison soumise à la force centrifuge",
      formules: ["Calculer le poids d'une pale et tracer le vecteur poids pour les deux positions", "Calculer la force centrifuge exercée sur la pale et la tracer", "Déduire la position où l'effort axial sera le plus important, le calculer et le tracer", "Conclure si la liaison résiste à l'effort axial et déterminer le coefficient de sécurité"],
      vu: ["Métropole 2025, sujet sur une ferme éolienne, partie spécifique ITEC : questions C.1 à C.4 (liaison moyeu-pale, effort axial limité à 1 000 kN)"], pts: "1,5 à 2 points",
      attendu: "P = m × g, F = m × R × ω² avec ω en rad/s, des vecteurs tracés dans le bon sens (poids vers le bas, force centrifuge vers l'extérieur), la position où les deux forces s'ajoutent, l'effort par le théorème de la résultante, puis s = effort admissible / effort calculé.",
      etapes: ["Calculer le poids P = m × g", "Convertir N en ω et calculer F = m × R × ω²", "Repérer la position où poids et force centrifuge sont dans le même sens (pale en bas)", "Effort dans la liaison = P + F dans cette position", "Comparer à la limite et calculer s"],
      mots: ["force centrifuge", "vitesse angulaire", "théorème de la résultante", "effort axial", "coefficient de sécurité"],
      pieges: ["Garder N en tr/min dans ω²", "Oublier de mettre ω au carré", "Soustraire au lieu d'ajouter dans la position la plus défavorable", "Calculer s à l'envers"],
      cas: "Une pale fictive de 8 000 kg a son centre de gravité à 12 m de l'axe. Le rotor tourne à 16 tr/min. La liaison moyeu-pale admet 800 kN au maximum. On prend g = 9,81 m/s².",
      question: "Calculer le poids, la force centrifuge, l'effort maximal dans la liaison et le coefficient de sécurité.",
      modele: `Poids : P = 8 000 × 9,81 = 78 480 N, soit environ 78,5 kN.

Vitesse angulaire : ω = 2 × π × 16 / 60 ≈ 1,68 rad/s ; ω² ≈ 2,81.

Force centrifuge : F = 8 000 × 12 × 2,81 ≈ 269 500 N, soit environ 269,5 kN, dirigée vers l'extérieur.

Position la plus défavorable : pale en bas, poids et force centrifuge dans le même sens. Effort dans la liaison : 269,5 + 78,5 ≈ 348 kN.

Conclusion : 348 kN est sous les 800 kN admis : la liaison résiste, avec un coefficient de sécurité s = 800 / 348 ≈ 2,3.`,
      grille: ["Le poids est juste", "La force centrifuge est juste, avec ω en rad/s", "La position défavorable est justifiée et l'effort est juste", "Le coefficient de sécurité est calculé et la conclusion donnée"] },

    { id: 'sti2d-itec-m4', mat: 'sti2d-itec', titre: "Dimensionner un câble en traction",
      formules: ["Calculer la contrainte maximale admissible par le câble avec le coefficient de sécurité imposé", "Déterminer la surface minimale des torons du câble", "Sélectionner le câble garantissant le coefficient de sécurité tout en minimisant le poids", "Calculer l'allongement relatif puis l'allongement total du câble", "Vérifier que la course de la poulie de tension est suffisante et conclure"],
      vu: ["Métropole 2024, sujet sur un téléphérique urbain, partie spécifique ITEC : questions B.1 à B.9 (coefficient de sécurité 5, choix du câble, allongement, poulie de déviation)", "Polynésie 2024, sujet sur un site d'escalade : section et contrainte d'un mousqueton avec un coefficient de 2 (questions A.2 à A.5)"], pts: "2 à 3 points",
      attendu: "σadm = Rm / s, Smin = F / σadm, le choix de la section juste au-dessus (la plus légère qui convient), la loi de Hooke ε = σ / E, ΔL = ε × L, puis la comparaison à la course disponible.",
      etapes: ["Calculer σadm = Rm / s", "Calculer Smin = F / σadm", "Choisir dans le catalogue la plus petite section supérieure à Smin", "Recalculer σ avec la section choisie, puis ε = σ / E et ΔL = ε × L", "Comparer ΔL à la course de la poulie et conclure"],
      mots: ["contrainte admissible", "coefficient de sécurité", "section minimale", "module d'Young", "allongement relatif", "poulie de tension"],
      pieges: ["Calculer ε avec la contrainte admissible au lieu de la contrainte réelle", "Choisir la section la plus proche, même si elle est trop petite", "Oublier de convertir la longueur en mm ou ΔL en m", "Confondre Re et Rm"],
      cas: "Un câble fictif de 1 500 m supporte 150 kN. Rm = 1 960 MPa ; coefficient de sécurité 5 ; module apparent E = 110 000 MPa. Catalogue : sections métalliques 350, 400 et 460 mm². La poulie de tension a une course de 6 m.",
      question: "Calculer la section minimale, choisir le câble, calculer l'allongement et vérifier la poulie.",
      modele: `Contrainte admissible : σadm = 1 960 / 5 = 392 MPa.

Section minimale : Smin = 150 000 / 392 ≈ 383 mm². On choisit 400 mm², la plus petite section qui convient (la plus légère).

Contrainte réelle : σ = 150 000 / 400 = 375 MPa. Allongement relatif : ε = 375 / 110 000 ≈ 0,0034.

Allongement total : ΔL = 0,0034 × 1 500 ≈ 5,1 m, moins que les 6 m de course : la poulie de tension suffit.

Conclusion : le câble de 400 mm² respecte la sécurité de 5, limite la masse et son allongement est rattrapé par la poulie.`,
      grille: ["σadm et Smin sont justes", "Le câble choisi est le plus léger qui convient", "ε et ΔL sont justes", "La course de la poulie est vérifiée et la conclusion donnée"] },

    { id: 'sti2d-itec-m5', mat: 'sti2d-itec', titre: "Trouver des efforts par le triangle des forces",
      formules: ["Compléter le bilan des actions mécaniques extérieures", "Énoncer les actions mécaniques extérieures qui agissent sur le solide isolé", "Reporter la force connue et compléter le triangle des forces à l'échelle fournie", "Déterminer les normes des forces inconnues", "En déduire la section et le diamètre du vérin"],
      vu: ["Polynésie 2025, sujet sur une grue, partie spécifique ITEC : questions A.1 à A.8 (BAME, triangle des forces, puis choix du vérin de levage)", "Métropole 2024, sujet sur un téléphérique urbain : questions A.2 à A.7 (isolement du véhicule, poids, tracé à l'échelle)"], pts: "2 à 3 points",
      attendu: "Un BAME complet (point, direction, sens, intensité), la direction de l'effort du vérin selon son axe, le point de concours des trois droites d'action, un triangle fermé à l'échelle, des intensités lues et converties, puis la section S = F / p et le diamètre normalisé du vérin.",
      etapes: ["Isoler le bras et lister les actions dans le BAME", "Placer la direction du vérin (solide à deux forces) et celle du poids", "Trouver le point de concours, puis la direction de l'action à l'articulation", "Tracer le poids à l'échelle et fermer le triangle", "Mesurer, convertir, puis dimensionner le vérin"],
      mots: ["isolement", "bilan des actions mécaniques", "droites concourantes", "triangle des forces", "échelle des forces", "section du piston"],
      pieges: ["Oublier la charge soulevée dans le poids", "Tracer une direction quelconque pour le vérin", "Ne pas fermer le triangle dans l'ordre des flèches", "Oublier l'échelle en lisant les longueurs"],
      cas: "Un bras de grue fictif porte une charge de 20 kN. Le bras est articulé en A et soulevé par un vérin articulé à ses deux extrémités. Sur le triangle des forces tracé à l'échelle 1 cm pour 10 kN, l'effort du vérin mesure 6,2 cm et l'action en A mesure 4,5 cm. Le vérin est alimenté sous 200 bar ; catalogue : pistons de 50, 63 et 80 mm.",
      question: "Donner les intensités des efforts, puis la section et le diamètre du piston, et choisir le vérin.",
      modele: `Le vérin est un solide soumis à deux forces : son effort est porté par son axe. Les droites d'action du poids, du vérin et de l'action en A sont concourantes.

Intensités : vérin 6,2 × 10 = 62 kN ; articulation A : 4,5 × 10 = 45 kN.

Section du piston : 200 bar = 20 MPa ; S = 62 000 / 20 = 3 100 mm².

Diamètre : D = racine(4 × 3 100 / π) ≈ 62,8 mm.

Choix : le piston de 63 mm, juste au-dessus du besoin, maintient le bras sans surdimensionnement.`,
      grille: ["La direction de l'effort du vérin est justifiée", "Les intensités sont lues avec l'échelle", "La section est juste, avec la pression convertie", "Le diamètre est calculé et le choix est justifié"] },

    { id: 'sti2d-itec-m6', mat: 'sti2d-itec', titre: "Vérifier une transmission et le choix d'un moteur",
      formules: ["Indiquer le principe de transmission de mouvement utilisé", "Calculer le rapport de transmission entre une poulie menante et une poulie menée", "Exprimer la vitesse du véhicule en fonction de la vitesse angulaire du pneu", "Calculer la vitesse angulaire du pneu", "Conclure sur le choix du moteur"],
      vu: ["Métropole 2024, sujet sur un téléphérique urbain, partie spécifique ITEC : questions C.1 à C.6 (lanceurs à pneus en gare, rapports de poulies, moteur à 20 tr/min)", "Polynésie 2024, sujet sur une caméra de surveillance : rapport de transmission et données du constructeur (questions B.8 et B.9)"], pts: "1,5 à 2,5 points",
      attendu: "Le principe nommé (poulies et courroie, engrenages, galets), r = vitesse de sortie / vitesse d'entrée, v = ω × R, la conversion en tr/min, le couple à l'organe C = F × R, puis le couple et la vitesse demandés au moteur avec le rendement, comparés à sa documentation.",
      etapes: ["Nommer le principe de transmission", "Calculer ω = v / R à la sortie, puis N en tr/min", "Calculer le rapport r = N sortie / N moteur", "Couple à la sortie C = F × R ; couple moteur = C × r / η", "Comparer à la documentation du moteur et conclure"],
      mots: ["rapport de transmission", "réducteur", "vitesse angulaire", "couple", "rendement", "point de fonctionnement"],
      pieges: ["Inverser menante et menée", "Oublier le rendement", "Garder des rad/s quand la documentation est en tr/min", "Diviser le couple au lieu de le multiplier dans un réducteur"],
      cas: "Un lanceur fictif accélère des cabines avec des pneus de 0,3 m de rayon, jusqu'à 6 m/s. Chaque pneu pousse avec 1 200 N. Le moteur tourne à 1 450 tr/min et fournit au plus 60 N·m ; le réducteur a un rendement de 0,9.",
      question: "Calculer la vitesse de rotation du pneu, le rapport du réducteur, le couple au pneu et le couple demandé au moteur, puis conclure.",
      modele: `Vitesse angulaire du pneu : ω = v / R = 6 / 0,3 = 20 rad/s, soit 20 × 60 / (2 × π) ≈ 191 tr/min.

Rapport du réducteur : r = 191 / 1 450 ≈ 0,132, soit environ 1/7,6.

Couple au pneu : C = 1 200 × 0,3 = 360 N·m.

Couple demandé au moteur : 360 × 0,132 / 0,9 ≈ 53 N·m, sous les 60 N·m disponibles.

Conclusion : le moteur et le réducteur conviennent pour atteindre 6 m/s.`,
      grille: ["Le principe de transmission est nommé", "La vitesse de rotation du pneu est juste", "Le rapport et le couple au pneu sont justes", "Le couple moteur tient compte du rendement et la conclusion est donnée"] },
  ],

  sujets: [
    { id: 'sti2d-itec-s1', matiere: 'sti2d-itec', titre: "Sujet d'entraînement ITEC : le treuil de mise à l'eau du club d'aviron (fictif)", duree: 90,
      enonce: `Sujet d'entraînement inventé pour réviser : le club, le treuil et tous les chiffres sont fictifs. Il a la forme de la partie spécifique ITEC de l'écrit (durée indicative environ 1 h 30). Il est noté ici sur 20, dont 2 points pour la maîtrise de la langue. On prend g = 9,81 m/s².

PRÉSENTATION

Un club d'aviron remonte ses bateaux sur un chariot, le long d'une rampe inclinée de 15°, grâce à un treuil électrique. L'ancien treuil, lourd et rouillé, doit être remplacé. Problématique : comment concevoir un treuil sûr, bien dimensionné et à faible impact environnemental ?

Extrait du cahier des charges :
- Exigence 1 : remonter un chariot de 300 kg chargé d'un bateau de 100 kg à 0,4 m/s.
- Exigence 2 : la charge ne doit pas redescendre si le moteur s'arrête.
- Exigence 3 : le câble respecte un coefficient de sécurité de 5.
- Exigence 4 : le treuil résiste à l'humidité et pèse le moins possible.

PARTIE A — Les efforts et le couple (5 points)

Le chariot roule sans frottement sur la rampe. Le câble est parallèle à la rampe et s'enroule sur un tambour de 0,15 m de rayon.
A.1. Isoler l'ensemble chariot et bateau. Faire le bilan des actions mécaniques extérieures.
A.2. Calculer le poids total, puis l'effort de traction du câble à vitesse constante.
A.3. Calculer le couple sur le tambour.
A.4. Calculer la vitesse angulaire du tambour en rad/s, puis sa fréquence de rotation en tr/min.
A.5. Calculer la puissance utile à fournir au câble.

PARTIE B — La transmission et le moteur (4 points)

On envisage un moteur à 1 400 tr/min et un réducteur à roue et vis sans fin de rendement 0,7.
B.1. Calculer le rapport de réduction nécessaire.
B.2. Calculer le couple et la puissance que doit fournir le moteur.
B.3. Catalogue : moteurs de 370, 550 et 750 W. Choisir le moteur.
B.4. Expliquer pourquoi la roue et vis sans fin répond à l'exigence 2.

PARTIE C — Le câble (5 points)

En tenant compte des démarrages, l'effort maximal dans le câble vaut 1 500 N. Le câble en acier a une résistance Rm = 1 770 MPa et un module apparent E = 100 000 MPa. Catalogue : diamètre 4 mm (section métallique 6,3 mm², 0,06 kg/m), 5 mm (9,8 mm², 0,09 kg/m), 6 mm (14,1 mm², 0,13 kg/m).
C.1. Calculer la contrainte admissible, puis la section minimale.
C.2. Choisir le câble en respectant l'exigence 3 et en limitant la masse.
C.3. Calculer la contrainte réelle dans le câble choisi, puis son allongement relatif.
C.4. La longueur déroulée maximale est de 25 m. Calculer l'allongement total en mm.

PARTIE D — Le tambour, le matériau et l'éco-conception (4 points)

Le tambour a un volume de matière de 0,8 dm³. On compare un acier (7 850 kg/m³, rouille sans protection) et un alliage d'aluminium (2 700 kg/m³, résiste bien à l'humidité).
D.1. Calculer la masse du tambour dans chaque matériau et le gain de masse en %.
D.2. Choisir le matériau en citant l'exigence 4.
D.3. Proposer un procédé de fabrication pour 20 tambours, en le justifiant.
D.4. Proposer deux dispositions d'éco-conception pour le nouveau treuil.

Maîtrise de la langue (2 points) : rédaction, orthographe, vocabulaire technique.`,
      corrige: `PARTIE A

A.1. Actions sur l'ensemble isolé : le poids (vertical, vers le bas, au centre de gravité, 3 924 N) ; l'action de la rampe sur les roues (perpendiculaire à la rampe, sans frottement, intensité inconnue) ; l'action du câble (parallèle à la rampe, vers le haut de la rampe, intensité inconnue).

A.2. Poids : (300 + 100) × 9,81 = 3 924 N. À vitesse constante, sans frottement, le câble équilibre la composante du poids le long de la rampe : T = 3 924 × sin 15° ≈ 1 016 N.

A.3. Couple sur le tambour : C = T × r = 1 016 × 0,15 ≈ 152 N·m.

A.4. ω = v / r = 0,4 / 0,15 ≈ 2,67 rad/s ; N = 2,67 × 60 / (2 × π) ≈ 25,5 tr/min.

A.5. Puissance utile : P = T × v = 1 016 × 0,4 ≈ 406 W (ou C × ω = 152 × 2,67).

PARTIE B

B.1. r = 25,5 / 1 400 ≈ 0,018, soit environ 1/55.

B.2. Couple moteur : 152 × 0,018 / 0,7 ≈ 4,0 N·m. Puissance moteur : 406 / 0,7 ≈ 580 W.

B.3. Le moteur de 550 W est trop faible ; on choisit le moteur de 750 W, le premier au-dessus de 580 W.

B.4. Une roue et vis sans fin à faible rendement est en général irréversible : la charge ne peut pas faire tourner la vis. Si le moteur s'arrête, le chariot reste en place : l'exigence 2 est respectée (on ajoute souvent un frein par sécurité).

PARTIE C

C.1. σadm = 1 770 / 5 = 354 MPa. Smin = 1 500 / 354 ≈ 4,2 mm².

C.2. Le câble de 4 mm (6,3 mm²) dépasse 4,2 mm² : il respecte l'exigence 3 et c'est le plus léger.

C.3. σ = 1 500 / 6,3 ≈ 238 MPa. ε = 238 / 100 000 ≈ 0,0024.

C.4. ΔL = 0,0024 × 25 000 mm ≈ 60 mm.

PARTIE D

D.1. Acier : 0,0008 × 7 850 = 6,28 kg. Aluminium : 0,0008 × 2 700 = 2,16 kg. Gain : (6,28 - 2,16) / 6,28 ≈ 66 %.

D.2. L'alliage d'aluminium est presque trois fois plus léger et résiste à l'humidité sans peinture : il répond à l'exigence 4.

D.3. Pour 20 pièces, un moule de fonderie ou d'injection serait trop cher à amortir : on usine le tambour dans un tube ou un rond d'aluminium (tournage), ou on assemble un tube et deux flasques découpés.

D.4. Exemples : assembler le treuil par vis pour qu'il se répare et se démonte en fin de vie ; utiliser de l'aluminium recyclé ; choisir un moteur à bon rendement et une commande qui ne consomme rien en veille ; prévoir des pièces d'usure (câble, galets) remplaçables séparément.

Conclusion : un treuil à roue et vis, un moteur de 750 W, un câble de 4 mm et un tambour en aluminium remontent les bateaux en sécurité, avec un treuil léger, durable et réparable.`,
      grille: [
        { c: "Partie A : bilan des actions, effort du câble, couple, vitesse de rotation, puissance", pts: 5 },
        { c: "Partie B : rapport, couple et puissance du moteur, choix, irréversibilité", pts: 4 },
        { c: "Partie C : contrainte admissible, choix du câble, contrainte réelle et allongement", pts: 5 },
        { c: "Partie D : masses et gain, choix du matériau, procédé, éco-conception", pts: 4 },
        { c: "Maîtrise de la langue : rédaction, orthographe, vocabulaire", pts: 2 },
      ] },
  ],
};
