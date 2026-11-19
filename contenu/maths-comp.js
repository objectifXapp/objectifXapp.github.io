// Mathématiques complémentaires (option) — terminale voie générale. Sources : voir matiere.sources.
// Programme en vigueur pour le bac 2027 : programme de l'option de 2019 (BO spécial n° 8 du 25 juillet 2019).
// Les nouveaux programmes publiés en 2026 ne s'appliquent en terminale qu'à la rentrée 2027.
export default {
  matiere: {
    id: 'maths-comp',
    nom: 'Mathématiques complémentaires',
    voie: 'generale',
    epreuve: {"type":"controle continu","quand":"toute l'année","note":"Option de terminale (3 heures par semaine) évaluée en contrôle continu, d'après les moyennes du bulletin."},
    sources: [
      "https://eduscol.education.gouv.fr/5817/programmes-et-ressources-en-mathematiques-voie-gt",
      "https://www.education.gouv.fr/bo/19/Special8/MENE1921244A.htm",
      "https://ent2d.ac-bordeaux.fr/disciplines/mathematiques/wp-content/uploads/sites/3/2020/06/Maths-Complémentaires-Proposition-de-progression-par-themes.pdf",
    ],
    chapitres: [
      { id: "maths-comp-1", t: "Suites et modèles d'évolution", theme: "Analyse" },
      { id: "maths-comp-2", t: "Fonctions : limites, continuité, dérivation et convexité", theme: "Analyse" },
      { id: "maths-comp-3", t: "Fonctions exponentielle et logarithme", theme: "Analyse" },
      { id: "maths-comp-4", t: "Primitives et équations différentielles", theme: "Analyse" },
      { id: "maths-comp-5", t: "Calcul intégral et aires", theme: "Analyse" },
      { id: "maths-comp-6", t: "Probabilités conditionnelles et formule de Bayes", theme: "Probabilités" },
      { id: "maths-comp-7", t: "Lois discrètes : Bernoulli, binomiale et géométrique", theme: "Probabilités" },
      { id: "maths-comp-8", t: "Lois à densité : uniforme et exponentielle", theme: "Probabilités" },
      { id: "maths-comp-9", t: "Statistique à deux variables", theme: "Statistiques" },
    ],
  },
  paquets: [
  { chapitre: "maths-comp-1",
    fiche: `## Suites et modèles d'évolution

Les suites servent à modéliser une grandeur qui évolue étape par étape : une population chaque année, un capital chaque mois, la quantité d'un médicament dans le sang toutes les heures.

### Suites arithmétiques et géométriques (rappel)
- **Arithmétique** de raison r : u(n+1) = un + r, donc **un = u0 + n r**. Elle modélise une **hausse constante** (+ 50 chaque année).
- **Géométrique** de raison q : u(n+1) = q un, donc **un = u0 × q^n**. Elle modélise une **hausse en pourcentage** : + 3 % par an donne q = 1,03 ; − 10 % donne q = 0,9.
- Somme des termes : 1 + q + q² + … + q^n = (1 − q^(n+1)) / (1 − q) pour q ≠ 1.

### Limites
- Si **q > 1**, q^n tend vers +∞. Si **−1 < q < 1**, q^n tend vers 0.
- Exemple : 500 × 0,8^n tend vers 0. 200 × 1,05^n tend vers +∞.
- Si −1 < q < 1, la somme 1 + q + … + q^n tend vers **1 / (1 − q)**. Exemple : 1 + 0,5 + 0,25 + … tend vers 2.

### Suites arithmético-géométriques
- Elles vérifient **u(n+1) = a un + b**. Exemple : chaque mois, 10 % des abonnés partent et 300 arrivent : u(n+1) = 0,9 un + 300.
- **Point fixe** : le réel k tel que k = a k + b. Ici k = 0,9 k + 300, donc k = 3 000.
- La suite **vn = un − k** est **géométrique de raison a** : v(n+1) = a vn.
- On en déduit **un = k + (u0 − k) a^n**. Si 0 < a < 1, un tend vers k.
- Exemple : u0 = 2 000, donc un = 3 000 − 1 000 × 0,9^n, qui tend vers 3 000.

### Suites récurrentes u(n+1) = f(un)
- On calcule les termes un par un (calculatrice, tableur ou Python).
- Si la suite converge vers l et si f est continue, alors **l = f(l)**.

### Recherche de seuil
- « À partir de quel rang un dépasse 2 900 ? » On résout 3 000 − 1 000 × 0,9^n > 2 900, soit 0,9^n < 0,1, donc n > ln(0,1) / ln(0,9) ≈ 21,9 : à partir de n = 22.
- En Python, avec une boucle while :
- n = 0 ; u = 2000 ; while u <= 2900 : u = 0.9*u + 300 ; n = n + 1. À la fin, n vaut le rang cherché.

### Lire un énoncé
- « augmente de 4 % » : multiplier par 1,04. « diminue de 15 % » : multiplier par 0,85.
- « augmente de 4 % puis on ajoute 20 » : u(n+1) = 1,04 un + 20.
- Bien repérer ce que représente u0 (année 2025, premier mois…).
- Pour une évolution en pourcentage sur plusieurs années, ne pas additionner les pourcentages : deux hausses de 10 % donnent 1,1 × 1,1 = 1,21, soit + 21 %.

### À retenir pour le bac
- Pourcentage : suite géométrique ; ajout fixe : arithmétique ; les deux : arithmético-géométrique.
- Pour u(n+1) = a un + b, la suite un − k est géométrique, avec k = b / (1 − a).
- Si 0 < q < 1, q^n tend vers 0 ; en divisant par ln(q) < 0, on change le sens.
- Savoir lire et compléter une boucle while de seuil.`,
    cartes: [
      { q: "Terme général d'une suite arithmétique", r: "un = u0 + n r." },
      { q: "Terme général d'une suite géométrique", r: "un = u0 × q^n." },
      { q: "Coefficient multiplicateur pour une baisse de 15 %", r: "0,85." },
      { q: "Limite de q^n si −1 < q < 1", r: "0." },
      { q: "Limite de q^n si q > 1", r: "+∞." },
      { q: "Somme 1 + q + … + q^n (q ≠ 1)", r: "(1 − q^(n+1)) / (1 − q)." },
      { q: "Limite de 1 + q + … + q^n si −1 < q < 1", r: "1 / (1 − q)." },
      { q: "Forme d'une suite arithmético-géométrique", r: "u(n+1) = a un + b." },
      { q: "Comment trouver le point fixe k de u(n+1) = a un + b ?", r: "Résoudre k = a k + b, soit k = b / (1 − a) pour a ≠ 1." },
      { q: "Nature de vn = un − k", r: "Géométrique de raison a." },
      { q: "Expression de un pour une suite arithmético-géométrique", r: "un = k + (u0 − k) a^n." },
      { q: "Limite d'une suite u(n+1) = f(un) convergente, f continue", r: "Sa limite l vérifie l = f(l)." },
      { q: "Condition du while pour trouver le premier n tel que un > S", r: "while u <= S (on continue tant que le seuil n'est pas dépassé)." },
    ],
    quiz: [
      { q: "Une population augmente de 3 % par an. Quelle est la raison de la suite géométrique ?",
        choix: ["0,03", "3", "1,3", "1,03"],
        bonne: 3, niv: 1,
        expl: "Augmenter de 3 % revient à multiplier par 1 + 3/100 = 1,03." },
      { q: "u0 = 500 et un = 500 × 0,8^n. Quelle est la limite de un ?",
        choix: ["500", "400", "+∞", "0"],
        bonne: 3, niv: 1,
        expl: "−1 < 0,8 < 1, donc 0,8^n tend vers 0." },
      { q: "u(n+1) = 0,9 un + 300. Quel est le point fixe k ?",
        choix: ["300", "3 000", "270", "2 700"],
        bonne: 1, niv: 2,
        expl: "k = 0,9 k + 300 donne 0,1 k = 300, soit k = 3 000." },
      { q: "u(n+1) = 0,9 un + 300 et vn = un − 3 000. Quelle est la nature de (vn) ?",
        choix: ["Arithmétique de raison 300", "Géométrique de raison 300", "Géométrique de raison 0,9", "Arithmétique de raison 0,9"],
        bonne: 2, niv: 2,
        expl: "v(n+1) = 0,9 un + 300 − 3 000 = 0,9 (un − 3 000) = 0,9 vn." },
      { q: "u0 = 2 000 et un = 3 000 − 1 000 × 0,9^n. Que vaut u1 ?",
        choix: ["2 000", "2 900", "2 100", "2 700"],
        bonne: 2, niv: 2,
        expl: "u1 = 3 000 − 900 = 2 100. On retrouve 0,9 × 2 000 + 300." },
      { q: "Que vaut la limite de la somme 1 + 0,5 + 0,25 + … + 0,5^n ?",
        choix: ["2", "1,5", "+∞", "1"],
        bonne: 0, niv: 2,
        expl: "La limite vaut 1 / (1 − 0,5) = 2." },
      { q: "Un capital diminue de 20 % puis reçoit 100 € chaque année. Quelle relation est juste ?",
        choix: ["u(n+1) = 0,2 un + 100", "u(n+1) = 0,8 un + 100", "u(n+1) = 1,2 un − 100", "u(n+1) = 0,8 (un + 100)"],
        bonne: 1, niv: 3,
        expl: "Baisse de 20 % : on multiplie par 0,8, puis on ajoute 100." },
      { q: "On résout 0,9^n < 0,1. Quel est le plus petit entier n solution ?",
        choix: ["22", "21", "10", "9"],
        bonne: 0, niv: 3,
        expl: "n > ln(0,1)/ln(0,9) ≈ 21,85 (le sens change car ln(0,9) < 0), donc n = 22." },
      { q: "Une suite vérifie u(n+1) = un + 50. Quel type d'évolution modélise-t-elle ?",
        choix: ["Une hausse de 50 % par étape", "Une baisse de 50 % par étape", "Une hausse constante de 50 par étape", "Une hausse qui s'accélère"],
        bonne: 2, niv: 1,
        expl: "C'est une suite arithmétique de raison 50 : on ajoute toujours la même quantité." },
      { q: "u(n+1) = 0,5 un + 4 avec u0 = 20. Vers quoi tend un ?",
        choix: ["4", "0", "2", "8"],
        bonne: 3, niv: 3,
        expl: "Point fixe : k = 0,5 k + 4, soit k = 8. Comme 0 < 0,5 < 1, un tend vers 8, quel que soit u0." },
      { q: "Dans « while u <= 2900 : … », à quoi sert la condition ?",
        choix: ["À s'arrêter dès que u est inférieur à 2 900", "À calculer la limite de la suite", "À continuer tant que le seuil n'est pas dépassé", "À vérifier que la suite est croissante"],
        bonne: 2, niv: 2,
        expl: "La boucle tourne tant que u ≤ 2 900 et s'arrête au premier rang où u dépasse 2 900." },
    ] },
  { chapitre: "maths-comp-2",
    fiche: `## Fonctions : limites, continuité, dérivation et convexité

Ce chapitre rassemble les outils pour étudier une fonction qui modélise une situation : un coût, un bénéfice, une concentration. On cherche ses variations, son maximum, sa forme.

### Limites
- On étudie le comportement de f(x) quand x devient très grand, ou s'approche d'une valeur.
- Une limite finie l en +∞ donne une **asymptote horizontale** y = l.
- Les règles de calcul se combinent, sauf les **formes indéterminées** : ∞ − ∞, 0 × ∞, ∞/∞, 0/0.
- Un polynôme a, en l'infini, la limite de son terme de plus haut degré. Exemple : −2x³ + 5x tend vers −∞ en +∞.

### Continuité et théorème des valeurs intermédiaires
- Une fonction est **continue** si on trace sa courbe sans lever le crayon. Les fonctions usuelles le sont.
- **Corollaire du TVI** : si f est **continue** et **strictement monotone** sur [a ; b], et si k est entre f(a) et f(b), alors f(x) = k a **une unique solution** dans [a ; b].
- On encadre la solution à la calculatrice ou par **dichotomie** (on coupe l'intervalle en deux à chaque étape).

### Dérivation
- **Dérivées usuelles** : (x^n)' = n x^(n−1) ; (1/x)' = −1/x² ; (√x)' = 1/(2√x) ; (e^x)' = e^x ; (ln x)' = 1/x.
- **Opérations** : (u + v)' = u' + v' ; (uv)' = u'v + uv' ; (u/v)' = (u'v − uv')/v².
- **Composée** : (f(ax + b))' = a f'(ax + b). Plus généralement (e^u)' = u' e^u et (ln u)' = u'/u.
- **Variations** : si f' > 0 sur un intervalle, f y est croissante ; si f' < 0, décroissante. Un **extremum** se trouve là où f' s'annule en changeant de signe.
- **Tangente** en a : y = f'(a)(x − a) + f(a).
- Exemple : f(x) = −x² + 6x. f'(x) = −2x + 6, nul en 3. f est croissante puis décroissante : maximum f(3) = 9.

### Convexité
- f est **convexe** si sa courbe est **au-dessus de ses tangentes** ; **concave** si elle est au-dessous.
- **f convexe ⟺ f' croissante ⟺ f'' ≥ 0**. f concave ⟺ f'' ≤ 0.
- Un **point d'inflexion** est un point où la convexité change : f'' s'y annule **en changeant de signe**, et la courbe traverse sa tangente.
- Exemple : f(x) = x³ − 3x. f''(x) = 6x, qui change de signe en 0 : point d'inflexion en (0 ; 0).
- En économie, un coût convexe signifie que chaque unité supplémentaire coûte de plus en plus cher.

### Méthode de Newton (algorithme)
- Pour approcher une solution de f(x) = 0, on part de x0 et on remplace x par **x − f(x)/f'(x)** plusieurs fois. C'est l'abscisse où la tangente coupe l'axe.

### À retenir pour le bac
- Le signe de f' donne les variations ; le signe de f'' donne la convexité.
- Point d'inflexion : f'' change de signe, pas seulement s'annule.
- Unicité d'une solution : continuité et stricte monotonie.
- Ne pas oublier le facteur u' dans la dérivée d'une composée.`,
    cartes: [
      { q: "Asymptote horizontale", r: "Si f(x) tend vers l en +∞ ou −∞, la droite y = l est asymptote horizontale." },
      { q: "Quatre formes indéterminées", r: "∞ − ∞, 0 × ∞, ∞/∞, 0/0." },
      { q: "Corollaire du TVI", r: "f continue et strictement monotone sur [a ; b], k entre f(a) et f(b) : f(x) = k a une unique solution." },
      { q: "Dérivée de uv", r: "u'v + uv'." },
      { q: "Dérivée de u/v", r: "(u'v − uv') / v²." },
      { q: "Dérivée de f(ax + b)", r: "a × f'(ax + b)." },
      { q: "Lien entre signe de f' et variations", r: "f' > 0 : f croissante ; f' < 0 : f décroissante." },
      { q: "Équation de la tangente en a", r: "y = f'(a)(x − a) + f(a)." },
      { q: "Définition d'une fonction convexe", r: "Sa courbe est au-dessus de chacune de ses tangentes." },
      { q: "Convexité et dérivée seconde", r: "f convexe ⟺ f'' ≥ 0 ⟺ f' croissante." },
      { q: "Point d'inflexion", r: "Un point où f'' s'annule en changeant de signe : la courbe traverse sa tangente." },
      { q: "Principe de la méthode de Newton", r: "Remplacer x par x − f(x)/f'(x), plusieurs fois, pour approcher une solution de f(x) = 0." },
      { q: "Coût convexe en économie", r: "Chaque unité supplémentaire coûte de plus en plus cher." },
    ],
    quiz: [
      { q: "Quelle est la limite de −2x³ + 5x en +∞ ?",
        choix: ["+∞", "0", "5", "−∞"],
        bonne: 3, niv: 1,
        expl: "Même limite que le terme de plus haut degré −2x³." },
      { q: "f(x) = −x² + 6x. Quel est le maximum de f ?",
        choix: ["3", "9", "6", "18"],
        bonne: 1, niv: 2,
        expl: "f'(x) = −2x + 6 s'annule en 3, et f(3) = −9 + 18 = 9. 3 est l'abscisse du maximum." },
      { q: "Quelle est la dérivée de f(x) = x e^x ?",
        choix: ["e^x", "x e^x", "x e^(x − 1)", "(x + 1) e^x"],
        bonne: 3, niv: 2,
        expl: "(uv)' = u'v + uv' = e^x + x e^x = (x + 1) e^x." },
      { q: "Quelle est la dérivée de f(x) = e^(−2x) ?",
        choix: ["e^(−2x)", "2 e^(−2x)", "−2 e^(−2x)", "−2x e^(−2x)"],
        bonne: 2, niv: 2,
        expl: "(e^u)' = u' e^u avec u' = −2." },
      { q: "Une fonction est convexe sur un intervalle si et seulement si :",
        choix: ["f ≥ 0 sur cet intervalle", "f' ≥ 0 sur cet intervalle", "f'' ≥ 0 sur cet intervalle", "f est croissante"],
        bonne: 2, niv: 1,
        expl: "La convexité dépend de f'' (ou des variations de f'), pas du signe de f ni de f'." },
      { q: "f(x) = x³ − 3x. Où se trouve le point d'inflexion ?",
        choix: ["Au point d'abscisse 0", "Au point d'abscisse 1", "Au point d'abscisse −1", "Il n'y en a pas"],
        bonne: 0, niv: 2,
        expl: "f''(x) = 6x change de signe en 0. En 1 et −1, c'est f' qui s'annule (extremums)." },
      { q: "f''(2) = 0. Peut-on affirmer que la courbe a un point d'inflexion en 2 ?",
        choix: ["Oui, c'est la définition", "Oui, si f'(2) = 0 aussi", "Non, il faut que f(2) = 0", "Non, il faut que f'' change de signe en 2"],
        bonne: 3, niv: 3,
        expl: "Contre-exemple : x ↦ (x − 2)⁴, dont la dérivée seconde s'annule en 2 sans changer de signe." },
      { q: "f est continue et strictement croissante sur [0 ; 5], f(0) = −3, f(5) = 7. Combien de solutions a f(x) = 2 ?",
        choix: ["Pas de solution", "Deux", "Une seule", "On ne peut pas savoir"],
        bonne: 2, niv: 2,
        expl: "2 est entre −3 et 7, avec continuité et stricte monotonie : corollaire du TVI." },
      { q: "On donne la courbe de f', qui est croissante sur [0 ; 4]. Que peut-on dire de f sur cet intervalle ?",
        choix: ["f est croissante", "f est positive", "f est convexe", "f est concave"],
        bonne: 2, niv: 3,
        expl: "f' croissante signifie f convexe. Les variations de f dépendent du signe de f', pas de ses variations." },
      { q: "Le coût de production C est convexe. Qu'est-ce que cela signifie concrètement ?",
        choix: ["Le coût total diminue quand on produit plus", "Le coût d'une unité de plus augmente sans cesse", "Le coût de chaque unité est le même", "Le coût baisse dès la première unité"],
        bonne: 1, niv: 3,
        expl: "C' croissante : le coût d'une unité supplémentaire augmente." },
      { q: "Quelle est l'équation de la tangente à f(x) = x² au point d'abscisse 1 ?",
        choix: ["y = 2x + 1", "y = x + 1", "y = 2x − 1", "y = 2x"],
        bonne: 2, niv: 2,
        expl: "f'(1) = 2 et f(1) = 1 : y = 2(x − 1) + 1 = 2x − 1." },
    ] },
  { chapitre: "maths-comp-3",
    fiche: `## Fonctions exponentielle et logarithme

L'exponentielle modélise les croissances et décroissances « en pourcentage » continues (population, radioactivité, refroidissement). Le logarithme népérien ln permet de résoudre les équations où l'inconnue est en exposant.

### La fonction exponentielle (rappels)
- **e^0 = 1**, e^1 = e ≈ 2,718, et **e^x > 0** pour tout réel x.
- **e^(a + b) = e^a × e^b**, e^(−a) = 1/e^a, (e^a)^n = e^(na).
- (e^x)' = e^x et (e^(kx))' = k e^(kx). exp est **strictement croissante** et **convexe**.
- Limites : e^x tend vers +∞ en +∞ et vers **0 en −∞**.
- Modèle : f(t) = C e^(kt). Si k > 0, croissance ; si k < 0, décroissance. Exemple : un médicament, f(t) = 20 e^(−0,3t) mg.

### Le logarithme népérien
- Pour x > 0, **ln(x)** est l'unique réel y tel que **e^y = x**. ln est la fonction **réciproque** de exp.
- **e^(ln x) = x** pour x > 0, et **ln(e^x) = x** pour tout x.
- **ln(1) = 0**, **ln(e) = 1**. ln n'est définie que pour **x > 0**.
- Exemple : e^x = 5 ⟺ x = ln(5) ≈ 1,609.

### Propriétés (a > 0, b > 0)
- **ln(ab) = ln(a) + ln(b)** ; **ln(a/b) = ln(a) − ln(b)** ; **ln(a^n) = n ln(a)** ; ln(1/a) = −ln(a) ; ln(√a) = ½ ln(a).
- Historiquement, cette propriété transformait les multiplications en additions : c'est l'idée des tables de logarithmes.

### Étude de ln
- **(ln x)' = 1/x** : ln est strictement croissante sur ]0 ; +∞[. Elle est **concave**.
- **(ln u)' = u'/u** si u > 0.
- Limites : ln(x) tend vers **−∞ en 0** et vers **+∞ en +∞**.
- Signe : ln(x) < 0 si 0 < x < 1, ln(x) > 0 si x > 1.
- **Croissances comparées** : ln(x)/x tend vers 0 en +∞ ; e^x/x tend vers +∞.

### Résoudre des équations et inéquations
- ln(a) = ln(b) ⟺ a = b, et ln(a) < ln(b) ⟺ a < b (pour a, b > 0).
- **Seuil** : 0,9^n < 0,1 ⟺ n ln(0,9) < ln(0,1) ⟺ n > ln(0,1)/ln(0,9), car **ln(0,9) < 0** (le sens change).
- **Temps de demi-vie** : pour f(t) = C e^(−kt), on cherche t tel que e^(−kt) = 1/2, donc **t = ln(2)/k**. Exemple : k = 0,3 donne t ≈ 2,31 heures.
- **Temps de doublement** : pour C e^(kt) avec k > 0, t = ln(2)/k.

### Exemple complet
- Un placement de 1 000 € rapporte 4 % par an. On cherche quand il dépasse 1 500 € : 1,04^n > 1,5 ⟺ n ln(1,04) > ln(1,5) ⟺ n > ln(1,5)/ln(1,04) ≈ 10,3. Il faut donc 11 ans.
- Ici ln(1,04) > 0 : le sens de l'inégalité ne change pas.
- Sur la calculatrice, la touche ln donne directement ces valeurs ; il suffit d'écrire le calcul avant de donner l'arrondi.

### À retenir pour le bac
- ln défait l'exponentielle : e^x = k ⟺ x = ln(k), pour k > 0.
- Vérifier que ce qui est dans ln est strictement positif.
- ln(a × b) = ln(a) + ln(b), mais ln(a + b) ne se simplifie pas.
- Diviser par un ln négatif change le sens de l'inégalité.`,
    cartes: [
      { q: "Valeur de e^0", r: "1." },
      { q: "Signe de e^x", r: "Strictement positif pour tout réel x." },
      { q: "e^(a + b)", r: "e^a × e^b." },
      { q: "Dérivée de e^(kx)", r: "k e^(kx)." },
      { q: "Définition de ln(x)", r: "Pour x > 0, l'unique réel y tel que e^y = x." },
      { q: "ln(1) et ln(e)", r: "ln(1) = 0 et ln(e) = 1." },
      { q: "ln(ab)", r: "ln(a) + ln(b), pour a > 0 et b > 0." },
      { q: "ln(a^n)", r: "n ln(a)." },
      { q: "Dérivée de ln", r: "(ln x)' = 1/x sur ]0 ; +∞[." },
      { q: "Dérivée de ln(u)", r: "u'/u, pour u > 0." },
      { q: "Limites de ln", r: "−∞ en 0 (x > 0) et +∞ en +∞." },
      { q: "Temps de demi-vie de C e^(−kt)", r: "t = ln(2)/k." },
      { q: "Résoudre e^x = k (k > 0)", r: "x = ln(k)." },
    ],
    quiz: [
      { q: "Quelle est la solution de e^x = 5 ?",
        choix: ["x = e^5", "x = 5/e", "x = 5 ln(e)", "x = ln(5)"],
        bonne: 3, niv: 1,
        expl: "On applique ln : x = ln(5) ≈ 1,609. 5 ln(e) vaut 5." },
      { q: "À quoi est égal ln(8) ?",
        choix: ["ln(4) × ln(2)", "8 ln(1)", "ln(6) + ln(2)", "3 ln(2)"],
        bonne: 3, niv: 2,
        expl: "8 = 2³, donc ln(8) = 3 ln(2). ln(6) + ln(2) = ln(12)." },
      { q: "Quel est l'ensemble de définition de f(x) = ln(x − 4) ?",
        choix: ["]0 ; +∞[", "]−∞ ; 4[", "]4 ; +∞[", "[4 ; +∞["],
        bonne: 2, niv: 2,
        expl: "Il faut x − 4 > 0, strictement : 4 est exclu." },
      { q: "Quelle est la dérivée de f(x) = ln(2x + 1) sur ]−1/2 ; +∞[ ?",
        choix: ["1/(2x + 1)", "2/(2x + 1)", "2 ln(2x + 1)", "1/(2x)"],
        bonne: 1, niv: 2,
        expl: "(ln u)' = u'/u avec u' = 2." },
      { q: "Une substance décroît selon f(t) = 20 e^(−0,3t). Quelle est sa demi-vie, en heures ?",
        choix: ["Environ 0,15", "Environ 3,33", "Environ 2,31", "Environ 6,93"],
        bonne: 2, niv: 3,
        expl: "e^(−0,3t) = 1/2 donne t = ln(2)/0,3 ≈ 2,31." },
      { q: "Que vaut e^(ln 7) ?",
        choix: ["ln(7)", "e^7", "1", "7"],
        bonne: 3, niv: 1,
        expl: "e^(ln x) = x pour x > 0." },
      { q: "Quelle est la limite de ln(x) quand x tend vers 0 (x > 0) ?",
        choix: ["−∞", "0", "+∞", "1"],
        bonne: 0, niv: 1,
        expl: "La courbe de ln a l'axe des ordonnées pour asymptote verticale." },
      { q: "Pour résoudre 0,8^n < 0,05, quelle étape est juste ?",
        choix: ["n > ln(0,05)/ln(0,8), car ln(0,8) < 0", "n < ln(0,05)/ln(0,8), car ln(0,8) > 0", "n > 0,05/0,8", "n < ln(0,05) − ln(0,8)"],
        bonne: 0, niv: 3,
        expl: "On divise par ln(0,8), qui est négatif : le sens de l'inégalité change." },
      { q: "Quel est l'ensemble des solutions de ln(x) > 0 ?",
        choix: ["]0 ; +∞[", "]e ; +∞[", "]1 ; +∞[", "]0 ; 1["],
        bonne: 2, niv: 2,
        expl: "ln(x) > ln(1) ⟺ x > 1." },
      { q: "Que peut-on dire de ln(a + b), pour a et b positifs ?",
        choix: ["Il vaut ln(a) + ln(b)", "Il n'a pas de formule simple en général", "Il vaut ln(a) × ln(b)", "Il vaut ln(ab)"],
        bonne: 1, niv: 3,
        expl: "La formule ln(ab) = ln(a) + ln(b) porte sur un produit, pas sur une somme." },
      { q: "Une population double tous les 10 ans selon P(t) = P0 e^(kt). Que vaut k ?",
        choix: ["2/10", "10 ln(2)", "e^2 / 10", "ln(2)/10"],
        bonne: 3, niv: 2,
        expl: "e^(10k) = 2 donne 10k = ln(2), donc k = ln(2)/10 ≈ 0,069." },
    ] },
  { chapitre: "maths-comp-4",
    fiche: `## Primitives et équations différentielles

Une équation différentielle relie une fonction et sa dérivée. Elle décrit une évolution où la vitesse de changement dépend de la valeur : refroidissement d'un café, charge d'un condensateur, croissance d'une population.

### Primitives
- F est une **primitive** de f sur un intervalle si **F' = f**.
- Deux primitives d'une même fonction diffèrent d'une **constante** : toutes les primitives s'écrivent F + C.
- Avec une condition F(x0) = y0, la primitive est **unique**.
- Primitives usuelles : a → ax ; x^n → x^(n+1)/(n + 1) (n ≠ −1) ; 1/x → ln(x) sur ]0 ; +∞[ ; e^x → e^x ; e^(kx) → (1/k) e^(kx) ; u' e^u → e^u ; u'/u → ln(u) si u > 0.
- Exemple : une primitive de 3x² + 4x est x³ + 2x². Celle qui vaut 1 en 0 est x³ + 2x² + 1.
- On vérifie toujours en **dérivant**.

### L'équation y' = ay
- Ses solutions sont les fonctions **x ↦ C e^(ax)**, où C est un réel.
- Avec y(0) = y0, on obtient C = y0. Exemple : y' = −0,5y et y(0) = 80 donnent y(t) = 80 e^(−0,5t).

### L'équation y' = ay + b (a ≠ 0)
- **Solution constante** : on pose y' = 0, donc ay + b = 0 et **y = −b/a**.
- **Toutes les solutions** : **x ↦ C e^(ax) − b/a**, C réel.
- Avec une condition initiale, on trouve C.
- Exemple (refroidissement) : un café à 80 °C dans une pièce à 20 °C. Sa température vérifie θ' = −0,1θ + 2. Solution constante : −2/(−0,1) = 20. Donc θ(t) = C e^(−0,1t) + 20. Avec θ(0) = 80 : C = 60, donc **θ(t) = 60 e^(−0,1t) + 20**. Quand t devient grand, θ tend vers 20 °C, la température de la pièce.

### Lire une équation différentielle
- « La vitesse de variation est proportionnelle à la quantité » : y' = ky.
- « La quantité diminue de 5 % par unité de temps, et on en ajoute 2 » : y' = −0,05y + 2.
- Le signe de a donne le comportement à long terme : si a < 0, y tend vers la solution constante −b/a.

### Méthode d'Euler (algorithme)
- Pour approcher la solution de y' = f(x, y) avec un pas h, on part de (x0 ; y0) et on répète : **y ← y + h × f(x, y)** et x ← x + h.
- C'est l'idée que, sur un petit intervalle, la courbe est proche de sa tangente.

### Exemple de condition initiale
- On veut la primitive F de f(x) = 2x + 3 telle que F(1) = 0. Les primitives sont x² + 3x + C. F(1) = 1 + 3 + C = 0, donc C = −4 et F(x) = x² + 3x − 4.
- Pour une équation différentielle, même démarche : écrire toutes les solutions, puis remplacer x par la valeur donnée pour trouver C.
- Toujours vérifier à la fin que la fonction trouvée satisfait bien l'équation et la condition.

### À retenir pour le bac
- Primitive : F' = f, à vérifier en dérivant.
- y' = ay : C e^(ax). y' = ay + b : C e^(ax) − b/a.
- La condition initiale se place à la fin, pour trouver C.
- Si a < 0, la solution tend vers la valeur constante −b/a.`,
    cartes: [
      { q: "Définition d'une primitive", r: "F est une primitive de f si F' = f sur l'intervalle." },
      { q: "Lien entre deux primitives d'une même fonction", r: "Elles diffèrent d'une constante." },
      { q: "Primitive de x^n (n ≠ −1)", r: "x^(n+1)/(n + 1)." },
      { q: "Primitive de e^(kx)", r: "(1/k) e^(kx)." },
      { q: "Primitive de u'/u (u > 0)", r: "ln(u)." },
      { q: "Primitive de u' e^u", r: "e^u." },
      { q: "Solutions de y' = ay", r: "x ↦ C e^(ax), C réel." },
      { q: "Solution constante de y' = ay + b", r: "y = −b/a." },
      { q: "Solutions de y' = ay + b", r: "x ↦ C e^(ax) − b/a, C réel." },
      { q: "Comment trouver C ?", r: "Avec la condition initiale, par exemple y(0) = y0." },
      { q: "Comportement à long terme si a < 0", r: "La solution tend vers la valeur constante −b/a." },
      { q: "Principe de la méthode d'Euler", r: "Répéter y ← y + h × f(x, y), x ← x + h : on suit la tangente sur de petits pas." },
      { q: "Température d'un café (80 °C, pièce à 20 °C, θ' = −0,1θ + 2)", r: "θ(t) = 60 e^(−0,1t) + 20." },
    ],
    quiz: [
      { q: "Quelle est une primitive de f(x) = 3x² + 4x ?",
        choix: ["6x + 4", "3x³ + 4x²", "x³ + 2x²", "x³ + 4x²"],
        bonne: 2, niv: 1,
        expl: "On vérifie : (x³ + 2x²)' = 3x² + 4x. 6x + 4 est la dérivée de f." },
      { q: "Quelle est une primitive de f(x) = e^(2x) ?",
        choix: ["2 e^(2x)", "(1/2) e^(2x)", "e^(2x)", "e^(2x)/x"],
        bonne: 1, niv: 2,
        expl: "La dérivée de (1/2) e^(2x) est e^(2x)." },
      { q: "Quelles sont les solutions de y' = 4y ?",
        choix: ["x ↦ e^(4x) + C, C réel", "x ↦ C e^(4x), C réel", "x ↦ 4 e^x + C, C réel", "x ↦ C e^(x/4), C réel"],
        bonne: 1, niv: 1,
        expl: "Les solutions de y' = ay sont C e^(ax)." },
      { q: "Quelle est la solution constante de y' = −2y + 10 ?",
        choix: ["5", "−5", "10", "20"],
        bonne: 0, niv: 2,
        expl: "y' = 0 donne −2y + 10 = 0, donc y = 5." },
      { q: "Quelles sont les solutions de y' = −2y + 10 ?",
        choix: ["x ↦ C e^(−2x) + 5", "x ↦ C e^(−2x) − 5", "x ↦ C e^(2x) + 5", "x ↦ C e^(−2x) + 10"],
        bonne: 0, niv: 2,
        expl: "Solution constante 5, plus C e^(−2x)." },
      { q: "y' = −0,5y et y(0) = 80. Que vaut y(t) ?",
        choix: ["80 e^(0,5t)", "e^(−0,5t) + 80", "80 e^(−0,5t)", "−0,5 e^(80t)"],
        bonne: 2, niv: 2,
        expl: "Solutions C e^(−0,5t), et y(0) = C = 80." },
      { q: "θ(t) = 60 e^(−0,1t) + 20. Vers quelle valeur tend θ quand t devient grand ?",
        choix: ["80", "60", "0", "20"],
        bonne: 3, niv: 2,
        expl: "e^(−0,1t) tend vers 0, donc θ tend vers 20 : la température de la pièce." },
      { q: "θ' = −0,1θ + 2 et θ(0) = 80. Que vaut la constante C dans θ(t) = C e^(−0,1t) + 20 ?",
        choix: ["80", "20", "60", "100"],
        bonne: 2, niv: 3,
        expl: "θ(0) = C + 20 = 80, donc C = 60. Le piège est de mettre C = 80." },
      { q: "Deux primitives F et G d'une même fonction vérifient F(0) = 2 et G(0) = 5. Que vaut G − F ?",
        choix: ["3 en 0, et une autre valeur ailleurs", "On ne peut pas savoir", "3, pour tout x", "0, pour tout x"],
        bonne: 2, niv: 3,
        expl: "G − F est constante, et vaut G(0) − F(0) = 3." },
      { q: "« La quantité diminue de 5 % par heure et on en ajoute 2 unités par heure. » Quelle équation la modélise ?",
        choix: ["y' = −0,05y + 2", "y' = 0,95y + 2", "y' = −5y + 2", "y' = 0,05y − 2"],
        bonne: 0, niv: 3,
        expl: "Une baisse proportionnelle de 5 % donne −0,05y, et l'apport constant donne + 2." },
      { q: "Dans la méthode d'Euler, quelle formule calcule la valeur suivante ?",
        choix: ["y ← y × h + f(x, y)", "y ← f(x + h, y)", "y ← y − f(x, y) / h", "y ← y + h × f(x, y)"],
        bonne: 3, niv: 1,
        expl: "On avance d'un pas h en suivant la pente donnée par l'équation." },
    ] },
  { chapitre: "maths-comp-5",
    fiche: `## Calcul intégral et aires

L'intégrale mesure une aire sous une courbe. Elle sert aussi à calculer une valeur moyenne, et à mesurer les inégalités de revenus avec la courbe de Lorenz.

### Intégrale et aire
- Si f est **continue et positive** sur [a ; b], **∫ de a à b de f(x) dx** est l'**aire** du domaine entre la courbe, l'axe des abscisses et les droites x = a et x = b, en **unités d'aire**.
- Exemple : ∫ de 0 à 4 de 2 dx = 8 (un rectangle de 4 sur 2).

### Calcul avec une primitive
- Si F est une primitive de f : **∫ de a à b de f(x) dx = F(b) − F(a)**.
- Exemple : ∫ de 0 à 2 de x² dx = [x³/3] de 0 à 2 = 8/3.
- Exemple : ∫ de 0 à 1 de e^x dx = e − 1 ≈ 1,72.
- Si f est négative, l'intégrale est l'**opposé** de l'aire.

### Propriétés
- **Linéarité** : ∫(f + g) = ∫f + ∫g et ∫(kf) = k∫f.
- **Relation de Chasles** : ∫ de a à c = ∫ de a à b + ∫ de b à c.
- **Positivité** : si f ≥ 0 sur [a ; b], l'intégrale est positive. Si f ≤ g, ∫f ≤ ∫g.

### Aire entre deux courbes
- Si **f ≥ g** sur [a ; b], l'aire entre les courbes est **∫ de a à b de (f(x) − g(x)) dx**.
- Exemple : entre y = x et y = x² sur [0 ; 1] : ∫ de 0 à 1 de (x − x²) dx = 1/2 − 1/3 = 1/6.

### Valeur moyenne
- **μ = (1/(b − a)) × ∫ de a à b de f(x) dx**.
- Exemple : une température f(t) sur 10 heures avec ∫ de 0 à 10 de f = 180 : la température moyenne est 18 °C.

### Courbe de Lorenz et indice de Gini
- On range la population de la plus pauvre à la plus riche. **L(x)** est la part des revenus totaux détenue par la proportion x la plus pauvre. Exemple : L(0,5) = 0,2 signifie que la moitié la plus pauvre détient 20 % des revenus.
- L(0) = 0, L(1) = 1, L est croissante, convexe, et L(x) ≤ x.
- La droite y = x correspond à l'**égalité parfaite**.
- L'**indice de Gini** vaut **G = 2 × ∫ de 0 à 1 de (x − L(x)) dx**, soit G = 1 − 2 ∫ de 0 à 1 de L(x) dx. Il est entre 0 (égalité parfaite) et 1 (inégalité maximale).
- Exemple : L(x) = x². ∫ de 0 à 1 de x² dx = 1/3, donc G = 1 − 2/3 = 1/3.

### Méthodes d'approximation (algorithmes)
- **Rectangles** et **trapèzes** : on découpe [a ; b] en n morceaux et on additionne des aires simples.
- **Monte-Carlo** : on tire des points au hasard dans un rectangle et on compte la proportion sous la courbe.

### À retenir pour le bac
- ∫ de a à b de f = F(b) − F(a), dans cet ordre.
- Aire entre deux courbes : celle du dessus moins celle du dessous.
- Valeur moyenne : diviser l'intégrale par la longueur de l'intervalle.
- Gini : G = 1 − 2 ∫ de 0 à 1 de L(x) dx ; plus G est grand, plus la répartition est inégale.`,
    cartes: [
      { q: "Interprétation de l'intégrale d'une fonction positive", r: "L'aire sous la courbe entre x = a et x = b, en unités d'aire." },
      { q: "Calcul d'une intégrale", r: "∫ de a à b de f(x) dx = F(b) − F(a), avec F primitive de f." },
      { q: "Relation de Chasles", r: "∫ de a à c = ∫ de a à b + ∫ de b à c." },
      { q: "Aire entre deux courbes (f ≥ g)", r: "∫ de a à b de (f(x) − g(x)) dx." },
      { q: "Valeur moyenne de f sur [a ; b]", r: "(1/(b − a)) × ∫ de a à b de f(x) dx." },
      { q: "Que signifie L(0,5) = 0,2 pour une courbe de Lorenz ?", r: "La moitié la plus pauvre de la population détient 20 % des revenus." },
      { q: "Propriétés d'une courbe de Lorenz", r: "L(0) = 0, L(1) = 1, L croissante, convexe et L(x) ≤ x." },
      { q: "Que représente la droite y = x pour Lorenz ?", r: "L'égalité parfaite des revenus." },
      { q: "Formule de l'indice de Gini", r: "G = 1 − 2 × ∫ de 0 à 1 de L(x) dx." },
      { q: "Valeurs extrêmes de l'indice de Gini", r: "0 pour l'égalité parfaite, 1 pour l'inégalité maximale." },
      { q: "Indice de Gini pour L(x) = x²", r: "1/3." },
      { q: "Principe de la méthode de Monte-Carlo", r: "Tirer des points au hasard et compter la proportion sous la courbe pour estimer une aire." },
      { q: "Intégrale d'une fonction négative", r: "L'opposé de l'aire : un nombre négatif." },
    ],
    quiz: [
      { q: "Combien vaut ∫ de 0 à 2 de x² dx ?",
        choix: ["4", "2/3", "8", "8/3"],
        bonne: 3, niv: 2,
        expl: "[x³/3] de 0 à 2 = 8/3 − 0." },
      { q: "Combien vaut ∫ de 0 à 1 de e^x dx ?",
        choix: ["e − 1", "e", "1", "e + 1"],
        bonne: 0, niv: 2,
        expl: "[e^x] de 0 à 1 = e − e^0 = e − 1." },
      { q: "Combien vaut ∫ de 1 à 3 de 2x dx ?",
        choix: ["4", "8", "6", "2"],
        bonne: 1, niv: 2,
        expl: "[x²] de 1 à 3 = 9 − 1 = 8." },
      { q: "Quelle est l'aire entre y = x et y = x² sur [0 ; 1] ?",
        choix: ["1/2", "1/6", "1/3", "5/6"],
        bonne: 1, niv: 3,
        expl: "Sur [0 ; 1], x ≥ x². ∫(x − x²) = 1/2 − 1/3 = 1/6." },
      { q: "∫ de 0 à 10 de f(t) dt = 180, avec f la température en °C. Quelle est la température moyenne ?",
        choix: ["180 °C", "1,8 °C", "18 °C", "9 °C"],
        bonne: 2, niv: 2,
        expl: "Valeur moyenne = 180 / (10 − 0) = 18." },
      { q: "Pour une courbe de Lorenz, que signifie L(0,4) = 0,1 ?",
        choix: ["Les 10 % les plus pauvres ont 40 % des revenus", "Les 40 % les plus riches ont 10 % des revenus", "40 % des revenus vont à 10 % de la population", "Les 40 % les plus pauvres ont 10 % des revenus"],
        bonne: 3, niv: 2,
        expl: "x est la part de la population (la plus pauvre), L(x) la part des revenus qu'elle détient." },
      { q: "Que vaut l'indice de Gini en cas d'égalité parfaite des revenus ?",
        choix: ["0", "1", "0,5", "2"],
        bonne: 0, niv: 1,
        expl: "L(x) = x, donc G = 1 − 2 × 1/2 = 0." },
      { q: "L(x) = x². Que vaut l'indice de Gini ?",
        choix: ["2/3", "1/6", "1/3", "1/2"],
        bonne: 2, niv: 3,
        expl: "∫ de 0 à 1 de x² dx = 1/3, donc G = 1 − 2/3 = 1/3." },
      { q: "Un pays A a un indice de Gini de 0,25, un pays B de 0,45. Que peut-on dire ?",
        choix: ["Les revenus sont plus inégaux dans A", "B est plus riche que A", "Les revenus sont plus inégaux dans B", "A est plus riche que B"],
        bonne: 2, niv: 3,
        expl: "Plus G est proche de 1, plus la répartition est inégale. G ne dit rien du niveau de richesse." },
      { q: "f est continue et négative sur [0 ; 2]. Que peut-on dire de ∫ de 0 à 2 de f ?",
        choix: ["Elle est positive", "Elle est égale à l'aire sous la courbe", "Elle est égale à f(2) − f(0)", "Elle est négative ou nulle"],
        bonne: 3, niv: 1,
        expl: "L'intégrale d'une fonction négative est l'opposé de l'aire." },
      { q: "Quelle propriété donne ∫ de 0 à 5 de f = ∫ de 0 à 2 de f + ∫ de 2 à 5 de f ?",
        choix: ["La relation de Chasles", "La linéarité", "La positivité", "La valeur moyenne"],
        bonne: 0, niv: 1,
        expl: "Couper l'intervalle en deux morceaux, c'est la relation de Chasles." },
    ] },
  { chapitre: "maths-comp-6",
    fiche: `## Probabilités conditionnelles et formule de Bayes

Les probabilités conditionnelles répondent à la question : « sachant ce qu'on sait déjà, quelle est la chance que… ? ». Elles servent à interpréter un test médical, un contrôle qualité, un sondage.

### Probabilité conditionnelle
- Si P(A) ≠ 0, la probabilité de B **sachant A** est **P_A(B) = P(A ∩ B) / P(A)**.
- On en tire **P(A ∩ B) = P(A) × P_A(B)** : c'est la règle de la multiplication le long d'une branche.
- Exemple : 60 % des clients sont des femmes, et 30 % des femmes achètent. P(F ∩ Achat) = 0,6 × 0,3 = 0,18.

### Arbre pondéré
- Sur chaque branche, on écrit une probabilité conditionnelle. La somme des branches issues d'un même nœud vaut **1**.
- La probabilité d'un chemin est le **produit** des probabilités le long du chemin.
- La probabilité d'un événement est la **somme** des chemins qui y mènent.

### Formule des probabilités totales
- Si A et son contraire Ā partagent l'univers : **P(B) = P(A) × P_A(B) + P(Ā) × P_Ā(B)**.
- Exemple : une maladie touche 1 % de la population. Un test est positif chez 95 % des malades et chez 2 % des non-malades. P(T) = 0,01 × 0,95 + 0,99 × 0,02 = 0,0095 + 0,0198 = **0,0293**.

### Inverser le conditionnement : formule de Bayes
- **P_B(A) = P(A) × P_A(B) / P(B)**.
- Exemple : P_T(M) = 0,0095 / 0,0293 ≈ **0,324**. Un test positif ne signifie qu'environ **32 % de chances** d'être malade, car la maladie est rare : la plupart des positifs sont de faux positifs.
- Le piège classique est de confondre P_M(T) = 0,95 et P_T(M) ≈ 0,32.

### Indépendance
- A et B sont **indépendants** si **P(A ∩ B) = P(A) × P(B)**, c'est-à-dire si P_A(B) = P(B) : savoir A ne change rien à B.
- Exemple : deux lancers de dé successifs sont indépendants.
- Ne pas confondre avec **incompatibles** (A ∩ B = ∅) : deux événements incompatibles de probabilités non nulles ne sont jamais indépendants.

### Tableau croisé
- Un tableau d'effectifs permet de lire les probabilités conditionnelles : on divise par le total de la ligne ou de la colonne de la condition.
- Exemple : sur 200 élèves, 80 font du sport, dont 50 filles. La probabilité qu'un sportif choisi soit une fille vaut 50/80 = 0,625.

### Rédiger
- Nommer les événements avec des lettres (M : « malade », T : « test positif »), puis traduire chaque pourcentage de l'énoncé en probabilité simple ou conditionnelle.

### À retenir pour le bac
- Repérer le « sachant » : c'est la condition, en indice.
- Branche : multiplier ; plusieurs chemins : additionner.
- Bayes : P_B(A) = P(A ∩ B) / P(B), en calculant P(B) avec les probabilités totales.
- Indépendance : P(A ∩ B) = P(A) × P(B), à vérifier par le calcul.`,
    cartes: [
      { q: "Définition de P_A(B)", r: "P(A ∩ B) / P(A), pour P(A) ≠ 0." },
      { q: "Probabilité d'un chemin dans un arbre", r: "Le produit des probabilités le long du chemin." },
      { q: "Somme des branches issues d'un nœud", r: "1." },
      { q: "Formule des probabilités totales (A et Ā)", r: "P(B) = P(A) × P_A(B) + P(Ā) × P_Ā(B)." },
      { q: "Formule de Bayes", r: "P_B(A) = P(A) × P_A(B) / P(B)." },
      { q: "Définition de l'indépendance de A et B", r: "P(A ∩ B) = P(A) × P(B)." },
      { q: "Indépendance et probabilité conditionnelle", r: "A et B indépendants ⟺ P_A(B) = P(B), si P(A) ≠ 0." },
      { q: "Différence entre incompatibles et indépendants", r: "Incompatibles : A ∩ B = ∅. Indépendants : P(A ∩ B) = P(A) × P(B)." },
      { q: "Test à 95 % pour une maladie à 1 % (2 % de faux positifs) : P(T)", r: "0,0293." },
      { q: "Même test : P_T(M)", r: "Environ 0,324." },
      { q: "Pourquoi P_T(M) est faible pour une maladie rare ?", r: "Les faux positifs chez les très nombreux non-malades dépassent les vrais positifs." },
      { q: "Lire P_A(B) dans un tableau croisé", r: "Effectif de A ∩ B divisé par l'effectif total de A." },
      { q: "P(Ā) en fonction de P(A)", r: "1 − P(A)." },
    ],
    quiz: [
      { q: "60 % des clients sont des femmes, et 30 % des femmes achètent. Quelle est la probabilité qu'un client soit une femme qui achète ?",
        choix: ["0,3", "0,18", "0,9", "0,5"],
        bonne: 1, niv: 1,
        expl: "P(F ∩ A) = P(F) × P_F(A) = 0,6 × 0,3." },
      { q: "P(A) = 0,4 et P(A ∩ B) = 0,1. Que vaut P_A(B) ?",
        choix: ["0,04", "0,1", "0,14", "0,25"],
        bonne: 3, niv: 1,
        expl: "P_A(B) = 0,1 / 0,4 = 0,25." },
      { q: "Maladie à 1 %, test positif chez 95 % des malades et 2 % des non-malades. Que vaut P(T) ?",
        choix: ["0,0095", "0,97", "0,0198", "0,0293"],
        bonne: 3, niv: 2,
        expl: "Probabilités totales : 0,01 × 0,95 + 0,99 × 0,02 = 0,0293." },
      { q: "Même situation : quelle est la probabilité d'être malade sachant que le test est positif ?",
        choix: ["0,95", "Environ 0,32", "0,01", "Environ 0,68"],
        bonne: 1, niv: 3,
        expl: "Bayes : 0,0095 / 0,0293 ≈ 0,324." },
      { q: "Pourquoi P_T(M) est-il bien plus faible que P_M(T) dans un dépistage d'une maladie rare ?",
        choix: ["Le test se trompe souvent sur les malades", "La formule de Bayes donne des valeurs approchées", "Les faux positifs des non-malades sont plus nombreux que les vrais positifs", "Le calcul de P_T(M) oublie les non-malades"],
        bonne: 2, niv: 3,
        expl: "0,0198 de faux positifs contre 0,0095 de vrais positifs : la majorité des tests positifs viennent de non-malades." },
      { q: "P(A) = 0,5, P(B) = 0,4 et P(A ∩ B) = 0,2. A et B sont-ils indépendants ?",
        choix: ["Non, car 0,5 + 0,4 ≠ 1", "Non, car P(A ∩ B) ≠ 0", "On ne peut pas savoir", "Oui, car 0,5 × 0,4 = 0,2"],
        bonne: 3, niv: 2,
        expl: "On compare P(A ∩ B) à P(A) × P(B) : ici 0,2 = 0,2." },
      { q: "A et B sont incompatibles, avec P(A) = 0,3 et P(B) = 0,5. Sont-ils indépendants ?",
        choix: ["Oui, car ils n'ont rien en commun", "Oui, car 0,3 + 0,5 < 1", "Non, car P(A) ≠ P(B)", "Non, car P(A ∩ B) = 0 et P(A) × P(B) = 0,15"],
        bonne: 3, niv: 3,
        expl: "Incompatibles : P(A ∩ B) = 0. Pour l'indépendance, il faudrait 0 = 0,15." },
      { q: "Sur 200 élèves, 80 font du sport, dont 50 filles. Quelle est la probabilité qu'un sportif choisi soit une fille ?",
        choix: ["0,25", "0,625", "0,4", "0,5"],
        bonne: 1, niv: 2,
        expl: "On se place parmi les 80 sportifs : 50/80 = 0,625. 50/200 = 0,25 est P(Fille ∩ Sport)." },
      { q: "Dans un arbre, une branche issue de A porte 0,7. Que porte l'autre branche issue de A ?",
        choix: ["0,3", "0,7", "1,7", "On ne peut pas savoir"],
        bonne: 0, niv: 1,
        expl: "Les branches issues d'un même nœud ont une somme égale à 1." },
      { q: "P(A) = 0,2, P_A(B) = 0,5 et P_Ā(B) = 0,1. Que vaut P(B) ?",
        choix: ["0,6", "0,18", "0,1", "0,3"],
        bonne: 1, niv: 2,
        expl: "0,2 × 0,5 + 0,8 × 0,1 = 0,1 + 0,08 = 0,18." },
      { q: "Dans « la probabilité qu'une pièce soit défectueuse sachant qu'elle vient de l'usine 2 », quelle est la condition ?",
        choix: ["Venir de l'usine 2", "Être défectueuse", "Avoir un défaut et venir de l'usine 2", "Sortir de l'usine 1"],
        bonne: 0, niv: 1,
        expl: "La condition est ce qui suit « sachant » : on se place parmi les pièces de l'usine 2." },
    ] },
  { chapitre: "maths-comp-7",
    fiche: `## Lois discrètes : Bernoulli, binomiale et géométrique

Une variable aléatoire associe un nombre à chaque issue d'une expérience. Ce chapitre étudie les lois qui comptent des succès, ou qui mesurent le temps d'attente du premier succès.

### Variable aléatoire discrète (rappel)
- La **loi** de X donne P(X = k) pour chaque valeur k ; la somme de ces probabilités vaut 1.
- **Espérance** : E(X) = somme des k × P(X = k). C'est la **moyenne à long terme**.
- **Variance** : V(X) = E((X − E(X))²), et l'écart type σ = √V(X).
- **Loi uniforme discrète** sur {1, …, n} : chaque valeur a la probabilité 1/n, et E(X) = (n + 1)/2. Exemple : un dé, E = 3,5.

### Épreuve et loi de Bernoulli
- Une **épreuve de Bernoulli** a deux issues : **succès** (probabilité p) et échec (1 − p).
- X vaut 1 en cas de succès et 0 sinon : **E(X) = p**, **V(X) = p(1 − p)**.

### Loi binomiale B(n ; p)
- On répète **n** fois, de façon **identique et indépendante**, une épreuve de Bernoulli. X compte le **nombre de succès**.
- **P(X = k) = (k parmi n) × p^k × (1 − p)^(n−k)**, pour k de 0 à n.
- **E(X) = np** ; **V(X) = np(1 − p)**.
- Exemple : 10 tirs, 30 % de réussite. P(X = 3) = 120 × 0,3³ × 0,7⁷ ≈ 0,267. E(X) = 3.
- **P(X ≥ 1) = 1 − P(X = 0) = 1 − (1 − p)^n**. Exemple : 1 − 0,7^10 ≈ 0,972.
- La calculatrice donne P(X = k) et P(X ≤ k) (probabilités cumulées).

### Loi géométrique
- On répète une épreuve de Bernoulli de succès p jusqu'au **premier succès**. X est le **rang du premier succès** (temps d'attente).
- **P(X = k) = (1 − p)^(k−1) × p**, pour k ≥ 1 : k − 1 échecs puis un succès.
- **P(X > k) = (1 − p)^k** : les k premiers essais sont des échecs.
- **E(X) = 1/p**. Exemple : obtenir un 6 avec un dé, p = 1/6 : en moyenne 6 lancers.
- **Absence de mémoire** : P_(X > m)(X > m + k) = P(X > k). Avoir déjà échoué ne rapproche pas du succès.

### Reconnaître la bonne loi
- Nombre fixé d'essais, on compte les succès : **binomiale**.
- On attend le premier succès, le nombre d'essais n'est pas fixé : **géométrique**.
- Une seule épreuve : **Bernoulli**.
- Il faut justifier : répétitions identiques et indépendantes, deux issues, et donner les paramètres.

### Simulation (algorithme)
- En Python, random() < p simule un succès de probabilité p. Une boucle compte les succès (binomiale) ou les essais jusqu'au premier succès (géométrique).

### À retenir pour le bac
- Binomiale : P(X = k) = (k parmi n) p^k (1 − p)^(n−k), E = np.
- Géométrique : P(X = k) = (1 − p)^(k−1) p, E = 1/p.
- « Au moins un » : passer par le contraire.
- Justifier la loi avant de calculer.`,
    cartes: [
      { q: "Espérance d'une variable aléatoire", r: "La somme des k × P(X = k) : la moyenne à long terme." },
      { q: "Espérance et variance d'une loi de Bernoulli", r: "E = p et V = p(1 − p)." },
      { q: "Conditions d'une loi binomiale", r: "n répétitions identiques et indépendantes d'une épreuve à deux issues ; X compte les succès." },
      { q: "P(X = k) pour B(n ; p)", r: "(k parmi n) × p^k × (1 − p)^(n−k)." },
      { q: "Espérance de B(n ; p)", r: "np." },
      { q: "Variance de B(n ; p)", r: "np(1 − p)." },
      { q: "P(X ≥ 1) pour B(n ; p)", r: "1 − (1 − p)^n." },
      { q: "Que mesure une loi géométrique ?", r: "Le rang du premier succès, quand on répète une épreuve de Bernoulli." },
      { q: "P(X = k) pour une loi géométrique de paramètre p", r: "(1 − p)^(k−1) × p." },
      { q: "P(X > k) pour une loi géométrique", r: "(1 − p)^k." },
      { q: "Espérance d'une loi géométrique", r: "1/p." },
      { q: "Absence de mémoire de la loi géométrique", r: "P_(X > m)(X > m + k) = P(X > k) : les échecs passés ne changent rien." },
      { q: "Espérance de la loi uniforme sur {1, …, n}", r: "(n + 1)/2." },
    ],
    quiz: [
      { q: "X suit B(10 ; 0,3). Que vaut E(X) ?",
        choix: ["0,3", "0,7", "3", "2,1"],
        bonne: 2, niv: 1,
        expl: "E(X) = np = 10 × 0,3 = 3." },
      { q: "X suit B(10 ; 0,3). Que vaut V(X) ?",
        choix: ["3", "0,21", "0,9", "2,1"],
        bonne: 3, niv: 2,
        expl: "V(X) = np(1 − p) = 10 × 0,3 × 0,7 = 2,1." },
      { q: "X suit B(10 ; 0,3). Quelle expression donne P(X = 3) ?",
        choix: ["(3 parmi 10) × 0,3³ × 0,7⁷", "0,3³ × 0,7⁷", "(3 parmi 10) × 0,3⁷ × 0,7³", "10 × 0,3³"],
        bonne: 0, niv: 2,
        expl: "On choisit les 3 succès parmi les 10 essais, puis on multiplie p³ et (1 − p)⁷." },
      { q: "X suit B(10 ; 0,3). Quelle est la valeur arrondie de P(X ≥ 1) ?",
        choix: ["0,028", "0,3", "0,972", "0,7"],
        bonne: 2, niv: 3,
        expl: "1 − P(X = 0) = 1 − 0,7^10 ≈ 1 − 0,028 = 0,972." },
      { q: "On lance un dé jusqu'à obtenir un 6. Quel est le nombre moyen de lancers ?",
        choix: ["3,5", "1/6", "6", "5"],
        bonne: 2, niv: 2,
        expl: "Loi géométrique de paramètre 1/6 : E = 1/p = 6." },
      { q: "X suit une loi géométrique de paramètre 0,2. Que vaut P(X = 3) ?",
        choix: ["0,128", "0,008", "0,2", "0,096"],
        bonne: 0, niv: 2,
        expl: "Deux échecs puis un succès : 0,8² × 0,2 = 0,128." },
      { q: "X suit une loi géométrique de paramètre 0,2. Que vaut P(X > 2) ?",
        choix: ["0,04", "0,36", "0,8", "0,64"],
        bonne: 3, niv: 2,
        expl: "Les deux premiers essais sont des échecs : 0,8² = 0,64." },
      { q: "On tire 5 fois avec remise une boule dans une urne (3 rouges, 7 noires) et on compte les rouges. Quelle loi suit ce nombre ?",
        choix: ["B(5 ; 0,7)", "B(5 ; 0,3)", "Géométrique de paramètre 0,3", "Uniforme sur {0, …, 5}"],
        bonne: 1, niv: 2,
        expl: "5 tirages identiques et indépendants (avec remise), succès « rouge » de probabilité 0,3." },
      { q: "Un joueur a raté ses 4 premiers tirs (loi géométrique). Que dit l'absence de mémoire ?",
        choix: ["La probabilité d'attendre encore k tirs est la même qu'au départ", "Son prochain tir a plus de chances d'être réussi", "Sa probabilité de réussite augmente", "Il a moins de chances de réussir ensuite"],
        bonne: 0, niv: 3,
        expl: "P_(X > 4)(X > 4 + k) = P(X > k) : les échecs passés ne changent rien." },
      { q: "On compte le nombre de lancers d'une pièce jusqu'au premier pile. Pourquoi n'est-ce pas une loi binomiale ?",
        choix: ["Les lancers ne sont pas indépendants", "Le nombre d'essais n'est pas fixé à l'avance", "Il y a plus de deux issues", "La probabilité change à chaque lancer"],
        bonne: 1, niv: 3,
        expl: "La binomiale demande un nombre n d'essais fixé ; ici on attend le premier succès : loi géométrique." },
      { q: "X suit la loi uniforme sur {1, 2, 3, 4, 5, 6}. Que vaut E(X) ?",
        choix: ["3", "6", "21", "3,5"],
        bonne: 3, niv: 1,
        expl: "E(X) = (6 + 1)/2 = 3,5." },
    ] },
  { chapitre: "maths-comp-8",
    fiche: `## Lois à densité : uniforme et exponentielle

Certaines variables peuvent prendre toutes les valeurs d'un intervalle : un temps d'attente, une durée de vie, une heure d'arrivée. On ne parle plus de P(X = k) mais de la probabilité que X soit dans un intervalle, qu'on calcule par une **intégrale**.

### Densité de probabilité
- Une **densité** sur un intervalle I est une fonction f **continue**, **positive**, et dont l'**intégrale sur I vaut 1** (l'aire totale sous la courbe vaut 1).
- **P(a ≤ X ≤ b) = ∫ de a à b de f(x) dx** : c'est une **aire**.
- Pour une loi à densité, **P(X = a) = 0**. Donc P(X ≤ a) = P(X < a) : inégalités larges ou strictes, c'est pareil.
- **Espérance** : E(X) = ∫ x f(x) dx sur I.

### Loi uniforme sur [a ; b]
- Densité constante : **f(x) = 1/(b − a)** sur [a ; b].
- **P(c ≤ X ≤ d) = (d − c)/(b − a)** pour [c ; d] inclus dans [a ; b] : longueur favorable sur longueur totale.
- **E(X) = (a + b)/2**, le milieu.
- Exemple : un bus passe toutes les 15 minutes, l'attente X suit la loi uniforme sur [0 ; 15]. P(X ≤ 5) = 5/15 = 1/3. E(X) = 7,5 minutes.

### Loi exponentielle de paramètre λ > 0
- Densité **f(x) = λ e^(−λx)** sur [0 ; +∞[.
- **P(X ≤ t) = 1 − e^(−λt)** et **P(X > t) = e^(−λt)**.
- **P(a ≤ X ≤ b) = e^(−λa) − e^(−λb)**.
- **E(X) = 1/λ** : la durée moyenne.
- Exemple : la durée de vie d'un composant, en années, suit la loi exponentielle de paramètre 0,2. E(X) = 5 ans. P(X > 5) = e^(−1) ≈ 0,368. P(X ≤ 2) = 1 − e^(−0,4) ≈ 0,330.
- **Trouver λ** : si la durée moyenne est 8 ans, λ = 1/8 = 0,125.

### Absence de mémoire
- **P_(X > s)(X > s + t) = P(X > t)**. Un composant qui a déjà fonctionné s ans a la même probabilité de durer encore t ans qu'un composant neuf.
- La loi exponentielle modélise donc des durées de vie **sans vieillissement** (pannes accidentelles, désintégration d'un atome).
- C'est l'équivalent continu de la loi géométrique.

### Calculer un seuil
- « Au bout de combien de temps la moitié des composants est en panne ? » On résout 1 − e^(−λt) = 0,5, donc **t = ln(2)/λ** (la médiane). Pour λ = 0,2 : t ≈ 3,47 ans.

### Simulation (algorithme)
- random() en Python simule la loi uniforme sur [0 ; 1]. a + (b − a) × random() simule la loi uniforme sur [a ; b].

### Lire un énoncé
- « Durée de vie moyenne » donne E(X), donc λ = 1/E(X).

### À retenir pour le bac
- Une probabilité est une aire sous la densité ; P(X = a) = 0.
- Uniforme sur [a ; b] : longueur sur longueur, E = (a + b)/2.
- Exponentielle : P(X > t) = e^(−λt), E = 1/λ.
- Absence de mémoire : le passé ne change pas l'avenir.`,
    cartes: [
      { q: "Conditions pour qu'une fonction soit une densité sur I", r: "Continue, positive, et d'intégrale 1 sur I." },
      { q: "P(a ≤ X ≤ b) pour une loi à densité f", r: "∫ de a à b de f(x) dx." },
      { q: "P(X = a) pour une loi à densité", r: "0." },
      { q: "Densité de la loi uniforme sur [a ; b]", r: "f(x) = 1/(b − a)." },
      { q: "P(c ≤ X ≤ d) pour la loi uniforme sur [a ; b]", r: "(d − c)/(b − a)." },
      { q: "Espérance de la loi uniforme sur [a ; b]", r: "(a + b)/2." },
      { q: "Densité de la loi exponentielle de paramètre λ", r: "f(x) = λ e^(−λx) sur [0 ; +∞[." },
      { q: "P(X > t) pour la loi exponentielle", r: "e^(−λt)." },
      { q: "P(X ≤ t) pour la loi exponentielle", r: "1 − e^(−λt)." },
      { q: "Espérance de la loi exponentielle", r: "1/λ." },
      { q: "Absence de mémoire de la loi exponentielle", r: "P_(X > s)(X > s + t) = P(X > t)." },
      { q: "Médiane de la loi exponentielle", r: "t = ln(2)/λ." },
      { q: "Simuler la loi uniforme sur [a ; b] en Python", r: "a + (b − a) * random()." },
    ],
    quiz: [
      { q: "X suit la loi uniforme sur [0 ; 15]. Que vaut P(X ≤ 5) ?",
        choix: ["5", "1/3", "1/5", "2/3"],
        bonne: 1, niv: 1,
        expl: "Longueur favorable sur longueur totale : 5/15." },
      { q: "X suit la loi uniforme sur [2 ; 10]. Que vaut E(X) ?",
        choix: ["6", "4", "5", "3"],
        bonne: 0, niv: 1,
        expl: "Le milieu : (2 + 10)/2 = 6." },
      { q: "X suit la loi uniforme sur [0 ; 20]. Que vaut P(4 ≤ X ≤ 9) ?",
        choix: ["0,45", "0,2", "0,5", "0,25"],
        bonne: 3, niv: 2,
        expl: "(9 − 4)/20 = 5/20 = 0,25." },
      { q: "X suit la loi exponentielle de paramètre 0,2. Que vaut E(X) ?",
        choix: ["0,2", "5", "2", "0,5"],
        bonne: 1, niv: 1,
        expl: "E(X) = 1/λ = 1/0,2 = 5." },
      { q: "X suit la loi exponentielle de paramètre 0,2. Quelle est la valeur arrondie de P(X > 5) ?",
        choix: ["0,368", "0,632", "0,2", "0,5"],
        bonne: 0, niv: 2,
        expl: "P(X > 5) = e^(−0,2 × 5) = e^(−1) ≈ 0,368." },
      { q: "X suit la loi exponentielle de paramètre 0,2. Quelle est la valeur arrondie de P(X ≤ 2) ?",
        choix: ["0,670", "0,4", "0,330", "0,819"],
        bonne: 2, niv: 2,
        expl: "1 − e^(−0,4) ≈ 1 − 0,670 = 0,330." },
      { q: "Une durée de vie suit une loi exponentielle de moyenne 8 ans. Que vaut λ ?",
        choix: ["8", "0,125", "0,8", "1,25"],
        bonne: 1, niv: 2,
        expl: "E(X) = 1/λ = 8, donc λ = 1/8 = 0,125." },
      { q: "X suit une loi à densité. Que vaut P(X = 3) ?",
        choix: ["f(3)", "1", "0", "On ne peut pas savoir"],
        bonne: 2, niv: 2,
        expl: "La probabilité d'un point est une aire de largeur nulle." },
      { q: "Un composant (loi exponentielle) fonctionne déjà depuis 4 ans. Quelle est la probabilité qu'il dure encore 3 ans ?",
        choix: ["P(X > 7)", "P(X > 3)", "P(X > 4) × P(X > 3) × 2", "P(X > 7) − P(X > 4)"],
        bonne: 1, niv: 3,
        expl: "Absence de mémoire : P_(X > 4)(X > 7) = P(X > 3)." },
      { q: "X suit la loi exponentielle de paramètre 0,2. Au bout de combien d'années la moitié des composants est-elle en panne ?",
        choix: ["5", "Environ 3,47", "2,5", "Environ 0,14"],
        bonne: 1, niv: 3,
        expl: "1 − e^(−0,2t) = 0,5 donne t = ln(2)/0,2 ≈ 3,47." },
      { q: "Pour quelle valeur de c la fonction constante f(x) = c est-elle une densité sur [0 ; 4] ?",
        choix: ["0,25", "4", "1", "0,5"],
        bonne: 0, niv: 3,
        expl: "L'aire 4 × c doit valoir 1, donc c = 1/4." },
    ] },
  { chapitre: "maths-comp-9",
    fiche: `## Statistique à deux variables

On étudie deux grandeurs mesurées sur les mêmes individus (dépenses de publicité et ventes, âge et prix d'une voiture) pour voir si elles sont liées, et pour faire des prévisions.

### Nuage de points
- Chaque individu donne un point (xi ; yi). L'ensemble forme le **nuage de points**.
- Le **point moyen** G a pour coordonnées (x̄ ; ȳ), les moyennes des xi et des yi.
- Si le nuage est allongé autour d'une droite, on envisage un **ajustement affine**.

### Droite des moindres carrés
- La **droite de régression de y en x** (méthode des **moindres carrés**) est la droite y = ax + b qui rend **minimale la somme des carrés des écarts verticaux** (yi − (a xi + b))².
- Elle **passe par le point moyen G**.
- On obtient a et b à la **calculatrice** ou au tableur. Ensuite b = ȳ − a x̄.
- Exemple : y = 2,5x + 40 avec x en milliers d'euros de publicité et y en milliers de ventes. Pour x = 12 : y = 70.

### Coefficient de corrélation
- Le **coefficient de corrélation linéaire r** est compris entre **−1 et 1**.
- **∣r∣ proche de 1** : le nuage est presque aligné, l'ajustement affine est **pertinent**. r > 0 : y augmente avec x ; r < 0 : y diminue quand x augmente.
- **r proche de 0** : pas de lien **affine** (il peut y avoir un lien d'une autre forme).
- **Corrélation n'est pas causalité** : deux grandeurs peuvent évoluer ensemble à cause d'un troisième facteur. Exemple : les ventes de glaces et les noyades augmentent toutes les deux en été.

### Interpolation et extrapolation
- **Interpolation** : estimer y pour un x **à l'intérieur** de l'intervalle des données. Plutôt fiable.
- **Extrapolation** : estimer y **en dehors** de cet intervalle (une prévision). À prendre avec prudence : rien ne garantit que la tendance continue.

### Changement de variable
- Si le nuage a une forme de courbe exponentielle, on pose **z = ln(y)**. Si les points (xi ; zi) sont alignés, on ajuste z = ax + b, puis on revient à **y = e^(ax + b) = e^b × e^(ax)**.
- Exemple : z = 0,1x + 2 donne y = e^2 × e^(0,1x) ≈ 7,39 × e^(0,1x).

### Lire un énoncé
- Bien identifier la variable explicative x et la variable expliquée y.
- Arrondir a et b comme demandé, puis utiliser l'équation arrondie.
- Donner la réponse dans les unités du contexte.

### Calculatrice
- On entre les xi et les yi dans deux listes, puis on lit a, b et r.

### À retenir pour le bac
- La droite des moindres carrés passe par G(x̄ ; ȳ).
- ∣r∣ proche de 1 : ajustement affine justifié.
- Une corrélation ne prouve pas une cause.
- Une extrapolation est une prévision fragile.`,
    cartes: [
      { q: "Coordonnées du point moyen G", r: "(x̄ ; ȳ), les moyennes des xi et des yi." },
      { q: "Principe de la méthode des moindres carrés", r: "Rendre minimale la somme des carrés des écarts verticaux entre les points et la droite." },
      { q: "Point par lequel passe la droite des moindres carrés", r: "Le point moyen G." },
      { q: "Calcul de b si on connaît a et G", r: "b = ȳ − a x̄." },
      { q: "Valeurs possibles du coefficient de corrélation r", r: "Entre −1 et 1." },
      { q: "Que signifie ∣r∣ proche de 1 ?", r: "Les points sont presque alignés : l'ajustement affine est pertinent." },
      { q: "Que signifie r proche de 0 ?", r: "Il n'y a pas de lien affine entre les deux variables." },
      { q: "Signe de r et sens de variation", r: "r > 0 : y augmente avec x ; r < 0 : y diminue quand x augmente." },
      { q: "Corrélation et causalité", r: "Une corrélation forte ne prouve pas qu'une variable cause l'autre." },
      { q: "Différence entre interpolation et extrapolation", r: "Interpolation : à l'intérieur des données ; extrapolation : en dehors, plus risquée." },
      { q: "Changement de variable pour un nuage de forme exponentielle", r: "Poser z = ln(y), ajuster z = ax + b, puis y = e^b × e^(ax)." },
      { q: "Retour à y depuis z = 0,1x + 2", r: "y = e^2 × e^(0,1x) ≈ 7,39 e^(0,1x)." },
      { q: "Exemple classique de corrélation sans causalité", r: "Ventes de glaces et noyades, qui dépendent toutes deux de la chaleur." },
    ],
    quiz: [
      { q: "x̄ = 10 et ȳ = 65, et la droite a pour pente a = 2,5. Que vaut b ?",
        choix: ["40", "65", "25", "15"],
        bonne: 0, niv: 2,
        expl: "La droite passe par G : b = ȳ − a x̄ = 65 − 25 = 40." },
      { q: "La droite d'ajustement est y = 2,5x + 40. Quelle estimation donne-t-elle pour x = 12 ?",
        choix: ["30", "52,5", "80", "70"],
        bonne: 3, niv: 1,
        expl: "2,5 × 12 + 40 = 30 + 40 = 70." },
      { q: "Par quel point passe toujours la droite des moindres carrés ?",
        choix: ["L'origine du repère", "Le premier point du nuage", "Le point moyen G(x̄ ; ȳ)", "Le point le plus haut du nuage"],
        bonne: 2, niv: 1,
        expl: "C'est une propriété de la droite des moindres carrés." },
      { q: "Le coefficient de corrélation vaut −0,97. Que peut-on dire ?",
        choix: ["Il n'y a pas de lien entre x et y", "y augmente fortement avec x", "Un ajustement affine est pertinent, avec y qui diminue quand x augmente", "La valeur est impossible"],
        bonne: 2, niv: 2,
        expl: "∣r∣ est proche de 1 et r < 0 : la droite descend." },
      { q: "Le coefficient de corrélation vaut 0,05. Que peut-on dire ?",
        choix: ["Les points sont presque alignés", "x cause y", "L'ajustement affine est excellent", "Il n'y a pas de lien affine entre x et y"],
        bonne: 3, niv: 2,
        expl: "r proche de 0 : pas de lien affine, même s'il peut exister un lien d'une autre forme." },
      { q: "Les ventes de glaces et le nombre de noyades sont très corrélés. Que peut-on conclure ?",
        choix: ["Manger une glace provoque des noyades", "Rien sur une cause : les deux dépendent sans doute de la chaleur", "Les noyades font vendre des glaces", "Le coefficient r est négatif"],
        bonne: 1, niv: 2,
        expl: "Corrélation n'est pas causalité : un troisième facteur explique les deux." },
      { q: "Les données vont de 2015 à 2024. Estimer la valeur de 2030 avec la droite, c'est :",
        choix: ["Une interpolation, plutôt fiable", "Un calcul exact", "Un calcul impossible", "Une extrapolation, à prendre avec prudence"],
        bonne: 3, niv: 2,
        expl: "2030 est en dehors de l'intervalle des données." },
      { q: "On pose z = ln(y) et on trouve z = 0,1x + 2. Quelle expression donne y ?",
        choix: ["e^2 × e^(0,1x)", "0,1x + e^2", "ln(0,1x + 2)", "2 e^(0,1x) + 1"],
        bonne: 0, niv: 3,
        expl: "y = e^z = e^(0,1x + 2) = e^2 × e^(0,1x)." },
      { q: "Que rend minimale la méthode des moindres carrés ?",
        choix: ["La somme des écarts horizontaux", "Le nombre de points hors de la droite", "La somme des carrés des écarts verticaux", "La distance entre le premier et le dernier point"],
        bonne: 2, niv: 2,
        expl: "On minimise la somme des (yi − (a xi + b))²." },
      { q: "Le nuage de points monte de plus en plus vite. Quel changement de variable est le plus adapté ?",
        choix: ["z = y²", "z = y + 1", "z = ln(y)", "z = 2y"],
        bonne: 2, niv: 3,
        expl: "Une forme exponentielle devient affine en passant au logarithme." },
      { q: "On veut prévoir le prix d'une voiture d'après son âge. Quelle est la variable expliquée y ?",
        choix: ["L'âge", "Le kilométrage", "Le point moyen", "Le prix"],
        bonne: 3, niv: 1,
        expl: "On explique le prix par l'âge : x = âge, y = prix." },
    ] },
  ],
  methode: [
    {
      "id": "maths-comp-m1",
      "mat": "maths-comp",
      "titre": "Suite arithmético-géométrique et suite auxiliaire",
      "formules": [
        "Montrer que la suite (vn) définie par vn = un − k est géométrique",
        "En déduire l'expression de un en fonction de n",
        "Déterminer la limite de la suite et l'interpréter",
        "À partir de quelle année… ?"
      ],
      "vu": [
        "Exercice classique des contrôles (modèles d'évolution : population, abonnés, médicament)"
      ],
      "pts": "Souvent 4 à 6 points",
      "attendu": "Traduire l'énoncé en u(n+1) = a un + b, montrer que vn est géométrique en calculant v(n+1) en fonction de vn, écrire un, trouver la limite et répondre à la question de seuil avec la calculatrice ou ln.",
      "etapes": [
        "Traduire l'énoncé : u(n+1) = a un + b",
        "Calculer v(n+1) = u(n+1) − k et le factoriser en a × vn",
        "Donner v0 puis vn = v0 × a^n",
        "Revenir à un = vn + k",
        "Limite : si 0 < a < 1, a^n tend vers 0 et un tend vers k",
        "Seuil : résoudre l'inéquation avec ln, ou tableau de valeurs, ou boucle while"
      ],
      "mots": [
        "suite géométrique de raison",
        "premier terme",
        "pour tout entier naturel n",
        "limite",
        "seuil"
      ],
      "pieges": [
        "Écrire v(n+1) = a vn sans le calculer",
        "Oublier de rajouter k pour revenir à un",
        "Oublier de changer le sens de l'inégalité en divisant par ln(a) < 0"
      ],
      "cas": "Un site compte 2 000 abonnés. Chaque mois, 10 % des abonnés partent et 300 nouveaux arrivent. On note un le nombre d'abonnés après n mois : u0 = 2 000 et u(n+1) = 0,9 un + 300.",
      "question": "On pose vn = un − 3 000. Montrer que (vn) est géométrique, puis donner un et sa limite.",
      "modele": "v(n+1) = u(n+1) − 3 000 = 0,9 un + 300 − 3 000 = 0,9 un − 2 700 = 0,9 (un − 3 000) = 0,9 vn. Donc (vn) est géométrique de raison 0,9 et de premier terme v0 = 2 000 − 3 000 = −1 000. Ainsi vn = −1 000 × 0,9^n et un = 3 000 − 1 000 × 0,9^n. Comme 0 < 0,9 < 1, 0,9^n tend vers 0, donc un tend vers 3 000 : à long terme, le site approche 3 000 abonnés.",
      "grille": [
        "v(n+1) est calculé, pas affirmé",
        "La factorisation 0,9 (un − 3 000) est faite",
        "La raison et le premier terme sont donnés",
        "un est exprimé en fonction de n",
        "La limite est justifiée et interprétée"
      ]
    },
    {
      "id": "maths-comp-m2",
      "mat": "maths-comp",
      "titre": "Arbre, formule des probabilités totales et formule de Bayes",
      "formules": [
        "Construire un arbre pondéré",
        "Calculer la probabilité que le test soit positif",
        "Sachant que le test est positif, quelle est la probabilité que la personne soit malade ?"
      ],
      "vu": [
        "Exercice classique des contrôles (tests de dépistage, contrôle qualité)"
      ],
      "pts": "Souvent 4 à 5 points",
      "attendu": "Un arbre juste, P(B) par la formule des probabilités totales, puis la probabilité « inversée » P_B(A) = P(A ∩ B) / P(B), avec une phrase d'interprétation.",
      "etapes": [
        "Nommer les événements",
        "Traduire chaque pourcentage en P(A) ou P_A(B)",
        "Construire l'arbre et compléter par les contraires",
        "P(B) = P(A ∩ B) + P(Ā ∩ B)",
        "P_B(A) = P(A ∩ B) / P(B)",
        "Interpréter le résultat"
      ],
      "mots": [
        "probabilité conditionnelle",
        "formule des probabilités totales",
        "formule de Bayes",
        "arbre pondéré",
        "sachant que"
      ],
      "pieges": [
        "Confondre P_A(B) et P_B(A)",
        "Oublier une branche",
        "Croire qu'un test fiable à 99 % donne 99 % de chances d'être malade"
      ],
      "cas": "Une maladie touche 1 % d'une population. Un test est positif pour 95 % des malades et pour 2 % des personnes saines.",
      "question": "Une personne a un test positif. Quelle est la probabilité qu'elle soit malade ?",
      "modele": "M : « malade », T : « test positif ». P(M) = 0,01, P_M(T) = 0,95, P_M̄(T) = 0,02. P(T) = 0,01 × 0,95 + 0,99 × 0,02 = 0,0095 + 0,0198 = 0,0293. P_T(M) = 0,0095 / 0,0293 ≈ 0,324. Moins d'un tiers des personnes positives sont malades, car la maladie est rare : il faut un second test.",
      "grille": [
        "Les événements sont nommés",
        "P(T) est calculée par les probabilités totales",
        "La formule P_T(M) = P(M ∩ T) / P(T) est écrite",
        "Le résultat ≈ 0,324 est juste",
        "Une interprétation est donnée"
      ]
    },
    {
      "id": "maths-comp-m3",
      "mat": "maths-comp",
      "titre": "Loi exponentielle et temps d'attente",
      "formules": [
        "Calculer la probabilité que la durée de vie dépasse 5 ans",
        "Calculer l'espérance et l'interpréter",
        "Déterminer λ sachant que…",
        "Montrer que la loi est sans mémoire"
      ],
      "vu": [
        "Exercice classique des contrôles (durée de vie d'un appareil, temps d'attente)"
      ],
      "pts": "Souvent 4 à 5 points",
      "attendu": "Utiliser P(X ≤ t) = 1 − e^(−λt) et P(X > t) = e^(−λt), trouver λ avec ln, interpréter E(X) = 1/λ et utiliser l'absence de mémoire.",
      "etapes": [
        "Repérer λ (ou le trouver avec une donnée, à l'aide de ln)",
        "Écrire la bonne formule : P(X ≤ t) ou P(X > t)",
        "Pour un intervalle : P(a ≤ X ≤ b) = e^(−λa) − e^(−λb)",
        "Espérance : E(X) = 1/λ, durée moyenne",
        "Sans mémoire : P_(X>s)(X > s + t) = P(X > t)"
      ],
      "mots": [
        "loi exponentielle de paramètre λ",
        "densité",
        "espérance",
        "durée de vie moyenne",
        "sans mémoire"
      ],
      "pieges": [
        "Confondre P(X ≤ t) et P(X > t)",
        "Oublier le signe moins dans e^(−λt)",
        "Croire qu'un appareil qui a déjà fonctionné longtemps a plus de chances de tomber en panne"
      ],
      "cas": "La durée de vie X, en années, d'une batterie suit une loi exponentielle de paramètre λ = 0,2.",
      "question": "Calculer P(X > 5), puis la durée de vie moyenne.",
      "modele": "P(X > 5) = e^(−0,2 × 5) = e^(−1) ≈ 0,368. Environ 37 % des batteries durent plus de 5 ans. E(X) = 1/λ = 1/0,2 = 5 : la durée de vie moyenne est de 5 ans.",
      "grille": [
        "La formule P(X > t) = e^(−λt) est utilisée",
        "Le calcul e^(−1) ≈ 0,368 est juste",
        "E(X) = 1/λ = 5 est donné",
        "Les résultats sont interprétés en années"
      ]
    }
  ],
  sujets: [

  ],
};
