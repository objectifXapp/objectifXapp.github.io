// Numérique et sciences informatiques (spécialité, terminale) — voie générale. Sources : voir matiere.sources.
// Programme : arrêté du 19 juillet 2019 (BO spécial n°8 du 25 juillet 2019), toujours en vigueur pour le bac 2027.
// Six rubriques : histoire de l'informatique, structures de données, bases de données, architectures matérielles,
// systèmes d'exploitation et réseaux, langages et programmation, algorithmique. Un chapitre par grande partie.
// Épreuve : écrit de 3 h 30 noté sur 12 (trois exercices) et épreuve pratique d'1 h notée sur 8 (deux exercices sur ordinateur).
// Le code est en Python, écrit sur une ligne avec des « ; » pour rester lisible sur téléphone.

export default {
  matiere: {
    id: 'nsi',
    nom: 'Numérique et sciences informatiques',
    voie: 'generale',
    epreuve: { type: 'ecrit+pratique', duree: 210, coef: 16, quand: 'juin', note: 'Écrit de 3 h 30 sur 12 points (trois exercices) et épreuve pratique d\'1 h sur 8 points (deux exercices de programmation en Python)' },
    sources: [
      'https://eduscol.education.gouv.fr/2068/programmes-et-ressources-en-numerique-et-sciences-informatiques-voie-g',
      'https://www.education.gouv.fr/bo/19/Special8/MENE1921247A.htm',
      'https://education.gouv.fr/media/11642/download',
      'https://aufutur.fr/baccalaureat/epreuve-specialite-nsi-bac/',
      'https://www.letudiant.fr/bac/corriges-du-bac/article/bac-nsi-2026-sujets-et-corriges-de-l-epreuve-ecrite.html',
    ],
    chapitres: [
      { id: 'nsi-1', t: 'Listes, piles et files : interface et implémentation', theme: 'Structures de données' },
      { id: 'nsi-2', t: 'La programmation orientée objet', theme: 'Structures de données' },
      { id: 'nsi-3', t: 'Les arbres et les arbres binaires de recherche', theme: 'Structures de données et algorithmique' },
      { id: 'nsi-4', t: 'Les graphes et leurs parcours', theme: 'Structures de données et algorithmique' },
      { id: 'nsi-5', t: 'Le modèle relationnel', theme: 'Bases de données' },
      { id: 'nsi-6', t: 'Le langage SQL', theme: 'Bases de données' },
      { id: 'nsi-7', t: 'Processus, ordonnancement et systèmes sur puce', theme: 'Architectures matérielles et systèmes d\'exploitation' },
      { id: 'nsi-8', t: 'Le routage dans les réseaux : RIP et OSPF', theme: 'Réseaux' },
      { id: 'nsi-9', t: 'La sécurisation des communications', theme: 'Réseaux' },
      { id: 'nsi-10', t: 'La récursivité', theme: 'Langages et programmation' },
      { id: 'nsi-11', t: 'Modularité, paradigmes et mise au point des programmes', theme: 'Langages et programmation' },
      { id: 'nsi-12', t: 'Calculabilité, décidabilité et histoire de l\'informatique', theme: 'Langages et programmation' },
      { id: 'nsi-13', t: 'Diviser pour régner et tri fusion', theme: 'Algorithmique' },
      { id: 'nsi-14', t: 'La programmation dynamique', theme: 'Algorithmique' },
      { id: 'nsi-15', t: 'La recherche textuelle : Boyer-Moore', theme: 'Algorithmique' },
    ],
  },
  paquets: [
    { chapitre: 'nsi-1',
      fiche: `## Listes, piles et files : interface et implémentation

### Interface et implémentation
- L'**interface** d'une structure de données dit **ce qu'on peut faire** avec elle : la liste des opérations et leur effet. Exemple : « empiler », « dépiler », « est_vide ».
- L'**implémentation** dit **comment c'est fait** : comment les données sont rangées en mémoire et comment les opérations sont programmées.
- Une même interface peut avoir plusieurs implémentations (avec une liste Python, avec des maillons chaînés). Celui qui utilise la structure n'a besoin de connaître que l'interface.

### La liste chaînée
- Une **liste chaînée** est une suite de **maillons** : chaque maillon contient une valeur et un lien vers le maillon **suivant**. Le dernier pointe vers rien (None).
- Ajouter ou retirer en **tête** est rapide (coût constant). Accéder au k-ième élément demande de **parcourir** les k premiers maillons (coût linéaire).
- Le tableau (la « liste » Python) donne au contraire un **accès direct** par indice : t[5] est immédiat.

### La pile (LIFO)
- Une **pile** suit le principe **LIFO** (Last In, First Out) : le **dernier entré** est le **premier sorti**, comme une pile d'assiettes.
- Interface : **empiler** (ajouter au sommet), **dépiler** (retirer le sommet et le renvoyer), **sommet** (lire sans retirer), **est_vide**.
- En Python, avec une liste : p.append(x) empile, p.pop() dépile, p[-1] lit le sommet. Ces opérations sont en temps constant.
- Usages : le bouton « annuler » d'un logiciel, l'historique « page précédente » d'un navigateur, la pile des appels de fonctions, la vérification des parenthèses d'une expression.

### La file (FIFO)
- Une **file** suit le principe **FIFO** (First In, First Out) : le **premier entré** est le **premier sorti**, comme une file d'attente.
- Interface : **enfiler** (ajouter à la fin), **défiler** (retirer le premier), **est_vide**.
- Avec une liste Python, f.append(x) enfile, mais f.pop(0) défile en **temps linéaire**, car tous les éléments se décalent. On peut faire mieux avec deux piles, ou avec le module collections (deque).
- Usages : file d'impression, traitement de requêtes dans l'ordre d'arrivée, **parcours en largeur** d'un arbre ou d'un graphe.

### Le dictionnaire
- Un **dictionnaire** associe des **clés** à des **valeurs** : d = {'pomme': 3, 'kiwi': 5}. On accède à une valeur par sa clé : d['kiwi'] vaut 5.
- Ajouter ou modifier : d['poire'] = 2. Tester une clé : 'kiwi' in d.
- La recherche d'une clé est en moyenne en **temps constant**, bien plus rapide qu'une recherche dans une liste.
- Les clés doivent être non modifiables (nombres, chaînes, tuples).

### Exemple à savoir dérouler
- p = [] ; p.append(4) ; p.append(7) ; p.append(2) ; p.pop() renvoie 2, et la pile contient [4, 7].
- f = [3, 8, 5] ; f.append(1) ; f.pop(0) renvoie 3, et la file contient [8, 5, 1].

### À retenir pour le bac
- Pile = LIFO (dernier entré, premier sorti) ; file = FIFO (premier entré, premier sorti).
- Savoir écrire et dérouler les opérations empiler, dépiler, enfiler, défiler.
- Distinguer interface (quoi) et implémentation (comment).
- Piège : pop(0) sur une liste Python coûte un temps proportionnel à la longueur.
- Choisir la bonne structure selon la situation (annuler : pile ; file d'attente : file ; recherche par nom : dictionnaire).`,
      cartes: [
        { q: "Qu'est-ce que l'interface d'une structure de données ?", r: "La liste des opérations qu'on peut faire avec elle et leur effet, sans dire comment elles sont programmées." },
        { q: "Qu'est-ce que l'implémentation ?", r: "La façon dont les données sont rangées en mémoire et dont les opérations sont programmées." },
        { q: "Que signifie LIFO ?", r: "Last In, First Out : le dernier entré est le premier sorti. C'est le principe de la pile." },
        { q: "Que signifie FIFO ?", r: "First In, First Out : le premier entré est le premier sorti. C'est le principe de la file." },
        { q: "Opérations d'une pile ?", r: "Empiler, dépiler, lire le sommet, tester si elle est vide." },
        { q: "Opérations d'une file ?", r: "Enfiler, défiler, tester si elle est vide." },
        { q: "Empiler et dépiler avec une liste Python ?", r: "p.append(x) pour empiler, p.pop() pour dépiler, p[-1] pour lire le sommet." },
        { q: "Pourquoi f.pop(0) est-il lent ?", r: "Tous les éléments suivants se décalent d'une case : le coût est proportionnel à la longueur de la liste." },
        { q: "Qu'est-ce qu'une liste chaînée ?", r: "Une suite de maillons contenant chacun une valeur et un lien vers le maillon suivant." },
        { q: "Coût d'accès au k-ième élément d'une liste chaînée ?", r: "Linéaire : il faut parcourir les k premiers maillons." },
        { q: "Exemples d'usage d'une pile ?", r: "Bouton annuler, page précédente du navigateur, pile des appels de fonctions, vérification des parenthèses." },
        { q: "Exemples d'usage d'une file ?", r: "File d'impression, requêtes traitées dans l'ordre d'arrivée, parcours en largeur." },
        { q: "Qu'est-ce qu'un dictionnaire ?", r: "Une structure qui associe des clés à des valeurs, avec un accès par la clé : d['kiwi']." },
        { q: "Avantage du dictionnaire pour chercher ?", r: "La recherche d'une clé est en moyenne en temps constant, contre un temps linéaire dans une liste." },
      ],
      quiz: [
        { q: "Une pile suit le principe :", choix: ["le plus petit élément sort d'abord", "FIFO, premier entré premier sorti", "LIFO, dernier entré premier sorti", "l'accès direct à chaque élément"], bonne: 2, expl: "La pile sort d'abord le dernier élément ajouté, comme une pile d'assiettes. FIFO, c'est la file.", niv: 1 },
        { q: "p = []; p.append(4); p.append(7); p.append(2); p.pop(); print(p[-1]). Qu'affiche ce code ?", choix: ["7", "2", "4", "[4, 7]"], bonne: 0, expl: "pop() retire 2 ; il reste [4, 7] et p[-1] est le sommet, 7.", niv: 2 },
        { q: "f = [3, 8, 5]; f.append(1); f.pop(0); print(f). Qu'affiche ce code ?", choix: ["[1, 3, 8, 5]", "[3, 8, 5]", "[3, 8, 5, 1]", "[8, 5, 1]"], bonne: 3, expl: "append ajoute 1 à la fin, puis pop(0) retire le premier élément, 3.", niv: 2 },
        { q: "L'interface d'une structure de données décrit :", choix: ["le rangement des données en mémoire", "les opérations disponibles et leur effet", "un langage pour la programmer", "le nombre maximal d'éléments stockés"], bonne: 1, expl: "L'interface dit quoi faire ; le rangement en mémoire relève de l'implémentation.", niv: 1 },
        { q: "Pour programmer le bouton « annuler » d'un éditeur de texte, la structure adaptée est :", choix: ["une file", "une pile", "un dictionnaire", "un arbre binaire"], bonne: 1, expl: "On annule d'abord la dernière action faite : dernier entré, premier sorti.", niv: 2 },
        { q: "Avec une liste Python de n éléments, f.pop(0) a une complexité :", choix: ["quadratique, en O(n²)", "constante, en O(1)", "logarithmique, en O(log n)", "linéaire, en O(n)"], bonne: 3, expl: "Les n - 1 éléments restants se décalent d'une case. p.pop() en fin de liste, lui, est en temps constant.", niv: 3 },
        { q: "Dans un dictionnaire Python, on accède à une valeur grâce à :", choix: ["sa clé", "son indice numérique", "sa position dans la file", "son maillon suivant"], bonne: 0, expl: "d['kiwi'] renvoie la valeur associée à la clé 'kiwi'.", niv: 1 },
        { q: "d = {'a': 3, 'b': 5}; d['c'] = 1; d['a'] = 0; print(sum(d.values())). Qu'affiche ce code ?", choix: ["8", "9", "6", "11"], bonne: 2, expl: "d devient {'a': 0, 'b': 5, 'c': 1} : 0 + 5 + 1 = 6. Le piège 9 oublie que 'a' a été modifié.", niv: 2 },
        { q: "Dans une liste chaînée, accéder au k-ième élément demande :", choix: ["de recopier la liste dans une pile", "un seul accès direct en mémoire", "de trier la liste d'abord", "de parcourir les k premiers maillons"], bonne: 3, expl: "Chaque maillon ne connaît que le suivant : il faut avancer maillon par maillon.", niv: 3 },
        { q: "Des documents arrivent sur une imprimante partagée et sont imprimés dans l'ordre d'arrivée. Structure :", choix: ["une file", "une pile", "un arbre", "un ensemble"], bonne: 0, expl: "Premier arrivé, premier imprimé : FIFO, c'est une file.", niv: 2 },
        { q: "L'opération qui lit le sommet d'une pile sans le retirer s'appelle :", choix: ["enfiler", "dépiler", "sommet", "défiler"], bonne: 2, expl: "Dépiler retire l'élément ; enfiler et défiler sont des opérations de file.", niv: 1 },
        { q: "Laquelle de ces opérations ne fait **pas** partie de l'interface classique d'une pile ?", choix: ["empiler un élément", "lire l'élément du milieu", "dépiler le sommet", "tester si elle est vide"], bonne: 1, expl: "Une pile ne donne accès qu'à son sommet.", niv: 3 },
      ] },
    { chapitre: 'nsi-2',
      fiche: `## La programmation orientée objet

### Classe, objet, attribut, méthode
- Une **classe** est un **modèle** qui décrit des objets : quelles données ils contiennent et ce qu'ils savent faire. Exemple : la classe Compte.
- Un **objet** (ou **instance**) est un exemplaire construit à partir de la classe : le compte de Léa, le compte de Sami.
- Créer un objet s'appelle **instancier** la classe : c = Compte(100).
- Un **attribut** est une **donnée** propre à chaque objet : c.solde.
- Une **méthode** est une **fonction définie dans la classe**, qui agit sur l'objet : c.deposer(50).

### Écrire une classe en Python
- class Compte: puis, indentée, la méthode def __init__(self, solde): self.solde = solde.
- **__init__** est le **constructeur** : il est appelé **automatiquement** quand on crée un objet. Il initialise les attributs.
- **self** désigne **l'objet lui-même**. Il est le premier paramètre de chaque méthode, mais on ne l'écrit pas à l'appel : c.deposer(50) appelle deposer(c, 50).
- Méthode : def deposer(self, montant): self.solde = self.solde + montant.
- Une méthode peut renvoyer une valeur : def aire(self): return self.l * self.h.

### Exemple complet à dérouler
- class Point: avec def __init__(self, x, y): self.x = x ; self.y = y.
- a = Point(3, 4) crée un objet avec a.x = 3 et a.y = 4.
- a.x = a.x + 2 modifie l'attribut : a.x vaut 5.

### Objets et références
- Une variable contient une **référence** vers l'objet, pas une copie. Après b = a, a et b désignent **le même objet** : modifier b.x modifie aussi a.x.
- Deux objets créés séparément avec les mêmes valeurs sont **différents** : Point(1, 2) == Point(1, 2) vaut False si la classe ne redéfinit pas l'égalité.

### Encapsulation
- L'**encapsulation** consiste à **cacher** les détails internes d'un objet et à n'offrir que des méthodes pour l'utiliser. Exemple : une classe Pile qui garde sa liste interne et ne propose que empiler, depiler et est_vide.
- Avantage : on peut changer l'implémentation sans changer le code de ceux qui utilisent la classe.
- Par convention, un attribut dont le nom commence par un tiret bas (self._contenu) ne doit pas être utilisé hors de la classe.

### La POO pour programmer des structures de données
- Une liste chaînée se programme avec une classe Maillon (attributs valeur et suivant).
- Un arbre binaire se programme avec une classe Noeud (attributs valeur, gauche, droit).
- Une pile ou une file se programme avec une classe qui propose son interface sous forme de méthodes.

### À retenir pour le bac
- Savoir lire et compléter une classe : __init__, self, attributs, méthodes.
- Savoir dérouler un petit programme qui crée des objets et appelle leurs méthodes.
- Piège : oublier self dans la définition d'une méthode, ou l'écrire à l'appel.
- Piège : b = a ne copie pas l'objet, les deux noms désignent le même objet.
- Le vocabulaire attendu : classe, instance, attribut, méthode, constructeur, encapsulation.`,
      cartes: [
        { q: "Qu'est-ce qu'une classe ?", r: "Un modèle qui décrit des objets : leurs attributs (données) et leurs méthodes (actions)." },
        { q: "Qu'est-ce qu'un objet ou une instance ?", r: "Un exemplaire construit à partir d'une classe, avec ses propres valeurs d'attributs." },
        { q: "Qu'est-ce qu'un attribut ?", r: "Une donnée propre à un objet, par exemple self.solde." },
        { q: "Qu'est-ce qu'une méthode ?", r: "Une fonction définie dans une classe, qui agit sur l'objet." },
        { q: "Rôle de __init__ ?", r: "C'est le constructeur : il est appelé automatiquement à la création d'un objet et initialise ses attributs." },
        { q: "Que désigne self ?", r: "L'objet lui-même. C'est le premier paramètre de chaque méthode ; on ne l'écrit pas à l'appel." },
        { q: "Comment crée-t-on un objet ?", r: "En appelant la classe comme une fonction : c = Compte(100). On dit qu'on instancie la classe." },
        { q: "Comment appelle-t-on une méthode ?", r: "Avec un point : c.deposer(50), qui exécute deposer(c, 50)." },
        { q: "Que fait b = a avec des objets ?", r: "b désigne le même objet que a : modifier b.x modifie aussi a.x." },
        { q: "Qu'est-ce que l'encapsulation ?", r: "Cacher les détails internes d'un objet et n'offrir que des méthodes pour l'utiliser." },
        { q: "Avantage de l'encapsulation ?", r: "On peut changer l'implémentation sans changer le code qui utilise la classe." },
        { q: "Classe pour un arbre binaire ?", r: "Une classe Noeud avec les attributs valeur, gauche et droit." },
        { q: "Classe pour une liste chaînée ?", r: "Une classe Maillon avec les attributs valeur et suivant." },
      ],
      quiz: [
        { q: "En programmation orientée objet, une classe est :", choix: ["un modèle qui décrit des objets", "un objet déjà créé en mémoire", "une variable qui contient un entier", "une fonction qui trie une liste"], bonne: 0, expl: "La classe est le modèle ; les objets sont les exemplaires construits à partir d'elle.", niv: 1 },
        { q: "class P: def __init__(self, x): self.x = x. Puis a = P(3); a.x = a.x + 2; print(a.x). Qu'affiche ce code ?", choix: ["une erreur", "3", "2", "5"], bonne: 3, expl: "a.x vaut 3 à la création, puis 3 + 2 = 5.", niv: 2 },
        { q: "Dans def __init__(self, nom), le paramètre self désigne :", choix: ["la classe elle-même", "l'objet en cours de création", "le premier attribut", "le module importé"], bonne: 1, expl: "self est l'objet sur lequel la méthode agit, ici celui qu'on construit.", niv: 2 },
        { q: "Un attribut est :", choix: ["une classe qui en contient d'autres", "une action que l'objet sait faire", "une donnée propre à un objet", "un module externe importé"], bonne: 2, expl: "Une action que l'objet sait faire est une méthode.", niv: 1 },
        { q: "c est un objet de la classe Chien, qui a une méthode aboyer(self). Pour l'appeler, on écrit :", choix: ["c.aboyer()", "aboyer(Chien)", "Chien.c.aboyer", "c.aboyer(self)"], bonne: 0, expl: "On n'écrit pas self à l'appel : Python passe c automatiquement.", niv: 2 },
        { q: "a = P(1); b = a; b.x = 9; print(a.x). Qu'affiche ce code, avec la classe P qui stocke x dans self.x ?", choix: ["une erreur", "1", "9", "0"], bonne: 2, expl: "b = a ne copie pas l'objet : a et b désignent le même objet, donc a.x vaut 9.", niv: 3 },
        { q: "Une méthode est :", choix: ["une copie d'une classe", "une valeur stockée dans un objet", "un objet créé par une fonction", "une fonction définie dans une classe"], bonne: 3, expl: "Une valeur stockée dans un objet est un attribut.", niv: 1 },
        { q: "a = P(4); b = P(4). La classe P ne redéfinit pas l'égalité. Que vaut a == b ?", choix: ["True", "False", "4", "une erreur"], bonne: 1, expl: "Ce sont deux objets distincts en mémoire ; sans redéfinition, == compare les objets eux-mêmes.", niv: 2 },
        { q: "Une classe Pile cache sa liste interne et ne propose que empiler et depiler. C'est le principe :", choix: ["d'héritage", "d'encapsulation", "de récursivité", "de mémoïsation"], bonne: 1, expl: "Cacher l'intérieur et n'offrir qu'une interface de méthodes, c'est l'encapsulation.", niv: 3 },
        { q: "La méthode __init__ est appelée :", choix: ["à la fin du programme", "seulement quand on affiche l'objet", "à chaque appel d'une autre méthode", "automatiquement à la création d'un objet"], bonne: 3, expl: "C'est le constructeur : c = Compte(100) appelle __init__(c, 100).", niv: 2 },
        { q: "Créer un objet à partir d'une classe s'appelle :", choix: ["instancier", "hériter", "déclarer", "importer"], bonne: 0, expl: "L'objet créé est une instance de la classe.", niv: 1 },
        { q: "class R: __init__ fixe self.l = l et self.h = h ; def aire(self): return self.l * self.h. Que renvoie R(3, 4).aire() ?", choix: ["34", "7", "12", "une erreur, self manque"], bonne: 2, expl: "self est passé automatiquement : 3 × 4 = 12.", niv: 3 },
      ] },
    { chapitre: 'nsi-3',
      fiche: `## Les arbres et les arbres binaires de recherche

### Le vocabulaire
- Un **arbre** est une structure **hiérarchique** : des **nœuds** reliés par des **arêtes**, avec un nœud de départ, la **racine**.
- Chaque nœud peut avoir des **enfants** ; un nœud sans enfant est une **feuille**.
- Exemples : l'arborescence des dossiers d'un ordinateur, un arbre généalogique, la structure d'une page HTML.
- Un **arbre binaire** : chaque nœud a **au plus deux enfants**, un **sous-arbre gauche** et un **sous-arbre droit** (qui peuvent être vides).
- La **taille** est le **nombre de nœuds**. La **hauteur** est le nombre de nœuds de la plus longue branche, de la racine à une feuille. Attention : selon les sujets, un arbre réduit à sa racine a une hauteur de 1 ou de 0. Toujours lire la convention de l'énoncé.
- Un arbre binaire de hauteur h (racine seule = 1) a **au plus 2^h - 1 nœuds**.

### Programmer un arbre binaire
- Avec une classe : class Noeud: avec def __init__(self, v, g=None, d=None): self.v = v ; self.g = g ; self.d = d.
- Les fonctions sur les arbres sont souvent **récursives** : taille(a) = 0 si a est vide, sinon 1 + taille(a.g) + taille(a.d).
- Hauteur : 0 si vide, sinon 1 + max(hauteur(a.g), hauteur(a.d)).

### Les parcours
- **Préfixe** : le nœud, puis le sous-arbre gauche, puis le sous-arbre droit.
- **Infixe** : le sous-arbre gauche, puis le nœud, puis le sous-arbre droit.
- **Suffixe** (ou postfixe) : le sous-arbre gauche, puis le droit, puis le nœud.
- **En largeur** : niveau par niveau, de gauche à droite. Il utilise une **file**.
- Exemple : racine 5 ; à gauche 3, qui a pour enfants 1 et 4 ; à droite 8. Préfixe : 5, 3, 1, 4, 8. Infixe : 1, 3, 4, 5, 8. Suffixe : 1, 4, 3, 8, 5. Largeur : 5, 3, 8, 1, 4.

### L'arbre binaire de recherche (ABR)
- Dans un **ABR**, pour chaque nœud : toutes les clés du **sous-arbre gauche** sont **inférieures** à sa clé, et toutes celles du **sous-arbre droit** sont **supérieures**.
- **Rechercher** une clé : on compare à la racine ; si elle est plus petite on descend à gauche, sinon à droite. On s'arrête quand on la trouve ou qu'on tombe sur un arbre vide.
- **Insérer** : on descend de la même façon et on place la nouvelle clé comme **feuille**.
- Le **parcours infixe** d'un ABR donne les clés **dans l'ordre croissant**.
- **Coût** : la recherche suit une seule branche, donc le nombre de comparaisons est au plus la **hauteur**. Si l'arbre est **équilibré**, la hauteur est proche de **log2(n)** : très rapide. Si on insère des clés déjà triées, l'arbre devient un « peigne » de hauteur n : la recherche devient aussi lente qu'une liste.

### À retenir pour le bac
- Calculer taille et hauteur en respectant la convention de l'énoncé.
- Donner les parcours préfixe, infixe, suffixe et en largeur d'un arbre dessiné.
- Insérer une suite de clés dans un ABR et dessiner le résultat.
- Écrire les fonctions récursives taille, hauteur et recherche.
- Piège : un ABR rempli avec des clés triées est déséquilibré.`,
      cartes: [
        { q: "Qu'est-ce qu'une feuille ?", r: "Un nœud qui n'a aucun enfant." },
        { q: "Qu'est-ce qu'un arbre binaire ?", r: "Un arbre où chaque nœud a au plus deux enfants : un sous-arbre gauche et un sous-arbre droit." },
        { q: "Qu'est-ce que la taille d'un arbre ?", r: "Son nombre de nœuds." },
        { q: "Qu'est-ce que la hauteur d'un arbre ?", r: "Le nombre de nœuds de la plus longue branche, de la racine à une feuille (convention de l'énoncé à vérifier)." },
        { q: "Nombre maximal de nœuds pour une hauteur h ?", r: "2^h - 1 nœuds, si la racine seule a une hauteur de 1." },
        { q: "Parcours préfixe ?", r: "Le nœud, puis le sous-arbre gauche, puis le sous-arbre droit." },
        { q: "Parcours infixe ?", r: "Le sous-arbre gauche, puis le nœud, puis le sous-arbre droit." },
        { q: "Parcours suffixe ?", r: "Le sous-arbre gauche, puis le sous-arbre droit, puis le nœud." },
        { q: "Quelle structure utilise le parcours en largeur ?", r: "Une file : on visite les nœuds niveau par niveau." },
        { q: "Propriété d'un arbre binaire de recherche ?", r: "Pour chaque nœud, les clés à gauche sont plus petites et les clés à droite plus grandes." },
        { q: "Que donne le parcours infixe d'un ABR ?", r: "Les clés dans l'ordre croissant." },
        { q: "Coût d'une recherche dans un ABR équilibré ?", r: "De l'ordre de log2(n) comparaisons, car on suit une seule branche." },
        { q: "Fonction récursive taille ?", r: "taille(a) = 0 si a est vide, sinon 1 + taille(a.g) + taille(a.d)." },
        { q: "Pourquoi un ABR peut-il devenir lent ?", r: "Si on insère des clés triées, il devient un peigne de hauteur n : la recherche est alors linéaire." },
      ],
      quiz: [
        { q: "Dans un arbre binaire, un nœud sans enfant s'appelle :", choix: ["une arête", "la racine", "un sous-arbre", "une feuille"], bonne: 3, expl: "La racine est le nœud de départ ; une feuille n'a aucun enfant.", niv: 1 },
        { q: "Arbre : racine 5 ; à gauche 3, d'enfants 1 et 4 ; à droite 8. Quel est son parcours infixe ?", choix: ["5, 3, 1, 4, 8", "1, 3, 4, 5, 8", "1, 4, 3, 8, 5", "5, 3, 8, 1, 4"], bonne: 1, expl: "Gauche, nœud, droite : 1, 3, 4, puis 5, puis 8. C'est un ABR, d'où l'ordre croissant.", niv: 2 },
        { q: "Même arbre : racine 5 ; à gauche 3, d'enfants 1 et 4 ; à droite 8. Quel est son parcours préfixe ?", choix: ["5, 3, 1, 4, 8", "1, 3, 4, 5, 8", "1, 4, 3, 8, 5", "5, 3, 8, 1, 4"], bonne: 0, expl: "Nœud d'abord : 5, puis le sous-arbre gauche 3, 1, 4, puis 8. 5, 3, 8, 1, 4 est le parcours en largeur.", niv: 2 },
        { q: "Dans un arbre binaire de recherche, les clés du sous-arbre gauche d'un nœud sont :", choix: ["égales à la clé de la racine", "supérieures à la clé du nœud", "inférieures à la clé du nœud", "rangées dans un ordre quelconque"], bonne: 2, expl: "Plus petites à gauche, plus grandes à droite, pour chaque nœud.", niv: 1 },
        { q: "On insère dans un ABR vide, dans cet ordre : 7, 3, 9, 1. Où se place 1 ?", choix: ["à droite de 7", "à droite de 3", "à gauche de 9", "à gauche de 3"], bonne: 3, expl: "1 < 7 : on va à gauche vers 3 ; 1 < 3 : on va à gauche de 3.", niv: 2 },
        { q: "On insère 1, 2, 3, 4, 5 dans cet ordre dans un ABR vide. Sa hauteur, avec racine seule = 1, vaut :", choix: ["5", "3", "1", "2"], bonne: 0, expl: "Chaque clé va à droite de la précédente : l'arbre est un peigne de 5 nœuds. Le piège 3 correspond à un arbre équilibré.", niv: 3 },
        { q: "La taille d'un arbre est :", choix: ["la longueur de sa plus longue branche", "son nombre de feuilles", "son nombre de nœuds", "le nombre d'enfants de la racine"], bonne: 2, expl: "La longueur de la plus longue branche, c'est la hauteur.", niv: 1 },
        { q: "Le parcours en largeur d'un arbre utilise naturellement :", choix: ["une pile", "une file", "un dictionnaire", "un tri"], bonne: 1, expl: "On enfile les enfants et on visite dans l'ordre d'arrivée : niveau par niveau.", niv: 2 },
        { q: "Rechercher une clé dans un ABR équilibré de n nœuds demande de l'ordre de :", choix: ["log2(n) comparaisons", "n comparaisons", "n² comparaisons", "une seule comparaison"], bonne: 0, expl: "On suit une seule branche, de hauteur proche de log2(n). n comparaisons, c'est le cas d'un arbre en peigne.", niv: 3 },
        { q: "Un arbre binaire de hauteur 3 (racine seule = 1) a au plus combien de nœuds ?", choix: ["8", "7", "6", "3"], bonne: 1, expl: "2^3 - 1 = 7 : 1 racine, 2 enfants, 4 petits-enfants.", niv: 2 },
        { q: "Le parcours qui visite le sous-arbre gauche, puis le droit, puis le nœud est le parcours :", choix: ["en largeur", "préfixe", "infixe", "suffixe"], bonne: 3, expl: "Le nœud vient en dernier : suffixe (ou postfixe).", niv: 1 },
        { q: "Pourquoi le parcours infixe d'un ABR est-il utile ?", choix: ["Il visite les feuilles en premier", "Il donne la hauteur de l'arbre", "Il donne toujours les clés triées", "Il rééquilibre l'arbre"], bonne: 2, expl: "Gauche (plus petit), nœud, droite (plus grand) : l'ordre croissant, quelle que soit la forme de l'ABR.", niv: 3 },
      ] },
    { chapitre: 'nsi-4',
      fiche: `## Les graphes et leurs parcours

### Le vocabulaire
- Un **graphe** est un ensemble de **sommets** reliés par des **arêtes**. Exemples : un réseau routier (villes et routes), un réseau social (personnes et amitiés), un réseau informatique (routeurs et câbles).
- **Non orienté** : une arête relie deux sommets dans les deux sens (l'amitié). **Orienté** : chaque arc a un sens (« suivre » quelqu'un sur un réseau social, une rue à sens unique).
- **Pondéré** : chaque arête porte une valeur, un **poids** (distance, temps, coût).
- Deux sommets reliés sont **adjacents** (voisins). Le **degré** d'un sommet est le nombre d'arêtes qui le touchent.
- Un **chemin** est une suite de sommets reliés par des arêtes. Un **cycle** est un chemin qui revient à son point de départ.
- Un graphe est **connexe** si on peut aller de n'importe quel sommet à n'importe quel autre.
- Un graphe non orienté où chaque sommet est relié à tous les autres est **complet** : avec n sommets, il a n × (n - 1) / 2 arêtes.

### Représenter un graphe
- **Matrice d'adjacence** : un tableau M de n lignes et n colonnes, où M[i][j] vaut 1 s'il y a une arête de i vers j, 0 sinon. Pour un graphe non orienté, la matrice est **symétrique**. Elle prend n² cases, même s'il y a peu d'arêtes.
- **Liste d'adjacence** : pour chaque sommet, la liste de ses voisins. En Python, un dictionnaire : g = {'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}. Elle prend **peu de mémoire** quand il y a peu d'arêtes.

### Le parcours en largeur
- On part d'un sommet, on visite **tous ses voisins**, puis les voisins des voisins, et ainsi de suite : on avance **par couches**.
- Il utilise une **file** et un ensemble des sommets déjà **visités** (pour ne pas tourner en rond).
- Dans un graphe **non pondéré**, il donne le **plus court chemin en nombre d'arêtes**.
- Exemple avec g ci-dessus, voisins pris dans l'ordre des listes : A, B, C, D.

### Le parcours en profondeur
- On part d'un sommet et on va **le plus loin possible** le long d'un chemin, puis on **revient en arrière** pour explorer les autres branches.
- Il s'écrit avec une **pile**, ou plus simplement en **récursif**.
- Exemple avec g ci-dessus : A, B, D, puis retour en arrière, puis C.
- Il sert à savoir si un sommet est **accessible**, à trouver un chemin, ou à **détecter un cycle** (dans un graphe orienté, on retombe sur un sommet en cours de visite).

### Pourquoi marquer les sommets visités ?
- S'il y a un cycle, un parcours sans marquage tournerait **indéfiniment**.
- Le marquage garantit que chaque sommet est visité **une seule fois**.

### À retenir pour le bac
- Passer d'un dessin à une matrice ou à une liste d'adjacence, et inversement.
- Dérouler un parcours en largeur (file) et en profondeur (pile ou récursion) en suivant l'ordre de l'énoncé.
- Largeur : plus court chemin en nombre d'arêtes dans un graphe non pondéré.
- Piège : oublier de marquer les sommets visités.
- Choisir la liste d'adjacence pour un grand graphe avec peu d'arêtes.`,
      cartes: [
        { q: "Qu'est-ce qu'un graphe ?", r: "Un ensemble de sommets reliés par des arêtes." },
        { q: "Graphe orienté ou non orienté ?", r: "Orienté : chaque arc a un sens. Non orienté : chaque arête se parcourt dans les deux sens." },
        { q: "Qu'est-ce qu'un graphe pondéré ?", r: "Un graphe dont chaque arête porte une valeur : distance, temps, coût." },
        { q: "Qu'est-ce que le degré d'un sommet ?", r: "Le nombre d'arêtes qui le touchent." },
        { q: "Qu'est-ce qu'un cycle ?", r: "Un chemin qui revient à son sommet de départ." },
        { q: "Qu'est-ce qu'un graphe connexe ?", r: "Un graphe où l'on peut aller de n'importe quel sommet à n'importe quel autre." },
        { q: "Nombre d'arêtes d'un graphe complet à n sommets ?", r: "n × (n - 1) / 2." },
        { q: "Qu'est-ce qu'une matrice d'adjacence ?", r: "Un tableau n × n où M[i][j] vaut 1 s'il y a une arête de i vers j, 0 sinon." },
        { q: "Qu'est-ce qu'une liste d'adjacence ?", r: "Pour chaque sommet, la liste de ses voisins ; en Python, un dictionnaire de listes." },
        { q: "Structure utilisée par le parcours en largeur ?", r: "Une file, plus un ensemble des sommets déjà visités." },
        { q: "Structure utilisée par le parcours en profondeur ?", r: "Une pile, ou la récursivité." },
        { q: "À quoi sert le parcours en largeur ?", r: "À trouver le plus court chemin en nombre d'arêtes dans un graphe non pondéré." },
        { q: "Pourquoi marquer les sommets visités ?", r: "Pour ne visiter chaque sommet qu'une fois et ne pas tourner indéfiniment s'il y a un cycle." },
        { q: "Matrice ou liste d'adjacence pour un grand graphe peu dense ?", r: "La liste : elle prend beaucoup moins de mémoire que les n² cases de la matrice." },
      ],
      quiz: [
        { q: "Un graphe dont les arêtes ont un sens est dit :", choix: ["pondéré", "orienté", "connexe", "complet"], bonne: 1, expl: "Pondéré signifie que les arêtes portent une valeur, pas un sens.", niv: 1 },
        { q: "g = {'A': ['B','C'], 'B': ['D'], 'C': ['D'], 'D': []}. Parcours en largeur depuis A, voisins dans l'ordre des listes ?", choix: ["A, C, B, D", "A, B, D, C", "A, B, C, D", "D, B, C, A"], bonne: 2, expl: "On visite d'abord tous les voisins de A (B puis C), puis D. A, B, D, C est le parcours en profondeur.", niv: 2 },
        { q: "Même graphe g, voisins dans l'ordre des listes. Parcours en profondeur depuis A ?", choix: ["A, D, B, C", "A, B, C, D", "A, C, D, B", "A, B, D, C"], bonne: 3, expl: "De A on va à B, puis à D, au bout du chemin ; on revient en arrière et on visite C.", niv: 2 },
        { q: "Dans la matrice d'adjacence M d'un graphe, M[i][j] vaut 1 quand :", choix: ["il existe une arête de i vers j", "i et j ont le même degré", "i est relié à tous les sommets", "j est le sommet de départ"], bonne: 0, expl: "Chaque case dit s'il y a une arête entre deux sommets.", niv: 1 },
        { q: "Un graphe non orienté a 4 sommets, chacun relié aux 3 autres. Combien a-t-il d'arêtes ?", choix: ["4", "12", "6", "3"], bonne: 2, expl: "4 × 3 / 2 = 6. Le piège 12 compte chaque arête deux fois.", niv: 2 },
        { q: "Pour trouver le plus court chemin en nombre d'arêtes dans un graphe non pondéré, on utilise :", choix: ["un parcours en largeur", "un parcours en profondeur", "un tri fusion", "l'algorithme de Boyer-Moore"], bonne: 0, expl: "La largeur avance par couches : on atteint chaque sommet par le moins d'arêtes possible. La profondeur ne le garantit pas.", niv: 3 },
        { q: "Le parcours en profondeur s'écrit facilement avec :", choix: ["une file d'attente", "une pile ou la récursivité", "un arbre binaire de recherche", "un tri des sommets"], bonne: 1, expl: "On revient en arrière au dernier sommet laissé : c'est le principe de la pile.", niv: 1 },
        { q: "Dans un graphe non orienté, le degré d'un sommet est :", choix: ["le nombre de sommets du graphe", "sa distance au premier sommet", "le poids de sa plus longue arête", "le nombre d'arêtes qui le touchent"], bonne: 3, expl: "Un sommet relié à trois voisins a un degré de 3.", niv: 2 },
        { q: "Dans un graphe orienté, un parcours en profondeur retombe sur un sommet en cours de visite. Cela révèle :", choix: ["un graphe pondéré", "un graphe non connexe", "un arbre binaire", "un cycle"], bonne: 3, expl: "On est revenu à un sommet du chemin en cours : il existe un chemin qui boucle.", niv: 3 },
        { q: "Réseau social : chaque personne est un sommet et chaque amitié réciproque une arête. Ce graphe est :", choix: ["orienté", "non orienté", "pondéré", "complet"], bonne: 1, expl: "Une amitié réciproque n'a pas de sens. Rien n'indique que tout le monde est ami avec tout le monde.", niv: 2 },
        { q: "Un graphe dont les arêtes portent une valeur, comme une distance, est dit :", choix: ["pondéré", "orienté", "complet", "connexe"], bonne: 0, expl: "La valeur portée par l'arête s'appelle un poids.", niv: 1 },
        { q: "Pour un graphe de 1 000 sommets avec peu d'arêtes, on préfère la liste d'adjacence car :", choix: ["elle interdit les cycles", "elle donne toujours un parcours trié", "elle prend beaucoup moins de mémoire", "elle accélère le tri des sommets"], bonne: 2, expl: "La matrice aurait un million de cases, presque toutes à 0.", niv: 3 },
      ] },
    { chapitre: 'nsi-5',
      fiche: `## Le modèle relationnel

### Pourquoi une base de données ?
- Un simple fichier ou un tableur devient vite ingérable quand les données sont nombreuses, partagées par plusieurs personnes et liées entre elles.
- Une **base de données relationnelle** range les données dans des **tables** reliées entre elles. Elle est gérée par un **SGBD** (système de gestion de bases de données).

### Le vocabulaire
- Une **relation** est une **table**. Exemple : la table Livre.
- Un **attribut** est une **colonne** : titre, annee. Chaque attribut a un **domaine**, l'ensemble des valeurs permises (entier, texte, date).
- Un **n-uplet** (ou **enregistrement**) est une **ligne** : ('L12', 'Les Misérables', 1862).
- Le **schéma** d'une relation donne son nom et ses attributs : Livre(isbn, titre, annee, id_auteur).
- Le **schéma relationnel** d'une base est l'ensemble des schémas de ses tables.

### Les clés
- La **clé primaire** est un attribut (ou un groupe d'attributs) qui **identifie chaque ligne de façon unique**. Deux lignes ne peuvent pas avoir la même clé primaire. Exemple : isbn pour un livre, un identifiant pour un élève (le nom ne convient pas, à cause des homonymes). Dans un schéma, on la souligne.
- Une **clé étrangère** est un attribut qui **fait référence à la clé primaire d'une autre table**. Exemple : id_auteur dans Livre renvoie à id dans Auteur. On la note souvent avec un dièse : #id_auteur.
- Grâce à la clé étrangère, un auteur peut avoir **plusieurs livres**, sans recopier ses informations dans chaque ligne.

### Les contraintes d'intégrité
- **Contrainte de domaine** : chaque valeur respecte le type de l'attribut (pas de texte dans une colonne d'entiers).
- **Contrainte d'entité** (ou de clé) : la clé primaire est **unique** et toujours renseignée.
- **Contrainte de référence** : une clé étrangère doit correspondre à une clé primaire **qui existe** dans l'autre table. Exemple : on ne peut pas enregistrer un emprunt pour un livre absent de la table Livre, ni supprimer un auteur qui a encore des livres.
- Le SGBD **refuse** toute opération qui violerait une contrainte : les données restent **cohérentes**.

### Éviter la redondance
- La **redondance**, c'est recopier la même information à plusieurs endroits (l'adresse d'un client dans chaque commande).
- Elle gaspille de la place et crée des **incohérences** : si le client déménage, il faut tout modifier, et un oubli laisse deux adresses différentes.
- Solution : une table Client avec l'adresse, et une clé étrangère id_client dans la table Commande.

### Le rôle du SGBD
- **Persistance** : les données sont conservées durablement.
- **Accès concurrents** : plusieurs utilisateurs travaillent en même temps sans s'abîmer les données (pas deux réservations de la même place).
- **Sécurité** : gestion des **droits d'accès** (qui peut lire, qui peut modifier).
- **Efficacité** : recherches rapides, même avec des millions de lignes.

### À retenir pour le bac
- Vocabulaire : relation, attribut, domaine, n-uplet, schéma, clé primaire, clé étrangère.
- Savoir choisir une clé primaire et justifier ce choix.
- Repérer la contrainte violée quand une insertion ou une suppression est refusée.
- Piège : une clé étrangère n'est pas unique dans sa table (un auteur, plusieurs livres).
- Expliquer pourquoi on découpe les données en plusieurs tables (éviter la redondance).`,
      cartes: [
        { q: "Qu'est-ce qu'une relation ?", r: "Une table de la base de données." },
        { q: "Qu'est-ce qu'un attribut ?", r: "Une colonne de la table, avec un nom et un domaine." },
        { q: "Qu'est-ce que le domaine d'un attribut ?", r: "L'ensemble des valeurs qu'il peut prendre : entier, texte, date…" },
        { q: "Qu'est-ce qu'un n-uplet ?", r: "Une ligne de la table, aussi appelée enregistrement." },
        { q: "Qu'est-ce qu'un schéma relationnel ?", r: "L'ensemble des schémas des tables : leur nom et leurs attributs, avec les clés." },
        { q: "Qu'est-ce qu'une clé primaire ?", r: "Un attribut (ou un groupe d'attributs) qui identifie chaque ligne de façon unique." },
        { q: "Qu'est-ce qu'une clé étrangère ?", r: "Un attribut qui fait référence à la clé primaire d'une autre table." },
        { q: "Contrainte d'entité ?", r: "La clé primaire est unique et toujours renseignée." },
        { q: "Contrainte de référence ?", r: "Une clé étrangère doit correspondre à une clé primaire existante dans l'autre table." },
        { q: "Contrainte de domaine ?", r: "Chaque valeur respecte le type de son attribut." },
        { q: "Qu'est-ce que la redondance ?", r: "Recopier la même information à plusieurs endroits, ce qui crée des risques d'incohérence." },
        { q: "Qu'est-ce qu'un SGBD ?", r: "Un logiciel qui gère une base de données : stockage, accès concurrents, droits, recherches." },
        { q: "Pourquoi le nom n'est-il pas une bonne clé primaire ?", r: "Deux personnes peuvent avoir le même nom : il n'identifie pas une ligne de façon unique." },
      ],
      quiz: [
        { q: "Dans le modèle relationnel, une ligne d'une table s'appelle :", choix: ["un n-uplet", "un attribut", "un domaine", "un schéma"], bonne: 0, expl: "Un n-uplet (ou enregistrement) est une ligne ; un attribut est une colonne.", niv: 1 },
        { q: "Table Eleve(id, nom, prenom, classe). Quel attribut choisir comme clé primaire ?", choix: ["classe", "nom", "id", "prenom"], bonne: 2, expl: "Deux élèves peuvent porter le même nom ou être dans la même classe ; l'identifiant est unique.", niv: 2 },
        { q: "Table Emprunt(id_emprunt, id_livre, date), où id_livre renvoie à la table Livre. Pour Emprunt, id_livre est :", choix: ["une clé primaire", "une clé étrangère", "un domaine", "un n-uplet"], bonne: 1, expl: "Il fait référence à la clé primaire d'une autre table.", niv: 2 },
        { q: "Le domaine d'un attribut est :", choix: ["la clé qui identifie la ligne", "le nom de la table qui le contient", "le nombre de lignes de la table", "l'ensemble des valeurs qu'il peut prendre"], bonne: 3, expl: "Par exemple, entier positif pour une année, texte pour un titre.", niv: 1 },
        { q: "On veut ajouter un emprunt pour id_livre = 999, absent de la table Livre. Le SGBD refuse. Quelle contrainte est violée ?", choix: ["la contrainte de domaine", "la contrainte de référence", "la contrainte d'entité", "la contrainte de format"], bonne: 1, expl: "La clé étrangère doit renvoyer à un livre qui existe.", niv: 2 },
        { q: "Pourquoi éviter de recopier l'adresse d'un client dans chaque ligne de la table Commande ?", choix: ["Pour éviter la redondance et les incohérences", "Parce qu'une table a au plus trois attributs", "Parce que SQL refuse les longues chaînes", "Pour que les dates restent triées"], bonne: 0, expl: "Si le client déménage, il faudrait tout modifier ; un oubli laisserait deux adresses différentes.", niv: 3 },
        { q: "Un SGBD est :", choix: ["un type de clé primaire", "un langage de programmation objet", "un protocole de routage", "un logiciel qui gère une base de données"], bonne: 3, expl: "Système de gestion de bases de données : il stocke, protège et retrouve les données.", niv: 1 },
        { q: "Deux personnes réservent au même instant la dernière place d'un train. Ce qui évite la double réservation :", choix: ["la clé étrangère du billet", "la contrainte de domaine", "la gestion des accès concurrents", "le schéma relationnel"], bonne: 2, expl: "Le SGBD organise les opérations simultanées pour garder des données cohérentes.", niv: 2 },
        { q: "Une table Eleve contient deux lignes avec le même id, sa clé primaire. Quelle contrainte n'est plus respectée ?", choix: ["la contrainte de domaine", "la contrainte de référence", "la contrainte d'entité", "la contrainte d'ordre"], bonne: 2, expl: "La contrainte d'entité impose une clé primaire unique.", niv: 3 },
        { q: "Livre(isbn, titre, id_auteur) : id_auteur renvoie à la clé primaire de Auteur. Combien de livres un auteur peut-il avoir ?", choix: ["exactement deux", "un seul", "aucun", "plusieurs"], bonne: 3, expl: "Une clé étrangère n'est pas unique : plusieurs lignes de Livre peuvent porter le même id_auteur.", niv: 2 },
        { q: "La clé primaire d'une table :", choix: ["relie la table à une autre table", "identifie chaque ligne de façon unique", "donne le type de chaque attribut", "trie les lignes par ordre alphabétique"], bonne: 1, expl: "Relier la table à une autre, c'est le rôle d'une clé étrangère.", niv: 1 },
        { q: "Lequel de ces services n'est **pas** assuré par un SGBD ?", choix: ["le routage des paquets sur internet", "la persistance des données", "le contrôle des droits d'accès", "la gestion des accès concurrents"], bonne: 0, expl: "Le routage est le travail des routeurs et des protocoles comme RIP ou OSPF.", niv: 3 },
      ] },
    { chapitre: 'nsi-6',
      fiche: `## Le langage SQL

SQL est le langage qui permet d'interroger et de modifier une base de données relationnelle. Les exemples utilisent deux tables : Film(id, titre, annee, duree, id_real) et Realisateur(id, nom).

### Interroger : SELECT
- **SELECT** colonnes **FROM** table ; : choisir les colonnes à afficher. SELECT titre, annee FROM Film ; Le symbole * veut dire toutes les colonnes.
- **WHERE** filtre les lignes avec une condition : SELECT titre FROM Film WHERE annee >= 2020 ;
- Conditions combinées avec **AND**, **OR**, **NOT**. Les textes s'écrivent entre apostrophes : WHERE titre = 'Alma'.
- **ORDER BY** trie le résultat : ORDER BY annee **ASC** (croissant, par défaut) ou **DESC** (décroissant).
- **DISTINCT** supprime les doublons : SELECT DISTINCT annee FROM Film ;

### Les fonctions d'agrégation
- **COUNT(*)** compte les lignes : SELECT COUNT(*) FROM Film WHERE annee = 2021 ;
- **SUM**, **AVG** (moyenne), **MIN**, **MAX** : SELECT AVG(duree) FROM Film ;
- Le résultat est une seule valeur, calculée sur les lignes retenues par WHERE.

### La jointure
- Pour croiser deux tables reliées par une clé étrangère, on fait une **jointure** :
- SELECT titre, nom FROM Film JOIN Realisateur ON Film.id_real = Realisateur.id ;
- La condition **ON** relie la **clé étrangère** à la **clé primaire**. Sans elle, on obtiendrait toutes les combinaisons de lignes, sans aucun sens.
- Quand deux tables ont une colonne du même nom, on précise la table : Film.id, Realisateur.id.
- On peut ajouter un WHERE après la jointure : WHERE nom = 'Varda'.

### Modifier les données
- **INSERT INTO** ajoute une ligne : INSERT INTO Film VALUES (4, 'Dune', 2021, 155, 2) ;
- **UPDATE** modifie des lignes existantes : UPDATE Film SET duree = 150 WHERE id = 4 ;
- **DELETE FROM** supprime des lignes : DELETE FROM Film WHERE annee < 2000 ;
- **Attention** : sans WHERE, UPDATE modifie **toutes** les lignes et DELETE les supprime **toutes**.
- Le SGBD refuse une modification qui viole une contrainte : clé primaire déjà utilisée, clé étrangère qui ne correspond à rien.

### Un exemple à dérouler
- Film contient ('Alma', 2019, 95), ('Brume', 2021, 120), ('Cap', 2021, 88) pour (titre, annee, duree).
- SELECT titre FROM Film WHERE annee = 2021 AND duree > 90 ; renvoie seulement Brume.
- SELECT COUNT(*) FROM Film WHERE annee = 2021 ; renvoie 2.
- SELECT MAX(duree) FROM Film ; renvoie 120.

### À retenir pour le bac
- Écrire une requête SELECT avec WHERE, ORDER BY et une jointure : c'est dans presque tous les sujets de bases de données.
- Lire une requête et donner son résultat sur une petite table.
- Ne pas oublier la condition ON d'une jointure ni le WHERE d'un UPDATE ou d'un DELETE.
- Les textes s'écrivent entre apostrophes, les nombres sans.
- Savoir expliquer pourquoi une insertion est refusée (contrainte d'intégrité).`,
      cartes: [
        { q: "Structure d'une requête d'interrogation ?", r: "SELECT colonnes FROM table WHERE condition ORDER BY colonne ;" },
        { q: "Rôle de WHERE ?", r: "Filtrer les lignes qui respectent une condition." },
        { q: "Trier du plus grand au plus petit ?", r: "ORDER BY colonne DESC (ASC pour l'ordre croissant, par défaut)." },
        { q: "Rôle de DISTINCT ?", r: "Supprimer les doublons du résultat." },
        { q: "Compter les lignes ?", r: "SELECT COUNT(*) FROM table WHERE condition ;" },
        { q: "Fonctions d'agrégation ?", r: "COUNT, SUM, AVG (moyenne), MIN, MAX." },
        { q: "Écrire une jointure ?", r: "SELECT … FROM A JOIN B ON A.cle_etrangere = B.cle_primaire ;" },
        { q: "Ajouter une ligne ?", r: "INSERT INTO table VALUES (valeur1, valeur2, …) ;" },
        { q: "Modifier des lignes ?", r: "UPDATE table SET colonne = valeur WHERE condition ;" },
        { q: "Supprimer des lignes ?", r: "DELETE FROM table WHERE condition ;" },
        { q: "Danger d'un UPDATE sans WHERE ?", r: "Il modifie toutes les lignes de la table." },
        { q: "Comment écrire un texte dans une condition ?", r: "Entre apostrophes : WHERE titre = 'Alma'." },
        { q: "Pourquoi un INSERT peut-il être refusé ?", r: "Il viole une contrainte : clé primaire déjà utilisée, clé étrangère inexistante, mauvais type." },
      ],
      quiz: [
        { q: "En SQL, quel mot clé sert à filtrer les lignes selon une condition ?", choix: ["ORDER BY", "SELECT", "FROM", "WHERE"], bonne: 3, expl: "SELECT choisit les colonnes, FROM la table, ORDER BY trie.", niv: 1 },
        { q: "Film(titre, annee) contient ('Alma', 2019), ('Brume', 2021), ('Cap', 2023). Que renvoie SELECT titre FROM Film WHERE annee > 2020 ; ?", choix: ["Brume et Cap", "Cap", "Alma", "Alma et Brume"], bonne: 0, expl: "2021 et 2023 sont supérieurs à 2020.", niv: 2 },
        { q: "Même table Film de 3 lignes (2019, 2021, 2023). Que renvoie SELECT COUNT(*) FROM Film WHERE annee < 2023 ; ?", choix: ["1", "3", "2", "0"], bonne: 2, expl: "Seules 2019 et 2021 sont strictement inférieures à 2023.", niv: 2 },
        { q: "Pour ajouter une ligne dans une table, on utilise :", choix: ["UPDATE", "INSERT INTO", "SELECT", "ALTER TABLE"], bonne: 1, expl: "UPDATE modifie une ligne qui existe déjà.", niv: 1 },
        { q: "Quelle requête affiche les titres du plus récent au plus ancien ?", choix: ["SELECT titre FROM Film ORDER BY annee DESC ;", "SELECT titre FROM Film ORDER BY annee ASC ;", "SELECT titre FROM Film WHERE annee DESC ;", "SELECT annee FROM Film ORDER BY titre DESC ;"], bonne: 0, expl: "On trie sur l'année, en ordre décroissant (DESC).", niv: 2 },
        { q: "Film(titre, id_real) et Realisateur(id, nom). Quelle requête donne chaque titre avec le nom de son réalisateur ?", choix: ["SELECT titre, nom FROM Film JOIN Realisateur ON Film.titre = Realisateur.nom ;", "SELECT titre, nom FROM Film JOIN Realisateur ON Film.id_real = Realisateur.id ;", "SELECT titre, nom FROM Film JOIN Realisateur ON Film.id_real = Film.id ;", "SELECT titre, nom FROM Film WHERE Realisateur.id = id_real ;"], bonne: 1, expl: "La jointure relie la clé étrangère id_real à la clé primaire id de Realisateur.", niv: 3 },
        { q: "L'instruction UPDATE sert à :", choix: ["afficher des lignes triées", "ajouter une nouvelle table", "supprimer une table entière", "modifier des valeurs de lignes existantes"], bonne: 3, expl: "UPDATE table SET colonne = valeur WHERE condition.", niv: 1 },
        { q: "Que fait DELETE FROM Film WHERE annee < 2000 ; ?", choix: ["supprime la colonne annee", "supprime la table Film", "supprime les films sortis avant 2000", "affiche les films d'avant 2000"], bonne: 2, expl: "DELETE supprime les lignes qui respectent la condition ; la table reste.", niv: 2 },
        { q: "On exécute UPDATE Film SET duree = 100 ; sans WHERE. Quelle est la conséquence ?", choix: ["la requête est refusée", "le premier film est modifié", "tous les films ont une durée de 100", "les films sans durée sont modifiés"], bonne: 2, expl: "Sans condition, UPDATE s'applique à toutes les lignes. Le SGBD ne la refuse pas.", niv: 3 },
        { q: "Sur une colonne annee qui contient 2019, 2021 et 2021, que renvoie SELECT DISTINCT annee FROM Film ; ?", choix: ["2019 et 2021", "2019, 2021 et 2021", "2021", "le nombre 3"], bonne: 0, expl: "DISTINCT supprime les doublons.", niv: 2 },
        { q: "La fonction SQL qui calcule une moyenne est :", choix: ["MAX", "SUM", "COUNT", "AVG"], bonne: 3, expl: "AVG pour average. SUM fait la somme.", niv: 1 },
        { q: "INSERT INTO Film VALUES (1, 'Dune', 2021) ; est refusé alors que la syntaxe est juste. Raison la plus probable :", choix: ["SQL refuse les titres courts", "l'id 1 est déjà la clé d'un film", "INSERT exige une clause WHERE", "l'année doit être entre apostrophes"], bonne: 1, expl: "La clé primaire doit être unique : la contrainte d'entité est violée.", niv: 3 },
      ] },
    { chapitre: 'nsi-7',
      fiche: `## Processus, ordonnancement et systèmes sur puce

### Les systèmes sur puce
- Un **système sur puce** (SoC, System on Chip) rassemble sur **une seule puce** les composants d'un ordinateur : **processeur** (plusieurs cœurs), processeur graphique, **mémoire**, contrôleurs (USB, écran), modem, puce wifi.
- On les trouve dans les **smartphones**, les tablettes, les objets connectés, certains ordinateurs portables.
- **Avantages** : petite taille, **faible consommation d'énergie** (les composants sont proches), **rapidité** des échanges, coût réduit en grande série.
- **Limites** : impossible de changer un seul composant (on ne peut pas ajouter de mémoire), conception très coûteuse, chaleur concentrée.

### Les processus
- Un **processus** est un **programme en cours d'exécution**. Le même programme lancé deux fois donne deux processus.
- Chaque processus a un numéro, le **PID**, et un processus parent (celui qui l'a lancé).
- Un processus passe par plusieurs **états** :
- **Prêt** : il attend que le processeur soit libre ;
- **Élu** : il s'exécute sur le processeur ;
- **Bloqué** : il attend une ressource ou un événement (lecture sur le disque, saisie au clavier) ;
- **Terminé**.
- Sous Linux : la commande **ps** liste les processus, **top** les montre en temps réel, **kill** suivi du PID en arrête un.

### L'ordonnancement
- Un cœur de processeur n'exécute **qu'un processus à la fois**. L'**ordonnanceur** du système d'exploitation choisit lequel s'exécute et alterne très vite entre eux : on a l'impression qu'ils tournent en même temps.
- **Premier arrivé, premier servi** : les processus passent dans l'ordre d'arrivée, chacun jusqu'au bout. Simple, mais un long processus fait attendre tous les autres.
- **Plus court d'abord** : on lance d'abord le processus le plus court.
- **Tourniquet** (round robin) : chaque processus reçoit à tour de rôle un petit temps, le **quantum**, puis repasse en fin de file s'il n'a pas fini. Équitable.
- **Par priorité** : le processus le plus prioritaire passe d'abord. Risque de **famine** : un processus peu prioritaire n'est jamais exécuté.
- Exemple, tourniquet avec un quantum de 2 : P1 (durée 3) et P2 (durée 2) arrivent à t = 0. P1 de 0 à 2, P2 de 2 à 4, P1 de 4 à 5. P2 finit à 4, P1 à 5.

### L'interblocage
- Un **interblocage** (deadlock) se produit quand des processus **s'attendent mutuellement** : P1 détient l'imprimante et attend le scanner, P2 détient le scanner et attend l'imprimante. Aucun ne peut avancer.
- Il faut que des ressources soient détenues **en exclusivité**, qu'un processus garde ses ressources en attendant les autres, et que les attentes forment un **cycle**.
- Pour l'éviter : demander les ressources **toujours dans le même ordre**, ou demander toutes ses ressources d'un coup.

### À retenir pour le bac
- Définir un processus et ses états (prêt, élu, bloqué).
- Dérouler un ordonnancement sur un chronogramme et donner les dates de fin.
- Reconnaître un interblocage et dire comment l'éviter.
- Donner deux avantages et une limite d'un SoC.
- Piège : sur un seul cœur, les processus ne s'exécutent jamais vraiment en même temps.`,
      cartes: [
        { q: "Qu'est-ce qu'un système sur puce (SoC) ?", r: "Une puce unique qui rassemble processeur, mémoire, processeur graphique et contrôleurs." },
        { q: "Avantages d'un SoC ?", r: "Petite taille, faible consommation, rapidité des échanges, coût réduit en grande série." },
        { q: "Limite d'un SoC ?", r: "On ne peut pas changer ou ajouter un seul composant, comme la mémoire." },
        { q: "Qu'est-ce qu'un processus ?", r: "Un programme en cours d'exécution, identifié par un PID." },
        { q: "Les états d'un processus ?", r: "Prêt (attend le processeur), élu (s'exécute), bloqué (attend une ressource), terminé." },
        { q: "Rôle de l'ordonnanceur ?", r: "Choisir quel processus s'exécute et alterner très vite entre eux." },
        { q: "Ordonnancement en tourniquet ?", r: "Chaque processus reçoit à tour de rôle un quantum de temps, puis repasse en fin de file." },
        { q: "Premier arrivé, premier servi ?", r: "Les processus passent dans l'ordre d'arrivée, chacun jusqu'au bout." },
        { q: "Qu'est-ce que la famine ?", r: "Un processus peu prioritaire qui n'obtient jamais le processeur." },
        { q: "Qu'est-ce qu'un interblocage ?", r: "Des processus qui s'attendent mutuellement pour des ressources : aucun ne peut avancer." },
        { q: "Comment éviter un interblocage ?", r: "Demander les ressources toujours dans le même ordre, ou toutes d'un coup." },
        { q: "Commandes Linux sur les processus ?", r: "ps les liste, top les montre en temps réel, kill PID en arrête un." },
        { q: "Sur un seul cœur, deux processus tournent-ils en même temps ?", r: "Non : l'ordonnanceur alterne très vite, ce qui en donne l'impression." },
      ],
      quiz: [
        { q: "En informatique, un processus est :", choix: ["un composant de la carte mère", "un fichier enregistré sur le disque", "un programme en cours d'exécution", "un protocole de communication"], bonne: 2, expl: "Le fichier du programme n'est pas un processus tant qu'il n'est pas exécuté.", niv: 1 },
        { q: "Un processus attend la fin d'une lecture sur le disque. Il est dans l'état :", choix: ["terminé", "élu", "prêt", "bloqué"], bonne: 3, expl: "Il attend une ressource, pas le processeur : il est bloqué. Prêt signifie qu'il attend seulement le processeur.", niv: 2 },
        { q: "Tourniquet, quantum de 2. P1 (durée 3) puis P2 (durée 2) arrivent à t = 0. À quel instant P1 se termine-t-il ?", choix: ["5", "3", "4", "2"], bonne: 0, expl: "P1 de 0 à 2, P2 de 2 à 4, puis P1 finit de 4 à 5. 3 serait vrai sans tourniquet.", niv: 2 },
        { q: "Le composant du système d'exploitation qui choisit le processus à exécuter est :", choix: ["le compilateur", "l'ordonnanceur", "le gestionnaire de fichiers", "un pilote graphique"], bonne: 1, expl: "L'ordonnanceur décide quel processus prêt devient élu.", niv: 1 },
        { q: "P1 détient l'imprimante et attend le scanner ; P2 détient le scanner et attend l'imprimante. C'est :", choix: ["un changement de contexte", "un tourniquet", "une famine", "un interblocage"], bonne: 3, expl: "Chacun attend une ressource détenue par l'autre : attente circulaire.", niv: 2 },
        { q: "Pourquoi l'ordonnanceur alterne-t-il très vite entre les processus sur un seul cœur ?", choix: ["Pour supprimer les risques d'interblocage", "Pour réduire la taille de la mémoire vive", "Pour donner l'impression qu'ils tournent ensemble", "Pour exécuter deux instructions à la fois"], bonne: 2, expl: "Un cœur n'exécute qu'un processus à la fois ; l'alternance rapide donne une impression de simultanéité.", niv: 3 },
        { q: "Un système sur puce (SoC) regroupe sur une seule puce :", choix: ["plusieurs disques durs externes", "processeur, mémoire et contrôleurs", "les routeurs d'un réseau local", "les fichiers du système d'exploitation"], bonne: 1, expl: "C'est un ordinateur presque complet sur une puce, comme dans un smartphone.", niv: 1 },
        { q: "Sous Linux, quelle commande liste les processus en cours ?", choix: ["ps", "ls", "cd", "cp"], bonne: 0, expl: "ls liste des fichiers ; ps liste les processus avec leur PID.", niv: 2 },
        { q: "Un avantage majeur des SoC dans les smartphones est :", choix: ["une faible consommation d'énergie", "une réparation pièce par pièce facile", "une mémoire extensible à volonté", "un refroidissement inutile"], bonne: 0, expl: "Les composants sont proches et optimisés ensemble : ils consomment peu. Mais on ne peut pas les changer un par un.", niv: 3 },
        { q: "Premier arrivé, premier servi. P1 (durée 4) arrive à t = 0, P2 (durée 1) à t = 1. À quel instant P2 se termine-t-il ?", choix: ["4", "2", "5", "1"], bonne: 2, expl: "P1 occupe le processeur de 0 à 4 ; P2 passe ensuite, de 4 à 5.", niv: 2 },
        { q: "Chaque processus est identifié par un numéro appelé :", choix: ["IP", "PID", "URL", "MAC"], bonne: 1, expl: "PID signifie identifiant de processus.", niv: 1 },
        { q: "Pour éviter un interblocage, une solution est que :", choix: ["les ressources soient partagées en lecture et en écriture", "les processus libèrent le processeur plus souvent", "l'ordonnanceur lance plus de processus à la fois", "les processus demandent toujours les ressources dans le même ordre"], bonne: 3, expl: "Avec un ordre commun, l'attente circulaire devient impossible.", niv: 3 },
      ] },
    { chapitre: 'nsi-8',
      fiche: `## Le routage dans les réseaux : RIP et OSPF

### Adresses et réseaux
- Chaque machine a une **adresse IP**, par exemple 192.168.1.37. La notation **/24** indique que les 24 premiers bits (les trois premiers nombres) désignent le **réseau** : 192.168.1.0.
- Dans un réseau /24, il reste 8 bits pour les machines : 256 adresses, dont 2 réservées (l'adresse du réseau et l'adresse de diffusion, 192.168.1.255). Il reste donc **254** adresses pour des machines.
- Pour sortir de son réseau, un paquet passe par un **routeur**, qui le transmet de proche en proche.

### La table de routage
- Chaque routeur a une **table de routage**. Pour chaque réseau de destination, elle donne :
- la **passerelle** (le prochain routeur, ou **prochain saut**) ;
- l'**interface** de sortie ;
- la **métrique** : le « coût » de la route.
- Les tables peuvent être remplies à la main (routage statique) ou automatiquement par un **protocole de routage** (routage dynamique), qui s'adapte aux pannes.

### Le protocole RIP
- RIP est un protocole à **vecteur de distance**.
- Sa métrique est le **nombre de sauts** : le nombre de routeurs à traverser. Il choisit la route qui en a **le moins**, sans tenir compte du débit des liaisons.
- Chaque routeur envoie régulièrement (toutes les 30 secondes) sa table à ses **voisins**. Un routeur qui reçoit une route vers un réseau à distance d ajoute 1 et garde la meilleure.
- La distance maximale est **15** : une métrique de **16** veut dire **inaccessible**. RIP est donc réservé aux petits réseaux.
- Défaut : il peut préférer une route courte mais lente à une route plus longue sur la fibre.

### Le protocole OSPF
- OSPF est un protocole à **état de liens** : chaque routeur connaît la **carte complète** du réseau (tous les liens et leur coût).
- Sa métrique est un **coût** lié au **débit** : coût = 10^8 / débit en bit/s (la formule est donnée dans l'énoncé). Un lien à 100 Mbit/s coûte 1, un lien à 10 Mbit/s coûte 10.
- Le coût d'un chemin est la **somme** des coûts de ses liens. OSPF choisit le chemin de **coût total minimal**, calculé avec l'**algorithme de Dijkstra**.
- En cas de panne, l'information se propage et chaque routeur **recalcule** ses chemins.
- Exemple : chemin 1 avec deux liens à 100 Mbit/s, coût 1 + 1 = 2 ; chemin 2 avec un lien à 10 Mbit/s, coût 10. OSPF choisit le chemin 1, alors que RIP choisirait le chemin 2 (un seul saut).

### À retenir pour le bac
- Compléter la table de routage d'un routeur avec RIP (nombre de sauts) et avec OSPF (somme des coûts).
- Calculer un coût OSPF avec la formule de l'énoncé, en convertissant bien les débits en bit/s.
- Expliquer pourquoi RIP et OSPF ne choisissent pas forcément la même route.
- Savoir ce qui se passe quand un routeur ou un lien tombe en panne.
- Piège : 1 Mbit/s = 10^6 bit/s et 1 Gbit/s = 10^9 bit/s.`,
      cartes: [
        { q: "Que signifie /24 dans 192.168.1.37/24 ?", r: "Les 24 premiers bits désignent le réseau : ici 192.168.1.0." },
        { q: "Combien de machines dans un réseau /24 ?", r: "254 : 256 adresses moins l'adresse du réseau et celle de diffusion." },
        { q: "Rôle d'un routeur ?", r: "Transmettre les paquets d'un réseau à un autre, de proche en proche." },
        { q: "Contenu d'une table de routage ?", r: "Pour chaque destination : la passerelle (prochain saut), l'interface de sortie et la métrique." },
        { q: "Métrique de RIP ?", r: "Le nombre de sauts, c'est-à-dire de routeurs traversés." },
        { q: "Type de protocole de RIP ?", r: "À vecteur de distance : chaque routeur envoie sa table à ses voisins." },
        { q: "Que signifie une métrique de 16 avec RIP ?", r: "Le réseau est inaccessible (15 sauts au maximum)." },
        { q: "Type de protocole d'OSPF ?", r: "À état de liens : chaque routeur connaît la carte complète du réseau." },
        { q: "Métrique d'OSPF ?", r: "Un coût lié au débit, souvent 10^8 / débit en bit/s ; on additionne les coûts des liens." },
        { q: "Algorithme utilisé par OSPF ?", r: "L'algorithme de Dijkstra, qui calcule les chemins de coût minimal." },
        { q: "Coût OSPF d'un lien à 100 Mbit/s (10^8 / débit) ?", r: "10^8 / 10^8 = 1." },
        { q: "Défaut de RIP ?", r: "Il ignore le débit : il peut préférer une route courte mais lente." },
        { q: "Que se passe-t-il en cas de panne avec un protocole dynamique ?", r: "L'information se propage et les routeurs recalculent leurs routes." },
      ],
      quiz: [
        { q: "Le protocole RIP choisit la route qui minimise :", choix: ["la somme des coûts liés au débit", "le nombre de routeurs traversés", "la longueur des câbles en mètres", "le nombre d'ordinateurs connectés"], bonne: 1, expl: "La métrique de RIP est le nombre de sauts. Les coûts liés au débit, c'est OSPF.", niv: 1 },
        { q: "Route A : 2 sauts sur des liens lents. Route B : 4 sauts sur de la fibre. Quelle route RIP choisit-il ?", choix: ["la route A", "la route B", "celle qui a le plus fort débit", "celle qui a été apprise en dernier"], bonne: 0, expl: "RIP ne compte que les sauts : 2 contre 4.", niv: 2 },
        { q: "OSPF, coût = 10^8 / débit en bit/s. Quel est le coût d'un lien à 10 Mbit/s ?", choix: ["100", "1", "10", "0,1"], bonne: 2, expl: "10 Mbit/s = 10^7 bit/s, donc 10^8 / 10^7 = 10.", niv: 2 },
        { q: "OSPF est un protocole :", choix: ["de transfert de fichiers", "à vecteur de distance", "de chiffrement", "à état de liens"], bonne: 3, expl: "Chaque routeur connaît la carte complète. RIP est à vecteur de distance.", niv: 1 },
        { q: "OSPF, coût = 10^8 / débit. Chemin 1 : deux liens à 100 Mbit/s. Chemin 2 : un lien à 10 Mbit/s. Résultat ?", choix: ["coûts 2 et 10 : chemin 1 choisi", "coûts 2 et 10 : chemin 2 choisi", "coûts 200 et 10 : chemin 2 choisi", "coûts 1 et 10 : chemin 1 choisi"], bonne: 0, expl: "1 + 1 = 2 pour le chemin 1, 10 pour le chemin 2 : le plus petit coût total l'emporte.", niv: 2 },
        { q: "Pourquoi RIP peut-il choisir une route plus lente qu'OSPF ?", choix: ["Il calcule les coûts avec Dijkstra", "Il ignore les adresses des réseaux", "Il ne fonctionne que sur la fibre", "Il compte les routeurs, pas le débit"], bonne: 3, expl: "Une route de peu de sauts peut passer par des liens lents.", niv: 3 },
        { q: "Dans une table de routage, la passerelle (ou prochain saut) est :", choix: ["l'adresse finale du destinataire", "le routeur à qui transmettre le paquet", "le nom du site web visité", "le câble qui relie deux ordinateurs"], bonne: 1, expl: "Le routeur ne connaît que l'étape suivante, pas tout le trajet.", niv: 1 },
        { q: "Avec RIP, une métrique de 16 pour un réseau signifie qu'il est :", choix: ["le plus rapide", "à 16 sauts", "inaccessible", "en cours de calcul"], bonne: 2, expl: "RIP limite les routes à 15 sauts ; 16 vaut l'infini.", niv: 2 },
        { q: "Un routeur tombe en panne dans un réseau qui utilise OSPF. Que se passe-t-il ?", choix: ["le réseau s'arrête définitivement", "les autres routeurs recalculent leurs chemins", "les paquets attendent la réparation", "le routeur en panne met à jour sa table"], bonne: 1, expl: "La panne est annoncée et chaque routeur relance Dijkstra sur la nouvelle carte.", niv: 3 },
        { q: "Une machine a l'adresse 192.168.1.37/24. Quelle est l'adresse de son réseau ?", choix: ["192.168.1.255", "192.168.0.0", "192.168.1.0", "192.168.1.37"], bonne: 2, expl: "/24 garde les trois premiers nombres ; 192.168.1.255 est l'adresse de diffusion.", niv: 2 },
        { q: "L'algorithme utilisé par OSPF pour calculer les meilleurs chemins est :", choix: ["l'algorithme de Dijkstra", "l'algorithme de Boyer-Moore", "le tri fusion", "le parcours en profondeur"], bonne: 0, expl: "Dijkstra calcule les plus courts chemins dans un graphe pondéré.", niv: 1 },
        { q: "Combien de machines un réseau /24 peut-il accueillir ?", choix: ["24", "256", "255", "254"], bonne: 3, expl: "8 bits donnent 256 adresses, moins l'adresse du réseau et celle de diffusion.", niv: 3 },
      ] },
    { chapitre: 'nsi-9',
      fiche: `## La sécurisation des communications

### Pourquoi chiffrer ?
- Sur internet, les données traversent de nombreux routeurs : sans protection, un pirate peut les **lire** ou les **modifier**.
- **Chiffrer**, c'est transformer un message clair en message illisible grâce à une **clé**. Seul celui qui a la bonne clé peut **déchiffrer**.

### Le chiffrement symétrique
- On chiffre et on déchiffre avec **la même clé**, que les deux personnes doivent connaître.
- Exemple historique : le **chiffre de César**, qui décale chaque lettre d'un nombre fixe. Avec un décalage de 3, CHAT devient FKDW.
- Exemple simple en informatique : le **ou exclusif** (XOR, noté ^ en Python). Si c = m ^ k, alors c ^ k redonne m. Exemple : 5 ^ 3 vaut 6, car 101 XOR 011 = 110.
- Aujourd'hui on utilise **AES**, très sûr et **rapide**.
- Problème : comment **s'échanger la clé** sans qu'un pirate l'intercepte ?

### Le chiffrement asymétrique
- Chaque personne a une **paire de clés** : une **clé publique**, que tout le monde peut connaître, et une **clé privée**, qu'elle garde **secrète**.
- Pour envoyer un message secret à Alice, on le chiffre avec **la clé publique d'Alice** : seule sa **clé privée** permet de le déchiffrer.
- Exemple : **RSA**, qui repose sur la difficulté de décomposer un très grand nombre en facteurs premiers.
- Avantage : pas besoin d'échanger une clé secrète. Inconvénient : il est beaucoup **plus lent** que le chiffrement symétrique.

### HTTPS et TLS
- **HTTPS**, c'est **HTTP sécurisé par TLS** : le cadenas du navigateur.
- 1. Le serveur envoie son **certificat**, qui contient sa clé publique et qui est signé par une **autorité de certification** reconnue par le navigateur. Le navigateur vérifie ainsi l'**identité** du site.
- 2. Le client et le serveur utilisent le chiffrement **asymétrique** pour se mettre d'accord sur une **clé de session** secrète.
- 3. Toute la suite de la communication est chiffrée en **symétrique** avec cette clé : c'est rapide.
- On combine ainsi la sécurité de l'échange asymétrique et la rapidité du symétrique.

### Les attaques à connaître
- L'**attaque de l'homme du milieu** : un pirate se place entre le client et le serveur et se fait passer pour le serveur. Le **certificat** vérifié permet de le démasquer.
- La **force brute** : essayer toutes les clés possibles. Une clé longue rend cette attaque impossible en pratique.

### À retenir pour le bac
- Symétrique : une seule clé, rapide, mais problème d'échange de la clé.
- Asymétrique : clé publique pour chiffrer, clé privée pour déchiffrer ; plus lent.
- HTTPS : asymétrique pour échanger une clé de session, puis symétrique pour les données.
- Savoir chiffrer avec César et avec XOR sur un petit exemple.
- Piège : on chiffre avec la clé publique du destinataire, pas avec la sienne.`,
      cartes: [
        { q: "Qu'est-ce que chiffrer ?", r: "Rendre un message illisible grâce à une clé ; seul celui qui a la bonne clé peut le déchiffrer." },
        { q: "Chiffrement symétrique ?", r: "La même clé sert à chiffrer et à déchiffrer." },
        { q: "Problème du chiffrement symétrique ?", r: "Il faut s'échanger la clé secrète sans qu'elle soit interceptée." },
        { q: "Chiffrement asymétrique ?", r: "Une paire de clés : la clé publique chiffre, la clé privée, gardée secrète, déchiffre." },
        { q: "Avec quelle clé chiffrer un message pour Alice ?", r: "Avec la clé publique d'Alice : seule sa clé privée pourra le déchiffrer." },
        { q: "Inconvénient du chiffrement asymétrique ?", r: "Il est beaucoup plus lent que le chiffrement symétrique." },
        { q: "Exemples d'algorithmes de chiffrement ?", r: "Symétrique : César, XOR, AES. Asymétrique : RSA." },
        { q: "Propriété du XOR pour chiffrer ?", r: "Si c = m ^ k, alors c ^ k = m : on déchiffre avec la même clé." },
        { q: "Que signifie HTTPS ?", r: "HTTP sécurisé par le protocole TLS." },
        { q: "Les étapes de HTTPS ?", r: "Vérifier le certificat du serveur, échanger une clé de session en asymétrique, puis chiffrer les données en symétrique." },
        { q: "Rôle d'un certificat ?", r: "Prouver l'identité du serveur ; il est signé par une autorité de certification." },
        { q: "Qu'est-ce que l'attaque de l'homme du milieu ?", r: "Un pirate se place entre le client et le serveur et se fait passer pour l'un d'eux." },
        { q: "Qu'est-ce qu'une attaque par force brute ?", r: "Essayer toutes les clés possibles. Une clé longue la rend impossible en pratique." },
      ],
      quiz: [
        { q: "Dans un chiffrement symétrique, on chiffre et on déchiffre avec :", choix: ["la même clé", "deux clés différentes", "la clé publique du serveur", "un certificat signé"], bonne: 0, expl: "Deux clés différentes, c'est le chiffrement asymétrique.", niv: 1 },
        { q: "En Python, que vaut 5 ^ 3 (ou exclusif bit à bit) ?", choix: ["125", "6", "15", "8"], bonne: 1, expl: "101 XOR 011 = 110, soit 6. Le piège 125 confond ^ avec la puissance, qui s'écrit ** en Python.", niv: 2 },
        { q: "Chiffre de César avec un décalage de 3 : que devient le mot CHAT ?", choix: ["FKAW", "ZEXQ", "DIBU", "FKDW"], bonne: 3, expl: "C → F, H → K, A → D, T → W. ZEXQ est un décalage de 3 vers l'arrière.", niv: 2 },
        { q: "En chiffrement asymétrique, pour envoyer un message secret à Alice, on le chiffre avec :", choix: ["sa propre clé privée", "la clé privée d'Alice", "la clé publique d'Alice", "une clé tirée au hasard"], bonne: 2, expl: "Tout le monde connaît la clé publique d'Alice, mais seule sa clé privée déchiffre.", niv: 1 },
        { q: "Le principal problème du chiffrement symétrique est :", choix: ["l'impossibilité de déchiffrer", "sa grande lenteur", "l'échange de la clé secrète", "la taille des messages chiffrés"], bonne: 2, expl: "Il est rapide, mais les deux personnes doivent partager la clé sans qu'elle soit interceptée.", niv: 2 },
        { q: "Pourquoi HTTPS utilise-t-il les deux types de chiffrement ?", choix: ["Le symétrique protège la clé privée du serveur", "L'asymétrique échange une clé, le symétrique chiffre vite", "L'asymétrique est plus rapide sur les gros fichiers", "Le symétrique sert à signer le certificat"], bonne: 1, expl: "On profite de la sécurité de l'asymétrique pour la clé de session et de la rapidité du symétrique pour les données.", niv: 3 },
        { q: "Un certificat numérique sert à :", choix: ["prouver l'identité du serveur", "accélérer le chargement des pages", "compresser les données envoyées", "remplacer l'adresse IP du site"], bonne: 0, expl: "Il est signé par une autorité de certification que le navigateur connaît.", niv: 1 },
        { q: "On chiffre avec c = m ^ k (XOR). Comment retrouver m à partir de c et de k ?", choix: ["m = c * k", "m = c - k", "m = k ^ k", "m = c ^ k"], bonne: 3, expl: "c ^ k = m ^ k ^ k = m, car k ^ k = 0. k ^ k vaut 0, pas m.", niv: 2 },
        { q: "Un pirate se place entre le client et le serveur et se fait passer pour le serveur. Ce qui permet de le démasquer :", choix: ["l'adresse IP du client", "le certificat vérifié par une autorité", "le chiffre de César", "la table de routage"], bonne: 1, expl: "Le pirate ne peut pas présenter un certificat valide signé pour ce site.", niv: 3 },
        { q: "Le protocole qui sécurise HTTP pour donner HTTPS s'appelle :", choix: ["TCP", "RIP", "OSPF", "TLS"], bonne: 3, expl: "HTTPS = HTTP + TLS. TCP transporte les données sans les chiffrer.", niv: 2 },
        { q: "La clé privée doit être :", choix: ["gardée secrète par son propriétaire", "publiée sur le site web", "envoyée à chaque correspondant", "confiée à l'autorité de certification"], bonne: 0, expl: "Qui possède la clé privée peut déchiffrer les messages : elle ne quitte jamais son propriétaire.", niv: 1 },
        { q: "Laquelle de ces affirmations sur le chiffrement asymétrique n'est **pas** vraie ?", choix: ["La clé publique peut être diffusée", "Il utilise une paire de clés", "Il est plus rapide que le chiffrement symétrique", "RSA en est un exemple"], bonne: 2, expl: "Il est au contraire bien plus lent : c'est pourquoi HTTPS passe ensuite en symétrique.", niv: 3 },
      ] },
    { chapitre: 'nsi-10',
      fiche: `## La récursivité

### Le principe
- Une fonction **récursive** est une fonction qui **s'appelle elle-même**.
- Elle a toujours deux parties :
- le **cas de base** : une situation simple où elle renvoie un résultat **sans s'appeler** ;
- le **cas récursif** : elle s'appelle sur un problème **plus petit**, qui se rapproche du cas de base.
- Sans cas de base, ou si l'argument ne s'en rapproche pas, la récursion ne s'arrête pas.

### Exemples à savoir écrire
- **Factorielle** : def fact(n): return 1 if n == 0 else n * fact(n - 1). fact(4) = 4 × 3 × 2 × 1 = 24.
- **Somme des entiers** : def s(n): return 0 if n == 0 else n + s(n - 1). s(5) = 15.
- **Puissance** : def puiss(x, n): return 1 if n == 0 else x * puiss(x, n - 1). puiss(2, 3) = 8, avec 4 appels : (2, 3), (2, 2), (2, 1), (2, 0).
- **Nombre de chiffres** : def g(n): return 0 if n < 10 else 1 + g(n // 10). g(4096) vaut 3 : il compte les divisions par 10, donc le nombre de chiffres moins 1.
- Les fonctions sur les **arbres** (taille, hauteur) et le **tri fusion** sont naturellement récursives.

### Ce qui se passe en mémoire
- Chaque appel est placé sur la **pile d'appels**, avec ses propres variables. Les appels attendent que l'appel suivant renvoie son résultat.
- Pour fact(3) : fact(3) attend fact(2), qui attend fact(1), qui attend fact(0). fact(0) renvoie 1, puis les calculs remontent : 1, 2, 6.
- La pile a une taille limitée : en Python, au-delà d'environ 1 000 appels imbriqués, on obtient une **RecursionError**.

### L'ordre des instructions compte
- def p(n): si n > 0, print(n) puis p(n - 1). p(3) affiche 3, 2, 1 : l'affichage est fait **avant** l'appel.
- def q(n): si n > 0, q(n - 1) puis print(n). q(3) affiche 1, 2, 3 : les affichages sont faits **en remontant**.

### Le piège des calculs répétés
- def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2).
- fib(5) appelle fib(4) et fib(3) ; fib(4) appelle encore fib(3)… Les **mêmes calculs** sont refaits un très grand nombre de fois : le temps **explose** (complexité exponentielle).
- Solution : mémoriser les résultats déjà calculés (la **mémoïsation**, voir la programmation dynamique).

### Récursif ou itératif ?
- Tout programme récursif peut s'écrire avec des boucles (en **itératif**), et inversement.
- Le récursif est souvent plus **court** et plus **lisible** pour les structures récursives (arbres) ; l'itératif évite les limites de la pile.

### À retenir pour le bac
- Repérer le cas de base et le cas récursif, et vérifier que la fonction se termine.
- Dérouler un appel récursif à la main, en écrivant la suite des appels.
- Écrire une fonction récursive simple (somme, puissance, longueur, recherche dans un arbre).
- Piège : un affichage avant ou après l'appel récursif change l'ordre du résultat.
- Piège : sans cas de base atteignable, on obtient une RecursionError.`,
      cartes: [
        { q: "Qu'est-ce qu'une fonction récursive ?", r: "Une fonction qui s'appelle elle-même." },
        { q: "Qu'est-ce que le cas de base ?", r: "Le cas où la fonction renvoie un résultat sans s'appeler. Il arrête la récursion." },
        { q: "Qu'est-ce que le cas récursif ?", r: "Le cas où la fonction s'appelle sur un problème plus petit, qui se rapproche du cas de base." },
        { q: "Factorielle récursive ?", r: "def fact(n): return 1 if n == 0 else n * fact(n - 1)" },
        { q: "Que vaut fact(4) ?", r: "4 × 3 × 2 × 1 = 24." },
        { q: "Où sont stockés les appels en attente ?", r: "Dans la pile d'appels, chacun avec ses propres variables." },
        { q: "Que provoque une récursion trop profonde en Python ?", r: "Une RecursionError (limite d'environ 1 000 appels imbriqués par défaut)." },
        { q: "Pourquoi fib récursif naïf est-il lent ?", r: "Il refait les mêmes calculs un très grand nombre de fois : sa complexité est exponentielle." },
        { q: "Comment accélérer fib récursif ?", r: "Avec la mémoïsation : on garde les résultats déjà calculés dans un dictionnaire." },
        { q: "Affichage avant ou après l'appel récursif ?", r: "Avant : ordre décroissant (3, 2, 1). Après : ordre croissant en remontant (1, 2, 3)." },
        { q: "Récursif ou itératif ?", r: "Les deux sont toujours possibles ; le récursif est souvent plus lisible, l'itératif évite la limite de la pile." },
        { q: "Somme récursive des entiers de 1 à n ?", r: "def s(n): return 0 if n == 0 else n + s(n - 1)" },
        { q: "Comment vérifier qu'une fonction récursive se termine ?", r: "Vérifier qu'à chaque appel l'argument se rapproche du cas de base et finit par l'atteindre." },
      ],
      quiz: [
        { q: "Une fonction récursive est une fonction qui :", choix: ["contient une boucle while", "appelle une fonction d'un module", "ne renvoie aucune valeur", "s'appelle elle-même"], bonne: 3, expl: "Elle s'appelle sur un problème plus petit jusqu'au cas de base.", niv: 1 },
        { q: "def f(n): return 1 if n == 0 else n * f(n - 1). Que vaut f(4) ?", choix: ["4", "10", "24", "1"], bonne: 2, expl: "4 × 3 × 2 × 1 × 1 = 24. Le piège 10 additionne au lieu de multiplier.", niv: 2 },
        { q: "def s(n): return 0 if n == 0 else n + s(n - 1). Que vaut s(5) ?", choix: ["15", "5", "120", "10"], bonne: 0, expl: "5 + 4 + 3 + 2 + 1 + 0 = 15. 120 serait la factorielle.", niv: 2 },
        { q: "Le cas de base d'une fonction récursive est :", choix: ["le premier appel fait par le programme", "le cas où elle répond sans s'appeler", "le cas où l'argument est le plus grand", "l'appel récursif lui-même"], bonne: 1, expl: "C'est lui qui arrête la récursion.", niv: 1 },
        { q: "def g(n): return 0 if n < 10 else 1 + g(n // 10). Que vaut g(4096) ?", choix: ["4", "3", "40", "409"], bonne: 1, expl: "4096 → 409 → 40 → 4 : trois appels récursifs avant le cas de base, donc 3.", niv: 2 },
        { q: "def f(n): return n * f(n - 1), sans cas de base. Que se passe-t-il pour f(3) ?", choix: ["une RecursionError", "la fonction renvoie 6", "un résultat égal à 0", "la fonction renvoie 3"], bonne: 0, expl: "n passe à 0, -1, -2… sans jamais s'arrêter, jusqu'à dépasser la limite de la pile.", niv: 3 },
        { q: "Pendant l'exécution, les appels récursifs en attente sont rangés dans :", choix: ["la table de routage", "une file d'attente", "la pile d'appels", "un dictionnaire global"], bonne: 2, expl: "Le dernier appel lancé est le premier à se terminer : c'est une pile.", niv: 1 },
        { q: "def p(n): si n > 0, faire print(n) puis p(n - 1). Qu'affiche p(3) ?", choix: ["0, 1, 2, 3", "1, 2, 3", "3, 2, 1, 0", "3, 2, 1"], bonne: 3, expl: "On affiche avant l'appel ; p(0) n'affiche rien.", niv: 2 },
        { q: "def q(n): si n > 0, faire q(n - 1) puis print(n). Qu'affiche q(3) ?", choix: ["1, 2, 3", "3, 2, 1", "0, 1, 2, 3", "3, 2, 1, 0"], bonne: 0, expl: "Les affichages se font en remontant : q(1) affiche 1 en premier, puis q(2), puis q(3).", niv: 3 },
        { q: "def puiss(x, n): return 1 if n == 0 else x * puiss(x, n - 1). Combien d'appels pour puiss(2, 3) ?", choix: ["2", "3", "8", "4"], bonne: 3, expl: "puiss(2, 3), puiss(2, 2), puiss(2, 1) et puiss(2, 0) : 4 appels. 8 est le résultat.", niv: 2 },
        { q: "En Python, une récursion beaucoup trop profonde provoque :", choix: ["un résultat arrondi", "une boucle infinie silencieuse", "une RecursionError", "une SyntaxError"], bonne: 2, expl: "La pile d'appels a une taille limitée.", niv: 1 },
        { q: "def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2). Pourquoi fib(40) est-il très lent ?", choix: ["Python limite les grands entiers", "Les mêmes calculs sont refaits sans cesse", "Le cas de base est faux", "La fonction ne s'arrête pas"], bonne: 1, expl: "fib(38) est calculé 2 fois, fib(37) 3 fois… Le nombre d'appels explose.", niv: 3 },
      ] },
    { chapitre: 'nsi-11',
      fiche: `## Modularité, paradigmes et mise au point des programmes

### La modularité
- Un gros programme se découpe en **fonctions** et en **modules** (des fichiers de code réutilisables).
- **import math** donne accès aux fonctions du module : math.sqrt(16). **from math import sqrt** permet d'écrire directement sqrt(16).
- Un module offre une **interface** (ses fonctions, leurs paramètres, ce qu'elles renvoient) et cache son fonctionnement interne. C'est le principe d'une **API**.
- Une bonne fonction est **documentée** : une **docstring** sous la ligne def explique ce qu'elle fait, ses paramètres et sa valeur renvoyée. help(fonction) l'affiche.
- Avantages : code plus lisible, **réutilisable**, testé morceau par morceau, travail en équipe facilité.

### Les paradigmes de programmation
- Un **paradigme** est une façon de programmer.
- **Impératif** : une suite d'instructions qui modifient des variables (affectations, boucles).
- **Objet** : des classes et des objets qui regroupent données et méthodes.
- **Fonctionnel** : des **fonctions** qui renvoient un résultat **sans effet de bord** (sans modifier de variable extérieure). Les fonctions peuvent être passées en paramètre : map, filter, lambda. Exemple : list(map(lambda x: x * 2, [1, 2, 3])) donne [2, 4, 6].
- Python permet de mélanger ces paradigmes. On choisit le plus adapté au problème.

### Les effets de bord
- Une fonction a un **effet de bord** quand elle modifie quelque chose en dehors d'elle : une variable globale, une liste reçue en paramètre.
- def ajoute(t): t.append(0). Après t = [5] ; ajoute(t), la liste t vaut [5, 0] : la liste est **modifiée**, car le paramètre est une référence vers la même liste.

### Mettre au point un programme
- **Tester** : vérifier le résultat sur des exemples choisis. En Python, **assert** expression arrête le programme avec une **AssertionError** si l'expression est fausse.
- Choisir des tests variés, surtout les **cas limites** : liste vide, un seul élément, nombres négatifs, valeurs égales. Exemple : une fonction maximum qui part de 0 se trompe sur [-5, -2, -9].
- Erreurs fréquentes à reconnaître :
- **IndexError** : indice hors de la liste (t[3] avec une liste de 3 éléments) ;
- **KeyError** : clé absente d'un dictionnaire ;
- **TypeError** : opération sur un mauvais type ('a' + 1) ;
- **ZeroDivisionError** : division par zéro ;
- **NameError** : variable non définie.
- **try / except** permet de rattraper une erreur prévue : try: x = 1 / 0 puis except ZeroDivisionError: x = -1.
- Un test réussi ne prouve pas qu'un programme est correct : il montre seulement l'absence d'erreur **sur ce cas**.

### À retenir pour le bac
- Savoir importer et utiliser une fonction d'un module, et lire sa documentation.
- Écrire des assert qui testent les cas limites.
- Reconnaître le type d'erreur produit par une ligne de code.
- Distinguer paradigmes impératif, objet et fonctionnel avec un exemple.
- Piège : une fonction qui reçoit une liste peut la modifier (effet de bord).`,
      cartes: [
        { q: "Qu'est-ce qu'un module ?", r: "Un fichier de code réutilisable qui regroupe des fonctions, qu'on charge avec import." },
        { q: "import math ou from math import sqrt ?", r: "import math oblige à écrire math.sqrt ; from math import sqrt permet d'écrire sqrt directement." },
        { q: "Qu'est-ce qu'une API ?", r: "L'interface d'un module ou d'un service : les fonctions disponibles et comment les appeler." },
        { q: "Qu'est-ce qu'une docstring ?", r: "Le texte de documentation placé sous la ligne def ; help(fonction) l'affiche." },
        { q: "Qu'est-ce qu'un paradigme de programmation ?", r: "Une façon de programmer : impératif, objet, fonctionnel." },
        { q: "Paradigme fonctionnel ?", r: "Des fonctions sans effet de bord, qu'on peut passer en paramètre (map, filter, lambda)." },
        { q: "Qu'est-ce qu'un effet de bord ?", r: "Une modification faite par une fonction en dehors d'elle : variable globale, liste reçue en paramètre." },
        { q: "Que fait assert ?", r: "Il arrête le programme avec une AssertionError si la condition est fausse." },
        { q: "Pourquoi tester les cas limites ?", r: "Les bugs se cachent souvent dans les cas extrêmes : liste vide, un seul élément, valeurs négatives." },
        { q: "IndexError ?", r: "Un indice en dehors de la liste, par exemple t[3] pour une liste de 3 éléments." },
        { q: "KeyError ?", r: "Une clé absente d'un dictionnaire." },
        { q: "TypeError ?", r: "Une opération sur un type qui ne convient pas, par exemple 'a' + 1." },
        { q: "Rôle de try / except ?", r: "Rattraper une erreur prévue pour que le programme continue." },
        { q: "Un test réussi prouve-t-il qu'un programme est correct ?", r: "Non : il montre seulement l'absence d'erreur sur le cas testé." },
      ],
      quiz: [
        { q: "L'instruction import math permet :", choix: ["de compiler le programme", "de créer un nouveau module vide", "d'utiliser les fonctions du module math", "d'installer Python sur la machine"], bonne: 2, expl: "On écrit ensuite math.sqrt, math.pi…", niv: 1 },
        { q: "from math import sqrt; print(sqrt(16) + 1). Qu'affiche ce code ?", choix: ["17", "5.0", "4.0", "5"], bonne: 1, expl: "sqrt renvoie un nombre à virgule : 4.0 + 1 = 5.0.", niv: 2 },
        { q: "Que provoque l'instruction assert 2 + 2 == 5 ?", choix: ["une SyntaxError", "l'affichage de False", "l'affichage de 5", "une AssertionError"], bonne: 3, expl: "La condition est fausse : assert arrête le programme avec une AssertionError.", niv: 2 },
        { q: "Le paradigme fonctionnel privilégie :", choix: ["des fonctions sans effet de bord", "des objets et des classes", "des boucles qui modifient des variables", "des requêtes sur des tables"], bonne: 0, expl: "Les boucles qui modifient des variables relèvent du paradigme impératif.", niv: 1 },
        { q: "t = [1, 2, 3]; print(t[3]). Quelle erreur obtient-on ?", choix: ["IndexError", "KeyError", "TypeError", "ZeroDivisionError"], bonne: 0, expl: "Les indices vont de 0 à 2 : t[3] n'existe pas.", niv: 2 },
        { q: "def ajoute(t): t.append(0). Après t = [5]; ajoute(t); print(t), qu'affiche le programme ?", choix: ["[0]", "[5]", "[5, 0]", "None"], bonne: 2, expl: "La fonction reçoit une référence vers la même liste et la modifie : c'est un effet de bord.", niv: 3 },
        { q: "La documentation d'une fonction Python s'écrit dans :", choix: ["le nom de la fonction", "une docstring sous la ligne def", "un commentaire en fin de fichier", "la valeur renvoyée"], bonne: 1, expl: "help(fonction) affiche cette docstring.", niv: 1 },
        { q: "d = {'a': 1}; print(d['b']). Quelle erreur obtient-on ?", choix: ["ValueError", "IndexError", "NameError", "KeyError"], bonne: 3, expl: "La clé 'b' n'existe pas dans le dictionnaire.", niv: 2 },
        { q: "Une fonction maxi renvoie le plus grand élément d'une liste. Quel test révèle le mieux un bug fréquent ?", choix: ["assert maxi([10]) == 10", "assert maxi([1, 2, 3]) == 3", "assert maxi([4, 4]) == 4", "assert maxi([-5, -2, -9]) == -2"], bonne: 3, expl: "Une fonction qui part de 0 au lieu du premier élément renverrait 0 : seul le cas négatif le montre.", niv: 3 },
        { q: "try: x = 1 / 0, puis except ZeroDivisionError: x = -1. Que vaut x ensuite ?", choix: ["0", "-1", "1", "une erreur arrête le programme"], bonne: 1, expl: "L'erreur est rattrapée par except, qui donne à x la valeur -1.", niv: 2 },
        { q: "Un module bien conçu offre :", choix: ["un seul gros bloc de code sans fonctions", "ses variables internes en accès libre", "une interface claire et documentée", "un code recopié dans chaque fichier"], bonne: 2, expl: "L'utilisateur n'a besoin que de l'interface ; l'intérieur peut changer.", niv: 1 },
        { q: "Que donne list(map(lambda x: x * 2, [1, 2, 3])) ?", choix: ["[2, 4, 6]", "[1, 2, 3, 1, 2, 3]", "[1, 4, 9]", "12"], bonne: 0, expl: "map applique la fonction à chaque élément. [1, 2, 3] * 2 donnerait la liste répétée.", niv: 3 },
      ] },
    { chapitre: 'nsi-12',
      fiche: `## Calculabilité, décidabilité et histoire de l'informatique

### Un programme est aussi une donnée
- Un programme est un texte : un autre programme peut le **lire**, le **traduire** ou l'**exécuter**.
- Un **compilateur** traduit un programme en langage machine (le langage C est compilé). Un **interpréteur** lit et exécute le programme ligne à ligne (Python est interprété).
- Le **système d'exploitation** charge les programmes en mémoire et les lance. Un antivirus analyse des programmes. Tous traitent des programmes comme des données.

### Calculable et décidable
- Une fonction est **calculable** s'il existe un **algorithme** qui calcule son résultat pour chaque entrée, en un nombre fini d'étapes.
- Un problème est **décidable** s'il existe un algorithme qui répond **oui ou non**, pour **toute** entrée, en un **temps fini**. Exemple décidable : « ce nombre est-il premier ? ».
- Pour donner un sens précis à « algorithme », **Alan Turing** a imaginé en **1936** la **machine de Turing** : un modèle théorique de calcul, avec un ruban et des règles simples. Tout ce qu'un ordinateur sait calculer, une machine de Turing le peut aussi.

### Le problème de l'arrêt
- Question : existe-t-il un programme qui, pour **n'importe quel** programme P et n'importe quelle entrée, dit si P **s'arrête** ou boucle sans fin ?
- Turing a démontré que **non** : le problème de l'arrêt est **indécidable**.
- Idée de la preuve, par l'absurde : si un tel programme arret(P, e) existait, on écrirait un programme paradoxe(P) qui boucle sans fin si arret(P, P) dit « s'arrête », et qui s'arrête sinon. Que fait paradoxe(paradoxe) ? Dans les deux cas, on aboutit à une contradiction.
- Conséquence : aucun logiciel ne peut détecter à coup sûr toutes les boucles infinies ni tous les bugs. Les outils d'analyse se contentent de cas particuliers.

### Repères d'histoire à connaître
- **1843** : **Ada Lovelace** écrit ce qui est considéré comme le **premier programme**, pour la machine analytique imaginée par **Charles Babbage**.
- **1854** : **George Boole** pose l'algèbre de la logique (vrai, faux, et, ou, non).
- **1936** : **Alan Turing** décrit la machine de Turing et prouve l'indécidabilité de l'arrêt.
- **1945** : **John von Neumann** décrit l'architecture qui porte son nom : programme et données dans **la même mémoire**. L'**ENIAC**, l'un des premiers ordinateurs électroniques, fonctionne à la même époque.
- **Années 1950** : **Grace Hopper** crée l'un des premiers compilateurs.
- **1969** : naissance d'**ARPANET**, l'ancêtre d'internet, et du système **UNIX**.
- **1972** : **Dennis Ritchie** crée le langage **C**.
- **1989** : **Tim Berners-Lee** invente le **World Wide Web** au CERN.
- **1991** : **Guido van Rossum** publie le langage **Python**.

### À retenir pour le bac
- Expliquer qu'un programme peut être une donnée pour un autre programme (compilateur, interpréteur).
- Définir calculable et décidable, et citer le problème de l'arrêt comme problème indécidable.
- Savoir présenter l'idée du raisonnement par l'absurde de Turing.
- Situer les grandes dates : Lovelace, Turing, von Neumann, web, Python.
- Piège : indécidable ne veut pas dire « trop long à calculer », mais « impossible pour tout algorithme ».`,
      cartes: [
        { q: "Pourquoi dit-on qu'un programme est une donnée ?", r: "Un autre programme peut le lire, le traduire ou l'exécuter : compilateur, interpréteur, système d'exploitation." },
        { q: "Compilateur ou interpréteur ?", r: "Le compilateur traduit tout le programme en langage machine ; l'interpréteur l'exécute ligne à ligne." },
        { q: "Qu'est-ce qu'une fonction calculable ?", r: "Une fonction dont un algorithme peut calculer le résultat pour chaque entrée, en un nombre fini d'étapes." },
        { q: "Qu'est-ce qu'un problème décidable ?", r: "Un problème pour lequel un algorithme répond oui ou non, pour toute entrée, en un temps fini." },
        { q: "Qu'est-ce qu'une machine de Turing ?", r: "Un modèle théorique de calcul imaginé par Alan Turing en 1936." },
        { q: "Qu'est-ce que le problème de l'arrêt ?", r: "Savoir si un programme donné s'arrête sur une entrée donnée. Il est indécidable." },
        { q: "Comment Turing prouve-t-il l'indécidabilité de l'arrêt ?", r: "Par l'absurde : un programme paradoxe qui fait le contraire de ce que prédit arret mène à une contradiction." },
        { q: "Conséquence pratique de l'indécidabilité de l'arrêt ?", r: "Aucun logiciel ne peut détecter à coup sûr toutes les boucles infinies." },
        { q: "Ada Lovelace ?", r: "En 1843, elle écrit le premier programme, pour la machine analytique de Babbage." },
        { q: "Architecture de von Neumann (1945) ?", r: "Programme et données sont rangés dans la même mémoire." },
        { q: "Qui a inventé le web, et quand ?", r: "Tim Berners-Lee, en 1989, au CERN." },
        { q: "Qui a créé Python, et quand ?", r: "Guido van Rossum, publié en 1991." },
        { q: "Grace Hopper ?", r: "Une pionnière qui crée l'un des premiers compilateurs dans les années 1950." },
      ],
      quiz: [
        { q: "Un problème est décidable s'il existe :", choix: ["un ordinateur assez puissant pour le résoudre", "un algorithme qui répond oui ou non à chaque fois, en temps fini", "une formule mathématique qui le décrit", "un programme qui le résout pour quelques entrées"], bonne: 1, expl: "Il faut un algorithme qui réponde pour toute entrée, pas seulement pour certaines.", niv: 1 },
        { q: "Le problème de l'arrêt consiste à savoir :", choix: ["si un programme contient une boucle", "si un ordinateur peut être éteint sans risque", "combien de temps dure un programme", "si un programme s'arrête sur une entrée donnée"], bonne: 3, expl: "Un programme peut contenir une boucle et s'arrêter quand même.", niv: 2 },
        { q: "En 1936, Alan Turing a démontré que le problème de l'arrêt est :", choix: ["indécidable", "décidable en temps linéaire", "résolu par les compilateurs", "réservé aux machines de Turing"], bonne: 0, expl: "Aucun algorithme ne peut le résoudre pour tous les programmes.", niv: 2 },
        { q: "Un compilateur est :", choix: ["un protocole de communication", "un composant électronique du processeur", "un programme qui traduit un programme en langage machine", "une base de données de programmes"], bonne: 2, expl: "Il prend un programme comme donnée et produit un autre programme.", niv: 1 },
        { q: "L'interpréteur Python lit un programme comme un texte avant de l'exécuter. Cela montre :", choix: ["que les données sont des processus", "que Python est un langage compilé", "qu'un programme ne peut pas être lu", "qu'un programme peut être une donnée"], bonne: 3, expl: "Le programme est l'entrée d'un autre programme, l'interpréteur.", niv: 2 },
        { q: "Pourquoi aucun logiciel ne peut-il détecter à coup sûr toutes les boucles infinies ?", choix: ["Les ordinateurs manquent de mémoire", "Le problème de l'arrêt est indécidable", "Python interdit les boucles infinies", "Les compilateurs les suppriment"], bonne: 1, expl: "Ce n'est pas une question de puissance : c'est impossible pour tout algorithme.", niv: 3 },
        { q: "Ada Lovelace est connue pour avoir :", choix: ["créé le langage Python", "inventé le web au CERN", "écrit le premier programme, pour la machine de Babbage", "construit l'ENIAC"], bonne: 2, expl: "En 1843, elle décrit un algorithme pour la machine analytique de Charles Babbage.", niv: 1 },
        { q: "Le World Wide Web a été inventé en 1989 au CERN par :", choix: ["Tim Berners-Lee", "Alan Turing", "John von Neumann", "Grace Hopper"], bonne: 0, expl: "Le web est un service qui utilise internet, plus ancien (ARPANET, 1969).", niv: 2 },
        { q: "L'architecture de von Neumann range :", choix: ["les données dans les registres du processeur", "le programme sur des cartes perforées à part", "programme et données dans la même mémoire", "chaque programme sur une machine dédiée"], bonne: 2, expl: "C'est encore le principe des ordinateurs actuels.", niv: 3 },
        { q: "Une machine de Turing est :", choix: ["un modèle théorique de calcul", "le premier ordinateur électronique", "un algorithme de chiffrement", "un langage de programmation"], bonne: 0, expl: "C'est un objet mathématique, pas une machine construite.", niv: 2 },
        { q: "Le langage Python a été publié en 1991 par :", choix: ["Alan Turing", "Dennis Ritchie", "Tim Berners-Lee", "Guido van Rossum"], bonne: 3, expl: "Dennis Ritchie a créé le langage C en 1972.", niv: 1 },
        { q: "Un problème indécidable est un problème :", choix: ["trop long à calculer sur un ordinateur", "qu'aucun algorithme ne résout pour toutes les entrées", "qui n'a pas encore été programmé", "qui demande trop de mémoire"], bonne: 1, expl: "Indécidable ne veut pas dire lent : c'est une impossibilité, quelle que soit la machine.", niv: 3 },
      ] },
    { chapitre: 'nsi-13',
      fiche: `## Diviser pour régner et tri fusion

### La méthode
- **Diviser pour régner**, c'est résoudre un problème en trois temps :
- **diviser** le problème en sous-problèmes plus petits, du même type ;
- **régner** : résoudre chaque sous-problème, souvent de façon **récursive** ;
- **combiner** les solutions des sous-problèmes pour obtenir la solution du problème de départ.
- Les sous-problèmes sont **indépendants** : on ne refait pas deux fois le même calcul (sinon, on passe à la programmation dynamique).

### La recherche dichotomique
- Elle cherche une valeur dans une liste **triée**. On compare la valeur au **milieu** de la liste : si elle est plus petite, on cherche dans la moitié gauche, sinon dans la moitié droite.
- À chaque étape, la zone de recherche est **divisée par deux**. Pour 1 000 éléments, il faut au plus une dizaine d'étapes (2^10 = 1 024).
- Sa complexité est **logarithmique**, en **O(log n)**, contre O(n) pour une recherche élément par élément.
- Elle ne marche que si la liste est **triée**.

### Le tri fusion
- **Diviser** : couper la liste en deux moitiés.
- **Régner** : trier chaque moitié par un appel récursif. Une liste de 0 ou 1 élément est déjà triée : c'est le **cas de base**.
- **Combiner** : **fusionner** les deux moitiés triées. On compare les premiers éléments des deux listes, on prend le plus petit, et on recommence.
- Exemple de fusion : [2, 5, 8] et [1, 6]. On prend 1, puis 2, puis 5, puis 6, puis 8 : [1, 2, 5, 6, 8].
- Exemple complet : [7, 3, 9, 1] → [7, 3] et [9, 1] → [7], [3], [9], [1] → fusions [3, 7] et [1, 9] → fusion finale [1, 3, 7, 9].

### La complexité du tri fusion
- On coupe en deux jusqu'à avoir des listes d'un élément : environ **log2(n)** niveaux de découpage (16 éléments : 4 niveaux).
- À chaque niveau, les fusions demandent en tout de l'ordre de **n** comparaisons.
- Total : **O(n log n)**, bien mieux que les tris par sélection ou par insertion de première, en **O(n²)**, pour de grandes listes en désordre.
- Il demande de la **mémoire supplémentaire** pour les sous-listes.
- Sur une liste déjà triée, le tri par insertion fait seulement de l'ordre de n comparaisons : il est alors plus rapide.

### Autres exemples
- Le **maximum** d'une liste : maximum de la moitié gauche, maximum de la moitié droite, puis on garde le plus grand.
- La **rotation d'une image** carrée d'un quart de tour, en la découpant en quatre quarts : un exemple vu dans plusieurs sujets.

### À retenir pour le bac
- Nommer les trois étapes : diviser, régner, combiner.
- Écrire la fonction fusion de deux listes triées et dérouler le tri fusion sur un exemple.
- Complexités : dichotomie O(log n), tri fusion O(n log n), tris par sélection ou insertion O(n²).
- Piège : la dichotomie exige une liste triée.
- Piège : diviser pour régner suppose des sous-problèmes indépendants.`,
      cartes: [
        { q: "Les trois étapes de diviser pour régner ?", r: "Diviser en sous-problèmes, régner (les résoudre, souvent récursivement), combiner les solutions." },
        { q: "Principe de la recherche dichotomique ?", r: "Comparer au milieu d'une liste triée, puis chercher dans la seule moitié utile." },
        { q: "Complexité de la recherche dichotomique ?", r: "O(log n) : la zone de recherche est divisée par deux à chaque étape." },
        { q: "Condition de la recherche dichotomique ?", r: "La liste doit être triée." },
        { q: "Principe du tri fusion ?", r: "Couper la liste en deux, trier chaque moitié récursivement, puis fusionner les deux moitiés triées." },
        { q: "Cas de base du tri fusion ?", r: "Une liste de 0 ou 1 élément, déjà triée." },
        { q: "Comment fusionner deux listes triées ?", r: "Comparer les premiers éléments, prendre le plus petit, recommencer jusqu'à vider les deux listes." },
        { q: "Complexité du tri fusion ?", r: "O(n log n)." },
        { q: "Complexité des tris par sélection et par insertion ?", r: "O(n²) dans le pire des cas." },
        { q: "Pourquoi le tri fusion est-il en n log n ?", r: "Environ log2(n) niveaux de découpage, et de l'ordre de n comparaisons par niveau pour les fusions." },
        { q: "Inconvénient du tri fusion ?", r: "Il demande de la mémoire supplémentaire pour les sous-listes." },
        { q: "Différence avec la programmation dynamique ?", r: "En diviser pour régner, les sous-problèmes sont indépendants ; en programmation dynamique, ils se recouvrent." },
        { q: "Nombre d'étapes d'une dichotomie sur 1 000 éléments ?", r: "Environ 10, car 2^10 = 1 024." },
      ],
      quiz: [
        { q: "La méthode « diviser pour régner » consiste à :", choix: ["découper en sous-problèmes, les résoudre, puis combiner", "essayer toutes les solutions possibles une à une", "garder en mémoire les résultats déjà calculés", "faire à chaque étape le choix qui semble le meilleur"], bonne: 0, expl: "Garder les résultats en mémoire, c'est la programmation dynamique ; le meilleur choix immédiat, c'est un algorithme glouton.", niv: 1 },
        { q: "Que donne la fusion des listes triées [2, 5, 8] et [1, 6] ?", choix: ["[1, 6, 2, 5, 8]", "[2, 5, 8, 1, 6]", "[1, 2, 5, 6, 8]", "[1, 2, 6, 5, 8]"], bonne: 2, expl: "On prend à chaque fois le plus petit des deux premiers éléments.", niv: 2 },
        { q: "Pour une liste de n éléments, la complexité du tri fusion est :", choix: ["en O(log n)", "en O(n²)", "en O(n)", "en O(n log n)"], bonne: 3, expl: "O(n²) est celle des tris par sélection et par insertion.", niv: 2 },
        { q: "La recherche dichotomique exige que la liste soit :", choix: ["de longueur paire", "triée", "sans doublons", "rangée dans une pile"], bonne: 1, expl: "Sans tri, on ne sait pas de quel côté du milieu chercher.", niv: 1 },
        { q: "Recherche dichotomique dans une liste triée de 1 000 éléments : combien d'étapes au plus, environ ?", choix: ["1 000", "500", "10", "100"], bonne: 2, expl: "La zone est divisée par deux à chaque étape, et 2^10 = 1 024.", niv: 2 },
        { q: "Par rapport au tri par insertion, le tri fusion est surtout plus rapide :", choix: ["sur une liste vide", "sur une liste déjà triée", "sur une liste de deux éléments", "sur de grandes listes en désordre"], bonne: 3, expl: "Sur une liste déjà triée, le tri par insertion ne fait que de l'ordre de n comparaisons.", niv: 3 },
        { q: "Dans le tri fusion, l'étape qui assemble deux listes triées en une seule s'appelle :", choix: ["la fusion", "le partitionnement", "la mémoïsation", "la dichotomie"], bonne: 0, expl: "C'est l'étape « combiner » de la méthode.", niv: 1 },
        { q: "Combien de fois coupe-t-on en deux une liste de 16 éléments avant d'obtenir des listes d'un élément ?", choix: ["8", "4", "16", "5"], bonne: 1, expl: "16 → 8 → 4 → 2 → 1 : 4 niveaux, car 2^4 = 16.", niv: 2 },
        { q: "Le tri fusion classique d'une liste Python a l'inconvénient de :", choix: ["ne trier que des nombres entiers", "demander de la mémoire pour les sous-listes", "exiger une liste déjà triée", "exiger un nombre pair d'éléments"], bonne: 1, expl: "Les découpages créent de nouvelles listes, d'où une mémoire supplémentaire.", niv: 3 },
        { q: "def m(t): return t[0] if len(t) == 1 else max(m(t[:len(t)//2]), m(t[len(t)//2:])). Que renvoie m([3, 9, 4, 7]) ?", choix: ["9", "3", "7", "23"], bonne: 0, expl: "m([3, 9]) = 9 et m([4, 7]) = 7, puis max(9, 7) = 9. 23 est la somme.", niv: 2 },
        { q: "Le tri fusion est un algorithme :", choix: ["de recherche textuelle", "glouton", "de programmation dynamique", "récursif"], bonne: 3, expl: "Il s'appelle lui-même sur chaque moitié.", niv: 1 },
        { q: "Pourquoi la recherche dichotomique est-elle en O(log n) ?", choix: ["Le tri préalable réduit les comparaisons", "Elle compare chaque élément une seule fois", "La zone de recherche est divisée par deux à chaque étape", "Elle finit toujours au milieu de la liste"], bonne: 2, expl: "Comparer chaque élément une fois donnerait O(n).", niv: 3 },
      ] },
    { chapitre: 'nsi-14',
      fiche: `## La programmation dynamique

### Le principe
- La **programmation dynamique** résout un problème en le découpant en sous-problèmes qui **se recouvrent** : les mêmes sous-problèmes reviennent plusieurs fois.
- Au lieu de les recalculer, on **mémorise** leurs résultats et on les **réutilise**.
- Le nom vient de **Richard Bellman**, dans les années 1950.
- Différence avec diviser pour régner : là, les sous-problèmes étaient **indépendants**.

### L'exemple de Fibonacci
- fib(0) = 0, fib(1) = 1, et fib(n) = fib(n - 1) + fib(n - 2). Suite : 0, 1, 1, 2, 3, 5, 8, 13…
- La version récursive naïve recalcule sans cesse les mêmes valeurs : sa complexité est **exponentielle**.
- **Mémoïsation** (de haut en bas) : on garde un dictionnaire memo. Avant de calculer fib(n), on regarde si **n est déjà une clé de memo** ; sinon on calcule, on range le résultat dans memo[n], puis on le renvoie.
- **De bas en haut** : on remplit un tableau en partant des plus petits cas. f = [0, 1] ; for i in range(2, 7): f.append(f[i-1] + f[i-2]). f[6] vaut 8.
- Dans les deux cas, chaque valeur est calculée **une seule fois** : la complexité devient **linéaire**, en O(n).

### Le rendu de monnaie
- Problème : rendre une somme avec le **moins de pièces possible**.
- L'**algorithme glouton** prend toujours la plus grosse pièce possible. Avec les pièces 1, 2, 5, 10 €, il donne toujours le meilleur résultat.
- Mais avec les pièces 1, 3 et 4 € et la somme 6 €, le glouton prend 4 + 1 + 1, soit **3 pièces**, alors que 3 + 3 n'en demande que **2**.
- Programmation dynamique : on calcule le nombre minimal de pièces pour **chaque somme** de 0 à 6, en partant de 0. Pour une somme s, on essaie chaque pièce p ≤ s : nb[s] = 1 + le minimum des nb[s - p].
- On obtient nb[0] = 0, nb[1] = 1, nb[2] = 2, nb[3] = 1, nb[4] = 1, nb[5] = 2, nb[6] = 2.

### La somme maximale dans une pyramide
- Pyramide de nombres : on descend du sommet vers la base, en allant à chaque fois vers un des deux voisins du dessous. On cherche la plus grande somme.
- Essayer tous les chemins coûte trop cher quand la pyramide est grande. On part du **bas** : chaque case garde sa valeur plus le **meilleur** des deux voisins du dessous. Le sommet contient alors la réponse.
- Exemple : sommet 3 ; ligne 2 : 7 et 4 ; ligne 3 : 2, 4, 6. Au-dessus de la base : 7 + max(2, 4) = 11 et 4 + max(4, 6) = 10. Au sommet : 3 + max(11, 10) = 14.

### À retenir pour le bac
- Reconnaître des sous-problèmes qui se recouvrent, et expliquer l'intérêt de mémoriser.
- Écrire une version mémoïsée (dictionnaire) ou de bas en haut (tableau) d'une fonction récursive.
- Montrer sur un exemple que l'algorithme glouton n'est pas toujours optimal.
- Piège : la mémoïsation fait passer fib d'une complexité exponentielle à linéaire.
- Savoir remplir à la main le tableau d'un rendu de monnaie.`,
      cartes: [
        { q: "Principe de la programmation dynamique ?", r: "Découper en sous-problèmes qui se recouvrent, mémoriser leurs résultats et les réutiliser." },
        { q: "Qu'est-ce que la mémoïsation ?", r: "Mémoriser les résultats déjà calculés, souvent dans un dictionnaire, pour ne pas les recalculer." },
        { q: "Approche de bas en haut ?", r: "Remplir un tableau en partant des plus petits cas jusqu'au cas demandé." },
        { q: "Différence avec diviser pour régner ?", r: "En diviser pour régner, les sous-problèmes sont indépendants ; ici, ils se recouvrent." },
        { q: "Qui a donné son nom à la programmation dynamique ?", r: "Richard Bellman, dans les années 1950." },
        { q: "Complexité de fib mémoïsé ?", r: "Linéaire, en O(n), car chaque valeur est calculée une seule fois." },
        { q: "Les premières valeurs de Fibonacci ?", r: "0, 1, 1, 2, 3, 5, 8, 13, 21…" },
        { q: "Qu'est-ce qu'un algorithme glouton ?", r: "Un algorithme qui fait à chaque étape le choix qui paraît le meilleur sur le moment." },
        { q: "Contre-exemple au glouton pour la monnaie ?", r: "Pièces 1, 3, 4 et somme 6 : le glouton donne 4 + 1 + 1 (3 pièces), l'optimum est 3 + 3 (2 pièces)." },
        { q: "Relation pour le rendu de monnaie ?", r: "nb[s] = 1 + minimum des nb[s - p], pour chaque pièce p inférieure ou égale à s ; nb[0] = 0." },
        { q: "Méthode pour la pyramide de nombres ?", r: "Partir du bas : chaque case ajoute le meilleur de ses deux voisins du dessous ; le sommet donne la réponse." },
        { q: "Mémoïsation : que teste-t-on avant de calculer f(n) ?", r: "Si n est déjà une clé du dictionnaire memo." },
      ],
      quiz: [
        { q: "La programmation dynamique est utile quand :", choix: ["le problème ne se découpe pas", "le problème n'a qu'une seule étape", "les données sont déjà triées", "les sous-problèmes se répètent"], bonne: 3, expl: "On mémorise les sous-problèmes qui reviennent pour ne les calculer qu'une fois.", niv: 1 },
        { q: "Pièces de 1, 3 et 4 €, somme à rendre 6 €. Combien de pièces au minimum ?", choix: ["3", "2", "4", "6"], bonne: 1, expl: "3 + 3 = 6 avec 2 pièces. Le piège 3 est le résultat du glouton.", niv: 2 },
        { q: "Pièces de 1, 3 et 4 €, somme 6 €. Combien de pièces donne l'algorithme glouton (plus grosse pièce d'abord) ?", choix: ["4", "2", "3", "1"], bonne: 2, expl: "Il prend 4, puis 1, puis 1 : 3 pièces, alors que 2 suffisent.", niv: 2 },
        { q: "La mémoïsation consiste à :", choix: ["garder les résultats calculés pour ne pas les refaire", "apprendre l'algorithme par cœur", "trier les données avant le calcul", "découper le problème en deux moitiés"], bonne: 0, expl: "On range chaque résultat, par exemple dans un dictionnaire.", niv: 1 },
        { q: "f = [0, 1]; for i in range(2, 7): f.append(f[i-1] + f[i-2]); print(f[6]). Qu'affiche ce code ?", choix: ["13", "8", "21", "6"], bonne: 1, expl: "f devient [0, 1, 1, 2, 3, 5, 8] : f[6] vaut 8. 13 serait f[7].", niv: 2 },
        { q: "Avec mémoïsation, fib(n) calcule chaque valeur une seule fois. Sa complexité devient :", choix: ["quadratique, en O(n²)", "exponentielle", "linéaire, en O(n)", "constante, en O(1)"], bonne: 2, expl: "On calcule fib(0), fib(1)… fib(n), chacun une fois.", niv: 3 },
        { q: "En programmation dynamique, contrairement à diviser pour régner, les sous-problèmes :", choix: ["sont résolus par un tri", "sont indépendants les uns des autres", "se résolvent au hasard", "se recouvrent et sont réutilisés"], bonne: 3, expl: "Des sous-problèmes indépendants, c'est le cas de diviser pour régner.", niv: 1 },
        { q: "Version mémoïsée avec un dictionnaire memo. Avant de calculer f(n), on teste :", choix: ["si n est déjà une clé de memo", "si n est un nombre pair", "si memo est encore vide", "si f(n - 1) vaut 0"], bonne: 0, expl: "Si n est dans memo, on renvoie directement memo[n].", niv: 2 },
        { q: "Pourquoi l'algorithme glouton peut-il échouer au rendu de monnaie ?", choix: ["Le meilleur choix immédiat ne mène pas toujours à l'optimum", "Il ne sait pas rendre une somme exacte", "L'essai de toutes les combinaisons est trop long", "Il demande des pièces triées par année"], bonne: 0, expl: "Prendre 4 d'abord empêche de faire 3 + 3.", niv: 3 },
        { q: "En programmation dynamique, l'approche « de bas en haut » :", choix: ["calcule le dernier cas sans les autres", "part du cas le plus grand en s'appelant elle-même", "trie le tableau avant de le remplir", "remplit un tableau en partant des plus petits cas"], bonne: 3, expl: "Partir du cas le plus grand en s'appelant elle-même, c'est la mémoïsation, de haut en bas.", niv: 2 },
        { q: "La programmation dynamique doit son nom, dans les années 1950, à :", choix: ["Edsger Dijkstra", "Richard Bellman", "Alan Turing", "Donald Knuth"], bonne: 1, expl: "Dijkstra est connu pour son algorithme de plus court chemin.", niv: 1 },
        { q: "Pyramide : sommet 3 ; ligne 2 : 7 et 4 ; ligne 3 : 2, 4, 6. Plus grande somme du sommet à la base, voisin par voisin ?", choix: ["16", "13", "14", "12"], bonne: 2, expl: "3 + 7 + 4 = 14. Le piège 16 prend 6, qui n'est pas voisin de 7.", niv: 3 },
      ] },
    { chapitre: 'nsi-15',
      fiche: `## La recherche textuelle : Boyer-Moore

### Le problème
- Chercher un **motif** (un mot, une séquence) dans un **texte** : la fonction « rechercher » d'un traitement de texte, un moteur de recherche, ou la recherche d'un gène dans une séquence d'ADN.
- On note n la longueur du texte et m celle du motif.

### La recherche naïve
- On place le motif à chaque position du texte, de gauche à droite, et on compare lettre à lettre. Au premier désaccord, on **décale d'une seule case**.
- Exemple en Python : def cherche(t, m): return [i for i in range(len(t) - len(m) + 1) if t[i:i+len(m)] == m]. cherche('banane', 'an') renvoie [1, 3].
- Dans le pire cas, chaque position demande jusqu'à m comparaisons : complexité **O(n × m)**. Exemple de cas lent : chercher AAB dans AAAAAAAB.

### L'algorithme de Boyer-Moore (version de Horspool)
- Idée 1 : on compare le motif au texte **en partant de la fin du motif**, de droite à gauche.
- Idée 2 : en cas d'échec, on regarde le caractère du texte placé **en face de la dernière lettre du motif**, et on **saute** plusieurs positions d'un coup.
- Avant la recherche, on fait un **prétraitement** du motif : une **table de décalages**. Pour chaque lettre du motif, **sauf la dernière**, le décalage est la distance entre sa **dernière apparition** et la fin du motif. Pour une lettre **absente** du motif, le décalage est **m**, la longueur du motif.
- Exemple, motif CHAT (m = 4) : C → 3, H → 2, A → 1. Toute autre lettre, y compris T qui n'apparaît qu'en dernière position, donne 4.
- Si la lettre du texte en face de la fin du motif est Z, absente de CHAT, on décale de 4 : aucune position intermédiaire ne peut convenir.
- Exemple, motif NSI (m = 3) : N → 2, S → 1, autres lettres → 3.

### Pourquoi c'est plus rapide
- Grâce aux sauts, beaucoup de positions ne sont **jamais testées**. Plus le motif est **long** et plus l'**alphabet** est varié, plus les sauts sont grands.
- En pratique, le nombre de comparaisons est souvent bien inférieur à n : l'algorithme peut ne lire qu'une partie du texte.
- Il est peu utile pour un motif d'une seule lettre, ou pour un texte écrit avec très peu de lettres différentes (comme l'ADN, avec quatre lettres, pour un motif court).

### En Python
- 'abracadabra'.count('abra') renvoie 2 ; 'abracadabra'.find('cad') renvoie 4, la position de la première apparition.
- Au bac, on demande plutôt d'écrire la recherche naïve, de construire la table de décalages et de dérouler Boyer-Moore à la main.

### À retenir pour le bac
- Recherche naïve : décalage d'une case, complexité O(n × m).
- Boyer-Moore : comparaison depuis la fin du motif, table de décalages calculée à l'avance, sauts.
- Savoir remplir la table de décalages d'un motif et donner le saut pour une lettre.
- Piège : la dernière lettre du motif ne compte pas dans la table, sauf si elle apparaît aussi plus tôt.
- Piège : une lettre absente du motif donne un décalage égal à la longueur du motif.`,
      cartes: [
        { q: "Qu'est-ce que la recherche textuelle ?", r: "Chercher toutes les positions d'un motif dans un texte." },
        { q: "Principe de la recherche naïve ?", r: "Placer le motif à chaque position, comparer lettre à lettre, et décaler d'une case en cas d'échec." },
        { q: "Complexité de la recherche naïve ?", r: "O(n × m) dans le pire cas, avec n la longueur du texte et m celle du motif." },
        { q: "Sens de comparaison de Boyer-Moore ?", r: "De droite à gauche, en partant de la fin du motif." },
        { q: "Qu'est-ce que le prétraitement du motif ?", r: "Le calcul, avant la recherche, d'une table de décalages pour chaque lettre." },
        { q: "Décalage d'une lettre présente dans le motif ?", r: "La distance entre sa dernière apparition, hors dernière position, et la fin du motif." },
        { q: "Décalage d'une lettre absente du motif ?", r: "La longueur m du motif." },
        { q: "Table de décalages de CHAT ?", r: "C → 3, H → 2, A → 1, toute autre lettre → 4." },
        { q: "Pourquoi Boyer-Moore est-il rapide ?", r: "Il saute des positions sans les tester, surtout avec un motif long et un alphabet varié." },
        { q: "Quand Boyer-Moore est-il peu utile ?", r: "Pour un motif d'une seule lettre ou un texte avec très peu de lettres différentes." },
        { q: "Que renvoie 'abracadabra'.find('cad') ?", r: "4, la position de la première apparition." },
        { q: "Exemple de cas lent pour la recherche naïve ?", r: "Chercher AAB dans AAAAAAAB : chaque position demande plusieurs comparaisons avant l'échec." },
      ],
      quiz: [
        { q: "L'algorithme de Boyer-Moore compare le motif au texte en partant :", choix: ["du milieu du motif", "du début du motif", "de la fin du motif", "d'une lettre au hasard"], bonne: 2, expl: "Il compare de droite à gauche, ce qui permet de grands sauts en cas d'échec.", niv: 1 },
        { q: "Recherche naïve d'un motif de longueur m dans un texte de longueur n. Complexité dans le pire cas ?", choix: ["O(n × m)", "O(n)", "O(m)", "O(log n)"], bonne: 0, expl: "Jusqu'à m comparaisons pour chacune des positions du texte.", niv: 2 },
        { q: "Motif CHAT. La lettre du texte face à la dernière lettre du motif est Z, absente du motif. De combien décale-t-on ?", choix: ["1", "4", "3", "0"], bonne: 1, expl: "Une lettre absente du motif donne un décalage égal à sa longueur, 4.", niv: 2 },
        { q: "Avant la recherche, Boyer-Moore prépare :", choix: ["la liste des positions du texte", "une copie triée du texte", "un arbre binaire du texte", "une table de décalages calculée sur le motif"], bonne: 3, expl: "Le prétraitement ne porte que sur le motif, qui est court.", niv: 1 },
        { q: "Motif CHAT. La lettre du texte face à la dernière lettre du motif est A. De combien décale-t-on (Horspool) ?", choix: ["1", "2", "3", "4"], bonne: 0, expl: "Le dernier A de CHAT est à une case de la fin : on décale de 1 pour les aligner.", niv: 2 },
        { q: "Pourquoi Boyer-Moore est-il souvent plus rapide que la recherche naïve ?", choix: ["Il compare deux lettres à la fois", "Il trie d'abord le texte", "Il lit le texte à partir de la fin", "Il saute des positions sans les tester"], bonne: 3, expl: "La table de décalages permet d'avancer de plusieurs cases d'un coup.", niv: 3 },
        { q: "En Python, que renvoie 'abracadabra'.count('abra') ?", choix: ["3", "5", "2", "4"], bonne: 2, expl: "abra apparaît au début et à la fin du mot.", niv: 1 },
        { q: "cherche(t, m) renvoie [i for i in range(len(t) - len(m) + 1) if t[i:i+len(m)] == m]. Que renvoie cherche('banane', 'an') ?", choix: ["[2, 4]", "[1, 3]", "[1]", "[0, 2]"], bonne: 1, expl: "b-a-n-a-n-e : « an » commence à l'indice 1 et à l'indice 3 (on compte à partir de 0).", niv: 2 },
        { q: "Boyer-Moore est le plus efficace quand :", choix: ["le texte est très court", "le motif fait une seule lettre", "le texte n'a qu'une seule lettre répétée", "le motif est long et l'alphabet varié"], bonne: 3, expl: "Les lettres absentes du motif sont alors fréquentes, et les sauts sont longs.", niv: 3 },
        { q: "Motif NSI. Quels décalages donne la table de Horspool pour N et pour S ?", choix: ["N : 0 et S : 1", "N : 2 et S : 1", "N : 3 et S : 2", "N : 1 et S : 2"], bonne: 1, expl: "N est à 2 cases de la fin, S à 1 case.", niv: 2 },
        { q: "La recherche textuelle sert par exemple à :", choix: ["router un paquet sur internet", "trier une liste de nombres", "trouver un mot dans un document", "chiffrer un message"], bonne: 2, expl: "C'est aussi la base des moteurs de recherche et de l'analyse d'ADN.", niv: 1 },
        { q: "Recherche naïve du motif AAB dans le texte AAAAAAAB. Pourquoi ce cas est-il lent ?", choix: ["Chaque position demande plusieurs comparaisons avant l'échec", "Le motif est absent du texte", "Le texte est trop court pour la recherche", "Les lettres du texte sont différentes"], bonne: 0, expl: "AA correspond presque partout : on ne découvre l'échec qu'à la troisième lettre. Le motif est bien présent, à la fin.", niv: 3 },
      ] },
  ],

  methode: [
    { id: 'nsi-m1', mat: 'nsi', titre: "Écrire une requête SQL",
      formules: ["Écrire la requête SQL qui renvoie…", "Donner le résultat de la requête suivante", "Écrire la requête qui met à jour…", "Expliquer pourquoi cette insertion est refusée"],
      vu: ["Présent dans presque tous les sujets écrits depuis 2021, dans l'exercice sur les bases de données"], pts: "3 à 5 points sur l'exercice",
      attendu: "Une requête juste et complète : les bonnes colonnes après SELECT, la ou les tables après FROM, la jointure avec sa condition ON quand deux tables sont utiles, le filtre WHERE, et le tri si on le demande. Pour une lecture de requête, le résultat exact sur les données de l'énoncé.",
      etapes: ["Repérer les colonnes demandées et la table où elles se trouvent", "Si elles sont dans deux tables, écrire la jointure : clé étrangère = clé primaire", "Écrire la condition WHERE avec les apostrophes autour des textes", "Ajouter ORDER BY, DISTINCT ou une fonction (COUNT, AVG…) si la question le demande", "Relire en exécutant la requête sur les données de l'énoncé"],
      mots: ["SELECT", "FROM", "WHERE", "JOIN … ON", "ORDER BY … DESC", "COUNT", "UPDATE … SET", "INSERT INTO", "clé primaire", "clé étrangère"],
      pieges: ["Oublier la condition ON d'une jointure", "Oublier le WHERE d'un UPDATE ou d'un DELETE", "Écrire un texte sans apostrophes", "Confondre la table et la colonne quand deux tables ont un attribut du même nom"],
      cas: "Une base fictive de concerts : Concert(id, artiste, ville, prix) et Billet(id_billet, id_concert, nom_client). Concert contient (1, 'Lune Rousse', 'Nantes', 25), (2, 'Les Sables', 'Brest', 18), (3, 'Lune Rousse', 'Brest', 22).",
      question: "Écrire la requête qui donne les villes des concerts de Lune Rousse, du moins cher au plus cher, puis la requête qui donne le nom des clients ayant un billet pour un concert à Brest.",
      modele: `SELECT ville FROM Concert WHERE artiste = 'Lune Rousse' ORDER BY prix ASC ;
Résultat : Brest (22 €), puis Nantes (25 €).

SELECT nom_client FROM Billet JOIN Concert ON Billet.id_concert = Concert.id WHERE Concert.ville = 'Brest' ;
La jointure relie la clé étrangère id_concert de Billet à la clé primaire id de Concert.`,
      grille: ["Les colonnes demandées sont après SELECT", "La jointure a sa condition ON entre clé étrangère et clé primaire", "Le WHERE est juste, avec les textes entre apostrophes", "Le tri est dans le bon sens", "Le résultat a été vérifié sur les données"] },

    { id: 'nsi-m2', mat: 'nsi', titre: "Écrire une fonction récursive sur un arbre",
      formules: ["Écrire une fonction récursive taille(arbre)", "Compléter la fonction hauteur", "Écrire une fonction qui teste si une valeur est dans l'ABR"],
      vu: ["Très fréquent dans l'exercice sur les arbres binaires, souvent avec une classe Noeud donnée"], pts: "1 à 2 points par fonction",
      attendu: "Une fonction qui traite d'abord le cas de base (arbre vide), puis le cas récursif en appelant la fonction sur le sous-arbre gauche et le sous-arbre droit, et qui renvoie le résultat. Pour un ABR, on ne descend que d'un côté.",
      etapes: ["Lire la classe donnée : noms des attributs (valeur, gauche, droit)", "Écrire le cas de base : if a is None: return …", "Écrire le cas récursif avec les appels sur a.gauche et a.droit", "Combiner les résultats (1 + …, max(…), or)", "Tester à la main sur un petit arbre de l'énoncé"],
      mots: ["cas de base", "appel récursif", "None", "sous-arbre gauche", "sous-arbre droit", "return"],
      pieges: ["Oublier le cas de l'arbre vide", "Utiliser un attribut qui n'existe pas dans la classe de l'énoncé", "Oublier return devant l'appel récursif", "Chercher des deux côtés dans un ABR"],
      cas: "Un arbre binaire est représenté par la classe Noeud, dont les attributs sont valeur, gauche et droit. Un arbre vide vaut None.",
      question: "Écrire la fonction récursive somme(a) qui renvoie la somme des valeurs de l'arbre a.",
      modele: `def somme(a):
    if a is None:
        return 0
    return a.valeur + somme(a.gauche) + somme(a.droit)

Cas de base : un arbre vide a une somme nulle. Cas récursif : la valeur du nœud plus la somme de chaque sous-arbre.`,
      grille: ["Le cas de l'arbre vide est traité", "Les deux sous-arbres sont appelés", "Les résultats sont combinés et renvoyés", "Les noms des attributs sont ceux de l'énoncé"] },

    { id: 'nsi-m3', mat: 'nsi', titre: "Compléter une table de routage avec RIP et OSPF",
      formules: ["Compléter la table de routage du routeur A avec le protocole RIP", "Calculer le coût des liaisons", "Déterminer la route suivie avec le protocole OSPF", "Que devient la table après la panne du lien… ?"],
      vu: ["Présent dans de nombreux sujets écrits, dans l'exercice sur les réseaux"], pts: "2 à 4 points",
      attendu: "Pour RIP, la route qui traverse le moins de routeurs, avec le prochain saut et le nombre de sauts. Pour OSPF, le coût de chaque lien calculé avec la formule de l'énoncé, puis le chemin dont la somme des coûts est la plus petite, avec le détail du calcul.",
      etapes: ["Repérer le graphe du réseau : routeurs et liaisons", "Pour RIP : compter les sauts de chaque chemin et garder le plus court", "Pour OSPF : convertir les débits en bit/s et calculer le coût de chaque lien", "Additionner les coûts de chaque chemin possible et garder le plus petit", "Donner dans la table le prochain saut, pas le chemin entier"],
      mots: ["table de routage", "prochain saut", "passerelle", "métrique", "nombre de sauts", "coût", "état de liens", "Dijkstra"],
      pieges: ["Oublier de convertir les Mbit/s ou Gbit/s en bit/s", "Mettre la destination finale à la place du prochain saut", "Prendre la route de moindre coût pour RIP", "Ne pas recalculer après une panne"],
      cas: "Réseau fictif : R1 relié à R2 (100 Mbit/s) et à R3 (10 Mbit/s) ; R2 relié à R4 (100 Mbit/s) ; R3 relié à R4 (10 Mbit/s) ; R1 relié directement à R4 (10 Mbit/s). OSPF : coût = 10^8 / débit en bit/s.",
      question: "Donner la route de R1 vers R4 avec RIP, puis avec OSPF.",
      modele: `RIP : la liaison directe R1 - R4 ne compte qu'un saut. Prochain saut : R4, métrique 1.
OSPF : coût d'un lien à 100 Mbit/s = 10^8 / 10^8 = 1 ; à 10 Mbit/s = 10^8 / 10^7 = 10.
R1 - R4 direct : 10. R1 - R2 - R4 : 1 + 1 = 2. R1 - R3 - R4 : 10 + 10 = 20.
OSPF choisit R1 - R2 - R4, de coût 2 : prochain saut R2, métrique 2.`,
      grille: ["La route RIP est celle qui a le moins de sauts", "Les débits sont convertis et les coûts justes", "Tous les chemins sont comparés", "La table indique le prochain saut et la métrique"] },

    { id: 'nsi-m4', mat: 'nsi', titre: "Programmer une classe",
      formules: ["Compléter la classe suivante", "Écrire la méthode … de la classe …", "Écrire l'instruction qui crée l'objet …"],
      vu: ["Présent dans la plupart des sujets : une classe pour une pile, une file, un arbre ou un objet du thème de l'exercice"], pts: "1 à 3 points",
      attendu: "Un constructeur __init__ qui initialise tous les attributs avec self, des méthodes qui ont self en premier paramètre et qui modifient ou renvoient ce qui est demandé, et des appels écrits avec le point, sans self.",
      etapes: ["Lister les attributs demandés par l'énoncé", "Écrire def __init__(self, …) et une ligne self.attribut = … par attribut", "Écrire chaque méthode avec self en premier paramètre", "Utiliser self.attribut à l'intérieur des méthodes", "Écrire un exemple d'appel : objet = Classe(…) puis objet.methode()"],
      mots: ["classe", "constructeur", "__init__", "self", "attribut", "méthode", "instance"],
      pieges: ["Oublier self dans la définition d'une méthode", "Écrire attribut au lieu de self.attribut", "Écrire self dans l'appel de la méthode", "Oublier le return quand la méthode doit renvoyer une valeur"],
      cas: "On veut une classe Pile qui garde ses éléments dans une liste Python cachée, avec les méthodes est_vide, empiler et depiler.",
      question: "Écrire la classe Pile.",
      modele: `class Pile:
    def __init__(self):
        self.contenu = []
    def est_vide(self):
        return len(self.contenu) == 0
    def empiler(self, x):
        self.contenu.append(x)
    def depiler(self):
        return self.contenu.pop()

Exemple : p = Pile() ; p.empiler(3) ; p.depiler() renvoie 3.`,
      grille: ["Le constructeur initialise l'attribut avec self", "Chaque méthode a self en premier paramètre", "depiler renvoie l'élément retiré", "est_vide renvoie un booléen"] },

    { id: 'nsi-m5', mat: 'nsi', titre: "Réussir un exercice de l'épreuve pratique",
      formules: ["Écrire une fonction … qui prend en paramètre … et renvoie …", "Compléter le code suivant pour que la fonction … soit correcte"],
      vu: ["Épreuve pratique : deux exercices sur ordinateur en 1 h, notés sur 8 points"], pts: "4 points par exercice",
      attendu: "Exercice 1 : écrire entièrement une fonction courte qui respecte exactement le nom, les paramètres et la valeur renvoyée de l'énoncé, et qui passe les exemples donnés. Exercice 2 : compléter les trous d'un programme plus long sans changer le reste, puis le tester.",
      etapes: ["Recopier exactement le nom et les paramètres de la fonction", "Traiter les cas limites : liste vide, un seul élément", "Tester avec les exemples de l'énoncé, sous forme d'assert", "Ajouter un ou deux tests à soi", "Pour un code à trous, lire tout le programme avant de compléter"],
      mots: ["def", "return", "for … in range", "assert", "cas limite", "liste vide"],
      pieges: ["Changer le nom de la fonction ou l'ordre des paramètres", "Afficher avec print au lieu de renvoyer avec return", "Oublier le cas de la liste vide", "Ne pas tester avant d'appeler l'examinateur"],
      cas: "Écrire une fonction maxi(t) qui prend une liste d'entiers non vide et renvoie son plus grand élément, sans utiliser la fonction max.",
      question: "Écrire la fonction maxi et deux tests.",
      modele: `def maxi(t):
    m = t[0]
    for x in t:
        if x > m:
            m = x
    return m

assert maxi([3, 9, 4]) == 9
assert maxi([-5, -2, -9]) == -2

On part du premier élément, pas de 0 : sinon la fonction se tromperait sur une liste de nombres négatifs.`,
      grille: ["Le nom et le paramètre sont ceux de l'énoncé", "La fonction renvoie la valeur avec return", "Le maximum part du premier élément", "Les tests couvrent un cas avec des nombres négatifs"] },
  ],

  sujets: [
    { id: 'nsi-s1', matiere: 'nsi', titre: "Sujet d'entraînement : la médiathèque des Tilleuls (fictive)", duree: 210,
      enonce: `Sujet d'entraînement inventé pour réviser : la médiathèque, les personnes et les données sont fictives. Il a la forme de l'épreuve écrite : trois exercices indépendants, en 3 h 30. Il est noté ici sur 20 ; à l'examen, l'écrit compte pour 12 points sur 20.

EXERCICE 1 — Bases de données (6 points)

La médiathèque des Tilleuls utilise trois tables :
- Adherent(id, nom, ville), de clé primaire id ;
- Livre(isbn, titre, auteur, annee), de clé primaire isbn ;
- Emprunt(id_emprunt, id_adherent, isbn, date_emprunt, rendu), où rendu vaut 1 si le livre est rendu et 0 sinon.

Contenu des tables :
- Adherent : (1, 'Martin', 'Lyon'), (2, 'Diallo', 'Villeurbanne'), (3, 'Nguyen', 'Lyon').
- Livre : ('L1', 'Le Lac gelé', 'Roux', 2018), ('L2', 'Nuit claire', 'Benali', 2021), ('L3', 'Les Dunes', 'Roux', 2023).
- Emprunt : (1, 1, 'L2', '2026-10-02', 1), (2, 3, 'L1', '2026-10-05', 0), (3, 1, 'L3', '2026-10-09', 0).

1. Donner la clé primaire de la table Emprunt et ses clés étrangères, en précisant à quelle table chacune fait référence. (1 point)
2. Donner le résultat de la requête : SELECT titre FROM Livre WHERE auteur = 'Roux' AND annee > 2020 ; (1 point)
3. Écrire la requête qui affiche le nom des adhérents qui habitent à Lyon, par ordre alphabétique. (1 point)
4. Écrire la requête qui affiche le titre des livres qui ne sont pas encore rendus, puis donner son résultat. (1,5 point)
5. L'emprunt numéro 2 vient d'être rendu. Écrire la requête qui met la table à jour. (0,5 point)
6. La requête INSERT INTO Emprunt VALUES (4, 7, 'L1', '2026-11-02', 0) ; est refusée. Expliquer pourquoi. (1 point)

EXERCICE 2 — Arbres binaires de recherche et programmation (7 points)

Les livres sont classés par un numéro. On range ces numéros dans un arbre binaire de recherche (ABR). Un nœud est un objet de la classe suivante, et un arbre vide vaut None :

class Noeud:
    def __init__(self, valeur, gauche=None, droit=None):
        self.valeur = valeur
        self.gauche = gauche
        self.droit = droit

Dans cet exercice, un arbre réduit à sa racine a une hauteur de 1.

1. On insère dans un ABR vide, dans cet ordre, les numéros 12, 6, 18, 3, 9, 15. Décrire l'arbre obtenu (racine, enfants de chaque nœud). (1 point)
2. Donner la taille et la hauteur de cet arbre. (1 point)
3. Donner son parcours infixe et son parcours préfixe. Que remarque-t-on sur le parcours infixe ? (1,5 point)
4. Écrire une fonction récursive taille(a) qui renvoie le nombre de nœuds de l'arbre a. (1,5 point)
5. Écrire une fonction récursive appartient(a, x) qui renvoie True si x est dans l'ABR a et False sinon, en utilisant la propriété des ABR. (1,5 point)
6. Pourquoi faut-il éviter d'insérer les numéros dans l'ordre croissant ? (0,5 point)

EXERCICE 3 — Réseaux et processus (7 points)

Partie A : routage

Le réseau de la médiathèque relie cinq routeurs A, B, C, D et E. Les liaisons sont :
- A - B : 100 Mbit/s ; B - D : 100 Mbit/s ; A - D : 10 Mbit/s ;
- A - C : 1 Gbit/s ; C - D : 100 Mbit/s ; D - E : 1 Gbit/s.
Pour OSPF, on prend : coût = 10^9 / débit en bit/s.

1. Calculer le coût OSPF de chaque type de liaison (10 Mbit/s, 100 Mbit/s, 1 Gbit/s). (1 point)
2. Avec le protocole RIP, quelle route suit un paquet de A vers E ? Donner le prochain saut et la métrique dans la table de A. (1 point)
3. Avec le protocole OSPF, quelle route suit ce paquet ? Justifier par le calcul des coûts. (1,5 point)
4. La liaison C - D tombe en panne. Quelle est la nouvelle route OSPF de A vers E, et son coût ? (1 point)

Partie B : processus

5. Trois processus arrivent à t = 0, dans l'ordre P1 (durée 5), P2 (durée 2), P3 (durée 3). L'ordonnanceur utilise le tourniquet avec un quantum de 2. Donner l'ordre d'exécution et la date de fin de chaque processus. (1,5 point)
6. Le processus P4 détient le fichier des emprunts et attend l'imprimante ; le processus P5 détient l'imprimante et attend le fichier des emprunts. Nommer cette situation et proposer une façon de l'éviter. (1 point)`,
      corrige: `CORRIGÉ INDICATIF

EXERCICE 1

1. Clé primaire de Emprunt : id_emprunt. Clés étrangères : id_adherent, qui fait référence à id dans Adherent, et isbn, qui fait référence à isbn dans Livre.

2. Livres de Roux parus après 2020 : seul Les Dunes (2023) convient. Le Lac gelé date de 2018.

3. SELECT nom FROM Adherent WHERE ville = 'Lyon' ORDER BY nom ;
Résultat : Martin, puis Nguyen.

4. SELECT Livre.titre FROM Emprunt JOIN Livre ON Emprunt.isbn = Livre.isbn WHERE Emprunt.rendu = 0 ;
Résultat : Le Lac gelé et Les Dunes (emprunts 2 et 3).

5. UPDATE Emprunt SET rendu = 1 WHERE id_emprunt = 2 ;
Sans le WHERE, tous les emprunts seraient marqués comme rendus.

6. L'adhérent 7 n'existe pas dans la table Adherent. La clé étrangère id_adherent doit correspondre à une clé primaire existante : la contrainte de référence est violée, le SGBD refuse l'insertion.

EXERCICE 2

1. Racine 12. À gauche de 12 : 6, qui a pour enfants 3 (à gauche) et 9 (à droite). À droite de 12 : 18, qui a pour enfant gauche 15.
(3 < 6 < 12 ; 9 > 6 mais < 12 ; 15 > 12 mais < 18.)

2. Taille : 6 nœuds. Hauteur : 3 (par exemple la branche 12, 6, 3).

3. Infixe : 3, 6, 9, 12, 15, 18. Préfixe : 12, 6, 3, 9, 18, 15.
Le parcours infixe d'un ABR donne les valeurs dans l'ordre croissant.

4.
def taille(a):
    if a is None:
        return 0
    return 1 + taille(a.gauche) + taille(a.droit)

5.
def appartient(a, x):
    if a is None:
        return False
    if x == a.valeur:
        return True
    if x < a.valeur:
        return appartient(a.gauche, x)
    return appartient(a.droit, x)
On ne descend que d'un côté : le nombre d'appels est au plus la hauteur de l'arbre.

6. Avec des numéros croissants, chaque nouveau nœud se place à droite du précédent : l'arbre devient un peigne de hauteur n. La recherche devient alors linéaire, comme dans une liste, au lieu d'être de l'ordre de log2(n) pour un arbre équilibré.

EXERCICE 3

1. 10 Mbit/s = 10^7 bit/s : coût 10^9 / 10^7 = 100. 100 Mbit/s = 10^8 bit/s : coût 10. 1 Gbit/s = 10^9 bit/s : coût 1.

2. RIP compte les sauts. A - D - E : 2 sauts ; A - B - D - E et A - C - D - E : 3 sauts. Route A - D - E. Dans la table de A : destination E, prochain saut D, métrique 2.

3. Coûts OSPF :
- A - D - E : 100 + 1 = 101 ;
- A - B - D - E : 10 + 10 + 1 = 21 ;
- A - C - D - E : 1 + 10 + 1 = 12.
OSPF choisit A - C - D - E, de coût 12 : prochain saut C. RIP et OSPF ne choisissent pas la même route, car RIP ignore le débit.

4. Sans la liaison C - D, il reste A - B - D - E (coût 21) et A - D - E (coût 101). La nouvelle route est A - B - D - E, de coût 21.

5. Déroulé avec un quantum de 2 :
- de 0 à 2 : P1 (il lui reste 3) ;
- de 2 à 4 : P2, qui se termine à t = 4 ;
- de 4 à 6 : P3 (il lui reste 1) ;
- de 6 à 8 : P1 (il lui reste 1) ;
- de 8 à 9 : P3, qui se termine à t = 9 ;
- de 9 à 10 : P1, qui se termine à t = 10.
Fins : P2 à 4, P3 à 9, P1 à 10.

6. C'est un interblocage : chacun détient une ressource et attend celle de l'autre, aucun ne peut avancer. Pour l'éviter, on impose que tous les processus demandent les ressources dans le même ordre (par exemple le fichier, puis l'imprimante), ou qu'un processus demande toutes ses ressources d'un coup.`,
      grille: [
        { c: "Ex. 1, questions 1 et 2 : clés et lecture de requête", pts: 2 },
        { c: "Ex. 1, questions 3 et 4 : requêtes SELECT, tri et jointure", pts: 2.5 },
        { c: "Ex. 1, questions 5 et 6 : UPDATE et contrainte de référence", pts: 1.5 },
        { c: "Ex. 2, questions 1 à 3 : arbre, taille, hauteur, parcours", pts: 3.5 },
        { c: "Ex. 2, questions 4 et 5 : fonctions récursives taille et appartient", pts: 3 },
        { c: "Ex. 2, question 6 : arbre déséquilibré", pts: 0.5 },
        { c: "Ex. 3, questions 1 à 4 : coûts, routes RIP et OSPF, panne", pts: 4.5 },
        { c: "Ex. 3, questions 5 et 6 : tourniquet et interblocage", pts: 2.5 },
      ] },
  ],
};
