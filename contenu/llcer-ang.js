// Langues, littératures et cultures étrangères (LLCER) anglais — spécialité, terminale voie générale. Sources : voir matiere.sources.
// Programme : BO spécial n° 8 du 25 juillet 2019 ; œuvres : programme limitatif 2026-2028 (BO n° 21 du 21 mai 2026).
// Épreuve : écrit 3 h 30 (synthèse et traduction ou transposition) et oral de 20 minutes sur dossier, chacun pour moitié.
export default {
  matiere: {
    id: 'llcer-ang',
    nom: 'LLCER anglais',
    voie: 'generale',
    epreuve: { type: 'ecrit', duree: 210, coef: 16, quand: 'juin (écrit) et juin-juillet (oral)', note: 'Écrit de 3 h 30 (synthèse de documents en anglais, environ 500 mots, et traduction ou transposition) et oral de 20 minutes sans préparation sur un dossier personnel ; écrit et oral comptent chacun pour moitié' },
    sources: [
      "https://eduscol.education.gouv.fr/sites/default/files/document/26-llceranag1-128352.pdf",
      "https://www.education.gouv.fr/bo/2026/Hebdo21/MENE2611474N",
      "https://www.education.gouv.fr/bo/20/Special7/MENE2019311N.htm",
      "https://anglais.ac-normandie.fr/Programme-limitatif-pour-l-enseignement-de-specialite-de-LLCER-en-Terminale",
      "https://pedagogie.ac-orleans-tours.fr/documents/pdf/2025-evaluation_lve_au_baccalaureat-ma_j_juin_2025.pdf",
      "https://www.sujetdebac.fr/annales/spe-llcer-anglais-2026-metropole",
      "https://www.sujetdebac.fr/annales/spe-llcer-anglais-2025-centres-etrangers",
    ],
    chapitres: [
      { id: "llcer-ang-1", t: "Arts et débats d'idées : art et contestation", theme: "Arts et débats d'idées" },
      { id: "llcer-ang-2", t: "Arts et débats d'idées : l'art qui fait débat", theme: "Arts et débats d'idées" },
      { id: "llcer-ang-3", t: "Arts et débats d'idées : l'art du débat", theme: "Arts et débats d'idées" },
      { id: "llcer-ang-4", t: "Expression et construction de soi : l'expression des émotions", theme: "Expression et construction de soi" },
      { id: "llcer-ang-5", t: "Expression et construction de soi : mise en scène de soi", theme: "Expression et construction de soi" },
      { id: "llcer-ang-6", t: "Expression et construction de soi : initiation, apprentissage", theme: "Expression et construction de soi" },
      { id: "llcer-ang-7", t: "Voyages, territoires, frontières : exploration et aventure", theme: "Voyages, territoires, frontières" },
      { id: "llcer-ang-8", t: "Voyages, territoires, frontières : ancrage et héritage", theme: "Voyages, territoires, frontières" },
      { id: "llcer-ang-9", t: "Voyages, territoires, frontières : migration et exil", theme: "Voyages, territoires, frontières" },
      { id: "llcer-ang-10", t: "Méthode : la synthèse de documents", theme: "Méthode de l'écrit" },
      { id: "llcer-ang-11", t: "Méthode : traduction et transposition", theme: "Méthode de l'écrit" },
    ],
  },
  paquets: [
    {
      chapitre: "llcer-ang-1",
      fiche: `## Art et contestation

Dans le monde anglophone, l'art sert souvent à **protester** : dénoncer une injustice, se moquer du pouvoir, faire entendre ceux qu'on n'écoute pas. Le bac attend que tu saches montrer **comment** une œuvre conteste (par quels moyens) et **ce qu'elle change** (ou ne change pas).

### Le vocabulaire à connaître
- **to protest against** : protester contre ; **a protest** : une manifestation, une protestation.
- **to denounce / to condemn** : dénoncer, condamner ; **to expose** : révéler, mettre au jour.
- **dissent** : la contestation, le désaccord ; **a dissenter / a dissident** : un opposant.
- **to challenge** : remettre en cause (et non « challenger ») ; **to undermine** : saper.
- **censorship** : la censure ; **to ban** : interdire ; **to silence** : faire taire.
- **a satire** : une satire ; **satirical** : satirique ; **to mock / to ridicule** : se moquer de.
- **a protest song** : une chanson engagée ; **committed art** : l'art engagé.
- **oppression, injustice, inequality, civil rights** : oppression, injustice, inégalité, droits civiques.
- **a dystopia** : une contre-utopie (un monde futur cauchemardesque) ; **dystopian** : dystopique.
- **to raise awareness** : sensibiliser ; **to speak out** : prendre la parole publiquement.

### Les grands repères
- **Jonathan Swift**, *A Modest Proposal* (1729) : pamphlet satirique qui « propose » de manger les enfants des pauvres irlandais pour dénoncer la misère causée par les propriétaires anglais. L'**ironie** dit le contraire de ce qu'elle pense.
- **Charles Dickens**, *Oliver Twist* (1838) : le roman dénonce les **workhouses** et le sort des enfants pauvres dans l'Angleterre victorienne.
- **Harriet Beecher Stowe**, *Uncle Tom's Cabin* (1852) : roman contre l'**esclavage**, qui a pesé sur le débat avant la guerre de Sécession.
- **George Orwell**, *Animal Farm* (1945) et *Nineteen Eighty-Four* (1949) : critique des régimes totalitaires ; « **Big Brother is watching you** », la **Thought Police**, la **Newspeak**.
- **Billie Holiday**, « **Strange Fruit** » (1939) : chanson contre les **lynchages** dans le Sud des États-Unis.
- **Bob Dylan**, « Blowin' in the Wind » (1962), et les chansons du **Civil Rights Movement** ; **Nina Simone**, « Mississippi Goddam » (1964).
- **Banksy** : artiste de **street art** britannique anonyme ; ses pochoirs (**stencils**) critiquent la guerre, la surveillance, la société de consommation.
- La **Harlem Renaissance** (années 1920) : écrivains et musiciens noirs (**Langston Hughes**) affirment leur culture face au racisme.

### L'œuvre au programme : The Handmaid's Tale
- **Margaret Atwood** (autrice canadienne), *The Handmaid's Tale* (1985), roman au programme limitatif 2026-2028.
- Dans un futur proche, les États-Unis sont devenus **Gilead**, une **théocratie** qui a retiré tous leurs droits aux femmes. Les **Handmaids** (servantes écarlates) doivent porter les enfants des **Commanders**.
- La narratrice, **Offred**, raconte sa vie au présent et se souvient de sa vie d'avant. Son nom signifie « of Fred » : elle appartient à son Commander.
- La contestation passe par de petits gestes : se souvenir, raconter, une phrase en faux latin gravée dans un placard, le réseau secret **Mayday**, l'amie rebelle **Moira**.
- Le roman se termine par des **Historical Notes** : des universitaires, en 2195, étudient le récit d'Offred. Atwood dit n'avoir rien inventé qui n'ait déjà existé quelque part.
- La série télévisée (2017) a fait de la tenue rouge un **symbole de manifestation** pour les droits des femmes.

### Comment une œuvre conteste
- **L'ironie et la satire** : faire rire pour dénoncer (Swift, Orwell).
- **La dystopie** : grossir les tendances du présent pour avertir (Atwood, Orwell).
- **Le témoignage** : donner une voix à ceux qui n'en ont pas (Offred, les chansons du mouvement des droits civiques).
- **Le symbole** : une image forte qui circule (la tenue rouge, un pochoir de Banksy).

### À retenir pour le bac
- Toujours dire **qui** conteste, **quoi**, **comment** (procédés) et **avec quel effet**.
- Ne pas confondre **to protest against** (protester contre) et le faux ami « protester » de façon vague.
- *The Handmaid's Tale* : Gilead, Offred, Handmaids, Commanders, Historical Notes.
- Une phrase utile : « The artist uses irony to expose… / The work challenges the idea that… ».`,
      cartes: [
        { q: "Traduire en anglais : la censure", r: "Censorship. Interdire = to ban ; censurer = to censor." },
        { q: "Que signifie « to challenge » ?", r: "Remettre en cause, contester. Ce n'est pas « challenger »." },
        { q: "Traduire en anglais : une chanson engagée", r: "A protest song." },
        { q: "Que signifie « dissent » ?", r: "La contestation, le désaccord avec le pouvoir ou l'opinion dominante." },
        { q: "Traduire en anglais : sensibiliser le public", r: "To raise (public) awareness." },
        { q: "Que signifie « to undermine » ?", r: "Saper, affaiblir peu à peu (une autorité, une idée)." },
        { q: "Qu'est-ce qu'une dystopie ?", r: "Un récit qui décrit un futur cauchemardesque pour mettre en garde contre des tendances du présent." },
        { q: "Que dénonce A Modest Proposal de Swift (1729) ?", r: "La misère des Irlandais pauvres : il « propose » de manger leurs enfants. C'est une satire ironique." },
        { q: "Que dénonce « Strange Fruit », chanté par Billie Holiday (1939) ?", r: "Les lynchages de Noirs dans le Sud des États-Unis." },
        { q: "Qui est Banksy ?", r: "Un artiste de street art britannique anonyme, dont les pochoirs critiquent la guerre, la surveillance et la société de consommation." },
        { q: "Qui a écrit The Handmaid's Tale, et quand ?", r: "Margaret Atwood, autrice canadienne, en 1985." },
        { q: "Qu'est-ce que Gilead dans The Handmaid's Tale ?", r: "La théocratie qui a remplacé les États-Unis et retiré leurs droits aux femmes." },
        { q: "Que signifie le nom « Offred » ?", r: "« Of Fred » : la servante appartient à son Commander, Fred. Elle a perdu son vrai nom." },
        { q: "Que sont les Historical Notes à la fin du roman d'Atwood ?", r: "Un colloque d'universitaires, en 2195, qui étudie le récit d'Offred comme un document du passé." },
        { q: "Qu'invente Orwell dans Nineteen Eighty-Four (1949) ?", r: "Big Brother, la Thought Police et la Newspeak : un État totalitaire qui contrôle même la pensée." },
      ],
      quiz: [
        { q: "Comment dit-on « la censure » en anglais ?", choix: ["Censorship","Censure","Censoring law","Banishment"], bonne: 0, expl: "Censorship est la censure. Censure, en anglais, veut dire blâme.", niv: 1 },
        { q: "Que signifie « to challenge an idea » ?", choix: ["Défier quelqu'un en duel","Remettre en cause une idée","Présenter une idée nouvelle","Accepter une idée sans débat"], bonne: 1, expl: "To challenge = contester, remettre en question. Ne pas traduire par « challenger ».", niv: 1 },
        { q: "Qui a écrit The Handmaid's Tale ?", choix: ["Margaret Atwood","Toni Morrison","Chimamanda Adichie","Arundhati Roy"], bonne: 0, expl: "Margaret Atwood, autrice canadienne, a publié le roman en 1985.", niv: 1 },
        { q: "Quel artiste britannique anonyme est connu pour ses pochoirs engagés ?", choix: ["Banksy","Andy Warhol","David Hockney","Keith Haring"], bonne: 0, expl: "Banksy garde son identité secrète ; ses pochoirs critiquent la guerre et la surveillance.", niv: 1 },
        { q: "Dans The Handmaid's Tale, quel est le rôle des Handmaids ?", choix: ["Commander les soldats de Gilead","Porter les enfants des Commanders","Enseigner aux filles des Commanders","Surveiller en secret les autres femmes"], bonne: 1, expl: "Les Handmaids sont réduites à leur capacité d'avoir des enfants pour les familles des Commanders.", niv: 2 },
        { q: "Pourquoi Swift propose-t-il de manger les enfants pauvres dans A Modest Proposal ?", choix: ["Pour défendre une vraie réforme agricole","Pour se moquer des enfants irlandais","Pour dénoncer la misère par l'ironie","Pour décrire une coutume ancienne"], bonne: 2, expl: "Swift dit le contraire de ce qu'il pense : l'horreur de la proposition révèle l'horreur de la situation.", niv: 2 },
        { q: "Que dénonce la chanson « Strange Fruit » ?", choix: ["Les lynchages dans le Sud des États-Unis","Les bombardements de la guerre du Vietnam","Les conditions de travail dans les usines","Les interdictions faites aux chanteurs noirs"], bonne: 0, expl: "Les « fruits étranges » pendus aux arbres sont les victimes des lynchages.", niv: 2 },
        { q: "Comment traduire « to raise awareness » ?", choix: ["Lever la main","Élever le niveau","Faire grandir l'espoir","Sensibiliser"], bonne: 3, expl: "To raise awareness = sensibiliser, faire prendre conscience.", niv: 2 },
        { q: "Quel procédé définit une dystopie ?", choix: ["Un monde idéal, sans conflit ni injustice, à imiter","Un récit réaliste qui reconstitue le passé lointain","Un futur sombre qui grossit les dangers du présent","Un conte merveilleux destiné d'abord aux enfants"], bonne: 2, expl: "La dystopie avertit : elle pousse jusqu'au bout des tendances qui existent déjà.", niv: 2 },
        { q: "Quel roman de Dickens dénonce les workhouses et le sort des enfants pauvres ?", choix: ["Oliver Twist","Great Expectations","A Christmas Carol","Hard Times"], bonne: 0, expl: "Oliver Twist (1838) suit un orphelin né dans une workhouse.", niv: 2 },
        { q: "Que montrent les Historical Notes qui terminent The Handmaid's Tale ?", choix: ["Qu'Offred est devenue Commander","Que Gilead a fini par tomber","Que Gilead règne encore en 2195","Qu'Offred a tout inventé"], bonne: 1, expl: "Des universitaires étudient le régime comme un passé révolu : Gilead n'existe plus.", niv: 3 },
        { q: "Pourquoi la tenue rouge des Handmaids est-elle devenue un symbole de manifestation ?", choix: ["Elle évoque la perte des droits des femmes","Elle rappelle l'uniforme d'une armée ancienne","Elle annonce une fête nationale américaine","Elle fait la publicité d'une marque de mode"], bonne: 0, expl: "Depuis la série de 2017, des manifestantes la portent pour défendre les droits des femmes.", niv: 3 },
        { q: "Dans une synthèse, quelle phrase présente le mieux un procédé de contestation ?", choix: ["The author uses irony to expose injustice.","The author is very angry and very sad about it.","The author likes protest and writes about it a lot.","The author writes a good text that is interesting."], bonne: 0, expl: "Il faut nommer le procédé (irony) et son effet (to expose injustice).", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-ang-2",
      fiche: `## L'art qui fait débat

Certaines œuvres **choquent**, sont **interdites**, attaquées en justice ou retirées de l'espace public. Le débat porte sur des questions qui reviennent : jusqu'où va la **liberté d'expression** ? L'art doit-il être **moral** ? **Qui** a le droit de raconter une histoire ? Que faire des **monuments** d'un passé violent ?

### Le vocabulaire à connaître
- **controversial** : controversé ; **a controversy** : une polémique ; **to spark / to stir up a debate** : déclencher un débat.
- **to shock / to offend** : choquer, offenser ; **outrage** : l'indignation, le scandale ; **outrageous** : scandaleux.
- **freedom of speech / of expression** : la liberté d'expression ; **the First Amendment** : le premier amendement de la Constitution américaine, qui la protège.
- **obscenity** : l'obscénité ; **blasphemy** : le blasphème ; **a trial** : un procès.
- **to ban a book** : interdire un livre ; **a book ban** ; **to remove** : retirer.
- **a statue / a monument / a memorial** ; **to tear down / to topple** : renverser, déboulonner.
- **cancel culture** : le fait de boycotter publiquement une personne ou une œuvre jugée offensante.
- **representation** : la façon dont un groupe est montré ; **cultural appropriation** : l'appropriation culturelle.
- **public funding** : l'argent public ; **taxpayers** : les contribuables.

### Les grands repères
- **James Joyce**, *Ulysses* (1922) : interdit aux États-Unis pour obscénité, jusqu'à un jugement de **1933** qui l'autorise.
- **D. H. Lawrence**, *Lady Chatterley's Lover* : en **1960**, l'éditeur **Penguin** est jugé pour obscénité au Royaume-Uni et **acquitté**. Le procès marque la fin d'une époque de censure.
- **Salman Rushdie**, *The Satanic Verses* (1988) : jugé blasphématoire par certains ; en **1989**, une **fatwa** iranienne appelle à tuer l'auteur. Il vit caché pendant des années et est gravement blessé lors d'une attaque en 2022.
- **Mark Twain**, *Adventures of Huckleberry Finn* (1884) : retiré de certaines écoles américaines à cause de son langage raciste, alors que le roman critique l'esclavage.
- L'**art contemporain** britannique : le requin dans le formol de **Damien Hirst** (1991), le lit défait de **Tracey Emin**, *My Bed* (1998). La question : « Is it art? »
- **Edward Colston** : en **juin 2020**, à **Bristol**, la statue de ce marchand d'esclaves est renversée et jetée dans le port pendant les manifestations **Black Lives Matter**. Le mouvement **Rhodes Must Fall** vise, lui, la statue de Cecil Rhodes.
- Aux États-Unis, les **book bans** dans les écoles visent souvent des livres sur la race ou le genre, et font débat chaque année.

### L'œuvre au programme : Killers of the Flower Moon
- Film de **Martin Scorsese** (2023), tiré du livre-enquête de **David Grann** (2017). Il fait partie du programme limitatif 2026-2028.
- Dans l'**Oklahoma** des années 1920, la nation amérindienne **Osage** est devenue riche grâce au **pétrole** de ses terres. Des Blancs organisent le meurtre de dizaines d'Osages pour récupérer leurs droits (**headrights**) : c'est le « **Reign of Terror** ».
- **Ernest Burkhart** (Leonardo DiCaprio) épouse **Mollie Kyle** (Lily Gladstone), une Osage, sous l'influence de son oncle **William Hale** (Robert De Niro), qui commandite les crimes. Les sœurs de Mollie sont tuées une à une.
- **Le débat** : le livre suivait surtout l'enquêteur fédéral ; Scorsese a choisi de raconter l'histoire à travers le couple Ernest et Mollie, après avoir consulté la nation Osage. Certains Osages ont salué le respect de leur langue et de leurs costumes ; d'autres ont regretté que le récit passe par le regard du meurtrier blanc. C'est la question : **qui raconte l'histoire de qui ?**
- **Lily Gladstone** a reçu un Golden Globe en 2024, une première pour une actrice amérindienne.
- À la fin, une émission de radio raconte la suite ; Scorsese y apparaît lui-même pour lire la notice nécrologique de Mollie.

### Les arguments à savoir manier
- **Pour la liberté de l'artiste** : l'art doit pouvoir déranger ; juger une œuvre du passé avec les valeurs d'aujourd'hui est un **anachronisme**.
- **Pour des limites** : une œuvre peut blesser ; il faut écouter ceux qu'elle représente ; l'argent public engage la collectivité.
- **Une voie médiane** : expliquer plutôt qu'effacer (**to contextualise**) : un panneau près d'une statue, une préface à un livre, un musée.

### À retenir pour le bac
- Savoir citer un exemple de censure (Ulysses, Lady Chatterley), de violence contre un auteur (Rushdie) et de débat sur les statues (Colston).
- *Killers of the Flower Moon* : Osage, pétrole, headrights, Reign of Terror, Ernest, Mollie, Hale ; le débat sur le point de vue.
- Une formule utile : « The work sparked a heated debate about… ».`,
      cartes: [
        { q: "Traduire en anglais : controversé", r: "Controversial. Une polémique = a controversy." },
        { q: "Que signifie « to spark a debate » ?", r: "Déclencher un débat." },
        { q: "Traduire en anglais : la liberté d'expression", r: "Freedom of speech (ou freedom of expression)." },
        { q: "Que signifie « outrage » ?", r: "L'indignation, le scandale. Ce n'est pas « l'outrage » au sens juridique français." },
        { q: "Traduire en anglais : déboulonner une statue", r: "To topple (ou to tear down) a statue." },
        { q: "Que protège le premier amendement américain ?", r: "La liberté d'expression, de la presse et de religion." },
        { q: "Qu'est-ce que le procès de Lady Chatterley's Lover (1960) ?", r: "Penguin, jugé pour obscénité au Royaume-Uni pour le roman de D. H. Lawrence, est acquitté : la censure recule." },
        { q: "Pourquoi The Satanic Verses a-t-il fait scandale ?", r: "Jugé blasphématoire, il a valu à Salman Rushdie une fatwa iranienne en 1989 appelant à le tuer." },
        { q: "Que s'est-il passé à Bristol en juin 2020 ?", r: "La statue du marchand d'esclaves Edward Colston a été renversée et jetée dans le port pendant des manifestations Black Lives Matter." },
        { q: "Qu'est-ce que la cancel culture ?", r: "Le boycott public d'une personne ou d'une œuvre jugée offensante." },
        { q: "Qui a réalisé Killers of the Flower Moon, et quand ?", r: "Martin Scorsese, en 2023, d'après le livre de David Grann (2017)." },
        { q: "Quel est le sujet de Killers of the Flower Moon ?", r: "Le meurtre de dizaines d'Osages, enrichis par le pétrole, par des Blancs qui veulent leurs droits (Oklahoma, années 1920)." },
        { q: "Qui sont Ernest, Mollie et Hale dans le film de Scorsese ?", r: "Ernest Burkhart épouse l'Osage Mollie Kyle ; son oncle William Hale commandite les meurtres." },
        { q: "Quel débat a suscité Killers of the Flower Moon ?", r: "Le récit passe par le regard d'Ernest, le meurtrier blanc : qui a le droit de raconter l'histoire des Osages ?" },
        { q: "Que signifie « to contextualise » une œuvre ?", r: "L'expliquer avec son époque (panneau, préface) plutôt que l'effacer." },
      ],
      quiz: [
        { q: "Comment traduire « controversial » ?", choix: ["Contradictoire","Controversé","Contrôlé","Conventionnel"], bonne: 1, expl: "Controversial = qui fait polémique.", niv: 1 },
        { q: "Que signifie « to topple a statue » ?", choix: ["Restaurer une statue abîmée","Inaugurer une statue récente","Renverser une statue","Déplacer une statue au musée"], bonne: 2, expl: "To topple = faire tomber, renverser.", niv: 1 },
        { q: "Quelle nation amérindienne est au cœur de Killers of the Flower Moon ?", choix: ["Les Sioux","Les Cherokees","Les Navajos","Les Osages"], bonne: 3, expl: "Les Osages, enrichis par le pétrole de l'Oklahoma, sont assassinés pour leurs droits.", niv: 1 },
        { q: "Quel auteur a été visé par une fatwa en 1989 ?", choix: ["James Joyce","George Orwell","Salman Rushdie","D. H. Lawrence"], bonne: 2, expl: "La fatwa iranienne de 1989 visait l'auteur de The Satanic Verses.", niv: 1 },
        { q: "Pourquoi Ulysses de Joyce a-t-il été interdit aux États-Unis ?", choix: ["Pour trahison envers l'État","Pour obscénité","Pour atteinte à la monarchie","Pour diffusion de fausses nouvelles"], bonne: 1, expl: "Ulysses a été jugé obscène, puis autorisé par un jugement de 1933.", niv: 2 },
        { q: "Quelle statue a été jetée dans le port de Bristol en 2020 ?", choix: ["Celle d'Edward Colston","Celle de la reine Victoria","Celle de Winston Churchill","Celle de Cecil Rhodes à Oxford"], bonne: 0, expl: "Colston était un marchand d'esclaves ; la statue de Rhodes, elle, est restée à Oxford.", niv: 2 },
        { q: "Comment dit-on « la liberté d'expression » en anglais ?", choix: ["Liberty of speaking","Freedom of speech","Free speaking law","Right of talking"], bonne: 1, expl: "Freedom of speech (ou of expression) est l'expression consacrée.", niv: 2 },
        { q: "Que signifie le mot anglais « outrage » ?", choix: ["Une insulte à un policier","L'indignation générale","Un dépassement de limite","Une erreur de traduction"], bonne: 1, expl: "Outrage = indignation, scandale. Faux ami avec l'outrage du droit français.", niv: 2 },
        { q: "Dans Killers of the Flower Moon, quel personnage commandite les meurtres ?", choix: ["Ernest Burkhart","Tom White","Mollie Kyle","William Hale"], bonne: 3, expl: "Hale, l'oncle d'Ernest, se présente comme l'ami des Osages tout en organisant les crimes.", niv: 2 },
        { q: "Que veulent récupérer les meurtriers dans Killers of the Flower Moon ?", choix: ["Les chevaux des réserves","Les terres agricoles du Texas","Les mines d'or du Nevada","Les headrights des Osages"], bonne: 3, expl: "Les headrights donnent droit aux revenus du pétrole : les tuer permet d'en hériter.", niv: 2 },
        { q: "Quelle critique certains Osages ont-ils faite au film de Scorsese ?", choix: ["Le récit passe par le regard du meurtrier","Le film est tourné dans une autre langue","Le film invente des meurtres qui n'ont pas eu lieu","Les rôles osages sont joués par des Blancs"], bonne: 0, expl: "Le film respecte la langue osage, mais centre l'histoire sur Ernest, ce que certains ont regretté.", niv: 3 },
        { q: "Quel argument défend une œuvre ancienne jugée choquante aujourd'hui ?", choix: ["Elle rapporte encore beaucoup d'argent aux librairies","Personne ne la lit plus depuis longtemps","La juger avec nos valeurs serait anachronique","Elle a été écrite par un auteur célèbre"], bonne: 2, expl: "L'argument de l'anachronisme : une œuvre se comprend aussi avec son époque.", niv: 3 },
        { q: "Quelle phrase introduit le mieux un paragraphe sur une polémique ?", choix: ["The film is a debate and it is heated and hot.","The film made people speak very much about it.","The film was very controversed by a lot of people in America.","The film sparked a heated debate about representation."], bonne: 3, expl: "To spark a debate et representation sont les bons mots ; « controversed » n'existe pas.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-ang-3",
      fiche: `## L'art du débat

Le monde anglophone a une longue tradition du **débat** : au Parlement britannique, dans les clubs de débat des universités, dans les tribunaux et les discours politiques. Cet axe étudie **l'art de convaincre** : la rhétorique, l'éloquence, et la façon dont la fiction met en scène la délibération.

### Le vocabulaire à connaître
- **to argue** : soutenir, faire valoir (et aussi se disputer) ; **an argument** : un argument, mais aussi une dispute.
- **to convince / to persuade** : convaincre, persuader ; **persuasive / compelling** : convaincant.
- **rhetoric** : la rhétorique ; **a rhetorical question** : une question rhétorique ; **a speech** : un discours.
- **to make a point** : avancer un argument ; **to back up** : appuyer, étayer ; **evidence** : les preuves (indénombrable : *some evidence*, jamais *an evidence*).
- **to refute / to rebut** : réfuter ; **a counter-argument** : un contre-argument.
- **to agree with / to disagree with** : être d'accord / pas d'accord avec. Attention : on dit *I agree*, jamais *I am agree*.
- **a jury / a juror** : un jury / un juré ; **a verdict** ; **guilty / not guilty** : coupable / non coupable ; **reasonable doubt** : le doute raisonnable.
- **unanimous** : unanime ; **a deadlock** : une impasse.
- **a motion** : la proposition débattue ; **the House** : la Chambre (des Communes).

### Les grands repères
- **Ethos, pathos, logos** : les trois moyens de convaincre selon Aristote : l'autorité de l'orateur, l'émotion, la logique.
- **Shakespeare**, *Julius Caesar* : après le meurtre de César, **Mark Antony** retourne la foule par un discours plein d'ironie (« Friends, Romans, countrymen, lend me your ears »).
- **Abraham Lincoln**, le **Gettysburg Address** (1863) : un discours de deux minutes sur la démocratie, « government of the people, by the people, for the people ».
- **Winston Churchill**, discours de 1940 (« We shall fight on the beaches », « blood, toil, tears and sweat ») : l'éloquence en temps de guerre.
- **Martin Luther King**, « **I Have a Dream** » (1963), à Washington : répétitions (**anaphora**), images bibliques, rythme.
- **Prime Minister's Questions** : chaque mercredi, le Premier ministre britannique répond aux questions des députés, face à face, dans la Chambre des Communes.
- L'**Oxford Union** : club de débat étudiant célèbre, où l'on vote pour ou contre une **motion**.
- **Emmeline Pankhurst** et les **suffragettes** (« Deeds, not words ») : quand le débat ne suffit plus, on passe à l'action.

### L'œuvre au programme : 12 Angry Men
- Film de **Sidney Lumet** (**1957**), d'après une pièce télévisée de **Reginald Rose**. Il fait partie du programme limitatif 2026-2028.
- Presque tout le film se passe dans **une seule pièce** : la salle où délibère un **jury** de douze hommes, par une journée très chaude.
- Un jeune homme de 18 ans est accusé d'avoir tué son père. Le verdict doit être **unanime** ; s'il est coupable, c'est la **peine de mort**.
- Au premier vote, onze jurés votent « guilty ». Seul le **Juror 8** (Henry Fonda) vote « not guilty » : il n'est pas sûr de l'innocence, mais il veut **en parler**.
- Il démonte les preuves une à une : le couteau à cran d'arrêt qui n'est pas si rare (il en a acheté un pareil), le vieil homme qui n'a pas pu tout entendre au passage du métro aérien, la voisine qui ne portait pas ses lunettes.
- Les préjugés apparaissent : le **Juror 10** tient un discours raciste et les autres lui tournent le dos ; le **Juror 3**, le dernier à céder, projette sur l'accusé son conflit avec son propre fils.
- À la fin, le vote est de **12 « not guilty »** : le film défend le **doute raisonnable** et montre que la délibération peut vaincre les préjugés. Les personnages n'ont pas de nom, seulement un numéro.

### Les procédés d'un discours
- **Anaphora** : répéter le même début de phrase (« I have a dream… »).
- **Rhetorical question** : une question qui n'attend pas de réponse.
- **The rule of three** : les listes de trois éléments, faciles à retenir.
- **Inclusive « we »** : faire de l'auditoire un allié.

### À retenir pour le bac
- Ethos, pathos, logos ; anaphore ; question rhétorique.
- *12 Angry Men* : un huis clos, un juré contre onze, le doute raisonnable, les préjugés.
- Piège de langue : *evidence* est indénombrable ; *I agree* (sans *am*) ; *an argument* peut vouloir dire « une dispute ».`,
      cartes: [
        { q: "Traduire en anglais : convaincant", r: "Convincing, persuasive ou compelling." },
        { q: "Que signifie « evidence » ?", r: "Les preuves. Le mot est indénombrable : some evidence, a piece of evidence." },
        { q: "Traduire en anglais : un juré", r: "A juror. Le jury = the jury." },
        { q: "Que signifie « reasonable doubt » ?", r: "Le doute raisonnable : s'il existe, l'accusé doit être déclaré non coupable." },
        { q: "Traduire en anglais : réfuter un argument", r: "To refute (ou to rebut) an argument." },
        { q: "Comment dire « je suis d'accord » en anglais ?", r: "I agree (et non « I am agree »)." },
        { q: "Que sont ethos, pathos et logos ?", r: "Les trois moyens de convaincre selon Aristote : l'autorité de l'orateur, l'émotion, la logique." },
        { q: "Qu'est-ce qu'une anaphore (anaphora) ?", r: "La répétition du même début de phrase, comme « I have a dream » chez Martin Luther King." },
        { q: "Quelle formule résume la démocratie dans le Gettysburg Address de Lincoln (1863) ?", r: "« Government of the people, by the people, for the people »." },
        { q: "Qu'est-ce que l'Oxford Union ?", r: "Un célèbre club de débat étudiant, où l'on vote pour ou contre une motion." },
        { q: "Qui a réalisé 12 Angry Men, et quand ?", r: "Sidney Lumet, en 1957, d'après une pièce télévisée de Reginald Rose." },
        { q: "Quelle est la situation de départ de 12 Angry Men ?", r: "Onze jurés votent coupable ; seul le Juror 8 vote non coupable et demande d'en discuter." },
        { q: "Comment le Juror 8 fait-il douter les autres ?", r: "Il démonte les preuves : le couteau courant, le témoin gêné par le bruit du métro, la voisine sans lunettes." },
        { q: "Quel est le verdict final de 12 Angry Men ?", r: "Douze votes « not guilty » : le doute raisonnable l'emporte." },
        { q: "Quel discours de Shakespeare retourne une foule ?", r: "Celui de Mark Antony dans Julius Caesar (« Friends, Romans, countrymen… »)." },
      ],
      quiz: [
        { q: "Comment traduire « evidence » dans un tribunal ?", choix: ["L'évidence","Le témoin","Les preuves","La plaidoirie"], bonne: 2, expl: "Evidence = les preuves. Faux ami : « une évidence » se dit something obvious.", niv: 1 },
        { q: "Qui a réalisé 12 Angry Men ?", choix: ["Sidney Lumet","Martin Scorsese","Kenneth Branagh","Alfred Hitchcock"], bonne: 0, expl: "Sidney Lumet a réalisé le film en 1957.", niv: 1 },
        { q: "Quelle phrase est correcte ?", choix: ["I agree with you.","I am agree with you.","I am agreeing you.","I agree to you about."], bonne: 0, expl: "To agree est un verbe : pas de « am » devant.", niv: 1 },
        { q: "Quel moyen de convaincre repose sur l'émotion, selon Aristote ?", choix: ["Ethos","Logos","Pathos","Kairos"], bonne: 2, expl: "Pathos = émotion ; ethos = autorité ; logos = logique.", niv: 1 },
        { q: "Au premier vote de 12 Angry Men, combien de jurés votent « not guilty » ?", choix: ["Six","Onze","Un seul","Douze"], bonne: 2, expl: "Seul le Juror 8 vote non coupable, contre onze.", niv: 2 },
        { q: "Pourquoi le Juror 8 vote-t-il « not guilty » au début ?", choix: ["Il connaît bien l'accusé depuis l'enfance","Il veut d'abord discuter des preuves","Il est sûr d'avoir vu le vrai coupable","Il veut rentrer chez lui plus tôt ce soir"], bonne: 1, expl: "Il n'affirme pas l'innocence : il refuse d'envoyer un homme à la mort sans en parler.", niv: 2 },
        { q: "Quel procédé utilise « I have a dream », repris plusieurs fois ?", choix: ["L'oxymore","La litote","L'ellipse","L'anaphore"], bonne: 3, expl: "Répéter le même début de phrase crée le rythme du discours.", niv: 2 },
        { q: "Que signifie « to back up an argument » ?", choix: ["Étayer un argument","Abandonner un argument","Reculer devant un argument","Sauvegarder un argument"], bonne: 0, expl: "To back up = appuyer, soutenir avec des preuves ou des exemples.", niv: 2 },
        { q: "Dans 12 Angry Men, comment le Juror 8 prouve-t-il que le couteau n'est pas rare ?", choix: ["Il appelle un vendeur d'armes","Il en sort un identique","Il lit un rapport de police","Il interroge l'accusé"], bonne: 1, expl: "Il a acheté un couteau identique dans le quartier de l'accusé.", niv: 2 },
        { q: "Que se passe-t-il quand le Juror 10 tient un discours raciste ?", choix: ["Les autres jurés l'applaudissent","Le juge arrête la délibération","Il convainc le Juror 8 de changer d'avis","Les autres jurés lui tournent le dos"], bonne: 3, expl: "Ce geste silencieux montre que ses préjugés ne convainquent plus personne.", niv: 2 },
        { q: "Pourquoi le Juror 3 est-il le dernier à voter « not guilty » ?", choix: ["Il a été payé en secret par la famille de la victime","Il projette sur l'accusé le conflit avec son fils","Il était témoin du crime cette nuit-là","Il ne comprend pas bien l'anglais"], bonne: 1, expl: "Sa colère contre son propre fils l'empêche de juger avec raison.", niv: 3 },
        { q: "Quelle idée défend 12 Angry Men ?", choix: ["Un jury populaire se trompe le plus souvent","La délibération peut vaincre les préjugés","Les preuves matérielles suffisent à juger","La peine de mort protège les innocents"], bonne: 1, expl: "En discutant, les jurés passent de onze « guilty » à douze « not guilty ».", niv: 3 },
        { q: "Comment traduire « He made a compelling point » ?", choix: ["Il a fait un point obligatoire","Il a marqué un point de force","Il a obligé les autres jurés à se taire enfin","Il a avancé un argument convaincant"], bonne: 3, expl: "To make a point = avancer un argument ; compelling = convaincant.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-ang-4",
      fiche: `## L'expression des émotions

Comment dire l'amour, la colère, le deuil ou la peur ? La littérature, le théâtre, la musique et le cinéma anglophones ont inventé des formes pour exprimer les émotions, mais aussi pour montrer celles que l'on **cache** ou que l'on **ne peut pas dire**.

### Le vocabulaire à connaître
- **feelings / emotions** ; **to feel** (felt, felt) ; **to express / to convey** : exprimer, transmettre.
- **joy, grief, sorrow, anger, fear, shame, jealousy** : joie, chagrin du deuil, peine, colère, peur, honte, jalousie.
- **to grieve / to mourn** : être en deuil, pleurer un mort.
- **to be moved / touched** : être ému ; **moving / touching** : émouvant.
- **to burst into tears** : fondre en larmes ; **to hold back one's tears** : retenir ses larmes.
- **to fall in love with** : tomber amoureux de (et non *in love of*).
- **to bottle up / to repress** : refouler ; **to open up** : se confier.
- **a stiff upper lip** : le flegme britannique, l'art de ne pas montrer ses émotions.
- **sensitive** : sensible ; faux ami : **sensible** veut dire raisonnable, sensé.
- **mute / speechless** : muet ; **silence**.

### Les grands repères
- **Shakespeare** : les **sonnets** (« Shall I compare thee to a summer's day? ») et les tragédies d'amour (*Romeo and Juliet*) ; la jalousie dans *Othello*.
- Les **Romantic poets** (début du XIXe siècle) : **William Wordsworth** définit la poésie comme « the spontaneous overflow of powerful feelings » ; **John Keats**, **Lord Byron**, **Percy Shelley**.
- **Emily Brontë**, *Wuthering Heights* (1847) : une passion violente entre Heathcliff et Catherine, dans la lande du Yorkshire.
- Les peintres britanniques **Francis Bacon** et **Lucian Freud** peignent l'angoisse et la chair au XXe siècle.
- Le **blues** afro-américain : chanter la peine pour la rendre supportable.
- Le **stiff upper lip** : idéal britannique de retenue, que la littérature remet souvent en cause (*The Remains of the Day* de **Kazuo Ishiguro**, 1989 : un majordome qui n'a jamais su dire son amour).

### Les œuvres au programme
**Much Ado About Nothing (Kenneth Branagh, 1993)**
- Adaptation de la comédie de **Shakespeare**, tournée en **Toscane** en plein soleil. Branagh joue **Benedick**, **Emma Thompson** joue **Beatrice**.
- Deux couples : **Beatrice et Benedick** se disputent sans cesse (« a merry war ») mais s'aiment sans se l'avouer ; leurs amis les piègent en leur faisant entendre que l'autre est amoureux. **Hero et Claudio** s'aiment au premier regard.
- Le méchant **Don John** fait croire à Claudio que Hero le trompe : Claudio l'humilie le jour de son mariage. On la fait passer pour morte, la vérité éclate grâce au gardien maladroit **Dogberry**, et tout finit par deux mariages.
- Les émotions passent par la parole (les répliques brillantes), mais aussi par la musique et les corps : le film s'ouvre sur la chanson « Sigh no more, ladies ».

**The Piano (Jane Campion, 1993)**
- Film néo-zélandais : vers 1850, **Ada McGrath** (Holly Hunter), une Écossaise **muette** depuis l'âge de six ans, part en **Nouvelle-Zélande** avec sa fille **Flora** pour un mariage arrangé avec **Stewart**.
- Ada s'exprime par le **langage des signes**, des notes écrites et surtout par son **piano**, laissé sur la plage à l'arrivée. Son voisin **Baines** le rachète et propose de le lui rendre touche par touche, contre des « leçons ».
- Stewart, fou de jalousie, lui coupe un doigt. À la fin, Ada choisit de vivre et réapprend à parler.
- Palme d'or au festival de Cannes en 1993 ; Oscars pour Holly Hunter et pour la jeune Anna Paquin.
- L'idée clé : quand on ne peut pas parler, l'émotion passe par la musique, le regard et le geste.

### Comment analyser l'expression d'une émotion
- Repérer le **champ lexical** (lexical field) de l'émotion.
- Observer le **rythme** : phrases courtes (choc), répétitions, exclamations.
- Au cinéma : **close-up** (gros plan sur un visage), musique, lumière, silence.
- Se demander si l'émotion est **dite**, **montrée** ou **cachée**.

### À retenir pour le bac
- Wordsworth : « the spontaneous overflow of powerful feelings ».
- *Much Ado* : Beatrice et Benedick, la « merry war », Hero et Claudio, Don John, Dogberry.
- *The Piano* : Ada muette, la musique comme langage, Baines, Stewart, la Nouvelle-Zélande.
- Pièges : *to fall in love with* ; *sensible* = raisonnable ; *grief* = chagrin du deuil (pas « grief » en français).`,
      cartes: [
        { q: "Traduire en anglais : le chagrin (du deuil)", r: "Grief. Être en deuil = to grieve ou to mourn." },
        { q: "Que signifie « sensible » en anglais ?", r: "Raisonnable, sensé. « Sensible » en français se dit sensitive." },
        { q: "Traduire en anglais : fondre en larmes", r: "To burst into tears." },
        { q: "Que signifie « to bottle up one's feelings » ?", r: "Refouler ses émotions, les garder pour soi." },
        { q: "Traduire en anglais : tomber amoureux de quelqu'un", r: "To fall in love with someone." },
        { q: "Que signifie « a stiff upper lip » ?", r: "Le flegme britannique : ne pas montrer ses émotions." },
        { q: "Traduire en anglais : émouvant", r: "Moving ou touching." },
        { q: "Comment Wordsworth définit-il la poésie ?", r: "« The spontaneous overflow of powerful feelings » : le débordement spontané de sentiments puissants." },
        { q: "Quel roman d'Ishiguro montre un majordome incapable de dire son amour ?", r: "The Remains of the Day (1989)." },
        { q: "Qui jouent Beatrice et Benedick dans Much Ado About Nothing de Branagh (1993) ?", r: "Emma Thompson et Kenneth Branagh lui-même." },
        { q: "Qu'est-ce que la « merry war » de Much Ado About Nothing ?", r: "La joyeuse guerre de mots entre Beatrice et Benedick, qui s'aiment sans se l'avouer." },
        { q: "Quel est le rôle de Don John dans Much Ado About Nothing ?", r: "Le méchant : il fait croire à Claudio que Hero le trompe." },
        { q: "Qui a réalisé The Piano, et quand ?", r: "Jane Campion, en 1993 ; le film a reçu la Palme d'or." },
        { q: "Comment Ada s'exprime-t-elle dans The Piano ?", r: "Elle est muette : par le langage des signes, des notes écrites et surtout son piano." },
        { q: "Où et quand se passe The Piano ?", r: "En Nouvelle-Zélande, vers 1850." },
      ],
      quiz: [
        { q: "Comment traduire « grief » ?", choix: ["Un grief, un reproche","Une grande colère","Le chagrin du deuil","Une blessure grave"], bonne: 2, expl: "Grief = profonde tristesse après une perte. Faux ami.", niv: 1 },
        { q: "Qui a réalisé The Piano ?", choix: ["Sofia Coppola","Kathryn Bigelow","Jane Campion","Greta Gerwig"], bonne: 2, expl: "Jane Campion, réalisatrice néo-zélandaise, a reçu la Palme d'or en 1993.", niv: 1 },
        { q: "Quelle forme est correcte ?", choix: ["She fell in love with him.","She fell in love of him.","She fell in love for him.","She felt in love with him."], bonne: 0, expl: "On dit to fall in love with ; fell est le prétérit de fall.", niv: 1 },
        { q: "Qui a écrit la pièce adaptée par Branagh dans Much Ado About Nothing ?", choix: ["Christopher Marlowe","William Shakespeare","Oscar Wilde","Ben Jonson"], bonne: 1, expl: "Much Ado About Nothing est une comédie de Shakespeare.", niv: 1 },
        { q: "Que signifie « He is a sensible man » ?", choix: ["C'est un homme très émotif","C'est un homme qui pleure facilement","C'est un homme sensible au froid","C'est un homme raisonnable"], bonne: 3, expl: "Sensible = raisonnable ; sensible (français) = sensitive.", niv: 2 },
        { q: "Dans The Piano, pourquoi Ada ne parle-t-elle pas ?", choix: ["Elle ne parle que le gaélique","Son mari le lui interdit","Elle a fait un vœu de silence","Elle est muette depuis l'enfance"], bonne: 3, expl: "Ada a cessé de parler à six ans ; le film ne dit pas pourquoi.", niv: 2 },
        { q: "Comment Baines obtient-il qu'Ada vienne chez lui ?", choix: ["Il lui rend son piano touche par touche","Il lui promet de la ramener en Écosse","Il menace de dénoncer sa fille Flora","Il lui offre un nouveau piano anglais"], bonne: 0, expl: "Il a racheté le piano et propose de le rendre touche par touche, contre des « leçons ».", niv: 2 },
        { q: "Comment Don John brise-t-il le couple de Hero et Claudio ?", choix: ["Il enlève Hero avant le mariage","Il provoque Claudio en duel","Il fait croire que Hero le trompe","Il déclare son amour à Hero"], bonne: 2, expl: "La fausse preuve d'infidélité pousse Claudio à humilier Hero à l'autel.", niv: 2 },
        { q: "Que veut dire « to keep a stiff upper lip » ?", choix: ["Avoir froid aux lèvres","Ne pas montrer ses émotions","Parler avec un fort accent","Refuser de manger quelque chose"], bonne: 1, expl: "C'est l'idéal britannique de retenue face aux épreuves.", niv: 2 },
        { q: "Quel poète définit la poésie comme « the spontaneous overflow of powerful feelings » ?", choix: ["T. S. Eliot","Walt Whitman","Philip Larkin","William Wordsworth"], bonne: 3, expl: "Wordsworth, poète romantique, dans la préface des Lyrical Ballads.", niv: 2 },
        { q: "Au cinéma, quel procédé montre le mieux une émotion sur un visage ?", choix: ["Le plan large (long shot)","La plongée sur la foule","Le gros plan (close-up)","Le fondu au noir final"], bonne: 2, expl: "Le close-up rapproche le spectateur du visage du personnage.", niv: 3 },
        { q: "Dans The Piano, que représente le piano pour Ada ?", choix: ["Sa voix et sa liberté","Un simple héritage familial","Une marchandise à revendre","Un cadeau de son mari Stewart"], bonne: 0, expl: "Muette, Ada parle à travers sa musique : lui prendre le piano, c'est la faire taire.", niv: 3 },
        { q: "Pourquoi Beatrice et Benedick se disputent-ils sans cesse ?", choix: ["Ils se battent pour un héritage familial","Ils appartiennent à deux familles ennemies depuis longtemps","Ils veulent épouser la même personne","Ils cachent leurs sentiments derrière l'humour"], bonne: 3, expl: "La « merry war » de mots masque un amour qu'aucun des deux n'ose avouer.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-ang-5",
      fiche: `## Mise en scène de soi

Chacun se **présente** aux autres : on choisit une image, un rôle, un récit de sa propre vie. Cet axe étudie l'**autoportrait**, l'**autobiographie**, les **masques** et les **réseaux sociaux**, et les personnages qui s'inventent une identité.

### Le vocabulaire à connaître
- **self-portrait** : autoportrait ; **a selfie** ; **self-image** : l'image de soi.
- **an autobiography / a memoir** : une autobiographie, des mémoires ; **a diary / a journal** : un journal intime.
- **to show off** : se mettre en avant, frimer ; **to pretend** : faire semblant (faux ami : prétendre = *to claim*).
- **a mask / a persona** : un masque, un personnage public ; **a fake** : un faux.
- **to fit in** : s'intégrer ; **to stand out** : se démarquer ; **peer pressure** : la pression du groupe.
- **identity** : l'identité ; **to reinvent oneself** : se réinventer.
- **social media / social networks** ; **a follower, an influencer** ; **to post** : publier.
- **appearance** : l'apparence ; **to keep up appearances** : sauver les apparences.
- **a liar / to lie (lied, lied)** : un menteur, mentir ; à ne pas confondre avec **to lie (lay, lain)** : être allongé.

### Les grands repères
- **Shakespeare**, *As You Like It* : « **All the world's a stage**, and all the men and women merely players ».
- **Oscar Wilde**, *The Picture of Dorian Gray* (1890) : le beau Dorian reste jeune ; son portrait vieillit et s'enlaidit à sa place. Wilde : « Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth. »
- **F. Scott Fitzgerald**, *The Great Gatsby* (1925) : James Gatz se réinvente en **Jay Gatsby**, millionnaire mystérieux, pour reconquérir Daisy. Le **self-made man** et le rêve américain.
- **Erving Goffman**, sociologue, *The Presentation of Self in Everyday Life* (1956) : la vie sociale comme une scène, avec un « devant » et des « coulisses ».
- **Cindy Sherman** : photographe américaine qui se met en scène dans des centaines de rôles, sans jamais faire de vrai autoportrait.
- **Andy Warhol** et le **pop art** : « In the future, everyone will be world-famous for 15 minutes. »
- Les **réseaux sociaux** : on publie une version choisie et retouchée de sa vie.

### L'œuvre au programme : The Caretaker
- Pièce de **Harold Pinter** (**1960**), prix Nobel de littérature en 2005. Elle fait partie du programme limitatif 2026-2028.
- Trois personnages dans une pièce encombrée d'une maison de Londres : **Aston**, qui recueille un vieux vagabond ; son frère cadet **Mick** ; et le vagabond, **Davies**.
- Davies **se met en scène** : il dit s'appeler **Bernard Jenkins**, prétend avoir des papiers qui prouvent son identité à **Sidcup**, où il ira « dès que le temps se lèvera », mais n'y va jamais. Il se plaint, se vante, change de version.
- Aston raconte, dans un long monologue, qu'on lui a fait subir des **électrochocs** à l'hôpital psychiatrique. Mick, lui, joue des rôles : tantôt menaçant, tantôt charmeur, il propose à Davies de devenir le gardien (**caretaker**) de la maison.
- Davies essaie de monter les deux frères l'un contre l'autre ; à la fin, il est chassé.
- Le style de Pinter : des dialogues banals où se cache une menace (**comedy of menace**), des **silences** et des **pauses** célèbres, des personnages dont on ne sait jamais s'ils disent la vérité.

### Comment analyser une mise en scène de soi
- Qui parle de soi, à qui, et **pour obtenir quoi** ?
- Quel **écart** entre l'image donnée et la réalité ?
- Quels **indices** révèlent le mensonge ou la fragilité (contradictions, silences) ?

### À retenir pour le bac
- « All the world's a stage » (Shakespeare) ; Dorian Gray et son portrait ; Gatsby qui se réinvente.
- *The Caretaker* : Davies, Aston, Mick, Sidcup, les papiers, la comedy of menace, les pauses.
- Pièges : *to pretend* = faire semblant ; *to lie, lied, lied* = mentir.`,
      cartes: [
        { q: "Traduire en anglais : un autoportrait", r: "A self-portrait." },
        { q: "Que signifie « to pretend » ?", r: "Faire semblant. « Prétendre » se dit to claim." },
        { q: "Traduire en anglais : se démarquer", r: "To stand out. S'intégrer = to fit in." },
        { q: "Que signifie « peer pressure » ?", r: "La pression du groupe, des gens de son âge." },
        { q: "Traduire en anglais : sauver les apparences", r: "To keep up appearances." },
        { q: "Quels sont les deux verbes « to lie » ?", r: "To lie, lied, lied = mentir ; to lie, lay, lain = être allongé." },
        { q: "Quelle phrase de Shakespeare compare le monde à un théâtre ?", r: "« All the world's a stage » (As You Like It)." },
        { q: "Que se passe-t-il dans The Picture of Dorian Gray (Wilde, 1890) ?", r: "Dorian reste jeune et beau ; son portrait vieillit et s'enlaidit à sa place." },
        { q: "Comment Gatsby se met-il en scène ?", r: "James Gatz se réinvente en Jay Gatsby, riche et mystérieux, pour reconquérir Daisy." },
        { q: "Qui est Cindy Sherman ?", r: "Une photographe américaine qui se met en scène dans des centaines de rôles." },
        { q: "Qui a écrit The Caretaker, et quand ?", r: "Harold Pinter, en 1960 ; il a reçu le prix Nobel en 2005." },
        { q: "Qui sont les trois personnages de The Caretaker ?", r: "Aston, son frère Mick, et Davies, un vagabond qu'Aston recueille." },
        { q: "Que représente Sidcup pour Davies ?", r: "Le lieu où seraient ses papiers d'identité ; il dit qu'il ira, mais n'y va jamais." },
        { q: "Qu'est-ce que la « comedy of menace » de Pinter ?", r: "Des dialogues ordinaires, parfois drôles, où se cache une menace." },
        { q: "Quel faux nom Davies utilise-t-il ?", r: "Bernard Jenkins." },
      ],
      quiz: [
        { q: "Comment traduire « to pretend » ?", choix: ["Prétendre","Faire semblant","Prévenir","Présenter"], bonne: 1, expl: "To pretend = faire semblant ; prétendre = to claim.", niv: 1 },
        { q: "Qui a écrit The Caretaker ?", choix: ["Samuel Beckett","Tom Stoppard","Harold Pinter","Arthur Miller"], bonne: 2, expl: "Harold Pinter, dramaturge britannique, prix Nobel 2005.", niv: 1 },
        { q: "Comment dit-on « un autoportrait » en anglais ?", choix: ["An auto-portrait","A portrait of me","A self-picture","A self-portrait"], bonne: 3, expl: "Le préfixe self- indique que l'on se représente soi-même.", niv: 1 },
        { q: "Quel est le prétérit de « to lie » au sens de mentir ?", choix: ["Lay","Lied","Lain","Lied ou lain"], bonne: 1, expl: "Mentir : lie, lied, lied. Être allongé : lie, lay, lain.", niv: 1 },
        { q: "Où Davies dit-il que se trouvent ses papiers ?", choix: ["À Londres","À Dublin","À Sidcup","À Cardiff"], bonne: 2, expl: "Il répète qu'il ira chercher ses papiers à Sidcup, sans jamais y aller.", niv: 2 },
        { q: "Dans The Picture of Dorian Gray, qu'est-ce qui vieillit à la place de Dorian ?", choix: ["Son portrait","Son ami peintre","Son miroir","Son frère"], bonne: 0, expl: "Le portrait garde la trace de ses fautes et de son âge.", niv: 2 },
        { q: "Que propose Mick à Davies ?", choix: ["De devenir le gardien de la maison","De partir avec lui en Amérique","De l'aider à retrouver sa famille","De témoigner contre son frère"], bonne: 0, expl: "Le titre vient de là : le caretaker, le gardien.", niv: 2 },
        { q: "Que signifie « to stand out » ?", choix: ["Rester dehors","Se lever d'un coup","Abandonner","Se démarquer"], bonne: 3, expl: "To stand out = se faire remarquer ; le contraire de to fit in.", niv: 2 },
        { q: "Quel personnage se réinvente pour reconquérir Daisy ?", choix: ["Jay Gatsby","Dorian Gray","Holden Caulfield","Mr Darcy"], bonne: 0, expl: "James Gatz devient Jay Gatsby, riche et mystérieux.", niv: 2 },
        { q: "Quelle phrase de Shakespeare est souvent citée sur la mise en scène de soi ?", choix: ["All the world's a stage","To be or not to be","Now is the winter of our discontent","A horse, a horse, my kingdom for a horse"], bonne: 0, expl: "Dans As You Like It, chaque homme joue plusieurs rôles dans sa vie.", niv: 2 },
        { q: "Que révèle le long monologue d'Aston dans The Caretaker ?", choix: ["Le plan qu'il a fait pour voler la maison de Mick","Son vrai nom et ses papiers d'identité","Son amour secret pour la femme de Davies","Les électrochocs qu'il a subis à l'hôpital"], bonne: 3, expl: "Le monologue montre la fragilité d'Aston, abîmé par les électrochocs.", niv: 3 },
        { q: "Pourquoi Davies est-il chassé à la fin de la pièce ?", choix: ["Il a mis le feu, par accident, à la maison des deux frères","Il a tenté de monter les frères l'un contre l'autre","Il est retourné vivre définitivement à Sidcup","Il a avoué avoir volé l'argent de Mick"], bonne: 1, expl: "En jouant un frère contre l'autre, il perd la confiance des deux.", niv: 3 },
        { q: "Que montrent les silences et les pauses chez Pinter ?", choix: ["Ce que les personnages cachent ou n'osent pas dire","L'oubli du texte par des acteurs mal préparés","Que la pièce est en réalité une comédie musicale","Que l'auteur n'a pas fini d'écrire la scène"], bonne: 0, expl: "Chez Pinter, le non-dit compte autant que le dit : la menace se loge dans les silences.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-ang-6",
      fiche: `## Initiation, apprentissage

On ne naît pas adulte : on le devient par des **épreuves**, des **erreurs** et des **rencontres**. Le roman d'apprentissage (**Bildungsroman**, mot allemand utilisé en anglais), le récit d'enfance et le **coming-of-age** film racontent ce passage.

### Le vocabulaire à connaître
- **to grow up** : grandir ; **growing up** : le fait de grandir ; **to come of age** : atteindre la majorité, devenir adulte.
- **a coming-of-age novel / film** ; **a Bildungsroman** : un roman d'apprentissage.
- **childhood, adolescence, adulthood** : enfance, adolescence, âge adulte.
- **a rite of passage** : un rite de passage ; **an ordeal** : une épreuve.
- **to learn from one's mistakes** ; **to mature** : mûrir ; **maturity**.
- **innocence / experience** ; **to lose one's innocence**.
- **a mentor** : un guide ; **a role model** : un modèle.
- **self-knowledge / self-awareness** : la connaissance de soi.
- **prejudice** : le préjugé ; **pride** : l'orgueil, la fierté.
- **to be ashamed of** : avoir honte de ; **embarrassed** : gêné (et non enceinte, qui se dit *pregnant*).

### Les grands repères
- **Charles Dickens**, *Great Expectations* (1861) : Pip, orphelin, rêve de devenir un gentleman et apprend ce que valent vraiment les gens.
- **Charlotte Brontë**, *Jane Eyre* (1847) : une orpheline qui gagne son indépendance.
- **Mark Twain**, *Adventures of Huckleberry Finn* (1884) : Huck descend le Mississippi avec Jim, un esclave en fuite, et apprend à penser contre les règles de sa société.
- **J. D. Salinger**, *The Catcher in the Rye* (1951) : Holden Caulfield, adolescent révolté qui refuse le monde « phony » (hypocrite) des adultes.
- **Harper Lee**, *To Kill a Mockingbird* (1960) : la petite **Scout** découvre le racisme du Sud lors du procès d'un Noir défendu par son père, **Atticus Finch**.
- **William Blake**, *Songs of Innocence and of Experience* (1789-1794) : deux regards sur le monde.

### Les œuvres au programme
**Pride and Prejudice (Jane Austen, 1813)**
- Dans l'Angleterre rurale, la famille **Bennet** a cinq filles et peu d'argent : il faut les marier. La première phrase est célèbre : « It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. » Elle est **ironique**.
- **Elizabeth Bennet**, vive et indépendante, juge très vite le riche **Mr Darcy** : orgueilleux (**pride**). Elle croit les mensonges de **Wickham** contre lui (**prejudice**).
- Elle **refuse** la première demande en mariage de Darcy. Puis une **lettre** de Darcy lui révèle la vérité sur Wickham. Elle comprend son erreur : « Till this moment I never knew myself. »
- Darcy aussi change : il apprend l'humilité et sauve la famille quand **Lydia** s'enfuit avec Wickham. Les deux se marient à la fin.
- L'apprentissage, ici, c'est de **corriger ses premières impressions** (le titre de départ du roman était *First Impressions*). Austen utilise le **discours indirect libre** pour nous faire entrer dans la tête d'Elizabeth.

**Boyhood: Scenes from Provincial Life (J. M. Coetzee, 1997)**
- Récit d'enfance de l'écrivain sud-africain **J. M. Coetzee** (prix Nobel 2003), écrit à la **troisième personne** et au **présent** : « he », jamais « I ».
- Années 1950 : le garçon vit à **Worcester**, une petite ville d'**Afrique du Sud**, entre une famille qui parle anglais et une société **afrikaner**. À sa nouvelle école, il se déclare **catholique** sans l'être, ce qui le met à part des deux camps.
- Il aime passionnément la ferme familiale, adore et rejette à la fois sa **mère**, méprise son père, et cache sans cesse ses pensées.
- On voit autour de lui l'**apartheid**, qu'il ne comprend qu'à moitié : un regard d'enfant sur un monde injuste.
- Suites : *Youth* (2002) et *Summertime* (2009).

### Comment analyser un récit d'apprentissage
- Qu'est-ce que le personnage **croit** au début, et que **découvre**-t-il ?
- Quelle **épreuve** ou quelle rencontre le fait changer ?
- Le narrateur est-il l'adulte qui se souvient, ou l'enfant au présent ?

### À retenir pour le bac
- Bildungsroman, coming-of-age, rite of passage.
- *Pride and Prejudice* : Elizabeth, Darcy, Wickham, la lettre, « First Impressions », l'ironie de la première phrase.
- *Boyhood* : Coetzee, troisième personne et présent, Worcester, Afrique du Sud, apartheid.
- Pièges : *embarrassed* = gêné ; *pregnant* = enceinte.`,
      cartes: [
        { q: "Traduire en anglais : grandir", r: "To grow up (grew, grown)." },
        { q: "Que signifie « to come of age » ?", r: "Atteindre l'âge adulte, la majorité." },
        { q: "Traduire en anglais : un rite de passage", r: "A rite of passage." },
        { q: "Que signifie « an ordeal » ?", r: "Une épreuve, une expérience pénible." },
        { q: "Traduire en anglais : un modèle (à suivre)", r: "A role model." },
        { q: "Que signifie « embarrassed » ?", r: "Gêné. « Enceinte » se dit pregnant." },
        { q: "Qu'est-ce qu'un Bildungsroman ?", r: "Un roman d'apprentissage, qui raconte comment un jeune devient adulte." },
        { q: "Qui est Holden Caulfield ?", r: "L'adolescent révolté de The Catcher in the Rye (Salinger, 1951), qui rejette le monde « phony » des adultes." },
        { q: "Que découvre Scout dans To Kill a Mockingbird (1960) ?", r: "Le racisme du Sud, lors du procès d'un Noir défendu par son père, Atticus Finch." },
        { q: "Qui a écrit Pride and Prejudice, et quand ?", r: "Jane Austen, en 1813." },
        { q: "Pourquoi Elizabeth Bennet refuse-t-elle d'abord Mr Darcy ?", r: "Elle le juge orgueilleux et croit les mensonges de Wickham contre lui." },
        { q: "Qu'est-ce qui fait changer d'avis Elizabeth ?", r: "Une lettre de Darcy qui lui révèle la vérité sur Wickham." },
        { q: "Quel était le premier titre de Pride and Prejudice ?", r: "First Impressions : le roman parle de premières impressions à corriger." },
        { q: "Quelle est la particularité de narration de Boyhood de Coetzee ?", r: "Un récit d'enfance écrit à la troisième personne et au présent." },
        { q: "Où et quand se passe Boyhood de Coetzee ?", r: "À Worcester, en Afrique du Sud, dans les années 1950, sous l'apartheid." },
      ],
      quiz: [
        { q: "Comment dit-on « grandir » en anglais ?", choix: ["To get big up","To grand","To rise up","To grow up"], bonne: 3, expl: "To grow up = grandir, devenir adulte.", niv: 1 },
        { q: "Qui a écrit Pride and Prejudice ?", choix: ["Charlotte Brontë","Mary Shelley","George Eliot","Jane Austen"], bonne: 3, expl: "Jane Austen a publié le roman en 1813.", niv: 1 },
        { q: "Comment traduire « She was embarrassed » ?", choix: ["Elle était enceinte","Elle était gênée","Elle était encombrée","Elle était embrassée"], bonne: 1, expl: "Embarrassed = gêné. Enceinte = pregnant.", niv: 1 },
        { q: "Quel adolescent rejette le monde « phony » des adultes ?", choix: ["Huckleberry Finn","Oliver Twist","Holden Caulfield","Pip"], bonne: 2, expl: "Holden est le narrateur de The Catcher in the Rye de Salinger.", niv: 1 },
        { q: "Qu'est-ce qu'un Bildungsroman ?", choix: ["Un roman policier allemand","Un récit de voyage en ville","Un roman écrit sous forme de lettres","Un roman d'apprentissage"], bonne: 3, expl: "Le mot allemand désigne le roman qui suit la formation d'un jeune.", niv: 2 },
        { q: "Quel personnage ment à Elizabeth au sujet de Darcy ?", choix: ["Mr Collins","Charles Bingley","Wickham","Mr Bennet"], bonne: 2, expl: "Wickham se fait passer pour une victime de Darcy.", niv: 2 },
        { q: "Quel était le premier titre de Pride and Prejudice ?", choix: ["Sense and Sensibility","The Bennet Sisters","A Truth Acknowledged","First Impressions"], bonne: 3, expl: "Le roman parle des premières impressions qu'il faut apprendre à corriger.", niv: 2 },
        { q: "Comment Coetzee raconte-t-il son enfance dans Boyhood ?", choix: ["À la troisième personne et au présent","À la première personne et au passé","Sous forme de lettres à sa mère","Sous forme de journal intime daté"], bonne: 0, expl: "Le « he » au présent crée une distance avec l'enfant qu'il a été.", niv: 2 },
        { q: "Dans Boyhood, que dit le garçon de sa religion à sa nouvelle école ?", choix: ["Qu'il est catholique, sans l'être","Qu'il est protestant, comme les Afrikaners","Qu'il est juif, comme son meilleur ami","Qu'il refuse de répondre à la question"], bonne: 0, expl: "Ce choix inventé le met à part, ni afrikaner ni vraiment anglais.", niv: 2 },
        { q: "Qu'apprend Elizabeth Bennet au cours du roman ?", choix: ["À obéir aux choix de sa mère","À renoncer à se marier un jour","À gérer la fortune de sa famille","À se méfier de ses premiers jugements"], bonne: 3, expl: "Elle reconnaît son erreur : « Till this moment I never knew myself. »", niv: 3 },
        { q: "Pourquoi la première phrase de Pride and Prejudice est-elle ironique ?", choix: ["Ce sont les familles qui cherchent un riche mari","Austen y défend sincèrement le mariage d'argent","Elle est prononcée par un personnage ridicule et sot","Elle annonce que Darcy restera célibataire"], bonne: 0, expl: "La « vérité universelle » cache le contraire : les mères pauvres guettent les hommes riches.", niv: 3 },
        { q: "Quel regard Boyhood porte-t-il sur l'apartheid ?", choix: ["Celui d'un militant qui le combat ouvertement","Celui d'un historien qui l'explique en détail","Celui d'un enfant qui ne le comprend qu'à moitié","Celui d'un policier chargé de l'appliquer"], bonne: 2, expl: "L'injustice apparaît par petites touches, vue par un enfant.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-ang-7",
      fiche: `## Exploration et aventure

Le monde anglophone s'est construit par des voyages : explorations maritimes, conquête de l'Ouest américain, expéditions polaires, course à l'espace. La littérature y ajoute l'**aventure intérieure** : partir, c'est aussi se chercher.

### Le vocabulaire à connaître
- **a journey** : un voyage (le trajet) ; **a trip** : un court voyage ; **travel** : le fait de voyager (indénombrable).
- **to explore / an explorer / an expedition** ; **to set off / to set out** : partir.
- **the wilderness** : la nature sauvage ; **the frontier** : aux États-Unis, la limite mouvante entre zone colonisée et territoires « à conquérir ».
- **to roam / to wander** : errer ; **a wanderer** : un vagabond ; **a road trip**.
- **to discover / a discovery** ; **uncharted** : inexploré, absent des cartes.
- **a quest** : une quête ; **a hero / a heroine**.
- **to get lost** : se perdre ; **to survive / survival**.
- **the Wild West / the Far West** ; **pioneers / settlers** : les pionniers, les colons.
- **a spacecraft, to land, the moon landing** : l'alunissage.
- Piège : *a journey* et non *a travel* ; *to travel* est un verbe.

### Les grands repères
- **Daniel Defoe**, *Robinson Crusoe* (1719) : le naufragé qui survit seul sur une île.
- **Jonathan Swift**, *Gulliver's Travels* (1726) : voyages imaginaires pour faire la satire de la société anglaise.
- **Lewis and Clark** (1804-1806) : expédition envoyée par le président **Jefferson** pour explorer l'Ouest jusqu'au Pacifique, guidée en partie par la Shoshone **Sacagawea**.
- **Manifest Destiny** : au XIXe siècle, l'idée que les États-Unis avaient pour « destin » de s'étendre jusqu'au Pacifique.
- **Ernest Shackleton** : expédition antarctique de l'**Endurance** (1914-1917), bateau écrasé par la glace, tout l'équipage sauvé.
- **Joseph Conrad**, *Heart of Darkness* (1899) : remontée du fleuve Congo, critique du colonialisme.
- **Jack Kerouac**, *On the Road* (1957) : la **Beat Generation** traverse l'Amérique en voiture.
- **Jon Krakauer**, *Into the Wild* (1996), adapté par Sean Penn (2007) : Christopher McCandless part vivre seul en Alaska et y meurt.
- **Apollo 11** (juillet **1969**) : **Neil Armstrong** marche sur la Lune : « That's one small step for man, one giant leap for mankind. »

### L'œuvre au programme : Moon Palace
- Roman de **Paul Auster** (**1989**), écrivain new-yorkais. Il fait partie du programme limitatif 2026-2028.
- Le narrateur, **Marco Stanley Fogg**, raconte sa jeunesse à **New York** à la fin des années 1960, pendant que l'homme marche sur la Lune. Son nom réunit trois voyageurs : **Marco Polo**, l'explorateur **Stanley** et **Phileas Fogg** (*Le Tour du monde en 80 jours*).
- Orphelin, élevé par son oncle **Victor**, il hérite de ses caisses de livres. Il les lit et les vend une à une, jusqu'à la misère : il finit par dormir dans **Central Park**, affamé. Il est sauvé par son ami Zimmer et par **Kitty Wu**.
- Il devient l'employé de **Thomas Effing**, vieil homme aveugle en fauteuil roulant, qui lui dicte sa vie : jeune peintre, il était parti dans le désert de l'**Utah**, avait vécu seul dans une grotte et changé d'identité.
- Fogg découvre ensuite que **Solomon Barber**, le fils d'Effing, est son propre **père**.
- À la fin, Fogg traverse l'Amérique **à pied** jusqu'au **Pacifique** et regarde la lune se lever : l'aventure vers l'Ouest est aussi une quête de ses origines.
- « Moon Palace » est le nom d'un restaurant chinois dont l'enseigne lumineuse se voit de la fenêtre de Fogg. La **lune** relie toute l'histoire.

### Comment analyser un récit d'aventure
- Le **départ** : pourquoi part-on ? Fuite, curiosité, conquête, quête de soi.
- L'**espace** : désert, mer, glace, ville, comme épreuve ou comme miroir.
- Le **retour** ou l'absence de retour : qu'a-t-on appris ?
- Le **regard sur l'autre** : l'exploration peut être aussi une conquête.

### À retenir pour le bac
- *Journey* (le trajet), *trip*, *travel* (indénombrable).
- Lewis and Clark, Manifest Destiny, the frontier, Apollo 11.
- *Moon Palace* : Marco Stanley Fogg, Central Park, Effing, l'Utah, Solomon Barber, la marche vers le Pacifique, la lune.`,
      cartes: [
        { q: "Traduire en anglais : un voyage (le trajet)", r: "A journey. Travel est indénombrable ; a trip = un court voyage." },
        { q: "Que signifie « the wilderness » ?", r: "La nature sauvage." },
        { q: "Traduire en anglais : partir (en voyage)", r: "To set off ou to set out." },
        { q: "Que signifie « uncharted » ?", r: "Inexploré, qui ne figure pas sur les cartes." },
        { q: "Traduire en anglais : errer", r: "To wander ou to roam." },
        { q: "Que signifie « the frontier » dans l'histoire américaine ?", r: "La limite mouvante entre les terres colonisées et celles qui restaient à conquérir à l'Ouest." },
        { q: "Qu'est-ce que le Manifest Destiny ?", r: "L'idée, au XIXe siècle, que les États-Unis devaient s'étendre jusqu'au Pacifique." },
        { q: "Qu'est-ce que l'expédition Lewis and Clark ?", r: "L'exploration de l'Ouest jusqu'au Pacifique (1804-1806), voulue par Jefferson, avec l'aide de Sacagawea." },
        { q: "Quelle phrase prononce Neil Armstrong en 1969 ?", r: "« That's one small step for man, one giant leap for mankind. »" },
        { q: "Qu'est-ce qu'On the Road de Kerouac (1957) ?", r: "Le roman de la Beat Generation : des traversées de l'Amérique en voiture." },
        { q: "Qui a écrit Moon Palace, et quand ?", r: "Paul Auster, en 1989." },
        { q: "Pourquoi le héros de Moon Palace s'appelle-t-il Marco Stanley Fogg ?", r: "Son nom réunit trois voyageurs : Marco Polo, l'explorateur Stanley et Phileas Fogg." },
        { q: "Où Fogg finit-il par dormir quand il est ruiné ?", r: "Dans Central Park, à New York." },
        { q: "Qui est Thomas Effing dans Moon Palace ?", r: "Un vieil homme aveugle qui emploie Fogg et lui raconte sa vie de peintre parti dans le désert de l'Utah." },
        { q: "Comment se termine Moon Palace ?", r: "Fogg traverse l'Amérique à pied jusqu'au Pacifique et regarde la lune se lever." },
      ],
      quiz: [
        { q: "Quelle phrase sur un voyage est correcte ?", choix: ["It was a long journey.","It was a long travel.","It was a long travels.","It was a long journeys."], bonne: 0, expl: "Travel est indénombrable : on dit a journey ou a trip.", niv: 1 },
        { q: "Qui a écrit Moon Palace ?", choix: ["Jack Kerouac","Paul Auster","Cormac McCarthy","Don DeLillo"], bonne: 1, expl: "Paul Auster, romancier new-yorkais, en 1989.", niv: 1 },
        { q: "Que signifie « to set off » ?", choix: ["Éteindre une lumière","Mettre de côté","Partir en voyage","Arriver au but"], bonne: 2, expl: "To set off / to set out = se mettre en route.", niv: 1 },
        { q: "Quel président envoie Lewis et Clark explorer l'Ouest ?", choix: ["George Washington","Abraham Lincoln","Thomas Jefferson","Andrew Jackson"], bonne: 2, expl: "Jefferson lance l'expédition après l'achat de la Louisiane (1803).", niv: 1 },
        { q: "Que désigne le Manifest Destiny ?", choix: ["L'idée que les États-Unis devaient s'étendre vers l'Ouest","Un traité de paix avec les nations amérindiennes","Le texte fondateur de la Constitution américaine","Une loi qui fixe la frontière nord avec le Canada britannique"], bonne: 0, expl: "Cette croyance a justifié l'expansion jusqu'au Pacifique.", niv: 2 },
        { q: "Dans Moon Palace, quelle époque sert de toile de fond ?", choix: ["La guerre de Sécession","Les années 1920","La fin des années 1960","Les années 2000"], bonne: 2, expl: "Fogg vit sa jeunesse pendant que l'homme marche sur la Lune (1969).", niv: 2 },
        { q: "Que fait Fogg des caisses de livres de son oncle Victor ?", choix: ["Il les offre à la bibliothèque de l'université","Il les brûle pour se chauffer l'hiver","Il les rend à la famille de Kitty Wu","Il les lit et les vend une à une"], bonne: 3, expl: "Les livres lui servent même de meubles, avant d'être vendus jusqu'au dernier.", niv: 2 },
        { q: "Que découvre Fogg au sujet de Solomon Barber ?", choix: ["C'est le frère de Kitty","C'est son propre père","C'est l'ami de son oncle","C'est un faux nom d'Effing"], bonne: 1, expl: "Barber, fils d'Effing, est le père que Fogg n'a jamais connu.", niv: 2 },
        { q: "Que signifie « uncharted territory » ?", choix: ["Un territoire sans chef","Un territoire interdit","Un territoire inexploré","Un territoire inhabité depuis peu"], bonne: 2, expl: "Uncharted = qui n'est pas sur les cartes.", niv: 2 },
        { q: "Quelle expédition antarctique a perdu son bateau, l'Endurance ?", choix: ["Celle de Lewis and Clark","Celle de Shackleton","Celle d'Apollo 11","Celle de Christophe Colomb"], bonne: 1, expl: "L'Endurance a été écrasée par la glace ; tout l'équipage a été sauvé (1914-1917).", niv: 2 },
        { q: "Que relie le motif de la lune dans Moon Palace ?", choix: ["Les époques et les personnages du roman","Les chapitres consacrés à la Chine","Les rêves d'Effing de devenir astronaute","Les lieux où Fogg a vécu enfant"], bonne: 0, expl: "Le restaurant, l'alunissage, les tableaux d'Effing : la lune revient partout.", niv: 3 },
        { q: "Pourquoi la marche finale de Fogg vers le Pacifique a-t-elle du sens ?", choix: ["Elle permet de rejoindre son oncle Victor vivant","Elle refait la conquête de l'Ouest en quête de soi","Elle répond à une commande d'Effing","Elle marque son départ pour la Chine"], bonne: 1, expl: "Le trajet vers l'Ouest reprend le mythe américain, tourné ici vers ses origines.", niv: 3 },
        { q: "Quel regard critique Heart of Darkness porte-t-il sur l'exploration ?", choix: ["Elle apporte le progrès aux peuples visités","Elle est réservée aux héros courageux","Elle se fait dans le respect des peuples","Elle cache la violence du colonialisme"], bonne: 3, expl: "La remontée du fleuve Congo révèle la brutalité coloniale.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-ang-8",
      fiche: `## Ancrage et héritage

Être **ancré** quelque part, c'est appartenir à un lieu, une terre, une famille, une langue. Cet axe étudie ce que l'on **hérite** (traditions, mémoire, blessures de l'histoire) et ce que l'on en fait : le garder, le rejeter ou le transformer. Dans le monde anglophone, c'est aussi l'héritage de l'**Empire britannique** et de la **colonisation**.

### Le vocabulaire à connaître
- **roots** : les racines ; **to be rooted in** : être enraciné dans ; **to take root** : s'enraciner.
- **heritage** : le patrimoine, l'héritage culturel ; **inheritance** : l'héritage (biens) ; **to inherit** : hériter ; **an heir** : un héritier.
- **ancestors / forefathers** : les ancêtres ; **descendants**.
- **a homeland** : une patrie, une terre natale ; **to belong (to)** : appartenir ; **a sense of belonging** : le sentiment d'appartenance.
- **tradition, custom, legacy** ; **legacy** : ce qu'on laisse derrière soi.
- **memory / remembrance** : la mémoire, le souvenir ; **to commemorate**.
- **the British Empire, the Commonwealth, colonisation, independence** ; **postcolonial** : postcolonial.
- **a caste** : une caste ; **an outcast** : un paria.
- **Native Americans / First Nations** ; **a reservation** : une réserve.
- Piège : **heritage** = patrimoine culturel ; l'héritage d'argent se dit **inheritance**.

### Les grands repères
- **Seamus Heaney** (Irlande du Nord, prix Nobel 1995), « Digging » (1966) : le poète regarde son père et son grand-père creuser la terre ; lui « creusera » avec son stylo. L'héritage est transformé.
- L'**Irlande** : la langue irlandaise, la Grande Famine (1845-1849), la partition de 1921 et les **Troubles** en Irlande du Nord.
- **Chinua Achebe**, *Things Fall Apart* (1958) : un village igbo du Nigeria bouleversé par l'arrivée des missionnaires et des colons.
- L'**Inde** : indépendance et **partition** en 1947 ; la langue anglaise héritée de l'Empire, que les écrivains indiens s'approprient.
- **Toni Morrison**, *Beloved* (1987) : la mémoire de l'esclavage qui hante les descendants.
- Les **Native Americans** : terres perdues, réserves, et aujourd'hui luttes pour la **souveraineté** et la mémoire (le site de **Standing Rock**, 2016).
- Les **Aborigènes** d'Australie et la **Stolen Generations** : enfants retirés à leurs familles, excuses officielles du gouvernement en 2008.

### L'œuvre au programme : The God of Small Things
- Roman d'**Arundhati Roy** (**1997**), premier roman d'une autrice indienne, **Booker Prize** 1997. Il fait partie du programme limitatif 2026-2028.
- Il se passe à **Ayemenem**, dans l'État du **Kerala** (sud de l'Inde), dans une famille chrétienne syrienne qui possède une fabrique de conserves, **Paradise Pickles & Preserves**.
- Les héros sont des jumeaux, **Estha** et **Rahel**. Le récit alterne entre **1969**, quand ils ont sept ans, et **1993**, quand ils se retrouvent adultes.
- Leur mère, **Ammu**, divorcée, aime **Velutha**, un menuisier **intouchable** (de la caste la plus basse). Cet amour viole les « **Love Laws** », les lois qui disent « qui on doit aimer, et comment, et combien ».
- La même année, leur petite cousine anglaise, **Sophie Mol**, se noie. Velutha est accusé à tort et battu à mort par la police. La famille est brisée.
- Roy écrit dans un anglais très inventif : mots collés, majuscules, mots du **malayalam**, phrases d'enfants.
- Le roman montre un **héritage lourd** : les castes, le poids de la famille, l'ombre de l'Empire britannique (la grand-tante admire tout ce qui est anglais), et la façon dont l'histoire écrase les « small things », les petites vies.

### Comment analyser l'ancrage et l'héritage
- Qu'est-ce qui est **transmis** (lieu, langue, objet, récit, blessure) ?
- Le personnage **accepte**, **rejette** ou **transforme** cet héritage ?
- Comment l'**histoire collective** pèse-t-elle sur les vies individuelles ?

### À retenir pour le bac
- *Heritage* (patrimoine) et *inheritance* (biens) ; *roots*, *to belong*, *legacy*.
- Heaney, « Digging » ; Achebe ; la partition de l'Inde ; les Stolen Generations.
- *The God of Small Things* : Kerala, Estha et Rahel, Ammu et Velutha, les Love Laws, Sophie Mol, 1969 et 1993.`,
      cartes: [
        { q: "Traduire en anglais : le patrimoine culturel", r: "Heritage. L'héritage (biens) = inheritance." },
        { q: "Que signifie « to inherit » ?", r: "Hériter. Un héritier = an heir." },
        { q: "Traduire en anglais : le sentiment d'appartenance", r: "A sense of belonging." },
        { q: "Que signifie « legacy » ?", r: "Ce qu'on laisse derrière soi, un héritage (souvent moral ou historique)." },
        { q: "Traduire en anglais : les ancêtres", r: "Ancestors (ou forefathers)." },
        { q: "Que signifie « an outcast » ?", r: "Un paria, une personne rejetée par la société." },
        { q: "Que raconte le poème « Digging » de Seamus Heaney (1966) ?", r: "Le poète voit ses ancêtres creuser la terre ; lui creusera avec son stylo : il transforme l'héritage." },
        { q: "Que raconte Things Fall Apart d'Achebe (1958) ?", r: "Un village igbo du Nigeria bouleversé par l'arrivée des missionnaires et des colons." },
        { q: "Que sont les Stolen Generations ?", r: "Les enfants aborigènes retirés à leurs familles en Australie ; le gouvernement s'est excusé en 2008." },
        { q: "Qui a écrit The God of Small Things, et quand ?", r: "Arundhati Roy, en 1997 ; Booker Prize la même année." },
        { q: "Où se passe The God of Small Things ?", r: "À Ayemenem, dans le Kerala, au sud de l'Inde." },
        { q: "Qui sont Estha et Rahel ?", r: "Les jumeaux héros du roman, vus enfants en 1969 et adultes en 1993." },
        { q: "Que sont les « Love Laws » chez Arundhati Roy ?", r: "Les lois qui disent qui on doit aimer, et comment, et combien ; Ammu les viole en aimant Velutha." },
        { q: "Qui est Velutha ?", r: "Un menuisier intouchable, aimé d'Ammu, accusé à tort et tué par la police." },
        { q: "Que se passe-t-il pour Sophie Mol ?", r: "La petite cousine anglaise des jumeaux se noie en 1969." },
      ],
      quiz: [
        { q: "Comment dit-on « le patrimoine culturel » en anglais ?", choix: ["Cultural inheritance","Cultural heritage","Cultural patrimony law","Cultural heir"], bonne: 1, expl: "Heritage = patrimoine ; inheritance = héritage de biens.", niv: 1 },
        { q: "Qui a écrit The God of Small Things ?", choix: ["Salman Rushdie","Jhumpa Lahiri","Arundhati Roy","Vikram Seth"], bonne: 2, expl: "Arundhati Roy a reçu le Booker Prize en 1997 pour ce premier roman.", niv: 1 },
        { q: "Que signifie « to belong to a place » ?", choix: ["Rester longtemps dans un lieu","Appartenir à un lieu","Désirer un lieu lointain","Acheter un lieu"], bonne: 1, expl: "To belong = appartenir ; a sense of belonging = le sentiment d'appartenance.", niv: 1 },
        { q: "Dans quel État de l'Inde se passe The God of Small Things ?", choix: ["Le Bengale","Le Kerala","Le Pendjab","Le Rajasthan"], bonne: 1, expl: "Ayemenem est un village du Kerala, au sud-ouest de l'Inde.", niv: 1 },
        { q: "Comment traduire « an heir » ?", choix: ["Un air de musique","Un ancêtre","Un héritier","Un cheveu"], bonne: 2, expl: "An heir (le h ne se prononce pas) = un héritier.", niv: 2 },
        { q: "Pourquoi l'amour d'Ammu et de Velutha est-il interdit ?", choix: ["Velutha est déjà marié à une cousine d'Ammu depuis l'enfance","Ammu doit épouser un Anglais","Velutha appartient à la caste des intouchables","Velutha travaille pour la police"], bonne: 2, expl: "Aimer un intouchable viole les « Love Laws » de la société de castes.", niv: 2 },
        { q: "Entre quelles années alterne le récit de The God of Small Things ?", choix: ["1947 et 1969","1857 et 1947","1993 et 2019","1969 et 1993"], bonne: 3, expl: "Les jumeaux ont sept ans en 1969 et se retrouvent adultes en 1993.", niv: 2 },
        { q: "Que fait le poète à la fin de « Digging » de Seamus Heaney ?", choix: ["Il reprend la bêche de son père","Il quitte l'Irlande pour toujours","Il choisit de « creuser » avec son stylo","Il vend la ferme de sa famille"], bonne: 2, expl: "Il n'imite pas ses ancêtres : il transforme leur héritage en écriture.", niv: 2 },
        { q: "Que signifie « to be rooted in a tradition » ?", choix: ["Être prisonnier d'une tradition","Être exclu d'une tradition","Être fatigué d'une tradition","Être enraciné dans une tradition"], bonne: 3, expl: "To be rooted in = avoir ses racines dans.", niv: 2 },
        { q: "Quel roman d'Achebe raconte un village igbo bouleversé par la colonisation ?", choix: ["Things Fall Apart","Half of a Yellow Sun","Heart of Darkness","Purple Hibiscus"], bonne: 0, expl: "Things Fall Apart (1958) ; les deux autres titres nigérians sont d'Adichie.", niv: 2 },
        { q: "Que désigne le titre « The God of Small Things » ?", choix: ["Un dieu hindou vénéré dans le Kerala","Le surnom de la police locale","Les petites vies écrasées par la grande histoire","Le nom que la famille donne à sa fabrique de conserves"], bonne: 2, expl: "Les « small things » (un amour, des enfants) sont broyées par les règles et l'histoire.", niv: 3 },
        { q: "Que montre l'anglais très inventif d'Arundhati Roy ?", choix: ["Une appropriation de la langue héritée de l'Empire","Un rejet de la langue anglaise au profit du hindi","Une imitation fidèle des auteurs victoriens","Une écriture réservée aux jeunes enfants"], bonne: 0, expl: "Roy fait sienne la langue du colonisateur, avec des mots du malayalam et un regard d'enfant.", niv: 3 },
        { q: "Quelle phrase traduit le mieux « a painful legacy » ?", choix: ["Un héritage douloureux","Un legs d'argent difficile","Une légende douloureuse","Une loi douloureuse"], bonne: 0, expl: "Legacy = ce que le passé laisse, souvent au sens moral ou historique.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-ang-9",
      fiche: `## Migration et exil

Les États-Unis, le Canada, l'Australie ou le Royaume-Uni se sont construits avec des **migrants**. Partir, c'est espérer une vie meilleure, mais c'est aussi perdre une maison, une langue, des proches. Cet axe étudie l'arrivée, l'**intégration**, le **mal du pays** et les identités doubles.

### Le vocabulaire à connaître
- **to emigrate** (partir de son pays) / **to immigrate** (arriver dans un pays) ; **a migrant, an immigrant, an emigrant**.
- **a refugee** : un réfugié ; **an asylum seeker** : un demandeur d'asile ; **exile** : l'exil ; **to be exiled**.
- **to flee (fled, fled)** : fuir ; **to leave behind** : laisser derrière soi.
- **homesickness** : le mal du pays ; **to be homesick** ; **nostalgia**.
- **to settle (in)** : s'installer ; **to adjust / to adapt** : s'adapter ; **to fit in** : s'intégrer.
- **the melting pot** : le creuset où les cultures se fondent ; **the salad bowl** : les cultures qui coexistent sans se fondre.
- **a green card** : le permis de séjour permanent aux États-Unis ; **undocumented** : sans papiers ; **to deport** : expulser.
- **a newcomer** : un nouvel arrivant ; **a host country** : un pays d'accueil.
- **dual identity** : une double identité ; **hyphenated Americans** : les « Américains à trait d'union » (Irish-American, African-American).
- Piège : **to emigrate from**, **to immigrate to** ; *immigration* n'a pas le même sens que *emigration*.

### Les grands repères
- **Ellis Island** (1892-1954) : le centre d'accueil des immigrants à New York, au pied de la **Statue of Liberty**. Le poème d'**Emma Lazarus** gravé sur son socle : « Give me your tired, your poor, / Your huddled masses yearning to breathe free ».
- La **Grande Famine** irlandaise (1845-1849) : un million de morts et plus d'un million de départs, surtout vers l'Amérique.
- **John Steinbeck**, *The Grapes of Wrath* (1939) : des fermiers chassés par le **Dust Bowl** partent pour la Californie, une migration intérieure.
- La **Great Migration** (1910-1970) : des millions d'Afro-Américains quittent le Sud pour les villes du Nord.
- La **Windrush generation** : les migrants des Caraïbes arrivés au Royaume-Uni à partir de 1948 (le navire *Empire Windrush*), et le scandale de 2018 où certains ont été menacés d'expulsion.
- **Jhumpa Lahiri**, *The Namesake* (2003) : un fils d'immigrés bengalis aux États-Unis, entre deux cultures.

### Les œuvres au programme
**Brooklyn (Colm Tóibín, 2009)**
- Roman de l'écrivain irlandais **Colm Tóibín**, adapté au cinéma en 2015 (avec Saoirse Ronan).
- Dans les années 1950, **Eilis Lacey** vit à **Enniscorthy**, petite ville d'Irlande, sans avenir. Sa sœur **Rose** et un prêtre, **Father Flood**, organisent son départ pour **Brooklyn**.
- Elle loge dans une pension pour jeunes femmes, travaille dans un grand magasin, souffre d'un terrible **mal du pays**, puis étudie la comptabilité le soir.
- Elle tombe amoureuse de **Tony**, un jeune plombier **italo-américain**, et l'épouse en secret.
- À la mort de Rose, elle rentre en Irlande. Là-bas, on lui offre un emploi et un nouvel amoureux, **Jim Farrell** : elle hésite entre deux vies. Une commère méchante qui sait tout la pousse à repartir vers Brooklyn et Tony.
- Le roman, très sobre, montre l'exil comme un **choix déchirant** entre deux pays où l'on n'est jamais tout à fait chez soi.

**Americanah (Chimamanda Ngozi Adichie, 2013)**
- Roman de l'écrivaine nigériane **Chimamanda Ngozi Adichie**.
- **Ifemelu** et **Obinze** s'aiment adolescents à **Lagos**. Ifemelu part étudier aux **États-Unis** ; Obinze, qui n'obtient pas de visa, vit **sans papiers** à **Londres** et finit expulsé.
- En Amérique, Ifemelu découvre qu'elle est « noire » : au Nigeria, elle n'y pensait pas. Elle tient un **blog** à succès sur la **race** vue par une Africaine.
- Les **cheveux** sont un fil du roman : se défriser pour trouver un emploi ou les garder naturels.
- Après treize ans, elle **rentre à Lagos** et retrouve Obinze. Une « Americanah » est une personne qui revient des États-Unis avec des manières américaines.
- Adichie est aussi connue pour ses conférences « **The Danger of a Single Story** » (2009) et « **We Should All Be Feminists** ».

### Comment analyser un récit de migration
- Pourquoi part-on (contrainte ou choix) ? Qu'est-ce qu'on **laisse** ?
- Que découvre-t-on en arrivant (langue, regard des autres, travail) ?
- Le **retour** est-il possible ? Est-on encore chez soi ?

### À retenir pour le bac
- *Emigrate from / immigrate to* ; *homesick* ; *to settle* ; *melting pot / salad bowl*.
- Ellis Island et Emma Lazarus ; la famine irlandaise ; la Windrush generation.
- *Brooklyn* : Eilis, Enniscorthy, Tony, Jim Farrell, le choix entre deux pays.
- *Americanah* : Ifemelu, Obinze, Lagos, le blog sur la race, les cheveux, le retour.`,
      cartes: [
        { q: "Traduire en anglais : le mal du pays", r: "Homesickness. Avoir le mal du pays = to be homesick." },
        { q: "Quelle différence entre « to emigrate » et « to immigrate » ?", r: "To emigrate = quitter son pays ; to immigrate = s'installer dans un nouveau pays." },
        { q: "Traduire en anglais : un demandeur d'asile", r: "An asylum seeker." },
        { q: "Que signifie « undocumented » ?", r: "Sans papiers." },
        { q: "Traduire en anglais : fuir", r: "To flee (fled, fled)." },
        { q: "Quelle différence entre melting pot et salad bowl ?", r: "Melting pot : les cultures se fondent. Salad bowl : elles coexistent sans se mélanger." },
        { q: "Qu'est-ce qu'Ellis Island ?", r: "Le centre d'accueil des immigrants à New York, de 1892 à 1954." },
        { q: "Qu'est-ce que la Windrush generation ?", r: "Les migrants caribéens arrivés au Royaume-Uni à partir de 1948, menacés d'expulsion dans un scandale de 2018." },
        { q: "Que raconte The Grapes of Wrath de Steinbeck (1939) ?", r: "Des fermiers chassés par le Dust Bowl qui partent vers la Californie." },
        { q: "Qui a écrit Brooklyn, et quand ?", r: "L'écrivain irlandais Colm Tóibín, en 2009." },
        { q: "D'où part Eilis Lacey, et pour aller où ?", r: "D'Enniscorthy, en Irlande, pour Brooklyn, dans les années 1950." },
        { q: "Entre qui Eilis hésite-t-elle à la fin de Brooklyn ?", r: "Entre Tony, son mari italo-américain à Brooklyn, et Jim Farrell, en Irlande." },
        { q: "Qui a écrit Americanah, et quand ?", r: "Chimamanda Ngozi Adichie, écrivaine nigériane, en 2013." },
        { q: "Que découvre Ifemelu en arrivant aux États-Unis ?", r: "Qu'elle est « noire » aux yeux des autres ; elle tient un blog sur la race." },
        { q: "Que signifie le mot « Americanah » ?", r: "Au Nigeria, une personne qui revient des États-Unis avec des manières américaines." },
      ],
      quiz: [
        { q: "Comment dit-on « avoir le mal du pays » ?", choix: ["To be sick at home","To have home illness","To miss the house","To be homesick"], bonne: 3, expl: "Homesick = qui a le mal du pays.", niv: 1 },
        { q: "Qui a écrit Americanah ?", choix: ["Chinua Achebe","Zadie Smith","Toni Morrison","Chimamanda Ngozi Adichie"], bonne: 3, expl: "Adichie, écrivaine nigériane, a publié Americanah en 2013.", niv: 1 },
        { q: "Quelle phrase sur l'émigration est correcte ?", choix: ["My grandparents immigrated from Italy to.","My grandparents emigrated from Italy.","My grandparents emigrated to from Italy.","My grandparents immigrated of Italy."], bonne: 1, expl: "On émigre « from » son pays ; on immigre « to » le nouveau.", niv: 1 },
        { q: "Dans quelle ville américaine s'installe Eilis Lacey ?", choix: ["Brooklyn, à New York","Boston","Chicago","San Francisco"], bonne: 0, expl: "Le titre le dit : elle part pour Brooklyn.", niv: 1 },
        { q: "Qu'est-ce qu'Ellis Island ?", choix: ["Une île où étaient enfermés les condamnés à mort","Le port d'où partaient les Irlandais","Le centre d'accueil des immigrants à New York","Une colonie anglaise des Caraïbes"], bonne: 2, expl: "De 1892 à 1954, des millions d'immigrants y sont passés.", niv: 2 },
        { q: "Où Obinze vit-il sans papiers dans Americanah ?", choix: ["À Londres","À New York","À Lagos","À Princeton"], bonne: 0, expl: "Faute de visa américain, il part à Londres, où il est finalement expulsé.", niv: 2 },
        { q: "Que signifie « to settle in a new country » ?", choix: ["Régler ses dettes dans un pays","S'installer dans un nouveau pays","Quitter un pays en secret","Visiter un pays en touriste"], bonne: 1, expl: "To settle = s'installer ; settlers = les colons.", niv: 2 },
        { q: "Qui est Tony dans Brooklyn ?", choix: ["Un prêtre irlandais","Un patron de grand magasin","Le frère d'Eilis","Un plombier italo-américain"], bonne: 3, expl: "Eilis l'épouse en secret avant de rentrer en Irlande.", niv: 2 },
        { q: "Que désigne la « salad bowl » ?", choix: ["Un plat typique des immigrants italiens","Une loi sur les quotas d'immigration","Des cultures qui se fondent en une seule","Des cultures qui coexistent sans se fondre"], bonne: 3, expl: "La salad bowl s'oppose au melting pot, où les cultures se mélangent.", niv: 2 },
        { q: "Quel thème revient dans Americanah à travers les cheveux d'Ifemelu ?", choix: ["La pauvreté des étudiants étrangers","La passion d'Ifemelu pour la mode","Le regard porté sur les femmes noires","Le métier de coiffeuse de sa mère"], bonne: 2, expl: "Se défriser ou non : les cheveux montrent la pression à se conformer.", niv: 2 },
        { q: "Qu'est-ce qui pousse Eilis à repartir vers Brooklyn à la fin ?", choix: ["La mort soudaine de Jim Farrell","Une lettre de licenciement d'Irlande","Une commère qui connaît son mariage secret","Un ordre de sa sœur Rose"], bonne: 2, expl: "Menacée d'être découverte, elle comprend qu'elle ne peut plus vivre à Enniscorthy.", niv: 3 },
        { q: "Pourquoi Ifemelu dit-elle qu'elle est devenue « noire » en Amérique ?", choix: ["Elle a beaucoup bronzé sous le soleil de Californie l'été","Son blog lui a demandé de changer de nom","Elle a rejoint un parti politique américain","Aux États-Unis, la race définit le regard des autres"], bonne: 3, expl: "Au Nigeria, elle n'y pensait pas ; aux États-Unis, on la voit d'abord comme noire.", niv: 3 },
        { q: "Qu'ont en commun Brooklyn et Americanah ?", choix: ["Les héroïnes refusent d'y revoir leur pays","Le retour au pays révèle qu'on a changé","Le voyage se fait à pied d'un pays à l'autre","Les héros fuient une guerre civile"], bonne: 1, expl: "Eilis et Ifemelu rentrent chez elles et découvrent la distance créée par l'exil.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-ang-10",
      fiche: `## La synthèse de documents

C'est la partie principale de l'écrit (3 h 30). On reçoit un **dossier** de trois documents (des textes littéraires, un article, souvent un document iconographique : photo, tableau, affiche, dessin), lié à une thématique du programme. On rédige **en anglais** une synthèse d'environ **500 mots** qui répond à une consigne. On choisit entre **deux sujets**, portant sur deux thématiques différentes. Le **dictionnaire unilingue** (anglais-anglais) est autorisé.

### La consigne
- Elle prend souvent cette forme : « **Paying particular attention to the characteristics of the three documents, show how they interact to…** » (sujets de 2026 : « …to illustrate the encounter between two worlds », « …to explore Shakespeare's presence and heritage in today's English-speaking world »).
- **The characteristics of the documents** : leur nature (roman, poème, pièce, article, photo), leur époque, leur auteur, leur point de vue, leurs procédés.
- **Interact** : les documents se répondent, se complètent ou s'opposent. Une synthèse ne résume pas les documents l'un après l'autre : elle les **croise**.

### Ce que le correcteur attend
- Une **introduction** : présenter les trois documents (titre, auteur, date, nature), le thème commun, et une **problématique** qui reprend la consigne. Annoncer le plan.
- Un **développement** en deux ou trois parties, chacune organisée autour d'une **idée**, et non d'un document. Dans chaque partie, plusieurs documents sont mobilisés.
- Des **références précises** aux documents : citations courtes entre guillemets, avec la ligne (« l. 12 »), ou détails précis de l'image.
- L'**analyse des procédés** : narrateur, point de vue, ton (ironic, nostalgic), registre, cadrage d'une photo, couleurs.
- Une **conclusion** qui répond à la problématique, et peut ouvrir sur une œuvre étudiée en classe.
- Une **langue correcte et riche** : connecteurs logiques, vocabulaire précis, phrases variées.

### Les étapes, avec le temps
- **Lire** la consigne et les documents deux fois (25 min). Surligner les passages forts.
- **Faire un tableau au brouillon** : pour chaque document, nature, thème, point de vue, procédés, citations utiles (25 min).
- **Chercher les liens** : ce qui rapproche, ce qui oppose. En tirer 2 ou 3 idées : ce sont les parties (15 min).
- **Rédiger** directement ou presque, en anglais (1 h 30). Garder du temps pour la traduction.
- **Relire** pour les fautes (10 min).

### Les connecteurs utiles
- Ajouter : **moreover, furthermore, in addition, besides**.
- Opposer : **however, whereas, while, on the contrary, unlike document A, by contrast**.
- Comparer : **similarly, likewise, just like, both documents**.
- Conclure : **to conclude, all in all, ultimately**.
- Citer : **as the narrator puts it, as shown in line 12, the photograph depicts**.

### Les erreurs qui coûtent cher
- Résumer les documents un par un (« Document A says… Document B says… ») : c'est une juxtaposition, pas une synthèse.
- Oublier le document iconographique, ou le décrire sans l'analyser.
- Recopier de longs passages au lieu de citer brièvement.
- Donner son avis personnel à la place de l'analyse.
- Dépasser largement ou rester très loin des 500 mots.

### À retenir pour le bac
- Trois documents, environ 500 mots, en anglais, plan **par idées**.
- Toujours parler des **caractéristiques** des documents (nature, point de vue, procédés).
- Le mot clé de la consigne est **interact** : croiser, comparer, opposer.`,
      cartes: [
        { q: "Combien de mots environ doit faire la synthèse ?", r: "Environ 500 mots, en anglais." },
        { q: "Combien de documents contient le dossier de l'écrit ?", r: "En général trois, dont souvent un document iconographique." },
        { q: "Quel dictionnaire est autorisé à l'écrit ?", r: "Le dictionnaire unilingue (anglais-anglais)." },
        { q: "Que signifie « the characteristics of the documents » dans la consigne ?", r: "Leur nature, leur époque, leur auteur, leur point de vue et leurs procédés." },
        { q: "Que veut dire « show how they interact » ?", r: "Montrer comment les documents se répondent, se complètent ou s'opposent." },
        { q: "Comment organiser le développement d'une synthèse ?", r: "En 2 ou 3 parties construites autour d'idées, chacune utilisant plusieurs documents." },
        { q: "Que doit contenir l'introduction ?", r: "La présentation des documents, le thème commun, une problématique et l'annonce du plan." },
        { q: "Traduire en anglais : alors que (opposition)", r: "Whereas ou while." },
        { q: "Traduire en anglais : de même", r: "Similarly ou likewise." },
        { q: "Traduire en anglais : en outre", r: "Moreover, furthermore, in addition." },
        { q: "Comment citer un document dans la synthèse ?", r: "Une citation courte entre guillemets avec la ligne, par exemple (l. 12)." },
        { q: "Quelle est l'erreur la plus grave en synthèse ?", r: "Résumer les documents l'un après l'autre au lieu de les croiser." },
        { q: "Traduire en anglais : la photographie représente", r: "The photograph depicts (ou shows, represents)." },
        { q: "Que faire du document iconographique ?", r: "L'analyser comme les autres : composition, cadrage, couleurs, message, et le relier aux textes." },
      ],
      quiz: [
        { q: "En quelle langue rédige-t-on la synthèse ?", choix: ["En français","Au choix du candidat","En français puis en anglais","En anglais"], bonne: 3, expl: "La synthèse se rédige en anglais ; seule la traduction se fait vers le français.", niv: 1 },
        { q: "Quelle longueur vise-t-on pour la synthèse ?", choix: ["Environ 150 mots","Environ 1 000 mots","Environ 2 000 mots","Environ 500 mots"], bonne: 3, expl: "La consigne demande environ 500 mots.", niv: 1 },
        { q: "Quel dictionnaire peut-on utiliser à l'écrit ?", choix: ["Un dictionnaire bilingue","Un traducteur électronique","Un dictionnaire unilingue anglais","Un dictionnaire des synonymes français"], bonne: 2, expl: "Seul le dictionnaire unilingue (anglais-anglais) est autorisé.", niv: 1 },
        { q: "Comment traduire « whereas » ?", choix: ["Alors que","C'est pourquoi","Par ailleurs","Ainsi donc"], bonne: 0, expl: "Whereas marque une opposition, comme while.", niv: 1 },
        { q: "Comment organiser les parties d'une synthèse ?", choix: ["Un document par partie","Par idées, en croisant les documents","Par ordre chronologique des auteurs","Par longueur des documents"], bonne: 1, expl: "Chaque partie suit une idée et mobilise plusieurs documents.", niv: 2 },
        { q: "Que demande le mot « interact » dans la consigne ?", choix: ["Dialoguer avec le correcteur","Montrer les liens entre les documents","Imaginer et rédiger une suite à l'un des textes","Choisir le meilleur document"], bonne: 1, expl: "Interact : les documents se répondent, se complètent ou s'opposent.", niv: 2 },
        { q: "Que faut-il mettre dans l'introduction ?", choix: ["Un résumé détaillé de chaque document, ligne par ligne","Son avis personnel sur le sujet","Une citation célèbre d'un auteur","Documents, thème commun, problématique et plan"], bonne: 3, expl: "L'introduction présente le dossier et annonce comment on va répondre.", niv: 2 },
        { q: "Quel connecteur sert à rapprocher deux documents ?", choix: ["However","Similarly","Whereas","Unlike"], bonne: 1, expl: "Similarly = de même ; les trois autres marquent une opposition.", niv: 2 },
        { q: "Quelle phrase introduit le mieux une citation ?", choix: ["The text it says that « … » in it.","Like the text says « … » very well.","In the document I see « … » for me.","As the narrator puts it, « … » (l. 8)."], bonne: 3, expl: "As the narrator puts it et le renvoi à la ligne : précis et correct.", niv: 2 },
        { q: "Que veut dire analyser les « characteristics » d'une photo ?", choix: ["Donner le prix de l'appareil photo","Étudier cadrage, composition et couleurs","Dire si l'on aime la photo ou non","Compter les personnes présentes"], bonne: 1, expl: "On analyse les choix du photographe et leur effet.", niv: 3 },
        { q: "Pourquoi « Document A says… Document B says… » est-il pénalisé ?", choix: ["Ce sont des fautes de grammaire","C'est une juxtaposition et non une synthèse","Il est interdit de nommer les documents","Le correcteur ne lit pas les citations"], bonne: 1, expl: "Il faut croiser les documents, pas les résumer l'un après l'autre.", niv: 3 },
        { q: "Que faire dans la conclusion de la synthèse ?", choix: ["Ajouter un quatrième document","Résumer encore chaque document","Répondre à la problématique et ouvrir","Poser des questions sans réponse"], bonne: 2, expl: "La conclusion répond à la question posée et peut ouvrir sur une œuvre étudiée.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-ang-11",
      fiche: `## Traduction et transposition

La seconde partie de l'écrit est une **traduction** : traduire **en français** un court passage (quelques lignes) de l'un des documents du dossier, indiqué par ses numéros de ligne. Le sujet peut proposer à la place une **transposition**, qui demande de faire passer un passage d'une forme à une autre en suivant une consigne précise : la lire mot à mot. Compter environ **45 minutes**.

### Les règles d'une bonne traduction
- **Tout traduire** : ne rien sauter, ne rien ajouter. Un oubli est une faute.
- **Respecter le sens**, pas le mot à mot : le texte doit sonner comme du **vrai français**.
- **Garder le registre** : familier, soutenu, poétique.
- **Garder les temps du récit** : un récit au prétérit se traduit en général au **passé simple** et à l'**imparfait** (ou au passé composé si le texte est oral ou familier). Ne pas mélanger.
- **Relire le français seul**, à la fin : chaque phrase doit être correcte et naturelle.

### Les pièges de grammaire
- **Present perfect + for / since** : « I have lived here for ten years » = **j'habite ici depuis dix ans** (présent en français).
- **Used to / would** (habitude passée) = **l'imparfait** : « She would sit by the window » = elle s'asseyait près de la fenêtre.
- **Le passif** se rend souvent par **on** : « He was told to leave » = on lui dit de partir.
- **Le possessif devant les parties du corps** devient l'article : « She raised her hand » = elle leva **la** main.
- **Le chassé-croisé** : avec les verbes à particule, le mouvement passe dans le verbe et la manière dans un complément : « He ran out of the room » = il **sortit** de la pièce **en courant**.
- **Les modaux** : « He must have forgotten » = il a dû oublier ; « She could have won » = elle aurait pu gagner.
- **La forme en -ing** n'est pas toujours un participe présent : « I'm used to waiting » = j'ai l'habitude d'attendre.

### Les faux amis à connaître
- **actually** = en fait (et non « actuellement », qui se dit *currently*).
- **eventually** = finalement (et non « éventuellement », qui se dit *possibly*).
- **to realize** = se rendre compte (et non « réaliser » un projet, *to carry out*).
- **library** = bibliothèque (une librairie = *a bookshop*).
- **sympathetic** = compatissant (sympathique = *nice, friendly*).
- **to attend** = assister à ; **to assist** = aider.
- **deception** = tromperie (la déception = *disappointment*).
- **sensible** = raisonnable ; **sensitive** = sensible.
- **a lecture** = un cours magistral, une conférence (une lecture = *reading*).
- **to pretend** = faire semblant.

### Les petits mots qui piègent
- **to nod** = hocher la tête ; **to shrug** = hausser les épaules ; **to frown** = froncer les sourcils.
- **The man I saw** : le relatif est sous-entendu : l'homme **que** j'ai vu.
- **Whose** = dont, de qui ; **which** = qui, que (choses).
- **Still** = toujours, encore ; **yet** = pourtant ou encore (dans une négation : *not yet* = pas encore).

### La méthode, pas à pas
- Lire **tout le document** avant de traduire le passage, pour comprendre le contexte (qui parle, quand).
- Repérer le **temps du récit** et le **registre**.
- Traduire au brouillon phrase par phrase, en cherchant le mot juste dans le dictionnaire unilingue (la définition aide à trouver le sens exact).
- Réécrire en bon français, puis **comparer avec l'original** : rien n'a disparu ?
- Recopier proprement en soignant l'orthographe et les accords.

### À retenir pour le bac
- Tout traduire, en bon français, au bon temps.
- Present perfect + for = présent + depuis ; used to / would = imparfait ; passif = on.
- Chassé-croisé : *he ran out* = il sortit en courant.
- Faux amis : actually, eventually, realize, library, sympathetic, attend, deception.`,
      cartes: [
        { q: "Traduire : actually", r: "En fait. « Actuellement » se dit currently." },
        { q: "Traduire : eventually", r: "Finalement, au bout du compte. « Éventuellement » se dit possibly." },
        { q: "Traduire : library", r: "Une bibliothèque. Une librairie = a bookshop." },
        { q: "Traduire : sympathetic", r: "Compatissant. « Sympathique » se dit nice ou friendly." },
        { q: "Traduire : to attend a meeting", r: "Assister à une réunion. To assist = aider." },
        { q: "Traduire : deception", r: "La tromperie. La déception = disappointment." },
        { q: "Traduire : to realize", r: "Se rendre compte. Réaliser un projet = to carry out a project." },
        { q: "Traduire en français : I have lived here for ten years.", r: "J'habite ici depuis dix ans." },
        { q: "Traduire en français : She would sit by the window.", r: "Elle s'asseyait près de la fenêtre (habitude : imparfait)." },
        { q: "Traduire en français : He ran out of the room.", r: "Il sortit de la pièce en courant (chassé-croisé)." },
        { q: "Traduire en français : She raised her hand.", r: "Elle leva la main (l'article remplace le possessif)." },
        { q: "Traduire en français : He was told to leave.", r: "On lui dit de partir (le passif devient « on »)." },
        { q: "Traduire : to nod, to shrug, to frown", r: "Hocher la tête, hausser les épaules, froncer les sourcils." },
        { q: "Traduire en français : He must have forgotten.", r: "Il a dû oublier." },
        { q: "Quel temps choisir pour un récit au prétérit ?", r: "En général le passé simple et l'imparfait, sans les mélanger avec le passé composé." },
      ],
      quiz: [
        { q: "Comment traduire « actually » ?", choix: ["En fait","Actuellement","Activement","Exactement"], bonne: 0, expl: "Actually = en réalité, en fait. Actuellement = currently.", niv: 1 },
        { q: "Comment traduire « library » ?", choix: ["Bibliothèque","Librairie","Liberté","Livret"], bonne: 0, expl: "Library = bibliothèque ; librairie = bookshop.", niv: 1 },
        { q: "Vers quelle langue traduit-on à l'écrit de LLCER anglais ?", choix: ["Vers l'anglais","Vers le français","Au choix du candidat","Vers les deux langues"], bonne: 1, expl: "La traduction se fait de l'anglais vers le français.", niv: 1 },
        { q: "Comment traduire « eventually » ?", choix: ["Éventuellement","Évidemment","Finalement","Également"], bonne: 2, expl: "Eventually = au bout du compte. Éventuellement = possibly.", niv: 1 },
        { q: "Comment traduire « I have lived here for ten years » ?", choix: ["J'ai habité ici pour dix ans","J'habite ici depuis dix ans","J'ai vécu ici il y a dix ans","J'habiterai ici dix ans"], bonne: 1, expl: "Present perfect + for = présent + depuis : l'action continue.", niv: 2 },
        { q: "Comment traduire « He ran out of the room » ?", choix: ["Il courut dehors de la pièce","Il manqua de place dans la pièce","Il sortit de la pièce en courant","Il courut longtemps dans la pièce"], bonne: 2, expl: "Chassé-croisé : out devient le verbe (sortir), ran devient « en courant ».", niv: 2 },
        { q: "Comment traduire « She would sit by the fire every evening » ?", choix: ["Elle voudrait s'asseoir près du feu","Elle s'assiérait près du feu ce soir","Elle s'asseyait près du feu chaque soir","Elle aurait dû s'asseoir près du feu"], bonne: 2, expl: "Would + chaque soir exprime une habitude passée : l'imparfait.", niv: 2 },
        { q: "Comment traduire « She raised her hand » ?", choix: ["Elle leva la main","Elle leva sa main à elle","Elle éleva sa main","Elle a monté sa main"], bonne: 0, expl: "Devant une partie du corps, le français met l'article.", niv: 2 },
        { q: "Comment traduire « He was told to wait » ?", choix: ["On lui dit d'attendre","Il était dit d'attendre","Il fut raconté d'attendre","Lui a été dit d'attendre"], bonne: 0, expl: "Le passif anglais se rend souvent par « on ».", niv: 2 },
        { q: "Que signifie « He shrugged » ?", choix: ["Il hocha la tête","Il fronça les sourcils","Il haussa les épaules","Il se gratta la tête"], bonne: 2, expl: "To shrug = hausser les épaules ; to nod = hocher la tête ; to frown = froncer les sourcils.", niv: 2 },
        { q: "Comment traduire « She could have won » ?", choix: ["Elle pouvait gagner","Elle a pu gagner","Elle pourra gagner","Elle aurait pu gagner"], bonne: 3, expl: "Could have + participe = une possibilité passée qui ne s'est pas réalisée.", niv: 3 },
        { q: "Un texte au prétérit raconte une histoire. Quels temps choisir en français ?", choix: ["Le présent et le futur","Le passé simple et l'imparfait","Le plus-que-parfait d'un bout à l'autre","Le conditionnel passé"], bonne: 1, expl: "Le récit écrit se traduit au passé simple et à l'imparfait, sans mélange.", niv: 3 },
        { q: "Que faire d'un mot qu'on ne comprend pas dans le passage à traduire ?", choix: ["Le laisser en anglais dans la traduction","Sauter la phrase qui le contient","Le remplacer par des points de suspension entre crochets","Chercher sa définition dans le dictionnaire unilingue"], bonne: 3, expl: "Un oubli est une faute : la définition anglaise aide à trouver le mot français.", niv: 3 },
      ],
    },
  ],
  methode: [
    {
      "id": "llcer-ang-m1",
      "mat": "llcer-ang",
      "titre": "La synthèse de documents",
      "formules": [
        "Paying particular attention to the characteristics of the three documents, show how they interact to…",
        "Show how the documents shed light on…",
        "In about 500 words…"
      ],
      "vu": [
        "Format de l'écrit depuis la session 2021",
        "Bac 2026 métropole (deux sujets : « Voyages, territoires, frontières » et « Arts et débats d'idées »)"
      ],
      "pts": "la plus grande partie de la note de l'écrit",
      "attendu": "Une synthèse en anglais d'environ 500 mots, qui croise les trois documents autour d'une problématique. Le correcteur attend une introduction qui présente les documents, un développement en parties organisées par idées (et non document par document), des références précises (citations courtes avec la ligne, détails de l'image), l'analyse des procédés et une conclusion qui répond à la consigne.",
      "etapes": [
        "Lire la consigne, puis les trois documents deux fois, en surlignant les passages forts.",
        "Au brouillon, remplir un tableau : nature, date, point de vue, procédés et citations de chaque document.",
        "Repérer ce qui rapproche et ce qui oppose les documents, et en tirer 2 ou 3 idées.",
        "Rédiger l'introduction : présenter les documents, le thème commun, la problématique et le plan.",
        "Rédiger chaque partie autour d'une idée, avec au moins deux documents et des citations courtes.",
        "Conclure en répondant à la consigne, puis relire les fautes."
      ],
      "mots": [
        "whereas",
        "similarly",
        "however",
        "both documents",
        "as the narrator puts it",
        "the photograph depicts"
      ],
      "pieges": [
        "Résumer les documents l'un après l'autre (juxtaposition).",
        "Oublier le document iconographique ou ne faire que le décrire.",
        "Recopier de longs passages au lieu de citer brièvement.",
        "Donner son opinion à la place de l'analyse."
      ],
      "cas": "Dossier sur l'axe « Migration et exil » : un extrait de roman où une jeune Irlandaise arrive à New York dans les années 1950, un poème sur le mal du pays, une photographie d'immigrants à Ellis Island vers 1900.",
      "question": "Paying particular attention to the characteristics of the three documents, show how they interact to convey the experience of exile. Rédige l'introduction et le plan.",
      "modele": "Introduction : The three documents deal with the experience of exile. Document A is an extract from a novel set in the 1950s, in which a young Irish woman discovers New York; document B is a poem about homesickness; document C is a photograph of immigrants at Ellis Island around 1900. Whereas the photograph shows the collective hope of arrival, the two texts focus on the inner feelings of one person. We will see how they interact to show that exile is both a promise and a loss. Plan : I. The hope of a new life (A and C: the arrival, the crowd, the Statue of Liberty). II. The pain of separation (A and B: homesickness, memories of home, short sentences, nostalgic tone). III. A divided identity (A, B and C: belonging to two places, never fully at home).",
      "grille": [
        "Les trois documents présentés (nature, date)",
        "Une problématique qui reprend la consigne",
        "Un plan par idées, pas par documents",
        "Chaque partie utilise au moins deux documents",
        "Connecteurs de comparaison et d'opposition",
        "Anglais correct"
      ]
    },
    {
      "id": "llcer-ang-m2",
      "mat": "llcer-ang",
      "titre": "La traduction vers le français",
      "formules": [
        "Translate into French from line … to line … (document …).",
        "Traduisez en français le passage suivant."
      ],
      "vu": [
        "Format de l'écrit depuis la session 2021",
        "Bac 2026 métropole (deux sujets : « Voyages, territoires, frontières » et « Arts et débats d'idées »)"
      ],
      "pts": "la seconde partie de l'écrit",
      "attendu": "Un texte en français correct et naturel, fidèle au sens et au registre de l'original, sans oubli ni ajout, avec des temps cohérents. Le correcteur repère les contresens, les oublis, les faux amis et les fautes de français.",
      "etapes": [
        "Lire tout le document pour savoir qui parle, où et quand.",
        "Repérer le temps du récit (prétérit : passé simple et imparfait) et le registre.",
        "Traduire phrase par phrase au brouillon, en vérifiant les mots inconnus dans le dictionnaire unilingue.",
        "Réécrire en bon français, en traitant les pièges (chassé-croisé, passif, possessif).",
        "Comparer avec l'original : aucun mot ne doit manquer.",
        "Recopier en soignant l'orthographe et les accords."
      ],
      "mots": [
        "passé simple",
        "imparfait",
        "chassé-croisé",
        "on",
        "depuis",
        "faux ami"
      ],
      "pieges": [
        "Traduire mot à mot (« il courut dehors de la pièce »).",
        "Les faux amis : actually, eventually, library, sympathetic.",
        "Mélanger passé simple et passé composé.",
        "Sauter un mot difficile."
      ],
      "cas": "Passage d'un récit (inventé) : « She had lived in the town for ten years. Every morning she would walk to the library. That day, when the letter came, she ran out of the house. She was told that her brother had eventually left for Boston. »",
      "question": "Traduis ce passage en français.",
      "modele": "Elle habitait la ville depuis dix ans. Chaque matin, elle se rendait à pied à la bibliothèque. Ce jour-là, quand la lettre arriva, elle sortit de la maison en courant. On lui apprit que son frère avait fini par partir pour Boston.",
      "grille": [
        "« Depuis dix ans » pour had lived… for",
        "Imparfait pour l'habitude (would walk)",
        "Library traduit par bibliothèque",
        "Chassé-croisé : sortit en courant",
        "Passif rendu par « on »",
        "Eventually traduit par « finir par »",
        "Français correct, sans oubli"
      ]
    },
    {
      "id": "llcer-ang-m3",
      "mat": "llcer-ang",
      "titre": "Analyser un document iconographique",
      "formules": [
        "Paying particular attention to the characteristics of the three documents…",
        "Document C is a photograph / a painting / a poster…"
      ],
      "vu": [
        "Format de l'écrit depuis la session 2021",
        "Bac 2026 métropole (deux sujets : « Voyages, territoires, frontières » et « Arts et débats d'idées »)"
      ],
      "pts": "partie de la synthèse",
      "attendu": "Présenter l'image (nature, auteur, date, contexte), décrire ce qu'on voit avec précision (premier plan, arrière-plan, couleurs, cadrage), puis dire le message et le relier aux textes du dossier.",
      "etapes": [
        "Présenter : nature, auteur, date, lieu, contexte.",
        "Décrire : in the foreground, in the background, on the left, on the right.",
        "Analyser les choix : cadrage, lumière, couleurs, texte éventuel, point de vue.",
        "Dire le message et l'effet sur le spectateur.",
        "Relier l'image à au moins un texte du dossier."
      ],
      "mots": [
        "in the foreground",
        "in the background",
        "the photograph depicts",
        "a close-up",
        "a low-angle shot",
        "the caption"
      ],
      "pieges": [
        "Décrire sans analyser.",
        "Oublier la légende (caption) et la date.",
        "Traiter l'image à part, sans lien avec les textes."
      ],
      "cas": "Une affiche (inventée) du Globe Theatre dans le métro londonien : un acteur en costume du XVIe siècle tient un smartphone, avec le slogan « Shakespeare: still trending ».",
      "question": "Analyse cette affiche en quatre ou cinq phrases, en anglais.",
      "modele": "This poster, displayed in the London Underground, advertises a season at Shakespeare's Globe. In the foreground, an actor in an Elizabethan costume is holding a smartphone, which creates a humorous contrast between the past and the present. The slogan « Shakespeare: still trending » uses the vocabulary of social media to suggest that the playwright is still popular. The poster thus presents Shakespeare as a living heritage, just like document B, which imagines the Bard in the modern world.",
      "grille": [
        "Nature et contexte présentés",
        "Description précise avec le vocabulaire de l'image",
        "Analyse du contraste et du slogan",
        "Message dégagé",
        "Lien avec un autre document"
      ]
    },
    {
      "id": "llcer-ang-m4",
      "mat": "llcer-ang",
      "titre": "L'oral : présenter son dossier",
      "formules": [
        "Present your dossier.",
        "Why did you choose this document?",
        "How does this document relate to the thematic?"
      ],
      "vu": [
        "Épreuve orale de 20 minutes sans préparation, sur un dossier personnel de documents dont au moins un extrait d'œuvre intégrale",
        "Note de service de 2020 sur l'épreuve de spécialité (BO spécial n° 7), toujours appliquée"
      ],
      "pts": "la moitié de la note de la spécialité",
      "attendu": "Une présentation claire et vivante, en anglais, de son dossier : le fil qui relie les documents, le lien avec les thématiques du programme, une analyse de chaque document et une réflexion personnelle. Puis un entretien où l'on répond aux questions du jury avec des exemples précis.",
      "etapes": [
        "Annoncer le titre du dossier et la question qui relie les documents.",
        "Présenter chaque document en quelques phrases : nature, auteur, date, idée principale.",
        "Montrer les liens entre les documents et avec l'œuvre intégrale.",
        "Dire ce que ce dossier t'a appris ou fait réfléchir.",
        "Pendant l'entretien, répondre par des phrases complètes, avec un exemple tiré des documents."
      ],
      "mots": [
        "my dossier focuses on",
        "I chose this document because",
        "this echoes",
        "on the other hand",
        "to sum up",
        "in my opinion"
      ],
      "pieges": [
        "Réciter un texte appris par cœur, sans regarder le jury.",
        "Présenter les documents sans les relier.",
        "Ne pas savoir expliquer pourquoi on a choisi un document.",
        "Répondre par oui ou non pendant l'entretien."
      ],
      "cas": "Dossier sur l'axe « Mise en scène de soi » : un extrait de The Caretaker, un autoportrait photographique, un article sur les influenceurs, un extrait de The Great Gatsby.",
      "question": "Rédige en anglais l'introduction de ta présentation (5 ou 6 phrases).",
      "modele": "My dossier focuses on the axis « Mise en scène de soi », and on one question: why do people invent an image of themselves? It is made of four documents. The main one is an extract from Harold Pinter's play The Caretaker (1960), in which Davies, a tramp, keeps lying about his name and his papers. I chose it because it shows that inventing yourself can be a way to survive. It echoes The Great Gatsby, where James Gatz becomes Jay Gatsby, and an article about influencers who show a perfect life online. Finally, a photographic self-portrait raises the question of the mask.",
      "grille": [
        "Titre et question du dossier",
        "Œuvre intégrale présentée (auteur, date)",
        "Raison du choix expliquée",
        "Liens entre les documents",
        "Anglais clair et correct"
      ]
    }
  ],
  sujets: [
    {
      id: "llcer-ang-s1", matiere: 'llcer-ang', titre: "Sujet d'entraînement 1 : Voyages, territoires, frontières", duree: 210,
      enonce: `## Sujet d'entraînement 1 (inventé, au format de l'écrit)

Ce sujet est inventé pour s'entraîner : les trois documents ont été écrits ou décrits pour cet exercice. Durée : 3 h 30. Dictionnaire unilingue autorisé.

Thématique : **Voyages, territoires, frontières**. Axe : **Migration et exil**.

### Document A : extrait d'un roman (inventé), « The Far Shore », 2011

When the ship finally came into the harbour, Nora stood at the rail and did not move. Behind her, a child was crying and a man was singing an old song from home, too loudly, as if to keep the city away. She had imagined New York a thousand times in her mother's kitchen, but she had never imagined the noise.

On the quay, a woman in a grey coat was holding a sign with her name on it. Nora waved, then felt foolish. She had been told that she would find work within a week. She had been told many things.

That night, in the small room above the bakery, she unpacked her bag. Her mother had wrapped a cup in a scarf, so that it would not break. Nora held it for a long time. Then she put it on the windowsill, where she could see it from her bed, and she realised that she had not yet thought of the word « home » without wanting to cry.

### Document B : poème (inventé), « Two Kitchens », 2019

My grandmother kept two kitchens:
one in Lagos, one in her head.
In London she cooked rice the old way
and spoke to the steam in Yoruba,
as if the pot could carry her voice
across the sea, back to the yard
where the mango tree still stood.
We ate, and we said it was good.
She smiled, and said it was nearly good.

### Document C : photographie (décrite)

Une photographie en noir et blanc, prise vers 1905 dans le grand hall d'Ellis Island, à New York. Au premier plan, une mère est assise sur un banc avec trois enfants ; elle tient un baluchon sur ses genoux et regarde à droite, hors du cadre. Les enfants portent des étiquettes accrochées à leurs manteaux. À l'arrière-plan, une longue file de familles attend devant des barrières en métal, sous de hautes fenêtres. La lumière tombe d'en haut sur la mère et les enfants.

### Partie 1 : synthèse (en anglais, environ 500 mots)

Paying particular attention to the characteristics of the three documents, show how they interact to convey the experience of leaving one's homeland.

### Partie 2 : traduction

Translate into French document A, from « On the quay » to « She had been told many things. »`,
      corrige: `## Corrigé du sujet d'entraînement 1

### Partie 1 : pistes de synthèse

Introduction. The three documents deal with migration. Document A is an extract from a novel published in 2011, in which a young Irish woman, Nora, arrives in New York. Document B is a contemporary poem about a grandmother from Lagos living in London. Document C is a black-and-white photograph taken at Ellis Island around 1905. Whereas the photograph shows a collective experience, the two texts focus on the feelings of individuals. We will see how they interact to show that leaving one's homeland is both a hope and a loss.

I. The arrival: hope and fear. In document A, the arrival in the harbour is a shock: Nora « did not move », and the noise of the city is what she « had never imagined ». The photograph also shows a moment of waiting: the mother looks out of the frame, as if towards an uncertain future, and the labels on the children's coats suggest that migrants are processed like luggage. Both documents present arrival as a mix of hope and anxiety.

II. What migrants carry with them. The cup wrapped in a scarf in document A and the bundle on the mother's knees in document C are similar symbols: a few objects carry a whole past. In document B, what is carried is invisible: the language (Yoruba), the cooking, the memory of the mango tree. The metaphor of the « two kitchens » shows a life split between two places.

III. A lasting exile. The documents show that exile does not end with the journey. Nora cannot think of « home » without wanting to cry; the grandmother still cooks « the old way » years later, and the last line, « nearly good », expresses a gap that cannot be filled. Unlike document C, which freezes one moment, the poem covers generations: the grandchildren belong to London, the grandmother does not completely.

Conclusion. The three documents interact to show that migration is a journey in space but also in time and memory: something is always left behind. This echoes novels such as Brooklyn by Colm Tóibín or Americanah by Chimamanda Ngozi Adichie.

### Partie 2 : proposition de traduction

Sur le quai, une femme en manteau gris tenait une pancarte portant son nom. Nora lui fit signe de la main, puis se sentit ridicule. On lui avait dit qu'elle trouverait du travail en moins d'une semaine. On lui avait dit beaucoup de choses.

Les points à réussir : « was holding » (imparfait : tenait) ; « waved » (fit signe de la main, au passé simple) ; « felt foolish » (se sentit ridicule, bête) ; le passif « She had been told » rendu par « On lui avait dit » ; « within a week » (en moins d'une semaine, d'ici une semaine) ; la répétition finale, à garder, qui exprime le doute.`,
      grille: [{"c":"Synthèse : introduction qui présente les trois documents et pose une problématique","pts":3},{"c":"Synthèse : plan par idées, documents croisés et comparés","pts":4},{"c":"Synthèse : références précises et analyse des procédés (dont la photographie)","pts":3},{"c":"Synthèse : qualité de l'anglais (correction, richesse, connecteurs)","pts":6},{"c":"Traduction : sens exact, sans oubli, temps et passif bien rendus, français correct","pts":4}],
    },
  ],
};
