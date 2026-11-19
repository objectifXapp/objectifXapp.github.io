// Histoire-géographie, géopolitique et sciences politiques (HGGSP) — terminale, voie générale. Sources : voir matiere.sources.
// Programme : arrêté du 19 juillet 2019 (BO spécial n° 8 du 25 juillet 2019), toujours en vigueur pour le bac 2027.
// Épreuve : note de service du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026), en vigueur à partir de la session 2027.
// Rotation des thèmes : en session impaire (2027), l'écrit porte sur les thèmes 2, 4, 5 et 6. Les thèmes 1 et 3 restent au programme
// (cours, grand oral) mais ne tombent pas à l'écrit en 2027. Les thèmes évaluables sont coupés en deux chapitres.
export default {
  matiere: {
    id: 'hggsp',
    nom: 'Histoire-géographie, géopolitique et sciences politiques',
    voie: 'generale',
    epreuve: { type: 'ecrit', duree: 240, coef: 16, quand: 'juin', note: 'Une dissertation (au choix entre deux sujets) et une étude critique de document(s). En 2027, seuls les thèmes 2, 4, 5 et 6 sont évaluables à l\'écrit.' },
    sources: [
      'https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/18/0/spe254_annexe_1159180.pdf',
      'https://www.education.gouv.fr/bo/19/Special8/MENE1921254A.htm',
      'https://www.education.gouv.fr/bo/2026/Special4/MENE2622655N',
      'https://www.education.gouv.fr/sites/default/files/document/annexe-i-themes-evaluables-dans-le-cadre-de-l-epreuve-terminale-de-l-enseignement-de-specialite.pdf',
      'https://eduscol.education.gouv.fr/5802/programmes-et-ressources-en-histoire-geographie-geopolitique-et-sciences-politiques-voie-g',
      'Sujets officiels 2025 : métropole jour 1 (25-HGGSPJ1ME1), métropole jour 2 (25-HGGSPJ2ME1), centres étrangers jour 1 (25-HGGSPJ1G11)',
    ],
    chapitres: [
      { id: 'hggsp-1', t: 'De nouveaux espaces de conquête : l\'espace et les océans', theme: 'Thème 1 (pas à l\'écrit en 2027)' },
      { id: 'hggsp-2', t: 'Faire la guerre : la dimension politique de la guerre, de Clausewitz à Daech', theme: 'Thème 2 : faire la guerre, faire la paix' },
      { id: 'hggsp-3', t: 'Faire la paix : traités, sécurité collective et Moyen-Orient', theme: 'Thème 2 : faire la guerre, faire la paix' },
      { id: 'hggsp-4', t: 'Histoire et mémoires, histoire et justice', theme: 'Thème 3 (pas à l\'écrit en 2027)' },
      { id: 'hggsp-5', t: 'Le patrimoine : une notion qui s\'élargit et des usages politiques', theme: 'Thème 4 : le patrimoine' },
      { id: 'hggsp-6', t: 'Préserver le patrimoine : tensions, concurrences et politique française', theme: 'Thème 4 : le patrimoine' },
      { id: 'hggsp-7', t: 'L\'environnement : exploiter, préserver et protéger', theme: 'Thème 5 : l\'environnement' },
      { id: 'hggsp-8', t: 'Le changement climatique et les États-Unis face à l\'environnement', theme: 'Thème 5 : l\'environnement' },
      { id: 'hggsp-9', t: 'Produire et diffuser des connaissances', theme: 'Thème 6 : l\'enjeu de la connaissance' },
      { id: 'hggsp-10', t: 'La connaissance, enjeu de puissance : renseignement, Inde et cyberespace', theme: 'Thème 6 : l\'enjeu de la connaissance' },
    ],
  },
  paquets: [
    {
      chapitre: 'hggsp-1',
      fiche: `## De nouveaux espaces de conquête : l'espace et les océans

Attention : en 2027, ce thème ne tombe pas à l'épreuve écrite (rotation des thèmes). Il reste utile pour le grand oral et pour illustrer d'autres sujets (puissance, Chine, cyberespace).

### Océan et espace : des espaces à part
- Ce sont les **dernières frontières** : des espaces immenses, hostiles à l'homme, encore mal connus (les grands fonds marins sont moins bien cartographiés que la surface de la Lune).
- Leur maîtrise dépend de la **technologie** : seuls quelques États (et désormais des entreprises) peuvent y aller.
- Ce sont des espaces de **puissance** : militaire, économique, scientifique et symbolique (le prestige).

### Axe 1 : la course à l'espace, de la guerre froide aux nouveaux acteurs
- **4 octobre 1957** : l'URSS lance **Spoutnik 1**, premier satellite artificiel. **12 avril 1961** : **Youri Gagarine**, premier homme dans l'espace.
- Réponse américaine : création de la **NASA** (1958), programme **Apollo** ; en **juillet 1969**, Neil Armstrong marche sur la Lune (Apollo 11).
- La course à l'espace est une **vitrine** de la guerre froide : la fusée qui lance un satellite peut aussi porter une bombe nucléaire (missile balistique).
- **Traité de l'espace (1967)** : l'espace ne peut être approprié par aucun État et on ne peut pas y placer d'armes nucléaires.
- Les **nouveaux acteurs** : la **Chine** (premier taïkonaute en 2003), l'**Inde** (sonde Chandrayaan-3 posée près du pôle Sud de la Lune en 2023), et les **entreprises privées** du **NewSpace** comme **SpaceX** (fusées réutilisables, constellation Starlink).
- L'espace est de plus en plus **militarisé** : tir antisatellite chinois (2007), création de l'**US Space Force** (2019) et du **Commandement de l'espace** français (2019).

### Axe 1 : la puissance par la mer
- **Dissuasion nucléaire** : les **SNLE** (sous-marins nucléaires lanceurs d'engins) sont presque impossibles à détecter, ce qui garantit une riposte. La France en a toujours au moins un en patrouille depuis 1972 (base de l'Île Longue, près de Brest).
- **Forces de projection** : les **porte-avions** permettent d'intervenir loin. Les États-Unis en ont 11 ; la France a le Charles-de-Gaulle.
- Contrôler les **routes maritimes** et les **détroits** (Ormuz, Malacca) est vital : l'essentiel du commerce mondial passe par la mer.

### Axe 2 : coopérer et partager
- **Station spatiale internationale (ISS)** : assemblée à partir de 1998, occupée en permanence depuis 2000. Partenaires : États-Unis, Russie, Europe, Japon, Canada. La Chine en est exclue et a construit sa propre station, **Tiangong**.
- **Convention de Montego Bay** (Convention des Nations unies sur le droit de la mer, signée en **1982**, en vigueur en 1994) :
  - **mer territoriale** : 12 milles marins, souveraineté de l'État ;
  - **ZEE** (zone économique exclusive) : 200 milles, l'État exploite seul les ressources ;
  - au-delà, la **haute mer**, libre et commune.
- La France a le **deuxième domaine maritime du monde** (environ 10 millions de km²), grâce à ses outre-mer.
- **Accord BBNJ** (biodiversité marine au-delà des juridictions nationales), adopté en **2023**, entré en vigueur en janvier 2026 : il permet de créer des aires marines protégées en haute mer.

### Objet conclusif : la Chine à la conquête de l'espace et des mers
- Une **volonté politique** : le « rêve chinois » de **Xi Jinping**, les **nouvelles routes de la soie** (2013), dont une route maritime.
- Dans l'espace : station Tiangong, **Chang'e 4** (premier engin posé sur la face cachée de la Lune, 2019), rover sur Mars (2021), système de navigation **BeiDou**.
- En mer : la plus grande marine de guerre du monde en nombre de navires, des porte-avions, une base à **Djibouti** (2017), des **îles artificielles** en mer de Chine méridionale.
- Des tensions : la Chine revendique presque toute la mer de Chine méridionale ; en **2016**, la Cour permanente d'arbitrage donne raison aux Philippines, mais Pékin rejette la décision.

### À retenir pour le bac
- Spoutnik 1957, Gagarine 1961, Apollo 11 en 1969, traité de l'espace 1967, Montego Bay 1982.
- Les mots clés : **dissuasion**, **projection**, **ZEE**, **haute mer**, **NewSpace**, **militarisation**.
- Montrer la double logique du thème : **rivalités** (axe 1) mais aussi **coopérations** (axe 2).
- Piège : la ZEE n'est pas un territoire souverain ; l'État n'y a que des droits sur les ressources.`,
      cartes: [
        { q: "Quel est le premier satellite artificiel, et quand est-il lancé ?", r: "Spoutnik 1, lancé par l'URSS le 4 octobre 1957." },
        { q: "Qui est le premier homme dans l'espace ?", r: "Le Soviétique Youri Gagarine, le 12 avril 1961." },
        { q: "Quand l'homme marche-t-il sur la Lune pour la première fois ?", r: "En juillet 1969, avec la mission américaine Apollo 11 (Neil Armstrong)." },
        { q: "Que dit le traité de l'espace de 1967 ?", r: "Aucun État ne peut s'approprier l'espace ou un corps céleste, et il est interdit d'y placer des armes nucléaires." },
        { q: "Qu'est-ce que le NewSpace ?", r: "L'arrivée d'entreprises privées dans le spatial (SpaceX, Blue Origin…), avec des fusées moins chères et réutilisables." },
        { q: "Qu'est-ce qu'un SNLE ?", r: "Un sous-marin nucléaire lanceur d'engins : il porte des missiles nucléaires et reste caché, ce qui garantit la riposte (dissuasion)." },
        { q: "Qu'est-ce qu'une force de projection ?", r: "Des moyens militaires capables d'intervenir loin du territoire, surtout les porte-avions et leurs groupes aéronavals." },
        { q: "Qu'est-ce que la ZEE ?", r: "La zone économique exclusive : jusqu'à 200 milles des côtes, l'État exploite seul les ressources de la mer et du sous-sol." },
        { q: "Quelle convention crée les ZEE, et quand ?", r: "La convention de Montego Bay (droit de la mer), signée en 1982, en vigueur en 1994." },
        { q: "Quelle est la largeur de la mer territoriale ?", r: "12 milles marins depuis la côte. L'État y est souverain." },
        { q: "Pourquoi la France a-t-elle un immense domaine maritime ?", r: "Grâce à ses outre-mer (Polynésie, Nouvelle-Calédonie…) : environ 10 millions de km², le deuxième du monde." },
        { q: "Quels pays coopèrent dans l'ISS ?", r: "États-Unis, Russie, Europe (ESA), Japon et Canada. La Chine en est exclue." },
        { q: "Que permet l'accord BBNJ ?", r: "Protéger la biodiversité de la haute mer, par exemple en créant des aires marines protégées. Adopté en 2023." },
        { q: "Qu'a fait la sonde chinoise Chang'e 4 ?", r: "En 2019, elle est le premier engin à se poser sur la face cachée de la Lune." },
        { q: "Pourquoi la Chine construit-elle des îles artificielles ?", r: "Pour appuyer ses revendications en mer de Chine méridionale et y installer des pistes et des ports militaires." },
      ],
      quiz: [
        { q: "Quel événement ouvre la course à l'espace ?", choix: ["Le vol de Youri Gagarine", "Le lancement de Spoutnik 1", "La création de la NASA par les États-Unis", "La mission Apollo 11"], bonne: 1, expl: "Spoutnik 1 (URSS, octobre 1957) est le premier satellite. Gagarine vole en 1961 et la NASA est créée en réaction, en 1958.", niv: 1 },
        { q: "En quelle année est signée la convention de Montego Bay ?", choix: ["1994", "2023", "2008", "1982"], bonne: 3, expl: "Elle est signée en 1982 et entre en vigueur en 1994. 2023 est la date de l'accord BBNJ sur la haute mer.", niv: 1 },
        { q: "Quelle est la largeur maximale d'une ZEE ?", choix: ["200 milles marins", "12 milles marins", "100 milles marins", "24 milles marins"], bonne: 0, expl: "La ZEE s'étend jusqu'à 200 milles. 12 milles, c'est la mer territoriale ; 24 milles, la limite de la zone contiguë.", niv: 1 },
        { q: "Un pays pêche dans la ZEE d'un voisin sans accord. Que viole-t-il ?", choix: ["La liberté de la haute mer", "Le droit exclusif du voisin sur les ressources", "La souveraineté totale du voisin sur l'eau et les navires", "Le traité de l'espace de 1967"], bonne: 1, expl: "Dans sa ZEE, un État a seul le droit d'exploiter les ressources. Il n'y est pas pleinement souverain : les navires peuvent y circuler.", niv: 2 },
        { q: "Pourquoi les SNLE sont-ils au cœur de la dissuasion nucléaire ?", choix: ["Ils peuvent débarquer des troupes loin du territoire national", "Ils protègent les routes du commerce", "Ils restent cachés et garantissent la riposte", "Ils servent à surveiller les ZEE"], bonne: 2, expl: "Un SNLE caché sous l'océan garantit qu'un agresseur sera frappé en retour : c'est ce qui dissuade.", niv: 2 },
        { q: "Quel acteur symbolise le mieux le NewSpace ?", choix: ["La NASA", "L'Agence spatiale européenne", "Roscosmos", "SpaceX"], bonne: 3, expl: "SpaceX est une entreprise privée. Les trois autres sont des agences publiques.", niv: 1 },
        { q: "Pourquoi la Chine a-t-elle construit sa propre station spatiale ?", choix: ["Elle est exclue de la coopération autour de l'ISS", "L'ISS a été fermée en 2011", "Le traité de 1967 interdit les stations spatiales communes", "L'ISS n'accueille que des militaires"], bonne: 0, expl: "La Chine ne fait pas partie des partenaires de l'ISS (une loi américaine limite la coopération avec elle). Elle a donc construit Tiangong.", niv: 2 },
        { q: "Un porte-avions envoyé près d'une côte lointaine illustre surtout :", choix: ["la dissuasion nucléaire", "la projection de puissance", "la gestion des océans", "le droit de la mer"], bonne: 1, expl: "Le porte-avions sert à intervenir loin : c'est une force de projection. La dissuasion repose surtout sur les SNLE.", niv: 2 },
        { q: "En 2016, la Cour permanente d'arbitrage tranche sur la mer de Chine méridionale. Quelle est la suite ?", choix: ["La Chine retire ses bases", "Les Philippines perdent leur ZEE", "La Chine rejette la décision de la Cour", "L'ONU envoie des casques bleus"], bonne: 2, expl: "La Cour donne raison aux Philippines, mais Pékin refuse de la reconnaître : le droit international ne suffit pas face à la puissance.", niv: 3 },
        { q: "Quelle affirmation sur le traité de l'espace de 1967 est exacte ?", choix: ["Il réserve l'orbite aux grandes puissances", "Il autorise l'exploitation privée de la Lune", "Il interdit toute activité militaire dans l'espace", "Il interdit les armes nucléaires en orbite"], bonne: 3, expl: "Il interdit d'y placer des armes nucléaires et de s'approprier l'espace, mais n'empêche pas toute activité militaire (satellites espions, par exemple).", niv: 3 },
        { q: "Pourquoi la France possède-t-elle le deuxième domaine maritime mondial ?", choix: ["Ses territoires d'outre-mer dans tous les océans", "Sa longue façade atlantique", "Ses accords de pêche avec ses voisins européens de l'Atlantique", "Sa flotte de sous-marins nucléaires"], bonne: 0, expl: "Ce sont les outre-mer (Polynésie, Nouvelle-Calédonie, Kerguelen…) qui donnent à la France l'essentiel de ses ZEE.", niv: 2 },
        { q: "Pourquoi dit-on que l'espace s'est « militarisé » au XXIe siècle ?", choix: ["Les États y placent des armes nucléaires", "Les stations spatiales sont devenues des bases", "Des États créent des commandements militaires de l'espace", "Le traité de 1967 a été abrogé"], bonne: 2, expl: "La France et les États-Unis ont créé en 2019 un commandement ou une armée de l'espace. Les armes nucléaires y restent interdites et le traité de 1967 est toujours en vigueur.", niv: 3 },
      ],
    },
    {
      chapitre: 'hggsp-2',
      fiche: `## Faire la guerre : la dimension politique de la guerre, de Clausewitz à Daech

### Introduction : les conflits dans le monde actuel
- Une **guerre** est un affrontement armé organisé entre groupes politiques. Un **conflit** est plus large : il peut rester sans combat.
- On distingue plusieurs types de conflits :
  - **interétatique** : entre États (invasion de l'Ukraine par la Russie le 24 février 2022) ;
  - **intraétatique** ou **guerre civile** : à l'intérieur d'un État (Syrie depuis 2011, Soudan depuis 2023) ;
  - **asymétrique** : entre adversaires de forces très inégales, souvent un État contre un groupe armé ;
  - **hybride** : qui mêle armée, cyberattaques, désinformation et pressions économiques.
- Les acteurs ne sont plus seulement des États : milices, groupes **terroristes**, sociétés militaires privées.

### Clausewitz : la guerre comme acte politique
- **Carl von Clausewitz** (1780-1831) est un officier prussien. Il combat Napoléon (il est fait prisonnier après la défaite prussienne de 1806 et sert l'armée russe en 1812).
- Son livre **De la guerre** est publié après sa mort, en **1832**.
- Sa formule : la guerre est « **la continuation de la politique par d'autres moyens** ». Elle n'a pas de sens en elle-même : elle sert un **but politique** fixé par l'État.
- Sa **trinité** : le **peuple** (les passions, la violence), l'**armée** et son chef (le hasard, le talent), le **gouvernement** (la raison politique).
- Autres idées : la **montée aux extrêmes** (chaque camp pousse l'autre à plus de violence), le **brouillard de la guerre** (on décide sans tout savoir), la **friction** (tout est plus difficile que prévu), la recherche de la **bataille décisive**.

### Jalon 1 : de la guerre de Sept Ans aux guerres napoléoniennes
- **Guerre de Sept Ans (1756-1763)** : la Prusse de Frédéric II et la Grande-Bretagne contre la France, l'Autriche et la Russie. C'est une guerre **mondiale** (Europe, Amérique du Nord, Inde, mers).
- Elle reste une guerre **limitée** : armées professionnelles, buts territoriaux, fin négociée. Au **traité de Paris (1763)**, la France perd la Nouvelle-France (Canada) et presque toute l'Inde.
- **La Révolution change la guerre** : la **levée en masse** (1793) crée la **nation en armes**. Les guerres deviennent des guerres de peuples, beaucoup plus meurtrières.
- **Guerres napoléoniennes** (jusqu'en 1815) : grandes batailles décisives (**Austerlitz**, 2 décembre 1805 ; **Iéna**, 1806), mais aussi la **guérilla** en Espagne (à partir de 1808) et la désastreuse campagne de Russie (1812). Défaite finale à **Waterloo**, le 18 juin 1815, puis **congrès de Vienne**.
- Clausewitz tire sa théorie de ces guerres qu'il a vécues.

### Jalon 2 : le modèle de Clausewitz à l'épreuve des « guerres irrégulières »
- Une **guerre irrégulière** oppose une armée régulière à des combattants qui ne respectent pas les règles classiques (pas d'uniforme, pas de front, attaques contre des civils).
- **Al-Qaïda** : réseau **djihadiste** fondé vers 1988 par **Oussama ben Laden**. Il veut chasser les Occidentaux du monde musulman. Les **attentats du 11 septembre 2001** (près de 3 000 morts) entraînent la guerre en Afghanistan (octobre 2001) et la « guerre contre le terrorisme ». Ben Laden est tué en 2011 au Pakistan.
- Al-Qaïda est un **réseau** déterritorialisé, avec des branches régionales (AQMI au Sahel, AQPA au Yémen).
- **Daech** (« État islamique ») naît de la branche irakienne d'Al-Qaïda. En **juin 2014**, **Abou Bakr al-Baghdadi** proclame un **califat** à cheval sur l'Irak et la Syrie (capitale : Raqqa). C'est un **proto-État** : territoire, impôts, administration, armée.
- Daech organise ou inspire des attentats en Europe (Paris, **13 novembre 2015** : 130 morts). Une coalition menée par les États-Unis (la France avec l'opération Chammal) le prive de son territoire : chute de Mossoul et de Raqqa (2017), puis de Baghouz (2019).
- Ces groupes sont des **acteurs non étatiques transnationaux**. Clausewitz reste utile : le terrorisme a des **buts politiques**. Mais il n'y a plus d'État en face, plus de front, plus de paix signée possible.

### À retenir pour le bac
- La formule de Clausewitz, citée exactement, avec l'auteur et l'œuvre (De la guerre, 1832).
- Opposer **guerre régulière** (États, armées, batailles, traités) et **guerre irrégulière** (acteurs non étatiques, terrorisme, asymétrie).
- Dates : 1756-1763, 1793, 1805, 1815, 11 septembre 2001, 2014, 13 novembre 2015.
- Piège : ne pas dire que Clausewitz est « dépassé ». Le bon raisonnement : sa définition politique de la guerre tient encore, mais le cadre « État contre État » est remis en cause.`,
      cartes: [
        { q: "Quelle est la formule la plus célèbre de Clausewitz ?", r: "« La guerre est la continuation de la politique par d'autres moyens » (De la guerre, publié en 1832)." },
        { q: "Qui est Clausewitz ?", r: "Un officier prussien (1780-1831) qui a combattu Napoléon et a théorisé la guerre dans De la guerre." },
        { q: "Quels sont les trois éléments de la trinité de Clausewitz ?", r: "Le peuple (les passions), l'armée et son chef (le hasard et le talent), le gouvernement (la raison politique)." },
        { q: "Qu'appelle-t-on la « montée aux extrêmes » ?", r: "Chez Clausewitz, chaque camp pousse l'autre à employer toujours plus de force : la guerre tend vers la violence absolue." },
        { q: "Quelles sont les dates de la guerre de Sept Ans ?", r: "1756-1763. Elle se termine par le traité de Paris : la France perd le Canada et presque toute l'Inde." },
        { q: "Pourquoi la guerre de Sept Ans est-elle une guerre « limitée » ?", r: "Armées professionnelles, buts territoriaux précis, fin négociée par un traité : on ne cherche pas à détruire l'ennemi." },
        { q: "Qu'est-ce que la levée en masse ?", r: "La mobilisation des citoyens décidée par la Révolution en 1793 : la nation entière fait la guerre." },
        { q: "Quand a lieu la bataille d'Austerlitz ?", r: "Le 2 décembre 1805. C'est l'exemple type de la bataille décisive napoléonienne." },
        { q: "D'où vient le mot « guérilla » ?", r: "De la résistance espagnole contre les armées de Napoléon, à partir de 1808 : une « petite guerre » de harcèlement." },
        { q: "Qu'est-ce qu'un conflit asymétrique ?", r: "Un conflit entre adversaires de forces très inégales, par exemple une armée d'État contre un groupe armé." },
        { q: "Qui fonde Al-Qaïda et vers quand ?", r: "Oussama ben Laden, vers 1988. Il est tué par un commando américain au Pakistan en 2011." },
        { q: "Quelle est la conséquence directe du 11 septembre 2001 ?", r: "La guerre en Afghanistan (octobre 2001) et la « guerre contre le terrorisme » lancée par les États-Unis." },
        { q: "Quand et par qui le califat de Daech est-il proclamé ?", r: "En juin 2014, par Abou Bakr al-Baghdadi, sur un territoire à cheval entre l'Irak et la Syrie." },
        { q: "Pourquoi dit-on que Daech est un « proto-État » ?", r: "Il contrôle un territoire, lève des impôts, a une administration et une armée, sans être reconnu comme État." },
        { q: "Quand Daech perd-il son dernier territoire ?", r: "En 2019, à Baghouz (Syrie), après la chute de Mossoul et de Raqqa en 2017." },
      ],
      quiz: [
        { q: "Dans quelle œuvre Clausewitz définit-il la guerre comme continuation de la politique ?", choix: ["L'Art de la guerre", "Le Prince", "De la guerre", "Le Léviathan"], bonne: 2, expl: "De la guerre est publié en 1832. L'Art de la guerre est de Sun Tzu, Le Prince de Machiavel, Le Léviathan de Hobbes.", niv: 1 },
        { q: "Dans la trinité de Clausewitz, à quoi correspond le gouvernement ?", choix: ["Aux passions et à la violence", "À la raison politique", "Au hasard des combats", "Au talent du chef"], bonne: 1, expl: "Le gouvernement apporte la raison politique. Les passions relèvent du peuple ; le hasard et le talent, de l'armée et de son chef.", niv: 1 },
        { q: "Quelles sont les dates de la guerre de Sept Ans ?", choix: ["1756-1763", "1618-1648", "1792-1799", "1803-1815"], bonne: 0, expl: "1618-1648, c'est la guerre de Trente Ans ; 1803-1815, les guerres napoléoniennes.", niv: 1 },
        { q: "Quelle innovation révolutionnaire transforme la guerre à partir de 1793 ?", choix: ["La guérilla", "La dissuasion", "Le blocus continental", "La levée en masse"], bonne: 3, expl: "La levée en masse fait de la nation entière une armée. Le blocus continental (1806) est une arme économique napoléonienne.", niv: 1 },
        { q: "Un État envahit son voisin pour lui prendre une province, puis signe un traité. C'est :", choix: ["une guerre irrégulière", "une guerre interétatique", "une guerre civile", "un conflit hybride entre deux blocs"], bonne: 1, expl: "Deux États, une armée, un but territorial, un traité : c'est le modèle classique de la guerre interétatique.", niv: 2 },
        { q: "Un groupe armé sans uniforme harcèle une armée régulière par des embuscades. On parle de :", choix: ["bataille décisive", "guerre de position", "guérilla", "montée aux extrêmes"], bonne: 2, expl: "La guérilla évite la bataille rangée et harcèle l'ennemi. Le mot vient de la résistance espagnole contre Napoléon.", niv: 2 },
        { q: "Pourquoi Daech est-il souvent qualifié de proto-État ?", choix: ["Il contrôle un territoire et lève des impôts", "Il siège comme observateur à l'ONU", "Il a été reconnu par la Syrie en 2014", "Il agit seulement par des attentats isolés"], bonne: 0, expl: "Daech a eu un territoire, une administration et une fiscalité, sans aucune reconnaissance internationale.", niv: 2 },
        { q: "Quelle différence majeure sépare Al-Qaïda de Daech vers 2014 ?", choix: ["Al-Qaïda refuse le djihad armé", "Daech n'a aucune ambition hors du Moyen-Orient", "Al-Qaïda est un État reconnu", "Daech contrôle un vaste territoire"], bonne: 3, expl: "Al-Qaïda est surtout un réseau déterritorialisé ; Daech proclame un califat et tient un territoire entre l'Irak et la Syrie.", niv: 3 },
        { q: "Après le 11 septembre 2001, quel pays les États-Unis attaquent-ils d'abord ?", choix: ["L'Irak", "L'Afghanistan", "L'Arabie saoudite", "L'Iran"], bonne: 1, expl: "L'Afghanistan des talibans abritait Ben Laden : la guerre commence en octobre 2001. L'Irak est envahi en 2003.", niv: 2 },
        { q: "Quel argument montre que le modèle de Clausewitz garde une valeur face au terrorisme ?", choix: ["Les terroristes poursuivent des buts politiques", "Les terroristes portent un uniforme", "Les attentats visent des cibles militaires", "Les groupes terroristes signent des traités"], bonne: 0, expl: "Le terrorisme reste un moyen au service d'un projet politique. Mais il vise des civils et ne se termine pas par un traité.", niv: 3 },
        { q: "Que perd surtout la France au traité de Paris de 1763 ?", choix: ["L'Alsace et la Lorraine, cédées à la Prusse", "La Corse et la Savoie", "Le Canada et presque toute l'Inde", "Les Antilles et la Guyane"], bonne: 2, expl: "La France perd la Nouvelle-France et ses positions en Inde. Elle garde les Antilles, plus rentables à l'époque.", niv: 2 },
        { q: "Pourquoi la guerre contre Daech est-elle dite asymétrique ?", choix: ["Elle oppose deux coalitions d'États aux armées de force égale", "Elle se déroule dans les airs et dans l'espace", "Elle a épargné les populations civiles", "Elle oppose des États à un groupe armé non étatique"], bonne: 3, expl: "Une coalition d'États dotés d'armées modernes affronte un groupe armé : les forces et les méthodes sont très inégales.", niv: 3 },
      ],
    },
    {
      chapitre: 'hggsp-3',
      fiche: `## Faire la paix : traités, sécurité collective et Moyen-Orient

### Faire la paix, c'est quoi ?
- La **paix** n'est pas seulement l'absence de guerre : c'est un **ordre** accepté, souvent fixé par un **traité** (accord écrit entre États).
- Deux grandes façons de faire la paix : par les **traités** (les belligérants négocient) et par la **sécurité collective** (une organisation internationale protège chaque État : une attaque contre l'un concerne tous).
- On distingue le **maintien de la paix** (surveiller un cessez-le-feu), l'**imposition de la paix** (utiliser la force) et la **consolidation de la paix** (reconstruire l'État après la guerre).

### Jalon 1 : les traités de Westphalie (1648)
- Ils mettent fin à la **guerre de Trente Ans** (1618-1648), qui a ravagé le Saint-Empire, à la fois guerre de religion et guerre entre puissances.
- Ils sont négociés pendant des années dans deux villes, **Münster** et **Osnabrück** : c'est le premier grand **congrès diplomatique** européen.
- Contenu : les princes allemands sont presque souverains, le **calvinisme** est reconnu à côté du catholicisme et du luthéranisme, l'indépendance des **Provinces-Unies** et de la Suisse est reconnue, la France gagne une grande partie de l'**Alsace**.
- On parle ensuite d'**ordre westphalien** : des **États souverains**, égaux en droit, qui ne se mêlent pas des affaires religieuses des autres, et un **équilibre des puissances**. Les historiens rappellent que cette idée a été en partie construite après coup.

### Jalon 2 : la sécurité collective et l'ONU de Kofi Annan (1997-2006)
- L'**ONU** est créée par la **charte de San Francisco** (26 juin 1945). Le **Conseil de sécurité** a 5 membres permanents avec **droit de veto** (États-Unis, Russie, Chine, France, Royaume-Uni). Le **chapitre VII** de la charte permet l'usage de la force.
- **Kofi Annan** (Ghana) est secrétaire général de **1997 à 2006**. Il arrive après les grands échecs de l'ONU : le génocide des Tutsis au **Rwanda** (1994) et le massacre de **Srebrenica** (1995).
- Ses actions :
  - le **rapport Brahimi** (2000) pour réformer les opérations de paix ;
  - des missions qui administrent des territoires : **Kosovo** (1999), **Timor oriental** (indépendant en 2002) ;
  - les **objectifs du millénaire pour le développement** (2000) ;
  - la **responsabilité de protéger** (adoptée en 2005) : si un État ne protège pas sa population d'un génocide ou de crimes de masse, la communauté internationale doit agir ;
  - la création de la **Commission de consolidation de la paix** (2005) et du **Conseil des droits de l'homme** (2006).
- Il reçoit le **prix Nobel de la paix en 2001**, avec l'ONU.
- Limite : l'ONU dépend de ses membres. En **2003**, les États-Unis envahissent l'Irak sans l'accord du Conseil de sécurité ; Kofi Annan juge cette guerre illégale.

### Objet conclusif : le Moyen-Orient
- **Conflit israélo-arabe, puis israélo-palestinien** :
  - plan de partage de la Palestine voté par l'ONU (**29 novembre 1947**) ; création de l'État d'**Israël** (**14 mai 1948**) ; guerre avec les États arabes et exode de centaines de milliers de Palestiniens (la **Nakba**) ;
  - **guerre des Six Jours** (juin **1967**) : Israël occupe la Cisjordanie, Gaza, Jérusalem-Est, le Golan et le Sinaï. **Résolution 242** de l'ONU : « la paix contre les territoires » ;
  - guerre du **Kippour** (1973), puis **accords de Camp David** (1978) et paix entre l'Égypte et Israël (1979) : le Sinaï est rendu ;
  - **première intifada** (1987) ; **accords d'Oslo** (**13 septembre 1993**) : reconnaissance mutuelle entre Israël et l'OLP, poignée de main **Rabin-Arafat** à Washington, création de l'**Autorité palestinienne** ;
  - échec : assassinat de Rabin (1995), seconde intifada (2000), prise de Gaza par le **Hamas** (2007), guerre à Gaza après l'attaque du Hamas du **7 octobre 2023**.
- **Les deux guerres du Golfe** :
  - **1991** : l'Irak de **Saddam Hussein** a envahi le **Koweït** (août 1990). Avec l'accord de l'ONU, une coalition menée par les États-Unis le libère (opération Tempête du désert). C'est une **guerre interétatique** dans le cadre de la **sécurité collective** ;
  - **2003** : les États-Unis de **George W. Bush** envahissent l'Irak **sans mandat de l'ONU** (la France s'y oppose), au nom d'armes de destruction massive jamais trouvées. Saddam Hussein tombe, mais le pays bascule dans une **guerre civile** et une **insurrection** djihadiste, dont naîtra Daech : on passe à un **conflit asymétrique**.

### À retenir pour le bac
- Westphalie 1648 : souveraineté des États, équilibre, congrès diplomatique.
- ONU 1945, veto, chapitre VII, Kofi Annan 1997-2006, responsabilité de protéger.
- Dates du Moyen-Orient : 1947, 1948, 1967, 1978, 1993, 2003.
- Piège : la guerre de 1991 est autorisée par l'ONU, celle de 2003 ne l'est pas.
- Sujet tombé : « Construire la paix depuis le XVIIe siècle » (bac 2025).`,
      cartes: [
        { q: "Quelle guerre se termine avec les traités de Westphalie ?", r: "La guerre de Trente Ans (1618-1648)." },
        { q: "Dans quelles villes les traités de Westphalie sont-ils négociés ?", r: "À Münster et à Osnabrück, dans le Saint-Empire, entre 1644 et 1648." },
        { q: "Qu'appelle-t-on l'ordre westphalien ?", r: "Un ordre fondé sur des États souverains, égaux en droit, qui ne s'ingèrent pas dans les affaires des autres, et sur l'équilibre des puissances." },
        { q: "Qu'est-ce que la sécurité collective ?", r: "Un système où les États s'engagent ensemble à protéger chacun : une agression contre l'un concerne tous (SDN, puis ONU)." },
        { q: "Quand et où est signée la charte des Nations unies ?", r: "À San Francisco, le 26 juin 1945." },
        { q: "Quels sont les cinq membres permanents du Conseil de sécurité ?", r: "États-Unis, Russie, Chine, France et Royaume-Uni. Chacun a un droit de veto." },
        { q: "Que permet le chapitre VII de la charte de l'ONU ?", r: "Au Conseil de sécurité d'autoriser des sanctions et l'usage de la force en cas de menace contre la paix." },
        { q: "Quand Kofi Annan est-il secrétaire général de l'ONU ?", r: "De 1997 à 2006. Il reçoit le prix Nobel de la paix en 2001 avec l'ONU." },
        { q: "Qu'est-ce que la responsabilité de protéger ?", r: "Principe adopté en 2005 : si un État ne protège pas sa population contre des crimes de masse, la communauté internationale doit agir." },
        { q: "Quels échecs de l'ONU précèdent le mandat de Kofi Annan ?", r: "Le génocide des Tutsis au Rwanda (1994) et le massacre de Srebrenica en Bosnie (1995)." },
        { q: "Quand l'État d'Israël est-il créé ?", r: "Le 14 mai 1948, après le plan de partage voté par l'ONU le 29 novembre 1947." },
        { q: "Que dit la résolution 242 de l'ONU (1967) ?", r: "Elle demande le retrait d'Israël des territoires occupés en échange de la paix : « la paix contre les territoires »." },
        { q: "Que prévoient les accords d'Oslo (1993) ?", r: "La reconnaissance mutuelle d'Israël et de l'OLP et la création d'une Autorité palestinienne autonome." },
        { q: "Pourquoi éclate la guerre du Golfe de 1991 ?", r: "L'Irak de Saddam Hussein a envahi le Koweït en août 1990. Une coalition autorisée par l'ONU le libère en 1991." },
        { q: "Qu'est-ce qui distingue la guerre d'Irak de 2003 de celle de 1991 ?", r: "En 2003, les États-Unis attaquent sans mandat de l'ONU. La guerre entre États devient ensuite un conflit asymétrique." },
      ],
      quiz: [
        { q: "Quelle guerre les traités de Westphalie terminent-ils ?", choix: ["La guerre de Cent Ans", "La guerre de Sept Ans", "La guerre de Succession d'Espagne", "La guerre de Trente Ans"], bonne: 3, expl: "Westphalie (1648) clôt la guerre de Trente Ans (1618-1648). La guerre de Sept Ans se termine en 1763.", niv: 1 },
        { q: "Quel principe est associé à l'ordre westphalien ?", choix: ["La souveraineté des États et leur égalité", "La sécurité collective", "Le droit d'ingérence", "La responsabilité de protéger"], bonne: 0, expl: "Westphalie est associée à la souveraineté et à l'équilibre des puissances. Les trois autres principes datent du XXe ou du XXIe siècle.", niv: 1 },
        { q: "Qui fut secrétaire général de l'ONU de 1997 à 2006 ?", choix: ["Boutros Boutros-Ghali", "Kofi Annan", "Ban Ki-moon", "Javier Pérez de Cuéllar"], bonne: 1, expl: "Kofi Annan succède à Boutros Boutros-Ghali en 1997 et précède Ban Ki-moon (2007-2016).", niv: 1 },
        { q: "Quel accord établit la reconnaissance mutuelle entre Israël et l'OLP ?", choix: ["Les accords de Camp David", "La résolution 242", "Les accords d'Oslo", "Les accords d'Abraham"], bonne: 2, expl: "Oslo (1993) : reconnaissance mutuelle et Autorité palestinienne. Camp David (1978) concerne l'Égypte et Israël.", niv: 1 },
        { q: "Le Conseil de sécurité vote des frappes contre un État agresseur. Sur quoi s'appuie-t-il ?", choix: ["Le chapitre VII de la charte", "Les traités de Westphalie", "La Déclaration universelle de 1948", "Le statut de la Cour pénale internationale"], bonne: 0, expl: "Le chapitre VII permet au Conseil d'autoriser sanctions et usage de la force. La Déclaration de 1948 ne contient pas de mécanisme militaire.", niv: 2 },
        { q: "Pourquoi la responsabilité de protéger remet-elle en cause l'ordre westphalien ?", choix: ["Elle supprime le droit de veto", "Elle limite la souveraineté d'un État criminel", "Elle interdit toutes les guerres entre États", "Elle donne un siège à chaque peuple"], bonne: 1, expl: "Elle permet d'agir dans un État souverain s'il ne protège pas sa population : la souveraineté n'est plus absolue.", niv: 3 },
        { q: "Une mission de l'ONU surveille un cessez-le-feu entre deux armées. C'est :", choix: ["de l'imposition de la paix", "de la consolidation de la paix", "une opération de maintien de la paix", "une intervention unilatérale d'une grande puissance"], bonne: 2, expl: "Surveiller un cessez-le-feu, c'est maintenir la paix. L'imposition suppose la force ; la consolidation, la reconstruction de l'État.", niv: 2 },
        { q: "Quelle conséquence a la guerre des Six Jours (1967) ?", choix: ["Israël rend le Sinaï à l'Égypte", "L'Autorité palestinienne est créée", "La Jordanie annexe la Cisjordanie et Jérusalem-Est", "Israël occupe Gaza et la Cisjordanie"], bonne: 3, expl: "En 1967, Israël occupe Cisjordanie, Gaza, Jérusalem-Est, Golan et Sinaï. Le Sinaï est rendu après la paix de 1979.", niv: 2 },
        { q: "Pourquoi la guerre du Golfe de 1991 illustre-t-elle la sécurité collective ?", choix: ["Une coalition autorisée par l'ONU répond à une agression", "Les États-Unis agissent seuls contre l'Irak", "Elle oppose un État à un groupe terroriste", "Elle se termine par un traité de paix signé entre l'Irak et l'ONU"], bonne: 0, expl: "L'invasion du Koweït est condamnée par l'ONU, qui autorise une coalition à le libérer : c'est la sécurité collective en action.", niv: 2 },
        { q: "Pourquoi la guerre d'Irak de 2003 est-elle très contestée en droit ?", choix: ["Elle oppose l'Irak au Koweït", "Elle n'a jamais reçu de mandat de l'ONU", "Elle est décidée par l'OTAN au nom de la défense collective", "Elle est menée par la France"], bonne: 1, expl: "Les États-Unis et leurs alliés attaquent sans l'accord du Conseil de sécurité. La France s'y oppose en février 2003.", niv: 2 },
        { q: "Après 2003, pourquoi parle-t-on de passage à un conflit asymétrique en Irak ?", choix: ["L'Irak attaque à nouveau le Koweït", "Des casques bleus combattent l'Irak", "Des groupes insurgés affrontent l'armée américaine", "L'Iran envahit le sud du pays"], bonne: 2, expl: "Après la chute de Saddam Hussein, l'armée américaine fait face à des insurgés et à des djihadistes : ce n'est plus une guerre entre États.", niv: 3 },
        { q: "Pourquoi les accords d'Oslo n'ont-ils **pas** abouti à une paix durable ?", choix: ["Ils n'avaient pas été signés par Israël", "L'ONU les a annulés en 1995", "La Jordanie a refusé de les reconnaître", "Les questions clés étaient reportées à plus tard"], bonne: 3, expl: "Frontières, Jérusalem, réfugiés étaient renvoyés à plus tard. L'assassinat de Rabin (1995) et les attentats ont bloqué le processus.", niv: 3 },
      ],
    },
    {
      chapitre: 'hggsp-4',
      fiche: `## Histoire et mémoires, histoire et justice

Attention : en 2027, ce thème ne tombe pas à l'épreuve écrite (rotation des thèmes). Il reste utile pour le grand oral et pour le thème 4 (patrimoine et mémoire).

### Introduction : histoire, mémoire, justice
- La **mémoire** est le souvenir qu'un groupe garde du passé. Elle est **plurielle** (chaque groupe a la sienne), **affective** et sélective.
- L'**histoire** est une connaissance **critique** du passé, construite par les historiens à partir de **sources**. Elle cherche à comprendre, pas à juger.
- **Pierre Nora** a dirigé **Les Lieux de mémoire** (1984-1992). **Henry Rousso** a étudié le « **syndrome de Vichy** » (1987) : un passé qui « ne passe pas ».
- Les **lois mémorielles** fixent une lecture du passé (loi Gayssot de 1990 contre le négationnisme, loi Taubira de 2001 sur l'esclavage).
- Le **crime contre l'humanité** est défini en 1945 pour le procès de Nuremberg. En France, il est **imprescriptible** depuis 1964.
- Le mot **génocide** est inventé en 1944 par le juriste **Raphael Lemkin**. La **convention de l'ONU du 9 décembre 1948** le définit : la destruction voulue de tout ou partie d'un groupe national, ethnique, racial ou religieux.

### Axe 1 : les causes de la Première Guerre mondiale, un débat historique
- **Article 231** du traité de Versailles (1919) : l'Allemagne et ses alliés sont déclarés responsables de la guerre. Les Allemands le vivent comme une humiliation.
- Dans l'entre-deux-guerres, on parle plutôt d'une responsabilité **partagée**.
- En **1961**, l'historien allemand **Fritz Fischer** montre que l'Allemagne avait des **buts de guerre** expansionnistes : grande controverse en RFA.
- En **2012**, **Christopher Clark** (Les Somnambules) insiste sur l'enchaînement des décisions de tous les dirigeants européens.
- Ce débat montre que l'histoire a des **implications politiques** (réparations, réconciliation franco-allemande).

### Axe 1 : mémoires et histoire de la guerre d'Algérie
- La guerre dure de **1954** (1er novembre, « Toussaint rouge ») à **1962** (**accords d'Évian**, 18 mars ; indépendance le 5 juillet).
- Des **mémoires concurrentes** : appelés du contingent, **pieds-noirs** (rapatriés), **harkis** (Algériens ayant servi l'armée française), militants du FLN, immigrés algériens.
- En France, une longue **occultation** : on parle d'« événements ». La loi du **18 octobre 1999** reconnaît enfin l'expression « **guerre d'Algérie** ».
- En Algérie, une **mémoire officielle** glorifie le FLN et les « martyrs ».
- L'historien **Benjamin Stora** (La Gangrène et l'Oubli, 1991) étudie ces mémoires ; il remet en **2021** un rapport sur la réconciliation des mémoires. La torture et le massacre du **17 octobre 1961** à Paris sont progressivement reconnus.

### Axe 2 : la justice face aux génocides et crimes de masse
- **Échelle locale, les tribunaux gacaca** : le génocide des Tutsis au Rwanda (avril-juillet **1994**) fait environ **800 000 morts**. Faute de juges, le Rwanda crée des tribunaux populaires « sur l'herbe ». De 2005 à 2012, ils jugent près de **2 millions** d'affaires. Ils visent la vérité et la réconciliation, mais sont critiqués (droits de la défense).
- **Échelle internationale, le TPIY** : créé par le Conseil de sécurité en **1993**, siège à **La Haye**, fermé en 2017. Il juge les crimes commis en ex-Yougoslavie, dont le **génocide de Srebrenica** (juillet 1995, environ 8 000 morts). Ratko **Mladić** est condamné à perpétuité (2017). Milošević meurt en 2006 avant son jugement.
- Ces tribunaux ouvrent la voie à la **Cour pénale internationale** (statut de Rome, 1998, en fonction depuis 2002).

### Objet conclusif : le génocide des Juifs et des Tsiganes
- **Lieux de mémoire** : **Auschwitz-Birkenau** (musée dès 1947, patrimoine mondial en 1979), **Yad Vashem** à Jérusalem (1953), le **Mémorial de la Shoah** à Paris (2005). Le 27 janvier (libération d'Auschwitz en 1945) est une journée internationale de mémoire.
- **Juger après Nuremberg** : procès **Eichmann** à Jérusalem (**1961**), filmé et suivi dans le monde ; Hannah Arendt y parle de « banalité du mal ». Procès d'Auschwitz à Francfort (1963-1965). En France : **Klaus Barbie** (1987), **Paul Touvier** (1994), **Maurice Papon** (1998). En 1995, Jacques Chirac reconnaît la responsabilité de l'État français dans la rafle du Vél' d'Hiv.
- **Littérature et cinéma** : Primo Levi, Si c'est un homme (1947) ; Elie Wiesel, La Nuit (1958) ; **Nuit et brouillard** d'Alain Resnais (1956) ; **Shoah** de Lanzmann (1985).
- La mémoire du génocide des **Tsiganes** a été reconnue beaucoup plus tard.

### À retenir pour le bac
- Toujours distinguer **histoire** et **mémoire**, puis montrer comment elles s'influencent.
- Les dates : 1948 (convention), 1954-1962, 1961, 1993, 1994, 1999.
- Les trois échelles de la justice : locale (gacaca), nationale (procès en France), internationale (Nuremberg, TPIY).
- Piège : génocide et crime contre l'humanité ne sont pas synonymes ; le génocide vise la destruction d'un groupe en tant que tel.`,
      cartes: [
        { q: "Quelle différence entre histoire et mémoire ?", r: "La mémoire est un souvenir vécu, affectif et propre à un groupe. L'histoire est une connaissance critique fondée sur des sources." },
        { q: "Qui a inventé le mot « génocide », et quand ?", r: "Le juriste Raphael Lemkin, en 1944." },
        { q: "Quand l'ONU adopte-t-elle la convention sur le génocide ?", r: "Le 9 décembre 1948." },
        { q: "Où est défini pour la première fois le crime contre l'humanité ?", r: "Dans le statut du tribunal militaire international de Nuremberg, en 1945." },
        { q: "Que dit l'article 231 du traité de Versailles ?", r: "Que l'Allemagne et ses alliés sont responsables de la guerre et doivent réparer les dommages." },
        { q: "Quelle thèse Fritz Fischer défend-il en 1961 ?", r: "L'Allemagne avait des buts de guerre expansionnistes et porte une lourde responsabilité dans le déclenchement de la guerre." },
        { q: "Quelles sont les dates de la guerre d'Algérie ?", r: "Du 1er novembre 1954 aux accords d'Évian (18 mars 1962). L'indépendance est proclamée le 5 juillet 1962." },
        { q: "Qui sont les harkis ?", r: "Des Algériens qui ont combattu aux côtés de l'armée française. Beaucoup ont été abandonnés ou massacrés en 1962." },
        { q: "Que reconnaît la loi du 18 octobre 1999 ?", r: "L'expression « guerre d'Algérie », à la place du mot « événements »." },
        { q: "Que sont les tribunaux gacaca ?", r: "Des tribunaux populaires rwandais qui ont jugé près de 2 millions d'affaires liées au génocide des Tutsis, de 2005 à 2012." },
        { q: "Qu'est-ce que le TPIY ?", r: "Le tribunal pénal international pour l'ex-Yougoslavie, créé par l'ONU en 1993, à La Haye. Il ferme en 2017." },
        { q: "Pourquoi le procès Eichmann (1961) est-il important ?", r: "Filmé et suivi dans le monde, il donne la parole aux témoins et place le génocide des Juifs au centre de la mémoire." },
        { q: "Quel Français est le premier condamné pour crime contre l'humanité ?", r: "Paul Touvier, ancien chef de la milice à Lyon, en 1994." },
        { q: "Qui a réalisé le film Shoah, et quand ?", r: "Le réalisateur Lanzmann, en 1985 : plus de neuf heures de témoignages, sans images d'archives." },
      ],
      quiz: [
        { q: "Qui a inventé le mot « génocide » ?", choix: ["Hannah Arendt", "Raphael Lemkin", "Benjamin Stora", "Henry Rousso"], bonne: 1, expl: "Lemkin forge le mot en 1944. Arendt parle de « banalité du mal », Stora étudie la guerre d'Algérie, Rousso le syndrome de Vichy.", niv: 1 },
        { q: "En quelle année est créé le TPIY ?", choix: ["1993", "1945", "1948", "1961"], bonne: 0, expl: "Le TPIY date de 1993. 1945 : Nuremberg ; 1948 : convention sur le génocide ; 1961 : procès Eichmann.", niv: 1 },
        { q: "Quel historien a lancé en 1961 un grand débat sur les buts de guerre allemands ?", choix: ["Christopher Clark", "Benjamin Stora", "Fritz Fischer", "Raphael Lemkin"], bonne: 2, expl: "Fritz Fischer, historien allemand. Clark défend en 2012 une responsabilité plus partagée.", niv: 1 },
        { q: "Où siègent les tribunaux gacaca ?", choix: ["À La Haye", "À Arusha", "Au siège de l'ONU à New York", "Dans les villages et quartiers du Rwanda"], bonne: 3, expl: "Les gacaca sont des tribunaux populaires locaux. Arusha (Tanzanie) accueillait le tribunal international pour le Rwanda.", niv: 1 },
        { q: "Un ancien combattant raconte « sa » guerre d'Algérie dans une association. Il exprime :", choix: ["une mémoire de groupe", "un travail d'historien", "une loi mémorielle", "une décision de justice"], bonne: 0, expl: "C'est un souvenir vécu, propre à un groupe : une mémoire. L'histoire suppose une méthode critique et des sources croisées.", niv: 2 },
        { q: "Pourquoi l'article 231 du traité de Versailles est-il au cœur d'un débat ?", choix: ["Il fixe les nouvelles frontières de l'Allemagne à l'est", "Il crée un tribunal pour Guillaume II", "Il rend l'Allemagne responsable de la guerre", "Il interdit les lois mémorielles"], bonne: 2, expl: "L'article 231 rend l'Allemagne et ses alliés responsables : les historiens ont ensuite nuancé ou confirmé cette idée.", niv: 2 },
        { q: "Pourquoi le Rwanda a-t-il créé les tribunaux gacaca ?", choix: ["Pour juger les responsables français", "Les juges manquaient face aux dizaines de milliers d'accusés", "L'ONU avait refusé de juger le génocide", "Pour remplacer définitivement la justice d'État"], bonne: 1, expl: "Des dizaines de milliers d'accusés attendaient en prison : les tribunaux classiques ne pouvaient pas tout juger.", niv: 2 },
        { q: "Pourquoi les mémoires de la guerre d'Algérie sont-elles dites « concurrentes » ?", choix: ["L'histoire de la guerre est interdite en Algérie comme en France", "Seuls les harkis ont gardé une mémoire", "La France a tout reconnu dès 1962", "Chaque groupe met en avant ses propres souffrances"], bonne: 3, expl: "Pieds-noirs, harkis, appelés, Algériens : chacun garde une mémoire différente, parfois opposée.", niv: 2 },
        { q: "Quel procès a lieu à Jérusalem en 1961 ?", choix: ["Le procès de Klaus Barbie", "Le procès du nazi Adolf Eichmann", "Le procès de Maurice Papon", "Le procès d'Auschwitz"], bonne: 1, expl: "Eichmann, enlevé en Argentine, est jugé à Jérusalem. Barbie et Papon sont jugés en France, le procès d'Auschwitz à Francfort.", niv: 2 },
        { q: "Quelle différence entre génocide et crime contre l'humanité ?", choix: ["Le génocide vise à détruire un groupe en tant que tel", "Le crime contre l'humanité est prescriptible", "Le génocide ne concerne que les guerres", "Ces deux crimes ont la même définition"], bonne: 0, expl: "Le génocide est un crime contre l'humanité particulier : l'intention de détruire tout ou partie d'un groupe.", niv: 3 },
        { q: "Quelle est la principale critique adressée aux tribunaux gacaca ?", choix: ["Ils ont jugé trop peu d'affaires", "Ils étaient dirigés par l'ONU", "Ils offraient peu de droits à la défense", "Ils ont refusé d'entendre les rescapés du génocide"], bonne: 2, expl: "Les juges étaient des habitants élus, peu formés, et les accusés n'avaient pas d'avocat : la réconciliation primait sur les garanties.", niv: 3 },
        { q: "Quel rôle l'historien joue-t-il face aux mémoires de la guerre d'Algérie ?", choix: ["Il doit choisir la mémoire la plus juste", "Il fixe la mémoire officielle par la loi", "Il juge les coupables au tribunal", "Il confronte toujours les sources pour expliquer"], bonne: 3, expl: "L'historien ne prend pas parti pour une mémoire et ne juge pas : il établit et explique les faits à partir de sources critiquées.", niv: 3 },
      ],
    },
    {
      chapitre: 'hggsp-5',
      fiche: `## Le patrimoine : une notion qui s'élargit et des usages politiques

### Qu'est-ce que le patrimoine ?
- Au départ, le **patrimoine** désigne les biens qu'on hérite de ses parents (du latin patrimonium, « l'héritage du père »).
- Le sens s'élargit : c'est l'ensemble des biens, matériels ou non, qu'une **société** juge assez précieux pour les **transmettre** aux générations futures.
- **Patrimoine matériel** : monuments, sites, objets, paysages. **Patrimoine immatériel** : savoir-faire, fêtes, traditions orales, cuisine.
- **Patrimoine culturel** (œuvres humaines) et **patrimoine naturel** (sites naturels remarquables).
- La **patrimonialisation** est le processus par lequel un objet devient patrimoine : on le choisit, on le protège, on le met en valeur.

### Une notion construite au fil du temps
- Pendant la **Révolution**, face aux destructions, l'abbé Grégoire invente le mot « **vandalisme** » (1794). Le **Louvre** devient un musée public en 1793.
- Au XIXe siècle, l'État protège les **monuments historiques** (Prosper Mérimée inspecteur à partir de 1834). La **loi de 1913** fonde encore aujourd'hui leur protection.
- Après 1945 : l'**UNESCO** (créée en 1945) pilote la protection internationale. La campagne pour sauver les temples d'**Abou Simbel** (Égypte), menacés par le barrage d'Assouan dans les années 1960, montre une solidarité mondiale.
- **Convention de La Haye (1954)** : protéger les biens culturels en cas de conflit armé.

### Le patrimoine mondial de l'UNESCO
- **Convention du patrimoine mondial** (**16 novembre 1972**) : les biens de « **valeur universelle exceptionnelle** » appartiennent à l'humanité entière.
- Ce sont les **États** qui proposent les sites ; le Comité du patrimoine mondial décide. Il existe une **liste du patrimoine mondial en péril**.
- La liste compte plus de 1 200 biens, de plus en plus **divers** (paysages, sites industriels, lieux de mémoire), mais **concentrés** en Europe et en Amérique du Nord (près de la moitié). L'Italie et la Chine en ont le plus.
- **Convention de 2003** : protège le **patrimoine culturel immatériel**.
- L'inscription apporte **prestige**, **tourisme** et **soft power** : c'est un enjeu géopolitique.

### Axe 1 : Versailles, réaménager la mémoire
- Résidence de **Louis XIV** (la cour s'y installe en **1682**), Versailles est un symbole de la monarchie absolue. La cour le quitte en octobre 1789.
- Sous **Louis-Philippe**, le château devient un **musée** « à toutes les gloires de la France » (inauguré en **1837**) : il réconcilie les mémoires de la monarchie, de la Révolution et de l'Empire.
- La **galerie des Glaces** sert à la politique : proclamation de l'**Empire allemand** (**18 janvier 1871**), signature du **traité de Versailles** (**28 juin 1919**), revanche symbolique de la France.
- Aujourd'hui : le Parlement s'y réunit **en Congrès** pour réviser la Constitution ; les présidents y reçoivent des chefs d'État ; inscrit au patrimoine mondial en 1979. C'est un outil de **diplomatie** et de **rayonnement**.

### Axe 1 : les frises du Parthénon, un patrimoine disputé
- Le **Parthénon** est construit sur l'Acropole d'Athènes au **Ve siècle av. J.-C.**, sous **Périclès** ; ses sculptures sont réalisées sous la direction de **Phidias**.
- Au début du XIXe siècle, la Grèce est sous domination **ottomane**. **Lord Elgin**, ambassadeur britannique, fait retirer environ la moitié des sculptures (vers 1801-1805). Elles sont achetées par le **British Museum** en **1816**.
- Depuis l'indépendance, et surtout depuis les années 1980 (campagne de la ministre **Melina Mercouri**), la Grèce réclame leur **restitution**. Le **musée de l'Acropole** (2009) leur réserve une place vide.
- Le British Museum refuse : une loi de 1963 lui interdit de céder ses collections, et il se présente comme un **musée universel**. Quelques fragments conservés en Italie et au Vatican ont été rendus à la Grèce (2022-2023).
- Ce **conflit de patrimoine** pose la question des **restitutions**, comme celle des œuvres prises pendant la colonisation (la France rend 26 œuvres au Bénin en 2021).

### À retenir pour le bac
- Définir **patrimoine**, **patrimonialisation**, **matériel / immatériel**, **valeur universelle exceptionnelle**.
- Dates : 1913, 1945, 1954, 1972, 2003 ; Versailles 1682, 1837, 1871, 1919.
- Le patrimoine a des **usages politiques** : légitimer un pouvoir, construire une identité nationale, faire de la diplomatie.
- Sujet tombé : « Les usages du patrimoine en France » (bac 2025).
- Piège : ce n'est pas l'UNESCO qui choisit seule ; ce sont les États qui proposent leurs sites.`,
      cartes: [
        { q: "Que signifie au départ le mot patrimoine ?", r: "Les biens hérités de ses parents (du latin patrimonium, l'héritage du père)." },
        { q: "Qu'est-ce que la patrimonialisation ?", r: "Le processus par lequel une société choisit un bien, le protège et le met en valeur pour en faire un patrimoine." },
        { q: "Donne un exemple de patrimoine immatériel.", r: "Un savoir-faire, une fête ou une pratique : par exemple le repas gastronomique des Français, inscrit en 2010." },
        { q: "Qui invente le mot « vandalisme », et pourquoi ?", r: "L'abbé Grégoire, en 1794, pour dénoncer les destructions de monuments pendant la Révolution." },
        { q: "Quelle loi protège les monuments historiques en France ?", r: "La loi de 1913 sur les monuments historiques, toujours en vigueur (dans le code du patrimoine)." },
        { q: "Quand est adoptée la convention du patrimoine mondial ?", r: "Le 16 novembre 1972, à l'UNESCO." },
        { q: "Qu'est-ce que la valeur universelle exceptionnelle ?", r: "Le critère d'inscription au patrimoine mondial : un bien si important qu'il concerne l'humanité entière." },
        { q: "Pourquoi le sauvetage d'Abou Simbel est-il célèbre ?", r: "Dans les années 1960, l'UNESCO organise le déplacement de ces temples égyptiens menacés par le barrage d'Assouan." },
        { q: "Quelle convention protège le patrimoine immatériel ?", r: "La convention de l'UNESCO de 2003." },
        { q: "Où se concentrent les biens du patrimoine mondial ?", r: "En Europe et en Amérique du Nord, qui ont près de la moitié des biens inscrits." },
        { q: "Quand Versailles devient-il un musée ?", r: "Sous Louis-Philippe, qui l'inaugure en 1837 comme musée « à toutes les gloires de la France »." },
        { q: "Quels événements politiques ont lieu dans la galerie des Glaces ?", r: "La proclamation de l'Empire allemand (18 janvier 1871) et la signature du traité de Versailles (28 juin 1919)." },
        { q: "Qui a fait retirer les frises du Parthénon ?", r: "Lord Elgin, ambassadeur britannique auprès de l'Empire ottoman, au début du XIXe siècle." },
        { q: "Où sont aujourd'hui la plupart des frises retirées par Elgin ?", r: "Au British Museum, à Londres, qui les a achetées en 1816." },
        { q: "Pourquoi le British Museum refuse-t-il la restitution ?", r: "Une loi de 1963 lui interdit de céder ses collections, et il se présente comme un musée universel ouvert à tous." },
      ],
      quiz: [
        { q: "En quelle année est adoptée la convention du patrimoine mondial ?", choix: ["1954", "1945", "1972", "1959"], bonne: 2, expl: "1972. En 1945 naît l'UNESCO, en 1954 la convention de La Haye ; 1959, c'est la création du ministère confié à Malraux.", niv: 1 },
        { q: "Quel critère permet d'inscrire un bien au patrimoine mondial ?", choix: ["Sa valeur universelle exceptionnelle", "Son ancienneté de plus de mille ans", "Sa fréquentation touristique", "Son classement national"], bonne: 0, expl: "La valeur universelle exceptionnelle est le critère central. Un site récent peut être inscrit, comme la ville du Havre reconstruite.", niv: 1 },
        { q: "Sous quel souverain Versailles devient-il un musée ?", choix: ["Louis XIV", "Napoléon III", "Napoléon Bonaparte", "Louis-Philippe"], bonne: 3, expl: "Louis-Philippe inaugure en 1837 le musée « à toutes les gloires de la France ».", niv: 1 },
        { q: "Qui a fait retirer une grande partie des frises du Parthénon ?", choix: ["Melina Mercouri", "Lord Elgin", "Phidias", "Prosper Mérimée"], bonne: 1, expl: "Lord Elgin, au début du XIXe siècle. Melina Mercouri a mené la campagne grecque pour leur retour.", niv: 1 },
        { q: "Un village fait inscrire sa fête traditionnelle à l'UNESCO. De quel patrimoine s'agit-il ?", choix: ["Du patrimoine naturel", "Du patrimoine mobilier", "Du patrimoine culturel immatériel", "Du patrimoine industriel"], bonne: 2, expl: "Une fête est une pratique vivante, pas un objet : elle relève du patrimoine immatériel (convention de 2003).", niv: 2 },
        { q: "Pourquoi le traité de 1919 est-il signé dans la galerie des Glaces ?", choix: ["Pour effacer l'humiliation subie en 1871 à Versailles", "Parce que l'ONU y avait son siège", "Parce que Versailles était en Allemagne", "Pour honorer Louis-Philippe"], bonne: 0, expl: "En 1871, l'Empire allemand y avait été proclamé. La France y fait signer la paix pour inverser ce symbole.", niv: 2 },
        { q: "Qui propose les sites à inscrire au patrimoine mondial ?", choix: ["Le directeur de l'UNESCO", "Les communes concernées", "Les États", "Les ONG de protection"], bonne: 2, expl: "Ce sont les États qui déposent les candidatures : le patrimoine mondial est aussi une construction politique des États.", niv: 2 },
        { q: "Quel argument utilise la Grèce pour réclamer les frises du Parthénon ?", choix: ["Elles ont été volées par Napoléon", "Le monument est un tout, à reconstituer à Athènes", "Elles ont été vendues illégalement par le British Museum en 1963", "L'UNESCO les a inscrites au nom de la Grèce"], bonne: 1, expl: "La Grèce veut réunir les sculptures avec le monument : le musée de l'Acropole leur garde une place vide.", niv: 2 },
        { q: "Le Parlement se réunit en Congrès à Versailles. Quel usage du patrimoine est-ce ?", choix: ["Un usage touristique et commercial", "Un usage religieux", "Un usage économique", "Un usage politique"], bonne: 3, expl: "Le château sert de décor solennel à la vie politique : il donne du prestige et de la continuité à la République.", niv: 2 },
        { q: "Pourquoi dit-on que la liste du patrimoine mondial est « concentrée » ?", choix: ["Elle se compose surtout de monuments religieux chrétiens d'Europe", "L'Europe et l'Amérique du Nord en ont près de la moitié", "Elle ne comporte aucun site naturel", "Chaque pays n'a droit qu'à un bien"], bonne: 1, expl: "Les pays riches, qui ont plus de moyens pour monter des dossiers, ont beaucoup plus de biens inscrits.", niv: 3 },
        { q: "Pourquoi le musée « à toutes les gloires de la France » sert-il la monarchie de Juillet ?", choix: ["Il honore à la fois monarchie, Révolution et Empire", "Il célèbre Louis XIV et la monarchie absolue", "Il rend le château aux Bourbons", "Il efface le souvenir de la Révolution"], bonne: 0, expl: "Louis-Philippe cherche à réconcilier les Français : le musée honore toutes les périodes, et légitime ainsi son régime.", niv: 3 },
        { q: "Pourquoi l'inscription au patrimoine mondial est-elle un enjeu géopolitique ?", choix: ["Elle donne un siège au Conseil de sécurité", "Elle transfère la propriété du bien à l'ONU et à l'UNESCO", "Elle interdit toute visite du site", "Elle apporte prestige, tourisme et influence"], bonne: 3, expl: "Le bien reste à l'État, mais l'inscription renforce son image et son soft power. D'où la concurrence entre États.", niv: 3 },
      ],
    },
    {
      chapitre: 'hggsp-6',
      fiche: `## Préserver le patrimoine : tensions, concurrences et politique française

### Axe 2 : protéger, c'est arbitrer
- Préserver le patrimoine crée des **tensions** : entre **protection** et **développement économique**, entre **habitants** et **touristes**, entre États en guerre.
- Le patrimoine peut être un **vecteur de développement** (emplois, tourisme) mais aussi une **source de concurrences** (pour l'espace, l'argent, l'image).

### Paris, entre protection et nouvel urbanisme
- Le Paris actuel doit beaucoup au **baron Haussmann**, préfet de la Seine sous **Napoléon III** (1853-1870) : grands boulevards, immeubles alignés.
- **Loi Malraux** (**1962**) : création des **secteurs sauvegardés** ; le **Marais** est restauré au lieu d'être rasé.
- La **tour Montparnasse** (1973) choque : la hauteur des immeubles est ensuite limitée dans le centre. Des débats reviennent avec les projets de tours (tour Triangle).
- Les **rives de la Seine** sont inscrites au patrimoine mondial en **1991**.
- Des gestes contemporains s'intègrent au patrimoine : le **Centre Pompidou** (1977), la **pyramide du Louvre** (1989).
- L'incendie de **Notre-Dame** (15 avril 2019) puis sa restauration (réouverture en décembre 2024) montrent l'attachement national et mondial au patrimoine, et les débats sur la manière de restaurer (à l'identique ou non).

### Le Mali : détruire, protéger et restaurer le patrimoine
- **Tombouctou**, ville de savants et de mausolées, est inscrite au patrimoine mondial en 1988.
- En **2012**, des groupes **djihadistes** (Ansar Dine, AQMI) occupent le nord du Mali et **détruisent des mausolées** jugés contraires à leur lecture de l'islam. Tombouctou passe sur la **liste en péril**. Des habitants sauvent des milliers de **manuscrits**.
- En **2013**, l'intervention française (**opération Serval**) chasse les groupes armés.
- L'**UNESCO** finance la **reconstruction** des mausolées (achevée en 2015) avec des artisans locaux.
- En **2016**, la **Cour pénale internationale** condamne **Ahmad al-Faqi al-Mahdi** à 9 ans de prison : c'est le premier procès où la destruction de patrimoine est jugée comme **crime de guerre**.
- Détruire le patrimoine sert à effacer l'**identité** d'un peuple (comme les bouddhas de **Bamiyan** en Afghanistan en 2001, ou **Palmyre** en Syrie par Daech en 2015).

### Venise, entre tourisme et protection
- Venise et sa lagune sont inscrites au patrimoine mondial en 1987.
- Le **surtourisme** (des dizaines de millions de visiteurs par an) fait fuir les habitants : le centre historique compte moins de 50 000 habitants.
- Réponses : interdiction des **grands paquebots** de croisière dans le centre (2021), **taxe d'accès** pour les visiteurs à la journée (testée depuis 2024), barrières mobiles **MOSE** contre les hautes eaux (en service depuis 2020).
- L'UNESCO a envisagé d'inscrire Venise sur la liste en péril, sans le faire.

### Objet conclusif : la France et le patrimoine
- **Une politique publique ancienne** : loi de **1913** sur les monuments historiques ; création du **ministère des Affaires culturelles** confié à **André Malraux** en **1959** ; Inventaire général (1964) ; **Journées du patrimoine** (depuis 1984) ; aujourd'hui, l'État partage la tâche avec les collectivités, des fondations et des initiatives comme le **Loto du patrimoine** (2018).
- **Le bassin minier du Nord-Pas-de-Calais** : la dernière mine ferme en **1990**. Le bassin est inscrit au patrimoine mondial en **2012** comme **paysage culturel évolutif vivant** (terrils, chevalements, cités minières). La **patrimonialisation** aide à la **reconversion** : le **Louvre-Lens** ouvre en 2012 sur une ancienne fosse.
- **Le patrimoine, outil de rayonnement** : le **repas gastronomique des Français** est inscrit au patrimoine immatériel en **2010** ; la baguette en 2022. La France utilise son patrimoine pour sa **diplomatie culturelle** et son **soft power** (Louvre Abou Dabi, ouvert en 2017).

### À retenir pour le bac
- Toujours montrer la **tension** entre protection et valorisation (tourisme, urbanisme, économie).
- Exemples précis : Paris (Haussmann, loi Malraux 1962), Tombouctou (2012, CPI 2016), Venise (paquebots, taxe).
- La France : Malraux 1959, bassin minier 2012, repas gastronomique 2010.
- Piège : la valorisation touristique peut **menacer** ce qu'elle met en valeur.`,
      cartes: [
        { q: "Qui a transformé Paris sous Napoléon III ?", r: "Le baron Haussmann, préfet de la Seine de 1853 à 1870 : grands boulevards et immeubles alignés." },
        { q: "Que crée la loi Malraux de 1962 ?", r: "Les secteurs sauvegardés : des quartiers anciens entiers, comme le Marais, sont protégés et restaurés." },
        { q: "Pourquoi la tour Montparnasse est-elle importante pour le patrimoine parisien ?", r: "Sa construction (1973) a provoqué une telle opposition que la hauteur des immeubles a été limitée dans le centre de Paris." },
        { q: "Quand Notre-Dame de Paris brûle-t-elle ?", r: "Le 15 avril 2019. Elle rouvre en décembre 2024 après restauration." },
        { q: "Que se passe-t-il à Tombouctou en 2012 ?", r: "Des groupes djihadistes occupent la ville et détruisent des mausolées classés au patrimoine mondial." },
        { q: "Qui a été condamné par la CPI pour la destruction des mausolées de Tombouctou ?", r: "Ahmad al-Faqi al-Mahdi, en 2016, à 9 ans de prison : premier procès pour destruction de patrimoine comme crime de guerre." },
        { q: "Qu'est-ce que la liste du patrimoine mondial en péril ?", r: "Une liste de l'UNESCO pour les sites gravement menacés (guerre, catastrophe, tourisme), afin de mobiliser de l'aide." },
        { q: "Pourquoi détruit-on le patrimoine pendant une guerre ?", r: "Pour effacer l'identité et la mémoire d'un peuple, et frapper les esprits (Bamiyan 2001, Palmyre 2015)." },
        { q: "Quel est le principal problème de Venise ?", r: "Le surtourisme : les visiteurs sont trop nombreux et les habitants quittent le centre historique." },
        { q: "Quelles mesures Venise a-t-elle prises contre le surtourisme ?", r: "Interdiction des grands paquebots dans le centre (2021) et taxe d'accès pour les visiteurs à la journée (depuis 2024)." },
        { q: "Qui est le premier ministre des Affaires culturelles en France ?", r: "André Malraux, en 1959, sous le général de Gaulle." },
        { q: "Quand le bassin minier du Nord-Pas-de-Calais est-il inscrit à l'UNESCO ?", r: "En 2012, comme paysage culturel évolutif vivant." },
        { q: "Quel musée symbolise la reconversion du bassin minier ?", r: "Le Louvre-Lens, ouvert en 2012 sur le site d'une ancienne fosse." },
        { q: "Quand le repas gastronomique des Français est-il inscrit à l'UNESCO ?", r: "En 2010, au patrimoine culturel immatériel de l'humanité." },
        { q: "Qu'est-ce que le soft power ?", r: "La capacité d'influencer les autres par l'attraction (culture, patrimoine, valeurs) plutôt que par la force." },
      ],
      quiz: [
        { q: "Quelle loi crée les secteurs sauvegardés en 1962 ?", choix: ["La loi Malraux", "La loi de 1913", "La loi Haussmann", "La loi Lang"], bonne: 0, expl: "La loi Malraux (1962) protège des quartiers entiers. La loi de 1913 concerne les monuments historiques un par un.", niv: 1 },
        { q: "Quelle juridiction a jugé la destruction des mausolées de Tombouctou ?", choix: ["Le TPIY", "La Cour internationale de justice", "Un tribunal gacaca", "La Cour pénale internationale"], bonne: 3, expl: "La CPI juge des individus ; elle condamne al-Mahdi en 2016. La Cour internationale de justice juge les différends entre États.", niv: 1 },
        { q: "En quelle année le bassin minier du Nord-Pas-de-Calais est-il inscrit à l'UNESCO ?", choix: ["1990", "2012", "1972", "2010"], bonne: 1, expl: "2012. 1990, c'est la fermeture de la dernière mine ; 2010, l'inscription du repas gastronomique.", niv: 1 },
        { q: "Qui devient ministre des Affaires culturelles en 1959 ?", choix: ["Jack Lang", "Prosper Mérimée", "André Malraux", "Georges Pompidou"], bonne: 2, expl: "André Malraux, écrivain et résistant, crée le ministère sous de Gaulle. Jack Lang est ministre dans les années 1980.", niv: 1 },
        { q: "Une ville limite la hauteur des immeubles près de son centre ancien. Quel arbitrage fait-elle ?", choix: ["Elle privilégie la protection des paysages urbains", "Elle favorise la construction de logements plus nombreux en centre-ville", "Elle répond à une décision de l'UNESCO", "Elle applique la convention de La Haye"], bonne: 0, expl: "Limiter les hauteurs protège les vues et l'unité du centre, au prix de moins de logements ou de bureaux.", niv: 2 },
        { q: "Un pays rend un grand musée accessible à prix réduit aux étrangers. Quelle logique suit-il ?", choix: ["Une logique de dissuasion", "Une logique de soft power", "Une logique de sécurité collective", "Une logique de souveraineté maritime"], bonne: 1, expl: "Attirer par la culture, c'est du soft power : l'influence sans contrainte.", niv: 2 },
        { q: "Pourquoi des djihadistes détruisent-ils des mausolées à Tombouctou en 2012 ?", choix: ["Pour récupérer des matériaux", "Pour obéir à une décision de l'ONU", "Pour effacer des pratiques religieuses qu'ils rejettent", "Pour vendre les pierres aux musées"], bonne: 2, expl: "Ils jugent le culte des saints contraire à leur vision de l'islam. Détruire le patrimoine, c'est attaquer une identité.", niv: 2 },
        { q: "Pourquoi l'inscription du bassin minier aide-t-elle sa reconversion ?", choix: ["Elle oblige l'État à rouvrir les mines", "Elle interdit de construire de nouveaux bâtiments dans la région", "Elle supprime le chômage dans la région", "Elle change l'image du territoire et attire des visiteurs"], bonne: 3, expl: "Un passé vu comme une crise devient une fierté et un atout : tourisme, culture (Louvre-Lens), nouvelle image.", niv: 2 },
        { q: "Quelle mesure Venise a-t-elle prise contre le surtourisme ?", choix: ["Une taxe d'accès pour les visiteurs à la journée", "La fermeture de la place Saint-Marc", "L'interdiction des hôtels", "Le retrait volontaire de la liste du patrimoine mondial de l'UNESCO"], bonne: 0, expl: "La taxe d'accès est testée depuis 2024, et les grands paquebots sont interdits dans le centre depuis 2021.", niv: 2 },
        { q: "Pourquoi la condamnation d'al-Mahdi par la CPI en 2016 fait-elle date ?", choix: ["C'est le tout premier procès organisé par la CPI depuis sa création", "Il est jugé par un tribunal malien", "Il est condamné à la prison à perpétuité", "C'est le premier procès pour destruction de patrimoine"], bonne: 3, expl: "La CPI existait depuis 2002 : la nouveauté est de juger la destruction de patrimoine comme crime de guerre. La peine est de 9 ans.", niv: 3 },
        { q: "En quoi le tourisme peut-il menacer le patrimoine qu'il valorise ?", choix: ["Il fait toujours baisser les recettes", "Il interdit l'inscription à l'UNESCO", "Il use les sites et chasse les habitants", "Il empêche toute restauration"], bonne: 2, expl: "Le surtourisme dégrade les lieux et vide les centres de leurs habitants : la valorisation devient une menace.", niv: 3 },
        { q: "Quelle affirmation sur la politique patrimoniale française actuelle est juste ?", choix: ["Elle associe l'État, les collectivités et des acteurs privés", "Elle relève des communes depuis la décentralisation", "Elle a été confiée à l'UNESCO en 1972", "Elle se limite aux monuments construits avant la Révolution de 1789"], bonne: 0, expl: "L'État reste central, mais il partage le financement et la gestion avec collectivités, fondations et mécènes.", niv: 3 },
      ],
    },
    {
      chapitre: 'hggsp-7',
      fiche: `## L'environnement : exploiter, préserver et protéger

### Introduction : qu'est-ce que l'environnement ?
- L'**environnement** est l'ensemble des éléments naturels (air, eau, sols, êtres vivants) et des éléments transformés par l'homme qui entourent une société et agissent sur elle.
- C'est une **construction historique, sociale et politique** : le mot prend son sens actuel dans les années 1960-1970, quand on prend conscience des dégâts causés par l'homme.
- Repères : **Rachel Carson**, Printemps silencieux (**1962**), dénonce les pesticides ; premier ministère de l'Environnement en France en **1971** ; **rapport Brundtland** (**1987**) qui définit le **développement durable** : répondre aux besoins du présent sans compromettre ceux des générations futures.
- Trois attitudes à distinguer :
  - **exploiter** : tirer des ressources du milieu ;
  - **préserver** : laisser un espace à l'écart de l'action humaine ;
  - **protéger** (ou conserver) : encadrer l'usage pour qu'il dure.
- L'**anthropocène** : idée, lancée par le chimiste **Paul Crutzen** en 2000, que l'humanité est devenue une force qui transforme la planète entière. Les géologues ont refusé en 2024 d'en faire officiellement une époque, mais la notion reste très utilisée.

### Jalon 1 : la forêt française depuis Colbert
- Au XVIIe siècle, la forêt est surexploitée (bois de chauffage, construction, forges). Or la **marine royale** a besoin de grands chênes.
- **Colbert**, ministre de Louis XIV, prend l'**ordonnance de 1669 sur les Eaux et Forêts** : inventaire, règles de coupe, plantations (comme la forêt de Tronçais). Le but est d'abord **économique et militaire** : c'est une protection pour mieux exploiter.
- Pendant la Révolution, les défrichements reprennent. Au début du XIXe siècle, la forêt atteint son **minimum** (environ 8 à 9 millions d'hectares).
- Le **Code forestier** (**1827**) encadre à nouveau les forêts. Sous Napoléon III, la **loi de 1857** fait planter des pins dans les **Landes** (assèchement, résine, bois) ; à partir de **1860**, on reboise les montagnes pour lutter contre l'érosion et les crues.
- L'**Office national des forêts** (ONF) est créé en **1964**.
- Aujourd'hui, la forêt couvre près d'un **tiers** de la France métropolitaine : sa surface a presque **doublé** depuis le milieu du XIXe siècle.
- Les défis actuels : tempêtes (Lothar et Martin, décembre 1999), **sécheresses**, **incendies** (Gironde, été 2022), parasites ; la forêt doit à la fois produire du bois, accueillir des promeneurs, protéger la biodiversité et stocker du carbone (**forêt multifonctionnelle**).

### Jalon 2 : deux ruptures ? Révolution néolithique et révolution industrielle
- La **révolution néolithique** commence vers **10 000 ans avant notre ère** au Proche-Orient (le **Croissant fertile**) : **agriculture**, **élevage**, **sédentarisation**. L'expression vient de l'archéologue Gordon Childe (1936).
- Conséquences : défrichements, premiers paysages transformés, croissance de la population, villes, inégalités. Mais la diffusion est **lente** : elle arrive en France vers 6 000 ans avant notre ère. Certains préfèrent parler de **transition**.
- La **révolution industrielle** commence en **Angleterre** à la fin du XVIIIe siècle : **charbon**, **machine à vapeur** (perfectionnée par James Watt), usines, chemins de fer.
- Conséquences : pollution de l'air et de l'eau, explosion de la consommation d'énergie fossile, hausse des émissions de **gaz à effet de serre**. Après 1950, la « **grande accélération** » amplifie tous ces effets.
- Sont-elles deux **ruptures** ? Oui par leurs effets à long terme ; mais ce sont des processus **lents** et inégaux selon les régions. Il faut nuancer.

### À retenir pour le bac
- Définir **environnement**, **ressource**, **exploiter / préserver / protéger**, **développement durable**, **anthropocène**.
- La forêt : Colbert et 1669, Code forestier 1827, Landes 1857, ONF 1964, forêt qui a presque doublé.
- Sujet type : « Les sociétés face à leur environnement, entre exploitation et protection ».
- Piège : Colbert ne protège pas la forêt pour la nature, mais pour la **marine** et l'économie.`,
      cartes: [
        { q: "Comment définir l'environnement ?", r: "L'ensemble des éléments naturels et transformés par l'homme qui entourent une société et agissent sur elle." },
        { q: "Quelle différence entre préserver et protéger ?", r: "Préserver : laisser un espace à l'écart de l'action humaine. Protéger (conserver) : encadrer son usage pour qu'il dure." },
        { q: "Qu'a dénoncé Rachel Carson en 1962 ?", r: "Les ravages des pesticides (comme le DDT) sur les oiseaux et la nature, dans Printemps silencieux." },
        { q: "Comment le rapport Brundtland (1987) définit-il le développement durable ?", r: "Un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs." },
        { q: "Qu'est-ce que l'anthropocène ?", r: "Une période où l'humanité est devenue une force qui transforme toute la planète. Notion proposée par Paul Crutzen en 2000." },
        { q: "Que prévoit l'ordonnance de Colbert de 1669 ?", r: "Elle réforme les Eaux et Forêts : inventaire, règles de coupe et plantations, pour fournir du bois à la marine royale." },
        { q: "Quand la forêt française atteint-elle son minimum ?", r: "Au début du XIXe siècle, après les défrichements de la Révolution : environ 8 à 9 millions d'hectares." },
        { q: "Quelle loi de 1857 transforme les Landes de Gascogne ?", r: "La loi sous Napoléon III qui impose le boisement des landes en pins maritimes." },
        { q: "Pourquoi reboise-t-on les montagnes à partir de 1860 ?", r: "Pour retenir les sols, limiter l'érosion et les crues dévastatrices." },
        { q: "Quand est créé l'Office national des forêts ?", r: "En 1964." },
        { q: "Quelle part du territoire la forêt couvre-t-elle aujourd'hui en France métropolitaine ?", r: "Près d'un tiers. Sa surface a presque doublé depuis le milieu du XIXe siècle." },
        { q: "Où et quand commence la révolution néolithique ?", r: "Au Proche-Orient (Croissant fertile), vers 10 000 ans avant notre ère." },
        { q: "Quelles sont les grandes nouveautés du Néolithique ?", r: "L'agriculture, l'élevage et la sédentarisation dans des villages." },
        { q: "Qu'est-ce que la « grande accélération » ?", r: "La forte hausse, après 1950, de la population, de la consommation d'énergie et des pollutions." },
      ],
      quiz: [
        { q: "Quel ministre de Louis XIV réforme les forêts en 1669 ?", choix: ["Colbert", "Mazarin", "Richelieu", "Sully"], bonne: 0, expl: "Colbert prend l'ordonnance de 1669. Sully est ministre d'Henri IV, Richelieu de Louis XIII.", niv: 1 },
        { q: "Qui a proposé la notion d'anthropocène en 2000 ?", choix: ["Rachel Carson", "Gro Harlem Brundtland", "Paul Crutzen", "Gordon Childe"], bonne: 2, expl: "Paul Crutzen, chimiste. Childe a parlé de « révolution néolithique », Brundtland a donné son nom au rapport de 1987.", niv: 1 },
        { q: "Depuis le milieu du XIXe siècle, la surface de la forêt française a :", choix: ["diminué de moitié", "presque doublé", "peu changé", "été multipliée par cinq"], bonne: 1, expl: "Grâce aux reboisements et à l'exode rural, elle a presque doublé et couvre aujourd'hui près d'un tiers du territoire.", niv: 1 },
        { q: "Quel rapport définit le développement durable en 1987 ?", choix: ["Le rapport Meadows", "Le premier rapport du GIEC", "Le rapport Stora", "Le rapport Brundtland"], bonne: 3, expl: "Le rapport Brundtland (ONU, 1987). Le rapport Meadows (1972) alertait sur les limites de la croissance.", niv: 1 },
        { q: "Un pays interdit toute présence humaine dans une zone sauvage. Il pratique :", choix: ["l'exploitation", "la conservation", "la préservation", "le développement durable"], bonne: 2, expl: "Mettre un espace entièrement à l'écart de l'homme, c'est préserver. Conserver, c'est encadrer un usage.", niv: 2 },
        { q: "Pourquoi Colbert veut-il protéger les forêts ?", choix: ["Pour assurer du bois à la marine royale", "Pour sauver la faune sauvage", "Pour limiter les crues", "Pour créer des parcs de chasse ouverts au public"], bonne: 0, expl: "Le but est militaire et économique : construire des navires. La lutte contre les crues motive plutôt les reboisements du XIXe siècle.", niv: 2 },
        { q: "Sous Napoléon III, pourquoi plante-t-on des pins dans les Landes ?", choix: ["Pour fournir des mâts à la marine", "Pour protéger les villes des tempêtes", "Pour créer un parc national", "Pour assainir et exploiter une lande humide"], bonne: 3, expl: "La loi de 1857 assèche et met en valeur une région pauvre : bois et résine deviennent des ressources.", niv: 2 },
        { q: "Une forêt sert à la fois au bois, aux loisirs et à la biodiversité. On parle de forêt :", choix: ["primaire", "multifonctionnelle", "domaniale", "de production intensive"], bonne: 1, expl: "La gestion actuelle cherche à concilier plusieurs fonctions. Une forêt primaire n'a jamais été exploitée.", niv: 2 },
        { q: "Quelle conséquence environnementale de la révolution industrielle est la plus durable ?", choix: ["Les défrichements du Croissant fertile", "La disparition des forêts françaises", "Les émissions massives de gaz à effet de serre", "La fin de l'agriculture"], bonne: 2, expl: "Le charbon puis le pétrole augmentent massivement les gaz à effet de serre, qui restent longtemps dans l'atmosphère.", niv: 2 },
        { q: "Pourquoi certains préfèrent-ils parler de « transition » néolithique ?", choix: ["Elle s'est diffusée lentement, sur des millénaires", "Elle a commencé en Europe avant le Proche-Orient", "Elle n'a eu que peu d'effets sur les paysages et les milieux", "Elle a eu lieu en un seul siècle"], bonne: 0, expl: "Le mot révolution suggère un changement brutal. Or l'agriculture s'est diffusée sur des millénaires.", niv: 3 },
        { q: "Les géologues ont refusé en 2024 de faire de l'anthropocène une époque officielle. Donc :", choix: ["l'influence humaine sur la planète a été jugée trop faible", "le changement climatique est remis en cause", "la notion est interdite dans les sciences", "la notion reste un débat, non une date officielle"], bonne: 3, expl: "Le refus porte sur la datation géologique. L'impact humain global, lui, n'est pas contesté.", niv: 3 },
        { q: "Quelle affirmation sur la protection de la forêt par Colbert est juste ?", choix: ["Elle vise d'abord à préserver la nature", "Elle protège pour mieux exploiter", "Elle interdit toute coupe de bois", "Elle crée l'Office national des forêts"], bonne: 1, expl: "Protéger et exploiter vont ensemble : Colbert organise les coupes pour avoir du bois durablement. L'ONF date de 1964.", niv: 3 },
      ],
    },
    {
      chapitre: 'hggsp-8',
      fiche: `## Le changement climatique et les États-Unis face à l'environnement

### Jalon 1 : le climat de l'Europe du Moyen Âge au XIXe siècle
- Le climat a **toujours varié**, avant même l'action humaine. On distingue deux grandes phases :
  - l'**optimum climatique médiéval** (environ 950-1250) : des étés plus doux ; les Vikings s'installent au **Groenland** (vers 985) ; la vigne remonte vers le nord ;
  - le **petit âge glaciaire** (du XIVe siècle au milieu du XIXe siècle, plus marqué entre 1550 et 1850) : hivers rigoureux, glaciers des Alpes qui avancent, rivières gelées.
- Effets sur les sociétés : mauvaises récoltes, **famines** (1693-1694 en France, environ 1,3 million de morts ; le **Grand Hiver de 1709**), épidémies, révoltes.
- Les volcans jouent aussi : l'éruption du **Tambora** (Indonésie, **1815**) provoque en 1816 l'« **année sans été** » en Europe et en Amérique du Nord.
- Comment le sait-on ? Les historiens utilisent des **archives** : dates des **vendanges**, registres paroissiaux, prix du blé, tableaux de glaciers ; les scientifiques, les **cernes des arbres** et les **carottes glaciaires**.
- L'historien **Emmanuel Le Roy Ladurie** a fondé l'**histoire du climat** (Histoire du climat depuis l'an mil, **1967**).
- Différence capitale : ces variations étaient **naturelles** ; le réchauffement actuel est surtout causé par les **activités humaines**.

### Jalon 2 : le climat, enjeu des relations internationales
- **1988** : création du **GIEC** (Groupe d'experts intergouvernemental sur l'évolution du climat), qui fait la synthèse des travaux scientifiques.
- **1992** : **Sommet de la Terre** à **Rio** : **convention-cadre des Nations unies sur les changements climatiques** (CCNUCC). Les États se réunissent chaque année en **COP** (Conférence des parties), depuis 1995.
- **1997** : **protocole de Kyoto** : objectifs **contraignants** de baisse des émissions, mais **seulement pour les pays développés**. Les États-Unis ne le ratifient pas ; il entre en vigueur en 2005.
- **2009** : échec de la **COP15 de Copenhague**.
- **2015** : **accord de Paris** (**COP21**) : limiter le réchauffement « **nettement en dessous de 2 °C** » et viser 1,5 °C. **Tous les pays** s'engagent, mais par des contributions **nationales et volontaires**.
- Les tensions : **pays du Nord** (responsables historiques des émissions) contre **pays du Sud** (droit au développement, demande d'aide) ; principe des **responsabilités communes mais différenciées** ; la **Chine** est le premier émetteur annuel depuis le milieu des années 2000 ; les **petits États insulaires** sont menacés par la montée des mers. COP27 (2022) : fonds pour les **pertes et dommages**.

### Objet conclusif : les États-Unis et la question environnementale
- **Protéger la nature** : **Yellowstone**, premier **parc national** du monde (**1872**). Débat fondateur entre **John Muir** (préserver la nature sauvage, Sierra Club, 1892) et **Gifford Pinchot** (conserver pour exploiter durablement). Le président **Theodore Roosevelt** multiplie les espaces protégés.
- **Exploiter et transformer** : conquête de l'Ouest, barrages, agriculture intensive (le **Dust Bowl** des années 1930, tempêtes de poussière dans les Grandes Plaines), pétrole, aujourd'hui **gaz et pétrole de schiste** : les États-Unis sont le premier producteur mondial de pétrole et de gaz.
- **Années 1970** : création de l'**Agence de protection de l'environnement (EPA)** en **1970** sous Nixon, premier **Jour de la Terre** (22 avril 1970), lois sur l'air propre et l'eau propre.
- **État fédéral et États fédérés** : les politiques changent selon les présidents. Les États-Unis sortent de l'accord de Paris sous **Trump** (effectif en 2020), y reviennent sous **Biden** (2021), puis Trump annonce une nouvelle sortie en janvier 2025. Pendant ce temps, des États fédérés comme la **Californie** gardent des normes plus strictes.
- **Échelle internationale** : 2e émetteur mondial de CO2 aujourd'hui et premier émetteur cumulé de l'histoire. Les **firmes transnationales** (pétrolières, mais aussi Tesla), les **ONG** (Sierra Club) et les villes pèsent aussi. Grandes marées noires : **Exxon Valdez** (1989), **Deepwater Horizon** (2010).

### À retenir pour le bac
- Dates : 1872, 1970, 1988, 1992, 1997, 2015.
- Optimum médiéval, petit âge glaciaire, Tambora 1815, Le Roy Ladurie.
- Kyoto (contraignant, pays riches seulement) contre Paris (tous les pays, engagements volontaires).
- Sujet tombé : « Le changement climatique, un enjeu géopolitique » (bac 2025).
- Piège : les États-Unis ne sont pas un bloc ; opposer État fédéral et États fédérés.`,
      cartes: [
        { q: "Qu'est-ce que l'optimum climatique médiéval ?", r: "Une période plus douce en Europe, environ de 950 à 1250. Les Vikings s'installent alors au Groenland." },
        { q: "Qu'est-ce que le petit âge glaciaire ?", r: "Une période plus froide en Europe, du XIVe au milieu du XIXe siècle : hivers rudes, glaciers qui avancent, famines." },
        { q: "Pourquoi 1816 est-elle « l'année sans été » ?", r: "Les cendres de l'éruption du volcan Tambora (Indonésie, 1815) ont refroidi le climat : récoltes perdues, famines." },
        { q: "Quelles archives permettent de connaître le climat passé ?", r: "Les dates des vendanges, les registres paroissiaux, les prix du blé ; et en sciences, les cernes des arbres et les carottes glaciaires." },
        { q: "Qui a fondé l'histoire du climat en France ?", r: "Emmanuel Le Roy Ladurie, avec Histoire du climat depuis l'an mil (1967)." },
        { q: "Qu'est-ce que le GIEC ?", r: "Le Groupe d'experts intergouvernemental sur l'évolution du climat, créé en 1988 : il fait la synthèse des connaissances scientifiques." },
        { q: "Que se passe-t-il à Rio en 1992 ?", r: "Le Sommet de la Terre adopte la convention-cadre de l'ONU sur les changements climatiques, qui crée les COP." },
        { q: "Quelle est la limite du protocole de Kyoto (1997) ?", r: "Ses objectifs ne concernent que les pays développés, et les États-Unis ne l'ont pas ratifié." },
        { q: "Quel est l'objectif de l'accord de Paris (2015) ?", r: "Limiter le réchauffement nettement en dessous de 2 °C, et si possible à 1,5 °C, avec des engagements de tous les pays." },
        { q: "Que signifie « responsabilités communes mais différenciées » ?", r: "Tous les États doivent agir, mais les pays riches, plus responsables des émissions passées, doivent faire davantage." },
        { q: "Quel est le premier parc national du monde ?", r: "Yellowstone, aux États-Unis, créé en 1872." },
        { q: "Quel débat oppose John Muir et Gifford Pinchot ?", r: "Muir veut préserver la nature sauvage ; Pinchot veut la conserver pour l'exploiter durablement." },
        { q: "Qu'est-ce que le Dust Bowl ?", r: "Des tempêtes de poussière dans les Grandes Plaines américaines dans les années 1930, dues à l'érosion des sols surexploités." },
        { q: "Quand est créée l'Agence américaine de protection de l'environnement (EPA) ?", r: "En 1970, sous la présidence de Richard Nixon." },
        { q: "Pourquoi la Californie compte-t-elle dans la politique climatique américaine ?", r: "C'est un État fédéré qui garde des normes environnementales plus strictes, même quand l'État fédéral recule." },
      ],
      quiz: [
        { q: "Quel historien a fondé l'histoire du climat avec un livre de 1967 ?", choix: ["Emmanuel Le Roy Ladurie", "Jean-Baptiste Duroselle", "Pierre Nora", "Marc Bloch"], bonne: 0, expl: "Le Roy Ladurie publie Histoire du climat depuis l'an mil en 1967. Duroselle est un historien des relations internationales.", niv: 1 },
        { q: "En quelle année est créé le GIEC ?", choix: ["2005", "1992", "1997", "1988"], bonne: 3, expl: "Le GIEC naît en 1988. Rio date de 1992, Kyoto de 1997, et Kyoto entre en vigueur en 2005.", niv: 1 },
        { q: "Quel est le premier parc national du monde ?", choix: ["Yosemite", "Le Grand Canyon", "Yellowstone", "Les Everglades"], bonne: 2, expl: "Yellowstone, en 1872. Yosemite devient parc national en 1890.", niv: 1 },
        { q: "Les dates de vendanges retardées sur plusieurs décennies indiquent :", choix: ["un climat plus chaud", "un refroidissement du climat", "une guerre", "une épidémie de peste"], bonne: 1, expl: "Le raisin mûrit plus tard quand les étés sont frais : les vendanges tardives signalent un refroidissement.", niv: 2 },
        { q: "Pourquoi l'éruption du Tambora (1815) a-t-elle touché l'Europe ?", choix: ["Elle a projeté des cendres qui ont refroidi le climat", "Elle a déclenché un tsunami en Atlantique", "Elle a ruiné le commerce des épices", "Elle a provoqué la fin de l'optimum climatique médiéval en Europe"], bonne: 0, expl: "Les cendres et les gaz dans la haute atmosphère ont fait baisser les températures : 1816 est l'année sans été.", niv: 2 },
        { q: "Quelle différence principale entre Kyoto (1997) et Paris (2015) ?", choix: ["Kyoto concerne tous les pays du monde", "Paris impose des quotas fixés par l'ONU", "Paris engage tous les pays, sur une base volontaire", "Kyoto a été rejeté par l'Union européenne"], bonne: 2, expl: "Kyoto imposait des objectifs aux seuls pays riches. Paris engage tous les pays, mais chacun fixe ses propres objectifs.", niv: 2 },
        { q: "Un petit État insulaire du Pacifique réclame plus d'aide aux pays riches. Sur quel principe s'appuie-t-il ?", choix: ["La souveraineté des États sur leur zone économique exclusive", "La responsabilité de protéger", "Le principe de sécurité collective", "Les responsabilités communes mais différenciées"], bonne: 3, expl: "Les pays riches ont émis le plus dans le passé : ils doivent faire et payer davantage. La montée des mers menace ces îles.", niv: 2 },
        { q: "Gifford Pinchot défendait plutôt :", choix: ["la préservation totale de la nature sauvage", "une exploitation raisonnée et durable des forêts", "l'abandon des parcs nationaux", "la fin de l'industrie du bois"], bonne: 1, expl: "Pinchot, premier chef du service des forêts, veut conserver pour exploiter durablement. Muir, lui, veut préserver.", niv: 2 },
        { q: "Entre 2017 et 2021, des États fédérés américains maintiennent leurs objectifs climatiques. Cela montre :", choix: ["le poids des États fédérés face à l'État fédéral", "la fin du fédéralisme américain", "la sortie de la Californie des États-Unis", "l'autorité de l'ONU sur la politique intérieure des États"], bonne: 0, expl: "Pendant la première sortie de l'accord de Paris, des États comme la Californie ont continué à agir : les États-Unis ne sont pas un bloc.", niv: 2 },
        { q: "Pourquoi le petit âge glaciaire ne prouve-t-il **pas** que le réchauffement actuel est naturel ?", choix: ["Il a été démenti par les historiens qui étudient les vendanges", "Il a touché toute la planète en même temps", "Il avait des causes naturelles, différentes des causes actuelles", "Il s'est terminé par une guerre"], bonne: 2, expl: "Les variations passées avaient des causes naturelles (soleil, volcans). Le réchauffement actuel s'explique surtout par nos émissions.", niv: 3 },
        { q: "Pourquoi la Chine est-elle au centre des négociations climatiques ?", choix: ["Elle a toujours refusé de signer l'accord de Paris", "Elle émet le plus et se dit pays en développement", "Elle n'a ratifié que le protocole de Kyoto", "Elle a organisé la COP21"], bonne: 1, expl: "Premier émetteur annuel, la Chine revendique aussi le statut de pays en développement : elle est entre le Nord et le Sud.", niv: 3 },
        { q: "Quelle affirmation sur les États-Unis et l'environnement est juste ?", choix: ["Ils ont refusé de signer les grands accords climatiques", "L'État fédéral laisse l'environnement aux seuls États", "Ils ont cessé d'exploiter le pétrole depuis 1970", "Ils protègent la nature tout en l'exploitant massivement"], bonne: 3, expl: "Pionniers des parcs nationaux et de l'EPA, ils sont aussi le premier producteur de pétrole et de gaz : d'où les « tensions et contrastes ».", niv: 3 },
      ],
    },
    {
      chapitre: 'hggsp-9',
      fiche: `## Produire et diffuser des connaissances

### Introduction : la société de la connaissance
- La **connaissance** est un savoir construit, vérifié et transmis. Elle est devenue une ressource **économique** et **géopolitique**.
- **Peter Drucker** parle de « **société de la connaissance** » en **1969** (The Age of Discontinuity) : la richesse vient de plus en plus du savoir, et non plus seulement du travail et du capital.
- Débats : la connaissance est-elle vraiment partagée ? Il existe une **fracture numérique**, des inégalités d'accès à l'école, et la **désinformation** circule aussi vite que le savoir.
- Une **communauté savante** (ou **scientifique**) est un groupe de chercheurs qui partagent des méthodes, se lisent, se critiquent et valident ensemble les résultats.
  - Au XVIIe siècle : la « République des lettres », les **académies** (Royal Society en 1660, Académie des sciences en 1666), les premières **revues** savantes (1665).
  - Aujourd'hui : revues, colloques, **évaluation par les pairs**.
- Les **acteurs** de la circulation du savoir : États, universités, entreprises, chercheurs, étudiants, diasporas, organisations internationales (UNESCO).

### Jalon 1 : l'alphabétisation des femmes, du XVIe siècle à nos jours
- Être **alphabétisé**, c'est savoir lire et écrire. Les historiens le mesurent par exemple grâce aux **signatures** sur les actes de mariage.
- **XVIe-XVIIe siècle** : la **Réforme protestante** encourage chacun, femmes comprises, à lire la Bible ; les pays protestants (Allemagne du Nord, Suède) progressent plus vite. Côté catholique, des **congrégations** enseignantes, comme les Ursulines, ouvrent des écoles de filles.
- **France, XIXe siècle** :
  - **loi Falloux** (**1850**) : une école de filles dans les communes de plus de 800 habitants ;
  - **loi Duruy** (**1867**) : dès 500 habitants ;
  - **Julie-Victoire Daubié**, première femme bachelière (**1861**) ;
  - **loi Camille Sée** (**1880**) : lycées de jeunes filles ;
  - **lois Ferry** (**1881-1882**) : école primaire **gratuite**, **obligatoire** de 6 à 13 ans et **laïque**, pour les filles comme pour les garçons.
- Vers 1900, en France, l'écart entre hommes et femmes a presque disparu.
- **Dans le monde aujourd'hui** : environ 750 millions d'adultes ne savent pas lire, dont près des **deux tiers sont des femmes**, surtout en Afrique subsaharienne et en Asie du Sud. L'**UNESCO** et l'**objectif de développement durable n° 4** (2015) visent une éducation de qualité pour tous.
- Des reculs existent : en **Afghanistan**, les talibans interdisent l'école secondaire aux filles depuis 2021, puis l'université (2022). **Malala Yousafzai**, militante pakistanaise de l'éducation des filles, reçoit le prix Nobel de la paix en **2014**.
- Pourquoi c'est important : une femme alphabétisée a plus d'autonomie, de meilleurs revenus, moins d'enfants, et ses enfants vont plus à l'école.

### Jalon 2 : la radioactivité, de 1896 aux années 1950
- **1896** : **Henri Becquerel** découvre que l'**uranium** émet un rayonnement.
- **1898** : **Pierre et Marie Curie** découvrent le **polonium** et le **radium** ; Marie Curie invente le mot « **radioactivité** ».
- **1903** : prix Nobel de physique partagé entre Becquerel et les Curie. **1911** : Marie Curie reçoit seule le Nobel de **chimie** (elle est la première personne à avoir deux prix Nobel).
- Les échanges sont **internationaux** : **Ernest Rutherford** (né en Nouvelle-Zélande, il travaille au Canada puis en Angleterre) étudie les rayons alpha et bêta et découvre le noyau atomique (1911) ; les **conférences Solvay** à Bruxelles réunissent les grands physiciens (1911).
- **1934** : **Irène et Frédéric Joliot-Curie** découvrent la **radioactivité artificielle** (Nobel de chimie 1935).
- **1938-1939** : **Otto Hahn** et Fritz Strassmann observent la **fission** de l'uranium ; **Lise Meitner** et Otto Frisch l'expliquent.
- **Rupture** : la science devient **secrète** et **militaire**. En 1939, Einstein signe une lettre à Roosevelt ; le **projet Manhattan** produit la bombe atomique (**Hiroshima**, 6 août 1945). La France crée le **CEA** en **1945**. L'URSS a la bombe en **1949**.
- Années 1950 : retour partiel de la **coopération** avec le discours « **Des atomes pour la paix** » d'Eisenhower (1953) et la création du **CERN** (1954).

### À retenir pour le bac
- Définir **société de la connaissance** (Drucker, 1969) et **communauté savante**.
- Dates : 1850, 1867, 1881-1882 ; 1896, 1898, 1903, 1911, 1934, 1945, 1954.
- Montrer que la science est à la fois **coopération internationale** et **enjeu de puissance**.
- Piège : la radioactivité n'est pas découverte par Marie Curie, mais par Becquerel ; elle lui donne son nom.`,
      cartes: [
        { q: "Qui parle de « société de la connaissance » en 1969 ?", r: "Peter Drucker, dans The Age of Discontinuity : le savoir devient la principale source de richesse." },
        { q: "Qu'est-ce qu'une communauté savante ?", r: "Un groupe de chercheurs qui partagent des méthodes, publient, se critiquent et valident ensemble les connaissances." },
        { q: "Qu'est-ce que l'évaluation par les pairs ?", r: "Avant publication, un article scientifique est relu et critiqué par d'autres spécialistes du domaine." },
        { q: "Pourquoi la Réforme protestante favorise-t-elle l'alphabétisation des femmes ?", r: "Elle demande à chaque fidèle, homme ou femme, de lire lui-même la Bible." },
        { q: "Que prévoit la loi Falloux de 1850 pour les filles ?", r: "Une école de filles dans chaque commune de plus de 800 habitants." },
        { q: "Qui est la première bachelière française ?", r: "Julie-Victoire Daubié, en 1861." },
        { q: "Que créent les lois Ferry (1881-1882) ?", r: "Une école primaire gratuite, obligatoire de 6 à 13 ans et laïque, pour les filles comme pour les garçons." },
        { q: "Quelle part des adultes analphabètes sont des femmes dans le monde ?", r: "Près des deux tiers, surtout en Afrique subsaharienne et en Asie du Sud." },
        { q: "Pourquoi Malala Yousafzai est-elle connue ?", r: "Militante pakistanaise de l'éducation des filles, blessée par les talibans en 2012, prix Nobel de la paix en 2014." },
        { q: "Qui découvre la radioactivité, et quand ?", r: "Henri Becquerel, en 1896, avec l'uranium." },
        { q: "Qu'ont découvert Pierre et Marie Curie en 1898 ?", r: "Le polonium et le radium. Marie Curie crée le mot « radioactivité »." },
        { q: "Pourquoi Marie Curie est-elle exceptionnelle ?", r: "Première personne à recevoir deux prix Nobel : physique en 1903, chimie en 1911." },
        { q: "Qu'ont découvert Irène et Frédéric Joliot-Curie ?", r: "La radioactivité artificielle, en 1934 (prix Nobel de chimie 1935)." },
        { q: "Qui explique la fission nucléaire en 1939 ?", r: "Lise Meitner et Otto Frisch, après les expériences d'Otto Hahn et Fritz Strassmann (fin 1938)." },
        { q: "Qu'est-ce que le projet Manhattan ?", r: "Le programme secret américain qui fabrique la bombe atomique pendant la Seconde Guerre mondiale." },
      ],
      quiz: [
        { q: "Qui découvre la radioactivité en 1896 ?", choix: ["Marie Curie", "Paul Langevin", "Henri Becquerel", "Pierre Curie"], bonne: 2, expl: "Becquerel la découvre avec l'uranium. Marie Curie lui donne son nom en 1898.", niv: 1 },
        { q: "Quel auteur popularise la notion de société de la connaissance en 1969 ?", choix: ["Peter Drucker", "Thomas Kuhn", "Pierre Bourdieu", "Paul Crutzen"], bonne: 0, expl: "Drucker, spécialiste du management. Bourdieu est un sociologue de l'école, Kuhn a forgé la notion de paradigme scientifique.", niv: 1 },
        { q: "Quelle loi rend l'école primaire obligatoire pour les filles comme pour les garçons ?", choix: ["Les lois Falloux et Duruy", "La loi Camille Sée", "La loi Guizot", "Les lois Ferry"], bonne: 3, expl: "Les lois Ferry (1881-1882). Camille Sée crée les lycées de jeunes filles en 1880, sans obligation.", niv: 1 },
        { q: "Qui reçoit seule le prix Nobel de chimie en 1911 ?", choix: ["Irène Joliot-Curie", "Marie Curie", "Lise Meitner", "Harriet Brooks"], bonne: 1, expl: "Marie Curie, pour le radium et le polonium. Irène et Frédéric Joliot-Curie l'obtiennent ensemble en 1935.", niv: 1 },
        { q: "Un chercheur envoie son article à une revue, qui le fait relire par deux spécialistes. C'est :", choix: ["la vulgarisation", "le brevet", "l'évaluation par les pairs", "le transfert de savoir"], bonne: 2, expl: "La relecture par d'autres spécialistes est le cœur du fonctionnement de la communauté scientifique.", niv: 2 },
        { q: "Pourquoi les signatures sur les actes de mariage intéressent-elles les historiens ?", choix: ["Elles mesurent la natalité", "Elles prouvent la religion des époux", "Elles indiquent le niveau de richesse des deux familles", "Elles permettent d'estimer l'alphabétisation"], bonne: 3, expl: "Savoir signer son nom donne une mesure approximative, mais comparable dans le temps, de la capacité à écrire.", niv: 2 },
        { q: "En 1900, en France, l'écart d'alphabétisation entre hommes et femmes :", choix: ["a presque disparu", "s'est creusé", "concerne la moitié des femmes", "n'existait déjà plus en 1800"], bonne: 0, expl: "Grâce aux écoles de filles et aux lois Ferry, l'écart s'est presque comblé vers 1900. Il était fort au XVIIIe siècle.", niv: 2 },
        { q: "Pourquoi la découverte de la fission (1938-1939) est-elle un tournant ?", choix: ["Elle prouve l'existence du radium", "Elle rend possible la bombe atomique et le nucléaire civil", "Elle met fin aux recherches sur l'uranium", "Elle crée le CERN"], bonne: 1, expl: "La fission libère une énergie immense : les États lancent des programmes militaires secrets, comme le projet Manhattan.", niv: 2 },
        { q: "Rutherford, Néo-Zélandais travaillant au Canada puis en Angleterre, illustre surtout :", choix: ["la fuite des cerveaux vers les États-Unis", "le secret militaire de la recherche", "la circulation internationale des savants avant 1939", "la fin de la communauté scientifique"], bonne: 2, expl: "Avant 1939, les savants circulent et échangent beaucoup entre pays : la radioactivité est une aventure internationale.", niv: 2 },
        { q: "Qu'est-ce qui change pour la recherche nucléaire à partir de 1939 ?", choix: ["Elle devient secrète et militaire", "Elle est interdite aux femmes", "Elle se concentre dans les laboratoires français", "Elle cesse d'être financée"], bonne: 0, expl: "La guerre transforme une communauté ouverte en recherche secrète au service des États (projet Manhattan, programme soviétique).", niv: 3 },
        { q: "Pourquoi alphabétiser les femmes est-il un enjeu de développement ?", choix: ["Cela réduit le nombre d'écoles nécessaires", "Cela profite surtout aux pays riches qui financent l'école", "Cela remplace l'école des garçons", "Cela améliore aussi l'éducation des enfants"], bonne: 3, expl: "Une mère alphabétisée scolarise davantage ses enfants, a plus d'autonomie et de revenus : l'effet se transmet.", niv: 3 },
        { q: "Quel argument nuance l'idée d'une « société de la connaissance » partagée par tous ?", choix: ["Le savoir ne produit plus de richesse depuis les années 1990", "La fracture numérique et l'analphabétisme persistent", "La science a cessé de progresser", "Internet a supprimé les universités"], bonne: 1, expl: "Des centaines de millions d'adultes ne savent pas lire et l'accès à Internet reste inégal : le savoir n'est pas partagé également.", niv: 3 },
      ],
    },
    {
      chapitre: 'hggsp-10',
      fiche: `## La connaissance, enjeu de puissance : renseignement, Inde et cyberespace

### Jalon 1 : le renseignement pendant la guerre froide
- Le **renseignement** est la collecte et l'analyse d'informations secrètes au service d'un État. Pendant la guerre froide, savoir ce que prépare l'adversaire est vital.
- Les services :
  - côté américain, la **CIA** (créée en **1947**) et la **NSA** (1952, écoutes) ;
  - côté soviétique, le **KGB** (créé en **1954**) et le GRU (renseignement militaire).
- **L'espionnage atomique** : des espions transmettent des secrets du projet Manhattan à l'URSS (**Klaus Fuchs**) ; les époux **Rosenberg** sont exécutés aux États-Unis en **1953**. Le réseau des « **Cinq de Cambridge** » (Kim Philby) trahit le Royaume-Uni au profit de Moscou.
- **La technologie** : l'avion espion **U-2** est abattu au-dessus de l'URSS le **1er mai 1960** (le pilote Gary Powers est échangé en 1962 contre un espion soviétique à Berlin) ; en **octobre 1962**, des photos prises par un U-2 révèlent les missiles soviétiques à **Cuba**. Puis viennent les **satellites espions**.
- **Les actions secrètes** : la CIA aide à renverser des gouvernements (Iran en **1953**, Guatemala en 1954) et échoue à la **baie des Cochons** (Cuba, 1961).
- Le renseignement est une **connaissance** que l'État produit, protège et refuse de partager.

### Jalon 2 : l'Inde, étudiants, transferts de technologie et puissance
- Après l'indépendance (1947), **Nehru** fait de la science une priorité : création des **Indian Institutes of Technology** (IIT, le premier en **1951**).
- Beaucoup d'ingénieurs formés en Inde partent aux États-Unis : c'est la **fuite des cerveaux**. On parle ensuite de **circulation des cerveaux** : une partie revient ou investit en Inde.
- La **diaspora indienne** est la plus nombreuse du monde. Les Indiens sont aujourd'hui le premier groupe d'étudiants étrangers aux États-Unis. Des Indiens dirigent de grandes firmes (Google, Microsoft).
- Les migrants envoient de l'argent à leurs familles : l'Inde est le **premier pays receveur de transferts de fonds** du monde (plus de 100 milliards de dollars par an).
- **Bangalore** (Bengaluru) est surnommée la « Silicon Valley indienne » : services informatiques, firmes comme Infosys ou TCS.
- L'Inde exige des **transferts de technologie** quand elle achète du matériel (programme « **Make in India** », 2014) ; elle a un programme spatial reconnu (sonde lunaire en 2023).
- Limites : une grande partie de la population reste peu formée, et l'Inde dépend encore de technologies étrangères.

### Objet conclusif : le cyberespace
- Le **cyberespace** est l'espace créé par l'interconnexion mondiale des ordinateurs. Il a trois **couches** :
  - **physique** : câbles sous-marins (qui transportent l'essentiel du trafic intercontinental), centres de données, satellites ;
  - **logique** : logiciels, protocoles, noms de domaine ;
  - **informationnelle** : les contenus et les données.
- Ce n'est pas un espace « hors-sol » : il a une **géographie**, contrôlée par des acteurs puissants (États-Unis, Chine, géants du numérique).
- **Liberté ou contrôle** : la Chine filtre Internet (« grande muraille numérique »), la Russie veut un Internet souverain ; l'**affaire Snowden** (2013) révèle la surveillance de masse de la NSA ; l'Union européenne protège les données avec le **RGPD** (en vigueur en 2018).
- **Conflictualité** : cyberattaques contre l'**Estonie** (2007), virus **Stuxnet** contre le programme nucléaire iranien (révélé en 2010), rançongiciels mondiaux **WannaCry** et **NotPetya** (2017), manipulations de l'information.
- **La France** : l'**ANSSI** (agence de sécurité des systèmes d'information) est créée en **2009** ; le **COMCYBER** (commandement de la cyberdéfense des armées) en **2017** ; la France reconnaît en 2019 une doctrine de **lutte informatique offensive** ; **Viginum** (2021) lutte contre les ingérences numériques étrangères.
- **Coopération européenne** : agence européenne **ENISA**, directives **NIS** (2016) et **NIS 2** (2022). Mais chaque État garde la main sur sa défense : la cyberdéfense reste une affaire de **souveraineté nationale**. L'**Appel de Paris** (2018) promeut des règles communes.

### À retenir pour le bac
- Le savoir est une ressource de **puissance** : on le **protège** (secret, renseignement) ou on l'**attire** (étudiants, cerveaux).
- Dates : CIA 1947, KGB 1954, U-2 1960, Cuba 1962 ; IIT 1951 ; ANSSI 2009, Snowden 2013, COMCYBER 2017, RGPD 2018.
- Le cyberespace a une **dimension territoriale** (câbles, centres de données).
- Piège : opposer fuite et circulation des cerveaux ; l'Inde montre que la migration peut aussi renforcer le pays de départ.`,
      cartes: [
        { q: "Qu'est-ce que le renseignement ?", r: "La collecte et l'analyse d'informations, souvent secrètes, au service des décisions d'un État." },
        { q: "Quand sont créés la CIA et le KGB ?", r: "La CIA en 1947, le KGB en 1954." },
        { q: "Pourquoi les époux Rosenberg sont-ils célèbres ?", r: "Accusés d'avoir transmis des secrets atomiques à l'URSS, ils sont exécutés aux États-Unis en 1953." },
        { q: "Que se passe-t-il le 1er mai 1960 ?", r: "Un avion espion américain U-2 est abattu au-dessus de l'URSS ; son pilote, Gary Powers, est capturé." },
        { q: "Quel rôle joue le renseignement dans la crise de Cuba ?", r: "En octobre 1962, des photos prises par un avion U-2 révèlent l'installation de missiles soviétiques à Cuba." },
        { q: "Que sont les IIT ?", r: "Les Indian Institutes of Technology, écoles d'ingénieurs créées à partir de 1951 à l'initiative de Nehru." },
        { q: "Quelle différence entre fuite et circulation des cerveaux ?", r: "La fuite est un départ définitif des diplômés. La circulation inclut les retours, les investissements et les échanges avec le pays d'origine." },
        { q: "Pourquoi Bangalore est-elle surnommée la « Silicon Valley indienne » ?", r: "Elle concentre les entreprises de services informatiques et de haute technologie (Infosys, TCS…)." },
        { q: "Qu'est-ce qu'un transfert de technologie ?", r: "Le fait qu'un pays ou une firme transmette un savoir-faire technique à un autre, souvent en échange d'un achat." },
        { q: "Quelles sont les trois couches du cyberespace ?", r: "La couche physique (câbles, serveurs), la couche logique (logiciels, protocoles) et la couche informationnelle (contenus, données)." },
        { q: "Par où passe l'essentiel du trafic Internet entre continents ?", r: "Par des câbles sous-marins." },
        { q: "Qu'a révélé Edward Snowden en 2013 ?", r: "Les programmes de surveillance de masse de la NSA américaine, y compris envers des alliés." },
        { q: "Qu'est-ce que Stuxnet ?", r: "Un virus informatique, révélé en 2010, qui a saboté des centrifugeuses du programme nucléaire iranien." },
        { q: "Qu'est-ce que l'ANSSI ?", r: "L'Agence nationale de la sécurité des systèmes d'information, créée en France en 2009." },
        { q: "Qu'est-ce que le COMCYBER ?", r: "Le commandement de la cyberdéfense des armées françaises, créé en 2017." },
      ],
      quiz: [
        { q: "En quelle année est créée la CIA ?", choix: ["1954", "1947", "1952", "1962"], bonne: 1, expl: "La CIA date de 1947. La NSA est créée en 1952, le KGB en 1954.", niv: 1 },
        { q: "Quel État a été frappé par une vaste cyberattaque en 2007 ?", choix: ["L'Iran", "La France", "L'Estonie", "L'Ukraine"], bonne: 2, expl: "L'Estonie, en 2007, après une dispute avec la Russie. L'Iran est la cible de Stuxnet, révélé en 2010.", niv: 1 },
        { q: "Quel organisme français est chargé de la sécurité informatique de l'État depuis 2009 ?", choix: ["L'ANSSI", "Le COMCYBER", "Viginum", "La CNIL"], bonne: 0, expl: "L'ANSSI (2009). Le COMCYBER est militaire (2017), Viginum lutte contre les ingérences (2021), la CNIL protège les données personnelles.", niv: 1 },
        { q: "Quel est le premier pays receveur de transferts de fonds des migrants ?", choix: ["La Chine", "Le Mexique", "Les Philippines", "L'Inde"], bonne: 3, expl: "L'Inde reçoit plus de 100 milliards de dollars par an de sa diaspora, devant le Mexique.", niv: 1 },
        { q: "Un ingénieur indien formé aux États-Unis revient créer une start-up à Bangalore. C'est :", choix: ["une fuite des cerveaux", "une circulation des cerveaux", "un transfert de fonds", "un transfert de technologie militaire"], bonne: 1, expl: "Il part, se forme, puis revient et investit : c'est la circulation des cerveaux, qui profite au pays d'origine.", niv: 2 },
        { q: "Une panne de câble sous-marin coupe Internet dans une île. Quelle couche du cyberespace est touchée ?", choix: ["La couche informationnelle", "La couche logique", "La couche sémantique", "La couche physique"], bonne: 3, expl: "Les câbles appartiennent à la couche physique, qui montre que le cyberespace a une géographie.", niv: 2 },
        { q: "Que révèlent les photos prises par un avion U-2 en octobre 1962 ?", choix: ["Des missiles soviétiques à Cuba", "Une base américaine en Turquie", "Un essai nucléaire chinois", "Des sous-marins soviétiques en Islande"], bonne: 0, expl: "Ces photos déclenchent la crise des missiles de Cuba : le renseignement permet de réagir avant que les missiles soient prêts.", niv: 2 },
        { q: "L'Inde achète des avions à condition qu'une partie soit fabriquée chez elle. Elle cherche :", choix: ["une fuite des cerveaux", "un transfert de technologie", "un transfert de fonds de sa diaspora", "une aide au développement"], bonne: 1, expl: "Fabriquer sur place permet d'acquérir le savoir-faire : c'est un transfert de technologie, au cœur de « Make in India ».", niv: 2 },
        { q: "Pourquoi l'affaire Snowden (2013) a-t-elle eu un impact mondial ?", choix: ["Elle a révélé l'espionnage du KGB", "Elle a provoqué la création de l'ANSSI", "Elle a révélé la surveillance de masse de la NSA", "Elle a déclenché la cyberattaque russe contre l'Estonie"], bonne: 2, expl: "Snowden montre que la NSA surveille massivement, y compris des alliés : débat sur la vie privée et la souveraineté numérique.", niv: 2 },
        { q: "Pourquoi la cyberdéfense reste-t-elle surtout nationale malgré l'Union européenne ?", choix: ["Les États veulent garder la maîtrise de leur sécurité", "L'UE n'a aucune règle sur le numérique", "Les cyberattaques restent nationales", "L'OTAN interdit toute coopération"], bonne: 0, expl: "L'UE coordonne (ENISA, NIS 2), mais la défense touche à la souveraineté : chaque État garde ses moyens offensifs et ses secrets.", niv: 3 },
        { q: "Pourquoi dit-on que le cyberespace n'est **pas** un espace « hors-sol » ?", choix: ["Il n'existe que dans les satellites", "Il appartient à l'ONU, qui en fixe les règles depuis 1945", "Il repose sur des câbles et des serveurs localisés", "Il est interdit dans plusieurs pays"], bonne: 2, expl: "Câbles, centres de données et serveurs sont localisés et contrôlés par des États ou des firmes : le cyberespace a une géographie.", niv: 3 },
        { q: "Quel point commun entre le renseignement de guerre froide et la cyberdéfense ?", choix: ["Ils reposent sur les mêmes avions espions", "Ils ont été inventés par la même agence américaine, la CIA", "Ils sont gérés par l'ONU", "Ils font de la connaissance un enjeu de puissance"], bonne: 3, expl: "Dans les deux cas, un État cherche à savoir ce que l'autre cache et à protéger ses propres informations.", niv: 3 },
      ],
    },
  ],
  methode: [
    { id: 'hggsp-m1', mat: 'hggsp', titre: 'Dissertation : analyser le sujet et écrire l\'introduction',
      formules: ['Un thème en quelques mots : « Les usages du patrimoine en France. »', 'Une notion et une période : « Construire la paix depuis le XVIIe siècle. »', 'Une affirmation à discuter : « Le changement climatique, un enjeu géopolitique. »'],
      vu: ['Bac 2025 métropole jour 1 : « Les usages du patrimoine en France »', 'Bac 2025 métropole jour 2 : « Construire la paix depuis le XVIIe siècle » et « Le changement climatique, un enjeu géopolitique »', 'Bac 2025 centres étrangers jour 1 : « Guerres régulières et guerres irrégulières après la fin de la Seconde Guerre mondiale »'],
      pts: '10 points (avec le développement)',
      attendu: 'Une introduction qui définit chaque mot du sujet, fixe ses limites dans le temps et l\'espace, pose une problématique (une vraie question, pas la reformulation du sujet) et annonce le plan. Le correcteur juge dès l\'introduction si le sujet a été compris.',
      etapes: ['Souligner chaque mot du sujet et le définir (exemple : « usages » = ce qu\'on fait du patrimoine : politique, économique, diplomatique).', 'Fixer les bornes : pourquoi cette date de départ, quel espace, quelle échelle.', 'Chercher la tension : ce qui pose problème, ce qui change, ce qui s\'oppose.', 'Écrire une problématique sous forme de question qui reprend cette tension.', 'Annoncer le plan en une phrase, en deux ou trois parties.', 'Rédiger dans l\'ordre : accroche concrète, définitions, bornes, problématique, annonce du plan.'],
      mots: ['problématique', 'bornes chronologiques', 'échelles', 'enjeu', 'acteurs', 'notion'],
      pieges: ['Réciter le cours sans définir les mots du sujet.', 'Une problématique qui répète le sujet avec un point d\'interrogation.', 'Oublier une partie de la période (exemple : ne parler que du XXe siècle pour « depuis le XVIIe siècle »).', 'Ne pas annoncer le plan.'],
      cas: 'Sujet : « Construire la paix depuis le XVIIe siècle. »',
      question: 'Rédige l\'introduction complète de cette dissertation.',
      modele: 'Le 13 septembre 1993, à Washington, Yitzhak Rabin et Yasser Arafat se serrent la main : la paix semble possible entre Israéliens et Palestiniens, mais elle ne viendra pas. Construire la paix, c\'est mettre fin à une guerre et organiser un ordre durable accepté par les anciens ennemis, par des traités, des institutions ou des actions sur le terrain. Le sujet commence au XVIIe siècle, avec les traités de Westphalie (1648) qui mettent fin à la guerre de Trente Ans, et va jusqu\'à nos jours. Il se place à l\'échelle européenne, puis mondiale. Comment les façons de construire la paix ont-elles évolué depuis le XVIIe siècle, et pourquoi la paix reste-t-elle si difficile à établir ? Nous verrons d\'abord que la paix s\'est longtemps construite par des traités entre États souverains, puis qu\'au XXe siècle elle passe par la sécurité collective et l\'ONU, enfin que les conflits actuels, comme au Moyen-Orient, montrent les limites de ces outils.',
      grille: ['Une accroche concrète et datée', 'Le mot « paix » (ou chaque mot clé) est défini', 'Les bornes sont justifiées (1648, aujourd\'hui)', 'La problématique est une vraie question avec une tension', 'Le plan est annoncé'] },
    { id: 'hggsp-m2', mat: 'hggsp', titre: 'Dissertation : construire le plan et les paragraphes',
      formules: ['Tout sujet de dissertation (10 points)', '« Le changement climatique, un enjeu géopolitique »', '« Les usages du patrimoine en France »'],
      vu: ['Bac 2025 métropole jours 1 et 2', 'Bac 2025 centres étrangers jour 1'],
      pts: '10 points (avec l\'introduction)',
      attendu: 'Un développement en deux ou trois parties qui répondent à la problématique, chacune avec deux ou trois paragraphes. Chaque paragraphe contient une idée, un exemple précis (date, acteur, lieu) et une phrase qui le relie au sujet. Une conclusion qui répond à la problématique. Un croquis ou un schéma en plus est valorisé, jamais obligatoire.',
      etapes: ['Choisir un plan : chronologique (évolution), thématique (aspects) ou dialectique (oui, mais), selon la problématique.', 'Donner un titre-idée à chaque partie (une phrase, pas un mot).', 'Pour chaque paragraphe : une idée, un exemple précis du cours, une explication, un lien au sujet.', 'Écrire une courte transition entre les parties.', 'Conclure : répondre clairement à la problématique, puis ouvrir sur une question proche.', 'Si possible, ajouter un schéma ou un croquis simple qui résume l\'argument.'],
      mots: ['acteurs', 'échelles', 'enjeux', 'rivalités', 'coopération', 'puissance', 'souveraineté'],
      pieges: ['Un plan qui récite le chapitre dans l\'ordre du cours au lieu de répondre à la question.', 'Des paragraphes sans exemple daté.', 'Des exemples sans explication.', 'Une conclusion qui résume sans répondre.', 'Traiter seulement un jalon alors que le sujet couvre tout le thème.'],
      cas: 'Sujet : « Le changement climatique, un enjeu géopolitique. » Problématique : en quoi le changement climatique est-il devenu un objet de coopération mais aussi de tensions entre les acteurs internationaux ?',
      question: 'Propose un plan détaillé en trois parties, avec au moins deux exemples précis par partie.',
      modele: 'I. Un problème mondial qui impose de coopérer : le GIEC (1988) établit le consensus scientifique ; le Sommet de la Terre de Rio (1992) crée la convention-cadre et les COP ; l\'accord de Paris (2015) engage tous les pays à limiter le réchauffement nettement sous 2 °C. II. Mais une coopération minée par les rivalités : le protocole de Kyoto (1997) ne concerne que les pays riches et n\'est pas ratifié par les États-Unis ; échec de Copenhague (2009) ; opposition Nord-Sud et principe des responsabilités communes mais différenciées ; la Chine, premier émetteur, se dit pays en développement. III. Des acteurs multiples qui recomposent la géopolitique du climat : aux États-Unis, sorties et retours dans l\'accord de Paris, tandis que la Californie maintient ses normes ; petits États insulaires menacés et fonds pour les pertes et dommages (2022) ; ONG et firmes. Conclusion : le climat est un enjeu géopolitique parce qu\'il oblige à coopérer tout en révélant des rapports de force.',
      grille: ['Le plan répond à la problématique', 'Chaque partie a un titre-idée', 'Au moins deux exemples datés par partie', 'Plusieurs acteurs et plusieurs échelles', 'La conclusion répond à la question'] },
    { id: 'hggsp-m3', mat: 'hggsp', titre: 'Étude critique : présenter le document et poser une problématique',
      formules: ['« En analysant le document et en vous appuyant sur vos connaissances, montrez que… »', '« En analysant les documents, en les confrontant… vous analyserez les moyens et les conséquences de… »'],
      vu: ['Bac 2025 métropole jour 1 : « Juger les génocides »', 'Bac 2025 métropole jour 2 : « L\'affirmation de la puissance chinoise »', 'Bac 2025 centres étrangers jour 1 : « De nouveaux espaces de conquête »'],
      pts: '10 points (avec l\'analyse)',
      attendu: 'Une introduction qui présente le ou les documents (nature, auteur, date, destinataire, contexte), puis une problématique tirée du titre et de la consigne, et une annonce de plan. Le correcteur attend que la présentation serve à comprendre le document, pas une fiche d\'identité récitée.',
      etapes: ['Lire le titre et la consigne : la consigne donne souvent le plan.', 'Identifier la nature du document (discours, article, traité, carte…), l\'auteur et sa fonction, la date, le destinataire.', 'Rappeler le contexte en deux ou trois phrases avec des connaissances datées.', 'Dire en une phrase l\'idée principale du document.', 'Poser une problématique qui reprend la consigne.', 'Annoncer les parties.'],
      mots: ['nature du document', 'auteur', 'point de vue', 'contexte', 'destinataire', 'portée'],
      pieges: ['Oublier de dire qui parle et à quel titre.', 'Un contexte trop long, qui raconte tout le chapitre.', 'Ne pas utiliser la consigne pour la problématique.', 'Avec deux documents, n\'en présenter qu\'un.'],
      cas: 'Document fictif inventé pour l\'entraînement : discours d\'un ministre français de la Culture, prononcé en 2012 à Lens pour l\'ouverture d\'un musée sur une ancienne fosse minière, quelques mois après l\'inscription du bassin minier au patrimoine mondial. Consigne : montrez comment la patrimonialisation sert la reconversion d\'un territoire.',
      question: 'Rédige l\'introduction de cette étude critique.',
      modele: 'Ce document est un discours, donc un texte officiel destiné à convaincre. Il est prononcé en 2012 par le ministre de la Culture à Lens, lors de l\'ouverture d\'un musée sur une ancienne fosse minière. Le contexte est celui d\'un territoire en crise depuis la fermeture des dernières mines en 1990, mais qui vient d\'être inscrit au patrimoine mondial de l\'UNESCO en 2012 comme paysage culturel évolutif vivant. Le ministre présente ce musée comme le symbole d\'un nouveau départ pour la région. Comment la transformation d\'un passé industriel en patrimoine peut-elle aider un territoire à se reconvertir, et quelles sont les limites de ce discours ? Nous verrons d\'abord comment le patrimoine minier est mis en valeur, puis ce que l\'État en attend, avant d\'en montrer les limites.',
      grille: ['Nature, auteur, date et destinataire sont donnés', 'Le contexte est daté et utile', 'L\'idée principale du document est dite', 'La problématique reprend la consigne', 'Le plan est annoncé'] },
    { id: 'hggsp-m4', mat: 'hggsp', titre: 'Étude critique : analyser, confronter et critiquer',
      formules: ['« …et en vous appuyant sur vos connaissances, montrez que… »', '« …en les confrontant… »', '« Vous montrerez l\'intérêt et les limites de ce document. »'],
      vu: ['Bac 2025 métropole jours 1 et 2', 'Bac 2025 centres étrangers jour 1'],
      pts: '10 points (avec l\'introduction)',
      attendu: 'Un développement en paragraphes organisés qui citent le document (entre guillemets, avec les lignes), l\'expliquent avec des connaissances précises qui ne sont pas dans le texte, et prennent du recul : ce que l\'auteur dit, ce qu\'il tait, ce que son point de vue explique. Avec deux documents, il faut les confronter (accord, désaccord, complément). Une conclusion répond à la problématique.',
      etapes: ['Organiser le développement en deux ou trois parties, en suivant la consigne.', 'Dans chaque paragraphe : citer un passage court, l\'expliquer, ajouter une connaissance précise (date, acteur, chiffre).', 'Confronter les documents s\'il y en a deux.', 'Critiquer : qui parle, pour quoi faire, que manque-t-il, qu\'est-ce que la suite a montré.', 'Conclure en répondant à la problématique et en disant l\'intérêt du document.'],
      mots: ['citer', 'expliciter', 'confronter', 'nuancer', 'point de vue', 'limites', 'portée'],
      pieges: ['Paraphraser : répéter le texte avec d\'autres mots.', 'Faire un cours à côté du document sans jamais le citer.', 'Garder la critique pour la dernière ligne au lieu de la mener tout du long.', 'Oublier que l\'auteur défend un intérêt (un ministre défend sa politique).'],
      cas: 'Document fictif inventé pour l\'entraînement : extrait d\'un discours d\'un responsable rwandais, en 2005, qui appelle la population à soutenir les tribunaux gacaca en disant la vérité, et affirme que ces tribunaux apporteront « justice et réconciliation ».',
      question: 'Rédige un paragraphe critique sur l\'idée que les gacaca apportent « justice et réconciliation ».',
      modele: 'L\'auteur affirme que les gacaca apporteront « justice et réconciliation ». Ces tribunaux populaires répondent à un vrai problème : après le génocide des Tutsis de 1994, qui a fait environ 800 000 morts, des dizaines de milliers d\'accusés attendaient en prison et les tribunaux classiques ne pouvaient pas tous les juger. De 2005 à 2012, les gacaca ont traité près de deux millions d\'affaires et permis à de nombreux rescapés de connaître la vérité. Mais ce discours officiel présente une vision optimiste : les juges étaient des habitants peu formés, les accusés n\'avaient pas d\'avocat, et des rescapés ont subi des pressions. Le responsable défend la politique de son gouvernement : il insiste sur la réconciliation nationale et passe sous silence ces critiques, formulées par des ONG de défense des droits humains.',
      grille: ['Une citation courte du document', 'Une explication avec au moins une connaissance datée hors du document', 'Une limite ou une critique précise', 'Le point de vue de l\'auteur est pris en compte'] },
  ],
  sujets: [
    { id: 'hggsp-s1', matiere: 'hggsp', titre: 'Sujet d\'entraînement 1 (thèmes 4, 5 et 6)', duree: 240,
      enonce: `Durée : 4 heures. Le candidat traite UN sujet de dissertation, au choix parmi les sujets 1 et 2, ET l'étude critique de document.
Répartition des points : dissertation 10 points, étude critique 10 points.

DISSERTATION (10 points) : traiter un des deux sujets.
Sujet 1 : Protéger et valoriser le patrimoine : une source de tensions ?
Sujet 2 : Les sociétés face au climat, du Moyen Âge à nos jours.

ÉTUDE CRITIQUE DE DOCUMENT (10 points) : Le cyberespace, un nouvel espace de conflictualité

Consigne : En analysant le document et en vous appuyant sur vos connaissances, montrez que le cyberespace est devenu un espace de rivalités entre États, et présentez les réponses de la France.

Document (texte fictif, écrit pour l'entraînement : l'auteur, le journal et les faits précis sont inventés, mais le contexte est réel).
Entretien avec un officier français de la cyberdéfense, publié dans un quotidien national en 2023.

« Le cyberespace n'est pas un monde virtuel. Il repose sur des câbles qui courent au fond des océans, sur des centres de données installés dans des pays bien réels. Celui qui contrôle ces infrastructures contrôle une partie des informations du monde. Depuis l'attaque contre l'Estonie en 2007 et le virus qui a saboté les centrifugeuses iraniennes, nous savons qu'un État peut frapper un autre État sans tirer un seul coup de feu. Aujourd'hui, nos hôpitaux, nos collectivités et nos entreprises sont visés presque chaque semaine par des rançongiciels, parfois venus de groupes protégés par des États étrangers. Il y a aussi les campagnes de fausses informations qui cherchent à diviser notre société pendant les élections. Face à cela, la France s'est organisée : une agence civile pour protéger l'État et les opérateurs vitaux, un commandement militaire depuis 2017, et une doctrine qui assume de pouvoir riposter. Nous travaillons avec nos partenaires européens, mais chacun garde la maîtrise de ses capacités offensives : dans ce domaine, on ne partage pas tout. »`,
      corrige: `DISSERTATION, SUJET 1 : Protéger et valoriser le patrimoine : une source de tensions ?

Introduction : le patrimoine est l'ensemble des biens, matériels ou immatériels, qu'une société juge dignes d'être transmis. Le protéger, c'est le conserver ; le valoriser, c'est le mettre en avant (tourisme, image, économie). Le sujet porte sur la période qui suit l'élargissement de la notion (convention de l'UNESCO de 1972) et sur plusieurs échelles. Problématique : pourquoi la protection et la mise en valeur du patrimoine, censées rassembler, provoquent-elles des conflits, et entre quels acteurs ?

I. Un patrimoine protégé et valorisé qui rassemble et développe
- L'UNESCO et la convention de 1972 : un patrimoine de l'humanité, valeur universelle exceptionnelle.
- En France : loi de 1913, ministère de Malraux (1959), loi Malraux de 1962 (le Marais).
- Le patrimoine comme levier de développement : bassin minier inscrit en 2012, Louvre-Lens.

II. Des tensions entre protection et usages économiques
- En ville : Paris entre protection et nouvel urbanisme (tour Montparnasse, débats sur les tours).
- Le tourisme : Venise et le surtourisme, paquebots interdits en 2021, taxe d'accès.
- Le patrimoine, enjeu de concurrence entre États pour l'inscription et le prestige (liste concentrée en Europe).

III. Des tensions géopolitiques : patrimoine disputé, patrimoine détruit
- Les frises du Parthénon : la Grèce réclame, le British Museum refuse.
- Le Mali : destructions à Tombouctou (2012), reconstruction par l'UNESCO, condamnation par la CPI (2016).
- Le patrimoine comme outil de soft power (repas gastronomique des Français, 2010).

Conclusion : le patrimoine est une source de tensions parce qu'il porte des intérêts économiques, des identités et de la puissance. Ces tensions montrent aussi l'importance qu'on lui accorde. Ouverture : les restitutions d'œuvres prises pendant la colonisation.

DISSERTATION, SUJET 2 : Les sociétés face au climat, du Moyen Âge à nos jours

Introduction : le climat est l'ensemble des conditions météorologiques moyennes d'une région sur une longue période. Problématique : comment les sociétés ont-elles subi, puis provoqué, les variations du climat, et comment tentent-elles d'y répondre ensemble ?
I. Des sociétés qui subissent des climats changeants (optimum médiéval, petit âge glaciaire, famines de 1693-1694 et de 1709, Tambora en 1815 ; sources : vendanges, glaciers, Le Roy Ladurie).
II. Des sociétés qui deviennent responsables du changement (révolution industrielle, charbon, grande accélération après 1950, GIEC en 1988).
III. Des sociétés qui cherchent à répondre ensemble, avec difficulté (Rio 1992, Kyoto 1997, Paris 2015, tensions Nord-Sud, États-Unis entre sorties et retours, rôle des États fédérés).
Conclusion : on passe d'un climat subi à un climat transformé par l'homme ; la réponse est mondiale mais reste inégale.

ÉTUDE CRITIQUE : Le cyberespace, un nouvel espace de conflictualité

Introduction : il s'agit d'un entretien de presse (fictif) avec un officier de cyberdéfense, en 2023. L'auteur est un militaire : il défend l'action de son institution. Contexte : multiplication des cyberattaques depuis les années 2000, création de l'ANSSI (2009) et du COMCYBER (2017). Problématique : en quoi le cyberespace est-il devenu un espace de rivalités entre États, et comment la France y répond-elle ?

I. Un espace bien réel, donc disputé
- « des câbles qui courent au fond des océans » : la couche physique ; l'essentiel du trafic intercontinental passe par les câbles sous-marins ; contrôle des infrastructures par quelques États et firmes.
- Connaissances : surveillance de la NSA révélée par Snowden (2013), filtrage d'Internet en Chine.

II. Des formes nouvelles de conflictualité
- « frapper un autre État sans tirer un seul coup de feu » : Estonie (2007), Stuxnet (révélé en 2010).
- Rançongiciels contre des services publics (WannaCry et NotPetya en 2017), groupes protégés par des États : difficulté d'attribuer une attaque.
- Fausses informations pendant les élections : guerre de l'information.

III. Les réponses françaises, entre coopération et souveraineté
- « une agence civile » : l'ANSSI (2009) ; « un commandement militaire depuis 2017 » : le COMCYBER ; doctrine de lutte informatique offensive (2019) ; Viginum (2021).
- Coopération européenne : ENISA, directives NIS et NIS 2, Appel de Paris (2018).
- Critique : « on ne partage pas tout » montre les limites de la coopération européenne ; l'auteur, militaire, insiste sur la menace et peut la présenter de façon alarmante pour justifier des moyens ; il ne parle pas des capacités offensives françaises elles-mêmes.

Conclusion : le document montre bien que le cyberespace est un espace de puissance et de conflit. Son intérêt est de présenter l'organisation française, sa limite est son point de vue d'acteur engagé.`,
      grille: [
        { c: 'Dissertation : introduction (définitions, bornes, problématique, plan annoncé)', pts: 3 },
        { c: 'Dissertation : développement organisé, exemples précis et datés, plusieurs échelles', pts: 5 },
        { c: 'Dissertation : conclusion qui répond à la problématique, expression correcte', pts: 2 },
        { c: 'Étude critique : présentation du document (nature, auteur, date, point de vue) et problématique', pts: 3 },
        { c: 'Étude critique : analyse du document avec citations et connaissances précises', pts: 5 },
        { c: 'Étude critique : regard critique (point de vue, limites) et conclusion', pts: 2 },
      ] },
  ],
};
