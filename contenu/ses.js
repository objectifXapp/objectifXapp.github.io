// Sciences économiques et sociales — voie générale, terminale. Sources : voir matiere.sources.
// Programme : BO spécial n° 8 du 25 juillet 2019 (12 questions). Pour le bac 2027, la note de service
// du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026) ne rend évaluables que 9 questions :
// elles forment les 9 chapitres ci-dessous, dans l'ordre officiel. Les 3 questions non évaluées à l'écrit
// (crises financières, action de l'École, justice sociale) ne sont pas traitées ici.
// Barème 2027 : épreuve composée = EC1 3,5 pts, EC2 5,5 pts (2 + 3,5), EC3 9 pts, plus 2 pts de langue ;
// dissertation = 18 pts, plus 2 pts de langue.
export default {
  matiere: {
    id: 'ses',
    nom: 'Sciences économiques et sociales',
    voie: 'generale',
    epreuve: { type: 'ecrit', duree: 240, coef: 16, quand: 'juin', note: 'Au choix : dissertation ou épreuve composée (3 parties). 2 points sur 20 pour la langue.' },
    sources: [
      'https://www.education.gouv.fr/bo/19/Special8/MENE1921247A.htm',
      'https://www.education.gouv.fr/bo/2026/Special4/MENE2622656N',
      'https://eduscol.education.fr/1655/programmes-et-ressources-en-sciences-economiques-et-sociales-voie-g',
      'https://ent2d.ac-bordeaux.fr/disciplines/ses/wp-content/uploads/sites/9/2026/10/Vademecum_baccalaureat_SES-Octobre-2027.pdf',
      'https://www.freemaths.fr/sujets-du-bac/baccalaureat-general/sciences-economiques-et-sociales/annees/annee-2025/metropole/sujet-1-et-correction/bac-sciences-economiques-et-sociales-metropole-2025-sujet-1.pdf',
      'https://www.freemaths.fr/sujets-du-bac/baccalaureat-general/sciences-economiques-et-sociales/annees/annee-2025/metropole/sujet-2-et-correction/bac-sciences-economiques-et-sociales-metropole-2025-sujet-2.pdf',
    ],
    chapitres: [
      { id: 'ses-1', t: 'Quels sont les sources et les défis de la croissance économique ?', theme: 'Science économique' },
      { id: 'ses-2', t: 'Quels sont les fondements du commerce international et de l\'internationalisation de la production ?', theme: 'Science économique' },
      { id: 'ses-3', t: 'Comment lutter contre le chômage ?', theme: 'Science économique' },
      { id: 'ses-4', t: 'Quelles politiques économiques dans le cadre européen ?', theme: 'Science économique' },
      { id: 'ses-5', t: 'Comment est structurée la société française actuelle ?', theme: 'Sociologie et science politique' },
      { id: 'ses-6', t: 'Quels sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ?', theme: 'Sociologie et science politique' },
      { id: 'ses-7', t: 'Quelles mutations du travail et de l\'emploi ?', theme: 'Sociologie et science politique' },
      { id: 'ses-8', t: 'Comment expliquer l\'engagement politique dans les sociétés démocratiques ?', theme: 'Sociologie et science politique' },
      { id: 'ses-9', t: 'Quelle action publique pour l\'environnement ?', theme: 'Regards croisés' },
    ],
  },
  paquets: [
    // ---------------------------------------------------------------- ses-1
    {
      chapitre: 'ses-1',
      fiche: `## Les sources et les défis de la croissance économique

### Qu'est-ce que la croissance ?
- La **croissance économique** est l'augmentation durable de la production d'un pays. On la mesure par le taux de variation du **PIB en volume** (corrigé de la hausse des prix).
- Exemple : si le PIB en volume passe de 100 à 102 en un an, la croissance est de 2 %.

### Les sources de la croissance
- Pour produire, on combine des **facteurs de production** : le **travail** (nombre d'heures, qualification) et le **capital** (machines, bâtiments, logiciels).
- **Accumulation des facteurs** : on produit plus parce qu'on utilise plus de travail ou plus de capital. C'est la croissance **extensive**. Exemple : une usine embauche 50 ouvriers de plus.
- **Hausse de la productivité** : on produit plus avec la même quantité de facteurs. C'est la croissance **intensive**.
- La **productivité globale des facteurs (PGF)** est la part de la croissance qui ne s'explique pas par la hausse du travail et du capital. L'économiste **Robert Solow** l'appelait le **résidu**. Elle vient surtout du **progrès technique** (nouvelles machines, meilleure organisation, meilleure formation).
- Exemple : un entrepôt qui installe un logiciel de gestion des stocks prépare plus de colis par heure avec les mêmes salariés.

### Le progrès technique est endogène
- Chez Solow, le progrès technique tombe « du ciel » : il est **exogène**.
- Les théories de la **croissance endogène** (Paul **Romer**, 1990) montrent qu'il est produit par l'économie elle-même : la croissance finance la recherche, l'éducation et les infrastructures, qui créent du progrès technique, qui relance la croissance. C'est un **cercle vertueux**.
- Le progrès technique résulte en particulier de l'**innovation** : de produit (le smartphone), de procédé (le robot), d'organisation (le travail en équipe), de commercialisation (la vente en ligne).
- Une connaissance est un bien **non rival** : un chercheur peut l'utiliser sans en priver un autre. Elle crée des **externalités positives**.

### Le rôle des institutions
- Les **institutions** sont les règles qui encadrent la vie économique : droit, justice, État, stabilité politique (Douglass **North**).
- Les **droits de propriété** garantissent à chacun qu'il pourra profiter de ce qu'il a produit ou acheté. Ils incitent à **investir** et à **innover**.
- Exemple : le **brevet** donne à l'innovateur un monopole temporaire (en général 20 ans) sur son invention. Il peut ainsi rentabiliser ses dépenses de recherche.
- À l'inverse, la corruption ou l'absence de justice fiable découragent l'investissement.

### La destruction créatrice
- Joseph **Schumpeter** (1942) : l'innovation détruit des activités anciennes et en crée de nouvelles. C'est la **destruction créatrice**.
- Exemple : les plateformes de musique en ligne ont fait reculer la vente de CD, mais ont créé de nouveaux métiers.
- Les innovations arrivent par **grappes**, ce qui explique des phases de croissance forte.

### Progrès technique et inégalités de revenus
- Le progrès technique est souvent **biaisé** en faveur du **travail qualifié** : il augmente la demande d'ingénieurs et de techniciens, et réduit celle des emplois peu qualifiés et répétitifs. Les écarts de salaires se creusent.
- Les innovateurs à succès touchent des **rentes** temporaires : cela peut augmenter la part des revenus captée par les plus riches.

### Les limites écologiques de la croissance
- Une croissance **soutenable** permet de satisfaire les besoins présents sans compromettre ceux des générations futures.
- Elle se heurte à trois **limites écologiques** : l'**épuisement des ressources** (pétrole, métaux, eau), la **pollution** (air, sols, océans), le **réchauffement climatique** (émissions de gaz à effet de serre).
- En 1972, le **rapport Meadows** (« Les limites à la croissance ») alertait déjà sur ces limites.
- **Soutenabilité faible** : le capital naturel peut être remplacé par du capital produit (technique). **Soutenabilité forte** : certaines ressources naturelles sont irremplaçables et doivent être préservées.
- L'**innovation** peut aider à **reculer ces limites** : énergies renouvelables, voitures moins gourmandes, recyclage.
- Mais attention à l'**effet rebond** : un produit plus économe peut être davantage utilisé, ce qui annule une partie du gain.

### À retenir pour le bac
- Sources de la croissance : accumulation des facteurs (travail, capital) et hausse de la PGF, tirée par le progrès technique.
- Le progrès technique est endogène : il dépend de l'innovation, de la recherche et des institutions (droits de propriété, brevets).
- Piège : la PGF n'est pas la productivité du travail. Elle mesure l'efficacité de l'ensemble des facteurs.
- Défis : inégalités de revenus (progrès technique biaisé) et limites écologiques ; l'innovation peut les repousser sans tout régler.`,
      cartes: [
        { q: "Comment mesure-t-on la croissance économique ?", r: "Par le taux de variation du PIB en volume, c'est-à-dire corrigé de la hausse des prix, d'une année sur l'autre." },
        { q: "Quelles sont les deux grandes sources de la croissance ?", r: "L'accumulation des facteurs de production (plus de travail, plus de capital) et la hausse de la productivité globale des facteurs." },
        { q: "Qu'est-ce que la productivité globale des facteurs (PGF) ?", r: "La part de la croissance qui ne s'explique pas par l'augmentation des quantités de travail et de capital. Elle reflète surtout le progrès technique." },
        { q: "Croissance extensive ou intensive : quelle différence ?", r: "Extensive : on produit plus en utilisant plus de facteurs. Intensive : on produit plus grâce à des gains de productivité, avec la même quantité de facteurs." },
        { q: "Comment Solow appelait-il la part de la croissance non expliquée par le travail et le capital ?", r: "Le résidu. On l'attribue au progrès technique, qui est exogène dans son modèle." },
        { q: "Que signifie « progrès technique endogène » ?", r: "Le progrès technique est produit par l'activité économique elle-même (recherche, éducation, infrastructures). Théorie de la croissance endogène, Paul Romer, 1990." },
        { q: "Pourquoi la connaissance crée-t-elle des externalités positives ?", r: "Parce qu'elle est non rivale : une découverte peut être utilisée par d'autres sans être épuisée, ce qui profite à toute l'économie." },
        { q: "Que sont les institutions, selon Douglass North ?", r: "Les règles qui encadrent la vie économique et sociale : droit, justice, droits de propriété, stabilité politique." },
        { q: "Pourquoi les droits de propriété favorisent-ils la croissance ?", r: "Ils garantissent à l'investisseur et à l'innovateur qu'ils pourront profiter des gains de leur effort. Cela les incite à investir et à innover." },
        { q: "À quoi sert un brevet ?", r: "Il donne à l'innovateur un monopole temporaire d'exploitation (en général 20 ans), ce qui lui permet de rentabiliser ses dépenses de recherche." },
        { q: "Qu'est-ce que la destruction créatrice ?", r: "Notion de Schumpeter (1942) : l'innovation fait disparaître des activités et des emplois anciens et en crée de nouveaux." },
        { q: "Pourquoi le progrès technique peut-il creuser les inégalités de revenus ?", r: "Il est biaisé en faveur du travail qualifié : la demande de diplômés augmente, celle des peu qualifiés baisse, donc les écarts de salaires se creusent." },
        { q: "Quelles sont les trois limites écologiques de la croissance au programme ?", r: "L'épuisement des ressources, la pollution et le réchauffement climatique." },
        { q: "Soutenabilité faible ou forte : quelle différence ?", r: "Faible : le capital naturel peut être remplacé par du capital produit. Forte : certaines ressources naturelles sont irremplaçables et doivent être préservées." },
        { q: "Qu'est-ce que l'effet rebond ?", r: "Un produit devenu plus économe en énergie est plus utilisé, ce qui annule une partie des économies attendues." },
      ],
      quiz: [
        { q: "La productivité globale des facteurs mesure :", choix: ["la production par heure de travail", "la performance combinée du travail et du capital", "la quantité de capital par salarié", "la part des salaires dans la valeur ajoutée"], bonne: 1, expl: "La PGF rapporte la production à l'ensemble des facteurs. La production par heure de travail, c'est la productivité du travail, une notion voisine.", niv: 1 },
        { q: "Quel auteur a montré que le progrès technique est produit par l'économie elle-même ?", choix: ["Robert Solow", "Joseph Schumpeter", "Douglass North", "Paul Romer"], bonne: 3, expl: "Romer (1990) est un des pères de la croissance endogène. Chez Solow, au contraire, le progrès technique est exogène.", niv: 1 },
        { q: "Une entreprise embauche 30 salariés et achète 10 machines identiques aux siennes. Sa production augmente. Il s'agit :", choix: ["d'une croissance extensive", "d'une croissance intensive", "d'une hausse de la PGF", "d'une destruction créatrice"], bonne: 0, expl: "Elle produit plus parce qu'elle utilise plus de facteurs : c'est la croissance extensive. Aucune hausse d'efficacité n'est décrite.", niv: 2 },
        { q: "Le brevet stimule l'innovation car il :", choix: ["oblige l'innovateur à partager sa découverte gratuitement", "finance directement la recherche publique du pays", "garantit à l'innovateur un monopole temporaire", "empêche l'imitation même après son expiration"], bonne: 2, expl: "Le brevet protège l'innovateur pendant une durée limitée, ce qui lui permet de rentabiliser sa recherche. Après expiration, l'imitation devient libre.", niv: 1 },
        { q: "Les plateformes de vidéo en ligne ont fait fermer des vidéoclubs et créé de nouveaux métiers. Cet exemple illustre :", choix: ["l'effet rebond", "le résidu de Solow", "la soutenabilité forte", "la destruction créatrice"], bonne: 3, expl: "Des activités anciennes disparaissent et de nouvelles naissent grâce à l'innovation : c'est la destruction créatrice de Schumpeter.", niv: 2 },
        { q: "Un pays où la justice est corrompue et la propriété mal protégée aura plutôt :", choix: ["moins d'investissement et moins d'innovation", "plus d'investissement public pour compenser", "une croissance plus forte grâce à la liberté des acteurs", "une hausse de la productivité globale des facteurs"], bonne: 0, expl: "Sans droits de propriété fiables, on risque de ne pas profiter de ses efforts : l'incitation à investir et à innover recule.", niv: 2 },
        { q: "Selon les partisans de la soutenabilité forte :", choix: ["le capital produit peut remplacer toute ressource naturelle", "la croissance doit rester la plus forte possible", "l'innovation suffit à régler les problèmes écologiques", "certaines ressources naturelles sont irremplaçables"], bonne: 3, expl: "La soutenabilité forte refuse l'idée que le capital produit compense tout. L'idée que le capital produit remplace tout, c'est la soutenabilité faible.", niv: 1 },
        { q: "Pourquoi les théories de la croissance endogène parlent-elles de cercle vertueux ?", choix: ["La croissance finance la recherche, qui relance la croissance", "La hausse des prix pousse les entreprises à investir", "La baisse des salaires augmente mécaniquement l'emploi", "L'épargne forte réduit la consommation, puis les importations du pays"], bonne: 0, expl: "Croissance, recherche, éducation et infrastructures s'entretiennent : le progrès technique est produit par la croissance et la nourrit.", niv: 2 },
        { q: "Des moteurs consomment 20 % de carburant en moins, mais on roule beaucoup plus. Les émissions totales baissent peu. C'est :", choix: ["une externalité positive", "un effet rebond", "une croissance extensive", "un progrès technique exogène"], bonne: 1, expl: "Le gain d'efficacité pousse à utiliser davantage le produit : l'effet rebond annule une partie du gain écologique.", niv: 2 },
        { q: "Pourquoi le progrès technique peut-il accroître les inégalités de salaires ?", choix: ["Il réduit la production totale du pays", "Il fait baisser le prix des biens de luxe", "Il augmente surtout la demande de travail qualifié", "Il supprime surtout les emplois les mieux payés"], bonne: 2, expl: "Le progrès technique est biaisé en faveur du travail qualifié : les diplômés gagnent plus, les emplois peu qualifiés et répétitifs reculent.", niv: 3 },
        { q: "Entre 2020 et 2022, un pays voit son PIB croître alors que sa PGF baisse. On peut en déduire que :", choix: ["la croissance vient surtout du progrès technique", "le PIB en volume a en réalité diminué", "les innovations ont été plus nombreuses", "la croissance vient forcément de l'accumulation des facteurs"], bonne: 3, expl: "Si l'efficacité globale recule et que le PIB monte quand même, c'est que les quantités de travail ou de capital ont augmenté.", niv: 3 },
        { q: "Quelle affirmation sur l'innovation et les limites écologiques est juste ?", choix: ["Elle suffit à supprimer la pollution liée à la production", "Elle aggrave l'épuisement des ressources plus qu'elle ne le réduit", "Elle peut reculer ces limites sans les faire disparaître", "Elle n'a aucun lien avec la croissance soutenable"], bonne: 2, expl: "Le programme dit que l'innovation « peut aider à reculer » les limites : énergies renouvelables, recyclage. Mais l'effet rebond et les coûts limitent ce recul.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- ses-2
    {
      chapitre: 'ses-2',
      fiche: `## Commerce international et internationalisation de la production

### Pourquoi les pays échangent-ils ?
- Le **commerce international** est l'échange de biens et de services entre pays. Un pays **se spécialise** dans certaines productions et importe les autres.
- **David Ricardo** (1817) : chaque pays a intérêt à se spécialiser dans la production où il a un **avantage comparatif**, c'est-à-dire là où il est **relativement** le plus efficace (ou le moins inefficace). Même un pays moins productif en tout gagne à échanger.
- Exemple : si le Portugal est meilleur partout mais surtout pour le vin, il produit du vin et achète du drap à l'Angleterre.

### Les dotations factorielles et technologiques
- **Dotations factorielles** : un pays se spécialise dans les biens qui utilisent beaucoup le facteur qu'il possède en abondance (modèle **HOS**, Heckscher-Ohlin-Samuelson).
- Exemple : un pays riche en main-d'œuvre peu qualifiée exporte du textile ; un pays riche en capital et en diplômés exporte des avions.
- **Dotations technologiques** : un pays qui maîtrise une technologie avancée a un avantage dans les produits qui l'utilisent (Ricardo raisonnait déjà sur des différences de productivité).

### Le commerce entre pays comparables
- Une grande partie du commerce se fait entre pays riches qui produisent les mêmes types de biens : c'est le **commerce intra-branche** (la France vend des voitures à l'Allemagne et lui en achète).
- Il s'explique par la **différenciation des produits** : les consommateurs aiment la **variété** (marques, styles) et des produits de **qualité** différente (gamme basse ou haute).
- Il s'explique aussi par la **fragmentation de la chaîne de valeur** : un même produit est fabriqué en plusieurs étapes dans plusieurs pays, ce qui multiplie les échanges de pièces et de composants.

### Compétitivité et productivité des firmes
- La **compétitivité** d'un pays est son aptitude à **exporter** et à garder ses parts de marché.
- **Compétitivité-prix** : vendre moins cher (coûts salariaux, productivité, taux de change).
- **Compétitivité hors-prix** : vendre grâce à autre chose que le prix (qualité, innovation, image de marque, service après-vente).
- Ce sont d'abord les **firmes les plus productives** qui exportent : elles peuvent payer les coûts d'entrée sur un marché étranger. La productivité des firmes **sous-tend** la compétitivité d'un pays.

### L'internationalisation de la chaîne de valeur
- La **chaîne de valeur** regroupe toutes les étapes de production d'un bien : conception, fabrication des composants, assemblage, vente.
- Les **firmes multinationales (FMN)** répartissent ces étapes dans plusieurs pays pour profiter des coûts, des compétences ou de la proximité des marchés. Elles réalisent des **investissements directs à l'étranger (IDE)** (au moins 10 % du capital d'une entreprise étrangère) ou font appel à des sous-traitants.
- Exemple : un smartphone est conçu aux États-Unis, ses puces sont fabriquées en Asie de l'Est, il est assemblé en Chine, puis vendu dans le monde entier.
- Conséquence : les statistiques d'exportation comptent plusieurs fois la valeur des composants qui franchissent plusieurs frontières.

### Les effets du commerce international
- **Gains moyens** : baisse des prix, plus de variété, économies d'échelle, diffusion du progrès technique.
- **Réduction des inégalités entre pays** : des pays émergents (Chine, Inde) se sont rapprochés des pays riches en s'ouvrant.
- **Hausse des inégalités au sein des pays** : dans un pays riche, les travailleurs peu qualifiés des secteurs concurrencés perdent leur emploi ou voient leur salaire baisser, tandis que les qualifiés gagnent.

### Libre-échange ou protectionnisme ?
- **Libre-échange** : suppression des obstacles aux échanges. Il est encadré depuis 1995 par l'**Organisation mondiale du commerce (OMC)**.
- **Protectionnisme** : mesures qui protègent les producteurs nationaux : **droits de douane**, **quotas**, **normes** techniques ou sanitaires, subventions.
- Arguments pour : protéger les **industries naissantes** (Friedrich **List**, protectionnisme « éducateur »), protéger l'emploi, l'indépendance (énergie, médicaments), des normes sociales et écologiques.
- Arguments contre : hausse des prix pour les consommateurs, moindre concurrence, risque de **représailles** et de **guerre commerciale**.

### À retenir pour le bac
- Avantage comparatif (Ricardo) et dotations factorielles et technologiques expliquent la spécialisation.
- Entre pays comparables : différenciation (variété, qualité) et fragmentation de la chaîne de valeur.
- Piège : avantage comparatif ne veut pas dire « meilleur que les autres » : c'est l'efficacité relative.
- Effets à nuancer : gains moyens et rattrapage entre pays, mais inégalités accrues dans chaque pays.`,
      cartes: [
        { q: "Qu'est-ce qu'un avantage comparatif ?", r: "Un pays a un avantage comparatif dans la production où il est relativement le plus efficace (ou le moins inefficace) par rapport aux autres productions. Idée de David Ricardo, 1817." },
        { q: "Qu'affirme le modèle HOS (Heckscher-Ohlin-Samuelson) ?", r: "Un pays se spécialise dans les biens qui utilisent intensivement le facteur de production qu'il possède en abondance." },
        { q: "Qu'est-ce que le commerce intra-branche ?", r: "L'échange de produits similaires entre pays comparables. Exemple : la France exporte et importe des voitures vers et depuis l'Allemagne." },
        { q: "Différenciation horizontale ou verticale ?", r: "Horizontale : produits de même qualité mais de styles différents (variété). Verticale : produits de qualité différente (gamme basse, haute)." },
        { q: "Qu'est-ce que la fragmentation de la chaîne de valeur ?", r: "La division de la production d'un bien en étapes réalisées dans des pays différents." },
        { q: "Définis la compétitivité d'un pays.", r: "Son aptitude à exporter, c'est-à-dire à vendre ses produits sur les marchés étrangers et à garder ses parts de marché." },
        { q: "Compétitivité-prix ou hors-prix ?", r: "Prix : vendre moins cher que les concurrents. Hors-prix : vendre grâce à la qualité, l'innovation, la marque ou le service." },
        { q: "Pourquoi les firmes les plus productives exportent-elles davantage ?", r: "Exporter coûte cher (adaptation, distribution, normes). Seules les firmes les plus productives peuvent couvrir ces coûts et rester rentables." },
        { q: "Qu'est-ce qu'un investissement direct à l'étranger (IDE) ?", r: "Un investissement d'une entreprise dans une entreprise étrangère pour en prendre le contrôle ou y peser durablement : au moins 10 % de son capital." },
        { q: "Cite trois gains du commerce international.", r: "La baisse des prix, la plus grande variété des produits et la diffusion du progrès technique (aussi les économies d'échelle)." },
        { q: "Pourquoi le commerce peut-il creuser les inégalités dans un pays riche ?", r: "Les travailleurs peu qualifiés des secteurs concurrencés par les importations perdent leur emploi ou voient leur salaire baisser, alors que les qualifiés gagnent." },
        { q: "Qu'est-ce que le protectionnisme éducateur ?", r: "Idée de Friedrich List : protéger temporairement une industrie naissante, le temps qu'elle devienne capable d'affronter la concurrence étrangère." },
        { q: "Cite trois instruments du protectionnisme.", r: "Les droits de douane, les quotas d'importation, les normes techniques ou sanitaires (aussi les subventions aux producteurs nationaux)." },
        { q: "Quel organisme encadre le libre-échange depuis 1995 ?", r: "L'Organisation mondiale du commerce (OMC)." },
      ],
      quiz: [
        { q: "Selon Ricardo, un pays doit se spécialiser dans la production :", choix: ["qu'il réalise moins cher que tous les autres pays", "où il est relativement le plus efficace", "qui utilise le plus de main-d'œuvre", "dont le prix mondial est le plus élevé"], bonne: 1, expl: "C'est l'efficacité relative qui compte : l'avantage comparatif. Produire moins cher que tous les autres, c'est l'avantage absolu : il n'est pas nécessaire pour gagner à l'échange.", niv: 1 },
        { q: "Le modèle HOS explique la spécialisation par :", choix: ["la différenciation des produits", "les écarts de productivité entre firmes", "la fragmentation de la chaîne de valeur", "les dotations en facteurs de production"], bonne: 3, expl: "HOS : un pays exporte les biens qui utilisent beaucoup le facteur qu'il a en abondance. Les autres choix expliquent surtout le commerce entre pays comparables.", niv: 1 },
        { q: "La France exporte des parfums en Italie et importe des parfums italiens. C'est du commerce :", choix: ["intra-branche", "inter-branche", "de dotations factorielles", "triangulaire"], bonne: 0, expl: "Échanger des produits du même type entre pays comparables, c'est le commerce intra-branche.", niv: 2 },
        { q: "Une marque vend des voitures plus chères que ses rivales mais les exporte bien grâce à sa fiabilité. Elle mise sur la compétitivité :", choix: ["prix", "de change", "hors-prix", "salariale"], bonne: 2, expl: "La fiabilité est un élément de qualité : c'est la compétitivité hors-prix.", niv: 2 },
        { q: "Un ordinateur est conçu en Californie, ses écrans faits en Corée, il est assemblé en Chine. Cela illustre :", choix: ["le protectionnisme éducateur", "l'avantage absolu", "le commerce inter-branche", "l'internationalisation de la chaîne de valeur"], bonne: 3, expl: "Les étapes de production sont réparties dans plusieurs pays : la chaîne de valeur est internationalisée.", niv: 2 },
        { q: "Quel auteur défend un protectionnisme temporaire pour les industries naissantes ?", choix: ["Friedrich List", "David Ricardo", "Adam Smith", "Paul Samuelson"], bonne: 0, expl: "List (1841) propose de protéger une industrie le temps qu'elle grandisse. Ricardo et Smith sont des défenseurs du libre-échange.", niv: 1 },
        { q: "Les consommateurs européens aiment choisir entre de nombreuses marques de vêtements. Cela explique :", choix: ["l'avantage comparatif de Ricardo", "le commerce entre pays aux dotations opposées", "le commerce entre pays comparables", "l'échange de matières premières"], bonne: 2, expl: "Le goût pour la variété (différenciation) explique que des pays riches échangent des produits proches.", niv: 2 },
        { q: "Pourquoi ce sont surtout les firmes les plus productives qui exportent ?", choix: ["Elles seules ont le droit d'exporter", "Elles peuvent supporter les coûts d'accès aux marchés étrangers", "Elles reçoivent des subventions publiques réservées aux exportateurs", "Elles produisent surtout des biens de luxe vendus très cher à l'étranger"], bonne: 1, expl: "Exporter a un coût fixe (réseaux, normes, adaptation). Une forte productivité permet de le payer en restant rentable.", niv: 2 },
        { q: "Quel est un effet du commerce international souligné par le programme ?", choix: ["La réduction des inégalités au sein de chaque pays", "La hausse des prix pour les consommateurs", "La réduction des inégalités entre pays", "La disparition de la spécialisation"], bonne: 2, expl: "Le commerce a aidé des pays émergents à rattraper les pays riches. En revanche, il tend à accroître les inégalités à l'intérieur des pays.", niv: 1 },
        { q: "Dans un pays riche qui s'ouvre aux importations de textile, qui risque de perdre ?", choix: ["Les ingénieurs des secteurs exportateurs", "Les consommateurs de vêtements", "Les actionnaires des firmes exportatrices", "Les ouvriers peu qualifiés du textile"], bonne: 3, expl: "Les peu qualifiés des secteurs concurrencés subissent les pertes d'emploi : les inégalités internes augmentent. Les consommateurs, eux, profitent de prix plus bas.", niv: 3 },
        { q: "Un pays impose une taxe de 25 % sur l'acier importé. Le partenaire taxe en retour ses produits agricoles. Le risque est :", choix: ["une guerre commerciale", "une hausse de la compétitivité-prix", "une baisse des prix intérieurs de l'acier", "une meilleure spécialisation"], bonne: 0, expl: "Les représailles en chaîne caractérisent une guerre commerciale. Le droit de douane fait plutôt monter le prix de l'acier dans le pays.", niv: 3 },
        { q: "Un téléphone assemblé en Chine avec 90 % de pièces importées pèse lourd dans les exportations chinoises. Pourquoi est-ce trompeur ?", choix: ["Les exportations chinoises sont en réalité sous-estimées par les douanes", "Les douanes oublient de compter les composants", "La valeur des pièces importées est comptée dans l'export", "Le prix du téléphone n'est pas connu"], bonne: 2, expl: "Avec la fragmentation, la valeur des composants passe plusieurs frontières et est comptée plusieurs fois : la valeur ajoutée chinoise est bien plus faible.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- ses-3
    {
      chapitre: 'ses-3',
      fiche: `## Comment lutter contre le chômage ?

### Définir et mesurer
- Selon le **Bureau international du travail (BIT)**, un **chômeur** est une personne en âge de travailler (15 ans ou plus) qui remplit trois conditions : être **sans emploi** (pas même une heure pendant la semaine de référence), être **disponible** pour travailler dans les 15 jours, et **chercher activement** un emploi (ou en avoir trouvé un qui commence dans moins de 3 mois).
- **Population active** = personnes en emploi + chômeurs.
- **Taux de chômage** = chômeurs / population active × 100.
- **Taux d'emploi** = personnes en emploi / population en âge de travailler (souvent 15-64 ans) × 100.
- Exemple : 3 millions de chômeurs pour 30 millions d'actifs donnent un taux de chômage de 10 %.
- **Sous-emploi** : personnes qui travaillent moins qu'elles ne le voudraient (**temps partiel subi**, chômage technique).
- Le **halo autour du chômage** : des inactifs qui veulent un emploi mais ne remplissent pas toutes les conditions du BIT (par exemple, pas disponibles tout de suite).
- Piège : un taux de chômage qui baisse ne signifie pas forcément plus d'emplois. Il peut baisser parce que des chômeurs découragés deviennent inactifs.

### Le chômage structurel
- Le **chômage structurel** dure même quand l'économie va bien. Il vient du fonctionnement du marché du travail.
- **Problèmes d'appariement** : les offres et les demandes d'emploi ne se rencontrent pas bien.
- **Frictions** : il faut du temps pour trouver un emploi, même quand il en existe (chômage frictionnel).
- **Inadéquation des qualifications** : les chômeurs n'ont pas les compétences demandées. Exemple : des postes de soudeurs vacants alors que des chômeurs viennent d'autres métiers.
- **Inadéquation spatiale** : les emplois sont loin des chômeurs (logement cher, transports).
- **Asymétries d'information** : l'employeur ne connaît pas parfaitement l'effort du salarié. Il peut verser un **salaire d'efficience**, plus élevé que le salaire d'équilibre, pour motiver et fidéliser ses salariés. Mais ce salaire plus haut réduit le nombre d'embauches et crée du chômage.

### Les institutions et le chômage structurel
- **Salaire minimum (SMIC en France)** : il protège les bas salaires et soutient la consommation. Mais s'il dépasse la productivité de certains travailleurs peu qualifiés, il peut freiner leur embauche.
- **Règles de protection de l'emploi** (procédures et coûts de licenciement) : elles limitent les licenciements, mais peuvent rendre les employeurs prudents à l'embauche. Elles favorisent un marché **dual** : des salariés protégés (CDI) et d'autres précaires (CDD, intérim).
- Leurs effets sur le chômage peuvent donc être **positifs ou négatifs** : les études ne tranchent pas de façon unique.

### Le chômage conjoncturel
- Le **chômage conjoncturel** est lié aux **fluctuations de l'activité**. Quand la croissance ralentit ou qu'il y a une **récession**, les entreprises produisent moins et embauchent moins.
- **John Maynard Keynes** : les entreprises embauchent selon la **demande anticipée**. Une demande trop faible crée du chômage, même si les salaires baissent.
- Exemple : en 2020, la crise sanitaire a fait chuter la production et a provoqué un fort recours au chômage partiel.

### Les politiques de lutte contre le chômage
- **Politiques macroéconomiques de soutien de la demande globale** : contre le chômage **conjoncturel**. Politique **budgétaire** (hausse des dépenses publiques, baisse des impôts) et politique **monétaire** (baisse des taux d'intérêt). Limites : déficit et dette, contrainte européenne, hausse des importations.
- **Allègement du coût du travail** : baisse des **cotisations sociales** patronales, surtout sur les bas salaires, pour rendre l'embauche des peu qualifiés moins coûteuse. Limite : coût pour les finances publiques et **effets d'aubaine** (l'entreprise aurait embauché de toute façon).
- **Politiques de formation** : former les chômeurs aux métiers qui recrutent, pour réduire l'inadéquation des qualifications. Effet lent mais durable.
- **Politiques de flexibilisation** : assouplir les règles du marché du travail (contrats courts, procédures de licenciement simplifiées, temps de travail) pour lutter contre les **rigidités**. Limite : risque de **précarisation**.

### À retenir pour le bac
- Les trois critères du BIT et les deux formules : taux de chômage et taux d'emploi.
- Structurel (appariement, asymétries d'information, institutions) ou conjoncturel (fluctuations de l'activité) : chaque type appelle des politiques différentes.
- Le salaire d'efficience est une source de chômage structurel : question tombée au bac 2025 (métropole).
- Piège : relancer la demande ne règle pas l'inadéquation des qualifications.`,
      cartes: [
        { q: "Quelles sont les trois conditions pour être chômeur au sens du BIT ?", r: "Être sans emploi pendant la semaine de référence, être disponible dans les 15 jours, et chercher activement un emploi (ou en avoir trouvé un qui commence dans moins de 3 mois)." },
        { q: "Comment calcule-t-on le taux de chômage ?", r: "Nombre de chômeurs / population active × 100. La population active = personnes en emploi + chômeurs." },
        { q: "Comment calcule-t-on le taux d'emploi ?", r: "Nombre de personnes en emploi / population en âge de travailler (souvent 15-64 ans) × 100." },
        { q: "Qu'est-ce que le sous-emploi ?", r: "La situation de personnes qui travaillent moins qu'elles ne le souhaitent : temps partiel subi, chômage technique ou partiel." },
        { q: "Qu'est-ce que le halo autour du chômage ?", r: "Les inactifs qui souhaitent travailler mais ne remplissent pas tous les critères du BIT (pas disponibles tout de suite, ou ne cherchent pas activement)." },
        { q: "Chômage structurel ou conjoncturel ?", r: "Structurel : lié au fonctionnement du marché du travail, il dure même en période de croissance. Conjoncturel : lié au ralentissement de l'activité." },
        { q: "Qu'est-ce qu'un problème d'appariement ?", r: "Une mauvaise rencontre entre offres et demandes d'emploi : frictions (le temps de recherche), inadéquation des qualifications ou inadéquation spatiale." },
        { q: "Qu'est-ce qu'un salaire d'efficience ?", r: "Un salaire supérieur au salaire d'équilibre, versé pour motiver et fidéliser des salariés dont l'effort est mal observable. Il réduit les embauches." },
        { q: "Pourquoi les asymétries d'information créent-elles du chômage structurel ?", r: "L'employeur ne voit pas l'effort réel du salarié : il paie plus pour l'inciter à bien travailler. Ce salaire plus élevé limite le nombre d'emplois proposés." },
        { q: "Quel est l'effet ambigu du salaire minimum sur le chômage ?", r: "Il soutient le pouvoir d'achat et la demande, mais s'il dépasse la productivité de travailleurs peu qualifiés, il peut freiner leur embauche." },
        { q: "Pourquoi les règles de protection de l'emploi ont-elles un effet ambigu ?", r: "Elles limitent les licenciements, mais rendent les employeurs prudents à l'embauche et favorisent un marché dual (CDI protégés, précaires)." },
        { q: "Selon Keynes, de quoi dépend le niveau d'emploi ?", r: "De la demande anticipée par les entreprises. Une demande trop faible provoque du chômage involontaire." },
        { q: "Quelle politique vise le chômage conjoncturel ?", r: "Le soutien de la demande globale : politique budgétaire (dépenses publiques, baisse d'impôts) et politique monétaire (baisse des taux d'intérêt)." },
        { q: "Qu'est-ce qu'un effet d'aubaine ?", r: "Une entreprise profite d'une aide (allègement de cotisations, prime) pour une embauche qu'elle aurait faite de toute façon : l'argent public est dépensé sans effet." },
        { q: "Qu'est-ce que la flexibilisation du marché du travail ?", r: "L'assouplissement des règles (contrats, licenciements, temps de travail) pour réduire les rigidités. Risque : la précarisation." },
      ],
      quiz: [
        { q: "Une personne sans emploi, disponible, a déjà signé un contrat qui commence dans deux mois. Au sens du BIT, elle est :", choix: ["chômeuse", "en sous-emploi", "dans le halo autour du chômage", "active occupée"], bonne: 0, expl: "Le BIT compte comme chômeur une personne sans emploi et disponible qui a trouvé un emploi commençant dans moins de 3 mois. Elle n'est pas encore en emploi, donc pas active occupée.", niv: 3 },
        { q: "Sur 40 millions de personnes de 15-64 ans, 28 millions ont un emploi. Le taux d'emploi est de :", choix: ["57 %", "70 %", "43 %", "30 %"], bonne: 1, expl: "28 / 40 × 100 = 70 %. Le taux d'emploi rapporte l'emploi à toute la population en âge de travailler, pas aux seuls actifs.", niv: 2 },
        { q: "Un pays compte 2,4 millions de chômeurs et 30 millions d'actifs. Son taux de chômage est de :", choix: ["7,2 %", "12,5 %", "6 %", "8 %"], bonne: 3, expl: "2,4 / 30 × 100 = 8 %. On divise par la population active, chômeurs compris.", niv: 2 },
        { q: "Le temps partiel subi relève :", choix: ["du chômage au sens du BIT", "de l'inactivité", "du sous-emploi", "du chômage frictionnel"], bonne: 2, expl: "La personne travaille, donc elle n'est pas chômeuse, mais moins qu'elle le voudrait : c'est du sous-emploi.", niv: 1 },
        { q: "Des milliers de postes d'aides-soignants restent vacants alors que le chômage est élevé dans d'autres métiers. C'est surtout :", choix: ["du chômage conjoncturel", "un effet d'aubaine pour les employeurs", "une inadéquation des qualifications", "un salaire d'efficience"], bonne: 2, expl: "Les chômeurs n'ont pas les compétences demandées : c'est un problème d'appariement, source de chômage structurel.", niv: 2 },
        { q: "Une entreprise paie ses livreurs 15 % au-dessus du marché pour qu'ils restent et travaillent bien. C'est :", choix: ["un salaire d'efficience", "un salaire minimum", "un allègement du coût du travail", "une flexibilisation"], bonne: 0, expl: "Payer plus que l'équilibre pour motiver et fidéliser des salariés dont l'effort est mal observable : c'est le salaire d'efficience.", niv: 2 },
        { q: "Selon Keynes, les entreprises fixent leurs embauches surtout en fonction :", choix: ["du niveau du salaire minimum", "du coût du capital", "des règles de licenciement", "de la demande qu'elles anticipent"], bonne: 3, expl: "Pour Keynes, c'est la demande anticipée qui détermine la production et donc l'emploi.", niv: 1 },
        { q: "Quelle politique répond le mieux à un chômage conjoncturel ?", choix: ["Une hausse des dépenses publiques", "Une hausse des cotisations patronales", "Une réforme de la formation des chômeurs", "Un durcissement des règles de licenciement"], bonne: 0, expl: "Le chômage conjoncturel vient d'une demande trop faible : la relance budgétaire la soutient. La formation vise plutôt le chômage structurel.", niv: 2 },
        { q: "L'État baisse les cotisations patronales sur les salaires proches du SMIC. L'objectif est de :", choix: ["relancer la consommation des ménages les plus aisés", "réduire le coût du travail peu qualifié", "augmenter le salaire net des cadres du privé", "réduire les frictions sur le marché"], bonne: 1, expl: "Les allègements de cotisations sur les bas salaires rendent l'embauche des peu qualifiés moins chère pour l'employeur.", niv: 1 },
        { q: "Le taux de chômage baisse alors que l'emploi n'augmente pas. Quelle explication est possible ?", choix: ["Des chômeurs découragés deviennent inactifs", "Le sous-emploi a fortement diminué", "La population active a augmenté", "Le taux d'emploi a fortement monté"], bonne: 0, expl: "Si des chômeurs cessent de chercher, ils sortent de la population active : le chômage baisse sans création d'emploi.", niv: 3 },
        { q: "Pourquoi une politique de relance ne suffit-elle pas contre un chômage dû à l'inadéquation des qualifications ?", choix: ["Elle augmente surtout l'épargne des ménages", "Elle crée des emplois que les chômeurs ne peuvent pas occuper", "Elle est interdite par principe par les règles budgétaires de la zone euro", "Elle provoque une baisse générale des salaires"], bonne: 1, expl: "Plus de demande crée des postes, mais si les chômeurs n'ont pas les compétences, ils restent vacants : il faut former.", niv: 3 },
        { q: "Quel est le principal risque d'une forte protection de l'emploi selon ses critiques ?", choix: ["Une hausse des licenciements de salariés en CDI", "Un recul des embauches en contrats courts", "Une baisse du salaire minimum", "Un marché dual entre protégés et précaires"], bonne: 3, expl: "Les employeurs, prudents, embauchent en CDD ou intérim : d'un côté des CDI protégés, de l'autre des précaires. C'est le marché dual.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- ses-4
    {
      chapitre: 'ses-4',
      fiche: `## Les politiques économiques dans le cadre européen

### L'intégration européenne : marché unique et zone euro
- L'**intégration économique** est le rapprochement des économies de plusieurs pays, par étapes : zone de libre-échange, union douanière, marché commun, union économique et monétaire.
- Le **marché unique** (Acte unique de 1986, en place au 1er janvier 1993) garantit les **quatre libertés de circulation** : marchandises, services, capitaux et personnes.
- La **zone euro** est l'**union économique et monétaire** : les pays membres partagent une **monnaie unique**. L'euro existe depuis 1999 pour les banques et les marchés, et depuis 2002 en pièces et en billets. Tous les pays de l'Union européenne n'en font pas partie (le Danemark, la Suède ou la Pologne par exemple).

### Les effets du marché unique sur la croissance
- Plus de **concurrence** : les prix baissent et les entreprises sont poussées à innover.
- Des **économies d'échelle** : un marché de plus de 400 millions de consommateurs permet de produire en grande quantité, donc à coût unitaire plus faible.
- Plus d'**échanges** entre pays membres et une meilleure **spécialisation**.
- Exemple : une PME française peut vendre en Espagne sans droits de douane ni démarches nationales différentes.

### La politique européenne de la concurrence
- Objectif : protéger les **consommateurs** et l'efficacité du marché, en empêchant les entreprises de fausser la concurrence. Elle est conduite par la **Commission européenne**.
- Ses modalités :
- Interdire les **ententes** (des entreprises s'entendent sur les prix ou se partagent le marché).
- Sanctionner les **abus de position dominante** (une entreprise puissante impose ses conditions ou évince ses concurrents). Exemple : de très lourdes amendes infligées à de grandes entreprises du numérique.
- Contrôler les **concentrations** (fusions qui créeraient une entreprise trop puissante). Exemple : la fusion Siemens-Alstom a été refusée en 2019.
- Encadrer les **aides d'État** qui avantagent une entreprise nationale.
- Limites : elle peut empêcher l'apparition de **champions européens** capables d'affronter les géants américains ou chinois, et elle peut freiner une **politique industrielle**.

### Comment les politiques agissent sur la conjoncture
- La **conjoncture** est la situation économique à court terme (croissance, chômage, inflation).
- **Politique monétaire** : la banque centrale fait varier ses **taux directeurs**. Les baisser rend le crédit moins cher, ce qui soutient la consommation et l'investissement (relance). Les augmenter freine le crédit et l'**inflation**.
- **Politique budgétaire** : l'État utilise les dépenses publiques et les impôts. En période de crise, il peut accepter un **déficit** pour soutenir la demande. Grâce à l'**effet multiplicateur** (Keynes), une dépense publique peut entraîner une hausse plus forte du PIB.
- Les **stabilisateurs automatiques** jouent sans décision : en récession, les impôts rentrent moins et les allocations chômage augmentent, ce qui soutient la demande.
- Le **policy mix** est la combinaison des deux politiques.

### La zone euro : une politique monétaire unique, des politiques budgétaires nationales
- La politique monétaire est **unique** : elle est conduite par la **Banque centrale européenne (BCE)**, qui est **indépendante** des gouvernements. Son objectif principal est la **stabilité des prix** (une inflation de 2 % à moyen terme).
- La politique budgétaire reste du ressort de **chaque pays**, mais elle est **contrainte par les traités** : critères de Maastricht (déficit public de 3 % du PIB au plus, dette publique de 60 % du PIB au plus), repris par le **Pacte de stabilité et de croissance** (1997), réformé depuis.
- Exemple : en 2020, face à la crise sanitaire, ces règles ont été suspendues pour laisser les États dépenser.

### Les difficultés de cette situation
- **Choc asymétrique** : un choc qui touche un pays plus que les autres. La BCE fixe un seul taux pour tous : il peut être trop haut pour un pays en crise et trop bas pour un pays en surchauffe. Le pays touché ne peut ni baisser ses taux ni dévaluer.
- **Défaut de coordination** : chaque pays mène sa politique budgétaire seul. Un pays peut être tenté de jouer le **passager clandestin** : profiter de la relance de ses voisins sans dépenser lui-même, ou laisser filer sa dette en comptant sur la crédibilité de l'euro.
- Le budget européen est faible : il ne peut pas compenser les chocs comme un budget fédéral.

### À retenir pour le bac
- Marché unique (quatre libertés) et zone euro (monnaie unique, BCE) : deux étages différents de l'intégration.
- Politique de la concurrence : ententes, abus de position dominante, concentrations, aides d'État ; limite des champions européens.
- Une politique monétaire unique, des politiques budgétaires nationales mais encadrées : chocs asymétriques et défaut de coordination.
- Sujet tombé au bac 2025 (métropole) : « Dans quelle mesure les politiques monétaire et budgétaire parviennent-elles à agir sur la conjoncture des pays membres de la zone euro ? »`,
      cartes: [
        { q: "Quelles sont les quatre libertés du marché unique ?", r: "La libre circulation des marchandises, des services, des capitaux et des personnes." },
        { q: "Quand le marché unique et l'euro sont-ils entrés en vigueur ?", r: "Marché unique : 1er janvier 1993 (Acte unique de 1986). Euro : 1999 pour les marchés, 2002 en pièces et billets." },
        { q: "Pourquoi le marché unique favorise-t-il la croissance ?", r: "Il accroît la concurrence (baisse des prix, innovation) et permet des économies d'échelle grâce à un très grand marché." },
        { q: "Qu'est-ce qu'une entente ?", r: "Un accord secret entre entreprises concurrentes pour fixer les prix ou se partager le marché. Elle est interdite par la politique de la concurrence." },
        { q: "Qu'est-ce qu'un abus de position dominante ?", r: "Une entreprise très puissante sur un marché utilise ce pouvoir pour imposer ses conditions ou évincer ses concurrents." },
        { q: "Qui conduit la politique européenne de la concurrence ?", r: "La Commission européenne. Elle peut sanctionner les entreprises et interdire des fusions." },
        { q: "Quelle est la principale limite de la politique de la concurrence ?", r: "Elle peut empêcher l'apparition de champions européens capables d'affronter les grandes firmes américaines et chinoises." },
        { q: "Comment la politique monétaire agit-elle sur la conjoncture ?", r: "La banque centrale fait varier ses taux directeurs : les baisser rend le crédit moins cher et relance l'activité ; les monter freine l'inflation." },
        { q: "Qu'est-ce que l'effet multiplicateur ?", r: "Idée keynésienne : une dépense publique supplémentaire entraîne une hausse du PIB plus forte qu'elle, car les revenus distribués sont à leur tour dépensés." },
        { q: "Que sont les stabilisateurs automatiques ?", r: "Les recettes et dépenses publiques qui varient seules avec la conjoncture : en récession, les impôts baissent et les allocations augmentent, ce qui soutient la demande." },
        { q: "Quel est l'objectif principal de la BCE ?", r: "La stabilité des prix : une inflation de 2 % à moyen terme. La BCE est indépendante des gouvernements." },
        { q: "Quels sont les deux critères budgétaires de Maastricht ?", r: "Un déficit public de 3 % du PIB au plus et une dette publique de 60 % du PIB au plus." },
        { q: "Qu'est-ce qu'un choc asymétrique ?", r: "Un choc économique qui touche un pays (ou une région) beaucoup plus que les autres membres d'une même zone monétaire." },
        { q: "Pourquoi parle-t-on de défaut de coordination dans la zone euro ?", r: "Chaque pays mène sa politique budgétaire seul, sans tenir compte des autres, et peut jouer le passager clandestin." },
        { q: "Qu'est-ce que le policy mix ?", r: "La combinaison de la politique monétaire et de la politique budgétaire." },
      ],
      quiz: [
        { q: "Le marché unique européen garantit la libre circulation :", choix: ["des marchandises et des services", "des marchandises, services, capitaux et personnes", "des capitaux et de la monnaie unique", "des personnes, des capitaux et des politiques budgétaires"], bonne: 1, expl: "Ce sont les quatre libertés. La monnaie unique, elle, relève de la zone euro, un autre étage de l'intégration.", niv: 1 },
        { q: "Qui fixe les taux directeurs dans la zone euro ?", choix: ["La Commission européenne", "Le Parlement européen", "La Banque centrale européenne", "Chaque banque centrale nationale"], bonne: 2, expl: "La politique monétaire est unique et confiée à la BCE, indépendante. La Commission s'occupe notamment de la concurrence.", niv: 1 },
        { q: "Deux fabricants de ciment se mettent d'accord pour vendre au même prix élevé. La Commission européenne sanctionne :", choix: ["une concentration", "une aide d'État", "un abus de position dominante", "une entente"], bonne: 3, expl: "Un accord entre concurrents pour fixer les prix, c'est une entente. L'abus de position dominante concerne une seule entreprise très puissante.", niv: 2 },
        { q: "La Commission européenne refuse la fusion de deux grands groupes ferroviaires. Elle exerce le contrôle :", choix: ["des concentrations", "des ententes", "des aides d'État", "du budget européen"], bonne: 0, expl: "Une fusion est une concentration : la Commission peut l'interdire si elle réduit trop la concurrence (cas Siemens-Alstom en 2019).", niv: 2 },
        { q: "Quel critère budgétaire fixe le traité de Maastricht ?", choix: ["Une inflation de 3 % au plus", "Un déficit public de 3 % du PIB au plus", "Une dette publique de 3 % du PIB au plus", "Un taux directeur de 2 % au plus"], bonne: 1, expl: "Déficit de 3 % du PIB et dette de 60 % du PIB au plus. L'objectif d'inflation de 2 % est celui de la BCE, pas un critère budgétaire.", niv: 1 },
        { q: "En pleine récession, la BCE baisse ses taux directeurs. L'effet attendu est :", choix: ["une hausse du coût du crédit", "une baisse de l'investissement", "une relance de l'investissement", "une hausse du chômage conjoncturel"], bonne: 2, expl: "Des taux plus bas rendent le crédit moins cher : ménages et entreprises empruntent pour consommer et investir.", niv: 2 },
        { q: "Pendant une récession, les recettes de l'impôt baissent et les allocations chômage augmentent sans aucune décision. Ce sont :", choix: ["des stabilisateurs automatiques", "des effets d'aubaine", "des politiques de rigueur", "des chocs asymétriques"], bonne: 0, expl: "Ces variations se font seules et soutiennent la demande : ce sont les stabilisateurs automatiques.", niv: 2 },
        { q: "Un État dépense 10 milliards et le PIB augmente de 15 milliards. Cela illustre :", choix: ["l'effet rebond", "le policy mix", "le passager clandestin", "l'effet multiplicateur"], bonne: 3, expl: "La hausse du PIB est plus forte que la dépense initiale : c'est le multiplicateur keynésien.", niv: 2 },
        { q: "Seule l'Espagne subit une forte crise de son secteur touristique. Pourquoi la BCE ne peut-elle pas l'aider spécifiquement ?", choix: ["Elle n'a pas le droit de modifier ses taux", "Elle fixe un même taux pour toute la zone euro", "Elle dépend du gouvernement espagnol", "Elle ne s'occupe que de la concurrence"], bonne: 1, expl: "C'est un choc asymétrique : la politique monétaire unique ne peut pas s'adapter à un seul pays.", niv: 3 },
        { q: "Un pays de la zone euro ne relance pas et profite de la relance de ses voisins, qui lui achètent plus. C'est :", choix: ["un effet multiplicateur", "une entente entre pays", "un comportement de passager clandestin", "un choc asymétrique"], bonne: 2, expl: "Il bénéficie de l'effort des autres sans le payer : c'est le passager clandestin, signe d'un défaut de coordination.", niv: 3 },
        { q: "Quelle critique adresse-t-on à la politique européenne de la concurrence ?", choix: ["Elle freine l'apparition de champions européens", "Elle fait monter les prix payés par les consommateurs", "Elle est conduite par la BCE", "Elle impose une monnaie unique à toute l'Union européenne"], bonne: 0, expl: "En bloquant certaines fusions, elle peut empêcher de créer des groupes européens capables de rivaliser avec les géants mondiaux.", niv: 3 },
        { q: "Dans la zone euro, la politique budgétaire est :", choix: ["unique et confiée à la BCE", "fixée par le Parlement européen", "libre de toute règle commune aux pays membres", "nationale mais encadrée par des règles"], bonne: 3, expl: "Chaque État décide de son budget, mais il doit respecter les règles européennes (Pacte de stabilité et de croissance).", niv: 1 },
      ],
    },
    // ---------------------------------------------------------------- ses-5
    {
      chapitre: 'ses-5',
      fiche: `## Comment est structurée la société française actuelle ?

### Les facteurs qui structurent et hiérarchisent l'espace social
- L'**espace social** est l'ensemble des positions occupées par les individus dans la société. Il est **structuré** (des groupes se distinguent) et **hiérarchisé** (certaines positions sont plus favorables).
- Les facteurs au programme :
- **Catégorie socioprofessionnelle** (PCS) : le métier et le statut.
- **Revenu** et **patrimoine** : un cadre gagne en moyenne bien plus qu'un ouvrier.
- **Diplôme** : il ouvre l'accès aux emplois qualifiés.
- **Composition du ménage** : une famille monoparentale a un niveau de vie plus faible en moyenne.
- **Position dans le cycle de vie** : le patrimoine augmente avec l'âge.
- **Sexe** : à poste égal, les femmes gagnent encore moins en moyenne et sont moins présentes aux postes de direction.
- **Lieu de résidence** : quartiers favorisés ou défavorisés, ville ou campagne.

### Les PCS de l'Insee
- L'**Insee** classe la population dans des **professions et catégories socioprofessionnelles (PCS)**. Pour les personnes en emploi, il y a **six groupes** : agriculteurs exploitants ; artisans, commerçants et chefs d'entreprise ; cadres et professions intellectuelles supérieures ; professions intermédiaires ; employés ; ouvriers.
- Le classement tient compte du métier, du statut (salarié ou indépendant), de la qualification et de la position hiérarchique.

### Les évolutions de la structure socioprofessionnelle depuis 1950
- **Salarisation** : la part des salariés dans l'emploi a fortement augmenté (près de 9 emplois sur 10 aujourd'hui), car les petits indépendants (agriculteurs, commerçants) ont reculé.
- **Tertiarisation** : la plupart des emplois sont désormais dans les **services** ; les agriculteurs et les ouvriers ont fortement reculé.
- **Élévation du niveau de qualification** : la part des cadres et des professions intermédiaires a beaucoup augmenté, en lien avec la hausse des diplômes.
- **Féminisation** : les femmes représentent environ la moitié de la population active, surtout dans les emplois de services (employées).
- Exemple : en 1982, les ouvriers étaient plus nombreux que les cadres ; aujourd'hui, les cadres sont aussi nombreux, voire plus nombreux, que les ouvriers.

### Les classes sociales chez Marx
- Pour **Karl Marx**, une **classe sociale** se définit par sa **place dans les rapports de production** : les **bourgeois** (capitalistes) possèdent les moyens de production, les **prolétaires** n'ont que leur force de travail.
- Les deux classes sont en **lutte** : le capitaliste s'approprie la **plus-value** produite par l'ouvrier.
- **Classe en soi** : un groupe qui partage les mêmes conditions d'existence. **Classe pour soi** : ce groupe prend **conscience** de ses intérêts communs et s'organise pour les défendre.
- C'est une approche **réaliste** : les classes existent vraiment et s'opposent.

### La stratification sociale chez Weber
- Pour **Max Weber**, la société est hiérarchisée selon **trois dimensions** (ou ordres) :
- l'ordre **économique** : les **classes**, selon les chances d'accès aux biens et aux revenus ;
- l'ordre **social** : les **groupes de statut**, selon le **prestige** et l'honneur social ;
- l'ordre **politique** : les **partis**, selon l'accès au pouvoir.
- C'est une approche **nominaliste** et **multidimensionnelle** : un individu peut être bien placé sur une dimension et moins sur une autre (un prêtre a du prestige sans être riche).

### Les classes sociales sont-elles encore pertinentes ?
- **Arguments contre** :
- **Réduction des distances inter-classes** : hausse générale du niveau de vie, accès de tous à la consommation de masse, scolarisation. On a parlé de **moyennisation** (Henri **Mendras**, une vaste « constellation centrale »).
- **Distances intra-classes** : au sein d'un même groupe, les situations sont de plus en plus variées (ouvriers en CDI ou en intérim, cadres du privé ou du public).
- **Identifications subjectives** plus faibles : moins de gens se disent appartenir à une classe sociale ; le **sentiment d'appartenance** recule.
- **Individualisation** : les individus se définissent davantage par leurs choix personnels.
- **Articulation avec le genre** : les **rapports sociaux de genre** traversent les classes (une ouvrière ne vit pas la même chose qu'un ouvrier).
- **Arguments pour** :
- Les **inégalités** de patrimoine restent très fortes et se transmettent.
- La **classe supérieure** reste très consciente d'elle-même et mobilisée pour défendre ses intérêts.
- Des écarts persistent dans la santé, l'espérance de vie, la réussite scolaire selon le milieu.

### À retenir pour le bac
- Les quatre évolutions : salarisation, tertiarisation, élévation des qualifications, féminisation des emplois.
- Marx (rapports de production, classe en soi et pour soi) et Weber (trois ordres : classes, groupes de statut, partis).
- Le débat sur la pertinence des classes : distances inter- et intra-classes, genre, identification subjective, individualisation.
- Tombé au bac 2025 (métropole) : « Une approche en termes de classes sociales suffit-elle à rendre compte de la structure de la société française actuelle ? »`,
      cartes: [
        { q: "Cite les sept facteurs de structuration de l'espace social au programme.", r: "La PCS, le revenu, le diplôme, la composition du ménage, la position dans le cycle de vie, le sexe et le lieu de résidence." },
        { q: "Quels sont les six groupes de PCS des personnes en emploi ?", r: "Agriculteurs exploitants ; artisans, commerçants, chefs d'entreprise ; cadres et professions intellectuelles supérieures ; professions intermédiaires ; employés ; ouvriers." },
        { q: "Qu'est-ce que la salarisation ?", r: "La hausse de la part des salariés dans l'emploi total, liée au recul des indépendants (agriculteurs, petits commerçants)." },
        { q: "Qu'est-ce que la tertiarisation des emplois ?", r: "La hausse de la part des emplois dans les services, au détriment de l'agriculture et de l'industrie." },
        { q: "Que signifie la féminisation des emplois ?", r: "La hausse de la part des femmes dans la population active, aujourd'hui environ la moitié, surtout dans les services." },
        { q: "Comment Marx définit-il une classe sociale ?", r: "Par sa place dans les rapports de production : propriétaires des moyens de production (bourgeoisie) ou vendeurs de leur force de travail (prolétariat)." },
        { q: "Classe en soi ou classe pour soi ?", r: "En soi : groupe aux conditions d'existence communes. Pour soi : groupe qui a pris conscience de ses intérêts et se mobilise." },
        { q: "Quelles sont les trois dimensions de la stratification chez Weber ?", r: "L'ordre économique (classes), l'ordre social (groupes de statut, prestige) et l'ordre politique (partis)." },
        { q: "Qu'est-ce qu'un groupe de statut chez Weber ?", r: "Un groupe défini par le prestige ou l'honneur social qu'on lui reconnaît, et par un style de vie commun." },
        { q: "Approche réaliste ou nominaliste des classes ?", r: "Réaliste (Marx) : les classes existent réellement et s'opposent. Nominaliste (Weber) : le chercheur construit des catégories pour classer." },
        { q: "Qu'est-ce que la moyennisation ?", r: "L'idée (Mendras) que la société s'organise autour d'une vaste classe moyenne, car les écarts de mode de vie se réduisent." },
        { q: "Distances inter-classes et intra-classes : quelle différence ?", r: "Inter : écarts entre les classes. Intra : écarts à l'intérieur d'une même classe. Les classes perdent de leur sens si les premiers se réduisent et les seconds s'accroissent." },
        { q: "Pourquoi le genre complique-t-il l'analyse en classes ?", r: "Les rapports sociaux de genre traversent toutes les classes : à classe égale, femmes et hommes n'ont pas les mêmes salaires ni les mêmes carrières." },
        { q: "Qu'est-ce que l'identification subjective à un groupe social ?", r: "Le sentiment d'appartenir à une classe ou à un groupe. Il recule en France, ce qui affaiblit la classe pour soi." },
        { q: "Donne un argument montrant que les classes restent pertinentes.", r: "Les inégalités de patrimoine restent fortes et se transmettent, et la classe supérieure reste très consciente de ses intérêts et mobilisée." },
      ],
      quiz: [
        { q: "Pour Marx, ce qui définit une classe sociale est :", choix: ["le niveau de revenu", "le prestige social attaché au métier exercé", "la place dans les rapports de production", "la conscience d'appartenir à un groupe"], bonne: 2, expl: "Marx raisonne sur la propriété des moyens de production. Le prestige renvoie à Weber (groupes de statut).", niv: 1 },
        { q: "Chez Weber, le prestige et l'honneur social définissent :", choix: ["les partis", "les classes", "les groupes de statut", "les classes pour soi"], bonne: 2, expl: "L'ordre social de Weber regroupe les groupes de statut. Les classes relèvent de l'ordre économique.", niv: 1 },
        { q: "Un professeur d'université a beaucoup de prestige mais un revenu moyen. Cette situation s'analyse le mieux avec :", choix: ["l'approche multidimensionnelle de Weber", "l'opposition entre bourgeois et prolétaires de Marx", "l'idée de moyennisation de Mendras", "la notion de classe pour soi"], bonne: 0, expl: "Weber distingue plusieurs dimensions : on peut être haut sur l'une (prestige) et moins sur l'autre (revenu).", niv: 2 },
        { q: "Des ouvriers d'une usine prennent conscience de leurs intérêts communs et créent un syndicat. Ils forment :", choix: ["une classe en soi", "une classe pour soi", "un groupe de statut", "une strate de revenu"], bonne: 1, expl: "La conscience de classe et la mobilisation font passer de la classe en soi à la classe pour soi.", niv: 2 },
        { q: "Depuis 1950, quelle évolution de l'emploi en France est juste ?", choix: ["La part des ouvriers a augmenté", "La part des indépendants a augmenté", "La part des femmes actives a baissé", "La part des salariés a augmenté"], bonne: 3, expl: "C'est la salarisation. Les ouvriers et les indépendants ont reculé, les femmes actives ont fortement progressé.", niv: 1 },
        { q: "Un graphique montre que les agriculteurs passent de 7 % à 1,5 % des emplois, et les employés de services progressent. Il illustre surtout :", choix: ["la féminisation", "la tertiarisation", "la moyennisation", "la salarisation seule"], bonne: 1, expl: "Le recul de l'agriculture au profit des emplois de services est la tertiarisation.", niv: 2 },
        { q: "Les écarts de salaires entre ouvriers en CDI et ouvriers intérimaires se creusent. Cela renvoie à :", choix: ["la réduction des distances inter-classes", "l'identification subjective", "l'accroissement des distances intra-classes", "la classe pour soi"], bonne: 2, expl: "Les écarts grandissent à l'intérieur d'un même groupe : ce sont les distances intra-classes.", niv: 2 },
        { q: "Quel argument soutient la thèse de la moyennisation ?", choix: ["La forte concentration du patrimoine", "La mobilisation de la grande bourgeoisie", "Les écarts d'espérance de vie selon la catégorie sociale", "L'accès de presque tous à la consommation de masse"], bonne: 3, expl: "La diffusion de la consommation de masse a rapproché les modes de vie. Les trois autres arguments montrent au contraire que les classes persistent.", niv: 2 },
        { q: "Dans une enquête, de moins en moins de personnes disent appartenir à une classe sociale. Cela affaiblit surtout :", choix: ["la classe en soi", "la classe pour soi", "les distances inter-classes", "la hiérarchie des revenus"], bonne: 1, expl: "Le sentiment d'appartenance est la dimension subjective : sans lui, la classe pour soi s'efface, même si les conditions objectives restent.", niv: 3 },
        { q: "Pourquoi les rapports sociaux de genre remettent-ils en cause une analyse seulement en termes de classes ?", choix: ["Les femmes forment une classe sociale à part entière", "Les inégalités entre sexes traversent chaque classe", "Les hommes ont la même PCS que leur père", "Le genre remplace la PCS dans les statistiques"], bonne: 1, expl: "À classe égale, femmes et hommes n'ont pas les mêmes salaires ni carrières : la classe ne suffit pas à décrire leur position.", niv: 3 },
        { q: "Quel facteur de structuration n'est **pas** cité par le programme ?", choix: ["La composition du ménage", "La position dans le cycle de vie", "Le lieu de résidence", "La religion pratiquée"], bonne: 3, expl: "Le programme cite PCS, revenu, diplôme, composition du ménage, cycle de vie, sexe et lieu de résidence.", niv: 1 },
        { q: "Pourquoi une approche en classes sociales garde-t-elle de la pertinence aujourd'hui ?", choix: ["Les inégalités de patrimoine restent fortes et héritées", "Les différentes PCS ont désormais des revenus très proches", "Le sentiment d'appartenance à une classe progresse partout", "La part des ouvriers augmente depuis 1980"], bonne: 0, expl: "La forte concentration du patrimoine et sa transmission montrent que des clivages de classe persistent.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- ses-6
    {
      chapitre: 'ses-6',
      fiche: `## Les caractéristiques et les facteurs de la mobilité sociale

### Les formes de mobilité
- La **mobilité sociale** est le changement de position sociale d'un individu.
- **Mobilité intergénérationnelle** : on compare la position d'un individu à celle de ses **parents**. C'est celle qu'étudie surtout ce chapitre. Exemple : une fille d'ouvrier devient cadre.
- **Mobilité intragénérationnelle** (ou **professionnelle**) : changement de position au cours de la **carrière** d'un même individu. Exemple : un employé devient chef de rayon.
- **Mobilité géographique** : changement de lieu de résidence. Elle n'est pas une mobilité sociale en elle-même.
- **Mobilité ascendante** (on monte), **descendante** ou **déclassement** (on descend), **horizontale** (on change de groupe sans monter ni descendre).
- **Reproduction sociale** (ou immobilité) : on occupe la même position que ses parents.

### Les tables de mobilité
- Une **table de mobilité** est un tableau à double entrée qui croise la **position sociale des individus** (groupe socioprofessionnel, vers 35-59 ans) et celle de leur **parent** (souvent le père). L'Insee la construit à partir de l'enquête **Formation et qualification professionnelle (FQP)**.
- **Table de destinée** : on part de l'**origine**. Elle répond à la question « Que deviennent les enfants d'ouvriers ? ». Exemple de lecture : sur 100 fils d'ouvriers, 46 sont ouvriers (chiffre fictif).
- **Table de recrutement** : on part de la **position actuelle**. Elle répond à « D'où viennent les cadres ? ». Exemple : sur 100 cadres, 12 sont fils d'ouvriers (chiffre fictif).
- On passe de la table des effectifs à ces tables en calculant des **pourcentages de répartition** (en ligne ou en colonne selon la présentation).
- La **diagonale** donne l'immobilité : les individus restés dans le même groupe que leur parent.
- **Intérêts** : mesurer l'ampleur de la mobilité, repérer la reproduction, comparer dans le temps.
- **Limites** : longtemps centrées sur les **hommes** et le **père** ; six groupes très larges qui cachent des mobilités internes (un instituteur fils d'ouvrier dont le fils devient médecin) ; la hiérarchie entre certains groupes est discutable (artisans et professions intermédiaires) ; la position des parents est mesurée à un âge différent.

### Mobilité observée, structurelle et fluidité
- La **mobilité observée** (ou brute) est la part des individus dont la position diffère de celle de leur parent.
- Une partie est **structurelle** : elle est **imposée** par l'évolution de la structure des emplois. Exemple : comme il y a beaucoup moins d'agriculteurs qu'avant, beaucoup de fils d'agriculteurs ont forcément changé de groupe.
- La **fluidité sociale** mesure la mobilité **relative**, indépendamment des changements de structure. On compare les **chances relatives** d'accès : par exemple, la chance pour un enfant de cadre d'être cadre plutôt qu'ouvrier, comparée à celle d'un enfant d'ouvrier (on calcule un **rapport des chances relatives**).
- Une **société plus mobile n'est pas forcément plus fluide** : si la mobilité augmente seulement parce que la structure change, l'égalité des chances ne progresse pas. En France, la fluidité augmente lentement.

### Les spécificités de la mobilité des femmes
- Comparées à leur **mère**, les femmes connaissent souvent une mobilité **ascendante**, car beaucoup de mères étaient inactives ou employées.
- Comparées à leur **père**, elles connaissent plus souvent une mobilité **descendante** ou horizontale (beaucoup de filles d'ouvriers deviennent employées).
- La **ségrégation professionnelle** (métiers féminisés comme employée) explique ces résultats.

### Les facteurs de la mobilité
- **L'évolution de la structure socioprofessionnelle** : la hausse du nombre de cadres et de professions intermédiaires « aspire » des enfants de milieux populaires vers le haut (mobilité structurelle).
- **Les niveaux de formation** : le **diplôme** est la principale porte d'accès aux positions élevées. Mais avec la **massification scolaire**, les diplômes sont plus nombreux que les bonnes places : un diplôme plus élevé que celui de ses parents ne garantit pas une position plus élevée (**paradoxe d'Anderson**, 1961). Certains se sentent alors **déclassés**.
- **Les ressources familiales** : les familles transmettent un **capital économique** (patrimoine, aide pour les études), un **capital culturel** (savoirs, diplômes, rapport à l'école) et un **capital social** (réseau de relations), selon Pierre **Bourdieu**.
- **Les configurations familiales** : la taille de la fratrie, le rang de naissance, la séparation des parents ou la présence d'un parent seul influencent les ressources disponibles et les choix d'orientation.
- Exemple : un enfant dont les parents connaissent les filières sélectives sera mieux orienté, à résultats scolaires égaux.

### À retenir pour le bac
- Savoir lire une table de destinée (ligne : que deviennent les enfants de…) et une table de recrutement (colonne : d'où viennent les…).
- Distinguer mobilité observée, mobilité structurelle et fluidité sociale : plus mobile ne veut pas dire plus fluide.
- Trois facteurs : structure socioprofessionnelle, formation, ressources et configurations familiales.
- Piège : la mobilité géographique ou professionnelle n'est pas la mobilité intergénérationnelle.`,
      cartes: [
        { q: "Qu'est-ce que la mobilité sociale intergénérationnelle ?", r: "Le changement de position sociale d'un individu par rapport à celle de ses parents." },
        { q: "Mobilité intragénérationnelle : définition ?", r: "Le changement de position sociale au cours de la vie professionnelle d'un même individu. On l'appelle aussi mobilité professionnelle." },
        { q: "Qu'est-ce que le déclassement ?", r: "Une mobilité descendante : occuper une position sociale inférieure à celle de ses parents (ou inférieure à ce que permettait son diplôme)." },
        { q: "Qu'est-ce qu'une table de mobilité ?", r: "Un tableau à double entrée qui croise la position sociale des individus et celle de leur parent, à partir de l'enquête FQP de l'Insee." },
        { q: "Que permet une table de destinée ?", r: "De savoir ce que deviennent les individus d'une même origine sociale. Exemple : sur 100 enfants d'ouvriers, combien deviennent cadres." },
        { q: "Que permet une table de recrutement ?", r: "De savoir d'où viennent les membres d'un groupe social. Exemple : sur 100 cadres, combien ont un père ouvrier." },
        { q: "Que représente la diagonale d'une table de mobilité ?", r: "L'immobilité sociale (reproduction) : les individus qui appartiennent au même groupe que leur parent." },
        { q: "Cite deux limites des tables de mobilité.", r: "Elles ont longtemps comparé seulement pères et fils ; les six groupes sont larges et cachent des mobilités internes." },
        { q: "Qu'est-ce que la mobilité structurelle ?", r: "La part de la mobilité imposée par l'évolution de la structure des emplois entre la génération des parents et celle des enfants." },
        { q: "Qu'est-ce que la fluidité sociale ?", r: "La mobilité relative : elle compare les chances d'accès aux positions selon l'origine, indépendamment des changements de structure." },
        { q: "Pourquoi une société plus mobile n'est-elle pas forcément plus fluide ?", r: "Parce que la hausse de la mobilité peut venir seulement du changement de structure des emplois, sans que l'égalité des chances progresse." },
        { q: "Quelle est la spécificité de la mobilité des femmes ?", r: "Par rapport à leur mère, elles sont souvent en mobilité ascendante ; par rapport à leur père, plus souvent en mobilité descendante ou horizontale." },
        { q: "Qu'est-ce que le paradoxe d'Anderson ?", r: "Avoir un diplôme plus élevé que ses parents ne garantit pas une position sociale plus élevée, car les diplômes se sont multipliés plus vite que les bonnes places." },
        { q: "Quels capitaux les familles transmettent-elles selon Bourdieu ?", r: "Le capital économique (argent, patrimoine), le capital culturel (savoirs, diplômes) et le capital social (réseau de relations)." },
        { q: "Qu'appelle-t-on configurations familiales ?", r: "La structure de la famille : taille de la fratrie, rang de naissance, parents séparés ou famille monoparentale. Elles influencent les ressources et les choix." },
      ],
      quiz: [
        { q: "Une infirmière devient cadre de santé dix ans après son embauche. C'est une mobilité :", choix: ["intergénérationnelle", "géographique", "intragénérationnelle", "structurelle"], bonne: 2, expl: "Le changement a lieu au cours de sa propre carrière : mobilité intragénérationnelle, ou professionnelle.", niv: 1 },
        { q: "Une table de destinée répond à la question :", choix: ["que deviennent les enfants d'un même milieu ?", "d'où viennent les membres d'un groupe ?", "combien d'emplois a créé chaque groupe social ?", "quelle est la part de chaque groupe dans l'emploi ?"], bonne: 0, expl: "La destinée part de l'origine sociale. La question « d'où viennent… » est celle de la table de recrutement.", niv: 1 },
        { q: "« Sur 100 cadres, 10 ont un père ouvrier. » Cette donnée est tirée d'une table :", choix: ["de destinée", "de recrutement", "de fluidité", "d'effectifs bruts"], bonne: 1, expl: "On part des cadres actuels pour voir leur origine : c'est une table de recrutement.", niv: 2 },
        { q: "Dans une table de mobilité, la diagonale correspond :", choix: ["à la mobilité ascendante", "au déclassement", "à la mobilité structurelle", "à l'immobilité sociale"], bonne: 3, expl: "Sur la diagonale, origine et position sont dans le même groupe : c'est la reproduction sociale.", niv: 1 },
        { q: "Sur 2 000 fils d'agriculteurs, 500 sont agriculteurs. En destinée, la part qui reste agriculteur est de :", choix: ["25 %", "40 %", "50 %", "4 %"], bonne: 0, expl: "500 / 2 000 × 100 = 25 %. On divise par l'effectif de l'origine, car c'est une destinée.", niv: 2 },
        { q: "Le nombre d'agriculteurs a été divisé par 4 en deux générations. Beaucoup de fils d'agriculteurs ont donc changé de groupe. C'est surtout de la mobilité :", choix: ["descendante", "nette", "structurelle", "géographique"], bonne: 2, expl: "Ce changement est imposé par la transformation de la structure des emplois : mobilité structurelle.", niv: 2 },
        { q: "Une fille d'ouvrier devient employée. Comparée à son père, sa mobilité est le plus souvent jugée :", choix: ["fortement ascendante", "plutôt horizontale", "nulle par définition", "d'abord structurelle puis ascendante"], bonne: 1, expl: "Employés et ouvriers sont souvent placés au même niveau de la hiérarchie sociale : c'est une mobilité horizontale, fréquente chez les filles d'ouvriers.", niv: 2 },
        { q: "Un fils de cadre a un master, comme son père un bac. Il devient pourtant profession intermédiaire. Cela illustre :", choix: ["le paradoxe d'Anderson", "le rapport des chances relatives", "la mobilité structurelle", "la reproduction sociale"], bonne: 0, expl: "Un diplôme plus élevé que celui du parent ne garantit pas une position plus élevée : c'est le paradoxe d'Anderson.", niv: 2 },
        { q: "Deux enfants ont les mêmes notes. Celui dont les parents connaissent bien les filières sélectives est mieux orienté. Cela illustre le rôle :", choix: ["du capital économique", "de la mobilité structurelle", "du capital culturel", "du capital physique"], bonne: 2, expl: "La connaissance du système scolaire fait partie du capital culturel transmis par la famille (Bourdieu).", niv: 2 },
        { q: "La mobilité observée augmente, mais les chances relatives des enfants d'ouvriers et de cadres restent identiques. On en déduit que :", choix: ["la société est devenue plus fluide", "la reproduction sociale a disparu chez les enfants d'ouvriers", "la hausse vient seulement du changement de structure", "la mobilité structurelle a reculé"], bonne: 2, expl: "Sans hausse de la fluidité, la mobilité supplémentaire vient de la structure des emplois : une société plus mobile n'est pas forcément plus fluide.", niv: 3 },
        { q: "Pourquoi les femmes semblent-elles plus souvent en mobilité ascendante quand on les compare à leur mère ?", choix: ["Les mères étaient souvent inactives ou employées", "Les tables comparent les filles à leur père", "Les femmes deviennent surtout ouvrières qualifiées dans l'industrie", "La fluidité est totale pour les femmes"], bonne: 0, expl: "Beaucoup de mères occupaient des positions peu qualifiées ou étaient inactives : comparées à elles, les filles montent plus souvent.", niv: 3 },
        { q: "Quelle est une limite des tables de mobilité ?", choix: ["Elles ne mesurent pas l'immobilité sociale", "Elles sont tirées des déclarations d'impôts", "Elles cachent des mobilités internes aux six groupes", "Elles mélangent mobilité sociale et migrations internes"], bonne: 2, expl: "Les groupes sont larges : passer d'instituteur à médecin est invisible si les deux sont classés dans des groupes proches ou le même.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- ses-7
    {
      chapitre: 'ses-7',
      fiche: `## Quelles mutations du travail et de l'emploi ?

### Travail, activité, emploi, chômage
- Le **travail** est une activité humaine de production de biens ou de services. Il peut être **rémunéré** ou non (travail domestique, bénévolat).
- L'**emploi** est un travail **rémunéré** et **déclaré**, encadré par un statut juridique.
- La **population active** regroupe les personnes **en emploi** et les **chômeurs** : c'est l'**activité** au sens statistique. Les autres sont **inactifs** (élèves, retraités, personnes au foyer).
- Deux **statuts d'emploi** : **salarié** (lié à un employeur par un contrat de travail, avec un lien de **subordination**) et **non-salarié** ou indépendant (agriculteur, artisan, profession libérale, micro-entrepreneur).
- Les **formes d'emploi** évoluent : contrats courts (CDD, intérim), temps partiel, micro-entrepreneurs travaillant pour des **plateformes numériques**. Les **frontières** entre emploi, chômage et inactivité deviennent plus floues.
- Exemple : un livreur à vélo indépendant qui dépend d'une seule plateforme ressemble à un salarié sans en avoir les protections. Une personne qui alterne petits contrats et périodes sans emploi passe sans cesse d'une case à l'autre.

### La qualité des emplois
- Les principaux **descripteurs** de la qualité d'un emploi sont : les **conditions de travail** (pénibilité, horaires, risques), le **niveau de salaire**, la **sécurité économique** (type de contrat, risque de perte d'emploi), l'**horizon de carrière** (possibilités de promotion), le **potentiel de formation** et la **variété des tâches**.
- Exemple : un CDI de technicien avec formations et promotions possibles est de meilleure qualité qu'un CDD de caissière à horaires morcelés.

### L'organisation taylorienne
- **Frederick Taylor** propose au début du XXe siècle l'**organisation scientifique du travail (OST)**.
- **Division horizontale** du travail : chaque ouvrier effectue une tâche simple et répétitive.
- **Division verticale** du travail : les ingénieurs conçoivent et chronomètrent, les ouvriers exécutent. Séparation de la **conception** et de l'**exécution**.
- **Relation hiérarchique stricte** : contrôle des temps, salaire au rendement.
- **Henry Ford** ajoute le **travail à la chaîne** (1913) et augmente fortement les salaires (le « five dollars day », 1914) pour fidéliser les ouvriers.
- Effets : forte hausse de la **productivité**, mais travail monotone, perte de sens, absentéisme et usure physique.

### Les organisations post-tayloriennes
- À partir des années 1970, les entreprises cherchent plus de **flexibilité** pour s'adapter à une demande variée. Le modèle de référence est le **toyotisme** (Taiichi **Ohno**, Japon) : **juste-à-temps** (produire ce qui est vendu), zéro stock, zéro défaut.
- **Recomposition des tâches** : polyvalence, rotation des postes, **enrichissement** des tâches (plus de responsabilités).
- **Management participatif** : les salariés sont consultés, travaillent en équipes autonomes, proposent des améliorations.
- Effets **positifs** : plus d'**autonomie**, de variété, d'intérêt au travail.
- Effets **négatifs** : **intensification** du travail, stress, pression des délais, contrôle par les résultats. Le **néo-taylorisme** garde des tâches répétitives et minutées (centres d'appels, entrepôts de logistique, caisses).

### Le numérique transforme le travail
- Il **brouille les frontières du travail** : le **télétravail** se développe, surtout chez les cadres depuis la crise sanitaire de 2020 ; les courriels et messageries prolongent le travail hors des horaires. En France, un **droit à la déconnexion** existe depuis 2017.
- Il **transforme les relations d'emploi** : plateformes, travail à la tâche, évaluation par les clients, algorithmes qui répartissent le travail.
- Il accroît le risque de **polarisation des emplois** : les emplois **intermédiaires** aux tâches routinières (secrétariat, comptabilité simple) sont automatisés, tandis que les emplois très qualifiés et les emplois peu qualifiés de services difficiles à automatiser (aide à domicile, livraison) progressent.

### Le travail, source d'intégration sociale
- Pour **Émile Durkheim** (« De la division du travail social », 1893), la division du travail crée une **solidarité organique** : chacun dépend des autres, ce qui relie les individus.
- Le travail apporte un **revenu**, des **droits sociaux** (retraite, assurance chômage), des **relations sociales**, une **identité** et une reconnaissance.
- Des évolutions **affaiblissent ce pouvoir intégrateur** :
- la **précarisation** (contrats courts, temps partiel subi) : Serge **Paugam** parle d'**intégration professionnelle disqualifiante** ;
- le **chômage élevé et persistant**, qui fait perdre revenus, réseau et estime de soi (Robert **Castel** parle de **désaffiliation**) ;
- la **polarisation de la qualité des emplois** : de bons emplois d'un côté, des emplois mal payés et précaires de l'autre.

### À retenir pour le bac
- Bien distinguer travail, emploi, activité, chômage et statut (salarié, non-salarié).
- Taylorisme (division horizontale et verticale, hiérarchie stricte) et post-taylorisme (flexibilité, recomposition des tâches, management participatif) : effets positifs et négatifs.
- Numérique : télétravail, frontières floues, plateformes, polarisation des emplois.
- Le travail intègre (Durkheim), mais précarisation, chômage persistant et polarisation peuvent affaiblir cette intégration.`,
      cartes: [
        { q: "Travail ou emploi : quelle différence ?", r: "Le travail est toute activité de production, rémunérée ou non. L'emploi est un travail rémunéré et déclaré, encadré par un statut." },
        { q: "Que regroupe la population active ?", r: "Les personnes en emploi et les chômeurs. Les autres (élèves, retraités, personnes au foyer) sont inactifs." },
        { q: "Qu'est-ce qui distingue un salarié d'un non-salarié ?", r: "Le salarié est lié à un employeur par un contrat de travail et un lien de subordination. Le non-salarié travaille à son compte." },
        { q: "Pourquoi les frontières entre emploi, chômage et inactivité deviennent-elles floues ?", r: "Contrats courts, temps partiel subi, micro-entrepreneurs des plateformes : beaucoup passent d'une situation à l'autre ou sont entre deux." },
        { q: "Cite les six descripteurs de la qualité des emplois.", r: "Conditions de travail, niveau de salaire, sécurité économique, horizon de carrière, potentiel de formation et variété des tâches." },
        { q: "Qu'est-ce que la division horizontale du travail ?", r: "Le découpage de la production en tâches simples et répétitives, chaque ouvrier n'en effectuant qu'une." },
        { q: "Qu'est-ce que la division verticale du travail ?", r: "La séparation entre ceux qui conçoivent et organisent (ingénieurs, bureau des méthodes) et ceux qui exécutent (ouvriers)." },
        { q: "Qu'a apporté Henry Ford à l'organisation taylorienne ?", r: "Le travail à la chaîne (1913) et une forte hausse des salaires (five dollars day, 1914) pour fidéliser les ouvriers." },
        { q: "Qu'est-ce que le toyotisme ?", r: "Un modèle post-taylorien (Ohno, Japon) : juste-à-temps, zéro stock, polyvalence des salariés et équipes de travail." },
        { q: "Qu'est-ce que le management participatif ?", r: "Une organisation qui associe les salariés aux décisions : consultation, équipes autonomes, propositions d'amélioration." },
        { q: "Cite un effet positif et un effet négatif du post-taylorisme.", r: "Positif : plus d'autonomie et de variété des tâches. Négatif : intensification du travail et stress." },
        { q: "Qu'est-ce que le néo-taylorisme ?", r: "Le maintien de tâches répétitives, minutées et contrôlées dans des activités modernes, comme les centres d'appels ou la logistique." },
        { q: "Qu'est-ce que la polarisation des emplois ?", r: "La progression des emplois très qualifiés et des emplois peu qualifiés, alors que les emplois intermédiaires routiniers reculent." },
        { q: "Pourquoi le travail est-il source d'intégration sociale ?", r: "Il donne un revenu, des droits sociaux, des relations, une identité et crée une solidarité organique (Durkheim)." },
        { q: "Qu'est-ce que l'intégration professionnelle disqualifiante (Paugam) ?", r: "Une situation où l'emploi n'intègre plus vraiment : emploi précaire, peu reconnu ou insatisfaisant." },
      ],
      quiz: [
        { q: "Une personne qui élève ses enfants à la maison sans emploi ni recherche d'emploi :", choix: ["travaille mais est inactive", "est chômeuse au sens du BIT", "occupe un emploi non salarié", "fait partie de la population active"], bonne: 0, expl: "Le travail domestique est du travail, mais pas un emploi. Sans recherche d'emploi, elle est inactive.", niv: 2 },
        { q: "Séparer ceux qui conçoivent le travail de ceux qui l'exécutent, c'est :", choix: ["la division horizontale du travail", "la recomposition des tâches", "la division verticale du travail", "le management participatif"], bonne: 2, expl: "La division verticale sépare conception et exécution. L'horizontale découpe la production en tâches simples.", niv: 1 },
        { q: "Qui est à l'origine de l'organisation scientifique du travail ?", choix: ["Henry Ford", "Frederick Taylor", "Taiichi Ohno", "Joseph Schumpeter"], bonne: 1, expl: "Taylor a conçu l'OST. Ford y a ajouté la chaîne, Ohno a créé le toyotisme.", niv: 1 },
        { q: "Dans un entrepôt, chaque préparateur suit les ordres d'un casque vocal qui chronomètre ses gestes. C'est un exemple de :", choix: ["management participatif", "toyotisme", "enrichissement des tâches", "néo-taylorisme"], bonne: 3, expl: "Tâches répétitives, minutées et contrôlées dans une activité moderne : c'est le néo-taylorisme.", niv: 2 },
        { q: "Une usine produit seulement ce qui est déjà commandé et réduit ses stocks au minimum. Elle applique :", choix: ["le juste-à-temps", "le travail à la chaîne", "la division verticale", "le salaire au rendement"], bonne: 0, expl: "Produire à la demande avec zéro stock, c'est le juste-à-temps du toyotisme.", niv: 2 },
        { q: "Quel élément est un descripteur de la qualité de l'emploi au programme ?", choix: ["La taille de l'entreprise", "L'âge du salarié", "Le potentiel de formation", "Le secteur d'activité"], bonne: 2, expl: "Les six descripteurs : conditions de travail, salaire, sécurité économique, horizon de carrière, potentiel de formation, variété des tâches.", niv: 1 },
        { q: "Des postes de secrétariat sont automatisés, tandis que les emplois d'ingénieurs et d'aides à domicile augmentent. C'est :", choix: ["la tertiarisation", "la polarisation des emplois", "la salarisation", "la division horizontale"], bonne: 1, expl: "Les emplois intermédiaires routiniers reculent, les deux extrêmes progressent : c'est la polarisation.", niv: 2 },
        { q: "Un cadre répond à ses courriels professionnels le soir chez lui. Cela illustre :", choix: ["la division verticale du travail entre cadres", "la précarisation de l'emploi", "le brouillage des frontières du travail", "le recul de la solidarité organique"], bonne: 2, expl: "Le numérique fait déborder le travail sur le temps hors travail : les frontières se brouillent.", niv: 2 },
        { q: "Pour Durkheim, la division du travail crée :", choix: ["la lutte des classes", "une solidarité mécanique", "la désaffiliation", "une solidarité organique"], bonne: 3, expl: "Les individus spécialisés dépendent les uns des autres : c'est la solidarité organique. La solidarité mécanique repose sur la ressemblance.", niv: 1 },
        { q: "Un livreur micro-entrepreneur travaille pour une seule plateforme qui fixe ses tarifs. Pourquoi est-ce un cas limite ?", choix: ["Il n'a pas le droit de refuser une course proposée par l'application", "Il est compté comme chômeur par l'Insee", "Il est indépendant mais dépend d'un seul donneur d'ordres", "Il est salarié de la plateforme mais sans contrat de travail"], bonne: 2, expl: "Son statut est indépendant, mais sa dépendance ressemble à une subordination : la frontière entre salariat et indépendance se brouille.", niv: 3 },
        { q: "Pourquoi le post-taylorisme n'améliore-t-il pas toujours les conditions de travail ?", choix: ["Il supprime l'essentiel de l'autonomie laissée aux salariés", "Il s'accompagne souvent d'une intensification du travail", "Il revient à la division verticale stricte", "Il interdit le travail en équipe"], bonne: 1, expl: "Plus d'autonomie, mais aussi plus de pression des délais et de contrôle par les résultats : le stress augmente.", niv: 3 },
        { q: "Une salariée enchaîne des CDD dans un travail qu'elle trouve sans intérêt. Selon Paugam, son intégration est :", choix: ["disqualifiante", "assurée", "laborieuse", "incertaine"], bonne: 0, expl: "Emploi instable et travail insatisfaisant : c'est l'intégration disqualifiante de Paugam. Il distingue aussi l'intégration laborieuse (emploi stable, travail insatisfaisant) et incertaine (travail satisfaisant, emploi instable).", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- ses-8
    {
      chapitre: 'ses-8',
      fiche: `## Comment expliquer l'engagement politique dans les sociétés démocratiques ?

### Les formes variées de l'engagement politique
- L'**engagement politique** désigne toutes les actions par lesquelles un individu cherche à peser sur les décisions collectives.
- Le **vote** : la forme la plus répandue et la plus égalitaire (une personne, une voix).
- Le **militantisme** : agir de façon durable dans une organisation (parti politique, syndicat) en donnant de son temps : distribuer des tracts, organiser des réunions.
- L'**engagement associatif** : défendre une cause dans une association (environnement, droits humains, aide aux plus pauvres).
- La **consommation engagée** : utiliser ses achats pour défendre une cause. **Boycott** (refuser d'acheter) et **buycott** (acheter exprès, par exemple du commerce équitable).
- Exemple : une lycéenne peut signer une pétition en ligne, manifester pour le climat et refuser d'acheter de la mode jetable : trois formes d'engagement.

### Le paradoxe de l'action collective
- **Mancur Olson** (« Logique de l'action collective », 1965) : un individu rationnel a intérêt à ne pas s'engager. Le résultat d'une mobilisation (une hausse de salaire, une loi) profite à tous, même à ceux qui n'ont pas participé. Participer a un **coût** (temps, argent, risque). Chacun est tenté d'être un **passager clandestin**.
- Pourtant, beaucoup de gens s'engagent : c'est le **paradoxe de l'action collective**.

### Pourquoi les individus s'engagent quand même
- Les **incitations sélectives** (Olson) : des avantages réservés aux seuls participants. **Positives** : services réservés aux adhérents d'un syndicat (conseil juridique, réductions). **Négatives** : sanctions ou pression du groupe contre ceux qui ne participent pas.
- Les **rétributions symboliques** (Daniel **Gaxie**) : les militants tirent de leur engagement des gratifications non matérielles : **estime**, amitiés, sentiment d'utilité, reconnaissance, compétences acquises.
- La **structure des opportunités politiques** : le contexte politique rend la mobilisation plus ou moins probable et efficace. Un pouvoir ouvert au dialogue, des élections proches, des alliés au gouvernement, des divisions entre dirigeants favorisent la mobilisation. Un pouvoir fermé ou répressif la décourage.

### L'engagement dépend de variables sociodémographiques
- **Catégorie socioprofessionnelle** et **diplôme** : les cadres et les diplômés votent et militent davantage. Ils se sentent plus **compétents** politiquement. Daniel Gaxie parle de **cens caché** : sans barrière officielle, les moins diplômés se tiennent davantage à l'écart.
- **Âge et génération** : les jeunes votent moins régulièrement (**vote intermittent**) mais s'engagent souvent par des formes moins conventionnelles (manifestations, pétitions, réseaux sociaux). L'**effet de génération** distingue des générations socialisées dans des contextes différents.
- **Sexe** : les femmes ont longtemps été moins présentes dans la vie politique (droit de vote en France en 1944). Les écarts de vote ont quasiment disparu, mais les femmes restent moins nombreuses aux postes de responsabilité, malgré les lois sur la **parité** (2000).

### Les transformations de l'action collective
- **Les objets** de l'action collective :
- les **conflits du travail** (grèves pour les salaires, l'emploi, les conditions de travail), en recul relatif ;
- les **nouveaux enjeux de mobilisation** (environnement, logement, féminisme) portés par les **nouveaux mouvements sociaux** à partir des années 1960-1970, souvent liés à des valeurs **post-matérialistes** (qualité de vie, autonomie, reconnaissance) ;
- les **luttes minoritaires** : des groupes peu nombreux défendent la reconnaissance de leurs droits (mouvements LGBT+, antiracistes, personnes handicapées).
- **Les acteurs** : **partis politiques** (conquérir et exercer le pouvoir), **syndicats** (défendre les intérêts des salariés), **associations**, **groupements** (groupes d'intérêt, collectifs, coordinations).
- **Les répertoires d'action collective** (Charles **Tilly**) : l'ensemble des moyens d'action disponibles à une époque. On est passé d'un répertoire **local et patronné** (avant le milieu du XIXe siècle) à un répertoire **national et autonome** (grève, manifestation, pétition). Aujourd'hui s'ajoutent des formes **transnationales** et **numériques** (pétitions en ligne, mots-clés sur les réseaux sociaux), ainsi que des actions spectaculaires pour attirer les **médias**.

### À retenir pour le bac
- Les formes : vote, militantisme, engagement associatif, consommation engagée.
- Le paradoxe d'Olson et ses trois réponses : incitations sélectives, rétributions symboliques, structure des opportunités politiques. Tombé au bac 2025 (métropole) : « Vous montrerez, à l'aide d'un exemple, que les incitations sélectives peuvent expliquer l'engagement politique. »
- Les variables : PCS, diplôme, âge et génération, sexe.
- Objets, acteurs, répertoires : savoir donner un exemple précis pour chacun.`,
      cartes: [
        { q: "Cite les quatre formes d'engagement politique au programme.", r: "Le vote, le militantisme, l'engagement associatif et la consommation engagée." },
        { q: "Boycott ou buycott ?", r: "Boycott : refuser d'acheter un produit pour défendre une cause. Buycott : acheter exprès un produit pour soutenir une cause." },
        { q: "Qu'est-ce que le paradoxe de l'action collective (Olson) ?", r: "Un individu rationnel a intérêt à ne pas participer, car il profite du résultat sans en payer le coût. Pourtant, des mobilisations ont lieu." },
        { q: "Qu'est-ce qu'un passager clandestin ?", r: "Quelqu'un qui profite des résultats d'une action collective sans y avoir participé." },
        { q: "Qu'est-ce qu'une incitation sélective ?", r: "Un avantage réservé aux seuls participants (positive) ou une sanction pour ceux qui ne participent pas (négative). Notion d'Olson." },
        { q: "Donne un exemple d'incitation sélective positive.", r: "Un syndicat offre à ses seuls adhérents des conseils juridiques gratuits ou des réductions." },
        { q: "Que sont les rétributions symboliques du militantisme ?", r: "Des gratifications non matérielles : estime, amitiés, sentiment d'utilité, compétences acquises (Daniel Gaxie)." },
        { q: "Qu'est-ce que la structure des opportunités politiques ?", r: "Le contexte politique qui rend une mobilisation plus ou moins probable et efficace : ouverture du pouvoir, alliés, élections, divisions des dirigeants." },
        { q: "Qu'est-ce que le cens caché (Gaxie) ?", r: "Le fait que les moins diplômés, se sentant moins compétents, participent moins à la politique, sans aucune barrière officielle." },
        { q: "Qu'est-ce que le vote intermittent ?", r: "Le fait de voter à certaines élections seulement. Il est fréquent chez les jeunes." },
        { q: "Que sont les nouveaux mouvements sociaux ?", r: "Des mobilisations apparues dans les années 1960-1970 sur des enjeux non matériels : environnement, féminisme, droits des minorités, qualité de vie." },
        { q: "Qu'est-ce qu'une lutte minoritaire ?", r: "Une mobilisation d'un groupe peu nombreux pour la reconnaissance de ses droits ou de son identité (mouvements LGBT+, antiracistes)." },
        { q: "Qu'est-ce qu'un répertoire d'action collective (Tilly) ?", r: "L'ensemble des moyens d'action qu'un groupe peut utiliser à une époque donnée : grève, manifestation, pétition, occupation." },
        { q: "Quel est le rôle d'un syndicat ?", r: "Défendre les intérêts matériels et moraux des salariés (salaires, emploi, conditions de travail)." },
        { q: "En quelle année les femmes ont-elles obtenu le droit de vote en France ?", r: "En 1944 (ordonnance du 21 avril 1944). Elles votent pour la première fois en 1945." },
      ],
      quiz: [
        { q: "Refuser d'acheter les produits d'une marque accusée de polluer est une forme de :", choix: ["militantisme partisan", "consommation engagée", "rétribution symbolique", "vote intermittent"], bonne: 1, expl: "Utiliser ses achats pour défendre une cause : c'est la consommation engagée, ici sous forme de boycott.", niv: 1 },
        { q: "Quel auteur a formulé le paradoxe de l'action collective ?", choix: ["Charles Tilly", "Daniel Gaxie", "Mancur Olson", "Max Weber"], bonne: 2, expl: "Olson (1965). Tilly a travaillé sur les répertoires, Gaxie sur les rétributions du militantisme et le cens caché.", niv: 1 },
        { q: "Un syndicat réserve à ses adhérents une aide juridique gratuite. C'est :", choix: ["une incitation sélective", "une rétribution symbolique", "une structure des opportunités", "un répertoire d'action"], bonne: 0, expl: "Un avantage matériel réservé aux seuls membres est une incitation sélective positive.", niv: 2 },
        { q: "Une militante reste dans son association surtout pour les amitiés et la fierté d'être utile. Cela illustre :", choix: ["les incitations sélectives négatives", "le cens caché", "l'effet de génération", "les rétributions symboliques"], bonne: 3, expl: "Des gratifications non matérielles (estime, liens, utilité) : ce sont les rétributions symboliques.", niv: 2 },
        { q: "Selon Olson, pourquoi un salarié rationnel ne ferait-il pas grève ?", choix: ["Il profitera de la hausse obtenue sans perdre de salaire", "La grève est interdite aux salariés du privé", "Il n'a pas intérêt à une hausse de salaire", "Les syndicats refusent les non-adhérents dans les cortèges"], bonne: 0, expl: "Le gain profite à tous, le coût (salaire perdu) est individuel : la tentation du passager clandestin.", niv: 2 },
        { q: "Un gouvernement fragile, à six mois d'élections, cède souvent aux manifestants. Cela favorise la mobilisation par :", choix: ["les incitations sélectives", "les rétributions symboliques", "la structure des opportunités politiques", "le paradoxe de l'action collective"], bonne: 2, expl: "Le contexte politique rend l'action plus efficace : c'est la structure des opportunités politiques.", niv: 2 },
        { q: "Les moins diplômés votent moins, sans aucune règle qui les en empêche. Gaxie parle de :", choix: ["vote intermittent", "cens caché", "effet de génération", "passager clandestin"], bonne: 1, expl: "Le sentiment d'incompétence politique éloigne les moins diplômés : c'est le cens caché.", niv: 1 },
        { q: "Les grèves, manifestations et pétitions forment ce que Tilly appelle :", choix: ["une structure des opportunités politiques", "un nouveau mouvement social", "une incitation sélective", "un répertoire d'action collective"], bonne: 3, expl: "Le répertoire est l'ensemble des moyens d'action disponibles à une époque.", niv: 1 },
        { q: "Les jeunes votent moins régulièrement que leurs aînés. Quelle conclusion est juste ?", choix: ["Ils ne s'engagent jamais en politique", "Ils utilisent plus souvent d'autres formes d'engagement", "Ils sont exclus du vote par la loi", "Ils militent bien plus que leurs aînés dans les partis politiques"], bonne: 1, expl: "Leur vote est intermittent, mais ils participent souvent à des manifestations, pétitions ou actions en ligne.", niv: 2 },
        { q: "Le mouvement écologiste des années 1970 est souvent classé parmi :", choix: ["les conflits du travail", "les nouveaux mouvements sociaux", "les incitations sélectives", "les luttes de classes"], bonne: 1, expl: "Il porte un enjeu non matériel (qualité de vie, environnement) : c'est un nouveau mouvement social.", niv: 3 },
        { q: "Pourquoi les incitations sélectives répondent-elles au paradoxe d'Olson ?", choix: ["Elles réservent un gain aux seuls participants", "Elles suppriment tout coût de participation au mouvement", "Elles obligent l'État à céder aux demandes", "Elles augmentent le nombre de passagers clandestins"], bonne: 0, expl: "Le gain réservé aux participants rend l'engagement individuellement rationnel, car on ne l'obtient qu'en participant.", niv: 3 },
        { q: "Un collectif lance une pétition en ligne signée dans plusieurs pays et un mot-clé viral. Cela montre :", choix: ["le retour d'un répertoire local et patronné comme au XVIIIe siècle", "la fin des répertoires d'action collective", "le recul de la consommation engagée", "l'élargissement transnational et numérique du répertoire"], bonne: 3, expl: "Les moyens d'action s'étendent au numérique et dépassent les frontières : le répertoire se transforme.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- ses-9
    {
      chapitre: 'ses-9',
      fiche: `## Quelle action publique pour l'environnement ?

### Comment l'environnement devient un problème public
- Un **problème public** est une situation que des acteurs réussissent à faire reconnaître comme devant être traitée par les pouvoirs publics. Il n'existe pas « tout seul » : il est **construit**.
- La **mise à l'agenda politique** est le moment où le problème est inscrit parmi les priorités des décideurs.
- Les **acteurs** de cette construction :
- les **pouvoirs publics** (gouvernements, collectivités, Union européenne) ;
- les **ONG** (associations de défense de l'environnement) qui alertent et font pression ;
- les **entreprises**, qui peuvent freiner (lobbying) ou porter des solutions (technologies vertes) ;
- les **experts** et scientifiques. Exemple : le **GIEC** (créé en 1988) résume l'état des connaissances sur le climat ;
- les **partis politiques** (partis écologistes) ;
- les **mouvements citoyens** (marches pour le climat, recours en justice).
- Ces acteurs ont des relations de **coopération** (ONG et experts qui alertent ensemble) et de **conflit** (ONG contre industriels, agriculteurs contre normes).

### Plusieurs échelles d'action
- **Locale** : plans climat des intercommunalités, zones à faibles émissions dans les grandes villes, transports en commun.
- **Nationale** : lois, normes, fiscalité. Exemple : la loi Climat et résilience de 2021 en France.
- **Européenne** : le **marché carbone européen** (depuis 2005), le **Pacte vert** (2019), les normes sur les voitures.
- **Mondiale** : la **Convention-cadre des Nations unies sur les changements climatiques** (Rio, 1992), le **protocole de Kyoto** (1997), l'**Accord de Paris** (2015, COP21), qui vise à contenir le réchauffement nettement en dessous de 2 °C.
- Ces échelles s'**articulent** : une règle européenne s'applique dans chaque pays, un engagement mondial se traduit en lois nationales.

### Les instruments face aux externalités négatives (exemple du climat)
- Une **externalité négative** existe quand l'activité d'un agent dégrade la situation d'autres agents **sans compensation**. Exemple : une centrale à charbon émet du CO2 qui réchauffe la planète pour tous, sans payer ce coût.
- **La réglementation** : normes et interdictions (normes d'émissions des voitures, interdiction de certaines chaudières). Avantages : simple, efficace contre un danger grave. Limites : pas d'incitation à faire mieux que la norme, coûts de contrôle, mêmes efforts imposés à tous quel que soit leur coût.
- **La taxation** (taxe **pigouvienne**, d'après Arthur **Pigou**) : faire payer le pollueur pour qu'il intègre le coût de la pollution (principe **pollueur-payeur**). Exemple : la taxe carbone. Avantages : signal-prix, incitation permanente, recettes publiques. Limites : effet **régressif** (pèse plus sur les ménages modestes), difficulté à fixer le bon niveau, problème d'**acceptabilité** (mouvement des gilets jaunes en 2018).
- **Les marchés de quotas d'émission** : les pouvoirs publics fixent une quantité totale d'émissions autorisées, répartie en quotas que les entreprises peuvent **échanger**. Celles qui polluent peu revendent leurs quotas. Avantages : quantité totale maîtrisée, réduction là où elle coûte le moins cher. Limites : prix du carbone longtemps trop bas et instable, quotas distribués gratuitement, risque de **fuites de carbone** (délocaliser la production polluante).
- **La subvention à l'innovation verte** : aider la recherche et l'achat de technologies propres (bonus pour véhicules électriques, aides à la rénovation). Avantages : prépare les solutions de demain, bien acceptée. Limites : coût pour les finances publiques, **effets d'aubaine**.
- Leur mise en œuvre peut se heurter à des **dysfonctionnements de l'action publique** : **lobbying** des intérêts menacés, manque de coordination entre administrations, horizon électoral court face à un problème de long terme, contrôle insuffisant.

### Les négociations internationales et le bien commun
- Le climat est un **bien commun** : il est **non excluable** (on ne peut empêcher personne d'en profiter) mais **rival** (sa dégradation par les uns nuit aux autres). Garrett **Hardin** parle de **tragédie des communs** (1968) : chacun a intérêt à surexploiter la ressource.
- Les accords sont contraints par des stratégies de **passager clandestin** : un pays peut laisser les autres réduire leurs émissions sans faire d'effort, tout en profitant d'un climat stabilisé. Exemple : les accords n'ont pas de vraie sanction, et des pays se retirent ou ne tiennent pas leurs engagements.
- Ils sont aussi contraints par les **inégalités de développement** : les pays riches ont émis la plus grande part des gaz à effet de serre passés ; les pays en développement veulent pouvoir se développer. D'où le principe de **responsabilités communes mais différenciées** et les débats sur l'aide financière des pays riches.

### À retenir pour le bac
- Acteurs, mise à l'agenda, coopération et conflit : le problème public est construit.
- Quatre instruments : réglementation, taxation, marché de quotas, subvention à l'innovation verte. Toujours donner un avantage et une limite.
- Échelles locale, nationale, européenne, mondiale qui s'articulent.
- Bien commun : passager clandestin et inégalités de développement freinent les accords. Tombé au bac 2025 (métropole, étude de document sur les émissions de la Chine et du monde).`,
      cartes: [
        { q: "Qu'est-ce qu'un problème public ?", r: "Une situation que des acteurs font reconnaître comme devant être prise en charge par les pouvoirs publics. Il est construit, il n'existe pas de lui-même." },
        { q: "Qu'est-ce que la mise à l'agenda politique ?", r: "L'inscription d'un problème parmi les priorités des décideurs publics, qui s'engagent à le traiter." },
        { q: "Cite les six types d'acteurs de la construction des questions environnementales.", r: "Pouvoirs publics, ONG, entreprises, experts, partis politiques, mouvements citoyens." },
        { q: "Qu'est-ce que le GIEC ?", r: "Le Groupe d'experts intergouvernemental sur l'évolution du climat, créé en 1988. Il fait la synthèse des connaissances scientifiques sur le climat." },
        { q: "Quel est l'objectif de l'Accord de Paris (2015) ?", r: "Contenir le réchauffement nettement en dessous de 2 °C par rapport à l'ère préindustrielle, et poursuivre les efforts pour le limiter à 1,5 °C." },
        { q: "Qu'est-ce qu'une externalité négative ?", r: "L'activité d'un agent dégrade la situation d'autres agents sans que ce coût soit compensé par le marché. Exemple : la pollution." },
        { q: "Qu'est-ce qu'une taxe pigouvienne ?", r: "Une taxe qui fait payer au pollueur le coût de son externalité négative, pour l'inciter à moins polluer (Pigou)." },
        { q: "Pourquoi la taxe carbone est-elle dite régressive ?", r: "Elle pèse plus lourd, en part du revenu, sur les ménages modestes, qui consacrent une plus grande part de leur budget à l'énergie." },
        { q: "Comment fonctionne un marché de quotas d'émission ?", r: "Les pouvoirs publics fixent un plafond total d'émissions, répartissent des quotas, et les entreprises les achètent ou les vendent entre elles." },
        { q: "Avantage et limite de la réglementation ?", r: "Avantage : simple et efficace contre un danger grave. Limite : aucune incitation à faire mieux que la norme." },
        { q: "Avantage et limite de la subvention à l'innovation verte ?", r: "Avantage : prépare les technologies propres et est bien acceptée. Limite : coûteuse pour l'État et source d'effets d'aubaine." },
        { q: "Qu'est-ce qu'une fuite de carbone ?", r: "Le déplacement d'une production polluante vers un pays aux règles moins strictes : les émissions sont déplacées, pas supprimées." },
        { q: "Pourquoi le climat est-il un bien commun ?", r: "Il est non excluable (personne ne peut être privé d'en profiter) et rival (sa dégradation par les uns nuit aux autres)." },
        { q: "Qu'est-ce que la tragédie des communs (Hardin, 1968) ?", r: "Quand une ressource est commune, chacun a intérêt à la surexploiter, ce qui finit par la détruire pour tous." },
        { q: "Que signifie le principe de responsabilités communes mais différenciées ?", r: "Tous les pays doivent agir pour le climat, mais les pays riches, plus responsables des émissions passées, doivent faire plus d'efforts." },
      ],
      quiz: [
        { q: "Une association publie un rapport alarmant et organise une marche pour que le gouvernement agisse. Elle participe à :", choix: ["la mise à l'agenda politique", "une taxe pigouvienne", "une fuite de carbone", "un marché de quotas"], bonne: 0, expl: "En alertant et en mobilisant, l'association cherche à faire inscrire le problème parmi les priorités : la mise à l'agenda.", niv: 2 },
        { q: "Quel instrument fixe directement la quantité totale d'émissions autorisées ?", choix: ["La taxe carbone", "La subvention à l'innovation", "Le marché de quotas d'émission", "Le bonus écologique"], bonne: 2, expl: "Le marché de quotas fixe un plafond de quantité ; le prix varie. La taxe fixe un prix, la quantité s'ajuste.", niv: 1 },
        { q: "Une usine rejette des fumées qui abîment la santé des riverains sans les indemniser. C'est :", choix: ["une tragédie des communs", "une externalité négative", "un effet d'aubaine", "un passager clandestin"], bonne: 1, expl: "Une activité dégrade la situation d'autres agents sans compensation : c'est une externalité négative.", niv: 1 },
        { q: "Quel est le principal avantage de la taxe carbone ?", choix: ["Elle fixe exactement la quantité totale d'émissions autorisées", "Elle ne pèse pas sur le budget des ménages", "Elle est bien acceptée par la population", "Elle donne un signal-prix incitant à moins émettre"], bonne: 3, expl: "La taxe renchérit les activités polluantes et incite en permanence à réduire les émissions. Elle peut en revanche peser sur les ménages modestes.", niv: 1 },
        { q: "Une ville interdit l'entrée des voitures les plus polluantes dans son centre. Elle utilise :", choix: ["une taxation", "une réglementation", "un marché de quotas", "une subvention"], bonne: 1, expl: "Une interdiction est une règle obligatoire : c'est la réglementation, à l'échelle locale.", niv: 2 },
        { q: "Un ménage modeste dépense 8 % de son revenu en carburant, un ménage aisé 2 %. Une taxe sur le carburant est donc :", choix: ["neutre", "progressive", "proportionnelle", "régressive"], bonne: 3, expl: "Elle prend une part plus grande du revenu des modestes : elle est régressive. C'est une limite à son acceptabilité.", niv: 2 },
        { q: "Une entreprise achète une voiture électrique qu'elle aurait achetée sans aide, mais touche quand même le bonus. C'est :", choix: ["une fuite de carbone", "une externalité positive", "un effet d'aubaine", "un passager clandestin"], bonne: 2, expl: "L'aide est versée pour un comportement qui aurait eu lieu de toute façon : effet d'aubaine, limite des subventions.", niv: 2 },
        { q: "Une entreprise européenne déplace une usine très émettrice dans un pays sans prix du carbone. On parle de :", choix: ["fuite de carbone", "tragédie des communs", "mise à l'agenda", "effet rebond"], bonne: 0, expl: "Les émissions ne disparaissent pas, elles changent de pays : c'est une fuite de carbone, limite d'une politique climatique isolée.", niv: 2 },
        { q: "Le climat est un bien commun car il est :", choix: ["rival et excluable", "non rival et excluable", "rival et non excluable", "non rival et non excluable"], bonne: 2, expl: "On ne peut exclure personne (non excluable), mais sa dégradation par les uns nuit aux autres (rival). Non rival et non excluable, ce serait un bien collectif pur.", niv: 3 },
        { q: "Pourquoi les accords climatiques sont-ils difficiles à faire respecter ?", choix: ["Chaque pays profite des efforts des autres", "Les émissions de CO2 restent dans le pays qui les produit", "Les experts du GIEC votent les sanctions", "Le climat est un bien privé appartenant à chaque État"], bonne: 0, expl: "C'est la stratégie du passager clandestin : tous profitent d'un climat stabilisé, même ceux qui n'ont rien fait.", niv: 3 },
        { q: "L'Inde refuse un effort de réduction égal à celui des pays riches. Quel argument avance-t-elle le plus souvent ?", choix: ["Le climat n'est pas un bien commun à toute l'humanité", "Les pays riches ont émis l'essentiel des gaz passés", "Les marchés de quotas sont interdits en Asie", "Les taxes carbone pèsent surtout sur l'industrie"], bonne: 1, expl: "Les inégalités de développement fondent le principe de responsabilités communes mais différenciées.", niv: 3 },
        { q: "Quelle limite est propre aux marchés de quotas d'émission ?", choix: ["Ils ne fixent pas de plafond d'émissions", "Ils rapportent à l'État des recettes fiscales certaines", "Ils interdisent les échanges de quotas entre entreprises", "Ils peuvent avoir un prix trop bas et instable"], bonne: 3, expl: "Avec trop de quotas distribués, le prix s'effondre et n'incite plus à réduire. Le plafond, lui, est bien fixé.", niv: 2 },
      ],
    },
  ],
  methode: [
    {
      id: 'ses-m1', mat: 'ses', titre: 'Mobiliser des connaissances (EC1)',
      formules: ['Vous montrerez que…', 'Vous montrerez, à l\'aide d\'un exemple, que…', 'Vous présenterez deux…', 'Comment… ?'],
      vu: ['Bac 2025 métropole jour 1 : les incitations sélectives et l\'engagement politique', 'Bac 2025 métropole jour 2 : les asymétries d\'information, source de chômage structurel'],
      pts: '3,5 points (barème 2027)',
      attendu: 'Une réponse courte et précise, sans document, qui répond exactement à la consigne. Le correcteur veut les définitions des notions du sujet, le mécanisme expliqué étape par étape, et un exemple quand la consigne le demande.',
      etapes: ['Souligner les notions du sujet et le verbe de la consigne (montrer, présenter, expliquer).', 'Écrire une phrase d\'introduction qui définit les notions clés.', 'Dérouler le mécanisme en 2 ou 3 étapes reliées par des connecteurs (donc, ainsi, par conséquent).', 'Ajouter un exemple concret si la consigne le demande (ou si cela aide).', 'Finir par une phrase qui répond directement à la question.'],
      mots: ['définir', 'mécanisme', 'par conséquent', 'ainsi', 'par exemple'],
      pieges: ['Faire une mini-dissertation avec plan et grande introduction : c\'est hors format.', 'Oublier l\'exemple quand il est demandé : des points perdus d\'office.', 'Réciter tout le chapitre au lieu du seul mécanisme demandé.', 'Ne pas définir les notions du sujet.'],
      cas: 'Sujet d\'entraînement.',
      question: 'Vous montrerez que les asymétries d\'information peuvent être une source de chômage structurel.',
      modele: 'Le chômage structurel est la part du chômage qui ne dépend pas de la conjoncture : il vient du fonctionnement du marché du travail. Il y a asymétrie d\'information quand une partie à un échange en sait plus que l\'autre. Sur le marché du travail, l\'employeur ne peut pas observer parfaitement l\'effort ni la compétence réelle de ses salariés. Pour les inciter à bien travailler et éviter qu\'ils partent, il peut leur verser un salaire d\'efficience, c\'est-à-dire un salaire supérieur au salaire d\'équilibre. Par exemple, une entreprise de logistique paie ses préparateurs au-dessus du marché pour réduire les départs et les erreurs. Mais ce salaire plus élevé rend chaque embauche plus coûteuse : l\'entreprise embauche moins que si le salaire était au niveau d\'équilibre. L\'offre de travail dépasse alors durablement la demande de travail. Ainsi, les asymétries d\'information créent un chômage qui persiste même quand l\'activité économique est bonne : un chômage structurel.',
      grille: ['J\'ai défini le chômage structurel et l\'asymétrie d\'information.', 'J\'ai expliqué le salaire d\'efficience.', 'J\'ai montré le lien entre salaire plus élevé et embauches moins nombreuses.', 'Ma dernière phrase répond à la question posée.', 'Je n\'ai pas fait de plan ni de longue introduction.'],
    },
    {
      id: 'ses-m2', mat: 'ses', titre: 'Lire et comparer des données (EC2, question 1)',
      formules: ['À l\'aide des données du document, vous comparerez…', 'Vous caractériserez l\'évolution de…', 'Vous mettrez en évidence…'],
      vu: ['Bac 2025 métropole jour 1 : comparer l\'évolution du PIB en France et en Allemagne en 2020 et 2022', 'Bac 2025 métropole jour 2 : comparer l\'évolution des émissions de gaz à effet de serre en Chine et dans le monde (indice base 100 en 1990)'],
      pts: '2 points (barème 2027)',
      attendu: 'Des données bien choisies, bien lues (une phrase de lecture juste avec l\'unité, la date, le lieu) et un petit calcul quand il éclaire la comparaison. Pas de connaissances de cours ici : seulement le document.',
      etapes: ['Lire le titre, la source, l\'unité (%, milliers, euros, indice) et le champ.', 'Repérer les chiffres demandés exactement par la consigne, et pas les autres.', 'Écrire une phrase de lecture juste pour au moins une donnée.', 'Comparer avec un outil adapté : écart en points, coefficient multiplicateur, taux de variation.', 'Conclure en une phrase : ressemblance, différence, tendance.'],
      mots: ['selon', 'en moyenne', 'points de pourcentage', 'fois plus', 'taux de variation', 'indice base 100'],
      pieges: ['Confondre points de pourcentage et pourcentage : passer de 5 % à 7 %, c\'est +2 points, soit +40 %.', 'Lire un indice base 100 comme un pourcentage : un indice de 250 signifie que la valeur a été multipliée par 2,5.', 'Recopier tout le tableau au lieu de choisir les données utiles.', 'Ajouter des explications de cours : elles relèvent de la question 2.'],
      cas: 'Document fictif. Indice des émissions de gaz à effet de serre (base 100 en 2000). Pays A : 100 en 2000, 240 en 2020. Pays B : 100 en 2000, 80 en 2020. Monde : 100 en 2000, 140 en 2020.',
      question: 'À l\'aide des données du document, vous comparerez l\'évolution des émissions du pays A et du monde entre 2000 et 2020.',
      modele: 'Selon ces données fictives, les émissions de gaz à effet de serre du pays A ont été multipliées par 2,4 entre 2000 et 2020 (indice 240), soit une hausse de 140 %. Sur la même période, les émissions mondiales ont augmenté de 40 % (indice 140), soit une multiplication par 1,4. Les émissions du pays A ont donc progressé 3,5 fois plus vite que les émissions mondiales (140 % contre 40 %) : ce pays a fortement contribué à la hausse des émissions mondiales.',
      grille: ['J\'ai donné les bonnes valeurs avec la bonne unité et les bonnes dates.', 'J\'ai transformé l\'indice en taux de variation ou en coefficient multiplicateur correct.', 'J\'ai vraiment comparé (écart ou rapport) au lieu de juxtaposer.', 'J\'ai précisé que les données sont celles du document.'],
    },
    {
      id: 'ses-m3', mat: 'ses', titre: 'Expliquer à l\'aide d\'un document (EC2, question 2)',
      formules: ['À l\'aide du document et de vos connaissances, vous montrerez que…', 'À l\'aide du document et de vos connaissances, vous expliquerez…'],
      vu: ['Bac 2025 métropole jour 1 : montrer que l\'accroissement de la productivité globale des facteurs est source de croissance', 'Bac 2025 métropole jour 2 : montrer que les négociations internationales sur l\'environnement sont contraintes par des stratégies de passager clandestin'],
      pts: '3,5 points (barème 2027)',
      attendu: 'Un raisonnement qui explique avec le cours ce que montre le document. Le correcteur attend les notions et mécanismes du programme, appuyés sur au moins une ou deux données du document (on peut reprendre celles de la question 1).',
      etapes: ['Repérer le mécanisme du cours qui correspond à la consigne.', 'Définir les notions clés en une phrase.', 'Expliquer le mécanisme en 2 temps (un paragraphe par idée).', 'Dans chaque paragraphe, citer une donnée précise du document qui illustre l\'idée.', 'Conclure en une phrase qui répond à la consigne.'],
      mots: ['comme le montre le document', 'ce mécanisme', 'en effet', 'c\'est pourquoi'],
      pieges: ['Ne faire que décrire le document : c\'est la question 1.', 'Réciter le cours sans aucun chiffre du document.', 'Utiliser une donnée du document qui contredit l\'idée sans le remarquer.'],
      cas: 'Document fictif. Pour 100 fils de cadres, 50 deviennent cadres et 10 ouvriers. Pour 100 fils d\'ouvriers, 12 deviennent cadres et 42 ouvriers.',
      question: 'À l\'aide du document et de vos connaissances, vous montrerez que les ressources familiales contribuent à expliquer la mobilité sociale.',
      modele: 'La mobilité sociale intergénérationnelle est le changement de position sociale d\'un individu par rapport à ses parents. Le document montre qu\'elle dépend fortement de l\'origine : selon ces données fictives, 50 % des fils de cadres deviennent cadres, contre 12 % des fils d\'ouvriers, soit environ quatre fois plus. Les ressources familiales expliquent en partie cet écart. D\'abord, les familles transmettent un capital culturel (savoirs, rapport à l\'école, connaissance des filières) : un enfant de cadre est mieux préparé aux attentes scolaires et mieux orienté, ce qui l\'aide à obtenir les diplômes qui mènent aux postes de cadre. Ensuite, elles transmettent un capital économique (financement d\'études longues, logement) et un capital social (réseau qui aide à trouver un stage ou un emploi). À l\'inverse, 42 % des fils d\'ouvriers restent ouvriers : avec moins de ressources, la reproduction sociale est plus fréquente. Les ressources familiales contribuent donc à expliquer à la fois la mobilité et l\'immobilité sociales.',
      grille: ['J\'ai défini la mobilité sociale intergénérationnelle.', 'J\'ai expliqué au moins deux formes de capital (culturel, économique, social).', 'J\'ai cité des données du document de façon juste.', 'J\'ai relié chaque donnée à un mécanisme du cours.'],
    },
    {
      id: 'ses-m4', mat: 'ses', titre: 'Raisonnement sur dossier documentaire (EC3)',
      formules: ['À l\'aide de vos connaissances et du dossier documentaire, vous montrerez que…', 'À l\'aide de vos connaissances et du dossier documentaire, vous expliquerez…'],
      vu: ['Bac 2025 métropole jour 1 : montrer que la structure socioprofessionnelle en France s\'est transformée depuis la seconde moitié du XXe siècle', 'Bac 2025 métropole jour 2 : montrer que le recours au protectionnisme peut présenter des avantages'],
      pts: '9 points (barème 2027)',
      attendu: 'Un raisonnement organisé avec une courte introduction, un développement en plusieurs paragraphes argumentés et une conclusion. Le sujet demande de « montrer » : on ne discute pas, on démontre. Chaque paragraphe associe une idée, une explication du cours et une illustration tirée des documents.',
      etapes: ['Analyser le sujet : définir chaque notion, repérer ce qu\'il faut montrer.', 'Exploiter chaque document : noter l\'idée principale et 2 données utiles.', 'Construire 2 ou 3 grandes idées (les arguments), chacune en un ou deux paragraphes.', 'Rédiger chaque paragraphe : affirmation, explication du mécanisme, illustration par un document chiffré, petite conclusion.', 'Introduction : accroche, définitions, annonce des idées. Conclusion : bilan qui répond au sujet.'],
      mots: ['tout d\'abord', 'de plus', 'ainsi', 'comme le montre le document 2', 'en conclusion'],
      pieges: ['Discuter le sujet (un « mais » en grande partie) alors qu\'il demande de montrer.', 'Paraphraser les documents un par un au lieu d\'organiser par idées.', 'Oublier les connaissances personnelles : les documents ne suffisent pas.', 'Introduction ou conclusion absentes.'],
      cas: 'Dossier fictif : document 1, part des ouvriers et des cadres dans l\'emploi de 1980 à 2020 ; document 2, part des salariés dans l\'emploi ; document 3, part des femmes dans la population active.',
      question: 'À l\'aide de vos connaissances et du dossier documentaire, vous montrerez que la structure socioprofessionnelle française s\'est transformée depuis la seconde moitié du XXe siècle.',
      modele: 'Introduction : la structure socioprofessionnelle est la répartition de la population en emploi entre les groupes de PCS définis par l\'Insee. Depuis les années 1950, elle a profondément changé. Nous montrerons qu\'elle s\'est salarisée et tertiarisée, puis qu\'elle s\'est qualifiée et féminisée. 1) Salarisation et tertiarisation : les indépendants (agriculteurs, petits commerçants) ont reculé avec la modernisation de l\'agriculture et la grande distribution ; la part des salariés approche 9 emplois sur 10 (document 2). Les services emploient désormais la grande majorité des actifs, tandis que les ouvriers reculent avec la désindustrialisation et l\'automatisation (document 1). 2) Qualification et féminisation : la part des cadres et professions intermédiaires a fortement augmenté (document 1), en lien avec la hausse des diplômes et le progrès technique qui demande plus de qualifications. Les femmes représentent environ la moitié des actifs (document 3), notamment parce que les emplois de services se sont développés et que leur niveau d\'études a dépassé celui des hommes. Conclusion : la structure socioprofessionnelle est passée d\'une société d\'agriculteurs et d\'ouvriers à une société de salariés des services, plus qualifiée et plus féminisée. Ces transformations nourrissent le débat sur la pertinence des classes sociales.',
      grille: ['Introduction avec définition et annonce du plan.', 'Au moins deux idées distinctes, chacune expliquée par un mécanisme.', 'Chaque idée illustrée par une donnée précise d\'un document.', 'Des connaissances personnelles en plus des documents.', 'Une conclusion qui répond au sujet.'],
    },
    {
      id: 'ses-m5', mat: 'ses', titre: 'Dissertation sur dossier documentaire',
      formules: ['Dans quelle mesure… ?', '… suffit-il / suffit-elle à… ?', 'Quels sont les effets de… ?', 'Comment… ?'],
      vu: ['Bac 2025 métropole jour 1 : « Dans quelle mesure les politiques monétaire et budgétaire parviennent-elles à agir sur la conjoncture des pays membres de la zone euro ? »', 'Bac 2025 métropole jour 2 : « Une approche en termes de classes sociales suffit-elle à rendre compte de la structure de la société française actuelle ? »'],
      pts: '18 points, plus 2 points de langue (barème 2027)',
      attendu: 'Une vraie réponse argumentée à une question, avec une problématique, un plan en 2 ou 3 parties équilibrées, des sous-parties, des connaissances précises (notions, auteurs, mécanismes) et une utilisation sélective des documents. Les sujets « dans quelle mesure » ou « suffit-il » appellent un plan qui nuance : oui, en partie… mais des limites.',
      etapes: ['Analyser le sujet : définir chaque mot-clé, délimiter le temps et le lieu, repérer le type de sujet (nuancer, expliquer, décrire).', 'Dégager une problématique : la vraie question qui se cache derrière le sujet.', 'Exploiter le dossier : idée principale et données clés de chaque document, placées dans le plan.', 'Faire le plan au brouillon : 2 ou 3 parties, 2 ou 3 sous-parties chacune, une idée par paragraphe.', 'Rédiger l\'introduction (accroche, définitions, problématique, annonce du plan) et la conclusion (bilan, ouverture) en premier au brouillon.', 'Rédiger le développement avec des transitions entre les parties.'],
      mots: ['problématique', 'dans un premier temps', 'cependant', 'toutefois', 'nuancer', 'transition'],
      pieges: ['Faire un catalogue de connaissances sans répondre à la question.', 'Un plan déséquilibré (une partie de deux pages, l\'autre de dix lignes).', 'Réciter les documents dans l\'ordre (paraphrase).', 'Oublier de nuancer quand le sujet le demande (« dans quelle mesure », « suffit-il »).', 'Manquer de temps : garder 30 minutes pour la relecture et l\'orthographe.'],
      cas: 'Dossier fictif : document 1, taux de chômage et taux de croissance d\'un pays de 2008 à 2024 ; document 2, offres d\'emploi non pourvues par métier ; document 3, effet estimé d\'allègements de cotisations ; document 4, part des contrats courts dans les embauches.',
      question: 'Les politiques de soutien à la demande suffisent-elles à lutter contre le chômage ?',
      modele: 'Problématique : le chômage a-t-il seulement pour cause une demande trop faible, ou dépend-il aussi du fonctionnement du marché du travail, qui appelle d\'autres politiques ? I. Le soutien de la demande est efficace contre le chômage conjoncturel. A. Quand l\'activité ralentit, les entreprises embauchent moins, car elles embauchent selon la demande anticipée (Keynes) ; le document 1 montre que le chômage monte quand la croissance chute. B. Les politiques budgétaire (dépenses publiques, multiplicateur, stabilisateurs automatiques) et monétaire (baisse des taux directeurs de la BCE) relancent la consommation et l\'investissement. II. Mais elles ne suffisent pas contre le chômage structurel. A. Les problèmes d\'appariement (inadéquation des qualifications, frictions) laissent des postes vacants alors que le chômage reste élevé (document 2) : il faut des politiques de formation. B. Le coût du travail des peu qualifiés et certaines rigidités freinent l\'embauche : allègements de cotisations (document 3) et flexibilisation, avec leurs limites (effets d\'aubaine, précarisation visible dans le document 4). C. Dans la zone euro, la relance est contrainte par les règles budgétaires et par une politique monétaire unique. Conclusion : le soutien de la demande est nécessaire en cas de crise, mais il ne suffit pas ; il faut combiner les politiques selon le type de chômage.',
      grille: ['Introduction : définitions, problématique, annonce du plan.', 'Un plan qui répond au sujet et nuance (« suffit-il »).', 'Chaque sous-partie contient un mécanisme expliqué et un exemple ou une donnée.', 'Les documents sont utilisés de façon sélective, pas paraphrasés.', 'Transitions et conclusion qui répond à la problématique.'],
    },
  ],
  sujets: [
    {
      id: 'ses-s1', matiere: 'ses', titre: 'Sujet d\'entraînement 1 : épreuve composée', duree: 240,
      enonce: `## Épreuve composée (sujet d'entraînement)

Sujet inventé pour s'entraîner, sur le modèle de l'épreuve du bac 2027. Toutes les données sont fictives. Barème : 3,5 + 5,5 + 9 points, plus 2 points pour la maîtrise de la langue.

### Première partie : Mobilisation des connaissances (3,5 points)
Vous montrerez que les politiques de formation peuvent réduire le chômage structurel.

### Deuxième partie : Étude d'un document (5,5 points)
Document (données fictives) : destinée sociale des hommes de 35 à 59 ans selon la catégorie socioprofessionnelle de leur père, en %.
- Père cadre : cadres 50 ; professions intermédiaires 25 ; employés 10 ; ouvriers 10 ; autres 5. Total 100.
- Père profession intermédiaire : cadres 30 ; professions intermédiaires 32 ; employés 14 ; ouvriers 18 ; autres 6. Total 100.
- Père ouvrier : cadres 12 ; professions intermédiaires 23 ; employés 17 ; ouvriers 42 ; autres 6. Total 100.

Questions :
- 1. À l'aide des données du document, vous comparerez la destinée des fils de cadres et celle des fils d'ouvriers. (2 points)
- 2. À l'aide du document et de vos connaissances, vous montrerez que les ressources familiales contribuent à expliquer la mobilité sociale. (3,5 points)

### Troisième partie : Raisonnement s'appuyant sur un dossier documentaire (9 points)
Sujet : à l'aide de vos connaissances et du dossier documentaire, vous montrerez que les instruments de la politique climatique présentent des limites.

Document 1 (texte fictif). Dans le pays imaginaire de Valdorie, le gouvernement a créé en 2021 une taxe sur les carburants pour réduire les émissions de CO2. Deux ans plus tard, des manifestations éclatent dans les zones rurales, où les habitants n'ont pas d'autre moyen de transport que la voiture. Le gouvernement gèle la hausse prévue de la taxe. Au même moment, une prime à l'achat de voitures électriques est versée à 200 000 ménages ; une enquête estime que 40 % d'entre eux auraient acheté ce véhicule même sans la prime.

Document 2 (données fictives) : prix moyen d'une tonne de CO2 sur un marché de quotas, en euros.
- 2010 : 14 ; 2013 : 5 ; 2016 : 6 ; 2019 : 25 ; 2022 : 80 ; 2024 : 65.

Document 3 (données fictives) : part du budget des ménages consacrée à l'énergie (logement et carburant), en %.
- 10 % des ménages les plus modestes : 11 %.
- Ménages au milieu de l'échelle des revenus : 8 %.
- 10 % des ménages les plus aisés : 4 %.`,
      corrige: `## Corrigé (sujet d'entraînement)

### Première partie (3,5 points)
- Le **chômage structurel** dure même quand l'activité est bonne : il vient du fonctionnement du marché du travail.
- Une de ses causes est l'**inadéquation des qualifications** : les chômeurs n'ont pas les compétences recherchées, si bien que des emplois restent vacants alors que le chômage est élevé. C'est un problème d'**appariement**.
- Les **politiques de formation** (formation des chômeurs, apprentissage, reconversion vers les métiers qui recrutent) donnent aux chômeurs les compétences demandées.
- Exemple : former des chômeurs de l'industrie au métier d'aide-soignant, où les postes sont nombreux.
- Ainsi, l'offre et la demande de travail se rencontrent mieux, les postes vacants sont pourvus et le chômage structurel recule. Limite possible : l'effet est lent.

### Deuxième partie, question 1 (2 points)
- Selon ces données fictives, 50 % des fils de cadres sont cadres, contre 12 % des fils d'ouvriers : les fils de cadres ont environ 4 fois plus de chances d'être cadres (50 / 12 ≈ 4,2).
- À l'inverse, 42 % des fils d'ouvriers sont ouvriers, contre 10 % des fils de cadres.
- Dans les deux cas, la position la plus fréquente est celle du père : la reproduction sociale est forte aux deux extrémités.

### Deuxième partie, question 2 (3,5 points)
- Définir la mobilité sociale intergénérationnelle.
- **Capital culturel** : les enfants de cadres connaissent mieux les attentes de l'école et les filières sélectives ; ils obtiennent plus souvent les diplômes qui mènent aux postes de cadres (50 % des fils de cadres sont cadres).
- **Capital économique et social** : financement d'études longues, réseau pour trouver un stage ou un emploi.
- **Configurations familiales** : taille de la fratrie, famille monoparentale modifient les ressources disponibles.
- Les enfants d'ouvriers disposent en moyenne de moins de ressources : 42 % restent ouvriers. La mobilité ascendante existe (12 % deviennent cadres) mais reste moins fréquente.

### Troisième partie (9 points)
Introduction : le changement climatique résulte d'une **externalité négative** (émissions de gaz à effet de serre). Les pouvoirs publics disposent de quatre instruments : réglementation, taxation, marchés de quotas, subventions à l'innovation verte. Nous montrerons que la taxation et les quotas ont des limites, puis que les subventions et la réglementation en ont aussi, sans oublier les dysfonctionnements de l'action publique.

1) Les instruments par le prix ont des limites.
- La **taxe** (pigouvienne) envoie un signal-prix, mais elle est **régressive** : selon le document 3, l'énergie pèse 11 % du budget des 10 % les plus modestes contre 4 % pour les 10 % les plus aisés. D'où un problème d'**acceptabilité** : en Valdorie, les manifestations conduisent à geler la taxe (document 1).
- Le **marché de quotas** fixe la quantité d'émissions, mais son prix peut être trop bas et instable : selon le document 2, la tonne passe de 14 euros en 2010 à 5 euros en 2013, un prix trop faible pour inciter à réduire, avant de monter à 80 euros en 2022. Risque aussi de **fuites de carbone**.

2) Les subventions et la réglementation ont aussi des limites.
- La **subvention** à l'innovation verte coûte cher à l'État et entraîne des **effets d'aubaine** : 40 % des ménages aidés auraient acheté sans la prime (document 1).
- La **réglementation** est simple et efficace contre un danger grave, mais elle n'incite pas à faire mieux que la norme et ses contrôles coûtent cher.
- Enfin, l'action publique connaît des **dysfonctionnements** : lobbying des intérêts menacés, horizon électoral court face à un problème de long terme.

Conclusion : chaque instrument a des avantages mais aussi des limites. C'est pourquoi les pouvoirs publics les combinent, à plusieurs échelles (locale, nationale, européenne, mondiale).`,
      grille: [
        { c: 'Partie 1 : définitions, mécanisme de l\'appariement, rôle de la formation, réponse claire', pts: 3.5 },
        { c: 'Partie 2, question 1 : données justes, vraie comparaison chiffrée', pts: 2 },
        { c: 'Partie 2, question 2 : capitaux et configurations familiales reliés aux données', pts: 3.5 },
        { c: 'Partie 3 : introduction, au moins trois instruments et leurs limites expliqués, documents exploités avec des chiffres, conclusion', pts: 9 },
        { c: 'Maîtrise de la langue (orthographe et syntaxe)', pts: 2 },
      ],
    },
    {
      id: 'ses-s2', matiere: 'ses', titre: 'Sujet d\'entraînement 2 : dissertation', duree: 240,
      enonce: `## Dissertation s'appuyant sur un dossier documentaire (sujet d'entraînement)

Sujet inventé pour s'entraîner, sur le modèle de l'épreuve du bac 2027. Toutes les données sont fictives. Barème : 18 points, plus 2 points pour la maîtrise de la langue.

Il est demandé au candidat de répondre à la question posée, de construire une argumentation à partir d'une problématique qu'il devra élaborer, de mobiliser des connaissances et des informations pertinentes, notamment celles du dossier, et de rédiger avec un plan cohérent qui ménage l'équilibre des parties.

### Sujet
Les politiques de soutien à la demande suffisent-elles à lutter contre le chômage ?

### Document 1 (données fictives) : taux de croissance du PIB et taux de chômage d'un pays européen, en %
- 2008 : croissance 0,2 ; chômage 7,4.
- 2009 : croissance - 2,9 ; chômage 9,1.
- 2015 : croissance 1,1 ; chômage 10,3.
- 2020 : croissance - 7,5 ; chômage 8,9.
- 2022 : croissance 2,6 ; chômage 7,3.
- 2024 : croissance 1,1 ; chômage 7,4.

### Document 2 (données fictives) : part des entreprises qui déclarent des difficultés de recrutement, selon le métier, en 2024
- Aides-soignants : 78 %.
- Couvreurs et charpentiers : 74 %.
- Développeurs informatiques : 61 %.
- Employés administratifs : 22 %.

### Document 3 (texte fictif)
Une étude réalisée dans le pays imaginaire de Norvalie estime qu'une baisse des cotisations patronales sur les salaires proches du salaire minimum a permis de créer ou de préserver environ 150 000 emplois en cinq ans. Le coût pour les finances publiques est élevé, et les auteurs estiment qu'une partie des embauches aidées aurait eu lieu sans la mesure.

### Document 4 (données fictives) : part des contrats de moins d'un mois dans les embauches, en %
- 2000 : 48 ; 2010 : 63 ; 2020 : 69 ; 2024 : 67.`,
      corrige: `## Corrigé (sujet d'entraînement)

### Analyse du sujet
- **Chômage** : situation des personnes sans emploi, disponibles et qui en cherchent un (définition du BIT).
- **Politiques de soutien à la demande** : politiques budgétaire (dépenses publiques, baisses d'impôts) et monétaire (baisse des taux directeurs) qui augmentent la consommation et l'investissement.
- « Suffisent-elles » : il faut montrer qu'elles sont utiles, puis leurs limites et la nécessité d'autres politiques.

### Problématique
Le chômage vient-il seulement d'une demande trop faible, ou aussi du fonctionnement du marché du travail, qui appelle d'autres politiques ?

### Plan possible
I. Le soutien à la demande est efficace contre le chômage conjoncturel.
- A. Le chômage conjoncturel suit les fluctuations de l'activité : selon le document 1, quand la croissance chute à - 2,9 % en 2009, le chômage passe de 7,4 % à 9,1 %. Pour Keynes, les entreprises embauchent selon la demande anticipée.
- B. La relance budgétaire (multiplicateur, stabilisateurs automatiques) et la politique monétaire (taux bas) soutiennent la demande et donc l'emploi. Exemple : les dépenses massives de 2020 ont limité la hausse du chômage malgré une chute du PIB de 7,5 %.

II. Mais elles ne suffisent pas, car une partie du chômage est structurelle.
- A. Même avec de la croissance, le chômage reste élevé (10,3 % en 2015 avec 1,1 % de croissance, document 1). Les problèmes d'appariement l'expliquent : 78 % des entreprises qui recrutent des aides-soignants déclarent des difficultés (document 2). Les politiques de formation sont nécessaires.
- B. Le coût du travail peu qualifié et les asymétries d'information (salaire d'efficience) créent aussi du chômage structurel. Les allègements de cotisations ont des effets (150 000 emplois selon le document 3) mais aussi un coût et des effets d'aubaine.
- C. La flexibilisation réduit les rigidités mais favorise la précarité : les contrats de moins d'un mois représentent 67 % des embauches en 2024 (document 4). De plus, dans la zone euro, la relance budgétaire est encadrée par des règles et la politique monétaire est unique.

### Conclusion
Les politiques de soutien à la demande sont nécessaires face au chômage conjoncturel, mais elles ne suffisent pas face au chômage structurel. Il faut les combiner avec des politiques de formation, d'allègement du coût du travail et de réforme du marché du travail, en surveillant leurs effets sur la qualité des emplois.`,
      grille: [
        { c: 'Introduction : définitions, problématique, annonce du plan', pts: 3 },
        { c: 'Partie sur l\'efficacité contre le chômage conjoncturel : mécanismes keynésiens expliqués', pts: 5 },
        { c: 'Partie sur les limites : chômage structurel et autres politiques expliqués', pts: 5 },
        { c: 'Documents exploités de façon sélective et juste', pts: 3 },
        { c: 'Transitions et conclusion qui répond à la problématique', pts: 2 },
        { c: 'Maîtrise de la langue (orthographe et syntaxe)', pts: 2 },
      ],
    },
  ],
};
