// Gestion des ressources et de l'alimentation (spécialité, terminale STAV, enseignement agricole). Sources : voir matiere.sources.
// Programme : module S1 du référentiel du baccalauréat technologique STAV et son document d'accompagnement (inspection de l'enseignement agricole, avril 2019).
// L'épreuve écrite porte sur les parties de biologie-écologie et de sciences et techniques agronomiques (agronomie, zootechnie) du module S1 ;
// la physique-chimie et les sciences et techniques des équipements sont évaluées en contrôle continu : leurs objectifs (1.1.1, 1.1.2 et objectif 3) ne sont donc pas repris ici.
// Un chapitre par sous-objectif du programme, dans l'ordre (objectifs 1.1.3 à 2.3).
// Épreuve : instruction technique DGER/SDPFE/2026-513 du 26 août 2026, applicable à partir de la session 2027.
export default {
  matiere: {
    id: 'stav-gra',
    nom: 'Gestion des ressources et de l\'alimentation',
    voie: 'stav',
    epreuve: { type: 'ecrit', duree: 150, coef: 16, quand: 'juin', note: 'Épreuve écrite terminale de 2 h 30, sans calculatrice ni document : une étude de cas sur un agroécosystème réel, avec un corpus de documents. En général cinq consignes : relier le contexte aux trois piliers de la durabilité, trois consignes scientifiques et techniques (biologie-écologie, agronomie, zootechnie, alimentation), puis une consigne finale qui demande d\'identifier et de justifier des enjeux. Notée sur 20 avec une grille nationale : environ 14 à 15 points pour la réflexion scientifique et technologique, 5 à 6 points pour les enjeux. Correction par un professeur de biologie-écologie et un professeur d\'agronomie ou de zootechnie.' },
    sources: [
      'https://chlorofil.fr/fileadmin/user_upload/02-diplomes/referentiels/secondaire/bactechno/bac-techno-da-S1.pdf (document d\'accompagnement du module S1, avril 2019)',
      'https://info.agriculture.gouv.fr/boagri/instruction-2026-513/telechargement (épreuves du baccalauréat STAV à partir de la session 2027)',
      'https://chlorofil.fr/fileadmin/user_upload/02-diplomes/examens/epreuves-terminales/grilles/bac-techno/grille-stav-c-gra.pdf (grille nationale d\'évaluation)',
      'https://chlorofil.fr/fileadmin/user_upload/sujets-examens/2023/2023-BAC40-NOR-ME-RE-MA.pdf (sujet 2023 : le râle des genêts dans les Basses Vallées Angevines)',
      'https://chlorofil.fr/fileadmin/user_upload/sujets-examens/2025/2025-BAC40-NOR-ME-RE-MA.pdf (sujet 2025 : la filière champagne face aux défis environnementaux)',
      'https://chlorofil.fr/fileadmin/user_upload/02-diplomes/referentiels/secondaire/bactechno/bactechno-da-sujet-zero-S1-082020.pdf et bactechno-da-sujet-zero-2-S1-012023.pdf (sujets zéro)',
      'https://www.anses.fr et https://www.mangerbouger.fr (références nutritionnelles et repères du PNNS)',
    ],
    chapitres: [
      { id: 'stav-gra-1', t: 'Les biomolécules des aliments et les besoins de l\'organisme', theme: 'Aliments et besoins humains' },
      { id: 'stav-gra-2', t: 'Alimentation et santé : équilibre, diabète, allergies et intolérances', theme: 'Aliments et besoins humains' },
      { id: 'stav-gra-3', t: 'La digestion : de l\'aliment aux nutriments', theme: 'Aliments et besoins humains' },
      { id: 'stav-gra-4', t: 'Produits agricoles, modes de production et qualité', theme: 'Aliments et besoins humains' },
      { id: 'stav-gra-5', t: 'Les dangers sanitaires et leur maîtrise lors de la production', theme: 'Sécurité sanitaire des aliments' },
      { id: 'stav-gra-6', t: 'Maîtriser le risque lors de la transformation et de la conservation', theme: 'Sécurité sanitaire des aliments' },
      { id: 'stav-gra-7', t: 'Les mécanismes de défense de l\'organisme', theme: 'Sécurité sanitaire des aliments' },
      { id: 'stav-gra-8', t: 'L\'agroécosystème : composantes, fonctions et réseaux trophiques', theme: 'Fonctionnement des agroécosystèmes' },
      { id: 'stav-gra-9', t: 'Photosynthèse, respiration, fermentation et cycle du carbone', theme: 'Fonctionnement des agroécosystèmes' },
      { id: 'stav-gra-10', t: 'La biodiversité et les services écosystémiques', theme: 'Ressources naturelles' },
      { id: 'stav-gra-11', t: 'La biodiversité génétique : reproduction, hérédité et mutations', theme: 'Ressources naturelles' },
      { id: 'stav-gra-12', t: 'Gérer durablement les agroécosystèmes', theme: 'Ressources naturelles' },
    ],
  },
  paquets: [
    {
      chapitre: 'stav-gra-1',
      fiche: `## Les biomolécules des aliments et les besoins de l'organisme

### Les grandes familles de biomolécules
- **Glucides** : les **oses** (glucose, fructose, galactose) sont les plus simples ; deux oses forment un **diholoside** (saccharose = glucose + fructose, lactose = glucose + galactose, maltose = glucose + glucose) ; beaucoup d'oses forment un **polyholoside** (amidon des végétaux, glycogène des animaux, cellulose des parois végétales).
- **Lipides** : surtout des **triglycérides** (glycérol + 3 acides gras). Les acides gras **saturés** dominent dans les graisses animales (beurre, saindoux) ; les **insaturés** dans les huiles végétales et les poissons (oméga 3, oméga 6).
- **Protides** : les **acides aminés** (20 différents, dont 9 indispensables chez l'adulte, que le corps ne sait pas fabriquer) s'enchaînent en **peptides**, puis en **protéines**.
- **Hydrolyse** : la coupure d'une grosse molécule en petites, avec de l'eau (amidon → glucose). La **synthèse** (condensation) fait l'inverse et libère de l'eau.

### Les tests de mise en évidence
- **Eau iodée** : coloration bleu-noir en présence d'**amidon**.
- **Liqueur de Fehling** : précipité **rouge brique** à chaud avec les **sucres réducteurs** (glucose, lactose ; le saccharose ne réagit pas).
- **Biuret** : coloration **violette** avec les **protéines**.
- **Ninhydrine** : coloration violette avec les **acides aminés**.
- **Tache grasse** sur papier : présence de **lipides**.

### Les constituants des aliments et leurs rôles
- **Rôle énergétique** : glucides et lipides surtout (1 g de glucides ou de protides = 4 kcal ; 1 g de lipides = 9 kcal).
- **Rôle plastique** (construction) : protides, calcium et phosphore des os, eau.
- **Rôle fonctionnel** (fonctionnement) : vitamines, minéraux (fer de l'hémoglobine, iode), fibres pour le transit.
- L'**eau** représente environ 60 % de la masse d'un adulte ; il faut en boire environ 1,5 L par jour.

### Les besoins de l'organisme
- **Métabolisme de base** : l'énergie dépensée au repos complet, à jeun, pour faire fonctionner les organes et garder la température du corps.
- Les besoins varient selon l'**âge**, le **sexe**, la **masse**, l'**activité physique**, la **gestation** et la **lactation**, le climat.
- Le PNNS classe les aliments en **groupes** : fruits et légumes, féculents, légumineuses, produits laitiers, viandes-poissons-œufs, matières grasses, produits sucrés, boissons, sel, fruits à coque…

### À retenir pour le bac
- Ose, diholoside, polyholoside ; triglycéride ; acide aminé, peptide, protéine.
- Eau iodée : amidon ; Fehling : sucres réducteurs ; biuret : protéines ; tache grasse : lipides.
- Rôles énergétique, plastique, fonctionnel.
- Métabolisme de base et facteurs de variation des besoins.`,
      cartes: [
        { q: "Qu'est-ce qu'un ose ?", r: "Le glucide le plus simple : glucose, fructose, galactose." },
        { q: "De quoi sont formés le saccharose et le lactose ?", r: "Saccharose : glucose + fructose. Lactose : glucose + galactose." },
        { q: "Citez trois polyholosides.", r: "L'amidon des végétaux, le glycogène des animaux, la cellulose des parois végétales." },
        { q: "Qu'est-ce qu'un triglycéride ?", r: "Un lipide formé d'un glycérol et de trois acides gras." },
        { q: "Où trouve-t-on surtout les acides gras saturés et insaturés ?", r: "Saturés : graisses animales. Insaturés : huiles végétales et poissons gras." },
        { q: "Qu'est-ce qu'un acide aminé indispensable ?", r: "Un acide aminé que l'organisme ne sait pas fabriquer et qui doit venir de l'alimentation." },
        { q: "Qu'est-ce que l'hydrolyse ?", r: "La coupure d'une grosse molécule en petites molécules grâce à l'eau, par exemple amidon en glucose." },
        { q: "Que montre l'eau iodée ?", r: "La présence d'amidon, par une coloration bleu-noir." },
        { q: "Que montre la liqueur de Fehling ?", r: "La présence de sucres réducteurs, par un précipité rouge brique à chaud." },
        { q: "Quel test met en évidence les protéines ?", r: "Le biuret, qui donne une coloration violette." },
        { q: "Quels sont les trois rôles des constituants des aliments ?", r: "Énergétique (fournir de l'énergie), plastique (construire), fonctionnel (faire fonctionner)." },
        { q: "Qu'est-ce que le métabolisme de base ?", r: "L'énergie dépensée au repos complet et à jeun pour faire fonctionner les organes et garder la température du corps." },
        { q: "Quels facteurs font varier les besoins ?", r: "L'âge, le sexe, la masse, l'activité physique, la gestation, la lactation et le climat." },
      ],
      quiz: [
        { q: "L'amidon est :", choix: ["un triglycéride", "un acide aminé", "un polyholoside", "un ose"], bonne: 2, expl: "C'est une longue chaîne de molécules de glucose.", niv: 1 },
        { q: "L'eau iodée devient bleu-noir en présence :", choix: ["de lipides", "d'acides gras", "de protéines", "d'amidon"], bonne: 3, expl: "Ce test est spécifique de l'amidon.", niv: 1 },
        { q: "Une protéine est formée :", choix: ["d'acides gras et de glycérol", "d'acides aminés", "d'oses", "de glycérol"], bonne: 1, expl: "Les acides aminés s'enchaînent en peptides puis en protéines.", niv: 1 },
        { q: "Le lactose du lait est formé :", choix: ["de glucose et de fructose", "de deux glucoses", "de glucose et de galactose", "d'acides aminés"], bonne: 2, expl: "Glucose + fructose, c'est le saccharose ; deux glucoses, le maltose.", niv: 1 },
        { q: "Un extrait de lait donne un précipité rouge brique avec la liqueur de Fehling. On en conclut qu'il contient :", choix: ["un sucre réducteur", "de l'amidon", "des lipides", "des protéines"], bonne: 0, expl: "Le lactose est un sucre réducteur.", niv: 2 },
        { q: "Une huile de colza est riche :", choix: ["en lactose", "en amidon", "en acides gras saturés d'origine animale", "en acides gras insaturés"], bonne: 3, expl: "Les huiles végétales sont riches en insaturés, dont les oméga 3 pour le colza.", niv: 2 },
        { q: "Le calcium du lait joue surtout un rôle :", choix: ["plastique", "énergétique", "de réserve de sucre", "de coloration des aliments"], bonne: 0, expl: "Il participe à la construction et à l'entretien du squelette.", niv: 2 },
        { q: "Combien d'énergie apportent 10 g de lipides ?", choix: ["40 kcal", "9 kcal", "4 kcal", "90 kcal"], bonne: 3, expl: "10 × 9 = 90 kcal.", niv: 2 },
        { q: "Une vache qui allaite a des besoins plus élevés qu'une vache tarie. Pourquoi ?", choix: ["Elle dort moins et bouge davantage dans le bâtiment", "Produire du lait demande de l'énergie", "Son métabolisme de base disparaît", "Le lait lui apporte de l'énergie"], bonne: 1, expl: "La lactation est un facteur qui augmente les besoins.", niv: 2 },
        { q: "Quel test ne met **pas** en évidence un constituant organique de l'aliment ?", choix: ["Le test du biuret sur un extrait", "L'eau iodée", "La couleur de l'emballage", "La tache grasse"], bonne: 2, expl: "La couleur de l'emballage ne renseigne pas sur la composition.", niv: 2 },
        { q: "Pourquoi le corps a-t-il besoin d'énergie même au repos ?", choix: ["Pour faire fonctionner ses organes", "Pour digérer la cellulose des fibres du repas précédent", "Pour fabriquer des vitamines", "Pour produire de l'amidon"], bonne: 0, expl: "C'est le métabolisme de base.", niv: 3 },
        { q: "Un pain contient de l'amidon. Que se passe-t-il pendant sa digestion ?", choix: ["L'amidon est transformé en protéines", "L'amidon est hydrolysé en glucose", "L'amidon devient des acides gras", "L'amidon reste intact dans le sang"], bonne: 1, expl: "L'hydrolyse coupe l'amidon en molécules de glucose absorbables.", niv: 3 },
      ],
    },
    {
      chapitre: 'stav-gra-2',
      fiche: `## Alimentation et santé : équilibre, diabète, allergies et intolérances

### L'équilibre alimentaire
- Une alimentation **équilibrée** couvre les besoins sans excès : elle est **variée** et suit les **repères de consommation** du PNNS et de l'ANSES.
- Repères principaux : au moins **5 fruits et légumes** par jour ; des **féculents complets** ; des **légumineuses** au moins deux fois par semaine ; **2 produits laitiers** par jour ; du **poisson** deux fois par semaine dont un gras ; limiter la **viande rouge** et la **charcuterie** ; privilégier les **huiles** de colza, de noix et d'olive ; limiter le sucre, le sel et l'alcool.
- **Ration** : la quantité d'aliments consommée sur une journée.
- **Alcool** : le PNNS recommande au maximum 2 verres par jour et pas tous les jours ; aucun pendant la grossesse.

### Les déséquilibres
- **Excès** de glucides simples, de lipides et de sel : surpoids, **obésité**, **diabète de type 2**, **maladies cardiovasculaires**, hypertension.
- **Carences** : en **vitamine C** (scorbut), en **fer** (anémie, fatigue), en vitamine D et calcium (fragilité des os), en iode.
- Certaines pratiques (végétarisme, végétalisme) demandent une attention particulière : le végétalien doit prendre de la vitamine B12.

### La régulation de la glycémie
- La **glycémie** est le taux de glucose dans le sang ; elle reste proche de **1 g par litre** à jeun.
- Après un repas, la glycémie monte : le **pancréas** libère l'**insuline**, une hormone **hypoglycémiante**, qui fait entrer le glucose dans les cellules et le fait stocker sous forme de **glycogène** dans le foie et les muscles.
- À jeun ou pendant un effort, la glycémie baisse : le pancréas libère le **glucagon**, hormone **hyperglycémiante**, qui fait libérer le glucose stocké par le foie.
- Insuline et glucagon ont des effets **antagonistes** (opposés).

### Les diabètes
- **Diabète de type 1** : le pancréas ne produit plus d'insuline (destruction des cellules qui la fabriquent par le système immunitaire). Il apparaît souvent jeune ; traitement : injections d'insuline.
- **Diabète de type 2** : l'insuline agit mal (les cellules y deviennent résistantes). Favorisé par le surpoids, la sédentarité et l'hérédité ; on agit d'abord par l'alimentation et l'activité physique.
- Symptômes : soif intense, urines abondantes, fatigue, amaigrissement (type 1).

### Allergies et intolérances
- **Allergie** : hypersensibilité du **système immunitaire** à une substance (l'allergène, souvent une protéine). Elle peut être grave (choc anaphylactique) ; seul traitement : l'éviction.
- **Maladie cœliaque** : maladie chronique **auto-immune** déclenchée par le **gluten**.
- **Intolérance au lactose** : inconfort digestif dû au manque de l'enzyme **lactase**, sans intervention du système immunitaire.

### À retenir pour le bac
- Repères du PNNS : 5 fruits et légumes, féculents complets, légumineuses, 2 produits laitiers, poisson deux fois par semaine, moins de sucre, sel, alcool.
- Excès : obésité, diabète de type 2, maladies cardiovasculaires ; carences : scorbut, anémie.
- Insuline hypoglycémiante, glucagon hyperglycémiante, produits par le pancréas.
- Type 1 : pas d'insuline ; type 2 : insuline qui agit mal.
- Allergie : système immunitaire ; intolérance au lactose : manque de lactase.`,
      cartes: [
        { q: "Qu'est-ce qu'une alimentation équilibrée ?", r: "Une alimentation variée qui couvre les besoins sans excès, en suivant les repères de consommation." },
        { q: "Quels sont les principaux repères du PNNS ?", r: "Au moins 5 fruits et légumes par jour, féculents complets, légumineuses deux fois par semaine, 2 produits laitiers par jour, poisson deux fois par semaine." },
        { q: "Que recommande le PNNS pour l'alcool ?", r: "Au maximum 2 verres par jour et pas tous les jours ; aucun pendant la grossesse." },
        { q: "Quelles maladies sont favorisées par les excès alimentaires ?", r: "Obésité, diabète de type 2, maladies cardiovasculaires, hypertension." },
        { q: "Quelle carence provoque le scorbut ?", r: "La carence en vitamine C." },
        { q: "Quelle carence provoque une anémie ?", r: "Souvent la carence en fer." },
        { q: "Qu'est-ce que la glycémie ?", r: "Le taux de glucose dans le sang, proche de 1 g par litre à jeun." },
        { q: "Quel est le rôle de l'insuline ?", r: "Faire baisser la glycémie en faisant entrer le glucose dans les cellules et en le stockant en glycogène." },
        { q: "Quel est le rôle du glucagon ?", r: "Faire monter la glycémie en faisant libérer le glucose stocké par le foie." },
        { q: "Quel organe produit l'insuline et le glucagon ?", r: "Le pancréas." },
        { q: "Diabète de type 1 ou de type 2 ?", r: "Type 1 : le pancréas ne produit plus d'insuline. Type 2 : l'insuline agit mal, souvent avec surpoids et sédentarité." },
        { q: "Qu'est-ce qu'une allergie alimentaire ?", r: "Une hypersensibilité du système immunitaire à une substance de l'aliment, l'allergène." },
        { q: "Qu'est-ce que l'intolérance au lactose ?", r: "Un inconfort digestif dû au manque de lactase, sans intervention du système immunitaire." },
      ],
      quiz: [
        { q: "L'insuline est une hormone :", choix: ["hyperglycémiante", "hypoglycémiante", "digestive", "produite par le foie"], bonne: 1, expl: "Elle fait baisser la glycémie ; elle est produite par le pancréas.", niv: 1 },
        { q: "La carence en vitamine C provoque :", choix: ["l'obésité", "le diabète", "l'anémie", "le scorbut"], bonne: 3, expl: "Le scorbut touchait les marins privés de fruits frais.", niv: 1 },
        { q: "La glycémie normale à jeun est d'environ :", choix: ["0,1 g/L", "10 g/L", "1 g/L", "100 g/L"], bonne: 2, expl: "Elle reste proche de 1 g par litre de sang.", niv: 1 },
        { q: "La maladie cœliaque est déclenchée par :", choix: ["le lactose", "l'alcool", "le sucre", "le gluten"], bonne: 3, expl: "C'est une maladie auto-immune déclenchée par le gluten.", niv: 1 },
        { q: "Après un repas riche en féculents, que se passe-t-il ?", choix: ["Le foie libère aussitôt ses réserves de glycogène dans le sang", "La glycémie baisse et le pancréas libère du glucagon", "La glycémie monte et le pancréas libère de l'insuline", "La glycémie ne change pas"], bonne: 2, expl: "L'insuline ramène la glycémie vers sa valeur normale.", niv: 2 },
        { q: "Pendant une longue course à jeun, la glycémie se maintient grâce :", choix: ["au glucagon", "à l'insuline", "aux lipides du repas", "à l'estomac"], bonne: 0, expl: "Le glucagon mobilise les réserves de glycogène du foie.", niv: 2 },
        { q: "Un adolescent mince a très soif, urine beaucoup et maigrit. On soupçonne :", choix: ["un diabète de type 1", "une intolérance au lactose", "un scorbut", "une allergie au gluten"], bonne: 0, expl: "Le pancréas ne produit plus d'insuline : le glucose s'accumule dans le sang.", niv: 2 },
        { q: "Pourquoi l'intolérance au lactose n'est-elle pas une allergie ?", choix: ["Elle est due au gluten", "Elle est plus grave et peut provoquer un choc", "Elle touche les os", "Elle ne fait pas intervenir l'immunité"], bonne: 3, expl: "C'est un manque d'enzyme, la lactase, qui gêne la digestion.", niv: 2 },
        { q: "Quel repère du PNNS n'est **pas** correct ?", choix: ["Au moins 5 fruits et légumes par jour", "De l'alcool à chaque repas pour la santé", "Des légumineuses au moins deux fois par semaine", "Du poisson deux fois par semaine"], bonne: 1, expl: "Le PNNS conseille au maximum 2 verres et pas tous les jours.", niv: 2 },
        { q: "Pourquoi le diabète de type 2 se prévient-il par l'alimentation et le sport ?", choix: ["Il est causé par un manque de vitamine C dans les repas", "Il est dû à un virus", "Il est favorisé par le surpoids et la sédentarité", "Il disparaît avec l'âge"], bonne: 2, expl: "Réduire le surpoids et bouger améliore l'action de l'insuline.", niv: 3 },
        { q: "Insuline et glucagon ont des effets antagonistes. Cela signifie :", choix: ["qu'ils ont des effets opposés sur la glycémie", "qu'ils agissent sur des organes différents sans lien", "qu'ils sont produits par deux organes différents", "qu'ils se détruisent dans le sang"], bonne: 0, expl: "L'une fait baisser la glycémie, l'autre la fait monter.", niv: 3 },
        { q: "Un menu de cantine sert frites, nuggets et soda trois fois par semaine. Quel risque à long terme ?", choix: ["Une carence en lipides", "Un excès de lipides et de sucres", "Une carence en sucre", "Un excès de fibres et de vitamines végétales"], bonne: 1, expl: "Ces aliments sont riches en graisses et en sucres simples, pauvres en fibres.", niv: 3 },
      ],
    },
    {
      chapitre: 'stav-gra-3',
      fiche: `## La digestion : de l'aliment aux nutriments

### L'appareil digestif
- Le **tube digestif** : bouche, œsophage, estomac, intestin grêle, gros intestin (côlon), rectum, anus.
- Les **glandes annexes** : glandes salivaires, foie (qui produit la **bile**, stockée dans la vésicule biliaire), pancréas (qui produit le suc pancréatique).

### Digestion mécanique et chimique
- **Digestion mécanique** : les dents broient, l'estomac brasse, les muscles du tube digestif font avancer les aliments.
- **Digestion chimique** : des **enzymes** contenues dans les sucs digestifs **simplifient** les grosses molécules en **nutriments** assez petits pour passer dans le sang.
- **Bouche** : l'amylase salivaire commence à couper l'amidon.
- **Estomac** : milieu très **acide** ; la **pepsine** commence à couper les protéines.
- **Intestin grêle** : le suc pancréatique et le suc intestinal terminent la digestion des glucides, des protéines et des lipides.
- La **bile** n'est pas une enzyme : elle **émulsionne** les lipides en fines gouttelettes, ce qui facilite l'action de la lipase.

### Les enzymes
- Ce sont des **protéines** qui accélèrent une réaction précise.
- Elles sont **spécifiques** : chacune agit sur un seul type de molécule (son **substrat**). L'amylase coupe l'amidon, pas les protéines.
- Elles ont des **conditions d'activité** : une température optimale (vers 37 °C chez l'humain) et un pH optimal (la pepsine agit en milieu acide, l'amylase en milieu neutre).
- Elles sont **complémentaires** : plusieurs enzymes se succèdent pour simplifier complètement une molécule.
- Résultats : amidon → **glucose** ; protéines → **acides aminés** ; lipides → **acides gras et glycérol**.

### Le microbiote intestinal
- C'est l'ensemble des micro-organismes (surtout des bactéries) qui vivent dans l'intestin, en particulier le côlon.
- Il dégrade une partie des **fibres**, produit certaines vitamines, protège contre des bactéries pathogènes et participe à l'immunité.

### L'absorption intestinale
- Les nutriments passent dans le sang et la lymphe au niveau de l'**intestin grêle**.
- Sa structure est adaptée à sa fonction d'**échange** : une très grande **surface** (environ 7 m de long, des plis, des **villosités** et des microvillosités), une paroi très **fine** et une riche **vascularisation** (beaucoup de vaisseaux sanguins).
- Les nutriments sont ensuite **transportés** par le sang, **utilisés** par les cellules (énergie, construction) ou **stockés** (glycogène dans le foie et les muscles, graisses dans le tissu adipeux).

### À retenir pour le bac
- Digestion mécanique (broyage, brassage) et chimique (enzymes).
- Enzymes : protéines spécifiques de leur substrat, avec une température et un pH optimaux.
- Amidon → glucose ; protéines → acides aminés ; lipides → acides gras et glycérol.
- La bile émulsionne les graisses ; le microbiote dégrade des fibres et protège.
- L'intestin grêle absorbe : grande surface, paroi fine, riche vascularisation.`,
      cartes: [
        { q: "Quels organes forment le tube digestif ?", r: "Bouche, œsophage, estomac, intestin grêle, gros intestin, rectum et anus." },
        { q: "Quelles sont les glandes annexes de la digestion ?", r: "Les glandes salivaires, le foie et le pancréas." },
        { q: "Digestion mécanique ou chimique ?", r: "Mécanique : broyer et brasser. Chimique : simplifier les molécules grâce aux enzymes." },
        { q: "Qu'est-ce qu'une enzyme ?", r: "Une protéine qui accélère une réaction précise, sur un substrat précis." },
        { q: "Que signifie la spécificité d'une enzyme ?", r: "Elle n'agit que sur un type de molécule, son substrat." },
        { q: "Quelles conditions influencent l'activité d'une enzyme ?", r: "La température (optimum vers 37 °C chez l'humain) et le pH." },
        { q: "Où commence la digestion de l'amidon ?", r: "Dans la bouche, grâce à l'amylase salivaire." },
        { q: "Où commence la digestion des protéines ?", r: "Dans l'estomac, grâce à la pepsine, en milieu acide." },
        { q: "Quel est le rôle de la bile ?", r: "Émulsionner les lipides en fines gouttelettes pour faciliter l'action de la lipase." },
        { q: "En quoi sont transformés l'amidon, les protéines et les lipides ?", r: "En glucose, en acides aminés, en acides gras et glycérol." },
        { q: "Qu'est-ce que le microbiote intestinal ?", r: "L'ensemble des micro-organismes de l'intestin, qui dégradent des fibres, produisent des vitamines et protègent." },
        { q: "Où se fait l'absorption des nutriments ?", r: "Dans l'intestin grêle." },
        { q: "Pourquoi l'intestin grêle est-il adapté à l'absorption ?", r: "Grande surface grâce aux villosités, paroi très fine, riche vascularisation." },
      ],
      quiz: [
        { q: "L'absorption des nutriments se fait surtout dans :", choix: ["l'estomac", "le rectum", "l'œsophage et le pharynx", "l'intestin grêle"], bonne: 3, expl: "Ses villosités offrent une très grande surface d'échange.", niv: 1 },
        { q: "La bile est produite par :", choix: ["le foie", "le pancréas", "l'estomac", "les glandes salivaires"], bonne: 0, expl: "Elle est stockée dans la vésicule biliaire.", niv: 1 },
        { q: "La digestion des protéines donne :", choix: ["du glucose", "des acides gras et du glycérol", "des acides aminés", "du glycérol"], bonne: 2, expl: "Les enzymes coupent les protéines en acides aminés.", niv: 1 },
        { q: "Les enzymes digestives sont des :", choix: ["glucides", "protéines", "lipides", "sels minéraux"], bonne: 1, expl: "Ce sont des protéines qui accélèrent une réaction.", niv: 1 },
        { q: "On met de l'amylase avec de l'amidon à 37 °C, puis à 90 °C. Que devrait-on observer ?", choix: ["L'amidon devient des protéines", "L'amidon est digéré plus vite à 90 °C qu'à 37 °C", "L'amidon est digéré de la même façon", "L'amidon est digéré à 37 °C mais pas à 90 °C"], bonne: 3, expl: "La forte chaleur détruit l'enzyme, qui est une protéine.", niv: 2 },
        { q: "L'amylase n'agit pas sur les protéines. Cela montre :", choix: ["sa température optimale", "sa spécificité", "son origine animale", "son rôle d'émulsion"], bonne: 1, expl: "Chaque enzyme agit sur un seul substrat.", niv: 2 },
        { q: "Pourquoi la pepsine agit-elle dans l'estomac ?", choix: ["Elle a besoin de bile", "L'estomac est l'organe le plus froid du tube digestif", "Son pH optimal est acide, comme l'estomac", "Elle digère l'amidon"], bonne: 2, expl: "Chaque enzyme a un pH optimal d'activité.", niv: 2 },
        { q: "La bile facilite la digestion des lipides parce qu'elle :", choix: ["les émulsionne en fines gouttelettes", "contient la lipase", "les transforme en glucose", "les absorbe à la place de l'intestin"], bonne: 0, expl: "Elle augmente la surface d'action des enzymes, sans être elle-même une enzyme.", niv: 2 },
        { q: "Quelle caractéristique n'aide **pas** l'intestin grêle à absorber ?", choix: ["Ses villosités", "Sa paroi très fine", "Sa riche vascularisation", "Son milieu très acide"], bonne: 3, expl: "C'est l'estomac qui est très acide ; l'intestin n'absorbe pas grâce à l'acidité.", niv: 2 },
        { q: "Une maladie détruit une partie des villosités. Quelle conséquence probable ?", choix: ["Une moins bonne absorption des nutriments", "Une digestion plus rapide", "Une production de bile plus forte par le foie et la vésicule", "Une meilleure absorption du fer"], bonne: 0, expl: "La surface d'échange diminue : c'est ce qui arrive dans la maladie cœliaque.", niv: 3 },
        { q: "Quel rôle le microbiote intestinal joue-t-il ?", choix: ["Il produit la bile", "Il dégrade des fibres et protège l'intestin", "Il fabrique l'insuline", "Il digère les protéines dans l'estomac grâce à la pepsine"], bonne: 1, expl: "Il participe à la digestion des fibres et à la défense de l'organisme.", niv: 3 },
        { q: "Après absorption, que devient l'excès de glucose ?", choix: ["Il devient de l'amidon", "Il est rejeté par les poumons sous forme de vapeur d'eau", "Il est stocké en glycogène dans le foie et les muscles", "Il est transformé en vitamines"], bonne: 2, expl: "L'insuline favorise ce stockage.", niv: 3 },
      ],
    },
    {
      chapitre: 'stav-gra-4',
      fiche: `## Produits agricoles, modes de production et qualité

### D'une matière première à des produits variés
- Une même matière première agricole donne une **diversité de produits** : le lait donne du lait de consommation, des yaourts, du beurre, de la crème, des fromages ; le blé donne de la farine, du pain, des pâtes, des biscuits.
- Les produits sont plus ou moins **transformés** : produits bruts, produits transformés, produits **ultra-transformés** (avec additifs et ingrédients industriels).
- L'offre est **segmentée** : produits d'entrée de gamme, produits de terroir, produits biologiques, produits allégés…

### La qualité, une notion à plusieurs facettes
- La **qualité** est une construction sociale : elle dépend des exigences des acheteurs (l'aval : transformateurs, distributeurs, consommateurs).
- Ses facettes : qualité **sanitaire** (sans danger), **nutritionnelle**, **organoleptique** (goût, texture, aspect), **technologique** (aptitude à la transformation : teneur en protéines d'un blé pour la panification, taux de matière grasse et de protéines du lait pour le fromage), **d'usage** (pratique, conservation), **environnementale** et **éthique** (bien-être animal, rémunération des producteurs).

### Les signes officiels de qualité
- **AOP / AOC** (appellation d'origine protégée ou contrôlée) : lien fort avec un **terroir** ; toutes les étapes se font dans la zone, selon un cahier des charges (par exemple le champagne, le comté).
- **IGP** (indication géographique protégée) : au moins une étape dans la zone géographique.
- **Label rouge** : qualité supérieure, notamment gustative.
- **Agriculture biologique** : pas de produits chimiques de synthèse ni d'OGM, bien-être animal renforcé.
- **STG** (spécialité traditionnelle garantie) : recette traditionnelle.
- La **certification environnementale** (haute valeur environnementale) porte sur la biodiversité, les produits phytosanitaires, la fertilisation et l'eau.
- Le **cahier des charges** fixe les règles de production (races ou variétés, alimentation, rendement maximal, zone, transformation) ; il est contrôlé par un organisme indépendant.

### Modes de production, rendement et qualité
- Le **rendement** est la quantité produite par hectare (en quintaux par hectare pour les céréales) ou par animal (litres de lait par vache et par an).
- Les **leviers** de l'agriculteur : choix de la variété ou de la race, date de semis, fertilisation, irrigation, protection des cultures, alimentation des animaux, durée d'élevage, densité de plantation.
- Un même levier peut jouer différemment sur le **rendement** et sur la **qualité** : un rendement limité (cahier des charges d'AOC) donne souvent des raisins plus concentrés ; une fertilisation azotée augmente le rendement et la teneur en protéines du blé mais peut polluer l'eau.
- Comparer deux modes de production (conventionnel, biologique, AOC, hors-sol) permet de montrer leur effet sur la qualité, le rendement et l'environnement.

### À retenir pour le bac
- Une matière première, une diversité de produits et de qualités.
- Facettes de la qualité : sanitaire, nutritionnelle, organoleptique, technologique, d'usage, environnementale.
- AOP-AOC : terroir et toutes les étapes dans la zone ; IGP : une étape ; label rouge, bio, cahier des charges.
- Leviers techniques : effets sur le rendement et sur la qualité, parfois opposés.`,
      cartes: [
        { q: "Citez quatre produits issus du lait.", r: "Lait de consommation, yaourt, beurre, crème, fromages." },
        { q: "Qu'est-ce qu'un produit ultra-transformé ?", r: "Un produit très transformé, contenant des additifs et des ingrédients d'origine industrielle." },
        { q: "Pourquoi dit-on que la qualité est une construction sociale ?", r: "Parce qu'elle dépend des exigences des acheteurs et des consommateurs." },
        { q: "Quelles sont les facettes de la qualité ?", r: "Sanitaire, nutritionnelle, organoleptique, technologique, d'usage, environnementale et éthique." },
        { q: "Qu'est-ce que la qualité technologique ?", r: "L'aptitude d'un produit à être transformé, par exemple la teneur en protéines d'un blé pour faire du pain." },
        { q: "Que garantit une AOP ?", r: "Un lien fort avec un terroir : toutes les étapes se font dans la zone, selon un cahier des charges." },
        { q: "AOP ou IGP ?", r: "AOP : toutes les étapes dans la zone. IGP : au moins une étape dans la zone." },
        { q: "Que garantit le label rouge ?", r: "Une qualité supérieure, notamment gustative." },
        { q: "Que garantit l'agriculture biologique ?", r: "Pas de produits chimiques de synthèse ni d'OGM, et un bien-être animal renforcé." },
        { q: "Qu'est-ce qu'un cahier des charges ?", r: "Le document qui fixe les règles de production d'un signe de qualité, contrôlé par un organisme indépendant." },
        { q: "Qu'est-ce que le rendement ?", r: "La quantité produite par hectare ou par animal." },
        { q: "Citez quatre leviers de l'agriculteur.", r: "Variété ou race, fertilisation, irrigation, protection des cultures, alimentation des animaux, densité de plantation." },
        { q: "Pourquoi une AOC limite-t-elle le rendement ?", r: "Pour garder une qualité élevée : un rendement limité donne des produits plus concentrés en arômes et en sucres." },
      ],
      quiz: [
        { q: "Un fromage dont toutes les étapes se font dans sa zone d'origine, selon un cahier des charges, porte :", choix: ["une marque de distributeur", "une AOP", "une simple étiquette", "un logo de recyclage"], bonne: 1, expl: "L'AOP garantit le lien au terroir pour toutes les étapes.", niv: 1 },
        { q: "Le rendement d'une parcelle de blé s'exprime en :", choix: ["litres par vache", "degrés Celsius par jour de pousse", "kilocalories", "quintaux par hectare"], bonne: 3, expl: "Un quintal vaut 100 kg.", niv: 1 },
        { q: "Le goût et la texture d'un produit relèvent de sa qualité :", choix: ["sanitaire", "technologique", "organoleptique", "environnementale"], bonne: 2, expl: "La qualité organoleptique est perçue par les sens.", niv: 1 },
        { q: "L'agriculture biologique interdit :", choix: ["les engrais chimiques de synthèse", "le travail mécanique du sol avec une charrue", "le pâturage", "les rotations de cultures"], bonne: 0, expl: "Elle n'utilise pas de produits chimiques de synthèse ni d'OGM.", niv: 1 },
        { q: "Un meunier exige un blé riche en protéines pour faire du pain. Il s'agit de la qualité :", choix: ["d'usage", "organoleptique", "technologique", "éthique"], bonne: 2, expl: "La teneur en protéines conditionne l'aptitude à la panification.", niv: 2 },
        { q: "Le cahier des charges de l'AOC Champagne interdit l'irrigation et limite le rendement. Le but principal est :", choix: ["d'augmenter la production", "de garder une qualité typique du terroir", "de baisser les prix", "de faciliter la mécanisation des vendanges"], bonne: 1, expl: "La limitation du rendement favorise la concentration des raisins.", niv: 2 },
        { q: "Quelle différence entre une IGP et une AOP ?", choix: ["L'IGP est une marque privée choisie librement par chaque entreprise", "L'IGP : au moins une étape dans la zone ; l'AOP : toutes", "L'AOP concerne le vin mais pas les fromages", "Elles ont le même cahier des charges"], bonne: 1, expl: "Le lien au territoire est plus fort pour l'AOP.", niv: 2 },
        { q: "Un agriculteur augmente fortement l'apport d'azote sur son blé. Quel effet négatif possible ?", choix: ["Une pollution de l'eau par les nitrates", "Une baisse du rendement", "La disparition des protéines du grain de blé", "Un gel des racines"], bonne: 0, expl: "L'azote non utilisé par la plante est lessivé vers les nappes.", niv: 2 },
        { q: "Quel produit n'est **pas** issu du blé ?", choix: ["Les pâtes", "La farine", "Le beurre", "Le pain"], bonne: 2, expl: "Le beurre est issu du lait.", niv: 2 },
        { q: "Pourquoi un même lait peut-il avoir des qualités différentes ?", choix: ["Elles dépendent du prix de vente fixé par la laiterie chaque mois", "Le lait a une composition fixe", "Seule la couleur du seau compte", "Elles dépendent de la race et de l'alimentation"], bonne: 3, expl: "Les pratiques d'élevage modifient les taux de matière grasse et de protéines.", niv: 3 },
        { q: "Un éleveur passe en label rouge pour ses poulets : durée d'élevage plus longue et accès à un parcours. Quel effet sur la production ?", choix: ["Moins de poulets par an mais une qualité gustative supérieure", "Plus de poulets par an et une qualité gustative identique à avant", "Une qualité sanitaire plus faible", "Pas de changement visible"], bonne: 0, expl: "Le levier « durée d'élevage » joue sur la qualité au détriment du volume.", niv: 3 },
        { q: "Pourquoi comparer deux modes de production pour un même produit ?", choix: ["Parce que la loi l'impose", "Pour choisir le mode de production le moins cher dans les deux cas", "Pour supprimer les signes de qualité", "Pour montrer leurs effets sur la qualité et le rendement"], bonne: 3, expl: "C'est la démarche demandée par le programme.", niv: 3 },
      ],
    },
    {
      chapitre: 'stav-gra-5',
      fiche: `## Les dangers sanitaires et leur maîtrise lors de la production

### Danger et risque
- Un **danger** est un agent qui peut nuire à la santé. Le **risque** est la probabilité que ce danger cause un effet, compte tenu de l'exposition.
- On distingue la **toxicité aiguë** (effets rapides après une forte dose) et la **toxicité chronique** (effets après de petites doses répétées longtemps).
- La **DJA** (dose journalière admissible) est la quantité d'une substance qu'on peut absorber chaque jour de sa vie sans risque, en mg par kg de poids corporel et par jour. Elle permet de passer du danger au risque.

### Les trois types de dangers
- **Physiques** : corps étrangers (verre, métal, os, cailloux) ; risques d'étouffement, de blessure.
- **Chimiques** : toxines, **résidus de pesticides** et leurs métabolites, résidus de produits de nettoyage, **nitrates**, **métaux lourds** (plomb, mercure, cadmium) ; effets : intoxication, saturnisme (plomb), atteintes nerveuses, cancers.
- **Biologiques** : **bactéries** pathogènes (salmonelles, Listeria, *Clostridium botulinum* du botulisme), **mycètes** et leurs **mycotoxines**, **parasites** (ténia, toxoplasme), **virus**, **prions** (encéphalopathie spongiforme bovine, maladie de Creutzfeldt-Jakob), biotoxines marines.
- Une **toxi-infection alimentaire** est due à la consommation d'un aliment contaminé par des micro-organismes ou leurs toxines.

### L'origine des contaminants à la production
- **Molécules produites par la plante** elle-même (par exemple l'acide érucique de certains colzas anciens, la solanine des pommes de terre verdies).
- **Molécules produites par un être vivant au contact de la plante** : les **mycotoxines** des moisissures sur les grains mal stockés.
- **Molécules liées aux intrants** : substances actives des produits phytopharmaceutiques, adjuvants, médicaments vétérinaires (antibiotiques).
- **Contaminations microbiennes** : effluents, eau d'abreuvement, animaux malades.
- La contamination peut avoir lieu **au champ**, **en élevage**, pendant la **récolte**, le **stockage** ou la **transformation**.

### Les leviers des professionnels
- Respecter la **réglementation** (limites maximales de résidus, délais avant récolte, délais d'attente après un traitement vétérinaire).
- **Pratiques adaptées** : choix de semences saines et de variétés résistantes, **utilisation raisonnée** des produits phytopharmaceutiques et vétérinaires, rotation des cultures, gestion des **effluents**, désinfection du matériel et des bâtiments.
- **Prophylaxie** : mesures qui évitent l'apparition des maladies (vaccination, hygiène, quarantaine).
- **Biosécurité** animale et végétale : empêcher l'entrée et la diffusion des agents pathogènes dans l'exploitation (sas sanitaire, pédiluve, contrôle des visiteurs, isolement des plants malades).
- Plans nationaux : **Écophyto** (réduire l'usage des pesticides) et **Écoantibio** (réduire l'usage des antibiotiques en élevage, pour limiter les résistances).
- Respect des **cahiers des charges** et traçabilité.

### À retenir pour le bac
- Danger : agent qui peut nuire ; risque : probabilité qu'il nuise selon l'exposition.
- Toxicité aiguë et chronique ; DJA en mg/kg/jour.
- Dangers physiques, chimiques (pesticides, nitrates, métaux lourds), biologiques (bactéries, mycotoxines, parasites, virus, prions).
- Contamination au champ, en élevage, au stockage ou à la transformation.
- Leviers : réglementation, usage raisonné, prophylaxie, biosécurité, Écophyto, Écoantibio.`,
      cartes: [
        { q: "Danger ou risque ?", r: "Le danger est un agent qui peut nuire ; le risque est la probabilité qu'il nuise compte tenu de l'exposition." },
        { q: "Toxicité aiguë ou chronique ?", r: "Aiguë : effets rapides après une forte dose. Chronique : effets après de petites doses répétées longtemps." },
        { q: "Qu'est-ce que la DJA ?", r: "La dose journalière admissible : la quantité qu'on peut absorber chaque jour de sa vie sans risque, en mg/kg/jour." },
        { q: "Citez deux dangers physiques.", r: "Des morceaux de verre, de métal, d'os ou des cailloux dans un aliment." },
        { q: "Citez trois dangers chimiques.", r: "Résidus de pesticides, nitrates, métaux lourds (plomb, mercure), résidus de produits de nettoyage." },
        { q: "Citez quatre dangers biologiques.", r: "Bactéries pathogènes, mycotoxines des moisissures, parasites, virus et prions." },
        { q: "Qu'est-ce qu'une mycotoxine ?", r: "Une substance toxique produite par une moisissure, par exemple sur des grains mal stockés." },
        { q: "Qu'est-ce qu'une toxi-infection alimentaire ?", r: "Une maladie due à un aliment contaminé par des micro-organismes ou leurs toxines." },
        { q: "À quels moments un aliment peut-il être contaminé ?", r: "Au champ, en élevage, pendant la récolte, le stockage ou la transformation." },
        { q: "Qu'est-ce que la prophylaxie ?", r: "L'ensemble des mesures qui évitent l'apparition des maladies : vaccination, hygiène, quarantaine." },
        { q: "Qu'est-ce que la biosécurité ?", r: "Les mesures qui empêchent l'entrée et la diffusion des agents pathogènes dans une exploitation." },
        { q: "Quel est le but du plan Écophyto ?", r: "Réduire l'usage des produits phytopharmaceutiques." },
        { q: "Quel est le but du plan Écoantibio ?", r: "Réduire l'usage des antibiotiques en élevage pour limiter les résistances bactériennes." },
      ],
      quiz: [
        { q: "Un morceau de verre dans un pot de confiture est un danger :", choix: ["allergique", "chimique", "biologique", "physique"], bonne: 3, expl: "C'est un corps étranger.", niv: 1 },
        { q: "Les mycotoxines sont produites par :", choix: ["des moisissures", "des virus", "des insectes", "les plantes elles-mêmes"], bonne: 0, expl: "Ce sont des toxines de champignons microscopiques.", niv: 1 },
        { q: "La DJA s'exprime en :", choix: ["litres par jour", "mg par kg de poids corporel et par jour", "kcal par repas", "grammes de produit par hectare et par an"], bonne: 1, expl: "Elle est rapportée au poids de la personne.", niv: 1 },
        { q: "Le plan Écoantibio vise à réduire :", choix: ["l'usage des antibiotiques en élevage", "l'usage des pesticides", "la consommation d'eau", "le nombre d'exploitations d'élevage en France"], bonne: 0, expl: "Il limite le développement des bactéries résistantes.", niv: 1 },
        { q: "Du blé récolté humide est stocké sans séchage. Quel danger apparaît ?", choix: ["Des prions", "Des métaux lourds", "Des mycotoxines dues aux moisissures", "Des corps étrangers métalliques venus de la moissonneuse"], bonne: 2, expl: "L'humidité favorise le développement des moisissures.", niv: 2 },
        { q: "Un éleveur installe un sas sanitaire et un pédiluve à l'entrée de sa porcherie. C'est une mesure de :", choix: ["fertilisation", "biosécurité", "traçabilité commerciale", "sélection génétique"], bonne: 1, expl: "Elle empêche l'entrée des agents pathogènes.", niv: 2 },
        { q: "Après un traitement antibiotique, le lait d'une vache ne doit pas être livré pendant un délai d'attente. Pourquoi ?", choix: ["Pour que la vache se repose", "Pour éviter des résidus d'antibiotiques dans le lait", "Pour augmenter le taux de matière grasse du lait livré", "Pour que le lait refroidisse"], bonne: 1, expl: "Les résidus sont un danger chimique et favorisent les résistances.", niv: 2 },
        { q: "Une personne absorbe chaque jour de petites doses d'un pesticide pendant des années. On parle de :", choix: ["allergie alimentaire", "toxicité aiguë", "toxicité chronique", "intolérance"], bonne: 2, expl: "Ce sont des effets à long terme de faibles doses répétées.", niv: 2 },
        { q: "Quelle mesure ne réduit **pas** le risque sanitaire à la production ?", choix: ["Épandre des effluents juste avant la récolte de salades", "Respecter les délais avant récolte indiqués sur l'étiquette du produit", "Choisir des semences saines", "Désinfecter le matériel"], bonne: 0, expl: "Les effluents frais peuvent contaminer les légumes par des bactéries.", niv: 2 },
        { q: "Pourquoi distingue-t-on danger et risque ?", choix: ["Le danger se mesure en kcal", "Danger et risque sont deux mots qui veulent dire la même chose", "Le risque ne concerne que les dangers physiques", "Un danger ne nuit que si l'exposition est suffisante"], bonne: 3, expl: "Le risque dépend de la dose et de la durée d'exposition.", niv: 3 },
        { q: "La vaccination d'un troupeau est un exemple de :", choix: ["fertilisation", "traitement curatif", "prophylaxie", "traçabilité"], bonne: 2, expl: "On prévient la maladie avant qu'elle n'apparaisse.", niv: 3 },
        { q: "Pourquoi réduire les antibiotiques en élevage protège-t-il aussi la santé humaine ?", choix: ["Cela rend la viande plus tendre", "Cela augmente la teneur en vitamines et en protéines de la viande vendue", "Cela supprime les virus", "Cela limite les bactéries résistantes transmissibles à l'humain"], bonne: 3, expl: "C'est l'approche « une seule santé » : humains, animaux et environnement sont liés.", niv: 3 },
      ],
    },
    {
      chapitre: 'stav-gra-6',
      fiche: `## Maîtriser le risque lors de la transformation et de la conservation

### La méthode HACCP
- HACCP signifie analyse des dangers et points critiques pour leur maîtrise. C'est une **démarche** qui **identifie**, **évalue** et **maîtrise** les dangers significatifs pour la sécurité des aliments. Le détail de ses étapes n'est pas au programme.

### La méthode des 5 M
- Elle recherche l'**origine des dangers** lors de la fabrication d'un aliment :
- **Main-d'œuvre** : hygiène du personnel, mains, tenue, état de santé.
- **Méthode** (modes opératoires) : températures, durées, ordre des étapes, marche en avant.
- **Matière première** : qualité et état sanitaire des produits reçus.
- **Milieu** : locaux, air, eau, nuisibles.
- **Matériel** : ustensiles, machines, nettoyage et entretien.

### La croissance bactérienne
- Dans un milieu favorable, une population de bactéries suit une **courbe de croissance** en quatre phases : **latence** (adaptation, pas de multiplication), **croissance exponentielle** (doublement régulier de la population), **phase stationnaire** (autant de naissances que de morts, le milieu s'épuise), **déclin** (les bactéries meurent).
- Une bactérie peut se diviser toutes les 20 minutes dans de bonnes conditions : 1 bactérie peut en donner plusieurs millions en quelques heures.
- **Paramètres de la croissance** : la nourriture, l'**eau disponible** (activité de l'eau), la **température**, le **pH**, l'**oxygène** (certaines bactéries en ont besoin, d'autres non), la présence d'**agents chimiques**.

### Les opérations qui maîtrisent le risque biologique
- **Réduire l'activité de l'eau** : salage (jambon), sucrage (confiture), séchage (pâtes, fruits secs), concentration (lait concentré). Les bactéries ne trouvent plus d'eau disponible.
- **Abaisser le pH** (acidifier) : yaourt, cornichons au vinaigre, marinades, choucroute.
- **Agir sur la température** :
- la **réfrigération** (0 à 4 °C) et la **congélation** (−18 °C) **ralentissent ou bloquent** la multiplication, sans tuer toutes les bactéries ;
- la **pasteurisation** (chauffage modéré, autour de 70 à 85 °C) détruit les formes pathogènes ; le produit se garde au froid et quelques jours à semaines ;
- la **stérilisation** (plus de 100 °C, souvent vers 120 °C) détruit tous les micro-organismes, y compris les spores ; conserves et lait UHT se gardent à température ambiante.
- **Supprimer l'oxygène** : conditionnement **sous vide** ou sous atmosphère modifiée.
- **Ajouter des conservateurs** (agents chimiques autorisés, code E200).
- On combine souvent plusieurs moyens (un saucisson est salé, séché et acidifié).

### À retenir pour le bac
- HACCP : identifier, évaluer et maîtriser les dangers significatifs.
- 5 M : main-d'œuvre, méthode, matière première, milieu, matériel.
- Courbe : latence, croissance exponentielle, phase stationnaire, déclin.
- Paramètres : eau disponible, température, pH, oxygène, agents chimiques.
- Froid : ralentit ; pasteurisation : détruit les pathogènes ; stérilisation : détruit tout.`,
      cartes: [
        { q: "Que fait la méthode HACCP ?", r: "Elle identifie, évalue et maîtrise les dangers significatifs pour la sécurité des aliments." },
        { q: "Que sont les 5 M ?", r: "Main-d'œuvre, méthode, matière première, milieu et matériel : les origines possibles d'un danger." },
        { q: "Quelles sont les quatre phases de la croissance bactérienne ?", r: "Latence, croissance exponentielle, phase stationnaire et déclin." },
        { q: "Que se passe-t-il pendant la phase de latence ?", r: "Les bactéries s'adaptent au milieu sans se multiplier." },
        { q: "Que se passe-t-il pendant la phase exponentielle ?", r: "La population double à intervalle régulier : elle augmente très vite." },
        { q: "Quels paramètres influencent la croissance des bactéries ?", r: "L'eau disponible, la température, le pH, l'oxygène et les agents chimiques." },
        { q: "Comment le salage et le séchage conservent-ils un aliment ?", r: "Ils réduisent l'eau disponible pour les bactéries." },
        { q: "Comment l'acidification conserve-t-elle un aliment ?", r: "Elle abaisse le pH, ce qui freine la multiplication des bactéries." },
        { q: "Le froid tue-t-il les bactéries ?", r: "Non, il ralentit ou bloque leur multiplication ; elles peuvent reprendre à la décongélation." },
        { q: "Pasteurisation ou stérilisation ?", r: "Pasteurisation : chauffage modéré qui détruit les pathogènes. Stérilisation : plus de 100 °C, détruit tous les micro-organismes et les spores." },
        { q: "Pourquoi une conserve se garde-t-elle à température ambiante ?", r: "Parce qu'elle a été stérilisée dans un emballage fermé." },
        { q: "Comment agit le conditionnement sous vide ?", r: "Il supprime l'oxygène, nécessaire à beaucoup de micro-organismes." },
        { q: "Pourquoi combine-t-on plusieurs moyens de conservation ?", r: "Pour additionner leurs effets : un saucisson est salé, séché et acidifié." },
      ],
      quiz: [
        { q: "La congélation des aliments :", choix: ["remplace la cuisson pour les viandes et les poissons", "tue la plupart des bactéries", "augmente le pH", "bloque la multiplication des bactéries"], bonne: 3, expl: "Les bactéries survivent et peuvent reprendre à la décongélation.", niv: 1 },
        { q: "Le lait UHT se conserve à température ambiante parce qu'il est :", choix: ["stérilisé", "réfrigéré à 4 °C", "salé", "acidifié"], bonne: 0, expl: "La stérilisation détruit tous les micro-organismes.", niv: 1 },
        { q: "Les 5 M servent à :", choix: ["calculer un rendement", "rechercher l'origine des dangers", "classer les aliments en groupes", "mesurer la glycémie"], bonne: 1, expl: "Main-d'œuvre, méthode, matière première, milieu, matériel.", niv: 1 },
        { q: "Pendant la phase de latence, les bactéries :", choix: ["s'adaptent sans se multiplier", "meurent en grand nombre", "se multiplient très vite en doublant sans arrêt", "produisent de l'amidon"], bonne: 0, expl: "C'est la première phase de la courbe de croissance.", niv: 1 },
        { q: "Les confitures se conservent grâce :", choix: ["à la congélation", "à l'oxygène", "à la forte teneur en sucre", "à l'ajout d'eau pendant la cuisson des fruits"], bonne: 2, expl: "Le sucrage abaisse l'activité de l'eau.", niv: 2 },
        { q: "Les cornichons au vinaigre se conservent grâce :", choix: ["au sucre", "au pH acide", "à la stérilisation à 120 °C", "à l'absence de sel"], bonne: 1, expl: "L'acidité freine les bactéries.", niv: 2 },
        { q: "Une bactérie se divise toutes les 20 minutes. Combien de bactéries après 1 heure à partir d'une seule ?", choix: ["3", "6", "8", "9"], bonne: 2, expl: "Trois divisions : 1 → 2 → 4 → 8.", niv: 2 },
        { q: "Un cuisinier malade prépare des repas sans se laver les mains. Quel M est en cause ?", choix: ["La main-d'œuvre", "Le matériel", "Le milieu", "La matière première"], bonne: 0, expl: "L'hygiène et la santé du personnel relèvent de la main-d'œuvre.", niv: 2 },
        { q: "Quel procédé ne détruit **pas** les bactéries ?", choix: ["La stérilisation", "La pasteurisation", "La cuisson à cœur", "La réfrigération"], bonne: 3, expl: "La réfrigération ralentit seulement leur multiplication.", niv: 2 },
        { q: "Pourquoi un jambon cru est-il salé puis séché ?", choix: ["Pour augmenter sa teneur en eau", "Pour réduire l'eau disponible", "Pour supprimer le goût", "Pour le stériliser à 120 °C"], bonne: 1, expl: "Deux moyens qui agissent sur l'activité de l'eau.", niv: 3 },
        { q: "Un plat cuisiné est laissé 5 heures à 30 °C. Que montre la courbe de croissance ?", choix: ["Le plat devient stérile", "Les bactéries restent en latence tant que le plat n'est pas remué", "Elles meurent à cette température", "Les bactéries peuvent atteindre la phase exponentielle"], bonne: 3, expl: "30 °C est favorable : après la latence, la multiplication est rapide.", niv: 3 },
        { q: "Pourquoi un lait pasteurisé doit-il être gardé au froid ?", choix: ["Le froid augmente sa teneur en vitamines et en protéines après l'ouverture", "Il a été stérilisé", "La pasteurisation ne détruit pas tous les micro-organismes", "Le froid lui redonne son goût de lait cru"], bonne: 2, expl: "Il reste des micro-organismes non pathogènes ou des spores qu'il faut freiner.", niv: 3 },
      ],
    },
    {
      chapitre: 'stav-gra-7',
      fiche: `## Les mécanismes de défense de l'organisme

### Les barrières naturelles
- Elles limitent la pénétration des agents pathogènes :
- **Barrière physique** : la peau, les muqueuses et le **mucus** qui piège les microbes, les cils des voies respiratoires.
- **Barrière chimique** : l'**acidité** de l'estomac, les larmes et la salive qui contiennent des enzymes antibactériennes.
- **Barrière biologique** : les **microbiotes** (de la peau, de l'intestin), qui occupent la place et gênent les microbes pathogènes.

### La réponse immunitaire innée
- Elle est **immédiate** et **non spécifique** : elle agit de la même façon contre tous les agents.
- La **réaction inflammatoire** en est la manifestation : **rougeur**, **chaleur**, **gonflement** et **douleur** à l'endroit de l'infection.
- La **phagocytose** : des cellules (phagocytes, comme les macrophages) **englobent** et **digèrent** les microbes.

### La réponse immunitaire adaptative
- Elle est **plus lente** (plusieurs jours la première fois) et **spécifique** d'un agent précis (un **antigène**).
- **Lymphocytes B** : ils **reconnaissent** l'antigène, se **multiplient** (amplification) et se transforment en cellules qui produisent des **anticorps**.
- Les **anticorps** se fixent sur l'antigène et forment un **complexe immun**, qui neutralise l'agent et facilite sa destruction par **phagocytose**.
- **Lymphocytes T8** (cytotoxiques) : ils reconnaissent les **cellules infectées** (par un virus, par exemple) et les **détruisent** (lyse).
- La phagocytose fait le lien entre les deux réponses : elle intervient dans la réponse innée et élimine les complexes immuns.

### La mémoire immunitaire et la vaccination
- Après une première rencontre, il reste des **lymphocytes mémoire**. Lors d'un second contact avec le même antigène, la réponse est **plus rapide**, **plus forte** et **plus durable**.
- La **vaccination** utilise ce principe : on introduit un agent rendu inoffensif (tué, atténué ou une partie seulement) pour créer une mémoire sans tomber malade.
- Elle est utilisée chez l'humain et chez l'animal d'élevage (par exemple contre la fièvre catarrhale ovine). Une forte couverture vaccinale protège aussi les individus non vaccinés.

### À retenir pour le bac
- Barrières : physiques (peau, mucus), chimiques (acidité), biologiques (microbiotes).
- Réponse innée : immédiate, non spécifique ; inflammation et phagocytose.
- Réponse adaptative : spécifique ; lymphocytes B, anticorps, complexe immun ; lymphocytes T8 qui détruisent les cellules infectées.
- Mémoire immunitaire : seconde réponse plus rapide et plus forte ; principe de la vaccination.`,
      cartes: [
        { q: "Quelles sont les trois barrières naturelles ?", r: "Physique (peau, mucus), chimique (acidité de l'estomac, enzymes) et biologique (microbiotes)." },
        { q: "Comment le microbiote protège-t-il l'organisme ?", r: "Il occupe la place et gêne l'installation des microbes pathogènes." },
        { q: "Quelles sont les caractéristiques de la réponse innée ?", r: "Elle est immédiate et non spécifique." },
        { q: "Quels sont les signes de la réaction inflammatoire ?", r: "Rougeur, chaleur, gonflement et douleur." },
        { q: "Qu'est-ce que la phagocytose ?", r: "L'englobement et la digestion d'un microbe par une cellule, un phagocyte." },
        { q: "Quelles sont les caractéristiques de la réponse adaptative ?", r: "Elle est plus lente la première fois et spécifique d'un antigène." },
        { q: "Qu'est-ce qu'un antigène ?", r: "Une molécule reconnue comme étrangère par le système immunitaire." },
        { q: "Quel est le rôle des lymphocytes B ?", r: "Reconnaître l'antigène, se multiplier et produire des anticorps." },
        { q: "Qu'est-ce qu'un complexe immun ?", r: "L'association d'un anticorps et de son antigène, qui neutralise l'agent et facilite sa phagocytose." },
        { q: "Quel est le rôle des lymphocytes T8 ?", r: "Reconnaître et détruire les cellules infectées." },
        { q: "Qu'est-ce que la mémoire immunitaire ?", r: "La présence de lymphocytes mémoire qui rendent la seconde réponse plus rapide et plus forte." },
        { q: "Sur quel principe repose la vaccination ?", r: "Introduire un agent rendu inoffensif pour créer une mémoire immunitaire sans tomber malade." },
      ],
      quiz: [
        { q: "L'acidité de l'estomac est une barrière :", choix: ["physique", "chimique", "biologique", "adaptative"], bonne: 1, expl: "Elle détruit une partie des microbes avalés.", niv: 1 },
        { q: "Les anticorps sont produits à partir :", choix: ["des lymphocytes B", "des lymphocytes T8", "des globules rouges", "des cellules de l'estomac"], bonne: 0, expl: "Les lymphocytes B se transforment en cellules productrices d'anticorps.", niv: 1 },
        { q: "La phagocytose consiste à :", choix: ["englober et digérer un microbe", "produire des anticorps contre un antigène", "fabriquer du mucus", "acidifier l'estomac"], bonne: 0, expl: "Elle est réalisée par les phagocytes.", niv: 1 },
        { q: "La réponse innée est :", choix: ["réservée aux virus", "lente et spécifique", "produite par la vaccination", "immédiate et non spécifique"], bonne: 3, expl: "Elle agit tout de suite, de la même façon contre tous les agents.", niv: 1 },
        { q: "Une coupure au doigt devient rouge, chaude et gonflée. C'est :", choix: ["une réponse mémoire", "une allergie alimentaire de la peau", "une vaccination", "une réaction inflammatoire"], bonne: 3, expl: "Ce sont les signes de l'inflammation, réponse innée.", niv: 2 },
        { q: "Les lymphocytes T8 détruisent :", choix: ["les globules rouges sains du sang circulant", "les anticorps", "les cellules infectées par un virus", "les aliments"], bonne: 2, expl: "Ils reconnaissent et lysent les cellules infectées.", niv: 2 },
        { q: "Après un vaccin, une personne rencontre le vrai microbe. Sa réponse est :", choix: ["plus lente", "identique à un premier contact", "plus rapide et plus forte", "inexistante"], bonne: 2, expl: "Les lymphocytes mémoire réagissent vite.", niv: 2 },
        { q: "Quel élément ne fait **pas** partie de la réponse adaptative ?", choix: ["Les lymphocytes B", "Le mucus", "Le complexe immun", "Les lymphocytes T8"], bonne: 1, expl: "Le mucus est une barrière physique naturelle.", niv: 2 },
        { q: "Pourquoi un vaccin contient-il un agent tué ou atténué ?", choix: ["Pour détruire le microbiote", "Pour rendre la personne malade quelques jours", "Pour remplacer les anticorps que le corps ne sait pas produire", "Pour créer une mémoire sans provoquer la maladie"], bonne: 3, expl: "L'antigène est reconnu sans danger pour l'organisme.", niv: 2 },
        { q: "Pourquoi la réponse adaptative est-elle lente la première fois ?", choix: ["Le corps attend la fièvre", "Les lymphocytes spécifiques doivent se multiplier", "Les anticorps doivent d'abord venir de l'alimentation du malade", "Le microbe se cache dans l'estomac"], bonne: 1, expl: "L'amplification des lymphocytes prend plusieurs jours.", niv: 3 },
        { q: "Un éleveur vaccine tout son troupeau contre une maladie. Quel intérêt collectif ?", choix: ["La maladie circule moins dans le troupeau", "Les animaux produisent plus de lait immédiatement", "Les antibiotiques deviennent obligatoires", "Le troupeau n'a plus besoin de biosécurité"], bonne: 0, expl: "Une forte couverture vaccinale limite la transmission.", niv: 3 },
        { q: "Quel est le rôle du complexe immun ?", choix: ["Produire de l'insuline", "Fabriquer des lymphocytes", "Neutraliser l'antigène", "Digérer les protéines du repas"], bonne: 2, expl: "L'anticorps fixé sur l'antigène signale l'élément à détruire.", niv: 3 },
      ],
    },
    {
      chapitre: 'stav-gra-8',
      fiche: `## L'agroécosystème : composantes, fonctions et réseaux trophiques

### Définition
- Un **agroécosystème** est un ensemble d'êtres vivants et de leur milieu, en **interactions** et traversé de **flux**, **organisé par l'humain** pour valoriser ou préserver des ressources au moyen de végétaux ou d'animaux, afin de répondre à des objectifs **économiques**, **sociaux** ou **écologiques**.
- Exemples : une parcelle cultivée, une prairie pâturée, une forêt gérée, un vignoble, un élevage hors-sol, un marais géré. Il faut **délimiter** l'agroécosystème étudié (une parcelle seule ou un ensemble de parcelles, de haies et de bois).

### Les fonctions
- **Production de biomasse** : alimentaire, industrielle (fibres, bois), énergétique (biocarburants, méthanisation).
- **Fonctions environnementales** et **services écosystémiques** : épuration de l'eau, pollinisation, contrôle des ravageurs, stockage du carbone, lutte contre l'érosion.
- Fonctions liées au **cadre de vie** : paysage, loisirs, patrimoine.

### Les composantes
- Le **sol** : constituants minéraux (sables, limons, argiles), organiques (matière organique, humus) et êtres vivants (vers de terre, bactéries, champignons) ; il stocke l'eau et les éléments minéraux.
- L'**atmosphère** : climat, microclimat (températures, pluies, vent, lumière).
- Le **peuplement végétal** cultivé ou géré : une ou plusieurs espèces, plantes compagnes et spontanées, organisation dans l'espace (haies, rangs, couverts).
- Les **autres êtres vivants** du sol et de l'air : auxiliaires, ravageurs, pollinisateurs, décomposeurs ; la **rhizosphère** est la zone du sol autour des racines.
- L'**animal d'élevage** : producteur de biens (lait, viande, laine) et de services (entretien de l'espace, effluents qui fertilisent), et transformateur de biomasse (fourrages, concentrés, coproduits). Les ruminants valorisent l'herbe grâce aux micro-organismes de leur rumen.
- On estime l'efficacité de l'élevage par le **chargement** (animaux par hectare), l'**autonomie** alimentaire, l'**efficacité alimentaire** (produit obtenu par kg d'aliment) et les **rejets**.

### Chaînes et réseaux trophiques
- Une **chaîne alimentaire** relie des êtres vivants par la relation « est mangé par ». Les **niveaux trophiques** : **producteurs** primaires (végétaux chlorophylliens), **consommateurs** primaires (herbivores), secondaires (carnivores)…, et **décomposeurs** (bactéries, champignons) qui recyclent la matière morte.
- Un **réseau trophique** est l'ensemble des chaînes reliées d'un milieu.
- À chaque niveau, une grande partie de l'énergie est **perdue** (respiration, chaleur, déjections, parties non consommées). Le **rendement de production** est souvent d'environ 10 % : il faut beaucoup de végétaux pour produire peu de viande.
- **Rendement d'assimilation** = énergie assimilée / énergie ingérée ; **rendement de production** = énergie produite (croissance) / énergie ingérée ou assimilée.
- **Productivité** = production / biomasse (P/B) : la vitesse de renouvellement de la biomasse.

### À retenir pour le bac
- Agroécosystème : vivants et milieu en interaction, organisés par l'humain, avec des objectifs.
- Composantes : sol, atmosphère, peuplement végétal, autres êtres vivants, animal d'élevage.
- Fonctions : production, services écosystémiques, cadre de vie.
- Niveaux trophiques : producteurs, consommateurs, décomposeurs ; pertes d'énergie à chaque niveau.`,
      cartes: [
        { q: "Qu'est-ce qu'un agroécosystème ?", r: "Un ensemble d'êtres vivants et de leur milieu en interaction, organisé par l'humain pour produire ou préserver des ressources." },
        { q: "Quelles sont les fonctions d'un agroécosystème ?", r: "Production de biomasse, fonctions environnementales et services écosystémiques, cadre de vie." },
        { q: "Quelles sont les composantes d'un agroécosystème ?", r: "Le sol, l'atmosphère, le peuplement végétal, les autres êtres vivants et l'animal d'élevage." },
        { q: "De quoi est constitué un sol ?", r: "De constituants minéraux, de matière organique et d'êtres vivants." },
        { q: "Qu'est-ce que la rhizosphère ?", r: "La zone du sol autour des racines, très riche en micro-organismes." },
        { q: "Pourquoi l'animal d'élevage est-il un transformateur de biomasse ?", r: "Il transforme des fourrages, des concentrés ou des coproduits en lait, viande, œufs ou laine." },
        { q: "Pourquoi les ruminants valorisent-ils l'herbe ?", r: "Les micro-organismes de leur rumen dégradent la cellulose." },
        { q: "Qu'est-ce que le chargement ?", r: "Le nombre d'animaux par hectare de surface." },
        { q: "Quels sont les niveaux trophiques ?", r: "Producteurs primaires, consommateurs primaires, secondaires, et décomposeurs." },
        { q: "Quel est le rôle des décomposeurs ?", r: "Ils dégradent la matière morte et la transforment en éléments minéraux réutilisables par les plantes." },
        { q: "Chaîne ou réseau trophique ?", r: "La chaîne est une suite « est mangé par » ; le réseau est l'ensemble des chaînes reliées d'un milieu." },
        { q: "Pourquoi l'énergie diminue-t-elle le long d'une chaîne alimentaire ?", r: "À chaque niveau, une grande partie est perdue en respiration, chaleur, déjections et parties non consommées." },
        { q: "Qu'est-ce que la productivité P/B ?", r: "Le rapport production sur biomasse : la vitesse de renouvellement de la biomasse." },
      ],
      quiz: [
        { q: "Dans une prairie, l'herbe est :", choix: ["un consommateur secondaire", "un consommateur primaire", "un décomposeur", "un producteur primaire"], bonne: 3, expl: "Elle fabrique sa matière organique par photosynthèse.", niv: 1 },
        { q: "Les vers de terre et les champignons du sol sont surtout :", choix: ["des producteurs", "des décomposeurs", "des prédateurs", "des pollinisateurs"], bonne: 1, expl: "Ils dégradent la matière organique morte.", niv: 1 },
        { q: "Le chargement d'une prairie s'exprime en :", choix: ["animaux par hectare", "litres par vache", "kg de grain", "kcal par jour et par animal"], bonne: 0, expl: "Il mesure la pression des animaux sur la surface.", niv: 1 },
        { q: "Une vache qui mange de l'herbe est :", choix: ["un décomposeur", "un producteur primaire", "un consommateur primaire", "un consommateur tertiaire"], bonne: 2, expl: "Elle se nourrit directement de végétaux.", niv: 1 },
        { q: "Une haie en bordure de parcelle abrite des oiseaux qui mangent des chenilles. C'est un service de :", choix: ["stockage d'eau", "pollinisation", "production d'énergie renouvelable", "contrôle des ravageurs"], bonne: 3, expl: "Les prédateurs régulent les ravageurs des cultures.", niv: 2 },
        { q: "Un animal ingère 100 kJ et en stocke 10 kJ dans sa croissance. Son rendement de production est de :", choix: ["1 %", "10 %", "90 %", "100 %"], bonne: 1, expl: "10 / 100 × 100 = 10 %.", niv: 2 },
        { q: "Pourquoi faut-il beaucoup de végétaux pour produire peu de viande ?", choix: ["Les végétaux contiennent peu d'énergie par kilogramme de matière", "La viande contient plus d'eau", "Les animaux mangent peu", "Une grande partie de l'énergie est perdue à chaque niveau"], bonne: 3, expl: "Respiration, chaleur et déjections font perdre de l'énergie.", niv: 2 },
        { q: "Pourquoi un mouton peut-il se nourrir d'herbe riche en cellulose ?", choix: ["Il produit beaucoup d'amylase", "Il héberge des micro-organismes qui dégradent la cellulose", "Il n'a pas besoin d'énergie", "Il digère les feuilles jeunes grâce à sa salive et ses dents"], bonne: 1, expl: "C'est une relation de mutualisme entre l'animal et sa flore.", niv: 2 },
        { q: "Lequel n'est **pas** une composante de l'agroécosystème ?", choix: ["Le prix de vente du blé", "Le peuplement végétal", "Le sol et ses êtres vivants", "L'atmosphère"], bonne: 0, expl: "Le prix est une donnée économique, pas une composante du système vivant.", niv: 2 },
        { q: "Que deviendrait une parcelle sans décomposeurs ?", choix: ["Le sol deviendrait plus fertile", "Les plantes pousseraient plus vite grâce à la matière morte accumulée", "Les éléments minéraux ne seraient plus recyclés", "Les herbivores disparaîtraient en un jour"], bonne: 2, expl: "Les décomposeurs referment le cycle de la matière.", niv: 3 },
        { q: "Pourquoi faut-il délimiter l'agroécosystème étudié ?", choix: ["Pour distinguer les flux internes des flux externes", "Pour calculer le prix des terres et des bâtiments de l'exploitation", "Parce que la loi l'impose", "Pour compter les tracteurs"], bonne: 0, expl: "Une parcelle seule ou un ensemble avec haies et bois n'ont pas le même fonctionnement.", niv: 3 },
        { q: "Un élevage achète la moitié de ses aliments à l'extérieur. Que peut-on dire de son autonomie alimentaire ?", choix: ["Elle ne se mesure pas", "Elle est totale", "Elle est faible, car il dépend d'apports externes", "Elle augmente grâce aux services écosystémiques de ses prairies"], bonne: 2, expl: "L'autonomie est la part des aliments produite sur l'exploitation.", niv: 3 },
      ],
    },
    {
      chapitre: 'stav-gra-9',
      fiche: `## Photosynthèse, respiration, fermentation et cycle du carbone

### La photosynthèse
- Elle a lieu dans les **chloroplastes** des cellules chlorophylliennes, surtout dans les feuilles, à la **lumière**.
- Bilan : **dioxyde de carbone + eau → glucose + dioxygène**, grâce à l'énergie lumineuse. 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂.
- La plante transforme de l'**énergie lumineuse** en **énergie chimique** stockée dans la matière organique : elle est **autotrophe**.
- **Nutrition de la plante** : les **racines** et leurs **poils absorbants** prélèvent l'eau et les sels minéraux (la **sève brute**, qui monte par les vaisseaux du **xylème**) ; les **stomates** des feuilles laissent entrer le CO₂ et sortir la vapeur d'eau (**transpiration**, qui fait monter la sève) ; la **sève élaborée**, riche en sucres, circule dans le **phloème** vers les organes de réserve et de croissance.

### La respiration cellulaire
- Elle a lieu dans les **mitochondries** de presque toutes les cellules (animales et végétales), jour et nuit, en présence de **dioxygène**.
- Bilan : **glucose + dioxygène → dioxyde de carbone + eau** + énergie.
- L'énergie est récupérée sous forme d'**ATP**, la molécule qui fournit l'énergie utilisable par la cellule. La respiration produit beaucoup d'ATP (environ 36 par glucose).

### La fermentation
- Elle a lieu dans le **cytoplasme**, **sans dioxygène**.
- **Fermentation alcoolique** (levures) : glucose → éthanol + CO₂ ; **fermentation lactique** (bactéries, ou muscle en manque d'oxygène) : glucose → acide lactique.
- Elle produit **peu d'ATP** (2 par glucose) : la dégradation du glucose est incomplète, il reste de l'énergie dans l'éthanol ou l'acide lactique.
- Les voies métaboliques sont des suites de réactions, chacune catalysée par une **enzyme**.

### Le cycle du carbone
- Le carbone circule entre l'**atmosphère** (CO₂), les **êtres vivants** (matière organique), le **sol** (humus), les **océans** et les **roches** et combustibles fossiles.
- **Photosynthèse** : prélève le CO₂ de l'air et le fixe dans la matière organique.
- **Respiration** des êtres vivants et des **décomposeurs** : rejette du CO₂.
- **Combustion** des énergies fossiles et du bois, déforestation : rejettent du CO₂.
- **Stockage** : bois des forêts, prairies permanentes et haies, matière organique des sols. Les pratiques agricoles influencent ce stockage (labour, couverture des sols, prairies).
- L'énergie, elle, ne se recycle pas : elle entre sous forme de lumière et sort sous forme de chaleur. La **matière** se recycle, l'**énergie** circule et se perd.

### À retenir pour le bac
- Photosynthèse : CO₂ + eau + lumière → glucose + O₂, dans les chloroplastes.
- Respiration : glucose + O₂ → CO₂ + eau + beaucoup d'ATP, dans les mitochondries.
- Fermentation : sans O₂, peu d'ATP, éthanol ou acide lactique.
- Sève brute dans le xylème, sève élaborée dans le phloème, stomates et transpiration.
- Cycle du carbone : photosynthèse qui stocke, respiration et combustion qui rejettent.`,
      cartes: [
        { q: "Où a lieu la photosynthèse ?", r: "Dans les chloroplastes des cellules chlorophylliennes, à la lumière." },
        { q: "Quel est le bilan de la photosynthèse ?", r: "Dioxyde de carbone + eau → glucose + dioxygène, grâce à l'énergie lumineuse." },
        { q: "Pourquoi dit-on que la plante est autotrophe ?", r: "Elle fabrique sa matière organique à partir de matière minérale et de lumière." },
        { q: "Sève brute ou sève élaborée ?", r: "Brute : eau et sels minéraux, montée par le xylème. Élaborée : riche en sucres, transportée par le phloème." },
        { q: "Quel est le rôle des stomates ?", r: "Laisser entrer le CO₂ et sortir la vapeur d'eau." },
        { q: "Quel est le rôle des poils absorbants ?", r: "Prélever l'eau et les sels minéraux du sol." },
        { q: "Où a lieu la respiration cellulaire ?", r: "Dans les mitochondries, en présence de dioxygène." },
        { q: "Quel est le bilan de la respiration ?", r: "Glucose + dioxygène → dioxyde de carbone + eau + énergie (ATP)." },
        { q: "Qu'est-ce que l'ATP ?", r: "La molécule qui fournit l'énergie utilisable par la cellule." },
        { q: "Respiration ou fermentation : laquelle produit le plus d'ATP ?", r: "La respiration, environ 36 ATP par glucose contre 2 pour la fermentation." },
        { q: "Quels sont les produits des fermentations alcoolique et lactique ?", r: "Alcoolique : éthanol et CO₂. Lactique : acide lactique." },
        { q: "Quels processus rejettent du CO₂ dans l'atmosphère ?", r: "La respiration des êtres vivants et des décomposeurs, la combustion et la déforestation." },
        { q: "Où le carbone est-il stocké dans un agroécosystème ?", r: "Dans le bois, les prairies permanentes, les haies et la matière organique des sols." },
      ],
      quiz: [
        { q: "La photosynthèse se déroule dans :", choix: ["les racines", "les mitochondries", "les chloroplastes", "le noyau"], bonne: 2, expl: "Les chloroplastes contiennent la chlorophylle.", niv: 1 },
        { q: "La respiration cellulaire rejette :", choix: ["du dioxygène", "du dioxyde de carbone", "de l'amidon", "de la chlorophylle"], bonne: 1, expl: "Glucose + O₂ → CO₂ + eau + énergie.", niv: 1 },
        { q: "La sève élaborée transporte surtout :", choix: ["de la chlorophylle", "de l'eau et des sels minéraux", "du dioxygène", "des sucres"], bonne: 3, expl: "Elle circule dans le phloème depuis les feuilles.", niv: 1 },
        { q: "La fermentation se déroule :", choix: ["sans dioxygène", "à la lumière du jour", "dans les chloroplastes", "avec beaucoup de dioxygène"], bonne: 0, expl: "Elle a lieu dans le cytoplasme, en absence de dioxygène.", niv: 1 },
        { q: "Une plante placée à l'obscurité pendant deux jours :", choix: ["respire mais ne fait plus de photosynthèse", "fait plus de photosynthèse grâce à ses réserves de sucre", "arrête de respirer", "produit plus de dioxygène"], bonne: 0, expl: "La respiration a lieu jour et nuit ; la photosynthèse demande de la lumière.", niv: 2 },
        { q: "Pourquoi la fermentation produit-elle peu d'énergie ?", choix: ["Elle consomme de l'ATP sans en produire en retour", "Elle utilise trop de dioxygène", "Elle a lieu dans les chloroplastes", "Elle dégrade le glucose de façon incomplète"], bonne: 3, expl: "Il reste de l'énergie dans l'éthanol ou l'acide lactique.", niv: 2 },
        { q: "Combien d'ATP la respiration produit-elle environ par glucose ?", choix: ["2", "36", "12", "4"], bonne: 1, expl: "Environ 36, contre 2 pour la fermentation.", niv: 2 },
        { q: "Une prairie permanente transformée en culture labourée chaque année :", choix: ["ne change rien au cycle du carbone ni au stock du sol", "stocke plus de carbone", "perd une partie du carbone stocké dans son sol", "supprime la respiration du sol"], bonne: 2, expl: "Le labour accélère la décomposition de la matière organique.", niv: 2 },
        { q: "Quel processus ne rejette **pas** de CO₂ ?", choix: ["La respiration", "La photosynthèse", "La combustion du bois", "L'activité des décomposeurs"], bonne: 1, expl: "La photosynthèse prélève au contraire le CO₂ de l'air.", niv: 2 },
        { q: "Pourquoi la transpiration foliaire fait-elle monter la sève brute ?", choix: ["Elle produit des sucres", "Les feuilles poussent la sève brute vers le bas, jusqu'au bout des racines", "L'eau évaporée par les stomates est remplacée par celle des racines", "Elle ferme les vaisseaux"], bonne: 2, expl: "C'est une aspiration continue de l'eau dans les vaisseaux du xylème.", niv: 3 },
        { q: "Pourquoi dit-on que la matière se recycle mais pas l'énergie ?", choix: ["L'énergie sort en chaleur, alors que les atomes circulent", "L'énergie reste dans le sol", "La matière disparaît dans la respiration", "Les décomposeurs recyclent la chaleur et la rendent aux plantes"], bonne: 0, expl: "Les décomposeurs recyclent la matière ; l'énergie se dissipe.", niv: 3 },
        { q: "Planter des haies autour des parcelles aide à lutter contre le changement climatique parce que :", choix: ["elles chauffent les parcelles", "les haies rejettent plus de CO₂ qu'elles n'en fixent", "elles empêchent la photosynthèse des cultures", "le bois et le sol des haies stockent du carbone"], bonne: 3, expl: "La photosynthèse fixe le carbone dans le bois et les racines.", niv: 3 },
      ],
    },
    {
      chapitre: 'stav-gra-10',
      fiche: `## La biodiversité et les services écosystémiques

### Les ressources naturelles d'un agroécosystème
- Les principales ressources mobilisées sont l'**eau**, le **sol**, l'**air**, la **biodiversité** et le **paysage**. L'approche « **une seule santé** » rappelle que la santé des humains, des animaux et de l'environnement est liée.
- Les enjeux de leur gestion existent à plusieurs **échelles** : locale (la parcelle, l'exploitation), nationale, mondiale.

### Les services écosystémiques
- Ce sont les **bénéfices** que les humains retirent du fonctionnement des écosystèmes.
- **Services d'approvisionnement** : nourriture, bois, eau, fibres.
- **Services de régulation** : pollinisation, contrôle des ravageurs, épuration de l'eau, régulation du climat (stockage du carbone), limitation de l'érosion, régulation des crues.
- **Services de soutien** : formation des sols, recyclage des éléments minéraux.
- **Services culturels** : paysage, loisirs, tourisme, patrimoine.
- Mobiliser ces services permet de **réduire les intrants** (engrais, pesticides).

### Les relations entre êtres vivants
- **Symbiose** : association durable et à bénéfice réciproque, souvent indispensable.
  - **Fixation de l'azote** de l'air par les bactéries des **nodosités** des **fabacées** (légumineuses : luzerne, trèfle, pois, féverole) ; la plante fournit des sucres. Le sol est enrichi en azote pour la culture suivante.
  - **Mycorhizes** : champignons associés aux racines, qui augmentent l'absorption de l'eau et du phosphore ; la plante leur fournit des sucres.
  - Micro-organismes du **rumen** des ruminants, qui dégradent la cellulose.
- **Mutualisme** : association à bénéfice réciproque mais non obligatoire, comme la **pollinisation** par les abeilles (nectar contre transport du pollen).
- **Compétition** : deux êtres vivants recherchent la même ressource (lumière, eau, azote) ; par exemple la culture et les adventices.
- **Prédation** : un être vivant en mange un autre (coccinelle et pucerons, chouette et campagnols).
- **Parasitisme** : un être vivant vit aux dépens d'un autre (douve du foie chez les ovins, mildiou de la vigne).
- La prédation et le parasitisme **régulent** les populations : c'est la base de la **lutte biologique** (lâchers de trichogrammes contre la pyrale du maïs, coccinelles contre les pucerons).

### Favoriser la biodiversité
- Haies, bandes enherbées, couverts fleuris, mares, prairies permanentes, enherbement des vignes et des vergers, agroforesterie, diversification des cultures.
- Ces infrastructures agroécologiques abritent les **auxiliaires** (prédateurs et parasites des ravageurs) et les **pollinisateurs**.

### À retenir pour le bac
- Services écosystémiques : approvisionnement, régulation, soutien, culturels.
- Symbiose : nodosités des fabacées (azote), mycorhizes, rumen.
- Mutualisme : pollinisation ; compétition, prédation, parasitisme.
- Lutte biologique : utiliser prédateurs et parasites pour réguler les ravageurs.
- Haies, bandes enherbées, couverts : abris pour auxiliaires et pollinisateurs.`,
      cartes: [
        { q: "Qu'est-ce qu'un service écosystémique ?", r: "Un bénéfice que les humains retirent du fonctionnement des écosystèmes." },
        { q: "Citez trois services de régulation.", r: "Pollinisation, contrôle des ravageurs, épuration de l'eau, stockage du carbone, limitation de l'érosion." },
        { q: "Qu'est-ce que l'approche « une seule santé » ?", r: "L'idée que la santé des humains, des animaux et de l'environnement est liée." },
        { q: "Qu'est-ce qu'une symbiose ?", r: "Une association durable entre deux êtres vivants, à bénéfice réciproque." },
        { q: "Comment les fabacées enrichissent-elles le sol en azote ?", r: "Les bactéries de leurs nodosités fixent l'azote de l'air ; la plante leur fournit des sucres." },
        { q: "Qu'est-ce qu'une mycorhize ?", r: "L'association entre un champignon et des racines, qui améliore l'absorption de l'eau et du phosphore." },
        { q: "Pourquoi la pollinisation est-elle un mutualisme ?", r: "L'insecte reçoit du nectar et la plante est fécondée grâce au transport du pollen." },
        { q: "Qu'est-ce que la compétition ?", r: "La recherche d'une même ressource par deux êtres vivants, par exemple une culture et des adventices." },
        { q: "Qu'est-ce que la prédation ?", r: "Un être vivant qui en mange un autre, comme la coccinelle et les pucerons." },
        { q: "Qu'est-ce que le parasitisme ?", r: "Un être vivant qui vit aux dépens d'un autre, comme la douve du foie chez les ovins." },
        { q: "Qu'est-ce que la lutte biologique ?", r: "L'utilisation de prédateurs ou de parasites pour réguler les ravageurs." },
        { q: "Qu'est-ce qu'un auxiliaire de culture ?", r: "Un être vivant utile à l'agriculteur, qui mange ou parasite les ravageurs, ou pollinise." },
        { q: "Citez trois aménagements favorables à la biodiversité.", r: "Haies, bandes enherbées, couverts fleuris, mares, prairies permanentes." },
      ],
      quiz: [
        { q: "La pollinisation des fleurs par les abeilles est un service de :", choix: ["approvisionnement en bois", "régulation", "soutien par l'érosion", "loisir et tourisme"], bonne: 1, expl: "Elle permet la production de fruits et de graines.", niv: 1 },
        { q: "Les nodosités des racines de luzerne contiennent des bactéries qui fixent :", choix: ["le dioxyde de carbone", "le phosphore du sol", "l'azote de l'air", "du calcium"], bonne: 2, expl: "C'est une symbiose propre aux fabacées.", niv: 1 },
        { q: "La coccinelle qui mange des pucerons est un exemple de :", choix: ["compétition", "symbiose", "parasitisme", "prédation"], bonne: 3, expl: "Le prédateur tue et mange sa proie.", niv: 1 },
        { q: "Le mildiou de la vigne est :", choix: ["un auxiliaire", "un parasite", "un pollinisateur", "un symbiote"], bonne: 1, expl: "Ce champignon vit aux dépens de la vigne.", niv: 1 },
        { q: "Un céréalier cultive un pois avant son blé. Quel intérêt ?", choix: ["Le pois remplace l'eau d'irrigation dont le blé a besoin", "Le pois supprime les insectes", "Le pois laisse de l'azote dans le sol pour le blé", "Le pois rend le sol plus acide"], bonne: 2, expl: "La fixation symbiotique de l'azote réduit les engrais nécessaires.", niv: 2 },
        { q: "Des adventices poussent dans un champ de maïs et prennent l'eau et la lumière. C'est de la :", choix: ["compétition", "symbiose", "prédation", "pollinisation"], bonne: 0, expl: "Les deux plantes recherchent les mêmes ressources.", niv: 2 },
        { q: "Pourquoi l'enherbement entre les rangs de vigne rend-il des services ?", choix: ["Il limite l'érosion et abrite des auxiliaires", "Il supprime la photosynthèse de la vigne", "Il augmente les besoins en pesticides de la vigne", "Il empêche l'eau de pénétrer"], bonne: 0, expl: "Le couvert protège le sol et favorise la biodiversité.", niv: 2 },
        { q: "Des brebis pâturent l'herbe d'un vignoble en hiver. Quel service pour le viticulteur ?", choix: ["La taille de la vigne et le ramassage des sarments", "La récolte du raisin", "L'herbe broutée et un apport de fumier", "Une production de vin plus forte"], bonne: 2, expl: "L'éleveur nourrit ses brebis, le viticulteur évite des passages de tondeuse.", niv: 2 },
        { q: "Lequel n'est **pas** un service écosystémique ?", choix: ["L'épuration de l'eau par une zone humide", "Le prix d'achat d'un tracteur", "La pollinisation", "Le stockage de carbone dans une forêt"], bonne: 1, expl: "Un prix n'est pas un bénéfice tiré du fonctionnement de l'écosystème.", niv: 2 },
        { q: "Pourquoi les mycorhizes intéressent-elles l'agriculteur ?", choix: ["Elles produisent des pesticides", "Elles détruisent les racines", "Elles remplacent la photosynthèse des feuilles abîmées par le froid", "Elles améliorent l'absorption de l'eau et du phosphore"], bonne: 3, expl: "C'est un moyen de réduire certains intrants.", niv: 3 },
        { q: "Un agriculteur arrache ses haies. Quelle conséquence probable sur les ravageurs ?", choix: ["Rien ne change", "Ils disparaissent", "Ils deviennent des pollinisateurs faute de cultures à manger", "Ils augmentent, car les auxiliaires perdent leur abri"], bonne: 3, expl: "La régulation naturelle des ravageurs diminue.", niv: 3 },
        { q: "Lâcher des trichogrammes contre la pyrale du maïs, c'est :", choix: ["de la lutte biologique", "de la lutte chimique raisonnée", "de la fertilisation", "de l'irrigation"], bonne: 0, expl: "Ces petites guêpes parasitent les œufs du ravageur.", niv: 3 },
      ],
    },
    {
      chapitre: 'stav-gra-11',
      fiche: `## La biodiversité génétique : reproduction, hérédité et mutations

### La diversité génétique, une ressource
- La **biodiversité génétique** est la diversité des **gènes** et de leurs versions, les **allèles**, au sein d'une espèce (races, variétés, populations).
- Elle permet l'**adaptation** aux changements (climat, maladies) et la **sélection** de races et de variétés.
- Un **gène** est une portion d'ADN qui code une protéine ; un **allèle** est une version d'un gène ; le **polymorphisme** est l'existence de plusieurs allèles d'un gène dans une population.

### Mitose et méiose
- La **mitose** produit deux cellules **identiques** à la cellule mère, avec le même nombre de chromosomes. Elle assure la **croissance** et la **reproduction asexuée** (bouturage, tubercules, marcottage) qui donne des **clones**.
- La **méiose** produit des **gamètes** **haploïdes** (n chromosomes) à partir de cellules **diploïdes** (2n). Elle a lieu avant la **reproduction sexuée**.
- La **fécondation** réunit deux gamètes et rétablit la diploïdie (2n).
- **Brassages génétiques** : la méiose mélange les allèles (brassage **intrachromosomique** par échange entre chromosomes homologues, brassage **interchromosomique** par répartition au hasard des chromosomes), et la fécondation associe au hasard deux gamètes. Résultat : chaque individu est **unique**.
- La reproduction sexuée crée de la **variabilité**, ce qui aide une population à s'adapter ; la reproduction asexuée conserve à l'identique un génotype intéressant.

### La transmission des caractères
- **Dominance** et **récessivité** : un allèle dominant s'exprime dès qu'il est présent ; un allèle récessif ne s'exprime que s'il est en double exemplaire.
- **Monohybridisme** : on suit un seul caractère. Croisement de deux lignées pures : en première génération (F1), tous identiques et hétérozygotes ; en F2, proportions **3/4 – 1/4**.
- **Dihybridisme** : on suit deux caractères. Pour deux gènes indépendants, la F2 donne les proportions **9/16, 3/16, 3/16, 1/16**.
- Ce sont les **lois de Mendel**.

### Du gène à la protéine
- **Transcription** : dans le **noyau**, l'ADN d'un gène est copié en **ARN messager**.
- **Maturation** : l'ARN messager est modifié avant de sortir du noyau.
- **Traduction** : dans le **cytoplasme**, au niveau des **ribosomes**, l'ARN messager est lu pour assembler les **acides aminés** dans le bon ordre.
- **Exportation** : certaines protéines sont envoyées hors de la cellule (hormones, enzymes digestives).

### Mutations, résistances, hétérosis
- Une **mutation** est une modification de la séquence de l'ADN. Elle peut changer la protéine produite, donc un caractère.
- Les mutations sont à l'origine des **résistances** : quand on traite souvent avec le même antibiotique ou pesticide, les rares individus mutants résistants survivent et se multiplient (**sélection**).
- **Effet hétérosis** (vigueur hybride) : les descendants du croisement de deux lignées différentes sont souvent plus vigoureux et plus productifs que leurs parents.
- **Consanguinité** : la reproduction entre apparentés augmente le risque que des allèles récessifs défavorables s'expriment (maladies génétiques, baisse de fertilité).

### À retenir pour le bac
- Gène, allèle, polymorphisme ; la diversité génétique permet l'adaptation.
- Mitose : cellules identiques, croissance, clones ; méiose : gamètes haploïdes et brassage.
- Monohybridisme : 3/4 – 1/4 ; dihybridisme : 9/16, 3/16, 3/16, 1/16.
- Transcription dans le noyau, traduction dans le cytoplasme.
- Mutations et sélection des résistances ; hétérosis et consanguinité.`,
      cartes: [
        { q: "Qu'est-ce qu'un gène ?", r: "Une portion d'ADN qui code une protéine." },
        { q: "Qu'est-ce qu'un allèle ?", r: "Une version d'un gène." },
        { q: "Qu'est-ce que le polymorphisme ?", r: "L'existence de plusieurs allèles d'un même gène dans une population." },
        { q: "Que produit la mitose ?", r: "Deux cellules identiques à la cellule mère : croissance et reproduction asexuée." },
        { q: "Que produit la méiose ?", r: "Des gamètes haploïdes, à partir de cellules diploïdes, avec un brassage des allèles." },
        { q: "Haploïde ou diploïde ?", r: "Haploïde : un exemplaire de chaque chromosome (n). Diploïde : deux exemplaires (2n)." },
        { q: "Qu'est-ce qu'un clone ?", r: "Un ensemble d'individus génétiquement identiques, issus de reproduction asexuée." },
        { q: "Quels sont les deux brassages de la méiose ?", r: "Le brassage intrachromosomique et le brassage interchromosomique, complétés par la fécondation." },
        { q: "Qu'est-ce qu'un allèle récessif ?", r: "Un allèle qui ne s'exprime que s'il est présent en deux exemplaires." },
        { q: "Quelles proportions en F2 pour un monohybridisme avec dominance ?", r: "3/4 de phénotype dominant et 1/4 de phénotype récessif." },
        { q: "Quelles proportions en F2 pour un dihybridisme avec gènes indépendants ?", r: "9/16, 3/16, 3/16 et 1/16." },
        { q: "Transcription ou traduction ?", r: "Transcription : copie de l'ADN en ARN messager dans le noyau. Traduction : assemblage des acides aminés aux ribosomes, dans le cytoplasme." },
        { q: "Comment apparaît une résistance à un pesticide ?", r: "Une mutation rend quelques individus résistants ; les traitements répétés les sélectionnent." },
        { q: "Qu'est-ce que l'effet hétérosis ?", r: "La vigueur des hybrides issus de deux lignées différentes, souvent supérieure à celle des parents." },
        { q: "Pourquoi éviter la consanguinité ?", r: "Elle augmente l'expression d'allèles récessifs défavorables : maladies, baisse de fertilité." },
      ],
      quiz: [
        { q: "La mitose donne :", choix: ["quatre gamètes haploïdes", "deux cellules identiques à la cellule mère", "des cellules sans chromosomes, prêtes à fusionner", "un brassage des allèles"], bonne: 1, expl: "Elle conserve le patrimoine génétique.", niv: 1 },
        { q: "Les gamètes sont :", choix: ["triploïdes", "diploïdes", "des clones de la mère", "haploïdes"], bonne: 3, expl: "Ils ont un seul exemplaire de chaque chromosome.", niv: 1 },
        { q: "La transcription a lieu :", choix: ["dans le sang", "dans les ribosomes", "dans le noyau", "dans les chloroplastes"], bonne: 2, expl: "L'ADN est copié en ARN messager dans le noyau.", niv: 1 },
        { q: "Un plant de fraisier obtenu par stolon est :", choix: ["issu de la méiose", "un clone de la plante mère", "un hybride", "un mutant apparu pendant la méiose"], bonne: 1, expl: "C'est une reproduction asexuée par mitoses.", niv: 1 },
        { q: "On croise deux lignées pures, l'une à fleurs rouges (allèle dominant), l'autre à fleurs blanches. En F2, la proportion de fleurs blanches est de :", choix: ["1/4", "1/2", "3/4", "1/16"], bonne: 0, expl: "En monohybridisme avec dominance, F2 : 3/4 rouges, 1/4 blanches.", niv: 2 },
        { q: "En dihybridisme avec gènes indépendants, la F2 donne la proportion la plus forte de :", choix: ["1/16", "9/16", "3/16", "16/16"], bonne: 1, expl: "Les individus portant les deux caractères dominants sont 9/16.", niv: 2 },
        { q: "Pourquoi la reproduction sexuée aide-t-elle une espèce à s'adapter ?", choix: ["Elle supprime les mutations", "Elle produit des clones", "Elle crée des individus génétiquement différents", "Elle double le nombre de chromosomes à chaque génération"], bonne: 2, expl: "Le brassage génétique crée de la variabilité.", niv: 2 },
        { q: "Un herbicide utilisé chaque année sur la même parcelle devient inefficace. L'explication la plus probable :", choix: ["Le sol a absorbé l'herbicide", "L'herbicide s'évapore plus vite", "Les adventices ont appris à éviter l'herbicide en se cachant", "Des adventices résistantes ont été sélectionnées"], bonne: 3, expl: "Le traitement répété favorise les rares individus résistants.", niv: 2 },
        { q: "Quelle étape n'appartient **pas** à la synthèse des protéines ?", choix: ["La photosynthèse", "La traduction", "La transcription", "La maturation"], bonne: 0, expl: "La photosynthèse produit du glucose, pas des protéines à partir d'un gène.", niv: 2 },
        { q: "Un éleveur croise deux races différentes pour obtenir des veaux plus vigoureux. Il utilise :", choix: ["le clonage", "la consanguinité des races", "l'effet hétérosis", "la mitose"], bonne: 2, expl: "Les hybrides de première génération sont souvent plus performants.", niv: 3 },
        { q: "Pourquoi la consanguinité augmente-t-elle les maladies génétiques ?", choix: ["Elle rend les gamètes diploïdes", "Elle provoque des mutations nouvelles à chaque génération de veaux", "Elle supprime les chromosomes", "Elle rend plus probable un allèle récessif en double"], bonne: 3, expl: "L'allèle récessif a plus de chances d'être présent en double.", niv: 3 },
        { q: "Une mutation change un acide aminé d'une enzyme. Quelle conséquence possible ?", choix: ["L'enzyme peut perdre ou changer son activité", "L'enzyme devient un glucide", "La mutation ne peut rien changer à la protéine produite", "L'ADN disparaît"], bonne: 0, expl: "La forme de la protéine, donc sa fonction, dépend de ses acides aminés.", niv: 3 },
      ],
    },
    {
      chapitre: 'stav-gra-12',
      fiche: `## Gérer durablement les agroécosystèmes

### Les moyens d'action de l'agriculteur
- **Choix des espèces** et des **types génétiques** (variétés résistantes, races rustiques ou spécialisées).
- **Techniques culturales** : travail du sol, rotation et assolement, fertilisation, irrigation, protection des cultures, couverts végétaux, date et densité de semis.
- **Techniques d'élevage** : alimentation, chargement, pâturage, bâtiments, gestion des effluents, santé.
- **Aménagements** : haies, drainage, irrigation, terrasses, mares, bandes enherbées.
- L'ensemble forme un **système technique** (système de culture, système d'élevage), plus ou moins **artificialisé**.

### Les modifications induites
- Sur les **flux d'énergie** : efficacité de l'utilisation du rayonnement, productivité, **énergie fossile** consommée (carburant, engrais azotés de synthèse), rendement énergétique.
- Sur les **flux de matière** : quantités d'eau et d'éléments stockés ; **exportations** (récoltes) ; **fuites** (lessivage des **nitrates**, ruissellement du phosphore et des pesticides, **érosion**) ; qualité de l'eau, de l'air (ammoniac, gaz à effet de serre) et des sols (tassement, baisse de la matière organique).
- Sur les **êtres vivants** : composition des espèces, équilibres entre populations, activité biologique des sols.
- Exemple : l'excès d'azote et de phosphore dans l'eau provoque l'**eutrophisation** (prolifération d'algues, manque d'oxygène, mort de poissons).
- Les effets peuvent être **positifs** ou **négatifs** et se manifestent à différentes échelles d'espace (parcelle, bassin versant) et de temps.

### Vers une gestion durable
- Le **développement durable** répond aux besoins actuels sans compromettre ceux des générations futures ; il a trois **piliers** : **économique**, **social** et **environnemental**.
- **Démarche** pour un cas : identifier le problème ; choisir la bonne **échelle** d'intervention (parcelle, troupeau, exploitation, **bassin versant**, territoire) ; choisir des **indicateurs** de durabilité (teneur en nitrates de l'eau, indice de fréquence de traitement, taux de matière organique du sol, nombre d'espèces) ; présenter les **leviers** et les résultats.
- Leviers agroécologiques : réduire les intrants de synthèse au profit des **processus écologiques** (légumineuses, auxiliaires, couverts), allonger les rotations, maintenir les prairies, agriculture de conservation (moins de travail du sol, sol couvert), agroforesterie, méthanisation des effluents, irrigation raisonnée.
- La gestion est souvent **collective** et **concertée** : agriculteurs, collectivités, associations, consommateurs, État. Les objectifs des acteurs peuvent **diverger**.
- Notions à connaître : **agriculture biologique**, **production intégrée**, **agroécologie**, **gestion conservatoire** des milieux, **bioéconomie** (valoriser le carbone renouvelable : coproduits, biodéchets).
- **Défis** : nourrir une population mondiale croissante, limiter l'artificialisation des terres, s'adapter au **changement climatique** (sécheresses, précocité des vendanges, nouvelles maladies), réduire la dépendance à l'énergie fossile.

### À retenir pour le bac
- Moyens d'action : espèces et types génétiques, techniques culturales et d'élevage, aménagements.
- Effets sur les flux d'énergie, les flux de matière (fuites de nitrates, érosion) et les êtres vivants.
- Trois piliers : économique, social, environnemental.
- Démarche : problème, échelle, indicateurs, leviers, acteurs.
- Agroécologie : remplacer des intrants par des processus écologiques.`,
      cartes: [
        { q: "Quels sont les moyens d'action de l'agriculteur ?", r: "Le choix des espèces et des types génétiques, les techniques culturales et d'élevage, les aménagements." },
        { q: "Qu'est-ce qu'un système de culture ?", r: "L'ensemble des choix techniques appliqués à des parcelles : succession des cultures et itinéraires techniques." },
        { q: "Qu'est-ce que le lessivage des nitrates ?", r: "L'entraînement des nitrates du sol vers les nappes par l'eau de pluie." },
        { q: "Qu'est-ce que l'eutrophisation ?", r: "L'excès d'azote et de phosphore dans l'eau, qui provoque une prolifération d'algues et un manque d'oxygène." },
        { q: "Quels sont les trois piliers du développement durable ?", r: "Économique, social et environnemental." },
        { q: "Qu'est-ce qu'un indicateur de durabilité ?", r: "Une mesure qui permet de suivre un problème : teneur en nitrates, matière organique du sol, nombre d'espèces." },
        { q: "Qu'est-ce qu'un bassin versant ?", r: "Le territoire dont toutes les eaux s'écoulent vers un même cours d'eau." },
        { q: "Qu'est-ce que l'agroécologie ?", r: "Produire en s'appuyant sur les processus écologiques pour réduire les intrants de synthèse." },
        { q: "Qu'est-ce que l'agriculture de conservation ?", r: "Une agriculture qui réduit le travail du sol, le garde couvert et diversifie les cultures." },
        { q: "Qu'est-ce que l'agroforesterie ?", r: "L'association d'arbres et de cultures ou d'élevage sur une même parcelle." },
        { q: "Qu'est-ce que la bioéconomie ?", r: "Une économie fondée sur le carbone renouvelable : biomasse, coproduits et biodéchets valorisés." },
        { q: "Pourquoi la gestion d'une ressource est-elle souvent collective ?", r: "Parce qu'elle concerne plusieurs acteurs d'un territoire, dont les objectifs peuvent diverger." },
        { q: "Citez trois effets du changement climatique sur l'agriculture.", r: "Sécheresses, vendanges plus précoces, nouvelles maladies et nouveaux ravageurs." },
      ],
      quiz: [
        { q: "Les trois piliers du développement durable sont :", choix: ["sol, eau, air", "agricole, industriel, commercial", "local, national, européen et mondial", "économique, social, environnemental"], bonne: 3, expl: "On les retrouve dans la première consigne des sujets.", niv: 1 },
        { q: "L'eutrophisation d'un cours d'eau est causée par un excès :", choix: ["de sable", "d'oxygène", "d'azote et de phosphore", "de poissons et de plantes aquatiques"], bonne: 2, expl: "Ces éléments nourrissent une prolifération d'algues.", niv: 1 },
        { q: "Planter une haie est :", choix: ["un aménagement", "une technique de traite", "un choix de race", "un traitement chimique"], bonne: 0, expl: "C'est un moyen d'action sur l'agroécosystème.", niv: 1 },
        { q: "Un bassin versant est :", choix: ["une parcelle irriguée", "un bac de stockage du lait en attente de collecte", "le territoire drainé vers un même cours d'eau", "un étang artificiel"], bonne: 2, expl: "C'est une bonne échelle pour gérer la qualité de l'eau.", niv: 1 },
        { q: "Un sol nu en hiver après un maïs perd des nitrates. Quel levier proposer ?", choix: ["Brûler les résidus", "Labourer plus profond", "Apporter plus d'engrais pour nourrir les vers de terre", "Semer un couvert végétal qui absorbe les nitrates"], bonne: 3, expl: "Le couvert piège l'azote et protège le sol de l'érosion.", niv: 2 },
        { q: "Pour suivre la pollution d'une rivière par l'agriculture, un bon indicateur est :", choix: ["le prix du blé", "la teneur en nitrates de l'eau", "le nombre de tracteurs vendus dans la région", "la couleur des haies"], bonne: 1, expl: "Un indicateur doit mesurer directement le problème posé.", niv: 2 },
        { q: "Laisser les sarments de vigne broyés au sol après la taille permet surtout :", choix: ["d'enrichir le sol en matière organique", "d'augmenter l'érosion", "de remplacer la photosynthèse des jeunes rameaux", "de supprimer les vers de terre"], bonne: 0, expl: "La biomasse restituée nourrit la vie du sol.", niv: 2 },
        { q: "Allonger la rotation avec des légumineuses permet :", choix: ["de supprimer le travail du sol et les semis pour plusieurs années", "d'augmenter les pesticides", "de réduire les engrais azotés et les ravageurs", "de produire la même culture chaque année"], bonne: 2, expl: "Les fabacées fixent l'azote ; la diversité gêne ravageurs et maladies.", niv: 2 },
        { q: "Quel levier ne relève **pas** de l'agroécologie ?", choix: ["Augmenter les traitements chimiques préventifs", "Implanter des couverts", "Favoriser les auxiliaires", "Associer cultures et arbres sur une même parcelle"], bonne: 0, expl: "L'agroécologie cherche à réduire les intrants de synthèse.", niv: 2 },
        { q: "Pourquoi la gestion d'une zone humide doit-elle associer plusieurs acteurs ?", choix: ["Elle se fait sans concertation", "Seul l'État peut y entrer", "Elle ne concerne que les pêcheurs et les chasseurs de la zone", "Les acteurs ont des objectifs parfois divergents"], bonne: 3, expl: "La concertation permet de concilier production et protection.", niv: 3 },
        { q: "Pourquoi les vendanges sont-elles de plus en plus précoces en France ?", choix: ["Les vignes sont plus jeunes", "Le réchauffement accélère la maturité du raisin", "Les cahiers des charges imposent désormais une date plus précoce", "Des raisins plus petits mûrissent plus vite"], bonne: 1, expl: "C'est un enjeu du changement climatique pour la production de vin.", niv: 3 },
        { q: "Un éleveur installe un méthaniseur pour ses effluents. Quel intérêt environnemental ?", choix: ["Augmenter les fuites de nitrates", "Produire de l'énergie et limiter les émissions", "Supprimer le besoin de fourrage pour les vaches pendant l'hiver", "Remplacer la photosynthèse"], bonne: 1, expl: "C'est un exemple de bioéconomie : un déchet devient une ressource.", niv: 3 },
      ],
    },
  ],
  methode: [
    { id: 'stav-gra-m1', mat: 'stav-gra', titre: 'Relier le contexte aux trois piliers de la durabilité',
      formules: ['À partir des éléments de contexte, associer des points saillants (caractéristiques) avec chacun des 3 piliers de la durabilité', 'Associer des points saillants des mesures de gestion avec les trois piliers de la durabilité'],
      vu: ['Bac 2025 métropole, « Champagne : un territoire et une filière face aux défis environnementaux » : consigne 1', 'Bac 2023 métropole, « Le râle des genêts dans les Basses Vallées Angevines » : consigne 1'],
      pts: 'Environ 2 à 3 points sur 20',
      attendu: 'Pour chaque pilier (économique, social, environnemental), au moins deux éléments précis tirés du texte d\'introduction, reformulés et rangés au bon endroit. Le correcteur regarde la sélection et le classement des informations, pas la longueur.',
      etapes: ['Relire le texte de contexte en soulignant les chiffres et les faits.', 'Ranger chaque fait : argent, emplois et revenus (économique) ; personnes, emplois, santé, patrimoine et cadre de vie (social) ; eau, sol, biodiversité, carbone (environnemental).', 'Écrire un court paragraphe ou un tableau par pilier, avec les chiffres.', 'Ajouter une phrase qui montre le lien entre les piliers si c\'est possible.'],
      mots: ['pilier économique', 'pilier social', 'pilier environnemental', 'durabilité', 'emplois', 'biodiversité', 'cahier des charges'],
      pieges: ['Recopier le texte sans classer.', 'Mettre les emplois seulement dans l\'économique, alors qu\'ils ont aussi une dimension sociale.', 'Oublier un pilier.', 'Ajouter des idées qui ne sont pas dans le contexte.'],
      cas: 'Contexte inventé : la coopérative fictive « Lait des Combes » réunit 60 éleveurs en AOP fromagère. Elle verse un prix du lait supérieur de 20 % au prix moyen et emploie 45 salariés à la fromagerie. Le cahier des charges impose 1 hectare d\'herbe par vache et interdit l\'ensilage. La fromagerie accueille 20 000 visiteurs par an.',
      question: 'Associez des points saillants de cette filière avec chacun des trois piliers de la durabilité.',
      modele: 'Pilier économique : le lait est mieux payé (20 % au-dessus du prix moyen), ce qui assure un revenu aux 60 éleveurs ; l\'AOP valorise le fromage et attire 20 000 visiteurs, source de ventes. Pilier social : 45 emplois à la fromagerie et le maintien de 60 exploitations font vivre le territoire ; l\'accueil des visiteurs fait connaître un patrimoine. Pilier environnemental : 1 hectare d\'herbe par vache limite le chargement et maintient les prairies, qui stockent du carbone et abritent une biodiversité ; l\'absence d\'ensilage favorise une alimentation à l\'herbe.',
      grille: ['Trois piliers traités', 'Au moins deux éléments par pilier', 'Éléments tirés du contexte', 'Chiffres utilisés', 'Classement juste'] },
    { id: 'stav-gra-m2', mat: 'stav-gra', titre: 'Présenter les services écosystémiques et les effets d\'une pratique',
      formules: ['À l\'aide du document, discuter des effets du maintien de l\'enherbement', 'Présenter des services écosystémiques rendus par cet agroécosystème pour l\'éleveur, d\'une part, et pour le viticulteur, d\'autre part', 'Expliciter les intérêts agronomiques et environnementaux', 'Caractériser des services écosystémiques mis en avant par le label'],
      vu: ['Bac 2025 métropole (champagne) : consignes 2.1, 2.2 et 3 (enherbement, pâturage de brebis dans les vignes, sarments laissés au sol)', 'Bac 2023 métropole (râle des genêts) : consignes 3.1 et 3.2 (pratiques agricoles, services mis en avant par un label)'],
      pts: 'Environ 3 à 6 points sur 20',
      attendu: 'Des effets ou des services précis, chacun justifié par un mécanisme scientifique (la relation biologique, le flux de matière) et appuyé sur une donnée du document. Pour « discuter », il faut des effets positifs et négatifs.',
      etapes: ['Repérer dans le document les données chiffrées ou les observations.', 'Nommer le service ou l\'effet : régulation (érosion, ravageurs, eau, carbone), soutien (fertilité, recyclage), approvisionnement.', 'Expliquer le mécanisme : racines qui tiennent le sol, auxiliaires abrités, matière organique décomposée.', 'Pour « discuter », ajouter les limites : compétition pour l\'eau et l\'azote, coût, travail.', 'Séparer les bénéficiaires si la consigne le demande.'],
      mots: ['service écosystémique', 'régulation', 'érosion', 'auxiliaires', 'compétition', 'matière organique', 'décomposeurs', 'mutualisme'],
      pieges: ['Citer un service sans l\'expliquer.', 'Oublier les effets négatifs quand on demande de discuter.', 'Ne pas utiliser le document.', 'Confondre service rendu et pratique agricole.'],
      cas: 'Document inventé : dans un verger fictif de pommiers, l\'arboriculteur sème une bande fleurie entre les rangs. Relevés : 3 fois plus de syrphes et de coccinelles qu\'avec un sol nu, ruissellement réduit de moitié, mais rendement en pommes baissé de 3 % les années sèches.',
      question: 'Discutez des effets de la bande fleurie dans ce verger.',
      modele: 'Effets positifs : la bande fleurie abrite et nourrit des auxiliaires (3 fois plus de syrphes et de coccinelles), dont les larves mangent les pucerons : c\'est un service de régulation des ravageurs, qui peut réduire les insecticides. Ses racines retiennent le sol et ralentissent l\'eau : le ruissellement est divisé par deux, ce qui limite l\'érosion et la pollution des cours d\'eau. Elle attire aussi des pollinisateurs utiles à la floraison des pommiers. Effet négatif : la bande est en compétition avec les arbres pour l\'eau ; les années sèches, le rendement baisse de 3 %. Le bilan reste favorable, mais il faut adapter la bande (fauche en été, espèces peu gourmandes en eau).',
      grille: ['Au moins deux effets positifs justifiés', 'Mécanisme biologique expliqué', 'Données du document utilisées', 'Effet négatif et explication', 'Conclusion nuancée'] },
    { id: 'stav-gra-m3', mat: 'stav-gra', titre: 'Formuler des hypothèses explicatives',
      formules: ['Proposer des hypothèses explicatives de ce déclin', 'Émettre des hypothèses sur les origines de cette intolérance, à l\'aide du document'],
      vu: ['Bac 2023 métropole (râle des genêts) : consigne 3.3 (déclin malgré l\'engagement des éleveurs)', 'Bac 2025 métropole (champagne) : consigne 4.2 (intolérance à l\'alcool et mécanisme enzymatique de dégradation dans le foie)'],
      pts: 'Environ 2 à 4 points sur 20',
      attendu: 'Deux ou trois hypothèses différentes, chacune formulée au conditionnel, reliée à une connaissance du cours (enzyme, gène, habitat, chaîne alimentaire) et à un indice du document. On ne demande pas de prouver, mais d\'être cohérent.',
      etapes: ['Relever ce qui est observé (le déclin, les symptômes) et ce que montre le document (un schéma de réaction, une carte, une donnée).', 'Chercher les causes possibles à plusieurs niveaux : gène et enzyme, milieu de vie, alimentation, pratiques humaines, climat.', 'Formuler chaque hypothèse au conditionnel : « Le déclin pourrait s\'expliquer par… ».', 'Justifier chaque hypothèse par un élément du document ou du cours.', 'Proposer si possible un moyen de la vérifier.'],
      mots: ['hypothèse', 'pourrait', 'enzyme', 'allèle', 'mutation', 'habitat', 'ressource alimentaire', 'facteur'],
      pieges: ['N\'écrire qu\'une seule hypothèse.', 'Affirmer au lieu de supposer.', 'Proposer une hypothèse sans lien avec le document.'],
      cas: 'Document inventé : dans un marais fictif, la population d\'une petite chauve-souris insectivore a baissé de 40 % en dix ans. Pendant la même période, les prairies humides ont reculé au profit de cultures traitées, et deux grands arbres creux ont été abattus.',
      question: 'Proposez des hypothèses explicatives de ce déclin.',
      modele: 'Première hypothèse : la ressource alimentaire aurait diminué. Les prairies humides, riches en insectes, ont été remplacées par des cultures traitées avec des insecticides : la chauve-souris trouverait moins de proies. Deuxième hypothèse : ses abris auraient disparu, car l\'abattage des arbres creux pourrait la priver de gîtes pour se reproduire. Troisième hypothèse : les insectes traités pourraient l\'intoxiquer par accumulation dans la chaîne alimentaire. On pourrait vérifier ces hypothèses en comptant les insectes et les gîtes occupés.',
      grille: ['Au moins deux hypothèses distinctes', 'Formulation au conditionnel', 'Lien avec le document', 'Lien avec une connaissance du cours', 'Moyen de vérification proposé'] },
    { id: 'stav-gra-m4', mat: 'stav-gra', titre: 'Analyser un menu ou une recommandation au regard du PNNS',
      formules: ['Montrer l\'adéquation de la constitution des menus avec les attentes du PNNS', 'Justifier les recommandations du PNNS liées à la consommation d\'alcool, à l\'aide du document'],
      vu: ['Bac 2023 métropole (râle des genêts) : consigne 4.1 (menus d\'un restaurant scolaire sur une semaine)', 'Bac 2025 métropole (champagne) : consigne 4.1 (recommandations sur l\'alcool et risques pour la santé)'],
      pts: 'Environ 2 à 4 points sur 20',
      attendu: 'Une confrontation précise entre les repères du PNNS et ce que contient le document : on compte les fréquences (légumineuses, poisson, fruits et légumes), on cite les repères et on conclut. Pour une recommandation, on la relie aux effets sur la santé montrés par le document.',
      etapes: ['Rappeler les repères du PNNS concernés.', 'Compter dans les menus les aliments de chaque groupe ou relever les risques donnés par le document.', 'Comparer, repère par repère.', 'Conclure : adapté, partiellement adapté, avec une amélioration proposée.'],
      mots: ['PNNS', 'repères de consommation', 'groupe d\'aliments', 'légumineuses', 'féculents complets', 'fréquence', 'équilibre'],
      pieges: ['Décrire les menus sans citer les repères.', 'Juger un seul repas au lieu de la semaine.', 'Oublier la conclusion.'],
      cas: 'Document inventé : semaine d\'une cantine fictive. Lundi : carottes râpées, lentilles et riz, yaourt, pomme. Mardi : salade, poulet et haricots verts, fromage, compote. Mercredi : soupe, poisson et pommes de terre, kiwi. Jeudi : tomates, pois chiches et semoule, fromage blanc, poire. Vendredi : betteraves, omelette et pâtes complètes, yaourt, orange.',
      question: 'Montrez l\'adéquation de ces menus avec les attentes du PNNS.',
      modele: 'Le PNNS recommande au moins 5 fruits et légumes par jour, des légumineuses au moins deux fois par semaine, des féculents complets, deux produits laitiers par jour et du poisson deux fois par semaine. Ici, chaque repas contient une crudité ou une soupe et un fruit : la cantine contribue bien aux fruits et légumes. Les légumineuses apparaissent deux fois (lentilles lundi, pois chiches jeudi) : le repère est atteint, associées à une céréale pour des protéines complètes. Un produit laitier est servi quatre jours sur cinq. Le poisson n\'est servi qu\'une fois : on pourrait en ajouter un second. Les menus sont donc globalement adaptés au PNNS.',
      grille: ['Repères du PNNS cités', 'Comptage juste dans les menus', 'Comparaison repère par repère', 'Point faible repéré', 'Conclusion'] },
    { id: 'stav-gra-m5', mat: 'stav-gra', titre: 'Identifier et justifier des enjeux',
      formules: ['En s\'appuyant sur le cas concret étudié, le corpus documentaire et votre expérience personnelle, identifier et justifier des enjeux', 'Identifier et justifier des enjeux en matière de biodiversité, liés au choix de favoriser l\'élevage'],
      vu: ['Bac 2025 métropole (champagne) : consigne 5 (enjeux du changement climatique sur la production de vin)', 'Bac 2023 métropole (râle des genêts) : consigne 5 (enjeux de biodiversité liés à l\'élevage dans les espaces naturels sensibles)'],
      pts: 'Environ 5 à 6 points sur 20 (compétence « identifier des enjeux »)',
      attendu: 'Une courte réponse rédigée : une introduction qui borne le sujet, puis un paragraphe par enjeu. Chaque enjeu est identifié, expliqué et justifié par le corpus ou par l\'expérience personnelle (stage, exploitation du lycée). Les enjeux sont classés (positifs et négatifs, ou par pilier de la durabilité).',
      etapes: ['Introduction : reformuler la question et annoncer les enjeux.', 'Lister les enjeux en pensant aux trois piliers et aux ressources (eau, sol, biodiversité, climat, santé).', 'Pour chaque enjeu : le nommer, l\'expliquer, le justifier par un document ou une expérience.', 'Classer : positif ou négatif, à court ou long terme.', 'Conclusion d\'une phrase.'],
      mots: ['enjeu', 'durabilité', 'ressource', 'biodiversité', 'adaptation', 'changement climatique', 'acteurs', 'échelle'],
      pieges: ['Faire une liste sans justifier.', 'Oublier l\'introduction et le classement, notés dans la grille.', 'Ne pas utiliser son expérience personnelle.', 'Sortir du sujet en décrivant à nouveau les documents.'],
      cas: 'Cas inventé : une communauté de communes fictive veut transformer 30 hectares de prairies pâturées en zone de cultures de céréales irriguées pour augmenter la production locale.',
      question: 'Identifiez et justifiez des enjeux liés à ce projet.',
      modele: 'Ce projet pose des enjeux économiques, sociaux et environnementaux. Enjeu économique positif : les céréales irriguées augmenteraient la production et le revenu à l\'hectare. Enjeu social : l\'élevage qui utilisait ces prairies pourrait disparaître, avec ses emplois et son rôle dans l\'entretien du paysage. Enjeu environnemental négatif : le labour des prairies libérerait le carbone stocké dans le sol, et la biodiversité des prairies (insectes pollinisateurs, oiseaux nicheurs) diminuerait. Enjeu sur la ressource en eau : l\'irrigation prélèverait de l\'eau, de plus en plus rare l\'été avec le changement climatique ; sur l\'exploitation du lycée, les restrictions d\'irrigation ont déjà eu lieu plusieurs étés. Le projet doit donc être discuté avec tous les acteurs du territoire.',
      grille: ['Introduction qui borne le sujet', 'Au moins trois enjeux identifiés', 'Chaque enjeu justifié', 'Classement des enjeux', 'Appui sur le corpus ou l\'expérience personnelle'] },
  ],
  sujets: [
    { id: 'stav-gra-s1', matiere: 'stav-gra', titre: 'Sujet d\'entraînement inventé : « Le plateau des Gentianes »', duree: 150,
      enonce: `## Sujet d'entraînement (entièrement inventé)

Le territoire, les personnes, les structures et tous les chiffres de ce sujet sont fictifs. Durée : 2 h 30. Aucun document ni matériel autorisé. Noté sur 20 points.

**Le plateau des Gentianes : un élevage laitier de montagne face au changement climatique**

Le plateau des Gentianes est une région inventée de moyenne montagne, à 900 mètres d'altitude. 120 exploitations laitières y produisent le lait d'un fromage sous AOP, le « Bleu des Gentianes ». Le cahier des charges impose des vaches de races locales, au moins 1 hectare de prairie par vache, une alimentation à base d'herbe et de foin produits sur la zone, et interdit l'ensilage. La filière fait vivre 900 emplois (élevages, fromageries, affinage, tourisme) et le lait est payé 25 % de plus que le lait standard. Les prairies permanentes couvrent 85 % de la surface agricole.

Depuis dix ans, les étés sont plus secs : la pousse de l'herbe s'arrête en juillet et les éleveurs doivent acheter du foin. Certains proposent d'irriguer, d'autres de planter des haies et des arbres dans les prairies.

**Document 1 : production d'herbe sur le plateau (moyenne, tonnes de matière sèche par hectare et par an)**
- 2014 à 2016 : 7,5 t. 2021 à 2023 : 6,0 t.
- Un hectare de prairie nourrit environ 1 vache si la production dépasse 6,5 t.

**Document 2 : une parcelle en agroforesterie (essai fictif de la chambre d'agriculture)**
- Rangées d'arbres tous les 30 mètres dans une prairie pâturée.
- En été, la température au sol sous les arbres est inférieure de 4 °C ; l'herbe pousse trois semaines de plus.
- Nombre d'espèces d'oiseaux nicheurs : 6 sans arbres, 15 avec arbres.
- Les feuilles de frêne et de mûrier peuvent être données aux vaches en été.
- La première année, la surface d'herbe diminue de 5 % à cause des rangées d'arbres.

**Document 3 : la composition du lait selon l'alimentation**
- Lait de vaches nourries à l'herbe : plus riche en oméga 3 et en vitamine A que le lait de vaches nourries au maïs ensilé.

**Consignes**

1. À partir du texte d'introduction, associez des points saillants de la filière avec chacun des trois piliers de la durabilité. (3 points)
2. À l'aide du document 1, montrez que le changement climatique menace l'autonomie alimentaire des élevages. Expliquez pourquoi la production d'herbe baisse quand l'été est sec, en vous appuyant sur la photosynthèse et la nutrition de la plante. (4 points)
3. À l'aide du document 2, présentez les services écosystémiques rendus par l'agroforesterie et discutez de son intérêt pour les éleveurs. (4 points)
4. À l'aide du document 3 et de vos connaissances, montrez l'intérêt nutritionnel du lait de vaches nourries à l'herbe pour le consommateur. (3 points)
5. En vous appuyant sur le cas étudié, les documents et votre expérience personnelle, identifiez et justifiez des enjeux liés au choix entre l'irrigation des prairies et l'agroforesterie. (6 points)`,
      corrige: `## Corrigé

**1. Les trois piliers (3 points)**
- Économique : le lait est payé 25 % de plus que le lait standard grâce à l'AOP ; la filière valorise un produit typique et fait vivre 120 exploitations.
- Social : 900 emplois sur le territoire, dans l'élevage, la fromagerie, l'affinage et le tourisme ; un savoir-faire et un patrimoine maintenus.
- Environnemental : prairies permanentes sur 85 % de la surface, qui stockent du carbone et abritent la biodiversité ; races locales adaptées ; alimentation à l'herbe produite sur place, donc peu d'achats extérieurs.

**2. Herbe et changement climatique (4 points)**
- La production d'herbe est passée de 7,5 à 6,0 t de matière sèche par hectare, soit une baisse de 20 %. Elle est maintenant sous le seuil de 6,5 t nécessaire pour nourrir une vache par hectare : avec le chargement imposé par le cahier des charges, les élevages ne peuvent plus nourrir leurs vaches avec leurs seules prairies et doivent acheter du foin. Leur autonomie alimentaire diminue.
- Explication : pour produire de la matière organique, la plante réalise la photosynthèse (CO₂ + eau, grâce à la lumière, donnent du glucose et du dioxygène). L'eau est prélevée par les poils absorbants des racines et monte par la sève brute. En été sec, le sol manque d'eau : la plante ferme ses stomates pour limiter la transpiration, ce qui bloque aussi l'entrée du CO₂. La photosynthèse ralentit, puis la pousse s'arrête.

**3. Agroforesterie (4 points)**
- Services de régulation : les arbres font de l'ombre et baissent la température au sol de 4 °C, ce qui limite l'évaporation ; l'herbe pousse trois semaines de plus. Ils stockent du carbone dans le bois et les racines.
- Biodiversité : 15 espèces d'oiseaux nicheurs au lieu de 6 ; les oiseaux peuvent réguler des insectes ravageurs.
- Approvisionnement : les feuilles de frêne et de mûrier fournissent un fourrage d'été.
- Discussion : la surface d'herbe baisse de 5 % la première année, et les arbres demandent du travail et du temps avant d'être utiles. Mais le gain de trois semaines de pousse et le fourrage des arbres compensent largement cette perte à moyen terme : l'agroforesterie renforce l'autonomie des élevages.

**4. Intérêt nutritionnel (3 points)**
- Le lait à l'herbe est plus riche en oméga 3, des acides gras insaturés indispensables, que le corps ne sait pas fabriquer et qui protègent le cœur et les vaisseaux.
- Il est plus riche en vitamine A, utile à la vision, à la peau et à l'immunité.
- Comme tout lait, il apporte du calcium (rôle plastique pour les os) et des protéines. Le PNNS recommande deux produits laitiers par jour : ce lait aide à couvrir les besoins avec une meilleure qualité des matières grasses.

**5. Enjeux (6 points)**
- Introduction : face aux étés secs, les éleveurs hésitent entre irriguer et planter des arbres ; ce choix pose des enjeux économiques, sociaux et environnementaux.
- Enjeu de la ressource en eau : l'irrigation prélèverait de l'eau au moment où elle est la plus rare, au détriment des autres usages (eau potable, rivières). L'agroforesterie économise l'eau en limitant l'évaporation.
- Enjeu économique : l'irrigation donne un effet rapide mais coûte cher (matériel, énergie, eau) ; l'agroforesterie coûte moins mais demande plusieurs années avant de rapporter. Dans les deux cas, garder l'autonomie protège le revenu et le prix de l'AOP.
- Enjeu de respect du cahier des charges et de l'image de l'AOP : les consommateurs attendent un lait d'herbe produit sur la zone ; acheter beaucoup de foin extérieur affaiblirait le lien au terroir.
- Enjeu de biodiversité et de climat : les arbres augmentent la biodiversité et stockent du carbone ; l'irrigation ne rend pas ces services.
- Enjeu social : maintenir les 900 emplois et des exploitations viables dans une zone de montagne. Sur l'exploitation du lycée ou en stage, on observe que l'ombre des haies attire les vaches aux heures chaudes, signe de bien-être animal.
- Classement : l'irrigation répond à court terme mais aggrave la pression sur l'eau ; l'agroforesterie est une adaptation de long terme, plus durable.`,
      grille: [
        { c: 'Consigne 1 : points saillants classés dans les trois piliers, tirés du contexte', pts: 3 },
        { c: 'Consigne 2 : calcul de la baisse, comparaison au seuil, explication par la photosynthèse, l\'eau et les stomates', pts: 4 },
        { c: 'Consigne 3 : services de régulation, biodiversité et approvisionnement justifiés, limite discutée', pts: 4 },
        { c: 'Consigne 4 : oméga 3, vitamine A et calcium reliés à leurs rôles et au PNNS', pts: 3 },
        { c: 'Consigne 5 : introduction, enjeux identifiés, justifiés, classés et appuyés sur le corpus ou l\'expérience personnelle', pts: 6 },
      ] },
  ],
};
