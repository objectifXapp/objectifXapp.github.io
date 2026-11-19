// Mathématiques (spécialité) — terminale voie générale. Sources : voir matiere.sources.
// Programme en vigueur pour le bac 2027 : programme de spécialité de terminale de 2019 (BO spécial n° 8 du 25 juillet 2019).
// Le nouveau programme publié au BO du 2 avril 2026 ne s'applique en terminale qu'à la rentrée 2027 (bac 2028).
export default {
  matiere: {
    id: 'maths',
    nom: 'Mathématiques',
    voie: 'generale',
    epreuve: {"type":"ecrit","duree":240,"coef":16,"quand":"juin","note":"Écrit de 4 heures : quatre exercices indépendants (4 à 8 points chacun), souvent un vrai-faux ou un QCM à justifier ; calculatrice en mode examen si le sujet l'autorise"},
    sources: [
      "https://eduscol.education.gouv.fr/5817/programmes-et-ressources-en-mathematiques-voie-gt",
      "https://eduscol.education.gouv.fr/sites/default/files/document/spe246annexe1158907pdf-84159.pdf",
      "https://www.education.gouv.fr/bo/19/Special8/MENE1921244A.htm",
      "https://www.schoolmouv.fr/baccalaureat/maths",
    ],
    chapitres: [
      { id: "maths-1", t: "Combinatoire et dénombrement", theme: "Algèbre et géométrie" },
      { id: "maths-2", t: "Vecteurs, droites et plans de l'espace", theme: "Algèbre et géométrie" },
      { id: "maths-3", t: "Orthogonalité et distances dans l'espace", theme: "Algèbre et géométrie" },
      { id: "maths-4", t: "Représentations paramétriques et équations cartésiennes", theme: "Algèbre et géométrie" },
      { id: "maths-5", t: "Suites : récurrence et limites", theme: "Analyse" },
      { id: "maths-6", t: "Limites de fonctions", theme: "Analyse" },
      { id: "maths-7", t: "Compléments sur la dérivation et convexité", theme: "Analyse" },
      { id: "maths-8", t: "Continuité des fonctions", theme: "Analyse" },
      { id: "maths-9", t: "Fonction logarithme népérien", theme: "Analyse" },
      { id: "maths-10", t: "Fonctions sinus et cosinus", theme: "Analyse" },
      { id: "maths-11", t: "Primitives et équations différentielles", theme: "Analyse" },
      { id: "maths-12", t: "Calcul intégral", theme: "Analyse" },
      { id: "maths-13", t: "Épreuves indépendantes et loi binomiale", theme: "Probabilités" },
      { id: "maths-14", t: "Sommes de variables aléatoires", theme: "Probabilités" },
      { id: "maths-15", t: "Concentration et loi des grands nombres", theme: "Probabilités" },
      { id: "maths-16", t: "Algorithmique et programmation en Python", theme: "Algorithmique et programmation" },
    ],
  },
  paquets: [
  { chapitre: "maths-1",
    fiche: `## Combinatoire et dénombrement

Dénombrer, c'est compter le nombre d'éléments d'un ensemble sans les écrire tous. Le nombre d'éléments d'un ensemble fini E s'appelle son **cardinal**, noté card(E).

### Les deux principes de base
- **Principe additif** : si A et B n'ont aucun élément commun (ils sont disjoints), card(A ∪ B) = card(A) + card(B). Exemple : 12 garçons et 15 filles, cela fait 27 élèves.
- **Principe multiplicatif** : le **produit cartésien** A × B est l'ensemble des couples (a ; b). On a card(A × B) = card(A) × card(B). Exemple : 3 entrées et 4 plats donnent 3 × 4 = 12 menus.

### Les k-uplets (on garde l'ordre, avec répétition)
- Un **k-uplet** d'éléments de E est une liste ordonnée de k éléments, qui peuvent se répéter.
- Si card(E) = n, il y a **n^k** k-uplets. Exemple : un code de 4 chiffres (de 0 à 9) : 10^4 = 10 000 codes.
- Une partie de E se décrit par un n-uplet de 0 et de 1 (on prend ou pas chaque élément). Donc un ensemble à n éléments a **2^n parties**. Exemple : un ensemble à 3 éléments a 2³ = 8 parties, en comptant l'ensemble vide.

### Les arrangements (ordre, sans répétition)
- Un k-uplet d'**éléments distincts** est aussi appelé arrangement.
- Leur nombre est n × (n − 1) × … × (n − k + 1) = **n! / (n − k)!**
- Exemple : podium (or, argent, bronze) parmi 8 coureurs : 8 × 7 × 6 = 336 podiums.

### Les permutations
- Une **permutation** de E est une façon de ranger tous ses n éléments dans un ordre.
- Il y en a **n! = n × (n − 1) × … × 2 × 1** (on lit « factorielle n »). Par convention, **0! = 1**.
- Exemple : 5 livres sur une étagère : 5! = 120 rangements.

### Les combinaisons (sans ordre, sans répétition)
- Une **combinaison** de k éléments de E est une **partie** de E à k éléments : l'ordre ne compte pas.
- Leur nombre se lit **« k parmi n »** (on l'écrit n au-dessus de k, entre parenthèses) et vaut **n! / (k! × (n − k)!)**.
- Exemple : choisir 2 délégués parmi 30 élèves : 30 × 29 / 2 = 435 choix.
- Sur la calculatrice : touche nCr ou « Combinaison ».

### Propriétés des combinaisons
- **(0 parmi n) = 1**, **(1 parmi n) = n**, **(n parmi n) = 1**.
- **Symétrie** : (k parmi n) = (n − k parmi n). Choisir les 3 qui partent revient à choisir les 27 qui restent.
- **Relation de Pascal** : (k parmi n) + (k + 1 parmi n) = (k + 1 parmi n + 1). Elle permet de construire le triangle de Pascal ligne par ligne.
- **Somme d'une ligne** : (0 parmi n) + (1 parmi n) + … + (n parmi n) = 2^n, car c'est le nombre total de parties.

### Comment choisir la bonne formule
- L'ordre compte et on peut répéter : n^k.
- L'ordre compte, sans répéter : n! / (n − k)!
- On range tout : n!
- L'ordre ne compte pas (un groupe, une main de cartes, un tirage simultané) : k parmi n.
- Pour « au moins un », il est souvent plus simple de compter le contraire : total moins « aucun ».

### À retenir pour le bac
- Toujours se demander : l'ordre compte-t-il ? peut-on répéter ?
- Un tirage **simultané** correspond à des combinaisons ; un tirage **successif avec remise** à des k-uplets.
- Savoir justifier la relation de Pascal et le résultat 2^n par un raisonnement de dénombrement.
- Les combinaisons servent ensuite dans la loi binomiale.`,
    cartes: [
      { q: "Que signifie card(E) ?", r: "C'est le cardinal de E : le nombre de ses éléments." },
      { q: "Principe multiplicatif", r: "card(A × B) = card(A) × card(B). Exemple : 3 entrées et 4 plats donnent 12 menus." },
      { q: "Nombre de k-uplets d'un ensemble à n éléments", r: "n^k (on garde l'ordre et on peut répéter)." },
      { q: "Nombre de k-uplets d'éléments distincts (arrangements)", r: "n! / (n − k)! = n × (n − 1) × … × (n − k + 1)." },
      { q: "Nombre de permutations d'un ensemble à n éléments", r: "n! = n × (n − 1) × … × 1." },
      { q: "Combien vaut 0! ?", r: "0! = 1, par convention." },
      { q: "Formule de « k parmi n »", r: "n! / (k! × (n − k)!). C'est le nombre de parties à k éléments d'un ensemble à n éléments." },
      { q: "Nombre de parties d'un ensemble à n éléments", r: "2^n, ensemble vide et ensemble entier compris." },
      { q: "Propriété de symétrie des combinaisons", r: "(k parmi n) = (n − k parmi n)." },
      { q: "Relation de Pascal", r: "(k parmi n) + (k + 1 parmi n) = (k + 1 parmi n + 1)." },
      { q: "Somme de la ligne n du triangle de Pascal", r: "(0 parmi n) + (1 parmi n) + … + (n parmi n) = 2^n." },
      { q: "Tirage simultané de k objets parmi n : quel modèle ?", r: "Une combinaison : l'ordre ne compte pas. Nombre de tirages : k parmi n." },
      { q: "Combien de codes à 4 chiffres (0 à 9) ?", r: "10^4 = 10 000." },
      { q: "Astuce pour « au moins un »", r: "Compter le contraire (« aucun ») et le retirer du total." },
    ],
    quiz: [
      { q: "Combien de mots de 3 lettres (avec ou sans sens) peut-on écrire avec les 26 lettres, répétitions permises ?",
        choix: ["26 × 25 × 24 = 15 600", "26³ = 17 576", "3 parmi 26 = 2 600", "3 × 26 = 78"],
        bonne: 1, niv: 2,
        expl: "L'ordre compte et on peut répéter : 26^3 = 17 576 triplets." },
      { q: "Combien vaut 5! ?",
        choix: ["24", "120", "60", "25"],
        bonne: 1, niv: 1,
        expl: "5! = 5 × 4 × 3 × 2 × 1 = 120." },
      { q: "Combien de façons de choisir 2 délégués (sans rôle distinct) parmi 30 élèves ?",
        choix: ["435", "870", "900", "465"],
        bonne: 0, niv: 2,
        expl: "L'ordre ne compte pas : 2 parmi 30 = 30 × 29 / 2 = 435. 870 compterait chaque paire deux fois." },
      { q: "Combien de podiums (1er, 2e, 3e) possibles avec 8 coureurs ?",
        choix: ["56", "24", "336", "120"],
        bonne: 2, niv: 2,
        expl: "L'ordre compte, sans répétition : 8 × 7 × 6 = 336." },
      { q: "Combien de parties possède un ensemble à 5 éléments ?",
        choix: ["25", "10", "32", "31"],
        bonne: 2, niv: 2,
        expl: "2^5 = 32, en comptant l'ensemble vide et l'ensemble entier. 31 oublie l'ensemble vide." },
      { q: "Quelle égalité est la relation de Pascal ?",
        choix: ["(k parmi n) + (k+1 parmi n) = (k+1 parmi n+1)", "(k parmi n) = (n−k parmi n)", "(k parmi n) + (k+1 parmi n) = (k parmi n+1)", "(k parmi n) × (k+1 parmi n) = (k+1 parmi n+1)"],
        bonne: 0, niv: 1,
        expl: "C'est la somme de deux coefficients voisins d'une ligne, qui donne le coefficient en dessous. L'égalité (k parmi n) = (n−k parmi n) est la symétrie, pas la relation de Pascal." },
      { q: "Que vaut (n parmi n) pour tout entier naturel n ?",
        choix: ["1", "n", "n!", "0"],
        bonne: 0, niv: 1,
        expl: "Il y a une seule partie à n éléments : l'ensemble entier." },
      { q: "On tire simultanément 5 cartes d'un jeu de 32. Quel est le nombre de tirages ?",
        choix: ["32^5", "32! / 27!", "32 × 5", "5 parmi 32"],
        bonne: 3, niv: 2,
        expl: "Tirage simultané : l'ordre ne compte pas, on compte des combinaisons. 32!/27! compterait les tirages ordonnés." },
      { q: "Dans un groupe de 10, combien de façons de choisir 3 personnes qui restent ?",
        choix: ["Plus que pour choisir les 7 qui partent", "Moins que pour choisir les 7 qui partent", "Autant que pour choisir les 7 qui partent", "Deux fois plus que pour les 7 qui partent"],
        bonne: 2, niv: 3,
        expl: "Symétrie : (3 parmi 10) = (7 parmi 10) = 120. Choisir ceux qui restent fixe ceux qui partent." },
      { q: "Un code de 4 chiffres (0 à 9) a des chiffres tous différents. Combien de codes ?",
        choix: ["5 040", "210", "24", "720"],
        bonne: 0, niv: 3,
        expl: "Ordre important, sans répétition : 10 × 9 × 8 × 7 = 5 040. 210 = 4 parmi 10 ne tient pas compte de l'ordre." },
      { q: "Combien de codes de 3 chiffres (0 à 9) contiennent au moins un 7 ?",
        choix: ["270", "30", "271", "100"],
        bonne: 2, niv: 3,
        expl: "Total 10³ = 1 000, sans aucun 7 : 9³ = 729. Au moins un 7 : 1 000 − 729 = 271." },
      { q: "Que vaut la somme (0 parmi 6) + (1 parmi 6) + … + (6 parmi 6) ?",
        choix: ["36", "21", "64", "42"],
        bonne: 2, niv: 2,
        expl: "La somme d'une ligne vaut 2^n, ici 2^6 = 64 : c'est le nombre de parties d'un ensemble à 6 éléments." },
    ] },
  { chapitre: "maths-2",
    fiche: `## Vecteurs, droites et plans de l'espace

On reprend les vecteurs du plan, mais en trois dimensions. Les règles de calcul restent les mêmes (relation de Chasles, somme, produit par un réel).

### Vecteurs de l'espace
- Une **combinaison linéaire** de u et v est un vecteur de la forme a·u + b·v, avec a et b réels.
- Deux vecteurs sont **colinéaires** si l'un est un multiple de l'autre : v = k·u. Exemple : u(1 ; −2 ; 3) et v(−2 ; 4 ; −6) sont colinéaires, car v = −2·u.
- Trois vecteurs sont **coplanaires** si l'un est une combinaison linéaire des deux autres : w = a·u + b·v. Des représentants de même origine sont alors dans un même plan.

### Bases et repères
- Trois vecteurs **non coplanaires** i, j, k forment une **base** de l'espace. Tout vecteur s'écrit de façon unique u = x·i + y·j + z·k : (x ; y ; z) sont ses **coordonnées**.
- Un **repère** (O ; i, j, k) est un point O et une base.
- Si A(xA ; yA ; zA) et B(xB ; yB ; zB), alors **AB(xB − xA ; yB − yA ; zB − zA)** et le **milieu** de [AB] est ((xA + xB)/2 ; (yA + yB)/2 ; (zA + zB)/2).
- Pour montrer que A, B, C sont **alignés**, on montre que AB et AC sont colinéaires.

### Droites de l'espace
- Une droite est définie par **un point A et un vecteur directeur u** non nul : M est sur la droite si et seulement si AM = t·u pour un réel t.
- Deux droites sont **parallèles** si leurs vecteurs directeurs sont colinéaires.

### Plans de l'espace
- Un plan est défini par **un point A et deux vecteurs non colinéaires** u et v (on dit qu'ils dirigent le plan) : M est dans le plan si et seulement si AM = s·u + t·v.
- Pour montrer que quatre points A, B, C, D sont **coplanaires**, on cherche a et b tels que AD = a·AB + b·AC.

### Positions relatives
- **Deux droites** : soit elles sont **coplanaires** (alors sécantes, strictement parallèles ou confondues), soit elles sont **non coplanaires** : elles ne se coupent pas et ne sont pas parallèles. Exemple dans un cube ABCDEFGH : (AB) et (CG) sont non coplanaires.
- **Une droite et un plan** : la droite est contenue dans le plan, parallèle au plan sans le toucher, ou sécante au plan en un point.
- **Deux plans** : parallèles (confondus ou disjoints) ou sécants suivant une **droite**.
- Une droite est parallèle à un plan si son vecteur directeur est une combinaison linéaire de deux vecteurs qui dirigent le plan.

### Deux théorèmes utiles
- Si deux plans sont parallèles, tout plan qui coupe l'un coupe l'autre, et les deux droites d'intersection sont **parallèles**.
- **Théorème du toit** : si deux plans sécants contiennent deux droites parallèles, alors leur droite d'intersection est parallèle à ces deux droites.

### À retenir pour le bac
- Dans un cube, ne pas croire que deux droites qui ne se coupent pas sont parallèles : elles peuvent être non coplanaires.
- Alignement : vecteurs colinéaires. Coplanarité : un vecteur combinaison linéaire des deux autres.
- Bien calculer AB en faisant « arrivée moins départ ».
- Trois vecteurs non coplanaires forment une base : c'est souvent la première question d'un exercice.`,
    cartes: [
      { q: "Quand deux vecteurs u et v sont-ils colinéaires ?", r: "Quand il existe un réel k tel que v = k·u (ou u = k·v)." },
      { q: "Quand trois vecteurs u, v, w sont-ils coplanaires ?", r: "Quand l'un est combinaison linéaire des deux autres, par exemple w = a·u + b·v (u et v non colinéaires)." },
      { q: "Qu'est-ce qu'une base de l'espace ?", r: "Trois vecteurs non coplanaires. Tout vecteur s'écrit alors de façon unique x·i + y·j + z·k." },
      { q: "Coordonnées du vecteur AB", r: "AB(xB − xA ; yB − yA ; zB − zA) : arrivée moins départ." },
      { q: "Coordonnées du milieu de [AB]", r: "((xA + xB)/2 ; (yA + yB)/2 ; (zA + zB)/2)." },
      { q: "Comment montrer que A, B, C sont alignés ?", r: "Montrer que AB et AC sont colinéaires." },
      { q: "Comment définir une droite de l'espace ?", r: "Par un point A et un vecteur directeur u non nul : M est sur la droite si AM = t·u." },
      { q: "Comment définir un plan de l'espace ?", r: "Par un point A et deux vecteurs non colinéaires u et v : M est dans le plan si AM = s·u + t·v." },
      { q: "Que sont deux droites non coplanaires ?", r: "Deux droites qui ne sont contenues dans aucun plan commun : elles ne sont ni sécantes ni parallèles." },
      { q: "Intersection de deux plans sécants", r: "Une droite." },
      { q: "Énoncé du théorème du toit", r: "Si deux plans sécants contiennent deux droites parallèles, leur intersection est parallèle à ces droites." },
      { q: "Comment montrer que A, B, C, D sont coplanaires ?", r: "Trouver deux réels a et b tels que AD = a·AB + b·AC." },
      { q: "Quand une droite est-elle parallèle à un plan ?", r: "Quand son vecteur directeur est combinaison linéaire de deux vecteurs qui dirigent le plan." },
    ],
    quiz: [
      { q: "A(1 ; 2 ; −1) et B(4 ; 0 ; 3). Quelles sont les coordonnées de AB ?",
        choix: ["(−3 ; 2 ; −4)", "(5 ; 2 ; 2)", "(3 ; 2 ; 4)", "(3 ; −2 ; 4)"],
        bonne: 3, niv: 2,
        expl: "Arrivée moins départ : 4 − 1 = 3, 0 − 2 = −2, 3 − (−1) = 4." },
      { q: "u(2 ; −1 ; 4). Lequel de ces vecteurs est colinéaire à u ?",
        choix: ["(4 ; −2 ; 6)", "(2 ; 1 ; 4)", "(−2 ; −1 ; −4)", "(−6 ; 3 ; −12)"],
        bonne: 3, niv: 2,
        expl: "(−6 ; 3 ; −12) = −3·u. Pour (4 ; −2 ; 6), le coefficient serait 2 puis 1,5 : pas colinéaire." },
      { q: "Que faut-il pour définir un plan de l'espace ?",
        choix: ["Un point et un vecteur non nul", "Un point et deux vecteurs non colinéaires", "Deux points distincts", "Un point et trois vecteurs coplanaires"],
        bonne: 1, niv: 1,
        expl: "Un point et un vecteur définissent une droite ; il faut deux directions différentes pour un plan." },
      { q: "Trois vecteurs forment une base de l'espace lorsqu'ils sont…",
        choix: ["deux à deux non colinéaires", "de norme 1", "non coplanaires", "de même norme"],
        bonne: 2, niv: 3,
        expl: "Il faut qu'ils ne soient pas coplanaires. Trois vecteurs deux à deux non colinéaires peuvent être dans un même plan." },
      { q: "Dans un cube ABCDEFGH, les droites (AB) et (CG) sont :",
        choix: ["sécantes", "parallèles", "confondues", "non coplanaires"],
        bonne: 3, niv: 3,
        expl: "Elles ne se coupent pas et n'ont pas la même direction : aucun plan ne les contient toutes les deux." },
      { q: "Deux plans sécants ont pour intersection :",
        choix: ["toujours une droite", "un point", "un segment", "deux droites"],
        bonne: 0, niv: 1,
        expl: "Deux plans non parallèles se coupent toujours suivant une droite." },
      { q: "A(0 ; 0 ; 0), B(1 ; 2 ; 3), C(3 ; 6 ; 9). Que peut-on dire de A, B, C ?",
        choix: ["Ils sont alignés", "Ils forment un triangle rectangle", "Ils forment un triangle isocèle", "B est le milieu de [AC]"],
        bonne: 0, niv: 2,
        expl: "AC = 3·AB, donc les vecteurs sont colinéaires : les points sont alignés. Le milieu de [AC] serait (1,5 ; 3 ; 4,5)." },
      { q: "Quel est le milieu de [AB] avec A(2 ; −4 ; 6) et B(0 ; 2 ; −2) ?",
        choix: ["(2 ; −2 ; 4)", "(−1 ; 3 ; −4)", "(1 ; −1 ; 2)", "(1 ; −3 ; 4)"],
        bonne: 2, niv: 2,
        expl: "On fait la moyenne de chaque coordonnée : (2 + 0)/2 = 1, (−4 + 2)/2 = −1, (6 − 2)/2 = 2." },
      { q: "Deux droites de l'espace qui n'ont aucun point commun sont :",
        choix: ["parallèles ou non coplanaires", "parallèles et coplanaires", "non coplanaires et orthogonales", "sécantes ou parallèles"],
        bonne: 0, niv: 3,
        expl: "Dans l'espace, deux droites disjointes peuvent être parallèles ou non coplanaires : le piège est de les croire parallèles." },
      { q: "Que dit le théorème du toit ?",
        choix: ["Deux plans parallèles à une même droite sont parallèles entre eux", "Deux plans sécants contenant deux droites parallèles se coupent selon une parallèle", "Deux droites parallèles à un même plan sont parallèles entre elles", "Deux droites orthogonales à un même plan sont orthogonales"],
        bonne: 1, niv: 1,
        expl: "Il concerne deux plans sécants contenant chacun une de deux droites parallèles. Les autres énoncés sont faux." },
      { q: "u(1 ; 0 ; 1), v(0 ; 1 ; 1), w(2 ; 3 ; 5). Que peut-on dire de ces trois vecteurs ?",
        choix: ["Ils forment une base", "u et w sont colinéaires", "v et w sont colinéaires", "Ils sont coplanaires"],
        bonne: 3, niv: 2,
        expl: "w = 2·u + 3·v : (2 ; 3 ; 2 + 3) = (2 ; 3 ; 5). Ils sont donc coplanaires et ne forment pas une base." },
    ] },
  { chapitre: "maths-3",
    fiche: `## Orthogonalité et distances dans l'espace

Le produit scalaire, vu en première dans le plan, s'étend à l'espace. Il sert à montrer que des droites ou des plans sont perpendiculaires, et à calculer des longueurs et des angles.

### Le produit scalaire dans l'espace
- Deux vecteurs de l'espace sont toujours dans un même plan : on calcule leur produit scalaire dans ce plan. Les propriétés du plan restent vraies (symétrie, bilinéarité).
- Formule avec l'angle : **u·v = ‖u‖ × ‖v‖ × cos(θ)**, où θ est l'angle entre les deux vecteurs.
- Formule avec les normes : u·v = ½ (‖u + v‖² − ‖u‖² − ‖v‖²).
- Dans un **repère orthonormé**, avec u(x ; y ; z) et v(x' ; y' ; z') : **u·v = xx' + yy' + zz'**.
- Norme : **‖u‖ = √(x² + y² + z²)**. Distance : AB = √((xB − xA)² + (yB − yA)² + (zB − zA)²).
- Exemple : u(1 ; 2 ; −1) et v(3 ; −1 ; 1) : u·v = 3 − 2 − 1 = 0.

### Orthogonalité
- u et v sont **orthogonaux** si et seulement si **u·v = 0**. Dans l'exemple ci-dessus, u et v sont orthogonaux.
- Deux droites sont **orthogonales** si leurs vecteurs directeurs sont orthogonaux. Attention : dans l'espace, deux droites orthogonales ne se coupent pas forcément. Si elles se coupent, elles sont **perpendiculaires**.
- Une droite est **orthogonale à un plan** si elle est orthogonale à **deux droites sécantes** de ce plan. Elle est alors orthogonale à toutes les droites du plan.
- Un **vecteur normal** à un plan est un vecteur non nul orthogonal à deux vecteurs non colinéaires qui dirigent ce plan.
- Pour montrer que n est normal au plan (ABC) : on vérifie que **n·AB = 0 et n·AC = 0**, avec AB et AC non colinéaires.

### Base et repère orthonormés
- Une base (i, j, k) est **orthonormée** si les trois vecteurs sont deux à deux orthogonaux et de norme 1.
- Les formules avec les coordonnées (produit scalaire, norme, distance) ne valent que dans un repère orthonormé.

### Projeté orthogonal et distances
- Le **projeté orthogonal** d'un point M sur un plan P est le point H du plan tel que (MH) est orthogonale à P.
- Le projeté orthogonal de M sur une droite d est le point H de d tel que MH est orthogonal au vecteur directeur de d.
- H est le **point du plan (ou de la droite) le plus proche de M**. La distance de M au plan est la longueur **MH**.
- Méthode classique : écrire la droite passant par M et dirigée par un vecteur normal n du plan, puis chercher son intersection avec le plan (voir le chapitre suivant).

### Calcul d'angle
- Avec cos(θ) = u·v / (‖u‖ × ‖v‖), on trouve une mesure de l'angle entre deux vecteurs. La calculatrice donne θ avec arccos.

### Volumes utiles
- **Tétraèdre** (pyramide à base triangulaire) : V = (1/3) × aire de la base × hauteur.
- Au bac, la hauteur est souvent la distance MH d'un sommet au plan de la base.

### À retenir pour le bac
- Vecteur normal : deux produits scalaires nuls avec deux vecteurs **non colinéaires** du plan.
- Une droite orthogonale à une seule droite du plan n'est pas pour autant orthogonale au plan.
- Les coordonnées ne servent au produit scalaire qu'en repère orthonormé.
- Exercice type : vecteur normal, équation du plan, projeté orthogonal, distance, puis volume du tétraèdre.`,
    cartes: [
      { q: "Produit scalaire en repère orthonormé", r: "Si u(x ; y ; z) et v(x' ; y' ; z'), u·v = xx' + yy' + zz'." },
      { q: "Norme d'un vecteur u(x ; y ; z) en repère orthonormé", r: "‖u‖ = √(x² + y² + z²)." },
      { q: "Produit scalaire avec l'angle", r: "u·v = ‖u‖ × ‖v‖ × cos(θ), où θ est l'angle entre u et v." },
      { q: "Quand u et v sont-ils orthogonaux ?", r: "Si et seulement si u·v = 0." },
      { q: "Différence entre droites orthogonales et perpendiculaires", r: "Orthogonales : directions orthogonales. Perpendiculaires : orthogonales et sécantes." },
      { q: "Quand une droite est-elle orthogonale à un plan ?", r: "Quand elle est orthogonale à deux droites sécantes de ce plan." },
      { q: "Qu'est-ce qu'un vecteur normal à un plan ?", r: "Un vecteur non nul orthogonal à deux vecteurs non colinéaires du plan." },
      { q: "Comment vérifier que n est normal au plan (ABC) ?", r: "Vérifier que n·AB = 0 et n·AC = 0, avec AB et AC non colinéaires." },
      { q: "Qu'est-ce qu'une base orthonormée ?", r: "Trois vecteurs deux à deux orthogonaux et de norme 1." },
      { q: "Qu'est-ce que le projeté orthogonal de M sur un plan P ?", r: "Le point H de P tel que (MH) est orthogonale à P. C'est le point de P le plus proche de M." },
      { q: "Distance d'un point M à un plan", r: "La longueur MH, où H est le projeté orthogonal de M sur le plan." },
      { q: "Volume d'un tétraèdre", r: "V = (1/3) × aire de la base × hauteur." },
      { q: "Formule du produit scalaire avec les normes", r: "u·v = ½ (‖u + v‖² − ‖u‖² − ‖v‖²)." },
    ],
    quiz: [
      { q: "En repère orthonormé, u(2 ; −1 ; 3) et v(1 ; 4 ; 2). Combien vaut u·v ?",
        choix: ["8", "4", "−4", "12"],
        bonne: 1, niv: 2,
        expl: "u·v = 2×1 + (−1)×4 + 3×2 = 2 − 4 + 6 = 4." },
      { q: "En repère orthonormé, quelle est la norme de u(2 ; −2 ; 1) ?",
        choix: ["3", "9", "1", "5"],
        bonne: 0, niv: 2,
        expl: "‖u‖ = √(4 + 4 + 1) = √9 = 3. 9 est le carré de la norme." },
      { q: "Pour quelle valeur de a les vecteurs u(1 ; a ; 2) et v(4 ; 2 ; −1) sont-ils orthogonaux ?",
        choix: ["a = 1", "a = −3", "a = −1", "a = 2"],
        bonne: 2, niv: 2,
        expl: "u·v = 4 + 2a − 2 = 2a + 2 = 0, donc a = −1." },
      { q: "Une droite est orthogonale à un plan si elle est orthogonale à :",
        choix: ["une droite du plan", "deux droites parallèles du plan", "un vecteur du plan", "deux droites sécantes du plan"],
        bonne: 3, niv: 3,
        expl: "Il faut deux droites sécantes du plan. Une seule droite, ou deux droites parallèles, ne suffit pas." },
      { q: "Dans l'espace, deux droites orthogonales :",
        choix: ["sont toujours sécantes", "sont toujours coplanaires", "ont toujours un point commun", "ne sont pas toujours sécantes"],
        bonne: 3, niv: 3,
        expl: "Dans un cube, (AB) et (CG) sont orthogonales sans se couper. Si elles se coupent, on dit perpendiculaires." },
      { q: "Que vaut u·v si u et v sont orthogonaux ?",
        choix: ["1", "‖u‖ × ‖v‖", "0", "−1"],
        bonne: 2, niv: 1,
        expl: "Deux vecteurs sont orthogonaux si et seulement si leur produit scalaire est nul." },
      { q: "Qu'est-ce qu'un vecteur normal à un plan ?",
        choix: ["Un vecteur de norme 1 dans le plan", "Un vecteur directeur d'une droite du plan", "Un vecteur non nul orthogonal au plan", "Un vecteur colinéaire à deux vecteurs du plan"],
        bonne: 2, niv: 1,
        expl: "Il est orthogonal à deux vecteurs non colinéaires du plan, donc à tout le plan." },
      { q: "A(1 ; 0 ; 2) et B(3 ; 1 ; 0) en repère orthonormé. Combien vaut AB ?",
        choix: ["9", "√5", "5", "3"],
        bonne: 3, niv: 2,
        expl: "AB(2 ; 1 ; −2), donc AB = √(4 + 1 + 4) = √9 = 3." },
      { q: "Le projeté orthogonal H de M sur un plan P est :",
        choix: ["le point de P le plus éloigné de M", "le point de P le plus proche de M", "le milieu de M et de l'origine", "le symétrique de M par rapport à P"],
        bonne: 1, niv: 1,
        expl: "MH est la plus courte distance de M à un point du plan : c'est la distance de M à P." },
      { q: "n(1 ; 1 ; 1), AB(1 ; −1 ; 0), AC(2 ; 0 ; −2). Que peut-on dire de n ?",
        choix: ["Il est normal au plan (ABC)", "Il est orthogonal à AB, pas à AC", "Il est orthogonal à AC, pas à AB", "Il est colinéaire à AB"],
        bonne: 0, niv: 2,
        expl: "n·AB = 1 − 1 + 0 = 0 et n·AC = 2 + 0 − 2 = 0, avec AB et AC non colinéaires : n est normal à (ABC)." },
      { q: "Un tétraèdre a une base d'aire 6 et une hauteur de 4. Quel est son volume ?",
        choix: ["24", "12", "8", "48"],
        bonne: 2, niv: 2,
        expl: "V = (1/3) × 6 × 4 = 8. 24 oublie le facteur 1/3, 12 utilise 1/2 à la place de 1/3." },
      { q: "u et v ont pour normes 2 et 3, et u·v = 3. Quelle est la mesure de l'angle (u, v) ?",
        choix: ["30°", "60°", "45°", "90°"],
        bonne: 1, niv: 3,
        expl: "cos(θ) = 3 / (2 × 3) = 0,5, donc θ = 60°. 90° correspondrait à un produit scalaire nul." },
    ] },
  { chapitre: "maths-4",
    fiche: `## Représentations paramétriques et équations cartésiennes

Ce chapitre traduit les droites et les plans en équations. C'est la partie la plus présente dans les exercices de géométrie du bac. On travaille dans un repère orthonormé.

### Représentation paramétrique d'une droite
- La droite d passant par A(xA ; yA ; zA) et de vecteur directeur u(a ; b ; c) a pour **représentation paramétrique** :
- x = xA + a·t ; y = yA + b·t ; z = zA + c·t, avec **t réel**.
- Chaque valeur de t donne un point de la droite. Exemple : A(1 ; 0 ; 2) et u(2 ; −1 ; 3). Pour t = 1, on obtient le point (3 ; −1 ; 5).
- Une même droite a une infinité de représentations : on peut changer de point et de vecteur directeur (colinéaire).
- **Un point est-il sur la droite ?** On cherche t avec la première équation, puis on vérifie que ce même t marche pour les deux autres.

### Équation cartésienne d'un plan
- Un plan de vecteur normal **n(a ; b ; c)** a une équation de la forme **ax + by + cz + d = 0**.
- Réciproquement, l'ensemble des points vérifiant ax + by + cz + d = 0 (a, b, c non tous nuls) est un plan de vecteur normal n(a ; b ; c).
- **Méthode** : on écrit ax + by + cz + d = 0 avec les coordonnées de n, puis on trouve d en remplaçant par un point du plan.
- Exemple : plan passant par A(1 ; 2 ; −1) de vecteur normal n(2 ; −1 ; 3). On a 2x − y + 3z + d = 0, et avec A : 2 − 2 − 3 + d = 0, donc d = 3. Équation : 2x − y + 3z + 3 = 0.

### Positions relatives avec les équations
- **Deux plans** sont parallèles si leurs vecteurs normaux sont colinéaires, et **perpendiculaires** si leurs vecteurs normaux sont orthogonaux.
- **Une droite et un plan** : si u·n = 0, la droite est parallèle au plan (contenue dedans ou disjointe). Sinon, elle le coupe en un point.
- Une droite est **orthogonale** à un plan si son vecteur directeur est **colinéaire** au vecteur normal.

### Intersection d'une droite et d'un plan
- On remplace x, y, z de la représentation paramétrique dans l'équation du plan.
- On obtient une équation en t. On la résout, puis on remplace t pour avoir le point.
- Exemple : d : x = 1 + t ; y = 2t ; z = 3 − t, et P : x + y + z − 6 = 0. On obtient 1 + t + 2t + 3 − t − 6 = 0, soit 2t − 2 = 0 et t = 1. Le point d'intersection est (2 ; 2 ; 2).
- Si l'équation donne « 0 = 0 », la droite est dans le plan ; si elle donne « 0 = 5 », elle est parallèle sans le toucher.

### Projeté orthogonal sur un plan
- Pour projeter M sur P : on écrit la droite passant par M de vecteur directeur n (le vecteur normal de P), puis on cherche son intersection avec P. Le point trouvé est H, et la distance de M à P est MH.

### Intersection de deux droites
- On écrit les deux représentations avec deux paramètres différents (t et s), on résout le système des deux premières équations, puis on vérifie la troisième.

### À retenir pour le bac
- Dans ax + by + cz + d = 0, les coefficients a, b, c donnent un vecteur **normal**, pas un vecteur du plan.
- Dans une représentation paramétrique, les coefficients de t donnent le **vecteur directeur**.
- Pour deux droites, utiliser deux paramètres différents : prendre le même t est l'erreur classique.
- Toujours vérifier un point trouvé dans les équations de départ.`,
    cartes: [
      { q: "Représentation paramétrique de la droite passant par A de vecteur directeur u(a ; b ; c)", r: "x = xA + a·t ; y = yA + b·t ; z = zA + c·t, avec t réel." },
      { q: "Forme d'une équation cartésienne de plan", r: "ax + by + cz + d = 0, avec n(a ; b ; c) vecteur normal." },
      { q: "Comment trouver d dans ax + by + cz + d = 0 ?", r: "Remplacer x, y, z par les coordonnées d'un point du plan." },
      { q: "Comment savoir si un point est sur une droite donnée par une représentation paramétrique ?", r: "Trouver t avec une équation, puis vérifier que ce même t marche pour les deux autres." },
      { q: "Deux plans parallèles : condition", r: "Leurs vecteurs normaux sont colinéaires." },
      { q: "Deux plans perpendiculaires : condition", r: "Leurs vecteurs normaux sont orthogonaux (produit scalaire nul)." },
      { q: "Droite orthogonale à un plan : condition", r: "Son vecteur directeur est colinéaire au vecteur normal du plan." },
      { q: "Droite parallèle à un plan : condition", r: "Son vecteur directeur est orthogonal au vecteur normal : u·n = 0." },
      { q: "Méthode pour l'intersection d'une droite et d'un plan", r: "Remplacer x, y, z de la droite dans l'équation du plan, résoudre en t, puis calculer le point." },
      { q: "Méthode pour le projeté orthogonal de M sur un plan P", r: "Écrire la droite passant par M dirigée par le vecteur normal de P, puis son intersection avec P." },
      { q: "Intersection de deux droites : piège", r: "Utiliser deux paramètres différents (t et s), pas le même." },
      { q: "Que signifie « 0 = 0 » en cherchant l'intersection droite-plan ?", r: "Tout t convient : la droite est contenue dans le plan." },
    ],
    quiz: [
      { q: "Le plan P a pour équation 3x − y + 2z − 5 = 0. Quel est un vecteur normal à P ?",
        choix: ["(3 ; −1 ; −5)", "(−1 ; 2 ; −5)", "(3 ; −1 ; 2)", "(3 ; 1 ; 2)"],
        bonne: 2, niv: 1,
        expl: "Les coefficients de x, y, z donnent le vecteur normal (3 ; −1 ; 2). Le nombre −5 n'en fait pas partie." },
      { q: "d : x = 2 + t ; y = −1 + 3t ; z = 4 − 2t. Quel est un vecteur directeur de d ?",
        choix: ["(2 ; −1 ; 4)", "(1 ; 3 ; −2)", "(3 ; 2 ; 2)", "(1 ; −3 ; 2)"],
        bonne: 1, niv: 1,
        expl: "Ce sont les coefficients de t. (2 ; −1 ; 4) sont les coordonnées d'un point de d." },
      { q: "Avec d : x = 1 + 2t ; y = 3 − t ; z = t, quel point obtient-on pour t = 2 ?",
        choix: ["(3 ; 2 ; 1)", "(5 ; 1 ; 2)", "(5 ; 5 ; 2)", "(4 ; 1 ; 2)"],
        bonne: 1, niv: 2,
        expl: "x = 1 + 4 = 5, y = 3 − 2 = 1, z = 2." },
      { q: "Quelle est l'équation du plan passant par A(1 ; 0 ; 2) de vecteur normal n(1 ; 2 ; −1) ?",
        choix: ["x + 2y − z − 1 = 0", "x + 2z − 1 = 0", "x + 2y − z + 3 = 0", "x + 2y − z + 1 = 0"],
        bonne: 3, niv: 2,
        expl: "x + 2y − z + d = 0 et A donne 1 + 0 − 2 + d = 0, donc d = 1." },
      { q: "Le point B(1 ; 1 ; 1) appartient-il au plan 2x − y + z − 2 = 0 ?",
        choix: ["Oui, car 2 − 1 + 1 − 2 = 0", "Non, car on trouve 2", "Non, car on trouve −2", "Oui, car on trouve 2"],
        bonne: 0, niv: 2,
        expl: "On remplace : 2 − 1 + 1 − 2 = 0. L'équation est vérifiée, donc B est dans le plan." },
      { q: "d : x = 1 + t ; y = 2t ; z = 3 − t et P : x + y + z − 6 = 0. Quel est le point d'intersection ?",
        choix: ["(1 ; 0 ; 3)", "(3 ; 4 ; 1)", "(2 ; 2 ; 2)", "(2 ; 1 ; 3)"],
        bonne: 2, niv: 2,
        expl: "1 + t + 2t + 3 − t − 6 = 0 donne 2t = 2, t = 1, d'où le point (2 ; 2 ; 2)." },
      { q: "P1 : x + 2y − z = 0 et P2 : 2x − y + 3 = 0. Ces plans sont :",
        choix: ["parallèles", "perpendiculaires", "confondus", "parallèles et disjoints"],
        bonne: 1, niv: 2,
        expl: "n1(1 ; 2 ; −1) et n2(2 ; −1 ; 0) : n1·n2 = 2 − 2 + 0 = 0, donc les plans sont perpendiculaires." },
      { q: "Une droite de vecteur directeur u est orthogonale au plan de vecteur normal n quand :",
        choix: ["u·n = 0", "u et n sont orthogonaux", "u et n sont colinéaires", "u et n ont même norme"],
        bonne: 2, niv: 3,
        expl: "Le piège : u·n = 0 donne une droite parallèle au plan. Pour qu'elle soit orthogonale, u doit être colinéaire à n." },
      { q: "En cherchant l'intersection d'une droite et d'un plan, on obtient 0 × t = 5. Que conclure ?",
        choix: ["La droite est parallèle au plan sans le couper", "La droite est contenue dans le plan", "La droite coupe le plan en un point", "La droite est orthogonale au plan"],
        bonne: 0, niv: 3,
        expl: "Aucune valeur de t ne convient : il n'y a aucun point commun. Si on avait 0 = 0, la droite serait dans le plan." },
      { q: "Pour étudier l'intersection de deux droites données par des représentations paramétriques, il faut :",
        choix: ["prendre deux paramètres différents", "prendre le même paramètre t", "calculer leurs vecteurs normaux", "additionner les deux systèmes"],
        bonne: 0, niv: 3,
        expl: "Les deux droites n'atteignent pas le point commun pour la même valeur de paramètre : on note t et s." },
      { q: "Quelle est la distance du point M(1 ; 1 ; 3) au plan z = 0 ?",
        choix: ["1", "√11", "√2", "3"],
        bonne: 3, niv: 2,
        expl: "Le projeté de M sur le plan z = 0 est H(1 ; 1 ; 0), et MH = 3." },
    ] },
  { chapitre: "maths-5",
    fiche: `## Suites : récurrence et limites

Les suites tombent presque à chaque bac, souvent avec une question de programme Python. Il faut savoir faire une récurrence et trouver une limite.

### Le raisonnement par récurrence
Pour montrer qu'une propriété P(n) est vraie pour tout entier n ≥ n0 :
- **Initialisation** : on vérifie que P(n0) est vraie.
- **Hérédité** : on suppose P(n) vraie pour un entier n ≥ n0 (c'est l'**hypothèse de récurrence**) et on montre que P(n + 1) est vraie.
- **Conclusion** : P(n) est vraie pour tout n ≥ n0.
- Exemple : u0 = 1 et u(n+1) = 0,5·un + 2. Montrons que un ≤ 4. Initialisation : u0 = 1 ≤ 4. Hérédité : si un ≤ 4, alors 0,5·un ≤ 2, donc u(n+1) ≤ 4.
- **Inégalité de Bernoulli** (démonstration au programme) : pour a > 0 et tout n, (1 + a)^n ≥ 1 + na.

### Limite d'une suite
- un tend vers **+∞** si un finit par dépasser n'importe quel nombre A, aussi grand soit-il.
- un **converge** vers un réel l si tout intervalle ouvert contenant l contient tous les termes à partir d'un certain rang. La limite est alors unique.
- Une suite qui ne converge pas est **divergente** : elle tend vers l'infini, ou elle n'a pas de limite (comme (−1)^n).

### Opérations sur les limites
- On ajoute, multiplie et divise les limites comme on s'y attend, sauf dans les **formes indéterminées** : **∞ − ∞, 0 × ∞, ∞/∞ et 0/0**.
- Pour lever une indétermination, on **factorise par le terme le plus fort**. Exemple : n² − 3n = n²(1 − 3/n), qui tend vers +∞.

### Théorèmes de comparaison
- Si un ≥ vn à partir d'un rang et vn → +∞, alors **un → +∞**.
- **Théorème des gendarmes** : si vn ≤ un ≤ wn à partir d'un rang, et si vn et wn tendent vers la même limite l, alors un → l. Exemple : −1/n ≤ (−1)^n / n ≤ 1/n, donc (−1)^n / n → 0.

### Suites géométriques
- Limite de q^n : si **q > 1**, q^n → +∞ ; si **−1 < q < 1**, q^n → 0 ; si q = 1, q^n = 1 ; si q ≤ −1, pas de limite.
- Exemple : 5 × 0,8^n tend vers 0, car −1 < 0,8 < 1.

### Suites monotones
- **Théorème de convergence monotone** : une suite croissante et majorée converge ; une suite décroissante et minorée converge.
- Une suite croissante **non majorée** tend vers +∞.
- Attention : le théorème dit que la limite existe, mais pas qu'elle vaut le majorant. Si un ≤ 4, la limite est inférieure ou égale à 4.

### Méthode type au bac
- Montrer par récurrence un encadrement, par exemple 0 ≤ un ≤ u(n+1) ≤ 4.
- En déduire que la suite converge (croissante et majorée).
- Trouver la limite l avec l'équation l = f(l) (voir le chapitre sur la continuité).
- Utiliser une **suite auxiliaire** géométrique vn = un − l pour avoir une formule explicite.

### À retenir pour le bac
- Dans l'hérédité, il faut utiliser l'hypothèse de récurrence.
- Croissante et majorée par 4 ne veut pas dire limite 4.
- Retenir les quatre formes indéterminées.
- Savoir compléter une boucle while qui cherche le premier rang où un dépasse un seuil.`,
    cartes: [
      { q: "Les trois étapes d'une récurrence", r: "Initialisation (P(n0) vraie), hérédité (P(n) vraie entraîne P(n + 1) vraie), conclusion." },
      { q: "Qu'est-ce que l'hypothèse de récurrence ?", r: "On suppose P(n) vraie pour un entier n fixé, afin de montrer P(n + 1)." },
      { q: "Inégalité de Bernoulli", r: "Pour tout réel a > 0 et tout entier naturel n : (1 + a)^n ≥ 1 + na." },
      { q: "Les quatre formes indéterminées", r: "∞ − ∞, 0 × ∞, ∞/∞ et 0/0." },
      { q: "Limite de q^n si q > 1", r: "+∞." },
      { q: "Limite de q^n si −1 < q < 1", r: "0." },
      { q: "Théorème des gendarmes", r: "Si vn ≤ un ≤ wn et si vn et wn tendent vers l, alors un tend vers l." },
      { q: "Théorème de comparaison (infini)", r: "Si un ≥ vn à partir d'un rang et vn → +∞, alors un → +∞." },
      { q: "Théorème de convergence monotone", r: "Une suite croissante et majorée converge ; une suite décroissante et minorée converge." },
      { q: "Suite croissante non majorée", r: "Elle tend vers +∞." },
      { q: "Comment lever une forme indéterminée pour une suite polynôme ou quotient ?", r: "Factoriser par le terme de plus haut degré." },
      { q: "Qu'est-ce qu'une suite divergente ?", r: "Une suite qui ne converge pas : elle tend vers l'infini ou n'a pas de limite." },
      { q: "Exemple de suite sans limite", r: "un = (−1)^n, qui vaut 1, −1, 1, −1…" },
    ],
    quiz: [
      { q: "Quelle est la limite de 3 × 0,9^n ?",
        choix: ["0", "3", "+∞", "2,7"],
        bonne: 0, niv: 2,
        expl: "Comme −1 < 0,9 < 1, 0,9^n tend vers 0, donc 3 × 0,9^n tend vers 0." },
      { q: "Quelle est la limite de 2 − 1,5^n ?",
        choix: ["2", "+∞", "0", "−∞"],
        bonne: 3, niv: 2,
        expl: "1,5 > 1 donc 1,5^n tend vers +∞ et 2 − 1,5^n tend vers −∞." },
      { q: "Laquelle de ces formes est indéterminée ?",
        choix: ["+∞ + (+∞)", "+∞ × (+∞)", "5 / (+∞)", "+∞ − (+∞)"],
        bonne: 3, niv: 1,
        expl: "∞ − ∞ est indéterminée. Les autres donnent +∞, +∞ et 0." },
      { q: "Quelle est la limite de (2n² + 1) / (n² + 3) ?",
        choix: ["1", "2", "+∞", "1/3"],
        bonne: 1, niv: 2,
        expl: "On factorise par n² : (2 + 1/n²) / (1 + 3/n²), qui tend vers 2." },
      { q: "Une suite est croissante et majorée par 5. Que peut-on affirmer ?",
        choix: ["Elle converge vers une limite inférieure ou égale à 5", "Elle converge vers 5", "Elle tend vers +∞", "Elle diverge"],
        bonne: 0, niv: 3,
        expl: "Le théorème de convergence monotone donne une limite l ≤ 5, mais pas forcément égale à 5." },
      { q: "Dans une récurrence, l'hérédité consiste à :",
        choix: ["montrer que P(n) vraie entraîne P(n + 1) vraie", "vérifier P(0)", "montrer P(n + 1) sans utiliser P(n)", "vérifier P(n) pour quelques valeurs de n"],
        bonne: 0, niv: 1,
        expl: "On suppose P(n) vraie pour un n fixé et on en déduit P(n + 1)." },
      { q: "−1/n ≤ un ≤ 1/n pour tout n ≥ 1. Quelle est la limite de un ?",
        choix: ["1", "0", "−1", "On ne peut pas savoir"],
        bonne: 1, niv: 2,
        expl: "Les deux suites qui encadrent tendent vers 0 : par le théorème des gendarmes, un tend vers 0." },
      { q: "un ≥ n² pour tout n. Que peut-on dire de un ?",
        choix: ["Elle tend vers +∞", "Elle converge", "Elle est croissante", "Elle est majorée"],
        bonne: 0, niv: 2,
        expl: "n² tend vers +∞ et un est plus grand : par comparaison, un tend vers +∞. Rien ne dit qu'elle est croissante." },
      { q: "Quelle est la limite de un = (−1)^n ?",
        choix: ["Elle n'en a pas", "0", "1", "−1"],
        bonne: 0, niv: 1,
        expl: "Elle prend alternativement les valeurs 1 et −1 sans se rapprocher d'un nombre : elle diverge sans limite." },
      { q: "u0 = 1, u(n+1) = 0,5·un + 2. Si un converge vers l, que vaut l ?",
        choix: ["2", "1", "0,5", "4"],
        bonne: 3, niv: 2,
        expl: "l = 0,5 l + 2 donne 0,5 l = 2, donc l = 4." },
      { q: "Une suite décroissante est minorée par 0. Que peut-on dire ?",
        choix: ["Elle converge, mais pas forcément vers 0", "Elle converge vers 0", "Elle tend vers −∞", "Elle est constante"],
        bonne: 0, niv: 3,
        expl: "Décroissante et minorée : elle converge. La limite est supérieure ou égale à 0, sans être forcément 0." },
      { q: "Quelle est la limite de n² − 5n ?",
        choix: ["−∞", "0", "+∞", "−5"],
        bonne: 2, niv: 3,
        expl: "Forme ∞ − ∞ : n² − 5n = n²(1 − 5/n), et (1 − 5/n) tend vers 1, donc la limite est +∞." },
    ] },
  { chapitre: "maths-6",
    fiche: `## Limites de fonctions

On cherche ce que devient f(x) quand x devient très grand, ou quand x se rapproche d'une valeur interdite. Les limites donnent les **asymptotes** de la courbe.

### Limite en l'infini
- f(x) → +∞ quand x → +∞ : f(x) finit par dépasser n'importe quel nombre.
- f(x) → l quand x → +∞ : f(x) se rapproche autant qu'on veut de l. La droite **y = l** est alors **asymptote horizontale** à la courbe en +∞.
- Exemple : 2 + 1/x tend vers 2 en +∞ : la droite y = 2 est asymptote horizontale.

### Limite en un réel a
- Si f(x) tend vers +∞ ou −∞ quand x tend vers a, la droite **x = a** est **asymptote verticale**.
- On distingue souvent la limite à gauche (x < a) et à droite (x > a). Exemple : 1/x tend vers +∞ quand x → 0 avec x > 0, et vers −∞ avec x < 0.
- Une fonction rationnelle a souvent une asymptote verticale là où son dénominateur s'annule (et pas son numérateur). Exemple : 1/(x − 3) donne la droite x = 3.

### Limites de référence
- En +∞ : x, x², x^n, √x et e^x tendent vers +∞ ; 1/x, 1/x² et 1/√x tendent vers 0.
- En −∞ : **e^x tend vers 0**, x² tend vers +∞, x³ tend vers −∞.

### Opérations et formes indéterminées
- Les règles sont les mêmes que pour les suites. Les **formes indéterminées** sont : **∞ − ∞, 0 × ∞, ∞/∞, 0/0**.
- **Polynôme en l'infini** : il a la même limite que son terme de plus haut degré. Exemple : −2x³ + x + 5 tend vers −∞ en +∞.
- **Quotient de polynômes en l'infini** : même limite que le quotient des termes de plus haut degré. Exemple : (3x² + 1)/(x² − 4) tend vers 3.

### Croissances comparées (à connaître par cœur)
- En +∞ : **e^x / x → +∞** et plus généralement e^x / x^n → +∞. L'exponentielle « l'emporte » sur toute puissance.
- En −∞ : **x e^x → 0** et x^n e^x → 0.
- Exemple : e^x − x² = x² (e^x / x² − 1) tend vers +∞.

### Limite d'une fonction composée
- Si u(x) → b quand x → a, et si g(X) → c quand X → b, alors **g(u(x)) → c**.
- Exemple : quand x → +∞, −x² → −∞, et e^X → 0 quand X → −∞. Donc **e^(−x²) → 0**.

### Comparaison et gendarmes
- Si f(x) ≥ g(x) pour x assez grand et g(x) → +∞, alors f(x) → +∞.
- **Gendarmes** : si g(x) ≤ f(x) ≤ h(x) et si g et h tendent vers l, alors f tend vers l.
- Exemple : −1 ≤ sin(x) ≤ 1, donc −1/x ≤ sin(x)/x ≤ 1/x pour x > 0, et sin(x)/x → 0 en +∞.

### À retenir pour le bac
- Toujours dire si la forme est indéterminée avant de factoriser.
- Une limite finie en l'infini donne une asymptote **horizontale**, une limite infinie en a une asymptote **verticale**.
- Citer « par croissances comparées » quand on l'utilise : c'est un point de rédaction attendu.
- Le piège : e^x tend vers 0 en −∞, pas vers −∞.`,
    cartes: [
      { q: "Asymptote horizontale", r: "Si f(x) → l quand x → +∞ (ou −∞), la droite y = l est asymptote horizontale." },
      { q: "Asymptote verticale", r: "Si f(x) → ±∞ quand x → a, la droite x = a est asymptote verticale." },
      { q: "Limite de e^x en −∞", r: "0." },
      { q: "Limite de e^x / x en +∞", r: "+∞ (croissances comparées)." },
      { q: "Limite de x e^x en −∞", r: "0 (croissances comparées)." },
      { q: "Limite d'un polynôme en l'infini", r: "Celle de son terme de plus haut degré." },
      { q: "Limite d'un quotient de polynômes en l'infini", r: "Celle du quotient de leurs termes de plus haut degré." },
      { q: "Limite de 1/x quand x → 0 avec x > 0", r: "+∞." },
      { q: "Limite de 1/x quand x → 0 avec x < 0", r: "−∞." },
      { q: "Limite d'une fonction composée", r: "Si u(x) → b et g(X) → c quand X → b, alors g(u(x)) → c." },
      { q: "Théorème des gendarmes pour les fonctions", r: "Si g(x) ≤ f(x) ≤ h(x) et si g et h tendent vers l, alors f tend vers l." },
      { q: "Limite de e^x / x^n en +∞ (n entier)", r: "+∞ : l'exponentielle l'emporte sur toute puissance." },
      { q: "Quatre formes indéterminées", r: "∞ − ∞, 0 × ∞, ∞/∞, 0/0." },
    ],
    quiz: [
      { q: "Quelle est la limite de e^x quand x tend vers −∞ ?",
        choix: ["−∞", "1", "+∞", "0"],
        bonne: 3, niv: 1,
        expl: "e^x est toujours positive et se rapproche de 0 en −∞ : la courbe a l'axe des abscisses pour asymptote." },
      { q: "Quelle est la limite de (3x² + 1)/(x² − 4) en +∞ ?",
        choix: ["3", "−1/4", "+∞", "1"],
        bonne: 0, niv: 2,
        expl: "Même limite que 3x²/x² = 3." },
      { q: "Quelle est la limite de −2x³ + x + 5 en +∞ ?",
        choix: ["+∞", "−∞", "5", "−2"],
        bonne: 1, niv: 2,
        expl: "Même limite que le terme de plus haut degré −2x³, qui tend vers −∞." },
      { q: "Quelle est la limite de e^x / x en +∞ ?",
        choix: ["0", "+∞", "1", "−∞"],
        bonne: 1, niv: 1,
        expl: "Par croissances comparées, l'exponentielle l'emporte : e^x / x tend vers +∞." },
      { q: "Quelle est la limite de x e^x en −∞ ?",
        choix: ["−∞", "+∞", "0", "1"],
        bonne: 2, niv: 2,
        expl: "Forme 0 × ∞ levée par croissances comparées : x e^x tend vers 0 en −∞." },
      { q: "f(x) = 1/(x − 2). Que peut-on dire de la droite x = 2 ?",
        choix: ["C'est une asymptote verticale", "C'est une asymptote horizontale", "Elle coupe la courbe en un point", "C'est une tangente à la courbe"],
        bonne: 0, niv: 2,
        expl: "Quand x tend vers 2, f(x) tend vers +∞ ou −∞ selon le côté : x = 2 est asymptote verticale." },
      { q: "Quelle est la limite de e^(−x²) en +∞ ?",
        choix: ["+∞", "1", "0", "−∞"],
        bonne: 2, niv: 2,
        expl: "Par composition : −x² tend vers −∞, et e^X tend vers 0 quand X tend vers −∞." },
      { q: "lim f = 3 en +∞. Que peut-on en déduire ?",
        choix: ["La droite x = 3 est asymptote verticale", "f est majorée par 3", "La droite y = 3 est asymptote horizontale", "f est croissante sur ℝ"],
        bonne: 2, niv: 3,
        expl: "Une limite finie en l'infini donne une asymptote horizontale. Rien ne dit que f reste sous 3." },
      { q: "Que vaut la limite de e^x − x² quand x tend vers +∞ ?",
        choix: ["−∞", "0", "1", "+∞"],
        bonne: 3, niv: 3,
        expl: "Forme ∞ − ∞ : e^x − x² = x²(e^x / x² − 1), et e^x / x² tend vers +∞ par croissances comparées." },
      { q: "Quelle est la limite de sin(x)/x en +∞ ?",
        choix: ["1", "+∞", "Elle n'existe pas", "0"],
        bonne: 3, niv: 3,
        expl: "Gendarmes : −1/x ≤ sin(x)/x ≤ 1/x pour x > 0. Le piège est la limite 1, qui vaut en 0." },
      { q: "Quelle est la limite de (x + 1)/(x − 1) quand x → 1 avec x > 1 ?",
        choix: ["+∞", "−∞", "1", "2"],
        bonne: 0, niv: 2,
        expl: "Le numérateur tend vers 2 et le dénominateur vers 0 en restant positif : le quotient tend vers +∞." },
    ] },
  { chapitre: "maths-7",
    fiche: `## Compléments sur la dérivation et convexité

On ajoute deux outils à la dérivation de première : la dérivée d'une fonction composée, et la dérivée seconde, qui décrit la forme de la courbe (convexe ou concave).

### Dérivée d'une fonction composée
- Si f(x) = g(u(x)), alors **f'(x) = u'(x) × g'(u(x))**.
- Formules qui en découlent :
- **(e^u)' = u' e^u**. Exemple : (e^(3x + 1))' = 3 e^(3x + 1).
- **(u^n)' = n u' u^(n − 1)**. Exemple : ((2x + 1)^4)' = 4 × 2 × (2x + 1)³ = 8 (2x + 1)³.
- **(√u)' = u' / (2√u)** quand u > 0. Exemple : (√(x² + 1))' = 2x / (2√(x² + 1)) = x / √(x² + 1).
- **(g(ax + b))' = a g'(ax + b)**. Exemple : (cos(2x))' = −2 sin(2x).

### Rappels de première
- Si f' ≥ 0 sur un intervalle, f y est croissante ; si f' ≤ 0, elle est décroissante.
- La tangente au point d'abscisse a a pour équation **y = f'(a)(x − a) + f(a)**.

### Dérivée seconde
- La **dérivée seconde** f'' est la dérivée de f'. Exemple : f(x) = x³, f'(x) = 3x², f''(x) = 6x.

### Convexité
- f est **convexe** sur un intervalle si sa courbe est **au-dessus de ses tangentes** (et au-dessous de ses cordes). Forme d'un « U » ou d'un bol.
- f est **concave** si sa courbe est **au-dessous de ses tangentes** (et au-dessus de ses cordes). Forme d'un « ∩ ».
- Pour une fonction deux fois dérivable : f convexe ⟺ **f' croissante** ⟺ **f'' ≥ 0**. De même, f concave ⟺ f' décroissante ⟺ f'' ≤ 0.
- Exemples : x² et e^x sont convexes sur ℝ ; √x et ln(x) sont concaves sur leur ensemble de définition.

### Point d'inflexion
- Un **point d'inflexion** est un point où la courbe **traverse sa tangente** : la convexité change.
- Méthode : on cherche où **f'' s'annule en changeant de signe**. Exemple : f(x) = x³, f''(x) = 6x change de signe en 0, donc le point O(0 ; 0) est un point d'inflexion.
- Attention : f''(a) = 0 ne suffit pas. Pour x⁴, f''(x) = 12x² s'annule en 0 sans changer de signe : pas de point d'inflexion.

### Utiliser la convexité pour une inégalité
- La tangente à e^x en 0 est y = x + 1. Comme exp est convexe, sa courbe est au-dessus : **e^x ≥ x + 1 pour tout réel x**.
- De même, ln est concave, donc ln(x) ≤ x − 1 pour tout x > 0.

### Méthode type au bac
- Calculer f', étudier son signe, dresser le tableau de variations.
- Calculer f'', étudier son signe : intervalles de convexité, point d'inflexion.
- Lire graphiquement : si on donne la courbe de f', f est convexe là où f' est croissante.

### À retenir pour le bac
- Ne pas oublier le facteur u' dans la dérivée d'une composée.
- Convexe : f'' ≥ 0, f' croissante, courbe au-dessus des tangentes.
- Point d'inflexion : f'' change de signe, pas seulement s'annule.
- Sur une question avec la courbe de f' : on lit les variations de f' pour la convexité de f, et le signe de f' pour les variations de f.`,
    cartes: [
      { q: "Dérivée de g(u(x))", r: "u'(x) × g'(u(x))." },
      { q: "Dérivée de e^u", r: "u' e^u." },
      { q: "Dérivée de u^n", r: "n u' u^(n − 1)." },
      { q: "Dérivée de √u (u > 0)", r: "u' / (2√u)." },
      { q: "Dérivée de g(ax + b)", r: "a × g'(ax + b)." },
      { q: "Équation de la tangente en a", r: "y = f'(a)(x − a) + f(a)." },
      { q: "Définition géométrique d'une fonction convexe", r: "Sa courbe est au-dessus de chacune de ses tangentes (et au-dessous de ses cordes)." },
      { q: "Lien entre convexité et f''", r: "f convexe ⟺ f'' ≥ 0 ⟺ f' croissante." },
      { q: "Lien entre concavité et f''", r: "f concave ⟺ f'' ≤ 0 ⟺ f' décroissante." },
      { q: "Qu'est-ce qu'un point d'inflexion ?", r: "Un point où la courbe traverse sa tangente : la convexité change. f'' s'y annule en changeant de signe." },
      { q: "Inégalité classique avec l'exponentielle", r: "e^x ≥ x + 1 pour tout réel x (exp convexe, tangente en 0)." },
      { q: "Exemples de fonctions concaves", r: "√x sur [0 ; +∞[ et ln(x) sur ]0 ; +∞[." },
      { q: "f''(a) = 0 suffit-il pour un point d'inflexion ?", r: "Non : il faut que f'' change de signe en a. Contre-exemple : x⁴ en 0." },
    ],
    quiz: [
      { q: "Quelle est la dérivée de f(x) = e^(3x + 1) ?",
        choix: ["e^(3x + 1)", "(3x + 1) e^(3x)", "3 e^(3x + 1)", "3x e^(3x + 1)"],
        bonne: 2, niv: 2,
        expl: "(e^u)' = u' e^u avec u = 3x + 1, u' = 3." },
      { q: "Quelle est la dérivée de f(x) = (2x + 1)^4 ?",
        choix: ["4(2x + 1)³", "8(2x + 1)³", "2(2x + 1)³", "8(2x + 1)⁴"],
        bonne: 1, niv: 2,
        expl: "(u^n)' = n u' u^(n−1) = 4 × 2 × (2x + 1)³. Oublier u' = 2 donne 4(2x + 1)³." },
      { q: "Quelle est la dérivée de f(x) = √(x² + 1) ?",
        choix: ["1 / (2√(x² + 1))", "2x √(x² + 1)", "2x / √(x² + 1)", "x / √(x² + 1)"],
        bonne: 3, niv: 2,
        expl: "u'/(2√u) = 2x / (2√(x² + 1)), qui se simplifie en x / √(x² + 1)." },
      { q: "Une fonction f est convexe sur I si et seulement si :",
        choix: ["f' est croissante sur I", "f est croissante sur I", "f' est positive sur I", "f est positive sur I"],
        bonne: 0, niv: 1,
        expl: "La convexité est liée aux variations de f' (ou au signe de f''), pas aux variations ni au signe de f." },
      { q: "Que signifie géométriquement « f est convexe » ?",
        choix: ["La courbe est au-dessous de ses tangentes", "La courbe est au-dessus de l'axe des abscisses", "La courbe est au-dessus de ses tangentes", "La courbe est au-dessous de ses cordes et tangentes"],
        bonne: 2, niv: 1,
        expl: "Convexe : au-dessus de ses tangentes, au-dessous de ses cordes." },
      { q: "f(x) = x³ − 3x². Quel est le plus grand intervalle où f est convexe ?",
        choix: ["]−∞ ; 1]", "[1 ; +∞[", "[0 ; 2]", "[0 ; +∞["],
        bonne: 1, niv: 2,
        expl: "f'(x) = 3x² − 6x et f''(x) = 6x − 6, positive pour x ≥ 1." },
      { q: "f(x) = x⁴. Le point O(0 ; 0) est-il un point d'inflexion ?",
        choix: ["Non, car f'' ne change pas de signe en 0", "Oui, car f''(0) = 0", "Oui, car f'(0) = 0", "Non, car f''(0) est négatif"],
        bonne: 0, niv: 3,
        expl: "f''(x) = 12x² s'annule en 0 mais reste positive : f est convexe partout, pas d'inflexion." },
      { q: "On donne la courbe de f', qui est décroissante sur [0 ; 2]. Que peut-on dire de f sur [0 ; 2] ?",
        choix: ["f est décroissante", "f est concave", "f est convexe", "f est négative"],
        bonne: 1, niv: 3,
        expl: "f' décroissante signifie f concave. Les variations de f dépendent du signe de f', pas de ses variations." },
      { q: "Quelle inégalité découle de la convexité de l'exponentielle ?",
        choix: ["e^x ≤ x + 1 pour tout réel x", "e^x ≥ x² pour tout réel x", "e^x ≤ e x pour tout réel x", "e^x ≥ x + 1 pour tout réel x"],
        bonne: 3, niv: 3,
        expl: "La courbe d'une fonction convexe est au-dessus de ses tangentes, et la tangente en 0 est y = x + 1." },
      { q: "Quelle est la dérivée seconde de f(x) = e^(2x) ?",
        choix: ["4 e^(2x)", "2 e^(2x)", "e^(2x)", "4x e^(2x)"],
        bonne: 0, niv: 2,
        expl: "f'(x) = 2 e^(2x), puis f''(x) = 2 × 2 e^(2x) = 4 e^(2x)." },
      { q: "f(x) = e^x. Quelle est l'équation de sa tangente au point d'abscisse 1 ?",
        choix: ["y = e x + 1", "y = x + e", "y = e(x + 1)", "y = e x"],
        bonne: 3, niv: 2,
        expl: "y = f'(1)(x − 1) + f(1) = e(x − 1) + e = e x." },
      { q: "Quelle fonction est concave sur ]0 ; +∞[ ?",
        choix: ["e^x", "x²", "ln(x)", "1/x"],
        bonne: 2, niv: 1,
        expl: "ln''(x) = −1/x² < 0. Les trois autres ont une dérivée seconde positive sur ]0 ; +∞[." },
    ] },
  { chapitre: "maths-8",
    fiche: `## Continuité des fonctions

Une fonction est continue quand on peut tracer sa courbe « sans lever le crayon ». Ce chapitre sert surtout à montrer qu'une équation f(x) = k a une solution, et une seule.

### Définition
- f est **continue en a** si **f(x) tend vers f(a)** quand x tend vers a.
- f est **continue sur un intervalle I** si elle est continue en chaque point de I.
- Les fonctions usuelles (polynômes, exponentielle, logarithme, racine carrée, sinus, cosinus, fonctions rationnelles sur leur ensemble de définition) sont continues. Leurs sommes, produits, quotients et composées aussi.
- Exemple de fonction **non continue** : la **partie entière** E(x), qui fait des sauts à chaque entier (E(0,9) = 0 mais E(1) = 1).

### Dérivable et continue
- **Toute fonction dérivable sur un intervalle est continue** sur cet intervalle.
- La **réciproque est fausse** : la fonction valeur absolue est continue en 0, mais pas dérivable en 0 (la courbe y fait un angle).

### Le théorème des valeurs intermédiaires (TVI)
- Si f est **continue sur [a ; b]**, alors pour tout réel k compris entre f(a) et f(b), l'équation **f(x) = k a au moins une solution** dans [a ; b].
- Sans continuité, le théorème ne marche pas : la courbe peut « sauter » par-dessus k.

### Le corollaire (cas strictement monotone)
- Si f est **continue** et **strictement monotone** sur [a ; b], alors pour tout k compris entre f(a) et f(b), l'équation f(x) = k a **une unique solution** dans [a ; b].
- Il marche aussi sur un intervalle ouvert ou infini en utilisant les limites aux bornes.
- Exemple : f(x) = x³ + x − 1 est continue et strictement croissante sur [0 ; 1], avec f(0) = −1 et f(1) = 1. Comme 0 est entre −1 et 1, l'équation f(x) = 0 a une unique solution α dans [0 ; 1].

### Rédaction attendue
- « f est **continue** et **strictement croissante** sur [a ; b], f(a) = … et f(b) = … ; k est compris entre f(a) et f(b). D'après le **corollaire du théorème des valeurs intermédiaires**, l'équation f(x) = k admet une unique solution α dans [a ; b]. »
- Puis on donne un **encadrement** de α à la calculatrice (tableau de valeurs) ou par **dichotomie**.

### La dichotomie
- On coupe l'intervalle en deux. On garde la moitié où f change de signe. On recommence.
- À chaque étape, la longueur de l'intervalle est divisée par 2. Après 10 étapes sur [0 ; 1], elle vaut 1/1024, soit moins de 0,001.

### Suites et continuité (théorème du point fixe)
- Si u(n+1) = f(un), si **un converge vers l** et si **f est continue en l**, alors **l = f(l)**.
- Exemple : u(n+1) = √(un + 6) avec un convergente. On résout l = √(l + 6), soit l² = l + 6 avec l ≥ 0, donc l = 3.
- Attention : il faut d'abord prouver que la suite converge. L'équation l = f(l) seule ne le prouve pas.

### À retenir pour le bac
- Pour l'unicité, la stricte monotonie est indispensable : sinon, seulement « au moins une solution ».
- Citer les deux hypothèses : continuité et stricte monotonie.
- Dérivable entraîne continue, mais une fonction continue n'est pas toujours dérivable.
- Point fixe : prouver la convergence d'abord, puis résoudre l = f(l).`,
    cartes: [
      { q: "Quand f est-elle continue en a ?", r: "Quand f(x) tend vers f(a) lorsque x tend vers a." },
      { q: "Lien entre dérivabilité et continuité", r: "Une fonction dérivable est continue. La réciproque est fausse." },
      { q: "Contre-exemple : continue mais pas dérivable", r: "La valeur absolue ∣x∣ en 0." },
      { q: "Exemple de fonction non continue", r: "La partie entière E(x), qui fait des sauts en chaque entier." },
      { q: "Théorème des valeurs intermédiaires", r: "Si f est continue sur [a ; b] et k entre f(a) et f(b), alors f(x) = k a au moins une solution dans [a ; b]." },
      { q: "Corollaire du TVI", r: "Si f est continue et strictement monotone sur [a ; b] et k entre f(a) et f(b), alors f(x) = k a une unique solution dans [a ; b]." },
      { q: "Que manque-t-il au TVI pour avoir l'unicité ?", r: "La stricte monotonie de f." },
      { q: "Principe de la dichotomie", r: "Couper l'intervalle en deux et garder la moitié où f change de signe, puis recommencer." },
      { q: "Longueur de l'intervalle après n étapes de dichotomie sur [a ; b]", r: "(b − a) / 2^n." },
      { q: "Théorème du point fixe pour une suite", r: "Si u(n+1) = f(un), un → l et f continue en l, alors f(l) = l." },
      { q: "Piège du point fixe", r: "Résoudre l = f(l) ne prouve pas que la suite converge : il faut le montrer avant." },
      { q: "Quelles fonctions usuelles sont continues ?", r: "Polynômes, exp, ln, racine, sin, cos, fonctions rationnelles sur leur ensemble de définition." },
    ],
    quiz: [
      { q: "Que garantit le théorème des valeurs intermédiaires, si f est continue sur [a ; b] ?",
        choix: ["Toute valeur entre f(a) et f(b) est atteinte une seule fois", "Toute valeur entre f(a) et f(b) est atteinte au moins une fois", "f est monotone sur [a ; b]", "f est dérivable sur [a ; b]"],
        bonne: 1, niv: 1,
        expl: "Le TVI donne l'existence d'au moins une solution, pas l'unicité." },
      { q: "f est continue et strictement décroissante sur [0 ; 4], f(0) = 5, f(4) = −3. Combien de solutions a f(x) = 0 ?",
        choix: ["Aucune", "Deux", "On ne peut pas savoir", "Une seule"],
        bonne: 3, niv: 2,
        expl: "0 est entre −3 et 5, et f est continue et strictement monotone : corollaire du TVI, une unique solution." },
      { q: "Quelle affirmation est vraie ?",
        choix: ["Toute fonction continue est dérivable", "Toute fonction continue est monotone", "Toute fonction dérivable est continue", "Toute fonction monotone est continue"],
        bonne: 2, niv: 1,
        expl: "Dérivable implique continue. ∣x∣ est continue sans être dérivable en 0 ; la partie entière est monotone sans être continue." },
      { q: "f est continue sur [1 ; 3], f(1) = 2 et f(3) = 2. Que peut-on dire de l'équation f(x) = 5 ?",
        choix: ["Elle n'a aucune solution", "Elle peut avoir des solutions ou non", "Elle a une unique solution", "Elle a au moins une solution"],
        bonne: 1, niv: 3,
        expl: "5 n'est pas entre f(1) et f(3) : le TVI ne dit rien. La courbe peut monter au-dessus de 5 entre 1 et 3, ou pas." },
      { q: "f(x) = x³ + x − 1 sur [0 ; 1]. Pourquoi l'équation f(x) = 0 a-t-elle une unique solution ?",
        choix: ["f continue, f(0) = −1 et f(1) = 1", "f est un polynôme de degré 3", "f continue, strictement croissante, f(0) = −1 et f(1) = 1", "f(0) et f(1) sont des entiers"],
        bonne: 2, niv: 3,
        expl: "Pour l'unicité, il faut la continuité, la stricte monotonie et le changement de signe. Sans monotonie, on a seulement l'existence." },
      { q: "La valeur absolue est-elle dérivable en 0 ?",
        choix: ["Oui, et sa dérivée vaut 0", "Non, mais elle est continue en 0", "Non, et elle n'est pas continue en 0", "Oui, et sa dérivée vaut 1"],
        bonne: 1, niv: 2,
        expl: "La courbe fait un angle en 0 : pas de tangente unique. Mais f(x) tend bien vers 0 = f(0)." },
      { q: "u(n+1) = √(un + 6), et (un) converge. Quelle est sa limite ?",
        choix: ["−2", "6", "√6", "3"],
        bonne: 3, niv: 2,
        expl: "l = √(l + 6) donne l² − l − 6 = 0, soit l = 3 ou l = −2. Une racine carrée est positive, donc l = 3." },
      { q: "Par dichotomie sur [0 ; 1], combien d'étapes faut-il au minimum pour un intervalle de longueur inférieure à 0,01 ?",
        choix: ["6", "7", "5", "4"],
        bonne: 1, niv: 3,
        expl: "1/2^6 = 1/64 ≈ 0,016 est trop grand, 1/2^7 = 1/128 ≈ 0,0078 convient." },
      { q: "Quelle fonction n'est **pas** continue sur ℝ ?",
        choix: ["La partie entière", "La valeur absolue", "La fonction exponentielle", "La fonction cosinus"],
        bonne: 0, niv: 1,
        expl: "La partie entière fait un saut en chaque entier. Les trois autres sont continues sur ℝ." },
      { q: "Le corollaire du TVI donne α unique dans [1 ; 2] avec f(1,4) < 0 < f(1,5) et f croissante. Quel encadrement est juste ?",
        choix: ["1,5 < α < 1,6", "1,3 < α < 1,4", "α = 1,45", "1,4 < α < 1,5"],
        bonne: 3, niv: 2,
        expl: "f change de signe entre 1,4 et 1,5 et f(α) = 0, donc α est entre les deux. Rien ne dit qu'il vaut 1,45." },
      { q: "Pour appliquer le point fixe à u(n+1) = f(un), que faut-il établir d'abord ?",
        choix: ["Que la suite converge", "Que f est croissante", "Que u0 est positif", "Que f(0) = 0"],
        bonne: 0, niv: 2,
        expl: "Sans convergence prouvée, résoudre l = f(l) ne permet de rien conclure sur la suite." },
    ] },
  { chapitre: "maths-9",
    fiche: `## Fonction logarithme népérien

Le logarithme népérien, noté ln, « défait » l'exponentielle. Il sert à résoudre des équations comme e^x = 5 ou 0,9^n < 0,1, très fréquentes au bac.

### Définition
- Pour tout réel **x > 0**, **ln(x)** est l'unique réel y tel que **e^y = x**.
- Donc **e^(ln x) = x** pour x > 0, et **ln(e^x) = x** pour tout réel x.
- Valeurs à connaître : **ln(1) = 0**, **ln(e) = 1**.
- Exemple : e^x = 5 ⟺ x = ln(5) ≈ 1,61.
- ln n'est définie que pour **x > 0** : ln(0) et ln(−2) n'existent pas.

### Propriétés algébriques (a > 0, b > 0, n entier)
- **ln(a × b) = ln(a) + ln(b)**. Exemple : ln(6) = ln(2) + ln(3).
- **ln(a / b) = ln(a) − ln(b)**.
- **ln(1 / a) = −ln(a)**.
- **ln(a^n) = n ln(a)**. Exemple : ln(8) = 3 ln(2).
- **ln(√a) = ½ ln(a)**.
- Piège : ln(a + b) n'est pas égal à ln(a) + ln(b).

### Équations et inéquations
- Pour a > 0 et b > 0 : **ln(a) = ln(b) ⟺ a = b** et **ln(a) < ln(b) ⟺ a < b** (ln est strictement croissante).
- ln(x) > 0 ⟺ x > 1 ; ln(x) < 0 ⟺ 0 < x < 1.
- Toujours commencer par l'**ensemble de définition** : ce qui est dans ln doit être strictement positif.

### Étude de la fonction ln
- **ln'(x) = 1/x** sur ]0 ; +∞[ : ln est **strictement croissante**.
- ln''(x) = −1/x² < 0 : ln est **concave**.
- Limites : ln(x) → **+∞** quand x → +∞ ; ln(x) → **−∞** quand x → 0 (x > 0). L'axe des ordonnées est asymptote verticale.
- Dérivée d'une composée : **(ln u)' = u' / u**, pour u > 0. Exemple : (ln(x² + 1))' = 2x / (x² + 1).

### Croissances comparées
- **ln(x) / x → 0** quand x → +∞ : x l'emporte sur ln.
- **x ln(x) → 0** quand x → 0 (x > 0).
- **ln(1 + x) / x → 1** quand x → 0 (c'est le nombre dérivé de ln en 1).

### Le seuil avec une suite géométrique
- Exemple : trouver le plus petit n tel que 0,8^n < 0,05.
- On applique ln : n × ln(0,8) < ln(0,05).
- Comme **ln(0,8) < 0**, on divise en **changeant le sens** : n > ln(0,05) / ln(0,8) ≈ 13,4. Donc n = 14.

### Exemple d'étude complète
- f(x) = x − ln(x) sur ]0 ; +∞[. On a f'(x) = 1 − 1/x = (x − 1)/x.
- Sur ]0 ; +∞[, x > 0, donc f'(x) a le signe de x − 1 : négatif avant 1, positif après.
- f est décroissante sur ]0 ; 1] puis croissante sur [1 ; +∞[. Son minimum vaut f(1) = 1 − 0 = 1.
- Conséquence : x − ln(x) ≥ 1 pour tout x > 0, donc ln(x) ≤ x − 1.

### À retenir pour le bac
- Vérifier le domaine (ce qui est dans ln doit être strictement positif).
- Diviser par ln(q) avec 0 < q < 1 : le nombre est négatif, l'inégalité change de sens.
- (ln u)' = u'/u, et ln est concave, strictement croissante.
- Les croissances comparées ln(x)/x → 0 et x ln(x) → 0 sont à citer par leur nom.`,
    cartes: [
      { q: "Définition de ln(x)", r: "Pour x > 0, ln(x) est l'unique réel y tel que e^y = x." },
      { q: "ln(1) et ln(e)", r: "ln(1) = 0 et ln(e) = 1." },
      { q: "ln(a × b)", r: "ln(a) + ln(b), pour a > 0 et b > 0." },
      { q: "ln(a / b)", r: "ln(a) − ln(b)." },
      { q: "ln(a^n)", r: "n ln(a)." },
      { q: "ln(√a)", r: "½ ln(a)." },
      { q: "Dérivée de ln", r: "ln'(x) = 1/x sur ]0 ; +∞[." },
      { q: "Dérivée de ln(u)", r: "u' / u, pour u > 0." },
      { q: "Limites de ln aux bornes", r: "ln(x) → −∞ quand x → 0 (x > 0) et ln(x) → +∞ quand x → +∞." },
      { q: "Croissance comparée en +∞", r: "ln(x) / x → 0 quand x → +∞." },
      { q: "Croissance comparée en 0", r: "x ln(x) → 0 quand x → 0 (x > 0)." },
      { q: "Signe de ln(x)", r: "ln(x) < 0 pour 0 < x < 1, ln(1) = 0, ln(x) > 0 pour x > 1." },
      { q: "Résoudre e^x = k (k > 0)", r: "x = ln(k)." },
      { q: "Piège du seuil q^n < s avec 0 < q < 1", r: "ln(q) < 0 : en divisant par ln(q), on change le sens de l'inégalité." },
    ],
    quiz: [
      { q: "Quelle est la solution de e^x = 7 ?",
        choix: ["x = e^7", "x = ln(7)", "x = 7/e", "x = ln(7)/e"],
        bonne: 1, niv: 1,
        expl: "On applique ln des deux côtés : x = ln(7)." },
      { q: "À quoi est égal ln(12) ?",
        choix: ["ln(2) × ln(6)", "ln(10) + ln(2)", "6 ln(2)", "2 ln(2) + ln(3)"],
        bonne: 3, niv: 2,
        expl: "12 = 4 × 3, donc ln(12) = ln(4) + ln(3) = 2 ln(2) + ln(3)." },
      { q: "Quelle est la dérivée de f(x) = ln(x² + 1) ?",
        choix: ["1 / (x² + 1)", "2x ln(x² + 1)", "1 / (2x)", "2x / (x² + 1)"],
        bonne: 3, niv: 2,
        expl: "(ln u)' = u'/u avec u = x² + 1 et u' = 2x." },
      { q: "Quelle est la limite de ln(x)/x en +∞ ?",
        choix: ["1", "0", "+∞", "−∞"],
        bonne: 1, niv: 1,
        expl: "Croissances comparées : x l'emporte sur ln(x), le quotient tend vers 0." },
      { q: "Quel est l'ensemble des solutions de ln(x) < 0 ?",
        choix: ["]0 ; 1[", "]−∞ ; 1[", "]−∞ ; 0[", "]1 ; +∞["],
        bonne: 0, niv: 2,
        expl: "ln(x) < ln(1) ⟺ x < 1, et ln n'est définie que pour x > 0." },
      { q: "Quel est le plus petit entier n tel que 0,8^n < 0,05 ?",
        choix: ["13", "12", "5", "14"],
        bonne: 3, niv: 2,
        expl: "n > ln(0,05)/ln(0,8) ≈ 13,4 (on change le sens car ln(0,8) < 0), donc n = 14." },
      { q: "Pour résoudre 0,5^n < 0,01, un élève écrit n < ln(0,01)/ln(0,5). Quelle est son erreur ?",
        choix: ["Il devait diviser par ln(0,01)", "Il fallait appliquer l'exponentielle", "Il fallait écrire n > ln(0,5)/ln(0,01)", "Il n'a pas changé le sens, alors que ln(0,5) < 0"],
        bonne: 3, niv: 3,
        expl: "ln(0,5) est négatif : diviser par ce nombre change toujours le sens de l'inégalité." },
      { q: "À quoi est égal ln(a + b), pour a et b positifs ?",
        choix: ["On ne peut pas le simplifier en général", "ln(a) + ln(b)", "ln(a) × ln(b)", "ln(a × b)"],
        bonne: 0, niv: 3,
        expl: "La formule porte sur un produit : ln(ab) = ln(a) + ln(b). Pour une somme, il n'y a pas de formule." },
      { q: "Quel est l'ensemble de définition de f(x) = ln(3 − x) ?",
        choix: ["]3 ; +∞[", "]0 ; 3[", "]0 ; +∞[", "]−∞ ; 3["],
        bonne: 3, niv: 2,
        expl: "Il faut 3 − x > 0, soit x < 3." },
      { q: "Quelle est la limite de x ln(x) quand x tend vers 0 (x > 0) ?",
        choix: ["−∞", "+∞", "0", "1"],
        bonne: 2, niv: 2,
        expl: "Forme 0 × ∞ levée par croissances comparées : x ln(x) tend vers 0." },
      { q: "Quelle est la solution de ln(2x − 1) = 0 ?",
        choix: ["x = 0", "x = 1/2", "x = (e + 1)/2", "x = 1"],
        bonne: 3, niv: 2,
        expl: "ln(2x − 1) = 0 ⟺ 2x − 1 = 1 ⟺ x = 1. (e + 1)/2 résoudrait ln(2x − 1) = 1." },
      { q: "Que peut-on dire de la fonction ln sur ]0 ; +∞[ ?",
        choix: ["Elle est toujours croissante et concave", "Elle est croissante et convexe", "Elle est décroissante et concave", "Elle est positive et convexe"],
        bonne: 0, niv: 3,
        expl: "ln'(x) = 1/x > 0 et ln''(x) = −1/x² < 0 : croissante et concave. Elle est négative sur ]0 ; 1[." },
    ] },
  { chapitre: "maths-10",
    fiche: `## Fonctions sinus et cosinus

En première, on a vu le cercle trigonométrique. En terminale, on étudie sin et cos comme des fonctions : dérivées, variations, courbes.

### Rappels sur le cercle trigonométrique
- Pour tout réel x, le point M du cercle de centre O et de rayon 1 associé à x a pour coordonnées **(cos x ; sin x)**.
- Donc **−1 ≤ cos x ≤ 1**, **−1 ≤ sin x ≤ 1** et **cos²x + sin²x = 1**.
- Valeurs à connaître : cos 0 = 1, sin 0 = 0 ; cos(π/6) = √3/2, sin(π/6) = 1/2 ; cos(π/4) = sin(π/4) = √2/2 ; cos(π/3) = 1/2, sin(π/3) = √3/2 ; cos(π/2) = 0, sin(π/2) = 1 ; cos π = −1, sin π = 0.

### Périodicité et parité
- sin et cos sont **périodiques de période 2π** : cos(x + 2π) = cos x et sin(x + 2π) = sin x. On les étudie donc sur un intervalle de longueur 2π, par exemple [−π ; π].
- **cos est paire** : cos(−x) = cos x. Sa courbe est symétrique par rapport à l'axe des ordonnées.
- **sin est impaire** : sin(−x) = −sin x. Sa courbe est symétrique par rapport à l'origine.
- Grâce à cela, on peut se limiter à [0 ; π], puis compléter par symétrie.

### Dérivées
- **sin' = cos** et **cos' = −sin**.
- Avec une composée : (sin(ax + b))' = a cos(ax + b) et (cos(ax + b))' = −a sin(ax + b).
- Plus généralement : (sin u)' = u' cos u et (cos u)' = −u' sin u.
- Exemple : (cos(3x))' = −3 sin(3x).

### Variations sur [0 ; π]
- cos est **décroissante** sur [0 ; π] : elle passe de 1 à −1.
- sin est **croissante** sur [0 ; π/2] (de 0 à 1) puis **décroissante** sur [π/2 ; π] (de 1 à 0).

### Une limite à connaître
- **sin(x) / x → 1** quand x → 0. C'est le nombre dérivé de sin en 0, qui vaut cos 0 = 1.

### Équations simples
- cos x = cos a ⟺ x = a + 2kπ ou x = −a + 2kπ (k entier).
- sin x = sin a ⟺ x = a + 2kπ ou x = π − a + 2kπ.
- Exemple : sur [0 ; 2π], cos x = 1/2 a deux solutions : π/3 et 5π/3.

### Fonctions combinées au bac
- On rencontre des fonctions comme f(x) = e^(−x) cos x, ou des suites un = sin(n)/n. On utilise souvent l'encadrement **−1 ≤ cos x ≤ 1** avec le théorème des gendarmes.
- Exemple : −e^(−x) ≤ e^(−x) cos x ≤ e^(−x), et e^(−x) → 0 en +∞, donc e^(−x) cos x → 0.

### Exemple : une fonction de période π
- f(x) = cos(2x). On a f(x + π) = cos(2x + 2π) = cos(2x) : f est **périodique de période π**.
- f'(x) = −2 sin(2x). Sur [0 ; π/2], 2x est dans [0 ; π], donc sin(2x) ≥ 0 et f'(x) ≤ 0 : f décroît de 1 à −1.

### À retenir pour le bac
- La dérivée de cos est **−sin** : le signe moins est le piège classique.
- Période 2π, cos paire, sin impaire.
- Encadrer sin et cos entre −1 et 1 pour trouver des limites.
- sin(x)/x tend vers 1 en 0, mais vers 0 en +∞.`,
    cartes: [
      { q: "Dérivée de sin", r: "sin' = cos." },
      { q: "Dérivée de cos", r: "cos' = −sin." },
      { q: "Dérivée de cos(ax + b)", r: "−a sin(ax + b)." },
      { q: "Dérivée de sin(ax + b)", r: "a cos(ax + b)." },
      { q: "Période de sin et cos", r: "2π." },
      { q: "Parité de cos", r: "cos est paire : cos(−x) = cos x." },
      { q: "Parité de sin", r: "sin est impaire : sin(−x) = −sin x." },
      { q: "Relation fondamentale", r: "cos²x + sin²x = 1." },
      { q: "Limite de sin(x)/x en 0", r: "1." },
      { q: "cos(π/3) et sin(π/3)", r: "cos(π/3) = 1/2 et sin(π/3) = √3/2." },
      { q: "cos(π/4) et sin(π/4)", r: "Tous les deux valent √2/2." },
      { q: "Variations de cos sur [0 ; π]", r: "Décroissante, de 1 à −1." },
      { q: "Encadrement utile pour les limites", r: "−1 ≤ sin x ≤ 1 et −1 ≤ cos x ≤ 1, pour tout réel x." },
    ],
    quiz: [
      { q: "Quelle est la dérivée de cos(x) ?",
        choix: ["sin(x)", "−sin(x)", "−cos(x)", "cos(x)"],
        bonne: 1, niv: 1,
        expl: "cos' = −sin. Oublier le signe moins est l'erreur classique." },
      { q: "Quelle est la dérivée de f(x) = sin(2x + 1) ?",
        choix: ["cos(2x + 1)", "2 cos(2x + 1)", "−2 cos(2x + 1)", "2 sin(2x + 1)"],
        bonne: 1, niv: 2,
        expl: "(sin u)' = u' cos u, avec u' = 2." },
      { q: "Quelle est la dérivée de f(x) = cos(3x) ?",
        choix: ["3 sin(3x)", "−sin(3x)", "−3 sin(3x)", "−3 cos(3x)"],
        bonne: 2, niv: 2,
        expl: "(cos u)' = −u' sin u, avec u' = 3." },
      { q: "Quelle est la période des fonctions sin et cos ?",
        choix: ["π", "2π", "π/2", "4π"],
        bonne: 1, niv: 1,
        expl: "cos(x + 2π) = cos x et sin(x + 2π) = sin x." },
      { q: "La fonction cosinus est :",
        choix: ["paire", "impaire", "ni paire ni impaire", "paire et impaire"],
        bonne: 0, niv: 1,
        expl: "cos(−x) = cos x : la courbe est symétrique par rapport à l'axe des ordonnées." },
      { q: "Quelle est la limite de sin(x)/x quand x tend vers 0 ?",
        choix: ["0", "+∞", "1", "Elle n'existe pas"],
        bonne: 2, niv: 2,
        expl: "C'est le nombre dérivé de sin en 0 : cos(0) = 1." },
      { q: "Quelle est la limite de e^(−x) cos(x) en +∞ ?",
        choix: ["1", "+∞", "0", "Elle n'existe pas, car cos oscille"],
        bonne: 2, niv: 3,
        expl: "−e^(−x) ≤ e^(−x) cos x ≤ e^(−x) et e^(−x) → 0 : par les gendarmes, la limite est 0." },
      { q: "Combien l'équation cos(x) = 1/2 a-t-elle de solutions dans [0 ; 2π] ?",
        choix: ["1", "4", "0", "2"],
        bonne: 3, niv: 2,
        expl: "Les solutions sont π/3 et 5π/3. Oublier la solution symétrique est le piège." },
      { q: "Sur [0 ; π], la fonction sinus est :",
        choix: ["toujours croissante", "toujours décroissante", "croissante puis décroissante", "décroissante puis croissante"],
        bonne: 2, niv: 2,
        expl: "Elle monte de 0 à 1 sur [0 ; π/2], puis redescend à 0 sur [π/2 ; π]." },
      { q: "Quelle égalité est vraie pour tout réel x ?",
        choix: ["sin(−x) = sin(x)", "cos(−x) = −cos(x)", "sin(−x) = −sin(x)", "sin(x + π) = sin(x)"],
        bonne: 2, niv: 3,
        expl: "sin est impaire. cos est paire, et sin(x + π) = −sin(x)." },
      { q: "f(x) = x + sin(x). Que peut-on dire de f sur ℝ ?",
        choix: ["Elle est périodique", "Elle est croissante", "Elle est décroissante", "Elle est bornée"],
        bonne: 1, niv: 3,
        expl: "f'(x) = 1 + cos(x) ≥ 0 car cos(x) ≥ −1 : f est croissante. Le terme x empêche f d'être bornée ou périodique." },
    ] },
  { chapitre: "maths-11",
    fiche: `## Primitives et équations différentielles

Trouver une primitive, c'est faire le chemin inverse de la dérivation. Une équation différentielle est une équation dont l'inconnue est une **fonction**.

### Équation différentielle
- Une **équation différentielle** relie une fonction inconnue y et sa dérivée y'. Exemple : y' = 2y.
- Une **solution** est une fonction f dérivable qui vérifie l'équation pour tout x de l'intervalle. Exemple : f(x) = e^(2x) vérifie f'(x) = 2 e^(2x) = 2 f(x).
- Pour vérifier qu'une fonction est solution, on calcule f' et on remplace : c'est souvent la première question.

### Primitives
- F est une **primitive** de f sur I si **F' = f** sur I. Autrement dit, F est solution de l'équation y' = f.
- Toute fonction **continue** sur un intervalle admet des primitives.
- Si F est une primitive, toutes les autres sont **F + C** (C constante réelle). Deux primitives diffèrent d'une constante.
- Il existe **une seule primitive** qui prend une valeur donnée en un point donné. Exemple : la primitive de 2x qui vaut 5 en 0 est x² + 5.

### Primitives usuelles
- a (constante) : a x.
- x^n (n entier, n ≠ −1) : **x^(n+1) / (n + 1)**. Exemple : x³ a pour primitive x⁴/4.
- 1/x sur ]0 ; +∞[ : **ln(x)**.
- 1/x² : **−1/x**.
- 1/√x : **2√x**.
- e^x : e^x. cos : sin. sin : **−cos**.

### Primitives des formes composées
- **u' e^u** : e^u. Exemple : 2x e^(x²) a pour primitive e^(x²).
- **u' / u** (u > 0) : ln(u). Exemple : 2x/(x² + 1) a pour primitive ln(x² + 1).
- **u' u^n** : u^(n+1) / (n + 1).
- **u' / √u** : 2√u.
- e^(ax + b) : (1/a) e^(ax + b). Exemple : e^(3x) a pour primitive (1/3) e^(3x).
- Astuce : s'il manque une constante, on l'ajoute devant. x e^(x²) = ½ × 2x e^(x²), primitive ½ e^(x²).

### Équation y' = ay (a réel)
- Les solutions sont les fonctions **x ↦ C e^(ax)**, avec C réel.
- Avec une condition initiale, on trouve C. Exemple : y' = −0,5y et y(0) = 80 donnent y(x) = 80 e^(−0,5x).

### Équation y' = ay + b (a ≠ 0)
- **Solution particulière constante** : y = −b/a (on la trouve en posant y' = 0).
- **Solutions** : **x ↦ C e^(ax) − b/a**, avec C réel.
- Exemple : y' = −2y + 6. Solution constante : 3. Solutions : C e^(−2x) + 3.

### Équation y' = ay + f
- Si g est une solution particulière, les solutions sont **x ↦ C e^(ax) + g(x)**.
- Méthode du bac : on vérifie que g (souvent donnée) est solution, puis on ajoute les solutions de y' = ay.

### À retenir pour le bac
- Primitive : F' = f. Toujours vérifier en dérivant.
- La primitive de sin est −cos, pas cos.
- y' = ay + b : solutions C e^(ax) − b/a. Attention au signe de −b/a.
- La condition initiale (y(0) = …) se place à la fin pour trouver C.`,
    cartes: [
      { q: "Qu'est-ce qu'une primitive de f ?", r: "Une fonction F telle que F' = f sur l'intervalle." },
      { q: "Lien entre deux primitives d'une même fonction", r: "Elles diffèrent d'une constante : G = F + C." },
      { q: "Primitive de x^n (n ≠ −1)", r: "x^(n+1) / (n + 1)." },
      { q: "Primitive de 1/x sur ]0 ; +∞[", r: "ln(x)." },
      { q: "Primitive de sin", r: "−cos." },
      { q: "Primitive de u' e^u", r: "e^u." },
      { q: "Primitive de u'/u (u > 0)", r: "ln(u)." },
      { q: "Primitive de u' u^n", r: "u^(n+1) / (n + 1)." },
      { q: "Primitive de e^(ax + b)", r: "(1/a) e^(ax + b)." },
      { q: "Solutions de y' = ay", r: "x ↦ C e^(ax), C réel." },
      { q: "Solutions de y' = ay + b (a ≠ 0)", r: "x ↦ C e^(ax) − b/a, C réel." },
      { q: "Solutions de y' = ay + f si g est une solution particulière", r: "x ↦ C e^(ax) + g(x), C réel." },
      { q: "Primitive de 1/√x", r: "2√x." },
      { q: "Quelle fonction admet toujours des primitives ?", r: "Toute fonction continue sur un intervalle." },
    ],
    quiz: [
      { q: "Quelle est une primitive de f(x) = x³ ?",
        choix: ["3x²", "x⁴", "4x⁴", "x⁴ / 4"],
        bonne: 3, niv: 1,
        expl: "On vérifie : (x⁴/4)' = 4x³/4 = x³. 3x² est la dérivée, pas une primitive." },
      { q: "Quelle est une primitive de f(x) = sin(x) ?",
        choix: ["cos(x)", "−cos(x)", "−sin(x)", "sin(x) + 1"],
        bonne: 1, niv: 1,
        expl: "(−cos)' = −(−sin) = sin." },
      { q: "Quelle est une primitive de f(x) = 2x e^(x²) ?",
        choix: ["e^(x²)", "2 e^(x²)", "x² e^(x²)", "e^(2x)"],
        bonne: 0, niv: 2,
        expl: "f est de la forme u' e^u avec u = x², sa primitive est e^u." },
      { q: "Quelle est une primitive de f(x) = e^(3x) ?",
        choix: ["3 e^(3x)", "e^(3x)", "e^(3x + 1)", "(1/3) e^(3x)"],
        bonne: 3, niv: 2,
        expl: "La dérivée de (1/3) e^(3x) est (1/3) × 3 e^(3x) = e^(3x)." },
      { q: "Quelle est une primitive de f(x) = 2x / (x² + 1) ?",
        choix: ["ln(2x)", "1 / (x² + 1)", "2 ln(x² + 1)", "ln(x² + 1)"],
        bonne: 3, niv: 2,
        expl: "f est de la forme u'/u avec u = x² + 1 > 0." },
      { q: "Quelles sont les solutions de y' = 3y ?",
        choix: ["x ↦ e^(3x) + C, C réel", "x ↦ C e^(3x), C réel", "x ↦ 3 e^x", "x ↦ C e^(x/3), C réel"],
        bonne: 1, niv: 1,
        expl: "Les solutions de y' = ay sont les fonctions C e^(ax). Ajouter C à e^(3x) ne donne pas une solution." },
      { q: "Quelles sont les solutions de y' = −2y + 6 ?",
        choix: ["x ↦ C e^(−2x) − 3", "x ↦ C e^(−2x) + 3", "x ↦ C e^(2x) + 3", "x ↦ C e^(−2x) + 6"],
        bonne: 1, niv: 2,
        expl: "Solution constante : −b/a = −6/(−2) = 3. On ajoute C e^(−2x)." },
      { q: "y' = −0,5y avec y(0) = 80. Que vaut y(x) ?",
        choix: ["80 e^(−0,5x)", "80 e^(0,5x)", "e^(−0,5x) + 80", "−0,5 e^(80x)"],
        bonne: 0, niv: 2,
        expl: "Solutions C e^(−0,5x), et y(0) = C = 80." },
      { q: "F et G sont deux primitives de f sur un intervalle. Que peut-on dire de F − G ?",
        choix: ["Elle est nulle", "Elle est constante", "Elle vaut f", "Elle vaut f'"],
        bonne: 1, niv: 3,
        expl: "(F − G)' = f − f = 0 : F − G est constante, mais pas forcément nulle." },
      { q: "La fonction g(x) = 2x est solution particulière de y' = y + 2 − 2x. Quelles sont toutes les solutions ?",
        choix: ["x ↦ C e^x", "x ↦ C e^x + 2x", "x ↦ 2x + C", "x ↦ C e^(2x) + 2x"],
        bonne: 1, niv: 3,
        expl: "On ajoute à g les solutions de y' = y, qui sont C e^x. Vérification : g' = 2 et g + 2 − 2x = 2." },
      { q: "Quelle est la primitive de f(x) = 2x qui vaut 5 en x = 1 ?",
        choix: ["x² + 5", "x² + 6", "2x² + 3", "x² + 4"],
        bonne: 3, niv: 3,
        expl: "F(x) = x² + C et F(1) = 1 + C = 5, donc C = 4. Le piège est de mettre 5 directement." },
      { q: "Quelle est une primitive de x e^(x²) ?",
        choix: ["e^(x²)", "2 e^(x²)", "½ x² e^(x²)", "½ e^(x²)"],
        bonne: 3, niv: 2,
        expl: "x e^(x²) = ½ × 2x e^(x²), de la forme ½ u' e^u." },
    ] },
  { chapitre: "maths-12",
    fiche: `## Calcul intégral

L'intégrale mesure une aire sous une courbe. Grâce aux primitives, on la calcule exactement. Elle sert aussi à calculer une valeur moyenne.

### Intégrale d'une fonction positive
- On travaille dans un repère orthogonal. L'**unité d'aire** (u.a.) est l'aire du rectangle formé par les unités des deux axes.
- Si f est **continue et positive** sur [a ; b], l'**intégrale de a à b de f**, notée **∫ de a à b de f(x) dx**, est l'aire du domaine compris entre la courbe, l'axe des abscisses et les droites x = a et x = b, en u.a.
- Exemple : ∫ de 0 à 2 de 3 dx = 6 (un rectangle de 2 sur 3).

### Lien avec les primitives
- Si f est continue et positive sur [a ; b], la fonction **F(x) = ∫ de a à x de f(t) dt** est **la primitive de f qui s'annule en a**. C'est un résultat du programme.
- Pour toute fonction **continue** sur [a ; b] et toute primitive F de f : **∫ de a à b de f(x) dx = F(b) − F(a)**, noté [F(x)] de a à b.
- Exemple : ∫ de 0 à 1 de x² dx = [x³/3] de 0 à 1 = 1/3 − 0 = 1/3.
- Si f est négative, l'intégrale est **l'opposé de l'aire**. Exemple : ∫ de 0 à 1 de (−x) dx = −1/2.

### Propriétés
- **Linéarité** : ∫(f + g) = ∫f + ∫g et ∫(k f) = k ∫f.
- **Relation de Chasles** : ∫ de a à c de f = ∫ de a à b de f + ∫ de b à c de f.
- **Positivité** : si f ≥ 0 sur [a ; b] (avec a ≤ b), alors ∫ de a à b de f ≥ 0.
- **Croissance** : si f ≤ g sur [a ; b], alors ∫ de a à b de f ≤ ∫ de a à b de g. Cela sert à encadrer une intégrale.

### Aire entre deux courbes
- Si **f ≥ g** sur [a ; b], l'aire entre les deux courbes est **∫ de a à b de (f(x) − g(x)) dx**.
- Il faut toujours mettre la fonction du dessus en premier.

### Valeur moyenne
- La **valeur moyenne** de f sur [a ; b] (a < b) est **μ = (1 / (b − a)) × ∫ de a à b de f(x) dx**.
- Exemple : valeur moyenne de x² sur [0 ; 3] : (1/3) × [x³/3] de 0 à 3 = (1/3) × 9 = 3.

### Intégration par parties
- Si u et v sont dérivables à dérivées continues : **∫ de a à b de u v' = [u v] de a à b − ∫ de a à b de u' v**.
- Exemple : ∫ de 0 à 1 de x e^x dx. On pose u = x et v' = e^x, donc u' = 1 et v = e^x. On obtient [x e^x] de 0 à 1 − ∫ de 0 à 1 de e^x dx = e − (e − 1) = 1.
- Choix de u : celle qui se simplifie en dérivant (souvent x, ou ln(x)).

### Suites d'intégrales et méthode des rectangles
- Au bac, on rencontre des suites In = ∫ de 0 à 1 de x^n e^x dx : on étudie leur signe, leurs variations et leur limite avec la positivité et la croissance.
- La **méthode des rectangles** approche une aire par une somme d'aires de rectangles. Elle se programme avec une boucle en Python.

### À retenir pour le bac
- ∫ de a à b de f = F(b) − F(a), dans cet ordre.
- Une intégrale peut être négative, une aire non.
- Aire entre deux courbes : celle du dessus moins celle du dessous.
- Intégration par parties : bien écrire u, u', v, v' avant de calculer.`,
    cartes: [
      { q: "Calcul d'une intégrale avec une primitive", r: "∫ de a à b de f(x) dx = F(b) − F(a), où F est une primitive de f." },
      { q: "Interprétation de l'intégrale d'une fonction positive", r: "L'aire sous la courbe, entre x = a et x = b, en unités d'aire." },
      { q: "Que représente F(x) = ∫ de a à x de f(t) dt ?", r: "La primitive de f qui s'annule en a (f continue)." },
      { q: "Relation de Chasles", r: "∫ de a à c = ∫ de a à b + ∫ de b à c." },
      { q: "Linéarité de l'intégrale", r: "∫(f + g) = ∫f + ∫g et ∫(k f) = k ∫f." },
      { q: "Positivité de l'intégrale", r: "Si f ≥ 0 sur [a ; b] avec a ≤ b, alors ∫ de a à b de f ≥ 0." },
      { q: "Croissance de l'intégrale", r: "Si f ≤ g sur [a ; b], alors ∫ de a à b de f ≤ ∫ de a à b de g." },
      { q: "Valeur moyenne de f sur [a ; b]", r: "(1 / (b − a)) × ∫ de a à b de f(x) dx." },
      { q: "Aire entre deux courbes (f ≥ g)", r: "∫ de a à b de (f(x) − g(x)) dx." },
      { q: "Formule d'intégration par parties", r: "∫ de a à b de u v' = [u v] de a à b − ∫ de a à b de u' v." },
      { q: "Intégrale d'une fonction négative", r: "C'est l'opposé de l'aire : un nombre négatif." },
      { q: "Qu'est-ce que l'unité d'aire ?", r: "L'aire du rectangle construit sur les unités des deux axes." },
      { q: "Valeur de ∫ de 0 à 1 de x e^x dx", r: "1 (par intégration par parties)." },
    ],
    quiz: [
      { q: "Combien vaut ∫ de 0 à 1 de x² dx ?",
        choix: ["1/2", "1/3", "1", "2/3"],
        bonne: 1, niv: 2,
        expl: "[x³/3] de 0 à 1 = 1/3 − 0 = 1/3." },
      { q: "Combien vaut ∫ de 0 à 2 de (2x + 1) dx ?",
        choix: ["5", "4", "6", "3"],
        bonne: 2, niv: 2,
        expl: "[x² + x] de 0 à 2 = 4 + 2 = 6." },
      { q: "Combien vaut ∫ de 1 à e de (1/x) dx ?",
        choix: ["1", "e − 1", "0", "e"],
        bonne: 0, niv: 2,
        expl: "[ln(x)] de 1 à e = ln(e) − ln(1) = 1 − 0 = 1." },
      { q: "Combien vaut ∫ de 0 à ln(2) de e^x dx ?",
        choix: ["2", "ln(2)", "e − 1", "1"],
        bonne: 3, niv: 2,
        expl: "[e^x] de 0 à ln(2) = 2 − 1 = 1." },
      { q: "Si f est continue et négative sur [a ; b] (a < b), l'intégrale de f de a à b est :",
        choix: ["positive", "toujours négative ou nulle", "nulle", "égale à l'aire sous la courbe"],
        bonne: 1, niv: 1,
        expl: "L'intégrale d'une fonction négative est l'opposé de l'aire : elle est négative." },
      { q: "Quelle est la valeur moyenne de f(x) = x² sur [0 ; 3] ?",
        choix: ["9", "4,5", "3", "27"],
        bonne: 2, niv: 2,
        expl: "(1/3) × [x³/3] de 0 à 3 = (1/3) × 9 = 3." },
      { q: "f ≥ g sur [a ; b]. Comment s'écrit l'aire entre les deux courbes ?",
        choix: ["∫ de a à b de (g − f)", "∫ de a à b de f × ∫ de a à b de g", "∫ de a à b de (f − g)", "∫ de a à b de (f + g)"],
        bonne: 2, niv: 1,
        expl: "On intègre la fonction du dessus moins celle du dessous, pour obtenir un nombre positif." },
      { q: "Que représente F(x) = ∫ de 2 à x de f(t) dt, si f est continue ?",
        choix: ["La dérivée de f", "La primitive de f qui s'annule en 2", "La primitive de f qui vaut 2 en 0", "Une fonction toujours positive"],
        bonne: 1, niv: 1,
        expl: "F' = f et F(2) = ∫ de 2 à 2 = 0." },
      { q: "Avec u = x et v' = e^x, que vaut ∫ de 0 à 1 de x e^x dx ?",
        choix: ["e", "e − 1", "0", "1"],
        bonne: 3, niv: 3,
        expl: "[x e^x] de 0 à 1 − ∫ de 0 à 1 de e^x dx = e − (e − 1) = 1." },
      { q: "Pour tout x de [0 ; 1], 0 ≤ f(x) ≤ x. Que peut-on dire de I = ∫ de 0 à 1 de f(x) dx ?",
        choix: ["0 ≤ I ≤ 1/2", "1/2 ≤ I ≤ 1", "I = 1/2", "I ≥ 1"],
        bonne: 0, niv: 3,
        expl: "Par croissance de l'intégrale : 0 ≤ I ≤ ∫ de 0 à 1 de x dx = 1/2. Rien ne dit que I vaut exactement 1/2." },
      { q: "Combien vaut ∫ de −1 à 1 de x³ dx ?",
        choix: ["1/2", "−1/2", "2", "0"],
        bonne: 3, niv: 3,
        expl: "[x⁴/4] de −1 à 1 = 1/4 − 1/4 = 0. La partie négative compense la partie positive." },
      { q: "Quelle propriété donne ∫ de 0 à 3 de f = ∫ de 0 à 1 de f + ∫ de 1 à 3 de f ?",
        choix: ["La relation de Chasles", "La linéarité", "La positivité", "L'intégration par parties"],
        bonne: 0, niv: 1,
        expl: "Couper l'intervalle en deux, c'est la relation de Chasles." },
    ] },
  { chapitre: "maths-13",
    fiche: `## Épreuves indépendantes et loi binomiale

Presque chaque sujet de bac contient un exercice de probabilités : un arbre, puis une loi binomiale. Ce chapitre rassemble les deux.

### Rappels de première : probabilités conditionnelles
- **P_A(B)** est la probabilité de B sachant que A est réalisé : P_A(B) = P(A ∩ B) / P(A).
- Sur un arbre : **P(A ∩ B) = P(A) × P_A(B)** (on multiplie le long d'un chemin).
- **Formule des probabilités totales** : si A et son contraire Ā partagent l'univers, P(B) = P(A ∩ B) + P(Ā ∩ B).
- A et B sont **indépendants** si P(A ∩ B) = P(A) × P(B).
- Exemple : 30 % des pièces viennent de la machine A, dont 2 % sont défectueuses ; 70 % de la machine B, dont 5 % défectueuses. P(D) = 0,3 × 0,02 + 0,7 × 0,05 = 0,006 + 0,035 = 0,041.

### Succession d'épreuves indépendantes
- Quand on répète des expériences **indépendantes**, l'univers est un **produit cartésien** et la probabilité d'une issue est le **produit** des probabilités. Exemple : deux lancers d'un dé équilibré, P(6 puis 6) = 1/6 × 1/6 = 1/36.

### Épreuve et schéma de Bernoulli
- Une **épreuve de Bernoulli** a deux issues : **succès** (probabilité p) et **échec** (probabilité 1 − p).
- Un **schéma de Bernoulli** est la répétition de n épreuves de Bernoulli **identiques et indépendantes**.
- Au bac, il faut justifier : « on répète n fois, de façon identique et indépendante, une épreuve à deux issues ». Un tirage **avec remise** (ou dans une très grande population, assimilé à un tirage avec remise) le permet.

### La loi binomiale
- X = nombre de succès dans un schéma de Bernoulli de paramètres n et p. On dit que **X suit la loi binomiale B(n ; p)**.
- **P(X = k) = (k parmi n) × p^k × (1 − p)^(n − k)**, pour k entier de 0 à n.
- Le coefficient (k parmi n) compte les chemins de l'arbre avec exactement k succès.
- **Espérance** : **E(X) = np**. **Variance** : **V(X) = np(1 − p)**. **Écart type** : σ(X) = √(np(1 − p)).
- Exemple : X suit B(10 ; 0,3). P(X = 2) = 45 × 0,3² × 0,7⁸ ≈ 0,233. E(X) = 3.

### Calculs fréquents
- **P(X ≥ 1) = 1 − P(X = 0) = 1 − (1 − p)^n**.
- P(X ≤ k) se lit avec la calculatrice (loi binomiale cumulée). P(X > k) = 1 − P(X ≤ k).
- P(a ≤ X ≤ b) = P(X ≤ b) − P(X ≤ a − 1).

### Question de seuil classique
- « Combien de pièces faut-il tester pour que la probabilité d'en avoir au moins une défectueuse dépasse 0,99 ? »
- On résout 1 − (1 − p)^n ≥ 0,99, soit (1 − p)^n ≤ 0,01, puis avec ln : n ≥ ln(0,01) / ln(1 − p) (le sens change car ln(1 − p) < 0).
- Exemple avec p = 0,05 : n ≥ ln(0,01)/ln(0,95) ≈ 89,8, donc **n = 90**.

### À retenir pour le bac
- Justifier la loi binomiale : deux issues, n répétitions identiques et indépendantes, X compte les succès.
- « Au moins un » : passer par le contraire.
- E(X) = np s'interprète comme le nombre moyen de succès sur un grand nombre de séries.
- Ne pas confondre P(X < 3) = P(X ≤ 2) et P(X ≤ 3).`,
    cartes: [
      { q: "P(A ∩ B) avec un arbre", r: "P(A) × P_A(B)." },
      { q: "Formule des probabilités totales (A et Ā)", r: "P(B) = P(A ∩ B) + P(Ā ∩ B)." },
      { q: "Définition de A et B indépendants", r: "P(A ∩ B) = P(A) × P(B)." },
      { q: "Qu'est-ce qu'une épreuve de Bernoulli ?", r: "Une expérience à deux issues : succès (probabilité p) et échec (probabilité 1 − p)." },
      { q: "Qu'est-ce qu'un schéma de Bernoulli ?", r: "La répétition de n épreuves de Bernoulli identiques et indépendantes." },
      { q: "Formule de la loi binomiale B(n ; p)", r: "P(X = k) = (k parmi n) × p^k × (1 − p)^(n − k)." },
      { q: "Espérance d'une loi binomiale", r: "E(X) = np." },
      { q: "Variance d'une loi binomiale", r: "V(X) = np(1 − p)." },
      { q: "Écart type d'une loi binomiale", r: "σ(X) = √(np(1 − p))." },
      { q: "P(X ≥ 1) pour X qui suit B(n ; p)", r: "1 − (1 − p)^n." },
      { q: "Que compte le coefficient (k parmi n) dans la loi binomiale ?", r: "Le nombre de chemins de l'arbre qui contiennent exactement k succès." },
      { q: "Comment justifier une loi binomiale ?", r: "Épreuve à deux issues, répétée n fois de façon identique et indépendante ; X compte les succès." },
      { q: "P(X > k) avec la calculatrice", r: "1 − P(X ≤ k)." },
    ],
    quiz: [
      { q: "X suit B(20 ; 0,4). Que vaut E(X) ?",
        choix: ["4,8", "8", "2,19", "0,4"],
        bonne: 1, niv: 1,
        expl: "E(X) = np = 20 × 0,4 = 8. 4,8 est la variance." },
      { q: "X suit B(20 ; 0,4). Que vaut V(X) ?",
        choix: ["8", "4,8", "12", "20"],
        bonne: 1, niv: 2,
        expl: "V(X) = np(1 − p) = 20 × 0,4 × 0,6 = 4,8. L'écart type vaut environ 2,19." },
      { q: "X suit B(5 ; 0,5). Que vaut P(X = 5) ?",
        choix: ["1/5", "1/2", "1/32", "5/32"],
        bonne: 2, niv: 2,
        expl: "P(X = 5) = 0,5^5 = 1/32. Les 5 épreuves doivent toutes réussir." },
      { q: "X suit B(4 ; 0,1). Que vaut P(X ≥ 1) ?",
        choix: ["1 − 0,9⁴", "0,1⁴", "4 × 0,1", "1 − 0,1⁴"],
        bonne: 0, niv: 2,
        expl: "P(X ≥ 1) = 1 − P(X = 0) = 1 − 0,9⁴ ≈ 0,344." },
      { q: "Machine A : 30 % des pièces, 2 % défectueuses. Machine B : 70 %, 5 % défectueuses. Que vaut P(D) ?",
        choix: ["0,035", "0,07", "0,041", "0,055"],
        bonne: 2, niv: 2,
        expl: "Probabilités totales : 0,3 × 0,02 + 0,7 × 0,05 = 0,006 + 0,035 = 0,041." },
      { q: "Avec les machines précédentes, une pièce est défectueuse. Quelle est la probabilité qu'elle vienne de A ?",
        choix: ["0,02", "0,3", "Environ 0,146", "0,006"],
        bonne: 2, niv: 3,
        expl: "P_D(A) = P(A ∩ D) / P(D) = 0,006 / 0,041 ≈ 0,146. 0,02 est P_A(D), l'inverse." },
      { q: "Quelle situation ne permet **pas** d'utiliser une loi binomiale ?",
        choix: ["Lancer 10 fois une pièce et compter les piles", "Tester 50 pièces d'une très grande production", "Répondre au hasard à 8 QCM à 4 choix", "Tirer 3 boules sans remise dans une urne de 10"],
        bonne: 3, niv: 3,
        expl: "Sans remise dans une petite urne, les tirages ne sont pas indépendants. Une très grande production s'assimile à un tirage avec remise." },
      { q: "Quelle est la formule de P(X = k) pour X qui suit B(n ; p) ?",
        choix: ["(k parmi n) p^k (1 − p)^(n − k)", "p^k (1 − p)^(n − k)", "(k parmi n) p^(n − k) (1 − p)^k", "n p^k (1 − p)^(n − k)"],
        bonne: 0, niv: 1,
        expl: "On multiplie la probabilité d'un chemin à k succès par le nombre de ces chemins." },
      { q: "P(A) = 0,5, P(B) = 0,4 et P(A ∩ B) = 0,2. Les événements A et B sont :",
        choix: ["incompatibles", "contraires", "indépendants", "équiprobables"],
        bonne: 2, niv: 2,
        expl: "0,5 × 0,4 = 0,2 = P(A ∩ B) : ils sont indépendants. Incompatibles voudrait dire P(A ∩ B) = 0." },
      { q: "p = 0,05. À partir de combien de pièces testées P(au moins une défectueuse) ≥ 0,99 ?",
        choix: ["89", "90", "59", "45"],
        bonne: 1, niv: 3,
        expl: "0,95^n ≤ 0,01 donne n ≥ ln(0,01)/ln(0,95) ≈ 89,8, donc n = 90." },
      { q: "X suit B(n ; p). Que vaut P(X < 3) ?",
        choix: ["P(X ≤ 3)", "P(X ≤ 2)", "1 − P(X ≤ 3)", "1 − P(X ≥ 2)"],
        bonne: 1, niv: 2,
        expl: "X prend des valeurs entières : X < 3 revient à X ≤ 2." },
      { q: "Un QCM a 10 questions à 4 choix. On répond au hasard. Quel est le nombre moyen de bonnes réponses ?",
        choix: ["4", "1", "2,5", "0,25"],
        bonne: 2, niv: 2,
        expl: "X suit B(10 ; 0,25), donc E(X) = 10 × 0,25 = 2,5." },
    ] },
  { chapitre: "maths-14",
    fiche: `## Sommes de variables aléatoires

Quand on additionne des variables aléatoires (les gains de plusieurs parties, les durées de plusieurs tâches), on veut connaître l'espérance et la variance du total sans refaire toute la loi.

### Rappels : espérance, variance, écart type
- Si X prend les valeurs x1, …, xn avec les probabilités p1, …, pn :
- **E(X) = x1 p1 + x2 p2 + … + xn pn** : la valeur moyenne sur un grand nombre d'expériences.
- **V(X) = E((X − E(X))²)**, et l'**écart type** est **σ(X) = √V(X)**. Ils mesurent la dispersion autour de E(X).
- Exemple : un jeu fait gagner 10 € avec probabilité 0,2 et perdre 2 € sinon. E(X) = 10 × 0,2 + (−2) × 0,8 = 2 − 1,6 = 0,4 €.

### Transformation affine
- **E(aX + b) = a E(X) + b**.
- **V(aX + b) = a² V(X)** : la constante b ne change pas la dispersion, et a passe au **carré**.
- σ(aX + b) = ∣a∣ σ(X).
- Exemple : V(X) = 4, alors V(3X + 5) = 9 × 4 = 36.

### Somme de deux variables aléatoires
- **Linéarité de l'espérance** : **E(X + Y) = E(X) + E(Y)**, toujours, même si X et Y sont liées.
- **Variance** : si X et Y sont **indépendantes**, **V(X + Y) = V(X) + V(Y)**.
- Attention : les variances s'ajoutent, pas les écarts types. Et sans indépendance, la formule de la variance peut être fausse.
- De même, E(X − Y) = E(X) − E(Y), et si X et Y sont indépendantes, V(X − Y) = V(X) + V(Y).

### Échantillon d'une loi
- Un **échantillon de taille n** d'une loi est une liste (X1, …, Xn) de variables **indépendantes** qui suivent toutes **la même loi** que X.
- Leur **somme** Sn = X1 + … + Xn vérifie : **E(Sn) = n E(X)** et **V(Sn) = n V(X)**, donc σ(Sn) = √n σ(X).
- Leur **moyenne** Mn = Sn / n vérifie : **E(Mn) = E(X)** et **V(Mn) = V(X) / n**, donc **σ(Mn) = σ(X) / √n**.
- La moyenne a la même espérance que X, mais elle est **moins dispersée** quand n grandit.

### Loi binomiale vue comme une somme
- Une variable de Bernoulli de paramètre p vaut 1 (succès) avec probabilité p, sinon 0. Son espérance est p, sa variance p(1 − p).
- Une variable qui suit **B(n ; p)** est la **somme de n variables de Bernoulli** indépendantes de paramètre p.
- On retrouve ainsi **E(X) = np** et **V(X) = np(1 − p)**.

### Exemple type
- Un client dépense en moyenne 25 € avec un écart type de 8 €. Les dépenses de 100 clients sont indépendantes.
- Total S : E(S) = 100 × 25 = 2 500 € ; V(S) = 100 × 64 = 6 400 ; σ(S) = 80 €.
- Moyenne M : E(M) = 25 € ; σ(M) = 8 / √100 = 0,8 €.

### À retenir pour le bac
- E(X + Y) = E(X) + E(Y) toujours ; V(X + Y) = V(X) + V(Y) seulement si X et Y sont indépendantes.
- V(aX + b) = a² V(X) : on oublie b et on met a au carré.
- Pour un échantillon : E(Sn) = n E(X), V(Sn) = n V(X), V(Mn) = V(X)/n.
- Ce chapitre prépare l'inégalité de concentration du chapitre suivant.`,
    cartes: [
      { q: "Formule de E(X)", r: "E(X) = x1 p1 + x2 p2 + … + xn pn." },
      { q: "Lien entre écart type et variance", r: "σ(X) = √V(X)." },
      { q: "E(aX + b)", r: "a E(X) + b." },
      { q: "V(aX + b)", r: "a² V(X)." },
      { q: "E(X + Y)", r: "E(X) + E(Y), pour toutes variables X et Y." },
      { q: "V(X + Y)", r: "V(X) + V(Y), si X et Y sont indépendantes." },
      { q: "V(X − Y) si X et Y indépendantes", r: "V(X) + V(Y) (les variances s'ajoutent)." },
      { q: "Qu'est-ce qu'un échantillon de taille n d'une loi ?", r: "n variables aléatoires indépendantes qui suivent toutes cette même loi." },
      { q: "Espérance et variance de Sn = X1 + … + Xn", r: "E(Sn) = n E(X) et V(Sn) = n V(X)." },
      { q: "Espérance et variance de la moyenne Mn", r: "E(Mn) = E(X) et V(Mn) = V(X) / n." },
      { q: "Écart type de la moyenne Mn", r: "σ(X) / √n." },
      { q: "Loi binomiale et variables de Bernoulli", r: "B(n ; p) est la loi de la somme de n variables de Bernoulli indépendantes de paramètre p." },
      { q: "Espérance et variance d'une variable de Bernoulli", r: "E = p et V = p(1 − p)." },
    ],
    quiz: [
      { q: "E(X) = 5. Que vaut E(3X − 2) ?",
        choix: ["15", "13", "17", "19"],
        bonne: 1, niv: 1,
        expl: "E(3X − 2) = 3 × 5 − 2 = 13." },
      { q: "V(X) = 4. Que vaut V(3X + 5) ?",
        choix: ["12", "36", "17", "9"],
        bonne: 1, niv: 2,
        expl: "V(aX + b) = a² V(X) = 9 × 4 = 36. La constante 5 ne compte pas." },
      { q: "E(X) = 3 et E(Y) = 7, sans autre information. Que vaut E(X + Y) ?",
        choix: ["10, seulement si X et Y sont indépendantes", "21", "10, toujours", "On ne peut pas savoir"],
        bonne: 2, niv: 3,
        expl: "La linéarité de l'espérance est toujours vraie, même sans indépendance." },
      { q: "X et Y indépendantes, V(X) = 2 et V(Y) = 5. Que vaut V(X − Y) ?",
        choix: ["7", "−3", "3", "10"],
        bonne: 0, niv: 3,
        expl: "Pour des variables indépendantes, V(X − Y) = V(X) + (−1)² V(Y) = 2 + 5 = 7." },
      { q: "σ(X) = 3 et σ(Y) = 4, X et Y indépendantes. Que vaut σ(X + Y) ?",
        choix: ["5", "7", "25", "12"],
        bonne: 0, niv: 3,
        expl: "V(X + Y) = 9 + 16 = 25, donc σ = 5. On ajoute les variances, pas les écarts types." },
      { q: "Un jeu fait gagner 10 € avec probabilité 0,2 et perdre 2 € sinon. Quelle est l'espérance du gain ?",
        choix: ["8 €", "2 €", "−1,6 €", "0,4 €"],
        bonne: 3, niv: 2,
        expl: "E = 10 × 0,2 + (−2) × 0,8 = 2 − 1,6 = 0,4 €." },
      { q: "Un échantillon de taille 100 d'une loi d'espérance 25. Que vaut l'espérance de la somme S ?",
        choix: ["25", "250", "0,25", "2 500"],
        bonne: 3, niv: 2,
        expl: "E(S) = n E(X) = 100 × 25 = 2 500." },
      { q: "V(X) = 64. Pour un échantillon de taille 100, que vaut σ(M), où M est la moyenne ?",
        choix: ["8", "0,8", "6,4", "80"],
        bonne: 1, niv: 2,
        expl: "V(M) = 64 / 100 = 0,64, donc σ(M) = 0,8. 80 est l'écart type de la somme." },
      { q: "Qu'est-ce qu'un échantillon de taille n d'une loi ?",
        choix: ["n variables de même espérance", "n valeurs tirées sans remise", "n variables de loi binomiale", "n variables indépendantes de même loi"],
        bonne: 3, niv: 1,
        expl: "Il faut à la fois l'indépendance et la même loi." },
      { q: "Quand n augmente, la variance de la moyenne Mn d'un échantillon :",
        choix: ["augmente", "reste égale à V(X)", "diminue toujours", "est multipliée par n"],
        bonne: 2, niv: 1,
        expl: "V(Mn) = V(X)/n diminue : la moyenne se concentre autour de E(X)." },
      { q: "Une variable X suit B(n ; p). De quoi est-elle la somme ?",
        choix: ["De p variables de Bernoulli de paramètre n", "De n variables binomiales de paramètre p", "De deux variables de Bernoulli de paramètre np", "De n variables de Bernoulli indépendantes de paramètre p"],
        bonne: 3, niv: 1,
        expl: "Chaque variable de Bernoulli vaut 1 en cas de succès : leur somme compte les succès." },
      { q: "V(X) = 9. Que vaut σ(−2X + 1) ?",
        choix: ["−6", "18", "36", "6"],
        bonne: 3, niv: 2,
        expl: "V(−2X + 1) = 4 × 9 = 36, donc σ = 6. Un écart type n'est jamais négatif." },
    ] },
  { chapitre: "maths-15",
    fiche: `## Concentration et loi des grands nombres

Ce chapitre explique pourquoi la moyenne de nombreuses expériences se rapproche de l'espérance. Il donne des inégalités pour majorer la probabilité de s'en écarter.

### L'inégalité de Bienaymé-Tchebychev
- Pour toute variable aléatoire X et tout réel **δ > 0** :
- **P(∣X − E(X)∣ ≥ δ) ≤ V(X) / δ²**.
- Elle majore la probabilité que X s'écarte de son espérance d'au moins δ.
- Version complémentaire : **P(∣X − E(X)∣ < δ) ≥ 1 − V(X) / δ²**.
- Exemple : E(X) = 50 et V(X) = 25. P(∣X − 50∣ ≥ 10) ≤ 25/100 = 0,25. Donc P(40 < X < 60) ≥ 0,75.
- Avec δ = 2σ : P(∣X − E(X)∣ ≥ 2σ) ≤ 1/4. Avec δ = 3σ : la majoration vaut 1/9.

### Traduire un intervalle
- « X est dans ]40 ; 60[ » s'écrit ∣X − 50∣ < 10 : l'intervalle doit être **centré sur E(X)**.
- Si l'intervalle n'est pas centré sur l'espérance, on ne peut pas appliquer directement l'inégalité.

### L'inégalité de concentration
- Soit Mn la **moyenne** d'un échantillon de taille n d'une variable X d'espérance μ et de variance V. Pour tout δ > 0 :
- **P(∣Mn − μ∣ ≥ δ) ≤ V / (n δ²)**.
- Elle vient de Bienaymé-Tchebychev appliquée à Mn, dont la variance est V/n.
- Plus n est grand, plus cette majoration est petite.

### Trouver une taille d'échantillon
- Question classique : « quelle taille n pour que P(∣Mn − μ∣ ≥ δ) ≤ α ? »
- Il suffit que V / (n δ²) ≤ α, c'est-à-dire **n ≥ V / (α δ²)**.
- Exemple : X de Bernoulli de paramètre p = 0,5, donc V = 0,25. On veut δ = 0,05 et α = 0,05. Il faut n ≥ 0,25 / (0,05 × 0,0025) = 2 000.

### La loi faible des grands nombres
- Pour tout δ > 0 : **P(∣Mn − μ∣ ≥ δ) tend vers 0** quand n tend vers +∞.
- Autrement dit, la moyenne d'un grand échantillon est **presque sûrement proche** de l'espérance.
- Exemple : en lançant un dé un très grand nombre de fois, la moyenne des résultats se rapproche de 3,5, et la fréquence des 6 se rapproche de 1/6.
- C'est ce qui justifie qu'on estime une probabilité par une fréquence observée sur beaucoup d'expériences (simulation).

### Limites de ces résultats
- L'inégalité de Bienaymé-Tchebychev est souvent **large** : la vraie probabilité est en général bien plus petite que la majoration.
- Elle donne une **majoration**, pas une valeur exacte. Si la majoration dépasse 1, elle n'apporte rien.

### À retenir pour le bac
- Bien écrire : P(∣X − E(X)∣ ≥ δ) ≤ V(X) / δ².
- Pour P(a < X < b), vérifier que l'intervalle est centré sur E(X), puis passer au contraire.
- Pour la moyenne d'un échantillon, la variance est divisée par n : majoration V / (n δ²).
- Résoudre V / (n δ²) ≤ α pour trouver la taille n.`,
    cartes: [
      { q: "Inégalité de Bienaymé-Tchebychev", r: "Pour tout δ > 0 : P(∣X − E(X)∣ ≥ δ) ≤ V(X) / δ²." },
      { q: "Version complémentaire de Bienaymé-Tchebychev", r: "P(∣X − E(X)∣ < δ) ≥ 1 − V(X) / δ²." },
      { q: "Inégalité de concentration", r: "P(∣Mn − μ∣ ≥ δ) ≤ V / (n δ²), pour la moyenne Mn d'un échantillon de taille n." },
      { q: "Loi faible des grands nombres", r: "Pour tout δ > 0, P(∣Mn − μ∣ ≥ δ) tend vers 0 quand n tend vers +∞." },
      { q: "Que signifie ∣X − 50∣ < 10 ?", r: "40 < X < 60." },
      { q: "Majoration avec δ = 2σ", r: "P(∣X − E(X)∣ ≥ 2σ) ≤ 1/4." },
      { q: "Majoration avec δ = 3σ", r: "P(∣X − E(X)∣ ≥ 3σ) ≤ 1/9." },
      { q: "Taille d'échantillon pour P(∣Mn − μ∣ ≥ δ) ≤ α", r: "Il suffit que n ≥ V / (α δ²)." },
      { q: "Condition sur l'intervalle pour appliquer Bienaymé-Tchebychev", r: "Il doit être centré sur l'espérance E(X)." },
      { q: "Pourquoi la concentration vient-elle de Bienaymé-Tchebychev ?", r: "On l'applique à Mn, d'espérance μ et de variance V/n." },
      { q: "Défaut de l'inégalité de Bienaymé-Tchebychev", r: "Elle est souvent large : la vraie probabilité est en général bien plus petite." },
      { q: "Interprétation de la loi des grands nombres", r: "La moyenne d'un grand échantillon est très probablement proche de l'espérance." },
    ],
    quiz: [
      { q: "Que dit l'inégalité de Bienaymé-Tchebychev, pour δ > 0 ?",
        choix: ["P(∣X − E(X)∣ ≥ δ) ≤ V(X)/δ²", "P(∣X − E(X)∣ ≥ δ) ≥ V(X)/δ²", "P(∣X − E(X)∣ ≤ δ) ≤ V(X)/δ²", "P(∣X − E(X)∣ ≥ δ) ≤ σ(X)/δ"],
        bonne: 0, niv: 1,
        expl: "Elle majore la probabilité de s'écarter d'au moins δ de l'espérance." },
      { q: "E(X) = 50, V(X) = 25. Quelle majoration donne l'inégalité pour P(∣X − 50∣ ≥ 10) ?",
        choix: ["2,5", "0,5", "0,25", "0,1"],
        bonne: 2, niv: 2,
        expl: "V(X)/δ² = 25/100 = 0,25." },
      { q: "E(X) = 50, V(X) = 25. Quelle minoration obtient-on pour P(40 < X < 60) ?",
        choix: ["0,25", "0,5", "0,9", "0,75"],
        bonne: 3, niv: 2,
        expl: "On passe au contraire : P(∣X − 50∣ < 10) ≥ 1 − 0,25 = 0,75." },
      { q: "Peut-on appliquer directement Bienaymé-Tchebychev à P(45 < X < 65) si E(X) = 50 ?",
        choix: ["Non, l'intervalle n'est pas centré sur 50", "Oui, avec δ = 15", "Oui, avec δ = 10", "Non, car X n'est pas binomiale"],
        bonne: 0, niv: 3,
        expl: "L'inégalité porte sur un écart symétrique autour de E(X). Ici, 45 et 65 ne sont pas à égale distance de 50." },
      { q: "Quelle est l'inégalité de concentration pour la moyenne Mn d'un échantillon de taille n ?",
        choix: ["P(∣Mn − μ∣ ≥ δ) ≤ V/(n δ²)", "P(∣Mn − μ∣ ≥ δ) ≤ n V/δ²", "P(∣Mn − μ∣ ≥ δ) ≤ V/δ²", "P(∣Mn − μ∣ ≥ δ) ≤ V/(n² δ²)"],
        bonne: 0, niv: 1,
        expl: "La variance de Mn est V/n : on l'utilise dans Bienaymé-Tchebychev." },
      { q: "V = 0,25, δ = 0,05, α = 0,05. Quelle taille n suffit pour que V/(n δ²) ≤ α ?",
        choix: ["100", "200", "500", "2 000"],
        bonne: 3, niv: 3,
        expl: "n ≥ 0,25 / (0,05 × 0,0025) = 0,25 / 0,000125 = 2 000." },
      { q: "Que dit la loi faible des grands nombres ?",
        choix: ["Mn est égale à μ dès que n est grand", "V(Mn) augmente avec n", "P(∣Mn − μ∣ ≥ δ) tend vers 1 quand n augmente", "P(∣Mn − μ∣ ≥ δ) tend vers 0 quand n augmente"],
        bonne: 3, niv: 1,
        expl: "La probabilité de s'écarter de l'espérance devient aussi petite qu'on veut, sans que Mn soit exactement μ." },
      { q: "L'inégalité donne P(∣X − E(X)∣ ≥ δ) ≤ 1,4. Que peut-on en conclure ?",
        choix: ["Que la probabilité vaut 1,4", "Que cette majoration n'apporte rien", "Que l'inégalité est fausse ici", "Que X n'a pas d'espérance"],
        bonne: 1, niv: 3,
        expl: "Une majoration supérieure à 1 est vraie mais n'apporte aucune information." },
      { q: "σ(X) = 4. Quelle majoration obtient-on pour P(∣X − E(X)∣ ≥ 8) ?",
        choix: ["1/4", "1/2", "1/8", "2"],
        bonne: 0, niv: 2,
        expl: "V(X) = 16 et δ² = 64 : 16/64 = 1/4. C'est le cas δ = 2σ." },
      { q: "On lance un dé équilibré n fois. Vers quoi se rapproche la moyenne des résultats quand n est grand ?",
        choix: ["3", "3,5", "2,5", "1/6"],
        bonne: 1, niv: 2,
        expl: "L'espérance d'un lancer est (1 + 2 + … + 6)/6 = 21/6 = 3,5." },
      { q: "L'inégalité de Bienaymé-Tchebychev donne une probabilité :",
        choix: ["majorée, souvent de façon large", "exacte", "minorée par V(X)", "toujours inférieure à 0,5"],
        bonne: 0, niv: 2,
        expl: "C'est une majoration valable pour toute loi, donc souvent loin de la vraie valeur." },
    ] },
  { chapitre: "maths-16",
    fiche: `## Algorithmique et programmation en Python

Au bac, une question demande souvent de compléter ou d'expliquer un court programme Python : seuil d'une suite, dichotomie, simulation. Le programme de terminale insiste sur les **listes**.

### Les bases à relire
- Une **variable** reçoit une valeur avec =. Exemple : u = 2.
- **for i in range(n)** répète n fois, avec i qui prend les valeurs **0, 1, …, n − 1**.
- **while condition** répète tant que la condition est vraie. On l'utilise quand on ne sait pas à l'avance combien de tours il faut.
- **def** définit une fonction, et **return** renvoie son résultat.
- La puissance s'écrit ** : 0.9**n. La racine carrée et ln viennent du module math : sqrt et log.

### Les listes
- Une **liste** est une suite ordonnée de valeurs entre crochets : L = [3, 5, 8].
- Les **indices commencent à 0** : L[0] vaut 3 et L[2] vaut 8. **L[-1]** est le dernier élément.
- **len(L)** donne le nombre d'éléments (ici 3).
- **L.append(x)** ajoute x à la fin de la liste.
- Création **en compréhension** : [k**2 for k in range(5)] donne [0, 1, 4, 9, 16].
- **Parcours** : for x in L parcourt les valeurs ; for i in range(len(L)) parcourt les indices.

### Algorithme de seuil
Trouver le premier rang n tel que un > 1000, avec u0 = 2 et u(n+1) = 1,5 un :
- n = 0 ; u = 2
- while u <= 1000 : u = 1.5 * u ; n = n + 1
- return n
- La condition du while est le **contraire** de ce qu'on cherche : on continue tant qu'on n'a pas dépassé.

### Liste des termes d'une suite
- L = [2] puis, dans une boucle for, L.append(1.5 * L[-1]). Chaque nouveau terme est calculé à partir du dernier.

### Dichotomie
Pour encadrer la solution de f(x) = 0 sur [a ; b], avec f qui change de signe :
- while b − a > précision : m = (a + b)/2 ; si f(a) × f(m) <= 0, alors b = m, sinon a = m.
- À la fin, la solution est entre a et b.

### Méthode des rectangles
Approcher ∫ de a à b de f avec n rectangles de largeur h = (b − a)/n :
- S = 0 ; pour k de 0 à n − 1 : S = S + h × f(a + k × h). La somme S approche l'intégrale.

### Simulation
- random() donne un nombre au hasard entre 0 et 1 (module random). « if random() < p » simule un succès de probabilité p.
- Pour simuler une loi binomiale : compter les succès sur n essais. En répétant beaucoup, la fréquence observée se rapproche de la probabilité (loi des grands nombres).

### Dénombrement
- Une fonction factorielle : f = 1, puis for k in range(1, n + 1) : f = f * k.
- On peut générer en Python la liste de tous les couples d'un produit cartésien avec deux boucles imbriquées.

### À retenir pour le bac
- range(n) s'arrête à n − 1 ; les indices d'une liste commencent à 0.
- Dans un seuil, le while porte sur la condition contraire.
- Savoir dire ce que renvoie un programme : faire tourner à la main deux ou trois tours.
- En Python, la virgule décimale est un **point** : 1.5 et non 1,5.`,
    cartes: [
      { q: "Valeurs prises par i dans for i in range(5)", r: "0, 1, 2, 3, 4." },
      { q: "Indice du premier élément d'une liste", r: "0 : L[0] est le premier élément." },
      { q: "Que donne L[-1] ?", r: "Le dernier élément de la liste L." },
      { q: "Que fait L.append(x) ?", r: "Il ajoute x à la fin de la liste L." },
      { q: "Que donne len(L) ?", r: "Le nombre d'éléments de la liste L." },
      { q: "Résultat de [k**2 for k in range(4)]", r: "[0, 1, 4, 9]." },
      { q: "Quand utiliser while plutôt que for ?", r: "Quand on ne sait pas à l'avance combien de tours de boucle il faut (recherche de seuil)." },
      { q: "Condition du while pour trouver le premier n tel que un > 1000", r: "while u <= 1000 : on continue tant que le seuil n'est pas dépassé." },
      { q: "Principe de la dichotomie en Python", r: "m = (a + b)/2, puis on garde [a ; m] ou [m ; b] selon le signe de f(a) × f(m)." },
      { q: "Méthode des rectangles", r: "Somme des h × f(a + k h), pour k de 0 à n − 1, avec h = (b − a)/n." },
      { q: "Simuler un succès de probabilité p", r: "if random() < p (random vient du module random)." },
      { q: "Comment écrire 2 puissance 10 en Python ?", r: "2**10." },
      { q: "Comment écrire ln(x) en Python ?", r: "log(x), avec from math import log." },
    ],
    quiz: [
      { q: "Quelles valeurs prend i dans « for i in range(4) » ?",
        choix: ["1, 2, 3, 4", "0, 1, 2, 3, 4", "0, 1, 2, 3", "1, 2, 3"],
        bonne: 2, niv: 1,
        expl: "range(4) commence à 0 et s'arrête juste avant 4." },
      { q: "L = [7, 2, 9, 4]. Que vaut L[2] ?",
        choix: ["9", "2", "7", "4"],
        bonne: 0, niv: 2,
        expl: "Les indices commencent à 0 : L[0] = 7, L[1] = 2, L[2] = 9." },
      { q: "L = [7, 2, 9, 4]. Que vaut L[-1] ?",
        choix: ["7", "9", "Une erreur", "4"],
        bonne: 3, niv: 1,
        expl: "L[-1] désigne le dernier élément." },
      { q: "Que donne [2*k for k in range(4)] ?",
        choix: ["[2, 4, 6, 8]", "[0, 2, 4, 6, 8]", "[2, 4, 6]", "[0, 2, 4, 6]"],
        bonne: 3, niv: 2,
        expl: "k prend les valeurs 0, 1, 2, 3, et on double chacune." },
      { q: "On cherche le premier n tel que un > 500. Quelle condition mettre dans le while ?",
        choix: ["while u > 500", "while u < 500", "while u <= 500", "while n <= 500"],
        bonne: 2, niv: 3,
        expl: "On continue tant que le seuil n'est pas dépassé, donc tant que u ≤ 500." },
      { q: "u = 1 ; n = 0 ; while u < 10 : u = 2*u ; n = n + 1. Que vaut n à la fin ?",
        choix: ["3", "10", "4", "5"],
        bonne: 2, niv: 2,
        expl: "u vaut 2, 4, 8, puis 16 ≥ 10 : la boucle a tourné 4 fois." },
      { q: "L = [1] puis « for k in range(3) : L.append(3*L[-1]) ». Que contient L ?",
        choix: ["[1, 3, 9]", "[3, 9, 27]", "[1, 3, 6, 9]", "[1, 3, 9, 27]"],
        bonne: 3, niv: 2,
        expl: "On part de [1] et on ajoute trois fois le triple du dernier : 3, 9, 27." },
      { q: "Que vaut len([5, 0, 5, 0, 5]) ?",
        choix: ["4", "15", "5", "3"],
        bonne: 2, niv: 1,
        expl: "len compte les éléments, ici 5. 15 serait leur somme." },
      { q: "Dans une dichotomie, f(a) × f(m) < 0. Quel intervalle garde-t-on ?",
        choix: ["[m ; b]", "[a ; b]", "[0 ; m]", "[a ; m]"],
        bonne: 3, niv: 2,
        expl: "f change de signe entre a et m : la solution est dans [a ; m], donc on pose b = m." },
      { q: "Quelle instruction simule un succès de probabilité 0,3 ?",
        choix: ["if random() > 0.3", "if random() == 0.3", "if random() < 0.3", "if random() < 3"],
        bonne: 2, niv: 2,
        expl: "random() est entre 0 et 1, et tombe sous 0,3 avec une probabilité de 0,3." },
      { q: "s = 0 ; for k in range(1, 5) : s = s + k. Que vaut s à la fin ?",
        choix: ["9", "10", "6", "4"],
        bonne: 1, niv: 3,
        expl: "range(1, 5) donne 1, 2, 3, 4, et 1 + 2 + 3 + 4 = 10. Le piège est de compter 5 dans la somme, ou d'oublier 4." },
    ] },
  ],
  methode: [
    {
      "id": "maths-m1",
      "mat": "maths",
      "titre": "Suite définie par récurrence (récurrence, limite, seuil en Python)",
      "formules": [
        "Montrer par récurrence que pour tout entier naturel n, …",
        "En déduire que la suite converge",
        "Compléter le programme Python qui renvoie le plus petit entier n tel que…",
        "Montrer que la suite (vn) est géométrique"
      ],
      "vu": [
        "Présent dans presque tous les sujets de métropole depuis 2021"
      ],
      "pts": "4 à 6 points",
      "attendu": "Une récurrence rédigée en trois étapes, avec l'hypothèse de récurrence clairement utilisée. Puis le bon théorème cité (convergence monotone, point fixe) et une formule explicite obtenue avec une suite auxiliaire géométrique.",
      "etapes": [
        "Calculer les premiers termes pour se faire une idée",
        "Récurrence : initialisation, hérédité (utiliser l'hypothèse), conclusion",
        "Citer le théorème de convergence monotone (croissante et majorée, ou décroissante et minorée)",
        "Trouver la limite avec l = f(l), f continue",
        "Suite auxiliaire : montrer v(n+1) = q × vn, en déduire vn puis un",
        "Seuil : boucle while avec la condition contraire, ou résolution avec ln"
      ],
      "mots": [
        "initialisation",
        "hérédité",
        "hypothèse de récurrence",
        "croissante et majorée",
        "théorème de convergence monotone",
        "suite géométrique de raison q",
        "croissances comparées"
      ],
      "pieges": [
        "Hérédité qui n'utilise pas l'hypothèse de récurrence",
        "Dire « majorée par 10 donc converge vers 10 »",
        "Oublier de changer le sens en divisant par ln(q) < 0",
        "Écrire la condition du while à l'envers"
      ],
      "cas": "On considère la suite définie par u0 = 1 et, pour tout entier naturel n, u(n+1) = 0,5 un + 3.",
      "question": "Montrer par récurrence que pour tout entier naturel n, un ≤ 6.",
      "modele": "Soit P(n) : « un ≤ 6 ». Initialisation : u0 = 1 ≤ 6, donc P(0) est vraie. Hérédité : supposons P(n) vraie pour un entier n, c'est-à-dire un ≤ 6. Alors 0,5 un ≤ 3, donc 0,5 un + 3 ≤ 6, c'est-à-dire u(n+1) ≤ 6 : P(n+1) est vraie. Conclusion : par récurrence, un ≤ 6 pour tout entier naturel n.",
      "grille": [
        "La propriété P(n) est écrite",
        "L'initialisation est vérifiée avec u0",
        "L'hérédité part de l'hypothèse un ≤ 6",
        "Les inégalités sont transformées correctement",
        "La conclusion est rédigée"
      ]
    },
    {
      "id": "maths-m2",
      "mat": "maths",
      "titre": "Étude de fonction avec exp ou ln (variations, convexité, TVI)",
      "formules": [
        "Étudier les variations de f",
        "Déterminer la limite de f en +∞",
        "Montrer que l'équation f(x) = k admet une unique solution α",
        "Étudier la convexité de f",
        "La courbe admet-elle un point d'inflexion ?"
      ],
      "vu": [
        "Présent dans presque tous les sujets de métropole depuis 2021"
      ],
      "pts": "5 à 7 points",
      "attendu": "Des dérivées justes et factorisées, un signe justifié (e^x > 0, ln(x) > 0 si x > 1…), des limites où l'on cite les croissances comparées, et une application complète du corollaire du TVI.",
      "etapes": [
        "Dériver avec les bonnes formules (produit, composée)",
        "Factoriser f'(x) pour étudier son signe",
        "Dresser le tableau de variations avec les limites",
        "Pour f(x) = k : citer continuité, stricte monotonie, valeurs aux bornes",
        "Encadrer α à la calculatrice",
        "Calculer f'', étudier son signe pour la convexité"
      ],
      "mots": [
        "continue",
        "strictement décroissante",
        "corollaire du théorème des valeurs intermédiaires",
        "croissances comparées",
        "convexe",
        "point d'inflexion",
        "asymptote"
      ],
      "pieges": [
        "Oublier le facteur u' en dérivant e^u ou ln(u)",
        "Oublier la stricte monotonie pour l'unicité",
        "Confondre signe de f' (variations de f) et variations de f' (convexité)",
        "Écrire une forme indéterminée sans la lever"
      ],
      "cas": "On considère la fonction f définie sur [0 ; +∞[ par f(x) = (x + 1) e^(−x).",
      "question": "Calculer f'(x) et en déduire les variations de f sur [0 ; +∞[.",
      "modele": "f est un produit : u = x + 1, u' = 1, v = e^(−x), v' = −e^(−x). Donc f'(x) = e^(−x) − (x + 1) e^(−x) = −x e^(−x). Pour x ≥ 0, e^(−x) > 0 et −x ≤ 0, donc f'(x) ≤ 0, nul seulement en 0. f est donc strictement décroissante sur [0 ; +∞[, de f(0) = 1 vers 0 (car x e^(−x) et e^(−x) tendent vers 0 en +∞).",
      "grille": [
        "La formule (uv)' = u'v + uv' est utilisée",
        "La dérivée de e^(−x) est −e^(−x)",
        "f'(x) est factorisée",
        "Le signe est justifié par e^(−x) > 0",
        "Le sens de variation est conclu"
      ]
    },
    {
      "id": "maths-m3",
      "mat": "maths",
      "titre": "Géométrie dans l'espace (vecteur normal, plan, projeté, volume)",
      "formules": [
        "Montrer que le vecteur n est normal au plan (ABC)",
        "En déduire une équation cartésienne du plan",
        "Donner une représentation paramétrique de la droite passant par D et orthogonale au plan",
        "Déterminer les coordonnées du projeté orthogonal H",
        "Calculer le volume du tétraèdre"
      ],
      "vu": [
        "Présent dans tous les sujets de métropole depuis 2021"
      ],
      "pts": "5 à 6 points",
      "attendu": "Les produits scalaires calculés avec deux vecteurs non colinéaires du plan, une équation de plan vérifiée, une intersection droite-plan résolue proprement, et la formule du volume avec la bonne hauteur.",
      "etapes": [
        "Calculer deux vecteurs du plan et vérifier qu'ils ne sont pas colinéaires",
        "Calculer les deux produits scalaires avec n : ils sont nuls",
        "Écrire ax + by + cz + d = 0 avec n, trouver d avec un point",
        "Écrire la droite passant par le point avec n comme vecteur directeur",
        "Remplacer dans l'équation du plan, trouver t, puis H",
        "Calculer la distance et le volume V = (1/3) × base × hauteur"
      ],
      "mots": [
        "vecteur normal",
        "non colinéaires",
        "produit scalaire nul",
        "représentation paramétrique",
        "projeté orthogonal",
        "distance du point au plan"
      ],
      "pieges": [
        "Ne vérifier l'orthogonalité qu'avec un seul vecteur",
        "Prendre le même paramètre pour deux droites",
        "Confondre vecteur normal et vecteur directeur du plan",
        "Oublier le 1/3 dans le volume"
      ],
      "cas": "Dans un repère orthonormé, A(1 ; 0 ; 0), B(0 ; 1 ; 0), C(0 ; 0 ; 1) et n(1 ; 1 ; 1).",
      "question": "Montrer que n est normal au plan (ABC) et en déduire une équation de ce plan.",
      "modele": "AB(−1 ; 1 ; 0) et AC(−1 ; 0 ; 1) ne sont pas colinéaires (la deuxième coordonnée est nulle pour l'un et pas pour l'autre). n·AB = −1 + 1 + 0 = 0 et n·AC = −1 + 0 + 1 = 0 : n est orthogonal à deux vecteurs non colinéaires du plan, il est normal à (ABC). Une équation est x + y + z + d = 0 ; avec A, 1 + d = 0, donc d = −1. Le plan (ABC) a pour équation x + y + z − 1 = 0.",
      "grille": [
        "Les coordonnées de AB et AC sont justes",
        "La non-colinéarité est justifiée",
        "Les deux produits scalaires sont nuls",
        "L'équation utilise les coordonnées de n",
        "d est calculé avec un point du plan"
      ]
    },
    {
      "id": "maths-m4",
      "mat": "maths",
      "titre": "Probabilités : arbre, loi binomiale et seuil",
      "formules": [
        "Représenter la situation par un arbre pondéré",
        "Calculer la probabilité de D",
        "Sachant que…, quelle est la probabilité que… ?",
        "Justifier que X suit une loi binomiale",
        "Déterminer le plus petit n tel que P(X ≥ 1) ≥ 0,99"
      ],
      "vu": [
        "Présent dans presque tous les sujets de métropole depuis 2021"
      ],
      "pts": "4 à 6 points",
      "attendu": "Un arbre complet et juste, la formule des probabilités totales citée, une probabilité conditionnelle « inversée » bien calculée, et une loi binomiale justifiée par ses conditions.",
      "etapes": [
        "Lire l'énoncé et noter chaque pourcentage comme P(A) ou P_A(D)",
        "Construire l'arbre et compléter par les contraires",
        "Probabilités totales pour P(D)",
        "P_D(A) = P(A ∩ D) / P(D)",
        "Justifier la loi binomiale : deux issues, répétition identique et indépendante, X compte les succès",
        "Seuil : 1 − (1 − p)^n ≥ s, puis ln"
      ],
      "mots": [
        "arbre pondéré",
        "formule des probabilités totales",
        "probabilité conditionnelle",
        "épreuve de Bernoulli",
        "identiques et indépendantes",
        "loi binomiale de paramètres n et p"
      ],
      "pieges": [
        "Confondre P_A(D) et P_D(A)",
        "Oublier une branche dans les probabilités totales",
        "Justifier la loi binomiale sans parler d'indépendance",
        "Calculer P(X ≥ 1) directement au lieu de passer par le contraire"
      ],
      "cas": "Une entreprise fictive fabrique des lampes : 40 % viennent de l'atelier A, dont 5 % sont défectueuses, et le reste de l'atelier B, dont 2 % sont défectueuses.",
      "question": "Calculer la probabilité qu'une lampe prise au hasard soit défectueuse.",
      "modele": "On note A « la lampe vient de A » et D « la lampe est défectueuse ». P(A) = 0,4, P_A(D) = 0,05, P(B) = 0,6 et P_B(D) = 0,02. A et B forment une partition, donc d'après la formule des probabilités totales, P(D) = P(A) × P_A(D) + P(B) × P_B(D) = 0,4 × 0,05 + 0,6 × 0,02 = 0,02 + 0,012 = 0,032.",
      "grille": [
        "Les événements sont nommés",
        "Les données sont traduites en probabilités",
        "La formule des probabilités totales est citée",
        "Le calcul est juste : 0,032"
      ]
    },
    {
      "id": "maths-m5",
      "mat": "maths",
      "titre": "Vrai-faux ou QCM à justifier",
      "formules": [
        "Pour chaque affirmation, dire si elle est vraie ou fausse en justifiant",
        "Une réponse non justifiée ne rapporte aucun point",
        "Pour chaque question, une seule réponse est exacte"
      ],
      "vu": [
        "Format fréquent dans les sujets depuis 2021, sur tout le programme"
      ],
      "pts": "4 à 5 points",
      "attendu": "Pour une affirmation vraie : une preuve courte. Pour une affirmation fausse : un contre-exemple précis suffit. Dans un QCM, la justification se fait souvent en éliminant ou en vérifiant chaque réponse par le calcul.",
      "etapes": [
        "Lire chaque affirmation lentement, repérer les mots « pour tout », « il existe », « toujours »",
        "Tester sur un exemple simple pour se faire une idée",
        "Si c'est faux : donner un contre-exemple avec des valeurs précises",
        "Si c'est vrai : faire le calcul ou citer la propriété",
        "Écrire la conclusion « l'affirmation est vraie / fausse »"
      ],
      "mots": [
        "contre-exemple",
        "pour tout",
        "il existe",
        "donc",
        "l'affirmation est fausse"
      ],
      "pieges": [
        "Répondre sans justifier",
        "Croire qu'un exemple prouve une affirmation « pour tout »",
        "Passer trop de temps sur une seule question"
      ],
      "cas": "Affirmation : « Si une suite est croissante et majorée par 5, alors elle converge vers 5. »",
      "question": "Cette affirmation est-elle vraie ou fausse ? Justifier.",
      "modele": "L'affirmation est fausse. Contre-exemple : la suite définie par un = 1 − 1/(n + 1) est croissante et majorée par 5 (elle est même majorée par 1), mais elle converge vers 1, pas vers 5.",
      "grille": [
        "La réponse « fausse » est donnée",
        "Un contre-exemple précis est proposé",
        "On vérifie qu'il est croissant et majoré par 5",
        "On donne sa vraie limite"
      ]
    }
  ],
  sujets: [
    { id: "maths-s1", matiere: 'maths', titre: "Sujet d'entraînement 1", duree: 240,
      enonce: `Sujet d'entraînement inventé, sur le modèle de l'épreuve écrite de spécialité. Les entreprises et les chiffres sont fictifs. Durée : 4 heures. Calculatrice en mode examen autorisée. Le sujet comporte 4 exercices indépendants, chacun sur 5 points.

EXERCICE 1 (5 points) — Probabilités
L'entreprise fictive Verlio fabrique des gourdes sur deux sites. 60 % des gourdes viennent du site A et les autres du site B. 3 % des gourdes du site A sont défectueuses, contre 8 % de celles du site B. On choisit une gourde au hasard. On note A l'événement « la gourde vient du site A », B « elle vient du site B » et D « elle est défectueuse ».
1. Représenter la situation par un arbre pondéré.
2. Calculer P(A ∩ D).
3. Montrer que P(D) = 0,05.
4. La gourde choisie est défectueuse. Quelle est la probabilité qu'elle vienne du site A ?
5. On prélève 20 gourdes. La production est assez grande pour assimiler ce prélèvement à un tirage avec remise. X est le nombre de gourdes défectueuses.
a) Justifier que X suit une loi binomiale et donner ses paramètres.
b) Calculer P(X = 0), puis P(X ≥ 2), arrondies à 10^−3.
c) Calculer E(X) et l'interpréter.
6. Combien de gourdes faut-il prélever au minimum pour que la probabilité d'avoir au moins une gourde défectueuse soit supérieure ou égale à 0,95 ?

EXERCICE 2 (5 points) — Suites
On considère la suite (un) définie par u0 = 2 et, pour tout entier naturel n, u(n+1) = 0,6 un + 4.
1. Calculer u1 et u2.
2. Montrer par récurrence que pour tout entier naturel n : 0 ≤ un ≤ u(n+1) ≤ 10.
3. En déduire que la suite (un) converge, puis déterminer sa limite.
4. On pose vn = un − 10. Montrer que (vn) est géométrique. En déduire l'expression de un en fonction de n.
5. Recopier et compléter la fonction Python suivante pour qu'elle renvoie le plus petit entier n tel que un > 9,9, puis donner la valeur renvoyée.
def seuil():
    n = 0
    u = 2
    while ……… :
        u = ………
        n = n + 1
    return n

EXERCICE 3 (5 points) — Fonction exponentielle et intégrale
On considère la fonction f définie sur [0 ; +∞[ par f(x) = (x + 2) e^(−x), et C sa courbe dans un repère orthonormé.
1. Déterminer la limite de f en +∞. Interpréter graphiquement.
2. Montrer que f'(x) = −(x + 1) e^(−x). En déduire les variations de f.
3. Montrer que f''(x) = x e^(−x). Étudier la convexité de f.
4. Montrer que l'équation f(x) = 1 admet une unique solution α dans [0 ; +∞[, puis donner un encadrement de α d'amplitude 10^−2.
5. À l'aide d'une intégration par parties, calculer I = ∫ de 0 à 1 de f(x) dx. Interpréter ce nombre.

EXERCICE 4 (5 points) — Géométrie dans l'espace
Dans un repère orthonormé (O ; i, j, k), on considère les points A(2 ; 0 ; 0), B(0 ; 2 ; 0) et C(0 ; 0 ; 3).
1. Montrer que le vecteur n(3 ; 3 ; 2) est normal au plan (ABC).
2. En déduire une équation cartésienne du plan (ABC).
3. Donner une représentation paramétrique de la droite Δ passant par O et orthogonale au plan (ABC).
4. Déterminer les coordonnées du point H, projeté orthogonal de O sur le plan (ABC). En déduire la distance OH.
5. Calculer le volume du tétraèdre OABC (on pourra prendre OAB comme base). En déduire l'aire du triangle ABC.`,
      corrige: `EXERCICE 1
1. Arbre : A (0,6) puis D (0,03) ou D̄ (0,97) ; B (0,4) puis D (0,08) ou D̄ (0,92).
2. P(A ∩ D) = 0,6 × 0,03 = 0,018.
3. Formule des probabilités totales : P(D) = 0,018 + 0,4 × 0,08 = 0,018 + 0,032 = 0,05.
4. P_D(A) = P(A ∩ D) / P(D) = 0,018 / 0,05 = 0,36.
5. a) On répète 20 fois, de façon identique et indépendante, une épreuve à deux issues (succès : « la gourde est défectueuse », de probabilité 0,05). X compte les succès : X suit la loi binomiale B(20 ; 0,05).
b) P(X = 0) = 0,95^20 ≈ 0,358. P(X = 1) = 20 × 0,05 × 0,95^19 ≈ 0,377. P(X ≥ 2) = 1 − P(X = 0) − P(X = 1) ≈ 0,264.
c) E(X) = 20 × 0,05 = 1 : sur un grand nombre de prélèvements de 20 gourdes, il y a en moyenne 1 gourde défectueuse par prélèvement.
6. P(au moins une) = 1 − 0,95^n ≥ 0,95 ⟺ 0,95^n ≤ 0,05 ⟺ n ln(0,95) ≤ ln(0,05) ⟺ n ≥ ln(0,05)/ln(0,95) (ln(0,95) < 0, le sens change). Or ln(0,05)/ln(0,95) ≈ 58,4. Il faut au moins 59 gourdes.

EXERCICE 2
1. u1 = 0,6 × 2 + 4 = 5,2 et u2 = 0,6 × 5,2 + 4 = 7,12.
2. Soit P(n) : « 0 ≤ un ≤ u(n+1) ≤ 10 ». Initialisation : 0 ≤ 2 ≤ 5,2 ≤ 10, donc P(0) est vraie. Hérédité : on suppose 0 ≤ un ≤ u(n+1) ≤ 10. La fonction x ↦ 0,6x + 4 est croissante, donc 0,6 × 0 + 4 ≤ 0,6 un + 4 ≤ 0,6 u(n+1) + 4 ≤ 0,6 × 10 + 4, soit 4 ≤ u(n+1) ≤ u(n+2) ≤ 10, et donc 0 ≤ u(n+1) ≤ u(n+2) ≤ 10 : P(n+1) est vraie. Conclusion : P(n) est vraie pour tout n.
3. (un) est croissante et majorée par 10 : elle converge (théorème de convergence monotone). Sa limite l vérifie l = 0,6 l + 4 (la fonction affine est continue), donc 0,4 l = 4 et l = 10.
4. v(n+1) = u(n+1) − 10 = 0,6 un − 6 = 0,6 (un − 10) = 0,6 vn. (vn) est géométrique de raison 0,6 et de premier terme v0 = 2 − 10 = −8. Donc vn = −8 × 0,6^n et un = 10 − 8 × 0,6^n.
5. while u <= 9.9 : et u = 0.6*u + 4. On résout 8 × 0,6^n < 0,1, soit 0,6^n < 0,0125, n > ln(0,0125)/ln(0,6) ≈ 8,58. La fonction renvoie 9. Vérification : u8 ≈ 9,866 et u9 ≈ 9,919.

EXERCICE 3
1. f(x) = x e^(−x) + 2 e^(−x). Par croissances comparées, x e^(−x) = x / e^x tend vers 0 en +∞, et e^(−x) tend vers 0. Donc f tend vers 0 : l'axe des abscisses (y = 0) est asymptote horizontale à C en +∞.
2. f'(x) = 1 × e^(−x) + (x + 2)(−e^(−x)) = (1 − x − 2) e^(−x) = −(x + 1) e^(−x). Sur [0 ; +∞[, x + 1 > 0 et e^(−x) > 0, donc f'(x) < 0 : f est strictement décroissante, de f(0) = 2 vers 0.
3. f''(x) = −e^(−x) + (x + 1) e^(−x) = x e^(−x). Pour x ≥ 0, f''(x) ≥ 0 : f est convexe sur [0 ; +∞[.
4. f est continue et strictement décroissante sur [0 ; +∞[, f(0) = 2 et f tend vers 0 en +∞. Comme 1 est compris entre 0 et 2, d'après le corollaire du théorème des valeurs intermédiaires, l'équation f(x) = 1 admet une unique solution α. À la calculatrice : f(1,14) ≈ 1,004 > 1 et f(1,15) ≈ 0,997 < 1, donc 1,14 < α < 1,15.
5. On pose u(x) = x + 2, v'(x) = e^(−x), donc u'(x) = 1 et v(x) = −e^(−x). I = [−(x + 2) e^(−x)] de 0 à 1 + ∫ de 0 à 1 de e^(−x) dx = (−3/e + 2) + [−e^(−x)] de 0 à 1 = 2 − 3/e + 1 − 1/e = 3 − 4/e ≈ 1,53. Comme f est positive, I est l'aire, en unités d'aire, du domaine compris entre C, l'axe des abscisses et les droites x = 0 et x = 1.

EXERCICE 4
1. AB(−2 ; 2 ; 0) et AC(−2 ; 0 ; 3) ne sont pas colinéaires (la troisième coordonnée est nulle pour l'un seulement). n·AB = −6 + 6 + 0 = 0 et n·AC = −6 + 0 + 6 = 0 : n est normal au plan (ABC).
2. 3x + 3y + 2z + d = 0 et A donne 6 + d = 0, donc d = −6. Équation : 3x + 3y + 2z − 6 = 0 (on vérifie avec B et C).
3. Δ passe par O et a pour vecteur directeur n : x = 3t ; y = 3t ; z = 2t, t réel.
4. On remplace : 9t + 9t + 4t − 6 = 0, donc t = 6/22 = 3/11. H(9/11 ; 9/11 ; 6/11). OH = √(81 + 81 + 36)/11 = √198/11 = 3√22/11 ≈ 1,28.
5. Le triangle OAB est rectangle en O, d'aire (2 × 2)/2 = 2, et la hauteur correspondante est OC = 3. V = (1/3) × 2 × 3 = 2. Avec la base ABC et la hauteur OH : V = (1/3) × aire(ABC) × OH, donc aire(ABC) = 3V / OH = 6 × 11 / (3√22) = 22/√22 = √22 ≈ 4,69.`,
      grille: [{"c":"Exercice 1 : arbre, probabilités totales et conditionnelle (questions 1 à 4)","pts":2},{"c":"Exercice 1 : loi binomiale justifiée, calculs et seuil avec ln (questions 5 et 6)","pts":3},{"c":"Exercice 2 : premiers termes et récurrence complète","pts":2},{"c":"Exercice 2 : convergence, limite, suite géométrique et programme Python","pts":3},{"c":"Exercice 3 : limite, dérivée, variations et convexité","pts":3},{"c":"Exercice 3 : corollaire du TVI et intégration par parties","pts":2},{"c":"Exercice 4 : vecteur normal, équation du plan, représentation paramétrique","pts":2},{"c":"Exercice 4 : projeté orthogonal, distance, volume et aire","pts":3}] },
  ],
};
