// Physique-chimie et mathématiques — terminale STL. Sources : voir matiere.sources.
// Programme en vigueur : BO spécial n° 8 du 25 juillet 2019 (annexe 1 : terminale STL). Épreuve : note de service du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026).
export default {
  matiere: {
    id: 'stl-pcm',
    nom: 'Physique-chimie et mathématiques',
    voie: 'stl',
    epreuve: {"type":"ecrit","duree":180,"coef":16,"quand":"juin","note":"Écrit de 3 heures, calculatrice en mode examen autorisée. Plusieurs exercices indépendants : au moins un mêle physique-chimie et mathématiques, les autres portent sur une seule discipline. Barème des sujets 2025 et 2026 : physique-chimie 14 points, mathématiques 6 points."},
    sources: [
      "https://eduscol.education.fr/document/23107/download",
      "https://www.education.gouv.fr/bo/19/Special8/MENE1921260A.htm",
      "https://www.education.gouv.fr/bo/2026/Special4/MENE2622647N",
      "https://www.freemaths.fr/sujets-du-bac/baccalaureat-technologique/stl/physique-chimie-et-mathematiques/annees/annee-2026/metropole/sujet-1-et-correction/bac-physique-chimie-et-mathematiques-metropole-2026-voie-technologique-stl-sujet-1.pdf",
      "https://www.freemaths.fr/sujets-du-bac/baccalaureat-technologique/stl/physique-chimie-et-mathematiques/annees/annee-2026/polynesie/sujet-1-et-correction/bac-physique-chimie-et-mathematiques-polynesie-2026-voie-technologique-stl-sujet-1.pdf",
    ],
    chapitres: [
      { id: "stl-pcm-1", t: "Mesure et incertitudes", theme: "Mesure et incertitudes" },
      { id: "stl-pcm-2", t: "Structure spatiale des espèces chimiques", theme: "Constitution de la matière" },
      { id: "stl-pcm-3", t: "Réactions acido-basiques en solution aqueuse", theme: "Transformation de la matière" },
      { id: "stl-pcm-4", t: "Réactions d'oxydo-réduction et piles", theme: "Transformation de la matière" },
      { id: "stl-pcm-5", t: "Cinétique d'une réaction chimique", theme: "Transformation de la matière" },
      { id: "stl-pcm-6", t: "Radioactivité", theme: "Transformation de la matière" },
      { id: "stl-pcm-7", t: "Mouvements et interactions", theme: "Mouvements et interactions" },
      { id: "stl-pcm-8", t: "Chaînes énergétiques et énergie mécanique", theme: "Énergie : conversions et transferts" },
      { id: "stl-pcm-9", t: "Énergie chimique", theme: "Énergie : conversions et transferts" },
      { id: "stl-pcm-10", t: "Énergie électrique", theme: "Énergie : conversions et transferts" },
      { id: "stl-pcm-11", t: "Énergie et ondes : éclairement et laser", theme: "Énergie : conversions et transferts" },
      { id: "stl-pcm-12", t: "Intégration", theme: "Mathématiques" },
      { id: "stl-pcm-13", t: "La fonction exponentielle", theme: "Mathématiques" },
      { id: "stl-pcm-14", t: "La fonction logarithme népérien", theme: "Mathématiques" },
      { id: "stl-pcm-15", t: "Équations différentielles", theme: "Mathématiques" },
      { id: "stl-pcm-16", t: "Composition de fonctions : dérivées et primitives", theme: "Mathématiques" },
    ],
  },
  paquets: [
  { chapitre: "stl-pcm-1",
    fiche: `## Mesure et incertitudes

En STL, la pratique de laboratoire est au cœur de la formation : chaque sujet de bac contient au moins une question sur l'incertitude d'une mesure, la qualité d'un protocole ou la comparaison à une valeur de référence.

### Variabilité et incertitude-type
- Une mesure répétée ne donne pas toujours la même valeur : c'est la **variabilité**.
- L'**incertitude-type** u(x) chiffre cette dispersion.
- **Type A** (série de N mesures) : on calcule la moyenne x̄ et l'écart type σ, puis **u(x̄) = σ/√N**.
- **Type B** (mesure unique) : on utilise une **relation fournie** ou la **notice** du fabricant. Exemple courant : u = précision/√3. Pour une pipette jaugée de 10,00 mL ± 0,02 mL : u ≈ 0,02/√3 ≈ 0,012 mL.

### Sources d'erreurs
- Lors d'une mesure, plusieurs sources d'erreurs interviennent : la verrerie, la lecture d'une graduation, l'appareil de mesure, l'opérateur, la température…
- On **compare leur poids** avec une méthode fournie : souvent, on calcule l'**incertitude relative** u(x)/x de chacune ; la plus grande domine.
- Pour améliorer un protocole : choisir une verrerie plus précise (pipette jaugée plutôt qu'éprouvette), augmenter les volumes ou les masses mesurés, répéter les mesures.

### Incertitude d'un résultat calculé
- Quand plusieurs sources interviennent, on utilise la **relation fournie** par l'énoncé ou un logiciel.
- Exemple fréquent pour un produit ou un quotient : (u(C)/C)² = (u(n)/n)² + (u(V)/V)².

### Écrire un résultat
- Arrondir u à **1 ou 2 chiffres significatifs**, puis la valeur **au même rang**.
- Exemple : C = 0,10347 mol·L⁻¹ avec u = 0,0021 mol·L⁻¹ : **C = 0,1035 mol·L⁻¹ avec u(C) = 0,0021 mol·L⁻¹**, ou avec un seul chiffre : C = 0,103 mol·L⁻¹, u = 0,003 mol·L⁻¹.

### Valider un résultat
- On compare le résultat x à une **valeur de référence** x_ref avec **z = ‖x − x_ref‖ / u(x)**.
- Si **z ≤ 2**, le résultat est **compatible** avec la référence.
- Exemple : pKa mesuré 4,85 avec u = 0,05 ; référence 4,76 : z = 0,09/0,05 = 1,8 : compatible.

### Justesse et fidélité
- Un protocole est **fidèle** si les mesures sont **peu dispersées** (petit écart type).
- Il est **juste** si la **moyenne** des mesures est **proche de la valeur de référence**.
- On compare deux protocoles avec leurs histogrammes ou leurs moyennes et écarts types.
- Image de la cible : flèches groupées au centre = juste et fidèle ; groupées loin du centre = fidèle mais pas juste.

### Choisir le matériel
- Pour prélever un volume précis : **pipette jaugée** ; pour un volume approximatif : éprouvette graduée.
- Pour préparer une solution de concentration précise : **fiole jaugée**.

### À retenir pour le bac
- Type A : σ/√N. Type B : relation fournie ou notice.
- Arrondir u, puis la valeur au même rang, avec l'unité.
- z ≤ 2 : compatible.
- Fidèle : peu dispersé. Juste : centré sur la référence.`,
    cartes: [
      { q: "Incertitude-type de type A", r: "u(x̄) = σ/√N, à partir d'une série de N mesures." },
      { q: "Incertitude-type de type B", r: "Évaluée à partir d'une seule mesure, avec une relation fournie ou la notice." },
      { q: "Incertitude-type d'une pipette jaugée de 10,00 mL ± 0,02 mL", r: "Environ 0,012 mL (0,02/√3)." },
      { q: "Comment comparer le poids de plusieurs sources d'erreurs ?", r: "Comparer leurs incertitudes relatives u(x)/x : la plus grande domine." },
      { q: "Trois façons d'améliorer un protocole", r: "Verrerie plus précise, quantités mesurées plus grandes, mesures répétées." },
      { q: "Formule du z-score", r: "z = ‖x − x_ref‖ / u(x)." },
      { q: "Critère de compatibilité", r: "z ≤ 2." },
      { q: "Protocole fidèle", r: "Les mesures sont peu dispersées." },
      { q: "Protocole juste", r: "La moyenne des mesures est proche de la valeur de référence." },
      { q: "Verrerie pour prélever un volume précis", r: "La pipette jaugée." },
      { q: "Verrerie pour préparer une solution de concentration précise", r: "La fiole jaugée." },
      { q: "Arrondi de l'incertitude-type", r: "1 ou 2 chiffres significatifs, puis la valeur au même rang." },
      { q: "Incertitude relative", r: "u(x)/x, souvent en %." },
    ],
    quiz: [
      { q: "On fait 16 mesures d'un volume équivalent, avec un écart type de 0,20 mL. Quelle est l'incertitude-type sur la moyenne ?",
        choix: ["0,20 mL", "0,80 mL", "3,2 mL", "0,05 mL"],
        bonne: 3, niv: 2,
        expl: "u = σ/√N = 0,20/4." },
      { q: "Une pipette jaugée de 20,00 mL a une tolérance de ± 0,03 mL. Quelle est l'incertitude-type, avec u = tolérance/√3 ?",
        choix: ["Environ 0,017 mL", "0,03 mL", "Environ 0,052 mL", "0,01 mL"],
        bonne: 0, niv: 2,
        expl: "0,03/√3 ≈ 0,0173 mL." },
      { q: "Un pKa mesuré vaut 4,85 avec u = 0,05. La référence vaut 4,76. Que vaut z ?",
        choix: ["0,09", "1,8", "0,56", "9"],
        bonne: 1, niv: 2,
        expl: "z = (4,85 − 4,76)/0,05 = 0,09/0,05 = 1,8." },
      { q: "z = 1,8. Que conclure ?",
        choix: ["Le résultat est compatible avec la référence", "Le résultat est faux", "Le protocole n'est pas fidèle", "Il faut une incertitude plus grande"],
        bonne: 0, niv: 1,
        expl: "z ≤ 2 : l'écart s'explique par l'incertitude." },
      { q: "Des mesures très groupées mais loin de la valeur de référence montrent un protocole :",
        choix: ["Juste mais pas fidèle", "Juste et fidèle", "Fidèle mais pas juste", "Ni juste ni fidèle"],
        bonne: 2, niv: 2,
        expl: "Groupées : fidèle. Loin de la référence : pas juste." },
      { q: "Pour prélever exactement 10,0 mL d'une solution, quelle verrerie choisir ?",
        choix: ["Une éprouvette graduée", "Une pipette jaugée", "Un bécher", "Un erlenmeyer"],
        bonne: 1, niv: 1,
        expl: "La pipette jaugée est la verrerie de prélèvement la plus précise." },
      { q: "Deux sources d'erreurs ont des incertitudes relatives de 0,2 % (burette) et 1,5 % (masse pesée). Laquelle faut-il améliorer en priorité ?",
        choix: ["La burette", "La lecture du thermomètre", "Le choix du bécher", "La pesée"],
        bonne: 3, niv: 3,
        expl: "La source de plus grande incertitude relative domine le résultat." },
      { q: "C = 0,10347 mol·L⁻¹ et u(C) = 0,003 mol·L⁻¹. Quelle écriture est correcte ?",
        choix: ["C = 0,103 mol·L⁻¹ avec u(C) = 0,003 mol·L⁻¹", "C = 0,10347 mol·L⁻¹ avec u(C) = 0,003 mol·L⁻¹", "C = 0,1 mol·L⁻¹ avec u(C) = 0,003 mol·L⁻¹", "C = 0,10 mol·L⁻¹ avec u(C) = 0,0030 mol·L⁻¹"],
        bonne: 0, niv: 3,
        expl: "u a un chiffre au millième : la valeur s'arrondit au millième." },
      { q: "Pourquoi peser 2,000 g plutôt que 0,200 g avec la même balance améliore-t-il le résultat ?",
        choix: ["La balance devient plus précise", "L'incertitude relative de la pesée est 10 fois plus petite", "L'incertitude absolue diminue", "La masse est plus juste"],
        bonne: 1, niv: 3,
        expl: "u reste la même, mais u/m est divisée par 10." },
      { q: "Que représente un histogramme très étroit d'une série de mesures ?",
        choix: ["Une bonne justesse", "Une faible dispersion, donc une bonne fidélité", "Une erreur de mesure", "Un faible nombre de mesures"],
        bonne: 1, niv: 2,
        expl: "L'étroitesse traduit la dispersion, pas la position par rapport à la référence." },
      { q: "Une évaluation de type A repose sur :",
        choix: ["La notice d'un appareil", "Une seule lecture de graduation", "Une série de mesures répétées", "Une valeur de référence"],
        bonne: 2, niv: 1,
        expl: "Le type B utilise une mesure unique et la notice." },
    ] },
  { chapitre: "stl-pcm-2",
    fiche: `## Structure spatiale des espèces chimiques

Deux molécules peuvent avoir la même formule et les mêmes liaisons, mais une disposition différente dans l'espace. En biologie, cette différence compte : un énantiomère d'un médicament peut soigner et l'autre être inactif, voire toxique.

### Représentation de Cram
- On dessine la molécule en perspective : trait **plein** dans le plan de la feuille, triangle **plein** vers l'avant (vers l'observateur), triangle **hachuré** vers l'arrière.
- Autour d'un carbone tétraédrique, deux liaisons sont dans le plan, une vers l'avant, une vers l'arrière.

### Carbone asymétrique et chiralité
- Un **atome de carbone asymétrique** (noté C*) est lié à **quatre atomes ou groupes d'atomes différents**.
- Une molécule est **chirale** si elle n'est **pas superposable à son image dans un miroir** (comme une main gauche et une main droite).
- Une molécule avec **un seul** C* est toujours chirale.
- La plupart des biomolécules sont chirales (acides aminés, sucres).

### Énantiomères et diastéréoisomères
- Des **énantiomères** sont deux molécules **images l'une de l'autre dans un miroir** et **non superposables**.
- Des **diastéréoisomères** sont des stéréoisomères qui **ne sont pas** énantiomères.
- Avec **n** carbones asymétriques, il existe au plus **2^n** stéréoisomères. Exemple : 2 C* donnent au plus 4 stéréoisomères.
- Pour deux C*, si les deux configurations sont inversées (R,R et S,S), ce sont des énantiomères ; si une seule est inversée (R,R et R,S), ce sont des diastéréoisomères.
- Les énantiomères ont les mêmes propriétés physiques (température de fusion, solubilité) mais peuvent avoir des **propriétés biologiques différentes**. Les diastéréoisomères ont des propriétés physiques différentes.

### Règles de Cahn, Ingold et Prelog (CIP) : configuration R ou S
- On classe les quatre substituants du C* par **numéro atomique décroissant** de l'atome directement lié : le plus grand Z est prioritaire. Exemple : Br > Cl > O > N > C > H.
- En cas d'égalité, on compare les atomes suivants.
- On regarde la molécule avec le substituant de **plus faible priorité vers l'arrière**.
- On parcourt les trois autres dans l'ordre 1 → 2 → 3 : **sens des aiguilles d'une montre = R** ; sens inverse = **S**.

### Isomérie Z et E
- Elle concerne une **double liaison C=C** dont chaque carbone porte deux groupes différents.
- On repère sur chaque carbone le groupe **prioritaire** (règles CIP).
- Les deux prioritaires **du même côté** : **Z** ; **de part et d'autre** : **E**.
- Exemple : le but-2-ène existe en (Z) et en (E). Ce sont des diastéréoisomères.

### À retenir pour le bac
- C* : quatre substituants différents.
- Chirale : non superposable à son image dans un miroir.
- Énantiomères : images miroir ; diastéréoisomères : les autres stéréoisomères.
- R : sens horaire, avec le dernier substituant vers l'arrière.
- Z : prioritaires du même côté ; E : opposés.`,
    cartes: [
      { q: "Atome de carbone asymétrique", r: "Un carbone lié à quatre atomes ou groupes d'atomes différents." },
      { q: "Molécule chirale", r: "Molécule non superposable à son image dans un miroir." },
      { q: "Énantiomères", r: "Deux molécules images l'une de l'autre dans un miroir, non superposables." },
      { q: "Diastéréoisomères", r: "Des stéréoisomères qui ne sont pas énantiomères." },
      { q: "Nombre maximal de stéréoisomères pour n carbones asymétriques", r: "2^n." },
      { q: "Triangle plein en représentation de Cram", r: "Une liaison dirigée vers l'avant de la feuille." },
      { q: "Triangle hachuré en représentation de Cram", r: "Une liaison dirigée vers l'arrière de la feuille." },
      { q: "Règle de priorité CIP", r: "Le substituant dont l'atome lié a le plus grand numéro atomique est prioritaire." },
      { q: "Configuration R", r: "Ordre 1 → 2 → 3 dans le sens horaire, le substituant 4 étant vers l'arrière." },
      { q: "Configuration S", r: "Ordre 1 → 2 → 3 dans le sens antihoraire, le substituant 4 étant vers l'arrière." },
      { q: "Isomère Z", r: "Les groupes prioritaires de la double liaison sont du même côté." },
      { q: "Isomère E", r: "Les groupes prioritaires de la double liaison sont de part et d'autre." },
      { q: "Propriétés de deux énantiomères", r: "Mêmes propriétés physiques, mais propriétés biologiques souvent différentes." },
    ],
    quiz: [
      { q: "Combien de groupes différents un carbone asymétrique porte-t-il ?",
        choix: ["2", "3", "1", "4"],
        bonne: 3, niv: 1,
        expl: "C'est la définition : quatre substituants tous différents." },
      { q: "Une molécule possède 2 carbones asymétriques. Combien de stéréoisomères au plus ?",
        choix: ["3", "2", "4", "1"],
        bonne: 2, niv: 2,
        expl: "2² = 4." },
      { q: "Deux stéréoisomères ont les configurations (2R,3R) et (2S,3S). Quelle est leur relation ?",
        choix: ["Diastéréoisomères", "Identiques", "Énantiomères", "Isomères de position"],
        bonne: 2, niv: 3,
        expl: "Toutes les configurations sont inversées : ce sont des images miroir." },
      { q: "Deux stéréoisomères ont les configurations (2R,3R) et (2R,3S). Quelle est leur relation ?",
        choix: ["Diastéréoisomères", "Énantiomères", "Identiques", "Isomères Z et E"],
        bonne: 0, niv: 3,
        expl: "Une seule configuration est inversée : ce ne sont pas des images miroir." },
      { q: "Parmi ces substituants, lequel est prioritaire selon les règles CIP ?",
        choix: ["−Br", "−OH", "−CH3", "−H"],
        bonne: 0, niv: 2,
        expl: "Br a le plus grand numéro atomique (35), devant O (8), C (6) et H (1)." },
      { q: "Le substituant 4 pointe vers l'arrière et l'ordre 1 → 2 → 3 tourne dans le sens horaire. Quelle est la configuration ?",
        choix: ["S", "R", "Z", "E"],
        bonne: 1, niv: 1,
        expl: "Sens horaire : R." },
      { q: "Sur une double liaison C=C, les groupes prioritaires sont de part et d'autre. Quel est l'isomère ?",
        choix: ["E", "Z", "R", "S"],
        bonne: 0, niv: 1,
        expl: "De part et d'autre : E. Du même côté : Z." },
      { q: "Que signifie « une molécule est chirale » ?",
        choix: ["Elle possède une double liaison", "Elle est identique à son image dans un miroir", "Elle est soluble dans l'eau", "Elle n'est pas superposable à son image dans un miroir"],
        bonne: 3, niv: 1,
        expl: "C'est la définition de la chiralité." },
      { q: "Deux énantiomères d'un médicament peuvent-ils avoir des effets différents dans le corps ?",
        choix: ["Non, ils ont les mêmes propriétés", "Non, car ils ont la même formule brute", "Oui, car les récepteurs biologiques sont eux-mêmes chiraux", "Oui, car leurs températures de fusion diffèrent"],
        bonne: 2, niv: 3,
        expl: "Les enzymes et récepteurs distinguent les énantiomères ; leurs propriétés physiques, elles, sont identiques." },
      { q: "Dans la représentation de Cram, que signifie un triangle hachuré ?",
        choix: ["Une liaison vers l'avant de la feuille", "Une liaison dans le plan de la feuille", "Une double liaison", "Une liaison vers l'arrière de la feuille"],
        bonne: 3, niv: 1,
        expl: "Plein : vers l'avant ; hachuré : vers l'arrière." },
      { q: "Le but-2-ène (Z) et le but-2-ène (E) sont :",
        choix: ["Des énantiomères", "Une seule et même molécule", "Des molécules chirales", "Des diastéréoisomères"],
        bonne: 3, niv: 2,
        expl: "Ils ne sont pas images miroir l'un de l'autre." },
    ] },
  { chapitre: "stl-pcm-3",
    fiche: `## Réactions acido-basiques en solution aqueuse

Les équilibres acido-basiques sont partout : dans le sang, dans les océans qui absorbent le dioxyde de carbone, dans les acides aminés. Le sujet de métropole 2026 portait sur le piégeage du CO2 dans l'eau de mer.

### Rappels
- Un **acide** cède un ion H⁺, une **base** capte un ion H⁺. Couple **AH/A⁻**.
- **pH = −log[H3O⁺]** et **[H3O⁺] = 10^(−pH)** (concentrations en mol·L⁻¹, rapportées à c° = 1 mol·L⁻¹).

### Constante d'acidité et pKa
- Réaction d'un acide avec l'eau : **AH + H2O ⇄ A⁻ + H3O⁺**.
- **Ka = [A⁻] × [H3O⁺] / [AH]** (à l'équilibre). L'eau, solvant, n'apparaît pas.
- **pKa = −log(Ka)** et **Ka = 10^(−pKa)**.
- Plus le pKa est **petit**, plus l'acide est **fort** (il cède facilement H⁺).
- Relation utile : **pH = pKa + log([A⁻]/[AH])**.

### Diagramme de prédominance
- Si **pH < pKa** : la forme **acide AH prédomine**.
- Si **pH > pKa** : la forme **basique A⁻ prédomine**.
- Si **pH = pKa** : [AH] = [A⁻].
- Exemple : couple CO2(aq)/HCO3⁻, pKa = 6,35. À pH 3,5, c'est CO2(aq) qui prédomine.

### Coefficient de dissociation d'un acide faible
- Un acide **faible** ne réagit pas totalement avec l'eau.
- **τ = [A⁻]éq / C** = (quantité d'acide ayant réagi) / (quantité initiale), entre 0 et 1.
- Si seul l'acide réagit avec l'eau : [A⁻] = [H3O⁺] = 10^(−pH), donc **τ = 10^(−pH)/C**.
- Exemple : acide éthanoïque à C = 1,0 × 10⁻² mol·L⁻¹, pH = 3,4 : τ = 10^(−3,4)/0,010 ≈ 0,040, soit 4 %.
- **Dilution** : plus l'acide est dilué, plus son coefficient de dissociation **augmente**.

### Solution tampon
- Une **solution tampon** a un pH qui **varie peu** par ajout modéré d'acide, de base, ou par dilution.
- On la prépare avec un mélange d'un acide faible et de sa base conjuguée en quantités proches : son pH est proche du **pKa**.
- Pour un tampon de pH voulu, on choisit le couple dont le **pKa est le plus proche** de ce pH.
- Exemple : le sang est tamponné vers pH 7,4 (couple CO2/HCO3⁻ notamment).

### Dioxyde de carbone dissous
- CO2(aq) + 2 H2O ⇄ HCO3⁻ + H3O⁺ : le CO2 dissous **acidifie** l'eau (acidification des océans, dommages aux coraux).
- La **solubilité** d'un gaz dans l'eau **diminue quand la température augmente**.

### Exemple de calcul de pH d'un mélange
- Un mélange contient autant d'acide éthanoïque que d'ion éthanoate (pKa = 4,8) : log(1) = 0, donc pH = pKa = 4,8.

### À retenir pour le bac
- Ka = [A⁻][H3O⁺]/[AH] ; pKa = −log Ka.
- pH < pKa : forme acide ; pH > pKa : forme basique.
- τ = [A⁻]/C ; la dilution augmente τ.
- Tampon : couple de pKa proche du pH voulu.`,
    cartes: [
      { q: "Expression de Ka pour AH/A⁻", r: "Ka = [A⁻] × [H3O⁺] / [AH]." },
      { q: "Lien entre pKa et Ka", r: "pKa = −log(Ka), Ka = 10^(−pKa)." },
      { q: "Force d'un acide et pKa", r: "Plus le pKa est petit, plus l'acide est fort." },
      { q: "Espèce prédominante si pH < pKa", r: "La forme acide AH." },
      { q: "Espèce prédominante si pH > pKa", r: "La forme basique A⁻." },
      { q: "Relation entre pH, pKa et concentrations", r: "pH = pKa + log([A⁻]/[AH])." },
      { q: "Coefficient de dissociation", r: "τ = [A⁻]éq / C, entre 0 et 1." },
      { q: "Effet de la dilution sur τ", r: "Il augmente." },
      { q: "Solution tampon", r: "Solution dont le pH varie peu par ajout modéré d'acide, de base ou par dilution." },
      { q: "Choix d'un couple pour un tampon", r: "Le couple dont le pKa est le plus proche du pH voulu." },
      { q: "Équation de la réaction du CO2 dissous avec l'eau", r: "CO2(aq) + 2 H2O ⇄ HCO3⁻ + H3O⁺." },
      { q: "Effet de la température sur la solubilité d'un gaz", r: "Elle diminue quand la température augmente." },
      { q: "pKa du couple CO2(aq)/HCO3⁻ à 25 °C", r: "6,35." },
    ],
    quiz: [
      { q: "Un couple a un pKa de 4,8. Quelle forme prédomine à pH 7 ?",
        choix: ["La forme acide", "La forme basique", "L'eau", "Les ions H3O⁺"],
        bonne: 1, niv: 1,
        expl: "pH > pKa : la base prédomine." },
      { q: "Que vaut Ka pour pKa = 6,35 ?",
        choix: ["6,35", "Environ 4,5 × 10⁻⁷", "Environ 2,2 × 10⁶", "−6,35"],
        bonne: 1, niv: 2,
        expl: "Ka = 10^(−6,35) ≈ 4,47 × 10⁻⁷." },
      { q: "Acide éthanoïque à C = 1,0 × 10⁻² mol·L⁻¹, pH = 3,4. Quel est son coefficient de dissociation ?",
        choix: ["Environ 0,34", "Environ 4,0 × 10⁻⁴", "Environ 0,040", "Environ 0,0034"],
        bonne: 2, niv: 3,
        expl: "τ = 10^(−3,4)/0,010 ≈ 3,98 × 10⁻⁴ / 0,010 ≈ 0,040." },
      { q: "Que devient le coefficient de dissociation d'un acide faible quand on le dilue ?",
        choix: ["Il diminue", "Il reste constant", "Il augmente", "Il devient nul"],
        bonne: 2, niv: 2,
        expl: "Plus l'acide est dilué, plus il se dissocie." },
      { q: "On veut un tampon à pH 4,7. Quel couple choisir ?",
        choix: ["Acide éthanoïque/ion éthanoate, pKa 4,8", "Ion ammonium/ammoniac, pKa 9,2", "CO2(aq)/HCO3⁻, pKa 6,35", "HCO3⁻/CO3²⁻, pKa 10,3"],
        bonne: 0, niv: 2,
        expl: "On choisit le pKa le plus proche du pH voulu." },
      { q: "Parmi ces acides, lequel est le plus fort ?",
        choix: ["pKa = 4,8", "pKa = 2,1", "pKa = 9,2", "pKa = 6,35"],
        bonne: 1, niv: 2,
        expl: "Le plus petit pKa correspond à l'acide le plus fort." },
      { q: "[H3O⁺] = 10^(−3,5) mol·L⁻¹ et Ka = 10^(−6,35). Si [HCO3⁻] = [H3O⁺], que vaut [CO2(aq)] = [H3O⁺]²/Ka ?",
        choix: ["Environ 4,5 × 10⁻⁷ mol·L⁻¹", "Environ 3,2 × 10⁻⁴ mol·L⁻¹", "Environ 0,22 mol·L⁻¹", "Environ 708 mol·L⁻¹"],
        bonne: 2, niv: 3,
        expl: "10^(−7) / 10^(−6,35) = 10^(−0,65) ≈ 0,22." },
      { q: "Pourquoi le réchauffement de l'eau réduit-il la quantité de CO2 qu'elle peut dissoudre ?",
        choix: ["Le pKa du couple devient nul", "Le CO2 devient liquide", "Le pH de l'eau augmente fortement", "Le gaz est moins soluble dans une eau plus chaude"],
        bonne: 3, niv: 2,
        expl: "Un gaz est moins soluble dans une eau plus chaude." },
      { q: "À pH = pKa, que peut-on dire ?",
        choix: ["[AH] = 0", "[A⁻] = 0", "[AH] = [A⁻]", "Ka = 0"],
        bonne: 2, niv: 1,
        expl: "pH = pKa + log([A⁻]/[AH]) donne log(1) = 0." },
      { q: "Dans l'expression de Ka, pourquoi l'eau n'apparaît-elle pas ?",
        choix: ["Elle ne réagit pas", "C'est le solvant", "Sa concentration est nulle", "Elle est un produit"],
        bonne: 1, niv: 2,
        expl: "Le solvant n'intervient pas dans l'expression d'une constante d'équilibre." },
      { q: "Qu'est-ce qu'une solution tampon ?",
        choix: ["Une solution de pH égal à 7", "Une solution d'acide fort concentré", "Une solution qui ne contient pas d'ions", "Une solution dont le pH varie peu par ajout modéré d'acide ou de base"],
        bonne: 3, niv: 1,
        expl: "Elle contient un acide faible et sa base conjuguée en quantités proches." },
    ] },
  { chapitre: "stl-pcm-4",
    fiche: `## Réactions d'oxydo-réduction et piles

L'oxydo-réduction explique le fonctionnement des piles et des accumulateurs, la corrosion, et de nombreuses réactions du vivant (chaîne respiratoire, couples NAD⁺/NADH).

### Oxydant, réducteur, couple
- Un **oxydant** **capte** des électrons ; un **réducteur** **cède** des électrons.
- Couple **Ox/Red** et **équation de demi-réaction** : **Ox + n e⁻ = Red**.
- Oxydants usuels : dioxygène O2, dichlore Cl2, diiode I2, eau oxygénée H2O2, ion fer(III) Fe³⁺. Réducteurs usuels : dihydrogène H2, ion fer(II) Fe²⁺, métaux (Zn, Fe, Cu).

### Nombre d'oxydation (n.o.)
- Il se note en chiffres romains. Règles : n.o. d'un élément dans un **corps simple = 0** ; d'un **ion monoatomique = sa charge** ; dans une molécule, la **somme des n.o. = 0** ; dans un ion, **somme = charge**. En général, **H : +I** et **O : −II**.
- Exemple : dans MnO4⁻, n.o.(Mn) + 4 × (−II) = −1, donc n.o.(Mn) = **+VII**.
- Lors d'une **oxydation**, le n.o. **augmente** ; lors d'une **réduction**, il **diminue**.
- L'espèce dont le n.o. diminue est l'**oxydant**.

### Écrire une demi-équation en milieu acide
- Équilibrer l'élément principal, puis **O avec H2O**, puis **H avec H⁺**, puis les **charges avec e⁻**.
- Exemple : MnO4⁻ + 8 H⁺ + 5 e⁻ = Mn²⁺ + 4 H2O.

### Réaction d'oxydo-réduction
- On combine les deux demi-équations de façon que les **électrons s'annulent**.
- Exemple : MnO4⁻ + 5 Fe²⁺ + 8 H⁺ → Mn²⁺ + 5 Fe³⁺ + 4 H2O.

### La pile
- Deux **demi-piles** (un métal plongeant dans une solution de ses ions) reliées par un **pont salin** (qui assure le passage du courant par déplacement d'ions et la neutralité des solutions).
- **Anode** : siège de l'**oxydation**, c'est la borne **négative**. **Cathode** : siège de la **réduction**, borne **positive**.
- À l'extérieur, les **électrons** vont de l'**anode vers la cathode** ; le **courant** va dans le sens inverse.
- Pile Daniell : Zn → Zn²⁺ + 2 e⁻ (anode) ; Cu²⁺ + 2 e⁻ → Cu (cathode). Bilan : Zn + Cu²⁺ → Zn²⁺ + Cu.
- On identifie les bornes avec un **voltmètre** : affichage positif quand COM est sur la borne négative.

### Quantité d'électricité
- **Q = I × Δt** et **Q = n(e⁻) × F**, avec **F = 96 500 C·mol⁻¹** (environ).
- Quantité d'électricité **maximale** d'une pile : on cherche le **réactif limitant**, on en déduit n(e⁻) max, puis Q max = n(e⁻) × F.
- Exemple : 0,010 mol de Cu²⁺ limitant, 2 e⁻ par ion : n(e⁻) = 0,020 mol, Q max ≈ 1,9 × 10³ C.

### À retenir pour le bac
- Réducteur : cède des e⁻, son n.o. augmente, il est oxydé.
- Anode = oxydation = borne −. Cathode = réduction = borne +.
- Demi-équation en milieu acide : élément, O (H2O), H (H⁺), charges (e⁻).
- Q = I Δt = n(e⁻) F.`,
    cartes: [
      { q: "Définition d'un oxydant", r: "Une espèce capable de capter des électrons." },
      { q: "Définition d'un réducteur", r: "Une espèce capable de céder des électrons." },
      { q: "n.o. d'un élément dans un corps simple", r: "0." },
      { q: "n.o. usuels de H et de O", r: "H : +I ; O : −II." },
      { q: "Évolution du n.o. lors d'une oxydation", r: "Il augmente." },
      { q: "n.o. du manganèse dans MnO4⁻", r: "+VII." },
      { q: "Ordre pour équilibrer une demi-équation en milieu acide", r: "Élément principal, O avec H2O, H avec H⁺, charges avec e⁻." },
      { q: "Réaction à l'anode d'une pile", r: "Une oxydation ; l'anode est la borne négative." },
      { q: "Réaction à la cathode d'une pile", r: "Une réduction ; la cathode est la borne positive." },
      { q: "Rôle du pont salin", r: "Permettre le passage du courant par déplacement d'ions et maintenir la neutralité des solutions." },
      { q: "Sens des électrons dans le circuit extérieur d'une pile", r: "De l'anode vers la cathode." },
      { q: "Quantité d'électricité", r: "Q = I × Δt = n(e⁻) × F." },
      { q: "Valeur de la constante de Faraday", r: "Environ 96 500 C·mol⁻¹." },
    ],
    quiz: [
      { q: "Quel est le nombre d'oxydation du manganèse dans MnO4⁻ ?",
        choix: ["+VIII", "+VII", "−I", "+II"],
        bonne: 1, niv: 2,
        expl: "n.o.(Mn) + 4 × (−II) = −1, donc +VII." },
      { q: "Quel est le nombre d'oxydation du soufre dans SO4²⁻ ?",
        choix: ["+IV", "+VI", "−II", "+VIII"],
        bonne: 1, niv: 2,
        expl: "n.o.(S) + 4 × (−II) = −2, donc +VI." },
      { q: "Le n.o. du fer passe de +II à +III. Que subit le fer ?",
        choix: ["Une réduction", "Une dissolution", "Une oxydation", "Une précipitation"],
        bonne: 2, niv: 1,
        expl: "Le n.o. augmente : oxydation." },
      { q: "Quelle est la demi-équation équilibrée du couple MnO4⁻/Mn²⁺ en milieu acide ?",
        choix: ["MnO4⁻ + 4 H⁺ + 5 e⁻ = Mn²⁺ + 2 H2O", "MnO4⁻ + 8 H⁺ = Mn²⁺ + 4 H2O + 5 e⁻", "MnO4⁻ + 8 H⁺ + 7 e⁻ = Mn²⁺ + 4 H2O", "MnO4⁻ + 8 H⁺ + 5 e⁻ = Mn²⁺ + 4 H2O"],
        bonne: 3, niv: 3,
        expl: "4 O donnent 4 H2O, donc 8 H⁺ ; charges : +7 à gauche avant les électrons, +2 à droite : 5 e⁻." },
      { q: "Dans une pile, à quelle électrode a lieu l'oxydation ?",
        choix: ["À la cathode, borne positive", "À l'anode, borne positive", "Dans le pont salin", "À l'anode, borne négative"],
        bonne: 3, niv: 1,
        expl: "Anode : oxydation, borne −." },
      { q: "Dans une pile zinc-cuivre, quel métal constitue l'anode ?",
        choix: ["Le zinc", "Le cuivre", "Le pont salin", "Le fil électrique"],
        bonne: 0, niv: 2,
        expl: "Le zinc est oxydé : Zn → Zn²⁺ + 2 e⁻." },
      { q: "Une pile débite 0,20 A pendant 30 min. Quelle quantité d'électricité fournit-elle ?",
        choix: ["6 C", "360 C", "0,10 C", "36 C"],
        bonne: 1, niv: 2,
        expl: "Q = 0,20 × 1 800 s = 360 C. Le piège est d'oublier de convertir les minutes." },
      { q: "0,010 mol d'ions Cu²⁺ (2 e⁻ par ion) sont le réactif limitant d'une pile. Quelle est la quantité d'électricité maximale ?",
        choix: ["Environ 9,7 × 10² C", "0,020 C", "Environ 1,9 × 10³ C", "Environ 4,8 × 10⁶ C"],
        bonne: 2, niv: 3,
        expl: "n(e⁻) = 0,020 mol, Q = 0,020 × 96 500 ≈ 1 930 C." },
      { q: "Quel est le rôle du pont salin ?",
        choix: ["Assurer le passage du courant par déplacement d'ions", "Fournir les électrons à la cathode", "Stocker l'énergie de la pile", "Empêcher la réaction de se produire"],
        bonne: 0, niv: 2,
        expl: "Les électrons circulent dans les fils ; dans le pont salin, ce sont des ions qui se déplacent." },
      { q: "Dans la demi-équation I2 + 2 e⁻ = 2 I⁻, quel est le rôle de I2 ?",
        choix: ["Oxydant", "Réducteur", "Catalyseur", "Spectateur"],
        bonne: 0, niv: 1,
        expl: "I2 capte des électrons." },
      { q: "Quelle est l'équation de la pile Daniell ?",
        choix: ["Cu + Zn²⁺ → Cu²⁺ + Zn", "Zn + Cu → Zn²⁺ + Cu²⁺", "Zn²⁺ + Cu²⁺ → Zn + Cu", "Zn + Cu²⁺ → Zn²⁺ + Cu"],
        bonne: 3, niv: 2,
        expl: "Le zinc est oxydé, les ions cuivre(II) sont réduits." },
    ] },
  { chapitre: "stl-pcm-5",
    fiche: `## Cinétique d'une réaction chimique

La cinétique étudie la **vitesse** d'une transformation : combien de temps une eau oxygénée se conserve, à quelle vitesse un verre photochrome redevient clair, comment un médicament disparaît du sang. Elle tombe très souvent dans l'exercice commun avec les mathématiques.

### Vitesse de disparition
- Pour un réactif A de concentration [A] : **v = −d[A]/dt**, en mol·L⁻¹·s⁻¹ (ou par minute, par jour…).
- Graphiquement, c'est l'**opposé de la pente** de la tangente à la courbe [A] en fonction de t.
- La vitesse diminue en général au cours du temps, car le réactif s'épuise.

### Loi de vitesse et ordre
- **Ordre 0** : **v = k** (constante). Alors **[A] en fonction de t = [A]0 − k t** : la concentration décroît de façon **affine** (droite).
- **Ordre 1** : **v = k [A]**. Alors d[A]/dt = −k[A] : c'est une équation différentielle y' = −k y, de solution **[A] en fonction de t = [A]0 e^(−kt)**.
- k est la **constante de vitesse** : en mol·L⁻¹·s⁻¹ pour l'ordre 0, en **s⁻¹** pour l'ordre 1.

### Déterminer l'ordre à partir d'un suivi cinétique
- Si [A] en fonction de t est une **droite** : ordre 0.
- Si **ln([A])** en fonction de t est une **droite** : **ordre 1**, et la pente vaut **−k**.
- Exemple (bac 2026 métropole) : pour un composé photochrome, ln(C) est une droite de pente −0,00702 s⁻¹ : ordre 1 avec k = 7,02 × 10⁻³ s⁻¹.

### Temps de demi-réaction
- **t½** : durée au bout de laquelle la moitié du réactif limitant a été consommée.
- Graphiquement : on lit t quand [A] = [A]0/2.
- Pour l'**ordre 1** : **t½ = ln(2)/k**, **indépendant** de la concentration initiale.
- Exemple (bac 2026 Polynésie) : eau oxygénée, k = 2,77 × 10⁻³ jour⁻¹ : t½ = ln(2)/k ≈ 250 jours.

### Exploiter un modèle
- Pour savoir quand la concentration atteint une valeur C1 : résoudre [A]0 e^(−kt) = C1, soit **t = ln([A]0/C1)/k**.
- Exemple : C(t) = 3,1 × 10⁻⁵ e^(−0,00702t), on veut C = C(0)/10 : t = ln(10)/0,00702 ≈ 328 s.
- La dérivée dC/dt représente la vitesse de variation de la concentration (négative quand C diminue).

### Facteurs cinétiques et catalyse
- Une réaction est plus rapide si la **température** augmente ou si la **concentration** des réactifs augmente.
- Un **catalyseur** accélère la réaction sans être consommé ; les **enzymes** sont des catalyseurs biologiques.

### Exemple de lecture
- Si [A] passe de 0,20 à 0,10 mol·L⁻¹ en 250 jours, puis de 0,10 à 0,050 mol·L⁻¹ en 250 jours encore, le temps de demi-réaction est constant : c'est la signature de l'ordre 1.

### À retenir pour le bac
- Ordre 1 : [A] = [A]0 e^(−kt), ln[A] est une droite de pente −k.
- t½ = ln(2)/k pour l'ordre 1.
- Ordre 0 : [A] décroît de façon affine.
- Lire t½ sur la courbe : là où [A] = [A]0/2.`,
    cartes: [
      { q: "Vitesse de disparition d'un réactif A", r: "v = −d[A]/dt." },
      { q: "Loi de vitesse d'ordre 0", r: "v = k : [A] = [A]0 − k t." },
      { q: "Loi de vitesse d'ordre 1", r: "v = k[A] : [A] = [A]0 e^(−kt)." },
      { q: "Équation différentielle d'une réaction d'ordre 1", r: "d[A]/dt = −k[A]." },
      { q: "Unité de k pour une réaction d'ordre 1", r: "s⁻¹ (ou min⁻¹, jour⁻¹…)." },
      { q: "Comment reconnaître l'ordre 1 graphiquement ?", r: "ln([A]) en fonction de t est une droite." },
      { q: "Pente de la droite ln([A]) = f(t) pour l'ordre 1", r: "−k." },
      { q: "Temps de demi-réaction", r: "Durée au bout de laquelle la moitié du réactif limitant est consommée." },
      { q: "t½ pour l'ordre 1", r: "ln(2)/k, indépendant de la concentration initiale." },
      { q: "Lecture graphique de t½", r: "Instant où [A] vaut [A]0/2." },
      { q: "Instant où [A] atteint C1 (ordre 1)", r: "t = ln([A]0/C1)/k." },
      { q: "Deux facteurs cinétiques", r: "La température et la concentration des réactifs." },
      { q: "Rôle d'un catalyseur", r: "Accélérer la réaction sans être consommé." },
    ],
    quiz: [
      { q: "Pour une réaction d'ordre 1, quelle représentation graphique donne une droite ?",
        choix: ["[A] en fonction de t", "1/[A] en fonction de t", "ln([A]) en fonction de t", "[A]² en fonction de t"],
        bonne: 2, niv: 2,
        expl: "[A] = [A]0 e^(−kt) donne ln[A] = ln[A]0 − kt." },
      { q: "Une réaction d'ordre 1 a k = 2,77 × 10⁻³ jour⁻¹. Quel est son temps de demi-réaction ?",
        choix: ["Environ 361 jours", "Environ 0,0019 jour", "Environ 250 jours", "Environ 125 jours"],
        bonne: 2, niv: 2,
        expl: "t½ = ln(2)/k = 0,693/0,00277 ≈ 250 jours." },
      { q: "C(t) = 3,1 × 10⁻⁵ e^(−0,00702t). Au bout de combien de secondes C est-elle divisée par 10 ?",
        choix: ["Environ 99 s", "Environ 142 s", "Environ 1 424 s", "Environ 328 s"],
        bonne: 3, niv: 3,
        expl: "e^(−0,00702t) = 0,1 donne t = ln(10)/0,00702 ≈ 328 s." },
      { q: "Pour une réaction d'ordre 0, comment évolue [A] au cours du temps ?",
        choix: ["De façon exponentielle", "De façon affine (droite décroissante)", "Elle reste constante", "Elle augmente"],
        bonne: 1, niv: 2,
        expl: "[A] = [A]0 − kt." },
      { q: "La droite ln(C) = f(t) a pour pente −0,00702 s⁻¹. Que vaut k ?",
        choix: ["−7,02 × 10⁻³ s⁻¹", "7,02 × 10⁻³ s⁻¹", "142 s⁻¹", "0,693 s⁻¹"],
        bonne: 1, niv: 2,
        expl: "La pente vaut −k, et k est positive." },
      { q: "Comment lire le temps de demi-réaction sur la courbe [A](t) ?",
        choix: ["Chercher l'instant où [A] s'annule", "Mesurer la pente à l'origine", "Chercher l'instant où [A] vaut la moitié de [A]0", "Diviser la durée totale par 2"],
        bonne: 2, niv: 1,
        expl: "C'est la définition de t½." },
      { q: "Pour une réaction d'ordre 1, que devient t½ si on double la concentration initiale ?",
        choix: ["Il ne change pas", "Il double", "Il est divisé par 2", "Il est multiplié par 4"],
        bonne: 0, niv: 3,
        expl: "t½ = ln(2)/k ne dépend pas de [A]0." },
      { q: "Que représente dC/dt pour un réactif dont la concentration diminue ?",
        choix: ["La vitesse de disparition", "La vitesse de disparition, changée de signe", "La concentration initiale", "La constante de vitesse"],
        bonne: 1, niv: 3,
        expl: "v = −dC/dt, donc dC/dt = −v, négative." },
      { q: "Quel est l'effet d'une hausse de température sur la vitesse d'une réaction ?",
        choix: ["Elle l'augmente en général", "Elle la diminue", "Elle la laisse inchangée", "Elle l'annule"],
        bonne: 0, niv: 1,
        expl: "La température est un facteur cinétique." },
      { q: "Qu'est-ce qu'une enzyme ?",
        choix: ["Un catalyseur biologique", "Un réactif consommé par la réaction", "Un produit de la réaction", "Un solvant"],
        bonne: 0, niv: 1,
        expl: "Elle accélère une réaction sans être consommée." },
      { q: "L'eau oxygénée (ordre 1, t½ = 250 jours) part de 0,20 mol·L⁻¹. Quelle est sa concentration après 500 jours ?",
        choix: ["0,10 mol·L⁻¹", "0,050 mol·L⁻¹", "0,15 mol·L⁻¹", "0,20 mol·L⁻¹"],
        bonne: 1, niv: 2,
        expl: "Deux demi-réactions : 0,20 → 0,10 → 0,050." },
    ] },
  { chapitre: "stl-pcm-6",
    fiche: `## Radioactivité

La radioactivité sert en médecine (scintigraphie, radiothérapie), pour dater des objets anciens (carbone 14) et dans l'industrie. Mathématiquement, elle suit la même loi qu'une réaction d'ordre 1.

### Noyau et désintégration
- Un noyau se note **A Z X** : **Z** protons, **A** nucléons, A − Z neutrons.
- Un noyau **radioactif** est instable : il se **désintègre** spontanément en émettant un rayonnement. La désintégration est **aléatoire** (on ne peut pas prévoir l'instant pour un noyau donné) et **spontanée**.

### Types de radioactivité
- **α** : émission d'un noyau d'hélium **4 2 He**. Le noyau perd 4 nucléons et 2 protons.
- **β⁻** : émission d'un **électron** 0 −1 e : un neutron devient un proton (Z augmente de 1, A ne change pas).
- **β⁺** : émission d'un **positon** 0 +1 e : un proton devient un neutron (Z diminue de 1).
- **Émission γ** : rayonnement électromagnétique très énergétique émis par un noyau qui se désexcite ; elle accompagne souvent α et β.

### Lois de conservation
- Lors d'une réaction nucléaire, on conserve le **nombre de nucléons A** et la **charge électrique Z**.
- Exemple : 14 6 C → 14 7 N + 0 −1 e (désintégration β⁻ du carbone 14).
- Exemple : 18 9 F → 18 8 O + 0 +1 e (β⁺ du fluor 18, utilisé en imagerie TEP).

### Loi de décroissance radioactive
- Pendant dt, le nombre de noyaux qui se désintègrent est proportionnel au nombre de noyaux présents : **dN = −λ N dt**, soit **dN/dt = −λN**.
- λ est la **constante de désintégration** (en s⁻¹). Le signe moins traduit la diminution de N.
- Solution : **N(t) = N0 e^(−λt)**. C'est la même loi qu'une réaction d'ordre 1.

### Demi-vie
- **t½** : durée au bout de laquelle **la moitié** des noyaux initialement présents s'est désintégrée.
- **t½ = ln(2)/λ**.
- Après n demi-vies, il reste **N0/2^n**. Exemple : après 4 demi-vies, il reste 1/16 des noyaux (6,25 %).
- Exemple : le fluor 18 a une demi-vie de 110 min : λ = ln 2/110 ≈ 6,3 × 10⁻³ min⁻¹.

### Activité
- L'**activité** A est le nombre de désintégrations **par seconde**, en **becquerels (Bq)**.
- **A = λN**, donc A(t) = A0 e^(−λt) : l'activité décroît avec la même demi-vie.

### Protection
- On se protège en **s'éloignant** de la source, en **limitant la durée** d'exposition et en plaçant un **écran** : une feuille de papier arrête les α, quelques millimètres d'aluminium les β, il faut du plomb ou du béton épais pour les γ.

### À retenir pour le bac
- Conservation de A et de Z.
- dN = −λN dt, N = N0 e^(−λt), t½ = ln(2)/λ.
- Activité en Bq : A = λN.
- Après n demi-vies : N0/2^n.`,
    cartes: [
      { q: "Particule émise par une désintégration α", r: "Un noyau d'hélium 4 2 He." },
      { q: "Particule émise par une désintégration β⁻", r: "Un électron." },
      { q: "Particule émise par une désintégration β⁺", r: "Un positon." },
      { q: "Émission γ", r: "Un rayonnement électromagnétique très énergétique émis par un noyau qui se désexcite." },
      { q: "Lois de conservation d'une réaction nucléaire", r: "Conservation du nombre de nucléons A et de la charge Z." },
      { q: "Relation différentielle de la décroissance", r: "dN = −λ N dt." },
      { q: "Loi de décroissance radioactive", r: "N(t) = N0 e^(−λt)." },
      { q: "Demi-vie", r: "Durée au bout de laquelle la moitié des noyaux initiaux s'est désintégrée." },
      { q: "Lien entre λ et t½", r: "t½ = ln(2)/λ." },
      { q: "Définition de l'activité", r: "Nombre de désintégrations par seconde, en becquerels." },
      { q: "Lien entre activité et nombre de noyaux", r: "A = λN." },
      { q: "Proportion de noyaux restants après n demi-vies", r: "1/2^n." },
      { q: "Écran nécessaire contre les rayons γ", r: "Du plomb ou du béton épais." },
    ],
    quiz: [
      { q: "Le carbone 14 (Z = 6) subit une désintégration β⁻. Quel noyau obtient-on ?",
        choix: ["L'azote 14 (Z = 7)", "Le bore 14 (Z = 5)", "Le carbone 13 (Z = 6)", "L'azote 15 (Z = 7)"],
        bonne: 0, niv: 2,
        expl: "β⁻ : A inchangé, Z augmente de 1." },
      { q: "Le fluor 18 (Z = 9) subit une désintégration β⁺. Quel noyau obtient-on ?",
        choix: ["L'oxygène 18 (Z = 8)", "Le néon 18 (Z = 10)", "Le fluor 17 (Z = 9)", "L'oxygène 17 (Z = 8)"],
        bonne: 0, niv: 2,
        expl: "β⁺ : A inchangé, Z diminue de 1." },
      { q: "Quelle proportion de noyaux reste-t-il après 4 demi-vies ?",
        choix: ["25 %", "6,25 %", "12,5 %", "50 %"],
        bonne: 1, niv: 2,
        expl: "1/2⁴ = 1/16 = 0,0625." },
      { q: "Le fluor 18 a une demi-vie de 110 min. Que vaut λ ?",
        choix: ["Environ 159 min⁻¹", "Environ 0,0091 min⁻¹", "Environ 6,3 × 10⁻³ min⁻¹", "Environ 76 min⁻¹"],
        bonne: 2, niv: 3,
        expl: "λ = ln(2)/110 ≈ 0,0063 min⁻¹." },
      { q: "Que traduit le signe moins dans dN = −λN dt ?",
        choix: ["λ est négative", "Le temps recule", "Le nombre de noyaux diminue", "Les noyaux sont chargés négativement"],
        bonne: 2, niv: 2,
        expl: "dN est négatif : N diminue." },
      { q: "Quelle est l'unité de l'activité d'une source radioactive ?",
        choix: ["Le gray", "Le sievert", "Le hertz", "Le becquerel"],
        bonne: 3, niv: 1,
        expl: "1 Bq = une désintégration par seconde." },
      { q: "Une source a une activité de 8 000 Bq. Sa demi-vie est de 6 h. Quelle est son activité 18 h plus tard ?",
        choix: ["2 667 Bq", "4 000 Bq", "1 000 Bq", "2 000 Bq"],
        bonne: 2, niv: 2,
        expl: "18 h = 3 demi-vies : 8 000/8." },
      { q: "Quelle analogie existe entre la décroissance radioactive et la cinétique ?",
        choix: ["Elle suit la même loi qu'une réaction d'ordre 0", "Elle suit la même loi qu'une réaction d'ordre 1", "Elle dépend de la température", "Elle s'accélère avec un catalyseur"],
        bonne: 1, niv: 3,
        expl: "dN/dt = −λN a la même forme que d[A]/dt = −k[A]." },
      { q: "Que signifie « la désintégration est aléatoire » ?",
        choix: ["Les noyaux se désintègrent ensemble", "La demi-vie varie au hasard", "On ne peut pas prévoir quand un noyau donné se désintègre", "On ne peut pas mesurer l'activité"],
        bonne: 2, niv: 2,
        expl: "On ne connaît que le comportement statistique d'un grand nombre de noyaux." },
      { q: "Que conserve-t-on dans l'écriture d'une réaction nucléaire ?",
        choix: ["Le nombre de neutrons et la masse", "Le nombre de protons, mais pas celui des nucléons", "Le nombre de nucléons et la charge", "L'énergie et le nombre de neutrons"],
        bonne: 2, niv: 1,
        expl: "Ce sont les lois de conservation de Soddy." },
      { q: "Contre quel rayonnement une simple feuille de papier suffit-elle ?",
        choix: ["β⁻", "α", "γ", "β⁺"],
        bonne: 1, niv: 1,
        expl: "Les particules α sont arrêtées par une feuille de papier." },
    ] },
  { chapitre: "stl-pcm-7",
    fiche: `## Mouvements et interactions

Ce chapitre décrit le mouvement d'un objet assimilé à un point : chute libre, chute dans un fluide avec frottement, déplacement de molécules chargées en électrophorèse.

### Vitesse et accélération
- Coordonnées de la vitesse : vx = dx/dt, vy = dy/dt.
- Coordonnées de l'**accélération** : **ax = dvx/dt** et **ay = dvy/dt** (en m·s⁻²).
- Inversement, la vitesse est une **primitive** de l'accélération. Exemple : a = 2 m·s⁻² constante et v(0) = 5 m·s⁻¹ donnent **v(t) = 2t + 5**.

### Lois de Newton
- **Première loi (principe d'inertie)** : si la somme des forces est nulle, le mouvement est rectiligne uniforme (ou immobile).
- **Deuxième loi** : **somme des forces = m × a** (vecteurs).
- **Troisième loi** : si A exerce une force sur B, B exerce sur A une force opposée, de même valeur.
- Toujours commencer par le **système**, le **référentiel** et le **bilan des forces**.

### Chute libre dans un plan
- Seul le **poids** agit : **a = g**, vertical vers le bas, g ≈ 9,81 m·s⁻².
- Avec un axe Oy vers le haut : ax = 0 et ay = −g.
- Lancer de vitesse v0 faisant un angle α avec l'horizontale : vx = v0 cos α ; vy = −g t + v0 sin α.
- Positions : x(t) = v0 cos α × t ; y(t) = −½ g t² + v0 sin α × t + y0.
- Exemple : chute sans vitesse initiale de 20 m : t = √(2h/g) ≈ 2,0 s.

### Chute verticale avec frottement visqueux
- Force de frottement **f = −k v** (proportionnelle à la vitesse, opposée au mouvement).
- Axe vers le bas : m dv/dt = m g − k v, soit **dv/dt = −(k/m) v + g**.
- C'est une équation y' = ay + b : **v(t) = v_lim (1 − e^(−t/τ))**.
- **Vitesse limite** (régime permanent) : dv/dt = 0, donc **v_lim = m g / k**.
- **Temps caractéristique** : **τ = m/k**. À t = τ, v ≈ **63 %** de v_lim ; après 5τ, le régime permanent est atteint.
- On peut négliger la poussée d'Archimède quand le fluide est beaucoup moins dense que l'objet.

### Force et champ électrostatiques
- Une charge q placée dans un champ électrostatique **E** subit la force **F = q E** (vecteurs). Si q > 0, F est dans le sens de E ; si q < 0, en sens inverse.
- Entre deux **armatures planes** séparées de d et soumises à une tension U, le champ est **uniforme** : **E = U/d** (en V·m⁻¹), dirigé de la plaque + vers la plaque −.
- **Électrophorèse** : des molécules chargées (ADN, protéines) migrent sous l'effet de qE ; avec un frottement, elles atteignent une vitesse limite qui dépend de leur charge et de leur taille.

### À retenir pour le bac
- a = dv/dt ; v est une primitive de a.
- Somme des forces = m a.
- Chute libre : a = g.
- Frottement visqueux : v_lim = mg/k, τ = m/k, 63 % à t = τ.
- F = qE et E = U/d.`,
    cartes: [
      { q: "Coordonnées du vecteur accélération", r: "ax = dvx/dt et ay = dvy/dt." },
      { q: "Vitesse si a = 2 m·s⁻² et v(0) = 5 m·s⁻¹", r: "v(t) = 2t + 5." },
      { q: "Première loi de Newton", r: "Si la somme des forces est nulle, le mouvement est rectiligne uniforme ou l'objet reste immobile." },
      { q: "Deuxième loi de Newton", r: "Somme des forces = m × a." },
      { q: "Troisième loi de Newton", r: "Deux corps en interaction exercent l'un sur l'autre des forces opposées de même valeur." },
      { q: "Accélération en chute libre", r: "a = g, verticale vers le bas, g ≈ 9,81 m·s⁻²." },
      { q: "Durée d'une chute libre de hauteur h sans vitesse initiale", r: "t = √(2h/g)." },
      { q: "Équation de la vitesse avec frottement visqueux", r: "dv/dt = −(k/m) v + g." },
      { q: "Vitesse limite avec frottement visqueux", r: "v_lim = m g / k." },
      { q: "Temps caractéristique avec frottement visqueux", r: "τ = m/k ; à t = τ, v vaut environ 63 % de v_lim." },
      { q: "Force électrostatique", r: "F = q E (vecteurs)." },
      { q: "Champ entre deux armatures planes", r: "E = U/d, uniforme, de la plaque + vers la plaque −." },
      { q: "Principe de l'électrophorèse", r: "Des molécules chargées migrent sous l'effet d'un champ électrostatique." },
    ],
    quiz: [
      { q: "L'accélération vaut 2 m·s⁻² et v(0) = 5 m·s⁻¹. Quelle est l'expression de v(t) ?",
        choix: ["v(t) = 5t + 2", "v(t) = t² + 5", "v(t) = 2t + 5", "v(t) = 2t"],
        bonne: 2, niv: 2,
        expl: "v est la primitive de a qui vaut 5 en 0." },
      { q: "Combien de temps dure une chute libre de 20 m sans vitesse initiale ?",
        choix: ["Environ 4,1 s", "Environ 0,49 s", "Environ 1,4 s", "Environ 2,0 s"],
        bonne: 3, niv: 2,
        expl: "t = √(2 × 20 / 9,81) ≈ 2,02 s." },
      { q: "Une bille de 0,010 kg tombe dans l'huile avec k = 0,050 kg·s⁻¹. Quelle est sa vitesse limite ?",
        choix: ["Environ 2,0 m·s⁻¹", "Environ 0,049 m·s⁻¹", "Environ 0,20 m·s⁻¹", "Environ 49 m·s⁻¹"],
        bonne: 0, niv: 3,
        expl: "v_lim = mg/k = 0,010 × 9,81 / 0,050 ≈ 1,96 m·s⁻¹." },
      { q: "Même bille : quel est le temps caractéristique τ = m/k ?",
        choix: ["5,0 s", "0,20 s", "0,050 s", "0,0005 s"],
        bonne: 1, niv: 2,
        expl: "τ = 0,010/0,050 = 0,20 s." },
      { q: "À t = τ, quelle fraction de la vitesse limite la bille a-t-elle atteinte ?",
        choix: ["50 %", "Environ 37 %", "Environ 63 %", "Environ 10 %"],
        bonne: 2, niv: 2,
        expl: "v(τ) = v_lim (1 − e^(−1)) ≈ 0,63 v_lim." },
      { q: "Une goutte tombe à vitesse constante. Que peut-on dire des forces ?",
        choix: ["Elles se compensent", "Le poids est plus grand que le frottement", "Le poids est nul", "Seul le poids agit"],
        bonne: 0, niv: 1,
        expl: "Première loi de Newton : mouvement rectiligne uniforme, forces qui se compensent." },
      { q: "Deux armatures distantes de 2,0 cm sont soumises à 100 V. Quel est le champ électrostatique ?",
        choix: ["50 V·m⁻¹", "2,0 V·m⁻¹", "5,0 × 10³ V·m⁻¹", "200 V·m⁻¹"],
        bonne: 2, niv: 2,
        expl: "E = U/d = 100/0,020." },
      { q: "Une molécule chargée négativement est placée dans un champ électrostatique. Dans quel sens se déplace-t-elle ?",
        choix: ["Dans le sens du champ, vers la plaque négative", "En sens inverse du champ, vers la plaque positive", "Perpendiculairement au champ", "Elle reste immobile"],
        bonne: 1, niv: 3,
        expl: "F = qE avec q < 0 : F est opposée à E." },
      { q: "En chute libre, avec un axe vertical vers le haut, que vaut ay ?",
        choix: ["g", "−g", "0", "−g t"],
        bonne: 1, niv: 2,
        expl: "L'accélération est dirigée vers le bas." },
      { q: "Pour un lancer oblique en chute libre, comment évolue la composante horizontale de la vitesse ?",
        choix: ["Elle reste constante", "Elle augmente", "Elle diminue", "Elle s'annule au sommet"],
        bonne: 0, niv: 2,
        expl: "ax = 0 : vx est constante." },
      { q: "Quelle relation exprime la deuxième loi de Newton ?",
        choix: ["Somme des forces = m × a", "Somme des forces = m × v", "Somme des forces = 0", "F = q E"],
        bonne: 0, niv: 1,
        expl: "La deuxième loi relie les forces à l'accélération." },
    ] },
  { chapitre: "stl-pcm-8",
    fiche: `## Chaînes énergétiques et énergie mécanique

Barrage, éolienne, grêlon qui tombe sur un panneau solaire : on fait des **bilans d'énergie**. L'énergie se conserve, mais une partie est souvent **dissipée** en chaleur.

### Chaîne énergétique et rendement
- Une chaîne énergétique montre les **réservoirs** (où l'énergie est stockée), les **convertisseurs** (qui changent sa forme) et les **transferts**.
- Exemple : panneau photovoltaïque : énergie lumineuse → **panneau** → énergie électrique utile + transfert thermique perdu.
- **Conservation de l'énergie** : énergie reçue = énergie utile + énergie dissipée.
- **Rendement** : **η = énergie utile / énergie reçue** (ou puissances), entre 0 et 1.
- La **dissipation** d'énergie correspond en général à un **transfert thermique** (échauffement).

### Travail d'une force
- Travail d'une force constante F sur un déplacement AB : **W = F × AB × cos α** (produit scalaire), en J. α est l'angle entre la force et le déplacement.
- Travail **moteur** si α < 90° (W > 0), **résistant** si α > 90° (W < 0), **nul** si la force est **perpendiculaire** au déplacement (la réaction d'un support sans frottement par exemple).
- **Travail du poids** : **W = m g (zA − zB)** : il ne dépend que de la différence d'altitude. Positif à la descente.

### Énergies
- **Énergie cinétique** : **Ec = ½ m v²**.
- **Énergie potentielle de pesanteur** : **Epp = m g z** (z altitude, origine choisie). On a W(poids) = −ΔEpp.
- **Énergie mécanique** : **Em = Ec + Epp**.
- **Sans frottement** : Em se **conserve**. Exemple : un objet lâché de h sans vitesse arrive en bas avec **v = √(2 g h)**.
- **Avec frottement** : **ΔEm = W(frottements)** < 0 : l'énergie mécanique diminue, l'énergie perdue est dissipée en chaleur.

### Exemple : le grêlon (bac 2026 Polynésie)
- Grêlon de 7,53 g tombant de 1 000 m sans frottement : v = √(2 × 9,81 × 1 000) ≈ 140 m·s⁻¹, bien plus que les 23 m·s⁻¹ réellement observés : les **frottements de l'air** ne sont pas négligeables.

### Puissance et énergie disponibles
- **E = P × Δt** ; 1 kWh = 3,6 × 10⁶ J.
- Énergie d'une retenue d'eau de masse m et de hauteur de chute h : **E = m g h**.
- Puissance d'une chute d'eau de débit massique Dm (kg·s⁻¹) : **P = Dm g h**. Exemple : 1 000 kg·s⁻¹ tombant de 50 m : P ≈ 4,9 × 10⁵ W.

### À retenir pour le bac
- Rendement = utile / reçu ; énergie reçue = utile + dissipée.
- W = F × d × cos α ; travail nul si force perpendiculaire.
- Em = ½ m v² + m g z, conservée sans frottement.
- Variation de Em = travail des frottements.`,
    cartes: [
      { q: "Éléments d'une chaîne énergétique", r: "Réservoirs, convertisseurs et transferts d'énergie." },
      { q: "Conservation de l'énergie pour un convertisseur", r: "Énergie reçue = énergie utile + énergie dissipée." },
      { q: "Rendement", r: "η = énergie utile / énergie reçue." },
      { q: "Travail d'une force constante", r: "W = F × AB × cos α." },
      { q: "Quand le travail d'une force est-il nul ?", r: "Quand la force est perpendiculaire au déplacement." },
      { q: "Travail du poids entre A et B", r: "W = m g (zA − zB)." },
      { q: "Énergie cinétique", r: "Ec = ½ m v²." },
      { q: "Énergie potentielle de pesanteur", r: "Epp = m g z." },
      { q: "Énergie mécanique", r: "Em = Ec + Epp." },
      { q: "Énergie mécanique sans frottement", r: "Elle se conserve." },
      { q: "Variation d'énergie mécanique avec frottements", r: "Elle est égale au travail des forces de frottement (négatif)." },
      { q: "Vitesse après une chute libre de hauteur h depuis le repos", r: "v = √(2 g h)." },
      { q: "Puissance d'une chute d'eau", r: "P = Dm × g × h, avec Dm le débit massique." },
    ],
    quiz: [
      { q: "Un panneau reçoit 2 400 W de lumière et fournit 600 W électriques. Quel est son rendement ?",
        choix: ["400 %", "25 %", "4 %", "75 %"],
        bonne: 1, niv: 1,
        expl: "η = 600/2 400 = 0,25." },
      { q: "Même panneau : quelle puissance est dissipée en chaleur ?",
        choix: ["1 800 W", "600 W", "2 400 W", "3 000 W"],
        bonne: 0, niv: 2,
        expl: "Reçue = utile + dissipée : 2 400 − 600." },
      { q: "Un objet est lâché sans vitesse de 5,0 m. Sans frottement, quelle est sa vitesse en bas ?",
        choix: ["Environ 9,9 m·s⁻¹", "Environ 98 m·s⁻¹", "Environ 49 m·s⁻¹", "5,0 m·s⁻¹"],
        bonne: 0, niv: 2,
        expl: "v = √(2 × 9,81 × 5,0) ≈ 9,9 m·s⁻¹." },
      { q: "Quel est le travail du poids d'un objet de 2,0 kg qui descend de 3,0 m ?",
        choix: ["Environ −59 J", "Environ 59 J", "6,0 J", "Environ 20 J"],
        bonne: 1, niv: 2,
        expl: "W = m g (zA − zB) = 2,0 × 9,81 × 3,0 > 0 à la descente." },
      { q: "Le support exerce une réaction perpendiculaire au déplacement. Quel est son travail ?",
        choix: ["Positif", "Nul", "Négatif", "Égal au travail du poids"],
        bonne: 1, niv: 1,
        expl: "cos 90° = 0." },
      { q: "Un grêlon tombe de 1 000 m. Sans frottement, il arriverait à environ 140 m·s⁻¹ ; on mesure 23 m·s⁻¹. Que conclure ?",
        choix: ["Le grêlon a perdu de la masse", "L'énergie ne se conserve pas", "Les frottements de l'air ne sont pas négligeables", "Le champ de pesanteur est plus faible en altitude"],
        bonne: 2, niv: 3,
        expl: "L'énergie mécanique a diminué : elle a été dissipée par les frottements." },
      { q: "Avec frottements, comment évolue l'énergie mécanique d'un système ?",
        choix: ["Elle se conserve", "Elle augmente", "Elle diminue", "Elle oscille"],
        bonne: 2, niv: 1,
        expl: "ΔEm = W(frottements) < 0." },
      { q: "Une chute d'eau a un débit de 1 000 kg·s⁻¹ et une hauteur de 50 m. Quelle puissance est disponible ?",
        choix: ["5,0 × 10⁴ W", "Environ 4,9 × 10⁵ W", "Environ 4,9 × 10³ W", "Environ 9,8 × 10⁵ W"],
        bonne: 1, niv: 3,
        expl: "P = Dm g h = 1 000 × 9,81 × 50 ≈ 490 500 W." },
      { q: "Une force de 10 N fait un angle de 60° avec un déplacement de 4,0 m. Quel est son travail ?",
        choix: ["40 J", "20 J", "Environ 35 J", "−20 J"],
        bonne: 1, niv: 3,
        expl: "W = 10 × 4,0 × cos 60° = 10 × 4,0 × 0,5." },
      { q: "À quoi correspond en général l'énergie dissipée dans un convertisseur ?",
        choix: ["Une perte par transfert thermique", "Une énergie lumineuse utile", "Une énergie potentielle stockée", "Une énergie chimique créée"],
        bonne: 0, niv: 1,
        expl: "Les pertes se traduisent par un échauffement." },
      { q: "Quelle est l'énergie cinétique d'un objet de 4,0 kg allant à 3,0 m·s⁻¹ ?",
        choix: ["18 J", "12 J", "6,0 J", "9,0 J"],
        bonne: 0, niv: 1,
        expl: "½ × 4,0 × 3,0² = 18 J." },
    ] },
  { chapitre: "stl-pcm-9",
    fiche: `## Énergie chimique

Une transformation chimique peut libérer de l'énergie (combustion d'un carburant) ou en absorber (dissolution de certains sels dans une poche de froid). On mesure cette énergie avec l'**enthalpie**, à pression constante.

### Diagramme d'état d'un corps pur
- Il indique, selon la **température** et la **pression**, l'état **solide**, **liquide** ou **gazeux** du corps pur.
- Les courbes séparent les domaines ; le **point triple** est l'unique point où les trois états coexistent ; au-delà du **point critique**, liquide et gaz ne se distinguent plus.
- Exemple : à 1 bar, l'eau est liquide entre 0 °C et 100 °C.

### Enthalpie de changement d'état
- L'**enthalpie de changement d'état** ΔH (en J·kg⁻¹ ou J·mol⁻¹) est l'énergie reçue par le système, à pression constante, pour changer d'état.
- **Fusion, vaporisation, sublimation** : le corps **reçoit** de l'énergie : ΔH > 0.
- **Solidification, liquéfaction, condensation** : le corps **cède** de l'énergie : ΔH < 0.
- Énergie pour fondre une masse m : **Q = m × ΔH fusion**. Glace : ΔH fus = 333 kJ·kg⁻¹.

### Énergie et variation de température
- Pour une phase **condensée** (solide ou liquide) : **ΔH = Q = m × c × ΔT**, avec c la capacité thermique massique.
- Eau liquide : c = 4,18 kJ·kg⁻¹·K⁻¹. Chauffer 1 kg d'eau de 1 °C demande 4,18 kJ.

### Enthalpie standard de réaction
- L'**enthalpie standard de formation** ΔfH° d'une espèce est l'enthalpie de la réaction qui la forme à partir des corps simples les plus stables. Elle est **nulle pour un corps simple** dans son état stable (O2 gazeux, C graphite…).
- **Loi de Hess** : **ΔrH° = somme des ΔfH°(produits) − somme des ΔfH°(réactifs)**, chacune multipliée par son nombre stœchiométrique.
- **ΔrH° < 0** : réaction **exothermique** (elle libère de l'énergie) ; **ΔrH° > 0** : **endothermique** ; ΔrH° = 0 : athermique.
- Exemple : CH4 + 2 O2 → CO2 + 2 H2O(l), avec ΔfH°(CH4) = −75, ΔfH°(CO2) = −394, ΔfH°(H2O, l) = −286 kJ·mol⁻¹ : ΔrH° = −394 + 2 × (−286) − (−75) = **−891 kJ·mol⁻¹** : exothermique.

### Pouvoir calorifique
- Le **pouvoir calorifique** PC est l'énergie libérée par la combustion complète d'**un kilogramme** (ou d'un litre) de combustible, en kJ·kg⁻¹.
- Lien avec ΔrH° : PC = −ΔrH° / M (M masse molaire en kg·mol⁻¹). Méthane : 891 / 0,016 ≈ 5,6 × 10⁴ kJ·kg⁻¹.
- Mesure expérimentale : on chauffe une masse d'eau connue avec le combustible et on mesure ΔT : Q = m(eau) × c × ΔT, puis PC = Q / m(brûlée). La valeur obtenue est en général **trop faible**, à cause des pertes thermiques vers l'air.

### À retenir pour le bac
- Fusion, vaporisation, sublimation : ΔH > 0.
- Q = m c ΔT pour une phase condensée ; Q = m ΔH pour un changement d'état.
- Loi de Hess : produits moins réactifs.
- ΔrH° < 0 : exothermique.`,
    cartes: [
      { q: "Information donnée par un diagramme d'état", r: "L'état physique d'un corps pur selon la température et la pression." },
      { q: "Point triple", r: "L'unique point où les trois états coexistent." },
      { q: "Signe de l'enthalpie de fusion", r: "Positif : le corps reçoit de l'énergie." },
      { q: "Signe de l'enthalpie de solidification", r: "Négatif : le corps cède de l'énergie." },
      { q: "Énergie pour fondre une masse m", r: "Q = m × ΔH fusion." },
      { q: "Énergie pour chauffer une phase condensée", r: "Q = m × c × ΔT." },
      { q: "Enthalpie standard de formation d'un corps simple stable", r: "Nulle." },
      { q: "Loi de Hess", r: "ΔrH° = somme des ΔfH° des produits − somme des ΔfH° des réactifs (avec les coefficients)." },
      { q: "Réaction exothermique", r: "ΔrH° < 0 : elle libère de l'énergie." },
      { q: "Réaction endothermique", r: "ΔrH° > 0 : elle absorbe de l'énergie." },
      { q: "Pouvoir calorifique", r: "Énergie libérée par la combustion complète d'un kilogramme de combustible." },
      { q: "ΔrH° de la combustion du méthane", r: "Environ −891 kJ·mol⁻¹." },
      { q: "Pourquoi un pouvoir calorifique mesuré en classe est-il souvent trop faible ?", r: "À cause des pertes thermiques vers l'air." },
    ],
    quiz: [
      { q: "Quel est le signe de l'enthalpie de vaporisation de l'eau ?",
        choix: ["Négatif", "Nul", "Variable selon la masse", "Positif"],
        bonne: 3, niv: 1,
        expl: "Pour passer à l'état gazeux, l'eau reçoit de l'énergie." },
      { q: "Quelle énergie faut-il pour fondre 200 g de glace à 0 °C (ΔH fus = 333 kJ·kg⁻¹) ?",
        choix: ["Environ 66,6 kJ", "Environ 66 600 kJ", "Environ 1,67 kJ", "333 kJ"],
        bonne: 0, niv: 2,
        expl: "Q = 0,200 × 333 = 66,6 kJ." },
      { q: "Quelle énergie faut-il pour chauffer 0,50 kg d'eau de 20 °C à 80 °C ?",
        choix: ["Environ 167 kJ", "Environ 2,1 kJ", "Environ 125 kJ", "Environ 42 kJ"],
        bonne: 2, niv: 2,
        expl: "Q = 0,50 × 4,18 × 60 ≈ 125 kJ." },
      { q: "CH4 + 2 O2 → CO2 + 2 H2O(l). Avec ΔfH° : CH4 −75, CO2 −394, H2O(l) −286 kJ·mol⁻¹, que vaut ΔrH° ?",
        choix: ["−605 kJ·mol⁻¹", "−891 kJ·mol⁻¹", "+891 kJ·mol⁻¹", "−755 kJ·mol⁻¹"],
        bonne: 1, niv: 3,
        expl: "−394 + 2 × (−286) − (−75) = −891." },
      { q: "ΔrH° = −891 kJ·mol⁻¹. Comment qualifier la réaction ?",
        choix: ["Endothermique", "Athermique", "Exothermique", "Impossible"],
        bonne: 2, niv: 1,
        expl: "ΔrH° < 0 : elle libère de l'énergie." },
      { q: "Que vaut l'enthalpie standard de formation de O2(g) ?",
        choix: ["−286 kJ·mol⁻¹", "+394 kJ·mol⁻¹", "−394 kJ·mol⁻¹", "0"],
        bonne: 3, niv: 2,
        expl: "O2 gazeux est un corps simple dans son état stable." },
      { q: "Que représente le point triple sur un diagramme d'état ?",
        choix: ["La température d'ébullition à 1 bar", "Le point où solide, liquide et gaz coexistent", "Le point où le corps se décompose", "La pression maximale du gaz"],
        bonne: 1, niv: 2,
        expl: "C'est l'unique couple température-pression de coexistence des trois états." },
      { q: "La combustion du méthane libère 891 kJ par mole (M = 16 g·mol⁻¹). Quel est son pouvoir calorifique ?",
        choix: ["Environ 5,6 × 10⁴ kJ·kg⁻¹", "Environ 56 kJ·kg⁻¹", "Environ 1,4 × 10⁴ kJ·kg⁻¹", "891 kJ·kg⁻¹"],
        bonne: 0, niv: 3,
        expl: "PC = 891 / 0,016 ≈ 55 700 kJ·kg⁻¹." },
      { q: "Un pouvoir calorifique mesuré en classe est inférieur à la valeur des tables. Quelle est l'explication la plus probable ?",
        choix: ["Une erreur dans la loi de Hess", "La combustion libère trop d'énergie", "Des pertes thermiques vers l'air", "L'eau a une capacité thermique trop faible"],
        bonne: 2, niv: 2,
        expl: "Toute l'énergie libérée n'est pas reçue par l'eau." },
      { q: "Une poche de froid se refroidit quand on dissout le sel qu'elle contient. Comment est cette dissolution ?",
        choix: ["Exothermique", "Athermique", "Explosive", "Endothermique"],
        bonne: 3, niv: 3,
        expl: "Elle absorbe de l'énergie au milieu extérieur." },
      { q: "Quel changement d'état a une enthalpie négative ?",
        choix: ["La liquéfaction", "La fusion", "La vaporisation", "La sublimation"],
        bonne: 0, niv: 2,
        expl: "En se liquéfiant, un gaz cède de l'énergie." },
    ] },
  { chapitre: "stl-pcm-10",
    fiche: `## Énergie électrique

Ce chapitre traite des circuits en **courant continu** : lois des circuits, puissance, effet Joule, et générateurs (piles, accumulateurs, panneaux photovoltaïques, piles à combustible).

### Lois des circuits
- **Loi des nœuds** : la somme des intensités qui arrivent à un nœud est égale à la somme de celles qui en partent.
- **Loi des mailles** : dans une maille, la somme algébrique des tensions est nulle. En série, les tensions s'additionnent ; en dérivation, elles sont égales.
- **Loi d'Ohm** pour un conducteur ohmique : **U = R × I** (U en V, R en Ω, I en A).

### Puissance et énergie
- Puissance électrique reçue par un dipôle : **P = U × I** (en W).
- Énergie : **E = P × Δt** (J si s ; Wh si h). 1 Wh = 3 600 J.
- **Effet Joule** : un conducteur ohmique convertit l'énergie électrique en **énergie thermique** : **P_J = R × I²**. Applications : radiateurs, bouilloires, fusibles. Inconvénient : pertes dans les fils et les appareils.
- **Rendement** d'un convertisseur : **η = P utile / P reçue**. Exemple : un moteur reçoit 12 V × 2,0 A = 24 W et fournit 18 W mécaniques : η = 0,75.

### Générateurs
- Une **source idéale de tension** garde la même tension quel que soit le courant débité.
- Un générateur réel a une tension qui diminue quand l'intensité augmente.
- La **caractéristique** d'un panneau photovoltaïque I = f(U) n'est pas celle d'une source idéale : il existe un **point de puissance maximale** où P = U × I est la plus grande.

### Quantité d'électricité et capacité d'un accumulateur
- **Q = I × Δt**, en coulombs (C) ou en **ampères-heures (Ah)** : 1 Ah = 3 600 C.
- La **capacité** d'un accumulateur est la quantité d'électricité qu'il peut fournir.
- **Énergie stockée** : **E = U × Q**. Exemple : 3,7 V et 3 000 mAh = 3,0 Ah : E = 11,1 Wh ≈ 4,0 × 10⁴ J.
- **Durée de fonctionnement** : **Δt = Q / I**. Exemple : 3,0 Ah débitant 0,50 A : 6,0 h.

### Comparer les générateurs
- Pile : énergie chimique → électrique, non rechargeable.
- Accumulateur : rechargeable (énergie stockée sous forme chimique).
- Panneau photovoltaïque : lumineuse → électrique.
- Pile à combustible : chimique (H2 et O2) → électrique, ne rejette que de l'eau.

### Sécurité
- Le corps humain est conducteur : au-delà d'environ 30 mA, le courant est dangereux. Respecter les règles : pas de manipulation sous tension, fusibles et disjoncteurs.

### À retenir pour le bac
- U = R I ; P = U I ; P_J = R I² ; E = P Δt.
- Q = I Δt ; 1 Ah = 3 600 C ; E = U Q.
- Durée de fonctionnement : Q / I.
- Rendement = utile / reçu.`,
    cartes: [
      { q: "Loi des nœuds", r: "La somme des intensités arrivant à un nœud est égale à la somme de celles qui en partent." },
      { q: "Loi des mailles", r: "La somme algébrique des tensions dans une maille est nulle." },
      { q: "Loi d'Ohm", r: "U = R × I." },
      { q: "Puissance électrique reçue par un dipôle", r: "P = U × I." },
      { q: "Puissance dissipée par effet Joule", r: "P_J = R × I²." },
      { q: "1 Wh en joules", r: "3 600 J." },
      { q: "1 Ah en coulombs", r: "3 600 C." },
      { q: "Énergie stockée dans un accumulateur", r: "E = U × Q." },
      { q: "Durée de fonctionnement d'un accumulateur", r: "Δt = Q / I." },
      { q: "Source idéale de tension", r: "Elle garde la même tension quel que soit le courant débité." },
      { q: "Point de puissance maximale d'un panneau photovoltaïque", r: "Le point de sa caractéristique où U × I est le plus grand." },
      { q: "Conversion réalisée par un accumulateur qui se décharge", r: "Énergie chimique → énergie électrique." },
      { q: "Intensité dangereuse pour le corps humain", r: "Environ 30 mA et plus." },
    ],
    quiz: [
      { q: "Un conducteur ohmique de 100 Ω est traversé par 0,050 A. Quelle est la tension à ses bornes ?",
        choix: ["5,0 V", "2 000 V", "0,0005 V", "50 V"],
        bonne: 0, niv: 1,
        expl: "U = R I = 100 × 0,050." },
      { q: "Quelle puissance est dissipée par effet Joule dans une résistance de 10 Ω parcourue par 2,0 A ?",
        choix: ["20 W", "5,0 W", "40 W", "10 W"],
        bonne: 2, niv: 2,
        expl: "P = R I² = 10 × 4,0." },
      { q: "Un moteur reçoit 12 V et 2,0 A et fournit 18 W mécaniques. Quel est son rendement ?",
        choix: ["1,33", "0,25", "0,67", "0,75"],
        bonne: 3, niv: 2,
        expl: "η = 18 / 24." },
      { q: "Un accumulateur de 3,7 V a une capacité de 3 000 mAh. Quelle énergie stocke-t-il ?",
        choix: ["Environ 11 100 Wh", "Environ 0,81 Wh", "Environ 11 Wh", "3 000 Wh"],
        bonne: 2, niv: 3,
        expl: "E = 3,7 × 3,0 Ah = 11,1 Wh." },
      { q: "Un accumulateur de 3,0 Ah débite 0,50 A. Combien de temps fonctionne-t-il ?",
        choix: ["1,5 h", "0,17 h", "6,0 h", "3,5 h"],
        bonne: 2, niv: 2,
        expl: "Δt = Q / I = 3,0 / 0,50." },
      { q: "Combien vaut 2,0 Ah en coulombs ?",
        choix: ["7 200 C", "120 C", "2 000 C", "3 600 C"],
        bonne: 0, niv: 1,
        expl: "2,0 × 3 600 C." },
      { q: "Deux résistances en série reçoivent 3,0 V et 9,0 V. Quelle est la tension totale ?",
        choix: ["12 V", "6,0 V", "9,0 V", "3,0 V"],
        bonne: 0, niv: 1,
        expl: "Loi des mailles : en série, les tensions s'additionnent." },
      { q: "En quoi la caractéristique d'un panneau photovoltaïque diffère-t-elle de celle d'une source idéale ?",
        choix: ["Sa tension est constante quelle que soit l'intensité", "Elle ne débite pas de courant", "Elle fournit une tension alternative", "Sa tension diminue fortement quand l'intensité devient grande"],
        bonne: 3, niv: 3,
        expl: "Une source idéale garde la même tension ; le panneau, non." },
      { q: "À quel usage l'effet Joule est-il utile ?",
        choix: ["Le transport de l'électricité", "La charge d'un téléphone", "Le chauffage électrique", "L'éclairage par LED"],
        bonne: 2, niv: 1,
        expl: "Il convertit l'énergie électrique en énergie thermique : utile pour chauffer, gênant ailleurs." },
      { q: "Quel générateur ne rejette que de l'eau en fonctionnant ?",
        choix: ["La pile saline", "La pile à combustible à hydrogène", "Le groupe électrogène", "L'accumulateur au plomb"],
        bonne: 1, niv: 2,
        expl: "2 H2 + O2 → 2 H2O." },
      { q: "Une lampe reçoit 12 V et 0,50 A pendant 2,0 h. Quelle énergie consomme-t-elle ?",
        choix: ["6,0 Wh", "3,0 Wh", "1,0 Wh", "12 Wh"],
        bonne: 3, niv: 2,
        expl: "P = 6,0 W, puis E = 6,0 × 2,0." },
    ] },
  { chapitre: "stl-pcm-11",
    fiche: `## Énergie et ondes : éclairement et laser

La lumière transporte de l'énergie. Pour dimensionner un panneau photovoltaïque ou utiliser un laser sans danger, on calcule l'énergie reçue par une surface. Les sujets 2026 (métropole et Polynésie) portaient tous deux sur des panneaux photovoltaïques.

### Rappels sur les ondes électromagnétiques
- Du plus énergétique au moins énergétique : γ, X, UV, visible (400 à 800 nm), infrarouge, micro-ondes, radio.
- Énergie d'un photon : **E = h f = h c/λ** (h = 6,63 × 10⁻³⁴ J·s ; c = 3,00 × 10⁸ m·s⁻¹).

### Flux énergétique et éclairement
- Le **flux énergétique** Φ est la **puissance** transportée par le rayonnement et reçue par une surface, en **watts**.
- L'**éclairement énergétique** E est la puissance reçue **par unité de surface** : **E = Φ / S**, en **W·m⁻²**. Donc **Φ = E × S**.
- Ordre de grandeur : en plein soleil, en France, E est d'environ **1 000 W·m⁻²** (« conditions standard »).
- Exemple (bac 2026 métropole) : cellule de 365 mm × 295 mm : S = 0,365 × 0,295 ≈ 0,108 m² ; sous E = 680 W·m⁻² : Φ = 680 × 0,108 ≈ 73 W.

### Bilan d'un panneau photovoltaïque
- Chaîne : énergie lumineuse → **panneau** → énergie électrique (utile) + transfert thermique (perdu).
- **Rendement** : **η = P électrique / Φ reçu**.
- Exemple (bac 2026 Polynésie) : kit de 3,92 m², E = 1 000 W·m⁻², P élec = 600 W : Φ = 3 920 W, η ≈ 0,15 (15 %).
- Rendements typiques : monocristallin environ 20 %, polycristallin environ 15 %, amorphe environ 10 %.
- **Facteurs limitants** : l'inclinaison et l'orientation, les nuages, l'heure, la **température** (le rendement baisse quand le panneau chauffe), l'ombre.
- Rentabilité : énergie produite × prix du kWh ; on compare au prix d'achat.

### Le laser
- Propriétés : lumière **monochromatique** (une seule longueur d'onde), **directive** (faisceau très peu divergent), **concentration d'énergie** sur une très petite surface.
- C'est cette concentration qui le rend utile (découpe, chirurgie, lecture optique) et **dangereux** pour l'œil.
- **Énergie déposée** : **E = Φ × Δt** (puissance × durée d'exposition).
- Éclairement d'un faisceau : Φ divisé par l'aire de la tache. Exemple : laser de 1 mW sur une tache de 1 mm² : 1 000 W·m⁻², autant que le Soleil, mais concentré.

### Protection contre les risques du laser
- Les lasers sont classés selon leur danger (classes 1, 2, 3R, 3B, 4).
- Ne **jamais** viser l'œil, ni regarder un faisceau ou son reflet sur une surface brillante ; porter des lunettes adaptées à la longueur d'onde.
- On peut calculer une **durée maximale d'exposition** : Δt max = E max admissible / Φ.

### À retenir pour le bac
- Φ = E × S (W) ; E en W·m⁻².
- Rendement = P électrique / Φ reçu.
- Laser : monochromatique, directif, concentré.
- Énergie déposée = Φ × Δt.`,
    cartes: [
      { q: "Flux énergétique", r: "La puissance du rayonnement reçue par une surface, en watts." },
      { q: "Éclairement énergétique", r: "La puissance reçue par unité de surface, en W·m⁻²." },
      { q: "Lien entre flux et éclairement", r: "Φ = E × S." },
      { q: "Éclairement en plein soleil (conditions standard)", r: "Environ 1 000 W·m⁻²." },
      { q: "Rendement d'un panneau photovoltaïque", r: "η = P électrique / Φ reçu." },
      { q: "Rendement typique d'un panneau monocristallin", r: "Environ 20 %." },
      { q: "Effet de la température sur un panneau photovoltaïque", r: "Son rendement baisse quand il chauffe." },
      { q: "Trois propriétés de la lumière laser", r: "Monochromatique, directive, concentration d'énergie." },
      { q: "Énergie déposée par un laser", r: "E = Φ × Δt." },
      { q: "Pourquoi un laser est-il dangereux pour l'œil ?", r: "Il concentre beaucoup d'énergie sur une très petite surface de la rétine." },
      { q: "Énergie d'un photon", r: "E = h f = h c/λ." },
      { q: "Aire d'une cellule de 365 mm × 295 mm", r: "Environ 0,108 m²." },
      { q: "Deux règles de sécurité face à un laser", r: "Ne jamais viser l'œil ni regarder un reflet ; porter des lunettes adaptées." },
    ],
    quiz: [
      { q: "Une cellule de 0,108 m² reçoit un éclairement de 680 W·m⁻². Quel est le flux reçu ?",
        choix: ["Environ 6 300 W", "Environ 0,16 W", "Environ 73 W", "680 W"],
        bonne: 2, niv: 2,
        expl: "Φ = E × S = 680 × 0,108 ≈ 73,4 W." },
      { q: "Un kit de 3,92 m² reçoit 1 000 W·m⁻² et produit 600 W électriques. Quel est son rendement ?",
        choix: ["Environ 65 %", "Environ 15 %", "Environ 1,5 %", "60 %"],
        bonne: 1, niv: 2,
        expl: "Φ = 3 920 W ; η = 600/3 920 ≈ 0,153." },
      { q: "Quelle est l'unité de l'éclairement énergétique ?",
        choix: ["W", "W·m⁻²", "J", "W·m²"],
        bonne: 1, niv: 1,
        expl: "C'est une puissance par unité de surface." },
      { q: "Quel effet a l'échauffement d'un panneau photovoltaïque ?",
        choix: ["Son rendement augmente", "Il produit plus de courant", "Il ne change rien", "Son rendement baisse"],
        bonne: 3, niv: 2,
        expl: "La température est un facteur limitant." },
      { q: "Laquelle de ces propriétés appartient à la lumière d'un laser ?",
        choix: ["Elle contient plusieurs couleurs mélangées", "Elle diverge fortement", "Elle est invisible à l'œil", "Elle est monochromatique"],
        bonne: 3, niv: 1,
        expl: "Une seule longueur d'onde, faisceau directif, énergie concentrée." },
      { q: "Un laser de 5,0 mW éclaire une cible pendant 10 s. Quelle énergie dépose-t-il ?",
        choix: ["50 J", "0,50 J", "0,050 J", "2,0 J"],
        bonne: 2, niv: 2,
        expl: "E = Φ Δt = 0,0050 × 10." },
      { q: "Un laser de 1,0 mW forme une tache de 1,0 mm². Quel est l'éclairement ?",
        choix: ["1,0 W·m⁻²", "1,0 × 10⁻³ W·m⁻²", "1,0 × 10⁶ W·m⁻²", "1,0 × 10³ W·m⁻²"],
        bonne: 3, niv: 3,
        expl: "1,0 × 10⁻³ W / 1,0 × 10⁻⁶ m² = 1 000 W·m⁻²." },
      { q: "Quel est le principal danger d'un laser, même de faible puissance ?",
        choix: ["Il émet des rayons X", "Il est radioactif", "Il chauffe toute la pièce", "Il concentre l'énergie sur une très petite zone de la rétine"],
        bonne: 3, niv: 2,
        expl: "La concentration d'énergie peut brûler la rétine." },
      { q: "Un panneau de 2,0 m² reçoit 800 W·m⁻² avec un rendement de 20 %. Quelle puissance électrique fournit-il ?",
        choix: ["320 W", "160 W", "80 W", "40 W"],
        bonne: 0, niv: 3,
        expl: "Φ = 1 600 W, puis 20 % donnent 320 W." },
      { q: "Quel rayonnement transporte des photons plus énergétiques que la lumière visible ?",
        choix: ["L'ultraviolet", "L'infrarouge", "Les micro-ondes", "Les ondes radio"],
        bonne: 0, niv: 1,
        expl: "E = h c/λ : λ plus courte, énergie plus grande." },
      { q: "L'énergie maximale admissible pour l'œil est de 10 mJ et le laser a une puissance de 5,0 mW. Quelle est la durée maximale d'exposition ?",
        choix: ["50 s", "2,0 s", "0,50 s", "0,050 s"],
        bonne: 1, niv: 3,
        expl: "Δt = 0,010 J / 0,0050 W = 2,0 s." },
    ] },
  { chapitre: "stl-pcm-12",
    fiche: `## Intégration

L'intégrale mesure une **aire** sous une courbe. En physique-chimie, elle donne une énergie à partir d'une puissance, une distance à partir d'une vitesse, une quantité totale à partir d'un débit.

### Intégrale d'une fonction positive
- Si f est positive sur [a ; b] (a < b), **∫ de a à b de f(x) dx** est l'**aire** du domaine entre la courbe, l'axe des abscisses et les droites x = a et x = b, en **unités d'aire**.
- Fonction **constante** : aire d'un **rectangle**. Exemple : ∫ de 0 à 5 de 3 dx = 15.
- Fonction **affine** : aire d'un **trapèze**. Exemple : ∫ de 0 à 4 de (x + 1) dx = (1 + 5) × 4 / 2 = 12.

### Méthode des rectangles
- On découpe [a ; b] en n morceaux de largeur Δx et on additionne les aires des rectangles : **somme des f(xi) × Δx**.
- Plus n est grand, plus cette somme se rapproche de l'intégrale.
- **Monte-Carlo** : on tire des points au hasard dans un rectangle et on compte la proportion sous la courbe pour estimer l'aire.

### Cas général
- Si f est **négative** sur [a ; b], l'intégrale est l'**opposé** de l'aire.
- Si f change de signe, on additionne les parties (positives au-dessus de l'axe, négatives au-dessous).
- Si a > b : ∫ de a à b = −∫ de b à a.

### Propriétés
- **Linéarité** : ∫(f + g) = ∫f + ∫g ; ∫(k f) = k ∫f.
- **Positivité** : si f ≥ 0 sur [a ; b], alors ∫ de a à b de f ≥ 0.
- **Croissance** : si f ≤ g sur [a ; b], alors ∫f ≤ ∫g.
- **Relation de Chasles** : ∫ de a à c = ∫ de a à b + ∫ de b à c.

### Calcul avec une primitive
- **∫ de a à b de f(x) dx = F(b) − F(a)**, où F est une primitive de f (F' = f).
- Exemple : ∫ de 1 à 3 de x² dx = [x³/3] de 1 à 3 = 9 − 1/3 = 26/3 ≈ 8,67.
- La fonction **x ↦ ∫ de a à x de f(t) dt** est la primitive de f qui s'annule en a ; sa dérivée est f.

### Valeur moyenne
- **μ = (1/(b − a)) × ∫ de a à b de f(x) dx**.
- Pour une fonction positive : μ est la hauteur du rectangle de largeur b − a qui a la même aire.

### Aire entre deux courbes
- Si f ≥ g sur [a ; b] : aire = **∫ de a à b de (f(x) − g(x)) dx**.

### En physique-chimie
- Distance parcourue = ∫ de la vitesse ; énergie = ∫ de la puissance ; quantité d'électricité = ∫ de l'intensité.

### Exemple de valeur moyenne
- f(x) = 2x sur [0 ; 3] : ∫ de 0 à 3 de 2x dx = 9, donc μ = 9/3 = 3.

### À retenir pour le bac
- Aire pour f ≥ 0 ; rectangle ou trapèze pour les fonctions simples.
- ∫ de a à b = F(b) − F(a).
- Valeur moyenne : intégrale divisée par b − a.
- Aire entre deux courbes : celle du dessus moins celle du dessous.
- Une puissance P(t) intégrée sur une durée donne une énergie.`,
    cartes: [
      { q: "Interprétation de ∫ de a à b de f si f ≥ 0", r: "L'aire sous la courbe entre x = a et x = b, en unités d'aire." },
      { q: "Intégrale d'une fonction constante k sur [a ; b]", r: "k × (b − a), aire d'un rectangle." },
      { q: "Principe de la méthode des rectangles", r: "Additionner les aires f(xi) × Δx de rectangles sous la courbe." },
      { q: "Intégrale d'une fonction négative", r: "L'opposé de l'aire." },
      { q: "∫ de a à b quand a > b", r: "−∫ de b à a." },
      { q: "Relation de Chasles", r: "∫ de a à c = ∫ de a à b + ∫ de b à c." },
      { q: "Linéarité de l'intégrale", r: "∫(f + g) = ∫f + ∫g et ∫(k f) = k ∫f." },
      { q: "Calcul avec une primitive", r: "∫ de a à b de f = F(b) − F(a)." },
      { q: "Dérivée de x ↦ ∫ de a à x de f(t) dt", r: "f(x)." },
      { q: "Valeur moyenne de f sur [a ; b]", r: "(1/(b − a)) × ∫ de a à b de f(x) dx." },
      { q: "Aire entre deux courbes (f ≥ g)", r: "∫ de a à b de (f − g)." },
      { q: "Principe de la méthode de Monte-Carlo", r: "Tirer des points au hasard et compter la proportion sous la courbe." },
      { q: "Distance parcourue à partir de la vitesse v(t)", r: "L'intégrale de v entre les deux instants." },
    ],
    quiz: [
      { q: "Combien vaut ∫ de 0 à 5 de 3 dx ?",
        choix: ["15", "3", "8", "5"],
        bonne: 0, niv: 1,
        expl: "Rectangle de largeur 5 et de hauteur 3." },
      { q: "Combien vaut ∫ de 0 à 4 de (x + 1) dx ?",
        choix: ["8", "12", "10", "6"],
        bonne: 1, niv: 2,
        expl: "Trapèze de bases 1 et 5 et de hauteur 4 : (1 + 5) × 4 / 2." },
      { q: "Combien vaut ∫ de 1 à 3 de x² dx ?",
        choix: ["26/3", "8", "9", "2/3"],
        bonne: 0, niv: 2,
        expl: "[x³/3] de 1 à 3 = 27/3 − 1/3." },
      { q: "∫ de 0 à 2 de f = 5 et ∫ de 2 à 6 de f = 3. Que vaut ∫ de 0 à 6 de f ?",
        choix: ["2", "15", "8", "−2"],
        bonne: 2, niv: 1,
        expl: "Relation de Chasles." },
      { q: "∫ de 0 à 4 de f = 10. Quelle est la valeur moyenne de f sur [0 ; 4] ?",
        choix: ["40", "10", "14", "2,5"],
        bonne: 3, niv: 1,
        expl: "μ = 10 / 4." },
      { q: "f est négative sur [1 ; 3]. Quel est le signe de ∫ de 1 à 3 de f ?",
        choix: ["Positif", "Négatif ou nul", "Il dépend de la longueur de l'intervalle", "Nul"],
        bonne: 1, niv: 2,
        expl: "L'intégrale d'une fonction négative est l'opposé d'une aire." },
      { q: "Que vaut ∫ de 3 à 1 de f si ∫ de 1 à 3 de f = 7 ?",
        choix: ["7", "0", "1/7", "−7"],
        bonne: 3, niv: 2,
        expl: "Échanger les bornes change le signe." },
      { q: "Quelle est l'aire entre y = 4 et y = x² sur [0 ; 2] ?",
        choix: ["8/3", "8", "4", "16/3"],
        bonne: 3, niv: 3,
        expl: "∫ de 0 à 2 de (4 − x²) = 8 − 8/3 = 16/3." },
      { q: "Une vitesse vaut v(t) = 2t + 5 (m·s⁻¹). Quelle distance est parcourue entre t = 0 et t = 4 s ?",
        choix: ["13 m", "36 m", "20 m", "28 m"],
        bonne: 1, niv: 3,
        expl: "∫ de 0 à 4 de (2t + 5) = [t² + 5t] = 16 + 20." },
      { q: "Quelle est la dérivée de G(x) = ∫ de 0 à x de e^(t²) dt ?",
        choix: ["2x e^(x²)", "e^(x²)", "e^(x²) − 1", "x e^(x²)"],
        bonne: 1, niv: 3,
        expl: "La dérivée de x ↦ ∫ de a à x de f(t) dt est f(x)." },
      { q: "Que devient la méthode des rectangles quand on augmente le nombre de rectangles ?",
        choix: ["Elle s'en éloigne", "Elle donne la valeur exacte dès deux rectangles", "Elle se rapproche de la valeur exacte de l'intégrale", "Elle donne une aire nulle"],
        bonne: 2, niv: 1,
        expl: "La somme des aires converge vers l'intégrale." },
    ] },
  { chapitre: "stl-pcm-13",
    fiche: `## La fonction exponentielle

L'exponentielle est la fonction des phénomènes qui évoluent proportionnellement à eux-mêmes : décroissance radioactive, cinétique d'ordre 1, charge d'un condensateur, vitesse d'une bille qui tombe dans l'huile.

### Définition et propriétés
- Le nombre **e ≈ 2,718** est la valeur de a pour laquelle la courbe de x ↦ a^x a, en 0, une tangente de pente 1.
- **e^0 = 1** ; **e^x > 0** pour tout x.
- **e^(a + b) = e^a × e^b** ; **e^(a − b) = e^a / e^b** ; **e^(−a) = 1/e^a** ; **(e^a)^n = e^(na)**.
- Exemple : e^(2x) × e^(−x) = e^x ; (e^3)² = e^6.

### Dérivée
- **(e^x)' = e^x**.
- **(e^(kx))' = k e^(kx)** pour k réel. Exemple : (e^(−0,00702t))' = −0,00702 e^(−0,00702t).
- Exemple (bac 2026 métropole) : C(t) = 3,1 × 10⁻⁵ e^(−0,00702t) ; C'(t) = −2,18 × 10⁻⁷ e^(−0,00702t) (car 3,1 × 10⁻⁵ × 0,00702 ≈ 2,18 × 10⁻⁷).

### Variations
- **exp est strictement croissante** sur ℝ.
- **e^(kx)** est croissante si k > 0, **décroissante** si k < 0.
- Pour une fonction du type f(x) = (ax + b) e^(kx), on dérive comme un produit, on factorise par e^(kx) (> 0) et on étudie le signe du facteur restant.
- Exemple : f(x) = x e^(−x). f'(x) = e^(−x) − x e^(−x) = (1 − x) e^(−x) : croissante sur ]−∞ ; 1], décroissante ensuite.

### Limites
- **e^x tend vers +∞ en +∞** et **vers 0 en −∞**.
- **e^(−kt) tend vers 0** quand t tend vers +∞ (k > 0) : c'est la clé du **régime permanent**. Exemple : v(t) = 2(1 − e^(−5t)) tend vers 2.
- **Croissances comparées** : e^x / x^n tend vers +∞ en +∞ ; **x^n e^(−x) tend vers 0** en +∞ : l'exponentielle l'emporte sur les puissances.

### Courbe
- Elle passe par (0 ; 1), est au-dessus de l'axe des abscisses, avec une asymptote horizontale y = 0 en −∞. Sa tangente en 0 a pour équation y = x + 1.

### Méthode d'Euler
- Elle approche la solution de y' = y, y(0) = 1, en répétant : y ← y + h × y, x ← x + h. Avec h petit, on retrouve la courbe de l'exponentielle.

### Exemple : étude complète d'une vitesse
- v(t) = 2(1 − e^(−5t)) pour t ≥ 0. v'(t) = 2 × 5 e^(−5t) = 10 e^(−5t) > 0 : v est croissante.
- v(0) = 0 et v tend vers 2 : la courbe part de 0 et se rapproche de l'asymptote horizontale v = 2 (vitesse limite).
- La tangente en 0 a pour pente v'(0) = 10 : elle coupe la droite v = 2 en t = 0,2, qui est le temps caractéristique.

### Exemple : signe d'une dérivée
- g(x) = (3 − x) e^(2x). g'(x) = −e^(2x) + 2(3 − x) e^(2x) = (5 − 2x) e^(2x) : g est croissante sur ]−∞ ; 2,5] et décroissante ensuite.

### À retenir pour le bac
- e^x > 0 : dans un produit, il ne change pas le signe.
- (e^(kx))' = k e^(kx).
- e^(−kt) tend vers 0 si k > 0.
- L'exponentielle l'emporte sur toute puissance de x.`,
    cartes: [
      { q: "Valeur approchée de e", r: "2,718." },
      { q: "e^0", r: "1." },
      { q: "Signe de e^x", r: "Strictement positif pour tout x." },
      { q: "e^(a + b)", r: "e^a × e^b." },
      { q: "(e^a)^n", r: "e^(na)." },
      { q: "Dérivée de e^x", r: "e^x." },
      { q: "Dérivée de e^(kx)", r: "k e^(kx)." },
      { q: "Sens de variation de e^(kx) si k < 0", r: "Décroissante." },
      { q: "Limite de e^x en −∞", r: "0." },
      { q: "Limite de e^(−kt) en +∞ (k > 0)", r: "0." },
      { q: "Limite de x^n e^(−x) en +∞", r: "0 (croissances comparées)." },
      { q: "Équation de la tangente à exp en 0", r: "y = x + 1." },
      { q: "Principe de la méthode d'Euler pour y' = y", r: "Répéter y ← y + h × y avec un petit pas h." },
    ],
    quiz: [
      { q: "Quelle est la dérivée de C(t) = 3,1 × 10⁻⁵ e^(−0,00702t) ?",
        choix: ["3,1 × 10⁻⁵ e^(−0,00702t)", "Environ −2,18 × 10⁻⁷ e^(−0,00702t)", "Environ 2,18 × 10⁻⁷ e^(−0,00702t)", "−0,00702 e^(−0,00702t)"],
        bonne: 1, niv: 2,
        expl: "On multiplie par −0,00702 : 3,1 × 10⁻⁵ × 0,00702 ≈ 2,18 × 10⁻⁷." },
      { q: "À quoi est égal e^(2x) × e^(−x) ?",
        choix: ["e^x", "e^(−2x²)", "e^(3x)", "e^(2x) − e^x"],
        bonne: 0, niv: 1,
        expl: "e^(2x − x) = e^x." },
      { q: "Quelle est la limite de v(t) = 2(1 − e^(−5t)) quand t tend vers +∞ ?",
        choix: ["0", "2", "+∞", "−2"],
        bonne: 1, niv: 1,
        expl: "e^(−5t) tend vers 0." },
      { q: "f(x) = x e^(−x). Quelle est l'expression de f'(x) ?",
        choix: ["e^(−x)", "−x e^(−x)", "(1 − x) e^(−x)", "(1 + x) e^(−x)"],
        bonne: 2, niv: 2,
        expl: "(uv)' = 1 × e^(−x) + x × (−e^(−x))." },
      { q: "f(x) = x e^(−x). Pour quelle valeur f atteint-elle son maximum ?",
        choix: ["x = 0", "x = 1", "x = −1", "x = e"],
        bonne: 1, niv: 3,
        expl: "f'(x) = (1 − x) e^(−x) s'annule en 1 en changeant de signe." },
      { q: "Quelle est la limite de x³ e^(−x) en +∞ ?",
        choix: ["+∞", "1", "0", "3"],
        bonne: 2, niv: 3,
        expl: "Croissances comparées : l'exponentielle l'emporte." },
      { q: "Comment varie la fonction t ↦ e^(−0,5t) ?",
        choix: ["Elle est croissante", "Elle est décroissante", "Elle est constante", "Elle change de sens en 0"],
        bonne: 1, niv: 1,
        expl: "Sa dérivée −0,5 e^(−0,5t) est négative." },
      { q: "À quoi est égal (e^3)² ?",
        choix: ["e^6", "e^9", "e^5", "2e^3"],
        bonne: 0, niv: 1,
        expl: "(e^a)^n = e^(na)." },
      { q: "Pourquoi le signe de (1 − x) e^(−x) est-il celui de 1 − x ?",
        choix: ["Parce que e^(−x) est strictement positif", "Parce que e^(−x) est négatif", "Parce que e^(−x) vaut 1", "Parce que 1 − x est positif"],
        bonne: 0, niv: 2,
        expl: "Multiplier par un nombre strictement positif ne change pas le signe." },
      { q: "Quelle est l'équation de la tangente à la courbe de exp au point d'abscisse 0 ?",
        choix: ["y = x", "y = x + 1", "y = e x", "y = 1"],
        bonne: 1, niv: 2,
        expl: "exp(0) = 1 et exp'(0) = 1." },
      { q: "Méthode d'Euler pour y' = y, y(0) = 1, avec h = 0,1 : que vaut y après un pas ?",
        choix: ["1", "0,1", "1,1", "e^0,1"],
        bonne: 2, niv: 3,
        expl: "y ← 1 + 0,1 × 1 = 1,1 ; e^0,1 ≈ 1,105 est la valeur exacte, pas celle d'Euler." },
    ] },
  { chapitre: "stl-pcm-14",
    fiche: `## La fonction logarithme népérien

Le logarithme népérien permet de « faire descendre » une inconnue placée en exposant : il sert à calculer un temps de demi-vie, un temps de demi-réaction, ou l'instant où une concentration atteint une valeur donnée.

### Définition
- Pour **a > 0**, **ln(a)** est l'**unique solution de e^x = a**. Donc **e^(ln a) = a** pour a > 0 et **ln(e^x) = x** pour tout x.
- **ln(1) = 0** ; **ln(e) = 1** ; ln n'est définie que pour **x > 0**.

### Propriétés algébriques (a > 0, b > 0)
- **ln(ab) = ln(a) + ln(b)**.
- **ln(a/b) = ln(a) − ln(b)** ; ln(1/a) = −ln(a).
- **ln(a^n) = n ln(a)** ; **ln(√a) = ½ ln(a)** ; ln(a^x) = x ln(a).
- Exemple (bac 2026 métropole) : ln(9) + ln(4) = ln(36) = ln(6²) = **2 ln(6)**.

### Lien avec le logarithme décimal
- **log(x) = ln(x)/ln(10)**. log(10^n) = n.
- Sert pour le **pH** (pH = −log[H3O⁺]), les **décibels** et la relation de Nernst.

### Variations, limites, courbe
- **ln est strictement croissante** sur ]0 ; +∞[ ; sa dérivée est **(ln x)' = 1/x**.
- Limites : ln(x) tend vers **−∞ en 0** et vers **+∞ en +∞**.
- Signe : ln(x) < 0 si 0 < x < 1 ; ln(x) > 0 si x > 1.
- La courbe est symétrique de celle de exp par rapport à la droite y = x.

### Résoudre des équations et inéquations
- **e^(ax) = b** (b > 0) ⟺ ax = ln(b) ⟺ x = ln(b)/a. Exemple : e^(2x) = 3 ⟺ x = ln(3)/2.
- **ln(x) = b** ⟺ x = e^b. Exemple : ln(x) = 2 ⟺ x = e².
- **e^(ax) > b** : on applique ln (croissante) ; attention si on divise ensuite par a < 0, le sens change.
- Exemple : 0,20 e^(−0,00277t) = 0,10 ⟺ e^(−0,00277t) = 0,5 ⟺ t = ln(0,5)/(−0,00277) = ln(2)/0,00277 ≈ 250.

### Étudier une fonction avec ln
- Exemple : f(x) = 3 + 5 ln(x + 1) sur ]−1 ; +∞[ : f(0) = 3 + 5 ln(1) = 3.
- Exemple : g(x) = x − ln(x) sur ]0 ; +∞[ : g'(x) = 1 − 1/x = (x − 1)/x : décroissante sur ]0 ; 1], croissante ensuite, minimum g(1) = 1.

### Exemple : temps de demi-vie
- N(t) = N0 e^(−λt). On cherche t tel que N(t) = N0/2 : e^(−λt) = 1/2, donc −λt = ln(1/2) = −ln(2), et t½ = ln(2)/λ.
- Avec λ = 0,0063 min⁻¹ : t½ = 0,693/0,0063 ≈ 110 min.

### Exemple : seuil
- Au bout de combien de temps reste-t-il moins de 1 % des noyaux ? e^(−λt) < 0,01 ⟺ −λt < ln(0,01) ⟺ t > ln(100)/λ. Avec λ = 0,0063 min⁻¹ : t > 731 min environ.

### À retenir pour le bac
- e^x = a ⟺ x = ln(a) (a > 0).
- ln(ab) = ln a + ln b ; ln(a^n) = n ln a.
- Vérifier que ce qui est dans ln est strictement positif.
- t½ = ln(2)/k : c'est le ln qui donne la demi-vie.
- Vérifier toujours le résultat en le remplaçant dans l'équation de départ.`,
    cartes: [
      { q: "Définition de ln(a) pour a > 0", r: "L'unique solution de l'équation e^x = a." },
      { q: "ln(1) et ln(e)", r: "0 et 1." },
      { q: "ln(ab)", r: "ln(a) + ln(b)." },
      { q: "ln(a/b)", r: "ln(a) − ln(b)." },
      { q: "ln(a^n)", r: "n ln(a)." },
      { q: "ln(√a)", r: "½ ln(a)." },
      { q: "Lien entre log et ln", r: "log(x) = ln(x)/ln(10)." },
      { q: "Dérivée de ln(x)", r: "1/x." },
      { q: "Limites de ln", r: "−∞ en 0 et +∞ en +∞." },
      { q: "Solution de e^(ax) = b (b > 0, a ≠ 0)", r: "x = ln(b)/a." },
      { q: "Solution de ln(x) = b", r: "x = e^b." },
      { q: "Signe de ln(x) pour 0 < x < 1", r: "Négatif." },
      { q: "Écrire ln(9) + ln(4) avec un seul ln de 6", r: "2 ln(6)." },
    ],
    quiz: [
      { q: "Quelle est la solution exacte de e^(2x) = 3 ?",
        choix: ["x = ln(3)/2", "x = 3/2", "x = ln(6)", "x = 2 ln(3)"],
        bonne: 0, niv: 1,
        expl: "2x = ln(3)." },
      { q: "À quoi est égal ln(9) + ln(4) ?",
        choix: ["ln(13)", "ln(9) × ln(4)", "6 ln(2)", "2 ln(6)"],
        bonne: 3, niv: 2,
        expl: "ln(9 × 4) = ln(36) = ln(6²) = 2 ln(6)." },
      { q: "f(x) = 3 + 5 ln(x + 1). Que vaut f(0) ?",
        choix: ["8", "5", "3", "4"],
        bonne: 2, niv: 1,
        expl: "ln(1) = 0." },
      { q: "Quelle est la solution de ln(x) = 2 ?",
        choix: ["x = 2/e", "x = ln(2)", "x = e², environ 7,39", "x = 100"],
        bonne: 2, niv: 2,
        expl: "ln(x) = 2 ⟺ x = e². 100 serait la solution de log(x) = 2." },
      { q: "Quelle est la solution de 0,20 e^(−0,00277t) = 0,10 ?",
        choix: ["t = ln(2)/0,00277, environ 250", "t = 0,5/0,00277, environ 181", "t = ln(0,5) × 0,00277", "t = e^0,5 / 0,00277"],
        bonne: 0, niv: 3,
        expl: "e^(−0,00277t) = 0,5 donne t = ln(0,5)/(−0,00277) = ln(2)/0,00277." },
      { q: "Pour quelles valeurs de x l'expression ln(x + 1) est-elle définie ?",
        choix: ["x > −1", "x > 0", "x ≥ −1", "x > 1"],
        bonne: 0, niv: 2,
        expl: "Il faut x + 1 > 0." },
      { q: "g(x) = x − ln(x) sur ]0 ; +∞[. Quelle est l'expression de g'(x) ?",
        choix: ["1 − x", "1 + 1/x", "(x − 1)/x", "(1 − x)/x"],
        bonne: 2, niv: 2,
        expl: "g'(x) = 1 − 1/x = (x − 1)/x." },
      { q: "g(x) = x − ln(x). Quel est le minimum de g ?",
        choix: ["1", "0", "e", "−1"],
        bonne: 0, niv: 3,
        expl: "g' s'annule en 1 en changeant de signe, et g(1) = 1 − 0." },
      { q: "Quel est le signe de ln(0,5) ?",
        choix: ["Positif", "Nul", "ln(0,5) n'existe pas", "Négatif"],
        bonne: 3, niv: 1,
        expl: "0 < 0,5 < 1." },
      { q: "À quoi est égal ln(e^4) ?",
        choix: ["e^4", "4", "4e", "1"],
        bonne: 1, niv: 1,
        expl: "ln(e^x) = x." },
      { q: "Résoudre e^(−0,5x) > 0,1 : quel est l'ensemble des solutions ?",
        choix: ["x > 2 ln(10), environ 4,6", "x > −0,2", "x < 0,2", "x < 2 ln(10), environ 4,6"],
        bonne: 3, niv: 3,
        expl: "−0,5x > ln(0,1), puis on divise par −0,5 < 0 : le sens change, x < −2 ln(0,1) = 2 ln(10)." },
    ] },
  { chapitre: "stl-pcm-15",
    fiche: `## Équations différentielles

Une équation différentielle relie une fonction et sa dérivée. En STL, elle modélise la décroissance radioactive (dN/dt = −λN), une cinétique d'ordre 1 (d[A]/dt = −k[A]) ou une chute avec frottement (dv/dt = −(k/m)v + g).

### Vocabulaire
- Une **solution** d'une équation différentielle sur un intervalle est une fonction dérivable qui vérifie l'égalité pour tout x de l'intervalle.
- On note la dérivée **y'** ou **dy/dx** (notation de physique, qui montre la variable).
- **Vérifier** qu'une fonction est solution : calculer sa dérivée, remplacer dans l'équation et constater l'égalité.
- Exemple : y = 5 e^(3x) est solution de y' = 3y, car y' = 15 e^(3x) = 3 × 5 e^(3x).

### L'équation y' = ay
- Ses solutions sont les fonctions **x ↦ C e^(ax)**, C réel.
- Avec une **condition initiale** y(0) = y0 : **y(x) = y0 e^(ax)** (la solution est **unique**).
- Exemple (bac 2026 Polynésie) : y' = −2,77 × 10⁻³ y et y(0) = 0,20 donnent **y(t) = 0,20 e^(−2,77 × 10⁻³ t)**.
- Exemple : dN/dt = −λN donne N(t) = N0 e^(−λt).

### L'équation y' = ay + b (a ≠ 0)
- **Solution constante** : y = **−b/a** (on cherche y' = 0).
- **Toutes les solutions** : **y(x) = C e^(ax) − b/a**, C réel.
- La condition initiale donne C.
- Si a < 0, toutes les solutions tendent vers **−b/a** en +∞ : c'est le **régime permanent**.

### Exemple complet : chute avec frottement visqueux
- dv/dt = −(k/m) v + g, avec m = 0,010 kg, k = 0,050 kg·s⁻¹, g = 9,81 : dv/dt = −5v + 9,81.
- Solution constante : v = 9,81/5 ≈ 1,96 m·s⁻¹ (vitesse limite).
- Solutions : v(t) = C e^(−5t) + 1,96. Avec v(0) = 0 : C = −1,96, donc **v(t) = 1,96(1 − e^(−5t))**.
- Temps caractéristique τ = 1/5 = 0,20 s : c'est l'abscisse où la tangente en 0 coupe l'asymptote v = 1,96 ; à t = τ, v ≈ 63 % de 1,96.

### Primitive avec condition initiale
- Cas particulier y' = f(x) : y est une primitive de f. Exemple (bac 2026 métropole) : a(t) = 2 et v(0) = 5 donnent v(t) = 2t + 5.

### Méthode d'Euler
- Pour approcher la solution : y(x + h) ≈ y(x) + h × y'(x), en répétant avec un petit pas h.

### Exemple : vérifier une solution de y' = ay + b
- Montrer que v(t) = 1,96(1 − e^(−5t)) vérifie v' = −5v + 9,81 : v'(t) = 9,8 e^(−5t) et −5v + 9,81 = −9,8 + 9,8 e^(−5t) + 9,81 ≈ 9,8 e^(−5t). Les deux membres sont égaux (aux arrondis près).

### À retenir pour le bac
- y' = ay : C e^(ax).
- y' = ay + b : C e^(ax) − b/a ; limite −b/a si a < 0.
- La condition initiale fixe C, et la solution est alors unique.
- Toujours savoir vérifier une solution en dérivant.`,
    cartes: [
      { q: "Solution d'une équation différentielle", r: "Une fonction dérivable qui vérifie l'équation pour tout x de l'intervalle." },
      { q: "Solutions de y' = ay", r: "x ↦ C e^(ax), C réel." },
      { q: "Solution de y' = ay avec y(0) = y0", r: "y(x) = y0 e^(ax)." },
      { q: "Solution constante de y' = ay + b", r: "y = −b/a." },
      { q: "Solutions de y' = ay + b", r: "x ↦ C e^(ax) − b/a, C réel." },
      { q: "Limite des solutions de y' = ay + b si a < 0", r: "−b/a (régime permanent)." },
      { q: "Solution de dN/dt = −λN avec N(0) = N0", r: "N(t) = N0 e^(−λt)." },
      { q: "Solution de y' = −2,77 × 10⁻³ y avec y(0) = 0,20", r: "y(t) = 0,20 e^(−2,77 × 10⁻³ t)." },
      { q: "Vitesse dans dv/dt = −5v + 9,81 avec v(0) = 0", r: "v(t) = 1,96(1 − e^(−5t))." },
      { q: "Lecture graphique du temps caractéristique", r: "Abscisse où la tangente en 0 coupe l'asymptote horizontale." },
      { q: "Solution de v' = 2 avec v(0) = 5", r: "v(t) = 2t + 5." },
      { q: "Principe de la méthode d'Euler", r: "y(x + h) ≈ y(x) + h × y'(x), répété avec un petit pas h." },
      { q: "Comment vérifier qu'une fonction est solution ?", r: "La dériver, remplacer dans l'équation et constater l'égalité." },
    ],
    quiz: [
      { q: "Quelles sont les solutions de y' = −3y ?",
        choix: ["x ↦ C e^(3x)", "x ↦ −3x + C", "x ↦ e^(−3x) + C", "x ↦ C e^(−3x)"],
        bonne: 3, niv: 1,
        expl: "Les solutions de y' = ay sont C e^(ax)." },
      { q: "y' = −2,77 × 10⁻³ y et y(0) = 0,20. Quelle est la solution ?",
        choix: ["y(t) = e^(−2,77 × 10⁻³ t) + 0,20", "y(t) = 0,20 e^(−2,77 × 10⁻³ t)", "y(t) = 0,20 e^(2,77 × 10⁻³ t)", "y(t) = −2,77 × 10⁻³ e^(0,20t)"],
        bonne: 1, niv: 2,
        expl: "C = y(0) = 0,20." },
      { q: "Quelle est la solution constante de y' = −5y + 9,81 ?",
        choix: ["1,962", "−1,962", "9,81", "49,05"],
        bonne: 0, niv: 2,
        expl: "y' = 0 donne y = 9,81/5." },
      { q: "Quelles sont les solutions de y' = −5y + 10 ?",
        choix: ["x ↦ C e^(−5x) − 2", "x ↦ C e^(5x) + 2", "x ↦ C e^(−5x) + 10", "x ↦ C e^(−5x) + 2"],
        bonne: 3, niv: 2,
        expl: "Solution constante −b/a = −10/(−5) = 2." },
      { q: "v' = −5v + 9,81 et v(0) = 0. Quelle est l'expression de v ?",
        choix: ["1,962 e^(−5t)", "1,962(1 − e^(−5t))", "9,81(1 − e^(−5t))", "1,962(1 + e^(−5t))"],
        bonne: 1, niv: 3,
        expl: "v = C e^(−5t) + 1,962 avec v(0) = 0, donc C = −1,962." },
      { q: "La fonction y = 5 e^(3x) est-elle solution de y' = 3y ?",
        choix: ["Non, car y' = 5 e^(3x)", "Non, car il manque une constante", "Oui, car y(0) = 5", "Oui, car y' = 15 e^(3x) = 3y"],
        bonne: 3, niv: 2,
        expl: "On dérive et on compare à 3y." },
      { q: "Vers quelle valeur tendent les solutions de y' = −0,5y + 4 ?",
        choix: ["4", "−8", "8", "0"],
        bonne: 2, niv: 2,
        expl: "a = −0,5 < 0 : limite −b/a = 4/0,5 = 8." },
      { q: "a(t) = 2 m·s⁻² et v(0) = 5 m·s⁻¹. Que vaut v(10) ?",
        choix: ["25 m·s⁻¹", "20 m·s⁻¹", "7 m·s⁻¹", "15 m·s⁻¹"],
        bonne: 0, niv: 2,
        expl: "v(t) = 2t + 5, donc v(10) = 25." },
      { q: "Pourquoi précise-t-on une condition initiale ?",
        choix: ["Pour que l'équation ait des solutions", "Pour calculer la dérivée", "Pour obtenir une solution unique", "Pour trouver la limite"],
        bonne: 2, niv: 1,
        expl: "Sans condition, il y a une infinité de solutions (une par valeur de C)." },
      { q: "Méthode d'Euler pour y' = −2y, y(0) = 1, pas h = 0,1 : que vaut y(0,1) approché ?",
        choix: ["1,2", "0,9", "0,8", "0,82"],
        bonne: 2, niv: 3,
        expl: "y(0,1) ≈ 1 + 0,1 × (−2 × 1) = 0,8." },
      { q: "Dans dN/dt = −λN, que vaut N(t) avec N(0) = N0 ?",
        choix: ["N0 e^(−λt)", "N0 − λt", "N0 e^(λt)", "−λ N0 t"],
        bonne: 0, niv: 1,
        expl: "C'est une équation y' = ay avec a = −λ." },
    ] },
  { chapitre: "stl-pcm-16",
    fiche: `## Composition de fonctions : dérivées et primitives

Beaucoup de fonctions utilisées en sciences sont des « fonctions de fonctions » : e^(−λt), ln(x + 1), (2x + 1)³, cos(ωt). Ce chapitre donne les règles pour les dériver et pour trouver leurs primitives.

### Composée de deux fonctions
- La **composée** v ∘ u est la fonction **x ↦ v(u(x))** : on applique d'abord u, puis v.
- Exemple : h(x) = e^(−2x) est v ∘ u avec u(x) = −2x et v(X) = e^X.
- Exemple : h(x) = ln(x² + 1) est v ∘ u avec u(x) = x² + 1 et v(X) = ln(X).

### Dérivée d'une composée
- **(v ∘ u)' = u' × (v' ∘ u)** : on dérive la fonction « extérieure » en gardant l'intérieur, puis on multiplie par la dérivée de l'intérieur.
- Formules usuelles :
- **(u^n)' = n u' u^(n−1)** (n entier relatif). Exemple : ((2x + 1)³)' = 3 × 2 × (2x + 1)² = 6(2x + 1)².
- **(e^u)' = u' e^u**. Exemple : (e^(x²))' = 2x e^(x²).
- **(ln u)' = u'/u** (u > 0). Exemple : (ln(x² + 1))' = 2x/(x² + 1).
- **(cos u)' = −u' sin u** et **(sin u)' = u' cos u**. Exemple : (sin(100t))' = 100 cos(100t).
- **(f(ax + b))' = a f'(ax + b)**.

### Primitives des composées
- Primitive de **f(ax + b)** : **(1/a) F(ax + b)**, si F est une primitive de f. Exemple : une primitive de e^(3x + 1) est (1/3) e^(3x + 1).
- Primitive de **u' u^n** (n ≠ −1) : **u^(n+1)/(n + 1)**. Exemple : primitive de 2x(x² + 1)³ : (x² + 1)⁴/4.
- Primitive de **u'/u** (u > 0) : **ln(u)**. Exemple : primitive de 2x/(x² + 1) : ln(x² + 1).
- Primitive de **u' e^u** : **e^u**. Exemple : primitive de 2x e^(x²) : e^(x²).
- Primitive de **u' cos u** : **sin u** ; de **u' sin u** : **−cos u**.

### Méthode pour trouver une primitive
- Repérer la forme u' × (quelque chose de u).
- Si le facteur u' n'est pas exactement là, **ajuster par une constante**. Exemple : primitive de x e^(x²) = ½ × 2x e^(x²) : ½ e^(x²).
- **Vérifier en dérivant** le résultat.

### Dérivée d'un quotient (rappel)
- **(u/v)' = (u'v − uv')/v²**. Elle se retrouve en écrivant u/v = u × v^(−1).

### En physique-chimie
- Une tension u(t) = Um cos(ωt + φ) a pour dérivée −Um ω sin(ωt + φ).
- La vitesse de décroissance d'une concentration C0 e^(−kt) est −k C0 e^(−kt).

### Exemple : primitive d'une fonction trigonométrique
- Une primitive de cos(2t) est ½ sin(2t), car (½ sin(2t))' = ½ × 2 cos(2t).

### À retenir pour le bac
- (v ∘ u)' = u' × v'(u) : ne jamais oublier le facteur u'.
- (e^u)' = u' e^u ; (ln u)' = u'/u ; (u^n)' = n u' u^(n−1).
- Primitives : u' e^u → e^u ; u'/u → ln u ; f(ax + b) → (1/a) F(ax + b).
- Toujours vérifier une primitive en dérivant.`,
    cartes: [
      { q: "Définition de la composée v ∘ u", r: "La fonction x ↦ v(u(x))." },
      { q: "Dérivée d'une composée", r: "(v ∘ u)' = u' × (v' ∘ u)." },
      { q: "Dérivée de u^n", r: "n u' u^(n−1)." },
      { q: "Dérivée de e^u", r: "u' e^u." },
      { q: "Dérivée de ln(u)", r: "u'/u." },
      { q: "Dérivée de cos(u)", r: "−u' sin(u)." },
      { q: "Dérivée de sin(u)", r: "u' cos(u)." },
      { q: "Primitive de f(ax + b)", r: "(1/a) F(ax + b)." },
      { q: "Primitive de u' u^n (n ≠ −1)", r: "u^(n+1)/(n + 1)." },
      { q: "Primitive de u'/u (u > 0)", r: "ln(u)." },
      { q: "Primitive de u' e^u", r: "e^u." },
      { q: "Primitive de x e^(x²)", r: "½ e^(x²)." },
      { q: "Dérivée d'un quotient u/v", r: "(u'v − uv')/v²." },
    ],
    quiz: [
      { q: "Quelle est la dérivée de (2x + 1)³ ?",
        choix: ["3(2x + 1)²", "6(2x + 1)³", "2(2x + 1)²", "6(2x + 1)²"],
        bonne: 3, niv: 2,
        expl: "n u' u^(n−1) = 3 × 2 × (2x + 1)²." },
      { q: "Quelle est la dérivée de e^(x²) ?",
        choix: ["2x e^(x²)", "e^(x²)", "x² e^(x² − 1)", "2 e^(x²)"],
        bonne: 0, niv: 2,
        expl: "(e^u)' = u' e^u avec u' = 2x." },
      { q: "Quelle est la dérivée de ln(x² + 1) ?",
        choix: ["1/(x² + 1)", "2x/(x² + 1)", "2x ln(x² + 1)", "1/(2x)"],
        bonne: 1, niv: 2,
        expl: "(ln u)' = u'/u." },
      { q: "Quelle est la dérivée de sin(100t) ?",
        choix: ["100 cos(100t)", "cos(100t)", "−100 cos(100t)", "100 sin(100t)"],
        bonne: 0, niv: 2,
        expl: "(sin u)' = u' cos u avec u' = 100." },
      { q: "Quelle est une primitive de e^(3x + 1) ?",
        choix: ["3 e^(3x + 1)", "e^(3x + 1)", "(3x + 1) e^(3x + 1)", "(1/3) e^(3x + 1)"],
        bonne: 3, niv: 2,
        expl: "Primitive de f(ax + b) : (1/a) F(ax + b)." },
      { q: "Quelle est une primitive de 2x/(x² + 1) ?",
        choix: ["1/(x² + 1)", "2 ln(x)", "x² ln(x² + 1)", "ln(x² + 1)"],
        bonne: 3, niv: 2,
        expl: "C'est la forme u'/u." },
      { q: "Quelle est une primitive de x e^(x²) ?",
        choix: ["e^(x²)", "2 e^(x²)", "½ e^(x²)", "x² e^(x²)"],
        bonne: 2, niv: 3,
        expl: "x e^(x²) = ½ × 2x e^(x²), de la forme ½ u' e^u." },
      { q: "Parmi ces fonctions, laquelle est une primitive de 2x(x² + 1)³ sur ℝ ?",
        choix: ["(x² + 1)⁴/4", "(x² + 1)⁴", "3(x² + 1)²", "2(x² + 1)⁴"],
        bonne: 0, niv: 3,
        expl: "Forme u' u³ : u⁴/4." },
      { q: "h(x) = e^(−2x) s'écrit v ∘ u. Que sont u et v ?",
        choix: ["u(x) = −2x et v(X) = e^X", "u(x) = e^x et v(X) = −2X", "u(x) = −2 et v(X) = e^X", "u(x) = e^(−x) et v(X) = 2X"],
        bonne: 0, niv: 1,
        expl: "On applique d'abord u (multiplier par −2), puis l'exponentielle." },
      { q: "Quelle est la dérivée de cos(ωt + φ) par rapport à t ?",
        choix: ["ω sin(ωt + φ)", "−ω sin(ωt + φ)", "−sin(ωt + φ)", "ω cos(ωt + φ)"],
        bonne: 1, niv: 3,
        expl: "(cos u)' = −u' sin u avec u' = ω." },
      { q: "Comment vérifier qu'une fonction F est une primitive de f ?",
        choix: ["En intégrant f deux fois", "En calculant F(0)", "En traçant la courbe de f", "En dérivant F pour retrouver f"],
        bonne: 3, niv: 1,
        expl: "F est une primitive de f si F' = f." },
    ] },
  ],
  methode: [
    {
      "id": "stl-pcm-m1",
      "mat": "stl-pcm",
      "titre": "Ordre d'une réaction et temps de demi-réaction",
      "formules": [
        "À l'aide des figures, donner l'ordre de la réaction en justifiant",
        "Déterminer graphiquement le temps de demi-réaction t½",
        "Proposer une méthode pour déterminer la constante de vitesse k"
      ],
      "vu": [
        "Bac 2026 métropole, exercice 1 (verres photochromes)",
        "Bac 2026 Polynésie, exercice 1 (décomposition de l'eau oxygénée)"
      ],
      "pts": "1 à 2 points",
      "attendu": "Reconnaître l'ordre à partir de la forme des courbes (ln C droite : ordre 1), justifier en une phrase, lire t½ là où la concentration vaut la moitié de la valeur initiale en laissant la construction visible, et relier k à la pente.",
      "etapes": [
        "Regarder la courbe C(t) : droite (ordre 0) ou décroissance de plus en plus lente",
        "Regarder la courbe ln(C) = f(t) : si c'est une droite, ordre 1",
        "Pour k : mesurer la pente de la droite ln(C) = f(t), k est son opposé",
        "Pour t½ : placer C0/2 sur l'axe, rejoindre la courbe, lire l'abscisse",
        "Vérifier avec t½ = ln(2)/k si k est connu"
      ],
      "mots": [
        "ordre 1",
        "constante de vitesse",
        "temps de demi-réaction",
        "pente",
        "modèle"
      ],
      "pieges": [
        "Dire « ordre 1 » sans citer la droite ln(C) = f(t)",
        "Lire t½ à C0/2 sur la mauvaise courbe",
        "Oublier les traits de construction sur le document réponse",
        "Donner k négatif"
      ],
      "cas": "Un colorant est décoloré en solution. On mesure sa concentration C : 4,0 × 10⁻⁵ mol·L⁻¹ à t = 0, 2,0 × 10⁻⁵ à t = 139 s, 1,0 × 10⁻⁵ à t = 277 s. La courbe ln(C) = f(t) est une droite de pente −5,0 × 10⁻³ s⁻¹.",
      "question": "Donner l'ordre de la réaction, la constante de vitesse et le temps de demi-réaction.",
      "modele": "La courbe ln(C) = f(t) est une droite : la réaction est d'ordre 1 par rapport au colorant. La pente vaut −k, donc k = 5,0 × 10⁻³ s⁻¹. La concentration est divisée par 2 en 139 s, puis encore par 2 en 138 s : t½ ≈ 139 s, ce que confirme t½ = ln(2)/k = 0,693/0,0050 ≈ 139 s.",
      "grille": [
        "L'ordre 1 est justifié par la droite ln(C) = f(t)",
        "k est l'opposé de la pente, positif, avec son unité",
        "t½ est lu ou calculé correctement",
        "Le lien t½ = ln(2)/k est cité ou vérifié"
      ]
    },
    {
      "id": "stl-pcm-m2",
      "mat": "stl-pcm",
      "titre": "Résoudre une équation avec exponentielle et logarithme",
      "formules": [
        "Résoudre sur [0 ; …] l'équation C0 e^(−kt) = …. Arrondir à l'unité",
        "Résoudre dans ℝ l'équation e^(2x) = 3 : valeur exacte",
        "Justifier l'égalité ln(9) + ln(4) = 2 ln(6)"
      ],
      "vu": [
        "Bac 2026 métropole, exercice 1 question 9 et exercice 3 questions 2 et 3",
        "Bac 2026 Polynésie, exercice 1 question 5"
      ],
      "pts": "0,5 à 1,5 point",
      "attendu": "Isoler l'exponentielle, appliquer ln, isoler t, donner la valeur exacte puis la valeur approchée demandée. Pour une égalité de logarithmes, utiliser les propriétés algébriques étape par étape.",
      "etapes": [
        "Diviser pour isoler l'exponentielle : e^(−kt) = valeur",
        "Appliquer ln aux deux membres : −kt = ln(valeur)",
        "Diviser par −k (attention au sens dans une inéquation)",
        "Écrire la valeur exacte, puis l'arrondi demandé",
        "Interpréter le résultat dans le contexte (une durée, en s, en jours…)"
      ],
      "mots": [
        "logarithme népérien",
        "valeur exacte",
        "valeur approchée",
        "ln(ab) = ln a + ln b"
      ],
      "pieges": [
        "Appliquer ln avant d'avoir isolé l'exponentielle",
        "Oublier le signe moins de −k",
        "Donner seulement l'arrondi",
        "Écrire ln(a + b) = ln a + ln b"
      ],
      "cas": "Une concentration suit C(t) = 4,0 × 10⁻⁵ e^(−0,0050t), t en secondes.",
      "question": "Résoudre C(t) = 1,0 × 10⁻⁵ et interpréter.",
      "modele": "4,0 × 10⁻⁵ e^(−0,0050t) = 1,0 × 10⁻⁵ ⟺ e^(−0,0050t) = 0,25 ⟺ −0,0050t = ln(0,25) ⟺ t = ln(0,25)/(−0,0050) = ln(4)/0,0050 ≈ 277 s. Au bout d'environ 277 s, la concentration a été divisée par 4.",
      "grille": [
        "L'exponentielle est isolée avant d'appliquer ln",
        "La valeur exacte ln(4)/0,0050 est donnée",
        "L'arrondi 277 s est donné avec l'unité",
        "Le résultat est interprété"
      ]
    },
    {
      "id": "stl-pcm-m3",
      "mat": "stl-pcm",
      "titre": "Constante d'acidité, pKa et concentrations à l'équilibre",
      "formules": [
        "Donner l'expression de la constante d'acidité Ka du couple …",
        "Montrer que la concentration C peut s'écrire C = [H3O⁺]²/Ka",
        "Déterminer l'espèce prédominante à pH = …",
        "Déterminer le coefficient de dissociation de l'acide"
      ],
      "vu": [
        "Bac 2026 métropole, exercice 2 (capture du dioxyde de carbone)"
      ],
      "pts": "2 à 3 points",
      "attendu": "Écrire Ka avec les concentrations à l'équilibre (produits en haut, acide en bas, sans l'eau), utiliser une égalité donnée pour isoler l'inconnue, faire l'application numérique avec 10^(−pH) et 10^(−pKa), et comparer pH et pKa pour la prédominance.",
      "etapes": [
        "Écrire l'équation de la réaction de l'acide avec l'eau",
        "Écrire Ka = [A⁻][H3O⁺]/[AH]",
        "Remplacer avec l'égalité donnée (par exemple [A⁻] = [H3O⁺])",
        "Isoler la grandeur demandée",
        "Calculer avec [H3O⁺] = 10^(−pH) et Ka = 10^(−pKa), puis donner l'unité"
      ],
      "mots": [
        "constante d'acidité",
        "pKa",
        "prédominance",
        "coefficient de dissociation",
        "équilibre"
      ],
      "pieges": [
        "Mettre l'eau dans l'expression de Ka",
        "Inverser numérateur et dénominateur",
        "Confondre pH et [H3O⁺]",
        "Conclure sur la prédominance sans comparer pH et pKa"
      ],
      "cas": "Une solution d'acide lactique (couple AH/A⁻, pKa = 3,9) a une concentration apportée C = 0,10 mol·L⁻¹ et un pH de 2,45. On admet que [A⁻] = [H3O⁺].",
      "question": "Exprimer Ka, puis calculer le coefficient de dissociation τ = [A⁻]/C.",
      "modele": "AH + H2O ⇄ A⁻ + H3O⁺ et Ka = [A⁻][H3O⁺]/[AH]. [A⁻] = [H3O⁺] = 10^(−2,45) ≈ 3,5 × 10⁻³ mol·L⁻¹. τ = 3,5 × 10⁻³ / 0,10 ≈ 0,035 : seulement 3,5 % de l'acide a réagi avec l'eau, c'est un acide faible.",
      "grille": [
        "L'équation de la réaction avec l'eau est écrite",
        "Ka est écrit sans l'eau, dans le bon sens",
        "[H3O⁺] est calculé avec 10^(−pH)",
        "τ est calculé et interprété"
      ]
    },
    {
      "id": "stl-pcm-m4",
      "mat": "stl-pcm",
      "titre": "Bilan énergétique d'un panneau photovoltaïque",
      "formules": [
        "Compléter la chaîne énergétique de la cellule photovoltaïque",
        "Exprimer le flux énergétique reçu par une cellule et déterminer sa valeur",
        "En déduire le rendement et commenter",
        "Estimer la durée de fonctionnement permettant de rembourser le coût d'achat"
      ],
      "vu": [
        "Bac 2026 métropole, exercice 4 (Vendée Globe)",
        "Bac 2026 Polynésie, exercice 2 (kit d'autoconsommation)"
      ],
      "pts": "3 à 5 points",
      "attendu": "Écrire la chaîne énergétique (lumineuse → électrique + thermique), calculer la surface en m², le flux Φ = E × S, le rendement P élec/Φ, puis comparer à des valeurs typiques et proposer des facteurs limitants.",
      "etapes": [
        "Convertir les dimensions en mètres et calculer S",
        "Calculer Φ = E × S",
        "Calculer η = P électrique / Φ",
        "Comparer aux rendements typiques (10 à 20 %)",
        "Si demandé : énergie produite × prix du kWh pour estimer la rentabilité"
      ],
      "mots": [
        "flux énergétique",
        "éclairement",
        "rendement",
        "chaîne énergétique",
        "transfert thermique"
      ],
      "pieges": [
        "Laisser les dimensions en mm",
        "Confondre éclairement (W·m⁻²) et flux (W)",
        "Inverser le rapport du rendement",
        "Oublier l'énergie perdue sous forme thermique dans la chaîne"
      ],
      "cas": "Une station météo est alimentée par un panneau de 0,25 m². Sous un éclairement de 800 W·m⁻², il fournit 36 W électriques.",
      "question": "Calculer le flux reçu, puis le rendement, et le commenter.",
      "modele": "Φ = E × S = 800 × 0,25 = 200 W. η = 36/200 = 0,18, soit 18 %. C'est une valeur typique d'un panneau au silicium : 82 % de l'énergie reçue est perdue, surtout sous forme thermique.",
      "grille": [
        "Φ = E × S est écrit et calculé avec l'unité W",
        "Le rendement est calculé dans le bon sens",
        "La valeur est comparée aux valeurs habituelles",
        "La perte thermique est citée"
      ]
    },
    {
      "id": "stl-pcm-m5",
      "mat": "stl-pcm",
      "titre": "Équation différentielle ou primitive avec condition initiale",
      "formules": [
        "En considérant la valeur de y(0), montrer que pour tout t ≥ 0, y(t) = …",
        "Déterminer la limite de la fonction en +∞ et l'interpréter",
        "v est la primitive de a qui vérifie v(0) = … : déterminer v"
      ],
      "vu": [
        "Bac 2026 Polynésie, exercice 1 questions 3 et 4",
        "Bac 2026 métropole, exercice 3 question 4"
      ],
      "pts": "1 à 2 points",
      "attendu": "Donner la forme générale des solutions (C e^(at), ou C e^(at) − b/a, ou une primitive + constante), utiliser la condition initiale pour trouver la constante, conclure, puis interpréter la limite comme un régime permanent.",
      "etapes": [
        "Reconnaître la forme : y' = ay, y' = ay + b ou v' = a(t)",
        "Écrire toutes les solutions avec une constante C",
        "Remplacer t par 0 pour trouver C",
        "Écrire la solution unique",
        "Calculer la limite et l'interpréter"
      ],
      "mots": [
        "condition initiale",
        "solution unique",
        "régime permanent",
        "primitive"
      ],
      "pieges": [
        "Oublier la constante d'intégration",
        "Prendre C = y(0) pour l'équation y' = ay + b",
        "Ne pas interpréter la limite"
      ],
      "cas": "La concentration d'un produit P vérifie y' = −0,2y + 4 (y en µmol·L⁻¹, t en minutes) et y(0) = 0.",
      "question": "Déterminer y(t), puis sa limite en +∞.",
      "modele": "Solution constante : −4/(−0,2) = 20. Solutions : y(t) = C e^(−0,2t) + 20. y(0) = C + 20 = 0, donc C = −20 et y(t) = 20(1 − e^(−0,2t)). Comme e^(−0,2t) tend vers 0, y tend vers 20 µmol·L⁻¹ : c'est la concentration du régime permanent.",
      "grille": [
        "La forme générale est donnée avec une constante",
        "La condition initiale fixe C = −20",
        "La solution est écrite",
        "La limite 20 est justifiée et interprétée"
      ]
    }
  ],
  sujets: [
    { id: "stl-pcm-s1", matiere: 'stl-pcm', titre: "Sujet d'entraînement 1", duree: 180,
      enonce: `Sujet d'entraînement inventé, sur le modèle de l'épreuve de spécialité physique-chimie et mathématiques de STL. Les entreprises, les produits et les chiffres sont fictifs. Durée : 3 heures. Calculatrice en mode examen autorisée.
Physique-chimie : 14 points. Mathématiques : 6 points.

EXERCICE 1 (5 points) — Physique-chimie et mathématiques
Décoloration d'un colorant alimentaire

Un laboratoire fictif étudie la décoloration d'un colorant bleu par l'eau de Javel. On suit sa concentration C (en mol·L⁻¹) au cours du temps t (en s) par spectrophotométrie. À t = 0, C0 = 4,0 × 10⁻⁵ mol·L⁻¹.
Mesures : C = 2,0 × 10⁻⁵ mol·L⁻¹ à t = 139 s ; C = 1,0 × 10⁻⁵ mol·L⁻¹ à t = 277 s. La représentation de ln(C) en fonction de t est une droite de pente −5,0 × 10⁻³ s⁻¹.
1. Définir le temps de demi-réaction et donner sa valeur d'après les mesures.
2. Indiquer l'ordre de la réaction par rapport au colorant, en justifiant.
3. En déduire la constante de vitesse k.
4. Citer un facteur qui permettrait d'accélérer la décoloration.
On modélise la concentration par C(t) = 4,0 × 10⁻⁵ e^(−0,0050t) sur [0 ; 1 000].
5. [Mathématiques] Calculer C'(t). Que représente −C'(t) ?
6. [Mathématiques] Résoudre l'équation C(t) = 1,0 × 10⁻⁵. Donner la valeur exacte puis l'arrondi à l'unité.
7. [Mathématiques] Déterminer la limite de C(t) quand t tend vers +∞ et l'interpréter.

EXERCICE 2 (5 points) — Physique-chimie
L'acide lactique du yaourt

L'acide lactique CH3−CH(OH)−COOH se forme lors de la fabrication des yaourts. On note AH/A⁻ le couple acide lactique / ion lactate, de pKa = 3,9 à 25 °C.
Partie A — Structure
1. Recopier la formule et repérer l'atome de carbone asymétrique. Justifier.
2. La molécule est-elle chirale ? Comment appelle-t-on les deux stéréoisomères de l'acide lactique ?
3. Représenter l'un des deux en perspective de Cram.
Partie B — Propriétés acides
4. Écrire l'équation de la réaction de l'acide lactique avec l'eau, puis l'expression de la constante d'acidité Ka.
5. Un yaourt a un pH de 4,5. Quelle forme du couple prédomine ? Justifier.
6. Une solution d'acide lactique de concentration C = 0,10 mol·L⁻¹ a un pH de 2,45. On admet que [A⁻] = [H3O⁺]. Calculer le coefficient de dissociation τ = [A⁻]/C, et conclure sur la force de l'acide.
7. Comment évolue τ si l'on dilue cette solution ?

EXERCICE 3 (4 points) — Mathématiques
Les quatre questions sont indépendantes.
Question 1. Justifier, en détaillant, que ln(8) + ln(2) = 4 ln(2).
Question 2. Résoudre dans ℝ l'équation e^(3x) = 5. Donner la valeur exacte.
Question 3. Soit f(x) = 3x² + 1 sur [0 ; 2]. Calculer ∫ de 0 à 2 de f(x) dx, puis la valeur moyenne de f sur [0 ; 2].
Question 4. On considère l'équation différentielle (E) : y' = −0,2y + 4.
a) Déterminer la solution constante de (E).
b) Déterminer la solution de (E) vérifiant y(0) = 0, puis sa limite en +∞.

EXERCICE 4 (6 points) — Physique-chimie
La station météo autonome

Une station météo fictive, installée en montagne, est alimentée par un panneau photovoltaïque de 0,25 m² et un accumulateur de 12 V et de capacité 7,0 Ah.
Partie A — Le panneau
1. Représenter la chaîne énergétique du panneau photovoltaïque.
2. Sous un éclairement énergétique de 800 W·m⁻², calculer le flux énergétique reçu par le panneau.
3. Le panneau fournit alors 36 W électriques. Calculer son rendement et le commenter.
4. Citer deux facteurs qui peuvent faire baisser la puissance fournie.
Partie B — L'accumulateur
5. Calculer l'énergie stockée dans l'accumulateur chargé, en Wh puis en J.
6. La nuit, la station consomme une puissance constante de 2,5 W. Calculer la durée de fonctionnement sur l'accumulateur seul.
7. Le câble qui relie le panneau à l'accumulateur a une résistance de 0,50 Ω et transporte 3,0 A. Calculer la puissance perdue par effet Joule. Sous quelle forme cette énergie est-elle perdue ?
Partie C — Incertitude
8. Le thermomètre de la station affiche 4,3 °C. Sa notice indique une précision de ± 0,2 °C. Calculer l'incertitude-type u = précision/√3 et écrire le résultat.
9. Un thermomètre de référence placé au même endroit indique 4,0 °C. Calculer z = ‖mesure − référence‖ / u et conclure.`,
      corrige: `EXERCICE 1
1. t½ est la durée au bout de laquelle la concentration du réactif a été divisée par 2. Ici C passe de 4,0 × 10⁻⁵ à 2,0 × 10⁻⁵ mol·L⁻¹ en 139 s : t½ ≈ 139 s.
2. La courbe ln(C) = f(t) est une droite : la réaction est d'ordre 1 par rapport au colorant (on le confirme : C est encore divisée par 2 entre 139 s et 277 s, t½ est constant).
3. La pente vaut −k, donc k = 5,0 × 10⁻³ s⁻¹ (on vérifie : ln(2)/k ≈ 139 s).
4. Augmenter la température ou la concentration en eau de Javel.
5. C'(t) = 4,0 × 10⁻⁵ × (−0,0050) e^(−0,0050t) = −2,0 × 10⁻⁷ e^(−0,0050t). −C'(t) est la vitesse de disparition du colorant, en mol·L⁻¹·s⁻¹.
6. e^(−0,0050t) = 0,25 ⟺ −0,0050t = ln(0,25) ⟺ t = ln(4)/0,0050 ≈ 277 s. On retrouve la valeur mesurée.
7. −0,0050 < 0, donc e^(−0,0050t) tend vers 0 et C(t) tend vers 0 : le colorant finit par disparaître totalement (la solution se décolore).

EXERCICE 2
1. Le carbone central, lié à CH3, OH, COOH et H : quatre groupes différents, c'est un carbone asymétrique.
2. Oui : avec un seul carbone asymétrique, elle n'est pas superposable à son image dans un miroir. Ses deux stéréoisomères sont des énantiomères.
3. Carbone central avec deux liaisons dans le plan (par exemple CH3 et COOH), une vers l'avant (OH, triangle plein), une vers l'arrière (H, triangle hachuré).
4. AH + H2O ⇄ A⁻ + H3O⁺ ; Ka = [A⁻][H3O⁺]/[AH].
5. pH = 4,5 > pKa = 3,9 : la forme basique A⁻ (ion lactate) prédomine.
6. [A⁻] = [H3O⁺] = 10^(−2,45) ≈ 3,5 × 10⁻³ mol·L⁻¹. τ = 3,5 × 10⁻³ / 0,10 ≈ 0,035 (3,5 %) : l'acide ne réagit que partiellement avec l'eau, c'est un acide faible.
7. Par dilution, le coefficient de dissociation augmente.

EXERCICE 3
Question 1. ln(8) + ln(2) = ln(16) = ln(2⁴) = 4 ln(2).
Question 2. e^(3x) = 5 ⟺ 3x = ln(5) ⟺ x = ln(5)/3 (environ 0,54).
Question 3. Une primitive de f est F(x) = x³ + x. ∫ de 0 à 2 de f = F(2) − F(0) = 8 + 2 − 0 = 10. Valeur moyenne : 10/2 = 5.
Question 4. a) y' = 0 donne −0,2y + 4 = 0, donc y = 20.
b) Les solutions sont y(t) = C e^(−0,2t) + 20. y(0) = C + 20 = 0, donc C = −20 et y(t) = 20(1 − e^(−0,2t)). Comme e^(−0,2t) tend vers 0, y tend vers 20.

EXERCICE 4
1. Énergie lumineuse (rayonnement solaire) → panneau photovoltaïque → énergie électrique (utile) + transfert thermique vers l'extérieur (perdu).
2. Φ = E × S = 800 × 0,25 = 200 W.
3. η = 36/200 = 0,18, soit 18 % : valeur habituelle pour un panneau au silicium ; 82 % de l'énergie reçue est perdue, surtout sous forme thermique.
4. Par exemple : nuages ou neige sur le panneau, mauvaise orientation ou inclinaison, panneau qui chauffe, ombre.
5. E = U × Q = 12 × 7,0 = 84 Wh = 84 × 3 600 ≈ 3,0 × 10⁵ J.
6. Δt = E / P = 84 / 2,5 ≈ 34 h (33,6 h).
7. P_J = R I² = 0,50 × 3,0² = 4,5 W, perdue sous forme de transfert thermique (le câble chauffe).
8. u = 0,2/√3 ≈ 0,12 °C, soit environ 0,2 °C en arrondissant par excès à un chiffre. T = 4,3 °C avec u(T) = 0,2 °C (ou 4,30 °C avec u = 0,12 °C).
9. z = 0,3 / 0,12 ≈ 2,6 > 2 : la mesure n'est pas compatible avec la référence ; il faut chercher une cause (thermomètre au soleil, mal étalonné…).`,
      grille: [{"c":"Exercice 1 (physique-chimie) : t½, ordre justifié, constante de vitesse, facteur cinétique","pts":3},{"c":"Exercice 1 (mathématiques) : dérivée, équation avec ln, limite interprétée","pts":2},{"c":"Exercice 2 : carbone asymétrique, chiralité, Cram, Ka, prédominance, coefficient de dissociation, dilution","pts":5},{"c":"Exercice 3 : propriétés de ln, équation exponentielle, intégrale et valeur moyenne, équation différentielle","pts":4},{"c":"Exercice 4, parties A et B : chaîne énergétique, flux, rendement, accumulateur, effet Joule","pts":4.5},{"c":"Exercice 4, partie C : incertitude-type, écriture du résultat, z et conclusion","pts":1.5}] },
  ],
};
