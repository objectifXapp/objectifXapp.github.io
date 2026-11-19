// Histoire des arts (enseignement de spécialité) — terminale, voie générale. Sources : voir matiere.sources.
// Programme : programme de terminale de la spécialité (BO spécial n° 8 du 25 juillet 2019), trois thématiques :
// un artiste en son temps ; arts, ville, politique et société ; objets et enjeux de l'histoire des arts.
// Questions limitatives à compter de la rentrée 2026, donc pour la session 2027 (BOENJS n° 4 du 22 janvier 2026, annexe 5) :
// « Eugène Viollet-le-Duc (1814-1879) », « Paris, capitale des arts, première moitié du XXe siècle », « Nature ? ».
// Épreuve : note de service du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026), applicable dès la session 2027 :
// écrit de 3 h 30 (un sujet au choix parmi trois, un par question) et oral de 30 minutes sur deux portfolios.
// Chapitres : méthode, trois chapitres par question limitative, puis l'épreuve.
export default {
  matiere: {
    id: 'hida',
    nom: 'Histoire des arts',
    voie: 'generale',
    epreuve: { type: 'ecrit+pratique', duree: 210, coef: 16, quand: 'juin', note: 'Écrit de 3 h 30 noté sur 20 : un sujet au choix parmi trois (un par question limitative), en dissertation ou en composition sur documents (sept documents au plus, cinq œuvres). Oral de 30 minutes sans préparation, noté sur 20 : exposé de 15 minutes au plus sur un portfolio tiré au sort, puis entretien. Chaque partie compte pour la moitié de la note.' },
    sources: [
      'https://eduscol.education.gouv.fr/5796/programmes-et-ressources-en-histoire-des-arts-voie-gt',
      'https://eduscol.education.gouv.fr/sites/default/files/document/progrlimitatif-spe-hida-tlegrs2026pdf-125612.pdf',
      'https://www.education.gouv.fr/bo/2026/Hebdo4/MENE2536492N',
      'https://www.education.gouv.fr/sites/default/files/document/bulletin-officiel-special-ndeg-4-du-17-septembre-2026-521035.pdf',
      'https://www.education.gouv.fr/bo/2026/Hebdo4/MENE2622657N',
      'https://hda.ac-versailles.fr/spip.php?article798=',
    ],
    chapitres: [
      { id: 'hida-1', t: 'Analyser et comparer des œuvres de tous les arts : méthode et vocabulaire', theme: 'Méthode' },
      { id: 'hida-2', t: 'Viollet-le-Duc, un artiste en son temps : parcours et contexte', theme: 'Un artiste en son temps : Eugène Viollet-le-Duc' },
      { id: 'hida-3', t: 'Viollet-le-Duc restaurateur : Vézelay, Notre-Dame, Carcassonne, Pierrefonds', theme: 'Un artiste en son temps : Eugène Viollet-le-Duc' },
      { id: 'hida-4', t: 'Viollet-le-Duc théoricien, dessinateur et créateur ; authenticité et patrimoine aujourd\'hui', theme: 'Un artiste en son temps : Eugène Viollet-le-Duc' },
      { id: 'hida-5', t: 'Paris, capitale des arts (1) : la Belle Époque et les avant-gardes, 1900-1914', theme: 'Arts, ville, politique et société : Paris, capitale des arts' },
      { id: 'hida-6', t: 'Paris, capitale des arts (2) : Montparnasse et les Années folles, 1919-1939', theme: 'Arts, ville, politique et société : Paris, capitale des arts' },
      { id: 'hida-7', t: 'Paris, capitale des arts (3) : guerre, exil et basculement vers New York', theme: 'Arts, ville, politique et société : Paris, capitale des arts' },
      { id: 'hida-8', t: 'Nature ? (1) : fusion originelle, nature sacrée et regards extra-occidentaux', theme: 'Objets et enjeux de l\'histoire des arts : Nature ?' },
      { id: 'hida-9', t: 'Nature ? (2) : les naturalismes, du paysage classique à l\'impressionnisme', theme: 'Objets et enjeux de l\'histoire des arts : Nature ?' },
      { id: 'hida-10', t: 'Nature ? (3) : ruptures techniques, art dans et avec la nature, écologie', theme: 'Objets et enjeux de l\'histoire des arts : Nature ?' },
      { id: 'hida-11', t: 'L\'épreuve : dissertation, composition sur documents et portfolios', theme: 'Méthode' },
    ],
  },
  paquets: [
    // ---------------------------------------------------------------- 1
    {
      chapitre: 'hida-1',
      fiche: `## Analyser et comparer des œuvres de tous les arts : méthode et vocabulaire

L'histoire des arts étudie **tous les arts** : architecture, peinture, sculpture, arts décoratifs, photographie, musique, danse, littérature, cinéma. Le correcteur attend un **vocabulaire précis** pour chaque art et des œuvres **identifiées et situées**.

### Identifier et situer une œuvre
- Toujours donner : l'**auteur**, le **titre**, la **date**, la **technique** ou la forme, le **lieu** (de conservation ou de construction).
- **Situer**, c'est relier l'œuvre à son **contexte de production** (qui la commande, pour qui, pourquoi, avec quels moyens) et à sa **réception** (comment elle est reçue à l'époque et aujourd'hui).

### Le vocabulaire de l'architecture
- **Plan** (vu de dessus), **élévation** (une façade dessinée de face), **coupe** (le bâtiment tranché).
- Une **nef** est le vaisseau central d'une église ; le **transept** la croise ; le **chœur** abrite l'autel.
- La **voûte d'ogives** repose sur des arcs croisés ; l'**arc-boutant** reporte la poussée des voûtes vers l'extérieur : c'est la base de l'architecture **gothique**, qui permet de grandes fenêtres.
- La **flèche** est la pointe élancée qui couronne un clocher ou la croisée du transept.

### Le vocabulaire de la peinture et de la sculpture
- **Composition**, **plans** (premier plan, arrière-plan), **perspective**, **touche**, **couleurs chaudes et froides**, **lumière**.
- Sculpture **en ronde-bosse** (on en fait le tour) ou **en relief** ; **taille** et **modelage** ; **fonte** du bronze.
- **Iconographie** : ce que représentent les figures, leurs attributs, les épisodes mythologiques ou religieux.

### Le vocabulaire de la musique et du cinéma
- Musique : **mélodie**, **rythme**, **timbre** (la couleur du son d'un instrument), **orchestration**, **tempo**, **musique à programme** (qui raconte ou décrit, comme Les Quatre Saisons de Vivaldi).
- Cinéma : **plan**, **cadrage**, **mouvement de caméra**, **montage**, **hors-champ**.

### Comparer
- Une comparaison réussie dégage un **point commun** (un thème, une fonction, un procédé) puis des **différences** (époques, techniques, intentions).
- Elle se met au service d'une **problématique** : on compare pour répondre à une question, pas pour faire une liste.

### Analyse formelle et sémantique
- **Analyse formelle** : comment l'œuvre est faite (formes, matériaux, structure, rythme).
- **Analyse sémantique** : ce qu'elle signifie (message, symboles, fonction, contexte).
- Les deux vont ensemble : une forme produit un sens.

### À retenir pour le bac
- Chaque œuvre citée : auteur, titre, date, technique, lieu.
- Utiliser le vocabulaire propre à chaque art (nef, arc-boutant, timbre, montage).
- Toujours relier forme et sens, et l'œuvre à son contexte de production et de réception.
- Une copie défaillante en orthographe et en expression ne peut pas avoir la moyenne (note de service de 2026).`,
      cartes: [
        { q: "Que faut-il toujours donner pour identifier une œuvre ?", r: "L'auteur, le titre, la date, la technique ou la forme, et le lieu de conservation ou de construction." },
        { q: "Que veut dire situer une œuvre ?", r: "La relier à son contexte de production (commande, moyens, intentions) et à sa réception, hier et aujourd'hui." },
        { q: "Plan, élévation, coupe : quelle différence ?", r: "Le plan montre le bâtiment vu de dessus ; l'élévation, une façade de face ; la coupe, le bâtiment tranché." },
        { q: "Qu'est-ce qu'une nef ?", r: "Le vaisseau central d'une église, entre l'entrée et le chœur." },
        { q: "À quoi sert l'arc-boutant ?", r: "Il reporte vers l'extérieur la poussée des voûtes, ce qui permet d'ouvrir de grandes fenêtres dans les églises gothiques." },
        { q: "Qu'est-ce qu'une voûte d'ogives ?", r: "Une voûte qui repose sur des arcs croisés en diagonale, typique de l'architecture gothique." },
        { q: "Qu'est-ce qu'une flèche ?", r: "La pointe élancée qui couronne un clocher ou la croisée du transept." },
        { q: "Qu'est-ce que l'iconographie ?", r: "L'étude de ce que représentent les figures : personnages, attributs, épisodes mythologiques ou religieux." },
        { q: "Sculpture en ronde-bosse ou en relief ?", r: "La ronde-bosse se regarde de tous les côtés ; le relief reste attaché à un fond." },
        { q: "Qu'est-ce que le timbre en musique ?", r: "La couleur propre du son d'un instrument ou d'une voix." },
        { q: "Qu'est-ce que la musique à programme ?", r: "Une musique qui raconte ou décrit quelque chose, comme Les Quatre Saisons de Vivaldi." },
        { q: "Analyse formelle ou sémantique ?", r: "La formelle étudie comment l'œuvre est faite ; la sémantique, ce qu'elle signifie." },
        { q: "Comment réussir une comparaison ?", r: "Dégager un point commun, puis des différences, au service d'une problématique." },
        { q: "Que dit la note de 2026 sur la langue ?", r: "Une copie défaillante sur l'ensemble des aspects de la maîtrise de la langue ne peut pas avoir la moyenne." },
      ],
      quiz: [
        { q: "Un dessin qui montre une église vue de dessus est :", choix: ["une élévation", "une coupe", "un plan", "un croquis de façade"], bonne: 2, expl: "Le plan est la vue de dessus ; l'élévation montre une façade.", niv: 1 },
        { q: "Dans une église gothique, ce qui reporte la poussée des voûtes vers l'extérieur est :", choix: ["l'arc-boutant", "la nef centrale", "le chœur", "la flèche"], bonne: 0, expl: "L'arc-boutant permet d'alléger les murs et d'ouvrir de grandes verrières.", niv: 1 },
        { q: "« Le violoncelle donne une couleur sombre au passage. » On parle ici :", choix: ["du tempo", "du rythme", "de la mélodie", "du timbre"], bonne: 3, expl: "Le timbre est la couleur du son d'un instrument.", niv: 2 },
        { q: "Les Quatre Saisons de Vivaldi, qui décrivent orages et chants d'oiseaux, sont :", choix: ["de la musique sacrée", "de la musique à programme", "un opéra en trois actes", "un ballet"], bonne: 1, expl: "Une musique qui décrit ou raconte est dite à programme.", niv: 2 },
        { q: "Étudier les attributs d'un saint représenté dans un vitrail relève de :", choix: ["l'iconographie", "l'élévation", "l'orchestration", "le montage"], bonne: 0, expl: "L'iconographie étudie ce que représentent les figures.", niv: 1 },
        { q: "Quelle référence est correctement identifiée ?", choix: ["« Un tableau célèbre de Monet. »", "« Monet, Impression, soleil levant, 1872, Paris. »", "« Une peinture impressionniste de la fin du XIXe siècle. »", "« Le tableau de Monet avec un soleil. »"], bonne: 1, expl: "Auteur, titre, date et lieu : la référence est précise et située.", niv: 2 },
        { q: "Dire qu'une voûte très haute exprime l'élévation de l'âme vers Dieu relève de l'analyse :", choix: ["formelle", "technique", "sémantique", "chronologique"], bonne: 2, expl: "On passe de la forme au sens : analyse sémantique.", niv: 2 },
        { q: "Pourquoi une comparaison d'œuvres doit-elle servir une problématique ?", choix: ["Parce que le jury compte les œuvres citées une à une", "Pour montrer qu'on connaît beaucoup d'œuvres", "Parce que l'ordre chronologique est interdit au bac", "Pour répondre à une question au lieu de lister"], bonne: 3, expl: "On compare pour argumenter, pas pour décrire côte à côte.", niv: 3 },
        { q: "Une statue dont on peut faire le tour est sculptée :", choix: ["en bas-relief", "en ronde-bosse", "en haut-relief", "en vitrail"], bonne: 1, expl: "La ronde-bosse est indépendante du fond.", niv: 1 },
        { q: "Qu'appelle-t-on la réception d'une œuvre ?", choix: ["La manière dont elle est accueillie", "La date de sa commande", "Le prix payé par le commanditaire de l'œuvre", "Le nom de son atelier"], bonne: 0, expl: "La réception concerne le public et la critique, à l'époque et ensuite.", niv: 2 },
        { q: "Selon la note de service de 2026, une copie très défaillante en langue :", choix: ["perd au plus un point", "est notée par un second correcteur", "ne peut pas avoir la moyenne", "n'est pas pénalisée en arts"], bonne: 2, expl: "La maîtrise de la langue est évaluée ; une copie défaillante sur tous ses aspects ne peut avoir la moyenne.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 2
    {
      chapitre: 'hida-2',
      fiche: `## Viollet-le-Duc, un artiste en son temps : parcours et contexte

Question limitative « Un artiste en son temps : Eugène Viollet-le-Duc (1814-1879) ». Le programme rappelle que l'incendie de Notre-Dame en **2019** a remis en lumière son rôle, mais que son œuvre dépasse la restauration : **dessin**, observation de la **nature**, **création architecturale**, **enseignement**.

### Repères biographiques
- **Eugène Viollet-le-Duc** naît à **Paris** en **1814** dans une famille cultivée, proche des milieux artistiques et littéraires.
- Il **refuse d'entrer à l'École des beaux-arts**, la voie normale des architectes : il se forme seul, en **dessinant** sans cesse et en **voyageant** en France et en Italie.
- En **1840**, à **26 ans**, l'inspecteur général des monuments historiques **Prosper Mérimée** lui confie la restauration de la **Madeleine de Vézelay**, une église romane menacée de ruine.
- Il devient l'un des grands architectes des **monuments historiques** : Notre-Dame de Paris (avec Lassus, à partir de 1844), Saint-Denis, Amiens, la cité de **Carcassonne**, le château de **Pierrefonds** pour Napoléon III.
- Il écrit beaucoup : le **Dictionnaire raisonné de l'architecture française du XIe au XVIe siècle** (dix volumes, **1854-1868**), les **Entretiens sur l'architecture**.
- Il meurt à **Lausanne**, en Suisse, en **1879**.

### Un XIXe siècle qui découvre le patrimoine
- Après la **Révolution**, beaucoup d'églises et de châteaux ont été vendus, pillés ou abandonnés. Des écrivains s'en émeuvent : **Victor Hugo** publie en **1831** Notre-Dame de Paris, roman qui fait aimer la cathédrale gothique, et dénonce les démolisseurs.
- L'État crée en **1830** un poste d'**inspecteur général des monuments historiques** ; Mérimée l'occupe à partir de **1834**. Une **Commission des monuments historiques** dresse des listes de monuments à protéger.
- C'est l'émergence d'une **conscience patrimoniale** : l'idée que certains bâtiments appartiennent à la mémoire de la nation et doivent être conservés.
- Le XIXe siècle redécouvre le **Moyen Âge**, longtemps jugé « barbare » : c'est le temps du romantisme et du **néogothique**.

### Une position privilégiée
- Viollet-le-Duc a une **position administrative** forte : il travaille pour l'État, puis pour l'empereur Napoléon III et l'impératrice Eugénie. Cela lui permet d'intervenir sur de très nombreux monuments partout en France.
- Le programme souligne sa **précocité**, son **audace** et sa **curiosité** : il est architecte, archéologue, historien, dessinateur, décorateur, professeur.

### Un homme qui divise
- Pour les uns, il est le **précurseur de l'architecture moderne** : il pense la structure, défend l'usage du **fer**, inspire Gaudí ou Horta.
- Pour les autres, il est un restaurateur **trop interventionniste**, qui a parfois inventé ce qui n'avait jamais existé.
- Près de cent cinquante ans après sa mort, il « ne laisse pas indifférent », écrit le programme.

### À retenir pour le bac
- Dates : 1814-1879 ; Vézelay en 1840 ; Notre-Dame à partir de 1844 ; Dictionnaire en 1854-1868.
- Le rôle de Mérimée et la naissance des monuments historiques.
- Le contexte : redécouverte du Moyen Âge, romantisme, Victor Hugo (1831).
- Deux jugements opposés : précurseur moderne ou restaurateur trop interventionniste.`,
      cartes: [
        { q: "Quelles sont les dates de Viollet-le-Duc ?", r: "Né à Paris en 1814, mort à Lausanne en 1879." },
        { q: "Comment Viollet-le-Duc s'est-il formé ?", r: "Il refuse l'École des beaux-arts et se forme seul, en dessinant et en voyageant en France et en Italie." },
        { q: "Quel est son premier grand chantier, et quand ?", r: "La restauration de la Madeleine de Vézelay, confiée en 1840 par Prosper Mérimée, alors qu'il a 26 ans." },
        { q: "Qui est Prosper Mérimée ?", r: "Écrivain et inspecteur général des monuments historiques à partir de 1834 ; il soutient Viollet-le-Duc." },
        { q: "Quand le poste d'inspecteur général des monuments historiques est-il créé ?", r: "En 1830." },
        { q: "Quel roman de Victor Hugo fait aimer la cathédrale gothique ?", r: "Notre-Dame de Paris, publié en 1831." },
        { q: "Qu'est-ce que la conscience patrimoniale ?", r: "L'idée que certains bâtiments appartiennent à la mémoire de la nation et doivent être conservés." },
        { q: "Pourquoi le XIXe siècle redécouvre-t-il le Moyen Âge ?", r: "Avec le romantisme, le Moyen Âge, longtemps jugé barbare, devient un passé national admiré : c'est aussi l'essor du néogothique." },
        { q: "Quel grand ouvrage écrit Viollet-le-Duc ?", r: "Le Dictionnaire raisonné de l'architecture française du XIe au XVIe siècle, dix volumes, 1854-1868." },
        { q: "Pour qui reconstruit-il le château de Pierrefonds ?", r: "Pour l'empereur Napoléon III." },
        { q: "Avec qui restaure-t-il Notre-Dame de Paris ?", r: "Avec Jean-Baptiste Lassus, à partir de 1844." },
        { q: "Pourquoi le dit-on précurseur de l'architecture moderne ?", r: "Il pense l'architecture par la structure, défend l'usage du fer et inspire des architectes comme Gaudí ou Horta." },
        { q: "Quel reproche lui fait-on ?", r: "D'être trop interventionniste : il a parfois rétabli des états qui n'avaient jamais existé." },
      ],
      quiz: [
        { q: "En quelle année Viollet-le-Duc est-il né ?", choix: ["1830", "1814", "1844", "1859"], bonne: 1, expl: "Il naît à Paris en 1814 et meurt en 1879.", niv: 1 },
        { q: "Qui confie à Viollet-le-Duc la restauration de Vézelay en 1840 ?", choix: ["Victor Hugo", "Napoléon III", "Prosper Mérimée", "Jean-Baptiste Lassus"], bonne: 2, expl: "Mérimée, inspecteur général des monuments historiques, lui fait confiance malgré son jeune âge.", niv: 1 },
        { q: "Comment Viollet-le-Duc s'est-il formé ?", choix: ["Par le dessin et les voyages", "À l'École des beaux-arts, comme les autres", "À l'École polytechnique, comme ingénieur", "Dans l'atelier d'un sculpteur florentin"], bonne: 0, expl: "Il refuse l'École des beaux-arts, voie normale des architectes.", niv: 2 },
        { q: "Le roman Notre-Dame de Paris de Victor Hugo (1831) a surtout contribué à :", choix: ["faire démolir la cathédrale", "faire aimer l'art gothique", "construire la flèche", "créer l'École des beaux-arts"], bonne: 1, expl: "Hugo défend les monuments médiévaux contre les démolisseurs.", niv: 2 },
        { q: "Quel événement de 2019 a remis Viollet-le-Duc au centre des débats ?", choix: ["L'incendie de Notre-Dame de Paris", "La restauration de Vézelay", "L'ouverture du musée d'Orsay rénové", "La vente de Pierrefonds"], bonne: 0, expl: "L'incendie et la question de la flèche ont rappelé son rôle.", niv: 1 },
        { q: "Que désigne l'émergence d'une « conscience patrimoniale » au XIXe siècle ?", choix: ["Le goût pour l'architecture en fer", "La mode des voyages en Italie", "La volonté de démolir les églises jugées inutiles", "Protéger des bâtiments comme mémoire de la nation"], bonne: 3, expl: "Les monuments deviennent un bien commun à protéger.", niv: 2 },
        { q: "Pourquoi la position de Viollet-le-Duc est-elle dite « privilégiée » ?", choix: ["Il était riche par héritage", "Il travaillait pour l'État et l'empereur", "Il dirigeait l'Académie française et ses concours", "Il possédait de nombreux châteaux"], bonne: 1, expl: "Son rôle administratif lui ouvre des chantiers dans toute la France.", niv: 3 },
        { q: "Pour quel souverain reconstruit-il le château de Pierrefonds ?", choix: ["Louis-Philippe", "Charles X", "Napoléon III", "Napoléon Ier"], bonne: 2, expl: "Pierrefonds est relevé pour Napoléon III à partir de 1857.", niv: 1 },
        { q: "Pourquoi le Moyen Âge est-il redécouvert au XIXe siècle ?", choix: ["Parce qu'il devient un passé national admiré", "Parce qu'on y invente le béton", "Parce que les églises romanes viennent d'être bâties", "Parce que l'Antiquité est interdite"], bonne: 0, expl: "Le romantisme valorise le passé médiéval, autrefois méprisé.", niv: 2 },
        { q: "Quelle affirmation résume le mieux les deux jugements portés sur lui ?", choix: ["Il est oublié des historiens depuis sa mort en 1879", "On le juge comme un simple dessinateur de monuments", "Il est admiré des Anglais mais ignoré des Français", "Précurseur moderne, ou restaurateur trop interventionniste"], bonne: 3, expl: "Le programme insiste sur ces deux lectures opposées.", niv: 3 },
        { q: "Quand paraît son Dictionnaire raisonné de l'architecture française ?", choix: ["1814-1820", "1830-1834", "1871-1879", "1854-1868"], bonne: 3, expl: "Dix volumes publiés entre 1854 et 1868.", niv: 2 },
      ],
    },
    // ---------------------------------------------------------------- 3
    {
      chapitre: 'hida-3',
      fiche: `## Viollet-le-Duc restaurateur : Vézelay, Notre-Dame, Carcassonne, Pierrefonds

Viollet-le-Duc a dirigé ou conseillé des dizaines de chantiers. Le bac attend quelques exemples précis, et surtout sa **doctrine** de la restauration, qui fait encore débat.

### La Madeleine de Vézelay (1840-1859)
- Grande église **romane** de Bourgogne, menacée d'effondrement. C'est le premier chantier du jeune architecte, confié par **Mérimée**.
- Il consolide la nef, refait des voûtes, reprend la façade et ajoute des **arcs-boutants** pour tenir les murs. Il sauve l'édifice, mais en modifie l'aspect.

### Notre-Dame de Paris (1844-1864)
- Avec **Jean-Baptiste Lassus**, il gagne en **1844** le concours pour restaurer la cathédrale, très abîmée par le temps et par la **Révolution** (les statues de la galerie des rois ont été abattues en 1793).
- Il recrée les **statues** de la façade, les portails, des vitraux, une **sacristie** neuve.
- Il invente la **galerie des chimères** : des créatures fantastiques en haut des tours, comme la célèbre **stryge** qui regarde Paris. Elles n'ont jamais existé au Moyen Âge.
- Il reconstruit la **flèche** (achevée en **1859**), disparue à la fin du XVIIIe siècle : chêne couvert de plomb, plus haute et plus ornée que l'ancienne. Parmi les statues d'apôtres qui l'entourent, **saint Thomas**, patron des architectes, a les traits de Viollet-le-Duc lui-même.

### La cité de Carcassonne (à partir de 1853)
- Ville fortifiée médiévale de l'Aude, avec deux enceintes et des dizaines de tours, que l'on voulait démolir.
- Il restaure remparts et tours et les coiffe de **toits pointus couverts d'ardoise**, inspirés du nord de la France. On lui a reproché ces toits : dans le Midi, on couvrait plutôt de tuiles, avec des pentes faibles.
- Les travaux sont poursuivis après sa mort ; la cité est inscrite au **patrimoine mondial de l'UNESCO** en **1997**.

### Le château de Pierrefonds (1857-1885)
- Château fort de l'Oise démantelé au XVIIe siècle. **Napoléon III** veut d'abord une ruine pittoresque, puis une **résidence impériale**.
- Viollet-le-Duc le **reconstruit presque entièrement**, avec des décors peints et sculptés de sa main ou de ses dessins. C'est moins une restauration qu'une **création** néogothique.

### La doctrine : l'unité de style
- Dans son Dictionnaire (article « Restauration », 1866), il écrit que restaurer un édifice, c'est le **rétablir dans un état complet qui peut n'avoir jamais existé** à un moment donné.
- Il vise l'**unité de style** : retrouver ce que l'architecte médiéval aurait fait, quitte à supprimer des ajouts d'autres époques.
- Il étudie très précisément les monuments, comme un **archéologue** : ses choix reposent sur la connaissance, mais aussi sur l'interprétation.

### Les critiques
- L'Anglais **John Ruskin** (Les Sept Lampes de l'architecture, **1849**) juge que la restauration est un **mensonge** : il vaut mieux entretenir et laisser vieillir.
- La **charte de Venise** (**1964**) fixe une règle opposée : la restauration **s'arrête là où commence l'hypothèse**, et respecte les apports de toutes les époques.
- À **Saint-Sernin de Toulouse**, une « **dérestauration** » (années 1980-1990) a retiré une partie de ses ajouts.

### À retenir pour le bac
- Quatre exemples datés : Vézelay (1840), Notre-Dame (1844-1864, flèche 1859), Carcassonne (1853), Pierrefonds (1857).
- La phrase clé : un état complet « qui peut n'avoir jamais existé ».
- Unité de style contre respect des strates : Ruskin, charte de Venise (1964).
- Savoir dire à la fois ce qu'il a sauvé et ce qu'il a inventé.`,
      cartes: [
        { q: "Quel est le premier chantier de Viollet-le-Duc ?", r: "La Madeleine de Vézelay, église romane de Bourgogne, à partir de 1840." },
        { q: "Qu'a-t-il ajouté à Vézelay pour tenir les murs ?", r: "Des arcs-boutants, en plus de la consolidation de la nef et des voûtes." },
        { q: "Avec qui gagne-t-il le concours de Notre-Dame, et quand ?", r: "Avec Jean-Baptiste Lassus, en 1844." },
        { q: "Pourquoi la galerie des rois de Notre-Dame a-t-elle été refaite ?", r: "Ses statues avaient été abattues en 1793, pendant la Révolution, qui y voyait des rois de France." },
        { q: "Qu'est-ce que la galerie des chimères ?", r: "Des créatures fantastiques placées en haut des tours de Notre-Dame par Viollet-le-Duc, comme la stryge. Elles n'existaient pas au Moyen Âge." },
        { q: "Quand la flèche de Viollet-le-Duc est-elle achevée ?", r: "En 1859 : chêne couvert de plomb, plus haute et plus ornée que la flèche médiévale disparue." },
        { q: "Quel apôtre de la flèche a ses traits ?", r: "Saint Thomas, patron des architectes, qui regarde vers la flèche." },
        { q: "Que lui reproche-t-on à Carcassonne ?", r: "Des toits pointus couverts d'ardoise, inspirés du nord de la France, alors que le Midi couvrait plutôt de tuiles à pente faible." },
        { q: "Depuis quand Carcassonne est-elle au patrimoine mondial ?", r: "Depuis 1997 (UNESCO)." },
        { q: "Pourquoi Pierrefonds est-il plus une création qu'une restauration ?", r: "Le château était en ruine : Viollet-le-Duc le reconstruit presque entier pour Napoléon III, avec un décor néogothique." },
        { q: "Quelle est sa définition de la restauration ?", r: "Rétablir un édifice dans un état complet qui peut n'avoir jamais existé à un moment donné (Dictionnaire, 1866)." },
        { q: "Qu'est-ce que l'unité de style ?", r: "Donner à un édifice un style homogène, celui que l'architecte d'origine aurait voulu, quitte à retirer des ajouts d'autres époques." },
        { q: "Que pense John Ruskin de la restauration ?", r: "Que c'est un mensonge : il vaut mieux entretenir les monuments et les laisser vieillir (Les Sept Lampes de l'architecture, 1849)." },
        { q: "Que dit la charte de Venise de 1964 ?", r: "La restauration s'arrête là où commence l'hypothèse ; il faut respecter les apports de toutes les époques." },
        { q: "Qu'est-ce qu'une dérestauration ?", r: "Retirer des ajouts d'un restaurateur pour retrouver un état plus ancien, comme à Saint-Sernin de Toulouse." },
      ],
      quiz: [
        { q: "Quelle église romane est le premier chantier de Viollet-le-Duc ?", choix: ["La Madeleine de Vézelay", "La basilique de Saint-Denis", "La cathédrale d'Amiens", "Saint-Sernin de Toulouse"], bonne: 0, expl: "Mérimée la lui confie en 1840.", niv: 1 },
        { q: "Les chimères en haut des tours de Notre-Dame sont :", choix: ["des sculptures du XIIIe siècle remises en place", "des copies de gargouilles romaines retrouvées", "des créations de Viollet-le-Duc", "des moulages pris à la cathédrale de Reims"], bonne: 2, expl: "Ces créatures, comme la stryge, sont une invention du XIXe siècle.", niv: 2 },
        { q: "En quelle année la flèche de Viollet-le-Duc est-elle achevée ?", choix: ["1793", "1859", "1831", "1844"], bonne: 1, expl: "La flèche est terminée en 1859, pendant le chantier de 1844-1864.", niv: 1 },
        { q: "Pourquoi les toits de Carcassonne ont-ils été critiqués ?", choix: ["Du verre et du métal y remplaçaient la vieille pierre", "Ils masquaient les deux enceintes de la cité", "Ils copiaient les toits plats des églises romanes", "Leur ardoise pointue vient du nord, pas du Midi"], bonne: 3, expl: "Dans le Midi, on couvrait plutôt de tuiles à faible pente.", niv: 2 },
        { q: "Selon Viollet-le-Duc, restaurer, c'est rétablir un état complet :", choix: ["qui peut n'avoir jamais existé", "tel qu'il était le jour de la consécration", "décrit par les archives royales de l'époque", "tel qu'il était juste avant la Révolution"], bonne: 0, expl: "C'est la phrase célèbre de l'article « Restauration » du Dictionnaire.", niv: 2 },
        { q: "Pour quel commanditaire Pierrefonds est-il reconstruit ?", choix: ["Le roi Louis-Philippe", "La ville de Compiègne", "L'empereur Napoléon III", "La commission de Mérimée"], bonne: 2, expl: "Napoléon III en fait une résidence impériale.", niv: 1 },
        { q: "Qui juge, en 1849, que la restauration est un « mensonge » ?", choix: ["Prosper Mérimée", "Victor Hugo", "Jean-Baptiste Lassus", "John Ruskin"], bonne: 3, expl: "Ruskin préfère l'entretien et le respect de l'âge des monuments.", niv: 2 },
        { q: "Que recherche l'« unité de style » ?", choix: ["Garder les traces de chaque siècle passé", "Un édifice homogène, dans le style de son origine", "Un mélange volontaire de styles anciens et récents", "L'usage d'un même matériau dans toute la France"], bonne: 1, expl: "Viollet-le-Duc retire parfois des ajouts d'autres époques pour y parvenir.", niv: 2 },
        { q: "La charte de Venise (1964) dit que la restauration s'arrête :", choix: ["là où commence l'hypothèse", "quand le budget public est épuisé", "au dernier état décrit par un architecte", "quand l'édifice retrouve son usage religieux"], bonne: 0, expl: "On ne reconstruit pas ce que l'on ne connaît pas avec certitude.", niv: 3 },
        { q: "À Saint-Sernin de Toulouse, la « dérestauration » a consisté à :", choix: ["détruire la basilique pour en bâtir une autre plus neuve", "classer pour la première fois l'église", "retirer une partie des ajouts de Viollet-le-Duc", "ajouter une flèche comme celle de Notre-Dame"], bonne: 2, expl: "On a voulu retrouver un état plus ancien de la toiture.", niv: 3 },
        { q: "Pourquoi les statues de la galerie des rois de Notre-Dame ont-elles été refaites ?", choix: ["La foudre les avait fendues en 1786", "Elles avaient été abattues sous la Révolution", "Napoléon Ier les avait fait vendre à des Anglais", "Victor Hugo avait réclamé des rois plus modernes"], bonne: 1, expl: "En 1793, on y voyait des rois de France et on les a abattues.", niv: 2 },
        { q: "Quel apôtre de la flèche de Notre-Dame porte les traits de Viollet-le-Duc ?", choix: ["Saint Pierre", "Saint Jean", "Saint Paul", "Saint Thomas"], bonne: 3, expl: "Saint Thomas est le patron des architectes.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 4
    {
      chapitre: 'hida-4',
      fiche: `## Viollet-le-Duc théoricien, dessinateur et créateur ; authenticité et patrimoine aujourd'hui

Le programme demande de ne pas réduire Viollet-le-Duc à la restauration : il est aussi **dessinateur**, observateur de la **nature**, **théoricien**, **professeur** et **architecte créateur**.

### Le dessinateur et l'observateur de la nature
- Il dessine toute sa vie : monuments, paysages, détails de sculpture, plantes, montagnes. Des **milliers de dessins** sont conservés (notamment à la Médiathèque du patrimoine).
- Il étudie la **flore** pour l'ornement : pour lui, le sculpteur gothique observait les plantes de sa région.
- À la fin de sa vie, il arpente les **Alpes** : il publie Le Massif du Mont-Blanc (**1876**) et dresse une carte du massif. Il y voit une architecture naturelle, faite de **structures** et d'**érosion**.

### Le théoricien : le rationalisme structurel
- Le Dictionnaire raisonné (**1854-1868**) explique l'architecture gothique comme une **logique de construction** : chaque élément (ogive, arc-boutant, pilier) a une fonction.
- Dans les **Entretiens sur l'architecture** (1863 et 1872), il propose d'appliquer cette logique aux matériaux de son temps, surtout le **fer** : voûtes portées par des colonnes de fonte, structures apparentes.
- C'est le **rationalisme structurel** : la forme doit naître de la structure et des matériaux, et non de l'imitation des styles anciens.

### Le professeur et le pédagogue
- En **1863**, il est nommé professeur d'histoire de l'art et d'esthétique à l'**École des beaux-arts**. Les élèves, attachés à l'enseignement classique, chahutent ses cours : il démissionne en **1864**.
- Il écrit aussi pour les jeunes : **Histoire d'une maison** (1873), **Histoire d'un dessinateur** (1879), où il défend l'apprentissage par l'observation.

### L'architecte créateur
- Il construit des édifices neufs : l'église **Saint-Denis-de-l'Estrée** à Saint-Denis (1864-1867), des immeubles à Paris, son chalet **La Vedette** à Lausanne.
- Il dessine du **mobilier**, des objets d'orfèvrerie, des décors peints : c'est un créateur complet.

### Son héritage
- **Gaudí**, **Victor Horta** et **Hector Guimard** (Art nouveau) ont lu ses textes. Son élève **Anatole de Baudot** bâtit l'église Saint-Jean de Montmartre (1894-1904) en ciment armé.
- Il est vu comme un **précurseur de l'architecture moderne**, qui pense d'abord la structure.

### Notre-Dame après l'incendie de 2019
- Le **15 avril 2019**, la charpente brûle et la flèche de Viollet-le-Duc s'effondre.
- Un débat s'ouvre : faut-il un **geste contemporain** (on parle d'un concours international) ou une reconstruction **à l'identique** ?
- En **juillet 2020**, le président de la République retient la reconstruction **à l'identique** de la flèche de 1859, avec l'accord de la Commission nationale du patrimoine et de l'architecture. La cathédrale rouvre en **décembre 2024**.
- Paradoxe : on restaure fidèlement une flèche qui était elle-même une **création du XIXe siècle**. C'est conforme à la charte de Venise, qui respecte les apports de toutes les époques : l'état de Viollet-le-Duc fait désormais partie de l'histoire du monument.
- Un autre débat porte sur le remplacement de **vitraux** qu'il avait dessinés, pourtant intacts, par des vitraux contemporains.

### Authenticité et pérennité
- **Authenticité** : ce qui est vraiment ancien, ou ce qui est fidèle à une forme connue ? Matériaux d'origine ou savoir-faire transmis ?
- **Pérennité** : faire durer un édifice impose parfois de le transformer.

### À retenir pour le bac
- Quatre visages : dessinateur, théoricien (Dictionnaire, Entretiens), professeur (1863), créateur.
- Le rationalisme structurel et le fer : une pensée moderne.
- Héritiers : Gaudí, Horta, Guimard, Anatole de Baudot.
- 2019-2024 : flèche refaite à l'identique, ce qui pose la question de l'authenticité.`,
      cartes: [
        { q: "Pourquoi dit-on que Viollet-le-Duc est un grand dessinateur ?", r: "Il dessine toute sa vie monuments, paysages, plantes et montagnes : des milliers de dessins sont conservés." },
        { q: "Quel livre consacre-t-il aux Alpes ?", r: "Le Massif du Mont-Blanc, en 1876, avec une carte du massif." },
        { q: "Que voit-il dans la montagne ?", r: "Une architecture naturelle, faite de structures et d'érosion, qu'il étudie comme un bâtiment." },
        { q: "Pourquoi observe-t-il les plantes ?", r: "Pour l'ornement : selon lui, le sculpteur gothique s'inspirait de la flore de sa région." },
        { q: "Qu'est-ce que le rationalisme structurel ?", r: "L'idée que la forme d'un édifice doit naître de sa structure et de ses matériaux, non de l'imitation des styles." },
        { q: "Que proposent les Entretiens sur l'architecture ?", r: "Appliquer la logique gothique aux matériaux modernes, surtout le fer, avec des structures apparentes (1863 et 1872)." },
        { q: "Que se passe-t-il quand il enseigne aux Beaux-Arts en 1863 ?", r: "Les élèves, attachés à l'enseignement classique, chahutent ses cours ; il démissionne en 1864." },
        { q: "Quels livres écrit-il pour les jeunes ?", r: "Histoire d'une maison (1873) et Histoire d'un dessinateur (1879)." },
        { q: "Quelle église neuve construit-il à Saint-Denis ?", r: "Saint-Denis-de-l'Estrée, de 1864 à 1867." },
        { q: "Quels architectes se réclament de lui ?", r: "Gaudí, Victor Horta, Hector Guimard, et son élève Anatole de Baudot." },
        { q: "Qu'a construit Anatole de Baudot ?", r: "L'église Saint-Jean de Montmartre (1894-1904), en ciment armé." },
        { q: "Que se passe-t-il le 15 avril 2019 ?", r: "Notre-Dame brûle : la charpente est détruite et la flèche de Viollet-le-Duc s'effondre." },
        { q: "Qu'est-il décidé pour la flèche en juillet 2020 ?", r: "Une reconstruction à l'identique de la flèche de 1859, plutôt qu'un geste contemporain." },
        { q: "Quand Notre-Dame rouvre-t-elle ?", r: "En décembre 2024." },
        { q: "Quel paradoxe pose la flèche refaite ?", r: "On reconstruit fidèlement une création du XIXe siècle : l'apport de Viollet-le-Duc fait désormais partie de l'histoire du monument." },
        { q: "Authenticité : de quoi parle-t-on ?", r: "De ce qui est vraiment ancien, ou fidèle à une forme connue : matériaux d'origine ou savoir-faire transmis." },
      ],
      quiz: [
        { q: "Quel livre de 1876 montre l'intérêt de Viollet-le-Duc pour la nature ?", choix: ["Histoire d'une maison", "Entretiens sur l'architecture", "Le Massif du Mont-Blanc", "Les Sept Lampes de l'architecture"], bonne: 2, expl: "Il y étudie la montagne comme une architecture naturelle.", niv: 1 },
        { q: "Le rationalisme structurel affirme que la forme doit naître :", choix: ["de la structure et des matériaux", "de l'imitation fidèle des temples grecs", "du goût personnel du commanditaire", "des règles enseignées aux Beaux-Arts"], bonne: 0, expl: "Chaque élément a une fonction constructive.", niv: 2 },
        { q: "Quel matériau moderne les Entretiens sur l'architecture mettent-ils en avant ?", choix: ["Le marbre", "Le béton précontraint", "Le verre teinté", "Le fer"], bonne: 3, expl: "Il imagine des voûtes portées par des colonnes de fonte.", niv: 1 },
        { q: "Comment se passe son enseignement à l'École des beaux-arts en 1863 ?", choix: ["Il y enseigne vingt ans, avec un grand succès auprès des élèves", "Ses élèves le chahutent et il démissionne en 1864", "On lui confie la première section de photographie", "Il y forme directement Gaudí et Guimard"], bonne: 1, expl: "Les élèves restent attachés à l'enseignement classique.", niv: 2 },
        { q: "Quel architecte de l'Art nouveau a lu Viollet-le-Duc ?", choix: ["Le Corbusier", "Haussmann", "Victor Horta", "Charles Garnier"], bonne: 2, expl: "Horta, Guimard et Gaudí s'inspirent de ses textes.", niv: 2 },
        { q: "Que décide-t-on en juillet 2020 pour la flèche de Notre-Dame ?", choix: ["Une reconstruction à l'identique", "Un concours pour une flèche en verre", "Laisser la croisée du transept sans flèche", "Une flèche de pierre plus haute qu'avant"], bonne: 0, expl: "La flèche de 1859 est refaite, en chêne couvert de plomb.", niv: 1 },
        { q: "Quel paradoxe pose la flèche reconstruite en 2024 ?", choix: ["Elle est plus ancienne que la cathédrale elle-même", "On refait fidèlement une création du XIXe siècle", "Napoléon III l'avait payée sur sa fortune", "Elle copie fidèlement la flèche de Saint-Denis"], bonne: 1, expl: "L'apport de Viollet-le-Duc est devenu partie de l'histoire du monument.", niv: 3 },
        { q: "Pourquoi Viollet-le-Duc étudie-t-il les plantes ?", choix: ["Pour soigner les malades des chantiers", "Pour vendre des herbiers aux musées", "Pour décorer les jardins de Pierrefonds", "Pour l'ornement, comme le sculpteur gothique"], bonne: 3, expl: "Il pense que les sculpteurs médiévaux observaient la flore locale.", niv: 2 },
        { q: "Anatole de Baudot, son élève, construit Saint-Jean de Montmartre :", choix: ["en pierre de taille sculptée", "en bois de chêne et en plomb", "en ciment armé", "en fonte et en verre"], bonne: 2, expl: "Elle est bâtie de 1894 à 1904 dans un matériau nouveau.", niv: 3 },
        { q: "Quelle question pose la notion d'authenticité en restauration ?", choix: ["Garder la matière ancienne ou une forme connue ?", "Combien coûte une restauration à l'État et aux villes ?", "Qui peut visiter le monument ?", "Faut-il changer la fonction du lieu ?"], bonne: 0, expl: "Matériaux d'origine ou fidélité à une forme : c'est tout le débat.", niv: 3 },
        { q: "Quelle œuvre de Viollet-le-Duc n'est **pas** une restauration ?", choix: ["La Madeleine de Vézelay", "Les remparts de Carcassonne", "La galerie des rois de Notre-Dame", "L'église Saint-Denis-de-l'Estrée"], bonne: 3, expl: "Saint-Denis-de-l'Estrée est une église neuve (1864-1867).", niv: 2 },
        { q: "Quel livre pour les jeunes défend l'apprentissage par l'observation ?", choix: ["Le Dictionnaire raisonné de l'architecture", "Histoire d'un dessinateur", "Notre-Dame de Paris", "La charte de Venise"], bonne: 1, expl: "Histoire d'un dessinateur paraît en 1879.", niv: 2 },
      ],
    },
    // ---------------------------------------------------------------- 5
    {
      chapitre: 'hida-5',
      fiche: `## Paris, capitale des arts (1) : la Belle Époque et les avant-gardes, 1900-1914

Question limitative « Arts, ville, politique et société : Paris, capitale des arts, première moitié du XXe siècle ». Le programme demande d'étudier pourquoi des artistes du **monde entier** viennent à Paris, dans **tous les arts** (peinture, sculpture, photographie, architecture, musique, danse, lettres, mode), avec le **marché de l'art**, les **lieux** et les **politiques culturelles**.

### L'Exposition universelle de 1900
- Paris accueille près de **50 millions** de visiteurs. On construit le **Grand Palais**, le **Petit Palais**, le **pont Alexandre-III** et la gare d'Orsay.
- La première ligne du **métro** ouvre en **juillet 1900**. Les entrées dessinées par **Hector Guimard**, en fonte aux formes végétales, sont un symbole de l'**Art nouveau**.

### Montmartre et le Bateau-Lavoir
- Sur la butte, des ateliers bon marché attirent les artistes pauvres : c'est la **bohème**.
- Au **Bateau-Lavoir**, **Picasso** (arrivé d'Espagne, installé en **1904**) peint **Les Demoiselles d'Avignon** (**1907**, aujourd'hui au MoMA de New York) : les corps sont découpés en facettes, les visages inspirés de masques africains et de sculpture ibérique.
- Avec **Georges Braque**, il invente le **cubisme** (1907-1914) : on représente un objet sous plusieurs angles à la fois, puis on colle des papiers (papiers collés, 1912).

### Les Salons et le scandale des fauves
- Le **Salon des indépendants** (sans jury) et le **Salon d'automne** (créé en 1903) montrent les jeunes artistes.
- Au Salon d'automne de **1905**, **Matisse**, **Derain** et **Vlaminck** exposent des toiles aux couleurs pures et violentes. Le critique **Louis Vauxcelles** parle de « **fauves** » : le **fauvisme** est né.

### Une capitale cosmopolite
- Des artistes arrivent de toute l'Europe : **Brancusi** (Roumanie, 1904), **Modigliani** (Italie, 1906), **Chagall** (Russie, 1911), **Soutine**.
- **La Ruche**, cité d'ateliers ouverte en 1902 dans le sud de Paris, loge beaucoup d'entre eux.
- L'Italien **Marinetti** publie le **Manifeste du futurisme** à Paris, dans **Le Figaro**, le **20 février 1909**.
- Le poète **Guillaume Apollinaire** défend les peintres nouveaux (Les Peintres cubistes, 1913) ; l'Américaine **Gertrude Stein** reçoit artistes et écrivains rue de Fleurus.

### Le marché de l'art
- Les **marchands** remplacent peu à peu les Salons officiels : **Ambroise Vollard**, puis **Daniel-Henry Kahnweiler**, qui ouvre sa galerie en **1907** et achète Picasso et Braque sous contrat.

### Musique, danse, architecture, mode
- Les **Ballets russes** de **Serge de Diaghilev** arrivent en **1909**. Le **29 mai 1913**, Le Sacre du printemps (musique de **Stravinsky**, chorégraphie de **Nijinsky**) provoque un **scandale** au théâtre des Champs-Élysées.
- Ce théâtre, construit par **Auguste Perret** (1913), est l'un des premiers grands édifices en **béton armé**, décoré par **Antoine Bourdelle**.
- **Robert et Sonia Delaunay** créent un art de couleurs vives et de cercles qu'Apollinaire nomme **orphisme**.
- Le couturier **Paul Poiret** libère le corps des femmes du **corset**.

### À retenir pour le bac
- Repères : 1900 (Exposition, métro), 1905 (fauves), 1907 (Demoiselles d'Avignon), 1909 (futurisme, Ballets russes), 1913 (Sacre du printemps).
- Lieux : Montmartre, Bateau-Lavoir, La Ruche, Salons.
- Acteurs : artistes étrangers, marchands (Kahnweiler), critiques (Apollinaire, Vauxcelles), mécènes (Stein).
- Paris attire parce qu'elle offre liberté, ateliers, Salons, marchands et public.`,
      cartes: [
        { q: "Quels monuments sont construits pour l'Exposition universelle de 1900 ?", r: "Le Grand Palais, le Petit Palais, le pont Alexandre-III et la gare d'Orsay." },
        { q: "Qui dessine les entrées du métro parisien ?", r: "Hector Guimard, en fonte aux formes végétales : un symbole de l'Art nouveau." },
        { q: "Qu'est-ce que le Bateau-Lavoir ?", r: "Un immeuble d'ateliers bon marché à Montmartre, où Picasso s'installe en 1904." },
        { q: "Quand et où Picasso peint-il Les Demoiselles d'Avignon ?", r: "En 1907, au Bateau-Lavoir ; le tableau est aujourd'hui au MoMA de New York." },
        { q: "Qui invente le cubisme ?", r: "Picasso et Georges Braque, entre 1907 et 1914." },
        { q: "Qu'est-ce que le cubisme ?", r: "Une peinture qui montre un objet sous plusieurs angles à la fois, en facettes ; puis viennent les papiers collés (1912)." },
        { q: "D'où vient le mot « fauves » ?", r: "Du critique Louis Vauxcelles, au Salon d'automne de 1905, devant les couleurs violentes de Matisse, Derain et Vlaminck." },
        { q: "Qu'est-ce que La Ruche ?", r: "Une cité d'ateliers ouverte en 1902 dans le sud de Paris, où logent beaucoup d'artistes étrangers comme Chagall ou Soutine." },
        { q: "Où et quand paraît le Manifeste du futurisme ?", r: "À Paris, dans Le Figaro, le 20 février 1909, signé par l'Italien Marinetti." },
        { q: "Quel rôle joue Apollinaire ?", r: "Poète et critique, il défend les peintres nouveaux (Les Peintres cubistes, 1913) et nomme l'orphisme." },
        { q: "Qui est Daniel-Henry Kahnweiler ?", r: "Un marchand qui ouvre sa galerie à Paris en 1907 et achète Picasso et Braque sous contrat." },
        { q: "Que se passe-t-il le 29 mai 1913 ?", r: "Le Sacre du printemps (Stravinsky, Nijinsky, Ballets russes) fait scandale au théâtre des Champs-Élysées." },
        { q: "Qui construit le théâtre des Champs-Élysées, et en quoi ?", r: "Auguste Perret, en 1913, en béton armé, avec des reliefs de Bourdelle." },
        { q: "Qu'est-ce que l'orphisme ?", r: "L'art de couleurs vives et de formes circulaires de Robert et Sonia Delaunay, nommé ainsi par Apollinaire." },
        { q: "Qu'apporte Paul Poiret à la mode ?", r: "Il libère le corps des femmes du corset." },
      ],
      quiz: [
        { q: "Qui dessine les entrées du métro parisien vers 1900 ?", choix: ["Auguste Perret", "Hector Guimard", "Gustave Eiffel", "Le Corbusier"], bonne: 1, expl: "Ses entrées en fonte aux formes de plantes symbolisent l'Art nouveau.", niv: 1 },
        { q: "Où Picasso peint-il Les Demoiselles d'Avignon en 1907 ?", choix: ["À La Ruche, dans le sud de Paris", "Dans un café de Montparnasse", "Dans un atelier de la rue de Fleurus", "Au Bateau-Lavoir, à Montmartre"], bonne: 3, expl: "Il s'y installe en 1904.", niv: 1 },
        { q: "D'où vient le nom du fauvisme ?", choix: ["D'un critique au Salon d'automne de 1905", "D'un manifeste publié par Matisse", "D'un tableau de Derain intitulé Les Fauves", "D'un poème d'Apollinaire sur la jungle"], bonne: 0, expl: "Louis Vauxcelles réagit aux couleurs violentes des toiles exposées.", niv: 2 },
        { q: "Quelle idée résume le cubisme de Picasso et Braque ?", choix: ["Peindre la lumière en plein air", "Représenter des rêves et l'inconscient", "Montrer un objet sous plusieurs angles", "Utiliser des couleurs pures et violentes"], bonne: 2, expl: "Les formes sont découpées en facettes vues de plusieurs côtés.", niv: 2 },
        { q: "Dans quel journal paraît le Manifeste du futurisme en 1909 ?", choix: ["Le Monde", "Le Figaro", "L'Humanité", "La Revue blanche"], bonne: 1, expl: "Marinetti, italien, choisit Paris pour lancer le futurisme.", niv: 2 },
        { q: "Quel marchand achète Picasso et Braque sous contrat avant 1914 ?", choix: ["Daniel-Henry Kahnweiler", "Peggy Guggenheim", "Paul Rosenberg", "Leo Castelli"], bonne: 0, expl: "Il ouvre sa galerie en 1907.", niv: 2 },
        { q: "Qu'est-ce qui fait scandale le 29 mai 1913 au théâtre des Champs-Élysées ?", choix: ["Une exposition de toiles cubistes", "La première projection d'un film parlant", "Un défilé de mode sans corset", "Le Sacre du printemps des Ballets russes"], bonne: 3, expl: "Musique de Stravinsky, chorégraphie de Nijinsky.", niv: 1 },
        { q: "Pourquoi le théâtre des Champs-Élysées de Perret est-il novateur ?", choix: ["Il est entièrement en verre", "Il copie un temple grec antique", "Il est en béton armé", "Il est en bois démontable"], bonne: 2, expl: "C'est l'un des premiers grands édifices en béton armé (1913).", niv: 2 },
        { q: "Que montre l'arrivée de Brancusi, Modigliani et Chagall à Paris ?", choix: ["Une capitale cosmopolite qui attire l'Europe", "Une politique d'achat menée par l'État", "Le refus des artistes étrangers aux Salons", "Le déclin de Paris face à la puissance de Berlin"], bonne: 0, expl: "Roumanie, Italie, Russie : Paris attire des artistes de partout.", niv: 2 },
        { q: "Qui nomme « orphisme » l'art de Robert et Sonia Delaunay ?", choix: ["Louis Vauxcelles", "Guillaume Apollinaire", "Gertrude Stein", "Marinetti"], bonne: 1, expl: "Le poète-critique invente ce nom vers 1912-1913.", niv: 3 },
        { q: "Quel rôle jouent les marchands comme Vollard et Kahnweiler ?", choix: ["Ils dirigent les Salons officiels de l'État et leurs jurys", "Ils interdisent la vente d'art étranger en France", "Ils remplacent les Salons pour faire connaître les artistes", "Ils financent la construction du métro"], bonne: 2, expl: "Le marché privé fait vivre les avant-gardes.", niv: 3 },
        { q: "Pourquoi tant d'artistes pauvres s'installent-ils à Montmartre ?", choix: ["L'État y offre des bourses d'études", "Les Salons officiels y ont leur siège", "Les marchands y sont obligés d'acheter", "Les ateliers y sont bon marché"], bonne: 3, expl: "Les loyers faibles nourrissent la vie de bohème.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 6
    {
      chapitre: 'hida-6',
      fiche: `## Paris, capitale des arts (2) : Montparnasse et les Années folles, 1919-1939

Après la Première Guerre mondiale, le cœur de la vie artistique passe de Montmartre à **Montparnasse**. Paris reste la capitale des avant-gardes, mais aussi celle du **luxe**, de la **mode** et des **expositions internationales**.

### Montparnasse et l'École de Paris
- Les cafés du carrefour Vavin (**Le Dôme**, **La Rotonde**, **Le Select**, **La Coupole** ouverte en **1927**) sont des lieux de rencontre et parfois de vente.
- On appelle **École de Paris** les nombreux artistes étrangers installés à Paris : **Modigliani** (mort en 1920), **Soutine**, **Chagall**, **Foujita** (Japon), **Zadkine**, **Kisling**, **Pascin**. Ce n'est pas un style, mais une **communauté**.
- **Kiki de Montparnasse**, modèle et chanteuse, est photographiée par **Man Ray** (Le Violon d'Ingres, **1924**).
- Les **académies libres** (Grande Chaumière, Ranson) accueillent élèves étrangers et femmes, hors de l'École des beaux-arts.

### Dada et le surréalisme
- **Tristan Tzara** apporte Dada de Zurich à Paris en **1920** : provocation, refus de la logique.
- **André Breton** publie le **Manifeste du surréalisme** en **1924** : libérer l'**inconscient** et le rêve, par l'écriture automatique et les images étranges.
- Peintres : **Max Ernst**, **Miró**, **Dalí**, **Magritte** (à Paris de 1927 à 1930). Cinéma : **Un chien andalou** (**Buñuel** et Dalí, **1929**).

### Musique, danse et spectacle
- **Parade** (1917, Ballets russes : **Satie**, **Picasso**, **Cocteau**) annonce un art nouveau ; Apollinaire y emploie le mot « sur-réalisme ».
- Le **Groupe des Six** (dont **Poulenc**, **Milhaud**, **Honegger**) veut une musique simple et moderne, nourrie de music-hall.
- Le **jazz** arrive avec les soldats américains. En **1925**, **Joséphine Baker** triomphe dans la **Revue nègre** : succès et regard exotique mêlés.

### L'Exposition de 1925 et l'architecture moderne
- L'**Exposition internationale des arts décoratifs et industriels modernes** (**1925**) donne son nom à l'**Art déco** : formes géométriques, matériaux précieux, luxe.
- **Le Corbusier** y montre le pavillon de l'Esprit nouveau. Il définit les **cinq points de l'architecture moderne** (1927) : pilotis, toit-terrasse, plan libre, fenêtre en longueur, façade libre. La **villa Savoye** à Poissy (1928-1931) les applique.

### Mode, photographie, lettres
- **Coco Chanel** simplifie le vêtement féminin (petite robe noire, **1926**) ; **Elsa Schiaparelli** travaille avec les surréalistes.
- Photographes : **Man Ray**, **André Kertész**, **Brassaï** (Paris de nuit, **1932**).
- Des écrivains américains viennent à Paris : **Hemingway**, **Fitzgerald** ; la librairie de **Sylvia Beach** publie Ulysse de Joyce (**1922**).

### Le marché, l'État et la politique
- Les galeries de la **rue La Boétie** (**Paul Rosenberg**) dominent le marché ; le collectionneur américain **Albert Barnes** achète des dizaines de Soutine en **1922**.
- L'**Exposition internationale de 1937** oppose face à face les pavillons de l'**Allemagne nazie** et de l'**URSS**. Dans le pavillon de la République espagnole, **Picasso** expose **Guernica**, contre le bombardement de la ville basque. On construit le **palais de Chaillot** et le **palais de Tokyo**.
- Le **Front populaire** (1936), avec le ministre **Jean Zay**, veut ouvrir la culture au plus grand nombre.

### À retenir pour le bac
- Repères : 1920 (Dada à Paris), 1924 (Manifeste du surréalisme), 1925 (Art déco, Joséphine Baker), 1927 (cinq points), 1937 (Guernica).
- L'École de Paris : une communauté d'étrangers, pas un style.
- Paris capitale du luxe et de la modernité, mais aussi théâtre des tensions politiques des années 1930.`,
      cartes: [
        { q: "Quel quartier devient le centre de la vie artistique après 1918 ?", r: "Montparnasse, autour du carrefour Vavin et de ses cafés (Le Dôme, La Rotonde, Le Select, La Coupole)." },
        { q: "Qu'appelle-t-on l'École de Paris ?", r: "Les nombreux artistes étrangers installés à Paris (Modigliani, Soutine, Chagall, Foujita) : une communauté, pas un style." },
        { q: "Qui est Kiki de Montparnasse ?", r: "Une modèle et chanteuse, photographiée par Man Ray dans Le Violon d'Ingres (1924)." },
        { q: "À quoi servent les académies libres comme la Grande Chaumière ?", r: "À se former hors de l'École des beaux-arts ; elles accueillent étrangers et femmes." },
        { q: "Qui apporte Dada à Paris, et quand ?", r: "Tristan Tzara, venu de Zurich, en 1920." },
        { q: "Que veut le Manifeste du surréalisme d'André Breton (1924) ?", r: "Libérer l'inconscient et le rêve, par l'écriture automatique et les images étranges." },
        { q: "Quel film surréaliste sort en 1929 ?", r: "Un chien andalou, de Buñuel et Dalí." },
        { q: "Qu'est-ce que Parade (1917) ?", r: "Un ballet des Ballets russes avec Satie, Picasso et Cocteau ; Apollinaire y emploie le mot « sur-réalisme »." },
        { q: "Qu'est-ce que le Groupe des Six ?", r: "Des compositeurs (Poulenc, Milhaud, Honegger…) qui veulent une musique simple et moderne, nourrie de music-hall." },
        { q: "Qui triomphe dans la Revue nègre en 1925 ?", r: "Joséphine Baker : un grand succès, mêlé d'un regard exotique sur les artistes noirs." },
        { q: "D'où vient le nom « Art déco » ?", r: "De l'Exposition internationale des arts décoratifs et industriels modernes, à Paris en 1925." },
        { q: "Quels sont les cinq points de Le Corbusier ?", r: "Pilotis, toit-terrasse, plan libre, fenêtre en longueur, façade libre (1927), appliqués à la villa Savoye." },
        { q: "Qu'apporte Coco Chanel ?", r: "Un vêtement féminin simplifié, comme la petite robe noire de 1926." },
        { q: "Quel photographe publie Paris de nuit en 1932 ?", r: "Brassaï." },
        { q: "Que montre Picasso en 1937 ?", r: "Guernica, dans le pavillon de la République espagnole de l'Exposition internationale, contre le bombardement de la ville basque." },
        { q: "Que montre l'Exposition de 1937 sur la politique ?", r: "Les pavillons de l'Allemagne nazie et de l'URSS face à face : l'art devient vitrine des régimes." },
      ],
      quiz: [
        { q: "Quel café de Montparnasse ouvre en 1927 ?", choix: ["Le Lapin agile", "Le Chat noir", "La Mère Catherine, à Montmartre", "La Coupole"], bonne: 3, expl: "La Coupole rejoint Le Dôme, La Rotonde et Le Select au carrefour Vavin.", niv: 1 },
        { q: "Que désigne l'expression « École de Paris » ?", choix: ["Une communauté d'artistes étrangers à Paris", "Le style officiel de peinture enseigné aux Beaux-Arts", "Un groupe fondé par André Breton en 1924", "Un mouvement d'architecture en béton armé"], bonne: 0, expl: "Modigliani, Soutine, Chagall, Foujita… n'ont pas un style commun.", niv: 2 },
        { q: "Que cherche le surréalisme selon le manifeste de 1924 ?", choix: ["Peindre la lumière changeante du jour", "Glorifier la vitesse et les machines", "Libérer l'inconscient et le rêve", "Revenir à l'ordre de l'art classique"], bonne: 2, expl: "Breton prône l'écriture automatique et les images de rêve.", niv: 1 },
        { q: "Qui réalise Un chien andalou en 1929 ?", choix: ["Man Ray et Kiki", "Buñuel et Dalí", "Cocteau et Satie", "Breton et Tzara"], bonne: 1, expl: "Ce court métrage est un manifeste du cinéma surréaliste.", niv: 2 },
        { q: "Quel point ne fait **pas** partie des cinq points de Le Corbusier ?", choix: ["Le toit-terrasse", "Les pilotis", "Le plan libre", "La façade ornée de sculptures"], bonne: 3, expl: "Le cinquième point est la façade libre, sans ornement.", niv: 2 },
        { q: "D'où vient le nom « Art déco » ?", choix: ["D'une revue de mode lancée par Chanel", "D'une exposition de 1925 à Paris", "D'un manifeste de Le Corbusier", "D'une école d'art fondée à Vienne"], bonne: 1, expl: "L'Exposition des arts décoratifs et industriels modernes de 1925.", niv: 2 },
        { q: "Qui triomphe dans la Revue nègre en 1925 ?", choix: ["Joséphine Baker", "Kiki de Montparnasse", "Coco Chanel", "Elsa Schiaparelli"], bonne: 0, expl: "Elle devient une star, au prix d'un regard souvent exotique.", niv: 1 },
        { q: "Dans quel pavillon Picasso expose-t-il Guernica en 1937 ?", choix: ["Celui de la France", "Celui de l'URSS", "Celui de la République espagnole", "Celui des surréalistes réunis par Breton"], bonne: 2, expl: "Le tableau dénonce le bombardement de la ville basque.", niv: 2 },
        { q: "Que montre le face-à-face des pavillons allemand et soviétique en 1937 ?", choix: ["La paix enfin retrouvée entre les deux pays rivaux", "La fin des expositions universelles", "Le triomphe de l'Art nouveau", "L'art comme vitrine politique des régimes"], bonne: 3, expl: "Les deux régimes rivalisent de monumentalité.", niv: 3 },
        { q: "Pourquoi les académies libres de Montparnasse comptent-elles ?", choix: ["Elles forment étrangers et femmes hors des Beaux-Arts", "Elles délivrent le diplôme officiel d'architecte de l'État", "Elles organisent le Salon d'automne", "Elles achètent les œuvres de leurs élèves"], bonne: 0, expl: "La Grande Chaumière ou Ranson sont ouvertes à tous.", niv: 3 },
        { q: "Quel collectionneur américain achète des dizaines de Soutine en 1922 ?", choix: ["Leo Castelli", "Albert Barnes", "Varian Fry", "Alfred Barr"], bonne: 1, expl: "Cet achat lance la carrière de Soutine.", niv: 3 },
        { q: "Que veut le Front populaire en matière de culture, en 1936 ?", choix: ["Fermer les musées pour des raisons d'économie", "Réserver les arts aux académies officielles", "Ouvrir la culture au plus grand nombre", "Interdire le jazz et le music-hall"], bonne: 2, expl: "Le ministre Jean Zay mène cette politique.", niv: 2 },
      ],
    },
    // ---------------------------------------------------------------- 7
    {
      chapitre: 'hida-7',
      fiche: `## Paris, capitale des arts (3) : guerre, exil et basculement vers New York

Le programme cite le critique américain **Harold Rosenberg** : en décembre 1940, dans la revue Partisan Review, il écrit que la chute de Paris a « fermé le **laboratoire du XXe siècle** ». Comment Paris perd-elle sa place au milieu du siècle ?

### Les arts sous la menace nazie
- En **1937**, à Munich, les nazis organisent l'exposition « **Art dégénéré** » pour ridiculiser l'art moderne (expressionnisme, cubisme, abstraction, artistes juifs).
- Le **14 juin 1940**, l'armée allemande entre dans Paris. Sous l'**Occupation**, une partie des artistes continue de travailler, d'autres sont persécutés.
- L'**ERR** (service de pillage nazi) **spolie** les collections des familles juives, comme celles des marchands **Paul Rosenberg** ou des **Rothschild**. Le musée du **Jeu de paume** sert de dépôt.
- **Rose Valland**, attachée de conservation au Jeu de paume, note en secret les œuvres volées et leurs destinations : ses notes permettront d'en retrouver beaucoup après la guerre.
- En **1943**, des œuvres jugées « dégénérées » (Miró, Klee, Picasso, Léger) sont **brûlées** dans le jardin des Tuileries.

### L'exil des artistes
- À **Marseille**, l'Américain **Varian Fry** organise en 1940-1941 la fuite de centaines d'intellectuels : **André Breton**, **Max Ernst**, **Chagall**, **André Masson**, **Lipchitz**.
- **Mondrian** quitte Paris en 1938 pour Londres, puis New York en 1940 ; **Fernand Léger** part aussi aux États-Unis.
- À New York, **Peggy Guggenheim** ouvre en **1942** la galerie **Art of This Century**, qui expose les surréalistes en exil et de jeunes Américains, dont **Jackson Pollock**.

### La naissance de l'École de New York
- Au contact des exilés, des peintres américains inventent l'**expressionnisme abstrait** : **Pollock** et sa peinture par **dripping** (la peinture coule sur une toile posée au sol), **De Kooning**, **Rothko**.
- Le critique **Clement Greenberg** les présente comme les héritiers de l'avant-garde européenne.
- New York a des **musées** (le **MoMA**, ouvert en **1929**), des **collectionneurs**, un **marché** puissant et, après 1945, le prestige des vainqueurs.

### Paris après 1945 : une capitale qui résiste
- Le **Musée national d'art moderne** ouvre en **1947** au palais de Tokyo.
- **Picasso**, entré au Parti communiste en **1944**, est célébré au Salon de la Libération.
- À **Saint-Germain-des-Prés**, l'**existentialisme** (Sartre, Beauvoir), le jazz et les caves (Boris Vian, Juliette Gréco) font encore rayonner Paris.
- Une « seconde École de Paris » défend l'**abstraction lyrique** : **Hartung**, **Soulages**, **Manessier**.
- Mais le basculement est visible : en **1964**, l'Américain **Robert Rauschenberg** reçoit le grand prix de peinture de la **Biennale de Venise**, symbole de la domination new-yorkaise.

### Comment l'expliquer ?
- Raisons **politiques** : guerre, nazisme, exils. Raisons **économiques** : puissance du marché américain. Raisons **culturelles** : critiques et musées qui écrivent une nouvelle histoire de l'art moderne centrée sur New York.
- L'historien **Serge Guilbaut** a résumé ce basculement dans un livre de 1983 : Comment New York vola l'idée d'art moderne.

### À retenir pour le bac
- Repères : 1937 (« Art dégénéré »), 1940 (Occupation, Rosenberg), 1942 (Art of This Century), 1947 (Musée d'art moderne), 1964 (Rauschenberg à Venise).
- Rose Valland et la spoliation des collections juives.
- Un déclin progressif et discuté : Paris garde un rôle après 1945, mais n'est plus le centre unique.`,
      cartes: [
        { q: "Que dit Harold Rosenberg en décembre 1940 ?", r: "Que la chute de Paris a fermé le « laboratoire du XXe siècle » (Partisan Review)." },
        { q: "Qu'est-ce que l'exposition « Art dégénéré » ?", r: "Une exposition nazie de 1937 à Munich pour ridiculiser l'art moderne et les artistes juifs." },
        { q: "Quand l'armée allemande entre-t-elle dans Paris ?", r: "Le 14 juin 1940." },
        { q: "Qu'est-ce que la spoliation ?", r: "Le vol organisé des biens des familles juives, dont leurs collections d'art, par le service nazi ERR." },
        { q: "Quel musée parisien sert de dépôt aux œuvres volées ?", r: "Le musée du Jeu de paume, aux Tuileries." },
        { q: "Qui est Rose Valland ?", r: "Une attachée de conservation du Jeu de paume qui note en secret les œuvres volées ; ses notes permettent d'en retrouver beaucoup." },
        { q: "Que se passe-t-il aux Tuileries en 1943 ?", r: "Des œuvres jugées « dégénérées » (Miró, Klee, Picasso, Léger) y sont brûlées." },
        { q: "Qui est Varian Fry ?", r: "Un Américain qui organise depuis Marseille, en 1940-1941, la fuite d'artistes comme Breton, Ernst ou Chagall." },
        { q: "Où Mondrian part-il en exil ?", r: "À Londres en 1938, puis à New York en 1940." },
        { q: "Qu'est-ce que la galerie Art of This Century ?", r: "La galerie de Peggy Guggenheim à New York (1942), qui expose surréalistes en exil et jeunes Américains comme Pollock." },
        { q: "Qu'est-ce que le dripping ?", r: "La technique de Pollock : la peinture coule ou est projetée sur une toile posée au sol." },
        { q: "Quand ouvre le MoMA de New York ?", r: "En 1929." },
        { q: "Quand ouvre le Musée national d'art moderne à Paris ?", r: "En 1947, au palais de Tokyo." },
        { q: "Qu'est-ce que l'abstraction lyrique ?", r: "Une peinture abstraite et gestuelle défendue à Paris après 1945 par Hartung, Soulages, Manessier." },
        { q: "Quel événement de 1964 symbolise la domination new-yorkaise ?", r: "Le grand prix de peinture de la Biennale de Venise donné à l'Américain Robert Rauschenberg." },
        { q: "Quel livre de Serge Guilbaut résume ce basculement ?", r: "Comment New York vola l'idée d'art moderne (1983)." },
      ],
      quiz: [
        { q: "Selon Harold Rosenberg (1940), la chute de Paris a fermé :", choix: ["le laboratoire du XXe siècle", "le dernier grand Salon officiel", "le marché de l'art européen", "l'École des beaux-arts"], bonne: 0, expl: "Il l'écrit dans la revue new-yorkaise Partisan Review.", niv: 1 },
        { q: "Qui note en secret les œuvres volées au Jeu de paume ?", choix: ["Peggy Guggenheim", "Gertrude Stein", "Rose Valland", "Sylvia Beach"], bonne: 2, expl: "Ses notes permettent de retrouver de nombreuses œuvres.", niv: 1 },
        { q: "Quel rôle joue Varian Fry en 1940-1941 ?", choix: ["Il dirige le pillage des collections juives", "Il fonde le MoMA de New York", "Il rachète aux enchères le stock entier de Kahnweiler", "Il organise la fuite d'artistes depuis Marseille"], bonne: 3, expl: "Breton, Ernst, Chagall, Masson lui doivent leur exil.", niv: 2 },
        { q: "Quel était le but de l'exposition « Art dégénéré » de 1937 ?", choix: ["Acheter l'art moderne pour les musées allemands", "Ridiculiser l'art moderne", "Célébrer les peintres de Montparnasse", "Montrer l'art des fous dans les hôpitaux"], bonne: 1, expl: "Les nazis y exposent l'art moderne pour le moquer.", niv: 2 },
        { q: "La galerie Art of This Century, ouverte à New York en 1942, appartient à :", choix: ["Peggy Guggenheim", "Albert Barnes", "Clement Greenberg", "Leo Castelli"], bonne: 0, expl: "Elle y expose les exilés et le jeune Pollock.", niv: 2 },
        { q: "Qu'est-ce que le dripping de Pollock ?", choix: ["Un collage de papiers journaux", "Une photographie faite sans appareil", "Un relief en tôle découpée et peinte en noir", "De la peinture coulée sur une toile au sol"], bonne: 3, expl: "La toile est posée au sol, le peintre tourne autour.", niv: 1 },
        { q: "Quel événement de 1964 symbolise la domination de New York ?", choix: ["L'ouverture du MoMA", "La mort de Picasso à Mougins", "Le grand prix de Rauschenberg à Venise", "L'exposition de Guernica à Paris"], bonne: 2, expl: "Un Américain reçoit le grand prix de peinture de la Biennale.", niv: 3 },
        { q: "Qui défend à Paris l'abstraction lyrique après 1945 ?", choix: ["Pollock et De Kooning", "Hartung et Soulages", "Braque et Picasso", "Matisse et Derain"], bonne: 1, expl: "Une « seconde École de Paris » face à New York.", niv: 2 },
        { q: "Pourquoi New York prend-elle la place de Paris ? Quelle raison est économique ?", choix: ["L'exil des surréalistes", "Les bombardements alliés de 1944", "La force du marché américain", "L'Occupation de Paris"], bonne: 2, expl: "Collectionneurs et galeries américains ont plus de moyens.", niv: 3 },
        { q: "Quel musée parisien sert de dépôt aux œuvres spoliées sous l'Occupation ?", choix: ["Le Jeu de paume", "Le Louvre", "Le Petit Palais", "Le palais de Tokyo"], bonne: 0, expl: "Les œuvres y sont triées avant d'être envoyées en Allemagne.", niv: 2 },
        { q: "Comment décrire le mieux le déclin de Paris au milieu du siècle ?", choix: ["Une chute brutale dès juin 1940, sans suite", "Une invention des critiques américains", "Un effet de la seule mode du jazz", "Un basculement progressif et encore discuté"], bonne: 3, expl: "Paris garde un rôle après 1945 mais n'est plus le centre unique.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 8
    {
      chapitre: 'hida-8',
      fiche: `## Nature ? (1) : fusion originelle, nature sacrée et regards extra-occidentaux

Question limitative « Objets et enjeux de l'histoire des arts : Nature ? ». Le point d'interrogation compte : la nature n'est pas une évidence, c'est une **idée construite**, qui change selon les cultures et les époques. Le programme propose de la suivre « de la **fusion originelle** aux **ruptures technicistes** en passant par les **naturalismes** ».

### Trois façons dont la nature entre dans l'art
- Comme **thème** : on représente des paysages, des animaux, des plantes.
- Comme **objet** : on pense la nature, on l'imite, on la corrige (un jardin, un traité).
- Comme **matériau** : on travaille avec la pierre, le bois, l'eau, la lumière, le vent.

### La fusion originelle
- Dans les grottes ornées de **Chauvet** (environ **36 000 ans**) et de **Lascaux** (environ **18 000 ans**), les animaux sont peints en suivant les **reliefs naturels** de la paroi. L'homme et l'animal semblent appartenir au même monde.
- Pour l'anthropologue **Philippe Descola** (Par-delà nature et culture, **2005**), beaucoup de sociétés ne séparent pas l'humain de la nature. Ce qu'il appelle le **naturalisme** (l'homme d'un côté, la nature de l'autre) est une invention occidentale moderne.

### L'Antiquité : l'art imite la nature
- **Aristote** écrit que l'art imite la nature : c'est la **mimèsis**.
- **Pline l'Ancien** raconte que le peintre grec **Zeuxis** peignit des raisins si vrais que des oiseaux vinrent les picorer.
- **Platon**, lui, se méfie de l'imitation : une image n'est qu'une copie de copie.

### Le Moyen Âge : une nature créée par Dieu
- La nature est l'œuvre de Dieu et un **livre de symboles** : le lys de la Vierge, la licorne, le jardin clos (**hortus conclusus**).
- **Saint François d'Assise** célèbre « frère Soleil » et « sœur Eau » dans le Cantique des créatures (vers **1225**).
- Les chapiteaux et les tapisseries « **mille-fleurs** » (comme La Dame à la licorne, vers **1500**, musée de Cluny) montrent une flore abondante et précise.

### Regards extra-occidentaux
- **Chine** : la peinture **shanshui** (« montagne-eau ») montre l'homme minuscule dans une nature immense, comme Voyageurs parmi monts et ruisseaux de **Fan Kuan** (vers **1000**). Le **taoïsme** cherche l'harmonie avec le monde.
- **Japon** : dans le **shinto**, des esprits (**kami**) habitent montagnes, arbres et rochers. Le jardin sec du **Ryōan-ji** à Kyoto (fin du XVe siècle) dispose quinze pierres sur du sable ratissé. **Hokusai** publie les Trente-six vues du mont Fuji (vers **1830-1832**), dont La Grande Vague de Kanagawa.
- **Monde persan et moghol** : le jardin en quatre parties (**chahar bagh**), traversé par l'eau, image du paradis (le mot paradis vient d'un mot perse qui désigne un jardin clos).
- **Australie** : les peintures des **Aborigènes** relient le **territoire** aux récits du **Rêve**.

### La nature en musique
- **Clément Janequin**, Le Chant des oiseaux (XVIe siècle) : les voix imitent les oiseaux.
- **Vivaldi**, Les Quatre Saisons (**1725**) : musique à programme, avec des sonnets qui décrivent chaque saison.

### À retenir pour le bac
- Toujours interroger le point d'interrogation : quelle idée de la nature l'œuvre suppose-t-elle ?
- Thème, objet, matériau : trois entrées pour classer les œuvres.
- Des œuvres extra-occidentales sont attendues : shanshui, Ryōan-ji, Hokusai, jardins persans, art aborigène.
- Descola : la séparation homme-nature n'est pas universelle.`,
      cartes: [
        { q: "Pourquoi le thème s'intitule-t-il « Nature ? » avec un point d'interrogation ?", r: "Parce que la nature n'est pas une évidence : c'est une idée construite, qui change selon les cultures et les époques." },
        { q: "Quelles sont les trois façons dont la nature entre dans l'art ?", r: "Comme thème (on la représente), comme objet (on la pense, on la corrige), comme matériau (on travaille avec elle)." },
        { q: "Quel âge ont les peintures de Chauvet et de Lascaux ?", r: "Environ 36 000 ans pour Chauvet, environ 18 000 ans pour Lascaux." },
        { q: "Pourquoi parle-t-on de fusion originelle pour les grottes ornées ?", r: "Les animaux suivent les reliefs naturels de la paroi : l'homme et l'animal semblent appartenir au même monde." },
        { q: "Que dit Philippe Descola dans Par-delà nature et culture (2005) ?", r: "Que séparer l'humain de la nature (le « naturalisme ») est une invention occidentale moderne, pas une évidence universelle." },
        { q: "Qu'est-ce que la mimèsis ?", r: "L'imitation de la nature par l'art, selon Aristote." },
        { q: "Que raconte Pline l'Ancien sur Zeuxis ?", r: "Que ce peintre grec peignit des raisins si vrais que des oiseaux vinrent les picorer." },
        { q: "Pourquoi Platon se méfie-t-il de l'imitation ?", r: "Une image n'est qu'une copie de copie, loin de la vérité." },
        { q: "Comment le Moyen Âge voit-il la nature ?", r: "Comme l'œuvre de Dieu et un livre de symboles (le lys, la licorne, le jardin clos)." },
        { q: "Qu'est-ce qu'une tapisserie mille-fleurs ?", r: "Une tapisserie dont le fond est semé de plantes précises, comme La Dame à la licorne (vers 1500, musée de Cluny)." },
        { q: "Qu'est-ce que la peinture shanshui ?", r: "La peinture chinoise de « montagne-eau », où l'homme est minuscule dans une nature immense." },
        { q: "Qu'est-ce que le Ryōan-ji ?", r: "Un temple de Kyoto dont le jardin sec dispose quinze pierres sur du sable ratissé (fin du XVe siècle)." },
        { q: "Que sont les kami ?", r: "Dans le shinto japonais, des esprits qui habitent montagnes, arbres et rochers." },
        { q: "Quelle série de Hokusai contient La Grande Vague ?", r: "Les Trente-six vues du mont Fuji, vers 1830-1832." },
        { q: "Qu'est-ce que le chahar bagh ?", r: "Le jardin persan en quatre parties, traversé par l'eau, image du paradis." },
        { q: "Quelle œuvre de la Renaissance imite les oiseaux par les voix ?", r: "Le Chant des oiseaux de Clément Janequin." },
      ],
      quiz: [
        { q: "Dans la grotte Chauvet, les animaux sont souvent peints :", choix: ["sur des toiles tendues devant la paroi", "d'après des modèles en bois sculpté", "en suivant les reliefs de la paroi", "en noir sur un fond blanc préparé"], bonne: 2, expl: "La paroi naturelle fait partie de l'image.", niv: 1 },
        { q: "Selon Aristote, l'art :", choix: ["imite la nature", "doit tourner le dos au réel", "n'est qu'une copie de copie", "est réservé aux dieux"], bonne: 0, expl: "C'est la mimèsis ; Platon, lui, se méfie de la copie.", niv: 1 },
        { q: "Que montre l'anecdote des raisins de Zeuxis rapportée par Pline ?", choix: ["Le refus de peindre des fruits", "L'idéal d'une imitation parfaite", "La naissance de la nature morte flamande", "La victoire de la sculpture sur la peinture"], bonne: 1, expl: "Des oiseaux viennent picorer des raisins peints.", niv: 2 },
        { q: "Pour Philippe Descola, séparer l'humain de la nature est :", choix: ["une loi commune à l'humanité entière", "une idée née dans la Chine des Song", "un héritage direct de la préhistoire", "une invention occidentale moderne"], bonne: 3, expl: "Il appelle cette séparation le « naturalisme ».", niv: 3 },
        { q: "Dans une peinture shanshui chinoise, l'être humain est souvent :", choix: ["absent pour des raisons religieuses", "placé au centre, très grand", "minuscule dans une nature immense", "remplacé par des dragons"], bonne: 2, expl: "La nature domine ; l'homme y trouve sa place, discrète.", niv: 2 },
        { q: "Le jardin sec du Ryōan-ji, à Kyoto, est composé :", choix: ["de pierres sur du sable ratissé", "de massifs de fleurs taillés en carré", "d'un grand bassin rempli de carpes", "de statues de dieux shinto"], bonne: 0, expl: "Quinze pierres sur du sable : un paysage réduit à l'essentiel.", niv: 2 },
        { q: "Dans le shinto japonais, que sont les kami ?", choix: ["Des estampes de paysage", "Des jardins de temples", "Des moines peintres de la cour impériale", "Des esprits des lieux naturels"], bonne: 3, expl: "Montagnes, arbres et rochers peuvent abriter des kami.", niv: 1 },
        { q: "Le jardin persan en quatre parties, image du paradis, s'appelle :", choix: ["un hortus conclusus", "un chahar bagh", "un shanshui", "un parterre de broderie"], bonne: 1, expl: "Le mot paradis vient d'un mot perse désignant un jardin clos.", niv: 2 },
        { q: "Dans La Dame à la licorne, le fond semé de plantes s'appelle :", choix: ["un décor mille-fleurs", "un paysage à la chinoise", "une perspective atmosphérique", "un trompe-l'œil"], bonne: 0, expl: "Ces tapisseries vers 1500 sont au musée de Cluny.", niv: 2 },
        { q: "Une œuvre où la nature est utilisée comme matériau, c'est par exemple :", choix: ["un tableau de paysage peint à l'huile sur toile", "un poème qui décrit longuement la forêt", "une sculpture de feuilles et de branches", "le traité d'un jardinier sur les arbres fruitiers"], bonne: 2, expl: "Thème, objet ou matériau : ici, la nature est la matière de l'œuvre.", niv: 3 },
        { q: "Quelle œuvre extra-occidentale montre la nature comme une force qui menace l'homme ?", choix: ["Le Cantique des créatures de saint François", "Le Chant des oiseaux", "La Dame à la licorne", "La Grande Vague de Kanagawa"], bonne: 3, expl: "La vague de Hokusai domine les barques et le mont Fuji.", niv: 3 },
        { q: "Comment le Moyen Âge chrétien voit-il la nature ?", choix: ["Comme un simple décor dépourvu de sens", "Comme l'œuvre de Dieu et un livre de symboles", "Comme une machine à exploiter sans limite", "Comme un sujet interdit aux artistes"], bonne: 1, expl: "Le lys, la licorne, le jardin clos portent un sens religieux.", niv: 2 },
      ],
    },
    // ---------------------------------------------------------------- 9
    {
      chapitre: 'hida-9',
      fiche: `## Nature ? (2) : les naturalismes, du paysage classique à l'impressionnisme

En Occident, de la Renaissance au XIXe siècle, les artistes cherchent à **observer** la nature et à la représenter de plus en plus fidèlement : ce sont les **naturalismes**. Mais chaque époque construit sa propre nature : idéale, sublime, scientifique ou changeante.

### La Renaissance : observer
- **Albrecht Dürer** peint à l'aquarelle La Grande Touffe d'herbes (**1503**, Vienne) : des herbes ordinaires, avec une précision de botaniste.
- **Léonard de Vinci** étudie les plantes, l'eau, les rochers ; il invente la **perspective atmosphérique** : le lointain devient bleuté et flou.

### Le paysage classique : une nature idéale
- La **hiérarchie des genres** (fixée par Félibien en **1667**) place le paysage bien au-dessous de la peinture d'histoire.
- **Nicolas Poussin** (Les Quatre Saisons, **1660-1664**, Louvre) et **le Lorrain** composent des paysages **idéalisés** où la nature encadre une scène biblique ou antique.
- Le **jardin à la française** d'**André Le Nôtre** à **Versailles** (à partir de **1661**) soumet la nature à la **géométrie** : allées droites, bassins, arbres taillés. C'est l'image du pouvoir du roi.

### Le XVIIIe siècle : le pittoresque et le sublime
- Le **jardin à l'anglaise** imite une nature libre : chemins sinueux, bosquets, fausses ruines (Stourhead en Angleterre, Ermenonville en France, où repose **Rousseau**).
- **Edmund Burke** (**1757**) distingue le **beau** (harmonieux) et le **sublime** : ce qui est immense et effrayant (tempêtes, montagnes, abîmes), mais qui fascine.

### Le romantisme : une nature intérieure
- **Caspar David Friedrich**, Le Voyageur contemplant une mer de nuages (vers **1818**, Hambourg) : un homme de dos face à l'immensité. La nature reflète l'âme.
- **Turner** peint tempêtes et lumières dissoutes.
- **Beethoven**, Symphonie pastorale (n° 6, **1808**) : « plutôt expression du sentiment que peinture ».

### Le XIXe siècle : peindre sur le motif
- L'**école de Barbizon** (Théodore Rousseau, **Millet**, Corot) peint la forêt de **Fontainebleau** d'après nature.
- Le **tube de peinture** (inventé en **1841**) et le train facilitent le travail **en plein air**.
- **Courbet**, peintre réaliste, peint les rochers et les sources de son Jura natal.
- L'**impressionnisme** saisit la lumière qui change : **Monet**, Impression, soleil levant (**1872**), montré à l'exposition de **1874**, donne son nom au mouvement. Ses **séries** (Meules, Cathédrales de Rouen, Nymphéas) montrent un même motif à différentes heures.
- Les **Nymphéas**, peints dans son jardin de **Giverny**, sont installés au musée de l'**Orangerie** en **1927**.

### Science et art nouveau
- **Darwin** (L'Origine des espèces, **1859**) change le regard sur le vivant. **Ernst Haeckel** dessine des formes naturelles (Formes artistiques de la nature, 1899-1904) qui inspirent l'**Art nouveau** : **Émile Gallé** et l'**école de Nancy**, ou Guimard à Paris.
- En musique, **Debussy** compose La Mer (**1905**), trois esquisses symphoniques ; la partition originale porte en couverture La Grande Vague de Hokusai.

### À retenir pour le bac
- Les naturalismes sont pluriels : nature idéale (Poussin), domptée (Le Nôtre), sublime (Friedrich), observée (Barbizon), changeante (Monet).
- Repères : 1503 (Dürer), 1667 (hiérarchie des genres), 1757 (Burke), vers 1818 (Friedrich), 1872-1874 (impressionnisme).
- Lier les arts : jardins, peinture, musique, arts décoratifs.`,
      cartes: [
        { q: "Que peint Dürer en 1503 ?", r: "La Grande Touffe d'herbes, une aquarelle d'herbes ordinaires d'une précision de botaniste (Vienne)." },
        { q: "Qu'est-ce que la perspective atmosphérique ?", r: "Un procédé étudié par Léonard de Vinci : le lointain devient bleuté et flou, comme dans l'air réel." },
        { q: "Où se place le paysage dans la hiérarchie des genres de 1667 ?", r: "Bien au-dessous de la peinture d'histoire, en bas de l'échelle avec la nature morte." },
        { q: "Qu'est-ce qu'un paysage classique ?", r: "Un paysage idéalisé et composé, qui encadre une scène biblique ou antique, comme chez Poussin ou le Lorrain." },
        { q: "Que montre le jardin de Le Nôtre à Versailles ?", r: "Une nature soumise à la géométrie (allées droites, bassins, arbres taillés), image du pouvoir du roi." },
        { q: "Qu'est-ce qu'un jardin à l'anglaise ?", r: "Un jardin qui imite une nature libre : chemins sinueux, bosquets, fausses ruines (Stourhead, Ermenonville)." },
        { q: "Quelle différence Burke fait-il entre beau et sublime (1757) ?", r: "Le beau est harmonieux ; le sublime est immense et effrayant, mais fascine (tempêtes, montagnes, abîmes)." },
        { q: "Que représente Le Voyageur contemplant une mer de nuages ?", r: "Un homme de dos face à l'immensité, vers 1818, par Caspar David Friedrich : la nature reflète l'âme." },
        { q: "Que dit Beethoven de sa Symphonie pastorale ?", r: "Qu'elle est « plutôt expression du sentiment que peinture » (n° 6, 1808)." },
        { q: "Qu'est-ce que l'école de Barbizon ?", r: "Des peintres (Théodore Rousseau, Millet, Corot) qui peignent d'après nature la forêt de Fontainebleau." },
        { q: "Quelle invention de 1841 aide la peinture en plein air ?", r: "Le tube de peinture, qui permet d'emporter ses couleurs." },
        { q: "Quel tableau donne son nom à l'impressionnisme ?", r: "Impression, soleil levant de Monet (1872), montré à l'exposition de 1874." },
        { q: "Pourquoi Monet peint-il des séries ?", r: "Pour montrer un même motif (meules, cathédrale, nymphéas) à différentes heures et saisons : la lumière change tout." },
        { q: "Où sont installés les Nymphéas de Monet en 1927 ?", r: "Au musée de l'Orangerie, à Paris." },
        { q: "Quel lien entre Haeckel et l'Art nouveau ?", r: "Ses dessins de formes naturelles (1899-1904) inspirent l'Art nouveau, comme Gallé et l'école de Nancy." },
        { q: "Quelle image orne la partition originale de La Mer de Debussy (1905) ?", r: "La Grande Vague de Hokusai." },
      ],
      quiz: [
        { q: "Que peint Albrecht Dürer dans La Grande Touffe d'herbes (1503) ?", choix: ["Un jardin royal taillé", "Des herbes ordinaires", "Une forêt dans la tempête", "Un paysage biblique idéalisé"], bonne: 1, expl: "Une précision de botaniste, à l'aquarelle.", niv: 1 },
        { q: "Quel procédé rend le lointain bleuté et flou ?", choix: ["La perspective linéaire à point de fuite", "Le clair-obscur", "Le trompe-l'œil", "La perspective atmosphérique"], bonne: 3, expl: "Léonard de Vinci l'étudie dans ses carnets.", niv: 2 },
        { q: "Que traduit le jardin de Le Nôtre à Versailles ?", choix: ["Un goût pour la nature sauvage", "Le refus de toute géométrie", "La nature soumise au pouvoir du roi", "L'influence des jardins japonais sur la cour"], bonne: 2, expl: "Allées droites et arbres taillés : l'ordre royal.", niv: 2 },
        { q: "Pour Burke, un orage en montagne, immense et effrayant, relève :", choix: ["du sublime", "du pittoresque", "du beau", "de la nature morte"], bonne: 0, expl: "Le sublime fascine par sa démesure ; le beau est harmonieux.", niv: 2 },
        { q: "Dans Le Voyageur contemplant une mer de nuages, la nature :", choix: ["sert de décor à une scène antique", "reflète l'âme du personnage", "est soumise à la géométrie", "est copiée pour un traité de botanique"], bonne: 1, expl: "Friedrich est un peintre romantique : l'homme de dos médite.", niv: 2 },
        { q: "Quelle invention de 1841 aide les peintres à travailler en plein air ?", choix: ["La photographie couleur", "Le chevalet pliant électrique", "La lampe à pétrole", "Le tube de peinture"], bonne: 3, expl: "On peut emporter ses couleurs sur le motif.", niv: 1 },
        { q: "Quel tableau donne son nom à l'impressionnisme ?", choix: ["Impression, soleil levant", "Les Meules", "Le Déjeuner sur l'herbe de Manet", "La Source de la Loue"], bonne: 0, expl: "Monet le peint en 1872 et l'expose en 1874.", niv: 1 },
        { q: "Pourquoi Monet peint-il la cathédrale de Rouen des dizaines de fois ?", choix: ["Pour étudier son architecture gothique", "Pour la vendre à l'État pièce par pièce", "Pour montrer la lumière qui change", "Pour préparer sa restauration"], bonne: 2, expl: "Le vrai sujet des séries est la lumière.", niv: 3 },
        { q: "Où se situe le paysage dans la hiérarchie des genres de 1667 ?", choix: ["Au sommet, avant l'histoire", "Bien au-dessous de la peinture d'histoire", "À égalité avec le portrait du roi", "Hors de la peinture, avec l'art des jardins"], bonne: 1, expl: "Félibien place la peinture d'histoire tout en haut.", niv: 3 },
        { q: "Quel peintre de l'école de Barbizon peint la vie paysanne ?", choix: ["Millet", "Poussin", "Friedrich", "Turner"], bonne: 0, expl: "Millet travaille en forêt de Fontainebleau, comme Théodore Rousseau.", niv: 2 },
        { q: "Quel artiste de l'Art nouveau s'inspire des formes naturelles à Nancy ?", choix: ["Auguste Perret", "André Le Nôtre", "Robert Delaunay", "Émile Gallé"], bonne: 3, expl: "Gallé et l'école de Nancy puisent dans la flore et la faune.", niv: 2 },
        { q: "Que montre la couverture de la partition de La Mer de Debussy (1905) ?", choix: ["Un tableau de Monet", "Une photographie de Bretagne", "La Grande Vague de Hokusai", "Un dessin de Haeckel"], bonne: 2, expl: "Signe du japonisme et du dialogue entre les arts.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 10
    {
      chapitre: 'hida-10',
      fiche: `## Nature ? (3) : ruptures techniques, art dans et avec la nature, écologie

Avec l'industrie, puis la crise écologique, la nature cesse d'être un simple modèle : elle devient un **lieu**, un **matériau**, une **cause**. Ce sont les « **ruptures technicistes** » dont parle le programme.

### La machine face à la nature
- **Turner**, Pluie, vapeur et vitesse (**1844**, Londres) : une locomotive surgit dans la pluie et la brume.
- Le **futurisme** (1909) célèbre la vitesse et la machine contre le « clair de lune ».
- La ville industrielle fait naître un regret de la nature, mais aussi des **parcs** publics (Buttes-Chaumont, 1867).

### De l'arbre à l'abstraction
- **Mondrian** peint des arbres de plus en plus simplifiés (L'Arbre gris, **1911**) jusqu'à l'abstraction : on garde la **structure** de la nature, pas son apparence.
- **Jean Arp** et **Brancusi** cherchent des formes simples, comme poussées par la nature (formes **biomorphiques**).

### L'architecture organique
- **Gaudí**, à la Sagrada Família de Barcelone (commencée en 1882), dessine des colonnes comme des **arbres**.
- **Frank Lloyd Wright** construit la **Maison sur la cascade** (Fallingwater, **1936-1939**, Pennsylvanie) au-dessus d'une chute d'eau : le bâtiment s'intègre au rocher et au paysage.

### Le land art : faire l'œuvre dans la nature
- À la fin des années **1960**, des artistes quittent musées et galeries pour travailler **dans le paysage**.
- **Robert Smithson**, Spiral Jetty (**1970**) : une spirale de roches noires d'environ 450 mètres dans le **Grand Lac Salé** (Utah). Elle disparaît et réapparaît selon le niveau de l'eau.
- **Walter De Maria**, The Lightning Field (**1977**) : 400 tiges d'acier dans le désert du Nouveau-Mexique, qui attirent la foudre.
- **Richard Long**, A Line Made by Walking (**1967**) : une ligne tracée en marchant dans l'herbe, connue par une **photographie**. L'œuvre est presque invisible et **éphémère**.
- **Andy Goldsworthy** assemble feuilles, glace et pierres sur place, puis les laisse disparaître.
- **Les Christo** entourent onze îles de Miami de tissu rose (Surrounded Islands, **1983**).
- Souvent, le public ne voit l'œuvre que par des **photographies** ou des films : c'est un paradoxe du land art.

### L'arte povera et l'art écologique
- **Giuseppe Penone** (arte povera) moule sa main sur un tronc d'arbre qui continue de pousser (1968) : l'œuvre se fait **avec** le temps du vivant.
- **Joseph Beuys**, 7000 chênes (**1982**, Kassel) : planter sept mille arbres, chacun avec une pierre de basalte. C'est une **sculpture sociale**.
- **Agnes Denes** sème un champ de blé au cœur de Manhattan (Wheatfield, **1982**).
- **Olafur Eliasson**, Ice Watch (Paris, **2015**, pendant la COP21) : des blocs de glace du Groenland fondent place du Panthéon. On parle aujourd'hui d'**Anthropocène** : l'époque où l'homme transforme la planète.

### Musique et cinéma
- **Olivier Messiaen**, Catalogue d'oiseaux (1956-1958) : il note les chants d'oiseaux et les transcrit pour le piano.
- **John Cage**, 4'33'' (**1952**) : le pianiste ne joue pas ; la musique, ce sont les bruits de la salle.
- **Hayao Miyazaki**, Princesse Mononoké (**1997**) : un film d'animation japonais sur la guerre entre la forêt et l'industrie.

### À retenir pour le bac
- Trois ruptures : la machine (Turner, futurisme), l'abstraction (Mondrian), l'œuvre dans le paysage (land art).
- Œuvres clés : Spiral Jetty (1970), A Line Made by Walking (1967), 7000 chênes (1982), Ice Watch (2015).
- Le paradoxe du land art : une œuvre éphémère, connue par la photographie.
- Aujourd'hui, la nature est une cause : écologie, Anthropocène.`,
      cartes: [
        { q: "Que montre Pluie, vapeur et vitesse de Turner (1844) ?", r: "Une locomotive qui surgit dans la pluie et la brume : la machine entre dans le paysage." },
        { q: "Comment Mondrian passe-t-il de l'arbre à l'abstraction ?", r: "Il simplifie ses arbres (L'Arbre gris, 1911) pour ne garder que la structure, jusqu'à l'abstraction." },
        { q: "Qu'est-ce qu'une forme biomorphique ?", r: "Une forme simple et arrondie qui semble poussée par la nature, comme chez Arp." },
        { q: "Qu'est-ce que la Maison sur la cascade ?", r: "Une maison de Frank Lloyd Wright (1936-1939, Pennsylvanie) bâtie au-dessus d'une chute d'eau, intégrée au paysage." },
        { q: "Qu'est-ce que le land art ?", r: "Un art né à la fin des années 1960, qui crée des œuvres dans le paysage, hors des musées." },
        { q: "Qu'est-ce que Spiral Jetty ?", r: "Une spirale de roches d'environ 450 m dans le Grand Lac Salé (Utah), par Robert Smithson, en 1970." },
        { q: "Qu'est-ce que The Lightning Field ?", r: "400 tiges d'acier plantées dans le désert du Nouveau-Mexique par Walter De Maria (1977), qui attirent la foudre." },
        { q: "Qu'est-ce que A Line Made by Walking ?", r: "Une ligne tracée en marchant dans l'herbe par Richard Long (1967), connue par une photographie." },
        { q: "Quel paradoxe pose le land art ?", r: "Les œuvres sont lointaines ou éphémères : le public les connaît surtout par des photographies ou des films." },
        { q: "Que fait Andy Goldsworthy ?", r: "Il assemble sur place feuilles, glace ou pierres, puis les laisse disparaître, et les photographie." },
        { q: "Que fait Penone en 1968 ?", r: "Il moule sa main sur un tronc d'arbre qui continue de pousser : l'œuvre se fait avec le temps du vivant (arte povera)." },
        { q: "Qu'est-ce que 7000 chênes de Beuys ?", r: "Planter sept mille arbres à Kassel (1982), chacun avec une pierre de basalte : une sculpture sociale." },
        { q: "Qu'est-ce que Ice Watch d'Olafur Eliasson ?", r: "Des blocs de glace du Groenland qui fondent place du Panthéon à Paris, pendant la COP21 de 2015." },
        { q: "Qu'est-ce que l'Anthropocène ?", r: "L'époque où l'activité humaine transforme la planète entière." },
        { q: "Que fait Messiaen dans le Catalogue d'oiseaux ?", r: "Il note des chants d'oiseaux et les transcrit pour le piano (1956-1958)." },
        { q: "Que montre Princesse Mononoké de Miyazaki (1997) ?", r: "La guerre entre la forêt et l'industrie, dans un film d'animation japonais." },
      ],
      quiz: [
        { q: "Quel tableau de 1844 fait entrer une locomotive dans le paysage ?", choix: ["Pluie, vapeur et vitesse", "Le Voyageur contemplant une mer de nuages", "Impression, soleil levant", "L'Arbre gris"], bonne: 0, expl: "Turner peint la machine dans la pluie et la brume.", niv: 1 },
        { q: "Que garde Mondrian de l'arbre quand il va vers l'abstraction ?", choix: ["Sa couleur verte d'origine", "Le nom de son espèce", "Sa structure, pas son apparence", "Le paysage hollandais qui l'entoure"], bonne: 2, expl: "Les lignes de l'arbre deviennent une grille.", niv: 2 },
        { q: "Où est construite la Maison sur la cascade de Frank Lloyd Wright ?", choix: ["Au cœur de Manhattan", "Sur une île de Miami", "Dans le désert du Nouveau-Mexique", "Au-dessus d'une chute d'eau"], bonne: 3, expl: "L'architecture organique s'intègre au rocher et à l'eau.", niv: 1 },
        { q: "Spiral Jetty de Robert Smithson se trouve :", choix: ["dans le désert du Nouveau-Mexique", "dans le Grand Lac Salé, en Utah", "dans une prairie anglaise", "devant le Panthéon, à Paris"], bonne: 1, expl: "Une spirale de roches qui apparaît selon le niveau de l'eau (1970).", niv: 2 },
        { q: "Comment le public connaît-il surtout A Line Made by Walking (1967) ?", choix: ["Par une photographie", "Par une visite guidée du site", "Par un moulage au musée", "Par un enregistrement sonore"], bonne: 0, expl: "La ligne d'herbe foulée a disparu ; reste l'image.", niv: 2 },
        { q: "Qu'attire The Lightning Field de Walter De Maria ?", choix: ["Les oiseaux migrateurs", "Les marées du Pacifique", "Des pèlerins venus des grandes villes", "La foudre"], bonne: 3, expl: "400 tiges d'acier plantées dans le désert.", niv: 1 },
        { q: "Pourquoi 7000 chênes de Beuys est-il une « sculpture sociale » ?", choix: ["Il est exposé dans le hall d'une mairie de Kassel", "Les habitants changent la ville en plantant", "Ses ventes financent une association de quartier", "Il représente des ouvriers en bronze grandeur nature"], bonne: 1, expl: "L'œuvre agit dans la vie collective de Kassel (1982).", niv: 3 },
        { q: "Que veut faire comprendre Ice Watch d'Olafur Eliasson (2015) ?", choix: ["La beauté des glaciers des Alpes", "L'art de la sculpture sur glace", "La fonte des glaces due au climat", "La fragilité des pierres du Panthéon"], bonne: 2, expl: "Des blocs du Groenland fondent à Paris pendant la COP21.", niv: 2 },
        { q: "Dans l'œuvre de Penone (1968), une main moulée sur un tronc qui pousse, l'artiste travaille :", choix: ["avec le temps du vivant", "contre la croissance de l'arbre", "pour un musée de botanique", "à partir d'un tableau ancien"], bonne: 0, expl: "L'arbre continue l'œuvre : c'est l'esprit de l'arte povera.", niv: 3 },
        { q: "Quel est le paradoxe du land art ?", choix: ["Il est réservé aux grands musées des capitales", "Un art qui refuse toute idée de paysage", "Il interdit de photographier les œuvres", "Une œuvre éphémère, connue par l'image"], bonne: 3, expl: "On voit rarement l'œuvre sur place, souvent en photo.", niv: 3 },
        { q: "Que fait Messiaen dans le Catalogue d'oiseaux ?", choix: ["Il enregistre des oiseaux en cage dans son atelier", "Il compose pour un ballet de cygnes", "Il transcrit des chants d'oiseaux pour piano", "Il écrit un traité d'ornithologie"], bonne: 2, expl: "Il note les chants dans la nature, puis les écrit pour le piano.", niv: 2 },
        { q: "Quel film d'animation japonais oppose la forêt et l'industrie ?", choix: ["Un chien andalou", "Princesse Mononoké", "La Grande Vague", "Spiral Jetty"], bonne: 1, expl: "Hayao Miyazaki, 1997.", niv: 1 },
      ],
    },
    // ---------------------------------------------------------------- 11
    {
      chapitre: 'hida-11',
      fiche: `## L'épreuve : dissertation, composition sur documents et portfolios

L'épreuve de spécialité (coefficient 16) a deux parties, chacune pour la **moitié de la note** : un **écrit** de 3 h 30 et un **oral** de 30 minutes (note de service du 11 septembre 2026, applicable dès la session 2027).

### L'écrit : trois sujets, un au choix
- Il y a **un sujet par question limitative** : Viollet-le-Duc, Paris capitale des arts, Nature ?
- Parmi les trois, au moins **une dissertation** et au moins **une composition sur documents**.
- La **dissertation** part d'une question ou d'une **citation**. On construit une réflexion personnelle appuyée sur des **œuvres précises et variées** (plusieurs arts, plusieurs époques).
- La **composition sur documents** pose une question accompagnée d'au plus **sept documents**, sur **cinq œuvres** au plus (images, un texte, un extrait sonore de 5 minutes au plus ou audiovisuel). Les documents **appuient** l'argumentation : il ne s'agit pas de les commenter un par un.
- Le correcteur évalue : les **repères** (dates, lieux, contextes), le **vocabulaire** technique, un **raisonnement** construit, le **jugement esthétique et critique**, la capacité à **croiser et hiérarchiser** les sources.
- La **maîtrise de la langue** compte : une copie défaillante sur tous ses aspects ne peut pas avoir la moyenne.

### Construire une dissertation
- **Analyser le sujet** : définir chaque mot, repérer le point de tension.
- **Problématiser** : une vraie question, qui ne se répond pas par oui ou non.
- **Plan** en deux ou trois parties, chacune avec des sous-parties et des **exemples développés** (auteur, titre, date, analyse).
- **Introduction** : accroche, définition, problématique, annonce du plan. **Conclusion** : réponse claire et ouverture.

### Réussir la composition sur documents
- Lire la question d'abord, puis les documents.
- Classer les documents selon les idées, pas dans l'ordre de la page.
- Ajouter des **connaissances personnelles** : d'autres œuvres, des repères de cours.
- Citer chaque document précisément (« doc. 3 »).

### L'oral : deux portfolios
- Le candidat prépare **deux portfolios numériques**, chacun sur **une** des trois questions. Chaque portfolio réunit **3 à 8 œuvres**, ou une source critique ou théorique.
- Chaque œuvre est **identifiée** et **située**, avec sa source. Le seul texte personnel est un **titre court** : la problématique se dit à l'oral.
- Les portfolios sont envoyés sur **clé USB** 15 jours avant, avec un dossier imprimé et un **document de synthèse** signé par le professeur.
- Le jour J : **30 minutes sans préparation**. Le jury tire au sort l'un des deux portfolios ; **exposé de 15 minutes au plus**, sans notes, puis **entretien**.
- Il faut justifier le **choix** des œuvres, leur **ordre** et les **liens** entre elles.
- Le jury a deux professeurs ayant la certification en histoire des arts. Il évalue la maîtrise du programme, le vocabulaire, la structure, la précision, le **recul** sur son dossier, la sensibilité et l'expression orale.
- **Sans portfolios, l'épreuve ne peut pas avoir lieu.**

### À retenir pour le bac
- Écrit 3 h 30 : un sujet au choix sur trois, dissertation ou composition sur documents.
- Oral 30 minutes sans préparation : deux portfolios de 3 à 8 œuvres, un tiré au sort, exposé de 15 minutes au plus.
- Chaque partie compte pour moitié.
- Œuvres précises, variées, situées : c'est ce qui fait la note.`,
      cartes: [
        { q: "Combien de temps dure l'écrit d'histoire des arts ?", r: "3 h 30." },
        { q: "Combien de sujets y a-t-il à l'écrit ?", r: "Trois, un par question limitative ; le candidat en choisit un." },
        { q: "Quels types de sujets peut-on avoir à l'écrit ?", r: "Au moins une dissertation et au moins une composition sur documents parmi les trois." },
        { q: "Combien de documents au plus dans une composition ?", r: "Sept documents au plus, portant sur cinq œuvres au plus." },
        { q: "Quel est le rôle des documents dans la composition ?", r: "Ils appuient l'argumentation ; il ne faut pas les commenter un par un." },
        { q: "Quels critères le correcteur évalue-t-il à l'écrit ?", r: "Repères, vocabulaire technique, raisonnement construit, jugement esthétique et critique, croisement et hiérarchie des sources." },
        { q: "Combien de portfolios prépare-t-on pour l'oral ?", r: "Deux, chacun sur une des trois questions limitatives." },
        { q: "Combien d'œuvres dans un portfolio ?", r: "De 3 à 8 œuvres, ou une source critique ou théorique." },
        { q: "Quel texte personnel peut figurer dans le portfolio ?", r: "Seulement un titre court ; la problématique se dit à l'oral." },
        { q: "Comment se déroule l'oral ?", r: "30 minutes sans préparation : un portfolio tiré au sort, exposé de 15 minutes au plus sans notes, puis entretien." },
        { q: "Que faut-il justifier pendant l'exposé ?", r: "Le choix des œuvres, leur ordre et les liens entre elles." },
        { q: "Que se passe-t-il sans portfolios ?", r: "L'épreuve orale ne peut pas avoir lieu." },
        { q: "Quand envoie-t-on les portfolios ?", r: "Sur clé USB, 15 jours avant, avec un dossier imprimé et un document de synthèse signé par le professeur." },
        { q: "Quel poids ont l'écrit et l'oral ?", r: "Chacun compte pour la moitié de la note de l'épreuve." },
        { q: "Qu'est-ce qu'une bonne problématique ?", r: "Une vraie question, issue d'une tension dans le sujet, à laquelle on ne répond pas par oui ou non." },
      ],
      quiz: [
        { q: "Combien de sujets sont proposés à l'écrit d'histoire des arts ?", choix: ["Un seul, imposé", "Deux, un par semestre", "Quatre, dont deux sont obligatoires", "Trois, un par question limitative"], bonne: 3, expl: "Le candidat en choisit un.", niv: 1 },
        { q: "Dans la composition sur documents, les documents servent à :", choix: ["être décrits un par un dans l'ordre", "appuyer l'argumentation", "remplacer les connaissances de cours", "faire un résumé de chaque œuvre"], bonne: 1, expl: "On les classe selon les idées et on ajoute ses connaissances.", niv: 2 },
        { q: "Combien de documents au plus une composition peut-elle comporter ?", choix: ["Sept", "Trois", "Cinq", "Dix"], bonne: 0, expl: "Sept documents au plus, sur cinq œuvres au plus.", niv: 2 },
        { q: "Quel texte personnel le candidat peut-il mettre dans un portfolio ?", choix: ["Une problématique d'une page", "Un commentaire par œuvre", "Un titre court", "Un plan détaillé de l'exposé"], bonne: 2, expl: "La problématique se dit à l'oral.", niv: 2 },
        { q: "Combien de temps de préparation a-t-on à l'oral ?", choix: ["30 minutes", "15 minutes", "Une heure", "Aucun"], bonne: 3, expl: "L'oral se passe sans préparation, sur un portfolio tiré au sort.", niv: 1 },
        { q: "Combien d'œuvres un portfolio réunit-il ?", choix: ["De 3 à 8", "Une seule, très détaillée", "Au moins 15", "Exactement 5"], bonne: 0, expl: "De 3 à 8 œuvres, ou une source critique ou théorique.", niv: 1 },
        { q: "Que doit justifier le candidat pendant son exposé ?", choix: ["Le prix des œuvres choisies", "Le nom de son professeur", "Le choix, l'ordre et les liens des œuvres", "Le nombre d'heures passées à travailler l'œuvre"], bonne: 2, expl: "Le jury attend un vrai parcours, pas une liste.", niv: 2 },
        { q: "Quelle problématique est la mieux formulée ?", choix: ["« Viollet-le-Duc a-t-il restauré Notre-Dame ? »", "« Restaurer, est-ce conserver ou inventer ? »", "« Voici la vie de Viollet-le-Duc. »", "« Quelles sont les dates de Viollet-le-Duc ? »"], bonne: 1, expl: "Une vraie tension, qu'on ne règle pas par oui ou non.", niv: 3 },
        { q: "Que se passe-t-il si le candidat n'a pas ses portfolios ?", choix: ["Il passe l'oral sur des documents choisis par le jury", "On lui retire quatre points sur la note de l'oral", "Il garde la note de l'écrit pour toute l'épreuve", "L'épreuve orale ne peut pas avoir lieu"], bonne: 3, expl: "La note de service le dit clairement.", niv: 3 },
        { q: "Quel critère le jury de l'oral évalue-t-il en plus du savoir ?", choix: ["Le recul du candidat sur son propre dossier", "La beauté de la clé USB", "Le nombre de pages imprimées", "La durée totale de l'entretien avec le jury"], bonne: 0, expl: "Il évalue aussi la sensibilité et l'expression orale.", niv: 3 },
        { q: "Dans une dissertation, un exemple réussi :", choix: ["cite le titre d'une œuvre sans rien en dire de plus", "donne auteur, titre, date et une analyse", "raconte la vie de l'artiste", "remplace l'argument par une image"], bonne: 1, expl: "L'exemple prouve l'idée par une analyse précise.", niv: 2 },
      ],
    },
  ],
  methode: [
    {
      id: 'hida-m1', mat: 'hida', titre: "Dissertation sur une question limitative (« réparer et/ou repenser », « dans quelle mesure… »)",
      formules: ["Eugène Viollet-le-Duc : réparer et/ou repenser le monument ?", "Dans quelle mesure… ?", "Une citation suivie de « Vous discuterez cette affirmation »."],
      vu: ["Session 2026 (juin, métropole), sujet 2 : « Eugène Viollet-le-Duc : réparer et/ou repenser le monument ? » (dissertation)", "Note de service du 11 septembre 2026 : au moins une dissertation parmi les trois sujets, formulation variée, parfois une citation"],
      pts: "20 points, environ 3 h 30 si l'on choisit ce sujet",
      attendu: "Une réflexion personnelle construite (introduction, deux ou trois parties, conclusion), qui définit les termes, pose une problématique et s'appuie sur des œuvres précises, situées et de natures variées, avec le vocabulaire de chaque art.",
      etapes: ["Définir chaque mot du sujet (réparer, repenser, monument).", "Repérer la tension : ici, conserver ce qui existe ou inventer du neuf.", "Formuler une problématique qui ne se règle pas par oui ou non.", "Choisir six à huit œuvres précises, de plusieurs types (édifices, dessins, textes).", "Bâtir un plan en deux ou trois parties avec un exemple développé par sous-partie.", "Conclure par une réponse nette et une ouverture (Notre-Dame après 2019)."],
      mots: ["unité de style", "conscience patrimoniale", "authenticité", "rationalisme structurel", "restauration"],
      pieges: ["Raconter la vie de Viollet-le-Duc au lieu d'argumenter.", "Citer des chantiers sans date ni analyse.", "Oublier le « et/ou » : il faut montrer que réparer et repenser se mêlent.", "Ne parler que de Notre-Dame."],
      cas: "Sujet : « Eugène Viollet-le-Duc : réparer et/ou repenser le monument ? »",
      question: "Rédige l'introduction et le plan détaillé.",
      modele: "Introduction : le 15 avril 2019, la flèche de Notre-Dame s'effondre. On décide en 2020 de la refaire à l'identique, alors qu'elle n'était pas médiévale : Viollet-le-Duc l'avait dessinée en 1859. Réparer, c'est remettre en état ce qui existe ; repenser, c'est concevoir à nouveau. Le monument, lui, est un édifice chargé de mémoire, que le XIXe siècle apprend à protéger. Viollet-le-Duc a-t-il sauvé les monuments médiévaux, ou les a-t-il réinventés selon ses idées ? Nous verrons qu'il répare d'abord des édifices menacés, puis qu'il les repense au nom de l'unité de style, enfin que cette part d'invention fait aujourd'hui partie du patrimoine. Plan : I. Réparer : sauver des édifices en ruine (Vézelay dès 1840, arcs-boutants ; Notre-Dame avec Lassus en 1844 ; le rôle de Mérimée). II. Repenser : rétablir « un état complet qui peut n'avoir jamais existé » (chimères, flèche de 1859, toits d'ardoise de Carcassonne, Pierrefonds pour Napoléon III ; critiques de Ruskin). III. Repenser l'architecture elle-même : le Dictionnaire et les Entretiens, le fer, l'héritage de Gaudí et d'Anatole de Baudot, et la flèche refaite à l'identique en 2024.",
      grille: ["J'ai défini les mots du sujet.", "Ma problématique pose une vraie tension.", "Chaque partie a au moins une œuvre datée et analysée.", "J'ai utilisé au moins trois mots techniques."],
    },
    {
      id: 'hida-m2', mat: 'hida', titre: "Composition sur documents : répondre à une question avec un dossier de cinq œuvres",
      formules: ["En quoi peut-on dire que… ? Votre réponse s'appuiera sur tous les documents fournis ainsi que sur vos connaissances personnelles.", "Dans quelle mesure… ?"],
      vu: ["Session 2026 (juin, métropole), sujet 1 : « En quoi peut-on dire que Paris, au début du XXe siècle, est un laboratoire de la modernité ? » (Matisse, Man Ray, Delaunay, Apollinaire, extrait vidéo de Parade)", "Session 2024 (juin, métropole), sujet 1 : « Dans quelle mesure Viollet-le-Duc et les artistes de son temps ont-ils idéalisé le Moyen Âge dans leurs œuvres ? » (avec un extrait musical)"],
      pts: "20 points, environ 3 h 30 si l'on choisit ce sujet",
      attendu: "Une réponse organisée à la question, qui utilise tous les documents comme arguments (pas un commentaire document par document), les croise, les situe et les complète par des connaissances personnelles précises.",
      etapes: ["Lire la question et souligner les mots clés.", "Identifier chaque document : auteur, titre, date, technique, lieu.", "Noter pour chaque document ce qu'il apporte à la question.", "Regrouper les documents par idées pour faire deux ou trois parties.", "Ajouter dans chaque partie au moins une œuvre hors dossier.", "Citer les documents précisément (« doc. 2 ») dans le texte."],
      mots: ["avant-garde", "cosmopolitisme", "modernité", "synthèse des arts", "réception"],
      pieges: ["Commenter les documents un par un, dans l'ordre.", "Oublier un document, surtout l'extrait sonore ou vidéo.", "Ne rien ajouter au dossier.", "Recopier les légendes au lieu d'analyser."],
      cas: "Question : en quoi peut-on dire que Paris, au début du XXe siècle, est un laboratoire de la modernité ? Documents : Matisse, La Femme au chapeau (1905) ; Man Ray, rayographie (1922) ; Delaunay, Soleil, Tour, Aéroplane (1913) ; Apollinaire, « Zone » (1913) ; Parade (1917).",
      question: "Rédige la première partie.",
      modele: "I. Paris est d'abord un laboratoire parce qu'on y invente de nouveaux langages plastiques. Au Salon d'automne de 1905, Matisse expose La Femme au chapeau (doc. 1) : le visage est fait de taches vertes, mauves et orange posées sans souci du modelé. La couleur ne copie plus le réel, elle exprime : le critique Louis Vauxcelles parle de « fauves ». Huit ans plus tard, Delaunay (doc. 3) fait tourner des disques de couleurs pures autour de la tour Eiffel et d'un avion : Apollinaire nomme cet art orphisme. Man Ray va plus loin en 1922 (doc. 2) : il pose des objets sur un papier sensible, sans appareil photo, et obtient des formes blanches sur fond noir. Ces expériences se nourrissent l'une l'autre, comme au Bateau-Lavoir où Picasso peint Les Demoiselles d'Avignon en 1907 : Paris offre ateliers, Salons et marchands, comme Kahnweiler, qui rendent l'invention possible.",
      grille: ["J'ai cité chaque document utilisé (doc. n).", "J'ai regroupé les documents par idée.", "J'ai ajouté au moins une œuvre hors dossier.", "J'ai analysé (couleur, technique, composition) au lieu de décrire."],
    },
    {
      id: 'hida-m3', mat: 'hida', titre: "Problématiser un sujet sur la nature (question renouvelée en 2026)",
      formules: ["La nature est-elle un modèle pour l'artiste ?", "En quoi l'art transforme-t-il notre regard sur la nature ?", "Peut-on encore représenter la nature ?"],
      vu: ["Question limitative « Objets et enjeux de l'histoire des arts : Nature ? », renouvelée pour la rentrée 2026 (BOENJS n° 4 du 22 janvier 2026) : pas encore d'annale", "Le programme demande une étude dans le temps long, « de la fusion originelle aux ruptures technicistes en passant par les naturalismes », en incluant les cultures extra-occidentales"],
      pts: "Partie de l'introduction, mais elle décide de toute la copie",
      attendu: "Une problématique qui fait jouer le point d'interrogation du programme : la nature comme idée construite, vue comme thème, objet ou matériau, selon des cultures et des époques différentes.",
      etapes: ["Définir « nature » de deux façons au moins (le monde non humain ; ce qui n'est pas fait par l'homme).", "Repérer la tension du sujet (modèle ou matériau, imiter ou transformer).", "Chercher des œuvres de trois époques et d'au moins une culture extra-occidentale.", "Formuler la problématique en une question ouverte.", "Annoncer un plan qui avance, pas un catalogue."],
      mots: ["mimèsis", "naturalisme", "sublime", "land art", "Anthropocène"],
      pieges: ["Ne parler que du paysage peint.", "Oublier les arts non occidentaux, la musique ou l'architecture.", "Faire un plan chronologique sans idée directrice.", "Prendre la nature comme une évidence."],
      cas: "Sujet : « La nature est-elle un modèle pour l'artiste ? »",
      question: "Rédige l'introduction complète.",
      modele: "Vers 400 avant notre ère, selon Pline, le peintre Zeuxis peint des raisins si vrais que des oiseaux viennent les picorer. Depuis l'Antiquité, Aristote l'affirme : l'art imite la nature. Mais de quelle nature parle-t-on ? Le mot désigne le monde vivant, mais aussi ce que l'homme n'a pas fabriqué ; or l'anthropologue Philippe Descola rappelle que séparer l'homme de la nature est une idée occidentale récente. Un modèle, enfin, est ce que l'on copie, mais aussi ce dont on apprend une règle. La nature reste-t-elle un modèle que l'artiste imite, ou devient-elle peu à peu une matière et une cause avec lesquelles il travaille ? Nous verrons d'abord que la nature est longtemps un modèle à imiter et à idéaliser, de Dürer à Monet ; puis que des artistes en retiennent les lois plus que l'apparence, de la peinture shanshui à Mondrian et Frank Lloyd Wright ; enfin que, du land art à Ice Watch d'Olafur Eliasson, la nature devient un matériau et un sujet d'inquiétude.",
      grille: ["J'ai défini « nature » d'au moins deux façons.", "Ma problématique oppose deux idées.", "J'ai annoncé une œuvre extra-occidentale.", "Mon plan avance d'une idée à l'autre."],
    },
    {
      id: 'hida-m4', mat: 'hida', titre: "Développer un exemple d'œuvre dans une copie",
      formules: ["Toute dissertation ou composition : « en vous appuyant sur des œuvres précises »."],
      vu: ["Critères de la note de service du 11 septembre 2026 : repères culturels, géographiques et chronologiques, vocabulaire technique, jugement esthétique et critique", "Tous les sujets des sessions 2024 et 2026 cités plus haut"],
      pts: "Un exemple développé vaut beaucoup plus qu'une liste de titres",
      attendu: "Un paragraphe qui identifie l'œuvre (auteur, titre, date, technique, lieu), la décrit brièvement avec le vocabulaire juste, l'analyse et la relie clairement à l'idée de la partie.",
      etapes: ["Énoncer l'idée du paragraphe en une phrase.", "Identifier l'œuvre complètement.", "Décrire un ou deux éléments formels précis.", "Dire ce que ces éléments signifient.", "Relier au contexte (commande, époque, réception).", "Revenir à l'idée et à la problématique."],
      mots: ["composition", "élévation", "matériau", "commanditaire", "réception"],
      pieges: ["Citer un titre sans rien en dire.", "Décrire sans analyser.", "Oublier la date ou le lieu.", "Perdre le lien avec la question."],
      cas: "Idée à prouver : Viollet-le-Duc ne se contente pas de réparer, il invente.",
      question: "Rédige un paragraphe avec un exemple développé.",
      modele: "Viollet-le-Duc ne se contente pas de réparer : il complète les monuments selon l'idée qu'il se fait du Moyen Âge. La flèche de Notre-Dame de Paris, achevée en 1859, en est le meilleur exemple. La flèche médiévale avait été démontée à la fin du XVIIIe siècle ; au lieu de la copier, il en dessine une nouvelle, plus haute et plus ornée, en chêne couvert de plomb, entourée de statues d'apôtres en cuivre. Saint Thomas, patron des architectes, y porte même ses traits : l'architecte signe l'édifice. Cette création applique sa doctrine de l'unité de style, qu'il résume en 1866 : rétablir « un état complet qui peut n'avoir jamais existé ». Le paradoxe éclate en 2019 : on décide de reconstruire à l'identique une flèche qui était déjà une invention du XIXe siècle.",
      grille: ["J'ai identifié l'œuvre (auteur, titre, date, lieu).", "J'ai décrit au moins un élément formel précis.", "J'ai dit ce qu'il signifie.", "J'ai relié l'exemple à l'idée de départ."],
    },
    {
      id: 'hida-m5', mat: 'hida', titre: "Présenter son portfolio à l'oral (15 minutes sans notes)",
      formules: ["Le jury tire au sort l'un des deux portfolios : « Présentez-nous votre portfolio. »"],
      vu: ["Note de service du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026) : oral de 30 minutes sans préparation, exposé de 15 minutes au plus puis entretien, portfolio de 3 à 8 œuvres"],
      pts: "20 points, la moitié de la note de l'épreuve",
      attendu: "Un exposé sans notes qui annonce la problématique, justifie le choix, l'ordre et les liens des œuvres, les analyse avec précision et prend du recul sur ses propres choix, puis un entretien où l'on répond sans réciter.",
      etapes: ["Annoncer le titre du portfolio et la problématique.", "Expliquer en une phrase pourquoi ces œuvres et cet ordre.", "Présenter chaque œuvre : identification, analyse, lien avec la précédente.", "Garder environ deux minutes par œuvre.", "Conclure par une réponse et une limite de son propre choix.", "À l'entretien, accepter les objections et donner un autre exemple."],
      mots: ["problématique", "parcours", "mise en regard", "source critique", "recul"],
      pieges: ["Réciter un texte appris par cœur.", "Dépasser 15 minutes.", "Présenter les œuvres sans les relier.", "Oublier d'expliquer l'ordre choisi."],
      cas: "Portfolio « Ce que Paris doit aux étrangers », six œuvres : Picasso, Les Demoiselles d'Avignon (1907) ; Brancusi, Le Baiser (1907-1908) ; Chagall, Paris par la fenêtre (1913) ; Foujita, Nu couché à la toile de Jouy (1922) ; Joséphine Baker dans la Revue nègre (1925) ; Man Ray, Le Violon d'Ingres (1924).",
      question: "Rédige le début de l'exposé (problématique et justification de l'ordre).",
      modele: "Mon portfolio s'intitule « Ce que Paris doit aux étrangers ». Ma question est la suivante : Paris est-elle la capitale des arts parce qu'elle crée, ou parce qu'elle accueille ? J'ai choisi six œuvres d'artistes nés hors de France, entre 1907 et 1925. Je les ai rangées en deux temps. D'abord trois œuvres d'avant 1914, faites par des immigrés pauvres de Montmartre et de La Ruche : l'Espagnol Picasso, le Roumain Brancusi, le Russe Chagall, qui inventent à Paris un art qu'ils n'auraient pas pu faire chez eux. Ensuite trois œuvres des Années folles, où des étrangers deviennent des vedettes : le Japonais Foujita, l'Américaine Joséphine Baker, l'Américain Man Ray. Cet ordre montre un passage de la bohème à la célébrité, mais aussi une limite que je discuterai à la fin : le regard exotique porté sur certains de ces artistes.",
      grille: ["J'ai annoncé une problématique claire.", "J'ai justifié l'ordre des œuvres.", "J'ai relié chaque œuvre à la suivante.", "J'ai prévu une limite à mon propre choix."],
    },
  ],
  sujets: [
    {
      id: 'hida-s1', matiere: 'hida', titre: "Sujet d'entraînement 1 : trois sujets au choix (nature, Viollet-le-Duc, Paris)", duree: 210,
      enonce: `## Sujet d'entraînement 1 (inventé)

Durée : 3 heures 30. Sujet construit sur le modèle de la partie écrite de l'épreuve (note de service du 11 septembre 2026). Les œuvres citées sont réelles ; le sujet est inventé. Le candidat traite **au choix un sujet parmi les trois** et indique sur sa copie le sujet choisi. La maîtrise de la langue est prise en compte.

### Sujet 1 : composition sur documents (Nature ?)
**De modèle à matériau : comment les artistes ont-ils changé leur manière de travailler avec la nature ?**
Votre réponse s'appuiera sur tous les documents fournis ainsi que sur vos connaissances personnelles.
- Document 1 : Albrecht Dürer, La Grande Touffe d'herbes, 1503, aquarelle et gouache sur papier, environ 41 x 32 cm, Vienne, Albertina.
- Document 2 : Monet, Nymphéas, ensemble de grandes toiles installé en 1927 dans deux salles ovales, Paris, musée de l'Orangerie.
- Document 3 : Richard Long, A Line Made by Walking, 1967, photographie noir et blanc d'une ligne tracée en marchant dans l'herbe, Londres, Tate.
- Document 4 : Robert Smithson, Spiral Jetty, 1970, roches de basalte, terre et eau salée, spirale d'environ 450 m, Grand Lac Salé, Utah (États-Unis).
- Document 5 : Olafur Eliasson et Minik Rosing, Ice Watch, 2015, douze blocs de glace détachés de la calotte du Groenland, disposés en cercle place du Panthéon à Paris pendant la COP21 (photographie de l'installation).

### Sujet 2 : dissertation (Un artiste en son temps : Eugène Viollet-le-Duc)
« Restaurer un édifice, ce n'est pas l'entretenir, le réparer ou le refaire, c'est le rétablir dans un état complet qui peut n'avoir jamais existé à un moment donné. » (Viollet-le-Duc, Dictionnaire raisonné de l'architecture française, article « Restauration », 1866.)
**Vous discuterez cette affirmation en vous appuyant sur des œuvres précises.**

### Sujet 3 : dissertation (Arts, ville, politique et société : Paris, capitale des arts)
**Paris, dans la première moitié du XXe siècle : capitale des arts ou capitale des artistes venus d'ailleurs ?**`,
      corrige: `## Corrigé

Pistes pour chacun des trois sujets. Le candidat n'en traite qu'un ; la grille de notation est la même pour les trois.

### Sujet 1 : composition sur documents (Nature ?)
- **Problématique possible** : en cinq siècles, la nature passe-t-elle du statut de modèle qu'on imite à celui de matériau, puis de cause, avec lesquels on travaille ?
- **I. La nature, un modèle à observer et à imiter.** Dürer (doc. 1) peint des herbes ordinaires avec une précision de botaniste : la nature est un objet d'étude, au service de la mimèsis. Monet (doc. 2) observe son propre jardin de Giverny et en peint la lumière changeante ; on peut ajouter la perspective atmosphérique de Léonard de Vinci ou les peintres de Barbizon.
- **II. De l'image au lieu : l'œuvre se fait dans la nature.** Avec les Nymphéas installés en 1927, le visiteur est déjà entouré d'eau peinte (doc. 2) : l'œuvre devient un espace. Richard Long (doc. 3) ne représente plus le pré, il y laisse une trace par la marche, que seule la photographie garde. Smithson (doc. 4) façonne le paysage lui-même avec ses roches. Connaissances : The Lightning Field de Walter De Maria (1977), le jardin sec du Ryōan-ji, autre art du lieu, venu du Japon.
- **III. La nature, un matériau fragile et une cause.** Spiral Jetty disparaît et réapparaît selon le niveau du lac (doc. 4) : l'œuvre dépend du temps et du climat. Ice Watch (doc. 5) fait fondre de la vraie glace à Paris pour rendre visible le réchauffement. Connaissances : 7000 chênes de Beuys (1982), Penone et l'arbre qui continue de pousser (1968), la notion d'Anthropocène.
- **Croiser les documents** : docs 1 et 3 (une même herbe, l'une peinte, l'autre foulée) ; docs 4 et 5 (deux œuvres qui changent avec le climat) ; docs 3, 4 et 5 connus surtout par la photographie, paradoxe du land art.

### Sujet 2 : dissertation (Viollet-le-Duc)
- **Analyse** : la phrase oppose entretenir, réparer, refaire (gestes modestes) et rétablir un « état complet » qui peut être imaginaire. Discuter, c'est montrer ce qu'elle a de juste, ses limites, et ce qu'elle devient aujourd'hui.
- **Problématique possible** : restaurer, est-ce servir la vérité d'un monument ou l'idée que l'on s'en fait ?
- **I. Une doctrine qui sauve et explique les monuments.** Contexte : Révolution, ruines, Victor Hugo (1831), Mérimée et les monuments historiques. Vézelay (1840) consolidée par des arcs-boutants ; Notre-Dame avec Lassus (1844) ; une connaissance d'archéologue (Dictionnaire, 1854-1868).
- **II. Un « état complet » qui devient une invention.** Galerie des chimères et stryge, flèche de 1859, toits d'ardoise de Carcassonne, Pierrefonds reconstruit pour Napoléon III. Critiques : Ruskin (1849), la charte de Venise (1964) : « la restauration s'arrête là où commence l'hypothèse » ; la dérestauration de Saint-Sernin de Toulouse.
- **III. Une invention devenue patrimoine.** La flèche refaite à l'identique après l'incendie de 2019 (décision de 2020, réouverture en décembre 2024) : l'état de Viollet-le-Duc est désormais historique. Ouverture : sa pensée structurelle et le fer annoncent l'architecture moderne (Entretiens, Anatole de Baudot).

### Sujet 3 : dissertation (Paris, capitale des arts)
- **Analyse** : « capitale des arts » suppose que Paris produit et consacre l'art ; « artistes venus d'ailleurs » suggère que cette gloire vient surtout des étrangers. Le « ou » invite à discuter, pas à choisir trop vite.
- **Problématique possible** : la grandeur artistique de Paris vient-elle de la ville elle-même ou de ceux qu'elle attire ?
- **I. Une capitale qui attire le monde entier.** Picasso au Bateau-Lavoir (1904), Les Demoiselles d'Avignon (1907) ; La Ruche, Chagall et Soutine ; l'École de Paris, une communauté d'étrangers ; Marinetti publie le futurisme dans Le Figaro (1909) ; Joséphine Baker (1925).
- **II. Mais Paris offre ce qu'aucune autre ville n'offre.** Salons (fauves en 1905), marchands (Kahnweiler, Paul Rosenberg), critiques (Apollinaire), académies libres, cafés de Montparnasse, expositions de 1900, 1925 et 1937 ; une synthèse des arts : Ballets russes et Sacre du printemps (1913), Parade (1917), Art déco, Le Corbusier.
- **III. Quand les étrangers partent, la capitale vacille.** Occupation, spoliation, Rose Valland ; exil vers New York (Varian Fry, Mondrian, Breton) ; Harold Rosenberg (1940) et le « laboratoire » fermé ; Rauschenberg à Venise en 1964. Conclusion : Paris est une capitale parce qu'elle sait accueillir ; quand elle cesse de le pouvoir, la capitale se déplace.`,
      grille: [
        { c: "Repères culturels, géographiques et chronologiques exacts (dates, lieux, contextes)", pts: 4 },
        { c: "Problématique claire et raisonnement construit (introduction, plan, conclusion)", pts: 5 },
        { c: "Œuvres précises et variées analysées, ou documents tous utilisés et croisés avec des connaissances personnelles", pts: 5 },
        { c: "Vocabulaire technique propre à chaque art", pts: 2 },
        { c: "Jugement esthétique et critique, recul et nuance", pts: 2 },
        { c: "Maîtrise de la langue (orthographe, syntaxe, clarté)", pts: 2 },
      ],
    },
  ],
};
