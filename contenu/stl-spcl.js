// Physique-chimie et mathématiques — terminale STL. Sources : voir matiere.sources.
// Programme en vigueur : BO spécial n° 8 du 25 juillet 2019 (annexe 3 : terminale STL). Épreuve : note de service du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026).
export default {
  matiere: {
    id: 'stl-spcl',
    nom: 'Sciences physiques et chimiques en laboratoire',
    voie: 'stl',
    epreuve: {"type":"ecrit+pratique","duree":180,"coef":16,"quand":"juin (écrit) ; partie pratique dans l'année, à une date fixée par le lycée","note":"Partie écrite de 3 heures (sur 20, coefficient 7), calculatrice en mode examen autorisée : un sujet autour d'un contexte (le lait, la pêche…) en trois ou quatre parties indépendantes, chacune mêlant chimie, ondes et systèmes et procédés, avec des documents et un document réponse à rendre. Partie pratique de 3 heures au laboratoire (sur 20, coefficient 9) : évaluation des compétences expérimentales sur un sujet tiré au sort. Les notions de physique-chimie et mathématiques et de première peuvent être mobilisées."},
    sources: [
      "https://eduscol.education.fr/document/23104/download",
      "https://www.education.gouv.fr/bo/19/Special8/MENE1921260A.htm",
      "https://www.education.gouv.fr/bo/2026/Special4/MENE2622647N",
      "https://eduscol.education.gouv.fr/5628/baccalaureat-technologique-serie-sciences-et-technologies-de-laboratoire-stl",
      "https://www.freemaths.fr/sujets-du-bac/baccalaureat-technologique/stl/sciences-physiques-et-chimiques-en-laboratoire/annees/annee-2026/metropole/sujet-1-et-correction/bac-sciences-physiques-et-chimiques-en-laboratoire-metropole-2026-voie-technologique-stl-sujet-1.pdf",
      "https://www.freemaths.fr/sujets-du-bac/baccalaureat-technologique/stl/sciences-physiques-et-chimiques-en-laboratoire/annees/annee-2026/polynesie/sujet-1-et-correction/bac-sciences-physiques-et-chimiques-en-laboratoire-polynesie-2026-voie-technologique-stl-sujet-1.pdf",
    ],
    chapitres: [
      { id: "stl-spcl-1", t: "Sources d'erreurs et incertitude d'un résultat", theme: "Mesure et incertitudes" },
      { id: "stl-spcl-2", t: "Solubilité, quotient de réaction et constante d'équilibre", theme: "Chimie et développement durable" },
      { id: "stl-spcl-3", t: "Équilibres acide-base et titrages", theme: "Chimie et développement durable" },
      { id: "stl-spcl-4", t: "Conductimétrie et titrages conductimétriques", theme: "Chimie et développement durable" },
      { id: "stl-spcl-5", t: "Oxydo-réduction : potentiels, Nernst et titrages", theme: "Chimie et développement durable" },
      { id: "stl-spcl-6", t: "Électrolyse, rendement et chimie verte", theme: "Chimie et développement durable" },
      { id: "stl-spcl-7", t: "Chimie organique : fonctions, réactions et séparations", theme: "Chimie et développement durable" },
      { id: "stl-spcl-8", t: "Spectroscopies UV-visible, infrarouge et RMN", theme: "Chimie et développement durable" },
      { id: "stl-spcl-9", t: "Mécanismes réactionnels et stéréochimie", theme: "Chimie et développement durable" },
      { id: "stl-spcl-10", t: "Oscillateurs et résonance", theme: "Ondes" },
      { id: "stl-spcl-11", t: "Ondes progressives, sons et ondes stationnaires", theme: "Ondes" },
      { id: "stl-spcl-12", t: "Ondes électromagnétiques, rayonnement et photométrie", theme: "Ondes" },
      { id: "stl-spcl-13", t: "Des ondes pour mesurer", theme: "Ondes" },
      { id: "stl-spcl-14", t: "Des ondes pour observer : échographie et instruments d'optique", theme: "Ondes" },
      { id: "stl-spcl-15", t: "Transmettre, stocker et afficher l'information", theme: "Ondes" },
      { id: "stl-spcl-16", t: "Flux d'informations : capteurs, filtres et régulation", theme: "Systèmes et procédés" },
      { id: "stl-spcl-17", t: "Transferts thermiques, échangeurs et machines thermiques", theme: "Systèmes et procédés" },
      { id: "stl-spcl-18", t: "Flux de matière : écoulements, pompes et distillation", theme: "Systèmes et procédés" },
    ],
  },
  paquets: [
  { chapitre: "stl-spcl-1",
    fiche: `## Sources d'erreurs et incertitude d'un résultat

En terminale SPCL, on ne se contente plus de calculer une incertitude-type : on repère d'où viennent les erreurs, on compare leur poids, on choisit le bon matériel et on propose d'améliorer le protocole. Presque chaque sujet de bac a une question d'incertitude.

### Rappels : type A et type B
- **Type A** (série de N mesures indépendantes) : u(x) = σ(N−1) / √N, où σ(N−1) est l'écart-type expérimental donné par la calculatrice.
- **Type B** (mesure unique) : on exploite la notice ou une relation fournie. Exemple : une précision ± a donne souvent u = a / √3.
- Exemple (bac 2026 métropole, lait) : 8 mesures, moyenne 1,02 g·L⁻¹, σ = 0,09 g·L⁻¹ : u = 0,09 / √8 ≈ 0,032 g·L⁻¹.

### Les sources d'erreurs
- **Instrument** : précision de la verrerie (tolérance d'une pipette jaugée ou d'une burette), résolution d'un appareil.
- **Opérateur** : lecture du ménisque, repérage d'un changement de couleur, parallaxe.
- **Méthode** : modèle approché (dilution négligée, réaction supposée totale), étalonnage imparfait.
- **Environnement** : température, lumière parasite, vibrations.
- **Erreur aléatoire** : elle change d'une mesure à l'autre, et on la réduit en répétant les mesures.
- **Erreur systématique** : elle décale toutes les mesures dans le même sens (appareil mal étalonné), et répéter la mesure ne la corrige pas.

### Justesse et fidélité
- Un protocole est **fidèle** si les mesures sont peu dispersées (écart-type faible).
- Il est **juste** si la moyenne des mesures est proche de la valeur de référence.
- On compare deux protocoles à partir de leurs séries de mesures : la moyenne renseigne sur la justesse, l'écart-type sur la fidélité.

### Incertitude composée
- Quand le résultat est un **produit ou un quotient** (a = 2λD/L, C = C2 × VE / V1…), on compose les incertitudes **relatives** :
- **u(a)/a = √[(u(λ)/λ)² + (u(D)/D)² + (u(L)/L)²]**. La relation est en général fournie par le sujet.
- Pour une **somme ou une différence**, on compose les incertitudes absolues : u = √(u1² + u2²).
- **Poids d'une source** : on compare les termes (u(x)/x). Le plus grand est la source prépondérante, c'est elle qu'il faut améliorer en priorité.

### Exemple (bac 2026 Polynésie, diamètre d'un fil)
- a = 2λD/L avec λ = 650 nm, D = 1,60 m, L = 2,05 cm : a = 2 × 650 × 10⁻⁹ × 1,60 / 0,0205 ≈ 1,01 × 10⁻⁴ m.
- Incertitudes relatives : λ : 15/650 ≈ 2,3 % ; D : 0,01/1,60 ≈ 0,6 % ; L : 0,05/2,05 ≈ 2,4 %.
- u(a)/a = √(2,3² + 0,6² + 2,4²) % ≈ 3,4 %, soit u(a) ≈ 3,4 × 10⁻⁶ m.
- La mesure de L et la longueur d'onde pèsent le plus ; la distance D compte peu.

### Choisir le matériel, améliorer le protocole
- Pour prélever un volume précis : **pipette jaugée** (pas une éprouvette ni un bécher). Pour verser un volume variable : **burette graduée**.
- Améliorations possibles : augmenter le nombre de mesures, mesurer une plus grande distance (L plus grand donne une incertitude relative plus petite), utiliser un appareil de meilleure résolution, se placer face à la graduation.

### Écrire et valider le résultat
- On arrondit u avec **un ou deux chiffres significatifs**, et la valeur au même rang décimal. Exemple : 9,3456 mg·L⁻¹ avec u = 0,07 mg·L⁻¹ s'écrit 9,35 mg·L⁻¹, u = 0,07 mg·L⁻¹.
- **Compatibilité** avec une valeur de référence : z = ‖x − xref‖ / u(x). Si z ≤ 2, le résultat est compatible avec la référence.
- Comparer à un seuil : lait à 1,02 g·L⁻¹ avec u = 0,03 g·L⁻¹, seuil de 1,4 g·L⁻¹. Même en ajoutant 2u, on reste loin sous le seuil : le lait n'est pas issu d'une vache atteinte de mammite.

### À retenir pour le bac
- Type A : σ/√N ; type B : notice ou relation fournie.
- Produit ou quotient : on compose les incertitudes relatives au carré.
- La source au plus grand u(x)/x est la première à améliorer.
- z ≤ 2 : compatible. Toujours conclure par une phrase liée au contexte.`,
    cartes: [
      { q: "Incertitude-type de type A", r: "u = σ(N−1)/√N, pour N mesures indépendantes." },
      { q: "Incertitude-type de type B", r: "Évaluée sur une mesure unique, à partir d'une notice ou d'une relation fournie." },
      { q: "Erreur aléatoire", r: "Erreur qui varie d'une mesure à l'autre ; on la réduit en répétant les mesures." },
      { q: "Erreur systématique", r: "Erreur qui décale toutes les mesures dans le même sens ; répéter ne la corrige pas." },
      { q: "Protocole fidèle", r: "Mesures peu dispersées (écart-type faible)." },
      { q: "Protocole juste", r: "Moyenne des mesures proche de la valeur de référence." },
      { q: "Incertitude d'un produit ou d'un quotient", r: "u(a)/a = racine de la somme des carrés des incertitudes relatives." },
      { q: "Incertitude d'une somme", r: "u = √(u1² + u2²)." },
      { q: "Source d'erreur prépondérante", r: "Celle dont l'incertitude relative u(x)/x est la plus grande." },
      { q: "Verrerie pour prélever un volume précis", r: "Pipette jaugée." },
      { q: "Nombre de chiffres de u", r: "Un ou deux chiffres significatifs ; la valeur est arrondie au même rang." },
      { q: "Critère de compatibilité", r: "z = ‖x − xref‖ / u(x) ≤ 2." },
      { q: "Effet d'augmenter N sur l'incertitude de type A", r: "Elle diminue, comme 1/√N." },
    ],
    quiz: [
      { q: "Un pH-mètre mal étalonné donne des valeurs toutes trop hautes de 0,2. De quelle erreur s'agit-il ?",
        choix: ["Une erreur aléatoire", "Une incertitude de type A", "Une erreur systématique", "Une erreur de lecture du ménisque"],
        bonne: 2, niv: 1,
        expl: "Elle décale toutes les mesures dans le même sens." },
      { q: "Les mesures d'un protocole sont très resserrées mais leur moyenne est loin de la valeur de référence. Le protocole est :",
        choix: ["juste mais pas fidèle", "fidèle mais pas juste", "juste et fidèle", "ni juste ni fidèle"],
        bonne: 1, niv: 2,
        expl: "Faible dispersion : fidèle ; moyenne décalée : pas juste." },
      { q: "a = 2λD/L. Comment combine-t-on les incertitudes ?",
        choix: ["Somme des incertitudes absolues", "Produit des incertitudes relatives", "Racine de la somme des carrés des incertitudes relatives", "Plus grande incertitude absolue seule"],
        bonne: 2, niv: 2,
        expl: "Pour un produit ou un quotient, on compose les incertitudes relatives au carré." },
      { q: "Incertitudes relatives : λ 2,3 %, D 0,6 %, L 2,4 %. Quelle mesure pèse le plus ?",
        choix: ["La distance D", "La longueur d'onde λ", "Le facteur 2 de la formule", "La largeur L de la tache"],
        bonne: 3, niv: 1,
        expl: "2,4 % est la plus grande incertitude relative." },
      { q: "a = 1,01 × 10⁻⁴ m et u(a)/a = 3,4 %. Que vaut u(a) ?",
        choix: ["1,0 × 10⁻⁶ m", "5,4 × 10⁻⁶ m", "3,4 × 10⁻⁶ m", "3,4 × 10⁻² m"],
        bonne: 2, niv: 2,
        expl: "1,01 × 10⁻⁴ × 0,034 ≈ 3,4 × 10⁻⁶ m." },
      { q: "Quel matériel choisir pour prélever 20,0 mL de lait avec précision ?",
        choix: ["Une éprouvette graduée de 25 mL", "Un bécher de 50 mL", "Une pipette jaugée de 20,0 mL", "Un erlenmeyer de 100 mL"],
        bonne: 2, niv: 1,
        expl: "La pipette jaugée est la verrerie la plus précise pour un volume fixe." },
      { q: "Comment diminuer une incertitude de type A ?",
        choix: ["En diminuant le nombre de mesures", "En changeant d'unité", "En arrondissant davantage la moyenne", "En augmentant le nombre de mesures"],
        bonne: 3, niv: 1,
        expl: "u = σ/√N diminue quand N augmente." },
      { q: "Moyenne 9,3456 mg·L⁻¹ et u = 0,07 mg·L⁻¹. Quelle écriture est correcte ?",
        choix: ["9,3456 mg·L⁻¹ avec u = 0,07 mg·L⁻¹", "9 mg·L⁻¹ avec u = 0,07 mg·L⁻¹", "9,3 mg·L⁻¹ avec u = 0,0700 mg·L⁻¹", "9,35 mg·L⁻¹ avec u = 0,07 mg·L⁻¹"],
        bonne: 3, niv: 2,
        expl: "La valeur est arrondie au rang du dernier chiffre de u." },
      { q: "8 mesures, écart-type 0,09 g·L⁻¹. Quelle est l'incertitude-type sur la moyenne ?",
        choix: ["0,011 g·L⁻¹", "0,032 g·L⁻¹", "0,09 g·L⁻¹", "0,25 g·L⁻¹"],
        bonne: 0, niv: 2,
        expl: "0,09/√8 ≈ 0,032 ; 0,011 est l'erreur 0,09/8." },
      { q: "Un lait contient 1,02 g·L⁻¹ d'ions chlorure (u = 0,03 g·L⁻¹). Le seuil de mammite est 1,4 g·L⁻¹. Que conclure ?",
        choix: ["Le lait vient d'une vache atteinte de mammite", "On ne peut rien conclure sans valeur de référence", "Le lait est à la limite du seuil", "Le lait ne vient pas d'une vache atteinte de mammite"],
        bonne: 3, niv: 3,
        expl: "1,02 + 2 × 0,03 = 1,08 reste bien sous 1,4." },
      { q: "Mesure 4,52, référence 4,40, u = 0,05. Que vaut z et que conclure ?",
        choix: ["z = 2,4 : non compatible", "z = 0,24 : compatible", "z = 2,4 : compatible", "z = 12 : non compatible"],
        bonne: 0, niv: 3,
        expl: "z = 0,12/0,05 = 2,4 > 2." },
    ] },
  { chapitre: "stl-spcl-2",
    fiche: `## Solubilité, quotient de réaction et constante d'équilibre

Ce chapitre ouvre la partie « Composition des systèmes chimiques ». On y apprend à prévoir si un solide se dissout ou précipite, à calculer une solubilité et à séparer des ions par précipitation : c'est la base des titrages par précipitation (dosage des ions chlorure du lait par les ions argent, bac 2026).

### Quotient de réaction Qr
- Pour une réaction a A + b B ⇄ c C + d D en solution : **Qr = [C]^c [D]^d / ([A]^a [B]^b)**, les concentrations étant en mol·L⁻¹ (divisées par c° = 1 mol·L⁻¹, donc sans unité).
- Le **solvant** (l'eau) et les **solides** n'apparaissent pas dans Qr.
- À l'équilibre, Qr prend une valeur particulière : la **constante d'équilibre K**, qui ne dépend que de la température.

### Sens d'évolution spontanée
- **Qr < K** : le système évolue dans le sens direct (formation des produits).
- **Qr > K** : il évolue dans le sens inverse.
- **Qr = K** : le système est à l'équilibre, il n'évolue plus.

### Constante de solubilité Ks
- Dissolution d'un solide ionique : AgCl(s) ⇄ Ag⁺(aq) + Cl⁻(aq), **Ks = [Ag⁺][Cl⁻]**. On note pKs = −log(Ks).
- Pour PbI2(s) ⇄ Pb²⁺ + 2 I⁻ : Ks = [Pb²⁺][I⁻]².
- Pour un solide moléculaire : I2(s) ⇄ I2(aq), Ks = [I2].
- **Apparition d'un précipité** : on calcule Qr avec les concentrations apportées. Si **Qr > Ks**, un précipité se forme ; si Qr < Ks, il n'y a pas de précipité (ou le solide se dissout totalement).

### Solubilité s
- La **solubilité** s est la quantité maximale de solide que l'on peut dissoudre dans un litre de solution (en mol·L⁻¹ ; en g·L⁻¹ si on multiplie par M).
- Une solution est **saturée** quand le solide est présent en excès : la composition vérifie alors Qr = Ks.
- Dans l'eau pure, AgCl : [Ag⁺] = [Cl⁻] = s, donc Ks = s² et **s = √Ks**.
- Exemple : Ks(AgCl) = 1,8 × 10⁻¹⁰, s = √(1,8 × 10⁻¹⁰) ≈ 1,3 × 10⁻⁵ mol·L⁻¹, soit 1,3 × 10⁻⁵ × 143,5 ≈ 1,9 × 10⁻³ g·L⁻¹.
- Pour un solide AB2 (comme PbI2 ou Ca(OH)2) : [A] = s, [B] = 2s, donc Ks = 4s³ et s = (Ks/4)^(1/3).

### Précipitation sélective des hydroxydes
- Un ion métallique M^n+ précipite en hydroxyde M(OH)n quand [HO⁻] devient assez grande, donc à partir d'un certain pH.
- Exemple : Ks(Fe(OH)3) = 10⁻³⁸ et [Fe³⁺] = 0,010 mol·L⁻¹. Début de précipitation quand [HO⁻]³ = 10⁻³⁸/10⁻² = 10⁻³⁶, donc [HO⁻] = 10⁻¹² mol·L⁻¹, pOH = 12 et **pH = 2**.
- Si un autre ion ne précipite qu'à pH 6, en réglant le pH entre 2 et 6 environ on sépare les deux ions : c'est la **précipitation sélective**. On filtre ensuite le précipité.

### Influence de la température
- Ks varie avec la température. Pour la plupart des solides, la solubilité **augmente** quand la température augmente ; on exploite les données fournies (tableau ou courbe).
- Application : la **recristallisation** (dissoudre à chaud, cristalliser à froid) et l'extraction d'une espèce solide dissoute (évaporation, refroidissement, filtration).

### Exemple de raisonnement complet
- On mélange des volumes égaux de nitrate d'argent à 2,0 × 10⁻⁴ mol·L⁻¹ et de chlorure de sodium à 2,0 × 10⁻⁴ mol·L⁻¹. Après mélange, chaque concentration est divisée par 2 : 1,0 × 10⁻⁴ mol·L⁻¹.
- Qr = (1,0 × 10⁻⁴)² = 1,0 × 10⁻⁸ > Ks = 1,8 × 10⁻¹⁰ : un précipité de AgCl se forme.

### À retenir pour le bac
- Qr ne contient ni l'eau ni les solides.
- Qr > Ks : précipité ; Qr < Ks : pas de précipité.
- AgCl dans l'eau pure : s = √Ks.
- Penser à la dilution lors d'un mélange avant de calculer Qr.`,
    cartes: [
      { q: "Quotient de réaction de a A + b B ⇄ c C + d D", r: "Qr = [C]^c [D]^d / ([A]^a [B]^b)." },
      { q: "Espèces absentes de Qr", r: "Le solvant (eau) et les solides." },
      { q: "Qr < K", r: "Le système évolue dans le sens direct." },
      { q: "Qr > K", r: "Le système évolue dans le sens inverse." },
      { q: "Ks de AgCl", r: "Ks = [Ag⁺][Cl⁻]." },
      { q: "Ks de PbI2", r: "Ks = [Pb²⁺][I⁻]²." },
      { q: "Condition d'apparition d'un précipité", r: "Qr calculé avec les concentrations apportées supérieur à Ks." },
      { q: "Solubilité", r: "Quantité maximale de soluté dissoute par litre de solution." },
      { q: "Solution saturée", r: "Solution en contact avec le solide en excès ; Qr = Ks." },
      { q: "Solubilité de AgCl dans l'eau pure", r: "s = √Ks." },
      { q: "Solubilité d'un solide AB2 dans l'eau pure", r: "Ks = 4s³." },
      { q: "Principe de la précipitation sélective", r: "Régler le pH pour faire précipiter un hydroxyde et pas l'autre." },
      { q: "pKs", r: "pKs = −log(Ks)." },
    ],
    quiz: [
      { q: "Quelle est l'expression de Ks pour CaF2(s) ⇄ Ca²⁺(aq) + 2 F⁻(aq) ?",
        choix: ["Ks = [Ca²⁺][F⁻]²", "Ks = [Ca²⁺][F⁻]", "Ks = [Ca²⁺][F⁻]² / [CaF2]", "Ks = 2[Ca²⁺][F⁻]"],
        bonne: 0, niv: 1,
        expl: "Le solide n'apparaît pas ; le coefficient 2 devient un exposant." },
      { q: "Qr = 3,0 × 10⁻⁸ et Ks = 1,8 × 10⁻¹⁰ pour AgCl. Que se passe-t-il ?",
        choix: ["Le solide se dissout", "Rien, le système est à l'équilibre", "Le chlorure d'argent se décompose en gaz", "Un précipité de AgCl se forme"],
        bonne: 3, niv: 2,
        expl: "Qr > Ks : évolution dans le sens inverse de la dissolution." },
      { q: "Ks(AgCl) = 1,8 × 10⁻¹⁰. Quelle est la solubilité de AgCl dans l'eau pure ?",
        choix: ["1,3 × 10⁻⁵ mol·L⁻¹", "1,8 × 10⁻¹⁰ mol·L⁻¹", "9,0 × 10⁻¹¹ mol·L⁻¹", "3,6 × 10⁻¹⁰ mol·L⁻¹"],
        bonne: 0, niv: 2,
        expl: "s = √Ks ≈ 1,34 × 10⁻⁵ mol·L⁻¹." },
      { q: "Pour un solide AB2 dissous dans l'eau pure, quelle relation lie Ks et s ?",
        choix: ["Ks = s²", "Ks = 4s³", "Ks = 2s²", "Ks = s³"],
        bonne: 1, niv: 3,
        expl: "[A] = s et [B] = 2s, donc Ks = s × (2s)² = 4s³." },
      { q: "Que signifie Qr < K pour une réaction ?",
        choix: ["Le système évolue dans le sens direct", "Le système évolue dans le sens inverse", "Le système est à l'équilibre", "La réaction est bloquée"],
        bonne: 0, niv: 1,
        expl: "Les produits se forment jusqu'à ce que Qr atteigne K." },
      { q: "Quelles espèces n'apparaissent pas dans un quotient de réaction ?",
        choix: ["L'eau solvant et les solides", "Les ions", "Chaque produit formé", "Les espèces dissoutes"],
        bonne: 0, niv: 1,
        expl: "Seules les espèces dissoutes (et les gaz) y figurent." },
      { q: "Comment varie en général la solubilité d'un solide quand la température augmente ?",
        choix: ["Elle diminue", "Elle ne change pas", "Elle augmente", "Elle devient nulle"],
        bonne: 2, niv: 1,
        expl: "C'est le cas le plus fréquent, à vérifier avec les données." },
      { q: "Ks(Fe(OH)3) = 10⁻³⁸ et [Fe³⁺] = 0,010 mol·L⁻¹. À quel pH commence la précipitation ?",
        choix: ["pH = 12", "pH = 7", "pH = 4", "pH = 2"],
        bonne: 3, niv: 3,
        expl: "[HO⁻]³ = 10⁻³⁶, [HO⁻] = 10⁻¹², pOH = 12, donc pH = 2." },
      { q: "On mélange volume à volume deux solutions à 2,0 × 10⁻⁴ mol·L⁻¹ d'ions Ag⁺ et Cl⁻. Quelle concentration utiliser dans Qr ?",
        choix: ["2,0 × 10⁻⁴ mol·L⁻¹ pour chaque ion", "4,0 × 10⁻⁴ mol·L⁻¹ pour chaque ion", "4,0 × 10⁻⁸ mol·L⁻¹ pour chaque ion", "1,0 × 10⁻⁴ mol·L⁻¹ pour chaque ion"],
        bonne: 3, niv: 2,
        expl: "Le volume double : chaque concentration est divisée par 2." },
      { q: "Quelle est la composition d'une solution saturée de AgCl ?",
        choix: ["Elle ne contient plus d'ions", "Elle vérifie [Ag⁺] + [Cl⁻] = Ks", "Elle vérifie [Ag⁺][Cl⁻] = Ks, avec du solide présent", "Elle contient le solide dissous en totalité"],
        bonne: 2, niv: 2,
        expl: "Une solution saturée est à l'équilibre avec le solide en excès." },
      { q: "Quel est l'intérêt de la précipitation sélective des hydroxydes ?",
        choix: ["Séparer deux ions métalliques d'un mélange", "Dissoudre plus vite un solide", "Mesurer un pKa", "Augmenter la conductivité"],
        bonne: 0, niv: 2,
        expl: "En réglant le pH, un seul hydroxyde précipite et on le filtre." },
    ] },
  { chapitre: "stl-spcl-3",
    fiche: `## Équilibres acide-base et titrages

Les bases (Ka, pKa, prédominance, coefficient de dissociation) sont vues en physique-chimie et mathématiques. En SPCL, on va plus loin : constante d'équilibre d'une réaction acide-base, sens d'évolution, relation de Henderson-Hasselbalch, pH des solutions simples et surtout titrages. Le titrage de l'acide lactique du lait (bac 2026 métropole, 6 points) en est un exemple typique.

### Effet du pKa et de la dilution sur la dissociation
- À concentration égale, l'acide de **plus petit pKa** (le plus fort) a le **plus grand** coefficient de dissociation.
- Quand on **dilue** un acide faible, son coefficient de dissociation **augmente**.

### Constante d'équilibre d'une réaction acide-base
- Réaction entre l'acide A1H (pKa1) et la base A2⁻ (pKa2) : A1H + A2⁻ ⇄ A1⁻ + A2H.
- **K = Ka1 / Ka2 = 10^(pKa2 − pKa1)**.
- Avec une base forte HO⁻ : HA + HO⁻ → A⁻ + H2O, **K = Ka / Ke**.
- Exemple (bac 2026) : acide lactique, Ka = 1,26 × 10⁻⁴ et Ke = 1,00 × 10⁻¹⁴ : K = 1,26 × 10¹⁰.
- Si **K ≥ 10⁴**, la réaction est considérée comme **totale** : elle peut servir de réaction support de titrage.
- Sens d'évolution : on calcule Qr avec les conditions initiales et on compare à K.

### Relation de Henderson-Hasselbalch
- Elle vient de Ka = [A⁻][H3O⁺]/[AH] en passant au logarithme : **pH = pKa + log([A⁻]/[AH])**.
- Si [A⁻] = [AH], **pH = pKa** : c'est le cas d'une **solution tampon** équimolaire, dont le pH varie peu par ajout modéré d'acide, de base ou par dilution.
- Exemple : [A⁻] = 10 [AH] donne pH = pKa + 1.

### pH de solutions simples
- Acide fort de concentration C : **pH = −log(C)**. Exemple : HCl à 1,0 × 10⁻² mol·L⁻¹, pH = 2.
- Base forte de concentration C : [HO⁻] = C, **pH = 14 + log(C)** à 25 °C. Exemple : NaOH à 1,0 × 10⁻³ mol·L⁻¹, pH = 11.
- Tampon : pH ≈ pKa.

### Titrage direct
- On fait réagir l'espèce à doser (titrée) avec un réactif de concentration connue (titrant), versé à la burette.
- **Équivalence** : les réactifs ont été introduits dans les proportions stœchiométriques ; il y a changement de réactif limitant.
- Pour HA + HO⁻ : **CA × VA = CB × VE**.
- Exemple (bac 2026) : VA = 50,0 mL, CB = 0,25 mol·L⁻¹, VE = 9,40 mL : CA = 0,25 × 9,40 / 50,0 = 4,7 × 10⁻² mol·L⁻¹, soit 4,7 × 10⁻² × 90 ≈ 4,2 g·L⁻¹ d'acide lactique (au-dessus de 1,8 g·L⁻¹ : ce lait n'est pas frais).

### Exploiter une courbe pH = f(V)
- **VE** : abscisse du saut de pH, par la **méthode des tangentes** ou au maximum de la courbe dérivée dpH/dV.
- **pKa** d'un acide faible : à la **demi-équivalence** (V = VE/2), pH = pKa.
- **Indicateur coloré** : sa zone de virage doit contenir le pH à l'équivalence. Exemple : pHE = 8,2 : rouge de crésol (7,2 à 8,8) plutôt que le bleu de bromothymol (6,0 à 7,6).
- **Polyacides** : un diagramme de distribution des espèces montre plusieurs sauts ou plateaux ; on lit les pKa là où deux courbes se croisent (50 % chacune).

### Titrage indirect
- On fait réagir l'espèce avec un **excès connu** d'un réactif, puis on titre ce qui reste. On obtient la quantité ayant réagi par différence : n(réagi) = n(introduit) − n(restant).

### À retenir pour le bac
- K = Ka/Ke avec la soude ; totale si K ≥ 10⁴.
- pH = pKa + log([A⁻]/[AH]) ; à la demi-équivalence, pH = pKa.
- À l'équivalence : CA × VA = CB × VE (pour une stœchiométrie 1 pour 1).
- Indicateur : zone de virage contenant pHE.`,
    cartes: [
      { q: "Constante d'équilibre de HA + HO⁻ → A⁻ + H2O", r: "K = Ka / Ke." },
      { q: "Réaction acide-base entre A1H (pKa1) et A2⁻ (pKa2)", r: "K = 10^(pKa2 − pKa1)." },
      { q: "Seuil pour considérer une réaction comme totale", r: "K ≥ 10⁴." },
      { q: "Relation de Henderson-Hasselbalch", r: "pH = pKa + log([A⁻]/[AH])." },
      { q: "pH d'un acide fort de concentration C", r: "pH = −log(C)." },
      { q: "pH d'une base forte de concentration C à 25 °C", r: "pH = 14 + log(C)." },
      { q: "Équivalence d'un titrage", r: "Réactifs introduits dans les proportions stœchiométriques ; changement de réactif limitant." },
      { q: "Relation à l'équivalence (1 pour 1)", r: "CA × VA = CB × VE." },
      { q: "pH à la demi-équivalence (acide faible)", r: "pH = pKa." },
      { q: "Choix d'un indicateur coloré", r: "Sa zone de virage contient le pH à l'équivalence." },
      { q: "Méthodes pour lire VE sur une courbe pH-métrique", r: "Méthode des tangentes ou maximum de la dérivée dpH/dV." },
      { q: "Titrage indirect", r: "On ajoute un excès connu de réactif, puis on titre l'excès restant." },
      { q: "Effet de la dilution sur la dissociation d'un acide faible", r: "Le coefficient de dissociation augmente." },
    ],
    quiz: [
      { q: "Ka = 1,26 × 10⁻⁴ et Ke = 1,00 × 10⁻¹⁴. Que vaut K pour HA + HO⁻ → A⁻ + H2O ?",
        choix: ["1,26 × 10⁻¹⁸", "7,9 × 10⁻¹¹", "1,26 × 10¹⁰", "1,26 × 10⁻⁴"],
        bonne: 2, niv: 2,
        expl: "K = Ka/Ke = 1,26 × 10⁻⁴ / 10⁻¹⁴." },
      { q: "Une réaction a K = 1,26 × 10¹⁰. Peut-elle servir de réaction support de titrage ?",
        choix: ["Non, car K est trop grand", "Oui, car K ≥ 10⁴, elle est totale", "Non, car K doit valoir 1", "Oui, car K est négatif"],
        bonne: 1, niv: 1,
        expl: "Une réaction de titrage doit être totale, rapide et unique." },
      { q: "Acide éthanoïque (pKa 4,8) et ammoniac NH3 (couple NH4⁺/NH3, pKa 9,2). Que vaut K de CH3COOH + NH3 ⇄ CH3COO⁻ + NH4⁺ ?",
        choix: ["10^4,4", "10^−4,4", "10^14", "4,4"],
        bonne: 0, niv: 3,
        expl: "K = 10^(pKa2 − pKa1) = 10^(9,2 − 4,8)." },
      { q: "Dans une solution, [A⁻] = 10 [AH]. Que vaut le pH ?",
        choix: ["pKa − 1", "pKa", "10 × pKa", "pKa + 1"],
        bonne: 3, niv: 2,
        expl: "pH = pKa + log(10)." },
      { q: "Quel est le pH d'une solution d'hydroxyde de sodium à 1,0 × 10⁻³ mol·L⁻¹ à 25 °C ?",
        choix: ["11", "3", "7", "8"],
        bonne: 0, niv: 2,
        expl: "pH = 14 + log(10⁻³) = 11." },
      { q: "VA = 50,0 mL, CB = 0,25 mol·L⁻¹, VE = 9,40 mL. Que vaut CA ?",
        choix: ["1,3 mol·L⁻¹", "2,1 × 10⁻² mol·L⁻¹", "0,47 mol·L⁻¹", "4,7 × 10⁻² mol·L⁻¹"],
        bonne: 3, niv: 2,
        expl: "CA = CB × VE / VA = 0,25 × 9,40 / 50,0." },
      { q: "Le pH à l'équivalence vaut 8,2. Quel indicateur choisir ?",
        choix: ["Rouge de crésol (7,2 à 8,8)", "Bleu de bromothymol (6,0 à 7,6)", "Vert de bromocrésol (3,8 à 5,4)", "Hélianthine (3,1 à 4,4)"],
        bonne: 0, niv: 2,
        expl: "La zone de virage doit contenir pHE." },
      { q: "Comment estimer le pKa d'un acide faible sur une courbe de titrage par la soude ?",
        choix: ["Lire le pH à la demi-équivalence", "Lire le pH à l'équivalence", "Lire le pH initial", "Lire le pH final"],
        bonne: 0, niv: 2,
        expl: "À V = VE/2, [AH] = [A⁻], donc pH = pKa." },
      { q: "Qu'est-ce que l'équivalence d'un titrage ?",
        choix: ["Le moment où le pH vaut 7", "Le moment où la solution change de couleur", "Le moment où les réactifs ont été introduits dans les proportions stœchiométriques", "Le moment où le volume versé égale le volume titré"],
        bonne: 2, niv: 1,
        expl: "Le pH à l'équivalence dépend des espèces ; il n'est pas forcément 7." },
      { q: "Dans un titrage indirect, comment obtient-on la quantité de l'espèce dosée ?",
        choix: ["En lisant directement VE", "En mesurant le pH initial", "En faisant la différence entre la quantité introduite en excès et celle titrée ensuite", "En calculant la masse du précipité"],
        bonne: 2, niv: 3,
        expl: "n(réagi) = n(introduit) − n(restant)." },
      { q: "Deux acides faibles de même concentration ont pour pKa 3,9 et 4,8. Lequel est le plus dissocié ?",
        choix: ["Celui de pKa 4,8", "Ils sont dissociés de façon égale", "On ne peut pas savoir sans le pH", "Celui de pKa 3,9"],
        bonne: 3, niv: 2,
        expl: "Le plus petit pKa correspond à l'acide le plus fort." },
    ] },
  { chapitre: "stl-spcl-4",
    fiche: `## Conductimétrie et titrages conductimétriques

Une solution contenant des ions conduit le courant. Mesurer sa conductivité permet de doser une espèce par étalonnage ou de suivre un titrage. Le bac 2026 métropole s'ouvre sur le titrage conductimétrique des ions chlorure du lait par le nitrate d'argent (4 points).

### Conductance et conductivité
- La **conductance** G (en siemens, S) est l'inverse de la résistance : **G = 1/R = I/U**.
- La **conductivité** σ (en S·m⁻¹) caractérise la solution, indépendamment de la cellule : **G = k × σ**, où k est la **constante de cellule** (en m, k = S/L pour des plaques de surface S distantes de L).
- On mesure σ avec un **conductimètre** étalonné, dont la cellule est plongée dans la solution.

### Loi de Kohlrausch
- **σ = Σ λi × [Xi]**, somme sur tous les ions présents, avec λi la conductivité ionique molaire (en S·m²·mol⁻¹) et [Xi] en **mol·m⁻³** (1 mol·L⁻¹ = 1 000 mol·m⁻³).
- Exemple : NaCl à 1,0 × 10⁻² mol·L⁻¹ = 10 mol·m⁻³, λ(Na⁺) = 5,0 mS·m²·mol⁻¹, λ(Cl⁻) = 7,6 mS·m²·mol⁻¹ : σ = (5,0 + 7,6) × 10⁻³ × 10 = 0,126 S·m⁻¹.
- Les ions **H3O⁺** (35,0 mS·m²·mol⁻¹) et **HO⁻** (19,8 mS·m²·mol⁻¹) conduisent beaucoup mieux que les autres ions : leur apparition ou disparition marque fortement la courbe.

### Dosage par étalonnage
- Pour des solutions diluées d'un seul soluté, σ est **proportionnelle** à la concentration.
- On mesure σ pour une gamme de solutions étalons, on trace la droite d'étalonnage σ = f(C), puis on lit la concentration de la solution inconnue.

### Titrage conductimétrique
- On ajoute **un grand volume d'eau** dans le bécher (250 mL dans le sujet du lait) pour pouvoir **négliger la dilution** : les portions de courbe sont alors des droites.
- **VE** est l'abscisse du point d'intersection des deux droites.
- On interprète la pente de chaque portion en faisant le bilan des ions qui apparaissent et disparaissent.

### Titrage par précipitation : ions chlorure par les ions argent
- Réaction support : **Ag⁺(aq) + Cl⁻(aq) → AgCl(s)**.
- Avant l'équivalence : chaque ion Cl⁻ consommé est remplacé par un ion NO3⁻ (λ plus faible : 7,1 contre 7,6 mS·m²·mol⁻¹) : σ **diminue légèrement**.
- Après l'équivalence : on ajoute des ions Ag⁺ et NO3⁻ qui ne réagissent plus : σ **augmente** nettement.
- À l'équivalence : n(Cl⁻) = C2 × VE. Concentration en masse : **Cm = C2 × VE × M(Cl) / V1**.
- Exemple : C2 = 0,10 mol·L⁻¹, VE = 5,7 mL, V1 = 20,0 mL, M = 35,5 g·mol⁻¹ : Cm = 0,10 × 5,7 × 35,5 / 20,0 ≈ 1,0 g·L⁻¹.

### Titrage acide-base suivi par conductimétrie
- Acide chlorhydrique titré par la soude : avant l'équivalence, H3O⁺ (très conducteur) est remplacé par Na⁺ : σ **diminue fortement**. Après l'équivalence, Na⁺ et HO⁻ s'accumulent : σ **augmente**. La courbe a une forme de V.
- Acide faible (éthanoïque) titré par la soude : avant l'équivalence, il se forme des ions CH3COO⁻ et Na⁺ : σ augmente doucement ; après, HO⁻ en excès : σ augmente plus fort.

### Mesurer une constante d'équilibre
- En mesurant σ d'une solution d'acide faible, on obtient [H3O⁺] = [A⁻] par la loi de Kohlrausch, puis Ka.

### À retenir pour le bac
- G = k × σ ; σ = Σ λi [Xi] avec [Xi] en mol·m⁻³.
- On dilue fortement pour avoir des droites ; VE au croisement.
- Expliquer une pente par le bilan des ions et la comparaison des λ.
- H3O⁺ et HO⁻ sont les ions les plus conducteurs.`,
    cartes: [
      { q: "Conductance G", r: "G = 1/R = I/U, en siemens (S)." },
      { q: "Relation entre conductance et conductivité", r: "G = k × σ, k constante de cellule." },
      { q: "Unité de la conductivité", r: "S·m⁻¹." },
      { q: "Loi de Kohlrausch", r: "σ = Σ λi × [Xi]." },
      { q: "Unité des concentrations dans la loi de Kohlrausch", r: "mol·m⁻³ (1 mol·L⁻¹ = 1 000 mol·m⁻³)." },
      { q: "Ions les plus conducteurs", r: "H3O⁺ et HO⁻." },
      { q: "Pourquoi ajouter beaucoup d'eau avant un titrage conductimétrique ?", r: "Pour négliger la dilution et obtenir des portions de droite." },
      { q: "Lecture de VE sur une courbe σ = f(V)", r: "Abscisse du point d'intersection des deux droites." },
      { q: "Réaction support du dosage des ions chlorure", r: "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)." },
      { q: "Évolution de σ après l'équivalence (dosage de Cl⁻ par Ag⁺)", r: "σ augmente : Ag⁺ et NO3⁻ s'accumulent." },
      { q: "Concentration en masse en ions chlorure", r: "Cm = C2 × VE × M(Cl) / V1." },
      { q: "Allure de la courbe HCl titré par NaOH", r: "En V : forte baisse, puis hausse après l'équivalence." },
      { q: "Dosage par étalonnage conductimétrique", r: "σ proportionnelle à C pour des solutions diluées ; on lit C sur la droite." },
    ],
    quiz: [
      { q: "Quelle est l'unité de la conductivité σ ?",
        choix: ["S", "Ω·m", "S·m²·mol⁻¹", "S·m⁻¹"],
        bonne: 3, niv: 1,
        expl: "S est l'unité de G ; S·m²·mol⁻¹ celle de λ." },
      { q: "Dans la loi de Kohlrausch, en quelle unité exprime-t-on les concentrations ?",
        choix: ["mol·L⁻¹", "g·L⁻¹", "mol·m⁻³", "mol·mL⁻¹"],
        bonne: 2, niv: 2,
        expl: "λ est en S·m²·mol⁻¹, donc [X] en mol·m⁻³." },
      { q: "NaCl à 10 mol·m⁻³, λ(Na⁺) = 5,0 et λ(Cl⁻) = 7,6 mS·m²·mol⁻¹. Que vaut σ ?",
        choix: ["0,126 S·m⁻¹", "0,076 S·m⁻¹", "0,050 S·m⁻¹", "126 S·m⁻¹"],
        bonne: 0, niv: 2,
        expl: "σ = (5,0 + 7,6) × 10⁻³ × 10." },
      { q: "Pourquoi ajoute-t-on 250 mL d'eau avant le titrage conductimétrique des ions chlorure ?",
        choix: ["Pour accélérer la réaction", "Pour pouvoir négliger la dilution", "Pour dissoudre le précipité", "Pour changer le pH"],
        bonne: 1, niv: 2,
        expl: "La courbe est alors formée de deux droites." },
      { q: "Comment lit-on VE sur la courbe σ = f(V) d'un titrage conductimétrique ?",
        choix: ["Au point d'intersection des deux droites", "Au milieu du saut de σ", "Là où σ = 0", "À la demi-équivalence"],
        bonne: 0, niv: 1,
        expl: "Il n'y a pas de saut, mais un changement de pente." },
      { q: "Pendant le titrage de Cl⁻ par Ag⁺, avant l'équivalence, pourquoi σ diminue-t-elle légèrement ?",
        choix: ["Ag⁺ s'accumule", "Il se forme des ions H3O⁺", "Cl⁻ est remplacé par NO3⁻, un peu moins conducteur", "La température baisse"],
        bonne: 2, niv: 3,
        expl: "λ(NO3⁻) = 7,1 contre λ(Cl⁻) = 7,6 mS·m²·mol⁻¹." },
      { q: "C2 = 0,10 mol·L⁻¹, VE = 5,7 mL, V1 = 20,0 mL, M(Cl) = 35,5 g·mol⁻¹. Que vaut Cm(Cl⁻) ?",
        choix: ["0,028 g·L⁻¹", "1,0 g·L⁻¹", "0,10 g·L⁻¹", "0,29 g·L⁻¹"],
        bonne: 1, niv: 2,
        expl: "Cm = 0,10 × 5,7 × 35,5 / 20,0 ≈ 1,01 g·L⁻¹." },
      { q: "Quelle est l'allure de la courbe σ = f(V) pour HCl titré par NaOH ?",
        choix: ["Une hausse continue", "Une baisse puis une hausse, en V", "Une baisse continue", "Un palier puis un saut brutal"],
        bonne: 1, niv: 2,
        expl: "H3O⁺ très conducteur est remplacé par Na⁺, puis HO⁻ s'accumule." },
      { q: "Quelle relation lie la conductance G et la conductivité σ ?",
        choix: ["G = σ / k²", "G = σ + k", "G = k / σ", "G = k × σ"],
        bonne: 3, niv: 1,
        expl: "k est la constante de la cellule." },
      { q: "Comment déterminer une concentration par étalonnage conductimétrique ?",
        choix: ["Titrer la solution par l'eau", "Tracer σ = f(C) pour des étalons et y reporter σ mesurée", "Mesurer le pH de la solution", "Peser le résidu sec"],
        bonne: 1, niv: 2,
        expl: "La droite d'étalonnage donne C à partir de σ." },
      { q: "Pourquoi la courbe change-t-elle beaucoup quand des ions HO⁻ apparaissent en excès ?",
        choix: ["HO⁻ ne conduit pas le courant", "HO⁻ fait précipiter la solution", "HO⁻ réduit la température", "HO⁻ est bien plus conducteur que la plupart des ions"],
        bonne: 3, niv: 3,
        expl: "λ(HO⁻) = 19,8 mS·m²·mol⁻¹, environ trois fois λ(Na⁺)." },
    ] },
  { chapitre: "stl-spcl-5",
    fiche: `## Oxydo-réduction : potentiels, Nernst et titrages

Les piles sont vues en physique-chimie et mathématiques. En SPCL, on chiffre le pouvoir oxydant d'un couple par son potentiel, on prévoit le sens d'une réaction, et on réalise des titrages redox, avec un indicateur de fin ou par potentiométrie.

### Équilibrer une équation redox
- Écrire chaque demi-équation : équilibrer l'élément, puis O avec H2O, puis H avec H⁺, puis les charges avec des électrons.
- Exemple : MnO4⁻ + 8 H⁺ + 5 e⁻ = Mn²⁺ + 4 H2O ; Fe²⁺ = Fe³⁺ + e⁻.
- Bilan (électrons égaux) : **MnO4⁻ + 5 Fe²⁺ + 8 H⁺ → Mn²⁺ + 5 Fe³⁺ + 4 H2O**.
- **En milieu basique**, on équilibre d'abord avec H⁺, puis on ajoute autant de HO⁻ de chaque côté (H⁺ + HO⁻ = H2O).

### Tests des aldéhydes
- **Liqueur de Fehling** (bleue, ions Cu²⁺), à chaud : précipité **rouge brique** de Cu2O avec un aldéhyde.
- **Réactif de Tollens** : dépôt d'argent, le « **miroir d'argent** ».
- Une cétone ne donne aucun de ces tests.

### Potentiel d'un couple
- Le potentiel E d'un couple Ox/Red se mesure par rapport à une électrode de référence. La référence officielle est l'**électrode standard à hydrogène (ESH)**, de potentiel 0 V par convention. Au laboratoire, on utilise une électrode au calomel saturée (ECS, 0,244 V par rapport à l'ESH) ou au chlorure d'argent.
- Le **potentiel standard E°** est le potentiel quand toutes les espèces sont dans les conditions standard (1 mol·L⁻¹).
- Plus E° est grand, plus l'oxydant du couple est fort.

### Relation de Nernst (à 25 °C)
- Pour a Ox + n e⁻ = b Red : **E = E° + (0,059/n) × log([Ox]^a / [Red]^b)**.
- Exemple : Fe³⁺/Fe²⁺, E° = 0,77 V, [Fe³⁺] = 0,10 et [Fe²⁺] = 0,010 mol·L⁻¹ : E = 0,77 + 0,059 × log(10) = 0,83 V.
- Augmenter la concentration de l'oxydant augmente E ; augmenter celle du réducteur le diminue.

### Sens d'évolution et constante d'équilibre
- L'oxydant du couple au **plus grand potentiel** réagit avec le réducteur du couple au plus petit potentiel (règle du gamma).
- Constante d'équilibre (n électrons échangés) : **log K = n (E°1 − E°2) / 0,059**, avec E°1 le potentiel de l'oxydant qui réagit.
- Exemple : Ce⁴⁺ + Fe²⁺ → Ce³⁺ + Fe³⁺, E°(Ce) = 1,44 V, n = 1 : log K = (1,44 − 0,77) / 0,059 ≈ 11,4, réaction totale.
- **Blocage cinétique** : une réaction prévue peut être si lente qu'on ne l'observe pas. On compare alors l'expérience à la prévision.

### Titrages redox
- **Direct avec changement de couleur** : le permanganate (violet) devient incolore en réagissant ; la persistance de la teinte violette marque l'équivalence.
- **Avec indicateur** : l'empois d'amidon colore en bleu le diiode.
- **Potentiométrique** : on suit E (électrode de platine et électrode de référence) en fonction du volume versé ; on lit VE au saut de potentiel.
- À la **demi-équivalence** du titrage de Fe²⁺, [Fe³⁺] = [Fe²⁺], donc E = E°(Fe³⁺/Fe²⁺) : on lit E° sur la courbe (après correction par le potentiel de l'électrode de référence).
- **Relation à l'équivalence** : n(MnO4⁻ versé) / 1 = n(Fe²⁺ initial) / 5, soit C(Fe²⁺) × V = 5 × C(MnO4⁻) × VE.
- **Titrage indirect** : par exemple, on réduit une espèce par un excès d'ions iodure, puis on titre le diiode formé par le thiosulfate.

### À retenir pour le bac
- E = E° + (0,059/n) log(Ox/Red).
- L'oxydant le plus fort réagit avec le réducteur le plus fort.
- log K = n ΔE° / 0,059 ; totale si K ≥ 10⁴.
- À l'équivalence, raisonner avec les coefficients stœchiométriques.`,
    cartes: [
      { q: "Électrode de référence officielle", r: "L'électrode standard à hydrogène (ESH), de potentiel 0 V." },
      { q: "Potentiel standard E°", r: "Potentiel du couple quand les espèces sont à 1 mol·L⁻¹." },
      { q: "Relation de Nernst à 25 °C", r: "E = E° + (0,059/n) log([Ox]^a/[Red]^b)." },
      { q: "Effet d'une hausse de [Ox] sur E", r: "E augmente." },
      { q: "Sens spontané d'une réaction redox", r: "L'oxydant du couple au plus grand E réagit avec le réducteur du couple au plus petit E." },
      { q: "Constante d'équilibre redox", r: "log K = n (E°1 − E°2) / 0,059." },
      { q: "Blocage cinétique", r: "Réaction possible mais trop lente pour être observée." },
      { q: "Test de la liqueur de Fehling", r: "Précipité rouge brique avec un aldéhyde, à chaud." },
      { q: "Test de Tollens", r: "Miroir d'argent avec un aldéhyde." },
      { q: "Équilibrer une demi-équation en milieu acide", r: "Élément, puis O avec H2O, H avec H⁺, charges avec e⁻." },
      { q: "Équation du titrage de Fe²⁺ par MnO4⁻", r: "MnO4⁻ + 5 Fe²⁺ + 8 H⁺ → Mn²⁺ + 5 Fe³⁺ + 4 H2O." },
      { q: "Repérage de l'équivalence avec le permanganate", r: "Persistance de la teinte violette." },
      { q: "Potentiel à la demi-équivalence du titrage de Fe²⁺", r: "E = E°(Fe³⁺/Fe²⁺)." },
    ],
    quiz: [
      { q: "Fe³⁺/Fe²⁺ : E° = 0,77 V, [Fe³⁺] = 0,10 et [Fe²⁺] = 0,010 mol·L⁻¹. Que vaut E ?",
        choix: ["0,71 V", "0,77 V", "0,83 V", "0,059 V"],
        bonne: 2, niv: 2,
        expl: "E = 0,77 + 0,059 × log(10)." },
      { q: "Que se passe-t-il pour E si on augmente [Red] à [Ox] constant ?",
        choix: ["E diminue", "E augmente", "E reste égal à E°", "E devient négatif quoi qu'il arrive"],
        bonne: 0, niv: 2,
        expl: "Le rapport Ox/Red diminue, donc son logarithme aussi." },
      { q: "Couples Ce⁴⁺/Ce³⁺ (1,44 V) et Fe³⁺/Fe²⁺ (0,77 V). Quelle réaction est spontanée ?",
        choix: ["Ce³⁺ + Fe³⁺ → Ce⁴⁺ + Fe²⁺", "Ce⁴⁺ + Fe²⁺ → Ce³⁺ + Fe³⁺", "Ce⁴⁺ + Fe³⁺ → Ce³⁺ + Fe²⁺", "Fe²⁺ + Ce³⁺ → Fe³⁺ + Ce⁴⁺"],
        bonne: 1, niv: 2,
        expl: "L'oxydant le plus fort réagit avec le réducteur le plus fort." },
      { q: "Pour Ce⁴⁺ + Fe²⁺ (n = 1), E° = 1,44 V et 0,77 V. Que vaut log K ?",
        choix: ["0,67", "39", "11,4", "−11,4"],
        bonne: 2, niv: 3,
        expl: "log K = (1,44 − 0,77) / 0,059 ≈ 11,4." },
      { q: "Quelle est la demi-équation du couple MnO4⁻/Mn²⁺ en milieu acide ?",
        choix: ["MnO4⁻ + 4 H⁺ + 5 e⁻ = Mn²⁺ + 2 H2O", "MnO4⁻ + 8 H⁺ + 5 e⁻ = Mn²⁺ + 4 H2O", "MnO4⁻ + 5 e⁻ = Mn²⁺ + 4 O", "MnO4⁻ + 8 H⁺ = Mn²⁺ + 4 H2O + 5 e⁻"],
        bonne: 1, niv: 2,
        expl: "4 O donnent 4 H2O, d'où 8 H⁺ ; charges : +7 à gauche avec 5 e⁻ donnent +2." },
      { q: "Comment repère-t-on l'équivalence d'un titrage par le permanganate ?",
        choix: ["La solution devient bleue", "La teinte violette persiste", "Un précipité blanc apparaît", "Le pH devient égal à 7"],
        bonne: 1, niv: 1,
        expl: "Avant l'équivalence, MnO4⁻ violet est consommé et décoloré." },
      { q: "Un aldéhyde chauffé avec la liqueur de Fehling donne :",
        choix: ["un miroir d'argent", "une coloration violette", "un dégagement gazeux", "un précipité rouge brique"],
        bonne: 3, niv: 1,
        expl: "Le miroir d'argent est le test de Tollens." },
      { q: "À quoi sert l'électrode standard à hydrogène ?",
        choix: ["Elle mesure le pH", "Elle produit du dihydrogène pour la réaction", "Elle sert de référence de potentiel, à 0 V", "Elle sert d'électrode de travail en platine"],
        bonne: 2, niv: 1,
        expl: "Les potentiels standard sont donnés par rapport à l'ESH." },
      { q: "Une réaction redox est prévue totale, mais on n'observe rien au laboratoire. Quelle est l'explication probable ?",
        choix: ["Une constante d'équilibre trop grande", "Un blocage cinétique", "Une erreur sur le signe de E°", "L'absence d'électrons échangés"],
        bonne: 1, niv: 2,
        expl: "La thermodynamique dit si c'est possible, la cinétique si c'est rapide." },
      { q: "Titrage de V = 20,0 mL de Fe²⁺ par MnO4⁻ à 0,020 mol·L⁻¹, VE = 12,0 mL. Que vaut C(Fe²⁺) ?",
        choix: ["1,2 × 10⁻² mol·L⁻¹", "2,4 × 10⁻³ mol·L⁻¹", "6,0 × 10⁻² mol·L⁻¹", "0,30 mol·L⁻¹"],
        bonne: 2, niv: 3,
        expl: "C = 5 × 0,020 × 12,0 / 20,0 = 0,060 mol·L⁻¹." },
      { q: "Sur une courbe E = f(V) du titrage de Fe²⁺, que lit-on à la demi-équivalence ?",
        choix: ["Le volume équivalent", "Le pH de la solution", "E°(Fe³⁺/Fe²⁺)", "La constante d'équilibre"],
        bonne: 2, niv: 3,
        expl: "[Fe³⁺] = [Fe²⁺] annule le terme logarithmique." },
    ] },
  { chapitre: "stl-spcl-6",
    fiche: `## Électrolyse, rendement et chimie verte

Ce chapitre couvre les aspects macroscopiques des synthèses : forcer une réaction avec un générateur (électrolyse), mesurer l'efficacité d'une synthèse (rendement), l'améliorer, et la rendre plus respectueuse de l'environnement.

### Principe de l'électrolyse
- Une **électrolyse** est une transformation **forcée** : un générateur impose un courant et fait se produire la réaction inverse de la réaction spontanée.
- L'**anode** est l'électrode où se produit l'**oxydation** ; elle est reliée à la borne **+** du générateur.
- La **cathode** est l'électrode où se produit la **réduction** ; elle est reliée à la borne **−**.
- Les **électrons** circulent dans les fils de l'anode vers la cathode (en passant par le générateur) ; le courant circule en sens inverse. Dans la solution, ce sont les ions qui se déplacent.
- Moyen mnémotechnique : **anode, oxydation** (deux voyelles) ; **cathode, réduction** (deux consonnes).

### Exemples
- **Électrolyse de l'eau** : à la cathode, 2 H⁺ + 2 e⁻ = H2 ; à l'anode, 2 H2O = O2 + 4 H⁺ + 4 e⁻. Bilan : 2 H2O → 2 H2 + O2. On obtient deux fois plus de dihydrogène que de dioxygène en volume.
- **Anode soluble** (affinage du cuivre) : à l'anode, Cu = Cu²⁺ + 2 e⁻ (le cuivre impur se dissout) ; à la cathode, Cu²⁺ + 2 e⁻ = Cu (cuivre pur déposé).
- **Applications** : production du dichlore et de la soude, de l'aluminium, galvanoplastie (chromage, argenture), recharge des accumulateurs, production de dihydrogène, **recyclage** de métaux (récupération du cuivre ou de l'argent).

### Quantité d'électricité et rendement faradique
- Charge transportée : **Q = I × Δt** (en coulombs, I en A, Δt en s).
- Quantité d'électrons : **n(e⁻) = Q / F**, avec F = 96 500 C·mol⁻¹ (constante de Faraday).
- Exemple : I = 2,0 A pendant 30 min : Q = 2,0 × 1 800 = 3 600 C, n(e⁻) = 3 600 / 96 500 ≈ 3,7 × 10⁻² mol. Pour Cu²⁺ + 2 e⁻ = Cu : n(Cu) théorique = 1,9 × 10⁻² mol, soit 1,2 g.
- **Rendement faradique** : η = n(produit obtenu) / n(produit théorique) = charge utile / charge totale. Il est inférieur à 1 à cause des réactions parasites (dégagement de H2 à la cathode, par exemple).

### Fiche de données de sécurité (FDS)
- Elle donne les pictogrammes, les mentions de danger (H) et les conseils de prudence (P), les équipements de protection, les valeurs limites d'exposition. On y repère la **toxicité** des espèces pour choisir un protocole et les protections.

### Rendement d'une synthèse
- **Rendement** : η = n(produit obtenu) / n(produit maximal), n(maximal) étant calculé à partir du réactif limitant.
- Plusieurs étapes : le rendement global est le **produit** des rendements. Exemple : 80 % puis 70 % donnent 56 %.
- Exemple (bac 2026 Polynésie) : 0,28 mol d'alcool isoamylique limitant ; masse d'ester obtenue 28,0 g, M = 130 g·mol⁻¹ : n = 0,215 mol, η = 0,215 / 0,28 ≈ 77 %.

### Optimiser le rendement et la vitesse
- **Rendement** (pour une réaction équilibrée comme l'estérification) : mettre **un réactif en excès**, **éliminer un produit** au fur et à mesure (eau retirée par un appareil de Dean-Stark, distillation de l'ester), ou **changer de réactif** (un anhydride d'acide à la place d'un acide carboxylique rend la réaction totale).
- **Vitesse** (facteurs cinétiques) : augmenter la **température** (chauffage à reflux), la **concentration** des réactifs, utiliser un **catalyseur** (acide sulfurique pour l'estérification). Un catalyseur accélère la réaction sans modifier le rendement final.

### Chimie verte
- Ses principes : limiter les déchets, économiser les atomes, utiliser des solvants moins nocifs (eau, éthanol) ou pas de solvant, travailler à température et pression ambiantes, utiliser la catalyse et des ressources renouvelables.
- Exemple : le **procédé sol-gel** fabrique des verres et céramiques à température proche de l'ambiante, au lieu de fondre la silice à plus de 1 500 °C.
- Pour comparer deux protocoles : rendement, coût des réactifs, énergie consommée, toxicité des espèces, déchets.

### À retenir pour le bac
- Anode : oxydation, borne + ; cathode : réduction, borne −.
- Q = I × Δt ; n(e⁻) = Q / F.
- Rendement = n obtenu / n maximal (réactif limitant).
- Excès d'un réactif ou élimination d'un produit : meilleur rendement ; catalyseur et chaleur : réaction plus rapide.`,
    cartes: [
      { q: "Électrolyse", r: "Transformation forcée par un générateur, inverse de la réaction spontanée." },
      { q: "Anode", r: "Électrode où a lieu l'oxydation ; reliée à la borne + dans une électrolyse." },
      { q: "Cathode", r: "Électrode où a lieu la réduction ; reliée à la borne − dans une électrolyse." },
      { q: "Bilan de l'électrolyse de l'eau", r: "2 H2O → 2 H2 + O2." },
      { q: "Charge électrique transportée", r: "Q = I × Δt." },
      { q: "Constante de Faraday", r: "F = 96 500 C·mol⁻¹." },
      { q: "Quantité d'électrons", r: "n(e⁻) = Q / F." },
      { q: "Rendement faradique", r: "Quantité de produit obtenue / quantité théorique d'après la charge." },
      { q: "Rendement d'une synthèse", r: "n(produit obtenu) / n(produit maximal)." },
      { q: "Rendement global de plusieurs étapes", r: "Produit des rendements de chaque étape." },
      { q: "Rôle du Dean-Stark", r: "Éliminer l'eau formée pour déplacer l'équilibre et améliorer le rendement." },
      { q: "Rôle d'un catalyseur", r: "Accélérer la réaction sans modifier son rendement." },
      { q: "Exemple de procédé de chimie verte", r: "Le procédé sol-gel, à basse température." },
    ],
    quiz: [
      { q: "Dans une électrolyse, où se produit l'oxydation ?",
        choix: ["À la cathode, reliée à la borne −", "À l'anode, reliée à la borne +", "À l'anode, reliée à la borne −", "Dans le générateur"],
        bonne: 1, niv: 1,
        expl: "Anode et oxydation commencent par une voyelle." },
      { q: "I = 2,0 A pendant 30 min. Quelle quantité d'électrons a circulé ?",
        choix: ["3,6 × 10³ mol", "6,2 × 10⁻⁴ mol", "3,7 × 10⁻² mol", "1,9 × 10⁻² mol"],
        bonne: 2, niv: 2,
        expl: "Q = 2,0 × 1 800 = 3 600 C ; n = 3 600 / 96 500." },
      { q: "Électrolyse de l'eau : quel gaz se forme à la cathode ?",
        choix: ["Le dihydrogène", "Le dioxygène", "Le dichlore", "Le dioxyde de carbone"],
        bonne: 0, niv: 2,
        expl: "La cathode est le siège de la réduction : 2 H⁺ + 2 e⁻ = H2." },
      { q: "Dans un affinage du cuivre à anode soluble, que se passe-t-il à l'anode ?",
        choix: ["Le cuivre s'oxyde et passe en solution", "Du cuivre pur se dépose", "Du dihydrogène se dégage", "Les ions Cu²⁺ sont réduits"],
        bonne: 0, niv: 2,
        expl: "Cu = Cu²⁺ + 2 e⁻ à l'anode ; le dépôt a lieu à la cathode." },
      { q: "Pourquoi un rendement faradique est-il inférieur à 100 % ?",
        choix: ["La constante de Faraday varie", "Le générateur crée de la matière", "Une partie des électrons sert à des réactions parasites", "La cathode s'oxyde"],
        bonne: 2, niv: 3,
        expl: "Par exemple un dégagement de H2 en plus du dépôt de métal." },
      { q: "Une synthèse en deux étapes a des rendements de 80 % et 70 %. Quel est le rendement global ?",
        choix: ["10 %", "44 %", "56 %", "50 %"],
        bonne: 2, niv: 2,
        expl: "On multiplie : 0,80 × 0,70 = 0,56." },
      { q: "0,28 mol de réactif limitant ; on obtient 0,215 mol d'ester. Quel est le rendement ?",
        choix: ["130 %", "77 %", "28 %", "21 %"],
        bonne: 1, niv: 2,
        expl: "0,215 / 0,28 ≈ 0,77." },
      { q: "Quel montage améliore le rendement d'une estérification en éliminant l'eau ?",
        choix: ["Le chauffage à reflux simple", "Le montage de Dean-Stark", "La filtration sous vide", "La chromatographie sur couche mince"],
        bonne: 1, niv: 2,
        expl: "L'eau retirée déplace l'équilibre vers l'ester." },
      { q: "Quel est l'effet d'un catalyseur sur une synthèse ?",
        choix: ["Il accélère la réaction sans changer le rendement final", "Il augmente le rendement final", "Il est consommé comme un réactif", "Il ralentit les réactions parasites"],
        bonne: 0, niv: 2,
        expl: "Il agit sur la vitesse, pas sur l'état final." },
      { q: "Où trouve-t-on la toxicité d'une espèce chimique avant une manipulation ?",
        choix: ["Sur son spectre infrarouge", "Dans sa formule brute", "Dans le tableau périodique", "Dans sa fiche de données de sécurité"],
        bonne: 3, niv: 1,
        expl: "La FDS donne pictogrammes, mentions de danger et protections." },
      { q: "Quel choix va dans le sens de la chimie verte ?",
        choix: ["Utiliser l'eau comme solvant et un catalyseur", "Chauffer plus fort pour aller plus vite", "Utiliser un solvant chloré", "Prendre un grand excès de chaque réactif"],
        bonne: 0, niv: 1,
        expl: "Moins de solvants nocifs et moins d'énergie." },
    ] },
  { chapitre: "stl-spcl-7",
    fiche: `## Chimie organique : fonctions, réactions et séparations

La synthèse d'un ester à odeur de banane (bac 2026 Polynésie, 6 points) mobilise tout ce chapitre : reconnaître les groupes, nommer, écrire l'équation, puis isoler et purifier le produit.

### Groupes caractéristiques et fonctions
- **Alcool** : −OH sur un carbone ; **aldéhyde** : −CHO en bout de chaîne ; **cétone** : C=O entre deux carbones ; **acide carboxylique** : −COOH ; **amine** : −NH2.
- **Ester** : −COO− entre deux chaînes carbonées. Exemple : éthanoate d'isoamyle (arôme de banane).
- **Amide** : −CO−N.
- **Anhydride d'acide** : −CO−O−CO−.
- **Chlorure d'acyle** : −COCl.

### Nomenclature (exemples)
- Chaîne principale la plus longue contenant le groupe ; numérotation qui donne le plus petit numéro au groupe.
- Butan-2-ol, propanal, propanone, acide éthanoïque, 3-méthylbutan-1-ol (alcool isoamylique).
- Ester : « alcanoate d'alkyle ». L'éthanoate d'éthyle vient de l'acide éthanoïque et de l'éthanol.

### Réactions au programme
- **Estérification** : acide carboxylique + alcool ⇄ ester + eau. Réaction lente et limitée (équilibre), catalysée par un acide. Exemple : CH3COOH + C5H11OH ⇄ CH3COOC5H11 + H2O.
- Avec un **anhydride d'acide** ou un **chlorure d'acyle**, la formation de l'ester est rapide et totale.
- **Formation d'un amide** : chlorure d'acyle (ou anhydride) + amine → amide.
- **Oxydation d'un alcool** (par MnO4⁻ ou Cr2O7²⁻ en milieu acide) : un alcool primaire donne un aldéhyde, puis un acide carboxylique ; un alcool secondaire donne une cétone ; un alcool tertiaire ne s'oxyde pas dans ces conditions.
- **Réduction d'une cétone** (par NaBH4) : on obtient un alcool secondaire.
- **Hydrolyse d'un ester** : ester + eau ⇄ acide + alcool (inverse de l'estérification, limitée).
- **Saponification** : ester + HO⁻ → ion carboxylate + alcool, réaction **totale**. Elle sert à fabriquer le savon à partir des corps gras.
- **Hydrolyse d'un amide** en milieu acide ou basique : on obtient l'acide (ou l'ion carboxylate) et l'amine (ou l'ion ammonium).

### Montages et techniques
- **Chauffage à reflux** : on chauffe pour accélérer la réaction sans perdre de matière (les vapeurs se condensent dans le réfrigérant et retombent).
- **Dean-Stark** : l'eau formée est entraînée par un solvant (cyclohexane) et piégée dans un tube gradué ; l'équilibre est déplacé et le rendement augmente.
- **CCM** (chromatographie sur couche mince) : on dépose les espèces sur une plaque, on élue, on révèle. Elle permet de vérifier la présence du produit d'une oxydation et l'absence de réactif.
- **Extraction liquide-liquide** : on choisit un solvant non miscible avec l'eau, dans lequel l'espèce est très soluble, et peu dangereux. On sépare avec une ampoule à décanter ; la phase la moins dense est au-dessus.
- **Recristallisation** : on dissout le solide dans un minimum de solvant chaud, dans lequel il est peu soluble à froid, puis on laisse refroidir : les cristaux purs se forment, les impuretés restent en solution.
- **Distillation fractionnée** : on sépare des liquides miscibles de températures d'ébullition différentes grâce à une colonne de Vigreux ; le plus volatil sort en premier en tête de colonne.
- **Hydrodistillation** : on fait bouillir une matière végétale dans l'eau ; la vapeur entraîne les espèces odorantes (huiles essentielles), qui se séparent de l'eau après condensation.

### Choisir un solvant à partir d'un tableau
- Extraction : non miscible à l'eau, bonne solubilité de l'espèce, faible toxicité, température d'ébullition basse pour l'éliminer ensuite.
- Exemple : pour extraire un arôme d'une solution aqueuse, le cyclohexane (non miscible) convient mieux que l'éthanol (miscible à l'eau).

### À retenir pour le bac
- Estérification : lente et limitée ; saponification : totale.
- Alcool primaire : aldéhyde puis acide ; secondaire : cétone.
- Reflux : vitesse sans perte ; Dean-Stark : rendement.
- Solvant d'extraction : non miscible à l'eau et l'espèce y est très soluble.`,
    cartes: [
      { q: "Groupe ester", r: "−COO− entre deux chaînes carbonées." },
      { q: "Groupe amide", r: "−CO−N." },
      { q: "Anhydride d'acide", r: "−CO−O−CO−." },
      { q: "Chlorure d'acyle", r: "−COCl." },
      { q: "Estérification", r: "Acide + alcool ⇄ ester + eau ; lente et limitée." },
      { q: "Saponification", r: "Ester + HO⁻ → carboxylate + alcool ; totale." },
      { q: "Oxydation d'un alcool primaire", r: "Aldéhyde, puis acide carboxylique." },
      { q: "Oxydation d'un alcool secondaire", r: "Cétone." },
      { q: "Réduction d'une cétone", r: "Alcool secondaire." },
      { q: "Intérêt du chauffage à reflux", r: "Accélérer la réaction sans perte de matière." },
      { q: "Principe de la recristallisation", r: "Dissoudre à chaud, cristalliser à froid ; les impuretés restent en solution." },
      { q: "Principe de la distillation fractionnée", r: "Séparer des liquides miscibles ; le plus volatil sort en premier." },
      { q: "Principe de l'hydrodistillation", r: "La vapeur d'eau entraîne les espèces odorantes d'une plante." },
    ],
    quiz: [
      { q: "Quel groupe caractérise un amide ?",
        choix: ["−CO−N", "−COO−", "−COCl", "−CHO"],
        bonne: 0, niv: 1,
        expl: "−COO− est un ester, −COCl un chlorure d'acyle." },
      { q: "L'oxydation ménagée du butan-2-ol donne :",
        choix: ["le butanal", "l'acide butanoïque", "le butane", "la butanone"],
        bonne: 3, niv: 2,
        expl: "Un alcool secondaire donne une cétone." },
      { q: "Quelle est la différence entre hydrolyse et saponification d'un ester ?",
        choix: ["L'hydrolyse est totale, la saponification limitée", "La saponification produit un ester", "La saponification, en milieu basique, est totale", "L'hydrolyse se fait sans eau"],
        bonne: 2, niv: 2,
        expl: "La saponification donne un ion carboxylate et ne revient pas en arrière." },
      { q: "Pourquoi utilise-t-on un anhydride d'acide plutôt qu'un acide pour fabriquer un ester ?",
        choix: ["L'anhydride est un catalyseur", "On obtient un amide", "La réaction devient rapide et totale", "On évite de chauffer à reflux"],
        bonne: 2, niv: 3,
        expl: "Changer de réactif est une façon d'optimiser le rendement." },
      { q: "Quel est le rôle du réfrigérant dans un chauffage à reflux ?",
        choix: ["Refroidir le mélange pour arrêter la réaction", "Récupérer le produit purifié", "Éliminer l'eau formée", "Condenser les vapeurs pour qu'elles retombent dans le ballon"],
        bonne: 3, niv: 1,
        expl: "On chauffe sans perdre de matière." },
      { q: "Quel solvant choisir pour extraire un arôme d'une solution aqueuse ?",
        choix: ["Le cyclohexane, non miscible à l'eau", "L'éthanol, miscible à l'eau", "De l'eau salée", "L'acétone, miscible à l'eau"],
        bonne: 0, niv: 2,
        expl: "Un solvant d'extraction ne doit pas se mélanger à l'eau." },
      { q: "Que donne la réduction d'une cétone par NaBH4 ?",
        choix: ["Un acide carboxylique", "Un alcool secondaire", "Un ester", "Un aldéhyde"],
        bonne: 1, niv: 2,
        expl: "La cétone gagne deux atomes H." },
      { q: "Quel ester se forme à partir d'acide éthanoïque et d'éthanol ?",
        choix: ["Le propanoate de méthyle", "L'éthanoate d'éthyle", "L'éthanal", "L'acide éthyléthanoïque"],
        bonne: 1, niv: 1,
        expl: "Alcanoate (de l'acide) d'alkyle (de l'alcool)." },
      { q: "Quel est le principe de la recristallisation ?",
        choix: ["Évaporer tout le solvant", "Faire bouillir le solide sans solvant", "Dissoudre à chaud dans un solvant où le solide est peu soluble à froid", "Ajouter un réactif qui détruit les impuretés"],
        bonne: 2, niv: 2,
        expl: "Les impuretés restent dissoutes au refroidissement." },
      { q: "Dans une distillation fractionnée, quel liquide sort en premier en tête de colonne ?",
        choix: ["Le plus dense", "Le moins volatil", "Le plus volatil", "Le plus visqueux"],
        bonne: 2, niv: 2,
        expl: "Le plus volatil a la plus basse température d'ébullition." },
      { q: "À quoi sert une CCM après l'oxydation d'un alcool ?",
        choix: ["Vérifier la formation du produit et la disparition du réactif", "Mesurer le rendement", "Déterminer la température d'ébullition", "Doser l'eau formée"],
        bonne: 0, niv: 2,
        expl: "On compare les taches aux références déposées." },
    ] },
  { chapitre: "stl-spcl-8",
    fiche: `## Spectroscopies UV-visible, infrarouge et RMN

Les spectres servent à identifier une molécule et à doser une espèce. Au bac, on doit attribuer des bandes ou des signaux en s'aidant d'une table fournie (par exemple, choisir entre le spectre de l'alcool et celui de l'ester dans le sujet de Polynésie 2026).

### Lumière et matière
- Un photon transporte l'énergie **E = h × ν = h × c / λ**, avec h = 6,63 × 10⁻³⁴ J·s et c = 3,00 × 10⁸ m·s⁻¹.
- Exemple : λ = 500 nm : E = 6,63 × 10⁻³⁴ × 3,00 × 10⁸ / 500 × 10⁻⁹ ≈ 4,0 × 10⁻¹⁹ J, soit 2,5 eV (1 eV = 1,60 × 10⁻¹⁹ J).
- **UV-visible** (200 à 800 nm) : énergie des électrons des liaisons. **Infrarouge** : vibration des liaisons. **RMN** : ondes radio, sur les noyaux d'hydrogène placés dans un champ magnétique.

### Spectroscopie UV-visible et dosage
- Une espèce colorée absorbe dans le visible ; sa couleur est la **couleur complémentaire** de celle absorbée (absorbe le rouge, paraît bleu-vert).
- **Loi de Beer-Lambert** : **A = ε × ℓ × C**, avec ε le coefficient d'absorption molaire, ℓ la longueur de cuve.
- **Dosage par étalonnage** : on mesure A pour des solutions étalons à la longueur d'onde du maximum d'absorption, on trace la droite A = f(C), et on lit la concentration de la solution inconnue.
- Exemple : droite A = 1 250 × C (C en mol·L⁻¹) et A mesurée 0,50 : C = 4,0 × 10⁻⁴ mol·L⁻¹.

### Spectroscopie infrarouge
- Axe horizontal : **nombre d'onde** σ = 1/λ en cm⁻¹ (de 4 000 à 400). Axe vertical : transmittance (les bandes pointent vers le bas).
- Bandes à connaître (valeurs fournies au bac) :
- **O−H alcool** : bande **large et forte** vers 3 200 à 3 400 cm⁻¹ (liaisons hydrogène).
- **O−H acide carboxylique** : bande très large de 2 500 à 3 200 cm⁻¹.
- **C=O** : bande **fine et intense** vers 1 650 à 1 750 cm⁻¹ (ester vers 1 735 à 1 750, cétone et aldéhyde vers 1 700 à 1 720).
- **N−H** amine ou amide : vers 3 300 à 3 500 cm⁻¹.
- **C−H** : vers 2 800 à 3 000 cm⁻¹ (présente dans presque toutes les molécules).
- Exemple de raisonnement : un spectre avec une bande C=O vers 1 740 cm⁻¹ et sans bande O−H large est celui de l'ester, pas celui de l'alcool.

### Spectroscopie RMN du proton
- Chaque groupe de protons **équivalents** (même environnement) donne un **signal**, repéré par son **déplacement chimique** δ (en ppm).
- La **courbe d'intégration** : la hauteur des paliers est proportionnelle au **nombre de protons** du groupe.
- **Multiplicité** (règle des n + 1 voisins) : un groupe de protons ayant n protons voisins (sur les carbones adjacents) donne un signal à **n + 1 pics** : singulet (0 voisin), doublet (1), triplet (2), quadruplet (3).
- Exemple : éthanol CH3−CH2−OH. CH3 : 3 H, triplet (2 voisins) ; CH2 : 2 H, quadruplet (3 voisins) ; OH : 1 H, singulet. Rapport d'intégration 3 : 2 : 1.
- Exemple : éthanoate d'éthyle CH3−COO−CH2−CH3. CH3 lié au C=O : singulet (3 H) ; CH2 : quadruplet (2 H) ; CH3 de l'éthyle : triplet (3 H).
- Repères de δ : protons proches d'un atome électronégatif (O) à δ plus grand (3,5 à 4,5 ppm pour O−CH2) ; aldéhyde −CHO vers 9,5 à 10 ppm ; acide −COOH vers 11 à 12 ppm.

### Identifier une structure
- On croise les informations : groupes présents (IR), nombre de groupes de protons, intégration et multiplicités (RMN), maximum d'absorption (UV-visible), en s'aidant des banques de données.

### À retenir pour le bac
- E = hc/λ.
- A = ε ℓ C ; étalonnage au maximum d'absorption.
- IR : O−H large vers 3 300 ; C=O fine vers 1 700 à 1 750 cm⁻¹.
- RMN : intégration = nombre de H ; n voisins donnent n + 1 pics.`,
    cartes: [
      { q: "Énergie d'un photon", r: "E = h × c / λ." },
      { q: "Constante de Planck", r: "h = 6,63 × 10⁻³⁴ J·s." },
      { q: "Loi de Beer-Lambert", r: "A = ε × ℓ × C." },
      { q: "Longueur d'onde pour un dosage par étalonnage", r: "Celle du maximum d'absorption." },
      { q: "Couleur perçue d'une espèce qui absorbe le rouge", r: "La couleur complémentaire : bleu-vert." },
      { q: "Unité de l'axe horizontal d'un spectre IR", r: "Le nombre d'onde, en cm⁻¹." },
      { q: "Bande O−H d'un alcool", r: "Large et forte, vers 3 200 à 3 400 cm⁻¹." },
      { q: "Bande C=O", r: "Fine et intense, vers 1 650 à 1 750 cm⁻¹." },
      { q: "Information donnée par la courbe d'intégration RMN", r: "Le nombre de protons de chaque groupe." },
      { q: "Règle des n + 1", r: "Un groupe de protons ayant n voisins donne n + 1 pics." },
      { q: "Signal d'un groupe sans proton voisin", r: "Un singulet." },
      { q: "Signaux RMN de l'éthanol", r: "Triplet (CH3), quadruplet (CH2), singulet (OH) ; rapport 3 : 2 : 1." },
      { q: "Déplacement chimique d'un proton d'aldéhyde", r: "Vers 9,5 à 10 ppm." },
    ],
    quiz: [
      { q: "Quelle est l'énergie d'un photon de longueur d'onde 500 nm ?",
        choix: ["4,0 × 10⁻¹⁹ J", "4,0 × 10⁻²⁸ J", "1,0 × 10⁻¹⁹ J", "2,5 J"],
        bonne: 0, niv: 2,
        expl: "E = 6,63 × 10⁻³⁴ × 3,00 × 10⁸ / 5,00 × 10⁻⁷." },
      { q: "Droite d'étalonnage A = 1 250 × C ; A mesurée = 0,50. Que vaut C ?",
        choix: ["6,3 × 10² mol·L⁻¹", "2,5 × 10³ mol·L⁻¹", "4,0 × 10⁻⁴ mol·L⁻¹", "0,50 mol·L⁻¹"],
        bonne: 2, niv: 2,
        expl: "C = 0,50 / 1 250." },
      { q: "Un spectre IR montre une bande fine et intense vers 1 740 cm⁻¹ et pas de bande large vers 3 300 cm⁻¹. De quelle molécule s'agit-il ?",
        choix: ["D'un ester", "D'un alcool", "D'une amine", "D'un alcane"],
        bonne: 0, niv: 2,
        expl: "C=O présente, O−H absente." },
      { q: "Comment se présente la bande O−H d'un alcool en IR ?",
        choix: ["Fine vers 1 700 cm⁻¹", "Large et forte vers 3 300 cm⁻¹", "Fine vers 2 900 cm⁻¹", "Large vers 1 000 cm⁻¹"],
        bonne: 1, niv: 1,
        expl: "Les liaisons hydrogène élargissent la bande." },
      { q: "Un groupe CH2 a trois protons voisins. Quelle est la multiplicité de son signal ?",
        choix: ["Un triplet", "Un doublet", "Un singulet", "Un quadruplet"],
        bonne: 3, niv: 2,
        expl: "n + 1 = 4 pics." },
      { q: "Que représente la hauteur des paliers de la courbe d'intégration ?",
        choix: ["Le nombre de voisins", "Le déplacement chimique", "La masse de la molécule", "Le nombre de protons de chaque groupe"],
        bonne: 3, niv: 1,
        expl: "Elle est proportionnelle au nombre de protons équivalents." },
      { q: "Combien de signaux donne l'éthanoate d'éthyle CH3−COO−CH2−CH3 en RMN ?",
        choix: ["4", "3", "5", "8"],
        bonne: 1, niv: 3,
        expl: "Trois groupes de protons équivalents : CH3 du côté acide, CH2, CH3 de l'éthyle." },
      { q: "Dans l'éthanoate d'éthyle, quel est le signal du CH3 lié au groupe C=O ?",
        choix: ["Un triplet de 3 H", "Un singulet de 3 H", "Un quadruplet de 2 H", "Un doublet de 3 H"],
        bonne: 1, niv: 3,
        expl: "Le carbone voisin (C=O) ne porte aucun proton." },
      { q: "Une solution absorbe surtout vers 620 nm (orange-rouge). Quelle couleur a-t-elle ?",
        choix: ["Orange", "Rouge", "Bleue", "Jaune"],
        bonne: 2, niv: 2,
        expl: "On voit la couleur complémentaire de celle absorbée." },
      { q: "Quel type de rayonnement utilise la RMN ?",
        choix: ["Des rayons X", "Des ondes radio", "De l'infrarouge", "De l'ultraviolet"],
        bonne: 1, niv: 1,
        expl: "Les noyaux d'hydrogène sont sondés dans un champ magnétique." },
      { q: "Un signal apparaît vers 9,7 ppm en RMN. Quel groupe suggère-t-il ?",
        choix: ["Un groupe CH3 isolé", "Un aldéhyde −CHO", "Un alcane", "Un groupe CH2 lié à un carbone"],
        bonne: 1, niv: 3,
        expl: "Le proton d'aldéhyde est très déblindé." },
    ] },
  { chapitre: "stl-spcl-9",
    fiche: `## Mécanismes réactionnels et stéréochimie

Une équation dit ce qui réagit et ce qui se forme ; un mécanisme dit comment, étape par étape. Ce chapitre complète la chiralité vue en physique-chimie et mathématiques : diastéréoisomères, mélange racémique, loi de Biot et excès énantiomérique (les deux énantiomères de l'acide lactique du lait, bac 2026 métropole).

### Types de réactions
- **Substitution** : un atome ou groupe est remplacé par un autre. Exemple : CH3−Br + HO⁻ → CH3−OH + Br⁻.
- **Addition** : deux molécules s'unissent, une liaison double devient simple. Exemple : CH2=CH2 + HBr → CH3−CH2Br.
- **Élimination** : une molécule perd des atomes, une liaison double se forme. Exemple : déshydratation d'un alcool en alcène.
- On reconnaît aussi les réactions **acide-base** (échange de H⁺) et d'**oxydo-réduction** (échange d'électrons).

### Formalisme des flèches courbes
- Une flèche courbe représente le **déplacement d'un doublet d'électrons**. Elle part d'un **site riche en électrons** (doublet non liant, liaison double, charge −) et pointe vers un **site pauvre en électrons** (atome portant une charge + ou une charge partielle δ+).
- Un **site donneur** (nucléophile) attaque un **site accepteur** (électrophile). Exemple : le doublet de O dans HO⁻ attaque le carbone δ+ lié au brome.

### Intermédiaires réactionnels
- Un **intermédiaire** est formé à une étape et consommé à une suivante ; il n'apparaît pas dans le bilan.
- **Carbocation** : carbone portant une charge + et trois liaisons. Selon la théorie **VSEPR** (3 doublets autour de C), il est **plan**, avec des angles de 120°.
- **Carbanion** : carbone portant une charge − (trois liaisons et un doublet non liant) : 4 doublets, géométrie **pyramidale**.
- **Radical** : espèce portant un électron non apparié.
- **Stabilité** : un carbocation est plus stable s'il est plus substitué (tertiaire plus stable que secondaire, lui-même plus stable que primaire). Le produit majoritaire passe par l'intermédiaire le plus stable. Exemple : HBr sur le propène donne surtout le 2-bromopropane.

### Catalyseur
- Il intervient dans une étape du mécanisme et est **régénéré** dans une étape suivante. Il n'apparaît pas dans le bilan. Exemple : H⁺ dans l'estérification ou dans la déshydratation d'un alcool.

### Mésomérie
- Certaines molécules ou ions ne sont pas bien décrits par un seul schéma de Lewis. On écrit plusieurs **formes mésomères** qui diffèrent par la position des doublets (pas des atomes), reliées par une flèche à double pointe.
- Exemple : dans l'ion carboxylate R−COO⁻, la charge − est répartie sur les deux atomes d'oxygène ; les deux liaisons C−O ont la même longueur.

### Stéréoisomères
- **Énantiomères** : images l'un de l'autre dans un miroir, non superposables.
- **Diastéréoisomères** : stéréoisomères qui ne sont pas énantiomères. Exemples : isomères Z et E d'un alcène ; molécules à deux carbones asymétriques dont un seul a changé de configuration.
- Les diastéréoisomères ont des **propriétés physiques différentes** (températures de fusion, solubilité) : on peut les séparer. Les énantiomères ont les mêmes propriétés, sauf vis-à-vis de la lumière polarisée et des espèces chirales.
- Un **carbocation plan** peut être attaqué des deux côtés : si le carbone devient asymétrique, on obtient les deux énantiomères en quantités égales.
- **Mélange racémique** : mélange équimolaire de deux énantiomères ; il n'a pas d'activité optique.

### Loi de Biot et excès énantiomérique
- Une solution d'espèce chirale fait tourner le plan de polarisation de la lumière d'un angle α : **α = [α] × ℓ × c**, où [α] est le pouvoir rotatoire spécifique, ℓ la longueur de la cuve (dm) et c la concentration en masse (g·mL⁻¹). Les deux énantiomères ont des [α] opposés.
- **Excès énantiomérique** : **ee = ‖n1 − n2‖ / (n1 + n2)**, égal au rapport α(mélange) / α(énantiomère pur) mesurés dans les mêmes conditions.
- Exemple : un énantiomère pur donne α = +12,0° ; le mélange donne +3,0°. ee = 3,0 / 12,0 = 25 % : 62,5 % de l'énantiomère dextrogyre et 37,5 % de l'autre.

### À retenir pour le bac
- Flèche courbe : d'un doublet vers un site pauvre en électrons.
- Carbocation plan (120°) ; carbanion pyramidal ; carbocation tertiaire le plus stable.
- Énantiomères : propriétés identiques sauf optiques ; diastéréoisomères : séparables.
- ee = α(mélange) / α(pur) ; racémique : α = 0.`,
    cartes: [
      { q: "Substitution", r: "Un atome ou groupe est remplacé par un autre." },
      { q: "Addition", r: "Deux molécules s'unissent ; une liaison double devient simple." },
      { q: "Élimination", r: "Une molécule perd des atomes ; une liaison double se forme." },
      { q: "Signification d'une flèche courbe", r: "Déplacement d'un doublet d'électrons, d'un site riche vers un site pauvre." },
      { q: "Géométrie d'un carbocation", r: "Plane, angles de 120°." },
      { q: "Géométrie d'un carbanion", r: "Pyramidale (quatre doublets autour du carbone)." },
      { q: "Carbocation le plus stable", r: "Le plus substitué (tertiaire)." },
      { q: "Rôle d'un catalyseur dans un mécanisme", r: "Il est consommé puis régénéré ; absent du bilan." },
      { q: "Formes mésomères", r: "Schémas de Lewis qui ne diffèrent que par la position des doublets." },
      { q: "Diastéréoisomères", r: "Stéréoisomères qui ne sont pas énantiomères ; propriétés physiques différentes." },
      { q: "Mélange racémique", r: "Mélange équimolaire de deux énantiomères, sans activité optique." },
      { q: "Loi de Biot", r: "α = [α] × ℓ × c." },
      { q: "Excès énantiomérique", r: "ee = ‖n1 − n2‖ / (n1 + n2) = α(mélange) / α(pur)." },
    ],
    quiz: [
      { q: "CH3−Br + HO⁻ → CH3−OH + Br⁻ est une réaction :",
        choix: ["d'addition", "d'élimination", "acide-base", "de substitution"],
        bonne: 3, niv: 1,
        expl: "Le brome est remplacé par OH." },
      { q: "D'où part une flèche courbe dans un mécanisme ?",
        choix: ["D'un atome portant une charge +", "D'un doublet d'électrons ou d'une liaison multiple", "D'un atome d'hydrogène sans électron", "Du produit final"],
        bonne: 1, niv: 2,
        expl: "Elle va du site riche vers le site pauvre en électrons." },
      { q: "Quelle est la géométrie d'un carbocation selon la VSEPR ?",
        choix: ["Pyramidale", "Linéaire", "Plane, à 120°", "Tétraédrique, à 109°"],
        bonne: 2, niv: 2,
        expl: "Trois doublets liants autour du carbone, sans doublet non liant." },
      { q: "HBr réagit sur le propène. Quel produit est majoritaire ?",
        choix: ["Le 2-bromopropane", "Le 1-bromopropane", "Le propan-2-ol", "Le bromopropène"],
        bonne: 0, niv: 3,
        expl: "Il passe par le carbocation secondaire, plus stable que le primaire." },
      { q: "Comment reconnaît-on un catalyseur dans un mécanisme ?",
        choix: ["Il apparaît dans le bilan comme réactif", "Il est un intermédiaire chargé", "Il se forme à la dernière étape", "Il est consommé dans une étape puis régénéré"],
        bonne: 3, niv: 2,
        expl: "Il n'apparaît pas dans l'équation bilan." },
      { q: "Que peut-on dire de deux diastéréoisomères ?",
        choix: ["Ils sont images l'un de l'autre dans un miroir", "Ils ont des pouvoirs rotatoires opposés", "Ils ont des propriétés physiques différentes", "Ils sont superposables"],
        bonne: 2, niv: 2,
        expl: "On peut donc les séparer par un procédé physique." },
      { q: "Une attaque se fait des deux côtés d'un carbocation plan et crée un carbone asymétrique. Qu'obtient-on ?",
        choix: ["Un seul énantiomère", "Un mélange racémique des deux énantiomères", "Deux diastéréoisomères en quantités différentes", "Un produit sans carbone asymétrique"],
        bonne: 1, niv: 3,
        expl: "Les deux faces sont équivalentes." },
      { q: "Un énantiomère pur donne α = +12,0° et le mélange +3,0°. Que vaut l'excès énantiomérique ?",
        choix: ["25 %", "33 %", "75 %", "300 %"],
        bonne: 0, niv: 2,
        expl: "ee = 3,0 / 12,0." },
      { q: "Avec ee = 25 %, quelle est la proportion de l'énantiomère majoritaire ?",
        choix: ["25 %", "75 %", "50 %", "62,5 %"],
        bonne: 3, niv: 3,
        expl: "(1 + 0,25) / 2 = 0,625." },
      { q: "Quelle est l'activité optique d'un mélange racémique ?",
        choix: ["Elle est maximale", "Elle est nulle", "Elle dépend de la couleur de la solution", "Elle vaut le double de celle d'un énantiomère"],
        bonne: 1, niv: 1,
        expl: "Les rotations des deux énantiomères se compensent." },
      { q: "Dans l'ion carboxylate, que montrent les formes mésomères ?",
        choix: ["La charge − est répartie sur les deux atomes d'oxygène", "Les atomes changent de place", "Une liaison C=O est plus longue que l'autre", "L'ion est un radical"],
        bonne: 0, niv: 2,
        expl: "Seuls les doublets changent de position." },
    ] },
  { chapitre: "stl-spcl-10",
    fiche: `## Oscillateurs et résonance

Une onde naît toujours d'une vibration : membrane d'un haut-parleur, quartz d'une montre, circuit électrique. Ce chapitre décrit les oscillateurs mécaniques et électriques, leur amortissement, leur entretien et leur réponse à une excitation (résonance).

### Grandeurs vibratoires
- Une grandeur oscille autour d'une position d'équilibre : position d'une masse, angle d'un pendule, tension aux bornes d'un condensateur, pression dans un tuyau.
- Oscillation **harmonique** : x(t) = Xm × cos(2π t / T0 + φ), avec Xm l'**amplitude**, T0 la **période propre**, f0 = 1/T0 la fréquence propre et φ la phase à l'origine.

### Deux oscillateurs analogues
- **Pendule élastique** (masse m, ressort de raideur k) : **T0 = 2π √(m/k)**.
- **Circuit LC** (bobine L, condensateur C) : **T0 = 2π √(LC)**.
- Analogies : la masse m correspond à l'inductance L, l'inverse de la raideur 1/k à la capacité C, la position x à la charge q, la vitesse à l'intensité i. Le frottement correspond à la résistance R.
- Exemple : m = 0,20 kg et k = 20 N·m⁻¹ : T0 = 2π √0,010 ≈ 0,63 s.

### Aspects énergétiques
- Pendule élastique : l'énergie passe sans cesse de la forme **cinétique** (½ m v²) à la forme **potentielle élastique** (½ k x²). Sans frottement, leur somme (énergie mécanique) est constante.
- Circuit LC : échanges entre l'énergie stockée dans le **condensateur** (½ C u²) et dans la **bobine** (½ L i²).
- Avec frottements ou résistance, l'énergie totale **diminue** : elle est dissipée par transfert thermique.

### Oscillations libres amorties
- **Pseudo-périodique** (amortissement faible) : l'amplitude décroît, la grandeur oscille avec une **pseudo-période** T proche de T0.
- **Apériodique** (amortissement fort) : la grandeur revient à l'équilibre sans osciller.
- **Critique** : cas limite, retour à l'équilibre le plus rapide sans oscillation.
- **Temps caractéristique d'amortissement** τ : durée au bout de laquelle l'amplitude est divisée par e (environ 37 % de la valeur initiale) pour une décroissance exponentielle.
- Mesure de T : on mesure la durée de plusieurs oscillations et on divise (exemple : 10 pseudo-périodes en 6,4 s donnent T = 0,64 s), ce qui réduit l'incertitude.

### Oscillations entretenues
- Un **dispositif d'entretien** fournit à chaque oscillation l'énergie perdue (ressort d'une horloge, échappement, amplificateur dans un circuit électrique). L'oscillateur garde alors une amplitude constante à sa fréquence propre : c'est une **source de signal** (quartz, horloge).

### Oscillations forcées et résonance
- Un **excitateur** impose sa fréquence f au **résonateur**. En régime permanent, le résonateur oscille à la fréquence de l'excitateur.
- L'amplitude passe par un **maximum** quand f est proche de la fréquence propre f0 : c'est la **résonance**, à la fréquence de résonance fr ≈ f0.
- **Bande passante** : intervalle de fréquences où l'amplitude dépasse Amax / √2, de largeur Δf.
- **Facteur de qualité** : **Q = fr / Δf**. Exemple : fr = 1 000 Hz et Δf = 50 Hz donnent Q = 20.
- Plus l'amortissement est faible, plus la résonance est **aiguë** et Q grand ; un amortissement fort donne une résonance floue (Q petit).
- Applications : caisse de résonance d'un instrument, sélection d'une station de radio (circuit résonant), mais aussi dangers (pont qui entre en résonance, vibrations de machine).

### Exploiter un enregistrement
- On lit l'amplitude et la période sur le graphe, on vérifie si la décroissance est exponentielle, on en déduit τ ; on peut ajuster un modèle mathématique avec un logiciel.

### À retenir pour le bac
- T0 = 2π √(m/k) ; T0 = 2π √(LC).
- Pseudo-périodique, critique, apériodique selon l'amortissement.
- Résonance quand f est proche de f0 ; Q = fr / Δf.
- Faible amortissement : résonance aiguë.`,
    cartes: [
      { q: "Période propre d'un pendule élastique", r: "T0 = 2π √(m/k)." },
      { q: "Période propre d'un circuit LC", r: "T0 = 2π √(LC)." },
      { q: "Grandeur électrique analogue à la masse", r: "L'inductance L." },
      { q: "Énergie potentielle élastique", r: "½ k x²." },
      { q: "Énergie stockée dans un condensateur", r: "½ C u²." },
      { q: "Régime pseudo-périodique", r: "Oscillations dont l'amplitude diminue." },
      { q: "Régime apériodique", r: "Retour à l'équilibre sans oscillation." },
      { q: "Temps caractéristique d'amortissement", r: "Durée pour que l'amplitude soit divisée par e (environ 37 %)." },
      { q: "Rôle d'un dispositif d'entretien", r: "Compenser l'énergie perdue à chaque oscillation." },
      { q: "Résonance", r: "Amplitude maximale quand la fréquence d'excitation est proche de la fréquence propre." },
      { q: "Facteur de qualité", r: "Q = fr / Δf." },
      { q: "Lien entre amortissement et résonance", r: "Faible amortissement : résonance aiguë et Q grand." },
      { q: "Pourquoi mesurer plusieurs périodes d'un coup ?", r: "Pour réduire l'incertitude sur la période." },
    ],
    quiz: [
      { q: "m = 0,20 kg et k = 20 N·m⁻¹. Quelle est la période propre du pendule élastique ?",
        choix: ["0,10 s", "0,63 s", "0,063 s", "0,20 s"],
        bonne: 1, niv: 2,
        expl: "T0 = 2π √(0,20/20) = 2π × 0,10." },
      { q: "Quelle grandeur mécanique correspond à la capacité C dans l'analogie avec le circuit LC ?",
        choix: ["La masse m", "La vitesse v", "x, la position", "1/k, l'inverse de la raideur"],
        bonne: 3, niv: 3,
        expl: "La masse correspond à L, et 1/k à C." },
      { q: "Un oscillateur revient à l'équilibre sans osciller. Quel est son régime ?",
        choix: ["Pseudo-périodique", "Apériodique", "Harmonique", "Entretenu"],
        bonne: 1, niv: 1,
        expl: "L'amortissement est fort." },
      { q: "Sur un enregistrement, 10 pseudo-périodes durent 6,4 s. Que vaut T ?",
        choix: ["0,64 s", "6,4 s", "64 s", "0,16 s"],
        bonne: 0, niv: 1,
        expl: "T = 6,4 / 10." },
      { q: "Que devient l'énergie mécanique d'un pendule amorti ?",
        choix: ["Elle reste constante", "Elle diminue, dissipée par transfert thermique", "Elle augmente", "Elle se transforme en énergie chimique"],
        bonne: 1, niv: 1,
        expl: "Les frottements dissipent l'énergie." },
      { q: "À quoi sert un dispositif d'entretien ?",
        choix: ["À compenser l'énergie perdue à chaque oscillation", "À augmenter la fréquence propre", "À supprimer la période", "À amortir les oscillations"],
        bonne: 0, niv: 2,
        expl: "L'amplitude reste alors constante." },
      { q: "En oscillations forcées, à quelle fréquence oscille le résonateur en régime permanent ?",
        choix: ["À sa fréquence propre", "Au double de la fréquence propre", "À une fréquence nulle", "À la fréquence de l'excitateur"],
        bonne: 3, niv: 2,
        expl: "Il suit l'excitateur ; l'amplitude dépend de l'écart à f0." },
      { q: "fr = 1 000 Hz et Δf = 50 Hz. Que vaut le facteur de qualité ?",
        choix: ["0,050", "20", "5,0", "2,0"],
        bonne: 1, niv: 2,
        expl: "Q = fr / Δf = 1 000 / 50." },
      { q: "Comment évolue la résonance quand l'amortissement diminue ?",
        choix: ["Elle disparaît", "Elle devient plus floue", "Elle devient plus aiguë", "Elle se décale vers zéro"],
        bonne: 2, niv: 2,
        expl: "La bande passante se rétrécit et Q augmente." },
      { q: "Au bout d'une durée τ, quelle fraction de l'amplitude initiale reste-t-il (décroissance exponentielle) ?",
        choix: ["Environ 63 %", "50 %", "Environ 37 %", "10 %"],
        bonne: 2, niv: 3,
        expl: "e⁻¹ ≈ 0,37." },
      { q: "Dans un circuit LC, entre quelles formes l'énergie s'échange-t-elle ?",
        choix: ["Entre la bobine et le générateur", "Entre la résistance et le condensateur", "Entre la lumière et la chaleur", "Entre le condensateur et la bobine"],
        bonne: 3, niv: 2,
        expl: "½ C u² et ½ L i² s'échangent." },
    ] },
  { chapitre: "stl-spcl-11",
    fiche: `## Ondes progressives, sons et ondes stationnaires

Une onde transporte de l'énergie sans transporter de matière. Ce chapitre réunit les ondes mécaniques : leur propagation, la diffraction, les sons, et les ondes stationnaires des instruments de musique et des cordes (le fil de pêche du bac 2026 Polynésie).

### Onde progressive
- Une **onde mécanique progressive** est la propagation d'une perturbation dans un milieu matériel, sans transport de matière.
- **Transversale** : le milieu vibre perpendiculairement à la propagation (corde). **Longitudinale** : le milieu vibre dans la direction de propagation (son, ressort comprimé).
- **Retard** : un point situé à la distance d de la source reproduit son mouvement avec un retard **τ = d / v**, v étant la célérité.

### Onde progressive sinusoïdale
- **Période** T (durée d'une vibration), **fréquence** f = 1/T, **longueur d'onde** λ (distance parcourue pendant T, plus petite distance entre deux points vibrant en phase), **amplitude**.
- **λ = v × T = v / f**.
- Double périodicité : dans le temps (période T) et dans l'espace (période λ).
- La **puissance moyenne** transportée est proportionnelle au **carré de l'amplitude**.
- Exemple : ultrasons à 3,5 MHz dans les tissus (v = 1 540 m·s⁻¹) : λ = 1 540 / 3,5 × 10⁶ = 4,4 × 10⁻⁴ m.

### Spectre d'une onde périodique
- Une onde périodique non sinusoïdale est une somme de sinusoïdes : le **fondamental** (fréquence f1, celle de l'onde) et les **harmoniques** de fréquences fn = n × f1.
- Une **composante de fréquence nulle** correspond à la valeur moyenne du signal (décalage).

### Diffraction
- Une onde qui rencontre une ouverture ou un obstacle de taille a est diffractée ; le phénomène est important quand **a est de l'ordre de λ ou plus petit**.
- **Demi-angle d'ouverture** : **θ = λ / a** (θ en radians). Plus a est petit ou λ grand, plus la diffraction est marquée.

### Ondes sonores
- Le son est une onde **longitudinale** de surpression, qui a besoin d'un milieu matériel.
- Célérité : environ **340 m·s⁻¹ dans l'air**, 1 500 m·s⁻¹ dans l'eau, 5 000 m·s⁻¹ dans l'acier. Elle augmente avec la température dans un gaz.
- Domaine audible : **20 Hz à 20 kHz** ; au-delà, **ultrasons** ; en dessous, **infrasons**.
- **Hauteur** : liée à la fréquence du fondamental. **Timbre** : lié aux harmoniques (spectre). Un **son pur** n'a qu'une fréquence ; un son complexe en a plusieurs.
- **Niveau d'intensité sonore** : **L = 10 log(I / I0)**, avec I0 = 1,0 × 10⁻¹² W·m⁻². Multiplier I par 10 ajoute 10 dB ; doubler I ajoute environ 3 dB.

### Ondes stationnaires
- Elles résultent de la **superposition** de deux ondes progressives de même fréquence se propageant en sens inverses (onde incidente et onde réfléchie). Elles ne se propagent pas.
- **Nœuds** (amplitude nulle) et **ventres** (amplitude maximale). Deux nœuds consécutifs sont distants de **λ/2**.
- **Corde fixée aux deux bouts**, de longueur L : **L = n × λ/2**, donc **fn = n × v / (2L)**.
- Exemple (bac 2026 Polynésie) : L = 3,20 m et 4 fuseaux à 50 Hz : λ = 2L/4 = 1,60 m, v = λ × f = 80 m·s⁻¹.
- **Célérité sur une corde** : **v = √(T/μ)**, avec T la tension (N) et μ la masse linéique (kg·m⁻¹). Donc μ = T / v². Exemple : masse de 100 g, T = 0,981 N et v = 80 m·s⁻¹ : μ = 1,5 × 10⁻⁴ kg·m⁻¹.
- **Colonne d'air** ouverte aux deux bouts : ventres aux extrémités, **fn = n × v / (2L)**. Ouverte à un bout et fermée à l'autre : nœud au bout fermé, **fn = (2n − 1) × v / (4L)** (harmoniques impairs seulement).
- **Instruments** : la corde (guitare) ou la colonne d'air (flûte) vibre selon ses **modes propres** ; la caisse ou le pavillon transmet le son à l'air.

### À retenir pour le bac
- λ = v / f ; retard τ = d / v.
- θ = λ / a.
- L = 10 log(I/I0).
- Nœuds distants de λ/2 ; corde : fn = n v / (2L) ; v = √(T/μ).`,
    cartes: [
      { q: "Onde transversale", r: "Le milieu vibre perpendiculairement à la direction de propagation." },
      { q: "Onde longitudinale", r: "Le milieu vibre dans la direction de propagation." },
      { q: "Retard d'un point situé à la distance d", r: "τ = d / v." },
      { q: "Relation entre longueur d'onde, célérité et fréquence", r: "λ = v / f." },
      { q: "Fréquence des harmoniques", r: "fn = n × f1." },
      { q: "Demi-angle de diffraction", r: "θ = λ / a, en radians." },
      { q: "Célérité du son dans l'air", r: "Environ 340 m·s⁻¹." },
      { q: "Domaine des ultrasons", r: "Fréquences supérieures à 20 kHz." },
      { q: "Niveau d'intensité sonore", r: "L = 10 log(I / I0), I0 = 1,0 × 10⁻¹² W·m⁻²." },
      { q: "Distance entre deux nœuds consécutifs", r: "λ/2." },
      { q: "Fréquences propres d'une corde fixée aux deux bouts", r: "fn = n × v / (2L)." },
      { q: "Célérité d'une onde sur une corde tendue", r: "v = √(T/μ)." },
      { q: "Grandeur liée au timbre d'un son", r: "Le spectre (les harmoniques)." },
    ],
    quiz: [
      { q: "Ultrasons de 3,5 MHz dans un tissu où v = 1 540 m·s⁻¹. Quelle est leur longueur d'onde ?",
        choix: ["5,4 × 10⁹ m", "2,3 × 10³ m", "4,4 × 10⁻⁴ m", "4,4 m"],
        bonne: 2, niv: 2,
        expl: "λ = v / f = 1 540 / 3,5 × 10⁶." },
      { q: "Le son est une onde :",
        choix: ["transversale, qui se propage dans le vide", "électromagnétique", "longitudinale, plus rapide dans l'air que dans l'acier", "longitudinale, qui a besoin d'un milieu matériel"],
        bonne: 3, niv: 1,
        expl: "Il se propage par compressions et dilatations du milieu." },
      { q: "Une corde de 3,20 m vibre en 4 fuseaux. Quelle est la longueur d'onde ?",
        choix: ["0,80 m", "1,60 m", "0,40 m", "1,28 m"],
        bonne: 1, niv: 2,
        expl: "L = 4 × λ/2, donc λ = 2L/4." },
      { q: "λ = 1,60 m et f = 50 Hz. Quelle est la célérité de l'onde sur la corde ?",
        choix: ["80 m·s⁻¹", "31 m·s⁻¹", "0,032 m·s⁻¹", "800 m·s⁻¹"],
        bonne: 0, niv: 1,
        expl: "v = λ × f." },
      { q: "v = √(T/μ). Comment exprimer la masse linéique μ ?",
        choix: ["μ = T × v²", "μ = T / v²", "μ = v² / T", "μ = √(T) / v"],
        bonne: 1, niv: 2,
        expl: "On élève au carré : v² = T/μ." },
      { q: "Quelle caractéristique d'un son est liée à la fréquence du fondamental ?",
        choix: ["Le timbre", "La hauteur", "Le niveau sonore", "La célérité"],
        bonne: 1, niv: 1,
        expl: "Le timbre dépend des harmoniques." },
      { q: "L'intensité sonore est multipliée par 10. De combien augmente le niveau sonore ?",
        choix: ["De 1 dB", "De 100 dB", "De 3 dB", "De 10 dB"],
        bonne: 3, niv: 2,
        expl: "10 log(10) = 10 dB ; 3 dB correspond à un doublement." },
      { q: "Une onde de longueur d'onde 650 nm traverse une fente de 0,10 mm. Que vaut le demi-angle de diffraction ?",
        choix: ["6,5 × 10³ rad", "1,5 × 10⁻⁴ rad", "6,5 × 10⁻³ rad", "0,65 rad"],
        bonne: 2, niv: 3,
        expl: "θ = λ / a = 650 × 10⁻⁹ / 1,0 × 10⁻⁴." },
      { q: "Comment obtient-on une onde stationnaire sur une corde ?",
        choix: ["Avec une corde libre aux deux bouts", "En arrêtant le vibreur", "Avec un seul train d'onde", "Par superposition de l'onde incidente et de l'onde réfléchie"],
        bonne: 3, niv: 2,
        expl: "Deux ondes de même fréquence se propagent en sens inverses." },
      { q: "Une colonne d'air ouverte à un bout et fermée à l'autre émet quelles fréquences ?",
        choix: ["Les harmoniques pairs et impairs", "Les harmoniques pairs", "Une seule fréquence", "Le fondamental et les harmoniques impairs"],
        bonne: 3, niv: 3,
        expl: "fn = (2n − 1) v / (4L)." },
      { q: "Comment la puissance transportée par une onde dépend-elle de son amplitude ?",
        choix: ["Elle est proportionnelle à l'amplitude", "Elle est indépendante de l'amplitude", "Elle est proportionnelle au carré de l'amplitude", "Elle diminue quand l'amplitude augmente"],
        bonne: 2, niv: 2,
        expl: "Doubler l'amplitude quadruple la puissance." },
    ] },
  { chapitre: "stl-spcl-12",
    fiche: `## Ondes électromagnétiques, rayonnement et photométrie

La lumière, les ondes radio, les rayons X sont des ondes électromagnétiques. Ce chapitre les situe, explique comment un corps chaud rayonne (lois de Wien et de Stefan) et distingue les grandeurs énergétiques (en watts) des grandeurs photométriques (en lumens et en lux, liées à l'œil). Le calcul d'éclairement et de durée d'exposition à un laser est déjà vu en physique-chimie et mathématiques ; il est simplement rappelé ici.

### Propagation et spectre
- Une onde électromagnétique se propage **dans le vide** à **c = 3,00 × 10⁸ m·s⁻¹**.
- Dans un milieu transparent, elle va moins vite : **v = c / n**, n étant l'**indice de réfraction** (n = 1,33 pour l'eau, environ 1,5 pour le verre).
- Domaines, des grandes aux petites longueurs d'onde : **ondes radio**, micro-ondes, **infrarouge**, **visible (400 à 800 nm)**, **ultraviolet**, **rayons X**, **rayons gamma**.
- Plus λ est petite, plus le photon est énergétique : **E = h × f = h × c / λ**.

### Effets sur la matière
- Rayons X et gamma : **ionisants**, ils peuvent casser des molécules (ADN) : radioprotection nécessaire.
- Ultraviolets : coups de soleil, vieillissement de la peau, cancers ; mais aussi stérilisation de l'eau.
- Infrarouge : échauffement. Micro-ondes : chauffage des aliments (agitation des molécules d'eau).
- On exploite des documents pour repérer les risques et les protections.

### Sources lumineuses
- **Laser** : lumière monochromatique, directive (faisceau peu divergent), concentrant beaucoup de puissance sur une petite surface.
- Rappel : éclairement **E = Φ / S** (en W·m⁻²) ; énergie reçue **W = Φ × Δt**. Exemple : un pointeur de 5 mW dont la tache a 6 mm de diamètre à 3 m (calcul demandé au bac 2026 Polynésie, avec d'autres valeurs) donne E ≈ 5 × 10⁻³ / (π × 0,003²) ≈ 180 W·m⁻², du même ordre que le soleil (environ 1 000 W·m⁻²) mais concentré sur la rétine.
- **Corps chaud** (filament, Soleil, étoile) : spectre continu, qui dépend de la température.

### Lois du rayonnement thermique
- **Loi de Wien** : la longueur d'onde du maximum d'émission est inversement proportionnelle à la température : **λmax × T = 2,90 × 10⁻³ m·K** (T en kelvins).
- Exemple : le Soleil émet au maximum vers 500 nm : T = 2,90 × 10⁻³ / 5,00 × 10⁻⁷ = 5 800 K.
- Un corps plus chaud émet à des longueurs d'onde plus courtes : un métal chauffé passe du rouge au blanc.
- **Loi de Stefan** : la puissance rayonnée par unité de surface est proportionnelle à **T⁴** : P/S = σ T⁴, σ = 5,67 × 10⁻⁸ W·m⁻²·K⁻⁴. Doubler la température multiplie la puissance rayonnée par 16.
- On peut **déterminer une température** à partir du spectre d'émission (position du maximum).

### Grandeurs énergétiques et photométriques
- **Grandeurs énergétiques** : flux énergétique Φ en **watts**, éclairement énergétique en **W·m⁻²**. Elles comptent toute l'énergie, quelle que soit la longueur d'onde.
- **Grandeurs photométriques** : elles tiennent compte de la **sensibilité de l'œil**, maximale vers **555 nm** (vert-jaune) et nulle hors du visible. Flux lumineux en **lumens (lm)**, éclairement lumineux en **lux (lx)** : 1 lx = 1 lm·m⁻².
- Repères : bureau, environ 500 lx ; plein soleil, environ 100 000 lx.

### Caractéristiques d'une lampe
- **Flux lumineux** (en lm) : quantité de lumière émise.
- **Efficacité lumineuse** = flux lumineux / puissance électrique, en **lm·W⁻¹**. Exemple : une lampe à LED de 9 W qui émet 810 lm a une efficacité de 90 lm·W⁻¹ ; une lampe à incandescence n'atteint que 10 à 15 lm·W⁻¹.
- **Température de couleur** (en K) : 2 700 K pour une lumière « chaude » (jaune-orangé), 6 500 K pour une lumière « froide » (bleutée).

### À retenir pour le bac
- c = 3,00 × 10⁸ m·s⁻¹ ; v = c/n ; E = hc/λ.
- Wien : λmax × T = 2,90 × 10⁻³ m·K ; Stefan : puissance en T⁴.
- W et W·m⁻² (énergétique) ; lm et lx (photométrique, liées à l'œil).
- Efficacité lumineuse = lm / W.`,
    cartes: [
      { q: "Célérité de la lumière dans le vide", r: "c = 3,00 × 10⁸ m·s⁻¹." },
      { q: "Célérité dans un milieu d'indice n", r: "v = c / n." },
      { q: "Domaine du visible", r: "400 à 800 nm environ." },
      { q: "Rayonnements ionisants", r: "Rayons X et gamma." },
      { q: "Loi de Wien", r: "λmax × T = 2,90 × 10⁻³ m·K." },
      { q: "Loi de Stefan", r: "Puissance rayonnée par unité de surface proportionnelle à T⁴." },
      { q: "Unité du flux lumineux", r: "Le lumen (lm)." },
      { q: "Unité de l'éclairement lumineux", r: "Le lux (lx) = lm·m⁻²." },
      { q: "Longueur d'onde où l'œil est le plus sensible", r: "Vers 555 nm." },
      { q: "Efficacité lumineuse d'une lampe", r: "Flux lumineux / puissance électrique, en lm·W⁻¹." },
      { q: "Température de couleur d'une lumière chaude", r: "Environ 2 700 K." },
      { q: "Différence entre grandeurs énergétiques et photométriques", r: "Les photométriques tiennent compte de la sensibilité de l'œil." },
      { q: "Éclairement énergétique", r: "E = Φ / S, en W·m⁻²." },
    ],
    quiz: [
      { q: "La lumière se propage dans l'eau (n = 1,33). Quelle est sa célérité ?",
        choix: ["3,99 × 10⁸ m·s⁻¹", "3,00 × 10⁸ m·s⁻¹", "1,33 × 10⁸ m·s⁻¹", "2,26 × 10⁸ m·s⁻¹"],
        bonne: 3, niv: 2,
        expl: "v = c / n = 3,00 × 10⁸ / 1,33." },
      { q: "Classer par énergie de photon croissante :",
        choix: ["Ultraviolet, visible, infrarouge", "Infrarouge, visible, ultraviolet", "Visible, infrarouge, ultraviolet", "Rayons X, visible, radio"],
        bonne: 1, niv: 2,
        expl: "L'énergie augmente quand λ diminue." },
      { q: "Le maximum d'émission d'une étoile est à 500 nm. Quelle est sa température de surface ?",
        choix: ["580 K", "1,45 × 10⁻⁹ K", "5 800 K", "1 450 K"],
        bonne: 2, niv: 2,
        expl: "T = 2,90 × 10⁻³ / 5,00 × 10⁻⁷." },
      { q: "La température d'un corps double. Par combien est multipliée la puissance qu'il rayonne ?",
        choix: ["Par 2", "Par 4", "Par 8", "Par 16"],
        bonne: 3, niv: 3,
        expl: "Loi de Stefan : 2⁴ = 16." },
      { q: "Quand on chauffe davantage un métal, la couleur émise passe :",
        choix: ["du bleu au rouge", "du rouge au blanc", "du blanc au rouge", "du vert au violet"],
        bonne: 1, niv: 2,
        expl: "λmax diminue quand T augmente (loi de Wien)." },
      { q: "Quelle est l'unité de l'éclairement lumineux ?",
        choix: ["Le watt", "Le lux", "Le lumen", "Le W·m⁻²"],
        bonne: 1, niv: 1,
        expl: "Le W·m⁻² est l'unité de l'éclairement énergétique." },
      { q: "Une lampe à LED de 9 W émet 810 lm. Quelle est son efficacité lumineuse ?",
        choix: ["7 290 lm·W⁻¹", "0,011 lm·W⁻¹", "90 lm·W⁻¹", "819 lm·W⁻¹"],
        bonne: 2, niv: 2,
        expl: "810 / 9 = 90." },
      { q: "Pourquoi les grandeurs photométriques diffèrent-elles des grandeurs énergétiques ?",
        choix: ["Elles mesurent la chaleur émise", "Elles ne concernent que les lasers", "Elles s'expriment en joules", "Elles tiennent compte de la sensibilité de l'œil"],
        bonne: 3, niv: 2,
        expl: "L'œil est surtout sensible vers 555 nm." },
      { q: "Une lampe a une température de couleur de 6 500 K. Sa lumière paraît :",
        choix: ["chaude, orangée", "rouge", "infrarouge", "froide, bleutée"],
        bonne: 3, niv: 2,
        expl: "Plus la température de couleur est haute, plus la lumière est bleutée." },
      { q: "Quels rayonnements peuvent casser des molécules et nécessitent une radioprotection ?",
        choix: ["Les rayons X et gamma", "Les ondes radio", "Les micro-ondes", "L'infrarouge lointain"],
        bonne: 0, niv: 1,
        expl: "Ce sont des rayonnements ionisants." },
      { q: "Un laser de 5,0 mW éclaire une tache de 2,8 × 10⁻⁵ m². Quel est l'éclairement énergétique ?",
        choix: ["1,8 × 10² W·m⁻²", "1,4 × 10⁻⁷ W·m⁻²", "5,6 × 10⁻³ W·m⁻²", "1,8 × 10⁵ W·m⁻²"],
        bonne: 0, niv: 3,
        expl: "E = 5,0 × 10⁻³ / 2,8 × 10⁻⁵ ≈ 180 W·m⁻²." },
    ] },
  { chapitre: "stl-spcl-13",
    fiche: `## Des ondes pour mesurer

Au laboratoire, les ondes servent d'instruments de mesure : un indice de réfraction, une concentration (polarimétrie), la taille d'un objet (diffraction), une longueur d'onde (réseau), une vitesse (effet Doppler). Le diamètre d'un fil de pêche mesuré par diffraction (bac 2026 Polynésie) en est un exemple.

### Réfraction
- **Indice de réfraction** : n = c / v (sans unité, supérieur ou égal à 1).
- **Lois de Snell-Descartes** : le rayon réfléchi et le rayon réfracté sont dans le plan d'incidence ; réflexion : i' = i ; réfraction : **n1 × sin(i1) = n2 × sin(i2)** (angles mesurés par rapport à la normale).
- Exemple : de l'air (n = 1,00) vers le verre (n = 1,50) avec i1 = 30° : sin(i2) = 0,5/1,5 = 0,333, i2 ≈ 19,5°. Le rayon se rapproche de la normale.

### Angle limite et réflexion totale
- Passage d'un milieu plus réfringent vers un milieu moins réfringent (n1 > n2) : le rayon s'écarte de la normale.
- **Angle limite** : **sin(ilim) = n2 / n1**. Exemple : verre (1,50) vers air : ilim ≈ 41,8°.
- Si **i1 > ilim**, il n'y a plus de rayon réfracté : **réflexion totale**. Applications : fibre optique, prismes à réflexion totale, mesure d'indice au réfractomètre.

### Polarisation
- La lumière est une onde transversale : la direction de **polarisation** est celle du **champ électrique**.
- **Lumière naturelle** (soleil, lampe) : non polarisée. Un **polariseur** la rend polarisée rectilignement et divise son intensité par 2.
- Une lumière polarisée rectilignement traverse un **analyseur** : intensité maximale si les directions sont parallèles, **extinction** si elles sont croisées (à 90°).
- Exemples de lumière partiellement polarisée : reflets sur l'eau ou sur une vitre, lumière bleue du ciel. Les lunettes polarisantes atténuent les reflets.

### Activité optique et polarimétrie
- Une solution d'espèce **chirale** fait tourner le plan de polarisation : elle est **optiquement active** (dextrogyre si α > 0, lévogyre si α < 0).
- **Loi de Biot** : **α = [α] × ℓ × c**. À ℓ et [α] connus, mesurer α donne la concentration c.
- Exemple : saccharose, [α] = +66,5 °·dm⁻¹·g⁻¹·mL, ℓ = 2,00 dm, α = +13,3° : c = 13,3 / (66,5 × 2,00) = 0,100 g·mL⁻¹.

### Diffraction : mesurer une taille
- θ = λ / a et, sur un écran à la distance D, tan θ ≈ θ = (L/2) / D, L étant la largeur de la tache centrale.
- D'où **a = 2λD / L**. Exemple (bac 2026 Polynésie) : λ = 650 nm, D = 1,60 m, L = 2,05 cm : a ≈ 1,01 × 10⁻⁴ m, soit environ 0,10 mm.
- Un objet plus fin donne une tache plus large.

### Interférences et réseaux
- Deux ondes **synchrones** (même fréquence, déphasage constant) se superposent : en certains points l'amplitude est renforcée, en d'autres annulée.
- On raisonne sur le **retard** τ d'une onde par rapport à l'autre (ou la différence de marche δ = v × τ) :
- **interférences constructives** si δ = k × λ (τ multiple de T) ;
- **interférences destructives** si δ = (k + ½) × λ.
- **Fentes d'Young** (distance b entre fentes, écran à D) : interfrange **i = λ D / b**.
- **Réseau** : grand nombre de fentes parallèles de **pas a** (distance entre deux traits). Il donne des maxima très fins et lumineux, plus faciles à repérer qu'avec deux fentes. **Formule des réseaux** (incidence normale) : **sin θk = k × λ / a**.
- Exemple : réseau de 500 traits par mm (a = 2,0 µm), λ = 589 nm : sin θ1 = 0,2945, θ1 ≈ 17°.
- **Spectrophotomètre à réseau** : le réseau disperse la lumière blanche ; une fente sélectionne une étroite bande de longueurs d'onde envoyée sur la cuve.

### Effet Doppler
- Quand la source et le récepteur se rapprochent, la fréquence reçue est **plus grande** que la fréquence émise ; quand ils s'éloignent, elle est **plus petite**.
- Décalage (vitesse u petite devant la célérité v de l'onde) : **Δf = fR − fE ≈ fE × u / v** (signe selon le sens). Pour une onde réfléchie par une cible mobile (radar, Doppler sanguin), le décalage est doublé : Δf ≈ 2 fE u / v.
- Exemple : sirène de 440 Hz qui se rapproche à 20 m·s⁻¹ (v = 340 m·s⁻¹) : Δf ≈ 440 × 20 / 340 ≈ 26 Hz, on entend environ 466 Hz.

### À retenir pour le bac
- n1 sin(i1) = n2 sin(i2) ; sin(ilim) = n2/n1 ; réflexion totale si i > ilim.
- Polariseur et analyseur croisés : extinction.
- α = [α] ℓ c ; a = 2λD/L.
- Constructives : δ = kλ ; réseau : sin θ = kλ/a ; Doppler : fréquence plus grande si rapprochement.`,
    cartes: [
      { q: "Indice de réfraction", r: "n = c / v." },
      { q: "Loi de la réfraction", r: "n1 sin(i1) = n2 sin(i2)." },
      { q: "Angle limite de réfraction", r: "sin(ilim) = n2 / n1, avec n1 > n2." },
      { q: "Condition de réflexion totale", r: "Passage vers un milieu moins réfringent avec i1 > ilim." },
      { q: "Direction de polarisation", r: "Celle du champ électrique." },
      { q: "Polariseur et analyseur croisés", r: "Extinction de la lumière." },
      { q: "Espèce optiquement active", r: "Espèce chirale qui fait tourner le plan de polarisation." },
      { q: "Diamètre d'un fil par diffraction", r: "a = 2λD / L." },
      { q: "Condition d'interférences constructives", r: "Différence de marche δ = k × λ." },
      { q: "Condition d'interférences destructives", r: "δ = (k + ½) × λ." },
      { q: "Formule des réseaux en incidence normale", r: "sin θk = k × λ / a." },
      { q: "Intérêt d'un réseau", r: "Des maxima plus fins et plus lumineux qu'avec deux fentes." },
      { q: "Effet Doppler quand la source se rapproche", r: "La fréquence reçue est plus grande que la fréquence émise." },
    ],
    quiz: [
      { q: "Un rayon passe de l'air (1,00) au verre (1,50) avec i1 = 30°. Que vaut i2 ?",
        choix: ["Environ 48,6°", "Environ 19,5°", "30°", "Environ 45°"],
        bonne: 1, niv: 2,
        expl: "sin(i2) = sin(30°)/1,50 = 0,333." },
      { q: "Quel est l'angle limite pour un passage du verre (1,50) vers l'air ?",
        choix: ["Environ 41,8°", "Environ 33,7°", "Environ 56,3°", "90°"],
        bonne: 0, niv: 2,
        expl: "sin(ilim) = 1,00/1,50." },
      { q: "Dans quel cas peut-il y avoir réflexion totale ?",
        choix: ["Quand la lumière va vers un milieu moins réfringent, au-delà de l'angle limite", "Quand la lumière passe de l'air à l'eau", "Quand l'incidence est nulle", "Quand les deux milieux ont le même indice"],
        bonne: 0, niv: 2,
        expl: "Il faut n1 > n2 et i1 > ilim." },
      { q: "Une lumière polarisée rectilignement traverse un analyseur tourné de 90°. Qu'observe-t-on ?",
        choix: ["Une intensité maximale", "Des couleurs irisées", "L'extinction", "Une intensité doublée"],
        bonne: 2, niv: 1,
        expl: "Polariseur et analyseur sont croisés." },
      { q: "Saccharose : [α] = 66,5 °·dm⁻¹·g⁻¹·mL, ℓ = 2,00 dm, α = 13,3°. Quelle est la concentration ?",
        choix: ["1 769 g·mL⁻¹", "10,0 g·mL⁻¹", "0,0500 g·mL⁻¹", "0,100 g·mL⁻¹"],
        bonne: 3, niv: 3,
        expl: "c = α / ([α] × ℓ)." },
      { q: "λ = 650 nm, D = 1,60 m, L = 2,05 cm. Quel est le diamètre du fil ?",
        choix: ["1,01 × 10⁻⁴ m", "5,07 × 10⁻⁵ m", "1,01 × 10⁻² m", "2,0 × 10⁻⁴ m"],
        bonne: 0, niv: 2,
        expl: "a = 2λD / L = 2 × 650 × 10⁻⁹ × 1,60 / 0,0205." },
      { q: "Un fil plus fin est éclairé par le même laser. Comment est la tache centrale ?",
        choix: ["Plus étroite", "Identique", "Plus large", "Absente"],
        bonne: 2, niv: 1,
        expl: "θ = λ/a augmente quand a diminue." },
      { q: "Deux ondes synchrones ont une différence de marche égale à 2λ. Les interférences sont :",
        choix: ["destructives", "constructives", "impossibles", "intermédiaires"],
        bonne: 1, niv: 2,
        expl: "δ multiple entier de λ." },
      { q: "Un réseau a un pas de 2,0 µm et λ = 589 nm. Quel est l'angle du premier ordre ?",
        choix: ["Environ 17°", "Environ 0,29°", "Environ 3,4°", "Environ 8,5°"],
        bonne: 0, niv: 3,
        expl: "sin θ1 = 589 × 10⁻⁹ / 2,0 × 10⁻⁶ = 0,29." },
      { q: "Une ambulance s'éloigne. La fréquence perçue est :",
        choix: ["plus grande que celle émise", "égale à celle émise", "plus faible que celle émise", "nulle"],
        bonne: 2, niv: 1,
        expl: "Quand la source s'éloigne, la fréquence reçue diminue." },
      { q: "Sirène de 440 Hz qui se rapproche à 20 m·s⁻¹ (son à 340 m·s⁻¹). Quel est le décalage Doppler environ ?",
        choix: ["6,5 Hz", "170 Hz", "26 Hz", "7 480 Hz"],
        bonne: 2, niv: 3,
        expl: "Δf ≈ 440 × 20 / 340." },
    ] },
  { chapitre: "stl-spcl-14",
    fiche: `## Des ondes pour observer : échographie et instruments d'optique

Pour voir ce que l'œil ne peut pas voir (un abcès dans une mamelle, une cellule, une planète), on forme une image avec des ondes. Chaque instrument a un domaine et un pouvoir de résolution, limité par la diffraction. L'échographie d'une mamelle (bac 2026 métropole, 5 points) relève de ce chapitre.

### Échographie
- Une sonde émet de brèves salves d'**ultrasons** (quelques MHz). À chaque interface entre deux tissus, une partie de l'onde est **réfléchie** : c'est l'écho.
- **Distance** : l'onde fait l'aller-retour, donc **d = v × Δt / 2**. Exemple (bac 2026) : v = 1 540 m·s⁻¹ et Δt = 58 µs : d = 1 540 × 58 × 10⁻⁶ / 2 ≈ 4,5 cm. Avec un bord supérieur à 2,0 cm, l'abcès a un diamètre de 2,5 cm.
- **Coefficients de réflexion R et de transmission T** (énergie, incidence normale) : R + T = 1 sans absorption. R est grand quand les deux milieux sont très différents (tissu et air) : on met un **gel** entre la sonde et la peau pour éviter qu'une couche d'air ne réfléchisse presque tout.
- **Absorption** : l'intensité diminue avec la profondeur, et d'autant plus que la fréquence est élevée.
- **Résolution** : on ne distingue pas un détail plus petit que la longueur d'onde. λ = v / f = 1 540 / 3,5 × 10⁶ = 0,44 mm : un abcès de 2,5 cm est largement détectable.
- **Compromis** : une fréquence élevée donne une meilleure résolution mais pénètre moins profondément.
- Intérêts : examen sans rayonnement ionisant, en temps réel, peu coûteux.

### L'œil et le diamètre apparent
- L'**œil emmétrope au repos** voit nettement à l'infini, sans fatigue : un instrument bien réglé donne une image **à l'infini**.
- **Diamètre apparent** : angle sous lequel on voit un objet, α ≈ h / d (en radians, petits angles).
- **Pouvoir séparateur** de l'œil : environ **3 × 10⁻⁴ rad** (1 minute d'arc) ; deux points vus sous un angle plus petit sont confondus.

### Lentilles et relation de conjugaison
- Relation de **Descartes** pour une lentille mince : **1/OA' − 1/OA = 1/f'** (distances algébriques, mesurées depuis le centre optique O).
- **Grandissement** : γ = A'B'/AB = OA'/OA.
- Exemple : f' = 10 cm et objet à OA = −15 cm : 1/OA' = 1/10 − 1/15 = 1/30, OA' = 30 cm, γ = 30/(−15) = −2 (image réelle, renversée, deux fois plus grande).

### Loupe
- Une lentille convergente, l'objet placé **au foyer objet** : l'image est à l'infini.
- **Grossissement commercial** : **Gc = 0,25 / f'** (f' en m, 0,25 m étant la distance minimale de vision nette conventionnelle). Exemple : f' = 5 cm donne Gc = 5.

### Microscope
- Deux lentilles convergentes : l'**objectif** (petite focale) donne une image réelle agrandie de l'objet ; l'**oculaire** joue le rôle d'une loupe et en donne une image à l'infini.
- **Grossissement commercial** : **Gc = ‖γobjectif‖ × Gc,oculaire**. Exemple : objectif ×40 et oculaire ×10 : Gc = 400.
- **Résolution** limitée par la diffraction : environ **0,2 µm** pour un microscope optique ; elle s'améliore quand l'**ouverture numérique** de l'objectif augmente (d ≈ 0,61 λ / ON).
- Le **microscope à force atomique** sonde la surface avec une pointe : résolution de l'ordre du **nanomètre** (et moins), pour observer molécules, polymères, surfaces de matériaux.

### Lunette astronomique
- Objectif de grande focale f'1 et oculaire de petite focale f'2 ; le foyer image de l'objectif coïncide avec le foyer objet de l'oculaire (système **afocal** : objet et image à l'infini).
- **Grossissement** : **G = f'1 / f'2**. Exemple : f'1 = 900 mm, f'2 = 25 mm : G = 36.
- Le pouvoir de résolution s'améliore avec le **diamètre** de l'objectif (diffraction par l'ouverture).

### Miroirs et télescope
- **Miroir plan** : l'image est **virtuelle**, symétrique de l'objet par rapport au miroir.
- **Miroir sphérique convergent** : les rayons parallèles à l'axe convergent au **foyer** F ; l'image d'un objet à l'infini se forme dans son plan focal.
- **Télescope** (type Newton) : miroir concave principal (objectif), petit miroir plan qui renvoie le faisceau sur le côté, oculaire. **G = f'(miroir) / f'(oculaire)**.
- Un télescope peut avoir un très grand diamètre (un miroir est plus facile à fabriquer qu'une grande lentille) : il collecte plus de lumière et a une meilleure résolution.

### À retenir pour le bac
- Échographie : d = v Δt / 2 ; résolution de l'ordre de λ.
- Œil au repos : image à l'infini ; pouvoir séparateur 3 × 10⁻⁴ rad.
- 1/OA' − 1/OA = 1/f' ; loupe : Gc = 0,25/f'.
- Microscope : Gc = ‖γob‖ × Gc,oc ; lunette et télescope : G = f'1 / f'2.`,
    cartes: [
      { q: "Distance mesurée par échographie", r: "d = v × Δt / 2 (aller-retour)." },
      { q: "Rôle du gel en échographie", r: "Éviter la couche d'air qui réfléchirait presque toute l'onde." },
      { q: "Résolution d'une échographie", r: "De l'ordre de la longueur d'onde dans le tissu." },
      { q: "Compromis sur la fréquence en échographie", r: "Fréquence élevée : meilleure résolution mais moins de profondeur." },
      { q: "Où se forme l'image vue par un œil emmétrope au repos ?", r: "À l'infini." },
      { q: "Pouvoir séparateur de l'œil", r: "Environ 3 × 10⁻⁴ rad." },
      { q: "Relation de conjugaison de Descartes", r: "1/OA' − 1/OA = 1/f'." },
      { q: "Grossissement commercial d'une loupe", r: "Gc = 0,25 / f' (f' en m)." },
      { q: "Grossissement commercial d'un microscope", r: "Gc = ‖γobjectif‖ × Gc,oculaire." },
      { q: "Résolution d'un microscope optique", r: "Environ 0,2 µm." },
      { q: "Grossissement d'une lunette astronomique", r: "G = f'1 / f'2." },
      { q: "Image donnée par un miroir plan", r: "Virtuelle, symétrique de l'objet par rapport au miroir." },
      { q: "Résolution d'un microscope à force atomique", r: "De l'ordre du nanomètre." },
    ],
    quiz: [
      { q: "Un écho revient au bout de 58 µs (v = 1 540 m·s⁻¹). À quelle profondeur est l'interface ?",
        choix: ["8,9 cm", "2,2 cm", "45 cm", "4,5 cm"],
        bonne: 3, niv: 2,
        expl: "d = 1 540 × 58 × 10⁻⁶ / 2." },
      { q: "Le haut d'un abcès est à 2,0 cm et son bas à 4,5 cm. Quel est son diamètre ?",
        choix: ["6,5 cm", "4,5 cm", "2,0 cm", "2,5 cm"],
        bonne: 3, niv: 1,
        expl: "D = d2 − d1." },
      { q: "Pourquoi applique-t-on un gel entre la sonde d'échographie et la peau ?",
        choix: ["Pour éviter une couche d'air très réfléchissante", "Pour refroidir la sonde", "Pour augmenter la fréquence", "Pour absorber les ultrasons"],
        bonne: 0, niv: 2,
        expl: "L'interface air-peau réfléchirait presque toute l'onde." },
      { q: "Que gagne-t-on en augmentant la fréquence des ultrasons ?",
        choix: ["Une plus grande profondeur et une meilleure résolution", "Une image en couleurs", "Une meilleure résolution, mais moins de profondeur", "Une onde plus rapide"],
        bonne: 2, niv: 3,
        expl: "λ diminue, mais l'absorption augmente." },
      { q: "f' = 10 cm, objet à OA = −15 cm. Où est l'image ?",
        choix: ["OA' = 30 cm", "OA' = 6 cm", "OA' = −30 cm", "OA' = 15 cm"],
        bonne: 0, niv: 2,
        expl: "1/OA' = 1/10 − 1/15 = 1/30." },
      { q: "Une loupe a une distance focale de 5,0 cm. Quel est son grossissement commercial ?",
        choix: ["20", "0,20", "1,25", "5"],
        bonne: 3, niv: 2,
        expl: "Gc = 0,25 / 0,050." },
      { q: "Objectif de grandissement 40 et oculaire ×10. Quel est le grossissement commercial du microscope ?",
        choix: ["50", "400", "4", "30"],
        bonne: 1, niv: 1,
        expl: "On multiplie les deux." },
      { q: "Une lunette a f'1 = 900 mm et f'2 = 25 mm. Quel est son grossissement ?",
        choix: ["0,028", "36", "3,6", "9,0"],
        bonne: 1, niv: 2,
        expl: "G = f'1 / f'2." },
      { q: "Où doit se trouver l'image donnée par un instrument pour un œil emmétrope au repos ?",
        choix: ["À 25 cm de l'œil", "Sur la lentille", "À l'infini", "Au foyer objet de l'oculaire"],
        bonne: 2, niv: 1,
        expl: "L'œil au repos voit net à l'infini sans fatiguer." },
      { q: "Quel instrument permet d'observer des détails de l'ordre du nanomètre ?",
        choix: ["Le microscope à force atomique", "Le microscope optique", "La loupe", "La lunette astronomique"],
        bonne: 0, niv: 2,
        expl: "Le microscope optique est limité vers 0,2 µm par la diffraction." },
      { q: "Quel est l'avantage d'un télescope de grand diamètre ?",
        choix: ["Il grossit moins", "Il supprime la diffraction", "Il évite d'utiliser un oculaire", "Il collecte plus de lumière et a une meilleure résolution"],
        bonne: 3, niv: 3,
        expl: "La diffraction par l'ouverture diminue quand le diamètre augmente." },
    ] },
  { chapitre: "stl-spcl-15",
    fiche: `## Transmettre, stocker et afficher l'information

Téléphone, Wi-Fi, fibre, disque Blu-ray, écran de calculatrice : les ondes transportent, conservent et affichent l'information. Ce chapitre se limite aux principes physiques, sans le codage de l'information.

### Chaîne de transmission
- Schéma : **source d'information** → **encodeur et émetteur** → **canal de transmission** (air, câble, fibre) → **récepteur et décodeur** → **destinataire**.
- **Débit binaire** : nombre de bits transmis par seconde (bit·s⁻¹). Ordres de grandeur : câble coaxial, environ 100 Mbit·s⁻¹ à 1 Gbit·s⁻¹ ; fibre optique, de 1 Gbit·s⁻¹ à plus de 10 Tbit·s⁻¹ sur les liaisons longues.

### Propagation libre
- Exemples : radio, télévision, téléphone mobile, Wi-Fi, Bluetooth, GPS.
- **Onde porteuse** : chaque émetteur utilise sa propre fréquence porteuse, que l'information module. Le récepteur se règle sur une fréquence : on peut ainsi transmettre plusieurs informations en même temps dans le même milieu.
- **Puissance surfacique** à la distance r d'une source isotrope de puissance P : **P/S = P / (4π r²)**. Elle est divisée par 4 quand la distance double : c'est une atténuation due à la **divergence** de l'onde, même sans absorption.
- Exemple : P = 2,0 W ; à r = 10 m, P/S = 2,0 / (4π × 100) ≈ 1,6 × 10⁻³ W·m⁻².
- L'**absorption** par le milieu (pluie, murs) s'ajoute à cette atténuation géométrique.

### Transmission guidée
- **Ligne bifilaire** (deux conducteurs : câble téléphonique, câble Ethernet à paires torsadées) et **câble coaxial** (télévision).
- L'onde est guidée, mais une partie de la puissance est **absorbée** par le milieu. On caractérise la ligne par son **coefficient d'atténuation** α en dB·km⁻¹ ou dB·m⁻¹ :
- **Atténuation** : **A = 10 log(Pentrée / Psortie)** (en dB), et A = α × L.
- Exemple : fibre de 50 km avec α = 0,20 dB·km⁻¹ : A = 10 dB, donc la puissance est divisée par 10.

### Fibre optique à saut d'indice
- Un **cœur** d'indice n1 entouré d'une **gaine** d'indice n2 < n1. La lumière est guidée par **réflexions totales** successives sur l'interface cœur-gaine.
- Angle limite à l'interface : sin(ilim) = n2/n1.
- **Ouverture numérique** : **ON = sin(θmax) = √(n1² − n2²)**, θmax étant le plus grand angle d'entrée dans la fibre (depuis l'air) qui permet le guidage.
- Exemple : n1 = 1,48 et n2 = 1,46 : ON = √(2,1904 − 2,1316) = √0,0588 ≈ 0,24, θmax ≈ 14°.
- **Élargissement des impulsions** : les rayons d'inclinaisons différentes parcourent des chemins de longueurs différentes ; une impulsion courte s'étale. Si deux impulsions se recouvrent, on ne les distingue plus : cela **limite le débit**. Les fibres à gradient d'indice et monomodes réduisent cet effet.
- Atout : faible atténuation (0,2 dB·km⁻¹), grand débit, insensibles aux perturbations électromagnétiques.

### Stocker et lire : supports optiques (CD, DVD, Blu-ray)
- L'information est gravée en une piste de **creux** et de **plats**. Un faisceau laser lit la piste.
- **Lecture interférentielle** : la profondeur d'un creux vaut λ/4 (dans le matériau). À la transition entre un creux et un plat, les deux parties du faisceau réfléchi ont une différence de marche de **2 × λ/4 = λ/2** : les **interférences sont destructives** et l'intensité reçue chute. Ces chutes codent les bits.
- **Capacité** : le diamètre de la tache de focalisation est **d ≈ 1,22 λ / ON**. Plus λ est petite (et ON grande), plus la tache est petite et plus on peut graver d'informations.
- Exemple : CD (780 nm, ON 0,45) : d ≈ 2,1 µm ; Blu-ray (405 nm, ON 0,85) : d ≈ 0,58 µm, d'où une capacité bien plus grande (25 Go contre 0,7 Go).

### Afficher : écrans à cristaux liquides
- Un pixel comprend un **polariseur**, une couche de **cristaux liquides** et un **analyseur croisé** par rapport au polariseur.
- Sans tension, les cristaux liquides font tourner la polarisation de 90° : la lumière traverse l'analyseur, le pixel est **clair**.
- Avec une tension, les molécules s'alignent et ne font plus tourner la polarisation : la lumière est arrêtée par l'analyseur, le pixel est **sombre**.
- Des filtres rouges, verts et bleus donnent les couleurs.

### À retenir pour le bac
- Porteuse : plusieurs informations en même temps.
- Propagation libre : P/S = P/(4πr²) ; ligne et fibre : A = 10 log(Pe/Ps) = α L.
- Fibre : réflexion totale ; ON = √(n1² − n2²).
- Lecture : creux de λ/4, interférences destructives ; λ plus petite, capacité plus grande.`,
    cartes: [
      { q: "Éléments d'une chaîne de transmission", r: "Source, émetteur, canal, récepteur, destinataire." },
      { q: "Débit binaire", r: "Nombre de bits transmis par seconde." },
      { q: "Rôle d'une onde porteuse", r: "Transmettre plusieurs informations simultanément, chacune sur sa fréquence." },
      { q: "Puissance surfacique d'une source isotrope", r: "P / (4π r²)." },
      { q: "Effet du doublement de la distance en propagation libre", r: "Puissance surfacique divisée par 4." },
      { q: "Atténuation d'une ligne", r: "A = 10 log(Pentrée / Psortie) = α × L." },
      { q: "Principe du guidage dans une fibre optique", r: "Réflexions totales à l'interface cœur-gaine." },
      { q: "Ouverture numérique d'une fibre à saut d'indice", r: "ON = √(n1² − n2²)." },
      { q: "Ce qui limite le débit d'une fibre à saut d'indice", r: "L'élargissement temporel des impulsions." },
      { q: "Profondeur d'un creux sur un disque optique", r: "λ/4 dans le matériau." },
      { q: "Interférences à la transition creux-plat", r: "Destructives : différence de marche λ/2." },
      { q: "Diamètre de la tache de lecture", r: "d ≈ 1,22 λ / ON." },
      { q: "Pixel d'écran LCD sous tension", r: "Sombre : la polarisation ne tourne plus." },
    ],
    quiz: [
      { q: "Pourquoi chaque station de radio a-t-elle sa propre fréquence porteuse ?",
        choix: ["Pour aller plus vite que la lumière", "Pour transmettre plusieurs informations en même temps", "Pour éviter l'absorption par l'air", "Pour augmenter le débit binaire à l'infini"],
        bonne: 1, niv: 1,
        expl: "Le récepteur sélectionne une seule porteuse." },
      { q: "La distance à une source isotrope double. Comment varie la puissance surfacique reçue ?",
        choix: ["Elle est divisée par 2", "Elle est divisée par 4", "Elle reste la même", "Elle est multipliée par 4"],
        bonne: 1, niv: 2,
        expl: "P/S = P/(4πr²)." },
      { q: "Une source isotrope de 2,0 W. Quelle est la puissance surfacique à 10 m ?",
        choix: ["1,6 × 10⁻² W·m⁻²", "0,20 W·m⁻²", "1,6 × 10⁻³ W·m⁻²", "2,0 × 10⁻² W·m⁻²"],
        bonne: 2, niv: 3,
        expl: "2,0 / (4π × 10²) ≈ 1,6 × 10⁻³." },
      { q: "Une fibre de 50 km a une atténuation de 0,20 dB·km⁻¹. Par combien la puissance est-elle divisée ?",
        choix: ["Par 100", "Par 10", "Par 50", "Par 2"],
        bonne: 1, niv: 2,
        expl: "A = 10 dB, et 10 log(10) = 10." },
      { q: "Quel phénomène guide la lumière dans une fibre optique ?",
        choix: ["La diffraction", "L'absorption", "La réflexion totale", "La polarisation"],
        bonne: 2, niv: 1,
        expl: "Le cœur est plus réfringent que la gaine." },
      { q: "n1 = 1,48 et n2 = 1,46. Que vaut l'ouverture numérique ?",
        choix: ["Environ 0,02", "Environ 0,059", "Environ 0,14", "Environ 0,24"],
        bonne: 3, niv: 3,
        expl: "√(1,48² − 1,46²) = √0,0588." },
      { q: "Pourquoi l'élargissement des impulsions limite-t-il le débit ?",
        choix: ["Il augmente l'atténuation à l'infini", "Des impulsions trop proches se recouvrent et ne se distinguent plus", "Il change la couleur du laser", "La fibre chauffe trop"],
        bonne: 1, niv: 3,
        expl: "On doit espacer davantage les impulsions." },
      { q: "À la transition creux-plat d'un CD, pourquoi l'intensité réfléchie chute-t-elle ?",
        choix: ["Le laser s'éteint", "La lumière est absorbée par le creux", "La polarisation tourne de 90°", "Les interférences sont destructives"],
        bonne: 3, niv: 2,
        expl: "Différence de marche 2 × λ/4 = λ/2." },
      { q: "Pourquoi un Blu-ray stocke-t-il plus qu'un CD ?",
        choix: ["Il utilise une longueur d'onde plus petite, donc une tache plus fine", "Il tourne plus vite", "Son laser est plus puissant", "Il est plus épais"],
        bonne: 0, niv: 2,
        expl: "d ≈ 1,22 λ / ON diminue avec λ." },
      { q: "Dans un écran LCD, que se passe-t-il quand on applique une tension au pixel ?",
        choix: ["Il devient plus clair", "Il change de couleur vers le rouge", "Il devient sombre", "Il émet de la lumière"],
        bonne: 2, niv: 3,
        expl: "Les cristaux ne font plus tourner la polarisation ; l'analyseur arrête la lumière." },
      { q: "Quel support offre le plus grand débit pour une liaison à longue distance ?",
        choix: ["Le câble coaxial", "La paire torsadée", "La fibre optique", "La liaison radio Bluetooth"],
        bonne: 2, niv: 1,
        expl: "Faible atténuation et très grande bande passante." },
    ] },
  { chapitre: "stl-spcl-16",
    fiche: `## Flux d'informations : capteurs, filtres et régulation

Un procédé industriel (une cuve chauffée, un bassin d'aquaculture, un tank à lait) se pilote grâce à une chaîne d'informations : on mesure, on traite le signal, puis on agit. Ce chapitre suit cette chaîne, du capteur à la régulation.

### Analyse d'un système
- Pour un système, on identifie sa **fonction globale**, ses **flux de matière, d'énergie et d'informations** en entrée et en sortie, ses performances, ses impacts environnementaux et ses contraintes de sécurité.

### Chaîne d'informations
- **Capteur** : il convertit la grandeur mesurée (grandeur d'entrée : température, concentration en dioxygène) en grandeur électrique (grandeur de sortie : tension, intensité, résistance).
- **Sensibilité** d'un capteur : s = Δ(sortie) / Δ(entrée). Exemple : une tension qui passe de 0,20 V à 1,00 V quand la concentration passe de 2 à 10 mg·L⁻¹ donne s = 0,80 / 8 = 0,10 V·L·mg⁻¹.
- **Conditionneur** : il met en forme le signal (pont, amplificateur, filtre).
- On choisit le couple capteur-conditionneur selon le cahier des charges : étendue de mesure, sensibilité, temps de réponse, coût.

### Filtrage et amplification
- **Facteur d'amplification** : A = Us / Ue (sans unité). En décibels : G = 20 log(A).
- Un filtre laisse passer certaines fréquences : **passe-bas** (basses fréquences, élimine le bruit rapide), **passe-haut** (élimine une composante continue ou lente), **passe-bande**.
- **Bande passante** : intervalle de fréquences où A ≥ Amax / √2, soit un gain qui ne descend pas de plus de 3 dB sous son maximum. La fréquence où A = Amax/√2 est la **fréquence de coupure**.
- **Gabarit** : zone imposée par le cahier des charges (fréquences à laisser passer, fréquences à éliminer) dans laquelle doit rester la courbe du filtre.

### Numérisation : le CAN
- Un **convertisseur analogique-numérique** transforme une tension en un nombre.
- **Nombre de bits** n : 2ⁿ valeurs possibles. **Quantum** (plus petite variation détectable) : **q = calibre / 2ⁿ**. Exemple : 0 à 5 V sur 10 bits : q = 5 / 1 024 ≈ 4,9 mV.
- **Fréquence d'échantillonnage** : nombre de mesures par seconde ; elle doit être au moins le double de la plus haute fréquence du signal pour le reconstituer correctement.

### Contrôle d'une position : le moteur pas à pas
- Sources de champ magnétique : aimants, bobines parcourues par un courant, la Terre (environ 5 × 10⁻⁵ T). Un aimant de laboratoire : de 0,01 à 1 T ; une IRM : de 1,5 à 3 T.
- Un **moteur pas à pas** a un rotor aimanté et des bobines alimentées l'une après l'autre : à chaque impulsion, le rotor tourne d'un angle fixe (un pas, par exemple 1,8°, soit 200 pas par tour). On commande ainsi une position précise sans capteur, par exemple avec un microcontrôleur (mise au point d'un autofocus).

### Boucle de régulation
- **Grandeur réglée** : celle qu'on veut maintenir (température de la cuve). **Consigne** : la valeur voulue. **Grandeur réglante** : celle sur laquelle on agit (débit de vapeur, puissance de chauffe). **Perturbations** : ce qui fait varier la grandeur réglée sans qu'on le veuille (température extérieure, ajout de liquide froid).
- Éléments de la boucle : **capteur-transmetteur** (mesure), **régulateur** (compare la mesure à la consigne et calcule la commande), **actionneur** ou organe de réglage (vanne, résistance chauffante), **procédé**.
- **Caractéristique statique** d'un procédé : grandeur réglée en fonction de la grandeur réglante, en régime permanent, pour une perturbation donnée.

### Régulation tout ou rien (TOR)
- L'actionneur est soit en marche, soit à l'arrêt. Avec **deux seuils** (hystérésis), on évite que l'actionneur bascule sans cesse : chauffage en marche sous 18 °C, arrêt au-dessus de 20 °C. La grandeur réglée oscille entre les seuils.
- Simple et peu coûteuse, mais imprécise ; elle use l'actionneur.

### Régulation continue : P et PI
- **Correction proportionnelle (P)** : la commande est proportionnelle à l'écart consigne − mesure. Il reste un **écart statique** en régime permanent ; augmenter le gain le réduit, mais peut rendre le système instable (oscillations).
- **Correction proportionnelle intégrale (PI)** : l'action intégrale **annule l'écart statique**.
- **Critères de performance** : **précision** (écart statique), **rapidité** (temps de réponse à 5 %), **stabilité** (valeur du premier dépassement, oscillations).
- **Point de fonctionnement** : intersection de la caractéristique statique du procédé et de celle du régulateur.

### À retenir pour le bac
- Capteur : grandeur d'entrée → grandeur électrique ; sensibilité = Δsortie / Δentrée.
- Bande passante : A ≥ Amax/√2 ; CAN : q = calibre / 2ⁿ.
- Régulation : grandeurs réglée, réglante, perturbatrice ; consigne.
- P : écart statique ; PI : écart statique annulé. Précision, rapidité, stabilité.`,
    cartes: [
      { q: "Rôle d'un capteur", r: "Convertir la grandeur mesurée en grandeur électrique." },
      { q: "Sensibilité d'un capteur", r: "s = Δ(grandeur de sortie) / Δ(grandeur d'entrée)." },
      { q: "Facteur d'amplification", r: "A = Us / Ue." },
      { q: "Bande passante d'un filtre", r: "Fréquences pour lesquelles A ≥ Amax / √2." },
      { q: "Quantum d'un CAN", r: "q = calibre / 2ⁿ." },
      { q: "Principe d'un moteur pas à pas", r: "Chaque impulsion fait tourner le rotor d'un angle fixe." },
      { q: "Grandeur réglée", r: "Grandeur que l'on veut maintenir égale à la consigne." },
      { q: "Grandeur réglante", r: "Grandeur sur laquelle agit l'actionneur." },
      { q: "Grandeur perturbatrice", r: "Grandeur qui fait varier la grandeur réglée sans qu'on le veuille." },
      { q: "Régulation TOR à deux seuils", r: "L'actionneur bascule entre marche et arrêt à deux seuils ; la grandeur oscille entre eux." },
      { q: "Défaut de la correction proportionnelle", r: "Il reste un écart statique." },
      { q: "Intérêt de la correction PI", r: "Elle annule l'écart statique." },
      { q: "Trois critères de performance d'une régulation", r: "Précision, rapidité, stabilité." },
    ],
    quiz: [
      { q: "La tension d'un capteur passe de 0,20 V à 1,00 V quand la concentration passe de 2 à 10 mg·L⁻¹. Quelle est sa sensibilité ?",
        choix: ["0,10 V·L·mg⁻¹", "0,080 V·L·mg⁻¹", "10 V·L·mg⁻¹", "0,80 V·L·mg⁻¹"],
        bonne: 0, niv: 2,
        expl: "s = 0,80 V / 8 mg·L⁻¹." },
      { q: "Pour un capteur de dioxygène, quelle est la grandeur d'entrée ?",
        choix: ["La tension délivrée", "La température de l'afficheur", "La concentration en dioxygène", "Le temps de réponse"],
        bonne: 2, niv: 1,
        expl: "La grandeur de sortie est électrique." },
      { q: "Quel filtre choisir pour éliminer un bruit de haute fréquence ?",
        choix: ["Un filtre passe-haut", "Un amplificateur de gain 100", "Un CAN de 8 bits", "Un filtre passe-bas"],
        bonne: 3, niv: 2,
        expl: "Il laisse passer les basses fréquences du signal utile." },
      { q: "Comment définit-on la bande passante d'un filtre ?",
        choix: ["Fréquences pour lesquelles A = 0", "Fréquences supérieures à 20 kHz", "Fréquences pour lesquelles A ≥ Amax / √2", "Fréquence unique où A est maximal"],
        bonne: 2, niv: 2,
        expl: "Cela correspond à 3 dB sous le maximum." },
      { q: "Un CAN de 10 bits a un calibre de 0 à 5 V. Quel est son quantum ?",
        choix: ["4,9 mV", "0,50 V", "50 mV", "2,0 mV"],
        bonne: 0, niv: 3,
        expl: "q = 5 / 2¹⁰ = 5 / 1 024." },
      { q: "Un moteur pas à pas fait 1,8° par pas. Combien de pas pour un tour complet ?",
        choix: ["360", "400", "720", "200"],
        bonne: 3, niv: 1,
        expl: "360 / 1,8 = 200." },
      { q: "Dans la régulation de température d'une cuve chauffée à la vapeur, quelle est la grandeur réglante ?",
        choix: ["La température de la cuve", "Le débit de vapeur", "La température extérieure", "Le réglage de la consigne"],
        bonne: 1, niv: 2,
        expl: "C'est la grandeur sur laquelle agit la vanne." },
      { q: "Dans la même boucle, que représente la température de l'air extérieur ?",
        choix: ["La grandeur réglée", "Une grandeur perturbatrice", "Une consigne de sécurité", "La grandeur réglante"],
        bonne: 1, niv: 2,
        expl: "Elle modifie la température de la cuve sans être commandée." },
      { q: "Pourquoi utilise-t-on deux seuils dans une régulation tout ou rien ?",
        choix: ["Pour supprimer toute oscillation", "Pour annuler l'écart statique", "Pour augmenter la consigne", "Pour éviter que l'actionneur bascule sans cesse"],
        bonne: 3, niv: 3,
        expl: "L'écart entre les seuils espace les basculements." },
      { q: "Quel est le défaut principal d'une correction proportionnelle seule ?",
        choix: ["Elle annule l'écart statique", "Elle fonctionne en tout ou rien", "Elle supprime le capteur", "Elle laisse un écart statique"],
        bonne: 3, niv: 2,
        expl: "La correction PI corrige ce défaut." },
      { q: "Quels sont les trois critères de performance d'une boucle de régulation ?",
        choix: ["Précision, rapidité, stabilité", "Prix, taille, couleur", "Débit, pression, température", "Consigne, mesure, perturbation"],
        bonne: 0, niv: 1,
        expl: "On mesure l'écart statique, le temps de réponse à 5 % et le premier dépassement." },
    ] },
  { chapitre: "stl-spcl-17",
    fiche: `## Transferts thermiques, échangeurs et machines thermiques

Refroidir le lait après la traite (bac 2026 métropole, 5 points), isoler un local, chauffer une cuve, produire du froid : tout repose sur les transferts thermiques. Capacité thermique et énergie de changement d'état sont vues en physique-chimie et mathématiques ; on les applique ici aux échangeurs, aux chaudières et aux pompes à chaleur.

### Trois modes de transfert thermique
- **Conduction** : de proche en proche dans la matière, sans déplacement de matière (paroi, casserole).
- **Convection** : grâce au déplacement d'un fluide (air chaud qui monte, eau qui circule).
- **Rayonnement** : par ondes électromagnétiques (infrarouge), même dans le vide (Soleil, radiateur).
- Le transfert se fait spontanément du corps **chaud** vers le corps **froid**.

### Conductivité et résistance thermiques
- **Conductivité thermique** λ (en W·m⁻¹·K⁻¹) : plus elle est faible, plus le matériau est **isolant**. Repères : cuivre 390, acier 50, béton 1,5, verre 1, bois 0,15, laine de verre 0,04, air immobile 0,025.
- **Résistance thermique** d'une paroi plane d'épaisseur e et de surface S : **Rth = e / (λ × S)** (en K·W⁻¹).
- **Puissance thermique** (ou flux) traversant la paroi : **Φ = (θint − θext) / Rth**.
- **Paroi multicouche** : les résistances des couches **s'additionnent** : Rth = R1 + R2 + …
- Exemple : mur de 10 m², béton de 20 cm (λ = 1,5) et laine de verre de 10 cm (λ = 0,04). R(béton) = 0,20 / (1,5 × 10) = 0,013 K·W⁻¹ ; R(laine) = 0,10 / (0,04 × 10) = 0,25 K·W⁻¹ ; R total ≈ 0,26 K·W⁻¹. Pour 20 °C d'écart : Φ ≈ 20 / 0,26 ≈ 76 W. Sans isolant, Φ serait d'environ 1 500 W.

### Échangeurs thermiques
- Deux fluides séparés par une paroi échangent de l'énergie sans se mélanger (pré-refroidisseur à lait, radiateur de voiture, condenseur).
- **Co-courant** : les deux fluides circulent dans le même sens ; leurs températures de sortie se rapprochent sans se croiser.
- **Contre-courant** : ils circulent en sens inverses ; c'est plus efficace, le fluide froid peut sortir plus chaud que le fluide chaud en sortie. On les reconnaît sur les profils de température.
- **Bilan** (pertes négligées) : énergie cédée par le fluide chaud = énergie reçue par le fluide froid, avec **Q = m × c × Δθ**.
- Exemple (bac 2026) : 410 L de lait (ρ = 1,03 kg·L⁻¹, c = 3,97 × 10³ J·kg⁻¹·K⁻¹) refroidis de 35 à 17 °C : ‖Q‖ = 422,3 × 3 970 × 18 ≈ 3,0 × 10⁷ J. Avec 615 L d'eau : Δθ(eau) = 3,0 × 10⁷ / (615 × 4 180) ≈ 11,7 °C.
- **Dimensionnement** en régime stationnaire : **Φ = K × S × Δθm**, avec K le coefficient global d'échange (W·m⁻²·K⁻¹) et Δθm l'écart moyen de température entre les fluides (relation fournie).
- Exemple (bac 2026) : Φ = 3,0 × 10⁷ J / 1 200 s = 2,5 × 10⁴ W ; S = Φ / (K × Δθm) = 2,5 × 10⁴ / (400 × 7,6) ≈ 8,2 m². Un module de 28 m de tube de 32 mm offre π × 0,032 × 28 ≈ 2,8 m² : il en faut **3**.
- Avec changement d'état : Φ = débit massique × Lv (énergie massique de vaporisation ou de condensation).

### Chaudière
- Puissance nécessaire : énergie à fournir à l'eau (chauffage, éventuellement vaporisation) par unité de temps.
- **Pouvoir calorifique** (PC, en J·kg⁻¹ ou J·m⁻³) : énergie libérée par la combustion d'un kilogramme (ou d'un mètre cube) de combustible. **Débit de combustible** = puissance / PC. Exemple : 50 kW avec du gaz de PC = 3,6 × 10⁷ J·m⁻³ : 50 000 / 3,6 × 10⁷ ≈ 1,4 × 10⁻³ m³·s⁻¹, soit environ 5 m³ par heure.

### Pompes à chaleur et machines frigorifiques
- Un fluide frigorigène circule en boucle et passe par quatre éléments : **évaporateur** (il se vaporise en prélevant de l'énergie à la source froide), **compresseur** (il reçoit du travail électrique, sa température augmente), **condenseur** (il se liquéfie en cédant de l'énergie à la source chaude), **détendeur** (sa pression et sa température baissent).
- Une **compression** rapide (adiabatique, sans échange thermique) **réchauffe** un gaz ; une **détente** le **refroidit**.
- **Premier principe** (conservation de l'énergie) sur un cycle : **W + QF + QC = 0** (énergies reçues comptées positivement), soit ‖QC‖ = W + ‖QF‖ pour une pompe à chaleur.
- **Second principe** : un transfert thermique ne se fait **jamais spontanément** de la source froide vers la source chaude ; il faut fournir un travail W.
- **Coefficient de performance** : pompe à chaleur, **COP = ‖QC‖ / W** ; machine frigorifique, **COP = ‖QF‖ / W**. Exemple : 4 kWh de chaleur pour 1 kWh électrique : COP = 4.
- Limites d'une pompe à chaleur air-eau : le COP baisse quand la température extérieure baisse ; en dessous d'environ −10 °C, il faut un appoint.

### À retenir pour le bac
- Conduction, convection, rayonnement ; du chaud vers le froid.
- Rth = e/(λS) ; Φ = Δθ / Rth ; résistances en série additionnées.
- Q = m c Δθ ; échangeur : Φ = K S Δθm ; contre-courant plus efficace.
- PAC : ‖QC‖ = W + ‖QF‖ ; COP = ‖QC‖ / W.`,
    cartes: [
      { q: "Conduction", r: "Transfert de proche en proche dans la matière, sans déplacement de matière." },
      { q: "Convection", r: "Transfert par déplacement d'un fluide." },
      { q: "Rayonnement thermique", r: "Transfert par ondes électromagnétiques, possible dans le vide." },
      { q: "Matériau isolant", r: "Matériau de faible conductivité thermique λ." },
      { q: "Résistance thermique d'une paroi plane", r: "Rth = e / (λ × S)." },
      { q: "Puissance thermique à travers une paroi", r: "Φ = (θint − θext) / Rth." },
      { q: "Résistance d'une paroi multicouche", r: "Somme des résistances des couches." },
      { q: "Échangeur à contre-courant", r: "Les fluides circulent en sens inverses ; plus efficace que le co-courant." },
      { q: "Énergie pour chauffer une masse m", r: "Q = m × c × Δθ." },
      { q: "Flux échangé dans un échangeur", r: "Φ = K × S × Δθm." },
      { q: "Débit de combustible d'une chaudière", r: "Puissance / pouvoir calorifique." },
      { q: "Second principe (version simplifiée)", r: "Pas de transfert thermique spontané du froid vers le chaud." },
      { q: "COP d'une pompe à chaleur", r: "COP = ‖QC‖ / W." },
    ],
    quiz: [
      { q: "Quel mode de transfert thermique peut se faire dans le vide ?",
        choix: ["La conduction", "La convection", "L'isolation thermique", "Le rayonnement"],
        bonne: 3, niv: 1,
        expl: "Il se fait par ondes électromagnétiques." },
      { q: "Classer du plus isolant au moins isolant :",
        choix: ["Cuivre, béton, bois, laine de verre", "Laine de verre, bois, béton, cuivre", "Béton, laine de verre, cuivre, bois", "Bois, cuivre, laine de verre, béton"],
        bonne: 1, niv: 2,
        expl: "Plus λ est petit, plus le matériau isole." },
      { q: "Paroi de laine de verre : e = 0,10 m, λ = 0,04 W·m⁻¹·K⁻¹, S = 10 m². Que vaut Rth ?",
        choix: ["0,25 K·W⁻¹", "4,0 K·W⁻¹", "0,040 K·W⁻¹", "25 K·W⁻¹"],
        bonne: 0, niv: 2,
        expl: "Rth = 0,10 / (0,04 × 10)." },
      { q: "Rth = 0,26 K·W⁻¹ et un écart de 20 °C. Quelle puissance traverse le mur ?",
        choix: ["Environ 77 W", "Environ 5,2 W", "Environ 0,013 W", "Environ 520 W"],
        bonne: 0, niv: 2,
        expl: "Φ = 20 / 0,26." },
      { q: "Comment calcule-t-on la résistance thermique d'une paroi en plusieurs couches ?",
        choix: ["On garde la plus grande", "On les multiplie", "On fait la moyenne des conductivités", "On additionne les résistances des couches"],
        bonne: 3, niv: 2,
        expl: "Les couches sont traversées l'une après l'autre." },
      { q: "Dans un échangeur, les deux fluides circulent en sens inverses. Comment s'appelle ce fonctionnement ?",
        choix: ["Co-courant", "Convection forcée", "Rayonnement", "Contre-courant"],
        bonne: 3, niv: 1,
        expl: "C'est le fonctionnement le plus efficace." },
      { q: "422 kg de lait (c = 3,97 × 10³ J·kg⁻¹·K⁻¹) refroidis de 18 °C. Quelle énergie est cédée ?",
        choix: ["7,6 × 10³ J", "1,7 × 10⁶ J", "3,0 × 10⁷ J", "3,0 × 10⁴ J"],
        bonne: 2, niv: 2,
        expl: "Q = 422 × 3 970 × 18." },
      { q: "Φ = 2,5 × 10⁴ W, K = 400 W·m⁻²·K⁻¹, Δθm = 7,6 K. Quelle surface d'échange faut-il ?",
        choix: ["8,2 m²", "76 m²", "0,12 m²", "3,0 m²"],
        bonne: 0, niv: 3,
        expl: "S = Φ / (K × Δθm)." },
      { q: "Une pompe à chaleur fournit 4,0 kWh de chaleur pour 1,0 kWh d'électricité. Que vaut son COP ?",
        choix: ["0,25", "4,0", "3,0", "1,0"],
        bonne: 1, niv: 2,
        expl: "COP = ‖QC‖ / W." },
      { q: "Dans une pompe à chaleur, d'où vient l'énergie ‖QC‖ cédée au logement ?",
        choix: ["Du travail du compresseur, sans autre apport", "De la source froide, sans travail", "Du détendeur", "Du travail du compresseur et de l'énergie prise à la source froide"],
        bonne: 3, niv: 3,
        expl: "Premier principe : ‖QC‖ = W + ‖QF‖." },
      { q: "Que devient la température d'un gaz comprimé rapidement ?",
        choix: ["Elle diminue", "Elle augmente", "Elle reste constante", "Elle devient égale à celle de la source froide"],
        bonne: 1, niv: 2,
        expl: "Une compression adiabatique réchauffe le gaz." },
    ] },
  { chapitre: "stl-spcl-18",
    fiche: `## Flux de matière : écoulements, pompes et distillation

Dans une usine de traitement de l'eau ou une distillerie, la matière circule dans des tuyaux, est pompée, puis séparée. Ce chapitre réunit la mécanique des fluides utile au technicien de laboratoire (débit, pression, Bernoulli, pompe) et la séparation par distillation (diagrammes binaires).

### Débits
- **Débit volumique** : **Qv = V / Δt** (en m³·s⁻¹). **Débit massique** : **Qm = m / Δt = ρ × Qv** (en kg·s⁻¹).
- Relation avec la vitesse moyenne d'écoulement dans une conduite de section S : **Qv = v × S**.
- **Conservation du débit** (écoulement permanent d'un fluide incompressible) : **v1 × S1 = v2 × S2**. Dans un rétrécissement, le fluide accélère.
- Exemple : tuyau de 4,0 cm de diamètre, v = 1,0 m·s⁻¹ ; dans une partie de 2,0 cm de diamètre, la section est divisée par 4, donc v = 4,0 m·s⁻¹.

### Pression et statique des fluides
- **Pression** : **P = F / S** (en pascals, Pa ; 1 bar = 10⁵ Pa). La force pressante est perpendiculaire à la surface.
- **Principe fondamental de la statique des fluides** (fluide incompressible) : **PB − PA = ρ × g × (zA − zB)**. La pression augmente avec la profondeur.
- Exemple : à 10 m sous la surface de l'eau, P = 1,013 × 10⁵ + 1 000 × 9,81 × 10 ≈ 2,0 × 10⁵ Pa.
- Application : mesurer la hauteur de liquide dans un réservoir avec un capteur de pression placé au fond (h = ΔP / (ρg)).

### Théorème de Bernoulli
- Pour un fluide parfait incompressible, en écoulement permanent, le long d'une ligne de courant : **P + ½ ρ v² + ρ g z = constante**.
- Chaque terme est une énergie par unité de volume (en Pa) : pression, énergie cinétique, énergie potentielle.
- **Effet Venturi** : dans un rétrécissement, la vitesse augmente donc la pression **diminue**. Applications : trompe à eau du laboratoire (filtration sous vide), débitmètre à tube de Venturi, pulvérisateur, carburateur.
- Exemple : vidange d'un réservoir par un trou situé h = 0,80 m sous la surface (pressions atmosphériques égales) : v = √(2gh) ≈ 4,0 m·s⁻¹.

### Pertes de charge
- Dans un fluide réel, une partie de l'énergie est dissipée par frottements : ce sont les **pertes de charge** ΔPpertes. Bernoulli devient : P1 + ½ ρ v1² + ρ g z1 = P2 + ½ ρ v2² + ρ g z2 + ΔPpertes.
- Elles augmentent avec la **vitesse**, la **longueur** de la conduite, quand la **section diminue**, et à chaque **singularité** (coude, vanne, rétrécissement brusque).

### Pompe
- Une pompe **fournit de l'énergie** au fluide pour le faire monter, l'accélérer ou compenser les pertes de charge : P1 + ½ ρ v1² + ρ g z1 + ΔPpompe = P2 + ½ ρ v2² + ρ g z2 + ΔPpertes.
- **Puissance utile** (hydraulique) : **Pu = ΔPpompe × Qv**. Pour élever de l'eau d'une hauteur H : ΔP = ρ g H.
- **Rendement** : **η = Pu / Pabsorbée** (puissance électrique). Exemple : Qv = 2,0 × 10⁻³ m³·s⁻¹ montés de 15 m : Pu = 1 000 × 9,81 × 15 × 2,0 × 10⁻³ ≈ 290 W ; avec Pabs = 500 W, η ≈ 59 %.

### Fractions et diagrammes binaires
- **Fraction molaire** de A : xA = nA / (nA + nB). **Fraction massique** : wA = mA / (mA + mB).
- **Diagramme isobare liquide-vapeur** d'un mélange de deux liquides miscibles : température en fonction de la composition. La **courbe d'ébullition** (en bas) sépare le liquide du mélange liquide-vapeur ; la **courbe de rosée** (en haut) sépare ce mélange de la vapeur.
- À une température donnée, la vapeur en équilibre avec le liquide est **plus riche en espèce la plus volatile** (celle de plus basse température d'ébullition).
- **Azéotrope** : point où les deux courbes se touchent ; liquide et vapeur ont la même composition, on ne peut pas dépasser cette composition par distillation. Exemple : eau-éthanol, azéotrope à 95,6 % d'éthanol en masse.

### Distillation
- **Distillation fractionnée** : la colonne réalise une succession de vaporisations et condensations ; en tête de colonne, on recueille un distillat de plus en plus riche en espèce la plus volatile.
- Le **reflux** (une partie du condensat redescend dans la colonne) améliore la séparation.
- Lecture d'un diagramme : on part de la composition du liquide, on monte jusqu'à la courbe d'ébullition (température d'ébullition), puis on se déplace horizontalement jusqu'à la courbe de rosée pour lire la composition de la première vapeur.

### À retenir pour le bac
- Qm = ρ Qv ; Qv = v S ; v1 S1 = v2 S2.
- P = F/S ; PB − PA = ρ g (zA − zB).
- Bernoulli : P + ½ ρ v² + ρ g z = constante ; Venturi : vitesse plus grande, pression plus faible.
- Pompe : Pu = ΔP × Qv, η = Pu / Pabs. Vapeur plus riche en espèce volatile ; azéotrope infranchissable.`,
    cartes: [
      { q: "Débit volumique", r: "Qv = V / Δt, en m³·s⁻¹." },
      { q: "Relation entre débit massique et volumique", r: "Qm = ρ × Qv." },
      { q: "Relation entre débit et vitesse", r: "Qv = v × S." },
      { q: "Conservation du débit (fluide incompressible)", r: "v1 × S1 = v2 × S2." },
      { q: "Pression", r: "P = F / S, en Pa." },
      { q: "Principe fondamental de la statique des fluides", r: "PB − PA = ρ g (zA − zB)." },
      { q: "Théorème de Bernoulli", r: "P + ½ ρ v² + ρ g z = constante." },
      { q: "Effet Venturi", r: "Dans un rétrécissement, la vitesse augmente et la pression diminue." },
      { q: "Facteurs qui augmentent les pertes de charge", r: "Vitesse, longueur, petite section, singularités (coudes, vannes)." },
      { q: "Puissance utile d'une pompe", r: "Pu = ΔPpompe × Qv." },
      { q: "Fraction molaire", r: "xA = nA / (nA + nB)." },
      { q: "Composition de la vapeur sur un diagramme binaire", r: "Plus riche en espèce la plus volatile." },
      { q: "Azéotrope", r: "Composition où liquide et vapeur sont identiques ; infranchissable par distillation." },
    ],
    quiz: [
      { q: "Le diamètre d'un tuyau passe de 4,0 cm à 2,0 cm. Si v = 1,0 m·s⁻¹ avant, que vaut v après ?",
        choix: ["4,0 m·s⁻¹", "2,0 m·s⁻¹", "0,25 m·s⁻¹", "0,50 m·s⁻¹"],
        bonne: 0, niv: 2,
        expl: "La section est divisée par 4, la vitesse multipliée par 4." },
      { q: "Quelle relation lie débit massique et débit volumique ?",
        choix: ["Qm = ρ × Qv", "Qm = Qv / ρ", "Qm = Qv × g", "Qm = ρ × v"],
        bonne: 0, niv: 1,
        expl: "ρ en kg·m⁻³ et Qv en m³·s⁻¹ donnent des kg·s⁻¹." },
      { q: "Quelle est la pression à 10 m sous la surface de l'eau (Patm = 1,013 × 10⁵ Pa) ?",
        choix: ["Environ 1,0 × 10⁴ Pa", "Environ 1,0 × 10⁵ Pa", "Environ 2,0 × 10⁵ Pa", "Environ 9,8 × 10⁵ Pa"],
        bonne: 2, niv: 2,
        expl: "P = 1,013 × 10⁵ + 1 000 × 9,81 × 10." },
      { q: "Que dit l'effet Venturi ?",
        choix: ["Là où la vitesse augmente, la pression augmente", "La pression ne dépend pas de la vitesse", "Là où la vitesse augmente, la pression diminue", "Le débit diminue dans un rétrécissement"],
        bonne: 2, niv: 2,
        expl: "C'est une conséquence du théorème de Bernoulli." },
      { q: "Quel appareil du laboratoire utilise l'effet Venturi ?",
        choix: ["Le réfrigérant à boules", "La trompe à eau", "La burette", "Le pH-mètre"],
        bonne: 1, niv: 2,
        expl: "Elle crée une dépression pour la filtration sous vide." },
      { q: "Un trou est à 0,80 m sous la surface d'un réservoir ouvert. Quelle est la vitesse de sortie ?",
        choix: ["Environ 16 m·s⁻¹", "Environ 7,8 m·s⁻¹", "Environ 4,0 m·s⁻¹", "Environ 0,80 m·s⁻¹"],
        bonne: 2, niv: 3,
        expl: "v = √(2 g h) = √(2 × 9,81 × 0,80)." },
      { q: "Lequel de ces changements augmente les pertes de charge d'un circuit ?",
        choix: ["Ajouter des coudes et allonger la conduite", "Diminuer la vitesse d'écoulement", "Élargir la conduite", "Supprimer une vanne"],
        bonne: 0, niv: 2,
        expl: "Longueur et singularités dissipent de l'énergie." },
      { q: "Une pompe élève 2,0 × 10⁻³ m³·s⁻¹ d'eau de 15 m. Quelle est sa puissance utile ?",
        choix: ["Environ 30 W", "Environ 0,29 W", "Environ 2 900 W", "Environ 290 W"],
        bonne: 3, niv: 3,
        expl: "Pu = ρ g H × Qv = 1 000 × 9,81 × 15 × 2,0 × 10⁻³." },
      { q: "Pu = 294 W et Pabsorbée = 500 W. Quel est le rendement de la pompe ?",
        choix: ["59 %", "41 %", "29 %", "15 %"],
        bonne: 0, niv: 2,
        expl: "η = 294 / 500 ≈ 0,59." },
      { q: "Sur un diagramme binaire, quelle est la composition de la vapeur en équilibre avec un liquide ?",
        choix: ["Identique à celle du liquide", "Plus riche en espèce la moins volatile", "Formée d'eau pure", "Plus riche en espèce la plus volatile"],
        bonne: 3, niv: 2,
        expl: "On la lit sur la courbe de rosée." },
      { q: "Pourquoi ne peut-on pas obtenir de l'éthanol pur par distillation d'un mélange eau-éthanol ?",
        choix: ["Le mélange présente un azéotrope", "L'éthanol ne bout pas", "L'eau est plus volatile", "La colonne ne chauffe pas assez"],
        bonne: 0, niv: 3,
        expl: "La distillation s'arrête à l'azéotrope (95,6 % en masse)." },
    ] },
  ],
  methode: [
    {
      "id": "stl-spcl-m1",
      "mat": "stl-spcl",
      "titre": "Titrage conductimétrique par précipitation",
      "formules": [
        "Écrire l'équation de la réaction support du titrage",
        "Déterminer graphiquement le volume VE à l'équivalence",
        "Calculer la concentration en masse d'ions chlorure",
        "En déduire, en tenant compte des incertitudes, si …"
      ],
      "vu": [
        "Bac 2026 métropole, partie A (ions chlorure du lait titrés par le nitrate d'argent)"
      ],
      "pts": "3 à 4 points",
      "attendu": "Une équation de précipitation juste (le solide noté (s)), VE lu à l'intersection des deux droites avec les traits de construction, l'application numérique de la relation fournie avec les unités, puis une conclusion qui compare au seuil en tenant compte de l'incertitude.",
      "etapes": [
        "Écrire Ag⁺(aq) + Cl⁻(aq) → AgCl(s)",
        "Tracer les deux droites sur le document réponse et lire VE à leur intersection",
        "Calculer n(Cl⁻) = C2 × VE, puis Cm = C2 × VE × M / V1, en convertissant les mL en L",
        "Calculer u = σ/√N si une série de mesures est donnée",
        "Comparer le résultat (avec son incertitude) au seuil ou à la référence, et conclure par une phrase"
      ],
      "mots": [
        "réaction support",
        "équivalence",
        "intersection des droites",
        "précipité",
        "incertitude-type",
        "compatible"
      ],
      "pieges": [
        "Oublier (s) pour le précipité",
        "Lire VE au minimum de la courbe sans tracer les droites",
        "Laisser les volumes en mL dans un quotient où ils ne se simplifient pas",
        "Conclure sans parler de l'incertitude"
      ],
      "cas": "On titre les ions chlorure d'une eau minérale : V1 = 50,0 mL d'eau, nitrate d'argent à C2 = 0,020 mol·L⁻¹. Les deux droites se coupent à VE = 8,4 mL. M(Cl) = 35,5 g·mol⁻¹. L'étiquette annonce 125 mg·L⁻¹ ; on estime u(Cm) = 4 mg·L⁻¹.",
      "question": "Calculer la concentration en masse d'ions chlorure, puis dire si elle est compatible avec l'étiquette.",
      "modele": "Réaction support : Ag⁺(aq) + Cl⁻(aq) → AgCl(s). À l'équivalence, n(Cl⁻) = C2 × VE = 0,020 × 8,4 × 10⁻³ = 1,7 × 10⁻⁴ mol. Cm = C2 × VE × M / V1 = 0,020 × 8,4 × 10⁻³ × 35,5 / 0,0500 ≈ 0,119 g·L⁻¹, soit 119 mg·L⁻¹. z = ‖119 − 125‖ / 4 = 1,5, inférieur à 2 : le résultat est compatible avec la valeur de l'étiquette.",
      "grille": [
        "L'équation de précipitation est juste, avec AgCl(s)",
        "La relation à l'équivalence est écrite",
        "Cm est calculée avec la bonne unité",
        "La compatibilité est jugée avec z ou un intervalle, et la conclusion est rédigée"
      ]
    },
    {
      "id": "stl-spcl-m2",
      "mat": "stl-spcl",
      "titre": "Titrage acide-base : constante, indicateur et concentration",
      "formules": [
        "Exprimer la constante d'équilibre K en fonction de Ka et Ke, puis montrer que K = …",
        "En déduire que la transformation peut être considérée comme totale",
        "Choisir l'indicateur coloré le plus adapté. Justifier",
        "Déterminer la concentration … puis vérifier si le lait est frais"
      ],
      "vu": [
        "Bac 2026 métropole, partie C (acide lactique du lait titré par la soude)"
      ],
      "pts": "4 à 6 points",
      "attendu": "K = Ka/Ke avec le calcul, la comparaison à 10⁴, un indicateur dont la zone de virage contient le pH à l'équivalence, la relation à l'équivalence, le passage à la concentration en masse et la comparaison au seuil.",
      "etapes": [
        "Écrire K = [A⁻] / ([HA][HO⁻]) puis multiplier en haut et en bas par [H3O⁺] : K = Ka / Ke",
        "Comparer K à 10⁴ : si K ≥ 10⁴, la réaction est totale",
        "Repérer pHE et choisir l'indicateur dont la zone de virage le contient",
        "Écrire CA × VA = CB × VE et calculer CA",
        "Multiplier par M pour obtenir Cm, comparer au seuil et conclure"
      ],
      "mots": [
        "constante d'équilibre",
        "réaction totale",
        "zone de virage",
        "équivalence",
        "concentration en masse"
      ],
      "pieges": [
        "Écrire K = Ke / Ka",
        "Choisir l'indicateur dont la zone contient 7 au lieu de pHE",
        "Oublier de convertir en g·L⁻¹ avant de comparer au seuil",
        "Nommer une éprouvette pour prélever VA (c'est une pipette jaugée)"
      ],
      "cas": "On titre VA = 20,0 mL de lait par la soude à CB = 0,10 mol·L⁻¹ ; VE = 7,2 mL et pHE = 8,3. Acide lactique : Ka = 1,26 × 10⁻⁴, M = 90 g·mol⁻¹. Seuil de fraîcheur : 1,8 g·L⁻¹. Indicateurs : bleu de bromothymol (6,0 à 7,6), rouge de crésol (7,2 à 8,8).",
      "question": "Justifier que le titrage est possible, choisir l'indicateur, puis dire si ce lait est frais.",
      "modele": "K = Ka / Ke = 1,26 × 10⁻⁴ / 1,0 × 10⁻¹⁴ = 1,26 × 10¹⁰ ≥ 10⁴ : la réaction est totale, elle peut servir de support de titrage. pHE = 8,3 est dans la zone de virage du rouge de crésol (7,2 à 8,8), pas dans celle du bleu de bromothymol : on choisit le rouge de crésol. CA = CB × VE / VA = 0,10 × 7,2 / 20,0 = 3,6 × 10⁻² mol·L⁻¹, soit Cm = 3,6 × 10⁻² × 90 ≈ 3,2 g·L⁻¹, supérieur à 1,8 g·L⁻¹ : ce lait n'est pas frais.",
      "grille": [
        "K = Ka/Ke est établi et calculé",
        "Le caractère total est justifié par K ≥ 10⁴",
        "L'indicateur est justifié par pHE",
        "CA puis Cm sont calculées et comparées au seuil"
      ]
    },
    {
      "id": "stl-spcl-m3",
      "mat": "stl-spcl",
      "titre": "Dimensionner un échangeur thermique",
      "formules": [
        "Préciser si le fonctionnement est à contre-courant ou à co-courant",
        "Montrer que l'énergie nécessaire pour refroidir le lait est …",
        "Calculer l'élévation de température de l'eau de refroidissement",
        "Montrer que la surface d'échange est …, puis en déduire le nombre de modules"
      ],
      "vu": [
        "Bac 2026 métropole, partie B (pré-refroidisseur à lait)"
      ],
      "pts": "4 à 5 points",
      "attendu": "Le sens des fluides justifié, Q = m c Δθ avec m = ρ V, le bilan énergétique sans pertes, Φ = Q / Δt, S = Φ / (K Δθm), puis le nombre de modules arrondi à l'entier supérieur.",
      "etapes": [
        "Regarder le sens de circulation des deux fluides : sens inverses, contre-courant",
        "Calculer m = ρ × V, puis Q = m × c × Δθ",
        "Écrire ‖Qeau‖ = ‖Qlait‖ et en déduire Δθ(eau)",
        "Calculer Φ = ‖Q‖ / Δt avec Δt en secondes",
        "Calculer S = Φ / (K × Δθm), diviser par la surface d'un module et arrondir à l'entier supérieur"
      ],
      "mots": [
        "échangeur",
        "contre-courant",
        "capacité thermique massique",
        "flux thermique",
        "coefficient global d'échange",
        "régime stationnaire"
      ],
      "pieges": [
        "Oublier ρ pour passer du volume à la masse",
        "Laisser Δt en minutes",
        "Arrondir le nombre de modules à l'entier le plus proche au lieu de l'entier supérieur",
        "Utiliser le diamètre extérieur quand le sujet demande la surface intérieure"
      ],
      "cas": "On refroidit 300 L de lait (ρ = 1,03 kg·L⁻¹, c = 3,97 × 10³ J·kg⁻¹·K⁻¹) de 35 °C à 15 °C en 15 minutes. K = 400 W·m⁻²·K⁻¹, Δθm = 8,0 K. Un module offre 2,8 m² d'échange.",
      "question": "Combien de modules faut-il installer ?",
      "modele": "m = 300 × 1,03 = 309 kg. ‖Q‖ = 309 × 3,97 × 10³ × 20 ≈ 2,45 × 10⁷ J. Φ = 2,45 × 10⁷ / 900 ≈ 2,73 × 10⁴ W. S = Φ / (K × Δθm) = 2,73 × 10⁴ / (400 × 8,0) ≈ 8,5 m². Trois modules ne donnent que 8,4 m², ce qui est insuffisant : il faut 4 modules.",
      "grille": [
        "La masse est calculée avec ρ",
        "Q = m c Δθ est appliqué correctement",
        "Φ est calculé avec Δt en secondes",
        "S est calculée et le nombre de modules est arrondi à l'entier supérieur avec justification"
      ]
    },
    {
      "id": "stl-spcl-m4",
      "mat": "stl-spcl",
      "titre": "Échographie : distance, taille et résolution",
      "formules": [
        "Vérifier que l'onde utilisée appartient au domaine des ultrasons",
        "Montrer que la distance entre la sonde et la partie inférieure est …",
        "Déterminer le diamètre, puis conclure",
        "Exprimer puis calculer la longueur d'onde ; en déduire si elle est adaptée"
      ],
      "vu": [
        "Bac 2026 métropole, partie D (échographie d'une mamelle)"
      ],
      "pts": "4 à 5 points",
      "attendu": "Comparer f à 20 kHz, tenir compte de l'aller-retour (d = v Δt / 2), faire la différence des profondeurs, calculer λ = v / f et la comparer à la taille de l'objet.",
      "etapes": [
        "Comparer la fréquence à 20 kHz",
        "Écrire que l'onde parcourt 2d pendant Δt : d = v × Δt / 2",
        "Faire la différence des deux profondeurs pour obtenir la taille",
        "Calculer λ = v / f",
        "Comparer λ à la taille de l'objet : si λ est bien plus petite, l'objet est visible"
      ],
      "mots": [
        "ultrasons",
        "réflexion",
        "aller-retour",
        "longueur d'onde",
        "résolution"
      ],
      "pieges": [
        "Oublier de diviser par 2",
        "Mélanger µs et s, ou MHz et Hz",
        "Conclure sur la résolution sans comparer λ à la taille de l'objet"
      ],
      "cas": "Une sonde émet à 5,0 MHz dans un tissu où v = 1 540 m·s⁻¹. Les échos des bords supérieur et inférieur d'un kyste reviennent après 26 µs et 65 µs.",
      "question": "Déterminer la taille du kyste et dire si l'onde est adaptée.",
      "modele": "5,0 MHz est bien supérieur à 20 kHz : ce sont des ultrasons. d1 = 1 540 × 26 × 10⁻⁶ / 2 ≈ 2,0 cm et d2 = 1 540 × 65 × 10⁻⁶ / 2 ≈ 5,0 cm : le kyste mesure environ 3,0 cm. λ = v / f = 1 540 / 5,0 × 10⁶ ≈ 0,31 mm, bien plus petite que 3,0 cm : l'onde permet de bien voir le kyste.",
      "grille": [
        "Le domaine des ultrasons est justifié",
        "L'aller-retour est pris en compte",
        "La taille est obtenue par différence",
        "λ est calculée et comparée à la taille de l'objet"
      ]
    },
    {
      "id": "stl-spcl-m5",
      "mat": "stl-spcl",
      "titre": "Incertitude composée et compatibilité",
      "formules": [
        "Déterminer la valeur de l'incertitude-type u(a) sachant u(a) = a √[…]",
        "Exprimer la valeur avec son incertitude-type",
        "Déterminer l'écart-type, puis l'incertitude-type sur la moyenne",
        "Discuter la compatibilité avec la valeur de référence"
      ],
      "vu": [
        "Bac 2026 Polynésie, parties 2 et 3 (diamètre d'un fil par diffraction ; dioxygène dissous)",
        "Bac 2026 métropole, partie A (question 5)"
      ],
      "pts": "1,5 à 3 points",
      "attendu": "L'application numérique de la relation fournie, une écriture du résultat avec un ou deux chiffres significatifs pour u, puis le calcul de z ou la comparaison d'intervalles, et une conclusion.",
      "etapes": [
        "Calculer chaque incertitude relative u(x)/x en mettant les grandeurs dans la même unité",
        "Appliquer la relation fournie (racine de la somme des carrés)",
        "Arrondir u à un ou deux chiffres significatifs et la valeur au même rang",
        "Calculer z = ‖x − xref‖ / u(x)",
        "Conclure : compatible si z ≤ 2 ; repérer la source d'erreur prépondérante si on le demande"
      ],
      "mots": [
        "incertitude-type",
        "incertitude relative",
        "chiffres significatifs",
        "valeur de référence",
        "compatible"
      ],
      "pieges": [
        "Mélanger cm et m dans un rapport",
        "Additionner les incertitudes relatives au lieu de composer leurs carrés",
        "Donner trop de chiffres à u",
        "Oublier de conclure"
      ],
      "cas": "Diamètre d'un fil : a = 2λD/L avec λ = 532 nm (u = 1 nm), D = 2,00 m (u = 0,01 m), L = 1,80 cm (u = 0,05 cm). Le fabricant annonce 0,12 mm.",
      "question": "Calculer a et u(a), écrire le résultat, puis conclure sur la compatibilité.",
      "modele": "a = 2 × 532 × 10⁻⁹ × 2,00 / 0,0180 ≈ 1,18 × 10⁻⁴ m. Incertitudes relatives : 0,19 %, 0,50 % et 2,8 %. u(a)/a = √(0,19² + 0,50² + 2,8²) % ≈ 2,8 %, donc u(a) ≈ 0,03 × 10⁻⁴ m. a = 1,18 × 10⁻⁴ m avec u(a) = 0,03 × 10⁻⁴ m. z = ‖1,18 − 1,20‖ / 0,033 ≈ 0,6 ≤ 2 : la mesure est compatible avec l'annonce du fabricant. La mesure de L pèse le plus : il faudrait l'améliorer en priorité.",
      "grille": [
        "a est calculé dans la bonne unité",
        "u(a) est obtenue avec la relation fournie",
        "Le résultat est bien écrit (chiffres significatifs)",
        "La compatibilité est discutée et conclue"
      ]
    },
    {
      "id": "stl-spcl-m6",
      "mat": "stl-spcl",
      "titre": "Synthèse d'un ester : identification et rendement",
      "formules": [
        "Écrire, avec les formules semi-développées, l'équation de la réaction",
        "Identifier, en justifiant, le spectre infrarouge du produit",
        "Montrer que la quantité d'alcool introduite est …",
        "Déterminer le rendement, puis comparer avec un montage à reflux simple"
      ],
      "vu": [
        "Bac 2026 Polynésie, partie 1 (arôme de banane, appareil de Dean-Stark)"
      ],
      "pts": "5 à 6 points",
      "attendu": "Une équation d'estérification équilibrée, l'attribution des bandes IR (C=O vers 1 740 cm⁻¹, absence de la bande O−H large), le calcul de n = ρ V / M, le rendement à partir du réactif limitant, et l'explication du rôle du Dean-Stark.",
      "etapes": [
        "Écrire acide + alcool ⇄ ester + eau avec les formules semi-développées",
        "Sur les spectres, repérer la bande O−H large (alcool) et la bande C=O fine (ester)",
        "Calculer n(alcool) = ρ × V / M",
        "Calculer n(ester) = m / M puis η = n(ester) / n(réactif limitant)",
        "Expliquer que le Dean-Stark retire l'eau et déplace l'équilibre vers l'ester"
      ],
      "mots": [
        "estérification",
        "groupe ester",
        "bande d'absorption",
        "réactif limitant",
        "rendement",
        "déplacement d'équilibre"
      ],
      "pieges": [
        "Oublier l'eau dans l'équation",
        "Confondre la bande O−H de l'alcool et la bande C−H",
        "Calculer le rendement avec le réactif en excès",
        "Dire que le Dean-Stark accélère la réaction (il améliore le rendement)"
      ],
      "cas": "On fait réagir l'acide éthanoïque en excès avec 0,20 mol d'alcool isoamylique, avec un appareil de Dean-Stark. On obtient 20,8 g d'éthanoate d'isoamyle (M = 130 g·mol⁻¹). Le spectre IR du produit montre une bande fine vers 1 740 cm⁻¹ et aucune bande large vers 3 300 cm⁻¹.",
      "question": "Justifier qu'on a bien obtenu l'ester, calculer le rendement et expliquer l'intérêt du Dean-Stark.",
      "modele": "Le spectre présente la bande C=O de l'ester vers 1 740 cm⁻¹ et pas la bande O−H large de l'alcool : le produit est l'ester, débarrassé de l'alcool. n(ester) = 20,8 / 130 = 0,160 mol. L'alcool est limitant (acide en excès) : η = 0,160 / 0,20 = 80 %. Le Dean-Stark retire l'eau au fur et à mesure : l'équilibre est déplacé vers la formation de l'ester, d'où un rendement meilleur qu'avec un reflux simple.",
      "grille": [
        "Les bandes IR sont attribuées avec leurs nombres d'onde",
        "n(ester) est calculée",
        "Le rendement utilise le réactif limitant",
        "Le rôle du Dean-Stark (élimination de l'eau, équilibre déplacé) est expliqué"
      ]
    }
  ],
  sujets: [
    { id: "stl-spcl-s1", matiere: 'stl-spcl', titre: "Sujet d'entraînement 1 : le miel, de la ruche au pot", duree: 180,
      enonce: `Sujet d'entraînement inventé, sur le modèle de l'épreuve écrite de sciences physiques et chimiques en laboratoire. La miellerie, les produits et les chiffres sont fictifs. Durée : 3 heures. Calculatrice en mode examen autorisée.
Le sujet comporte quatre parties indépendantes. Barème indicatif : partie A 5 points, partie B 5 points, partie C 5 points, partie D 5 points.

Une miellerie artisanale récolte du miel, le chauffe doucement pour le liquéfier, contrôle sa qualité, puis le stocke dans une cuve avant la mise en pot.

PARTIE A — Acidité du miel (5 points)
Titrage acide-base

L'acidité d'un miel est due surtout à l'acide gluconique, noté HA (couple HA/A⁻, pKa = 3,7). La réglementation impose une acidité inférieure à 50 milliéquivalents par kilogramme (meq·kg⁻¹), c'est-à-dire 50 mmol d'acide par kilogramme de miel.
On dissout 10,0 g de miel dans 75 mL d'eau, puis on titre par une solution d'hydroxyde de sodium de concentration CB = 0,050 mol·L⁻¹, en suivant le pH. L'équivalence est obtenue pour VE = 6,0 mL, à pHE = 8,0.
Données : Ke = 1,0 × 10⁻¹⁴ ; une réaction est considérée comme totale si K ≥ 10⁴.
Indicateurs : hélianthine (3,1 à 4,4) ; bleu de bromothymol (6,0 à 7,6) ; phénolphtaléine (8,0 à 10,0).
A1. Écrire l'équation de la réaction support du titrage.
A2. Exprimer la constante d'équilibre K de cette réaction en fonction de Ka et Ke, puis la calculer. Conclure.
A3. Choisir l'indicateur coloré le plus adapté pour un titrage colorimétrique. Justifier.
A4. Calculer la quantité d'acide titrée, puis l'acidité du miel en mmol·kg⁻¹. Le miel est-il conforme ?
A5. Indiquer la valeur du pH lue sur la courbe pour V = 3,0 mL. Justifier à l'aide de la relation de Henderson-Hasselbalch.

PARTIE B — Liquéfier le miel sans l'abîmer (5 points)
Transferts thermiques et régulation

Le miel cristallisé est réchauffé dans un maturateur : une cuve en acier entourée d'une couche de laine de verre, chauffée par une résistance électrique de 2,0 kW. On veut porter 50 kg de miel de 20 °C à 40 °C, sans dépasser 42 °C.
Données : capacité thermique massique du miel : c = 2,3 × 10³ J·kg⁻¹·K⁻¹ ; laine de verre : épaisseur 3,0 cm, conductivité thermique λ = 0,040 W·m⁻¹·K⁻¹, surface 1,5 m² ; la résistance thermique de l'acier est négligeable ; température de la pièce : 20 °C.
B1. Calculer l'énergie nécessaire pour chauffer le miel de 20 °C à 40 °C.
B2. En négligeant les pertes, calculer la durée de chauffage.
B3. Calculer la résistance thermique de la couche de laine de verre, puis la puissance perdue à travers la paroi quand le miel est à 40 °C. Commenter.
B4. Citer les trois modes de transfert thermique et dire lequel la laine de verre limite principalement.
B5. La température est régulée en tout ou rien avec deux seuils, 38 °C et 42 °C. Nommer la grandeur réglée, la grandeur réglante et une grandeur perturbatrice. Décrire l'évolution de la température en régime établi.

PARTIE C — Le miel a-t-il trop chauffé ? (5 points)
Spectrophotométrie et lumière

Un miel trop chauffé ou trop vieux contient de l'hydroxyméthylfurfural (HMF), qui absorbe dans l'ultraviolet à 284 nm. La norme impose moins de 40 mg de HMF par kilogramme de miel.
On dissout 5,0 g de miel dans de l'eau pour obtenir 50,0 mL de solution. Une gamme d'étalonnage à 284 nm donne la droite A = 0,050 × C, avec C en mg·L⁻¹. L'absorbance de la solution de miel vaut A = 0,30.
Données : h = 6,63 × 10⁻³⁴ J·s ; c = 3,00 × 10⁸ m·s⁻¹ ; 1 eV = 1,60 × 10⁻¹⁹ J.
C1. À quel domaine du spectre électromagnétique appartient la longueur d'onde 284 nm ? Calculer l'énergie d'un photon correspondant, en J puis en eV.
C2. Expliquer pourquoi on choisit cette longueur d'onde pour le dosage.
C3. Déterminer la concentration en masse de HMF dans la solution, puis la masse de HMF par kilogramme de miel. Le miel respecte-t-il la norme ?
C4. Le HMF possède un groupe aldéhyde. Citer un test chimique qui permettrait de le mettre en évidence et le résultat attendu.
C5. Proposer, en lien avec la partie B, une explication au résultat de C3.

PARTIE D — Mesurer le niveau dans la cuve de stockage (5 points)
Ondes ultrasonores, pression et incertitudes

La cuve de stockage, cylindrique, a une hauteur de 1,20 m et une section de 0,80 m². Un capteur à ultrasons placé au sommet émet une salve de fréquence 40 kHz vers la surface du miel et reçoit l'écho 5,0 ms plus tard.
Données : célérité du son dans l'air de la cuve : v = 343 m·s⁻¹ ; masse volumique du miel : ρ = 1,42 × 10³ kg·m⁻³ ; g = 9,81 N·kg⁻¹.
D1. Justifier que le capteur émet des ultrasons et calculer leur longueur d'onde dans l'air.
D2. Calculer la distance entre le capteur et la surface du miel, puis la hauteur de miel dans la cuve.
D3. En déduire le volume et la masse de miel stockés.
D4. On envisage de remplacer ce capteur par un capteur de pression placé au fond de la cuve. Calculer la différence de pression entre le fond et la surface du miel.
D5. La durée Δt est mesurée avec une incertitude-type u(Δt) = 0,05 ms ; on néglige l'incertitude sur v. Calculer l'incertitude-type sur la distance capteur-surface, puis écrire le résultat.`,
      corrige: `PARTIE A
A1. HA(aq) + HO⁻(aq) → A⁻(aq) + H2O(ℓ).
A2. K = [A⁻] / ([HA][HO⁻]) = Ka / Ke. Ka = 10^(−3,7) ≈ 2,0 × 10⁻⁴, donc K ≈ 2,0 × 10⁻⁴ / 1,0 × 10⁻¹⁴ = 2,0 × 10¹⁰ ≥ 10⁴ : la réaction est totale, elle convient pour un titrage.
A3. pHE = 8,0 est dans la zone de virage de la phénolphtaléine (8,0 à 10,0), pas dans celles des deux autres : on choisit la phénolphtaléine (passage de l'incolore au rose).
A4. À l'équivalence, n(HA) = CB × VE = 0,050 × 6,0 × 10⁻³ = 3,0 × 10⁻⁴ mol = 0,30 mmol pour 10,0 g de miel, soit 30 mmol·kg⁻¹ = 30 meq·kg⁻¹, inférieur à 50 meq·kg⁻¹ : le miel est conforme.
A5. V = 3,0 mL = VE/2 : c'est la demi-équivalence, [HA] = [A⁻]. Henderson-Hasselbalch : pH = pKa + log([A⁻]/[HA]) = pKa = 3,7.

PARTIE B
B1. Q = m × c × Δθ = 50 × 2,3 × 10³ × 20 = 2,3 × 10⁶ J.
B2. Δt = Q / P = 2,3 × 10⁶ / 2,0 × 10³ ≈ 1,2 × 10³ s, soit environ 19 minutes.
B3. Rth = e / (λ × S) = 0,030 / (0,040 × 1,5) = 0,50 K·W⁻¹. Φ = (40 − 20) / 0,50 = 40 W. C'est 2 % de la puissance de chauffe : la paroi est bien isolée, l'hypothèse de B2 est raisonnable.
B4. Conduction, convection, rayonnement. La laine de verre (λ très faible, air emprisonné) limite surtout la conduction (et la convection de l'air qu'elle emprisonne).
B5. Grandeur réglée : la température du miel. Grandeur réglante : la puissance de la résistance (marche ou arrêt). Grandeur perturbatrice : la température de la pièce (ou l'ajout de miel froid). La résistance se coupe à 42 °C et se remet en marche à 38 °C : la température oscille entre ces deux seuils.

PARTIE C
C1. 284 nm est inférieure à 400 nm : domaine ultraviolet. E = h c / λ = 6,63 × 10⁻³⁴ × 3,00 × 10⁸ / 284 × 10⁻⁹ ≈ 7,0 × 10⁻¹⁹ J, soit 7,0 × 10⁻¹⁹ / 1,60 × 10⁻¹⁹ ≈ 4,4 eV.
C2. C'est la longueur d'onde du maximum d'absorption du HMF : la mesure y est la plus sensible et la plus précise.
C3. C = A / 0,050 = 0,30 / 0,050 = 6,0 mg·L⁻¹. Masse de HMF dans 50,0 mL : 6,0 × 0,0500 = 0,30 mg pour 5,0 g de miel, soit 0,30 / 0,0050 = 60 mg·kg⁻¹, supérieur à 40 mg·kg⁻¹ : ce miel ne respecte pas la norme.
C4. Liqueur de Fehling à chaud : précipité rouge brique ; ou réactif de Tollens : miroir d'argent.
C5. Le miel a sans doute été chauffé trop fort ou trop longtemps (régulation mal réglée, dépassement de 42 °C, ou chauffages répétés) : la chaleur favorise la formation du HMF.

PARTIE D
D1. 40 kHz est supérieur à 20 kHz : ce sont des ultrasons. λ = v / f = 343 / 40 × 10³ ≈ 8,6 × 10⁻³ m = 8,6 mm.
D2. L'onde fait l'aller-retour : d = v × Δt / 2 = 343 × 5,0 × 10⁻³ / 2 ≈ 0,86 m. Hauteur de miel : h = 1,20 − 0,86 ≈ 0,34 m.
D3. V = h × S = 0,34 × 0,80 ≈ 0,27 m³. m = ρ × V = 1,42 × 10³ × 0,27 ≈ 3,9 × 10² kg.
D4. ΔP = ρ × g × h = 1,42 × 10³ × 9,81 × 0,34 ≈ 4,8 × 10³ Pa.
D5. d est proportionnelle à Δt : u(d)/d = u(Δt)/Δt = 0,05 / 5,0 = 1 %. u(d) ≈ 0,01 × 0,86 ≈ 0,009 m. d = 0,858 m avec u(d) = 0,009 m (ou d = 0,86 m, u = 0,01 m).`,
      grille: [{"c":"Partie A : équation, K = Ka/Ke et caractère total, choix de l'indicateur","pts":2.5},{"c":"Partie A : quantité titrée, acidité, conformité, pH à la demi-équivalence","pts":2.5},{"c":"Partie B : énergie Q = m c Δθ, durée, résistance thermique et pertes","pts":3},{"c":"Partie B : modes de transfert, régulation tout ou rien (grandeurs et évolution)","pts":2},{"c":"Partie C : domaine et énergie du photon, choix de la longueur d'onde","pts":1.5},{"c":"Partie C : concentration, masse par kilogramme, test de l'aldéhyde, lien avec le chauffage","pts":3.5},{"c":"Partie D : ultrasons et longueur d'onde, distance aller-retour, hauteur, volume et masse","pts":3},{"c":"Partie D : pression hydrostatique, incertitude-type et écriture du résultat","pts":2}] },
  ],
};
