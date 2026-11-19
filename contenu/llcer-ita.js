// Langues, littératures et cultures étrangères (LLCER) italien — spécialité, terminale voie générale. Sources : voir matiere.sources.
// Programme : BO spécial n° 8 du 25 juillet 2019 ; œuvres : programme limitatif 2026-2028 (BO n° 21 du 21 mai 2026, annexe 4 italien).
// Épreuve : écrit 3 h 30 (synthèse et traduction ou transposition) et oral de 20 minutes sur dossier, chacun pour moitié.
export default {
  matiere: {
    id: 'llcer-ita',
    nom: 'LLCER italien',
    voie: 'generale',
    epreuve: { type: 'ecrit', duree: 210, coef: 16, quand: 'juin (écrit) et juin-juillet (oral)', note: 'Écrit de 3 h 30 (synthèse de documents en italien, environ 500 mots, et traduction ou transposition) et oral de 20 minutes sans préparation sur un dossier personnel ; écrit et oral comptent chacun pour moitié' },
    sources: [
      "https://eduscol.education.gouv.fr/sites/default/files/document/nsproglimitatifterminalellcerrs2026et2027annexe4-italien-eduscolpdf-127238.pdf",
      "https://www.education.gouv.fr/bo/2026/Hebdo21/MENE2611474N",
      "https://eduscol.education.fr/document/23773/download",
      "https://www.education.gouv.fr/bo/20/Special7/MENE2019311N.htm",
    ],
    chapitres: [
      { id: "llcer-ita-1", t: "Voyages : terra incognita", theme: "Voyages" },
      { id: "llcer-ita-2", t: "Voyages : mare nostrum", theme: "Voyages" },
      { id: "llcer-ita-3", t: "Voyages : l'Italie en voyage(s)", theme: "Voyages" },
      { id: "llcer-ita-4", t: "L'art du contraste : identité et identités", theme: "L'art du contraste" },
      { id: "llcer-ita-5", t: "L'art du contraste : le sacré et le profane", theme: "L'art du contraste" },
      { id: "llcer-ita-6", t: "L'art du contraste : le rire et le drame", theme: "L'art du contraste" },
      { id: "llcer-ita-7", t: "Laboratorio italiano : cité et territoire", theme: "Laboratorio italiano" },
      { id: "llcer-ita-8", t: "Laboratorio italiano : Moyen Âge, Humanisme et Renaissance", theme: "Laboratorio italiano" },
      { id: "llcer-ita-9", t: "Laboratorio italiano : découvrir, construire, inventer", theme: "Laboratorio italiano" },
      { id: "llcer-ita-10", t: "Œuvres du programme limitatif : les textes (2026-2028)", theme: "Œuvres intégrales" },
      { id: "llcer-ita-11", t: "Œuvres du programme limitatif : les films (2026-2028)", theme: "Œuvres intégrales" },
      { id: "llcer-ita-12", t: "Méthode : la synthèse de documents en italien", theme: "Méthode de l'écrit" },
      { id: "llcer-ita-13", t: "Méthode : traduction et transposition", theme: "Méthode de l'écrit" },
    ],
  },
  paquets: [
    {
      chapitre: "llcer-ita-1",
      fiche: `## Terra incognita : le voyage intérieur

Dans la culture italienne, le voyage est souvent une **métaphore de la vie** : on part, on se perd, on se transforme, on revient (ou pas). Il peut être réel, imaginaire ou « de papier » : lire, c'est déjà voyager.

### Le vocabulaire à connaître
- **il viaggio** : le voyage ; **viaggiare** ; **il viaggiatore** ; **la meta** : le but, la destination ; **il cammino** : le chemin.
- **la scoperta** : la découverte ; **scoprire** : découvrir ; **esplorare** ; **l'ignoto** : l'inconnu ; **l'altrove** : l'ailleurs.
- **smarrirsi** / **perdersi** : se perdre ; **ritrovarsi** : se retrouver ; **il ritorno** : le retour ; **la nostalgia**.
- **il viaggio di formazione** : le voyage initiatique ; **crescere** : grandir ; **la metamorfosi**.

### Le voyage fondateur : Dante
- **Dante Alighieri**, **Divina Commedia** (écrite vers 1307-1321) : un voyage à travers l'**Inferno**, le **Purgatorio** et le **Paradiso**, guidé par **Virgile** puis par **Béatrice**.
- Premier vers : « **Nel mezzo del cammin di nostra vita / mi ritrovai per una selva oscura** » : le poète perdu dans la forêt obscure, image de l'homme égaré dans le péché.
- Ce voyage dans l'au-delà est un voyage intérieur vers le salut.

### Le voyage vers l'inconnu
- **Marco Polo**, **Il Milione** (vers 1298) : le récit, dicté en prison à Rustichello de Pise, de son voyage en Chine à la cour de **Kublai Khan**.
- **Italo Calvino** reprend ces personnages dans **Le città invisibili** (1973) : Marco Polo décrit à l'empereur des villes imaginaires.

### Le voyage de papier et l'imagination
- **Giacomo Leopardi**, **L'infinito** (1819) : derrière une haie (**siepe**), le poète imagine des espaces infinis : « **e il naufragar m'è dolce in questo mare** ».
- **Emilio Salgari** écrit des romans d'aventure exotiques (**Sandokan**) sans avoir quitté l'Italie.
- **Carlo Collodi**, **Le avventure di Pinocchio** (1883) : un voyage initiatique où la marionnette devient un vrai garçon.

### Le Grand Tour
- Du XVIIe au XIXe siècle, les jeunes aristocrates européens font le **Grand Tour** en Italie : Rome, Florence, Venise, Naples. **Goethe** (**Viaggio in Italia**), **Stendhal** (Rome, Naples et Florence, 1817) y cherchent l'Antiquité et une initiation à la vie.
- L'Italie est alors autant une destination qu'un rêve.

### À retenir pour le bac
- Il viaggio, la meta, smarrirsi, la scoperta, l'altrove.
- Dante, « Nel mezzo del cammin » ; Marco Polo, Il Milione (vers 1298) ; Calvino, Le città invisibili (1973).
- Leopardi, L'infinito (1819) ; Pinocchio (1883) ; le Grand Tour.`,
      cartes: [
        { q: "Que signifie « la meta » ?", r: "Le but, la destination." },
        { q: "Traduire en italien : se perdre", r: "Smarrirsi (perdersi)." },
        { q: "Que signifie « l'altrove » ?", r: "L'ailleurs." },
        { q: "Que signifie « la scoperta » ?", r: "La découverte (scoprire = découvrir)." },
        { q: "Quelles sont les trois parties de la Divina Commedia ?", r: "Inferno, Purgatorio, Paradiso." },
        { q: "Quel est le premier vers de la Divina Commedia ?", r: "« Nel mezzo del cammin di nostra vita »." },
        { q: "Qui guide Dante dans l'Enfer et le Purgatoire ?", r: "Le poète latin Virgile (Béatrice le guide ensuite au Paradis)." },
        { q: "Qu'est-ce que Il Milione ?", r: "Le récit du voyage de Marco Polo en Chine, dicté vers 1298 à Rustichello de Pise." },
        { q: "Que décrit Marco Polo dans Le città invisibili de Calvino ?", r: "Des villes imaginaires, racontées à l'empereur Kublai Khan (1973)." },
        { q: "Que voit le poète de L'infinito ?", r: "Une haie (siepe) qui cache l'horizon : il imagine des espaces infinis (Leopardi, 1819)." },
        { q: "Quel est le dernier vers de L'infinito ?", r: "« E il naufragar m'è dolce in questo mare »." },
        { q: "Qu'est-ce qu'un voyage de papier ?", r: "Un voyage fait par la lecture ou l'imagination, sans partir (Salgari)." },
        { q: "Qu'est-ce que le Grand Tour ?", r: "Le voyage en Italie des jeunes aristocrates européens (XVIIe-XIXe siècles)." },
        { q: "Pourquoi Pinocchio est-il un voyage initiatique ?", r: "Au fil de ses aventures, la marionnette apprend et devient un vrai garçon (Collodi, 1883)." },
      ],
      quiz: [
        { q: "Que signifie « il viaggio » ?", choix: ["Le visage","Le voyage","Le village","La valise"], bonne: 1, expl: "Viaggiare = voyager.", niv: 1 },
        { q: "Qui a écrit la Divina Commedia ?", choix: ["Pétrarque","Dante","Boccace","Machiavel"], bonne: 1, expl: "Écrite vers 1307-1321.", niv: 1 },
        { q: "Que signifie « smarrirsi » ?", choix: ["Se marier","Sourire","Se fâcher","Se perdre"], bonne: 3, expl: "Synonyme : perdersi.", niv: 1 },
        { q: "Quel voyageur raconte Il Milione ?", choix: ["Christophe Colomb","Amerigo Vespucci","Marco Polo","Ulysse"], bonne: 2, expl: "Voyage en Chine.", niv: 1 },
        { q: "Qui guide Dante en Enfer ?", choix: ["Béatrice","Homère","Virgile","Saint François"], bonne: 2, expl: "Béatrice le guide au Paradis.", niv: 2 },
        { q: "Que signifie « la meta » ?", choix: ["La moitié du chemin","Le métal précieux","La carte routière","La destination"], bonne: 3, expl: "But du voyage.", niv: 2 },
        { q: "Qu'est-ce que le Grand Tour ?", choix: ["Le voyage en Italie des jeunes aristocrates","Une course cycliste autour de l'Italie","Le tour du monde de Marco Polo","Un pèlerinage vers Saint-Jacques"], bonne: 0, expl: "XVIIe-XIXe siècles.", niv: 2 },
        { q: "Qu'imagine le poète de L'infinito derrière la haie ?", choix: ["Une ville en ruine","Des espaces infinis","Un champ de bataille","Une fête de village"], bonne: 1, expl: "Leopardi, 1819.", niv: 2 },
        { q: "Qu'est-ce qu'un « voyage de papier » ?", choix: ["Voyager avec un billet d'avion imprimé","Voyager par la lecture et l'imagination","Écrire une carte postale de vacances","Fabriquer un bateau en papier"], bonne: 1, expl: "Salgari n'a pas quitté l'Italie.", niv: 2 },
        { q: "Que symbolise la selva oscura de Dante ?", choix: ["L'homme égaré dans le péché","La forêt de Toscane en hiver","Le paradis perdu des Romains","La maison natale du poète"], bonne: 0, expl: "Début de la Commedia.", niv: 3 },
        { q: "Pourquoi le voyage est-il une métaphore de la vie ?", choix: ["Départ, épreuves et transformation rappellent les étapes d'une existence","Les Italiens passent leur vie à voyager à l'étranger","Les voyages duraient autrefois toute une vie","Chaque poète refusait de parler de la vie réelle des gens"], bonne: 0, expl: "Voyage initiatique.", niv: 3 },
        { q: "Pourquoi Calvino reprend-il Marco Polo et Kublai Khan ?", choix: ["Pour écrire un manuel d'histoire de la Chine","Pour raconter sa propre vie d'explorateur","Pour décrire avec précision les villes italiennes réelles de son temps","Pour faire du voyage un jeu de l'imagination et de la mémoire"], bonne: 3, expl: "Le città invisibili, 1973.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-ita-2",
      fiche: `## Mare nostrum : la Méditerranée

Les Romains appelaient la Méditerranée **Mare nostrum** (« notre mer »). Elle est à la fois un **pont** entre l'Europe, l'Afrique et l'Orient et une **barrière**, aujourd'hui lieu de drames migratoires. Son mythe central est celui d'**Ulysse**.

### Le vocabulaire à connaître
- **il mare** ; **la riva** / **la sponda** : le rivage ; **l'isola** : l'île ; **il porto** ; **la nave** : le navire ; **la barca** : la barque.
- **navigare** ; **il naufragio** : le naufrage ; **naufragare** ; **la tempesta** ; **le onde** : les vagues.
- **lo sbarco** : le débarquement ; **il barcone** : le bateau de migrants ; **il migrante** ; **l'accoglienza** : l'accueil ; **soccorrere** : secourir.
- **la frontiera** ; **il ponte** : le pont ; **il confine** : la frontière.

### Ulysse, voyageur italien
- Dans l'**Inferno** (chant **XXVI**), **Dante** imagine qu'Ulysse ne rentre pas à Ithaque : il franchit les colonnes d'Hercule pour connaître le monde et meurt en mer. Il exhorte ses compagnons : « **Fatti non foste a viver come bruti, / ma per seguir virtute e canoscenza** ».
- **Primo Levi** récite ce chant à Auschwitz dans le chapitre « **Il canto di Ulisse** » de **Se questo è un uomo** (1947) : la culture comme dignité humaine.
- Ulysse incarne l'aventure, la soif de savoir et la nostalgie (**nostos** : le retour).

### Une mer d'échanges
- Les **Repubbliche marinare** (Venise, Gênes, Pise, Amalfi) dominent le commerce méditerranéen au Moyen Âge.
- La **Sicile** est un carrefour : Grecs, Arabes, Normands, Espagnols y ont laissé leurs traces.
- **Eugenio Montale**, **Ossi di seppia** (1925) : la mer de Ligurie, lumineuse et dure.

### Une mer de drames
- Depuis les années 1990, des milliers de migrants traversent la Méditerranée vers **Lampedusa** et la Sicile. Beaucoup meurent : le naufrage du **3 octobre 2013** près de Lampedusa fait **368 morts**.
- L'Italie lance alors l'opération **Mare Nostrum** (2013-2014) pour secourir les migrants en mer.
- Le cinéma témoigne : **Terraferma** (Crialese, 2011) oppose la **loi de la mer** (secourir) à la loi de l'État ; **Fuocoammare** (Gianfranco Rosi, 2016, Ours d'or) montre Lampedusa.

### À retenir pour le bac
- Mare nostrum : pont ou barrière ; il naufragio, lo sbarco, l'accoglienza.
- Ulysse chez Dante (Inferno XXVI) : « virtute e canoscenza » ; « Il canto di Ulisse » chez Primo Levi.
- Repubbliche marinare ; Lampedusa (3 octobre 2013) ; opération Mare Nostrum ; Terraferma (2011), Fuocoammare (2016).`,
      cartes: [
        { q: "Que signifie « Mare nostrum » ?", r: "« Notre mer » : le nom romain de la Méditerranée." },
        { q: "Que signifie « il naufragio » ?", r: "Le naufrage." },
        { q: "Que signifie « lo sbarco » ?", r: "Le débarquement, l'arrivée à terre (des migrants par exemple)." },
        { q: "Traduire en italien : l'accueil", r: "L'accoglienza." },
        { q: "Que signifie « la sponda » ?", r: "Le rivage, la rive." },
        { q: "Qu'est-ce qu'un barcone ?", r: "Un grand bateau, souvent surchargé, utilisé par les migrants." },
        { q: "Dans quel chant de l'Inferno Dante parle-t-il d'Ulysse ?", r: "Le chant XXVI." },
        { q: "Que dit Ulysse à ses compagnons chez Dante ?", r: "« Fatti non foste a viver come bruti, ma per seguir virtute e canoscenza »." },
        { q: "Où Primo Levi récite-t-il le chant d'Ulysse ?", r: "À Auschwitz, dans « Il canto di Ulisse » (Se questo è un uomo)." },
        { q: "Quelles sont les Repubbliche marinare ?", r: "Venise, Gênes, Pise et Amalfi, puissances maritimes du Moyen Âge." },
        { q: "Que s'est-il passé le 3 octobre 2013 ?", r: "Un naufrage près de Lampedusa a fait 368 morts." },
        { q: "Qu'est-ce que l'opération Mare Nostrum ?", r: "L'opération italienne de secours des migrants en mer (2013-2014)." },
        { q: "Quel conflit montre Terraferma (2011) ?", r: "La loi de la mer (secourir) contre la loi de l'État (ne pas aider les clandestins)." },
        { q: "Quel film sur Lampedusa a reçu l'Ours d'or en 2016 ?", r: "Fuocoammare de Gianfranco Rosi." },
      ],
      quiz: [
        { q: "Que signifie « il mare » ?", choix: ["Le mari","La mère","La mer","Le marché"], bonne: 2, expl: "Mare nostrum.", niv: 1 },
        { q: "Que signifie « il naufragio » ?", choix: ["Le naufrage","Le navire","La navigation","Le nageur"], bonne: 0, expl: "Naufragare = faire naufrage.", niv: 1 },
        { q: "Quelle île italienne est au cœur des arrivées de migrants ?", choix: ["La Sardaigne","Capri","Lampedusa","L'île d'Elbe"], bonne: 2, expl: "Au sud de la Sicile.", niv: 1 },
        { q: "Quel héros incarne le voyage en Méditerranée ?", choix: ["Énée","Hercule","Thésée","Ulysse"], bonne: 3, expl: "Le nostos, le retour.", niv: 1 },
        { q: "Que signifie « l'accoglienza » ?", choix: ["L'accueil","L'accord","L'accident","L'accusation"], bonne: 0, expl: "Accogliere = accueillir.", niv: 2 },
        { q: "Combien de morts fait le naufrage de Lampedusa du 3 octobre 2013 ?", choix: ["36","75","368","150"], bonne: 2, expl: "Il déclenche l'opération Mare Nostrum.", niv: 2 },
        { q: "Que fait Ulysse dans l'Inferno de Dante ?", choix: ["Il rentre à Ithaque auprès de Pénélope","Il franchit les colonnes d'Hercule et meurt en mer","Il guide Dante à travers le Purgatoire jusqu'au Paradis","Il fonde la ville de Rome"], bonne: 1, expl: "Chant XXVI.", niv: 2 },
        { q: "Laquelle était une Repubblica marinara ?", choix: ["Milan","Florence","Gênes","Turin"], bonne: 2, expl: "Avec Venise, Pise, Amalfi.", niv: 2 },
        { q: "Que signifie « soccorrere » ?", choix: ["Courir","Secourir","Raccourcir","Accourir"], bonne: 1, expl: "Il soccorso = le secours.", niv: 2 },
        { q: "Que veut dire « virtute e canoscenza » chez Dante ?", choix: ["L'homme est fait pour la vertu et la connaissance","La mer est dangereuse pour les marins","Le voyage doit se faire en groupe","Les dieux punissent les voyageurs qui quittent leur famille"], bonne: 0, expl: "Inferno XXVI.", niv: 3 },
        { q: "Pourquoi Primo Levi récite-t-il Dante à Auschwitz ?", choix: ["Il prépare un examen de littérature","Les gardiens l'obligent à réciter","Il veut apprendre l'allemand à Pikolo","La culture lui rend sa dignité d'homme"], bonne: 3, expl: "Il canto di Ulisse.", niv: 3 },
        { q: "Quel dilemme pose Terraferma ?", choix: ["Choisir entre la pêche et le tourisme de luxe","Secourir des migrants contre l'ordre des autorités","Quitter l'île pour étudier à Rome","Vendre le bateau familial à un riche étranger du continent"], bonne: 1, expl: "Loi de la mer contre loi de l'État.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-ita-3",
      fiche: `## L'Italie en voyage(s)

L'Italie a été une terre de départ (près de **27 millions** d'émigrants entre 1876 et 1976), une terre de migrations intérieures (du Sud vers le Nord), puis une terre d'accueil. Ses frontières, surtout à l'est (Trieste), ont aussi beaucoup bougé.

### Le vocabulaire à connaître
- **emigrare** ; **l'emigrante** / **l'emigrato** ; **l'emigrazione** ; **immigrare** ; **l'immigrato**.
- **la valigia di cartone** : la valise en carton, symbole de l'émigrant ; **partire** ; **lasciare** : quitter.
- **lo straniero** : l'étranger ; **la cittadinanza** : la nationalité, la citoyenneté ; **il permesso di soggiorno** : le titre de séjour.
- **la patria** ; **il paese** : le village, le pays ; **le radici** : les racines ; **la nostalgia**.

### La grande émigration
- De la fin du XIXe siècle aux années 1970, les Italiens partent vers les **États-Unis**, l'**Argentine**, le **Brésil**, puis la **France**, la **Belgique**, la **Suisse** et l'**Allemagne**.
- À **Ellis Island** (New York), les migrants sont examinés avant d'entrer. Ils vivent dans des quartiers comme **Little Italy**.
- **Melania Mazzucco**, **Vita** (2003, prix Strega) : en 1903, deux enfants du Sud, **Vita** et **Diamante**, arrivent à New York.
- Les préjugés sont forts : l'exécution des anarchistes **Sacco et Vanzetti** (1927) aux États-Unis ; le massacre d'**Aigues-Mortes** (1893) en France.

### La migration intérieure
- Pendant le **miracolo economico** (1958-1963), des millions de méridionaux montent travailler dans les usines du Nord (Fiat à **Turin**, Milan).
- **Luchino Visconti**, **Rocco e i suoi fratelli** (1960) : une famille de Lucanie s'installe à Milan et se déchire.

### Les frontières et la Mitteleuropa
- **Trieste**, port de l'Empire austro-hongrois, devient italienne en **1918** : ville de plusieurs langues et cultures (**Svevo**, **Saba**, **Claudio Magris**, **Danubio**, 1986).
- Après 1945, l'exode des Italiens d'Istrie et de Dalmatie (**esodo giuliano-dalmata**).

### L'Italie, terre d'immigration
- Depuis les années 1980, l'Italie accueille des immigrés d'Albanie, du Maroc, de Roumanie, d'Afrique. Une **letteratura della migrazione** naît : **Igiaba Scego** (**La mia casa è dove sono**, 2010), italienne d'origine somalienne.
- Débat sur la nationalité : l'Italie applique surtout le **ius sanguinis** (droit du sang) ; certains demandent le **ius soli** (droit du sol) pour les enfants nés en Italie.

### À retenir pour le bac
- Emigrare, la valigia di cartone, la cittadinanza, le radici.
- Près de 27 millions d'émigrants (1876-1976), Ellis Island, Sacco et Vanzetti (1927).
- Migration Sud-Nord (Rocco e i suoi fratelli, 1960) ; Trieste et la Mitteleuropa ; Scego (2010) ; ius sanguinis et ius soli.`,
      cartes: [
        { q: "Que signifie « la valigia di cartone » ?", r: "La valise en carton, symbole de l'émigrant italien." },
        { q: "Traduire en italien : la nationalité, la citoyenneté", r: "La cittadinanza." },
        { q: "Que signifie « il permesso di soggiorno » ?", r: "Le titre de séjour." },
        { q: "Que signifie « le radici » ?", r: "Les racines." },
        { q: "Combien d'Italiens émigrent entre 1876 et 1976 ?", r: "Près de 27 millions." },
        { q: "Qu'est-ce qu'Ellis Island ?", r: "L'île de New York où les migrants étaient contrôlés avant d'entrer aux États-Unis." },
        { q: "Que raconte Vita de Melania Mazzucco ?", r: "L'arrivée à New York en 1903 de deux enfants du Sud, Vita et Diamante (prix Strega 2003)." },
        { q: "Qui sont Sacco et Vanzetti ?", r: "Deux anarchistes italiens exécutés aux États-Unis en 1927 après un procès contesté." },
        { q: "Qu'est-ce que le miracolo economico ?", r: "La forte croissance de l'Italie entre 1958 et 1963." },
        { q: "Que raconte Rocco e i suoi fratelli ?", r: "Une famille de Lucanie qui émigre à Milan et se déchire (Visconti, 1960)." },
        { q: "Quand Trieste devient-elle italienne ?", r: "En 1918, après la Première Guerre mondiale." },
        { q: "Qu'est-ce que la letteratura della migrazione ?", r: "Les œuvres écrites en italien par des immigrés ou leurs enfants (Igiaba Scego…)." },
        { q: "Quelle différence entre ius sanguinis et ius soli ?", r: "Ius sanguinis : nationalité par les parents. Ius soli : nationalité par la naissance sur le sol." },
        { q: "Qui est Igiaba Scego ?", r: "Une écrivaine italienne d'origine somalienne, née à Rome (La mia casa è dove sono, 2010)." },
      ],
      quiz: [
        { q: "Que signifie « emigrare » ?", choix: ["Imiter","Émerger","Immigrer","Émigrer"], bonne: 3, expl: "Immigrare = immigrer.", niv: 1 },
        { q: "Que symbolise la valigia di cartone ?", choix: ["L'émigrant pauvre","Le touriste riche","Le voyage d'affaires","Un retour de vacances en famille"], bonne: 0, expl: "La valise en carton.", niv: 1 },
        { q: "Où étaient contrôlés les migrants à New York ?", choix: ["Manhattan Bridge","Ellis Island","Central Park","Long Island"], bonne: 1, expl: "Île de contrôle.", niv: 1 },
        { q: "Que signifie « lo straniero » ?", choix: ["L'étrange","L'étranglé","L'étudiant","L'étranger"], bonne: 3, expl: "Straniero = étranger.", niv: 1 },
        { q: "Qui a réalisé Rocco e i suoi fratelli ?", choix: ["Federico Fellini","Vittorio De Sica","Luchino Visconti","Roberto Rossellini"], bonne: 2, expl: "Film de 1960.", niv: 2 },
        { q: "Vers quelle ville émigre la famille de Rocco ?", choix: ["Naples","New York","Buenos Aires","Milan"], bonne: 3, expl: "Migration Sud-Nord.", niv: 2 },
        { q: "En quelle année Trieste devient-elle italienne ?", choix: ["1861","1870","1918","1900"], bonne: 2, expl: "Après la Grande Guerre.", niv: 2 },
        { q: "Que signifie « la cittadinanza » ?", choix: ["La ville","Le citadin","La citation","La nationalité"], bonne: 3, expl: "Débat ius soli / ius sanguinis.", niv: 2 },
        { q: "Combien d'Italiens émigrent environ entre 1876 et 1976 ?", choix: ["1 million","5 millions","27 millions","12 millions"], bonne: 2, expl: "Grande émigration.", niv: 2 },
        { q: "Que demandent les partisans du ius soli ?", choix: ["La fin de l'immigration vers l'Italie","La nationalité pour les enfants nés en Italie","Le retour obligatoire des émigrés installés en Amérique","Un passeport pour les touristes"], bonne: 1, expl: "Débat actuel.", niv: 3 },
        { q: "Que montre l'affaire Sacco et Vanzetti ?", choix: ["Les préjugés contre les immigrés italiens","La réussite des Italiens à Hollywood","La fermeture d'Ellis Island en 1900","L'amitié entre l'Italie et les États-Unis"], bonne: 0, expl: "Exécutés en 1927.", niv: 3 },
        { q: "Pourquoi Trieste est-elle un lieu de la Mitteleuropa ?", choix: ["Ville fondée par des Allemands au XXe siècle","Capitale de l'Autriche après 1918","Port réservé aux bateaux italiens","Ville de l'ancien empire où se croisent plusieurs langues et cultures"], bonne: 3, expl: "Svevo, Saba, Magris.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-ita-4",
      fiche: `## Identité et identités

Pizza, mafia, « mamma », élégance : les clichés sur l'Italie sont nombreux. Le programme invite à les **mettre à distance** pour comprendre une identité construite tardivement (unité en **1861**), faite de régions, de dialectes et de contrastes entre Nord et Sud.

### Le vocabulaire à connaître
- **l'identità** ; **l'appartenenza** : l'appartenance ; **lo stereotipo** / **il luogo comune** : le cliché.
- **il campanilismo** : l'attachement à son clocher, à sa ville ; **il dialetto** ; **la regione**.
- **il Mezzogiorno** / **il Meridione** : le Sud ; **il settentrione** : le Nord ; **la questione meridionale** : le retard du Sud.
- **la famiglia** ; **il mammismo** : l'attachement excessif à la mère ; **la parità** : l'égalité ; **il diritto di voto**.

### Une nation tardive
- Le **Risorgimento** aboutit à l'**unité** en **1861** ; Rome devient capitale en **1871**. On prête à Massimo d'Azeglio la phrase : « **Fatta l'Italia, bisogna fare gli italiani** ».
- En 1861, très peu d'Italiens parlent l'italien ; la plupart parlent un **dialecte**. L'école, l'armée puis la **télévision** (RAI, 1954) unifient la langue.
- **Giuseppe Tomasi di Lampedusa**, **Il Gattopardo** (1958) : le prince Salina voit l'unité sans illusion. « **Se vogliamo che tutto rimanga com'è, bisogna che tutto cambi.** »

### Nord et Sud
- La **questione meridionale** : le Sud reste plus pauvre et agricole ; beaucoup émigrent vers le Nord.
- Le **campanilismo** et les rivalités entre villes restent vivants (football, cuisine, dialectes).

### La famille et la place des femmes
- **Natalia Ginzburg**, **Lessico famigliare** (1963) : une famille se reconnaît à ses mots et à ses expressions.
- Le vote des femmes arrive le **2 juin 1946** (référendum qui choisit la République) : **Paola Cortellesi** en fait la fin de **C'è ancora domani** (2023).
- Le **divorce** est autorisé en 1970 (confirmé par référendum en 1974) ; le « crime d'honneur » (**delitto d'onore**), que raille **Divorzio all'italiana** (Germi, 1962), n'est aboli qu'en **1981**.
- **Goliarda Sapienza**, **L'arte della gioia** : une femme sicilienne libre qui refuse les rôles imposés.

### Des identités plurielles
- Les Italiens d'origine étrangère (**nuovi italiani**) questionnent l'identité : Igiaba Scego, des sportifs et des chanteurs (Mahmood, gagnant de Sanremo 2019).

### À retenir pour le bac
- Lo stereotipo, il campanilismo, il dialetto, la questione meridionale.
- 1861 (unité), 1871 (Rome capitale), « Fatta l'Italia… », Il Gattopardo (1958).
- 2 juin 1946 (vote des femmes), divorce 1970, fin du delitto d'onore 1981 ; Lessico famigliare (1963).`,
      cartes: [
        { q: "Que signifie « il luogo comune » ?", r: "Le lieu commun, le cliché." },
        { q: "Que signifie « il campanilismo » ?", r: "L'attachement très fort à sa ville ou à son village (son clocher, il campanile)." },
        { q: "Que désigne « il Mezzogiorno » ?", r: "Le Sud de l'Italie." },
        { q: "Qu'est-ce que la questione meridionale ?", r: "Le problème du retard économique et social du Sud de l'Italie." },
        { q: "Quand l'Italie est-elle unifiée ?", r: "En 1861 (Rome devient capitale en 1871)." },
        { q: "Quelle phrase est attribuée à d'Azeglio ?", r: "« Fatta l'Italia, bisogna fare gli italiani » : il reste à faire les Italiens." },
        { q: "Que parlent la plupart des Italiens en 1861 ?", r: "Un dialecte : très peu parlent l'italien." },
        { q: "Quelle phrase célèbre vient du Gattopardo ?", r: "« Se vogliamo che tutto rimanga com'è, bisogna che tutto cambi »." },
        { q: "Que montre Lessico famigliare ?", r: "Une famille se reconnaît à ses mots et expressions propres (Ginzburg, 1963)." },
        { q: "Quand les Italiennes votent-elles pour la première fois à l'échelle nationale ?", r: "Le 2 juin 1946, lors du référendum qui choisit la République." },
        { q: "Quand le divorce est-il autorisé en Italie ?", r: "En 1970, confirmé par référendum en 1974." },
        { q: "Qu'est-ce que le delitto d'onore ?", r: "Le crime d'honneur, puni très légèrement jusqu'à son abolition en 1981." },
        { q: "Que signifie « il mammismo » ?", r: "L'attachement excessif d'un fils à sa mère, un cliché sur les Italiens." },
        { q: "Que signifie « l'appartenenza » ?", r: "L'appartenance (à une ville, une région, une communauté)." },
      ],
      quiz: [
        { q: "Que signifie « lo stereotipo » ?", choix: ["La stéréo","Le stylo","Le cliché","Le style"], bonne: 2, expl: "Synonyme : il luogo comune.", niv: 1 },
        { q: "En quelle année l'Italie est-elle unifiée ?", choix: ["1789","1815","1848","1861"], bonne: 3, expl: "Rome capitale en 1871.", niv: 1 },
        { q: "Que désigne « il Mezzogiorno » ?", choix: ["La pause de midi dans les bureaux","La moitié d'une journée de travail","Le Nord industriel du pays","Le Sud de l'Italie"], bonne: 3, expl: "Aussi : il Meridione.", niv: 1 },
        { q: "Que signifie « il dialetto » ?", choix: ["Le dialogue","La diète","Le dialecte","Le diable"], bonne: 2, expl: "Très parlé en 1861.", niv: 1 },
        { q: "Qui a écrit Il Gattopardo ?", choix: ["Alessandro Manzoni","Italo Calvino","Giovanni Verga","Tomasi di Lampedusa"], bonne: 3, expl: "Roman de 1958.", niv: 2 },
        { q: "Que signifie « il campanilismo » ?", choix: ["Le son des cloches le dimanche","La passion pour le camping","Le goût pour la campagne","L'attachement à sa ville"], bonne: 3, expl: "Il campanile = le clocher.", niv: 2 },
        { q: "Quand les Italiennes votent-elles pour la première fois au niveau national ?", choix: ["En 1861","En 1900","En 1946","En 1922"], bonne: 2, expl: "Référendum du 2 juin.", niv: 2 },
        { q: "Quel film raille le crime d'honneur ?", choix: ["La dolce vita","Ladri di biciclette","Il sorpasso","Divorzio all'italiana"], bonne: 3, expl: "Pietro Germi, 1962.", niv: 2 },
        { q: "Quel média unifie la langue italienne au XXe siècle ?", choix: ["Le télégraphe","Le cinéma muet","La télévision","La lettre"], bonne: 2, expl: "La RAI, 1954.", niv: 2 },
        { q: "Que veut dire « Fatta l'Italia, bisogna fare gli italiani » ?", choix: ["L'Italie doit conquérir de nouveaux territoires en Afrique du Nord","L'État existe mais le sentiment national reste à construire","Les Italiens doivent quitter l'Italie","Il faut fonder une nouvelle capitale"], bonne: 1, expl: "Après 1861.", niv: 3 },
        { q: "Que dénonce la phrase du Gattopardo ?", choix: ["Un changement de façade qui garde les privilèges","Une révolution qui supprime la noblesse","Le refus de l'unité par les paysans","La victoire des Bourbons à Naples contre les troupes de Garibaldi"], bonne: 0, expl: "« Tutto cambi » pour que rien ne change.", niv: 3 },
        { q: "Pourquoi Lessico famigliare parle-t-il d'identité ?", choix: ["Le roman propose un dictionnaire d'italien","Les mots partagés font l'unité d'une famille","Le livre décrit l'arbre généalogique des rois","L'autrice refuse de parler de sa famille"], bonne: 1, expl: "Natalia Ginzburg, 1963.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-ita-5",
      fiche: `## Le sacré et le profane

L'Italie a été le cœur de la Rome païenne puis du christianisme : le **Vatican** est au milieu de Rome. Le sacré et le profane s'y mêlent sans cesse, dans l'art, les fêtes, la politique et le cinéma.

### Le vocabulaire à connaître
- **il sacro** / **il profano** ; **la fede** : la foi ; **credere** : croire ; **il credente** : le croyant ; **laico** : laïque.
- **la chiesa** : l'église ; **il papa** ; **il santo** / **la santa** ; **il miracolo** ; **la processione**.
- **la festa** ; **il patrono** : le saint patron ; **il peccato** : le péché ; **la superstizione**.
- **lo Stato** ; **la Chiesa** (l'institution) ; **la laicità**.

### Des païens aux chrétiens
- Les temples antiques deviennent des églises : le **Panthéon** de Rome est consacré au culte chrétien en **609**.
- **San Francesco d'Assisi** écrit le **Cantico delle creature** (vers 1224), l'un des premiers textes en italien : il loue Dieu à travers « **frate sole** » et « **sora luna** ».
- **Caravaggio** peint les saints sous les traits de gens du peuple (**La vocazione di San Matteo**, 1600) : le sacré entre dans la taverne.

### L'Église et l'État
- Après la prise de **Rome** en **1870**, le pape refuse le nouvel État. Les **Patti Lateranensi** (**1929**), signés avec Mussolini, créent l'État du **Vatican**.
- Après 1945, la **Democrazia Cristiana** domine la vie politique. **Giovannino Guareschi**, **Don Camillo** (1948) : un curé et un maire communiste, Peppone, s'affrontent avec humour.
- La société se sécularise : référendum sur le **divorce** (1974), loi sur l'avortement (1978).

### Fêtes et croyances
- Le miracle de **San Gennaro** à Naples : le sang du saint se liquéfie trois fois par an.
- Le **Palio** de Sienne : une course de chevaux entre quartiers, avec bénédiction du cheval à l'église.
- Les superstitions (le **cornetto** contre le mauvais œil) côtoient la foi.

### Au cinéma
- **Federico Fellini**, **La dolce vita** (1960) : dans la première scène, une statue du Christ survole Rome sous un hélicoptère.
- **Pier Paolo Pasolini**, athée et marxiste, réalise **Il Vangelo secondo Matteo** (1964).
- **Amarcord** (Fellini, 1973) se moque de l'éducation religieuse et du confessionnal.

### À retenir pour le bac
- Il sacro e il profano, la fede, laico, il miracolo, il patrono.
- Cantico delle creature (vers 1224), Caravaggio (1600), Patti Lateranensi (1929), Don Camillo (1948).
- San Gennaro, Palio de Sienne ; La dolce vita (1960), Il Vangelo secondo Matteo (1964).`,
      cartes: [
        { q: "Que signifie « laico » ?", r: "Laïque, non religieux." },
        { q: "Que signifie « la fede » ?", r: "La foi." },
        { q: "Que signifie « il patrono » ?", r: "Le saint patron (d'une ville, d'un métier)." },
        { q: "Traduire en italien : le péché", r: "Il peccato." },
        { q: "Quand le Panthéon devient-il une église ?", r: "En 609." },
        { q: "Qu'est-ce que le Cantico delle creature ?", r: "Un poème de saint François d'Assise (vers 1224), l'un des premiers textes en italien." },
        { q: "Comment Caravage représente-t-il les saints ?", r: "Sous les traits de gens du peuple, dans des lieux ordinaires (La vocazione di San Matteo, 1600)." },
        { q: "Que créent les Patti Lateranensi de 1929 ?", r: "L'État du Vatican, et la réconciliation entre l'Église et l'État italien." },
        { q: "Qui sont Don Camillo et Peppone ?", r: "Un curé et un maire communiste qui s'affrontent avec humour (Guareschi, 1948)." },
        { q: "Qu'est-ce que le miracle de San Gennaro ?", r: "La liquéfaction du sang du saint patron de Naples, trois fois par an." },
        { q: "Qu'est-ce que le Palio de Sienne ?", r: "Une course de chevaux entre les quartiers de la ville, mêlant fête et religion." },
        { q: "Quelle image ouvre La dolce vita ?", r: "Une statue du Christ transportée par hélicoptère au-dessus de Rome (Fellini, 1960)." },
        { q: "Quel film sur l'Évangile Pasolini a-t-il réalisé ?", r: "Il Vangelo secondo Matteo (1964)." },
        { q: "Qu'est-ce que le cornetto ?", r: "Une petite corne porte-bonheur contre le mauvais œil." },
      ],
      quiz: [
        { q: "Que signifie « la chiesa » ?", choix: ["L'église","La chaise","La clé","Le clocher"], bonne: 0, expl: "La Chiesa = l'institution.", niv: 1 },
        { q: "Que signifie « il miracolo » ?", choix: ["Le miroir","Le mystère","Le miracle","Le million"], bonne: 2, expl: "San Gennaro.", niv: 1 },
        { q: "Quel État est créé en 1929 ?", choix: ["Le Vatican","Saint-Marin","Monaco","Le Liechtenstein"], bonne: 0, expl: "Patti Lateranensi.", niv: 1 },
        { q: "Qui a écrit le Cantico delle creature ?", choix: ["Dante","Saint Benoît","Saint François d'Assise","Pétrarque"], bonne: 2, expl: "Vers 1224.", niv: 1 },
        { q: "Que signifie « laico » ?", choix: ["Laïque","Lâche","Laid","Lent"], bonne: 0, expl: "La laicità = la laïcité.", niv: 2 },
        { q: "Quel peintre représente les saints en gens du peuple ?", choix: ["Botticelli","Raphaël","Giotto","Caravage"], bonne: 3, expl: "La vocazione di San Matteo.", niv: 2 },
        { q: "Qui s'oppose à Don Camillo ?", choix: ["Le pape Jean XXIII","Un riche industriel de Milan","Le maire communiste Peppone","Un évêque de Rome"], bonne: 2, expl: "Guareschi, 1948.", niv: 2 },
        { q: "Quel saint est le patron de Naples ?", choix: ["San Marco","San Francesco","San Pietro","San Gennaro"], bonne: 3, expl: "San Marco : Venise.", niv: 2 },
        { q: "Que montre la première scène de La dolce vita ?", choix: ["Une messe célébrée sur la plage","Un pape qui visite un village","Une statue du Christ sous un hélicoptère","Une procession dans les rues de Naples"], bonne: 2, expl: "Fellini, 1960.", niv: 2 },
        { q: "Pourquoi le Palio mêle-t-il sacré et profane ?", choix: ["Une messe est remplacée chaque été par un grand match de football","Un saint gagne une course chaque année","Une course de chevaux commence par une bénédiction à l'église","Une église est transformée en hippodrome"], bonne: 2, expl: "Sienne.", niv: 3 },
        { q: "Que révèle le référendum de 1974 sur le divorce ?", choix: ["Un renforcement du pouvoir du pape sur l'État","Une interdiction du mariage civil dans les mairies italiennes","Une loi votée par le Vatican","Une société qui s'éloigne des positions de l'Église"], bonne: 3, expl: "Sécularisation.", niv: 3 },
        { q: "Pourquoi l'Évangile filmé par Pasolini surprend-il ?", choix: ["Il est tourné à Jérusalem par le Vatican","Il est joué par des acteurs américains","Il est réalisé par un athée marxiste","Il est interdit par l'Église"], bonne: 2, expl: "Il Vangelo secondo Matteo, 1964.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-ita-6",
      fiche: `## Le rire et le drame

Les Italiens savent rire d'eux-mêmes (**autoironia**) et mêler la comédie à la tragédie. De la **commedia dell'arte** à la **commedia all'italiana**, de **Pirandello** à **Benigni**, le rire sert souvent à dire le drame.

### Le vocabulaire à connaître
- **ridere** : rire ; **la risata** : l'éclat de rire ; **far ridere** : faire rire ; **comico** ; **l'umorismo** ; **l'ironia**.
- **piangere** : pleurer ; **le lacrime** : les larmes ; **il dramma** ; **tragico** ; **la malinconia**.
- **la maschera** : le masque ; **il palcoscenico** : la scène ; **la commedia** ; **il personaggio** : le personnage.
- **grottesco** ; **la satira** ; **prendere in giro** : se moquer de.

### La commedia dell'arte
- Née au XVIe siècle : des acteurs improvisent à partir d'un canevas, avec des **masques** : **Arlecchino**, **Pulcinella**, **Pantalone**, **Colombina**.
- **Carlo Goldoni** (XVIIIe siècle) la réforme en écrivant des textes : **Arlecchino servitore di due padroni** (1745).
- **Dario Fo** (prix Nobel **1997**) reprend cet héritage dans un théâtre politique (**Mistero buffo**, 1969).

### Pirandello et l'umorismo
- **Luigi Pirandello**, **L'umorismo** (1908) : le comique, c'est l'« **avvertimento del contrario** » ; l'humour, c'est le « **sentimento del contrario** » : on rit, puis on comprend la douleur derrière.
- **Sei personaggi in cerca d'autore** (1921) : des personnages cherchent un auteur pour jouer leur drame. Prix Nobel **1934**.

### La commedia all'italiana
- Dans les années 1950-1970, des films font rire de la société : **I soliti ignoti** (Monicelli, 1958), **La grande guerra** (Monicelli, 1959), **Il sorpasso** (Risi, 1962), **Divorzio all'italiana** (Germi, 1962).
- Leurs fins sont souvent tragiques : le rire révèle les défauts du **miracolo economico**.
- **Totò**, **Alberto Sordi**, **Vittorio Gassman** en sont les visages.

### Rire de l'horreur
- **Roberto Benigni**, **La vita è bella** (1997, trois Oscars) : un père fait croire à son fils que le camp de concentration est un jeu.
- **Fellini**, **Amarcord** (1973) : la nostalgie, le grotesque et la critique du fascisme.

### La chanson et l'opéra
- L'**opéra** (Verdi, Puccini) mêle passion et tragédie.
- La chanson populaire, mélodique et mélancolique : le **Festival di Sanremo** (depuis **1951**), **Domenico Modugno**, « **Nel blu dipinto di blu** » (1958).

### À retenir pour le bac
- Ridere, piangere, la maschera, l'umorismo, prendere in giro.
- Commedia dell'arte, Goldoni (1745), Dario Fo (Nobel 1997).
- Pirandello : sentimento del contrario (1908), Sei personaggi (1921) ; commedia all'italiana ; La vita è bella (1997) ; Sanremo (1951).`,
      cartes: [
        { q: "Que signifie « prendere in giro » ?", r: "Se moquer de quelqu'un." },
        { q: "Que signifie « la risata » ?", r: "L'éclat de rire." },
        { q: "Traduire en italien : les larmes", r: "Le lacrime." },
        { q: "Que signifie « il palcoscenico » ?", r: "La scène (de théâtre)." },
        { q: "Qu'est-ce que la commedia dell'arte ?", r: "Un théâtre né au XVIe siècle où des acteurs masqués improvisent sur un canevas." },
        { q: "Cite trois masques de la commedia dell'arte.", r: "Arlecchino, Pulcinella, Pantalone (aussi Colombina)." },
        { q: "Quelle pièce célèbre a écrite Goldoni ?", r: "Arlecchino servitore di due padroni (1745)." },
        { q: "Quand Dario Fo reçoit-il le prix Nobel ?", r: "En 1997." },
        { q: "Qu'est-ce que le « sentimento del contrario » chez Pirandello ?", r: "L'humour : on rit d'abord, puis on comprend la douleur cachée derrière la situation." },
        { q: "Que racontent Sei personaggi in cerca d'autore ?", r: "Six personnages abandonnés par leur auteur veulent jouer leur drame (Pirandello, 1921)." },
        { q: "Qu'est-ce que la commedia all'italiana ?", r: "Des comédies des années 1950-1970 qui font rire des défauts de la société, souvent avec une fin amère." },
        { q: "Que fait le père dans La vita è bella ?", r: "Il fait croire à son fils que le camp de concentration est un jeu (Benigni, 1997)." },
        { q: "Depuis quand existe le Festival di Sanremo ?", r: "Depuis 1951." },
        { q: "Quelle chanson de Modugno est célèbre ?", r: "« Nel blu dipinto di blu », dite « Volare » (1958)." },
      ],
      quiz: [
        { q: "Que signifie « ridere » ?", choix: ["Rider","Rire","Redire","Rêver"], bonne: 1, expl: "La risata = l'éclat de rire.", niv: 1 },
        { q: "Que signifie « la maschera » ?", choix: ["La mâchoire","Le maquillage","Le masque","La marche"], bonne: 2, expl: "Commedia dell'arte.", niv: 1 },
        { q: "Lequel est un masque de la commedia dell'arte ?", choix: ["Pinocchio","Arlecchino","Don Camillo","Il Gattopardo"], bonne: 1, expl: "Avec Pulcinella, Pantalone.", niv: 1 },
        { q: "Qui a réalisé La vita è bella ?", choix: ["Federico Fellini","Nanni Moretti","Ettore Scola","Roberto Benigni"], bonne: 3, expl: "Trois Oscars.", niv: 1 },
        { q: "Que signifie « prendere in giro » ?", choix: ["Faire un tour en ville","Prendre un virage","Se moquer","Tourner en rond"], bonne: 2, expl: "Giro = tour.", niv: 2 },
        { q: "Qui a écrit Sei personaggi in cerca d'autore ?", choix: ["Goldoni","Pirandello","Dario Fo","D'Annunzio"], bonne: 1, expl: "Pièce de 1921.", niv: 2 },
        { q: "Comment Pirandello définit-il l'humour ?", choix: ["Le rire sans réflexion","Le sentiment du contraire","La moquerie des puissants","L'art de raconter des blagues"], bonne: 1, expl: "L'umorismo, 1908.", niv: 2 },
        { q: "Depuis quelle année existe le Festival di Sanremo ?", choix: ["1951","1925","1938","1946"], bonne: 0, expl: "Chanson populaire.", niv: 2 },
        { q: "Quel auteur réforme la commedia dell'arte en écrivant des textes ?", choix: ["Luigi Pirandello","Carlo Goldoni","Giacomo Leopardi","Alessandro Manzoni"], bonne: 1, expl: "XVIIIe siècle.", niv: 2 },
        { q: "Pourquoi la commedia all'italiana finit-elle souvent mal ?", choix: ["Les producteurs refusaient les fins heureuses","Les acteurs voulaient jouer des tragédies","La censure interdisait les comédies","Le rire sert à montrer les failles de la société"], bonne: 3, expl: "Il sorpasso, 1962.", niv: 3 },
        { q: "Pourquoi La vita è bella a-t-il fait débat ?", choix: ["Il traite la Shoah par le rire","Il se passe dans un pays imaginaire","Il refuse de montrer la guerre","Il est tourné sans acteurs"], bonne: 0, expl: "Benigni, 1997.", niv: 3 },
        { q: "Que montre le théâtre de Dario Fo ?", choix: ["Le théâtre doit éviter la politique","Les masques sont réservés aux enfants","La comédie a disparu en Italie","Le rire peut être une arme politique"], bonne: 3, expl: "Mistero buffo, 1969.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-ita-7",
      fiche: `## Cité et territoire

Avant d'être un État (1861), l'Italie a été un ensemble de **cités** puissantes et rivales : Florence, Venise, Gênes, Milan, Sienne. Cette histoire a fait naître une réflexion politique originale et un attachement fort à la ville et au territoire.

### Le vocabulaire à connaître
- **la città** ; **il comune** : la commune (et la cité médiévale libre) ; **la piazza** : la place ; **il palazzo** ; **il quartiere** : le quartier.
- **il territorio** ; **la provincia** ; **la regione** ; **lo Stato** ; **governare** ; **il governo** : le gouvernement.
- **il potere** ; **il principe** ; **la repubblica** ; **la signoria** : le pouvoir d'une famille sur une cité.
- **il buon governo** / **il malgoverno** ; **la corruzione** ; **la mafia** ; **la legalità**.

### Les comuni et les signorie
- À partir du XIe siècle, des villes du Nord et du Centre deviennent des **comuni** libres, gouvernées par leurs citoyens. Puis des familles prennent le pouvoir : les **Médicis** à Florence, les **Visconti** et **Sforza** à Milan.
- **Venise**, la **Serenissima**, reste une république dirigée par un **doge** jusqu'en **1797**.
- À Sienne, **Ambrogio Lorenzetti** peint l'**Allegoria ed effetti del Buono e del Cattivo Governo** (1338-1339) : le bon gouvernement apporte la prospérité, le mauvais la ruine.

### Penser l'Italie
- **Dante**, exilé de Florence en **1302**, rêve d'une Italie en paix (« **Ahi serva Italia** », Purgatorio VI).
- **Pétrarque**, « **Italia mia** » : un appel à l'unité contre les guerres.
- **Niccolò Machiavelli**, **Il Principe** (écrit en **1513**) : le prince doit savoir être « **golpe e lione** » (renard et lion) ; il appelle un prince à unifier l'Italie.

### De l'unité aux régions
- Le **Risorgimento** : **Garibaldi** et l'expédition des **Mille** (1860), Cavour, unité en **1861**, Rome capitale en **1871**.
- La République (1946) crée les **regioni** ; certaines ont un statut spécial (Sicile, Sardaigne, Val d'Aoste…).
- Dans le Sud, la **mafia** contrôle des territoires ; les juges **Giovanni Falcone** et **Paolo Borsellino** sont assassinés en **1992**.

### La ville aujourd'hui
- **Venise** face au surtourisme et à l'acqua alta (barrière **MOSE**).
- **Italo Calvino**, **Le città invisibili** (1973) : des villes imaginaires pour penser la ville réelle.

### À retenir pour le bac
- Il comune, la signoria, la piazza, il buon governo.
- Lorenzetti (1338-1339), Venise (doge, 1797), Médicis à Florence.
- Dante exilé (1302), Machiavel, Il Principe (1513) ; Garibaldi et les Mille (1860), 1861, 1871 ; Falcone et Borsellino (1992).`,
      cartes: [
        { q: "Que signifie « il comune » au Moyen Âge ?", r: "Une ville libre gouvernée par ses citoyens." },
        { q: "Qu'est-ce qu'une signoria ?", r: "Le pouvoir d'une famille sur une cité (Médicis à Florence, Visconti à Milan)." },
        { q: "Que signifie « la piazza » ?", r: "La place, cœur de la vie de la cité." },
        { q: "Traduire en italien : le gouvernement", r: "Il governo (governare = gouverner)." },
        { q: "Comment appelle-t-on Venise ?", r: "La Serenissima, république dirigée par un doge jusqu'en 1797." },
        { q: "Que représente la fresque de Lorenzetti à Sienne ?", r: "Les effets du bon et du mauvais gouvernement sur la ville et la campagne (1338-1339)." },
        { q: "Quand Dante est-il exilé de Florence ?", r: "En 1302." },
        { q: "Que dit Machiavel du prince ?", r: "Il doit être à la fois renard (ruse) et lion (force) : « golpe e lione »." },
        { q: "Quand Machiavel écrit-il Il Principe ?", r: "En 1513 (publié en 1532)." },
        { q: "Qu'est-ce que l'expédition des Mille ?", r: "La conquête du royaume des Deux-Siciles par Garibaldi et ses volontaires en 1860." },
        { q: "Quand Rome devient-elle capitale de l'Italie ?", r: "En 1871." },
        { q: "Qui sont Falcone et Borsellino ?", r: "Deux juges antimafia assassinés en 1992." },
        { q: "Que signifie « la legalità » ?", r: "La légalité, le respect des lois (mot clé de la lutte antimafia)." },
        { q: "Qu'est-ce que le MOSE ?", r: "Le système de barrières mobiles qui protège Venise de l'acqua alta." },
      ],
      quiz: [
        { q: "Que signifie « la piazza » ?", choix: ["La pizza","La pièce","La plage","La place"], bonne: 3, expl: "Cœur de la cité.", niv: 1 },
        { q: "Quelle ville est appelée la Serenissima ?", choix: ["Florence","Gênes","Venise","Milan"], bonne: 2, expl: "Dirigée par un doge.", niv: 1 },
        { q: "Qui a écrit Il Principe ?", choix: ["Dante","Machiavel","Pétrarque","Boccace"], bonne: 1, expl: "Écrit en 1513.", niv: 1 },
        { q: "Quelle famille domine Florence à la Renaissance ?", choix: ["Les Sforza","Les Borgia","Les Visconti","Les Médicis"], bonne: 3, expl: "Sforza et Visconti : Milan.", niv: 1 },
        { q: "Que signifie « il governo » ?", choix: ["Le gouvernement","La gourmandise","Le gouvernail","Le goût"], bonne: 0, expl: "Governare = gouverner.", niv: 2 },
        { q: "Qui mène l'expédition des Mille en 1860 ?", choix: ["Cavour","Garibaldi","Mazzini","Victor-Emmanuel II"], bonne: 1, expl: "Conquête du Sud.", niv: 2 },
        { q: "En quelle année Rome devient-elle capitale ?", choix: ["1848","1859","1861","1871"], bonne: 3, expl: "Unité en 1861.", niv: 2 },
        { q: "Que montre la fresque de Lorenzetti à Sienne ?", choix: ["Les effets du bon et du mauvais gouvernement","La bataille entre Sienne et Florence","La vie de saint François d'Assise et de ses premiers frères","Le couronnement d'un empereur"], bonne: 0, expl: "1338-1339.", niv: 2 },
        { q: "Comment Machiavel veut-il le prince ?", choix: ["Doux et naïf","Renard et lion","Riche et pieux","Savant et poète"], bonne: 1, expl: "Golpe e lione.", niv: 2 },
        { q: "Pourquoi l'Italie médiévale est-elle un laboratoire politique ?", choix: ["Elle est unifiée sous un seul roi dès l'an mil","Ses cités inventent des formes de gouvernement variées","Ses villes dépendent entièrement de l'Empire byzantin","Elle n'a pas de villes avant la Renaissance"], bonne: 1, expl: "Comuni, signorie, républiques.", niv: 3 },
        { q: "Que révèle l'assassinat de Falcone et Borsellino en 1992 ?", choix: ["La fin de la mafia en Sicile","Un conflit entre Rome et Milan","Le pouvoir de la mafia sur certains territoires","La victoire de la justice sur la corruption"], bonne: 2, expl: "Puis réaction de la société civile.", niv: 3 },
        { q: "Pourquoi Dante, Pétrarque et Machiavel comptent-ils pour l'unité ?", choix: ["Ils dirigent l'armée de Garibaldi","Ils écrivent la constitution de 1946","Ils fondent ensemble une nouvelle capitale à Rome","Ils rêvent d'une Italie unie bien avant 1861"], bonne: 3, expl: "Ahi serva Italia, Italia mia, Il Principe.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-ita-8",
      fiche: `## Moyen Âge, Humanisme et Renaissance

Entre le XIIIe et le XVIe siècle, l'Italie invente une langue littéraire, redécouvre l'Antiquité et place l'**homme** au centre du monde. Florence, Rome et Venise deviennent les capitales des arts.

### Le vocabulaire à connaître
- **il Medioevo** : le Moyen Âge ; **l'Umanesimo** : l'humanisme ; **il Rinascimento** : la Renaissance.
- **la lingua volgare** : la langue vulgaire (parlée), par opposition au latin ; **il poeta** ; **la poesia** ; **la novella** : la nouvelle.
- **l'affresco** : la fresque ; **la prospettiva** : la perspective ; **la cupola** : la coupole ; **il mecenate** : le mécène.
- **l'uomo** ; **la dignità** ; **il sapere** : le savoir ; **l'ingegno** : le génie, l'intelligence.

### La naissance de la littérature italienne
- La **Scuola siciliana** (cour de **Frédéric II**, XIIIe siècle), puis le **Dolce stil novo** (Guinizelli, Cavalcanti) : la femme-ange.
- Les **Tre Corone** (trois couronnes) de Florence :
  - **Dante**, **Divina Commedia** (vers 1307-1321) : un poème en tercets écrit en toscan, qui fonde la langue italienne.
  - **Pétrarque**, **Canzoniere** : des poèmes d'amour pour **Laura** ; le **sonetto** devient un modèle européen.
  - **Boccace**, **Decameron** (vers 1349-1353) : pendant la peste de **1348**, dix jeunes gens réfugiés hors de Florence racontent **cent nouvelles** en dix jours.
- **San Francesco**, **Cantico delle creature** : une spiritualité nouvelle, simple et proche de la nature.

### L'Humanisme
- Les humanistes recherchent les manuscrits antiques et les étudient avec une méthode nouvelle (**filologia**).
- **Pico della Mirandola**, **De hominis dignitate** (1486) : l'homme est libre de choisir ce qu'il devient.
- La **questione della lingua** : **Pietro Bembo** (Prose della volgar lingua, 1525) propose le toscan de Pétrarque et Boccace comme modèle. L'**Accademia della Crusca** naît en 1583.

### La Renaissance artistique
- **Brunelleschi** achève la **cupola** de Santa Maria del Fiore à Florence (**1436**) et étudie la **perspective**.
- **Botticelli** (**La nascita di Venere**), **Léonard de Vinci** (**La Gioconda**, l'**Uomo vitruviano**), **Michel-Ange** (plafond de la **Sixtine**, 1508-1512 ; le **David**), **Raphaël** (**La scuola di Atene**).
- Les **mécènes** (Laurent de Médicis, dit **il Magnifico**, les papes) financent les artistes.
- **Baldassare Castiglione**, **Il Cortegiano** (1528) : le modèle de l'homme de cour accompli.

### À retenir pour le bac
- Scuola siciliana, Dolce stil novo, Tre Corone : Dante, Pétrarque (Laura), Boccace (Decameron, peste de 1348).
- Umanesimo, filologia, Pico della Mirandola (1486), Bembo (1525).
- Brunelleschi (1436), Botticelli, Léonard, Michel-Ange (Sixtine 1508-1512), Raphaël, Laurent le Magnifique.`,
      cartes: [
        { q: "Que signifie « il Rinascimento » ?", r: "La Renaissance." },
        { q: "Que signifie « la lingua volgare » ?", r: "La langue parlée par le peuple, par opposition au latin." },
        { q: "Que signifie « il mecenate » ?", r: "Le mécène, qui finance les artistes." },
        { q: "Que signifie « l'affresco » ?", r: "La fresque." },
        { q: "Qui sont les Tre Corone ?", r: "Dante, Pétrarque et Boccace, les trois grands écrivains florentins du XIVe siècle." },
        { q: "Pour qui Pétrarque écrit-il le Canzoniere ?", r: "Pour Laura." },
        { q: "Que raconte le Decameron ?", r: "Pendant la peste de 1348, dix jeunes gens racontent cent nouvelles en dix jours (Boccace)." },
        { q: "Qu'est-ce que le Dolce stil novo ?", r: "Un courant poétique du XIIIe siècle qui célèbre la femme-ange (Guinizelli, Cavalcanti, Dante)." },
        { q: "Que défend Pico della Mirandola dans De hominis dignitate ?", r: "L'homme est libre de choisir ce qu'il devient (1486)." },
        { q: "Qu'est-ce que la questione della lingua ?", r: "Le débat sur la langue à adopter ; Bembo (1525) choisit le toscan de Pétrarque et Boccace." },
        { q: "Quand Brunelleschi achève-t-il la coupole de Florence ?", r: "En 1436." },
        { q: "Quand Michel-Ange peint-il le plafond de la Sixtine ?", r: "De 1508 à 1512." },
        { q: "Qui est Laurent le Magnifique ?", r: "Laurent de Médicis, maître de Florence et grand mécène du XVe siècle." },
        { q: "Que décrit Il Cortegiano de Castiglione ?", r: "Le parfait homme de cour, cultivé et élégant (1528)." },
      ],
      quiz: [
        { q: "Que signifie « il Rinascimento » ?", choix: ["La Renaissance","Le renouveau du printemps","La naissance d'un roi","Le retour du roi"], bonne: 0, expl: "Rinascere = renaître.", niv: 1 },
        { q: "Qui a écrit le Decameron ?", choix: ["Pétrarque","Dante","Machiavel","Boccace"], bonne: 3, expl: "Cent nouvelles.", niv: 1 },
        { q: "Pour quelle femme Pétrarque écrit-il ?", choix: ["Béatrice","Fiammetta","Laura","Lucrèce"], bonne: 2, expl: "Le Canzoniere.", niv: 1 },
        { q: "Qui a peint La nascita di Venere ?", choix: ["Raphaël","Caravage","Titien","Botticelli"], bonne: 3, expl: "Florence, XVe siècle.", niv: 1 },
        { q: "Que signifie « il mecenate » ?", choix: ["Le mécanicien","Le médecin","Le mécène","Le méchant"], bonne: 2, expl: "Laurent le Magnifique.", niv: 2 },
        { q: "Pourquoi les jeunes du Decameron quittent-ils Florence ?", choix: ["Pour fuir une guerre civile","Pour aller à Rome voir le pape","Pour fêter un mariage","Pour fuir la peste"], bonne: 3, expl: "Peste de 1348.", niv: 2 },
        { q: "Qui achève la coupole de Florence en 1436 ?", choix: ["Brunelleschi","Michel-Ange","Léonard de Vinci","Giotto"], bonne: 0, expl: "Santa Maria del Fiore.", niv: 2 },
        { q: "Quel texte défend la liberté de l'homme en 1486 ?", choix: ["Il Principe","Il Cortegiano","Le Decameron","De hominis dignitate"], bonne: 3, expl: "Pico della Mirandola.", niv: 2 },
        { q: "Quelle langue Bembo propose-t-il comme modèle en 1525 ?", choix: ["Le toscan de Pétrarque et Boccace","Le latin de Cicéron et Virgile","Le dialecte de Venise","Le sicilien de Frédéric II"], bonne: 0, expl: "Questione della lingua.", niv: 2 },
        { q: "Pourquoi la Divina Commedia compte-t-elle pour la langue ?", choix: ["Écrite en latin, elle remplace la Bible","Écrite en français, elle unit les deux pays","Écrite en toscan, elle fonde la langue italienne","Écrite en grec, elle relance les études"], bonne: 2, expl: "Lingua volgare.", niv: 3 },
        { q: "Que veut dire placer l'homme au centre du monde à la Renaissance ?", choix: ["Valoriser son savoir, sa liberté et sa création","Refuser toute forme de religion","Interdire l'étude de l'Antiquité","Rendre l'homme maître des étoiles grâce à l'astrologie"], bonne: 0, expl: "Umanesimo.", niv: 3 },
        { q: "Quel rôle jouent les mécènes ?", choix: ["Ils censurent les œuvres jugées impies","Ils financent et protègent les artistes","Ils enseignent la peinture aux enfants","Ils vendent les œuvres à l'étranger"], bonne: 1, expl: "Médicis, papes.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-ita-9",
      fiche: `## Découvrir, construire, inventer

Navigateurs, savants, ingénieurs, architectes et designers italiens ont changé le monde : de **Colomb** à **Galilée**, de **Marconi** à la **Vespa**, l'Italie est un laboratoire d'inventions et de formes.

### Le vocabulaire à connaître
- **scoprire** ; **la scoperta** ; **inventare** ; **l'invenzione** ; **l'inventore** ; **costruire** : construire.
- **la scienza** ; **lo scienziato** : le savant ; **l'esperimento** ; **la ricerca** : la recherche ; **il progresso**.
- **l'industria** ; **la fabbrica** : l'usine ; **il design** ; **l'artigianato** : l'artisanat ; **il marchio** : la marque.
- **la velocità** : la vitesse ; **la macchina** : la voiture, la machine.

### Les grandes découvertes
- **Cristoforo Colombo** (Génois) atteint l'Amérique en **1492** pour l'Espagne ; **Amerigo Vespucci** comprend qu'il s'agit d'un nouveau continent, qui prend son nom.
- **Léonard de Vinci** dessine des machines volantes et étudie le corps humain.

### La science moderne
- **Galileo Galilei** observe le ciel avec sa lunette : **Sidereus Nuncius** (**1610**). Il défend l'idée que la Terre tourne autour du Soleil ; il est condamné par l'Église en **1633** (« **Eppur si muove** », phrase légendaire).
- **Alessandro Volta** invente la **pile** électrique (**1800**).
- **Guglielmo Marconi** invente la télégraphie sans fil (radio), prix Nobel **1909**.
- **Enrico Fermi**, prix Nobel 1938, réalise la première réaction nucléaire en chaîne à Chicago (**1942**).
- **Rita Levi-Montalcini**, prix Nobel de médecine **1986**.

### Le futurisme
- **Filippo Tommaso Marinetti** publie le **Manifesto del futurismo** dans **Le Figaro** en **1909** : il exalte la **vitesse**, la machine, la ville moderne, et même la guerre. « **Un'automobile ruggente… è più bella della Vittoria di Samotracia** ».
- Peintres : **Umberto Boccioni**, **Giacomo Balla**.

### Le miracle économique et le design
- Après la guerre, l'Italie invente des objets devenus mythiques : la **Vespa** (Piaggio, **1946**), la **Fiat 500** (**1957**), la machine à écrire **Lettera 22** d'**Olivetti**, la cafetière **Moka** (Bialetti).
- Le **Made in Italy** associe art, artisanat et industrie (mode, design, alimentation).
- L'architecte **Renzo Piano** construit le Centre Pompidou (avec Richard Rogers, 1977) et le nouveau pont de Gênes (2020), après l'effondrement du pont Morandi (**2018**).

### À retenir pour le bac
- Colomb (1492), Vespucci ; Galilée (1610, condamné en 1633) ; Volta (1800) ; Marconi (Nobel 1909) ; Fermi (1942).
- Futurisme : Marinetti (1909), vitesse et machine.
- Vespa (1946), Fiat 500 (1957), Olivetti, Made in Italy ; Renzo Piano.`,
      cartes: [
        { q: "Que signifie « lo scienziato » ?", r: "Le savant, le scientifique." },
        { q: "Que signifie « la fabbrica » ?", r: "L'usine (faux ami)." },
        { q: "Traduire en italien : l'invention", r: "L'invenzione (inventare = inventer)." },
        { q: "Que signifie « l'artigianato » ?", r: "L'artisanat." },
        { q: "Quand Colomb atteint-il l'Amérique ?", r: "En 1492, pour le compte de l'Espagne." },
        { q: "Pourquoi l'Amérique porte-t-elle le nom de Vespucci ?", r: "Amerigo Vespucci a compris qu'il s'agissait d'un nouveau continent." },
        { q: "Que publie Galilée en 1610 ?", r: "Le Sidereus Nuncius, sur ses observations du ciel à la lunette." },
        { q: "Quand Galilée est-il condamné ?", r: "En 1633, par l'Église, pour avoir défendu l'héliocentrisme." },
        { q: "Qu'invente Volta en 1800 ?", r: "La pile électrique." },
        { q: "Pour quoi Marconi reçoit-il le Nobel en 1909 ?", r: "Pour la télégraphie sans fil, ancêtre de la radio." },
        { q: "Qu'exalte le Manifesto del futurismo (1909) ?", r: "La vitesse, la machine, la ville moderne et la violence." },
        { q: "Où Marinetti publie-t-il le manifeste du futurisme ?", r: "Dans le journal français Le Figaro, en 1909." },
        { q: "Quels objets symbolisent le design italien d'après-guerre ?", r: "La Vespa (1946), la Fiat 500 (1957), la Lettera 22 d'Olivetti, la Moka." },
        { q: "Qui a construit le nouveau pont de Gênes ?", r: "L'architecte Renzo Piano (2020), après l'effondrement du pont Morandi en 2018." },
      ],
      quiz: [
        { q: "Que signifie « la fabbrica » ?", choix: ["Le fabricant","L'usine","La fabulation","La façade"], bonne: 1, expl: "Faux ami.", niv: 1 },
        { q: "Qui atteint l'Amérique en 1492 ?", choix: ["Christophe Colomb","Amerigo Vespucci","Marco Polo","Jean Cabot"], bonne: 0, expl: "Génois au service de l'Espagne.", niv: 1 },
        { q: "Qu'invente Alessandro Volta ?", choix: ["Le téléphone","La pile électrique","La radio","L'ampoule"], bonne: 1, expl: "En 1800.", niv: 1 },
        { q: "Que signifie « la velocità » ?", choix: ["Le vélo","La voile","La violence","La vitesse"], bonne: 3, expl: "Mot clé du futurisme.", niv: 1 },
        { q: "Quel savant publie le Sidereus Nuncius ?", choix: ["Galilée","Léonard de Vinci","Volta","Fermi"], bonne: 0, expl: "En 1610.", niv: 2 },
        { q: "En quelle année Galilée est-il condamné ?", choix: ["1633","1564","1600","1610"], bonne: 0, expl: "Eppur si muove.", niv: 2 },
        { q: "Qui fonde le futurisme ?", choix: ["D'Annunzio","Boccioni","Marinetti","Pirandello"], bonne: 2, expl: "Manifeste de 1909.", niv: 2 },
        { q: "Quel objet Piaggio lance-t-il en 1946 ?", choix: ["La Fiat 500","La Vespa","La Moka","La Lettera 22"], bonne: 1, expl: "Scooter mythique.", niv: 2 },
        { q: "Pour quelle invention Marconi est-il célèbre ?", choix: ["La pile électrique","Le moteur à explosion","La télégraphie sans fil","La lunette astronomique"], bonne: 2, expl: "Nobel 1909.", niv: 2 },
        { q: "Pourquoi le futurisme préfère-t-il une voiture à la Victoire de Samothrace ?", choix: ["Il veut rompre avec le passé et célébrer la modernité","Il admire surtout la sculpture grecque","Il défend la protection des musées et des œuvres antiques","Il refuse toute forme de technique"], bonne: 0, expl: "Marinetti, 1909.", niv: 3 },
        { q: "Que signifie l'expression Made in Italy ?", choix: ["Une production réservée au marché italien","Une marque officielle créée par l'État italien lors de l'unité","Un label pour les objets anciens","Une alliance de l'art, de l'artisanat et de l'industrie"], bonne: 3, expl: "Mode, design, alimentation.", niv: 3 },
        { q: "Pourquoi Galilée est-il condamné ?", choix: ["Il refuse de travailler pour le pape","Il défend que la Terre tourne autour du Soleil","Il vend ses lunettes aux ennemis de Venise","Il écrit en latin au lieu de l'italien"], bonne: 1, expl: "Procès de 1633.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-ita-10",
      fiche: `## Les œuvres littéraires du programme limitatif

Pour 2026-2027 et 2027-2028, le professeur choisit **trois œuvres** dans une liste officielle de huit textes et six films. Voici les huit textes et les axes auxquels les relier.

### Italo Calvino, Le città invisibili (1973)
- Marco Polo décrit à **Kublai Khan** 55 villes imaginaires aux noms de femmes (Diomira, Zobeide, Ottavia…), classées par thèmes (la mémoire, le désir, les signes…). Toutes parlent peut-être de **Venise**.
- Fin : il faut chercher « **chi e cosa, in mezzo all'inferno, non è inferno** ». Axes : Terra incognita, Cité et territoire.

### Natalia Ginzburg, Lessico famigliare (1963)
- La famille **Levi** à **Turin**, des années 1920 aux années 1950 : le père, professeur colérique, la mère rêveuse, les frères, les amis antifascistes. Le mari de l'autrice, **Leone Ginzburg**, meurt en prison en 1944. Prix **Strega** 1963.
- Une famille se reconnaît à ses **mots** et à ses phrases répétées. Axes : Identité et identités, le rire et le drame.

### Primo Levi, Se questo è un uomo (1947)
- Chimiste juif turinois, arrêté comme partisan fin 1943, déporté à **Auschwitz** (Monowitz) en 1944. Il témoigne de la destruction de l'homme dans le camp.
- Le poème d'ouverture « **Shemà** » : « **Considerate se questo è un uomo** » ; le chapitre « **Il canto di Ulisse** ». Axes : Mare nostrum (Ulysse), le rire et le drame.

### Melania Mazzucco, Vita (2003)
- En 1903, **Vita** (9 ans) et **Diamante** (12 ans), deux enfants du Sud, émigrent à **New York**. Une histoire de famille, d'amour et de misère dans le quartier de Prince Street. Prix **Strega** 2003.
- Axe : l'Italie en voyage(s).

### Goliarda Sapienza, L'arte della gioia (1998)
- **Modesta**, née en Sicile en 1900 dans la misère, devient princesse et traverse le XXe siècle en femme libre : amour, sensualité, politique. Écrit entre 1967 et 1976, publié en entier après la mort de l'autrice.
- Axes : Identité et identités, le sacré et le profane.

### Igiaba Scego, La mia casa è dove sono (2010)
- Née à Rome de parents somaliens, l'autrice dessine avec sa famille une carte de **Mogadiscio** et raconte sa vie entre Rome et la Somalie, ainsi que le passé colonial italien.
- Axes : l'Italie en voyage(s), Identité et identités.

### Italo Svevo, La coscienza di Zeno (1923)
- À **Trieste**, **Zeno Cosini** écrit ses souvenirs à la demande de son psychanalyste, le **docteur S.** : la « **dernière cigarette** » sans cesse repoussée, la mort de son père, son mariage avec **Augusta** (après avoir aimé sa sœur Ada), ses affaires. Un antihéros « **inetto** », plein d'ironie.
- Axes : l'Italie en voyage(s) (Mitteleuropa), le rire et le drame.

### Renata Viganò, L'Agnese va a morire (1949)
- **Agnese**, une lavandière âgée de la plaine du Pô, perd son mari déporté. Elle tue un soldat allemand et rejoint les **partisans** comme **staffetta** (messagère). Elle meurt à la fin, comme l'annonce le titre. Prix Viareggio 1949.
- Axes : Identité et identités, Cité et territoire.

### À retenir pour le bac
- Calvino (1973) et Ginzburg (1963) ; Levi (1947, Auschwitz) ; Mazzucco (2003, New York).
- Sapienza (Modesta), Scego (2010, Mogadiscio), Svevo (1923, Trieste), Viganò (1949, Résistance).`,
      cartes: [
        { q: "À qui Marco Polo décrit-il les villes de Calvino ?", r: "À l'empereur Kublai Khan." },
        { q: "Quelle ville se cache peut-être derrière Le città invisibili ?", r: "Venise." },
        { q: "Dans quelle ville vit la famille de Lessico famigliare ?", r: "À Turin." },
        { q: "Quel prix Lessico famigliare reçoit-il en 1963 ?", r: "Le prix Strega." },
        { q: "Où Primo Levi est-il déporté ?", r: "À Auschwitz (Monowitz), en 1944." },
        { q: "Comment s'appelle le poème qui ouvre Se questo è un uomo ?", r: "« Shemà » : « Considerate se questo è un uomo »." },
        { q: "Qui sont Vita et Diamante ?", r: "Deux enfants du Sud qui émigrent à New York en 1903 (Mazzucco, Vita)." },
        { q: "Qui est Modesta ?", r: "L'héroïne de L'arte della gioia, Sicilienne née en 1900, femme libre." },
        { q: "Quand L'arte della gioia est-il publié en entier ?", r: "En 1998, après la mort de Goliarda Sapienza." },
        { q: "Que dessine la famille d'Igiaba Scego ?", r: "Une carte de Mogadiscio, la ville perdue." },
        { q: "Pourquoi Zeno écrit-il ses souvenirs ?", r: "À la demande de son psychanalyste, le docteur S." },
        { q: "Quelle habitude Zeno n'arrive-t-il pas à arrêter ?", r: "Fumer : il fume sans cesse sa « dernière cigarette »." },
        { q: "Qu'est-ce qu'une staffetta ?", r: "Une messagère des partisans pendant la Résistance." },
        { q: "Pourquoi Agnese rejoint-elle les partisans ?", r: "Son mari est déporté et elle tue un soldat allemand." },
      ],
      quiz: [
        { q: "Qui a écrit Se questo è un uomo ?", choix: ["Italo Calvino","Primo Levi","Cesare Pavese","Italo Svevo"], bonne: 1, expl: "Publié en 1947.", niv: 1 },
        { q: "Dans quelle ville se passe La coscienza di Zeno ?", choix: ["Trieste","Turin","Venise","Milan"], bonne: 0, expl: "Ville de la Mitteleuropa.", niv: 1 },
        { q: "Qui écoute Marco Polo dans Le città invisibili ?", choix: ["Gengis Khan","Le doge de Venise","Kublai Khan","Le pape"], bonne: 2, expl: "Calvino, 1973.", niv: 1 },
        { q: "Vers quelle ville émigrent Vita et Diamante ?", choix: ["Buenos Aires","Paris","New York","Montréal"], bonne: 2, expl: "En 1903.", niv: 1 },
        { q: "De quel pays viennent les parents d'Igiaba Scego ?", choix: ["L'Érythrée","Le Maroc","L'Éthiopie","La Somalie"], bonne: 3, expl: "Mogadiscio.", niv: 2 },
        { q: "Que fait Agnese dans la Résistance ?", choix: ["Elle commande une brigade armée","Elle est messagère des partisans","Elle soigne les soldats allemands","Elle écrit dans un journal clandestin"], bonne: 1, expl: "Staffetta.", niv: 2 },
        { q: "Que montre Lessico famigliare ?", choix: ["Un dictionnaire de la langue italienne","Une famille à travers ses mots","La vie d'un empereur chinois","Une guerre entre deux familles"], bonne: 1, expl: "Ginzburg, 1963.", niv: 2 },
        { q: "Que répète Zeno sans y arriver ?", choix: ["Fumer sa dernière cigarette","Épouser Ada","Quitter Trieste","Devenir médecin"], bonne: 0, expl: "Ultima sigaretta.", niv: 2 },
        { q: "Quand est publiée L'Agnese va a morire ?", choix: ["1949","1923","1935","1945"], bonne: 0, expl: "Prix Viareggio.", niv: 2 },
        { q: "Que cherche le lecteur à la fin des Città invisibili ?", choix: ["La carte exacte de l'empire de Kublai","Le nom réel de la ville de Venise","La date exacte du retour de Marco Polo dans sa ville de Venise","Ce qui, au milieu de l'enfer, n'est pas l'enfer"], bonne: 3, expl: "Phrase finale.", niv: 3 },
        { q: "Pourquoi Zeno est-il un antihéros ?", choix: ["Il sauve Trieste d'une catastrophe","Il est maladroit, indécis et ironique sur lui-même","Il devient un chef de guerre redouté","Il domine sa famille et ses employés par la force et la peur"], bonne: 1, expl: "L'inetto de Svevo.", niv: 3 },
        { q: "Que rend le titre de Primo Levi ?", choix: ["Le nom d'un camp de travail en Italie","La question de ce qui reste d'humain dans le camp","Une prière juive traduite en italien","Le titre d'un chant de l'Inferno de Dante sur Ulysse"], bonne: 1, expl: "Considerate se questo è un uomo.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-ita-11",
      fiche: `## Les œuvres filmiques du programme limitatif

Le programme limitatif propose six films, du néoréalisme tardif au cinéma d'aujourd'hui. Analyser un film, c'est parler de l'histoire et de la **mise en scène**.

### Le vocabulaire du cinéma
- **il regista** / **la regista** : le réalisateur, la réalisatrice ; **l'attore** / **l'attrice** ; **il protagonista** ; **la trama** : l'intrigue.
- **la scena** ; **l'inquadratura** : le plan, le cadrage ; **il primo piano** : le gros plan ; **il campo lungo** : le plan d'ensemble.
- **il montaggio** : le montage ; **la colonna sonora** : la bande originale ; **in bianco e nero** ; **il flashback**.

### Bernardo Bertolucci, Novecento (1976)
- En Émilie, **Alfredo** (fils de propriétaires, Robert De Niro) et **Olmo** (fils de paysans, Gérard Depardieu) naissent le même jour de **1901**. Leur amitié traverse les luttes paysannes, le **fascisme** (le contremaître **Attila**) et la Libération du **25 avril 1945**.
- Une fresque de plus de cinq heures sur la lutte des classes. Axes : Cité et territoire, Identité et identités.

### Paola Cortellesi, C'è ancora domani (2023)
- Rome, **1946**, **en noir et blanc** : **Delia**, mère de famille, subit la violence de son mari **Ivano**. Une lettre mystérieuse lui fait espérer autre chose. À la fin, elle ne fuit pas : elle va **voter** pour la première fois, le **2 juin 1946**.
- Un énorme succès en salle, entre comédie et drame. Axes : Identité et identités, le rire et le drame.

### Emanuele Crialese, Terraferma (2011)
- Sur une petite île sicilienne, une famille de pêcheurs recueille une femme africaine enceinte et son fils. Le grand-père **Ernesto** suit la **loi de la mer** (on ne laisse personne se noyer) contre la loi de l'État. Prix spécial du jury à Venise.
- Axes : Mare nostrum, l'Italie en voyage(s).

### Federico Fellini, Amarcord (1973)
- « **A m'arcord** » signifie « je me souviens » en dialecte romagnol. **Rimini**, années 1930 : l'adolescent **Titta**, sa famille, l'école, les fêtes, le passage du paquebot **Rex**, la belle **Gradisca**, l'oncle fou qui crie « **Voglio una donna !** ».
- Nostalgie, grotesque et critique du **fascisme**. Oscar du meilleur film étranger. Axes : le rire et le drame, le sacré et le profane.

### Ettore Scola, Una giornata particolare (1977)
- Rome, **6 mai 1938**, jour de la visite de **Hitler** : tout l'immeuble part au défilé. Restent **Antonietta** (Sophia Loren), mère de six enfants, et **Gabriele** (Marcello Mastroianni), animateur radio renvoyé parce qu'il est homosexuel, qui va être envoyé en relégation (**confino**).
- Une rencontre de deux exclus du régime. Axes : Identité et identités.

### Luchino Visconti, Rocco e i suoi fratelli (1960)
- La famille **Parondi** (une mère et ses fils) quitte la **Lucanie** pour **Milan**. **Rocco** (Alain Delon), généreux, devient boxeur ; son frère **Simone** sombre et tue **Nadia**. **Ciro**, ouvrier chez Alfa Romeo, choisit la vie moderne.
- La migration Sud-Nord et ses déchirements. Axes : l'Italie en voyage(s), Cité et territoire.

### À retenir pour le bac
- Novecento (1976) : Alfredo et Olmo ; C'è ancora domani (2023) : Delia et le vote de 1946.
- Terraferma (2011) : la loi de la mer ; Amarcord (1973) : Rimini et la mémoire.
- Una giornata particolare (1977) : 6 mai 1938 ; Rocco e i suoi fratelli (1960) : Lucanie et Milan.`,
      cartes: [
        { q: "Que signifie « il regista » ?", r: "Le réalisateur." },
        { q: "Que signifie « l'inquadratura » ?", r: "Le plan, le cadrage." },
        { q: "Que signifie « la colonna sonora » ?", r: "La bande originale d'un film." },
        { q: "Qui sont Alfredo et Olmo dans Novecento ?", r: "Un fils de propriétaires et un fils de paysans nés le même jour de 1901." },
        { q: "Quel événement clôt l'histoire de C'è ancora domani ?", r: "Le vote du 2 juin 1946, premier vote des femmes." },
        { q: "Pourquoi C'è ancora domani est-il en noir et blanc ?", r: "Pour rappeler le cinéma néoréaliste et l'Italie de 1946." },
        { q: "Que signifie la « loi de la mer » dans Terraferma ?", r: "On ne laisse personne se noyer : il faut secourir tout naufragé." },
        { q: "Que veut dire « Amarcord » ?", r: "« Je me souviens » en dialecte romagnol." },
        { q: "Dans quelle ville se passe Amarcord ?", r: "À Rimini, ville natale de Fellini." },
        { q: "Que crie l'oncle fou dans Amarcord ?", r: "« Voglio una donna ! », perché dans un arbre." },
        { q: "Quel jour se passe Una giornata particolare ?", r: "Le 6 mai 1938, jour de la visite de Hitler à Rome." },
        { q: "Pourquoi Gabriele est-il persécuté ?", r: "Parce qu'il est homosexuel : il est renvoyé de la radio et envoyé en relégation." },
        { q: "D'où vient la famille Parondi ?", r: "De Lucanie (Basilicate), dans le Sud ; elle émigre à Milan." },
        { q: "Que devient Rocco ?", r: "Un boxeur, qui se sacrifie pour sa famille." },
      ],
      quiz: [
        { q: "Que signifie « il regista » ?", choix: ["Le registre","Le régisseur","Le réalisateur","Le règlement"], bonne: 2, expl: "La regista = la réalisatrice.", niv: 1 },
        { q: "Qui a réalisé Amarcord ?", choix: ["Ettore Scola","Federico Fellini","Bernardo Bertolucci","Luchino Visconti"], bonne: 1, expl: "Film de 1973.", niv: 1 },
        { q: "Qui joue Antonietta dans Una giornata particolare ?", choix: ["Claudia Cardinale","Anna Magnani","Monica Vitti","Sophia Loren"], bonne: 3, expl: "Avec Mastroianni.", niv: 1 },
        { q: "Dans quelle ville se déroule Rocco e i suoi fratelli ?", choix: ["Turin","Rome","Milan","Gênes"], bonne: 2, expl: "Depuis la Lucanie.", niv: 1 },
        { q: "Que fait Delia à la fin de C'è ancora domani ?", choix: ["Elle quitte Rome avec ses enfants","Elle épouse son amour de jeunesse","Elle tue son mari","Elle va voter"], bonne: 3, expl: "2 juin 1946.", niv: 2 },
        { q: "Que signifie « Amarcord » ?", choix: ["Je me souviens","J'aime le chœur","À mon cœur","Amer accord"], bonne: 0, expl: "Dialecte romagnol.", niv: 2 },
        { q: "Quel jour se déroule Una giornata particolare ?", choix: ["La libération de Rome en 1944","La visite de Hitler à Rome","Le référendum de 1946","La mort de Mussolini"], bonne: 1, expl: "6 mai 1938.", niv: 2 },
        { q: "En quelle année naissent Alfredo et Olmo ?", choix: ["1870","1889","1901","1895"], bonne: 2, expl: "Novecento.", niv: 2 },
        { q: "Que signifie « il primo piano » au cinéma ?", choix: ["Le gros plan","Le premier étage","Le premier rôle","Le premier film"], bonne: 0, expl: "Campo lungo = plan d'ensemble.", niv: 2 },
        { q: "Quel conflit oppose Ernesto aux autorités dans Terraferma ?", choix: ["Pêcher dans une zone protégée","Refuser de vendre sa maison aux touristes","Garder son bateau malgré une dette","Secourir des migrants malgré l'interdiction"], bonne: 3, expl: "Loi de la mer.", niv: 3 },
        { q: "Que montre la rencontre d'Antonietta et Gabriele ?", choix: ["Deux militants qui préparent un attentat","Deux voisins qui se dénoncent à la police","Deux exclus du fascisme qui se comprennent","Deux époux qui se retrouvent"], bonne: 2, expl: "Ettore Scola, 1977.", niv: 3 },
        { q: "Que raconte Novecento à travers deux amis ?", choix: ["La rivalité de deux clubs de football","La lutte des classes en Italie au XXe siècle","L'histoire de la mafia en Sicile","La conquête de l'Éthiopie par l'armée de Mussolini"], bonne: 1, expl: "Bertolucci, 1976.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-ita-12",
      fiche: `## La synthèse de documents en italien

La première partie de l'écrit (3 h 30 en tout) vaut **16 points sur 20**. On reçoit un dossier de plusieurs documents (souvent trois : extraits littéraires, articles, image) liés à une thématique du programme. On rédige **en italien**, en **environ 500 mots**, une synthèse qui répond à une consigne.

### Comprendre la consigne
- Formules possibles : « **Analizza in che modo i documenti…** », « **Mostra come i tre documenti…** », « **In che misura…?** » (dans quelle mesure).
- Souligner les mots-clés et en tirer une **problématique** (**la problematica**).

### Lire le dossier
- Pour chaque document : **nature** (**brano di romanzo**, **poesia**, **articolo di giornale**, **fotografia**, **vignetta** : dessin de presse), **auteur**, **date**, **contexte**, **point de vue**.
- Relever les idées, les procédés (narrateur, images, ton, ironie) et des citations courtes.
- Faire un tableau : documents en colonnes, idées en lignes.

### Construire le plan
- **Deux ou trois parties** organisées par **idées**, pas un paragraphe par document.
- Chaque partie confronte au moins deux documents : points communs, nuances, oppositions.

### Rédiger
- **Introduzione** : accroche, présentation des documents, problématique, annonce du plan.
- **Sviluppo** : une idée par partie, des références précises (« **documento A, r. 12** » : riga 12), une analyse des procédés.
- **Conclusione** : réponse à la question, éventuellement ouverture.

### Les mots de liaison
- Comparer : **allo stesso modo**, **anche**, **entrambi i documenti**, **sia… sia…**, **come nel documento B**.
- Opposer : **invece**, **mentre** (alors que), **tuttavia**, **al contrario**, **da un lato… dall'altro**.
- Ajouter, conclure : **inoltre**, **per di più**, **quindi**, **perciò**, **in conclusione**, **insomma**.
- Présenter : **secondo il documento A**, **l'autore sottolinea che**, **la vignetta rappresenta**, **in primo piano** / **sullo sfondo**.

### La langue : les pièges à éviter
- Les **prépositions articulées** : di + il = **del**, in + la = **nella**, su + i = **sui**.
- Le **congiuntivo** après les verbes d'opinion et certaines conjonctions : « **Penso che** l'autore **abbia** ragione », « **sebbene** », « **benché** », « **affinché** ».
- L'auxiliaire du **passato prossimo** : **essere** pour les verbes de mouvement (**è partito**, **sono arrivati**), avec accord.
- Les doubles consonnes (**fatto**, **anno** ≠ ano) et les accents (**città**, **perché**).
- Varier les verbes : **descrivere**, **mostrare**, **sottolineare**, **denunciare**, **evocare**.

### À retenir pour le bac
- 16 points, environ 500 mots, plan par idées, documents croisés.
- Introduzione, sviluppo, conclusione ; la problematica.
- Connecteurs : invece, mentre, tuttavia, allo stesso modo, da un lato… dall'altro, quindi ; congiuntivo après penso che.`,
      cartes: [
        { q: "Combien de points vaut la synthèse ?", r: "16 points sur 20." },
        { q: "Combien de mots environ doit faire la synthèse ?", r: "Environ 500 mots, en italien." },
        { q: "Que signifie « la vignetta » ?", r: "Le dessin de presse, la vignette humoristique." },
        { q: "Traduire en italien : au contraire, en revanche", r: "Invece (al contrario)." },
        { q: "Traduire en italien : d'un côté… de l'autre", r: "Da un lato… dall'altro." },
        { q: "Que signifie « tuttavia » ?", r: "Cependant, toutefois." },
        { q: "Traduire en italien : les deux documents", r: "Entrambi i documenti." },
        { q: "Que signifie « sullo sfondo » ?", r: "À l'arrière-plan (in primo piano = au premier plan)." },
        { q: "Que signifie « secondo il documento A » ?", r: "D'après le document A." },
        { q: "Quel mode après « penso che » ?", r: "Le congiuntivo : « Penso che l'autore abbia ragione »." },
        { q: "Quel auxiliaire pour « partire » au passato prossimo ?", r: "Essere, avec accord : « è partito », « sono partite »." },
        { q: "Comment former di + il ?", r: "Del (préposition articulée)." },
        { q: "Que signifie « r. 12 » dans une synthèse ?", r: "Riga 12 : la ligne 12 du document." },
        { q: "Quel est le grand défaut à éviter dans la synthèse ?", r: "Traiter les documents l'un après l'autre sans les croiser." },
      ],
      quiz: [
        { q: "Combien de mots environ demande la synthèse ?", choix: ["150 mots","250 mots","500 mots","300 mots"], bonne: 2, expl: "Environ 500 mots.", niv: 1 },
        { q: "Que signifie « invece » ?", choix: ["En revanche","Envers","Inversement à la ligne","En vain"], bonne: 0, expl: "Connecteur d'opposition.", niv: 1 },
        { q: "Que signifie « sullo sfondo » ?", choix: ["Au premier plan","À l'arrière-plan","Sur le côté","En dessous"], bonne: 1, expl: "In primo piano = premier plan.", niv: 1 },
        { q: "Sur combien de points est notée la synthèse ?", choix: ["4 points","16 points","8 points","10 points"], bonne: 1, expl: "La traduction vaut 4 points.", niv: 1 },
        { q: "Quel connecteur sert à comparer ?", choix: ["Tuttavia","Invece","Allo stesso modo","Perciò"], bonne: 2, expl: "De la même façon.", niv: 2 },
        { q: "Quelle phrase est correcte ?", choix: ["Penso che l'autore ha ragione.","Penso che l'autore avere ragione.","Penso che l'autore abbia ragione.","Penso che l'autore avrà ragione ieri."], bonne: 2, expl: "Congiuntivo après penso che.", niv: 2 },
        { q: "Quelle forme est correcte ?", choix: ["Nel documento","In il documento","Nello il documento","Ne il documento"], bonne: 0, expl: "In + il = nel.", niv: 2 },
        { q: "Que signifie « la vignetta » ?", choix: ["La petite vigne","Le timbre-poste","Le dessin de presse","La carte de visite"], bonne: 2, expl: "Document iconographique.", niv: 2 },
        { q: "Quelle phrase est juste (auxiliaire et accord) ?", choix: ["I migranti hanno arrivato a Lampedusa.","I migranti sono arrivati a Lampedusa.","I migranti sono arrivato a Lampedusa.","I migranti ha arrivati a Lampedusa."], bonne: 1, expl: "Essere + accord.", niv: 2 },
        { q: "Quelle est la meilleure façon d'organiser la synthèse ?", choix: ["Un plan par idées qui croise les documents","Un paragraphe par document, dans l'ordre","Un résumé du document le plus long","Une liste de citations sans commentaire"], bonne: 0, expl: "On évite la juxtaposition.", niv: 3 },
        { q: "Pourquoi relever la nature et la date d'un document ?", choix: ["Elles éclairent le point de vue et le contexte","Elles permettent de recopier le document","Elles remplacent l'analyse du contenu","Elles servent à compter les mots de la synthèse finale"], bonne: 0, expl: "Un poème de 1819 et un article de 2023 ne parlent pas du même lieu.", niv: 3 },
        { q: "Pourquoi varier les verbes comme sottolineare, denunciare, evocare ?", choix: ["Pour atteindre plus vite les 500 mots","Pour éviter de citer les documents","Pour montrer au correcteur qu'on connaît bien le dictionnaire","Pour analyser précisément ce que fait chaque auteur"], bonne: 3, expl: "Chaque verbe dit une intention.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-ita-13",
      fiche: `## Traduction et transposition

La deuxième partie de l'écrit vaut **4 points**. On traduit **en français** un court passage d'un des documents (souvent littéraire), ou on fait une **transposition** : réécrire un passage en changeant de point de vue, de forme ou de registre. On évalue la **fidélité** au texte et la **qualité du français**.

### La méthode
- Relire tout le document pour comprendre le contexte.
- Repérer les **verbes** et leur temps, les pronoms, les mots inconnus (dictionnaire unilingue autorisé).
- Traduire phrase par phrase, puis **relire le français seul** : la phrase doit sonner naturelle.
- Ne rien oublier, ne rien ajouter.

### Les temps et les modes
- **Passato remoto** (andò, disse) : dans un récit littéraire, souvent le **passé simple** (« il alla », « il dit ») ; dans un témoignage oral, on peut le rendre par le passé composé.
- **Passato prossimo** (è andato) : **passé composé** ; **imperfetto** (andava) : **imparfait**.
- **Congiuntivo** : souvent un **subjonctif** (« voglio che tu venga ») ; **congiuntivo imperfetto** (se avessi) + **condizionale** (andrei) : « si j'avais…, j'irais ».
- **Stare + gerundio** (sta piovendo) : « il est en train de pleuvoir » ou simplement « il pleut ».

### Les structures à savoir rendre
- Le **si impersonnel** : « **si dice** » = on dit ; « **si vendono** case » = on vend des maisons.
- Les **pronoms combinés** : « **glielo** do » = je le lui donne ; « **ce n'è** » = il y en a.
- Les **suffixes** : **-ino**, **-etto** (petit : casetta = maisonnette), **-one** (gros : portone = grand portail), **-accio** (péjoratif : tempaccio = sale temps).
- La **double négation** : « **non** ho visto **nessuno** » = je n'ai vu personne.
- Le tutoiement et le **Lei** de politesse (« **Lei** ha ragione » = vous avez raison).

### Les faux amis fréquents
- **la camera** = la chambre ; **il burro** = le beurre ; **la fattoria** = la ferme ; **la firma** = la signature.
- **l'autista** = le chauffeur ; **la cantina** = la cave ; **la tasca** = la poche ; **salire** = monter.
- **guardare** = regarder ; **lasciare** = laisser, quitter ; **subito** = tout de suite ; **la macchina** = la voiture.

### La transposition
- Exemples de consignes : raconter la scène du point de vue d'un autre personnage, écrire la lettre ou le journal d'un personnage, passer du récit au dialogue.
- Garder le contenu et changer ce que la consigne demande (pronoms, temps, registre).

### À retenir pour le bac
- 4 points, fidélité et bon français.
- Passato remoto → passé simple ; congiuntivo → subjonctif ; si → on ; non… nessuno = ne… personne.
- Faux amis : camera, burro, fattoria, firma, autista, cantina, salire, subito.`,
      cartes: [
        { q: "Sur combien de points est notée la traduction ?", r: "4 points sur 20." },
        { q: "Comment traduire le passato remoto dans un récit ?", r: "Le plus souvent par le passé simple (andò = il alla)." },
        { q: "Comment traduire « si dice » ?", r: "On dit (si impersonnel = on)." },
        { q: "Comment traduire « Se avessi tempo, andrei al mare » ?", r: "Si j'avais le temps, j'irais à la mer." },
        { q: "Comment traduire « Non ho visto nessuno » ?", r: "Je n'ai vu personne (double négation)." },
        { q: "Que signifie « glielo do » ?", r: "Je le lui donne (pronoms combinés)." },
        { q: "Quel sens donne le suffixe -accio ?", r: "Un sens péjoratif : tempaccio = sale temps." },
        { q: "Que signifie « la camera » ?", r: "La chambre (faux ami)." },
        { q: "Que signifie « il burro » ?", r: "Le beurre (faux ami)." },
        { q: "Que signifie « la fattoria » ?", r: "La ferme (faux ami)." },
        { q: "Que signifie « la firma » ?", r: "La signature (faux ami)." },
        { q: "Que signifie « salire » ?", r: "Monter (faux ami)." },
        { q: "Que signifie « subito » ?", r: "Tout de suite." },
        { q: "Qu'est-ce qu'une transposition ?", r: "Réécrire un passage en changeant le point de vue, la forme ou le registre selon la consigne." },
      ],
      quiz: [
        { q: "Que signifie « la camera » ?", choix: ["La caméra","La chambre","Le camarade","Le caméléon"], bonne: 1, expl: "Faux ami.", niv: 1 },
        { q: "Que signifie « il burro » ?", choix: ["Le beurre","L'âne","Le bureau","Le bourreau"], bonne: 0, expl: "L'âne = l'asino.", niv: 1 },
        { q: "Que signifie « salire » ?", choix: ["Monter","Salir","Saler","Saluer"], bonne: 0, expl: "Salir = sporcare.", niv: 1 },
        { q: "Combien de points vaut la traduction ?", choix: ["8 points","10 points","4 points","16 points"], bonne: 2, expl: "Elle complète la synthèse.", niv: 1 },
        { q: "Comment traduire « Partì all'alba » dans un roman ?", choix: ["Il partit à l'aube","Il part à l'aube demain","Il partirait à l'aube","Il est parti dans l'albâtre"], bonne: 0, expl: "Passato remoto → passé simple.", niv: 2 },
        { q: "Comment traduire « Si vendono case » ?", choix: ["Elles se vendent elles-mêmes","On vend des maisons","Il vend sa maison","Si les maisons sont vendues"], bonne: 1, expl: "Si impersonnel.", niv: 2 },
        { q: "Comment traduire « Non ho visto nessuno » ?", choix: ["Je n'ai pas vu quelqu'un","J'ai vu quelqu'un","Je n'ai rien vu du tout","Je n'ai vu personne"], bonne: 3, expl: "Double négation.", niv: 2 },
        { q: "Que signifie « la firma » ?", choix: ["L'entreprise","La ferme","La fermeture","La signature"], bonne: 3, expl: "Faux ami.", niv: 2 },
        { q: "Comment traduire « Se avessi tempo, andrei al mare » ?", choix: ["Si j'avais le temps, j'irais à la mer","Si j'ai le temps, je vais à la mer","Quand j'aurai le temps, j'irai à la mer","Si j'avais eu le temps, je serais allé"], bonne: 0, expl: "Congiuntivo + condizionale.", niv: 2 },
        { q: "Comment rendre « tempaccio » ?", choix: ["Un sale temps","Un temps libre","Un petit temps","Un beau temps"], bonne: 0, expl: "Suffixe péjoratif -accio.", niv: 3 },
        { q: "Une consigne demande de raconter la scène du point de vue d'un autre personnage. Que changer ?", choix: ["Les faits racontés, pour les inventer","Les pronoms et le regard porté sur les faits","La langue, en écrivant en italien","La longueur, en résumant en une phrase"], bonne: 1, expl: "On garde l'histoire, on change le narrateur.", niv: 3 },
        { q: "Pourquoi relire sa traduction sans regarder l'italien ?", choix: ["Pour vérifier qu'elle sonne comme du vrai français","Pour ajouter ses propres idées","Pour raccourcir le passage de moitié","Pour remplacer les noms propres par des noms français"], bonne: 0, expl: "On repère les calques.", niv: 3 },
      ],
    },
  ],
  methode: [
    {
      "id": "llcer-ita-m1",
      "mat": "llcer-ita",
      "titre": "La synthèse de documents",
      "formules": [
        "Analizza, alla luce dei tre documenti, in che modo…",
        "Mostra come i documenti…",
        "Scrivi una sintesi di circa 500 parole."
      ],
      "vu": [
        "Format de l'écrit de LLCER depuis la session 2021 (synthèse sur 16 points, traduction ou transposition sur 4 points)"
      ],
      "pts": "16 points sur 20",
      "attendu": "Une synthèse en italien d'environ 500 mots qui croise les documents autour d'une problématique. Le correcteur attend une introduzione qui présente les documents et pose la problématique, deux ou trois parties organisées par idées, des références précises (lignes, détails de l'image), l'analyse des procédés et du point de vue, une conclusione qui répond à la question, et un italien correct (prépositions articulées, congiuntivo, auxiliaires).",
      "etapes": [
        "Souligner les mots-clés de la consigne.",
        "Lire chaque document et noter nature, auteur, date, point de vue, procédés, citations.",
        "Remplir un tableau : idées en lignes, documents en colonnes.",
        "Choisir deux ou trois idées qui croisent les documents.",
        "Rédiger introduzione, sviluppo et conclusione.",
        "Relire accords, prépositions, accents et compter environ 500 mots."
      ],
      "mots": [
        "entrambi i documenti",
        "invece",
        "mentre",
        "tuttavia",
        "allo stesso modo",
        "da un lato… dall'altro",
        "secondo il documento A",
        "l'autore sottolinea che"
      ],
      "pieges": [
        "Traiter les documents l'un après l'autre.",
        "Oublier l'image ou la décrire sans l'interpréter.",
        "Recopier de longs passages.",
        "Oublier le congiuntivo après penso che ou sebbene."
      ],
      "cas": "Dossier sur l'axe « Mare nostrum » : un extrait du chant XXVI de l'Inferno (Ulysse), un article sur un sauvetage de migrants près de Lampedusa, une photo d'un barcone à l'arrivée.",
      "question": "Analizza, alla luce dei tre documenti, come il Mediterraneo sia insieme un luogo di scoperta e di tragedia. Rédige l'introduzione.",
      "modele": "Da sempre il Mediterraneo collega l'Europa, l'Africa e l'Oriente. Il dossier è composto da tre documenti: il documento A è un brano del canto XXVI dell'Inferno di Dante, in cui Ulisse spinge i compagni oltre le colonne d'Ercole; il documento B è un articolo di giornale che racconta il salvataggio di un barcone vicino a Lampedusa; il documento C è una fotografia che mostra l'arrivo dei migranti al porto. Ci chiederemo quindi in che misura il mare sia insieme un invito al viaggio e un luogo di morte. Analizzeremo prima il mare come spazio di scoperta, poi come frontiera tragica.",
      "grille": [
        "Accroche",
        "Les trois documents présentés (nature, auteur, date)",
        "Problématique qui reprend la consigne",
        "Annonce d'un plan par idées",
        "Italien correct (congiuntivo, prépositions)"
      ]
    },
    {
      "id": "llcer-ita-m2",
      "mat": "llcer-ita",
      "titre": "La traduction vers le français",
      "formules": [
        "Traduci in francese le righe 10-16 del documento A.",
        "Traduisez en français le passage suivant du document A."
      ],
      "vu": [
        "Format de l'écrit de LLCER depuis la session 2021 (synthèse sur 16 points, traduction ou transposition sur 4 points)"
      ],
      "pts": "4 points sur 20",
      "attendu": "Une traduction fidèle (rien d'oublié, rien d'ajouté) dans un français correct et naturel. Le correcteur regarde les temps (passato remoto en passé simple, imperfetto en imparfait), le congiuntivo, le si impersonnel, les pronoms, les suffixes et les faux amis.",
      "etapes": [
        "Relire le document entier pour le contexte.",
        "Repérer chaque verbe et son temps.",
        "Repérer les pronoms combinés, le si, les suffixes et les faux amis.",
        "Traduire au brouillon phrase par phrase.",
        "Relire le français seul et corriger les calques.",
        "Vérifier les oublis, les noms propres et la ponctuation."
      ],
      "mots": [
        "passé simple (passato remoto)",
        "imparfait (imperfetto)",
        "on (si impersonnel)",
        "ne… personne (non… nessuno)",
        "la chambre (la camera)"
      ],
      "pieges": [
        "Garder l'ordre des mots italien.",
        "Traduire camera par caméra ou salire par salir.",
        "Oublier un suffixe (-ino, -accio).",
        "Mélanger passé simple et passé composé sans raison."
      ],
      "cas": "Passage inventé : « Quando la nave entrò nel porto, mia nonna strinse la valigia di cartone. Non conosceva nessuno in quella città. Si sentiva parlare una lingua che non capiva, e per la prima volta ebbe paura. »",
      "question": "Traduis le passage en français.",
      "modele": "Quand le navire entra dans le port, ma grand-mère serra sa valise en carton. Elle ne connaissait personne dans cette ville. On entendait parler une langue qu'elle ne comprenait pas, et pour la première fois elle eut peur.",
      "grille": [
        "Passato remoto rendu par le passé simple",
        "Imperfetto rendu par l'imparfait",
        "« non… nessuno » rendu par ne… personne",
        "« si sentiva » rendu par on entendait",
        "Français naturel, sans oubli"
      ]
    },
    {
      "id": "llcer-ita-m3",
      "mat": "llcer-ita",
      "titre": "Analyser une image ou un dessin de presse",
      "formules": [
        "Il documento C è una fotografia / una vignetta / un dipinto…",
        "Analizza, alla luce dei tre documenti…"
      ],
      "vu": [
        "Format de l'écrit de LLCER depuis la session 2021 (synthèse sur 16 points, traduction ou transposition sur 4 points)"
      ],
      "pts": "une partie de la synthèse",
      "attendu": "Le document visuel doit être présenté (nature, auteur, date), décrit avec précision (premier plan, arrière-plan, couleurs, texte) puis interprété : quel message, quel point de vue, quel lien avec les textes ?",
      "etapes": [
        "Identifier la nature, l'auteur et la date.",
        "Décrire : in primo piano, sullo sfondo, al centro, a sinistra, a destra.",
        "Repérer le symbole ou le détail le plus frappant.",
        "Interpréter le message ou l'ironie.",
        "Relier à une idée d'un autre document."
      ],
      "mots": [
        "in primo piano",
        "sullo sfondo",
        "la vignetta rappresenta",
        "simboleggia",
        "ironico",
        "il fotografo mette in risalto"
      ],
      "pieges": [
        "Décrire sans interpréter.",
        "Oublier l'auteur ou la date.",
        "Parler de l'image dans un paragraphe à part, sans lien avec les textes."
      ],
      "cas": "La fresque d'Ambrogio Lorenzetti, Effetti del Buon Governo in città (Sienne, 1338-1339) : une ville prospère où des marchands travaillent et des jeunes femmes dansent dans la rue.",
      "question": "Rédige le paragraphe d'analyse de cette fresque pour une synthèse sur la cité.",
      "modele": "Il documento C è un affresco dipinto da Ambrogio Lorenzetti tra il 1338 e il 1339 nel Palazzo Pubblico di Siena. In primo piano alcune giovani donne ballano in mezzo alla strada, mentre sullo sfondo si vedono botteghe, case e muratori al lavoro. La pace e la prosperità della città sono presentate come il frutto di un buon governo. L'affresco ha quindi una funzione politica: ricorda ai governanti che il loro potere deve servire il bene comune, un'idea che ritroviamo anche nel documento A.",
      "grille": [
        "Nature, auteur, date",
        "Description avec in primo piano et sullo sfondo",
        "Interprétation du message",
        "Lien avec un autre document",
        "Italien correct"
      ]
    },
    {
      "id": "llcer-ita-m4",
      "mat": "llcer-ita",
      "titre": "L'oral : présenter son dossier",
      "formules": [
        "Présentez votre dossier et justifiez vos choix.",
        "Presenta il tuo dossier."
      ],
      "vu": [
        "Format de l'oral de LLCER : 20 minutes, sans préparation, sur un dossier personnel lié aux œuvres et thématiques étudiées"
      ],
      "pts": "la moitié de la note de la spécialité (avec l'écrit)",
      "attendu": "Une présentation en italien d'environ 10 minutes du dossier (documents choisis, dont un extrait d'œuvre étudiée), de sa problématique et des liens entre les documents, puis un entretien d'environ 10 minutes où l'on répond aux questions avec des exemples précis.",
      "etapes": [
        "Annoncer le titre du dossier, l'axe et la problématique.",
        "Présenter chaque document en une ou deux phrases (nature, auteur, date).",
        "Montrer les liens entre les documents et l'œuvre étudiée.",
        "Expliquer pourquoi ces documents ont été choisis.",
        "Conclure et ouvrir."
      ],
      "mots": [
        "Il mio dossier si intitola…",
        "Ho scelto questo documento perché…",
        "Questo documento mostra…",
        "Rispetto al documento precedente…",
        "Per concludere…"
      ],
      "pieges": [
        "Réciter un texte appris par cœur.",
        "Raconter l'œuvre sans l'analyser.",
        "Répondre en un mot pendant l'entretien."
      ],
      "cas": "Dossier sur l'axe « Identité et identités » avec un extrait de C'è ancora domani (Paola Cortellesi), une affiche du référendum du 2 juin 1946 et un article sur la parité aujourd'hui.",
      "question": "Rédige ta présentation d'ouverture (titre, axe, problématique, documents).",
      "modele": "Il mio dossier si intitola « Le donne e il voto » e appartiene all'asse « Identità e identità ». La mia problematica è: in che modo il diritto di voto ha cambiato il posto delle donne nella società italiana? Il primo documento è una scena del film C'è ancora domani di Paola Cortellesi (2023), in cui Delia va a votare il 2 giugno 1946. Il secondo è un manifesto del referendum del 1946. Il terzo è un articolo di giornale sulla parità oggi. Ho scelto questi documenti perché mostrano sia una conquista storica sia le disuguaglianze che restano.",
      "grille": [
        "Titre et axe annoncés",
        "Problématique claire",
        "Documents présentés",
        "Choix justifiés",
        "Italien fluide et correct"
      ]
    }
  ],
  sujets: [
    {
      id: "llcer-ita-s1", matiere: 'llcer-ita', titre: "Sujet d'entraînement 1 : L'Italie en voyage(s)", duree: 210,
      enonce: `## Sujet d'entraînement 1 (inventé, au format de l'écrit)

Ce sujet est inventé pour s'entraîner : les documents A et B ont été écrits pour cet exercice, le document C est décrit. Durée : 3 h 30. Dictionnaire italien unilingue autorisé. Synthèse : 16 points ; traduction : 4 points.

Thématique : **Voyages**. Axe : **L'Italie en voyage(s)**.

### Documento A : brano di romanzo (inventé), « Il treno del Sud », 2015

Mio padre partì da Matera nel settembre del 1962, con una valigia legata con lo spago e un panino che mia madre gli aveva preparato all'alba. Il treno era pieno di uomini come lui: contadini, muratori, ragazzi che non avevano mai visto una città.

A Torino lo aspettava un cugino che lavorava alla Fiat. Per tre mesi dormirono in due nella stessa stanza, sopra una trattoria. Sui portoni di alcune case c'era scritto: « Non si affitta ai meridionali ». Mio padre imparò a parlare piano, per non far sentire il suo accento.

Quando tornava al paese, d'estate, tutti lo chiamavano « il torinese ». A Torino, invece, restava « il terrone ». Mi diceva sempre che non apparteneva più a nessun posto.

### Documento B : articolo di giornale (inventé), « Nuovi italiani, vecchie domande », 2024

Amira ha diciannove anni, è nata a Bologna da genitori marocchini e parla con un forte accento emiliano. Eppure, per diventare cittadina italiana, ha dovuto aspettare di compiere diciotto anni e presentare una lunga serie di documenti.

« Mi sento italiana da sempre », racconta. « A scuola ho studiato Dante e Garibaldi come i miei compagni. Ma per lo Stato ero straniera. » Come lei, circa un milione di ragazzi nati o cresciuti in Italia aspettano una riforma della cittadinanza. Il dibattito tra ius sanguinis e ius soli divide da anni il Parlamento.

### Documento C : fotografia (décrite)

Une photographie en noir et blanc de 1960, prise à la gare de Milano Centrale. Au premier plan, une famille vient de descendre du train : une mère en noir tient un enfant par la main, un jeune homme porte deux valises en carton liées avec une corde. À l'arrière-plan, sous la grande verrière, une foule de voyageurs et une affiche publicitaire pour la Fiat 600.

### Partie 1 (16 points) : synthèse en italien, environ 500 mots

Analizza, alla luce dei tre documenti, in che modo la migrazione mette in discussione il senso di appartenenza.

### Partie 2 (4 points) : traduction

Traduisez en français le premier paragraphe du document A, de « Mio padre partì » à « mai visto una città ».`,
      corrige: `## Corrigé du sujet d'entraînement 1

### Partie 1 : pistes de synthèse

Introduzione. L'Italia è stata a lungo un paese di emigrazione, interna ed esterna, prima di diventare una terra di immigrazione. Il dossier è composto da tre documenti: un brano di romanzo del 2015, in cui un figlio racconta la partenza del padre da Matera verso Torino nel 1962; un articolo di giornale del 2024 sulla cittadinanza dei giovani nati in Italia da genitori stranieri; una fotografia del 1960 che mostra l'arrivo di una famiglia del Sud alla stazione di Milano. Ci chiederemo in che misura la migrazione renda fragile il senso di appartenenza. Studieremo prima la difficoltà dell'arrivo, poi la doppia identità dei migranti e infine il ruolo dello Stato.

I. L'arrivo: povertà e pregiudizi. Sia il documento A sia la fotografia mostrano la valigia di cartone legata con lo spago, simbolo dell'emigrante povero. Il padre del narratore dorme in una stanza condivisa e scopre il razzismo (« Non si affitta ai meridionali »). Nella fotografia, la madre vestita di nero e i bagagli contrastano con l'affiche della Fiat 600, simbolo del miracolo economico: il Nord moderno accoglie il Sud contadino.

II. Tra due mondi. Il padre « non apparteneva più a nessun posto »: al paese è « il torinese », a Torino « il terrone ». Allo stesso modo, Amira, nel documento B, si sente italiana ma per la legge era straniera. Mentre il padre nasconde il suo accento, Amira ha un accento emiliano che dimostra la sua appartenenza: la lingua è al centro dell'identità.

III. Il ruolo dello Stato e della società. L'articolo sottolinea il dibattito tra ius sanguinis e ius soli: l'appartenenza non è solo un sentimento ma anche un diritto. Il romanzo ricorda che anche gli italiani del Sud erano trattati come stranieri nel proprio paese.

Conclusione. In conclusione, i tre documenti mostrano che la migrazione, interna o internazionale, mette in crisi il senso di appartenenza. Come scrive Igiaba Scego in « La mia casa è dove sono », la casa può essere ovunque, ma solo se gli altri ci riconoscono.

### Partie 2 : proposition de traduction

« Mon père partit de Matera en septembre 1962, avec une valise ficelée et un sandwich que ma mère lui avait préparé à l'aube. Le train était plein d'hommes comme lui : des paysans, des maçons, des garçons qui n'avaient jamais vu une ville. »

Les points à réussir : « partì » (passato remoto rendu par le passé simple ; le passé composé est accepté s'il est cohérent avec la suite) ; « legata con lo spago » (ficelée, attachée avec une ficelle) ; « gli aveva preparato » (plus-que-parfait, « gli » = lui) ; « all'alba » (à l'aube) ; « muratori » (maçons) ; « non avevano mai visto » (n'avaient jamais vu).`,
      grille: [{"c":"Synthèse : introduction (documents présentés, problématique, plan)","pts":3},{"c":"Synthèse : plan par idées, documents croisés","pts":4},{"c":"Synthèse : références précises, analyse des procédés (récit, article, photo)","pts":3},{"c":"Synthèse : qualité de l'italien (accords, congiuntivo, richesse, connecteurs)","pts":6},{"c":"Traduction : sens exact, temps cohérents, « legata con lo spago » et « gli aveva preparato » bien rendus","pts":4}],
    },
  ],
};
