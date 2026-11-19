// Pratique chorégraphique, musicale ou théâtrale — enseignement de spécialité de terminale, série S2TMD. Sources : voir matiere.sources.
// Programme : programmes du cycle terminal publiés en juillet 2019 (BO spécial n° 8 du 25 juillet 2019), annexe 2 « culture et sciences… et pratique… de première et terminale S2TMD ».
// Épreuve : note de service n° 2020-019 du 11 février 2020, version consolidée de mars 2024 : épreuve pratique de 50 minutes notée sur 20, différente selon la pratique (danse, musique ou théâtre).
// Chapitres 1 à 4 communs aux trois pratiques, 5 à 9 danse, 10 à 12 musique, 13 et 14 théâtre, 15 méthode commune.
export default {
  matiere: {
    id: "s2tmd-pratique",
    nom: "Pratique chorégraphique, musicale ou théâtrale",
    voie: "s2tmd",
    epreuve: {"type":"pratique","duree":50,"coef":16,"quand":"juin","note":"Épreuve pratique de 50 minutes notée sur 20, selon la pratique suivie. Danse : solo (composition personnelle de 2 min à 3 min 30, improvisation sur un thème tiré au sort, entretien de 10 minutes : 10 points), analyse d’un extrait musical (4 points), interrogation sur les sciences et connaissances sur le corps (6 points). Musique : interprétation d’un programme, présentation d’un projet de création ou d’invention, présentation d’une pratique collective filmée, entretien avec le jury (5 points chacun). Théâtre : 30 minutes de préparation, création théâtrale à partir d’un texte remis (10 points), interprétation d’une scène choisie par le jury parmi cinq à sept préparées (10 points), chaque partie suivie de 10 minutes d’entretien. Jury mixte : un professeur du conservatoire partenaire et un professeur de l’Éducation nationale."},
    sources: [
      "https://eduscol.education.fr/document/23242/download",
      "https://eduscol.education.fr/document/52962/download",
      "https://www.education.gouv.fr/bo/20/Special2/MENE2001098N.htm",
      "https://eduscol.education.gouv.fr/5649/baccalaureat-technologique-serie-sciences-et-techniques-du-theatre-de-la-musique-et-de-la-danse-s2tmd",
    ],
    chapitres: [
      { id: "s2tmd-pratique-1", t: "La spécialité de pratique en terminale S2TMD", theme: "Commun aux trois pratiques" },
      { id: "s2tmd-pratique-2", t: "Les champs de questionnement et les perspectives de terminale", theme: "Commun aux trois pratiques" },
      { id: "s2tmd-pratique-3", t: "Le corps de l'interprète : échauffement, souffle, trac", theme: "Commun aux trois pratiques" },
      { id: "s2tmd-pratique-4", t: "Créer et expliquer sa démarche artistique", theme: "Commun aux trois pratiques" },
      { id: "s2tmd-pratique-5", t: "Danse : le solo, l'improvisation et l'entretien", theme: "Pratique chorégraphique" },
      { id: "s2tmd-pratique-6", t: "Danse : outils et procédés de composition, captation", theme: "Pratique chorégraphique" },
      { id: "s2tmd-pratique-7", t: "Danse : l'analyse d'un extrait musical", theme: "Pratique chorégraphique" },
      { id: "s2tmd-pratique-8", t: "Danse : le corps en mouvement (articulations, muscles, équilibre)", theme: "Pratique chorégraphique" },
      { id: "s2tmd-pratique-9", t: "Danse : entraînement, blessures et hygiène de vie du danseur", theme: "Pratique chorégraphique" },
      { id: "s2tmd-pratique-10", t: "Musique : l'interprétation de son programme", theme: "Pratique musicale" },
      { id: "s2tmd-pratique-11", t: "Musique : création/invention et pratique collective", theme: "Pratique musicale" },
      { id: "s2tmd-pratique-12", t: "Musique : le corps du musicien, la voix et l'audition", theme: "Pratique musicale" },
      { id: "s2tmd-pratique-13", t: "Théâtre : les techniques du jeu de l'acteur", theme: "Pratique théâtrale" },
      { id: "s2tmd-pratique-14", t: "Théâtre : création à partir d'un texte et interprétation d'une scène", theme: "Pratique théâtrale" },
      { id: "s2tmd-pratique-15", t: "Méthode : préparer l'épreuve pratique et réussir l'entretien", theme: "Méthode de l'épreuve" },
    ],
  },
  paquets: [
    {
      chapitre: "s2tmd-pratique-1",
      fiche: `## La spécialité de pratique en terminale S2TMD

La série **S2TMD** (sciences et techniques du théâtre, de la musique et de la danse) associe en terminale deux enseignements de spécialité : **culture et sciences** (chorégraphiques, musicales ou théâtrales), évaluée par un **écrit de 4 heures**, et **pratique** (chorégraphique, musicale ou théâtrale), évaluée par une **épreuve pratique de 50 minutes**. Les deux sont pensés ensemble : la culture nourrit la pratique, et la pratique donne du sens à la culture.

### Un partenariat entre deux établissements
- La formation repose sur une **convention** entre le lycée et un **établissement d'enseignement artistique** classé ou reconnu par l'État (conservatoire à rayonnement régional ou départemental, par exemple).
- L'**équipe pédagogique** réunit des professeurs des deux établissements ; un **avenant annuel** à la convention précise la répartition des horaires.
- Le **jury** de l'épreuve pratique associe lui aussi un professeur du conservatoire partenaire et un professeur de l'Éducation nationale.

### Ce que travaille la spécialité de pratique
- **Danse** : travail technique dans une **discipline principale** (classique, contemporain, jazz ou hip-hop) et dans une **discipline complémentaire**, ateliers d'**improvisation** et de **composition**. En terminale, au moins 40 % du temps pour la discipline principale, 20 % pour la complémentaire et 20 % pour les ateliers.
- **Musique** : **pratique soutenue dans une dominante** (instrument, chant, écriture, composition), **pratique collective** dirigée ou non dirigée, **création/invention**, **pratique vocale collective**, **connaissance du corps** et conscience vocale.
- **Théâtre** : formation approfondie à l'**art du jeu**, à l'**interprétation**, **techniques et pratiques** (masque, clown, marionnette, théâtre musical, arts du récit, mise en scène, scénographie, danse, chant), **conception et réalisation de projets**.

### Trois champs de compétences
- Chaque pratique développe des compétences proches :
  - **interpréter** : maîtrise technique, présence, intention ;
  - **créer** : improviser, composer, proposer une lecture personnelle ;
  - **analyser** : porter un regard critique sur sa pratique et sur les œuvres, dire ce qu'on cherche et ce qu'on doit encore travailler.
- Les programmes insistent sur l'**autonomie** : l'élève façonne sa méthode de travail, mène des projets, s'**autoévalue** et se fixe des objectifs.

### Le carnet de bord
- Le programme recommande un **carnet de bord** (ou livret personnel) : l'élève y note ses expériences d'interprète, de créateur et de spectateur, ses recherches, ses réussites et ses difficultés.
- Il garde la mémoire du travail, aide à faire des **liens** entre pratique, culture et économie du spectacle vivant (spécialité de première), et sert de base pour préparer l'**entretien** avec le jury.

### Les projets collectifs
- Les programmes encouragent des **projets interdisciplinaires** qui réunissent danseurs, musiciens et comédiens, voire des élèves d'autres séries.
- Ces projets font rencontrer des **artistes professionnels**, travailler la **médiation** (présenter son travail à un public) et occuper différents rôles (interprète, régisseur, assistant, chorégraphe).

### Prendre soin de soi
- La pratique intensive soumet le corps et l'esprit à de fortes **contraintes**. Les programmes demandent de renforcer l'endurance et la détermination de l'élève **en préservant son intégrité et son équilibre**, en adaptant la charge de travail à sa fatigue.

### À retenir pour le bac
- Deux spécialités en terminale : culture et sciences (écrit de 4 heures) et pratique (épreuve de 50 minutes), chacune notée sur 20.
- Formation partagée entre le lycée et un conservatoire partenaire ; jury mixte.
- Interpréter, créer, analyser ; carnet de bord ; projets collectifs et médiation.`,
      cartes: [
        { q: "Que veut dire S2TMD ?", r: "Sciences et techniques du théâtre, de la musique et de la danse." },
        { q: "Quelles sont les deux spécialités de terminale en S2TMD ?", r: "Culture et sciences (de sa pratique) et pratique chorégraphique, musicale ou théâtrale." },
        { q: "Comment est évaluée la spécialité de pratique ?", r: "Par une épreuve pratique de 50 minutes notée sur 20." },
        { q: "Comment est évaluée la spécialité de culture et sciences ?", r: "Par une épreuve écrite de 4 heures notée sur 20." },
        { q: "Avec qui le lycée partage-t-il la formation ?", r: "Avec un établissement d'enseignement artistique classé ou reconnu par l'État, souvent un conservatoire." },
        { q: "Quel texte organise ce partenariat ?", r: "Une convention entre les deux établissements, complétée chaque année par un avenant." },
        { q: "Qui compose le jury de l'épreuve pratique ?", r: "Un professeur du conservatoire partenaire et un professeur de l'Éducation nationale (trois professeurs en danse)." },
        { q: "Quels sont les trois volets de la pratique chorégraphique ?", r: "Discipline principale, discipline complémentaire, ateliers d'improvisation et de composition." },
        { q: "Cite trois volets de la pratique musicale.", r: "Pratique soutenue dans une dominante, pratique collective, création/invention (aussi voix collective et connaissance du corps)." },
        { q: "Cite trois volets de la pratique théâtrale.", r: "Art du jeu, interprétation, techniques et pratiques, conception et réalisation de projets." },
        { q: "Quelles sont les trois grandes compétences travaillées ?", r: "Interpréter, créer, analyser sa pratique et les œuvres." },
        { q: "À quoi sert le carnet de bord ?", r: "À garder la trace de ses expériences et recherches, et à préparer l'entretien avec le jury." },
        { q: "Pourquoi les programmes encouragent-ils les projets collectifs ?", r: "Pour croiser les arts, rencontrer des artistes et travailler la médiation auprès d'un public." },
        { q: "Que demande le programme pour la santé de l'élève ?", r: "Adapter la charge de travail à sa fatigue pour préserver son intégrité et son équilibre." },
      ],
      quiz: [
        { q: "Combien de temps dure l'épreuve de pratique en S2TMD ?", choix: ["4 heures","2 heures","50 minutes","3 heures"], bonne: 2, expl: "L'écrit de culture dure 4 heures.", niv: 1 },
        { q: "Quel établissement est le partenaire habituel du lycée en S2TMD ?", choix: ["Un théâtre privé de la ville","Un conservatoire classé par l'État","Une université de lettres","Une école de commerce de la région"], bonne: 1, expl: "Convention entre les deux.", niv: 1 },
        { q: "Quelle discipline peut être la discipline principale d'un danseur ?", choix: ["Le patinage artistique","La gymnastique rythmique","Le hip-hop","Le cirque équestre"], bonne: 2, expl: "Classique, contemporain, jazz ou hip-hop.", niv: 1 },
        { q: "Quel outil personnel le programme recommande-t-il de tenir ?", choix: ["Un agenda partagé avec la famille","Un journal intime numérique","Un cahier de punitions","Un carnet de bord"], bonne: 3, expl: "Trace des expériences.", niv: 1 },
        { q: "Quel document précise chaque année la répartition des horaires ?", choix: ["Le règlement intérieur du lycée","Le bulletin du premier trimestre","La circulaire de rentrée du ministère des Sports","Un avenant à la convention"], bonne: 3, expl: "Avenant annuel.", niv: 2 },
        { q: "Quelle part minimale du temps va aux ateliers de composition en danse en terminale ?", choix: ["5 %","10 %","20 %","15 %"], bonne: 2, expl: "Contre 10 % en première.", niv: 2 },
        { q: "Quel volet appartient à la pratique théâtrale ?", choix: ["Conception et réalisation de projets","Analyse musicale d'un extrait","Pratique vocale collective en chœur mixte","Discipline complémentaire en jazz"], bonne: 0, expl: "Quatre volets en théâtre.", niv: 2 },
        { q: "Que signifie s'autoévaluer dans sa pratique ?", choix: ["Se donner une note avant le passage devant le jury de l'examen","Repérer soi-même ses progrès et ce qu'il reste à travailler","Comparer sa prestation à celle d'un professionnel célèbre","Demander à ses camarades de juger à sa place"], bonne: 1, expl: "Regard réflexif.", niv: 2 },
        { q: "Pourquoi le jury associe-t-il deux types de professeurs ?", choix: ["Il permet de doubler la durée de l'épreuve","Il reflète le partenariat entre lycée et conservatoire","Le ministère manque de professeurs d'arts","Chaque professeur note une moitié différente du programme écrit"], bonne: 1, expl: "Formation partagée.", niv: 2 },
        { q: "Pourquoi le carnet de bord aide-t-il à réussir l'entretien ?", choix: ["Il rassemble les choix, recherches et difficultés dont on va parler","Le jury le lit en entier pendant l'épreuve et lui donne une note sur 20","Il remplace la prestation devant le jury","Il contient les réponses aux questions du jury"], bonne: 0, expl: "Mémoire du travail.", niv: 3 },
        { q: "Qu'apporte un projet qui réunit danseurs, musiciens et comédiens ?", choix: ["Il dispense chaque élève de travailler sa technique","Il fait découvrir d'autres langages et d'autres rôles","Il permet de passer l'épreuve d'une autre pratique","Il réduit le nombre d'heures de spécialité de l'année"], bonne: 1, expl: "Interdisciplinarité.", niv: 3 },
        { q: "Un élève danse avec une douleur au genou depuis deux semaines. Que conseille le programme ?", choix: ["Doubler les répétitions pour s'habituer","Adapter sa charge de travail et consulter","Changer de discipline principale","Attendre la fin de l'année scolaire pour en parler"], bonne: 1, expl: "Préserver son intégrité.", niv: 3 },
      ],
    },
    {
      chapitre: "s2tmd-pratique-2",
      fiche: `## Les champs de questionnement et les perspectives de terminale

Les programmes de danse, de musique et de théâtre sont traversés par **trois champs de questionnement** communs aux deux spécialités : l'art et la **société**, l'art et ses **langages**, l'art et ses **esthétiques**. Chaque année, l'équipe pédagogique choisit au moins **trois perspectives**, une par champ. En **terminale**, trois perspectives précises sont **obligatoirement mobilisées** pour les épreuves du bac. Ce ne sont pas des leçons à réciter, mais des questions pour **interroger sa pratique**.

### En danse
- **Art chorégraphique et société** → terminale : **art chorégraphique et monde contemporain**. Comment la danse parle-t-elle du monde actuel (migrations, écologie, genre, ville) ? Quelle place pour les danses urbaines nées dans la rue et entrées dans les théâtres ?
- **Art chorégraphique et langages** → terminale : **art chorégraphique et autres langages artistiques / nouvelles technologies**. Danse et vidéo, capteurs, projections, réalité virtuelle, collaborations avec plasticiens ou musiciens.
- **Art chorégraphique et esthétiques** → terminale : **art chorégraphique, représentations, mises en jeu et discours sur le corps**. Quel corps la danse montre-t-elle ? Corps virtuose, corps ordinaire, corps vieillissant, corps différent.

### En musique
- **Musique et société** → terminale : **mondialisation, diversité et identités culturelles**. Circulation des musiques du monde, métissages, rôle des plateformes, défense des musiques traditionnelles.
- **Musique et langages** → terminale : **l'hybridation des langages de la musique**. Rencontres entre jazz et musique savante, musiques électroniques et instruments acoustiques, échantillonnage.
- **Musique et esthétiques** → terminale : **relativité des goûts, des modes et des valeurs**. Pourquoi une musique méprisée devient-elle un jour un classique ? Qui décide de ce qui est « beau » ?
- En musique, le **projet de création/invention** présenté à l'épreuve doit développer ses liens avec **au moins une** de ces trois perspectives.

### En théâtre
- **Théâtre et société** → terminale : **théâtre et enjeux de la cité**. Le théâtre comme lieu de débat public, de mémoire, d'engagement, héritier du théâtre grec joué devant les citoyens.
- **Théâtre et langages** → terminale : **nouveaux langages théâtraux et interdisciplinarités artistiques**. Vidéo sur scène, écriture de plateau, performance, théâtre et cirque ou marionnette.
- **Théâtre et esthétiques** → terminale : **enjeux esthétiques de la mise en scène et du jeu d'acteur**. Incarner ou montrer le personnage ? Identification ou distanciation ?

### Comment s'en servir à l'épreuve pratique
- Dans l'**entretien**, le jury demande souvent de **situer** son travail : d'où vient son idée, quelles œuvres l'ont nourri, quelle question elle pose.
- Relier sa composition, son improvisation ou son interprétation à une perspective montre une **démarche artistique réfléchie** et non un simple exercice technique.
- Exemple en danse : « Mon solo travaille la répétition d'un geste de travail à la chaîne : il interroge le corps dans le monde contemporain. »
- Exemple en musique : « Mon arrangement mêle une mélodie traditionnelle bretonne et une rythmique électronique : c'est une hybridation des langages. »
- Exemple en théâtre : « J'ai joué la scène en m'adressant au public, pour montrer le personnage plutôt que l'incarner, comme le propose Brecht. »

### À retenir pour le bac
- Trois champs communs : société, langages, esthétiques ; trois perspectives obligatoires en terminale, différentes selon la pratique.
- Danse : monde contemporain ; autres langages et nouvelles technologies ; représentations et discours sur le corps.
- Musique : mondialisation et identités ; hybridation des langages ; relativité des goûts. Théâtre : enjeux de la cité ; nouveaux langages ; mise en scène et jeu d'acteur.`,
      cartes: [
        { q: "Quels sont les trois champs de questionnement communs ?", r: "L'art et la société, l'art et ses langages, l'art et ses esthétiques." },
        { q: "Combien de perspectives sont obligatoires en terminale ?", r: "Trois, une dans chaque champ de questionnement." },
        { q: "Perspective de terminale en danse pour le champ « société » ?", r: "Art chorégraphique et monde contemporain." },
        { q: "Perspective de terminale en danse pour le champ « langages » ?", r: "Art chorégraphique et autres langages artistiques / nouvelles technologies." },
        { q: "Perspective de terminale en danse pour le champ « esthétiques » ?", r: "Art chorégraphique, représentations, mises en jeu et discours sur le corps." },
        { q: "Perspective de terminale en musique pour le champ « société » ?", r: "Mondialisation, diversité et identités culturelles." },
        { q: "Perspective de terminale en musique pour le champ « langages » ?", r: "L'hybridation des langages de la musique." },
        { q: "Perspective de terminale en musique pour le champ « esthétiques » ?", r: "Relativité des goûts, des modes et des valeurs." },
        { q: "Perspective de terminale en théâtre pour le champ « société » ?", r: "Théâtre et enjeux de la cité." },
        { q: "Perspective de terminale en théâtre pour le champ « langages » ?", r: "Nouveaux langages théâtraux et interdisciplinarités artistiques." },
        { q: "Perspective de terminale en théâtre pour le champ « esthétiques » ?", r: "Enjeux esthétiques de la mise en scène et du jeu d'acteur." },
        { q: "Qu'est-ce qu'une perspective selon le programme ?", r: "Une question pour interroger sa pratique, pas un contenu à réciter." },
        { q: "À quoi servent les perspectives à l'épreuve pratique ?", r: "À situer sa démarche artistique pendant l'entretien avec le jury." },
        { q: "Que doit faire le projet de création présenté en musique ?", r: "Développer ses liens avec au moins une des trois perspectives de terminale." },
      ],
      quiz: [
        { q: "Quelle perspective de terminale concerne la musique ?", choix: ["Théâtre et enjeux de la cité","Art chorégraphique et monde contemporain","L'hybridation des langages de la musique","Les grandes écoles du jeu de l'acteur"], bonne: 2, expl: "Champ musique et langages.", niv: 1 },
        { q: "Quelle perspective de terminale concerne le théâtre ?", choix: ["Relativité des goûts, des modes et des valeurs","Enjeux esthétiques de la mise en scène et du jeu d'acteur","Mondialisation, diversité et identités culturelles des peuples","Discours sur le corps"], bonne: 1, expl: "Champ théâtre et esthétiques.", niv: 1 },
        { q: "Combien de champs de questionnement compte chaque programme ?", choix: ["Trois","Deux","Cinq","Sept"], bonne: 0, expl: "Société, langages, esthétiques.", niv: 1 },
        { q: "Quel champ contient la perspective « monde contemporain » en danse ?", choix: ["Art chorégraphique et langages","Art chorégraphique et esthétiques","Art chorégraphique et sciences du corps","Art chorégraphique et société"], bonne: 3, expl: "Danse et société actuelle.", niv: 1 },
        { q: "Un solo utilise des projections vidéo qui réagissent aux gestes. Quelle perspective mobilise-t-il ?", choix: ["Discours sur le corps vieillissant","Mondialisation, diversité et identités culturelles","Théâtre et enjeux de la cité","Autres langages artistiques et nouvelles technologies"], bonne: 3, expl: "Danse et numérique.", niv: 2 },
        { q: "Un arrangement mêle une mélodie bretonne et une rythmique électronique. Quelle perspective illustre-t-il ?", choix: ["L'hybridation des langages de la musique","Le rôle de l'artiste dans la cité antique","Les enjeux de la mise en scène","La relativité des goûts en danse classique"], bonne: 0, expl: "Mélange de langages.", niv: 2 },
        { q: "Une pièce de théâtre ouvre un débat sur une loi avec les spectateurs. Quelle perspective concerne-t-elle ?", choix: ["Nouveaux langages et interdisciplinarités","Hybridation des langages","Art chorégraphique et monde contemporain","Théâtre et enjeux de la cité"], bonne: 3, expl: "Théâtre lieu de débat.", niv: 2 },
        { q: "Que montre la perspective « relativité des goûts, des modes et des valeurs » ?", choix: ["Le jugement sur une musique change selon les époques et les groupes","Une musique bien jouée plaît à chaque personne qui l'écoute, partout","La valeur d'une œuvre dépend de son prix de vente","Les goûts musicaux ne s'expliquent pas"], bonne: 0, expl: "Jugements variables.", niv: 2 },
        { q: "Quand le jury demande-t-il surtout de situer son travail dans une perspective ?", choix: ["Pendant l'échauffement, juste avant de passer","Dans la copie de l'écrit de pratique","Pendant l'entretien qui suit la prestation","Au moment du tirage du thème"], bonne: 2, expl: "Démarche explicitée.", niv: 2 },
        { q: "Pourquoi relier son improvisation à une perspective lors de l'entretien ?", choix: ["Parce que le jury retire des points si on ne cite pas les trois","Pour éviter de parler de ses difficultés techniques pendant toute l'épreuve","Pour montrer une démarche artistique réfléchie au-delà de la technique","Parce que l'improvisation est notée sur la culture générale"], bonne: 2, expl: "Lien pratique-culture.", niv: 3 },
        { q: "Une danseuse compose un solo sur le corps d'une personne âgée. Quelle question pose-t-elle ?", choix: ["Comment vendre plus de billets pour un spectacle ?","Quel corps la danse montre-t-elle et lequel cache-t-elle ?","Quelle musique choisir pour un concours de vitesse ?","Comment la danse classique est-elle née à la cour du roi ?"], bonne: 1, expl: "Discours sur le corps.", niv: 3 },
        { q: "Pourquoi une musique méprisée peut-elle devenir un classique ?", choix: ["Les compositeurs réécrivent leurs œuvres après leur mort","Les goûts et les valeurs évoluent avec les époques et les publics","Les écoles de musique imposent un répertoire fixe depuis des siècles","Une loi classe les œuvres anciennes au patrimoine"], bonne: 1, expl: "Relativité des goûts.", niv: 3 },
      ],
    },
    {
      chapitre: "s2tmd-pratique-3",
      fiche: `## Le corps de l'interprète : échauffement, souffle, trac

Danseur, musicien ou comédien, l'interprète travaille avec son **corps**. Les trois programmes demandent de connaître son corps, de le préparer et de le protéger. À l'épreuve, le jury de danse interroge sur les **sciences du corps** (6 points), celui de musique pose des questions sur la **connaissance de son corps** pendant l'entretien, et celui de théâtre observe la maîtrise de la **voix**, du **souffle** et de la **présence**.

### S'échauffer
- L'**échauffement** élève progressivement la température des muscles, augmente la fréquence cardiaque et l'irrigation des muscles, assouplit les articulations et prépare le **système nerveux** (vigilance, coordination).
- Il va du **général** (mobiliser tout le corps, marcher, sautiller) au **spécifique** (gestes de sa discipline : pliés et tendus, gammes, exercices de diction).
- Il réduit le risque de **blessure** et améliore la qualité du geste dès les premières minutes.
- Le comédien et le chanteur échauffent aussi la **voix** : respiration, détente de la mâchoire, sirènes, vocalises, articulation.

### Le souffle
- La **respiration** utilise surtout le **diaphragme**, muscle en forme de dôme sous les poumons : il s'abaisse à l'**inspiration** et remonte à l'**expiration**.
- Le **soutien** du souffle (respiration abdominale, appui sur les muscles de la ceinture abdominale) permet de tenir une phrase, de **projeter** la voix sans forcer et de jouer un instrument à vent.
- Le danseur coordonne la respiration avec le mouvement (expirer pendant l'effort, respirer dans les phrases lentes).

### La posture et le geste
- Une **posture** équilibrée aligne la tête, le buste et le bassin, avec un **tonus** suffisant mais sans tension inutile.
- Les **tensions parasites** (épaules relevées, mâchoire serrée, doigts crispés) fatiguent, nuisent au son ou au mouvement et peuvent provoquer des douleurs.
- Les **pratiques somatiques** (méthode Feldenkrais, technique Alexander, Pilates, Body-Mind Centering) aident à prendre conscience de son corps et à trouver un geste plus libre.

### Le trac
- Le **trac** est une forme d'**anxiété** avant ou pendant une représentation : cœur qui bat vite, mains moites, bouche sèche, jambes qui tremblent. Il est dû à la libération d'**adrénaline**.
- Un trac modéré **mobilise** l'énergie et la concentration ; trop fort, il bloque la mémoire et la coordination.
- Pour le gérer :
  - **préparer** très tôt (répéter dans les conditions de l'épreuve, devant des camarades) ;
  - **respirer** lentement, avec une expiration longue ;
  - utiliser une **routine** d'avant-scène et la **visualisation** (imaginer son passage réussi) ;
  - se concentrer sur l'**intention** et non sur le jugement.

### L'hygiène de vie de l'interprète
- **Sommeil** suffisant, **alimentation** équilibrée et **hydratation**.
- **Récupération** : étirements doux, alternance des charges de travail, jours de repos.
- **Prévention** : écouter la **douleur**, signaler une gêne qui dure, protéger son **audition** en musique (bouchons adaptés) et sa **voix** (ne pas crier, éviter de forcer quand on est enroué).

### À retenir pour le bac
- Échauffement progressif, du général au spécifique ; il protège et améliore le geste.
- Diaphragme, soutien du souffle, posture sans tension parasite ; pratiques somatiques.
- Trac : adrénaline, utile s'il est modéré ; préparation, respiration, routine, visualisation ; hygiène de vie et prévention.`,
      cartes: [
        { q: "À quoi sert l'échauffement ?", r: "À élever la température des muscles, préparer le cœur, les articulations et le système nerveux, et à prévenir les blessures." },
        { q: "Dans quel ordre construire un échauffement ?", r: "Du général (tout le corps) au spécifique (gestes de sa discipline)." },
        { q: "Quel muscle est le principal moteur de la respiration ?", r: "Le diaphragme." },
        { q: "Que fait le diaphragme à l'inspiration ?", r: "Il se contracte et s'abaisse, ce qui fait entrer l'air dans les poumons." },
        { q: "Qu'est-ce que le soutien du souffle ?", r: "L'appui sur les muscles abdominaux pour contrôler l'expiration et projeter la voix sans forcer." },
        { q: "Qu'est-ce qu'une tension parasite ?", r: "Une contraction inutile (épaules, mâchoire, doigts) qui gêne le geste et fatigue." },
        { q: "Cite deux pratiques somatiques.", r: "Méthode Feldenkrais, technique Alexander (aussi Pilates, Body-Mind Centering)." },
        { q: "Qu'est-ce que le trac ?", r: "Une anxiété liée à la représentation, provoquée par la libération d'adrénaline." },
        { q: "Quels sont les signes du trac ?", r: "Cœur rapide, mains moites, bouche sèche, tremblements." },
        { q: "Le trac est-il toujours négatif ?", r: "Non : modéré, il mobilise l'énergie et la concentration ; trop fort, il bloque." },
        { q: "Cite trois moyens de gérer le trac.", r: "Répéter dans les conditions de l'épreuve, respirer lentement, routine et visualisation." },
        { q: "Qu'est-ce que la visualisation ?", r: "Imaginer en détail son passage réussi pour se préparer mentalement." },
        { q: "Cite trois éléments de l'hygiène de vie de l'interprète.", r: "Sommeil, alimentation équilibrée, hydratation (aussi récupération)." },
        { q: "Comment un musicien protège-t-il son audition ?", r: "Avec des bouchons d'oreille adaptés et en limitant les expositions aux sons forts." },
      ],
      quiz: [
        { q: "Quel muscle est le principal moteur de la respiration ?", choix: ["Le diaphragme","Le biceps","Le deltoïde","Le mollet"], bonne: 0, expl: "Muscle en dôme sous les poumons.", niv: 1 },
        { q: "Quelle hormone provoque les signes du trac ?", choix: ["L'insuline","La mélatonine","La croissance","L'adrénaline"], bonne: 3, expl: "Hormone du stress.", niv: 1 },
        { q: "Par quoi commence un échauffement bien construit ?", choix: ["Les gestes les plus difficiles du solo, à pleine vitesse","Des étirements forcés à froid","Des mouvements généraux de tout le corps","Une série de sauts maximaux"], bonne: 2, expl: "Du général au spécifique.", niv: 1 },
        { q: "Laquelle est une pratique somatique ?", choix: ["Le solfège rythmique","La méthode Feldenkrais","La lecture à vue","Le travail à la table du texte"], bonne: 1, expl: "Conscience du corps.", niv: 1 },
        { q: "Que fait le diaphragme à l'inspiration ?", choix: ["Il se relâche et remonte vers la gorge","Il pousse l'air hors des poumons","Il se contracte et s'abaisse","Il reste immobile"], bonne: 2, expl: "L'air entre dans les poumons.", niv: 2 },
        { q: "Pourquoi un trac modéré peut-il être utile ?", choix: ["Il supprime la fatigue accumulée pendant la semaine","Il mobilise l'énergie et la concentration","Il rend la mémoire infaillible","Il évite de devoir s'échauffer"], bonne: 1, expl: "Activation.", niv: 2 },
        { q: "Quel signe montre une tension parasite chez un violoniste ?", choix: ["Des épaules relevées pendant le jeu","Une respiration lente avant de jouer","Un regard posé sur la partition","Des pieds bien ancrés au sol pendant le morceau"], bonne: 0, expl: "Contraction inutile.", niv: 2 },
        { q: "Comment préparer au mieux son passage devant le jury ?", choix: ["Répéter plusieurs fois devant des camarades dans les conditions de l'épreuve","Découvrir la salle le jour même pour garder l'effet de surprise sur scène","Ne plus répéter la semaine avant","Changer de programme la veille"], bonne: 0, expl: "Habituer le corps à la situation.", niv: 2 },
        { q: "Que permet le soutien du souffle chez le comédien ?", choix: ["Parler plus vite pour finir plus tôt","Projeter la voix sans forcer sur la gorge","Supprimer les pauses dans le texte","Garder la bouche fermée pendant la réplique"], bonne: 1, expl: "Appui abdominal.", niv: 2 },
        { q: "Un comédien est enroué la veille d'une représentation. Que faire ?", choix: ["Crier pour « ouvrir » la voix","Boire très froid et parler fort pour calmer la gorge","Répéter tout le texte à pleine voix","Reposer sa voix, s'hydrater et éviter de forcer"], bonne: 3, expl: "Prévention vocale.", niv: 3 },
        { q: "Pourquoi expirer lentement aide-t-il à calmer le trac ?", choix: ["Une expiration longue augmente la production d'adrénaline","Une expiration longue permet de retenir son souffle plus longtemps","Elle refroidit les muscles avant l'effort","Une expiration longue ralentit le rythme cardiaque"], bonne: 3, expl: "Effet apaisant.", niv: 3 },
        { q: "Pourquoi l'échauffement d'un chanteur comprend-il aussi des mouvements du corps ?", choix: ["Le jury note la souplesse des chanteurs","Les cordes vocales se fatiguent moins quand on bouge beaucoup les bras","La posture et la détente du corps conditionnent la qualité de la voix","Il remplace les vocalises"], bonne: 2, expl: "Voix et corps liés.", niv: 3 },
      ],
    },
    {
      chapitre: "s2tmd-pratique-4",
      fiche: `## Créer et expliquer sa démarche artistique

Les trois épreuves demandent une **création personnelle** : un solo composé et une improvisation en danse, un projet de **création/invention** en musique, une **proposition personnelle** à partir d'un texte en théâtre. Toutes sont suivies d'un **entretien** où le candidat doit **expliciter ses choix**. Savoir créer et savoir parler de sa création vont ensemble.

### Improviser
- **Improviser**, c'est inventer dans l'instant à partir d'une **consigne** (un thème, une musique, une situation, un mot).
- Ce n'est pas faire n'importe quoi : l'improvisation s'appuie sur des **outils** (variations de vitesse, d'espace, d'intensité, de hauteur, de registre de jeu), sur l'**écoute** (des partenaires, de la musique, du silence) et sur un **engagement** total.
- Elle développe la **disponibilité**, la **prise de risque** et l'imaginaire, que les programmes de théâtre et de danse mettent en avant.

### Composer
- **Composer**, c'est **organiser** des matériaux dans le temps et l'espace pour produire du sens : choisir, ordonner, répéter, varier, contraster.
- Un processus de création suit souvent des étapes :
  - partir d'une **intention** ou d'un **point de départ** (une image, un texte, un souvenir, une question de société) ;
  - **explorer** et produire des matériaux (improvisations, motifs, phrases, esquisses) ;
  - **sélectionner** et **structurer** (début, développement, fin ; contrastes ; temps forts) ;
  - **affiner** et **fixer** (répéter, mémoriser, soigner les transitions) ;
  - **présenter** à un public et recueillir des retours.
- Les **influences** comptent : œuvres vues ou entendues, artistes, styles. Le programme de musique demande d'**identifier les influences** qui ont nourri le travail.

### La note d'intention
- Courte présentation écrite de ce que l'on veut faire et pourquoi : **sujet**, **intention**, **choix** principaux (espace, musique, costume, jeu), **effet** recherché sur le spectateur.
- En théâtre, le candidat remet au jury une **liste de cinq à sept scènes**, chacune accompagnée d'une **courte note d'intention**.

### La médiation
- **Médiation** : tout ce qui aide un **public** à entrer dans une œuvre (présentation orale, atelier, programme de salle, échange après le spectacle, vidéo de présentation).
- En musique, le candidat présente les **formes de médiation** qu'il envisage pour son projet **auprès d'un public donné** (élèves d'école primaire, résidents d'une maison de retraite, public d'un festival).
- Une bonne médiation tient compte de l'**âge**, des **connaissances** et des **attentes** de ce public, et rend l'expérience **sensible**, pas seulement explicative.

### Expliquer ses choix pendant l'entretien
- Dire **ce que l'on a voulu faire** (intention), **comment** on s'y est pris (procédés, choix techniques), **ce qui a marché** et **ce qui a moins bien marché**, et **pourquoi**.
- Employer le **vocabulaire précis** de sa discipline (canon, accumulation ; carrure, modulation ; adresse, distanciation).
- S'appuyer sur sa **culture** : œuvres, artistes, courants, perspectives du programme.
- Montrer un **regard critique** : un candidat qui sait identifier ses faiblesses et proposer des pistes de travail est valorisé.
- Accepter de **rejouer** ou de **montrer** un passage si le jury le demande.

### À retenir pour le bac
- Improviser : inventer dans l'instant avec des outils et de l'écoute ; composer : organiser des matériaux pour produire du sens.
- Étapes : intention, exploration, sélection et structure, affinage, présentation ; influences identifiées.
- Note d'intention ; médiation adaptée à un public ; entretien : intention, procédés, réussites, difficultés, culture, regard critique.`,
      cartes: [
        { q: "Qu'est-ce qu'improviser ?", r: "Inventer dans l'instant à partir d'une consigne, avec des outils et de l'écoute." },
        { q: "Qu'est-ce que composer ?", r: "Organiser des matériaux dans le temps et l'espace pour produire du sens." },
        { q: "Cite les grandes étapes d'un processus de création.", r: "Intention, exploration, sélection et structure, affinage, présentation." },
        { q: "Qu'est-ce qu'une intention artistique ?", r: "Ce que l'artiste veut dire ou faire ressentir au spectateur." },
        { q: "Qu'est-ce qu'une note d'intention ?", r: "Un court texte qui présente le sujet, l'intention, les choix et l'effet recherché." },
        { q: "Que remet le candidat de théâtre avant l'épreuve ?", r: "Une liste de cinq à sept scènes, chacune avec une courte note d'intention." },
        { q: "Qu'est-ce que la médiation ?", r: "Tout ce qui aide un public à entrer dans une œuvre." },
        { q: "Cite deux formes de médiation.", r: "Présentation avant le concert, atelier de pratique, échange avec le public, programme de salle." },
        { q: "Que doit présenter le musicien sur la médiation de son projet ?", r: "Les formes qu'il envisage pour le présenter à un public donné." },
        { q: "Pourquoi identifier ses influences ?", r: "Pour situer sa création dans une culture et montrer d'où viennent ses choix." },
        { q: "Que faut-il dire dans l'entretien sur sa création ?", r: "Son intention, ses procédés, ce qui a marché ou non et pourquoi." },
        { q: "Pourquoi parler de ses difficultés au jury ?", r: "Pour montrer un regard critique et des pistes de travail, ce qui est valorisé." },
        { q: "Quelles qualités développe l'improvisation ?", r: "La disponibilité, la prise de risque, l'écoute et l'imaginaire." },
        { q: "Que faire si le jury demande de rejouer un passage ?", r: "Le refaire en tenant compte de sa remarque, pour montrer sa capacité d'adaptation." },
      ],
      quiz: [
        { q: "Qu'est-ce qu'improviser ?", choix: ["Rejouer exactement une pièce apprise par cœur, sans rien changer","Copier la prestation d'un camarade","Inventer dans l'instant à partir d'une consigne","Réciter un texte sans le comprendre"], bonne: 2, expl: "Création immédiate.", niv: 1 },
        { q: "Combien de scènes le candidat de théâtre propose-t-il au jury ?", choix: ["Une ou deux","Trois ou quatre","De deux à trois","De cinq à sept"], bonne: 3, expl: "Avec une note d'intention chacune.", niv: 1 },
        { q: "Quelle est souvent la première étape d'une création ?", choix: ["Fixer définitivement chaque geste avant de chercher une idée","Partir d'une intention ou d'un point de départ","Présenter le travail au public","Choisir le costume du final"], bonne: 1, expl: "Puis exploration.", niv: 1 },
        { q: "Que contient une note d'intention ?", choix: ["Le sujet, l'intention et les choix principaux","La liste des fautes du candidat","Le prix des billets et la liste des salles de la tournée","Le règlement de l'épreuve"], bonne: 0, expl: "Court texte.", niv: 1 },
        { q: "Qu'est-ce que la médiation d'un projet musical ?", choix: ["La négociation du cachet avec l'organisateur du concert","Le réglage du son par le technicien de la salle","Le choix des partitions par le professeur","Ce qui aide un public à entrer dans la musique proposée"], bonne: 3, expl: "Lien avec le public.", niv: 2 },
        { q: "Pour des élèves de CE2, quelle médiation convient le mieux ?", choix: ["Une conférence d'une heure sur l'harmonie tonale du morceau","La distribution de la partition complète","Un texte savant dans le programme de salle","Un petit atelier où ils frappent le rythme du morceau"], bonne: 3, expl: "Adaptée à l'âge.", niv: 2 },
        { q: "Quel procédé relève de la structuration d'une composition ?", choix: ["Acheter un nouveau costume","Créer un contraste entre deux parties","Arriver en avance au studio","Regarder une vidéo d'un autre spectacle sans rien noter"], bonne: 1, expl: "Organiser les matériaux.", niv: 2 },
        { q: "Qu'attend le jury quand il demande « pourquoi ce choix ? »", choix: ["Le nom du professeur qui a donné l'idée","Une excuse pour une erreur technique","La liste complète des spectacles vus pendant l'année scolaire","Une justification liée à l'intention et aux effets"], bonne: 3, expl: "Expliciter.", niv: 2 },
        { q: "Que montre un candidat qui cite les œuvres qui l'ont inspiré ?", choix: ["Qu'il a copié ces œuvres","Qu'il manque d'idées personnelles","Qu'il connaît le prix des places","Qu'il situe sa création dans une culture"], bonne: 3, expl: "Influences identifiées.", niv: 2 },
        { q: "Pourquoi l'improvisation n'est-elle pas « faire n'importe quoi » ?", choix: ["Elle est entièrement écrite à l'avance par le professeur","Le jury fournit les gestes à faire","Elle s'appuie sur une consigne, des outils et l'écoute","Elle dure moins de dix secondes"], bonne: 2, expl: "Liberté organisée.", niv: 3 },
        { q: "Un candidat dit : « Ma fin manque de force, je voudrais ralentir le dernier passage. » Que montre-t-il ?", choix: ["Un manque de préparation sanctionné par le jury","Qu'il n'a pas compris la consigne de départ","Un regard critique et une piste d'amélioration","Qu'il veut changer de pratique"], bonne: 2, expl: "Regard réflexif valorisé.", niv: 3 },
        { q: "Pourquoi employer le vocabulaire précis de sa discipline pendant l'entretien ?", choix: ["Il rend l'explication claire et montre la maîtrise des notions","Il permet de parler plus longtemps","Le jury ne comprend que le vocabulaire technique des conservatoires","Il évite d'avoir à donner son avis"], bonne: 0, expl: "Précision.", niv: 3 },
      ],
    },
    {
      chapitre: "s2tmd-pratique-5",
      fiche: `## Danse : le solo, l'improvisation et l'entretien

La **première partie** de l'épreuve de pratique chorégraphique dure environ **15 minutes** et vaut **10 points sur 20**. Elle comprend trois temps : un **solo composé** (4 points), une **improvisation** (2 points) et un **entretien** de 10 minutes (4 points).

### Premier temps : la composition personnelle
- Le candidat interprète une **composition personnelle** en **danse classique, contemporaine, jazz ou hip-hop**, d'une durée de **2 minutes à 3 minutes 30**, sur une **œuvre musicale de son choix**.
- Il apporte l'**enregistrement musical** sur un **support numérique**.
- Le jury apprécie le **niveau technique** (précision, vitesse d'exécution, maîtrise de l'énergie et de la respiration, mémorisation), la qualité d'**interprétation** et la **créativité**.

### Deuxième temps : l'improvisation
- Le candidat **tire au sort un thème** proposé par le jury.
- Il **écoute** une proposition musicale du jury, puis choisit d'improviser **en silence** ou **sur cette musique**.
- Après **15 secondes** de « mise en condition », il improvise pendant **1 minute 15 à 2 minutes**.
- Conseils : traduire le thème en **qualités de mouvement** (un thème « fragile » peut donner des appuis instables, des gestes suspendus, une énergie retenue) ; jouer avec les **contrastes** ; garder une **intention** du début à la fin ; finir nettement.

### Troisième temps : l'entretien
- Le jury interroge le candidat sur sa **composition** et son **improvisation**, pour apprécier sa capacité à **expliciter sa démarche de composition** et son **expérience d'interprète**, en relation avec sa **culture chorégraphique** et son **parcours** de formation.
- Questions possibles : d'où vient l'idée du solo ? Pourquoi cette musique ? Comment avez-vous construit l'espace ? Quels chorégraphes vous ont influencé ? Qu'avez-vous ressenti dans l'improvisation ? Que changeriez-vous ?

### Les qualités d'un interprète
- **Présence** : être pleinement là, engagé, et capter le regard.
- **Intention** : savoir ce que chaque passage veut exprimer.
- **Musicalité** : relation précise du mouvement à la musique (sur le temps, en contrepoint, en décalage volontaire, en suivant la mélodie ou le rythme).
- **Regard** et **adresse** : où regarde-t-on, à qui s'adresse la danse.
- **Qualités de mouvement** : fluide ou saccadé, lourd ou léger, lent ou rapide, direct ou indirect.

### Les grandes disciplines
- **Classique** : en dehors, verticalité, codification venue de la cour de Louis XIV (Académie royale de danse, 1661) ; vocabulaire en français (plié, tendu, arabesque, pirouette).
- **Contemporaine** : liberté du vocabulaire, travail du poids, du sol, de la chute, de la respiration ; héritière de la danse moderne (Martha Graham, Merce Cunningham, Pina Bausch).
- **Jazz** : isolations, dynamique rythmique, syncopes, influence des danses afro-américaines.
- **Hip-hop** : né dans les années 1970 dans le Bronx à New York ; danses debout (popping, locking, house) et au sol (breaking), culture du cercle et du battle ; entré sur les scènes de théâtre en France dans les années 1990.

### À retenir pour le bac
- Première partie : 10 points ; solo de 2 min à 3 min 30 (4 points), improvisation de 1 min 15 à 2 min sur thème tiré au sort (2 points), entretien de 10 min (4 points).
- Improviser en silence ou sur la musique du jury, après 15 secondes de mise en condition.
- Présence, intention, musicalité ; savoir expliquer sa démarche en lien avec sa culture chorégraphique.`,
      cartes: [
        { q: "Combien de points vaut la première partie de l'épreuve de danse ?", r: "10 points sur 20." },
        { q: "Combien dure la composition personnelle ?", r: "De 2 minutes à 3 minutes 30." },
        { q: "Dans quelles disciplines peut-on présenter sa composition ?", r: "Classique, contemporain, jazz ou hip-hop." },
        { q: "Combien de points vaut le solo composé ?", r: "4 points." },
        { q: "Comment est choisi le thème de l'improvisation ?", r: "Le candidat le tire au sort parmi les thèmes proposés par le jury." },
        { q: "Combien dure l'improvisation ?", r: "De 1 minute 15 à 2 minutes, après 15 secondes de mise en condition." },
        { q: "Le candidat doit-il improviser sur la musique du jury ?", r: "Non : après l'avoir écoutée, il choisit le silence ou cette musique." },
        { q: "Combien de points vaut l'improvisation ?", r: "2 points." },
        { q: "Combien dure l'entretien qui suit et que vaut-il ?", r: "10 minutes, 4 points." },
        { q: "Sur quoi porte l'entretien de la première partie ?", r: "Sur la composition et l'improvisation, en lien avec sa culture chorégraphique et son parcours." },
        { q: "Qu'est-ce que la musicalité d'un danseur ?", r: "La relation précise et choisie de son mouvement à la musique." },
        { q: "Qu'est-ce que la présence ?", r: "Être pleinement engagé dans sa danse et capter le regard du spectateur." },
        { q: "Où et quand est né le hip-hop ?", r: "Dans le Bronx, à New York, dans les années 1970." },
        { q: "Quand la danse classique a-t-elle été codifiée en institution ?", r: "Avec l'Académie royale de danse créée par Louis XIV en 1661." },
      ],
      quiz: [
        { q: "Combien de temps dure au plus la composition personnelle ?", choix: ["3 minutes 30","1 minute","2 minutes","2 minutes 30"], bonne: 0, expl: "Minimum 2 minutes.", niv: 1 },
        { q: "Combien de points vaut l'improvisation ?", choix: ["4 points","6 points","10 points","2 points"], bonne: 3, expl: "Le solo vaut 4 points.", niv: 1 },
        { q: "Qui fournit la musique de la composition personnelle ?", choix: ["Le candidat, sur un support numérique","Le jury, tirée au sort","Le pianiste accompagnateur du conservatoire","Le lycée, à partir d'une liste officielle"], bonne: 0, expl: "Œuvre de son choix.", niv: 1 },
        { q: "Combien dure l'entretien de la première partie ?", choix: ["2 minutes","5 minutes","10 minutes","7 minutes"], bonne: 2, expl: "Il vaut 4 points.", niv: 1 },
        { q: "Après avoir écouté la musique du jury, que peut faire le candidat ?", choix: ["Demander une autre musique de son choix","Retirer un nouveau thème si le premier ne lui plaît pas du tout","Choisir d'improviser en silence ou sur cette musique","Reprendre sa composition personnelle"], bonne: 2, expl: "Choix du candidat.", niv: 2 },
        { q: "Combien de temps de mise en condition précède l'improvisation ?", choix: ["1 minute","5 minutes","10 minutes","15 secondes"], bonne: 3, expl: "Puis 1 min 15 à 2 min d'improvisation.", niv: 2 },
        { q: "Le thème tiré est « l'attente ». Quelle traduction en mouvement est la plus pertinente ?", choix: ["Une suite de sauts rapides sans arrêt","Des suspensions et des départs retenus qui ne se réalisent pas","La reprise exacte de son solo","Des gestes mimés qui montrent quelqu'un lisant l'heure sur sa montre"], bonne: 1, expl: "Qualités de mouvement.", niv: 2 },
        { q: "Quelle discipline se caractérise par l'en-dehors et la verticalité ?", choix: ["La danse classique","Le breaking","La danse contemporaine","Le locking"], bonne: 0, expl: "Codifiée à la cour.", niv: 2 },
        { q: "Quelle danse hip-hop se pratique surtout au sol ?", choix: ["Le popping","Le breaking","Le locking","La house"], bonne: 1, expl: "Figures au sol.", niv: 2 },
        { q: "Pourquoi le jury interroge-t-il sur le parcours de formation du candidat ?", choix: ["Pour vérifier qu'il a bien payé son inscription annuelle au conservatoire","Pour comprendre d'où vient sa démarche et sa culture chorégraphique","Pour choisir la note de l'improvisation","Pour connaître le nom de ses parents"], bonne: 1, expl: "Démarche située.", niv: 3 },
        { q: "Un danseur bouge en décalage volontaire avec le rythme. Comment l'expliquer au jury ?", choix: ["Il a mal entendu la musique pendant le passage à cause de la salle","Il a oublié la suite de sa chorégraphie","Il voulait montrer sa vitesse maximale","Il crée un contrepoint entre la danse et la musique"], bonne: 3, expl: "Musicalité choisie.", niv: 3 },
        { q: "Pourquoi garder une même intention du début à la fin de l'improvisation ?", choix: ["Elle donne une cohérence et une lisibilité à la proposition","Le jury impose de répéter le même geste pendant toute l'improvisation","Elle permet de finir plus vite","Elle évite de devoir écouter la musique"], bonne: 0, expl: "Engagement.", niv: 3 },
      ],
    },
    {
      chapitre: "s2tmd-pratique-6",
      fiche: `## Danse : outils et procédés de composition, captation

Les **ateliers de pratique, d'improvisation et de composition** occupent au moins **20 %** de l'horaire de pratique chorégraphique en terminale. L'élève y apprend à **construire une séquence** dont il sait **expliciter la conception** et **justifier les choix**. Il réalise aussi des **captations** et des **montages vidéo** de séquences dansées.

### Les composantes du mouvement
- Le **corps** : quelles parties bougent (isolations, mouvement global), appuis, contacts avec le sol ou un partenaire.
- L'**espace** :
  - **niveaux** (sol, médian, haut) ;
  - **directions** (avant, arrière, côté, diagonale) ;
  - **trajets** au sol (lignes, courbes, spirales) ;
  - **kinésphère** : la sphère autour du corps que l'on peut atteindre sans se déplacer ;
  - **orientation** par rapport au public.
- Le **temps** : vitesse, accélération, ralenti, arrêt, **silence**, rapport à la pulsation, phrases courtes ou longues.
- L'**énergie** : intensité, tonicité, poids (lourd ou léger), flux (libre ou retenu), qualités (fluide, saccadé, vibratoire, explosif).
- Ces catégories reprennent en partie l'**analyse du mouvement** de **Rudolf Laban** (espace, temps, poids, flux).

### Les procédés de composition
- **Répétition** : reprendre un geste ou une phrase pour l'installer dans la mémoire du spectateur.
- **Accumulation** : ajouter un geste à chaque reprise (1 ; 1-2 ; 1-2-3…).
- **Variation** : modifier un paramètre d'une phrase (vitesse, niveau, amplitude, orientation).
- **Rétrograde** : danser la phrase à l'envers, du dernier geste au premier.
- **Canon** : les danseurs font la même phrase en **décalé** dans le temps.
- **Unisson** : tous font le même mouvement en même temps.
- **Miroir** et **question-réponse** : relation entre deux danseurs.
- **Contraste** : opposer deux qualités (lent et rapide, sol et sauts) pour créer des temps forts.
- **Motif** : geste ou phrase qui revient au cours d'une pièce ; la **signature** d'un chorégraphe désigne ses gestes caractéristiques.

### Construire un solo
- Une **intention** claire (ce que l'on veut dire ou faire ressentir).
- Une **structure** : début (installation), développement, moments forts, fin nette ; des **transitions** soignées.
- Un **rapport à la musique** choisi : suivre la mélodie, marquer les accents, jouer en contrepoint, utiliser les silences.
- Un usage réfléchi de l'**espace scénique** : le centre est fort, les diagonales donnent de la dynamique, le fond éloigne.
- Le **costume**, la **lumière** et les **objets** peuvent renforcer le propos.

### La captation vidéo
- **Plans** : plan large (tout le corps et l'espace), plan moyen, gros plan (détail d'une main, d'un visage).
- **Angle** : de face, de côté, en plongée (d'en haut), en contre-plongée (d'en bas).
- **Caméra fixe** ou **en mouvement** (travelling, caméra portée).
- **Montage** : choisir l'ordre et la durée des plans, couper, raccorder, ralentir, accélérer, superposer.
- La captation est un **regard** : elle peut servir à garder une trace fidèle ou devenir une **vidéodanse**, œuvre à part entière pensée pour l'écran.
- L'élève doit savoir **présenter ses partis pris** de prise de vue et de montage.

### À retenir pour le bac
- Composantes : corps, espace (niveaux, directions, trajets, kinésphère), temps, énergie (Laban).
- Procédés : répétition, accumulation, variation, rétrograde, canon, unisson, miroir, contraste, motif.
- Captation : plans, angles, caméra fixe ou mobile, montage ; savoir justifier ses choix.`,
      cartes: [
        { q: "Quelles sont les quatre grandes composantes du mouvement ?", r: "Le corps, l'espace, le temps et l'énergie." },
        { q: "Cite les trois niveaux de l'espace.", r: "Le sol, le niveau médian et le niveau haut." },
        { q: "Qu'est-ce que la kinésphère ?", r: "La sphère autour du corps que l'on peut atteindre sans se déplacer." },
        { q: "Qui a créé une grande méthode d'analyse du mouvement ?", r: "Rudolf Laban (espace, temps, poids, flux)." },
        { q: "Qu'est-ce qu'une accumulation ?", r: "Ajouter un geste à chaque reprise d'une phrase : 1 ; 1-2 ; 1-2-3." },
        { q: "Qu'est-ce qu'un canon ?", r: "La même phrase dansée par plusieurs danseurs avec un décalage dans le temps." },
        { q: "Qu'est-ce qu'un unisson ?", r: "Tous les danseurs font le même mouvement en même temps." },
        { q: "Qu'est-ce qu'un rétrograde ?", r: "Danser une phrase à l'envers, du dernier geste au premier." },
        { q: "Qu'est-ce qu'une variation ?", r: "Reprendre une phrase en modifiant un paramètre (vitesse, niveau, amplitude)." },
        { q: "Qu'est-ce qu'une signature chorégraphique ?", r: "Des gestes ou phrases caractéristiques qui reviennent chez un chorégraphe." },
        { q: "Pourquoi utiliser le contraste dans une composition ?", r: "Pour créer des temps forts et relancer l'attention du spectateur." },
        { q: "Qu'est-ce qu'un plan large en vidéo ?", r: "Un plan qui montre tout le corps du danseur et l'espace." },
        { q: "Qu'est-ce qu'une plongée ?", r: "Une prise de vue faite d'en haut." },
        { q: "Qu'est-ce qu'une vidéodanse ?", r: "Une œuvre de danse pensée pour l'écran, et non une simple trace." },
      ],
      quiz: [
        { q: "Comment appelle-t-on la même phrase dansée en décalé par plusieurs danseurs ?", choix: ["Un unisson","Un canon","Un miroir","Un rétrograde"], bonne: 1, expl: "Décalage temporel.", niv: 1 },
        { q: "Quel procédé ajoute un geste à chaque reprise ?", choix: ["Le rétrograde","L'accumulation","L'unisson","La rupture"], bonne: 1, expl: "1 ; 1-2 ; 1-2-3.", niv: 1 },
        { q: "Quel chorégraphe et théoricien a analysé le mouvement en espace, temps, poids et flux ?", choix: ["Marius Petipa","Jean-Georges Noverre","Louis XIV","Rudolf Laban"], bonne: 3, expl: "Analyse du mouvement.", niv: 1 },
        { q: "Comment appelle-t-on une prise de vue faite d'en haut ?", choix: ["Une contre-plongée","Un travelling","Un gros plan","Une plongée"], bonne: 3, expl: "Regard vers le bas.", niv: 1 },
        { q: "Qu'est-ce que la kinésphère ?", choix: ["La surface totale de la scène de théâtre","Le cercle formé par les danseurs autour d'un battle","L'espace que le corps atteint sans se déplacer","La zone réservée aux musiciens dans la fosse"], bonne: 2, expl: "Sphère personnelle.", niv: 2 },
        { q: "Un danseur reprend sa phrase au sol, puis debout. Quel procédé utilise-t-il ?", choix: ["Un unisson","Une accumulation","Une variation de niveau","Un canon"], bonne: 2, expl: "Paramètre modifié.", niv: 2 },
        { q: "Quel paramètre relève de l'énergie ?", choix: ["Le poids lourd ou léger du geste","La diagonale tracée sur la scène","Le tempo de la musique","Le niveau sol"], bonne: 0, expl: "Qualités, intensité.", niv: 2 },
        { q: "Quel plan choisir pour montrer le détail d'une main qui tremble ?", choix: ["Un plan large","Un plan d'ensemble","Un plan général de la salle","Un gros plan"], bonne: 3, expl: "Détail.", niv: 2 },
        { q: "Pourquoi placer un passage important au centre de la scène ?", choix: ["Le centre est la zone la plus sombre du plateau, ce qui crée du mystère","Le centre est un espace fort qui attire le regard","Le jury est assis sur le côté","Le règlement de l'épreuve l'impose"], bonne: 1, expl: "Espace scénique.", niv: 2 },
        { q: "Pourquoi un chorégraphe répète-t-il un motif tout au long de sa pièce ?", choix: ["Parce qu'il manque de matériaux chorégraphiques pour finir sa pièce","Pour créer une mémoire chez le spectateur et donner une unité","Pour raccourcir la durée de la pièce","Pour que les danseurs se reposent"], bonne: 1, expl: "Motif récurrent.", niv: 3 },
        { q: "Un élève coupe sa captation pour enchaîner des gros plans sur les pieds. Quel parti pris défend-il ?", choix: ["Faire voir le travail des appuis, invisible de loin","Cacher les erreurs de tout le reste du corps","Garder une trace fidèle et complète de l'ensemble du solo","Raccourcir le fichier vidéo"], bonne: 0, expl: "Le montage est un regard.", niv: 3 },
        { q: "Pourquoi soigner les transitions entre les parties d'un solo ?", choix: ["Le jury ne note que les transitions","Elles rendent la composition fluide et lisible","Elles permettent de changer de musique entre chaque partie du solo","Elles remplacent le final"], bonne: 1, expl: "Cohérence de la structure.", niv: 3 },
      ],
    },
    {
      chapitre: "s2tmd-pratique-7",
      fiche: `## Danse : l'analyse d'un extrait musical

La **deuxième partie** de l'épreuve de danse dure environ **15 minutes** et vaut **4 points**. Le candidat écoute un **bref extrait** d'une œuvre musicale (environ **1 minute**), diffusé **deux fois de suite**, puis répond aux **questions du jury** sur le **style**, l'**organisation rythmique**, la **texture** instrumentale ou vocale, l'organisation des **phrases mélodiques** ou tout autre élément remarquable. Les **réponses corporelles** sont possibles ou peuvent être demandées (frapper la pulsation, marcher les temps, montrer une phrase).

### Le rythme
- **Pulsation** : battement régulier que l'on peut frapper du pied.
- **Tempo** : vitesse de la pulsation, en battements par minute (BPM) ou par des termes italiens : **largo** et **adagio** (lents), **andante** (allant), **moderato**, **allegro** (rapide), **presto** (très rapide). Accelerando = on accélère, ritardando = on ralentit.
- **Mesure** : regroupement des temps, avec un **temps fort** au début. Mesure à **2 temps** (marche), à **3 temps** (valse), à **4 temps** (la plupart des musiques actuelles).
- **Binaire** ou **ternaire** : chaque temps se divise en deux ou en trois (une gigue ou un shuffle sont ternaires).
- **Syncope** et **contretemps** : accents déplacés sur les temps faibles ou entre les temps, très présents dans le jazz et les musiques actuelles.
- **Ostinato** : motif rythmique ou mélodique répété obstinément.
- Musique **non pulsée** : pas de battement régulier (certaines musiques contemporaines ou électroacoustiques).

### La mélodie et les phrases
- **Phrase** : unité musicale comparable à une phrase parlée, avec une respiration à la fin (**cadence**).
- **Carrure** : régularité des phrases, souvent de **4 ou 8 mesures** ; une carrure régulière aide le danseur à compter.
- **Forme** : organisation des parties. **AB**, **ABA** (reprise de la première partie), **rondo** (ABACA), **couplet-refrain**, **thème et variations**.
- **Mode** : majeur (souvent ressenti lumineux) ou mineur (souvent ressenti sombre), avec prudence : ce ressenti dépend de la culture.

### La texture et le timbre
- **Monodie** : une seule ligne mélodique, sans accompagnement.
- **Mélodie accompagnée** : une mélodie principale et un accompagnement.
- **Homophonie** : plusieurs voix avancent ensemble, en accords.
- **Polyphonie** : plusieurs lignes indépendantes en même temps (un canon, une fugue).
- **Timbre** : couleur du son qui permet de reconnaître un instrument ou une voix ; familles des **cordes**, **bois**, **cuivres**, **percussions**, **claviers**, instruments **électroniques**.
- **Nuances** : de **pianissimo** (très doux) à **fortissimo** (très fort), crescendo, decrescendo.

### Situer le style
- **Baroque** (vers 1600-1750 : Bach, Vivaldi, Rameau) : basse continue, rythme régulier, danses de suite (menuet, gigue).
- **Classique** (vers 1750-1820 : Haydn, Mozart) : phrases claires et carrées, équilibre.
- **Romantique** (XIXe siècle : Chopin, Tchaïkovski, compositeur des grands ballets) : expressivité, grands orchestres.
- **XXe siècle** : Stravinsky (rythmes irréguliers du Sacre du printemps, 1913), Debussy, musique répétitive (Steve Reich, Philip Glass), musique électroacoustique.
- **Jazz**, **musiques actuelles**, **musiques du monde** : swing, groove, échantillons, percussions.

### Méthode pour répondre
- **Première écoute** : impression générale, instruments, tempo, caractère.
- **Seconde écoute** : vérifier la mesure, repérer les phrases, la forme, un élément remarquable.
- Répondre en employant le **vocabulaire précis**, en séparant ce que l'on **entend** (objectif) de ce que l'on **ressent** (subjectif), et en faisant le **lien avec la danse** (« la carrure régulière permettrait des phrases de 8 temps »).

### À retenir pour le bac
- 4 points ; extrait d'environ 1 minute, deux écoutes, questions du jury ; réponses corporelles possibles.
- Pulsation, tempo, mesure, binaire ou ternaire, syncope, ostinato ; phrase, carrure, forme ; monodie, homophonie, polyphonie, timbre, nuances.
- Repères de style ; distinguer l'entendu du ressenti ; relier à la danse.`,
      cartes: [
        { q: "Combien de points vaut l'analyse musicale à l'épreuve de danse ?", r: "4 points sur 20." },
        { q: "Comment l'extrait musical est-il diffusé ?", r: "Un extrait d'environ 1 minute, écouté deux fois de suite." },
        { q: "Qu'est-ce que la pulsation ?", r: "Le battement régulier de la musique, que l'on peut frapper du pied." },
        { q: "Qu'est-ce que le tempo ?", r: "La vitesse de la pulsation, en battements par minute." },
        { q: "Que veulent dire adagio et allegro ?", r: "Adagio : lent ; allegro : rapide." },
        { q: "Quelle mesure a la valse ?", r: "Une mesure à 3 temps." },
        { q: "Différence entre binaire et ternaire ?", r: "Chaque temps se divise en deux (binaire) ou en trois (ternaire)." },
        { q: "Qu'est-ce qu'une syncope ?", r: "Un son attaqué sur un temps faible et prolongé sur le temps fort suivant, qui crée un décalage." },
        { q: "Qu'est-ce qu'un ostinato ?", r: "Un motif rythmique ou mélodique répété obstinément." },
        { q: "Qu'est-ce que la carrure ?", r: "La régularité des phrases musicales, souvent de 4 ou 8 mesures." },
        { q: "Qu'est-ce qu'une forme ABA ?", r: "Une première partie, une partie différente, puis le retour de la première." },
        { q: "Différence entre homophonie et polyphonie ?", r: "Homophonie : voix en accords, ensemble ; polyphonie : lignes indépendantes simultanées." },
        { q: "Qu'est-ce que le timbre ?", r: "La couleur d'un son, qui permet de reconnaître un instrument ou une voix." },
        { q: "Quelle œuvre de Stravinsky de 1913 est célèbre pour ses rythmes irréguliers ?", r: "Le Sacre du printemps." },
      ],
      quiz: [
        { q: "Combien de fois l'extrait musical est-il diffusé ?", choix: ["Une fois","Deux fois","Trois fois","Quatre fois"], bonne: 1, expl: "Deux écoutes successives.", niv: 1 },
        { q: "Quel terme désigne un tempo rapide ?", choix: ["Adagio","Largo","Andante","Allegro"], bonne: 3, expl: "Vitesse.", niv: 1 },
        { q: "Combien de temps compte la mesure d'une valse ?", choix: ["3 temps","4 temps","5 temps","6 temps"], bonne: 0, expl: "Un-deux-trois.", niv: 1 },
        { q: "Comment appelle-t-on un motif répété obstinément ?", choix: ["Un ostinato","Une cadence","Une coda","Un crescendo"], bonne: 0, expl: "Répétition.", niv: 1 },
        { q: "Une mélodie de flûte seule, sans accompagnement. Quelle texture ?", choix: ["Une polyphonie","Une monodie","Une homophonie","Un tutti d'orchestre"], bonne: 1, expl: "Une seule ligne.", niv: 2 },
        { q: "Qu'est-ce qu'une musique ternaire ?", choix: ["Une musique en trois parties ABA","Une musique jouée par trois instruments différents en même temps","Une musique dont chaque temps se divise en trois","Une musique à trois temps par minute"], bonne: 2, expl: "Subdivision.", niv: 2 },
        { q: "Quelle forme fait revenir un refrain entre des parties différentes ?", choix: ["Le canon","La monodie","La fugue","Le rondo"], bonne: 3, expl: "ABACA.", niv: 2 },
        { q: "Quelle période correspond à Bach, Vivaldi et Rameau ?", choix: ["Le classicisme","Le baroque","Le romantisme","La musique répétitive"], bonne: 1, expl: "Vers 1600-1750.", niv: 2 },
        { q: "Pourquoi une carrure régulière aide-t-elle le danseur ?", choix: ["Elle supprime les variations de nuance","Elle impose au chorégraphe une seule façon de danser sur la musique","Elle permet de compter et de construire des phrases de 8 temps","Elle rend la musique plus lente"], bonne: 2, expl: "Repères pour compter.", niv: 2 },
        { q: "Le jury demande de « montrer » la pulsation d'un extrait. Que faire ?", choix: ["Danser une improvisation libre sans rapport avec la musique entendue","Chanter la mélodie la plus aiguë","Marcher ou frapper chaque temps régulièrement","Décrire le compositeur"], bonne: 2, expl: "Réponse corporelle.", niv: 3 },
        { q: "Un candidat dit : « La musique est triste parce qu'elle est en mineur. » Comment nuancer ?", choix: ["Le mineur est souvent ressenti sombre, mais ce ressenti dépend de la culture","Le mineur rend une musique gaie et dansante pour les auditeurs partout dans le monde","Le mode n'a pas d'effet sur l'écoute","Le mineur indique un tempo rapide"], bonne: 0, expl: "Entendu et ressenti.", niv: 3 },
        { q: "Quel élément remarquable signaler dans un extrait plein d'accents décalés et de swing ?", choix: ["La basse continue du baroque","Les syncopes, typiques du jazz","L'absence de pulsation","Une monodie de chant grégorien"], bonne: 1, expl: "Style identifié.", niv: 3 },
      ],
    },
    {
      chapitre: "s2tmd-pratique-8",
      fiche: `## Danse : le corps en mouvement (articulations, muscles, équilibre)

La **troisième partie** de l'épreuve de danse est une **interrogation orale** d'environ **20 minutes**, notée sur **6 points**, sur le volet **sciences et connaissances sur le corps**. Le jury vérifie les **connaissances** sur le fonctionnement du corps et la capacité à les **relier à sa pratique de la danse** et aux **usages du corps dans la société**. Le programme cite notamment les systèmes articulaire et musculaire, les types de contraction, le système sensoriel et nerveux, le **schéma corporel**, l'**équilibre** et la **posture**.

### Os et articulations
- Le **squelette** soutient le corps, protège les organes et sert de levier aux muscles.
- Une **articulation** relie deux os. Les articulations mobiles (genou, hanche, épaule, cheville) ont des **cartilages** qui protègent les surfaces osseuses et des **ligaments** qui les stabilisent.
- La **hanche** est une articulation très mobile (tête du fémur dans le bassin) : elle permet l'**en-dehors** (rotation externe) recherché en danse classique, qui doit venir de la hanche et **non** d'une torsion du genou ou du pied.
- La **colonne vertébrale** a des courbures naturelles (cervicale, dorsale, lombaire) ; l'**alignement** tête-buste-bassin protège le dos.

### Muscles et contractions
- Un **muscle** se contracte et tire sur l'os par son **tendon**. Les muscles fonctionnent par paires : l'**agoniste** produit le mouvement, l'**antagoniste** s'étire et contrôle (biceps et triceps ; quadriceps et ischio-jambiers).
- Trois types de contraction :
  - **concentrique** : le muscle se raccourcit (remonter d'un plié) ;
  - **excentrique** : le muscle s'allonge en freinant (descendre dans un plié, réception de saut) ;
  - **isométrique** : le muscle travaille sans changer de longueur (tenir un équilibre, une arabesque).
- Les muscles **profonds** du tronc (transverse de l'abdomen, muscles autour de la colonne) assurent le **gainage** et la stabilité, appelés souvent « centre » par les danseurs.

### Le système nerveux et les sens
- Le **cerveau** commande les mouvements par les **nerfs moteurs** ; les **nerfs sensitifs** lui renvoient des informations.
- Les **sens** utiles au danseur : la **vue** (repères, spotting dans les tours), l'**oreille interne** (organe de l'équilibre, ou **système vestibulaire**), le **toucher** (appuis, contacts), la **proprioception** (capteurs dans les muscles, tendons et articulations qui informent sur la position du corps, même les yeux fermés).
- Le **schéma corporel** est la représentation, largement inconsciente, que l'on a de son corps et de ses limites dans l'espace ; il se construit et s'affine par la pratique.
- Les **apprentissages moteurs** se fixent par la **répétition** : un geste d'abord contrôlé consciemment devient **automatisé**, ce qui libère l'attention pour l'interprétation.

### Équilibre et posture
- Le corps est en **équilibre** quand la verticale passant par son **centre de gravité** tombe dans la **base d'appui** (surface au sol délimitée par les appuis).
- Sur demi-pointe, la base d'appui est **petite** : l'équilibre demande de nombreux micro-ajustements musculaires.
- Le **spotting** (fixer un point puis tourner la tête vite) limite le vertige dans les tours en aidant l'oreille interne et la vue.
- La **posture** dépend des muscles, des sens et des habitudes ; elle varie selon les styles (verticalité du classique, ancrage au sol du contemporain ou du hip-hop).

### Le corps dans la société
- Les **usages du corps** varient selon les époques et les cultures (le sociologue **Marcel Mauss** parle de « techniques du corps »).
- La danse peut interroger les **normes** : minceur, virtuosité, genre, âge, handicap.

### À retenir pour le bac
- Troisième partie : environ 20 minutes, 6 points, relier les savoirs du corps à sa pratique.
- Articulations, cartilages, ligaments ; en-dehors depuis la hanche ; muscles agoniste et antagoniste ; contractions concentrique, excentrique, isométrique ; gainage.
- Proprioception, oreille interne, schéma corporel, automatisation ; équilibre : centre de gravité au-dessus de la base d'appui ; spotting.`,
      cartes: [
        { q: "Combien de points vaut l'interrogation sur les sciences du corps ?", r: "6 points, pour environ 20 minutes." },
        { q: "Quel est le rôle d'un ligament ?", r: "Relier les os entre eux et stabiliser l'articulation." },
        { q: "Quel est le rôle d'un tendon ?", r: "Relier le muscle à l'os pour transmettre sa force." },
        { q: "D'où doit venir l'en-dehors en danse classique ?", r: "De la rotation externe de la hanche, pas d'une torsion du genou ou du pied." },
        { q: "Qu'est-ce qu'un muscle antagoniste ?", r: "Le muscle qui s'oppose au mouvement de l'agoniste, s'étire et le contrôle." },
        { q: "Qu'est-ce qu'une contraction concentrique ?", r: "Le muscle se raccourcit en produisant le mouvement, comme en remontant d'un plié." },
        { q: "Qu'est-ce qu'une contraction excentrique ?", r: "Le muscle s'allonge en freinant, comme dans la réception d'un saut." },
        { q: "Qu'est-ce qu'une contraction isométrique ?", r: "Le muscle travaille sans changer de longueur, comme pour tenir un équilibre." },
        { q: "Qu'est-ce que la proprioception ?", r: "La perception de la position et des mouvements de son corps grâce à des capteurs internes." },
        { q: "Quel organe gère l'équilibre ?", r: "L'oreille interne (système vestibulaire), avec la vue et la proprioception." },
        { q: "Qu'est-ce que le schéma corporel ?", r: "La représentation que l'on a de son corps et de ses limites dans l'espace." },
        { q: "Quand le corps est-il en équilibre ?", r: "Quand la verticale de son centre de gravité tombe dans sa base d'appui." },
        { q: "À quoi sert le spotting dans les tours ?", r: "À limiter le vertige en fixant un point puis en tournant vite la tête." },
        { q: "Que désigne Marcel Mauss par « techniques du corps » ?", r: "Les façons d'utiliser son corps, qui varient selon les sociétés et les époques." },
      ],
      quiz: [
        { q: "Quel type de contraction permet de tenir une arabesque immobile ?", choix: ["Concentrique","Excentrique","Pliométrique","Isométrique"], bonne: 3, expl: "Pas de changement de longueur.", niv: 1 },
        { q: "Quel tissu relie un muscle à un os ?", choix: ["Le ligament","Le tendon","Le cartilage","La moelle"], bonne: 1, expl: "Transmission de la force.", niv: 1 },
        { q: "Quel organe joue un rôle clé dans l'équilibre ?", choix: ["Le foie","L'estomac","La rate","L'oreille interne"], bonne: 3, expl: "Système vestibulaire.", niv: 1 },
        { q: "Combien de temps dure environ l'interrogation sur le corps ?", choix: ["20 minutes","5 minutes","10 minutes","15 minutes"], bonne: 0, expl: "6 points.", niv: 1 },
        { q: "Quel type de contraction se produit lors de la réception d'un saut ?", choix: ["Concentrique, le muscle se raccourcit pour amortir","Isométrique, sans mouvement","Réflexe, sans travail musculaire","Excentrique, le muscle s'allonge en freinant"], bonne: 3, expl: "Amortir.", niv: 2 },
        { q: "Pourquoi l'en-dehors doit-il venir de la hanche ?", choix: ["La hanche est l'articulation la moins mobile du corps","Le jury ne regarde que les pieds","Forcer au genou ou au pied abîme ces articulations","C'est une règle de la danse hip-hop"], bonne: 2, expl: "Prévention.", niv: 2 },
        { q: "Qu'est-ce que la proprioception ?", choix: ["Voir ses gestes dans le grand miroir du studio pendant le cours","Entendre la musique avec précision","Mémoriser les pas d'une chorégraphie","Sentir la position de son corps grâce à des capteurs internes"], bonne: 3, expl: "Sens interne.", niv: 2 },
        { q: "Pourquoi l'équilibre sur demi-pointe est-il difficile ?", choix: ["La base d'appui est très petite","Le centre de gravité disparaît","Les muscles des jambes ne travaillent plus","La vue ne sert à rien en équilibre"], bonne: 0, expl: "Base d'appui réduite.", niv: 2 },
        { q: "Que devient un geste longtemps répété ?", choix: ["Il devient impossible à modifier","Il fatigue de moins en moins les muscles jusqu'à zéro","Il se transforme en réflexe inné","Il s'automatise et libère l'attention"], bonne: 3, expl: "Apprentissage moteur.", niv: 2 },
        { q: "Un danseur perd l'équilibre quand il ferme les yeux. Quelle information lui manque ?", choix: ["Le son de la musique","La force de ses bras","La souplesse de ses ischio-jambiers et de ses mollets, trop raides","La vue, qui complète l'oreille interne et la proprioception"], bonne: 3, expl: "Plusieurs sens associés.", niv: 3 },
        { q: "Pourquoi renforcer les muscles profonds du tronc en danse ?", choix: ["Ces muscles permettent de sauter sans utiliser les jambes","Le gainage stabilise le corps et protège le dos","Ils remplacent l'échauffement","Ils augmentent la taille du danseur"], bonne: 1, expl: "Centre stable.", niv: 3 },
        { q: "Comment relier les « techniques du corps » de Mauss à la danse ?", choix: ["La danse ne dépend pas de la société","Chaque personne danse de la même façon, quels que soient son pays et son époque","Chaque style transmet une façon apprise de se tenir et de bouger","Les gestes de danse sont innés"], bonne: 2, expl: "Usages sociaux du corps.", niv: 3 },
      ],
    },
    {
      chapitre: "s2tmd-pratique-9",
      fiche: `## Danse : entraînement, blessures et hygiène de vie du danseur

Le second domaine du volet **sciences et connaissances sur le corps** porte sur l'**entraînement en danse** : méthodes d'entraînement, **composantes de la performance** et leur amélioration, **pratiques somatiques**, **traumatologie** propre à la danse et risques de la pratique intensive, **hygiène de vie**, effets de l'**anxiété** sur la performance. Ces thèmes sont interrogés dans la troisième partie de l'épreuve.

### Les composantes de la performance
- **Force** : capacité des muscles à produire un effort (sauts, portés, tenue au sol).
- **Souplesse** : amplitude des articulations et capacité des muscles à s'allonger.
- **Endurance** : capacité à tenir un effort long (une pièce de 20 minutes, une répétition).
- **Vitesse** et **explosivité** : gestes rapides, impulsions.
- **Coordination**, **équilibre**, **précision** et **mémoire** des enchaînements.
- Qualités **artistiques** et **psychologiques** : concentration, confiance, gestion de l'émotion.

### Les sources d'énergie
- **Anaérobie alactique** : efforts très courts et intenses (un grand saut, quelques secondes).
- **Anaérobie lactique** : efforts intenses de quelques dizaines de secondes à environ deux minutes (une variation virtuose).
- **Aérobie** : efforts prolongés et modérés grâce à l'oxygène (un cours entier, une longue pièce).
- Une pièce chorégraphique sollicite souvent les trois filières à la fois.

### Principes d'entraînement
- **Progressivité** : augmenter peu à peu la difficulté et la charge.
- **Régularité** et **répétition** pour fixer les apprentissages.
- **Alternance** effort-récupération ; le corps progresse **pendant** la récupération.
- **Spécificité** : travailler les qualités utiles à son style.
- **Individualisation** : adapter au corps et au niveau de chaque danseur.
- **Étirements** : plutôt **dynamiques** avant l'effort (balancés), plutôt **statiques** et doux après ou dans des séances dédiées.
- **Préparation physique** complémentaire (renforcement, gainage, cardio) pour prévenir les blessures.

### Les blessures fréquentes
- **Entorse** : étirement ou déchirure d'un **ligament**, souvent à la **cheville** (mauvaise réception).
- **Tendinite** : inflammation d'un **tendon** par surutilisation (tendon d'Achille, tendons du pied).
- **Fracture de fatigue** : fissure d'un os due à des chocs répétés (métatarses, tibia), favorisée par le manque de récupération et une alimentation insuffisante.
- **Douleurs du dos** (lombaires) et du **genou** (en-dehors forcé, réceptions mal amorties).
- Facteurs de risque : **fatigue**, **surentraînement**, échauffement absent, sol trop dur, technique mal placée, croissance rapide à l'adolescence.
- Après une blessure : arrêter, appliquer du **froid**, consulter, reprendre **progressivement**.

### L'hygiène de vie
- **Sommeil** : temps de récupération et de mémorisation des apprentissages.
- **Alimentation** suffisante et variée (glucides pour l'énergie, protéines pour les muscles, calcium et vitamine D pour les os) ; le manque d'énergie favorise blessures et troubles du cycle.
- **Hydratation** avant, pendant et après l'effort.
- Vigilance face aux **troubles alimentaires** liés à la pression sur la minceur.

### Les pratiques somatiques et l'anxiété
- Les **pratiques somatiques** (Feldenkrais, Alexander, Pilates, Body-Mind Centering, yoga) travaillent la **conscience du corps**, la respiration et la qualité du geste ; elles aident à prévenir les blessures.
- L'**anxiété** de performance augmente le tonus musculaire, gêne la respiration et la mémoire ; elle peut favoriser les blessures. Respiration, préparation mentale et **visualisation** aident à la réguler.

### À retenir pour le bac
- Composantes : force, souplesse, endurance, vitesse, coordination, équilibre, qualités psychologiques ; trois filières énergétiques.
- Principes : progressivité, régularité, alternance, spécificité, individualisation ; étirements dynamiques avant, statiques après.
- Blessures : entorse (ligament), tendinite (tendon), fracture de fatigue ; prévention par l'échauffement, la récupération, le sommeil, l'alimentation ; pratiques somatiques et gestion de l'anxiété.`,
      cartes: [
        { q: "Cite quatre composantes de la performance en danse.", r: "Force, souplesse, endurance, coordination (aussi vitesse, équilibre, mémoire, concentration)." },
        { q: "Quelle filière fournit l'énergie d'un grand saut isolé ?", r: "La filière anaérobie alactique." },
        { q: "Quelle filière domine dans un long cours de danse ?", r: "La filière aérobie, qui utilise l'oxygène." },
        { q: "Qu'est-ce que le principe de progressivité ?", r: "Augmenter peu à peu la difficulté et la charge de travail." },
        { q: "Pourquoi la récupération fait-elle partie de l'entraînement ?", r: "Parce que le corps progresse et se répare pendant la récupération." },
        { q: "Quels étirements faire avant l'effort ?", r: "Des étirements dynamiques (balancés, mobilisations)." },
        { q: "Qu'est-ce qu'une entorse ?", r: "L'étirement ou la déchirure d'un ligament, souvent à la cheville." },
        { q: "Qu'est-ce qu'une tendinite ?", r: "L'inflammation d'un tendon, souvent due à la surutilisation." },
        { q: "Qu'est-ce qu'une fracture de fatigue ?", r: "Une fissure de l'os causée par des chocs répétés sans récupération suffisante." },
        { q: "Cite trois facteurs de risque de blessure.", r: "Fatigue, surentraînement, absence d'échauffement (aussi sol dur, technique mal placée)." },
        { q: "Que faire juste après une blessure ?", r: "Arrêter, appliquer du froid, consulter, puis reprendre progressivement." },
        { q: "Pourquoi le sommeil est-il important pour le danseur ?", r: "Il permet la récupération et la mémorisation des enchaînements." },
        { q: "Quels nutriments protègent les os ?", r: "Le calcium et la vitamine D." },
        { q: "Quel est l'effet de l'anxiété sur la performance ?", r: "Elle augmente les tensions, gêne la respiration et la mémoire, et peut favoriser les blessures." },
      ],
      quiz: [
        { q: "Quelle structure est touchée dans une entorse ?", choix: ["Un ligament","Un tendon","Un muscle","Un os"], bonne: 0, expl: "Souvent à la cheville.", niv: 1 },
        { q: "Quelle blessure est une inflammation d'un tendon ?", choix: ["La tendinite","L'entorse","La luxation","La crampe"], bonne: 0, expl: "Surutilisation.", niv: 1 },
        { q: "Quel type d'étirement convient avant l'effort ?", choix: ["De longs étirements forcés","Des postures tenues trois minutes","Des grands écarts à froid","Des étirements dynamiques"], bonne: 3, expl: "Préparer sans fatiguer.", niv: 1 },
        { q: "Quel nutriment fournit surtout l'énergie de l'effort ?", choix: ["Les glucides","Les fibres","L'eau","Le sel"], bonne: 0, expl: "Pâtes, riz, pain.", niv: 1 },
        { q: "Quelle filière fournit l'énergie d'une variation virtuose d'une minute ?", choix: ["L'anaérobie alactique","L'anaérobie lactique","L'aérobie pure","La filière du repos"], bonne: 1, expl: "Effort intense d'une minute.", niv: 2 },
        { q: "Qu'est-ce qu'une fracture de fatigue ?", choix: ["Une chute brutale qui casse le bras","Une douleur musculaire passagère le lendemain de l'effort","Une fissure de l'os due à des chocs répétés","Une crampe due à la déshydratation"], bonne: 2, expl: "Métatarses, tibia.", niv: 2 },
        { q: "Pourquoi l'adolescence est-elle une période à risque ?", choix: ["Les muscles ne se contractent pas vraiment avant l'âge de vingt ans","La souplesse est nulle à cet âge","La croissance rapide fragilise os, tendons et cartilages","Le cœur ne supporte pas l'effort"], bonne: 2, expl: "Croissance.", niv: 2 },
        { q: "Que signifie le principe d'individualisation ?", choix: ["Adapter l'entraînement au corps et au niveau de chacun","Faire travailler chaque danseur seul dans une salle fermée","Supprimer les cours collectifs du conservatoire","Copier le programme d'un danseur étoile"], bonne: 0, expl: "Chaque corps est différent.", niv: 2 },
        { q: "Que peut provoquer un apport d'énergie trop faible chez un danseur ?", choix: ["Des blessures et des troubles du cycle","Un gain de force rapide","Une meilleure mémoire des enchaînements","Une souplesse accrue"], bonne: 0, expl: "Vigilance.", niv: 2 },
        { q: "Une danseuse a mal au tibia depuis trois semaines, plus fort après les sauts. Que lui conseiller ?", choix: ["Sauter plus pour renforcer l'os","Masquer la douleur avec des antidouleurs et continuer à sauter chaque jour","Changer de chaussons sans rien dire","Réduire les sauts et consulter pour écarter une fracture de fatigue"], bonne: 3, expl: "Douleur qui dure.", niv: 3 },
        { q: "Pourquoi une pratique somatique peut-elle prévenir les blessures ?", choix: ["Elle remplace le sommeil","Elle supprime le besoin d'échauffement avant le cours et le spectacle","Elle affine la conscience du corps et corrige les tensions inutiles","Elle augmente la charge de travail"], bonne: 2, expl: "Conscience corporelle.", niv: 3 },
        { q: "Pourquoi l'anxiété peut-elle augmenter le risque de blessure ?", choix: ["Elle diminue fortement le rythme cardiaque pendant l'effort","Elle rend les os plus souples","Elle crispe les muscles et nuit à la coordination","Elle supprime la fatigue"], bonne: 2, expl: "Tensions parasites.", niv: 3 },
      ],
    },
    {
      chapitre: "s2tmd-pratique-10",
      fiche: `## Musique : l'interprétation de son programme

L'épreuve de **pratique musicale** (50 minutes, sur 20) comporte **quatre temps**, chacun noté sur **5 points**. Le **premier temps** (15 minutes au plus) est l'**interprétation**, qui comprend le **programme** et sa **présentation**. Le jury associe un professeur du conservatoire partenaire et un professeur de musique de l'Éducation nationale.

### Le programme selon le parcours
- **Instrumentistes** :
  - une **œuvre du répertoire antérieure à 1950**, tirée des programmes du **cycle 3** de formation à la pratique amateur des conservatoires (un niveau plus élevé est permis) ;
  - une **œuvre du langage contemporain**, de même difficulté technique ;
  - on peut jouer **avec la partition** ; on remet au jury **deux exemplaires** des partitions au début.
- **Chanteurs** : deux œuvres **par cœur**, d'époques et de langues différentes : une **mélodie, un lied ou une chanson**, et un **air d'opéra, d'opérette, d'opéra-comique ou de musique sacrée** ; deux exemplaires des partitions pour le jury.
- **Jazz ou musiques actuelles** : **deux œuvres ou standards** de son choix, dont l'un peut être une **composition personnelle** ; seul avec un **support enregistré** ou avec un groupe de **quatre accompagnateurs au plus**.
- **Musiques traditionnelles** : une **danse ou suite de danses** (ou marche, ou complainte) de l'**aire culturelle** choisie, et une autre danse d'une **esthétique différente** ; il est recommandé de fournir un relevé ou un schéma.
- **Composition-création** : présenter puis diffuser une **illustration sonore de 5 minutes** réalisée d'après un argument ou une image, et commenter un **dossier d'œuvres personnelles** (six pages au plus, avec enregistrements) envoyé au jury **cinq jours avant**.
- Un accompagnement peut être assuré par **un ou deux lycéens**.

### Présenter son programme
- Situer chaque œuvre : **compositeur**, **époque**, **genre**, **style**, contexte de création.
- Dire **pourquoi** on l'a choisie et **ce qu'elle demande** techniquement et musicalement.
- Annoncer ses **choix d'interprétation** (tempo, phrasé, couleur, caractère) et ses **références** (enregistrements écoutés et comparés).
- Rester **bref** et vivant : la présentation est un moment de **médiation**, pas un exposé récité.

### Les critères d'une bonne interprétation
- **Justesse** et **précision rythmique** ; **maîtrise technique** de l'instrument ou de la voix.
- **Phrasé** : façon de conduire et de respirer les phrases.
- **Nuances** et **articulations** (legato, staccato, accents) respectées et pensées.
- **Sonorité** et **timbre** soignés ; **style** adapté à l'époque (pas de vibrato excessif dans le baroque, swing dans le jazz).
- **Engagement**, **présence** scénique et **projet expressif** clair.
- Mémoire (obligatoire pour les chanteurs) et gestion de l'**imprévu** (continuer après une erreur).

### Repères de langage contemporain
- Musique du XXe et du XXIe siècle : **atonalité**, **modes** et **gammes** nouvelles, rythmes irréguliers, **modes de jeu** nouveaux (sons multiples, souffle, percussion sur l'instrument), **musique répétitive**, notation graphique.
- Préparer cette œuvre demande souvent un travail spécifique de **lecture** et de **pulsation intérieure**.

### Le travail personnel
- Travailler **lentement** puis accélérer ; isoler les passages difficiles ; utiliser le **métronome**.
- S'**enregistrer** pour s'écouter avec recul.
- Faire des **filages** en conditions réelles, devant un public.

### À retenir pour le bac
- Quatre temps notés chacun sur 5 ; premier temps de 15 minutes au plus : programme et présentation.
- Instrumentistes : une œuvre antérieure à 1950 de niveau cycle 3 et une œuvre contemporaine ; chanteurs : deux œuvres par cœur ; jazz, traditionnelles et composition ont leur propre programme.
- Présenter, situer, justifier ses choix ; justesse, rythme, phrasé, nuances, style, engagement.`,
      cartes: [
        { q: "Combien de temps compte l'épreuve de pratique musicale ?", r: "Quatre temps, chacun noté sur 5 points." },
        { q: "Combien dure au plus le premier temps ?", r: "15 minutes : programme et présentation." },
        { q: "Que joue un instrumentiste au premier temps ?", r: "Une œuvre antérieure à 1950 de niveau cycle 3 et une œuvre du langage contemporain." },
        { q: "L'instrumentiste peut-il jouer avec la partition ?", r: "Oui, et il remet deux exemplaires des partitions au jury." },
        { q: "Que présente un chanteur ?", r: "Deux œuvres par cœur, d'époques et de langues différentes : une mélodie, lied ou chanson, et un air." },
        { q: "Que présente un candidat de jazz ou de musiques actuelles ?", r: "Deux œuvres ou standards, dont l'un peut être une composition personnelle." },
        { q: "Avec combien d'accompagnateurs au plus joue un candidat de jazz en groupe ?", r: "Quatre accompagnateurs au plus." },
        { q: "Que présente un candidat en musiques traditionnelles ?", r: "Une danse ou suite de danses de son aire culturelle et une autre d'une esthétique différente." },
        { q: "Que présente un candidat en composition-création ?", r: "Une illustration sonore de 5 minutes et un dossier d'œuvres personnelles." },
        { q: "Quand le dossier de composition est-il envoyé au jury ?", r: "Cinq jours avant le début des épreuves." },
        { q: "Que doit contenir la présentation du programme ?", r: "Le contexte des œuvres, les raisons du choix et les choix d'interprétation." },
        { q: "Qu'est-ce que le phrasé ?", r: "La façon de conduire et de respirer les phrases musicales." },
        { q: "Cite deux modes de jeu contemporains.", r: "Sons multiples, bruits de souffle, percussion sur le corps de l'instrument." },
        { q: "Pourquoi s'enregistrer en travaillant ?", r: "Pour s'écouter avec recul et repérer ce qu'il faut corriger." },
      ],
      quiz: [
        { q: "Sur combien de points est noté chaque temps de l'épreuve de musique ?", choix: ["2 points","5 points","3 points","4 points"], bonne: 1, expl: "Quatre temps de 5 points.", niv: 1 },
        { q: "Avant quelle date l'œuvre du répertoire de l'instrumentiste doit-elle être écrite ?", choix: ["1750","1950","1820","1900"], bonne: 1, expl: "Antérieure à 1950.", niv: 1 },
        { q: "Comment le chanteur interprète-t-il son programme ?", choix: ["Avec la partition sur un pupitre","En lisant les paroles sur une tablette","Par cœur","En chantant sur un enregistrement de l'œuvre"], bonne: 2, expl: "Mémoire exigée.", niv: 1 },
        { q: "Combien d'exemplaires des partitions l'instrumentiste remet-il au jury ?", choix: ["Un","Trois","Deux","Quatre"], bonne: 2, expl: "Au début de l'épreuve.", niv: 1 },
        { q: "Quel programme convient à un candidat de jazz ?", choix: ["Une sonate baroque et une pièce atonale","Deux standards, dont une composition personnelle","Un lied et un air d'opéra","Une suite de danses traditionnelles de son aire culturelle"], bonne: 1, expl: "Parcours jazz.", niv: 2 },
        { q: "Combien de temps dure l'illustration sonore en composition-création ?", choix: ["5 minutes","1 minute","2 minutes","3 minutes"], bonne: 0, expl: "D'après un argument ou une image.", niv: 2 },
        { q: "Quel élément est attendu dans la présentation du programme ?", choix: ["Le prix de son instrument et son entretien","La biographie complète et détaillée de chaque compositeur joué","Les notes obtenues au conservatoire","Les choix d'interprétation et les références écoutées"], bonne: 3, expl: "Médiation vivante.", niv: 2 },
        { q: "Quel choix est le plus adapté à une pièce baroque ?", choix: ["Un vibrato large et continu","Un vibrato léger et des articulations claires","Un swing ternaire marqué","Des effets de distorsion électrique sur chaque note tenue"], bonne: 1, expl: "Style d'époque.", niv: 2 },
        { q: "Qui peut accompagner un instrumentiste qui en a besoin ?", choix: ["Le professeur membre du jury","Un orchestre professionnel","Un enregistrement pour tout instrument","Un ou deux autres lycéens instrumentistes"], bonne: 3, expl: "Lycéens S2TMD ou non.", niv: 2 },
        { q: "Pendant son morceau, un candidat fait une fausse note. Que faire ?", choix: ["Recommencer le morceau depuis le début pour le rejouer parfaitement","S'excuser auprès du jury et arrêter","Passer directement au second morceau","Continuer sans s'arrêter en gardant le caractère de la pièce"], bonne: 3, expl: "Gestion de l'imprévu.", niv: 3 },
        { q: "Pourquoi comparer plusieurs enregistrements d'une œuvre avant de la jouer ?", choix: ["Pour copier note à note la version la plus célèbre et la plus vendue","Parce que le jury exige de citer trois disques","Pour construire une interprétation personnelle et argumentée","Pour connaître la durée exacte à respecter"], bonne: 2, expl: "Choix éclairés.", niv: 3 },
        { q: "Pourquoi l'œuvre contemporaine demande-t-elle un travail spécifique ?", choix: ["Elle utilise souvent des rythmes irréguliers et des modes de jeu nouveaux","Elle est plus courte que les œuvres anciennes du programme, donc plus simple","Elle se joue sans partition","Elle ne demande pas de technique"], bonne: 0, expl: "Langage contemporain.", niv: 3 },
      ],
    },
    {
      chapitre: "s2tmd-pratique-11",
      fiche: `## Musique : création/invention et pratique collective

Après l'interprétation, l'épreuve de musique enchaîne trois temps de **5 points** chacun : la **création/invention** (10 minutes au plus), la **pratique collective** (10 minutes au plus) et l'**entretien** avec le jury (15 minutes au plus).

### Deuxième temps : le projet de création/invention
- Le candidat présente un projet de **création ou d'invention musicale mené pendant l'année**.
- Il présente :
  - les **choix artistiques et techniques** qui ont guidé le travail ;
  - les **influences** qui l'ont nourri ;
  - les **liens** avec **au moins une** des trois perspectives de terminale (mondialisation et identités culturelles ; hybridation des langages ; relativité des goûts) ;
  - les **formes de médiation** envisagées **auprès d'un public donné**.
- Sa présentation s'appuie sur des **exemples musicaux**, certains **chantés ou joués** en direct, d'autres tirés d'un **enregistrement** du travail.
- Formes possibles : composition, **arrangement**, **improvisation** structurée, **pastiche** d'un style, pièce électroacoustique, chanson, musique pour une image.

### Les procédés de création
- **Motif** et **développement** (répéter, transposer, varier, renverser, augmenter ou diminuer les valeurs).
- **Arrangement** : adapter une œuvre existante à une autre formation ou un autre style (un chant traditionnel pour quatuor à cordes).
- **Orchestration** : choisir les instruments et répartir les rôles (mélodie, basse, accompagnement).
- **Harmonisation** : accompagner une mélodie par des accords.
- **Boucles** et **échantillonnage** (sample) avec un logiciel ; **mixage** des pistes.
- **Contraintes** créatives : une gamme imposée, un rythme, un texte, une image.

### Troisième temps : la pratique collective
- Le candidat diffuse quelques **extraits vidéo** d'une **pratique collective** menée pendant l'année (ensemble, chœur, orchestre, groupe).
- Il présente :
  - les **caractéristiques** de l'œuvre et ses **enjeux artistiques** ;
  - les **difficultés techniques** surmontées ;
  - son **rôle** et sa **place** dans l'interprétation ;
  - les **apports** du travail collectif à sa **pratique individuelle**.
- Pratique **dirigée** (avec un chef ou un professeur) ou **non dirigée** (le groupe s'organise seul et développe son autonomie).
- Compétences du collectif : **écoute** des autres, **mise en place** rythmique, **équilibre** des plans sonores, justesse d'ensemble, **départs** et **fins** communs, respiration commune, suivre la **battue** du chef.

### Quatrième temps : l'entretien
- Le jury approfondit les trois moments précédents : le candidat précise ses **démarches**, fait valoir le **regard** qu'il porte sur sa pratique et les **orientations** qu'il souhaite donner à son travail.
- Le jury interroge aussi sur la **connaissance de son corps** en lien avec sa pratique (posture, souffle, gestes, audition).

### La médiation en musique
- Penser un **public précis** : son âge, ce qu'il connaît, le lieu.
- Choisir une forme adaptée : courte **présentation** avant de jouer, **atelier** participatif (faire chanter un motif, frapper un rythme), **concert commenté**, document numérique.
- Le programme voit la médiation comme une **démarche de création à part entière**, qui permet au public de s'approprier la musique par une approche **sensible**.

### À retenir pour le bac
- Création/invention : choix, influences, lien avec une perspective, médiation envers un public donné, exemples joués et enregistrés.
- Pratique collective : extraits vidéo, enjeux, difficultés, rôle tenu, apports à sa pratique ; dirigée ou non dirigée.
- Entretien : démarches, regard critique, projets, connaissance du corps.`,
      cartes: [
        { q: "Combien dure au plus le temps de création/invention ?", r: "10 minutes." },
        { q: "Que doit présenter le candidat sur son projet de création ?", r: "Ses choix artistiques et techniques, ses influences, ses liens avec une perspective et la médiation envisagée." },
        { q: "Avec combien de perspectives le projet doit-il être relié au minimum ?", r: "Avec au moins une des trois perspectives de terminale." },
        { q: "Sur quoi s'appuie la présentation du projet de création ?", r: "Sur des exemples chantés ou joués et sur un enregistrement du travail." },
        { q: "Qu'est-ce qu'un arrangement ?", r: "L'adaptation d'une œuvre existante à une autre formation ou un autre style." },
        { q: "Qu'est-ce que l'orchestration ?", r: "Le choix des instruments et la répartition des rôles musicaux entre eux." },
        { q: "Qu'est-ce qu'un pastiche ?", r: "Une création qui imite volontairement un style ou un compositeur." },
        { q: "Que diffuse le candidat au temps de pratique collective ?", r: "Quelques extraits vidéo d'une pratique collective de l'année." },
        { q: "Que doit expliquer le candidat sur sa pratique collective ?", r: "Les enjeux, les difficultés surmontées, son rôle et les apports à sa pratique individuelle." },
        { q: "Différence entre pratique dirigée et non dirigée ?", r: "Dirigée : avec un chef ou un professeur ; non dirigée : le groupe s'organise en autonomie." },
        { q: "Cite trois compétences d'une pratique collective.", r: "Écoute des autres, mise en place rythmique, équilibre des plans sonores." },
        { q: "Combien dure au plus l'entretien de musique ?", r: "15 minutes." },
        { q: "Sur quoi le jury de musique interroge-t-il aussi à l'entretien ?", r: "Sur la connaissance de son corps en lien avec sa pratique." },
        { q: "Comment le programme voit-il la médiation ?", r: "Comme une démarche de création à part entière, qui passe par une approche sensible." },
      ],
      quiz: [
        { q: "Combien dure au plus le temps de pratique collective ?", choix: ["2 minutes","5 minutes","7 minutes","10 minutes"], bonne: 3, expl: "Comme la création.", niv: 1 },
        { q: "Quel support le candidat utilise-t-il pour la pratique collective ?", choix: ["Une partition seule","Un dossier écrit de vingt pages","Un enregistrement radio","Des extraits vidéo"], bonne: 3, expl: "Diffusion vidéo.", niv: 1 },
        { q: "Comment appelle-t-on l'adaptation d'une œuvre à un autre effectif ?", choix: ["Un déchiffrage","Un arrangement","Un solfège","Un accordage"], bonne: 1, expl: "Adapter.", niv: 1 },
        { q: "Combien dure au plus l'entretien de l'épreuve de musique ?", choix: ["3 minutes","5 minutes","15 minutes","10 minutes"], bonne: 2, expl: "Le dernier temps.", niv: 1 },
        { q: "Quel élément doit figurer dans la présentation du projet de création ?", choix: ["Les formes de médiation envisagées auprès d'un public donné","Le budget de production d'un disque","Le contrat signé avec une maison de disques pour la sortie d'un album","La liste des concerts vus dans l'année"], bonne: 0, expl: "Médiation.", niv: 2 },
        { q: "Un projet mêle un chant malien et une batterie de rock. Quelle perspective concerne-t-il ?", choix: ["Le rôle de l'artiste dans la cité antique","Les enjeux de la mise en scène","L'hybridation des langages de la musique","Art chorégraphique et monde contemporain"], bonne: 2, expl: "Rencontre de langages.", niv: 2 },
        { q: "Qu'est-ce qu'une pratique collective non dirigée ?", choix: ["Un orchestre qui joue sans partition","Un chœur qui chante à l'unisson","Un groupe qui s'organise seul, sans chef","Un ensemble qui joue en studio sans public"], bonne: 2, expl: "Autonomie.", niv: 2 },
        { q: "Que demande le jury sur le rôle du candidat dans l'ensemble filmé ?", choix: ["Sa place précise dans l'interprétation diffusée","Les noms de chaque musicien de l'ensemble filmé","Le matériel utilisé pour filmer","Le nombre de spectateurs présents"], bonne: 0, expl: "Rôle personnel.", niv: 2 },
        { q: "Quel procédé consiste à reprendre un motif plus aigu ou plus grave ?", choix: ["La transposition","L'accumulation","La coda","Le mixage"], bonne: 0, expl: "Développer un motif.", niv: 2 },
        { q: "Pourquoi le jury demande-t-il ce que le collectif a apporté à sa pratique individuelle ?", choix: ["Pour savoir s'il préfère jouer seul ou en groupe dans son futur métier","Pour vérifier la durée de la vidéo","Pour choisir le morceau de l'entretien","Pour évaluer sa capacité à tirer profit de l'écoute et du jeu d'ensemble"], bonne: 3, expl: "Regard réflexif.", niv: 3 },
        { q: "Pour une maison de retraite, quelle médiation est la plus adaptée ?", choix: ["Projeter une analyse harmonique détaillée","Présenter brièvement le morceau et faire chanter un refrain connu","Jouer sans dire un mot pendant une heure, comme dans une grande salle","Distribuer un questionnaire de solfège"], bonne: 1, expl: "Public donné.", niv: 3 },
        { q: "Pourquoi jouer en direct certains exemples pendant la présentation du projet ?", choix: ["Pour remplacer l'enregistrement exigé","Pour rendre la démarche concrète et montrer sa maîtrise","Pour allonger le temps de parole","Parce que l'enregistrement du projet est interdit pendant l'épreuve"], bonne: 1, expl: "Exemples vivants.", niv: 3 },
      ],
    },
    {
      chapitre: "s2tmd-pratique-12",
      fiche: `## Musique : le corps du musicien, la voix et l'audition

Le programme de pratique musicale comprend un volet **connaissance du corps, conscience corporelle, conscience vocale, geste et posture**, associé à la **pratique vocale collective**. Les élèves apprennent à identifier les **muscles sollicités** et les **types de contraction à éviter** dans leur geste. À l'entretien, le jury interroge sur la **connaissance de son corps** en lien avec sa pratique. Le volet **acoustique** de la spécialité de culture aborde aussi la **santé auditive**.

### Posture et geste instrumental
- Une **posture saine** : appuis stables (pieds au sol, assis sur l'avant de la chaise), dos aligné, épaules basses, tête dans le prolongement de la colonne.
- Le geste efficace utilise la **chaîne** du corps (dos, épaule, bras, poignet, doigts) plutôt que la seule force des doigts.
- Les **contractions** prolongées sans relâchement (isométriques) fatiguent : il faut alterner **tension** et **détente** au cours du jeu.
- Risques : **troubles musculo-squelettiques** (TMS) comme les **tendinites** du poignet ou du coude, douleurs de dos et de nuque, **dystonie de fonction** (perte du contrôle d'un geste très répété, par exemple un doigt qui se recroqueville).
- Prévention : échauffement, **pauses** régulières (toutes les 30 à 45 minutes), progressivité, réglage du siège et du pupitre, écoute de la douleur.

### La voix
- La voix naît du **souffle** (poumons, diaphragme) qui fait vibrer les **cordes vocales** (ou plis vocaux) situées dans le **larynx**.
- Le son est amplifié et coloré par les **résonateurs** : pharynx, bouche, fosses nasales.
- Les **articulateurs** (lèvres, langue, mâchoire, voile du palais) forment voyelles et consonnes.
- **Registres** : voix de poitrine, voix de tête ; **tessiture** : étendue des notes que l'on chante confortablement (soprano, alto, ténor, basse).
- Hygiène vocale : s'hydrater, **échauffer** sa voix, ne pas crier ni chuchoter longtemps, éviter de chanter malade ou enroué, dormir.
- La **mue** à l'adolescence modifie la voix, surtout chez les garçons.

### L'audition
- Le son est une **vibration** qui se propage dans l'air ; sa hauteur dépend de la **fréquence** (en hertz) et son intensité se mesure en **décibels** (dB).
- L'oreille humaine perçoit à peu près de **20 Hz à 20 000 Hz** ; cette limite haute baisse avec l'âge.
- Repères d'intensité : conversation vers **60 dB** ; risque pour l'audition à partir d'environ **85 dB** sur une longue durée ; seuil de **douleur** vers **120 dB**. Une hausse de **3 dB** double l'énergie sonore.
- Dangers : **fatigue auditive**, **acouphènes** (sifflements), **hyperacousie**, perte auditive **définitive** (les cellules ciliées de l'oreille interne ne se régénèrent pas).
- Protection : **bouchons** adaptés (filtres qui baissent le volume sans déformer le son), s'éloigner des enceintes, **pauses** dans le calme, baisser le volume au casque.

### Le corps sur scène
- **Trac** : respiration lente, routine, préparation dans les conditions réelles.
- **Présence** : entrée, salut, regard vers le public, posture d'écoute pendant que l'autre joue.
- Le programme demande que l'élève construise une **représentation corporelle** maîtrisée dans l'**exercice public** de son art.

### À retenir pour le bac
- Posture stable et détendue ; alterner tension et détente ; TMS, tendinites, dystonie ; pauses et échauffement.
- Voix : souffle, cordes vocales dans le larynx, résonateurs, articulateurs ; tessiture ; hygiène vocale.
- Audition : hertz et décibels ; danger dès environ 85 dB prolongés, douleur vers 120 dB ; acouphènes ; bouchons à filtres.`,
      cartes: [
        { q: "Où se trouvent les cordes vocales ?", r: "Dans le larynx." },
        { q: "Qu'est-ce que les résonateurs de la voix ?", r: "Le pharynx, la bouche et les fosses nasales, qui amplifient et colorent le son." },
        { q: "Qu'est-ce que la tessiture ?", r: "L'étendue des notes qu'une voix chante confortablement." },
        { q: "Cite trois règles d'hygiène vocale.", r: "S'hydrater, échauffer sa voix, éviter de crier ou de chanter enroué." },
        { q: "Qu'est-ce qu'un trouble musculo-squelettique ?", r: "Une douleur ou une lésion des muscles, tendons ou nerfs due à des gestes répétés." },
        { q: "Qu'est-ce que la dystonie de fonction ?", r: "La perte du contrôle d'un geste très répété, comme un doigt qui se recroqueville." },
        { q: "Pourquoi faire des pauses en travaillant son instrument ?", r: "Pour relâcher les muscles et éviter les troubles musculo-squelettiques." },
        { q: "En quelle unité mesure-t-on l'intensité d'un son ?", r: "En décibels (dB)." },
        { q: "En quelle unité mesure-t-on la fréquence d'un son ?", r: "En hertz (Hz) : elle détermine sa hauteur." },
        { q: "Quelles fréquences l'oreille humaine perçoit-elle ?", r: "À peu près de 20 Hz à 20 000 Hz." },
        { q: "À partir de quelle intensité l'audition est-elle menacée sur une longue durée ?", r: "À partir d'environ 85 dB." },
        { q: "Vers quel niveau se situe le seuil de douleur ?", r: "Vers 120 dB." },
        { q: "Qu'est-ce qu'un acouphène ?", r: "Un sifflement ou bourdonnement perçu sans source extérieure." },
        { q: "Pourquoi une perte auditive peut-elle être définitive ?", r: "Parce que les cellules ciliées de l'oreille interne ne se régénèrent pas." },
      ],
      quiz: [
        { q: "Où se trouvent les cordes vocales ?", choix: ["Dans les poumons","Dans les fosses nasales","Dans le larynx","Dans l'oreille interne"], bonne: 2, expl: "Plis vocaux.", niv: 1 },
        { q: "Quelle unité mesure l'intensité d'un son ?", choix: ["Le hertz","Le newton","Le watt-heure","Le décibel"], bonne: 3, expl: "dB.", niv: 1 },
        { q: "Vers quelle intensité se situe le seuil de douleur ?", choix: ["30 dB","60 dB","85 dB","120 dB"], bonne: 3, expl: "Au-delà, danger immédiat.", niv: 1 },
        { q: "Qu'est-ce qu'un acouphène ?", choix: ["Un instrument à vent africain","Une note tenue très longtemps","Un sifflement perçu sans source extérieure","Une salle à l'acoustique sèche"], bonne: 2, expl: "Trouble auditif.", niv: 1 },
        { q: "À partir de quelle intensité une exposition longue menace-t-elle l'audition ?", choix: ["Environ 20 dB","Environ 85 dB","Environ 40 dB","Environ 60 dB"], bonne: 1, expl: "Bouchons conseillés.", niv: 2 },
        { q: "Qu'est-ce qui détermine la hauteur d'un son ?", choix: ["Sa fréquence","Son intensité","Sa durée","Son timbre"], bonne: 0, expl: "En hertz.", niv: 2 },
        { q: "Quels bouchons conviennent le mieux à un musicien ?", choix: ["Des bouchons en mousse qui étouffent les aigus et coupent presque tout","Des bouchons à filtres qui baissent le volume sans déformer","Du coton placé dans les oreilles","Un casque audio qui joue de la musique"], bonne: 1, expl: "Protection fidèle.", niv: 2 },
        { q: "Quel conseil protège le mieux un pianiste des tendinites ?", choix: ["Jouer plusieurs heures sans s'arrêter pour s'endurcir","Serrer fort les doigts pour gagner en précision","Faire des pauses et alterner tension et détente","Lever les épaules pour plus de puissance"], bonne: 2, expl: "Prévention des TMS.", niv: 2 },
        { q: "Quel rôle jouent les résonateurs de la voix ?", choix: ["Produire la vibration de départ","Amplifier et colorer le son","Fournir le souffle","Protéger l'oreille"], bonne: 1, expl: "Pharynx, bouche, nez.", niv: 2 },
        { q: "Pourquoi un musicien de 17 ans doit-il protéger ses oreilles dès maintenant ?", choix: ["Les cellules ciliées détruites ne se régénèrent pas","L'oreille se répare seule chaque nuit","Les acouphènes disparaissent après 25 ans","La protection gêne surtout le jeu des musiciens plus âgés qu'eux"], bonne: 0, expl: "Perte définitive.", niv: 3 },
        { q: "Un guitariste sent son doigt se replier malgré lui sur un passage répété. Que peut-on soupçonner ?", choix: ["Une dystonie de fonction, à faire examiner","Un manque de talent musical","Une guitare mal accordée","Un simple effet du trac"], bonne: 0, expl: "Perte de contrôle du geste.", niv: 3 },
        { q: "Pourquoi le jury interroge-t-il un instrumentiste sur son corps ?", choix: ["Pour vérifier qu'il pratique régulièrement un sport en dehors du lycée","Pour remplacer la partie d'interprétation","Le geste musical dépend de la posture et de la conscience corporelle","Parce que l'épreuve de danse le demande"], bonne: 2, expl: "Corps et geste musical.", niv: 3 },
      ],
    },
    {
      chapitre: "s2tmd-pratique-13",
      fiche: `## Théâtre : les techniques du jeu de l'acteur

La pratique théâtrale en terminale approfondit l'**art du jeu** et l'**interprétation**. Les compétences du programme sont précises : maîtriser la **respiration** et le **souffle**, placer et **projeter** sa voix, maîtriser la **diction** (phrasé, métrique), s'**échauffer**, percevoir l'**espace scénique** et la relation entre les corps (**proxémie**). Le jury les observe dans les deux parties de l'épreuve.

### La voix et la diction
- **Projeter** sa voix : se faire entendre au fond de la salle sans crier, grâce au **souffle soutenu** et aux résonateurs.
- **Articuler** : prononcer nettement les consonnes, surtout en fin de mot.
- **Varier** la voix : **hauteur**, **intensité**, **débit**, **timbre**, **silences** et **pauses**.
- Le **phrasé** conduit la phrase de l'**attaque** à la **finale** sans laisser tomber la fin.

### Dire le vers
- L'**alexandrin** compte **douze syllabes**, souvent coupées en deux **hémistiches** de six syllabes par la **césure**.
- Le **e muet** (ou e caduc) se prononce devant une consonne à l'intérieur du vers (« une belle » : u-ne-bel-le) et s'élide devant une voyelle ou en fin de vers.
- La **diérèse** sépare deux voyelles d'habitude prononcées ensemble (« pass-i-on ») ; la **synérèse** les réunit.
- L'**enjambement** prolonge la phrase sur le vers suivant ; le **rejet** place un mot important au début du vers suivant.
- Il faut faire entendre la **métrique** sans **ânonner** : le sens et la musique du vers vont ensemble.

### Le corps et l'espace
- **Disponibilité corporelle** : un corps à la fois **détendu** et **tonique**, prêt à réagir.
- **Langage non verbal** : postures, gestes, regards, **rythme** des déplacements.
- **Proxémie** : distance entre les personnages, qui dit leur relation (intimité, conflit, peur).
- **Adresse** : à qui parle-t-on ? au **partenaire**, à soi-même (monologue), au **public** (adresse directe, aparté).
- **Occupation de l'espace** : avant-scène, fond, diagonales, **cour** (à droite vu de la salle) et **jardin** (à gauche vu de la salle).
- Le **neutre** : position de départ sans intention parasite, d'où l'on peut tout construire.

### Le rapport au partenaire
- **Écouter** vraiment, **recevoir** la réplique avant de répondre, réagir à ce que propose l'autre.
- Jouer une **situation** et des **enjeux**, pas des mots : ce que veut le personnage, ce qui l'en empêche.
- Accepter la **prise de risque**, notamment en **improvisation**.

### Les grandes théories du jeu
- **Diderot**, *Paradoxe sur le comédien* (écrit vers 1770-1778) : le grand acteur garde la **tête froide** ; il ne ressent pas l'émotion, il la **montre** avec maîtrise.
- **Stanislavski** (Russie, début du XXe siècle) : l'acteur cherche la **vérité** du personnage, s'appuie sur la **mémoire affective** et les **circonstances** ; il **incarne** le rôle.
- **Meyerhold** : la **biomécanique**, un jeu physique et précis.
- **Brecht** : le théâtre **épique** et la **distanciation** ; l'acteur **montre** le personnage pour que le spectateur **réfléchisse** au lieu de s'identifier.
- **Grotowski** : le **théâtre pauvre**, centré sur l'acteur et son engagement physique.
- **Disciplines associées** (masque, clown, marionnette) : elles obligent à une **prise de distance** et à un jeu corporel lisible.

### À retenir pour le bac
- Souffle, projection, articulation, variations de la voix, phrasé ; alexandrin, hémistiche, césure, e muet, diérèse.
- Corps disponible, non-verbal, proxémie, adresse, cour et jardin, neutre ; écoute du partenaire, enjeux.
- Diderot (maîtrise), Stanislavski (incarnation), Meyerhold (biomécanique), Brecht (distanciation), Grotowski (théâtre pauvre).`,
      cartes: [
        { q: "Combien de syllabes compte un alexandrin ?", r: "Douze." },
        { q: "Qu'est-ce que la césure ?", r: "La coupe au milieu de l'alexandrin, qui sépare deux hémistiches de six syllabes." },
        { q: "Quand prononce-t-on le e muet dans un vers ?", r: "Devant une consonne à l'intérieur du vers ; il s'élide devant une voyelle et en fin de vers." },
        { q: "Qu'est-ce qu'une diérèse ?", r: "Prononcer en deux syllabes deux voyelles d'habitude dites ensemble, comme « pass-i-on »." },
        { q: "Que veut dire projeter sa voix ?", r: "Se faire entendre au fond de la salle sans crier, grâce au souffle soutenu." },
        { q: "Qu'est-ce que la proxémie ?", r: "La distance entre les personnages et ce qu'elle dit de leur relation." },
        { q: "Qu'est-ce qu'une adresse au public ?", r: "Un moment où l'acteur parle directement aux spectateurs." },
        { q: "Où se trouve le côté cour ?", r: "À droite vu de la salle (à gauche pour l'acteur face au public)." },
        { q: "Qu'est-ce que le neutre ?", r: "Une présence de départ sans intention parasite, d'où l'on construit le jeu." },
        { q: "Que défend Diderot dans le Paradoxe sur le comédien ?", r: "Le grand acteur garde la tête froide et montre l'émotion sans la ressentir." },
        { q: "Que cherche l'acteur selon Stanislavski ?", r: "La vérité du personnage, en l'incarnant grâce à la mémoire affective et aux circonstances." },
        { q: "Qu'est-ce que la distanciation chez Brecht ?", r: "Montrer le personnage pour que le spectateur réfléchisse au lieu de s'identifier." },
        { q: "Qu'est-ce que la biomécanique de Meyerhold ?", r: "Un entraînement et un jeu très physiques, fondés sur la précision du geste." },
        { q: "Pourquoi jouer des enjeux plutôt que des mots ?", r: "Parce que le jeu vient de ce que veut le personnage et de ce qui lui résiste." },
      ],
      quiz: [
        { q: "Combien de syllabes compte un alexandrin ?", choix: ["8","10","12","11"], bonne: 2, expl: "Deux hémistiches de six.", niv: 1 },
        { q: "Comment s'appelle la coupe au milieu de l'alexandrin ?", choix: ["La césure","La rime","L'enjambement","La strophe"], bonne: 0, expl: "Deux hémistiches.", niv: 1 },
        { q: "Où se trouve le côté jardin vu de la salle ?", choix: ["À gauche","À droite","Au fond de la scène","Dans la fosse d'orchestre"], bonne: 0, expl: "Cour à droite.", niv: 1 },
        { q: "Quel auteur a écrit le Paradoxe sur le comédien ?", choix: ["Molière","Brecht","Diderot","Stanislavski"], bonne: 2, expl: "XVIIIe siècle.", niv: 1 },
        { q: "Comment dire « Je ne veux point d'une passion » en respectant la diérèse ?", choix: ["En avalant le mot « passion » en une seule syllabe","En marquant une pause après chaque mot","En criant le dernier mot du vers","En prononçant « pass-i-on » en trois syllabes"], bonne: 3, expl: "Diérèse.", niv: 2 },
        { q: "Que signifie la proxémie entre deux personnages ?", choix: ["Le texte qu'ils prononcent ensemble","La lumière qui les éclaire","La vitesse de leur débit","Leur distance dit leur relation"], bonne: 3, expl: "Langage de l'espace.", niv: 2 },
        { q: "Quel metteur en scène a théorisé la distanciation ?", choix: ["Constantin Stanislavski","Jean Racine","Bertolt Brecht","Jerzy Grotowski"], bonne: 2, expl: "Théâtre épique.", niv: 2 },
        { q: "Quel conseil aide à projeter la voix sans s'abîmer ?", choix: ["S'appuyer sur un souffle soutenu par les abdominaux","Crier en serrant la gorge","Parler très vite pour gagner en volume","Hausser les épaules en parlant"], bonne: 0, expl: "Soutien du souffle.", niv: 2 },
        { q: "Qu'est-ce qu'écouter son partenaire sur scène ?", choix: ["Recevoir sa réplique et y réagir vraiment","Attendre la fin de sa réplique en pensant à la sienne","Regarder le public pendant qu'il parle","Répéter ses mots à voix basse"], bonne: 0, expl: "Jeu vivant.", niv: 2 },
        { q: "Un acteur fait un aparté. Que fait-il ?", choix: ["Il quitte la scène pendant une longue réplique de son partenaire, sans bruit","Il dit une réplique que les autres personnages sont censés ne pas entendre","Il chante une chanson au milieu de la scène","Il improvise un texte nouveau"], bonne: 1, expl: "Adresse au public.", niv: 3 },
        { q: "Pourquoi le masque oblige-t-il l'acteur à jouer avec tout son corps ?", choix: ["Le masque rend la voix inaudible","Le visage caché ne peut plus porter l'expression","Il empêche de se déplacer librement sur le plateau sans tomber","Il remplace le texte"], bonne: 1, expl: "Distance et corps lisible.", niv: 3 },
        { q: "Un acteur pleure vraiment chaque soir et s'épuise. Que lui dirait Diderot ?", choix: ["Maîtriser et montrer l'émotion plutôt que la subir","Pleurer encore plus fort pour être vrai","Arrêter de jouer les scènes tristes","Copier un autre acteur"], bonne: 0, expl: "Tête froide.", niv: 3 },
      ],
    },
    {
      chapitre: "s2tmd-pratique-14",
      fiche: `## Théâtre : création à partir d'un texte et interprétation d'une scène

L'épreuve de **pratique théâtrale** dure 50 minutes de passage, précédées de **30 minutes de préparation**. Elle comprend **deux parties**, chacune sur **10 points**, devant un jury qui associe un professeur du conservatoire partenaire et un professeur de théâtre de l'Éducation nationale.

### Première partie : la création théâtrale (10 points)
- Un **texte** est remis au candidat. Après **30 minutes de préparation**, il en présente une **proposition personnelle** (15 minutes au plus), suivie de **10 minutes d'entretien**.
- L'entretien lui permet d'**expliciter ses choix** et d'**analyser** les difficultés ou les réussites de leur mise en œuvre.
- Utiliser les 30 minutes :
  - **lire** le texte deux fois : une fois pour l'impression, une fois crayon en main ;
  - repérer la **situation** (qui ? où ? quand ? que se passe-t-il ?), les **enjeux** (ce que veut chaque personnage, l'obstacle), le **genre** et le **registre** (comique, tragique, absurde, poétique) ;
  - choisir un **angle** : une idée forte qui guide la proposition (« un interrogatoire déguisé en conversation polie ») ;
  - décider de l'**adresse**, de l'**espace**, de quelques **objets** ou éléments disponibles, des **ruptures** de rythme ;
  - **mémoriser** les passages clés ou garder le texte en main de façon assumée ;
  - préparer en deux phrases l'**intention** à annoncer au jury si on le souhaite.
- Une proposition personnelle peut **adapter**, **fragmenter**, **répéter** ou **transposer** le texte : c'est une **création**, pas une simple lecture.

### Seconde partie : l'interprétation (10 points)
- Avant l'épreuve, le candidat remet une **liste de cinq à sept scènes** préparées, chacune avec une **courte note d'intention**.
- Le jury en **choisit une** au début de la partie ; le candidat l'interprète (15 minutes au plus), puis un **entretien de 10 minutes** porte sur l'**interprétation** et les **choix scéniques**.
- Le candidat peut **rejouer** certains passages pour répondre au jury ou illustrer son propos.
- Choisir des scènes **variées** : époques (classique, XIXe, contemporain), registres, formes (monologue, dialogue avec un partenaire, adresse au public), en lien avec les **perspectives** de terminale.

### Le travail dramaturgique
- **Travail à la table** : lire et analyser le texte avant de jouer (situation, personnages, relations, structure de la scène, mots importants).
- Découper la scène en **mouvements** ou **unités** : chaque changement d'enjeu ou de rapport de force ouvre un nouveau moment.
- Distinguer **espace dramatique** (le lieu de la fiction, imaginé à partir du texte), **espace scénique** (le plateau où l'on joue) et **espace théâtral** (le lieu du rapport entre scène et salle).
- Lire les **didascalies** (indications de l'auteur) et décider de les suivre, de les transformer ou de les ignorer, en le justifiant.

### Les choix de mise en scène
- **Incarner** ou **distancier** le personnage ; **quatrième mur** ou **adresse au public**.
- **Rythme** : silences, accélérations, ruptures.
- **Scénographie** simple : une chaise, un tissu, la lumière disponible.
- **Costume** ou élément de costume, accessoire signifiant.
- Chaque choix doit **servir le sens** que l'on veut faire entendre.

### Réussir les entretiens
- Expliquer **ce qu'on a voulu faire**, **comment**, et **ce qui a marché ou non**.
- Citer des **références** : auteurs, metteurs en scène (Ariane Mnouchkine, Peter Brook, Joël Pommerat, Wajdi Mouawad), spectacles vus, théories du jeu.
- Accepter une **indication** du jury et **rejouer** avec souplesse : cela montre la **disponibilité** de l'acteur.

### À retenir pour le bac
- 30 minutes de préparation ; création sur un texte remis (15 min + 10 min d'entretien, 10 points) ; interprétation d'une scène choisie par le jury parmi cinq à sept (15 min + 10 min, 10 points).
- Situation, enjeux, angle, adresse, espace, ruptures ; travail à la table, unités de jeu, espaces dramatique, scénique et théâtral, didascalies.
- Justifier ses choix, citer des références, rejouer avec disponibilité.`,
      cartes: [
        { q: "Combien de temps de préparation précède l'épreuve de théâtre ?", r: "30 minutes." },
        { q: "Sur quoi porte la première partie de l'épreuve de théâtre ?", r: "Une création : une proposition personnelle à partir d'un texte remis." },
        { q: "Combien dure au plus la proposition personnelle et l'entretien qui suit ?", r: "15 minutes au plus, puis 10 minutes d'entretien." },
        { q: "Combien de points vaut chaque partie de l'épreuve de théâtre ?", r: "10 points." },
        { q: "Qui choisit la scène interprétée dans la seconde partie ?", r: "Le jury, parmi les cinq à sept scènes préparées par le candidat." },
        { q: "Que doit accompagner chaque scène de la liste ?", r: "Une courte note d'intention." },
        { q: "Que peut faire le candidat pendant l'entretien de la seconde partie ?", r: "Rejouer certains passages pour répondre au jury ou illustrer son propos." },
        { q: "Quelles questions poser pour cerner la situation d'un texte ?", r: "Qui ? Où ? Quand ? Que se passe-t-il ?" },
        { q: "Qu'est-ce qu'un enjeu ?", r: "Ce que veut un personnage et ce qui l'en empêche." },
        { q: "Qu'est-ce que le travail à la table ?", r: "L'analyse du texte avant de jouer : situation, personnages, structure, mots clés." },
        { q: "Différence entre espace dramatique et espace scénique ?", r: "Dramatique : le lieu de la fiction ; scénique : le plateau où l'on joue." },
        { q: "Qu'est-ce qu'une didascalie ?", r: "Une indication de l'auteur sur le jeu, le décor ou les gestes." },
        { q: "Qu'est-ce que le quatrième mur ?", r: "Le mur invisible entre scène et salle, quand les acteurs font comme si le public n'était pas là." },
        { q: "Pourquoi choisir des scènes variées dans sa liste ?", r: "Pour montrer l'étendue de son jeu : époques, registres et formes différents." },
      ],
      quiz: [
        { q: "Combien de temps de préparation a le candidat de théâtre ?", choix: ["5 minutes","10 minutes","30 minutes","20 minutes"], bonne: 2, expl: "Avant les deux parties.", niv: 1 },
        { q: "Combien de scènes le candidat prépare-t-il pour la seconde partie ?", choix: ["Une seule","Deux ou trois","De cinq à sept","Trois ou quatre"], bonne: 2, expl: "Le jury en choisit une.", niv: 1 },
        { q: "Qu'est-ce qu'une didascalie ?", choix: ["Une indication de l'auteur sur le jeu ou le décor","Une réplique très longue d'un personnage principal","Un dialogue entre deux personnages","La fin d'une pièce"], bonne: 0, expl: "En italique dans le texte.", niv: 1 },
        { q: "Combien dure l'entretien après chaque partie ?", choix: ["2 minutes","10 minutes","5 minutes","8 minutes"], bonne: 1, expl: "Explicitation.", niv: 1 },
        { q: "Que fait le candidat dans la première partie ?", choix: ["Une scène choisie dans sa liste préparée","Une analyse écrite d'un spectacle vu","Une improvisation sans aucun texte, sur un thème imposé par le jury","Une proposition personnelle à partir d'un texte remis"], bonne: 3, expl: "Création.", niv: 2 },
        { q: "Pendant la préparation, que faut-il repérer en premier ?", choix: ["Le nombre de mots du texte","La date de naissance de l'auteur","La situation et les enjeux des personnages","Le costume idéal"], bonne: 2, expl: "Comprendre avant de jouer.", niv: 2 },
        { q: "Qu'est-ce que l'espace dramatique ?", choix: ["Le lieu de la fiction imaginé à partir du texte","La salle où sont assis les spectateurs","Les coulisses du théâtre","Le plateau nu sans décor"], bonne: 0, expl: "Différent de l'espace scénique.", niv: 2 },
        { q: "Comment découper une scène en unités de jeu ?", choix: ["Après chaque groupe de dix lignes","À chaque point de la page","À chaque changement d'enjeu ou de rapport de force","À chaque entrée de la lumière"], bonne: 2, expl: "Mouvements de la scène.", niv: 2 },
        { q: "Pourquoi le jury choisit-il la scène plutôt que le candidat ?", choix: ["Pour piéger le candidat sur une scène qu'il ne connaît pas encore","Pour juger la préparation de l'ensemble de la liste","Parce que le candidat ne connaît pas ses scènes","Pour raccourcir l'épreuve"], bonne: 1, expl: "Toutes les scènes doivent être prêtes.", niv: 2 },
        { q: "Le jury demande de rejouer la fin « plus intérieure ». Que montre une bonne réaction ?", choix: ["Qu'il a mal joué la première fois","La disponibilité de l'acteur à une nouvelle indication","Qu'il faut changer de scène","Le candidat doit justifier sa première version sans rejouer la fin"], bonne: 1, expl: "Souplesse.", niv: 3 },
        { q: "Un candidat transforme un dialogue en monologue adressé au public. Comment le justifier ?", choix: ["Montrer qu'on entend la pensée du personnage et faire réfléchir le public","Dire qu'il a oublié la partie du partenaire","Expliquer que le jury préfère toujours les monologues aux dialogues à deux","Dire que cela permet de jouer plus vite"], bonne: 0, expl: "Choix au service du sens.", niv: 3 },
        { q: "Pourquoi choisir un angle fort pendant la préparation ?", choix: ["Il donne une cohérence à tous les choix de la proposition","Il dispense d'analyser le texte","Il permet d'éviter l'entretien","Il remplace la mémorisation"], bonne: 0, expl: "Idée directrice.", niv: 3 },
      ],
    },
    {
      chapitre: "s2tmd-pratique-15",
      fiche: `## Méthode : préparer l'épreuve pratique et réussir l'entretien

L'épreuve de pratique dure **50 minutes** et compte pour **16** au coefficient. Elle évalue autant la **prestation** que la capacité à **parler de son travail**. Une bonne préparation commence des mois avant, avec un calendrier et un **carnet de bord** à jour.

### Le barème selon la pratique
- **Danse** : 10 points pour la première partie (solo 4, improvisation 2, entretien 4), **4 points** pour l'analyse musicale, **6 points** pour les sciences du corps.
- **Musique** : **5 points** pour chacun des quatre temps (interprétation, création/invention, pratique collective, entretien).
- **Théâtre** : **10 points** pour la création à partir d'un texte, **10 points** pour l'interprétation d'une scène.
- Dans les trois pratiques, environ **la moitié des points** dépend de ce que l'on **dit** : entretiens, analyse, questions du jury.

### Le calendrier de préparation
- **Dès la rentrée** : choisir son programme, ses œuvres ou ses scènes avec ses professeurs.
- **Au premier trimestre** : construire la composition, le projet de création, la liste de scènes ; filmer et noter les étapes dans le carnet de bord.
- **Au deuxième trimestre** : **fixer** et **mémoriser** ; travailler l'**œuvre contemporaine** ou les scènes les plus difficiles ; préparer les **notes d'intention** et les supports (partitions en deux exemplaires, enregistrement musical, vidéo de pratique collective, dossier de composition).
- **Les dernières semaines** : faire des **filages** complets en temps réel devant un public ; s'entraîner à l'oral avec des questions du type jury ; réviser les connaissances (corps, analyse musicale, théories du jeu).

### Ce que le jury apprécie
- La **maîtrise technique** adaptée au niveau attendu.
- La qualité d'**interprétation** : engagement, présence, intention lisible.
- La **créativité** et la **singularité** des propositions.
- La capacité à **expliciter sa démarche** avec un vocabulaire précis.
- Le **regard critique** : reconnaître ses points faibles et proposer des pistes.
- La **culture** : œuvres, artistes, courants, perspectives du programme reliés à sa pratique.

### Préparer l'entretien
- Écrire une **liste de questions probables** et y répondre à voix haute : « Pourquoi ce choix ? », « Quelle difficulté avez-vous rencontrée ? », « Qu'est-ce qui vous a influencé ? », « Que changeriez-vous ? ».
- Préparer pour chaque création **trois idées** : l'**intention**, un **procédé** précis, une **référence**.
- Répondre en **développant** : affirmer, expliquer, donner un **exemple** tiré de sa prestation (« au moment de la chute, j'ai voulu… »).
- Si l'on ne sait pas : le dire simplement, puis proposer ce que l'on sait de proche.

### Le jour de l'épreuve
- Vérifier la **convocation**, la tenue, le matériel (instrument accordé, partitions, clé ou support numérique, chaussons, eau).
- Arriver **tôt** pour s'**échauffer** corps et voix.
- Pendant la prestation : rester dans son **intention**, continuer après une erreur.
- Pendant l'entretien : **écouter** la question jusqu'au bout, regarder les membres du jury, parler clairement, accepter de **rejouer** ou de **montrer**.

### Les erreurs à éviter
- Préparer seulement la prestation et négliger l'oral.
- Réciter un discours appris sans répondre aux questions.
- Découvrir les conditions réelles le jour de l'épreuve (salle, durée, trac).
- Choisir des œuvres trop difficiles qu'on ne maîtrise pas.

### À retenir pour le bac
- 50 minutes, coefficient 16 ; barèmes : danse 10 + 4 + 6, musique 4 × 5, théâtre 10 + 10.
- Calendrier : choisir, construire, fixer, filer ; carnet de bord et supports prêts.
- Entretien : intention, procédé, référence, regard critique ; écouter, développer, rejouer.`,
      cartes: [
        { q: "Quel est le coefficient de l'épreuve de pratique en S2TMD ?", r: "16." },
        { q: "Comment sont répartis les points en danse ?", r: "10 pour le solo, l'improvisation et l'entretien, 4 pour l'analyse musicale, 6 pour les sciences du corps." },
        { q: "Comment sont répartis les points en musique ?", r: "5 points pour chacun des quatre temps." },
        { q: "Comment sont répartis les points en théâtre ?", r: "10 pour la création à partir d'un texte, 10 pour l'interprétation d'une scène." },
        { q: "Quelle part des points dépend de l'oral ?", r: "Environ la moitié : entretiens, analyse et questions du jury." },
        { q: "Que faire au deuxième trimestre ?", r: "Fixer et mémoriser, travailler les passages difficiles, préparer les supports et notes d'intention." },
        { q: "Qu'est-ce qu'un filage ?", r: "Une répétition complète, sans arrêt, dans les conditions réelles." },
        { q: "Quels supports faut-il préparer en musique ?", r: "Partitions en deux exemplaires, vidéo de pratique collective, enregistrement du projet de création." },
        { q: "Quelles trois idées préparer pour chaque création ?", r: "L'intention, un procédé précis et une référence." },
        { q: "Comment développer une réponse à l'entretien ?", r: "Affirmer, expliquer, puis donner un exemple tiré de sa prestation." },
        { q: "Que faire si l'on ne connaît pas la réponse ?", r: "Le dire simplement, puis proposer ce que l'on sait de proche." },
        { q: "Que vérifier la veille de l'épreuve ?", r: "La convocation, la tenue, le matériel et les supports." },
        { q: "Pourquoi arriver tôt le jour de l'épreuve ?", r: "Pour s'échauffer le corps et la voix et se mettre en condition." },
        { q: "Quelle est l'erreur la plus fréquente ?", r: "Préparer la prestation et négliger l'oral." },
      ],
      quiz: [
        { q: "Quel est le coefficient de l'épreuve de pratique S2TMD ?", choix: ["4","6","8","16"], bonne: 3, expl: "Comme l'écrit de culture.", niv: 1 },
        { q: "Combien de points vaut l'analyse musicale en danse ?", choix: ["6 points","4 points","8 points","10 points"], bonne: 1, expl: "Les sciences du corps valent 6.", niv: 1 },
        { q: "Comment sont notés les quatre temps en musique ?", choix: ["Le premier sur 20, les autres en bonus","2 points chacun et 12 pour l'entretien","Sur 10 pour les deux premiers","5 points chacun"], bonne: 3, expl: "4 × 5.", niv: 1 },
        { q: "Qu'est-ce qu'un filage ?", choix: ["Une répétition complète sans arrêt","Une séance d'étirements","Une lecture silencieuse du texte","Un enregistrement sans public"], bonne: 0, expl: "Conditions réelles.", niv: 1 },
        { q: "Quelle part des points dépend surtout de ce que dit le candidat ?", choix: ["Un dixième environ","Un quart environ","La quasi-totalité","Environ la moitié"], bonne: 3, expl: "Entretiens et questions.", niv: 2 },
        { q: "Quand faire des filages complets devant un public ?", choix: ["Dès la première semaine de septembre","Le jour même, juste avant de passer","Dans les dernières semaines avant l'épreuve","Après l'épreuve, pour le plaisir"], bonne: 2, expl: "Fixer avant de filer.", niv: 2 },
        { q: "Quelle réponse à l'entretien est la mieux construite ?", choix: ["« J'ai fait comme ça parce que c'était bien. »","« Je ne sais pas, c'est mon professeur qui l'a voulu. »","« J'ai ralenti la fin pour montrer l'épuisement ; on le voit au moment de la chute. »","« Tout est expliqué dans mon carnet de bord. »"], bonne: 2, expl: "Intention, procédé, exemple.", niv: 2 },
        { q: "Que faut-il éviter de choisir comme programme ?", choix: ["Des œuvres d'époques différentes","Une scène contemporaine","Une musique que l'on aime","Des œuvres trop difficiles qu'on ne maîtrise pas"], bonne: 3, expl: "Niveau maîtrisé.", niv: 2 },
        { q: "Que faire si l'on ne connaît pas la réponse à une question du jury ?", choix: ["Inventer une réponse très longue pour gagner du temps","Le dire et proposer une idée proche que l'on connaît","Changer de sujet sans répondre","Demander à passer la question"], bonne: 1, expl: "Honnêteté.", niv: 2 },
        { q: "Pourquoi préparer des questions probables à voix haute ?", choix: ["Pour apprendre un texte à réciter mot pour mot","Parce que le jury donne la liste des questions à l'avance par courrier","Pour s'entraîner à développer clairement sa pensée à l'oral","Pour éviter de parler de sa prestation"], bonne: 2, expl: "Entraînement oral.", niv: 3 },
        { q: "Un candidat brillant techniquement ne sait pas expliquer ses choix. Quel risque court-il ?", choix: ["Perdre une grande partie des points liés aux entretiens","Être exclu de l'épreuve","Recevoir une note de 20 automatique","Devoir repasser l'écrit"], bonne: 0, expl: "La moitié des points à l'oral.", niv: 3 },
        { q: "Pourquoi reconnaître une faiblesse devant le jury peut-il rapporter des points ?", choix: ["Le jury retire alors cette partie du barème et note sur le reste","Cela permet de rejouer toute l'épreuve","Le jury est obligé d'être plus indulgent","Cela montre un regard critique et une capacité à progresser"], bonne: 3, expl: "Regard réflexif valorisé.", niv: 3 },
      ],
    },
  ],
  methode: [
    {
      "id": "s2tmd-pratique-m1",
      "mat": "s2tmd-pratique",
      "titre": "Danse : expliquer sa composition et son improvisation",
      "formules": [
        "D'où vient l'idée de votre solo ?",
        "Pourquoi avoir choisi cette musique ?",
        "Qu'avez-vous cherché dans l'improvisation ?",
        "Que changeriez-vous ?"
      ],
      "vu": [
        "Définition officielle de l'épreuve (note de service du 11 février 2020, version consolidée de mars 2024) : entretien de 10 minutes après le solo et l'improvisation, noté sur 4 points"
      ],
      "pts": "4 points sur 20 (entretien de la première partie)",
      "attendu": "Le jury veut apprécier la capacité à expliciter sa démarche de composition et son expérience d'interprète, en lien avec sa culture chorégraphique et son parcours. Il attend une intention claire, des procédés nommés avec le vocabulaire juste (accumulation, canon, contraste, niveaux, qualités de mouvement), le rapport choisi à la musique, des références (chorégraphes, œuvres vues), un retour honnête sur l'improvisation et des pistes de progrès.",
      "etapes": [
        "Rappeler en une phrase l'intention du solo.",
        "Nommer deux procédés de composition et montrer où ils apparaissent.",
        "Expliquer le rapport à la musique choisie (suivre, contrepointer, utiliser les silences).",
        "Citer une référence chorégraphique et ce qu'elle a apporté.",
        "Dire ce qui a marché dans l'improvisation et ce qui a manqué.",
        "Proposer une piste de travail précise."
      ],
      "mots": [
        "intention",
        "accumulation",
        "variation",
        "contraste",
        "qualités de mouvement",
        "musicalité",
        "contrepoint",
        "kinésphère",
        "niveaux",
        "présence"
      ],
      "pieges": [
        "Répondre « parce que c'était joli » sans intention.",
        "Raconter sa vie de danseur au lieu de parler de la pièce.",
        "Ne citer aucun chorégraphe ni aucune œuvre.",
        "Refuser de reconnaître une faiblesse."
      ],
      "cas": "Tu as dansé un solo contemporain de 3 minutes sur une pièce pour piano, construit sur la répétition d'un geste de la main qui s'agrandit jusqu'à entraîner tout le corps. Ton improvisation sur le thème « la frontière » est restée surtout au niveau médian.",
      "question": "Le jury te demande : « Comment avez-vous construit votre solo, et qu'avez-vous pensé de votre improvisation ? » Rédige ta réponse.",
      "modele": "Mon solo part d'un geste très simple de la main, comme un appel. Je voulais montrer comment un petit geste peut finir par envahir tout le corps. J'ai utilisé l'accumulation : à chaque reprise, j'ajoute une partie du corps, la main, puis le bras, le buste, enfin un déplacement en diagonale. Pour la musique, je ne suis pas les notes une à une : je danse en contrepoint pendant la première partie, puis je rejoins les accents du piano quand le geste devient global, ce qui crée le moment le plus fort. Je me suis inspiré du travail de répétition et de variation que j'ai vu chez Anne Teresa De Keersmaeker. Dans l'improvisation, j'ai traduit la frontière par une ligne imaginaire au sol que je n'osais pas franchir, et je pense que l'idée était lisible. En revanche, je suis resté presque tout le temps au niveau médian : j'aurais dû explorer le sol et les sauts pour donner plus de contrastes. C'est ce que je travaille maintenant en atelier.",
      "grille": [
        "Intention annoncée clairement",
        "Deux procédés nommés et situés",
        "Rapport à la musique expliqué",
        "Une référence chorégraphique",
        "Regard critique sur l'improvisation",
        "Piste de progrès précise"
      ]
    },
    {
      "id": "s2tmd-pratique-m2",
      "mat": "s2tmd-pratique",
      "titre": "Danse : relier les sciences du corps à sa pratique",
      "formules": [
        "Quel type de contraction utilisez-vous dans… ?",
        "Comment expliquez-vous… ?",
        "Comment prévenir… ?",
        "Quel lien faites-vous avec votre pratique ?"
      ],
      "vu": [
        "Définition officielle de l'épreuve (note de service du 11 février 2020, version consolidée de mars 2024) : interrogation orale d'environ 20 minutes sur le volet sciences et connaissances sur le corps, notée sur 6 points"
      ],
      "pts": "6 points sur 20",
      "attendu": "Le jury attend des connaissances exactes sur le fonctionnement du corps (articulations, muscles, contractions, système sensoriel, équilibre, entraînement, blessures, hygiène de vie) et surtout leur mise en lien avec un geste précis de sa danse. Une bonne réponse définit la notion, l'explique et l'illustre par un exemple vécu, puis ouvre si possible sur la prévention ou sur les usages du corps dans la société.",
      "etapes": [
        "Définir la notion demandée avec le mot juste.",
        "Expliquer le mécanisme simplement (quoi, comment, pourquoi).",
        "L'illustrer par un geste précis de sa pratique.",
        "Donner une conséquence pour l'entraînement ou la prévention."
      ],
      "mots": [
        "concentrique",
        "excentrique",
        "isométrique",
        "agoniste",
        "antagoniste",
        "proprioception",
        "oreille interne",
        "base d'appui",
        "centre de gravité",
        "fracture de fatigue",
        "tendinite"
      ],
      "pieges": [
        "Réciter une définition sans exemple de danse.",
        "Confondre tendon et ligament.",
        "Confondre contraction concentrique et excentrique.",
        "Oublier la prévention quand on parle d'une blessure."
      ],
      "cas": "Le jury te montre une photo d'une danseuse qui se réceptionne d'un grand jeté.",
      "question": "« Quels muscles et quel type de contraction interviennent dans cette réception, et comment éviter de se blesser ? » Rédige ta réponse.",
      "modele": "Pendant la réception, les quadriceps à l'avant de la cuisse et les muscles du mollet freinent la descente : ils travaillent en contraction excentrique, c'est-à-dire qu'ils s'allongent tout en se contractant pour amortir le choc. Les muscles du tronc travaillent en gainage pour garder l'alignement du dos. Pour ne pas se blesser, il faut se réceptionner en déroulant le pied, des orteils vers le talon, et en pliant les genoux dans l'axe des pieds, sans les laisser rentrer vers l'intérieur. Dans mon cours de jazz, quand je me réceptionne genoux tendus, je sens le choc remonter dans le dos. Répéter des réceptions mal amorties sur un sol dur peut provoquer des tendinites ou une fracture de fatigue du tibia. La prévention passe par un échauffement, le renforcement des muscles des jambes en excentrique et une progression dans le nombre de sauts.",
      "grille": [
        "Muscles principaux nommés",
        "Contraction excentrique définie",
        "Technique de réception expliquée",
        "Exemple tiré de sa pratique",
        "Risque de blessure précis",
        "Moyen de prévention"
      ]
    },
    {
      "id": "s2tmd-pratique-m3",
      "mat": "s2tmd-pratique",
      "titre": "Danse : répondre aux questions sur un extrait musical",
      "formules": [
        "Quelle est la mesure de cet extrait ?",
        "Comment décririez-vous la texture ?",
        "À quel style rattachez-vous cet extrait ?",
        "Pouvez-vous nous montrer la pulsation ?"
      ],
      "vu": [
        "Définition officielle de l'épreuve (note de service du 11 février 2020, version consolidée de mars 2024) : extrait d'environ 1 minute diffusé deux fois, questions sur le style, le rythme, la texture et les phrases, réponses corporelles possibles, 4 points"
      ],
      "pts": "4 points sur 20",
      "attendu": "Des réponses précises, avec le vocabulaire musical, qui séparent ce que l'on entend de ce que l'on ressent. Le jury apprécie qu'on situe l'extrait (époque ou genre), qu'on décrive le rythme, les instruments et l'organisation des phrases, et qu'on fasse un lien avec le mouvement dansé. Il peut demander de frapper la pulsation ou de montrer une phrase.",
      "etapes": [
        "Première écoute : caractère, instruments, tempo.",
        "Seconde écoute : mesure, pulsation, phrases, forme.",
        "Situer l'extrait (époque, genre) avec un ou deux indices.",
        "Faire un lien avec la danse (phrases, accents, contrastes)."
      ],
      "mots": [
        "pulsation",
        "tempo",
        "mesure à trois temps",
        "binaire",
        "ternaire",
        "syncope",
        "ostinato",
        "carrure",
        "monodie",
        "polyphonie",
        "timbre",
        "nuances"
      ],
      "pieges": [
        "Ne donner que des impressions (« c'est joyeux »).",
        "Confondre tempo et mesure.",
        "Inventer un compositeur au lieu de décrire.",
        "Oublier le lien avec la danse."
      ],
      "cas": "Extrait imaginaire : un piano joue une mélodie calme à 3 temps, la main gauche répète le même accompagnement, puis un violoncelle reprend la mélodie un peu plus fort.",
      "question": "Décris cet extrait comme tu le ferais devant le jury.",
      "modele": "L'extrait a un tempo lent, plutôt andante. On peut compter une mesure à trois temps, avec un temps fort bien marqué au début de chaque mesure, comme dans une valse lente. La texture est une mélodie accompagnée : la main droite du piano joue la mélodie et la main gauche répète un accompagnement régulier qui forme presque un ostinato. Les phrases semblent régulières, de quatre mesures. Ensuite, le timbre change : le violoncelle reprend la mélodie, avec une nuance un peu plus forte, ce qui donne un caractère plus chaleureux. Le style, avec ce piano expressif, me fait penser à la période romantique. Pour un danseur, la régularité des phrases permet de construire des phrases sur trois temps avec un balancé, et l'entrée du violoncelle pourrait marquer un changement de niveau ou l'entrée d'un second danseur.",
      "grille": [
        "Tempo et mesure justes",
        "Texture décrite avec le bon mot",
        "Changement de timbre ou de nuance repéré",
        "Organisation des phrases",
        "Style situé avec un indice",
        "Lien avec la danse"
      ]
    },
    {
      "id": "s2tmd-pratique-m4",
      "mat": "s2tmd-pratique",
      "titre": "Musique : présenter son projet de création/invention",
      "formules": [
        "Présentez votre projet de création.",
        "Quelles influences vous ont nourri ?",
        "Avec quelle perspective le reliez-vous ?",
        "Comment le présenteriez-vous à un public ?"
      ],
      "vu": [
        "Définition officielle de l'épreuve (note de service du 11 février 2020, version consolidée de mars 2024) : deuxième temps de 10 minutes au plus, noté sur 5 points"
      ],
      "pts": "5 points sur 20",
      "attendu": "Une présentation qui expose les choix artistiques et techniques du projet mené dans l'année, les influences qui l'ont nourri, les liens avec au moins une des trois perspectives de terminale, et les formes de médiation envisagées auprès d'un public donné. Elle s'appuie sur des exemples joués ou chantés et sur l'enregistrement du travail.",
      "etapes": [
        "Présenter le projet en une phrase : forme, effectif, point de départ.",
        "Expliquer deux choix précis (harmonie, rythme, timbre, structure).",
        "Nommer les influences et ce qu'on leur a pris.",
        "Relier le projet à une perspective de terminale.",
        "Décrire la médiation pour un public précis.",
        "Faire entendre un ou deux exemples."
      ],
      "mots": [
        "arrangement",
        "motif",
        "développement",
        "orchestration",
        "hybridation des langages",
        "boucle",
        "échantillon",
        "médiation",
        "public donné"
      ],
      "pieges": [
        "Oublier la médiation, pourtant demandée.",
        "Ne citer aucune perspective.",
        "Parler sans faire entendre la musique.",
        "Décrire la technique sans dire l'intention."
      ],
      "cas": "Tu as arrangé une berceuse traditionnelle arménienne pour violoncelle, voix et sons électroniques en boucle, à partir d'un enregistrement de ta grand-mère.",
      "question": "Rédige la présentation de ton projet (environ 2 minutes à l'oral).",
      "modele": "Mon projet est l'arrangement d'une berceuse traditionnelle arménienne que chantait ma grand-mère. Je suis parti de son enregistrement, que j'ai découpé en petites boucles : sa voix revient comme un motif au début et à la fin. J'ai confié la mélodie au violoncelle, que je joue, puis à la voix d'une camarade, pendant que des nappes électroniques tiennent de longues notes graves. Le passage central change de mesure et accélère pour créer un contraste avant le retour au calme. J'ai été influencé par des musiciens qui mêlent instruments acoustiques et électronique, et par l'écoute de chants arméniens en classe. Ce projet illustre l'hybridation des langages, entre tradition orale et outils numériques, et pose aussi la question de l'identité culturelle dans un monde mondialisé. Pour la médiation, je l'imagine pour des élèves de collège : je leur ferais d'abord écouter la voix seule, puis chanter le motif, avant de jouer la version complète. Je vais vous faire entendre le début, puis le passage central.",
      "grille": [
        "Projet présenté clairement",
        "Deux choix techniques expliqués",
        "Influences nommées",
        "Lien avec une perspective de terminale",
        "Médiation pour un public précis",
        "Exemples musicaux annoncés"
      ]
    },
    {
      "id": "s2tmd-pratique-m5",
      "mat": "s2tmd-pratique",
      "titre": "Théâtre : construire une proposition à partir d'un texte en 30 minutes",
      "formules": [
        "Présentez votre proposition.",
        "Pourquoi ce choix d'adresse ?",
        "Qu'avez-vous voulu faire entendre ?",
        "Quelle difficulté avez-vous rencontrée ?"
      ],
      "vu": [
        "Définition officielle de l'épreuve (note de service du 11 février 2020, version consolidée de mars 2024) : texte remis, 30 minutes de préparation, proposition de 15 minutes au plus puis 10 minutes d'entretien, 10 points"
      ],
      "pts": "10 points sur 20",
      "attendu": "Une proposition personnelle et cohérente, construite à partir d'une lecture précise du texte (situation, enjeux, registre), avec un angle fort, des choix d'adresse, d'espace et de rythme. À l'entretien, le jury attend que le candidat explicite ses choix et analyse les difficultés et les réussites de leur mise en œuvre.",
      "etapes": [
        "Lire deux fois et repérer situation, personnages, enjeux, registre.",
        "Choisir un angle en une phrase.",
        "Décider l'adresse, l'espace et deux ruptures de rythme.",
        "Préparer le début et la fin avec soin.",
        "Garder cinq minutes pour filer mentalement.",
        "À l'entretien : intention, choix, réussite, difficulté."
      ],
      "mots": [
        "situation",
        "enjeu",
        "angle",
        "adresse",
        "rupture",
        "registre",
        "espace scénique",
        "distanciation",
        "quatrième mur"
      ],
      "pieges": [
        "Lire le texte à plat sans proposition.",
        "Multiplier les idées sans fil conducteur.",
        "Oublier la fin, qui reste en mémoire du jury.",
        "Se justifier à l'entretien au lieu d'analyser."
      ],
      "cas": "Texte remis (inventé pour l'entraînement) : un court monologue où un gardien de musée, seul la nuit, parle aux tableaux comme à des amis et leur annonce que le musée va fermer.",
      "question": "Explique au jury la proposition que tu as construite et comment tu as utilisé tes 30 minutes.",
      "modele": "J'ai lu le texte deux fois. J'ai repéré la situation : un homme seul, la nuit, dans un lieu qui va disparaître, et son enjeu : dire adieu sans s'effondrer. Le registre m'a paru à la fois comique, parce qu'il parle à des tableaux, et mélancolique. Mon angle est « un dernier tour de garde ». J'ai donc construit la proposition comme une ronde : je traverse l'espace en m'arrêtant devant trois tableaux imaginaires, que j'ai placés au public, si bien que les spectateurs deviennent les tableaux. Cette adresse directe rend le public complice et touche davantage. J'ai prévu deux ruptures : un fou rire au milieu, puis un long silence avant l'annonce de la fermeture. Pour la fin, j'éteins une lampe imaginaire et je reste immobile. Je pense que l'adresse au public a bien fonctionné ; en revanche, j'ai accéléré dans le passage du milieu à cause du trac, et l'émotion est arrivée trop tôt.",
      "grille": [
        "Situation et enjeu repérés",
        "Angle formulé",
        "Choix d'adresse et d'espace justifiés",
        "Ruptures de rythme",
        "Fin travaillée",
        "Analyse d'une réussite et d'une difficulté"
      ]
    },
    {
      "id": "s2tmd-pratique-m6",
      "mat": "s2tmd-pratique",
      "titre": "Théâtre : défendre son interprétation d'une scène",
      "formules": [
        "Pourquoi avez-vous joué ce personnage ainsi ?",
        "Que dit votre note d'intention ?",
        "Pouvez-vous rejouer ce passage autrement ?",
        "À quelle mise en scène pensez-vous ?"
      ],
      "vu": [
        "Définition officielle de l'épreuve (note de service du 11 février 2020, version consolidée de mars 2024) : liste de cinq à sept scènes avec notes d'intention, scène choisie par le jury, 15 minutes au plus puis 10 minutes d'entretien, 10 points"
      ],
      "pts": "10 points sur 20",
      "attendu": "Une interprétation maîtrisée (voix, corps, espace, partenaire) et des choix scéniques que le candidat sait défendre : lecture dramaturgique de la scène, découpage en unités, choix d'incarnation ou de distance, rapport au public, références de mise en scène ou de théorie du jeu. Il doit pouvoir rejouer un passage à la demande du jury.",
      "etapes": [
        "Rappeler la situation et l'enjeu de la scène.",
        "Expliquer la lecture choisie (angle, rapport de force).",
        "Justifier deux choix scéniques précis.",
        "Citer une référence (mise en scène, théorie du jeu).",
        "Rejouer avec souplesse si le jury le demande."
      ],
      "mots": [
        "note d'intention",
        "travail à la table",
        "unité de jeu",
        "rapport de force",
        "incarnation",
        "distanciation",
        "adresse",
        "didascalie",
        "proxémie"
      ],
      "pieges": [
        "Paraphraser l'histoire de la pièce.",
        "Ne pas savoir pourquoi on a fait un geste.",
        "Refuser de changer quand le jury propose une autre piste."
      ],
      "cas": "Tu as interprété une scène de dispute entre deux sœurs, tirée d'une pièce contemporaine de ta liste, en jouant très peu de déplacements et en gardant une grande distance entre les deux personnages.",
      "question": "Le jury te demande : « Pourquoi cette immobilité et cette distance ? » Rédige ta réponse.",
      "modele": "Dans ma note d'intention, j'ai écrit que cette dispute n'est pas une explosion mais un règlement de comptes ancien. Au travail à la table, j'ai découpé la scène en trois unités : la politesse, la première accusation, puis la rupture. J'ai voulu que les deux sœurs restent loin l'une de l'autre, aux deux bords du plateau, parce que la distance dit qu'elles ne se touchent plus depuis longtemps : c'est la proxémie qui raconte leur relation. L'immobilité concentre la tension sur la voix et les silences. Le seul déplacement arrive dans la troisième unité, quand ma partenaire fait un pas vers moi et que je recule : c'est le vrai moment de rupture. Je me suis inspiré de mises en scène contemporaines très épurées, où un geste rare devient très fort. Si vous voulez, je peux rejouer la fin en me rapprochant, pour voir ce que cela change.",
      "grille": [
        "Intention rappelée",
        "Découpage de la scène",
        "Choix de distance justifié par le sens",
        "Rôle de l'immobilité expliqué",
        "Référence citée",
        "Disponibilité pour rejouer"
      ]
    }
  ],
  sujets: [
    {
      id: "s2tmd-pratique-s1", matiere: 'bioeco', titre: "Épreuve blanche de pratique chorégraphique (sujet inventé)", duree: 50,
      enonce: `Épreuve blanche inventée pour l'entraînement, à la forme de l'épreuve réelle de pratique chorégraphique. Les thèmes, l'extrait musical et les questions sont imaginaires. Faire passer l'épreuve par un professeur ou un camarade qui joue le jury.

PREMIÈRE PARTIE (environ 15 minutes, 10 points) : interprétation chorégraphique en solo
1. Interprète ta composition personnelle (2 min à 3 min 30) sur la musique que tu as apportée.
2. Tire au sort un thème parmi : « l'écho », « la ligne de partage », « ce qui pèse », « le seuil ». Écoute la proposition musicale du jury (une pièce lente pour cordes), choisis le silence ou cette musique, prends 15 secondes de mise en condition, puis improvise entre 1 min 15 et 2 min.
3. Entretien de 10 minutes. Questions possibles :
   a. D'où vient l'idée de ta composition et quelle intention veux-tu transmettre ?
   b. Nomme deux procédés de composition utilisés et montre où ils apparaissent.
   c. Pourquoi as-tu choisi d'improviser en silence ou sur la musique ?
   d. Quel chorégraphe ou quelle œuvre a nourri ton travail ?

DEUXIÈME PARTIE (environ 15 minutes, 4 points) : analyse musicale
Extrait imaginaire d'environ 1 minute, diffusé deux fois : un ensemble de percussions installe un motif rythmique répété ; une flûte entre avec une mélodie aux accents décalés ; le tempo accélère vers la fin.
4. Frappe la pulsation et dis si la mesure te paraît binaire ou ternaire.
5. Comment appelle-t-on le motif répété des percussions ?
6. Décris la texture et les timbres.
7. Quel effet produit l'accélération finale, et comment l'utiliserais-tu en danse ?

TROISIÈME PARTIE (environ 20 minutes, 6 points) : sciences et connaissances sur le corps
8. Quels types de contraction musculaire interviennent quand tu descends dans un plié puis que tu remontes ?
9. Explique pourquoi l'équilibre sur demi-pointe est difficile et quels sens t'aident à le tenir.
10. Une camarade ressent une douleur au tibia qui augmente après les sauts depuis trois semaines. Quelle blessure peut-on craindre et que conseilles-tu ?
11. En quoi la danse peut-elle interroger les normes sur le corps dans la société ?`,
      corrige: `Éléments attendus (corrigé indicatif).

1 et 2. Prestation : précision technique (placement, appuis, réceptions), maîtrise de l'énergie et de la respiration, mémoire sans hésitation, présence et intention lisibles ; improvisation qui traduit le thème en qualités de mouvement (« ce qui pèse » : poids, lenteur, chutes et relevés), avec des contrastes et une fin nette.

3. Entretien : intention en une phrase ; procédés nommés et situés (accumulation, variation de niveau, canon impossible en solo mais répétition, contraste) ; choix du silence ou de la musique justifié par le thème ; référence précise (chorégraphe, pièce, ce qu'on en a retenu) ; regard critique et piste de travail.

4. Pulsation régulière frappée ; mesure binaire (chaque temps se divise en deux) ou ternaire selon l'écoute, justifiée.
5. Un ostinato rythmique.
6. Mélodie accompagnée : la flûte joue la mélodie au-dessus de l'ostinato des percussions ; timbres des percussions (peaux, bois) et d'un bois (flûte) ; accents décalés : syncopes.
7. L'accélération (accelerando) crée une montée de tension ; en danse, elle peut accompagner une accumulation de gestes ou un passage du sol au niveau haut vers un final.

8. En descendant, les quadriceps travaillent en contraction excentrique : ils s'allongent en freinant. En remontant, ils se raccourcissent : contraction concentrique. Le gainage du tronc est plutôt isométrique.
9. La base d'appui est très petite ; le centre de gravité doit rester juste au-dessus. L'oreille interne, la vue (point fixe) et la proprioception des pieds et chevilles permettent les micro-ajustements.
10. On peut craindre une fracture de fatigue (ou une inflammation autour du tibia) due à des chocs répétés. Conseils : réduire les sauts, ne pas masquer la douleur, consulter, vérifier l'alimentation et le sommeil, reprendre progressivement, réceptions amorties sur un sol adapté.
11. La danse peut montrer des corps différents de la norme (corps âgés, handicapés, non virtuoses, rondeurs), déplacer les rôles masculins et féminins, ou au contraire reproduire l'idéal de minceur ; on peut citer les « techniques du corps » de Marcel Mauss et des pièces qui font danser des amateurs.`,
      grille: [{"c":"Composition personnelle : technique, interprétation, créativité","pts":4},{"c":"Improvisation : traduction du thème, engagement, contrastes","pts":2},{"c":"Entretien : démarche explicitée, vocabulaire, références, regard critique","pts":4},{"c":"Analyse musicale : pulsation, ostinato, texture, lien avec la danse","pts":4},{"c":"Sciences du corps : contractions, équilibre, prévention, lien avec la société","pts":6}],
    },
    {
      id: "s2tmd-pratique-s2", matiere: 'bioeco', titre: "Épreuve blanche de pratique musicale (sujet inventé)", duree: 50,
      enonce: `Épreuve blanche inventée pour l'entraînement, à la forme de l'épreuve réelle de pratique musicale. Les questions sont imaginaires. Faire passer l'épreuve par un professeur ou un camarade qui joue le jury, en respectant les durées.

PREMIER TEMPS (15 minutes au plus, 5 points) : interprétation
1. Présente brièvement ton programme : pour chaque œuvre, le compositeur, l'époque, le style et tes choix d'interprétation.
2. Interprète ton programme (pour un instrumentiste : une œuvre antérieure à 1950 et une œuvre du langage contemporain ; pour un chanteur : deux œuvres par cœur ; pour les autres parcours : le programme prévu par la définition de l'épreuve).

DEUXIÈME TEMPS (10 minutes au plus, 5 points) : création/invention
3. Présente ton projet de création ou d'invention de l'année : choix artistiques et techniques, influences, lien avec au moins une perspective de terminale, formes de médiation pour un public que tu précises. Fais entendre deux exemples.

TROISIÈME TEMPS (10 minutes au plus, 5 points) : pratique collective
4. Diffuse deux extraits vidéo d'une pratique collective de l'année. Présente l'œuvre, ses enjeux, une difficulté surmontée, ton rôle et ce que ce travail t'a apporté.

QUATRIÈME TEMPS (15 minutes au plus, 5 points) : entretien
Questions possibles du jury :
5. Dans ton œuvre contemporaine, qu'est-ce qui a été le plus difficile à travailler, et comment as-tu fait ?
6. Si tu devais présenter ton projet de création dans une maison de retraite plutôt qu'à des collégiens, que changerais-tu ?
7. Quelle posture adoptes-tu en jouant, et quels muscles risquent de se crisper ? Comment l'éviter ?
8. Tu joues souvent avec un groupe amplifié : comment protèges-tu ton audition ?
9. Quel projet musical voudrais-tu mener après le bac ?`,
      corrige: `Éléments attendus (corrigé indicatif).

1. Présentation courte et vivante (2 à 3 minutes) : œuvres situées (époque, genre, contexte), raisons du choix, choix d'interprétation (tempo, phrasé, couleur), références écoutées et comparées.
2. Interprétation : justesse, précision rythmique, maîtrise technique, phrasé, nuances et articulations, style adapté à chaque époque, engagement ; continuer après une erreur.

3. Création : projet présenté en une phrase ; deux choix précis (motif, arrangement, orchestration, harmonie, boucles) ; influences nommées ; lien explicite avec une perspective (hybridation des langages ; mondialisation et identités culturelles ; relativité des goûts) ; médiation adaptée à un public précis (âge, connaissances, lieu) ; exemples joués et enregistrés.

4. Pratique collective : œuvre et effectif situés, pratique dirigée ou non ; enjeu artistique ; difficulté et solution (mise en place, justesse d'ensemble, équilibre) ; rôle précis à un moment de la vidéo ; apport à la pratique individuelle (écoute, régularité, autonomie).

5. Réponse précise : rythmes irréguliers, modes de jeu nouveaux, lecture ; méthode : travail lent, métronome, découpage, enregistrement.
6. Adapter la médiation : présentation plus courte, faire chanter un refrain, choisir des extraits, lien avec des musiques connues de ce public, attention au volume.
7. Posture stable et détendue, épaules basses, dos aligné ; risques de crispation (épaules, nuque, poignet, mâchoire) ; alterner tension et détente, pauses, échauffement, prévention des troubles musculo-squelettiques et de la dystonie.
8. Risque dès environ 85 dB sur une longue durée ; bouchons à filtres, distance avec les enceintes, pauses au calme, volume modéré au casque ; les cellules ciliées ne se régénèrent pas, les acouphènes sont un signal d'alerte.
9. Projet personnel réaliste relié à la formation (conservatoire, licence de musicologie, métiers du son, médiation, enseignement), montrant un regard sur sa pratique.`,
      grille: [{"c":"Interprétation et présentation du programme","pts":5},{"c":"Création/invention : choix, influences, perspective, médiation","pts":5},{"c":"Pratique collective : enjeux, difficultés, rôle, apports","pts":5},{"c":"Entretien : précision, regard critique, connaissance du corps, projet","pts":5}],
    },
    {
      id: "s2tmd-pratique-s3", matiere: 'bioeco', titre: "Épreuve blanche de pratique théâtrale (sujet inventé)", duree: 50,
      enonce: `Épreuve blanche inventée pour l'entraînement, à la forme de l'épreuve réelle de pratique théâtrale. Le texte ci-dessous a été écrit pour cet entraînement. Durée : 30 minutes de préparation, puis deux parties de 15 minutes au plus suivies chacune de 10 minutes d'entretien.

AVANT L'ÉPREUVE
Remets au jury ta liste de cinq à sept scènes préparées, chacune avec une courte note d'intention.

PREMIÈRE PARTIE (10 points) : création théâtrale à partir du texte suivant
Après 30 minutes de préparation, présente une proposition personnelle de ce texte, puis explique tes choix au jury.

« LE QUAI
Une gare la nuit. NINA, vingt ans, une valise. LÉON, le chef de gare, une lampe.
LÉON. — Le dernier train est parti à vingt-trois heures douze.
NINA. — Je sais. Je l'ai regardé partir.
LÉON. — Alors pourquoi restez-vous là ?
NINA. — Parce que si je rentre, il faudra expliquer pourquoi je ne suis pas montée.
LÉON. — Et pourquoi n'êtes-vous pas montée ?
NINA. — (Un temps.) Vous éteignez à quelle heure ?
LÉON. — Quand il n'y a plus personne.
NINA. — Alors n'éteignez pas tout de suite. »

Questions possibles à l'entretien :
1. Quelle est la situation et quel est l'enjeu de chaque personnage ?
2. Quel angle as-tu choisi et pourquoi ?
3. Comment as-tu utilisé l'espace et l'adresse ?
4. Qu'est-ce qui a fonctionné, et qu'est-ce qui t'a résisté ?

SECONDE PARTIE (10 points) : interprétation
Le jury choisit une scène de ta liste. Interprète-la, puis réponds à ses questions :
5. Pourquoi as-tu choisi cette scène et que dit ta note d'intention ?
6. Comment as-tu découpé la scène en unités de jeu ?
7. As-tu cherché à incarner ton personnage ou à le montrer avec distance ? Appuie-toi sur une théorie du jeu.
8. Le jury te demande de rejouer la fin avec une autre intention : rejoue-la et dis ce que cela change.`,
      corrige: `Éléments attendus (corrigé indicatif).

Préparation : deux lectures ; situation (une gare de nuit, après le dernier train ; une jeune femme qui n'est pas partie et un chef de gare) ; enjeux : Nina veut retarder le moment de rentrer et d'avouer, sans dire pourquoi elle n'est pas partie ; Léon veut fermer, mais finit par l'écouter ; registre réaliste et poétique, beaucoup de non-dit.

1 à 4. Proposition personnelle et cohérente : un angle clair (par exemple « une fuite qui n'a pas eu lieu » ou « la lumière comme dernier refuge ») ; choix d'espace (le bord du plateau comme quai, la lampe réelle ou imaginaire) ; gestion du silence, notamment au « Un temps » ; possibilité de jouer les deux rôles, de répéter la dernière réplique, de s'adresser au public, de transposer ; fin travaillée (lumière qui reste ou qui s'éteint). Entretien : choix justifiés par le sens, analyse honnête d'une réussite et d'une difficulté (rythme, trac, mémoire).

5. Choix de scène relié à une perspective de terminale ou à un intérêt de jeu ; note d'intention résumée.
6. Découpage en unités selon les changements d'enjeu ou de rapport de force, avec les répliques charnières.
7. Référence juste : incarnation et vérité du personnage (Stanislavski) ou distanciation pour faire réfléchir le spectateur (Brecht), ou maîtrise de l'émotion (Diderot), reliée à un moment précis du jeu.
8. Disponibilité : rejouer réellement autrement (plus intérieur, plus rapide, adressé au public) et analyser l'effet produit sur le sens.

Dans les deux parties, le jury observe aussi la voix (projection, articulation, phrasé), le corps (disponibilité, non-verbal), l'espace (proxémie, adresse) et l'écoute du partenaire s'il y en a un.`,
      grille: [{"c":"Création : lecture du texte, angle, cohérence des choix scéniques","pts":6},{"c":"Entretien de la création : explicitation et analyse","pts":4},{"c":"Interprétation : voix, corps, espace, engagement","pts":6},{"c":"Entretien de l'interprétation : dramaturgie, références, capacité à rejouer","pts":4}],
    },
  ],
};
