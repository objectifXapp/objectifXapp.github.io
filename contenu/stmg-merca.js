// Mercatique (marketing) (enseignement spécifique de management, sciences de gestion et numérique) — terminale STMG. Sources : voir matiere.sources.
// Programme : arrêté du 19 juillet 2019 (BO spécial n° 8 du 25 juillet 2019, annexe 2), partie « Enseignement spécifique de mercatique (marketing) » :
// 3 thèmes (définition, distribution, communication de l'offre), 8 questions. Un chapitre par question, dans l'ordre officiel.
// Épreuve : la note de service du BO spécial n° 4 du 17 septembre 2026 (session 2027) fait porter l'écrit de management, sciences de gestion
// et numérique sur l'enseignement commun. L'enseignement spécifique n'a donc pas d'écrit à lui : il sert de support au projet présenté au grand oral
// (coefficient 12 en voie technologique à partir de 2027), et ses notions aident aux questions de mercatique de l'écrit commun.
export default {
  matiere: {
    id: 'stmg-merca',
    nom: 'Mercatique (marketing)',
    voie: 'stmg',
    epreuve: { type: 'oral', duree: 20, coef: 12, quand: 'fin juin - début juillet', note: 'Pas d\'écrit propre : l\'écrit de management (4 h, coefficient 16) porte sur l\'enseignement commun. La mercatique sert au grand oral : 20 minutes de préparation, puis 10 minutes d\'exposé sur une question liée au projet mené en mercatique et 10 minutes d\'échange avec le jury.' },
    sources: [
      'https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/14/1/spe262_annexe2_1159141.pdf',
      'https://www.education.gouv.fr/bo/19/Special8/MENE1921262A.htm',
      'https://www.education.gouv.fr/bo/2026/Special4/MENE2622652N',
      'https://www.education.gouv.fr/bo/2026/Special4/MENE2622701N',
      'https://eduscol.education.gouv.fr/5862/programmes-et-ressources-en-serie-stmg',
      'https://www.economie.gouv.fr/dgccrf (pratiques commerciales, influence commerciale)',
      'https://www.cnil.fr (règlement général sur la protection des données)',
    ],
    chapitres: [
      { id: 'stmg-merca-1', t: 'La personnalisation de l\'offre est-elle incontournable ?', theme: 'La définition de l\'offre' },
      { id: 'stmg-merca-2', t: 'Toute consommation crée-t-elle de l\'expérience ?', theme: 'La définition de l\'offre' },
      { id: 'stmg-merca-3', t: 'Le prix, entre raison et illusion ?', theme: 'La définition de l\'offre' },
      { id: 'stmg-merca-4', t: 'Distribution de l\'offre : peut-on se passer d\'intermédiaires ?', theme: 'La distribution de l\'offre' },
      { id: 'stmg-merca-5', t: 'Le consommateur dicte-t-il les choix de distribution ?', theme: 'La distribution de l\'offre' },
      { id: 'stmg-merca-6', t: 'Les technologies numériques, une autre manière de penser la distribution ?', theme: 'La distribution de l\'offre' },
      { id: 'stmg-merca-7', t: 'Communiquer : quelle visibilité et quels médias pour valoriser l\'offre ?', theme: 'La communication de l\'offre' },
      { id: 'stmg-merca-8', t: 'Comment enrichir la relation client grâce au numérique ?', theme: 'La communication de l\'offre' },
    ],
  },
  paquets: [
    // ---------------------------------------------------------------- 1.1 Personnalisation de l'offre
    {
      chapitre: 'stmg-merca-1',
      fiche: `## La personnalisation de l'offre est-elle incontournable ?

### Segmenter, cibler, se positionner
- La **segmentation** consiste à découper un marché en groupes de clients homogènes, appelés **segments**. Critères possibles : **sociodémographiques** (âge, revenu, profession), **géographiques** (région, ville ou campagne), **psychologiques** (style de vie, valeurs), **comportementaux** (fréquence d'achat, fidélité, usage).
- Le **ciblage** consiste à choisir le ou les segments que l'organisation veut conquérir : c'est la **cible**.
- Le **positionnement** est la place que l'organisation veut occuper dans l'esprit des consommateurs, par rapport aux concurrents (exemple : une marque de voitures positionnée sur la sécurité).
- Le **couple produit/marché** associe une offre à une cible précise.

### Quatre stratégies de ciblage
- **Marketing de masse** (ou indifférencié) : la même offre pour tout le marché. Coûts faibles, mais offre peu adaptée.
- **Marketing différencié** : une offre adaptée à chaque segment visé (un fabricant de shampoing propose une gamme pour cheveux secs, gras, enfants).
- **Marketing concentré** : on se spécialise sur un seul segment, souvent une **niche** (des chaussures pour très grandes pointures).
- **Marketing individualisé** (**one-to-one**) : une offre adaptée à chaque client (des baskets personnalisées en ligne, des recommandations selon l'historique d'achat).
- L'idée du programme : on ne cherche plus des clients pour ses produits, on conçoit des produits pour ses clients. Mais la personnalisation coûte cher et n'a pas de sens partout (le sel, l'essence).

### Les composantes de l'offre
- Un **produit** peut être un **bien** (matériel, stockable) ou un **service** (immatériel, produit et consommé en même temps, non stockable).
- L'**offre globale** réunit l'**offre principale** (ce que le client vient chercher) et l'**offre associée** (les services en plus : livraison, garantie, installation).
- Le **conditionnement** (**packaging**) protège, informe, attire l'œil et facilite l'usage.
- La **stylique** (**design**) donne au produit sa forme et son esthétique.
- La **qualité** : l'aptitude du produit à satisfaire les besoins du client.
- L'**image** : l'ensemble des représentations que le public associe au produit ou à la marque.

### La gamme et la marque
- La **gamme** est l'ensemble des produits d'une organisation. Sa **largeur** est le nombre de lignes (familles de produits) ; sa **profondeur** est le nombre de produits dans une ligne. Chaque produit peut avoir un rôle : produit d'appel, produit leader, produit d'avenir.
- La **marque** est un nom, un signe ou un logo qui identifie l'offre et la distingue des concurrents. Elle **garantit** une qualité, aide le client à se **repérer**, et lui permet d'exprimer sa **personnalité**.
- **Politique de marque** : une **marque produit** (un nom par produit), une **marque gamme** (un nom pour une famille de produits), une **marque ombrelle** (le même nom pour des produits très différents), une **marque de distributeur** (vendue sous le nom d'une enseigne).
- Une marque ancienne a une **dimension patrimoniale** : elle porte une histoire, une région, un savoir-faire.

### B2B et B2C
- **B2C** (business to consumer) : l'organisation vend à des particuliers.
- **B2B** (business to business) : elle vend à d'autres organisations. Les acheteurs sont des professionnels, les quantités plus grandes, l'offre souvent sur mesure et la relation plus longue.

### À retenir pour le bac
- Segmentation, ciblage, positionnement : trois étapes dans cet ordre.
- Masse, différencié, concentré, one-to-one : de l'offre unique à l'offre pour chaque client.
- Offre globale : offre principale et offre associée.
- Gamme : largeur et profondeur. Marques produit, gamme, ombrelle, de distributeur.
- Piège : la personnalisation n'est pas toujours rentable ni utile ; tout dépend du marché.`,
      cartes: [
        { q: "Qu'est-ce que la segmentation ?", r: "Découper un marché en groupes de clients homogènes (segments) selon des critères : âge, revenu, région, style de vie, comportement d'achat." },
        { q: "Qu'est-ce que le ciblage ?", r: "Choisir le ou les segments que l'organisation veut conquérir : c'est sa cible." },
        { q: "Qu'est-ce que le positionnement ?", r: "La place que l'organisation veut occuper dans l'esprit des consommateurs, par rapport à ses concurrents." },
        { q: "Marketing de masse ou marketing différencié ?", r: "Masse : la même offre pour tout le marché. Différencié : une offre adaptée à chaque segment visé." },
        { q: "Qu'est-ce que le marketing concentré ?", r: "Se spécialiser sur un seul segment, souvent une niche, par exemple des chaussures pour très grandes pointures." },
        { q: "Qu'est-ce que le marketing one-to-one ?", r: "Le marketing individualisé : une offre adaptée à chaque client, grâce aux données et aux outils numériques." },
        { q: "Bien ou service ?", r: "Le bien est matériel et stockable. Le service est immatériel, produit et consommé en même temps, et ne se stocke pas." },
        { q: "Qu'est-ce que l'offre globale ?", r: "L'offre principale (ce que le client vient chercher) et l'offre associée (livraison, garantie, installation, conseils)." },
        { q: "À quoi sert le conditionnement (packaging) ?", r: "À protéger le produit, informer le client, attirer l'œil en rayon et faciliter l'usage." },
        { q: "Largeur ou profondeur d'une gamme ?", r: "La largeur est le nombre de lignes (familles de produits). La profondeur est le nombre de produits dans une ligne." },
        { q: "Qu'est-ce qu'une marque ombrelle ?", r: "Un même nom de marque pour des produits très différents, qui profitent tous de la même image." },
        { q: "B2B ou B2C ?", r: "B2C : vente à des particuliers. B2B : vente à d'autres organisations, avec des acheteurs professionnels et souvent des offres sur mesure." },
      ],
      quiz: [
        { q: "Choisir les segments de clients que l'organisation veut conquérir, c'est :", choix: ["la segmentation", "le positionnement", "le ciblage", "la stylique"], bonne: 2, expl: "La segmentation découpe le marché ; le ciblage choisit les segments visés.", niv: 1 },
        { q: "Une marque de lessive propose la même offre à tous les consommateurs du pays. Elle pratique un marketing :", choix: ["de masse", "concentré", "différencié", "one-to-one"], bonne: 0, expl: "Une seule offre pour tout le marché : c'est le marketing de masse, ou indifférencié.", niv: 1 },
        { q: "Un site permet à chaque client de dessiner ses propres baskets avant de les commander. C'est du marketing :", choix: ["de masse", "concentré", "différencié", "one-to-one"], bonne: 3, expl: "L'offre est adaptée à chaque client, pas seulement à un segment.", niv: 2 },
        { q: "Une petite marque fabrique uniquement des vêtements pour personnes de très grande taille. Elle pratique un marketing :", choix: ["de masse", "concentré", "différencié", "individualisé"], bonne: 1, expl: "Elle se spécialise sur un seul segment, une niche : c'est le marketing concentré.", niv: 2 },
        { q: "La livraison et la garantie de trois ans proposées avec un lave-linge font partie :", choix: ["de l'offre principale", "de l'offre associée", "de la stylique", "du positionnement"], bonne: 1, expl: "L'offre principale est le lave-linge ; les services ajoutés forment l'offre associée.", niv: 2 },
        { q: "Une marque de yaourts propose 4 familles de produits et 12 parfums dans sa famille « fruits ». 12 mesure :", choix: ["la largeur de la gamme", "la longueur totale de la ligne", "le nombre de marques", "la profondeur de la ligne"], bonne: 3, expl: "La profondeur est le nombre de produits dans une ligne ; 4 familles, c'est la largeur.", niv: 2 },
        { q: "Quelle caractéristique distingue un service d'un bien ?", choix: ["Il ne se stocke jamais", "Il a une marque déposée", "Il coûte toujours moins cher", "Il est vendu en magasin"], bonne: 0, expl: "Un service est produit et consommé en même temps : une séance de coiffure ne se met pas en stock.", niv: 1 },
        { q: "Un même nom est utilisé pour des biscuits, des glaces et des boissons. C'est une marque :", choix: ["produit", "de distributeur", "ombrelle", "patrimoniale"], bonne: 2, expl: "La marque ombrelle couvre des produits très différents sous le même nom.", niv: 2 },
        { q: "Pourquoi la personnalisation de l'offre n'est-elle **pas** toujours incontournable ?", choix: ["Elle est interdite par la loi", "Les clients la refusent en général", "Elle n'existe que pour les achats sur internet", "Elle coûte cher et ne sert pas partout"], bonne: 3, expl: "Pour des produits banals comme le sel, personnaliser coûte plus que ce que cela rapporte.", niv: 3 },
        { q: "En quoi une offre B2B diffère-t-elle souvent d'une offre B2C ?", choix: ["Elle est souvent faite sur mesure", "Elle vise surtout des particuliers", "Elle n'utilise pas de marque", "Elle se vend en magasin, pas en ligne"], bonne: 0, expl: "En B2B, les acheteurs sont des professionnels, les quantités importantes et les offres souvent adaptées.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 1.2 Expérience de consommation
    {
      chapitre: 'stmg-merca-2',
      fiche: `## Toute consommation crée-t-elle de l'expérience ?

### Acte d'achat et expérience de consommation
- L'**acte d'achat**, c'est le moment où le client paie. L'**expérience de consommation**, c'est tout ce qu'il vit et ressent avant, pendant et après : l'accueil, l'ambiance, l'usage du produit, les émotions, les souvenirs.
- Une organisation peut chercher à rendre cette expérience **mémorable**, pour que le client revienne et en parle.
- Toutes les consommations ne deviennent pas des expériences : acheter un paquet de pâtes au supermarché reste souvent un geste banal.

### Valeur perçue et satisfaction
- La **valeur perçue** est ce que le client pense recevoir, comparé à ce qu'il pense donner.
- Ce qu'il reçoit : des **bénéfices** fonctionnels (le produit marche), émotionnels (le plaisir), sociaux (l'image qu'il donne aux autres).
- Ce qu'il donne : le **prix**, mais aussi le **temps**, l'**effort**, le **risque** (se tromper).
- La **satisfaction** compare ce que le client **attendait** et ce qu'il a **perçu**. Si le perçu dépasse l'attendu, il est satisfait, voire enchanté. S'il est en dessous, il est déçu.
- La satisfaction est la première condition de la **fidélité** et du **bouche-à-oreille** positif.

### Le marketing expérientiel
- Le **marketing expérientiel** cherche à faire vivre au client des émotions et des sensations, pour augmenter la valeur perçue.
- La **théâtralisation de l'offre** : mettre en scène les produits comme au théâtre (décor, éclairage, démonstrations en magasin, vendeurs qui animent).
- Le **marketing sensoriel** : jouer sur les cinq sens. La **vue** (couleurs, lumière), l'**ouïe** (musique douce ou rapide), l'**odorat** (une odeur de pain chaud près de la boulangerie), le **toucher** (produits en libre manipulation), le **goût** (dégustations).
- Le **marketing immersif** : plonger le client dans un univers grâce à la réalité virtuelle ou augmentée, à des espaces décorés, à des jeux.
- Ces techniques existent dans tous les types d'organisations : un musée, un parc de loisirs, une banque qui refait ses agences.

### De nouveaux modèles qui changent l'offre
- L'**économie à la demande** : le client obtient un service immédiatement, au moment où il en a besoin, souvent par une application (un chauffeur, un repas livré).
- L'**économie de la fonctionnalité** : on vend l'**usage** d'un bien plutôt que le bien lui-même. Exemple : un fabricant de pneus qui fait payer les transporteurs au kilomètre parcouru ; la location longue durée d'une voiture ; l'abonnement à de la musique au lieu de l'achat de disques.
- Ces modèles placent l'expérience et le service au centre de l'offre : le client paie pour un résultat.

### Les limites
- Une expérience trop mise en scène peut sembler artificielle ou manipulatrice.
- Elle coûte cher (décors, personnel, technologie) : il faut que la valeur perçue augmente assez pour justifier le prix.
- Certains clients veulent seulement acheter vite et pas cher.

### À retenir pour le bac
- Acte d'achat et expérience de consommation : ce n'est pas la même chose.
- Valeur perçue = bénéfices perçus comparés aux sacrifices perçus (prix, temps, effort, risque).
- Satisfaction = perçu comparé à l'attendu.
- Marketing expérientiel : théâtralisation, sensoriel, immersif.
- Économie de la fonctionnalité : vendre l'usage plutôt que le bien.`,
      cartes: [
        { q: "Acte d'achat ou expérience de consommation ?", r: "L'acte d'achat est le moment du paiement. L'expérience de consommation est tout ce que le client vit et ressent avant, pendant et après." },
        { q: "Qu'est-ce que la valeur perçue ?", r: "Ce que le client pense recevoir (bénéfices) comparé à ce qu'il pense donner (prix, temps, effort, risque)." },
        { q: "Quels bénéfices le client peut-il percevoir ?", r: "Des bénéfices fonctionnels (le produit marche), émotionnels (le plaisir) et sociaux (l'image qu'il donne aux autres)." },
        { q: "Que compare la satisfaction ?", r: "Ce que le client attendait et ce qu'il a perçu. Perçu supérieur à l'attendu : satisfaction ; inférieur : déception." },
        { q: "Pourquoi la satisfaction est-elle importante ?", r: "C'est la première condition de la fidélité et du bouche-à-oreille positif." },
        { q: "Qu'est-ce que le marketing expérientiel ?", r: "Faire vivre au client des émotions et des sensations au moment de l'achat ou de l'usage, pour augmenter la valeur perçue." },
        { q: "Qu'est-ce que la théâtralisation de l'offre ?", r: "Mettre en scène les produits comme au théâtre : décor, éclairage, démonstrations, animation par les vendeurs." },
        { q: "Qu'est-ce que le marketing sensoriel ?", r: "Jouer sur les cinq sens du client : couleurs, musique, odeurs, toucher, dégustations." },
        { q: "Qu'est-ce que le marketing immersif ?", r: "Plonger le client dans un univers, grâce à la réalité virtuelle ou augmentée, à des espaces décorés ou à des jeux." },
        { q: "Qu'est-ce que l'économie à la demande ?", r: "Un modèle où le client obtient un service tout de suite, au moment où il en a besoin, souvent par une application." },
        { q: "Qu'est-ce que l'économie de la fonctionnalité ?", r: "Vendre l'usage d'un bien plutôt que le bien lui-même : pneus payés au kilomètre, location longue durée, abonnement." },
        { q: "Quelles sont les limites du marketing expérientiel ?", r: "Il coûte cher, peut paraître artificiel ou manipulateur, et ne convient pas aux clients qui veulent acheter vite et pas cher." },
      ],
      quiz: [
        { q: "Une enseigne diffuse une odeur de vanille et une musique douce dans ses magasins. C'est du marketing :", choix: ["de masse", "sensoriel", "concentré", "direct"], bonne: 1, expl: "Elle joue sur l'odorat et l'ouïe : c'est le marketing sensoriel.", niv: 1 },
        { q: "La valeur perçue compare :", choix: ["les ventes et les coûts de l'entreprise", "le prix et la marge", "les bénéfices et les sacrifices perçus", "l'offre et la demande"], bonne: 2, expl: "Le client compare ce qu'il pense recevoir à ce qu'il pense donner : prix, temps, effort, risque.", niv: 1 },
        { q: "Un client attendait une livraison en 5 jours et la reçoit en 2. D'après la définition de la satisfaction, il est plutôt :", choix: ["satisfait", "déçu", "indifférent", "fidèle à vie"], bonne: 0, expl: "La satisfaction compare le perçu à l'attendu ; ici, le perçu est meilleur.", niv: 2 },
        { q: "Un transporteur paie son fabricant de pneus au kilomètre parcouru plutôt que d'acheter les pneus. C'est :", choix: ["l'économie à la demande", "le marketing immersif", "la théâtralisation de l'offre", "l'économie de la fonctionnalité"], bonne: 3, expl: "On vend l'usage du bien, pas le bien lui-même.", niv: 2 },
        { q: "Un magasin de sport installe un mur d'escalade où les clients essaient les chaussures. Il pratique surtout :", choix: ["la théâtralisation de l'offre", "le marketing de masse", "la segmentation", "la distribution exclusive"], bonne: 0, expl: "Le produit est mis en scène et essayé dans un décor : c'est la théâtralisation.", niv: 2 },
        { q: "Le temps passé à chercher un produit fait partie, pour le client :", choix: ["des bénéfices sociaux", "des bénéfices émotionnels", "des sacrifices perçus", "de l'offre associée"], bonne: 2, expl: "Le prix n'est pas le seul coût : le temps, l'effort et le risque comptent aussi.", niv: 2 },
        { q: "Un musée propose un casque de réalité virtuelle pour « entrer » dans un tableau. C'est du marketing :", choix: ["direct", "concentré", "de masse", "immersif"], bonne: 3, expl: "Le visiteur est plongé dans un univers : c'est le marketing immersif.", niv: 2 },
        { q: "Commander un chauffeur par application et l'avoir en cinq minutes relève de :", choix: ["l'économie de la fonctionnalité", "l'économie à la demande", "la distribution sélective", "la marque ombrelle"], bonne: 1, expl: "Le service est obtenu tout de suite, au moment du besoin.", niv: 1 },
        { q: "Pourquoi toute consommation ne crée-t-elle pas une expérience ?", choix: ["L'expérience est interdite dans les supermarchés", "Seuls les produits de luxe sont achetés avec plaisir", "Beaucoup d'achats restent banals et rapides", "Les clients n'ont pas d'émotion en magasin"], bonne: 2, expl: "Acheter un paquet de pâtes est souvent un geste routinier : tout achat n'est pas un moment vécu.", niv: 3 },
        { q: "Quelle condition rend un investissement dans le marketing expérientiel rentable ?", choix: ["Que la valeur perçue monte assez", "Que le magasin soit grand et bien situé", "Que le produit soit vendu sans marque", "Que les clients achètent vite"], bonne: 0, expl: "Décors et animations coûtent cher : ils doivent augmenter la valeur perçue et donc ce que le client accepte de payer.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 1.3 Prix
    {
      chapitre: 'stmg-merca-3',
      fiche: `## Le prix, entre raison et illusion ?

### Les bases du calcul
- Le **coût de revient** (ou coût d'achat pour un commerçant) : tout ce que le produit a coûté à l'organisation.
- La **marge** = prix de vente hors taxes moins coût. Exemple : acheté 40 €, vendu 50 € HT, la marge est de 10 €.
- Le **taux de marge** = marge ÷ coût × 100. Ici : 10 ÷ 40 × 100 = **25 %**.
- Le **taux de marque** = marge ÷ prix de vente HT × 100. Ici : 10 ÷ 50 × 100 = **20 %**.
- Ne pas confondre les deux : le taux de marge se calcule sur le coût, le taux de marque sur le prix de vente.

### Fixer un prix : des logiques rationnelles
- À partir des **coûts** : le prix doit couvrir les coûts et dégager une marge.
- À partir de la **demande** : le **prix cible** (ou prix psychologique) est le prix que la majorité des clients juge acceptable. On l'obtient par une enquête : « à partir de quel prix trouvez-vous ce produit trop cher ? pas assez cher pour être de bonne qualité ? ».
- À partir de la **concurrence** : se placer au-dessus, au même niveau ou en dessous des concurrents.
- La **sensibilité-prix** mesure la réaction des clients à une variation du prix. Sur un produit très sensible au prix, une hausse fait fortement baisser les ventes.
- Le prix doit rester **cohérent** avec le positionnement et le reste du marchéage : un produit de luxe vendu trop bas abîme son image.

### Des politiques tarifaires de plus en plus complexes
- **Prix unique** : le même prix pour tous (un livre neuf en France, dont le prix est fixé par l'éditeur).
- **Prix différencié** : le prix change selon le client (tarif étudiant), le moment (heures creuses), le lieu ou la quantité.
- **Gestion des capacités** (**yield management**) : faire varier le prix en temps réel selon la demande et les places restantes, pour remplir au maximum (billets de train et d'avion, chambres d'hôtel).
- **Prix forfaitaire** : un prix global pour un ensemble de services (un forfait téléphonique, un séjour tout compris).

### Les modèles de gratuité
- **Marché tripartite** : le service est gratuit pour l'utilisateur, car un **tiers** paie (les annonceurs pour un journal gratuit ou un réseau social).
- **Subventions croisées** : un produit gratuit ou peu cher est payé par un autre produit (une imprimante bon marché, des cartouches chères ; un téléphone « à 1 € » avec un forfait).
- **Freemium** : une version de base gratuite, une version complète payante (applications de musique, jeux).
- **Don** : l'utilisateur donne s'il le veut (une encyclopédie en ligne financée par les dons).
- **Vente de données** : le service est gratuit, mais les informations sur l'utilisateur sont exploitées ou revendues. « Si c'est gratuit, c'est vous le produit. »
- Les **services publics** peuvent aussi être gratuits ou à prix bas, car ils sont financés par l'impôt.

### Raison ou illusion ?
- Tous ces mécanismes rendent la **valeur réelle** d'un produit difficile à connaître : le client ne sait plus quel est le « vrai » prix.
- Les prix psychologiques (9,99 € plutôt que 10 €), les fausses promotions ou la gratuité apparente jouent sur l'**illusion**.

### À retenir pour le bac
- Taux de marge (sur le coût) et taux de marque (sur le prix de vente) : savoir les calculer.
- Trois logiques de prix : coûts, demande (prix cible), concurrence.
- Prix unique, différencié, yield management, forfait.
- Gratuité : marché tripartite, subventions croisées, freemium, don, données.
- Le prix doit être cohérent avec le positionnement.`,
      cartes: [
        { q: "Comment calcule-t-on la marge ?", r: "Marge = prix de vente hors taxes − coût. Acheté 40 €, vendu 50 € HT : marge de 10 €." },
        { q: "Comment calcule-t-on le taux de marge ?", r: "Marge ÷ coût × 100. Exemple : 10 ÷ 40 × 100 = 25 %." },
        { q: "Comment calcule-t-on le taux de marque ?", r: "Marge ÷ prix de vente HT × 100. Exemple : 10 ÷ 50 × 100 = 20 %." },
        { q: "Qu'est-ce que le prix cible (ou prix psychologique) ?", r: "Le prix que la majorité des clients juge acceptable, trouvé par une enquête (trop cher ? pas assez cher pour être de qualité ?)." },
        { q: "Qu'est-ce que la sensibilité-prix ?", r: "La réaction des clients à une variation de prix : si elle est forte, une hausse du prix fait beaucoup baisser les ventes." },
        { q: "Qu'est-ce qu'un prix différencié ?", r: "Un prix qui change selon le client (tarif étudiant), le moment, le lieu ou la quantité achetée." },
        { q: "Qu'est-ce que le yield management ?", r: "La gestion des capacités : faire varier le prix en temps réel selon la demande et les places restantes (trains, avions, hôtels)." },
        { q: "Qu'est-ce qu'un prix forfaitaire ?", r: "Un prix global pour un ensemble de services : un forfait téléphonique, un séjour tout compris." },
        { q: "Qu'est-ce qu'un marché tripartite ?", r: "Le service est gratuit pour l'utilisateur parce qu'un tiers paie, souvent les annonceurs." },
        { q: "Qu'est-ce qu'une subvention croisée ?", r: "Un produit gratuit ou peu cher payé par un autre : une imprimante bon marché et des cartouches chères." },
        { q: "Qu'est-ce que le freemium ?", r: "Une version de base gratuite et une version complète payante, comme dans beaucoup d'applications." },
        { q: "Pourquoi dit-on « si c'est gratuit, c'est vous le produit » ?", r: "Parce que certains services gratuits se financent en exploitant ou en revendant les données de leurs utilisateurs." },
      ],
      quiz: [
        { q: "Un commerçant achète un article 40 € et le vend 50 € HT. Quel est son taux de marge ?", choix: ["20 %", "25 %", "10 %", "15 %"], bonne: 1, expl: "Taux de marge = 10 ÷ 40 × 100 = 25 %. 20 % est le taux de marque, calculé sur le prix de vente.", niv: 2 },
        { q: "Même article : acheté 40 €, vendu 50 € HT. Quel est son taux de marque ?", choix: ["25 %", "80 %", "125 %", "20 %"], bonne: 3, expl: "Taux de marque = 10 ÷ 50 × 100 = 20 %.", niv: 2 },
        { q: "Le prix d'un billet de train augmente quand il reste peu de places. C'est :", choix: ["un prix unique", "un prix forfaitaire", "le yield management", "le freemium"], bonne: 2, expl: "Le prix varie selon la demande et les places restantes : c'est la gestion des capacités.", niv: 1 },
        { q: "Une application de musique gratuite avec publicité propose un abonnement sans publicité. C'est :", choix: ["le freemium", "le don", "le prix unique", "le yield management"], bonne: 0, expl: "Version de base gratuite, version complète payante : c'est le freemium.", niv: 1 },
        { q: "Un journal gratuit distribué dans le métro est financé par :", choix: ["ses lecteurs", "l'État", "un marché tripartite", "les dons des lecteurs"], bonne: 2, expl: "Les annonceurs, un tiers, paient pour toucher les lecteurs : c'est un marché tripartite.", niv: 2 },
        { q: "Une imprimante vendue à bas prix avec des cartouches très chères illustre :", choix: ["le prix forfaitaire", "une subvention croisée", "un prix cible", "le yield management"], bonne: 1, expl: "Les cartouches, chères, financent l'imprimante, vendue peu cher.", niv: 2 },
        { q: "Pour trouver le prix cible, une entreprise :", choix: ["ajoute 50 % à ses coûts", "copie le prix du leader", "fixe le prix le plus bas", "interroge des clients"], bonne: 3, expl: "Le prix cible vient de la demande : on demande aux clients à partir de quel prix c'est trop cher ou trop peu cher.", niv: 2 },
        { q: "Une marque de luxe baisse fortement ses prix. Quel risque principal court-elle ?", choix: ["Abîmer son image", "Vendre trop peu", "Payer plus de TVA", "Attirer trop de concurrents"], bonne: 0, expl: "Le prix doit rester cohérent avec le positionnement : un luxe à bas prix n'est plus perçu comme du luxe.", niv: 3 },
        { q: "Un tarif réduit pour les étudiants au cinéma est :", choix: ["un prix unique", "un modèle de gratuité", "un prix forfaitaire", "un prix différencié"], bonne: 3, expl: "Le prix change selon le type de client : c'est un prix différencié.", niv: 1 },
        { q: "Pourquoi le prix est-il parfois une « illusion » pour le consommateur ?", choix: ["Les prix sont en général trop élevés", "Gratuité et prix variables cachent la valeur", "La loi interdit d'afficher les prix réels en magasin", "Le prix ne dépend jamais des coûts"], bonne: 1, expl: "Promotions, prix variables et gratuité apparente rendent difficile de savoir ce que vaut vraiment le produit.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 2.1 Intermédiaires
    {
      chapitre: 'stmg-merca-4',
      fiche: `## Distribution de l'offre : peut-on se passer d'intermédiaires ?

### Les canaux de distribution
- Un **canal de distribution** est le chemin que suit un produit du producteur au consommateur, avec ses **intermédiaires** (grossistes, détaillants).
- **Canal direct (ultra-court)** : aucun intermédiaire (un viticulteur qui vend au domaine, une marque qui vend sur son propre site).
- **Canal court** : un seul intermédiaire, le détaillant (le producteur vend à un supermarché, qui vend au client).
- **Canal long** : au moins deux intermédiaires, souvent un grossiste et un détaillant.
- La **distribution directe** n'utilise aucun intermédiaire ; la **distribution indirecte** en utilise au moins un.

### Trois stratégies de couverture du marché
- **Distribution intensive** : être présent dans le plus grand nombre de points de vente possible (boissons, confiseries, piles).
- **Distribution sélective** : choisir quelques distributeurs selon des critères (image, conseil, emplacement), par exemple pour des parfums ou du matériel de sport haut de gamme.
- **Distribution exclusive** : un seul distributeur par zone, avec un contrat (concessionnaires automobiles, certaines marques de luxe).

### Intermédiation, désintermédiation, réintermédiation
- L'**intermédiation** est le rôle des intermédiaires : ils stockent, transportent, conseillent, regroupent l'offre de plusieurs producteurs et la rapprochent du client. Ils peuvent **ajouter de la valeur** à l'offre.
- La **désintermédiation** consiste à supprimer des intermédiaires : le producteur vend directement au client, souvent grâce au numérique.
- La **réintermédiation** est l'apparition de **nouveaux** intermédiaires, souvent numériques : comparateurs, plateformes de réservation, places de marché.

### Unités commerciales physiques et virtuelles
- Une **unité commerciale physique** est un lieu de vente réel : magasin, agence, marché.
- Une **unité commerciale virtuelle** est un lieu de vente en ligne : site marchand, application.
- Beaucoup d'organisations combinent les deux.

### Producteurs et distributeurs : coopération ou conflit ?
- Le producteur et le distributeur ont besoin l'un de l'autre, mais leurs objectifs diffèrent : le producteur veut que ses produits soient bien placés ; le distributeur veut des prix bas et des marges.
- Les grandes enseignes ont un fort **rapport de force** : elles décident du **référencement** (accepter ou non un produit en rayon) et négocient durement les prix.
- La **réponse optimale au client** (**efficient consumer response**, ECR) est une démarche de **coopération** : producteur et distributeur partagent des informations pour mieux réapprovisionner les rayons, réduire les stocks et répondre aux attentes des clients.
- Les **contrats de distribution** fixent les règles : la **franchise** (le franchisé utilise la marque et le savoir-faire du franchiseur contre une redevance), la **concession** (exclusivité sur une zone).

### Peut-on se passer d'intermédiaires ?
- Avantages de la vente directe : meilleure **marge**, **contrôle** de l'image et du prix, **contact** avec le client et ses données.
- Inconvénients : il faut gérer soi-même le stockage, la livraison, le service client et se faire connaître ; on touche moins de clients.
- Le choix dépend des **objectifs** et des **ressources** du producteur.

### À retenir pour le bac
- Canal direct, court, long ; distribution directe ou indirecte.
- Intensive, sélective, exclusive.
- Désintermédiation (on supprime), réintermédiation (de nouveaux intermédiaires apparaissent).
- Rapport de force et coopération (ECR) entre producteurs et distributeurs.
- Piège : les intermédiaires ne sont pas seulement un coût ; ils apportent aussi de la valeur.`,
      cartes: [
        { q: "Qu'est-ce qu'un canal de distribution ?", r: "Le chemin que suit un produit du producteur au consommateur, avec ses éventuels intermédiaires." },
        { q: "Canal direct, court ou long ?", r: "Direct : aucun intermédiaire. Court : un seul (le détaillant). Long : au moins deux (grossiste et détaillant)." },
        { q: "Qu'est-ce que la distribution intensive ?", r: "Être présent dans le plus grand nombre de points de vente possible, par exemple pour des boissons ou des confiseries." },
        { q: "Qu'est-ce que la distribution sélective ?", r: "Choisir quelques distributeurs selon des critères (image, conseil, emplacement), par exemple pour des parfums." },
        { q: "Qu'est-ce que la distribution exclusive ?", r: "Un seul distributeur par zone, lié par contrat, comme un concessionnaire automobile." },
        { q: "Qu'est-ce que la désintermédiation ?", r: "La suppression d'intermédiaires : le producteur vend directement au client, souvent grâce au numérique." },
        { q: "Qu'est-ce que la réintermédiation ?", r: "L'apparition de nouveaux intermédiaires, souvent numériques : comparateurs, plateformes de réservation, places de marché." },
        { q: "Que peuvent apporter les intermédiaires ?", r: "Ils stockent, transportent, conseillent, regroupent l'offre de plusieurs producteurs : ils ajoutent de la valeur à l'offre." },
        { q: "Qu'est-ce que le référencement ?", r: "La décision d'un distributeur d'accepter un produit dans ses rayons : elle donne un grand pouvoir aux grandes enseignes." },
        { q: "Qu'est-ce que la réponse optimale au client (ECR) ?", r: "Une coopération entre producteur et distributeur, qui partagent des informations pour mieux réapprovisionner et réduire les stocks." },
        { q: "Qu'est-ce qu'une franchise ?", r: "Un contrat : le franchisé utilise la marque et le savoir-faire du franchiseur, contre une redevance." },
        { q: "Quels sont les avantages de la vente directe ?", r: "Une meilleure marge, le contrôle de l'image et du prix, un contact direct avec le client et ses données." },
      ],
      quiz: [
        { q: "Un apiculteur vend son miel sur un marché, sans intermédiaire. C'est un canal :", choix: ["long", "court", "sélectif", "direct"], bonne: 3, expl: "Aucun intermédiaire entre le producteur et le client : c'est un canal direct (ultra-court).", niv: 1 },
        { q: "Un fabricant vend à un supermarché, qui revend au client. C'est un canal :", choix: ["court", "direct", "long", "exclusif"], bonne: 0, expl: "Un seul intermédiaire, le détaillant : c'est un canal court.", niv: 1 },
        { q: "Une marque de piles veut être vendue partout : supermarchés, stations-service, bureaux de tabac. Elle choisit une distribution :", choix: ["exclusive", "intensive", "sélective", "directe"], bonne: 1, expl: "Être présent dans le maximum de points de vente, c'est la distribution intensive.", niv: 2 },
        { q: "Une marque de cosmétiques haut de gamme n'accepte que des parfumeries qui offrent du conseil. C'est une distribution :", choix: ["intensive", "directe", "exclusive", "sélective"], bonne: 3, expl: "Elle choisit ses distributeurs selon des critères : c'est la distribution sélective.", niv: 2 },
        { q: "Un fabricant de matelas arrête de passer par les magasins et vend sur son seul site. C'est :", choix: ["la désintermédiation", "la réintermédiation", "le référencement", "la franchise"], bonne: 0, expl: "Il supprime les intermédiaires : c'est la désintermédiation.", niv: 2 },
        { q: "Les hôtels vendent de plus en plus leurs chambres par des plateformes de réservation en ligne. C'est :", choix: ["la distribution directe", "la désintermédiation", "la réintermédiation", "la distribution exclusive"], bonne: 2, expl: "De nouveaux intermédiaires numériques apparaissent entre l'hôtel et le client.", niv: 2 },
        { q: "Un distributeur et un producteur partagent les données de vente pour réapprovisionner les rayons sans rupture. C'est :", choix: ["un conflit sur le référencement en rayon", "la réponse optimale au client (ECR)", "une distribution intensive", "une désintermédiation"], bonne: 1, expl: "L'ECR est une coopération entre producteur et distributeur au service du client.", niv: 2 },
        { q: "Pourquoi les grandes enseignes ont-elles un fort pouvoir sur les producteurs ?", choix: ["Elles fabriquent elles-mêmes leurs produits", "Elles décident du référencement en rayon", "La loi leur donne un droit de veto", "Elles n'ont aucun concurrent"], bonne: 1, expl: "Être refusé en rayon prive le producteur d'une grande partie de ses clients.", niv: 3 },
        { q: "Quel est l'inconvénient principal de la vente directe pour un producteur ?", choix: ["Il perd tout contact direct avec ses clients", "Il ne peut plus fixer son prix", "Il gagne une marge plus faible qu'avant", "Il gère seul stock, livraison et service"], bonne: 3, expl: "Sans intermédiaire, les tâches de distribution reposent entièrement sur lui.", niv: 3 },
        { q: "Une enseigne de restauration rapide se développe grâce à des commerçants indépendants qui utilisent sa marque contre une redevance. C'est :", choix: ["la franchise", "la concession", "le marketing direct", "la distribution intensive"], bonne: 0, expl: "Le franchisé utilise la marque et le savoir-faire du franchiseur contre une redevance.", niv: 1 },
      ],
    },
    // ---------------------------------------------------------------- 2.2 Le consommateur et la distribution
    {
      chapitre: 'stmg-merca-5',
      fiche: `## Le consommateur dicte-t-il les choix de distribution ?

### Un parcours d'achat devenu complexe
- Le **parcours client** (ou parcours d'achat) regroupe toutes les étapes par lesquelles passe le client : découvrir le produit, s'informer, comparer, acheter, se faire livrer, utiliser, donner son avis.
- Aujourd'hui, ce parcours mélange le **physique** (magasin) et le **numérique** (site, application, réseaux sociaux). Le consommateur est plus **informé**, plus **exigeant** et plus **volatil** : il change facilement d'enseigne.

### ROPO et showrooming
- Le **ROPO** (research online, purchase offline) : le client s'informe **en ligne**, puis achète **en magasin**. Exemple : comparer des téléviseurs sur internet, puis aller les voir et les acheter en boutique.
- L'inverse s'appelle le **showrooming** : le client essaie en magasin, puis achète en ligne, souvent moins cher.
- Ces comportements obligent les enseignes à être présentes et cohérentes sur tous les canaux.

### Multicanal, cross-canal, omnicanal
- **Multicanal** : l'organisation vend par plusieurs canaux (magasin, site, téléphone), mais ils fonctionnent séparément.
- **Cross-canal** : les canaux sont **reliés** et le client passe de l'un à l'autre pendant le même achat (commander en ligne et retirer en magasin, retourner en boutique un produit acheté sur le site).
- **Omnicanal** : tous les canaux forment un ensemble unique ; le client retrouve partout les mêmes prix, le même compte, le même historique, sans rupture. L'**omnicanalité** met le client au centre.

### Des réactions contre la distribution traditionnelle
- Certaines pratiques de la grande distribution (prix d'achat très bas imposés aux producteurs, produits venus de loin, gaspillage) ont provoqué des réactions de consommateurs et de producteurs.
- Les **mouvements de consommateurs** (associations de défense, boycotts, pétitions, avis en ligne) pèsent sur les choix des distributeurs depuis plusieurs décennies.

### De nouvelles formes de distribution
- Le **circuit court** : vente directe du producteur au consommateur, ou avec **un seul intermédiaire** au plus. Exemples : vente à la ferme, marchés de producteurs, **supermarchés paysans** tenus par des agriculteurs.
- L'**AMAP** (association pour le maintien d'une agriculture paysanne) : des consommateurs s'engagent à acheter à l'avance, pour une saison, un panier régulier à un agriculteur local. Le producteur a un revenu assuré ; le client sait d'où vient ce qu'il mange.
- La **distribution collaborative** : les particuliers vendent, louent ou échangent entre eux, souvent par des plateformes (vente d'occasion entre particuliers, location de matériel entre voisins).
- Ces formes répondent à des attentes nouvelles : **local**, **éthique**, **économie**, **lien social**, **écologie**.

### Alors, le consommateur décide-t-il ?
- Oui en partie : ses habitudes (achat sur téléphone, retrait rapide, recherche de produits locaux) obligent les distributeurs à changer.
- Mais les organisations **orientent** aussi ses choix : emplacement des magasins, applications, promotions, programmes de fidélité.
- Et tous les consommateurs n'ont pas les mêmes moyens : le circuit court est souvent plus cher, et tout le monde n'a pas accès au numérique.

### À retenir pour le bac
- ROPO : s'informer en ligne, acheter en magasin. Showrooming : l'inverse.
- Multicanal (canaux séparés), cross-canal (canaux reliés), omnicanal (un ensemble sans rupture).
- Circuit court : un intermédiaire au plus. AMAP, supermarchés paysans.
- Distribution collaborative : entre particuliers.
- Piège : le consommateur influence la distribution, mais il ne la dicte pas seul.`,
      cartes: [
        { q: "Qu'est-ce que le parcours client ?", r: "Toutes les étapes par lesquelles passe le client : découvrir, s'informer, comparer, acheter, se faire livrer, utiliser, donner son avis." },
        { q: "Que signifie ROPO ?", r: "Research online, purchase offline : le client s'informe en ligne, puis achète en magasin." },
        { q: "Qu'est-ce que le showrooming ?", r: "L'inverse du ROPO : le client essaie le produit en magasin, puis l'achète en ligne, souvent moins cher." },
        { q: "Qu'est-ce que la distribution multicanal ?", r: "L'organisation vend par plusieurs canaux (magasin, site, téléphone), mais ces canaux fonctionnent séparément." },
        { q: "Qu'est-ce que la distribution cross-canal ?", r: "Les canaux sont reliés : le client passe de l'un à l'autre pendant le même achat (commander en ligne, retirer en magasin)." },
        { q: "Qu'est-ce que l'omnicanalité ?", r: "Tous les canaux forment un ensemble unique : mêmes prix, même compte, même historique partout, sans rupture pour le client." },
        { q: "Pourquoi le consommateur est-il dit plus volatil ?", r: "Informé et connecté, il compare facilement et change vite d'enseigne." },
        { q: "Qu'est-ce qu'un circuit court ?", r: "Une vente directe du producteur au consommateur, ou avec un seul intermédiaire au plus." },
        { q: "Qu'est-ce qu'une AMAP ?", r: "Une association pour le maintien d'une agriculture paysanne : les consommateurs achètent à l'avance, pour une saison, un panier régulier à un agriculteur local." },
        { q: "Qu'est-ce que la distribution collaborative ?", r: "Les particuliers vendent, louent ou échangent entre eux, souvent par des plateformes en ligne." },
        { q: "Quelles attentes expliquent le succès des nouvelles formes de distribution ?", r: "Le local, l'éthique, les économies, le lien social et l'écologie." },
        { q: "Pourquoi le consommateur ne dicte-t-il pas seul la distribution ?", r: "Les organisations orientent aussi ses choix (emplacements, applications, promotions), et tous les consommateurs n'ont pas les mêmes moyens." },
      ],
      quiz: [
        { q: "Sarah compare des aspirateurs sur internet, puis va en acheter un en magasin. C'est :", choix: ["le showrooming", "l'omnicanalité", "le ROPO", "le circuit court"], bonne: 2, expl: "Recherche en ligne, achat en magasin : c'est le ROPO.", niv: 1 },
        { q: "Un client essaie des chaussures en boutique puis les commande moins cher sur un site. C'est :", choix: ["le ROPO", "le showrooming", "la distribution collaborative", "le cross-canal"], bonne: 1, expl: "Essayer en magasin, acheter en ligne : c'est le showrooming, l'inverse du ROPO.", niv: 1 },
        { q: "Une enseigne a un site et des magasins, mais un produit acheté en ligne ne peut pas être rendu en magasin. Elle est :", choix: ["omnicanale", "cross-canal", "en circuit court", "multicanale"], bonne: 3, expl: "Plusieurs canaux qui fonctionnent séparément : c'est la distribution multicanal.", niv: 2 },
        { q: "Commander sur le site et retirer le produit au magasin le jour même relève :", choix: ["du cross-canal", "du multicanal", "du showrooming", "de la distribution collaborative"], bonne: 0, expl: "Le client passe d'un canal à l'autre dans le même achat : les canaux sont reliés.", niv: 2 },
        { q: "Combien d'intermédiaires au plus un circuit court peut-il avoir ?", choix: ["Deux", "Trois", "Un seul", "Quatre"], bonne: 2, expl: "Un circuit court est une vente directe ou avec un seul intermédiaire au plus.", niv: 1 },
        { q: "Des familles paient d'avance un agriculteur pour recevoir chaque semaine un panier de légumes de saison. C'est :", choix: ["un supermarché paysan", "une place de marché", "le ROPO", "une AMAP"], bonne: 3, expl: "L'engagement à l'avance auprès d'un agriculteur local définit l'AMAP.", niv: 2 },
        { q: "Un client retrouve le même panier, les mêmes prix et ses points de fidélité sur l'appli, le site et en magasin. C'est :", choix: ["le multicanal", "l'omnicanalité", "le showrooming", "la désintermédiation"], bonne: 1, expl: "Tous les canaux forment un ensemble unique, sans rupture : c'est l'omnicanalité.", niv: 2 },
        { q: "Deux voisins se louent une perceuse grâce à une application. C'est de la distribution :", choix: ["collaborative", "sélective", "intensive", "exclusive"], bonne: 0, expl: "L'échange se fait entre particuliers : c'est la distribution collaborative.", niv: 2 },
        { q: "Pourquoi le circuit court ne convient-il **pas** à tous les consommateurs ?", choix: ["Il est interdit en ville", "Il n'existe que pour la viande", "Il est souvent plus cher et moins accessible", "Il passe par trois intermédiaires au moins"], bonne: 2, expl: "Prix plus élevés, horaires et lieux limités : tous n'y ont pas accès.", niv: 3 },
        { q: "Quelle phrase répond le mieux à « Le consommateur dicte-t-il les choix de distribution ? »", choix: ["Oui, il décide de tout, du lieu au prix", "Non, il ne compte pas", "Seuls les producteurs décident", "Il les influence, mais sans décider seul"], bonne: 3, expl: "Ses habitudes poussent les distributeurs à changer, mais ceux-ci guident aussi ses achats.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 2.3 Technologies numériques et distribution
    {
      chapitre: 'stmg-merca-6',
      fiche: `## Les technologies numériques, une autre manière de penser la distribution ?

### Le commerce en ligne
- L'**e-commerce** (commerce électronique) : vendre et acheter sur internet, sur un site marchand.
- Le **m-commerce** (commerce mobile) : acheter avec son **smartphone**, sur un site ou une application. C'est aujourd'hui une grande part des achats en ligne.
- Le numérique permet aux organisations de trouver de **nouveaux espaces de croissance** : vendre partout, à toute heure, sans magasin.
- Il a facilité la **désintermédiation** (le producteur vend en direct) et la **réintermédiation** (de nouveaux acteurs, comme les plateformes, se placent entre vendeurs et clients). Toute la **chaîne de valeur** en est modifiée.

### Les places de marché
- Une **place de marché** (**marketplace**) est un site qui permet à de nombreux vendeurs indépendants de vendre leurs produits à ses clients. Le site prend une **commission** sur chaque vente.
- Pour le vendeur : accès à beaucoup de clients et à la logistique de la plateforme. Mais il dépend d'elle et lui laisse une partie de sa marge.
- Pour la plateforme : une offre immense sans avoir à acheter de stock.

### La digitalisation des unités commerciales
- **Digitaliser** un point de vente, c'est y introduire des outils numériques pour améliorer l'expérience et l'efficacité.
- **Bornes interactives** et tablettes pour consulter tout le catalogue, commander ce qui n'est pas en rayon.
- **Étiquettes électroniques** dont le prix change à distance.
- **Caisses automatiques** et paiement sans contact ou par téléphone.
- **Réalité augmentée** (essayer virtuellement des lunettes ou voir un meuble dans son salon avec son téléphone) et **réalité virtuelle**.
- **Magasins autonomes** : des supérettes sans caissier, où le client entre et paie grâce à une application.

### De nouveaux services entre physique et numérique
- Le **click and collect** : commander en ligne, retirer en magasin.
- Le **drive** : commander en ligne et récupérer ses courses en voiture, sans entrer dans le magasin.
- La **livraison rapide**, les consignes automatiques, les points relais.
- Ces services s'appuient sur une **chaîne logistique** très organisée (entrepôts, préparation des commandes, transport) et parfois sur des **objets connectés** (stocks suivis en temps réel).

### Alliances et partenariats
- Les grands acteurs de la distribution nouent des **alliances** : regroupements à l'achat entre enseignes, partenariats entre une enseigne et une plateforme en ligne, ou entre un distributeur et un spécialiste de la livraison.
- Objectif : peser davantage face aux fournisseurs et partager les coûts du numérique.

### Une autre manière de penser ?
- Oui : le magasin n'est plus seulement un lieu de vente, il devient un lieu d'**expérience**, de **conseil** et de **retrait**.
- Mais le magasin physique reste important : beaucoup de clients veulent voir, toucher, être conseillés. Le numérique complète plus qu'il ne remplace.
- Limites : coûts élevés, dépendance aux plateformes, impact écologique de la livraison, exclusion des personnes peu à l'aise avec le numérique.

### À retenir pour le bac
- E-commerce (internet) et m-commerce (smartphone).
- Place de marché : des vendeurs tiers, une commission pour la plateforme.
- Digitalisation : bornes, étiquettes électroniques, caisses automatiques, réalité augmentée, magasins autonomes.
- Click and collect, drive : des services entre physique et numérique.
- Piège : le numérique ne fait pas disparaître le magasin, il le transforme.`,
      cartes: [
        { q: "E-commerce ou m-commerce ?", r: "E-commerce : acheter sur internet. M-commerce : acheter avec son smartphone, sur un site ou une application." },
        { q: "Qu'est-ce qu'une place de marché (marketplace) ?", r: "Un site où de nombreux vendeurs indépendants vendent à ses clients ; la plateforme prend une commission sur chaque vente." },
        { q: "Quel est l'intérêt d'une place de marché pour un petit vendeur ?", r: "Toucher beaucoup de clients et profiter de la logistique de la plateforme, en échange d'une commission et d'une dépendance." },
        { q: "Qu'est-ce que digitaliser une unité commerciale ?", r: "Introduire des outils numériques dans un point de vente pour améliorer l'expérience du client et l'efficacité." },
        { q: "Cite trois outils de digitalisation d'un magasin.", r: "Bornes interactives, étiquettes électroniques, caisses automatiques (aussi : réalité augmentée, paiement mobile)." },
        { q: "Qu'est-ce qu'un magasin autonome ?", r: "Une supérette sans caissier, où le client entre et paie grâce à une application." },
        { q: "À quoi sert la réalité augmentée dans la distribution ?", r: "À essayer virtuellement un produit : des lunettes sur son visage, un meuble dans son salon, avec son téléphone." },
        { q: "Click and collect ou drive ?", r: "Click and collect : commander en ligne et retirer en magasin. Drive : récupérer ses courses en voiture, sans entrer dans le magasin." },
        { q: "Pourquoi la chaîne logistique est-elle essentielle au commerce numérique ?", r: "Sans entrepôts, préparation des commandes et transport bien organisés, impossible de livrer vite et de tenir les promesses faites en ligne." },
        { q: "Pourquoi les distributeurs nouent-ils des alliances ?", r: "Pour peser davantage face aux fournisseurs et partager les coûts du numérique et de la livraison." },
        { q: "Que devient le magasin physique avec le numérique ?", r: "Un lieu d'expérience, de conseil et de retrait des commandes, et pas seulement un lieu de vente." },
        { q: "Quelles sont les limites de la distribution numérique ?", r: "Des coûts élevés, la dépendance aux plateformes, l'impact écologique des livraisons et l'exclusion de personnes peu à l'aise avec le numérique." },
      ],
      quiz: [
        { q: "Acheter un billet de concert avec l'application de son téléphone, c'est du :", choix: ["drive", "m-commerce", "click and collect", "showrooming"], bonne: 1, expl: "L'achat se fait sur smartphone : c'est le m-commerce.", niv: 1 },
        { q: "Un site permet à des milliers de vendeurs indépendants de vendre leurs produits et prend une commission. C'est :", choix: ["une place de marché", "un magasin autonome", "un drive", "une AMAP"], bonne: 0, expl: "La place de marché réunit des vendeurs tiers et se rémunère par commission.", niv: 1 },
        { q: "Une enseigne change ses prix dans tous ses rayons en un clic depuis le siège. Elle utilise :", choix: ["des bornes interactives", "la réalité augmentée", "des étiquettes électroniques", "des caisses automatiques"], bonne: 2, expl: "Les étiquettes électroniques permettent de modifier les prix à distance.", niv: 2 },
        { q: "Un client commande ses courses le matin et les charge dans son coffre le soir sans entrer dans le magasin. C'est :", choix: ["le click and collect", "le e-commerce pur", "le ROPO", "le drive"], bonne: 3, expl: "Récupérer ses courses en voiture, sans entrer : c'est le drive.", niv: 2 },
        { q: "Une application permet de voir un canapé « posé » dans son salon avant de l'acheter. C'est :", choix: ["la réalité virtuelle", "la réalité augmentée", "le marketing de masse", "une place de marché"], bonne: 1, expl: "L'image du produit s'ajoute à la vue réelle : c'est la réalité augmentée.", niv: 2 },
        { q: "Pour un petit vendeur, quel est le principal risque d'une place de marché ?", choix: ["Il perd ses clients habituels", "Il ne peut vendre que des livres", "Il doit acheter tout le stock de la plateforme", "Il dépend d'elle et lui cède une part de marge"], bonne: 3, expl: "Il gagne en visibilité mais paie une commission et perd une partie de son autonomie.", niv: 3 },
        { q: "Pourquoi le commerce numérique dépend-il fortement de la chaîne logistique ?", choix: ["Il faut livrer vite tous les produits commandés", "Les sites n'ont pas besoin de stock", "La logistique remplace la publicité", "Les clients viennent chercher le stock à l'usine"], bonne: 0, expl: "Promettre une livraison rapide oblige à bien gérer entrepôts, préparation et transport.", niv: 2 },
        { q: "Une supérette sans caissier, où l'on paie avec une application, est :", choix: ["un drive", "un point relais", "un magasin autonome", "une place de marché"], bonne: 2, expl: "Le client entre, se sert et paie seul grâce à l'application.", niv: 1 },
        { q: "Quelle affirmation est la plus juste sur le magasin physique ?", choix: ["Il va disparaître très vite, remplacé par les sites", "Il devient un lieu d'expérience et de retrait", "Il a perdu la plupart de ses clients", "Il refuse les outils numériques"], bonne: 1, expl: "Le numérique complète le magasin plus qu'il ne le remplace : beaucoup de clients veulent voir et être conseillés.", niv: 3 },
        { q: "Quelle limite environnementale pose le commerce en ligne ?", choix: ["La pollution des livraisons rapides", "La fin de la publicité", "La hausse des loyers des magasins en ville", "La disparition des marques"], bonne: 0, expl: "Livrer chaque commande rapidement, souvent à domicile, multiplie les trajets et les emballages.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 3.1 Communication commerciale
    {
      chapitre: 'stmg-merca-7',
      fiche: `## Communiquer : quelle visibilité et quels médias pour valoriser l'offre ?

### Objet, objectifs, cibles
- L'**objet** de la communication est ce dont on parle : l'**organisation** (communication institutionnelle), la **marque**, le **produit**, un **événement**.
- Les **objectifs** suivent trois étapes :
- **cognitif** : faire **connaître** (lancer un produit, informer) ;
- **affectif** : faire **aimer** (améliorer l'image, créer de l'attachement) ;
- **conatif** : faire **agir** (acheter, s'inscrire, venir en magasin).
- La **cible** de communication est le public visé. Le **cœur de cible** est la partie la plus importante ; la **cible secondaire** comprend les **prescripteurs** (qui conseillent : médecins, influenceurs) et les **leaders d'opinion**.

### La publicité
- La **publicité** est une communication payante diffusée dans les **médias**.
- Un **média** est une catégorie de moyens de diffusion : télévision, radio, presse, affichage, cinéma, internet.
- Un **support** est un titre ou une chaîne précise à l'intérieur d'un média : une chaîne de télévision, un journal, un site.
- La **copie stratégie** (copy strategy) est le document qui guide la création d'une publicité : la **promesse** (le bénéfice pour le client), la **preuve** (ce qui la rend crédible), le **bénéfice consommateur**, le **ton** (humour, sérieux, émotion).

### Les autres moyens de communication (hors médias)
- Le **marketing direct** : un message personnel envoyé à chaque client (courrier, courriel, SMS, notification), avec une réponse mesurable.
- La **promotion des ventes** : un avantage temporaire pour faire acheter tout de suite (réduction, lot, échantillon, cadeau, jeu-concours).
- Le **parrainage** (sponsoring) : financer un événement ou une équipe, en échange d'une visibilité commerciale (le logo sur un maillot).
- Le **mécénat** : soutenir une cause d'intérêt général (culture, santé, environnement) **sans contrepartie commerciale directe** ; il améliore surtout l'image.
- L'**événementiel** : organiser un événement (salon, lancement, concert) pour créer un moment autour de la marque.

### Le modèle POEM
- Le numérique a bouleversé les plans de communication. Le modèle **POEM** classe la visibilité en trois types :
- **Paid media** : la visibilité **achetée** (publicités en ligne, spots, bannières, publications sponsorisées).
- **Owned media** : la visibilité **détenue** par l'organisation (son site, son application, ses comptes sur les réseaux sociaux, sa lettre d'information).
- **Earned media** : la visibilité **gagnée** gratuitement grâce à son influence (articles de presse, partages, avis, bouche-à-oreille).
- Une bonne stratégie combine les trois : le paid attire, l'owned informe et fidélise, l'earned rend crédible.

### Choisir et évaluer
- Le choix des moyens dépend de la **cible**, des **objectifs** et du **budget**. Tout doit rester **cohérent** (même message, même ton).
- On compare le **coût** de chaque action à son **efficacité** au regard des objectifs : nombre de personnes touchées, notoriété mesurée avant et après, ventes, visites du site.
- Une **stratégie de contenus** consiste à produire régulièrement des contenus utiles ou divertissants (vidéos, articles, conseils) pour attirer le public.

### À retenir pour le bac
- Objectifs cognitif (connaître), affectif (aimer), conatif (agir).
- Média (la télévision) et support (une chaîne précise).
- Copie stratégie : promesse, preuve, bénéfice, ton.
- Parrainage (contrepartie commerciale) et mécénat (sans contrepartie directe).
- POEM : paid (achetée), owned (détenue), earned (gagnée).`,
      cartes: [
        { q: "Quels peuvent être les objets de la communication commerciale ?", r: "L'organisation (communication institutionnelle), la marque, le produit ou un événement." },
        { q: "Objectif cognitif, affectif ou conatif ?", r: "Cognitif : faire connaître. Affectif : faire aimer. Conatif : faire agir (acheter, s'inscrire)." },
        { q: "Qu'est-ce qu'un prescripteur ?", r: "Une personne qui conseille l'achat sans être forcément l'acheteur : un médecin, un professeur, un influenceur." },
        { q: "Média ou support ?", r: "Le média est une catégorie (la télévision, la presse). Le support est un titre ou une chaîne précise dans ce média." },
        { q: "Que contient une copie stratégie ?", r: "La promesse (le bénéfice annoncé), la preuve (ce qui la rend crédible), le bénéfice consommateur et le ton du message." },
        { q: "Qu'est-ce que le marketing direct ?", r: "Un message personnel envoyé à chaque client (courrier, courriel, SMS), dont on peut mesurer la réponse." },
        { q: "Qu'est-ce que la promotion des ventes ?", r: "Un avantage temporaire pour faire acheter tout de suite : réduction, lot, échantillon, cadeau, jeu-concours." },
        { q: "Parrainage ou mécénat ?", r: "Parrainage : financer un événement contre une visibilité commerciale. Mécénat : soutenir une cause d'intérêt général sans contrepartie commerciale directe." },
        { q: "Qu'est-ce que le paid media ?", r: "La visibilité achetée par l'organisation : publicités en ligne, spots, bannières, publications sponsorisées." },
        { q: "Qu'est-ce que l'owned media ?", r: "La visibilité détenue par l'organisation : son site, son application, ses comptes sur les réseaux sociaux." },
        { q: "Qu'est-ce que l'earned media ?", r: "La visibilité gagnée gratuitement grâce à son influence : articles de presse, partages, avis, bouche-à-oreille." },
        { q: "Comment évaluer une action de communication ?", r: "En comparant son coût à son efficacité au regard des objectifs : personnes touchées, notoriété, ventes, visites." },
      ],
      quiz: [
        { q: "Une campagne qui veut surtout faire connaître un nouveau produit a un objectif :", choix: ["affectif", "conatif", "institutionnel", "cognitif"], bonne: 3, expl: "Faire connaître, c'est l'objectif cognitif.", niv: 1 },
        { q: "Un bon de réduction valable une semaine pour pousser à acheter tout de suite vise un objectif :", choix: ["cognitif", "affectif", "conatif", "patrimonial"], bonne: 2, expl: "Faire agir, ici acheter, c'est l'objectif conatif.", niv: 2 },
        { q: "« La télévision » est :", choix: ["un média", "un support", "une copie stratégie", "un prescripteur"], bonne: 0, expl: "La télévision est un média ; une chaîne précise est un support.", niv: 1 },
        { q: "Dans une publicité, « nos pneus freinent 2 mètres plus court, prouvé par un laboratoire indépendant » contient surtout :", choix: ["un ton humoristique et décalé", "une preuve de la promesse", "un objectif affectif", "le choix d'un support"], bonne: 1, expl: "Le test du laboratoire rend crédible la promesse de sécurité : c'est la preuve.", niv: 2 },
        { q: "Une banque finance la restauration d'un monument sans y afficher de publicité. C'est :", choix: ["du parrainage", "de la promotion des ventes", "du marketing direct", "du mécénat"], bonne: 3, expl: "Soutenir une cause d'intérêt général sans contrepartie commerciale directe, c'est du mécénat.", niv: 2 },
        { q: "Une marque de boissons paie pour afficher son logo sur les maillots d'une équipe de football. C'est :", choix: ["du parrainage", "du mécénat", "de l'earned media", "du marketing direct"], bonne: 0, expl: "Elle finance l'équipe en échange d'une visibilité commerciale : c'est le parrainage.", niv: 2 },
        { q: "Le compte d'une marque sur un réseau social, qu'elle gère elle-même, relève :", choix: ["du paid media", "de l'earned media", "de l'owned media", "de la promotion des ventes"], bonne: 2, expl: "C'est une visibilité détenue par l'organisation : owned media.", niv: 2 },
        { q: "Un journaliste écrit gratuitement un article élogieux sur une nouvelle application. C'est :", choix: ["du paid media", "de l'earned media", "de l'owned media", "du parrainage"], bonne: 1, expl: "Une visibilité gagnée, non payée, grâce à l'influence de la marque : earned media.", niv: 2 },
        { q: "Pourquoi l'earned media est-il souvent jugé plus crédible ?", choix: ["Il coûte plus cher que la publicité", "Il est contrôlé à chaque mot par la marque", "Il vient de personnes extérieures à la marque", "Il est obligatoire par la loi"], bonne: 2, expl: "Ce qui est dit par d'autres, sans être payé, inspire plus confiance que ce que la marque dit d'elle-même.", niv: 3 },
        { q: "Une campagne a coûté cher mais n'a touché presque personne de sa cible. Que faut-il en conclure ?", choix: ["Son rapport coût/efficacité est mauvais", "Elle a réussi, car elle était chère", "La campagne a réussi malgré tout", "Il faut supprimer toute communication"], bonne: 0, expl: "On évalue une action en comparant son coût à ses résultats au regard des objectifs.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 3.2 Relation client et numérique
    {
      chapitre: 'stmg-merca-8',
      fiche: `## Comment enrichir la relation client grâce au numérique ?

### La fidélité
- Un client **fidèle** rachète régulièrement la même marque ou dans la même enseigne. Mais la fidélité ne se résume pas aux achats répétés : il faut comprendre **pourquoi** il revient.
- **Facteurs de fidélité** : la **satisfaction**, la **confiance**, l'**attachement** à la marque, l'**habitude**, mais aussi le **coût de changement** (perdre ses points, refaire un compte) ou l'absence de concurrents proches.
- Garder un client coûte en général moins cher que d'en conquérir un nouveau : d'où l'importance de la **fidélisation**.

### Stratégie et programmes de fidélisation
- Une **stratégie de fidélisation** vise une relation **durable et personnalisée** avec les clients, surtout ceux qui rapportent le plus.
- Les **programmes de fidélisation** : cartes de fidélité, points, réductions réservées, offres d'anniversaire, accès à des ventes privées, statuts (« client premium »).
- La **valeur vie client** (**lifetime value**, LTV) est ce que rapporte un client pendant toute la durée de sa relation avec l'organisation. Elle aide à décider combien dépenser pour le garder.

### La gestion de la relation client (GRC)
- La **gestion de la relation client** (**customer relationship management**, CRM) rassemble les outils et les données qui permettent de connaître chaque client : historique d'achats, préférences, échanges avec le service client.
- Grâce au **big data** et à des **algorithmes**, l'organisation peut personnaliser ses messages et ses offres.
- Outils numériques au service du parcours : **tracking** (suivre la navigation et les achats), **chatbot** (agent conversationnel qui répond automatiquement), **assistance vocale**, **reconnaissance d'image**, **shoppable media** (acheter directement depuis une photo ou une vidéo).
- L'**inbound marketing** : attirer le client avec des contenus utiles (conseils, tutoriels) pour qu'il vienne de lui-même, au lieu de le solliciter.

### Communication numérique, influence et communautés
- Le **community management** : animer les communautés de la marque sur les réseaux sociaux (répondre, publier, modérer).
- Le **brand content** (contenu de marque), le **storytelling** (raconter une histoire autour de la marque), le **social selling** (vendre en utilisant les réseaux sociaux).
- Le **marketing d'influence** : faire parler de la marque par des **influenceurs**. En France, une loi de **2023** encadre l'influence commerciale : la publicité doit être clairement signalée.
- Le **bouche-à-oreille** (buzz) et le **marketing viral** : un message que les gens partagent eux-mêmes, très vite.
- Le **management de l'expérience client** cherche à rendre chaque contact agréable, pour fidéliser et faire **recommander** la marque (recrutement de nouveaux clients par les clients actuels).

### Mesurer l'efficacité
- Les **indicateurs clés de performance** (**KPI**) : **taux d'ouverture** d'un courriel, **taux de conversion** (part des visiteurs qui achètent), **coût par lead** (CPL, ce que coûte un contact intéressé), nombre de mentions « j'aime » ou d'abonnés.

### Les risques
- **Défiance** des consommateurs, qui trouvent la communication numérique envahissante : beaucoup installent des **bloqueurs de publicité** (ad-blockers).
- L'**e-réputation** (l'image de la marque en ligne) peut se dégrader vite : un avis négatif ou une vidéo devient viral. Il faut alors une **communication de crise** rapide et honnête.
- Les **données personnelles** sont protégées par le **règlement général sur la protection des données** (RGPD, appliqué depuis 2018) : consentement, droit d'accès et d'effacement. Une **fuite de données** abîme la confiance.

### À retenir pour le bac
- Facteurs de fidélité : satisfaction, confiance, attachement, habitude, coût de changement.
- Valeur vie client (LTV) et gestion de la relation client (CRM).
- Community management, influence (loi de 2023), marketing viral.
- KPI : taux d'ouverture, taux de conversion, coût par lead.
- Risques : défiance, ad-blockers, e-réputation, RGPD.`,
      cartes: [
        { q: "Quels sont les facteurs de fidélité d'un client ?", r: "La satisfaction, la confiance, l'attachement à la marque, l'habitude, le coût de changement (perdre ses points, changer de compte)." },
        { q: "Pourquoi fidéliser plutôt que conquérir ?", r: "Garder un client coûte en général moins cher que d'en conquérir un nouveau." },
        { q: "Qu'est-ce que la valeur vie client (LTV) ?", r: "Ce que rapporte un client pendant toute la durée de sa relation avec l'organisation." },
        { q: "Qu'est-ce que la gestion de la relation client (CRM) ?", r: "Les outils et données qui permettent de connaître chaque client (achats, préférences, échanges) pour personnaliser la relation." },
        { q: "Qu'est-ce qu'un chatbot ?", r: "Un agent conversationnel qui répond automatiquement aux questions des clients, sur un site ou une application." },
        { q: "Qu'est-ce que l'inbound marketing ?", r: "Attirer le client avec des contenus utiles (conseils, tutoriels) pour qu'il vienne de lui-même, au lieu de le solliciter." },
        { q: "Qu'est-ce que le community management ?", r: "L'animation des communautés de la marque sur les réseaux sociaux : publier, répondre, modérer." },
        { q: "Qu'est-ce que le storytelling ?", r: "Raconter une histoire autour de la marque ou du produit pour créer de l'émotion et de l'attachement." },
        { q: "Que prévoit la loi de 2023 sur l'influence commerciale ?", r: "Elle encadre l'activité des influenceurs : la publicité doit notamment être clairement signalée." },
        { q: "Qu'est-ce que le taux de conversion ?", r: "La part des visiteurs (d'un site, d'une campagne) qui réalisent l'action voulue, le plus souvent un achat." },
        { q: "Qu'est-ce que l'e-réputation ?", r: "L'image d'une marque ou d'une organisation sur internet, faite des avis, commentaires et contenus publiés à son sujet." },
        { q: "Que garantit le RGPD aux clients ?", r: "La protection de leurs données personnelles depuis 2018 : consentement, droit d'accès, de rectification et d'effacement." },
      ],
      quiz: [
        { q: "Ce que rapporte un client pendant toute sa relation avec une enseigne s'appelle :", choix: ["la valeur vie client", "le coût par lead", "le taux de conversion", "l'e-réputation"], bonne: 0, expl: "C'est la lifetime value (LTV), ou valeur vie client.", niv: 1 },
        { q: "Un client reste chez son opérateur surtout pour ne pas perdre ses avantages accumulés. Son principal facteur de fidélité est :", choix: ["l'attachement à la marque", "la satisfaction", "le storytelling", "le coût de changement"], bonne: 3, expl: "Partir lui ferait perdre quelque chose : c'est le coût de changement, pas forcément de la satisfaction.", niv: 2 },
        { q: "Sur 1 000 visiteurs d'un site, 30 achètent. Le taux de conversion est de :", choix: ["30 %", "3 %", "0,3 %", "97 %"], bonne: 1, expl: "30 ÷ 1 000 × 100 = 3 %.", niv: 2 },
        { q: "Un agent automatique répond la nuit aux questions sur la livraison. C'est :", choix: ["un influenceur", "un ad-blocker", "un chatbot", "un programme de fidélisation"], bonne: 2, expl: "Le chatbot est un agent conversationnel qui répond automatiquement.", niv: 1 },
        { q: "Une marque de bricolage publie des tutoriels gratuits pour que les gens viennent sur son site. C'est :", choix: ["de l'inbound marketing", "du marketing de masse", "de la publicité télévisée", "une subvention croisée"], bonne: 0, expl: "Attirer par des contenus utiles plutôt que solliciter : c'est l'inbound marketing.", niv: 2 },
        { q: "Une influenceuse publie une vidéo payée par une marque sans le dire. Qu'impose la loi de 2023 ?", choix: ["Rien, c'est libre", "De supprimer son compte", "De signaler clairement la publicité", "De ne parler que de sa vie privée"], bonne: 2, expl: "L'influence commerciale doit être clairement signalée comme publicité.", niv: 2 },
        { q: "Une vidéo d'un client mécontent est partagée des milliers de fois. Que doit faire l'entreprise ?", choix: ["Ignorer la vidéo", "Supprimer ses comptes", "Attendre que cela passe sans rien dire", "Réagir vite et honnêtement"], bonne: 3, expl: "L'e-réputation se dégrade vite : une réponse rapide et sincère limite les dégâts.", niv: 2 },
        { q: "Un outil qui rassemble l'historique d'achats et les échanges de chaque client pour personnaliser les offres est :", choix: ["un ad-blocker", "un logiciel de CRM", "un support publicitaire", "une place de marché"], bonne: 1, expl: "La GRC (CRM) centralise les données sur chaque client.", niv: 1 },
        { q: "Pourquoi tant d'internautes installent-ils des bloqueurs de publicité ?", choix: ["La publicité leur paraît envahissante", "La loi les oblige à en installer un", "Les publicités en ligne sont illégales", "Ils veulent voir plus de publicités ciblées"], bonne: 0, expl: "C'est un signe de défiance face à des publicités jugées trop nombreuses.", niv: 3 },
        { q: "Une enseigne veut envoyer des offres personnalisées à partir des données de ses clients. Quelle condition doit-elle respecter ?", choix: ["Aucune, les données lui appartiennent", "Obtenir le consentement et respecter le RGPD", "Vendre les données pour financer ses offres", "Publier les données en ligne"], bonne: 1, expl: "Le RGPD impose notamment le consentement et le respect des droits des clients sur leurs données.", niv: 3 },
      ],
    },
  ],
  methode: [
    {
      id: 'stmg-merca-m1', mat: 'stmg-merca', titre: "Grand oral : formuler sa question de mercatique",
      formules: ["Comment [une organisation] peut-elle… ?", "En quoi [une pratique] permet-elle de… ?", "[Une stratégie] est-elle toujours efficace pour… ?"],
      vu: ["Grand oral, voie technologique, à partir de 2027 : les questions sont liées à la spécialité dans laquelle l'élève mène son projet"],
      pts: "Grand oral sur 20, coefficient 12 en voie technologique à partir de 2027",
      attendu: "Une vraie question de gestion, qui n'a pas de réponse évidente, liée au programme de mercatique et au projet mené en classe. Elle doit porter sur une organisation réelle et permettre de mobiliser les notions du programme.",
      etapes: ["Partir du projet mené en mercatique et de l'organisation étudiée.", "Repérer la question du programme concernée (personnalisation, expérience, prix, intermédiaires, omnicanal, numérique, médias, relation client).", "Formuler une question ouverte, qui appelle une réponse nuancée.", "Vérifier qu'on peut y répondre avec des notions précises et des faits sur l'organisation.", "La tester devant quelqu'un : la comprend-il sans explication ?"],
      mots: ["comment", "en quoi", "dans quelle mesure", "stratégie", "organisation"],
      pieges: ["Une question trop large (« le marketing est-il utile ? »).", "Une question fermée à laquelle on répond par oui ou par non sans réfléchir.", "Une question sans organisation réelle à étudier.", "Une question sans lien avec les notions du programme."],
      cas: "Projet de classe : l'étude d'une enseigne locale de vélos qui a ouvert un site de vente en ligne et propose du click and collect.",
      question: "Formule une question de grand oral à partir de ce projet.",
      modele: "« En quoi la stratégie cross-canal permet-elle à une enseigne locale de vélos de résister aux grands sites de vente en ligne ? » Cette question part d'une organisation réelle, renvoie à la question 2.2 du programme (le consommateur dicte-t-il les choix de distribution ?) et à la question 2.3 (technologies numériques), et n'a pas de réponse évidente : le cross-canal apporte de la proximité et des services, mais il coûte cher et ne suffit pas toujours face aux prix des géants du numérique.",
      grille: ["Ma question porte sur une organisation précise.", "Elle renvoie à au moins une question du programme.", "Elle n'a pas de réponse évidente.", "Elle se comprend sans explication."],
    },
    {
      id: 'stmg-merca-m2', mat: 'stmg-merca', titre: "Grand oral : construire l'exposé de 10 minutes",
      formules: ["Introduction : accroche, contexte, question", "Développement en deux parties", "Conclusion : réponse et ouverture"],
      vu: ["Grand oral 2027 : 20 minutes de préparation, puis 10 minutes d'exposé et 10 minutes d'échange"],
      pts: "La qualité de l'argumentation et la maîtrise des notions comptent pour une grande part de la note",
      attendu: "Un exposé clair, sans lire ses notes, qui présente l'organisation, pose la question, y répond en deux temps avec des notions de mercatique précises et des faits, puis conclut.",
      etapes: ["Accroche concrète (un chiffre, une scène, un produit).", "Présenter l'organisation en quelques phrases (activité, taille, clients).", "Poser la question et annoncer les deux parties.", "Partie 1 : ce que la stratégie apporte, avec deux notions et des exemples.", "Partie 2 : ses limites ou ses conditions de réussite.", "Conclusion : répondre clairement, puis ouvrir (lien avec son orientation ou une autre question)."],
      mots: ["cible", "positionnement", "valeur perçue", "omnicanalité", "fidélisation"],
      pieges: ["Raconter le projet sans répondre à la question.", "Utiliser des mots vagues (« ils font du marketing ») au lieu des notions du programme.", "Lire ses notes.", "Dépasser les 10 minutes ou finir en 4 minutes."],
      cas: "Même question sur l'enseigne locale de vélos et sa stratégie cross-canal.",
      question: "Donne le plan détaillé de l'exposé.",
      modele: "Accroche : « Acheter un vélo en ligne en trois clics, c'est facile. Mais qui le règle, le répare, le conseille ? » Présentation : un magasin indépendant de 6 salariés, qui vise les cyclistes du quotidien. Question et annonce. I. Le cross-canal crée de la valeur : le client s'informe en ligne et vient essayer (ROPO), le click and collect lui fait gagner du temps, l'atelier de réparation et les conseils forment une offre associée que les sites lointains n'ont pas ; la valeur perçue augmente. II. Mais il a des limites : coût du site et de la gestion des stocks, prix plus élevés que ceux des grandes plateformes, clients volatils qui comparent. Il réussit si l'enseigne mise sur la proximité, le service et la fidélisation (carte, entretien offert). Conclusion : le cross-canal ne permet pas de battre les géants sur le prix, mais de se différencier par le service ; ouverture sur mon projet d'études en commerce.",
      grille: ["Mon accroche est concrète.", "J'ai présenté l'organisation en moins d'une minute.", "Chaque partie utilise au moins deux notions du programme.", "Ma conclusion répond à la question."],
    },
    {
      id: 'stmg-merca-m3', mat: 'stmg-merca', titre: "Grand oral : répondre aux questions du jury",
      formules: ["Pouvez-vous définir… ?", "Que pensez-vous de… ?", "Et si l'organisation faisait plutôt… ?", "Quel lien avec… ?"],
      vu: ["Grand oral 2027 : 10 minutes d'échange après l'exposé, sur la question et sur le programme de la spécialité"],
      pts: "L'échange compte autant que l'exposé dans la note",
      attendu: "Des réponses courtes et précises, qui définissent les notions, s'appuient sur l'organisation étudiée et osent nuancer. Le jury vérifie que l'élève comprend vraiment ce qu'il a présenté et sait raisonner.",
      etapes: ["Écouter la question jusqu'au bout et la reformuler si besoin.", "Commencer par la réponse directe.", "Définir la notion en une phrase.", "Donner un exemple tiré de l'organisation ou d'une autre entreprise connue.", "Nuancer si la question l'appelle, sans se contredire."],
      mots: ["autrement dit", "par exemple", "cela dépend de", "dans le cas de", "je n'ai pas étudié ce point, mais"],
      pieges: ["Répondre à côté, ou trop longuement.", "Inventer un chiffre ou un fait.", "Se braquer face à une objection.", "Ne pas savoir définir un mot qu'on a utilisé dans l'exposé."],
      cas: "Pendant l'échange, le jury demande : « Vous avez parlé de valeur perçue. Pouvez-vous la définir, et dire comment l'enseigne pourrait l'augmenter sans baisser ses prix ? »",
      question: "Rédige la réponse que tu donnerais.",
      modele: "La valeur perçue, c'est ce que le client pense recevoir comparé à ce qu'il pense donner : le prix, mais aussi le temps, l'effort et le risque de se tromper. Sans baisser les prix, l'enseigne peut augmenter les bénéfices perçus ou réduire les autres sacrifices. Par exemple, offrir le premier entretien du vélo, laisser essayer les modèles sur une piste, ou proposer le retrait en une heure : le client gagne du temps et prend moins de risque. Cela peut justifier un prix un peu plus élevé que celui d'un site en ligne.",
      grille: ["J'ai défini la notion en une phrase.", "J'ai répondu directement à la question posée.", "J'ai donné au moins deux exemples concrets.", "Ma réponse dure moins d'une minute."],
    },
    {
      id: 'stmg-merca-m4', mat: 'stmg-merca', titre: "Analyser le marchéage d'une organisation (oral et écrit commun)",
      formules: ["Caractérisez l'offre de l'organisation.", "Analysez la politique de prix (ou de distribution, ou de communication).", "Montrez la cohérence du marchéage avec le positionnement."],
      vu: ["Grand oral (analyse de l'organisation du projet)", "Écrit de management : questions sur la stratégie et l'offre d'une organisation, où ces notions aident"],
      pts: "Une analyse qui sert à la fois à l'exposé du grand oral et aux questions de l'écrit commun",
      attendu: "Identifier la cible et le positionnement, décrire les quatre volets de l'offre (produit, prix, distribution, communication) avec les notions précises, puis juger leur cohérence entre eux et avec la cible.",
      etapes: ["Cible et positionnement : à qui s'adresse l'offre, avec quelle image ?", "Produit : offre principale et associée, gamme, marque, packaging.", "Prix : niveau, politique (unique, différencié, gratuité), cohérence avec le positionnement.", "Distribution : canaux, couverture (intensive, sélective, exclusive), numérique.", "Communication : objectifs, moyens (POEM), cohérence du message.", "Conclure sur la cohérence de l'ensemble."],
      mots: ["cible", "positionnement", "marchéage", "cohérence", "valeur perçue"],
      pieges: ["Décrire sans utiliser les notions (« ils vendent des vélos sympas »).", "Oublier un des quatre volets.", "Ne pas juger la cohérence.", "Confondre cible et positionnement."],
      cas: "Une marque française de baskets fabriquées en France vise des jeunes adultes urbains attentifs à l'écologie. Elle vend 120 euros la paire, surtout sur son site et dans quelques boutiques choisies, et communique par ses réseaux sociaux et des partenariats avec des créateurs de contenus.",
      question: "Analyse la cohérence du marchéage de cette marque.",
      modele: "La cible est celle des jeunes adultes urbains sensibles à l'écologie ; le positionnement est celui d'une basket responsable et fabriquée en France. Le produit (fabrication locale, marque engagée) soutient ce positionnement. Le prix élevé, 120 euros, est cohérent : il traduit une qualité et des coûts de production plus forts, et la cible accepte de payer pour ses valeurs. La distribution, surtout en ligne et dans des boutiques choisies, est sélective : elle protège l'image et convient à une cible connectée. La communication par les réseaux sociaux (owned media) et des créateurs de contenus (marketing d'influence) touche directement cette cible. L'ensemble est cohérent ; le risque est un prix trop élevé pour une partie des jeunes, et une dépendance aux réseaux sociaux.",
      grille: ["J'ai nommé la cible et le positionnement.", "J'ai traité les quatre volets du marchéage.", "J'ai utilisé au moins quatre notions du programme.", "J'ai jugé la cohérence et noté une limite."],
    },
  ],
  sujets: [],
};
