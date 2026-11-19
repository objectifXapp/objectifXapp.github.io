// Physique-chimie et mathématiques — terminale STI2D. Sources : voir matiere.sources.
// Programme en vigueur : BO spécial n° 8 du 25 juillet 2019. Épreuve : note de service du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026).
export default {
  matiere: {
    id: 'sti2d-pcm',
    nom: 'Physique-chimie et mathématiques',
    voie: 'sti2d',
    epreuve: {"type":"ecrit","duree":180,"coef":16,"quand":"juin","note":"Écrit de 3 heures, calculatrice en mode examen autorisée. Trois à cinq exercices indépendants : au moins un mêle physique-chimie et mathématiques, les autres portent sur une seule discipline. Barème des sujets 2025 et 2026 : physique-chimie 14 points, mathématiques 6 points."},
    sources: [
      "https://www.education.gouv.fr/bo/19/Special8/MENE1921261A.htm",
      "https://www.education.gouv.fr/bo/2026/Special4/MENE2622647N",
      "https://www.education.gouv.fr/bo/20/Special2/MENE2001094N.htm",
      "https://www.sujetdebac.fr/annales-pdf/2026/sti2d-spe-physique-chimie-mathematiques-2026-metropole-sujet-officiel.pdf",
      "https://www.freemaths.fr/sujets-du-bac/baccalaureat-technologique/sti2d/physique-chimie-et-mathematiques/annees/annee-2025/metropole/sujet-1-et-correction/bac-physique-chimie-et-mathematiques-metropole-2025-voie-technologique-sti2d-sujet-1.pdf",
    ],
    chapitres: [
      { id: "sti2d-pcm-1", t: "Nombres complexes", theme: "Mathématiques" },
      { id: "sti2d-pcm-2", t: "Fonctions logarithme et exponentielle", theme: "Mathématiques" },
      { id: "sti2d-pcm-3", t: "Primitives et calcul intégral", theme: "Mathématiques" },
      { id: "sti2d-pcm-4", t: "Équations différentielles", theme: "Mathématiques" },
      { id: "sti2d-pcm-5", t: "Mesures et incertitudes", theme: "Mesure et incertitudes" },
      { id: "sti2d-pcm-6", t: "Énergie électrique et régime sinusoïdal", theme: "Énergie" },
      { id: "sti2d-pcm-7", t: "Énergie thermique et transferts", theme: "Énergie" },
      { id: "sti2d-pcm-8", t: "Mouvement, forces, énergie mécanique et pression", theme: "Énergie" },
      { id: "sti2d-pcm-9", t: "Combustions, oxydoréduction et piles", theme: "Matière et matériaux" },
      { id: "sti2d-pcm-10", t: "Acides et bases, radioactivité", theme: "Matière et matériaux" },
      { id: "sti2d-pcm-11", t: "Ondes, son, lumière et transmission de l'information", theme: "Ondes et signaux" },
    ],
  },
  paquets: [
  { chapitre: "sti2d-pcm-1",
    fiche: `## Nombres complexes

Les nombres complexes servent en STI2D à décrire des grandeurs qui ont à la fois une **taille** et un **décalage** : une tension sinusoïdale, une impédance. Au bac, on demande surtout de passer d'une forme à l'autre.

### Forme algébrique
- Un nombre complexe s'écrit **z = a + ib**, avec a et b réels et **i² = −1**.
- a est la **partie réelle** Re(z), b la **partie imaginaire** Im(z).
- Le **conjugué** de z = a + ib est **z̄ = a − ib**.
- Calculs : on développe comme d'habitude, en remplaçant i² par −1. Exemple : (2 + i)(3 − i) = 6 − 2i + 3i − i² = 7 + i.
- Pour diviser, on multiplie en haut et en bas par le conjugué du dénominateur.

### Représentation dans le plan
- Le point M(a ; b) est l'**image** de z = a + ib. Les réels sont sur l'axe horizontal, les imaginaires purs sur l'axe vertical.

### Module et argument
- **Module** : ‖z‖ = **√(a² + b²)**, la distance OM. Exemple : z = 3 + 4i a pour module 5.
- **Argument** θ : un angle (en radians) entre l'axe des réels et OM. Il vérifie **cos θ = a/‖z‖** et **sin θ = b/‖z‖**.
- Exemple : z = 1 + i. ‖z‖ = √2, cos θ = sin θ = √2/2, donc θ = π/4.
- Exemple du bac 2026 : z = −2√3 + 2i. ‖z‖ = √(12 + 4) = 4. cos θ = −√3/2 et sin θ = 1/2, donc θ = 5π/6.

### Forme trigonométrique et forme exponentielle
- **z = r(cos θ + i sin θ)**, avec r = ‖z‖.
- **z = r e^(iθ)** : c'est la même chose, écrite plus court. Exemple : 4 e^(i5π/6).
- Valeurs à connaître : cos(π/6) = √3/2, sin(π/6) = 1/2 ; cos(π/4) = sin(π/4) = √2/2 ; cos(π/3) = 1/2, sin(π/3) = √3/2.
- Repasser à la forme algébrique : a = r cos θ et b = r sin θ.

### Calculs avec la forme exponentielle
- **Produit** : r e^(iθ) × r' e^(iθ') = **rr' e^(i(θ + θ'))** : on multiplie les modules et on **additionne** les arguments.
- **Quotient** : on divise les modules et on **soustrait** les arguments.
- **Puissance** : (r e^(iθ))^n = r^n e^(inθ).
- Exemple : (2 e^(iπ/6)) × (3 e^(iπ/3)) = 6 e^(iπ/2) = 6i.

### Lien avec la physique
- Une grandeur sinusoïdale u(t) = U√2 cos(ωt + φ) est associée au complexe de module U et d'argument φ. Le déphasage entre tension et intensité est la différence de leurs arguments.

### Piège fréquent
- Pour z = −1 − i, cos θ et sin θ sont négatifs : θ = −3π/4 (ou 5π/4), pas π/4.

### À retenir pour le bac
- Module : √(a² + b²). Argument : cos θ = a/r et sin θ = b/r, puis lire l'angle sur le cercle.
- Toujours donner les deux conditions (cos et sin), pas seulement une.
- Produit : modules multipliés, arguments additionnés.
- i² = −1, à ne jamais oublier en développant.`,
    cartes: [
      { q: "Valeur de i²", r: "−1." },
      { q: "Partie réelle et partie imaginaire de z = a + ib", r: "Re(z) = a et Im(z) = b." },
      { q: "Conjugué de a + ib", r: "a − ib." },
      { q: "Module de z = a + ib", r: "√(a² + b²)." },
      { q: "Conditions sur l'argument θ de z", r: "cos θ = a/r et sin θ = b/r, avec r le module." },
      { q: "Forme exponentielle d'un complexe", r: "z = r e^(iθ), avec r le module et θ un argument." },
      { q: "Passer de r e^(iθ) à la forme algébrique", r: "a = r cos θ et b = r sin θ." },
      { q: "Produit de deux complexes en forme exponentielle", r: "On multiplie les modules et on additionne les arguments." },
      { q: "Quotient de deux complexes en forme exponentielle", r: "On divise les modules et on soustrait les arguments." },
      { q: "cos(π/6) et sin(π/6)", r: "√3/2 et 1/2." },
      { q: "Forme exponentielle de 1 + i", r: "√2 e^(iπ/4)." },
      { q: "Forme exponentielle de −2√3 + 2i", r: "4 e^(i5π/6)." },
      { q: "Comment diviser par un complexe en forme algébrique ?", r: "Multiplier le numérateur et le dénominateur par le conjugué du dénominateur." },
    ],
    quiz: [
      { q: "Combien vaut (2 + i)(3 − i) ?",
        choix: ["6 − i", "5 + i", "7 − i", "7 + i"],
        bonne: 3, niv: 2,
        expl: "6 − 2i + 3i − i² = 6 + i + 1 = 7 + i." },
      { q: "Quel est le module de z = 3 + 4i ?",
        choix: ["7", "25", "√7", "5"],
        bonne: 3, niv: 1,
        expl: "√(3² + 4²) = √25 = 5." },
      { q: "Quel est le conjugué de z = 5 − 2i ?",
        choix: ["−5 + 2i", "5 + 2i", "−5 − 2i", "2 − 5i"],
        bonne: 1, niv: 1,
        expl: "On change le signe de la partie imaginaire seulement." },
      { q: "Quel est un argument de z = 1 + i ?",
        choix: ["π/2", "π/4", "π/3", "π"],
        bonne: 1, niv: 2,
        expl: "Module √2, cos θ = sin θ = √2/2." },
      { q: "Quelle est la forme exponentielle de z = −2√3 + 2i ?",
        choix: ["4 e^(i5π/6)", "4 e^(iπ/6)", "16 e^(i5π/6)", "4 e^(−iπ/6)"],
        bonne: 0, niv: 3,
        expl: "Module √(12 + 4) = 4 ; cos θ = −√3/2 et sin θ = 1/2, donc θ = 5π/6." },
      { q: "Que vaut (2 e^(iπ/6)) × (3 e^(iπ/3)) ?",
        choix: ["5 e^(iπ/2)", "6 e^(iπ²/18)", "6 e^(iπ/2)", "6 e^(iπ/18)"],
        bonne: 2, niv: 2,
        expl: "Modules multipliés (2 × 3), arguments additionnés (π/6 + π/3 = π/2)." },
      { q: "Quelle est la forme algébrique de 2 e^(iπ/3) ?",
        choix: ["1 + i√3", "√3 + i", "2 + i√3", "1 + 2i"],
        bonne: 0, niv: 2,
        expl: "a = 2 cos(π/3) = 1 et b = 2 sin(π/3) = √3." },
      { q: "Un élève trouve cos θ = −√3/2 pour un complexe de partie imaginaire positive. Quel argument choisir ?",
        choix: ["−5π/6", "π/6", "−π/6", "5π/6"],
        bonne: 3, niv: 3,
        expl: "cos θ = −√3/2 donne ±5π/6 ; la partie imaginaire positive impose sin θ > 0, donc 5π/6." },
      { q: "Combien vaut i³ ?",
        choix: ["i", "−1", "1", "−i"],
        bonne: 3, niv: 2,
        expl: "i³ = i² × i = −i." },
      { q: "Que vaut le quotient (6 e^(iπ/2)) / (2 e^(iπ/6)) ?",
        choix: ["3 e^(iπ/3)", "3 e^(i2π/3)", "4 e^(iπ/3)", "12 e^(iπ/3)"],
        bonne: 0, niv: 3,
        expl: "Modules divisés (6/2 = 3), arguments soustraits (π/2 − π/6 = π/3)." },
      { q: "Où se trouve l'image d'un imaginaire pur comme 3i dans le plan ?",
        choix: ["Sur l'axe horizontal", "Sur la droite y = x", "À l'origine", "Sur l'axe vertical"],
        bonne: 3, niv: 1,
        expl: "La partie réelle est nulle : le point est (0 ; 3)." },
    ] },
  { chapitre: "sti2d-pcm-2",
    fiche: `## Fonctions logarithme et exponentielle

Ces deux fonctions décrivent les phénomènes qui évoluent « en pourcentage » : la charge d'un condensateur, le refroidissement d'une boisson, la décroissance radioactive. Le logarithme décimal sert aussi aux décibels et au pH.

### La fonction exponentielle
- **e^0 = 1**, e ≈ 2,718, et **e^x > 0** pour tout x.
- **e^(a + b) = e^a × e^b** ; e^(−a) = 1/e^a ; (e^a)^n = e^(na).
- **(e^x)' = e^x** ; **(e^(kx))' = k e^(kx)** ; plus généralement (e^u)' = u' e^u.
- Limites : e^x tend vers +∞ en +∞, et **vers 0 en −∞**. Donc e^(−kt) tend vers 0 quand t tend vers +∞ (k > 0).
- Exemple du bac 2026 : T1(t) = 11,5 e^(−0,006t) + 11,5 tend vers **11,5 °C** quand t devient grand.

### Le logarithme népérien
- Pour x > 0, **ln(x)** est le nombre y tel que **e^y = x**. Donc **e^x = k ⟺ x = ln(k)** pour k > 0.
- **ln(1) = 0**, **ln(e) = 1** ; ln n'existe que pour **x > 0**.
- **ln(ab) = ln(a) + ln(b)** ; **ln(a/b) = ln(a) − ln(b)** ; **ln(a^n) = n ln(a)**.
- **(ln x)' = 1/x** : ln est croissante sur ]0 ; +∞[. (ln u)' = u'/u.
- Limites : ln(x) tend vers −∞ en 0 et vers +∞ en +∞.

### Étudier une fonction (méthode du bac)
- Dériver, factoriser, étudier le **signe de la dérivée**, en déduire les **variations**.
- Exemple du bac 2026 : g(x) = 2x + 1 + 4 ln(x) sur ]0 ; +∞[. g'(x) = 2 + 4/x = (2x + 4)/x. Pour x > 0, numérateur et dénominateur sont positifs : g est **croissante**.
- Exemple : f(x) = (8x + 1) e^(−x). f'(x) = 8 e^(−x) − (8x + 1) e^(−x) = (7 − 8x) e^(−x). Le signe est celui de 7 − 8x, car e^(−x) > 0.

### Le logarithme décimal
- **log(x) = ln(x)/ln(10)**. Il vérifie **log(10^n) = n** : log(1000) = 3, log(0,01) = −2.
- Mêmes règles de calcul que ln : log(ab) = log(a) + log(b).
- **10^x = k ⟺ x = log(k)**.
- En physique : niveau sonore **L = 10 log(I/I0)** en dB, et **pH = −log[H3O+]**.

### Résoudre des équations
- e^(−0,2t) = 0,5 ⟺ −0,2t = ln(0,5) ⟺ t = ln(0,5)/(−0,2) ≈ 3,47.
- ln(x) = 2 ⟺ x = e² ≈ 7,39.
- Diviser une inégalité par un nombre négatif (comme ln(0,5)) change son sens.

### Exemple complet de seuil
- Une boisson suit T(t) = 11,5 e^(−0,006t) + 11,5. Quand passe-t-elle sous 15 °C ? 11,5 e^(−0,006t) < 3,5 ⟺ e^(−0,006t) < 3,5/11,5 ⟺ −0,006t < ln(3,5/11,5) ⟺ t > ln(3,5/11,5)/(−0,006) ≈ 198 s. On divise par −0,006 : le sens change.

### À retenir pour le bac
- e^x > 0 : dans une dérivée de la forme (…) e^x, seul le facteur devant compte pour le signe.
- e^(−kt) tend vers 0 : une fonction A e^(−kt) + B tend vers B.
- ln défait exp, et log défait les puissances de 10.
- Vérifier que ce qui est dans ln est strictement positif.`,
    cartes: [
      { q: "Signe de e^x", r: "Strictement positif pour tout réel x." },
      { q: "Dérivée de e^(kx)", r: "k e^(kx)." },
      { q: "Dérivée de e^u", r: "u' e^u." },
      { q: "Limite de e^(−kt) en +∞ (k > 0)", r: "0." },
      { q: "Limite de A e^(−kt) + B en +∞ (k > 0)", r: "B." },
      { q: "Résoudre e^x = k (k > 0)", r: "x = ln(k)." },
      { q: "ln(1) et ln(e)", r: "0 et 1." },
      { q: "ln(ab) et ln(a^n)", r: "ln(a) + ln(b) et n ln(a)." },
      { q: "Dérivée de ln(x)", r: "1/x, sur ]0 ; +∞[." },
      { q: "Valeur de log(10^n)", r: "n." },
      { q: "Lien entre log et ln", r: "log(x) = ln(x)/ln(10)." },
      { q: "Résoudre 10^x = k (k > 0)", r: "x = log(k)." },
      { q: "Dérivée de g(x) = 2x + 1 + 4 ln(x)", r: "g'(x) = (2x + 4)/x." },
    ],
    quiz: [
      { q: "Vers quelle valeur tend T(t) = 11,5 e^(−0,006t) + 11,5 quand t tend vers +∞ ?",
        choix: ["23", "0", "11,5", "+∞"],
        bonne: 2, niv: 1,
        expl: "e^(−0,006t) tend vers 0, il reste 11,5." },
      { q: "Que vaut T(0) pour T(t) = 11,5 e^(−0,006t) + 11,5 ?",
        choix: ["11,5", "23", "0", "12,5"],
        bonne: 1, niv: 1,
        expl: "e^0 = 1, donc T(0) = 11,5 + 11,5 = 23." },
      { q: "Quelle est la dérivée de f(t) = 5 e^(−0,2t) ?",
        choix: ["−e^(−0,2t)", "5 e^(−0,2t)", "−0,2 e^(−0,2t)", "e^(−0,2t)"],
        bonne: 0, niv: 2,
        expl: "5 × (−0,2) e^(−0,2t) = −e^(−0,2t)." },
      { q: "Quelle est la solution de e^(−0,2t) = 0,5 ?",
        choix: ["t = 0,5/(−0,2)", "t = e^0,5 / 0,2", "t = −0,2 ln(0,5)", "t = ln(0,5)/(−0,2), environ 3,47"],
        bonne: 3, niv: 2,
        expl: "On applique ln : −0,2t = ln(0,5), puis on divise par −0,2." },
      { q: "g(x) = 2x + 1 + 4 ln(x) sur ]0 ; +∞[. Quel est le sens de variation de g ?",
        choix: ["Décroissante", "Croissante puis décroissante", "Croissante", "Constante"],
        bonne: 2, niv: 2,
        expl: "g'(x) = (2x + 4)/x est positive pour x > 0." },
      { q: "f(x) = (8x + 1) e^(−x). Quelle est l'expression de f'(x) ?",
        choix: ["(7 − 8x) e^(−x)", "8 e^(−x)", "(8x + 9) e^(−x)", "−(8x + 1) e^(−x)"],
        bonne: 0, niv: 3,
        expl: "(uv)' = 8 e^(−x) + (8x + 1)(−e^(−x)) = (7 − 8x) e^(−x)." },
      { q: "Combien vaut log(1 000) ?",
        choix: ["1 000", "3", "10", "6,9"],
        bonne: 1, niv: 1,
        expl: "1 000 = 10³. 6,9 est environ ln(1 000), pas log." },
      { q: "Quelle est la solution de ln(x) = 2 ?",
        choix: ["x = 2/e", "x = ln(2)", "x = 100", "x = e², environ 7,39"],
        bonne: 3, niv: 2,
        expl: "ln(x) = 2 ⟺ x = e². x = 100 serait la solution de log(x) = 2." },
      { q: "À quoi est égal ln(5) + ln(4) ?",
        choix: ["ln(20)", "ln(9)", "ln(5) × ln(4)", "20"],
        bonne: 0, niv: 1,
        expl: "ln(a) + ln(b) = ln(ab)." },
      { q: "Pourquoi le signe de (7 − 8x) e^(−x) est-il celui de 7 − 8x ?",
        choix: ["Parce que e^(−x) est négatif", "Parce que e^(−x) vaut 1", "Parce que e^(−x) est strictement positif", "Parce que 7 − 8x est positif"],
        bonne: 2, niv: 3,
        expl: "Multiplier par un nombre strictement positif ne change pas le signe." },
      { q: "Pour quels x l'expression ln(x − 2) existe-t-elle ?",
        choix: ["x ≥ 2", "x > 2", "x > 0", "x < 2"],
        bonne: 1, niv: 2,
        expl: "Il faut x − 2 > 0, strictement." },
    ] },
  { chapitre: "sti2d-pcm-3",
    fiche: `## Primitives et calcul intégral

L'intégrale sert en STI2D à calculer une **énergie** à partir d'une **puissance** (E = ∫ P(t) dt), une **valeur moyenne** (tension, puissance) ou une **aire**.

### Primitives
- F est une **primitive** de f si **F' = f**. Toutes les primitives s'écrivent F + C (C constante).
- Primitives usuelles :
- k → kx ; x → x²/2 ; x^n → x^(n+1)/(n + 1) (n ≠ −1) ; 1/x → ln(x) (x > 0).
- e^x → e^x ; **e^(kx) → (1/k) e^(kx)**.
- **cos(ωt) → (1/ω) sin(ωt)** ; **sin(ωt) → −(1/ω) cos(ωt)**.
- Pour **montrer** que F est une primitive de f (question très fréquente) : on **dérive F** et on retrouve f.
- Exemple du bac 2026 : F(x) = −(8x + 9) e^(−x). F'(x) = −8 e^(−x) + (8x + 9) e^(−x) = (8x + 1) e^(−x) = f(x).

### Intégrale
- **∫ de a à b de f(t) dt = F(b) − F(a)**, avec F une primitive de f.
- Si f est positive sur [a ; b], c'est l'**aire** sous la courbe, en unités d'aire.
- Exemple : ∫ de 0 à 2 de (8x + 1) e^(−x) dx = F(2) − F(0) = −25 e^(−2) + 9 ≈ 5,62.
- Propriétés : linéarité, relation de Chasles (∫ de a à c = ∫ de a à b + ∫ de b à c).

### Énergie et puissance
- Si P(t) est une puissance en W et t en s, l'énergie reçue entre t1 et t2 est **E = ∫ de t1 à t2 de P(t) dt**, en J.
- Si P est constante : E = P × Δt.
- Exemple : P(t) = 12 − 2t (en W) sur [0 ; 3] : E = [12t − t²] de 0 à 3 = 36 − 9 = 27 J.

### Valeur moyenne
- **μ = (1/(b − a)) × ∫ de a à b de f(t) dt**.
- La puissance moyenne est l'énergie divisée par la durée : P moy = E/Δt.
- La valeur moyenne d'un sinus ou d'un cosinus sur une période entière est **0**.
- Exemple : une puissance f(t) = 12,25 − 13,91 sin(ωt) a pour moyenne 12,25 sur un grand nombre de périodes : le terme en sinus se compense.

### Rédiger un calcul d'intégrale
- Écrire l'intégrale avec ses bornes.
- Donner une primitive (ou utiliser celle de l'énoncé).
- Écrire F(b) − F(a), puis la **valeur exacte**, puis la **valeur approchée** demandée.
- Donner l'unité (unités d'aire, J, mJ…) si le contexte en a une.

### Exemple avec une puissance sinusoïdale (bac 2025)
- Une puissance f(t) = 12,25 − 13,91 sin(ωt), en mW, a pour primitive F(t) = 12,25 t + (13,91/ω) cos(ωt). On le vérifie en dérivant : la dérivée de cos(ωt) est −ω sin(ωt).
- L'énergie sur 60 s vaut F(60) − F(0), en mJ ; comme le terme en cosinus reste petit, elle est proche de 12,25 × 60 = 735 mJ.

### À retenir pour le bac
- Vérifier une primitive : dériver.
- ∫ de a à b = F(b) − F(a), dans cet ordre.
- Énergie = intégrale de la puissance ; puissance moyenne = énergie / durée.
- Primitive de e^(kx) : (1/k) e^(kx), ne pas oublier le 1/k.`,
    cartes: [
      { q: "Définition d'une primitive F de f", r: "F' = f." },
      { q: "Comment montrer que F est une primitive de f ?", r: "Dériver F et vérifier qu'on obtient f." },
      { q: "Primitive de x^n (n ≠ −1)", r: "x^(n+1)/(n + 1)." },
      { q: "Primitive de e^(kx)", r: "(1/k) e^(kx)." },
      { q: "Primitive de cos(ωt)", r: "(1/ω) sin(ωt)." },
      { q: "Primitive de sin(ωt)", r: "−(1/ω) cos(ωt)." },
      { q: "Calcul d'une intégrale avec une primitive", r: "∫ de a à b de f = F(b) − F(a)." },
      { q: "Énergie reçue à partir de la puissance P(t)", r: "E = ∫ de t1 à t2 de P(t) dt." },
      { q: "Valeur moyenne de f sur [a ; b]", r: "(1/(b − a)) × ∫ de a à b de f(t) dt." },
      { q: "Moyenne d'un sinus sur une période entière", r: "0." },
      { q: "Puissance moyenne", r: "Énergie divisée par la durée." },
      { q: "Interprétation de ∫ de a à b de f si f ≥ 0", r: "L'aire sous la courbe, en unités d'aire." },
      { q: "Relation de Chasles", r: "∫ de a à c = ∫ de a à b + ∫ de b à c." },
    ],
    quiz: [
      { q: "Quelle est une primitive de f(x) = 6x² ?",
        choix: ["2x³", "12x", "6x³", "3x²"],
        bonne: 0, niv: 1,
        expl: "(2x³)' = 6x². 12x est la dérivée de f." },
      { q: "Quelle est une primitive de f(t) = e^(−2t) ?",
        choix: ["−2 e^(−2t)", "e^(−2t)", "(1/2) e^(−2t)", "−(1/2) e^(−2t)"],
        bonne: 3, niv: 2,
        expl: "La dérivée de −(1/2) e^(−2t) est e^(−2t)." },
      { q: "Quelle est une primitive de f(t) = cos(100t) ?",
        choix: ["100 sin(100t)", "−(1/100) sin(100t)", "(1/100) sin(100t)", "sin(100t)"],
        bonne: 2, niv: 2,
        expl: "La dérivée de sin(100t) est 100 cos(100t), d'où le facteur 1/100." },
      { q: "F(x) = −(8x + 9) e^(−x). Quelle fonction F a-t-elle pour dérivée ?",
        choix: ["−8 e^(−x)", "(8x + 1) e^(−x)", "(8x + 9) e^(−x)", "−(8x + 17) e^(−x)"],
        bonne: 1, niv: 3,
        expl: "F' = −8 e^(−x) + (8x + 9) e^(−x) = (8x + 1) e^(−x)." },
      { q: "Combien vaut ∫ de 0 à 2 de (8x + 1) e^(−x) dx, sachant que F(x) = −(8x + 9) e^(−x) ?",
        choix: ["9 − 25 e^(−2), environ 5,62", "25 e^(−2) − 9", "−25 e^(−2), environ −3,38", "9"],
        bonne: 0, niv: 3,
        expl: "F(2) − F(0) = −25 e^(−2) − (−9)." },
      { q: "Combien vaut ∫ de 1 à 3 de 4x dx ?",
        choix: ["18", "20", "24", "16"],
        bonne: 3, niv: 2,
        expl: "[2x²] de 1 à 3 = 18 − 2 = 16." },
      { q: "Une puissance P(t) = 12 − 2t (en W) est reçue de t = 0 à t = 3 s. Quelle énergie est reçue ?",
        choix: ["36 J", "27 J", "30 J", "45 J"],
        bonne: 1, niv: 3,
        expl: "[12t − t²] de 0 à 3 = 36 − 9 = 27 J." },
      { q: "Une énergie de 27 J est reçue en 3 s. Quelle est la puissance moyenne ?",
        choix: ["81 W", "9 W", "24 W", "0,11 W"],
        bonne: 1, niv: 1,
        expl: "P moy = E / Δt = 27 / 3." },
      { q: "Quelle est la valeur moyenne de sin(t) sur une période entière ?",
        choix: ["1", "0,5", "0", "√2/2"],
        bonne: 2, niv: 2,
        expl: "Les parties positive et négative se compensent." },
      { q: "Que vaut la valeur moyenne de f sur [0 ; 4] si ∫ de 0 à 4 de f = 10 ?",
        choix: ["40", "10", "6", "2,5"],
        bonne: 3, niv: 1,
        expl: "μ = 10 / (4 − 0) = 2,5." },
      { q: "Quel ordre faut-il respecter pour calculer ∫ de a à b de f ?",
        choix: ["F(a) − F(b)", "F(b) − F(a)", "F(a) + F(b)", "F(b) × F(a)"],
        bonne: 1, niv: 1,
        expl: "On soustrait la valeur en la borne du bas à celle en la borne du haut." },
    ] },
  { chapitre: "sti2d-pcm-4",
    fiche: `## Équations différentielles

En STI2D, les équations différentielles décrivent la **charge d'un condensateur**, le **refroidissement** d'un objet, la **vitesse** d'un véhicule freiné ou un **oscillateur**. Au bac, on demande surtout de **vérifier** qu'une fonction donnée est solution.

### L'équation y' + ay = b (a ≠ 0)
- On peut aussi l'écrire **y' = −ay + b**.
- **Solution constante** : y = **b/a** (on pose y' = 0).
- **Toutes les solutions** : **y(t) = C e^(−at) + b/a**, C réel.
- La **condition initiale** (par exemple y(0) = y0) donne C : **C = y0 − b/a**.
- Si a > 0, e^(−at) tend vers 0 : **y tend vers b/a** (régime permanent).

### Exemple du bac 2026 (refroidissement)
- (E) : y' + 0,006y = 0,069, avec T1(0) = 23.
- Solution constante : 0,069/0,006 = 11,5.
- Solutions : T(t) = C e^(−0,006t) + 11,5. T(0) = C + 11,5 = 23 donne C = 11,5.
- Donc **T1(t) = 11,5 e^(−0,006t) + 11,5**, qui tend vers 11,5 °C.
- **Vérifier** que T1 est solution : T1'(t) = −0,069 e^(−0,006t). Alors T1' + 0,006 T1 = −0,069 e^(−0,006t) + 0,069 e^(−0,006t) + 0,069 = 0,069. C'est bien vérifié, et T1(0) = 23.

### Exemple : charge d'un condensateur
- RC × u' + u = E. Avec τ = RC (constante de temps) : u(t) = E(1 − e^(−t/τ)).
- Au bout de **t = τ**, u = 0,63 E ; au bout de **5τ**, le condensateur est considéré comme chargé (99 %).

### L'équation y'' + ω²y = 0
- Ses solutions sont **y(t) = A cos(ωt) + B sin(ωt)**, A et B réels.
- On peut les écrire **y(t) = Ym cos(ωt + φ)** : une oscillation de **pulsation ω**, de **période T = 2π/ω** et de fréquence f = ω/(2π).
- Deux conditions (par exemple y(0) et y'(0)) donnent A et B.
- Exemple : y'' + 25y = 0, y(0) = 2, y'(0) = 0. ω = 5, donc y(t) = 2 cos(5t), de période 2π/5 ≈ 1,26 s.
- Elle modélise un **oscillateur** sans frottement (masse et ressort, circuit LC).

### Vérifier qu'une fonction est solution (méthode)
- Calculer y' (et y'' si besoin).
- Remplacer dans l'équation et simplifier.
- Vérifier aussi la condition initiale.

### Lire le sens physique
- La solution constante b/a est la valeur finale (température de la pièce, tension du générateur, vitesse limite).
- La constante de temps 1/a indique la rapidité : au bout de 5/a, on est presque au régime permanent.
- Un modèle n'est valable que dans ses conditions : une boisson laissée 3 h finit par se réchauffer, ce que la formule de refroidissement ne prévoit pas.

### À retenir pour le bac
- y' + ay = b : C e^(−at) + b/a ; limite b/a si a > 0.
- y'' + ω²y = 0 : A cos(ωt) + B sin(ωt), période 2π/ω.
- La condition initiale se place à la fin, pour trouver la constante.
- Bien lire le signe : y' + ay = b n'est pas y' = ay + b.`,
    cartes: [
      { q: "Solutions de y' + ay = b (a ≠ 0)", r: "y(t) = C e^(−at) + b/a, C réel." },
      { q: "Solution constante de y' + ay = b", r: "b/a." },
      { q: "Limite des solutions de y' + ay = b si a > 0", r: "b/a (régime permanent)." },
      { q: "Comment trouver C ?", r: "Avec la condition initiale, par exemple y(0) = y0." },
      { q: "Solution de y' + 0,006y = 0,069 avec y(0) = 23", r: "y(t) = 11,5 e^(−0,006t) + 11,5." },
      { q: "Solutions de y'' + ω²y = 0", r: "y(t) = A cos(ωt) + B sin(ωt)." },
      { q: "Période des solutions de y'' + ω²y = 0", r: "T = 2π/ω." },
      { q: "Fréquence en fonction de la pulsation", r: "f = ω/(2π)." },
      { q: "Constante de temps d'un circuit RC", r: "τ = RC." },
      { q: "Tension d'un condensateur qui se charge", r: "u(t) = E(1 − e^(−t/τ))." },
      { q: "Valeur de u au bout de t = τ pendant la charge", r: "Environ 0,63 E, soit 63 %." },
      { q: "Durée pour considérer un condensateur chargé", r: "Environ 5τ." },
      { q: "Méthode pour vérifier qu'une fonction est solution", r: "Calculer ses dérivées, remplacer dans l'équation, vérifier la condition initiale." },
    ],
    quiz: [
      { q: "Quelles sont les solutions de y' + 2y = 10 ?",
        choix: ["y(t) = C e^(2t) + 5", "y(t) = C e^(−2t) + 10", "y(t) = C e^(−2t) + 5", "y(t) = C e^(−2t) − 5"],
        bonne: 2, niv: 2,
        expl: "Solution constante 10/2 = 5, plus C e^(−2t)." },
      { q: "y' + 0,006y = 0,069. Quelle est la solution constante ?",
        choix: ["0,069", "23", "11,5", "0,0115"],
        bonne: 2, niv: 2,
        expl: "0,069 / 0,006 = 11,5." },
      { q: "y(t) = C e^(−0,006t) + 11,5 et y(0) = 23. Que vaut C ?",
        choix: ["11,5", "23", "34,5", "46"],
        bonne: 0, niv: 2,
        expl: "C + 11,5 = 23, donc C = 11,5." },
      { q: "Pour vérifier que T(t) = 11,5 e^(−0,006t) + 11,5 est solution de y' + 0,006y = 0,069, que vaut T'(t) ?",
        choix: ["0,069 e^(−0,006t)", "11,5 e^(−0,006t)", "−0,006 e^(−0,006t)", "−0,069 e^(−0,006t)"],
        bonne: 3, niv: 3,
        expl: "11,5 × (−0,006) = −0,069." },
      { q: "Quelles sont les solutions de y'' + 25y = 0 ?",
        choix: ["A cos(25t) + B sin(25t)", "C e^(−25t)", "A cos(5t) + B sin(5t)", "A e^(5t) + B e^(−5t)"],
        bonne: 2, niv: 2,
        expl: "ω² = 25 donne ω = 5." },
      { q: "y'' + 25y = 0, y(0) = 2 et y'(0) = 0. Quelle est la solution ?",
        choix: ["2 sin(5t)", "5 cos(2t)", "2 cos(25t)", "2 cos(5t)"],
        bonne: 3, niv: 3,
        expl: "A = y(0) = 2 et y'(0) = 5B = 0, donc B = 0." },
      { q: "Quelle est la période des solutions de y'' + 25y = 0 ?",
        choix: ["5 s", "2π/5, environ 1,26 s", "2π/25, environ 0,25 s", "10π, environ 31,4 s"],
        bonne: 1, niv: 3,
        expl: "T = 2π/ω avec ω = 5." },
      { q: "Un circuit RC a R = 10 kΩ et C = 100 µF. Que vaut τ ?",
        choix: ["0,1 s", "1 s", "1 000 s", "10 s"],
        bonne: 1, niv: 2,
        expl: "τ = RC = 10 000 × 0,000 1 = 1 s." },
      { q: "Un condensateur se charge sous E = 12 V. Que vaut sa tension au bout de t = τ ?",
        choix: ["Environ 7,6 V", "12 V", "6 V", "Environ 4,4 V"],
        bonne: 0, niv: 3,
        expl: "u(τ) = 12 × (1 − e^(−1)) ≈ 12 × 0,632." },
      { q: "Vers quoi tend la solution de y' + 0,5y = 4 quand t devient grand ?",
        choix: ["4", "2", "0", "8"],
        bonne: 3, niv: 2,
        expl: "C e^(−0,5t) tend vers 0, et b/a = 4/0,5 = 8." },
      { q: "Que faut-il vérifier en plus de l'équation pour montrer qu'une fonction est « la » solution demandée ?",
        choix: ["La dérivée seconde", "La limite en +∞", "La condition initiale", "Le signe de la fonction"],
        bonne: 2, niv: 1,
        expl: "Plusieurs fonctions vérifient l'équation : la condition initiale choisit la bonne." },
    ] },
  { chapitre: "sti2d-pcm-5",
    fiche: `## Mesures et incertitudes

Toute mesure est entachée d'une incertitude. Au bac, presque chaque sujet contient une question sur l'incertitude-type, l'écriture d'un résultat ou la comparaison d'une mesure à une valeur de référence.

### Pourquoi une incertitude ?
- Si on répète une mesure, on n'obtient pas toujours la même valeur : c'est la **variabilité**.
- L'**incertitude-type** u(x) mesure cette dispersion. Plus elle est petite, plus la mesure est **précise**.

### Évaluation de type A (mesures répétées)
- On fait N mesures, on calcule leur **moyenne** x̄ et leur **écart type** σ (calculatrice ou tableur).
- **u(x̄) = σ/√N** : répéter les mesures diminue l'incertitude sur la moyenne.
- Exemple : 9 mesures, σ = 0,6 s : u = 0,6/3 = 0,2 s.

### Évaluation de type B (une seule mesure)
- On utilise la **notice** de l'appareil ou la graduation.
- Si la notice donne une précision (une « tolérance » ±p), **u = p/√3**.
- Exemple du bac 2026 : un thermomètre de précision 0,5 °C : u(T) = 0,5/√3 ≈ 0,29 °C.
- Pour une lecture sur une règle graduée : u = 1 graduation/√12 (si la lecture est faite au plus près).

### Écrire un résultat
- On écrit **x = valeur ± u(x)** avec l'unité, ou « x = valeur, avec u(x) = … ».
- On arrondit l'incertitude-type à **1 ou 2 chiffres significatifs** (par excès), puis on arrondit la valeur **au même rang**.
- Exemple : T = 23,0 °C et u(T) = 0,29 °C : on écrit **T = 23,0 °C avec u(T) = 0,3 °C**.

### Incertitude relative
- **u(x)/x**, souvent en %. Exemple : u = 0,3 °C pour 23,0 °C donne environ 1,3 %.

### Comparer à une valeur de référence : le z-score
- **z = ‖x − x_ref‖ / u(x)** : le nombre d'incertitudes-types qui séparent la mesure de la référence.
- Si **z ≤ 2**, la mesure est **compatible** avec la référence ; sinon, on cherche une cause (erreur de méthode, pertes…).
- Exemple du bac 2025 : E = 0,72 J, E mod = 0,735 J, u(E) = 0,010 J. z = 0,015/0,010 = 1,5 : accord satisfaisant.

### Chiffres significatifs
- Un résultat calculé n'a pas plus de chiffres significatifs que la donnée la moins précise.
- 0,072 a deux chiffres significatifs ; 3,00 × 10^8 en a trois.

### Lire un graphique ou un tableau
- Lire avec soin la graduation et l'unité de chaque axe.
- Repérer les points mal placés (valeurs aberrantes) avant de conclure.

### Exemple rapide
- Une balance de précision 0,1 g donne u = 0,1/√3 ≈ 0,06 g.

### À retenir pour le bac
- Une seule mesure avec une notice : u = précision/√3.
- N mesures : u = σ/√N.
- z ≤ 2 : compatible.
- Une valeur sans unité ni incertitude n'est pas un résultat complet.`,
    cartes: [
      { q: "Que mesure l'incertitude-type u(x) ?", r: "La dispersion des valeurs qu'on obtiendrait en répétant la mesure." },
      { q: "Incertitude-type sur une moyenne de N mesures", r: "u = σ/√N, avec σ l'écart type." },
      { q: "Incertitude-type à partir d'une précision p de la notice", r: "u = p/√3." },
      { q: "Incertitude-type pour une lecture sur une graduation", r: "u = 1 graduation/√12." },
      { q: "Nombre de chiffres significatifs pour u(x)", r: "1 ou 2, arrondi par excès." },
      { q: "Arrondi de la valeur mesurée", r: "Au même rang que l'incertitude-type." },
      { q: "Incertitude relative", r: "u(x)/x, souvent exprimée en %." },
      { q: "Formule du z-score", r: "z = ‖x − x_ref‖ / u(x)." },
      { q: "Critère de compatibilité avec une valeur de référence", r: "z ≤ 2." },
      { q: "Effet de répéter les mesures", r: "L'incertitude sur la moyenne diminue (division par √N)." },
      { q: "Thermomètre de précision 0,5 °C : u(T)", r: "Environ 0,29 °C, arrondi à 0,3 °C." },
      { q: "Différence entre type A et type B", r: "Type A : à partir de mesures répétées. Type B : à partir d'une seule mesure et de la notice." },
      { q: "Écriture complète d'un résultat", r: "Valeur, incertitude-type et unité, avec des arrondis cohérents." },
    ],
    quiz: [
      { q: "Un thermomètre a une précision de 0,5 °C. Quelle est l'incertitude-type u(T) ?",
        choix: ["0,5 °C", "Environ 0,87 °C", "0,25 °C", "Environ 0,29 °C"],
        bonne: 3, niv: 2,
        expl: "u = 0,5/√3 ≈ 0,289 °C." },
      { q: "On fait 9 mesures d'une durée, avec un écart type de 0,6 s. Quelle est l'incertitude-type sur la moyenne ?",
        choix: ["0,6 s", "1,8 s", "0,2 s", "5,4 s"],
        bonne: 2, niv: 2,
        expl: "u = σ/√N = 0,6/3." },
      { q: "T = 23,04 °C et u(T) = 0,29 °C. Quelle écriture est la bonne ?",
        choix: ["T = 23,0 °C avec u(T) = 0,3 °C", "T = 23,04 °C avec u(T) = 0,29 °C", "T = 23 °C avec u(T) = 0,29 °C", "T = 23,04 °C avec u(T) = 0,3 °C"],
        bonne: 0, niv: 3,
        expl: "u arrondie à un chiffre (0,3), puis la valeur au même rang (dixième)." },
      { q: "E = 0,72 J, E ref = 0,735 J et u(E) = 0,010 J. Que vaut z ?",
        choix: ["0,015", "1,5", "15", "0,67"],
        bonne: 1, niv: 2,
        expl: "z = 0,015 / 0,010 = 1,5." },
      { q: "Le z-score vaut 1,5. Que conclure ?",
        choix: ["La mesure est fausse", "Il faut refaire la mesure", "L'incertitude est trop grande", "La mesure est compatible avec la référence"],
        bonne: 3, niv: 1,
        expl: "z ≤ 2 : l'écart s'explique par l'incertitude de mesure." },
      { q: "Le z-score vaut 4. Que conclure ?",
        choix: ["La mesure est compatible avec la référence", "La mesure est très précise", "La référence est fausse", "La mesure n'est pas compatible : il faut chercher la cause de l'écart"],
        bonne: 3, niv: 2,
        expl: "z > 2 : on cherche une erreur de méthode, des pertes, un mauvais réglage." },
      { q: "Pourquoi répète-t-on une mesure plusieurs fois ?",
        choix: ["Pour diminuer l'incertitude sur la moyenne", "Pour obtenir une valeur exacte", "Pour augmenter la précision de l'appareil", "Pour changer l'unité"],
        bonne: 0, niv: 1,
        expl: "u(x̄) = σ/√N diminue quand N augmente." },
      { q: "Une longueur vaut 50,0 cm avec u = 0,5 cm. Quelle est l'incertitude relative ?",
        choix: ["2 %", "1 %", "5 %", "10 %"],
        bonne: 1, niv: 2,
        expl: "0,5 / 50,0 = 0,01, soit 1 %." },
      { q: "Combien de chiffres significatifs a le nombre 0,072 ?",
        choix: ["3", "2", "4", "1"],
        bonne: 1, niv: 2,
        expl: "Les zéros de tête ne comptent pas : 7 et 2." },
      { q: "Une évaluation de type B utilise :",
        choix: ["Un grand nombre de mesures répétées", "Une valeur de référence", "Le z-score", "Une seule mesure et la notice de l'appareil"],
        bonne: 3, niv: 1,
        expl: "Le type A repose sur des mesures répétées, le type B sur une seule mesure." },
      { q: "On multiplie 3,00 par 2,1. Combien de chiffres significatifs garder ?",
        choix: ["3", "1", "4", "2"],
        bonne: 3, niv: 3,
        expl: "Le résultat suit la donnée la moins précise : 2,1 a 2 chiffres significatifs." },
    ] },
  { chapitre: "sti2d-pcm-6",
    fiche: `## Énergie électrique et régime sinusoïdal

Le réseau électrique fonctionne en courant alternatif sinusoïdal. Ce chapitre donne les outils pour calculer des puissances, des énergies, des rendements et les pertes dans les lignes.

### Puissance, énergie, rendement
- **E = P × Δt** : en J si P en W et Δt en s ; en **kWh** si P en kW et Δt en h. **1 kWh = 3,6 × 10^6 J**.
- **Rendement** : **η = énergie (ou puissance) utile / énergie (ou puissance) reçue**, entre 0 et 1.
- Exemple : un moteur reçoit 500 W et fournit 400 W mécaniques : η = 0,8 ; 100 W sont perdus (chaleur).
- **Chaîne énergétique** : on représente les convertisseurs et les transferts. Exemple d'un panneau photovoltaïque : énergie **lumineuse** reçue → énergie **électrique** utile + énergie **thermique** perdue.

### Grandeurs sinusoïdales
- u(t) = Umax cos(ωt + φ), avec **ω = 2πf** et **T = 1/f**.
- **Valeur efficace** : **Ueff = Umax/√2** et Ieff = Imax/√2. Sur le réseau : Ueff = 230 V, donc Umax ≈ 325 V, f = 50 Hz.
- Le voltmètre en mode AC affiche la valeur efficace.

### Puissances en régime sinusoïdal
- **Puissance apparente** : **S = Ueff × Ieff**, en voltampères (**VA**).
- **Puissance active** : **P = Ueff × Ieff × cos φ**, en **W**, où φ est le déphasage entre u et i.
- **Facteur de puissance** : **k = P/S** (= cos φ en sinusoïdal), entre 0 et 1.
- Un résistor a k = 1 ; une bobine ou un moteur ont k < 1.
- Exemple du bac 2025 : S = 1,4 × 10^−2 VA, P = 1,2 × 10^−2 W, donc k ≈ 0,86.

### Pertes en ligne et transport
- Les pertes par **effet Joule** dans une ligne de résistance R valent **P_J = R × I²**.
- Pour une même puissance transportée, **augmenter la tension** diminue I, donc les pertes (divisées par 4 si U double). D'où la **haute tension** pour le transport.
- Pour la même raison, **augmenter k** (le rapprocher de 1) diminue I pour une même puissance active, donc les pertes.

### Sécurité électrique
- Le **disjoncteur** coupe en cas de surintensité ; le **disjoncteur différentiel** coupe si une partie du courant fuit (par une personne, par exemple).
- La **prise de terre** évacue un courant de fuite vers le sol.

### Dimensionner une installation
- Consommation d'une journée : **somme des P × durée** pour chaque appareil.
- Exemple : 5 ampoules de 5 W pendant 4 h : 5 × 5 × 4 = 100 Wh.
- Puissance pour faire tout fonctionner en même temps : **somme des puissances**.

### À retenir pour le bac
- E = P × Δt, avec des unités cohérentes.
- Ueff = Umax/√2 ; S = Ueff Ieff ; k = P/S.
- Pertes Joule : R I² ; haute tension et bon facteur de puissance les réduisent.
- Rendement : utile sur reçu, toujours inférieur à 1.`,
    cartes: [
      { q: "Relation entre énergie, puissance et durée", r: "E = P × Δt." },
      { q: "1 kWh en joules", r: "3,6 × 10^6 J." },
      { q: "Définition du rendement", r: "η = énergie utile / énergie reçue." },
      { q: "Valeur efficace d'une tension sinusoïdale", r: "Ueff = Umax/√2." },
      { q: "Relation entre pulsation et fréquence", r: "ω = 2πf." },
      { q: "Puissance apparente", r: "S = Ueff × Ieff, en VA." },
      { q: "Puissance active en sinusoïdal", r: "P = Ueff × Ieff × cos φ, en W." },
      { q: "Facteur de puissance", r: "k = P/S." },
      { q: "Pertes par effet Joule dans une ligne", r: "P_J = R × I²." },
      { q: "Pourquoi transporter l'électricité en haute tension ?", r: "Pour une même puissance, I est plus faible, donc les pertes R I² aussi." },
      { q: "Rôle du disjoncteur différentiel", r: "Couper le courant si une partie fuit, par exemple à travers une personne." },
      { q: "Chaîne énergétique d'un panneau photovoltaïque", r: "Énergie lumineuse reçue → énergie électrique utile + énergie thermique perdue." },
      { q: "Caractéristiques du réseau domestique", r: "Ueff = 230 V et f = 50 Hz." },
    ],
    quiz: [
      { q: "Une tension sinusoïdale a une valeur maximale de 6,0 V. Quelle est sa valeur efficace ?",
        choix: ["6,0 V", "Environ 4,2 V", "3,0 V", "Environ 8,5 V"],
        bonne: 1, niv: 2,
        expl: "Ueff = 6,0/√2 ≈ 4,24 V." },
      { q: "Ueff = 4,2 V et Ieff = 3,5 × 10^−3 A. Que vaut la puissance apparente S ?",
        choix: ["Environ 1,5 × 10^−2 VA", "Environ 1,2 × 10^−3 VA", "Environ 8,3 × 10^−4 VA", "Environ 1,5 × 10^−2 W"],
        bonne: 0, niv: 2,
        expl: "S = 4,2 × 3,5 × 10^−3 ≈ 0,0147 VA. S s'exprime en VA, pas en W." },
      { q: "P = 1,2 × 10^−2 W et S = 1,4 × 10^−2 VA. Que vaut le facteur de puissance k ?",
        choix: ["Environ 1,17", "Environ 0,86", "0,2", "Environ 1,7 × 10^−4"],
        bonne: 1, niv: 2,
        expl: "k = P/S = 1,2/1,4 ≈ 0,857." },
      { q: "Un appareil reçoit 12 mW pendant une minute. Quelle énergie reçoit-il ?",
        choix: ["12 J", "0,72 J", "720 J", "43 200 J"],
        bonne: 1, niv: 2,
        expl: "E = 0,012 × 60 = 0,72 J." },
      { q: "Pour diminuer les pertes en ligne sans changer la puissance active reçue, que faire du facteur de puissance k ?",
        choix: ["Le diminuer", "Le laisser inchangé", "Le rapprocher de 1, donc l'augmenter", "Le rendre négatif"],
        bonne: 2, niv: 3,
        expl: "Avec k plus grand, I est plus faible pour la même puissance active, donc R I² diminue." },
      { q: "Un moteur reçoit 500 W et fournit 400 W mécaniques. Quel est son rendement ?",
        choix: ["1,25", "0,8", "0,2", "100"],
        bonne: 1, niv: 1,
        expl: "η = 400/500." },
      { q: "On double la tension de transport à puissance égale. Comment évoluent les pertes Joule ?",
        choix: ["Elles sont divisées par 2", "Elles doublent", "Elles ne changent pas", "Elles sont divisées par 4"],
        bonne: 3, niv: 3,
        expl: "I est divisé par 2, et les pertes R I² par 2² = 4." },
      { q: "Un radiateur de 2 kW fonctionne 3 h. Quelle énergie consomme-t-il ?",
        choix: ["6 kWh", "0,67 kWh", "1,5 kWh", "5 kWh"],
        bonne: 0, niv: 1,
        expl: "E = 2 kW × 3 h = 6 kWh." },
      { q: "Combien vaut 2 kWh en joules ?",
        choix: ["7 200 J", "2 000 J", "7,2 × 10^6 J", "3,6 × 10^6 J"],
        bonne: 2, niv: 2,
        expl: "2 × 3,6 × 10^6 J." },
      { q: "Trois chargeurs de 40 W fonctionnent chacun 45 minutes par jour. Quelle énergie consomment-ils en tout ?",
        choix: ["90 Wh", "120 Wh", "30 Wh", "5 400 Wh"],
        bonne: 0, niv: 3,
        expl: "3 × 40 W × 0,75 h = 90 Wh." },
      { q: "Dans la chaîne énergétique d'un panneau photovoltaïque, quelle est l'énergie perdue ?",
        choix: ["L'énergie électrique", "L'énergie lumineuse", "L'énergie thermique", "L'énergie chimique"],
        bonne: 2, niv: 1,
        expl: "Le panneau reçoit de la lumière, fournit de l'électricité et s'échauffe." },
    ] },
  { chapitre: "sti2d-pcm-7",
    fiche: `## Énergie thermique et transferts

Chauffer, refroidir, isoler un bâtiment : ce chapitre revient dans presque tous les sujets (glaçons, Tiny House, canette chauffée par une bougie).

### Énergie reçue sans changement d'état
- **Q = m × c × ΔT**, avec m en kg, c la **capacité thermique massique** en J·kg⁻¹·°C⁻¹ (ou K⁻¹), ΔT = T finale − T initiale.
- Si Q > 0, le corps reçoit de l'énergie ; si Q < 0, il en cède.
- Eau liquide : c = 4,18 × 10³ J·kg⁻¹·°C⁻¹. Glace : c ≈ 2,06 × 10³ J·kg⁻¹·°C⁻¹.
- Exemple du bac 2025 : 100 g d'eau de 21,3 °C à 44,5 °C : Q = 0,100 × 4 180 × 23,2 ≈ 9,70 kJ.
- Une variation de 1 °C est égale à une variation de 1 K.

### Changement d'état
- À température constante, **Q = m × L**, avec L l'**énergie massique de changement d'état** (J·kg⁻¹).
- Fusion de la glace : L = 333 kJ·kg⁻¹.
- Exemple du bac 2026 : glaçon de 34,0 g de −18 °C à 0 °C : Q1 = 0,034 × 2,06 × 18 ≈ 1,26 kJ. Fusion : Q2 = 0,034 × 333 ≈ 11,3 kJ. Puis de 0 à 11,8 °C : Q3 = 0,034 × 4,18 × 11,8 ≈ 1,68 kJ. C'est la **fusion** qui refroidit le plus l'eau.

### Les trois modes de transfert thermique
- **Conduction** : de proche en proche dans la matière, sans déplacement de matière (une cuillère qui chauffe).
- **Convection** : par déplacement de matière dans un fluide (air chaud qui monte).
- **Rayonnement** : par ondes électromagnétiques, même dans le vide (Soleil, infrarouge).
- Le transfert va toujours **du corps chaud vers le corps froid**.

### Résistance thermique et flux
- Pour une paroi de 1 m² d'un seul matériau : **R = e/λ**, avec e l'épaisseur en m et λ la **conductivité thermique** en W·m⁻¹·°C⁻¹ ; R en m²·°C·W⁻¹.
- Plus λ est petit, plus le matériau est **isolant**. Plus e est grand, plus R est grande.
- Couches successives : les résistances **s'additionnent**. Exemple : isolant de 100 mm, λ = 0,038 : R = 0,100/0,038 ≈ 2,6.
- **Flux surfacique** : **φ = (T chaud − T froid)/R**, en W·m⁻².
- Flux total : **Φ = φ × S**, en W, avec S la surface de paroi.
- Exemple du bac 2026 : R = 3,9, écart 20 °C : φ ≈ 5,1 W·m⁻².

### Pouvoir calorifique
- Énergie libérée par la combustion d'1 kg de combustible : **PC = E/m**.
- Exemple : 9,70 kJ pour 0,31 g de paraffine : PC ≈ 3,1 × 10⁴ kJ·kg⁻¹.

### Unités
- 1 kWh = 3 600 kJ ; un écart de température en °C est égal à un écart en K.

### À retenir pour le bac
- Q = m c ΔT sans changement d'état ; Q = m L pendant un changement d'état.
- Masses en kg, et attention aux kJ.
- R = e/λ, les résistances en série s'additionnent, φ = ΔT/R, Φ = φ × S.
- Pour isoler : augmenter l'épaisseur ou choisir un λ plus petit.`,
    cartes: [
      { q: "Énergie reçue sans changement d'état", r: "Q = m × c × ΔT." },
      { q: "Capacité thermique massique de l'eau liquide", r: "4,18 × 10³ J·kg⁻¹·°C⁻¹." },
      { q: "Énergie reçue lors d'un changement d'état", r: "Q = m × L." },
      { q: "Énergie massique de fusion de la glace", r: "333 kJ·kg⁻¹." },
      { q: "Conduction", r: "Transfert de proche en proche dans la matière, sans déplacement de matière." },
      { q: "Convection", r: "Transfert par déplacement de matière dans un fluide." },
      { q: "Rayonnement", r: "Transfert par ondes électromagnétiques, possible dans le vide." },
      { q: "Sens d'un transfert thermique", r: "Du corps le plus chaud vers le plus froid." },
      { q: "Résistance thermique d'une paroi de 1 m²", r: "R = e/λ." },
      { q: "Résistances thermiques de couches successives", r: "Elles s'additionnent." },
      { q: "Flux thermique surfacique", r: "φ = (T chaud − T froid)/R, en W·m⁻²." },
      { q: "Flux thermique total à travers une surface S", r: "Φ = φ × S, en W." },
      { q: "Pouvoir calorifique", r: "Énergie libérée par la combustion d'un kilogramme de combustible." },
    ],
    quiz: [
      { q: "100 g d'eau passent de 21,3 °C à 44,5 °C. Quelle énergie reçoivent-ils ?",
        choix: ["Environ 9,70 kJ", "Environ 9,70 J", "Environ 97,0 kJ", "Environ 18,6 kJ"],
        bonne: 0, niv: 2,
        expl: "Q = 0,100 × 4 180 × 23,2 ≈ 9 698 J." },
      { q: "Quelle énergie faut-il pour faire fondre 34,0 g de glace à 0 °C ?",
        choix: ["Environ 11 300 kJ", "Environ 1,26 kJ", "Environ 11,3 kJ", "Environ 9,8 kJ"],
        bonne: 2, niv: 2,
        expl: "Q = 0,034 × 333 ≈ 11,3 kJ." },
      { q: "Un glaçon de 34,0 g passe de −18,0 °C à 0 °C (c = 2,06 kJ·kg⁻¹·°C⁻¹). Quelle énergie reçoit-il ?",
        choix: ["Environ 11,3 kJ", "Environ 1 261 kJ", "Environ 2,56 kJ", "Environ 1,26 kJ"],
        bonne: 3, niv: 3,
        expl: "Q = 0,034 × 2,06 × 18,0 ≈ 1,26 kJ." },
      { q: "Pour un glaçon, quelle étape prend le plus d'énergie à l'eau de la boisson ?",
        choix: ["La fusion", "Le réchauffement de la glace", "Le réchauffement de l'eau de fonte", "Les trois sont égales"],
        bonne: 0, niv: 2,
        expl: "La fusion demande environ 11 kJ, contre environ 1 à 2 kJ pour les autres étapes." },
      { q: "Quel mode de transfert permet à l'énergie du Soleil d'arriver sur Terre ?",
        choix: ["La conduction", "Le rayonnement", "La convection", "Le changement d'état"],
        bonne: 1, niv: 1,
        expl: "Seul le rayonnement traverse le vide." },
      { q: "Quelle est la résistance thermique de 100 mm d'isolant de conductivité 0,038 W·m⁻¹·°C⁻¹ (pour 1 m²) ?",
        choix: ["Environ 2 600 m²·°C·W⁻¹", "0,0038 m²·°C·W⁻¹", "Environ 2,6 m²·°C·W⁻¹", "Environ 0,38 m²·°C·W⁻¹"],
        bonne: 2, niv: 3,
        expl: "R = 0,100 / 0,038 ≈ 2,63. Le piège est de laisser l'épaisseur en mm." },
      { q: "Une paroi a R = 3,9 m²·°C·W⁻¹, avec 20 °C dedans et 0 °C dehors. Quel est le flux surfacique ?",
        choix: ["78 W·m⁻²", "Environ 0,20 W·m⁻²", "Environ 5,1 W·m⁻²", "23,9 W·m⁻²"],
        bonne: 2, niv: 2,
        expl: "φ = 20 / 3,9 ≈ 5,13 W·m⁻²." },
      { q: "Une paroi est formée de trois couches de résistances 0,2 ; 1,0 et 2,6. Quelle est sa résistance totale ?",
        choix: ["3,8", "2,6", "0,52", "1,27"],
        bonne: 0, niv: 2,
        expl: "Les résistances de couches successives s'additionnent." },
      { q: "Pour mieux isoler un mur, que faut-il choisir ?",
        choix: ["Un matériau de plus forte conductivité thermique", "Un matériau de plus faible conductivité thermique", "Une paroi plus mince", "Une paroi plus sombre"],
        bonne: 1, niv: 1,
        expl: "R = e/λ augmente quand λ diminue ou quand e augmente." },
      { q: "9,70 kJ sont libérés en brûlant 0,31 g de paraffine. Quel est le pouvoir calorifique mesuré ?",
        choix: ["Environ 3,0 kJ·kg⁻¹", "Environ 31 kJ·kg⁻¹", "Environ 3,0 × 10³ kJ·kg⁻¹", "Environ 3,1 × 10⁴ kJ·kg⁻¹"],
        bonne: 3, niv: 3,
        expl: "PC = 9,70 / 0,000 31 ≈ 31 290 kJ·kg⁻¹." },
      { q: "Le chauffage par un radiateur fait monter l'air chaud vers le plafond. De quel mode s'agit-il ?",
        choix: ["La convection", "La conduction", "Le rayonnement", "L'évaporation"],
        bonne: 0, niv: 1,
        expl: "Il y a déplacement de matière (l'air) : c'est la convection." },
    ] },
  { chapitre: "sti2d-pcm-8",
    fiche: `## Mouvement, forces, énergie mécanique et pression

Ce chapitre étudie un véhicule qui accélère ou freine, un ballon qui monte, un objet qui tombe, et la pression dans un fluide.

### Décrire un mouvement
- On choisit un **référentiel** (terrestre en général) et on assimile le solide à un **point** (son centre de masse).
- Vitesse moyenne : **v = d/Δt**. La vitesse instantanée est la **dérivée** de la position : v(t) = x'(t).
- Accélération : **a(t) = v'(t)**, en m·s⁻². Exemple : v passe de 0 à 20 m·s⁻¹ en 8 s : a moyenne = 2,5 m·s⁻².
- Mouvement **uniforme** : v constante ; **uniformément accéléré** : a constante.
- 1 m·s⁻¹ = 3,6 km·h⁻¹.

### Forces et principe fondamental de la dynamique
- **Poids** : **P = m × g**, vertical vers le bas, g ≈ 9,81 N·kg⁻¹.
- **Poussée d'Archimède** : verticale vers le haut, égale au poids du fluide déplacé : **Π = ρ fluide × V × g**.
- **Frottements** : opposés au mouvement.
- **Principe d'inertie** : si les forces se compensent, le mouvement est rectiligne uniforme (ou le solide est immobile).
- **Principe fondamental de la dynamique (PFD)** : **somme des forces = m × a**.
- Exemple : une voiture de 1 200 kg accélère à 2,5 m·s⁻² : la somme des forces vaut 3 000 N.

### Travail et énergie
- **Travail** d'une force constante F sur un déplacement d dans le même sens : **W = F × d** (en J). Une force opposée au mouvement a un travail **négatif**.
- **Énergie cinétique** : **Ec = ½ m v²**. Exemple : 1 200 kg à 20 m·s⁻¹ : Ec = 240 kJ.
- **Énergie potentielle de pesanteur** : **Epp = m g h**.
- **Énergie mécanique** : **Em = Ec + Epp**.
- Sans frottements, **Em se conserve**. Avec frottements, Em **diminue** : l'énergie perdue est dissipée en chaleur.
- **Théorème de l'énergie cinétique** : ΔEc = somme des travaux des forces.
- Puissance mécanique : **P = F × v**.

### Pression
- **p = F/S**, en pascals (Pa) ; 1 bar = 10⁵ Pa.
- Dans un liquide au repos : **p B − p A = ρ g (zA − zB)** : la pression augmente de ρ g h quand on descend de h.
- Exemple : dans l'eau, la pression augmente d'environ 1 bar tous les 10 m.
- Un gaz comprimé (bouteille) est à forte pression : danger d'explosion.

### Exploiter un graphique
- Pente de la courbe x(t) : la vitesse. Pente de v(t) : l'accélération.
- Une partie rectiligne de x(t) : mouvement uniforme.

### À retenir pour le bac
- Somme des forces = m a ; poids m g.
- Ec = ½ m v² (v en m·s⁻¹ !), Epp = m g h.
- Em constante sans frottements, qui diminue avec frottements.
- p = F/S et p augmente avec la profondeur.`,
    cartes: [
      { q: "Vitesse instantanée et position", r: "v(t) = x'(t), la dérivée de la position." },
      { q: "Accélération et vitesse", r: "a(t) = v'(t)." },
      { q: "Conversion de m·s⁻¹ en km·h⁻¹", r: "Multiplier par 3,6." },
      { q: "Poids d'un objet", r: "P = m × g, avec g ≈ 9,81 N·kg⁻¹." },
      { q: "Poussée d'Archimède", r: "Force verticale vers le haut égale au poids du fluide déplacé : ρ V g." },
      { q: "Principe fondamental de la dynamique", r: "Somme des forces = m × a." },
      { q: "Principe d'inertie", r: "Si les forces se compensent, le mouvement est rectiligne uniforme (ou le solide reste immobile)." },
      { q: "Énergie cinétique", r: "Ec = ½ m v²." },
      { q: "Énergie potentielle de pesanteur", r: "Epp = m g h." },
      { q: "Énergie mécanique sans frottements", r: "Elle se conserve." },
      { q: "Travail d'une force constante dans le sens du déplacement", r: "W = F × d." },
      { q: "Définition de la pression", r: "p = F/S, en pascals." },
      { q: "Variation de pression dans un liquide", r: "Elle augmente de ρ g h quand on descend d'une hauteur h." },
    ],
    quiz: [
      { q: "Une voiture passe de 0 à 20 m·s⁻¹ en 8 s. Quelle est son accélération moyenne ?",
        choix: ["2,5 m·s⁻²", "160 m·s⁻²", "0,4 m·s⁻²", "12 m·s⁻²"],
        bonne: 0, niv: 1,
        expl: "a = Δv/Δt = 20/8." },
      { q: "Une voiture de 1 200 kg roule à 20 m·s⁻¹. Quelle est son énergie cinétique ?",
        choix: ["12 kJ", "24 kJ", "120 kJ", "240 kJ"],
        bonne: 3, niv: 2,
        expl: "Ec = ½ × 1 200 × 20² = 240 000 J." },
      { q: "Une voiture de 1 000 kg roule à 72 km·h⁻¹. Quelle est son énergie cinétique ?",
        choix: ["2 592 kJ", "36 kJ", "400 kJ", "200 kJ"],
        bonne: 3, niv: 3,
        expl: "72 km·h⁻¹ = 20 m·s⁻¹, puis ½ × 1 000 × 400. Le piège est de garder les km·h⁻¹." },
      { q: "Quelle est l'énergie potentielle de pesanteur d'un objet de 2 kg à 10 m de hauteur ?",
        choix: ["20 J", "Environ 98 J", "Environ 196 J", "Environ 1,96 J"],
        bonne: 2, niv: 2,
        expl: "Epp = 2 × 9,81 × 10 ≈ 196 J." },
      { q: "Une voiture de 1 200 kg accélère à 2,5 m·s⁻². Que vaut la somme des forces ?",
        choix: ["480 N", "1 202,5 N", "3 000 N", "11 772 N"],
        bonne: 2, niv: 2,
        expl: "PFD : m × a = 1 200 × 2,5." },
      { q: "Un ballon gonflé à l'hélium monte à vitesse constante. Que peut-on dire des forces ?",
        choix: ["La poussée d'Archimède est plus faible que le poids", "Elles se compensent", "Le poids est nul", "Seule la poussée d'Archimède agit"],
        bonne: 1, niv: 3,
        expl: "Principe d'inertie : un mouvement rectiligne uniforme signifie des forces qui se compensent." },
      { q: "Un objet glisse avec des frottements. Comment évolue son énergie mécanique ?",
        choix: ["Elle se conserve", "Elle augmente", "Elle s'annule d'un coup", "Elle diminue"],
        bonne: 3, niv: 1,
        expl: "Les frottements dissipent une partie de l'énergie en chaleur." },
      { q: "Une force de 50 N s'exerce sur une surface de 0,02 m². Quelle est la pression ?",
        choix: ["1 Pa", "2,5 Pa", "100 Pa", "2 500 Pa"],
        bonne: 3, niv: 2,
        expl: "p = 50/0,02." },
      { q: "Un plongeur descend de 10 m dans l'eau (ρ = 1 000 kg·m⁻³). De combien la pression augmente-t-elle ?",
        choix: ["Environ 10 bar", "Environ 1 bar", "Environ 0,1 bar", "Elle ne change pas"],
        bonne: 1, niv: 2,
        expl: "ρ g h = 1 000 × 9,81 × 10 ≈ 98 100 Pa ≈ 1 bar." },
      { q: "Une force de freinage de 4 000 N agit sur 50 m. Quel est son travail ?",
        choix: ["−200 kJ", "200 kJ", "−80 J", "80 J"],
        bonne: 0, niv: 3,
        expl: "La force est opposée au déplacement : W = −4 000 × 50 = −200 000 J." },
      { q: "Sur le graphique de la position x(t), que représente la pente ?",
        choix: ["L'accélération", "L'énergie", "La vitesse", "La force"],
        bonne: 2, niv: 1,
        expl: "v(t) = x'(t) : la pente de x(t) est la vitesse." },
    ] },
  { chapitre: "sti2d-pcm-9",
    fiche: `## Combustions, oxydoréduction et piles

Ce chapitre sert à comprendre comment on tire de l'énergie de la matière : brûler un combustible, faire fonctionner une pile (dont la pile à combustible), et éviter la corrosion.

### Combustions
- Une **combustion** est une réaction entre un **combustible** et un **comburant** (le dioxygène O2 de l'air), qui libère de l'énergie thermique.
- **Combustion complète** d'un hydrocarbure ou d'un alcool : il se forme du **dioxyde de carbone CO2** et de l'**eau H2O**.
- Exemple (bac 2025) : propane : **C3H8 + 5 O2 → 3 CO2 + 4 H2O**.
- Méthode d'équilibrage : C d'abord, puis H, puis O.
- **Combustion incomplète** (manque d'O2) : formation de **monoxyde de carbone CO**, gaz toxique.
- Le **pouvoir calorifique** (en kJ·kg⁻¹ ou kWh·kg⁻¹) indique l'énergie libérée par kilogramme brûlé.

### Oxydoréduction
- Un **oxydant** **capte** des électrons ; un **réducteur** **cède** des électrons.
- Couple oxydant/réducteur : **Ox + n e⁻ = Red**. Exemples : H⁺/H2, O2/H2O, Cu²⁺/Cu, Zn²⁺/Zn.
- Une **oxydation** est une perte d'électrons (le réducteur est oxydé) ; une **réduction** est un gain d'électrons.
- Dans une réaction d'oxydoréduction, les électrons cédés par le réducteur sont captés par l'oxydant : on **combine** les demi-équations pour que les électrons s'annulent.

### Piles
- Une pile convertit de l'énergie **chimique** en énergie **électrique**.
- À l'**anode** : **oxydation** (électrons libérés). À la **cathode** : **réduction**.
- Exemple de la **pile à combustible** à hydrogène (bac 2026) :
- anode : H2 = 2 H⁺ + 2 e⁻ (H2 est le **réducteur**) ;
- cathode : O2 + 4 H⁺ + 4 e⁻ = 2 H2O (O2 est l'**oxydant**) ;
- bilan (on multiplie la première par 2) : **2 H2 + O2 → 2 H2O**. Elle ne rejette que de l'eau.

### Quantité d'électricité
- **Q = I × Δt** (Q en coulombs, I en A, Δt en s).
- **Q = n(e⁻) × F**, avec **F = 96 485 C·mol⁻¹** (constante de Faraday).
- Exemple : I = 2,70 A pendant 17,7 s : Q ≈ 47,8 C ; n(e⁻) ≈ 4,95 × 10⁻⁴ mol ; comme 2 e⁻ pour 1 H2, **n(H2) ≈ 2,5 × 10⁻⁴ mol**, soit une masse de 0,5 mg.
- **m = n × M** pour passer à la masse (M(H2) = 2,0 g·mol⁻¹).

### Corrosion
- La **corrosion** d'un métal est son **oxydation** (le fer rouille).
- Protection : peinture, galvanisation (couche de zinc), **anode sacrificielle** (un métal plus réducteur, comme le zinc, s'oxyde à la place du fer).

### Sécurité
- Pictogrammes : flamme = **inflammable** ; bouteille de gaz = **gaz sous pression** ; tête de mort = toxique.

### À retenir pour le bac
- Combustion complète : CO2 + H2O ; équilibrer C, puis H, puis O.
- Réducteur : cède des électrons, s'oxyde, à l'anode d'une pile.
- Q = I Δt = n(e⁻) × F.
- Pile à hydrogène : 2 H2 + O2 → 2 H2O.`,
    cartes: [
      { q: "Produits d'une combustion complète d'un hydrocarbure", r: "Dioxyde de carbone CO2 et eau H2O." },
      { q: "Équation de combustion complète du propane", r: "C3H8 + 5 O2 → 3 CO2 + 4 H2O." },
      { q: "Danger d'une combustion incomplète", r: "Formation de monoxyde de carbone CO, gaz toxique." },
      { q: "Définition d'un oxydant", r: "Une espèce qui capte des électrons." },
      { q: "Définition d'un réducteur", r: "Une espèce qui cède des électrons." },
      { q: "Oxydation", r: "Une perte d'électrons." },
      { q: "Réaction à l'anode d'une pile", r: "Une oxydation." },
      { q: "Réaction à la cathode d'une pile", r: "Une réduction." },
      { q: "Bilan de la pile à combustible à hydrogène", r: "2 H2 + O2 → 2 H2O." },
      { q: "Quantité d'électricité et intensité", r: "Q = I × Δt." },
      { q: "Lien entre Q et la quantité d'électrons", r: "Q = n(e⁻) × F, avec F = 96 485 C·mol⁻¹." },
      { q: "Corrosion d'un métal", r: "Son oxydation, comme la rouille du fer." },
      { q: "Principe de l'anode sacrificielle", r: "Un métal plus réducteur (le zinc) s'oxyde à la place du métal à protéger." },
    ],
    quiz: [
      { q: "Quelle est l'équation équilibrée de la combustion complète du propane C3H8 ?",
        choix: ["C3H8 + 5 O2 → 3 CO2 + 4 H2O", "C3H8 + O2 → CO2 + H2O", "C3H8 + 3 O2 → 3 CO2 + 4 H2O", "C3H8 + 5 O2 → 3 CO + 4 H2O"],
        bonne: 0, niv: 2,
        expl: "3 C, 8 H donc 4 H2O, puis 6 + 4 = 10 O, soit 5 O2." },
      { q: "Dans H2 = 2 H⁺ + 2 e⁻, quel est le rôle de H2 ?",
        choix: ["Réducteur", "Oxydant", "Catalyseur", "Comburant"],
        bonne: 0, niv: 2,
        expl: "H2 cède des électrons : c'est un réducteur." },
      { q: "Dans O2 + 4 H⁺ + 4 e⁻ = 2 H2O, quel est le rôle de O2 ?",
        choix: ["Réducteur", "Combustible", "Oxydant", "Produit"],
        bonne: 2, niv: 1,
        expl: "O2 capte des électrons : c'est un oxydant." },
      { q: "Quelle est l'équation bilan de la pile à combustible à hydrogène ?",
        choix: ["2 H2 + O2 → 2 H2O", "H2 + O2 → H2O", "2 H2O → 2 H2 + O2", "H2 + O2 → H2O2"],
        bonne: 0, niv: 2,
        expl: "On multiplie la demi-équation de l'anode par 2 pour échanger 4 électrons." },
      { q: "Une pile débite 2,70 A pendant 17,7 s. Quelle quantité d'électricité fournit-elle ?",
        choix: ["Environ 47,8 C", "Environ 6,6 C", "Environ 0,15 C", "Environ 20,4 C"],
        bonne: 0, niv: 2,
        expl: "Q = I × Δt = 2,70 × 17,7 ≈ 47,8 C." },
      { q: "Q = 47,8 C. Quelle est la quantité d'électrons échangés ?",
        choix: ["Environ 4,6 × 10⁶ mol", "Environ 2,0 × 10³ mol", "Environ 2,5 × 10⁻⁴ mol", "Environ 4,95 × 10⁻⁴ mol"],
        bonne: 3, niv: 3,
        expl: "n(e⁻) = Q/F = 47,8/96 485." },
      { q: "n(e⁻) = 4,95 × 10⁻⁴ mol dans une pile à hydrogène. Quelle quantité de H2 a été consommée ?",
        choix: ["Environ 2,5 × 10⁻⁴ mol", "Environ 9,9 × 10⁻⁴ mol", "Environ 4,95 × 10⁻⁴ mol", "Environ 1,2 × 10⁻⁴ mol"],
        bonne: 0, niv: 3,
        expl: "H2 = 2 H⁺ + 2 e⁻ : il faut 2 électrons par molécule de H2." },
      { q: "À quelle électrode d'une pile a lieu l'oxydation ?",
        choix: ["À la cathode", "À l'anode", "Aux deux", "Dans le pont salin"],
        bonne: 1, niv: 1,
        expl: "Anode : oxydation ; cathode : réduction." },
      { q: "Que forme une combustion incomplète, en plus du CO2 et de l'eau ?",
        choix: ["Du dioxygène", "Du dihydrogène", "Du diazote", "Du monoxyde de carbone"],
        bonne: 3, niv: 1,
        expl: "Le manque de dioxygène produit du CO, toxique." },
      { q: "Pourquoi fixe-t-on des blocs de zinc sur la coque en acier d'un bateau ?",
        choix: ["Le zinc s'oxyde à la place du fer", "Le zinc rend la coque plus légère", "Le zinc est un oxydant qui protège le fer", "Le zinc empêche l'eau de toucher la coque"],
        bonne: 0, niv: 3,
        expl: "Le zinc, plus réducteur que le fer, est oxydé en premier : c'est une anode sacrificielle." },
      { q: "Que signifie le pictogramme représentant une bouteille de gaz ?",
        choix: ["Produit toxique", "Produit corrosif", "Danger pour l'environnement", "Gaz sous pression"],
        bonne: 3, niv: 2,
        expl: "Ce pictogramme signale un gaz comprimé, qui peut exploser s'il est chauffé." },
    ] },
  { chapitre: "sti2d-pcm-10",
    fiche: `## Acides et bases, radioactivité

Deux sujets de matière qui tombent régulièrement : le **pH** d'une solution (détartrant, pluies acides, batteries) et la **radioactivité** (centrales nucléaires, datation, médecine).

### Acides et bases
- Un **acide** est une espèce capable de **céder un ion H⁺** ; une **base** peut **capter un ion H⁺**.
- Couple acide/base : **AH / A⁻**. Exemple : CH3COOH / CH3COO⁻ (acide éthanoïque, vinaigre).
- L'eau est à la fois un acide et une base : H3O⁺/H2O et H2O/HO⁻.

### Le pH
- **pH = −log[H3O⁺]**, avec [H3O⁺] en mol·L⁻¹. Donc **[H3O⁺] = 10^(−pH)**.
- À 25 °C : pH < 7 **acide** ; pH = 7 **neutre** ; pH > 7 **basique**.
- Quand [H3O⁺] est multipliée par 10, le pH **diminue de 1**.
- Exemple : [H3O⁺] = 10⁻³ mol·L⁻¹ donne pH = 3. pH = 2,5 donne [H3O⁺] ≈ 3,2 × 10⁻³ mol·L⁻¹.
- **Diluer** 10 fois un acide fort fait monter son pH de 1.
- Le pH se mesure avec un **pH-mètre** (étalonné) ou du papier pH.
- Sécurité : acides et bases concentrés sont **corrosifs** (gants, lunettes). Pour diluer, on verse l'acide dans l'eau, pas l'inverse.

### Concentration
- **Concentration en quantité de matière** : c = n/V (mol·L⁻¹). **Concentration en masse** : Cm = m/V (g·L⁻¹). Lien : Cm = c × M.
- Dilution : la quantité de matière se conserve : **c mère × V mère = c fille × V fille**.

### Le noyau et la radioactivité
- Un noyau est noté **A Z X** : **Z** protons (numéro atomique), **A** nucléons (protons + neutrons). Neutrons : N = A − Z.
- **Isotopes** : même Z, A différent (carbone 12 et carbone 14).
- La **radioactivité** est la désintégration **spontanée** et **aléatoire** d'un noyau instable, avec émission d'un rayonnement.
- **α** : émission d'un noyau d'hélium 4 2 He. **β⁻** : émission d'un électron. **β⁺** : émission d'un positon. Souvent accompagnée de rayons **γ**.
- **Lois de conservation** : on conserve le **nombre de nucléons A** et la **charge Z**.
- Exemple : uranium 238 (Z = 92) → thorium 234 (Z = 90) + hélium 4 (Z = 2).

### Décroissance radioactive
- Le nombre de noyaux restants suit **N(t) = N0 e^(−λt)**.
- **Demi-vie** t½ : durée au bout de laquelle la moitié des noyaux s'est désintégrée. **t½ = ln(2)/λ**.
- Au bout de n demi-vies, il reste **N0/2^n**. Exemple : après 3 demi-vies, il reste 1/8, soit 12,5 %.
- **Activité** A = nombre de désintégrations par seconde, en **becquerels (Bq)**.

### Fission et fusion
- **Fission** : un noyau lourd (uranium 235) se casse en deux sous l'impact d'un neutron : principe des centrales nucléaires.
- **Fusion** : deux noyaux légers s'unissent (dans le Soleil).

### À retenir pour le bac
- pH = −log[H3O⁺] ; [H3O⁺] = 10^(−pH).
- Conservation de A et de Z dans une désintégration.
- Après n demi-vies : N0/2^n.
- t½ = ln(2)/λ.`,
    cartes: [
      { q: "Définition d'un acide", r: "Une espèce capable de céder un ion H⁺." },
      { q: "Définition d'une base", r: "Une espèce capable de capter un ion H⁺." },
      { q: "Formule du pH", r: "pH = −log[H3O⁺]." },
      { q: "[H3O⁺] à partir du pH", r: "[H3O⁺] = 10^(−pH)." },
      { q: "pH d'une solution acide à 25 °C", r: "Inférieur à 7." },
      { q: "Effet d'une dilution par 10 sur le pH d'un acide fort", r: "Le pH augmente de 1." },
      { q: "Relation de dilution", r: "c mère × V mère = c fille × V fille." },
      { q: "Signification de A et Z dans un noyau", r: "A : nombre de nucléons ; Z : nombre de protons." },
      { q: "Définition d'isotopes", r: "Noyaux de même Z mais de A différents." },
      { q: "Lois de conservation dans une désintégration", r: "Conservation du nombre de nucléons A et de la charge Z." },
      { q: "Particule émise par une désintégration α", r: "Un noyau d'hélium 4." },
      { q: "Demi-vie radioactive", r: "Durée au bout de laquelle la moitié des noyaux s'est désintégrée : t½ = ln(2)/λ." },
      { q: "Proportion de noyaux restants après n demi-vies", r: "1/2^n." },
    ],
    quiz: [
      { q: "[H3O⁺] = 1,0 × 10⁻³ mol·L⁻¹. Quel est le pH ?",
        choix: ["−3", "11", "3", "0,001"],
        bonne: 2, niv: 1,
        expl: "pH = −log(10⁻³) = 3." },
      { q: "Une solution a un pH de 2,5. Que vaut [H3O⁺] ?",
        choix: ["2,5 mol·L⁻¹", "Environ 3,2 × 10⁻³ mol·L⁻¹", "Environ 3,2 × 10² mol·L⁻¹", "10⁻²⁵ mol·L⁻¹"],
        bonne: 1, niv: 2,
        expl: "[H3O⁺] = 10^(−2,5) ≈ 0,003 16." },
      { q: "Une solution a un pH de 9. Comment est-elle ?",
        choix: ["Acide", "Neutre", "Fortement acide", "Basique"],
        bonne: 3, niv: 1,
        expl: "À 25 °C, un pH supérieur à 7 indique une solution basique." },
      { q: "On dilue 10 fois une solution d'acide fort de pH 2. Quel est le nouveau pH ?",
        choix: ["1", "20", "3", "0,2"],
        bonne: 2, niv: 2,
        expl: "[H3O⁺] est divisée par 10, le pH augmente de 1." },
      { q: "On veut 100 mL d'une solution à 0,010 mol·L⁻¹ à partir d'une solution à 0,10 mol·L⁻¹. Quel volume prélever ?",
        choix: ["1 mL", "5 mL", "10 mL", "2 mL"],
        bonne: 2, niv: 2,
        expl: "V mère = 0,010 × 100 / 0,10 = 10 mL." },
      { q: "Combien de neutrons contient le noyau de carbone 14 (Z = 6) ?",
        choix: ["6", "7", "4", "8"],
        bonne: 3, niv: 1,
        expl: "N = A − Z = 14 − 6." },
      { q: "L'uranium 238 (Z = 92) subit une désintégration α. Quel noyau obtient-on ?",
        choix: ["Le noyau Z = 94, A = 242", "Le noyau de numéro atomique 90 et de nombre de nucléons 234", "Le noyau Z = 91, A = 238", "Le noyau Z = 92, A = 234"],
        bonne: 1, niv: 3,
        expl: "Conservation : A = 238 − 4 = 234 et Z = 92 − 2 = 90 (thorium)." },
      { q: "Quelle proportion de noyaux reste-t-il après 3 demi-vies ?",
        choix: ["12,5 %", "33 %", "25 %", "6,25 %"],
        bonne: 0, niv: 2,
        expl: "1/2³ = 1/8 = 0,125." },
      { q: "Un isotope a une demi-vie de 8 jours. Que vaut λ, en jour⁻¹ ?",
        choix: ["8", "Environ 5,5", "0,125", "Environ 0,087"],
        bonne: 3, niv: 3,
        expl: "λ = ln(2)/t½ = 0,693/8 ≈ 0,0866." },
      { q: "Que signifie le caractère aléatoire de la radioactivité ?",
        choix: ["Les noyaux se désintègrent en même temps", "La demi-vie change d'une mesure à l'autre", "On ne peut pas prévoir quand un noyau donné va se désintégrer", "Les noyaux stables peuvent aussi se désintégrer"],
        bonne: 2, niv: 3,
        expl: "On connaît seulement le comportement d'un grand nombre de noyaux." },
      { q: "Pour diluer un acide concentré, que faut-il faire ?",
        choix: ["Verser l'eau dans l'acide", "Verser l'acide dans l'eau", "Chauffer l'acide avant", "Ajouter une base concentrée"],
        bonne: 1, niv: 1,
        expl: "Verser l'acide dans l'eau limite les projections dues à l'échauffement." },
    ] },
  { chapitre: "sti2d-pcm-11",
    fiche: `## Ondes, son, lumière et transmission de l'information

Ondes radio d'une télécommande, Wi-Fi, fibre optique, bruit d'une machine, lumière captée par un panneau solaire : tout cela se traite avec quelques relations simples.

### Ondes : généralités
- Une **onde** propage une perturbation, et transporte de l'**énergie**, sans transporter de matière.
- **Ondes mécaniques** (son, vagues) : il leur faut un **milieu matériel**. **Ondes électromagnétiques** (radio, lumière, infrarouge, rayons X) : elles se propagent **aussi dans le vide**.
- Onde périodique : **période T** (s), **fréquence f = 1/T** (Hz), **longueur d'onde λ** (m).
- Relation fondamentale : **λ = v × T = v/f**.
- Célérité : lumière et ondes électromagnétiques dans le vide **c = 3,00 × 10⁸ m·s⁻¹** ; son dans l'air ≈ **340 m·s⁻¹**.
- Exemple (bac 2026) : f = 2,60 × 10⁹ Hz : λ = 3,00 × 10⁸ / 2,60 × 10⁹ ≈ **0,115 m**. Une antenne quart d'onde mesure λ/4 ≈ 2,9 cm.

### Le son
- Son audible : de **20 Hz à 20 kHz**. En dessous : infrasons ; au-dessus : **ultrasons**.
- Hauteur = fréquence du fondamental ; timbre = forme du signal (harmoniques).
- **Niveau d'intensité sonore** : **L = 10 log(I/I0)** en décibels (dB), avec **I0 = 10⁻¹² W·m⁻²**.
- Doubler l'intensité ajoute **3 dB** ; la multiplier par 10 ajoute **10 dB**.
- Seuil de danger : environ 85 dB en exposition prolongée.

### Le spectre électromagnétique
- Du plus énergétique au moins énergétique : rayons γ, rayons X, **UV**, **visible (400 à 800 nm)**, **infrarouge**, micro-ondes, ondes radio.
- Énergie d'un **photon** : **E = h × f = h c/λ**, avec h = 6,63 × 10⁻³⁴ J·s. Plus λ est petite, plus le photon est énergétique.
- 1 eV = 1,60 × 10⁻¹⁹ J.

### Énergie lumineuse
- Un **panneau photovoltaïque** convertit l'énergie lumineuse en énergie électrique. Rendement typique : 15 à 22 %.
- Puissance reçue : **P = éclairement (W·m⁻²) × surface**. Exemple : 1 000 W·m⁻² sur 2 m² avec un rendement de 20 % donnent 400 W électriques.

### Transmission de l'information
- Un signal est transmis par **câble**, **fibre optique** (lumière guidée par réflexion totale) ou **ondes radio** (Wi-Fi, 4G, Bluetooth).
- **Atténuation** : le signal perd de la puissance. En dB : **A = 10 log(P entrée / P sortie)**. Une fibre atténue très peu (environ 0,2 dB·km⁻¹).
- **Numérisation** : un signal analogique est converti en suite de 0 et de 1 (bits). Débit binaire en bit·s⁻¹.

### À retenir pour le bac
- λ = c/f, avec c = 3,00 × 10⁸ m·s⁻¹ pour les ondes électromagnétiques.
- L = 10 log(I/I0) ; + 3 dB quand l'intensité double.
- E = h f : photon plus énergétique quand la fréquence augmente.
- Une onde transporte de l'énergie, pas de matière.`,
    cartes: [
      { q: "Ce que transporte une onde", r: "De l'énergie, sans transport de matière." },
      { q: "Différence entre onde mécanique et onde électromagnétique", r: "L'onde mécanique a besoin d'un milieu matériel ; l'onde électromagnétique se propage aussi dans le vide." },
      { q: "Relation entre longueur d'onde, célérité et fréquence", r: "λ = v/f = v × T." },
      { q: "Célérité des ondes électromagnétiques dans le vide", r: "c = 3,00 × 10⁸ m·s⁻¹." },
      { q: "Célérité du son dans l'air", r: "Environ 340 m·s⁻¹." },
      { q: "Domaine des sons audibles", r: "De 20 Hz à 20 kHz." },
      { q: "Niveau d'intensité sonore", r: "L = 10 log(I/I0), avec I0 = 10⁻¹² W·m⁻²." },
      { q: "Effet du doublement de l'intensité sonore", r: "Le niveau augmente de 3 dB." },
      { q: "Domaine de la lumière visible", r: "De 400 à 800 nm environ." },
      { q: "Énergie d'un photon", r: "E = h × f = h c/λ." },
      { q: "Atténuation d'un signal en dB", r: "A = 10 log(P entrée / P sortie)." },
      { q: "Longueur d'onde d'une onde radio de 2,60 GHz", r: "Environ 0,115 m." },
      { q: "Principe de la fibre optique", r: "La lumière est guidée par réflexions totales successives." },
    ],
    quiz: [
      { q: "Quelle est la longueur d'onde d'une onde radio de fréquence 2,60 × 10⁹ Hz ?",
        choix: ["Environ 7,8 × 10¹⁷ m", "Environ 8,7 m", "Environ 1,15 × 10⁻⁸ m", "Environ 0,115 m"],
        bonne: 3, niv: 2,
        expl: "λ = c/f = 3,00 × 10⁸ / 2,60 × 10⁹ ≈ 0,115 m." },
      { q: "Une antenne mesure 2,9 cm pour une onde de longueur d'onde 11,5 cm. De quel type d'antenne s'agit-il ?",
        choix: ["Demi-onde", "Pleine onde", "Huitième d'onde", "Quart d'onde"],
        bonne: 3, niv: 3,
        expl: "11,5 / 2,9 ≈ 4 : L = λ/4." },
      { q: "Pourquoi le son ne se propage-t-il pas dans le vide ?",
        choix: ["C'est une onde mécanique, qui a besoin d'un milieu matériel", "Sa fréquence est trop faible", "Sa vitesse est trop faible", "Il est absorbé par la lumière"],
        bonne: 0, niv: 1,
        expl: "Les ondes électromagnétiques, elles, se propagent dans le vide." },
      { q: "Un son a une fréquence de 50 kHz. Comment le qualifier ?",
        choix: ["Infrason", "Son audible grave", "Son audible aigu", "Ultrason"],
        bonne: 3, niv: 1,
        expl: "Au-dessus de 20 kHz, ce sont des ultrasons." },
      { q: "Quel est le niveau sonore pour une intensité I = 10⁻⁴ W·m⁻² ?",
        choix: ["40 dB", "80 dB", "−80 dB", "8 dB"],
        bonne: 1, niv: 2,
        expl: "L = 10 log(10⁻⁴/10⁻¹²) = 10 × 8 = 80 dB." },
      { q: "Une machine produit 70 dB. On en ajoute une deuxième identique. Quel est le niveau total ?",
        choix: ["140 dB", "70 dB", "73 dB", "80 dB"],
        bonne: 2, niv: 3,
        expl: "L'intensité double, le niveau augmente de 3 dB." },
      { q: "Quelle est la période d'une onde de fréquence 50 Hz ?",
        choix: ["50 s", "0,5 s", "0,02 s", "2 s"],
        bonne: 2, niv: 1,
        expl: "T = 1/f = 1/50." },
      { q: "Quelle onde électromagnétique transporte des photons les plus énergétiques ?",
        choix: ["L'infrarouge", "Les ondes radio", "Le visible", "Les rayons X"],
        bonne: 3, niv: 2,
        expl: "E = h f : les rayons X ont la plus grande fréquence parmi ces ondes." },
      { q: "Un panneau de 2 m² reçoit 1 000 W·m⁻² et a un rendement de 20 %. Quelle puissance électrique fournit-il ?",
        choix: ["400 W", "200 W", "100 W", "20 W"],
        bonne: 0, niv: 2,
        expl: "P reçue = 2 000 W, puis 20 % donnent 400 W." },
      { q: "Une fibre reçoit 10 mW et en restitue 5 mW. Quelle est l'atténuation ?",
        choix: ["Environ 3 dB", "5 dB", "2 dB", "50 dB"],
        bonne: 0, niv: 3,
        expl: "A = 10 log(10/5) = 10 log(2) ≈ 3 dB." },
      { q: "Le son se propage à 340 m·s⁻¹. Quelle est la longueur d'onde d'un son de 340 Hz ?",
        choix: ["340 m", "0,5 m", "115 600 m", "1 m"],
        bonne: 3, niv: 2,
        expl: "λ = v/f = 340/340." },
    ] },
  ],
  methode: [
    {
      "id": "sti2d-pcm-m1",
      "mat": "sti2d-pcm",
      "titre": "Montrer qu'une fonction est solution d'une équation différentielle",
      "formules": [
        "Montrer que f est la solution de (E) vérifiant la condition f(0) = …",
        "Vérifier que la fonction … est solution de l'équation …",
        "Déterminer la limite de f en +∞ et l'interpréter"
      ],
      "vu": [
        "Bac 2026 métropole, exercice 1 (refroidir une boisson)",
        "Très fréquent dans l'exercice commun aux deux disciplines"
      ],
      "pts": "1 à 2 points",
      "attendu": "Calculer la dérivée de la fonction donnée, la remplacer dans l'équation et montrer, par un calcul détaillé, qu'on retrouve le second membre. Puis vérifier la condition initiale. Le correcteur veut voir chaque étape, pas seulement « on vérifie que ça marche ».",
      "etapes": [
        "Écrire la fonction et calculer sa dérivée (attention au facteur k dans e^(kt))",
        "Remplacer y et y' dans le membre de gauche de l'équation",
        "Simplifier : les termes en exponentielle s'annulent",
        "Conclure : on retrouve le second membre, donc la fonction est solution",
        "Calculer la valeur en 0 et la comparer à la condition donnée"
      ],
      "mots": [
        "dérivée",
        "solution",
        "condition initiale",
        "régime permanent",
        "limite"
      ],
      "pieges": [
        "Oublier le coefficient de t en dérivant e^(−0,006t)",
        "Vérifier l'équation mais pas la condition initiale",
        "Confondre y' + ay = b et y' = ay + b",
        "Donner une limite sans l'interpréter physiquement"
      ],
      "cas": "La température d'un four qui refroidit est modélisée par θ(t) = 180 e^(−0,05t) + 20 (t en minutes, θ en °C). On considère (E) : y' + 0,05y = 1.",
      "question": "Montrer que θ est la solution de (E) vérifiant θ(0) = 200, puis donner la limite de θ en +∞ et l'interpréter.",
      "modele": "θ'(t) = 180 × (−0,05) e^(−0,05t) = −9 e^(−0,05t). Alors θ'(t) + 0,05 θ(t) = −9 e^(−0,05t) + 9 e^(−0,05t) + 0,05 × 20 = 1. θ vérifie donc (E). De plus θ(0) = 180 × 1 + 20 = 200. Comme −0,05 < 0, e^(−0,05t) tend vers 0, donc θ(t) tend vers 20 : la température du four se rapproche de 20 °C, celle de la pièce.",
      "grille": [
        "La dérivée est juste, avec le facteur −0,05",
        "Le remplacement dans (E) est écrit en entier",
        "Les exponentielles s'annulent et on retrouve 1",
        "La condition θ(0) = 200 est vérifiée",
        "La limite 20 est justifiée et interprétée"
      ]
    },
    {
      "id": "sti2d-pcm-m2",
      "mat": "sti2d-pcm",
      "titre": "Calculer une aire ou une énergie avec une primitive donnée",
      "formules": [
        "Montrer que F est une primitive de f",
        "Écrire l'aire A sous forme d'une intégrale, puis la calculer",
        "L'intégrale … modélise l'énergie reçue : la calculer"
      ],
      "vu": [
        "Bac 2026 métropole, exercice 3, question 1",
        "Bac 2025 métropole, exercice 1 (énergie reçue en une minute)"
      ],
      "pts": "1,5 à 2 points",
      "attendu": "Dériver F pour retrouver f, écrire l'intégrale avec les bonnes bornes, calculer F(b) − F(a), donner la valeur exacte puis la valeur approchée demandée, avec l'unité.",
      "etapes": [
        "Dériver F (règle du produit si besoin) et retrouver f",
        "Écrire l'intégrale de a à b de f(x) dx",
        "Calculer F(b) et F(a) séparément",
        "Faire F(b) − F(a) : valeur exacte",
        "Donner la valeur approchée à la précision demandée et l'unité"
      ],
      "mots": [
        "primitive",
        "intégrale",
        "unité d'aire",
        "valeur exacte",
        "valeur approchée"
      ],
      "pieges": [
        "Calculer F(a) − F(b)",
        "Oublier le signe moins devant une primitive comme −(8x + 9) e^(−x)",
        "Donner seulement l'arrondi sans la valeur exacte",
        "Oublier l'unité (u.a., J, mJ)"
      ],
      "cas": "f(x) = 3 e^(−0,5x) sur [0 ; 4]. On admet que f est positive et que F(x) = −6 e^(−0,5x) est une primitive de f.",
      "question": "Vérifier que F est une primitive de f, puis calculer l'aire A sous la courbe de f entre 0 et 4.",
      "modele": "F'(x) = −6 × (−0,5) e^(−0,5x) = 3 e^(−0,5x) = f(x). A = intégrale de 0 à 4 de f(x) dx = F(4) − F(0) = −6 e^(−2) − (−6) = 6 − 6 e^(−2) ≈ 5,19 unités d'aire.",
      "grille": [
        "La dérivée de F est calculée et égale à f",
        "L'intégrale est écrite avec les bornes 0 et 4",
        "F(4) − F(0) est écrit dans le bon ordre",
        "La valeur exacte 6 − 6 e^(−2) est donnée",
        "L'arrondi 5,19 et l'unité sont donnés"
      ]
    },
    {
      "id": "sti2d-pcm-m3",
      "mat": "sti2d-pcm",
      "titre": "Écrire un nombre complexe sous forme exponentielle",
      "formules": [
        "Écrire le nombre complexe z sous forme exponentielle en détaillant les étapes",
        "Déterminer le module et un argument de z",
        "Calculer z × w sous forme exponentielle"
      ],
      "vu": [
        "Bac 2026 métropole, exercice 3, question 3"
      ],
      "pts": "1 à 1,5 point",
      "attendu": "Calculer le module, puis cos θ et sin θ, reconnaître l'angle sur le cercle trigonométrique en utilisant les deux valeurs, et écrire r e^(iθ).",
      "etapes": [
        "Repérer a et b dans z = a + ib",
        "Calculer r = √(a² + b²)",
        "Calculer cos θ = a/r et sin θ = b/r",
        "Trouver l'angle qui a ce cosinus et ce sinus (valeurs remarquables)",
        "Écrire z = r e^(iθ)"
      ],
      "mots": [
        "module",
        "argument",
        "forme exponentielle",
        "cercle trigonométrique"
      ],
      "pieges": [
        "Se servir du seul cosinus et choisir le mauvais signe d'angle",
        "Oublier la racine dans le module",
        "Confondre √3/2 et 1/2"
      ],
      "cas": "On considère z = 1 − i√3.",
      "question": "Écrire z sous forme exponentielle.",
      "modele": "r = √(1² + (−√3)²) = √(1 + 3) = 2. cos θ = 1/2 et sin θ = −√3/2. L'angle qui a ce cosinus et ce sinus est −π/3. Donc z = 2 e^(−iπ/3).",
      "grille": [
        "Le module 2 est justifié par le calcul",
        "cos θ et sin θ sont tous les deux calculés",
        "L'argument −π/3 est cohérent avec les signes",
        "L'écriture finale 2 e^(−iπ/3) est donnée"
      ]
    },
    {
      "id": "sti2d-pcm-m4",
      "mat": "sti2d-pcm",
      "titre": "Bilan thermique : énergie, changement d'état, résistance thermique",
      "formules": [
        "Calculer l'énergie thermique reçue par …",
        "Montrer que la résistance thermique totale de la paroi est …",
        "Calculer le flux thermique traversant la paroi",
        "Proposer une amélioration pour limiter les déperditions"
      ],
      "vu": [
        "Bac 2026 métropole, exercice 1 (glaçons) et exercice 2 (Tiny House)",
        "Bac 2025 métropole, exercice 2 (pouvoir calorifique de la paraffine)"
      ],
      "pts": "2 à 4 points",
      "attendu": "Choisir la bonne relation (Q = m c ΔT ou Q = m L ; R = e/λ ; φ = ΔT/R), convertir les unités (g en kg, mm en m), poser le calcul avec les valeurs, donner le résultat avec unité et chiffres significatifs adaptés.",
      "etapes": [
        "Écrire la relation littérale",
        "Convertir : masses en kg, épaisseurs en m",
        "Remplacer par les valeurs",
        "Calculer et arrondir avec l'unité",
        "Interpréter ou comparer si la question le demande"
      ],
      "mots": [
        "capacité thermique massique",
        "énergie massique de fusion",
        "conductivité thermique",
        "résistance thermique",
        "flux thermique"
      ],
      "pieges": [
        "Laisser les épaisseurs en mm ou les masses en g",
        "Oublier qu'à un changement d'état la température ne varie pas",
        "Additionner les conductivités au lieu des résistances",
        "Ne pas donner d'unité"
      ],
      "cas": "Une paroi de 1 m² est faite de 120 mm de laine de bois (λ = 0,040 W·m⁻¹·°C⁻¹) et de 13 mm de plâtre (λ = 0,25 W·m⁻¹·°C⁻¹). Il fait 19 °C dedans et 4 °C dehors.",
      "question": "Calculer la résistance thermique totale de la paroi, puis le flux thermique surfacique qui la traverse.",
      "modele": "R laine = 0,120/0,040 = 3,0 m²·°C·W⁻¹ ; R plâtre = 0,013/0,25 = 0,052 m²·°C·W⁻¹. Les couches sont successives, les résistances s'additionnent : R = 3,05 m²·°C·W⁻¹. φ = (19 − 4)/3,05 ≈ 4,9 W·m⁻².",
      "grille": [
        "Les épaisseurs sont converties en mètres",
        "Chaque résistance est calculée avec R = e/λ",
        "Les résistances sont additionnées",
        "Le flux est calculé avec φ = ΔT/R",
        "Les unités sont données"
      ]
    },
    {
      "id": "sti2d-pcm-m5",
      "mat": "sti2d-pcm",
      "titre": "Incertitude-type et comparaison à une valeur de référence",
      "formules": [
        "Déterminer l'incertitude-type u(T) à l'aide de la notice",
        "Écrire la valeur mesurée avec son incertitude-type",
        "Calculer z et discuter l'accord entre le modèle et la mesure"
      ],
      "vu": [
        "Bac 2026 métropole, exercice 1, questions 2 et 3",
        "Bac 2025 métropole, exercice 1, question 8"
      ],
      "pts": "0,5 à 1,5 point",
      "attendu": "Appliquer u = précision/√3 (ou la relation fournie), arrondir u à un ou deux chiffres significatifs, écrire la valeur au même rang avec l'unité, puis calculer z et conclure avec le critère z ≤ 2.",
      "etapes": [
        "Lire la précision dans la notice",
        "Calculer u avec la relation donnée",
        "Arrondir u, puis la valeur au même rang",
        "Calculer z = écart / u",
        "Conclure : compatible si z ≤ 2, sinon chercher une cause"
      ],
      "mots": [
        "incertitude-type",
        "précision",
        "chiffres significatifs",
        "compatible",
        "z-score"
      ],
      "pieges": [
        "Donner la précision au lieu de l'incertitude-type",
        "Garder trop de chiffres",
        "Conclure sans citer le critère"
      ],
      "cas": "Un thermomètre a une précision de ±0,5 °C. Il indique 23,0 °C. La valeur attendue est 22,6 °C.",
      "question": "Calculer u(T), écrire le résultat, puis dire si la mesure est compatible avec la valeur attendue.",
      "modele": "u(T) = 0,5/√3 ≈ 0,29 °C, arrondie à 0,3 °C. T = 23,0 °C avec u(T) = 0,3 °C. z = (23,0 − 22,6)/0,29 ≈ 1,4. Comme z ≤ 2, la mesure est compatible avec la valeur attendue.",
      "grille": [
        "u est calculée avec la racine de 3",
        "Le résultat est écrit avec la valeur, u et l'unité",
        "z est calculé avec l'écart en valeur absolue",
        "La conclusion cite le critère z ≤ 2"
      ]
    }
  ],
  sujets: [
    { id: "sti2d-pcm-s1", matiere: 'sti2d-pcm', titre: "Sujet d'entraînement 1", duree: 180,
      enonce: `Sujet d'entraînement inventé, sur le modèle de l'épreuve de spécialité physique-chimie et mathématiques de STI2D. Les entreprises, les appareils et les chiffres sont fictifs. Durée : 3 heures. Calculatrice en mode examen autorisée.
Physique-chimie : 14 points. Mathématiques : 6 points.

EXERCICE 1 (5 points) — Physique-chimie et mathématiques
Le ballon d'eau chaude

L'entreprise fictive Thermalis vend un ballon d'eau chaude électrique de 150 L, chauffé par une résistance de puissance 2 000 W.
Données : masse volumique de l'eau 1,00 kg·L⁻¹ ; capacité thermique massique de l'eau c = 4,18 kJ·kg⁻¹·°C⁻¹ ; 1 kWh = 3 600 kJ.

Partie A (physique-chimie)
1. Calculer l'énergie thermique Q nécessaire pour faire passer l'eau du ballon de 15 °C à 60 °C. Donner le résultat en kJ puis en kWh.
2. Le rendement du chauffage est de 0,95. Calculer l'énergie électrique consommée, puis la durée de chauffe en heures.
3. La température est mesurée avec un thermomètre de précision ±1 °C, qui affiche 60,2 °C. Calculer l'incertitude-type u(θ) = précision/√3, puis écrire le résultat de la mesure.

Partie B (mathématiques)
Quand le chauffage est coupé, la température θ de l'eau (en °C) en fonction du temps t (en heures) vérifie l'équation (E) : y' + 0,01y = 0,2, avec θ(0) = 60.
4. Montrer que la fonction θ définie par θ(t) = 40 e^(−0,01t) + 20 est la solution de (E) vérifiant θ(0) = 60.
5. Déterminer la limite de θ en +∞ et l'interpréter.
6. Déterminer, par le calcul, au bout de combien d'heures la température descend à 50 °C. Arrondir à 0,1 h.

EXERCICE 2 (6 points) — Physique-chimie
L'atelier de menuiserie

Partie A — Isolation
Un menuisier fictif rénove les murs de son atelier. Chaque mur est formé, de l'extérieur vers l'intérieur, de :
- brique : épaisseur 20 cm, conductivité thermique λ = 0,84 W·m⁻¹·°C⁻¹ ;
- laine de bois : épaisseur 12 cm, λ = 0,040 W·m⁻¹·°C⁻¹ ;
- plaque de plâtre : épaisseur 13 mm, λ = 0,25 W·m⁻¹·°C⁻¹.
1. Citer les trois modes de transfert thermique et en décrire un.
2. Rappeler la relation entre la résistance thermique R d'une paroi de 1 m², son épaisseur e et sa conductivité λ.
3. Calculer la résistance de chaque couche, puis montrer que la résistance totale vaut environ 3,3 m²·°C·W⁻¹.
4. Il fait 19 °C dans l'atelier et 4 °C dehors. Calculer le flux surfacique φ = (T chaud − T froid)/R.
5. Les murs ont une surface totale de 120 m². Calculer le flux thermique total.
6. Indiquer quelle couche isole le plus, en justifiant.

Partie B — Une scie électrique
La scie est alimentée par le réseau : Ueff = 230 V, f = 50 Hz. Un multimètre mesure Ieff = 8,0 A et un wattmètre P = 1 650 W.
7. Calculer la valeur maximale de la tension.
8. Calculer la puissance apparente S, puis le facteur de puissance k.
9. La scie fonctionne 2 h par jour. Calculer l'énergie consommée en kWh.
10. Expliquer le rôle du disjoncteur différentiel de l'atelier.

EXERCICE 3 (4 points) — Mathématiques
Les trois questions sont indépendantes.
Question 1. On considère le nombre complexe z = 1 − i√3.
a) Écrire z sous forme exponentielle en détaillant les étapes.
b) On pose w = 2 e^(iπ/2). Écrire z × w sous forme exponentielle, puis sous forme algébrique.
Question 2. On considère f(x) = 3 e^(−0,5x) sur [0 ; 4]. On admet que f est positive.
a) Montrer que F(x) = −6 e^(−0,5x) est une primitive de f.
b) Calculer l'aire A sous la courbe de f entre 0 et 4 : valeur exacte, puis valeur approchée à 10⁻² près.
c) En déduire la valeur moyenne de f sur [0 ; 4].
Question 3. On considère g(x) = x − 2 ln(x) sur ]0 ; +∞[.
a) Montrer que g'(x) = (x − 2)/x.
b) Étudier le sens de variation de g et donner la valeur exacte de son minimum.

EXERCICE 4 (5 points) — Physique-chimie
Le drone de livraison

Une entreprise fictive teste un drone de livraison de masse 6,0 kg (colis compris). Sa batterie a une tension de 22,2 V et une capacité de 10 Ah.
Données : g = 9,81 N·kg⁻¹ ; c = 3,00 × 10⁸ m·s⁻¹ ; I0 = 1,0 × 10⁻¹² W·m⁻².
1. Calculer l'énergie stockée dans la batterie, en Wh puis en J (E = U × Q avec Q en Ah donne des Wh).
2. En vol, les moteurs consomment en moyenne 400 W. Estimer l'autonomie du drone en minutes.
3. Le drone monte verticalement de 50 m. Calculer la variation de son énergie potentielle de pesanteur.
4. Il vole ensuite à 54 km·h⁻¹. Convertir cette vitesse en m·s⁻¹ et calculer son énergie cinétique.
5. Le drone communique par ondes radio de fréquence 5,8 GHz. Calculer la longueur d'onde, puis la longueur d'une antenne quart d'onde.
6. À 5 m, le drone produit un niveau sonore de 70 dB. Calculer l'intensité sonore correspondante, puis le niveau sonore produit par deux drones identiques au même endroit.`,
      corrige: `EXERCICE 1
1. m = 150 kg. Q = m c ΔT = 150 × 4,18 × (60 − 15) = 28 215 kJ ≈ 2,82 × 10⁴ kJ, soit 28 215 / 3 600 ≈ 7,84 kWh.
2. Énergie électrique = Q / 0,95 ≈ 29 700 kJ ≈ 8,25 kWh. Durée = 8,25 kWh / 2 kW ≈ 4,1 h.
3. u(θ) = 1/√3 ≈ 0,58 °C, arrondie à 0,6 °C. θ = 60,2 °C avec u(θ) = 0,6 °C.
4. θ'(t) = 40 × (−0,01) e^(−0,01t) = −0,4 e^(−0,01t). θ'(t) + 0,01 θ(t) = −0,4 e^(−0,01t) + 0,4 e^(−0,01t) + 0,2 = 0,2 : θ vérifie (E). θ(0) = 40 + 20 = 60.
5. −0,01 < 0, donc e^(−0,01t) tend vers 0 et θ(t) tend vers 20. L'eau finit à 20 °C, la température de la pièce où se trouve le ballon.
6. 40 e^(−0,01t) + 20 = 50 ⟺ e^(−0,01t) = 0,75 ⟺ −0,01t = ln(0,75) ⟺ t = ln(0,75)/(−0,01) ≈ 28,8 h.

EXERCICE 2
1. Conduction (de proche en proche dans la matière, sans déplacement de matière), convection (par déplacement d'un fluide), rayonnement (par ondes électromagnétiques).
2. R = e/λ, avec e en m, λ en W·m⁻¹·°C⁻¹ et R en m²·°C·W⁻¹.
3. Brique : 0,20/0,84 ≈ 0,24. Laine de bois : 0,12/0,040 = 3,0. Plâtre : 0,013/0,25 = 0,052. Couches successives : R ≈ 0,24 + 3,0 + 0,052 ≈ 3,3 m²·°C·W⁻¹.
4. φ = (19 − 4)/3,29 ≈ 4,6 W·m⁻².
5. Φ = φ × S ≈ 4,56 × 120 ≈ 547 W, soit environ 5,5 × 10² W.
6. La laine de bois : c'est la couche de plus grande résistance thermique (3,0), grâce à sa très faible conductivité.
7. Umax = Ueff × √2 = 230 × √2 ≈ 325 V.
8. S = Ueff × Ieff = 230 × 8,0 = 1 840 VA. k = P/S = 1 650/1 840 ≈ 0,90.
9. E = 1,65 kW × 2 h = 3,3 kWh.
10. Il coupe le courant dès qu'une partie du courant fuit hors du circuit (par exemple à travers une personne), ce qui protège des électrocutions.

EXERCICE 3
Question 1. a) r = √(1 + 3) = 2. cos θ = 1/2 et sin θ = −√3/2, donc θ = −π/3. z = 2 e^(−iπ/3).
b) z × w = 2 × 2 × e^(i(−π/3 + π/2)) = 4 e^(iπ/6) = 4(√3/2 + i/2) = 2√3 + 2i.
Question 2. a) F'(x) = −6 × (−0,5) e^(−0,5x) = 3 e^(−0,5x) = f(x).
b) A = F(4) − F(0) = −6 e^(−2) + 6 = 6 − 6 e^(−2) ≈ 5,19 unités d'aire.
c) μ = A/(4 − 0) ≈ 1,30.
Question 3. a) g'(x) = 1 − 2/x = (x − 2)/x.
b) Sur ]0 ; +∞[, x > 0 : g'(x) a le signe de x − 2. g est décroissante sur ]0 ; 2] et croissante sur [2 ; +∞[. Minimum : g(2) = 2 − 2 ln(2) ≈ 0,61.

EXERCICE 4
1. E = 22,2 × 10 = 222 Wh = 222 × 3 600 ≈ 7,99 × 10⁵ J.
2. Durée = 222 Wh / 400 W ≈ 0,555 h ≈ 33 min.
3. ΔEpp = m g h = 6,0 × 9,81 × 50 ≈ 2,9 × 10³ J.
4. 54 km·h⁻¹ = 54/3,6 = 15 m·s⁻¹. Ec = ½ × 6,0 × 15² = 675 J.
5. λ = c/f = 3,00 × 10⁸ / 5,8 × 10⁹ ≈ 5,2 × 10⁻² m. Antenne quart d'onde : λ/4 ≈ 1,3 cm.
6. L = 10 log(I/I0) donne I = I0 × 10^(L/10) = 10⁻¹² × 10⁷ = 1,0 × 10⁻⁵ W·m⁻². Deux drones : intensité doublée, L = 10 log(2 × 10⁷) ≈ 73 dB.`,
      grille: [{"c":"Exercice 1, partie A : énergie thermique, rendement, durée, incertitude-type","pts":3},{"c":"Exercice 1, partie B : vérification de la solution, limite interprétée, équation avec ln","pts":2},{"c":"Exercice 2, partie A : modes de transfert, résistances thermiques, flux","pts":3.5},{"c":"Exercice 2, partie B : valeur maximale, puissance apparente, facteur de puissance, énergie, sécurité","pts":2.5},{"c":"Exercice 3 : forme exponentielle, primitive et aire, variations avec ln","pts":4},{"c":"Exercice 4 : énergie de la batterie, énergies mécaniques, onde radio, niveau sonore","pts":5}] },
  ],
};
