// Chimie, biologie et physiopathologie humaines (CBPH) — spécialité, terminale ST2S. Sources : voir matiere.sources.
// Programme : arrêté du 19 juillet 2019, BO spécial n° 8 du 25 juillet 2019.
// Épreuve : note de service n° 2020-013 du 11 février 2020, version consolidée d'août 2024 : écrit de 4 h,
// partie chimie (1 h, sur 20, coefficient 3) et partie biologie et physiopathologie humaines (3 h, sur 20, coefficient 13).
export default {
  matiere: {
    id: 'st2s-cbph',
    nom: 'Chimie, biologie et physiopathologie humaines',
    voie: 'st2s',
    epreuve: { type: 'ecrit', duree: 240, coef: 16, quand: 'juin', note: 'Écrit de 4 h en deux parties sur deux copies : chimie (environ 1 h, deux exercices, sur 20, coefficient 3) et biologie et physiopathologie humaines (environ 3 h, sur 20, coefficient 13)' },
    sources: [
      "https://www.education.gouv.fr/bo/19/Special8/MENE1921258A.htm",
      "https://eduscol.education.gouv.fr/sites/default/files/document/nds-consolidee-definition-epreuve-bac-voie-tst2spdf-102147.pdf",
      "https://www.education.gouv.fr/bo/20/Special2/MENE2001091N.htm",
      "https://pedagogie.ac-strasbourg.fr/fileadmin/pedagogie/biotechnologies/Enseignement_technologique/Filieres_pre-bac/ST2S/Reforme_2019/0_progression_CPBH_exemplev2.docx",
      "https://www.letudiant.fr/bac/revisions-bac/article/bac-st2s-les-sujets-probables-en-biologie-et-physiopathologie-humaines.html",
    ],
    chapitres: [
      { id: "st2s-cbph-1", t: "Milieu intérieur, homéostasie et fonction rénale", theme: "Biologie : milieu intérieur et homéostasie" },
      { id: "st2s-cbph-2", t: "Régulation de la glycémie et diabètes", theme: "Biologie : milieu intérieur et homéostasie" },
      { id: "st2s-cbph-3", t: "Cellule, ADN et du gène à la protéine", theme: "Biologie : gènes et transmission de l'information génétique" },
      { id: "st2s-cbph-4", t: "Transmission des caractères héréditaires et cancer", theme: "Biologie : gènes et transmission de l'information génétique" },
      { id: "st2s-cbph-5", t: "Maladies infectieuses, agents pathogènes et grippe", theme: "Biologie : système immunitaire et défense de l'organisme" },
      { id: "st2s-cbph-6", t: "Immunité innée, immunité acquise et vaccination", theme: "Biologie : système immunitaire et défense de l'organisme" },
      { id: "st2s-cbph-7", t: "Appareil reproducteur et régulation hormonale", theme: "Biologie : appareil reproducteur et transmission de la vie" },
      { id: "st2s-cbph-8", t: "Fécondation, grossesse, infertilité et AMP", theme: "Biologie : appareil reproducteur et transmission de la vie" },
      { id: "st2s-cbph-9", t: "Chimie : prévenir et sécuriser (aliments, eau, air, route)", theme: "Chimie : prévenir et sécuriser" },
      { id: "st2s-cbph-10", t: "Chimie : imagerie médicale et radioactivité", theme: "Chimie : analyser et diagnostiquer" },
      { id: "st2s-cbph-11", t: "Chimie : analyses médicales et dosages", theme: "Chimie : analyser et diagnostiquer" },
      { id: "st2s-cbph-12", t: "Chimie : protéines, lipides, vitamines et médicaments", theme: "Chimie : faire des choix autonomes et responsables" },
    ],
  },
  paquets: [
    {
      chapitre: "st2s-cbph-1",
      fiche: `## Milieu intérieur, homéostasie et fonction rénale

Nos cellules baignent dans un liquide dont la composition doit rester presque constante. Le maintien de cet équilibre s'appelle l'**homéostasie**. Le **rein** y joue un rôle central : il épure le sang et règle sa teneur en eau et en ions.

### Le milieu intérieur
- Le **milieu intérieur** est l'ensemble des **liquides extracellulaires** : le **plasma** (partie liquide du sang), le **liquide interstitiel** (entre les cellules) et la **lymphe**.
- La notion a été définie au XIXe siècle par le physiologiste français **Bernard** : la fixité du milieu intérieur est la condition d'une vie libre.
- Quelques **constantes** à connaître : **pH sanguin** 7,35 à 7,45 ; **température** environ 37 °C ; **glycémie** à jeun 0,70 à 1,10 g/L ; **natrémie** (sodium) environ 140 mmol/L.
- Une **régulation** comprend : un **capteur** qui détecte l'écart, un **centre intégrateur** qui compare à la valeur de consigne, des **effecteurs** qui corrigent. C'est souvent un **rétrocontrôle négatif** : la correction s'oppose à l'écart.

### Anatomie de l'appareil urinaire
- Deux **reins** (dans la région lombaire, en arrière de la cavité abdominale), deux **uretères**, la **vessie**, l'**urètre**.
- En coupe, le rein montre le **cortex** (périphérie), la **médulla** (pyramides) et le **bassinet** qui recueille l'urine.
- L'unité fonctionnelle est le **néphron** (environ un million par rein) : **glomérule** dans la **capsule de Bowman**, puis **tubule contourné proximal**, **anse de Henlé**, **tubule contourné distal**, **tube collecteur**.
- Examen d'imagerie : l'**urographie intraveineuse (UIV)** utilise un produit de contraste iodé éliminé par le rein ; on utilise aussi l'échographie et le scanner.

### La formation de l'urine
- **Filtration glomérulaire** : le sang est filtré dans le glomérule ; environ **180 L** d'**urine primitive** par jour. Les grosses molécules (protéines) et les cellules du sang ne passent pas.
- **Réabsorption tubulaire** : l'essentiel de l'eau, le **glucose** (en totalité normalement), les ions repassent dans le sang.
- **Sécrétion tubulaire** : certaines substances (ions H+, médicaments) passent du sang vers le tubule.
- Résultat : environ **1,5 L d'urine définitive** par jour, qui contient de l'eau, de l'**urée**, de la **créatinine**, des ions.
- **Hormones** : l'**ADH** (hormone antidiurétique, libérée par l'hypophyse) augmente la réabsorption d'eau ; l'**aldostérone** (corticosurrénale) augmente la réabsorption de sodium.
- Le **seuil rénal du glucose** est d'environ **1,8 g/L** : au-dessus, le glucose apparaît dans l'urine (**glycosurie**).

### Les fonctions du rein
- **Épuration** des déchets (urée, créatinine, acide urique) et des **xénobiotiques** (substances étrangères : médicaments, polluants).
- **Équilibre hydrique et ionique**, contrôle de la **pression artérielle**.
- **Fonctions endocrines** : l'**EPO** (érythropoïétine) stimule la production de globules rouges ; activation de la **vitamine D**.

### Une pathologie : l'insuffisance rénale chronique
- Baisse progressive et définitive de la filtration. Causes principales : **diabète** et **hypertension artérielle**.
- Diagnostic : **créatininémie** élevée et **débit de filtration glomérulaire** (DFG) bas, protéinurie.
- Conséquences : œdèmes, hypertension, anémie (manque d'EPO), accumulation d'urée.
- Traitements : régime, médicaments, puis **dialyse** (**hémodialyse** à l'hôpital, plusieurs fois par semaine, ou **dialyse péritonéale**) ou **greffe de rein**.

### À retenir pour le bac
- Milieu intérieur = liquides extracellulaires ; homéostasie = constance grâce à des régulations.
- Néphron : filtration, réabsorption, sécrétion. 180 L filtrés, 1,5 L d'urine.
- Racines : **néphr(o)** et **rén(o)** = rein ; **ur(o)** = urine ; **cyst(o)** = vessie. Exemples : néphrite, anurie (pas d'urine), oligurie, polyurie, hématurie (sang dans l'urine).`,
      cartes: [
        { q: "Qu'est-ce que le milieu intérieur ?", r: "L'ensemble des liquides extracellulaires : plasma, liquide interstitiel et lymphe." },
        { q: "Qu'est-ce que l'homéostasie ?", r: "Le maintien des constantes du milieu intérieur grâce à des régulations." },
        { q: "Quelles sont les étapes d'une régulation ?", r: "Un capteur détecte l'écart, un centre intégrateur compare à la consigne, des effecteurs corrigent." },
        { q: "Quelle est la valeur normale du pH sanguin ?", r: "Entre 7,35 et 7,45." },
        { q: "Qu'est-ce que le néphron ?", r: "L'unité fonctionnelle du rein : glomérule, capsule de Bowman, tubules et tube collecteur." },
        { q: "Quelles sont les trois étapes de la formation de l'urine ?", r: "Filtration glomérulaire, réabsorption tubulaire, sécrétion tubulaire." },
        { q: "Combien de litres de sang sont filtrés par jour, et combien d'urine produit-on ?", r: "Environ 180 L d'urine primitive filtrée, pour environ 1,5 L d'urine définitive." },
        { q: "Quel est le rôle de l'ADH ?", r: "L'hormone antidiurétique augmente la réabsorption d'eau par le rein : l'urine est plus concentrée." },
        { q: "Quel est le seuil rénal du glucose ?", r: "Environ 1,8 g/L : au-dessus, le glucose passe dans l'urine (glycosurie)." },
        { q: "Quelle hormone du rein stimule la production de globules rouges ?", r: "L'EPO (érythropoïétine)." },
        { q: "Quelles sont les deux causes principales de l'insuffisance rénale chronique ?", r: "Le diabète et l'hypertension artérielle." },
        { q: "Quel dosage sanguin évalue la fonction rénale ?", r: "La créatininémie, qui permet d'estimer le débit de filtration glomérulaire." },
        { q: "Que signifient anurie, oligurie et polyurie ?", r: "Absence d'urine, peu d'urine, beaucoup d'urine." },
        { q: "Quels sont les traitements de l'insuffisance rénale terminale ?", r: "La dialyse (hémodialyse ou dialyse péritonéale) ou la greffe de rein." },
      ],
      quiz: [
        { q: "Quel liquide fait partie du milieu intérieur ?", choix: ["Le cytoplasme des cellules","Le suc gastrique de l'estomac","Le liquide interstitiel","L'urine stockée dans la vessie"], bonne: 2, expl: "Le milieu intérieur regroupe les liquides extracellulaires : plasma, liquide interstitiel, lymphe.", niv: 1 },
        { q: "Quelle est l'unité fonctionnelle du rein ?", choix: ["Le neurone","L'alvéole","Le sarcomère","Le néphron"], bonne: 3, expl: "Chaque rein contient environ un million de néphrons.", niv: 1 },
        { q: "Que signifie le terme « hématurie » ?", choix: ["Du sang dans l'urine","Une absence d'urine","Un excès de glucose dans le sang","Une infection de la vessie"], bonne: 0, expl: "Hémat- = sang ; -urie = urine.", niv: 1 },
        { q: "Quelle hormone augmente la réabsorption d'eau par le rein ?", choix: ["L'insuline","Le glucagon","La FSH","L'ADH"], bonne: 3, expl: "L'hormone antidiurétique rend l'urine plus concentrée.", niv: 1 },
        { q: "Où a lieu la filtration du sang dans le néphron ?", choix: ["Dans l'anse de Henlé","Dans le glomérule","Dans le tube collecteur","Dans le tubule distal"], bonne: 1, expl: "Le glomérule, entouré de la capsule de Bowman, filtre le plasma.", niv: 2 },
        { q: "Un patient a une glycémie de 2,5 g/L. Que trouve-t-on dans ses urines ?", choix: ["Du glucose","Des globules rouges","Des protéines du plasma","Du sang en grande quantité"], bonne: 0, expl: "La glycémie dépasse le seuil rénal (1,8 g/L) : le glucose n'est plus totalement réabsorbé.", niv: 2 },
        { q: "Pourquoi l'urine normale ne contient-elle pas de protéines ?", choix: ["Elles sont détruites par la vessie","Elles sont transformées en glucose","Elles sont sécrétées dans l'intestin","Elles sont trop grosses pour être filtrées"], bonne: 3, expl: "La barrière du glomérule retient les grosses molécules et les cellules.", niv: 2 },
        { q: "Quel dosage indique une baisse de la fonction rénale ?", choix: ["Une glycémie basse","Un pH sanguin à 7,40","Une créatininémie élevée","Une natrémie à 140 mmol/L"], bonne: 2, expl: "La créatinine, mal éliminée, s'accumule dans le sang.", niv: 2 },
        { q: "Un insuffisant rénal est souvent anémié. Pourquoi ?", choix: ["Il perd du sang par l'urine","Son foie détruit les globules rouges","La dialyse filtre ses globules rouges","Son rein produit moins d'EPO"], bonne: 3, expl: "Le rein malade sécrète moins d'érythropoïétine, qui stimule la production de globules rouges.", niv: 2 },
        { q: "La température du corps monte ; la sudation augmente. Quel est le rôle de la sudation ?", choix: ["Capteur de la régulation","Effecteur d'un rétrocontrôle négatif","Centre intégrateur de la régulation","Valeur de consigne de la régulation"], bonne: 1, expl: "La sueur corrige l'écart en refroidissant le corps : c'est un effecteur.", niv: 3 },
        { q: "On filtre 180 L par jour et on produit 1,5 L d'urine. Qu'en déduit-on ?", choix: ["Le rein sécrète 178 L d'eau dans le sang","Le glomérule filtre très mal le plasma","La vessie absorbe la plus grande partie de l'eau","Plus de 99 % de l'eau filtrée est réabsorbée"], bonne: 3, expl: "178,5 L sur 180 L retournent dans le sang : la réabsorption tubulaire est massive.", niv: 3 },
        { q: "Pourquoi l'hémodialyse doit-elle être répétée plusieurs fois par semaine ?", choix: ["Le rein se répare un peu plus à chaque séance","Les déchets s'accumulent à nouveau entre les séances","Le dialyseur s'use et doit être changé chaque jour","Les globules rouges se renouvellent chaque semaine"], bonne: 1, expl: "La dialyse remplace la fonction d'épuration sans guérir le rein : les déchets reviennent.", niv: 3 },
      ],
    },
    {
      chapitre: "st2s-cbph-2",
      fiche: `## Régulation de la glycémie et diabètes

La **glycémie** est la concentration de glucose dans le sang. Le glucose est le carburant principal des cellules, en particulier des neurones. La glycémie est maintenue autour de **1 g/L** par une régulation hormonale. Son dérèglement, le **diabète**, est un enjeu majeur de santé publique.

### Les valeurs à connaître
- Glycémie normale **à jeun** : **0,70 à 1,10 g/L** (soit environ 3,9 à 6,1 mmol/L).
- **Hypoglycémie** : en dessous de 0,60 g/L environ (malaise, sueurs, tremblements, voire coma).
- **Hyperglycémie** : au-dessus de la normale. Diabète : glycémie à jeun **supérieure ou égale à 1,26 g/L** à deux reprises, ou **2 g/L** à n'importe quel moment avec des symptômes.

### Le stockage et la libération du glucose
- Le **foie** stocke le glucose sous forme de **glycogène** (**glycogénogenèse**) et peut le libérer dans le sang (**glycogénolyse**). Il peut aussi fabriquer du glucose à partir d'autres molécules (**néoglucogenèse**).
- Les **muscles** stockent du glycogène mais ne le libèrent pas dans le sang.
- Le **tissu adipeux** stocke l'énergie sous forme de **triglycérides** (lipogenèse).

### Les hormones du pancréas
- Le **pancréas** est une glande **mixte** : exocrine (suc pancréatique) et endocrine (**îlots de Langerhans**).
- Les **cellules bêta** sécrètent l'**insuline**, seule hormone **hypoglycémiante** : elle fait entrer le glucose dans les cellules (muscles, tissu adipeux) et favorise son stockage en glycogène.
- Les **cellules alpha** sécrètent le **glucagon**, hormone **hyperglycémiante** : il agit sur le foie pour libérer du glucose (glycogénolyse).
- C'est une **régulation par rétrocontrôle négatif** : capteurs et centre intégrateur sont les cellules du pancréas, les effecteurs sont le foie, les muscles et le tissu adipeux.
- D'autres hormones sont hyperglycémiantes : **adrénaline**, **cortisol**.

### Les diabètes
**Diabète de type 1**
- Maladie **auto-immune** : le système immunitaire détruit les cellules bêta. Il n'y a **plus d'insuline**.
- Apparaît souvent chez l'enfant ou l'adulte jeune, brutalement : **polyurie** (beaucoup d'urine), **polydipsie** (soif intense), **amaigrissement**, fatigue, glycosurie, parfois **acidocétose** grave.
- Traitement : **injections d'insuline** à vie (stylos, pompe), surveillance de la glycémie (capteurs).

**Diabète de type 2**
- Environ **90 %** des diabètes. Les cellules répondent mal à l'insuline (**insulinorésistance**), puis le pancréas s'épuise.
- Facteurs de risque : **surpoids**, sédentarité, alimentation déséquilibrée, âge, hérédité.
- Longtemps **silencieux** : souvent découvert par une prise de sang.
- Traitement : **règles hygiéno-diététiques** (alimentation, activité physique, perte de poids), puis médicaments (antidiabétiques oraux comme la metformine), parfois insuline.

### Suivi et complications
- **Hémoglobine glyquée (HbA1c)** : reflète la glycémie moyenne des 2 à 3 derniers mois. Objectif fréquent : moins de **7 %**.
- **Complications** dues à l'excès durable de glucose qui abîme les vaisseaux :
  - **microangiopathie** (petits vaisseaux) : **rétinopathie** (yeux), **néphropathie** (reins), **neuropathie** (nerfs) ;
  - **macroangiopathie** (gros vaisseaux) : infarctus, AVC, artérite ;
  - **pied diabétique** : plaies qui guérissent mal, risque d'amputation.

### À retenir pour le bac
- Insuline (cellules bêta) = hypoglycémiante ; glucagon (cellules alpha) = hyperglycémiant.
- Type 1 : plus d'insuline, auto-immun, insuline injectée. Type 2 : insulinorésistance, mode de vie.
- Racines : **gluc(o)**, **glyc(o)** = sucre ; **-émie** = dans le sang ; **-urie** = dans l'urine ; **dips-** = soif.`,
      cartes: [
        { q: "Quelle est la glycémie normale à jeun ?", r: "Entre 0,70 et 1,10 g/L." },
        { q: "À partir de quelle glycémie à jeun parle-t-on de diabète ?", r: "1,26 g/L ou plus, à deux reprises." },
        { q: "Quelles cellules sécrètent l'insuline ?", r: "Les cellules bêta des îlots de Langerhans du pancréas." },
        { q: "Quel est l'effet de l'insuline ?", r: "Elle fait baisser la glycémie : entrée du glucose dans les cellules et stockage en glycogène." },
        { q: "Quel est l'effet du glucagon ?", r: "Il fait monter la glycémie en faisant libérer du glucose par le foie (glycogénolyse)." },
        { q: "Qu'est-ce que la glycogénogenèse ?", r: "La fabrication de glycogène à partir de glucose, dans le foie et les muscles." },
        { q: "Pourquoi le pancréas est-il une glande mixte ?", r: "Il est exocrine (suc pancréatique) et endocrine (insuline et glucagon)." },
        { q: "Quelle est la cause du diabète de type 1 ?", r: "Une destruction auto-immune des cellules bêta : il n'y a plus d'insuline." },
        { q: "Quelle est la cause du diabète de type 2 ?", r: "Une insulinorésistance : les cellules répondent mal à l'insuline, puis le pancréas s'épuise." },
        { q: "Que signifient polyurie et polydipsie ?", r: "Polyurie : urines abondantes. Polydipsie : soif intense." },
        { q: "Qu'est-ce que l'hémoglobine glyquée (HbA1c) ?", r: "Un dosage qui reflète la glycémie moyenne des 2 à 3 derniers mois." },
        { q: "Cite trois complications de microangiopathie diabétique.", r: "Rétinopathie (yeux), néphropathie (reins), neuropathie (nerfs)." },
        { q: "Quel est le premier traitement du diabète de type 2 ?", r: "Les règles hygiéno-diététiques : alimentation équilibrée, activité physique, perte de poids." },
        { q: "Quels sont les signes d'une hypoglycémie ?", r: "Malaise, sueurs, tremblements, faim, confusion, parfois perte de connaissance." },
      ],
      quiz: [
        { q: "Quelle hormone fait baisser la glycémie ?", choix: ["Le glucagon","L'insuline","L'adrénaline","Le cortisol"], bonne: 1, expl: "L'insuline est la seule hormone hypoglycémiante.", niv: 1 },
        { q: "Où le foie stocke-t-il le glucose ?", choix: ["Sous forme d'amidon","Sous forme de cellulose","Sous forme de glycogène","Sous forme de protéines"], bonne: 2, expl: "Le glycogène est le polymère de glucose de réserve chez l'être humain.", niv: 1 },
        { q: "Que signifie le terme « polydipsie » ?", choix: ["Des urines abondantes","Une faim excessive","Un amaigrissement rapide","Une soif intense"], bonne: 3, expl: "Dips- = soif ; la polyurie concerne les urines, la polyphagie la faim.", niv: 1 },
        { q: "Quel examen reflète la glycémie des trois derniers mois ?", choix: ["La glycémie capillaire","L'hémoglobine glyquée","La créatininémie","Le dosage du glucagon"], bonne: 1, expl: "L'HbA1c dépend du temps passé par l'hémoglobine au contact du glucose.", niv: 1 },
        { q: "Un jeune de 12 ans maigrit, boit et urine beaucoup. Quel diabète est probable ?", choix: ["Un diabète de type 2","Un diabète de type 1","Un diabète gestationnel","Un diabète lié à l'âge"], bonne: 1, expl: "Début brutal chez un enfant, avec amaigrissement : signes typiques du type 1.", niv: 2 },
        { q: "Après un repas, la glycémie monte. Quelles cellules réagissent en premier ?", choix: ["Les cellules alpha du pancréas","Les cellules du tubule rénal","Les cellules bêta du pancréas","Les cellules musculaires du cœur"], bonne: 2, expl: "Elles détectent la hausse et sécrètent l'insuline.", niv: 2 },
        { q: "Quel est le principal facteur de risque du diabète de type 2 ?", choix: ["Une infection virale","Une maladie auto-immune","Un manque de glucagon","Le surpoids"], bonne: 3, expl: "Surpoids et sédentarité favorisent l'insulinorésistance.", niv: 2 },
        { q: "Pourquoi un diabétique de type 1 doit-il s'injecter de l'insuline ?", choix: ["Son pancréas n'en produit plus","Ses cellules résistent à l'insuline","Son foie détruit l'insuline","Ses reins éliminent l'insuline"], bonne: 0, expl: "Les cellules bêta sont détruites : il faut apporter l'hormone de l'extérieur.", niv: 2 },
        { q: "Pourquoi le glucagon agit-il sur le foie et non sur les muscles pour la glycémie ?", choix: ["Seul le foie peut libérer du glucose dans le sang","Les muscles ne contiennent pas de glycogène","Le glucagon ne passe pas dans le sang","Les muscles produisent leur propre glucagon"], bonne: 0, expl: "Le muscle garde son glycogène pour lui ; le foie, lui, peut libérer du glucose.", niv: 2 },
        { q: "Un patient a une HbA1c de 9 %. Que peut-on conclure ?", choix: ["Il a fait une hypoglycémie ce matin","Il n'est pas diabétique du tout","Son diabète est mal équilibré depuis des mois","Son diabète est très bien équilibré"], bonne: 2, expl: "L'objectif est souvent sous 7 % : 9 % traduit une glycémie trop haute depuis longtemps.", niv: 3 },
        { q: "Pourquoi le diabète peut-il entraîner une insuffisance rénale ?", choix: ["Le glucose bouche les uretères","L'insuline détruit les néphrons","L'excès de glucose abîme les petits vaisseaux du rein","La glycosurie infecte la vessie"], bonne: 2, expl: "C'est la néphropathie diabétique, une microangiopathie.", niv: 3 },
        { q: "Pourquoi le diabète de type 2 est-il souvent découvert tard ?", choix: ["Il ne se voit pas dans une prise de sang","Il apparaît surtout chez les enfants","Il guérit seul avant d'être détecté","Il reste longtemps sans symptômes"], bonne: 3, expl: "L'hyperglycémie modérée ne donne pas de signes : un dépistage par prise de sang est utile.", niv: 3 },
      ],
    },
    {
      chapitre: "st2s-cbph-3",
      fiche: `## Cellule, ADN et du gène à la protéine

Chaque cellule contient dans son **noyau** l'information génétique, portée par l'**ADN**. Cette information permet de fabriquer les **protéines**, qui font fonctionner la cellule. Une modification de l'ADN, une **mutation**, peut entraîner une maladie.

### L'ADN et les chromosomes
- L'**ADN** (acide désoxyribonucléique) est une **double hélice** formée de deux brins de **nucléotides**.
- Un nucléotide = un **sucre** (désoxyribose) + un **phosphate** + une **base azotée** : **A** (adénine), **T** (thymine), **G** (guanine), **C** (cytosine).
- Les bases sont **complémentaires** : A avec T, G avec C.
- Un **gène** est une portion d'ADN qui code une protéine. Ses versions différentes sont les **allèles**.
- L'ADN est enroulé autour de protéines (histones) : c'est la **chromatine**, qui se condense en **chromosomes** visibles pendant la division.
- L'être humain possède **46 chromosomes**, soit **23 paires** (22 paires d'autosomes et une paire de chromosomes sexuels, XX ou XY).

### Le cycle cellulaire
- **Interphase** : la cellule grandit et **réplique** son ADN (phase S). La réplication est **semi-conservative** : chaque nouvelle molécule garde un brin ancien.
- **Mitose** : division en deux cellules filles **identiques** (prophase, métaphase, anaphase, télophase). Elle permet la croissance et le renouvellement des tissus.

### Du gène à la protéine
**La transcription** (dans le noyau)
- Un brin du gène sert de modèle pour fabriquer un **ARN messager** (ARNm) grâce à l'**ARN polymérase**.
- L'ARN contient du **ribose** et la base **U** (uracile) à la place de T. Il est **simple brin**.
- L'ARNm sort du noyau par les **pores nucléaires**.

**La traduction** (dans le cytoplasme)
- Les **ribosomes** lisent l'ARNm par groupes de trois bases : les **codons**.
- Le **code génétique** fait correspondre chaque codon à un **acide aminé** : 64 codons pour 20 acides aminés (il est **redondant** : plusieurs codons pour un même acide aminé).
- Le codon **AUG** marque le début ; **UAA, UAG, UGA** sont des codons **stop**.
- Les acides aminés sont reliés par des **liaisons peptidiques** : on obtient une **protéine**, dont la forme dépend de la séquence.

### Les mutations
- Une **mutation** est une modification de la séquence de l'ADN : **substitution** (une base remplacée), **délétion** (une base perdue), **insertion** (une base ajoutée).
- Causes : erreurs de réplication, agents **mutagènes** (UV, rayons X, tabac, certains produits chimiques).
- Conséquences : aucune (mutation silencieuse grâce à la redondance du code), un acide aminé changé, ou une protéine raccourcie ou non fonctionnelle (décalage du cadre de lecture après une insertion ou une délétion).

### Un exemple : la drépanocytose
- Maladie génétique de l'**hémoglobine**, fréquente chez les personnes originaires d'Afrique, des Antilles et du bassin méditerranéen.
- Une **substitution** dans le gène de la bêta-globine remplace un acide aminé (acide glutamique) par un autre (**valine**) en position 6.
- L'hémoglobine anormale (**HbS**) forme des fibres quand elle manque d'oxygène : les **globules rouges** prennent une forme de **faucille**, se bloquent dans les petits vaisseaux et se détruisent.
- Signes : **anémie**, crises douloureuses, infections. Diagnostic : **électrophorèse de l'hémoglobine**.

### À retenir pour le bac
- ADN (désoxyribose, A-T-G-C, double brin) ; ARN (ribose, A-U-G-C, simple brin).
- Transcription dans le noyau, traduction dans le cytoplasme par les ribosomes.
- Mutation = changement de séquence ; drépanocytose = une substitution, une valine, des hématies en faucille.`,
      cartes: [
        { q: "Quelles sont les quatre bases de l'ADN ?", r: "Adénine (A), thymine (T), guanine (G), cytosine (C)." },
        { q: "Quelles bases sont complémentaires ?", r: "A avec T, G avec C (et A avec U entre ADN et ARN)." },
        { q: "Qu'est-ce qu'un gène ?", r: "Une portion d'ADN qui code une protéine." },
        { q: "Qu'est-ce qu'un allèle ?", r: "Une version d'un gène." },
        { q: "Combien de chromosomes possède une cellule humaine ?", r: "46, soit 23 paires (22 paires d'autosomes et une paire de chromosomes sexuels)." },
        { q: "Qu'est-ce que la réplication semi-conservative ?", r: "Chaque nouvelle molécule d'ADN garde un brin ancien et un brin nouveau." },
        { q: "Qu'est-ce que la transcription ?", r: "La fabrication d'un ARN messager à partir d'un gène, dans le noyau." },
        { q: "Quelles différences entre ADN et ARN ?", r: "L'ARN a du ribose, l'uracile à la place de la thymine, et un seul brin." },
        { q: "Qu'est-ce que la traduction ?", r: "La lecture de l'ARNm par les ribosomes pour assembler les acides aminés d'une protéine, dans le cytoplasme." },
        { q: "Qu'est-ce qu'un codon ?", r: "Un groupe de trois bases de l'ARNm qui correspond à un acide aminé ou à un signal stop." },
        { q: "Pourquoi dit-on que le code génétique est redondant ?", r: "Plusieurs codons peuvent coder le même acide aminé (64 codons pour 20 acides aminés)." },
        { q: "Quels sont les trois types de mutation ponctuelle ?", r: "La substitution, la délétion et l'insertion." },
        { q: "Quelle mutation provoque la drépanocytose ?", r: "Une substitution dans le gène de la bêta-globine : la valine remplace l'acide glutamique en position 6." },
        { q: "Quel examen diagnostique la drépanocytose ?", r: "L'électrophorèse de l'hémoglobine." },
      ],
      quiz: [
        { q: "Quelle base de l'ADN est complémentaire de la guanine ?", choix: ["La cytosine","L'adénine","La thymine","L'uracile"], bonne: 0, expl: "Dans l'ADN, G s'associe toujours à C, et A à T.", niv: 1 },
        { q: "Où se déroule la transcription ?", choix: ["Dans le ribosome","Dans la mitochondrie","Dans la membrane plasmique","Dans le noyau"], bonne: 3, expl: "L'ARNm est fabriqué dans le noyau, puis il en sort.", niv: 1 },
        { q: "Quelle base remplace la thymine dans l'ARN ?", choix: ["L'adénine","L'uracile","La guanine","La cytosine"], bonne: 1, expl: "L'ARN contient A, U, G et C.", niv: 1 },
        { q: "Quel organite réalise la traduction ?", choix: ["Le noyau","Le lysosome","Le ribosome","L'appareil de Golgi"], bonne: 2, expl: "Les ribosomes lisent l'ARNm et assemblent les acides aminés.", niv: 1 },
        { q: "Un brin d'ADN porte la séquence ATG CCA. Quelle est la séquence du brin complémentaire ?", choix: ["UAC GGU","TAC GGT","ATG CCA","GCA TTG"], bonne: 1, expl: "A s'associe à T et C à G ; l'uracile n'existe pas dans l'ADN.", niv: 2 },
        { q: "Combien de bases faut-il pour coder un acide aminé ?", choix: ["Trois bases","Une seule base","Deux bases","Quatre bases"], bonne: 0, expl: "Un codon = trois bases successives de l'ARNm.", niv: 2 },
        { q: "Une mutation remplace un codon par un autre codant le même acide aminé. Quelle conséquence ?", choix: ["La protéine est raccourcie","La protéine change de forme","La protéine reste identique","La protéine n'est plus produite"], bonne: 2, expl: "C'est une mutation silencieuse, permise par la redondance du code.", niv: 2 },
        { q: "Quel est le résultat d'une mitose ?", choix: ["Deux cellules filles identiques","Quatre cellules filles différentes","Une cellule avec deux fois plus d'ADN","Deux cellules avec 23 chromosomes"], bonne: 0, expl: "La mitose conserve le nombre de chromosomes et l'information génétique.", niv: 2 },
        { q: "Pourquoi les hématies d'un drépanocytaire bouchent-elles les petits vaisseaux ?", choix: ["Elles sont beaucoup trop nombreuses","Elles collent aux parois du cœur","Elles sont rigides et en forme de faucille","Elles contiennent trop d'oxygène"], bonne: 2, expl: "L'hémoglobine S forme des fibres qui déforment et rigidifient le globule rouge.", niv: 2 },
        { q: "Une délétion d'une base au début d'un gène a souvent des effets graves. Pourquoi ?", choix: ["Elle remplace un seul acide aminé de la protéine","Elle décale la lecture de tous les codons suivants","Elle double la longueur de la protéine","Elle empêche la réplication de l'ADN"], bonne: 1, expl: "Le cadre de lecture est décalé : la suite de la protéine est changée ou un stop apparaît.", niv: 3 },
        { q: "Les cellules du foie et de la peau ont le même ADN mais des protéines différentes. Pourquoi ?", choix: ["Elles n'expriment pas les mêmes gènes","Elles n'ont pas les mêmes chromosomes","Leur ADN a subi des mutations différentes","Elles n'ont pas le même code génétique"], bonne: 0, expl: "Toutes les cellules ont le même génome, mais chaque type en active une partie différente.", niv: 3 },
        { q: "Pourquoi les UV augmentent-ils le risque de mutation dans la peau ?", choix: ["Ils accélèrent la traduction des protéines","Ils sont mutagènes et abîment l'ADN","Ils détruisent les ribosomes des cellules","Ils empêchent la mitose des cellules"], bonne: 1, expl: "Les UV provoquent des lésions de l'ADN qui peuvent devenir des mutations.", niv: 3 },
      ],
    },
    {
      chapitre: "st2s-cbph-4",
      fiche: `## Transmission des caractères héréditaires et cancer

Les caractères héréditaires passent des parents aux enfants grâce aux **gamètes**, formés par la **méiose**. Savoir lire un **arbre généalogique** et un **caryotype** permet de comprendre les maladies génétiques. Le **cancer**, lui, vient de mutations qui s'accumulent dans les cellules du corps.

### La méiose
- La **méiose** produit les **gamètes** (spermatozoïdes, ovules). Elle comprend **deux divisions** successives et donne **quatre cellules haploïdes** (23 chromosomes, un seul de chaque paire).
- Elle crée de la **diversité** : les chromosomes de chaque paire se répartissent au hasard (**brassage interchromosomique**) et échangent des morceaux (**crossing-over**, brassage intrachromosomique).
- La **fécondation** réunit deux gamètes haploïdes : la cellule-œuf est **diploïde** (46 chromosomes).

### Le caryotype
- Le **caryotype** est la photographie des chromosomes d'une cellule, classés par paires et par taille.
- Caryotype normal : **46,XX** (femme) ou **46,XY** (homme).
- **Trisomie 21** (syndrome de Down) : trois chromosomes 21, soit **47 chromosomes**. Elle vient d'une **mauvaise séparation** des chromosomes pendant la méiose (non-disjonction). Le risque augmente avec l'âge de la mère.

### Dominant, récessif et arbres généalogiques
- Un individu a **deux allèles** de chaque gène (un de chaque parent). **Homozygote** : deux allèles identiques ; **hétérozygote** : deux allèles différents.
- Un allèle **dominant** s'exprime même en un seul exemplaire ; un allèle **récessif** ne s'exprime que s'il est en double (homozygote).
- **Transmission autosomique récessive** : deux parents sains peuvent avoir un enfant malade ; ils sont alors tous deux **hétérozygotes** (porteurs sains). Risque pour chaque enfant : **1 sur 4**. Exemples : **mucoviscidose** (gène CFTR, mucus épais dans les poumons et le pancréas), **drépanocytose**.
- **Transmission autosomique dominante** : un malade a en général un parent malade. Exemple : la **chorée de Huntington**.
- **Transmission liée à l'X** (récessive) : touche surtout les **garçons**, qui n'ont qu'un X ; la mère est souvent porteuse saine. Exemples : **hémophilie**, **myopathie de Duchenne**, daltonisme.
- Dans un arbre généalogique : carré = homme, rond = femme, symbole plein = malade.

### Le diagnostic prénatal
- **Dépistage** proposé à toutes les femmes enceintes : mesure de la **clarté nucale** à l'échographie du premier trimestre et **marqueurs sériques** dans le sang de la mère. Il donne un **risque**.
- Si le risque est élevé : analyse de l'**ADN fœtal libre** dans le sang maternel, puis **diagnostic** par **amniocentèse** (prélèvement de liquide amniotique) ou **choriocentèse** (prélèvement de trophoblaste), qui permettent de faire le caryotype du fœtus. Ces gestes comportent un petit risque de fausse couche.

### Le cancer
- Un **cancer** est une prolifération **anarchique** de cellules qui ne répondent plus aux signaux de contrôle. Il naît de l'accumulation de **mutations** dans une cellule.
- Gènes en cause : **proto-oncogènes** (qui stimulent la division et deviennent des **oncogènes** suractivés) et **gènes suppresseurs de tumeur** (qui freinent la division, inactivés).
- **Tumeur bénigne** : bien limitée, ne se propage pas. **Tumeur maligne** : envahit les tissus voisins et peut donner des **métastases** par le sang ou la lymphe.
- Facteurs de risque : **tabac** (premier facteur évitable), **alcool**, **UV**, certains virus (**papillomavirus**, HPV), obésité, âge, prédisposition héréditaire.
- Diagnostic : imagerie (scanner, IRM, mammographie), **biopsie** et examen au microscope (**anatomopathologie**). Dépistages organisés : cancer du **sein** (mammographie de 50 à 74 ans), **colorectal**, **col de l'utérus**.
- Traitements : **chirurgie**, **chimiothérapie**, **radiothérapie**, hormonothérapie, **immunothérapie**, thérapies ciblées.

### À retenir pour le bac
- Méiose = 4 gamètes haploïdes et diversité ; fécondation = retour à 46 chromosomes.
- Récessif autosomique : parents sains porteurs, risque 1/4. Lié à l'X : surtout des garçons.
- Cancer = mutations accumulées ; tumeur maligne = métastases. Racines : **onco-** = tumeur, **-ome** = tumeur, **carcino-** = cancer.`,
      cartes: [
        { q: "Qu'est-ce que la méiose ?", r: "Deux divisions successives qui produisent quatre gamètes haploïdes (23 chromosomes) génétiquement différents." },
        { q: "Que signifient haploïde et diploïde ?", r: "Haploïde : un chromosome de chaque paire (23). Diploïde : des paires de chromosomes (46)." },
        { q: "Qu'est-ce qu'un caryotype ?", r: "La photographie des chromosomes d'une cellule, classés par paires et par taille." },
        { q: "Quel est le caryotype d'une personne atteinte de trisomie 21 ?", r: "47 chromosomes, avec trois chromosomes 21 (47,XX,+21 ou 47,XY,+21)." },
        { q: "Que signifient homozygote et hétérozygote ?", r: "Homozygote : deux allèles identiques. Hétérozygote : deux allèles différents." },
        { q: "Qu'est-ce qu'un allèle récessif ?", r: "Un allèle qui ne s'exprime que s'il est présent en deux exemplaires." },
        { q: "Deux parents sains ont un enfant atteint de mucoviscidose. Que sont les parents ?", r: "Tous deux hétérozygotes, porteurs sains de l'allèle récessif." },
        { q: "Quel est le risque pour un enfant de deux porteurs sains d'une maladie récessive ?", r: "1 sur 4 à chaque grossesse." },
        { q: "Pourquoi l'hémophilie touche-t-elle surtout les garçons ?", r: "Le gène est sur le chromosome X ; les garçons n'ont qu'un X, donc un seul allèle malade suffit." },
        { q: "Qu'est-ce qu'une amniocentèse ?", r: "Un prélèvement de liquide amniotique pour faire le caryotype du fœtus." },
        { q: "Qu'est-ce qu'un cancer ?", r: "Une prolifération anarchique de cellules issue de l'accumulation de mutations." },
        { q: "Quelle différence entre tumeur bénigne et maligne ?", r: "La bénigne reste limitée ; la maligne envahit les tissus et peut donner des métastases." },
        { q: "Quel est le premier facteur de risque évitable de cancer ?", r: "Le tabac." },
        { q: "Qu'est-ce qu'une biopsie ?", r: "Le prélèvement d'un fragment de tissu pour l'examiner au microscope." },
      ],
      quiz: [
        { q: "Combien de chromosomes contient un gamète humain ?", choix: ["46 chromosomes","47 chromosomes","92 chromosomes","23 chromosomes"], bonne: 3, expl: "Les gamètes sont haploïdes : un chromosome de chaque paire.", niv: 1 },
        { q: "Quelle anomalie caractérise la trisomie 21 ?", choix: ["Trois chromosomes 21","Un chromosome 21 manquant","Une mutation du gène de l'hémoglobine","Un chromosome X en plus"], bonne: 0, expl: "La trisomie 21 donne un caryotype à 47 chromosomes.", niv: 1 },
        { q: "Comment s'appelle la propagation d'un cancer à distance ?", choix: ["Une biopsie","Une mitose","Une mutation","Une métastase"], bonne: 3, expl: "Les cellules cancéreuses migrent par le sang ou la lymphe et forment des métastases.", niv: 1 },
        { q: "Quel examen permet de faire le caryotype d'un fœtus ?", choix: ["La mammographie","L'amniocentèse","L'électrocardiogramme","La spirométrie"], bonne: 1, expl: "Le liquide amniotique contient des cellules fœtales.", niv: 1 },
        { q: "Deux parents sains ont un enfant atteint d'une maladie. Que suggère cet arbre ?", choix: ["Un allèle dominant, parents malades","Une maladie due au mode de vie","Une mutation transmise par le père seul","Un allèle récessif, parents porteurs"], bonne: 3, expl: "Pour être malade avec des parents sains, l'enfant a reçu deux allèles récessifs.", niv: 2 },
        { q: "Quel est le risque qu'un enfant de deux porteurs sains de mucoviscidose soit malade ?", choix: ["1 sur 4","1 sur 2","3 sur 4","1 sur 10"], bonne: 0, expl: "Chaque parent transmet l'allèle malade avec une chance sur deux : 1/2 × 1/2.", niv: 2 },
        { q: "Dans une famille, seuls des garçons sont hémophiles et leurs mères sont saines. Pourquoi ?", choix: ["L'allèle dominant est porté par le chromosome Y","Les garçons ont deux chromosomes X","L'allèle récessif est porté par le chromosome X","Les mères transmettent un chromosome 21 en plus"], bonne: 2, expl: "Les mères sont porteuses saines ; les fils n'ont qu'un X.", niv: 2 },
        { q: "Qu'est-ce qui fait la diversité des gamètes ?", choix: ["Les brassages lors de la méiose","La réplication pendant la mitose","La traduction des ARN messagers","Les mutations des cellules de la peau"], bonne: 0, expl: "Répartition au hasard des chromosomes et crossing-over : chaque gamète est unique.", niv: 2 },
        { q: "Quel virus est un facteur de risque du cancer du col de l'utérus ?", choix: ["Le papillomavirus (HPV)","Le virus de la grippe","Le virus de la varicelle","Le virus de la rougeole"], bonne: 0, expl: "Un vaccin contre le HPV est proposé aux filles et aux garçons.", niv: 2 },
        { q: "Pourquoi le risque de trisomie 21 augmente-t-il avec l'âge de la mère ?", choix: ["Les spermatozoïdes du père vieillissent plus vite","Le chromosome 21 se copie pendant la grossesse","Les erreurs de séparation à la méiose deviennent plus fréquentes","L'utérus produit des chromosomes en plus"], bonne: 2, expl: "Les ovocytes sont formés avant la naissance ; avec l'âge, la non-disjonction est plus fréquente.", niv: 3 },
        { q: "Pourquoi un cancer apparaît-il plus souvent chez les personnes âgées ?", choix: ["Les cellules âgées ne se divisent plus","Le système immunitaire devient trop fort","Les gènes changent de chromosome avec l'âge","Les mutations s'accumulent avec le temps"], bonne: 3, expl: "Il faut plusieurs mutations dans une même cellule : leur accumulation prend des années.", niv: 3 },
        { q: "Quelle différence entre dépistage et diagnostic prénatal ?", choix: ["Le dépistage donne un risque, le diagnostic une certitude","Le dépistage se fait après la naissance","Le diagnostic se fait par une simple échographie","Le dépistage est réservé aux mères de plus de 40 ans"], bonne: 0, expl: "Clarté nucale et marqueurs sériques estiment un risque ; le caryotype fœtal confirme.", niv: 3 },
      ],
    },
    {
      chapitre: "st2s-cbph-5",
      fiche: `## Maladies infectieuses, agents pathogènes et grippe

Une **maladie infectieuse** est causée par un **micro-organisme pathogène** qui pénètre dans l'organisme et s'y multiplie. Connaître l'agent en cause permet de choisir le bon traitement et les bonnes mesures de prévention. La **grippe** est l'exemple étudié en détail.

### Les agents pathogènes
- **Bactéries** : cellules **procaryotes** (sans noyau), de 1 à 10 micromètres, avec une **paroi**. Elles se multiplient seules par **division**. Exemples : staphylocoque, streptocoque, bacille de Koch (tuberculose), salmonelle.
- **Virus** : non cellulaires, très petits (20 à 300 nanomètres), formés d'un **acide nucléique** (ADN ou ARN) entouré d'une **capside** de protéines, parfois d'une **enveloppe**. Ils ne se multiplient **qu'à l'intérieur d'une cellule hôte** : ce sont des **parasites obligatoires**. Exemples : grippe, VIH, rougeole, SARS-CoV-2.
- **Champignons** (mycoses, candidose) et **parasites** (paludisme, transmis par le moustique anophèle).
- **Pouvoir pathogène** : capacité à provoquer une maladie, par **invasion** des tissus ou par production de **toxines**.

### Contamination et infection
- **Réservoir** : là où vit l'agent (homme malade ou porteur sain, animal, eau, sol).
- **Transmission directe** (gouttelettes, contact, voie sexuelle, mère-enfant) ou **indirecte** (objets, mains, eau, aliments, **vecteur** comme un moustique).
- Étapes : **contamination**, **incubation** (sans signes), phase d'**invasion**, phase d'**état** (signes cliniques), puis guérison, chronicité ou complications.
- **Infection nosocomiale** (ou **associée aux soins**) : contractée lors d'un séjour à l'hôpital. Prévention : **hygiène des mains** (solution hydroalcoolique), asepsie.
- Échelle : **épidémie** (nombre de cas inhabituel dans une région), **pandémie** (plusieurs continents), **endémie** (présence permanente).

### Diagnostic d'une infection
- Signes : **fièvre**, inflammation, **hyperleucocytose** (beaucoup de globules blancs) dans une infection bactérienne.
- Examens : **prélèvement** (sang, urine, gorge), examen au microscope, **mise en culture**, test rapide, **PCR** (recherche de l'acide nucléique du virus ou de la bactérie), **sérodiagnostic** (recherche des anticorps).

### Les traitements
- **Antibiotiques** : agissent **seulement sur les bactéries** (pas sur les virus). Ils sont **bactéricides** (tuent) ou **bactériostatiques** (arrêtent la multiplication). Exemple : la pénicilline empêche la fabrication de la paroi.
- **Antibiogramme** : on cultive la bactérie sur une gélose avec des disques d'antibiotiques. Plus la **zone d'inhibition** autour d'un disque est grande, plus la bactérie est **sensible**. Il permet de choisir l'antibiotique efficace.
- **Antibiorésistance** : à force d'usage excessif ou mal suivi, des bactéries **mutantes résistantes** sont **sélectionnées**. D'où la règle : antibiotiques seulement sur prescription, traitement suivi jusqu'au bout.
- **Antiviraux** : freinent la multiplication du virus (exemple : contre la grippe, le VIH).

### La grippe
- Virus **influenza**, à **ARN**, **enveloppé**. Sur l'enveloppe, deux protéines : l'**hémagglutinine (H)**, qui permet l'entrée dans la cellule, et la **neuraminidase (N)**, qui libère les nouveaux virus. Le nom des souches en vient : **H1N1**, **H3N2**.
- **Cycle** : fixation sur une cellule de l'appareil respiratoire, entrée, libération de l'ARN, réplication et fabrication des protéines virales par la cellule, assemblage, **bourgeonnement** et libération de nouveaux virus.
- Transmission par **gouttelettes** (toux, éternuements) et par les **mains**. Incubation courte (1 à 3 jours).
- Signes : fièvre brutale, courbatures, toux, fatigue. Complications graves chez les **personnes fragiles** (âgées, malades chroniques, femmes enceintes).
- Le virus **mute** sans cesse (**glissement antigénique**) : il faut un **vaccin chaque année**, recommandé aux personnes à risque et aux soignants. Un **changement** brutal (**cassure antigénique**) peut provoquer une **pandémie**.
- Gestes barrières : lavage des mains, masque, tousser dans le coude, aération.

### À retenir pour le bac
- Bactérie = cellule, se divise seule, sensible aux antibiotiques. Virus = parasite obligatoire, insensible aux antibiotiques.
- Antibiogramme : grande zone d'inhibition = bactérie sensible.
- Grippe : virus à ARN, H et N, vaccin annuel car il mute. Racines : **-ite** = inflammation, **-ose** = maladie, **pyo-** = pus.`,
      cartes: [
        { q: "Qu'est-ce qu'un micro-organisme pathogène ?", r: "Un micro-organisme capable de provoquer une maladie." },
        { q: "Quelle différence entre une bactérie et un virus ?", r: "La bactérie est une cellule qui se multiplie seule ; le virus n'est pas une cellule et ne se multiplie que dans une cellule hôte." },
        { q: "De quoi est formé un virus ?", r: "D'un acide nucléique (ADN ou ARN) entouré d'une capside de protéines, parfois d'une enveloppe." },
        { q: "Qu'est-ce que la période d'incubation ?", r: "Le temps entre la contamination et l'apparition des premiers signes." },
        { q: "Qu'est-ce qu'une infection nosocomiale ?", r: "Une infection contractée lors d'un séjour dans un établissement de soins." },
        { q: "Quelle différence entre épidémie et pandémie ?", r: "L'épidémie touche une région ; la pandémie s'étend à plusieurs continents." },
        { q: "Sur quels agents les antibiotiques agissent-ils ?", r: "Seulement sur les bactéries, pas sur les virus." },
        { q: "Qu'est-ce qu'un antibiogramme ?", r: "Un test qui mesure la sensibilité d'une bactérie à plusieurs antibiotiques pour choisir le plus efficace." },
        { q: "Comment lit-on un antibiogramme ?", r: "Plus la zone d'inhibition autour du disque est grande, plus la bactérie est sensible à l'antibiotique." },
        { q: "Qu'est-ce que l'antibiorésistance ?", r: "La capacité de bactéries à survivre à un antibiotique ; l'usage excessif sélectionne ces bactéries." },
        { q: "Que signifient H et N dans H1N1 ?", r: "Hémagglutinine (entrée du virus dans la cellule) et neuraminidase (libération des nouveaux virus)." },
        { q: "Comment se transmet la grippe ?", r: "Par les gouttelettes (toux, éternuements) et par les mains ou les objets contaminés." },
        { q: "Pourquoi faut-il se vacciner contre la grippe chaque année ?", r: "Le virus mute sans cesse : le vaccin est adapté chaque année aux souches qui circulent." },
        { q: "Qu'est-ce que la PCR ?", r: "Une technique qui recherche et multiplie l'acide nucléique d'un agent pathogène pour le détecter." },
      ],
      quiz: [
        { q: "Quel agent pathogène est une cellule sans noyau ?", choix: ["Un virus","Une cellule de champignon","Un parasite du paludisme","Une bactérie"], bonne: 3, expl: "Les bactéries sont des procaryotes : leur ADN n'est pas entouré d'un noyau.", niv: 1 },
        { q: "Contre quel agent un antibiotique est-il efficace ?", choix: ["Un virus","Un prion","Une bactérie","Une toxine déjà produite"], bonne: 2, expl: "Les antibiotiques ciblent des structures propres aux bactéries, comme la paroi.", niv: 1 },
        { q: "Que signifie le terme « pandémie » ?", choix: ["Une maladie présente en permanence","Une épidémie sur plusieurs continents","Une infection contractée à l'hôpital","Une maladie transmise par un animal"], bonne: 1, expl: "La pandémie est mondiale ; l'endémie est permanente dans une région.", niv: 1 },
        { q: "Quelle est la nature du matériel génétique du virus de la grippe ?", choix: ["De l'ADN double brin","De l'ARN","Des protéines seules","Des lipides seuls"], bonne: 1, expl: "Le virus influenza est un virus à ARN, enveloppé.", niv: 1 },
        { q: "Où un virus se multiplie-t-il ?", choix: ["Seul dans le sang","Dans l'air ambiant","À l'intérieur d'une cellule hôte","Sur une gélose de culture"], bonne: 2, expl: "Le virus détourne la machinerie de la cellule : c'est un parasite obligatoire.", niv: 2 },
        { q: "Sur un antibiogramme, l'antibiotique B donne la plus grande zone d'inhibition. Que choisir ?", choix: ["L'antibiotique B","L'antibiotique sans zone visible","Un antiviral à la place","Deux antibiotiques au hasard"], bonne: 0, expl: "Une grande zone d'inhibition montre que la bactérie est sensible à cet antibiotique.", niv: 2 },
        { q: "Pourquoi le médecin ne prescrit-il pas d'antibiotique pour une grippe simple ?", choix: ["La grippe guérit en une heure","Les antibiotiques donnent la grippe","La grippe est due à un virus","La grippe est due à un champignon"], bonne: 2, expl: "Un antibiotique serait inutile et favoriserait l'antibiorésistance.", niv: 2 },
        { q: "Quelle protéine du virus de la grippe lui permet d'entrer dans la cellule ?", choix: ["La neuraminidase (N)","L'hémagglutinine (H)","L'hémoglobine","L'insuline"], bonne: 1, expl: "H permet la fixation et l'entrée ; N libère les virus nouvellement formés.", niv: 2 },
        { q: "Quel geste réduit le plus les infections associées aux soins ?", choix: ["La prise d'antibiotiques à l'entrée","La fermeture des fenêtres des chambres","L'arrêt des visites aux malades","L'hygiène des mains des soignants"], bonne: 3, expl: "Les mains sont le premier vecteur de transmission à l'hôpital.", niv: 2 },
        { q: "Comment l'usage excessif d'antibiotiques favorise-t-il l'antibiorésistance ?", choix: ["Il sélectionne les bactéries mutantes résistantes","Il rend le patient allergique aux bactéries","Il transforme les virus en bactéries","Il renforce la paroi des bactéries"], bonne: 0, expl: "Les bactéries sensibles meurent ; les rares résistantes survivent et se multiplient.", niv: 3 },
        { q: "Pourquoi un vaccin contre la grippe protège-t-il peu l'année suivante ?", choix: ["Les anticorps disparaissent en une semaine","Les protéines H et N du virus ont changé","Le vaccin détruit les lymphocytes mémoire","Le virus devient une bactérie l'hiver suivant"], bonne: 1, expl: "Le glissement antigénique modifie H et N : les anticorps ne les reconnaissent plus bien.", niv: 3 },
        { q: "Une infection bactérienne s'accompagne souvent d'une hyperleucocytose. Que signifie ce résultat ?", choix: ["Les globules blancs sont plus nombreux","Les globules rouges sont détruits","Les plaquettes ont disparu du sang","Le sang contient trop de glucose"], bonne: 0, expl: "Leuco- = blanc ; -cytose = augmentation du nombre de cellules : c'est une réponse de défense.", niv: 3 },
      ],
    },
    {
      chapitre: "st2s-cbph-6",
      fiche: `## Immunité innée, immunité acquise et vaccination

Le **système immunitaire** distingue le **soi** (les cellules de l'organisme) du **non-soi** (microbes, cellules greffées, cellules cancéreuses). Il agit en deux temps : une réponse **innée**, rapide et non spécifique, puis une réponse **acquise** (ou adaptative), plus lente, **spécifique** et dotée de **mémoire**.

### Les organes et les cellules
- **Organes lymphoïdes primaires** : la **moelle osseuse** (naissance de toutes les cellules immunitaires, maturation des **lymphocytes B**) et le **thymus** (maturation des **lymphocytes T**).
- **Organes lymphoïdes secondaires** : **ganglions lymphatiques**, **rate**, amygdales : c'est là que les lymphocytes rencontrent les antigènes.
- Les **leucocytes** (globules blancs) : **granulocytes** (polynucléaires) et **monocytes**, qui deviennent **macrophages** dans les tissus (**phagocytes**) ; **lymphocytes** B et T.
- **Antigène** : molécule reconnue comme étrangère, qui déclenche une réponse immunitaire.

### L'immunité innée
- **Barrières naturelles** : la **peau**, les **muqueuses** et le mucus, les larmes et la salive (lysozyme), l'acidité de l'estomac, la flore normale.
- **Réaction inflammatoire** : quatre signes, **rougeur**, **chaleur**, **gonflement** (œdème), **douleur**. Les vaisseaux se dilatent et laissent passer les phagocytes.
- **Phagocytose** en quatre étapes : **adhésion** du microbe au phagocyte, **ingestion**, **digestion** dans une vésicule, **rejet** des déchets.
- Les macrophages **présentent** ensuite des morceaux d'antigène aux lymphocytes : ils lancent l'immunité acquise.

### L'immunité acquise
**Réponse à médiation humorale** (contre les microbes du sang et des liquides)
- Un **lymphocyte B** reconnaît l'antigène, se multiplie (**sélection** et **amplification clonale**) et se transforme en **plasmocytes** qui sécrètent des **anticorps** (immunoglobulines, Ig).
- Un anticorps a une forme en **Y** et reconnaît **un seul** antigène. Il se fixe dessus pour former un **complexe immun**, qui neutralise le microbe et facilite sa phagocytose.

**Réponse à médiation cellulaire** (contre les cellules infectées ou cancéreuses)
- Les **lymphocytes T4** (ou **auxiliaires**, CD4) coordonnent la réponse : ils sécrètent des **interleukines** qui activent les LB et les LT8.
- Les **lymphocytes T8** deviennent des **LT cytotoxiques** qui **détruisent** les cellules infectées.

**La mémoire immunitaire**
- Après une première rencontre, des **cellules mémoire** (LB et LT) persistent. Lors d'un second contact, la **réponse secondaire** est **plus rapide**, **plus intense** et **plus durable** : on produit beaucoup plus d'anticorps (surtout des **IgG**). La réponse primaire produit d'abord des **IgM**.

### Vaccination et sérothérapie
- **Vaccination** : on injecte un antigène **inoffensif** (microbe tué ou atténué, toxine inactivée appelée **anatoxine**, protéine, ARN messager). Le corps fabrique lui-même des anticorps et des cellules mémoire. Protection **lente** à venir mais **durable** : c'est une immunisation **active** et **préventive**. Des **rappels** entretiennent la mémoire.
- **Couverture vaccinale** : si une grande partie de la population est vaccinée, le microbe circule peu et les personnes fragiles sont protégées (**immunité collective**). En France, 11 vaccins sont obligatoires pour les enfants nés depuis 2018.
- **Sérothérapie** : on injecte des **anticorps** déjà fabriqués (exemple : après une morsure, contre le tétanos ou la rage). Protection **immédiate** mais **courte** : immunisation **passive** et **curative**.

### Le sérodiagnostic
- Rechercher les **anticorps** dirigés contre un microbe dans le sérum. Leur présence montre que la personne a été en contact avec lui (**séropositivité**).
- **Test ELISA** : l'antigène est fixé au fond d'un puits ; on ajoute le sérum, puis un second anticorps couplé à une **enzyme** ; une **coloration** apparaît si les anticorps recherchés sont présents. Un résultat positif est confirmé par un second test (**Western blot**).
- Au début d'une infection, les anticorps ne sont pas encore détectables : c'est la **fenêtre sérologique**.

### Une immunodéficience : le VIH et le sida
- Le **VIH** infecte et détruit les **lymphocytes T4**. Sans T4, les réponses immunitaires s'effondrent : c'est le **sida**, avec des **maladies opportunistes**.
- Transmission : rapports sexuels, sang, mère-enfant. Prévention : **préservatif**, dépistage, PrEP. Traitement : **antirétroviraux** à vie, qui rendent la charge virale indétectable.

### À retenir pour le bac
- Innée : barrières, inflammation, phagocytose. Acquise : LB → plasmocytes → anticorps ; LT8 → LTc ; LT4 chefs d'orchestre.
- Vaccin = actif, lent, durable, préventif. Sérum = passif, immédiat, court, curatif.
- Réponse secondaire plus rapide et plus forte grâce aux cellules mémoire.`,
      cartes: [
        { q: "Qu'est-ce qu'un antigène ?", r: "Une molécule reconnue comme étrangère, qui déclenche une réponse immunitaire." },
        { q: "Où mûrissent les lymphocytes B et T ?", r: "Les LB dans la moelle osseuse, les LT dans le thymus." },
        { q: "Quels sont les quatre signes de l'inflammation ?", r: "Rougeur, chaleur, gonflement (œdème) et douleur." },
        { q: "Quelles sont les étapes de la phagocytose ?", r: "Adhésion, ingestion, digestion, rejet des déchets." },
        { q: "Quelles cellules produisent les anticorps ?", r: "Les plasmocytes, issus des lymphocytes B." },
        { q: "Qu'est-ce qu'un complexe immun ?", r: "L'association d'un anticorps et de son antigène, qui neutralise le microbe." },
        { q: "Quel est le rôle des lymphocytes T4 ?", r: "Ils coordonnent la réponse immunitaire en activant les LB et les LT8 par des interleukines." },
        { q: "Quel est le rôle des lymphocytes T cytotoxiques ?", r: "Détruire les cellules infectées par un virus ou les cellules cancéreuses." },
        { q: "Pourquoi la réponse secondaire est-elle plus efficace ?", r: "Grâce aux cellules mémoire : elle est plus rapide, plus intense et plus durable." },
        { q: "Quel est le principe de la vaccination ?", r: "Injecter un antigène inoffensif pour que le corps fabrique anticorps et cellules mémoire." },
        { q: "Qu'est-ce qu'une anatoxine ?", r: "Une toxine rendue inoffensive mais qui garde son pouvoir de déclencher la réponse immunitaire." },
        { q: "Quel est le principe de la sérothérapie ?", r: "Injecter des anticorps déjà fabriqués : protection immédiate mais courte." },
        { q: "Qu'est-ce que l'immunité collective ?", r: "Quand assez de personnes sont vaccinées, le microbe circule peu et protège aussi les non-vaccinés." },
        { q: "Qu'est-ce que la fenêtre sérologique ?", r: "La période après la contamination où les anticorps ne sont pas encore détectables." },
        { q: "Quelles cellules le VIH détruit-il ?", r: "Les lymphocytes T4 (CD4)." },
        { q: "Qu'est-ce qu'un test ELISA ?", r: "Un test qui détecte des anticorps (ou des antigènes) grâce à une réaction colorée produite par une enzyme." },
      ],
      quiz: [
        { q: "Quelle cellule produit les anticorps ?", choix: ["Le macrophage","Le plasmocyte","Le lymphocyte T8","Le globule rouge"], bonne: 1, expl: "Les plasmocytes sont des lymphocytes B transformés.", niv: 1 },
        { q: "Lequel de ces signes fait partie de la réaction inflammatoire ?", choix: ["La pâleur","Le froid local","L'insensibilité","La rougeur"], bonne: 3, expl: "Les quatre signes : rougeur, chaleur, gonflement, douleur.", niv: 1 },
        { q: "Dans quel organe les lymphocytes T mûrissent-ils ?", choix: ["Le foie","Le thymus","Le pancréas","La thyroïde"], bonne: 1, expl: "Le thymus est un organe lymphoïde primaire situé dans le thorax.", niv: 1 },
        { q: "Quelle est la première étape de la phagocytose ?", choix: ["La digestion","Le rejet","L'ingestion","L'adhésion"], bonne: 3, expl: "Le phagocyte se fixe d'abord au microbe avant de l'ingérer.", niv: 1 },
        { q: "Un enfant est mordu par un chien inconnu. Pourquoi lui injecter des anticorps ?", choix: ["Pour une protection immédiate","Pour une protection à vie","Pour créer des cellules mémoire","Pour tuer les cellules du chien"], bonne: 0, expl: "La sérothérapie protège tout de suite, sans attendre la réponse du corps.", niv: 2 },
        { q: "Quelles cellules le VIH détruit-il en priorité ?", choix: ["Les lymphocytes B","Les globules rouges","Les lymphocytes T4","Les plaquettes du sang"], bonne: 2, expl: "Sans T4, ni les LB ni les LT8 ne sont activés correctement.", niv: 2 },
        { q: "Pourquoi fait-on des rappels de vaccin ?", choix: ["Pour soigner une infection déjà là","Pour remplacer les globules rouges","Pour entretenir la mémoire immunitaire","Pour détruire les anticorps anciens"], bonne: 2, expl: "Chaque rappel déclenche une réponse secondaire et relance la mémoire.", niv: 2 },
        { q: "Quel lymphocyte détruit directement une cellule infectée par un virus ?", choix: ["Le lymphocyte T cytotoxique","Le lymphocyte B naïf","Le plasmocyte","Le lymphocyte T4"], bonne: 0, expl: "Les LT8 deviennent des LT cytotoxiques qui tuent les cellules infectées.", niv: 2 },
        { q: "Un test ELISA anti-VIH fait trois semaines après une prise de risque est négatif. Que conclure ?", choix: ["Il faut refaire le test plus tard","La personne est sûrement guérie","La personne a des anticorps","Le test a détruit le virus"], bonne: 0, expl: "Pendant la fenêtre sérologique, les anticorps ne sont pas encore détectables.", niv: 2 },
        { q: "Après une seconde injection d'un même antigène, les anticorps sont plus nombreux et plus rapides. Pourquoi ?", choix: ["Les plasmocytes de la première fois sont restés jeunes","Des cellules mémoire existent déjà","Le second antigène est plus dangereux","L'inflammation a détruit l'antigène"], bonne: 1, expl: "C'est la réponse secondaire, qui part de cellules mémoire nombreuses.", niv: 3 },
        { q: "Pourquoi un malade du sida meurt-il d'infections bénignes chez les autres ?", choix: ["Les microbes deviennent plus nombreux","Ses barrières naturelles ont disparu","Son immunité acquise ne fonctionne plus","Les antibiotiques le rendent fragile"], bonne: 2, expl: "Sans T4, les réponses B et T s'effondrent : ce sont les maladies opportunistes.", niv: 3 },
        { q: "Pourquoi vacciner un bébé protège-t-il aussi un voisin malade non vacciné ?", choix: ["Le bébé transmet ses anticorps au voisin","Le vaccin passe dans l'air de la maison","Le microbe circule moins dans la population","Le voisin reçoit les cellules mémoire du bébé"], bonne: 2, expl: "C'est l'immunité collective : moins de personnes contagieuses, moins de transmission.", niv: 3 },
      ],
    },
    {
      chapitre: "st2s-cbph-7",
      fiche: `## Appareil reproducteur et régulation hormonale

L'appareil reproducteur produit les **gamètes** et les **hormones sexuelles**. Son fonctionnement, continu chez l'homme et **cyclique** chez la femme, est contrôlé par le **complexe hypothalamo-hypophysaire**. Comprendre ces régulations permet d'expliquer la contraception hormonale et certaines infertilités.

### L'appareil reproducteur masculin
- **Testicules** (dans le scrotum) : les **tubes séminifères** produisent les **spermatozoïdes** (**spermatogenèse**, en continu dès la puberté) ; les **cellules de Leydig**, entre les tubes, sécrètent la **testostérone**.
- **Voies génitales** : épididyme (maturation des spermatozoïdes), **canal déférent**, urètre.
- **Glandes annexes** : **vésicules séminales** et **prostate**, qui produisent le liquide séminal. Sperme = spermatozoïdes + liquide séminal.
- La testostérone permet la spermatogenèse et les **caractères sexuels secondaires** (pilosité, voix, muscles).

### L'appareil reproducteur féminin
- **Ovaires** : ils contiennent les **follicules**, chacun entourant un **ovocyte**. Ils sécrètent les **œstrogènes** (œstradiol) et la **progestérone**.
- **Trompes de Fallope** (lieu de la fécondation), **utérus** (muscle, le **myomètre**, tapissé d'une muqueuse, l'**endomètre**), **col de l'utérus**, **vagin**.
- Le stock de follicules est constitué **avant la naissance** et s'épuise jusqu'à la **ménopause**.

### Le cycle menstruel (environ 28 jours)
**Cycle ovarien**
- **Phase folliculaire** (jours 1 à 14) : un follicule se développe et sécrète de plus en plus d'**œstradiol**.
- **Ovulation** (vers le jour 14) : le follicule mûr libère l'ovocyte.
- **Phase lutéale** (jours 14 à 28) : le follicule vide devient le **corps jaune**, qui sécrète **progestérone** et œstradiol. Sans fécondation, il dégénère.

**Cycle utérin**
- **Menstruations** (jours 1 à 5) : l'endomètre se détache, car le taux d'hormones a chuté.
- L'endomètre s'épaissit sous l'effet de l'œstradiol, puis devient très vascularisé (**dentelle utérine**) sous l'effet de la progestérone, prêt à accueillir un embryon.
- La **glaire cervicale** devient fluide autour de l'ovulation et laisse passer les spermatozoïdes.
- La **température** du corps monte d'environ 0,3 à 0,5 °C après l'ovulation (effet de la progestérone).

### La régulation hormonale
- L'**hypothalamus** sécrète la **GnRH** (neurohormone), qui stimule l'**hypophyse**.
- L'hypophyse sécrète la **FSH** et la **LH** (gonadostimulines) qui agissent sur les gonades.
- Chez l'homme : la **LH** stimule les cellules de Leydig (testostérone), la **FSH** agit sur la spermatogenèse. La testostérone exerce un **rétrocontrôle négatif** : si elle augmente, GnRH, FSH et LH diminuent. Le taux reste à peu près constant.
- Chez la femme :
  - la FSH stimule la croissance du follicule ;
  - un taux d'œstradiol **modéré** exerce un **rétrocontrôle négatif** ;
  - un taux d'œstradiol **très élevé** juste avant l'ovulation exerce un **rétrocontrôle positif** : c'est le **pic de LH**, qui déclenche l'ovulation (environ 36 heures après) ;
  - en phase lutéale, progestérone et œstradiol exercent un rétrocontrôle négatif.

### La contraception hormonale
- La **pilule** combinée contient des **œstrogènes** et un **progestatif** de synthèse. Par **rétrocontrôle négatif**, elle bloque la sécrétion de FSH et de LH : **pas de pic de LH**, donc **pas d'ovulation**. Elle épaissit aussi la glaire cervicale.
- Autres moyens : pilule progestative, implant, stérilet (dispositif intra-utérin), préservatif (le seul qui protège aussi des **infections sexuellement transmissibles**).
- **Contraception d'urgence** : pilule à prendre le plus tôt possible après un rapport à risque.

### À retenir pour le bac
- Hypothalamus (GnRH) → hypophyse (FSH, LH) → gonades (testostérone, œstradiol, progestérone) → rétrocontrôles.
- Pic de LH = ovulation. Corps jaune = progestérone. Chute des hormones = règles.
- Racines : **gyn(éco)** = femme, **hystér(o)** et **métr(o)** = utérus, **ovar-** = ovaire, **orchi-** = testicule, **-ménorrhée** = règles (aménorrhée = absence de règles).`,
      cartes: [
        { q: "Où sont produits les spermatozoïdes ?", r: "Dans les tubes séminifères des testicules." },
        { q: "Quelles cellules sécrètent la testostérone ?", r: "Les cellules de Leydig, situées entre les tubes séminifères." },
        { q: "Où a lieu la fécondation ?", r: "Dans le tiers externe de la trompe de Fallope." },
        { q: "Qu'est-ce que l'endomètre ?", r: "La muqueuse qui tapisse l'intérieur de l'utérus et accueille l'embryon." },
        { q: "Quelles sont les phases du cycle ovarien ?", r: "Phase folliculaire, ovulation (vers le jour 14), phase lutéale." },
        { q: "Qu'est-ce que le corps jaune ?", r: "Le follicule vide après l'ovulation, qui sécrète de la progestérone et de l'œstradiol." },
        { q: "Pourquoi les règles surviennent-elles ?", r: "Le corps jaune dégénère : la chute de progestérone et d'œstradiol fait se détacher l'endomètre." },
        { q: "Quelle hormone sécrète l'hypothalamus pour la reproduction ?", r: "La GnRH, qui stimule la sécrétion de FSH et de LH par l'hypophyse." },
        { q: "Quel est le rôle de la FSH chez la femme ?", r: "Stimuler la croissance des follicules ovariens." },
        { q: "Qu'est-ce qui déclenche l'ovulation ?", r: "Le pic de LH, provoqué par un taux très élevé d'œstradiol (rétrocontrôle positif)." },
        { q: "Qu'est-ce qu'un rétrocontrôle négatif ?", r: "Une hormone qui, en augmentant, freine sa propre production en agissant sur l'hypothalamus et l'hypophyse." },
        { q: "Comment agit la pilule combinée ?", r: "Ses hormones de synthèse freinent FSH et LH par rétrocontrôle négatif : pas de pic de LH, pas d'ovulation." },
        { q: "Quel contraceptif protège aussi des IST ?", r: "Le préservatif." },
        { q: "Que signifie aménorrhée ?", r: "L'absence de règles." },
      ],
      quiz: [
        { q: "Quelle hormone sécrètent les cellules de Leydig ?", choix: ["La testostérone","La progestérone","La FSH","L'insuline"], bonne: 0, expl: "La testostérone est l'hormone sexuelle masculine.", niv: 1 },
        { q: "Quel organe sécrète la FSH et la LH ?", choix: ["L'ovaire","Le testicule","L'hypophyse","Le pancréas"], bonne: 2, expl: "L'hypophyse, sous l'hypothalamus, sécrète les gonadostimulines.", niv: 1 },
        { q: "Comment s'appelle le follicule après l'ovulation ?", choix: ["Le corps blanc","La dentelle utérine","Le follicule primaire","Le corps jaune"], bonne: 3, expl: "Le corps jaune sécrète surtout de la progestérone.", niv: 1 },
        { q: "Que signifie le terme « hystérectomie » ?", choix: ["L'ablation d'un ovaire","L'ablation de l'utérus","L'inflammation de l'utérus","L'examen du col au microscope"], bonne: 1, expl: "Hystér- = utérus ; -ectomie = ablation.", niv: 1 },
        { q: "Quel événement déclenche l'ovulation ?", choix: ["La chute de progestérone","Le pic de LH","La baisse de la température","Le début des règles"], bonne: 1, expl: "L'ovulation survient environ 36 heures après le pic de LH.", niv: 2 },
        { q: "Pourquoi la température monte-t-elle après l'ovulation ?", choix: ["L'ovocyte libéré produit de la chaleur","La FSH augmente fortement en fin de cycle","L'endomètre se détache et chauffe l'utérus","La progestérone du corps jaune élève la température"], bonne: 3, expl: "La courbe de température montre un plateau haut pendant la phase lutéale.", niv: 2 },
        { q: "Un homme prend de la testostérone en grande quantité. Que deviennent FSH et LH ?", choix: ["Elles augmentent","Elles diminuent","Elles restent identiques","Elles se transforment en œstradiol"], bonne: 1, expl: "Rétrocontrôle négatif : un taux élevé de testostérone freine l'hypothalamus et l'hypophyse.", niv: 2 },
        { q: "Quel est l'effet de la progestérone sur l'utérus ?", choix: ["Elle prépare l'endomètre à la nidation","Elle provoque les menstruations","Elle déclenche l'ovulation","Elle fabrique les ovocytes"], bonne: 0, expl: "Elle rend l'endomètre très vascularisé : la dentelle utérine.", niv: 2 },
        { q: "Comment la pilule combinée empêche-t-elle une grossesse ?", choix: ["Elle bloque l'ovulation","Elle détruit les spermatozoïdes","Elle empêche la nidation de l'embryon","Elle supprime les règles pendant des années"], bonne: 0, expl: "Ses hormones freinent FSH et LH : pas de pic de LH, donc pas d'ovulation.", niv: 2 },
        { q: "Pourquoi un taux élevé d'œstradiol a-t-il deux effets opposés selon le moment du cycle ?", choix: ["Il agit sur l'ovaire au début et sur le foie à la fin","Il est produit par l'hypophyse puis par l'utérus","Modéré, il freine ; très élevé avant l'ovulation, il stimule la LH","Sa structure chimique change au jour 14"], bonne: 2, expl: "Rétrocontrôle négatif d'abord, puis positif au-delà d'un seuil : d'où le pic de LH.", niv: 3 },
        { q: "On retire l'hypophyse d'un animal. Que deviennent ses testicules ?", choix: ["Ils produisent plus de testostérone","Ils sécrètent de la FSH","Ils cessent de fonctionner","Ils continuent à fonctionner normalement"], bonne: 2, expl: "Sans FSH ni LH, les testicules ne sont plus stimulés.", niv: 3 },
        { q: "Une femme a des cycles sans pic de LH. Quelle conséquence ?", choix: ["Elle a des règles beaucoup plus longues","Elle n'ovule pas et ne peut pas être enceinte","Elle fabrique trop de corps jaunes","Elle produit trop de testostérone"], bonne: 1, expl: "Sans pic de LH, pas d'ovulation : c'est une cause d'infertilité (anovulation).", niv: 3 },
      ],
    },
    {
      chapitre: "st2s-cbph-8",
      fiche: `## Fécondation, grossesse, infertilité et AMP

La rencontre d'un spermatozoïde et d'un ovocyte donne une **cellule-œuf** qui deviendra un embryon, puis un fœtus. La grossesse dure environ **9 mois** et est suivie médicalement. Quand un couple n'arrive pas à concevoir, l'**assistance médicale à la procréation** (AMP) peut l'aider.

### La fécondation
- Les spermatozoïdes remontent le vagin, l'utérus, puis la **trompe**. Sur des millions, quelques centaines arrivent près de l'ovocyte.
- Un seul spermatozoïde traverse l'enveloppe de l'ovocyte (la **zone pellucide**) grâce aux enzymes de son **acrosome**. L'ovocyte bloque ensuite l'entrée des autres.
- Les deux noyaux haploïdes fusionnent : on obtient la **cellule-œuf** (zygote), **diploïde** (46 chromosomes). Le sexe dépend du chromosome du spermatozoïde (X ou Y).
- La fécondation n'est possible que pendant une courte **période** : l'ovocyte vit 12 à 24 heures, les spermatozoïdes 3 à 5 jours.

### Du zygote à la nidation
- La cellule-œuf se divise en descendant la trompe : 2, 4, 8 cellules, **morula**, puis **blastocyste**.
- Vers le **7e jour**, le blastocyste s'implante dans l'endomètre : c'est la **nidation**.
- Le **trophoblaste** (couche externe) sécrète l'**hormone hCG**, qui **maintient le corps jaune** : la progestérone reste élevée, l'endomètre ne se détache pas, il n'y a **pas de règles**. Les **tests de grossesse** détectent l'hCG dans l'urine ou le sang.
- Une **grossesse extra-utérine** est une implantation hors de l'utérus (souvent dans la trompe) : c'est une urgence.

### La grossesse
- Environ **41 semaines d'aménorrhée** (comptées depuis les dernières règles). L'**embryon** devient **fœtus** à la fin du 2e mois.
- Le **placenta** relie la mère et le fœtus par le **cordon ombilical**. Il assure les **échanges** (oxygène, nutriments, déchets, anticorps de type IgG) sans que les sangs se mélangent. Il est aussi une **glande endocrine** : il prend le relais du corps jaune pour la progestérone.
- Le placenta laisse passer certaines substances dangereuses : **alcool** (syndrome d'alcoolisation fœtale), tabac, certains médicaments, virus (rubéole), parasite de la **toxoplasmose**.
- Suivi en France : **7 consultations** prénatales obligatoires, **3 échographies** recommandées (vers 12, 22 et 32 semaines d'aménorrhée), prises de sang (groupe sanguin, toxoplasmose, rubéole), dépistage du **diabète gestationnel**.
- L'**accouchement** se fait en trois temps : dilatation du col, expulsion du bébé, délivrance (expulsion du placenta). L'**ocytocine** déclenche les contractions de l'utérus.

### L'infertilité
- Un couple est dit **infertile** après **12 mois** de rapports réguliers sans contraception et sans grossesse.
- Causes féminines : **absence d'ovulation** (troubles hormonaux, syndrome des ovaires polykystiques), **trompes bouchées** (après une infection comme la chlamydia), endométriose, âge.
- Causes masculines : trop peu de spermatozoïdes (**oligospermie**), aucun (**azoospermie**), spermatozoïdes peu mobiles ou anormaux.
- Examens : **spermogramme** chez l'homme ; courbe de température, dosages hormonaux, échographie et radiographie des trompes (**hystérosalpingographie**) chez la femme.

### L'assistance médicale à la procréation (AMP)
- **Stimulation ovarienne** : des injections d'hormones (de type FSH) font mûrir plusieurs follicules ; un **déclenchement** remplace le pic de LH.
- **Insémination artificielle** : on dépose des spermatozoïdes préparés dans l'utérus au moment de l'ovulation.
- **FIV** (fécondation in vitro) : on ponctionne les ovocytes, on les met en contact avec les spermatozoïdes au laboratoire, puis on **transfère** un ou deux embryons dans l'utérus. Indication typique : trompes bouchées.
- **ICSI** : on **injecte** un seul spermatozoïde dans l'ovocyte. Indication : infertilité masculine sévère.
- Les embryons en surplus peuvent être **congelés**. La loi de bioéthique de 2021 ouvre l'AMP aux couples de femmes et aux femmes seules.

### À retenir pour le bac
- Fécondation dans la trompe ; nidation vers le 7e jour ; hCG maintient le corps jaune.
- Placenta = échanges et hormones, mais il laisse passer alcool, tabac et certains microbes.
- Trompes bouchées → FIV ; peu de spermatozoïdes → ICSI ; absence d'ovulation → stimulation.`,
      cartes: [
        { q: "Qu'est-ce que la cellule-œuf ?", r: "La cellule diploïde issue de la fusion d'un spermatozoïde et d'un ovocyte." },
        { q: "Qu'est-ce qui détermine le sexe de l'enfant ?", r: "Le chromosome sexuel du spermatozoïde : X donne une fille, Y donne un garçon." },
        { q: "Qu'est-ce que la nidation ?", r: "L'implantation de l'embryon (blastocyste) dans l'endomètre, vers le 7e jour." },
        { q: "Quel est le rôle de l'hCG ?", r: "Maintenir le corps jaune pour que la progestérone reste élevée et que les règles n'aient pas lieu." },
        { q: "Que détecte un test de grossesse ?", r: "L'hormone hCG dans l'urine ou le sang." },
        { q: "Quels sont les rôles du placenta ?", r: "Les échanges entre la mère et le fœtus, et la sécrétion d'hormones comme la progestérone." },
        { q: "Cite deux substances qui traversent le placenta et nuisent au fœtus.", r: "L'alcool et la nicotine du tabac (aussi certains médicaments et microbes)." },
        { q: "Combien d'échographies sont recommandées pendant la grossesse ?", r: "Trois, vers 12, 22 et 32 semaines d'aménorrhée." },
        { q: "Quand parle-t-on d'infertilité ?", r: "Après 12 mois de rapports réguliers sans contraception et sans grossesse." },
        { q: "Qu'est-ce qu'un spermogramme ?", r: "L'analyse du sperme : nombre, mobilité et forme des spermatozoïdes." },
        { q: "Que signifie azoospermie ?", r: "L'absence de spermatozoïdes dans le sperme." },
        { q: "Qu'est-ce que la FIV ?", r: "La fécondation de l'ovocyte au laboratoire, puis le transfert de l'embryon dans l'utérus." },
        { q: "Qu'est-ce que l'ICSI ?", r: "L'injection d'un seul spermatozoïde directement dans l'ovocyte, en cas d'infertilité masculine sévère." },
        { q: "Quelle hormone déclenche les contractions de l'accouchement ?", r: "L'ocytocine." },
      ],
      quiz: [
        { q: "Où a lieu la fécondation ?", choix: ["Dans l'ovaire","Dans le col de l'utérus","Dans le vagin","Dans la trompe"], bonne: 3, expl: "L'ovocyte est capté par la trompe, où il rencontre les spermatozoïdes.", niv: 1 },
        { q: "Quelle hormone détecte un test de grossesse ?", choix: ["La FSH","L'hCG","La testostérone","L'insuline"], bonne: 1, expl: "L'hCG est sécrétée par le trophoblaste dès la nidation.", niv: 1 },
        { q: "Combien de chromosomes possède une cellule-œuf humaine ?", choix: ["46 chromosomes","23 chromosomes","22 chromosomes","12 chromosomes"], bonne: 0, expl: "Deux gamètes de 23 chromosomes se réunissent.", niv: 1 },
        { q: "Que signifie le terme « oligospermie » ?", choix: ["Absence totale de spermatozoïdes","Spermatozoïdes trop nombreux","Trop peu de spermatozoïdes","Infection des testicules"], bonne: 2, expl: "Olig- = peu ; l'azoospermie est l'absence de spermatozoïdes.", niv: 1 },
        { q: "Pourquoi n'y a-t-il pas de règles pendant la grossesse ?", choix: ["L'hCG maintient le corps jaune et la progestérone","L'ovaire produit plus de FSH","L'utérus cesse de produire de l'endomètre","Le fœtus bloque le col de l'utérus"], bonne: 0, expl: "La progestérone reste élevée : l'endomètre ne se détache pas.", niv: 2 },
        { q: "Une femme a les deux trompes bouchées. Quelle technique d'AMP lui proposer ?", choix: ["L'insémination dans l'utérus","Une simple stimulation ovarienne","La pilule contraceptive","La fécondation in vitro"], bonne: 3, expl: "En FIV, la fécondation se fait au laboratoire : les trompes ne sont plus nécessaires.", niv: 2 },
        { q: "Le spermogramme d'un homme montre très peu de spermatozoïdes mobiles. Quelle technique choisir ?", choix: ["La stimulation ovarienne seule","La congélation des ovocytes","Une hystérosalpingographie","L'ICSI"], bonne: 3, expl: "On injecte un seul spermatozoïde dans l'ovocyte.", niv: 2 },
        { q: "Pourquoi l'alcool est-il interdit pendant la grossesse ?", choix: ["Il traverse le placenta et abîme le fœtus","Il bloque la production de lait","Il provoque un diabète gestationnel","Il détruit le cordon ombilical"], bonne: 0, expl: "Le syndrome d'alcoolisation fœtale atteint surtout le cerveau du fœtus.", niv: 2 },
        { q: "Pourquoi une infection à chlamydia peut-elle rendre une femme infertile ?", choix: ["Elle supprime les ovocytes","Elle peut boucher les trompes","Elle bloque la sécrétion de FSH","Elle détruit le placenta"], bonne: 1, expl: "L'inflammation des trompes laisse des cicatrices qui empêchent la rencontre des gamètes.", niv: 2 },
        { q: "En AMP, pourquoi injecte-t-on des hormones de type FSH à la femme ?", choix: ["Pour empêcher toute ovulation","Pour préparer le fœtus à la naissance","Pour détruire les follicules anormaux","Pour faire mûrir plusieurs follicules à la fois"], bonne: 3, expl: "La FSH stimule la croissance folliculaire : on obtient plusieurs ovocytes à ponctionner.", niv: 3 },
        { q: "Pourquoi le nouveau-né est-il protégé de certaines infections les premiers mois ?", choix: ["Le placenta lui a donné des lymphocytes T4","Des anticorps de la mère ont traversé le placenta","Il a été vacciné avant de naître","Ses propres plasmocytes sont déjà mûrs"], bonne: 1, expl: "Les IgG maternelles passent le placenta : c'est une immunité passive temporaire.", niv: 3 },
        { q: "Une femme enceinte a une forte douleur au ventre et un test hCG positif, mais l'utérus est vide à l'échographie. Que craindre ?", choix: ["Une grossesse extra-utérine","Une simple ovulation tardive","Un diabète gestationnel","Une grossesse de jumeaux"], bonne: 0, expl: "L'embryon s'est probablement implanté dans la trompe : c'est une urgence.", niv: 3 },
      ],
    },
    {
      chapitre: "st2s-cbph-9",
      fiche: `## Chimie : prévenir et sécuriser (aliments, eau, air, route)

Ce thème montre comment la chimie protège la santé au quotidien : conserver les aliments, contrôler l'eau et l'air, sécuriser la route. À l'écrit, on attend surtout des **calculs de concentration et de quantité de matière**, des **équations de réaction** équilibrées et une **comparaison à une norme**.

### Les outils de calcul
- **Quantité de matière** : n = m / M (n en mol, m en g, M masse molaire en g/mol).
- **Concentration en masse** : Cm = m / V (en g/L). **Concentration en quantité de matière** : C = n / V (en mol/L). Lien : **Cm = C × M**.
- **Dilution** : la quantité de soluté se conserve, **C1 × V1 = C2 × V2**.
- **Gaz parfait** : **P × V = n × R × T** (P en pascals, V en m³, T en kelvins, R = 8,31 J/(mol·K)). T(K) = θ(°C) + 273.
- **Volume molaire** d'un gaz : Vm environ 24 L/mol à 20 °C sous la pression atmosphérique.
- Une équation de réaction est **équilibrée** quand il y a autant d'atomes de chaque élément et autant de charges des deux côtés.

### La sécurité des aliments
- Les aliments s'abîment par **oxydation** (le dioxygène de l'air attaque les graisses : rancissement) et par développement de **micro-organismes**.
- Moyens de conservation : froid (réfrigération, congélation), chaleur (pasteurisation, stérilisation), déshydratation, sel ou sucre, emballage sous vide, **additifs** conservateurs et **antioxydants**.
- Un **antioxydant** (vitamine C ou acide ascorbique E300, vitamine E) est un **réducteur** : il s'oxyde à la place de l'aliment.
- Une **oxydation** est une **perte d'électrons**, une **réduction** un **gain d'électrons**. Un **couple oxydant/réducteur** s'écrit Ox / Red, avec la demi-équation Ox + n e- = Red.

### La qualité de l'eau
- Une eau **potable** respecte des **limites de qualité** fixées par la réglementation. Exemples : **nitrates** ≤ **50 mg/L**, plomb ≤ 10 µg/L.
- Les nitrates viennent surtout des **engrais** agricoles. En excès, chez le nourrisson, ils peuvent gêner le transport de l'oxygène par l'hémoglobine.
- **pH** : acide si pH < 7, neutre à 7, basique si pH > 7 (à 25 °C). Une eau potable a un pH d'environ 6,5 à 9.
- **Dureté** : teneur en ions calcium et magnésium (calcaire).
- Le **traitement** de l'eau : dégrillage, floculation, décantation, filtration, **désinfection** (chlore, ozone, UV).

### La qualité de l'air
- Polluants : **monoxyde de carbone** (CO), oxydes d'azote, ozone, **particules fines** (PM10, PM2,5), composés organiques volatils.
- Le **CO** est un gaz **incolore et inodore**, produit par une **combustion incomplète** (chaudière mal réglée, poêle). Il se fixe sur l'**hémoglobine** environ **200 fois plus** que le dioxygène : il empêche le transport de l'O2 (maux de tête, nausées, coma). Prévention : entretien des appareils, aération, **détecteur**. Traitement : oxygène, parfois en caisson hyperbare.
- **Combustion complète** d'un hydrocarbure : il donne du **CO2** et de l'**eau**. Exemple avec le méthane : CH4 + 2 O2 → CO2 + 2 H2O.

### La sécurité routière
**L'airbag**
- Un capteur détecte le choc et déclenche la décomposition de l'**azoture de sodium** : **2 NaN3 → 2 Na + 3 N2**. Le **diazote** gonfle le coussin en quelques **millisecondes**.
- On calcule le volume de gaz avec **PV = nRT** ou le volume molaire. Le sodium formé, dangereux, est ensuite neutralisé par d'autres réactifs.

**L'alcootest et l'éthylotest**
- L'**éthanol** (C2H6O) est **oxydé** par un oxydant coloré, l'**ion dichromate** (orange), qui devient **vert** (ion chrome III) : le changement de couleur révèle l'alcool. Les éthylomètres électroniques mesurent l'alcool dans l'air expiré.
- Limite légale : **0,5 g d'alcool par litre de sang**, soit **0,25 mg par litre d'air expiré** (0,2 g/L pour les jeunes conducteurs). Le rapport est d'environ **2 000** entre sang et air.

### À retenir pour le bac
- n = m / M ; Cm = m / V ; C = n / V ; Cm = C × M ; C1V1 = C2V2 ; PV = nRT.
- Toujours écrire la formule, remplacer avec les unités, puis donner le résultat avec son unité et le bon nombre de chiffres.
- Comparer le résultat à la norme et conclure par une phrase.`,
      cartes: [
        { q: "Quelle formule relie quantité de matière, masse et masse molaire ?", r: "n = m / M (n en mol, m en g, M en g/mol)." },
        { q: "Quelle formule relie concentration en masse et concentration molaire ?", r: "Cm = C × M." },
        { q: "Quelle relation utilise-t-on pour une dilution ?", r: "C1 × V1 = C2 × V2 : la quantité de soluté se conserve." },
        { q: "Quelle est l'équation des gaz parfaits et ses unités ?", r: "PV = nRT : P en Pa, V en m³, n en mol, R = 8,31, T en K." },
        { q: "Comment passer des degrés Celsius aux kelvins ?", r: "On ajoute 273 : T(K) = θ(°C) + 273." },
        { q: "Qu'est-ce qu'une oxydation ?", r: "Une perte d'électrons." },
        { q: "Comment agit un antioxydant alimentaire ?", r: "C'est un réducteur : il s'oxyde à la place de l'aliment et le protège." },
        { q: "Quelle est la limite de qualité des nitrates dans l'eau potable ?", r: "50 mg/L." },
        { q: "Pourquoi le monoxyde de carbone est-il dangereux ?", r: "Il se fixe sur l'hémoglobine bien plus que le dioxygène et empêche le transport de l'oxygène." },
        { q: "D'où vient le monoxyde de carbone dans une maison ?", r: "D'une combustion incomplète, par exemple une chaudière ou un poêle mal entretenu." },
        { q: "Quels produits donne la combustion complète d'un hydrocarbure ?", r: "Du dioxyde de carbone et de l'eau." },
        { q: "Quelle réaction gonfle un airbag ?", r: "2 NaN3 → 2 Na + 3 N2 : le diazote formé gonfle le coussin." },
        { q: "Quel est le principe de l'éthylotest chimique ?", r: "L'éthanol est oxydé par l'ion dichromate orange, qui devient vert." },
        { q: "Quel est le taux d'alcool maximal autorisé au volant ?", r: "0,5 g/L de sang, soit 0,25 mg/L d'air expiré (0,2 g/L pour un jeune conducteur)." },
      ],
      quiz: [
        { q: "Quelle est l'unité de la concentration en masse ?", choix: ["Le mol/L","Le g/mol","Le g/L","Le kg/m"], bonne: 2, expl: "Cm = m / V, avec m en grammes et V en litres.", niv: 1 },
        { q: "Quel gaz gonfle un airbag ?", choix: ["Le dioxygène","Le dioxyde de carbone","Le diazote","Le monoxyde de carbone"], bonne: 2, expl: "La décomposition de l'azoture de sodium produit du N2.", niv: 1 },
        { q: "Quelle est la limite des nitrates dans l'eau potable ?", choix: ["5 mg/L","50 mg/L","10 mg/L","25 mg/L"], bonne: 1, expl: "Au-delà de 50 mg/L, l'eau n'est plus conforme pour la boisson.", niv: 1 },
        { q: "Quelle couleur prend l'ion dichromate quand il oxyde l'éthanol ?", choix: ["Bleu","Rouge","Vert","Incolore"], bonne: 2, expl: "Il passe de l'orange au vert : l'alcool est révélé.", niv: 1 },
        { q: "On dissout 0,9 g de sel dans 100 mL d'eau. Quelle est la concentration en masse ?", choix: ["9 g/L","0,09 g/L","0,9 g/L","0,009 g/L"], bonne: 0, expl: "Cm = m / V = 0,9 g / 0,100 L = 9 g/L.", niv: 2 },
        { q: "Quelle est la quantité de matière dans 18 g de glucose (M = 180 g/mol) ?", choix: ["1 mol","0,1 mol","10 mol","3 240 mol"], bonne: 1, expl: "n = m / M = 18 / 180 = 0,1 mol.", niv: 2 },
        { q: "Pourquoi le monoxyde de carbone est-il surnommé le « tueur silencieux » ?", choix: ["Il ne touche que les personnes âgées","Il agit surtout pendant le sommeil","Il est produit sans flamme visible","Il est incolore et inodore"], bonne: 3, expl: "On ne le perçoit pas : seul un détecteur signale sa présence.", niv: 2 },
        { q: "Un conducteur souffle 0,40 mg d'alcool par litre d'air. Que conclure ?", choix: ["Il dépasse la limite de 0,25 mg/L","Il est juste sous la limite légale","Il peut conduire sans risque","Son taux est de 0,40 g/L de sang"], bonne: 0, expl: "0,40 mg/L d'air correspond à environ 0,8 g/L de sang.", niv: 2 },
        { q: "Quel rôle joue la vitamine C ajoutée à un jus de fruits ?", choix: ["Colorant","Édulcorant","Antioxydant","Épaississant"], bonne: 2, expl: "Réductrice, elle s'oxyde à la place des composés du jus.", niv: 2 },
        { q: "On dilue 10 fois une solution à 2 mol/L. Quelle est la nouvelle concentration ?", choix: ["20 mol/L","2 mol/L","12 mol/L","0,2 mol/L"], bonne: 3, expl: "C2 = C1 × V1 / V2 = 2 / 10 = 0,2 mol/L.", niv: 3 },
        { q: "Un airbag reçoit 2 mol de NaN3. Combien de moles de diazote se forment ?", choix: ["2 mol","3 mol","1 mol","1,5 mol"], bonne: 1, expl: "2 NaN3 → 2 Na + 3 N2 : 2 mol de NaN3 donnent 3 mol de N2.", niv: 3 },
        { q: "Une eau contient 0,8 mmol/L de nitrates (M = 62 g/mol). Est-elle potable pour ce critère ?", choix: ["Non, elle dépasse 500 mg/L","Oui, 49,6 mg/L, juste sous la limite","Non, elle contient 62 g/L","Oui, elle contient 0,8 mg/L"], bonne: 1, expl: "Cm = C × M = 0,8 × 62 = 49,6 mg/L, juste sous 50 mg/L.", niv: 3 },
      ],
    },
    {
      chapitre: "st2s-cbph-10",
      fiche: `## Chimie : imagerie médicale et radioactivité

L'imagerie médicale permet de voir l'intérieur du corps sans l'ouvrir. Chaque technique repose sur un phénomène physique ou chimique : **rayons X**, **ultrasons**, **champ magnétique** ou **radioactivité**. Certains examens utilisent des **produits de contraste** ou des **traceurs radioactifs**.

### La radiographie et le scanner (rayons X)
- Les **rayons X** sont des ondes électromagnétiques très énergétiques. Ils traversent les tissus et sont plus ou moins **absorbés** selon leur densité.
- Les **os** (riches en calcium) absorbent beaucoup : ils apparaissent **blancs**. Les tissus mous absorbent peu (gris), l'air presque pas (noir).
- Le **scanner** (tomodensitométrie) fait tourner la source autour du patient et reconstruit des **coupes** par ordinateur.
- Les rayons X sont **ionisants** : ils peuvent abîmer l'ADN. On limite les doses, on protège les zones sensibles et on évite l'examen chez la femme enceinte.

### Les produits de contraste
- Ils rendent visibles des organes peu contrastés.
- **Iode** (produits iodés) : très absorbant pour les rayons X ; utilisé pour les vaisseaux (angiographie), les reins (urographie) ou le scanner. Risques : **allergie**, atteinte des reins ; on vérifie la **fonction rénale** (créatininémie) avant.
- **Sulfate de baryum** (BaSO4) : bu ou en lavement, il dessine le **tube digestif**. Il est **insoluble**, donc peu absorbé et peu toxique.
- **Gadolinium** : produit de contraste de l'**IRM**.

### L'IRM (imagerie par résonance magnétique)
- Le patient est placé dans un **champ magnétique** intense. Les **noyaux d'hydrogène** (protons) de l'eau et des graisses s'alignent, puis on les excite par des **ondes radio**. En revenant à l'équilibre, ils émettent un signal qui forme l'image.
- Très précise pour les **tissus mous** riches en eau (cerveau, moelle, articulations).
- **Pas de rayons ionisants**. Contre-indications : objets **métalliques** (pacemaker ancien, éclats), claustrophobie.

### L'échographie et le Doppler
- Une sonde émet des **ultrasons** (fréquence supérieure à 20 000 Hz) qui se **réfléchissent** sur les limites entre les tissus. Le temps de retour de l'écho donne la profondeur : **d = v × t / 2**.
- Le **gel** chasse l'air entre la sonde et la peau, car l'air réfléchit presque tous les ultrasons.
- **Sans danger** : utilisée pour suivre la grossesse.
- L'**effet Doppler** : la fréquence de l'onde réfléchie change quand la cible bouge. Il permet de mesurer la **vitesse du sang** dans les vaisseaux (recherche d'une phlébite, d'un rétrécissement).

### La radioactivité et la médecine nucléaire
- Un **noyau** est noté A Z X : **Z** = nombre de **protons** (numéro atomique), **A** = nombre de **nucléons** (protons + neutrons). Neutrons = A − Z.
- Des **isotopes** ont le même Z mais un A différent.
- Un noyau **radioactif** est instable et se désintègre en émettant un rayonnement : **alpha** (noyau d'hélium), **bêta moins** (électron), **bêta plus** (positon), souvent accompagné d'un **rayonnement gamma**.
- Lois de conservation : dans une équation nucléaire, la somme des A et la somme des Z se conservent.
- **Demi-vie** (t1/2) : durée au bout de laquelle **la moitié** des noyaux radioactifs s'est désintégrée. Après 2 demi-vies, il reste 1/4 ; après 3, 1/8.
- **Scintigraphie** : on injecte un **traceur** contenant un noyau émetteur gamma, souvent le **technétium 99m** (demi-vie d'environ 6 heures), qui se fixe sur un organe (os, thyroïde, cœur). Une gamma-caméra détecte le rayonnement.
- **TEP** (tomographie par émission de positons) : on injecte du **FDG**, une molécule de glucose marquée au **fluor 18** (demi-vie d'environ 110 minutes). Les cellules qui consomment beaucoup de glucose, comme les **cellules cancéreuses**, le fixent. Le positon émis s'annihile avec un électron et donne deux photons gamma détectés.
- On choisit des noyaux à **demi-vie courte** : assez longue pour faire l'examen, assez courte pour limiter l'irradiation.

### À retenir pour le bac
- Rayons X : ionisants, os blancs, contraste iodé. IRM : protons d'hydrogène, champ magnétique, pas ionisant. Échographie : ultrasons, d = v × t / 2.
- Notation A Z X ; conservation de A et de Z ; demi-vie = moitié des noyaux.
- Technétium 99m en scintigraphie, fluor 18 (FDG) en TEP.`,
      cartes: [
        { q: "Pourquoi les os apparaissent-ils blancs sur une radiographie ?", r: "Ils absorbent beaucoup les rayons X, qui n'atteignent pas le détecteur." },
        { q: "Pourquoi les rayons X sont-ils dangereux à forte dose ?", r: "Ils sont ionisants : ils peuvent abîmer l'ADN des cellules." },
        { q: "Quel produit de contraste utilise-t-on pour le tube digestif ?", r: "Le sulfate de baryum, insoluble, que le patient boit." },
        { q: "Que vérifie-t-on avant d'injecter un produit de contraste iodé ?", r: "Les allergies et la fonction rénale (créatininémie)." },
        { q: "Sur quels noyaux repose l'IRM ?", r: "Sur les noyaux d'hydrogène (protons), surtout ceux de l'eau." },
        { q: "Quelle est la principale contre-indication de l'IRM ?", r: "La présence d'objets métalliques dans le corps (certains pacemakers, éclats)." },
        { q: "Pourquoi met-on du gel pour une échographie ?", r: "Pour chasser l'air, qui réfléchit presque tous les ultrasons." },
        { q: "Comment calcule-t-on une profondeur en échographie ?", r: "d = v × t / 2, car l'onde fait l'aller et le retour." },
        { q: "À quoi sert l'effet Doppler en médecine ?", r: "À mesurer la vitesse du sang dans les vaisseaux." },
        { q: "Que représentent A et Z dans la notation d'un noyau ?", r: "Z = nombre de protons ; A = nombre de nucléons (protons + neutrons)." },
        { q: "Qu'est-ce que des isotopes ?", r: "Des noyaux de même numéro atomique Z mais de nombre de nucléons A différent." },
        { q: "Qu'est-ce que la demi-vie ?", r: "La durée au bout de laquelle la moitié des noyaux radioactifs s'est désintégrée." },
        { q: "Quel traceur utilise-t-on en TEP ?", r: "Le FDG, du glucose marqué au fluor 18, émetteur de positons." },
        { q: "Pourquoi le FDG révèle-t-il les cancers ?", r: "Les cellules cancéreuses consomment beaucoup de glucose et fixent donc le traceur." },
      ],
      quiz: [
        { q: "Quel examen n'utilise **pas** de rayonnement ionisant ?", choix: ["Le scanner","La radiographie","L'IRM","La scintigraphie"], bonne: 2, expl: "L'IRM utilise un champ magnétique et des ondes radio.", niv: 1 },
        { q: "Quelles ondes utilise l'échographie ?", choix: ["Des ultrasons","Des rayons X","Des rayons gamma","Des ondes radio"], bonne: 0, expl: "Ultrasons : fréquence supérieure à 20 000 Hz.", niv: 1 },
        { q: "Que représente Z dans la notation d'un noyau ?", choix: ["Le nombre de neutrons","Le nombre de nucléons","Le nombre de protons","Le nombre d'électrons perdus"], bonne: 2, expl: "Z est le numéro atomique.", niv: 1 },
        { q: "Quel produit de contraste dessine le tube digestif ?", choix: ["Le sulfate de baryum","Le gadolinium","Le technétium 99m","Le fluor 18"], bonne: 0, expl: "Il est bu ou donné en lavement ; insoluble, il passe peu dans le sang.", niv: 1 },
        { q: "Combien de neutrons contient le noyau de fluor 18 (Z = 9) ?", choix: ["18 neutrons","27 neutrons","28 neutrons","9 neutrons"], bonne: 3, expl: "Neutrons = A − Z = 18 − 9 = 9.", niv: 2 },
        { q: "Pourquoi l'IRM est-elle très utile pour le cerveau ?", choix: ["Elle montre surtout les os du crâne","Elle mesure la vitesse du sang","Elle détecte la radioactivité naturelle","Elle montre bien les tissus mous riches en eau"], bonne: 3, expl: "Les protons de l'eau donnent un signal riche dans les tissus mous.", niv: 2 },
        { q: "Pourquoi suit-on la grossesse par échographie plutôt que par radiographie ?", choix: ["La radiographie ne montre pas l'utérus","L'échographie est plus précise pour les os","Les ultrasons sont sans danger pour le fœtus","Les ultrasons soignent le fœtus"], bonne: 2, expl: "Les rayons X, ionisants, sont évités chez la femme enceinte.", niv: 2 },
        { q: "Un patient porte un ancien pacemaker. Quel examen est contre-indiqué ?", choix: ["L'échographie","L'IRM","La prise de sang","La radiographie du poumon"], bonne: 1, expl: "Le champ magnétique intense peut dérégler ou déplacer l'appareil.", niv: 2 },
        { q: "Après 3 demi-vies, quelle fraction des noyaux radioactifs reste-t-il ?", choix: ["1/3","1/6","1/8","1/2"], bonne: 2, expl: "1/2, puis 1/4, puis 1/8.", niv: 2 },
        { q: "Le technétium 99m a une demi-vie de 6 h. Il reste combien d'activité au bout de 12 h ?", choix: ["Un tiers","La moitié","Un quart","Plus rien"], bonne: 2, expl: "12 h = 2 demi-vies : 1/2 × 1/2 = 1/4.", niv: 3 },
        { q: "Un écho revient après 0,0001 s ; v = 1 500 m/s dans les tissus. Quelle profondeur ?", choix: ["15 cm","7,5 cm","75 cm","30 cm"], bonne: 1, expl: "d = v × t / 2 = 1 500 × 0,0001 / 2 = 0,075 m.", niv: 3 },
        { q: "Pourquoi utilise-t-on en médecine des noyaux à demi-vie courte ?", choix: ["Pour que l'image dure plusieurs années","Pour limiter l'irradiation du patient","Pour éviter de faire des images","Pour que le traceur reste à vie dans l'organe"], bonne: 1, expl: "La radioactivité disparaît vite après l'examen.", niv: 3 },
      ],
    },
    {
      chapitre: "st2s-cbph-11",
      fiche: `## Chimie : analyses médicales et dosages

Un bilan sanguin donne des **concentrations** (glucose, cholestérol, créatinine…). Elles sont mesurées au laboratoire par des **dosages**, souvent par **spectrophotométrie** et à l'aide d'**enzymes**. Il faut savoir lire une courbe d'étalonnage, calculer une concentration et la comparer aux valeurs de référence.

### Lire un résultat d'analyse
- Chaque résultat est donné avec une **unité** (g/L, mmol/L, µmol/L) et des **valeurs de référence**.
- On peut changer d'unité : **Cm = C × M** (exemple : glucose, M = 180 g/mol ; 1 g/L = 5,6 mmol/L environ).
- Préfixes : **milli** (m) = 10⁻³ ; **micro** (µ) = 10⁻⁶ ; **nano** (n) = 10⁻⁹.

### La spectrophotométrie
- Une solution **colorée** absorbe une partie de la lumière. Le **spectrophotomètre** mesure l'**absorbance A** (sans unité) à une **longueur d'onde** choisie, celle du **maximum d'absorption**.
- La couleur perçue est la **complémentaire** de la couleur absorbée (une solution qui absorbe le rouge paraît bleu-vert).
- **Loi de Beer-Lambert** : **A = ε × l × C** (ε coefficient d'absorption molaire, l épaisseur de la cuve en cm, C concentration). Pour une même cuve et une même longueur d'onde : **A = k × C**. L'absorbance est **proportionnelle** à la concentration (pour des solutions pas trop concentrées).
- On fait d'abord le **blanc** (cuve avec le solvant seul) pour régler A = 0.

### La courbe d'étalonnage
- On prépare une **gamme** de solutions de concentrations connues (solutions **étalons**, souvent par dilution d'une solution mère).
- On mesure leurs absorbances et on trace **A en fonction de C** : on obtient une **droite qui passe par l'origine**.
- On mesure l'absorbance de l'échantillon et on lit sa concentration sur la droite (ou on la calcule : C = A / k).
- Si l'échantillon a été dilué, on **multiplie** le résultat par le **facteur de dilution**.

### Le dosage enzymatique du glucose
- Une **enzyme** est un **catalyseur biologique**, une **protéine** qui accélère une réaction précise : elle est **spécifique** de son **substrat**. Elle agit dans des conditions douces (environ 37 °C, pH adapté) et est détruite par la chaleur.
- Méthode courante : la **glucose oxydase** oxyde le glucose et produit de l'**eau oxygénée** (H2O2). Une seconde enzyme, la **peroxydase**, utilise H2O2 pour former un **composé coloré**. Plus il y a de glucose, plus la couleur est intense.
- On mesure l'absorbance et on lit la glycémie sur la courbe d'étalonnage.
- Les **lecteurs de glycémie** et les **bandelettes urinaires** reposent sur des réactions enzymatiques semblables.

### Les autres outils d'analyse
- **pH** et solutions **tampons** : le sang est tamponné (pH 7,35 à 7,45).
- **Chromatographie** sur couche mince : séparer et identifier les constituants d'un mélange en comparant leurs migrations à celles de témoins.
- **Électrophorèse** : séparer des molécules chargées (protéines, hémoglobines) dans un champ électrique.

### Les erreurs à éviter
- Oublier de convertir les volumes (mL en L) ou les unités (mg en g).
- Oublier le facteur de dilution.
- Lire une concentration hors de la gamme étalon : il faut alors diluer l'échantillon.

### À retenir pour le bac
- A = ε × l × C : l'absorbance est proportionnelle à la concentration.
- Courbe d'étalonnage = droite passant par l'origine ; on y lit la concentration de l'échantillon.
- Enzyme = catalyseur biologique, spécifique et sensible à la température et au pH.`,
      cartes: [
        { q: "Que mesure un spectrophotomètre ?", r: "L'absorbance d'une solution à une longueur d'onde donnée." },
        { q: "Quelle est la loi de Beer-Lambert ?", r: "A = ε × l × C : l'absorbance est proportionnelle à la concentration." },
        { q: "À quelle longueur d'onde fait-on les mesures ?", r: "À celle du maximum d'absorption de la solution." },
        { q: "À quoi sert le blanc en spectrophotométrie ?", r: "À régler l'absorbance à zéro avec le solvant seul, pour ne mesurer que l'espèce colorée." },
        { q: "Qu'est-ce qu'une courbe d'étalonnage ?", r: "Le graphique A = f(C) tracé avec des solutions de concentrations connues : une droite passant par l'origine." },
        { q: "Comment trouver la concentration d'un échantillon ?", r: "On mesure son absorbance et on lit la concentration sur la courbe d'étalonnage (C = A / k)." },
        { q: "Que faire si l'échantillon a été dilué 5 fois ?", r: "Multiplier la concentration trouvée par 5." },
        { q: "Pourquoi une solution qui absorbe le rouge paraît-elle bleu-vert ?", r: "On voit la couleur complémentaire de la couleur absorbée." },
        { q: "Qu'est-ce qu'une enzyme ?", r: "Une protéine qui catalyse une réaction précise : un catalyseur biologique spécifique." },
        { q: "Que signifie la spécificité d'une enzyme ?", r: "Elle n'agit que sur un substrat précis, comme une clé dans une serrure." },
        { q: "Quel est le principe du dosage du glucose ?", r: "La glucose oxydase oxyde le glucose ; la peroxydase forme ensuite un composé coloré dosé au spectrophotomètre." },
        { q: "Pourquoi une enzyme ne fonctionne-t-elle plus après chauffage ?", r: "La chaleur dénature la protéine : sa forme change et elle ne reconnaît plus son substrat." },
        { q: "Comment convertir une glycémie de g/L en mmol/L ?", r: "On divise par la masse molaire (180 g/mol) : C = Cm / M, puis on passe en mmol." },
        { q: "Qu'est-ce que l'électrophorèse ?", r: "Une technique qui sépare des molécules chargées dans un champ électrique, comme les hémoglobines." },
      ],
      quiz: [
        { q: "Quelle grandeur mesure un spectrophotomètre ?", choix: ["La masse molaire","Le pH","La température","L'absorbance"], bonne: 3, expl: "L'absorbance indique la quantité de lumière absorbée par la solution.", niv: 1 },
        { q: "Quelle est l'allure d'une courbe d'étalonnage A = f(C) ?", choix: ["Une courbe en cloche","Une droite passant par l'origine","Une droite horizontale","Une courbe qui décroît"], bonne: 1, expl: "L'absorbance est proportionnelle à la concentration.", niv: 1 },
        { q: "Qu'est-ce qu'une enzyme ?", choix: ["Un sucre de réserve","Un lipide de membrane","Un ion du plasma","Un catalyseur biologique"], bonne: 3, expl: "C'est une protéine qui accélère une réaction précise.", niv: 1 },
        { q: "En spectrophotométrie, quel est le rôle du blanc ?", choix: ["Régler l'absorbance à zéro","Colorer la solution à doser","Diluer l'échantillon dix fois","Chauffer la cuve à 37 °C"], bonne: 0, expl: "On mesure ensuite seulement l'absorbance due à l'espèce colorée.", niv: 1 },
        { q: "Si la concentration double, comment varie l'absorbance ?", choix: ["Elle reste identique","Elle diminue de moitié","Elle est multipliée par quatre","Elle double"], bonne: 3, expl: "A = k × C : les deux grandeurs sont proportionnelles.", niv: 2 },
        { q: "Une solution absorbe surtout le bleu. Quelle couleur paraît-elle ?", choix: ["Bleue","Violette","Orange","Verte"], bonne: 2, expl: "On perçoit la couleur complémentaire de la couleur absorbée.", niv: 2 },
        { q: "Pourquoi le dosage du glucose se fait-il vers 37 °C ?", choix: ["Le glucose se forme à cette température","Le spectrophotomètre ne marche qu'à 37 °C","Les réactifs gèlent en dessous de 37 °C","C'est la température où l'enzyme agit le mieux"], bonne: 3, expl: "Les enzymes humaines ont une activité maximale vers la température du corps.", niv: 2 },
        { q: "La droite d'étalonnage donne A = 2 × C (C en g/L). L'échantillon a A = 1,8. Quelle glycémie ?", choix: ["3,6 g/L","1,8 g/L","1,2 g/L","0,9 g/L"], bonne: 3, expl: "C = A / 2 = 1,8 / 2 = 0,9 g/L.", niv: 2 },
        { q: "Pourquoi la glucose oxydase ne réagit-elle pas avec le saccharose du sang ?", choix: ["Le saccharose est trop coloré","Le saccharose est une protéine","Elle est spécifique du glucose","Elle est détruite par le saccharose"], bonne: 2, expl: "Chaque enzyme reconnaît un substrat précis.", niv: 2 },
        { q: "Un échantillon dilué 10 fois donne 0,15 g/L. Quelle est la concentration réelle ?", choix: ["1,5 g/L","0,015 g/L","0,15 g/L","0,0015 g/L"], bonne: 0, expl: "On multiplie par le facteur de dilution : 0,15 × 10 = 1,5 g/L.", niv: 3 },
        { q: "Une glycémie est de 1,8 g/L (M = 180 g/mol). Quelle valeur en mmol/L ?", choix: ["10 mmol/L","1 mmol/L","0,01 mmol/L","0,1 mmol/L"], bonne: 0, expl: "C = 1,8 / 180 = 0,010 mol/L, soit 10 mmol/L.", niv: 3 },
        { q: "L'absorbance d'un échantillon dépasse celle de l'étalon le plus concentré. Que faire ?", choix: ["Prolonger la droite à la main","Garder la valeur la plus haute de la gamme","Changer de longueur d'onde au hasard","Diluer l'échantillon puis refaire la mesure"], bonne: 3, expl: "On ne lit une concentration qu'à l'intérieur de la gamme étalon.", niv: 3 },
      ],
    },
    {
      chapitre: "st2s-cbph-12",
      fiche: `## Chimie : protéines, lipides, vitamines et médicaments

Ce thème relie la structure des molécules à leurs effets sur la santé : pourquoi certaines graisses protègent le cœur et d'autres non, comment se forment les protéines, à quoi servent les vitamines, comment un médicament est conçu.

### Les groupes caractéristiques à reconnaître
- **Hydroxyle** –OH : famille des **alcools**.
- **Carboxyle** –COOH : famille des **acides carboxyliques**.
- **Amine** –NH2 : famille des **amines**.
- **Ester** –COO– : obtenu par réaction d'un acide et d'un alcool (**estérification**).
- **Amide** –CO–NH– : c'est la **liaison peptidique** des protéines.

### Acides α-aminés et protéines
- Un **acide α-aminé** porte, sur le même carbone (le carbone α), un groupe **carboxyle** et un groupe **amine**. Formule générale : R–CH(NH2)–COOH. Il en existe **20** dans les protéines ; 9 sont **essentiels** (apportés par l'alimentation).
- Le carbone α est en général **asymétrique** : il existe deux formes images l'une de l'autre dans un miroir (D et L). Les protéines humaines utilisent la forme **L**.
- Deux acides aminés se lient par une **liaison peptidique** (–CO–NH–) en libérant une molécule d'**eau** : c'est une **condensation**. Une chaîne forme un **peptide**, puis une **protéine** (plus de 50 acides aminés environ).
- La forme de la protéine (structures primaire, secondaire, tertiaire) fait sa fonction. La chaleur, un pH extrême ou certains produits la **dénaturent** (le blanc d'œuf qui cuit).
- L'**hydrolyse** (par les enzymes de la digestion) coupe les liaisons peptidiques et libère les acides aminés.

### Les lipides
- Les **triglycérides** (graisses et huiles) sont des **esters** du **glycérol** et de trois **acides gras**.
- **Acide gras saturé** : pas de double liaison C=C dans la chaîne (beurre, graisses animales) ; solide à température ambiante. En excès, il favorise le **cholestérol LDL**.
- **Acide gras insaturé** : une (mono-) ou plusieurs (poly-) doubles liaisons (huiles végétales, poissons gras). Les **oméga-3** et **oméga-6** sont **essentiels** : le corps ne sait pas les fabriquer.
- Isomérie **cis/trans** autour d'une double liaison : les acides gras naturels sont surtout **cis**. Les acides gras **trans** (huiles partiellement **hydrogénées**, produits industriels) augmentent le risque **cardiovasculaire**.
- **Cholestérol** : utile (membranes, hormones), transporté dans le sang par les **LDL** (« mauvais », il se dépose dans les artères : **athérosclérose**) et les **HDL** (« bon », il le ramène au foie).
- **Saponification** : un ester (graisse) avec de la soude donne du **savon** et du glycérol.

### Vitamines et oligoéléments
- Les **vitamines** sont nécessaires en petite quantité et doivent être apportées par l'alimentation. **Hydrosolubles** (C, groupe B) ou **liposolubles** (A, D, E, K).
- **Vitamine C** (acide ascorbique) : antioxydant ; sa carence grave donne le **scorbut**. **Vitamine D** : fixation du **calcium** sur les os ; fabriquée par la peau grâce aux UV ; carence = **rachitisme**.
- **Oligoéléments** : minéraux en très petite quantité. **Fer** (hémoglobine ; carence = **anémie**), **iode** (hormones de la **thyroïde**), fluor (dents), zinc.
- **Antioxydants** et **UV** : les UV et la pollution créent des **radicaux libres** qui abîment les cellules (vieillissement, cancers de la peau). Les antioxydants (vitamines C et E, polyphénols) les neutralisent. Les **crèmes solaires** contiennent des filtres qui absorbent ou réfléchissent les UV.

### De la molécule au médicament
- Un médicament contient un **principe actif** (qui soigne) et des **excipients** (qui facilitent la prise et la conservation).
- **Générique** : même principe actif, même dose et même efficacité que le médicament d'origine, moins cher.
- Le principe actif est souvent d'origine naturelle puis **synthétisé** (l'aspirine vient de l'écorce de saule).
- Étapes : recherche, essais précliniques, **essais cliniques** en trois phases, **autorisation de mise sur le marché** (AMM), puis **pharmacovigilance** (surveillance des effets indésirables).
- La **forme galénique** (comprimé, gélule, sirop, injection, patch) dépend de la voie d'administration et de la vitesse d'action voulue.

### À retenir pour le bac
- Acide α-aminé = –NH2 et –COOH sur le même carbone ; liaison peptidique –CO–NH– avec perte d'eau.
- Saturé = pas de C=C ; insaturé = au moins une C=C ; trans et saturés en excès = risque cardiovasculaire.
- Vitamine C antioxydante ; vitamine D et calcium ; fer et anémie ; iode et thyroïde.`,
      cartes: [
        { q: "Quels groupes porte un acide α-aminé ?", r: "Un groupe amine (–NH2) et un groupe carboxyle (–COOH) sur le même carbone." },
        { q: "Qu'est-ce qu'une liaison peptidique ?", r: "La liaison –CO–NH– qui unit deux acides aminés, formée avec perte d'une molécule d'eau." },
        { q: "Que signifie « acide aminé essentiel » ?", r: "Un acide aminé que le corps ne fabrique pas et qui doit venir de l'alimentation." },
        { q: "Qu'est-ce que la dénaturation d'une protéine ?", r: "La perte de sa forme, donc de sa fonction, sous l'effet de la chaleur ou d'un pH extrême." },
        { q: "De quoi est formé un triglycéride ?", r: "D'un glycérol estérifié par trois acides gras." },
        { q: "Quelle différence entre acide gras saturé et insaturé ?", r: "Le saturé n'a pas de double liaison C=C ; l'insaturé en a au moins une." },
        { q: "Pourquoi dit-on que les oméga-3 sont essentiels ?", r: "Le corps ne sait pas les fabriquer : ils doivent être apportés par l'alimentation." },
        { q: "Pourquoi les acides gras trans sont-ils déconseillés ?", r: "Ils augmentent le risque de maladies cardiovasculaires." },
        { q: "Quelle différence entre LDL et HDL ?", r: "Les LDL déposent le cholestérol dans les artères ; les HDL le ramènent au foie." },
        { q: "Quelle est la carence en vitamine C ?", r: "Le scorbut (fatigue, saignements des gencives)." },
        { q: "Quel est le rôle de la vitamine D ?", r: "Elle permet la fixation du calcium sur les os ; sa carence donne le rachitisme." },
        { q: "À quoi sert l'iode dans l'organisme ?", r: "À fabriquer les hormones de la thyroïde." },
        { q: "Qu'est-ce qu'un excipient ?", r: "Une substance sans effet thérapeutique qui facilite la prise et la conservation du médicament." },
        { q: "Qu'est-ce qu'un médicament générique ?", r: "Un médicament avec le même principe actif, la même dose et la même efficacité que l'original, moins cher." },
        { q: "Qu'est-ce que la pharmacovigilance ?", r: "La surveillance des effets indésirables d'un médicament après sa mise sur le marché." },
      ],
      quiz: [
        { q: "Quel groupe caractérise un acide carboxylique ?", choix: ["–OH","–COOH","–NH2","–CO–NH–"], bonne: 1, expl: "Le groupe carboxyle est –COOH ; –OH est celui des alcools.", niv: 1 },
        { q: "Quelle liaison relie deux acides aminés ?", choix: ["La liaison ester","La liaison hydrogène","La liaison peptidique","La liaison ionique"], bonne: 2, expl: "C'est une liaison amide –CO–NH–.", niv: 1 },
        { q: "Quelle carence provoque le scorbut ?", choix: ["Une carence en fer","Une carence en vitamine C","Une carence en iode","Une carence en vitamine D"], bonne: 1, expl: "Le scorbut touchait les marins privés de fruits frais.", niv: 1 },
        { q: "Quelle partie d'un médicament soigne ?", choix: ["Le principe actif","L'excipient","L'emballage","La notice"], bonne: 0, expl: "Les excipients facilitent la prise mais ne soignent pas.", niv: 1 },
        { q: "Quelle molécule est libérée quand deux acides aminés se lient ?", choix: ["Une molécule de glucose","Une molécule de dioxygène","Une molécule de glycérol","Une molécule d'eau"], bonne: 3, expl: "C'est une condensation : –COOH et –NH2 réagissent en libérant H2O.", niv: 2 },
        { q: "Pourquoi le beurre est-il solide et l'huile d'olive liquide à 20 °C ?", choix: ["L'huile contient plus de cholestérol","Le beurre ne contient pas de lipides","Le beurre est riche en acides gras saturés","L'huile est formée de protéines"], bonne: 2, expl: "Les chaînes saturées, droites, s'empilent mieux et forment un solide.", niv: 2 },
        { q: "Une personne manque de fer. Quel trouble risque-t-elle ?", choix: ["Un rachitisme","Une ostéoporose","Une anémie","Un scorbut"], bonne: 2, expl: "Le fer est indispensable à l'hémoglobine des globules rouges.", niv: 2 },
        { q: "Pourquoi recommande-t-on de manger du poisson gras ?", choix: ["Il apporte des acides gras trans","Il apporte beaucoup de cholestérol LDL","Il contient de l'amidon","Il apporte des oméga-3"], bonne: 3, expl: "Les oméga-3, insaturés et essentiels, protègent le système cardiovasculaire.", niv: 2 },
        { q: "Pourquoi un œuf cuit ne redevient-il pas liquide en refroidissant ?", choix: ["Ses lipides se sont évaporés","Son eau s'est transformée en sucre","Ses vitamines ont formé un gel","Ses protéines sont dénaturées"], bonne: 3, expl: "La chaleur change la forme des protéines de façon irréversible.", niv: 2 },
        { q: "Un taux élevé de LDL augmente quel risque ?", choix: ["L'anémie","L'athérosclérose","Le scorbut","L'hypoglycémie"], bonne: 1, expl: "Le cholestérol LDL se dépose dans les artères et forme des plaques.", niv: 3 },
        { q: "Pourquoi un générique peut-il remplacer le médicament d'origine ?", choix: ["Il a le même principe actif à la même dose","Il a exactement les mêmes excipients","Il a été inventé par le même laboratoire","Il agit plus vite que l'original"], bonne: 0, expl: "Les excipients peuvent changer, mais l'efficacité est la même.", niv: 3 },
        { q: "Pourquoi les crèmes solaires contiennent-elles des antioxydants ?", choix: ["Pour limiter les radicaux libres créés par les UV","Pour faire bronzer plus vite la peau","Pour fabriquer plus de vitamine D","Pour colorer la peau en orange"], bonne: 0, expl: "Les UV créent des radicaux libres qui abîment l'ADN ; les antioxydants les neutralisent.", niv: 3 },
      ],
    },
  ],
  methode: [
    {
      "id": "st2s-cbph-m1",
      "mat": "st2s-cbph",
      "titre": "Le cas clinique : identifier la pathologie",
      "formules": [
        "À partir des signes cliniques et des résultats d'analyse, identifier la pathologie dont souffre le patient.",
        "Justifier le diagnostic posé par le médecin.",
        "Expliquer l'origine des symptômes présentés."
      ],
      "vu": [
        "Format de l'écrit défini par la note de service de 2020, consolidée en 2024",
        "Sujets de biologie et physiopathologie humaines des sessions 2021 à 2025 (cas cliniques sur le diabète, l'immunité, la reproduction, les maladies génétiques)"
      ],
      "pts": "environ 3 à 5 points sur 20 en biologie",
      "attendu": "Le correcteur attend un diagnostic justifié : chaque signe clinique et chaque résultat anormal du document doit être relevé, comparé à la valeur de référence, puis relié à la pathologie. Il faut nommer la maladie avec le bon vocabulaire médical et expliquer le mécanisme qui produit les symptômes.",
      "etapes": [
        "Lire tout le cas clinique et surligner l'âge, les signes, les antécédents et les résultats d'analyse.",
        "Comparer chaque résultat à la valeur de référence et noter s'il est normal, élevé ou bas.",
        "Traduire les termes médicaux (polyurie, hyperglycémie…) pour comprendre chaque signe.",
        "Relier les signes entre eux et nommer la pathologie.",
        "Rédiger : « Le patient présente… (signe, valeur) alors que la normale est… donc… ».",
        "Conclure par une phrase qui nomme clairement la pathologie."
      ],
      "mots": [
        "signe clinique",
        "valeur de référence",
        "supérieur à la normale",
        "ce qui traduit",
        "donc",
        "on peut conclure que"
      ],
      "pieges": [
        "Donner le nom de la maladie sans aucune justification.",
        "Recopier les valeurs sans les comparer à la normale.",
        "Oublier l'unité ou se tromper d'unité (g/L et mmol/L).",
        "Confondre deux formes de la maladie (diabète de type 1 et de type 2)."
      ],
      "cas": "Théo, 14 ans, consulte pour une fatigue intense. Il a perdu 5 kg en un mois, boit plus de 4 litres d'eau par jour et se lève la nuit pour uriner. Sa glycémie à jeun est de 2,1 g/L ; la bandelette urinaire montre du glucose et des corps cétoniques. Aucun antécédent de surpoids.",
      "question": "Identifier la pathologie dont souffre Théo en justifiant à l'aide des données.",
      "modele": "Théo présente une glycémie à jeun de 2,1 g/L, alors que la normale est comprise entre 0,70 et 1,10 g/L : il est en hyperglycémie, et la valeur dépasse le seuil de 1,26 g/L qui définit le diabète. Il présente une polydipsie (plus de 4 L d'eau par jour) et une polyurie (il urine beaucoup, même la nuit) : le glucose, au-dessus du seuil rénal de 1,8 g/L, passe dans l'urine (glycosurie) et entraîne de l'eau avec lui. Son amaigrissement et les corps cétoniques montrent que ses cellules utilisent leurs graisses faute de pouvoir utiliser le glucose. Ces signes apparus brutalement chez un adolescent sans surpoids orientent vers un diabète de type 1, dû à la destruction auto-immune des cellules bêta du pancréas.",
      "grille": [
        "Glycémie relevée et comparée à la normale",
        "Seuil du diabète cité",
        "Polyurie et polydipsie nommées et expliquées",
        "Glycosurie reliée au seuil rénal",
        "Amaigrissement expliqué",
        "Type 1 justifié (âge, début brutal, pas de surpoids)"
      ]
    },
    {
      "id": "st2s-cbph-m2",
      "mat": "st2s-cbph",
      "titre": "Analyser un document ou un résultat expérimental",
      "formules": [
        "Analyser le document 3.",
        "Exploiter les résultats de l'expérience.",
        "Montrer à l'aide du document que…"
      ],
      "vu": [
        "Format de l'écrit défini par la note de service de 2020, consolidée en 2024",
        "Sujets de biologie et physiopathologie humaines des sessions 2021 à 2025 (cas cliniques sur le diabète, l'immunité, la reproduction, les maladies génétiques)"
      ],
      "pts": "souvent la moitié des points de la partie biologie",
      "attendu": "Analyser, c'est décrire précisément ce que montre le document avec des valeurs chiffrées, comparer (avant et après, malade et témoin), puis interpréter, c'est-à-dire expliquer ce que cela signifie en biologie. Le correcteur attend la démarche « je vois, donc je comprends ».",
      "etapes": [
        "Lire le titre, les axes et les unités du graphique ou du tableau.",
        "Repérer le témoin ou la situation de référence.",
        "Décrire l'évolution avec des valeurs précises : « de 1 g/L à 1,6 g/L en 30 minutes ».",
        "Comparer les courbes ou les colonnes entre elles.",
        "Interpréter avec une notion du cours (hormone, cellule, mécanisme).",
        "Conclure en une phrase qui répond à la question posée."
      ],
      "mots": [
        "on observe que",
        "augmente de… à…",
        "par rapport au témoin",
        "alors que",
        "cela montre que",
        "j'en déduis que"
      ],
      "pieges": [
        "Décrire sans interpréter, ou interpréter sans décrire.",
        "Oublier les valeurs chiffrées et leurs unités.",
        "Paraphraser le titre du document sans l'exploiter.",
        "Oublier de comparer au témoin."
      ],
      "cas": "Un graphique présente la glycémie et l'insulinémie de deux personnes après l'ingestion de 75 g de glucose. Personne A : la glycémie passe de 0,9 g/L à 1,4 g/L à 30 minutes puis revient à 0,9 g/L à 2 heures ; l'insuline monte nettement. Personne B : la glycémie passe de 1,3 g/L à 2,6 g/L et reste à 2,2 g/L à 2 heures ; l'insuline monte très peu.",
      "question": "Analyser le document pour comparer la régulation de la glycémie chez A et chez B.",
      "modele": "Chez A, la glycémie passe de 0,9 g/L à 1,4 g/L 30 minutes après l'ingestion de glucose puis revient à 0,9 g/L en 2 heures ; en même temps, l'insulinémie augmente nettement. Chez B, la glycémie part déjà d'une valeur élevée (1,3 g/L), monte jusqu'à 2,6 g/L et reste à 2,2 g/L après 2 heures, alors que l'insulinémie augmente très peu. Je vois que chez A, la hausse de la glycémie déclenche une sécrétion d'insuline qui la ramène à la normale : la régulation fonctionne. Chez B, le pancréas sécrète trop peu d'insuline : la glycémie n'est pas corrigée. B présente donc un diabète, par défaut de sécrétion d'insuline.",
      "grille": [
        "Valeurs de A relevées avec unités",
        "Valeurs de B relevées avec unités",
        "Comparaison A et B",
        "Lien glycémie et insuline expliqué",
        "Conclusion : régulation normale chez A, diabète chez B"
      ]
    },
    {
      "id": "st2s-cbph-m3",
      "mat": "st2s-cbph",
      "titre": "La terminologie médicale",
      "formules": [
        "Donner la signification du terme…",
        "Décomposer le mot… et en donner le sens.",
        "Proposer un terme médical pour désigner…"
      ],
      "vu": [
        "Format de l'écrit défini par la note de service de 2020, consolidée en 2024",
        "Sujets de biologie et physiopathologie humaines des sessions 2021 à 2025 (cas cliniques sur le diabète, l'immunité, la reproduction, les maladies génétiques)"
      ],
      "pts": "1 à 2 points par sujet, souvent en début de partie",
      "attendu": "Le correcteur attend la décomposition du mot en préfixe, racine et suffixe, avec le sens de chaque partie, puis la définition complète. Ce sont des points faciles à prendre si l'on connaît les racines les plus courantes.",
      "etapes": [
        "Couper le mot en morceaux : préfixe, racine, suffixe.",
        "Donner le sens de chaque morceau.",
        "Recomposer une définition claire en commençant par le suffixe.",
        "Vérifier que la définition a du sens dans le cas clinique."
      ],
      "mots": [
        "hyper- (excès)",
        "hypo- (insuffisance)",
        "-émie (dans le sang)",
        "-urie (dans l'urine)",
        "-ite (inflammation)",
        "-ectomie (ablation)",
        "-algie (douleur)",
        "a- (absence)"
      ],
      "pieges": [
        "Donner seulement un synonyme sans décomposer.",
        "Confondre hyper- et hypo-.",
        "Confondre -tomie (incision) et -ectomie (ablation)."
      ],
      "cas": "Dans un compte rendu d'hospitalisation, on lit : « Patiente de 52 ans présentant une hématurie et une néphralgie. Une néphrectomie partielle est envisagée. »",
      "question": "Donner la signification des termes hématurie, néphralgie et néphrectomie.",
      "modele": "Hématurie : hémat- = sang, -urie = urine ; c'est la présence de sang dans l'urine. Néphralgie : néphr- = rein, -algie = douleur ; c'est une douleur du rein. Néphrectomie : néphr- = rein, -ectomie = ablation ; c'est l'ablation chirurgicale d'un rein, ici d'une partie seulement.",
      "grille": [
        "Hématurie décomposée et définie",
        "Néphralgie décomposée et définie",
        "Néphrectomie décomposée et définie",
        "Sens de partielle précisé"
      ]
    },
    {
      "id": "st2s-cbph-m4",
      "mat": "st2s-cbph",
      "titre": "Le schéma fonctionnel ou légendé",
      "formules": [
        "Réaliser un schéma fonctionnel de la régulation de…",
        "Légender le document.",
        "Compléter le schéma bilan."
      ],
      "vu": [
        "Format de l'écrit défini par la note de service de 2020, consolidée en 2024",
        "Sujets de biologie et physiopathologie humaines des sessions 2021 à 2025 (cas cliniques sur le diabète, l'immunité, la reproduction, les maladies génétiques)"
      ],
      "pts": "2 à 4 points",
      "attendu": "Un schéma clair, fait au crayon, avec un titre, des légendes alignées et reliées par des traits à la règle. Pour un schéma fonctionnel de régulation : la variable réglée, le capteur, le centre intégrateur, le message (nerveux ou hormonal), les effecteurs et la correction, avec des flèches orientées et les signes + ou −.",
      "etapes": [
        "Écrire le titre du schéma.",
        "Placer au centre la variable réglée (glycémie, température…) et l'écart (hausse ou baisse).",
        "Ajouter le capteur et le centre intégrateur, puis le message envoyé.",
        "Placer les effecteurs et leur action.",
        "Fermer la boucle par une flèche qui montre la correction (rétrocontrôle négatif).",
        "Vérifier que chaque flèche a un sens et une légende."
      ],
      "mots": [
        "capteur",
        "centre intégrateur",
        "message hormonal",
        "effecteur",
        "rétrocontrôle négatif",
        "stimulation (+)",
        "inhibition (−)"
      ],
      "pieges": [
        "Un schéma sans titre.",
        "Des flèches sans légende ou dans le mauvais sens.",
        "Oublier de fermer la boucle de régulation.",
        "Faire un dessin artistique au lieu d'un schéma simple."
      ],
      "cas": "Après un repas riche en sucres, la glycémie de Sarah passe de 0,9 g/L à 1,5 g/L, puis revient à la normale en deux heures.",
      "question": "Réaliser un schéma fonctionnel montrant comment la glycémie de Sarah revient à la normale.",
      "modele": "Titre : régulation de la glycémie après un repas. Hausse de la glycémie (1,5 g/L) → détectée par les cellules bêta des îlots de Langerhans (capteur et centre intégrateur) → sécrétion d'insuline dans le sang (message hormonal) → action sur le foie et les muscles (stockage du glucose en glycogène) et sur le tissu adipeux (stockage en triglycérides), entrée du glucose dans les cellules → baisse de la glycémie → retour à environ 1 g/L. Une flèche marquée « − » repart de la glycémie corrigée vers le pancréas : la sécrétion d'insuline diminue (rétrocontrôle négatif).",
      "grille": [
        "Titre",
        "Variable et écart indiqués",
        "Capteur et centre intégrateur (cellules bêta)",
        "Insuline et voie sanguine",
        "Effecteurs et leur action",
        "Boucle fermée avec rétrocontrôle"
      ]
    },
    {
      "id": "st2s-cbph-m5",
      "mat": "st2s-cbph",
      "titre": "L'exercice de chimie : calculer et conclure",
      "formules": [
        "Calculer la concentration en masse de…",
        "Déterminer la quantité de matière…",
        "Conclure quant au respect de la norme."
      ],
      "vu": [
        "Format de l'écrit défini par la note de service de 2020, consolidée en 2024",
        "Sujets de biologie et physiopathologie humaines des sessions 2021 à 2025 (cas cliniques sur le diabète, l'immunité, la reproduction, les maladies génétiques)"
      ],
      "pts": "la plupart des 20 points de la partie chimie",
      "attendu": "Chaque calcul doit montrer la formule littérale, l'application numérique avec les unités, puis le résultat avec son unité et un nombre raisonnable de chiffres significatifs. La question se termine presque toujours par une comparaison à une norme ou à une valeur de référence, avec une phrase de conclusion.",
      "etapes": [
        "Relever les données utiles et les convertir dans les bonnes unités (mL en L, mg en g, °C en K).",
        "Écrire la formule littérale (n = m / M, Cm = m / V, C1V1 = C2V2, PV = nRT, A = k × C).",
        "Remplacer par les valeurs, avec leurs unités.",
        "Donner le résultat avec son unité.",
        "Comparer à la norme ou à la valeur de référence.",
        "Conclure par une phrase complète."
      ],
      "mots": [
        "formule littérale",
        "application numérique",
        "conversion",
        "chiffres significatifs",
        "inférieur à la limite",
        "conforme à la norme"
      ],
      "pieges": [
        "Donner un résultat sans unité.",
        "Oublier de convertir les mL en L ou les °C en K.",
        "Oublier le facteur de dilution.",
        "Calculer sans conclure par rapport à la norme."
      ],
      "cas": "Une eau de puits est analysée : on trouve 31 mg d'ions nitrate dans un échantillon de 500 mL. La limite de qualité de l'eau potable est de 50 mg/L.",
      "question": "Calculer la concentration en masse des ions nitrate et dire si cette eau peut être bue par une femme enceinte.",
      "modele": "Cm = m / V. Données : m = 31 mg ; V = 500 mL = 0,500 L. Cm = 31 / 0,500 = 62 mg/L. La concentration en ions nitrate (62 mg/L) est supérieure à la limite de qualité de 50 mg/L : cette eau n'est pas potable pour ce critère et ne doit pas être bue par une femme enceinte ni utilisée pour préparer les biberons.",
      "grille": [
        "Conversion de 500 mL en 0,500 L",
        "Formule littérale écrite",
        "Résultat 62 mg/L avec l'unité",
        "Comparaison à 50 mg/L",
        "Conclusion rédigée"
      ]
    }
  ],
  sujets: [
    {
      id: "st2s-cbph-s1", matiere: 'st2s-cbph', titre: "Sujet d'entraînement 1 : biologie et physiopathologie humaines", duree: 180,
      enonce: `## Sujet d'entraînement 1 : biologie et physiopathologie humaines (inventé)

Ce sujet est inventé pour s'entraîner, au format de la partie biologie de l'écrit : environ 3 heures, sur 20 points. La patiente et les résultats sont imaginaires.

### Le cas de Madame L.
Madame L., 58 ans, aide-soignante, vient consulter son médecin traitant. Elle se plaint d'une fatigue persistante et de plaies au pied qui cicatrisent mal. Elle mesure 1,62 m et pèse 86 kg. Son père était diabétique. Elle ne pratique aucune activité physique depuis plusieurs années.

**Document 1 : résultats de la prise de sang (à jeun)**
- Glycémie : 1,48 g/L (valeurs de référence : 0,70 à 1,10 g/L)
- Hémoglobine glyquée (HbA1c) : 8,2 % (objectif chez le diabétique : moins de 7 %)
- Créatininémie : 98 µmol/L (valeurs de référence : 45 à 90 µmol/L)
- Un second contrôle de glycémie à jeun, une semaine plus tard : 1,40 g/L

**Document 2 : insulinémie de Madame L.**
Après un repas, l'insulinémie de Madame L. est plus élevée que celle d'une personne en bonne santé, mais sa glycémie reste haute pendant plus de trois heures.

**Document 3 : vaccination**
Le médecin rappelle que les personnes diabétiques doivent être vaccinées chaque automne contre la grippe. Un graphique montre la quantité d'anticorps anti-grippe dans le sang après une première injection d'un vaccin (pic faible au bout de 14 jours), puis après une seconde injection du même antigène (pic dix fois plus haut au bout de 5 jours).

### Partie 1 : le diagnostic (9 points)
1.1 Donner la signification des termes « hyperglycémie » et « glycosurie ». (1 point)
1.2 À l'aide du document 1, montrer que Madame L. est diabétique. (2 points)
1.3 Expliquer, à l'aide du document 2, pourquoi il s'agit d'un diabète de type 2. Citer deux facteurs de risque présents chez Madame L. (3 points)
1.4 Réaliser un schéma fonctionnel de la régulation de la glycémie après un repas chez une personne en bonne santé. (3 points)

### Partie 2 : complications et suivi (5 points)
2.1 Expliquer ce que mesure l'hémoglobine glyquée et interpréter le résultat de Madame L. (2 points)
2.2 La créatininémie de Madame L. est un peu élevée. Expliquer le lien possible avec son diabète et nommer cette complication. (2 points)
2.3 Proposer deux mesures hygiéno-diététiques adaptées. (1 point)

### Partie 3 : l'immunité et la vaccination (6 points)
3.1 Analyser le document 3 en comparant les deux réponses. (3 points)
3.2 Expliquer, en citant les cellules impliquées, pourquoi la seconde réponse est plus rapide et plus intense. (2 points)
3.3 Expliquer pourquoi le vaccin contre la grippe doit être refait chaque année. (1 point)`,
      corrige: `## Corrigé du sujet d'entraînement 1

### Partie 1
1.1 Hyperglycémie : hyper- = excès, glyc- = sucre, -émie = dans le sang ; c'est un taux de glucose dans le sang supérieur à la normale. Glycosurie : glyc- = sucre, -urie = urine ; c'est la présence de glucose dans l'urine.

1.2 La glycémie à jeun de Madame L. est de 1,48 g/L, puis de 1,40 g/L une semaine plus tard. Ces deux valeurs dépassent les valeurs de référence (0,70 à 1,10 g/L) et surtout le seuil de 1,26 g/L : une glycémie à jeun supérieure ou égale à 1,26 g/L à deux reprises définit le diabète. Madame L. est donc diabétique.

1.3 Madame L. sécrète de l'insuline, et même plus que la normale (document 2), mais sa glycémie reste élevée : ses cellules répondent mal à l'insuline. C'est une insulinorésistance, caractéristique du diabète de type 2 (dans le type 1, il n'y a plus d'insuline). Facteurs de risque : surpoids (IMC = 86 / 1,62² ≈ 32,8, obésité), sédentarité, antécédent familial (père diabétique), âge.

1.4 Schéma attendu : titre ; hausse de la glycémie après le repas → détection par les cellules bêta des îlots de Langerhans du pancréas → sécrétion d'insuline dans le sang → action sur le foie et les muscles (stockage du glucose en glycogène, entrée du glucose dans les cellules) et sur le tissu adipeux → baisse de la glycémie → retour vers 1 g/L ; flèche de rétrocontrôle négatif vers le pancréas.

### Partie 2
2.1 L'hémoglobine glyquée reflète la glycémie moyenne des 2 à 3 derniers mois. Avec 8,2 %, au-dessus de l'objectif de 7 %, la glycémie de Madame L. est trop élevée depuis plusieurs mois : son diabète est mal équilibré.

2.2 La créatinine, déchet éliminé par le rein, s'accumule quand la filtration glomérulaire baisse. Une glycémie trop élevée pendant longtemps abîme les petits vaisseaux du glomérule : c'est la néphropathie diabétique, une microangiopathie qui peut mener à l'insuffisance rénale.

2.3 Par exemple : une activité physique régulière (marche 30 minutes par jour), une alimentation équilibrée pauvre en sucres rapides et en graisses saturées, une perte de poids progressive.

### Partie 3
3.1 Après la première injection, les anticorps apparaissent lentement et le pic est faible, au bout de 14 jours. Après la seconde injection du même antigène, les anticorps apparaissent plus vite (pic au bout de 5 jours) et en quantité dix fois plus grande. La réponse secondaire est donc plus rapide et plus intense que la réponse primaire.

3.2 Lors du premier contact, quelques lymphocytes B reconnaissent l'antigène, se multiplient et se transforment en plasmocytes qui sécrètent des anticorps, avec l'aide des lymphocytes T4. Il reste ensuite des lymphocytes B et T mémoire, plus nombreux. Au second contact, ces cellules mémoire sont activées tout de suite : beaucoup de plasmocytes sont produits rapidement.

3.3 Le virus de la grippe mute sans cesse : ses protéines de surface (hémagglutinine H et neuraminidase N) changent. Les anticorps et les cellules mémoire de l'année précédente ne le reconnaissent plus bien : il faut un vaccin adapté chaque année.`,
      grille: [{"c":"Terminologie exacte (décomposition et définition)","pts":1},{"c":"Diagnostic du diabète justifié par les valeurs et le seuil de 1,26 g/L","pts":2},{"c":"Type 2 justifié par l'insulinorésistance, deux facteurs de risque","pts":3},{"c":"Schéma fonctionnel complet, titré et fléché","pts":3},{"c":"HbA1c expliquée et interprétée, néphropathie expliquée, deux mesures","pts":5},{"c":"Analyse du document 3 avec valeurs, rôle des cellules mémoire, mutation du virus","pts":6}],
    },
    {
      id: "st2s-cbph-s2", matiere: 'st2s-cbph', titre: "Sujet d'entraînement 2 : chimie", duree: 60,
      enonce: `## Sujet d'entraînement 2 : chimie (inventé)

Ce sujet est inventé pour s'entraîner, au format de la partie chimie de l'écrit : environ 1 heure, deux exercices indépendants, sur 20 points. Calculatrice autorisée.

### Exercice 1 : un détecteur de monoxyde de carbone (10 points)
Une famille a été intoxiquée par le monoxyde de carbone (CO) produit par un vieux chauffe-eau au gaz. Le gaz utilisé est le méthane, de formule CH4.

Données : masses molaires M(C) = 12 g/mol ; M(O) = 16 g/mol ; M(H) = 1 g/mol. Volume molaire des gaz à 20 °C : 24 L/mol.

1. Écrire l'équation de la combustion complète du méthane dans le dioxygène, qui produit du dioxyde de carbone et de l'eau. (2 points)
2. Expliquer pourquoi un appareil mal réglé produit du monoxyde de carbone. (1 point)
3. Expliquer pourquoi le monoxyde de carbone est dangereux pour l'organisme. (2 points)
4. Calculer la masse molaire du monoxyde de carbone. (1 point)
5. Le détecteur sonne quand l'air contient 0,050 mL de CO par litre d'air. Calculer la quantité de matière de CO dans 1 L d'air à ce seuil, puis la masse correspondante en mg. (3 points)
6. Donner une mesure de prévention. (1 point)

### Exercice 2 : le dosage du glucose (10 points)
Un laboratoire dose le glucose dans le sérum d'un patient par une méthode enzymatique : la réaction forme un composé rose dont on mesure l'absorbance à 505 nm.

On prépare des solutions étalons de glucose et on mesure leur absorbance :
- 0,50 g/L : A = 0,15
- 1,00 g/L : A = 0,30
- 1,50 g/L : A = 0,45
- 2,00 g/L : A = 0,60

L'échantillon de sérum, traité de la même façon, donne A = 0,39.

1. Nommer l'appareil qui mesure l'absorbance. Expliquer le rôle du blanc. (2 points)
2. Montrer que l'absorbance est proportionnelle à la concentration et nommer la loi correspondante. (2 points)
3. Déterminer la glycémie du patient. (2 points)
4. Le patient était à jeun. Comparer à la valeur de référence (0,70 à 1,10 g/L) et conclure. (2 points)
5. Expliquer pourquoi le dosage utilise une enzyme et pourquoi on travaille vers 37 °C. (2 points)`,
      corrige: `## Corrigé du sujet d'entraînement 2

### Exercice 1
1. CH4 + 2 O2 → CO2 + 2 H2O. Vérification : 1 C, 4 H et 4 O de chaque côté.

2. Quand l'appareil est mal réglé ou mal ventilé, il manque du dioxygène : la combustion est incomplète et produit du monoxyde de carbone au lieu du dioxyde de carbone.

3. Le monoxyde de carbone se fixe sur l'hémoglobine environ 200 fois plus facilement que le dioxygène. L'hémoglobine ne transporte plus l'oxygène vers les organes : maux de tête, nausées, malaise, coma, voire décès. Comme il est incolore et inodore, on ne le sent pas venir.

4. M(CO) = M(C) + M(O) = 12 + 16 = 28 g/mol.

5. n = V / Vm = 0,050 × 10⁻³ L / 24 L/mol ≈ 2,1 × 10⁻⁶ mol. m = n × M = 2,1 × 10⁻⁶ × 28 ≈ 5,8 × 10⁻⁵ g, soit environ 0,058 mg de CO par litre d'air.

6. Faire entretenir chaque année les appareils de chauffage par un professionnel, ne jamais boucher les aérations, installer un détecteur de monoxyde de carbone.

### Exercice 2
1. C'est un spectrophotomètre. Le blanc, qui contient tous les réactifs sauf le glucose, sert à régler l'absorbance à zéro : on ne mesure ensuite que l'absorbance due au composé rose.

2. A / C = 0,15 / 0,50 = 0,30 / 1,00 = 0,45 / 1,50 = 0,60 / 2,00 = 0,30 L/g : le rapport est constant, donc A est proportionnelle à C (A = 0,30 × C). La courbe A = f(C) est une droite passant par l'origine. C'est la loi de Beer-Lambert.

3. C = A / 0,30 = 0,39 / 0,30 = 1,3 g/L.

4. La glycémie à jeun du patient (1,3 g/L) est supérieure à la valeur de référence (1,10 g/L) : il est en hyperglycémie. Elle dépasse même 1,26 g/L : si un second dosage à jeun confirme ce résultat, on pourra diagnostiquer un diabète.

5. L'enzyme (la glucose oxydase) est spécifique du glucose : elle ne réagit pas avec les autres sucres ou molécules du sérum, ce qui rend le dosage fiable. On travaille vers 37 °C, car c'est la température où l'enzyme est la plus active ; une température trop élevée la dénaturerait.`,
      grille: [{"c":"Exercice 1 : équation équilibrée et combustion incomplète expliquée","pts":3},{"c":"Exercice 1 : danger du CO expliqué (hémoglobine, transport de l'oxygène)","pts":2},{"c":"Exercice 1 : masse molaire, quantité de matière et masse avec unités, prévention","pts":5},{"c":"Exercice 2 : spectrophotomètre, blanc, proportionnalité et loi de Beer-Lambert","pts":4},{"c":"Exercice 2 : glycémie calculée, comparée et conclusion rédigée","pts":4},{"c":"Exercice 2 : rôle de l'enzyme et de la température","pts":2}],
    },
  ],
};
