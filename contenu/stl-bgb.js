// Biochimie-biologie-biotechnologie — STL (spécialité biotechnologies). Sources : voir matiere.sources.
// Programme : arrêté du 19/07/2019 (BO spécial n° 8 du 25/07/2019), terminale STL, en vigueur pour la session 2027.
// Trois parties : S (concepts scientifiques, S1 à S4), T (fondamentaux technologiques, T1 à T10),
// L (travail au laboratoire, L1 à L4). Les modules sont regroupés en 10 chapitres, dans l'ordre du programme.
// Épreuve : définition consolidée en vigueur depuis la session 2024 (écrit 3 h coefficient 7, partie pratique 3 h coefficient 9),
// forme confirmée par le sujet de métropole du 17/06/2026. La note de service du BO spécial n° 4 du 17/09/2026 n'a pas pu être lue.
export default {
  matiere: {
    id: 'stl-bgb',
    nom: 'Biochimie-biologie-biotechnologie',
    voie: 'stl',
    epreuve: { type: 'ecrit+pratique', duree: 180, coef: 16, quand: 'juin (écrit) ; partie pratique dans l\'année, à une date fixée par le lycée', note: 'Partie écrite de 3 h (sur 20, coefficient 7) : un questionnement sur 6 à 9 documents autour d\'un contexte de biotechnologie (environ 2 h 30), puis une question de synthèse (environ 30 min). Chaque question indique la compétence évaluée, de C1 (analyser un document) à C6 (communiquer à l\'écrit). Partie pratique de 3 h au laboratoire (sur 20, coefficient 9). Les notions de première peuvent être mobilisées.' },
    sources: [
      'https://www.education.gouv.fr/sites/default/files/document/Programme%20de%20biochimie,%20biologie%20et%20biotechnologies%20de%20terminale%20STL-253500.pdf',
      'https://eduscol.education.gouv.fr/5859/programmes-et-ressources-en-serie-stl',
      'https://pedagogie.ac-clermont.fr/disciplines/biotechnologie/wp-content/uploads/sites/27/2024/07/STL-BAC-2024.pdf',
      'https://www.education.gouv.fr/bo/2026/Special4/MENE2622647N',
      'https://ent2d.ac-bordeaux.fr/disciplines/biotechnologies-sante-social/pedagogie/annales-du-bac-stl-biotechnologies/',
      'https://ent2d.ac-bordeaux.fr/disciplines/biotechnologies-sante-social/wp-content/uploads/sites/66/2026/06/BiochiBioBiotechno-2026-1.pdf',
      'https://ent2d.ac-bordeaux.fr/disciplines/biotechnologies-sante-social/wp-content/uploads/sites/66/2025/06/877682354-Bac-2025-STL-biochimie.pdf',
      'https://ent2d.ac-bordeaux.fr/disciplines/biotechnologies-sante-social/wp-content/uploads/sites/66/2024/06/2024-BBB-Metropole-sujet.pdf',
    ],
    chapitres: [
      { id: 'stl-bgb-1', t: 'Enzymes et voies métaboliques (S1)', theme: 'Concepts scientifiques' },
      { id: 'stl-bgb-2', t: 'Immunité cellulaire et moléculaire (S2)', theme: 'Concepts scientifiques' },
      { id: 'stl-bgb-3', t: 'Propriétés de l\'ADN et réplication (S3)', theme: 'Concepts scientifiques' },
      { id: 'stl-bgb-4', t: 'Micro-organismes et domaines d\'application des biotechnologies (S4)', theme: 'Concepts scientifiques' },
      { id: 'stl-bgb-5', t: 'Observer, cultiver et identifier les micro-organismes (T1 à T3)', theme: 'Fondamentaux technologiques' },
      { id: 'stl-bgb-6', t: 'Dénombrer les micro-organismes et préparer des solutions (T4 et T5)', theme: 'Fondamentaux technologiques' },
      { id: 'stl-bgb-7', t: 'Détecter, séparer et doser les biomolécules (T6 à T8)', theme: 'Fondamentaux technologiques' },
      { id: 'stl-bgb-8', t: 'Technologies de l\'ADN et cellules végétales (T9 et T10)', theme: 'Fondamentaux technologiques' },
      { id: 'stl-bgb-9', t: 'Démarche de projet et prévention des risques (L1 et L2)', theme: 'Travail au laboratoire' },
      { id: 'stl-bgb-10', t: 'Résultats de mesure fiables et outils numériques (L3 et L4)', theme: 'Travail au laboratoire' },
    ],
  },
  paquets: [
    // ---------------------------------------------------------------- S1
    {
      chapitre: 'stl-bgb-1',
      fiche: `## Enzymes et voies métaboliques

### Le métabolisme et l'ATP
- Une **voie métabolique** est une suite de réactions, chacune catalysée par une enzyme.
- Le **catabolisme** dégrade des molécules et libère de l'énergie (la respiration). L'**anabolisme** construit des molécules et consomme de l'énergie (la photosynthèse).
- L'**enthalpie libre standard de réaction** ΔrG'° dit si une réaction est possible : si elle est **négative**, la réaction est **exergonique** et peut se faire spontanément ; si elle est **positive**, elle est **endergonique**.
- **Couplage énergétique** : une réaction endergonique devient possible si on la couple à une réaction exergonique. On fait la **somme algébrique** des ΔrG'°.
- Exemple : glucose + phosphate → glucose 6-phosphate : + 13,8 kJ/mol. Hydrolyse de l'ATP : − 30,5 kJ/mol. Couplées : 13,8 − 30,5 = **− 16,7 kJ/mol**, la réaction se fait.
- L'**ATP** est la molécule d'échange d'énergie : son hydrolyse en ADP + phosphate libère de l'énergie (liaison à **haut potentiel énergétique**).

### La respiration
- Oxydation **complète** du glucose : C6H12O6 + 6 O2 → 6 CO2 + 6 H2O.
- **Glycolyse** (cytoplasme) : glucose → 2 pyruvate, avec 2 ATP et 2 NADH,H+ gagnés.
- Dans la **mitochondrie** : le pyruvate devient acétyl-CoA, puis le **cycle de Krebs** libère le CO2 et réduit les coenzymes (NADH,H+ et FADH2).
- **Chaîne respiratoire** (membrane interne) : les coenzymes réduits cèdent leurs électrons à une chaîne de transporteurs ; l'**accepteur final** est le **dioxygène**, réduit en eau. Le transfert crée un **gradient de protons** utilisé par l'**ATP synthase** : c'est la **phosphorylation oxydative** (couplage chimio-osmotique).
- Bilan, avec 3 ATP par NADH,H+ et 2 par FADH2 : 10 NADH,H+ donnent 30 ATP, 2 FADH2 donnent 4 ATP, plus 4 ATP formés directement : **38 ATP par glucose**.

### La fermentation
- Oxydation **incomplète** du glucose, sans dioxygène. Après la glycolyse, la dernière étape sert à **réoxyder le NADH,H+** en NAD+, pour que la glycolyse continue.
- **Fermentation lactique** : pyruvate → lactate (yaourt, et aussi nos muscles en effort intense). **Fermentation alcoolique** : pyruvate → éthanol + CO2 (levures du pain, de la bière).
- Seulement **2 ATP par glucose**, formés par **phosphorylation au niveau du substrat**.
- Le produit peut être un **produit d'intérêt** (yaourt) ou un **produit d'altération** (lait tourné).

### La photosynthèse
- Dans le **chloroplaste**. Phase photochimique (thylakoïdes) : la lumière **excite** les photosystèmes ; l'eau est oxydée et libère du O2 ; il se forme de l'**ATP** et du **NADPH**.
- **Cycle de Calvin** (stroma) : fixation du **CO2** grâce à l'ATP et au NADPH, production de glycéraldéhyde 3-phosphate, précurseur des oses. C'est de l'anabolisme et de l'**autotrophie**.

### Types trophiques et cycles
- Source d'**énergie** : **photo**- (lumière) ou **chimio**- (réactions chimiques). Source d'**électrons** : **litho**- (minéral) ou **organo**- (organique). Source de **carbone** : **auto**- (CO2) ou **hétéro**- (organique).
- Exemples : l'être humain et Escherichia coli sont **chimio-organo-hétérotrophes** ; une plante est **photo-litho-autotrophe**.
- Cycle de l'azote : **minéralisation** de la matière organique en ammonium, **nitrification** (ammonium → nitrite → nitrate), **dénitrification** (nitrate → diazote, sans O2), fixation du diazote par des bactéries en **symbiose** (Rhizobium dans les nodosités du trèfle).

### Les enzymes
- Une **enzyme** est un catalyseur biologique, en général une protéine. Elle accélère une réaction sans être consommée.
- Double **spécificité** : de **substrat** (le site actif reconnaît une molécule) et de **réaction**. Elle forme un **complexe enzyme-substrat**.
- Les **cofacteurs** : **ions métalliques** et **coenzymes** (NAD+, issu d'une vitamine).
- Certaines enzymes sont produites inactives : la **proenzyme** (trypsinogène, activé en trypsine dans l'intestin).
- **Vitesse initiale** v0 : mesurée au début, quand la quantité de produit augmente de façon linéaire. Quand la concentration en substrat augmente, v0 augmente, puis atteint un plateau : l'enzyme est **saturée** (vitesse maximale).
- Température et pH ont un **optimum** ; une forte chaleur **dénature** l'enzyme.

### À retenir pour le bac
- ΔrG'° négative : réaction possible ; couplage = somme des ΔrG'°.
- Respiration : 38 ATP (avec les données 3 et 2), accepteur final O2. Fermentation : 2 ATP.
- Rôle de la fermentation : réoxyder les coenzymes réduits.
- Savoir nommer un type trophique avec les trois préfixes.
- La vitesse initiale se mesure dans la partie linéaire de la courbe.`,
      cartes: [
        { q: "Que signifie une ΔrG'° négative ?", r: "La réaction est exergonique : elle peut se faire spontanément dans les conditions standard." },
        { q: "Qu'est-ce que le couplage énergétique ?", r: "Associer une réaction endergonique à une réaction exergonique, souvent l'hydrolyse de l'ATP : la somme algébrique des ΔrG'° devient négative." },
        { q: "Glucose + phosphate (+ 13,8 kJ/mol) couplé à l'hydrolyse de l'ATP (− 30,5 kJ/mol) : bilan ?", r: "13,8 − 30,5 = − 16,7 kJ/mol : la réaction couplée est possible." },
        { q: "Catabolisme ou anabolisme ?", r: "Le catabolisme dégrade des molécules et libère de l'énergie ; l'anabolisme construit des molécules et en consomme." },
        { q: "Où se déroulent la glycolyse et le cycle de Krebs ?", r: "La glycolyse dans le cytoplasme ; le cycle de Krebs dans la matrice de la mitochondrie." },
        { q: "Quel est l'accepteur final d'électrons de la respiration aérobie ?", r: "Le dioxygène, réduit en eau." },
        { q: "Qu'est-ce que la phosphorylation oxydative ?", r: "La synthèse d'ATP par l'ATP synthase grâce au gradient de protons créé par la chaîne respiratoire." },
        { q: "Combien d'ATP par glucose avec 3 ATP par NADH,H+ et 2 par FADH2 ?", r: "10 × 3 + 2 × 2 + 4 = 38 ATP par la respiration." },
        { q: "À quoi sert la dernière étape d'une fermentation ?", r: "À réoxyder le NADH,H+ en NAD+, pour que la glycolyse puisse continuer." },
        { q: "Combien d'ATP une fermentation produit-elle par glucose ?", r: "2 ATP, par phosphorylation au niveau du substrat." },
        { q: "Que produit la phase photochimique de la photosynthèse ?", r: "De l'ATP, du NADPH et du dioxygène (issu de l'oxydation de l'eau)." },
        { q: "Que fait le cycle de Calvin ?", r: "Il fixe le CO2 dans des molécules organiques, en consommant l'ATP et le NADPH de la phase photochimique." },
        { q: "Quel est le type trophique d'Escherichia coli ?", r: "Chimio-organo-hétérotrophe : énergie chimique, électrons et carbone venant de molécules organiques." },
        { q: "Qu'est-ce que la nitrification ?", r: "La transformation de l'ammonium en nitrite puis en nitrate par des bactéries du sol." },
        { q: "Qu'est-ce que la double spécificité d'une enzyme ?", r: "Une spécificité de substrat (elle reconnaît une molécule) et une spécificité de réaction (elle catalyse une seule transformation)." },
        { q: "Qu'est-ce qu'une proenzyme ?", r: "Une forme inactive d'une enzyme, activée plus tard : le trypsinogène devient la trypsine dans l'intestin." },
        { q: "Pourquoi la vitesse atteint-elle un plateau quand on ajoute du substrat ?", r: "Tous les sites actifs sont occupés : l'enzyme est saturée et fonctionne à sa vitesse maximale." },
      ],
      quiz: [
        { q: "Une réaction A → B a une ΔrG'° de + 20 kJ/mol. On la couple à l'hydrolyse de l'ATP (− 30,5 kJ/mol). La ΔrG'° du couplage vaut :", choix: ["+ 50,5 kJ/mol", "− 50,5 kJ/mol", "− 10,5 kJ/mol", "+ 10,5 kJ/mol"], bonne: 2, expl: "On fait la somme algébrique : 20 − 30,5 = − 10,5 kJ/mol ; la réaction couplée devient possible.", niv: 2 },
        { q: "Une réaction dont la ΔrG'° est positive est dite :", choix: ["endergonique", "exergonique", "catabolique", "spontanée"], bonne: 0, expl: "ΔrG'° positive : elle a besoin d'un apport d'énergie, par exemple un couplage avec l'ATP.", niv: 1 },
        { q: "Dans la respiration aérobie, l'accepteur final des électrons est :", choix: ["le NAD+", "le pyruvate", "le CO2", "le dioxygène"], bonne: 3, expl: "Les électrons de la chaîne respiratoire finissent sur le O2, réduit en eau.", niv: 1 },
        { q: "Pourquoi une levure en fermentation alcoolique produit-elle de l'éthanol ?", choix: ["Pour stocker l'énergie du glucose sous forme d'alcool", "Pour fixer le CO2 de l'air", "Pour réoxyder le NADH,H+ formé par la glycolyse", "Pour produire du dioxygène"], bonne: 2, expl: "Sans O2, la cellule doit régénérer le NAD+ : la réduction du pyruvate en éthanol le permet.", niv: 2 },
        { q: "Une cellule cancéreuse consomme beaucoup de glucose et produit beaucoup de lactate. Elle utilise surtout :", choix: ["la fermentation lactique", "la photosynthèse", "le cycle de Calvin", "la nitrification"], bonne: 0, expl: "Le lactate est le produit de la fermentation lactique, qui ne donne que 2 ATP par glucose : d'où la forte consommation.", niv: 2 },
        { q: "Où se trouve la chaîne respiratoire chez un eucaryote ?", choix: ["Dans le cytoplasme", "Dans le noyau", "Dans la membrane externe du noyau cellulaire", "Dans la membrane interne de la mitochondrie"], bonne: 3, expl: "La chaîne de transporteurs et l'ATP synthase sont dans la membrane interne mitochondriale.", niv: 1 },
        { q: "Une bactérie tire son énergie de l'oxydation de l'ammonium et son carbone du CO2. Son type trophique est :", choix: ["photo-litho-autotrophe", "chimio-litho-autotrophe", "chimio-organo-hétérotrophe", "photo-organo-hétérotrophe"], bonne: 1, expl: "Énergie chimique (chimio), électrons d'un composé minéral (litho), carbone du CO2 (auto).", niv: 2 },
        { q: "Pour mesurer la vitesse initiale d'une réaction enzymatique, on se place :", choix: ["dans la partie linéaire du début de la courbe", "quand la quantité de produit formé ne varie plus", "après la dénaturation de l'enzyme", "à la fin de la réaction"], bonne: 0, expl: "Au début, la quantité de produit augmente de façon linéaire avec le temps : la pente donne v0.", niv: 2 },
        { q: "Avec les données 3 ATP par NADH,H+ et 2 par FADH2, la respiration d'une mole de glucose donne :", choix: ["2 moles d'ATP", "34 moles d'ATP", "36 moles d'ATP", "38 moles d'ATP"], bonne: 3, expl: "10 NADH,H+ (30 ATP) + 2 FADH2 (4 ATP) + 4 ATP au niveau du substrat = 38.", niv: 2 },
        { q: "On double la concentration en substrat et la vitesse initiale ne change plus. Pourquoi ?", choix: ["Le substrat est dénaturé", "L'enzyme est saturée en substrat", "La réaction est devenue endergonique", "Le produit manque"], bonne: 1, expl: "Tous les sites actifs sont déjà occupés : on est à la vitesse maximale.", niv: 3 },
        { q: "Pourquoi le trypsinogène est-il produit sous forme inactive par le pancréas ?", choix: ["Pour éviter qu'il digère le pancréas lui-même", "Parce qu'il lui manque son coenzyme dans le pancréas", "Pour qu'il traverse la membrane mitochondriale", "Parce que le pH du pancréas est trop acide"], bonne: 0, expl: "Une proenzyme n'est activée que là où elle doit agir : ici dans l'intestin.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- S2
    {
      chapitre: 'stl-bgb-2',
      fiche: `## Immunité cellulaire et moléculaire

### Le soi et le non-soi
- Le **soi** : ce que l'organisme tolère, notamment ses molécules du **CMH** (complexe majeur d'histocompatibilité, appelé HLA chez l'humain), présentes à la surface des cellules.
- Le **non-soi** : ce qui déclenche une réponse immunitaire, comme un microbe ou une greffe. Un **antigène** est une molécule reconnue par le système immunitaire.
- Les premières défenses sont les **barrières** : la peau, les **épithéliums** des muqueuses (mucus, cils), leur environnement (acidité, enzymes) et le **microbiote**, qui occupe la place.
- Un micro-organisme **opportuniste** ne rend malade que si les défenses sont affaiblies.

### La réponse innée : rapide et non spécifique
- Des **cellules sentinelles** (macrophages, cellules dendritiques) portent des **récepteurs** qui reconnaissent des **motifs moléculaires** communs aux microbes (le LPS des bactéries à Gram négatif, le peptidoglycane).
- Elles libèrent des **molécules pro-inflammatoires** : c'est la **réaction inflammatoire**, avec rougeur, chaleur, gonflement et douleur.
- **Vasodilatation** des vaisseaux, **exsudation** du plasma, **diapédèse** (les globules blancs traversent la paroi des vaisseaux), attirés par **chimiotactisme**.
- La **phagocytose** : adhésion, **endocytose** du microbe dans une vésicule, fusion avec des lysosomes, **dégradation**.

### La réponse adaptative : lente au début, spécifique
- Une **cellule présentatrice d'antigène** (CPA, comme une cellule dendritique) présente un **peptide antigénique** associé à une molécule du CMH.
- Le **lymphocyte T4** (auxiliaire) reconnaît ce complexe grâce à son **TCR** (récepteur des cellules T). Il est activé, se multiplie (**sélection clonale**) et sécrète des **interleukines** qui activent les autres lymphocytes : c'est la **coopération cellulaire**.
- Les **lymphocytes T8** deviennent des **LT cytotoxiques** (LTc) : ils reconnaissent les cellules infectées ou cancéreuses et les détruisent (**lyse cellulaire** par **exocytose** de perforine).
- Les **lymphocytes B** reconnaissent l'antigène entier grâce à leur **BCR**. Activés avec l'aide des LT4, ils deviennent des **plasmocytes** qui sécrètent des **anticorps** (le réticulum endoplasmique y est très développé).

### Les anticorps
- Un **anticorps** (immunoglobuline, Ig) a la forme d'un Y : 2 chaînes lourdes, 2 chaînes légères. Son **paratope** se fixe sur l'**épitope** de l'antigène : interaction **spécifique** protéine-ligand.
- Les **isotypes** : **IgM** produites en premier, **IgG** majoritaires lors d'une deuxième rencontre, IgA dans les sécrétions, IgE dans les allergies.
- Effets : **neutralisation** d'un virus ou d'une toxine, **opsonisation** (l'anticorps fixé facilite la phagocytose), activation du complément.
- **Sérodiagnostic** : chercher des anticorps dans le sérum. Des IgM signalent une infection **récente**.

### La mémoire, les vaccins et les immunothérapies
- Après une première rencontre, des **cellules mémoire** persistent : la **réponse secondaire** est plus rapide, plus forte et surtout faite d'IgG.
- **Vaccin** : on présente un antigène sans la maladie pour créer cette mémoire. **Vivant atténué** (rougeole), **inactivé** (grippe injectable), **sous-unitaire** ou anatoxine (tétanos), **ARN messager**. Un **adjuvant** renforce la réponse ; l'**immunogénicité** est la capacité à la déclencher.
- La vaccination protège la personne et la population (**protection collective**) ; une baisse de la couverture vaccinale entraîne une **résurgence** de maladies (rougeole).
- **Immunothérapies** : des **anticorps monoclonaux** thérapeutiques, par exemple des anticorps anti-PD-L1 qui empêchent une tumeur de « freiner » les LTc.

### À retenir pour le bac
- Innée : rapide, non spécifique (inflammation, phagocytose). Adaptative : spécifique, avec mémoire.
- Le LT4 est au centre de la coopération cellulaire.
- LTc : réponse cellulaire. Anticorps : réponse humorale.
- IgM = infection récente ; IgG = infection ancienne ou réponse secondaire.
- Savoir schématiser une interaction moléculaire (TCR, peptide, CMH).`,
      cartes: [
        { q: "Qu'est-ce qu'un antigène ?", r: "Une molécule reconnue comme non-soi par le système immunitaire, qui déclenche une réponse." },
        { q: "Quelles sont les barrières naturelles de l'organisme ?", r: "La peau, les épithéliums des muqueuses (mucus, cils), leur environnement physico-chimique et le microbiote." },
        { q: "Qu'est-ce qu'un micro-organisme opportuniste ?", r: "Un micro-organisme qui ne rend malade que si les défenses de l'hôte sont affaiblies." },
        { q: "Que reconnaissent les cellules sentinelles ?", r: "Des motifs moléculaires communs à de nombreux microbes, comme le LPS ou le peptidoglycane." },
        { q: "Quels sont les signes de la réaction inflammatoire ?", r: "Rougeur, chaleur, gonflement et douleur." },
        { q: "Qu'est-ce que la diapédèse ?", r: "Le passage des globules blancs à travers la paroi des vaisseaux sanguins vers le tissu infecté." },
        { q: "Quelles sont les étapes de la phagocytose ?", r: "Adhésion, endocytose du microbe dans une vésicule, fusion avec les lysosomes, dégradation." },
        { q: "Que reconnaît le TCR d'un lymphocyte T ?", r: "Un peptide antigénique présenté par une molécule du CMH à la surface d'une cellule." },
        { q: "Quel est le rôle du lymphocyte T4 ?", r: "Activé par une CPA, il se multiplie et sécrète des interleukines qui activent les LB et les LT8 : c'est la coopération cellulaire." },
        { q: "Comment un LTc détruit-il sa cible ?", r: "Il reconnaît la cellule infectée et libère par exocytose des molécules (perforine) qui provoquent sa lyse." },
        { q: "Qu'est-ce qu'un plasmocyte ?", r: "Un lymphocyte B activé qui sécrète des anticorps ; son réticulum endoplasmique est très développé." },
        { q: "Épitope ou paratope ?", r: "L'épitope est la partie de l'antigène reconnue ; le paratope est le site de l'anticorps qui s'y fixe." },
        { q: "Qu'est-ce que l'opsonisation ?", r: "La fixation d'anticorps sur un microbe, qui facilite sa phagocytose." },
        { q: "Que signifie la présence d'IgM spécifiques dans un sérum ?", r: "Une infection récente : les IgM sont les premières produites." },
        { q: "Pourquoi la réponse secondaire est-elle plus efficace ?", r: "Des cellules mémoire persistent : la réponse est plus rapide, plus forte et surtout faite d'IgG." },
        { q: "Qu'est-ce qu'un adjuvant de vaccin ?", r: "Une substance ajoutée au vaccin pour renforcer la réponse immunitaire." },
        { q: "Comment agit un anticorps thérapeutique anti-PD-L1 ?", r: "Il bloque la protéine PD-L1 de la tumeur, qui inactivait les LTc : ceux-ci peuvent de nouveau détruire les cellules cancéreuses." },
      ],
      quiz: [
        { q: "Quelle cellule sécrète les anticorps ?", choix: ["Le lymphocyte T4", "Le plasmocyte", "Le macrophage", "Le lymphocyte T cytotoxique"], bonne: 1, expl: "Le plasmocyte est un lymphocyte B activé et différencié ; les LT ne produisent pas d'anticorps.", niv: 1 },
        { q: "Le récepteur d'un lymphocyte T reconnaît :", choix: ["l'antigène entier, libre dans le plasma ou fixé sur un microbe", "le LPS des bactéries", "un peptide antigénique présenté par une molécule du CMH", "le fragment constant d'un anticorps"], bonne: 2, expl: "Le TCR reconnaît le couple peptide-CMH ; c'est le BCR qui reconnaît l'antigène entier.", niv: 2 },
        { q: "Rougeur et chaleur autour d'une plaie sont dues surtout à :", choix: ["la vasodilatation", "la sécrétion d'anticorps", "la lyse par les LTc", "la sélection clonale"], bonne: 0, expl: "Les médiateurs de l'inflammation dilatent les vaisseaux : plus de sang arrive, d'où la rougeur et la chaleur.", niv: 2 },
        { q: "Un patient a des IgG mais pas d'IgM contre un virus. On peut en conclure :", choix: ["qu'il est infecté depuis deux jours seulement, en phase aiguë", "qu'il n'a pas encore rencontré ce virus", "qu'il fait une allergie", "qu'il a été infecté ou vacciné il y a un certain temps"], bonne: 3, expl: "Les IgM apparaissent d'abord et disparaissent ; des IgG seules signent une rencontre ancienne.", niv: 3 },
        { q: "Le vaccin contre la rougeole contient :", choix: ["un virus vivant atténué", "un anticorps monoclonal", "une anatoxine", "des lymphocytes mémoire"], bonne: 0, expl: "C'est un vaccin vivant atténué : le virus se multiplie peu et ne rend pas malade.", niv: 1 },
        { q: "Quel est le rôle central du lymphocyte T4 ?", choix: ["Phagocyter les bactéries", "Produire les anticorps", "Activer les autres lymphocytes par ses interleukines", "Détruire lui-même par lyse les cellules infectées du corps"], bonne: 2, expl: "Le LT4 auxiliaire coordonne la réponse : sans lui, les LB et les LT8 sont mal activés.", niv: 2 },
        { q: "Pourquoi le VIH, qui infecte les LT4, affaiblit-il toute la réponse adaptative ?", choix: ["Les anticorps circulants sont détruits par le virus", "Les LB et les LT8 ne sont plus assez activés", "Il bloque la phagocytose", "Il supprime les molécules du CMH"], bonne: 1, expl: "Sans LT4, la coopération cellulaire ne se fait plus : les réponses humorale et cellulaire s'effondrent.", niv: 3 },
        { q: "L'opsonisation correspond à :", choix: ["la neutralisation d'une toxine dans le sang", "le passage des leucocytes à travers la paroi des vaisseaux", "la multiplication d'un clone de lymphocytes", "la facilitation de la phagocytose par des anticorps fixés"], bonne: 3, expl: "L'anticorps fixé sur le microbe est reconnu par le phagocyte, qui l'ingère plus facilement.", niv: 1 },
        { q: "Les cellules sentinelles reconnaissent les bactéries grâce à :", choix: ["des motifs moléculaires communs, comme le LPS", "un TCR propre à l'espèce de bactérie rencontrée", "des anticorps qu'elles fabriquent", "le CMH des bactéries"], bonne: 0, expl: "L'immunité innée reconnaît des motifs partagés par de nombreux microbes ; elle n'est pas spécifique.", niv: 2 },
        { q: "Une baisse de la couverture vaccinale contre la rougeole entraîne :", choix: ["une hausse des IgE", "une résurgence des cas, car la protection collective diminue", "la disparition du virus", "une meilleure mémoire immunitaire chez les personnes non vaccinées"], bonne: 1, expl: "Quand trop de personnes ne sont pas vaccinées, le virus circule de nouveau : on parle de résurgence.", niv: 2 },
        { q: "Une tumeur exprime PD-L1, qui inactive les LTc. Un anticorps anti-PD-L1 :", choix: ["détruit directement l'ADN tumoral", "remplace les LT4", "permet aux LTc de redevenir actifs contre la tumeur", "empêche la présentation de l'antigène tumoral par les CPA"], bonne: 2, expl: "En bloquant PD-L1, l'anticorps lève le frein : les LTc peuvent lyser les cellules tumorales.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- S3
    {
      chapitre: 'stl-bgb-3',
      fiche: `## Propriétés de l'ADN et réplication

### La structure de l'ADN
- L'**ADN** est un **polymère de nucléotides**. Chaque nucléotide contient un sucre (le **désoxyribose**), un groupement **phosphate** et une **base azotée** : adénine (A), thymine (T), guanine (G) ou cytosine (C).
- Deux brins s'enroulent en **double hélice**. Ils sont **antiparallèles** : l'un va de 5' vers 3', l'autre de 3' vers 5'.
- Les bases sont **complémentaires** : A avec T (2 liaisons hydrogène), G avec C (3 liaisons hydrogène). Si un brin porte 5'-ATGC-3', l'autre porte 3'-TACG-5'.
- L'**ARN** diffère : sucre ribose, base **uracile** à la place de la thymine, en général un seul brin.

### Des propriétés utiles au laboratoire
- **Électronégativité** : les phosphates portent des charges négatives. En électrophorèse, l'ADN migre vers l'**anode** (pôle +).
- **Solubilité** : l'ADN est soluble dans l'eau mais **précipite dans l'éthanol froid** : on l'utilise pour l'extraire.
- **Absorption** dans l'ultraviolet à **260 nm** (les protéines absorbent à 280 nm). Le rapport A260/A280 proche de **1,8** indique un ADN pur.
- **Dénaturation** : la chaleur sépare les deux brins (vers 90 à 95 °C). Plus l'ADN est riche en G et C, plus il faut chauffer, car G-C est tenu par 3 liaisons hydrogène. En refroidissant, les brins se réassocient (**hybridation**).

### L'ADN dans la cellule
- Chez les eucaryotes, l'ADN est enroulé autour de protéines, les histones : c'est la **chromatine**.
- **Euchromatine** : peu condensée, ses gènes peuvent s'exprimer. **Hétérochromatine** : très condensée, gènes réprimés.
- Pendant la division, la chromatine se condense en **chromosomes** visibles. Après la réplication, chaque chromosome a deux **chromatides** identiques.

### La réplication
- La réplication copie l'ADN avant la division. Elle est **semi-conservative** : chaque nouvelle molécule garde un brin ancien et un brin nouveau (expérience de Meselson et Stahl, 1958).
- Elle démarre à des **origines de réplication**. Une hélicase ouvre la double hélice ; l'**ADN polymérase** ajoute des nucléotides complémentaires, toujours dans le sens **5' vers 3'**, à partir d'une courte **amorce**.
- Un brin est copié de façon continue, l'autre par fragments, ensuite reliés par une **ligase**.

### Cycle cellulaire, cancer et cellules souches
- Le **cycle cellulaire** : phase **G1** (croissance), phase **S** (réplication de l'ADN), phase **G2**, puis **mitose** (M). G1, S et G2 forment l'interphase.
- Des **points de contrôle** arrêtent le cycle si l'ADN est abîmé. Des protéines comme **p53** ou **p21**, codées par des **gènes suppresseurs de tumeur**, freinent le cycle.
- Un **cancer** naît d'une accumulation de mutations : des **oncogènes** trop actifs accélèrent le cycle, des gènes suppresseurs inactivés ne le freinent plus. Les cellules se multiplient sans contrôle et forment une tumeur. Certains virus, comme les papillomavirus humains, produisent des protéines qui bloquent p53.
- Une **cellule souche** peut se multiplier et se **différencier**. **Pluripotente** : elle peut donner tous les types cellulaires du corps (cellules embryonnaires, cellules iPS reprogrammées). **Multipotente** : quelques types seulement (cellules souches du sang dans la moelle osseuse).
- Applications : greffe de moelle osseuse, reconstitution de tissus, **transgenèse** (introduire un gène dans un organisme).

### À retenir pour le bac
- Complémentarité A-T, G-C ; brins antiparallèles ; polymérisation 5' vers 3'.
- L'ADN migre vers l'anode et absorbe à 260 nm.
- Réplication semi-conservative, en phase S.
- Cancer : oncogènes activés, gènes suppresseurs inactivés.
- Ne pas confondre pluripotente (tous les types) et multipotente (quelques types).`,
      cartes: [
        { q: "Quels sont les trois constituants d'un nucléotide d'ADN ?", r: "Un désoxyribose, un groupement phosphate et une base azotée (A, T, G ou C)." },
        { q: "Que signifie « brins antiparallèles » ?", r: "Les deux brins sont orientés en sens inverse : l'un de 5' vers 3', l'autre de 3' vers 5'." },
        { q: "Quelle est la règle de complémentarité des bases ?", r: "A s'associe à T par 2 liaisons hydrogène, G à C par 3 liaisons hydrogène." },
        { q: "Brin 5'-AATGC-3' : quel est le brin complémentaire ?", r: "3'-TTACG-5'." },
        { q: "Quelles différences entre ARN et ADN ?", r: "L'ARN a du ribose au lieu du désoxyribose, de l'uracile au lieu de la thymine, et il est en général simple brin." },
        { q: "Pourquoi l'ADN migre-t-il vers l'anode en électrophorèse ?", r: "Ses groupements phosphate sont chargés négativement : il est attiré par le pôle +." },
        { q: "Comment fait-on précipiter l'ADN ?", r: "En ajoutant de l'éthanol froid : l'ADN, soluble dans l'eau, y devient insoluble." },
        { q: "À quelle longueur d'onde l'ADN absorbe-t-il ?", r: "À 260 nm, dans l'ultraviolet. Les protéines absorbent à 280 nm." },
        { q: "Que montre un rapport A260/A280 de 1,8 ?", r: "Que l'ADN est pur, sans contamination importante par des protéines." },
        { q: "Pourquoi un ADN riche en G-C se dénature-t-il à plus haute température ?", r: "La paire G-C est tenue par 3 liaisons hydrogène, contre 2 pour A-T." },
        { q: "Euchromatine ou hétérochromatine ?", r: "L'euchromatine est peu condensée et ses gènes s'expriment ; l'hétérochromatine est très condensée et ses gènes sont réprimés." },
        { q: "Que signifie « réplication semi-conservative » ?", r: "Chaque nouvelle molécule d'ADN contient un brin ancien et un brin nouvellement synthétisé." },
        { q: "Dans quel sens l'ADN polymérase synthétise-t-elle un brin ?", r: "Toujours de 5' vers 3', en partant d'une amorce." },
        { q: "Quelles sont les phases du cycle cellulaire ?", r: "G1 (croissance), S (réplication de l'ADN), G2, puis M (mitose)." },
        { q: "Qu'est-ce qu'un gène suppresseur de tumeur ?", r: "Un gène dont la protéine freine le cycle cellulaire, comme p53 ; son inactivation favorise le cancer." },
        { q: "Cellule pluripotente ou multipotente ?", r: "Pluripotente : peut donner tous les types cellulaires du corps. Multipotente : seulement quelques types (cellules souches du sang)." },
      ],
      quiz: [
        { q: "Un brin d'ADN a la séquence 5'-GATTC-3'. Le brin complémentaire est :", choix: ["5'-CTAAG-3'", "3'-GATTC-5'", "3'-CUAAG-5'", "3'-CTAAG-5'"], bonne: 3, expl: "On associe A-T et G-C, et le brin complémentaire est antiparallèle : 3'-CTAAG-5'.", niv: 2 },
        { q: "L'ADN absorbe la lumière ultraviolette surtout à :", choix: ["260 nm", "280 nm", "340 nm", "600 nm"], bonne: 0, expl: "L'ADN absorbe à 260 nm ; 280 nm correspond aux protéines, 340 nm au NADH.", niv: 1 },
        { q: "Un ADN de 40 % de G+C et un autre de 60 % de G+C. Lequel se dénature à la plus haute température ?", choix: ["Celui à 40 %, car il a plus de paires A-T", "Celui à 50 %, la moyenne des deux", "Celui à 60 %, car G-C a 3 liaisons hydrogène", "Ni l'un ni l'autre ne se dénature à la chaleur"], bonne: 2, expl: "Plus il y a de paires G-C, plus il faut d'énergie pour séparer les brins.", niv: 2 },
        { q: "Pourquoi ajoute-t-on de l'éthanol froid lors d'une extraction d'ADN ?", choix: ["Pour dénaturer les protéines", "Pour faire précipiter l'ADN", "Pour couper l'ADN en fragments", "Pour colorer l'ADN"], bonne: 1, expl: "L'ADN est insoluble dans l'éthanol : il forme une pelote visible qu'on peut récupérer.", niv: 1 },
        { q: "Pendant quelle phase du cycle l'ADN est-il répliqué ?", choix: ["La phase S", "La phase G1", "La phase G2", "La mitose"], bonne: 0, expl: "S signifie synthèse : c'est la réplication de l'ADN, entre G1 et G2.", niv: 1 },
        { q: "Des bactéries cultivées sur azote lourd puis une génération sur azote léger donnent un ADN de densité intermédiaire. Cela montre que la réplication est :", choix: ["conservative", "dispersive à chaque génération", "impossible sans ARN", "semi-conservative"], bonne: 3, expl: "Chaque molécule garde un brin lourd ancien et un brin léger nouveau : c'est l'expérience de Meselson et Stahl.", niv: 3 },
        { q: "Quel rapport A260/A280 indique un ADN pur ?", choix: ["0,6", "1,8", "2,8", "4,5"], bonne: 1, expl: "Un rapport proche de 1,8 indique un ADN pur ; plus bas, des protéines contaminent l'extrait.", niv: 2 },
        { q: "Une protéine virale bloque p53 dans une cellule du col de l'utérus. Quelle est la conséquence probable ?", choix: ["La cellule ne réplique plus son ADN", "La cellule devient pluripotente", "Le cycle n'est plus arrêté malgré un ADN abîmé", "Une mort immédiate de la cellule, détruite par apoptose"], bonne: 2, expl: "p53 est un frein du cycle : sans elle, les mutations s'accumulent et une tumeur peut se former.", niv: 3 },
        { q: "L'ADN polymérase allonge un nouveau brin :", choix: ["toujours de 5' vers 3'", "de 3' vers 5' uniquement", "dans les deux sens à la fois", "sans avoir besoin d'amorce"], bonne: 0, expl: "Elle ajoute les nucléotides à l'extrémité 3' : le brin grandit de 5' vers 3', à partir d'une amorce.", niv: 2 },
        { q: "Les cellules souches de la moelle osseuse donnent les cellules du sang, mais pas de neurones. Elles sont :", choix: ["totipotentes", "pluripotentes", "différenciées", "multipotentes"], bonne: 3, expl: "Elles ne donnent que quelques types de cellules : elles sont multipotentes.", niv: 2 },
      ],
    },
    // ---------------------------------------------------------------- S4
    {
      chapitre: 'stl-bgb-4',
      fiche: `## Micro-organismes et domaines d'application des biotechnologies

### Les bactéries, des procaryotes
- Une **bactérie** n'a **pas de noyau** : son **chromosome**, circulaire, est libre dans le cytoplasme. Elle peut avoir des **plasmides** (petits ADN circulaires) et des ribosomes, mais pas d'organites entourés de membrane.
- Taille : environ 1 à 5 µm. Formes : **coques** (sphériques) ou **bacilles** (bâtonnets).
- La **paroi** contient du **peptidoglycane**. **Gram positif** : paroi épaisse de peptidoglycane. **Gram négatif** : paroi fine, entourée d'une **membrane externe** qui porte le **lipopolyoside** (LPS), toxique pour l'hôte.
- Le **lysozyme** (enzyme des larmes) dégrade le peptidoglycane : il fragilise surtout les bactéries à Gram positif.
- Certaines bactéries ont des flagelles (mobilité), des pili, une capsule, ou forment des **spores** très résistantes (Bacillus, Clostridium).

### Les micro-organismes eucaryotes
- Ils ont un **noyau** et des **organites**.
- Les **levures** : unicellulaires, environ 5 à 10 µm, elles se multiplient par **bourgeonnement** (Saccharomyces cerevisiae, levure du pain).
- Les **moisissures** : filaments (hyphes) formant un **mycélium**, qui envahit le milieu ; elles se propagent par des **spores** portées par un **appareil sporifère** (Penicillium, Aspergillus).
- Les **microalgues** : unicellulaires avec des **chloroplastes**, elles font la photosynthèse (Chlorella).

### Les relations avec l'hôte humain
- Le **microbiote** : les micro-organismes qui vivent normalement sur la peau ou dans l'intestin ; il protège contre les pathogènes. Un déséquilibre s'appelle une **dysbiose**.
- Un **pathogène** provoque une maladie ; un **opportuniste** seulement si les défenses sont faibles.

### Les micro-organismes au service des bio-industries
- **Bioproduction** : on cultive un micro-organisme pour obtenir un **métabolite d'intérêt** ou de la **biomasse**. Exemples : l'insuline humaine produite par une bactérie génétiquement modifiée, la pénicilline par une moisissure, des enzymes pour les lessives.
- Agroalimentaire : yaourt (bactéries lactiques), pain, bière et vin (levures).
- **Dépollution** (bioremédiation) : des bactéries dégradent des polluants (hydrocarbures, métaux).
- Les **conditions de culture** (température, pH, oxygénation, nutriments) sont réglées dans un **bioréacteur** pour obtenir le meilleur rendement.
- À l'inverse, l'**altération** : des micro-organismes abîment les aliments.

### Les virus, parasites obligatoires
- Un **virus** n'est pas une cellule : un acide nucléique (**ADN ou ARN**, jamais les deux) dans une **capside** de protéines, parfois entourée d'une **enveloppe**. Il n'a pas de métabolisme : il ne se multiplie qu'à l'intérieur d'une cellule.
- Cycle : fixation sur la cellule, pénétration, libération du génome, réplication et synthèse des protéines virales, assemblage, libération.
- **Infection lytique** : la cellule est détruite en libérant les virus. **Infection latente** : le génome viral reste caché dans la cellule (herpès), puis peut se réactiver.
- Un **bactériophage** infecte des bactéries et peut transporter un gène d'une bactérie à une autre : la **transduction**.
- En **thérapie génique**, un virus rendu inoffensif sert de **vecteur** pour apporter un gène dans des cellules.

### Le VIH
- Le **VIH** est un **rétrovirus** à ARN, enveloppé. Sa protéine d'enveloppe se fixe sur la molécule **CD4** des **lymphocytes T4**. Sa **transcriptase inverse** copie l'ARN viral en ADN, qui s'intègre dans le génome de la cellule.
- Évolution : primo-infection, longue phase sans symptôme, puis **sida** quand les LT4 sont très peu nombreux et que des maladies opportunistes apparaissent.
- Contamination : rapports sexuels, sang, de la mère à l'enfant. **Prévention** : préservatif, dépistage, traitement des personnes séropositives, PrEP. Après une exposition au sang au laboratoire, il faut consulter en urgence pour un traitement post-exposition.

### À retenir pour le bac
- Procaryote : pas de noyau ; Gram négatif = membrane externe et LPS.
- Levure : bourgeonnement ; moisissure : mycélium et spores.
- Virus : ADN ou ARN, capside, multiplication seulement dans une cellule.
- VIH : rétrovirus qui cible les LT4 via CD4, transcriptase inverse.`,
      cartes: [
        { q: "Quelle différence principale entre procaryote et eucaryote ?", r: "Le procaryote n'a pas de noyau ni d'organites ; son chromosome est libre dans le cytoplasme." },
        { q: "Qu'est-ce qu'un plasmide ?", r: "Une petite molécule d'ADN circulaire, en plus du chromosome, qui porte souvent des gènes utiles comme une résistance à un antibiotique." },
        { q: "Coque ou bacille ?", r: "Une coque est une bactérie sphérique ; un bacille est une bactérie en forme de bâtonnet." },
        { q: "Quelle est la différence de paroi entre Gram positif et Gram négatif ?", r: "Gram positif : peptidoglycane épais. Gram négatif : peptidoglycane fin et membrane externe avec du LPS." },
        { q: "Que fait le lysozyme ?", r: "Il dégrade le peptidoglycane de la paroi bactérienne, surtout chez les Gram positif." },
        { q: "Comment se multiplie une levure ?", r: "Par bourgeonnement : une petite cellule fille pousse sur la cellule mère puis se détache." },
        { q: "Qu'est-ce qu'un mycélium ?", r: "L'ensemble des filaments (hyphes) d'une moisissure, qui envahit le milieu." },
        { q: "Qu'est-ce qu'une dysbiose ?", r: "Un déséquilibre du microbiote, qui peut favoriser une maladie." },
        { q: "Donne un exemple de bioproduction.", r: "L'insuline humaine produite par des bactéries génétiquement modifiées, ou la pénicilline produite par une moisissure." },
        { q: "Qu'est-ce que la bioremédiation ?", r: "L'utilisation de micro-organismes pour dégrader ou éliminer des polluants de l'environnement." },
        { q: "De quoi est fait un virus ?", r: "D'un acide nucléique (ADN ou ARN) dans une capside de protéines, parfois entourée d'une enveloppe." },
        { q: "Pourquoi dit-on qu'un virus est un parasite obligatoire ?", r: "Il n'a pas de métabolisme : il ne peut se multiplier qu'à l'intérieur d'une cellule." },
        { q: "Infection lytique ou latente ?", r: "Lytique : la cellule est détruite en libérant les virus. Latente : le génome viral reste caché dans la cellule et peut se réactiver." },
        { q: "Qu'est-ce que la transduction ?", r: "Le transfert d'un gène d'une bactérie à une autre par un bactériophage." },
        { q: "Quelle cellule le VIH infecte-t-il et comment ?", r: "Le lymphocyte T4 : sa protéine d'enveloppe se fixe sur la molécule CD4." },
        { q: "Quel est le rôle de la transcriptase inverse du VIH ?", r: "Copier l'ARN viral en ADN, qui s'intègre ensuite dans le génome de la cellule." },
      ],
      quiz: [
        { q: "Le lipopolyoside (LPS) se trouve dans :", choix: ["la paroi des levures", "la capside des virus", "la membrane externe des bactéries à Gram négatif", "le peptidoglycane épais de la paroi des Gram positif"], bonne: 2, expl: "Seules les bactéries à Gram négatif ont une membrane externe, qui porte le LPS.", niv: 1 },
        { q: "Une cellule de 8 µm se multiplie par bourgeonnement et possède un noyau. C'est :", choix: ["un bacille", "une levure", "un virus", "une moisissure filamenteuse"], bonne: 1, expl: "Noyau, unicellulaire, bourgeonnement : c'est une levure.", niv: 2 },
        { q: "Pourquoi un virus ne peut-il pas être cultivé sur une gélose nutritive ?", choix: ["Il est trop petit pour être retenu à la surface de la gélose", "Il a besoin de lumière", "Il meurt au contact de l'air", "Il ne se multiplie que dans une cellule vivante"], bonne: 3, expl: "Sans métabolisme propre, le virus utilise la machinerie d'une cellule hôte pour se multiplier.", niv: 2 },
        { q: "Le génome d'un virus est formé :", choix: ["d'ADN ou d'ARN, jamais des deux", "toujours d'ADN double brin", "d'ADN et d'ARN à la fois", "de protéines et de lipides"], bonne: 0, expl: "Un virus possède un seul type d'acide nucléique ; les protéines forment la capside.", niv: 1 },
        { q: "Une bactérie est traitée au lysozyme et sa paroi est presque entièrement détruite. Elle est probablement :", choix: ["à Gram négatif", "à Gram positif", "une levure", "un virus enveloppé"], bonne: 1, expl: "Chez les Gram positif, le peptidoglycane n'est pas protégé par une membrane externe : le lysozyme l'atteint.", niv: 3 },
        { q: "Le VIH pénètre dans les lymphocytes T4 parce que :", choix: ["ils sont dépourvus de membrane", "ils produisent eux-mêmes des anticorps contre ce virus", "il s'y fixe par sa transcriptase inverse", "sa protéine d'enveloppe reconnaît la molécule CD4"], bonne: 3, expl: "L'interaction entre l'enveloppe virale et CD4 permet l'entrée du virus.", niv: 2 },
        { q: "Produire de l'insuline humaine avec une bactérie génétiquement modifiée est un exemple de :", choix: ["bioproduction", "bioremédiation", "altération", "transduction"], bonne: 0, expl: "On cultive un micro-organisme pour obtenir une molécule d'intérêt : c'est de la bioproduction.", niv: 1 },
        { q: "Le virus de l'herpès reste des années dans les neurones puis provoque de nouveaux boutons. C'est une infection :", choix: ["lytique immédiate", "par transduction", "latente", "opportuniste"], bonne: 2, expl: "Le génome viral reste caché sans détruire la cellule, puis se réactive.", niv: 2 },
        { q: "Un bactériophage transporte un gène de résistance d'une bactérie à une autre. C'est :", choix: ["la conjugaison", "la transformation", "le bourgeonnement", "la transduction"], bonne: 3, expl: "Le transfert d'un gène par un virus de bactérie s'appelle la transduction.", niv: 2 },
        { q: "Pourquoi un virus inoffensif peut-il servir en thérapie génique ?", choix: ["Il sait faire entrer son génome dans les cellules", "Il détruit les cellules malades", "Il produit des anticorps", "Il prend la place du noyau abîmé de la cellule malade"], bonne: 0, expl: "On remplace ses gènes dangereux par le gène utile : le virus sert de vecteur.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- T1 à T3
    {
      chapitre: 'stl-bgb-5',
      fiche: `## Observer, cultiver et identifier les micro-organismes

### Observer au microscope
- Le **microscope optique** utilise des **photons** (la lumière). **Grossissement** = grossissement de l'objectif × celui de l'oculaire : objectif × 100 à immersion et oculaire × 10 donnent **× 1 000**, nécessaire pour voir des bactéries.
- Le **microscope à fluorescence** : un **fluorochrome** fixé sur la cible est **excité** par une lumière, puis émet une lumière d'une autre couleur.
- Le **microscope électronique** utilise des **électrons** : il voit des détails beaucoup plus fins (virus, ultrastructure), mais sur des cellules mortes.
- Pour donner une taille, on utilise l'**échelle** de l'image : taille réelle = taille mesurée sur l'image ÷ grandissement.
- **État frais** : observation sans coloration, pour voir la **mobilité** et la forme.
- **Coloration de Gram** : violet de gentiane, lugol, décoloration à l'alcool, puis fuchsine. Les **Gram positif** restent **violets** ; les **Gram négatif**, décolorés par l'alcool, deviennent **roses**.

### Cultiver
- Un **milieu de culture** apporte l'eau, une source de carbone, d'azote, d'énergie et des sels minéraux. Il est liquide (bouillon) ou solide (gélose).
- Un **milieu sélectif** contient des inhibiteurs qui ne laissent pousser que certains micro-organismes : par exemple un milieu très salé pour les staphylocoques, ou un milieu avec un antibiotique antibactérien pour les levures et moisissures.
- Un **isolement** en stries donne des **colonies isolées**. Une colonie vient d'une seule cellule : c'est une **souche pure**.

### La croissance en milieu non renouvelé
- On suit la croissance par l'**absorbance** (ou atténuance) du bouillon vers 600 nm, ou par la concentration en cellules.
- Les **phases** : **latence** (adaptation, pas de multiplication), **accélération**, **croissance exponentielle** (vitesse maximale), ralentissement, **phase stationnaire** (les nutriments manquent, les déchets s'accumulent), **déclin**.
- En phase exponentielle, la population double à chaque **temps de génération** G. Après n générations : N = N0 × 2 puissance n, avec n = durée ÷ G.
- Exemple : 1 000 bactéries par mL, G = 20 min. En 2 h, n = 6 ; N = 1 000 × 64 = **64 000 bactéries par mL**.
- **Taux de croissance** μ = ln 2 ÷ G. Avec G = 30 min = 0,5 h : μ = 0,693 ÷ 0,5 = **1,39 par heure**.
- Sur une courbe en ln N (ou en échelle logarithmique), la phase exponentielle est une **droite**.
- Dans un **bioréacteur**, on règle la température, le pH, l'aération et l'agitation.

### Limiter la croissance : les antimicrobiens
- Un agent **microbicide** (bactéricide) tue ; un agent **microbiostatique** (bactériostatique) empêche seulement la multiplication.
- **Antibiotique** : agit sur les bactéries dans l'organisme (paroi, ribosomes, ADN). **Antiseptique** : sur un tissu vivant (la peau). **Désinfectant** : sur une surface ou un objet.
- La **CMI** (concentration minimale inhibitrice) est la plus petite concentration qui empêche la croissance visible.
- **Antibiogramme** par diffusion : des disques d'antibiotique sur une gélose ensemencée. On mesure le **diamètre d'inhibition** et on le compare aux **valeurs critiques** : la souche est **sensible** ou **résistante**.
- **Résistance naturelle** : toute l'espèce résiste (la membrane externe des Gram négatif bloque certaines molécules). **Résistance acquise** : par une mutation ou un gène reçu, souvent sur un plasmide.

### Identifier
- **Caractères morphologiques** : forme, Gram, mobilité. **Culturaux** : aspect des colonies, milieu, température.
- **Type respiratoire** (gélose profonde) : **aérobie strict** (pousse en surface), **anaérobie strict** (au fond), **aéro-anaérobie facultatif** (partout), microaérophile (juste sous la surface).
- **Catalase** : l'eau oxygénée fait des bulles si la bactérie possède l'enzyme (staphylocoques positifs, streptocoques négatifs).
- **Oxydase** : recherche d'une enzyme de la chaîne respiratoire (les entérobactéries sont oxydase négative).
- **Exo-enzymes** : enzymes libérées qui dégradent des **macromolécules** du milieu (amidon, protéines). **Auxanogramme** : quelles sources de carbone la souche peut utiliser, sur un **milieu synthétique**.
- Une **galerie** de tests biochimiques miniaturisés donne un profil, comparé à une base de données pour trouver l'espèce (**taxon**).

### À retenir pour le bac
- Gram positif violet, Gram négatif rose.
- N = N0 × 2 puissance n ; μ = ln 2 ÷ G.
- Bactéricide tue, bactériostatique arrête la croissance.
- Antiseptique sur la peau, désinfectant sur les surfaces.
- L'identification commence toujours par une souche pure.`,
      cartes: [
        { q: "Comment calcule-t-on le grossissement d'un microscope optique ?", r: "Grossissement de l'objectif × grossissement de l'oculaire : × 100 et × 10 donnent × 1 000." },
        { q: "Quel est le principe de la microscopie à fluorescence ?", r: "Un fluorochrome fixé sur la cible est excité par une lumière et émet une lumière d'une autre couleur." },
        { q: "À quoi sert un état frais ?", r: "À observer les cellules vivantes, sans coloration : leur forme et leur mobilité." },
        { q: "Quelle couleur prennent les bactéries après une coloration de Gram ?", r: "Les Gram positif restent violets ; les Gram négatif, décolorés par l'alcool, sont roses." },
        { q: "Qu'est-ce qu'un milieu sélectif ?", r: "Un milieu qui contient des inhibiteurs : il ne laisse pousser que certains micro-organismes." },
        { q: "Pourquoi une colonie isolée donne-t-elle une souche pure ?", r: "Elle provient de la multiplication d'une seule cellule." },
        { q: "Quelles sont les phases de croissance en milieu non renouvelé ?", r: "Latence, accélération, croissance exponentielle, ralentissement, phase stationnaire, déclin." },
        { q: "Qu'est-ce que le temps de génération ?", r: "La durée nécessaire pour que la population double, en phase exponentielle." },
        { q: "1 000 bactéries par mL, G = 20 min : combien après 2 h ?", r: "n = 120 ÷ 20 = 6 générations ; N = 1 000 × 2 puissance 6 = 64 000 bactéries par mL." },
        { q: "Comment calcule-t-on le taux de croissance μ ?", r: "μ = ln 2 ÷ G. Avec G = 0,5 h : μ = 1,39 par heure." },
        { q: "Bactéricide ou bactériostatique ?", r: "Un bactéricide tue les bactéries ; un bactériostatique empêche seulement leur multiplication." },
        { q: "Antiseptique ou désinfectant ?", r: "L'antiseptique s'utilise sur un tissu vivant (la peau) ; le désinfectant sur une surface ou un objet." },
        { q: "Qu'est-ce que la CMI ?", r: "La concentration minimale inhibitrice : la plus petite concentration d'antibiotique qui empêche la croissance visible." },
        { q: "Résistance naturelle ou acquise ?", r: "Naturelle : toute l'espèce résiste. Acquise : seules certaines souches, après une mutation ou un gène reçu." },
        { q: "Où pousse une bactérie aérobie stricte en gélose profonde ?", r: "Uniquement en surface, là où il y a du dioxygène." },
        { q: "Comment lit-on un test catalase ?", r: "On met la bactérie dans de l'eau oxygénée : des bulles de dioxygène signifient catalase positive." },
      ],
      quiz: [
        { q: "Une bactérie apparaît rose après une coloration de Gram. Elle :", choix: ["possède une membrane externe et une paroi fine", "a une paroi épaisse de peptidoglycane, sans membrane externe", "est sans doute pathogène pour l'humain", "n'a pas de paroi du tout"], bonne: 0, expl: "Les Gram négatif sont décolorés par l'alcool à cause de leur paroi fine ; la fuchsine les colore en rose.", niv: 2 },
        { q: "Objectif × 40 et oculaire × 10. Le grossissement est de :", choix: ["× 50", "× 4", "× 4 000", "× 400"], bonne: 3, expl: "On multiplie les deux grossissements : 40 × 10 = 400.", niv: 1 },
        { q: "Population de 500 bactéries par mL, temps de génération 30 min. Combien après 3 h de phase exponentielle ?", choix: ["3 000 par mL", "32 000 par mL", "9 000 par mL", "16 000 par mL"], bonne: 1, expl: "n = 3 h ÷ 0,5 h = 6 ; N = 500 × 64 = 32 000 bactéries par mL.", niv: 2 },
        { q: "Pendant la phase de latence :", choix: ["la vitesse de croissance est maximale", "les cellules meurent en grand nombre", "les cellules s'adaptent au milieu sans se multiplier", "les nutriments du milieu commencent à manquer sérieusement"], bonne: 2, expl: "Les cellules synthétisent les enzymes nécessaires au nouveau milieu avant de se diviser.", niv: 1 },
        { q: "On veut appliquer un produit sur la peau avant une piqûre. On choisit :", choix: ["un désinfectant pour surfaces", "un antibiotique par voie orale", "un milieu sélectif", "un antiseptique"], bonne: 3, expl: "L'antiseptique est fait pour les tissus vivants ; le désinfectant est réservé aux surfaces inertes.", niv: 2 },
        { q: "Après retrait d'un antibiotique, les bactéries se remettent à pousser. Cet antibiotique était :", choix: ["bactériostatique", "bactéricide", "antiseptique", "inactif dès le départ"], bonne: 0, expl: "Il avait seulement bloqué la multiplication sans tuer les bactéries.", niv: 3 },
        { q: "Une bactérie pousse sur toute la hauteur d'une gélose profonde. Son type respiratoire est :", choix: ["aérobie strict", "anaérobie strict", "aéro-anaérobie facultatif", "microaérophile"], bonne: 2, expl: "Elle pousse avec ou sans dioxygène : elle est aéro-anaérobie facultative.", niv: 2 },
        { q: "Le temps de génération vaut 0,5 h. Le taux de croissance μ vaut environ :", choix: ["0,35 par heure", "1,39 par heure", "0,46 par heure", "0,69 par heure"], bonne: 1, expl: "μ = ln 2 ÷ G = 0,693 ÷ 0,5 = 1,39 par heure.", niv: 2 },
        { q: "Pourquoi faut-il une souche pure avant de lancer une galerie d'identification ?", choix: ["Un mélange donnerait des résultats de plusieurs espèces à la fois", "Pour que la galerie soit stérile", "Parce qu'une souche pure pousse plus vite sur les milieux de la galerie", "Pour éviter de faire un Gram"], bonne: 0, expl: "Les tests mesurent des caractères d'une seule espèce : un mélange fausserait le profil.", niv: 3 },
        { q: "Un antibiogramme donne un diamètre d'inhibition inférieur à la valeur critique basse. La souche est :", choix: ["sensible", "en phase de latence", "naturellement mobile", "résistante"], bonne: 3, expl: "Un petit diamètre signifie que l'antibiotique n'empêche presque pas la croissance : la souche est résistante.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- T4 et T5
    {
      chapitre: 'stl-bgb-6',
      fiche: `## Dénombrer les micro-organismes et préparer des solutions

### Le dénombrement direct au microscope
- On compte les cellules dans une **cellule de comptage** (cellule de Malassez) : une lame creusée d'un volume connu, quadrillée.
- Dans la cellule de Malassez, le quadrillage compte **100 rectangles** pour un volume total de **1 mm³** : chaque rectangle correspond à **0,01 mm³**.
- Concentration = nombre de cellules comptées ÷ volume compté, puis × **facteur de dilution**. Rappel : 1 mm³ = 1 µL = 0,001 mL.
- Exemple : 56 levures dans 10 rectangles (0,1 mm³), suspension diluée au 1/100. 56 ÷ 0,1 = 560 levures par mm³, soit 5,6 × 10 puissance 5 par mL ; × 100 = **5,6 × 10 puissance 7 levures par mL**.
- Un **colorant vital** (bleu de méthylène) distingue les cellules vivantes, qui restent incolores, des mortes, colorées en bleu. **Pourcentage de viabilité** = vivantes ÷ total × 100. Exemple : 10 bleues sur 200 : **95 %** de cellules vivantes.
- Ce comptage ne distingue pas toujours les cellules mortes sans colorant, et il manque de précision pour les faibles concentrations.

### Le dénombrement après culture
- On ensemence un volume connu d'une dilution sur gélose ; chaque cellule vivante donne une colonie. On compte des **UFC** (unités formant colonies), car une colonie peut venir de plusieurs cellules collées.
- On retient les boîtes qui ont un nombre de colonies **comptable** (en général entre 15 et 300).
- Concentration en UFC par mL = nombre de colonies ÷ (volume ensemencé en mL × dilution).
- Exemple : 1 mL de la dilution 10 puissance − 3 donne 150 colonies : 150 ÷ (1 × 10 puissance − 3) = **1,5 × 10 puissance 5 UFC par mL**.
- Exemple : 0,1 mL de la dilution 10 puissance − 2 donne 42 colonies : 42 ÷ (0,1 × 10 puissance − 2) = **4,2 × 10 puissance 4 UFC par mL**.
- Pour une eau, peu contaminée, on **filtre** un grand volume (100 mL) sur une **membrane filtrante** qui retient les bactéries, puis on pose la membrane sur un **milieu sélectif**.
- On compare le résultat à un **critère microbiologique** (une limite réglementaire) : par exemple, une eau potable ne doit contenir aucune bactérie Escherichia coli dans 100 mL.

### Les micro-volumes
- La biologie moléculaire utilise des **micro-volumes**, mesurés en microlitres (1 mL = 1 000 µL), avec des **micropipettes** réglables : une P20 (2 à 20 µL), une P200 (20 à 200 µL), une P1000 (100 à 1 000 µL).
- On choisit la micropipette dont la gamme contient le volume, la plus petite possible, pour une meilleure **exactitude**.
- **Dilution** : la quantité de soluté se conserve. C mère × V mère = C fille × V fille. Facteur de dilution F = C mère ÷ C fille = V final ÷ V prélevé.
- Exemple : obtenir 200 µL à 0,5 mg/mL à partir d'une solution à 10 mg/mL. V mère = 0,5 × 200 ÷ 10 = **10 µL**, complétés avec 190 µL de solvant. F = 20.
- **Concentration en pourcentage (m/V)** : en grammes pour 100 mL. Une solution à 2 % (m/V) contient 2 g dans 100 mL, soit 20 g/L.
- Concentration molaire c = n ÷ V. Masse à peser : m = c × V × M. Exemple : 100 mL à 0,1 mol/L de NaCl (M = 58,5 g/mol) : m = 0,1 × 0,1 × 58,5 = **0,585 g**.

### Étiqueter et stocker
- Chaque solution porte une **étiquette** : nom, concentration, date, nom du préparateur, pictogrammes de danger. C'est la **traçabilité**.
- Le stockage dépend du produit : enzymes au congélateur, produits volatils toxiques dans une **armoire ventilée**, à la bonne **température de conservation**.

### À retenir pour le bac
- Malassez : 1 rectangle = 0,01 mm³ ; ne pas oublier le facteur de dilution.
- UFC par mL = colonies ÷ (volume × dilution).
- C × V = C × V pour une dilution.
- 1 mm³ = 1 µL ; 1 mL = 1 000 µL.
- Choisir la micropipette adaptée au volume.`,
      cartes: [
        { q: "Quel volume correspond à un rectangle de la cellule de Malassez ?", r: "0,01 mm³ : les 100 rectangles font 1 mm³ au total." },
        { q: "Combien de mL dans 1 mm³ ?", r: "1 mm³ = 1 µL = 0,001 mL." },
        { q: "56 levures dans 10 rectangles de Malassez, dilution 1/100 : concentration ?", r: "56 ÷ 0,1 mm³ = 560 par mm³ = 5,6 × 10 puissance 5 par mL ; × 100 = 5,6 × 10 puissance 7 levures par mL." },
        { q: "À quoi sert le bleu de méthylène dans un comptage de levures ?", r: "C'est un colorant vital : les levures vivantes restent incolores, les mortes sont bleues." },
        { q: "Comment calcule-t-on le pourcentage de viabilité ?", r: "Nombre de cellules vivantes ÷ nombre total × 100." },
        { q: "Pourquoi parle-t-on d'UFC et non de bactéries ?", r: "Une colonie peut provenir de plusieurs cellules collées : on compte des unités formant colonies." },
        { q: "Comment calcule-t-on une concentration en UFC par mL ?", r: "Nombre de colonies ÷ (volume ensemencé en mL × dilution)." },
        { q: "1 mL de la dilution 10 puissance − 3 donne 150 colonies : concentration ?", r: "150 ÷ 10 puissance − 3 = 1,5 × 10 puissance 5 UFC par mL." },
        { q: "Pourquoi filtre-t-on 100 mL d'eau pour la dénombrer ?", r: "L'eau contient peu de bactéries : la membrane les concentre toutes avant la culture." },
        { q: "Qu'est-ce qu'un critère microbiologique ?", r: "Une limite à respecter pour un produit, par exemple aucune Escherichia coli dans 100 mL d'eau potable." },
        { q: "Quelle micropipette pour prélever 15 µL ?", r: "Une P20, réglable de 2 à 20 µL : la plus petite gamme qui contient le volume." },
        { q: "Quelle relation utilise-t-on pour une dilution ?", r: "C mère × V mère = C fille × V fille, car la quantité de soluté se conserve." },
        { q: "200 µL à 0,5 mg/mL depuis une solution à 10 mg/mL : volume à prélever ?", r: "0,5 × 200 ÷ 10 = 10 µL, complétés avec 190 µL de solvant." },
        { q: "Que signifie une concentration de 2 % (m/V) ?", r: "2 g de soluté dans 100 mL de solution, soit 20 g/L." },
        { q: "Quelle masse de NaCl (58,5 g/mol) pour 100 mL à 0,1 mol/L ?", r: "m = c × V × M = 0,1 × 0,1 × 58,5 = 0,585 g." },
        { q: "Que doit porter l'étiquette d'une solution ?", r: "Son nom, sa concentration, la date, le nom du préparateur et les pictogrammes de danger." },
      ],
      quiz: [
        { q: "40 cellules comptées dans 20 rectangles de Malassez, sans dilution. La concentration est :", choix: ["2 × 10 puissance 3 cellules par mL", "2 × 10 puissance 5 cellules par mL", "4 × 10 puissance 4 cellules par mL", "8 × 10 puissance 5 cellules par mL"], bonne: 1, expl: "20 rectangles = 0,2 mm³ ; 40 ÷ 0,2 = 200 par mm³, soit 200 000 par mL.", niv: 2 },
        { q: "0,1 mL de la dilution 10 puissance − 4 donne 85 colonies. La concentration est :", choix: ["8,5 × 10 puissance 6 UFC par mL", "8,5 × 10 puissance 5 UFC par mL", "8,5 × 10 puissance 4 UFC par mL", "8,5 × 10 puissance 3 UFC par mL"], bonne: 0, expl: "85 ÷ (0,1 × 10 puissance − 4) = 85 ÷ 10 puissance − 5 = 8,5 × 10 puissance 6 UFC par mL.", niv: 2 },
        { q: "Combien de microlitres dans 0,25 mL ?", choix: ["2,5 µL", "25 µL", "250 µL", "2 500 µL"], bonne: 2, expl: "1 mL = 1 000 µL, donc 0,25 mL = 250 µL.", niv: 1 },
        { q: "Pour prélever 150 µL avec la meilleure exactitude, on choisit :", choix: ["une P1000", "une pipette de 10 mL", "une P20", "une P200"], bonne: 3, expl: "La P200 couvre 20 à 200 µL : c'est la plus petite gamme qui contient 150 µL.", niv: 2 },
        { q: "Pourquoi exprime-t-on un dénombrement sur gélose en UFC ?", choix: ["Une colonie peut venir de plusieurs cellules collées", "Les colonies sont trop petites pour être comptées", "Les bactéries mortes forment aussi des colonies", "C'est l'unité utilisée pour un comptage au microscope"], bonne: 0, expl: "On ne sait pas si chaque colonie vient d'une seule cellule : on parle d'unités formant colonies.", niv: 3 },
        { q: "Sur 400 levures observées avec du bleu de méthylène, 20 sont bleues. Le pourcentage de viabilité est :", choix: ["5 %", "95 %", "80 %", "20 %"], bonne: 1, expl: "380 vivantes sur 400 : 380 ÷ 400 × 100 = 95 %. Les levures bleues sont mortes.", niv: 2 },
        { q: "On veut 1 mL de solution à 2 mg/mL à partir d'une solution à 50 mg/mL. On prélève :", choix: ["4 µL", "20 µL", "25 µL", "40 µL"], bonne: 3, expl: "V = 2 × 1 000 µL ÷ 50 = 40 µL, à compléter à 1 mL. Le facteur de dilution est 25.", niv: 2 },
        { q: "Une solution de glucose à 5 % (m/V) a une concentration en masse de :", choix: ["5 g/L", "0,5 g/L", "50 g/L", "500 g/L"], bonne: 2, expl: "5 g pour 100 mL, donc 50 g pour 1 L.", niv: 2 },
        { q: "Pour analyser une eau de source peu contaminée, on préfère :", choix: ["un comptage direct en cellule de Malassez", "une coloration de Gram", "un antibiogramme", "la filtration de 100 mL sur membrane"], bonne: 3, expl: "La membrane retient toutes les bactéries d'un grand volume : on peut dénombrer même quelques cellules.", niv: 3 },
        { q: "Quelle masse de glucose (180 g/mol) faut-il peser pour 250 mL à 0,2 mol/L ?", choix: ["9,0 g", "3,6 g", "0,9 g", "4,5 g"], bonne: 0, expl: "m = c × V × M = 0,2 × 0,25 × 180 = 9,0 g.", niv: 2 },
      ],
    },
    // ---------------------------------------------------------------- T6 à T8
    {
      chapitre: 'stl-bgb-7',
      fiche: `## Détecter, séparer et doser les biomolécules

### Détecter : les réactions antigène-anticorps
- Un **test qualitatif** dit si une molécule est présente ou non. Il repose souvent sur la **spécificité** de la liaison entre un **antigène** et un **anticorps**.
- **Agglutination** : l'antigène est sur une particule (une cellule, une bille de latex) ; les anticorps relient les particules en amas visibles. Exemple : la détermination du groupe sanguin.
- **Précipitation** : l'antigène est soluble ; un précipité se forme quand antigène et anticorps sont en proportions proches, à la **zone d'équivalence**. En immunodiffusion, ils diffusent dans un gel et forment un **arc de précipitation**.
- **Test immuno-enzymatique** (ELISA) : un anticorps fixé au fond d'un puits capture l'antigène ; après des **lavages**, un anticorps **conjugué** à une enzyme se fixe à son tour ; l'enzyme transforme un substrat incolore en produit coloré. Plus la couleur est intense, plus il y avait d'antigène.
- Les **témoins** sont indispensables : un **témoin positif** (contient la molécule, vérifie que la technique marche) et un **témoin négatif** (sans la molécule, vérifie qu'il n'y a pas de faux positif).

### Séparer et purifier
- **Centrifugation** : les particules lourdes tombent au fond (le **culot**), le liquide reste au-dessus (le **surnageant**).
- **Électrophorèse** : dans un **champ électrique**, les molécules chargées migrent. L'ADN, chargé négativement, va vers l'**anode** (+). Dans un gel, les **petites molécules migrent plus loin**. Un **marqueur de taille** (fragments de tailles connues) permet d'estimer la taille des fragments.
- Les protéines peuvent être séparées selon leur masse en gel, avec un **marqueur de masse moléculaire**.
- **Chromatographie d'exclusion** : des billes poreuses retiennent les petites molécules, qui entrent dans les pores ; les **grosses molécules sortent en premier**.
- **Purification d'une enzyme** : on suit deux grandeurs.
- **Activité spécifique** = activité enzymatique ÷ masse de protéines. Elle augmente quand l'enzyme est plus pure.
- **Facteur d'enrichissement** = activité spécifique finale ÷ activité spécifique initiale. **Rendement** = activité totale finale ÷ activité totale initiale × 100.
- Exemple : extrait brut 2 000 UI et 400 mg de protéines (5 UI/mg) ; après purification 1 200 UI et 20 mg (60 UI/mg). Enrichissement **12** ; rendement **60 %**.

### Doser en point final
- On laisse la réaction aller jusqu'au bout : tout le substrat à doser (molécule **limitante**) est transformé, les réactifs sont **en excès**. Un **chromogène** donne un produit coloré.
- **Loi de Beer-Lambert** : A = ε × l × c (ε coefficient d'absorption molaire, l largeur de la cuve). L'absorbance est proportionnelle à la concentration.
- Exemple : NADH, ε = 6 300 L/mol/cm à 340 nm, cuve de 1 cm, A = 0,630 : c = 0,630 ÷ 6 300 = **1,0 × 10 puissance − 4 mol/L**.
- **Étalon unique** : c essai = (A essai ÷ A étalon) × c étalon. Exemple : étalon à 1,00 g/L, A = 0,400 ; essai A = 0,300 : 0,750 g/L ; si l'essai était dilué au 1/2, **1,50 g/L**.
- **Gamme d'étalonnage** : plusieurs étalons, une droite A = f(c), sur laquelle on lit la concentration de l'essai.
- Le **blanc** contient tout sauf l'échantillon : il sert à faire le zéro.

### Doser une activité enzymatique
- L'**activité** d'une enzyme se mesure par la **vitesse initiale** de la réaction, en **cinétique en continu** ou par la méthode « deux points ». Conditions : **substrat saturant**, **pH optimal** (tampon), température fixée (**thermostatisation**), mesure pendant la **période initiale** (partie linéaire).
- Unité internationale : **1 UI** = 1 µmol de substrat transformé par minute. La **concentration d'activité catalytique** b s'exprime en UI par litre d'échantillon.
- b = (ΔA par minute ÷ (ε × l)) × (volume du milieu réactionnel ÷ volume d'échantillon).
- Exemple : ΔA = 0,126 par minute à 340 nm, milieu réactionnel 1,0 mL, échantillon 0,020 mL. 0,126 ÷ 6 300 = 2,0 × 10 puissance − 5 mol/L/min ; × 50 = 1,0 × 10 puissance − 3 mol/L/min = **1 000 UI/L**.

### Doser par une réaction antigène-anticorps
- En **immunodiffusion radiale**, l'antigène diffuse dans un gel qui contient l'anticorps : le diamètre de l'anneau augmente avec la concentration. On lit l'essai sur une **courbe d'étalonnage**. Un test ELISA quantitatif fonctionne aussi avec une gamme.

### À retenir pour le bac
- Toujours justifier les témoins positif et négatif.
- Électrophorèse : petits fragments plus loin ; ADN vers l'anode.
- Exclusion : grosses molécules en premier.
- A = ε × l × c ; étalon unique : rapport des absorbances.
- Activité : vitesse initiale, en UI (µmol par minute) ; ne pas oublier VMR ÷ VE.`,
      cartes: [
        { q: "Agglutination ou précipitation ?", r: "Agglutination : l'antigène est sur une particule (cellule, latex). Précipitation : l'antigène est soluble." },
        { q: "Qu'est-ce que la zone d'équivalence ?", r: "Les proportions d'antigène et d'anticorps pour lesquelles le précipité est le plus important." },
        { q: "Quel est le principe d'un test ELISA en sandwich ?", r: "Un anticorps fixé capture l'antigène ; après lavage, un anticorps conjugué à une enzyme s'y fixe et colore un substrat." },
        { q: "À quoi servent les lavages en ELISA ?", r: "À éliminer ce qui n'est pas fixé spécifiquement, pour éviter un faux positif." },
        { q: "Quel est le rôle d'un témoin négatif ?", r: "Vérifier qu'on n'obtient pas de signal sans la molécule recherchée : pas de faux positif." },
        { q: "Culot ou surnageant ?", r: "Le culot est le dépôt au fond du tube après centrifugation ; le surnageant est le liquide au-dessus." },
        { q: "En électrophorèse sur gel, quels fragments d'ADN migrent le plus loin ?", r: "Les plus petits, qui traversent plus facilement le maillage du gel." },
        { q: "À quoi sert un marqueur de taille ?", r: "Ce sont des fragments de tailles connues : on compare leur migration pour estimer la taille des fragments étudiés." },
        { q: "En chromatographie d'exclusion, quelles molécules sortent en premier ?", r: "Les plus grosses, qui n'entrent pas dans les pores des billes." },
        { q: "Comment calcule-t-on l'activité spécifique ?", r: "Activité enzymatique ÷ masse de protéines (en UI par mg). Elle augmente quand l'enzyme est plus pure." },
        { q: "Comment calcule-t-on le rendement d'une purification ?", r: "Activité totale finale ÷ activité totale initiale × 100." },
        { q: "Énonce la loi de Beer-Lambert.", r: "A = ε × l × c : l'absorbance est proportionnelle à la concentration, à la largeur de la cuve et au coefficient d'absorption molaire." },
        { q: "Comment calcule-t-on une concentration avec un étalon unique ?", r: "c essai = (A essai ÷ A étalon) × c étalon, puis × la dilution de l'essai s'il y en a une." },
        { q: "Pourquoi le substrat doit-il être saturant pour doser une activité enzymatique ?", r: "Pour que la vitesse ne dépende que de la quantité d'enzyme, et pas de la concentration en substrat." },
        { q: "Qu'est-ce qu'une unité internationale (UI) d'activité enzymatique ?", r: "La quantité d'enzyme qui transforme 1 µmol de substrat par minute." },
        { q: "Pourquoi suit-on le NADH à 340 nm ?", r: "Le NADH absorbe à 340 nm et le NAD+ non : l'absorbance suit directement l'avancement de la réaction." },
      ],
      quiz: [
        { q: "Sur un gel d'électrophorèse, un fragment de 300 pb et un fragment de 1 500 pb. Lequel est le plus proche du puits ?", choix: ["Celui de 300 pb", "Ils migrent à la même distance", "Aucun, ils restent dans le puits", "Celui de 1 500 pb"], bonne: 3, expl: "Les gros fragments avancent moins vite dans le gel : ils restent près du puits.", niv: 2 },
        { q: "En chromatographie d'exclusion, une protéine de 150 kDa et une de 20 kDa. La première éluée est :", choix: ["celle de 20 kDa", "celle qui est la plus chargée", "celle de 150 kDa", "celle qui a le point isoélectrique le plus bas"], bonne: 2, expl: "La grosse protéine n'entre pas dans les pores des billes : elle sort en premier.", niv: 2 },
        { q: "Le témoin négatif d'un test ELISA donne une forte coloration. On conclut que :", choix: ["le test n'est pas valide, il y a un faux positif", "l'échantillon du patient contient beaucoup d'antigène", "l'enzyme du conjugué est inactive", "les lavages ont été trop longs"], bonne: 0, expl: "Un témoin sans antigène ne doit pas se colorer : les résultats ne peuvent pas être interprétés.", niv: 3 },
        { q: "Étalon de glucose à 2,0 g/L : A = 0,500. Essai non dilué : A = 0,250. La concentration de l'essai est :", choix: ["4,0 g/L", "1,0 g/L", "0,5 g/L", "0,25 g/L"], bonne: 1, expl: "c = (0,250 ÷ 0,500) × 2,0 = 1,0 g/L.", niv: 2 },
        { q: "Détecter le groupe sanguin en mélangeant des globules rouges et des anticorps repose sur :", choix: ["une précipitation en gel", "une électrophorèse", "une chromatographie", "une agglutination"], bonne: 3, expl: "L'antigène est porté par des cellules : les anticorps les relient en amas, c'est une agglutination.", niv: 1 },
        { q: "Une purification fait passer l'activité spécifique de 4 à 48 UI/mg. Le facteur d'enrichissement est :", choix: ["44", "12", "52", "192"], bonne: 1, expl: "Enrichissement = 48 ÷ 4 = 12.", niv: 2 },
        { q: "Activité totale de 3 000 UI au départ et de 900 UI à la fin. Le rendement de la purification est :", choix: ["30 %", "70 %", "3,3 %", "90 %"], bonne: 0, expl: "900 ÷ 3 000 × 100 = 30 % : on a perdu 70 % de l'activité au cours des étapes.", niv: 2 },
        { q: "Pour doser une activité enzymatique, la concentration en substrat doit être :", choix: ["la plus faible possible", "égale à celle de l'enzyme", "saturante", "nulle au départ"], bonne: 2, expl: "Avec un substrat saturant, la vitesse initiale dépend seulement de la quantité d'enzyme.", niv: 1 },
        { q: "ΔA = 0,063 par minute à 340 nm (ε du NADH = 6 300), cuve de 1 cm, milieu de 2,0 mL, échantillon de 0,10 mL. b vaut :", choix: ["10 UI/L", "200 UI/L", "100 UI/L", "20 UI/L"], bonne: 1, expl: "0,063 ÷ 6 300 = 1,0 × 10 puissance − 5 mol/L/min ; × 20 = 2,0 × 10 puissance − 4 mol/L/min = 200 µmol/min/L.", niv: 3 },
        { q: "Pourquoi la mesure de l'activité se fait-elle pendant la période initiale ?", choix: ["L'enzyme n'est active que pendant les premières secondes du dosage", "La cuve se refroidit ensuite", "Le produit est alors invisible", "La courbe y est linéaire, la vitesse est constante"], bonne: 3, expl: "Au début, la courbe est linéaire : sa pente donne la vitesse initiale, proportionnelle à l'enzyme.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- T9 et T10
    {
      chapitre: 'stl-bgb-8',
      fiche: `## Technologies de l'ADN et cellules végétales

### Préparer une solution d'ADN
- **Lyse cellulaire** : un détergent détruit les membranes et libère l'ADN.
- **Déprotéinisation** : on élimine les protéines (une enzyme qui les dégrade, ou un traitement chimique), notamment les **nucléases**, qui couperaient l'ADN.
- **Précipitation** à l'éthanol froid, puis remise en solution dans un tampon.
- **Contrôle** : la **pureté** avec le rapport A260/A280 (proche de 1,8) ; la **concentration** avec A260 : pour un ADN double brin, une absorbance de 1 correspond à **50 µg/mL**.
- Exemple : ADN dilué au 1/20, A260 = 0,25 : 0,25 × 50 × 20 = **250 µg/mL**.

### Amplifier par PCR
- La **PCR** (réaction de polymérisation en chaîne) copie un fragment précis, le **gène d'intérêt**, en un très grand nombre d'exemplaires (les **amplicons**).
- Il faut : l'ADN à analyser, deux **amorces** qui encadrent le fragment (environ 20 nucléotides chacune), des nucléotides, une **ADN polymérase résistante à la chaleur** et un tampon.
- Un cycle : **dénaturation** vers 95 °C (les brins se séparent), **hybridation** des amorces vers 50 à 65 °C, **élongation** à 72 °C (la polymérase copie).
- Le nombre de copies **double à chaque cycle** : 2 puissance n. Après 30 cycles, environ **un milliard** de copies par molécule de départ.
- On vérifie par **électrophorèse** : la bande attendue doit être à la bonne taille par rapport au **marqueur de taille**. **Témoins** : un témoin négatif sans ADN (pas de contamination) et un témoin positif (la PCR fonctionne).

### Couper avec une enzyme de restriction
- Une **enzyme de restriction** (endonucléase) coupe l'ADN à une séquence précise, le **site de restriction**, souvent un palindrome. EcoRI coupe G/AATTC.
- Certaines laissent des **bouts collants** (extrémités simple brin qui peuvent se réassocier), d'autres des **bouts francs**.
- Un ADN linéaire coupé en 2 sites donne **3 fragments** ; un plasmide circulaire coupé en 2 sites donne **2 fragments**.

### Cloner un gène
- On insère le gène dans un **plasmide** vecteur, qui contient une **origine de réplication** (il est copié dans la bactérie) et un **gène de résistance** à un antibiotique (pour la sélection).
- Le gène et le plasmide sont coupés par la **même enzyme** : leurs bouts collants sont complémentaires. Une **ligase** les relie.
- **Transformation** : les bactéries absorbent le plasmide (par exemple après un choc thermique). On les étale sur un milieu avec l'antibiotique : seules celles qui ont reçu le plasmide poussent.
- La ligation peut donner un plasmide refermé sans le gène : on vérifie les colonies (PCR, électrophorèse après restriction).
- La bactérie transformée peut alors produire la **protéine recombinante** (insuline, enzyme).

### Les enjeux pour la société
- Applications : diagnostic, médicaments, identification par l'ADN, plantes et microbes modifiés, et la technique **CRISPR-Cas9** qui permet de modifier un gène précis.
- Questions de **bioéthique** : protection des **données génétiques**, limites à la modification du génome humain, information du public (**vulgarisation scientifique**).

### Les cellules végétales en culture
- Une cellule végétale est **totipotente** : elle peut redonner une plante entière.
- On cultive des **explants** (petits morceaux de plante) en conditions **stériles**, sur un milieu nutritif avec des **hormones végétales**.
- **Dédifférenciation** : l'explant forme un **cal**, amas de cellules non spécialisées. Selon les hormones, il donne ensuite des racines ou des tiges : beaucoup d'auxine favorise les racines, beaucoup de cytokinine favorise les bourgeons.
- **Micropropagation** : produire très vite de nombreuses plantes identiques (des clones), saines.
- Une plante **génétiquement modifiée** (OGM) a reçu un gène d'une autre espèce, souvent grâce à une bactérie du sol, Agrobacterium.

### À retenir pour le bac
- PCR : dénaturation, hybridation, élongation ; 2 puissance n copies.
- Témoin négatif de PCR = sans ADN.
- Enzyme de restriction + ligase + plasmide = clonage ; sélection par l'antibiotique.
- A260 = 1 correspond à 50 µg/mL d'ADN double brin.
- Totipotence, cal, micropropagation.`,
      cartes: [
        { q: "Quelles sont les étapes de l'extraction d'ADN ?", r: "Lyse cellulaire, déprotéinisation, précipitation à l'éthanol froid, remise en solution." },
        { q: "Pourquoi faut-il éliminer les nucléases lors d'une extraction ?", r: "Ce sont des enzymes qui coupent l'ADN : elles le détruiraient." },
        { q: "Comment calcule-t-on la concentration d'un ADN double brin à partir de A260 ?", r: "A260 = 1 correspond à 50 µg/mL : c = A260 × 50 × dilution." },
        { q: "ADN dilué au 1/20, A260 = 0,25 : concentration ?", r: "0,25 × 50 × 20 = 250 µg/mL." },
        { q: "Que faut-il dans un tube de PCR ?", r: "L'ADN, deux amorces, des nucléotides, une ADN polymérase résistante à la chaleur et un tampon." },
        { q: "Quelles sont les trois étapes d'un cycle de PCR ?", r: "Dénaturation vers 95 °C, hybridation des amorces vers 50 à 65 °C, élongation à 72 °C." },
        { q: "Combien de copies après 30 cycles de PCR ?", r: "2 puissance 30, soit environ un milliard de copies par molécule de départ." },
        { q: "Quel est le rôle du témoin négatif d'une PCR ?", r: "Il ne contient pas d'ADN : aucune bande ne doit apparaître, sinon il y a une contamination." },
        { q: "Qu'est-ce qu'un site de restriction ?", r: "La séquence précise d'ADN reconnue et coupée par une enzyme de restriction, souvent un palindrome." },
        { q: "Bouts collants ou bouts francs ?", r: "Les bouts collants ont une courte partie simple brin qui peut se réassocier ; les bouts francs sont coupés droit." },
        { q: "Combien de fragments donne un plasmide circulaire coupé en 2 sites ?", r: "2 fragments. Un ADN linéaire coupé en 2 sites en donne 3." },
        { q: "Pourquoi coupe-t-on le gène et le plasmide avec la même enzyme ?", r: "Leurs bouts collants sont alors complémentaires et peuvent être reliés par une ligase." },
        { q: "À quoi sert le gène de résistance d'un plasmide vecteur ?", r: "À sélectionner les bactéries transformées : seules celles qui ont le plasmide poussent avec l'antibiotique." },
        { q: "Qu'est-ce que la totipotence d'une cellule végétale ?", r: "Sa capacité à redonner une plante entière." },
        { q: "Qu'est-ce qu'un cal ?", r: "Un amas de cellules végétales dédifférenciées, obtenu à partir d'un explant." },
        { q: "Qu'est-ce que la micropropagation ?", r: "La production rapide de nombreuses plantes identiques (clones) à partir d'explants cultivés in vitro." },
      ],
      quiz: [
        { q: "Après 10 cycles de PCR, une seule molécule d'ADN cible donne environ :", choix: ["1 024 copies", "20 copies", "100 copies", "10 copies"], bonne: 0, expl: "Le nombre double à chaque cycle : 2 puissance 10 = 1 024.", niv: 2 },
        { q: "Quel est le rôle de l'étape à 95 °C d'un cycle de PCR ?", choix: ["Fixer les amorces", "Séparer les deux brins d'ADN", "Allonger le nouveau brin", "Détruire la polymérase"], bonne: 1, expl: "La chaleur rompt les liaisons hydrogène entre les bases : les brins se séparent.", niv: 1 },
        { q: "Le témoin négatif d'une PCR montre une bande à la taille attendue. On conclut :", choix: ["que la PCR a parfaitement marché sur l'échantillon testé", "que l'échantillon est négatif", "qu'il faut plus de cycles", "qu'un réactif est contaminé par de l'ADN"], bonne: 3, expl: "Sans ADN ajouté, aucune bande ne devrait apparaître : un réactif contient de l'ADN contaminant.", niv: 3 },
        { q: "Un ADN linéaire contient 3 sites EcoRI. Après digestion complète, on obtient :", choix: ["2 fragments", "3 fragments", "4 fragments", "6 fragments"], bonne: 2, expl: "Chaque coupure d'un ADN linéaire ajoute un fragment : 3 coupures donnent 4 fragments.", niv: 2 },
        { q: "Pourquoi étale-t-on les bactéries transformées sur un milieu avec un antibiotique ?", choix: ["Pour ne garder que celles qui ont reçu le plasmide", "Pour accélérer leur croissance pendant la nuit d'incubation", "Pour couper le plasmide", "Pour stériliser le milieu"], bonne: 0, expl: "Le plasmide porte un gène de résistance : seules les bactéries qui l'ont poussent.", niv: 2 },
        { q: "ADN dilué au 1/10, A260 = 0,40. Sa concentration est :", choix: ["20 µg/mL", "200 µg/mL", "50 µg/mL", "125 µg/mL"], bonne: 1, expl: "0,40 × 50 × 10 = 200 µg/mL.", niv: 2 },
        { q: "La polymérase utilisée en PCR doit :", choix: ["fonctionner à 4 °C", "couper l'ADN à un site précis", "relier deux fragments", "résister aux 95 °C de chaque cycle"], bonne: 3, expl: "Une polymérase ordinaire serait détruite par la dénaturation ; on en utilise une issue d'une bactérie des sources chaudes.", niv: 2 },
        { q: "Après ligation, certaines colonies résistantes ne contiennent pas le gène. Pourquoi ?", choix: ["Le plasmide s'est refermé sans le gène", "L'antibiotique était périmé", "La ligase a coupé et détruit le gène inséré", "Elles sont sensibles à l'antibiotique"], bonne: 0, expl: "Un plasmide refermé sur lui-même garde le gène de résistance : il faut vérifier chaque colonie.", niv: 3 },
        { q: "Un fragment de tige de tabac redonne une plante entière in vitro. Cela montre :", choix: ["la pluripotence des cellules animales", "la dénaturation de l'ADN", "la totipotence des cellules végétales", "l'action d'une enzyme de restriction"], bonne: 2, expl: "Une cellule végétale peut se dédifférencier puis redonner tous les organes de la plante.", niv: 1 },
        { q: "Un milieu riche en cytokinine et pauvre en auxine fait surtout apparaître sur un cal :", choix: ["des racines", "des bourgeons et des tiges", "des fleurs immédiatement", "des spores"], bonne: 1, expl: "Beaucoup de cytokinine favorise les bourgeons ; beaucoup d'auxine favorise les racines.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- L1 et L2
    {
      chapitre: 'stl-bgb-9',
      fiche: `## Démarche de projet et prévention des risques

### Pourquoi un projet en biotechnologies ?
- Les biotechnologies répondent à des **enjeux** de santé, d'alimentation, d'environnement ou d'industrie : produire un médicament, contrôler un aliment, dépolluer un sol.
- Un projet part d'une **question** ancrée dans un vrai besoin, et se termine par une réponse argumentée.

### Concevoir le projet
- Chercher des **ressources fiables** (articles scientifiques, sites d'organismes publics) et les citer.
- Poser la **problématique**, puis un **objectif général** découpé en objectifs précis, classés par priorité (**hiérarchisation**).
- Formuler une **hypothèse** qu'une expérience pourra **confirmer** ou **infirmer**.
- Rédiger un **cahier des charges** : ce qu'on veut obtenir, avec quelles **contraintes** (temps, matériel, coût, sécurité). Vérifier la **faisabilité**.

### Réaliser et suivre
- Choisir la **technique** et écrire la **procédure opératoire** (le mode opératoire pas à pas).
- Prévoir des **témoins** (pour valider l'expérience) et des **étalons de contrôle** (pour vérifier la justesse d'une mesure).
- Repérer les **points critiques** de la procédure, où une erreur évitable peut fausser le résultat.
- Se **répartir les tâches**, coopérer, tenir un cahier de laboratoire, communiquer dans le groupe.

### Évaluer et valoriser
- Les résultats sont-ils **répétables** ? Confirment-ils ou infirment-ils l'hypothèse ?
- Rester **objectif** : se méfier du **biais cognitif** (par exemple ne retenir que les résultats qui confirment ce qu'on espérait).
- **Communiquer** le projet (affiche, oral, rapport) avec **intégrité** et **rigueur scientifique** : ne jamais inventer ni arranger des résultats, citer ses sources.
- Faire une **analyse réflexive** : ce qui a marché, ce qu'on referait autrement. Une erreur peut devenir une **opportunité** d'apprendre.

### Danger et risque
- Un **danger** est une propriété d'un produit ou d'une situation capable de causer un **dommage** (un acide est corrosif, une bactérie est pathogène).
- Un **risque** existe quand une personne est **exposée** à ce danger. Pas d'exposition, pas de risque. Le risque dépend de la probabilité et de la gravité du dommage.
- Les **voies d'exposition** : **respiratoire** (aérosols, vapeurs), **cutanéo-muqueuse** (peau, yeux), **digestive** (portée à la bouche), **percutanée** (piqûre, coupure).

### Les dangers biologiques et chimiques
- Les agents biologiques sont classés en **4 groupes de risque**. Groupe 1 : ne provoque pas de maladie chez l'humain. Groupe 2 : peut provoquer une maladie, peu de propagation, traitement possible. Groupe 3 : maladie grave, propagation possible, traitement existant. Groupe 4 : maladie grave, propagation forte, pas de traitement efficace.
- Au lycée, on manipule surtout des micro-organismes des groupes 1 et 2.
- Les produits chimiques portent des **pictogrammes** de danger (losange rouge sur fond blanc : corrosif, toxique, inflammable…), des **mentions de danger** (phrases H) et des **conseils de prudence** (phrases P). La fiche de données de sécurité donne le détail.

### Les mesures de prévention
- Dans l'ordre de priorité : **supprimer ou remplacer** le danger, puis protéger **collectivement**, puis **individuellement**, et former les personnes.
- **Équipements de protection collective** (EPC) : le **poste de sécurité microbiologique** (contre les aérosols de micro-organismes), la **sorbonne** (contre les vapeurs chimiques).
- **Équipements de protection individuelle** (EPI) : blouse fermée, gants, lunettes.
- **Gestuelle préventive** : travailler près de la flamme, ne jamais pipeter à la bouche, reboucher les tubes, ne pas porter les mains au visage.
- **Mesures organisationnelles** : consignes affichées, paillasse désinfectée avant et après, lavage des mains.
- **Déchets** : les déchets contaminés par des micro-organismes sont **décontaminés** (autoclave) ou mis dans des conteneurs spéciaux ; les déchets chimiques sont triés dans des bidons, jamais à l'évier s'ils sont dangereux pour l'environnement.

### À retenir pour le bac
- Danger = propriété ; risque = danger + exposition.
- Citer la voie d'exposition puis la mesure de prévention adaptée.
- EPC avant EPI.
- Une hypothèse se confirme ou s'infirme par une expérience avec témoins.`,
      cartes: [
        { q: "Qu'est-ce qu'un cahier des charges ?", r: "Le document qui fixe ce qu'on veut obtenir et les contraintes à respecter : temps, matériel, coût, sécurité." },
        { q: "Qu'est-ce qu'une hypothèse dans un projet ?", r: "Une réponse possible à la question posée, qu'une expérience pourra confirmer ou infirmer." },
        { q: "À quoi sert un étalon de contrôle ?", r: "C'est un échantillon de valeur connue : il vérifie que la mesure du jour est juste." },
        { q: "Qu'est-ce qu'un point critique d'une procédure ?", r: "Une étape où une erreur évitable peut fausser le résultat, et qui demande une attention particulière." },
        { q: "Qu'est-ce qu'un biais cognitif ?", r: "Une erreur de jugement, par exemple ne retenir que les résultats qui confirment ce qu'on espérait." },
        { q: "Que signifie l'intégrité scientifique ?", r: "Ne jamais inventer ni arranger des résultats, citer ses sources, présenter honnêtement ce qu'on a obtenu." },
        { q: "Danger ou risque ?", r: "Le danger est une propriété capable de causer un dommage ; le risque apparaît quand une personne est exposée à ce danger." },
        { q: "Quelles sont les voies d'exposition au laboratoire ?", r: "Respiratoire, cutanéo-muqueuse, digestive et percutanée (piqûre, coupure)." },
        { q: "Qu'est-ce qu'un agent biologique du groupe 2 ?", r: "Un agent qui peut provoquer une maladie, avec peu de risque de propagation et un traitement possible." },
        { q: "Qu'est-ce qu'un agent biologique du groupe 4 ?", r: "Un agent qui provoque une maladie grave, se propage facilement et pour lequel il n'existe pas de traitement efficace." },
        { q: "Phrase H ou phrase P ?", r: "La phrase H est une mention de danger ; la phrase P est un conseil de prudence." },
        { q: "Dans quel ordre choisir les mesures de prévention ?", r: "Supprimer ou remplacer le danger, puis protection collective, puis protection individuelle, puis formation." },
        { q: "Contre quoi protège un poste de sécurité microbiologique ?", r: "Contre les aérosols de micro-organismes : c'est un équipement de protection collective." },
        { q: "Donne trois équipements de protection individuelle.", r: "La blouse fermée, les gants et les lunettes de protection." },
        { q: "Donne deux gestes de prévention en microbiologie.", r: "Ne jamais pipeter à la bouche et ne pas porter les mains au visage ; travailler près de la flamme." },
        { q: "Que fait-on des déchets contaminés par des micro-organismes ?", r: "On les décontamine, par exemple à l'autoclave, ou on les place dans des conteneurs spéciaux." },
      ],
      quiz: [
        { q: "Un flacon d'acide fermé dans une armoire, sans personne à côté, présente :", choix: ["un risque élevé, car l'acide reste corrosif même dans un flacon bouché", "un risque sans danger", "un danger, mais pas de risque tant que personne n'est exposé", "ni danger ni risque"], bonne: 2, expl: "Le danger est la propriété corrosive de l'acide ; le risque n'apparaît qu'avec une exposition.", niv: 3 },
        { q: "Agiter vigoureusement un tube de culture ouvert expose surtout par voie :", choix: ["digestive", "percutanée", "sanguine", "respiratoire"], bonne: 3, expl: "L'agitation forme des aérosols qu'on peut inhaler.", niv: 2 },
        { q: "Pour se protéger des aérosols bactériens pendant une manipulation, l'équipement le plus adapté est :", choix: ["le poste de sécurité microbiologique", "une paire de gants", "la sorbonne chimique", "une blouse en coton"], bonne: 0, expl: "Le PSM protège le manipulateur des aérosols biologiques ; la sorbonne est faite pour les vapeurs chimiques.", niv: 2 },
        { q: "Un agent provoque une maladie grave, peut se propager dans la population et se soigne. Il appartient au groupe :", choix: ["1", "3", "2", "4"], bonne: 1, expl: "Maladie grave, propagation possible et traitement existant : c'est le groupe 3.", niv: 2 },
        { q: "Dans la démarche de prévention, avant de fournir des gants, il faut d'abord :", choix: ["former tout le monde", "afficher des consignes de sécurité près des paillasses", "chercher à supprimer ou remplacer le danger", "acheter des lunettes"], bonne: 2, expl: "La protection individuelle vient en dernier : on commence par supprimer le danger ou le remplacer par un produit moins dangereux.", niv: 3 },
        { q: "Une expérience donne un résultat contraire à l'hypothèse. L'équipe doit :", choix: ["écarter ce résultat", "refaire l'essai jusqu'à obtenir ce qu'elle attend", "modifier les valeurs", "valider les témoins, puis rejeter l'hypothèse"], bonne: 3, expl: "Si les témoins sont valides, l'hypothèse est infirmée : arranger les résultats est une faute d'intégrité.", niv: 2 },
        { q: "La phrase « Provoque des brûlures de la peau et de graves lésions des yeux » est :", choix: ["un conseil de prudence P", "une mention de danger H", "une mesure organisationnelle", "un équipement de protection"], bonne: 1, expl: "Elle décrit le danger : c'est une phrase H. Les phrases P disent comment se protéger.", niv: 1 },
        { q: "Quel document fixe les objectifs d'un projet et ses contraintes de temps, de coût et de sécurité ?", choix: ["Le cahier de laboratoire", "La fiche de données de sécurité", "Le cahier des charges", "La bibliographie"], bonne: 2, expl: "Le cahier des charges définit ce qu'on veut obtenir et les contraintes à respecter.", niv: 1 },
        { q: "Pourquoi ne faut-il **pas** pipeter à la bouche, même de l'eau ?", choix: ["Pour garder l'habitude et éviter l'exposition par voie digestive", "Parce que l'eau abîme les pipettes", "Parce que c'est trop lent", "Pour ne pas fausser le volume prélevé à cause de la salive aspirée"], bonne: 0, expl: "C'est une gestuelle préventive : on évite toute habitude qui pourrait un jour exposer par la bouche.", niv: 2 },
        { q: "Un élève ne garde que les mesures qui vont dans le sens de son hypothèse. C'est :", choix: ["une erreur aléatoire", "un biais cognitif", "une mesure de prévention", "un témoin positif"], bonne: 1, expl: "Il trie les résultats selon ce qu'il espère : c'est un biais de confirmation.", niv: 2 },
      ],
    },
    // ---------------------------------------------------------------- L3 et L4
    {
      chapitre: 'stl-bgb-10',
      fiche: `## Résultats de mesure fiables et outils numériques

### Le vocabulaire de la mesure
- Le **mesurande** est la grandeur qu'on veut mesurer (la concentration en glucose d'un sérum). La **valeur mesurée** est ce qu'on obtient.
- Toute mesure contient une **erreur** : l'écart entre la valeur mesurée et la vraie valeur, qu'on ne connaît jamais exactement.
- L'**erreur aléatoire** varie d'une mesure à l'autre : elle disperse les valeurs. Elle est liée à la **fidélité**, mesurée par l'**écart-type** (plus il est petit, plus la méthode est fidèle).
- L'**erreur systématique** décale toutes les valeurs dans le même sens : elle est liée à la **justesse**. Le **biais** = moyenne des valeurs − valeur de référence.
- Exemple : une micropipette réglée sur 100 µL délivre en moyenne 98,5 µL : biais de **− 1,5 µL**, soit − 1,5 %.
- **Répétabilité** : mêmes conditions (même personne, même matériel, peu de temps). **Reproductibilité** : conditions différentes (autre manipulateur, autre laboratoire).

### Vérifier l'acceptabilité avec un étalon de contrôle
- On mesure, le même jour et dans les mêmes conditions que les échantillons, un **étalon de contrôle** dont la **valeur de référence** est connue.
- La valeur est **acceptable** si l'écart, pris en valeur absolue, entre la valeur mesurée de l'étalon et la valeur de référence reste inférieur ou égal à l'**erreur maximale tolérée** (EMT).
- Exemple : référence 5,00 mmol/L, EMT de 0,25 mmol/L, valeur mesurée 5,18 mmol/L. Écart 0,18 ≤ 0,25 : la série est **acceptable**, on peut rendre les résultats des échantillons.
- Sinon, on cherche les erreurs évitables aux points critiques et on refait la série.

### La compatibilité de deux valeurs mesurées
- Quand on mesure deux fois le même échantillon, on vérifie que les deux valeurs sont **compatibles** : leur écart ne doit pas dépasser la **limite de répétabilité**, calculée à partir de l'**écart-type de répétabilité** sr : l'écart entre y1 et y2, en valeur absolue, doit rester inférieur ou égal à 2,77 × sr.
- Si elles sont compatibles, la **valeur retenue** est leur **moyenne**.
- Exemple : sr = 0,05 g/L ; y1 = 1,48 g/L et y2 = 1,60 g/L. Écart 0,12 ≤ 2,77 × 0,05 = 0,14 : compatibles ; valeur retenue **1,54 g/L**.
- Si elles ne le sont pas, on suit le **logigramme** : nouvelle mesure, recherche d'une erreur.

### Les sources d'incertitude
- Le **diagramme de cause-effet** (en arêtes de poisson) classe les sources d'erreur selon les **5 M** : **mesurande**, **méthode**, **milieu**, **main d'œuvre**, **matériel**.
- Exemple pour une dilution : volume de la pipette (matériel), geste du manipulateur (main d'œuvre), température de la pièce (milieu).
- On s'en sert pour améliorer la procédure et limiter l'**incertitude**.

### Exprimer et critiquer le résultat
- Un résultat s'écrit : **valeur ± incertitude, avec l'unité**. On arrondit d'abord l'incertitude (souvent à un chiffre significatif, par excès), puis la valeur au **même rang**.
- Exemple : valeur 1,5368 g/L et incertitude 0,043 g/L, arrondie à 0,05 : on écrit **1,54 ± 0,05 g/L**.
- On vérifie la **cohérence** : l'**ordre de grandeur** est-il plausible ? Le résultat respecte-t-il le **critère** (valeur de référence d'un patient sain, limite réglementaire) ?

### La bioinformatique
- Des **bases de données** publiques rassemblent des **séquences** de nucléotides et de protéines, et des **structures** en trois dimensions.
- On compare deux séquences par un **alignement** pour repérer leurs ressemblances et identifier un gène ou une espèce.
- Un logiciel repère les **sites de restriction** d'une séquence ou aide à choisir des **amorces** de PCR : environ 20 nucléotides, **complémentaires** des extrémités du fragment, avec des températures de fusion (**Tm**) proches.
- Pour une amorce courte, une estimation simple : Tm = 2 × (A + T) + 4 × (G + C) en °C. Une amorce de 20 nucléotides avec 10 G ou C : Tm = 2 × 10 + 4 × 10 = **60 °C**.
- Un **tableur** ou un petit programme traite les résultats bruts (moyennes, écarts-types, courbes) et une **modélisation** en trois dimensions montre la **relation structure-fonction** d'une protéine.

### Éthique et numérique
- Vérifier la **fiabilité d'une source** (auteur, date, organisme) et **croiser** les informations ; se méfier des réseaux sociaux.
- Citer ses sources (**bibliographie**, sitographie) : copier sans citer est du **plagiat**.
- Protéger les **données personnelles**, en particulier les données de santé et génétiques. Les **données massives** posent des questions de stockage et d'usage.

### À retenir pour le bac
- Aléatoire → fidélité (écart-type) ; systématique → justesse (biais).
- Acceptabilité : écart entre YEC et YREF inférieur ou égal à l'EMT.
- Compatibilité : écart entre y1 et y2 inférieur ou égal à 2,77 × sr, puis moyenne.
- Résultat = valeur ± incertitude + unité, arrondis au même rang.
- 5 M : mesurande, méthode, milieu, main d'œuvre, matériel.`,
      cartes: [
        { q: "Qu'est-ce que le mesurande ?", r: "La grandeur qu'on cherche à mesurer, par exemple la concentration en glucose d'un sérum." },
        { q: "À quelle qualité de la mesure l'erreur aléatoire est-elle liée ?", r: "À la fidélité : elle disperse les valeurs, et l'écart-type la mesure." },
        { q: "À quelle qualité de la mesure l'erreur systématique est-elle liée ?", r: "À la justesse : elle décale toutes les valeurs dans le même sens, et le biais la mesure." },
        { q: "Comment calcule-t-on un biais ?", r: "Moyenne des valeurs mesurées − valeur de référence." },
        { q: "Répétabilité ou reproductibilité ?", r: "Répétabilité : mêmes conditions (même personne, même matériel). Reproductibilité : conditions différentes." },
        { q: "Quand une valeur d'étalon de contrôle est-elle acceptable ?", r: "Quand |valeur mesurée − valeur de référence| ≤ erreur maximale tolérée (EMT)." },
        { q: "Référence 5,00 mmol/L, EMT 0,25, mesure 5,18 : acceptable ?", r: "Oui : l'écart est de 0,18, inférieur à 0,25." },
        { q: "Quand deux valeurs mesurées sont-elles compatibles ?", r: "Quand |y1 − y2| ≤ 2,77 × sr, l'écart-type de répétabilité." },
        { q: "Que retient-on si deux valeurs sont compatibles ?", r: "Leur moyenne." },
        { q: "Quels sont les 5 M du diagramme de cause-effet ?", r: "Mesurande, méthode, milieu, main d'œuvre, matériel." },
        { q: "Comment écrit-on un résultat de mesure ?", r: "Valeur ± incertitude, avec l'unité, la valeur étant arrondie au même rang que l'incertitude." },
        { q: "Valeur 1,5368 g/L, incertitude arrondie à 0,05 g/L : comment l'écrire ?", r: "1,54 ± 0,05 g/L." },
        { q: "À quoi sert un alignement de séquences ?", r: "À comparer deux séquences pour repérer leurs ressemblances, et identifier un gène ou une espèce." },
        { q: "Comment estimer la Tm d'une amorce courte ?", r: "Tm = 2 × (A + T) + 4 × (G + C), en °C." },
        { q: "Pourquoi les deux amorces d'une PCR doivent-elles avoir des Tm proches ?", r: "Pour qu'elles s'hybrident toutes les deux correctement à la même température d'hybridation." },
        { q: "Qu'est-ce que le plagiat ?", r: "Reprendre le travail ou le texte de quelqu'un sans le citer." },
      ],
      quiz: [
        { q: "Dix pesées d'un même objet donnent des valeurs très dispersées. La méthode manque surtout de :", choix: ["justesse", "fidélité", "traçabilité", "spécificité"], bonne: 1, expl: "La dispersion vient de l'erreur aléatoire : c'est un défaut de fidélité, mesuré par l'écart-type.", niv: 1 },
        { q: "Une pipette réglée sur 200 µL délivre en moyenne 196 µL. Son biais est de :", choix: ["+ 4 µL", "196 µL", "− 4 µL", "− 2 µL"], bonne: 2, expl: "Biais = moyenne − référence = 196 − 200 = − 4 µL, soit − 2 %.", niv: 2 },
        { q: "Étalon de contrôle : référence 2,00 g/L, EMT 0,10 g/L, valeur mesurée 2,14 g/L. La série est :", choix: ["acceptable, car 2,14 reste très proche de la valeur de 2,00", "acceptable, car l'EMT est faible", "à moyenner avec l'étalon", "non acceptable, car l'écart de 0,14 dépasse 0,10"], bonne: 3, expl: "|2,14 − 2,00| = 0,14 > 0,10 : on ne rend pas les résultats, on cherche l'erreur.", niv: 2 },
        { q: "Deux mesures : 3,10 et 3,30 mmol/L ; sr = 0,05 mmol/L. Sont-elles compatibles ?", choix: ["Non, car l'écart de 0,20 dépasse 0,14", "Oui, leur moyenne est 3,20", "Oui, car l'écart est inférieur à 1", "On ne peut pas conclure sans un étalon de contrôle mesuré"], bonne: 0, expl: "2,77 × 0,05 = 0,14 ; l'écart 0,20 est plus grand : il faut suivre le logigramme.", niv: 3 },
        { q: "Un résultat 0,8263 g/L a une incertitude arrondie à 0,03 g/L. On écrit :", choix: ["0,8263 ± 0,03 g/L", "0,83 ± 0,03", "0,83 ± 0,03 g/L", "0,8 ± 0,03 g/L"], bonne: 2, expl: "On arrondit la valeur au même rang que l'incertitude (centièmes) et on n'oublie jamais l'unité.", niv: 2 },
        { q: "Dans un diagramme de cause-effet, la température de la salle appartient à la catégorie :", choix: ["matériel", "main d'œuvre", "méthode", "milieu"], bonne: 3, expl: "Les conditions ambiantes (température, humidité) forment la catégorie milieu.", niv: 1 },
        { q: "Une amorce compte 8 A ou T et 12 G ou C. Sa Tm estimée est de :", choix: ["64 °C", "40 °C", "48 °C", "80 °C"], bonne: 0, expl: "Tm = 2 × 8 + 4 × 12 = 16 + 48 = 64 °C.", niv: 2 },
        { q: "Une même analyse refaite par un autre technicien, dans un autre laboratoire, teste :", choix: ["la répétabilité", "la reproductibilité", "l'acceptabilité", "la spécificité"], bonne: 1, expl: "Changer de manipulateur ou de laboratoire, ce sont des conditions de reproductibilité.", niv: 2 },
        { q: "Un dosage donne une glycémie de 55 g/L chez un patient vivant. Que faut-il en penser ?", choix: ["C'est une hyperglycémie très sévère mais tout à fait possible", "Le résultat est juste puisque l'étalon est acceptable", "Il faut l'écrire avec plus de chiffres", "L'ordre de grandeur est incohérent : il y a une erreur"], bonne: 3, expl: "Une glycémie normale est voisine de 1 g/L : 55 g/L est impossible, il faut critiquer le résultat.", niv: 3 },
        { q: "Pour estimer qu'une information trouvée en ligne est fiable, on vérifie d'abord :", choix: ["son auteur, sa date et l'organisme qui la publie", "son nombre de partages et de commentaires sur les réseaux", "la longueur du texte", "la présence d'images"], bonne: 0, expl: "La fiabilité dépend de la source ; on croise ensuite avec d'autres sources sérieuses.", niv: 2 },
      ],
    },
  ],
  methode: [
    {
      id: 'stl-bgb-m1', mat: 'stl-bgb', titre: "Calculer une concentration d'activité catalytique (C2)",
      formules: ["Calculer la concentration d'activité catalytique de l'enzyme…", "Établir les équations aux unités et aux valeurs numériques puis calculer la vitesse initiale…", "Calculer, en précisant la démarche utilisée…"],
      vu: ["Bac 2026 métropole (Q10, activité de la LDH plasmatique)", "Bac 2025 métropole (Q14, vitesse initiale de la mercure-réductase)"],
      pts: "1 à 2 points par calcul, dans la compétence C2 (2 à 3 points sur 20)",
      attendu: "La formule littérale, l'équation aux unités, l'application numérique, puis le résultat avec la bonne unité et un nombre raisonnable de chiffres significatifs. Le correcteur regarde la démarche autant que le résultat.",
      etapes: ["Repérer la grandeur suivie (souvent l'absorbance du NADH à 340 nm) et calculer ΔA par minute dans la période initiale.", "Écrire la formule littérale : b = (ΔA par minute ÷ (ε × l)) × (VMR ÷ VE).", "Écrire l'équation aux unités pour vérifier qu'on obtient des mol par minute et par litre d'échantillon.", "Remplacer par les valeurs, en calculant d'abord VMR (somme de tous les volumes du tube).", "Convertir en µmol par minute et par litre, c'est-à-dire en UI/L, puis comparer aux valeurs de référence."],
      mots: ["vitesse initiale", "période initiale", "équation aux unités", "volume du milieu réactionnel", "UI/L"],
      pieges: ["Oublier l'échantillon dans le volume du milieu réactionnel.", "Oublier de diviser par la durée quand ΔA est donné pour plusieurs minutes.", "Donner un résultat sans unité.", "Prendre ΔA négatif sans réfléchir au sens de variation (on utilise la valeur absolue)."],
      cas: "On dose une enzyme qui consomme du NADH. Tube : 0,90 mL de substrat en tampon, 0,08 mL de NADH, 0,020 mL de sérum. Absorbance à 340 nm : 0,420 à t = 1 min, puis 0,357 à t = 2 min. ε(NADH, 340 nm) = 6 300 L·mol⁻¹·cm⁻¹ ; cuve de 1 cm.",
      question: "Calcule la concentration d'activité catalytique de l'enzyme dans le sérum, en UI/L.",
      modele: "VMR = 0,90 + 0,08 + 0,020 = 1,00 mL ; VE = 0,020 mL. ΔA par minute = 0,420 − 0,357 = 0,063 (l'absorbance baisse car le NADH est consommé). Formule : b = (ΔA/Δt) ÷ (ε × l) × VMR ÷ VE. Unités : (min⁻¹) ÷ (L·mol⁻¹·cm⁻¹ × cm) × (mL ÷ mL) = mol·L⁻¹·min⁻¹. Valeurs : 0,063 ÷ (6 300 × 1) × (1,00 ÷ 0,020) = 1,0 × 10⁻⁵ × 50 = 5,0 × 10⁻⁴ mol·L⁻¹·min⁻¹ = 500 µmol·min⁻¹·L⁻¹, soit b = 500 UI/L.",
      grille: ["J'ai écrit la formule littérale avant les nombres.", "J'ai calculé VMR avec tous les volumes, échantillon compris.", "J'ai écrit l'équation aux unités.", "Mon résultat a une unité (UI/L) et il est cohérent."],
    },
    {
      id: 'stl-bgb-m2', mat: 'stl-bgb', titre: "Interpréter un électrophorégramme (C3)",
      formules: ["Interpréter les résultats de l'électrophorégramme pour conclure sur la présence ou l'absence…", "Analyser le gel afin d'identifier…", "Vérifier la validité de la procédure opératoire."],
      vu: ["Bac 2025 métropole (Q8, présence du plasmide recombinant dans quatre colonies)", "Bac 2024 métropole (Q4, validité d'une procédure avec ses témoins)"],
      pts: "1 à 2 points, compétence C3 (interpréter des données, 4 à 5 points sur 20)",
      attendu: "Valider d'abord la manipulation grâce aux témoins, puis comparer chaque piste au marqueur de taille et à la taille attendue, et conclure piste par piste.",
      etapes: ["Lire la légende : ordre des pistes, taille attendue du fragment.", "Vérifier le témoin négatif (aucune bande) et le témoin positif (bande à la taille attendue).", "Estimer la taille de chaque bande avec le marqueur (les petits fragments migrent plus loin).", "Conclure piste par piste : bande à la bonne taille, absence de bande, ou bande d'une autre taille.", "Répondre à la question posée (quelle colonie garder)."],
      mots: ["marqueur de taille", "témoin négatif", "témoin positif", "amplicon", "paires de bases"],
      pieges: ["Interpréter les échantillons sans avoir validé les témoins.", "Oublier qu'une bande d'une autre taille n'est pas le fragment recherché.", "Confondre le puits (départ) et le bas du gel.", "Conclure de façon générale sans citer chaque piste."],
      cas: "PCR sur quatre colonies pour chercher un gène de 850 pb. Gel : piste 1 marqueur (1 000, 750, 500, 250 pb) ; piste 2 témoin négatif, aucune bande ; piste 3 témoin positif, une bande entre 1 000 et 750 pb ; pistes 4 à 7 (colonies A à D) : A une bande comme le témoin positif, B aucune bande, C une bande comme le témoin positif, D une bande entre 500 et 250 pb.",
      question: "Interprète le gel et indique quelles colonies possèdent le gène.",
      modele: "Le témoin négatif ne présente aucune bande : il n'y a pas de contamination. Le témoin positif présente une bande entre 750 et 1 000 pb, compatible avec 850 pb : la PCR a fonctionné. La manipulation est donc valide. Les colonies A et C présentent une bande à la même hauteur que le témoin positif, vers 850 pb : elles possèdent le gène. La colonie B ne présente pas de bande : le gène est absent. La colonie D présente une bande d'environ 400 pb, qui n'a pas la taille attendue : ce n'est pas le gène recherché (amplification non spécifique). On garde les colonies A et C.",
      grille: ["J'ai validé les deux témoins avant de conclure.", "J'ai utilisé le marqueur pour estimer les tailles.", "J'ai conclu pour chaque piste.", "J'ai répondu à la question posée."],
    },
    {
      id: 'stl-bgb-m3', mat: 'stl-bgb', titre: "Argumenter un choix technique (C4)",
      formules: ["Argumenter le choix de…", "Argumenter l'intérêt d'ajouter…", "Préciser l'intérêt d'utiliser un milieu supplémenté en…", "Argumenter le choix de la longueur d'onde de travail…"],
      vu: ["Bac 2025 métropole (Q4, Q5, Q7, Q11 : bactérie hôte, sites de restriction, kanamycine, 340 nm et non 260 nm)", "Bac 2026 métropole (Q12, choix du traitement le plus efficace)"],
      pts: "1 point environ par question, compétence C4 (4 à 5 points sur 20)",
      attendu: "Une réponse en deux temps : ce qu'apporte le choix (le principe scientifique), et pourquoi il convient dans cette situation (un fait tiré des documents). Une affirmation sans justification ne rapporte presque rien.",
      etapes: ["Repérer l'objectif de l'étape (sélectionner, mesurer, cloner…).", "Rappeler le principe scientifique en jeu (absorption du NADH, gène de résistance, bouts collants…).", "Citer une donnée précise du document qui justifie le choix.", "Montrer pourquoi l'autre option serait moins bonne, si la question le permet.", "Conclure en une phrase."],
      mots: ["afin de", "car", "le document montre que", "contrairement à", "donc"],
      pieges: ["Répondre par une seule phrase sans principe ni donnée.", "Paraphraser le document sans l'expliquer.", "Oublier de comparer quand deux options sont proposées.", "Utiliser un vocabulaire vague (« c'est mieux »)."],
      cas: "On dose la vitesse d'une enzyme qui produit du NADPH. Le document indique que le NADPH absorbe à 260 nm et à 340 nm, alors que le NADP+ n'absorbe qu'à 260 nm. Les acides nucléiques de l'extrait absorbent aussi à 260 nm.",
      question: "Argumente le choix de mesurer l'absorbance à 340 nm plutôt qu'à 260 nm.",
      modele: "On veut suivre l'apparition du NADPH pour mesurer la vitesse de l'enzyme. À 340 nm, seul le NADPH absorbe : l'augmentation de l'absorbance traduit donc uniquement sa formation. À 260 nm, le NADP+ et le NADPH absorbent tous les deux, et les acides nucléiques de l'extrait aussi : la variation d'absorbance serait faible et faussée. La mesure à 340 nm est donc plus spécifique et permet de calculer correctement la vitesse initiale.",
      grille: ["J'ai rappelé l'objectif de la mesure.", "J'ai donné le principe (quelle molécule absorbe où).", "J'ai utilisé une donnée du document.", "J'ai comparé avec l'autre option."],
    },
    {
      id: 'stl-bgb-m4', mat: 'stl-bgb', titre: "Exploiter une courbe de croissance (C1 et C2)",
      formules: ["Indiquer le temps de début et le temps de fin de la phase de croissance exponentielle.", "Déterminer le temps de génération…", "Citer les conditions favorables à la culture et déterminer le type trophique…"],
      vu: ["Bac 2025 métropole (Q1 et Q2, culture de bactéries productrices)", "Bac 2024 métropole (Q1 et Q2, milieu de culture et masse de milieu à peser)"],
      pts: "1 à 2 points, compétences C1 et C2",
      attendu: "Repérer graphiquement les phases, délimiter la phase exponentielle par des temps précis, puis calculer le temps de génération en montrant le calcul.",
      etapes: ["Repérer les phases : latence (plat), exponentielle (droite en échelle logarithmique), stationnaire (plateau).", "Donner le début et la fin de la phase exponentielle avec leurs valeurs lues.", "Choisir deux points de la phase exponentielle.", "Calculer le nombre de générations (combien de doublements) puis G = durée ÷ n, ou μ = ln 2 ÷ G.", "Interpréter : à quel moment récolter les cellules ou le produit."],
      mots: ["phase de latence", "phase exponentielle", "phase stationnaire", "temps de génération", "taux de croissance"],
      pieges: ["Donner une phase sans les temps qui la limitent.", "Choisir des points hors de la phase exponentielle pour le calcul.", "Oublier l'unité du temps de génération.", "Confondre temps de génération et durée totale de la culture."],
      cas: "Une levure est cultivée en bioréacteur. Concentration en cellules par mL : 0 h : 2,0 × 10⁶ ; 2 h : 2,0 × 10⁶ ; 4 h : 4,0 × 10⁶ ; 6 h : 8,0 × 10⁶ ; 8 h : 1,6 × 10⁷ ; 10 h : 3,2 × 10⁷ ; 12 h : 5,0 × 10⁷ ; 14 h : 5,6 × 10⁷ ; 16 h : 5,6 × 10⁷.",
      question: "Délimite la phase exponentielle, puis calcule le temps de génération et le taux de croissance.",
      modele: "De 0 à 2 h, la concentration ne change pas : c'est la phase de latence. De 2 h à 10 h, elle double toutes les 2 heures (2,0 → 4,0 → 8,0 × 10⁶ → 1,6 → 3,2 × 10⁷) : c'est la phase exponentielle. Après 12 h, elle se stabilise à 5,6 × 10⁷ : phase stationnaire. Entre 2 h et 10 h, la population passe de 2,0 × 10⁶ à 3,2 × 10⁷, soit × 16 = 2 puissance 4 : 4 générations en 8 h, donc G = 8 ÷ 4 = 2 h. Taux de croissance μ = ln 2 ÷ G = 0,693 ÷ 2 = 0,35 h⁻¹.",
      grille: ["J'ai nommé les phases avec leurs temps.", "J'ai pris mes points dans la phase exponentielle.", "J'ai montré le calcul du nombre de générations.", "Mes résultats ont une unité."],
    },
    {
      id: 'stl-bgb-m5', mat: 'stl-bgb', titre: "Rédiger la question de synthèse (C5 et C6)",
      formules: ["Rédiger un argumentaire présentant les enjeux et les limites de…", "Après avoir défini…, argumenter en faveur de…", "Exposer les liens entre… ainsi que les stratégies…", "Récapituler sous forme d'un diagramme opérationnel les étapes…"],
      vu: ["Bac 2026 métropole (Q16, vaccination thérapeutique et vaccination préventive)", "Bac 2025 métropole (Q16 diagramme opérationnel, Q17 bioremédiation)", "Bac 2024 métropole (Q20, dysbiose et stratégies thérapeutiques)"],
      pts: "C5 vaut 5 points sur 20 et C6 (communiquer à l'écrit) 1 point",
      attendu: "Un texte court et organisé (introduction d'une phrase, deux ou trois arguments, conclusion), qui mobilise le cours et les documents, avec le vocabulaire scientifique juste. Le correcteur attend des enjeux et des limites, pas un résumé des documents.",
      etapes: ["Lire la consigne et souligner les verbes (définir, argumenter, comparer).", "Définir la notion centrale en une phrase.", "Lister deux ou trois arguments, chacun appuyé par une connaissance et un fait du document.", "Ajouter une limite ou une nuance si la consigne parle de limites ou d'enjeux.", "Conclure en répondant à la question, en phrases correctes."],
      mots: ["enjeu", "limite", "d'une part, d'autre part", "en revanche", "ainsi"],
      pieges: ["Recopier les documents sans les relier au cours.", "Oublier la définition demandée.", "Ne donner que des avantages quand on demande aussi les limites.", "Écrire en style télégraphique : C6 est perdu."],
      cas: "Document : un vaccin préventif contre un virus protège de 90 % des infections responsables de certains cancers. Des vaccins thérapeutiques présentent au système immunitaire des antigènes de la tumeur d'un patient déjà malade ; ils peuvent créer une mémoire contre une rechute, mais leur efficacité varie selon les patients et ils sont encore en essai.",
      question: "Rédige un argumentaire présentant les enjeux et les limites de la vaccination thérapeutique par rapport à la vaccination préventive.",
      modele: "Un vaccin présente un antigène au système immunitaire pour déclencher une réponse adaptative et créer des cellules mémoire. La vaccination préventive agit avant la maladie : elle empêche l'infection par le virus et réduit fortement le nombre de cancers, avec une protection individuelle et collective. La vaccination thérapeutique, elle, s'adresse à des patients déjà malades : elle présente des antigènes tumoraux pour activer les lymphocytes T cytotoxiques contre les cellules cancéreuses. Son enjeu est double : détruire la tumeur et créer une mémoire immunitaire qui protège d'une rechute. En revanche, ses limites sont nombreuses : son efficacité varie selon les patients, la tumeur peut freiner la réponse immunitaire, et ces vaccins sont encore en essai. La vaccination thérapeutique complète donc la prévention, sans la remplacer.",
      grille: ["J'ai défini la notion centrale.", "J'ai donné au moins deux enjeux appuyés sur le cours.", "J'ai donné au moins une limite.", "Mon texte est rédigé, organisé et conclut."],
    },
  ],
  sujets: [
    {
      id: 'stl-bgb-s1', matiere: 'stl-bgb', titre: "Sujet d'entraînement 1 : un lait sans lactose", duree: 180,
      enonce: `## Sujet d'entraînement 1 (inventé, au format de la session 2027)

Durée : 3 heures. Calculatrice autorisée. L'entreprise, les documents et les chiffres sont fictifs.

Compétences évaluées : C1 analyser un document (3 points), C2 effectuer les calculs (3 points), C3 interpréter des données (5 points), C4 argumenter un choix technique (4 points), C5 élaborer une synthèse (4 points), C6 communiquer à l'écrit (1 point).

### Contexte
Environ deux adultes sur trois dans le monde digèrent mal le lactose, le sucre du lait, car leur intestin produit peu de lactase. La lactase est une enzyme qui hydrolyse le lactose en glucose et galactose. Une laiterie fictive, la Laiterie des Combes, veut produire un lait sans lactose en ajoutant au lait une lactase produite par une levure génétiquement modifiée.

## Partie I – Questionnement scientifique et technologique (durée indicative 2 h 30)

### 1. Produire la levure
**Document 1 : croissance de la levure en bioréacteur** (concentration en cellules par mL). 0 h : 2,0 × 10⁶ ; 2 h : 2,0 × 10⁶ ; 4 h : 4,0 × 10⁶ ; 6 h : 8,0 × 10⁶ ; 8 h : 1,6 × 10⁷ ; 10 h : 3,2 × 10⁷ ; 12 h : 5,0 × 10⁷ ; 14 h : 5,6 × 10⁷ ; 16 h : 5,6 × 10⁷.

**Document 2 : contrôle au microscope à 16 h.** La suspension est diluée au 1/100 puis déposée dans une cellule de Malassez (100 rectangles pour 1 mm³). On compte 56 levures dans 10 rectangles. Avec du bleu de méthylène, 10 levures sur 200 observées sont colorées en bleu.

- Q1 (C1, 1,5 point). Identifier les phases de croissance et indiquer les temps de début et de fin de la phase exponentielle.
- Q2 (C2, 1 point). Calculer le temps de génération de la levure en phase exponentielle.
- Q3 (C2, 1 point). Calculer la concentration en levures à 16 h et le pourcentage de levures vivantes.
- Q4 (C4, 1 point). La lactase est produite surtout en fin de phase exponentielle. Argumenter le choix de récolter les levures vers 12 h plutôt qu'à 4 h.

### 2. Vérifier la présence du gène de la lactase
**Document 3 : plasmide utilisé.** Il contient une origine de réplication, un gène de résistance à un antibiotique, un promoteur fort de levure et le gène de la lactase, encadré par deux sites de restriction.

**Document 4 : électrophorèse des produits de PCR** (taille attendue : 850 pb). Piste 1 : marqueur (1 000, 750, 500, 250 pb). Piste 2 : témoin sans ADN, aucune bande. Piste 3 : témoin positif, une bande entre 750 et 1 000 pb. Pistes 4 à 7, colonies A à D : A une bande à la hauteur du témoin positif ; B aucune bande ; C une bande à la hauteur du témoin positif ; D une bande vers 400 pb.

- Q5 (C1, 1,5 point). Indiquer le rôle de l'origine de réplication et celui du gène de résistance à un antibiotique dans le plasmide.
- Q6 (C3, 2 points). Interpréter l'électrophorèse et indiquer les colonies à conserver.
- Q7 (C4, 1,5 point). Argumenter la nécessité des pistes 2 et 3.

### 3. Doser l'activité de la lactase
**Document 5 : principe du dosage.** La lactase hydrolyse aussi un substrat incolore, l'ONPG, en galactose et en ONP, jaune, qui absorbe à 420 nm. Dans les conditions du dosage, ε(ONP, 420 nm) = 4 500 L·mol⁻¹·cm⁻¹. Tube : 2,9 mL d'ONPG en tampon, à 37 °C, puis 0,1 mL d'extrait enzymatique. Cuve de 1 cm. Dans la période initiale, ΔA = 0,135 par minute.

**Document 6 : contrôle et purification.** Un étalon de contrôle de lactase a une valeur de référence de 1 000 UI/L, avec une erreur maximale tolérée de 80 UI/L ; il est mesuré le même jour à 1 060 UI/L. Purification de l'extrait : avant, activité totale 4 500 UI pour 900 mg de protéines ; après une chromatographie, 2 700 UI pour 45 mg de protéines.

- Q8 (C3, 1 point). Expliquer pourquoi l'absorbance augmente au cours du dosage.
- Q9 (C2, 1 point). Calculer la concentration d'activité catalytique de la lactase dans l'extrait, en UI/L.
- Q10 (C3, 1 point). Vérifier que les résultats du jour peuvent être rendus.
- Q11 (C3, 1 point). Calculer le facteur d'enrichissement et le rendement de la purification, puis conclure.
- Q12 (C4, 1,5 point). Argumenter le choix de travailler en substrat saturant, à pH et température fixés.
- Q13 (C5, 1 point). Récapituler sous forme d'un diagramme les étapes de la démarche, de la culture de la levure à l'enzyme purifiée et contrôlée.

## Partie II – Question de synthèse (durée indicative 30 minutes)
**Document 7.** Les enzymes utilisées en agroalimentaire sont souvent produites par des micro-organismes génétiquement modifiés. L'enzyme purifiée ajoutée au lait ne contient plus le micro-organisme. Une partie des consommateurs se méfie des produits liés aux organismes génétiquement modifiés ; la réglementation impose des contrôles de sécurité avant toute autorisation.

- Q14 (C5, 3 points). Rédiger un argumentaire présentant l'intérêt et les limites de la production d'une lactase par une levure génétiquement modifiée pour fabriquer un lait sans lactose.`,
      corrige: `## Corrigé

### Q1 (C1)
- De 0 à 2 h, la concentration reste à 2,0 × 10⁶ cellules par mL : **phase de latence**.
- De **2 h à 10 h**, elle double toutes les 2 heures : **phase exponentielle**.
- De 10 h à 12 h : ralentissement ; à partir de 14 h, plateau à 5,6 × 10⁷ : **phase stationnaire**.

### Q2 (C2)
- Entre 2 h et 10 h : 2,0 × 10⁶ → 3,2 × 10⁷, soit × 16 = 2 puissance 4 : **4 générations** en 8 h.
- **G = 8 ÷ 4 = 2 h**.

### Q3 (C2)
- 10 rectangles = 0,1 mm³ ; 56 ÷ 0,1 = 560 levures par mm³ = 5,6 × 10⁵ par mL ; × 100 (dilution) = **5,6 × 10⁷ levures par mL**, ce qui correspond au plateau du document 1.
- Viabilité : 190 vivantes sur 200 : **95 %**.

### Q4 (C4)
- À 4 h, les levures sont peu nombreuses (4,0 × 10⁶ par mL) et la lactase n'est pas encore produite en quantité.
- Vers 12 h, la population est presque maximale (5,0 × 10⁷ par mL, plus de dix fois plus) et on est en fin de phase exponentielle, quand la lactase est produite : la récolte donne beaucoup plus d'enzyme, avec des cellules encore vivantes.

### Q5 (C1)
- L'**origine de réplication** permet au plasmide d'être copié dans la cellule et transmis aux cellules filles.
- Le **gène de résistance** permet de **sélectionner** les cellules transformées : seules celles qui ont le plasmide poussent en présence de l'antibiotique.

### Q6 (C3)
- Témoin négatif sans bande : pas de contamination. Témoin positif avec une bande entre 750 et 1 000 pb : la PCR a fonctionné. La manipulation est valide.
- Colonies A et C : bande à la hauteur du témoin positif, vers 850 pb : elles possèdent le gène.
- Colonie B : pas de bande, le gène est absent.
- Colonie D : bande vers 400 pb, ce n'est pas la taille attendue.
- On conserve **A et C**.

### Q7 (C4)
- Piste 2 (sans ADN) : elle vérifie qu'aucun réactif n'est contaminé par de l'ADN. Une bande dans les pistes des colonies pourrait sinon venir d'une contamination (faux positif).
- Piste 3 (témoin positif) : elle vérifie que la PCR fonctionne. Sans elle, une absence de bande (colonie B) pourrait venir d'un échec de la technique (faux négatif).

### Q8 (C3)
- La lactase hydrolyse l'ONPG incolore en ONP jaune, qui absorbe à 420 nm.
- Plus la réaction avance, plus il y a d'ONP : d'après la loi de Beer-Lambert, l'absorbance augmente avec sa concentration.

### Q9 (C2)
- b = (ΔA/Δt) ÷ (ε × l) × VMR ÷ VE, avec VMR = 2,9 + 0,1 = 3,0 mL et VE = 0,1 mL.
- Unités : min⁻¹ ÷ (L·mol⁻¹·cm⁻¹ × cm) = mol·L⁻¹·min⁻¹.
- 0,135 ÷ 4 500 = 3,0 × 10⁻⁵ mol·L⁻¹·min⁻¹ ; × (3,0 ÷ 0,1 = 30) = 9,0 × 10⁻⁴ mol·L⁻¹·min⁻¹ = 900 µmol·min⁻¹·L⁻¹.
- **b = 900 UI/L**.

### Q10 (C3)
- Écart de l'étalon : 1 060 − 1 000 = 60 UI/L, inférieur à l'EMT de 80 UI/L.
- La série est **acceptable** : le résultat de 900 UI/L peut être rendu.

### Q11 (C3)
- Activité spécifique avant : 4 500 ÷ 900 = 5 UI/mg ; après : 2 700 ÷ 45 = 60 UI/mg.
- Facteur d'enrichissement = 60 ÷ 5 = **12** ; rendement = 2 700 ÷ 4 500 × 100 = **60 %**.
- L'enzyme est douze fois plus pure, au prix de la perte de 40 % de l'activité : la chromatographie est efficace.

### Q12 (C4)
- Le substrat saturant permet à la vitesse de ne dépendre que de la quantité d'enzyme, donc de mesurer son activité.
- Le pH (tampon) et la température (37 °C) modifient l'activité : en les fixant aux valeurs choisies, les mesures sont comparables d'un jour à l'autre et avec l'étalon de contrôle.

### Q13 (C5)
- Culture de la levure recombinante en bioréacteur → suivi de la croissance et récolte vers 12 h → contrôle au microscope (concentration, viabilité) → vérification du gène par PCR et électrophorèse → extraction puis purification de la lactase par chromatographie → dosage de l'activité avec étalon de contrôle → enzyme purifiée et contrôlée.

### Q14 (C5 et C6)
Une réponse attendue : la lactase est l'enzyme qui hydrolyse le lactose en glucose et galactose, deux sucres que les personnes intolérantes absorbent sans troubles. La produire par une levure génétiquement modifiée a plusieurs intérêts. D'une part, la levure se multiplie vite en bioréacteur : on obtient de grandes quantités d'enzyme, à un coût plus faible qu'en l'extrayant d'un organisme naturel. D'autre part, l'enzyme est purifiée et contrôlée (activité, pureté), et le produit final ne contient plus le micro-organisme. Le lait sans lactose permet ainsi aux personnes intolérantes de consommer des produits laitiers. En revanche, il existe des limites : une partie des consommateurs se méfie des organismes génétiquement modifiés, même quand l'enzyme est purifiée ; la production demande des contrôles de sécurité stricts et une autorisation réglementaire ; enfin, le travail avec un organisme modifié impose un confinement pour éviter sa dissémination. Ce procédé est donc efficace, à condition d'être encadré et d'informer clairement les consommateurs.`,
      grille: [
        { c: "C1 Analyser un document : phases de croissance (Q1) et rôle des éléments du plasmide (Q5)", pts: 3 },
        { c: "C2 Effectuer les calculs : temps de génération, dénombrement et viabilité, activité catalytique (Q2, Q3, Q9)", pts: 3 },
        { c: "C3 Interpréter des données : électrophorèse, absorbance, étalon de contrôle, purification (Q6, Q8, Q10, Q11)", pts: 5 },
        { c: "C4 Argumenter un choix technique : moment de récolte, témoins, conditions du dosage (Q4, Q7, Q12)", pts: 4 },
        { c: "C5 Élaborer une synthèse : diagramme de la démarche et argumentaire (Q13, Q14)", pts: 4 },
        { c: "C6 Communiquer à l'écrit : phrases correctes, vocabulaire scientifique, unités", pts: 1 },
      ],
    },
  ],
};
