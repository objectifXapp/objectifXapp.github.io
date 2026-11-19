// Langues, littératures et cultures étrangères (LLCER) allemand — spécialité, terminale voie générale. Sources : voir matiere.sources.
// Programme : BO spécial n° 8 du 25 juillet 2019 ; œuvres : programme limitatif 2026-2028 (BO n° 21 du 21 mai 2026, annexe 1 allemand).
// Épreuve : écrit 3 h 30 (synthèse et traduction ou transposition) et oral de 20 minutes sur dossier, chacun pour moitié.
export default {
  matiere: {
    id: 'llcer-all',
    nom: 'LLCER allemand',
    voie: 'generale',
    epreuve: { type: 'ecrit', duree: 210, coef: 16, quand: 'juin (écrit) et juin-juillet (oral)', note: 'Écrit de 3 h 30 (synthèse de documents en allemand, environ 500 mots, et traduction ou transposition) et oral de 20 minutes sans préparation sur un dossier personnel ; écrit et oral comptent chacun pour moitié' },
    sources: [
      "https://eduscol.education.gouv.fr/sites/default/files/document/nsproglimitatifterminalellcerrs2026et2027annexe1-allemand-eduscolpdf-127211.pdf",
      "https://www.education.gouv.fr/bo/2026/Hebdo21/MENE2611474N",
      "https://eduscol.education.fr/document/23764/download",
      "https://www.education.gouv.fr/bo/20/Special7/MENE2019311N.htm",
    ],
    chapitres: [
      { id: "llcer-all-1", t: "Voyages : voyages de découverte et d'exploration", theme: "Voyages : circulation des hommes et des idées" },
      { id: "llcer-all-2", t: "Voyages : exil et migrations", theme: "Voyages : circulation des hommes et des idées" },
      { id: "llcer-all-3", t: "Liens sociaux : construction et organisation des liens sociaux", theme: "Formes et fondements des liens sociaux dans l'espace germanophone" },
      { id: "llcer-all-4", t: "Liens sociaux : socialisation et sociabilité", theme: "Formes et fondements des liens sociaux dans l'espace germanophone" },
      { id: "llcer-all-5", t: "Liens sociaux : entre fragilisation et mutation", theme: "Formes et fondements des liens sociaux dans l'espace germanophone" },
      { id: "llcer-all-6", t: "Mythologies : la nature source de mythes", theme: "L'espace germanophone et ses mythologies" },
      { id: "llcer-all-7", t: "Mythologies : relectures des mythologies", theme: "L'espace germanophone et ses mythologies" },
      { id: "llcer-all-8", t: "Mythologies : mythes historiques et politiques fondateurs", theme: "L'espace germanophone et ses mythologies" },
      { id: "llcer-all-9", t: "Œuvres du programme limitatif : les textes (2026-2028)", theme: "Œuvres intégrales" },
      { id: "llcer-all-10", t: "Œuvres du programme limitatif : les films (2026-2028)", theme: "Œuvres intégrales" },
      { id: "llcer-all-11", t: "Méthode : la synthèse de documents en allemand", theme: "Méthode de l'écrit" },
      { id: "llcer-all-12", t: "Méthode : traduction et transposition", theme: "Méthode de l'écrit" },
    ],
  },
  paquets: [
    {
      chapitre: "llcer-all-1",
      fiche: `## Voyages de découverte et d'exploration

Le voyage est un motif central de la culture de langue allemande. Il oscille entre deux sentiments que l'allemand nomme d'un seul mot : le **Fernweh** (l'appel du lointain, l'envie de partir) et le **Heimweh** (le mal du pays). Partir, c'est découvrir le monde, mais aussi se découvrir soi-même.

### Le vocabulaire à connaître
- **die Reise** : le voyage ; **reisen** : voyager ; **der Reisende** : le voyageur ; **die Entdeckung** : la découverte ; **entdecken** : découvrir.
- **wandern** : randonner, marcher ; **der Wanderer** : le marcheur ; **die Wanderlust** : le goût de la marche et du voyage.
- **das Fernweh** / **das Heimweh** ; **die Heimat** : le pays natal, le lieu où l'on se sent chez soi.
- **die Ferne** : le lointain ; **aufbrechen** : partir ; **unterwegs sein** : être en route ; **die Sehnsucht** : la nostalgie, le désir ardent.
- **die Bildungsreise** : le voyage de formation ; **die Forschungsreise** : l'expédition scientifique.

### Le voyage de formation
- Au XVIIIe siècle, les jeunes nobles et bourgeois font la **Grand Tour** ou **Bildungsreise** vers l'Italie.
- **Goethe** raconte son séjour de 1786 à 1788 dans l'**Italienische Reise** (publiée en 1816-1817) : l'Italie lui apporte la lumière, l'Antiquité et une renaissance personnelle.
- Le **Bildungsroman** (roman de formation) fait du voyage une étape de la construction de soi : **Wilhelm Meisters Lehrjahre** (Goethe, 1795).
- Les compagnons artisans partent sur la route pour leurs années d'apprentissage : la **Walz** ou **Wanderjahre**, tradition encore vivante aujourd'hui.

### Le voyage romantique
- Le romantisme fait du marcheur solitaire une figure de la **Sehnsucht**.
- **Joseph von Eichendorff**, **Aus dem Leben eines Taugenichts** (1826) : un jeune « vaurien » quitte le moulin de son père, un violon à la main, pour courir le monde jusqu'en Italie.
- **Franz Schubert**, **Winterreise** (1827) : un cycle de lieder sur un voyageur errant dans l'hiver.
- **Caspar David Friedrich**, **Der Wanderer über dem Nebelmeer** (vers 1818) : un homme vu de dos contemple une mer de brouillard depuis un sommet.

### Les explorateurs et les savants
- **Georg Forster** accompagne James Cook autour du monde (1772-1775) et écrit **Reise um die Welt**.
- **Alexander von Humboldt** explore l'Amérique du Sud de **1799 à 1804** (Orénoque, Andes, Chimborazo). Il décrit la nature comme un tout et inspire l'écologie moderne (**Kosmos**). Le romancier **Daniel Kehlmann** l'a mis en scène dans **Die Vermessung der Welt** (2005).

### Voyager aujourd'hui
- Les Allemands sont de grands voyageurs : on les a appelés « **Reiseweltmeister** » (champions du monde du voyage).
- Les jeunes partent en **Interrail**, en **Work and Travel** ou en **Auslandsjahr** (année à l'étranger).
- Le tourisme de masse pose aussi des questions : **Overtourism**, **Flugscham** (la honte de prendre l'avion).

### À retenir pour le bac
- Fernweh et Heimweh, Sehnsucht, Heimat.
- Goethe, Italienische Reise ; Eichendorff, Taugenichts (1826) ; Friedrich, Der Wanderer über dem Nebelmeer.
- Humboldt (1799-1804) et Forster : le voyage savant ; le voyage comme formation de soi.`,
      cartes: [
        { q: "Que signifie « das Fernweh » ?", r: "L'envie de partir au loin, l'appel du lointain (contraire du Heimweh)." },
        { q: "Que signifie « das Heimweh » ?", r: "Le mal du pays." },
        { q: "Traduire en allemand : la découverte", r: "Die Entdeckung (entdecken = découvrir)." },
        { q: "Que signifie « die Sehnsucht » ?", r: "Le désir ardent, la nostalgie d'un ailleurs : un mot clé du romantisme." },
        { q: "Que signifie « unterwegs sein » ?", r: "Être en route." },
        { q: "Qu'est-ce que la Bildungsreise ?", r: "Le voyage de formation, souvent en Italie, des jeunes gens cultivés au XVIIIe siècle." },
        { q: "Quel voyage Goethe raconte-t-il dans l'Italienische Reise ?", r: "Son séjour en Italie de 1786 à 1788, vécu comme une renaissance." },
        { q: "Qu'est-ce qu'un Bildungsroman ?", r: "Un roman de formation : le héros se construit au fil de ses expériences et de ses voyages." },
        { q: "Qu'est-ce que la Walz ?", r: "Le tour des compagnons artisans qui voyagent plusieurs années pour apprendre leur métier." },
        { q: "Qui est le Taugenichts d'Eichendorff ?", r: "Un jeune « vaurien » qui quitte le moulin paternel avec son violon et court le monde jusqu'en Italie (1826)." },
        { q: "Que représente Der Wanderer über dem Nebelmeer ?", r: "Un marcheur vu de dos qui contemple une mer de brouillard (Caspar David Friedrich, vers 1818)." },
        { q: "Quand Alexander von Humboldt explore-t-il l'Amérique du Sud ?", r: "De 1799 à 1804." },
        { q: "Quel roman met en scène Humboldt et Gauss ?", r: "Die Vermessung der Welt de Daniel Kehlmann (2005)." },
        { q: "Que signifie « die Flugscham » ?", r: "La honte de prendre l'avion, à cause de son effet sur le climat." },
      ],
      quiz: [
        { q: "Que signifie « das Fernweh » ?", choix: ["La peur des longs voyages en avion","L'envie de partir au loin","La fatigue après une longue route","Le regret d'avoir quitté son pays natal"], bonne: 1, expl: "Contraire du Heimweh, le mal du pays.", niv: 1 },
        { q: "Comment dit-on « la découverte » ?", choix: ["Die Entdeckung","Die Entscheidung","Die Erfahrung","Die Erziehung"], bonne: 0, expl: "Entdecken = découvrir.", niv: 1 },
        { q: "Qui a écrit l'Italienische Reise ?", choix: ["Heinrich Heine","Goethe","Friedrich Schiller","Thomas Mann"], bonne: 1, expl: "Récit du séjour de 1786-1788.", niv: 1 },
        { q: "Que signifie « unterwegs sein » ?", choix: ["Être de retour à la maison","Être perdu dans une ville inconnue","Être en retard pour le train","Être en route"], bonne: 3, expl: "Unterwegs = en chemin.", niv: 1 },
        { q: "Que fait le héros d'Aus dem Leben eines Taugenichts ?", choix: ["Il hérite du moulin de son père et y reste toute sa vie","Il part explorer l'Amérique du Sud avec Humboldt","Il quitte le moulin paternel et voyage jusqu'en Italie","Il devient soldat dans l'armée de Napoléon"], bonne: 2, expl: "Nouvelle romantique d'Eichendorff (1826).", niv: 2 },
        { q: "Que montre le tableau Der Wanderer über dem Nebelmeer ?", choix: ["Un navire pris dans une tempête au large","Un marcheur vu de dos face au brouillard","Une foule de voyageurs dans une gare","Un explorateur au milieu de la forêt tropicale"], bonne: 1, expl: "Caspar David Friedrich, vers 1818.", niv: 2 },
        { q: "Qu'est-ce que la Walz ?", choix: ["Le tour des compagnons artisans","Une danse viennoise du XIXe siècle","Un train de nuit entre Berlin et Rome","Une fête des voyageurs au retour de l'été"], bonne: 0, expl: "Les Wanderjahre des compagnons existent encore.", niv: 2 },
        { q: "Quelle région Humboldt explore-t-il de 1799 à 1804 ?", choix: ["L'Afrique de l'Est et le Nil","La Sibérie et la Mongolie","Le Pacifique avec James Cook","L'Amérique du Sud"], bonne: 3, expl: "Orénoque, Andes, Chimborazo.", niv: 2 },
        { q: "Que signifie « die Sehnsucht » ?", choix: ["Le mal de mer qui frappe les marins","Une recherche de travail","Un désir ardent d'ailleurs","Une vue sur la mer"], bonne: 2, expl: "Mot clé du romantisme.", niv: 2 },
        { q: "Pourquoi le voyage est-il lié au Bildungsroman ?", choix: ["Le héros se forme en découvrant le monde","Le héros apprend un métier sans quitter sa ville","Le roman décrit la construction d'un bâtiment","Le roman sert de guide touristique aux lecteurs"], bonne: 0, expl: "Bildung = formation de soi.", niv: 3 },
        { q: "Quel apport de Humboldt reste moderne ?", choix: ["La découverte d'une route maritime vers l'Inde","L'invention du chemin de fer en Allemagne","La conquête de colonies pour la Prusse","Une vision de la nature comme un tout lié"], bonne: 3, expl: "Il inspire l'écologie (Kosmos).", niv: 3 },
        { q: "Que révèle le mot Flugscham ?", choix: ["Les Allemands ont peur de l'avion depuis 1945","Le voyage est repensé à cause du climat","Les compagnies aériennes ont fermé en Allemagne","Le train coûte plus cher que l'avion en Allemagne"], bonne: 1, expl: "La honte de prendre l'avion.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-all-2",
      fiche: `## Exil et migrations

Partir n'est pas toujours un choix. L'histoire des pays de langue allemande est faite de départs forcés (**Exil**, **Flucht**, **Vertreibung**) et d'arrivées (**Einwanderung**). L'Allemagne, longtemps pays d'émigration, est devenue un grand pays d'immigration.

### Le vocabulaire à connaître
- **das Exil** : l'exil ; **ins Exil gehen** : partir en exil ; **die Flucht** : la fuite ; **der Flüchtling** / **der Geflüchtete** : le réfugié.
- **auswandern** : émigrer ; **einwandern** : immigrer ; **die Einwanderung** : l'immigration ; **die Zuwanderung** : l'arrivée de migrants.
- **die Vertreibung** : l'expulsion ; **die Heimat** : le pays où l'on se sent chez soi ; **die Herkunft** : l'origine.
- **der Gastarbeiter** : le « travailleur invité » ; **der Migrationshintergrund** : le fait d'avoir des origines immigrées.
- **die Integration** ; **die Staatsangehörigkeit** : la nationalité ; **die Willkommenskultur** : la culture de l'accueil.

### L'émigration et l'exil
- Au XIXe siècle, des millions d'Allemands émigrent en **Amérique** pour fuir la misère ou la répression après **1848**.
- **Heinrich Heine** vit en exil à **Paris** à partir de **1831** ; son poème « Nachtgedanken » (1844) dit sa nostalgie de l'Allemagne et de sa mère.
- Sous le nazisme, des écrivains et artistes fuient : **Thomas Mann**, **Bertolt Brecht**, **Anna Seghers** (**Transit**, 1944), **Stefan Zweig** (**Die Welt von Gestern**, 1942). On parle d'**Exilliteratur**.
- Après **1945**, environ 12 millions d'Allemands sont **expulsés** des territoires de l'Est (**Vertriebene**).

### L'Allemagne, pays d'immigration
- Pendant le miracle économique, la RFA signe des accords pour faire venir des **Gastarbeiter** : Italie (1955), **Turquie (1961)**…
- L'écrivain suisse **Max Frisch** résume (1965) : « **Wir riefen Arbeitskräfte, und es kamen Menschen.** » (On a appelé des bras, ce sont des hommes qui sont venus.)
- Dans les années 1990 arrivent des **Spätaussiedler** (descendants d'Allemands d'Europe de l'Est) et des réfugiés de l'ex-Yougoslavie, comme **Saša Stanišić** (**Herkunft**, 2019).
- En **2015**, plus d'un million de réfugiés arrivent (Syrie, Afghanistan, Irak). **Angela Merkel** déclare : « **Wir schaffen das.** » Cette ouverture suscite la **Willkommenskultur** mais aussi des tensions.

### Les formes d'expression
- Une littérature de l'immigration en allemand : **Feridun Zaimoglu**, **Kanak Sprak** (1995) ; **Emine Sevgi Özdamar**.
- Au cinéma, souvent avec humour : **Fatih Akin**, **Gegen die Wand** (2004) ; **Almanya – Willkommen in Deutschland** (Yasemin Şamdereli, 2011).
- La langue change au contact des migrations : mots turcs ou arabes dans l'allemand des jeunes (**Kiezdeutsch**).

### À retenir pour le bac
- Exil, Flucht, Vertreibung, Gastarbeiter, Migrationshintergrund, Willkommenskultur.
- Heine à Paris (1831), l'Exilliteratur (Mann, Brecht, Zweig, Seghers), accord avec la Turquie (1961), Max Frisch (1965), « Wir schaffen das » (2015).
- Stanišić, Herkunft (2019) : une œuvre du programme limitatif sur ce thème.`,
      cartes: [
        { q: "Que signifie « die Flucht » ?", r: "La fuite (der Flüchtling = le réfugié)." },
        { q: "Traduire en allemand : émigrer / immigrer", r: "Auswandern / einwandern." },
        { q: "Que signifie « die Vertreibung » ?", r: "L'expulsion, le fait d'être chassé de chez soi." },
        { q: "Qu'est-ce qu'un Gastarbeiter ?", r: "Un « travailleur invité » venu en RFA pendant le miracle économique (Italie, Turquie…)." },
        { q: "Que signifie « der Migrationshintergrund » ?", r: "Le fait d'avoir des origines immigrées (soi-même ou ses parents)." },
        { q: "Que signifie « die Willkommenskultur » ?", r: "La culture de l'accueil des réfugiés, surtout en 2015." },
        { q: "Où Heinrich Heine vit-il en exil ?", r: "À Paris, à partir de 1831." },
        { q: "Qu'est-ce que l'Exilliteratur ?", r: "La littérature des écrivains de langue allemande qui ont fui le nazisme (Mann, Brecht, Zweig, Seghers)." },
        { q: "Quel livre Stefan Zweig écrit-il en exil ?", r: "Die Welt von Gestern (Le Monde d'hier), publié en 1942." },
        { q: "Quand la RFA signe-t-elle l'accord sur les travailleurs turcs ?", r: "En 1961." },
        { q: "Que dit Max Frisch en 1965 sur les Gastarbeiter ?", r: "« Wir riefen Arbeitskräfte, und es kamen Menschen » : on a appelé des bras, ce sont des hommes qui sont venus." },
        { q: "Qui a dit « Wir schaffen das » et quand ?", r: "Angela Merkel, en 2015, pendant l'arrivée de nombreux réfugiés." },
        { q: "Combien d'Allemands sont expulsés de l'Est après 1945 ?", r: "Environ 12 millions." },
        { q: "Que signifie « die Herkunft » ?", r: "L'origine : c'est le titre du livre de Saša Stanišić (2019)." },
      ],
      quiz: [
        { q: "Que signifie « der Flüchtling » ?", choix: ["Le réfugié","Le voyageur","Le touriste","Le douanier"], bonne: 0, expl: "Die Flucht = la fuite.", niv: 1 },
        { q: "Comment dit-on « émigrer » ?", choix: ["Einwandern","Auswandern","Umziehen","Zurückkehren"], bonne: 1, expl: "Einwandern = immigrer.", niv: 1 },
        { q: "Qui a dit « Wir schaffen das » en 2015 ?", choix: ["Helmut Kohl","Olaf Scholz","Angela Merkel","Willy Brandt"], bonne: 2, expl: "Face à l'arrivée des réfugiés.", niv: 1 },
        { q: "Dans quelle ville Heine vit-il en exil ?", choix: ["Londres","New York","Paris","Zurich"], bonne: 2, expl: "Il s'y installe en 1831.", niv: 1 },
        { q: "En quelle année la RFA signe-t-elle l'accord avec la Turquie ?", choix: ["1949","1961","1955","1957"], bonne: 1, expl: "1955 : accord avec l'Italie.", niv: 2 },
        { q: "Que dénonce Max Frisch avec « es kamen Menschen » ?", choix: ["Les travailleurs étrangers refusaient de travailler","Les usines allemandes manquaient de machines","La Suisse voulait fermer ses frontières aux touristes","On oubliait que les travailleurs étaient des personnes"], bonne: 3, expl: "Arbeitskräfte (bras) contre Menschen (hommes).", niv: 2 },
        { q: "Que désigne l'Exilliteratur ?", choix: ["Les œuvres des écrivains qui ont fui le nazisme","Les récits de voyage des explorateurs allemands","Les romans écrits par les Gastarbeiter turcs","Les guides touristiques de l'Allemagne de l'Est"], bonne: 0, expl: "Mann, Brecht, Zweig, Seghers…", niv: 2 },
        { q: "Que signifie « die Vertreibung » ?", choix: ["Le voyage d'affaires","La vente aux enchères","L'expulsion","Le retour au pays"], bonne: 2, expl: "Les Vertriebene de 1945.", niv: 2 },
        { q: "Que signifie « Migrationshintergrund » ?", choix: ["Le passeport européen","Un droit d'asile politique","Des origines immigrées","Le centre d'accueil des réfugiés"], bonne: 2, expl: "Mot très présent dans les débats.", niv: 2 },
        { q: "Pourquoi l'Allemagne est-elle devenue un pays d'immigration ?", choix: ["Elle a perdu ses habitants partis en Amérique après la guerre de 1945","Elle a interdit l'émigration de ses citoyens","Elle a fermé ses frontières à l'Europe de l'Est","Elle a fait venir des travailleurs puis accueilli des réfugiés"], bonne: 3, expl: "Gastarbeiter, Spätaussiedler, réfugiés.", niv: 3 },
        { q: "Quel ton prend souvent le cinéma sur l'immigration turque ?", choix: ["Un ton de reportage sans fiction","Un ton héroïque de film de guerre","Un ton de conte fantastique","Un ton humoristique et tendre"], bonne: 3, expl: "Almanya (2011) joue avec les clichés.", niv: 3 },
        { q: "Que montre le Kiezdeutsch ?", choix: ["La langue évolue au contact des migrations","L'allemand perd ses règles de grammaire","Les jeunes refusent de parler allemand","Les dialectes régionaux disparaissent"], bonne: 0, expl: "Des mots turcs ou arabes entrent dans l'allemand des jeunes.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-all-3",
      fiche: `## Construction et organisation des liens sociaux

Comment l'individu trouve-t-il sa place dans la société ? La famille, l'école, l'Église, l'État et le travail tissent des liens, mais peuvent aussi enfermer. La littérature de langue allemande interroge souvent ce rapport entre l'**individu** (**der Einzelne**) et la **communauté** (**die Gemeinschaft**).

### Le vocabulaire à connaître
- **die Gesellschaft** : la société ; **die Gemeinschaft** : la communauté ; **der Zusammenhalt** : la cohésion.
- **die Familie** ; **die Erziehung** : l'éducation (par les parents) ; **die Bildung** : la formation, la culture ; **die Schule**.
- **gehorchen** : obéir ; **der Gehorsam** : l'obéissance ; **die Pflicht** : le devoir ; **die Ordnung** : l'ordre.
- **sich anpassen** : s'adapter, se conformer ; **der Mitläufer** : le suiveur, celui qui suit sans résister ; **sich wehren** : résister.
- **die Gerechtigkeit** : la justice ; **das Recht** : le droit ; **die Mündigkeit** : la majorité, le fait de penser par soi-même.

### Penser la société
- **Ferdinand Tönnies** (1887) distingue la **Gemeinschaft** (communauté chaleureuse : famille, village) et la **Gesellschaft** (société d'individus liés par des contrats).
- **Kant**, « Was ist Aufklärung ? » (1784) : « **Habe Mut, dich deines eigenen Verstandes zu bedienen !** » (Aie le courage de te servir de ton propre entendement.) La **Mündigkeit** s'oppose à l'obéissance aveugle.

### L'individu face aux institutions
- **Heinrich von Kleist**, **Michael Kohlhaas** (1808-1810) : un marchand de chevaux victime d'une injustice se fait justice lui-même ; son **sentiment de justice** le transforme en brigand.
- **Robert Musil**, **Die Verwirrungen des Zöglings Törleß** (1906) : la violence entre élèves d'un internat militaire.
- L'école prussienne et l'armée ont longtemps valorisé la **discipline** ; le mot **Untertan** (sujet soumis) vient du roman de **Heinrich Mann**, **Der Untertan** (1914-1918).

### L'embrigadement et la responsabilité
- Sous le nazisme, la **Hitlerjugend** et le **BDM** encadrent la jeunesse. **Melita Maschmann** raconte son adhésion dans **Fazit**, livre de souvenirs.
- **Hannah Arendt**, après le procès Eichmann, parle de la **Banalität des Bösen** (1963) : un mal commis par des fonctionnaires obéissants.
- En RDA, la **FDJ** (**Freie Deutsche Jugend**) organise la jeunesse ; **Claudia Rusch** en fait le titre ironique de ses souvenirs (**Meine freie deutsche Jugend**, 2003).

### Aujourd'hui
- La **Familie** change : familles recomposées (**Patchworkfamilie**), mariage pour tous en 2017.
- Le système scolaire oriente tôt (**Gymnasium**, **Realschule**, **Hauptschule**) ; la **duale Ausbildung** associe école et entreprise.

### À retenir pour le bac
- Gemeinschaft et Gesellschaft (Tönnies) ; Mündigkeit (Kant, 1784).
- Michael Kohlhaas (justice), Der Untertan (soumission), Hitlerjugend, Banalität des Bösen (Arendt).
- FDJ et Meine freie deutsche Jugend ; Patchworkfamilie, duale Ausbildung.`,
      cartes: [
        { q: "Quelle différence entre Gemeinschaft et Gesellschaft ?", r: "Gemeinschaft : communauté chaleureuse (famille, village). Gesellschaft : société d'individus liés par des intérêts (Tönnies, 1887)." },
        { q: "Que signifie « der Zusammenhalt » ?", r: "La cohésion, le fait de rester unis." },
        { q: "Quelle différence entre Erziehung et Bildung ?", r: "Erziehung : l'éducation donnée par les parents. Bildung : la formation et la culture de l'esprit." },
        { q: "Que signifie « der Gehorsam » ?", r: "L'obéissance (gehorchen = obéir)." },
        { q: "Qu'est-ce qu'un Mitläufer ?", r: "Un suiveur : quelqu'un qui suit le mouvement sans résister." },
        { q: "Que signifie « die Mündigkeit » chez Kant ?", r: "Le fait de penser par soi-même, sans tutelle." },
        { q: "Quelle est la devise des Lumières selon Kant ?", r: "« Habe Mut, dich deines eigenen Verstandes zu bedienen ! »" },
        { q: "Que fait Michael Kohlhaas ?", r: "Victime d'une injustice, il se fait justice lui-même et devient un brigand (Kleist, 1808-1810)." },
        { q: "Que dénonce Der Untertan de Heinrich Mann ?", r: "L'esprit de soumission à l'autorité dans l'Allemagne impériale." },
        { q: "Que veut dire Hannah Arendt par Banalität des Bösen ?", r: "Le mal peut être commis par des gens ordinaires qui obéissent sans réfléchir (1963)." },
        { q: "Que signifie FDJ ?", r: "Freie Deutsche Jugend : l'organisation de jeunesse officielle de la RDA." },
        { q: "Qu'est-ce qu'une Patchworkfamilie ?", r: "Une famille recomposée." },
        { q: "Qu'est-ce que la duale Ausbildung ?", r: "La formation en alternance entre l'école professionnelle et l'entreprise." },
        { q: "Traduire en allemand : se défendre, résister", r: "Sich wehren." },
      ],
      quiz: [
        { q: "Comment dit-on « la société » ?", choix: ["Die Gemeinde","Die Geschichte","Die Gesellschaft","Die Gegend"], bonne: 2, expl: "Die Gemeinschaft = la communauté.", niv: 1 },
        { q: "Que signifie « gehorchen » ?", choix: ["Écouter de la musique","Appartenir à quelqu'un","Grandir","Obéir"], bonne: 3, expl: "Der Gehorsam = l'obéissance.", niv: 1 },
        { q: "Qui a écrit « Was ist Aufklärung ? » ?", choix: ["Goethe","Kant","Karl Marx","Hegel"], bonne: 1, expl: "Texte de 1784.", niv: 1 },
        { q: "Que signifie FDJ ?", choix: ["Freie Demokratische Justiz","Föderale Deutsche Jugendhilfe","Freie Deutsche Jugend","Freundeskreis der Jugend"], bonne: 2, expl: "Organisation de jeunesse de la RDA.", niv: 1 },
        { q: "Qui distingue Gemeinschaft et Gesellschaft en 1887 ?", choix: ["Karl Marx","Ferdinand Tönnies","Max Weber","Sigmund Freud"], bonne: 1, expl: "Communauté contre société.", niv: 2 },
        { q: "Pourquoi Michael Kohlhaas devient-il un brigand ?", choix: ["Il veut devenir riche en volant les marchands","Il est chassé de sa famille par son père","Il se fait justice lui-même après une injustice","Il obéit aux ordres d'un prince voisin"], bonne: 2, expl: "Nouvelle de Kleist (1808-1810).", niv: 2 },
        { q: "Que signifie « der Mitläufer » ?", choix: ["Le suiveur","Le coureur de fond","Le collègue de travail","Le compagnon de voyage"], bonne: 0, expl: "Celui qui suit sans résister.", niv: 2 },
        { q: "Que dénonce Heinrich Mann dans Der Untertan ?", choix: ["La pauvreté des ouvriers de la Ruhr","L'esprit de soumission","La vie des émigrés en Amérique","Le luxe de la cour de Vienne"], bonne: 1, expl: "Untertan = sujet soumis.", niv: 2 },
        { q: "Que signifie « die Mündigkeit » ?", choix: ["La majorité au Parlement","Le droit de parole à l'école","Le respect des parents","Penser par soi-même"], bonne: 3, expl: "Notion clé des Lumières.", niv: 2 },
        { q: "Que veut montrer Hannah Arendt avec la Banalität des Bösen ?", choix: ["Le mal est rare et réservé à quelques monstres sanguinaires et fous","Les procès des criminels sont inutiles","Des gens ordinaires peuvent commettre le pire en obéissant","La violence est un phénomène naturel"], bonne: 2, expl: "Après le procès Eichmann (1963).", niv: 3 },
        { q: "Pourquoi le titre Meine freie deutsche Jugend est-il ironique ?", choix: ["Il célèbre la liberté totale des jeunes en RDA","Il raconte la jeunesse d'une princesse allemande","Il décrit une fête de jeunesse en Bavière","Il reprend le nom de la FDJ alors que la jeunesse en RDA était surveillée"], bonne: 3, expl: "Jeu de mots sur Freie Deutsche Jugend.", niv: 3 },
        { q: "Que montre la duale Ausbildung du lien social ?", choix: ["L'école remplace la famille dans l'éducation","Les jeunes quittent l'école à douze ans","L'entreprise participe à la formation des jeunes","L'État paie les loisirs et les vacances des apprentis"], bonne: 2, expl: "Alternance école et entreprise.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-all-4",
      fiche: `## Socialisation et sociabilité : espaces et enjeux

Où se rencontre-t-on dans les pays de langue allemande ? Les associations, les Églises, les fêtes, la musique et la presse créent des liens entre des gens qui ne se connaissent pas. On dit souvent, avec humour : « Drei Deutsche, ein Verein » (trois Allemands fondent une association).

### Le vocabulaire à connaître
- **der Verein** : l'association, le club ; **das Mitglied** : le membre ; **das Ehrenamt** : le bénévolat ; **ehrenamtlich** : bénévole.
- **die Geselligkeit** : la convivialité ; **der Stammtisch** : la table des habitués au café ; **die Kneipe** : le bistrot.
- **feiern** : faire la fête ; **das Fest** ; **der Karneval** / **der Fasching** ; **das Brauchtum** : les traditions populaires.
- **die Kirche** ; **die Kirchensteuer** : l'impôt d'Église ; **die Nächstenliebe** : l'amour du prochain.
- **die Zeitung** : le journal ; **die Boulevardpresse** : la presse à sensation ; **die öffentliche Meinung** : l'opinion publique.

### La vie associative
- Il existe plus de **600 000 Vereine** en Allemagne : **Sportverein** (le club de football ou de gymnastique, le **Turnverein**), **Musikverein**, **Schützenverein** (société de tir), clubs de jardins ouvriers (**Schrebergarten**).
- Environ un Allemand sur trois s'engage dans l'**Ehrenamt** (pompiers volontaires, aide aux réfugiés, sport).

### Les Églises et la solidarité
- La **Réforme** de **Martin Luther** (1517) a profondément marqué l'espace germanophone. Les Églises gèrent hôpitaux, crèches et maisons de retraite : **Caritas** (catholique), **Diakonie** (protestante).
- La **Kirchensteuer** est prélevée par l'État pour les Églises ; de plus en plus de fidèles quittent l'Église (**Kirchenaustritt**).
- Les **Bahnhofsmissionen** accueillent les voyageurs en difficulté dans les gares.

### Fêtes, musique et culture
- Le **carnaval** rhénan (**Köln**, « **Kölle Alaaf !** », le **Rosenmontag**) et le **Fasching** du Sud renversent l'ordre pour quelques jours.
- L'**Oktoberfest** de Munich (depuis **1810**) ; les marchés de Noël (**Weihnachtsmärkte**).
- La musique rassemble : chorales comme le **Thomanerchor** de Leipzig (lié à Bach), le **Neujahrskonzert** de Vienne, les festivals de **Bayreuth** (Wagner) et de **Salzbourg**, l'**Elbphilharmonie** de Hambourg (2017).
- Les foires du livre de **Leipzig** et de **Francfort** (**Buchmesse**).
- Le **Kabarett** politique : on rit ensemble de références partagées.

### La presse, lieu de débat et de pouvoir
- **Der Spiegel** (hebdomadaire d'enquête), la **Süddeutsche Zeitung**, **Die Zeit** ; le groupe **Axel Springer** publie la **Bild-Zeitung**, journal à sensation.
- **Heinrich Böll** dénonce dans **Die verlorene Ehre der Katharina Blum** (1974) la violence d'un journal à scandale qui détruit une femme.

### À retenir pour le bac
- Verein, Ehrenamt, Stammtisch, Geselligkeit : la sociabilité organisée.
- Luther (1517), Caritas, Diakonie, Kirchensteuer.
- Karneval (Kölle Alaaf), Oktoberfest (1810), Thomanerchor, Bayreuth, Buchmesse.
- Spiegel, Bild, Böll et Katharina Blum (1974).`,
      cartes: [
        { q: "Que signifie « der Verein » ?", r: "L'association, le club (Sportverein, Musikverein…)." },
        { q: "Que signifie « das Ehrenamt » ?", r: "Le bénévolat (ehrenamtlich = bénévole)." },
        { q: "Qu'est-ce qu'un Stammtisch ?", r: "La table réservée aux habitués dans un café ou une auberge." },
        { q: "Que signifie « die Geselligkeit » ?", r: "La convivialité, le plaisir d'être ensemble." },
        { q: "Que signifie « das Brauchtum » ?", r: "Les traditions et coutumes populaires." },
        { q: "Qu'est-ce que la Kirchensteuer ?", r: "L'impôt d'Église, prélevé par l'État pour les Églises." },
        { q: "Que sont Caritas et la Diakonie ?", r: "Les grandes œuvres sociales catholique (Caritas) et protestante (Diakonie)." },
        { q: "Quand Luther publie-t-il ses 95 thèses ?", r: "En 1517, à Wittenberg : début de la Réforme." },
        { q: "Que crie-t-on au carnaval de Cologne ?", r: "« Kölle Alaaf ! »" },
        { q: "Qu'est-ce que le Rosenmontag ?", r: "Le lundi gras, grand jour des défilés du carnaval rhénan." },
        { q: "Depuis quand existe l'Oktoberfest ?", r: "Depuis 1810, à Munich." },
        { q: "Qu'est-ce que le Thomanerchor ?", r: "Le chœur de garçons de l'église Saint-Thomas de Leipzig, dirigé autrefois par Bach." },
        { q: "Quel journal à sensation publie le groupe Axel Springer ?", r: "La Bild-Zeitung." },
        { q: "Que dénonce Böll dans Katharina Blum ?", r: "La violence d'une presse à scandale qui détruit la réputation d'une femme (1974)." },
      ],
      quiz: [
        { q: "Que signifie « der Verein » ?", choix: ["L'association","La réunion de famille","Le voisinage","La mairie"], bonne: 0, expl: "Drei Deutsche, ein Verein.", niv: 1 },
        { q: "Que signifie « ehrenamtlich » ?", choix: ["Honnête","Officiel","Bénévole","Honoraire"], bonne: 2, expl: "Das Ehrenamt = le bénévolat.", niv: 1 },
        { q: "Dans quelle ville a lieu l'Oktoberfest ?", choix: ["Munich","Cologne","Hambourg","Vienne"], bonne: 0, expl: "Depuis 1810.", niv: 1 },
        { q: "Que crie-t-on au carnaval de Cologne ?", choix: ["Helau Berlin","Prost Neujahr","Kölle Alaaf","Frohe Ostern"], bonne: 2, expl: "Helau se crie à Mayence et Düsseldorf.", niv: 1 },
        { q: "Que désigne la Kirchensteuer ?", choix: ["Un impôt pour les Églises","Une quête faite à la messe","Un droit d'entrée dans une cathédrale","Une amende pour les fêtes religieuses"], bonne: 0, expl: "Prélevée par l'État.", niv: 2 },
        { q: "Qu'est-ce que la Diakonie ?", choix: ["L'œuvre sociale protestante","Le conseil des évêques catholiques","Une chorale de Leipzig","Une fête de la Réforme"], bonne: 0, expl: "Caritas est catholique.", niv: 2 },
        { q: "Qu'est-ce qu'un Stammtisch ?", choix: ["Le repas de famille du dimanche","Le comptoir d'une boulangerie","Un banc d'église dans un village","La table des habitués"], bonne: 3, expl: "Lieu de discussion au café.", niv: 2 },
        { q: "À quel compositeur le Thomanerchor est-il lié ?", choix: ["Wagner","Bach","Mozart","Beethoven"], bonne: 1, expl: "Bach en fut le Kantor à Leipzig.", niv: 2 },
        { q: "Quel journal est un journal à sensation ?", choix: ["Die Zeit","Bild","Der Spiegel","Süddeutsche Zeitung"], bonne: 1, expl: "Groupe Axel Springer.", niv: 2 },
        { q: "Que permet le carnaval selon la tradition ?", choix: ["Renverser l'ordre social pour quelques jours","Célébrer la victoire d'une armée","Fêter la fin des récoltes d'automne dans les villages","Honorer la naissance d'un roi"], bonne: 0, expl: "Les fous prennent le pouvoir.", niv: 3 },
        { q: "Que montre le nombre de Vereine en Allemagne ?", choix: ["Une sociabilité très organisée","Un refus de la vie collective","Une disparition du sport amateur","Un contrôle de l'État sur les loisirs"], bonne: 0, expl: "Plus de 600 000 associations.", niv: 3 },
        { q: "Que signifie la hausse des Kirchenaustritte ?", choix: ["Les Églises gagnent de nouveaux membres","Les Églises perdent des fidèles","L'impôt d'Église a été supprimé","Les églises ferment le dimanche"], bonne: 1, expl: "Kirchenaustritt = sortie de l'Église.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-all-5",
      fiche: `## Les liens sociaux entre fragilisation et mutation

La division de l'Allemagne, les crises économiques, la violence politique et les inégalités ont fragilisé le lien social. Mais la société invente aussi de nouvelles façons de vivre ensemble.

### Le vocabulaire à connaître
- **die Teilung** : la division ; **die Mauer** : le mur ; **der Mauerfall** : la chute du mur ; **die Wende** : le tournant de 1989 ; **die Wiedervereinigung** : la réunification.
- **die Stasi** : la police politique de RDA ; **überwachen** : surveiller ; **der Spitzel** : l'indicateur ; **die Akte** : le dossier.
- **die Ostalgie** : la nostalgie de la RDA ; **der Ossi** / **der Wessi** ; **die Mauer im Kopf** : le mur dans les têtes.
- **die Spaltung** : la fracture ; **die Ungleichheit** : l'inégalité ; **die Armut** : la pauvreté ; **die Arbeitslosigkeit** : le chômage.
- **der Protest** ; **demonstrieren** ; **der Widerstand** : la résistance ; **der Terrorismus**.

### Un pays divisé (1949-1990)
- En **1949** naissent la **RFA** (Bundesrepublik) et la **RDA** (DDR). Le **mur de Berlin** est construit le **13 août 1961**.
- En RDA, la **Stasi** surveille des millions de personnes grâce à des indicateurs (**inoffizielle Mitarbeiter**). Après 1990, chacun peut lire son dossier.
- **Claudia Rusch** raconte dans **Meine freie deutsche Jugend** (2003) une enfance dans une famille surveillée.
- Les manifestations du lundi à **Leipzig** (« **Wir sind das Volk !** ») mènent à la **chute du mur** le **9 novembre 1989** ; la **réunification** a lieu le **3 octobre 1990**.

### Après la réunification
- Fermetures d'usines, chômage à l'Est : une partie des **Ostdeutsche** se sent déclassée. On parle de **Mauer im Kopf**.
- L'**Ostalgie** se moque et s'attendrit à la fois : **Good Bye, Lenin!** (Wolfgang Becker, 2003), **Am kürzeren Ende der Sonnenallee** (Brussig, 1999).
- **Der Held vom Bahnhof Friedrichstraße** (Becker, 2025) interroge la façon dont on fabrique, trente ans après, des héros de la RDA.

### Violence et contestation à l'Ouest
- **1968** : la jeunesse conteste la génération des parents et le silence sur le nazisme.
- La **RAF** (Rote Armee Fraktion) commet des attentats ; le **Deutscher Herbst** (automne allemand) de **1977** marque le pays.
- **Die fetten Jahre sind vorbei** (Weingartner, 2004) montre des jeunes Berlinois qui contestent le capitalisme par des actions symboliques.

### De nouveaux liens
- Écologie et vie collective : le quartier **Vauban** à Fribourg, les jardins partagés (**Gemeinschaftsgärten**), les coopératives d'habitat.
- Les **Fridays for Future** rassemblent les jeunes ; les **réseaux sociaux** créent des communautés mais aussi des bulles.
- Les inégalités et la montée de partis populistes (**AfD**) inquiètent sur la **Spaltung** de la société.

### À retenir pour le bac
- 1949 (deux États), 13 août 1961 (mur), 9 novembre 1989 (chute), 3 octobre 1990 (réunification).
- Stasi, Wende, Ostalgie, Mauer im Kopf, « Wir sind das Volk ».
- 1968, RAF et Deutscher Herbst (1977) ; Vauban, Fridays for Future.`,
      cartes: [
        { q: "Que signifie « die Wende » ?", r: "Le tournant de 1989 : la fin du régime de RDA." },
        { q: "Traduire en allemand : la réunification", r: "Die Wiedervereinigung." },
        { q: "Quand le mur de Berlin est-il construit ?", r: "Le 13 août 1961." },
        { q: "Quand le mur tombe-t-il ?", r: "Le 9 novembre 1989." },
        { q: "Quand a lieu la réunification ?", r: "Le 3 octobre 1990 (jour de fête nationale)." },
        { q: "Qu'est-ce que la Stasi ?", r: "La police politique de la RDA, qui surveillait la population avec des indicateurs." },
        { q: "Que signifie « der Spitzel » ?", r: "L'indicateur, le mouchard." },
        { q: "Que scandaient les manifestants de Leipzig en 1989 ?", r: "« Wir sind das Volk ! » (Le peuple, c'est nous.)" },
        { q: "Que signifie « die Ostalgie » ?", r: "La nostalgie de la vie en RDA (Ost + Nostalgie)." },
        { q: "Que veut dire « die Mauer im Kopf » ?", r: "Le mur dans les têtes : les différences qui persistent entre Est et Ouest après 1990." },
        { q: "Qu'est-ce que la RAF ?", r: "La Rote Armee Fraktion, groupe terroriste d'extrême gauche des années 1970." },
        { q: "Qu'est-ce que le Deutscher Herbst ?", r: "L'automne 1977, marqué par les enlèvements et attentats de la RAF." },
        { q: "Qu'est-ce que le quartier Vauban ?", r: "Un quartier écologique de Fribourg-en-Brisgau, presque sans voitures." },
        { q: "Que signifie « die Spaltung » ?", r: "La fracture, la division." },
      ],
      quiz: [
        { q: "Que signifie « der Mauerfall » ?", choix: ["La construction du mur","La peinture du mur","La frontière fermée","La chute du mur"], bonne: 3, expl: "9 novembre 1989.", niv: 1 },
        { q: "En quelle année le mur de Berlin est-il construit ?", choix: ["1949","1961","1953","1956"], bonne: 1, expl: "Le 13 août 1961.", niv: 1 },
        { q: "Que signifie « überwachen » ?", choix: ["Surveiller","Se réveiller","Survoler","Traverser"], bonne: 0, expl: "La Stasi surveillait la population.", niv: 1 },
        { q: "Quel slogan crient les manifestants de Leipzig ?", choix: ["Wir sind das Volk","Wir schaffen das","Ich bin ein Berliner","Nie wieder Krieg"], bonne: 0, expl: "Lundis de 1989.", niv: 1 },
        { q: "Quand a lieu la réunification allemande ?", choix: ["Le 9 novembre 1989","Le 3 octobre 1990","Le 13 août 1991","Le 8 mai 1995"], bonne: 1, expl: "Fête nationale allemande.", niv: 2 },
        { q: "Que signifie « die Ostalgie » ?", choix: ["La peur de l'Europe de l'Est","Une maladie des pays froids","La nostalgie de la RDA","La fête des pays de l'Est"], bonne: 2, expl: "Ost + Nostalgie.", niv: 2 },
        { q: "Que désigne le Deutscher Herbst ?", choix: ["Les vendanges de la vallée du Rhin","La crise terroriste de 1977","La chute du mur à l'automne 1989","Une fête populaire bavaroise"], bonne: 1, expl: "Attentats de la RAF.", niv: 2 },
        { q: "Que signifie « der Spitzel » ?", choix: ["Le sommet","La pointe","L'indicateur","Le chef"], bonne: 2, expl: "Les inoffizielle Mitarbeiter de la Stasi.", niv: 2 },
        { q: "Que veut dire « die Mauer im Kopf » ?", choix: ["Un mal de tête des habitants de Berlin","Un mur reconstruit en 2000 à Leipzig","La mémoire des anciens gardes-frontières de la RDA","Des différences persistantes entre Est et Ouest"], bonne: 3, expl: "Après la réunification.", niv: 2 },
        { q: "Pourquoi une partie de l'Est se sent-elle déclassée après 1990 ?", choix: ["Les Allemands de l'Est perdent le droit de vote","Des usines ferment et le chômage augmente","Le mark de l'Ouest est interdit à l'Est","Les villes de l'Est sont rattachées à la Pologne"], bonne: 1, expl: "Transformation brutale de l'économie.", niv: 3 },
        { q: "Que conteste la jeunesse de 1968 à l'Ouest ?", choix: ["La construction du mur de Berlin","La création de l'Union européenne","Le passage à l'euro","Le silence des parents sur le nazisme"], bonne: 3, expl: "Conflit des générations.", niv: 3 },
        { q: "Que montre le quartier Vauban de Fribourg ?", choix: ["La fin de la vie de quartier en Allemagne","De nouveaux liens autour de l'écologie","Un retour des grandes autoroutes urbaines","Une ville réservée aux touristes"], bonne: 1, expl: "Quartier presque sans voitures.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-all-6",
      fiche: `## La nature source de mythes

La **forêt** (**der Wald**) et l'**eau** (le **Rhin**, les lacs, la mer) occupent une place à part dans l'imaginaire allemand. Lieux de peur et de refuge, ils ont nourri contes, poèmes et légendes, puis une forte conscience écologique.

### Le vocabulaire à connaître
- **der Wald** : la forêt ; **die Waldeinsamkeit** : la solitude de la forêt ; **der Baum** ; **die Eiche** : le chêne ; **die Tanne** : le sapin.
- **das Märchen** : le conte ; **die Sage** : la légende ; **die Hexe** : la sorcière ; **der Zwerg** : le nain ; **verzaubern** : enchanter.
- **der Fluss** : le fleuve ; **die Nixe** : l'ondine ; **der Felsen** : le rocher ; **die Strömung** : le courant.
- **die Romantik** : le romantisme ; **die Sehnsucht** ; **unheimlich** : inquiétant ; **geheimnisvoll** : mystérieux.
- **der Umweltschutz** : la protection de l'environnement ; **das Waldsterben** : la mort des forêts.

### La forêt des contes et des romantiques
- Les frères **Grimm** publient les **Kinder- und Hausmärchen** (**1812**) : **Hänsel und Gretel**, **Rotkäppchen**, **Schneewittchen**. La forêt y est le lieu de l'épreuve, du danger et de la transformation.
- **Ludwig Tieck** invente le mot **Waldeinsamkeit** (Der blonde Eckbert, 1797).
- Le romantisme réenchante le monde : **Novalis** et la **blaue Blume** (la fleur bleue, symbole de la Sehnsucht).
- **Caspar David Friedrich** peint forêts, ruines et chênes (**Der Chasseur im Walde**, 1814).
- Dès le XIXe siècle, la forêt devient aussi un symbole national : le chêne, Arminius dans la forêt de Teutoburg.

### L'eau, le Rhin et ses légendes
- Le **Rhin** est le « fleuve allemand » chanté par les poètes ; on y place l'or des **Nibelungen**.
- **Heinrich Heine**, **Die Lore-Ley** (1824, dans le **Buch der Lieder**, 1827) : une belle jeune femme assise sur un rocher peigne ses cheveux d'or et chante ; le batelier, fasciné, se brise sur les récifs. « **Ich weiß nicht, was soll es bedeuten, / Dass ich so traurig bin** ».
- **Goethe**, **Der Erlkönig** (1782) : le roi des aulnes enlève un enfant dans la nuit ; **Der Fischer** (1779) : une ondine attire un pêcheur.
- **Friedrich de la Motte Fouqué**, **Undine** (1811) : une ondine qui veut une âme humaine.

### De la mythification à l'écologie
- Dans les années 1980, la peur du **Waldsterben** (pluies acides) mobilise le pays et renforce le parti des **Grünen** (fondé en **1980**).
- Le **Nationalpark Bayerischer Wald** (1970) est le premier parc national allemand.
- **Peter Wohlleben**, **Das geheime Leben der Bäume** (2015) : un best-seller qui prête aux arbres une vie sociale.

### À retenir pour le bac
- Wald, Waldeinsamkeit, Märchen (Grimm, 1812), blaue Blume (Novalis).
- Lore-Ley (Heine) : la nature séduisante et dangereuse ; Erlkönig (Goethe, 1782).
- Waldsterben, Grünen (1980), Bayerischer Wald (1970), Wohlleben (2015).`,
      cartes: [
        { q: "Que signifie « die Waldeinsamkeit » ?", r: "La solitude de la forêt, mot inventé par Ludwig Tieck (1797)." },
        { q: "Quelle différence entre Märchen et Sage ?", r: "Märchen : conte merveilleux. Sage : légende liée à un lieu ou un fait historique." },
        { q: "Traduire en allemand : la sorcière", r: "Die Hexe." },
        { q: "Que signifie « unheimlich » ?", r: "Inquiétant, étrange." },
        { q: "Quand les Grimm publient-ils leurs contes ?", r: "En 1812 (Kinder- und Hausmärchen)." },
        { q: "Quel rôle joue la forêt dans les contes de Grimm ?", r: "Un lieu d'épreuve et de danger, où le héros se transforme (Hänsel und Gretel, Rotkäppchen)." },
        { q: "Que symbolise la blaue Blume de Novalis ?", r: "La Sehnsucht, le désir d'infini du romantisme." },
        { q: "Que raconte Die Lore-Ley de Heine ?", r: "Une jeune femme sur un rocher du Rhin chante et peigne ses cheveux d'or ; le batelier fasciné se noie." },
        { q: "Quel est le premier vers de Die Lore-Ley ?", r: "« Ich weiß nicht, was soll es bedeuten »." },
        { q: "Que raconte Der Erlkönig de Goethe ?", r: "Le roi des aulnes attire puis enlève un enfant que son père emporte à cheval dans la nuit (1782)." },
        { q: "Qu'est-ce qu'une Nixe ?", r: "Une ondine, une créature des eaux." },
        { q: "Que signifie « das Waldsterben » ?", r: "La mort des forêts (pluies acides), grande peur des années 1980." },
        { q: "Quand le parti des Grünen est-il fondé ?", r: "En 1980." },
        { q: "Quel livre de Peter Wohlleben a eu un grand succès ?", r: "Das geheime Leben der Bäume (La Vie secrète des arbres), 2015." },
      ],
      quiz: [
        { q: "Comment dit-on « la forêt » ?", choix: ["Der Wald","Die Welt","Das Feld","Der Wind"], bonne: 0, expl: "Waldeinsamkeit = solitude de la forêt.", niv: 1 },
        { q: "Que signifie « das Märchen » ?", choix: ["Le marché","Le marin","Le mariage","Le conte"], bonne: 3, expl: "Kinder- und Hausmärchen.", niv: 1 },
        { q: "Qui a publié Hänsel und Gretel ?", choix: ["Goethe et Schiller","Heinrich Heine","Les frères Grimm","Thomas Mann"], bonne: 2, expl: "Contes de 1812.", niv: 1 },
        { q: "Sur quel fleuve se trouve le rocher de la Lorelei ?", choix: ["Le Danube","Le Rhin","L'Elbe","La Moselle"], bonne: 1, expl: "Rocher près de Sankt Goarshausen.", niv: 1 },
        { q: "Que signifie « unheimlich » ?", choix: ["Sans maison","Sans abri","Malheureux","Inquiétant"], bonne: 3, expl: "Mot clé du fantastique.", niv: 2 },
        { q: "Que fait la Lorelei dans le poème de Heine ?", choix: ["Elle chante et peigne ses cheveux d'or","Elle sauve un batelier de la noyade","Elle garde le trésor des Nibelungen","Elle protège la forêt des chasseurs"], bonne: 0, expl: "Le batelier se brise sur les récifs.", niv: 2 },
        { q: "Que symbolise la blaue Blume ?", choix: ["Le drapeau d'un royaume allemand","La fleur nationale de la Bavière","Le désir d'infini romantique","Le printemps dans les contes"], bonne: 2, expl: "Novalis, Heinrich von Ofterdingen.", niv: 2 },
        { q: "Qui est le Erlkönig dans la ballade de Goethe ?", choix: ["Un roi qui protège les forêts","Un chevalier qui sauve son fils","Un ermite qui soigne les malades","Un être qui enlève un enfant"], bonne: 3, expl: "Ballade de 1782.", niv: 2 },
        { q: "En quelle année le parti des Grünen est-il fondé ?", choix: ["1945","1980","1968","1975"], bonne: 1, expl: "Après les luttes antinucléaires.", niv: 2 },
        { q: "Pourquoi la forêt est-elle ambivalente dans les contes ?", choix: ["Elle est un décor sans importance pour l'histoire","Elle appartient aux rois qui en interdisent l'entrée","Elle représente la ville moderne et ses usines","Elle est à la fois dangereuse et lieu de transformation"], bonne: 3, expl: "On s'y perd, on y grandit.", niv: 3 },
        { q: "Que révèle la peur du Waldsterben ?", choix: ["L'indifférence des Allemands face à la nature","Le manque de bois de chauffage en Allemagne","Le lien affectif fort des Allemands avec la forêt","La disparition des contes dans les écoles"], bonne: 2, expl: "Mobilisation des années 1980.", niv: 3 },
        { q: "Quelle idée relie la Lore-Ley et Der Fischer de Goethe ?", choix: ["Une nature domptée par le travail des paysans","Une nature calme qui guérit les malades","Une nature séduisante qui attire l'homme vers la mort","Une nature hostile vaincue par la science et la technique"], bonne: 2, expl: "Les ondines et sirènes du Rhin.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-all-7",
      fiche: `## Relectures des mythologies

Les mythes grecs et latins, les légendes nordiques et médiévales ont été sans cesse réécrits par les auteurs de langue allemande. Chaque époque y projette ses propres questions : la révolte, le savoir, la guerre, la place des femmes.

### Le vocabulaire à connaître
- **der Mythos** (pl. **die Mythen**) : le mythe ; **die Mythologie** ; **die Gottheit** : la divinité ; **der Held** : le héros ; **die Heldin** : l'héroïne.
- **umschreiben** : réécrire ; **neu deuten** : réinterpréter ; **die Deutung** : l'interprétation ; **die Bearbeitung** : l'adaptation.
- **der Teufel** : le diable ; **der Pakt** ; **die Seele** : l'âme ; **der Ehrgeiz** : l'ambition ; **die Erkenntnis** : la connaissance.
- **die Entzauberung der Welt** : le désenchantement du monde ; **die Wiederverzauberung** : le réenchantement.

### Les mythes antiques relus
- **Prométhée** : dans le poème **Prometheus** (1774), le jeune **Goethe** fait du Titan un révolté qui défie Zeus : « **Hier sitz ich, forme Menschen / Nach meinem Bilde** ». C'est l'esprit du **Sturm und Drang**.
- **Iphigénie** : **Goethe**, **Iphigenie auf Tauris** (1787), une héroïne qui choisit la vérité et l'humanité plutôt que la ruse.
- **Christa Wolf** (RDA) réécrit les mythes du point de vue des femmes : **Kassandra** (1983), la prophétesse qui n'est pas crue, et **Medea. Stimmen** (1996), où Médée devient le bouc émissaire de Corinthe.
- **Ariane**, **Médée** inspirent peintres et musiciens (Lovis Corinth, **Ariadne auf Naxos**, 1913 ; l'opéra de Richard Strauss, 1912).

### Les légendes germaniques et médiévales
- Le **Nibelungenlied** (vers **1200**) : Siegfried, le trésor du Rhin, la vengeance de Kriemhild.
- **Richard Wagner** en fait **Der Ring des Nibelungen**, joué en entier à **Bayreuth** en **1876**.
- **Faust** : le savant qui vend son âme au diable **Mephisto** pour tout connaître. **Goethe**, **Faust I** (1808) : « **Zwei Seelen wohnen, ach ! in meiner Brust** ». Thomas Mann le reprend dans **Doktor Faustus** (1947), image de l'Allemagne qui s'est livrée au mal.

### Le romantisme et le réenchantement
- Face au rationalisme des Lumières, les **romantiques** veulent réenchanter le monde : contes, légendes, rêves (**Novalis**, **E. T. A. Hoffmann**).
- **Max Weber** parle en 1917 de l'**Entzauberung der Welt** par la science ; les mythes reviennent pourtant dans la culture de masse (fantasy, jeux vidéo, films).

### Relire un mythe : la méthode
- Repérer le **mythe d'origine** (personnages, intrigue).
- Voir ce que l'auteur **change** : point de vue, fin, époque, sens.
- Se demander **pourquoi** : critique politique, féministe, morale.

### À retenir pour le bac
- Prometheus (Goethe, 1774), Iphigenie (1787), Faust I (1808), Doktor Faustus (Mann, 1947).
- Christa Wolf : Kassandra (1983), Medea. Stimmen (1996).
- Nibelungenlied (vers 1200), Ring des Nibelungen (Bayreuth, 1876), Entzauberung der Welt (Weber).`,
      cartes: [
        { q: "Que signifie « umschreiben » ?", r: "Réécrire (une histoire, un mythe)." },
        { q: "Que signifie « die Deutung » ?", r: "L'interprétation (neu deuten = réinterpréter)." },
        { q: "Que fait le Prometheus de Goethe (1774) ?", r: "Il défie Zeus et crée des hommes à son image : un révolté du Sturm und Drang." },
        { q: "Qu'est-ce que le Sturm und Drang ?", r: "Un mouvement littéraire des années 1770 qui exalte la révolte, la passion et le génie (jeune Goethe, Schiller)." },
        { q: "Quel choix fait l'Iphigénie de Goethe ?", r: "Elle choisit la vérité et l'humanité plutôt que la ruse (1787)." },
        { q: "Comment Christa Wolf relit-elle les mythes ?", r: "Du point de vue des femmes : Kassandra (1983), Medea. Stimmen (1996)." },
        { q: "Que devient Médée chez Christa Wolf ?", r: "Un bouc émissaire accusé à tort par la cité de Corinthe." },
        { q: "Qu'est-ce que le Nibelungenlied ?", r: "Une épopée médiévale (vers 1200) : Siegfried, le trésor du Rhin, la vengeance de Kriemhild." },
        { q: "Quand le Ring des Nibelungen est-il joué en entier à Bayreuth ?", r: "En 1876." },
        { q: "Quel pacte fait Faust ?", r: "Il vend son âme au diable Méphisto en échange du savoir et des plaisirs." },
        { q: "Que dit Faust dans « Zwei Seelen wohnen… » ?", r: "Il sent deux âmes en lui : l'une attachée à la terre, l'autre tournée vers l'idéal." },
        { q: "Que représente le Doktor Faustus de Thomas Mann ?", r: "L'Allemagne qui s'est livrée au mal sous le nazisme (1947)." },
        { q: "Que signifie « die Entzauberung der Welt » ?", r: "Le désenchantement du monde par la science (Max Weber)." },
        { q: "Traduire en allemand : le diable", r: "Der Teufel." },
      ],
      quiz: [
        { q: "Que signifie « der Held » ?", choix: ["Le champ","L'argent","Le ciel","Le héros"], bonne: 3, expl: "Die Heldin = l'héroïne.", niv: 1 },
        { q: "Qui vend son âme au diable dans la pièce de Goethe ?", choix: ["Faust","Siegfried","Werther","Wilhelm Tell"], bonne: 0, expl: "Faust I, 1808.", niv: 1 },
        { q: "Comment s'appelle le diable dans Faust ?", choix: ["Lucifer","Wotan","Méphisto","Loki"], bonne: 2, expl: "Mephistopheles.", niv: 1 },
        { q: "Que signifie « umschreiben » ?", choix: ["Réécrire","Signer","Décrire","Inscrire"], bonne: 0, expl: "Umschreiben = transformer un texte.", niv: 1 },
        { q: "Quel Titan défie Zeus dans un poème de Goethe ?", choix: ["Atlas","Hercule","Ulysse","Prométhée"], bonne: 3, expl: "Prometheus, 1774.", niv: 2 },
        { q: "Quelle autrice réécrit Kassandra et Médée ?", choix: ["Anna Seghers","Herta Müller","Ingeborg Bachmann","Christa Wolf"], bonne: 3, expl: "Autrice de RDA.", niv: 2 },
        { q: "Qui a composé Der Ring des Nibelungen ?", choix: ["Johann Sebastian Bach","Richard Wagner","Ludwig van Beethoven","Johannes Brahms"], bonne: 1, expl: "Joué à Bayreuth en 1876.", niv: 2 },
        { q: "Que signifie « die Deutung » ?", choix: ["L'interprétation","La signification d'un panneau","Le pays allemand","La dette"], bonne: 0, expl: "Neu deuten = réinterpréter.", niv: 2 },
        { q: "Que désigne l'Entzauberung der Welt chez Max Weber ?", choix: ["La fin des guerres en Europe après 1918","Le recul du merveilleux face à la science","La disparition des forêts allemandes","Une fête païenne du solstice"], bonne: 1, expl: "Désenchantement du monde.", niv: 2 },
        { q: "Pourquoi Christa Wolf donne-t-elle la parole à Cassandre ?", choix: ["Pour célébrer la victoire des Grecs sur Troie","Pour raconter la vie d'un roi de Corinthe","Pour montrer la guerre vue par une femme qu'on ne croit pas","Pour écrire un manuel de mythologie destiné aux élèves des lycées"], bonne: 2, expl: "Kassandra, 1983.", niv: 3 },
        { q: "Que symbolise Faust dans le roman de Thomas Mann (1947) ?", choix: ["L'Allemagne qui pactise avec le mal","Le savant qui sauve l'humanité","Le musicien heureux et reconnu","La victoire de la science sur la religion"], bonne: 0, expl: "Doktor Faustus.", niv: 3 },
        { q: "Que faut-il chercher quand on étudie la relecture d'un mythe ?", choix: ["La date exacte de naissance du héros","Ce que l'auteur change et pourquoi","Le nombre de personnages du mythe","La version la plus courte du récit"], bonne: 1, expl: "Point de vue, fin, sens.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-all-8",
      fiche: `## Mythes historiques et politiques fondateurs

Une nation se raconte des histoires sur ses origines. Dans l'espace germanophone, des héros (**Arminius**, **Barberousse**, **Guillaume Tell**, **Luther**) ont servi à construire une identité, parfois au service du nationalisme. Après 1945, l'Allemagne a dû repenser ses mythes.

### Le vocabulaire à connaître
- **der Gründungsmythos** : le mythe fondateur ; **die Nation** ; **das Volk** : le peuple ; **das Reich** : l'empire.
- **der Nationalismus** ; **die Einheit** : l'unité ; **die Freiheit** : la liberté ; **das Denkmal** : le monument.
- **die Erinnerung** : le souvenir ; **das Gedenken** : la commémoration ; **die Vergangenheitsbewältigung** : le travail sur le passé.
- **die Stunde Null** : l'« heure zéro » de 1945 ; **das Wirtschaftswunder** : le miracle économique.

### Les héros des origines
- **Arminius** (en allemand **Hermann**) bat les légions romaines dans la **forêt de Teutoburg** en l'an **9**. Au XIXe siècle, il devient le symbole de l'unité allemande contre l'étranger : Kleist, **Die Hermannsschlacht** (1808) ; le **Hermannsdenkmal** (1875).
- **Charlemagne** (**Karl der Große**) est revendiqué à la fois par la France et l'Allemagne.
- **Frédéric Barberousse** (**Barbarossa**) dormirait dans la montagne du **Kyffhäuser** et reviendrait sauver l'Empire (poème de **Rückert**, 1817 ; **Kyffhäuserdenkmal**, 1896).
- **Martin Luther** (1517) : la Réforme et la traduction de la **Bible** en allemand (1522-1534) donnent une langue commune.

### La Suisse et l'Autriche
- **Guillaume Tell**, archer qui refuse de saluer le chapeau du bailli autrichien, et le **serment du Grütli** (**Rütlischwur**, 1291) fondent le mythe de la liberté suisse ; **Schiller**, **Wilhelm Tell** (1804).
- L'Autriche cultive le mythe de la **monarchie des Habsbourg** et de l'impératrice **Sissi**.

### Mythes et nationalisme
- Pendant les guerres contre **Napoléon**, les poètes appellent au réveil national. **Heinrich Heine** s'en moque dans **Deutschland. Ein Wintermärchen** (1844) et parodie Barberousse.
- Le **nazisme** détourne les mythes germaniques (race, Reich millénaire). Après **1945**, ces mythes sont discrédités.

### Les récits de l'après-guerre
- La **Stunde Null** et le **Wirtschaftswunder** sont aussi des mythes : on y oublie la continuité des élites et le silence sur les crimes.
- Le **procès d'Auschwitz** (Francfort, 1963-1965) brise ce silence ; la série **Deutsches Haus** (Annette Hess, 2023) le raconte.
- La **chute du mur** devient un nouveau récit fondateur, avec ses héros : **Der Held vom Bahnhof Friedrichstraße** (2025) montre comment un faux héros est fabriqué par les médias.

### À retenir pour le bac
- Arminius (an 9, Hermannsdenkmal 1875), Barbarossa (Kyffhäuser), Luther (1517).
- Guillaume Tell et Rütlischwur (1291), Schiller (1804).
- Heine, Wintermärchen (1844) ; Stunde Null, Wirtschaftswunder, Vergangenheitsbewältigung.`,
      cartes: [
        { q: "Que signifie « der Gründungsmythos » ?", r: "Le mythe fondateur." },
        { q: "Que signifie « das Denkmal » ?", r: "Le monument." },
        { q: "Qui est Arminius ?", r: "Le chef germain (Hermann) qui bat les Romains dans la forêt de Teutoburg en l'an 9." },
        { q: "Quand le Hermannsdenkmal est-il inauguré ?", r: "En 1875, peu après l'unité allemande de 1871." },
        { q: "Que raconte la légende de Barberousse ?", r: "L'empereur dort dans le Kyffhäuser et reviendra sauver l'Empire." },
        { q: "Pourquoi la Bible de Luther est-elle importante ?", r: "Sa traduction en allemand donne une langue écrite commune aux Allemands." },
        { q: "Qu'est-ce que le Rütlischwur ?", r: "Le serment du Grütli (1291), mythe fondateur de la Confédération suisse." },
        { q: "Que refuse Guillaume Tell ?", r: "De saluer le chapeau du bailli autrichien Gessler : il devient le symbole de la liberté suisse." },
        { q: "Quand Schiller écrit-il Wilhelm Tell ?", r: "En 1804." },
        { q: "Que fait Heine dans Deutschland. Ein Wintermärchen ?", r: "Il se moque du nationalisme allemand et parodie la légende de Barberousse (1844)." },
        { q: "Que signifie « die Stunde Null » ?", r: "L'« heure zéro » : l'idée d'un nouveau départ en 1945." },
        { q: "Que signifie « das Wirtschaftswunder » ?", r: "Le miracle économique de la RFA dans les années 1950." },
        { q: "Que signifie « die Vergangenheitsbewältigung » ?", r: "Le travail de l'Allemagne pour affronter son passé nazi." },
        { q: "Quand a lieu le procès d'Auschwitz à Francfort ?", r: "De 1963 à 1965." },
      ],
      quiz: [
        { q: "Que signifie « das Denkmal » ?", choix: ["La pensée","Le remerciement","Le monument","La marque"], bonne: 2, expl: "Das Hermannsdenkmal (1875).", niv: 1 },
        { q: "Quel héros suisse est un archer légendaire ?", choix: ["Guillaume Tell","Siegfried","Arminius","Barberousse"], bonne: 0, expl: "Schiller, Wilhelm Tell, 1804.", niv: 1 },
        { q: "Contre qui Arminius se bat-il ?", choix: ["Les Huns","Les Vikings","Les Francs","Les Romains"], bonne: 3, expl: "Forêt de Teutoburg, an 9.", niv: 1 },
        { q: "En quelle année Luther publie-t-il ses thèses ?", choix: ["1520","1525","1517","1534"], bonne: 2, expl: "Début de la Réforme.", niv: 1 },
        { q: "Où dort Barberousse selon la légende ?", choix: ["Au fond du lac de Constance","Sous la cathédrale de Cologne","Dans le palais de Vienne","Dans le Kyffhäuser"], bonne: 3, expl: "Il doit revenir sauver l'Empire.", niv: 2 },
        { q: "Que signifie « die Stunde Null » ?", choix: ["La fin de la journée de travail","Le début du Nouvel An","Un nouveau départ en 1945","L'heure de fermeture des magasins"], bonne: 2, expl: "Mythe de l'après-guerre.", niv: 2 },
        { q: "Quand se prête le serment du Grütli selon la tradition ?", choix: ["1291","1415","1648","1804"], bonne: 0, expl: "Rütlischwur.", niv: 2 },
        { q: "Pourquoi Arminius devient-il un symbole au XIXe siècle ?", choix: ["Il incarne l'unité allemande face à l'étranger","Il incarne la paix avec l'Empire romain","Il fonde la ville de Berlin au Moyen Âge","Il invente l'écriture de la langue allemande"], bonne: 0, expl: "Hermannsdenkmal, 1875.", niv: 2 },
        { q: "Que signifie « Vergangenheitsbewältigung » ?", choix: ["Oublier le passé","Affronter son passé","Fêter le passé","Refaire le passé"], bonne: 1, expl: "Le travail de mémoire allemand.", niv: 2 },
        { q: "Que fait Heine de la légende de Barberousse en 1844 ?", choix: ["Il la parodie pour se moquer du nationalisme","Il la célèbre dans un hymne pour l'armée","Il la traduit en français pour Napoléon","Il la transforme en conte pour enfants"], bonne: 0, expl: "Deutschland. Ein Wintermärchen.", niv: 3 },
        { q: "Pourquoi le Wirtschaftswunder est-il en partie un mythe ?", choix: ["Il a aidé à taire les crimes du passé","Il n'y a pas eu de croissance en RFA","Il a eu lieu en RDA et pas en RFA","Il date de la fin du XIXe siècle"], bonne: 0, expl: "La prospérité contre le silence.", niv: 3 },
        { q: "Que montre Der Held vom Bahnhof Friedrichstraße sur les mythes ?", choix: ["Les héros de 1989 sont oubliés de la presse","La RDA honorait ses opposants","Les médias peuvent fabriquer un héros","Le mur est tombé grâce à un seul homme"], bonne: 2, expl: "Satire sur la mémoire de la RDA (2025).", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-all-9",
      fiche: `## Les œuvres littéraires du programme limitatif

Pour 2026-2027 et 2027-2028, le professeur choisit **trois œuvres** (dont des textes et un film) dans une liste officielle. Elles servent en cours et pour l'oral. Voici les sept œuvres littéraires, avec les axes auxquels les relier.

### Ewald Arenz, Der große Sommer (2021)
- Frieder, 16 ans, doit repasser des examens (**Nachprüfung**) en maths et en latin. Il passe l'été chez ses grands-parents, avec un grand-père sévère. C'est l'été de l'amitié (Johann), du premier amour (Beate), de la piscine (**Freibad**) et des épreuves.
- Roman d'**apprentissage** raconté par Frieder adulte. Axes : construction des liens sociaux, famille, entre fragilisation et mutation.

### Heinrich Böll, Die verlorene Ehre der Katharina Blum (1974)
- Pendant le carnaval de Cologne, Katharina, une gouvernante sans histoire, passe la nuit avec Ludwig Götten, recherché par la police. Un journal à scandale (**die ZEITUNG**, allusion à la **Bild**) la traite de « putain de terroriste » ; elle finit par tuer le journaliste **Tötges**.
- Sous-titre : « **Wie Gewalt entstehen und wohin sie führen kann** ». Contexte : la peur de la **RAF**. Adapté au cinéma par Schlöndorff et von Trotta (1975). Axes : sociabilité et presse, fragilisation des liens.

### Friedrich Dürrenmatt, Die Physiker (1962)
- Comédie en deux actes dans un asile suisse dirigé par **Mathilde von Zahnd**. Trois physiciens se disent fous : **Möbius** (qui voit le roi Salomon), « Newton » et « Einstein », en réalité deux espions. Möbius a trouvé une formule qui pourrait détruire le monde et se cache pour la protéger. Mais la doctoresse a tout copié : elle va dominer le monde.
- « **Eine Geschichte ist dann zu Ende gedacht, wenn sie ihre schlimmstmögliche Wendung genommen hat.** » Thème : la **responsabilité du savant** à l'âge de la bombe atomique.

### Heinrich Heine, poèmes
- « **Die Lore-Ley** » (Buch der Lieder, 1827) : la nature et le mythe (voir l'axe « La nature source de mythes »).
- « **Fragen** » : un jeune homme au bord de la mer demande le sens de la vie ; « **und ein Narr wartet auf Antwort** ».
- « **Die schlesischen Weber** » (1844) : après la révolte des tisserands de Silésie, un chant de colère et de malédiction (« **Wir weben, wir weben !** ») contre Dieu, le roi et la patrie.
- « **Nachtgedanken** » (1844) : « **Denk ich an Deutschland in der Nacht, / Dann bin ich um den Schlaf gebracht** » : l'exil à Paris et la mère restée en Allemagne.

### Isabel Kreitz, Die Entdeckung der Currywurst (bande dessinée, 2005)
- D'après le roman d'**Uwe Timm** (1993). Hambourg, avril 1945 : **Lena Brücker** cache chez elle un jeune marin déserteur, **Hermann Bremer**, et lui laisse croire que la guerre continue. Plus tard, elle invente la **Currywurst**.
- Le récit est raconté des années après, par un homme qui rend visite à Lena, devenue âgée. Thèmes : la fin de la guerre, la mémoire, l'amour, la débrouille.

### Claudia Rusch, Meine freie deutsche Jugend (2003)
- De courts récits autobiographiques : une enfance en **RDA**, dans une famille d'opposants surveillée par la **Stasi**, entre humour et peur, jusqu'à la chute du mur.
- Axes : entre fragilisation et mutation, construction des liens sociaux.

### Saša Stanišić, Herkunft (2019)
- Né en **1978** à **Višegrad** (Bosnie), l'auteur fuit la guerre en **1992** avec sa mère et arrive à **Heidelberg**. Il raconte son intégration, sa grand-mère qui perd la mémoire, et se demande ce qu'est l'origine. **Deutscher Buchpreis 2019**.
- Récit en fragments, avec une fin où le lecteur choisit sa suite. Axe : exil et migrations.

### À retenir pour le bac
- Arenz (été, formation), Böll (presse et violence, 1974), Dürrenmatt (savant et bombe, 1962).
- Heine : Lore-Ley, Fragen, Die schlesischen Weber, Nachtgedanken (1844).
- Kreitz d'après Timm (Hambourg 1945), Rusch (RDA), Stanišić (Bosnie, Heidelberg, 2019).`,
      cartes: [
        { q: "Pourquoi Frieder passe-t-il l'été chez ses grands-parents (Der große Sommer) ?", r: "Il doit réviser pour repasser des examens de maths et de latin (Nachprüfung)." },
        { q: "Quel journal Böll vise-t-il avec « die ZEITUNG » ?", r: "La Bild-Zeitung, journal à sensation." },
        { q: "Que fait Katharina Blum à la fin du récit ?", r: "Elle tue le journaliste Tötges qui l'a diffamée." },
        { q: "Quel est le sous-titre de Katharina Blum ?", r: "« Wie Gewalt entstehen und wohin sie führen kann »." },
        { q: "Où se passe Die Physiker ?", r: "Dans un asile psychiatrique suisse dirigé par Mathilde von Zahnd." },
        { q: "Pourquoi Möbius se fait-il passer pour fou ?", r: "Pour cacher une formule scientifique qui pourrait détruire le monde." },
        { q: "Quelle est la « pire tournure » de Die Physiker ?", r: "La doctoresse a copié les travaux de Möbius et va dominer le monde." },
        { q: "Que dit Heine dans Nachtgedanken ?", r: "« Denk ich an Deutschland in der Nacht, dann bin ich um den Schlaf gebracht » : la douleur de l'exil." },
        { q: "Quel événement inspire Die schlesischen Weber ?", r: "La révolte des tisserands de Silésie en 1844." },
        { q: "Contre qui les tisserands de Heine lancent-ils leur malédiction ?", r: "Contre Dieu, le roi et la patrie." },
        { q: "Que fait Lena Brücker en avril 1945 ?", r: "Elle cache un jeune marin déserteur et lui fait croire que la guerre continue." },
        { q: "D'après quel roman est la BD d'Isabel Kreitz ?", r: "Die Entdeckung der Currywurst d'Uwe Timm (1993)." },
        { q: "Que raconte Claudia Rusch ?", r: "Son enfance en RDA dans une famille d'opposants surveillée par la Stasi." },
        { q: "D'où vient Saša Stanišić et où arrive-t-il ?", r: "De Višegrad en Bosnie ; il arrive à Heidelberg en 1992." },
      ],
      quiz: [
        { q: "Qui a écrit Die Physiker ?", choix: ["Heinrich Böll","Bertolt Brecht","Max Frisch","Friedrich Dürrenmatt"], bonne: 3, expl: "Pièce de 1962.", niv: 1 },
        { q: "Dans quel pays se déroule Die Physiker ?", choix: ["L'Autriche","L'Allemagne de l'Est","La Suisse","Les États-Unis"], bonne: 2, expl: "Un asile suisse.", niv: 1 },
        { q: "Qui a écrit Herkunft ?", choix: ["Feridun Zaimoglu","Daniel Kehlmann","Uwe Timm","Saša Stanišić"], bonne: 3, expl: "Deutscher Buchpreis 2019.", niv: 1 },
        { q: "Quel plat Lena Brücker invente-t-elle ?", choix: ["La choucroute","Le Döner Kebab","La Bratwurst","La Currywurst"], bonne: 3, expl: "D'après Uwe Timm.", niv: 1 },
        { q: "Quel journal Böll attaque-t-il à travers « die ZEITUNG » ?", choix: ["Der Spiegel","Die Zeit","La Bild-Zeitung","La Frankfurter Allgemeine"], bonne: 2, expl: "Presse à sensation.", niv: 2 },
        { q: "Que fait Katharina Blum à la fin ?", choix: ["Elle s'enfuit en Amérique avec Ludwig Götten","Elle devient journaliste à son tour","Elle tue le journaliste qui l'a diffamée","Elle gagne un procès contre l'État"], bonne: 2, expl: "Tötges est abattu.", niv: 2 },
        { q: "Que cache Möbius dans Die Physiker ?", choix: ["Un trésor volé dans une banque de Zurich","Un espion américain caché dans l'asile","Les lettres de sa première femme","Une formule qui pourrait détruire le monde"], bonne: 3, expl: "Il joue le fou pour la protéger.", niv: 2 },
        { q: "Quel poème de Heine dit la douleur de l'exil ?", choix: ["Die Lore-Ley","Nachtgedanken","Fragen","Der Erlkönig"], bonne: 1, expl: "Denk ich an Deutschland in der Nacht…", niv: 2 },
        { q: "Quand Stanišić arrive-t-il en Allemagne ?", choix: ["1992","1978","1985","1989"], bonne: 0, expl: "Il fuit la guerre de Bosnie.", niv: 2 },
        { q: "Pourquoi les tisserands de Heine maudissent-ils la patrie ?", choix: ["Elle leur interdit de quitter l'Allemagne","Elle laisse le peuple dans la misère","Elle a perdu la guerre contre la France","Elle a fermé les églises de Silésie"], bonne: 1, expl: "Révolte de 1844.", niv: 3 },
        { q: "Quelle question pose Die Physiker ?", choix: ["Le droit des malades à quitter l'hôpital","La place des femmes dans la médecine","La responsabilité du savant face à ses découvertes","Le coût des soins psychiatriques dans les cliniques suisses"], bonne: 2, expl: "À l'âge de la bombe atomique.", niv: 3 },
        { q: "Pourquoi Lena laisse-t-elle croire à Hermann que la guerre continue ?", choix: ["Pour le livrer aux soldats anglais","Pour l'obliger à repartir au front","Pour le garder auprès d'elle","Pour toucher une récompense de l'armée"], bonne: 2, expl: "Elle tient à lui.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-all-10",
      fiche: `## Les œuvres filmiques du programme limitatif

Le programme limitatif propose quatre œuvres filmiques. Analyser un film, c'est parler de l'histoire mais aussi de la **mise en scène** : cadrage, lumière, musique, montage.

### Le vocabulaire du cinéma
- **der Film** ; **der Regisseur** / **die Regisseurin** : le réalisateur, la réalisatrice ; **der Schauspieler** : l'acteur ; **die Hauptfigur** : le personnage principal.
- **die Szene** ; **die Einstellung** : le plan ; **die Nahaufnahme** : le gros plan ; **die Totale** : le plan d'ensemble ; **die Kamerafahrt** : le travelling.
- **der Schnitt** : le montage ; **die Filmmusik** ; **die Rückblende** : le retour en arrière ; **der Dokumentarfilm** ; **die Serie** : la série.

### Wolfgang Becker, Der Held vom Bahnhof Friedrichstraße (2025)
- D'après le roman de **Maxim Leo** (2022). **Michael Hartung**, gérant d'un vidéoclub à Berlin, est présenté par un journaliste comme le héros d'une évasion massive vers l'Ouest, du temps de la RDA, grâce à un aiguillage de train. Il se laisse porter par cette fausse gloire.
- Une **comédie satirique** sur la mémoire de la RDA, les médias et le besoin de héros. Dernier film de Wolfgang Becker (**Good Bye, Lenin!**, 2003), mort en 2024.
- Axes : mythes historiques et politiques fondateurs ; liens sociaux entre fragilisation et mutation.

### Annette Hess, Deutsches Haus (mini-série, 2023)
- Francfort, **1963** : **Eva Bruhns**, jeune traductrice de polonais, devient interprète au **procès d'Auschwitz**. Ses parents tiennent le restaurant « **Deutsches Haus** ». Peu à peu, elle découvre le passé de sa famille.
- Thèmes : le silence de l'après-guerre, la **culpabilité**, le rôle des témoins, la place des femmes dans les années 1960. D'après le roman d'Annette Hess (2018).
- Axes : mythes fondateurs (la Stunde Null et le silence), construction des liens sociaux (famille).

### Hans Weingartner, Die fetten Jahre sind vorbei (2004)
- Berlin : **Jan** et **Peter** s'introduisent dans les villas des riches, déplacent les meubles sans rien voler et laissent un message : « **Die fetten Jahre sind vorbei** » (Les années d'abondance sont finies), signé « **Die Erziehungsberechtigten** ». **Jule**, qui doit une grosse somme au riche **Hardenberg**, les rejoint. Surpris chez lui, ils l'enlèvent et l'emmènent dans les Alpes du Tyrol, où ils découvrent qu'il était lui-même un militant de 68.
- Thèmes : la révolte contre la société de consommation, l'engagement, l'amitié et l'amour, ce que deviennent les idéaux. Avec **Daniel Brühl**.
- Axe : liens sociaux entre fragilisation et mutation.

### Wim Wenders, Pina (2011)
- Un **documentaire en 3D** en hommage à la chorégraphe **Pina Bausch** (morte en 2009) et à son **Tanztheater Wuppertal**. Les danseurs reprennent ses pièces (**Le Sacre du printemps**, **Café Müller**, **Kontakthof**, **Vollmond**) et dansent dans la ville et la nature, jusque dans le train suspendu (**Schwebebahn**).
- Le film parle d'émotions, de corps et de liens humains. Formule de Pina Bausch : « **Tanzt, tanzt, sonst sind wir verloren** ».
- Axes : socialisation et sociabilité (une troupe, une ville) ; relectures des mythologies (le Sacre).

### À retenir pour le bac
- Becker (2025) : un faux héros de la RDA ; Hess (2023) : le procès d'Auschwitz (1963).
- Weingartner (2004) : les Erziehungsberechtigten et Hardenberg ; Wenders (2011) : Pina Bausch à Wuppertal.
- Vocabulaire : Einstellung, Nahaufnahme, Schnitt, Rückblende.`,
      cartes: [
        { q: "Que signifie « die Einstellung » au cinéma ?", r: "Le plan (Nahaufnahme = gros plan, Totale = plan d'ensemble)." },
        { q: "Que signifie « die Rückblende » ?", r: "Le retour en arrière (flash-back)." },
        { q: "Que signifie « der Schnitt » au cinéma ?", r: "Le montage." },
        { q: "Qui est Michael Hartung ?", r: "Le gérant de vidéoclub présenté à tort comme le héros d'une évasion de RDA (Der Held vom Bahnhof Friedrichstraße)." },
        { q: "D'après quel roman est le film de Wolfgang Becker (2025) ?", r: "Der Held vom Bahnhof Friedrichstraße de Maxim Leo (2022)." },
        { q: "Quel autre film célèbre a réalisé Wolfgang Becker ?", r: "Good Bye, Lenin! (2003)." },
        { q: "Quel procès est au cœur de Deutsches Haus ?", r: "Le procès d'Auschwitz à Francfort (1963-1965)." },
        { q: "Quel est le métier d'Eva Bruhns ?", r: "Traductrice de polonais, puis interprète au procès d'Auschwitz." },
        { q: "Que découvre Eva Bruhns ?", r: "Le passé de sa famille pendant la guerre, que ses parents ont tu." },
        { q: "Que font Jan et Peter dans Die fetten Jahre sind vorbei ?", r: "Ils entrent dans les villas des riches, déplacent les meubles et laissent un message, sans rien voler." },
        { q: "Comment signent-ils leurs messages ?", r: "« Die Erziehungsberechtigten » (les responsables légaux, les éducateurs)." },
        { q: "Que découvrent-ils sur Hardenberg ?", r: "Qu'il était lui-même un militant de 68 devenu riche." },
        { q: "Qui est Pina Bausch ?", r: "Une chorégraphe allemande (morte en 2009), directrice du Tanztheater Wuppertal." },
        { q: "Quelle est la particularité technique de Pina ?", r: "C'est un documentaire tourné en 3D." },
      ],
      quiz: [
        { q: "Que signifie « der Regisseur » ?", choix: ["Le régisseur de théâtre","Le réalisateur","Le roi","Le spectateur"], bonne: 1, expl: "Die Regisseurin = la réalisatrice.", niv: 1 },
        { q: "Que signifie « die Nahaufnahme » ?", choix: ["Le plan d'ensemble","La prise de nuit","Le générique","Le gros plan"], bonne: 3, expl: "Nah = proche.", niv: 1 },
        { q: "Qui a réalisé Pina ?", choix: ["Fatih Akin","Wim Wenders","Werner Herzog","Wolfgang Becker"], bonne: 1, expl: "Documentaire de 2011.", niv: 1 },
        { q: "Dans quelle ville travaille la troupe de Pina Bausch ?", choix: ["Düsseldorf","Cologne","Essen","Wuppertal"], bonne: 3, expl: "Tanztheater Wuppertal.", niv: 1 },
        { q: "Que laissent les jeunes de Die fetten Jahre sind vorbei dans les villas ?", choix: ["Une facture pour les dégâts","Un message contre l'abondance","Un bouquet de fleurs coupées","Les bijoux volés la veille"], bonne: 1, expl: "« Die fetten Jahre sind vorbei ».", niv: 2 },
        { q: "Où les jeunes emmènent-ils Hardenberg ?", choix: ["Au bord de la mer Baltique","Dans les Alpes","Dans la forêt de Teutoburg","Dans un appartement de Berlin-Est"], bonne: 1, expl: "Un chalet au Tyrol.", niv: 2 },
        { q: "Quel rôle joue Eva Bruhns au procès d'Auschwitz ?", choix: ["Interprète","Juge","Accusée","Journaliste"], bonne: 0, expl: "Elle traduit les témoins polonais.", niv: 2 },
        { q: "En quelle année se déroule Deutsches Haus ?", choix: ["1945","1950","1963","1955"], bonne: 2, expl: "Début du procès d'Auschwitz.", niv: 2 },
        { q: "Que signifie « die Rückblende » ?", choix: ["Le retour en arrière","La vue arrière du décor","Le reflet de la lumière","La fin du film"], bonne: 0, expl: "Flash-back.", niv: 2 },
        { q: "Que critique Der Held vom Bahnhof Friedrichstraße ?", choix: ["Le besoin des médias de fabriquer des héros","La construction du mur de Berlin en 1961","Le travail des gardes-frontières de RDA","La vie des vedettes du cinéma américain"], bonne: 0, expl: "Comédie satirique, 2025.", niv: 3 },
        { q: "Quel paradoxe révèle le personnage de Hardenberg ?", choix: ["Un ouvrier pauvre est devenu un militant","Un ancien révolté est devenu un riche installé","Un policier est devenu cambrioleur","Un artiste est devenu ministre"], bonne: 1, expl: "Que deviennent les idéaux de 68 ?", niv: 3 },
        { q: "Que montre Deutsches Haus de la société des années 1960 ?", choix: ["La joie du peuple après la chute du mur","Le silence des familles sur le passé nazi","La crise des réfugiés de 2015","L'arrivée des premiers Gastarbeiter turcs"], bonne: 1, expl: "Eva découvre ce que ses parents ont tu.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-all-11",
      fiche: `## La synthèse de documents en allemand

La première partie de l'écrit (3 h 30 en tout) vaut **16 points sur 20**. On reçoit un dossier de plusieurs documents (souvent trois : textes littéraires, articles, image) liés à une thématique du programme. On rédige **en allemand**, en **environ 500 mots**, une synthèse qui répond à une consigne.

### Comprendre la consigne
- Formules fréquentes : « **Analysieren Sie, wie die Dokumente … darstellen** », « **Zeigen Sie anhand der drei Dokumente, …** », « **Inwiefern …?** » (dans quelle mesure).
- Souligner les mots-clés et en faire une **problématique** (**die Fragestellung**).

### Lire le dossier
- Pour chaque document : **nature** (**Romanauszug**, **Gedicht**, **Zeitungsartikel**, **Foto**, **Karikatur**), **auteur**, **date**, **contexte**, **point de vue**.
- Relever les idées, les procédés (narrateur, images, ton, ironie) et des citations courtes.
- Faire un tableau : documents en colonnes, idées en lignes. Le plan naît des croisements.

### Construire le plan
- **Deux ou trois parties** par **idées**, jamais un paragraphe par document.
- Chaque partie confronte au moins deux documents : points communs, nuances, oppositions.

### Rédiger
- **Einleitung** : accroche, présentation des documents, Fragestellung, annonce du plan.
- **Hauptteil** : une idée par partie, des références précises (« **Dokument A, Z. 12** » : ligne 12), une analyse des procédés.
- **Schluss** : réponse à la question, éventuellement ouverture.

### Les mots de liaison
- Comparer : **ebenso**, **ebenfalls**, **sowohl … als auch**, **beide Dokumente**, **im Vergleich zu**.
- Opposer : **im Gegensatz zu**, **während** (alors que), **dagegen**, **einerseits … andererseits**, **jedoch**, **aber**.
- Ajouter, conclure : **außerdem**, **darüber hinaus**, **deshalb**, **also**, **zusammenfassend lässt sich sagen**.
- Présenter : **laut Dokument B** (d'après), **der Autor zeigt, dass**, **die Karikatur stellt … dar**, **im Vordergrund** / **im Hintergrund**.

### La langue : les pièges à éviter
- La place du verbe : **2e position** dans la principale (« Im Text **zeigt** der Autor… ») ; **à la fin** dans la subordonnée (« …, dass der Autor die Stadt **kritisiert** »).
- Après « **während** », « **weil** », « **dass** », « **obwohl** » : verbe à la fin.
- Les cas après les prépositions (mit + datif, für + accusatif) et le genre des noms.
- Ne pas recopier de longs passages ; varier les verbes (**darstellen**, **beschreiben**, **betonen**, **kritisieren**, **hervorheben**).

### À retenir pour le bac
- 16 points, environ 500 mots, plan par idées, documents croisés.
- Einleitung, Hauptteil, Schluss ; Fragestellung.
- Connecteurs : im Gegensatz zu, während, ebenso, einerseits … andererseits, deshalb ; verbe en 2e position ou à la fin.`,
      cartes: [
        { q: "Combien de points vaut la synthèse ?", r: "16 points sur 20." },
        { q: "Combien de mots environ doit faire la synthèse ?", r: "Environ 500 mots, en allemand." },
        { q: "Que signifie « die Fragestellung » ?", r: "La problématique." },
        { q: "Comment s'appellent les trois parties de la synthèse en allemand ?", r: "Einleitung (introduction), Hauptteil (développement), Schluss (conclusion)." },
        { q: "Traduire en allemand : au contraire de", r: "Im Gegensatz zu (+ datif)." },
        { q: "Traduire en allemand : d'une part… d'autre part", r: "Einerseits … andererseits." },
        { q: "Traduire en allemand : de même", r: "Ebenso (ebenfalls)." },
        { q: "Que signifie « laut Dokument B » ?", r: "D'après le document B." },
        { q: "Que signifie « im Vordergrund » ?", r: "Au premier plan (im Hintergrund = à l'arrière-plan)." },
        { q: "Où se place le verbe conjugué dans une principale ?", r: "En deuxième position." },
        { q: "Où se place le verbe après « dass », « weil » ou « während » ?", r: "À la fin de la subordonnée." },
        { q: "Que signifie « Z. 12 » dans une synthèse ?", r: "Zeile 12 : la ligne 12 du document." },
        { q: "Que signifie « zusammenfassend lässt sich sagen » ?", r: "Pour résumer, on peut dire." },
        { q: "Quel est le grand défaut à éviter dans la synthèse ?", r: "Traiter les documents l'un après l'autre sans les croiser." },
      ],
      quiz: [
        { q: "Combien de mots environ demande la synthèse ?", choix: ["150 mots","250 mots","500 mots","300 mots"], bonne: 2, expl: "Environ 500 mots.", niv: 1 },
        { q: "Que signifie « die Einleitung » ?", choix: ["La conclusion","La consigne","Le résumé","L'introduction"], bonne: 3, expl: "Einleitung, Hauptteil, Schluss.", niv: 1 },
        { q: "Que signifie « im Hintergrund » ?", choix: ["À l'arrière-plan","Au premier plan","Au fond de la salle","En bas de la page"], bonne: 0, expl: "Im Vordergrund = au premier plan.", niv: 1 },
        { q: "Sur combien de points est notée la synthèse ?", choix: ["4 points","16 points","8 points","10 points"], bonne: 1, expl: "La traduction vaut 4 points.", niv: 1 },
        { q: "Quel connecteur sert à opposer ?", choix: ["Ebenso","Außerdem","Deshalb","Im Gegensatz zu"], bonne: 3, expl: "Au contraire de.", niv: 2 },
        { q: "Que signifie « die Fragestellung » ?", choix: ["La problématique","La liste des questions de cours","Le sujet de l'oral","La réponse de l'examinateur"], bonne: 0, expl: "On la pose dans l'Einleitung.", niv: 2 },
        { q: "Quelle phrase place bien le verbe ?", choix: ["Im Text der Autor zeigt die Armut.","Im Text der Autor die Armut zeigt.","Zeigt im Text der Autor die Armut.","Im Text zeigt der Autor die Armut."], bonne: 3, expl: "Verbe en 2e position.", niv: 2 },
        { q: "Quelle subordonnée est correcte ?", choix: ["…, dass kritisiert der Autor die Stadt.","…, dass der Autor die Stadt kritisiert.","…, dass der Autor kritisiert die Stadt.","…, kritisiert dass der Autor die Stadt."], bonne: 1, expl: "Verbe à la fin après dass.", niv: 2 },
        { q: "Que signifie « laut Dokument A » ?", choix: ["À voix haute, le document A","Le document A est bruyant","D'après le document A","Le document A est long"], bonne: 2, expl: "Laut + datif = selon.", niv: 2 },
        { q: "Quelle est la meilleure façon d'organiser la synthèse ?", choix: ["Un paragraphe par document, dans l'ordre","Un plan par idées qui croise les documents","Un résumé du document le plus long","Une liste de citations sans commentaire"], bonne: 1, expl: "On évite la juxtaposition.", niv: 3 },
        { q: "Pourquoi relever la nature et la date d'un document ?", choix: ["Elles permettent de recopier le document","Elles éclairent le point de vue et le contexte","Elles remplacent l'analyse du contenu","Elles servent à compter les mots"], bonne: 1, expl: "Un poème de 1844 et un article de 2020 ne parlent pas du même lieu.", niv: 3 },
        { q: "Pourquoi varier les verbes comme darstellen, betonen, kritisieren ?", choix: ["Pour atteindre plus vite les 500 mots","Pour éviter de citer les documents","Pour montrer au correcteur qu'on connaît bien le dictionnaire","Pour analyser précisément ce que fait chaque auteur"], bonne: 3, expl: "Chaque verbe dit une intention.", niv: 3 },
      ],
    },
    {
      chapitre: "llcer-all-12",
      fiche: `## Traduction et transposition

La deuxième partie de l'écrit vaut **4 points**. On traduit **en français** un court passage d'un des documents (souvent littéraire), ou on fait une **transposition** : réécrire un passage en changeant de point de vue, de forme ou de registre. On évalue la **fidélité** au texte et la **qualité du français**.

### La méthode
- Relire tout le document pour comprendre le contexte.
- Repérer les **verbes** et leur temps, les **subordonnées**, les **mots composés**, les mots inconnus (dictionnaire unilingue autorisé).
- Traduire phrase par phrase, puis **relire le français seul** : la phrase doit sonner naturelle.
- Ne rien oublier, ne rien ajouter.

### Les temps et les modes
- **Präteritum** (er ging, sie sagte) : dans un récit, **passé simple** ou **imparfait** selon le sens (action ponctuelle ou description).
- **Perfekt** (er ist gegangen) : **passé composé** ; **Plusquamperfekt** : plus-que-parfait.
- **Konjunktiv I** (er sei, sie habe) : discours rapporté ; on le rend par « **il dit que…** », « **selon lui** » ou l'indicatif.
- **Konjunktiv II** (wäre, hätte, würde) : **conditionnel** (« wenn ich Zeit hätte » = si j'avais le temps).
- **man** : **on** ; le passif **wurde gebaut** : « a été construit » ou « on a construit ».

### Les structures à savoir rendre
- Les **mots composés** se lisent de droite à gauche : **die Kinderarbeit** = le travail des enfants ; **der Bahnhofsvorsteher** = le chef de gare.
- L'**attribut étendu** (**erweitertes Attribut**) : « **die 1961 gebaute Mauer** » = le mur construit en 1961 ; souvent une relative en français.
- Les **particules modales** (**doch**, **ja**, **mal**, **eben**) : elles nuancent ; on les rend par le ton (« donc », « bien », « tout de même ») ou on les omet.
- Les **verbes à particule** : **aufbrechen** (partir), **ankommen** (arriver), **zurückkehren** (revenir) : la particule est souvent en fin de phrase (« Er **brach** früh **auf** »).
- Les **diminutifs** en **-chen** et **-lein** : « das Häuschen » = la petite maison.

### Les faux amis fréquents
- **bekommen** = recevoir (pas « devenir », qui se dit **werden**) ; **also** = donc ; **das Gymnasium** = le lycée.
- **die Rente** = la retraite ; **das Gift** = le poison ; **der Rat** = le conseil ; **die Note** = la note scolaire ou la note de musique ; **eventuell** = peut-être.
- **sensibel** = sensible ; **die Kritik** = la critique ; **das Lokal** = le restaurant, le bistrot ; **der Chef** = le patron.

### La transposition
- Exemples de consignes : raconter la scène du point de vue d'un autre personnage, écrire la lettre ou le journal intime d'un personnage, passer du récit au dialogue.
- Garder le contenu et changer ce que la consigne demande (pronoms, temps, registre).

### À retenir pour le bac
- 4 points, fidélité et bon français.
- Präteritum → passé simple ou imparfait ; Konjunktiv II → conditionnel ; man → on.
- Mots composés de droite à gauche, attribut étendu → relative ; faux amis : bekommen, also, Gymnasium, Rente, Gift.`,
      cartes: [
        { q: "Sur combien de points est notée la traduction ?", r: "4 points sur 20." },
        { q: "Comment traduire le Präteritum dans un récit ?", r: "Par le passé simple (action) ou l'imparfait (description, habitude)." },
        { q: "Comment traduire le Konjunktiv II ?", r: "Par le conditionnel (wenn ich Zeit hätte = si j'avais le temps)." },
        { q: "À quoi sert le Konjunktiv I ?", r: "Au discours rapporté (er sagte, er sei krank = il dit qu'il était malade)." },
        { q: "Comment traduire « man » ?", r: "Par « on »." },
        { q: "Dans quel sens lit-on un mot composé ?", r: "De droite à gauche : die Kinderarbeit = le travail des enfants." },
        { q: "Comment traduire « die 1961 gebaute Mauer » ?", r: "Le mur construit en 1961 (attribut étendu → participe ou relative)." },
        { q: "Que signifie « bekommen » ?", r: "Recevoir (faux ami : devenir se dit werden)." },
        { q: "Que signifie « also » en allemand ?", r: "Donc." },
        { q: "Que signifie « das Gymnasium » ?", r: "Le lycée (général)." },
        { q: "Que signifie « die Rente » ?", r: "La retraite." },
        { q: "Que signifie « das Gift » ?", r: "Le poison." },
        { q: "Que faire des particules modales (doch, ja, mal) ?", r: "Les rendre par le ton de la phrase ou un petit mot, ou les omettre si le français est plus naturel." },
        { q: "Qu'est-ce qu'une transposition ?", r: "Réécrire un passage en changeant le point de vue, la forme ou le registre selon la consigne." },
      ],
      quiz: [
        { q: "Que signifie « bekommen » ?", choix: ["Recevoir","Devenir","Commencer","Comprendre"], bonne: 0, expl: "Devenir = werden.", niv: 1 },
        { q: "Que signifie « also » ?", choix: ["Donc","Aussi","Alors que","Encore"], bonne: 0, expl: "Aussi = auch.", niv: 1 },
        { q: "Que signifie « das Gift » ?", choix: ["Le cadeau","La grâce","Le poison","La gifle"], bonne: 2, expl: "Le cadeau = das Geschenk.", niv: 1 },
        { q: "Combien de points vaut la traduction ?", choix: ["8 points","10 points","16 points","4 points"], bonne: 3, expl: "Elle complète la synthèse.", niv: 1 },
        { q: "Comment traduire « Wenn ich Zeit hätte, würde ich reisen » ?", choix: ["Si j'avais le temps, je voyagerais","Quand j'ai le temps, je voyage","Si j'ai eu le temps, j'ai voyagé","Quand j'aurai le temps, je voyagerai"], bonne: 0, expl: "Konjunktiv II → conditionnel.", niv: 2 },
        { q: "Comment traduire « die Kinderarbeit » ?", choix: ["Les enfants au travail de nuit","La chambre des enfants","Le travail des enfants","Le jeu des enfants"], bonne: 2, expl: "Lecture de droite à gauche.", niv: 2 },
        { q: "Comment rendre « Man sagt, dass… » ?", choix: ["Un homme dit que…","On dit que…","Mon mari dit que…","Ils diront que…"], bonne: 1, expl: "Man = on.", niv: 2 },
        { q: "Comment traduire « die Rente » ?", choix: ["Le loyer","La rente de la noblesse","La rentrée scolaire","La retraite"], bonne: 3, expl: "Faux ami fréquent.", niv: 2 },
        { q: "Comment traduire « die 1989 gefallene Mauer » ?", choix: ["Le mur tombé en 1989","Le mur qui tombera en 1989","La chute du mur de 1989 à 1990","Le mur de 1989 qui est beau"], bonne: 0, expl: "Attribut étendu.", niv: 2 },
        { q: "Comment traduire « Er sagte, er sei müde » ?", choix: ["Il disait qu'il serait fatigué demain","Il a dit : sois fatigué","Il dit qu'il était fatigué","Il dira qu'il est fatigué"], bonne: 2, expl: "Konjunktiv I = discours rapporté.", niv: 3 },
        { q: "Une consigne demande de raconter la scène du point de vue d'un autre personnage. Que changer ?", choix: ["Les faits racontés, pour les inventer","La langue, en écrivant en allemand","La longueur, en résumant en une phrase","Les pronoms et le regard porté sur les faits"], bonne: 3, expl: "On garde l'histoire, on change le narrateur.", niv: 3 },
        { q: "Pourquoi relire sa traduction sans regarder l'allemand ?", choix: ["Pour ajouter ses propres idées","Pour raccourcir le passage de moitié","Pour remplacer les noms propres par des noms français","Pour vérifier qu'elle sonne comme du vrai français"], bonne: 3, expl: "On repère les calques.", niv: 3 },
      ],
    },
  ],
  methode: [
    {
      "id": "llcer-all-m1",
      "mat": "llcer-all",
      "titre": "La synthèse de documents",
      "formules": [
        "Analysieren Sie anhand der drei Dokumente, wie…",
        "Zeigen Sie, inwiefern die Dokumente…",
        "Schreiben Sie eine Synthese von etwa 500 Wörtern."
      ],
      "vu": [
        "Format de l'écrit de LLCER depuis la session 2021 (synthèse sur 16 points, traduction ou transposition sur 4 points)"
      ],
      "pts": "16 points sur 20",
      "attendu": "Une synthèse en allemand d'environ 500 mots qui croise les documents autour d'une problématique. Le correcteur attend une Einleitung qui présente les documents et pose la Fragestellung, deux ou trois parties organisées par idées, des références précises (lignes, détails de l'image), l'analyse des procédés et du point de vue, un Schluss qui répond à la question, et un allemand correct (place du verbe, cas).",
      "etapes": [
        "Souligner les mots-clés de la consigne.",
        "Lire chaque document et noter nature, auteur, date, point de vue, procédés, citations.",
        "Remplir un tableau : idées en lignes, documents en colonnes.",
        "Choisir deux ou trois idées qui croisent les documents.",
        "Rédiger Einleitung, Hauptteil et Schluss.",
        "Relire la place du verbe, les terminaisons et compter environ 500 mots."
      ],
      "mots": [
        "beide Dokumente",
        "im Gegensatz zu",
        "während",
        "ebenso",
        "einerseits … andererseits",
        "laut Dokument A",
        "der Autor betont, dass",
        "zusammenfassend"
      ],
      "pieges": [
        "Traiter les documents l'un après l'autre.",
        "Oublier l'image ou la décrire sans l'interpréter.",
        "Recopier de longs passages.",
        "Mettre le verbe en mauvaise place après dass, weil ou während."
      ],
      "cas": "Dossier sur l'axe « Exil et migrations » : un extrait d'un récit d'un enfant arrivé de Bosnie en Allemagne dans les années 1990, le poème « Nachtgedanken » de Heine (1844), une photo de réfugiés accueillis à la gare de Munich en 2015.",
      "question": "Analysieren Sie anhand der drei Dokumente, wie das Exil erlebt wird. Rédige l'Einleitung.",
      "modele": "Seit Jahrhunderten müssen Menschen ihre Heimat verlassen. Das Dossier besteht aus drei Dokumenten: Dokument A ist ein Auszug aus einem autobiografischen Text über ein Kind, das in den neunziger Jahren aus Bosnien nach Deutschland flieht. Dokument B ist das Gedicht „Nachtgedanken“, das Heinrich Heine 1844 im Pariser Exil schrieb. Dokument C ist ein Foto, das die Ankunft von Flüchtlingen am Münchner Hauptbahnhof im Jahr 2015 zeigt. Es stellt sich also die Frage, inwiefern das Exil sowohl ein Verlust als auch ein Neuanfang ist. Zuerst werden wir den Schmerz der Trennung untersuchen, dann die Hoffnung auf ein neues Leben analysieren.",
      "grille": [
        "Accroche",
        "Les trois documents présentés (nature, auteur, date)",
        "Fragestellung qui reprend la consigne",
        "Annonce d'un plan par idées",
        "Allemand correct (verbe, cas)"
      ]
    },
    {
      "id": "llcer-all-m2",
      "mat": "llcer-all",
      "titre": "La traduction vers le français",
      "formules": [
        "Übersetzen Sie die Zeilen 10 bis 16 ins Französische.",
        "Traduisez en français le passage suivant du document A."
      ],
      "vu": [
        "Format de l'écrit de LLCER depuis la session 2021 (synthèse sur 16 points, traduction ou transposition sur 4 points)"
      ],
      "pts": "4 points sur 20",
      "attendu": "Une traduction fidèle (rien d'oublié, rien d'ajouté) dans un français correct et naturel. Le correcteur regarde les temps (Präteritum en passé simple ou imparfait), le Konjunktiv, les mots composés, les attributs étendus, les particules modales et les faux amis.",
      "etapes": [
        "Relire le document entier pour le contexte.",
        "Repérer chaque verbe conjugué (souvent en 2e position ou à la fin) et son temps.",
        "Découper les mots composés et les attributs étendus.",
        "Traduire au brouillon phrase par phrase.",
        "Relire le français seul et corriger les calques.",
        "Vérifier les oublis, les noms propres et la ponctuation."
      ],
      "mots": [
        "passé simple ou imparfait (Präteritum)",
        "conditionnel (Konjunktiv II)",
        "on (man)",
        "relative pour l'attribut étendu",
        "recevoir (bekommen)"
      ],
      "pieges": [
        "Garder l'ordre des mots allemand.",
        "Oublier la particule séparée en fin de phrase.",
        "Traduire bekommen par devenir.",
        "Mélanger passé simple et passé composé sans raison."
      ],
      "cas": "Passage inventé : « Als der Zug in Hamburg ankam, regnete es. Die Mutter nahm den kleinen Koffer, den sie seit Tagen nicht losgelassen hatte, und sagte nur: „Jetzt sind wir doch angekommen.“ Niemand wartete auf sie. »",
      "question": "Traduis le passage en français.",
      "modele": "Quand le train arriva à Hambourg, il pleuvait. La mère prit la petite valise qu'elle n'avait pas lâchée depuis des jours et dit seulement : « Nous voilà tout de même arrivés. » Personne ne les attendait.",
      "grille": [
        "Präteritum rendu par passé simple et imparfait",
        "Plus-que-parfait pour « nicht losgelassen hatte »",
        "Particule « doch » rendue (tout de même)",
        "« auf sie » bien compris (les attendait)",
        "Français naturel, sans oubli"
      ]
    },
    {
      "id": "llcer-all-m3",
      "mat": "llcer-all",
      "titre": "Analyser une image ou une caricature",
      "formules": [
        "Dokument C ist ein Foto / eine Karikatur / ein Gemälde…",
        "Analysieren Sie anhand der drei Dokumente…"
      ],
      "vu": [
        "Format de l'écrit de LLCER depuis la session 2021 (synthèse sur 16 points, traduction ou transposition sur 4 points)"
      ],
      "pts": "une partie de la synthèse",
      "attendu": "Le document visuel doit être présenté (nature, auteur, date), décrit avec précision (premier plan, arrière-plan, couleurs, texte) puis interprété : quel message, quel point de vue, quel lien avec les textes ?",
      "etapes": [
        "Identifier la nature, l'auteur et la date.",
        "Décrire : im Vordergrund, im Hintergrund, in der Mitte, links, rechts.",
        "Repérer le symbole ou le détail le plus frappant.",
        "Interpréter le message ou l'ironie.",
        "Relier à une idée d'un autre document."
      ],
      "mots": [
        "im Vordergrund",
        "im Hintergrund",
        "die Karikatur stellt … dar",
        "symbolisiert",
        "ironisch",
        "der Zeichner kritisiert"
      ],
      "pieges": [
        "Décrire sans interpréter.",
        "Oublier l'auteur ou la date.",
        "Parler de l'image dans un paragraphe à part, sans lien avec les textes."
      ],
      "cas": "Le tableau Der Wanderer über dem Nebelmeer de Caspar David Friedrich (vers 1818) : un homme vu de dos, debout sur un rocher, contemple une mer de brouillard.",
      "question": "Rédige le paragraphe d'analyse de ce tableau pour une synthèse sur le voyage.",
      "modele": "Dokument C, das Gemälde „Der Wanderer über dem Nebelmeer“ von Caspar David Friedrich, entstand um 1818. Im Vordergrund steht ein Mann, den man nur von hinten sieht, auf einem Felsen. Im Hintergrund erstreckt sich ein Meer aus Nebel bis zu fernen Bergen. Da der Betrachter den Blick des Wanderers teilt, wird die Reise hier zu einer inneren Erfahrung: Die Natur erscheint als unendlich, und der Mensch sucht in ihr seinen Platz. Ebenso wie der Taugenichts in Dokument A ist der Wanderer von der Sehnsucht nach der Ferne getrieben.",
      "grille": [
        "Nature, auteur, date",
        "Description avec im Vordergrund et im Hintergrund",
        "Interprétation du message",
        "Lien avec un autre document",
        "Allemand correct"
      ]
    },
    {
      "id": "llcer-all-m4",
      "mat": "llcer-all",
      "titre": "L'oral : présenter son dossier",
      "formules": [
        "Présentez votre dossier et justifiez vos choix.",
        "Stellen Sie Ihr Dossier vor."
      ],
      "vu": [
        "Format de l'oral de LLCER : 20 minutes, sans préparation, sur un dossier personnel lié aux œuvres et thématiques étudiées"
      ],
      "pts": "la moitié de la note de la spécialité (avec l'écrit)",
      "attendu": "Une présentation en allemand d'environ 10 minutes du dossier (documents choisis, dont un extrait d'œuvre étudiée), de sa problématique et des liens entre les documents, puis un entretien d'environ 10 minutes où l'on répond aux questions avec des exemples précis.",
      "etapes": [
        "Annoncer le titre du dossier, l'axe et la problématique.",
        "Présenter chaque document en une ou deux phrases (nature, auteur, date).",
        "Montrer les liens entre les documents et l'œuvre étudiée.",
        "Expliquer pourquoi ces documents ont été choisis.",
        "Conclure et ouvrir."
      ],
      "mots": [
        "Mein Dossier trägt den Titel…",
        "Ich habe dieses Dokument gewählt, weil…",
        "Dieses Dokument zeigt…",
        "Im Vergleich dazu…",
        "Zum Schluss möchte ich…"
      ],
      "pieges": [
        "Réciter un texte appris par cœur.",
        "Raconter l'œuvre sans l'analyser.",
        "Répondre en un mot pendant l'entretien."
      ],
      "cas": "Dossier sur l'axe « Liens sociaux entre fragilisation et mutation » avec un extrait de Meine freie deutsche Jugend (Claudia Rusch), une photo du mur de Berlin et un article sur l'Ostalgie.",
      "question": "Rédige ta présentation d'ouverture (titre, axe, problématique, documents).",
      "modele": "Mein Dossier trägt den Titel „Leben hinter der Mauer“ und gehört zur Achse „Soziale Bindungen zwischen Bedrohung und Wandel“. Meine Fragestellung lautet: Wie hat die Teilung Deutschlands das Zusammenleben geprägt? Das erste Dokument ist ein Auszug aus „Meine freie deutsche Jugend“ von Claudia Rusch, die ihre Kindheit in einer überwachten Familie in der DDR erzählt. Das zweite ist ein Foto der Berliner Mauer aus dem Jahr 1961. Das dritte ist ein Zeitungsartikel über die Ostalgie. Ich habe diese Dokumente gewählt, weil sie die Angst, aber auch die Erinnerung an die DDR zeigen.",
      "grille": [
        "Titre et axe annoncés",
        "Problématique claire",
        "Documents présentés",
        "Choix justifiés",
        "Allemand fluide et correct"
      ]
    }
  ],
  sujets: [
    {
      id: "llcer-all-s1", matiere: 'llcer-all', titre: "Sujet d'entraînement 1 : Voyages, exil et migrations", duree: 210,
      enonce: `## Sujet d'entraînement 1 (inventé, au format de l'écrit)

Ce sujet est inventé pour s'entraîner : les documents A et B ont été écrits pour cet exercice, le document C est décrit. Durée : 3 h 30. Dictionnaire allemand unilingue autorisé. Synthèse : 16 points ; traduction : 4 points.

Thématique : **Voyages : circulation des hommes et des idées**. Axe : **Exil et migrations**.

### Dokument A : Romanauszug (inventé), « Der Koffer », 2018

Als wir in Stuttgart ankamen, war ich neun Jahre alt und konnte drei deutsche Wörter: Danke, Bitte und Entschuldigung. Meine Mutter trug den braunen Koffer, in dem unser ganzes Leben Platz hatte. Mein Vater war schon seit einem Jahr hier und arbeitete auf einer Baustelle.

In der Schule saß ich in der letzten Reihe. Die Lehrerin sprach langsam mit mir, als wäre ich krank. Die anderen Kinder lachten, wenn ich „die Tisch“ oder „das Tisch“ sagte. Ich wusste nie, welcher Artikel richtig war.

Abends erzählte mir meine Mutter von unserem Dorf, von dem Fluss und von dem Feigenbaum hinter dem Haus. „Irgendwann fahren wir zurück“, sagte sie. Wir sind nie zurückgefahren. Heute, dreißig Jahre später, träume ich manchmal auf Deutsch von dem Feigenbaum.

### Dokument B : Gedicht (inventé), « Zwei Sprachen », 2010

Ich habe zwei Sprachen
wie zwei Schuhe,
die nicht zusammenpassen.
In der einen weine ich,
in der anderen
zahle ich die Miete.
Manchmal, nachts,
sprechen sie miteinander
und ich verstehe beide nicht.

### Dokument C : Foto (décrit)

Une photographie de septembre 2015, prise à la gare centrale de Munich. Au premier plan, un homme jeune porte un enfant endormi sur ses épaules ; il tient un sac en plastique. À côté de lui, une femme bénévole avec un gilet jaune lui tend une bouteille d'eau en souriant. À l'arrière-plan, une foule de voyageurs et de bénévoles ; sur une grande pancarte en carton on lit : « Refugees welcome – Willkommen in München ».

### Partie 1 (16 points) : synthèse en allemand, environ 500 mots

Analysieren Sie anhand der drei Dokumente, wie Migration zwischen Verlust und Neuanfang erlebt wird.

### Partie 2 (4 points) : traduction

Traduisez en français le premier paragraphe du document A, de « Als wir in Stuttgart ankamen » à « auf einer Baustelle ».`,
      corrige: `## Corrigé du sujet d'entraînement 1

### Partie 1 : pistes de synthèse

Einleitung. Deutschland ist seit den Gastarbeitern der sechziger Jahre ein Einwanderungsland. Das Dossier besteht aus drei Dokumenten: einem Romanauszug von 2018, in dem ein Erwachsener sich an seine Ankunft als Kind in Stuttgart erinnert, einem Gedicht von 2010 über das Leben mit zwei Sprachen und einem Foto, das die Ankunft von Flüchtlingen in München im September 2015 zeigt. Es stellt sich die Frage, inwiefern Migration sowohl als Verlust als auch als Neuanfang erlebt wird. Zuerst untersuchen wir die Schwierigkeiten der Ankunft, dann die Spannung zwischen zwei Welten und schließlich die Hoffnung auf ein neues Leben.

I. Die Ankunft: Fremdheit und Verlust. Der Erzähler in Dokument A kommt mit nur drei Wörtern an; die Sprache wird zur ersten Grenze (die Artikel, das Lachen der Kinder, die letzte Reihe). Der Koffer, „in dem unser ganzes Leben Platz hatte“, symbolisiert den Verlust der Heimat. Auch der junge Mann auf dem Foto trägt nur einen Plastiksack: Er hat fast alles zurückgelassen.

II. Zwischen zwei Sprachen und zwei Welten. Im Gegensatz zum Roman, der chronologisch erzählt, zeigt das Gedicht mit einem einfachen Vergleich („wie zwei Schuhe, die nicht zusammenpassen“), dass die Zerrissenheit bleibt: Die Muttersprache ist die Sprache der Gefühle, das Deutsche die Sprache des Alltags. Ebenso träumt der Erzähler von Dokument A „auf Deutsch“ von seinem Dorf: Die alte Heimat lebt in der neuen Sprache weiter. Die Rückkehr („Irgendwann fahren wir zurück“) bleibt ein Traum.

III. Ein möglicher Neuanfang. Das Foto betont dagegen die Willkommenskultur: Das Lächeln der Helferin, die Wasserflasche und das Schild „Willkommen in München“ stehen für Solidarität. Der Erzähler von Dokument A ist dreißig Jahre später in Deutschland zu Hause, und das Gedicht zeigt, dass zwei Sprachen auch ein Reichtum sein können.

Schluss. Zusammenfassend lässt sich sagen, dass Migration in den drei Dokumenten zugleich ein Verlust und ein Neuanfang ist. Die Heimat verschwindet nicht, sie verwandelt sich. Wie Saša Stanišić in „Herkunft“ zeigt, wird die Frage nach der Herkunft zu einer Frage nach der eigenen Geschichte.

### Partie 2 : proposition de traduction

« Quand nous arrivâmes à Stuttgart, j'avais neuf ans et je connaissais trois mots d'allemand : merci, s'il vous plaît et pardon. Ma mère portait la valise marron dans laquelle tenait toute notre vie. Mon père était ici depuis un an déjà et travaillait sur un chantier. »

Les points à réussir : « Als wir … ankamen » (verbe à particule, passé simple ou passé composé : « quand nous sommes arrivés » est accepté s'il est cohérent avec la suite) ; « konnte drei deutsche Wörter » (können = savoir, connaître une langue) ; « in dem unser ganzes Leben Platz hatte » (Platz haben = tenir dans) ; « war schon seit einem Jahr hier » (seit + plus-que-parfait allemand rendu par « était ici depuis un an ») ; « die Baustelle » (le chantier).`,
      grille: [{"c":"Synthèse : introduction (documents présentés, problématique, plan)","pts":3},{"c":"Synthèse : plan par idées, documents croisés","pts":4},{"c":"Synthèse : références précises, analyse des procédés (image, poème, récit)","pts":3},{"c":"Synthèse : qualité de l'allemand (verbe, cas, richesse, connecteurs)","pts":6},{"c":"Traduction : sens exact, temps cohérents, « Platz hatte » et « seit einem Jahr » bien rendus","pts":4}],
    },
  ],
};
