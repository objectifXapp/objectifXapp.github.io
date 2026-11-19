// Physique-chimie (enseignement de spécialité) — voie générale. Sources : voir matiere.sources.
// Programme de terminale du BO spécial n° 8 du 25 juillet 2019, toujours en vigueur pour la session 2027.
// Épreuve : note de service du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026), applicable à partir de la session 2027.
// Un chapitre par sous-partie du programme, dans l'ordre officiel.
export default {
  matiere: {
    id: 'pc',
    nom: 'Physique-chimie',
    voie: 'generale',
    epreuve: { type: 'ecrit+pratique', duree: 210, coef: 16, quand: 'juin', note: 'Écrit de 3 h 30 (compte pour 80 %) et épreuve pratique d\'1 h (évaluation des compétences expérimentales, compte pour 20 %).' },
    sources: [
      'https://eduscol.education.gouv.fr/sites/default/files/document/spe261annexe1158935pdf-84513.pdf',
      'https://www.education.gouv.fr/bo/2026/Special4/MENE2622644N',
      'https://eduscol.education.gouv.fr/sites/default/files/document/nds-consolidee-definition-epreuve-bac-physique-chimie-102096.pdf',
    ],
    chapitres: [
      { id: 'pc-1', t: 'Acides, bases et analyse d\'un système par des mesures physiques', theme: 'Constitution et transformations de la matière' },
      { id: 'pc-2', t: 'Analyser un système par titrage', theme: 'Constitution et transformations de la matière' },
      { id: 'pc-3', t: 'Cinétique chimique : suivre et modéliser l\'évolution d\'une transformation', theme: 'Constitution et transformations de la matière' },
      { id: 'pc-4', t: 'Transformations nucléaires et décroissance radioactive', theme: 'Constitution et transformations de la matière' },
      { id: 'pc-5', t: 'Sens d\'évolution spontanée et piles', theme: 'Constitution et transformations de la matière' },
      { id: 'pc-6', t: 'Force des acides et des bases', theme: 'Constitution et transformations de la matière' },
      { id: 'pc-7', t: 'Forcer le sens d\'évolution : l\'électrolyse', theme: 'Constitution et transformations de la matière' },
      { id: 'pc-8', t: 'Stratégies de synthèse organique', theme: 'Constitution et transformations de la matière' },
      { id: 'pc-9', t: 'Décrire un mouvement', theme: 'Mouvement et interactions' },
      { id: 'pc-10', t: 'Deuxième loi de Newton et mouvement dans un champ uniforme', theme: 'Mouvement et interactions' },
      { id: 'pc-11', t: 'Mouvement dans un champ de gravitation : satellites et planètes', theme: 'Mouvement et interactions' },
      { id: 'pc-12', t: 'Modéliser l\'écoulement d\'un fluide', theme: 'Mouvement et interactions' },
      { id: 'pc-13', t: 'Gaz parfait, premier principe et transferts thermiques', theme: 'L\'énergie : conversions et transferts' },
      { id: 'pc-14', t: 'Caractériser les phénomènes ondulatoires', theme: 'Ondes et signaux' },
      { id: 'pc-15', t: 'Lunette astronomique et photons', theme: 'Ondes et signaux' },
      { id: 'pc-16', t: 'Dynamique d\'un circuit électrique : le condensateur et le circuit RC', theme: 'Ondes et signaux' },
    ],
  },
  paquets: [
    { chapitre: 'pc-1',
      fiche: `## Acides, bases et analyse d'un système par des mesures physiques

### Acides et bases selon Brønsted
- Un **acide** est une espèce capable de **céder un ion hydrogène H+**. Une **base** est une espèce capable de **capter un ion H+**.
- Un acide et une base qui s'échangent un H+ forment un **couple acide/base**, noté AH/A–. On écrit la **demi-équation** : AH = A– + H+.
- Une **réaction acide-base** est un **transfert d'ion H+** de l'acide d'un couple vers la base d'un autre couple. Exemple : CH3COOH + H2O → CH3COO– + H3O+.
- L'eau appartient à deux couples : **H3O+/H2O** et **H2O/HO–**. Elle peut être acide ou base : c'est une espèce **amphotère** (ou ampholyte). L'ion hydrogénocarbonate HCO3– est aussi amphotère (couples CO2,H2O/HCO3– et HCO3–/CO3²–).
- Couples à connaître : acide carboxylique R–COOH / ion carboxylate R–COO– ; ion ammonium NH4+ / ammoniac NH3 ; ion alkylammonium R–NH3+ / amine R–NH2.

### Le pH
- Le pH mesure l'acidité d'une solution : **pH = -log([H3O+]/c°)**, avec c° = 1 mol/L. Dans l'autre sens : **[H3O+] = c°·10^(-pH)**.
- Exemple : pH = 3,0 donne [H3O+] = 1,0×10^-3 mol/L. Quand [H3O+] est divisée par 10, le pH augmente de 1.
- À 25 °C, une solution est acide si pH < 7, neutre si pH = 7, basique si pH > 7.
- On mesure le pH avec un **pH-mètre** étalonné. Le pH s'écrit en général avec une ou deux décimales.

### Absorbance et loi de Beer-Lambert
- Une espèce colorée **absorbe** une partie de la lumière blanche. Sa couleur perçue est la **couleur complémentaire** de celle qu'elle absorbe le plus (cercle chromatique). Exemple : une solution qui absorbe le bleu paraît jaune-orangé.
- Le **spectre d'absorption** donne l'absorbance A en fonction de la longueur d'onde λ. On repère **λmax**, où l'absorption est la plus forte.
- **Loi de Beer-Lambert : A = ε·ℓ·c**. A est sans unité, ε est le coefficient d'absorption molaire (L·mol⁻¹·cm⁻¹), ℓ l'épaisseur de solution traversée (cm), c la concentration (mol/L). Elle est valable pour des **solutions diluées**.
- À λ et ℓ fixés, **A = k·c** : l'absorbance est proportionnelle à la concentration.

### Conductivité et loi de Kohlrausch
- Une solution conduit le courant grâce à ses **ions**. On mesure sa **conductivité σ** en S/m (siemens par mètre) avec un conductimètre.
- **Loi de Kohlrausch : σ = Σ λi·[Xi]**, où λi est la conductivité molaire ionique de l'ion Xi (S·m²/mol) et [Xi] sa concentration en **mol/m³**. Attention : 1 mol/L = 1 000 mol/m³.
- Pour une solution diluée d'un seul soluté, **σ = k·c**.
- Les ions H3O+ et HO– ont des conductivités molaires ioniques bien plus grandes que les autres ions.

### Le dosage par étalonnage
- On prépare une **gamme de solutions étalons** de concentrations connues, on mesure A (ou σ) pour chacune et on trace la **droite d'étalonnage**.
- On mesure A (ou σ) pour la solution inconnue et on lit sa concentration sur la droite. Exemple : si A = 0,50 × c (c en mmol/L) et A mesurée = 0,40, alors c = 0,80 mmol/L.
- Ce dosage ne détruit pas l'échantillon (dosage non destructif). On mesure à **λmax** pour avoir la meilleure sensibilité.

### Spectroscopie infrarouge
- Un spectre IR montre la transmittance en fonction du **nombre d'onde** (en cm⁻¹). Chaque type de liaison absorbe dans une zone : il permet d'identifier les **groupes caractéristiques**.
- Bandes utiles : **O–H d'un alcool** vers 3 200 à 3 400 cm⁻¹, large ; **O–H d'un acide carboxylique** de 2 500 à 3 200 cm⁻¹, très large ; **C=O** vers 1 650 à 1 750 cm⁻¹, fine et intense ; **N–H** vers 3 100 à 3 500 cm⁻¹ ; C–H vers 2 800 à 3 000 cm⁻¹.

### Quantité de matière d'un gaz
- Pour un gaz assimilé à un gaz parfait : **P·V = n·R·T**, avec P en Pa, V en m³, T en K et R = 8,314 J·mol⁻¹·K⁻¹.
- Exemple : 2,4 L de gaz à 1,0×10^5 Pa et 293 K contiennent n = (1,0×10^5 × 2,4×10^-3) / (8,314 × 293) ≈ 0,099 mol.

### À retenir pour le bac
- Savoir écrire une demi-équation acide-base et l'équation d'une réaction acide-base à partir de deux couples.
- pH = -log([H3O+]/c°) : savoir passer du pH à la concentration et l'inverse, à la calculatrice.
- Beer-Lambert et Kohlrausch ne marchent que pour des solutions diluées : c'est souvent la justification attendue.
- Piège : dans Kohlrausch, les concentrations sont en mol/m³, pas en mol/L.
- En IR, une bande fine vers 1 700 cm⁻¹ signale C=O ; une bande très large de 2 500 à 3 200 cm⁻¹ signale un acide carboxylique.`,
      cartes: [
        { q: "Qu'est-ce qu'un acide selon Brønsted ?", r: "Une espèce chimique capable de céder un ion hydrogène H+." },
        { q: "Qu'est-ce qu'une base selon Brønsted ?", r: "Une espèce chimique capable de capter un ion hydrogène H+." },
        { q: "Qu'est-ce qu'une réaction acide-base ?", r: "Un transfert d'ion H+ de l'acide d'un couple vers la base d'un autre couple." },
        { q: "Qu'est-ce qu'une espèce amphotère ? Un exemple.", r: "Une espèce qui est l'acide d'un couple et la base d'un autre. Exemples : l'eau H2O (couples H3O+/H2O et H2O/HO–), l'ion HCO3–." },
        { q: "Formule du pH ?", r: "pH = -log([H3O+]/c°), avec c° = 1 mol/L. Inversement : [H3O+] = c°·10^(-pH)." },
        { q: "Que devient le pH si [H3O+] est divisée par 10 ?", r: "Le pH augmente de 1." },
        { q: "Couple de l'acide éthanoïque ?", r: "CH3COOH / CH3COO– (acide éthanoïque / ion éthanoate)." },
        { q: "Loi de Beer-Lambert ?", r: "A = ε·ℓ·c : A sans unité, ε en L·mol⁻¹·cm⁻¹, ℓ en cm, c en mol/L. Valable pour des solutions diluées." },
        { q: "Pourquoi une solution qui absorbe le bleu paraît-elle jaune-orangé ?", r: "La couleur perçue est la couleur complémentaire de la couleur la plus absorbée. Le complémentaire du bleu est le jaune-orangé." },
        { q: "Loi de Kohlrausch ?", r: "σ = Σ λi·[Xi] : σ en S/m, λi en S·m²/mol, [Xi] en mol/m³. Pour un seul soluté dilué : σ = k·c." },
        { q: "Comment fait-on un dosage par étalonnage ?", r: "On mesure A (ou σ) pour des solutions étalons, on trace la droite d'étalonnage, puis on y lit la concentration de la solution inconnue à partir de sa mesure." },
        { q: "Pourquoi mesurer l'absorbance à λmax ?", r: "C'est là que l'absorbance varie le plus avec la concentration : la mesure est la plus sensible et la plus précise." },
        { q: "Bande IR fine et intense vers 1 700 cm⁻¹ ?", r: "Liaison C=O (aldéhyde, cétone, acide carboxylique, ester, amide)." },
        { q: "Bande IR très large de 2 500 à 3 200 cm⁻¹ ?", r: "Liaison O–H d'un acide carboxylique." },
        { q: "Loi des gaz parfaits et unités ?", r: "P·V = n·R·T avec P en Pa, V en m³, n en mol, T en K, R = 8,314 J·mol⁻¹·K⁻¹." },
      ],
      quiz: [
        { q: "Quelle espèce est amphotère ?", choix: ["L'ion hydrogénocarbonate HCO3–", "L'ion hydroxyde HO–", "L'ion oxonium H3O+", "L'ion carbonate CO3²–"], bonne: 0, expl: "HCO3– est la base du couple CO2,H2O/HCO3– et l'acide du couple HCO3–/CO3²–. H3O+ n'est qu'un acide, HO– et CO3²– ne sont que des bases.", niv: 1 },
        { q: "Une solution a un pH de 3,0. Quelle est sa concentration en ions oxonium ?", choix: ["1,0×10³ mol/L", "3,0×10⁻³ mol/L", "1,0×10⁻³ mol/L", "0,48 mol/L"], bonne: 2, expl: "[H3O+] = c°·10^(-pH) = 10^-3 mol/L. Le piège 1,0×10³ vient d'un oubli du signe moins.", niv: 2 },
        { q: "Dans la loi de Beer-Lambert A = ε·ℓ·c, quelle est l'unité de l'absorbance A ?", choix: ["mol·L⁻¹", "sans unité", "cm⁻¹", "L·mol⁻¹·cm⁻¹"], bonne: 1, expl: "A est un rapport de grandeurs : elle n'a pas d'unité. L·mol⁻¹·cm⁻¹ est l'unité de ε.", niv: 1 },
        { q: "Une solution absorbe surtout vers 450 nm, dans le bleu. Quelle couleur a-t-elle ?", choix: ["Bleue", "Jaune-orangé", "Verte", "Violette"], bonne: 1, expl: "On voit la couleur complémentaire de celle qui est absorbée : le complémentaire du bleu est le jaune-orangé.", niv: 2 },
        { q: "Droite d'étalonnage : A = 0,50 × c (c en mmol/L). Une solution inconnue donne A = 0,40. Sa concentration vaut :", choix: ["0,90 mmol/L", "0,20 mmol/L", "1,25 mmol/L", "0,80 mmol/L"], bonne: 3, expl: "c = A / 0,50 = 0,40 / 0,50 = 0,80 mmol/L. Le piège 0,20 vient d'une multiplication au lieu d'une division.", niv: 2 },
        { q: "Pourquoi règle-t-on le spectrophotomètre sur la longueur d'onde du maximum d'absorption ?", choix: ["Pour avoir la meilleure sensibilité de mesure", "Pour que ε soit égal à 1", "Pour que la loi de Beer-Lambert devienne exacte", "Pour supprimer l'absorption du solvant"], bonne: 0, expl: "À λmax, A varie le plus pour une même variation de c : la mesure est plus précise. Le « blanc » sert à retirer l'absorption du solvant.", niv: 3 },
        { q: "Dans la loi de Kohlrausch σ = Σ λi·[Xi], en quelle unité exprime-t-on [Xi] ?", choix: ["mol/L", "S/m", "g/L", "mol/m³"], bonne: 3, expl: "Avec λi en S·m²/mol et σ en S/m, les concentrations sont en mol/m³ (1 mol/L = 1 000 mol/m³).", niv: 1 },
        { q: "On dilue 10 fois une solution d'acide chlorhydrique (acide fort) de pH 2,0. Le nouveau pH vaut :", choix: ["0,20", "1,0", "3,0", "2,1"], bonne: 2, expl: "[H3O+] est divisée par 10, donc le pH augmente de 1 : il passe de 2,0 à 3,0.", niv: 3 },
        { q: "Spectre IR : bande fine et intense vers 1 715 cm⁻¹, aucune bande large au-delà de 2 500 cm⁻¹. La molécule est plutôt :", choix: ["une cétone", "une amine", "un acide carboxylique", "un alcool"], bonne: 0, expl: "La bande vers 1 715 cm⁻¹ montre une liaison C=O. Sans bande O–H ni N–H, ce n'est ni un acide carboxylique, ni un alcool, ni une amine.", niv: 2 },
        { q: "Quelle est la base conjuguée de l'acide éthanoïque CH3COOH ?", choix: ["HO–", "CH3COOH2+", "CH3CH2OH", "CH3COO–"], bonne: 3, expl: "La base conjuguée s'obtient en retirant un H+ à l'acide : CH3COOH = CH3COO– + H+.", niv: 1 },
        { q: "Quelle quantité de gaz parfait occupe 2,4 L sous 1,0×10⁵ Pa à 293 K ? (R = 8,31 J·mol⁻¹·K⁻¹)", choix: ["99 mol", "1,0×10⁻³ mol", "0,099 mol", "0,29 mol"], bonne: 2, expl: "n = PV/(RT) = 1,0×10⁵ × 2,4×10⁻³ / (8,31 × 293) ≈ 0,099 mol. Le piège 99 mol vient d'un volume laissé en litres.", niv: 2 },
        { q: "Pour un dosage par étalonnage conductimétrique, quelle condition est nécessaire ?", choix: ["La solution doit être colorée", "La solution doit être assez diluée", "L'espèce doit contenir un groupe C=O", "Le pH doit valoir 7"], bonne: 1, expl: "La relation σ = k·c n'est valable que pour des solutions diluées. Il faut des ions, pas une couleur.", niv: 3 },
      ] },
    { chapitre: 'pc-2',
      fiche: `## Analyser un système par titrage

### Le principe du titrage
- Un **titrage** sert à déterminer la quantité (ou la concentration) d'une espèce en la faisant réagir avec un **réactif titrant** de concentration connue, placé dans la **burette**.
- L'espèce à doser est le **réactif titré**, placée dans le bécher avec un volume connu (prélevé à la pipette jaugée).
- La **réaction support du titrage** doit être **rapide, totale et unique**. C'est un titrage **destructif** : l'échantillon est consommé.

### L'équivalence
- L'**équivalence** est atteinte quand les réactifs ont été introduits dans les **proportions stœchiométriques**. Avant, le réactif titrant est limitant ; après, c'est le réactif titré : il y a **changement de réactif limitant**.
- Pour la réaction a A + b B → produits (A titré, B titrant) : **n(A) initial / a = n(B) versé à l'équivalence / b**, soit **cA·VA / a = cB·VE / b**.
- Exemple : VA = 10,0 mL d'acide chlorhydrique titrés par une soude à cB = 0,100 mol/L, VE = 12,0 mL, réaction mole à mole. cA = cB·VE / VA = 0,100 × 12,0 / 10,0 = 0,120 mol/L.
- Ajouter de l'eau dans le bécher **ne change pas** le volume équivalent : la quantité d'espèce titrée reste la même.

### Repérer l'équivalence
- **Changement de couleur** : par exemple, les ions permanganate MnO4– violets sont décolorés tant qu'ils sont limitants ; à l'équivalence, la teinte violette persiste.
- **Indicateur coloré** : il convient si sa **zone de virage contient le pH à l'équivalence**.
- **Suivi pH-métrique** : la courbe pH = f(V) présente un **saut de pH**. On repère l'équivalence par la **méthode des tangentes parallèles** ou par le **maximum de la dérivée dpH/dV**.
- **Suivi conductimétrique** : la courbe σ = f(V) est formée de deux portions de droites. L'équivalence est au **point de rupture de pente**. On ajoute souvent beaucoup d'eau au départ pour que la dilution due au titrant soit négligeable et que les portions soient bien droites.

### Interpréter une courbe conductimétrique
- Exemple : titrage d'acide chlorhydrique (H3O+ + Cl–) par la soude (Na+ + HO–). Réaction : H3O+ + HO– → 2 H2O.
- **Avant l'équivalence** : chaque ion H3O+ consommé est remplacé par un ion Na+, de conductivité molaire ionique plus faible. **σ diminue**.
- **Après l'équivalence** : on ajoute des ions Na+ et HO– qui ne réagissent plus. **σ augmente** fortement (HO– conduit très bien).
- Méthode : faire la liste des ions présents, dire lesquels apparaissent ou disparaissent, puis comparer leurs λ.

### Titrage d'un acide faible par une base forte
- Exemple : acide éthanoïque titré par la soude. La courbe pH = f(V) part d'un pH vers 3, passe par une zone où le pH varie peu, puis présente un saut.
- À la **demi-équivalence** (V = VE/2), **pH = pKa** du couple : c'est une façon de mesurer un pKa.
- Le pH à l'équivalence est supérieur à 7 car il reste alors la base faible CH3COO–.

### Exploiter le résultat
- Passer à une **concentration en masse** : cm = c × M. Exemple : c = 0,90 mol/L d'acide éthanoïque (M = 60 g/mol) donne cm = 54 g/L.
- Passer à un **pourcentage massique** : masse d'espèce dosée divisée par la masse de l'échantillon.
- Tenir compte d'une **dilution** : si la solution titrée a été diluée 10 fois, la solution de départ est 10 fois plus concentrée.
- Comparer à une valeur de référence avec l'incertitude : le résultat est compatible si l'écart à la référence, divisé par l'incertitude-type, reste inférieur ou égal à 2 environ.

### À retenir pour le bac
- La relation à l'équivalence avec les coefficients a et b : la plus demandée, et le piège quand a et b sont différents de 1.
- Justifier une évolution de σ avec les ions présents et leurs conductivités molaires ioniques.
- Une réaction support : rapide, totale, unique.
- Penser à la dilution éventuelle de l'échantillon avant de conclure.
- Le pH à l'équivalence ne vaut 7 que pour un titrage acide fort par base forte.`,
      cartes: [
        { q: "Qu'est-ce qu'un titrage ?", r: "Un dosage destructif : on fait réagir l'espèce à doser avec un réactif titrant de concentration connue, versé à la burette." },
        { q: "Les trois qualités d'une réaction support de titrage ?", r: "Rapide, totale et unique." },
        { q: "Définition de l'équivalence ?", r: "Le moment où les réactifs ont été introduits dans les proportions stœchiométriques : il y a changement de réactif limitant." },
        { q: "Relation à l'équivalence pour a A + b B → produits ?", r: "n(A) initial / a = n(B) versé / b, soit cA·VA / a = cB·VE / b." },
        { q: "Comment repérer l'équivalence sur une courbe pH = f(V) ?", r: "Au milieu du saut de pH : méthode des tangentes parallèles ou maximum de la dérivée dpH/dV." },
        { q: "Comment repérer l'équivalence sur une courbe σ = f(V) ?", r: "Au point de rupture de pente, à l'intersection des deux portions de droites." },
        { q: "Quand un indicateur coloré convient-il ?", r: "Quand sa zone de virage contient le pH à l'équivalence." },
        { q: "Pourquoi ajouter de l'eau avant un titrage conductimétrique ?", r: "Pour que la dilution due au titrant soit négligeable : les portions de courbe sont alors des droites. Cela ne change pas le volume équivalent." },
        { q: "Titrage de HCl par la soude : pourquoi σ diminue avant l'équivalence ?", r: "Les ions H3O+ consommés sont remplacés par des ions Na+, dont la conductivité molaire ionique est plus faible." },
        { q: "Titrage de HCl par la soude : pourquoi σ augmente après l'équivalence ?", r: "On ajoute des ions Na+ et HO– qui ne réagissent plus ; HO– a une grande conductivité molaire ionique." },
        { q: "Que vaut le pH à la demi-équivalence d'un acide faible titré par une base forte ?", r: "pH = pKa du couple de l'acide titré." },
        { q: "Comment passer d'une concentration molaire à une concentration en masse ?", r: "cm = c × M (g/L = mol/L × g/mol)." },
        { q: "Titrage par les ions permanganate : comment voir l'équivalence ?", r: "Avant, MnO4– violet est consommé et décoloré. À l'équivalence, la teinte violette persiste dans le bécher." },
        { q: "L'échantillon a été dilué 20 fois avant le titrage. Que faire ?", r: "Multiplier la concentration trouvée par 20 pour obtenir celle de l'échantillon de départ." },
      ],
      quiz: [
        { q: "À l'équivalence d'un titrage, que se passe-t-il ?", choix: ["Le pH vaut toujours 7", "Le réactif limitant change", "Le réactif titré est en excès", "La réaction support devient limitée"], bonne: 1, expl: "À l'équivalence, les réactifs sont dans les proportions stœchiométriques : avant, le titrant est limitant ; après, c'est le titré. Le pH ne vaut 7 que dans un cas particulier.", niv: 1 },
        { q: "On titre VA = 10,0 mL d'acide par une soude à 0,100 mol/L. VE = 12,0 mL, réaction mole à mole. La concentration de l'acide vaut :", choix: ["1,20 mol/L", "0,0833 mol/L", "0,120 mol/L", "0,0120 mol/L"], bonne: 2, expl: "cA = cB·VE / VA = 0,100 × 12,0 / 10,0 = 0,120 mol/L. Le piège 0,0833 vient d'une inversion de VE et VA.", niv: 2 },
        { q: "Une réaction support de titrage doit être :", choix: ["lente, totale et unique", "rapide, totale et unique", "rapide, totale et réversible", "rapide, limitée et unique"], bonne: 1, expl: "Rapide pour repérer l'équivalence sans attendre, totale pour que les quantités soient exactes, unique pour qu'aucune autre réaction ne consomme de réactif.", niv: 1 },
        { q: "Titrage avec suivi pH-métrique : comment repère-t-on l'équivalence ?", choix: ["Au maximum de la dérivée dpH/dV", "Au point où le pH vaut 7", "Au début de la courbe", "Au point le plus bas de la courbe"], bonne: 0, expl: "L'équivalence est au milieu du saut de pH, là où le pH varie le plus vite : la dérivée dpH/dV y est maximale.", niv: 2 },
        { q: "Titrage de l'acide chlorhydrique par la soude, suivi conductimétrique. Avant l'équivalence, σ diminue car :", choix: ["des ions H3O+ sont remplacés par des ions Na+", "des ions Cl– sont consommés", "des ions HO– s'accumulent", "la solution se dilue fortement"], bonne: 0, expl: "H3O+ réagit avec HO– ; à sa place apparaît Na+, qui conduit beaucoup moins bien. Les ions Cl– ne réagissent pas.", niv: 2 },
        { q: "À quelle condition un indicateur coloré convient-il pour un titrage acide-base ?", choix: ["Sa forme acide doit être incolore", "Son pKa doit valoir exactement 7", "Il doit réagir avec le réactif titrant", "Sa zone de virage contient le pH à l'équivalence"], bonne: 3, expl: "Le changement de couleur doit avoir lieu pendant le saut de pH. Le pH à l'équivalence ne vaut pas forcément 7.", niv: 3 },
        { q: "Dans un titrage, le réactif titrant est :", choix: ["l'espèce à doser, dans le bécher", "un indicateur de fin de réaction", "la solution de la burette", "l'eau ajoutée pour diluer"], bonne: 2, expl: "Le titrant, de concentration connue, est versé à la burette. L'espèce à doser est le réactif titré.", niv: 1 },
        { q: "2 MnO4– + 5 H2C2O4 + 6 H+ → … À l'équivalence, on a versé 2,0×10⁻⁴ mol de MnO4–. Quantité d'acide oxalique titrée ?", choix: ["8,0×10⁻⁵ mol", "5,0×10⁻⁴ mol", "4,0×10⁻⁴ mol", "2,0×10⁻⁴ mol"], bonne: 1, expl: "n(H2C2O4)/5 = n(MnO4–)/2, donc n = 5/2 × 2,0×10⁻⁴ = 5,0×10⁻⁴ mol. Le piège 8,0×10⁻⁵ vient d'une inversion des coefficients.", niv: 2 },
        { q: "Pourquoi ajoute-t-on beaucoup d'eau dans le bécher avant un titrage conductimétrique ?", choix: ["Pour accélérer la réaction support", "Pour changer la quantité d'espèce titrée", "Pour rendre la réaction totale", "Pour obtenir des portions de droites"], bonne: 3, expl: "Avec un grand volume, l'ajout de titrant dilue peu : σ varie de façon affine avec V et la rupture de pente est nette.", niv: 3 },
        { q: "On ajoute 20 mL d'eau distillée dans le bécher avant de titrer. Le volume équivalent :", choix: ["augmente un peu", "double", "diminue", "ne change pas"], bonne: 3, expl: "L'eau ne change pas la quantité de matière à titrer, donc il faut la même quantité de titrant.", niv: 3 },
        { q: "Un vinaigre contient 0,90 mol/L d'acide éthanoïque (M = 60 g/mol). Sa concentration en masse vaut :", choix: ["54 g/L", "15 g/L", "5,4 g/L", "0,54 g/L"], bonne: 0, expl: "cm = c × M = 0,90 × 60 = 54 g/L. Le piège 15 g/L vient d'une division au lieu d'une multiplication.", niv: 2 },
        { q: "Sur la courbe pH = f(V) d'un titrage acide-base, l'équivalence correspond :", choix: ["au début de la zone tampon", "au point où pH = pKa", "au saut de pH", "au dernier point mesuré"], bonne: 2, expl: "Le saut de pH signale l'équivalence. Le point où pH = pKa est la demi-équivalence, pour un acide faible.", niv: 1 },
      ] },
    { chapitre: 'pc-3',
      fiche: `## Cinétique chimique : suivre et modéliser l'évolution d'une transformation

### Transformations lentes et rapides
- Une transformation est **rapide** si elle semble finie dès que les réactifs sont mélangés (exemple : un titrage acide-base). Elle est **lente** si on peut suivre son évolution pendant des secondes, des minutes ou des heures (exemple : la formation d'un ester).
- Le **temps de demi-réaction t1/2** est la durée au bout de laquelle l'**avancement atteint la moitié de sa valeur finale** : x(t1/2) = xf / 2. Il donne l'ordre de grandeur de la durée de la transformation.

### Suivre l'évolution d'un système
- **Méthodes physiques**, sans perturber le système : mesure de l'**absorbance** (espèce colorée), de la **conductivité** (ions qui apparaissent ou disparaissent), de la **pression** ou du **volume** d'un gaz formé.
- **Méthode chimique** : on fait des prélèvements à des dates connues, on les refroidit brutalement dans l'eau glacée (**trempe**) pour presque arrêter la réaction, puis on les titre.

### Les facteurs cinétiques
- Un **facteur cinétique** est un paramètre qui modifie la vitesse d'une transformation.
- **Température** : plus elle est élevée, plus la transformation est rapide (cuisson, autocuiseur). À l'inverse, le froid ralentit (réfrigérateur, trempe).
- **Concentration des réactifs** : plus elle est grande, plus la transformation est rapide.
- **Catalyseur** : espèce qui **accélère** une transformation sans apparaître dans l'équation bilan. Il est **régénéré** à la fin et **ne change pas l'état final**. Catalyse **homogène** (même phase que les réactifs), **hétérogène** (phase différente, comme le platine d'un pot catalytique), **enzymatique** (une enzyme, catalyseur du vivant).
- Interprétation microscopique : une réaction a lieu lors de **chocs efficaces** entre entités. Plus de concentration donne plus de chocs ; une température plus haute donne des chocs plus fréquents et plus énergétiques, donc plus efficaces.

### Vitesse volumique
- **Vitesse volumique de disparition** d'un réactif R : **vd = -d[R]/dt**. **Vitesse volumique d'apparition** d'un produit P : **va = d[P]/dt**. Unité : mol·L⁻¹·s⁻¹.
- Sur une courbe [R] = f(t), la vitesse à une date t est l'opposé du **coefficient directeur de la tangente** à la courbe à cette date.
- Exemple : la tangente passe par (0 s ; 0,050 mol/L) et (100 s ; 0 mol/L). Pente = -5,0×10^-4 mol·L⁻¹·s⁻¹, donc vd = 5,0×10^-4 mol·L⁻¹·s⁻¹.
- En général, la vitesse **diminue au cours du temps**, car la concentration des réactifs diminue.

### Loi de vitesse d'ordre 1
- Une réaction suit une **loi de vitesse d'ordre 1** par rapport au réactif R si **vd = k·[R]**, où k est la **constante de vitesse** (en s⁻¹).
- Alors **[R] = [R]0·e^(-k·t)** : la concentration décroît de façon exponentielle.
- Pour le vérifier : on trace **ln([R]) en fonction de t**. Si on obtient une droite de coefficient directeur -k, la loi est d'ordre 1. On peut aussi vérifier que vd est proportionnelle à [R].
- Propriété : pour l'ordre 1, **t1/2 = ln2 / k**, quelle que soit la concentration initiale. Exemple : k = 0,010 s⁻¹ donne t1/2 ≈ 69 s.

### Le mécanisme réactionnel
- L'équation bilan ne dit pas comment la réaction se passe à l'échelle des molécules. Le **mécanisme réactionnel** la décompose en **actes élémentaires**, qui se produisent en un seul choc.
- Un **intermédiaire réactionnel** est formé dans une étape puis consommé dans une autre : il n'apparaît pas dans l'équation bilan.
- Une **flèche courbe** représente le déplacement d'un **doublet d'électrons**. Elle part d'un **site donneur** (doublet non liant, liaison multiple, atome riche en électrons) et va vers un **site accepteur** (atome pauvre en électrons, souvent lié à un atome plus électronégatif).
- Un **catalyseur** change le mécanisme : il intervient dans une étape et il est régénéré dans une autre.

### À retenir pour le bac
- Définir t1/2 par l'avancement, et savoir le lire sur une courbe (moitié de la valeur finale, pas forcément moitié de la valeur initiale).
- Calculer une vitesse avec la tangente, avec le bon signe et l'unité mol·L⁻¹·s⁻¹.
- Ordre 1 : tracer ln[R] = f(t) et trouver une droite ; t1/2 = ln2/k ne dépend pas de [R]0.
- Piège : un catalyseur ne modifie ni l'état final ni le rendement, seulement la durée pour y arriver.
- Dans un mécanisme, la flèche va toujours du site donneur vers le site accepteur.`,
      cartes: [
        { q: "Définition du temps de demi-réaction t1/2 ?", r: "Durée au bout de laquelle l'avancement atteint la moitié de sa valeur finale : x(t1/2) = xf/2." },
        { q: "Qu'est-ce qu'un facteur cinétique ? Trois exemples.", r: "Un paramètre qui modifie la vitesse d'une transformation : la température, la concentration des réactifs, la présence d'un catalyseur." },
        { q: "Qu'est-ce qu'un catalyseur ?", r: "Une espèce qui accélère une transformation sans figurer dans l'équation bilan. Il est régénéré et ne change pas l'état final." },
        { q: "Catalyse homogène, hétérogène, enzymatique ?", r: "Homogène : même phase que les réactifs. Hétérogène : phase différente (solide dans un gaz par exemple). Enzymatique : le catalyseur est une enzyme." },
        { q: "Qu'est-ce qu'une trempe ?", r: "Un refroidissement brutal (et souvent une dilution) d'un prélèvement pour quasiment arrêter la réaction avant de le titrer." },
        { q: "Vitesse volumique de disparition d'un réactif R ?", r: "vd = -d[R]/dt, en mol·L⁻¹·s⁻¹. C'est l'opposé de la pente de la tangente à la courbe [R] = f(t)." },
        { q: "Vitesse volumique d'apparition d'un produit P ?", r: "va = d[P]/dt, en mol·L⁻¹·s⁻¹ : la pente de la tangente à la courbe [P] = f(t)." },
        { q: "Pourquoi la vitesse diminue-t-elle souvent au cours du temps ?", r: "Parce que la concentration des réactifs diminue, et la concentration est un facteur cinétique." },
        { q: "Loi de vitesse d'ordre 1 ?", r: "vd = k·[R], d'où [R](t) = [R]0·e^(-k·t). k est la constante de vitesse en s⁻¹." },
        { q: "Comment vérifier qu'une réaction est d'ordre 1 ?", r: "Tracer ln([R]) en fonction du temps : on doit obtenir une droite de pente -k. Ou vérifier que vd est proportionnelle à [R]." },
        { q: "t1/2 pour une réaction d'ordre 1 ?", r: "t1/2 = ln2 / k. Il ne dépend pas de la concentration initiale." },
        { q: "Qu'est-ce qu'un acte élémentaire ?", r: "Une étape du mécanisme qui se fait en un seul choc entre entités, à l'échelle microscopique." },
        { q: "Qu'est-ce qu'un intermédiaire réactionnel ?", r: "Une espèce formée dans une étape du mécanisme puis consommée dans une autre. Elle n'apparaît pas dans l'équation bilan." },
        { q: "Que représente une flèche courbe ?", r: "Le mouvement d'un doublet d'électrons, d'un site donneur vers un site accepteur." },
        { q: "Pourquoi une hausse de température accélère-t-elle une réaction ?", r: "Les entités bougent plus vite : les chocs sont plus fréquents et plus souvent efficaces." },
      ],
      quiz: [
        { q: "Le temps de demi-réaction t1/2 est la durée au bout de laquelle :", choix: ["l'avancement atteint la moitié de sa valeur finale", "la vitesse de réaction est divisée par deux", "la moitié des produits a disparu", "un quart du réactif limitant a réagi"], bonne: 0, expl: "Par définition x(t1/2) = xf/2. La vitesse n'est pas forcément divisée par deux à cette date.", niv: 1 },
        { q: "La tangente à [R] = f(t) à t = 20 s passe par (0 s ; 0,050 mol/L) et (100 s ; 0 mol/L). Vitesse de disparition de R à 20 s ?", choix: ["5,0×10⁻⁴ mol·L⁻¹·s⁻¹", "-5,0×10⁻⁴ mol·L⁻¹·s⁻¹", "2,0×10³ mol·L⁻¹·s⁻¹", "2,5×10⁻³ mol·L⁻¹·s⁻¹"], bonne: 0, expl: "Pente = (0 - 0,050)/(100 - 0) = -5,0×10⁻⁴ ; vd = -pente = 5,0×10⁻⁴ mol·L⁻¹·s⁻¹. Une vitesse de disparition est positive.", niv: 2 },
        { q: "Un catalyseur :", choix: ["déplace l'état final vers plus de produits", "est consommé au cours de la réaction", "augmente le rendement de la synthèse", "accélère la réaction sans changer l'état final"], bonne: 3, expl: "Le catalyseur diminue la durée pour atteindre l'état final, mais ne change pas cet état final, donc pas le rendement. Il est régénéré.", niv: 1 },
        { q: "Avant de titrer un prélèvement du milieu réactionnel, on le verse dans de l'eau glacée. Pourquoi ?", choix: ["Pour déplacer l'équilibre", "Pour faire précipiter les produits", "Pour rendre la réaction totale", "Pour ralentir fortement la réaction"], bonne: 3, expl: "C'est une trempe : le froid et la dilution, deux facteurs cinétiques, figent presque la composition au moment du prélèvement.", niv: 2 },
        { q: "La concentration d'un réactif R suit une loi de vitesse d'ordre 1 si :", choix: ["[R] diminue de façon linéaire avec t", "ln([R]) est une fonction affine du temps", "la vitesse est constante au cours du temps", "[R] est proportionnelle au temps"], bonne: 1, expl: "[R] = [R]0·e^(-kt) donne ln[R] = ln[R]0 - k·t : une droite. Si [R] diminuait linéairement, la vitesse serait constante (ordre 0).", niv: 2 },
        { q: "Réaction d'ordre 1 : que devient t1/2 si on double la concentration initiale du réactif ?", choix: ["Il double", "Il ne change pas", "Il est divisé par deux", "Il est multiplié par 4"], bonne: 1, expl: "Pour l'ordre 1, t1/2 = ln2/k ne dépend que de k, pas de la concentration initiale.", niv: 3 },
        { q: "Dans un mécanisme réactionnel, une flèche courbe va :", choix: ["d'un site accepteur vers un site donneur", "d'un produit vers un réactif", "d'un site donneur vers un site accepteur", "d'un réactif vers un catalyseur"], bonne: 2, expl: "La flèche suit le doublet d'électrons : elle part de l'endroit riche en électrons (donneur) vers l'endroit pauvre en électrons (accepteur).", niv: 1 },
        { q: "Pourquoi une hausse de température accélère-t-elle une réaction ?", choix: ["Elle augmente la concentration des réactifs", "Elle rend les chocs plus fréquents et efficaces", "Elle diminue le nombre de chocs entre entités", "Elle augmente la quantité de produits finale"], bonne: 1, expl: "L'agitation des entités augmente : il y a plus de chocs, et plus de chocs assez énergétiques pour réagir. L'état final, lui, n'est pas visé.", niv: 3 },
        { q: "Une réaction d'ordre 1 a une constante de vitesse k = 0,010 s⁻¹. Que vaut t1/2 ?", choix: ["69 s", "35 s", "50 s", "0,0069 s"], bonne: 0, expl: "t1/2 = ln2 / k = 0,693 / 0,010 ≈ 69 s.", niv: 2 },
        { q: "Un intermédiaire réactionnel est une espèce :", choix: ["qui ne participe à aucun acte élémentaire", "présente dans l'équation bilan", "introduite au départ et régénérée", "formée puis consommée au cours du mécanisme"], bonne: 3, expl: "Il apparaît dans une étape et disparaît dans une autre. Une espèce introduite puis régénérée est un catalyseur.", niv: 1 },
        { q: "On suit la formation d'un produit coloré au cours du temps avec un spectrophotomètre. Quelle grandeur mesure-t-on ?", choix: ["La conductivité σ", "Le pH", "L'absorbance A", "La pression P"], bonne: 2, expl: "Le spectrophotomètre mesure l'absorbance, proportionnelle à la concentration de l'espèce colorée (Beer-Lambert).", niv: 2 },
        { q: "Au cours d'une réaction, la vitesse de disparition d'un réactif diminue en général car :", choix: ["le catalyseur s'use", "la température de la solution baisse", "la concentration du réactif diminue", "les produits empêchent les chocs"], bonne: 2, expl: "Le réactif est consommé : sa concentration, facteur cinétique, baisse, donc les chocs efficaces sont moins nombreux.", niv: 3 },
      ] },
    { chapitre: 'pc-4',
      fiche: `## Transformations nucléaires et décroissance radioactive

### Le noyau et les désintégrations
- Un noyau se note **A/Z X** : **A** est le nombre de nucléons (protons + neutrons), **Z** le nombre de protons. Des **isotopes** ont le même Z mais des A différents (carbone 12 et carbone 14).
- Un noyau **radioactif** est instable : il se transforme spontanément en un autre noyau en émettant une particule. C'est une **désintégration**.
- **Radioactivité α** : émission d'un noyau d'hélium 4/2 He. Exemple : 238/92 U → 234/90 Th + 4/2 He.
- **Radioactivité β−** : émission d'un **électron** 0/-1 e (un neutron devient un proton). Exemple : 14/6 C → 14/7 N + 0/-1 e.
- **Radioactivité β+** : émission d'un **positon** 0/1 e (un proton devient un neutron).
- **Émission γ** : un noyau dans un état excité revient à un état plus stable en émettant un photon de très haute énergie.
- **Lois de conservation** (dites de Soddy) : au cours d'une réaction nucléaire, le **nombre de nucléons A** et la **charge électrique Z** se conservent. La masse, elle, n'est pas exactement conservée.

### Le caractère aléatoire
- On ne peut **pas prévoir** à quel instant un noyau donné va se désintégrer : c'est un phénomène **aléatoire**. On ne connaît qu'une probabilité de désintégration par unité de temps.
- Sur un très grand nombre de noyaux, le comportement devient **prévisible** : c'est la loi de décroissance.

### La loi de décroissance radioactive
- Le nombre de noyaux qui se désintègrent pendant une courte durée est proportionnel au nombre de noyaux présents : **dN/dt = -λ·N**.
- Solution : **N(t) = N0·e^(-λ·t)**, où N0 est le nombre initial de noyaux et **λ la constante radioactive** (en s⁻¹, ou en an⁻¹, en jour⁻¹…). λ dépend du noyau, pas de la quantité.
- **Demi-vie t1/2** : durée au bout de laquelle **la moitié des noyaux** présents s'est désintégrée. **t1/2 = ln2 / λ**.
- Après n demi-vies, il reste **N0 / 2^n** noyaux : la moitié après une demi-vie, un quart après deux, un huitième après trois.
- Exemple : iode 131, t1/2 = 8 jours. Au bout de 24 jours (3 demi-vies), il reste 1/8 des noyaux.

### L'activité
- L'**activité A** d'un échantillon est le nombre de désintégrations par seconde. Unité : le **becquerel (Bq)**, 1 Bq = 1 désintégration par seconde.
- **A = λ·N** : l'activité est proportionnelle au nombre de noyaux radioactifs. Elle suit la même loi : **A(t) = A0·e^(-λ·t)**.
- Exemple : A0 = 8 000 Bq et t1/2 = 3,0 h. Après 6,0 h, soit deux demi-vies, A = 2 000 Bq.

### La datation
- Principe : on mesure ce qui reste d'un noyau radioactif et on en déduit la durée écoulée, avec t = (1/λ)·ln(A0/A) ou en comptant les demi-vies.
- **Carbone 14** (t1/2 ≈ 5 730 ans) : un être vivant échange du carbone avec son milieu, sa teneur en carbone 14 reste constante. À sa mort, elle diminue. On date ainsi des restes jusqu'à environ 50 000 ans. Au-delà, il ne reste presque plus de carbone 14 mesurable.
- Exemple : un os dont l'activité en carbone 14 n'est plus que 25 % de la valeur initiale a environ 2 × 5 730 = 11 460 ans.
- Pour les roches très anciennes, on utilise des noyaux de demi-vie beaucoup plus longue (uranium-plomb, potassium-argon).

### Radioprotection et applications
- Les rayonnements ionisants peuvent endommager les cellules. Pour se protéger : **s'éloigner** de la source, **réduire la durée** d'exposition, mettre un **écran**.
- Pouvoir de pénétration : les particules α sont arrêtées par une feuille de papier, les β par quelques millimètres d'aluminium, les γ demandent du plomb ou du béton épais.
- Applications : imagerie médicale (scintigraphie), radiothérapie, datation, production d'électricité dans les centrales nucléaires (fission).

### À retenir pour le bac
- Écrire une équation de désintégration en conservant A et Z.
- N(t) = N0·e^(-λ·t), A = λ·N et t1/2 = ln2/λ : les trois relations à connaître par cœur.
- Lire t1/2 sur une courbe : la date où N (ou A) vaut la moitié de sa valeur initiale.
- Piège : la demi-vie ne dépend pas de la quantité de noyaux de départ.
- Pour UN noyau, on ne peut rien prédire : seule la population suit la loi exponentielle.`,
      cartes: [
        { q: "Que représentent A et Z dans A/Z X ?", r: "A : nombre de nucléons (protons + neutrons). Z : nombre de protons (numéro atomique)." },
        { q: "Qu'émet un noyau lors d'une désintégration α ?", r: "Un noyau d'hélium 4/2 He. Le noyau fils a A - 4 nucléons et Z - 2 protons." },
        { q: "Qu'émet un noyau lors d'une désintégration β− ?", r: "Un électron 0/-1 e. Un neutron du noyau devient un proton : Z augmente de 1, A ne change pas." },
        { q: "Qu'est-ce que l'émission γ ?", r: "L'émission d'un photon de très haute énergie par un noyau excité qui revient vers un état plus stable." },
        { q: "Que conservent les lois de Soddy ?", r: "Le nombre de nucléons A et la charge électrique Z, au cours de toute réaction nucléaire." },
        { q: "Pourquoi dit-on que la désintégration est aléatoire ?", r: "On ne peut pas prévoir l'instant où un noyau donné se désintégrera. On connaît seulement une probabilité." },
        { q: "Loi de décroissance radioactive ?", r: "N(t) = N0·e^(-λ·t), avec λ la constante radioactive (en s⁻¹)." },
        { q: "Définition de la demi-vie ?", r: "Durée au bout de laquelle la moitié des noyaux radioactifs présents s'est désintégrée." },
        { q: "Relation entre t1/2 et λ ?", r: "t1/2 = ln2 / λ." },
        { q: "Combien reste-t-il de noyaux après n demi-vies ?", r: "N0 / 2^n : la moitié après une demi-vie, un quart après deux, un huitième après trois." },
        { q: "Définition et unité de l'activité ?", r: "Nombre de désintégrations par seconde, en becquerels (Bq). A = λ·N." },
        { q: "Principe de la datation au carbone 14 ?", r: "À la mort d'un être vivant, son carbone 14 n'est plus renouvelé et décroît (t1/2 ≈ 5 730 ans). On mesure ce qui reste pour trouver l'âge." },
        { q: "Pourquoi le carbone 14 ne date-t-il pas les roches de millions d'années ?", r: "Après plusieurs dizaines de milliers d'années, il ne reste presque plus de carbone 14 mesurable." },
        { q: "Trois façons de se protéger des rayonnements ?", r: "S'éloigner de la source, réduire la durée d'exposition, placer un écran (plomb ou béton pour les γ)." },
      ],
      quiz: [
        { q: "Lors d'une désintégration β−, le noyau émet :", choix: ["un noyau d'hélium", "un électron", "un positon", "un neutron"], bonne: 1, expl: "β− : un neutron devient un proton et un électron est émis. Le positon correspond à β+, le noyau d'hélium à α.", niv: 1 },
        { q: "L'uranium 238/92 U se désintègre en émettant une particule α. Le noyau fils a :", choix: ["A = 236 et Z = 90", "A = 238 et Z = 91", "A = 234 et Z = 92", "A = 234 et Z = 90"], bonne: 3, expl: "La particule α emporte 4 nucléons et 2 protons : 238 - 4 = 234 et 92 - 2 = 90 (c'est le thorium).", niv: 2 },
        { q: "L'activité d'un échantillon radioactif s'exprime en :", choix: ["becquerel (Bq)", "joule par seconde (J/s)", "gray (Gy)", "sievert (Sv)"], bonne: 0, expl: "1 Bq = 1 désintégration par seconde. Le gray et le sievert mesurent des doses reçues.", niv: 1 },
        { q: "Un isotope a une demi-vie de 8 jours. Quelle fraction des noyaux initiaux reste au bout de 24 jours ?", choix: ["Un tiers", "Un seizième", "Un quart", "Un huitième"], bonne: 3, expl: "24 jours = 3 demi-vies : il reste (1/2)³ = 1/8 des noyaux. Le piège « un tiers » vient d'une division par 3.", niv: 2 },
        { q: "Le carbone 14 a une demi-vie de 5 730 ans. Un os a perdu 75 % de son carbone 14 initial. Son âge est d'environ :", choix: ["4 300 ans", "2 900 ans", "11 500 ans", "8 600 ans"], bonne: 2, expl: "Il reste 25 % = 1/4 : deux demi-vies, soit 2 × 5 730 ≈ 11 500 ans.", niv: 2 },
        { q: "Que peut-on prévoir pour un seul noyau radioactif ?", choix: ["Seulement une probabilité de désintégration", "Qu'il se désintègre au bout d'une demi-vie", "La date exacte de sa désintégration", "Qu'il se désintègre avant ses voisins"], bonne: 0, expl: "La désintégration est aléatoire : la demi-vie décrit une grande population de noyaux, pas un noyau seul.", niv: 3 },
        { q: "Quelle est la relation entre la demi-vie et la constante radioactive λ ?", choix: ["t1/2 = λ·ln2", "t1/2 = 1 / λ", "t1/2 = ln2 / λ", "t1/2 = λ / 2"], bonne: 2, expl: "En posant N(t1/2) = N0/2 dans N0·e^(-λt), on trouve t1/2 = ln2/λ.", niv: 1 },
        { q: "Pour se protéger d'un rayonnement γ, il faut plutôt :", choix: ["une feuille de papier", "une brique de plomb", "une vitre fine", "une plaque d'aluminium"], bonne: 1, expl: "Les γ sont très pénétrants : il faut un écran épais et dense. Le papier arrête les α, l'aluminium les β.", niv: 1 },
        { q: "N(t) = N0·e^(-λt) avec λ = 0,10 h⁻¹. Quelle fraction de N0 reste-t-il au bout de 10 h ?", choix: ["0,37", "0,50", "0,90", "0,10"], bonne: 0, expl: "λt = 0,10 × 10 = 1, et e^(-1) ≈ 0,37. Ce n'est pas la moitié, car 10 h n'est pas la demi-vie (ln2/0,10 ≈ 6,9 h).", niv: 2 },
        { q: "Pourquoi le carbone 14 ne permet-il pas de dater une roche vieille de plusieurs millions d'années ?", choix: ["Les roches ne sont jamais radioactives", "Il ne reste presque plus de carbone 14 mesurable", "Sa demi-vie est trop longue", "Le carbone 14 est un isotope stable"], bonne: 1, expl: "Après des centaines de demi-vies, l'activité restante est trop faible pour être mesurée. Il faut un noyau de demi-vie plus longue.", niv: 3 },
        { q: "Un échantillon a une activité de 8 000 Bq ; sa demi-vie est de 3,0 h. Son activité au bout de 6,0 h vaut :", choix: ["4 000 Bq", "1 000 Bq", "2 000 Bq", "500 Bq"], bonne: 2, expl: "6,0 h = 2 demi-vies : l'activité est divisée par 4, soit 2 000 Bq.", niv: 2 },
        { q: "Au cours d'une désintégration radioactive, qu'est-ce qui est conservé ?", choix: ["La masse et le nombre de neutrons", "La masse et le nombre de protons", "Le nombre de protons et de neutrons", "Le nombre de nucléons et la charge électrique"], bonne: 3, expl: "Les lois de Soddy conservent A et Z. Le nombre de protons change (β, α) et la masse n'est pas rigoureusement conservée.", niv: 3 },
      ] },
    { chapitre: 'pc-5',
      fiche: `## Sens d'évolution spontanée et piles

### Transformations totales et non totales
- Une transformation est **totale** si l'un des réactifs est entièrement consommé : l'avancement final xf est égal à l'avancement maximal xmax.
- Beaucoup de transformations sont **non totales** : elles s'arrêtent avant, dans un **état d'équilibre** où réactifs et produits coexistent.
- **Taux d'avancement final : τ = xf / xmax**. τ = 1 pour une transformation totale, τ < 1 sinon. Exemple : xf = 1,5×10^-3 mol et xmax = 2,0×10^-3 mol donnent τ = 0,75.
- L'équilibre est **dynamique** : à l'échelle microscopique, la réaction directe et la réaction inverse continuent à la même vitesse, donc la composition ne change plus.

### Le quotient de réaction Qr
- Pour la réaction a A + b B = c C + d D en solution : **Qr = ([C]^c·[D]^d) / ([A]^a·[B]^b)**, chaque concentration étant divisée par c° = 1 mol/L. Qr n'a pas d'unité.
- Le **solvant** (l'eau) et les **solides** n'apparaissent pas dans Qr : par convention, ils comptent pour 1.
- Exemple : Zn(s) + Cu²⁺(aq) = Zn²⁺(aq) + Cu(s) donne Qr = [Zn²⁺] / [Cu²⁺].

### La constante d'équilibre K
- À l'équilibre, le quotient de réaction prend une valeur particulière : **Qr,éq = K**, la **constante d'équilibre**.
- K ne dépend que de la réaction et de la **température**. Elle ne dépend pas de l'état initial.
- Si K est très grand (supérieur à 10^4 environ), la transformation peut être considérée comme totale.

### Le critère d'évolution spontanée
- On calcule Qr,i dans l'état initial et on le compare à K :
- **Qr,i < K** : le système évolue dans le **sens direct** (formation des produits), Qr augmente jusqu'à K.
- **Qr,i > K** : le système évolue dans le **sens inverse**.
- **Qr,i = K** : le système est déjà à l'**équilibre**, il n'évolue pas.
- Exemple : Qr,i = 2,0×10^-3 et K = 5,0 : Qr,i < K, évolution dans le sens direct.

### Oxydants et réducteurs
- Un **oxydant** capte des électrons, un **réducteur** en cède. Couple Ox/Red : Ox + n e– = Red.
- Une **oxydation** est une perte d'électrons, une **réduction** un gain d'électrons. Une réaction d'oxydo-réduction est un transfert d'électrons.
- Oxydants usuels : dioxygène O2, ion permanganate MnO4–, eau de Javel (ion hypochlorite ClO–), diiode I2. Réducteurs usuels : métaux (zinc, fer), dihydrogène H2, ion thiosulfate.

### La pile
- Une **pile** convertit l'énergie chimique d'une **transformation spontanée d'oxydo-réduction** en énergie électrique. Les réactifs ne sont pas en contact direct : les électrons passent par le circuit extérieur.
- Elle est formée de deux **demi-piles** (un métal plongé dans une solution de ses ions) reliées par un **pont salin**, qui contient des ions et ferme le circuit en assurant la neutralité électrique des solutions.
- À l'**anode** se produit l'**oxydation** : c'est la **borne négative**. À la **cathode** se produit la **réduction** : c'est la **borne positive**.
- Les **électrons** circulent dans le circuit extérieur de la borne négative vers la borne positive. Le courant va dans l'autre sens.
- Exemple, pile Daniell : à l'anode Zn → Zn²⁺ + 2 e– (la lame de zinc s'use) ; à la cathode Cu²⁺ + 2 e– → Cu (du cuivre se dépose).
- La **tension à vide** (mesurée au voltmètre, sans débit) dépend des couples choisis.

### Usure et capacité d'une pile
- Pendant que la pile débite, Qr augmente vers K. Quand **Qr = K**, le système est à l'équilibre : la pile est **usée**, elle ne débite plus.
- **Capacité électrique** : charge totale qu'elle peut débiter, **Q = n(e–)·F = I·Δt**, avec F = 96 500 C/mol (constante de Faraday) et Δt en secondes.
- Exemple : I = 0,20 A pendant 2,0 h donne Q = 0,20 × 7 200 = 1 440 C, soit n(e–) = 1 440 / 96 500 ≈ 1,5×10^-2 mol.

### À retenir pour le bac
- Écrire Qr sans le solvant ni les solides, puis comparer Qr,i à K pour prévoir le sens d'évolution.
- Anode = oxydation = borne négative ; cathode = réduction = borne positive.
- Une pile usée est un système à l'équilibre : Qr = K.
- Piège : convertir les heures en secondes dans Q = I·Δt.
- K ne dépend que de la température, jamais des quantités initiales.`,
      cartes: [
        { q: "Taux d'avancement final ?", r: "τ = xf / xmax. τ = 1 pour une transformation totale, τ < 1 pour une transformation non totale." },
        { q: "Pourquoi dit-on qu'un équilibre chimique est dynamique ?", r: "Les réactions directe et inverse continuent à la même vitesse : la composition ne change plus, mais les entités réagissent toujours." },
        { q: "Quotient de réaction de a A + b B = c C + d D ?", r: "Qr = ([C]^c·[D]^d) / ([A]^a·[B]^b), concentrations divisées par c° = 1 mol/L ; sans le solvant ni les solides." },
        { q: "Qu'est-ce que la constante d'équilibre K ?", r: "La valeur du quotient de réaction à l'équilibre : Qr,éq = K. Elle ne dépend que de la température pour une réaction donnée." },
        { q: "Critère d'évolution spontanée ?", r: "Qr,i < K : sens direct. Qr,i > K : sens inverse. Qr,i = K : équilibre, pas d'évolution." },
        { q: "Qu'est-ce qu'une oxydation ? Une réduction ?", r: "Oxydation : perte d'électrons par un réducteur. Réduction : gain d'électrons par un oxydant." },
        { q: "Que se passe-t-il à l'anode d'une pile ?", r: "Une oxydation. C'est la borne négative : les électrons en partent vers le circuit extérieur." },
        { q: "Que se passe-t-il à la cathode d'une pile ?", r: "Une réduction. C'est la borne positive : les électrons y arrivent." },
        { q: "Rôle du pont salin ?", r: "Fermer le circuit grâce à ses ions et maintenir la neutralité électrique des solutions. Il ne transporte pas d'électrons." },
        { q: "Sens de circulation des électrons dans une pile ?", r: "Dans le circuit extérieur, de la borne négative (anode) vers la borne positive (cathode)." },
        { q: "Quand une pile est-elle usée ?", r: "Quand le système atteint l'équilibre : Qr = K. La transformation s'arrête, la pile ne débite plus." },
        { q: "Capacité électrique d'une pile ?", r: "Q = n(e–)·F = I·Δt, avec F = 96 500 C/mol et Δt en secondes." },
        { q: "Pile Daniell : réactions aux électrodes ?", r: "Anode (zinc) : Zn → Zn²⁺ + 2 e–. Cathode (cuivre) : Cu²⁺ + 2 e– → Cu." },
        { q: "Deux oxydants et deux réducteurs usuels ?", r: "Oxydants : dioxygène O2, ion permanganate MnO4– (ou eau de Javel). Réducteurs : métaux comme le zinc, dihydrogène H2." },
      ],
      quiz: [
        { q: "Le taux d'avancement final τ est défini par :", choix: ["τ = xmax / xf", "τ = xf / xmax", "τ = xf × xmax", "τ = xmax - xf"], bonne: 1, expl: "τ compare l'avancement réellement atteint à l'avancement maximal : τ = xf/xmax, compris entre 0 et 1.", niv: 1 },
        { q: "Pour Zn(s) + Cu²⁺(aq) = Zn²⁺(aq) + Cu(s), le quotient de réaction s'écrit :", choix: ["Qr = [Zn²⁺]·[Cu²⁺]", "Qr = [Cu²⁺] / [Zn²⁺]", "Qr = [Zn²⁺]·[Cu] / ([Zn]·[Cu²⁺])", "Qr = [Zn²⁺] / [Cu²⁺]"], bonne: 3, expl: "Les produits au numérateur, les réactifs au dénominateur, et les solides Zn et Cu n'apparaissent pas.", niv: 2 },
        { q: "La constante d'équilibre K d'une réaction donnée dépend :", choix: ["des concentrations initiales", "du volume de la solution", "uniquement de la température", "de la présence d'un catalyseur"], bonne: 2, expl: "K ne dépend que de la température. Un catalyseur change la vitesse, pas l'équilibre.", niv: 1 },
        { q: "Dans l'état initial, Qr,i = 2,0×10⁻³ et K = 5,0. Le système :", choix: ["évolue en sens direct", "évolue en sens inverse", "n'évolue pas, il est à l'équilibre", "évolue puis revient à l'état initial"], bonne: 0, expl: "Qr,i < K : le système forme des produits (sens direct) jusqu'à ce que Qr atteigne K.", niv: 2 },
        { q: "Dans une pile, l'électrode où se produit l'oxydation est :", choix: ["la cathode, borne positive", "la cathode, borne négative", "l'anode, borne positive", "l'anode, borne négative"], bonne: 3, expl: "L'oxydation libère des électrons, qui partent dans le circuit : cette électrode, l'anode, est la borne négative.", niv: 2 },
        { q: "Pourquoi une pile finit-elle par s'user ?", choix: ["Le pont salin se vide de ses ions", "Qr évolue jusqu'à atteindre K", "Les électrons du métal sont épuisés", "La constante K diminue avec le temps"], bonne: 1, expl: "La transformation spontanée fait évoluer Qr vers K. À l'équilibre, plus rien n'évolue : la pile ne débite plus.", niv: 3 },
        { q: "Quel est le rôle du pont salin dans une pile ?", choix: ["Apporter des électrons à la cathode", "Catalyser la réaction aux électrodes", "Fermer le circuit par des ions", "Fixer la tension à vide de la pile"], bonne: 2, expl: "Ses ions se déplacent et assurent la neutralité des solutions. Les électrons, eux, ne passent que par les fils.", niv: 1 },
        { q: "Une pile débite 0,20 A pendant 2,0 h. Quantité d'électrons échangés ? (F = 96 500 C/mol)", choix: ["4,1×10⁻⁶ mol", "1,5×10⁻² mol", "2,7×10⁻¹ mol", "0,40 mol"], bonne: 1, expl: "Q = I·Δt = 0,20 × 7 200 = 1 440 C, puis n = Q/F ≈ 1,5×10⁻² mol. Le piège 4,1×10⁻⁶ vient d'une durée laissée en heures.", niv: 2 },
        { q: "Pile Daniell : le zinc est oxydé selon Zn → Zn²⁺ + 2 e–. Que peut-on dire de l'électrode de zinc ?", choix: ["C'est la cathode de la pile", "C'est la borne positive de la pile", "Le métal zinc y est consommé", "Des ions Zn²⁺ s'y déposent en métal"], bonne: 2, expl: "Le zinc métallique se transforme en ions qui passent en solution : la lame s'use. C'est l'anode, borne négative.", niv: 3 },
        { q: "Quand un système chimique est à l'équilibre :", choix: ["Qr est égal à K", "Qr est nul", "K est égal à 1", "tous les réactifs ont disparu"], bonne: 0, expl: "À l'équilibre, Qr,éq = K. Les réactifs ne sont pas forcément épuisés : c'est le cas d'une transformation non totale.", niv: 1 },
        { q: "Pour une transformation, xmax = 2,0×10⁻³ mol et xf = 1,5×10⁻³ mol. Le taux d'avancement final vaut :", choix: ["0,50", "1,3", "1,5", "0,75"], bonne: 3, expl: "τ = xf/xmax = 1,5/2,0 = 0,75. Un taux d'avancement ne peut pas dépasser 1.", niv: 2 },
        { q: "Pourquoi l'eau, solvant, n'apparaît-elle pas dans l'expression de Qr ?", choix: ["Par convention, elle compte pour 1", "Elle ne participe pas à la réaction", "Sa concentration est nulle", "Elle est consommée dès le début"], bonne: 0, expl: "Le solvant, très majoritaire, compte pour 1 par convention, comme les solides. L'eau peut pourtant être un réactif.", niv: 3 },
      ] },
    { chapitre: 'pc-6',
      fiche: `## Force des acides et des bases

### La constante d'acidité Ka
- La réaction d'un acide AH avec l'eau s'écrit AH + H2O = A– + H3O+. Sa constante d'équilibre est la **constante d'acidité** : **Ka = [A–]éq·[H3O+]éq / ([AH]éq·c°)**.
- On utilise souvent **pKa = -log Ka**, donc Ka = 10^(-pKa).
- Exemple : acide éthanoïque, pKa = 4,8 à 25 °C.

### Le produit ionique de l'eau
- L'eau réagit très peu avec elle-même : 2 H2O = H3O+ + HO–. Constante : **Ke = [H3O+]·[HO–] = 1,0×10^-14** à 25 °C, soit **pKe = 14**.
- Dans toute solution aqueuse à 25 °C, connaissant [HO–], on trouve [H3O+] = Ke / [HO–].

### Acides et bases forts
- Un **acide fort** réagit **totalement** avec l'eau (τ = 1). Pour une concentration apportée c : [H3O+] = c et **pH = -log(c/c°)**. Exemples : acide chlorhydrique, acide nitrique.
- Une **base forte** réagit totalement avec l'eau en donnant HO–. Pour une concentration c : [HO–] = c et **pH = 14 + log(c/c°)** à 25 °C. Exemple : la soude (hydroxyde de sodium) à 1,0×10^-3 mol/L a un pH de 11,0.
- Dans l'eau, un acide fort n'existe pas sous forme AH : il est entièrement transformé.

### Acides et bases faibles
- Un **acide faible** réagit de façon **limitée** avec l'eau : τ < 1, et pH > -log(c/c°). Exemple : un acide à 1,0×10^-2 mol/L qui donne pH = 3,4 est faible (un acide fort donnerait pH = 2,0).
- Plus **Ka est grand** (pKa petit), plus l'acide est **fort** : il cède plus facilement H+.
- Plus le **pKa est grand**, plus la **base conjuguée est forte**.
- À même concentration, l'acide de plus petit pKa donne le pH le plus bas.

### Prédominance et distribution
- Relation utile : **pH = pKa + log([A–]/[AH])**.
- Si **pH < pKa**, la forme acide **AH prédomine**. Si **pH > pKa**, la forme basique **A– prédomine**. Si pH = pKa, [AH] = [A–].
- **Diagramme de prédominance** : un axe de pH coupé à la valeur du pKa, avec AH à gauche et A– à droite.
- **Diagramme de distribution** : il donne le pourcentage de AH et de A– en fonction du pH. Les deux courbes se croisent à pH = pKa (50 % chacune).
- Exemple : dans un vinaigre à pH 2,9, l'acide éthanoïque (pKa 4,8) prédomine.
- Un **acide α-aminé** possède un groupe acide carboxylique et un groupe amine : il a deux pKa et donc trois domaines de prédominance.

### Indicateurs colorés
- Un indicateur coloré est un couple acide/base HInd/Ind– dont les deux formes ont des **couleurs différentes**.
- Sa **zone de virage** s'étend environ de **pKa - 1 à pKa + 1**. Exemple : pKa = 9,4 donne une zone de virage de 8,4 à 10,4.

### Les solutions tampons
- Une **solution tampon** a un pH qui **varie peu** par ajout modéré d'acide ou de base, ou par dilution modérée.
- On la prépare en mélangeant un acide faible et sa base conjuguée en quantités voisines : son pH est alors proche du pKa du couple.
- Exemple du vivant : le sang est tamponné vers pH 7,4, en particulier par le couple CO2,H2O/HCO3–. Une variation de quelques dixièmes peut être grave.

### À retenir pour le bac
- Ka = [A–]·[H3O+] / ([AH]·c°) et pKa = -log Ka : savoir les écrire à partir de l'équation.
- pH d'un acide fort : -log c. Si le pH mesuré est plus grand, l'acide est faible : raisonnement très fréquent.
- Placer AH et A– sur un diagramme de prédominance et conclure selon le pH.
- Piège : un grand pKa signifie un acide faible, pas un acide fort.
- Solution tampon : pH proche du pKa, variations faibles.`,
      cartes: [
        { q: "Expression de la constante d'acidité Ka ?", r: "Ka = [A–]éq·[H3O+]éq / ([AH]éq·c°), constante d'équilibre de AH + H2O = A– + H3O+." },
        { q: "Lien entre pKa et Ka ?", r: "pKa = -log Ka, et Ka = 10^(-pKa)." },
        { q: "Produit ionique de l'eau ?", r: "Ke = [H3O+]·[HO–] = 1,0×10^-14 à 25 °C (pKe = 14)." },
        { q: "Qu'est-ce qu'un acide fort ?", r: "Un acide qui réagit totalement avec l'eau. Pour une concentration c : pH = -log(c/c°)." },
        { q: "pH d'une base forte de concentration c ?", r: "[HO–] = c, donc pH = 14 + log(c/c°) à 25 °C." },
        { q: "Comment savoir si un acide est faible à partir d'une mesure de pH ?", r: "Si le pH mesuré est supérieur à -log(c/c°), l'acide n'a pas réagi totalement : il est faible." },
        { q: "Plus le pKa est petit, plus…", r: "… l'acide est fort (Ka grand), et plus sa base conjuguée est faible." },
        { q: "Relation entre pH et pKa ?", r: "pH = pKa + log([A–]/[AH])." },
        { q: "Quelle espèce prédomine si pH < pKa ?", r: "La forme acide AH." },
        { q: "Où se croisent les courbes d'un diagramme de distribution ?", r: "À pH = pKa : il y a 50 % de AH et 50 % de A–." },
        { q: "Zone de virage d'un indicateur coloré ?", r: "Environ de pKa - 1 à pKa + 1, où les deux formes colorées coexistent." },
        { q: "Qu'est-ce qu'une solution tampon ?", r: "Une solution dont le pH varie peu par ajout modéré d'acide, de base ou par dilution modérée. Son pH est proche du pKa du couple utilisé." },
        { q: "Un exemple de solution tampon dans le vivant ?", r: "Le sang, tamponné vers pH 7,4, notamment par le couple CO2,H2O / HCO3–." },
        { q: "Pourquoi un acide α-aminé a-t-il deux pKa ?", r: "Il possède deux groupes acido-basiques : un groupe acide carboxylique et un groupe amine." },
      ],
      quiz: [
        { q: "Plus un acide est fort dans l'eau, plus :", choix: ["son pKa est grand", "sa base conjuguée est forte", "sa réaction avec l'eau est lente", "son Ka est grand"], bonne: 3, expl: "Un acide fort cède facilement H+ : la constante Ka est grande, donc le pKa est petit et la base conjuguée faible.", niv: 1 },
        { q: "Quel est le pH d'une solution d'acide nitrique, acide fort, à 1,0×10⁻² mol/L ?", choix: ["2,0", "12,0", "1,0", "0,010"], bonne: 0, expl: "Acide fort : [H3O+] = c = 1,0×10⁻² mol/L, donc pH = 2,0. 12,0 serait le pH d'une base forte à cette concentration.", niv: 2 },
        { q: "Pour un couple AH/A–, si le pH de la solution est inférieur au pKa :", choix: ["A– prédomine", "AH et A– sont en quantités égales", "AH prédomine", "la solution est neutre"], bonne: 2, expl: "pH = pKa + log([A–]/[AH]) : si pH < pKa, le log est négatif, donc [AH] > [A–].", niv: 1 },
        { q: "Acide éthanoïque : pKa = 4,8. Dans un vinaigre de pH 2,9, quelle espèce prédomine ?", choix: ["L'ion éthanoate CH3COO–", "L'éthanol CH3CH2OH", "L'acide éthanoïque CH3COOH", "L'ion hydroxyde HO–"], bonne: 2, expl: "2,9 < 4,8 : on est dans le domaine de la forme acide CH3COOH.", niv: 2 },
        { q: "Une solution de soude (base forte) à 1,0×10⁻³ mol/L a, à 25 °C, un pH de :", choix: ["10,0", "3,0", "7,0", "11,0"], bonne: 3, expl: "[HO–] = 1,0×10⁻³ mol/L, donc [H3O+] = 10⁻¹⁴/10⁻³ = 10⁻¹¹ mol/L et pH = 11,0. Le piège 3,0 oublie que c'est une base.", niv: 2 },
        { q: "Un acide à 1,0×10⁻² mol/L donne une solution de pH 3,4. On en déduit que cet acide :", choix: ["est un acide faible", "a réagi totalement avec l'eau", "est un acide fort", "a un pKa égal à 3,4"], bonne: 0, expl: "S'il était fort, le pH serait 2,0. Un pH plus élevé montre une réaction limitée : l'acide est faible. Le pH n'est pas égal au pKa.", niv: 3 },
        { q: "À 25 °C, le produit ionique de l'eau vaut :", choix: ["Ke = 7", "Ke = 1,0×10⁻¹⁴", "Ke = 1,0×10⁻⁷", "Ke = 14"], bonne: 1, expl: "Ke = [H3O+]·[HO–] = 1,0×10⁻¹⁴ ; c'est pKe qui vaut 14.", niv: 1 },
        { q: "Avec pH = pKa + log([A–]/[AH]), à pH = pKa + 1, le rapport [A–]/[AH] vaut :", choix: ["1", "10", "2", "0,1"], bonne: 1, expl: "log([A–]/[AH]) = 1, donc [A–]/[AH] = 10 : la base prédomine nettement.", niv: 2 },
        { q: "Le pH du sang reste proche de 7,4 malgré des apports d'acides. Pourquoi ?", choix: ["Le sang ne contient aucun acide", "Le sang est un acide fort dilué", "Le sang est une solution tampon", "Le sang est neutre à 37 °C"], bonne: 2, expl: "Le sang contient des couples acide/base (dont CO2,H2O/HCO3–) qui limitent les variations de pH.", niv: 3 },
        { q: "Une solution tampon est une solution dont le pH :", choix: ["vaut exactement 7", "varie peu par ajout modéré d'acide ou de base", "ne dépend que de la température", "baisse beaucoup quand on la dilue"], bonne: 1, expl: "C'est sa définition. Son pH est proche du pKa du couple utilisé, pas forcément 7.", niv: 1 },
        { q: "Un indicateur coloré a un pKa de 9,4. Sa zone de virage s'étend environ de :", choix: ["8,4 à 10,4", "6,4 à 8,4", "4,4 à 6,4", "9,4 à 11,4"], bonne: 0, expl: "La zone de virage va de pKa - 1 à pKa + 1, soit de 8,4 à 10,4.", niv: 2 },
        { q: "Deux acides de même concentration ont des pKa de 3,8 et 4,8. Lequel donne le pH le plus bas ?", choix: ["L'acide de pKa = 4,8", "Celui dont la base est la plus forte", "Ils donnent le même pH", "L'acide de pKa = 3,8"], bonne: 3, expl: "Le plus petit pKa correspond à l'acide le plus fort : il libère plus d'ions H3O+. Sa base conjuguée est la plus faible.", niv: 3 },
      ] },
    { chapitre: 'pc-7',
      fiche: `## Forcer le sens d'évolution : l'électrolyse

### Une transformation forcée
- Spontanément, un système évolue vers l'équilibre (Qr tend vers K). Une **électrolyse** est une **transformation forcée** : un **générateur** impose un courant et fait évoluer le système dans le **sens inverse du sens spontané**. Le système **s'éloigne** de l'état d'équilibre.
- L'électrolyse convertit de l'**énergie électrique** en **énergie chimique**. C'est l'inverse d'une pile.

### L'électrolyseur
- Un électrolyseur contient deux **électrodes** plongées dans un **électrolyte** (solution ou liquide contenant des ions), reliées à un générateur de tension continue.
- **Anode** : électrode reliée à la **borne +** du générateur. Il s'y produit une **oxydation**.
- **Cathode** : électrode reliée à la **borne –** du générateur. Il s'y produit une **réduction**.
- Dans une pile comme dans un électrolyseur, l'anode est toujours le siège de l'oxydation et la cathode celui de la réduction. Ce sont les **signes** des bornes qui changent : dans une pile, l'anode est la borne négative.
- Les électrons arrivent à la cathode par le circuit extérieur et repartent de l'anode. Dans l'électrolyte, ce sont les ions qui se déplacent.

### Exemple : l'électrolyse de l'eau
- En solution acidifiée, à la **cathode** : 2 H+ + 2 e– → H2. Il se forme du **dihydrogène**.
- À l'**anode** : 2 H2O → O2 + 4 H+ + 4 e–. Il se forme du **dioxygène**.
- Bilan : **2 H2O → 2 H2 + O2**. On recueille **deux fois plus de volume** de dihydrogène que de dioxygène (même température, même pression). Exemple : 40 mL de H2 pour 20 mL de O2.

### Faire le bilan de matière
- La charge électrique qui traverse l'électrolyseur : **Q = I·Δt**, avec I en ampères et Δt en **secondes**.
- La quantité d'électrons échangés : **n(e–) = Q / F**, avec F = 96 500 C/mol (constante de Faraday, charge d'une mole d'électrons).
- La demi-équation donne ensuite la quantité de produit formé. Exemple : I = 2,0 A pendant 30 min. Q = 2,0 × 1 800 = 3,6×10^3 C ; n(e–) = 3 600 / 96 500 ≈ 3,7×10^-2 mol. À la cathode, 2 H+ + 2 e– → H2, donc n(H2) = n(e–)/2 ≈ 1,9×10^-2 mol.
- Exemple de dépôt : Cu²⁺ + 2 e– → Cu. Avec 0,20 mol d'électrons, on dépose 0,10 mol de cuivre.

### Applications
- **Recharger un accumulateur** (batterie de téléphone, de voiture) est une électrolyse : on force la réaction inverse de celle qui a lieu quand il débite comme une pile.
- **Galvanoplastie** : déposer une fine couche de métal (zinc, argent, chrome) sur un objet. L'objet est la **cathode**, où les ions métalliques sont réduits en métal.
- **Production industrielle** : dihydrogène, dichlore, soude, aluminium, affinage du cuivre.
- **Stockage de l'énergie** : l'électricité produite en surplus (éolien, solaire) sert à fabriquer du dihydrogène par électrolyse de l'eau. Plus tard, une **pile à combustible** le reconvertit en électricité en ne rejetant que de l'eau.

### À retenir pour le bac
- Électrolyse = transformation forcée, sens inverse du sens spontané, le système s'éloigne de l'équilibre.
- Anode = oxydation, reliée à la borne + ; cathode = réduction, reliée à la borne –.
- Chaîne de calcul : Q = I·Δt, puis n(e–) = Q/F, puis la demi-équation.
- Piège : oublier de convertir les minutes ou les heures en secondes.
- Piège : dans les demi-équations, bien utiliser le nombre d'électrons pour passer à la quantité de produit.`,
      cartes: [
        { q: "Qu'est-ce qu'une électrolyse ?", r: "Une transformation forcée par un générateur électrique : le système évolue dans le sens inverse du sens spontané." },
        { q: "Quelle conversion d'énergie réalise un électrolyseur ?", r: "Il convertit de l'énergie électrique en énergie chimique, l'inverse d'une pile." },
        { q: "Électrolyseur : quelle réaction à l'anode ? À quelle borne est-elle reliée ?", r: "Une oxydation. L'anode est reliée à la borne + du générateur." },
        { q: "Électrolyseur : quelle réaction à la cathode ? À quelle borne est-elle reliée ?", r: "Une réduction. La cathode est reliée à la borne – du générateur." },
        { q: "Qu'est-ce qui change entre pile et électrolyseur pour l'anode ?", r: "Le signe : anode = borne – dans une pile, reliée à la borne + dans un électrolyseur. L'anode reste toujours le siège de l'oxydation." },
        { q: "Équation bilan de l'électrolyse de l'eau ?", r: "2 H2O → 2 H2 + O2. Le dihydrogène se forme à la cathode, le dioxygène à l'anode." },
        { q: "Charge électrique et intensité ?", r: "Q = I·Δt, avec Q en coulombs, I en ampères et Δt en secondes." },
        { q: "Charge et quantité d'électrons ?", r: "Q = n(e–)·F, avec F = 96 500 C/mol (constante de Faraday)." },
        { q: "Pourquoi recharger un accumulateur est-il une électrolyse ?", r: "Le chargeur impose un courant qui force la réaction inverse de celle qui se produit spontanément quand l'accumulateur débite." },
        { q: "Qu'est-ce que la galvanoplastie ?", r: "Le dépôt d'une couche de métal sur un objet par électrolyse. L'objet est placé à la cathode, où les ions métalliques sont réduits." },
        { q: "Comment l'électrolyse aide-t-elle à stocker l'énergie ?", r: "L'électricité en surplus produit du dihydrogène par électrolyse de l'eau ; une pile à combustible le reconvertit plus tard en électricité." },
        { q: "Électrolyse de l'eau : rapport des volumes de gaz ?", r: "Le volume de dihydrogène est le double de celui de dioxygène (2 H2 pour 1 O2), à température et pression égales." },
      ],
      quiz: [
        { q: "Une électrolyse est une transformation :", choix: ["spontanée qui produit de l'électricité", "forcée par un générateur électrique", "lente qui nécessite un catalyseur", "nucléaire provoquée par un courant"], bonne: 1, expl: "Le générateur impose le sens de la transformation, contraire au sens spontané. Une transformation spontanée qui produit de l'électricité, c'est une pile.", niv: 1 },
        { q: "Dans un électrolyseur, l'électrode reliée à la borne + du générateur est le siège :", choix: ["d'un dépôt de métal", "d'une réduction", "d'une oxydation", "d'une neutralisation"], bonne: 2, expl: "La borne + attire les électrons : l'électrode en perd, c'est une oxydation (anode). Le dépôt de métal est une réduction, à la cathode.", niv: 2 },
        { q: "Au cours d'une électrolyse, le système chimique évolue :", choix: ["vers l'équilibre, Qr tend vers K", "en s'éloignant de l'état d'équilibre", "seulement si K est très grand", "sans échange d'électrons"], bonne: 1, expl: "La transformation est forcée dans le sens inverse du sens spontané : Qr s'éloigne de K.", niv: 1 },
        { q: "Un électrolyseur est traversé par un courant de 2,0 A pendant 30 min. Quelle charge a circulé ?", choix: ["3,6×10³ C", "60 C", "15 C", "1,1×10⁵ C"], bonne: 0, expl: "Q = I·Δt = 2,0 × 1 800 s = 3,6×10³ C. Le piège 60 C vient d'une durée laissée en minutes.", niv: 2 },
        { q: "À la cathode : Cu²⁺ + 2 e– → Cu. Il a circulé 0,20 mol d'électrons. Quelle quantité de cuivre s'est déposée ?", choix: ["0,40 mol", "0,20 mol", "0,10 mol", "0,050 mol"], bonne: 2, expl: "Il faut 2 électrons par atome de cuivre : n(Cu) = 0,20/2 = 0,10 mol.", niv: 2 },
        { q: "Recharger la batterie d'un téléphone revient à :", choix: ["faire fonctionner une pile en sens direct", "atteindre plus vite l'équilibre", "augmenter la constante K", "réaliser une électrolyse"], bonne: 3, expl: "Le chargeur force la réaction inverse de la décharge : c'est une électrolyse. K, lui, ne dépend que de la température.", niv: 3 },
        { q: "Électrolyse de l'eau : quel gaz se forme à la cathode ?", choix: ["Le dioxygène", "Le dihydrogène", "Le dioxyde de carbone", "Le diazote"], bonne: 1, expl: "À la cathode a lieu une réduction : 2 H+ + 2 e– → H2. Le dioxygène se forme à l'anode.", niv: 1 },
        { q: "Électrolyse de l'eau : 2 H2O → 2 H2 + O2. On recueille 40 mL de dihydrogène. Volume de dioxygène dans les mêmes conditions ?", choix: ["80 mL", "40 mL", "10 mL", "20 mL"], bonne: 3, expl: "Il se forme deux fois moins de O2 que de H2 en quantité, donc en volume pour un gaz : 20 mL.", niv: 2 },
        { q: "Pourquoi le dihydrogène produit par électrolyse permet-il de stocker de l'énergie ?", choix: ["Il redonne de l'électricité dans une pile", "Il se forme sans courant électrique", "Il abonde dans l'atmosphère", "Il est plus léger que l'air"], bonne: 0, expl: "L'énergie électrique est stockée sous forme chimique ; une pile à combustible la restitue plus tard sous forme électrique.", niv: 3 },
        { q: "Quelle relation relie la charge électrique Q à la quantité d'électrons ?", choix: ["Q = I / Δt", "Q = n(e–) / F", "Q = n(e–)·F", "Q = F / n(e–)"], bonne: 2, expl: "Une mole d'électrons porte une charge F = 96 500 C, donc Q = n(e–)·F.", niv: 1 },
        { q: "Pour recouvrir un objet de métal par électrolyse (galvanoplastie), l'objet doit être :", choix: ["la cathode, où a lieu la réduction", "relié à la borne + du générateur", "l'anode, où a lieu l'oxydation", "plongé hors de l'électrolyte"], bonne: 0, expl: "Les ions métalliques gagnent des électrons et deviennent du métal sur l'objet : c'est une réduction, à la cathode, reliée à la borne –.", niv: 2 },
        { q: "Pile et électrolyseur : quelle phrase est juste ?", choix: ["L'anode est le siège d'une réduction dans les deux", "La cathode est la borne positive dans les deux", "L'anode est la borne négative dans les deux", "L'anode est le siège d'une oxydation dans les deux"], bonne: 3, expl: "Anode = oxydation, toujours. En revanche, le signe change : anode négative dans une pile, reliée au + dans un électrolyseur.", niv: 3 },
      ] },
    { chapitre: 'pc-8',
      fiche: `## Stratégies de synthèse organique

### Structure des molécules organiques
- Une molécule organique a un **squelette carboné** (chaîne linéaire, ramifiée ou cyclique) et des **groupes caractéristiques**. On la dessine souvent en **formule topologique** : chaque sommet est un atome de carbone, les H liés aux carbones ne sont pas écrits.
- Familles à reconnaître : **alcool** (–OH sur un carbone), **aldéhyde** et **cétone** (C=O), **acide carboxylique** (–COOH), **ester** (–COO– entre deux chaînes), **amine** (atome d'azote lié à des carbones), **amide** (–CO–N–), **halogénoalcane** (C lié à Cl, Br ou I).
- Exemple d'ester : l'éthanoate d'éthyle CH3–COO–CH2–CH3, solvant de certains vernis.
- Un **polymère** est une très grande molécule formée par la répétition d'un **motif**. La **polymérisation** relie de nombreuses petites molécules (monomères). Exemple : l'éthène CH2=CH2 donne le polyéthylène.

### Les catégories de réactions
- **Substitution** : un atome ou un groupe est remplacé par un autre. Exemple : un alcool donne un halogénoalcane.
- **Addition** : des atomes s'ajoutent sur une liaison double, qui devient simple. Exemple : l'eau s'ajoute sur un alcène et donne un alcool.
- **Élimination** : des atomes partent de deux carbones voisins et une liaison double se forme. Exemple : le butan-2-ol perd une molécule d'eau et donne le but-2-ène.
- On peut aussi classer une étape selon ce qu'elle change : **modification de chaîne** (allonger ou raccourcir le squelette) ou **modification de groupe caractéristique**.

### Le rendement
- **Rendement η = n(produit obtenu) / n(produit maximal)**, la quantité maximale venant du réactif limitant. Exemple : 0,060 mol obtenues pour 0,10 mol possibles donnent η = 60 %.
- Pour une synthèse en plusieurs étapes, le **rendement global** est le **produit** des rendements : 80 %, 70 % et 50 % donnent 0,80 × 0,70 × 0,50 = 28 %.

### Optimiser une étape : aller plus vite
- **Augmenter la température** : on chauffe le mélange. Le **chauffage à reflux** accélère la réaction sans perte de matière, car les vapeurs se condensent dans le réfrigérant et retombent dans le ballon.
- **Utiliser un catalyseur** : il accélère, mais ne change pas l'état final.
- Ces deux moyens agissent sur la **vitesse**, pas sur le rendement d'une transformation non totale.

### Optimiser une étape : obtenir plus de produit
- Exemple type : l'**estérification**, acide carboxylique + alcool = ester + eau. Elle est **lente** et **non totale** : avec des quantités égales d'acide et d'alcool primaire, le rendement est d'environ 67 %. On la catalyse avec des ions H+ (acide sulfurique).
- **Mettre un réactif en excès** (le moins cher) : Qr,i diminue, l'équilibre est atteint avec plus de produit.
- **Éliminer un produit au fur et à mesure** : par distillation, ou avec un **appareil de Dean-Stark** qui retire l'eau formée. Qr reste inférieur à K : le système continue à évoluer dans le sens direct.
- Remplacer un réactif par un réactif plus réactif (un anhydride d'acide à la place de l'acide carboxylique) peut rendre la transformation totale.
- La réaction inverse de l'estérification est l'**hydrolyse** de l'ester. En milieu basique, l'hydrolyse est totale : c'est la **saponification** (fabrication du savon).

### Stratégie de synthèse en plusieurs étapes
- Quand une molécule possède plusieurs groupes qui peuvent réagir, on cherche un réactif **sélectif**, qui n'agit que sur l'un d'eux.
- Sinon, on **protège** un groupe : on le transforme pour qu'il ne réagisse pas, on réalise l'étape voulue, puis on le **déprotège**. Cela ajoute deux étapes et fait baisser le rendement global.
- **Chimie verte (écoresponsable)** : limiter le nombre d'étapes, éviter les protections, utiliser des catalyseurs, des solvants peu toxiques (l'eau si possible), des matières premières renouvelables, peu d'énergie, et produire peu de déchets.

### À retenir pour le bac
- Reconnaître une famille à partir d'une formule et nommer la catégorie de réaction (substitution, addition, élimination).
- Calculer un rendement à partir du réactif limitant ; rendement global = produit des rendements.
- Piège : la température et le catalyseur augmentent la vitesse, pas le rendement final.
- Excès de réactif et élimination d'un produit augmentent le rendement : savoir le justifier avec Qr et K.
- Justifier une étape de protection, puis discuter son coût (rendement, chimie verte).`,
      cartes: [
        { q: "Qu'est-ce qu'une formule topologique ?", r: "Une écriture où la chaîne carbonée est un zigzag : chaque sommet ou extrémité est un carbone, les H liés aux carbones ne sont pas écrits." },
        { q: "Groupe caractéristique d'un ester ?", r: "–COO– relié à deux chaînes carbonées. Exemple : éthanoate d'éthyle CH3–COO–CH2–CH3." },
        { q: "Groupe caractéristique d'une amide ?", r: "–CO–N– : un carbone doublement lié à un oxygène et lié à un azote." },
        { q: "Qu'est-ce qu'un polymère ?", r: "Une macromolécule formée par la répétition d'un motif. Exemple : le polyéthylène, obtenu à partir de l'éthène." },
        { q: "Réaction de substitution ?", r: "Un atome ou un groupe d'atomes est remplacé par un autre. Exemple : un alcool transformé en halogénoalcane." },
        { q: "Réaction d'addition ?", r: "Des atomes se fixent sur une liaison double, qui devient simple. Exemple : addition d'eau sur un alcène qui donne un alcool." },
        { q: "Réaction d'élimination ?", r: "Des atomes partent de deux carbones voisins et une liaison double se forme. Exemple : un alcool qui perd de l'eau donne un alcène." },
        { q: "Définition du rendement ?", r: "η = n(produit obtenu) / n(produit maximal), la quantité maximale étant calculée avec le réactif limitant." },
        { q: "Rendement global d'une synthèse en plusieurs étapes ?", r: "Le produit des rendements de chaque étape. Exemple : 0,80 × 0,70 × 0,50 = 0,28, soit 28 %." },
        { q: "Intérêt du chauffage à reflux ?", r: "Accélérer la réaction en chauffant sans perdre de matière : les vapeurs se condensent dans le réfrigérant et retombent dans le ballon." },
        { q: "Deux façons d'augmenter le rendement d'une estérification ?", r: "Mettre un réactif en excès ; éliminer un produit (l'eau ou l'ester) au fur et à mesure, par exemple avec un Dean-Stark." },
        { q: "Pourquoi éliminer l'eau fait-il augmenter le rendement ?", r: "Qr reste inférieur à K : le système continue à évoluer dans le sens direct et forme plus d'ester." },
        { q: "Qu'est-ce que la saponification ?", r: "L'hydrolyse d'un ester en milieu basique (avec HO–) : elle est totale et donne un ion carboxylate et un alcool. Elle sert à fabriquer du savon." },
        { q: "Qu'est-ce qu'une étape de protection ?", r: "Transformer un groupe pour l'empêcher de réagir pendant une étape, puis le régénérer (déprotection)." },
        { q: "Trois principes de la chimie verte ?", r: "Limiter les étapes et les déchets, utiliser des catalyseurs, choisir des solvants peu toxiques et des matières renouvelables." },
      ],
      quiz: [
        { q: "Quelle famille possède le groupe –COO– relié à deux chaînes carbonées ?", choix: ["Les acides carboxyliques", "Les esters", "Les cétones", "Les amides"], bonne: 1, expl: "C'est le groupe ester. L'acide carboxylique a un –COOH, avec un H au bout.", niv: 1 },
        { q: "On obtient 0,060 mol d'ester alors que le réactif limitant permettait d'en obtenir 0,10 mol. Rendement ?", choix: ["60 %", "40 %", "17 %", "6,0 %"], bonne: 0, expl: "η = 0,060 / 0,10 = 0,60, soit 60 %.", niv: 2 },
        { q: "Quel est le rôle de l'acide sulfurique ajouté lors d'une estérification ?", choix: ["Il déplace l'équilibre vers l'ester", "Il catalyse la réaction", "Il neutralise l'acide carboxylique", "Il sert de solvant"], bonne: 1, expl: "Les ions H+ apportés catalysent l'estérification : elle est plus rapide, mais l'état d'équilibre est le même.", niv: 1 },
        { q: "Pour augmenter le rendement d'une estérification, on peut :", choix: ["ajouter un catalyseur", "diminuer la température", "chauffer à reflux", "mettre un réactif en excès"], bonne: 3, expl: "Un excès de réactif déplace l'état final vers plus d'ester. Catalyseur et chauffage accélèrent sans changer le rendement.", niv: 2 },
        { q: "Dans une synthèse, un appareil de Dean-Stark sert à :", choix: ["mesurer le pH du milieu", "accélérer la réaction par catalyse", "retirer l'eau formée pendant la réaction", "refroidir brutalement le mélange"], bonne: 2, expl: "Il piège l'eau au fur et à mesure : le système continue à évoluer dans le sens direct.", niv: 2 },
        { q: "Une synthèse a 3 étapes de rendements 80 %, 70 % et 50 %. Quel est le rendement global ?", choix: ["28 %", "67 %", "50 %", "40 %"], bonne: 0, expl: "On multiplie : 0,80 × 0,70 × 0,50 = 0,28. Ce n'est ni la moyenne (67 %) ni le plus faible rendement.", niv: 3 },
        { q: "Pourquoi protège-t-on un groupe caractéristique au cours d'une synthèse ?", choix: ["Pour accélérer toutes les étapes", "Pour le rendre plus soluble dans l'eau", "Pour l'empêcher de réagir lors d'une étape", "Pour se passer de catalyseur"], bonne: 2, expl: "La protection évite qu'un groupe réagisse avec un réactif qui n'est pas sélectif. On le déprotège ensuite.", niv: 1 },
        { q: "Dans une synthèse, le chauffage à reflux permet :", choix: ["d'augmenter la constante d'équilibre", "d'accélérer sans perdre de matière", "d'augmenter le rendement final", "d'éliminer un produit du milieu"], bonne: 1, expl: "La température accélère la réaction et le réfrigérant renvoie les vapeurs dans le ballon. Le rendement final ne change pas.", niv: 3 },
        { q: "L'éthène CH2=CH2 donne le polyéthylène, une très longue chaîne de motifs –CH2–CH2–. Cette réaction est :", choix: ["une polymérisation", "une substitution", "une estérification", "une élimination"], bonne: 0, expl: "De nombreux monomères s'enchaînent pour former une macromolécule : c'est une polymérisation.", niv: 2 },
        { q: "Le rendement d'une synthèse est le rapport :", choix: ["masse de produit / masse de solvant", "quantité maximale / quantité obtenue", "quantité obtenue / quantité maximale", "quantité de catalyseur / quantité de réactif"], bonne: 2, expl: "η = n(obtenue) / n(maximale) ; il est inférieur ou égal à 1.", niv: 1 },
        { q: "Butan-2-ol → but-2-ène + eau. De quelle catégorie de réaction s'agit-il ?", choix: ["Une addition", "Une substitution", "Une oxydation", "Une élimination"], bonne: 3, expl: "Des atomes (H et OH) partent de deux carbones voisins et une double liaison C=C se forme : c'est une élimination.", niv: 2 },
        { q: "Quel choix est le plus conforme à la chimie verte ?", choix: ["Ajouter une étape de protection", "Chauffer plus longtemps sans catalyseur", "Prendre un fort excès de réactif toxique", "Choisir un catalyseur et l'eau comme solvant"], bonne: 3, expl: "Un catalyseur économise énergie et réactifs, l'eau est un solvant non toxique. Une protection ajoute des étapes et des déchets.", niv: 3 },
      ] },
    { chapitre: 'pc-9',
      fiche: `## Décrire un mouvement

### Système et référentiel
- On étudie le mouvement d'un **système**, souvent réduit à un point : son **centre de masse**.
- Un mouvement se décrit toujours par rapport à un **référentiel** (un objet de référence muni d'un repère et d'une horloge). Exemples : référentiel terrestre (le sol), géocentrique (centre de la Terre), héliocentrique (centre du Soleil).

### Position, vitesse, accélération
- Le **vecteur position** OM(t) repère le point M à chaque instant. Ses coordonnées sont x(t), y(t), z(t) : ce sont les **équations horaires**.
- Le **vecteur vitesse** est la **dérivée du vecteur position** par rapport au temps : **v = dOM/dt**, soit vx = dx/dt, vy = dy/dt. Il est tangent à la trajectoire, dans le sens du mouvement. Unité : m/s.
- Le **vecteur accélération** est la **dérivée du vecteur vitesse** : **a = dv/dt**, soit ax = dvx/dt. Unité : m/s² (m·s⁻²).
- Exemple : x(t) = 3,0·t² + 2,0·t (en mètres et secondes). Alors vx = 6,0·t + 2,0 et ax = 6,0 m/s². À t = 2,0 s, vx = 14 m/s.
- Dans l'autre sens, on retrouve la vitesse et la position par **primitives**, en utilisant les conditions initiales. Exemple : vx = 4,0·t + 1,0 et x(0) = 0 donnent x = 2,0·t² + 1,0·t.

### Exploiter une chronophotographie
- Sur un enregistrement où les positions sont prises à intervalles réguliers τ, on estime la vitesse au point Mi par **vi ≈ Mi-1Mi+1 / (2τ)**.
- Exemple : τ = 40 ms, M4M6 = 12 cm, donc v5 = 0,12 / 0,080 = 1,5 m/s.
- Le vecteur variation de vitesse **Δv = vi+1 - vi-1** a la direction et le sens du vecteur accélération. On estime a ≈ Δv / (2τ).

### Les mouvements à connaître
- **Rectiligne uniforme** : trajectoire droite, vecteur vitesse constant, **accélération nulle**.
- **Rectiligne uniformément varié** : vecteur accélération **constant** et colinéaire à la trajectoire. Si la vitesse augmente, le mouvement est accéléré ; si elle diminue, il est ralenti. Équations : v = a·t + v0 et x = ½·a·t² + v0·t + x0.
- Exemple : une voiture passe de 0 à 100 km/h (27,8 m/s) en 10 s. Son accélération moyenne vaut 27,8 / 10 ≈ 2,8 m/s². Attention à convertir les km/h en m/s (diviser par 3,6).

### Le mouvement circulaire
- **Circulaire uniforme** : trajectoire circulaire de rayon R, valeur de la vitesse constante. Mais la **direction** du vecteur vitesse change : l'accélération n'est **pas nulle**.
- Le vecteur accélération est **centripète** : dirigé vers le centre du cercle, de valeur **a = v²/R**.
- Exemple : v = 20 m/s sur un virage de rayon R = 50 m donne a = 400 / 50 = 8,0 m/s².
- **Repère de Frenet** : un vecteur unitaire t tangent à la trajectoire (sens du mouvement) et un vecteur unitaire n vers le centre. Dans ce repère, **a = (dv/dt)·t + (v²/R)·n**. Pour un mouvement circulaire uniforme, dv/dt = 0 et il ne reste que la composante normale.
- Pour un mouvement circulaire non uniforme, l'accélération a aussi une composante tangentielle dv/dt.

### Le cas du lancer vertical
- Une balle lancée vers le haut ralentit, s'arrête au sommet puis redescend. Au sommet, sa **vitesse est nulle**, mais son **accélération ne l'est pas** : elle vaut toujours g, vers le bas. C'est un piège très classique.

### À retenir pour le bac
- v = dOM/dt et a = dv/dt : savoir dériver une équation horaire et, à l'inverse, intégrer avec les conditions initiales.
- Mouvement circulaire uniforme : a = v²/R, dirigée vers le centre.
- Piège : vitesse constante en valeur ne veut pas dire accélération nulle (la direction peut changer).
- Convertir les unités : km/h en m/s, cm en m, ms en s.
- Sur une chronophotographie : vi ≈ Mi-1Mi+1 / (2τ).`,
      cartes: [
        { q: "Qu'est-ce qu'un référentiel ?", r: "Un objet de référence, muni d'un repère d'espace et d'une horloge, par rapport auquel on décrit un mouvement." },
        { q: "Définition du vecteur vitesse ?", r: "La dérivée du vecteur position par rapport au temps : v = dOM/dt. Il est tangent à la trajectoire." },
        { q: "Définition du vecteur accélération ?", r: "La dérivée du vecteur vitesse par rapport au temps : a = dv/dt, en m/s²." },
        { q: "Vitesse au point Mi sur une chronophotographie ?", r: "vi ≈ Mi-1Mi+1 / (2τ), où τ est la durée entre deux positions." },
        { q: "Accélération d'un mouvement rectiligne uniforme ?", r: "Nulle : le vecteur vitesse est constant (même valeur, même direction, même sens)." },
        { q: "Mouvement rectiligne uniformément varié ?", r: "Mouvement en ligne droite avec un vecteur accélération constant. v = a·t + v0 et x = ½·a·t² + v0·t + x0." },
        { q: "Accélération d'un mouvement circulaire uniforme ?", r: "Centripète (dirigée vers le centre) et de valeur a = v²/R." },
        { q: "Pourquoi l'accélération n'est-elle pas nulle dans un virage à vitesse constante ?", r: "La valeur de la vitesse est constante, mais sa direction change : le vecteur vitesse varie, donc a n'est pas nul." },
        { q: "Accélération dans le repère de Frenet ?", r: "a = (dv/dt)·t + (v²/R)·n : composante tangentielle dv/dt et composante normale v²/R vers le centre." },
        { q: "Comment passer d'une vitesse en km/h à une vitesse en m/s ?", r: "Diviser par 3,6. Exemple : 100 km/h ≈ 27,8 m/s." },
        { q: "Comment retrouver x(t) à partir de vx(t) ?", r: "Prendre une primitive de vx(t), puis fixer la constante avec la position initiale x(0)." },
        { q: "Vitesse et accélération au sommet d'un lancer vertical ?", r: "La vitesse est nulle, mais l'accélération vaut g, vers le bas." },
        { q: "Qu'est-ce que le centre de masse ?", r: "Le point qui représente le système dans l'étude de son mouvement d'ensemble : son mouvement est le plus simple à décrire." },
      ],
      quiz: [
        { q: "Le vecteur vitesse d'un point est :", choix: ["la dérivée de la position", "la primitive de la position", "la dérivée de l'accélération", "la position divisée par la masse"], bonne: 0, expl: "v = dOM/dt. C'est l'accélération qui est la dérivée de la vitesse.", niv: 1 },
        { q: "Une voiture passe de 0 à 100 km/h en 10 s en ligne droite. Son accélération moyenne vaut :", choix: ["0,28 m/s²", "2,8 m/s²", "1,0 m/s²", "0,10 m/s²"], bonne: 1, expl: "100 km/h = 27,8 m/s, donc a = 27,8 / 10 ≈ 2,8 m/s².", niv: 2 },
        { q: "Dans un mouvement circulaire uniforme, le vecteur accélération est :", choix: ["nul car la vitesse est constante", "tangent à la trajectoire", "toujours dirigé vers le centre", "dirigé vers l'extérieur du cercle"], bonne: 2, expl: "L'accélération est centripète, de valeur v²/R. Elle n'est pas nulle car la direction de la vitesse change.", niv: 1 },
        { q: "Mouvement circulaire uniforme : v = 20 m/s sur un cercle de rayon R = 50 m. Valeur de l'accélération ?", choix: ["0,40 m/s²", "2,5 m/s²", "8,0 m/s²", "1,0 m/s²"], bonne: 2, expl: "a = v²/R = 400 / 50 = 8,0 m/s². Le piège 0,40 vient de v/R.", niv: 2 },
        { q: "x(t) = 3,0·t² + 2,0·t (unités SI). Que vaut vx à t = 2,0 s ?", choix: ["14 m/s", "16 m/s", "12 m/s", "6,0 m/s"], bonne: 0, expl: "vx = dx/dt = 6,0·t + 2,0, soit 14 m/s à t = 2,0 s. 16 est la position x(2,0) en mètres.", niv: 2 },
        { q: "Un mouvement rectiligne est uniformément accéléré. On peut affirmer que :", choix: ["la vitesse est constante", "le vecteur accélération est constant", "la position est proportionnelle au temps", "l'accélération augmente avec le temps"], bonne: 1, expl: "« Uniformément » signifie que l'accélération est constante. La vitesse, elle, augmente linéairement.", niv: 3 },
        { q: "Dans un mouvement rectiligne uniforme, le vecteur accélération est :", choix: ["dirigé dans le sens du mouvement", "égal au vecteur vitesse", "dirigé vers le centre", "nul"], bonne: 3, expl: "Le vecteur vitesse ne change ni en valeur ni en direction : sa dérivée est nulle.", niv: 1 },
        { q: "Une nacelle de manège tourne à vitesse constante. Pourquoi son accélération n'est-elle pas nulle ?", choix: ["La valeur de la vitesse varie", "La masse de la nacelle varie", "La direction de la vitesse varie", "Le sol n'est pas un référentiel"], bonne: 2, expl: "La valeur de v est constante, mais sa direction tourne : le vecteur vitesse change, donc a = v²/R vers le centre.", niv: 3 },
        { q: "vx(t) = 4,0·t + 1,0 (unités SI) et x(0) = 0. Quelle est l'équation horaire x(t) ?", choix: ["x = 4,0·t + 1,0", "x = 2,0·t² + 1,0·t", "x = 8,0·t² + t", "x = 4,0·t²"], bonne: 1, expl: "Une primitive de 4,0·t + 1,0 est 2,0·t² + 1,0·t + C, et x(0) = 0 donne C = 0.", niv: 2 },
        { q: "Dans le repère de Frenet, la composante normale de l'accélération vaut :", choix: ["R·v²", "v/R", "dv/dt", "v²/R"], bonne: 3, expl: "a = (dv/dt)·t + (v²/R)·n : dv/dt est la composante tangentielle, v²/R la composante normale.", niv: 1 },
        { q: "Chronophotographie : τ = 40 ms entre deux positions, M4M6 = 12 cm. Vitesse au point M5 ?", choix: ["3,0 m/s", "0,15 m/s", "4,8 m/s", "1,5 m/s"], bonne: 3, expl: "v5 = M4M6 / (2τ) = 0,12 / 0,080 = 1,5 m/s. Le piège 3,0 oublie le facteur 2.", niv: 2 },
        { q: "Une balle est lancée verticalement vers le haut. Au sommet de sa trajectoire :", choix: ["seule la vitesse est nulle", "l'accélération est nulle", "vitesse et accélération sont nulles", "l'accélération change de sens"], bonne: 0, expl: "La vitesse s'annule un instant, mais l'accélération reste g vers le bas tout le long du mouvement.", niv: 3 },
      ] },
    { chapitre: 'pc-10',
      fiche: `## Deuxième loi de Newton et mouvement dans un champ uniforme

### Les lois de Newton
- Un **référentiel galiléen** est un référentiel dans lequel le **principe d'inertie** est vérifié. Le référentiel terrestre peut être considéré comme galiléen pour des mouvements courts (quelques minutes).
- **Première loi (principe d'inertie)** : si la somme des forces est nulle, le centre de masse est immobile ou en mouvement rectiligne uniforme.
- **Deuxième loi de Newton** : dans un référentiel galiléen, pour un système de masse constante, **ΣF = m·a**. La somme des forces a la même direction et le même sens que l'accélération.
- **Troisième loi** : deux systèmes en interaction exercent l'un sur l'autre des forces opposées.

### La méthode pour étudier un mouvement
- 1) Définir le **système** et le **référentiel** (galiléen). 2) Faire le **bilan des forces**. 3) Appliquer la deuxième loi pour obtenir a. 4) Intégrer pour obtenir v(t), puis la position (équations horaires), avec les **conditions initiales**. 5) Éliminer t pour obtenir l'équation de la **trajectoire**.

### Mouvement dans le champ de pesanteur
- Un système en **chute libre** n'est soumis qu'à son **poids** P = m·g (frottements et poussée d'Archimède négligés).
- La deuxième loi donne m·a = m·g, donc **a = g** : l'accélération ne dépend **pas de la masse**. Deux objets lâchés ensemble tombent de la même façon.
- Chute sans vitesse initiale : z parcouru = ½·g·t². Exemple : en 2,0 s, l'objet tombe de ½ × 9,8 × 2,0² ≈ 20 m.
- **Lancer** avec une vitesse v0 faisant un angle α avec l'horizontale, depuis une hauteur h, axe Oz vers le haut :
- ax = 0 et az = -g ;
- vx = v0·cosα (constante : le mouvement horizontal est **uniforme**) et vz = -g·t + v0·sinα ;
- x = v0·cosα·t et z = -½·g·t² + v0·sinα·t + h.
- Trajectoire : **z = -g·x² / (2·v0²·cos²α) + tanα·x + h** : c'est une **parabole**.
- Au **sommet** (flèche), vz = 0. La **portée** est la valeur de x quand le projectile revient au sol (z = 0).

### Mouvement dans un champ électrique uniforme
- Entre les armatures d'un **condensateur plan**, le champ électrique est **uniforme** : **E = U/d** (E en V/m, U en V, d en m). Il va de l'armature + vers l'armature –.
- Une particule de charge q subit la **force électrique F = q·E**. Pour un électron ou un proton, le **poids est négligeable** devant cette force.
- La deuxième loi donne **a = q·E/m** : l'accélération est constante, et la trajectoire est une droite ou une parabole, comme dans le champ de pesanteur.
- **Accélérateur linéaire** : une particule accélérée sous une tension U gagne l'énergie cinétique **ΔEc = q·U**. Exemple : un proton (q = 1,6×10^-19 C) sous 1,0×10^3 V gagne 1,6×10^-16 J.

### Les aspects énergétiques
- **Énergie cinétique** : Ec = ½·m·v². **Énergie potentielle de pesanteur** : Epp = m·g·z (axe vers le haut). **Énergie mécanique** : Em = Ec + Ep.
- **Théorème de l'énergie cinétique** : ΔEc = somme des travaux des forces. Travail du poids : W = m·g·(zA - zB). Travail de la force électrique : W = q·UAB.
- Sans frottements, l'énergie mécanique se **conserve**. Exemple : un objet lâché de 2,0 m arrive au sol avec v = √(2·g·h) = √(2 × 9,8 × 2,0) ≈ 6,3 m/s, quelle que soit sa masse.
- Avec des frottements, l'énergie mécanique diminue : une partie est transférée sous forme thermique.

### À retenir pour le bac
- Rédiger dans l'ordre : système, référentiel galiléen, forces, deuxième loi, intégration avec conditions initiales.
- Chute libre : a = g, indépendant de la masse ; mouvement horizontal uniforme.
- Savoir établir l'équation de la trajectoire en éliminant t.
- Champ électrique : E = U/d, F = q·E, poids négligeable ; ΔEc = q·U.
- Piège : au sommet, vz = 0 mais vx ne l'est pas, donc la vitesse n'est pas nulle (sauf lancer vertical).`,
      cartes: [
        { q: "Qu'est-ce qu'un référentiel galiléen ?", r: "Un référentiel où le principe d'inertie est vérifié. Le référentiel terrestre l'est en bonne approximation pour des mouvements courts." },
        { q: "Énoncé du principe d'inertie ?", r: "Si la somme des forces est nulle, le centre de masse est immobile ou en mouvement rectiligne uniforme (dans un référentiel galiléen)." },
        { q: "Deuxième loi de Newton ?", r: "ΣF = m·a, dans un référentiel galiléen, pour un système de masse constante." },
        { q: "Qu'est-ce qu'une chute libre ?", r: "Un mouvement où le système n'est soumis qu'à son poids. Alors a = g, quelle que soit la masse." },
        { q: "Équations horaires d'un lancer (angle α, vitesse v0, hauteur h) ?", r: "x = v0·cosα·t et z = -½·g·t² + v0·sinα·t + h (axe Oz vers le haut)." },
        { q: "Équation de la trajectoire d'un projectile ?", r: "z = -g·x² / (2·v0²·cos²α) + tanα·x + h : une parabole. On l'obtient en remplaçant t = x / (v0·cosα)." },
        { q: "Comment trouver la flèche (hauteur maximale) d'un tir ?", r: "On cherche la date où vz = 0, puis on calcule z à cette date." },
        { q: "Champ électrique dans un condensateur plan ?", r: "Uniforme, E = U/d, orienté de l'armature + vers l'armature –. Unité : V/m." },
        { q: "Force électrique sur une charge q ?", r: "F = q·E : même sens que E si q > 0, sens opposé si q < 0." },
        { q: "Pourquoi néglige-t-on le poids d'un électron dans un champ électrique ?", r: "Sa masse est si faible que son poids est des milliards de fois plus petit que la force électrique." },
        { q: "Énergie gagnée par une particule accélérée sous une tension U ?", r: "ΔEc = q·U (théorème de l'énergie cinétique)." },
        { q: "Théorème de l'énergie cinétique ?", r: "La variation d'énergie cinétique entre A et B est égale à la somme des travaux des forces : ΔEc = ΣW(F)." },
        { q: "Quand l'énergie mécanique se conserve-t-elle ?", r: "Quand les frottements sont négligeables : seules travaillent des forces comme le poids ou la force électrique." },
        { q: "Vitesse au sol d'un objet lâché d'une hauteur h sans frottements ?", r: "v = √(2·g·h), par conservation de l'énergie mécanique. Elle ne dépend pas de la masse." },
      ],
      quiz: [
        { q: "Pour un système de masse constante, la deuxième loi de Newton s'écrit :", choix: ["ΣF = m·a", "ΣF = ½·m·v²", "ΣF = m·v", "ΣF = m·g·z"], bonne: 0, expl: "La somme des forces est égale à la masse fois l'accélération, dans un référentiel galiléen.", niv: 1 },
        { q: "On lance une balle ; frottements négligés. Son accélération est :", choix: ["nulle au sommet de la trajectoire", "dirigée selon la vitesse", "toujours égale à g, vers le bas", "horizontale et constante"], bonne: 2, expl: "Seul le poids agit : m·a = m·g, donc a = g en permanence, même au sommet.", niv: 2 },
        { q: "Un référentiel est dit galiléen si :", choix: ["il est en rotation uniforme", "il est lié à un objet accéléré", "il est lié au centre de la Lune", "il vérifie le principe d'inertie"], bonne: 3, expl: "C'est la définition. Un référentiel accéléré ou en rotation n'est pas galiléen.", niv: 1 },
        { q: "Chute libre sans vitesse initiale, g = 9,8 m/s². Quelle hauteur l'objet a-t-il parcourue en 2,0 s ?", choix: ["9,8 m", "15 m", "4,9 m", "20 m"], bonne: 3, expl: "z = ½·g·t² = 0,5 × 9,8 × 4,0 ≈ 20 m. 9,8 m oublie le carré, 4,9 m oublie le temps.", niv: 2 },
        { q: "Projectile : vx = v0·cosα et vz = -g·t + v0·sinα. Au sommet de la trajectoire :", choix: ["vx = 0", "vz = 0", "v = 0", "z = 0"], bonne: 1, expl: "Au sommet, la vitesse est horizontale : vz s'annule, mais vx garde sa valeur v0·cosα.", niv: 2 },
        { q: "Lancer sans frottements : que peut-on dire du mouvement horizontal du projectile ?", choix: ["Il est uniformément accéléré", "Il ralentit jusqu'au sommet", "Il est uniforme", "Il dépend de la masse"], bonne: 2, expl: "ax = 0 car le poids est vertical : vx est constante, le mouvement horizontal est uniforme.", niv: 3 },
        { q: "Dans un condensateur plan, le champ électrique entre les armatures vaut :", choix: ["E = U/d", "E = U·d", "E = d/U", "E = q·U"], bonne: 0, expl: "E = U/d, en V/m. Plus les armatures sont proches, plus le champ est intense.", niv: 1 },
        { q: "On lâche ensemble une bille de 10 g et une boule de 1 kg, frottements négligés. Laquelle touche le sol en premier ?", choix: ["La bille, plus légère", "Elles arrivent en même temps", "Celle qui est la plus dense", "La boule, plus lourde"], bonne: 1, expl: "En chute libre, a = g pour les deux, indépendamment de la masse : elles ont le même mouvement.", niv: 3 },
        { q: "Un proton (q = 1,6×10⁻¹⁹ C) est accéléré sous une tension de 1,0×10³ V. Énergie cinétique gagnée ?", choix: ["1,6×10⁻¹⁶ J", "6,3×10²¹ J", "1,6×10⁻¹⁹ J", "1,6×10⁻²² J"], bonne: 0, expl: "ΔEc = q·U = 1,6×10⁻¹⁹ × 1,0×10³ = 1,6×10⁻¹⁶ J.", niv: 2 },
        { q: "Dans un champ électrique uniforme, une particule de charge q subit la force :", choix: ["F = q·U·d", "F = E/q", "F = q·E", "F = m·E"], bonne: 2, expl: "La force électrique vaut q·E ; son sens dépend du signe de q.", niv: 1 },
        { q: "Un objet tombe de 2,0 m sans vitesse initiale ni frottements (g = 9,8 N/kg). Sa vitesse en arrivant au sol vaut :", choix: ["39 m/s", "6,3 m/s", "4,4 m/s", "20 m/s"], bonne: 1, expl: "Conservation de l'énergie mécanique : v = √(2·g·h) = √39,2 ≈ 6,3 m/s. 39 oublie la racine.", niv: 2 },
        { q: "Un électron se déplace entre deux plaques chargées. Pourquoi néglige-t-on son poids ?", choix: ["Son poids est nul dans le vide", "La poussée d'Archimède le compense", "La pesanteur n'agit pas sur les charges", "La force électrique est bien plus grande"], bonne: 3, expl: "Le poids existe, mais il est des milliards de fois plus faible que la force électrique q·E.", niv: 3 },
      ] },
    { chapitre: 'pc-11',
      fiche: `## Mouvement dans un champ de gravitation : satellites et planètes

### La force de gravitation
- Deux corps de masses m et M, dont les centres sont séparés d'une distance d, s'attirent : **F = G·m·M / d²**, avec **G = 6,67×10^-11 N·m²·kg⁻²** (constante de gravitation universelle).
- Cette force est **attractive** et dirigée selon la droite qui relie les deux centres.
- Pour un satellite à l'altitude h au-dessus d'une planète de rayon R, la distance au centre est **r = R + h**. Exemple : ISS à h = 400 km, R = 6 370 km, donc r = 6 770 km.

### Les lois de Kepler
- **Première loi** : dans le référentiel héliocentrique, l'orbite d'une planète est une **ellipse** dont le **Soleil occupe un foyer**.
- **Deuxième loi (loi des aires)** : le segment Soleil-planète balaie des **aires égales pendant des durées égales**. Conséquence : la planète va **plus vite près du Soleil** (périhélie) que loin (aphélie).
- **Troisième loi** : pour toutes les planètes d'un même astre, **T²/a³ = constante**, où T est la période de révolution et a le demi-grand axe (le rayon r pour une orbite circulaire).
- Ces lois valent aussi pour les satellites autour d'une planète.

### L'orbite circulaire : démonstration attendue
- Système : le satellite. Référentiel : **géocentrique**, supposé galiléen. Force : uniquement la **force de gravitation** de la Terre.
- Deuxième loi de Newton : m·a = G·m·M/r², dirigée vers le centre. Donc **a = G·M/r²**, vers le centre.
- La force est **toujours perpendiculaire à la vitesse** : dv/dt = 0, le mouvement circulaire est **uniforme**.
- Dans le repère de Frenet, a = v²/r. En égalant : v²/r = G·M/r², donc **v = √(G·M/r)**.
- La vitesse **ne dépend pas de la masse du satellite**. Elle diminue quand r augmente : si r est multiplié par 4, v est divisée par 2.

### Période et troisième loi de Kepler
- La période est la durée d'un tour : **T = 2π·r / v**.
- En remplaçant v : **T²/r³ = 4π² / (G·M)**. C'est la troisième loi de Kepler : la constante ne dépend que de la masse de l'astre central.
- Application : en mesurant T et r d'un satellite ou d'une lune, on calcule la **masse de l'astre central** : **M = 4π²·r³ / (G·T²)**.
- Exemple : ISS, r = 6,77×10^6 m, M(Terre) = 5,97×10^24 kg. v = √(6,67×10^-11 × 5,97×10^24 / 6,77×10^6) ≈ 7,7×10^3 m/s, et T = 2π·r/v ≈ 5,5×10^3 s, soit environ 92 minutes.

### Le satellite géostationnaire
- Il paraît **immobile pour un observateur terrestre**. Pour cela, son orbite est **circulaire**, dans le **plan de l'équateur**, il tourne **dans le même sens** que la Terre et sa période est égale à la période de rotation de la Terre (environ 23 h 56 min, soit environ 86 160 s).
- Son altitude est d'environ **36 000 km**. Usages : télécommunications, télévision, météorologie.

### Pourquoi les astronautes flottent
- Dans l'ISS, la pesanteur n'est pas nulle (environ 90 % de sa valeur au sol). Les astronautes flottent parce qu'ils sont **en chute libre** avec la station : ils « tombent » autour de la Terre en même temps qu'elle.

### À retenir pour le bac
- Démonstration complète : système, référentiel géocentrique, force de gravitation, deuxième loi, repère de Frenet, mouvement uniforme, v = √(G·M/r).
- T = 2π·r/v et T²/r³ = 4π²/(G·M) : savoir les établir et les utiliser pour trouver une masse.
- Piège : r = R + h. Oublier le rayon de la planète fausse tout.
- La vitesse et la période ne dépendent pas de la masse du satellite.
- Géostationnaire : plan de l'équateur, même sens et même période que la rotation terrestre.`,
      cartes: [
        { q: "Loi de la gravitation universelle ?", r: "F = G·m·M / d², force attractive le long de la droite qui joint les centres. G = 6,67×10^-11 N·m²·kg⁻²." },
        { q: "Première loi de Kepler ?", r: "L'orbite d'une planète est une ellipse dont le Soleil occupe un des foyers." },
        { q: "Deuxième loi de Kepler ?", r: "Le segment Soleil-planète balaie des aires égales en des durées égales : la planète va plus vite près du Soleil." },
        { q: "Troisième loi de Kepler ?", r: "T²/a³ = constante pour tous les corps qui tournent autour d'un même astre. Pour une orbite circulaire : T²/r³ = 4π²/(G·M)." },
        { q: "Rayon de l'orbite d'un satellite à l'altitude h ?", r: "r = R + h, où R est le rayon de la planète." },
        { q: "Pourquoi le mouvement circulaire d'un satellite est-il uniforme ?", r: "La force de gravitation est toujours perpendiculaire à la vitesse : la composante tangentielle de l'accélération, dv/dt, est nulle." },
        { q: "Vitesse d'un satellite en orbite circulaire ?", r: "v = √(G·M/r). Elle ne dépend pas de la masse du satellite." },
        { q: "Période d'un satellite en orbite circulaire ?", r: "T = 2π·r / v, soit T = 2π·√(r³/(G·M))." },
        { q: "Comment trouver la masse d'une planète grâce à une de ses lunes ?", r: "On mesure la période T et le rayon r de l'orbite, puis M = 4π²·r³ / (G·T²)." },
        { q: "Conditions pour qu'un satellite soit géostationnaire ?", r: "Orbite circulaire dans le plan de l'équateur, même sens de rotation que la Terre, période égale à celle de la rotation terrestre (environ 23 h 56 min)." },
        { q: "Altitude d'un satellite géostationnaire ?", r: "Environ 36 000 km au-dessus de la surface de la Terre." },
        { q: "Pourquoi les astronautes flottent-ils dans l'ISS ?", r: "Ils sont en chute libre avec la station autour de la Terre. La pesanteur n'est pas nulle à 400 km." },
        { q: "Référentiel pour étudier un satellite de la Terre ?", r: "Le référentiel géocentrique, considéré comme galiléen." },
      ],
      quiz: [
        { q: "D'après la première loi de Kepler, l'orbite d'une planète est :", choix: ["un cercle centré sur le Soleil", "une parabole de foyer le Soleil", "une ellipse de foyer le Soleil", "une ellipse centrée sur le Soleil"], bonne: 2, expl: "Le Soleil occupe l'un des deux foyers de l'ellipse, pas son centre.", niv: 1 },
        { q: "Pour un satellite en orbite circulaire, v = √(G·M/r). Si le rayon r est multiplié par 4, la vitesse est :", choix: ["divisée par 16", "divisée par 4", "multipliée par 2", "divisée par 2"], bonne: 3, expl: "v est proportionnelle à 1/√r : √4 = 2, donc v est divisée par 2.", niv: 2 },
        { q: "D'après la deuxième loi de Kepler, une planète va plus vite :", choix: ["à l'aphélie, loin du Soleil", "au périhélie, près du Soleil", "quand sa masse augmente", "quand elle est alignée avec la Terre"], bonne: 1, expl: "Pour balayer la même aire en la même durée près du Soleil, elle doit parcourir un arc plus long : elle va plus vite.", niv: 1 },
        { q: "Troisième loi de Kepler, pour des orbites circulaires autour d'un même astre :", choix: ["T/r = constante", "T·r² = constante", "T³/r² = constante", "T²/r³ = constante"], bonne: 3, expl: "T²/r³ = 4π²/(G·M), constante qui ne dépend que de l'astre central.", niv: 2 },
        { q: "Satellite à r = 6,77×10⁶ m du centre de la Terre (M = 5,97×10²⁴ kg ; G = 6,67×10⁻¹¹ SI). Sa vitesse vaut :", choix: ["7,7×10³ m/s", "5,9×10⁷ m/s", "2,4×10³ m/s", "7,7 m/s"], bonne: 0, expl: "v = √(G·M/r) = √(5,9×10⁷) ≈ 7,7×10³ m/s. Le piège 5,9×10⁷ oublie la racine.", niv: 2 },
        { q: "Deux satellites de masses différentes sont sur la même orbite circulaire. Leurs vitesses :", choix: ["sont proportionnelles à leur masse", "sont forcément égales", "sont plus grandes pour le plus léger", "dépendent de leur forme"], bonne: 1, expl: "v = √(G·M/r) ne contient pas la masse du satellite : même orbite, même vitesse.", niv: 3 },
        { q: "Un satellite géostationnaire :", choix: ["passe au-dessus des pôles", "tourne avec la Terre, au-dessus de l'équateur", "est immobile dans le référentiel géocentrique", "a une orbite de 400 km d'altitude"], bonne: 1, expl: "Il est dans le plan de l'équateur, avec la période de rotation de la Terre. Il est immobile pour un observateur terrestre, pas dans le référentiel géocentrique.", niv: 1 },
        { q: "Pourquoi le mouvement d'un satellite en orbite circulaire est-il uniforme ?", choix: ["Aucune force ne s'exerce sur lui", "Son moteur compense la gravitation", "La force est toujours normale à v", "Il est dans le vide sans pesanteur"], bonne: 2, expl: "La force de gravitation, perpendiculaire à la vitesse, ne change que la direction de v, pas sa valeur.", niv: 3 },
        { q: "Une lune fait un tour en une durée T sur une orbite de rayon r. Quelle relation donne la masse M de sa planète ?", choix: ["M = 4π²·r³/(G·T²)", "M = 4π²·r²/(G·T)", "M = r³/(G·T²)", "M = G·T²/(4π²·r³)"], bonne: 0, expl: "De T²/r³ = 4π²/(G·M), on tire M = 4π²·r³/(G·T²).", niv: 2 },
        { q: "La force gravitationnelle entre deux corps de masses m et M distants de d vaut :", choix: ["F = m·M/(G·d²)", "F = G·m·M/d", "F = G·m·M·d²", "F = G·m·M/d²"], bonne: 3, expl: "La force est proportionnelle aux masses et inversement proportionnelle au carré de la distance.", niv: 1 },
        { q: "Altitude h = 400 km, rayon de la Terre R = 6 370 km. Quel rayon d'orbite utiliser dans v = √(G·M/r) ?", choix: ["6 770 km", "6 370 km", "400 km", "5 970 km"], bonne: 0, expl: "r est la distance au centre de la Terre : r = R + h = 6 770 km.", niv: 2 },
        { q: "Les astronautes de l'ISS flottent dans la station parce que :", choix: ["la pesanteur est nulle à 400 km", "ils sont trop loin pour être attirés", "ils tombent en même temps que la station", "l'air de la station les porte"], bonne: 2, expl: "À 400 km, g vaut encore environ 90 % de sa valeur au sol. Station et astronautes sont en chute libre ensemble.", niv: 3 },
      ] },
    { chapitre: 'pc-12',
      fiche: `## Modéliser l'écoulement d'un fluide

### Rappels : pression et fluide au repos
- La **pression** est une force pressante divisée par la surface : **P = F/S**, en pascals (Pa). 1 bar = 10^5 Pa.
- Dans un fluide **incompressible au repos** : **PA - PB = ρ·g·(zB - zA)**. La pression augmente quand on descend. Exemple : dans l'eau, elle augmente d'environ 10^5 Pa tous les 10 m.

### La poussée d'Archimède
- Tout corps plongé dans un fluide (liquide ou gaz) subit une force **verticale, vers le haut**, appelée **poussée d'Archimède**.
- Sa valeur est égale au **poids du fluide déplacé** : **Π = ρfluide·Vimmergé·g**, où Vimmergé est le volume de la partie immergée.
- Exemple : un objet de 1,0 L entièrement immergé dans l'eau (ρ = 1,0×10^3 kg/m³) subit Π = 1,0×10^3 × 1,0×10^-3 × 9,8 = 9,8 N.
- Un objet **flotte** si sa masse volumique est **inférieure** à celle du fluide. À l'équilibre, la poussée **compense exactement** son poids : il s'enfonce juste assez pour cela.
- Exemple : la glace (environ 920 kg/m³) est moins dense que l'eau liquide, donc un glaçon flotte avec environ 90 % de son volume sous l'eau.
- Elle explique aussi qu'un ballon gonflé à l'hélium monte dans l'air.

### Le débit volumique
- On étudie un fluide en **régime permanent** (ou stationnaire) : en chaque point, la vitesse et la pression ne changent pas au cours du temps.
- Le **débit volumique** est le volume qui traverse une section par seconde : **Dv = V/Δt = S·v** (en m³/s), avec S la section en m² et v la vitesse en m/s.
- Conversion utile : 1 L = 10^-3 m³. Exemple : 12 L/min = 12×10^-3 / 60 = 2,0×10^-4 m³/s.
- **Conservation du débit** pour un fluide incompressible : **S1·v1 = S2·v2**. Quand la conduite se rétrécit, le fluide **accélère**.
- Exemple : une conduite passe de 2,0 cm² à 0,50 cm² ; la vitesse passe de 1,0 m/s à 4,0 m/s. C'est pour cela qu'on pince l'embout d'un tuyau d'arrosage pour que l'eau aille plus loin.

### La relation de Bernoulli
- Pour un **fluide parfait** (sans viscosité), **incompressible**, en **régime permanent**, le long d'une ligne de courant : **P + ½·ρ·v² + ρ·g·z = constante**.
- Chaque terme est homogène à une **pression** (en Pa), c'est-à-dire à une énergie par unité de volume.
- C'est en fait une conservation de l'énergie pour le fluide en mouvement.

### L'effet Venturi
- À la même hauteur, si la vitesse augmente, la pression **diminue** : c'est l'**effet Venturi**.
- Dans un rétrécissement, le fluide accélère (conservation du débit) donc sa pression baisse (Bernoulli).
- Applications : le **pulvérisateur** de parfum (l'air soufflé vite crée une dépression qui aspire le liquide), la **trompe à eau** des laboratoires, le tube de Venturi pour mesurer un débit, la **sonde de Pitot** des avions pour mesurer leur vitesse.

### La vidange d'un réservoir (Torricelli)
- Pour un réservoir ouvert dont l'eau sort par un petit trou situé à une profondeur h sous la surface : **v = √(2·g·h)**.
- On l'obtient avec Bernoulli entre la surface (vitesse presque nulle) et le trou, les deux étant à la pression atmosphérique.
- Exemple : h = 0,80 m donne v = √(2 × 9,8 × 0,80) ≈ 4,0 m/s.

### À retenir pour le bac
- Poussée d'Archimède : poids du fluide déplacé, verticale vers le haut. Bien utiliser la masse volumique du fluide, pas celle de l'objet.
- Dv = S·v et S1·v1 = S2·v2 : convertir cm² en m² (1 cm² = 10^-4 m²) et L en m³.
- Bernoulli : rappeler les conditions (parfait, incompressible, permanent) avant de l'appliquer.
- Effet Venturi : là où le fluide va plus vite, la pression est plus basse.
- Piège : confondre masse et poids du fluide déplacé.`,
      cartes: [
        { q: "Définition de la pression ?", r: "P = F/S : force pressante divisée par la surface. Unité : le pascal (Pa). 1 bar = 10^5 Pa." },
        { q: "Poussée d'Archimède : direction, sens, valeur ?", r: "Verticale, vers le haut, de valeur égale au poids du fluide déplacé : Π = ρfluide·Vimmergé·g." },
        { q: "Quand un objet flotte-t-il ?", r: "Quand sa masse volumique est inférieure à celle du fluide. À l'équilibre, la poussée d'Archimède compense son poids." },
        { q: "Qu'est-ce qu'un régime permanent ?", r: "Un écoulement où, en chaque point, la vitesse et la pression ne varient pas au cours du temps." },
        { q: "Débit volumique ?", r: "Volume qui traverse une section par seconde : Dv = V/Δt = S·v, en m³/s." },
        { q: "Conservation du débit ?", r: "Pour un fluide incompressible en régime permanent : S1·v1 = S2·v2. Si la section diminue, la vitesse augmente." },
        { q: "Relation de Bernoulli ?", r: "P + ½·ρ·v² + ρ·g·z = constante le long d'une ligne de courant, pour un fluide parfait, incompressible, en régime permanent." },
        { q: "Unité des termes de la relation de Bernoulli ?", r: "Le pascal : chaque terme est une pression, c'est-à-dire une énergie par unité de volume (J/m³)." },
        { q: "Qu'est-ce que l'effet Venturi ?", r: "Dans un rétrécissement horizontal, le fluide accélère et sa pression diminue." },
        { q: "Comment marche un pulvérisateur de parfum ?", r: "L'air soufflé vite au-dessus du tube crée une dépression (effet Venturi) : le liquide est aspiré puis pulvérisé." },
        { q: "Formule de Torricelli ?", r: "v = √(2·g·h) : vitesse de sortie d'un liquide par un petit trou situé à une profondeur h sous la surface libre." },
        { q: "Combien de m³ dans 1 L ? de m² dans 1 cm² ?", r: "1 L = 10^-3 m³ et 1 cm² = 10^-4 m²." },
        { q: "Loi de la statique des fluides ?", r: "PA - PB = ρ·g·(zB - zA) : la pression augmente avec la profondeur dans un fluide incompressible au repos." },
      ],
      quiz: [
        { q: "La poussée d'Archimède a une valeur égale :", choix: ["au poids du fluide déplacé", "à la masse du fluide déplacé", "au poids de l'objet immergé", "à la pression du fluide"], bonne: 0, expl: "C'est le poids (une force, en N) du fluide dont l'objet prend la place. La masse n'est pas une force.", niv: 1 },
        { q: "Un objet de 1,0 L est entièrement immergé dans l'eau (ρ = 1,0×10³ kg/m³ ; g = 9,8 N/kg). Poussée d'Archimède ?", choix: ["1,0 N", "9,8×10³ N", "9,8 N", "0,98 N"], bonne: 2, expl: "Π = ρ·V·g = 1,0×10³ × 1,0×10⁻³ × 9,8 = 9,8 N. Le piège 9,8×10³ vient d'un volume laissé en litres.", niv: 2 },
        { q: "Le débit volumique d'un fluide de vitesse v dans une conduite de section S vaut :", choix: ["Dv = S/v", "Dv = v/S", "Dv = ρ·S·v", "Dv = S·v"], bonne: 3, expl: "Dv = S·v, en m³/s. ρ·S·v serait un débit massique, en kg/s.", niv: 1 },
        { q: "Une conduite passe d'une section de 2,0 cm² à 0,50 cm². En amont, v = 1,0 m/s. Vitesse en aval ?", choix: ["4,0 m/s", "0,25 m/s", "2,0 m/s", "1,0 m/s"], bonne: 0, expl: "S1·v1 = S2·v2, donc v2 = 2,0 × 1,0 / 0,50 = 4,0 m/s : la section est 4 fois plus petite.", niv: 2 },
        { q: "Effet Venturi : dans un rétrécissement horizontal, le fluide :", choix: ["accélère et sa pression diminue", "ralentit et sa pression augmente", "accélère et sa pression augmente", "garde sa vitesse et sa pression"], bonne: 0, expl: "Le débit se conserve, donc la vitesse augmente ; Bernoulli à hauteur constante impose alors une baisse de pression.", niv: 2 },
        { q: "Pourquoi un glaçon flotte-t-il sur l'eau ?", choix: ["Il contient beaucoup d'air prisonnier", "La glace a une masse négligeable", "L'eau le repousse par effet Venturi", "La glace est moins dense que l'eau"], bonne: 3, expl: "La glace (environ 920 kg/m³) est moins dense que l'eau liquide : la poussée peut compenser son poids avant qu'il ne soit entièrement immergé.", niv: 3 },
        { q: "La relation de Bernoulli s'applique à un fluide :", choix: ["visqueux en régime variable", "compressible et immobile", "incompressible, en régime permanent", "en ébullition dans un tube"], bonne: 2, expl: "Conditions : fluide parfait (non visqueux), incompressible, écoulement en régime permanent.", niv: 1 },
        { q: "L'eau sort d'un réservoir ouvert par un petit trou situé 0,80 m sous la surface (g = 9,8 m/s²). Vitesse de sortie ?", choix: ["16 m/s", "4,0 m/s", "2,8 m/s", "7,8 m/s"], bonne: 1, expl: "Torricelli : v = √(2·g·h) = √15,7 ≈ 4,0 m/s. 16 oublie la racine, 2,8 oublie le facteur 2.", niv: 3 },
        { q: "Un débit de 12 L/min, converti en m³/s, vaut :", choix: ["0,20 m³/s", "2,0×10⁻⁴ m³/s", "2,0×10⁻² m³/s", "7,2×10⁻¹ m³/s"], bonne: 1, expl: "12 L = 1,2×10⁻² m³, à diviser par 60 s : 2,0×10⁻⁴ m³/s.", niv: 2 },
        { q: "Dans la relation de Bernoulli, le terme ½·ρ·v² a la dimension :", choix: ["d'une masse volumique", "d'une énergie", "d'une vitesse", "d'une pression"], bonne: 3, expl: "Tous les termes s'expriment en Pa. ½·ρ·v² est une énergie par unité de volume, pas une énergie.", niv: 1 },
        { q: "Un bouchon de liège flotte, immobile à la surface. Que peut-on dire des forces qui s'exercent sur lui ?", choix: ["La poussée est plus grande que le poids", "La poussée est nulle", "La poussée compense exactement le poids", "Le poids est plus grand que la poussée"], bonne: 2, expl: "Immobile : la somme des forces est nulle (principe d'inertie). Poussée et poids se compensent.", niv: 2 },
        { q: "Dans un pulvérisateur de parfum, l'air soufflé rapidement au-dessus du tube :", choix: ["augmente la pression au-dessus du tube", "crée une dépression qui aspire le liquide", "chauffe le liquide qui s'évapore", "pousse le liquide vers le bas"], bonne: 1, expl: "Effet Venturi : là où l'air va vite, la pression baisse. La pression atmosphérique sur le liquide le fait monter.", niv: 3 },
      ] },
    { chapitre: 'pc-13',
      fiche: `## Gaz parfait, premier principe et transferts thermiques

### Décrire un système thermodynamique
- À l'échelle **macroscopique**, un gaz est décrit par sa **pression P** (Pa), son **volume V** (m³), sa **température T** (K) et sa **masse volumique ρ = m/V** (kg/m³).
- La **température absolue** s'exprime en kelvins : **T(K) = θ(°C) + 273,15**. Exemple : 27 °C ≈ 300 K.
- À l'échelle **microscopique**, la température mesure l'**agitation** des entités, et la pression vient de leurs **chocs** sur les parois.

### Le modèle du gaz parfait
- Dans ce modèle, les entités sont **ponctuelles** et **sans interaction** entre elles (sauf les chocs). Il décrit bien les gaz réels à **faible pression**.
- **Équation d'état : P·V = n·R·T**, avec R = 8,314 J·mol⁻¹·K⁻¹, P en Pa, V en m³, T en K.
- Conséquences : à n et T fixés, P·V est constant (loi de Mariotte) ; à n et V fixés, P est proportionnelle à T.

### L'énergie interne et le premier principe
- L'**énergie interne U** d'un système est la somme des énergies de ses entités à l'échelle microscopique (agitation et interactions).
- **Premier principe de la thermodynamique** : pour un système fermé au repos à notre échelle, **ΔU = W + Q**. W est le **travail** reçu, Q le **transfert thermique** reçu. Une énergie cédée est comptée **négativement**.
- Exemple : un gaz reçoit un travail de 200 J et cède 50 J de chaleur. ΔU = 200 + (-50) = 150 J.
- Pour un **système incompressible** (solide ou liquide) : **ΔU = C·ΔT = m·c·ΔT**, où C est la capacité thermique (J/K) et c la capacité thermique massique (J·kg⁻¹·K⁻¹). Pour l'eau, c ≈ 4,18×10^3 J·kg⁻¹·K⁻¹.
- Exemple : chauffer 1,5 kg d'eau de 20 °C à 100 °C demande ΔU = 1,5 × 4,18×10^3 × 80 ≈ 5,0×10^5 J. Un écart de température a la même valeur en °C et en K.

### Les modes de transfert thermique
- Spontanément, un transfert thermique se fait toujours du corps **le plus chaud** vers le corps **le plus froid**.
- **Conduction** : de proche en proche, sans déplacement de matière (une cuillère dans un bol chaud).
- **Convection** : avec déplacement de matière dans un fluide (l'air chaud qui monte d'un radiateur).
- **Rayonnement** : par ondes électromagnétiques, même dans le vide (le Soleil qui chauffe la Terre).

### Flux et résistance thermique
- Le **flux thermique** est l'énergie transférée par seconde : **Φ = Q/Δt**, en watts (W).
- À travers une paroi : **Φ = (T1 - T2) / Rth**, où **Rth** est la **résistance thermique** (K/W). Pour une paroi plane d'épaisseur e, de surface S et de conductivité thermique λ : Rth = e / (λ·S). Plus Rth est grande, mieux la paroi isole.
- Exemple : écart de 20 K, Rth = 0,050 K/W, donc Φ = 20 / 0,050 = 4,0×10^2 W.

### La loi phénoménologique de Newton
- Entre un système et le fluide qui l'entoure (température Text) : **Φ = h·S·(Text - T)**, avec h le coefficient de transfert et S la surface d'échange.
- Avec le premier principe, C·dT/dt = h·S·(Text - T). La solution : **T(t) = Text + (T0 - Text)·e^(-t/τ)** avec **τ = C/(h·S)**.
- La température tend vers Text **de moins en moins vite**, sans l'atteindre exactement. Au bout de 5τ, l'écart restant est inférieur à 1 %. Exemple : un thé qui refroidit dans une pièce.

### Le bilan thermique de la Terre
- La Terre reçoit le rayonnement du Soleil ; environ 30 % est réfléchi (c'est l'**albédo**, environ 0,3), le reste est absorbé.
- Elle émet un rayonnement **infrarouge** dont la puissance dépend de sa température (loi de Stefan-Boltzmann, donnée dans les sujets).
- **Effet de serre** : des gaz de l'atmosphère (vapeur d'eau, CO2, méthane) absorbent une partie de ces infrarouges et en renvoient une partie vers le sol. Sans effet de serre, la température moyenne serait d'environ -18 °C au lieu d'environ 15 °C.

### À retenir pour le bac
- PV = nRT avec les bonnes unités : Pa, m³, K.
- ΔU = W + Q avec les signes : reçu positif, cédé négatif ; ΔU = m·c·ΔT pour un liquide ou un solide.
- Φ = ΔT/Rth : savoir comparer deux isolants.
- Loi de Newton : établir l'équation différentielle, donner τ = C/(h·S) et la solution exponentielle.
- Piège : oublier de convertir les °C en K dans PV = nRT (mais un écart ΔT est le même).`,
      cartes: [
        { q: "Conversion entre degrés Celsius et kelvins ?", r: "T(K) = θ(°C) + 273,15. Un écart de température a la même valeur dans les deux unités." },
        { q: "Hypothèses du modèle du gaz parfait ?", r: "Entités ponctuelles, sans interaction entre elles (à part les chocs). Valable pour les gaz à faible pression." },
        { q: "Équation d'état du gaz parfait ?", r: "P·V = n·R·T, avec P en Pa, V en m³, n en mol, T en K et R = 8,314 J·mol⁻¹·K⁻¹." },
        { q: "Qu'est-ce que l'énergie interne U ?", r: "La somme des énergies microscopiques du système : énergie d'agitation des entités et énergie de leurs interactions." },
        { q: "Premier principe de la thermodynamique ?", r: "ΔU = W + Q pour un système fermé au repos : W travail reçu, Q transfert thermique reçu (négatifs s'ils sont cédés)." },
        { q: "Variation d'énergie interne d'un solide ou d'un liquide ?", r: "ΔU = m·c·ΔT = C·ΔT, avec c la capacité thermique massique (eau : 4,18×10^3 J·kg⁻¹·K⁻¹)." },
        { q: "Les trois modes de transfert thermique ?", r: "Conduction (sans déplacement de matière), convection (avec déplacement d'un fluide), rayonnement (ondes électromagnétiques, même dans le vide)." },
        { q: "Sens d'un transfert thermique spontané ?", r: "Toujours du corps le plus chaud vers le corps le plus froid." },
        { q: "Flux thermique ?", r: "Énergie transférée par seconde : Φ = Q/Δt, en watts." },
        { q: "Relation avec la résistance thermique ?", r: "Φ = (T1 - T2) / Rth, avec Rth en K/W. Plus Rth est grande, plus la paroi isole." },
        { q: "Loi phénoménologique de Newton ?", r: "Φ = h·S·(Text - T) : le flux échangé avec le fluide extérieur est proportionnel à l'écart de température." },
        { q: "Évolution de la température selon la loi de Newton ?", r: "T(t) = Text + (T0 - Text)·e^(-t/τ), avec τ = C/(h·S). T tend vers Text de moins en moins vite." },
        { q: "Qu'est-ce que l'albédo de la Terre ?", r: "La fraction du rayonnement solaire réfléchie vers l'espace, environ 0,3." },
        { q: "Qu'est-ce que l'effet de serre ?", r: "Des gaz de l'atmosphère absorbent une partie des infrarouges émis par la Terre et en renvoient une partie vers le sol, ce qui réchauffe la surface." },
      ],
      quiz: [
        { q: "Dans l'équation d'état P·V = n·R·T, la température s'exprime en :", choix: ["degrés Celsius", "joules", "kelvins", "pascals"], bonne: 2, expl: "On utilise la température absolue, en kelvins : T(K) = θ(°C) + 273,15.", niv: 1 },
        { q: "Une température de 27 °C correspond à :", choix: ["300 K", "246 K", "27 K", "-246 K"], bonne: 0, expl: "T = 27 + 273 ≈ 300 K. On ajoute 273,15, on ne le retranche pas.", niv: 2 },
        { q: "Le premier principe de la thermodynamique s'écrit :", choix: ["ΔU = W - Q", "ΔU = W + Q", "U = m·c·T", "ΔU = W × Q"], bonne: 1, expl: "La variation d'énergie interne est la somme du travail et du transfert thermique reçus.", niv: 1 },
        { q: "Énergie pour chauffer 1,5 kg d'eau de 20 °C à 100 °C ? (c = 4,18×10³ J·kg⁻¹·K⁻¹)", choix: ["6,3×10⁵ J", "5,0×10⁵ J", "1,3×10⁵ J", "5,0×10² J"], bonne: 1, expl: "ΔU = m·c·ΔT = 1,5 × 4,18×10³ × 80 ≈ 5,0×10⁵ J. Le piège 6,3×10⁵ J prend 100 au lieu de l'écart 80.", niv: 2 },
        { q: "À travers un mur, l'écart de température est de 20 K et la résistance thermique de 0,050 K/W. Flux thermique ?", choix: ["20 W", "1,0 W", "2,5×10⁻³ W", "4,0×10² W"], bonne: 3, expl: "Φ = ΔT / Rth = 20 / 0,050 = 4,0×10² W. Le piège 1,0 W vient d'une multiplication.", niv: 2 },
        { q: "Une tasse de thé chaud refroidit dans une pièce selon la loi de Newton. Sa température :", choix: ["tend vers celle de la pièce sans l'atteindre", "baisse à vitesse constante jusqu'à l'air", "atteint celle de la pièce au bout de la durée τ", "baisse jusqu'à 0 °C puis reste constante"], bonne: 0, expl: "T(t) = Text + (T0 - Text)·e^(-t/τ) : l'écart diminue de façon exponentielle. Au bout de τ, il reste encore 37 % de l'écart initial.", niv: 3 },
        { q: "Lequel n'est **pas** un mode de transfert thermique ?", choix: ["La conduction", "La convection", "La compression", "Le rayonnement"], bonne: 2, expl: "Les trois modes sont la conduction, la convection et le rayonnement. Une compression correspond à un travail reçu.", niv: 1 },
        { q: "Un gaz reçoit un travail de 200 J et cède 50 J par transfert thermique. Sa variation d'énergie interne vaut :", choix: ["250 J", "-150 J", "150 J", "50 J"], bonne: 2, expl: "ΔU = W + Q = 200 + (-50) = 150 J. Le piège 250 J oublie que l'énergie cédée est négative.", niv: 3 },
        { q: "Le modèle du gaz parfait décrit bien un gaz réel :", choix: ["pour tous les gaz, à toute pression", "pour les liquides peu visqueux", "surtout à très haute pression", "seulement à faible pression"], bonne: 3, expl: "À faible pression, les entités sont éloignées et leurs interactions négligeables : c'est l'hypothèse du modèle.", niv: 2 },
        { q: "Un transfert thermique spontané se fait :", choix: ["toujours du chaud vers le froid", "du froid vers le chaud", "du plus lourd vers le plus léger", "uniquement par contact direct"], bonne: 0, expl: "C'est toujours le corps chaud qui cède de l'énergie au corps froid. Le rayonnement transfère de l'énergie sans contact.", niv: 1 },
        { q: "Loi de Newton : Φ = h·S·(Text - T). Pour un système de capacité thermique C, la constante de temps vaut :", choix: ["τ = h·S·C", "τ = C/(h·S)", "τ = h·S/C", "τ = C·Text"], bonne: 1, expl: "C·dT/dt = h·S·(Text - T) s'écrit dT/dt + T/τ = Text/τ avec τ = C/(h·S), en secondes.", niv: 2 },
        { q: "Sans effet de serre, la Terre aurait une température moyenne d'environ -18 °C. L'effet de serre la réchauffe car l'atmosphère :", choix: ["réfléchit plus de lumière solaire", "laisse s'échapper tous les infrarouges terrestres", "produit de l'énergie par combustion", "renvoie au sol une part des infrarouges"], bonne: 3, expl: "Les gaz à effet de serre absorbent une partie du rayonnement infrarouge de la Terre et en réémettent une partie vers le sol.", niv: 3 },
      ] },
    { chapitre: 'pc-14',
      fiche: `## Caractériser les phénomènes ondulatoires

### Intensité et niveau d'intensité sonore
- L'**intensité sonore I** est la puissance reçue par unité de surface, en W/m².
- L'oreille perçoit des intensités très différentes : on utilise le **niveau d'intensité sonore L = 10·log(I/I0)**, en décibels (dB), avec **I0 = 1,0×10^-12 W/m²** (seuil d'audibilité).
- Exemple : I = 1,0×10^-6 W/m² donne L = 10·log(10^6) = 60 dB.
- Quand I est **multipliée par 2**, L augmente d'environ **3 dB**. Quand I est **multipliée par 10**, L augmente de **10 dB**. Les niveaux ne s'additionnent pas, ce sont les intensités qui s'additionnent.
- **Atténuation** A = L1 - L2 (en dB). Elle est **géométrique** (l'énergie se répartit sur une surface plus grande quand on s'éloigne de la source) ou due à l'**absorption** par le milieu (murs, mousse, air).

### La diffraction
- Une onde qui rencontre une ouverture ou un obstacle de taille a change de direction de propagation : c'est la **diffraction**. Elle est importante quand **a est du même ordre de grandeur que λ, ou plus petite**.
- L'**écart angulaire** (demi-angle de la tache centrale) vaut **θ = λ/a**, en radians.
- Exemple : laser λ = 633 nm, fente a = 0,10 mm : θ = 633×10^-9 / 1,0×10^-4 ≈ 6,3×10^-3 rad.
- Sur un écran à la distance D, la largeur de la tache centrale vaut L ≈ 2·λ·D/a (petits angles, tan θ ≈ θ).
- La diffraction limite la finesse des détails qu'un instrument d'optique peut séparer.

### Les interférences
- Deux ondes **cohérentes** (même fréquence et déphasage constant) qui se superposent donnent des **interférences**. En pratique, on les obtient avec une seule source dont on sépare l'onde en deux.
- On note **δ** la **différence de chemin** parcouru par les deux ondes jusqu'au point étudié.
- **Interférences constructives** (amplitude maximale) si **δ = k·λ**, k entier.
- **Interférences destructives** (amplitude minimale) si **δ = (k + ½)·λ**. Exemple : δ = 1,5·λ donne des interférences destructives.
- **Fentes d'Young** : franges brillantes et sombres régulièrement espacées de l'**interfrange i = λ·D/b**, avec b la distance entre les fentes et D la distance fentes-écran. Exemple : λ = 600 nm, b = 0,30 mm, D = 2,0 m donnent i = 4,0 mm.
- Applications : irisations des bulles de savon et des ailes de papillons, casques anti-bruit actifs (ils émettent un son qui crée des interférences destructives avec le bruit).

### L'effet Doppler
- Quand l'émetteur et le récepteur se rapprochent, la **fréquence reçue est plus grande** que la fréquence émise (son plus aigu). Quand ils s'éloignent, elle est **plus petite** (son plus grave).
- Émetteur qui s'approche à la vitesse v d'un observateur fixe, dans une seule direction : pendant une période TE, l'émetteur avance de v·TE, donc la longueur d'onde reçue est λR = (c - v)·TE. D'où **fR = fE·c/(c - v)**. S'il s'éloigne : fR = fE·c/(c + v).
- Le **décalage Doppler** Δf = fR - fE. Pour v très petite devant c : **Δf ≈ fE·v/c** en valeur absolue.
- Exemple : sirène de 440 Hz qui s'approche à 20 m/s (c = 340 m/s) : fR = 440 × 340 / 320 ≈ 468 Hz.
- Applications : radars routiers, échographie Doppler (vitesse du sang), astronomie (une étoile qui s'éloigne a son spectre décalé vers le rouge).

### À retenir pour le bac
- L = 10·log(I/I0) : savoir passer de I à L et l'inverse, I = I0·10^(L/10).
- Diffraction : θ = λ/a, la tache s'élargit quand la fente se resserre.
- Interférences : δ = k·λ constructives, δ = (k + ½)·λ destructives ; i = λ·D/b.
- Doppler : savoir établir fR à partir des longueurs d'onde ; source qui approche, son plus aigu.
- Piège : deux sources identiques ne doublent pas le niveau sonore, elles l'augmentent de 3 dB.`,
      cartes: [
        { q: "Définition du niveau d'intensité sonore ?", r: "L = 10·log(I/I0), en dB, avec I0 = 1,0×10^-12 W/m²." },
        { q: "Comment retrouver I à partir de L ?", r: "I = I0·10^(L/10)." },
        { q: "De combien augmente L si l'intensité sonore double ?", r: "D'environ 3 dB (10·log 2 ≈ 3)." },
        { q: "Deux causes d'atténuation d'un son ?", r: "L'atténuation géométrique (on s'éloigne de la source) et l'absorption par le milieu traversé." },
        { q: "Quand la diffraction est-elle importante ?", r: "Quand la taille a de l'ouverture ou de l'obstacle est du même ordre que λ, ou plus petite." },
        { q: "Écart angulaire de diffraction ?", r: "θ = λ/a, en radians, avec λ la longueur d'onde et a la largeur de la fente." },
        { q: "Qu'est-ce que deux ondes cohérentes ?", r: "Deux ondes de même fréquence avec un déphasage constant. Il le faut pour observer des interférences stables." },
        { q: "Condition d'interférences constructives ?", r: "δ = k·λ, k entier : les ondes arrivent en phase." },
        { q: "Condition d'interférences destructives ?", r: "δ = (k + ½)·λ, k entier : les ondes arrivent en opposition de phase." },
        { q: "Interfrange des fentes d'Young ?", r: "i = λ·D/b, avec D la distance fentes-écran et b la distance entre les fentes." },
        { q: "Effet Doppler : émetteur qui se rapproche ?", r: "La fréquence reçue est plus grande que la fréquence émise : le son paraît plus aigu." },
        { q: "Fréquence reçue d'un émetteur qui s'approche à la vitesse v ?", r: "fR = fE·c/(c - v), pour un observateur fixe et un mouvement dans une seule direction." },
        { q: "Décalage Doppler pour une faible vitesse ?", r: "Δf ≈ fE·v/c en valeur absolue, si v est très petite devant c." },
        { q: "Trois applications de l'effet Doppler ?", r: "Radars de vitesse, échographie Doppler du sang, mesure de la vitesse des étoiles (décalage vers le rouge)." },
        { q: "Comment marche un casque anti-bruit actif ?", r: "Il émet un son qui interfère de façon destructive avec le bruit extérieur." },
      ],
      quiz: [
        { q: "Le niveau d'intensité sonore se calcule par :", choix: ["L = I/I0", "L = 10·I/I0", "L = 10·log(I/I0)", "L = log(I0/I)"], bonne: 2, expl: "L = 10·log(I/I0), en décibels, avec I0 = 1,0×10⁻¹² W/m².", niv: 1 },
        { q: "Une intensité sonore vaut 1,0×10⁻⁶ W/m² (I0 = 1,0×10⁻¹² W/m²). Quel est le niveau sonore ?", choix: ["6,0 dB", "60 dB", "-60 dB", "120 dB"], bonne: 1, expl: "L = 10·log(10⁻⁶/10⁻¹²) = 10·log(10⁶) = 60 dB.", niv: 2 },
        { q: "La diffraction d'une onde par une ouverture de taille a est importante quand a est :", choix: ["très grande devant la longueur d'onde", "proche de λ ou plus petite que λ", "indépendante de la longueur d'onde", "proportionnelle à la fréquence de l'onde"], bonne: 1, expl: "La diffraction devient nette quand a est du même ordre de grandeur que λ ou plus petite. Sinon, l'onde passe presque sans s'étaler.", niv: 1 },
        { q: "Une machine produit 70 dB. On en allume une deuxième identique. Le niveau sonore augmente de :", choix: ["6 dB", "10 dB", "3 dB", "2 dB"], bonne: 2, expl: "L'intensité double : L augmente de 10·log 2 ≈ 3 dB, soit 73 dB, pas 140 dB.", niv: 2 },
        { q: "Laser λ = 633 nm et fente de largeur a = 0,10 mm. Écart angulaire θ = λ/a ?", choix: ["6,3 rad", "6,3×10⁻³ rad", "1,6×10² rad", "6,3×10⁻⁶ rad"], bonne: 1, expl: "θ = 633×10⁻⁹ / 1,0×10⁻⁴ ≈ 6,3×10⁻³ rad. Il faut tout convertir en mètres.", niv: 2 },
        { q: "Deux ondes cohérentes arrivent en un point avec une différence de chemin δ = 1,5·λ. Les interférences y sont :", choix: ["destructives", "impossibles à prévoir", "constructives", "constructives puis destructives"], bonne: 0, expl: "δ = (1 + ½)·λ : les ondes arrivent en opposition de phase, les interférences sont destructives.", niv: 3 },
        { q: "Pour obtenir des interférences stables, deux ondes doivent :", choix: ["avoir la même amplitude", "avoir des fréquences différentes", "venir de deux lasers différents", "être cohérentes"], bonne: 3, expl: "Il faut la même fréquence et un déphasage constant. Deux sources indépendantes ne sont en général pas cohérentes.", niv: 1 },
        { q: "Une ambulance roule vers un piéton immobile puis le dépasse. À ce moment, la fréquence qu'il perçoit :", choix: ["augmente brusquement", "devient nulle un instant", "reste égale à la fréquence émise", "chute d'une valeur haute à une plus basse"], bonne: 3, expl: "En approche, fR > fE ; en éloignement, fR < fE. Au passage, le son devient brusquement plus grave.", niv: 3 },
        { q: "Fentes d'Young : λ = 600 nm, b = 0,30 mm, D = 2,0 m. L'interfrange i = λ·D/b vaut :", choix: ["4,0 mm", "40 mm", "9,0×10⁻⁸ m", "0,40 mm"], bonne: 0, expl: "i = 600×10⁻⁹ × 2,0 / 3,0×10⁻⁴ = 4,0×10⁻³ m = 4,0 mm.", niv: 2 },
        { q: "Effet Doppler : quand l'émetteur se rapproche d'un observateur fixe, la fréquence reçue est :", choix: ["égale à celle émise", "plus petite que celle émise", "plus grande que celle émise", "égale au double de celle émise"], bonne: 2, expl: "Les fronts d'onde se resserrent devant l'émetteur : la longueur d'onde reçue diminue, la fréquence augmente.", niv: 1 },
        { q: "Une sirène de 440 Hz s'approche à 20 m/s d'un observateur fixe (c = 340 m/s). Avec fR = fE·c/(c - v), on trouve :", choix: ["415 Hz", "440 Hz", "880 Hz", "468 Hz"], bonne: 3, expl: "fR = 440 × 340 / 320 ≈ 468 Hz : plus aigu, car la source s'approche. 415 Hz correspond à une source qui s'éloigne.", niv: 2 },
        { q: "Pourquoi un casque anti-bruit actif émet-il lui-même un son ?", choix: ["Pour créer des interférences destructives", "Pour couvrir le bruit par un son plus fort", "Pour diffracter le bruit hors de l'oreille", "Pour décaler le bruit par effet Doppler"], bonne: 0, expl: "Le casque produit une onde en opposition de phase avec le bruit : leur somme est presque nulle.", niv: 3 },
      ] },
    { chapitre: 'pc-15',
      fiche: `## Lunette astronomique et photons

### La lunette astronomique
- Une lunette astronomique est formée de deux **lentilles convergentes** : l'**objectif** L1, de grande distance focale f'1, tourné vers l'objet, et l'**oculaire** L2, de petite distance focale f'2, contre l'œil.
- Les astres sont si loin qu'on les considère **à l'infini** : leurs rayons arrivent parallèles entre eux.
- L'objectif donne de l'astre une **image intermédiaire A1B1**, située dans son **plan focal image** (en F'1).
- La lunette est **afocale** quand le **foyer image de l'objectif F'1 est confondu avec le foyer objet de l'oculaire F2**. L'image finale est alors **à l'infini** : l'œil l'observe **sans fatigue**, sans accommoder.
- L'image finale est **renversée** par rapport à l'objet.

### Le grossissement
- Le **grossissement** compare l'angle sous lequel on voit l'image à travers la lunette (θ') à l'angle sous lequel on voit l'objet à l'œil nu (θ) : **G = θ'/θ**.
- Pour une lunette afocale : **G = f'1 / f'2**. Exemple : f'1 = 900 mm et f'2 = 25 mm donnent G = 36.
- Pour grossir davantage, on prend un oculaire de plus petite focale.
- Méthode de construction : tracer le rayon qui passe par le centre optique O1 sans être dévié, il donne B1 dans le plan focal image de L1 ; puis, depuis B1, le rayon qui passe par O2 donne la direction de sortie de tous les rayons.
- Le **cercle oculaire** est l'image de l'objectif donnée par l'oculaire. Tous les rayons qui traversent la lunette y passent : c'est là que l'œil reçoit le plus de lumière.

### La lumière : onde et particule
- La lumière se comporte comme une **onde** (diffraction, interférences) mais aussi comme un flux de **particules** sans masse, les **photons**.
- **Énergie d'un photon : E = h·ν = h·c/λ**, avec h = 6,63×10^-34 J·s (constante de Planck), ν la fréquence en Hz, λ la longueur d'onde en m.
- Exemple : λ = 500 nm donne E = 6,63×10^-34 × 3,00×10^8 / 5,00×10^-7 ≈ 4,0×10^-19 J, soit environ 2,5 eV.
- L'**électronvolt** : 1 eV = 1,60×10^-19 J. Plus λ est courte, plus le photon est énergétique (les UV plus que le rouge).

### L'effet photoélectrique
- Une lumière peut **arracher des électrons** à un métal : c'est l'**effet photoélectrique**.
- Il ne se produit que si l'énergie du photon dépasse une valeur minimale, le **travail d'extraction W** du métal. Autrement dit, il faut une **fréquence supérieure à une fréquence seuil**, **quelle que soit l'intensité** de la lumière.
- Un photon cède toute son énergie à un seul électron : **Ec,max = h·ν - W**. Exemple : zinc, W = 4,3 eV, photon de 5,0 eV : Ec,max = 0,7 eV.
- Augmenter l'intensité augmente le **nombre** d'électrons arrachés, pas leur énergie.
- Cette existence d'un seuil ne s'explique pas avec le modèle ondulatoire : Einstein l'a interprétée en 1905 avec les photons (prix Nobel 1921).

### Applications
- **Cellule photovoltaïque** : elle convertit l'énergie lumineuse en énergie électrique. **Rendement η = Pélectrique / Plumineuse**. Exemple : 18 W électriques pour 100 W de lumière reçue donnent η = 18 %.
- **Diode électroluminescente (DEL)** : elle convertit l'énergie électrique en lumière, un photon étant émis quand un électron perd de l'énergie.
- Capteurs photographiques (CCD, CMOS) : chaque pixel convertit les photons reçus en signal électrique.

### À retenir pour le bac
- Lunette afocale : F'1 et F2 confondus ; image finale à l'infini ; G = f'1/f'2.
- Savoir construire la marche d'un faisceau dans la lunette.
- E = h·ν = h·c/λ, et convertir les J en eV.
- Effet photoélectrique : seuil en fréquence, indépendant de l'intensité ; Ec,max = h·ν - W.
- Piège : penser que plus de lumière rouge finira par arracher des électrons. Il faut des photons plus énergétiques.`,
      cartes: [
        { q: "De quoi est faite une lunette astronomique ?", r: "D'un objectif (lentille convergente de grande focale f'1) et d'un oculaire (lentille convergente de petite focale f'2)." },
        { q: "Où se forme l'image intermédiaire d'un astre ?", r: "Dans le plan focal image de l'objectif, en F'1, car l'astre est à l'infini." },
        { q: "Condition pour qu'une lunette soit afocale ?", r: "Le foyer image de l'objectif F'1 est confondu avec le foyer objet de l'oculaire F2." },
        { q: "Intérêt d'une lunette afocale ?", r: "L'image finale est à l'infini : l'œil normal l'observe sans accommoder, donc sans fatigue." },
        { q: "Définition du grossissement ?", r: "G = θ'/θ : angle sous lequel on voit l'image dans la lunette divisé par l'angle sous lequel on voit l'objet à l'œil nu." },
        { q: "Grossissement d'une lunette afocale ?", r: "G = f'1 / f'2." },
        { q: "Qu'est-ce que le cercle oculaire ?", r: "L'image de l'objectif par l'oculaire. Tous les rayons y passent : c'est la meilleure place pour l'œil." },
        { q: "Énergie d'un photon ?", r: "E = h·ν = h·c/λ, avec h = 6,63×10^-34 J·s." },
        { q: "Valeur de l'électronvolt ?", r: "1 eV = 1,60×10^-19 J." },
        { q: "Qu'est-ce que l'effet photoélectrique ?", r: "L'émission d'électrons par un métal éclairé par une lumière de fréquence assez élevée." },
        { q: "Qu'est-ce que le travail d'extraction W ?", r: "L'énergie minimale à fournir pour arracher un électron au métal. Il faut h·ν ≥ W." },
        { q: "Énergie cinétique maximale de l'électron arraché ?", r: "Ec,max = h·ν - W." },
        { q: "Effet de l'intensité lumineuse sur l'effet photoélectrique ?", r: "Elle change le nombre d'électrons arrachés, pas leur énergie. Sous le seuil, aucun électron n'est arraché, même très intense." },
        { q: "Rendement d'une cellule photovoltaïque ?", r: "η = Pélectrique / Plumineuse reçue." },
      ],
      quiz: [
        { q: "Une lunette astronomique afocale donne d'un objet à l'infini une image :", choix: ["sur la rétine à 25 cm", "dans le plan de l'objectif", "dans le plan de l'oculaire", "à l'infini"], bonne: 3, expl: "Comme F'1 et F2 sont confondus, les rayons sortent parallèles : l'image finale est à l'infini.", niv: 1 },
        { q: "Objectif f'1 = 900 mm, oculaire f'2 = 25 mm. Quel est le grossissement de la lunette afocale ?", choix: ["22,5", "0,028", "36", "9,0"], bonne: 2, expl: "G = f'1/f'2 = 900/25 = 36. Le piège 0,028 vient d'une inversion.", niv: 2 },
        { q: "Une lunette est afocale quand (F'1 : foyer image de l'objectif, F2 : foyer objet de l'oculaire) :", choix: ["F'1 et F'2 sont confondus", "les lentilles sont accolées", "l'oculaire est divergent", "F'1 et F2 sont confondus"], bonne: 3, expl: "L'image intermédiaire, en F'1, doit être au foyer objet de l'oculaire pour que l'image finale soit à l'infini.", niv: 1 },
        { q: "Énergie d'un photon de longueur d'onde 500 nm ? (h = 6,63×10⁻³⁴ J·s ; c = 3,00×10⁸ m/s)", choix: ["3,3×10⁻⁴⁰ J", "4,0×10⁻¹⁹ J", "1,1×10⁻²⁷ J", "4,0×10⁻²⁸ J"], bonne: 1, expl: "E = h·c/λ = 6,63×10⁻³⁴ × 3,00×10⁸ / 5,00×10⁻⁷ ≈ 4,0×10⁻¹⁹ J. 4,0×10⁻²⁸ vient de λ laissée en nm.", niv: 2 },
        { q: "Convertir 3,2×10⁻¹⁹ J en électronvolts (1 eV = 1,60×10⁻¹⁹ J) :", choix: ["0,50 eV", "5,1 eV", "2,0 eV", "3,2 eV"], bonne: 2, expl: "3,2×10⁻¹⁹ / 1,60×10⁻¹⁹ = 2,0 eV. On divise par la valeur de l'électronvolt.", niv: 2 },
        { q: "Un métal éclairé par une lumière rouge très intense n'émet aucun électron. Que faire pour en obtenir ?", choix: ["Prendre une longueur d'onde plus courte", "Éclairer plus longtemps", "Augmenter encore l'intensité", "Rapprocher la lampe du métal"], bonne: 0, expl: "Il faut des photons plus énergétiques, donc de fréquence plus grande et de longueur d'onde plus courte. L'intensité ne change rien sous le seuil.", niv: 3 },
        { q: "L'énergie d'un photon de fréquence ν est donnée par :", choix: ["E = h·ν", "E = h·λ", "E = h/ν", "E = m·c²/λ"], bonne: 0, expl: "E = h·ν = h·c/λ, avec h la constante de Planck.", niv: 1 },
        { q: "Zinc : travail d'extraction 4,3 eV. Un photon de 5,0 eV arrache un électron. Énergie cinétique maximale de cet électron ?", choix: ["9,3 eV", "0,7 eV", "4,3 eV", "5,0 eV"], bonne: 1, expl: "Ec,max = h·ν - W = 5,0 - 4,3 = 0,7 eV.", niv: 2 },
        { q: "Quelle observation sur l'effet photoélectrique a imposé le modèle du photon ?", choix: ["Il dépend de l'intensité lumineuse", "Il se produit avec n'importe quelle couleur", "Il varie avec la vitesse de la lumière", "Il n'existe qu'au-delà d'une fréquence seuil"], bonne: 3, expl: "Avec une onde, une forte intensité devrait suffire. Le seuil en fréquence montre que l'énergie arrive par paquets h·ν.", niv: 3 },
        { q: "Le grossissement d'une lunette afocale vaut :", choix: ["G = f'2/f'1", "G = f'1/f'2", "G = f'1·f'2", "G = f'1 + f'2"], bonne: 1, expl: "G = f'1/f'2 : grande focale d'objectif et petite focale d'oculaire donnent un fort grossissement.", niv: 1 },
        { q: "Une cellule photovoltaïque reçoit 100 W de lumière et fournit 18 W électriques. Son rendement vaut :", choix: ["82 %", "5,6 %", "18 %", "1,8 %"], bonne: 2, expl: "η = Pélectrique / Plumineuse = 18/100 = 18 %. 82 % correspond à l'énergie perdue.", niv: 2 },
        { q: "Où l'œil doit-il se placer derrière une lunette pour recevoir le plus de lumière ?", choix: ["Au cercle oculaire", "Au foyer objet de l'objectif", "Contre l'objectif", "Au centre de la lunette"], bonne: 0, expl: "Le cercle oculaire, image de l'objectif par l'oculaire, est l'endroit où passent tous les rayons sortant de la lunette.", niv: 3 },
      ] },
    { chapitre: 'pc-16',
      fiche: `## Dynamique d'un circuit électrique : le condensateur et le circuit RC

### Intensité et charge
- Le courant électrique est un déplacement de charges. L'**intensité** est le débit de charge : **i = dq/dt**, en ampères (A = C/s).
- Si l'intensité est constante, q = i·Δt.

### Le condensateur
- Un **condensateur** est formé de deux **armatures** conductrices séparées par un **isolant**. Quand il se charge, une armature porte la charge q et l'autre la charge -q.
- **Relation fondamentale : q = C·uC**, où C est la **capacité** en **farads (F)**. Les valeurs courantes sont en µF (10^-6 F) ou en nF (10^-9 F).
- En convention récepteur, comme i = dq/dt et q = C·uC : **i = C·duC/dt**.
- Conséquence : la tension aux bornes d'un condensateur **ne peut pas varier brusquement** (sinon l'intensité serait infinie).
- Quand uC ne varie plus, i = 0 : en **régime permanent**, le condensateur se comporte comme un **interrupteur ouvert**.

### La charge d'un condensateur dans un circuit RC
- Circuit : un générateur de tension E, une résistance R et un condensateur C en série. À t = 0, on ferme l'interrupteur (le condensateur est déchargé) : c'est un **échelon de tension**.
- Loi des mailles : E = uR + uC = R·i + uC, avec i = C·duC/dt. D'où l'**équation différentielle** : **R·C·duC/dt + uC = E**.
- Solution : **uC(t) = E·(1 - e^(-t/τ))**, avec la **constante de temps τ = R·C** (en secondes).
- Exemple : R = 10 kΩ et C = 100 µF donnent τ = 1,0×10^4 × 1,0×10^-4 = 1,0 s.
- À **t = τ**, uC vaut environ **63 % de E**. À **t = 5τ**, uC dépasse 99 % de E : on considère la charge terminée.
- L'intensité vaut i = (E/R)·e^(-t/τ) : maximale au début, nulle à la fin.

### La décharge
- Le condensateur chargé sous la tension E se décharge à travers R (sans générateur) : R·C·duC/dt + uC = 0.
- Solution : **uC(t) = E·e^(-t/τ)**. À t = τ, il reste environ **37 % de E** ; à 5τ, moins de 1 %.

### Déterminer τ sur une courbe
- **Méthode des 63 %** (charge) : on lit la date où uC = 0,63·E.
- **Méthode des 37 %** (décharge) : on lit la date où uC = 0,37·E.
- **Méthode de la tangente à l'origine** : la tangente à la courbe en t = 0 coupe l'asymptote (uC = E pour la charge, uC = 0 pour la décharge) à **t = τ**.
- Lire une expression : uC(t) = 6,0·(1 - e^(-t/0,20)) signifie E = 6,0 V et τ = 0,20 s.
- Augmenter R ou C **allonge** la charge : τ est proportionnelle à chacun.

### Les capteurs capacitifs
- La capacité d'un condensateur dépend de sa forme : surface des armatures, distance entre elles, isolant. Un capteur capacitif mesure une grandeur en détectant une **variation de capacité**.
- Exemples : **écran tactile** (le doigt modifie la capacité au point touché), clavier, accéléromètre de téléphone, capteur d'humidité, détecteur de niveau de liquide.

### À retenir pour le bac
- q = C·uC et i = C·duC/dt.
- Établir l'équation différentielle avec la loi des mailles, puis vérifier qu'une solution proposée la satisfait.
- τ = R·C ; 63 % à τ pour la charge, 37 % pour la décharge ; fin après environ 5τ.
- Piège : convertir les µF et les kΩ avant de calculer τ.
- En fin de charge, i = 0 : le condensateur bloque le courant continu.`,
      cartes: [
        { q: "Relation entre intensité et charge ?", r: "i = dq/dt : l'intensité est le débit de charge électrique, en ampères (1 A = 1 C/s)." },
        { q: "Relation entre charge et tension d'un condensateur ?", r: "q = C·uC, avec C la capacité en farads." },
        { q: "Intensité du courant dans un condensateur ?", r: "i = C·duC/dt, en convention récepteur." },
        { q: "Pourquoi la tension d'un condensateur ne peut-elle pas sauter brusquement ?", r: "Car i = C·duC/dt : un saut de tension demanderait une intensité infinie." },
        { q: "Constante de temps d'un circuit RC ?", r: "τ = R·C, en secondes." },
        { q: "Équation différentielle de la charge d'un circuit RC ?", r: "R·C·duC/dt + uC = E, obtenue avec la loi des mailles." },
        { q: "Solution pour la charge sous la tension E ?", r: "uC(t) = E·(1 - e^(-t/τ)), avec τ = R·C." },
        { q: "Solution pour la décharge ?", r: "uC(t) = E·e^(-t/τ)." },
        { q: "Valeur de uC à t = τ pendant la charge ?", r: "Environ 63 % de E." },
        { q: "Valeur de uC à t = τ pendant la décharge ?", r: "Environ 37 % de E." },
        { q: "Au bout de combien de temps la charge est-elle considérée comme finie ?", r: "Environ 5τ : uC dépasse alors 99 % de E." },
        { q: "Méthode de la tangente à l'origine ?", r: "La tangente à la courbe en t = 0 coupe l'asymptote horizontale à la date t = τ." },
        { q: "Comportement d'un condensateur en régime permanent ?", r: "Le courant est nul : il se comporte comme un interrupteur ouvert." },
        { q: "Principe d'un capteur capacitif ?", r: "La grandeur à mesurer modifie la capacité d'un condensateur (distance, surface, isolant). Exemple : l'écran tactile." },
      ],
      quiz: [
        { q: "Quelle relation lie la charge q d'un condensateur à la tension uC à ses bornes ?", choix: ["q = uC/C", "q = C·uC", "q = C/uC", "q = R·C·uC"], bonne: 1, expl: "q = C·uC : la charge est proportionnelle à la tension, avec la capacité C comme coefficient.", niv: 1 },
        { q: "Circuit RC : R = 10 kΩ et C = 100 µF. Que vaut la constante de temps τ ?", choix: ["10 s", "1,0×10⁶ s", "0,10 s", "1,0 s"], bonne: 3, expl: "τ = R·C = 1,0×10⁴ Ω × 1,0×10⁻⁴ F = 1,0 s. 1,0×10⁶ vient d'un oubli de conversion des µF.", niv: 2 },
        { q: "Charge d'un condensateur sous un échelon de tension E. À t = τ, la tension uC vaut environ :", choix: ["37 % de E", "50 % de E", "63 % de E", "100 % de E"], bonne: 2, expl: "uC(τ) = E·(1 - e⁻¹) ≈ 0,63·E. 37 % correspond à la décharge.", niv: 1 },
        { q: "Charge à travers une résistance R. Quelle équation différentielle vérifie uC ?", choix: ["R·C·duC/dt - uC = E", "R·duC/dt + C·uC = E", "duC/dt + R·C·uC = E", "R·C·duC/dt + uC = E"], bonne: 3, expl: "Loi des mailles : E = R·i + uC avec i = C·duC/dt.", niv: 2 },
        { q: "À la fin de la charge d'un condensateur (régime permanent), l'intensité du courant :", choix: ["vaut E/R", "est nulle", "est maximale", "change de signe"], bonne: 1, expl: "uC ne varie plus, donc i = C·duC/dt = 0. E/R est l'intensité au tout début de la charge.", niv: 2 },
        { q: "On double la résistance R d'un circuit RC. La durée de la charge :", choix: ["est divisée par 2", "ne change pas", "double", "est multipliée par 4"], bonne: 2, expl: "τ = R·C est proportionnelle à R : la charge dure deux fois plus longtemps.", niv: 3 },
        { q: "L'unité de la capacité d'un condensateur est :", choix: ["le farad", "le coulomb", "l'ohm", "le henry"], bonne: 0, expl: "La capacité s'exprime en farads (F). Le coulomb mesure une charge, l'ohm une résistance.", niv: 1 },
        { q: "Décharge : uC(t) = E·e^(-t/τ). Au bout de 5τ, uC vaut :", choix: ["37 % de E environ", "5 % de E environ", "20 % de E environ", "moins de 1 % de E"], bonne: 3, expl: "e⁻⁵ ≈ 0,007 : il reste moins de 1 % de E, on considère le condensateur déchargé.", niv: 3 },
        { q: "uC(t) = 6,0·(1 - e^(-t/0,20)), uC en volts et t en secondes. Que valent τ et la tension finale ?", choix: ["τ = 6,0 s et 0,20 V", "τ = 0,20 s et 6,0 V", "τ = 5,0 s et 6,0 V", "τ = 0,20 s et 1,0 V"], bonne: 1, expl: "Par identification avec E·(1 - e^(-t/τ)) : E = 6,0 V et τ = 0,20 s. 5,0 est l'inverse de τ.", niv: 2 },
        { q: "L'intensité d'un courant est liée à la charge électrique par :", choix: ["i = dq/dt", "i = q·t", "i = dt/dq", "i = q/C"], bonne: 0, expl: "L'intensité est la dérivée de la charge par rapport au temps.", niv: 1 },
        { q: "Sur la courbe de charge, la tangente à l'origine coupe l'asymptote uC = E à t = 2,0 ms. On en déduit :", choix: ["τ = 2,0 ms", "τ = 4,0 ms", "τ = 1,0 ms", "τ = 0,63 ms"], bonne: 0, expl: "La tangente à l'origine coupe l'asymptote exactement à t = τ.", niv: 2 },
        { q: "Un écran tactile détecte la position du doigt car le doigt modifie :", choix: ["la résistance d'un fil de l'écran", "la tension du réseau électrique", "la capacité d'un condensateur", "la fréquence de la lumière émise"], bonne: 2, expl: "L'écran est un réseau de capteurs capacitifs : le doigt change la capacité au point touché.", niv: 3 },
      ] },
  ],
  methode: [
    { id: 'pc-m1', mat: 'pc', titre: 'Exploiter un titrage pour trouver une concentration',
      formules: ['Déterminer la concentration de l\'espèce titrée', 'Vérifier l\'indication de l\'étiquette', 'Le résultat est-il conforme ?'],
      vu: ['Présent dans la plupart des sujets écrits de spécialité depuis 2021', 'Fréquent à l\'épreuve pratique'], pts: '3 à 5 points',
      attendu: 'Écrire la réaction support, repérer le volume équivalent avec une méthode nommée, écrire la relation à l\'équivalence avec les coefficients, calculer avec unités et chiffres significatifs, tenir compte d\'une dilution, puis comparer à la valeur annoncée.',
      etapes: ['Écrire l\'équation de la réaction support du titrage', 'Lire VE (tangentes parallèles, maximum de la dérivée ou rupture de pente) et le dire', 'Écrire n(titré)/a = n(titrant versé)/b, puis la formule littérale de la concentration', 'Faire l\'application numérique avec les unités', 'Remonter à la solution de départ si elle a été diluée', 'Comparer à la référence avec l\'incertitude et conclure'],
      mots: ['réaction support', 'équivalence', 'changement de réactif limitant', 'proportions stœchiométriques', 'volume équivalent', 'facteur de dilution', 'incertitude-type'],
      pieges: ['Oublier les coefficients stœchiométriques quand ils ne valent pas 1', 'Oublier le facteur de dilution', 'Donner un résultat avec trop de chiffres significatifs', 'Conclure « conforme » sans calcul d\'écart ni incertitude'],
      cas: 'Un déboucheur fictif annonce une soude de concentration 2,0 mol/L. On le dilue 20 fois, puis on titre 10,0 mL de la solution diluée par de l\'acide chlorhydrique à 0,100 mol/L. Le saut de pH donne VE = 9,8 mL. Réaction : H3O+ + HO– → 2 H2O.',
      question: 'Déterminer la concentration en soude du déboucheur et dire si elle est conforme (incertitude-type sur le résultat : 0,05 mol/L).',
      modele: 'À l\'équivalence, n(HO–) initial = n(H3O+) versé, donc c·V = cA·VE et c = cA·VE/V = 0,100 × 9,8 / 10,0 = 9,8×10⁻² mol/L dans la solution diluée. Le déboucheur est 20 fois plus concentré : c0 = 20 × 9,8×10⁻² = 1,96 mol/L ≈ 2,0 mol/L. Écart à la valeur annoncée : (2,0 - 1,96)/0,05 ≈ 0,8, inférieur à 2 : le résultat est compatible avec l\'étiquette.',
      grille: ['L\'équation de la réaction support est écrite', 'La relation à l\'équivalence est justifiée', 'Le calcul est fait d\'abord en lettres, puis en nombres avec l\'unité', 'Le facteur de dilution est appliqué', 'La comparaison utilise l\'incertitude et se conclut par une phrase'] },

    { id: 'pc-m2', mat: 'pc', titre: 'Établir les équations horaires d\'un mouvement',
      formules: ['Montrer que les coordonnées du vecteur accélération sont…', 'En déduire les équations horaires', 'Établir l\'équation de la trajectoire'],
      vu: ['Présent dans la plupart des sujets écrits de spécialité depuis 2021 (projectile, particule chargée, satellite)'], pts: '3 à 6 points',
      attendu: 'Une démonstration complète et ordonnée : système, référentiel galiléen, bilan des forces, deuxième loi de Newton, projection sur les axes, intégrations successives avec les conditions initiales, puis élimination du temps pour la trajectoire.',
      etapes: ['Définir le système et le référentiel (terrestre ou géocentrique, supposé galiléen)', 'Faire le bilan des forces et dire lesquelles on néglige', 'Appliquer la deuxième loi de Newton et en déduire le vecteur a', 'Projeter sur les axes en tenant compte de leur orientation', 'Intégrer pour obtenir v(t) avec les conditions initiales, puis la position', 'Exprimer t à partir de x et le remplacer dans z pour la trajectoire'],
      mots: ['référentiel galiléen', 'deuxième loi de Newton', 'chute libre', 'conditions initiales', 'primitive', 'équations horaires', 'parabole'],
      pieges: ['Oublier les conditions initiales (constantes d\'intégration)', 'Se tromper de signe en projetant g sur un axe orienté vers le haut', 'Confondre sinα et cosα dans les coordonnées de v0', 'Écrire que la vitesse est nulle au sommet d\'une parabole'],
      cas: 'Une balle est lancée depuis le sol (origine O) avec une vitesse v0 = 10 m/s faisant un angle de 30° avec l\'horizontale. Axe Ox horizontal, axe Oz vertical vers le haut, g = 9,8 m/s². Les frottements sont négligés.',
      question: 'Établir les équations horaires x(t) et z(t), puis la date à laquelle la balle atteint son point le plus haut.',
      modele: 'Système : la balle ; référentiel terrestre supposé galiléen ; seule force : le poids. Deuxième loi : m·a = m·g, donc a = g : ax = 0 et az = -g. En intégrant avec v(0) = (v0·cos30° ; v0·sin30°) : vx = v0·cos30° ≈ 8,7 m/s et vz = -g·t + v0·sin30° = -9,8·t + 5,0. En intégrant avec x(0) = z(0) = 0 : x = 8,7·t et z = -4,9·t² + 5,0·t. Au sommet, vz = 0, donc t = 5,0 / 9,8 ≈ 0,51 s.',
      grille: ['Système, référentiel galiléen et forces sont donnés', 'La deuxième loi de Newton est écrite et donne a = g', 'Les composantes de v0 utilisent correctement cos et sin', 'Les constantes d\'intégration viennent des conditions initiales', 'La condition du sommet (vz = 0) est utilisée'] },

    { id: 'pc-m3', mat: 'pc', titre: 'Exploiter une courbe exponentielle : temps caractéristique',
      formules: ['Déterminer graphiquement la constante de temps τ', 'Déterminer le temps de demi-réaction', 'Déterminer la demi-vie de ce noyau'],
      vu: ['Présent dans de nombreux sujets écrits depuis 2021 : circuit RC, cinétique, radioactivité, refroidissement'], pts: '1 à 3 points',
      attendu: 'Nommer la méthode, la montrer sur le graphique (traits de lecture), donner la valeur lue avec une unité et un nombre raisonnable de chiffres, puis l\'exploiter (comparer à R·C, calculer k ou λ).',
      etapes: ['Repérer la valeur initiale et la valeur finale de la grandeur', 'Choisir la méthode : 63 % ou 37 % pour τ, moitié de la variation pour t1/2, tangente à l\'origine', 'Tracer les traits de lecture sur le graphique', 'Lire la date sur l\'axe des abscisses avec son unité', 'Exploiter la valeur : τ = R·C, t1/2 = ln2/λ ou t1/2 = ln2/k'],
      mots: ['constante de temps', 'temps de demi-réaction', 'demi-vie', 'tangente à l\'origine', 'asymptote', 'décroissance exponentielle'],
      pieges: ['Prendre la moitié de la valeur initiale au lieu de la moitié de la variation', 'Confondre 63 % (charge) et 37 % (décharge)', 'Oublier l\'unité ou le préfixe (ms, min)', 'Ne laisser aucune trace de la lecture sur le graphique'],
      cas: 'Lors de la décharge d\'un condensateur de capacité C = 220 µF à travers une résistance R, la tension passe de 12,0 V à 0 V. Sur la courbe, uC vaut 4,4 V à la date t = 0,47 s.',
      question: 'Déterminer τ, puis la valeur de R.',
      modele: 'Pour une décharge, à t = τ, uC = 0,37 × 12,0 ≈ 4,4 V. On lit donc τ = 0,47 s. Comme τ = R·C, R = τ/C = 0,47 / 220×10⁻⁶ ≈ 2,1×10³ Ω, soit environ 2,1 kΩ.',
      grille: ['La méthode est nommée (37 % pour une décharge)', 'La valeur 0,37 × E est calculée', 'τ est donné avec son unité', 'La relation τ = R·C est utilisée avec C en farads', 'Le résultat a 2 ou 3 chiffres significatifs et une unité'] },

    { id: 'pc-m4', mat: 'pc', titre: 'Écrire un résultat de mesure et le comparer à une référence',
      formules: ['Écrire le résultat avec son incertitude-type', 'Le résultat est-il compatible avec la valeur de référence ?', 'Commenter la précision de la mesure'],
      vu: ['Demandé dans la plupart des sujets écrits et à l\'épreuve pratique'], pts: '0,5 à 2 points',
      attendu: 'Un résultat avec un nombre cohérent de chiffres significatifs et son unité, une incertitude-type arrondie avec au plus deux chiffres significatifs, et une comparaison chiffrée à la référence (quotient de l\'écart par l\'incertitude-type).',
      etapes: ['Calculer la valeur et garder le bon nombre de chiffres significatifs', 'Écrire le résultat sous la forme valeur et incertitude-type, avec l\'unité', 'Calculer l\'écart à la référence divisé par l\'incertitude-type', 'Conclure : compatible si ce quotient est inférieur ou égal à 2 environ', 'Si ce n\'est pas compatible, proposer une source d\'erreur précise'],
      mots: ['incertitude-type', 'chiffres significatifs', 'valeur de référence', 'compatible', 'écart relatif', 'source d\'erreur'],
      pieges: ['Recopier tous les chiffres de la calculatrice', 'Donner une incertitude avec plus de chiffres que la valeur', 'Dire « la mesure est fausse » au lieu de chiffrer l\'écart', 'Oublier l\'unité'],
      cas: 'Un groupe mesure la célérité du son dans l\'air et trouve v = 336,72 m/s, avec une incertitude-type u(v) = 4 m/s. La valeur de référence à la température de la salle est 343 m/s.',
      question: 'Écrire correctement le résultat et dire s\'il est compatible avec la référence.',
      modele: 'L\'incertitude porte sur les unités : v = 337 m/s avec u(v) = 4 m/s. Écart à la référence divisé par l\'incertitude : (343 - 337)/4 = 1,5. Ce quotient est inférieur à 2 : la mesure est compatible avec la valeur de référence.',
      grille: ['La valeur est arrondie au même rang que l\'incertitude', 'L\'unité est présente', 'Le quotient écart/incertitude est calculé', 'La conclusion est une phrase claire (compatible ou non)'] },

    { id: 'pc-m5', mat: 'pc', titre: 'Épreuve pratique : proposer et mettre en œuvre un protocole',
      formules: ['Proposer un protocole expérimental pour…', 'Mettre en œuvre le protocole (appel du professeur)', 'Exploiter les mesures et conclure'],
      vu: ['Épreuve pratique d\'1 h de la spécialité, qui compte pour 20 % de la note de l\'épreuve à partir de la session 2027'], pts: '20 points (épreuve pratique), soit 4 points de la note finale',
      attendu: 'Un protocole précis et réalisable avec le matériel listé (verrerie exacte, volumes, grandeur mesurée, nombre de mesures), des gestes sûrs et soignés, des mesures notées avec unités, puis une exploitation qui répond à la question posée.',
      etapes: ['Lire le but de l\'expérience et repérer la grandeur à mesurer', 'Choisir le matériel adapté dans la liste fournie (pipette jaugée pour un volume précis, fiole jaugée pour une dilution)', 'Rédiger les étapes numérotées avec les volumes et les réglages', 'Appeler l\'examinateur aux moments indiqués', 'Mettre en œuvre : blouse, lunettes, gants si besoin, paillasse rangée', 'Noter les mesures dans un tableau avec les unités', 'Exploiter (graphique, calcul) et conclure par rapport au but'],
      mots: ['pipette jaugée', 'fiole jaugée', 'burette graduée', 'étalonnage', 'solution étalon', 'blanc', 'sécurité'],
      pieges: ['Choisir une éprouvette graduée pour un volume qui doit être précis', 'Oublier de faire le blanc au spectrophotomètre', 'Un protocole trop vague (« on mesure », sans dire quoi ni comment)', 'Ne pas répondre à la question posée dans la conclusion'],
      cas: 'On dispose d\'une solution mère de diiode à 1,0×10⁻³ mol/L, de fioles jaugées de 50,0 mL, de pipettes jaugées de 5,0 et 10,0 mL et d\'un spectrophotomètre. On veut doser le diiode d\'une solution antiseptique fictive par étalonnage.',
      question: 'Proposer un protocole pour préparer 50,0 mL d\'une solution étalon à 2,0×10⁻⁴ mol/L.',
      modele: 'Facteur de dilution : F = 1,0×10⁻³ / 2,0×10⁻⁴ = 5. Volume à prélever : 50,0 / 5 = 10,0 mL. Prélever 10,0 mL de solution mère avec une pipette jaugée de 10,0 mL munie d\'une propipette, les verser dans une fiole jaugée de 50,0 mL, compléter avec de l\'eau distillée jusqu\'au trait de jauge, boucher et agiter pour homogénéiser.',
      grille: ['Le facteur de dilution ou le volume à prélever est calculé', 'La verrerie jaugée est choisie (pipette et fiole)', 'Les étapes sont dans l\'ordre et réalisables', 'L\'homogénéisation est mentionnée'] },
  ],
  sujets: [
    { id: 'pc-s1', matiere: 'pc', titre: 'Sujet d\'entraînement 1', duree: 210,
      enonce: `Sujet d'entraînement inventé pour réviser. Les marques, situations et valeurs sont fictives. Calculatrice en mode examen. Le sujet comporte trois exercices indépendants.

EXERCICE 1 — Le vinaigre du Moulin (9 points)

L'étiquette d'un vinaigre blanc fictif, le « Vinaigre du Moulin », indique un degré d'acidité de 8,0 %. Cela signifie que 100 g de vinaigre contiennent 8,0 g d'acide éthanoïque CH3COOH. On admet que 100 g de vinaigre occupent 100 mL.

Données : M(CH3COOH) = 60,0 g/mol ; pKa(CH3COOH/CH3COO–) = 4,8 à 25 °C.
Zones de virage d'indicateurs colorés : hélianthine 3,1 à 4,4 ; bleu de bromothymol 6,0 à 7,6 ; phénolphtaléine 8,2 à 10,0.

Protocole : on dilue 10 fois le vinaigre pour obtenir une solution S. On titre VA = 10,0 mL de S par une solution d'hydroxyde de sodium (Na+ + HO–) de concentration cB = 0,100 mol/L, avec un suivi pH-métrique. La courbe obtenue montre un saut de pH ; la méthode des tangentes parallèles donne VE = 13,5 mL et un pH à l'équivalence de 8,8. Le pH de la solution S avant tout ajout vaut 2,7.

1. Écrire l'équation de la réaction support du titrage. Citer deux qualités que doit avoir cette réaction. (1 pt)
2. Indiquer la verrerie à utiliser pour préparer 100,0 mL de solution S à partir du vinaigre. (1 pt)
3. Établir l'expression de la concentration cS de la solution S, la calculer, puis en déduire la concentration c0 du vinaigre. (2 pts)
4. Calculer le degré d'acidité du vinaigre. L'incertitude-type sur ce degré vaut 0,2 %. Le résultat est-il compatible avec l'étiquette ? (2 pts)
5. Tracer le diagramme de prédominance du couple de l'acide éthanoïque et indiquer l'espèce qui prédomine dans la solution S. (1 pt)
6. On veut refaire le titrage avec un indicateur coloré. Lequel choisir ? Justifier. Quelle valeur de pH devrait-on lire pour un volume versé de 6,75 mL ? Justifier. (2 pts)

EXERCICE 2 — Un tir au basket (6 points)

Une joueuse lance un ballon de masse m = 600 g. Le ballon quitte ses mains à la hauteur h = 2,0 m au-dessus du sol, avec une vitesse v0 = 7,5 m/s faisant un angle α = 50° avec l'horizontale. Le centre de l'anneau du panier est à une distance horizontale de 4,6 m du point de lancer et à 3,05 m du sol.
Repère : origine O au sol, à la verticale du point de lancer ; axe Ox horizontal vers le panier ; axe Oz vertical vers le haut. On néglige les frottements et la poussée d'Archimède. g = 9,81 m/s².

1. Préciser le système, le référentiel et la force qui s'exerce sur le ballon. Montrer que son vecteur accélération est égal à g. (1 pt)
2. Établir les équations horaires x(t) et z(t). (1,5 pt)
3. En déduire l'équation de la trajectoire z(x). (1 pt)
4. Calculer la hauteur maximale atteinte par le ballon, puis sa hauteur quand x = 4,6 m. Le tir a-t-il des chances de réussir ? (1,5 pt)
5. À l'aide de la conservation de l'énergie mécanique, calculer la vitesse du ballon quand il passe à 3,0 m du sol. (1 pt)

EXERCICE 3 — Le temporisateur d'une lampe (5 points)

Pour qu'une lampe de couloir reste allumée un moment, on utilise la charge d'un condensateur de capacité C = 470 µF à travers une résistance R = 2,2 kΩ, sous une tension constante E = 9,0 V. Le condensateur est déchargé à t = 0.

1. Avec la loi des mailles, établir l'équation différentielle vérifiée par la tension uC. (1,5 pt)
2. Vérifier que uC(t) = E·(1 - e^(-t/τ)) est solution, avec τ = R·C, et calculer τ. (1,5 pt)
3. Au bout de combien de temps peut-on considérer le condensateur comme chargé ? (1 pt)
4. Sur la courbe expérimentale, la tension atteint 5,7 V à t = 1,1 s. Comparer à la valeur calculée et proposer une explication à l'écart. (1 pt)`,
      corrige: `EXERCICE 1
1. CH3COOH + HO– → CH3COO– + H2O. La réaction doit être rapide, totale et unique (deux des trois suffisent).
2. Pipette jaugée de 10,0 mL (avec propipette) pour prélever le vinaigre, fiole jaugée de 100,0 mL complétée à l'eau distillée jusqu'au trait de jauge, puis homogénéiser.
3. À l'équivalence, les réactifs sont dans les proportions stœchiométriques : n(CH3COOH) initial = n(HO–) versé, soit cS·VA = cB·VE. Donc cS = cB·VE/VA = 0,100 × 13,5 / 10,0 = 0,135 mol/L. Le vinaigre est 10 fois plus concentré : c0 = 1,35 mol/L.
4. Concentration en masse : cm = c0·M = 1,35 × 60,0 = 81 g/L. Dans 100 mL, il y a donc 8,1 g d'acide, soit 100 g de vinaigre : degré 8,1 %. Écart à l'étiquette divisé par l'incertitude-type : (8,1 - 8,0)/0,2 = 0,5, inférieur à 2. Le résultat est compatible avec l'étiquette.
5. Axe de pH coupé à 4,8 : CH3COOH prédomine pour pH < 4,8, CH3COO– pour pH > 4,8. Dans S, pH = 2,7 < 4,8 : l'acide éthanoïque CH3COOH prédomine.
6. Il faut un indicateur dont la zone de virage contient le pH à l'équivalence, 8,8 : la phénolphtaléine (8,2 à 10,0). Pour 6,75 mL = VE/2, on est à la demi-équivalence : [CH3COOH] = [CH3COO–], donc pH = pKa = 4,8.

EXERCICE 2
1. Système : le ballon ; référentiel terrestre supposé galiléen ; seule force : le poids P = m·g. Deuxième loi de Newton : m·a = m·g, donc a = g (ax = 0 ; az = -g).
2. vx = v0·cosα et vz = -g·t + v0·sinα. Avec x(0) = 0 et z(0) = h : x(t) = v0·cosα·t ≈ 4,82·t ; z(t) = -½·g·t² + v0·sinα·t + h ≈ -4,91·t² + 5,75·t + 2,0 (x et z en m, t en s).
3. t = x/(v0·cosα), d'où z(x) = -g·x²/(2·v0²·cos²α) + tanα·x + h ≈ -0,211·x² + 1,19·x + 2,0.
4. Au sommet, vz = 0 : t = v0·sinα/g = 5,75/9,81 ≈ 0,586 s, et zmax = h + (v0·sinα)²/(2g) = 2,0 + 33,0/19,6 ≈ 3,7 m. Pour x = 4,6 m : z ≈ -0,211 × 21,2 + 1,19 × 4,6 + 2,0 ≈ 3,0 m. Le ballon arrive à quelques centimètres de la hauteur de l'anneau (3,05 m), en redescendant : le tir a de bonnes chances de réussir.
5. Sans frottements, Em se conserve : ½·m·v0² + m·g·h = ½·m·v² + m·g·z, donc v² = v0² - 2·g·(z - h) = 56,25 - 2 × 9,81 × 1,0 ≈ 36,6 et v ≈ 6,0 m/s. La masse n'intervient pas.

EXERCICE 3
1. Loi des mailles : E = uR + uC, avec uR = R·i et i = C·duC/dt. Donc R·C·duC/dt + uC = E.
2. duC/dt = (E/τ)·e^(-t/τ). Alors R·C·(E/τ)·e^(-t/τ) + E - E·e^(-t/τ) = E si τ = R·C : l'équation est vérifiée. De plus uC(0) = 0. τ = 2,2×10³ × 470×10⁻⁶ ≈ 1,0 s.
3. Après environ 5τ, soit environ 5 s, uC dépasse 99 % de E : le condensateur est chargé.
4. 5,7 V correspond à 5,7/9,0 ≈ 63 % de E : la mesure donne τ ≈ 1,1 s, contre 1,0 s calculé (écart d'environ 10 %). L'écart peut venir de la tolérance des composants : la capacité réelle d'un condensateur peut s'écarter de 10 à 20 % de la valeur indiquée.`,
      grille: [
        { c: 'Ex. 1 : réaction support et verrerie', pts: 2 },
        { c: 'Ex. 1 : relation à l\'équivalence, concentrations et dilution', pts: 2 },
        { c: 'Ex. 1 : degré d\'acidité et comparaison avec l\'incertitude', pts: 2 },
        { c: 'Ex. 1 : prédominance, choix de l\'indicateur et demi-équivalence', pts: 3 },
        { c: 'Ex. 2 : deuxième loi de Newton et équations horaires', pts: 2.5 },
        { c: 'Ex. 2 : trajectoire, flèche et hauteur au panier', pts: 2.5 },
        { c: 'Ex. 2 : conservation de l\'énergie mécanique', pts: 1 },
        { c: 'Ex. 3 : équation différentielle et vérification de la solution', pts: 3 },
        { c: 'Ex. 3 : durée de charge et exploitation de la mesure', pts: 2 },
      ] },
  ],
};
