// Mathématiques expertes (option) — terminale voie générale. Sources : voir matiere.sources.
// Programme en vigueur pour le bac 2027 : programme de l'option de 2019 (BO spécial n° 8 du 25 juillet 2019).
// Les nouveaux programmes publiés en 2026 ne s'appliquent en terminale qu'à la rentrée 2027.
export default {
  matiere: {
    id: 'maths-exp',
    nom: 'Mathématiques expertes',
    voie: 'generale',
    epreuve: {"type":"controle continu","quand":"toute l'année","note":"Option de terminale (3 heures par semaine) évaluée en contrôle continu, d'après les moyennes du bulletin."},
    sources: [
      "https://eduscol.education.gouv.fr/5817/programmes-et-ressources-en-mathematiques-voie-gt",
      "https://www.education.gouv.fr/bo/19/Special8/MENE1921244A.htm",
    ],
    chapitres: [
      { id: "maths-exp-1", t: "Nombres complexes : point de vue algébrique", theme: "Nombres complexes" },
      { id: "maths-exp-2", t: "Nombres complexes : point de vue géométrique", theme: "Nombres complexes" },
      { id: "maths-exp-3", t: "Divisibilité, division euclidienne et congruences", theme: "Arithmétique" },
      { id: "maths-exp-4", t: "PGCD, théorèmes de Bézout et de Gauss", theme: "Arithmétique" },
      { id: "maths-exp-5", t: "Nombres premiers et petit théorème de Fermat", theme: "Arithmétique" },
      { id: "maths-exp-6", t: "Matrices et graphes", theme: "Graphes et matrices" },
      { id: "maths-exp-7", t: "Chaînes de Markov et suites de matrices", theme: "Graphes et matrices" },
    ],
  },
  paquets: [
  { chapitre: "maths-exp-1",
    fiche: `## Nombres complexes : point de vue algébrique

Les nombres complexes prolongent les réels avec un nombre i tel que i² = −1. Ils permettent de résoudre toutes les équations du second degré.

### La forme algébrique
- Tout nombre complexe s'écrit de façon unique **z = a + ib**, avec a et b réels.
- a est la **partie réelle** : Re(z) = a. b est la **partie imaginaire** : Im(z) = b. Attention, Im(z) est un réel : pour z = 3 − 2i, Im(z) = −2.
- z est **réel** si b = 0 ; z est **imaginaire pur** si a = 0.
- Deux complexes sont égaux si et seulement s'ils ont même partie réelle et même partie imaginaire.

### Calculer
- On calcule comme avec des réels, en remplaçant **i² par −1**.
- Exemple : (2 + 3i)(1 − i) = 2 − 2i + 3i − 3i² = 2 + i + 3 = 5 + i.
- Puissances de i : i² = −1, i³ = −i, **i⁴ = 1**, puis cela recommence. Exemple : i^10 = i^8 × i² = −1.
- **Formule du binôme** : (a + b)^n = somme des (k parmi n) a^k b^(n − k), pour k de 0 à n. Exemple : (1 + i)² = 1 + 2i + i² = 2i.

### Le conjugué
- Le **conjugué** de z = a + ib est **z̄ = a − ib**.
- **z × z̄ = a² + b²**, un réel positif. Exemple : (3 + 4i)(3 − 4i) = 9 + 16 = 25.
- z + z̄ = 2a et z − z̄ = 2ib. Donc z est réel si z̄ = z, imaginaire pur si z̄ = −z.
- Le conjugué d'une somme, d'un produit, d'un quotient est la somme, le produit, le quotient des conjugués.

### Le quotient
- Pour écrire 1/z ou z/w sous forme algébrique, on **multiplie en haut et en bas par le conjugué du dénominateur**.
- Exemple : 1/(1 + i) = (1 − i)/((1 + i)(1 − i)) = (1 − i)/2 = 1/2 − i/2.

### Équations du second degré à coefficients réels
- Pour az² + bz + c = 0 (a, b, c réels, a ≠ 0), on calcule **Δ = b² − 4ac**.
- Si Δ > 0 : deux solutions réelles (−b ± √Δ)/(2a).
- Si Δ = 0 : une solution réelle −b/(2a).
- Si **Δ < 0** : deux solutions **complexes conjuguées** **(−b ± i√(−Δ))/(2a)**.
- Exemple : z² + 2z + 5 = 0. Δ = 4 − 20 = −16, donc z = (−2 ± 4i)/2 = −1 ± 2i.

### Polynômes
- Si P est un polynôme et **P(a) = 0**, alors on peut **factoriser par (z − a)** : P(z) = (z − a)Q(z), avec Q de degré un de moins.
- Un polynôme de degré n a **au plus n racines**.
- Exemple : z³ − 1 s'annule en 1, donc z³ − 1 = (z − 1)(z² + z + 1).
- Identité utile : z^n − a^n = (z − a)(z^(n−1) + a z^(n−2) + … + a^(n−1)).

### À retenir pour le bac
- i² = −1, et Im(z) est un réel (sans le i).
- Pour un quotient : multiplier par le conjugué du dénominateur.
- Δ < 0 : deux solutions conjuguées, avec i√(−Δ).
- Une racine connue permet de factoriser un polynôme.`,
    cartes: [
      { q: "Forme algébrique d'un complexe", r: "z = a + ib, avec a et b réels, et i² = −1." },
      { q: "Partie imaginaire de z = 3 − 2i", r: "Im(z) = −2 (un réel, sans le i)." },
      { q: "Conjugué de z = a + ib", r: "z̄ = a − ib." },
      { q: "z × z̄ pour z = a + ib", r: "a² + b², un réel positif ou nul." },
      { q: "Comment écrire un quotient sous forme algébrique ?", r: "Multiplier le numérateur et le dénominateur par le conjugué du dénominateur." },
      { q: "Valeurs de i², i³ et i⁴", r: "i² = −1, i³ = −i, i⁴ = 1." },
      { q: "Quand z est-il réel, avec le conjugué ?", r: "Quand z̄ = z." },
      { q: "Quand z est-il imaginaire pur, avec le conjugué ?", r: "Quand z̄ = −z." },
      { q: "Solutions de az² + bz + c = 0 si Δ < 0", r: "(−b + i√(−Δ))/(2a) et (−b − i√(−Δ))/(2a), deux complexes conjugués." },
      { q: "Si P(a) = 0, que peut-on dire de P ?", r: "On peut factoriser : P(z) = (z − a)Q(z)." },
      { q: "Nombre maximal de racines d'un polynôme de degré n", r: "n." },
      { q: "Factorisation de z³ − 1", r: "(z − 1)(z² + z + 1)." },
      { q: "Formule du binôme de Newton", r: "(a + b)^n = somme pour k de 0 à n de (k parmi n) a^k b^(n − k)." },
    ],
    quiz: [
      { q: "Quelle est la partie imaginaire de z = 4 − 7i ?",
        choix: ["−7", "7", "−7i", "4"],
        bonne: 0, niv: 1,
        expl: "Im(z) est le réel qui multiplie i, ici −7. Le piège est d'écrire −7i." },
      { q: "Combien vaut (2 + 3i)(1 − i) ?",
        choix: ["−1 + i", "5 + i", "2 − 3i", "5 − i"],
        bonne: 1, niv: 2,
        expl: "2 − 2i + 3i − 3i² = 2 + i + 3 = 5 + i." },
      { q: "Quel est le conjugué de z = −2 + 5i ?",
        choix: ["2 − 5i", "−2 − 5i", "2 + 5i", "5 − 2i"],
        bonne: 1, niv: 1,
        expl: "On change seulement le signe de la partie imaginaire." },
      { q: "Combien vaut (3 + 4i)(3 − 4i) ?",
        choix: ["25", "−7", "9 − 16i", "7"],
        bonne: 0, niv: 2,
        expl: "z × z̄ = a² + b² = 9 + 16 = 25. Le piège −7 vient de 9 − 16 en oubliant que i² = −1." },
      { q: "Quelle est la forme algébrique de 1/(1 + i) ?",
        choix: ["1/2 − i/2", "1 − i", "1/2 + i/2", "−1 + i"],
        bonne: 0, niv: 2,
        expl: "On multiplie par 1 − i : (1 − i)/(1 + 1) = 1/2 − i/2." },
      { q: "Combien vaut i^10 ?",
        choix: ["1", "−1", "i", "−i"],
        bonne: 1, niv: 2,
        expl: "i⁴ = 1, donc i^10 = i^8 × i² = 1 × (−1) = −1." },
      { q: "Quelles sont les solutions de z² + 2z + 5 = 0 ?",
        choix: ["1 + 2i et 1 − 2i", "−1 + 2i et −1 − 2i", "−1 + 4i et −1 − 4i", "−2 + 4i et −2 − 4i"],
        bonne: 1, niv: 2,
        expl: "Δ = 4 − 20 = −16, donc z = (−2 ± 4i)/2 = −1 ± 2i." },
      { q: "Une équation du second degré à coefficients réels a Δ < 0. Ses solutions sont :",
        choix: ["deux réels opposés", "deux imaginaires purs", "un seul complexe double", "deux complexes conjugués"],
        bonne: 3, niv: 1,
        expl: "Elles valent (−b ± i√(−Δ))/(2a) : même partie réelle, parties imaginaires opposées." },
      { q: "Pour quel réel x le complexe z = (x − 2) + 3i est-il imaginaire pur ?",
        choix: ["x = 2", "x = −2", "x = 3", "x = 0"],
        bonne: 0, niv: 2,
        expl: "Imaginaire pur : partie réelle nulle, donc x − 2 = 0." },
      { q: "P(z) = z³ − 8 et P(2) = 0. Quelle factorisation est juste ?",
        choix: ["(z − 2)(z² − 2z + 4)", "(z + 2)(z² − 2z + 4)", "(z − 2)(z² + 2z + 4)", "(z − 2)(z² + 4)"],
        bonne: 2, niv: 3,
        expl: "En développant : z³ + 2z² + 4z − 2z² − 4z − 8 = z³ − 8." },
      { q: "Le conjugué de z vérifie z̄ = z. Que peut-on dire de z ?",
        choix: ["z est imaginaire pur", "z est nul", "z est forcément réel", "z est de module 1"],
        bonne: 2, niv: 3,
        expl: "z̄ = z impose b = −b, donc b = 0 : z est réel." },
      { q: "Combien vaut (1 + i)² ?",
        choix: ["2i", "2", "1 + i²", "2 + 2i"],
        bonne: 0, niv: 3,
        expl: "(1 + i)² = 1 + 2i + i² = 1 + 2i − 1 = 2i." },
    ] },
  { chapitre: "maths-exp-2",
    fiche: `## Nombres complexes : point de vue géométrique

Un nombre complexe peut se voir comme un point du plan. Le module et l'argument donnent sa distance à l'origine et sa direction. La forme exponentielle rend les produits et les puissances très faciles.

### Image et affixe
- Dans un repère orthonormé direct (O ; u, v), le point **M(a ; b)** a pour **affixe z = a + ib**. On dit aussi que M est l'image de z.
- Le vecteur AB a pour affixe **zB − zA**. Le milieu de [AB] a pour affixe (zA + zB)/2.

### Module
- Le **module** de z = a + ib est **∣z∣ = √(a² + b²)** : c'est la distance OM.
- **AB = ∣zB − zA∣**.
- Propriétés : ∣z × w∣ = ∣z∣ × ∣w∣ ; ∣z/w∣ = ∣z∣/∣w∣ ; ∣z^n∣ = ∣z∣^n ; z × z̄ = ∣z∣².
- Exemple : ∣3 − 4i∣ = √(9 + 16) = 5.

### Argument
- Pour z ≠ 0, un **argument** θ de z est une mesure de l'angle entre u et OM. Il est défini **à 2π près**.
- On le trouve avec **cos θ = a/∣z∣** et **sin θ = b/∣z∣**.
- Exemple : z = 1 + i. ∣z∣ = √2, cos θ = sin θ = √2/2, donc θ = π/4.
- Propriétés : arg(z × w) = arg(z) + arg(w) ; arg(z/w) = arg(z) − arg(w) ; arg(z^n) = n × arg(z) ; arg(z̄) = −arg(z) ; tout cela à 2π près.

### Formes trigonométrique et exponentielle
- **Forme trigonométrique** : z = r (cos θ + i sin θ), avec r = ∣z∣.
- On note **e^(iθ) = cos θ + i sin θ**. **Forme exponentielle** : **z = r e^(iθ)**.
- Valeurs à connaître : e^(i0) = 1, e^(iπ/2) = i, **e^(iπ) = −1**, e^(−iπ/2) = −i.
- Règles : e^(iθ) × e^(iθ') = e^(i(θ + θ')) et (e^(iθ))^n = e^(inθ). C'est la **formule de Moivre** : (cos θ + i sin θ)^n = cos(nθ) + i sin(nθ).
- **Formules d'Euler** : cos θ = (e^(iθ) + e^(−iθ))/2 et sin θ = (e^(iθ) − e^(−iθ))/(2i).
- Exemple : (1 + i)^8 = (√2 e^(iπ/4))^8 = 16 e^(2iπ) = 16.

### Racines n-ièmes de l'unité
- Ce sont les solutions de **z^n = 1**. Il y en a **exactement n** : **e^(2ikπ/n)**, pour k = 0, 1, …, n − 1.
- Leurs images forment un **polygone régulier** à n côtés inscrit dans le cercle de centre O et de rayon 1.
- Exemple : pour n = 3, on trouve 1, e^(2iπ/3) et e^(4iπ/3) : un triangle équilatéral.
- Leur somme vaut 0 pour n ≥ 2.

### Géométrie avec les complexes
- Un **angle orienté** (AB, AC) a pour mesure arg((zC − zA)/(zB − zA)).
- Le triangle ABC est **rectangle en A** si (zC − zA)/(zB − zA) est **imaginaire pur** (non nul).
- A, B, C sont **alignés** si (zC − zA)/(zB − zA) est **réel**.
- L'ensemble des points M tels que ∣z − zA∣ = r est le **cercle** de centre A et de rayon r.
- L'ensemble des M tels que ∣z − zA∣ = ∣z − zB∣ est la **médiatrice** de [AB].

### À retenir pour le bac
- ∣a + ib∣ = √(a² + b²), et l'argument se lit avec cos et sin.
- Produit : on multiplie les modules et on ajoute les arguments.
- Toujours écrire « à 2π près ».
- Les racines n-ièmes de l'unité forment un polygone régulier.`,
    cartes: [
      { q: "Module de z = a + ib", r: "∣z∣ = √(a² + b²), la distance OM." },
      { q: "Distance AB avec les affixes", r: "AB = ∣zB − zA∣." },
      { q: "Comment trouver un argument θ de z ?", r: "cos θ = a/∣z∣ et sin θ = b/∣z∣. Il est défini à 2π près." },
      { q: "Module et argument d'un produit", r: "∣zw∣ = ∣z∣ × ∣w∣ et arg(zw) = arg(z) + arg(w), à 2π près." },
      { q: "Argument d'une puissance", r: "arg(z^n) = n × arg(z), à 2π près." },
      { q: "Définition de e^(iθ)", r: "e^(iθ) = cos θ + i sin θ." },
      { q: "Valeur de e^(iπ)", r: "−1." },
      { q: "Formule de Moivre", r: "(cos θ + i sin θ)^n = cos(nθ) + i sin(nθ)." },
      { q: "Formules d'Euler", r: "cos θ = (e^(iθ) + e^(−iθ))/2 et sin θ = (e^(iθ) − e^(−iθ))/(2i)." },
      { q: "Racines n-ièmes de l'unité", r: "Les n nombres e^(2ikπ/n), pour k de 0 à n − 1." },
      { q: "Figure formée par les racines n-ièmes de l'unité", r: "Un polygone régulier à n côtés inscrit dans le cercle unité." },
      { q: "Triangle ABC rectangle en A avec les complexes", r: "(zC − zA)/(zB − zA) est imaginaire pur non nul." },
      { q: "Ensemble des M tels que ∣z − zA∣ = ∣z − zB∣", r: "La médiatrice de [AB]." },
      { q: "Lien entre conjugué et module", r: "z × z̄ = ∣z∣²." },
    ],
    quiz: [
      { q: "Quel est le module de z = 3 − 4i ?",
        choix: ["7", "25", "√7", "5"],
        bonne: 3, niv: 1,
        expl: "∣z∣ = √(9 + 16) = √25 = 5. 25 est le carré du module." },
      { q: "Quel est un argument de z = 1 + i ?",
        choix: ["π/2", "π/4", "π/3", "−π/4"],
        bonne: 1, niv: 2,
        expl: "∣z∣ = √2 et cos θ = sin θ = √2/2, donc θ = π/4." },
      { q: "Quelle est la forme exponentielle de z = −2 ?",
        choix: ["−2 e^(i0)", "2 e^(iπ)", "2 e^(iπ/2)", "2 e^(−iπ/2)"],
        bonne: 1, niv: 3,
        expl: "Un module est positif : ∣−2∣ = 2 et un argument est π. −2 e^(i0) n'est pas une forme exponentielle." },
      { q: "Que vaut e^(iπ/2) ?",
        choix: ["1", "−1", "−i", "i"],
        bonne: 3, niv: 1,
        expl: "cos(π/2) + i sin(π/2) = 0 + i = i." },
      { q: "z = 1 + i√3. Que vaut z³ ?",
        choix: ["−8", "8", "8i", "−8i"],
        bonne: 0, niv: 2,
        expl: "z = 2 e^(iπ/3), donc z³ = 8 e^(iπ) = −8." },
      { q: "∣z∣ = 2 et arg(z) = π/6. Quels sont le module et un argument de z² ?",
        choix: ["4 et π/6", "4 et π/3", "2 et π/3", "4 et π/12"],
        bonne: 1, niv: 2,
        expl: "On élève le module au carré et on double l'argument." },
      { q: "Combien l'équation z^5 = 1 a-t-elle de solutions complexes ?",
        choix: ["5", "1", "2", "4"],
        bonne: 0, niv: 1,
        expl: "Il y a exactement n racines n-ièmes de l'unité : e^(2ikπ/5), k de 0 à 4." },
      { q: "Les images des racines 4-ièmes de l'unité forment :",
        choix: ["un triangle équilatéral", "un rectangle non carré", "un losange non carré", "un carré"],
        bonne: 3, niv: 2,
        expl: "Ce sont 1, i, −1 et −i : un carré inscrit dans le cercle unité." },
      { q: "A(1), B(3), C(1 + 2i). Que vaut (zC − zA)/(zB − zA) et que conclure ?",
        choix: ["1 : A, B, C sont alignés", "2i : ABC est équilatéral", "i : ABC est rectangle isocèle en A", "−1 : A est le milieu de [BC]"],
        bonne: 2, niv: 3,
        expl: "(2i)/2 = i : imaginaire pur de module 1, donc AC = AB et l'angle en A est droit." },
      { q: "Quel est l'ensemble des points M d'affixe z tels que ∣z − 2i∣ = 3 ?",
        choix: ["Le cercle de centre O et de rayon 3", "La médiatrice du segment [O ; 2i]", "Le cercle de centre d'affixe 2i et de rayon 3", "Le cercle de centre d'affixe −2i et de rayon 3"],
        bonne: 2, niv: 2,
        expl: "∣z − zA∣ = r est le cercle de centre A et de rayon r, ici A d'affixe 2i." },
      { q: "Combien vaut (1 + i)^8 ?",
        choix: ["−16", "16i", "8", "16"],
        bonne: 3, niv: 3,
        expl: "(1 + i) = √2 e^(iπ/4), donc (1 + i)^8 = 16 e^(2iπ) = 16." },
      { q: "Que vaut (e^(iθ) + e^(−iθ))/2 ?",
        choix: ["cos θ", "sin θ", "i sin θ", "e^(iθ)"],
        bonne: 0, niv: 2,
        expl: "C'est une formule d'Euler : e^(iθ) + e^(−iθ) = 2 cos θ." },
    ] },
  { chapitre: "maths-exp-3",
    fiche: `## Divisibilité, division euclidienne et congruences

L'arithmétique étudie les entiers relatifs (l'ensemble ℤ). Ce premier chapitre donne les outils de base : diviser, trouver un reste, et calculer « modulo n ».

### Divisibilité
- a **divise** b (on écrit a ∣ b) s'il existe un entier k tel que **b = k × a**. On dit aussi que b est un **multiple** de a.
- Exemple : 6 divise 42, car 42 = 7 × 6. Et −3 divise 12.
- Propriétés : si a divise b et b divise c, alors a divise c. **Si a divise b et c, alors a divise toute combinaison bu + cv** (u, v entiers).
- Exemple d'usage : si d divise n + 3 et n, alors d divise (n + 3) − n = 3.

### Division euclidienne
- Pour a entier et b entier naturel non nul, il existe un **unique** couple (q ; r) tel que **a = bq + r** avec **0 ≤ r < b**.
- q est le **quotient**, r le **reste**.
- Exemple : 47 = 5 × 9 + 2, donc le reste de 47 par 5 est 2.
- Avec un négatif : −17 = 5 × (−4) + 3. Le reste est 3 (pas −2, car il doit être positif).
- b divise a si et seulement si le reste est 0.

### Congruences
- a est **congru à b modulo n** (a ≡ b [n]) si **n divise a − b**, c'est-à-dire si a et b ont **le même reste** dans la division par n.
- Exemple : 17 ≡ 2 [5], car 17 − 2 = 15 est divisible par 5.
- Tout entier est congru modulo n à son reste, qui est entre 0 et n − 1.

### Calculer avec les congruences
- Si a ≡ b [n] et c ≡ d [n], alors **a + c ≡ b + d [n]** et **a × c ≡ b × d [n]**.
- Et pour tout entier naturel k : **a^k ≡ b^k [n]**.
- Exemple : reste de 2^100 par 3. Comme 2 ≡ −1 [3], 2^100 ≡ (−1)^100 = 1 [3]. Le reste est 1.
- Attention : on **ne divise pas** une congruence en général. 2 × 3 ≡ 2 × 0 [6], mais 3 n'est pas congru à 0 modulo 6.

### Trouver un cycle de restes
- Pour le reste de 3^n par 7, on calcule les premières puissances : 3^1 ≡ 3, 3² ≡ 2, 3³ ≡ 6, 3⁴ ≡ 4, 3⁵ ≡ 5, **3⁶ ≡ 1 [7]**.
- Comme 3⁶ ≡ 1, les restes se répètent tous les 6. Exemple : 2026 = 6 × 337 + 4, donc 3^2026 ≡ 3⁴ ≡ 4 [7].

### Tableau de restes (écrit en liste)
- Pour montrer qu'une expression est divisible par n, on étudie tous les restes possibles de x modulo n.
- Exemple : n(n + 1)(n + 2) est divisible par 3. Si n ≡ 0, le facteur n est divisible par 3 ; si n ≡ 1, c'est n + 2 ; si n ≡ 2, c'est n + 1.
- Exemple : un carré est toujours congru à 0 ou 1 modulo 4 (car 0² ≡ 0, 1² ≡ 1, 2² ≡ 0, 3² ≡ 1).

### Critères de divisibilité (rappel)
- Par 2 : chiffre des unités pair. Par 5 : unités 0 ou 5. Par 3 et par 9 : somme des chiffres divisible par 3 ou par 9. Ils se démontrent avec les congruences (10 ≡ 1 [9]).

### À retenir pour le bac
- Division euclidienne : le reste est toujours entre 0 et b − 1, même si a est négatif.
- a ≡ b [n] signifie que n divise a − b.
- On peut additionner, multiplier et élever à une puissance, mais pas diviser.
- Chercher une puissance congrue à 1 pour trouver un cycle.`,
    cartes: [
      { q: "Définition de « a divise b »", r: "Il existe un entier k tel que b = k × a." },
      { q: "Si a divise b et c, que divise-t-il ?", r: "Toute combinaison bu + cv, avec u et v entiers." },
      { q: "Division euclidienne de a par b > 0", r: "a = bq + r avec 0 ≤ r < b, et le couple (q ; r) est unique." },
      { q: "Reste de −17 dans la division par 5", r: "3, car −17 = 5 × (−4) + 3." },
      { q: "Définition de a ≡ b [n]", r: "n divise a − b : a et b ont le même reste dans la division par n." },
      { q: "Opérations permises sur les congruences", r: "Additionner, multiplier, élever à une puissance entière naturelle." },
      { q: "Opération interdite en général sur les congruences", r: "Diviser les deux membres par un même nombre." },
      { q: "Reste de 2^100 dans la division par 3", r: "1, car 2 ≡ −1 [3] et (−1)^100 = 1." },
      { q: "Restes possibles d'un carré modulo 4", r: "0 ou 1." },
      { q: "Comment trouver le reste de a^n par m pour n grand ?", r: "Chercher une puissance de a congrue à 1 modulo m, puis utiliser la division de n par cette période." },
      { q: "Critère de divisibilité par 9", r: "La somme des chiffres est divisible par 9 (car 10 ≡ 1 [9])." },
      { q: "Pourquoi n(n + 1)(n + 2) est-il divisible par 3 ?", r: "Parmi trois entiers consécutifs, l'un est toujours multiple de 3." },
      { q: "Lien entre reste et divisibilité", r: "b divise a si et seulement si le reste de a par b est 0." },
    ],
    quiz: [
      { q: "Quel est le reste de la division euclidienne de 47 par 5 ?",
        choix: ["9", "2", "3", "−3"],
        bonne: 1, niv: 1,
        expl: "47 = 5 × 9 + 2, avec 0 ≤ 2 < 5. 9 est le quotient." },
      { q: "Quel est le reste de la division euclidienne de −17 par 5 ?",
        choix: ["3", "−2", "2", "−3"],
        bonne: 0, niv: 2,
        expl: "−17 = 5 × (−4) + 3. Le reste doit être entre 0 et 4, donc −2 ne convient pas." },
      { q: "Que signifie 23 ≡ 2 [7] ?",
        choix: ["23 divise 7 − 2", "2 divise 23 − 7", "7 divise 23 + 2", "7 divise 23 − 2"],
        bonne: 3, niv: 1,
        expl: "a ≡ b [n] veut dire que n divise a − b. Ici 21 est divisible par 7." },
      { q: "Quel est le reste de 2^100 dans la division par 3 ?",
        choix: ["1", "2", "0", "3"],
        bonne: 0, niv: 2,
        expl: "2 ≡ −1 [3], donc 2^100 ≡ (−1)^100 = 1." },
      { q: "Sachant que 3⁶ ≡ 1 [7], quel est le reste de 3^2026 par 7 ?",
        choix: ["3", "1", "2", "4"],
        bonne: 3, niv: 3,
        expl: "2026 = 6 × 337 + 4, donc 3^2026 ≡ 3⁴ = 81 ≡ 4 [7]." },
      { q: "Un entier d divise n et n + 3. Que peut-on affirmer ?",
        choix: ["d divise n + 1", "d vaut 3", "d divise 2n", "d divise 3"],
        bonne: 3, niv: 3,
        expl: "d divise la différence (n + 3) − n = 3. d peut valoir 1 ou 3 (ou leurs opposés). Il divise aussi 2n, mais ce n'est pas l'information utile." },
      { q: "Quels sont les restes possibles d'un carré dans la division par 4 ?",
        choix: ["0, 1, 2 ou 3", "1 ou 3", "0 ou 1", "0 ou 2"],
        bonne: 2, niv: 2,
        expl: "0² ≡ 0, 1² ≡ 1, 2² = 4 ≡ 0, 3² = 9 ≡ 1 [4]." },
      { q: "On a 2x ≡ 2y [6]. Peut-on conclure x ≡ y [6] ?",
        choix: ["Oui, on peut simplifier par 2", "Oui, car 2 divise 6", "Non, car 2x et 2y sont pairs", "Non, on ne peut pas diviser ici"],
        bonne: 3, niv: 3,
        expl: "Contre-exemple : 2 × 3 ≡ 2 × 0 [6], mais 3 n'est pas congru à 0 modulo 6." },
      { q: "Si a ≡ 3 [5] et b ≡ 4 [5], quel est le reste de a × b par 5 ?",
        choix: ["12", "2", "7", "1"],
        bonne: 1, niv: 2,
        expl: "a × b ≡ 12 ≡ 2 [5]. 12 n'est pas un reste possible modulo 5." },
      { q: "Quel nombre est congru à 1 modulo 9 ?",
        choix: ["1 000", "1 001", "999", "990"],
        bonne: 0, niv: 2,
        expl: "La somme des chiffres de 1 000 vaut 1 : 1 000 = 9 × 111 + 1." },
      { q: "Que vaut le reste de 10^n dans la division par 9, pour tout entier n ?",
        choix: ["0", "n", "1", "9"],
        bonne: 2, niv: 2,
        expl: "10 ≡ 1 [9], donc 10^n ≡ 1^n = 1 [9]. C'est ce qui justifie le critère par 9." },
      { q: "Si a divise b, laquelle de ces affirmations est vraie ?",
        choix: ["b divise a", "a divise 5b", "a est plus petit que b", "a et b sont premiers entre eux"],
        bonne: 1, niv: 1,
        expl: "b = ka entraîne 5b = (5k)a. a peut être négatif, donc pas forcément plus petit." },
    ] },
  { chapitre: "maths-exp-4",
    fiche: `## PGCD, théorèmes de Bézout et de Gauss

Le PGCD mesure ce que deux entiers ont « en commun ». Les théorèmes de Bézout et de Gauss permettent de résoudre des équations en nombres entiers, comme 5x + 3y = 1.

### Le PGCD
- Le **PGCD** de a et b (non tous deux nuls) est le **plus grand diviseur commun** à a et b. Exemple : PGCD(12 ; 18) = 6.
- PGCD(a ; b) = PGCD(b ; a) = PGCD(∣a∣ ; ∣b∣). Si b divise a, PGCD(a ; b) = ∣b∣.
- Les diviseurs communs à a et b sont **exactement les diviseurs de leur PGCD**.
- a et b sont **premiers entre eux** si **PGCD(a ; b) = 1**. Exemple : 8 et 15.

### L'algorithme d'Euclide
- Si a = bq + r, alors **PGCD(a ; b) = PGCD(b ; r)**.
- On recommence jusqu'à obtenir un reste nul : le **dernier reste non nul** est le PGCD.
- Exemple : PGCD(252 ; 198). 252 = 198 × 1 + 54 ; 198 = 54 × 3 + 36 ; 54 = 36 × 1 + 18 ; 36 = 18 × 2 + 0. Le PGCD est **18**.

### Le théorème de Bézout
- **Identité de Bézout** : si d = PGCD(a ; b), il existe des entiers u et v tels que **au + bv = d**.
- **Théorème de Bézout** : a et b sont **premiers entre eux** si et seulement s'il existe des entiers u et v tels que **au + bv = 1**.
- Exemple : 3 × 5 + (−2) × 7 = 1, donc 5 et 7 sont premiers entre eux.
- On trouve u et v en **remontant l'algorithme d'Euclide**.
- Conséquence : l'équation **ax + by = c** a des solutions entières **si et seulement si PGCD(a ; b) divise c**. Exemple : 6x + 4y = 5 n'a aucune solution, car 2 ne divise pas 5.

### Le théorème de Gauss
- Si **a divise bc** et si **a et b sont premiers entre eux**, alors **a divise c**.
- Exemple : 5 divise 3n, et 5 et 3 sont premiers entre eux, donc 5 divise n.
- Sans l'hypothèse « premiers entre eux », c'est faux : 6 divise 4 × 3, mais 6 ne divise ni 4 ni 3.
- **Corollaire** : si a et b sont premiers entre eux et divisent tous les deux n, alors **ab divise n**. Exemple : si 4 et 9 divisent n, alors 36 divise n. Mais 4 et 6 divisent 12 sans que 24 divise 12.

### Résoudre ax + by = c (équation diophantienne)
- 1. Vérifier que PGCD(a ; b) divise c, et simplifier par ce PGCD si besoin.
- 2. Trouver une **solution particulière** (x0 ; y0).
- 3. Soustraire : a(x − x0) = −b(y − y0) = b(y0 − y).
- 4. **Gauss** : b divise a(x − x0), b premier avec a, donc b divise x − x0 : x = x0 + bk.
- 5. En déduire y = y0 − ak, puis **vérifier**.
- Exemple : 5x + 3y = 1. Solution particulière (2 ; −3). Solutions : (2 + 3k ; −3 − 5k), k ∈ ℤ.

### Propriété utile
- PGCD(ka ; kb) = k × PGCD(a ; b) pour k entier naturel non nul.
- Si d = PGCD(a ; b), alors a = da' et b = db' avec a' et b' **premiers entre eux**.

### À retenir pour le bac
- Euclide : le dernier reste non nul est le PGCD.
- Bézout : au + bv = 1 ⟺ a et b premiers entre eux.
- Gauss demande toujours « premiers entre eux » : le dire explicitement.
- ax + by = c a des solutions si et seulement si le PGCD divise c.`,
    cartes: [
      { q: "Définition du PGCD de a et b", r: "Le plus grand entier qui divise à la fois a et b." },
      { q: "Quand dit-on que a et b sont premiers entre eux ?", r: "Quand PGCD(a ; b) = 1." },
      { q: "Propriété clé de l'algorithme d'Euclide", r: "Si a = bq + r, alors PGCD(a ; b) = PGCD(b ; r)." },
      { q: "Où lit-on le PGCD dans l'algorithme d'Euclide ?", r: "C'est le dernier reste non nul." },
      { q: "Identité de Bézout", r: "Il existe des entiers u et v tels que au + bv = PGCD(a ; b)." },
      { q: "Théorème de Bézout", r: "a et b sont premiers entre eux si et seulement s'il existe u et v entiers avec au + bv = 1." },
      { q: "Théorème de Gauss", r: "Si a divise bc et si a et b sont premiers entre eux, alors a divise c." },
      { q: "Corollaire de Gauss", r: "Si a et b sont premiers entre eux et divisent n, alors ab divise n." },
      { q: "Quand ax + by = c a-t-elle des solutions entières ?", r: "Si et seulement si PGCD(a ; b) divise c." },
      { q: "Solutions de 5x + 3y = 1", r: "Les couples (2 + 3k ; −3 − 5k), avec k entier relatif." },
      { q: "Diviseurs communs de a et b", r: "Ce sont exactement les diviseurs de PGCD(a ; b)." },
      { q: "Comment trouver u et v dans l'identité de Bézout ?", r: "En remontant les étapes de l'algorithme d'Euclide." },
      { q: "PGCD(ka ; kb) pour k entier naturel non nul", r: "k × PGCD(a ; b)." },
    ],
    quiz: [
      { q: "Combien vaut PGCD(252 ; 198) ?",
        choix: ["36", "54", "72", "18"],
        bonne: 3, niv: 2,
        expl: "Euclide : 252 = 198 + 54, 198 = 3 × 54 + 36, 54 = 36 + 18, 36 = 2 × 18. Le dernier reste non nul est 18." },
      { q: "Que signifie « a et b sont premiers entre eux » ?",
        choix: ["Leur PGCD vaut 1", "Ils sont premiers l'un et l'autre", "Ils sont de parité différente", "Leur produit est premier"],
        bonne: 0, niv: 1,
        expl: "8 et 15 sont premiers entre eux sans être des nombres premiers." },
      { q: "L'équation 6x + 4y = 5 a-t-elle des solutions entières ?",
        choix: ["Oui, par exemple x = 1 et y = 0", "Non, car PGCD(6 ; 4) = 2 ne divise pas 5", "Oui, d'après le théorème de Gauss", "Non, car 5 est un nombre premier"],
        bonne: 1, niv: 2,
        expl: "6x + 4y est toujours pair, alors que 5 est impair." },
      { q: "Que dit le théorème de Gauss ?",
        choix: ["Si a divise bc, alors a divise b ou a divise c", "Si PGCD(a ; b) = 1, il existe u, v avec au + bv = 1", "Si a et b divisent n, alors le produit ab divise n", "Si a divise bc et PGCD(a ; b) = 1, alors a divise c"],
        bonne: 3, niv: 1,
        expl: "« a divise b ou c » est faux en général ; « au + bv = 1 » est le théorème de Bézout ; « ab divise n » demande a et b premiers entre eux." },
      { q: "5 divise 3n, avec n entier. Que peut-on en déduire ?",
        choix: ["5 divise n", "3 divise n", "15 divise n", "5 divise n + 3"],
        bonne: 0, niv: 2,
        expl: "5 divise 3n et PGCD(5 ; 3) = 1 : par le théorème de Gauss, 5 divise n." },
      { q: "4 et 6 divisent un entier n. Peut-on affirmer que 24 divise n ?",
        choix: ["Non, 4 et 6 ne sont pas premiers entre eux", "Oui, d'après le corollaire du théorème de Gauss", "Oui, car 24 est égal à 4 × 6", "Non, car 24 n'est pas un nombre premier"],
        bonne: 0, niv: 3,
        expl: "Contre-exemple : 12. On peut seulement dire que 12, le PPCM, divise n." },
      { q: "Lequel de ces couples (u ; v) vérifie 5u + 7v = 1 ?",
        choix: ["(2 ; −1)", "(−3 ; 2)", "(3 ; −2)", "(1 ; 1)"],
        bonne: 2, niv: 2,
        expl: "5 × 3 + 7 × (−2) = 15 − 14 = 1." },
      { q: "Le couple (2 ; −3) est solution de 5x + 3y = 1. Quelles sont toutes les solutions ?",
        choix: ["(2 + 5k ; −3 − 3k), k ∈ ℤ", "(2 + 3k ; −3 − 5k), k ∈ ℤ", "(2 + 3k ; −3 + 5k), k ∈ ℤ", "(2k ; −3k), k ∈ ℤ"],
        bonne: 1, niv: 3,
        expl: "On vérifie : 5(2 + 3k) + 3(−3 − 5k) = 10 − 9 = 1. Les autres ne vérifient pas l'équation pour tout k." },
      { q: "Combien vaut PGCD(35 ; 14) ?",
        choix: ["1", "2", "5", "7"],
        bonne: 3, niv: 1,
        expl: "35 = 14 × 2 + 7 et 14 = 7 × 2 : le PGCD est 7." },
      { q: "Pourquoi divise-t-on par le PGCD avant d'appliquer Gauss à ax + by = c ?",
        choix: ["Pour obtenir une solution entière plus petite", "Parce que Bézout l'exige", "Pour que c devienne égal à 1", "Pour avoir des coefficients premiers entre eux"],
        bonne: 3, niv: 3,
        expl: "Gauss demande deux nombres premiers entre eux : on simplifie pour l'obtenir." },
      { q: "d = PGCD(a ; b), a = da' et b = db'. Que vaut PGCD(a' ; b') ?",
        choix: ["d", "a' × b'", "1", "0"],
        bonne: 2, niv: 2,
        expl: "Après division par le PGCD, les quotients sont premiers entre eux." },
      { q: "n est un entier. Que vaut PGCD(n ; n + 1) ?",
        choix: ["n", "2", "1", "n + 1"],
        bonne: 2, niv: 3,
        expl: "Un diviseur commun divise (n + 1) − n = 1. Deux entiers consécutifs sont premiers entre eux." },
    ] },
  { chapitre: "maths-exp-5",
    fiche: `## Nombres premiers et petit théorème de Fermat

Les nombres premiers sont les « briques » des entiers : tout entier se décompose en produit de nombres premiers. Le petit théorème de Fermat donne des restes de grandes puissances.

### Définition
- Un entier naturel p est **premier** s'il a **exactement deux diviseurs positifs** : 1 et lui-même.
- **1 n'est pas premier** (il n'a qu'un diviseur). Le seul nombre premier pair est **2**.
- Les premiers : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47…

### Reconnaître un nombre premier
- Tout entier n ≥ 2 a au moins un diviseur premier.
- **Si n ≥ 2 n'est divisible par aucun nombre premier p tel que p² ≤ n, alors n est premier.**
- Exemple : 97. On teste 2, 3, 5, 7 (car 11² = 121 > 97). Aucun ne divise 97 : il est premier.
- Le **crible d'Ératosthène** donne la liste des premiers jusqu'à un nombre fixé en barrant les multiples.

### Il y a une infinité de nombres premiers
- C'est un résultat du programme (démonstration par l'absurde : si p1, …, pk étaient tous les premiers, le nombre p1 × … × pk + 1 n'aurait aucun diviseur premier dans la liste).

### Décomposition en facteurs premiers
- Tout entier n ≥ 2 s'écrit de façon **unique** (à l'ordre près) comme produit de nombres premiers.
- Exemple : 360 = 2³ × 3² × 5.
- **Nombre de diviseurs** : si n = p^a × q^b × r^c, il y a **(a + 1)(b + 1)(c + 1)** diviseurs positifs. Pour 360 : 4 × 3 × 2 = 24.
- **PGCD** : on prend les facteurs communs avec le plus petit exposant. Exemple : PGCD(360 ; 84). 84 = 2² × 3 × 7, donc PGCD = 2² × 3 = 12.

### Propriétés utiles
- Si un nombre premier p **divise un produit ab**, alors p divise a ou p divise b (c'est le théorème de Gauss).
- Un nombre premier p est premier avec tout entier qu'il ne divise pas.

### Le petit théorème de Fermat
- Si **p est premier** et si **a n'est pas divisible par p**, alors **a^(p − 1) ≡ 1 [p]**.
- Autre forme, valable pour tout entier a : **a^p ≡ a [p]**.
- Exemple : reste de 3^100 par 7. 7 est premier et ne divise pas 3, donc 3⁶ ≡ 1 [7]. 100 = 6 × 16 + 4, donc 3^100 ≡ 3⁴ = 81 ≡ 4 [7].
- Attention : la réciproque est fausse. Un nombre peut vérifier a^(n−1) ≡ 1 [n] sans être premier.

### Utilisation en cryptographie
- Le **chiffrement RSA**, utilisé sur Internet, repose sur le fait qu'il est facile de multiplier deux grands nombres premiers, mais très long de retrouver ces facteurs à partir du produit. Les calculs utilisent le petit théorème de Fermat.

### À retenir pour le bac
- 1 n'est pas premier ; 2 est le seul premier pair.
- Pour tester n, essayer les premiers p avec p² ≤ n.
- Fermat : p premier, p ne divise pas a, donc a^(p−1) ≡ 1 [p]. Vérifier les deux hypothèses.
- Nombre de diviseurs : produit des (exposant + 1).`,
    cartes: [
      { q: "Définition d'un nombre premier", r: "Un entier naturel qui a exactement deux diviseurs positifs : 1 et lui-même." },
      { q: "1 est-il premier ?", r: "Non : il n'a qu'un seul diviseur positif." },
      { q: "Seul nombre premier pair", r: "2." },
      { q: "Comment tester si n est premier ?", r: "Vérifier qu'aucun nombre premier p avec p² ≤ n ne divise n." },
      { q: "Combien y a-t-il de nombres premiers ?", r: "Une infinité." },
      { q: "Décomposition de 360", r: "2³ × 3² × 5." },
      { q: "Nombre de diviseurs de p^a × q^b", r: "(a + 1)(b + 1)." },
      { q: "PGCD avec les décompositions", r: "Produit des facteurs communs, chacun avec le plus petit exposant." },
      { q: "Si un premier p divise ab", r: "Alors p divise a ou p divise b." },
      { q: "Petit théorème de Fermat", r: "Si p est premier et ne divise pas a, alors a^(p − 1) ≡ 1 [p]." },
      { q: "Autre forme du petit théorème de Fermat", r: "Pour tout entier a et tout premier p : a^p ≡ a [p]." },
      { q: "Reste de 3^100 dans la division par 7", r: "4, car 3⁶ ≡ 1 [7] et 3^100 ≡ 3⁴ = 81 ≡ 4 [7]." },
      { q: "Lien entre RSA et nombres premiers", r: "Il est facile de multiplier deux grands premiers, très long de retrouver les facteurs du produit." },
    ],
    quiz: [
      { q: "Lequel de ces nombres est premier ?",
        choix: ["97", "91", "87", "51"],
        bonne: 0, niv: 2,
        expl: "91 = 7 × 13, 87 = 3 × 29, 51 = 3 × 17. 97 n'est divisible ni par 2, 3, 5 ni 7." },
      { q: "Pour montrer que 143 est premier ou non, jusqu'où faut-il tester les diviseurs premiers ?",
        choix: ["Jusqu'à 143", "Jusqu'à 11", "Jusqu'à 71", "Jusqu'à 7"],
        bonne: 1, niv: 2,
        expl: "On teste les premiers p avec p² ≤ 143, soit jusqu'à 11. Et 11 divise 143 = 11 × 13." },
      { q: "Le nombre 1 est-il premier ?",
        choix: ["Oui, il n'est divisible que par lui-même", "Oui, c'est le plus petit premier", "Non, il n'a qu'un seul diviseur", "Non, car il est impair"],
        bonne: 2, niv: 1,
        expl: "Un premier a exactement deux diviseurs positifs distincts." },
      { q: "Quelle est la décomposition en facteurs premiers de 360 ?",
        choix: ["2² × 3² × 10", "2³ × 3² × 5", "2³ × 45", "6² × 10"],
        bonne: 1, niv: 1,
        expl: "360 = 8 × 45 = 2³ × 9 × 5. Les autres contiennent des facteurs non premiers." },
      { q: "Combien 360 = 2³ × 3² × 5 a-t-il de diviseurs positifs ?",
        choix: ["6", "12", "24", "10"],
        bonne: 2, niv: 2,
        expl: "(3 + 1)(2 + 1)(1 + 1) = 4 × 3 × 2 = 24." },
      { q: "Que vaut PGCD(360 ; 84) avec 84 = 2² × 3 × 7 ?",
        choix: ["24", "84", "12", "360"],
        bonne: 2, niv: 2,
        expl: "Facteurs communs avec le plus petit exposant : 2² × 3 = 12." },
      { q: "Que dit le petit théorème de Fermat, avec p premier ne divisant pas a ?",
        choix: ["a^(p − 1) ≡ 1 [p]", "a^p ≡ 1 [p]", "a^(p − 1) ≡ 0 [p]", "p^(a − 1) ≡ 1 [a]"],
        bonne: 0, niv: 1,
        expl: "La version a^p ≡ a [p] existe aussi, mais a^p ≡ 1 est faux en général." },
      { q: "Quel est le reste de 3^100 dans la division par 7 ?",
        choix: ["4", "1", "3", "2"],
        bonne: 0, niv: 3,
        expl: "Fermat : 3⁶ ≡ 1 [7]. 100 = 6 × 16 + 4, donc 3^100 ≡ 3⁴ = 81 ≡ 4 [7]." },
      { q: "Quel est le reste de 2^12 dans la division par 13 ?",
        choix: ["0", "2", "1", "12"],
        bonne: 2, niv: 2,
        expl: "13 est premier et ne divise pas 2 : 2^(13 − 1) ≡ 1 [13]." },
      { q: "Peut-on appliquer Fermat pour trouver 14^6 modulo 7 ?",
        choix: ["Oui, et le reste est 1", "Non, car 7 divise 14", "Oui, et le reste est 6", "Non, car 6 n'est pas premier"],
        bonne: 1, niv: 3,
        expl: "La condition « p ne divise pas a » n'est pas remplie. En fait 14^6 ≡ 0 [7]." },
      { q: "p est premier et divise 15n. Que peut-on dire ?",
        choix: ["p divise 3, 5 ou n", "p divise n", "p vaut 3 ou 5", "p divise 15 et n"],
        bonne: 0, niv: 3,
        expl: "p divise 3 × 5 × n, donc l'un des facteurs. Il ne divise pas forcément n." },
      { q: "Un entier n vérifie 2^(n − 1) ≡ 1 [n]. Est-il forcément premier ?",
        choix: ["Oui, d'après le petit théorème de Fermat", "Non, la réciproque de Fermat est fausse", "Oui, si n est impair", "Non, car n doit être pair"],
        bonne: 1, niv: 3,
        expl: "Contre-exemple connu : n = 341 = 11 × 31 vérifie cette congruence sans être premier." },
    ] },
  { chapitre: "maths-exp-6",
    fiche: `## Matrices et graphes

Une matrice est un tableau de nombres. Elle permet de résoudre des systèmes, de décrire un graphe et de compter les chemins entre ses sommets.

### Matrices : vocabulaire
- Une matrice de taille **n × p** a n lignes et p colonnes. On note aij le coefficient de la ligne i et de la colonne j.
- Une matrice **carrée** a autant de lignes que de colonnes. La matrice **identité** In a des 1 sur la diagonale et des 0 ailleurs.
- Une matrice **colonne** a une seule colonne, une matrice **ligne** une seule ligne.
- Dans ce chapitre, on écrit une matrice 2 × 2 ligne par ligne : A = (1 2 / 3 4) a pour première ligne 1, 2 et pour deuxième ligne 3, 4.

### Opérations
- **Somme** (même taille) : on additionne coefficient par coefficient. **Produit par un réel** : on multiplie chaque coefficient.
- **Produit A × B** : possible si le nombre de colonnes de A est égal au nombre de lignes de B. Le coefficient ligne i, colonne j est la somme des produits « ligne i de A » par « colonne j de B ».
- Exemple : (1 2 / 3 4) × (5 / 6) = (1 × 5 + 2 × 6 / 3 × 5 + 4 × 6) = (17 / 39).
- Attention : en général **A × B ≠ B × A**. Le produit n'est pas commutatif.
- A × In = In × A = A.

### Matrice inverse
- Une matrice carrée A est **inversible** s'il existe B telle que **A × B = B × A = In**. On note B = A⁻¹.
- Pour A = (a b / c d) : A est inversible si et seulement si **ad − bc ≠ 0**, et A⁻¹ = (1/(ad − bc)) × (d −b / −c a).
- Exemple : A = (2 1 / 5 3). ad − bc = 6 − 5 = 1, donc A⁻¹ = (3 −1 / −5 2).
- **Système** : un système linéaire s'écrit **AX = B**. Si A est inversible, la solution unique est **X = A⁻¹B**.

### Graphes : vocabulaire
- Un **graphe** est formé de **sommets** reliés par des **arêtes** (non orienté) ou des **arcs** (orienté).
- L'**ordre** d'un graphe est son nombre de sommets. Le **degré** d'un sommet est le nombre d'arêtes qui en partent.
- La **somme des degrés** est égale à **deux fois le nombre d'arêtes** (chaque arête compte deux fois).
- Un graphe est **complet** si chaque sommet est relié à tous les autres. Il est **connexe** s'il existe une chaîne entre deux sommets quelconques.
- Une **chaîne** (ou un chemin dans un graphe orienté) est une suite d'arêtes consécutives. Sa **longueur** est le nombre d'arêtes. Elle est **fermée** (un cycle si les arêtes sont distinctes) si elle revient au point de départ.

### Matrice d'adjacence
- Pour un graphe d'ordre n, la **matrice d'adjacence** M est la matrice n × n où **mij = 1 s'il y a une arête (ou un arc) de i vers j**, et 0 sinon.
- Pour un graphe non orienté, M est **symétrique**.
- **Nombre de chemins** : le coefficient ligne i, colonne j de **M^k** est le **nombre de chemins de longueur k** allant de i à j.
- Exemple : si le coefficient (1 ; 3) de M² vaut 2, il y a deux chemins de longueur 2 du sommet 1 au sommet 3.

### À retenir pour le bac
- Produit de matrices : ligne de la première par colonne de la seconde, et A × B ≠ B × A en général.
- Une matrice 2 × 2 est inversible si et seulement si ad − bc ≠ 0.
- Somme des degrés = 2 × nombre d'arêtes.
- Les coefficients de M^k comptent les chemins de longueur k.`,
    cartes: [
      { q: "Taille d'une matrice à 2 lignes et 3 colonnes", r: "2 × 3." },
      { q: "Condition pour calculer A × B", r: "Le nombre de colonnes de A est égal au nombre de lignes de B." },
      { q: "Le produit de matrices est-il commutatif ?", r: "Non : en général A × B ≠ B × A." },
      { q: "Qu'est-ce que la matrice identité In ?", r: "La matrice carrée avec des 1 sur la diagonale et des 0 ailleurs." },
      { q: "Définition d'une matrice inversible", r: "Il existe B telle que A × B = B × A = In ; on note B = A⁻¹." },
      { q: "Condition d'inversibilité de (a b / c d)", r: "ad − bc ≠ 0." },
      { q: "Inverse de (a b / c d)", r: "(1/(ad − bc)) × (d −b / −c a)." },
      { q: "Solution du système AX = B si A est inversible", r: "X = A⁻¹B." },
      { q: "Degré d'un sommet", r: "Le nombre d'arêtes qui partent de ce sommet." },
      { q: "Somme des degrés d'un graphe", r: "Deux fois le nombre d'arêtes." },
      { q: "Graphe complet", r: "Chaque sommet est relié à tous les autres." },
      { q: "Graphe connexe", r: "Deux sommets quelconques sont toujours reliés par une chaîne." },
      { q: "Coefficient (i ; j) de la matrice d'adjacence", r: "1 s'il y a une arête ou un arc de i vers j, 0 sinon." },
      { q: "Que compte le coefficient (i ; j) de M^k ?", r: "Le nombre de chemins de longueur k allant de i à j." },
    ],
    quiz: [
      { q: "Combien vaut (1 2 / 3 4) × (5 / 6) ?",
        choix: ["(5 12 / 15 24)", "(11 / 23)", "(17 / 39)", "(23 / 34)"],
        bonne: 2, niv: 2,
        expl: "Ligne par colonne : 1 × 5 + 2 × 6 = 17 et 3 × 5 + 4 × 6 = 39." },
      { q: "A est de taille 2 × 3 et B de taille 3 × 4. Quelle est la taille de A × B ?",
        choix: ["3 × 3", "4 × 2", "On ne peut pas les multiplier", "2 × 4"],
        bonne: 3, niv: 2,
        expl: "Le nombre de colonnes de A (3) égale le nombre de lignes de B : le résultat a 2 lignes et 4 colonnes." },
      { q: "Pour deux matrices carrées A et B de même taille, que peut-on dire en général ?",
        choix: ["A × B et B × A ne sont pas toujours égaux", "A × B est égal à B × A", "A × B est la matrice nulle", "A × B est une matrice inversible"],
        bonne: 0, niv: 1,
        expl: "Le produit de matrices n'est pas commutatif." },
      { q: "La matrice (2 4 / 1 2) est-elle inversible ?",
        choix: ["Oui, car ses coefficients sont non nuls", "Oui, son inverse est (2 1 / 4 2)", "Non, car elle n'est pas symétrique", "Non, car 2 × 2 − 4 × 1 = 0"],
        bonne: 3, niv: 2,
        expl: "ad − bc = 4 − 4 = 0 : la matrice n'est pas inversible." },
      { q: "Quel est l'inverse de A = (2 1 / 5 3) ?",
        choix: ["(−3 1 / 5 −2)", "(3 5 / 1 2)", "(3 −1 / −5 2)", "(1/2 1 / 1/5 1/3)"],
        bonne: 2, niv: 2,
        expl: "ad − bc = 6 − 5 = 1, donc A⁻¹ = (d −b / −c a). On vérifie que A × A⁻¹ = I2." },
      { q: "Un système s'écrit AX = B avec A inversible. Quelle est sa solution ?",
        choix: ["X = B × A⁻¹", "X = A⁻¹ × B", "X = B / A", "X = A × B"],
        bonne: 1, niv: 3,
        expl: "On multiplie à gauche par A⁻¹. L'ordre compte : B × A⁻¹ n'a pas de sens ici." },
      { q: "Un graphe a 5 sommets de degrés 2, 3, 3, 4 et 2. Combien a-t-il d'arêtes ?",
        choix: ["14", "10", "28", "7"],
        bonne: 3, niv: 2,
        expl: "La somme des degrés vaut 14, soit deux fois le nombre d'arêtes : 7." },
      { q: "Un graphe a des sommets de degrés 1, 2, 2 et 2. Est-ce possible ?",
        choix: ["Oui, c'est une chaîne de 4 sommets", "Non, la somme des degrés serait impaire", "Oui, c'est un cycle de 4 sommets", "Non, car un degré vaut 1"],
        bonne: 1, niv: 3,
        expl: "La somme des degrés vaut toujours deux fois le nombre d'arêtes, donc un nombre pair. Ici 7 est impair." },
      { q: "Que vaut le coefficient (i ; j) de la matrice d'adjacence d'un graphe ?",
        choix: ["Le degré du sommet i", "1 s'il y a une arête de i vers j, 0 sinon", "La longueur du plus court chemin de i à j", "Le nombre total d'arêtes du graphe"],
        bonne: 1, niv: 1,
        expl: "C'est la définition de la matrice d'adjacence." },
      { q: "Le coefficient (2 ; 4) de M³ vaut 5. Que signifie ce nombre ?",
        choix: ["Il y a 3 chemins de longueur 5 de 2 à 4", "La distance de 2 à 4 vaut 5", "Le sommet 2 a pour degré 5", "Il y a 5 chemins de longueur 3 de 2 à 4"],
        bonne: 3, niv: 2,
        expl: "Le coefficient (i ; j) de M^k compte les chemins de longueur k de i à j." },
      { q: "Combien d'arêtes a un graphe complet à 5 sommets ?",
        choix: ["10", "20", "5", "25"],
        bonne: 0, niv: 3,
        expl: "Chaque sommet a degré 4 : la somme des degrés vaut 20, donc 10 arêtes (c'est aussi 2 parmi 5)." },
      { q: "La matrice d'adjacence d'un graphe non orienté est toujours :",
        choix: ["symétrique", "inversible", "diagonale", "remplie de 1"],
        bonne: 0, niv: 1,
        expl: "Une arête entre i et j donne un 1 en (i ; j) et en (j ; i)." },
    ] },
  { chapitre: "maths-exp-7",
    fiche: `## Chaînes de Markov et suites de matrices

Ce chapitre utilise les matrices pour suivre une évolution étape par étape : un système qui change d'état au hasard (chaîne de Markov), ou des suites liées entre elles (suites de matrices colonnes).

### Graphe probabiliste
- Un **graphe probabiliste** est un graphe orienté où chaque arc est pondéré par une **probabilité** de passer d'un état à un autre.
- La **somme des poids** des arcs qui partent d'un sommet vaut **1**.
- Exemple : un élève révise (R) ou non (N). S'il révise une semaine, il révise la suivante avec la probabilité 0,7 ; sinon, avec la probabilité 0,4.

### Chaîne de Markov et matrice de transition
- Une **chaîne de Markov** est une suite de variables aléatoires (Xn) où l'état suivant ne dépend que de l'**état présent**.
- La **matrice de transition** P a pour coefficient ligne i, colonne j la probabilité de passer de i à j : **pij = P(X(n+1) = j sachant Xn = i)**.
- **La somme de chaque ligne vaut 1.**
- Dans l'exemple : P = (0,7 0,3 / 0,4 0,6), la première ligne correspondant à l'état R.

### Évolution de la distribution
- La **distribution** à l'étape n est la matrice **ligne** πn = (P(Xn = R) ; P(Xn = N)).
- **π(n+1) = πn × P**, et donc **πn = π0 × P^n**.
- Exemple : l'élève révise la semaine 0 : π0 = (1 ; 0). π1 = (0,7 ; 0,3). π2 = π1 × P = (0,7 × 0,7 + 0,3 × 0,4 ; 0,7 × 0,3 + 0,3 × 0,6) = (0,61 ; 0,39).
- Le coefficient (i ; j) de **P^n** est la probabilité de passer de i à j en n étapes.

### Distribution invariante (état stable)
- Une distribution π est **invariante** si **π × P = π**, avec des coefficients positifs de somme 1.
- Exemple : (a ; b) × P = (a ; b) et a + b = 1. La première coordonnée donne 0,7a + 0,4b = a, soit 0,3a = 0,4b. Avec b = 1 − a : a = 4/7 et b = 3/7.
- Pour une matrice 2 × 2 dont les coefficients sont tous strictement compris entre 0 et 1, πn **converge** vers cette distribution invariante, quel que soit π0. À long terme, l'élève révise environ 4 semaines sur 7.

### Suites de matrices colonnes
- Deux suites liées, comme u(n+1) = 2un + vn et v(n+1) = un + 3vn, s'écrivent avec **U(n) = (un / vn)** : **U(n+1) = A × U(n)**, avec A = (2 1 / 1 3).
- On en déduit **U(n) = A^n × U(0)**.
- Si **U(n+1) = A U(n) + B**, on cherche une matrice colonne **C** telle que **C = AC + B** (un « point fixe »). Alors V(n) = U(n) − C vérifie **V(n+1) = A V(n)**, donc **U(n) = A^n (U(0) − C) + C**.
- Pour trouver C : (I − A) C = B, donc C = (I − A)⁻¹ B si I − A est inversible.

### Calculer A^n
- À la calculatrice pour une valeur de n donnée.
- Pour une formule, on montre souvent par récurrence une expression de A^n proposée par l'énoncé. Exemple : si A = (1 1 / 0 1), alors A^n = (1 n / 0 1).

### À retenir pour le bac
- Dans P, la ligne i donne les probabilités de partir de i : chaque ligne a pour somme 1.
- La distribution est une matrice ligne et π(n+1) = πn × P (dans cet ordre).
- État stable : π P = π et somme des coefficients égale à 1.
- U(n+1) = A U(n) + B : chercher C avec C = AC + B, puis U(n) = A^n (U(0) − C) + C.`,
    cartes: [
      { q: "Qu'est-ce qu'un graphe probabiliste ?", r: "Un graphe orienté dont les arcs portent des probabilités ; les poids sortant d'un sommet ont pour somme 1." },
      { q: "Propriété d'une chaîne de Markov", r: "L'état suivant ne dépend que de l'état présent, pas du passé." },
      { q: "Coefficient pij de la matrice de transition", r: "La probabilité de passer de l'état i à l'état j." },
      { q: "Somme des coefficients d'une ligne de P", r: "1." },
      { q: "Relation entre deux distributions successives", r: "π(n+1) = πn × P, avec πn en ligne." },
      { q: "Distribution à l'étape n", r: "πn = π0 × P^n." },
      { q: "Que donne le coefficient (i ; j) de P^n ?", r: "La probabilité de passer de i à j en n étapes." },
      { q: "Définition d'une distribution invariante", r: "π × P = π, avec des coefficients positifs de somme 1." },
      { q: "Distribution invariante pour P = (0,7 0,3 / 0,4 0,6)", r: "(4/7 ; 3/7)." },
      { q: "Écriture matricielle de u(n+1) = 2un + vn et v(n+1) = un + 3vn", r: "U(n+1) = A U(n) avec A = (2 1 / 1 3) et U(n) = (un / vn)." },
      { q: "Si U(n+1) = A U(n), que vaut U(n) ?", r: "A^n × U(0)." },
      { q: "Méthode pour U(n+1) = A U(n) + B", r: "Trouver C avec C = AC + B, puis U(n) = A^n (U(0) − C) + C." },
      { q: "A^n pour A = (1 1 / 0 1)", r: "(1 n / 0 1), à montrer par récurrence." },
    ],
    quiz: [
      { q: "Dans une matrice de transition, que vaut la somme des coefficients de chaque ligne ?",
        choix: ["0", "Le nombre d'états", "1", "2"],
        bonne: 2, niv: 1,
        expl: "La ligne i donne toutes les probabilités de quitter i : leur somme vaut 1." },
      { q: "P = (0,7 0,3 / 0,4 0,6) et π0 = (1 ; 0). Que vaut π1 ?",
        choix: ["(0,7 ; 0,4)", "(0,4 ; 0,6)", "(1 ; 0)", "(0,7 ; 0,3)"],
        bonne: 3, niv: 2,
        expl: "π1 = π0 × P : on obtient la première ligne de P." },
      { q: "Avec la même matrice P et π1 = (0,7 ; 0,3), que vaut la première coordonnée de π2 ?",
        choix: ["0,49", "0,55", "0,61", "0,42"],
        bonne: 2, niv: 2,
        expl: "0,7 × 0,7 + 0,3 × 0,4 = 0,49 + 0,12 = 0,61." },
      { q: "Comment passe-t-on de la distribution πn à π(n+1) ?",
        choix: ["π(n+1) = P × πn", "π(n+1) = πn + P", "π(n+1) = P^n", "π(n+1) = πn × P"],
        bonne: 3, niv: 1,
        expl: "La distribution est une matrice ligne, on la multiplie à droite par P." },
      { q: "Quelle est la distribution invariante de P = (0,7 0,3 / 0,4 0,6) ?",
        choix: ["(3/7 ; 4/7)", "(4/7 ; 3/7)", "(0,5 ; 0,5)", "(0,7 ; 0,3)"],
        bonne: 1, niv: 3,
        expl: "0,7a + 0,4b = a donne 0,3a = 0,4b ; avec a + b = 1, a = 4/7 et b = 3/7." },
      { q: "Que représente le coefficient (1 ; 2) de P³ ?",
        choix: ["La probabilité d'aller de 2 à 1 en 3 étapes", "La probabilité d'aller de 1 à 2 en 3 étapes", "Le nombre de chemins de 1 à 2", "La probabilité de rester en 1"],
        bonne: 1, niv: 2,
        expl: "Le coefficient (i ; j) de P^n donne la probabilité de passer de i à j en n étapes." },
      { q: "Pour trouver la distribution invariante (a ; b), quelle condition ne faut-il pas oublier ?",
        choix: ["a = b", "a × b = 1", "a − b = 0", "a + b = 1"],
        bonne: 3, niv: 3,
        expl: "L'équation π P = π a une infinité de solutions : c'est a + b = 1 qui fixe la distribution." },
      { q: "u(n+1) = 2un + vn et v(n+1) = un + 3vn. Quelle matrice A vérifie U(n+1) = A U(n) ?",
        choix: ["(2 1 / 3 1)", "(2 1 / 1 3)", "(1 2 / 3 1)", "(2 3 / 1 1)"],
        bonne: 1, niv: 2,
        expl: "La première ligne donne les coefficients de u(n+1), la seconde ceux de v(n+1)." },
      { q: "U(n+1) = A U(n). Quelle est l'expression de U(n) ?",
        choix: ["U(0) × A^n", "n × A × U(0)", "A × U(0)^n", "A^n × U(0)"],
        bonne: 3, niv: 1,
        expl: "Comme pour une suite géométrique, mais avec un produit de matrices à gauche." },
      { q: "U(n+1) = A U(n) + B, et C vérifie C = AC + B. Que vérifie V(n) = U(n) − C ?",
        choix: ["V(n+1) = A V(n) + B", "V(n+1) = V(n) + C", "V(n+1) = A V(n)", "V(n+1) = A + V(n)"],
        bonne: 2, niv: 3,
        expl: "V(n+1) = AU(n) + B − (AC + B) = A(U(n) − C) = A V(n)." },
      { q: "A = (1 1 / 0 1). Que vaut A³ ?",
        choix: ["(1 1 / 0 1)", "(3 3 / 0 3)", "(1 3 / 0 3)", "(1 3 / 0 1)"],
        bonne: 3, niv: 2,
        expl: "On a A^n = (1 n / 0 1) ; on peut vérifier A² = (1 2 / 0 1) puis A³ = (1 3 / 0 1)." },
      { q: "P = (0,9 0,1 / 0,2 0,8). Quel est le sens du coefficient 0,2 ?",
        choix: ["La probabilité de passer de l'état 1 à l'état 2", "La probabilité de rester dans l'état 2", "La probabilité de passer de l'état 2 à l'état 1", "La part de l'état 2 à long terme"],
        bonne: 2, niv: 2,
        expl: "Il est ligne 2, colonne 1 : départ de 2, arrivée en 1." },
    ] },
  ],
  methode: [
    {
      "id": "maths-exp-m1",
      "mat": "maths-exp",
      "titre": "Résoudre une équation diophantienne ax + by = c",
      "formules": [
        "Déterminer un couple d'entiers solution particulière",
        "Résoudre dans ℤ² l'équation…",
        "Justifier que l'équation admet des solutions"
      ],
      "vu": [
        "Exercice classique des contrôles d'arithmétique, aussi présent dans les sujets d'entraînement d'Eduscol"
      ],
      "pts": "Souvent 4 à 6 points",
      "attendu": "Justifier l'existence de solutions avec le PGCD (théorème de Bézout), trouver une solution particulière, puis utiliser le théorème de Gauss pour obtenir toutes les solutions, et vérifier.",
      "etapes": [
        "Calculer PGCD(a ; b) avec l'algorithme d'Euclide",
        "Vérifier que ce PGCD divise c (sinon, aucune solution)",
        "Trouver une solution particulière (x0 ; y0), à la main ou en remontant Euclide",
        "Soustraire : a(x − x0) = −b(y − y0)",
        "Appliquer le théorème de Gauss (a et b premiers entre eux, après simplification)",
        "Écrire x = x0 + bk et y = y0 − ak, k entier, puis vérifier"
      ],
      "mots": [
        "PGCD",
        "algorithme d'Euclide",
        "théorème de Bézout",
        "premiers entre eux",
        "théorème de Gauss",
        "solution particulière",
        "k ∈ ℤ"
      ],
      "pieges": [
        "Oublier de diviser par le PGCD avant d'appliquer Gauss",
        "Se tromper de signe dans y = y0 − ak",
        "Ne pas vérifier la réciproque",
        "Appliquer Gauss sans dire que les nombres sont premiers entre eux"
      ],
      "cas": "On considère l'équation (E) : 5x + 3y = 1, où x et y sont des entiers relatifs.",
      "question": "Résoudre (E) dans ℤ².",
      "modele": "PGCD(5 ; 3) = 1, qui divise 1 : (E) a des solutions. Le couple (2 ; −3) est solution car 10 − 9 = 1. Si (x ; y) est solution, 5x + 3y = 5 × 2 + 3 × (−3), donc 5(x − 2) = −3(y + 3) = 3(−y − 3). Ainsi 3 divise 5(x − 2), et comme 3 et 5 sont premiers entre eux, 3 divise x − 2 (théorème de Gauss) : x = 2 + 3k, k entier. En remplaçant : 5 × 3k = −3(y + 3), donc y = −3 − 5k. Réciproquement, 5(2 + 3k) + 3(−3 − 5k) = 10 + 15k − 9 − 15k = 1. Les solutions sont les couples (2 + 3k ; −3 − 5k), k ∈ ℤ.",
      "grille": [
        "L'existence est justifiée par le PGCD",
        "Une solution particulière juste est donnée",
        "Le théorème de Gauss est cité avec ses hypothèses",
        "La forme générale est juste",
        "La réciproque est vérifiée"
      ]
    },
    {
      "id": "maths-exp-m2",
      "mat": "maths-exp",
      "titre": "Nombres complexes : forme exponentielle et géométrie",
      "formules": [
        "Écrire z sous forme exponentielle",
        "Calculer z^n",
        "Montrer que le triangle ABC est rectangle (ou isocèle, ou équilatéral)",
        "Déterminer l'ensemble des points M tels que…"
      ],
      "vu": [
        "Exercice classique des contrôles sur les nombres complexes"
      ],
      "pts": "Souvent 4 à 6 points",
      "attendu": "Calculer module et argument avec soin, passer de la forme algébrique à la forme exponentielle, utiliser les propriétés (produit, puissance, quotient), puis traduire une question de géométrie avec les affixes.",
      "etapes": [
        "Calculer le module ∣z∣ = √(a² + b²)",
        "Écrire z = ∣z∣ (cos θ + i sin θ) et reconnaître θ avec les valeurs remarquables",
        "En déduire z = r e^(iθ)",
        "Pour une puissance : z^n = r^n e^(inθ), puis revenir à la forme algébrique si demandé",
        "En géométrie : AB = ∣zB − zA∣, et un angle se lit sur arg((zC − zA)/(zB − zA))"
      ],
      "mots": [
        "module",
        "argument",
        "forme exponentielle",
        "formule de Moivre",
        "affixe",
        "à 2π près"
      ],
      "pieges": [
        "Oublier « à 2π près » pour un argument",
        "Prendre le mauvais angle (confondre π/3 et 2π/3 selon le signe)",
        "Calculer ∣a + bi∣ comme a + b",
        "Oublier de simplifier e^(inθ) avec la périodicité"
      ],
      "cas": "On considère le nombre complexe z = 1 + i√3.",
      "question": "Écrire z sous forme exponentielle, puis calculer z³.",
      "modele": "∣z∣ = √(1 + 3) = 2. Donc z = 2 (1/2 + i √3/2). On cherche θ avec cos θ = 1/2 et sin θ = √3/2 : θ = π/3 (à 2π près). Donc z = 2 e^(iπ/3). Alors z³ = 2³ e^(iπ) = 8 × (−1) = −8.",
      "grille": [
        "Le module est juste",
        "Le cosinus et le sinus sont identifiés",
        "L'argument π/3 est donné à 2π près",
        "La forme exponentielle est écrite",
        "z³ = −8 est obtenu avec la formule de Moivre"
      ]
    },
    {
      "id": "maths-exp-m3",
      "mat": "maths-exp",
      "titre": "Graphe probabiliste et état stable",
      "formules": [
        "Représenter la situation par un graphe probabiliste",
        "Donner la matrice de transition P",
        "Calculer la probabilité d'être dans l'état A après 3 étapes",
        "Déterminer la distribution invariante"
      ],
      "vu": [
        "Exercice classique des contrôles sur les chaînes de Markov"
      ],
      "pts": "Souvent 4 à 6 points",
      "attendu": "Un graphe juste, une matrice de transition bien orientée (la somme de chaque ligne vaut 1), la relation π(n+1) = π(n) × P, et la résolution de π = π P avec la condition que la somme des coefficients vaut 1.",
      "etapes": [
        "Nommer les états et dessiner le graphe avec les probabilités",
        "Écrire P : ligne i, colonne j = probabilité d'aller de i à j",
        "Vérifier que chaque ligne a pour somme 1",
        "Calculer π(n) = π(0) × P^n à la calculatrice",
        "Pour l'état stable : écrire π = π P et a + b = 1, résoudre le système"
      ],
      "mots": [
        "graphe probabiliste",
        "matrice de transition",
        "distribution initiale",
        "distribution invariante",
        "état stable"
      ],
      "pieges": [
        "Écrire la matrice en colonnes au lieu de lignes",
        "Oublier la condition a + b = 1",
        "Calculer P × π au lieu de π × P avec π en ligne"
      ],
      "cas": "Chaque semaine, un élève révise ou non. S'il a révisé une semaine, il révise la suivante avec la probabilité 0,7. S'il n'a pas révisé, il révise la suivante avec la probabilité 0,4.",
      "question": "Donner la matrice de transition et la distribution invariante.",
      "modele": "États R (révise) et N (ne révise pas). P = (0,7 0,3 / 0,4 0,6), où la première ligne correspond à R. Une distribution invariante (a ; b) vérifie (a ; b) × P = (a ; b) et a + b = 1. La première coordonnée donne 0,7a + 0,4b = a, soit 0,4b = 0,3a. Avec b = 1 − a : 0,4 − 0,4a = 0,3a, donc a = 0,4/0,7 = 4/7 et b = 3/7. À long terme, l'élève révise environ 4 semaines sur 7.",
      "grille": [
        "Les états sont nommés",
        "La matrice est juste et ses lignes ont pour somme 1",
        "L'équation π P = π est posée",
        "La condition a + b = 1 est utilisée",
        "Le résultat 4/7 et 3/7 est interprété"
      ]
    }
  ],
  sujets: [

  ],
};
