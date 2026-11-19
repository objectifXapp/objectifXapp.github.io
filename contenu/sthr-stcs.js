// Sciences et technologies culinaires et des services – enseignement scientifique alimentation-environnement (spécialité, terminale STHR). Sources : voir matiere.sources.
// Programme : enseignement scientifique alimentation-environnement (ESAE), BO n° 11 du 17 mars 2016, annexe 11, toujours en vigueur (l'arrêté du 19 juillet 2019 n'abroge que les annexes 1 à 7 et 12).
// Les parties écrites de l'épreuve portent sur le programme d'ESAE de terminale ; les notions de première peuvent être mobilisées. Un chapitre par grande question du programme de terminale, dans l'ordre, puis un chapitre de rappels de première.
// Épreuve : note de service du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026), applicable à partir de la session 2027.
export default {
  matiere: {
    id: 'sthr-stcs',
    nom: 'Sciences et technologies culinaires et des services – enseignement scientifique alimentation-environnement',
    voie: 'sthr',
    epreuve: { type: 'ecrit+pratique', duree: 360, coef: 16, quand: 'juin', note: 'Deux temps de 3 heures, l\'un en cuisine (STC), l\'autre en service (STS), chacun de coefficient 8 : une partie écrite d\'1 heure sur l\'ESAE (notée sur 20, coefficient 1, dont 2 points pour la langue à partir de 2027), puis une partie pratique de 2 heures (notée sur 20, coefficient 7). En STC : production culinaire de 1 h 50 et échange de 10 minutes. En STS : trois ateliers de 30 minutes après 30 minutes de préparation.' },
    sources: [
      'https://eduscol.education.fr/document/24100/download (programme d\'enseignement scientifique alimentation-environnement, BO n° 11 du 17 mars 2016, annexe 11)',
      'https://www.education.gouv.fr/bo/19/Special8/MENE1921268A.htm (arrêté du 19 juillet 2019 : annexes 8 à 11 maintenues)',
      'https://www.education.gouv.fr/bo/2026/Special4/MENE2622664N (épreuves de la série STHR à partir de la session 2027)',
      'https://eduscol.education.fr/document/52971/download (définition des épreuves, version consolidée 2024)',
      'Sujets nationaux : STS n° 1 du 20 juin 2024 (24-HRSTS1ME), STS n° 2 du 22 mars 2023 (23-HRSTSME1), STC n° 9 du 19 mai 2022 (22-HRSTCME1)',
      'https://www.anses.fr (références nutritionnelles, allergènes, additifs) et https://www.mangerbouger.fr (repères du PNNS)',
      'https://agriculture.gouv.fr (paquet hygiène, plan de maîtrise sanitaire) et https://www.inrs.fr (troubles musculosquelettiques, produits chimiques)',
    ],
    chapitres: [
      { id: 'sthr-stcs-1', t: 'Créer un environnement favorable : chauffage, climatisation, éclairage et acoustique', theme: 'Confort et santé' },
      { id: 'sthr-stcs-2', t: 'Prévenir les risques professionnels : gestes, postures et troubles musculosquelettiques', theme: 'Confort et santé' },
      { id: 'sthr-stcs-3', t: 'Les pratiques alimentaires et l\'esprit critique', theme: 'Consommation alimentaire' },
      { id: 'sthr-stcs-4', t: 'Couvrir les besoins : références nutritionnelles, groupes d\'aliments et menu équilibré', theme: 'Consommation alimentaire' },
      { id: 'sthr-stcs-5', t: 'Déséquilibres alimentaires, pathologies et contraintes alimentaires', theme: 'Consommation alimentaire' },
      { id: 'sthr-stcs-6', t: 'Les risques associés à l\'alimentation : toxicité, DJA, additifs et allergies', theme: 'Consommation alimentaire' },
      { id: 'sthr-stcs-7', t: 'Les fermentations dans les transformations culinaires', theme: 'Bonnes pratiques et qualité' },
      { id: 'sthr-stcs-8', t: 'La qualité sanitaire : plan de maîtrise sanitaire, traçabilité et surveillance', theme: 'Bonnes pratiques et qualité' },
      { id: 'sthr-stcs-9', t: 'Entretenir les locaux en limitant l\'impact sur l\'environnement', theme: 'Bonnes pratiques et qualité' },
      { id: 'sthr-stcs-10', t: 'Rappels de première : sens, nutriments, transformations et micro-organismes', theme: 'Rappels de première' },
    ],
  },
  paquets: [
    {
      chapitre: 'sthr-stcs-1',
      fiche: `## Créer un environnement favorable : chauffage, climatisation, éclairage et acoustique

### Pourquoi l'ambiance compte
- Le confort du client et du personnel dépend de plusieurs **paramètres** : température, hygrométrie (humidité de l'air), qualité de l'air, lumière, bruit.
- Un mauvais réglage provoque gêne, fatigue, maux de tête, troubles du sommeil, voire des atteintes durables (surdité, acouphènes). Il dégrade aussi la satisfaction des clients et les conditions de travail.

### Chauffage et climatisation
- Un équipement se caractérise par sa **source d'énergie** (électricité, gaz, fioul, bois, énergie solaire, chaleur de l'air ou du sol), le **fluide** qui transporte la chaleur (eau, air, fluide frigorigène) et son **mode de distribution** (radiateurs, plancher chauffant, ventilo-convecteurs, soufflage d'air).
- La **pompe à chaleur** prélève la chaleur de l'air, de l'eau ou du sol et la transfère à l'intérieur ; réversible, elle peut aussi rafraîchir. Elle consomme moins d'électricité qu'elle ne fournit de chaleur.
- La **climatisation** refroidit et assèche l'air grâce à un fluide frigorigène qui absorbe la chaleur en s'évaporant et la rejette dehors en se condensant.
- La **ventilation** renouvelle l'air (odeurs, humidité, dioxyde de carbone). Une ventilation mécanique **double flux** récupère la chaleur de l'air sortant pour réchauffer l'air entrant.
- La connaissance détaillée du fonctionnement n'est pas exigée : on relie surtout les caractéristiques d'un équipement à son principe et à ses effets.

### L'éclairage
- **Éclairement** : la quantité de lumière reçue par une surface, en **lux**. Un plan de travail en cuisine demande un éclairement plus fort qu'une salle de restaurant à l'ambiance tamisée.
- **Température de couleur** : la teinte de la lumière, en **kelvins** (K). Vers 2 700 K, lumière chaude et jaunâtre, propice à la détente ; vers 4 000 K, lumière neutre ; vers 6 500 K, lumière froide et bleutée, proche de la lumière du jour, adaptée au travail.
- **Efficacité lumineuse** : la lumière produite pour 1 watt consommé, en **lumens par watt**. Les lampes à LED ont une efficacité bien plus élevée que les anciennes lampes à incandescence : elles consomment moins pour le même éclairage.
- On privilégie la lumière naturelle quand c'est possible (orientation, ouvertures) et des lampes qui restituent bien les couleurs, important pour présenter les plats.

### L'acoustique
- Le bruit se mesure en **décibels** (dB) ; sa fréquence (grave ou aigu) se mesure en hertz.
- **Isolant acoustique** : empêche le son de passer d'un local à un autre (cloisons lourdes, doubles parois, double vitrage, joints). Il protège les chambres du bruit du bar ou de la rue.
- **Absorbant acoustique** : capte le son et réduit la **réverbération** (l'écho) dans une pièce. Ce sont des matériaux poreux ou souples : faux plafonds acoustiques, panneaux muraux, moquette, rideaux, nappes.
- **Diffuseur** (ou diffractant) : renvoie le son dans plusieurs directions pour mieux le répartir.
- Une salle aux murs lisses et durs (carrelage, verre) est bruyante : les clients parlent plus fort, ce qui augmente encore le bruit.

### Argumenter le choix d'un équipement d'ambiance
- On compare plusieurs équipements selon un ensemble de **critères** : caractéristiques techniques, **confort**, **sécurité** et bien-être des personnes, **économies d'énergie**, **coût** (achat et fonctionnement), entretien, bruit, respect de la réglementation.
- Les documents utiles : fiches techniques, étiquette énergie, recommandations de l'ADEME.
- L'argumentation est structurée : le besoin, les critères, la comparaison, le choix justifié.

### À retenir pour le bac
- Équipement de chauffage : source d'énergie, fluide, mode de distribution ; pompe à chaleur et ventilation double flux économisent l'énergie.
- Éclairement en lux, température de couleur en kelvins, efficacité lumineuse en lumens par watt.
- Isolant : bloque le son entre deux locaux ; absorbant : réduit l'écho dans la pièce.
- Choisir un équipement : confort, sécurité, économies d'énergie, coût, réglementation.`,
      cartes: [
        { q: "Quels paramètres déterminent le confort d'ambiance ?", r: "Température, hygrométrie, qualité de l'air, lumière et bruit." },
        { q: "Qu'est-ce que l'hygrométrie ?", r: "Le taux d'humidité de l'air." },
        { q: "Comment caractérise-t-on un équipement de chauffage ?", r: "Par sa source d'énergie, le fluide qui transporte la chaleur et son mode de distribution." },
        { q: "Qu'est-ce qu'une pompe à chaleur ?", r: "Un appareil qui prélève la chaleur de l'air, de l'eau ou du sol pour la transférer à l'intérieur ; réversible, il peut aussi rafraîchir." },
        { q: "Comment fonctionne la climatisation, en simplifiant ?", r: "Un fluide frigorigène absorbe la chaleur de l'air en s'évaporant, puis la rejette dehors en se condensant." },
        { q: "Quel est l'intérêt d'une ventilation double flux ?", r: "Elle renouvelle l'air et récupère la chaleur de l'air sortant pour réchauffer l'air entrant." },
        { q: "Qu'est-ce que l'éclairement ?", r: "La quantité de lumière reçue par une surface, mesurée en lux." },
        { q: "Qu'est-ce que la température de couleur ?", r: "La teinte de la lumière en kelvins : vers 2 700 K chaude, vers 6 500 K froide et proche de la lumière du jour." },
        { q: "Qu'est-ce que l'efficacité lumineuse ?", r: "La lumière produite pour 1 watt consommé, en lumens par watt ; elle est élevée pour les LED." },
        { q: "Isolant ou absorbant acoustique ?", r: "L'isolant empêche le son de passer d'un local à l'autre ; l'absorbant réduit l'écho à l'intérieur d'une pièce." },
        { q: "Citez trois matériaux absorbants.", r: "Faux plafond acoustique, panneaux muraux poreux, moquette, rideaux, nappes." },
        { q: "En quelle unité mesure-t-on l'intensité sonore ?", r: "En décibels (dB)." },
        { q: "Quels effets un bruit excessif a-t-il sur la santé ?", r: "Fatigue nerveuse, stress, troubles du sommeil, acouphènes et, à force d'exposition, surdité." },
        { q: "Quels critères pour choisir un équipement d'ambiance ?", r: "Caractéristiques techniques, confort, sécurité, économies d'énergie, coût d'achat et de fonctionnement, entretien, réglementation." },
      ],
      quiz: [
        { q: "L'éclairement d'un plan de travail se mesure en :", choix: ["décibels", "kelvins", "lux", "watts par mètre"], bonne: 2, expl: "Le lux mesure la lumière reçue par une surface ; le kelvin mesure la teinte de la lumière.", niv: 1 },
        { q: "Une lumière de 2 700 K donne une ambiance :", choix: ["sans couleur", "froide et bleutée", "identique à la lumière de midi", "chaude et tamisée"], bonne: 3, expl: "Une température de couleur basse correspond à une lumière jaune et chaleureuse.", niv: 1 },
        { q: "Un faux plafond qui réduit l'écho dans une salle de restaurant est un :", choix: ["absorbant acoustique", "isolant thermique", "fluide frigorigène", "diffuseur de chaleur"], bonne: 0, expl: "L'absorbant capte le son et diminue la réverbération dans la pièce.", niv: 1 },
        { q: "L'intensité d'un bruit se mesure en :", choix: ["hertz", "lux", "décibels", "lumens par watt"], bonne: 2, expl: "Le décibel mesure l'intensité ; le hertz mesure la fréquence, grave ou aiguë.", niv: 1 },
        { q: "Une lampe A produit 900 lumens pour 9 W, une lampe B 900 lumens pour 60 W. Quelle est la plus efficace ?", choix: ["La lampe B, car elle consomme plus", "La lampe A, avec 100 lumens par watt", "La lampe B, car elle chauffe davantage la pièce", "On ne peut pas comparer sans connaître leur prix"], bonne: 1, expl: "900 / 9 = 100 lm/W contre 900 / 60 = 15 lm/W : la lampe A éclaire autant en consommant moins.", niv: 2 },
        { q: "Pour éviter que le bruit du bar n'arrive dans les chambres du dessus, on choisit :", choix: ["une isolation acoustique du plancher et des cloisons", "des rideaux et une moquette dans le bar du rez-de-chaussée", "une lumière plus chaude", "une climatisation plus puissante"], bonne: 0, expl: "Il faut empêcher le son de passer d'un local à l'autre : c'est le rôle de l'isolation.", niv: 2 },
        { q: "Quel équipement récupère la chaleur de l'air sortant pour réchauffer l'air neuf ?", choix: ["La ventilation double flux", "La ventilation simple flux", "Le radiateur électrique", "La hotte sans filtre"], bonne: 0, expl: "Le double flux fait passer les deux airs dans un échangeur : on économise l'énergie de chauffage.", niv: 2 },
        { q: "Pourquoi une salle aux murs carrelés et vitrés est-elle souvent bruyante ?", choix: ["Le verre et le carrelage isolent trop bien du bruit de la rue", "Le carrelage produit du son", "Les surfaces dures réfléchissent le son et créent de l'écho", "La lumière y est trop forte"], bonne: 2, expl: "Le son rebondit sur les surfaces lisses : la réverbération augmente et les clients parlent plus fort.", niv: 2 },
        { q: "Pour un poste de dressage des assiettes en cuisine, on choisit plutôt :", choix: ["un éclairement faible et une lumière très chaude", "un éclairement suffisant et une lumière neutre", "une lumière clignotante", "des bougies sur le plan de travail"], bonne: 1, expl: "Le travail précis demande beaucoup de lumière et des couleurs fidèles pour juger les plats.", niv: 2 },
        { q: "Un hôtel hésite entre une pompe à chaleur réversible et des radiateurs électriques avec des climatiseurs mobiles. Quel argument favorise la pompe à chaleur ?", choix: ["Elle remplace la ventilation et supprime le renouvellement de l'air", "Elle ne coûte rien à l'achat", "Elle ne demande presque pas d'entretien", "Elle chauffe et rafraîchit en consommant peu d'électricité"], bonne: 3, expl: "Son intérêt principal est l'économie d'énergie et la double fonction ; son coût d'achat est plus élevé.", niv: 3 },
        { q: "Quel critère n'est **pas** pertinent pour choisir un climatiseur pour les chambres ?", choix: ["Le niveau de bruit", "La couleur du logo", "La consommation d'énergie", "Le coût d'entretien"], bonne: 1, expl: "Le logo ne joue ni sur le confort, ni sur la sécurité, ni sur le coût.", niv: 3 },
        { q: "Un serveur travaille chaque soir dans un bar à 95 dB. Quel risque pour sa santé à long terme ?", choix: ["Pas de risque si la musique lui plaît", "Une meilleure concentration", "Une baisse de la température corporelle", "Des acouphènes et une perte d'audition"], bonne: 3, expl: "L'exposition répétée à un bruit fort abîme l'oreille interne : acouphènes, surdité.", niv: 3 },
      ],
    },
    {
      chapitre: 'sthr-stcs-2',
      fiche: `## Prévenir les risques professionnels : gestes, postures et troubles musculosquelettiques

### Danger, exposition, dommage
- Un **danger** est ce qui peut causer un dommage (un couteau, un produit corrosif, une charge lourde, le bruit, une bactérie).
- La **situation exposante** est le moment où la personne est en contact avec le danger. Le **risque** combine la probabilité du dommage et sa gravité.
- Dangers **physiques** (chutes, coupures, brûlures, bruit, charges), **chimiques** (produits d'entretien, fumées), **biologiques** (micro-organismes, allergènes comme la farine).
- Une **exposition répétée** peut causer une **maladie professionnelle** (allergie, surdité, troubles musculosquelettiques) ; une **situation accidentelle** cause un **accident du travail** (coupure, glissade, brûlure).

### L'appareil locomoteur
- Il permet les mouvements : les **os** forment le squelette, les **articulations** relient les os, les **muscles** se contractent pour bouger, les **tendons** attachent les muscles aux os, les **nerfs** commandent les muscles.
- La **colonne vertébrale** est formée de vertèbres séparées par des **disques** qui amortissent les chocs.

### Les troubles musculosquelettiques (TMS)
- Ce sont des atteintes des muscles, tendons, nerfs et articulations, surtout aux **épaules**, **coudes**, **poignets** et au **dos**. Exemples : tendinite, syndrome du canal carpien (poignet), lombalgie (bas du dos).
- Ils se manifestent par des douleurs, une raideur, une perte de force, et peuvent entraîner un arrêt de travail ou une inaptitude.
- Ils sont la **première cause de maladie professionnelle** reconnue en France.
- **Facteurs** : gestes **répétitifs** (éplucher, tailler, essuyer les verres), **postures contraignantes** (dos penché sur un plan trop bas, bras levés), **efforts** (porter des cartons, des plateaux, faire les lits), travail au **froid**, **vibrations**, cadence élevée et **stress**.
- En hôtellerie-restauration : plonge, cuisine, service avec plateaux chargés, ménage des chambres (lits, salles de bains).

### L'ergonomie et les mesures de prévention
- L'**ergonomie** consiste à adapter le travail à l'être humain : outils, postes, organisation.
- **Principe** : supprimer le danger quand c'est possible, sinon le réduire à la source, puis protéger collectivement, et en dernier recours individuellement.
- **Aménagement des locaux** : plans de travail à bonne hauteur (réglables), circulation dégagée, sols antidérapants, rangement des charges lourdes à hauteur de hanches.
- **Équipements** : chariots, échelles stables, lits sur roulettes ou rehausseurs, couteaux bien affûtés, éplucheuses et robots qui suppriment les gestes répétitifs.
- **Organisation du travail** : rotation des tâches, pauses, répartition des charges, cadences réalistes.
- **Formation** aux gestes et postures : plier les jambes et garder le dos droit pour soulever, porter la charge près du corps, éviter les torsions.
- L'employeur doit évaluer les risques et les inscrire dans le **document unique d'évaluation des risques professionnels**, avec un plan de prévention.

### À retenir pour le bac
- Danger, situation exposante, risque ; dangers physiques, chimiques, biologiques.
- Exposition répétée : maladie professionnelle ; situation accidentelle : accident du travail.
- TMS : muscles, tendons, nerfs ; épaules, poignets, dos ; gestes répétitifs, postures, efforts, froid, stress.
- Prévention : supprimer ou réduire à la source, aménager, équiper, organiser, former.
- Établir le lien entre un geste observé et le trouble, puis proposer une mesure précise.`,
      cartes: [
        { q: "Qu'est-ce qu'un danger ?", r: "Ce qui peut causer un dommage : couteau, produit corrosif, charge lourde, bruit, bactérie." },
        { q: "Qu'est-ce qu'une situation exposante ?", r: "Le moment où une personne est en contact avec un danger." },
        { q: "Qu'est-ce que le risque ?", r: "La combinaison de la probabilité qu'un dommage survienne et de sa gravité." },
        { q: "Maladie professionnelle ou accident du travail ?", r: "Maladie : due à une exposition répétée (TMS, surdité). Accident : dû à un événement soudain (coupure, chute)." },
        { q: "Quel est le rôle des tendons ?", r: "Ils attachent les muscles aux os et transmettent la force de la contraction." },
        { q: "Que sont les TMS ?", r: "Des troubles musculosquelettiques : atteintes des muscles, tendons, nerfs et articulations, surtout épaules, poignets et dos." },
        { q: "Qu'est-ce que le syndrome du canal carpien ?", r: "La compression d'un nerf au poignet, favorisée par des gestes répétés de la main : fourmillements, douleurs, perte de force." },
        { q: "Quels facteurs favorisent les TMS ?", r: "Gestes répétitifs, postures contraignantes, efforts, froid, vibrations, cadence élevée et stress." },
        { q: "Qu'est-ce que l'ergonomie ?", r: "L'adaptation du travail à l'être humain : postes, outils et organisation." },
        { q: "Dans quel ordre agit la prévention ?", r: "Supprimer le danger, le réduire à la source, protéger collectivement, puis individuellement." },
        { q: "Comment soulever une charge correctement ?", r: "Plier les jambes, garder le dos droit, porter la charge près du corps, éviter les torsions." },
        { q: "Citez deux équipements qui réduisent les TMS en cuisine.", r: "Plans de travail réglables, chariots, éplucheuse ou robot, couteaux bien affûtés." },
        { q: "Qu'est-ce que le document unique ?", r: "Le document où l'employeur évalue les risques professionnels de chaque poste et prévoit les actions de prévention." },
      ],
      quiz: [
        { q: "Une lombalgie touche :", choix: ["le poignet", "le bas du dos", "le genou", "l'oreille interne"], bonne: 1, expl: "La lombalgie est une douleur de la région lombaire, en bas du dos.", niv: 1 },
        { q: "Une brûlure causée par un plat sorti du four est :", choix: ["une maladie professionnelle", "un TMS", "un accident du travail", "une allergie"], bonne: 2, expl: "Elle résulte d'un événement soudain : c'est un accident du travail.", niv: 1 },
        { q: "Les tendons relient :", choix: ["les os entre eux", "les vertèbres aux disques", "les nerfs au cerveau", "les muscles aux os"], bonne: 3, expl: "Les tendons attachent les muscles aux os ; les ligaments relient les os entre eux.", niv: 1 },
        { q: "L'ergonomie consiste à :", choix: ["adapter le salarié à un poste mal conçu", "choisir les uniformes", "augmenter les cadences", "adapter le travail à l'être humain"], bonne: 3, expl: "On conçoit postes, outils et organisation en fonction des capacités humaines.", niv: 1 },
        { q: "Un commis épluche des pommes de terre deux heures par jour sur un plan trop bas. Quels troubles risque-t-il ?", choix: ["Des TMS du poignet et du dos", "De la surdité", "Une intoxication alimentaire", "Une allergie aux pommes de terre"], bonne: 0, expl: "Gestes répétitifs du poignet et dos penché : deux facteurs de TMS.", niv: 2 },
        { q: "Quelle mesure supprime le geste répétitif à la source ?", choix: ["Porter une ceinture lombaire", "Changer de couteau une fois par an", "Faire une pause après quatre heures de travail", "Utiliser une éplucheuse électrique"], bonne: 3, expl: "La machine supprime le geste ; la protection individuelle n'est qu'un dernier recours.", niv: 2 },
        { q: "Une femme de chambre fait 15 lits par jour en se penchant. Quelle mesure est la plus efficace ?", choix: ["Des draps plus fins", "Des lits sur roulettes ou rehaussés et la formation aux gestes", "Augmenter le nombre de chambres par personne pour finir plus tôt et se reposer", "Supprimer les pauses"], bonne: 1, expl: "On agit sur l'équipement et la posture : moins de flexion du dos.", niv: 2 },
        { q: "Quel facteur n'est **pas** un facteur de TMS ?", choix: ["Le travail au froid en chambre froide", "Le stress", "Un plan à la bonne hauteur", "Des gestes répétitifs"], bonne: 2, expl: "Un plan à la bonne hauteur est une mesure de prévention.", niv: 2 },
        { q: "Pour porter un carton de bouteilles, la bonne posture est :", choix: ["jambes pliées, dos droit, carton près du corps", "jambes tendues et dos penché", "bras tendus devant soi", "torsion du buste pour le poser plus vite sur l'étagère du haut"], bonne: 0, expl: "On utilise la force des jambes et on garde la charge près du centre du corps.", niv: 2 },
        { q: "La farine en suspension dans l'air d'une boulangerie est un danger :", choix: ["physique", "biologique (allergène)", "chimique, car la farine est un produit traité", "électrique"], bonne: 1, expl: "La farine contient des allergènes : exposition répétée, risque d'asthme du boulanger.", niv: 3 },
        { q: "Pourquoi la rotation des tâches réduit-elle les TMS ?", choix: ["Elle varie les gestes et les muscles sollicités", "Elle supprime le travail", "Elle augmente la cadence", "Elle remplace la formation"], bonne: 0, expl: "En alternant les postes, on évite de solliciter toujours les mêmes articulations.", niv: 3 },
        { q: "Dans quel ordre la prévention doit-elle agir ?", choix: ["Protection individuelle, puis suppression du danger", "Former le personnel aux gestes, sans rien changer aux postes de travail", "Réduire le danger à la source, puis protéger collectivement", "Attendre l'accident pour agir"], bonne: 2, expl: "On agit d'abord à la source ; l'équipement individuel vient en dernier.", niv: 3 },
      ],
    },
    {
      chapitre: 'sthr-stcs-3',
      fiche: `## Les pratiques alimentaires et l'esprit critique

### Ce qui guide les choix alimentaires
- Le client choisit ses aliments selon leurs **qualités organoleptiques** (aspect, odeur, goût, texture), ses **goûts**, sa **culture**, sa **religion**, son **budget**, son **état de santé** et les **tendances** du moment.
- Le professionnel doit connaître ces pratiques pour adapter son offre et conseiller le client sans erreur.

### Les principales pratiques
- **Omnivore** : mange de tout, d'origine animale et végétale. C'est le régime le plus facile à équilibrer.
- **Flexitarien** : omnivore qui réduit volontairement la viande, sans la supprimer.
- **Végétarien** (lacto-ovo-végétarien) : exclut viande et poisson, mais garde œufs, lait et produits laitiers. L'équilibre est facile à atteindre si l'on associe bien les aliments ; attention au **fer**.
- **Végétalien** : exclut tout produit d'origine animale (viande, poisson, œufs, lait, miel). Risques de carences en **vitamine B12** (présente seulement dans les produits animaux, donc complément nécessaire), en **calcium**, en **fer**, en **zinc**, et en certains acides aminés si les protéines végétales ne sont pas associées.
- **Complémentarité des protéines végétales** : les céréales manquent de lysine, les légumineuses de méthionine. Associer les deux (semoule et pois chiches, riz et lentilles, maïs et haricots) apporte tous les acides aminés indispensables.
- **Hyperprotéiné** : très riche en protéines, souvent pauvre en glucides. Risques : manque de fibres et de glucides complexes, excès de graisses animales, surcharge de travail pour les reins. Pas de bénéfice démontré pour la population générale.
- **Sans gluten** : indispensable pour les personnes atteintes de **maladie cœliaque**. Pour les autres, aucun bénéfice démontré ; les produits industriels sans gluten sont souvent plus chers, parfois plus gras ou plus sucrés.
- **Pratiques religieuses** : par exemple sans porc, viande halal ou casher, jeûne à certaines périodes.

### Équilibre et déséquilibre
- Une alimentation **équilibrée** couvre les besoins en énergie et en nutriments sans excès. Elle est **variée** et répartie dans la journée.
- Un **déséquilibre** apparaît quand un groupe d'aliments est absent ou en excès : carences (fer, calcium, vitamines) ou excès (graisses, sucres, sel).

### Faire preuve d'esprit critique
- Une tendance n'est pas une preuve. Avant de conclure, on vérifie la **source** (organisme officiel comme l'ANSES ou le Programme national nutrition santé, étude scientifique) plutôt qu'un témoignage ou une publicité.
- On distingue **besoin médical** (allergie, maladie cœliaque) et **choix personnel**.
- On compare la composition nutritionnelle réelle : un produit « sans » ou « healthy » n'est pas forcément plus équilibré.
- Pour le restaurateur : proposer des plats adaptés (option végétarienne équilibrée, plat sans gluten sans contamination), informer honnêtement, ne pas promettre d'effet sur la santé.

### À retenir pour le bac
- Végétarien : sans viande ni poisson ; végétalien : aucun produit animal, complément de vitamine B12.
- Associer céréales et légumineuses pour des protéines complètes.
- Hyperprotéiné : manque de fibres, excès possible de graisses ; sans gluten : indispensable seulement en cas de maladie cœliaque.
- Esprit critique : sources fiables, distinguer besoin médical et tendance, comparer la composition.`,
      cartes: [
        { q: "Qu'est-ce que les qualités organoleptiques ?", r: "Les caractères perçus par les sens : aspect, odeur, goût, texture." },
        { q: "Végétarien ou végétalien ?", r: "Végétarien : exclut viande et poisson. Végétalien : exclut tout produit animal, y compris œufs, lait et miel." },
        { q: "Qu'est-ce qu'un flexitarien ?", r: "Un omnivore qui réduit volontairement sa consommation de viande sans la supprimer." },
        { q: "Pourquoi un végétalien doit-il prendre de la vitamine B12 ?", r: "Elle n'est présente que dans les produits d'origine animale : sans complément, la carence est inévitable." },
        { q: "Quelles carences menacent un régime végétalien mal conduit ?", r: "Vitamine B12, calcium, fer, zinc et certains acides aminés indispensables." },
        { q: "Qu'est-ce que la complémentarité des protéines végétales ?", r: "Associer céréales (pauvres en lysine) et légumineuses (pauvres en méthionine) pour apporter tous les acides aminés indispensables." },
        { q: "Citez deux associations céréales et légumineuses.", r: "Semoule et pois chiches, riz et lentilles, maïs et haricots rouges." },
        { q: "Quels risques présente un régime hyperprotéiné ?", r: "Manque de fibres et de glucides complexes, excès de graisses animales, surcharge de travail pour les reins." },
        { q: "Pour qui le régime sans gluten est-il indispensable ?", r: "Pour les personnes atteintes de maladie cœliaque ; pour les autres, aucun bénéfice démontré." },
        { q: "Qu'est-ce qu'une alimentation équilibrée ?", r: "Une alimentation variée qui couvre les besoins en énergie et en nutriments, sans excès, répartie dans la journée." },
        { q: "Comment faire preuve d'esprit critique face à une tendance alimentaire ?", r: "Vérifier la source, distinguer besoin médical et choix personnel, comparer la composition réelle des produits." },
        { q: "Citez deux sources fiables en nutrition.", r: "L'ANSES et le Programme national nutrition santé (site mangerbouger.fr)." },
      ],
      quiz: [
        { q: "Un client végétarien accepte :", choix: ["les œufs et le fromage", "le poisson, s'il est sauvage", "du jambon blanc", "un bouillon de bœuf maison"], bonne: 0, expl: "Le végétarien exclut viande et poisson mais garde les œufs et les produits laitiers.", niv: 1 },
        { q: "La vitamine B12 se trouve naturellement :", choix: ["dans les céréales", "dans les fruits rouges et les agrumes", "dans les produits d'origine animale", "dans l'huile d'olive"], bonne: 2, expl: "D'où le complément obligatoire pour les végétaliens.", niv: 1 },
        { q: "Un régime sans gluten est indispensable en cas de :", choix: ["diabète", "hypertension", "maladie cœliaque", "intolérance au lactose"], bonne: 2, expl: "Le gluten abîme l'intestin des personnes atteintes de maladie cœliaque.", niv: 1 },
        { q: "Un régime végétalien exclut :", choix: ["la viande, mais pas le poisson", "les céréales complètes et le pain blanc", "les légumineuses", "tout produit d'origine animale"], bonne: 3, expl: "Viande, poisson, œufs, lait et miel sont exclus.", niv: 1 },
        { q: "Quelle association apporte des protéines végétales complètes ?", choix: ["Huile et vinaigre", "Pommes et poires", "Riz et lentilles", "Pain et confiture"], bonne: 2, expl: "Céréale et légumineuse se complètent en acides aminés indispensables.", niv: 2 },
        { q: "Un client suit un régime hyperprotéiné. Le principal risque est :", choix: ["une carence en protéines", "un manque de fibres et une surcharge pour les reins", "un excès de fibres", "une carence en vitamine B12, comme chez les végétaliens stricts"], bonne: 1, expl: "Ces régimes sont pauvres en végétaux et chargent les reins.", niv: 2 },
        { q: "Un client sans maladie cœliaque demande du sans-gluten « pour maigrir ». Que peut répondre le serveur avec esprit critique ?", choix: ["Que le sans-gluten ne fait pas maigrir en soi", "Que le gluten est un poison pour le corps humain", "Que ce plat est interdit par la réglementation sanitaire", "Que le sans-gluten guérit le diabète"], bonne: 0, expl: "On respecte le choix du client sans valider une idée sans preuve.", niv: 2 },
        { q: "Quelle source est la plus fiable pour juger d'un régime à la mode ?", choix: ["La vidéo d'un influenceur", "Un avis de l'ANSES", "La publicité du fabricant", "Le témoignage d'un ami"], bonne: 1, expl: "Une agence sanitaire s'appuie sur des études scientifiques.", niv: 2 },
        { q: "Quel aliment n'est **pas** compatible avec un menu végétalien ?", choix: ["Un houmous de pois chiches", "Une omelette aux herbes", "Un taboulé", "Une soupe de lentilles"], bonne: 1, expl: "L'omelette contient des œufs, produit d'origine animale.", niv: 2 },
        { q: "Pourquoi un végétarien doit-il surveiller ses apports en fer ?", choix: ["Le lait et les œufs lui apportent trop de fer chaque jour", "Les végétaux contiennent trop de fer", "Le fer est toxique", "Le fer des végétaux est moins bien absorbé"], bonne: 3, expl: "Le fer d'origine végétale est moins bien absorbé ; la vitamine C aide à l'absorber.", niv: 3 },
        { q: "Un restaurant veut proposer un plat végétalien équilibré. Quel choix est le plus juste ?", choix: ["Pâtes à la crème", "Salade verte, tomates et vinaigrette à l'huile d'olive", "Frites et ketchup", "Curry de pois chiches, riz complet et légumes"], bonne: 3, expl: "Légumineuse et céréale apportent des protéines complètes ; les légumes apportent fibres et vitamines.", niv: 3 },
        { q: "Un produit étiqueté « sans gluten » est-il forcément plus sain ?", choix: ["Non, il peut être plus gras ou plus sucré", "Oui, car il ne contient pas de céréales", "Oui, car il contient moins de calories", "Non, car il contient en réalité plus de gluten caché"], bonne: 0, expl: "L'absence de gluten ne dit rien de l'équilibre nutritionnel global.", niv: 3 },
      ],
    },
    {
      chapitre: 'sthr-stcs-4',
      fiche: `## Couvrir les besoins : références nutritionnelles, groupes d'aliments et menu équilibré

### Les besoins de l'organisme
- L'organisme a besoin d'**énergie** (pour le fonctionnement des organes, la température du corps, l'activité physique) et de **nutriments** : protéines, lipides, glucides, minéraux, vitamines, eau, fibres.
- Les besoins varient selon l'**âge**, le **sexe**, la **taille**, l'**activité physique** et l'**état physiologique** (croissance, grossesse, allaitement, vieillesse).
- L'énergie se mesure en **kilocalories** (kcal) ou en kilojoules (1 kcal = 4,18 kJ).
- Valeurs énergétiques : **1 g de glucides = 4 kcal**, **1 g de protéines = 4 kcal**, **1 g de lipides = 9 kcal**, 1 g d'alcool = 7 kcal.

### Les références nutritionnelles
- L'ANSES publie des **références nutritionnelles pour la population** (anciennement apports nutritionnels conseillés) : les quantités qui couvrent les besoins de presque toute la population d'un groupe donné.
- Répartition conseillée de l'énergie chez l'adulte : environ **40 à 55 %** glucides, **35 à 40 %** lipides, **10 à 20 %** protéines.
- Fibres : environ **30 g par jour** chez l'adulte. Sel : moins de 5 g par jour selon l'OMS.
- Répartition dans la journée : par exemple 20 à 25 % au petit déjeuner, 35 à 40 % au déjeuner, environ 10 % au goûter, 30 % au dîner.

### Calculer un apport
- Pour un aliment : quantité consommée (g) × teneur pour 100 g / 100.
- Pour l'énergie d'un plat : (glucides × 4) + (protéines × 4) + (lipides × 9).
- Pour un pourcentage : énergie apportée par un nutriment / énergie totale × 100.
- Exemple : un plat de 600 kcal contient 30 g de lipides. Les lipides apportent 30 × 9 = 270 kcal, soit 270 / 600 × 100 = 45 % de l'énergie : c'est au-dessus des 35 à 40 % conseillés.
- On compare toujours le résultat à la référence donnée par le document.

### Les groupes d'aliments et les repères du PNNS
- **Fruits et légumes** : vitamines (C), minéraux, fibres, eau ; au moins 5 portions par jour.
- **Féculents** (pain, pâtes, riz, pommes de terre) : glucides complexes ; à chaque repas, de préférence complets.
- **Légumineuses** (lentilles, pois chiches, haricots) : protéines végétales et fibres ; au moins 2 fois par semaine.
- **Viandes, poissons, œufs** : protéines, fer ; poisson 2 fois par semaine dont un gras, limiter la viande rouge et la charcuterie.
- **Produits laitiers** : calcium, protéines ; 2 par jour chez l'adulte.
- **Matières grasses ajoutées** : à limiter, privilégier colza, noix et olive.
- **Produits sucrés et salés** : à limiter. **Eau** : seule boisson indispensable.
- Les repères du PNNS se trouvent sur le site mangerbouger.fr.

### Composer un menu équilibré
- Un repas équilibré associe en général : une portion de légumes ou de fruits, un féculent, une source de protéines, un produit laitier, de l'eau.
- On varie les aliments, les modes de cuisson (moins de friture) et les couleurs.
- On adapte au client : un sportif a besoin de plus de glucides, une personne âgée de protéines et de calcium, un enfant de calcium pour sa croissance.

### À retenir pour le bac
- 1 g glucides ou protéines = 4 kcal ; 1 g lipides = 9 kcal.
- Glucides 40 à 55 %, lipides 35 à 40 %, protéines 10 à 20 % de l'énergie.
- Calcul : quantité × teneur / 100, puis comparer à la référence et conclure.
- Un repas équilibré : légumes, féculent, protéines, produit laitier, eau.`,
      cartes: [
        { q: "À quoi sert l'énergie apportée par les aliments ?", r: "Au fonctionnement des organes, au maintien de la température du corps et à l'activité physique." },
        { q: "Quels facteurs font varier les besoins ?", r: "L'âge, le sexe, la taille, l'activité physique et l'état physiologique (croissance, grossesse, allaitement, vieillesse)." },
        { q: "Combien de kcal apporte 1 g de lipides ?", r: "9 kcal." },
        { q: "Combien de kcal apporte 1 g de glucides ou de protéines ?", r: "4 kcal." },
        { q: "Quelle répartition de l'énergie est conseillée chez l'adulte ?", r: "Environ 40 à 55 % de glucides, 35 à 40 % de lipides, 10 à 20 % de protéines." },
        { q: "Que sont les références nutritionnelles pour la population ?", r: "Les quantités de nutriments, publiées par l'ANSES, qui couvrent les besoins de presque toute la population d'un groupe." },
        { q: "Comment calculer l'apport d'un nutriment dans une portion ?", r: "Quantité consommée en grammes × teneur pour 100 g, divisé par 100." },
        { q: "Comment calculer la part des lipides dans l'énergie d'un plat ?", r: "Lipides en grammes × 9, divisé par l'énergie totale, multiplié par 100." },
        { q: "Quel est le repère pour les fruits et légumes ?", r: "Au moins 5 portions par jour." },
        { q: "Quel est le repère pour les légumineuses ?", r: "Au moins 2 fois par semaine." },
        { q: "Quel est le repère pour le poisson ?", r: "2 fois par semaine, dont un poisson gras." },
        { q: "Qu'apportent surtout les produits laitiers ?", r: "Du calcium et des protéines." },
        { q: "Combien de fibres par jour chez l'adulte ?", r: "Environ 30 g." },
        { q: "Que contient un repas équilibré ?", r: "Une portion de légumes ou de fruits, un féculent, une source de protéines, un produit laitier et de l'eau." },
      ],
      quiz: [
        { q: "1 g de lipides apporte :", choix: ["4 kcal", "7 kcal", "9 kcal", "2 kcal"], bonne: 2, expl: "Les lipides sont les nutriments les plus énergétiques.", niv: 1 },
        { q: "Les références nutritionnelles en France sont publiées par :", choix: ["l'ANSES", "l'INSEE", "Météo-France", "la DGCCRF seule"], bonne: 0, expl: "L'Agence nationale de sécurité sanitaire de l'alimentation fixe ces références.", niv: 1 },
        { q: "Quel groupe d'aliments apporte surtout du calcium ?", choix: ["Les féculents complets et le pain", "Les produits laitiers", "Les matières grasses", "Les boissons sucrées"], bonne: 1, expl: "Lait, yaourts et fromages sont la principale source de calcium.", niv: 1 },
        { q: "Combien de portions de fruits et légumes par jour recommande le PNNS ?", choix: ["Au moins 2", "Au moins 5", "Au moins 8", "Au moins 12"], bonne: 1, expl: "C'est le repère « au moins 5 fruits et légumes par jour ».", niv: 1 },
        { q: "Un plat contient 20 g de protéines, 50 g de glucides et 10 g de lipides. Son énergie est de :", choix: ["370 kcal", "320 kcal", "80 kcal", "350 kcal"], bonne: 0, expl: "20 × 4 + 50 × 4 + 10 × 9 = 80 + 200 + 90 = 370 kcal.", niv: 2 },
        { q: "Un plat de 800 kcal contient 40 g de lipides. Quelle part de l'énergie vient des lipides ?", choix: ["20 %", "90 %", "5 %", "45 %"], bonne: 3, expl: "40 × 9 = 360 kcal ; 360 / 800 × 100 = 45 %, au-dessus des 35 à 40 % conseillés.", niv: 2 },
        { q: "Une portion de 150 g de lentilles cuites contient 9 g de protéines pour 100 g. Elle apporte :", choix: ["6 g", "9 g", "1,35 g", "13,5 g"], bonne: 3, expl: "150 × 9 / 100 = 13,5 g de protéines.", niv: 2 },
        { q: "Quel menu est le plus équilibré ?", choix: ["Carottes râpées, poulet et riz, yaourt, pomme", "Frites, burger, soda, glace", "Pâtes à la crème et lardons, pain blanc, gâteau au chocolat", "Salade verte seule et eau"], bonne: 0, expl: "On y trouve légumes, protéines, féculent, produit laitier et fruit.", niv: 2 },
        { q: "Les besoins énergétiques d'un adolescent sportif sont, par rapport à un adulte sédentaire :", choix: ["identiques", "plus faibles", "plus élevés", "nuls pendant la croissance"], bonne: 2, expl: "La croissance et l'activité physique augmentent la dépense d'énergie.", niv: 2 },
        { q: "Quel repère du PNNS n'est **pas** exact ?", choix: ["Poisson deux fois par semaine", "Légumineuses au moins deux fois par semaine", "Charcuterie à chaque repas", "Féculents complets de préférence"], bonne: 2, expl: "La charcuterie est à limiter, environ 150 g par semaine.", niv: 3 },
        { q: "Un déjeuner apporte 1 200 kcal à un adulte dont le besoin est de 2 000 kcal par jour. Que conclure ?", choix: ["On ne peut rien conclure", "Il est parfaitement adapté", "Il est trop pauvre en énergie pour un adulte qui travaille l'après-midi", "Il dépasse les 35 à 40 % conseillés pour le déjeuner"], bonne: 3, expl: "1 200 / 2 000 = 60 % de la journée, bien plus que 35 à 40 %.", niv: 3 },
        { q: "Pour améliorer un menu trop gras, la meilleure proposition est :", choix: ["ajouter une sauce à la crème pour mieux faire passer les légumes", "remplacer la friture par une cuisson vapeur ou au four", "supprimer les légumes", "servir deux desserts"], bonne: 1, expl: "Changer le mode de cuisson réduit les lipides ajoutés sans changer le plat.", niv: 3 },
      ],
    },
    {
      chapitre: 'sthr-stcs-5',
      fiche: `## Déséquilibres alimentaires, pathologies et contraintes alimentaires

### Du déséquilibre à la maladie
- Une alimentation déséquilibrée, répétée pendant des années, favorise des **maladies chroniques** : obésité, diabète de type 2, maladies cardiovasculaires, certains cancers, ostéoporose.
- D'autres facteurs jouent aussi : sédentarité, tabac, alcool, hérédité, stress, sommeil.

### Les principales pathologies liées à l'alimentation
- **Surpoids et obésité** : excès de masse grasse, quand les apports d'énergie dépassent longtemps les dépenses. On les repère avec l'**indice de masse corporelle** : IMC = poids (kg) / taille² (m). Chez l'adulte : 18,5 à 25 corpulence normale, 25 à 30 surpoids, 30 et plus obésité.
- **Diabète de type 2** : le taux de sucre dans le sang (glycémie) reste trop élevé, car l'insuline agit mal. Il est favorisé par l'obésité et la sédentarité. Conseils : limiter les sucres rapides, privilégier les féculents complets et les fibres, répartir les glucides sur les repas.
- **Maladies cardiovasculaires** : infarctus, accident vasculaire cérébral. Favorisées par l'excès de graisses saturées (graisses animales, beurre, charcuterie), de sel (hypertension), le tabac. Conseils : huiles de colza et d'olive, poisson gras, fruits et légumes, moins de sel.
- **Hypertension artérielle** : liée notamment à l'excès de **sel**.
- **Ostéoporose** : fragilité des os, favorisée par le manque de calcium, de vitamine D et d'activité physique.
- **Carie dentaire** : favorisée par le grignotage sucré.

### Les contraintes alimentaires
- **Allergie** : réaction du système immunitaire contre une protéine de l'aliment, parfois grave (œdème, choc anaphylactique). La moindre trace suffit : éviction totale.
- **Intolérance** : difficulté à digérer, sans réaction du système immunitaire. Exemple : **intolérance au lactose** (sucre du lait), qui cause des troubles digestifs ; de petites quantités sont souvent tolérées.
- **Maladie cœliaque** : maladie auto-immune déclenchée par le gluten (blé, seigle, orge) ; régime sans gluten strict à vie.
- **Contraintes physiologiques** : femme enceinte, personne âgée, enfant, sportif.
- **Contraintes culturelles et religieuses** : sans porc, sans alcool, halal, casher, jeûne.

### La femme enceinte
- Besoins accrus en **fer**, en **acide folique** (vitamine B9, prévention des malformations), en calcium, en iode et en oméga 3.
- **Risques à éviter** : la **listériose** (bactérie *Listeria monocytogenes*, dangereuse pour le fœtus) ; on évite le lait cru et les fromages au lait cru, la charcuterie à la coupe, les poissons fumés, les coquillages crus. La **toxoplasmose** (parasite) : viande bien cuite, légumes et fruits bien lavés si la femme n'est pas immunisée. **Pas d'alcool.**

### Le rôle du professionnel
- Il adapte la carte : plats signalés, plats sans gluten ou sans lactose, alternatives végétariennes, cuissons adaptées.
- Il informe sur les allergènes et ne remplace jamais le médecin : il propose, sans diagnostiquer.

### À retenir pour le bac
- IMC = poids / taille² ; 25 surpoids, 30 obésité.
- Diabète de type 2 : glycémie trop élevée ; obésité et sédentarité.
- Cardiovasculaire : graisses saturées, sel, tabac ; colza, olive, poisson gras.
- Allergie : système immunitaire, éviction totale ; intolérance : digestion, sans réaction immunitaire.
- Femme enceinte : fer, acide folique ; pas de lait cru (listériose), pas d'alcool.`,
      cartes: [
        { q: "Quelles maladies chroniques sont favorisées par une alimentation déséquilibrée ?", r: "Obésité, diabète de type 2, maladies cardiovasculaires, certains cancers, ostéoporose." },
        { q: "Comment calcule-t-on l'IMC ?", r: "Poids en kilogrammes divisé par la taille en mètres au carré." },
        { q: "À partir de quel IMC parle-t-on d'obésité chez l'adulte ?", r: "30 et plus ; le surpoids va de 25 à 30." },
        { q: "Qu'est-ce que le diabète de type 2 ?", r: "Une glycémie trop élevée parce que l'insuline agit mal ; favorisé par l'obésité et la sédentarité." },
        { q: "Quels conseils alimentaires pour une personne diabétique ?", r: "Limiter les sucres rapides, privilégier féculents complets et fibres, répartir les glucides sur les repas." },
        { q: "Quels aliments favorisent les maladies cardiovasculaires ?", r: "Ceux riches en graisses saturées (beurre, charcuterie, viandes grasses) et en sel." },
        { q: "Qu'est-ce qui favorise l'ostéoporose ?", r: "Le manque de calcium, de vitamine D et d'activité physique." },
        { q: "Allergie ou intolérance ?", r: "L'allergie fait réagir le système immunitaire, parfois gravement ; l'intolérance est un trouble de la digestion." },
        { q: "Qu'est-ce que l'intolérance au lactose ?", r: "La difficulté à digérer le lactose, le sucre du lait, qui cause des troubles digestifs." },
        { q: "Qu'est-ce que la maladie cœliaque ?", r: "Une maladie auto-immune déclenchée par le gluten (blé, seigle, orge), qui impose un régime sans gluten strict." },
        { q: "Quels besoins augmentent pendant la grossesse ?", r: "Fer, acide folique (vitamine B9), calcium, iode et oméga 3." },
        { q: "Pourquoi éviter le lait cru pendant la grossesse ?", r: "Il peut contenir Listeria monocytogenes, responsable de la listériose, dangereuse pour le fœtus." },
        { q: "Quels aliments éviter pendant la grossesse ?", r: "Lait et fromages au lait cru, charcuterie à la coupe, poissons fumés, coquillages crus, viande peu cuite, alcool." },
      ],
      quiz: [
        { q: "Un adulte pèse 90 kg et mesure 1,80 m. Son IMC est d'environ :", choix: ["18", "22", "28", "25"], bonne: 2, expl: "90 / (1,80 × 1,80) = 90 / 3,24 ≈ 27,8 : c'est un surpoids.", niv: 2 },
        { q: "L'excès de sel favorise surtout :", choix: ["l'hypertension artérielle", "l'ostéoporose chez l'enfant en croissance", "la carie dentaire", "l'allergie au gluten"], bonne: 0, expl: "Le sel retient l'eau et augmente la pression dans les artères.", niv: 1 },
        { q: "La maladie cœliaque est déclenchée par :", choix: ["le gluten", "le lactose", "le sel", "les fruits"], bonne: 0, expl: "Le gluten du blé, du seigle et de l'orge abîme l'intestin.", niv: 1 },
        { q: "Une allergie alimentaire met en jeu :", choix: ["les dents et les gencives", "l'estomac et l'intestin", "le système immunitaire", "la peau, par simple contact"], bonne: 2, expl: "L'organisme réagit contre une protéine de l'aliment, parfois de façon grave.", niv: 1 },
        { q: "Une femme enceinte commande un plateau de fromages. Lequel le serveur lui déconseille-t-il ?", choix: ["Un comté à pâte cuite, sans croûte", "Un camembert au lait cru", "Un fromage au lait pasteurisé", "Un yaourt nature"], bonne: 1, expl: "Le lait cru peut contenir Listeria, dangereuse pour le fœtus.", niv: 2 },
        { q: "Pour une personne atteinte de diabète de type 2, le dessert le plus adapté est :", choix: ["une crème brûlée", "une salade de fruits frais sans sucre ajouté", "un soda", "une part de tarte au sucre avec une boule de glace vanille"], bonne: 1, expl: "Les fruits frais apportent des fibres et moins de sucres ajoutés.", niv: 2 },
        { q: "Quelle matière grasse protège le mieux le cœur ?", choix: ["Le beurre", "Le saindoux", "La crème fraîche", "L'huile de colza"], bonne: 3, expl: "Le colza est riche en oméga 3 et pauvre en graisses saturées.", niv: 2 },
        { q: "L'intolérance au lactose provoque :", choix: ["des troubles digestifs", "un choc anaphylactique", "une fracture", "une surdité"], bonne: 0, expl: "Le lactose mal digéré fermente dans l'intestin : ballonnements, douleurs.", niv: 2 },
        { q: "Quel facteur n'est **pas** un facteur de risque du diabète de type 2 ?", choix: ["L'obésité", "Une activité physique régulière", "La sédentarité", "Une alimentation riche en sucres"], bonne: 1, expl: "L'activité physique protège au contraire du diabète.", niv: 2 },
        { q: "Pourquoi conseille-t-on de l'acide folique au début de la grossesse ?", choix: ["Pour remplacer le fer", "Pour faire grossir le bébé", "Pour éviter la listériose due au lait cru et aux fromages", "Pour prévenir certaines malformations du fœtus"], bonne: 3, expl: "La vitamine B9 participe à la formation du système nerveux.", niv: 3 },
        { q: "Un client allergique à l'arachide demande une trace possible. Que doit faire le restaurant ?", choix: ["Lui conseiller un médicament", "Retirer les cacahuètes visibles", "Lui dire qu'une petite quantité ne pose pas de problème", "Garantir l'absence totale ou refuser de servir le plat"], bonne: 3, expl: "Chez l'allergique, la moindre trace peut déclencher une réaction grave.", niv: 3 },
        { q: "Une femme enceinte non immunisée contre la toxoplasmose doit :", choix: ["manger du tartare", "boire du lait cru", "bien cuire la viande et laver fruits et légumes", "éviter les légumes cuits et préférer les crudités de saison"], bonne: 2, expl: "Le parasite se trouve dans la viande crue et la terre sur les végétaux.", niv: 3 },
      ],
    },
    {
      chapitre: 'sthr-stcs-6',
      fiche: `## Les risques associés à l'alimentation : toxicité, DJA, additifs et allergies

### La toxicité
- Une substance est **toxique** quand elle peut nuire à l'organisme. « C'est la dose qui fait le poison » : une même substance peut être sans danger en petite quantité et toxique en grande quantité.
- **Toxicité aiguë** : effets rapides après une forte dose (intoxication, vomissements).
- **Toxicité chronique** : effets après une exposition répétée à de petites doses pendant longtemps (cancer, atteinte du foie ou des reins).
- Les substances toxiques peuvent venir des aliments eux-mêmes (champignons, pommes de terre verdies), de la contamination (pesticides, métaux lourds comme le mercure de certains gros poissons), de la cuisson (acrylamide des aliments trop grillés, composés des fritures brûlées) ou des emballages.

### La dose journalière admissible (DJA)
- La **DJA** est la quantité d'une substance qu'une personne peut consommer **chaque jour de sa vie** sans risque pour sa santé. Elle s'exprime en **milligrammes par kilogramme de poids corporel et par jour** (mg/kg/j).
- Elle est calculée à partir de la **dose sans effet** observée chez l'animal, divisée par un **facteur de sécurité** (souvent 100).
- Pour savoir ce qu'une personne peut consommer : DJA × poids de la personne. Un enfant, plus léger, atteint donc la DJA avec une plus petite quantité.
- Exemple : DJA de 4 mg/kg/j pour un adulte de 60 kg : 4 × 60 = 240 mg par jour au maximum.

### Les additifs alimentaires
- Ce sont des substances ajoutées volontairement pour un rôle **technologique** : conserver, colorer, épaissir, émulsionner, améliorer le goût.
- Ils sont autorisés au niveau européen, après évaluation, et repérés par un **code E** suivi d'un numéro : **E100** colorants, **E200** conservateurs, **E300** antioxydants, **E400** épaississants, gélifiants et émulsifiants, **E600** exhausteurs de goût, **E900** édulcorants, gaz et agents d'enrobage (par exemple).
- Ils doivent figurer dans la **liste des ingrédients**, avec leur fonction.
- Certains sont discutés : nitrites de la charcuterie (cancer colorectal en cas d'excès), certains colorants. On reste vigilant et on limite les produits très transformés.

### Les allergies alimentaires
- L'allergie est une réaction du système immunitaire contre une protéine (l'**allergène**). Les signes vont de l'urticaire et des démangeaisons à l'œdème de Quincke et au **choc anaphylactique**, qui peut être mortel.
- Il n'y a pas de guérison : le seul traitement est l'**éviction** de l'aliment.
- **14 allergènes à déclaration obligatoire** dans l'Union européenne : céréales contenant du gluten, crustacés, œufs, poissons, arachides, soja, lait, fruits à coque, céleri, moutarde, graines de sésame, sulfites, lupin, mollusques.
- En restauration, l'information sur ces allergènes est **obligatoire**, même pour les plats non emballés (affichage, carte ou document à la disposition du client).
- En cuisine : éviter les **contaminations croisées** (ustensiles, plans de travail, huile de friture partagés), connaître les recettes et les fiches techniques.

### À retenir pour le bac
- C'est la dose qui fait le poison ; toxicité aiguë ou chronique.
- DJA en mg/kg de poids corporel et par jour ; quantité maximale = DJA × poids.
- Additifs : rôle technologique, code E, dans la liste des ingrédients.
- 14 allergènes à déclarer, y compris au restaurant ; éviction totale et prévention des contaminations croisées.`,
      cartes: [
        { q: "Que signifie « c'est la dose qui fait le poison » ?", r: "Une substance sans danger en petite quantité peut devenir toxique au-delà d'une certaine dose." },
        { q: "Toxicité aiguë ou chronique ?", r: "Aiguë : effets rapides après une forte dose. Chronique : effets après des petites doses répétées longtemps." },
        { q: "Citez deux substances toxiques liées à la cuisson.", r: "L'acrylamide des aliments trop grillés et les composés des huiles de friture brûlées." },
        { q: "Qu'est-ce que la DJA ?", r: "La dose journalière admissible : ce qu'on peut consommer chaque jour de sa vie sans risque, en mg par kg de poids corporel." },
        { q: "Comment est fixée la DJA ?", r: "À partir de la dose sans effet observée chez l'animal, divisée par un facteur de sécurité, souvent 100." },
        { q: "Comment calculer la quantité maximale par jour pour une personne ?", r: "DJA × poids de la personne en kilogrammes." },
        { q: "Pourquoi l'enfant atteint-il plus vite la DJA ?", r: "Parce qu'il pèse moins : la quantité maximale, calculée par kilogramme, est plus faible." },
        { q: "Qu'est-ce qu'un additif alimentaire ?", r: "Une substance ajoutée volontairement pour un rôle technologique : conserver, colorer, épaissir, émulsionner." },
        { q: "Que signifient les codes E100, E200 et E300 ?", r: "E100 : colorants ; E200 : conservateurs ; E300 : antioxydants." },
        { q: "Qu'est-ce qu'un choc anaphylactique ?", r: "La réaction allergique la plus grave, qui touche tout l'organisme et peut être mortelle." },
        { q: "Combien d'allergènes doivent être déclarés dans l'Union européenne ?", r: "14 : gluten, crustacés, œufs, poissons, arachides, soja, lait, fruits à coque, céleri, moutarde, sésame, sulfites, lupin, mollusques." },
        { q: "Le restaurant doit-il informer sur les allergènes ?", r: "Oui, c'est obligatoire, même pour les plats non emballés." },
        { q: "Qu'est-ce qu'une contamination croisée ?", r: "Le passage d'un allergène dans un plat qui n'en contient pas, par un ustensile, un plan de travail ou une huile partagés." },
      ],
      quiz: [
        { q: "La DJA s'exprime en :", choix: ["kcal par jour", "mg par kg de poids corporel et par jour", "grammes d'aliment par repas et par personne", "litres par semaine"], bonne: 1, expl: "Elle est rapportée au poids de la personne.", niv: 1 },
        { q: "Les additifs de code E200 sont des :", choix: ["colorants naturels", "édulcorants", "conservateurs", "émulsifiants"], bonne: 2, expl: "La série E200 regroupe les conservateurs.", niv: 1 },
        { q: "Combien d'allergènes sont à déclaration obligatoire dans l'Union européenne ?", choix: ["5", "10", "12", "14"], bonne: 3, expl: "La liste réglementaire compte 14 allergènes.", niv: 1 },
        { q: "Le seul traitement d'une allergie alimentaire est :", choix: ["boire beaucoup d'eau", "la cuisson longue de l'aliment", "l'éviction de l'aliment", "manger l'aliment en petite quantité chaque jour"], bonne: 2, expl: "On supprime totalement l'allergène de l'alimentation.", niv: 1 },
        { q: "La DJA d'un additif est de 5 mg/kg/j. Quelle quantité maximale pour un adulte de 70 kg ?", choix: ["14 mg", "350 mg", "75 mg", "700 mg"], bonne: 1, expl: "5 × 70 = 350 mg par jour.", niv: 2 },
        { q: "Même DJA de 5 mg/kg/j : quelle quantité maximale pour un enfant de 20 kg ?", choix: ["4 mg", "25 mg", "100 mg", "350 mg"], bonne: 2, expl: "5 × 20 = 100 mg : l'enfant atteint la limite avec moins de produit.", niv: 2 },
        { q: "Une intoxication après un repas de champignons cueillis est un exemple de :", choix: ["toxicité chronique", "toxicité aiguë", "intolérance au lactose", "carence"], bonne: 1, expl: "Les effets apparaissent rapidement après l'ingestion.", niv: 2 },
        { q: "Un cuisinier frit des beignets de crevettes puis des frites dans la même huile. Quel risque pour un client allergique aux crustacés ?", choix: ["Une contamination croisée par l'huile", "Pas de risque, car les frites ne contiennent pas de crevettes", "Une carence en fer", "Une intolérance au gluten"], bonne: 0, expl: "Les protéines de crevettes passent dans l'huile puis dans les frites.", niv: 2 },
        { q: "Quel produit n'est **pas** un allergène à déclaration obligatoire ?", choix: ["La tomate", "La moutarde", "Le céleri", "Le sésame"], bonne: 0, expl: "La tomate ne fait pas partie de la liste des 14 allergènes.", niv: 2 },
        { q: "Pourquoi divise-t-on la dose sans effet par 100 pour fixer la DJA ?", choix: ["Parce que l'homme pèse 100 kg", "Pour faciliter les calculs des laboratoires et arrondir les résultats", "Pour autoriser plus d'additifs", "Pour tenir compte des différences entre animal et homme et entre les personnes"], bonne: 3, expl: "Le facteur de sécurité protège aussi les personnes les plus sensibles.", niv: 3 },
        { q: "Une charcuterie très consommée pendant des années augmente le risque de cancer colorectal. C'est :", choix: ["une intolérance", "une toxicité aiguë", "une allergie alimentaire retardée", "une toxicité chronique"], bonne: 3, expl: "Des petites doses répétées longtemps : c'est la toxicité chronique.", niv: 3 },
        { q: "Comment le restaurant informe-t-il ses clients sur les allergènes ?", choix: ["Par écrit : carte, affichage ou document", "Si le client insiste auprès du serveur", "Par une mention « peut contenir de tout »", "Par une simple réponse orale si on lui demande"], bonne: 0, expl: "L'information doit être accessible au client avant sa commande.", niv: 3 },
      ],
    },
    {
      chapitre: 'sthr-stcs-7',
      fiche: `## Les fermentations dans les transformations culinaires

### Qu'est-ce qu'une fermentation ?
- C'est la transformation d'un aliment par des **micro-organismes** (levures, bactéries, moisissures) qui dégradent des glucides **en l'absence d'oxygène** (ou presque) et produisent d'autres substances.
- Les fermentations sont **utiles** : elles conservent les aliments, créent des arômes, des textures, des gaz.
- Les micro-organismes ont besoin de conditions favorables : **nourriture** (sucres), **température** adaptée, **humidité**, **temps**, et un **pH** qui leur convient.

### La fermentation alcoolique
- Réalisée par des **levures** (champignons microscopiques, par exemple *Saccharomyces cerevisiae*).
- Équation simplifiée : **glucose → éthanol + dioxyde de carbone (CO₂)** + un peu d'énergie.
- **Panification** : la levure de boulanger transforme les sucres de la farine ; le **CO₂** fait lever la pâte (il est retenu par le réseau de gluten), l'éthanol s'évapore à la cuisson. Température favorable autour de 25 à 30 °C ; au-delà de 50 à 60 °C, les levures meurent.
- **Vin, bière, cidre** : l'éthanol reste dans la boisson ; le CO₂ s'échappe ou reste pour les boissons pétillantes (champagne : seconde fermentation en bouteille).

### La fermentation lactique
- Réalisée par des **bactéries lactiques** (lactobacilles, streptocoques).
- **Lactose (ou glucose) → acide lactique**.
- L'acide fait baisser le **pH** : le lait coagule (yaourt, fromage frais), le goût devient acidulé, et l'acidité freine le développement des bactéries dangereuses : c'est un moyen de **conservation**.
- Exemples : yaourt (température vers 42 à 45 °C), fromages, crème fraîche, choucroute, pain au levain (avec des levures), cornichons lactofermentés.

### Les autres fermentations
- **Fermentation acétique** : des bactéries acétiques transforment l'**éthanol en acide acétique** en présence d'oxygène : c'est la fabrication du **vinaigre**.
- **Fermentation propionique** : elle forme les trous (« yeux ») de l'emmental grâce au CO₂ produit.
- **Moisissures** utiles : *Penicillium* du roquefort ou du camembert (affinage, goût, croûte).

### Les fermentations indésirables
- Des micro-organismes indésirables peuvent faire fermenter un aliment par erreur : goût piquant, gonflement d'un emballage, odeur anormale.
- On les évite par l'hygiène, le respect de la chaîne du froid et des dates limites.

### Exploiter les fermentations en cuisine
- Maîtriser la **température** et le **temps** de pousse d'une pâte (pointage, apprêt), l'**hygrométrie** (étuve, pâte couverte), la quantité de levure et de sel (le sel en excès freine les levures).
- Les fermentations sont aussi une tendance culinaire (kimchi, kombucha, pickles), à réaliser avec rigueur pour la sécurité sanitaire.

### À retenir pour le bac
- Fermentation : micro-organismes qui transforment des glucides sans oxygène.
- Alcoolique : levures, glucose → éthanol + CO₂ ; pain, vin, bière.
- Lactique : bactéries lactiques, lactose → acide lactique ; pH qui baisse, coagulation, conservation.
- Acétique : éthanol → acide acétique, vinaigre.
- Paramètres : température, temps, humidité, sucres, pH, sel.`,
      cartes: [
        { q: "Qu'est-ce qu'une fermentation ?", r: "La transformation de glucides par des micro-organismes, sans oxygène ou presque, qui produit d'autres substances." },
        { q: "Quels micro-organismes réalisent des fermentations ?", r: "Des levures, des bactéries et des moisissures." },
        { q: "Quelle est l'équation simplifiée de la fermentation alcoolique ?", r: "Glucose → éthanol + dioxyde de carbone." },
        { q: "Pourquoi la pâte à pain lève-t-elle ?", r: "Les levures produisent du CO₂, retenu par le réseau de gluten." },
        { q: "Que devient l'éthanol produit dans la pâte à pain ?", r: "Il s'évapore pendant la cuisson." },
        { q: "À quelle température les levures de boulanger travaillent-elles bien ?", r: "Vers 25 à 30 °C ; elles meurent au-delà de 50 à 60 °C." },
        { q: "Qui réalise la fermentation lactique et que produit-elle ?", r: "Les bactéries lactiques, qui transforment le lactose en acide lactique." },
        { q: "Pourquoi le lait coagule-t-il dans un yaourt ?", r: "L'acide lactique fait baisser le pH, ce qui fait coaguler les protéines du lait." },
        { q: "Pourquoi la fermentation lactique conserve-t-elle les aliments ?", r: "L'acidité freine le développement des bactéries dangereuses." },
        { q: "Qu'est-ce que la fermentation acétique ?", r: "La transformation de l'éthanol en acide acétique par des bactéries, en présence d'oxygène : le vinaigre." },
        { q: "D'où viennent les trous de l'emmental ?", r: "Du CO₂ produit par une fermentation propionique pendant l'affinage." },
        { q: "Quels paramètres faut-il maîtriser pour une fermentation ?", r: "Température, temps, humidité, quantité de sucres, pH et sel." },
        { q: "Citez trois aliments issus d'une fermentation lactique.", r: "Yaourt, fromage, choucroute, crème fraîche, cornichons lactofermentés." },
      ],
      quiz: [
        { q: "La levure de boulanger est :", choix: ["une bactérie", "une enzyme du blé", "un virus", "un champignon microscopique"], bonne: 3, expl: "Saccharomyces cerevisiae est un champignon unicellulaire.", niv: 1 },
        { q: "La fermentation alcoolique produit :", choix: ["de l'acide lactique", "de l'éthanol et du CO₂", "de l'acide acétique", "de l'amidon"], bonne: 1, expl: "Glucose → éthanol + dioxyde de carbone.", niv: 1 },
        { q: "Le yaourt est obtenu par une fermentation :", choix: ["alcoolique", "propionique", "acétique", "lactique"], bonne: 3, expl: "Des bactéries lactiques transforment le lactose en acide lactique.", niv: 1 },
        { q: "Le vinaigre est obtenu par une fermentation :", choix: ["lactique", "alcoolique", "acétique", "propionique"], bonne: 2, expl: "Des bactéries transforment l'éthanol du vin en acide acétique.", niv: 1 },
        { q: "Une pâte à pain laissée dans une pièce à 12 °C lève très peu. Pourquoi ?", choix: ["Le CO₂ s'est transformé en alcool", "La farine contient trop de gluten", "La température est trop basse pour que les levures soient actives", "Les levures sont mortes de chaleur"], bonne: 2, expl: "Les levures travaillent bien vers 25 à 30 °C ; au froid, elles sont ralenties.", niv: 2 },
        { q: "Quel rôle le réseau de gluten joue-t-il dans la levée ?", choix: ["Il fait baisser le pH", "Il produit de l'alcool", "Il nourrit les bactéries lactiques présentes dans la farine", "Il retient le CO₂ produit par les levures"], bonne: 3, expl: "Le gluten forme une pâte élastique qui emprisonne le gaz.", niv: 2 },
        { q: "Pourquoi le yaourt se conserve-t-il mieux que le lait ?", choix: ["Son acidité freine les bactéries dangereuses", "L'alcool produit le protège", "Ses micro-organismes ont été retirés après la fermentation", "Il est stérilisé après fermentation"], bonne: 0, expl: "Le pH bas créé par l'acide lactique protège l'aliment.", niv: 2 },
        { q: "Un cuisinier met trop de sel directement sur la levure. Conséquence probable :", choix: ["La pâte lève deux fois plus", "La levure est freinée et la pâte lève mal", "Le pain devient sucré", "La pâte fermente en vinaigre et prend un goût acide"], bonne: 1, expl: "Le sel en excès gêne l'activité des levures.", niv: 2 },
        { q: "Quel aliment n'est **pas** issu d'une fermentation ?", choix: ["La purée de pommes de terre", "Le camembert", "La choucroute garnie de la brasserie", "La bière"], bonne: 0, expl: "La purée est une simple cuisson et un écrasement, sans micro-organismes.", niv: 2 },
        { q: "Pourquoi le pain cuit ne contient-il presque plus d'alcool ?", choix: ["L'éthanol s'évapore à la cuisson", "Les levures ne produisent pas d'alcool", "Le gluten absorbe l'alcool", "L'alcool se transforme en sucre"], bonne: 0, expl: "L'éthanol bout vers 78 °C, bien en dessous de la température du four.", niv: 3 },
        { q: "Une bouteille de vin ouverte et laissée à l'air devient aigre. Pourquoi ?", choix: ["Le sucre du vin se cristallise", "Le vin refait une fermentation alcoolique au contact de l'air", "Des bactéries changent l'éthanol en acide acétique", "Les tanins disparaissent"], bonne: 2, expl: "En présence d'oxygène, la fermentation acétique commence : le vin tourne au vinaigre.", niv: 3 },
        { q: "Pour un yaourt maison, à quelle température faut-il garder le lait ensemencé ?", choix: ["Vers 4 °C", "Vers 42 à 45 °C", "Vers 100 °C", "Vers −18 °C"], bonne: 1, expl: "C'est la température favorable aux bactéries lactiques du yaourt.", niv: 3 },
      ],
    },
    {
      chapitre: 'sthr-stcs-8',
      fiche: `## La qualité sanitaire : plan de maîtrise sanitaire, traçabilité et surveillance

### Le cadre réglementaire
- Le **paquet hygiène** est l'ensemble des règlements européens sur la sécurité des aliments (depuis 2006). Il rend le professionnel **responsable** de la sécurité des aliments qu'il met sur le marché.
- Il impose une **obligation de résultat** (des aliments sains) et laisse le choix des moyens, à décrire dans un **plan de maîtrise sanitaire** (PMS).
- Le restaurant peut s'appuyer sur le **guide de bonnes pratiques d'hygiène** (GBPH) de la restauration.
- Un membre au moins de l'équipe d'un restaurant commercial doit avoir suivi une **formation en hygiène alimentaire**.

### Le plan de maîtrise sanitaire
- C'est l'ensemble des documents qui décrivent comment l'établissement garantit la sécurité des aliments. Il comprend :
- Les **bonnes pratiques d'hygiène** (prérequis) : hygiène du personnel (tenue, lavage des mains, état de santé), locaux et équipements, nettoyage et désinfection, lutte contre les nuisibles, approvisionnement en eau, **chaîne du froid**, marche en avant.
- Le **plan HACCP** (analyse des dangers et points critiques pour leur maîtrise).
- La **traçabilité** et la gestion des produits non conformes (retrait, rappel).

### La démarche HACCP
- Elle repère les **dangers** (biologiques, chimiques, physiques, allergènes) à chaque étape de la fabrication.
- Elle identifie les **points critiques pour la maîtrise** (CCP) : les étapes où une erreur rend l'aliment dangereux, par exemple la cuisson, le refroidissement rapide, la remise en température.
- Pour chaque point critique : une **limite critique** (par exemple passer de 63 °C à moins de 10 °C en moins de 2 heures pour un refroidissement rapide), une **surveillance** (relevés de température), des **actions correctives** si la limite est dépassée, des **enregistrements** et une **vérification**.

### La traçabilité
- C'est la capacité à **retrouver l'histoire d'un aliment** : d'où il vient, ce qu'il est devenu, à qui il a été servi.
- En pratique : garder les étiquettes des produits et les bons de livraison, noter les dates d'ouverture et de fabrication, étiqueter les préparations, conserver des **plats témoins** (restauration collective).
- Elle permet de **retirer** ou de **rappeler** rapidement un produit dangereux et de comprendre l'origine d'une intoxication.

### La surveillance et les contrôles
- **Autocontrôles** par le professionnel : relevés de température des chambres froides, des cuissons, des livraisons ; contrôles visuels ; analyses microbiologiques de surfaces ou de plats.
- **Contrôles officiels** par les services vétérinaires de l'État (DDPP ou DDETSPP). Les résultats sont publiés sur le dispositif **Alim'confiance** : très satisfaisant, satisfaisant, à améliorer, à corriger de manière urgente.
- Une **toxi-infection alimentaire collective** (TIAC) est déclarée quand au moins deux personnes ont les mêmes symptômes après le même repas ; elle doit être signalée à l'agence régionale de santé.

### Les températures à retenir
- Produits réfrigérés : de 0 à 4 °C selon les produits. Surgelés : −18 °C ou moins.
- Liaison chaude : 63 °C ou plus. Refroidissement rapide : de 63 °C à moins de 10 °C en moins de 2 heures.

### À retenir pour le bac
- Paquet hygiène : le professionnel est responsable ; obligation de résultat.
- PMS = bonnes pratiques d'hygiène + HACCP + traçabilité et gestion des non-conformités.
- HACCP : dangers, points critiques, limites, surveillance, actions correctives, enregistrements.
- Traçabilité : retrouver l'origine et le devenir d'un aliment, pour retirer ou rappeler.
- Contrôles officiels publiés sur Alim'confiance.`,
      cartes: [
        { q: "Qu'est-ce que le paquet hygiène ?", r: "L'ensemble des règlements européens sur la sécurité des aliments, qui rend le professionnel responsable." },
        { q: "Obligation de moyens ou de résultat ?", r: "De résultat : l'aliment doit être sain ; le professionnel choisit ses moyens et les décrit." },
        { q: "Qu'est-ce que le plan de maîtrise sanitaire ?", r: "L'ensemble des documents qui décrivent comment l'établissement garantit la sécurité de ses aliments." },
        { q: "Que contient le PMS ?", r: "Les bonnes pratiques d'hygiène, le plan HACCP, la traçabilité et la gestion des produits non conformes." },
        { q: "Que signifie HACCP ?", r: "Analyse des dangers et points critiques pour leur maîtrise." },
        { q: "Qu'est-ce qu'un point critique ?", r: "Une étape où une erreur rend l'aliment dangereux et où un contrôle est indispensable : cuisson, refroidissement." },
        { q: "Que prévoit-on pour chaque point critique ?", r: "Une limite critique, une surveillance, des actions correctives, des enregistrements et une vérification." },
        { q: "Quelle est la règle du refroidissement rapide ?", r: "Passer de 63 °C à moins de 10 °C en moins de 2 heures." },
        { q: "À quelle température maintient-on un plat en liaison chaude ?", r: "À 63 °C ou plus." },
        { q: "Qu'est-ce que la traçabilité ?", r: "La capacité à retrouver l'origine d'un aliment et ce qu'il est devenu." },
        { q: "À quoi sert la traçabilité ?", r: "À retirer ou rappeler vite un produit dangereux et à trouver l'origine d'une intoxication." },
        { q: "Qu'est-ce qu'Alim'confiance ?", r: "Le dispositif public qui affiche le résultat des contrôles sanitaires officiels des établissements." },
        { q: "Qu'est-ce qu'une TIAC ?", r: "Une toxi-infection alimentaire collective : au moins deux personnes malades après le même repas ; à signaler à l'ARS." },
        { q: "Qu'est-ce qu'un autocontrôle ?", r: "Un contrôle réalisé par le professionnel lui-même : relevés de température, contrôles visuels, analyses." },
      ],
      quiz: [
        { q: "HACCP signifie :", choix: ["une marque de produits d'entretien", "hygiène alimentaire et contrôle collectif des produits en cuisine", "un label de qualité gustative", "analyse des dangers et points critiques pour leur maîtrise"], bonne: 3, expl: "C'est une méthode d'analyse des dangers à chaque étape.", niv: 1 },
        { q: "Les surgelés se conservent à :", choix: ["−18 °C ou moins", "0 °C", "4 °C", "8 °C"], bonne: 0, expl: "La surgélation impose −18 °C ou moins.", niv: 1 },
        { q: "Le paquet hygiène impose au professionnel :", choix: ["un contrôle quotidien de l'État", "une simple recommandation", "l'achat de matériel précis", "une obligation de résultat"], bonne: 3, expl: "L'aliment doit être sain ; le professionnel choisit ses moyens.", niv: 1 },
        { q: "Les résultats des contrôles sanitaires officiels sont publiés sur :", choix: ["le site de l'office de tourisme", "Alim'confiance", "la carte du restaurant", "le registre du personnel"], bonne: 1, expl: "Le dispositif Alim'confiance rend ces résultats publics.", niv: 1 },
        { q: "Un bœuf bourguignon doit être refroidi rapidement. La règle est :", choix: ["de 63 °C à moins de 10 °C en moins de 2 heures", "de 63 °C à 30 °C en une nuit", "de 100 °C à 50 °C en 6 heures, couvercle fermé, sur le passe", "à température ambiante jusqu'au lendemain"], bonne: 0, expl: "On traverse vite les températures où les bactéries se multiplient.", niv: 2 },
        { q: "Une chambre froide affiche 8 °C au relevé du matin. Quelle action corrective ?", choix: ["Trier les produits, faire réparer et noter l'incident", "Ne rien faire", "Effacer le relevé", "Baisser le thermostat et attendre le relevé du soir"], bonne: 0, expl: "La surveillance déclenche une action et un enregistrement.", niv: 2 },
        { q: "Pourquoi garder les étiquettes des produits utilisés ?", choix: ["Pour décorer la cuisine", "Pour assurer la traçabilité", "Pour calculer les salaires", "Pour la publicité sur les réseaux sociaux"], bonne: 1, expl: "On retrouve ainsi le lot et le fournisseur en cas de problème.", niv: 2 },
        { q: "Quelle étape est un point critique dans la fabrication d'une crème pâtissière ?", choix: ["Le lavage des vitres", "Le choix de la couleur du bol de service en salle", "La cuisson et le refroidissement rapide", "L'impression de la carte"], bonne: 2, expl: "Une cuisson insuffisante ou un refroidissement lent laisse proliférer les bactéries.", niv: 2 },
        { q: "Lequel n'est **pas** une bonne pratique d'hygiène ?", choix: ["Se laver les mains en reprenant le travail après une pause ou les toilettes", "Porter une tenue propre", "Ranger les cartons bruts dans la chambre froide des desserts", "Respecter la marche en avant"], bonne: 2, expl: "Les cartons sales apportent des contaminations : on déconditionne avant de ranger.", niv: 2 },
        { q: "Trois clients ont les mêmes troubles digestifs après le même déjeuner. Il s'agit probablement :", choix: ["d'une simple coïncidence à ignorer", "d'une TIAC à signaler", "d'une allergie individuelle", "d'une intolérance au lactose de chacun"], bonne: 1, expl: "Au moins deux cas liés au même repas : c'est une TIAC, à déclarer à l'ARS.", niv: 3 },
        { q: "Un fournisseur rappelle un lot de saumon. Qu'est-ce qui permet au restaurant de savoir s'il est concerné ?", choix: ["La date de création du restaurant", "La couleur du saumon", "L'avis des clients qui ont mangé du saumon cette semaine", "Les numéros de lot notés à la livraison"], bonne: 3, expl: "Le numéro de lot relie le produit reçu au produit rappelé.", niv: 3 },
        { q: "Pourquoi le relevé des températures doit-il être écrit et conservé ?", choix: ["Parce que l'inspecteur refait lui-même les relevés lors de sa visite", "Pour occuper le personnel", "Pour prouver la surveillance et analyser les incidents", "Pour remplacer le nettoyage"], bonne: 2, expl: "Les enregistrements font partie de la démarche HACCP.", niv: 3 },
      ],
    },
    {
      chapitre: 'sthr-stcs-9',
      fiche: `## Entretenir les locaux en limitant l'impact sur l'environnement

### Nettoyer et désinfecter
- **Nettoyer** : enlever les salissures visibles (graisses, restes, poussières). **Désinfecter** : détruire ou réduire les micro-organismes. On nettoie toujours **avant** de désinfecter : un désinfectant agit mal sur une surface sale.
- Un **détergent** nettoie ; un **désinfectant** désinfecte ; un **détergent-désinfectant** fait les deux en une seule opération.
- Plan de nettoyage et de désinfection : quoi, quand, avec quel produit, à quelle dose, par qui, comment contrôler.

### Le cercle de Sinner
- L'efficacité d'un nettoyage dépend de **quatre facteurs** liés : l'**action chimique** (le produit et sa concentration), l'**action mécanique** (frotter, brosser, pression), la **température** et le **temps** d'action.
- Si l'on réduit l'un, il faut augmenter un autre : par exemple, une eau plus chaude ou un temps plus long permet d'utiliser moins de produit.
- On respecte la **dose** indiquée : sous-doser rend le produit inefficace, surdoser gaspille, abîme les surfaces et pollue.

### Lire une fiche technique ou une étiquette
- **pH** : de 0 à 14. Un produit **acide** (pH inférieur à 7) enlève le **tartre** et le calcaire (sanitaires, robinetterie) ; un produit **alcalin** ou basique (pH supérieur à 7) enlève les **graisses** (fours, hottes, sols de cuisine) ; un produit **neutre** (pH proche de 7) sert à l'entretien courant.
- **Dilution** : par exemple 2 % signifie 20 mL de produit par litre d'eau.
- **Mode d'emploi**, temps de contact, rinçage nécessaire ou non (surfaces en contact avec les aliments).
- **Pictogrammes de danger** (losange rouge) : corrosif, irritant, inflammable, dangereux pour l'environnement. La **fiche de données de sécurité** détaille les risques et les protections.
- Le produit doit être **autorisé pour le contact alimentaire** si la surface touche les aliments.

### Protéger les personnes
- Porter les **équipements de protection individuelle** indiqués : gants, lunettes, tablier.
- Ne **jamais mélanger** deux produits (eau de Javel et produit acide dégagent un gaz toxique, le chlore).
- Garder les produits dans leur **emballage d'origine**, étiquetés, rangés à part des aliments.
- Aérer les locaux.

### Limiter l'impact sur l'environnement
- Choisir des produits **écolabellisés** (Écolabel européen), concentrés, biodégradables, sans substances dangereuses pour les milieux aquatiques.
- **Doser juste** (doseurs automatiques, centrales de dilution), utiliser des textiles **microfibres** qui demandent moins de produit, le nettoyage **vapeur**.
- Économiser l'**eau** et l'**énergie** (température adaptée, lave-vaisselle bien rempli).
- Trier et réduire les **déchets** (emballages, bidons rechargeables) ; ne pas jeter les produits dans les canalisations sans respecter les consignes.

### À retenir pour le bac
- Nettoyer avant de désinfecter ; détergent, désinfectant, détergent-désinfectant.
- Cercle de Sinner : action chimique, action mécanique, température, temps.
- Acide contre le tartre, alcalin contre les graisses, neutre pour l'entretien courant.
- Respecter la dose, les protections, ne jamais mélanger les produits.
- Écolabel, dosage juste, microfibre, vapeur, économie d'eau et d'énergie.`,
      cartes: [
        { q: "Nettoyer ou désinfecter ?", r: "Nettoyer : enlever les salissures visibles. Désinfecter : détruire ou réduire les micro-organismes." },
        { q: "Pourquoi nettoie-t-on avant de désinfecter ?", r: "Parce qu'un désinfectant agit mal sur une surface encore sale." },
        { q: "Qu'est-ce qu'un détergent-désinfectant ?", r: "Un produit qui nettoie et désinfecte en une seule opération." },
        { q: "Quels sont les quatre facteurs du cercle de Sinner ?", r: "L'action chimique, l'action mécanique, la température et le temps." },
        { q: "Que se passe-t-il si l'on réduit un facteur du cercle de Sinner ?", r: "Il faut augmenter un ou plusieurs autres facteurs pour garder la même efficacité." },
        { q: "Quel produit utiliser contre le tartre ?", r: "Un produit acide (pH inférieur à 7)." },
        { q: "Quel produit utiliser contre les graisses ?", r: "Un produit alcalin (pH supérieur à 7)." },
        { q: "Que signifie une dilution à 2 % ?", r: "20 mL de produit pour 1 litre d'eau." },
        { q: "Pourquoi ne jamais mélanger eau de Javel et produit acide ?", r: "Le mélange dégage du chlore, un gaz toxique." },
        { q: "Qu'est-ce que la fiche de données de sécurité ?", r: "Le document qui détaille les dangers d'un produit, les protections et les gestes en cas d'accident." },
        { q: "Quelles protections pour manipuler un produit corrosif ?", r: "Gants, lunettes et tablier, selon la fiche de données de sécurité." },
        { q: "Comment réduire l'impact environnemental de l'entretien ?", r: "Produits écolabellisés, dosage juste, microfibres, vapeur, économies d'eau et d'énergie, tri des déchets." },
        { q: "Quels inconvénients présente le surdosage ?", r: "Gaspillage, surfaces abîmées, rinçage plus long et pollution de l'eau." },
      ],
      quiz: [
        { q: "Pour détartrer une douche, on choisit un produit :", choix: ["acide", "alcalin", "neutre", "désinfectant sans détergent"], bonne: 0, expl: "L'acide dissout le calcaire.", niv: 1 },
        { q: "Pour dégraisser une hotte de cuisine, on choisit un produit :", choix: ["acide", "neutre", "alcalin", "parfumé"], bonne: 2, expl: "Les produits alcalins décomposent les graisses.", niv: 1 },
        { q: "Le cercle de Sinner regroupe l'action chimique, l'action mécanique, la température et :", choix: ["le nombre de salariés", "la couleur du produit", "le prix", "le temps"], bonne: 3, expl: "Le temps d'action est le quatrième facteur.", niv: 1 },
        { q: "Un produit de pH 12 est :", choix: ["acide", "neutre", "alcalin", "sans effet"], bonne: 2, expl: "Au-dessus de 7, le produit est alcalin.", niv: 1 },
        { q: "Une étiquette indique une dilution à 1 %. Combien de produit pour un seau de 8 litres ?", choix: ["8 mL", "800 mL", "80 mL", "1 L"], bonne: 2, expl: "1 % = 10 mL par litre ; 10 × 8 = 80 mL.", niv: 2 },
        { q: "On lave la vaisselle à une température plus basse pour économiser l'énergie. Selon Sinner, il faut :", choix: ["réduire aussi le temps de lavage pour garder le même résultat", "augmenter le temps ou l'action chimique ou mécanique", "supprimer le produit", "ne rien changer"], bonne: 1, expl: "Les facteurs se compensent : on renforce un autre facteur.", niv: 2 },
        { q: "Pourquoi un désinfectant est-il inefficace sur un plan de travail gras ?", choix: ["Le gras rend le produit toxique", "La salissure protège les micro-organismes", "Le désinfectant dissout le gras trop vite", "Il faut mélanger deux produits pour dégraisser"], bonne: 1, expl: "On nettoie d'abord, sinon le produit n'atteint pas les micro-organismes.", niv: 2 },
        { q: "Quel pictogramme alerte sur un produit qui brûle la peau ?", choix: ["Le pictogramme corrosif", "Le pictogramme inflammable", "Le logo de recyclage", "L'Écolabel européen"], bonne: 0, expl: "Le losange corrosif montre une main et une surface rongées.", niv: 2 },
        { q: "Quelle pratique ne réduit **pas** l'impact environnemental ?", choix: ["Doubler la dose par sécurité", "Choisir un produit écolabellisé", "Utiliser une centrale de dilution", "Nettoyer à la vapeur"], bonne: 0, expl: "Le surdosage gaspille et pollue sans nettoyer mieux.", niv: 2 },
        { q: "Un employé veut mélanger eau de Javel et détartrant pour « plus d'efficacité ». Quel risque ?", choix: ["Un meilleur nettoyage sans risque", "Un dégagement de chlore toxique", "Un produit neutre", "Une simple perte de parfum"], bonne: 1, expl: "Le mélange avec un acide libère du chlore gazeux, dangereux à respirer.", niv: 3 },
        { q: "Pour une table de salle qui touche les couverts, le produit doit :", choix: ["être un décapant pour four", "être le plus parfumé possible", "rester sans rinçage, quel que soit le produit choisi pour la salle", "être autorisé pour le contact alimentaire ou être rincé"], bonne: 3, expl: "Aucun résidu dangereux ne doit passer sur les aliments.", niv: 3 },
        { q: "Quel est l'intérêt des textiles microfibres ?", choix: ["Ils coûtent moins cher que l'eau", "Ils remplacent la désinfection des plans de travail en cuisine", "Ils ne se lavent pas", "Ils retiennent mieux la saleté avec moins de produit"], bonne: 3, expl: "Leur action mécanique fine permet de réduire l'action chimique.", niv: 3 },
      ],
    },
    {
      chapitre: 'sthr-stcs-10',
      fiche: `## Rappels de première : sens, nutriments, transformations et micro-organismes

Les sujets de terminale s'appuient souvent sur des notions de première. Voici l'essentiel à revoir.

### L'analyse sensorielle
- Les **cinq sens** interviennent : vue (couleur, forme), odorat (odeurs, arômes), goût, toucher (texture, température), ouïe (croustillant).
- Le **goût** est perçu par les **papilles** de la langue, qui portent les **bourgeons du goût**. On distingue cinq saveurs : **sucré, salé, acide, amer, umami**.
- Les **arômes** sont perçus par l'odorat par la voie **rétronasale** (de la bouche vers le nez) ; on parle de **flaveur** pour l'ensemble goût et arômes.
- Mécanisme : une **molécule sapide** se fixe sur un **récepteur** d'une cellule du bourgeon, qui envoie un **message nerveux** au cerveau, qui l'interprète.
- La perception varie selon la personne, la température du produit, l'âge, le tabac, l'environnement (lumière, bruit, couleur de la vaisselle).

### Les constituants des aliments
- **Glucides** : simples (glucose, saccharose, lactose), au goût sucré ; complexes (amidon des féculents) ; les fibres.
- **Protéines** : formées d'acides aminés ; elles construisent et renouvellent le corps.
- **Lipides** : graisses et huiles, réserve d'énergie, vitamines A, D, E, K.
- **Eau**, **minéraux** (calcium, fer, sodium), **vitamines**.

### Les transformations physico-chimiques en cuisine
- **Coagulation des protéines** : sous l'effet de la chaleur, de l'acide ou du sel, les protéines se déroulent puis se lient : le blanc d'œuf devient blanc et ferme (vers 62 à 65 °C), la viande se raffermit.
- **Gélatinisation de l'amidon** : dans l'eau chaude, les grains d'amidon gonflent et épaississent (sauce béchamel, crème pâtissière) ; en refroidissant, on obtient un **gel**.
- **Réaction de Maillard** : entre sucres et protéines, à haute température : brunissement et arômes grillés (croûte du pain, viande saisie). L'excès produit de l'acrylamide.
- **Caramélisation** : brunissement des sucres seuls sous l'effet de la chaleur.
- **Émulsion** : dispersion de gouttelettes d'huile dans l'eau, stabilisée par un **émulsifiant** (la lécithine du jaune d'œuf dans la mayonnaise).
- **Mousse** : bulles d'air piégées dans un liquide (blancs en neige, crème fouettée).

### Les micro-organismes
- **Bactéries**, **levures**, **moisissures**, **virus**. Certains sont **utiles** (fermentations), d'autres **d'altération** (aliment abîmé), d'autres **pathogènes** (salmonelle, Listeria, staphylocoque doré, norovirus).
- Conditions de multiplication : nourriture, eau, **température** (zone dangereuse entre environ 10 et 63 °C), pH, oxygène ou non, temps.
- Les **sources de contamination** sont résumées par les **5 M** : matières premières, milieu, matériel, méthode, main-d'œuvre.

### À retenir pour le bac
- Cinq saveurs : sucré, salé, acide, amer, umami ; arômes par voie rétronasale.
- Molécule sapide, récepteur, message nerveux, cerveau.
- Coagulation, gélatinisation, Maillard, caramélisation, émulsion, mousse.
- Micro-organismes utiles, d'altération, pathogènes ; zone dangereuse 10 à 63 °C ; les 5 M.`,
      cartes: [
        { q: "Quelles sont les cinq saveurs ?", r: "Sucré, salé, acide, amer et umami." },
        { q: "Où le goût est-il perçu ?", r: "Par les bourgeons du goût situés dans les papilles de la langue." },
        { q: "Qu'est-ce que la voie rétronasale ?", r: "Le passage des arômes de la bouche vers le nez pendant la dégustation." },
        { q: "Qu'est-ce que la flaveur ?", r: "L'ensemble des sensations de goût et d'arômes perçues en bouche." },
        { q: "Comment le message du goût arrive-t-il au cerveau ?", r: "Une molécule sapide se fixe sur un récepteur, qui déclenche un message nerveux interprété par le cerveau." },
        { q: "Qu'est-ce que la coagulation des protéines ?", r: "Leur déroulement puis leur liaison sous l'effet de la chaleur, d'un acide ou du sel : l'aliment se raffermit." },
        { q: "Qu'est-ce que la gélatinisation de l'amidon ?", r: "Le gonflement des grains d'amidon dans l'eau chaude, qui épaissit la préparation." },
        { q: "Qu'est-ce que la réaction de Maillard ?", r: "Une réaction entre sucres et protéines à haute température, qui donne la couleur brune et les arômes grillés." },
        { q: "Caramélisation ou réaction de Maillard ?", r: "La caramélisation ne concerne que les sucres ; Maillard associe sucres et protéines." },
        { q: "Qu'est-ce qu'une émulsion ?", r: "Des gouttelettes de matière grasse dispersées dans de l'eau, stabilisées par un émulsifiant, comme la mayonnaise." },
        { q: "Quel est l'émulsifiant de la mayonnaise ?", r: "La lécithine du jaune d'œuf." },
        { q: "Quelle est la zone de température dangereuse pour les bactéries ?", r: "Environ entre 10 et 63 °C." },
        { q: "Que sont les 5 M ?", r: "Les sources de contamination : matières premières, milieu, matériel, méthode, main-d'œuvre." },
        { q: "Citez trois micro-organismes pathogènes.", r: "Salmonelle, Listeria, staphylocoque doré, norovirus." },
      ],
      quiz: [
        { q: "La saveur umami est surtout liée :", choix: ["au glutamate", "au sucre", "au citron", "au café noir torréfié"], bonne: 0, expl: "Le glutamate donne la saveur umami (bouillons, parmesan, tomate mûre).", niv: 1 },
        { q: "La croûte dorée d'un rôti est due surtout :", choix: ["à la gélatinisation", "à la réaction de Maillard", "à une fermentation de la viande au four", "à l'émulsion"], bonne: 1, expl: "Sucres et protéines réagissent à haute température.", niv: 1 },
        { q: "Une béchamel épaissit grâce à :", choix: ["la gélatinisation de l'amidon", "la coagulation du sucre", "la caramélisation", "une fermentation lactique du lait chaud"], bonne: 0, expl: "L'amidon de la farine gonfle dans le lait chaud.", niv: 1 },
        { q: "La mayonnaise est :", choix: ["une fermentation", "une mousse", "un gel", "une émulsion"], bonne: 3, expl: "Des gouttes d'huile sont dispersées dans la phase aqueuse du jaune.", niv: 1 },
        { q: "Pourquoi un plat très froid semble-t-il moins sucré ?", choix: ["Le sucre disparaît au froid", "Le froid réduit la perception de certaines saveurs", "Les papilles sont détruites par le froid de la chambre froide", "Le froid augmente l'amertume du dessert"], bonne: 1, expl: "La température du produit modifie la sensibilité des récepteurs.", niv: 2 },
        { q: "Un client enrhumé trouve son plat sans goût. Pourquoi ?", choix: ["Le plat n'est pas salé", "Ses papilles sont détruites par la fièvre", "Les arômes ne passent plus par la voie rétronasale", "Le rhume supprime le sens du toucher dans la bouche"], bonne: 2, expl: "Sans odorat, on ne perçoit plus que les saveurs de base.", niv: 2 },
        { q: "Le blanc d'œuf devient blanc et ferme à la cuisson à cause de :", choix: ["la caramélisation", "la gélatinisation de l'amidon", "la coagulation des protéines", "la réaction acétique"], bonne: 2, expl: "La chaleur déroule puis lie les protéines du blanc.", niv: 2 },
        { q: "Un sauté de veau reste 4 heures à 35 °C sur le passe. Quel risque ?", choix: ["Une meilleure conservation", "Une multiplication rapide des bactéries", "Une caramélisation progressive de la sauce du plat", "Pas de risque, car le plat reste tiède"], bonne: 1, expl: "35 °C est au cœur de la zone dangereuse de 10 à 63 °C.", niv: 2 },
        { q: "Lequel n'est **pas** une source de contamination des 5 M ?", choix: ["La main-d'œuvre", "Le matériel", "Les matières premières", "Le menu du jour"], bonne: 3, expl: "Les 5 M : matières premières, milieu, matériel, méthode, main-d'œuvre.", niv: 2 },
        { q: "Pourquoi une mayonnaise peut-elle « tomber » si l'on verse l'huile trop vite ?", choix: ["Le jaune fermente", "L'huile coagule au contact du jaune d'œuf froid", "Le jaune n'entoure pas assez vite les gouttes", "L'amidon gélatinise"], bonne: 2, expl: "Les gouttes trop grosses se rassemblent : l'émulsion se sépare.", niv: 3 },
        { q: "La couleur de l'assiette peut-elle changer la perception d'un dessert ?", choix: ["Oui, la vue influence le goût perçu", "Non, seul le goût compte", "Non, sauf pour les boissons", "Oui, mais pour les plats salés et pas les desserts"], bonne: 0, expl: "L'environnement visuel modifie l'appréciation sensorielle.", niv: 3 },
        { q: "Un pain trop grillé contient plus d'acrylamide. Cette substance vient :", choix: ["d'un excès de levure crue restée au cœur de la mie", "d'une fermentation lactique", "d'une émulsion ratée", "d'une réaction de Maillard poussée trop loin"], bonne: 3, expl: "À très haute température, Maillard produit aussi de l'acrylamide.", niv: 3 },
      ],
    },
  ],
  methode: [
    { id: 'sthr-stcs-m1', mat: 'sthr-stcs', titre: 'Calculer un apport et le comparer à une recommandation',
      formules: ['Calculer la masse de sucre apportée par chacune des journées proposées', 'Montrer, par des calculs, que la journée correspond à la préconisation', 'Commenter le pourcentage des apports journaliers couverts par une portion'],
      vu: ['Bac STC du 19 mai 2022 (sujet n° 9) : questions 4 et 5 (sucres de trois journées d\'enfants, recommandation de l\'OMS)', 'Bac STS du 22 mars 2023 (sujet n° 2) : question 4 (calcium apporté par 50 g de tomme)'],
      pts: 'Environ 3 à 6 points sur 20',
      attendu: 'Un calcul posé et juste, avec l\'unité, à partir des valeurs du document, puis une comparaison chiffrée avec la recommandation et une conclusion en une phrase : couvert, dépassé ou insuffisant, et ce que cela signifie pour la santé.',
      etapes: ['Relever dans le document la teneur pour 100 g et la portion servie.', 'Calculer : portion × teneur / 100, pour chaque aliment, puis additionner.', 'Écrire la recommandation donnée (OMS, ANSES) avec son unité.', 'Comparer : écart ou pourcentage couvert = apport / recommandation × 100.', 'Conclure et relier au risque pour la santé (excès de sucre, manque de calcium).'],
      mots: ['teneur pour 100 g', 'portion', 'apport', 'recommandation', 'pourcentage couvert', 'excès', 'carence'],
      pieges: ['Oublier de ramener la teneur à la portion.', 'Donner un chiffre sans unité.', 'Calculer sans conclure.', 'Comparer à une référence inventée au lieu de celle du document.'],
      cas: 'Restaurant inventé « La Table du Moulin ». Portion de comté servie : 40 g. Teneur en calcium du comté : 1 000 mg pour 100 g. Référence nutritionnelle pour un adulte : 950 mg de calcium par jour.',
      question: 'Calculez le calcium apporté par la portion et le pourcentage de la référence couvert, puis commentez.',
      modele: 'Calcium apporté = 40 × 1 000 / 100 = 400 mg. Pourcentage couvert = 400 / 950 × 100 ≈ 42 %. Une seule portion de comté couvre donc environ 42 % du besoin quotidien d\'un adulte en calcium : c\'est un bon apport pour la solidité des os, mais le comté est aussi riche en graisses saturées et en sel, donc la portion doit rester raisonnable.',
      grille: ['Calcul de l\'apport posé et juste', 'Unité indiquée', 'Pourcentage couvert juste', 'Comparaison avec la référence du document', 'Conclusion liée à la santé'] },
    { id: 'sthr-stcs-m2', mat: 'sthr-stcs', titre: 'Proposer ou améliorer un repas équilibré',
      formules: ['Proposer un petit-déjeuner équilibré incluant le produit', 'Proposer, pour le menu, des produits alternatifs permettant de réduire l\'apport en sucre', 'Justifier ce choix d\'un point de vue nutritionnel'],
      vu: ['Bac STS du 20 juin 2024 (sujet n° 1) : question 1 (petit-déjeuner équilibré avec du cantal)', 'Bac STC du 19 mai 2022 (sujet n° 9) : questions 6 et 7 (desserts moins sucrés, sauce aux fruits plutôt qu\'au caramel)'],
      pts: 'Environ 3 à 4 points sur 20',
      attendu: 'Un repas complet qui associe les groupes d\'aliments, avec pour chacun le nutriment principal apporté, et une justification courte reliée aux repères du PNNS ou à la santé du client visé.',
      etapes: ['Lister les groupes à couvrir : produit laitier, féculent, fruit, boisson, et selon le repas une source de protéines et des légumes.', 'Placer l\'aliment imposé dans son groupe.', 'Compléter avec un aliment par groupe manquant.', 'Pour chaque aliment, écrire son apport principal (calcium, glucides complexes, vitamine C, eau).', 'Justifier par un repère (PNNS) ou par le besoin du client.'],
      mots: ['groupe d\'aliments', 'glucides complexes', 'calcium', 'vitamine C', 'fibres', 'repères du PNNS', 'hydratation'],
      pieges: ['Oublier la boisson ou le fruit.', 'Mettre deux produits laitiers et aucun féculent.', 'Lister les aliments sans dire ce qu\'ils apportent.'],
      cas: 'Hôtel inventé « Le Domaine des Sources » : il veut proposer un petit-déjeuner équilibré qui met en valeur un yaourt fermier de la région.',
      question: 'Proposez un petit-déjeuner équilibré incluant ce yaourt et justifiez chaque élément.',
      modele: 'Yaourt fermier : produit laitier, apporte du calcium et des protéines. Pain complet : féculent, apporte des glucides complexes pour l\'énergie de la matinée et des fibres. Une orange ou un kiwi : fruit, apporte de la vitamine C et des fibres. Un verre d\'eau et un thé ou un café : hydratation. Une noisette de beurre ou un peu de miel, en petite quantité. Le repas couvre ainsi les groupes recommandés par le PNNS, sans excès de sucre ni de graisses.',
      grille: ['Produit imposé bien placé', 'Féculent présent', 'Fruit présent', 'Boisson présente', 'Apport de chaque aliment justifié'] },
    { id: 'sthr-stcs-m3', mat: 'sthr-stcs', titre: 'Argumenter un choix alimentaire pour une personne à risque',
      formules: ['Argumenter le choix d\'un de ces produits pour une femme enceinte', 'Expliquer les conséquences néfastes d\'une alimentation trop sucrée sur la santé', 'Décrire deux inconvénients pour la santé liés à une consommation excessive'],
      vu: ['Bac STS du 20 juin 2024 (sujet n° 1) : question 2 (cantal au lait cru ou faisselle au lait pasteurisé pour une femme enceinte)', 'Bac STC du 19 mai 2022 (sujet n° 9) : question 2 (méfaits du sucre)', 'Bac STS du 22 mars 2023 (sujet n° 2) : questions 1 et 3 (excès de fromage, manque de calcium)'],
      pts: 'Environ 3 à 4 points sur 20',
      attendu: 'Un choix clair, puis deux arguments : un argument sanitaire (le danger, par exemple Listeria monocytogenes, et ses conséquences) et un argument nutritionnel (les besoins de la personne, par exemple le calcium). Le vocabulaire scientifique est exact.',
      etapes: ['Annoncer le choix dès la première phrase.', 'Nommer le danger évité (micro-organisme, excès d\'un nutriment) et sa conséquence pour la personne.', 'Ajouter l\'intérêt nutritionnel du produit choisi.', 'Si besoin, dire pourquoi l\'autre produit est écarté.', 'Conclure en une phrase.'],
      mots: ['Listeria monocytogenes', 'listériose', 'lait pasteurisé', 'lait cru', 'fœtus', 'calcium', 'besoins accrus'],
      pieges: ['Choisir sans justifier.', 'Dire « bactérie » sans la nommer.', 'Oublier l\'argument nutritionnel.', 'Confondre listériose et toxoplasmose.'],
      cas: 'Brasserie inventée « Le Quai Vert » : une cliente enceinte hésite entre un saumon fumé en entrée et une soupe de légumes avec un fromage frais au lait pasteurisé.',
      question: 'Argumentez le choix à conseiller à cette cliente.',
      modele: 'Il faut lui conseiller la soupe de légumes avec le fromage frais au lait pasteurisé. Le saumon fumé est un produit qui peut contenir Listeria monocytogenes, une bactérie qui se développe même au froid ; la listériose peut provoquer une fausse couche ou une infection grave du fœtus. La pasteurisation détruit cette bactérie. De plus, le fromage frais apporte du calcium et des protéines, dont les besoins augmentent pendant la grossesse, et la soupe apporte des fibres, des vitamines et de l\'eau.',
      grille: ['Choix annoncé', 'Danger nommé précisément', 'Conséquence pour le fœtus', 'Argument nutritionnel', 'Vocabulaire exact'] },
    { id: 'sthr-stcs-m4', mat: 'sthr-stcs', titre: 'Expliquer un mécanisme sensoriel ou une transformation',
      formules: ['Présenter le mécanisme associé à l\'olfaction', 'Expliciter l\'intérêt de maintenir la crème froide pour réussir la crème chantilly', 'Analyser le rôle de cet additif gélifiant'],
      vu: ['Bac STS du 20 juin 2024 (sujet n° 1) : question 3 (olfaction pendant la dégustation du vin, à partir d\'un schéma)', 'Bac STS du 22 mars 2023 (sujet n° 2) : questions 5 et 6 (crème chantilly froide, additif gélifiant dans une crème allégée)'],
      pts: 'Environ 3 à 4 points sur 20',
      attendu: 'Les étapes dans l\'ordre, avec les bons mots : la molécule, le récepteur, le message nerveux, le cerveau ; ou, pour une transformation, la cause (température, matière grasse, gélifiant), ce qui se passe à l\'échelle des molécules et le résultat dans l\'assiette.',
      etapes: ['Partir du document (schéma du circuit des odeurs, fiche technique).', 'Nommer le stimulus : molécules odorantes ou sapides.', 'Décrire la réception : récepteurs des cellules olfactives ou des bourgeons du goût.', 'Décrire la transmission : message nerveux jusqu\'au cerveau, qui interprète.', 'Relier au contexte professionnel : dégustation, service à la bonne température.'],
      mots: ['molécules odorantes', 'voie directe', 'voie rétronasale', 'récepteurs', 'message nerveux', 'bulbe olfactif', 'cerveau'],
      pieges: ['Sauter l\'étape du message nerveux.', 'Recopier le schéma sans l\'expliquer.', 'Oublier le lien avec la situation du sujet.'],
      cas: 'Bar à vins inventé « Le Cep d\'Or » : le sommelier explique à un apprenti pourquoi il faut faire tourner le vin dans le verre puis le sentir avant de le goûter.',
      question: 'Présentez le mécanisme de l\'olfaction mis en jeu.',
      modele: 'En faisant tourner le vin, on libère ses molécules odorantes dans l\'air du verre. En sentant, elles entrent par les narines (voie directe) ; en bouche, elles remontent vers le nez par l\'arrière (voie rétronasale). Elles se fixent sur les récepteurs des cellules olfactives au fond des fosses nasales. Ces cellules transforment ce signal en message nerveux, transmis par le bulbe olfactif jusqu\'au cerveau, qui l\'interprète comme une odeur ou un arôme (fruit rouge, boisé). C\'est pourquoi l\'odorat joue un rôle majeur dans la dégustation.',
      grille: ['Molécules odorantes', 'Voies directe et rétronasale', 'Récepteurs', 'Message nerveux et cerveau', 'Lien avec la dégustation'] },
    { id: 'sthr-stcs-m5', mat: 'sthr-stcs', titre: 'Choisir un produit d\'entretien et présenter le cercle de Sinner',
      formules: ['Discuter le choix du produit à privilégier par la direction', 'Présenter les quatre paramètres d\'efficacité à partir de la fiche technique du produit choisi'],
      vu: ['Bac STS du 20 juin 2024 (sujet n° 1) : questions 4 et 5 (deux fiches techniques pour une kitchenette, démarche de développement durable)'],
      pts: 'Environ 4 à 6 points sur 20',
      attendu: 'Une comparaison des deux produits sur plusieurs critères tirés des fiches (action, pH, contact alimentaire, dangers, impact environnemental, dosage), un choix justifié selon le besoin de l\'établissement, puis les quatre facteurs de Sinner illustrés par les données de la fiche.',
      etapes: ['Rappeler le besoin : surface, salissure, contact alimentaire, démarche durable.', 'Comparer les deux fiches critère par critère.', 'Choisir et justifier par au moins trois critères.', 'Présenter les quatre facteurs : action chimique (dose), action mécanique (frotter), température, temps de contact, avec les valeurs de la fiche.', 'Rappeler une précaution de sécurité.'],
      mots: ['détergent-désinfectant', 'pH', 'dilution', 'temps de contact', 'contact alimentaire', 'Écolabel', 'cercle de Sinner', 'EPI'],
      pieges: ['Choisir sans comparer.', 'Citer Sinner sans les valeurs de la fiche.', 'Oublier le contact alimentaire pour une kitchenette.', 'Oublier l\'argument environnemental quand le sujet le demande.'],
      cas: 'Gîte inventé « Les Hauts du Lac ». Produit A : détergent-désinfectant écolabellisé, pH 9, dilution 1 %, 5 minutes de contact, à température ambiante, apte au contact alimentaire après rinçage. Produit B : désinfectant concentré, pH 13, corrosif, dangereux pour les milieux aquatiques, dilution 4 %, 15 minutes.',
      question: 'Quel produit la direction doit-elle choisir pour la kitchenette ? Présentez ensuite les quatre facteurs de Sinner du produit choisi.',
      modele: 'La direction doit choisir le produit A. Il nettoie et désinfecte en une seule opération, ce qui fait gagner du temps ; il peut être utilisé sur les surfaces en contact avec les aliments après rinçage ; il est écolabellisé, moins dosé (1 % contre 4 %) et non corrosif, donc moins dangereux pour le personnel et l\'environnement, ce qui va dans le sens de la démarche durable. Facteurs de Sinner : action chimique, une dilution à 1 %, soit 10 mL par litre d\'eau ; action mécanique, frotter avec une lavette microfibre ; température, eau à température ambiante ; temps, 5 minutes de contact avant rinçage. On porte des gants et on ne mélange pas le produit avec un autre.',
      grille: ['Comparaison sur au moins trois critères', 'Choix justifié selon le besoin', 'Argument environnemental', 'Quatre facteurs de Sinner avec les valeurs', 'Précaution de sécurité'] },
  ],
  sujets: [
    { id: 'sthr-stcs-s1', matiere: 'sthr-stcs', titre: 'Sujet d\'entraînement inventé : partie écrite « La Ferme des Brumes »', duree: 60,
      enonce: `## Partie écrite d'ESAE (entièrement inventée)

L'établissement, les personnes et tous les chiffres de ce sujet sont fictifs. Durée : 1 heure. Calculatrice autorisée. Noté sur 20 points, dont 2 points pour la maîtrise de la langue (clarté, orthographe, vocabulaire scientifique).

**Contexte.** « La Ferme des Brumes » est une ferme-auberge inventée de 12 chambres, en moyenne montagne. Son restaurant de 40 couverts propose une cuisine de produits locaux. La gérante, Mme Varenne, veut proposer un menu adapté aux randonneurs et s'engager dans une démarche plus respectueuse de l'environnement.

**Document 1 : le menu « Randonneur »**
- Entrée : salade de lentilles vertes, échalotes et vinaigrette à l'huile de colza.
- Plat : truite meunière, pommes de terre sautées.
- Fromage : 50 g de tomme de la ferme au lait cru.
- Dessert : tarte aux myrtilles.
- Boisson : eau.

**Document 2 : composition de quelques éléments du menu (pour la portion servie)**
- Salade de lentilles : protéines 9 g, glucides 22 g, lipides 8 g.
- Truite meunière et pommes de terre sautées : protéines 30 g, glucides 40 g, lipides 26 g.
- Tomme (50 g) : protéines 12 g, glucides 0 g, lipides 14 g, calcium 400 mg.
- Tarte aux myrtilles : protéines 4 g, glucides 45 g, lipides 14 g.

**Document 3 : références (adulte)** : besoin moyen d'un randonneur adulte : 2 800 kcal par jour, dont environ 40 % au déjeuner. Lipides conseillés : 35 à 40 % de l'énergie. Calcium : 950 mg par jour.

**Document 4 : deux équipements pour la salle**
- Équipement 1 : panneaux muraux absorbants en fibres de bois, fabriqués en France, posés sur deux murs.
- Équipement 2 : double vitrage sur toutes les fenêtres de la salle.

**Questions**

1. Calculez l'énergie apportée par le menu, puis la part de cette énergie apportée par les lipides. Comparez aux références du document 3. (5 points)
2. Calculez le pourcentage de la référence en calcium couvert par la portion de tomme. Commentez. (3 points)
3. Une cliente enceinte souhaite le menu. Argumentez les adaptations à lui proposer. (3 points)
4. La pâte de la tarte est une pâte levée à la levure de boulanger. Expliquez le phénomène qui la fait lever et les conditions à respecter. (3 points)
5. La salle est jugée bruyante par les clients, à cause de l'écho. Choisissez l'équipement le plus adapté du document 4 et justifiez. (4 points)`,
      corrige: `## Corrigé

**1. Énergie et lipides (5 points)**
- Protéines : 9 + 30 + 12 + 4 = 55 g. Glucides : 22 + 40 + 0 + 45 = 107 g. Lipides : 8 + 26 + 14 + 14 = 62 g.
- Énergie = 55 × 4 + 107 × 4 + 62 × 9 = 220 + 428 + 558 = 1 206 kcal.
- Besoin au déjeuner : 2 800 × 40 / 100 = 1 120 kcal. Le menu apporte un peu plus (1 206 kcal), ce qui reste acceptable pour un randonneur qui marche l'après-midi.
- Part des lipides : 558 / 1 206 × 100 ≈ 46 %. C'est au-dessus des 35 à 40 % conseillés : le menu est trop gras. On peut par exemple cuire la truite au four ou en papillote et servir des pommes de terre vapeur.

**2. Calcium (3 points)**
- 400 / 950 × 100 ≈ 42 %. La portion de tomme couvre environ 42 % du besoin quotidien en calcium : c'est un très bon apport pour les os. Mais la tomme apporte aussi 14 g de lipides et du sel : la portion ne doit pas être augmentée.

**3. Cliente enceinte (3 points)**
- La tomme au lait cru est à remplacer par un fromage au lait pasteurisé ou un yaourt, car le lait cru peut contenir Listeria monocytogenes ; la listériose peut provoquer une fausse couche ou une infection grave du fœtus. La pasteurisation détruit la bactérie.
- On garde un produit laitier, car les besoins en calcium augmentent pendant la grossesse.
- On vérifie que la truite est bien cuite et que la salade est préparée avec des produits bien lavés (toxoplasmose si la cliente n'est pas immunisée). Pas d'alcool.

**4. Pâte levée (3 points)**
- Les levures de boulanger réalisent une fermentation alcoolique : elles transforment les sucres de la pâte en éthanol et en dioxyde de carbone. Le CO₂ est retenu par le réseau de gluten : la pâte gonfle. L'éthanol s'évapore à la cuisson.
- Conditions : une température douce, vers 25 à 30 °C ; une pâte couverte pour garder l'humidité ; un temps de pousse suffisant ; pas de sel en contact direct avec la levure.

**5. Choix de l'équipement (4 points)**
- Le problème est l'écho à l'intérieur de la salle : il faut absorber le son, pas l'empêcher d'entrer. Le double vitrage isole surtout des bruits extérieurs : il ne réduit pas l'écho.
- Les panneaux absorbants captent le son et diminuent la réverbération : les clients n'ont plus besoin de parler fort, le confort augmente et le personnel est moins fatigué.
- Ils sont fabriqués en fibres de bois et en France : matériau naturel et transport réduit, cohérent avec la démarche environnementale de l'auberge.
- Choix : l'équipement 1.

**Maîtrise de la langue (2 points)** : phrases complètes, calculs présentés, vocabulaire scientifique exact (fermentation alcoolique, réverbération, Listeria monocytogenes), orthographe soignée.`,
      grille: [
        { c: 'Question 1 : calculs de l\'énergie et de la part des lipides justes et posés, comparaison et proposition', pts: 5 },
        { c: 'Question 2 : pourcentage juste et commentaire nutritionnel', pts: 3 },
        { c: 'Question 3 : danger Listeria nommé, conséquence, adaptation et argument calcium', pts: 3 },
        { c: 'Question 4 : fermentation alcoolique, rôle du CO₂ et du gluten, conditions', pts: 3 },
        { c: 'Question 5 : distinction isolant et absorbant, choix justifié, argument environnemental', pts: 4 },
        { c: 'Maîtrise de la langue : clarté, orthographe, vocabulaire scientifique', pts: 2 },
      ] },
  ],
};
