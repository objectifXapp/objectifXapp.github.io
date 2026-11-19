// Musique (enseignement de spécialité arts, musique), terminale générale. Sources : voir matiere.sources.
// Programme : BO spécial n° 8 du 25 juillet 2019 (terminale). Programme limitatif 2026-2027 : BO n° 4 du 22 janvier 2026, annexe 6. Épreuve : note de service du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026), en vigueur à la session 2027.
export default {
  matiere: {
    id: 'musique',
    nom: 'Musique',
    voie: 'generale',
    epreuve: {"type":"ecrit+pratique","duree":210,"coef":16,"quand":"juin (écrit) ; oral selon le calendrier de l'académie","note":"Écrit de 3 h 30 noté sur 20, aucun document autorisé : trois exercices indépendants. 1) Description d'un bref extrait d'une œuvre hors programme limitatif, diffusé plusieurs fois (30 à 45 minutes ; 6 points aux sujets 2026). 2) Commentaire comparé de deux extraits, dont un du programme limitatif, guidé par des entrées d'analyse, avec la partition ou une représentation graphique de l'autre extrait (1 h 45 à 2 h 15 ; 8 points en 2026). 3) Bref commentaire d'un document sur la vie musicale contemporaine, en répondant à plusieurs questions et en le reliant à au moins un champ de questionnement (45 minutes à 1 heure ; 6 points en 2026). Oral de 30 minutes sans préparation noté sur 20 : interprétation d'une création collective de l'année avec un ou plusieurs partenaires, puis exposé de la démarche (15 minutes au plus en tout), puis entretien ; interprétation 15 points, exposé et entretien 5 points ; 5 points retirés à un candidat qui se présente seul. Chaque partie compte pour la moitié de la note."},
    sources: [
      "https://www.education.gouv.fr/bo/2026/Special4/MENE2622657N",
      "https://www.education.gouv.fr/bo/2026/Hebdo4/MENE2536492N",
      "https://eduscol.education.fr/document/71039/download",
      "https://eduscol.education.fr/document/24964/download",
      "https://eduscol.education.fr/document/24958/download",
      "https://eduscol.education.fr/document/25003/download",
      "https://www.cafepedagogique.net/wp-content/uploads/2026/06/26-AMUSME1.pdf",
      "https://eduscol.education.gouv.fr/sites/default/files/document/26-amusag1-128295.pdf",
    ],
    chapitres: [
      { id: "musique-1", t: "L'épreuve de musique au bac 2027", theme: "Méthode de l'épreuve" },
      { id: "musique-2", t: "Décrire ce qu'on entend : les paramètres du son", theme: "Écoute et vocabulaire" },
      { id: "musique-3", t: "Écritures, textures et formes", theme: "Écoute et vocabulaire" },
      { id: "musique-4", t: "Porgy and Bess : l'opéra de Gershwin", theme: "Programme limitatif" },
      { id: "musique-5", t: "Ella et Louis : l'album Porgy and Bess (1958)", theme: "Programme limitatif" },
      { id: "musique-6", t: "Le langage du jazz vocal", theme: "Programme limitatif" },
      { id: "musique-7", t: "C. P. E. Bach et le style sensible", theme: "Programme limitatif" },
      { id: "musique-8", t: "Écouter l'Allegro assai du concerto Wq 172", theme: "Programme limitatif" },
      { id: "musique-9", t: "Ars nova et ars subtilior : la musique du XIVe siècle", theme: "Programme limitatif" },
      { id: "musique-10", t: "Écritures, formes, graphismes : les quatre pièces", theme: "Programme limitatif" },
      { id: "musique-11", t: "Champ 1 : le son, la musique, l'espace et le temps", theme: "Champs de questionnement" },
      { id: "musique-12", t: "Champ 2 : la musique, l'homme et la société", theme: "Champs de questionnement" },
      { id: "musique-13", t: "Champ 3 : culture musicale dans l'histoire et la géographie", theme: "Champs de questionnement" },
      { id: "musique-14", t: "La vie musicale contemporaine : métiers, droits, économie", theme: "Vie musicale contemporaine" },
      { id: "musique-15", t: "Méthode : description et commentaire comparé", theme: "Méthode de l'épreuve" },
      { id: "musique-16", t: "Méthode : réussir l'oral de création collective", theme: "Méthode de l'épreuve" },
    ],
  },
  paquets: [
  { chapitre: "musique-1",
    fiche: `## L'épreuve de musique au bac 2027

La spécialité musique (enseignement de spécialité arts) a un **coefficient 16**. L'épreuve terminale compte deux parties de même poids : un **écrit de 3 h 30** et un **oral de 30 minutes**. Chacune compte pour la **moitié** de la note globale. Le texte qui la définit est la note de service du 11 septembre 2026, en vigueur à partir de la session 2027.

### Ce que l'épreuve évalue
- L'écrit évalue l'**écoute** et la **culture musicales**, et la capacité à situer sa pratique et ses goûts dans la société d'aujourd'hui.
- L'oral évalue la **pratique musicale** mise au service d'un projet : une création collective préparée pendant l'année.
- L'épreuve porte sur le programme de terminale ; les notions de première peuvent servir.

### La partie écrite : trois exercices indépendants
- **Exercice 1 : description d'un bref extrait** d'une œuvre **hors programme limitatif**, identifiée par le sujet (titre, compositeur, date). Il dure de 30 à 45 minutes (40 minutes et 6 points aux sujets de 2026). L'extrait est diffusé plusieurs fois selon un **plan de diffusion** (en 2026 : quatre diffusions séparées par des silences).
- **Exercice 2 : commentaire comparé de deux extraits** (1 h 45 à 2 h 15 ; 1 h 50 et 8 points en 2026). L'un des extraits vient du **programme limitatif** ; l'autre, hors programme, est accompagné de sa **partition** ou d'une **représentation graphique**. Le sujet donne des **entrées d'analyse** (en 2026 : « Traitement de la voix ; Écritures et plans sonores ; Organisation formelle »).
- **Exercice 3 : bref commentaire d'un document sur la vie musicale contemporaine** (45 minutes à 1 heure ; 6 points en 2026). On répond à plusieurs questions et on relie le document à au moins un des trois **champs de questionnement**.
- Aucun document n'est autorisé. Une feuille de papier à musique est fournie pour noter des exemples, et elle se rend avec la copie.
- La note officielle ne fixe pas les points de chaque exercice : les sujets de 2026 ont donné 6, 8 et 6 points.

### La partie orale : 30 minutes sans préparation
- Le candidat **interprète une création collective** élaborée pendant la terminale, avec un ou plusieurs **partenaires** chanteurs ou instrumentistes. Un enregistrement ne peut pas remplacer les partenaires.
- Un candidat qui se présente **seul** perd **5 points**.
- Avant ou après le jeu, il **expose sa démarche** : références, influences, recherches, techniques, choix artistiques, lien avec **au moins une œuvre du programme limitatif** et avec **au moins un champ de questionnement**.
- Interprétation et exposé : 15 minutes au plus ; puis **entretien** avec le jury (deux professeurs de musique).
- Barème : **interprétation 15 points**, **exposé et entretien 5 points**.
- Il peut remettre une **représentation graphique** de la pièce : elle aide l'entretien mais n'est pas notée.
- Il remet un **document de synthèse** de deux pages au plus (œuvres étudiées, écoutées, jouées et créées, thématiques travaillées), visé par le professeur et le chef d'établissement.

### L'oral de contrôle (second groupe)
- 30 minutes sans préparation, en deux parties de même poids : la **pratique** (diffusion de l'enregistrement audio-vidéo d'une pièce collective jouée par au moins deux personnes dont le candidat, puis entretien), puis un **commentaire comparé oral** de deux brefs extraits entendus deux fois, dont un du programme limitatif.

### La maîtrise de la langue
- La clarté et la correction de l'expression comptent dans la note de l'écrit. Une copie défaillante sur l'ensemble de la langue ne peut pas avoir la moyenne.

### À retenir pour le bac
- Coefficient 16 ; écrit de 3 h 30 et oral de 30 minutes, chacun la moitié de la note.
- Écrit : description d'un extrait hors programme, commentaire comparé (un extrait du programme limitatif, l'autre avec partition), document sur la vie musicale contemporaine.
- Oral : création collective jouée avec des partenaires (15 points), exposé et entretien (5 points), moins 5 points si l'on vient seul.
- Préparer le document de synthèse de deux pages.`,
    cartes: [
      { q: "Coefficient de la spécialité musique", r: "16." },
      { q: "Les deux parties de l'épreuve", r: "Un écrit de 3 h 30 et un oral de 30 minutes, chacun pour moitié de la note." },
      { q: "Exercice 1 de l'écrit", r: "Décrire un bref extrait d'une œuvre hors programme limitatif, diffusé plusieurs fois (30 à 45 minutes)." },
      { q: "Exercice 2 de l'écrit", r: "Commentaire comparé de deux extraits, dont un du programme limitatif, guidé par des entrées d'analyse (1 h 45 à 2 h 15)." },
      { q: "Exercice 3 de l'écrit", r: "Bref commentaire d'un document sur la vie musicale contemporaine, relié à un champ de questionnement (45 minutes à 1 heure)." },
      { q: "Points des trois exercices aux sujets 2026", r: "6, 8 et 6 points." },
      { q: "Plan de diffusion", r: "Le calendrier des écoutes et des silences, donné par le sujet." },
      { q: "Ce qui accompagne l'extrait hors programme de l'exercice 2", r: "Sa partition ou une représentation graphique." },
      { q: "Déroulement de l'oral", r: "Interprétation d'une création collective et exposé de la démarche (15 minutes au plus), puis entretien." },
      { q: "Barème de l'oral", r: "Interprétation 15 points, exposé et entretien 5 points." },
      { q: "Candidat seul à l'oral", r: "Il perd 5 points : l'épreuve est collective." },
      { q: "Document de synthèse", r: "Deux pages au plus : œuvres étudiées, écoutées, jouées et créées, thématiques travaillées dans l'année." },
      { q: "Oral de contrôle", r: "Pratique (enregistrement d'une pièce collective et entretien) puis commentaire comparé oral de deux extraits." },
    ],
    quiz: [
      { q: "Combien de temps dure la partie écrite ?",
        choix: ["2 heures", "4 heures", "3 h 30", "3 heures"],
        bonne: 2, niv: 1,
        expl: "L'oral dure 30 minutes." },
      { q: "Quel poids a la partie orale dans la note ?",
        choix: ["Un quart", "La moitié", "Un tiers", "Les trois quarts"],
        bonne: 1, niv: 1,
        expl: "Écrit et oral comptent chacun pour moitié." },
      { q: "D'où vient l'extrait de l'exercice 1 ?",
        choix: ["D'une œuvre du programme limitatif choisie par le candidat", "D'une œuvre inconnue que le candidat doit nommer", "De la création collective jouée pendant l'année", "D'une œuvre hors programme limitatif, identifiée par le sujet"],
        bonne: 3, niv: 2,
        expl: "Le titre et le compositeur sont donnés." },
      { q: "Que donne le sujet pour guider le commentaire comparé ?",
        choix: ["Un plan rédigé à recopier", "Des entrées d'analyse", "La liste des mots à employer", "Le corrigé des deux extraits"],
        bonne: 1, niv: 2,
        expl: "En 2026 : voix, écritures et plans sonores, organisation formelle." },
      { q: "Qu'accompagne la partition dans l'exercice 2 ?",
        choix: ["L'extrait du programme limitatif, pour le reconnaître", "L'extrait hors programme limitatif", "Le document sur la vie musicale", "L'extrait de l'exercice 1"],
        bonne: 1, niv: 3,
        expl: "Elle permet d'approfondir ce qu'on a repéré à l'écoute." },
      { q: "Combien de points valait le commentaire comparé aux sujets 2026 ?",
        choix: ["6 points", "4 points", "8 points", "5 points"],
        bonne: 2, niv: 2,
        expl: "Les deux autres exercices valaient 6 points chacun." },
      { q: "Que doit faire l'exercice 3 avec le document ?",
        choix: ["Le résumer sans le commenter, paragraphe par paragraphe", "Le comparer à un extrait diffusé", "En corriger les erreurs de date", "Le relier à au moins un champ de questionnement"],
        bonne: 3, niv: 2,
        expl: "On répond aux questions posées par le sujet." },
      { q: "Combien de points vaut l'interprétation à l'oral ?",
        choix: ["5 points", "10 points", "15 points", "20 points"],
        bonne: 2, niv: 1,
        expl: "L'exposé et l'entretien valent 5 points." },
      { q: "Que se passe-t-il si le candidat vient seul à l'oral ?",
        choix: ["Il perd 5 points", "Il joue sur un enregistrement", "Il passe un oral de 15 minutes", "Le jury lui donne un partenaire"],
        bonne: 0, niv: 2,
        expl: "Un enregistrement ne peut pas remplacer les partenaires." },
      { q: "Avec quoi le candidat doit-il relier sa création à l'oral ?",
        choix: ["Une œuvre de son choix et le document de l'écrit", "Le sujet de l'écrit et une œuvre de première", "Une œuvre du programme limitatif et un champ de questionnement", "Une partition éditée et un enregistrement célèbre"],
        bonne: 2, niv: 3,
        expl: "Il le précise dans l'exposé et dans l'entretien." },
      { q: "Que contient le document de synthèse ?",
        choix: ["La partition complète de la création, avec chaque partie", "Le texte de l'exposé, rédigé mot à mot", "Les notes du contrôle continu de l'année", "Les œuvres et les thématiques travaillées dans l'année, en deux pages"],
        bonne: 3, niv: 3,
        expl: "Il est visé par le professeur et le chef d'établissement." },
    ] },
  { chapitre: "musique-2",
    fiche: `## Décrire ce qu'on entend : les paramètres du son

La grille officielle de l'exercice 1 demande un « vocabulaire musical adapté ». Décrire, c'est nommer précisément ce qu'on entend, paramètre par paramètre, puis dire comment ces éléments s'organisent dans le temps.

### Le timbre et la formation
- Le **timbre** est la couleur propre d'un son : il permet de distinguer une flûte d'un violon jouant la même note.
- Nommer la **formation** : voix seule, chœur, quatuor à cordes (deux violons, alto, violoncelle), orchestre symphonique (cordes, bois, cuivres, percussions), big band (saxophones, trompettes, trombones, section rythmique), ensemble électronique.
- Préciser les **modes de jeu** : pizzicato (cordes pincées), arco (avec l'archet), sourdine, vibrato, trémolo, glissando.
- Pour la voix : soprano, mezzo-soprano, alto, ténor, baryton, basse ; voix lyrique, voix parlée, voix rauque.

### La hauteur et la mélodie
- **Registre** : grave, médium, aigu. **Ambitus** : l'écart entre la note la plus grave et la plus aiguë d'une ligne.
- Mouvement **conjoint** (notes voisines) ou **disjoint** (sauts).
- **Mode** : majeur (souvent ressenti comme lumineux) ou mineur ; gamme **pentatonique** (cinq notes) ; échelle modale.
- **Tonalité** et **modulation** (changement de tonalité) ; **cadence** (formule de fin de phrase).
- **Motif** (cellule courte), **thème** (idée principale), **phrase**.

### Le rythme et le temps
- **Pulsation** : le battement régulier qu'on peut taper du pied.
- **Tempo** : la vitesse de la pulsation (lento, andante, moderato, allegro, presto) ; **accelerando**, **ritardando**, **rubato** (temps souple).
- **Mesure** : binaire (temps divisé en deux) ou ternaire (temps divisé en trois).
- **Syncope** et **contretemps** : accents décalés par rapport aux temps.
- **Ostinato** : motif répété obstinément ; **riff** en jazz et en rock.

### Les nuances et l'articulation
- Nuances : pianissimo (pp), piano (p), mezzo forte (mf), forte (f), fortissimo (ff) ; **crescendo** (de plus en plus fort), **decrescendo**.
- Articulation : **legato** (lié), **staccato** (détaché), accent.

### Le vocabulaire juste
- Éviter les mots vagues (« joli », « rapide ») sans les préciser : dire « tempo rapide, allegro, mesure binaire ».
- Situer chaque remarque dans le temps : « à 0'45 », « au début », « dans la seconde partie ».
- Relier les éléments : un crescendo qui prépare le retour du thème vaut plus qu'un crescendo noté seul.

### À retenir pour le bac
- Timbre et formation, hauteur et mélodie, rythme et tempo, nuances et articulation : quatre familles de paramètres.
- Toujours nommer précisément (pizzicato, ostinato, syncope, modulation) et situer dans le temps.
- Décrire ne suffit pas : dire comment les éléments s'organisent et évoluent.`,
    cartes: [
      { q: "Timbre", r: "La couleur propre d'un son, qui distingue deux instruments jouant la même note." },
      { q: "Pizzicato", r: "Corde pincée avec le doigt au lieu d'être jouée à l'archet." },
      { q: "Ambitus", r: "L'écart entre la note la plus grave et la note la plus aiguë d'une ligne." },
      { q: "Mouvement conjoint", r: "Une mélodie qui avance par notes voisines." },
      { q: "Mouvement disjoint", r: "Une mélodie qui avance par sauts." },
      { q: "Gamme pentatonique", r: "Une échelle de cinq notes." },
      { q: "Modulation", r: "Le passage d'une tonalité à une autre." },
      { q: "Pulsation", r: "Le battement régulier sous la musique." },
      { q: "Tempo", r: "La vitesse de la pulsation : lento, andante, allegro, presto." },
      { q: "Mesure ternaire", r: "Une mesure dont chaque temps se divise en trois." },
      { q: "Syncope", r: "Un son attaqué sur une partie faible et prolongé sur le temps fort suivant." },
      { q: "Ostinato", r: "Un motif répété obstinément, souvent à la basse ou en accompagnement." },
      { q: "Rubato", r: "Une souplesse du tempo laissée à l'interprète." },
      { q: "Legato et staccato", r: "Lié et détaché." },
    ],
    quiz: [
      { q: "Quel paramètre permet de distinguer une flûte d'un violon jouant la même note ?",
        choix: ["La hauteur", "Le timbre", "Le tempo", "La nuance"],
        bonne: 1, niv: 1,
        expl: "Le timbre est la couleur du son." },
      { q: "Que signifie pizzicato ?",
        choix: ["Corde frottée avec l'archet", "Note répétée très vite", "Son glissé d'une note à l'autre", "Corde pincée avec le doigt"],
        bonne: 3, niv: 1,
        expl: "Arco désigne le jeu à l'archet." },
      { q: "Comment appelle-t-on l'écart entre la note la plus grave et la plus aiguë d'une mélodie ?",
        choix: ["L'ambitus", "Le registre", "L'intervalle", "La tessiture de l'orchestre"],
        bonne: 0, niv: 2,
        expl: "Le registre dit si l'on est dans le grave ou l'aigu." },
      { q: "Une mélodie qui avance par notes voisines a un mouvement…",
        choix: ["Disjoint", "Contraire", "Conjoint", "Parallèle"],
        bonne: 2, niv: 1,
        expl: "Disjoint : par sauts." },
      { q: "Combien de notes compte une gamme pentatonique ?",
        choix: ["Sept", "Six", "Cinq", "Huit"],
        bonne: 2, niv: 1,
        expl: "Penta signifie cinq." },
      { q: "Que désigne une modulation ?",
        choix: ["Le passage d'une tonalité à une autre", "Le changement de tempo au milieu d'une pièce", "Une variation de nuance", "L'ajout d'un nouvel instrument"],
        bonne: 0, niv: 2,
        expl: "On l'entend souvent à un changement de couleur harmonique." },
      { q: "Dans une mesure ternaire, chaque temps se divise en…",
        choix: ["Deux", "Quatre", "Six", "Trois"],
        bonne: 3, niv: 2,
        expl: "La mesure binaire divise le temps en deux." },
      { q: "Comment appelle-t-on un motif répété obstinément ?",
        choix: ["Un rubato", "Un ostinato", "Un crescendo", "Une cadence"],
        bonne: 1, niv: 1,
        expl: "En jazz et en rock, on parle aussi de riff." },
      { q: "Que désigne le rubato ?",
        choix: ["Un ralentissement écrit par le compositeur à la fin de la pièce", "Une accélération progressive du tempo", "Un jeu très détaché", "Une souplesse du tempo laissée à l'interprète"],
        bonne: 3, niv: 3,
        expl: "Le tempo est étiré puis rattrapé." },
      { q: "Quelle formulation convient le mieux dans une copie ?",
        choix: ["La musique est jolie et assez rapide", "On entend des instruments sympas", "C'est une musique joyeuse", "Tempo rapide, mesure binaire, ostinato à la basse"],
        bonne: 3, niv: 2,
        expl: "Il faut nommer les paramètres avec précision." },
      { q: "Pourquoi situer ses remarques dans le temps ?",
        choix: ["Pour prouver au correcteur qu'on a bien écouté l'extrait en entier", "Pour remplir la copie plus vite", "Pour montrer l'organisation et l'évolution de l'extrait", "Parce que le correcteur ne connaît pas l'extrait"],
        bonne: 2, niv: 3,
        expl: "La grille demande l'organisation musicale." },
    ] },
  { chapitre: "musique-3",
    fiche: `## Écritures, textures et formes

Après les paramètres du son, il faut décrire **comment les voix se combinent** (l'écriture ou texture) et **comment la pièce est construite** (la forme). C'est ce que les sujets appellent « écritures et plans sonores » et « organisation formelle ».

### Les écritures
- **Monodie** : une seule ligne mélodique, chantée ou jouée, sans accompagnement (le chant grégorien).
- **Polyphonie** : plusieurs lignes mélodiques indépendantes en même temps.
- **Homorythmie** : toutes les voix ont le même rythme, elles avancent ensemble (un choral).
- **Mélodie accompagnée** : une ligne principale au premier plan, un accompagnement au second plan.
- **Contrepoint** : l'art de superposer des lignes indépendantes.
- **Imitation** : une voix reprend un motif déjà entendu dans une autre voix.
- **Canon** : une voix est imitée exactement, du début à la fin, par une ou plusieurs autres qui entrent en décalé.
- **Bourdon** : une note tenue ou répétée sous la mélodie.
- **Unisson** : plusieurs voix sur la même note ; **octave** : la même note dans un autre registre.
- **Question-réponse** : deux groupes ou deux instruments qui se répondent.

### Les plans sonores
- Repérer ce qui est **au premier plan** (la mélodie, le soliste) et ce qui est **au second plan** (accompagnement, tenues).
- Repérer les **changements de densité** : un instrument seul, puis un tutti (tout l'ensemble).
- Dans un enregistrement, la place des sons dans l'espace stéréo (gauche, droite, proche, lointain) fait partie des plans.

### Les formes
- **Strophique** ou **couplet-refrain** : couplets aux paroles différentes sur la même musique, refrain qui revient.
- **Forme ABA** : une partie, une partie contrastée, le retour de la première (aria da capo, menuet et trio).
- **Rondo** : un refrain qui revient entre des couplets différents (ABACA).
- **Thème et variations** : un thème, puis des reprises transformées.
- **Forme AABA** : forme de chanson en 32 mesures (quatre phrases de 8), très courante dans les standards de Broadway et du jazz ; la partie B s'appelle le **pont** (bridge).
- **Blues de 12 mesures** : une grille harmonique fixe qui se répète.
- **Forme ritournelle** : un refrain d'orchestre (le tutti) qui revient, varié et dans plusieurs tonalités, entre des épisodes du soliste (concerto baroque et préclassique).
- **Forme sonate** : exposition de deux thèmes, développement, réexposition (premier mouvement de la symphonie classique).
- Médiévales : les **formes fixes** de la poésie chantée (rondeau, ballade, virelai), avec refrain.

### Décrire une forme
- Indiquer les **repères** : retour d'un thème, changement de tempo, de nuance, d'effectif, silence.
- Représenter la forme par des lettres (A, B, A') et des minutages.
- Dire ce qui fait l'**unité** (répétitions, retour) et ce qui fait la **variété** (contrastes).

### À retenir pour le bac
- Écritures : monodie, polyphonie, homorythmie, mélodie accompagnée, imitation, canon, bourdon.
- Plans sonores : premier plan, second plan, densité, tutti.
- Formes : couplet-refrain, ABA, rondo, variations, AABA (32 mesures), blues, ritournelle, sonate, formes fixes.
- Décrire la forme avec des lettres et des repères entendus.`,
    cartes: [
      { q: "Monodie", r: "Une seule ligne mélodique, sans accompagnement." },
      { q: "Polyphonie", r: "Plusieurs lignes mélodiques indépendantes en même temps." },
      { q: "Homorythmie", r: "Toutes les voix avancent avec le même rythme." },
      { q: "Imitation", r: "Une voix reprend un motif entendu dans une autre voix." },
      { q: "Canon", r: "Une voix imitée exactement et en entier par d'autres qui entrent en décalé." },
      { q: "Bourdon", r: "Une note tenue ou répétée sous la mélodie." },
      { q: "Tutti", r: "Tout l'ensemble joue." },
      { q: "Forme ABA", r: "Une partie, une partie contrastée, puis le retour de la première." },
      { q: "Rondo", r: "Un refrain qui revient entre des couplets différents : ABACA." },
      { q: "Forme AABA", r: "Chanson de 32 mesures en quatre phrases de 8 ; B est le pont." },
      { q: "Pont (bridge)", r: "La partie B contrastée d'une forme AABA." },
      { q: "Forme ritournelle", r: "Un refrain d'orchestre qui revient entre des épisodes du soliste." },
      { q: "Formes fixes médiévales", r: "Rondeau, ballade, virelai : poésie chantée avec refrain." },
    ],
    quiz: [
      { q: "Comment appelle-t-on une seule ligne mélodique sans accompagnement ?",
        choix: ["Une polyphonie", "Une monodie", "Une homorythmie", "Un canon"],
        bonne: 1, niv: 1,
        expl: "Le chant grégorien en est l'exemple type." },
      { q: "Que désigne l'homorythmie ?",
        choix: ["Une voix reprend exactement une autre voix en décalé", "Une note tenue sous la mélodie", "Toutes les voix avancent avec le même rythme", "Deux groupes qui se répondent"],
        bonne: 2, niv: 2,
        expl: "On l'entend dans un choral." },
      { q: "Quelle écriture reprend une ligne exactement et en entier, en décalé ?",
        choix: ["La mélodie accompagnée", "La monodie", "Le canon", "Le bourdon"],
        bonne: 2, niv: 1,
        expl: "L'imitation, elle, peut être partielle." },
      { q: "Que signifie tutti ?",
        choix: ["Le soliste joue seul", "Tout l'ensemble joue", "Les cordes jouent pincé", "Le chœur chante à voix basse"],
        bonne: 1, niv: 1,
        expl: "C'est un changement de densité." },
      { q: "Quel schéma correspond au rondo ?",
        choix: ["ABACA", "AABA", "ABA", "AAAA"],
        bonne: 0, niv: 2,
        expl: "Le refrain A revient entre des couplets différents." },
      { q: "Combien de mesures compte la forme AABA classique des standards ?",
        choix: ["12", "16", "24", "32"],
        bonne: 3, niv: 2,
        expl: "Quatre phrases de 8 mesures." },
      { q: "Comment s'appelle la partie B d'une forme AABA ?",
        choix: ["Le refrain", "Le pont", "La coda", "Le couplet"],
        bonne: 1, niv: 2,
        expl: "En anglais : bridge." },
      { q: "Dans quelle forme un refrain d'orchestre revient-il entre des épisodes du soliste ?",
        choix: ["La forme ritournelle", "La forme sonate", "Le thème et variations", "La forme strophique"],
        bonne: 0, niv: 2,
        expl: "C'est la forme des concertos baroques et préclassiques." },
      { q: "Quelles sont les formes fixes de la poésie chantée médiévale ?",
        choix: ["Rondeau, ballade, virelai", "Sonate, rondo, menuet", "Fugue, choral, prélude", "Blues, standard, ballade de jazz"],
        bonne: 0, niv: 3,
        expl: "Elles comportent un refrain." },
      { q: "Que faut-il dire pour décrire une forme ?",
        choix: ["Le nombre exact de mesures de chaque partie, compté à l'écoute", "La tonalité de chaque accord entendu", "La date de composition de chaque partie", "Les repères entendus et ce qui fait l'unité et la variété"],
        bonne: 3, niv: 3,
        expl: "Lettres, minutages, retours et contrastes." },
      { q: "Qu'est-ce qu'un bourdon ?",
        choix: ["Un instrument à vent grave de l'orchestre", "Une voix qui imite la précédente", "Un accord dissonant final", "Une note tenue ou répétée sous la mélodie"],
        bonne: 3, niv: 2,
        expl: "On l'entend dans beaucoup de musiques traditionnelles." },
    ] },
  { chapitre: "musique-4",
    fiche: `## Porgy and Bess : l'opéra de Gershwin

La partie renouvelée du programme limitatif 2026-2027 est l'album **Porgy and Bess** de **Louis Armstrong** et **Ella Fitzgerald** (Verve Records, 1958). Pour le comprendre, il faut d'abord connaître l'œuvre d'origine : l'opéra de **George Gershwin**.

### L'œuvre et ses auteurs
- **George Gershwin** (1898-1937), compositeur new-yorkais venu de la chanson de Broadway, déjà célèbre pour **Rhapsody in Blue** (1924), qui mêle orchestre symphonique et couleurs du jazz.
- Le livret est de **DuBose Heyward**, d'après son roman **Porgy** (1925) et la pièce qu'il en a tirée avec Dorothy Heyward ; les paroles des chansons sont de DuBose Heyward et d'**Ira Gershwin**, frère du compositeur.
- L'opéra est créé en **1935** (Boston, puis Broadway). Gershwin l'appelle un **opéra populaire** (« folk opera »).
- Il est écrit pour une distribution de chanteurs **afro-américains** et un orchestre d'opéra.

### L'histoire
- Le cadre : **Catfish Row**, un quartier noir et pauvre de **Charleston**, en Caroline du Sud, une communauté de pêcheurs.
- **Porgy**, mendiant infirme, aime **Bess**, la compagne du violent **Crown**. Après un meurtre commis par Crown, Bess se réfugie chez Porgy, qui la protège.
- **Sportin' Life**, trafiquant cynique, veut l'emmener à New York. Porgy tue Crown. Pendant qu'il est retenu par la police, Bess part avec Sportin' Life.
- À la fin, Porgy décide de partir à pied pour New York la retrouver : c'est **Oh Lawd, I'm on My Way**.

### Les chansons de l'album dans l'opéra
- **Summertime** : la berceuse que **Clara** chante à son bébé au tout début de l'opéra. Mélodie lente, couleur mineure, accompagnement berçant.
- **I Got Plenty o' Nuttin'** : Porgy, heureux depuis que Bess vit avec lui, chante qu'il n'a rien mais qu'il ne lui manque rien. Chanson légère, accompagnée au banjo dans l'opéra.
- **It Ain't Necessarily So** : Sportin' Life se moque des récits de la Bible (David et Goliath, Jonas, Moïse) pendant un pique-nique : ironie et provocation.
- **Oh Lawd, I'm on My Way** : le chant final de Porgy et de la communauté, dans l'esprit d'un **spiritual**, chant religieux afro-américain.

### Un opéra entre deux mondes
- Gershwin mêle l'**opéra** (récitatifs, airs, chœurs, grand orchestre) et des couleurs venues des musiques afro-américaines : **blues**, **spirituals**, **jazz**, chants de travail.
- Les chansons ont une forme courte et nette, proche des chansons de Broadway : elles ont pu sortir de l'opéra et devenir des **standards**, repris par des milliers de musiciens.
- L'œuvre fait débat depuis sa création : elle donne une grande place à des artistes noirs, mais elle est écrite par des auteurs blancs et montre une communauté pauvre avec des clichés. Ce débat nourrit le champ « La musique, l'homme et la société ».

### Pourquoi l'album de 1958 ?
- Parce qu'il montre comment une œuvre **change de monde** : un opéra devient un disque de jazz vocal, avec deux grands interprètes.
- Il invite à **comparer des interprétations** : la version d'opéra, l'album d'Armstrong et Fitzgerald, d'autres reprises (par exemple l'album **Porgy and Bess** de **Miles Davis** et **Gil Evans**, enregistré en 1958).

### À retenir pour le bac
- Opéra de George Gershwin (1935), livret de DuBose Heyward, paroles de Heyward et Ira Gershwin ; « folk opera ».
- Cadre : Catfish Row, Charleston ; Porgy, Bess, Crown, Sportin' Life, Clara.
- Summertime (berceuse de Clara), I Got Plenty o' Nuttin' (Porgy heureux), It Ain't Necessarily So (Sportin' Life ironique), Oh Lawd, I'm on My Way (départ final).
- Mélange d'opéra et de musiques afro-américaines ; des chansons devenues standards.`,
    cartes: [
      { q: "Compositeur de l'opéra Porgy and Bess", r: "George Gershwin (1898-1937)." },
      { q: "Année de création de l'opéra", r: "1935." },
      { q: "Auteur du livret", r: "DuBose Heyward, d'après son roman Porgy ; paroles des chansons avec Ira Gershwin." },
      { q: "Nom donné par Gershwin à son œuvre", r: "Un opéra populaire, « folk opera »." },
      { q: "Cadre de l'opéra", r: "Catfish Row, quartier noir et pauvre de Charleston (Caroline du Sud)." },
      { q: "Porgy", r: "Mendiant infirme qui aime Bess et la protège." },
      { q: "Sportin' Life", r: "Trafiquant cynique qui emmène Bess à New York." },
      { q: "Qui chante Summertime dans l'opéra ?", r: "Clara, qui berce son bébé au début de l'opéra." },
      { q: "Sujet de I Got Plenty o' Nuttin'", r: "Porgy n'a rien, mais il est heureux depuis que Bess vit avec lui." },
      { q: "Sujet de It Ain't Necessarily So", r: "Sportin' Life se moque des récits de la Bible." },
      { q: "Sujet de Oh Lawd, I'm on My Way", r: "Le départ de Porgy vers New York pour retrouver Bess, chant final." },
      { q: "Spiritual", r: "Chant religieux afro-américain." },
      { q: "Album d'une autre interprétation, enregistré en 1958", r: "Porgy and Bess de Miles Davis et Gil Evans." },
    ],
    quiz: [
      { q: "Qui a composé l'opéra Porgy and Bess ?",
        choix: ["Duke Ellington", "George Gershwin", "Leonard Bernstein", "Cole Porter"],
        bonne: 1, niv: 1,
        expl: "Son frère Ira a écrit une partie des paroles." },
      { q: "En quelle année l'opéra est-il créé ?",
        choix: ["1935", "1924", "1928", "1931"],
        bonne: 0, niv: 1,
        expl: "1924 est l'année de Rhapsody in Blue." },
      { q: "Où se passe l'histoire ?",
        choix: ["À Catfish Row, à Charleston", "À Harlem, à New York", "À La Nouvelle-Orléans, dans le quartier français", "À Chicago, près du lac"],
        bonne: 0, niv: 2,
        expl: "C'est un quartier de pêcheurs en Caroline du Sud." },
      { q: "Comment Gershwin a-t-il appelé son œuvre ?",
        choix: ["Une comédie musicale de Broadway", "Un poème symphonique avec voix", "Un opéra populaire, « folk opera »", "Une suite de jazz pour big band"],
        bonne: 2, niv: 2,
        expl: "Il revendique le genre de l'opéra." },
      { q: "Qui chante Summertime dans l'opéra ?",
        choix: ["Porgy, pour séduire Bess", "Sportin' Life, au pique-nique", "Clara, pour bercer son bébé", "Crown, avant de mourir"],
        bonne: 2, niv: 2,
        expl: "C'est une berceuse." },
      { q: "Que raconte It Ain't Necessarily So ?",
        choix: ["Porgy dit qu'il n'a besoin de rien depuis que Bess est là", "Sportin' Life se moque des récits de la Bible", "Bess promet de rester avec Porgy", "Le chœur pleure la mort de Crown"],
        bonne: 1, niv: 2,
        expl: "David, Goliath, Jonas, Moïse sont tournés en dérision." },
      { q: "Quel personnage emmène Bess à New York ?",
        choix: ["Crown, son ancien compagnon", "Sportin' Life", "Porgy", "Jake"],
        bonne: 1, niv: 1,
        expl: "Porgy part ensuite la retrouver." },
      { q: "Que chante Porgy dans I Got Plenty o' Nuttin' ?",
        choix: ["Qu'il n'a rien mais qu'il est heureux", "Qu'il veut quitter Charleston au plus vite", "Qu'il regrette d'avoir tué Crown", "Qu'il prie Dieu de lui rendre ses jambes"],
        bonne: 0, niv: 2,
        expl: "Bess vit avec lui." },
      { q: "Quel genre afro-américain inspire Oh Lawd, I'm on My Way ?",
        choix: ["Le rap", "Le spiritual", "Le ragtime de piano", "Le rock'n'roll"],
        bonne: 1, niv: 3,
        expl: "C'est un chant religieux." },
      { q: "Pourquoi l'œuvre fait-elle débat ?",
        choix: ["Elle a été interdite dans les théâtres américains jusqu'en 1958", "Elle montre une communauté noire avec des clichés, écrite par des auteurs blancs", "Elle ne contient pas de rôle pour des chanteurs noirs", "Elle copie un opéra italien du XIXe siècle"],
        bonne: 1, niv: 3,
        expl: "Elle a aussi donné une grande place à des artistes noirs." },
      { q: "Quelle autre interprétation de Porgy and Bess a été enregistrée en 1958 ?",
        choix: ["Celle de Miles Davis et Gil Evans", "Celle des Beatles", "Celle d'Édith Piaf", "Celle de Jimi Hendrix"],
        bonne: 0, niv: 3,
        expl: "Elle est instrumentale, pour trompette et grand orchestre." },
    ] },
  { chapitre: "musique-5",
    fiche: `## Ella et Louis : l'album Porgy and Bess (1958)

Le programme limitatif retient cinq plages de l'album **Porgy and Bess** de **Louis Armstrong** et **Ella Fitzgerald**, publié par **Verve Records** (1958) : **Ouverture**, **Summertime**, **I Got Plenty O' Nuttin'**, **It Ain't Necessarily So**, **Oh Lawd, I'm on My Way!**. Les arrangements et la direction de l'orchestre sont de **Russell Garcia**.

### Deux interprètes, deux voix
- **Louis Armstrong** (1901-1971), né à La Nouvelle-Orléans, trompettiste et chanteur. Dans les années 1920, ses enregistrements avec les **Hot Five** font du soliste improvisateur le centre du jazz ; il popularise le **scat**. Sa voix est **rauque**, granuleuse, très expressive ; il place souvent ses phrases un peu en retard sur le temps.
- **Ella Fitzgerald** (1917-1996), surnommée « la First Lady of Song ». Voix **claire**, justesse très sûre, grand **ambitus**, diction nette ; virtuose du scat.
- Le contraste des deux timbres est un premier axe d'analyse : douceur et précision d'un côté, rugosité et chaleur de l'autre.

### Le contexte du disque
- Verve est le label fondé en 1956 par le producteur **Norman Granz**, qui réunit déjà Ella et Louis sur deux albums de duos (Ella and Louis, 1956 ; Ella and Louis Again, 1957).
- C'est l'époque du **microsillon** (disque 33 tours) : un album entier peut parcourir une œuvre, et non plus une seule chanson.
- L'album ne reprend pas tout l'opéra : il choisit des airs et des duos, chantés par deux voix de jazz au lieu de voix lyriques.

### Ce que change l'arrangement
- **Effectif** : un grand orchestre de studio, avec **cordes**, bois et cuivres, et une **section rythmique** de jazz (piano, contrebasse, batterie, guitare).
- **Ouverture** : une page **orchestrale sans chant**, qui enchaîne des thèmes de l'opéra comme une ouverture d'opéra ou de comédie musicale.
- **Summertime** : tempo lent, couleur mineure, cordes en nappes ; la **trompette** d'Armstrong et les deux voix se partagent la mélodie.
- **It Ain't Necessarily So** : l'ironie de Sportin' Life passe par une voix qui joue avec le texte, des inflexions parlées et un accompagnement plus léger.
- **I Got Plenty O' Nuttin'** : chanson vive et gaie, d'une simplicité de chanson populaire.
- **Oh Lawd, I'm on My Way!** : un final plein d'élan, élargissement de l'orchestre, esprit du spiritual.

### Ce qu'il faut savoir entendre
- La **liberté rythmique** des chanteurs : notes anticipées ou retardées, **swing**.
- Les **ornements vocaux** : glissés, vibrato en fin de note, notes **bleues**.
- Les interventions de la **trompette** d'Armstrong, entre ou après les phrases chantées.
- Le **dialogue** entre la voix et l'orchestre : réponses instrumentales, tenues des cordes.
- La **forme** de chaque plage : introduction, exposition de la mélodie, éventuel solo, reprise, coda.

### Comparer les interprétations
- L'opéra, avec des voix lyriques et un orchestre d'opéra.
- L'album de Miles Davis et Gil Evans (1958) : les mêmes airs **sans paroles**, la trompette remplace la voix.
- D'innombrables reprises de Summertime, du jazz au rock.

### À retenir pour le bac
- Louis Armstrong et Ella Fitzgerald, Porgy and Bess, Verve Records, 1958 ; arrangements et direction de Russell Garcia.
- Cinq plages : Ouverture (orchestrale), Summertime, I Got Plenty O' Nuttin', It Ain't Necessarily So, Oh Lawd, I'm on My Way!
- Contraste des voix : Ella claire et précise, Louis rauque et expressif ; trompette d'Armstrong.
- Un opéra devenu disque de jazz vocal : orchestre avec cordes et section rythmique, swing, liberté rythmique.`,
    cartes: [
      { q: "Interprètes de l'album du programme", r: "Louis Armstrong et Ella Fitzgerald." },
      { q: "Label et année de l'album", r: "Verve Records, 1958." },
      { q: "Arrangeur et chef de l'orchestre de l'album", r: "Russell Garcia." },
      { q: "Les cinq plages au programme", r: "Ouverture, Summertime, I Got Plenty O' Nuttin', It Ain't Necessarily So, Oh Lawd, I'm on My Way!" },
      { q: "Particularité de l'Ouverture", r: "Une page orchestrale sans chant, qui enchaîne des thèmes de l'opéra." },
      { q: "Voix de Louis Armstrong", r: "Rauque, granuleuse, très expressive, souvent en léger retard sur le temps." },
      { q: "Voix d'Ella Fitzgerald", r: "Claire, très juste, grand ambitus, diction nette." },
      { q: "Instrument de Louis Armstrong", r: "La trompette." },
      { q: "Fondateur du label Verve", r: "Le producteur Norman Granz, en 1956." },
      { q: "Hot Five", r: "Le groupe de Louis Armstrong dans les années 1920, qui met le soliste improvisateur au centre du jazz." },
      { q: "Surnom d'Ella Fitzgerald", r: "La First Lady of Song." },
      { q: "Effectif de l'album", r: "Un grand orchestre de studio avec cordes et une section rythmique de jazz." },
      { q: "Différence avec l'opéra", r: "Des voix de jazz au lieu de voix lyriques, et une sélection d'airs au lieu de l'opéra entier." },
    ],
    quiz: [
      { q: "Qui interprète l'album Porgy and Bess au programme ?",
        choix: ["Louis Armstrong et Ella Fitzgerald", "Miles Davis et Gil Evans", "Billie Holiday et Lester Young", "Frank Sinatra et l'orchestre de Count Basie"],
        bonne: 0, niv: 1,
        expl: "Miles Davis et Gil Evans ont fait un autre album en 1958." },
      { q: "Sur quel label l'album est-il publié ?",
        choix: ["Blue Note", "Columbia Records, à New York", "Verve Records", "Motown"],
        bonne: 2, niv: 1,
        expl: "Verve est fondé par Norman Granz." },
      { q: "Qui signe les arrangements de l'album ?",
        choix: ["George Gershwin", "Russell Garcia", "Norman Granz", "Gil Evans"],
        bonne: 1, niv: 2,
        expl: "Il dirige aussi l'orchestre." },
      { q: "Quelle plage du programme est purement orchestrale ?",
        choix: ["Summertime", "It Ain't Necessarily So", "Oh Lawd, I'm on My Way!", "L'Ouverture"],
        bonne: 3, niv: 1,
        expl: "Elle enchaîne des thèmes de l'opéra." },
      { q: "Comment décrire la voix de Louis Armstrong ?",
        choix: ["Claire et lyrique, d'une grande pureté", "Aiguë et légère comme celle d'un enfant", "Rauque et très expressive", "Neutre et sans vibrato"],
        bonne: 2, niv: 1,
        expl: "Elle contraste avec celle d'Ella." },
      { q: "Quelle qualité vocale caractérise Ella Fitzgerald ?",
        choix: ["Une voix très grave et voilée", "Un chant parlé, presque sans mélodie", "Une voix d'opéra au vibrato large", "Une grande justesse et un large ambitus"],
        bonne: 3, niv: 2,
        expl: "Elle est aussi une virtuose du scat." },
      { q: "Quel instrument Louis Armstrong joue-t-il sur l'album ?",
        choix: ["Le saxophone ténor", "Le trombone", "La clarinette", "La trompette"],
        bonne: 3, niv: 1,
        expl: "Ses interventions dialoguent avec les voix." },
      { q: "Qu'apporte l'effectif de l'album par rapport à un petit groupe de jazz ?",
        choix: ["Un chœur d'opéra et un orgue d'église", "Des synthétiseurs et une boîte à rythmes", "Des cordes et un grand orchestre autour de la section rythmique", "Un seul piano pour accompagner les voix"],
        bonne: 2, niv: 2,
        expl: "L'orchestre de studio garde un lien avec l'opéra." },
      { q: "Pourquoi le microsillon compte-t-il pour cet album ?",
        choix: ["Il permet un album entier consacré à une œuvre", "Il permet d'enregistrer en public sans micro", "Il a remplacé la radio dans les foyers", "Il impose une durée de trois minutes par disque"],
        bonne: 0, niv: 3,
        expl: "Le 33 tours tient bien plus longtemps que le 78 tours." },
      { q: "En quoi l'album transforme-t-il l'opéra ?",
        choix: ["Il reprend tout l'opéra avec les chanteurs de 1935", "Il confie une sélection d'airs à deux voix de jazz", "Il traduit le livret en français", "Il supprime les mélodies pour garder les récitatifs"],
        bonne: 1, niv: 3,
        expl: "C'est une nouvelle interprétation, dans un autre monde musical." },
      { q: "Quel élément rythmique faut-il savoir entendre chez les deux chanteurs ?",
        choix: ["Le swing et les notes anticipées ou retardées", "Un tempo d'une rigueur de métronome", "Une mesure à cinq temps de bout en bout", "Des silences de plusieurs mesures entre chaque mot"],
        bonne: 0, niv: 2,
        expl: "Leur liberté rythmique fait partie du style." },
    ] },
  { chapitre: "musique-6",
    fiche: `## Le langage du jazz vocal

Pour commenter l'album d'Armstrong et Fitzgerald, ou le comparer à une autre musique, il faut le vocabulaire du jazz. Le jazz naît au début du XXe siècle aux États-Unis, notamment à **La Nouvelle-Orléans**, du mélange du **blues**, des **spirituals**, du **ragtime**, des fanfares et des musiques européennes.

### Le rythme
- Le **swing** : une manière de jouer les croches de façon inégale (la première plus longue que la seconde, proche du **ternaire**), avec un balancement qui donne envie de bouger.
- L'accent sur les temps **2 et 4** (le « contretemps » marqué par la batterie, souvent au charleston).
- La **walking bass** : la contrebasse joue une note par temps, en marchant d'une note à l'autre.
- La **syncope** et l'**anticipation** : le chanteur attaque une note avant le temps attendu ; il peut aussi la retarder (jouer « derrière le temps », en anglais **laid back**).

### La voix dans le jazz
- Le **scat** : improvisation vocale sur des syllabes sans signification (« doo-bee-doo »). Armstrong l'a popularisé ; Fitzgerald en a fait un art virtuose.
- Les **blue notes** : notes légèrement abaissées (surtout la tierce, la quinte et la septième), qui donnent une couleur entre majeur et mineur.
- Le **vibrato**, souvent placé en fin de note.
- Les **glissandos** et **inflexions** : on glisse vers une note, on la « plie ».
- Le **growl** : un son rugueux, dans la voix ou dans la trompette.
- La **paraphrase** : le chanteur modifie la mélodie écrite (rythme, ornements, quelques notes) tout en la laissant reconnaissable.

### L'organisation d'un morceau
- Un **standard** : une chanson connue que les musiciens reprennent (beaucoup viennent de Broadway, comme les airs de Gershwin).
- La **grille** : la suite d'accords qui se répète ; un tour complet de la grille s'appelle un **chorus**.
- Plan fréquent : **introduction**, **exposition du thème**, chorus improvisés, **réexposition du thème**, **coda**.
- Le **break** : un bref arrêt de l'accompagnement, où le soliste joue seul.
- Le **riff** : une courte formule répétée, souvent par une section d'instruments.
- **Question-réponse** (call and response) : un soliste et un groupe se répondent, héritage des chants de travail et des églises afro-américaines.

### Les formations
- La **section rythmique** : piano, contrebasse, batterie, souvent guitare.
- Le **big band** : sections de saxophones, de trompettes et de trombones, et section rythmique.
- Le combo : petit groupe de trois à huit musiciens.
- La **sourdine** modifie le son de la trompette ou du trombone (sourdine sèche, sourdine wah-wah).

### L'improvisation
- Improviser n'est pas jouer au hasard : le soliste invente sur la grille, en s'appuyant sur le thème, sur des formules apprises et sur l'écoute des autres.
- La part écrite (arrangement) et la part improvisée (solos, paraphrase) se combinent : c'est un bon critère de comparaison avec une musique entièrement écrite.

### À retenir pour le bac
- Swing (croches inégales), accent sur 2 et 4, walking bass, syncope, jeu derrière le temps.
- Voix : scat, blue notes, vibrato de fin de note, glissandos, growl, paraphrase.
- Standard, grille, chorus, break, riff, question-réponse ; section rythmique, big band, sourdine.
- Part écrite et part improvisée : un axe de comparaison.`,
    cartes: [
      { q: "Swing", r: "Croches jouées inégales, proches du ternaire, avec un balancement." },
      { q: "Walking bass", r: "La contrebasse joue une note par temps, en marchant d'une note à l'autre." },
      { q: "Scat", r: "Improvisation vocale sur des syllabes sans signification." },
      { q: "Blue notes", r: "Notes légèrement abaissées (tierce, quinte, septième), entre majeur et mineur." },
      { q: "Growl", r: "Son rugueux produit dans la voix ou dans un cuivre." },
      { q: "Paraphrase", r: "La mélodie modifiée par l'interprète, mais encore reconnaissable." },
      { q: "Standard", r: "Une chanson connue que les musiciens de jazz reprennent." },
      { q: "Grille", r: "La suite d'accords qui se répète sous un morceau." },
      { q: "Chorus", r: "Un tour complet de la grille, souvent improvisé par un soliste." },
      { q: "Break", r: "Un bref arrêt de l'accompagnement, où le soliste joue seul." },
      { q: "Call and response", r: "Question-réponse entre un soliste et un groupe." },
      { q: "Section rythmique", r: "Piano, contrebasse, batterie, souvent guitare." },
      { q: "Jouer laid back", r: "Placer ses notes légèrement en retard sur le temps." },
    ],
    quiz: [
      { q: "Dans quelle ville place-t-on souvent la naissance du jazz ?",
        choix: ["La Nouvelle-Orléans", "Chicago", "Los Angeles, en Californie", "Charleston"],
        bonne: 0, niv: 1,
        expl: "Le jazz est ensuite parti vers Chicago et New York." },
      { q: "Qu'est-ce que le swing ?",
        choix: ["Un tempo très lent réservé aux ballades", "Une façon de jouer les croches inégales, avec balancement", "Une improvisation vocale sur des syllabes", "Une suite d'accords répétée"],
        bonne: 1, niv: 1,
        expl: "Les croches se rapprochent du ternaire." },
      { q: "Sur quels temps la batterie de jazz accentue-t-elle souvent ?",
        choix: ["Les temps 2 et 4", "Les temps 1 et 3", "Le premier temps de chaque mesure", "Le dernier temps de chaque phrase"],
        bonne: 0, niv: 2,
        expl: "C'est souvent au charleston." },
      { q: "Que fait une walking bass ?",
        choix: ["Elle tient une note grave pendant tout le morceau", "Elle improvise un solo au début du morceau", "Elle double la mélodie du chanteur", "Elle joue une note par temps, en marchant"],
        bonne: 3, niv: 2,
        expl: "Elle donne la pulsation et l'harmonie." },
      { q: "Comment s'appelle l'improvisation vocale sur des syllabes sans sens ?",
        choix: ["Le growl", "Le scat", "Le riff", "Le break"],
        bonne: 1, niv: 1,
        expl: "Armstrong l'a popularisé." },
      { q: "Que sont les blue notes ?",
        choix: ["Des notes jouées avec une sourdine wah-wah", "Des notes très aiguës réservées à la trompette", "Des notes légèrement abaissées, entre majeur et mineur", "Les notes du thème avant l'improvisation"],
        bonne: 2, niv: 2,
        expl: "Surtout la tierce, la quinte et la septième." },
      { q: "Comment appelle-t-on un tour complet de la grille ?",
        choix: ["Un pont", "Un break", "Un chorus", "Un riff de section"],
        bonne: 2, niv: 2,
        expl: "Chaque soliste joue un ou plusieurs chorus." },
      { q: "Que fait un chanteur qui paraphrase une mélodie ?",
        choix: ["Il la chante exactement comme la partition", "Il la modifie en la laissant reconnaissable", "Il remplace les paroles par des syllabes", "Il la chante à l'octave inférieure"],
        bonne: 1, niv: 3,
        expl: "Rythme, ornements, quelques notes changent." },
      { q: "Qu'est-ce que le break ?",
        choix: ["Un bref arrêt de l'accompagnement où le soliste joue seul", "La fin du morceau après le dernier thème", "Une pause de plusieurs minutes entre deux morceaux", "Une partie contrastée au milieu d'une forme AABA"],
        bonne: 0, niv: 3,
        expl: "Il crée un effet de suspension." },
      { q: "D'où vient le principe de question-réponse du jazz ?",
        choix: ["Des chants de travail et des églises afro-américaines", "Des opéras italiens du XIXe siècle", "Des chansons de Broadway, des années 1950", "De la musique électronique, des années 1990"],
        bonne: 0, niv: 2,
        expl: "En anglais : call and response." },
      { q: "Qu'est-ce qui oppose souvent le jazz à une musique entièrement écrite ?",
        choix: ["L'absence de mélodie", "L'absence de rythme régulier", "La part laissée à l'improvisation", "Le recours aux instruments à cordes"],
        bonne: 2, niv: 3,
        expl: "Arrangement écrit et solos improvisés se combinent." },
    ] },
  { chapitre: "musique-7",
    fiche: `## C. P. E. Bach et le style sensible

Le programme limitatif retient l'« **Allegro assai** » du **Concerto pour violoncelle en la majeur, Wq 172**, de **Carl Philipp Emanuel Bach**. Cette œuvre était déjà au programme en 2025-2026. Pour la commenter, il faut situer son auteur entre l'époque **baroque** et l'époque **classique**.

### Le compositeur
- **Carl Philipp Emanuel Bach** (1714-1788), fils de **Jean-Sébastien Bach**, formé par son père à Leipzig.
- Il est pendant près de trente ans **claveciniste** à la cour de **Frédéric II de Prusse**, à Berlin et Potsdam. Le roi est flûtiste : la musique de cour fait une grande place à la flûte.
- En 1768, il devient directeur de la musique des églises de **Hambourg**, où il succède à **Telemann**, son parrain.
- Il écrit un traité célèbre sur l'art de jouer du clavier, l'**Essai sur la vraie manière de jouer des instruments à clavier** (1753 pour la première partie). Haydn et Beethoven l'ont étudié.
- De son vivant, on l'appelle souvent « le Bach de Berlin », puis « le Bach de Hambourg ». Il est alors plus célèbre que son père.

### Le catalogue Wq
- **Wq** renvoie au catalogue des œuvres établi par **Alfred Wotquenne** (1905). On trouve aussi la cote H (catalogue d'Eugene Helm).
- Le **Wq 172** fait partie de **trois concertos pour violoncelle** (Wq 170, 171 et 172) composés à Berlin dans les années 1750. Chacun existe aussi en version pour **flûte** et en version pour **clavecin** : C. P. E. Bach adapte une même musique à plusieurs solistes.
- Le concerto a trois mouvements, vif, lent, vif ; l'**Allegro assai** (« très vif ») est le **finale**, le dernier mouvement.

### L'effectif
- Un **violoncelle soliste**, un orchestre de **cordes** (violons, altos, basses) et la **basse continue** (clavecin et basses qui jouent la ligne grave et l'harmonie).
- Le violoncelle soliste, longtemps instrument d'accompagnement de la basse continue, devient ici une voix virtuose qui chante et brille.

### Le style « sensible » (Empfindsamkeit)
- Vers le milieu du XVIIIe siècle, les compositeurs cherchent à **toucher la sensibilité** de l'auditeur. En Allemagne, on parle d'**empfindsamer Stil**, le « style sensible ».
- Traits fréquents chez C. P. E. Bach : **contrastes soudains** de nuance et de caractère, **silences** inattendus, **surprises harmoniques**, mélodies expressives coupées de soupirs, changements brusques de registre.
- On le rapproche du **style galant** (mélodie claire, accompagnement simple) et on le situe dans la transition vers le **classicisme** de Haydn et Mozart.

### Entre baroque et classique
- Encore **baroque** : la basse continue, la forme ritournelle du concerto, l'énergie motorique des notes rapides.
- Déjà **classique** : une mélodie mise au premier plan, des phrases plus nettement découpées, une écriture moins polyphonique.

### À retenir pour le bac
- Carl Philipp Emanuel Bach (1714-1788), fils de J.-S. Bach ; claveciniste de Frédéric II, puis directeur de la musique à Hambourg.
- Concerto pour violoncelle en la majeur, Wq 172 (catalogue Wotquenne) : trois mouvements, l'Allegro assai est le finale ; versions pour flûte et pour clavecin.
- Effectif : violoncelle soliste, cordes, basse continue.
- Style sensible : contrastes soudains, silences, surprises ; entre baroque et classique.`,
    cartes: [
      { q: "Dates de C. P. E. Bach", r: "1714-1788." },
      { q: "Père de C. P. E. Bach", r: "Jean-Sébastien Bach." },
      { q: "Poste de C. P. E. Bach à Berlin", r: "Claveciniste à la cour de Frédéric II de Prusse." },
      { q: "Poste de C. P. E. Bach à partir de 1768", r: "Directeur de la musique des églises de Hambourg, successeur de Telemann." },
      { q: "Traité de C. P. E. Bach", r: "Essai sur la vraie manière de jouer des instruments à clavier." },
      { q: "Sens de Wq", r: "Le catalogue d'Alfred Wotquenne (1905)." },
      { q: "Tonalité du concerto Wq 172", r: "La majeur." },
      { q: "Place de l'Allegro assai dans le concerto", r: "Le finale, troisième et dernier mouvement." },
      { q: "Sens de Allegro assai", r: "Très vif." },
      { q: "Autres versions du concerto", r: "Pour flûte et pour clavecin." },
      { q: "Effectif du concerto", r: "Violoncelle soliste, orchestre de cordes, basse continue." },
      { q: "Basse continue", r: "La ligne grave et l'harmonie jouées par le clavecin et les basses." },
      { q: "Empfindsamer Stil", r: "Le style sensible : contrastes soudains, silences, surprises, pour toucher l'auditeur." },
    ],
    quiz: [
      { q: "Qui est le père de Carl Philipp Emanuel Bach ?",
        choix: ["Jean-Sébastien Bach", "Georg Philipp Telemann", "Joseph Haydn", "Georg Friedrich Haendel"],
        bonne: 0, niv: 1,
        expl: "Telemann était son parrain." },
      { q: "Pour quel souverain C. P. E. Bach a-t-il travaillé à Berlin ?",
        choix: ["Louis XIV", "Marie-Thérèse d'Autriche", "Frédéric II de Prusse", "Napoléon Ier"],
        bonne: 2, niv: 1,
        expl: "Il était son claveciniste." },
      { q: "Que signifie la cote Wq ?",
        choix: ["Le catalogue d'Alfred Wotquenne", "Le numéro d'opus donné par l'éditeur", "Le nombre de mouvements de l'œuvre", "L'année de composition"],
        bonne: 0, niv: 2,
        expl: "On trouve aussi la cote H, du catalogue Helm." },
      { q: "Quelle place l'Allegro assai occupe-t-il dans le concerto ?",
        choix: ["Le premier mouvement", "Le mouvement lent", "L'introduction", "Le finale"],
        bonne: 3, niv: 2,
        expl: "Le concerto suit le plan vif, lent, vif." },
      { q: "Que signifie Allegro assai ?",
        choix: ["Assez lent", "Très vif", "Modérément vif", "Très lent et grave"],
        bonne: 1, niv: 1,
        expl: "Assai signifie très." },
      { q: "Pour quels autres solistes ce concerto existe-t-il ?",
        choix: ["Le violon et le hautbois", "La flûte et le clavecin", "La trompette et l'orgue", "La guitare et la harpe"],
        bonne: 1, niv: 2,
        expl: "C. P. E. Bach adapte la même musique." },
      { q: "Qu'est-ce que la basse continue ?",
        choix: ["Une note grave tenue sous tout le mouvement", "Le solo du violoncelle dans le grave", "La ligne grave et l'harmonie jouées par le clavecin et les basses", "La partie de contrebasse improvisée"],
        bonne: 2, niv: 2,
        expl: "C'est un trait de l'époque baroque." },
      { q: "Quel trait caractérise le style sensible ?",
        choix: ["Une polyphonie stricte à quatre voix sans contraste", "Un tempo constant et une nuance unique", "L'absence de mélodie au premier plan", "Des contrastes soudains et des silences inattendus"],
        bonne: 3, niv: 2,
        expl: "Il cherche à toucher la sensibilité." },
      { q: "Où C. P. E. Bach s'installe-t-il en 1768 ?",
        choix: ["À Vienne", "À Hambourg", "À Leipzig", "À Londres"],
        bonne: 1, niv: 3,
        expl: "Il y succède à Telemann." },
      { q: "Quel élément rattache encore l'œuvre au baroque ?",
        choix: ["La forme sonate classique", "Le piano-forte soliste", "Le grand orchestre romantique", "La basse continue"],
        bonne: 3, niv: 3,
        expl: "La forme ritournelle aussi." },
      { q: "Quel rôle nouveau prend le violoncelle dans ce concerto ?",
        choix: ["Celui d'un simple instrument d'accompagnement", "Celui d'un instrument rythmique", "Celui d'un instrument qui double la flûte", "Celui d'une voix soliste virtuose"],
        bonne: 3, niv: 3,
        expl: "Il était souvent cantonné à la basse continue." },
    ] },
  { chapitre: "musique-8",
    fiche: `## Écouter l'Allegro assai du concerto Wq 172

Cette fiche donne les repères pour écouter le finale du concerto en la majeur et le comparer à une autre musique. Les détails (nombre de ritournelles, minutages) se vérifient sur la partition et l'enregistrement étudiés en classe.

### La forme ritournelle
- Le mouvement s'organise par l'alternance du **tutti** (l'orchestre) et du **solo** (le violoncelle accompagné légèrement).
- La **ritournelle** : le refrain de l'orchestre, entendu d'abord en entier au début, dans le ton principal (**la majeur**).
- Les **épisodes solistes** : le violoncelle reprend ou transforme des motifs, puis se lance dans des passages virtuoses.
- Les ritournelles suivantes reviennent **plus courtes** et dans d'autres **tonalités voisines** ; la dernière revient dans le ton principal et conclut.
- Schéma simple à retenir : R (la majeur) – Solo – R (autre ton) – Solo – R (autre ton) – Solo – R (la majeur).

### L'écriture de l'orchestre
- Les **cordes** jouent souvent à l'**unisson** ou en octaves au début de la ritournelle : un effet d'énergie et de netteté.
- La **basse continue** soutient l'harmonie ; pendant les solos, l'orchestre s'allège pour laisser passer le violoncelle, qui joue dans un registre proche de celui des altos.
- Des **contrastes de nuance** (forte, piano) opposent les blocs de l'orchestre et les passages plus doux.

### L'écriture du soliste
- Des **traits rapides** : gammes, **arpèges**, notes répétées, sauts de registre.
- Le violoncelle monte dans l'**aigu** pour se faire entendre au-dessus de l'orchestre ; il descend aussi dans le **grave** pour des effets de contraste.
- Le soliste et l'orchestre **dialoguent** : l'orchestre ponctue, répond ou reprend un motif du soliste.

### Le caractère
- **Tempo très vif** (assai), pulsation régulière et énergie motrice, héritées du baroque.
- Des **surprises** propres au style sensible : arrêts brusques, silences, changements soudains de nuance ou d'harmonie.
- Un mouvement brillant, qui met en valeur la **virtuosité** du soliste et l'éclat de la fin.

### Comparer des interprétations
- Les versions sur **instruments anciens** : cordes en boyau, archet de l'époque, diapason souvent plus bas (le la autour de 415 Hz au lieu de 440), petits effectifs, tempos parfois très vifs, articulation nette.
- Les versions sur **instruments modernes** : son plus puissant et plus continu, cordes métalliques, plus de vibrato, orchestre parfois plus large.
- Comparer aussi avec les versions pour **flûte** ou pour **clavecin** du même concerto : même musique, autres timbres, autres possibilités techniques.

### Des pistes de comparaison avec d'autres œuvres
- Avec Porgy and Bess : le soliste face à l'orchestre (violoncelle, voix ou trompette), la part écrite et la part improvisée, la virtuosité.
- Avec un concerto de Vivaldi (forme ritournelle baroque) ou de Mozart (concerto classique) : ce qui est encore baroque, ce qui annonce le classique.

### À retenir pour le bac
- Forme ritournelle : tutti et solo alternent ; la ritournelle revient, plus courte et dans d'autres tons, puis en la majeur à la fin.
- Orchestre : unissons, contrastes forte-piano, accompagnement allégé pendant les solos.
- Soliste : gammes, arpèges, notes répétées, sauts de registre, dialogue avec l'orchestre.
- Comparer instruments anciens et modernes, et les versions pour flûte ou clavecin.`,
    cartes: [
      { q: "Ton principal de l'Allegro assai", r: "La majeur." },
      { q: "Organisation du mouvement", r: "Alternance de ritournelles d'orchestre (tutti) et d'épisodes du soliste." },
      { q: "Ritournelle", r: "Le refrain de l'orchestre, d'abord entendu en entier dans le ton principal." },
      { q: "Évolution des ritournelles", r: "Plus courtes, dans d'autres tonalités voisines, puis retour en la majeur à la fin." },
      { q: "Épisode soliste", r: "Le violoncelle reprend des motifs puis joue des traits virtuoses." },
      { q: "Traits virtuoses du violoncelle", r: "Gammes, arpèges, notes répétées, sauts de registre." },
      { q: "Rôle de l'orchestre pendant les solos", r: "Il s'allège, ponctue et répond au soliste." },
      { q: "Effet de l'unisson des cordes", r: "Énergie et netteté du début de la ritournelle." },
      { q: "Diapason fréquent sur instruments anciens", r: "Le la autour de 415 Hz au lieu de 440 Hz." },
      { q: "Cordes des instruments anciens", r: "Des cordes en boyau." },
      { q: "Surprises du style sensible dans le mouvement", r: "Arrêts brusques, silences, changements soudains de nuance ou d'harmonie." },
      { q: "Comparaison avec Vivaldi", r: "Même principe de forme ritournelle, propre au concerto baroque." },
    ],
    quiz: [
      { q: "Quelle forme organise l'Allegro assai ?",
        choix: ["La forme AABA", "Le thème et variations", "La forme ritournelle", "La forme couplet-refrain"],
        bonne: 2, niv: 1,
        expl: "Tutti et solo alternent." },
      { q: "Dans quel ton la première ritournelle est-elle jouée ?",
        choix: ["La mineur", "Ré majeur", "Fa dièse mineur", "La majeur"],
        bonne: 3, niv: 1,
        expl: "C'est le ton du concerto." },
      { q: "Comment reviennent les ritournelles au milieu du mouvement ?",
        choix: ["Identiques et dans le même ton", "Plus courtes et dans d'autres tonalités", "Jouées par le violoncelle seul", "Ralenties et dans la nuance piano"],
        bonne: 1, niv: 2,
        expl: "La dernière revient en la majeur." },
      { q: "Que fait l'orchestre pendant les épisodes solistes ?",
        choix: ["Il joue fortissimo à l'unisson", "Il se tait complètement jusqu'à la fin", "Il s'allège et répond au soliste", "Il improvise une autre mélodie"],
        bonne: 2, niv: 2,
        expl: "Le violoncelle doit passer au premier plan." },
      { q: "Quel trait est typique des passages virtuoses du violoncelle ?",
        choix: ["Des arpèges et des gammes rapides", "De longues notes tenues sans vibrato", "Des accords plaqués au piano", "Un chant sur des paroles"],
        bonne: 0, niv: 1,
        expl: "On entend aussi des notes répétées et des sauts." },
      { q: "Quel effet produit l'unisson des cordes au début de la ritournelle ?",
        choix: ["Mystère et flou", "Lenteur et recueillement", "Désordre et improvisation", "Énergie et netteté"],
        bonne: 3, niv: 2,
        expl: "Toutes les cordes jouent la même ligne." },
      { q: "Quelle surprise relève du style sensible ?",
        choix: ["Une modulation lente et prévue de loin", "Un crescendo régulier sur tout le mouvement", "Un arrêt brusque suivi d'un silence", "Un tempo identique du début à la fin"],
        bonne: 2, niv: 2,
        expl: "C'est un trait de C. P. E. Bach." },
      { q: "Quel diapason utilisent souvent les ensembles sur instruments anciens ?",
        choix: ["Un la à 440 Hz", "Un la à 466 Hz", "Un la autour de 415 Hz", "Un la à 392 Hz"],
        bonne: 2, niv: 3,
        expl: "Le la moderne est à 440 Hz." },
      { q: "Qu'est-ce qui distingue un enregistrement sur instruments modernes ?",
        choix: ["Des cordes en boyau et un archet ancien", "Un son plus puissant et plus de vibrato", "Un effectif d'une dizaine de musiciens", "L'absence de violoncelle soliste"],
        bonne: 1, niv: 3,
        expl: "Les cordes métalliques donnent plus de puissance." },
      { q: "Quel compositeur baroque utilise la même forme dans ses concertos ?",
        choix: ["Gershwin", "Machaut", "Vivaldi", "Debussy"],
        bonne: 2, niv: 2,
        expl: "La forme ritournelle domine le concerto baroque." },
      { q: "Que montre la comparaison avec la version pour flûte ?",
        choix: ["Une œuvre entièrement différente au même titre", "Une version écrite par un autre compositeur", "La suppression de l'orchestre", "La même musique avec un autre timbre et d'autres possibilités"],
        bonne: 3, niv: 3,
        expl: "C. P. E. Bach adapte la partie soliste." },
    ] },
  { chapitre: "musique-9",
    fiche: `## Ars nova et ars subtilior : la musique du XIVe siècle

Le corpus « **Écritures, formes, graphismes** » du programme limitatif réunit quatre pièces du XIVe siècle et du début du XVe. Pour les comprendre, il faut connaître deux moments de l'histoire de la musique : l'**ars nova** et l'**ars subtilior**.

### L'ars nova (vers 1320-1380)
- Le nom vient d'un traité attribué à **Philippe de Vitry** (vers 1320) : « l'art nouveau » de noter et de composer.
- Nouveauté principale : une **notation du rythme** plus précise. Les valeurs de notes (longue, brève, semi-brève, minime) peuvent se diviser en **trois** (division parfaite) ou en **deux** (division imparfaite).
- On note ces divisions par des signes : le **cercle** pour le temps parfait (ternaire), le **demi-cercle** pour le temps imparfait (binaire). Le demi-cercle est l'ancêtre du signe C utilisé aujourd'hui pour la mesure à quatre temps.
- Le pape **Jean XXII** critique vers 1324 ces nouveautés, qui détourneraient du texte sacré par trop d'ornements.
- Technique typique du motet : l'**isorythmie**, un même schéma rythmique répété à la voix de **teneur** (tenor).

### Guillaume de Machaut, maître de l'ars nova
- **Guillaume de Machaut** (vers 1300-1377), à la fois **poète** et **compositeur**, chanoine de **Reims**, au service de grands seigneurs.
- Il compose la **Messe de Nostre Dame**, l'une des premières messes polyphoniques complètes écrites par un seul compositeur.
- Il fixe les **formes fixes** de la chanson : **rondeau**, **ballade**, **virelai**. Chaque forme a un schéma de refrain et de couplets.
- Le **rondeau** repose sur deux parties musicales A et B ; le refrain AB revient au début, au milieu et à la fin.

### L'ars subtilior (vers 1370-1420)
- Le nom, « l'art plus subtil », a été donné par des musicologues du XXe siècle à un répertoire de chansons d'une **grande complexité rythmique**.
- On le trouve dans les cours d'**Avignon** (les papes, puis les papes rivaux du Grand Schisme), d'**Aragon**, de **Foix** (Gaston Fébus) et d'Italie du Nord.
- Traits : **syncopes**, rythmes superposés en **proportions** (deux contre trois, trois contre quatre), notes **colorées** (en rouge ou évidées) qui changent la valeur des notes, inscriptions énigmatiques.
- La musique est faite pour un public de connaisseurs : on la chante, mais on admire aussi le **manuscrit**.
- Le **codex Chantilly** (conservé au musée Condé de Chantilly) en est la source la plus célèbre.

### La voix et les instruments
- Les chansons sont souvent à **trois voix** : le **cantus** (voix supérieure, avec le texte), la **teneur** et la **contreteneur**, plus graves. Les voix graves peuvent être chantées ou jouées par des instruments (vièle, luth, harpe, flûte).
- Les interprétations actuelles font des **choix** : voix seules, voix et instruments, tempos, prononciation de l'ancien français. Ce sont des reconstitutions.

### Lire une partition du XIVe siècle
- Pas de barres de mesure, pas de partition générale : chaque voix est écrite **séparément** sur la page (en parties séparées).
- Des notes en forme de losanges et de carrés ; le chanteur déduit le rythme des règles de notation.

### À retenir pour le bac
- Ars nova (vers 1320) : Philippe de Vitry, nouvelle notation du rythme, division parfaite (trois) ou imparfaite (deux), isorythmie.
- Machaut (vers 1300-1377) : poète et compositeur, Messe de Nostre Dame, formes fixes (rondeau, ballade, virelai).
- Ars subtilior (vers 1370-1420) : complexité rythmique, proportions, notes colorées, cours d'Avignon, d'Aragon et de Foix, codex Chantilly.
- Trois voix (cantus, teneur, contreteneur) ; interprétations d'aujourd'hui : des reconstitutions.`,
    cartes: [
      { q: "Ars nova", r: "L'« art nouveau » du XIVe siècle, d'après un traité attribué à Philippe de Vitry (vers 1320)." },
      { q: "Nouveauté principale de l'ars nova", r: "Une notation du rythme plus précise, avec division en trois ou en deux." },
      { q: "Temps parfait", r: "Division ternaire, notée par un cercle." },
      { q: "Temps imparfait", r: "Division binaire, notée par un demi-cercle, ancêtre du signe C." },
      { q: "Pape critique de l'ars nova", r: "Jean XXII, vers 1324." },
      { q: "Isorythmie", r: "Un même schéma rythmique répété, surtout à la teneur d'un motet." },
      { q: "Guillaume de Machaut", r: "Poète et compositeur (vers 1300-1377), chanoine de Reims." },
      { q: "Messe de Nostre Dame", r: "Une des premières messes polyphoniques complètes d'un seul compositeur, par Machaut." },
      { q: "Formes fixes", r: "Rondeau, ballade, virelai." },
      { q: "Ars subtilior", r: "L'« art plus subtil » (vers 1370-1420) : chansons d'une grande complexité rythmique." },
      { q: "Notes colorées", r: "Notes en rouge ou évidées qui changent la valeur rythmique." },
      { q: "Codex Chantilly", r: "Le manuscrit le plus célèbre de l'ars subtilior, au musée Condé." },
      { q: "Les trois voix d'une chanson du XIVe siècle", r: "Cantus, teneur, contreteneur." },
      { q: "Cours de l'ars subtilior", r: "Avignon, Aragon, Foix, Italie du Nord." },
    ],
    quiz: [
      { q: "À qui attribue-t-on le traité qui donne son nom à l'ars nova ?",
        choix: ["Guillaume de Machaut", "Philippe de Vitry", "Baude Cordier", "Guido d'Arezzo"],
        bonne: 1, niv: 2,
        expl: "Il date des environs de 1320." },
      { q: "Quelle est la grande nouveauté de l'ars nova ?",
        choix: ["L'invention des barres de mesure", "L'abandon complet de la polyphonie", "Une notation plus précise du rythme", "La portée de cinq lignes, inventée alors"],
        bonne: 2, niv: 2,
        expl: "Les valeurs se divisent en trois ou en deux." },
      { q: "Quel signe note le temps parfait (ternaire) ?",
        choix: ["Un demi-cercle", "Une croix", "Un cercle", "Un carré"],
        bonne: 2, niv: 2,
        expl: "Le demi-cercle note le temps imparfait." },
      { q: "De quel signe actuel le demi-cercle est-il l'ancêtre ?",
        choix: ["Le C de la mesure à quatre temps", "La clé de sol", "Le point d'orgue", "Le dièse"],
        bonne: 0, niv: 3,
        expl: "Il notait une division binaire." },
      { q: "Quelle double activité exerçait Machaut ?",
        choix: ["Peintre et organiste", "Roi et chanteur", "Moine et facteur d'orgues", "Poète et compositeur"],
        bonne: 3, niv: 1,
        expl: "Il écrivait les textes de ses chansons." },
      { q: "Quelle œuvre de Machaut est une des premières messes polyphoniques complètes d'un seul auteur ?",
        choix: ["Le Roman de Fauvel", "Le Remède de Fortune", "La Chanson de Roland", "La Messe de Nostre Dame"],
        bonne: 3, niv: 3,
        expl: "Le Roman de Fauvel est un manuscrit antérieur." },
      { q: "Lesquelles sont des formes fixes ?",
        choix: ["Le rondeau, la ballade et le virelai", "La fugue, la sonate et le menuet", "Le motet, la messe et l'opéra", "Le blues, le standard et le riff"],
        bonne: 0, niv: 1,
        expl: "Elles organisent la poésie chantée." },
      { q: "Qu'est-ce qui caractérise l'ars subtilior ?",
        choix: ["Des chansons à une seule voix très simples", "Une grande complexité rythmique", "Des pièces pour grand orchestre", "L'usage de l'harmonie tonale moderne"],
        bonne: 1, niv: 1,
        expl: "Syncopes, proportions, notes colorées." },
      { q: "Dans quelle ville se trouvait une grande cour de l'ars subtilior ?",
        choix: ["Versailles", "Avignon", "Vienne", "Venise"],
        bonne: 1, niv: 2,
        expl: "Les papes y résidaient." },
      { q: "Où est conservé le codex Chantilly ?",
        choix: ["À la bibliothèque du Vatican", "Au British Museum de Londres", "À la cathédrale de Reims", "Au musée Condé de Chantilly"],
        bonne: 3, niv: 3,
        expl: "C'est la source principale de l'ars subtilior." },
      { q: "Pourquoi les interprétations d'aujourd'hui sont-elles des reconstitutions ?",
        choix: ["Les manuscrits originaux ont disparu depuis des siècles", "La partition ne précise ni les instruments ni toute la manière de chanter", "La musique de cette époque n'était pas notée", "Les interprètes modernes refusent de lire la notation ancienne"],
        bonne: 1, niv: 3,
        expl: "Il faut choisir voix, instruments, tempo et prononciation." },
    ] },
  { chapitre: "musique-10",
    fiche: `## Écritures, formes, graphismes : les quatre pièces

Le programme limitatif réunit sous le titre « **Écritures, formes, graphismes** » quatre pièces de la fin du Moyen Âge. Leur point commun : la **manière d'écrire** la musique (canon, rétrogradation, proportions) se lit aussi dans le **dessin de la page**. On parle parfois de **musique pour l'œil**.

### Guillaume de Machaut, Ma fin est mon commencement
- Un **rondeau** à trois voix. Le titre, « Ma fin est mon commencement et mon commencement ma fin », annonce la construction.
- Une voix est la **rétrogradation** d'une autre : la même ligne lue de la fin vers le début. On parle de canon **rétrograde** ou canon **à l'écrevisse**.
- La troisième voix est un **palindrome** : arrivée au milieu, elle repart en sens inverse, et sa seconde moitié reprend la première à l'envers.
- Le texte dit donc ce que fait la musique : la fin et le commencement s'échangent. Le manuscrit oblige le chanteur à lire une partie à l'envers.
- À l'écoute, ces symétries ne s'entendent pas directement : on entend surtout trois voix entremêlées, des rythmes souples, des cadences sur des consonances d'octave et de quinte.

### Johannes Ciconia, Le Ray au soleyl
- **Johannes Ciconia** (vers 1370-1412), né à **Liège**, actif en Italie, mort à **Padoue** : un musicien qui circule entre le Nord et l'Italie.
- **Le Ray au soleyl** est un **canon à trois voix** tiré d'une **seule ligne notée** : une indication dit comment en faire sortir les trois voix. Les spécialistes en proposent des solutions différentes : c'est une pièce-énigme.
- Le titre évoque le rayon de soleil : image de lumière et d'éclat.

### Jacob Senleches, La Harpe de Mélodie
- **Jacob de Senleches**, actif à la fin du XIVe siècle, lié aux cours de la péninsule Ibérique.
- Un **virelai** à trois voix : deux voix supérieures en **canon** au-dessus d'une teneur.
- Dans un manuscrit conservé à Chicago (Newberry Library), la musique est écrite **sur une harpe dessinée** : les **cordes** de la harpe servent de lignes de portée. Le codex Chantilly la donne en notation ordinaire.
- Le texte fait l'éloge de la harpe : le dessin, le texte et la musique disent la même chose.

### Baude Cordier, Tout par compas suy composés
- **Baude Cordier**, compositeur actif vers 1400.
- Un **rondeau** en **canon**, écrit en **cercle** dans le codex Chantilly. Le cercle montre que les voix tournent sans fin : on peut reprendre le canon sans s'arrêter.
- Jeu de mots du titre : « compas », c'est l'outil qui trace le cercle, mais aussi la **mesure**, la juste proportion. La pièce dit : je suis tout entière faite au compas.
- Le même manuscrit contient une autre chanson de Cordier écrite en forme de **cœur** (Belle, bonne, sage).

### Ce que ces pièces ont en commun
- Une **écriture savante** : canon, rétrogradation, palindrome, proportions.
- Une **forme** poétique et musicale fixée : rondeau, virelai.
- Un **graphisme** qui fait de la partition un objet à regarder : cercle, harpe, symétrie.
- Un public de **connaisseurs** qui admire à la fois le son et la page.

### Prolongements au XXe siècle
- Les **partitions graphiques** : des compositeurs dessinent la musique au lieu de la noter avec des notes (Earle Brown, December 1952 ; Cornelius Cardew, Treatise).
- George Crumb écrit certaines pages de **Makrokosmos** en cercle ou en spirale.
- Dans la création de l'oral, une **représentation graphique** de la pièce peut être présentée au jury : ce corpus en donne des modèles.

### À retenir pour le bac
- Machaut : rondeau, une voix rétrograde d'une autre, une voix en palindrome ; le titre décrit la construction.
- Ciconia : canon à trois voix tiré d'une seule ligne, pièce-énigme ; un Liégeois actif en Italie.
- Senleches : virelai, canon, notation sur une harpe dessinée.
- Cordier : rondeau en canon écrit en cercle, codex Chantilly ; « compas » = cercle et mesure.`,
    cartes: [
      { q: "Titre de la pièce de Machaut au programme", r: "Ma fin est mon commencement." },
      { q: "Forme de Ma fin est mon commencement", r: "Un rondeau à trois voix." },
      { q: "Rétrogradation", r: "Une ligne lue de la fin vers le début." },
      { q: "Canon à l'écrevisse", r: "Un canon dont une voix est la rétrogradation de l'autre." },
      { q: "Palindrome musical", r: "Une ligne dont la seconde moitié reprend la première à l'envers." },
      { q: "Johannes Ciconia", r: "Compositeur né à Liège (vers 1370), mort à Padoue en 1412." },
      { q: "Le Ray au soleyl", r: "Canon à trois voix tiré d'une seule ligne notée, pièce-énigme." },
      { q: "Forme de La Harpe de Mélodie", r: "Un virelai à trois voix, avec un canon." },
      { q: "Graphisme de La Harpe de Mélodie", r: "La musique écrite sur une harpe dessinée, les cordes servant de portée." },
      { q: "Graphisme de Tout par compas suy composés", r: "Un canon écrit en cercle dans le codex Chantilly." },
      { q: "Double sens de « compas »", r: "L'outil qui trace un cercle, et la mesure ou juste proportion." },
      { q: "Autre chanson de Cordier en forme graphique", r: "Belle, bonne, sage, écrite en forme de cœur." },
      { q: "Musique pour l'œil", r: "Une musique dont la notation est aussi un dessin à regarder." },
      { q: "Partition graphique du XXe siècle", r: "Une musique dessinée plutôt que notée : December 1952 d'Earle Brown, Treatise de Cardew." },
    ],
    quiz: [
      { q: "Quelle construction annonce le titre Ma fin est mon commencement ?",
        choix: ["Une voix chante plus vite que les autres", "Une voix est l'autre lue à l'envers", "Le morceau commence par sa coda", "Les voix chantent des textes différents"],
        bonne: 1, niv: 2,
        expl: "C'est une rétrogradation." },
      { q: "Quelle est la forme de la pièce de Machaut au programme ?",
        choix: ["Un virelai", "Une ballade", "Un rondeau", "Un motet"],
        bonne: 2, niv: 1,
        expl: "C'est une des trois formes fixes." },
      { q: "Que fait la voix en palindrome dans la pièce de Machaut ?",
        choix: ["Elle répète une seule note du début à la fin", "Elle repart en sens inverse à partir du milieu", "Elle imite exactement le cantus en décalé", "Elle chante un texte latin différent"],
        bonne: 1, niv: 3,
        expl: "Sa seconde moitié reprend la première à l'envers." },
      { q: "Où Ciconia est-il né ?",
        choix: ["À Reims", "À Liège", "À Avignon", "À Padoue"],
        bonne: 1, niv: 2,
        expl: "Il est mort à Padoue en 1412." },
      { q: "Qu'a de particulier la notation de Le Ray au soleyl ?",
        choix: ["Elle est écrite en forme de cœur", "Elle ne comporte que des notes rouges", "Elle tire trois voix en canon d'une seule ligne notée", "Elle est écrite sur une harpe dessinée"],
        bonne: 2, niv: 2,
        expl: "Les spécialistes en proposent plusieurs solutions." },
      { q: "Sur quel dessin La Harpe de Mélodie est-elle notée dans le manuscrit de Chicago ?",
        choix: ["Un cercle qui tourne sans fin", "Un cœur ouvert en deux", "Une étoile aux branches tracées", "Une harpe dont les cordes servent de portée"],
        bonne: 3, niv: 1,
        expl: "Le texte fait l'éloge de la harpe." },
      { q: "Quelle est la forme de La Harpe de Mélodie ?",
        choix: ["Un virelai", "Un rondeau", "Une ballade", "Une messe"],
        bonne: 0, niv: 3,
        expl: "Deux voix y sont en canon au-dessus de la teneur." },
      { q: "Pourquoi Tout par compas suy composés est-il écrit en cercle ?",
        choix: ["Parce que le parchemin était trop petit", "Pour cacher la musique aux non-initiés", "Pour montrer un canon qui tourne sans fin", "Pour indiquer un tempo de plus en plus rapide"],
        bonne: 2, niv: 2,
        expl: "C'est un canon perpétuel." },
      { q: "Que signifie « compas » dans le titre de Cordier ?",
        choix: ["La boussole des marins", "Le nom de la cour où Cordier travaillait", "À la fois l'outil du cercle et la mesure", "Un instrument de musique à cordes"],
        bonne: 2, niv: 3,
        expl: "C'est un jeu de mots." },
      { q: "Dans quel manuscrit se trouve la pièce circulaire de Cordier ?",
        choix: ["Le manuscrit de Chicago", "Le codex Chantilly", "Le Roman de Fauvel", "Le manuscrit de Montpellier"],
        bonne: 1, niv: 3,
        expl: "On y trouve aussi Belle, bonne, sage en forme de cœur." },
      { q: "Quel prolongement moderne rejoint ce corpus ?",
        choix: ["La musique de film hollywoodienne, des années 1930", "Les chansons de variété en couplet-refrain", "Les concertos romantiques pour piano", "Les partitions graphiques du XXe siècle"],
        bonne: 3, niv: 2,
        expl: "Earle Brown, Cardew, Crumb." },
    ] },
  { chapitre: "musique-11",
    fiche: `## Champ 1 : le son, la musique, l'espace et le temps

Le programme de spécialité organise la réflexion en trois **champs de questionnement**. L'exercice 3 de l'écrit doit relier le document à au moins l'un d'eux, et l'oral relie la création collective à au moins l'un d'eux. Le premier interroge la **matière sonore** : comment le son se fabrique, se place dans l'espace et s'organise dans le temps. Thématiques possibles : musique, son et acoustique ; variants et invariants du langage musical.

### Le son, objet physique
- Un son est une **vibration** qui se propage dans l'air.
- **Hauteur** : liée à la **fréquence**, en hertz (Hz). Le la qui sert de référence aux orchestres vaut aujourd'hui **440 Hz**. Doubler la fréquence donne l'**octave** supérieure.
- **Intensité** : mesurée en **décibels** (dB).
- **Timbre** : il dépend des **harmoniques** qui s'ajoutent au son fondamental et de l'**enveloppe** du son (attaque, tenue, chute).
- **Durée** : la base du rythme.

### Le son et l'espace
- La **salle** change le son : réverbération d'une église, sécheresse d'un studio.
- La **spatialisation** : placer des sources sonores à différents endroits. À la basilique Saint-Marc de Venise, vers 1600, on fait dialoguer des chœurs séparés (Giovanni Gabrieli). Berlioz, dans son Requiem (1837), place quatre ensembles de cuivres aux quatre coins.
- Au XXe siècle : Stockhausen écrit **Gruppen** pour trois orchestres ; l'**acousmonium** du GRM (1974) est un orchestre de haut-parleurs ; Pierre Boulez, avec **Répons** (1981), fait circuler le son des solistes dans la salle grâce à l'électronique de l'IRCAM.
- Dans un enregistrement : la **stéréophonie** (gauche et droite), la profondeur, le mixage.

### Le son enregistré, fixé, transformé
- L'**enregistrement** fixe une interprétation : on peut la réécouter, la comparer, la vendre.
- La **musique concrète** (Pierre Schaeffer, 1948) compose avec des sons enregistrés du monde réel ; la musique **électronique** produit les sons par des machines.
- L'**échantillonnage** (sampling) : réutiliser un fragment sonore enregistré dans une nouvelle pièce.

### La musique et le temps
- Le temps **pulsé** (une pulsation régulière) et le temps **lisse** (sans pulsation perçue).
- La **répétition** et la **variation** : un même motif revient, transformé ou non. La musique **répétitive** américaine (Steve Reich, Philip Glass) fait évoluer très lentement des motifs répétés ; Reich fait se décaler deux pianos dans **Piano Phase** (1967).
- La **boucle** (loop) des musiques électroniques.
- Le **silence** fait partie de la musique : John Cage, **4'33"** (1952), où l'interprète ne joue pas et où l'on entend les sons de la salle.
- Le temps de l'écoute : une chanson de trois minutes, un opéra de trois heures.

### Avec le programme limitatif
- Les canons de Machaut et de Cordier jouent avec le temps : rétrogradation, cercle sans fin.
- L'album de 1958 est un objet enregistré, mixé en studio ; l'Ouverture et les chansons organisent le temps en sections nettes.
- Le concerto de C. P. E. Bach oppose et fait alterner deux masses sonores : soliste et orchestre.

### À retenir pour le bac
- Son : vibration ; hauteur (fréquence, Hz, la 440, octave), intensité (dB), timbre (harmoniques), durée.
- Espace : salle, spatialisation (Gabrieli, Berlioz, Stockhausen, acousmonium, Répons), stéréophonie.
- Son fixé : enregistrement, musique concrète (Schaeffer, 1948), électronique, échantillonnage.
- Temps : pulsé ou lisse, répétition et variation (Reich), boucle, silence (Cage, 4'33").`,
    cartes: [
      { q: "Les trois champs de questionnement", r: "Le son, la musique, l'espace et le temps ; La musique, l'homme et la société ; Culture musicale et artistique dans l'histoire et la géographie." },
      { q: "Unité de la fréquence", r: "Le hertz (Hz)." },
      { q: "Fréquence du la de référence", r: "440 Hz." },
      { q: "Octave et fréquence", r: "L'octave supérieure a une fréquence double." },
      { q: "Unité de l'intensité", r: "Le décibel (dB)." },
      { q: "Ce qui fait le timbre", r: "Les harmoniques et l'enveloppe du son (attaque, tenue, chute)." },
      { q: "Spatialisation", r: "Placer des sources sonores à différents endroits de l'espace." },
      { q: "Chœurs séparés de Saint-Marc", r: "Venise, vers 1600 : des chœurs placés à distance qui dialoguent (Giovanni Gabrieli)." },
      { q: "Acousmonium", r: "Un orchestre de haut-parleurs créé au GRM en 1974." },
      { q: "Musique concrète", r: "Composer avec des sons enregistrés du monde réel ; Pierre Schaeffer, 1948." },
      { q: "Échantillonnage", r: "Réutiliser un fragment sonore enregistré dans une nouvelle pièce." },
      { q: "Piano Phase", r: "Pièce de Steve Reich (1967) où deux pianos répètent un motif et se décalent peu à peu." },
      { q: "4'33\"", r: "Pièce de John Cage (1952) où l'interprète ne joue pas : on entend les sons de la salle." },
    ],
    quiz: [
      { q: "À quel paramètre la fréquence d'un son est-elle liée ?",
        choix: ["La hauteur", "L'intensité", "Le timbre", "La durée"],
        bonne: 0, niv: 1,
        expl: "Elle se mesure en hertz." },
      { q: "Quelle fréquence a le la de référence des orchestres aujourd'hui ?",
        choix: ["415 Hz", "432 Hz", "435 Hz", "440 Hz"],
        bonne: 3, niv: 1,
        expl: "415 Hz est souvent utilisé sur instruments anciens." },
      { q: "Que se passe-t-il quand on double la fréquence d'un son ?",
        choix: ["On obtient l'octave supérieure", "Le son devient deux fois plus fort", "Le timbre change d'instrument", "On obtient la quinte inférieure"],
        bonne: 0, niv: 2,
        expl: "L'intensité se mesure en décibels." },
      { q: "De quoi dépend le timbre ?",
        choix: ["De la fréquence du son fondamental", "Des harmoniques et de l'enveloppe du son", "De la vitesse du tempo choisi", "Du nombre de mesures de la pièce"],
        bonne: 1, niv: 2,
        expl: "L'attaque compte beaucoup pour reconnaître un instrument." },
      { q: "Quel compositeur fait dialoguer des chœurs séparés à Saint-Marc de Venise ?",
        choix: ["Giovanni Gabrieli", "Pierre Schaeffer", "John Cage", "Guillaume de Machaut"],
        bonne: 0, niv: 3,
        expl: "C'est vers 1600." },
      { q: "Qu'est-ce que l'acousmonium ?",
        choix: ["Une salle sans réverbération", "Un orchestre de haut-parleurs", "Un instrument médiéval à cordes", "Un logiciel d'enregistrement"],
        bonne: 1, niv: 2,
        expl: "Il est créé au GRM en 1974." },
      { q: "Qui invente la musique concrète en 1948 ?",
        choix: ["Pierre Schaeffer", "Pierre Boulez", "Steve Reich", "Karlheinz Stockhausen"],
        bonne: 0, niv: 2,
        expl: "Il compose avec des sons enregistrés." },
      { q: "Qu'est-ce que l'échantillonnage ?",
        choix: ["Réutiliser un fragment sonore enregistré", "Mesurer l'intensité d'un son", "Accorder un orchestre sur le la", "Écrire un canon à plusieurs voix"],
        bonne: 0, niv: 1,
        expl: "En anglais : sampling." },
      { q: "Que fait Steve Reich dans Piano Phase ?",
        choix: ["Il demande au pianiste de ne pas jouer", "Il place quatre orchestres aux coins de la salle", "Il fait se décaler deux pianos qui répètent le même motif", "Il compose avec des bruits de train"],
        bonne: 2, niv: 3,
        expl: "C'est un exemple de musique répétitive." },
      { q: "Qu'entend-on pendant 4'33\" de John Cage ?",
        choix: ["Un piano qui joue très doucement", "Les sons de la salle", "Un enregistrement de bruits de rue", "Une note tenue de quatre minutes"],
        bonne: 1, niv: 2,
        expl: "Le silence de l'interprète révèle l'environnement." },
      { q: "Quelle pièce du programme limitatif joue avec un temps circulaire ?",
        choix: ["Summertime", "Tout par compas suy composés", "L'Ouverture de Porgy and Bess", "L'Allegro assai de C. P. E. Bach"],
        bonne: 1, niv: 3,
        expl: "Le canon est écrit en cercle." },
    ] },
  { chapitre: "musique-12",
    fiche: `## Champ 2 : la musique, l'homme et la société

Ce champ interroge la place de la musique dans la vie des personnes et des groupes : qui fait la musique, pour qui, pourquoi, et ce qu'elle dit de la société. Thématiques possibles : musicien, créateur, interprète, auditeur ; musique, témoin et acteur de l'histoire ; musique et récit ; musique, théâtre, mouvement et scène.

### Créateur, interprète, auditeur
- Le **compositeur** écrit ; l'**interprète** fait exister l'œuvre ; l'**auditeur** la reçoit. Ces rôles peuvent se confondre : le musicien de jazz improvise et compose en jouant.
- L'**arrangeur** adapte une œuvre à un autre effectif ou un autre style : Russell Garcia pour l'album de 1958.
- L'interprète fait des **choix** : tempo, phrasé, ornements. Deux interprétations d'une même œuvre peuvent être très différentes.
- L'auditeur d'aujourd'hui écoute surtout seul, au casque, en **streaming** ; autrefois, la musique s'écoutait d'abord en direct.

### Musique et pouvoir
- La musique sert le **prestige** des puissants : Lully à la cour de Louis XIV, C. P. E. Bach à la cour de Frédéric II, les compositeurs de l'ars subtilior dans les cours princières et papale.
- Les **hymnes nationaux** rassemblent : La Marseillaise, composée par Rouget de Lisle en 1792.
- Certains régimes **censurent** ou **interdisent** des musiques jugées dangereuses.

### Musique et engagement
- La chanson peut **dénoncer** : Strange Fruit, chanté par Billie Holiday en 1939, contre les lynchages dans le sud des États-Unis.
- Les chansons du mouvement pour les **droits civiques** dans les années 1960 ; l'hymne américain joué à la guitare électrique saturée par Jimi Hendrix à Woodstock (1969).
- La musique peut être **acteur** de l'histoire, et pas seulement témoin.

### Musique, identité et communauté
- La musique dit l'**appartenance** à un groupe : musiques traditionnelles, chants religieux, musiques de jeunes.
- Les musiques afro-américaines (spirituals, blues, gospel, jazz) sont nées dans l'histoire de l'esclavage et de la ségrégation ; elles expriment la souffrance, la foi, l'espoir.
- **Porgy and Bess** pose la question de la **représentation** : qui a le droit de raconter la vie d'une communauté ? L'œuvre a donné des rôles majeurs à des chanteurs noirs à une époque de ségrégation, mais elle a été critiquée pour ses clichés.

### Musique et récit, musique et scène
- L'**opéra** raconte une histoire en musique, avec le chant, le théâtre et l'orchestre : Porgy and Bess en est un exemple.
- La **musique à programme** raconte sans paroles : la Symphonie fantastique de Berlioz (1830).
- Musique et **danse**, musique et **cinéma**, musique et jeu vidéo : la musique accompagne un autre art.

### Musique et vie sociale
- Les **fêtes** : la Fête de la musique, créée en France en 1982.
- Les **pratiques amateurs** : chorales, fanfares, groupes ; une grande part des musiciens ne sont pas professionnels.
- L'éducation : conservatoires, écoles de musique, enseignement au collège et au lycée.

### À retenir pour le bac
- Rôles : compositeur, interprète, arrangeur, auditeur ; l'interprète fait des choix.
- Pouvoir : musique de cour, hymnes (La Marseillaise, 1792), censure.
- Engagement : Strange Fruit (Billie Holiday, 1939), Hendrix à Woodstock (1969).
- Identité : musiques afro-américaines ; Porgy and Bess et la question de la représentation.
- Récit et scène : opéra, musique à programme, danse, cinéma ; vie sociale : fêtes, amateurs.`,
    cartes: [
      { q: "Rôle de l'arrangeur", r: "Adapter une œuvre à un autre effectif ou un autre style." },
      { q: "Arrangeur de l'album Porgy and Bess de 1958", r: "Russell Garcia." },
      { q: "Compositeur de La Marseillaise", r: "Rouget de Lisle, en 1792." },
      { q: "Musicien de cour de Louis XIV", r: "Jean-Baptiste Lully." },
      { q: "Strange Fruit", r: "Chanson contre les lynchages, chantée par Billie Holiday en 1939." },
      { q: "Hendrix à Woodstock", r: "En 1969, il joue l'hymne américain à la guitare électrique saturée." },
      { q: "Musiques nées de l'histoire de l'esclavage et de la ségrégation", r: "Spirituals, blues, gospel, jazz." },
      { q: "Question posée par Porgy and Bess", r: "La représentation d'une communauté noire par des auteurs blancs." },
      { q: "Musique à programme", r: "Une musique instrumentale qui raconte une histoire, comme la Symphonie fantastique." },
      { q: "Date de la Symphonie fantastique de Berlioz", r: "1830." },
      { q: "Création de la Fête de la musique", r: "1982, en France." },
      { q: "Différence entre interprète et compositeur", r: "Le compositeur écrit, l'interprète fait exister l'œuvre par ses choix." },
      { q: "Écoute aujourd'hui", r: "Surtout individuelle, au casque, en streaming." },
    ],
    quiz: [
      { q: "Qui a adapté Porgy and Bess pour l'album de 1958 ?",
        choix: ["George Gershwin, compositeur", "Norman Granz, producteur", "Russell Garcia, arrangeur", "Ira Gershwin, parolier"],
        bonne: 2, niv: 2,
        expl: "L'arrangeur adapte une œuvre à un autre effectif." },
      { q: "Qui a composé La Marseillaise ?",
        choix: ["Lully", "Rouget de Lisle", "Hector Berlioz", "Rameau"],
        bonne: 1, niv: 1,
        expl: "Elle date de 1792." },
      { q: "Pour quel roi Lully travaillait-il ?",
        choix: ["Louis XIV", "François Ier", "Napoléon Ier", "Frédéric II"],
        bonne: 0, niv: 1,
        expl: "La musique servait le prestige de la cour." },
      { q: "Que dénonce Strange Fruit, chanté par Billie Holiday ?",
        choix: ["La guerre du Vietnam", "Les lynchages dans le sud des États-Unis", "Le chômage des musiciens de jazz", "La fermeture des clubs de Harlem"],
        bonne: 1, niv: 2,
        expl: "La chanson date de 1939." },
      { q: "Quel geste de Jimi Hendrix à Woodstock est resté célèbre ?",
        choix: ["Un concert donné dans le noir", "La destruction d'un piano à queue sur scène", "Une reprise de Summertime avec un orchestre", "L'hymne américain joué à la guitare saturée"],
        bonne: 3, niv: 2,
        expl: "C'était en 1969." },
      { q: "Dans quelle histoire sont nés les spirituals et le blues ?",
        choix: ["Celle de l'esclavage et de la ségrégation", "Celle des cours princières européennes", "Celle des conservatoires du XIXe siècle", "Celle de la radio des années 1930"],
        bonne: 0, niv: 2,
        expl: "Ils expriment souffrance, foi et espoir." },
      { q: "Quel débat soulève Porgy and Bess ?",
        choix: ["L'usage de l'électronique dans un opéra", "Le refus de Gershwin d'écrire des airs", "La durée trop courte de l'œuvre", "La représentation d'une communauté noire par des auteurs blancs"],
        bonne: 3, niv: 3,
        expl: "L'œuvre a aussi donné de grands rôles à des chanteurs noirs." },
      { q: "Qu'est-ce qu'une musique à programme ?",
        choix: ["Une musique écrite pour la radio", "Une musique composée par ordinateur", "Une musique instrumentale qui raconte une histoire", "Une musique imposée au programme du bac"],
        bonne: 2, niv: 2,
        expl: "Exemple : la Symphonie fantastique." },
      { q: "En quelle année la Fête de la musique est-elle créée ?",
        choix: ["1968", "1975", "1982", "1978"],
        bonne: 2, niv: 1,
        expl: "Elle est née en France." },
      { q: "En quoi le musicien de jazz brouille-t-il les rôles ?",
        choix: ["Il refuse de jouer des œuvres écrites", "Il compose en improvisant pendant qu'il joue", "Il écrit des œuvres sans les jouer en public", "Il laisse le public choisir les notes"],
        bonne: 1, niv: 3,
        expl: "Il est à la fois interprète et créateur." },
      { q: "Comment écoute-t-on le plus souvent la musique aujourd'hui ?",
        choix: ["En concert, dans une salle", "À la radio, en famille", "Sur des disques 78 tours", "Seul, au casque, en streaming"],
        bonne: 3, niv: 3,
        expl: "Autrefois, l'écoute était d'abord en direct." },
    ] },
  { chapitre: "musique-13",
    fiche: `## Champ 3 : culture musicale et artistique dans l'histoire et la géographie

Ce champ demande de **situer** une musique : à quelle époque, dans quel lieu, sous quelles influences. Il invite aussi à suivre la **circulation** des musiques entre les pays et les siècles. Thématiques possibles : mondialisation culturelle ; variants et invariants du langage musical.

### Les grandes périodes (repères)
- **Moyen Âge** : chant grégorien, puis polyphonie ; XIVe siècle : **ars nova** (Machaut) et **ars subtilior**.
- **Renaissance** (vers 1450-1600) : polyphonie vocale (Josquin des Prez, Palestrina), chanson française.
- **Baroque** (vers 1600-1750) : naissance de l'opéra (Monteverdi, L'Orfeo, 1607), basse continue, concerto (Vivaldi), J.-S. Bach, Haendel.
- **Période préclassique et classique** (vers 1750-1820) : style galant et style sensible (C. P. E. Bach), puis Haydn, Mozart, Beethoven ; symphonie, quatuor, sonate.
- **Romantisme** (XIXe siècle) : expression personnelle, grand orchestre (Berlioz, Chopin, Wagner, Verdi).
- **XXe et XXIe siècles** : Debussy, Stravinsky, musique concrète et électronique ; et en même temps jazz, blues, rock, rap, musiques électroniques de danse.
- Ces dates sont des **repères** : les styles se chevauchent et changent selon les pays.

### Les échanges entre les lieux
- Au XIVe siècle, les musiciens circulent entre les cours : **Ciconia**, né à Liège, fait carrière en Italie.
- Au XVIIIe siècle, le **style italien** se répand dans toute l'Europe ; les cours allemandes engagent des musiciens de partout.
- En 1889, à l'**Exposition universelle** de Paris, Debussy entend un **gamelan** javanais (orchestre de percussions métalliques), qui influence son écriture.
- Le **jazz** naît aux États-Unis de la rencontre de traditions africaines et européennes, puis arrive en Europe à la fin de la Première Guerre mondiale. Darius Milhaud écrit **La Création du monde** (1923) après avoir entendu du jazz à Harlem.

### Les rencontres de styles
- Gershwin mêle l'orchestre symphonique et le jazz dans **Rhapsody in Blue** (1924), puis l'opéra et les musiques afro-américaines dans **Porgy and Bess** (1935).
- L'album de 1958 fait passer un opéra dans le monde du **jazz vocal** : une même œuvre change de style.
- Le jazz **manouche** de Django Reinhardt (années 1930) mêle le swing américain et la tradition des musiciens manouches.

### La mondialisation culturelle
- Avec le disque, la radio, puis Internet, les musiques circulent **très vite** dans le monde entier.
- L'expression **musiques du monde** (world music) se répand à la fin des années 1980 pour vendre en Occident des musiques d'autres régions.
- Risques : **uniformisation** des goûts, disparition de traditions locales (sujet de bac 2026). Chances : découvertes, métissages, nouvelles créations.

### Variants et invariants
- Des **invariants** traversent les époques : la répétition, le canon, la question-réponse, la mélodie accompagnée.
- Des **variants** changent : les échelles (modes, gammes pentatoniques), les instruments, la place de l'improvisation, la notation.
- Le **canon** se retrouve chez Machaut et Cordier comme dans des pièces d'aujourd'hui ; la **forme ritournelle** de C. P. E. Bach rappelle le principe du refrain dans la chanson.

### À retenir pour le bac
- Repères : Moyen Âge (ars nova), Renaissance, baroque (1600-1750), classique (1750-1820), romantisme, XXe siècle.
- Circulation : Ciconia (Liège vers l'Italie), style italien au XVIIIe, gamelan et Debussy (1889), jazz en Europe après 1918, Milhaud (1923).
- Rencontres : Rhapsody in Blue (1924), Porgy and Bess (1935), l'album de 1958, Django Reinhardt.
- Mondialisation : diffusion rapide, musiques du monde, uniformisation ou métissage ; invariants et variants.`,
    cartes: [
      { q: "Période baroque (repères)", r: "Vers 1600-1750 : opéra, basse continue, concerto." },
      { q: "Période classique (repères)", r: "Vers 1750-1820 : Haydn, Mozart, Beethoven." },
      { q: "Premier grand opéra de Monteverdi", r: "L'Orfeo, 1607." },
      { q: "Gamelan", r: "Orchestre javanais de percussions métalliques, entendu par Debussy à Paris en 1889." },
      { q: "La Création du monde", r: "Ballet de Darius Milhaud (1923), inspiré du jazz entendu à Harlem." },
      { q: "Rhapsody in Blue", r: "Œuvre de Gershwin (1924) qui mêle orchestre symphonique et jazz." },
      { q: "Jazz manouche", r: "Le swing américain mêlé à la tradition manouche, avec Django Reinhardt (années 1930)." },
      { q: "Musiques du monde", r: "Expression répandue à la fin des années 1980 pour diffuser en Occident des musiques d'autres régions." },
      { q: "Risque de la mondialisation musicale", r: "L'uniformisation des goûts et la disparition de traditions locales." },
      { q: "Invariant musical", r: "Un procédé qui traverse les époques : répétition, canon, question-réponse." },
      { q: "Variant musical", r: "Ce qui change selon les lieux et les époques : échelles, instruments, notation, improvisation." },
      { q: "Exemple de circulation au XIVe siècle", r: "Ciconia, né à Liège, fait carrière en Italie." },
      { q: "Arrivée du jazz en Europe", r: "À la fin de la Première Guerre mondiale." },
    ],
    quiz: [
      { q: "Quelle période va environ de 1600 à 1750 ?",
        choix: ["La Renaissance", "Le classicisme", "Le baroque", "Le romantisme"],
        bonne: 2, niv: 1,
        expl: "Elle s'ouvre avec les premiers opéras." },
      { q: "Quel compositeur appartient à la période classique ?",
        choix: ["Machaut", "Monteverdi", "Mozart", "Debussy"],
        bonne: 2, niv: 1,
        expl: "Avec Haydn et Beethoven." },
      { q: "Où Debussy a-t-il entendu un gamelan javanais ?",
        choix: ["À l'Exposition universelle de Paris, en 1889", "Lors d'un voyage à Java, en 1910", "Au conservatoire de Vienne, en 1880", "Sur un disque de jazz, en 1925"],
        bonne: 0, niv: 2,
        expl: "Ce son influence son écriture." },
      { q: "Qu'est-ce qui a inspiré La Création du monde de Milhaud ?",
        choix: ["Le jazz entendu à Harlem", "Le gamelan javanais", "Les chants grégoriens", "La musique électronique"],
        bonne: 0, niv: 2,
        expl: "Le ballet date de 1923." },
      { q: "Quelle œuvre de Gershwin mêle orchestre symphonique et jazz en 1924 ?",
        choix: ["Porgy and Bess", "Rhapsody in Blue", "Summertime", "An American in Paris"],
        bonne: 1, niv: 2,
        expl: "Porgy and Bess date de 1935." },
      { q: "Qui a créé le jazz manouche ?",
        choix: ["Louis Armstrong", "Duke Ellington et son orchestre", "Miles Davis", "Django Reinhardt"],
        bonne: 3, niv: 2,
        expl: "Dans les années 1930." },
      { q: "Quand se répand l'expression « musiques du monde » ?",
        choix: ["Au début du XXe siècle", "À la fin des années 1980", "Dans les années 1950", "Au XIXe siècle"],
        bonne: 1, niv: 3,
        expl: "Pour diffuser en Occident des musiques d'autres régions." },
      { q: "Quel risque de la mondialisation le sujet de bac 2026 évoquait-il ?",
        choix: ["La fin de l'enregistrement en studio", "L'interdiction des musiques anciennes", "La disparition de traditions locales", "La hausse du prix des instruments"],
        bonne: 2, niv: 3,
        expl: "Il parlait aussi d'uniformisation des goûts." },
      { q: "Lequel est un invariant musical ?",
        choix: ["Le gamelan javanais", "La guitare électrique", "Le canon", "Le diapason à 440 Hz"],
        bonne: 2, niv: 2,
        expl: "On le trouve chez Machaut comme aujourd'hui." },
      { q: "Pourquoi les dates des périodes sont-elles des repères ?",
        choix: ["Les historiens ne connaissent pas les dates des œuvres", "Chaque période commence le 1er janvier d'un siècle", "Elles sont fixées par une loi", "Les styles se chevauchent et changent selon les pays"],
        bonne: 3, niv: 3,
        expl: "On parle d'évolutions, pas de coupures." },
      { q: "Quel musicien du programme montre la circulation au XIVe siècle ?",
        choix: ["Ciconia, de Liège à l'Italie", "Gershwin, de New York à Paris", "C. P. E. Bach, de Berlin à Vienne", "Armstrong, de Chicago à Londres"],
        bonne: 0, niv: 1,
        expl: "Il est mort à Padoue en 1412." },
    ] },
  { chapitre: "musique-14",
    fiche: `## La vie musicale contemporaine : métiers, droits, économie

L'exercice 3 propose un document (article, entretien, chiffres) sur la musique aujourd'hui. Le programme de terminale demande de **situer sa pratique, ses goûts et ses projets** dans le contexte économique, social et professionnel, et de connaître les **grandes catégories de métiers**. Thématique utile : droit et économie de la musique.

### Les métiers de la musique
- **Création** : compositeur, auteur (paroles), arrangeur, orchestrateur.
- **Interprétation** : instrumentiste, chanteur, chef d'orchestre ou de chœur, musicien de studio.
- **Technique** : ingénieur du son, régisseur, technicien lumière, luthier et facteur d'instruments.
- **Production et diffusion** : producteur, éditeur, label, tourneur, programmateur de salle ou de festival, attaché de presse.
- **Transmission et médiation** : professeur, médiateur culturel, musicologue, critique.
- En France, beaucoup d'artistes et de techniciens du spectacle sont **intermittents du spectacle** : ils enchaînent des contrats courts et bénéficient d'un régime d'assurance chômage adapté s'ils ont travaillé assez d'heures.

### Les droits
- Le **droit d'auteur** protège l'œuvre (musique et paroles). Il comprend un **droit moral** (respect de l'œuvre et du nom de l'auteur, sans limite de durée) et des **droits patrimoniaux** (être payé quand l'œuvre est utilisée), qui durent jusqu'à **70 ans après la mort** de l'auteur. Ensuite, l'œuvre entre dans le **domaine public**.
- La **Sacem** (Société des auteurs, compositeurs et éditeurs de musique, fondée en 1851) collecte et reverse les droits des auteurs, compositeurs et éditeurs quand leurs œuvres sont jouées, diffusées ou reproduites.
- Les **droits voisins** (loi de 1985) rémunèrent les **artistes-interprètes** et les **producteurs** pour l'utilisation de leurs enregistrements.

### L'économie de la musique enregistrée
- Le **streaming** (écoute en ligne par abonnement ou gratuite avec publicité) est devenu la première source de revenus de la musique enregistrée.
- La rémunération se fait le plus souvent **au prorata** de l'ensemble des écoutes : beaucoup d'artistes gagnent très peu par écoute ; le débat porte sur d'autres modèles (paiement selon ce que chaque abonné écoute réellement).
- Le **vinyle** connaît un retour comme objet, à côté du numérique.
- Les **algorithmes de recommandation** et les réseaux sociaux influencent ce qu'on écoute et la durée des morceaux.

### Le spectacle vivant
- Les **concerts** et les **festivals** sont une part essentielle des revenus des artistes.
- Les **salles de musiques actuelles** (SMAC), les opéras, les orchestres, les conservatoires reçoivent souvent des **aides publiques**.
- Le **Centre national de la musique** (CNM, créé en 2020) soutient la filière.

### Les politiques publiques
- Les **quotas** de chansons d'expression française à la radio (loi de 1994).
- La Fête de la musique (1982), l'éducation musicale à l'école, les aides à la création.

### Répondre à l'exercice 3
- Identifier les **idées du document** et sa source (auteur, date, type).
- Relier à un **champ de questionnement** : souvent « La musique, l'homme et la société ».
- Argumenter avec des **exemples précis** : œuvres du programme limitatif, autres œuvres, sa **pratique personnelle** de musicien et d'auditeur.

### À retenir pour le bac
- Métiers : création, interprétation, technique, production et diffusion, transmission ; intermittence.
- Droits : droit moral et patrimonial (70 ans après la mort), domaine public, Sacem (1851), droits voisins (1985).
- Économie : streaming, rémunération au prorata, vinyle, algorithmes ; concerts et festivals, aides publiques, CNM (2020).
- Exercice 3 : idées du document, champ de questionnement, exemples et pratique personnelle.`,
    cartes: [
      { q: "Grandes familles de métiers de la musique", r: "Création, interprétation, technique, production et diffusion, transmission et médiation." },
      { q: "Tourneur", r: "Celui qui organise et vend les tournées de concerts d'un artiste." },
      { q: "Intermittent du spectacle", r: "Artiste ou technicien qui enchaîne des contrats courts, avec un régime d'assurance chômage adapté." },
      { q: "Droit moral", r: "Le respect de l'œuvre et du nom de l'auteur, sans limite de durée." },
      { q: "Droits patrimoniaux", r: "Le droit d'être payé pour l'utilisation de l'œuvre, jusqu'à 70 ans après la mort de l'auteur." },
      { q: "Domaine public", r: "L'œuvre peut être utilisée librement quand les droits patrimoniaux ont expiré." },
      { q: "Sacem", r: "Société des auteurs, compositeurs et éditeurs de musique, fondée en 1851, qui collecte et reverse les droits." },
      { q: "Droits voisins", r: "Rémunération des artistes-interprètes et des producteurs pour leurs enregistrements (loi de 1985)." },
      { q: "Première source de revenus de la musique enregistrée", r: "Le streaming." },
      { q: "Rémunération au prorata", r: "Les revenus sont partagés selon la part de chaque artiste dans l'ensemble des écoutes." },
      { q: "Centre national de la musique", r: "Organisme public créé en 2020 pour soutenir la filière." },
      { q: "Quotas à la radio", r: "Une part de chansons d'expression française imposée aux radios (loi de 1994)." },
      { q: "SMAC", r: "Salle de musiques actuelles, soutenue par des aides publiques." },
    ],
    quiz: [
      { q: "Lequel est un métier technique de la musique ?",
        choix: ["Ingénieur du son", "Compositeur", "Éditeur", "Critique musical"],
        bonne: 0, niv: 1,
        expl: "Le régisseur et le luthier aussi." },
      { q: "Que fait un tourneur ?",
        choix: ["Il fabrique des instruments en bois tourné", "Il écrit les paroles des chansons", "Il enregistre les concerts en direct", "Il organise et vend les tournées d'un artiste"],
        bonne: 3, niv: 2,
        expl: "C'est un métier de la diffusion." },
      { q: "Qu'est-ce que le droit moral de l'auteur ?",
        choix: ["Le respect de l'œuvre et de son nom, sans limite de durée", "Le droit d'être payé à chaque diffusion pendant 70 ans", "Le droit de jouer l'œuvre d'un autre sans payer", "Une règle de politesse entre musiciens"],
        bonne: 0, niv: 2,
        expl: "Les droits patrimoniaux, eux, ont une durée." },
      { q: "Combien de temps durent les droits patrimoniaux en France ?",
        choix: ["Jusqu'à 20 ans après la création de l'œuvre", "Jusqu'à 70 ans après la mort de l'auteur", "Jusqu'à la mort de l'auteur", "Jusqu'à 100 ans après la publication"],
        bonne: 1, niv: 2,
        expl: "Ensuite, l'œuvre entre dans le domaine public." },
      { q: "Que fait la Sacem ?",
        choix: ["Elle finance la construction des salles de concert", "Elle collecte et reverse les droits des auteurs et compositeurs", "Elle délivre les diplômes des conservatoires", "Elle fixe le prix des abonnements de streaming"],
        bonne: 1, niv: 1,
        expl: "Elle a été fondée en 1851." },
      { q: "Qui rémunèrent les droits voisins ?",
        choix: ["Les auteurs et les compositeurs", "Les professeurs de musique", "Les artistes-interprètes et les producteurs", "Les fabricants d'instruments"],
        bonne: 2, niv: 3,
        expl: "Ils datent de la loi de 1985." },
      { q: "Quelle est aujourd'hui la première source de revenus de la musique enregistrée ?",
        choix: ["Le disque compact", "Le vinyle", "La cassette", "Le streaming"],
        bonne: 3, niv: 1,
        expl: "Le vinyle revient comme objet, mais reste minoritaire." },
      { q: "Que critique-t-on dans la rémunération au prorata ?",
        choix: ["Elle paie chaque artiste le même salaire fixe", "Elle interdit les écoutes gratuites", "Elle rapporte très peu par écoute à beaucoup d'artistes", "Elle ne concerne que la musique classique"],
        bonne: 2, niv: 3,
        expl: "D'autres modèles sont débattus." },
      { q: "Quel organisme public soutient la filière musicale depuis 2020 ?",
        choix: ["La Sacem", "L'IRCAM", "Le Centre national de la musique", "Le GRM"],
        bonne: 2, niv: 2,
        expl: "Son sigle est CNM." },
      { q: "Qu'imposent les quotas de la loi de 1994 ?",
        choix: ["Un nombre de concerts par an pour chaque artiste", "Un prix minimum pour les disques", "Une durée maximale pour les chansons", "Une part de chansons d'expression française à la radio"],
        bonne: 3, niv: 2,
        expl: "Ils visent la diversité et la création en français." },
      { q: "Que faut-il mobiliser pour argumenter dans l'exercice 3 ?",
        choix: ["Le résumé du document, phrase par phrase, sans avis", "Des chiffres inventés pour convaincre", "Les œuvres du programme, d'autres œuvres et sa pratique personnelle", "L'analyse technique d'un extrait diffusé"],
        bonne: 2, niv: 3,
        expl: "Le sujet 2026 demandait de s'appuyer sur sa pratique personnelle." },
    ] },
  { chapitre: "musique-15",
    fiche: `## Méthode : description et commentaire comparé

Les exercices 1 et 2 reposent sur l'**écoute réitérée** : on entend les extraits plusieurs fois, avec des silences entre les diffusions. La réussite tient à une bonne **prise de notes** et à un texte **organisé**.

### Avant la première écoute
- Lire tout le sujet pendant les minutes de prise de connaissance : titres, compositeurs, dates, durée des extraits, **entrées d'analyse**, document joint (partition, texte, traduction).
- Préparer au brouillon un **tableau de repérage** : une colonne par paramètre (timbre, mélodie, rythme et tempo, nuances, écriture, forme), une ligne par moment de l'extrait.
- Pour l'exercice 2, préparer une colonne par extrait, et une ligne par entrée d'analyse.

### Pendant les écoutes
- **Première écoute** : impression d'ensemble, effectif, caractère, grandes parties. Ne pas tout noter.
- **Écoutes suivantes** : une écoute, un objectif (la forme, puis les timbres, puis le détail rythmique).
- Noter des **repères de temps** approximatifs et des mots précis.
- Utiliser la **feuille de papier à musique** pour noter un motif rythmique ou une ligne mélodique simple.
- Profiter des silences pour compléter et organiser.

### Exercice 1 : rédiger la description
- **Introduction** courte : identifier l'extrait (compositeur, titre, date, genre), annoncer le caractère général.
- **Développement** : suivre soit l'**ordre du temps** (parties successives), soit l'ordre des **paramètres**. Dans les deux cas, montrer comment les éléments s'organisent et évoluent.
- **Conclusion** : une phrase qui synthétise le caractère et la construction.
- Pas d'avis non justifié : « émouvant » doit être expliqué par des éléments entendus.

### Exercice 2 : le commentaire comparé
- Ce n'est **pas** deux descriptions juxtaposées : la grille officielle sanctionne des « extraits juxtaposés ».
- **Introduction** : présenter les deux extraits (époque, genre, effectif), dire ce qui les rapproche à première vue et ce qui les oppose, annoncer le plan.
- **Plan** : une partie par entrée d'analyse donnée par le sujet, ou un plan **ressemblances / différences** ; dans chaque partie, comparer les deux extraits.
- Utiliser les **connecteurs** de la comparaison : de même, comme, à l'inverse, tandis que, alors que, en revanche.
- **Exploiter la partition** de l'extrait hors programme : citer une mesure, un instrument, une indication de nuance ou de tempo, pour prouver ce qu'on a entendu.
- **Mobiliser ses connaissances** sur l'œuvre du programme limitatif : contexte, auteur, style, autres interprétations.
- **Conclusion** : répondre à la question de fond (deux manières de traiter la voix, l'espace, la forme…) et ouvrir vers une autre œuvre.

### Exemples d'entrées d'analyse tirées des sujets 2026
- « Traitement de la voix ; Écritures et plans sonores ; Organisation formelle » (Machaut comparé à un arrangement vocal de Giant Steps).
- « Timbres et plans sonores ; Organisation formelle et évolution des motifs ; Temps et rythme » (Jeff Mills comparé à La Création du monde de Milhaud).

### Gestion du temps
- Exercice 1 : environ 40 minutes, diffusions comprises ; il reste une quinzaine de minutes pour rédiger après la dernière écoute.
- Exercice 2 : environ 1 h 50 ; après la dernière diffusion, il reste près d'une heure pour rédiger.
- Exercice 3 : environ 1 heure.
- Rédiger au propre directement à partir d'un plan détaillé : pas le temps de tout recopier.

### À retenir pour le bac
- Lire le sujet, préparer un tableau de repérage, un objectif par écoute, des repères de temps.
- Description : identifier, décrire l'organisation et l'évolution, conclure.
- Comparé : ne pas juxtaposer ; un plan par entrées d'analyse, des connecteurs, la partition citée, les connaissances sur l'œuvre du programme.
- Garder du temps pour rédiger après la dernière écoute.`,
    cartes: [
      { q: "Tableau de repérage", r: "Au brouillon : une colonne par paramètre, une ligne par moment de l'extrait." },
      { q: "Objectif de la première écoute", r: "Impression d'ensemble : effectif, caractère, grandes parties." },
      { q: "Objectif des écoutes suivantes", r: "Un point précis à chaque fois : la forme, les timbres, le détail." },
      { q: "Usage de la feuille de papier à musique", r: "Noter un motif ou une ligne simple pour appuyer son propos." },
      { q: "Introduction de la description", r: "Identifier l'extrait et annoncer son caractère général." },
      { q: "Deux façons d'organiser la description", r: "Suivre l'ordre du temps ou l'ordre des paramètres." },
      { q: "Défaut sanctionné dans le commentaire comparé", r: "Des extraits juxtaposés, décrits l'un après l'autre." },
      { q: "Plan conseillé du commentaire comparé", r: "Une partie par entrée d'analyse, en comparant les deux extraits dans chacune." },
      { q: "Connecteurs de la comparaison", r: "De même, comme, à l'inverse, tandis que, alors que, en revanche." },
      { q: "Usage de la partition au commentaire", r: "Citer une mesure, un instrument, une indication pour prouver ce qu'on a entendu." },
      { q: "Entrées d'analyse de 2026 (métropole)", r: "Traitement de la voix ; écritures et plans sonores ; organisation formelle." },
      { q: "Temps restant après la dernière écoute de l'exercice 2 (2026)", r: "Environ 54 minutes." },
      { q: "Conclusion du commentaire comparé", r: "Répondre à la question de fond et ouvrir vers une autre œuvre." },
    ],
    quiz: [
      { q: "Que faire pendant les minutes de prise de connaissance du sujet ?",
        choix: ["Commencer à rédiger l'introduction au propre", "Relire ses fiches de cours sur l'œuvre", "Lire tout le sujet et préparer un tableau de repérage", "Attendre la première diffusion sans rien écrire"],
        bonne: 2, niv: 1,
        expl: "Il faut repérer les entrées d'analyse et les documents." },
      { q: "Quel objectif donner à la première écoute ?",
        choix: ["Le relevé de chaque note de la mélodie", "Le minutage précis de chaque mesure", "La rédaction de la conclusion", "Une impression d'ensemble"],
        bonne: 3, niv: 1,
        expl: "Effectif, caractère, grandes parties." },
      { q: "Pourquoi donner un objectif à chaque écoute ?",
        choix: ["Pour ne pas tout chercher en même temps", "Pour finir avant la fin de l'épreuve", "Parce que le sujet l'impose", "Pour éviter d'utiliser la partition"],
        bonne: 0, niv: 2,
        expl: "Une écoute pour la forme, une pour les timbres…" },
      { q: "Quel défaut la grille officielle sanctionne-t-elle dans l'exercice 2 ?",
        choix: ["Un plan en trois parties", "Des extraits juxtaposés", "L'usage de la partition", "Une introduction qui situe les œuvres"],
        bonne: 1, niv: 2,
        expl: "Il faut comparer dans chaque partie." },
      { q: "Quel plan convient au commentaire comparé ?",
        choix: ["Une partie par entrée d'analyse, en comparant dans chacune", "Une partie sur le premier extrait, une sur le second", "Une partie sur les compositeurs, une sur les dates", "Un seul paragraphe sans parties"],
        bonne: 0, niv: 2,
        expl: "On peut aussi bâtir un plan ressemblances et différences." },
      { q: "À quoi sert la partition fournie dans l'exercice 2 ?",
        choix: ["À remplacer l'écoute de l'extrait", "À prouver et préciser ce qu'on a entendu", "À recopier des mesures pour remplir la copie", "À vérifier la date de composition"],
        bonne: 1, niv: 2,
        expl: "On cite une mesure, un instrument, une indication." },
      { q: "Quel connecteur sert à marquer une différence ?",
        choix: ["De même", "En revanche", "Comme", "Ainsi que, de la même façon"],
        bonne: 1, niv: 1,
        expl: "Les autres marquent une ressemblance." },
      { q: "Comment justifier l'adjectif « émouvant » dans une description ?",
        choix: ["Par son goût personnel, sans autre précision", "Par la célébrité du compositeur", "Par des éléments entendus : tempo lent, mode mineur, voix en retrait", "Par la longueur de l'extrait"],
        bonne: 2, niv: 3,
        expl: "Un avis doit être expliqué." },
      { q: "Quelles connaissances mobiliser sur l'extrait du programme limitatif ?",
        choix: ["La biographie complète de chaque musicien", "Contexte, auteur, style et autres interprétations", "Le prix de vente du disque à sa sortie", "La liste des œuvres du compositeur, de la première à la dernière"],
        bonne: 1, niv: 3,
        expl: "Elles étayent l'analyse sans la remplacer." },
      { q: "Combien de temps restait-il pour rédiger après la dernière diffusion de l'exercice 2 en 2026 ?",
        choix: ["Environ 16 minutes", "Environ 1 h 30", "Environ 54 minutes", "Environ 30 minutes"],
        bonne: 2, niv: 3,
        expl: "Environ 16 minutes pour l'exercice 1." },
      { q: "Que doit faire la conclusion du commentaire comparé ?",
        choix: ["Résumer chaque extrait séparément", "Donner la note qu'on mérite", "Répondre à la question de fond et ouvrir", "Recopier l'introduction"],
        bonne: 2, niv: 2,
        expl: "Par exemple : deux manières de traiter la voix." },
    ] },
  { chapitre: "musique-16",
    fiche: `## Méthode : réussir l'oral de création collective

L'oral compte pour **la moitié** de la note de l'épreuve. Il dure **30 minutes, sans préparation** : on joue, on explique, on répond aux questions de deux professeurs de musique. Barème : **interprétation 15 points**, **exposé et entretien 5 points**.

### Préparer la création pendant l'année
- La pièce est une **création collective** élaborée en terminale : composition, arrangement, improvisation organisée.
- Choisir des **partenaires** fiables (chanteurs ou instrumentistes, si possible de la spécialité) et prévoir les répétitions. Ils sont là le jour de l'oral : un enregistrement ne peut pas les remplacer, et venir seul coûte **5 points**.
- Partir d'une **œuvre du programme limitatif** : un procédé de Machaut ou de Cordier (canon, rétrogradation, cercle), la forme ritournelle de C. P. E. Bach (alternance tutti et solo), une chanson de Porgy and Bess réarrangée (scat, swing, question-réponse).
- Relier la pièce à un **champ de questionnement** : le temps (canon, boucle), la société (une chanson qui raconte), l'histoire (un style ancien transformé).
- Garder une trace du travail : brouillons, enregistrements de répétition, schémas.

### La représentation graphique
- Le candidat peut communiquer au jury la **représentation graphique** la plus adaptée de sa pièce : partition, grille d'accords, plan avec des couleurs, dessin.
- Elle sert de support à l'entretien et montre le processus de création ; elle **n'est pas notée**.
- Le corpus « Écritures, formes, graphismes » en donne des idées : un canon écrit en cercle, une forme dessinée.

### Le document de synthèse
- Deux pages au plus, visées par le professeur et le chef d'établissement.
- Il liste les œuvres **étudiées, écoutées, jouées et créées** dans l'année et les thématiques travaillées. Sans lui, le jury peut interroger sur tout le programme.

### Le jour de l'oral
- **Interprétation** : soigner la justesse, la mise en place rythmique, l'écoute des partenaires, les nuances, l'engagement. C'est l'essentiel des points.
- **Exposé** (avant ou après le jeu, 15 minutes au plus avec l'interprétation) : présenter la démarche de la conception à la réalisation, les **références** et influences, les **techniques** utilisées, les **choix** artistiques, le lien avec une œuvre du programme limitatif et un champ de questionnement.
- **Entretien** : le jury interroge sur le projet, l'interprétation, la **répartition des rôles** dans le groupe et les liens avec les champs. L'exposé et l'entretien sont **individuels**, même si le jeu est collectif.

### Un plan d'exposé efficace
- L'**idée de départ** : d'où vient la pièce (une œuvre, une image, un texte).
- Le **processus** : étapes, essais, ce qu'on a gardé et abandonné.
- Les **choix** : effectif, forme, écriture, tempo, nuances ; pourquoi.
- Les **liens** : œuvre du programme limitatif, champ de questionnement.
- Le **bilan** : ce que la création a appris, ce qu'on changerait.

### L'oral de contrôle
- Si l'on passe au second groupe : présenter l'**enregistrement audio-vidéo** d'une pièce collective (au moins deux interprètes, dont soi), en parler, puis faire un **commentaire comparé oral** de deux brefs extraits, dont un du programme limitatif, entendus deux fois. Garder cet enregistrement de côté pendant l'année.

### À retenir pour le bac
- 30 minutes sans préparation : interprétation (15 points), exposé et entretien (5 points) ; moins 5 points si l'on vient seul.
- Partir d'une œuvre du programme limitatif et viser un champ de questionnement.
- Représentation graphique facultative et non notée ; document de synthèse de deux pages.
- Exposé : idée, processus, choix, liens, bilan ; entretien individuel.`,
    cartes: [
      { q: "Durée et préparation de l'oral", r: "30 minutes, sans préparation." },
      { q: "Barème de l'oral", r: "Interprétation 15 points, exposé et entretien 5 points." },
      { q: "Jury de l'oral", r: "Deux professeurs de musique." },
      { q: "Ce qu'on interprète à l'oral", r: "Une création collective élaborée pendant la terminale." },
      { q: "Pénalité pour un candidat seul", r: "Un retrait de 5 points." },
      { q: "Remplacer les partenaires par un enregistrement", r: "Ce n'est pas autorisé." },
      { q: "Statut de la représentation graphique", r: "Facultative, support de l'entretien, non notée." },
      { q: "Durée maximale interprétation et exposé", r: "15 minutes." },
      { q: "Contenu de l'exposé", r: "Démarche, références, techniques, choix, liens avec une œuvre du programme limitatif et un champ." },
      { q: "Questions possibles à l'entretien", r: "Le projet, l'interprétation, la répartition des rôles, les liens avec les champs." },
      { q: "Caractère de l'exposé et de l'entretien", r: "Toujours individuels, même si le jeu est collectif." },
      { q: "Plan d'exposé conseillé", r: "Idée de départ, processus, choix, liens, bilan." },
      { q: "Enregistrement à garder pour l'oral de contrôle", r: "Une vidéo d'une pièce collective jouée par au moins deux personnes dont soi." },
    ],
    quiz: [
      { q: "Combien de temps de préparation a-t-on à l'oral ?",
        choix: ["Aucun", "15 minutes", "30 minutes", "1 heure"],
        bonne: 0, niv: 1,
        expl: "L'oral dure 30 minutes sans préparation." },
      { q: "Combien de points vaut l'interprétation ?",
        choix: ["10 points", "5 points", "15 points", "8 points"],
        bonne: 2, niv: 1,
        expl: "L'exposé et l'entretien valent 5 points." },
      { q: "Que se passe-t-il si les partenaires sont absents et remplacés par un enregistrement ?",
        choix: ["Le candidat n'est pas pénalisé", "Le jury joue avec lui", "L'oral est reporté d'office", "Ce n'est pas autorisé"],
        bonne: 3, niv: 2,
        expl: "Un candidat qui vient seul perd 5 points." },
      { q: "Quel est le statut de la représentation graphique ?",
        choix: ["Facultative et non notée", "Obligatoire et notée sur 5", "Interdite pendant l'oral", "Remplacée par le document de synthèse"],
        bonne: 0, niv: 2,
        expl: "Elle sert de support à l'entretien." },
      { q: "Avec quoi l'exposé doit-il relier la création ?",
        choix: ["Un sujet d'écrit des années précédentes", "Une œuvre du programme limitatif et un champ de questionnement", "La biographie de chaque partenaire", "Une œuvre étudiée en première, hors programme"],
        bonne: 1, niv: 2,
        expl: "Au moins une œuvre et au moins un champ." },
      { q: "Quel procédé du programme limitatif peut nourrir une création ?",
        choix: ["Un canon écrit en cercle, comme chez Cordier", "Une notation entièrement à l'encre rouge, sans texte", "Un tempo identique à celui d'un métronome", "Une pièce sans interprète sur scène"],
        bonne: 0, niv: 2,
        expl: "La forme ritournelle ou le scat aussi." },
      { q: "L'exposé et l'entretien sont-ils collectifs ?",
        choix: ["Non, ils sont individuels", "Oui, tout le groupe répond", "Oui, mais un seul parle", "Non, il n'y a pas d'entretien"],
        bonne: 0, niv: 1,
        expl: "Le jeu, lui, est collectif." },
      { q: "Sur quoi le jury peut-il interroger à l'entretien ?",
        choix: ["Les notes du candidat dans les autres matières", "La répartition des rôles dans le groupe", "Le prix des instruments utilisés", "La vie privée des partenaires"],
        bonne: 1, niv: 3,
        expl: "Aussi le projet, l'interprétation et les champs." },
      { q: "Que risque un candidat sans document de synthèse ?",
        choix: ["Une note de zéro à l'oral", "De ne pas pouvoir jouer", "De perdre 5 points d'office", "D'être interrogé sur tout le programme"],
        bonne: 3, niv: 3,
        expl: "Le document cadre l'entretien." },
      { q: "Quel élément pèse le plus dans la note de l'oral ?",
        choix: ["La longueur de l'exposé", "La beauté de la représentation graphique", "La qualité de l'interprétation", "Le nombre de partenaires"],
        bonne: 2, niv: 2,
        expl: "Elle vaut 15 points sur 20." },
      { q: "Que faut-il garder pour un éventuel oral de contrôle ?",
        choix: ["L'enregistrement vidéo d'une pièce collective", "Les copies de l'année", "Le sujet de l'écrit", "Un instrument de rechange"],
        bonne: 0, niv: 3,
        expl: "Au moins deux interprètes, dont soi." },
    ] },
  ],
  methode: [
    {
      "id": "musique-m1",
      "mat": "musique",
      "titre": "Décrire un bref extrait (exercice 1)",
      "formules": [
        "Vous décrirez avec un vocabulaire adapté les éléments caractéristiques et l'organisation musicale de l'extrait diffusé selon le plan de diffusion précisé ci-dessous."
      ],
      "vu": [
        "Bac 2026 métropole : Clara Schumann, Andante du Trio avec piano op. 17 (4 diffusions, 40 minutes, 6 points)",
        "Bac 2026 Antilles-Guyane : Mozart, Idoménée, acte I, scène 3, avec la traduction du texte (6 points)"
      ],
      "pts": "6 points (sujets 2026)",
      "attendu": "Une description claire et ordonnée, qui identifie les caractéristiques principales (effectif, timbres, mélodie, rythme, tempo, nuances, écriture) avec le vocabulaire juste, et qui montre comment l'extrait est organisé et évolue dans le temps. La grille parle d'une écoute « fine et sélective » : il faut hiérarchiser, pas tout énumérer.",
      "etapes": [
        "Lire le sujet : compositeur, titre, date, genre, durée de l'extrait, document joint",
        "Préparer un tableau de repérage : paramètres en colonnes, moments de l'extrait en lignes",
        "Première écoute : effectif, caractère, grandes parties",
        "Écoutes suivantes : un objectif par écoute (forme, puis timbres, puis détails)",
        "Choisir un ordre : le temps (parties successives) ou les paramètres",
        "Rédiger : introduction qui identifie, développement avec repères de temps, conclusion qui résume le caractère et la construction"
      ],
      "mots": [
        "timbre",
        "registre",
        "mouvement conjoint ou disjoint",
        "tempo",
        "mesure binaire ou ternaire",
        "nuances",
        "mélodie accompagnée",
        "forme ABA"
      ],
      "pieges": [
        "Écrire des impressions sans les justifier par des éléments entendus",
        "Énumérer des paramètres sans dire comment ils évoluent",
        "Oublier de situer les remarques dans le temps",
        "Raconter l'histoire du compositeur au lieu de décrire la musique"
      ],
      "cas": "Notes d'écoute prises au brouillon sur une pièce imaginée pour l'entraînement (piano et violoncelle, 2 minutes 30) : début piano seul, accords tenus, nuance piano ; à 0'20, le violoncelle entre avec une mélodie lente dans le médium, legato, mouvement surtout conjoint ; à 1'05, tempo plus vif, piano en arpèges, crescendo jusqu'au forte, le violoncelle monte dans l'aigu ; à 1'50, retour de la mélodie du début, plus douce, ralentissement final.",
      "question": "Rédigez le paragraphe central d'une description organisée à partir de ces notes.",
      "modele": "L'extrait suit une forme en trois temps, de type ABA'. Dans la première partie (0'00-1'05), le piano installe un climat calme par des accords tenus, nuance piano ; à 0'20, le violoncelle expose une mélodie lente, liée (legato), en mouvement surtout conjoint dans le registre médium : c'est une mélodie accompagnée. La partie centrale (1'05-1'50) contraste nettement : le tempo s'anime, le piano passe à des arpèges qui créent une texture plus dense, et un crescendo mène au forte tandis que le violoncelle gagne l'aigu, sommet expressif de l'extrait. Enfin, à 1'50, la mélodie du début revient, plus douce, et un ralentissement referme la pièce : ce retour varié (A') donne à l'ensemble son unité.",
      "grille": [
        "La forme est nommée (ABA') et justifiée par des repères de temps",
        "Le vocabulaire est précis : legato, conjoint, médium, arpèges, crescendo, forte",
        "L'écriture est identifiée (mélodie accompagnée)",
        "Le contraste de la partie centrale est expliqué",
        "Le texte relie les éléments au lieu de les énumérer"
      ]
    },
    {
      "id": "musique-m2",
      "mat": "musique",
      "titre": "Rédiger un commentaire comparé (exercice 2)",
      "formules": [
        "Vous rédigerez un commentaire comparé de ces deux extraits diffusés à plusieurs reprises selon le plan de diffusion précisé ci-dessous. Sans vous y limiter, vous porterez une attention particulière aux perspectives suivantes :"
      ],
      "vu": [
        "Bac 2026 métropole : Machaut, Ma fin est mon commencement, et Giant Steps (New York Voices, 1991), avec un relevé de l'arrangement ; entrées : traitement de la voix, écritures et plans sonores, organisation formelle",
        "Bac 2026 Antilles-Guyane : Jeff Mills, Amazon (2012), et Milhaud, La Création du monde (1923), avec la partition ; entrées : timbres et plans sonores, organisation formelle et évolution des motifs, temps et rythme"
      ],
      "pts": "8 points (sujets 2026)",
      "attendu": "Une comparaison organisée et argumentée, qui fait apparaître ressemblances, différences et contrastes, en suivant les entrées d'analyse. La grille sanctionne les extraits juxtaposés. La partition ou la représentation graphique doit servir à préciser ce qu'on a entendu, et les connaissances sur l'œuvre du programme limitatif doivent étayer l'analyse.",
      "etapes": [
        "Lire le sujet : les deux extraits, leur date, l'entrée d'analyse, le document joint",
        "Préparer un tableau : une colonne par extrait, une ligne par entrée d'analyse",
        "Pendant les écoutes, compléter le tableau et repérer dans la partition les moments entendus",
        "Faire un plan : une partie par entrée d'analyse, ou ressemblances puis différences",
        "Dans chaque partie, comparer les deux extraits avec des connecteurs (de même, alors que, en revanche)",
        "Citer la partition (mesure, instrument, indication) et ses connaissances sur l'œuvre du programme",
        "Conclure en répondant à la question de fond et ouvrir vers une autre œuvre"
      ],
      "mots": [
        "de même",
        "en revanche",
        "tandis que",
        "plans sonores",
        "écriture",
        "forme",
        "partition",
        "interprétation"
      ],
      "pieges": [
        "Décrire un extrait puis l'autre, sans comparer",
        "Oublier une des entrées d'analyse données par le sujet",
        "Ne pas utiliser la partition fournie",
        "Réciter un cours sur l'œuvre du programme sans le relier à l'écoute"
      ],
      "cas": "Extrait A : Summertime, dans l'album d'Armstrong et Fitzgerald (programme limitatif). Extrait B : une pièce imaginée pour l'entraînement, une berceuse pour voix seule et bourdon de vièle, chantée a cappella sur une mélodie modale. Entrée d'analyse : traitement de la voix.",
      "question": "Rédigez une partie du commentaire consacrée au traitement de la voix.",
      "modele": "Les deux extraits confient à la voix une berceuse, mais ils la traitent de façon opposée. Dans Summertime, la voix est accompagnée par un grand orchestre avec cordes et section rythmique ; dans la berceuse, elle est presque seule, soutenue par un simple bourdon. De même, les deux mélodies sont lentes et chantées doucement, pour bercer. En revanche, Ella Fitzgerald et Louis Armstrong prennent des libertés de jazz : notes anticipées ou retardées, vibrato en fin de note, couleurs de blue notes, et le contraste de deux timbres, l'un clair, l'autre rauque. La chanteuse de l'extrait B, elle, garde une ligne régulière et sans ornement, dans une échelle modale. Ainsi, l'une transforme un air d'opéra en jazz vocal, l'autre rappelle la simplicité d'un chant transmis oralement.",
      "grille": [
        "La partie compare dans chaque phrase, sans juxtaposer",
        "Une ressemblance et au moins deux différences sont dégagées",
        "Les termes justes sont employés (bourdon, a cappella, modal, vibrato, blue notes)",
        "Les connaissances sur l'album (interprètes, timbres) sont reliées à l'écoute",
        "Une phrase de bilan donne le sens de la comparaison"
      ]
    },
    {
      "id": "musique-m3",
      "mat": "musique",
      "titre": "Commenter un document sur la vie musicale contemporaine (exercice 3)",
      "formules": [
        "Après avoir pris connaissance du texte ci-dessus, vous répondrez aux questions suivantes :",
        "Identifiez les raisons pour lesquelles, selon l'autrice…",
        "Vous argumenterez votre réponse en vous appuyant sur le corpus d'œuvres au programme, vos connaissances et votre pratique personnelle."
      ],
      "vu": [
        "Bac 2026 métropole : un article de blog sur la transmission des traditions musicales (question 1 : les raisons des difficultés ; question 2 : comment un musicien prend en compte son héritage)",
        "Bac 2026 Antilles-Guyane : un texte d'Antoine Hennion sur le renouveau des musiques anciennes (question 2 : interprétation authentique ou transformée ?)"
      ],
      "pts": "6 points (sujets 2026)",
      "attendu": "Une première réponse qui dégage clairement les idées du document, avec ses propres mots ; puis une réponse argumentée qui situe la question dans la vie musicale d'aujourd'hui, la relie à au moins un champ de questionnement et s'appuie sur des exemples précis : œuvres du programme limitatif, autres œuvres, pratique personnelle.",
      "etapes": [
        "Lire la source : auteur, date, type de document",
        "Lire les questions avant le texte, puis souligner les idées qui y répondent",
        "Question 1 : reformuler les idées en les classant, sans recopier",
        "Question 2 : formuler une réponse nette, puis deux ou trois arguments",
        "Pour chaque argument, un exemple précis : œuvre du programme, autre œuvre, expérience de musicien ou d'auditeur",
        "Nommer le champ de questionnement concerné et conclure en nuançant"
      ],
      "mots": [
        "champ de questionnement",
        "transmission",
        "interprétation",
        "streaming",
        "droits",
        "pratique amateur",
        "patrimoine"
      ],
      "pieges": [
        "Paraphraser le texte phrase par phrase",
        "Oublier les œuvres du programme limitatif dans l'argumentation",
        "Rester général, sans exemple précis",
        "Ne pas parler de sa propre pratique alors que la question la demande"
      ],
      "cas": "Question du bac 2026 (Antilles-Guyane) : l'interprétation des musiques anciennes doit-elle être authentique, la plus fidèle possible au passé, ou se transformer pour s'adapter au regard de l'époque actuelle ?",
      "question": "Rédigez un paragraphe argumenté qui s'appuie sur une œuvre du programme limitatif.",
      "modele": "L'interprétation d'une musique ancienne ne peut pas être entièrement authentique, car la partition ne dit pas tout. Les chansons de l'ars subtilior, comme Tout par compas suy composés de Baude Cordier, ne précisent ni les instruments, ni le tempo exact, ni la prononciation : chaque ensemble d'aujourd'hui fait des choix, voix seules ou voix et instruments, et propose donc une reconstitution. Chercher la fidélité reste utile, comme le montrent les orchestres sur instruments anciens qui jouent C. P. E. Bach avec des cordes en boyau et un la plus bas : on découvre des couleurs et une énergie que les instruments modernes masquent. Mais ces choix sont eux-mêmes ceux de notre époque. Cette question relève du champ « Culture musicale et artistique dans l'histoire et la géographie » : une œuvre ancienne vit parce qu'on la réinterprète.",
      "grille": [
        "Une réponse nette et nuancée à la question",
        "Un exemple précis tiré du programme limitatif (Cordier, Machaut ou C. P. E. Bach)",
        "Un second exemple ou une expérience personnelle",
        "Le champ de questionnement est nommé",
        "L'argumentation est organisée et rédigée"
      ]
    },
    {
      "id": "musique-m4",
      "mat": "musique",
      "titre": "Présenter sa création à l'oral (exposé et entretien)",
      "formules": [
        "Le candidat expose la démarche ayant présidé à la conception, l'élaboration puis la réalisation de la pièce interprétée.",
        "Il précise les liens que cette création entretient avec au moins une des œuvres du programme limitatif et la façon dont elle éclaire un au moins des champs de questionnement."
      ],
      "vu": [
        "Partie orale de l'épreuve terminale, note de service du 11 septembre 2026 : exposé et entretien sur 5 points"
      ],
      "pts": "5 points (exposé et entretien)",
      "attendu": "Un exposé individuel, clair et court, qui retrace la démarche de création (idée, processus, choix), cite les références et les techniques, relie la pièce à une œuvre du programme limitatif et à un champ de questionnement, puis des réponses précises aux questions du jury, notamment sur la répartition des rôles dans le groupe.",
      "etapes": [
        "Présenter l'idée de départ et l'œuvre qui l'a inspirée",
        "Raconter le processus : essais, étapes, abandons",
        "Justifier les choix : effectif, forme, écriture, tempo, nuances",
        "Expliquer le lien avec une œuvre du programme limitatif",
        "Nommer le champ de questionnement éclairé par la pièce",
        "Dire son propre rôle dans le groupe et faire un bilan"
      ],
      "mots": [
        "démarche",
        "arrangement",
        "canon",
        "forme",
        "choix artistique",
        "champ de questionnement",
        "représentation graphique"
      ],
      "pieges": [
        "Parler au nom du groupe sans dire son propre rôle",
        "Oublier le lien avec le programme limitatif",
        "Réciter un texte appris par cœur",
        "Passer trop de temps sur l'exposé et réduire l'interprétation"
      ],
      "cas": "Un groupe de trois élèves a créé un canon à trois voix en boucle, inspiré de Tout par compas suy composés de Cordier, avec une basse en walking bass empruntée au jazz.",
      "question": "Rédigez les phrases de l'exposé qui présentent les liens avec le programme limitatif et avec un champ de questionnement.",
      "modele": "Notre pièce part de Tout par compas suy composés de Baude Cordier, un rondeau en canon écrit en cercle dans le codex Chantilly. Nous avons repris l'idée d'un canon qui tourne sans fin : les trois voix entrent l'une après l'autre et peuvent reprendre sans s'arrêter, et nous avons dessiné notre partition en cercle, comme Cordier. Nous y avons ajouté une walking bass, pour faire se rencontrer une écriture du XIVe siècle et le jazz de l'album Porgy and Bess. Notre création éclaire le champ « Le son, la musique, l'espace et le temps » : le canon circulaire fait entendre un temps qui revient sur lui-même, comme une boucle de musique électronique. Dans le groupe, j'ai écrit la deuxième voix et j'ai dirigé les entrées.",
      "grille": [
        "L'œuvre du programme limitatif est nommée et décrite avec exactitude",
        "Le procédé repris est expliqué (canon circulaire)",
        "Le champ de questionnement est nommé et justifié",
        "Le rôle personnel du candidat est précisé",
        "Le propos est clair et bref"
      ]
    },
    {
      "id": "musique-m5",
      "mat": "musique",
      "titre": "Le commentaire comparé à l'oral de contrôle",
      "formules": [
        "Guidé par les entrées d'analyse proposées par le jury, le candidat présente oralement un commentaire comparé faisant apparaître les différences et ressemblances de deux extraits musicaux proposés."
      ],
      "vu": [
        "Oral de contrôle (second groupe), seconde partie : deux brefs extraits entendus deux fois, dont un du programme limitatif"
      ],
      "pts": "La moitié de la note de l'oral de contrôle",
      "attendu": "Une comparaison orale organisée, sans préparation, après deux écoutes : présenter les deux extraits, dégager une ou deux ressemblances et les différences principales selon les entrées données, puis approfondir pendant l'échange avec le jury, qui peut proposer une écoute supplémentaire.",
      "etapes": [
        "Pendant les deux écoutes, noter en deux colonnes les éléments marquants",
        "Commencer par situer les deux extraits (époque, genre, effectif)",
        "Donner une ressemblance, puis les différences selon les entrées d'analyse",
        "Employer le vocabulaire précis et des connecteurs de comparaison",
        "Écouter les relances du jury : elles indiquent un point à approfondir",
        "Demander, si besoin, une écoute supplémentaire d'un passage"
      ],
      "mots": [
        "ressemblance",
        "différence",
        "effectif",
        "écriture",
        "forme",
        "programme limitatif"
      ],
      "pieges": [
        "Se taire ou improviser sans ordre après les écoutes",
        "Ne parler que de l'extrait connu du programme",
        "Ignorer les relances du jury",
        "Employer des mots vagues"
      ],
      "cas": "Le jury fait entendre l'Allegro assai de C. P. E. Bach et un extrait d'un concerto pour trompette joué par un big band (pièce imaginée pour l'entraînement : solo de trompette, riffs des saxophones, section rythmique). Entrée d'analyse : le soliste et l'ensemble.",
      "question": "Rédigez ce que vous diriez en premier pour lancer la comparaison.",
      "modele": "Ces deux extraits mettent en scène un soliste face à un ensemble. Le premier est le finale du concerto pour violoncelle en la majeur de C. P. E. Bach, au XVIIIe siècle : le violoncelle dialogue avec un orchestre de cordes et la basse continue, selon une forme ritournelle où tutti et solos alternent. Le second fait entendre une trompette devant un big band : les saxophones répètent des riffs pendant que la section rythmique tient la pulsation. Dans les deux cas, l'ensemble s'allège pour laisser passer le soliste et lui répond. En revanche, la virtuosité du violoncelle est écrite, faite de gammes et d'arpèges, alors que celle de la trompette laisse sans doute place à l'improvisation, sur un rythme swing.",
      "grille": [
        "Les deux extraits sont situés (époque, genre, effectif)",
        "La ressemblance (soliste et ensemble) est formulée d'emblée",
        "Les différences portent sur l'écriture et le rythme",
        "Le vocabulaire est précis (ritournelle, tutti, riff, swing)",
        "La comparaison reste organisée à l'oral"
      ]
    }
  ],
  sujets: [
    { id: "musique-s1", matiere: 'musique', titre: "Sujet d'entraînement 1 : miroirs et cercles", duree: 210,
      enonce: `Sujet d'entraînement inventé, sur le modèle de la partie écrite de l'épreuve de musique (session 2027). Dans l'application, on ne peut pas faire entendre d'extraits : ils sont donc décrits en mots, comme des notes d'écoute. Les pièces hors programme et le document de l'exercice 3 sont imaginés pour cet entraînement. Pour s'entraîner en conditions réelles, faire écouter par son professeur une vraie version de l'œuvre du programme. Durée : 3 h 30. Aucun document autorisé. La répartition des points (6, 8, 6) reprend celle des sujets de 2026.

EXERCICE 1 : description d'un bref extrait d'une œuvre (6 points). Durée : 40 minutes.
Vous décrirez avec un vocabulaire adapté les éléments caractéristiques et l'organisation musicale de l'extrait.
Extrait : « Marée », pièce imaginée pour l'entraînement, pour quatuor à cordes (deux violons, alto, violoncelle), durée 2'40.
Ce que l'on entend (notes d'écoute fournies à la place des diffusions) :
- 0'00 : le violoncelle seul joue une note grave tenue, nuance pianissimo ; l'alto ajoute un motif de trois notes, répété sans changement, en pizzicato.
- 0'25 : le premier violon entre avec une mélodie lente, liée, dans le médium, au mouvement surtout conjoint ; le second violon tient des notes longues.
- 0'55 : le motif de l'alto passe au second violon ; le premier violon reprend sa mélodie une octave plus haut ; crescendo progressif.
- 1'30 : les quatre instruments jouent ensemble le même rythme, en accords, forte ; tempo légèrement plus vif.
- 2'05 : retour progressif au calme : decrescendo, le violoncelle retrouve la note grave du début, l'alto le motif en pizzicato ; fin sur un silence.

EXERCICE 2 : commentaire comparé de deux extraits d'œuvres (8 points). Durée : 1 heure 50 minutes.
Extrait A (programme limitatif) : Guillaume de Machaut, Ma fin est mon commencement, rondeau, XIVe siècle, dans une interprétation décrite ainsi : deux voix d'hommes et une vièle, tempo modéré, sans percussions, environ 2 minutes.
Extrait B (hors programme) : « Palindrome », pièce imaginée pour l'entraînement, pour piano et électronique, 2019, environ 2 minutes.
Document : représentation graphique de l'extrait B, décrite en mots. Une ligne horizontale représente le temps. Au centre, un trait vertical marque le milieu de la pièce. À gauche, de petites formes montent du grave vers l'aigu ; à droite, les mêmes formes redescendent, dans l'ordre inverse. Une bande grise, de plus en plus large jusqu'au milieu puis de moins en moins large, représente un son électronique tenu.
Notes d'écoute de l'extrait B : piano seul au début, motifs brefs et détachés qui montent peu à peu ; un son électronique tenu grossit derrière le piano ; au milieu, un accord fort et un silence ; puis les motifs reviennent dans l'ordre inverse, en descendant, et le son électronique s'amenuise jusqu'à disparaître.
Vous rédigerez un commentaire comparé de ces deux extraits. Sans vous y limiter, vous porterez une attention particulière aux perspectives suivantes :
- écritures et plans sonores ;
- organisation formelle et rapport au temps ;
- relation entre la musique et sa représentation écrite.

EXERCICE 3 : bref commentaire rédigé d'un document témoignant de la vie musicale contemporaine (6 points). Durée : 1 heure.
Document (texte écrit pour l'entraînement) :
« Il y a vingt ans, je découvrais un album en entier, de la première à la dernière plage, parce que je l'avais acheté et que je voulais en avoir pour mon argent. Aujourd'hui, mes élèves écoutent des listes de lecture préparées par les plateformes, où chaque morceau doit accrocher dès les premières secondes, sinon on passe au suivant. Les introductions raccourcissent, le refrain arrive plus tôt. Pourtant, ces mêmes élèves passent des heures à travailler une reprise pour la publier en vidéo, et certains découvrent ainsi des chansons écrites bien avant leur naissance. » (Propos d'une professeure de musique, recueillis pour cet entraînement.)
Vous répondrez aux questions suivantes :
1. Quels changements dans l'écoute de la musique ce document décrit-il ?
2. D'après vous, les plateformes d'écoute appauvrissent-elles ou enrichissent-elles la culture musicale des auditeurs ? Vous argumenterez en vous appuyant sur le corpus des œuvres au programme, vos connaissances et votre pratique personnelle.`,
      corrige: `Corrigé indicatif. Il propose des pistes : d'autres formulations justes sont acceptées.

EXERCICE 1
Introduction : une pièce pour quatuor à cordes, au caractère calme et méditatif, construite comme une vague qui monte puis se retire (titre « Marée »).
Première partie (0'00-0'55) : le violoncelle pose une note grave tenue, qui joue le rôle de bourdon ; l'alto répète un motif de trois notes en pizzicato : c'est un ostinato. Le premier violon expose une mélodie lente, legato, en mouvement conjoint dans le médium, sur les tenues du second violon : une mélodie accompagnée, en plusieurs plans sonores (grave tenu, ostinato, mélodie au premier plan).
Deuxième partie (0'55-2'05) : la texture se transforme. L'ostinato change d'instrument (second violon), la mélodie passe à l'octave supérieure : le registre s'élargit. Le crescendo mène à un sommet (1'30) où les quatre instruments jouent en homorythmie, en accords, forte, sur un tempo un peu plus vif : contraste fort avec le début.
Troisième partie (2'05-2'40) : decrescendo et retour des éléments du début (note grave, ostinato en pizzicato) : c'est une reprise abrégée qui referme la pièce, jusqu'au silence.
Bilan : une forme en arche, ABA', fondée sur une montée progressive de l'intensité, de la densité et du registre, puis un retour au calme ; l'unité vient du bourdon et de l'ostinato.

EXERCICE 2
Introduction : deux pièces séparées de plus de six siècles, un rondeau polyphonique de Machaut (ars nova, XIVe siècle) et une pièce pour piano et électronique de 2019, qui partagent la même idée : une musique qui se lit dans les deux sens. Annonce du plan selon les trois entrées.
I. Écritures et plans sonores. Chez Machaut, trois lignes indépendantes (polyphonie), deux voix et une vièle, sans plan dominant net ; le timbre reste homogène et doux. Dans « Palindrome », deux plans très différents : au premier plan le piano en motifs brefs et détachés, au second plan un son électronique tenu qui enfle puis s'efface. D'un côté des lignes qui s'entrelacent, de l'autre un contraste entre des attaques et une nappe.
II. Organisation formelle et rapport au temps. Machaut construit une forme fixe, le rondeau, avec son refrain ; l'écriture repose sur la rétrogradation (une voix est l'autre lue à l'envers) et sur un palindrome. La pièce B rend le palindrome audible : les motifs reviennent dans l'ordre inverse après l'accord central, et le son électronique suit une courbe symétrique. Chez Machaut, la symétrie est cachée dans l'écriture et s'entend peu ; dans B, elle structure l'écoute (montée puis descente, sommet au milieu). Dans les deux cas, le temps semble revenir sur lui-même : « ma fin est mon commencement ».
III. Musique et représentation écrite. Le manuscrit de Machaut oblige à lire une voix à l'envers, et le titre décrit le procédé : la page fait partie de l'œuvre. La représentation graphique de B montre la symétrie d'un coup d'œil (axe central, formes inversées, bande qui grossit puis diminue). Ce lien rejoint le corpus « Écritures, formes, graphismes » (Cordier écrit en cercle, Senleches sur une harpe) et les partitions graphiques du XXe siècle.
Conclusion : deux époques, deux écritures (voix et vièle, piano et électronique), une même fascination pour le temps réversible ; ouverture vers les canons en boucle ou les boucles de la musique électronique.

EXERCICE 3
1. Le document décrit un passage de l'écoute d'albums entiers, achetés, à l'écoute de listes préparées par les plateformes ; une écoute plus impatiente (on passe au morceau suivant) ; une transformation des chansons elles-mêmes (introductions plus courtes, refrain plus tôt). Il nuance : les jeunes pratiquent aussi beaucoup (reprises publiées en vidéo) et découvrent des chansons anciennes.
2. Réponse nuancée attendue. Appauvrissement possible : écoute fragmentée, uniformisation par les algorithmes, chansons formatées, faible rémunération de nombreux artistes (partage au prorata). Enrichissement possible : accès immédiat à des répertoires immenses ; on peut comparer en quelques minutes plusieurs interprétations de Summertime (Armstrong et Fitzgerald, Miles Davis et Gil Evans, des reprises récentes), ou découvrir les chansons de Machaut et de l'ars subtilior, qu'on n'entendait autrefois qu'en concert spécialisé ; la pratique (reprises, création) est stimulée. Exemple personnel attendu : une découverte faite en ligne, une reprise travaillée. Champ de questionnement : « La musique, l'homme et la société » (rôle de l'auditeur, économie de la musique). Conclusion : la plateforme est un outil ; la culture dépend de la curiosité et de la pratique de l'auditeur.`,
      grille: [{"c":"Exercice 1 : caractéristiques principales identifiées avec un vocabulaire précis (bourdon, ostinato, pizzicato, legato, homorythmie)","pts":3},{"c":"Exercice 1 : organisation de l'extrait montrée (forme en arche, évolution de la densité, du registre et des nuances)","pts":2},{"c":"Exercice 1 : description claire et ordonnée, avec des repères de temps","pts":1},{"c":"Exercice 2 : comparaison organisée selon les entrées d'analyse, sans juxtaposition","pts":3},{"c":"Exercice 2 : parentés et différences pertinentes (polyphonie et plans, rondeau et palindrome, symétrie cachée ou audible)","pts":2},{"c":"Exercice 2 : connaissances sur Machaut et le corpus Écritures, formes, graphismes, et usage de la représentation graphique","pts":2},{"c":"Exercice 2 : introduction et conclusion qui situent et ouvrent","pts":1},{"c":"Exercice 3 : idées du document identifiées et reformulées","pts":2},{"c":"Exercice 3 : argumentation nuancée, exemples du programme limitatif et pratique personnelle, champ de questionnement nommé","pts":3},{"c":"Ensemble de la copie : maîtrise de la langue et clarté de l'expression","pts":1}] },
  ],
};
