// Sciences de la vie et de la Terre — spécialité, terminale voie générale. Sources : voir matiere.sources.
// Programme : arrêté du 17 juillet 2019, BO spécial n° 8 du 25 juillet 2019 (inchangé pour le bac 2027).
// Épreuve : note de service du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026), à compter de la session 2027 :
// écrit 3 h 30 sur 15 points (exercice 1 sur 6, exercice 2 sur 7, 2 points de maîtrise de la langue) + ECE 1 h sur 5 points.
export default {
  matiere: {
    id: 'svt',
    nom: 'Sciences de la vie et de la Terre',
    voie: 'generale',
    epreuve: { type: 'ecrit+pratique', duree: 210, coef: 16, quand: 'juin', note: 'Écrit de 3 h 30 sur 15 points (exercice 1 sur 6, exercice 2 sur 7, 2 points de langue) et ECE (épreuve pratique) d\'1 h sur 5 points' },
    sources: [
      "https://eduscol.education.gouv.fr/5835/programmes-et-ressources-en-sciences-de-la-vie-et-de-la-terre-voie-gt",
      "https://www.education.gouv.fr/bo/2026/Special4/MENE2622653N",
      "https://pedagogie.ac-toulouse.fr/svt/system/files/2026-09/lettrerentree26_SVT.pdf",
      "https://www.freemaths.fr/sujets-du-bac/baccalaureat-general/sciences-de-la-vie-et-de-la-terre/annees/annee-2025/metropole/sujet-1-et-correction/bac-sciences-de-la-vie-et-de-la-terre-metropole-2025-sujet-1.pdf",
      "https://www.letudiant.fr/bac/corriges-du-bac/article/sujets-et-corriges-bac-svt-2025.html",
    ],
    chapitres: [
      { id: "svt-1", t: "L'origine du génotype des individus", theme: "Génétique et évolution" },
      { id: "svt-2", t: "La complexification des génomes : transferts horizontaux et endosymbioses", theme: "Génétique et évolution" },
      { id: "svt-3", t: "L'inéluctable évolution des génomes au sein des populations", theme: "Génétique et évolution" },
      { id: "svt-4", t: "D'autres mécanismes contribuant à la diversité du vivant", theme: "Génétique et évolution" },
      { id: "svt-5", t: "Le temps et les roches", theme: "À la recherche du passé géologique de notre planète" },
      { id: "svt-6", t: "Les traces du passé mouvementé de la Terre", theme: "À la recherche du passé géologique de notre planète" },
      { id: "svt-7", t: "L'organisation fonctionnelle des plantes à fleurs", theme: "De la plante sauvage à la plante domestiquée" },
      { id: "svt-8", t: "La plante, productrice de matière organique", theme: "De la plante sauvage à la plante domestiquée" },
      { id: "svt-9", t: "La reproduction de la plante entre vie fixée et mobilité", theme: "De la plante sauvage à la plante domestiquée" },
      { id: "svt-10", t: "La domestication des plantes", theme: "De la plante sauvage à la plante domestiquée" },
      { id: "svt-11", t: "Reconstituer et comprendre les variations climatiques passées", theme: "Les climats de la Terre" },
      { id: "svt-12", t: "Comprendre les conséquences du réchauffement climatique et les possibilités d'actions", theme: "Les climats de la Terre" },
      { id: "svt-13", t: "Les réflexes", theme: "Comportements, mouvement et système nerveux" },
      { id: "svt-14", t: "Cerveau et mouvement volontaire", theme: "Comportements, mouvement et système nerveux" },
      { id: "svt-15", t: "Le cerveau, un organe fragile à préserver", theme: "Comportements, mouvement et système nerveux" },
      { id: "svt-16", t: "Produire le mouvement : contraction musculaire et apport d'énergie", theme: "Produire le mouvement : contraction musculaire et apport d'énergie" },
      { id: "svt-17", t: "Comportements et stress : vers une vision intégrée de l'organisme", theme: "Comportements et stress : vers une vision intégrée de l'organisme" },
    ],
  },
  paquets: [
    {
      chapitre: "svt-1",
      fiche: `## L'origine du génotype des individus

Chaque individu a un **génotype** unique : l'ensemble de ses allèles. Ce chapitre explique d'où vient cette diversité : la reproduction sexuée (méiose puis fécondation) et, à côté, la reproduction asexuée et les mutations.

### Méiose et fécondation : le cycle de vie
- Une cellule **diploïde** (2n) possède des paires de chromosomes homologues : 2n = 46 chez l'humain. Une cellule **haploïde** (n) n'a qu'un exemplaire de chaque chromosome.
- La **méiose** fabrique 4 cellules haploïdes à partir d'une cellule diploïde, après une seule réplication de l'ADN. Elle comporte deux divisions : la **division réductionnelle** (séparation des chromosomes homologues) puis la **division équationnelle** (séparation des chromatides).
- La **fécondation** réunit deux gamètes haploïdes et rétablit la diploïdie dans la cellule-œuf.
- Méiose et fécondation alternent dans le cycle de vie et maintiennent le caryotype de l'espèce.

### Le brassage intrachromosomique
- En **prophase I**, les chromosomes homologues s'apparient. Des **crossing-over** échangent des portions entre chromatides homologues.
- Résultat : de nouvelles associations d'allèles sur un même chromosome. On parle de **recombinaison**.
- Exemple : un chromosome portant A et B peut donner une chromatide portant A et b.

### Le brassage interchromosomique
- En **anaphase I**, chaque paire d'homologues se sépare au hasard, indépendamment des autres paires.
- Avec n paires, il y a 2 puissance n combinaisons possibles : 2 puissance 23, soit plus de 8 millions de gamètes différents chez l'humain, sans compter les crossing-over.
- La **fécondation** amplifie ce brassage : n'importe quel gamète mâle peut rencontrer n'importe quel gamète femelle.

### Lire un croisement test
- Le **croisement test** (test-cross) croise un individu à tester avec un individu **homozygote récessif** pour les gènes étudiés. Les phénotypes des descendants montrent directement les gamètes produits par l'individu testé.
- **4 phénotypes en proportions égales** (25 % chacun) : les deux gènes sont **indépendants** (sur deux paires de chromosomes différentes). C'est le brassage interchromosomique.
- **2 phénotypes parentaux majoritaires et 2 phénotypes recombinés minoritaires** : les gènes sont **liés** (sur la même paire de chromosomes). Les recombinés viennent de crossing-over.
- Notation : (A//a) pour un gène, (A B // a b) pour deux gènes liés.

### Les anomalies de la méiose
- Une **non-disjonction** (mauvaise séparation des homologues ou des chromatides) donne des gamètes avec un chromosome en trop ou en moins. Exemple : la **trisomie 21**.
- Un **crossing-over inégal** donne une chromatide avec un gène en double. Ces **duplications**, suivies de mutations, créent des **familles multigéniques** (exemple : les gènes des globines).

### Mitose, clones et mutations
- La **mitose** produit deux cellules génétiquement identiques : elle est à la base de la croissance et de la **reproduction asexuée**. L'ensemble des cellules issues d'une même cellule forme un **clone**.
- Des **mutations** apparaissent au hasard lors de la réplication. Une **mutation somatique** n'est transmise qu'aux cellules filles de l'individu : elle crée un sous-clone, et l'accumulation de mutations peut mener à un **cancer**.
- Une mutation dans une cellule de la **lignée germinale** peut passer à la descendance.
- Le séquençage de l'ADN permet de comparer les génomes et de reconstituer l'histoire des individus et des populations.

### À retenir pour le bac
- Savoir faire un schéma de méiose avec 2 paires de chromosomes, en montrant les deux brassages.
- Test-cross : 4 phénotypes à 25 % = gènes indépendants ; 2 parentaux majoritaires = gènes liés.
- Le piège : le crossing-over a lieu en **prophase I**, la séparation au hasard des homologues en **anaphase I**.
- La diversité vient de la méiose ET de la fécondation, pas seulement de la méiose.`,
      cartes: [
        { q: "Qu'est-ce qu'un génotype ?", r: "L'ensemble des allèles d'un individu, pour un ou plusieurs gènes." },
        { q: "Que produit la méiose ?", r: "Quatre cellules haploïdes (n), génétiquement différentes, à partir d'une cellule diploïde (2n)." },
        { q: "Quelles sont les deux divisions de la méiose ?", r: "La division réductionnelle (séparation des homologues) puis la division équationnelle (séparation des chromatides)." },
        { q: "Quand a lieu le brassage intrachromosomique ?", r: "En prophase I, lors des crossing-over entre chromatides de chromosomes homologues appariés." },
        { q: "Quand a lieu le brassage interchromosomique ?", r: "En anaphase I : chaque paire d'homologues se sépare au hasard, indépendamment des autres." },
        { q: "Combien de gamètes différents par le seul brassage interchromosomique chez l'humain ?", r: "2 puissance 23, soit plus de 8 millions de combinaisons." },
        { q: "Qu'est-ce qu'un croisement test ?", r: "Un croisement avec un individu homozygote récessif : le phénotype des descendants révèle les gamètes de l'individu testé." },
        { q: "Test-cross : 4 phénotypes à 25 % chacun ?", r: "Les deux gènes sont indépendants : ils sont sur deux paires de chromosomes différentes." },
        { q: "Test-cross : 2 phénotypes majoritaires et 2 minoritaires ?", r: "Les gènes sont liés. Les phénotypes minoritaires sont des recombinés, issus de crossing-over." },
        { q: "Quel est le rôle de la fécondation dans la diversité ?", r: "Elle réunit au hasard deux gamètes déjà brassés : elle amplifie la diversité des combinaisons d'allèles." },
        { q: "Qu'est-ce qu'une non-disjonction ?", r: "Une mauvaise séparation des chromosomes en méiose, qui donne un gamète avec un chromosome en trop ou en moins (ex. : trisomie 21)." },
        { q: "Comment se forme une famille multigénique ?", r: "Par duplication d'un gène (crossing-over inégal), puis mutations indépendantes des copies." },
        { q: "Qu'est-ce qu'un clone ?", r: "L'ensemble des cellules issues d'une même cellule par mitoses successives, génétiquement identiques sauf mutation." },
        { q: "Une mutation somatique est-elle transmise aux enfants ?", r: "Non. Elle n'est transmise qu'aux cellules filles de l'individu. Seules les mutations de la lignée germinale passent à la descendance." },
      ],
      quiz: [
        { q: "À quel moment de la méiose les chromosomes homologues se séparent-ils ?", choix: ["En anaphase de la première division","En anaphase de la deuxième division","En prophase de la première division","En métaphase de la deuxième division"], bonne: 0, expl: "Les homologues se séparent en anaphase I ; en anaphase II, ce sont les chromatides.", niv: 1 },
        { q: "Quel mécanisme crée de nouvelles combinaisons d'allèles sur un même chromosome ?", choix: ["La séparation au hasard des paires d'homologues","Le crossing-over entre homologues","Le doublement de l'ADN avant la méiose","La fusion des gamètes lors de la fécondation"], bonne: 1, expl: "Le crossing-over échange des portions de chromatides homologues : c'est le brassage intrachromosomique.", niv: 1 },
        { q: "Combien de chromosomes contient un gamète humain normal ?", choix: ["23 chromosomes","46 chromosomes","22 chromosomes","92 chromosomes"], bonne: 0, expl: "Un gamète est haploïde : n = 23 chez l'humain.", niv: 1 },
        { q: "Un test-cross pour deux gènes donne 4 phénotypes à environ 25 % chacun. Qu'en déduit-on ?", choix: ["Ils sont sur une même paire de chromosomes, sans recombinaison","Ils sont sur deux paires de chromosomes différentes","L'individu testé est homozygote pour les deux gènes","Ils sont liés et souvent séparés par crossing-over"], bonne: 1, expl: "L'équiprobabilité des 4 types de gamètes signe le brassage interchromosomique, donc des gènes indépendants.", niv: 2 },
        { q: "Un test-cross donne 42 %, 42 %, 8 % et 8 % des quatre phénotypes. Que représentent les classes à 8 % ?", choix: ["Des phénotypes parentaux majoritaires","Des recombinés issus de crossing-over","Des recombinés dus à l'anaphase I","Des descendants porteurs de mutations"], bonne: 1, expl: "Gènes liés : les recombinés minoritaires viennent de crossing-over en prophase I.", niv: 2 },
        { q: "Pourquoi croise-t-on l'individu à tester avec un homozygote récessif ?", choix: ["Il empêche tout crossing-over chez le descendant","Ses gamètes apportent des allèles dominants faciles à repérer","Il produit plus de gamètes recombinés que les autres","Ses gamètes n'apportent que des allèles récessifs"], bonne: 3, expl: "Le phénotype des descendants reflète alors directement l'allèle apporté par le gamète de l'individu testé.", niv: 2 },
        { q: "Un caryotype montre trois chromosomes 21. Quelle anomalie l'explique ?", choix: ["Un crossing-over inégal lors de la mitose","Une duplication d'un gène du chromosome 21","Une mutation ponctuelle dans un gamète","Une non-disjonction lors de la méiose d'un parent"], bonne: 3, expl: "Une mauvaise séparation des chromosomes 21 en méiose donne un gamète à 2 chromosomes 21.", niv: 2 },
        { q: "Des gènes de globines ont des séquences très proches et sont sur le même chromosome. Que suggère ce document ?", choix: ["Ils viennent de transferts horizontaux récents","Ils sont apparus par brassage interchromosomique","Ils viennent de duplications d'un gène ancestral","Ils sont recombinés à chaque fécondation"], bonne: 2, expl: "Des gènes proches et voisins forment une famille multigénique issue de duplications puis de mutations.", niv: 2 },
        { q: "Une tumeur est formée de cellules portant toutes la même mutation absente du reste du corps. Qu'en déduit-on ?", choix: ["Elle vient d'une mutation héritée de l'un des deux parents","Elle vient d'un brassage anormal lors de la méiose","Elle vient d'une cellule mutée qui s'est divisée","Chaque cellule a muté séparément de la même façon"], bonne: 2, expl: "Les cellules issues d'une cellule mutée forment un clone : la mutation somatique est transmise par mitose.", niv: 2 },
        { q: "Pourquoi deux enfants des mêmes parents (hors vrais jumeaux) n'ont-ils pas le même génotype ?", choix: ["Seule la fécondation crée de la diversité entre les enfants","Les mutations propres à chaque enfant en sont la cause","Chaque parent change de chromosomes entre deux enfants","Méiose et fécondation brassent les allèles à chaque fois"], bonne: 3, expl: "Les deux brassages de la méiose, amplifiés par la fécondation au hasard, rendent chaque génotype unique.", niv: 3 },
        { q: "Un individu (A B // a b) donne au test-cross 50 % [AB] et 50 % [ab]. Que peut-on conclure ?", choix: ["Les gènes sont liés et séparés par un crossing-over à chaque méiose","Les gènes sont indépendants et se séparent en anaphase I","Les gènes sont liés et très proches sur le chromosome","L'individu testé est homozygote récessif pour les deux gènes"], bonne: 2, expl: "Sans recombinés, les allèles restent associés : gènes liés très proches, sans crossing-over observé entre eux.", niv: 3 },
        { q: "Quel est l'effet d'une mutation dans une cellule de la peau d'un adulte ?", choix: ["Elle peut passer à ses cellules filles, mais jamais à ses enfants","Elle passe à ses enfants si elle touche un gène important","Elle est corrigée lors de la mitose suivante","Elle modifie le génotype de tous les gamètes produits"], bonne: 0, expl: "Une mutation somatique ne touche pas la lignée germinale : elle reste dans le clone de cellules de l'individu.", niv: 3 },
      ],
    },
    {
      chapitre: "svt-2",
      fiche: `## La complexification des génomes

Les génomes ne se transmettent pas seulement des parents aux descendants. Ils peuvent aussi recevoir de l'ADN venu d'autres êtres vivants, parfois d'espèces très éloignées. Ces échanges ont rendu les génomes plus grands et plus complexes au cours de l'évolution.

### Transfert vertical et transfert horizontal
- Le **transfert vertical** : les gènes passent des parents à leurs descendants, par la reproduction (sexuée ou asexuée).
- Le **transfert horizontal** : de l'ADN passe d'un être vivant à un autre **sans reproduction**, y compris entre espèces différentes.
- Conséquence : un génome peut contenir des gènes dont l'histoire est différente de celle de l'espèce. On le repère quand un gène ressemble beaucoup plus à celui d'une espèce éloignée qu'à celui des espèces proches.

### Les transferts horizontaux chez les bactéries
- Ils sont très fréquents chez les bactéries. Trois voies principales :
- La **conjugaison** : une bactérie transmet un **plasmide** (petit ADN circulaire) à une autre par contact direct.
- La **transformation** : une bactérie absorbe de l'ADN libre dans le milieu, venu d'une bactérie morte.
- La **transduction** : un virus de bactérie (bactériophage) emporte un morceau d'ADN d'une bactérie et l'injecte dans une autre.
- Exemple concret : la **résistance aux antibiotiques** se répand vite, car les gènes de résistance, souvent portés par des plasmides, passent d'une bactérie à l'autre, même entre espèces.

### Les transferts horizontaux chez les eucaryotes
- Les **virus** peuvent intégrer leur ADN dans le génome de leur hôte. Si cela touche la lignée germinale, la séquence est transmise ensuite de façon verticale.
- Exemple : les gènes des **syncytines**, indispensables à la formation du **placenta** chez les mammifères, viennent de gènes d'enveloppe de **rétrovirus** intégrés il y a très longtemps.
- Exemple chez les plantes : la bactérie **Agrobacterium tumefaciens** transfère un fragment d'ADN (l'ADN-T de son plasmide) dans les cellules de la plante. Cette propriété est utilisée pour fabriquer des plantes transgéniques.
- Une part importante du génome humain est faite de séquences d'origine virale.

### Les endosymbioses
- Une **endosymbiose** : un être vivant vit à l'intérieur des cellules d'un autre, et les deux en tirent profit.
- La **mitochondrie** descend d'une bactérie (proche des alpha-protéobactéries) intégrée par une cellule ancestrale. Le **chloroplaste** descend d'une **cyanobactérie** (bactérie photosynthétique) intégrée plus tard dans la lignée des végétaux.
- Arguments : ces organites ont une **double membrane**, leur propre **ADN circulaire**, des **ribosomes** proches de ceux des bactéries, et ils se divisent par **division** comme des bactéries.
- Au fil du temps, beaucoup de gènes de l'organite sont passés dans le **noyau** de la cellule hôte : c'est un transfert de gènes à l'intérieur de la cellule. L'organite ne peut plus vivre seul.

### Ce qu'il faut comprendre
- Ces mécanismes expliquent l'**acquisition** de fonctions nouvelles d'un coup, sans attendre l'accumulation lente de mutations.
- Ils s'ajoutent aux mutations, aux duplications et aux brassages pour expliquer la diversité et la complexité des génomes.

### À retenir pour le bac
- Définir transfert horizontal : sans reproduction, entre individus parfois d'espèces différentes.
- Citer les 3 voies bactériennes et l'exemple de la résistance aux antibiotiques.
- Donner les 4 arguments de l'origine bactérienne des mitochondries et chloroplastes.
- Le piège : la mitochondrie vient d'une alpha-protéobactérie, le chloroplaste d'une cyanobactérie, pas l'inverse.`,
      cartes: [
        { q: "Qu'est-ce qu'un transfert horizontal de gènes ?", r: "Le passage d'ADN d'un être vivant à un autre sans reproduction, parfois entre espèces différentes." },
        { q: "Qu'est-ce qu'un transfert vertical ?", r: "La transmission des gènes des parents à leurs descendants, par la reproduction." },
        { q: "Qu'est-ce que la conjugaison bactérienne ?", r: "Le transfert d'un plasmide d'une bactérie à une autre par contact direct." },
        { q: "Qu'est-ce que la transformation bactérienne ?", r: "L'absorption par une bactérie d'ADN libre présent dans le milieu." },
        { q: "Qu'est-ce que la transduction ?", r: "Le transfert d'ADN d'une bactérie à une autre par l'intermédiaire d'un virus (bactériophage)." },
        { q: "Pourquoi la résistance aux antibiotiques se répand-elle si vite ?", r: "Les gènes de résistance, souvent sur des plasmides, passent d'une bactérie à l'autre par transfert horizontal, même entre espèces." },
        { q: "D'où viennent les gènes des syncytines ?", r: "De gènes d'enveloppe de rétrovirus intégrés dans le génome d'ancêtres des mammifères. Ils servent à former le placenta." },
        { q: "Que fait Agrobacterium tumefaciens ?", r: "Elle transfère un fragment d'ADN de son plasmide (l'ADN-T) dans le génome des cellules de plantes." },
        { q: "Qu'est-ce qu'une endosymbiose ?", r: "Une association où un organisme vit dans les cellules d'un autre, avec bénéfice pour les deux." },
        { q: "De quoi descend la mitochondrie ?", r: "D'une bactérie proche des alpha-protéobactéries, intégrée par une cellule ancestrale." },
        { q: "De quoi descend le chloroplaste ?", r: "D'une cyanobactérie, une bactérie capable de photosynthèse." },
        { q: "Quels arguments montrent l'origine bactérienne des mitochondries ?", r: "Double membrane, ADN circulaire propre, ribosomes de type bactérien, division autonome." },
        { q: "Pourquoi une mitochondrie ne peut-elle plus vivre seule ?", r: "Beaucoup de ses gènes d'origine sont passés dans le noyau de la cellule hôte." },
        { q: "Comment repère-t-on un gène acquis par transfert horizontal ?", r: "Il ressemble beaucoup plus au gène d'une espèce éloignée qu'à ceux des espèces proches." },
      ],
      quiz: [
        { q: "Comment appelle-t-on le passage d'un plasmide d'une bactérie à une autre par contact ?", choix: ["La transformation","La transduction","La conjugaison","La recombinaison"], bonne: 2, expl: "Le contact direct et le plasmide signent la conjugaison ; la transduction passe par un virus.", niv: 1 },
        { q: "De quel type de bactérie descendent les chloroplastes ?", choix: ["D'une alpha-protéobactérie","D'une cyanobactérie","D'une bactérie du sol fixatrice d'azote","D'un bactériophage ancien"], bonne: 1, expl: "Le chloroplaste vient d'une cyanobactérie photosynthétique ; la mitochondrie, d'une alpha-protéobactérie.", niv: 1 },
        { q: "Quelle structure des mitochondries ressemble à celle des bactéries ?", choix: ["Leur ADN circulaire","Leur paroi de cellulose","Leur noyau entouré d'une enveloppe","Leurs chromosomes linéaires appariés"], bonne: 0, expl: "Les mitochondries ont un ADN circulaire, comme les bactéries ; elles n'ont ni noyau ni paroi de cellulose.", niv: 1 },
        { q: "Une bactérie sensible devient résistante après avoir été cultivée avec des débris d'une bactérie résistante tuée. Quel mécanisme ?", choix: ["La transduction","La conjugaison","La transformation","Une mutation ponctuelle"], bonne: 2, expl: "L'ADN libre des bactéries mortes est absorbé : c'est la transformation.", niv: 2 },
        { q: "Le gène d'une syncytine humaine ressemble à un gène d'enveloppe de rétrovirus. Qu'en déduit-on ?", choix: ["Ce gène vient d'un virus intégré chez un ancêtre","Ce gène est réintroduit par un virus à chaque génération","Les rétrovirus ont reçu ce gène des mammifères récemment","Ce gène est apparu par duplication d'un gène humain"], bonne: 0, expl: "La séquence d'origine virale, intégrée dans la lignée germinale, se transmet depuis de façon verticale.", niv: 2 },
        { q: "Dans un hôpital, deux espèces de bactéries différentes portent le même plasmide de résistance. Qu'en déduit-on ?", choix: ["Chaque espèce a muté de la même façon","Une espèce descend de l'autre","L'antibiotique a créé le plasmide dans les deux","Le plasmide est passé d'une espèce à l'autre"], bonne: 3, expl: "Un même plasmide chez deux espèces montre un transfert horizontal ; l'antibiotique sélectionne, il ne crée pas.", niv: 2 },
        { q: "Un gène d'une plante ressemble à un gène d'Agrobacterium et non à ceux des plantes proches. Hypothèse la plus probable ?", choix: ["Une convergence due au même milieu de vie","Un brassage lors de la méiose de la plante","Une mutation ancienne commune aux plantes","Un transfert horizontal depuis la bactérie"], bonne: 3, expl: "Un gène plus proche d'une espèce éloignée que des espèces proches signe un transfert horizontal.", niv: 2 },
        { q: "On montre que les ribosomes des chloroplastes sont sensibles aux mêmes antibiotiques que ceux des bactéries. Que confirme ce résultat ?", choix: ["L'origine virale du chloroplaste","L'origine bactérienne du chloroplaste","Le passage des gènes du noyau vers le chloroplaste","La présence d'un noyau dans le chloroplaste"], bonne: 1, expl: "Des ribosomes de type bactérien sont un argument de l'endosymbiose.", niv: 2 },
        { q: "Le génome mitochondrial humain ne contient que 37 gènes, bien moins qu'une bactérie. Comment l'expliquer ?", choix: ["La mitochondrie a perdu ses ribosomes","La mitochondrie a eu peu de gènes dès le départ","Beaucoup de gènes sont passés dans le noyau","Les gènes ont été détruits par la fécondation"], bonne: 2, expl: "Lors de l'endosymbiose, de nombreux gènes de la bactérie ancestrale ont été transférés au noyau ou perdus.", niv: 2 },
        { q: "Quel est l'intérêt évolutif principal des transferts horizontaux ?", choix: ["Corriger les erreurs de réplication de l'ADN","Acquérir d'un coup une fonction déjà au point","Maintenir le génome identique d'une génération à l'autre","Supprimer les gènes inutiles d'une espèce"], bonne: 1, expl: "Un gène déjà fonctionnel est reçu en bloc, ce qui est bien plus rapide que l'accumulation de mutations.", niv: 3 },
        { q: "Un virus intègre son ADN dans une cellule du foie d'un mammifère. Que devient cette séquence ?", choix: ["Elle passe aux descendants de façon verticale","Elle passe à toutes les cellules du corps","Elle forme un nouvel organite dans la cellule","Elle ne passe pas à la descendance"], bonne: 3, expl: "Seule une intégration dans la lignée germinale peut être transmise aux descendants.", niv: 3 },
        { q: "Lequel de ces faits n'est **pas** un argument de l'origine bactérienne des mitochondries ?", choix: ["Elles produisent de l'ATP pour la cellule","Elles ont leurs propres ribosomes","Elles ont deux membranes","Elles se divisent de façon autonome"], bonne: 0, expl: "Produire de l'ATP est leur fonction, pas une preuve de leur origine ; les trois autres faits rapprochent la mitochondrie d'une bactérie.", niv: 3 },
      ],
    },
    {
      chapitre: "svt-3",
      fiche: `## L'évolution des génomes dans les populations

Une **population** est un ensemble d'individus de la même espèce qui vivent au même endroit et se reproduisent entre eux. Sa composition génétique se mesure par les **fréquences des allèles**. Ce chapitre montre pourquoi ces fréquences changent forcément au fil des générations.

### Le modèle de Hardy-Weinberg
- Pour un gène à deux allèles A et a, on note **p** la fréquence de A et **q** celle de a, avec **p + q = 1**.
- Si la population est en **équilibre de Hardy-Weinberg**, les fréquences des génotypes sont : **p²** pour AA, **2pq** pour Aa, **q²** pour aa (et p² + 2pq + q² = 1).
- Le modèle dit que les fréquences des allèles **restent stables** de génération en génération, à condition que : la population soit très grande, que les unions se fassent au hasard (**panmixie**), et qu'il n'y ait ni mutation, ni migration, ni sélection.
- Ces conditions ne sont jamais toutes réunies dans la nature. Le modèle sert de **référence** : si les fréquences observées s'en écartent, c'est qu'une force évolutive agit.
- Calcul classique : si 4 % des individus sont aa, alors q² = 0,04, donc q = 0,2 et p = 0,8. Les hétérozygotes représentent 2pq = 0,32, soit 32 %.

### Les forces qui font évoluer les fréquences
- La **sélection naturelle** : les individus porteurs de certains allèles survivent ou se reproduisent mieux dans un milieu donné. Leurs allèles deviennent plus fréquents. Exemple : chez la phalène du bouleau, la forme sombre est devenue fréquente dans les zones industrielles noircies par la suie, où elle était moins visible pour les oiseaux.
- La **dérive génétique** : la variation **au hasard** des fréquences d'une génération à l'autre, parce que seuls certains individus se reproduisent. Elle est d'autant plus forte que la population est **petite**. Elle peut faire disparaître ou fixer un allèle, même sans avantage.
- L'**effet fondateur** : quelques individus fondent une nouvelle population, avec des fréquences différentes de la population d'origine. Exemple : une maladie génétique rare devient fréquente dans une population isolée.
- Les **migrations** (flux de gènes) apportent ou retirent des allèles.
- Les **mutations** créent de nouveaux allèles, mais très lentement.

### De la population à l'espèce
- Une **espèce** est un ensemble de populations dont les individus peuvent se reproduire entre eux et avoir une descendance **fertile**. En pratique, on parle d'une population suffisamment **isolée génétiquement** des autres.
- La **spéciation** : apparition de nouvelles espèces. Il faut un **isolement reproducteur** (géographique, comportemental, période de reproduction différente…). Ensuite, sélection et dérive font diverger les populations séparées.
- Exemple : des populations séparées par une barrière géographique accumulent des différences jusqu'à ne plus pouvoir se reproduire entre elles.
- Une espèce n'est pas figée : elle a une histoire, elle évolue et peut disparaître.

### Une évolution inéluctable
- Comme les conditions de Hardy-Weinberg ne sont jamais réunies, la composition génétique des populations change **forcément** au fil du temps : c'est l'évolution.

### À retenir pour le bac
- Savoir faire le calcul : q² donne q, puis p = 1 - q, puis 2pq.
- Dérive = hasard, forte dans les petites populations. Sélection = avantage dans un milieu donné.
- Le piège : la sélection ne crée pas les allèles, elle trie ceux qui existent déjà.
- Le modèle de Hardy-Weinberg est un modèle théorique de référence, pas une description de la réalité.`,
      cartes: [
        { q: "Qu'est-ce qu'une population, en génétique ?", r: "Un ensemble d'individus de la même espèce, au même endroit, qui se reproduisent entre eux." },
        { q: "Que vaut p + q pour un gène à deux allèles ?", r: "p + q = 1, où p et q sont les fréquences des deux allèles." },
        { q: "Quelles sont les fréquences génotypiques de Hardy-Weinberg ?", r: "p² pour AA, 2pq pour Aa, q² pour aa." },
        { q: "Quelles sont les conditions du modèle de Hardy-Weinberg ?", r: "Très grande population, panmixie (unions au hasard), pas de mutation, de migration ni de sélection." },
        { q: "Qu'est-ce que la panmixie ?", r: "Le fait que les individus se reproduisent au hasard, sans choix du partenaire selon son génotype." },
        { q: "À quoi sert le modèle de Hardy-Weinberg ?", r: "À servir de référence : un écart aux fréquences prévues montre qu'une force évolutive agit." },
        { q: "Qu'est-ce que la sélection naturelle ?", r: "Le tri des allèles qui donnent un avantage de survie ou de reproduction dans un milieu donné." },
        { q: "Qu'est-ce que la dérive génétique ?", r: "La variation au hasard des fréquences des allèles d'une génération à l'autre, plus forte dans les petites populations." },
        { q: "Qu'est-ce que l'effet fondateur ?", r: "Une nouvelle population fondée par peu d'individus a des fréquences d'allèles différentes de la population d'origine." },
        { q: "Quel exemple classique illustre la sélection naturelle ?", r: "La phalène du bouleau : la forme sombre est devenue fréquente dans les zones noircies par la pollution, moins visible pour les oiseaux." },
        { q: "Si q² = 0,09, que valent q, p et 2pq ?", r: "q = 0,3 ; p = 0,7 ; 2pq = 0,42." },
        { q: "Qu'est-ce qu'une espèce ?", r: "Un ensemble d'individus pouvant se reproduire entre eux et avoir une descendance fertile, isolé génétiquement des autres." },
        { q: "Qu'est-ce que la spéciation ?", r: "L'apparition d'une nouvelle espèce, après un isolement reproducteur puis la divergence des populations." },
        { q: "Pourquoi l'évolution est-elle inéluctable ?", r: "Les conditions de Hardy-Weinberg ne sont jamais réunies : les fréquences des allèles changent forcément." },
      ],
      quiz: [
        { q: "Quelle force évolutive est la plus forte dans une petite population ?", choix: ["La sélection naturelle","La dérive génétique","Les mutations","Les migrations"], bonne: 1, expl: "Le hasard de l'échantillonnage pèse plus quand peu d'individus se reproduisent.", niv: 1 },
        { q: "Dans le modèle de Hardy-Weinberg, que représente 2pq ?", choix: ["La fréquence des hétérozygotes","La fréquence des homozygotes dominants","La somme des deux allèles","La fréquence de l'allèle dominant"], bonne: 0, expl: "p² = AA, 2pq = Aa, q² = aa.", niv: 1 },
        { q: "Quelle condition fait partie du modèle de Hardy-Weinberg ?", choix: ["Les mutations sont fréquentes","La population est petite et isolée","Les individus choisissent leur partenaire","Les unions se font au hasard"], bonne: 3, expl: "La panmixie est une condition du modèle, avec une très grande population et l'absence de forces évolutives.", niv: 1 },
        { q: "Dans une population, 16 % des individus sont aa. Quelle est la fréquence de l'allèle a ?", choix: ["0,16","0,08","0,4","0,2"], bonne: 2, expl: "q² = 0,16 donc q = 0,4.", niv: 2 },
        { q: "Dans une population à l'équilibre, q = 0,1. Quelle est la proportion d'hétérozygotes ?", choix: ["1 %","9 %","10 %","18 %"], bonne: 3, expl: "p = 0,9 et 2pq = 2 × 0,9 × 0,1 = 0,18.", niv: 2 },
        { q: "Une île est peuplée par 10 oiseaux venus du continent ; un allèle rare y devient fréquent. Quel mécanisme ?", choix: ["Une sélection naturelle","Un effet fondateur","Un flux de gènes","Une panmixie"], bonne: 1, expl: "Peu de fondateurs portent par hasard des fréquences différentes : c'est un effet fondateur, une forme de dérive.", niv: 2 },
        { q: "Après l'arrivée d'un insecticide, l'allèle de résistance passe de 2 % à 60 % en 10 ans. Quelle force est en jeu ?", choix: ["La dérive génétique","L'effet fondateur","Les migrations","La sélection naturelle"], bonne: 3, expl: "Les porteurs de l'allèle survivent mieux en présence de l'insecticide : c'est une sélection.", niv: 2 },
        { q: "Les fréquences observées d'une population restent égales à p², 2pq et q² sur plusieurs générations. Que conclut-on ?", choix: ["La population est de petite taille","La sélection naturelle agit fortement","Aucune force évolutive ne se voit sur ce gène","Les mutations sont très nombreuses"], bonne: 2, expl: "Un accord avec le modèle indique qu'aucun écart n'est détecté pour ce gène, sur cette période.", niv: 2 },
        { q: "Deux populations de grenouilles ne se reproduisent pas à la même saison et n'ont plus d'hybrides. Que montre ce document ?", choix: ["Un isolement reproducteur","Un effet fondateur","Une dérive génétique","Un flux de gènes"], bonne: 0, expl: "Une période de reproduction différente empêche les croisements : c'est un isolement reproducteur, étape de la spéciation.", niv: 2 },
        { q: "Pourquoi l'apparition d'un insecticide ne crée-t-elle pas l'allèle de résistance ?", choix: ["L'insecticide modifie seulement les gamètes","La résistance est acquise par chaque individu","L'allèle existait avant, par mutation au hasard","L'allèle vient d'une autre espèce"], bonne: 2, expl: "La sélection trie des allèles déjà présents, apparus au hasard ; elle ne les crée pas.", niv: 3 },
        { q: "Deux populations ont un allèle neutre à des fréquences très différentes. Laquelle de ces explications est la plus solide ?", choix: ["La dérive génétique dans chaque population","Un avantage de cet allèle dans un seul milieu","Des mutations dirigées par le milieu","L'équilibre de Hardy-Weinberg dans chacune"], bonne: 0, expl: "Un allèle neutre ne donne aucun avantage : seul le hasard (dérive) explique l'écart.", niv: 3 },
        { q: "Un âne et une jument donnent un mulet stérile. Que peut-on en conclure ?", choix: ["L'âne et le cheval forment une seule espèce","L'âne et le cheval sont deux espèces distinctes","Le mulet résulte d'un transfert horizontal","Le mulet est une nouvelle espèce stable"], bonne: 1, expl: "La descendance n'est pas fertile : l'âne et le cheval ne forment pas une même espèce.", niv: 3 },
      ],
    },
    {
      chapitre: "svt-4",
      fiche: `## D'autres mécanismes de diversification du vivant

La diversité des êtres vivants ne vient pas seulement des modifications de leurs génomes (mutations, brassages, transferts). D'autres mécanismes diversifient le vivant **sans changer l'ADN** : les associations entre espèces et la transmission de comportements.

### Les symbioses : s'associer pour vivre autrement
- Une **symbiose** est une association durable entre deux espèces, où chacune tire un bénéfice.
- Les **mycorhizes** : association entre les racines de la plupart des plantes et des champignons. Le champignon augmente la surface d'absorption de l'eau et des ions minéraux ; la plante lui fournit des sucres issus de la photosynthèse.
- Les **lichens** : association entre un champignon et une algue ou une cyanobactérie. Le lichen peut coloniser des milieux où aucun des deux ne vivrait seul (rochers nus).
- Les **nodosités** des légumineuses (pois, trèfle) : des bactéries du sol (Rhizobium) fixent l'azote de l'air et le fournissent à la plante.
- Le **microbiote** : l'ensemble des micro-organismes qui vivent dans un organisme (intestin humain par exemple). Il participe à la digestion et à la protection contre certains microbes.
- Le **corail** : des algues unicellulaires vivent dans ses cellules et lui fournissent des sucres.
- Ces associations donnent de **nouvelles capacités** au couple d'espèces, sans modifier leurs génomes. Elles se mettent en place à chaque génération.

### La transmission de comportements
- Chez beaucoup d'animaux, des comportements sont **appris** auprès des autres et transmis d'une génération à l'autre : c'est une **transmission culturelle**.
- Exemple : chez de nombreux oiseaux chanteurs, le jeune apprend le **chant** de son espèce en écoutant un adulte. Des populations d'une même espèce peuvent avoir des « dialectes » différents.
- Exemple : chez les chimpanzés, l'usage d'outils (casser des noix avec une pierre, pêcher des termites avec une tige) varie selon les groupes et s'apprend par imitation.
- Ces comportements peuvent séparer des populations : si deux groupes n'ont plus le même chant de parade, ils ne se reconnaissent plus et ne se reproduisent plus entre eux. Cela peut participer à un **isolement reproducteur**.
- Chez l'humain, la **culture** (langues, techniques, savoirs) se transmet surtout de cette façon, bien plus vite que les gènes.

### Comparer les mécanismes
- Les mécanismes génétiques (mutation, brassage, transfert horizontal) modifient le génome et se transmettent par l'ADN.
- Les symbioses et la transmission culturelle ne modifient pas le génome. Elles doivent se **reconstruire** à chaque génération (nouvelle association, nouvel apprentissage).
- Les deux types de mécanismes se combinent pour produire la diversité observée.

### À retenir pour le bac
- Savoir citer au moins deux symbioses (mycorhize, lichen, nodosité, microbiote) et dire ce que chaque partenaire apporte.
- Savoir citer un exemple de comportement transmis par apprentissage (chant d'oiseau, outils des chimpanzés).
- Le piège : ces mécanismes diversifient le vivant **sans modifier les génomes**.
- Un comportement appris peut contribuer à isoler des populations, donc à la spéciation.`,
      cartes: [
        { q: "Qu'est-ce qu'une symbiose ?", r: "Une association durable entre deux espèces, où chacune tire un bénéfice." },
        { q: "Qu'est-ce qu'une mycorhize ?", r: "L'association entre les racines d'une plante et un champignon." },
        { q: "Qu'apporte le champignon dans une mycorhize ?", r: "Il augmente la surface d'absorption : il fournit à la plante de l'eau et des ions minéraux." },
        { q: "Qu'apporte la plante dans une mycorhize ?", r: "Des sucres (matière organique) produits par la photosynthèse." },
        { q: "Qu'est-ce qu'un lichen ?", r: "Une association entre un champignon et une algue ou une cyanobactérie, capable de coloniser des milieux très pauvres." },
        { q: "Que font les bactéries des nodosités des légumineuses ?", r: "Elles fixent l'azote de l'air et le fournissent à la plante, qui leur donne des sucres." },
        { q: "Qu'est-ce que le microbiote ?", r: "L'ensemble des micro-organismes vivant dans un organisme, par exemple dans l'intestin humain." },
        { q: "Qu'est-ce qu'une transmission culturelle ?", r: "La transmission d'un comportement par apprentissage auprès des autres, sans passer par les gènes." },
        { q: "Comment un jeune oiseau chanteur acquiert-il son chant ?", r: "En écoutant et en imitant un adulte de son espèce pendant une période d'apprentissage." },
        { q: "Quel exemple de transmission culturelle chez les chimpanzés ?", r: "L'usage d'outils (pierre pour casser des noix, tige pour pêcher des termites), différent selon les groupes." },
        { q: "En quoi un comportement appris peut-il mener à la spéciation ?", r: "Si deux populations n'ont plus le même chant ou la même parade, elles ne se reproduisent plus entre elles." },
        { q: "Qu'ont en commun symbioses et transmission culturelle ?", r: "Elles diversifient le vivant sans modifier le génome." },
        { q: "Pourquoi une symbiose doit-elle se reconstruire à chaque génération ?", r: "Elle n'est pas inscrite dans l'ADN : les partenaires doivent se retrouver et s'associer à nouveau." },
      ],
      quiz: [
        { q: "Comment appelle-t-on l'association entre les racines d'une plante et un champignon ?", choix: ["Un lichen","Une nodosité","Une mycorhize","Un microbiote"], bonne: 2, expl: "Le lichen associe champignon et algue ; la nodosité, plante et bactérie.", niv: 1 },
        { q: "Quels partenaires forment un lichen ?", choix: ["Une algue et un animal marin fixé","Une plante et une bactérie fixatrice d'azote","Un champignon et les racines d'un arbre","Un champignon et une algue ou une cyanobactérie"], bonne: 3, expl: "Le lichen associe un champignon à un partenaire photosynthétique.", niv: 1 },
        { q: "Comment appelle-t-on la transmission d'un comportement par apprentissage ?", choix: ["Une transmission verticale","Une transmission culturelle","Une transmission génétique","Une transmission horizontale"], bonne: 1, expl: "Elle passe par l'imitation, pas par l'ADN ; les transferts vertical et horizontal concernent les gènes.", niv: 1 },
        { q: "Des pins cultivés sans champignon du sol poussent moins bien que des pins avec champignon. Que suggère ce résultat ?", choix: ["La mycorhize améliore la nutrition du pin","La racine du pin absorbe mieux sans champignon","Le champignon est un parasite du pin","Le champignon fait la photosynthèse du pin"], bonne: 0, expl: "Le champignon augmente l'absorption d'eau et d'ions : la plante en profite.", niv: 2 },
        { q: "Un pois cultivé sur un sol sans azote pousse bien s'il porte des nodosités. Comment l'expliquer ?", choix: ["Les nodosités font la photosynthèse à la place des feuilles","Le pois fixe lui-même l'azote grâce à ses gènes","Les nodosités stockent l'azote venu des feuilles","Les bactéries des nodosités fixent l'azote de l'air"], bonne: 3, expl: "Les bactéries (Rhizobium) des nodosités apportent l'azote à la plante.", niv: 2 },
        { q: "Un jeune pinson élevé seul, sans entendre d'adulte, produit un chant anormal. Qu'en déduit-on ?", choix: ["Le chant est codé par un seul gène","Le chant dépend surtout de l'alimentation","Le chant s'acquiert en partie par apprentissage","Le chant ne sert pas à la reproduction"], bonne: 2, expl: "Sans modèle à imiter, le chant ne se développe pas normalement : il est en partie appris.", niv: 2 },
        { q: "Deux groupes de chimpanzés de même génome cassent les noix différemment. Comment l'expliquer ?", choix: ["Les techniques sont apprises dans chaque groupe","Chaque groupe a ses propres mutations","La sélection naturelle a créé deux techniques","Les outils changent le génome des chimpanzés"], bonne: 0, expl: "Des groupes génétiquement proches mais aux pratiques différentes montrent une transmission culturelle.", niv: 2 },
        { q: "Des souris sans microbiote intestinal digèrent mal certaines fibres. Que montre ce résultat ?", choix: ["Le microbiote est sans effet sur l'hôte","Le microbiote participe à la digestion","Les fibres détruisent le microbiote","La souris digère seule toutes les fibres"], bonne: 1, expl: "Sans microbiote, une fonction disparaît : les micro-organismes apportent une capacité à l'hôte.", niv: 2 },
        { q: "Deux populations d'oiseaux d'une même espèce ont des chants différents et ne s'accouplent plus entre elles. Que montre ce document ?", choix: ["Les chants différents sont dus à des mutations","Ces populations sont en panmixie","Un comportement appris peut isoler des populations","Le chant ne sert qu'à défendre le territoire"], bonne: 2, expl: "Le chant sert à reconnaître un partenaire : des chants différents créent un isolement reproducteur.", niv: 3 },
        { q: "Quelle différence majeure sépare une mycorhize d'un transfert horizontal de gènes ?", choix: ["La mycorhize modifie le génome de la plante","La mycorhize ne modifie pas le génome des partenaires","Le transfert horizontal se reconstruit à chaque génération","Le transfert horizontal est réservé aux animaux"], bonne: 1, expl: "Une symbiose associe deux organismes sans changer leur ADN ; un transfert horizontal intègre de l'ADN.", niv: 3 },
        { q: "Pourquoi une transmission culturelle peut-elle changer plus vite qu'un caractère génétique ?", choix: ["Un comportement nouveau peut se répandre en une génération","Les gènes ne changent pas au cours du temps","Les comportements appris modifient les gamètes","La culture passe par la méiose et la fécondation"], bonne: 0, expl: "Un comportement appris se diffuse entre individus d'une même génération, sans attendre la reproduction.", niv: 3 },
      ],
    },
    {
      chapitre: "svt-5",
      fiche: `## Le temps et les roches

Les roches gardent la trace du passé de la Terre. Pour lire cette histoire, il faut savoir dater : soit en ordonnant les événements les uns par rapport aux autres (**chronologie relative**), soit en leur donnant un âge en années (**chronologie absolue**).

### La chronologie relative : ordonner les événements
- **Principe de superposition** : dans une série de couches sédimentaires non déformée, une couche est plus récente que celle qu'elle recouvre.
- **Principe de continuité** : une même couche a le même âge sur toute son étendue.
- **Principe de recoupement** : une structure (faille, filon, intrusion de magma) qui recoupe une roche est plus récente que cette roche.
- **Principe d'inclusion** : un morceau de roche inclus dans une autre est plus ancien que la roche qui l'emballe.
- **Principe d'identité paléontologique** : deux couches qui contiennent les mêmes **fossiles stratigraphiques** ont le même âge. Un bon fossile stratigraphique a vécu peu de temps, sur une grande surface, et il est abondant. Exemple : les ammonites.
- Une **discordance** (couches horizontales posées sur des couches plissées et érodées) montre une interruption : plissement, puis érosion, puis nouvelle sédimentation.

### L'échelle des temps géologiques
- Les géologues ont découpé l'histoire de la Terre en **ères** et en périodes, à partir des grands changements de faune et de flore.
- Les limites correspondent souvent à des **crises biologiques** (extinctions massives). Exemple : la crise **Crétacé-Paléogène**, il y a **66 millions d'années** (Ma), avec la disparition des dinosaures non aviens et des ammonites.
- La chronologie relative donne un ordre, mais pas de durée.

### La chronologie absolue : la radiochronologie
- Certains éléments chimiques sont **radioactifs** : un **élément père** se désintègre spontanément en **élément fils**, à un rythme constant.
- La **période** (ou **demi-vie**) est le temps au bout duquel la moitié des atomes pères s'est désintégrée. Après 2 périodes, il reste un quart des atomes pères.
- Le chronomètre démarre à la **fermeture du système** : par exemple quand un minéral cristallise, il ne peut plus échanger d'éléments avec l'extérieur.
- On mesure les quantités d'éléments père et fils, et on en déduit le temps écoulé depuis la fermeture.

### Choisir le bon chronomètre
- Le **carbone 14** : période d'environ **5 730 ans**. Il sert pour des restes d'êtres vivants récents, jusqu'à environ 50 000 ans. Au-delà, il en reste trop peu pour le mesurer.
- Le couple **potassium-argon** (K/Ar) : très longue période (environ 1,3 milliard d'années). Il date les roches volcaniques. Il suppose qu'il n'y avait pas d'argon au départ : l'argon, gaz, s'échappe de la lave en fusion.
- La méthode **rubidium-strontium** (Rb/Sr) : on mesure plusieurs minéraux d'une même roche. Les points s'alignent sur une droite appelée **isochrone**. Plus la pente de la droite est forte, plus la roche est ancienne.
- La méthode **uranium-plomb** date des roches et minéraux très anciens.
- La règle : la période doit être adaptée à l'âge cherché. Une période trop courte pour un âge très ancien ne laisse plus rien à mesurer.
- L'âge de la Terre est estimé à environ **4,55 milliards d'années**, grâce à la datation des météorites.

### Croiser les deux chronologies
- La chronologie absolue permet de mettre des âges sur l'échelle relative. Exemple : dater une coulée volcanique située entre deux couches fossilifères encadre l'âge de ces couches.

### À retenir pour le bac
- Savoir appliquer les principes pour ordonner des événements sur une coupe géologique, en justifiant chaque étape par le nom du principe.
- Savoir expliquer pourquoi on choisit tel chronomètre (période adaptée à l'âge).
- Le piège : le carbone 14 ne date pas des roches de millions d'années.
- Isochrone Rb/Sr : pente plus forte = roche plus ancienne.`,
      cartes: [
        { q: "Énonce le principe de superposition.", r: "Dans une série non déformée, une couche est plus récente que celle qu'elle recouvre." },
        { q: "Énonce le principe de recoupement.", r: "Une structure qui en recoupe une autre (faille, filon) est plus récente qu'elle." },
        { q: "Énonce le principe d'inclusion.", r: "Un fragment de roche inclus dans une autre roche est plus ancien que celle-ci." },
        { q: "Énonce le principe de continuité.", r: "Une même couche a le même âge sur toute son étendue." },
        { q: "Qu'est-ce qu'un bon fossile stratigraphique ?", r: "Un fossile d'une espèce qui a vécu peu de temps, sur une grande surface, et en grand nombre (ex. : ammonites)." },
        { q: "Que montre une discordance angulaire ?", r: "Une interruption de la sédimentation : plissement, érosion, puis dépôt de nouvelles couches." },
        { q: "Quand a eu lieu la crise Crétacé-Paléogène ?", r: "Il y a 66 millions d'années ; disparition des dinosaures non aviens et des ammonites." },
        { q: "Qu'est-ce que la période (demi-vie) d'un élément radioactif ?", r: "Le temps au bout duquel la moitié des atomes pères s'est désintégrée." },
        { q: "Que signifie la fermeture du système ?", r: "Le moment où la roche ou le minéral n'échange plus d'éléments avec l'extérieur ; le chronomètre démarre." },
        { q: "Quelle est la période du carbone 14 et sa limite d'usage ?", r: "Environ 5 730 ans ; utilisable jusqu'à environ 50 000 ans." },
        { q: "Quelle hypothèse fait la méthode potassium-argon ?", r: "Qu'il n'y avait pas d'argon dans la roche au départ, car ce gaz s'échappe de la lave en fusion." },
        { q: "Qu'est-ce qu'une isochrone ?", r: "La droite sur laquelle s'alignent les minéraux d'une même roche en méthode Rb/Sr. Sa pente augmente avec l'âge." },
        { q: "Quel est l'âge de la Terre ?", r: "Environ 4,55 milliards d'années, d'après la datation des météorites." },
        { q: "Pourquoi ne date-t-on pas un granite de 300 Ma au carbone 14 ?", r: "La période est trop courte : après 300 Ma, il ne reste plus de carbone 14 mesurable." },
      ],
      quiz: [
        { q: "Une faille coupe trois couches mais pas la quatrième, posée au-dessus. Quel principe permet de dater la faille ?", choix: ["Le principe de continuité","Le principe de recoupement","Le principe d'inclusion","Le principe d'identité paléontologique"], bonne: 1, expl: "La faille recoupe les trois couches : elle est plus récente qu'elles, et plus ancienne que la quatrième.", niv: 1 },
        { q: "Qu'appelle-t-on la période d'un élément radioactif ?", choix: ["Le temps pour que la moitié des atomes fils se forme","Le temps pour que tous les atomes pères se désintègrent","Le temps pour que la moitié des atomes pères se désintègre","Le temps écoulé depuis la formation de la Terre"], bonne: 2, expl: "Après une période, il reste la moitié des atomes pères de départ.", niv: 1 },
        { q: "Quel est l'âge estimé de la Terre ?", choix: ["450 millions d'années","13,8 milliards d'années","66 millions d'années","4,55 milliards d'années"], bonne: 3, expl: "4,55 Ga, d'après les météorites ; 13,8 Ga est l'âge estimé de l'Univers.", niv: 1 },
        { q: "Quelle méthode convient pour dater un os de 12 000 ans ?", choix: ["Le carbone 14","Le potassium-argon","Le rubidium-strontium","L'uranium-plomb"], bonne: 0, expl: "Le carbone 14 a une période adaptée aux âges de quelques milliers d'années.", niv: 2 },
        { q: "Après 3 périodes, quelle fraction des atomes pères reste-t-il ?", choix: ["1/3","1/6","1/4","1/8"], bonne: 3, expl: "1/2, puis 1/4, puis 1/8 : la quantité est divisée par 2 à chaque période.", niv: 2 },
        { q: "Un galet de granite est inclus dans un conglomérat. Que peut-on dire de leurs âges ?", choix: ["Le conglomérat est plus ancien que le granite","On ne peut rien dire sans radiochronologie","Ils se sont formés en même temps","Le granite est plus ancien que le conglomérat"], bonne: 3, expl: "Principe d'inclusion : l'élément inclus existait avant la roche qui l'emballe.", niv: 2 },
        { q: "Deux couches éloignées de 200 km contiennent la même espèce d'ammonite. Que conclut-on ?", choix: ["Elles sont de même nature","Elles ont le même âge","Elles se sont déposées dans le même lac","Elles se superposent sur toute leur surface"], bonne: 1, expl: "Principe d'identité paléontologique : les mêmes fossiles stratigraphiques indiquent le même âge.", niv: 2 },
        { q: "Deux isochrones Rb/Sr : celle du granite A a une pente plus forte que celle du granite B. Que conclut-on ?", choix: ["Le granite B est le plus ancien","Ces granites ont le même âge","Le granite A est le plus ancien","Le granite A contient le moins de rubidium"], bonne: 2, expl: "Plus la pente de l'isochrone est forte, plus la roche est ancienne.", niv: 2 },
        { q: "Des couches horizontales reposent sur des couches plissées dont le sommet est érodé. Quelle succession d'événements ?", choix: ["Plissement, dépôt, érosion, nouveau dépôt","Dépôt, plissement, érosion, nouveau dépôt","Dépôt, érosion, nouveau dépôt, plissement","Érosion, plissement, dépôt, nouveau dépôt"], bonne: 1, expl: "Les couches du bas se déposent, se plissent, sont érodées, puis les couches horizontales se déposent : c'est une discordance.", niv: 2 },
        { q: "Pourquoi la méthode K/Ar suppose-t-elle qu'il n'y avait pas d'argon au départ ?", choix: ["L'argon, gaz, s'échappe de la lave avant la solidification","L'argon est absent des minéraux de la croûte","L'argon se transforme en potassium dans la roche","L'argon n'apparaît qu'au contact de l'air"], bonne: 0, expl: "Tant que la lave est fondue, l'argon gazeux s'échappe : tout l'argon mesuré vient ensuite de la désintégration.", niv: 3 },
        { q: "Une coulée volcanique datée de 70 Ma recouvre une couche à fossiles. Que peut-on dire de cette couche ?", choix: ["Elle a plus de 70 Ma","Elle a exactement 70 Ma","Son âge reste inconnu","Elle a moins de 70 Ma"], bonne: 0, expl: "Superposition : la couche recouverte est plus ancienne que la coulée datée.", niv: 3 },
        { q: "Pourquoi ne peut-on pas dater un basalte de 50 Ma au carbone 14 ?", choix: ["Le carbone 14 se forme dans la roche","Le basalte ne contient pas de carbone","Tout son carbone 14 a disparu","La période du carbone 14 est trop longue"], bonne: 2, expl: "Avec une période d'environ 5 730 ans, tout le carbone 14 a disparu après 50 Ma.", niv: 3 },
      ],
    },
    {
      chapitre: "svt-6",
      fiche: `## Les traces du passé mouvementé de la Terre

Les chaînes de montagnes, comme les Alpes, sont des archives. Elles gardent les traces d'un océan disparu, de sa fermeture par **subduction**, puis de la **collision** de deux continents. On reconstitue cette histoire à partir d'indices de terrain.

### Avant l'océan : le rifting et la marge passive
- Un continent qui s'étire se fracture : c'est le **rifting**. Des **failles normales** découpent la croûte en **blocs basculés**.
- Si l'étirement continue, un océan s'ouvre. Le bord du continent devient une **marge passive**, sans séisme ni volcanisme important.
- Sur les blocs basculés, on distingue trois types de sédiments : **anté-rift** (déposés avant, basculés avec le bloc), **syn-rift** (déposés pendant, en éventail contre la faille) et **post-rift** (déposés après, horizontaux, qui recouvrent tout).
- Dans les Alpes, ces blocs basculés témoignent de l'ouverture de l'océan alpin (une partie de la Téthys) au **Jurassique**, il y a environ 180 à 160 Ma.

### Les traces d'un océan disparu : les ophiolites
- Une **ophiolite** est un morceau de **lithosphère océanique** charrié sur un continent.
- On y retrouve, de haut en bas : des sédiments océaniques (radiolarites), des **basaltes en coussins** (pillow-lavas), des **gabbros**, puis des **péridotites** du manteau.
- Exemple : le massif du **Chenaillet**, près de Briançon, est un fragment d'ancien plancher océanique resté presque intact.
- Trouver une ophiolite dans une montagne prouve qu'un océan existait à cet endroit.

### Les traces de la subduction
- Lors de la subduction, la lithosphère océanique plonge sous une autre plaque. Les roches subissent une forte **pression** et une température qui reste assez **basse** : c'est un **métamorphisme haute pression - basse température**.
- Des minéraux nouveaux apparaissent : le **glaucophane** (schistes bleus), puis le **grenat** et la **jadéite** (éclogites) en profondeur.
- La **coésite**, forme de silice qui n'apparaît qu'à très haute pression, a été trouvée dans le massif de Dora Maira (Alpes italiennes) : des roches continentales sont descendues à plus de 90 km de profondeur avant de remonter.
- La suite métagabbro, schiste bleu, éclogite montre un enfouissement de plus en plus profond.

### La collision continentale
- Quand l'océan est fermé, les deux continents se rencontrent. La croûte se raccourcit et **s'épaissit**.
- Indices de raccourcissement : **plis**, **failles inverses**, **chevauchements** et **nappes de charriage** (paquets de roches déplacés sur des dizaines de kilomètres).
- Indice d'épaississement : la **racine crustale**, une croûte qui atteint environ 50 à 60 km d'épaisseur sous la chaîne, contre environ 30 km sous une plaine.
- La **suture** est la zone où l'océan a disparu ; on y trouve les ophiolites.

### L'histoire des Alpes en résumé
- Rifting et ouverture d'un océan (Jurassique), puis fermeture par subduction (Crétacé), puis collision entre l'Europe et la plaque adriatique (à partir d'environ 50 Ma, au Cénozoïque).
- Toutes les montagnes ne sont pas récentes : des chaînes anciennes, très érodées, gardent des traces semblables (exemple : la chaîne hercynienne, qui a formé le Massif central).

### À retenir pour le bac
- Savoir relier chaque indice à une étape : blocs basculés = rifting ; ophiolites = ancien océan ; glaucophane et jadéite = subduction ; plis, chevauchements, racine = collision.
- Faille normale = extension ; faille inverse = compression.
- Le piège : le métamorphisme de subduction est à haute pression mais **basse température**.
- Savoir reconstituer la chronologie en citant les indices.`,
      cartes: [
        { q: "Que montre une faille normale ?", r: "Une extension (étirement) de la croûte, comme lors d'un rifting." },
        { q: "Que montre une faille inverse ?", r: "Une compression (raccourcissement) de la croûte, comme lors d'une collision." },
        { q: "Qu'est-ce qu'une marge passive ?", r: "Le bord d'un continent bordé par un océan en formation, découpé en blocs basculés, sans activité sismique importante." },
        { q: "Qu'est-ce qu'un sédiment syn-rift ?", r: "Un sédiment déposé pendant le basculement des blocs, en forme d'éventail contre la faille." },
        { q: "Qu'est-ce qu'une ophiolite ?", r: "Un fragment de lithosphère océanique charrié sur un continent." },
        { q: "Que trouve-t-on dans une ophiolite ?", r: "Des sédiments océaniques, des basaltes en coussins, des gabbros et des péridotites." },
        { q: "Que prouve une ophiolite dans une montagne ?", r: "Qu'un océan existait à cet endroit avant la formation de la chaîne." },
        { q: "Quel métamorphisme subissent les roches en subduction ?", r: "Un métamorphisme haute pression - basse température." },
        { q: "Quels minéraux indiquent une subduction ?", r: "Le glaucophane (schistes bleus), puis la jadéite et le grenat (éclogites)." },
        { q: "Que prouve la coésite de Dora Maira ?", r: "Que des roches continentales sont descendues à plus de 90 km de profondeur avant de remonter." },
        { q: "Quels indices montrent le raccourcissement d'une chaîne de collision ?", r: "Plis, failles inverses, chevauchements, nappes de charriage." },
        { q: "Qu'est-ce que la racine crustale ?", r: "L'épaississement de la croûte sous une chaîne de montagnes, jusqu'à environ 50 à 60 km." },
        { q: "Qu'est-ce qu'une suture ?", r: "La zone où un ancien océan a disparu entre deux continents en collision ; on y trouve des ophiolites." },
        { q: "Quelles sont les grandes étapes de l'histoire des Alpes ?", r: "Rifting et ouverture d'un océan au Jurassique, subduction au Crétacé, puis collision continentale au Cénozoïque." },
      ],
      quiz: [
        { q: "Quel type de faille découpe une marge passive en blocs basculés ?", choix: ["Des failles inverses","Des failles de décrochement","Des chevauchements","Des failles normales"], bonne: 3, expl: "L'étirement du rifting crée des failles normales ; les failles inverses témoignent d'une compression.", niv: 1 },
        { q: "Quel minéral est typique des schistes bleus formés en subduction ?", choix: ["La coésite","L'olivine","Le glaucophane","Le plagioclase"], bonne: 2, expl: "Le glaucophane donne leur couleur aux schistes bleus ; la coésite indique une pression encore plus forte.", niv: 1 },
        { q: "Comment appelle-t-on un fragment de lithosphère océanique retrouvé sur un continent ?", choix: ["Une éclogite","Une nappe de charriage","Une ophiolite","Une racine crustale"], bonne: 2, expl: "L'ophiolite est un morceau d'ancien plancher océanique ; une nappe est un paquet de roches déplacé, quelle que soit sa nature.", niv: 1 },
        { q: "Dans un massif alpin, on trouve des basaltes en coussins au-dessus de gabbros et de péridotites. Qu'en déduit-on ?", choix: ["Un volcan continental était actif ici","Un océan existait là autrefois","Le manteau est remonté par un rift","Un continent s'est enfoui en subduction"], bonne: 1, expl: "Cette succession est celle de la lithosphère océanique : c'est une ophiolite.", niv: 2 },
        { q: "Un métagabbro contient du glaucophane, un autre de la jadéite et du grenat. Que montre ce document ?", choix: ["Une collision sans subduction préalable","Un réchauffement à faible profondeur","Une remontée de magma sous un rift","Un enfouissement de plus en plus profond"], bonne: 3, expl: "Glaucophane puis jadéite et grenat : la pression augmente, signe d'un enfouissement en subduction.", niv: 2 },
        { q: "Des sédiments forment un éventail épaissi contre une faille normale. Quand se sont-ils déposés ?", choix: ["Avant le rifting","Pendant le rifting","Après le rifting","Pendant la collision"], bonne: 1, expl: "Un dépôt en éventail montre une sédimentation pendant le basculement : ce sont des sédiments syn-rift.", niv: 2 },
        { q: "Sous une chaîne de montagnes, la croûte mesure 55 km d'épaisseur contre 30 km sous la plaine voisine. Qu'en déduit-on ?", choix: ["La croûte s'est amincie par extension","La croûte s'est épaissie par collision","La lithosphère océanique s'est enfoncée","Le manteau est remonté sous la chaîne"], bonne: 1, expl: "La racine crustale montre un épaississement de la croûte, conséquence du raccourcissement.", niv: 2 },
        { q: "Un granite continental contient de la coésite. Que montre ce résultat ?", choix: ["Il a été enfoui à plus de 90 km","Il s'est formé dans une dorsale","Il est resté près de la surface","Il a fondu au contact du magma"], bonne: 0, expl: "La coésite exige une très haute pression : la roche a été enfouie très profondément.", niv: 2 },
        { q: "Des couches sédimentaires sont empilées deux fois dans le même ordre, séparées par une surface inclinée. Que montre ce document ?", choix: ["Une faille normale","Un pli droit","Une discordance","Un chevauchement"], bonne: 3, expl: "La répétition d'une série par superposition anormale signe un chevauchement, donc une compression.", niv: 2 },
        { q: "Pourquoi le métamorphisme de subduction est-il de basse température ?", choix: ["La plaque qui plonge reste froide","Le manteau est froid au-delà de 30 km","La pression empêche toute hausse de température","La croûte océanique ne contient pas d'eau"], bonne: 0, expl: "La lithosphère qui plonge reste froide plus longtemps que le manteau autour : la pression monte plus vite que la température.", niv: 3 },
        { q: "Quel ordre d'événements retrace l'histoire des Alpes ?", choix: ["Rifting, océanisation, subduction, collision","Collision, subduction, rifting, océanisation","Subduction, rifting, collision, océanisation","Océanisation, rifting, collision, subduction"], bonne: 0, expl: "Un océan s'ouvre d'abord, puis se ferme par subduction, et enfin les continents entrent en collision.", niv: 3 },
        { q: "Que permet de conclure la présence d'ophiolites le long d'une suture ?", choix: ["L'océan est encore en train de s'ouvrir","Le rifting n'a pas abouti à un océan","L'océan s'est refermé à cet endroit","La subduction a eu lieu sous une dorsale"], bonne: 2, expl: "Les ophiolites marquent l'emplacement d'un ancien océan disparu entre deux continents.", niv: 3 },
      ],
    },
    {
      chapitre: "svt-7",
      fiche: `## L'organisation fonctionnelle des plantes à fleurs

Une plante ne peut pas se déplacer : c'est la **vie fixée**. Elle doit trouver sur place la lumière, l'eau, les ions minéraux et le CO2, et faire face aux agressions et aux saisons sans fuir. Son organisation répond à ces contraintes.

### De très grandes surfaces d'échange
- Les **feuilles** offrent une grande surface au soleil et à l'air. Elles captent la lumière et échangent des gaz (entrée de CO2, sortie d'O2 et de vapeur d'eau) par les **stomates**, de petits orifices surtout situés sur la face inférieure.
- Les **racines** très ramifiées, avec leurs **poils absorbants**, explorent un grand volume de sol et absorbent l'eau et les **ions minéraux**.
- Les **mycorhizes** (association avec des champignons) augmentent encore la surface d'absorption.
- Bilan : la surface d'échange d'une plante, avec l'air et avec le sol, est bien plus grande que celle d'un animal de même masse.

### Les deux sèves et leur circulation
- La **sève brute** (eau et ions minéraux) monte des racines vers les feuilles dans le **xylème**, formé de vaisseaux de cellules mortes aux parois renforcées de **lignine**.
- Le moteur principal de la montée de la sève brute est l'**évapotranspiration** : l'eau qui s'évapore par les stomates « aspire » la colonne d'eau.
- La **sève élaborée** (riche en sucres, surtout du **saccharose**) circule dans le **phloème**, formé de cellules vivantes. Elle va des organes **sources** (feuilles qui font la photosynthèse) vers les organes **puits** (racines, fruits, bourgeons, organes de réserve).
- Xylème et phloème forment ensemble les **tissus conducteurs**, qui relient tous les organes de la plante.

### Se défendre sans fuir
- **Défenses mécaniques** : épines, poils, cuticule épaisse, écorce.
- **Défenses chimiques** : la plante produit des molécules toxiques ou répulsives pour les herbivores (tanins, alcaloïdes comme la nicotine ou la caféine).
- **Communication** : une plante attaquée peut émettre des molécules volatiles qui préparent les défenses de ses voisines ou attirent les prédateurs des herbivores.

### Grandir et s'adapter aux saisons
- Les plantes ont une **croissance indéfinie** grâce aux **méristèmes**, des zones de cellules qui se divisent (bout des tiges et des racines).
- Le développement est contrôlé par des **hormones végétales**. Exemple : l'**auxine**, produite au sommet de la tige, contrôle l'allongement des cellules et la croissance vers la lumière.
- La forme de la plante (son **port**) dépend de son milieu : un même arbre pousse en hauteur en forêt et en largeur en terrain dégagé.
- Pour passer la mauvaise saison, la plante utilise des **formes de résistance** : bourgeons protégés, graines, organes de réserve souterrains (bulbes, tubercules). Les arbres à feuilles caduques perdent leurs feuilles en hiver.

### À retenir pour le bac
- Sève brute dans le xylème, des racines vers les feuilles ; sève élaborée dans le phloème, des sources vers les puits.
- Le moteur de la sève brute est l'évapotranspiration.
- Savoir relier une structure à une contrainte de la vie fixée (surface d'échange, défense, résistance au froid).
- Le piège : le xylème est fait de cellules mortes, le phloème de cellules vivantes.`,
      cartes: [
        { q: "Qu'est-ce que la vie fixée ?", r: "Le mode de vie des plantes, qui ne peuvent pas se déplacer et doivent tout trouver sur place." },
        { q: "À quoi servent les stomates ?", r: "Ce sont des orifices des feuilles par lesquels entrent le CO2 et sortent l'O2 et la vapeur d'eau." },
        { q: "Quel est le rôle des poils absorbants ?", r: "Augmenter la surface d'absorption de l'eau et des ions minéraux dans le sol." },
        { q: "Que contient la sève brute ?", r: "De l'eau et des ions minéraux." },
        { q: "Dans quel tissu circule la sève brute ?", r: "Dans le xylème, des racines vers les feuilles." },
        { q: "Quel est le moteur principal de la montée de la sève brute ?", r: "L'évapotranspiration : l'eau qui s'évapore par les stomates tire la colonne d'eau vers le haut." },
        { q: "Que contient la sève élaborée ?", r: "Surtout des sucres (saccharose) produits par la photosynthèse." },
        { q: "Dans quel tissu circule la sève élaborée ?", r: "Dans le phloème, des organes sources vers les organes puits." },
        { q: "Qu'est-ce qu'un organe puits ?", r: "Un organe qui consomme ou stocke des sucres : racine, fruit, bourgeon, tubercule." },
        { q: "Quelle différence entre xylème et phloème au niveau des cellules ?", r: "Le xylème est fait de cellules mortes renforcées de lignine ; le phloème de cellules vivantes." },
        { q: "Cite deux défenses chimiques des plantes.", r: "Les tanins et les alcaloïdes (nicotine, caféine), toxiques ou répulsifs pour les herbivores." },
        { q: "Qu'est-ce qu'un méristème ?", r: "Une zone de cellules qui se divisent, au bout des tiges et des racines, à l'origine de la croissance." },
        { q: "Quel est le rôle de l'auxine ?", r: "Hormone végétale qui contrôle l'allongement des cellules et la croissance, par exemple vers la lumière." },
        { q: "Cite des formes de résistance à la mauvaise saison.", r: "Bourgeons protégés, graines, bulbes, tubercules." },
      ],
      quiz: [
        { q: "Dans quel tissu la sève brute circule-t-elle ?", choix: ["Le phloème","Le xylème","Le méristème","L'épiderme"], bonne: 1, expl: "La sève brute monte dans le xylème ; la sève élaborée circule dans le phloème.", niv: 1 },
        { q: "Que transporte principalement la sève élaborée ?", choix: ["De l'eau et des ions minéraux","Du dioxygène dissous dans l'eau","Des sucres comme le saccharose","Des grains de pollen"], bonne: 2, expl: "La sève élaborée distribue les sucres produits par la photosynthèse.", niv: 1 },
        { q: "Comment appelle-t-on une zone de cellules en division au bout d'une tige ?", choix: ["Un stomate","Un phloème","Un poil absorbant","Un méristème"], bonne: 3, expl: "Les méristèmes assurent la croissance indéfinie des plantes.", niv: 1 },
        { q: "On recouvre de vaseline la face inférieure des feuilles d'une plante. La montée de la sève brute ralentit. Pourquoi ?", choix: ["La vaseline empêche les racines d'absorber l'eau","Les stomates bouchés limitent l'évapotranspiration","La vaseline bloque la circulation du phloème","Les feuilles ne font plus de photosynthèse du tout"], bonne: 1, expl: "Les stomates de la face inférieure sont bouchés : moins d'eau s'évapore, donc moins d'aspiration de la sève brute.", niv: 2 },
        { q: "On fournit du CO2 marqué à une feuille. Une heure plus tard, des sucres marqués sont dans les fruits. Que montre ce résultat ?", choix: ["Les fruits fixent eux-mêmes le CO2 de l'air","Le CO2 monte des racines aux fruits par le xylème","Les sucres passent des feuilles aux fruits","Les sucres vont des fruits vers les feuilles"], bonne: 2, expl: "La feuille (source) produit des sucres qui sont exportés vers le fruit (puits) par le phloème.", niv: 2 },
        { q: "Au printemps, les sucres stockés dans un tubercule de pomme de terre partent vers les jeunes pousses. Quel rôle joue alors le tubercule ?", choix: ["Celui d'un organe puits","Celui d'un méristème de tige","Celui d'un stomate","Celui d'un organe source"], bonne: 3, expl: "Un organe source exporte des sucres. Le tubercule, puits en été, devient source au printemps.", niv: 2 },
        { q: "Des chenilles attaquent un plant de tabac, qui produit alors plus de nicotine. Que montre ce document ?", choix: ["Une défense chimique déclenchée par l'attaque","Une défense mécanique déclenchée par les herbivores","Une réponse de croissance vers la lumière","Une forme de résistance à la mauvaise saison"], bonne: 0, expl: "La nicotine est un alcaloïde toxique : la plante renforce une défense chimique.", niv: 2 },
        { q: "Un hêtre isolé est large et bas, un hêtre en forêt est haut et étroit. Comment l'expliquer ?", choix: ["Ce sont deux espèces de hêtre différentes","Le hêtre en forêt a muté pour grandir","Le hêtre isolé manque d'eau dans le sol","Le port dépend des conditions du milieu"], bonne: 3, expl: "Une même espèce adapte son port au milieu, grâce au contrôle hormonal de la croissance.", niv: 2 },
        { q: "Des racines privées de champignons absorbent moins de phosphate. Que suggère ce résultat ?", choix: ["Les champignons augmentent l'absorption","Les champignons consomment le phosphate du sol","Les racines n'absorbent le phosphate que la nuit","Le phosphate passe par les stomates des feuilles"], bonne: 0, expl: "Le champignon prolonge les racines dans le sol : la surface d'absorption augmente.", niv: 2 },
        { q: "Pourquoi la vie fixée impose-t-elle de très grandes surfaces d'échange ?", choix: ["La plante doit tout prélever là où elle est","La plante doit fuir les herbivores qui l'attaquent","La plante doit chasser des proies pour se nourrir","La plante n'a besoin que de lumière pour vivre"], bonne: 0, expl: "Sans déplacement, il faut multiplier les surfaces pour capter lumière, CO2, eau et ions.", niv: 3 },
        { q: "Quelle différence est exacte entre xylème et phloème ?", choix: ["Le xylème transporte les sucres, le phloème l'eau et les ions","Le xylème est fait de cellules mortes, pas le phloème","Le xylème va des feuilles aux racines uniquement","Le phloème ne transporte la sève que vers le haut"], bonne: 1, expl: "Le phloème transporte des sucres dans les deux sens selon les sources et les puits ; le xylème est fait de cellules mortes lignifiées.", niv: 3 },
        { q: "Lequel de ces organes n'est **pas** une forme de résistance à l'hiver ?", choix: ["Un bourgeon d'hiver écailleux","Une graine","Une feuille de chêne","Un bulbe de tulipe"], bonne: 2, expl: "La feuille du chêne tombe en automne ; les trois autres traversent la mauvaise saison.", niv: 3 },
      ],
    },
    {
      chapitre: "svt-8",
      fiche: `## La plante, productrice de matière organique

Une plante fabrique elle-même sa matière organique à partir de matière minérale, grâce à l'énergie de la lumière. C'est la **photosynthèse**. Les êtres vivants qui font cela sont dits **autotrophes**.

### Le bilan de la photosynthèse
- Équation bilan : **6 CO2 + 6 H2O → C6H12O6 + 6 O2**, grâce à l'énergie lumineuse.
- Elle a lieu dans les **chloroplastes** des cellules chlorophylliennes, surtout dans les feuilles.
- La **chlorophylle** absorbe surtout la lumière **bleue** et **rouge** ; elle renvoie le vert, d'où la couleur des feuilles.

### Deux étapes dans le chloroplaste
- La **phase photochimique**, dans les **thylakoïdes** (membranes internes du chloroplaste) : l'énergie lumineuse sert à **oxyder l'eau**. Cela libère du **dioxygène**, et produit des composés riches en énergie : de l'**ATP** et des transporteurs d'électrons réduits (notés **RH2**, ou NADPH).
- La **phase chimique**, dans le **stroma** (liquide du chloroplaste) : le CO2 est fixé sur une molécule à 5 carbones, le **RuBP**, grâce à l'enzyme **rubisco**. C'est le **cycle de Calvin**. Cette étape utilise l'ATP et les RH2 produits à la lumière, et fabrique des sucres (trioses phosphates).
- Les deux phases sont **couplées** : sans lumière, l'ATP et les RH2 manquent et le cycle de Calvin s'arrête vite.

### Les expériences historiques
- **Hill (1937)** : des chloroplastes isolés, éclairés, sans CO2, mais avec un accepteur d'électrons (réactif de Hill), dégagent du dioxygène. La production d'O2 ne dépend donc pas de la fixation du CO2.
- **Ruben et Kamen (1941)** : avec de l'eau marquée à l'oxygène 18, le dioxygène libéré est marqué ; avec du CO2 marqué, il ne l'est pas. Le **dioxygène vient de l'eau**, pas du CO2.
- **Calvin** : avec du CO2 au carbone 14, le premier composé marqué est un acide à 3 carbones, puis apparaissent les sucres.

### Le devenir des sucres
- Les sucres produits sont transformés en **saccharose**, la forme de transport dans la sève élaborée.
- Ils sont stockés sous forme d'**amidon** (dans les chloroplastes, les graines, les tubercules) ou de lipides et protéines dans les graines.
- Ils servent à construire la plante : **cellulose** des parois, **lignine** qui rigidifie le bois.
- Ils fournissent de l'énergie par la **respiration**, qui a lieu jour et nuit dans toutes les cellules.
- La plante produit aussi des **molécules secondaires** : pigments des fleurs (anthocyanes) qui attirent les pollinisateurs, molécules de défense (tanins, alcaloïdes).

### L'intérêt pour l'humain
- Presque toute notre alimentation vient directement ou indirectement de la photosynthèse.
- Les plantes fournissent aussi des fibres (coton : cellulose), du bois, des médicaments (morphine, quinine) et des colorants.

### À retenir pour le bac
- Savoir écrire l'équation bilan et situer les deux phases (thylakoïdes et stroma).
- Savoir exploiter les expériences de Hill et de Ruben et Kamen.
- Le piège : le dioxygène vient de l'eau, pas du CO2.
- Le piège : la respiration a lieu aussi le jour, pas seulement la nuit.`,
      cartes: [
        { q: "Quelle est l'équation bilan de la photosynthèse ?", r: "6 CO2 + 6 H2O → C6H12O6 + 6 O2, grâce à l'énergie lumineuse." },
        { q: "Qu'est-ce qu'un être vivant autotrophe ?", r: "Un être vivant qui fabrique sa matière organique à partir de matière minérale, comme les plantes." },
        { q: "Où se déroule la phase photochimique ?", r: "Dans les thylakoïdes du chloroplaste." },
        { q: "Où se déroule la phase chimique (cycle de Calvin) ?", r: "Dans le stroma du chloroplaste." },
        { q: "Que produit la phase photochimique ?", r: "Du dioxygène (par oxydation de l'eau), de l'ATP et des transporteurs réduits RH2." },
        { q: "Quel est le rôle de la rubisco ?", r: "Enzyme qui fixe le CO2 sur le RuBP, au début du cycle de Calvin." },
        { q: "Que montre l'expérience de Hill ?", r: "Des chloroplastes éclairés, avec un accepteur d'électrons et sans CO2, dégagent de l'O2 : la production d'O2 ne dépend pas du CO2." },
        { q: "Que montre l'expérience de Ruben et Kamen ?", r: "Avec de l'eau marquée à l'oxygène 18, l'O2 libéré est marqué : le dioxygène vient de l'eau." },
        { q: "Quelles couleurs de lumière la chlorophylle absorbe-t-elle le plus ?", r: "Le bleu et le rouge. Elle renvoie le vert." },
        { q: "Sous quelle forme les sucres circulent-ils dans la plante ?", r: "Sous forme de saccharose, dans la sève élaborée." },
        { q: "Sous quelle forme les sucres sont-ils souvent stockés ?", r: "Sous forme d'amidon (chloroplastes, graines, tubercules)." },
        { q: "À quoi servent la cellulose et la lignine ?", r: "La cellulose forme les parois des cellules ; la lignine rigidifie le bois." },
        { q: "Pourquoi les phases photochimique et chimique sont-elles couplées ?", r: "Le cycle de Calvin utilise l'ATP et les RH2 produits à la lumière : sans lumière, il s'arrête vite." },
        { q: "Cite un usage humain de la production végétale.", r: "Alimentation, fibres (coton), bois, médicaments (morphine, quinine), colorants." },
      ],
      quiz: [
        { q: "Dans quelle partie du chloroplaste le CO2 est-il fixé ?", choix: ["Les thylakoïdes","L'enveloppe","Le stroma","Les grains d'amidon"], bonne: 2, expl: "Le cycle de Calvin, qui fixe le CO2, se déroule dans le stroma.", niv: 1 },
        { q: "Quelle enzyme fixe le CO2 lors de la photosynthèse ?", choix: ["La rubisco","L'amylase","L'ATP synthase","La chlorophylle"], bonne: 0, expl: "La rubisco fixe le CO2 sur le RuBP ; la chlorophylle est un pigment, pas une enzyme.", niv: 1 },
        { q: "Sous quelle forme les sucres sont-ils transportés dans la plante ?", choix: ["Le saccharose","L'amidon","La cellulose","Le glucose phosphate"], bonne: 0, expl: "Le saccharose circule dans la sève élaborée ; l'amidon est une forme de stockage.", niv: 1 },
        { q: "De l'eau marquée à l'oxygène 18 est fournie à une algue. Le dioxygène libéré est marqué. Qu'en déduit-on ?", choix: ["Le dioxygène vient du CO2","Le dioxygène vient de l'eau","L'oxygène 18 bloque la photosynthèse","L'eau est stockée dans les sucres"], bonne: 1, expl: "Seule l'eau était marquée, et l'O2 l'est aussi : il provient de l'oxydation de l'eau.", niv: 2 },
        { q: "Des chloroplastes isolés, éclairés, sans CO2, avec un accepteur d'électrons, dégagent de l'O2. Que montre ce résultat ?", choix: ["L'O2 vient du CO2 fixé par les chloroplastes","La phase chimique a lieu sans lumière","Les chloroplastes fixent le CO2 à l'obscurité","L'O2 peut être produit sans fixer de CO2"], bonne: 3, expl: "C'est l'expérience de Hill : la phase photochimique peut avoir lieu seule.", niv: 2 },
        { q: "Une algue éclairée est placée à l'obscurité. La fixation du CO2 s'arrête après quelques secondes. Pourquoi ?", choix: ["La rubisco est détruite dès l'obscurité","Le CO2 ne peut plus entrer dans l'algue","L'ATP et les RH2 ne sont plus produits","La chlorophylle fixe directement le CO2"], bonne: 2, expl: "Le cycle de Calvin consomme l'ATP et les RH2 de la phase photochimique : sans lumière, ils ne sont plus produits.", niv: 2 },
        { q: "On fournit du 14CO2 à des algues. Le premier composé marqué est un acide à 3 carbones. Que montre ce résultat ?", choix: ["C'est la forme de transport des sucres dans la sève","C'est le pigment qui capte la lumière","C'est un déchet de la respiration","C'est le premier produit de la fixation"], bonne: 3, expl: "Le premier composé marqué est le premier produit formé après la fixation du CO2 dans le cycle de Calvin.", niv: 2 },
        { q: "Un spectre montre que la photosynthèse est forte en lumière bleue et rouge, faible en vert. Comment l'expliquer ?", choix: ["La chlorophylle absorbe surtout la lumière verte et jaune","La chlorophylle absorbe surtout le bleu et le rouge","La lumière verte détruit les chloroplastes","La lumière rouge n'atteint pas les feuilles"], bonne: 1, expl: "La lumière absorbée par la chlorophylle est celle qui sert à la photosynthèse ; le vert est renvoyé.", niv: 2 },
        { q: "Une coupe de tubercule de pomme de terre devient bleu-noir avec l'eau iodée. Qu'en déduit-on ?", choix: ["Le tubercule fait la photosynthèse","Le tubercule stocke du saccharose","Le tubercule contient de la cellulose","Le tubercule stocke de l'amidon"], bonne: 3, expl: "L'eau iodée colore l'amidon en bleu-noir : le tubercule est un organe de réserve.", niv: 2 },
        { q: "Une plante est placée à la lumière dans une enceinte fermée. Le CO2 baisse. Qu'est-ce qui est vrai ?", choix: ["La photosynthèse dépasse la respiration","La plante ne respire que la nuit","La plante ne fait que la photosynthèse","La respiration s'est arrêtée à la lumière"], bonne: 0, expl: "La plante respire toujours, mais à la lumière la photosynthèse consomme plus de CO2 que la respiration n'en rejette.", niv: 3 },
        { q: "Quelle phrase relie correctement les deux phases de la photosynthèse ?", choix: ["La phase photochimique consomme les sucres de la phase chimique","La phase chimique utilise toujours l'ATP et les RH2 de l'autre","Ces deux phases se déroulent dans les thylakoïdes","La phase chimique produit le dioxygène libéré"], bonne: 1, expl: "Le cycle de Calvin a toujours besoin de l'ATP et des RH2 issus de la phase photochimique.", niv: 3 },
        { q: "Quelle molécule produite par une plante sert surtout à attirer les pollinisateurs ?", choix: ["Une lignine rigidifiant la tige","Un tanin toxique pour les herbivores","Une anthocyane colorant les pétales","Un amidon stocké dans la graine"], bonne: 2, expl: "Les anthocyanes colorent les fleurs et attirent les pollinisateurs ; tanins et alcaloïdes défendent la plante.", niv: 3 },
      ],
    },
    {
      chapitre: "svt-9",
      fiche: `## La reproduction de la plante entre vie fixée et mobilité

Une plante ne se déplace pas pour trouver un partenaire. Pourtant, la reproduction sexuée demande que le pollen d'une fleur atteigne une autre fleur. La plante utilise donc des **agents de transport** : le vent, l'eau ou les animaux.

### L'organisation de la fleur
- Une fleur complète comporte, de l'extérieur vers l'intérieur, quatre **verticilles** : les **sépales**, les **pétales**, les **étamines** (organes mâles, qui produisent le **pollen**) et le **pistil** (formé de **carpelles**, organe femelle, qui contient les **ovules** dans l'**ovaire**).
- La mise en place de ces pièces est contrôlée par des **gènes du développement**. Dans le **modèle ABC** : les gènes A seuls donnent les sépales, A et B les pétales, B et C les étamines, C seul les carpelles.
- Exemple : une mutation qui supprime les gènes C donne une fleur faite uniquement de sépales et de pétales, sans organes reproducteurs (fleurs « doubles » de certaines variétés ornementales).

### La pollinisation
- La **pollinisation** est le transport du pollen des étamines jusqu'au pistil.
- Pollinisation par le **vent** (anémogamie) : fleurs discrètes, sans odeur, pollen très abondant, léger et sec. Exemples : graminées, noisetier.
- Pollinisation par les **animaux** (zoogamie), surtout les insectes : fleurs colorées, parfumées, avec du **nectar** ; pollen collant. L'animal visite la fleur pour se nourrir et emporte du pollen.
- La relation entre une plante et son pollinisateur est une **coévolution** : chacun a évolué en fonction de l'autre. Exemple : des orchidées dont la fleur imite une femelle d'insecte, ou des fleurs à long tube visitées par des insectes à longue trompe.
- **Autopollinisation** : le pollen féconde la même fleur ou la même plante. **Pollinisation croisée** : entre deux plantes différentes, ce qui augmente le brassage génétique. Beaucoup de plantes ont des mécanismes qui l'imposent (auto-incompatibilité, étamines et pistil mûrs à des moments différents).

### De la fleur à la graine et au fruit
- Après la pollinisation, le grain de pollen germe et forme un **tube pollinique** qui apporte les cellules reproductrices mâles jusqu'à l'ovule : c'est la **fécondation**.
- Après la fécondation, l'**ovule devient la graine** (qui contient l'**embryon** et des **réserves**), et l'**ovaire devient le fruit**.
- La graine est une forme de **vie ralentie** : déshydratée, elle peut attendre longtemps des conditions favorables pour germer (**dormance**).

### La dispersion des graines
- La plante ne bouge pas, mais ses graines voyagent : c'est la **dissémination**.
- Par le **vent** : graines ailées (érable) ou à aigrettes (pissenlit).
- Par les **animaux** : fruits charnus mangés, dont les graines sont rejetées plus loin dans les excréments ; fruits à crochets accrochés aux poils.
- Cette dissémination permet de coloniser de nouveaux milieux et limite la concurrence avec la plante mère.

### La reproduction asexuée
- Beaucoup de plantes se reproduisent aussi sans fécondation : **stolons** (fraisier), **tubercules** (pomme de terre), **bulbes**, **marcottage**, **bouturage**.
- Les descendants forment un **clone** : ils sont génétiquement identiques à la plante mère. C'est rapide et efficace dans un milieu stable, mais sans brassage.

### À retenir pour le bac
- Savoir légender une fleur et relier chaque verticille aux gènes A, B, C.
- Savoir relier les caractères d'une fleur à son mode de pollinisation.
- Ovule → graine ; ovaire → fruit.
- Le piège : la pollinisation (transport du pollen) n'est pas la fécondation (union des gamètes).`,
      cartes: [
        { q: "Quels sont les quatre verticilles d'une fleur, de l'extérieur vers l'intérieur ?", r: "Sépales, pétales, étamines, pistil (carpelles)." },
        { q: "Quel est l'organe mâle de la fleur ?", r: "L'étamine, qui produit le pollen." },
        { q: "Quel est l'organe femelle de la fleur ?", r: "Le pistil, formé de carpelles ; son ovaire contient les ovules." },
        { q: "Que dit le modèle ABC ?", r: "A seul : sépales ; A et B : pétales ; B et C : étamines ; C seul : carpelles." },
        { q: "Qu'est-ce que la pollinisation ?", r: "Le transport du pollen des étamines jusqu'au pistil." },
        { q: "Quels caractères ont les fleurs pollinisées par le vent ?", r: "Fleurs discrètes, sans odeur ni nectar, pollen abondant, léger et sec." },
        { q: "Quels caractères ont les fleurs pollinisées par les insectes ?", r: "Fleurs colorées, parfumées, avec du nectar, et pollen collant." },
        { q: "Qu'est-ce que la coévolution plante-pollinisateur ?", r: "L'évolution conjointe de la plante et de son pollinisateur, chacun s'adaptant à l'autre." },
        { q: "Que devient l'ovule après la fécondation ?", r: "Il devient la graine, qui contient l'embryon et des réserves." },
        { q: "Que devient l'ovaire après la fécondation ?", r: "Il devient le fruit." },
        { q: "Qu'est-ce que la dormance d'une graine ?", r: "Un état de vie ralentie qui lui permet d'attendre des conditions favorables avant de germer." },
        { q: "Cite deux modes de dispersion des graines.", r: "Par le vent (graines ailées, aigrettes) et par les animaux (fruits charnus mangés, fruits à crochets)." },
        { q: "Quel est l'intérêt de la pollinisation croisée ?", r: "Elle augmente le brassage génétique entre individus différents." },
        { q: "Cite des modes de reproduction asexuée des plantes.", r: "Stolons (fraisier), tubercules, bulbes, bouturage, marcottage." },
      ],
      quiz: [
        { q: "Quel organe floral produit le pollen ?", choix: ["Le sépale","Le pistil","L'étamine","L'ovaire"], bonne: 2, expl: "L'étamine est l'organe mâle ; l'ovaire fait partie du pistil, organe femelle.", niv: 1 },
        { q: "Que devient l'ovaire d'une fleur après la fécondation ?", choix: ["Une graine","Un fruit","Un embryon","Un ovule"], bonne: 1, expl: "L'ovaire devient le fruit ; c'est l'ovule qui devient la graine.", niv: 1 },
        { q: "Dans le modèle ABC, quels gènes s'expriment dans le verticille des pétales ?", choix: ["Les gènes B et C","Les gènes A seuls","Les gènes C seuls","Les gènes A et B"], bonne: 3, expl: "A et B donnent les pétales ; B et C, les étamines.", niv: 1 },
        { q: "Une fleur de graminée est verte, sans odeur, avec un pollen abondant et léger. Quel mode de pollinisation ?", choix: ["Par le vent","Par les insectes","Par les oiseaux","Par l'eau"], bonne: 0, expl: "Fleur discrète et pollen léger en grande quantité : ce sont des caractères de pollinisation par le vent.", niv: 2 },
        { q: "Un mutant n'exprime plus les gènes C. Que portera sa fleur ?", choix: ["Seulement des étamines et des carpelles","Seulement des sépales et des pétales","Des étamines à la place des pétales","Des carpelles à la place des sépales"], bonne: 1, expl: "Sans C, il n'y a plus d'étamines ni de carpelles : la fleur ne garde que les verticilles A et A+B.", niv: 2 },
        { q: "On ensache des fleurs avec un filet fin : elles ne produisent presque aucun fruit. Qu'en déduit-on ?", choix: ["Le filet empêche la photosynthèse des fleurs","Un agent extérieur doit apporter le pollen","Ces fleurs ne produisent pas de pollen","Le fruit se forme sans fécondation"], bonne: 1, expl: "Le filet empêche les insectes ou le vent d'apporter du pollen : la pollinisation dépend d'un agent extérieur.", niv: 2 },
        { q: "Une orchidée a une fleur qui ressemble à une femelle d'abeille. Que montre cet exemple ?", choix: ["Une coévolution de la plante et de l'insecte","Une pollinisation par le vent très efficace","Une reproduction asexuée par bouturage naturel","Une dispersion des graines par les oiseaux"], bonne: 0, expl: "Les mâles sont attirés et transportent le pollen : la fleur a évolué en lien avec son pollinisateur.", niv: 2 },
        { q: "Les graines de tomate restent capables de germer après être passées dans le tube digestif d'un animal. Quel avantage pour la plante ?", choix: ["Ses graines sont fécondées dans l'intestin","Ses graines perdent leur dormance dans l'intestin","Ses graines sont dispersées loin d'elle","Ses graines produisent du pollen en route"], bonne: 2, expl: "L'animal mange le fruit et rejette les graines ailleurs : c'est une dissémination par les animaux.", niv: 2 },
        { q: "Tous les fraisiers d'un jardin, issus de stolons d'un seul pied, ont le même génome. Comment l'expliquer ?", choix: ["Ils sont issus de fécondations croisées","Ils ont subi le même brassage en méiose","Ils sont issus d'une autopollinisation","Ils forment un clone issu de mitoses"], bonne: 3, expl: "Les stolons sont une reproduction asexuée : les nouveaux pieds sont génétiquement identiques au pied mère.", niv: 2 },
        { q: "Chez une plante, les étamines mûrissent avant le pistil de la même fleur. Quel est l'effet de ce décalage ?", choix: ["Il impose l'autopollinisation","Il supprime le besoin de pollinisateur","Il favorise la pollinisation croisée","Il empêche la formation du fruit"], bonne: 2, expl: "Le pollen part avant que le pistil soit prêt : la fleur est fécondée par le pollen d'une autre plante.", niv: 3 },
        { q: "Quelle phrase distingue correctement pollinisation et fécondation ?", choix: ["La pollinisation unit les gamètes, la fécondation transporte le pollen","Ce sont deux noms pour un même événement","La fécondation a toujours lieu avant la pollinisation","La pollinisation transporte le pollen, la fécondation unit les gamètes"], bonne: 3, expl: "La pollinisation précède toujours la fécondation : le pollen arrive, puis le tube pollinique amène les gamètes mâles.", niv: 3 },
        { q: "Pourquoi une plante qui se reproduit seulement par clonage est-elle fragile face à une nouvelle maladie ?", choix: ["Tous ses descendants ont la même sensibilité","Ses descendants ne peuvent pas faire la photosynthèse","Leurs mutations sont plus nombreuses que chez les graines","Ses descendants ne forment jamais de fleurs"], bonne: 0, expl: "Sans brassage génétique, les clones sont identiques : si l'un est sensible, tous le sont.", niv: 3 },
      ],
    },
    {
      chapitre: "svt-10",
      fiche: `## La domestication des plantes

La **domestication** est la transformation d'une espèce sauvage en plante cultivée, par des générations de sélection faite par l'humain. Elle a commencé il y a environ **10 000 ans**, au **Néolithique**, dans plusieurs régions du monde de façon indépendante.

### Où et quand ?
- Le **Croissant fertile** (Proche-Orient) : blé, orge, lentille, il y a environ 10 000 ans.
- L'**Amérique centrale** : le **maïs**, domestiqué à partir d'une plante sauvage, la **téosinte**, il y a environ 9 000 ans au Mexique.
- L'**Asie** : le riz. Les **Andes** : la pomme de terre.

### Ce que l'humain a sélectionné
- Les premiers agriculteurs gardaient les graines des plantes qui leur convenaient le mieux et les ressemaient. Sans le savoir, ils ont sélectionné des **allèles**.
- **Graines qui restent sur l'épi** : chez le blé sauvage, l'épi se casse à maturité et les graines tombent (bon pour la plante sauvage). Les plantes à épi solide ne dispersent pas leurs graines : elles ont été récoltées et ressemées.
- **Grosses graines**, plus nombreuses, plus riches en réserves.
- **Germination rapide et simultanée** : perte de la dormance.
- **Port plus compact**, moins de ramifications (le maïs a une seule grande tige, la téosinte en a beaucoup).
- Moins de substances toxiques ou amères.
- Résultat : la plante cultivée ne survit souvent plus sans l'humain.

### Une diversité génétique réduite
- La domestication part d'un petit nombre de plantes sauvages, puis l'humain ne garde que certaines formes. La **diversité génétique** des plantes cultivées est donc plus **faible** que celle de leurs ancêtres sauvages.
- Conséquence : les cultures sont plus fragiles face à une nouvelle maladie ou à un changement du climat.

### Les techniques d'amélioration
- **Sélection** : choisir et ressemer les meilleures plantes.
- **Hybridation** : croiser deux variétés ou espèces pour réunir des caractères intéressants. Les **hybrides F1** de deux lignées pures sont souvent plus vigoureux (**vigueur hybride**), mais leurs graines ne redonnent pas des plantes identiques.
- **Polyploïdisation** : le nombre de jeux de chromosomes augmente. Exemple : le **blé tendre** est **hexaploïde** (génome AABBDD). Il vient de deux hybridations successives entre espèces sauvages, suivies d'un doublement des chromosomes.
- **Génie génétique** : on transfère un gène précis dans le génome d'une plante, qui devient une **plante transgénique** (OGM). Exemple : un maïs qui produit une protéine insecticide issue d'une bactérie, grâce au transfert par Agrobacterium.
- Ces techniques posent des questions : brevets sur les semences, dépendance des agriculteurs, effets sur l'environnement.

### Préserver la diversité
- Les **espèces sauvages apparentées** et les **variétés anciennes** gardent des allèles utiles (résistance aux maladies, à la sécheresse).
- On les conserve dans des **banques de graines** (exemple : la réserve mondiale de semences du Svalbard, en Norvège) et dans les champs.

### À retenir pour le bac
- Savoir comparer une plante sauvage et sa forme cultivée, et dire quels caractères ont été sélectionnés.
- Savoir expliquer l'origine hexaploïde du blé tendre à partir d'un document.
- Le piège : la domestication réduit la diversité génétique ; elle ne l'augmente pas.
- Savoir pourquoi conserver les variétés sauvages et anciennes.`,
      cartes: [
        { q: "Qu'est-ce que la domestication d'une plante ?", r: "La transformation d'une espèce sauvage en plante cultivée, par une sélection répétée faite par l'humain." },
        { q: "Quand la domestication des plantes a-t-elle commencé ?", r: "Il y a environ 10 000 ans, au Néolithique." },
        { q: "Quel est l'ancêtre sauvage du maïs ?", r: "La téosinte, au Mexique." },
        { q: "Où le blé a-t-il été domestiqué ?", r: "Dans le Croissant fertile, au Proche-Orient." },
        { q: "Pourquoi a-t-on sélectionné des épis qui ne se cassent pas ?", r: "Leurs graines restent sur la plante : elles sont récoltées puis ressemées." },
        { q: "Cite trois caractères sélectionnés lors de la domestication.", r: "Graines qui restent sur l'épi, grosses graines, germination rapide (perte de dormance)." },
        { q: "Comment évolue la diversité génétique lors de la domestication ?", r: "Elle diminue : on part de peu de plantes et on ne garde que certaines formes." },
        { q: "Qu'est-ce qu'un hybride F1 ?", r: "Le descendant du croisement de deux lignées pures, souvent plus vigoureux (vigueur hybride)." },
        { q: "Pourquoi ne ressème-t-on pas les graines d'un hybride F1 ?", r: "Leurs descendants ne sont pas identiques : les caractères se séparent à la génération suivante." },
        { q: "Qu'est-ce que la polyploïdisation ?", r: "L'augmentation du nombre de jeux de chromosomes d'une plante." },
        { q: "Quel est le génome du blé tendre ?", r: "Il est hexaploïde, de génome AABBDD, issu de deux hybridations suivies de doublements des chromosomes." },
        { q: "Qu'est-ce qu'une plante transgénique ?", r: "Une plante dans laquelle on a introduit un gène venu d'un autre être vivant." },
        { q: "Pourquoi conserver les espèces sauvages apparentées ?", r: "Elles portent des allèles utiles (résistance aux maladies, à la sécheresse) perdus chez les plantes cultivées." },
        { q: "Où conserve-t-on des graines du monde entier ?", r: "Dans des banques de graines, comme la réserve mondiale de semences du Svalbard, en Norvège." },
      ],
      quiz: [
        { q: "Quelle plante sauvage est l'ancêtre du maïs ?", choix: ["La téosinte","Le sorgho sauvage","Le millet","L'épeautre"], bonne: 0, expl: "Le maïs a été domestiqué à partir de la téosinte, au Mexique.", niv: 1 },
        { q: "Vers quand a commencé la domestication des plantes ?", choix: ["Il y a environ 100 000 ans","Il y a environ 40 000 ans","Il y a environ 500 000 ans","Il y a environ 10 000 ans"], bonne: 3, expl: "La domestication a débuté au Néolithique, il y a environ 10 000 ans.", niv: 1 },
        { q: "Combien de jeux de chromosomes possède le blé tendre ?", choix: ["Deux","Quatre","Trois","Six"], bonne: 3, expl: "Le blé tendre est hexaploïde : AABBDD, six jeux de chromosomes.", niv: 1 },
        { q: "Chez le blé sauvage, l'épi se casse à maturité ; chez le blé cultivé, non. Pourquoi ce caractère a-t-il été sélectionné ?", choix: ["L'épi solide protège mieux les graines des herbivores","Les graines tombées germent moins bien","Seules ces graines étaient récoltées et ressemées","L'épi solide fait plus de photosynthèse"], bonne: 2, expl: "Seules les graines restées sur la plante pouvaient être récoltées : leurs allèles ont été sélectionnés sans le vouloir.", niv: 2 },
        { q: "La téosinte a de nombreuses tiges et de petits épis, le maïs une tige et de gros épis. Que montre cette comparaison ?", choix: ["Le maïs a gagné en diversité génétique","Le maïs est bien mieux adapté à la vie sauvage","La téosinte descend du maïs cultivé","L'humain a sélectionné des caractères utiles"], bonne: 3, expl: "La domestication a retenu un port compact et de gros épis, utiles à la récolte.", niv: 2 },
        { q: "Des variétés de blé cultivées ont beaucoup moins d'allèles différents que les blés sauvages. Qu'en déduit-on ?", choix: ["Les blés sauvages ont subi plus de sélection","Leur diversité génétique a été réduite","Chaque blé cultivé a plus de mutations","Les blés sauvages sont des hybrides F1"], bonne: 1, expl: "Peu de plantes de départ, puis un tri par l'humain : la diversité génétique des cultures a diminué.", niv: 2 },
        { q: "Un caryotype montre qu'une plante cultivée a 4 jeux de chromosomes venant de deux espèces sauvages. Quel mécanisme l'explique ?", choix: ["Une seule mutation dans un gène du développement floral","Un transfert de gène par Agrobacterium","Une hybridation puis un doublement des chromosomes","Une sélection massale sans croisement"], bonne: 2, expl: "Deux génomes d'espèces différentes réunis puis doublés : hybridation et polyploïdisation.", niv: 2 },
        { q: "Un agriculteur ressème les graines d'un maïs hybride F1. Les plantes obtenues sont très inégales. Pourquoi ?", choix: ["Les graines F1 ont perdu leur dormance en vieillissant","Les allèles des lignées parentales se séparent","Le maïs F1 est une plante transgénique","Les graines d'hybrides sont stériles"], bonne: 1, expl: "Le F1 est hétérozygote : ses descendants reçoivent des combinaisons d'allèles différentes.", niv: 2 },
        { q: "Un gène de bactérie produisant une protéine insecticide est introduit dans le maïs. Quelle technique a été utilisée ?", choix: ["L'hybridation","La transgenèse","La sélection massale","La polyploïdisation"], bonne: 1, expl: "Introduire un gène d'une autre espèce dans le génome est une transgenèse ; la plante obtenue est un OGM.", niv: 2 },
        { q: "Pourquoi une culture où tous les plants ont le même génotype est-elle risquée ?", choix: ["Une seule maladie peut toucher tous les plants","Aucun plant ne peut plus faire de fleurs","Les plants s'hybrident avec les espèces sauvages","Chaque plant perd sa capacité à germer"], bonne: 0, expl: "Sans diversité génétique, aucun plant ne porte d'allèle de résistance : la culture entière est exposée.", niv: 3 },
        { q: "Un blé sauvage résistant à un champignon est croisé avec un blé cultivé. Quel est le but ?", choix: ["Apporter un allèle de résistance au blé","Réduire la taille des graines du blé cultivé","Rendre le blé cultivé capable de vivre seul","Obtenir un blé stérile plus productif"], bonne: 0, expl: "Les espèces sauvages apparentées conservent des allèles utiles, qu'on transfère par croisement.", niv: 3 },
        { q: "Quelle conséquence de la domestication est exacte ?", choix: ["Les plantes cultivées dispersent mieux leurs graines","Les plantes cultivées ont plus d'allèles que les sauvages","Beaucoup dépendent de l'humain pour se reproduire","Elles ont toutes gardé leur dormance"], bonne: 2, expl: "Graines qui ne tombent pas, perte de dormance : la plante dépend de l'agriculteur pour se reproduire.", niv: 3 },
      ],
    },
    {
      chapitre: "svt-11",
      fiche: `## Reconstituer les climats du passé

Le **climat** est la moyenne des conditions (température, précipitations…) sur au moins 30 ans. La **météo** est le temps qu'il fait un jour donné. Pour comprendre le réchauffement actuel, il faut savoir comment le climat a varié dans le passé, et pourquoi.

### Le réchauffement récent
- Les mesures directes (thermomètres depuis le milieu du 19e siècle, puis satellites) montrent une hausse de la température moyenne d'environ **1,1 °C** entre la fin du 19e siècle et la décennie 2011-2020.
- Autres indices : **recul des glaciers**, fonte de la banquise arctique, **élévation du niveau des mers**.
- Cette hausse est liée à l'augmentation des **gaz à effet de serre** (CO2, méthane) émis par les activités humaines.

### Les outils pour remonter dans le temps
- Les **carottes de glace** (Antarctique, Groenland) : les **bulles d'air** piégées gardent la composition de l'atmosphère passée (CO2, méthane). Le forage d'**EPICA** couvre environ **800 000 ans**.
- Le **rapport isotopique de l'oxygène** (δ18O) :
- Dans la **glace**, un δ18O **plus bas** indique un climat **plus froid**.
- Dans les **carbonates** des coquilles de foraminifères marins, c'est l'inverse : un δ18O **plus élevé** indique un climat plus froid, car l'eau légère est stockée dans les calottes de glace, ce qui enrichit l'océan en oxygène 18.
- Les **pollens** fossiles (palynologie) : chaque plante vit sous un climat donné. Des pollens de pins et de bouleaux indiquent un climat froid, des pollens de chênes un climat plus tempéré.
- Les **indices géologiques** : moraines et blocs erratiques (anciens glaciers), coraux (mer chaude), charbons, évaporites.

### Les cycles glaciaires du Quaternaire
- Depuis environ 1 million d'années, des **périodes glaciaires** et **interglaciaires** alternent selon un cycle d'environ **100 000 ans**.
- Le dernier maximum glaciaire date d'environ **20 000 ans** : les calottes couvraient le nord de l'Europe et le niveau des mers était environ 120 m plus bas qu'aujourd'hui.
- Cause de départ : les variations de l'**orbite** de la Terre (paramètres de **Milankovitch**) : **excentricité** (environ 100 000 ans), **obliquité** de l'axe (environ 41 000 ans) et **précession** (environ 20 000 ans). Elles changent l'énergie solaire reçue en été aux hautes latitudes.
- Ces petites variations sont **amplifiées** par des **rétroactions positives** : l'**albédo** (la glace renvoie la lumière solaire, donc plus de glace = plus de froid) et le **CO2** (un océan froid dissout plus de CO2, ce qui réduit l'effet de serre).
- Dans les carottes de glace, la température et le CO2 varient ensemble.

### Les climats plus anciens
- Au **Crétacé** (il y a environ 100 Ma), le climat était chaud, sans calotte polaire, avec une forte teneur en CO2 liée à un volcanisme intense.
- Depuis environ 50 Ma, le climat s'est **refroidi** : formation de la calotte antarctique vers 34 Ma. Une cause proposée : la formation de grandes chaînes de montagnes (Himalaya), dont l'**altération** des roches consomme du CO2.
- À la fin du **Carbonifère** (vers 300 Ma), une grande glaciation est liée au stockage de carbone dans les végétaux enfouis (formation du **charbon**), qui a fait baisser le CO2.

### À retenir pour le bac
- Savoir lire un δ18O : glace plus bas = plus froid ; foraminifères plus haut = plus froid.
- Paramètres orbitaux = déclencheur ; albédo et CO2 = amplificateurs.
- Le piège : climat et météo ne sont pas la même chose.
- Savoir relier un indice (pollen, moraine, charbon, corail) à un climat.`,
      cartes: [
        { q: "Quelle différence entre climat et météo ?", r: "La météo est le temps d'un jour donné ; le climat est la moyenne des conditions sur au moins 30 ans." },
        { q: "De combien la température moyenne a-t-elle augmenté depuis la fin du 19e siècle ?", r: "D'environ 1,1 °C (décennie 2011-2020 par rapport à 1850-1900)." },
        { q: "Que gardent les bulles d'air des carottes de glace ?", r: "La composition de l'atmosphère passée : CO2, méthane." },
        { q: "Quelle durée couvre la carotte de glace EPICA ?", r: "Environ 800 000 ans." },
        { q: "Dans la glace, que signifie un δ18O plus bas ?", r: "Un climat plus froid au moment de la chute de neige." },
        { q: "Dans les foraminifères, que signifie un δ18O plus élevé ?", r: "Un climat plus froid : l'eau légère est piégée dans les calottes, l'océan s'enrichit en oxygène 18." },
        { q: "Comment les pollens renseignent-ils sur le climat ?", r: "Chaque plante vit sous un climat donné : les pollens présents révèlent la végétation, donc le climat." },
        { q: "Quelle est la durée d'un cycle glaciaire-interglaciaire récent ?", r: "Environ 100 000 ans." },
        { q: "Quels sont les trois paramètres de Milankovitch ?", r: "Excentricité (environ 100 000 ans), obliquité (environ 41 000 ans), précession (environ 20 000 ans)." },
        { q: "Qu'est-ce que l'albédo ?", r: "La part de la lumière solaire renvoyée par une surface. La glace a un fort albédo." },
        { q: "Pourquoi l'albédo est-il une rétroaction positive ?", r: "Plus de glace renvoie plus de lumière, ce qui refroidit encore et fait grandir la glace." },
        { q: "Quand date le dernier maximum glaciaire ?", r: "D'environ 20 000 ans ; le niveau des mers était environ 120 m plus bas." },
        { q: "Pourquoi le climat du Crétacé était-il chaud ?", r: "La teneur en CO2 était forte, liée à un volcanisme intense ; il n'y avait pas de calotte polaire." },
        { q: "Quel lien entre charbon et glaciation du Carbonifère ?", r: "L'enfouissement de végétaux (futur charbon) a stocké du carbone et fait baisser le CO2, donc refroidi le climat." },
      ],
      quiz: [
        { q: "Comment appelle-t-on la part de lumière solaire renvoyée par une surface ?", choix: ["L'effet de serre","L'obliquité","La précession","L'albédo"], bonne: 3, expl: "La glace a un albédo élevé ; l'effet de serre retient au contraire l'énergie.", niv: 1 },
        { q: "Quelle est la période du cycle glaciaire-interglaciaire du dernier million d'années ?", choix: ["Environ 41 000 ans","Environ 100 000 ans","Environ 20 000 ans","Environ 10 000 ans"], bonne: 1, expl: "Le cycle dominant récent suit l'excentricité, d'environ 100 000 ans.", niv: 1 },
        { q: "Quel outil renseigne sur la teneur en CO2 de l'atmosphère passée ?", choix: ["Les pollens des sédiments de lacs","Les coquilles de foraminifères","Les moraines des anciens glaciers","Les bulles d'air des carottes de glace"], bonne: 3, expl: "Les bulles d'air piégées dans la glace ont gardé l'air de l'époque.", niv: 1 },
        { q: "Dans une carotte de glace, le δ18O baisse nettement entre deux niveaux. Qu'en déduit-on ?", choix: ["Le climat s'est refroidi","Le climat s'est réchauffé","Le CO2 a augmenté","Le niveau des mers a monté"], bonne: 0, expl: "Dans la glace, un δ18O plus bas signe une température plus basse.", niv: 2 },
        { q: "Dans des coquilles de foraminifères, le δ18O augmente. Qu'en déduit-on ?", choix: ["Les calottes de glace ont fondu","L'océan s'est réchauffé","Les calottes de glace ont grandi","Le CO2 de l'air a augmenté"], bonne: 2, expl: "Les calottes stockent l'oxygène 16 : l'océan s'enrichit en oxygène 18 quand le climat se refroidit.", niv: 2 },
        { q: "Une couche de tourbe de 12 000 ans contient surtout des pollens de bouleaux et de pins. Quel climat indique-t-elle ?", choix: ["Un climat tropical","Un climat froid","Un climat désertique","Un climat méditerranéen"], bonne: 1, expl: "Bouleaux et pins dominent sous un climat froid ; le chêne indiquerait un climat plus tempéré.", niv: 2 },
        { q: "Dans la carotte EPICA, la température et le CO2 varient ensemble sur 800 000 ans. Que suggère ce document ?", choix: ["Le CO2 et le climat sont étroitement liés","Le CO2 ne joue aucun rôle sur le climat","Le climat est resté stable sur cette durée","Le CO2 baisse quand la température monte"], bonne: 0, expl: "Les deux courbes évoluent ensemble : le CO2 participe aux variations du climat, comme amplificateur.", niv: 2 },
        { q: "Des moraines et des blocs erratiques sont trouvés dans une plaine. Qu'en déduit-on ?", choix: ["Un fleuve a déposé ces blocs","Une mer chaude couvrait la plaine","Un volcan a projeté ces blocs","Un glacier occupait cette plaine"], bonne: 3, expl: "Moraines et blocs erratiques sont transportés et déposés par les glaciers.", niv: 2 },
        { q: "Au Crétacé, on trouve des fossiles de végétaux tropicaux à haute latitude et aucune trace de calotte. Qu'en déduit-on ?", choix: ["L'albédo terrestre était très élevé","Le climat global était plus froid qu'aujourd'hui","Le climat global était plus chaud qu'aujourd'hui","La Terre était en période glaciaire"], bonne: 2, expl: "Des végétaux tropicaux près des pôles et l'absence de calotte montrent un climat chaud.", niv: 2 },
        { q: "Pourquoi de faibles variations de l'orbite terrestre causent-elles de grands changements de climat ?", choix: ["Des rétroactions comme l'albédo et le CO2 les amplifient","L'orbite change la distance au Soleil de moitié","Le Soleil émet beaucoup plus d'énergie à ces moments","L'effet de serre disparaît pendant les glaciations"], bonne: 0, expl: "Les paramètres orbitaux déclenchent ; l'albédo et le CO2 amplifient le refroidissement ou le réchauffement.", niv: 3 },
        { q: "Un océan qui se refroidit dissout plus de CO2. Quel effet sur le climat ?", choix: ["Un réchauffement compensateur","Un refroidissement renforcé","Un effet nul sur la température","Une hausse de l'albédo des océans"], bonne: 1, expl: "Moins de CO2 dans l'air, moins d'effet de serre : c'est une rétroaction positive.", niv: 3 },
        { q: "Quelle affirmation sur climat et météo est juste ?", choix: ["Un hiver très froid prouve à lui seul que le climat se refroidit","Le climat se mesure sur une seule année","Un hiver très froid ne contredit pas un réchauffement du climat","La météo se calcule sur trente ans"], bonne: 2, expl: "Le climat est une moyenne sur au moins 30 ans : un événement isolé ne suffit pas à le décrire.", niv: 3 },
      ],
    },
    {
      chapitre: "svt-12",
      fiche: `## Les conséquences du réchauffement et les actions possibles

Le réchauffement actuel est **rapide** et dû principalement aux **activités humaines**. Les climats passés aident à comprendre ses mécanismes ; les **modèles climatiques** permettent d'envisager l'avenir selon nos choix.

### L'origine humaine du réchauffement
- L'**effet de serre** est naturel : certains gaz (vapeur d'eau, CO2, méthane) absorbent le rayonnement infrarouge émis par la Terre et le renvoient en partie vers le sol. Sans lui, la Terre serait glacée.
- Depuis la révolution industrielle, l'humain rejette beaucoup de **CO2** (combustion du charbon, du pétrole, du gaz, déforestation) et de **méthane** (élevage, rizières, fuites de gaz). La concentration en CO2 dans l'air est passée d'environ **280 ppm** vers 1850 à plus de **420 ppm** aujourd'hui.
- C'est un **forçage** : une perturbation du bilan d'énergie de la Terre, qui provoque un réchauffement.
- Le **GIEC** (Groupe d'experts intergouvernemental sur l'évolution du climat) rassemble et évalue les travaux scientifiques. Il conclut que l'influence humaine est la cause du réchauffement récent.

### Le cycle du carbone perturbé
- Le carbone circule entre plusieurs **réservoirs** : atmosphère, océan, biosphère (êtres vivants, sols), roches (dont les combustibles fossiles).
- Les combustibles fossiles sont du carbone stocké depuis des millions d'années ; on le renvoie dans l'air en quelques décennies.
- Une partie du CO2 émis est absorbée par les **puits de carbone** : l'**océan** (environ un quart des émissions) et la **végétation**. Le reste s'accumule dans l'atmosphère.

### Les rétroactions qui aggravent
- **Albédo** : la fonte de la glace et de la neige découvre des sols et de l'eau plus sombres, qui absorbent plus de chaleur.
- **Pergélisol** : le dégel des sols gelés de l'Arctique libère du CO2 et du méthane.
- **Océan** : une eau plus chaude dissout moins de CO2.
- **Vapeur d'eau** : un air plus chaud contient plus de vapeur d'eau, elle-même gaz à effet de serre.

### Les conséquences
- **Élévation du niveau des mers**, par dilatation de l'eau qui se réchauffe et par fonte des glaciers et des calottes.
- **Acidification des océans** : le CO2 dissous rend l'eau plus acide, ce qui gêne les êtres vivants à coquille ou squelette calcaire (coraux, mollusques).
- Événements extrêmes plus fréquents ou plus intenses : canicules, sécheresses, fortes pluies.
- Effets sur le vivant : déplacement des espèces vers les pôles ou en altitude, décalage des floraisons, blanchissement des coraux.
- Effets sur les sociétés : rendements agricoles, accès à l'eau, santé (vagues de chaleur, maladies transmises par des moustiques).

### Prévoir : les modèles et les scénarios
- Les **modèles climatiques** simulent le climat à partir des lois de la physique. On les teste en vérifiant qu'ils reproduisent les climats passés.
- Le GIEC compare plusieurs **scénarios** d'émissions : plus les émissions sont fortes, plus le réchauffement à la fin du siècle est important.

### Agir : atténuer et s'adapter
- L'**atténuation** : réduire les émissions de gaz à effet de serre (sobriété, efficacité énergétique, énergies bas carbone, transports moins émetteurs) et protéger les puits de carbone (forêts, sols).
- L'**adaptation** : se préparer aux effets inévitables (digues, cultures plus résistantes à la sécheresse, villes plus végétalisées).
- L'**accord de Paris** (2015) vise à limiter le réchauffement bien en dessous de 2 °C, et si possible à 1,5 °C, par rapport à l'époque préindustrielle.
- La **neutralité carbone** : émettre pas plus que ce que les puits absorbent.

### À retenir pour le bac
- Savoir expliquer l'effet de serre et le rôle du CO2 d'origine humaine.
- Savoir citer au moins deux rétroactions positives (albédo, pergélisol, océan).
- Le piège : atténuation (réduire la cause) et adaptation (faire face aux effets) ne sont pas la même chose.
- Le piège : la fonte de la banquise (glace de mer) fait peu monter la mer ; ce sont surtout la dilatation et la fonte des glaces posées sur les continents.`,
      cartes: [
        { q: "Qu'est-ce que l'effet de serre ?", r: "L'absorption par certains gaz du rayonnement infrarouge émis par la Terre, dont une partie est renvoyée vers le sol." },
        { q: "Quels gaz à effet de serre l'humain émet-il surtout ?", r: "Le CO2 (combustibles fossiles, déforestation) et le méthane (élevage, rizières, fuites de gaz)." },
        { q: "Comment a évolué la concentration en CO2 depuis 1850 ?", r: "D'environ 280 ppm à plus de 420 ppm aujourd'hui." },
        { q: "Qu'est-ce que le GIEC ?", r: "Le Groupe d'experts intergouvernemental sur l'évolution du climat, qui évalue les travaux scientifiques sur le climat." },
        { q: "Qu'est-ce qu'un puits de carbone ?", r: "Un réservoir qui absorbe plus de carbone qu'il n'en rejette, comme l'océan ou les forêts." },
        { q: "Quelle part des émissions de CO2 l'océan absorbe-t-il ?", r: "Environ un quart." },
        { q: "Pourquoi le dégel du pergélisol aggrave-t-il le réchauffement ?", r: "Il libère du CO2 et du méthane stockés dans les sols gelés." },
        { q: "Quelles sont les deux causes de la hausse du niveau des mers ?", r: "La dilatation de l'eau qui se réchauffe et la fonte des glaciers et calottes posés sur les continents." },
        { q: "Qu'est-ce que l'acidification des océans ?", r: "La baisse du pH de l'eau due au CO2 dissous, qui gêne les êtres vivants à squelette calcaire." },
        { q: "Qu'est-ce que l'atténuation ?", r: "Réduire les émissions de gaz à effet de serre et protéger les puits de carbone." },
        { q: "Qu'est-ce que l'adaptation ?", r: "Se préparer aux effets inévitables du réchauffement (digues, cultures résistantes, villes plus fraîches)." },
        { q: "Que fixe l'accord de Paris (2015) ?", r: "Limiter le réchauffement bien en dessous de 2 °C, et si possible à 1,5 °C, par rapport à l'ère préindustrielle." },
        { q: "Qu'est-ce que la neutralité carbone ?", r: "Émettre pas plus de gaz à effet de serre que ce que les puits peuvent absorber." },
        { q: "Comment teste-t-on un modèle climatique ?", r: "On vérifie qu'il reproduit correctement les climats passés et les mesures récentes." },
      ],
      quiz: [
        { q: "Comment appelle-t-on l'action qui vise à réduire les émissions de gaz à effet de serre ?", choix: ["L'adaptation","L'atténuation","Le forçage","La rétroaction"], bonne: 1, expl: "Atténuer, c'est agir sur la cause ; s'adapter, c'est faire face aux effets.", niv: 1 },
        { q: "Quelle était la concentration en CO2 de l'air vers 1850 ?", choix: ["Environ 280 ppm","Environ 420 ppm","Environ 350 ppm","Environ 800 ppm"], bonne: 0, expl: "Environ 280 ppm avant l'ère industrielle, plus de 420 ppm aujourd'hui.", niv: 1 },
        { q: "Quel objectif principal fixe l'accord de Paris de 2015 ?", choix: ["Arrêter toute émission de CO2 avant 2030","Limiter le réchauffement bien en dessous de 2 °C","Ramener le CO2 à son niveau de 1850","Stopper la fonte de la banquise arctique d'ici 2050"], bonne: 1, expl: "L'accord vise bien moins de 2 °C, et si possible 1,5 °C, par rapport à l'ère préindustrielle.", niv: 1 },
        { q: "La glace de mer fond en Arctique, laissant place à une eau sombre. Quel effet sur le climat ?", choix: ["L'albédo augmente et le climat se refroidit","Le niveau des mers monte fortement","L'océan absorbe plus de CO2","L'albédo baisse et le réchauffement s'accélère"], bonne: 3, expl: "L'eau sombre absorbe plus de lumière que la glace : c'est une rétroaction positive.", niv: 2 },
        { q: "Des mesures montrent que le pH de l'océan baisse depuis 1980. Comment l'expliquer ?", choix: ["Les glaciers apportent de l'eau acide","Le réchauffement détruit le calcaire","Les coraux rejettent de l'acide","L'océan dissout plus de CO2 de l'air"], bonne: 3, expl: "Le CO2 dissous forme un acide faible : l'océan s'acidifie à mesure qu'il absorbe du CO2.", niv: 2 },
        { q: "Un glaçon fond dans un verre d'eau plein à ras bord sans le faire déborder. Que montre cette expérience ?", choix: ["La fonte de la banquise fait peu monter la mer","La dilatation de l'eau est négligeable","La fonte des glaciers continentaux est sans effet","La mer monte surtout par fonte de la banquise"], bonne: 0, expl: "La glace qui flotte occupe déjà le volume de son eau de fonte : ce sont surtout les glaces sur continent et la dilatation qui font monter la mer.", niv: 2 },
        { q: "Un modèle climatique reproduit bien les températures de 1850 à aujourd'hui. Qu'apporte ce résultat ?", choix: ["Il prouve que l'avenir est déjà connu","Il montre que le CO2 a peu d'effet","Il rend ses projections plus fiables","Il remplace les mesures de terrain"], bonne: 2, expl: "Un modèle qui reproduit le passé est plus crédible pour simuler l'avenir, selon les scénarios.", niv: 2 },
        { q: "Une ville plante des arbres et crée des zones d'ombre contre les canicules. De quel type d'action s'agit-il ?", choix: ["D'une atténuation","D'une adaptation","D'un forçage","D'une rétroaction"], bonne: 1, expl: "Elle réduit les effets de la chaleur sur les habitants : c'est une adaptation.", niv: 2 },
        { q: "Des relevés montrent que des espèces de papillons vivent 100 km plus au nord qu'en 1970. Qu'en déduit-on ?", choix: ["Les espèces se déplacent avec le réchauffement","Les papillons fuient la pollution des villes","Les espèces du nord ont toutes disparu","Le climat du nord s'est refroidi"], bonne: 0, expl: "Les espèces suivent leur climat favorable, qui se déplace vers les pôles.", niv: 2 },
        { q: "Pourquoi la combustion du pétrole perturbe-t-elle le cycle du carbone ?", choix: ["Elle détruit le carbone de l'atmosphère","Elle transforme le CO2 en méthane","Elle libère vite un carbone stocké très longtemps","Elle bloque l'absorption du CO2 par l'océan et les sols"], bonne: 2, expl: "Le carbone fossile est libéré en quelques décennies, bien plus vite que les puits ne peuvent l'absorber.", niv: 3 },
        { q: "Pourquoi le dégel du pergélisol est-il une rétroaction positive ?", choix: ["Il augmente l'albédo des sols arctiques","Il favorise le stockage du carbone par les plantes","Il fait baisser le niveau des mers","Il libère des gaz qui renforcent l'effet de serre"], bonne: 3, expl: "Le dégel libère CO2 et méthane, qui renforcent l'effet de serre et donc le dégel.", niv: 3 },
        { q: "Planter des forêts et remplacer une chaudière au fioul par une pompe à chaleur : quelle stratégie ?", choix: ["Toutes deux de l'adaptation","De l'adaptation puis de l'atténuation","Toutes deux de l'atténuation","D'aucune stratégie face au climat"], bonne: 2, expl: "Planter augmente les puits de carbone, changer de chauffage réduit les émissions : les deux atténuent.", niv: 3 },
      ],
    },
    {
      chapitre: "svt-13",
      fiche: `## Les réflexes

Un **réflexe** est une réponse **involontaire**, rapide et stéréotypée (toujours la même) à une stimulation. Le **réflexe myotatique** est la contraction d'un muscle en réponse à son propre étirement. Il participe au maintien de la posture. Exemple : le réflexe rotulien, quand le médecin tape sous le genou.

### Les éléments de l'arc réflexe
- Le **récepteur** : le **fuseau neuromusculaire**, situé dans le muscle, détecte l'étirement.
- Le **neurone sensoriel** (afférent) : il conduit le message du fuseau vers la moelle épinière. Son corps cellulaire est dans le **ganglion rachidien**, et il entre dans la moelle par la **racine dorsale**.
- Le **centre nerveux** : la **moelle épinière**, où le neurone sensoriel fait synapse avec le motoneurone.
- Le **neurone moteur** (**motoneurone**) : son corps cellulaire est dans la substance grise de la moelle ; son axone sort par la **racine ventrale** et va jusqu'au muscle.
- L'**effecteur** : le **muscle** étiré, qui se contracte.
- Il n'y a qu'**une seule synapse** entre neurone sensoriel et motoneurone : le réflexe myotatique est **monosynaptique**, d'où sa rapidité.

### Le muscle antagoniste
- Pendant que le muscle étiré se contracte, le muscle **antagoniste** (qui fait le mouvement inverse) se relâche.
- Cela passe par un **interneurone** inhibiteur dans la moelle : le circuit vers l'antagoniste est **polysynaptique**.

### Le message nerveux le long d'un neurone
- Le message nerveux est fait de **potentiels d'action** : de brèves inversions de la polarité de la membrane du neurone.
- Tous les potentiels d'action d'un neurone ont la **même amplitude**. L'intensité de la stimulation est **codée en fréquence** : un étirement plus fort donne des potentiels d'action plus rapprochés.

### La synapse chimique
- À la synapse, le potentiel d'action arrivant au bout de l'axone déclenche la libération, par **exocytose**, d'un **neurotransmetteur** dans la **fente synaptique**.
- Le neurotransmetteur se fixe sur des **récepteurs** du neurone suivant (ou de la fibre musculaire). Le message est alors **codé en concentration** de neurotransmetteur.
- À la **jonction neuromusculaire** (synapse entre motoneurone et fibre musculaire), le neurotransmetteur est l'**acétylcholine**.
- Le neurotransmetteur est ensuite éliminé (dégradé ou recapté), ce qui arrête le signal.

### L'intégration par le motoneurone
- Un motoneurone reçoit des milliers de synapses : certaines **excitatrices** (qui rapprochent du déclenchement d'un potentiel d'action), d'autres **inhibitrices**.
- Il fait la **somme** de tous ces messages. Il n'émet un potentiel d'action que si le résultat atteint un **seuil**. C'est l'**intégration**.

### L'intérêt médical
- Tester un réflexe permet de vérifier que tout l'arc réflexe fonctionne. Un réflexe absent oriente vers une lésion du nerf, de la moelle ou du muscle.

### À retenir pour le bac
- Savoir faire le schéma de l'arc réflexe myotatique avec ses 5 éléments, sans oublier le muscle antagoniste.
- Potentiel d'action = codage en fréquence ; synapse = codage en concentration.
- Le piège : le réflexe myotatique ne passe pas par le cerveau. Le centre est la moelle épinière.
- Le piège : le circuit vers le muscle étiré est monosynaptique, celui vers l'antagoniste est polysynaptique.`,
      cartes: [
        { q: "Qu'est-ce que le réflexe myotatique ?", r: "La contraction réflexe d'un muscle en réponse à son propre étirement." },
        { q: "Quel est le récepteur du réflexe myotatique ?", r: "Le fuseau neuromusculaire, situé dans le muscle." },
        { q: "Quel est le centre nerveux du réflexe myotatique ?", r: "La moelle épinière." },
        { q: "Où se trouve le corps cellulaire du neurone sensoriel ?", r: "Dans le ganglion rachidien, sur la racine dorsale du nerf rachidien." },
        { q: "Par où sort l'axone du motoneurone ?", r: "Par la racine ventrale du nerf rachidien." },
        { q: "Pourquoi dit-on que le réflexe myotatique est monosynaptique ?", r: "Il n'y a qu'une seule synapse entre le neurone sensoriel et le motoneurone du muscle étiré." },
        { q: "Comment le muscle antagoniste se relâche-t-il ?", r: "Par un interneurone inhibiteur dans la moelle épinière : circuit polysynaptique." },
        { q: "Comment l'intensité d'une stimulation est-elle codée sur un axone ?", r: "En fréquence de potentiels d'action, qui ont tous la même amplitude." },
        { q: "Comment le message est-il codé à la synapse ?", r: "En concentration de neurotransmetteur libéré dans la fente synaptique." },
        { q: "Quel est le neurotransmetteur de la jonction neuromusculaire ?", r: "L'acétylcholine." },
        { q: "Comment le neurotransmetteur est-il libéré ?", r: "Par exocytose de vésicules, déclenchée par l'arrivée du potentiel d'action." },
        { q: "Qu'est-ce que l'intégration par un motoneurone ?", r: "La somme des messages excitateurs et inhibiteurs reçus ; il émet un potentiel d'action si le seuil est atteint." },
        { q: "À quoi sert un test de réflexe chez le médecin ?", r: "À vérifier que tout l'arc réflexe (nerfs, moelle, muscle) fonctionne." },
      ],
      quiz: [
        { q: "Quel est le récepteur sensoriel du réflexe myotatique ?", choix: ["La jonction neuromusculaire","Le fuseau neuromusculaire","Le ganglion rachidien","La racine ventrale"], bonne: 1, expl: "Le fuseau, dans le muscle, détecte l'étirement ; la jonction neuromusculaire est une synapse.", niv: 1 },
        { q: "Quel neurotransmetteur est libéré à la jonction neuromusculaire ?", choix: ["L'adrénaline","La dopamine","L'acétylcholine","Le GABA"], bonne: 2, expl: "Le motoneurone libère de l'acétylcholine sur la fibre musculaire.", niv: 1 },
        { q: "Où se trouve le corps cellulaire du neurone sensoriel du réflexe ?", choix: ["Dans la substance grise de la moelle","Dans le ganglion rachidien","Dans la racine ventrale","Dans le cortex moteur"], bonne: 1, expl: "Le corps cellulaire du neurone sensoriel est dans le ganglion de la racine dorsale ; celui du motoneurone est dans la substance grise.", niv: 1 },
        { q: "On sectionne la racine dorsale d'un nerf rachidien. Le réflexe disparaît. Pourquoi ?", choix: ["Le message sensoriel n'atteint plus la moelle","Le message moteur n'atteint plus le muscle","Le fuseau ne détecte plus l'étirement","Le muscle ne peut plus se contracter"], bonne: 0, expl: "La racine dorsale contient les fibres sensorielles : le message ne parvient plus au centre nerveux.", niv: 2 },
        { q: "Un étirement plus fort du muscle donne des potentiels d'action plus rapprochés sur la fibre sensorielle. Qu'en déduit-on ?", choix: ["L'intensité est codée en amplitude","L'intensité est codée en concentration","L'intensité ne change pas le message","L'intensité est codée en fréquence"], bonne: 3, expl: "Les potentiels d'action gardent la même amplitude ; seule leur fréquence augmente avec l'intensité.", niv: 2 },
        { q: "Le délai entre étirement et contraction ne permet le passage que d'une synapse. Que conclut-on ?", choix: ["Le réflexe myotatique est monosynaptique","Le réflexe passe par le cerveau","Le réflexe ne fait intervenir aucune synapse","Le réflexe passe par un interneurone excitateur"], bonne: 0, expl: "Un délai très court correspond au franchissement d'une seule synapse, entre neurone sensoriel et motoneurone.", niv: 2 },
        { q: "On stimule plus fort un neurone présynaptique. On mesure plus de neurotransmetteur dans la fente. Qu'en déduit-on ?", choix: ["La synapse transmet le message électrique tel quel","Le message est codé en amplitude à la synapse","Le message est codé en concentration à la synapse","Le neurotransmetteur est recapté plus vite"], bonne: 2, expl: "Plus de potentiels d'action libèrent plus de neurotransmetteur : la synapse code en concentration.", niv: 2 },
        { q: "Lors du réflexe rotulien, le muscle extenseur de la cuisse se contracte. Que fait le muscle fléchisseur ?", choix: ["Il se relâche, grâce à un interneurone inhibiteur","Il se relâche, grâce à un motoneurone excitateur","Il reste sans lien avec le réflexe","Il se contracte en même temps que l'extenseur"], bonne: 0, expl: "L'antagoniste est inhibé par un interneurone dans la moelle, ce qui permet le mouvement.", niv: 2 },
        { q: "Un motoneurone reçoit en même temps des messages excitateurs et inhibiteurs. Il n'émet aucun potentiel d'action. Pourquoi ?", choix: ["Les messages inhibiteurs ont détruit la synapse","Le motoneurone ne reçoit pas assez d'acétylcholine du muscle","Le motoneurone n'a pas de racine ventrale","La somme des messages reste sous le seuil"], bonne: 3, expl: "Le motoneurone intègre les messages : si leur somme n'atteint pas le seuil, il reste silencieux.", niv: 2 },
        { q: "Un patient n'a plus de réflexe rotulien mais garde la sensibilité de la jambe. Où peut être la lésion ?", choix: ["Sur la voie sensorielle vers la moelle","Dans le fuseau neuromusculaire","Dans le ganglion rachidien","Sur la voie motrice vers le muscle"], bonne: 3, expl: "La sensibilité est conservée, donc la voie sensorielle marche : le problème touche le motoneurone, son axone ou le muscle.", niv: 3 },
        { q: "Pourquoi le réflexe myotatique se produit-il même chez un patient au cerveau inconscient ?", choix: ["Il est commandé par le cortex moteur","Le muscle se contracte sans neurone","Son centre nerveux est la moelle épinière","Le fuseau commande seul le muscle"], bonne: 2, expl: "L'arc réflexe se ferme dans la moelle épinière, sans passer par le cerveau.", niv: 3 },
        { q: "Une substance bloque les récepteurs à acétylcholine des fibres musculaires. Quel effet sur le réflexe ?", choix: ["Le fuseau ne détecte plus l'étirement","Le muscle ne se contracte plus","Le message sensoriel ne naît plus","Le réflexe devient plus rapide"], bonne: 1, expl: "Le message arrive à la jonction mais ne peut plus être transmis au muscle : pas de contraction.", niv: 3 },
      ],
    },
    {
      chapitre: "svt-14",
      fiche: `## Cerveau et mouvement volontaire

Un mouvement **volontaire** (attraper un verre, écrire) est décidé et commandé par le **cerveau**. Contrairement au réflexe, il part du **cortex cérébral**, puis descend par la moelle épinière jusqu'aux muscles.

### Les aires motrices du cortex
- L'**imagerie cérébrale** (IRM fonctionnelle) montre les zones du cerveau actives pendant un mouvement. Le **cortex moteur primaire** s'active quand on bouge.
- Il se trouve dans chaque hémisphère, en avant d'un sillon qui traverse le haut du cerveau.
- Il est organisé en **carte** : chaque partie du corps est commandée par une zone précise du cortex. C'est la **somatotopie**.
- Cette carte est **déformée** : la main, le visage et la langue, capables de mouvements très fins, occupent une grande surface. Le tronc en occupe peu. On la représente par un **homoncule moteur**.
- D'autres aires du cortex préparent et planifient le mouvement avant son exécution.

### Le trajet de la commande
- Les **neurones moteurs du cortex** (neurones pyramidaux) envoient leurs axones vers la moelle épinière.
- Ces voies **croisent** la ligne médiane : l'hémisphère **gauche** commande la moitié **droite** du corps, et inversement.
- Dans la moelle, ces axones font synapse avec les **motoneurones**, qui commandent les muscles.
- Le motoneurone est la **voie finale commune** : il reçoit à la fois les messages du cerveau (mouvement volontaire) et ceux des neurones sensoriels (réflexes). Il **intègre** tous ces messages.
- Une **unité motrice** est formée d'un motoneurone et de toutes les fibres musculaires qu'il commande. Dans la main, une unité motrice compte peu de fibres, ce qui permet des gestes précis.

### Les lésions et leurs effets
- Un **accident vasculaire cérébral** (AVC) dans le cortex moteur gauche peut entraîner une **paralysie** de la moitié droite du corps (hémiplégie).
- Une lésion de la moelle épinière coupe la communication entre le cerveau et les muscles situés en dessous.

### La plasticité cérébrale
- Le cerveau n'est pas figé. Les connexions entre neurones se renforcent, se créent ou disparaissent selon l'usage : c'est la **plasticité cérébrale**.
- L'**apprentissage** d'un geste (instrument de musique, sport) agrandit la zone du cortex qui le commande. Exemple : chez un violoniste, la zone des doigts de la main gauche est plus étendue.
- Après une lésion, la **rééducation** permet à d'autres zones de prendre le relais en partie. La récupération est meilleure si la rééducation est précoce et répétée.
- La plasticité explique aussi pourquoi chaque cerveau est unique : la carte motrice dépend de l'histoire de chacun.

### À retenir pour le bac
- Savoir décrire le trajet d'une commande volontaire : cortex moteur, voie croisée, moelle, motoneurone, muscle.
- Savoir expliquer la somatotopie et la forme de l'homoncule.
- Le piège : la commande est croisée (hémisphère gauche → côté droit).
- La plasticité cérébrale permet l'apprentissage et la récupération après lésion.`,
      cartes: [
        { q: "Où naît la commande d'un mouvement volontaire ?", r: "Dans le cortex moteur du cerveau." },
        { q: "Qu'est-ce que la somatotopie ?", r: "L'organisation du cortex moteur en carte : chaque partie du corps est commandée par une zone précise." },
        { q: "Pourquoi la main occupe-t-elle une grande surface du cortex moteur ?", r: "Elle réalise des mouvements très fins, qui demandent beaucoup de neurones." },
        { q: "Qu'est-ce que l'homoncule moteur ?", r: "La représentation déformée du corps selon la surface de cortex moteur qui commande chaque partie." },
        { q: "Quel hémisphère commande la main droite ?", r: "L'hémisphère gauche, car les voies motrices se croisent." },
        { q: "Qu'est-ce que la voie finale commune ?", r: "Le motoneurone, qui reçoit les messages du cerveau et des neurones sensoriels et commande le muscle." },
        { q: "Qu'est-ce qu'une unité motrice ?", r: "Un motoneurone et l'ensemble des fibres musculaires qu'il commande." },
        { q: "Quel outil montre les zones du cerveau actives pendant un mouvement ?", r: "L'IRM fonctionnelle (imagerie cérébrale)." },
        { q: "Quel est l'effet d'un AVC dans le cortex moteur droit ?", r: "Une paralysie possible de la moitié gauche du corps." },
        { q: "Qu'est-ce que la plasticité cérébrale ?", r: "La capacité du cerveau à modifier ses connexions selon l'usage, l'apprentissage ou après une lésion." },
        { q: "Quel effet a l'apprentissage du violon sur le cortex moteur ?", r: "La zone qui commande les doigts de la main gauche s'agrandit." },
        { q: "Pourquoi la rééducation après un AVC est-elle utile ?", r: "Grâce à la plasticité, d'autres zones peuvent prendre en partie le relais." },
        { q: "Pourquoi chaque cerveau est-il unique ?", r: "Sa carte motrice dépend de l'histoire de l'individu, grâce à la plasticité." },
      ],
      quiz: [
        { q: "Comment appelle-t-on l'organisation du cortex moteur en carte du corps ?", choix: ["La plasticité","La décussation","L'intégration","La somatotopie"], bonne: 3, expl: "Chaque zone du cortex moteur commande une partie précise du corps : c'est la somatotopie.", niv: 1 },
        { q: "Qu'est-ce qu'une unité motrice ?", choix: ["Un motoneurone et les fibres qu'il commande","Une zone du cortex moteur et son muscle","Un muscle et son muscle antagoniste","Un neurone sensoriel et son fuseau neuromusculaire"], bonne: 0, expl: "L'unité motrice associe un motoneurone à toutes les fibres qu'il innerve.", niv: 1 },
        { q: "Quel neurone est appelé la voie finale commune ?", choix: ["Le neurone sensoriel du fuseau","Le neurone pyramidal du cortex","Le motoneurone de la moelle","L'interneurone inhibiteur"], bonne: 2, expl: "Le motoneurone reçoit les commandes volontaires et réflexes, puis commande le muscle.", niv: 1 },
        { q: "Une IRM fonctionnelle montre une zone active du cortex gauche quand un sujet bouge la main droite. Qu'en déduit-on ?", choix: ["La commande motrice est directe","Chaque hémisphère commande la main","La main droite n'a pas de motoneurone","La commande motrice est croisée"], bonne: 3, expl: "L'hémisphère gauche commande le côté droit : les voies motrices se croisent.", niv: 2 },
        { q: "Sur l'homoncule moteur, la main est très grande et le dos très petit. Comment l'expliquer ?", choix: ["La main fait des gestes plus fins que le dos","La main contient plus de muscles que le dos","Le dos est commandé par la moelle seule","Le dos est commandé par l'autre hémisphère"], bonne: 0, expl: "La surface du cortex dépend de la finesse des mouvements, pas de la taille de l'organe.", niv: 2 },
        { q: "Un patient a la moitié gauche du corps paralysée après un AVC. Où se trouve probablement la lésion ?", choix: ["Dans le muscle de la jambe gauche","Dans le cortex moteur gauche","Dans la moelle, côté gauche","Dans le cortex moteur droit"], bonne: 3, expl: "La commande étant croisée, une paralysie à gauche oriente vers l'hémisphère droit.", niv: 2 },
        { q: "Chez des pianistes, l'aire motrice des doigts est plus étendue que chez des non-musiciens. Que montre ce résultat ?", choix: ["Une différence génétique propre aux pianistes","Une lésion du cortex chez les non-musiciens","Une plasticité cérébrale liée à l'entraînement","Une somatotopie absente chez les musiciens"], bonne: 2, expl: "L'usage répété d'un geste agrandit la zone qui le commande : c'est la plasticité.", niv: 2 },
        { q: "Un patient ne peut plus bouger ses jambes après une lésion de la moelle au niveau du dos, mais bouge ses bras. Pourquoi ?", choix: ["Le cortex moteur des jambes a été détruit","La commande ne descend plus sous la lésion","Les muscles des jambes ont perdu leurs fibres","Les motoneurones des bras commandent les jambes"], bonne: 1, expl: "La moelle sectionnée bloque la commande vers les motoneurones situés en dessous.", niv: 2 },
        { q: "Après un AVC, un patient récupère une partie de ses mouvements grâce à des exercices répétés. Comment l'expliquer ?", choix: ["Les neurones détruits se reforment tous à l'identique","D'autres neurones prennent en partie le relais","La moelle remplace le cortex pour les gestes fins","Le muscle apprend à se contracter sans commande"], bonne: 1, expl: "La plasticité cérébrale permet à d'autres zones de compenser en partie la lésion.", niv: 2 },
        { q: "Pourquoi un même motoneurone peut-il participer à un réflexe et à un mouvement volontaire ?", choix: ["Il reçoit des messages du cortex et des récepteurs","Il possède deux axones vers deux muscles différents","Il change de neurotransmetteur selon le mouvement","Il est situé à la fois dans le cerveau et dans la moelle"], bonne: 0, expl: "Le motoneurone est la voie finale commune : il intègre les messages venus du cerveau et des récepteurs.", niv: 3 },
        { q: "Les unités motrices des muscles des doigts comptent peu de fibres. Quelle conséquence ?", choix: ["Des contractions plus puissantes que la cuisse","Des mouvements précis et finement dosés","Une absence de commande volontaire","Une fatigue musculaire impossible"], bonne: 1, expl: "Peu de fibres par motoneurone permet de doser finement la force : c'est utile pour les gestes précis.", niv: 3 },
        { q: "Deux jumeaux vrais n'ont pas exactement la même carte motrice. Comment l'expliquer ?", choix: ["Leurs génomes sont différents","La carte motrice est tirée au hasard à la naissance","Leurs apprentissages ont façonné leur cortex différemment","L'un des deux a subi une lésion"], bonne: 2, expl: "Même génome, mais histoire différente : la plasticité rend chaque carte motrice unique.", niv: 3 },
      ],
    },
    {
      chapitre: "svt-15",
      fiche: `## Le cerveau, un organe fragile à préserver

Le cerveau fonctionne grâce à des milliards de synapses. Beaucoup de substances venues de l'extérieur (**drogues**, **médicaments**, alcool) agissent sur ces synapses. Elles peuvent perturber son fonctionnement, parfois durablement.

### Comment une substance agit sur une synapse
- Une molécule qui ressemble à un neurotransmetteur peut se fixer sur ses récepteurs et les activer : c'est un **agoniste**. Exemple : la **nicotine** active les récepteurs de l'acétylcholine.
- Une molécule qui se fixe sur les récepteurs sans les activer bloque le neurotransmetteur : c'est un **antagoniste**. Exemple : le **curare** bloque les récepteurs de l'acétylcholine à la jonction neuromusculaire et provoque une paralysie.
- Une molécule peut aussi empêcher l'élimination du neurotransmetteur. Exemple : la **cocaïne** bloque la **recapture** de la **dopamine** ; la dopamine reste plus longtemps dans la fente synaptique et son effet est prolongé.
- Certaines substances renforcent un neurotransmetteur inhibiteur (le **GABA**). Exemple : les **benzodiazépines** (anxiolytiques) et l'alcool.

### Le système de récompense
- Le **système de récompense** est un ensemble de zones du cerveau reliées par des neurones à **dopamine**. Il s'active lors d'activités agréables et utiles (manger, réussir, rire) et pousse à les répéter.
- Les drogues activent ce système de façon très forte et artificielle, en augmentant la quantité de dopamine dans les synapses.

### L'addiction
- L'**addiction** est une dépendance : le besoin de consommer devient incontrôlable, malgré les effets négatifs.
- Avec une consommation répétée, le cerveau s'adapte : le nombre de récepteurs diminue. Il faut une dose plus forte pour le même effet : c'est la **tolérance**.
- À l'arrêt, le manque de stimulation provoque un **syndrome de sevrage** (malaise, anxiété, envie intense).
- Ces modifications reposent sur la **plasticité cérébrale**. Elles peuvent durer longtemps, ce qui explique les rechutes.
- Le cerveau des adolescents est encore en maturation : il est plus sensible aux effets durables des drogues.

### Les médicaments
- Beaucoup de médicaments utilisent les mêmes mécanismes, de façon contrôlée. Exemple : des **myorelaxants** dérivés du curare sont utilisés en anesthésie pour relâcher les muscles.
- Un médicament agit à une dose précise, prescrite par un médecin. Hors de ce cadre, il peut devenir dangereux.

### Préserver son cerveau
- Le **sommeil** joue un rôle important dans la mémorisation et la récupération.
- L'**activité physique** et une alimentation équilibrée favorisent le bon fonctionnement cérébral.
- Éviter les drogues et l'alcool, surtout pendant l'adolescence.
- Protéger sa tête (casque) et connaître les signes d'un AVC pour agir vite.

### À retenir pour le bac
- Savoir expliquer, à partir d'un document, comment une substance modifie une synapse : agoniste, antagoniste, blocage de la recapture.
- Savoir relier drogue, dopamine et système de récompense.
- Tolérance = il faut plus de produit pour le même effet ; sevrage = malaise à l'arrêt.
- Le piège : l'antagoniste se fixe sur le récepteur mais ne l'active pas.`,
      cartes: [
        { q: "Qu'est-ce qu'un agoniste ?", r: "Une molécule qui se fixe sur le récepteur d'un neurotransmetteur et l'active, comme lui." },
        { q: "Qu'est-ce qu'un antagoniste ?", r: "Une molécule qui se fixe sur le récepteur sans l'activer et empêche le neurotransmetteur d'agir." },
        { q: "Comment agit la nicotine ?", r: "Elle active les récepteurs de l'acétylcholine : c'est un agoniste." },
        { q: "Comment agit le curare ?", r: "Il bloque les récepteurs de l'acétylcholine à la jonction neuromusculaire : paralysie des muscles." },
        { q: "Comment agit la cocaïne ?", r: "Elle bloque la recapture de la dopamine, qui reste plus longtemps dans la fente synaptique." },
        { q: "Qu'est-ce que le système de récompense ?", r: "Un ensemble de zones du cerveau reliées par des neurones à dopamine, activé par les activités agréables." },
        { q: "Quel neurotransmetteur est au cœur du système de récompense ?", r: "La dopamine." },
        { q: "Qu'est-ce que l'addiction ?", r: "Une dépendance où le besoin de consommer devient incontrôlable, malgré les conséquences négatives." },
        { q: "Qu'est-ce que la tolérance ?", r: "Le besoin d'une dose plus forte pour obtenir le même effet, après des prises répétées." },
        { q: "Qu'est-ce que le sevrage ?", r: "L'ensemble des troubles (malaise, anxiété, envie intense) qui apparaissent à l'arrêt d'une substance." },
        { q: "Comment agissent les benzodiazépines ?", r: "Elles renforcent l'effet du GABA, un neurotransmetteur inhibiteur : effet calmant." },
        { q: "Pourquoi le cerveau adolescent est-il plus fragile face aux drogues ?", r: "Il est encore en maturation, donc plus sensible aux modifications durables." },
        { q: "Quel est le rôle du sommeil pour le cerveau ?", r: "Il favorise la mémorisation et la récupération." },
      ],
      quiz: [
        { q: "Comment appelle-t-on une molécule qui se fixe sur un récepteur sans l'activer ?", choix: ["Un antagoniste","Un neurotransmetteur","Un agoniste","Un recapteur"], bonne: 0, expl: "L'antagoniste occupe le récepteur et bloque le neurotransmetteur ; l'agoniste l'active.", niv: 1 },
        { q: "Quel neurotransmetteur est le plus associé au système de récompense ?", choix: ["L'acétylcholine","Le GABA","Le cortisol","La dopamine"], bonne: 3, expl: "Le système de récompense repose sur des neurones à dopamine ; le cortisol est une hormone.", niv: 1 },
        { q: "Comment appelle-t-on le besoin d'une dose plus forte pour obtenir le même effet ?", choix: ["Le sevrage","La rechute","La récompense","La tolérance"], bonne: 3, expl: "La tolérance vient de l'adaptation du cerveau, par exemple une baisse du nombre de récepteurs.", niv: 1 },
        { q: "Avec de la cocaïne, la dopamine reste plus longtemps dans la fente synaptique. Quel mécanisme est en cause ?", choix: ["Le blocage de la libération de la dopamine","L'activation directe des récepteurs à dopamine","Le blocage de la recapture de la dopamine","La destruction des récepteurs à dopamine"], bonne: 2, expl: "La cocaïne bloque le transporteur qui recapte la dopamine : elle s'accumule dans la fente.", niv: 2 },
        { q: "Un animal reçoit du curare : ses muscles ne se contractent plus, mais ses motoneurones émettent des messages. Pourquoi ?", choix: ["Le curare empêche les motoneurones de libérer leurs vésicules","Le curare bloque les récepteurs musculaires à acétylcholine","Le curare détruit les fibres musculaires","Le curare active les récepteurs musculaires"], bonne: 1, expl: "Le message arrive à la jonction, mais l'acétylcholine ne peut plus agir : le curare est un antagoniste.", niv: 2 },
        { q: "La nicotine provoque les mêmes effets que l'acétylcholine sur certains neurones. Comment la qualifier ?", choix: ["D'antagoniste de l'acétylcholine","D'inhibiteur de la recapture","De neurotransmetteur inhibiteur","D'agoniste de l'acétylcholine"], bonne: 3, expl: "Elle active les mêmes récepteurs que l'acétylcholine : c'est un agoniste.", niv: 2 },
        { q: "Chez des consommateurs réguliers d'une drogue, on observe moins de récepteurs à dopamine. Que permet d'expliquer ce document ?", choix: ["L'effet immédiat du produit","L'absence de dépendance","La tolérance au produit","La disparition du système de récompense"], bonne: 2, expl: "Moins de récepteurs, donc moins d'effet pour une même dose : il faut augmenter la dose.", niv: 2 },
        { q: "Un rat qui peut appuyer sur un levier stimulant ses neurones à dopamine appuie sans arrêt. Que montre cette expérience ?", choix: ["Le système de récompense pousse à répéter l'acte","Le rat cherche à éviter une sensation désagréable","La dopamine provoque une paralysie des muscles","Le système de récompense est inactif chez le rat"], bonne: 0, expl: "La stimulation du système de récompense est vécue comme agréable et conduit à répéter le comportement.", niv: 2 },
        { q: "Une personne arrête l'alcool après des années et ressent anxiété et tremblements. Comment appelle-t-on cet état ?", choix: ["Un effet de tolérance au produit","Un syndrome de sevrage","Une intégration synaptique","Une plasticité motrice"], bonne: 1, expl: "À l'arrêt, le cerveau adapté au produit se dérègle : ce sont les signes du sevrage.", niv: 2 },
        { q: "Pourquoi un ancien fumeur peut-il rechuter après des années d'arrêt ?", choix: ["Le tabac reste stocké pendant des années dans ses neurones","Les effets de l'addiction sur le cerveau durent","Son système de récompense a définitivement disparu","Ses récepteurs à acétylcholine ont tous été détruits"], bonne: 1, expl: "La plasticité a remodelé durablement les circuits de la récompense : l'envie peut revenir.", niv: 3 },
        { q: "Un médicament et une drogue peuvent agir sur la même synapse. Qu'est-ce qui les distingue surtout ?", choix: ["Le cadre médical et la dose contrôlée","La présence d'un neurotransmetteur différent","Le fait que l'un ne touche pas les synapses","Le fait que la drogue n'agit que sur les muscles"], bonne: 0, expl: "Un médicament est prescrit à une dose précise pour soigner ; utilisé hors de ce cadre, il devient dangereux.", niv: 3 },
        { q: "Une substance augmente l'effet du GABA. Quel effet attendre sur l'activité des neurones ?", choix: ["Elle augmente, car le GABA est excitateur","Elle reste identique","Elle diminue, car le GABA est inhibiteur","Elle augmente seulement dans les muscles"], bonne: 2, expl: "Renforcer un neurotransmetteur inhibiteur calme l'activité nerveuse : c'est l'effet des anxiolytiques.", niv: 3 },
      ],
    },
    {
      chapitre: "svt-16",
      fiche: `## Contraction musculaire et apport d'énergie

Pour bouger, les muscles se contractent. Cette contraction consomme de l'énergie sous forme d'**ATP**. Il faut donc comprendre comment la fibre musculaire se contracte, comment elle renouvelle son ATP, et comment le glucose lui parvient.

### La cellule musculaire
- Un muscle est formé de **fibres musculaires** : ce sont des cellules très longues, avec **plusieurs noyaux**.
- Chaque fibre contient des **myofibrilles**, faites d'unités qui se répètent : les **sarcomères**.
- Un sarcomère contient deux sortes de filaments de protéines : des filaments fins d'**actine** et des filaments épais de **myosine**.

### Le mécanisme de la contraction
- Le message du motoneurone (acétylcholine) déclenche un potentiel d'action sur la fibre. Celui-ci provoque la libération d'**ions calcium** (Ca2+) stockés dans le **réticulum sarcoplasmique**.
- Le calcium permet aux têtes de **myosine** de se fixer sur l'**actine**.
- Les têtes de myosine pivotent et tirent les filaments d'actine vers le centre du sarcomère. Puis elles se détachent grâce à une nouvelle molécule d'**ATP**, et recommencent.
- Les filaments **glissent** les uns sur les autres sans changer de longueur : le **sarcomère raccourcit**, donc le muscle se contracte.
- L'**ATP** est hydrolysé par la myosine. Sans ATP, les têtes restent accrochées : c'est la rigidité qui apparaît après la mort.

### Renouveler l'ATP
- La fibre stocke très peu d'ATP : quelques secondes d'effort. Elle doit le **régénérer** sans cesse.
- La **phosphocréatine** régénère l'ATP très vite, mais pendant quelques secondes seulement (sprint).
- La **respiration cellulaire** a besoin de **dioxygène**. Elle commence dans le **cytoplasme** par la **glycolyse** (le glucose est coupé en deux molécules de **pyruvate**), puis continue dans la **mitochondrie** (cycle de Krebs et chaîne respiratoire). Elle oxyde complètement le glucose en CO2 et H2O et produit beaucoup d'ATP : une trentaine par glucose.
- La **fermentation lactique** n'utilise pas de dioxygène. Elle se déroule dans le cytoplasme : le pyruvate est transformé en **lactate**. Elle ne produit que **2 ATP** par glucose, mais très rapidement. Elle intervient lors d'efforts intenses, quand le dioxygène ne suffit plus.
- Les **fibres lentes** (riches en mitochondries, rouges) utilisent surtout la respiration : elles résistent à la fatigue. Les **fibres rapides** utilisent davantage la fermentation : elles sont puissantes mais se fatiguent vite. L'entraînement modifie leurs propriétés.

### Le contrôle de la glycémie
- La **glycémie** est la concentration de glucose dans le sang. Elle est maintenue autour de **1 g/L** : c'est une **régulation**.
- Le glucose est stocké sous forme de **glycogène** dans le **foie** et les **muscles**. Le foie peut libérer du glucose dans le sang ; le muscle garde son glycogène pour lui-même.
- Après un repas, la glycémie monte. Les cellules **bêta** des **îlots de Langerhans** du **pancréas** sécrètent l'**insuline**, une hormone **hypoglycémiante** : elle favorise l'entrée du glucose dans les cellules et son stockage en glycogène.
- À jeun ou pendant un effort, la glycémie baisse. Les cellules **alpha** sécrètent le **glucagon**, hormone **hyperglycémiante** : il pousse le foie à libérer du glucose à partir de son glycogène.
- Le **diabète** est un défaut de cette régulation. Type 1 : les cellules bêta sont détruites, il n'y a plus d'insuline. Type 2 : les cellules répondent mal à l'insuline.

### À retenir pour le bac
- Savoir expliquer le glissement des filaments et le rôle de l'ATP et du calcium.
- Comparer respiration (avec O2, mitochondrie, beaucoup d'ATP) et fermentation (sans O2, cytoplasme, 2 ATP, lactate).
- Insuline = hypoglycémiante ; glucagon = hyperglycémiant.
- Le piège : pendant la contraction, les filaments ne raccourcissent pas, ce sont les sarcomères.`,
      cartes: [
        { q: "Qu'est-ce qu'un sarcomère ?", r: "L'unité de contraction de la myofibrille, formée de filaments d'actine et de myosine." },
        { q: "Quelles protéines forment les filaments du sarcomère ?", r: "L'actine (filaments fins) et la myosine (filaments épais)." },
        { q: "Quel ion déclenche la contraction, et d'où vient-il ?", r: "Le calcium (Ca2+), libéré par le réticulum sarcoplasmique." },
        { q: "Quel est le rôle de l'ATP dans la contraction ?", r: "Son hydrolyse par la myosine fournit l'énergie et permet aux têtes de myosine de se détacher de l'actine." },
        { q: "Que se passe-t-il lors de la contraction ?", r: "Les filaments d'actine glissent entre ceux de myosine : le sarcomère raccourcit." },
        { q: "Qu'est-ce que la phosphocréatine ?", r: "Une réserve qui régénère l'ATP très vite, pendant quelques secondes d'effort." },
        { q: "Où se déroule la glycolyse ?", r: "Dans le cytoplasme : le glucose y est coupé en deux pyruvates." },
        { q: "Quel est le bilan de la respiration cellulaire ?", r: "Glucose + O2 → CO2 + H2O, avec production d'une trentaine d'ATP par glucose, dans la mitochondrie." },
        { q: "Quel est le bilan de la fermentation lactique ?", r: "Glucose → lactate, sans O2, avec seulement 2 ATP par glucose, dans le cytoplasme." },
        { q: "Quelle différence entre fibres lentes et fibres rapides ?", r: "Lentes : riches en mitochondries, respiration, peu fatigables. Rapides : surtout fermentation, puissantes, vite fatiguées." },
        { q: "Quelle est la valeur normale de la glycémie ?", r: "Environ 1 g/L de sang." },
        { q: "Quelle hormone fait baisser la glycémie ?", r: "L'insuline, sécrétée par les cellules bêta des îlots de Langerhans du pancréas." },
        { q: "Quelle hormone fait monter la glycémie ?", r: "Le glucagon, sécrété par les cellules alpha du pancréas ; il agit sur le foie." },
        { q: "Pourquoi le muscle ne libère-t-il pas de glucose dans le sang ?", r: "Il garde son glycogène pour lui ; seul le foie peut libérer du glucose dans le sang." },
        { q: "Quelle différence entre diabète de type 1 et de type 2 ?", r: "Type 1 : plus d'insuline (cellules bêta détruites). Type 2 : les cellules répondent mal à l'insuline." },
      ],
      quiz: [
        { q: "Quelle protéine possède des têtes qui tirent sur l'actine ?", choix: ["La myosine","Le glycogène","La créatine","La kératine"], bonne: 0, expl: "Les têtes de myosine se fixent sur l'actine et pivotent, ce qui fait glisser les filaments.", niv: 1 },
        { q: "Où se déroule la fermentation lactique ?", choix: ["Dans la mitochondrie","Dans le cytoplasme","Dans le noyau","Dans le réticulum sarcoplasmique"], bonne: 1, expl: "Fermentation et glycolyse ont lieu dans le cytoplasme ; la suite de la respiration, dans la mitochondrie.", niv: 1 },
        { q: "Quelles cellules sécrètent l'insuline ?", choix: ["Les cellules du foie","Les cellules alpha du pancréas","Les cellules bêta du pancréas","Les fibres musculaires"], bonne: 2, expl: "Les cellules bêta des îlots de Langerhans sécrètent l'insuline ; les cellules alpha, le glucagon.", niv: 1 },
        { q: "Combien d'ATP la fermentation lactique produit-elle par molécule de glucose ?", choix: ["4 ATP","8 ATP","30 ATP","2 ATP"], bonne: 3, expl: "La fermentation ne produit que 2 ATP ; la respiration en produit une trentaine.", niv: 1 },
        { q: "Au microscope, pendant la contraction, les sarcomères raccourcissent mais les filaments gardent leur longueur. Qu'en déduit-on ?", choix: ["Les filaments d'actine se raccourcissent","Les filaments de myosine se replient","Les filaments glissent les uns sur les autres","Le muscle perd de l'eau en se contractant"], bonne: 2, expl: "Les filaments ne changent pas de longueur : seul leur chevauchement augmente.", niv: 2 },
        { q: "Des fibres musculaires isolées, privées d'ATP, restent contractées et rigides. Comment l'expliquer ?", choix: ["Le calcium ne peut plus être libéré du réticulum","Les têtes de myosine ne se détachent plus de l'actine","L'actine se dégrade en l'absence d'ATP","La myosine ne peut plus se fixer sur l'actine"], bonne: 1, expl: "L'ATP est nécessaire au détachement de la myosine : sans lui, les ponts restent fixés.", niv: 2 },
        { q: "Un sprinteur a beaucoup de lactate dans le sang après 400 m. Qu'en déduit-on ?", choix: ["Ses muscles n'ont fait que de la respiration","Ses muscles ont fait de la fermentation lactique","Son foie a libéré du lactate","Ses muscles ont stocké du glucose"], bonne: 1, expl: "Le lactate est le produit de la fermentation, utilisée lors d'efforts intenses quand l'O2 manque.", niv: 2 },
        { q: "Une fibre est riche en mitochondries et en myoglobine. Quel type d'effort favorise-t-elle ?", choix: ["Un effort long et modéré","Un effort bref et très intense","Un effort sans aucun besoin d'énergie","Un effort qui produit beaucoup de lactate"], bonne: 0, expl: "Les mitochondries permettent la respiration, efficace et durable : c'est une fibre lente, adaptée à l'endurance.", niv: 2 },
        { q: "Après un repas sucré, la glycémie monte puis revient à 1 g/L en deux heures. Quelle hormone a permis ce retour ?", choix: ["L'insuline","Le glucagon","L'adrénaline","Le cortisol"], bonne: 0, expl: "L'insuline fait entrer le glucose dans les cellules et favorise son stockage : elle est hypoglycémiante.", niv: 2 },
        { q: "On retire le pancréas d'un chien. Sa glycémie monte et du glucose apparaît dans ses urines. Que montre cette expérience ?", choix: ["Le pancréas produit une hormone hyperglycémiante","Le pancréas stocke tout le glucose du sang","Le pancréas fabrique le glucose de l'urine","Le pancréas produit une hormone hypoglycémiante"], bonne: 3, expl: "Sans pancréas, plus d'insuline : la glycémie n'est plus abaissée.", niv: 2 },
        { q: "Chez une personne diabétique de type 2, l'insuline est présente mais la glycémie reste haute. Pourquoi ?", choix: ["Ses cellules répondent mal à l'insuline","Ses cellules bêta sont toutes détruites","Son foie ne contient pas de glycogène","Ses muscles ne consomment pas de glucose"], bonne: 0, expl: "Dans le type 2, l'insuline est produite mais les cellules cibles y sont moins sensibles.", niv: 2 },
        { q: "Pendant un effort long, le glucagon maintient la glycémie. D'où vient le glucose libéré dans le sang ?", choix: ["Du glycogène des muscles qui travaillent","Des réserves du pancréas","Des sucres stockés dans l'intestin","Du glycogène du foie"], bonne: 3, expl: "Le muscle garde son glycogène pour lui ; seul le foie peut libérer du glucose dans le sang.", niv: 3 },
        { q: "Pourquoi la respiration fournit-elle bien plus d'ATP que la fermentation ?", choix: ["Elle n'a pas besoin de mitochondries","Elle utilise deux fois plus de glucose","Elle oxyde complètement le glucose en CO2 et H2O","Elle se déroule uniquement dans le cytoplasme"], bonne: 2, expl: "La respiration extrait toute l'énergie du glucose ; la fermentation laisse le lactate, encore riche en énergie.", niv: 3 },
        { q: "Lors d'un sprint de 10 secondes, quelle source régénère l'ATP en premier ?", choix: ["La respiration cellulaire","La phosphocréatine","Le glycogène du foie","Les lipides de réserve"], bonne: 1, expl: "La phosphocréatine régénère l'ATP immédiatement, pendant quelques secondes, avant les autres voies.", niv: 3 },
      ],
    },
    {
      chapitre: "svt-17",
      fiche: `## Comportements et stress

Le **stress** est la réponse de l'organisme à une situation perçue comme une menace ou une contrainte : un examen, un danger, un conflit. La cause s'appelle un **agent stresseur**. Le stress aigu est une réaction **adaptative** utile ; le stress chronique, qui dure, devient nocif.

### Le stress aigu : une réponse adaptative
- Face à un agent stresseur, le cerveau évalue la situation. Le **système limbique** (en particulier l'**amygdale**, qui traite les émotions comme la peur) alerte l'**hypothalamus**.
- La réponse mobilise de l'énergie pour faire face : augmentation de la **fréquence cardiaque**, de la **pression artérielle**, de la **fréquence respiratoire** et de la **glycémie**. Les muscles et le cerveau reçoivent plus de dioxygène et de glucose.
- Cette réponse se fait en deux temps, par deux voies.

### La voie rapide : nerveuse
- L'hypothalamus active le **système nerveux sympathique**.
- Celui-ci stimule la **médullosurrénale** (partie centrale de la glande surrénale), qui libère de l'**adrénaline** dans le sang en quelques secondes.
- L'adrénaline accélère le cœur, dilate les bronches et fait libérer du glucose par le foie.

### La voie lente : hormonale (l'axe corticotrope)
- L'hypothalamus libère la **CRH**, qui agit sur l'**hypophyse**.
- L'hypophyse libère l'**ACTH** dans le sang.
- L'ACTH agit sur la **corticosurrénale** (partie externe de la glande surrénale), qui sécrète le **cortisol**, en quelques minutes.
- Le cortisol est **hyperglycémiant** : il fait produire du glucose par le foie. Il freine aussi l'inflammation et certaines réactions immunitaires.
- **Rétrocontrôle négatif** : le cortisol agit en retour sur l'hypothalamus et l'hypophyse (et sur l'**hippocampe**, qui possède de nombreux récepteurs au cortisol) pour freiner la sécrétion de CRH et d'ACTH. La réponse s'éteint quand le danger est passé : c'est la **résilience**.

### Le stress chronique : l'organisme débordé
- Si l'agent stresseur dure (pression permanente, harcèlement, épuisement), le cortisol reste élevé longtemps.
- Le rétrocontrôle fonctionne mal : l'hippocampe, abîmé par l'excès de cortisol, freine moins bien l'axe corticotrope. Un cercle vicieux s'installe.
- Effets possibles : troubles du sommeil, fatigue, anxiété, dépression, défenses immunitaires affaiblies, problèmes cardiovasculaires, troubles de la mémoire.
- Le cerveau est modifié, mais grâce à la **plasticité cérébrale**, ces effets peuvent en partie régresser.

### Prévenir et soigner
- Des **médicaments** peuvent aider : les **anxiolytiques** de la famille des **benzodiazépines** renforcent l'action du **GABA**, un neurotransmetteur inhibiteur, ce qui diminue l'anxiété. Ils créent une dépendance : ils sont prescrits sur une courte durée.
- Des approches **sans médicament** sont efficaces : activité physique régulière, sommeil suffisant, relaxation, méditation, soutien social, organisation du travail.

### À retenir pour le bac
- Savoir faire le schéma des deux voies : sympathique → médullosurrénale → adrénaline ; hypothalamus (CRH) → hypophyse (ACTH) → corticosurrénale → cortisol.
- Savoir expliquer le rétrocontrôle négatif du cortisol.
- Le piège : l'adrénaline vient de la **médullosurrénale**, le cortisol de la **corticosurrénale**.
- Stress aigu = adaptatif ; stress chronique = dérèglement du rétrocontrôle.`,
      cartes: [
        { q: "Qu'est-ce qu'un agent stresseur ?", r: "Une situation perçue comme une menace ou une contrainte, qui déclenche la réponse de stress." },
        { q: "Quel est le rôle de l'amygdale dans le stress ?", r: "Elle traite les émotions comme la peur et alerte l'hypothalamus." },
        { q: "Quels sont les effets du stress aigu sur l'organisme ?", r: "Hausse de la fréquence cardiaque, de la pression artérielle, de la respiration et de la glycémie." },
        { q: "Quelle hormone libère la médullosurrénale ?", r: "L'adrénaline, sous le contrôle du système nerveux sympathique." },
        { q: "Quelle est la voie lente du stress ?", r: "Hypothalamus (CRH) → hypophyse (ACTH) → corticosurrénale (cortisol)." },
        { q: "Quel est l'effet du cortisol sur la glycémie ?", r: "Il l'augmente : il est hyperglycémiant." },
        { q: "Qu'est-ce que le rétrocontrôle négatif du cortisol ?", r: "Le cortisol freine en retour la sécrétion de CRH et d'ACTH, ce qui arrête la réponse." },
        { q: "Quel rôle joue l'hippocampe dans le stress ?", r: "Riche en récepteurs au cortisol, il participe au rétrocontrôle qui freine l'axe corticotrope." },
        { q: "Qu'est-ce que la résilience ?", r: "La capacité de l'organisme à revenir à son état normal une fois le stress passé." },
        { q: "Pourquoi le stress chronique est-il nocif ?", r: "Le cortisol reste élevé, le rétrocontrôle s'affaiblit : sommeil, humeur, immunité et cœur sont touchés." },
        { q: "Comment agissent les benzodiazépines ?", r: "Elles renforcent le GABA, neurotransmetteur inhibiteur, ce qui diminue l'anxiété." },
        { q: "Pourquoi les anxiolytiques sont-ils prescrits sur une courte durée ?", r: "Ils peuvent créer une dépendance." },
        { q: "Cite des moyens non médicamenteux de gérer le stress.", r: "Activité physique, sommeil suffisant, relaxation, méditation, soutien social." },
      ],
      quiz: [
        { q: "Quelle partie de la glande surrénale sécrète le cortisol ?", choix: ["La médullosurrénale","La corticosurrénale","L'hypophyse","L'hypothalamus"], bonne: 1, expl: "Le cortisol vient de la corticosurrénale ; l'adrénaline, de la médullosurrénale.", niv: 1 },
        { q: "Quelle hormone de l'hypophyse stimule la sécrétion de cortisol ?", choix: ["L'ACTH","La CRH","L'insuline","L'adrénaline"], bonne: 0, expl: "La CRH de l'hypothalamus agit sur l'hypophyse, qui libère l'ACTH.", niv: 1 },
        { q: "Quelle structure du cerveau traite la peur et alerte l'hypothalamus ?", choix: ["L'hippocampe","Le cortex moteur","L'amygdale","La moelle épinière"], bonne: 2, expl: "L'amygdale, dans le système limbique, déclenche la réponse au danger ; l'hippocampe intervient dans le rétrocontrôle.", niv: 1 },
        { q: "Quelques secondes après une frayeur, le cœur s'accélère. Quelle voie explique cette rapidité ?", choix: ["La voie hormonale de l'ACTH et du cortisol","La voie motrice issue du cortex","Le rétrocontrôle exercé par l'hippocampe","La voie nerveuse sympathique et l'adrénaline"], bonne: 3, expl: "La voie sympathique et l'adrénaline agissent en quelques secondes ; le cortisol, en quelques minutes.", niv: 2 },
        { q: "On injecte du cortisol à un animal. Son taux d'ACTH baisse. Que montre cette expérience ?", choix: ["Un rétrocontrôle positif du cortisol","Un rétrocontrôle négatif du cortisol","Une stimulation de l'hypophyse par le cortisol","Une absence de lien entre les deux hormones"], bonne: 1, expl: "Le cortisol freine l'hypophyse : c'est un rétrocontrôle négatif, qui limite la réponse.", niv: 2 },
        { q: "Pendant un examen stressant, la glycémie d'un élève monte. Quelles hormones peuvent l'expliquer ?", choix: ["L'adrénaline et le cortisol","L'ACTH et l'insuline","La CRH et l'acétylcholine","L'insuline et l'adrénaline"], bonne: 0, expl: "L'adrénaline et le cortisol sont hyperglycémiants : ils mobilisent du glucose pour faire face.", niv: 2 },
        { q: "Chez des personnes en stress chronique, le cortisol reste élevé et l'hippocampe est réduit. Que suggère ce document ?", choix: ["Le rétrocontrôle fonctionne moins bien","L'axe corticotrope est à l'arrêt","Le rétrocontrôle est renforcé","L'hippocampe produit plus de cortisol"], bonne: 0, expl: "L'hippocampe participe au freinage de l'axe : abîmé, il freine moins, et le cortisol reste haut.", niv: 2 },
        { q: "Une souris dont l'hypophyse est retirée ne produit plus de cortisol en cas de stress. Qu'en déduit-on ?", choix: ["La corticosurrénale est commandée par le sympathique","Le cortisol est produit par l'hypophyse","La médullosurrénale produit le cortisol","La corticosurrénale a besoin de l'ACTH"], bonne: 3, expl: "Sans hypophyse, pas d'ACTH, donc la corticosurrénale n'est plus stimulée.", niv: 2 },
        { q: "Un anxiolytique renforce l'action du GABA. Quel effet sur les neurones de l'amygdale ?", choix: ["Leur activité augmente","Ils libèrent plus de cortisol","Ils deviennent insensibles au GABA","Leur activité diminue"], bonne: 3, expl: "Le GABA est inhibiteur : le renforcer calme les neurones impliqués dans l'anxiété.", niv: 2 },
        { q: "Des personnes stressées qui font du sport régulièrement ont un cortisol plus bas. Que suggère ce résultat ?", choix: ["Le sport remplace les anxiolytiques dans tous les cas","Le sport supprime la sécrétion d'ACTH","L'activité physique aide à réguler le stress","L'activité physique augmente le stress chronique"], bonne: 2, expl: "Le document montre un lien : l'activité physique fait partie des moyens non médicamenteux de gérer le stress.", niv: 2 },
        { q: "Pourquoi le stress aigu est-il considéré comme utile ?", choix: ["Il affaiblit les défenses immunitaires","Il mobilise l'énergie pour faire face au danger","Il bloque toute sécrétion de cortisol","Il fait baisser la glycémie pour économiser"], bonne: 1, expl: "Plus de glucose et de dioxygène pour les muscles et le cerveau : l'organisme s'adapte à la situation.", niv: 3 },
        { q: "Pourquoi une réponse de stress qui ne s'arrête jamais devient-elle nocive ?", choix: ["L'adrénaline disparaît alors complètement du sang","La glycémie tombe à zéro pendant le stress","Le cortisol élevé longtemps dérègle plusieurs fonctions","Le système nerveux sympathique cesse de fonctionner"], bonne: 2, expl: "Sans arrêt de la réponse, le cortisol durablement élevé touche sommeil, humeur, immunité et cœur.", niv: 3 },
        { q: "Pourquoi un anxiolytique n'est-il prescrit que sur une courte durée ?", choix: ["Il peut entraîner une dépendance","Il détruit l'hippocampe en quelques jours","Il augmente le cortisol de façon durable","Il bloque toutes les synapses du cerveau"], bonne: 0, expl: "Les benzodiazépines exposent à une dépendance : on les réserve à de courtes périodes.", niv: 3 },
      ],
    },
  ],
  methode: [
    {
      "id": "svt-m1",
      "mat": "svt",
      "titre": "Exercice 1 : la synthèse argumentée",
      "formules": [
        "Expliquer comment…",
        "Montrer que…",
        "Présenter les mécanismes qui…",
        "Votre réponse sera structurée et illustrée par un ou plusieurs schémas."
      ],
      "vu": [
        "Format de tous les sujets depuis la session 2021",
        "Bac 2025 métropole (deux sujets)",
        "Note de service du 11 septembre 2026, pour la session 2027"
      ],
      "pts": "6 points (session 2027)",
      "attendu": "Un texte organisé qui répond à la question avec les connaissances du cours, parfois appuyé sur un document court. Le correcteur attend une introduction qui pose le problème, un développement en parties logiques avec les mots précis du programme, au moins un schéma légendé et une conclusion qui répond à la question.",
      "etapes": [
        "Lire la question deux fois et souligner le verbe (expliquer, montrer) et les limites du sujet.",
        "Au brouillon, lister les notions et les mots du cours à placer, puis les ranger en 2 ou 3 parties.",
        "Rédiger une introduction de 3 ou 4 lignes : définir les mots clés et poser le problème.",
        "Rédiger chaque partie : une idée, une explication, un exemple précis.",
        "Faire un schéma bilan titré et légendé, et y renvoyer dans le texte.",
        "Conclure en répondant clairement à la question posée."
      ],
      "mots": [
        "définir",
        "mécanisme",
        "exemple",
        "schéma bilan",
        "en conclusion",
        "donc"
      ],
      "pieges": [
        "Réciter tout le chapitre au lieu de répondre à la question.",
        "Oublier le schéma, ou faire un schéma sans titre ni légende.",
        "Écrire un texte sans parties ni connecteurs logiques.",
        "Faire des fautes de vocabulaire scientifique (confondre chromosome et chromatide, allèle et gène)."
      ],
      "cas": "Le sujet porte sur le réflexe myotatique, qui permet de garder la posture debout.",
      "question": "Expliquer comment le réflexe myotatique permet la contraction d'un muscle étiré. Votre réponse sera illustrée par un schéma.",
      "modele": "Introduction : le réflexe myotatique est la contraction involontaire d'un muscle en réponse à son propre étirement ; on se demande quel circuit nerveux l'assure. Partie 1 : l'étirement est détecté par les fuseaux neuromusculaires, qui émettent des potentiels d'action ; plus l'étirement est fort, plus leur fréquence est élevée. Le message suit le neurone sensoriel, dont le corps cellulaire est dans le ganglion rachidien, jusqu'à la moelle épinière. Partie 2 : dans la moelle, le neurone sensoriel fait synapse directement avec le motoneurone du même muscle (circuit monosynaptique). Le motoneurone intègre les messages et, si le seuil est atteint, envoie des potentiels d'action par la racine ventrale. À la jonction neuromusculaire, l'acétylcholine déclenche la contraction. En parallèle, un interneurone inhibiteur relâche le muscle antagoniste. Schéma de l'arc réflexe légendé. Conclusion : le réflexe myotatique repose sur un arc réflexe court dont le centre est la moelle épinière, ce qui le rend rapide.",
      "grille": [
        "Introduction avec définition et problème posé",
        "Récepteur, neurone sensoriel, moelle, motoneurone, muscle cités dans l'ordre",
        "Caractère monosynaptique expliqué",
        "Rôle de l'acétylcholine à la jonction neuromusculaire",
        "Inhibition du muscle antagoniste",
        "Schéma titré et légendé",
        "Conclusion qui répond à la question"
      ]
    },
    {
      "id": "svt-m2",
      "mat": "svt",
      "titre": "Exercice 2 : résoudre un problème à partir de documents",
      "formules": [
        "À partir de l'étude des documents et de vos connaissances, montrer que…",
        "Expliquer, à l'aide des documents, comment…",
        "Proposer une explication à…"
      ],
      "vu": [
        "Format de tous les sujets depuis la session 2021",
        "Bac 2025 métropole (deux sujets)",
        "Note de service du 11 septembre 2026, pour la session 2027"
      ],
      "pts": "7 points (session 2027)",
      "attendu": "Une démarche de raisonnement : pour chaque document, ce qu'on y voit (données chiffrées précises) puis ce qu'on en déduit, en lien avec le problème. Les connaissances du cours servent à interpréter. Le correcteur attend une conclusion qui met ensemble toutes les informations et répond au problème. Les documents ne sont pas forcément à traiter dans l'ordre.",
      "etapes": [
        "Reformuler le problème posé en une phrase.",
        "Pour chaque document : écrire ce qu'il montre avec des valeurs précises (je vois que…).",
        "Interpréter avec le cours (or je sais que… donc…).",
        "Relier les documents entre eux : ce que l'un apporte de plus que l'autre.",
        "Rédiger une conclusion qui répond au problème en reprenant les déductions."
      ],
      "mots": [
        "on constate que",
        "or",
        "donc",
        "on en déduit que",
        "ce qui confirme",
        "en conclusion"
      ],
      "pieges": [
        "Paraphraser les documents sans rien en déduire.",
        "Donner des tendances sans valeurs chiffrées (« ça augmente »).",
        "Oublier d'apporter des connaissances du cours.",
        "Ne pas répondre au problème dans la conclusion."
      ],
      "cas": "Document fictif : un test-cross chez le maïs donne 452 grains colorés lisses, 438 incolores ridés, 56 colorés ridés et 54 incolores lisses.",
      "question": "Montrer que les deux gènes étudiés sont liés et expliquer l'origine des grains minoritaires.",
      "modele": "Problème : comment les deux gènes se transmettent-ils ? On constate deux phénotypes majoritaires (452 + 438 = 890, soit 89 %), identiques à ceux des parents, et deux phénotypes minoritaires (56 + 54 = 110, soit 11 %), nouveaux. Or, dans un test-cross, le phénotype des descendants révèle les gamètes de l'hybride. Si les gènes étaient indépendants, on aurait 4 phénotypes à 25 %. Ce n'est pas le cas : les gènes sont donc liés, sur la même paire de chromosomes. Les phénotypes recombinés minoritaires viennent de crossing-over entre chromatides homologues en prophase I de la méiose de l'hybride. En conclusion, les deux gènes sont liés, et le brassage intrachromosomique explique les 11 % de recombinés.",
      "grille": [
        "Valeurs chiffrées citées",
        "Comparaison avec le résultat attendu pour des gènes indépendants",
        "Conclusion : gènes liés",
        "Crossing-over en prophase I expliqué",
        "Conclusion qui répond au problème"
      ]
    },
    {
      "id": "svt-m3",
      "mat": "svt",
      "titre": "Exploiter un graphique ou un résultat d'expérience",
      "formules": [
        "Analyser le document…",
        "Exploiter les résultats de l'expérience…",
        "Que peut-on déduire de ce document ?"
      ],
      "vu": [
        "Format de tous les sujets depuis la session 2021",
        "Bac 2025 métropole (deux sujets)",
        "Note de service du 11 septembre 2026, pour la session 2027"
      ],
      "pts": "partie de l'exercice 2 ou de l'ECE",
      "attendu": "Décrire le document avec précision (titre, axes, unités, valeurs), comparer à un témoin quand il y en a un, puis tirer une conclusion limitée à ce que montre le document.",
      "etapes": [
        "Lire le titre, les axes et les unités.",
        "Repérer le témoin et la variable qui change.",
        "Décrire la tendance avec au moins deux valeurs chiffrées.",
        "Comparer avec le témoin.",
        "Conclure : ce que montre ce document, et seulement cela."
      ],
      "mots": [
        "témoin",
        "variable",
        "valeur",
        "on observe",
        "par comparaison",
        "on en déduit"
      ],
      "pieges": [
        "Oublier les unités.",
        "Conclure au-delà de ce que montre le document.",
        "Confondre corrélation et cause."
      ],
      "cas": "Document fictif : des chloroplastes éclairés, sans CO2, avec un accepteur d'électrons, font passer la concentration en O2 du milieu de 250 à 310 µmol/L en 5 minutes ; à l'obscurité, elle reste à 250 µmol/L.",
      "question": "Que peut-on déduire de cette expérience ?",
      "modele": "À l'obscurité (témoin), la concentration en O2 reste stable à 250 µmol/L. À la lumière, elle passe de 250 à 310 µmol/L en 5 minutes, alors qu'il n'y a pas de CO2. On en déduit que les chloroplastes produisent du dioxygène à la lumière, et que cette production ne dépend pas de la fixation du CO2 : c'est la phase photochimique, qui oxyde l'eau.",
      "grille": [
        "Témoin identifié",
        "Valeurs avec unités",
        "Comparaison lumière et obscurité",
        "Conclusion limitée au document"
      ]
    },
    {
      "id": "svt-m4",
      "mat": "svt",
      "titre": "ECE : proposer une stratégie de résolution",
      "formules": [
        "Proposer une démarche de résolution permettant de…",
        "Concevoir un protocole pour tester l'hypothèse…"
      ],
      "vu": [
        "Épreuve pratique (ECE) d'1 heure, notée sur 5 points",
        "Note de service du 11 septembre 2026, pour la session 2027"
      ],
      "pts": "partie de l'ECE (5 points au total)",
      "attendu": "Dire ce que l'on fait, comment on le fait et ce que l'on attend : une manipulation qui fait varier un seul paramètre, un témoin, et les résultats attendus si l'hypothèse est juste.",
      "etapes": [
        "Reformuler l'hypothèse à tester.",
        "Dire ce que l'on va faire (quoi) et avec quel matériel (comment).",
        "Ne faire varier qu'un seul paramètre et prévoir un témoin.",
        "Écrire les résultats attendus si l'hypothèse est vérifiée."
      ],
      "mots": [
        "hypothèse",
        "témoin",
        "un seul paramètre",
        "résultats attendus",
        "si…, alors…"
      ],
      "pieges": [
        "Oublier le témoin.",
        "Faire varier deux paramètres à la fois.",
        "Ne pas dire ce que l'on attend."
      ],
      "cas": "On veut vérifier que des algues unicellulaires (chlorelles) produisent du dioxygène seulement à la lumière. On dispose d'une sonde à dioxygène, d'une lampe et d'un cache opaque.",
      "question": "Proposer une stratégie de résolution.",
      "modele": "Je place une suspension de chlorelles dans l'enceinte de la sonde à dioxygène. Je mesure la concentration en O2 pendant 5 minutes à l'obscurité (cache opaque), puis 5 minutes à la lumière, seul le paramètre lumière changeant. L'obscurité sert de témoin. Si l'hypothèse est juste, la concentration en O2 baisse légèrement à l'obscurité (respiration seule) et augmente à la lumière (photosynthèse plus forte que la respiration).",
      "grille": [
        "Un seul paramètre qui varie (la lumière)",
        "Témoin prévu",
        "Matériel utilisé correctement",
        "Résultats attendus annoncés"
      ]
    },
    {
      "id": "svt-m5",
      "mat": "svt",
      "titre": "Bien écrire : les 2 points de langue",
      "formules": [
        "Les 2 points de maîtrise de la langue sont donnés sur l'ensemble de la copie."
      ],
      "vu": [
        "Note de service du 11 septembre 2026, pour la session 2027 (annexe « Attendus et observables rédactionnels »)"
      ],
      "pts": "2 points (session 2027)",
      "attendu": "Une copie lisible, en phrases complètes, avec une orthographe et une syntaxe correctes, un vocabulaire scientifique exact, et un raisonnement organisé.",
      "etapes": [
        "Écrire des phrases complètes, avec sujet et verbe, pas de style télégraphique.",
        "Employer le mot scientifique exact (motoneurone, et non « nerf du muscle »).",
        "Faire des paragraphes : une idée par paragraphe.",
        "Garder 5 minutes à la fin pour relire les accords et l'orthographe des mots du cours."
      ],
      "mots": [
        "tout d'abord",
        "ensuite",
        "or",
        "donc",
        "en conclusion"
      ],
      "pieges": [
        "Les abréviations non expliquées.",
        "Les flèches à la place des phrases dans le texte.",
        "Les fautes sur les mots du cours (méiose, chromatide, sarcomère)."
      ],
      "cas": "Une réponse rédigée ainsi : « fuseau → étiré → message → moelle → muscle contracte ».",
      "question": "Réécrire cette réponse correctement.",
      "modele": "L'étirement du muscle est détecté par le fuseau neuromusculaire. Celui-ci envoie un message nerveux, par le neurone sensoriel, jusqu'à la moelle épinière. Le motoneurone transmet ensuite le message au muscle, qui se contracte.",
      "grille": [
        "Phrases complètes",
        "Vocabulaire scientifique exact",
        "Connecteurs logiques",
        "Orthographe des mots du cours"
      ]
    }
  ],
  sujets: [
    {
      id: "svt-s1", matiere: 'svt', titre: "Sujet d'entraînement 1", duree: 240,
      enonce: `## Sujet d'entraînement 1 (inventé, au format de la session 2027)

Ce sujet est inventé pour s'entraîner. Les données des documents sont fictives. Il reprend la forme de l'écrit (3 h 30, exercice 1 sur 6 points, exercice 2 sur 7 points, 2 points de maîtrise de la langue). Une partie 3, sur papier, imite l'esprit de l'épreuve pratique (ECE, 5 points) : compter 30 minutes de plus.

### Exercice 1 (6 points) : la commande du mouvement

Lors d'un examen médical, le médecin frappe le tendon sous la rotule : la jambe se tend sans que le patient l'ait voulu. Quelques minutes plus tard, il demande au patient de tendre la jambe volontairement.

Question : expliquer comment le système nerveux commande la contraction du muscle de la cuisse dans ces deux situations, en montrant ce qu'elles ont en commun et ce qui les distingue. Votre réponse sera structurée et illustrée par un schéma.

### Exercice 2 (7 points) : la diversité des grains de maïs

Chez le maïs, un gène contrôle la couleur du grain (allèle C, coloré, dominant ; allèle c, incolore, récessif) et un autre gène contrôle son aspect (allèle L, lisse, dominant ; allèle l, ridé, récessif).

Document 1 (données fictives). Une lignée pure à grains colorés et lisses est croisée avec une lignée pure à grains incolores et ridés. Tous les grains de la première génération (F1) sont colorés et lisses.

Document 2 (données fictives). Une plante issue d'un grain F1 est croisée avec une plante à grains incolores et ridés. Sur 1 000 grains obtenus : 452 colorés et lisses, 438 incolores et ridés, 56 colorés et ridés, 54 incolores et lisses.

Document 3. Observation au microscope de cellules de la plante F1 en prophase de première division de méiose : les chromosomes homologues sont appariés et présentent des points de contact entre chromatides (chiasmas).

Question : à partir des documents et de vos connaissances, expliquer la diversité des grains obtenus dans le document 2, en montrant le rôle de la méiose de la plante F1.

### Partie 3 (5 points, esprit de l'ECE) : la production de dioxygène par une algue

On cherche à savoir si une algue unicellulaire, la chlorelle, produit du dioxygène à la lumière. On dispose : d'une suspension de chlorelles, d'une enceinte reliée à une sonde à dioxygène et à un ordinateur, d'une lampe et d'un cache opaque.

1. Proposer une stratégie de résolution (quoi faire, comment, résultats attendus).
2. Résultats fictifs obtenus : à l'obscurité, la concentration en dioxygène passe de 280 à 270 µmol/L en 5 minutes ; à la lumière, elle passe de 270 à 330 µmol/L en 5 minutes. Interpréter ces résultats et conclure.`,
      corrige: `## Corrigé du sujet d'entraînement 1

### Exercice 1 (6 points)

Introduction. Un même muscle peut se contracter de façon involontaire (le réflexe myotatique, déclenché par l'étirement) ou volontaire (décidé par le cerveau). On se demande quel circuit nerveux commande la contraction dans chaque cas.

Partie 1 : le réflexe myotatique. Le choc sur le tendon étire le muscle de la cuisse. Les fuseaux neuromusculaires détectent cet étirement et émettent des potentiels d'action, dont la fréquence code l'intensité. Le message suit le neurone sensoriel (corps cellulaire dans le ganglion rachidien) et entre dans la moelle épinière par la racine dorsale. Il y fait synapse directement avec le motoneurone : le circuit est monosynaptique, donc rapide. Le motoneurone envoie le message par la racine ventrale jusqu'au muscle. En même temps, un interneurone inhibiteur relâche le muscle antagoniste.

Partie 2 : le mouvement volontaire. La commande naît dans le cortex moteur, dans la zone qui correspond à la cuisse (somatotopie). Elle est croisée : l'hémisphère gauche commande la jambe droite. Les axones des neurones du cortex descendent dans la moelle et font synapse avec les motoneurones.

Partie 3 : ce qui est commun. Dans les deux cas, c'est le même motoneurone qui commande le muscle : c'est la voie finale commune. Il intègre les messages excitateurs et inhibiteurs. À la jonction neuromusculaire, il libère de l'acétylcholine, qui déclenche la contraction.

Schéma attendu : moelle épinière en coupe, fuseau, neurone sensoriel, ganglion rachidien, motoneurone, muscle et antagoniste, interneurone ; flèche descendant du cortex moteur vers le motoneurone.

Conclusion. Le réflexe est un circuit court dont le centre est la moelle ; le mouvement volontaire part du cortex moteur. Les deux passent par le motoneurone, voie finale commune.

### Exercice 2 (7 points)

Problème : comment expliquer les quatre types de grains du document 2 ?

Document 1. Toute la F1 est colorée et lisse : C et L sont dominants. La F1 a reçu un chromosome de chaque parent : elle est hétérozygote pour les deux gènes, de génotype (C L // c l) si les gènes sont liés.

Document 2. Il s'agit d'un croisement test : la plante à grains incolores et ridés est homozygote récessive, ses gamètes n'apportent que c et l. Le phénotype de chaque grain révèle donc le gamète apporté par la F1. On observe 452 + 438 = 890 grains (89 %) de phénotypes parentaux et 56 + 54 = 110 grains (11 %) de phénotypes recombinés. Si les gènes étaient indépendants, on attendrait 4 phénotypes à 25 % chacun. Ce n'est pas le cas : les deux gènes sont liés, sur la même paire de chromosomes.

Document 3. Les chiasmas montrent des crossing-over entre chromatides de chromosomes homologues en prophase I. Ils échangent des portions de chromatides et créent de nouvelles combinaisons d'allèles (C l et c L) sur un même chromosome : c'est le brassage intrachromosomique.

Conclusion. La F1 produit surtout des gamètes parentaux (C L et c l), et, dans 11 % des cas, des gamètes recombinés issus de crossing-over. La méiose de la F1, par le brassage intrachromosomique, explique donc la diversité des grains.

### Partie 3 (5 points)

1. Stratégie. Placer la suspension de chlorelles dans l'enceinte de la sonde à dioxygène. Mesurer la concentration en dioxygène 5 minutes à l'obscurité (cache opaque) puis 5 minutes à la lumière, en ne changeant que l'éclairement. La phase à l'obscurité sert de témoin. Si les chlorelles produisent du dioxygène à la lumière, la concentration doit augmenter à la lumière.

2. Interprétation. À l'obscurité, la concentration baisse de 280 à 270 µmol/L : les chlorelles consomment du dioxygène par la respiration. À la lumière, elle monte de 270 à 330 µmol/L : les chlorelles produisent plus de dioxygène qu'elles n'en consomment. Conclusion : à la lumière, les chlorelles font la photosynthèse, qui libère du dioxygène en plus grande quantité que la respiration n'en consomme.`,
      grille: [{"c":"Exercice 1 : connaissances exactes sur le réflexe et le mouvement volontaire","pts":3},{"c":"Exercice 1 : texte structuré, points communs et différences, schéma légendé","pts":3},{"c":"Exercice 2 : exploitation chiffrée des documents 1 et 2, gènes liés","pts":4},{"c":"Exercice 2 : crossing-over expliqué et conclusion qui répond au problème","pts":3},{"c":"Maîtrise de la langue (orthographe, syntaxe, vocabulaire)","pts":2},{"c":"Partie 3 : stratégie avec témoin et résultats attendus","pts":2},{"c":"Partie 3 : interprétation chiffrée et conclusion","pts":3}],
    },
  ],
};
