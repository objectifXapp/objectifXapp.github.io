// 2I2D, enseignement spécifique « énergies et environnement » (EE) — terminale STI2D. Sources : voir matiere.sources.
// Programme : annexe IT, I2D et 2I2D du cycle terminal STI2D ; on ne garde ici que ce qui est propre à EE ou approfondi
// en EE (niveau 3 dans la colonne EE) : performance énergétique, transferts thermiques, fluides, production
// d'énergie, convertisseurs et modulateurs, machines électriques, stockeurs, réseaux et gestion de l'énergie.
// Le tronc commun (développement durable, chaînes, statique, codage, réseaux informatiques…) est dans sti2d-2i2d.js.
// Épreuve à partir de la session 2027 (note de service du 11 septembre 2026, BO spécial n° 4 du 17 septembre 2026) :
// la deuxième partie de l'écrit de 2I2D (3 h 30, coefficient 9) est un exercice propre à l'enseignement spécifique
// choisi ; dans les sujets 2024 et 2025, cette partie valait 8 points sur 20. La partie pratique de 2 h
// (coefficient 7) porte entièrement sur l'enseignement spécifique.

export default {
  matiere: {
    id: 'sti2d-ee',
    nom: '2I2D : énergies et environnement',
    voie: 'sti2d',
    epreuve: { type: 'ecrit', duree: 210, coef: 16, quand: 'juin', note: 'Partie spécifique EE de l\'écrit de 2I2D (3 h 30 au total, coefficient 9) : un exercice de résolution d\'une problématique d\'énergie, environ 8 points sur 20 dans les sujets récents. La partie pratique de 2 h en laboratoire (coefficient 7) porte aussi sur EE.' },
    sources: [
      'https://www.education.gouv.fr/sites/default/files/document/bulletin-officiel-special-ndeg-4-du-17-septembre-2026-521113.pdf',
      'https://www.snes.edu/wp-content/uploads/sti2d_annexe-1_it_i2d_2i2d_bo.pdf',
      'https://sti.eduscol.education.fr/sites/eduscol.education.fr.sti/files/concours-examens/18389/18389-btn-sujet-2i2d-ee-me3-v1-0.pdf',
      'https://www.freemaths.fr/sujets-du-bac/baccalaureat-technologique/sti2d/2i2d-energies-environnement/annees/annee-2025/antilles-guyane/sujet-1-et-correction/bac-2i2d-energies-environnement-antilles-guyane-2025-voie-technologique-sti2d-sujet-1.pdf',
      'https://www.freemaths.fr/sujets-du-bac/baccalaureat-technologique/sti2d/2i2d-energies-environnement/annees/annee-2024/polynesie/sujet-1-et-correction/bac-2i2d-energies-environnement-polynesie-2024-voie-technologique-sti2d-sujet-1.pdf',
    ],
    chapitres: [
      { id: 'sti2d-ee-1', t: 'Performance énergétique : bilans, Sankey et bâtiment', theme: 'Efficacité énergétique' },
      { id: 'sti2d-ee-2', t: 'Transferts thermiques et enveloppe', theme: 'Efficacité énergétique' },
      { id: 'sti2d-ee-3', t: 'Chauffage, pompe à chaleur et ventilation', theme: 'Efficacité énergétique' },
      { id: 'sti2d-ee-4', t: 'Fluides : pompes, ventilateurs et réseaux', theme: 'Constituants de puissance' },
      { id: 'sti2d-ee-5', t: 'Production d\'énergie renouvelable', theme: 'Production et réseaux' },
      { id: 'sti2d-ee-6', t: 'Convertisseurs et modulateurs de puissance', theme: 'Constituants de puissance' },
      { id: 'sti2d-ee-7', t: 'Moteurs électriques et variation de vitesse', theme: 'Constituants de puissance' },
      { id: 'sti2d-ee-8', t: 'Stockage de l\'énergie', theme: 'Constituants de puissance' },
      { id: 'sti2d-ee-9', t: 'Réseaux d\'énergie et autoconsommation', theme: 'Production et réseaux' },
      { id: 'sti2d-ee-10', t: 'Gestion et pilotage de l\'énergie', theme: 'Gestion de l\'énergie' },
    ],
  },
  paquets: [
    { chapitre: 'sti2d-ee-1',
      fiche: `## Performance énergétique : bilans, Sankey et bâtiment

En EE, presque chaque sujet demande d'abord : où part l'énergie, et comment en consommer moins ?

### Le bilan énergétique
- On suit l'énergie de la source jusqu'à l'usage : **énergie absorbée = énergie utile + pertes**.
- On fait le bilan sur une **période** (un jour, un an, un cycle de fonctionnement), pas seulement à un instant.
- **Rendement sur cycle** = énergie utile sur le cycle / énergie absorbée sur le cycle. Il est souvent plus faible que le rendement nominal, car les machines travaillent parfois loin de leur point de meilleur rendement (démarrages, veille, charge partielle).

### Le diagramme de Sankey
- Il représente les flux d'énergie par des **flèches dont la largeur est proportionnelle à la quantité**.
- La flèche d'entrée se divise en flux **utiles** et en flux de **pertes** (souvent dessinées vers le bas).
- Exemple : une chaudière reçoit 100 kWh de gaz, envoie 88 kWh dans l'eau de chauffage, perd 10 kWh par les fumées et 2 kWh par l'enveloppe : rendement 88 %.
- Le Sankey montre d'un coup d'œil le **poste de pertes le plus important** : c'est là qu'il faut agir.

### Énergie finale et énergie primaire
- L'**énergie finale** est celle que l'on paie et qui arrive au compteur (kWh d'électricité, de gaz).
- L'**énergie primaire** est celle prélevée dans la nature pour la produire. Pour l'électricité en France, on compte **2,3 kWh d'énergie primaire pour 1 kWh final** ; pour le gaz et le bois, 1.
- Exemple : 5 000 kWh d'électricité consommés valent 11 500 kWh d'énergie primaire.

### La performance d'un bâtiment
- On ramène la consommation à la surface : **kWh par m² et par an**. 12 000 kWh pour 100 m² : 120 kWh/(m²·an).
- Le **diagnostic de performance énergétique** (DPE) classe les logements de A (le plus sobre) à G, d'après leur consommation et leurs émissions de gaz à effet de serre.
- La **réglementation environnementale RE2020** s'applique aux constructions neuves : besoins faibles (bonne enveloppe), consommation faible, et **impact carbone** limité sur tout le cycle de vie (matériaux et énergie).
- Les postes : chauffage, eau chaude sanitaire, refroidissement, éclairage, ventilation, auxiliaires (pompes, ventilateurs).

### Les trois leviers
- **Sobriété** : réduire le besoin (baisser la consigne de chauffage de 1 °C fait gagner environ 7 % d'énergie).
- **Efficacité** : faire le même service avec moins d'énergie (isolation, pompe à chaleur, LED, variateur).
- **Énergies renouvelables** : couvrir le besoin restant avec une production locale.

### À retenir pour le bac
- Énergie absorbée = énergie utile + pertes ; rendement sur cycle avec des énergies.
- Sankey : largeur proportionnelle à l'énergie ; agir sur la plus grosse perte.
- Électricité : 1 kWh final = 2,3 kWh d'énergie primaire.
- Performance d'un bâtiment en kWh/(m²·an) ; DPE de A à G ; RE2020 pour le neuf.
- Piège : ne pas confondre puissance (kW) et énergie (kWh).`,
      cartes: [
        { q: "Bilan énergétique ?", r: "Énergie absorbée = énergie utile + pertes." },
        { q: "Rendement sur cycle ?", r: "Énergie utile sur le cycle / énergie absorbée sur le cycle." },
        { q: "Pourquoi le rendement sur cycle est-il plus faible que le nominal ?", r: "Démarrages, veille et charge partielle éloignent la machine de son meilleur rendement." },
        { q: "Diagramme de Sankey ?", r: "Des flèches de largeur proportionnelle aux flux d'énergie, utiles et pertes." },
        { q: "À quoi sert un Sankey ?", r: "Repérer d'un coup d'œil le poste de pertes le plus important." },
        { q: "Énergie finale ?", r: "L'énergie payée, mesurée au compteur." },
        { q: "Énergie primaire ?", r: "L'énergie prélevée dans la nature pour produire l'énergie finale." },
        { q: "Coefficient d'énergie primaire de l'électricité ?", r: "2,3 : 1 kWh final compte pour 2,3 kWh primaires." },
        { q: "Unité de performance d'un bâtiment ?", r: "kWh par m² et par an." },
        { q: "Qu'est-ce que le DPE ?", r: "Le classement d'un logement de A à G selon sa consommation et ses émissions de gaz à effet de serre." },
        { q: "Que vise la RE2020 ?", r: "Des bâtiments neufs sobres, peu consommateurs et à faible impact carbone sur leur cycle de vie." },
        { q: "Les trois leviers de la transition énergétique ?", r: "Sobriété, efficacité, énergies renouvelables." },
        { q: "Effet d'une baisse de 1 °C de la consigne de chauffage ?", r: "Environ 7 % d'énergie de chauffage économisée." },
      ],
      quiz: [
        { q: "Dans un diagramme de Sankey, la largeur d'une flèche est proportionnelle :", choix: ["à la durée du flux", "à la quantité d'énergie", "au prix de l'énergie", "à la température"], bonne: 1, expl: "On voit d'un coup d'œil où part l'énergie.", niv: 1 },
        { q: "Chaudière : 100 kWh de gaz, 88 kWh dans l'eau de chauffage. Rendement ?", choix: ["114 %", "92 %", "88 %", "100 %"], bonne: 2, expl: "η = 88 / 100.", niv: 2 },
        { q: "Un logement consomme 5 000 kWh d'électricité. Énergie primaire correspondante ?", choix: ["7 300 kWh", "5 000 kWh", "2 174 kWh", "11 500 kWh"], bonne: 3, expl: "5 000 × 2,3 = 11 500 kWh.", niv: 2 },
        { q: "L'énergie finale est :", choix: ["celle mesurée au compteur", "celle prélevée dans la nature", "celle perdue en chaleur", "celle stockée dans le réseau"], bonne: 0, expl: "L'énergie prélevée dans la nature est l'énergie primaire.", niv: 1 },
        { q: "Une maison de 100 m² consomme 12 000 kWh par an. Sa consommation rapportée à la surface ?", choix: ["12 kWh/(m²·an)", "1,2 kWh/(m²·an)", "120 kWh/(m²·an)", "100 kWh/(m²·an)"], bonne: 2, expl: "12 000 / 100 = 120.", niv: 2 },
        { q: "Sankey d'un moteur : 1 000 kWh absorbés, 80 de pertes Joule, 40 mécaniques, 30 fer. Énergie utile ?", choix: ["850 kWh", "1 150 kWh", "920 kWh", "150 kWh"], bonne: 0, expl: "1 000 - (80 + 40 + 30) = 850 kWh.", niv: 3 },
        { q: "Isoler les combles d'une maison relève du levier :", choix: ["sobriété", "efficacité", "énergies renouvelables", "autoconsommation"], bonne: 1, expl: "Le même confort est obtenu avec moins d'énergie.", niv: 1 },
        { q: "Baisser la consigne de chauffage de 20 °C à 19 °C relève du levier :", choix: ["stockage", "efficacité", "énergies renouvelables", "sobriété"], bonne: 3, expl: "On réduit le besoin lui-même.", niv: 2 },
        { q: "Une pompe a un rendement nominal de 0,7, mais 0,5 sur une journée. Explication la plus probable ?", choix: ["Le rendement sur cycle est égal au nominal", "Son moteur est plus puissant à charge partielle", "L'énergie utile est mesurée deux fois", "Elle fonctionne souvent loin de son point nominal"], bonne: 3, expl: "Démarrages fréquents et charge partielle font baisser le rendement moyen.", niv: 3 },
        { q: "La RE2020 ajoute aux exigences d'énergie une limite sur :", choix: ["le prix de vente du logement", "l'impact carbone du bâtiment", "le nombre de pièces", "la couleur des façades"], bonne: 1, expl: "Elle compte les émissions des matériaux et de l'énergie sur tout le cycle de vie.", niv: 2 },
        { q: "Dans un DPE, le logement le plus sobre est classé :", choix: ["A", "G", "D", "Z"], bonne: 0, expl: "L'échelle va de A (sobre) à G (très consommateur).", niv: 1 },
        { q: "Sankey d'un bâtiment : pertes par les murs 30 %, toit 25 %, ventilation 20 %, fenêtres 15 %. Priorité ?", choix: ["Couper la ventilation", "Changer les fenêtres", "Isoler les murs", "Isoler d'abord le sol"], bonne: 2, expl: "On agit d'abord sur le poste le plus important ; couper la ventilation dégraderait la qualité de l'air.", niv: 3 },
      ] },
    { chapitre: 'sti2d-ee-2',
      fiche: `## Transferts thermiques et enveloppe

### Les trois modes de transfert
- **Conduction** : la chaleur traverse un solide de proche en proche (un mur, une vitre).
- **Convection** : un fluide en mouvement emporte la chaleur (air qui circule le long d'un radiateur, fuites d'air).
- **Rayonnement** : la chaleur voyage par ondes électromagnétiques (soleil à travers une vitre, chaleur d'un poêle).
- La chaleur va toujours spontanément du **chaud vers le froid**.

### Résistance thermique d'une paroi
- **Conductivité thermique** λ en W/(m·K) : plus elle est petite, plus le matériau est **isolant**. Laine de verre environ 0,04 ; bois 0,15 ; béton 1,75 ; acier 50.
- **Résistance thermique** d'une couche : **R = e / λ**, en m²·K/W, avec e l'épaisseur en mètres. 20 cm de laine de verre : R = 0,20 / 0,04 = 5 m²·K/W.
- Les résistances des couches successives **s'additionnent** : R totale = R1 + R2 + … (plus les résistances superficielles intérieure et extérieure, souvent données).
- **Coefficient de transmission** : **U = 1 / R totale**, en W/(m²·K). Plus U est petit, meilleure est la paroi. Pour R = 5 : U = 0,2 W/(m²·K).

### Les déperditions
- Flux à travers une paroi : **Φ = U × S × ΔT**, en watts. Mur de 100 m², U = 0,2, ΔT = 20 °C : Φ = 0,2 × 100 × 20 = 400 W.
- On additionne les déperditions de chaque paroi (murs, toit, sol, fenêtres) et celles du **renouvellement d'air**.
- **Ponts thermiques** : zones où l'isolant est interrompu (jonction mur-plancher, tour de fenêtre). Ils créent des pertes et des risques de condensation. L'**isolation par l'extérieur** les limite.
- Énergie perdue sur une durée : E = Φ × t. 400 W pendant 24 h : 9,6 kWh.

### L'inertie thermique
- Un matériau lourd (béton, pierre, terre crue) **stocke** la chaleur et la restitue lentement : il lisse les variations de température.
- L'inertie améliore le **confort d'été** : les murs lourds absorbent la chaleur du jour et la rendent la nuit, quand on ventile.
- Énergie stockée : Q = m × c × ΔT.

### La conception bioclimatique
- Orienter les grandes baies vitrées **au sud** pour capter le soleil d'hiver, avec des **protections solaires** (casquette, brise-soleil) contre le soleil d'été, plus haut dans le ciel.
- Limiter les ouvertures au nord, compacter le bâtiment, utiliser la ventilation naturelle.
- **Mur Trombe** : un mur lourd derrière une vitre, au sud, qui stocke la chaleur du soleil et la restitue dans la pièce.

### À retenir pour le bac
- R = e / λ ; R totale = somme des R ; U = 1 / R totale.
- Φ = U × S × ΔT ; E = Φ × t.
- Plus λ ou U est petit, plus la paroi isole.
- Ponts thermiques : isolation par l'extérieur ; inertie : confort d'été.
- Piège : l'épaisseur doit être en mètres (20 cm = 0,20 m).`,
      cartes: [
        { q: "Trois modes de transfert thermique ?", r: "Conduction, convection, rayonnement." },
        { q: "Que mesure la conductivité thermique λ ?", r: "La capacité d'un matériau à conduire la chaleur ; petite valeur = isolant." },
        { q: "Résistance thermique d'une couche ?", r: "R = e / λ, en m²·K/W, avec e en mètres." },
        { q: "Résistance de plusieurs couches ?", r: "Les résistances s'additionnent." },
        { q: "Coefficient U d'une paroi ?", r: "U = 1 / R totale, en W/(m²·K)." },
        { q: "Flux de chaleur à travers une paroi ?", r: "Φ = U × S × ΔT, en watts." },
        { q: "Qu'est-ce qu'un pont thermique ?", r: "Une zone où l'isolant est interrompu : pertes et risque de condensation." },
        { q: "Comment limiter les ponts thermiques ?", r: "Isoler par l'extérieur, traiter les jonctions et les tours de fenêtres." },
        { q: "Qu'est-ce que l'inertie thermique ?", r: "La capacité d'un matériau lourd à stocker la chaleur et à la restituer lentement." },
        { q: "Intérêt de l'inertie en été ?", r: "Les murs lourds absorbent la chaleur du jour et limitent la surchauffe." },
        { q: "Orientation bioclimatique des baies vitrées ?", r: "Au sud, avec des protections solaires contre le soleil d'été." },
        { q: "Qu'est-ce qu'un mur Trombe ?", r: "Un mur lourd derrière une vitre au sud, qui stocke la chaleur du soleil et la rend à la pièce." },
        { q: "Conductivité de la laine de verre et du béton ?", r: "Environ 0,04 et 1,75 W/(m·K)." },
      ],
      quiz: [
        { q: "Un matériau isolant a une conductivité thermique :", choix: ["faible", "élevée", "égale à 1", "négative"], bonne: 0, expl: "La laine de verre est à environ 0,04 W/(m·K).", niv: 1 },
        { q: "20 cm de laine de verre (λ = 0,04 W/(m·K)). Résistance thermique ?", choix: ["0,5 m²·K/W", "0,008 m²·K/W", "5 m²·K/W", "0,2 m²·K/W"], bonne: 2, expl: "R = 0,20 / 0,04 = 5 m²·K/W. 0,008 multiplie au lieu de diviser.", niv: 2 },
        { q: "Mur de 100 m², U = 0,2 W/(m²·K), écart de température 20 °C. Flux perdu ?", choix: ["40 W", "400 W", "4 000 W", "200 W"], bonne: 1, expl: "Φ = 0,2 × 100 × 20 = 400 W.", niv: 2 },
        { q: "La chaleur du soleil qui traverse une vitre est transmise par :", choix: ["évaporation", "conduction", "convection", "rayonnement"], bonne: 3, expl: "Le rayonnement n'a pas besoin de matière.", niv: 1 },
        { q: "Paroi : R totale = 4 m²·K/W. Coefficient U ?", choix: ["4 W/(m²·K)", "0,25 W/(m²·K)", "0,4 W/(m²·K)", "40 W/(m²·K)"], bonne: 1, expl: "U = 1 / 4 = 0,25.", niv: 2 },
        { q: "Béton 20 cm (λ = 1,75) et isolant 12 cm (λ = 0,04). Résistance totale, environ (sans surfaces) ?", choix: ["3,1 m²·K/W", "0,11 m²·K/W", "3,0 m²·K/W", "1,79 m²·K/W"], bonne: 0, expl: "0,20 / 1,75 ≈ 0,11 et 0,12 / 0,04 = 3 ; total ≈ 3,11. Le béton isole très peu.", niv: 3 },
        { q: "Les résistances thermiques de couches successives :", choix: ["s'annulent", "se multiplient", "se divisent", "s'additionnent"], bonne: 3, expl: "Comme des résistances électriques en série.", niv: 1 },
        { q: "Une paroi perd 400 W pendant 24 h. Énergie perdue ?", choix: ["2,4 kWh", "0,4 kWh", "9,6 kWh", "0,96 kWh"], bonne: 2, expl: "0,4 kW × 24 h = 9,6 kWh.", niv: 2 },
        { q: "Pourquoi l'isolation par l'extérieur est-elle souvent plus efficace ?", choix: ["Elle réduit la surface du mur", "Elle augmente la conductivité du mur", "Elle supprime la plupart des ponts thermiques", "Elle supprime le rayonnement solaire"], bonne: 2, expl: "L'isolant enveloppe le bâtiment sans interruption aux planchers.", niv: 3 },
        { q: "Un bâtiment à forte inertie thermique :", choix: ["ne stocke pas de chaleur", "chauffe très vite le matin", "perd sa chaleur en quelques minutes", "varie lentement en température"], bonne: 3, expl: "Ses murs lourds stockent et restituent la chaleur.", niv: 2 },
        { q: "En conception bioclimatique, les grandes baies vitrées sont placées :", choix: ["au nord", "au sud", "à l'est", "sous le sol"], bonne: 1, expl: "Pour capter le soleil d'hiver, avec une protection contre le soleil d'été.", niv: 1 },
        { q: "On remplace une fenêtre de 2 m² (U = 5) par une fenêtre U = 1,2. Gain pour un écart de 20 °C ?", choix: ["152 W", "200 W", "48 W", "7,6 W"], bonne: 0, expl: "Avant 5 × 2 × 20 = 200 W, après 1,2 × 2 × 20 = 48 W : 152 W de gagnés.", niv: 3 },
      ] },
    { chapitre: 'sti2d-ee-3',
      fiche: `## Chauffage, pompe à chaleur et ventilation

### Les systèmes de chauffage
- **Effet Joule** (convecteur, radiateur électrique) : toute l'électricité devient chaleur, mais c'est de l'électricité, coûteuse en énergie primaire.
- **Chaudière** (gaz, fioul, bois, granulés) : rendement de 85 à 105 % sur le pouvoir calorifique inférieur pour une chaudière à condensation, qui récupère la chaleur de la vapeur des fumées.
- **Pompe à chaleur** (PAC) : elle **prélève** de la chaleur dans l'air extérieur, le sol ou l'eau, et la **remonte** à une température utile grâce à un compresseur.
- Émetteurs : radiateurs, plancher chauffant (basse température, idéal avec une PAC), ventilo-convecteurs.

### Le fonctionnement d'une pompe à chaleur
- Un **fluide frigorigène** tourne dans une boucle : il **s'évapore** dans l'évaporateur en prenant la chaleur de la source froide, est **comprimé** (il chauffe), **se condense** dans le condenseur en cédant sa chaleur au logement, puis se **détend** et recommence.
- **Coefficient de performance** : **COP = chaleur fournie / électricité absorbée**. Une PAC qui fournit 10 kW en absorbant 2,5 kW a un COP de 4.
- Le COP **baisse** quand l'écart de température entre la source et l'émetteur augmente : une PAC air-eau est moins efficace par grand froid et avec des radiateurs à haute température.
- Énergie gratuite prélevée dans l'environnement = chaleur fournie - électricité absorbée.
- Une **climatisation** est une PAC qui fonctionne à l'envers : elle prend la chaleur dedans et la rejette dehors.

### L'eau chaude sanitaire
- Énergie pour chauffer l'eau : **Q = m × c × ΔT**, avec c = 4 180 J/(kg·°C), soit environ **1,16 Wh par litre et par °C**. 200 L de 15 à 55 °C : 200 × 1,16 × 40 ≈ 9,3 kWh.
- Solutions : ballon électrique, chauffe-eau thermodynamique (PAC), chauffe-eau solaire.

### La ventilation
- Elle renouvelle l'air pour la santé (humidité, CO2, polluants), mais l'air entrant doit être chauffé.
- Pertes par renouvellement d'air : **P ≈ 0,34 × débit (m³/h) × ΔT**, en watts. 200 m³/h avec 20 °C d'écart : 0,34 × 200 × 20 = 1 360 W.
- **VMC simple flux** : l'air vicié est extrait, l'air neuf entre froid par les entrées d'air.
- **VMC double flux** : un **échangeur** transfère la chaleur de l'air extrait à l'air neuf, sans les mélanger. Avec une efficacité de 85 %, les pertes de ventilation sont divisées par environ 6,7 (il reste 15 %).
- Un **puits canadien** fait passer l'air neuf dans un tuyau enterré : il est préchauffé l'hiver et rafraîchi l'été.

### À retenir pour le bac
- COP = chaleur fournie / électricité absorbée ; il baisse quand l'écart de température augmente.
- Q = m × c × ΔT ; environ 1,16 Wh par litre et par °C pour l'eau.
- Ventilation : P ≈ 0,34 × débit × ΔT.
- Double flux : un échangeur récupère la chaleur de l'air extrait.
- Piège : un COP de 4 ne veut pas dire un rendement de 400 % ; la chaleur en plus vient de l'environnement.`,
      cartes: [
        { q: "Coefficient de performance d'une PAC ?", r: "COP = chaleur fournie / électricité absorbée." },
        { q: "D'où vient la chaleur en plus d'une PAC ?", r: "De l'environnement : air extérieur, sol ou eau." },
        { q: "Les quatre étapes du cycle d'une PAC ?", r: "Évaporation, compression, condensation, détente." },
        { q: "Quand le COP d'une PAC baisse-t-il ?", r: "Quand l'écart de température entre la source et l'émetteur augmente." },
        { q: "Émetteur idéal pour une PAC ?", r: "Un plancher chauffant ou des émetteurs basse température." },
        { q: "Chaudière à condensation ?", r: "Elle récupère la chaleur de la vapeur d'eau des fumées." },
        { q: "Énergie pour chauffer de l'eau ?", r: "Q = m × c × ΔT ; environ 1,16 Wh par litre et par °C." },
        { q: "Pertes par renouvellement d'air ?", r: "P ≈ 0,34 × débit (m³/h) × ΔT, en watts." },
        { q: "VMC simple flux ?", r: "Elle extrait l'air vicié ; l'air neuf entre froid." },
        { q: "VMC double flux ?", r: "Un échangeur transfère la chaleur de l'air extrait à l'air neuf." },
        { q: "Qu'est-ce qu'un puits canadien ?", r: "Un tuyau enterré qui préchauffe l'air neuf l'hiver et le rafraîchit l'été." },
        { q: "Climatisation ?", r: "Une PAC qui prend la chaleur dedans et la rejette dehors." },
        { q: "Pourquoi ventiler malgré les pertes ?", r: "Pour évacuer l'humidité, le CO2 et les polluants." },
      ],
      quiz: [
        { q: "Le COP d'une pompe à chaleur est :", choix: ["puissance du compresseur × durée", "électricité absorbée / chaleur fournie", "chaleur fournie - électricité absorbée", "chaleur fournie / électricité absorbée"], bonne: 3, expl: "Un COP de 4 donne 4 kWh de chaleur pour 1 kWh d'électricité.", niv: 1 },
        { q: "Une PAC fournit 10 kW et absorbe 2,5 kW. COP ?", choix: ["4", "0,25", "3", "2,5"], bonne: 0, expl: "10 / 2,5 = 4.", niv: 2 },
        { q: "Une PAC de COP 3 doit fournir 9 000 kWh de chaleur par an. Électricité consommée ?", choix: ["9 000 kWh", "27 000 kWh", "3 000 kWh", "6 000 kWh"], bonne: 2, expl: "9 000 / 3 = 3 000 kWh ; les 6 000 kWh restants viennent de l'air extérieur.", niv: 2 },
        { q: "Dans une PAC, le fluide frigorigène cède sa chaleur au logement dans :", choix: ["l'évaporateur", "le condenseur", "le détendeur", "le compresseur"], bonne: 1, expl: "Il s'y condense en libérant de la chaleur.", niv: 1 },
        { q: "Énergie pour chauffer 200 L d'eau de 15 à 55 °C (1,16 Wh par litre et par °C) ?", choix: ["9,3 kWh", "12,8 kWh", "232 kWh", "0,23 kWh"], bonne: 0, expl: "200 × 1,16 × 40 ≈ 9 280 Wh.", niv: 2 },
        { q: "Débit de ventilation 200 m³/h, écart 20 °C. Puissance perdue en simple flux ?", choix: ["136 W", "1 360 W", "680 W", "68 W"], bonne: 1, expl: "0,34 × 200 × 20 = 1 360 W.", niv: 3 },
        { q: "Une VMC double flux économise de l'énergie grâce à :", choix: ["des entrées d'air plus grandes", "un débit d'air nul", "un chauffage électrique de l'air", "un échangeur entre air extrait et air neuf"], bonne: 3, expl: "La chaleur de l'air vicié réchauffe l'air neuf.", niv: 1 },
        { q: "Pourquoi le COP d'une PAC air-eau baisse-t-il par grand froid ?", choix: ["L'air froid contient plus de chaleur", "Le compresseur consomme moins", "L'écart entre l'air extérieur et l'eau chaude augmente", "Le fluide ne circule plus"], bonne: 2, expl: "Plus il faut remonter la température, plus le compresseur travaille.", niv: 2 },
        { q: "Double flux d'efficacité 85 % sur des pertes de ventilation de 1 360 W. Pertes restantes ?", choix: ["1 360 W", "1 156 W", "204 W", "85 W"], bonne: 2, expl: "Il reste 15 % : 0,15 × 1 360 = 204 W.", niv: 3 },
        { q: "Un puits canadien sert à :", choix: ["tempérer l'air neuf par le sol", "stocker l'eau de pluie", "produire de l'électricité", "évacuer les fumées"], bonne: 0, expl: "La température du sol varie peu au fil de l'année.", niv: 2 },
        { q: "Quel émetteur convient le mieux à une pompe à chaleur ?", choix: ["un poêle à bois", "un radiateur à 80 °C", "un convecteur électrique", "un plancher chauffant basse température"], bonne: 3, expl: "Une eau moins chaude donne un meilleur COP.", niv: 1 },
        { q: "PAC de COP 4 et radiateur électrique : même chaleur de 8 000 kWh. Électricité économisée par la PAC ?", choix: ["2 000 kWh", "6 000 kWh", "4 000 kWh", "1 600 kWh"], bonne: 1, expl: "Radiateur : 8 000 kWh ; PAC : 8 000 / 4 = 2 000 kWh ; économie de 6 000 kWh.", niv: 3 },
      ] },
    { chapitre: 'sti2d-ee-4',
      fiche: `## Fluides : pompes, ventilateurs et réseaux

Pompes et ventilateurs consomment une grande part de l'électricité des bâtiments et de l'industrie : les sujets EE y reviennent souvent (relevage des eaux, réseau de chaleur, ventilation).

### Grandeurs d'un fluide
- **Débit volumique** Q en m³/s (souvent donné en m³/h : diviser par 3 600). 3 000 m³/h = 0,833 m³/s.
- **Pression** en pascals (1 bar = 10^5 Pa) ou en **mètres de colonne d'eau** (mCE) : 10 mCE ≈ 1 bar.
- Grandeur effort : la pression ; grandeur flux : le débit. Puissance = pression × débit.

### La puissance d'une pompe
- **Puissance hydraulique** : **PH = ρ × g × Q × HMT**, avec ρ = 1 000 kg/m³, g = 9,81 m/s², Q en m³/s et HMT (hauteur manométrique totale) en m.
- Exemple : Q = 3 000 m³/h = 0,833 m³/s et HMT = 10 m : PH = 1 000 × 9,81 × 0,833 × 10 ≈ 81,7 kW.
- La HMT comprend la **hauteur géométrique** à franchir, les **pertes de charge** dans les tuyaux et la pression résiduelle voulue à la sortie.
- **Rendement de la motopompe** = rendement du moteur × rendement de la pompe. Puissance électrique = PH / rendement global.

### Les pertes de charge
- Le frottement du fluide sur les parois et dans les coudes, vannes, filtres fait perdre de la pression.
- Elles augmentent environ comme le **carré du débit** : doubler le débit multiplie les pertes par 4.
- On les réduit avec des tuyaux plus gros, plus courts, moins de coudes.

### Point de fonctionnement
- La **courbe de la pompe** donne la HMT qu'elle fournit selon le débit (elle baisse quand le débit augmente).
- La **courbe du réseau** donne la HMT nécessaire selon le débit (elle monte).
- Le **point de fonctionnement** est leur **intersection**.
- **Deux pompes en parallèle** : les **débits s'additionnent** à même hauteur (pour un fort débit, cas du relevage aux heures de pointe). **En série** : les **hauteurs s'additionnent** à même débit (pour monter plus haut).

### Les lois de similitude
- Quand la vitesse de rotation n d'une pompe ou d'un ventilateur change : le **débit** varie comme n, la **hauteur** comme n², la **puissance** comme **n³**.
- Réduire la vitesse de 20 % (0,8 × n) divise la puissance par environ 2 : 0,8³ ≈ 0,51.
- C'est pourquoi un **variateur de vitesse** est bien plus économe qu'une vanne qui étrangle le débit.

### À retenir pour le bac
- PH = ρ × g × Q × HMT, Q en m³/s.
- Pertes de charge en Q² ; point de fonctionnement à l'intersection des courbes.
- Parallèle : débits additionnés ; série : hauteurs additionnées.
- Lois de similitude : Q en n, H en n², P en n³.
- Piège : convertir les m³/h en m³/s.`,
      cartes: [
        { q: "Puissance hydraulique d'une pompe ?", r: "PH = ρ × g × Q × HMT, Q en m³/s, HMT en m." },
        { q: "Qu'est-ce que la HMT ?", r: "La hauteur manométrique totale : hauteur à franchir, pertes de charge et pression résiduelle." },
        { q: "Conversion m³/h en m³/s ?", r: "Diviser par 3 600." },
        { q: "Correspondance mCE et bar ?", r: "10 mCE ≈ 1 bar = 10^5 Pa." },
        { q: "Comment varient les pertes de charge avec le débit ?", r: "Environ comme le carré du débit." },
        { q: "Point de fonctionnement d'une pompe ?", r: "L'intersection de la courbe de la pompe et de celle du réseau." },
        { q: "Deux pompes en parallèle ?", r: "Les débits s'additionnent à même hauteur." },
        { q: "Deux pompes en série ?", r: "Les hauteurs s'additionnent à même débit." },
        { q: "Loi de similitude pour le débit ?", r: "Le débit varie comme la vitesse de rotation." },
        { q: "Loi de similitude pour la puissance ?", r: "La puissance varie comme le cube de la vitesse." },
        { q: "Rendement d'une motopompe ?", r: "Rendement du moteur × rendement de la pompe." },
        { q: "Pourquoi un variateur plutôt qu'une vanne ?", r: "Réduire la vitesse divise fortement la puissance ; une vanne gaspille l'énergie en pertes de charge." },
        { q: "Comment réduire les pertes de charge ?", r: "Tuyaux plus gros et plus courts, moins de coudes et de vannes." },
      ],
      quiz: [
        { q: "Le débit 3 600 m³/h correspond à :", choix: ["3 600 m³/s", "60 m³/s", "1 m³/s", "0,1 m³/s"], bonne: 2, expl: "Une heure compte 3 600 s.", niv: 1 },
        { q: "Pompe : Q = 0,1 m³/s, HMT = 20 m. Puissance hydraulique (ρ = 1 000, g = 9,81) ?", choix: ["1,96 kW", "2 kW", "9,8 kW", "19,6 kW"], bonne: 3, expl: "1 000 × 9,81 × 0,1 × 20 = 19 620 W.", niv: 2 },
        { q: "Puissance hydraulique 20 kW ; moteur 0,9, pompe 0,75. Puissance électrique absorbée ?", choix: ["29,6 kW", "13,5 kW", "20 kW", "24,2 kW"], bonne: 0, expl: "Rendement global 0,675 ; 20 / 0,675 ≈ 29,6 kW.", niv: 2 },
        { q: "Deux pompes identiques montées en parallèle permettent surtout :", choix: ["d'additionner les hauteurs", "d'additionner les débits", "de diviser la puissance", "de supprimer les pertes de charge"], bonne: 1, expl: "C'est le montage choisi pour le débit de pointe d'une station de relevage.", niv: 1 },
        { q: "On double le débit dans un réseau. Les pertes de charge sont environ multipliées par :", choix: ["1", "2", "8", "4"], bonne: 3, expl: "Elles varient comme le carré du débit.", niv: 2 },
        { q: "Un ventilateur passe à 80 % de sa vitesse. Sa puissance devient environ :", choix: ["64 % de la puissance initiale", "80 % de la puissance initiale", "51 % de la puissance initiale", "20 % de la puissance initiale"], bonne: 2, expl: "0,8³ ≈ 0,51. 64 % correspond à la hauteur (0,8²).", niv: 3 },
        { q: "Le point de fonctionnement d'une pompe sur un réseau se lit :", choix: ["au maximum de la courbe de la pompe", "à l'intersection des deux courbes", "à débit nul", "à l'origine du réseau"], bonne: 1, expl: "La pompe fournit exactement la hauteur que le réseau demande.", niv: 1 },
        { q: "Pour monter de l'eau plus haut que ne le permet une seule pompe, on monte deux pompes :", choix: ["en série", "en parallèle", "en secours", "à l'arrêt"], bonne: 0, expl: "Les hauteurs s'additionnent.", niv: 2 },
        { q: "Pourquoi régler un débit avec un variateur plutôt qu'avec une vanne ?", choix: ["La puissance chute avec le cube de la vitesse", "La vanne augmente le débit", "Le variateur supprime le moteur", "La vanne améliore le rendement de la pompe"], bonne: 0, expl: "La vanne garde la pompe à pleine vitesse et dissipe l'énergie en pertes de charge.", niv: 3 },
        { q: "La hauteur manométrique totale d'une pompe comprend :", choix: ["la masse de la pompe", "le diamètre de la roue", "la hauteur à franchir et les pertes de charge", "la tension du moteur"], bonne: 2, expl: "On y ajoute la pression résiduelle voulue à la sortie.", niv: 2 },
        { q: "10 mètres de colonne d'eau correspondent environ à :", choix: ["10 bar", "1 bar", "0,1 bar", "0,01 bar"], bonne: 1, expl: "1 bar = 10^5 Pa ≈ ρ × g × 10 m.", niv: 1 },
        { q: "Pompe de relevage : Q = 3 000 m³/h, HMT = 10 m. Puissance hydraulique, environ ?", choix: ["8,2 kW", "294 MW", "29 kW", "82 kW"], bonne: 3, expl: "Q = 0,833 m³/s ; 1 000 × 9,81 × 0,833 × 10 ≈ 81,7 kW.", niv: 3 },
      ] },
    { chapitre: 'sti2d-ee-5',
      fiche: `## Production d'énergie renouvelable

### Le photovoltaïque
- Une cellule convertit la **lumière en électricité continue**. Les panneaux sont reliés à un **onduleur** pour le réseau ou à un régulateur pour une batterie.
- **Puissance crête** (Wc, kWc) : puissance fournie dans des conditions standard (1 000 W/m² d'ensoleillement, 25 °C).
- **Rendement** d'un panneau = puissance crête / (1 000 × surface). Panneau de 400 Wc et 1,9 m² : 400 / 1 900 ≈ 21 %.
- **Production annuelle** = puissance crête × **productible** (kWh par kWc et par an, de 900 dans le nord à 1 400 dans le sud de la France). 6 kWc à 1 200 kWh/kWc : 7 200 kWh par an.
- Orientation idéale : **plein sud**, inclinaison d'environ 30 à 35°. La chaleur et l'ombre font baisser la production.
- Le **suivi du point de puissance maximale** (MPPT) de l'onduleur règle en continu la tension pour tirer le maximum du panneau.

### Le solaire thermique
- Des capteurs chauffent un fluide qui transmet la chaleur à un ballon d'eau chaude. Rendement bien plus élevé que le photovoltaïque (souvent 50 % et plus), mais il ne produit que de la chaleur.

### L'éolien
- Puissance du vent traversant le rotor : **P vent = ½ × ρ × S × v³**, avec ρ ≈ 1,2 kg/m³, S la surface balayée (π × R²) et v la vitesse du vent.
- La puissance varie comme le **cube de la vitesse** : si le vent double, la puissance est multipliée par 8.
- **Limite de Betz** : une éolienne ne peut récupérer au plus que **59 %** de la puissance du vent ; en pratique, le coefficient de puissance Cp est d'environ 0,4.
- Exemple : rotor de 50 m de rayon (S ≈ 7 854 m²), vent de 10 m/s : P vent ≈ 4,7 MW ; avec Cp = 0,4 : 1,9 MW.
- Courbe de puissance : démarrage vers 3 m/s, puissance nominale vers 12 m/s, arrêt de sécurité vers 25 m/s.

### L'hydraulique
- **P = ρ × g × Q × H × η**. Débit 2 m³/s, chute 50 m, rendement 0,85 : P ≈ 834 kW.
- Très pilotable, et stockable avec les retenues et les stations de transfert d'énergie par pompage.

### La biomasse et la méthanisation
- **Bois, granulés** : combustion ; le CO2 émis a été absorbé par la plante pendant sa croissance.
- **Méthanisation** : des déchets organiques (boues d'épuration, déchets agricoles) fermentent sans oxygène et produisent du **biogaz** (surtout du méthane), brûlé en cogénération ou injecté dans le réseau de gaz.

### Comparer les sources
- Critères : production annuelle, **facteur de charge**, intermittence, coût, impact environnemental (ACV, emprise au sol, bruit, paysage), acceptabilité.
- Solaire et éolien sont **intermittents** : il faut du stockage, de la gestion ou d'autres sources pilotables.

### À retenir pour le bac
- Production photovoltaïque = kWc × productible ; rendement = Wc / (1 000 × S).
- Éolien : P = ½ × ρ × S × v³ × Cp ; puissance en v³ ; Betz 59 %.
- Hydraulique : P = ρ × g × Q × H × η.
- Méthanisation : déchets organiques vers biogaz.
- Piège : la surface balayée d'une éolienne est π × R², avec le rayon et non le diamètre.`,
      cartes: [
        { q: "Puissance crête d'un panneau ?", r: "La puissance fournie sous 1 000 W/m² et à 25 °C." },
        { q: "Rendement d'un panneau photovoltaïque ?", r: "Puissance crête / (1 000 × surface)." },
        { q: "Production annuelle photovoltaïque ?", r: "Puissance crête (kWc) × productible (kWh par kWc et par an)." },
        { q: "Orientation idéale d'un panneau en France ?", r: "Plein sud, incliné d'environ 30 à 35°." },
        { q: "Rôle du MPPT ?", r: "Faire travailler le panneau à son point de puissance maximale." },
        { q: "Puissance du vent ?", r: "P = ½ × ρ × S × v³." },
        { q: "Effet d'un vent deux fois plus fort ?", r: "La puissance est multipliée par 8." },
        { q: "Limite de Betz ?", r: "Au plus 59 % de la puissance du vent peut être récupérée." },
        { q: "Puissance d'une centrale hydraulique ?", r: "P = ρ × g × Q × H × η." },
        { q: "Qu'est-ce que la méthanisation ?", r: "La fermentation sans oxygène de déchets organiques, qui produit du biogaz." },
        { q: "Solaire thermique ou photovoltaïque ?", r: "Thermique : chaleur, bon rendement. Photovoltaïque : électricité." },
        { q: "Pourquoi le bois est-il dit neutre en carbone ?", r: "Le CO2 émis à la combustion a été absorbé par l'arbre pendant sa croissance (si la forêt est renouvelée)." },
        { q: "Que faire face à l'intermittence du solaire et de l'éolien ?", r: "Stocker, piloter la consommation, ou compléter avec des sources pilotables." },
      ],
      quiz: [
        { q: "Un panneau photovoltaïque produit :", choix: ["du courant alternatif à 50 Hz", "du courant continu", "de la chaleur sans électricité", "du biogaz"], bonne: 1, expl: "L'onduleur le transforme en alternatif pour le réseau.", niv: 1 },
        { q: "Installation de 6 kWc ; productible 1 200 kWh par kWc et par an. Production annuelle ?", choix: ["7 200 kWh", "200 kWh", "1 206 kWh", "720 kWh"], bonne: 0, expl: "6 × 1 200 = 7 200 kWh.", niv: 2 },
        { q: "Panneau de 400 Wc pour 1,9 m². Rendement, environ ?", choix: ["47 %", "4,75 %", "21 %", "76 %"], bonne: 2, expl: "400 / (1 000 × 1,9) ≈ 0,21.", niv: 2 },
        { q: "La puissance du vent varie comme :", choix: ["l'inverse de la vitesse", "la vitesse", "le carré de la vitesse", "le cube de la vitesse"], bonne: 3, expl: "P = ½ × ρ × S × v³.", niv: 1 },
        { q: "Le vent passe de 5 à 10 m/s. La puissance disponible est multipliée par :", choix: ["8", "2", "4", "6"], bonne: 0, expl: "2³ = 8.", niv: 2 },
        { q: "Rotor de 50 m de rayon (S ≈ 7 854 m²), vent 10 m/s, ρ = 1,2, Cp = 0,4. Puissance électrique, environ ?", choix: ["7,5 MW", "4,7 MW", "0,19 MW", "1,9 MW"], bonne: 3, expl: "½ × 1,2 × 7 854 × 1 000 ≈ 4,71 MW ; × 0,4 ≈ 1,9 MW.", niv: 3 },
        { q: "La limite de Betz fixe la part maximale récupérable de la puissance du vent à :", choix: ["33 %", "59 %", "40 %", "25 %"], bonne: 1, expl: "En pratique, les éoliennes atteignent environ 40 %.", niv: 1 },
        { q: "Centrale hydraulique : 2 m³/s, chute 50 m, rendement 0,85 (g = 9,81). Puissance, environ ?", choix: ["85 kW", "981 kW", "834 kW", "8,3 MW"], bonne: 2, expl: "1 000 × 9,81 × 2 × 50 × 0,85 ≈ 834 000 W.", niv: 2 },
        { q: "Pourquoi la production d'un panneau baisse-t-elle par forte chaleur ?", choix: ["La lumière est moins intense en été", "Le rendement des cellules diminue quand elles chauffent", "L'onduleur s'arrête au-dessus de 20 °C", "Le courant devient alternatif"], bonne: 1, expl: "La puissance crête est donnée à 25 °C ; une cellule à 60 °C produit moins.", niv: 3 },
        { q: "Une unité de méthanisation produit à partir des boues d'une station d'épuration :", choix: ["de l'électricité directement", "de l'hydrogène pur", "du biogaz", "du charbon"], bonne: 2, expl: "Le biogaz, riche en méthane, est brûlé ou injecté dans le réseau.", niv: 2 },
        { q: "En France, un panneau photovoltaïque est de préférence orienté :", choix: ["plein sud", "plein nord", "à l'horizontale vers le nord", "à la verticale vers l'est"], bonne: 0, expl: "Avec une inclinaison d'environ 30 à 35°.", niv: 1 },
        { q: "Une éolienne de 2 MW a produit 4 400 MWh en un an (8 760 h). Facteur de charge, environ ?", choix: ["0,05", "2,2", "0,5", "0,25"], bonne: 3, expl: "4 400 / (2 × 8 760) ≈ 0,25.", niv: 3 },
      ] },
    { chapitre: 'sti2d-ee-6',
      fiche: `## Convertisseurs et modulateurs de puissance

Le programme distingue trois familles de constituants de puissance, qu'il faut savoir nommer dans une chaîne d'énergie.

### Convertisseurs, modulateurs, adaptateurs
- **Convertisseur** : il change la **nature** de l'énergie. Moteur, pompe, ventilateur, compresseur, vérin, vanne, panneau solaire, module Peltier, éclairage.
- **Modulateur de puissance** : il **dose** l'énergie électrique et change sa forme (continu, alternatif, tension, fréquence). Hacheur, redresseur, onduleur, gradateur, variateur de vitesse, variateur de lumière.
- **Adaptateur de puissance** : il adapte les grandeurs sans changer la nature de l'énergie. Réducteur (mécanique), transformateur (électrique), échangeur thermique.

### Les quatre modulateurs de base
- **Redresseur** : alternatif vers continu. Chargeur, entrée d'un variateur.
- **Onduleur** : continu vers alternatif, à fréquence fixe (vers le réseau) ou variable (vers un moteur).
- **Hacheur** : continu vers continu de valeur moyenne réglable. **U moyenne = α × U**, avec α le rapport cyclique. 48 V et α = 0,5 donnent 24 V.
- **Gradateur** : alternatif vers alternatif de **valeur efficace** réglable, à fréquence fixe. Il sert au **démarreur progressif** d'un moteur asynchrone et aux variateurs de lumière.
- Un **variateur de vitesse** pour moteur asynchrone associe un **redresseur** (réseau vers continu) et un **onduleur** (continu vers alternatif de tension et de fréquence réglables).

### L'électricité alternative
- Réseau domestique : **monophasé** 230 V, 50 Hz. Industrie et grosses machines : **triphasé** 400 V entre phases.
- Puissance active en monophasé : **P = U × I × cos φ**. En triphasé : **P = √3 × U × I × cos φ**, avec U la tension entre phases.
- Exemple : moteur triphasé 400 V, 20 A, cos φ = 0,85 : P = 1,73 × 400 × 20 × 0,85 ≈ 11,8 kW.
- Le **facteur de puissance** cos φ traduit le décalage entre courant et tension : proche de 1, le réseau est mieux utilisé.

### Le transformateur
- Il change la valeur d'une tension alternative : **U2 / U1 = N2 / N1** (rapport des nombres de spires). Transformateur parfait : la puissance se conserve, donc I2 / I1 = N1 / N2.
- Il ne fonctionne pas en continu.

### Réversibilité
- Un modulateur est **réversible** s'il laisse passer l'énergie dans les deux sens : onduleur d'une voiture électrique au freinage, onduleur d'une batterie domestique qui charge et décharge.

### À retenir pour le bac
- Convertisseur : change la nature de l'énergie ; modulateur : la dose ; adaptateur : adapte les grandeurs.
- Redresseur, onduleur, hacheur, gradateur ; variateur = redresseur + onduleur.
- P = √3 × U × I × cos φ en triphasé.
- Démarreur progressif = gradateur ; variateur = vitesse réglable.
- Piège : un transformateur ne fonctionne qu'en alternatif.`,
      cartes: [
        { q: "Convertisseur au sens du programme ?", r: "Un constituant qui change la nature de l'énergie : moteur, pompe, panneau solaire." },
        { q: "Modulateur de puissance ?", r: "Un constituant qui dose l'énergie électrique : hacheur, onduleur, gradateur, variateur." },
        { q: "Adaptateur de puissance ?", r: "Un constituant qui adapte les grandeurs sans changer la nature : réducteur, transformateur, échangeur." },
        { q: "Rôle d'un gradateur ?", r: "Alternatif vers alternatif de valeur efficace réglable, à fréquence fixe." },
        { q: "Rôle d'un hacheur ?", r: "Continu vers continu de valeur moyenne réglable : U moyenne = α × U." },
        { q: "Composition d'un variateur de vitesse pour moteur asynchrone ?", r: "Un redresseur puis un onduleur à tension et fréquence réglables." },
        { q: "Démarreur progressif ?", r: "Un gradateur qui augmente peu à peu la tension pour limiter le courant de démarrage." },
        { q: "Puissance active en monophasé ?", r: "P = U × I × cos φ." },
        { q: "Puissance active en triphasé ?", r: "P = √3 × U × I × cos φ, avec U la tension entre phases." },
        { q: "Tensions du réseau basse tension ?", r: "230 V entre phase et neutre, 400 V entre phases, 50 Hz." },
        { q: "Rapport d'un transformateur ?", r: "U2 / U1 = N2 / N1." },
        { q: "Facteur de puissance ?", r: "cos φ : il traduit le décalage entre courant et tension ; proche de 1, c'est mieux." },
        { q: "Modulateur réversible ?", r: "Il laisse passer l'énergie dans les deux sens, comme l'onduleur d'une voiture électrique au freinage." },
      ],
      quiz: [
        { q: "Un gradateur transforme :", choix: ["de l'alternatif en alternatif de valeur réglable", "du continu en alternatif", "de l'alternatif en continu", "du continu en continu réglable"], bonne: 0, expl: "La fréquence reste celle du réseau.", niv: 1 },
        { q: "Hacheur alimenté en 48 V, rapport cyclique 0,5. Tension moyenne de sortie ?", choix: ["96 V", "24 V", "48 V", "0,5 V"], bonne: 1, expl: "U moyenne = 0,5 × 48 = 24 V.", niv: 2 },
        { q: "Moteur triphasé : 400 V, 20 A, cos φ = 0,85. Puissance active, environ ?", choix: ["13,9 kW", "6,8 kW", "8 kW", "11,8 kW"], bonne: 3, expl: "1,73 × 400 × 20 × 0,85 ≈ 11 780 W. 6,8 kW oublie le √3.", niv: 2 },
        { q: "Au sens du programme, une pompe est :", choix: ["un adaptateur", "un modulateur", "un convertisseur", "un capteur"], bonne: 2, expl: "Elle change l'énergie mécanique en énergie hydraulique.", niv: 1 },
        { q: "Un variateur de vitesse pour moteur asynchrone contient :", choix: ["un transformateur seul", "un onduleur puis un gradateur", "un redresseur puis un onduleur", "deux hacheurs en série"], bonne: 2, expl: "Le redresseur crée un bus continu, l'onduleur recrée un alternatif réglable.", niv: 2 },
        { q: "Transformateur parfait : 230 V au primaire, 23 V au secondaire, 2 A au secondaire. Courant primaire ?", choix: ["20 A", "0,2 A", "2 A", "4,6 A"], bonne: 1, expl: "La puissance se conserve : 23 × 2 = 230 × I1, donc I1 = 0,2 A.", niv: 3 },
        { q: "Un échangeur thermique est, au sens du programme :", choix: ["un adaptateur de puissance", "un modulateur de puissance", "un capteur", "un stockeur"], bonne: 0, expl: "L'énergie reste thermique ; seules les températures des fluides changent.", niv: 1 },
        { q: "Un démarreur progressif sert surtout à :", choix: ["augmenter le couple maximal", "faire varier la vitesse en continu", "convertir le continu en alternatif", "limiter le courant au démarrage"], bonne: 3, expl: "Il évite le pic de courant et les coups de bélier dans les pompes.", niv: 2 },
        { q: "Monophasé 230 V, 10 A, cos φ = 0,8. Puissance active ?", choix: ["2 300 W", "1 840 W", "3 187 W", "288 W"], bonne: 1, expl: "P = 230 × 10 × 0,8 = 1 840 W.", niv: 3 },
        { q: "Pour injecter dans le réseau l'électricité d'une batterie domestique, il faut :", choix: ["un réducteur", "un redresseur", "un gradateur", "un onduleur"], bonne: 3, expl: "La batterie est en continu, le réseau en alternatif.", niv: 2 },
        { q: "Un transformateur ne peut pas fonctionner :", choix: ["en courant continu", "à 50 Hz", "en triphasé", "à vide"], bonne: 0, expl: "Il a besoin d'un flux magnétique variable.", niv: 1 },
        { q: "Pourquoi un onduleur de voiture électrique doit-il être réversible ?", choix: ["Pour fonctionner sans batterie", "Pour démarrer plus vite", "Pour recharger la batterie au freinage", "Pour supprimer le moteur"], bonne: 2, expl: "Le moteur devient génératrice et l'énergie repart vers la batterie.", niv: 3 },
      ] },
    { chapitre: 'sti2d-ee-7',
      fiche: `## Moteurs électriques et variation de vitesse

### Lire une plaque signalétique
- Elle donne la **puissance utile** (mécanique) nominale, la **tension**, le **courant**, la **vitesse** nominale, le **cos φ**, la fréquence et parfois le rendement et la classe d'efficacité (IE2, IE3, IE4).
- La puissance indiquée est **toujours la puissance mécanique utile** sur l'arbre. Puissance absorbée = puissance utile / rendement.
- Exemple : 15 kW utiles, rendement 0,92 : 16,3 kW absorbés.

### Le moteur asynchrone triphasé
- Le plus utilisé dans l'industrie et les pompes : robuste, peu cher, sans balais.
- **Vitesse de synchronisme** : **ns = 60 × f / p** en tr/min, avec f la fréquence et p le nombre de **paires de pôles**. À 50 Hz : 3 000 tr/min pour p = 1 ; 1 500 pour p = 2 ; 1 000 pour p = 3.
- Le rotor tourne un peu moins vite : **glissement g = (ns - n) / ns**. Plaque à 1 450 tr/min pour ns = 1 500 : g = 50 / 1 500 ≈ 3,3 %.
- Au démarrage direct, le courant peut atteindre 5 à 8 fois le courant nominal : d'où les démarreurs progressifs ou les variateurs.
- **Couplage** étoile ou triangle selon la tension du réseau et la plaque (230/400 V : étoile sur un réseau 400 V).

### Le moteur synchrone et le moteur à courant continu
- **Synchrone à aimants** (sans balais) : il tourne exactement à la vitesse de synchronisme ; excellent rendement ; voitures électriques, éoliennes à attaque directe. Il faut un onduleur pour le piloter.
- **Courant continu** : vitesse proportionnelle à la tension, couple proportionnel au courant ; petites puissances, commande simple par hacheur.

### La variation de vitesse
- Un variateur de fréquence règle la vitesse d'un moteur asynchrone en changeant f. Il garde le rapport **U / f constant** pour conserver le couple : 400 V à 50 Hz, donc 200 V à 25 Hz.
- À 25 Hz, ns = 750 tr/min pour un moteur à 2 paires de pôles.
- Réglages typiques : fréquence minimale et maximale, temps d'accélération et de décélération (rampes), courant moteur de la plaque.
- Gain énergétique sur pompes et ventilateurs : la puissance varie comme le cube de la vitesse.

### Choisir un moteur
- Vérifier que la **puissance utile** du moteur couvre la puissance demandée par la charge, avec une petite marge.
- Vérifier la vitesse, la tension disponible, l'environnement (indice de protection IP, moteur immergé), la classe d'efficacité.
- Un moteur trop gros fonctionne à faible charge, avec un mauvais rendement et un mauvais cos φ.

### À retenir pour le bac
- Plaque : puissance utile mécanique ; absorbée = utile / rendement.
- ns = 60 × f / p ; g = (ns - n) / ns.
- Variateur : U / f constant, vitesse proportionnelle à la fréquence.
- Synchrone à aimants : très bon rendement, piloté par onduleur.
- Piège : p est le nombre de paires de pôles, pas de pôles (4 pôles = 2 paires).`,
      cartes: [
        { q: "Puissance indiquée sur la plaque d'un moteur ?", r: "La puissance mécanique utile sur l'arbre." },
        { q: "Puissance absorbée par un moteur ?", r: "Puissance utile / rendement." },
        { q: "Vitesse de synchronisme ?", r: "ns = 60 × f / p, p = nombre de paires de pôles." },
        { q: "Glissement d'un moteur asynchrone ?", r: "g = (ns - n) / ns." },
        { q: "Vitesses de synchronisme à 50 Hz ?", r: "3 000 tr/min (p = 1), 1 500 (p = 2), 1 000 (p = 3)." },
        { q: "Courant de démarrage direct d'un moteur asynchrone ?", r: "5 à 8 fois le courant nominal." },
        { q: "Pourquoi garder U / f constant ?", r: "Pour conserver le couple quand on change la fréquence." },
        { q: "Avantages du moteur synchrone à aimants ?", r: "Excellent rendement, compact ; il faut un onduleur pour le piloter." },
        { q: "Moteur à courant continu : vitesse et couple ?", r: "Vitesse proportionnelle à la tension, couple proportionnel au courant." },
        { q: "Classes d'efficacité des moteurs ?", r: "IE2, IE3, IE4 : plus le chiffre est grand, meilleur est le rendement." },
        { q: "Réglages courants d'un variateur ?", r: "Fréquences minimale et maximale, rampes d'accélération et de décélération, courant de la plaque." },
        { q: "Inconvénient d'un moteur trop puissant pour sa charge ?", r: "Il travaille à faible charge, avec un mauvais rendement et un mauvais cos φ." },
        { q: "Couplage d'un moteur 230/400 V sur un réseau 400 V ?", r: "En étoile." },
      ],
      quiz: [
        { q: "La puissance inscrite sur la plaque d'un moteur est :", choix: ["la puissance du réseau", "la puissance électrique absorbée", "la puissance perdue", "la puissance mécanique utile"], bonne: 3, expl: "Pour la puissance absorbée, il faut diviser par le rendement.", niv: 1 },
        { q: "Moteur asynchrone à 2 paires de pôles sur le réseau 50 Hz. Vitesse de synchronisme ?", choix: ["750 tr/min", "25 tr/min", "1 500 tr/min", "100 tr/min"], bonne: 2, expl: "ns = 60 × 50 / 2 = 1 500 tr/min.", niv: 2 },
        { q: "ns = 1 500 tr/min, vitesse nominale 1 450 tr/min. Glissement ?", choix: ["3,3 %", "50 %", "96,7 %", "0,5 %"], bonne: 0, expl: "(1 500 - 1 450) / 1 500 ≈ 0,033.", niv: 2 },
        { q: "Le rotor d'un moteur asynchrone tourne :", choix: ["exactement à la vitesse du champ tournant", "un peu moins vite que le champ tournant", "deux fois plus vite que le champ", "à vitesse nulle en charge"], bonne: 1, expl: "C'est ce petit retard, le glissement, qui crée le couple.", niv: 1 },
        { q: "Plaque : 15 kW, rendement 0,92. Puissance absorbée, environ ?", choix: ["13,8 kW", "16,3 kW", "15 kW", "18,4 kW"], bonne: 1, expl: "15 / 0,92 ≈ 16,3 kW.", niv: 2 },
        { q: "Un variateur garde U / f constant. À 50 Hz, U = 400 V. Tension à 30 Hz ?", choix: ["240 V", "400 V", "667 V", "120 V"], bonne: 0, expl: "400 × 30 / 50 = 240 V.", niv: 3 },
        { q: "Un moteur à 4 pôles possède :", choix: ["8 paires de pôles", "4 paires de pôles", "2 paires de pôles", "1 paire de pôles"], bonne: 2, expl: "Une paire = un pôle nord et un pôle sud.", niv: 1 },
        { q: "Pour faire varier la vitesse d'un moteur asynchrone, un variateur modifie surtout :", choix: ["le cos φ du réseau", "le nombre de pôles", "la masse du rotor", "la fréquence d'alimentation"], bonne: 3, expl: "La vitesse de synchronisme est proportionnelle à la fréquence.", niv: 2 },
        { q: "Une pompe demande 110 kW sur l'arbre. Quel moteur choisir ?", choix: ["115 kW", "90 kW", "100 kW", "110 W"], bonne: 0, expl: "Juste au-dessus du besoin : un moteur trop gros aurait un mauvais rendement à charge partielle.", niv: 3 },
        { q: "Un moteur synchrone à aimants est souvent choisi pour une voiture électrique car :", choix: ["sa vitesse ne dépend pas du courant", "il démarre sans électronique", "il n'a pas besoin d'aimants", "son rendement est excellent"], bonne: 3, expl: "Il est piloté par un onduleur et reste très efficace sur une large plage de vitesse.", niv: 2 },
        { q: "Plus la classe d'efficacité d'un moteur est élevée (IE4 plutôt que IE2) :", choix: ["plus il est bruyant", "plus il consomme", "plus son rendement est bon", "plus son glissement est grand"], bonne: 2, expl: "Un moteur IE4 perd moins d'énergie pour la même puissance utile.", niv: 1 },
        { q: "Moteur à 2 paires de pôles alimenté à 25 Hz par un variateur. Vitesse de synchronisme ?", choix: ["1 500 tr/min", "750 tr/min", "3 000 tr/min", "375 tr/min"], bonne: 1, expl: "60 × 25 / 2 = 750 tr/min.", niv: 3 },
      ] },
    { chapitre: 'sti2d-ee-8',
      fiche: `## Stockage de l'énergie

Le programme demande de comparer les stockeurs par un **bilan externe** (énergie entrée en charge, énergie rendue en décharge) et par leurs caractéristiques principales.

### Les caractéristiques d'un stockeur
- **Capacité énergétique** (Wh ou kWh) : l'énergie qu'il peut contenir.
- **Puissance maximale** (W ou kW) : la vitesse à laquelle il peut charger ou décharger.
- **Énergie massique** (Wh/kg) et **puissance massique** (W/kg).
- **Constante de temps** ≈ énergie / puissance : de quelques secondes (supercondensateur) à des heures ou des jours (batterie, barrage).
- **État de charge** : pourcentage d'énergie restante.
- **Rendement** = énergie rendue / énergie stockée sur un cycle charge-décharge. Batterie lithium : environ 90 % ; station de transfert d'énergie par pompage : environ 75 % ; hydrogène : 25 à 35 %.

### Le diagramme de Ragone
- Il place chaque stockeur selon son **énergie massique** (horizontal) et sa **puissance massique** (vertical), en échelles logarithmiques.
- Il montre le **compromis énergie-puissance** : un supercondensateur fournit beaucoup de puissance mais peu d'énergie ; une batterie stocke beaucoup d'énergie mais fournit moins de puissance par kilogramme.
- On associe souvent les deux (bus électrique : supercondensateurs pour les démarrages, batteries pour l'autonomie).

### Les familles de stockage
- **Chimique** : batteries (lithium-ion 150 à 250 Wh/kg ; plomb 30 à 40 Wh/kg), carburants, hydrogène. E = U × Q.
- **Électrostatique** : condensateur et **supercondensateur**, **E = ½ × C × U²**. 3 000 F sous 2,7 V : ½ × 3 000 × 2,7² ≈ 10 900 J, soit environ 3 Wh.
- **Mécanique** : **volant d'inertie**, **E = ½ × J × ω²** (J moment d'inertie en kg·m²). J = 10 kg·m² à 300 rad/s : 450 000 J, soit 0,125 kWh. Stockage gravitaire : barrage, station de pompage, **E = m × g × h**.
- **Thermique** : ballon d'eau chaude (Q = m × c × ΔT), **matériaux à changement de phase** (module eutectique qui fond et se solidifie à température fixe), murs lourds, mur Trombe.

### Dimensionner une batterie
- Énergie utile nécessaire = puissance × durée d'autonomie.
- Énergie à installer = énergie utile / **profondeur de décharge** (par exemple 0,8) / rendement éventuel du convertisseur.
- Exemple : 500 W pendant 10 h = 5 kWh ; avec 80 % de décharge autorisée : 6,25 kWh à installer ; en 48 V : 6 250 / 48 ≈ 130 A·h.
- Le **C-rate** indique la vitesse de charge : 1C décharge la batterie en 1 h, 0,5C en 2 h.

### À retenir pour le bac
- Capacité (Wh), puissance (W), énergie et puissance massiques, constante de temps, rendement.
- Ragone : supercondensateur = puissance ; batterie = énergie.
- E = ½ × C × U² ; E = ½ × J × ω² ; E = m × g × h ; E = U × Q.
- Énergie à installer = énergie utile / profondeur de décharge.
- Piège : 1 Wh = 3 600 J.`,
      cartes: [
        { q: "Capacité énergétique d'un stockeur ?", r: "L'énergie qu'il peut contenir, en Wh ou kWh." },
        { q: "Énergie massique et puissance massique ?", r: "Énergie (Wh/kg) et puissance (W/kg) rapportées à la masse." },
        { q: "Constante de temps d'un stockeur ?", r: "Environ énergie / puissance : la durée d'une charge ou décharge complète." },
        { q: "Rendement d'un stockeur ?", r: "Énergie rendue / énergie stockée sur un cycle." },
        { q: "Diagramme de Ragone ?", r: "Énergie massique en abscisse, puissance massique en ordonnée : le compromis énergie-puissance." },
        { q: "Supercondensateur ou batterie ?", r: "Supercondensateur : beaucoup de puissance, peu d'énergie. Batterie : beaucoup d'énergie, moins de puissance." },
        { q: "Énergie d'un condensateur ?", r: "E = ½ × C × U²." },
        { q: "Énergie d'un volant d'inertie ?", r: "E = ½ × J × ω²." },
        { q: "Énergie stockée par gravité ?", r: "E = m × g × h." },
        { q: "Qu'est-ce qu'un matériau à changement de phase ?", r: "Un matériau qui stocke ou rend de la chaleur en fondant ou en se solidifiant, à température fixe." },
        { q: "Énergie massique d'une batterie lithium-ion ?", r: "Environ 150 à 250 Wh/kg." },
        { q: "Énergie à installer pour une batterie ?", r: "Énergie utile / profondeur de décharge (et rendement du convertisseur)." },
        { q: "Signification de 1C ?", r: "Un courant qui charge ou décharge la batterie en une heure." },
      ],
      quiz: [
        { q: "Sur un diagramme de Ragone, le supercondensateur se distingue par :", choix: ["un rendement très faible", "une forte énergie massique", "une forte puissance massique", "une durée de décharge de plusieurs jours"], bonne: 2, expl: "Il se vide en quelques secondes, mais avec beaucoup de puissance.", niv: 1 },
        { q: "Supercondensateur de 3 000 F sous 2,7 V. Énergie stockée, environ ?", choix: ["4 050 J", "10 900 J", "21 870 J", "8 100 J"], bonne: 1, expl: "½ × 3 000 × 2,7² ≈ 10 935 J. 21 870 J oublie le ½.", niv: 2 },
        { q: "Volant d'inertie : J = 10 kg·m², ω = 300 rad/s. Énergie stockée ?", choix: ["3 kJ", "45 kJ", "1,5 kJ", "450 kJ"], bonne: 3, expl: "½ × 10 × 300² = 450 000 J.", niv: 2 },
        { q: "Une station de transfert d'énergie par pompage stocke l'énergie sous forme :", choix: ["mécanique gravitaire", "chimique", "électrostatique", "thermique"], bonne: 0, expl: "L'eau est remontée dans un bassin en hauteur.", niv: 1 },
        { q: "Besoin : 500 W pendant 10 h ; profondeur de décharge 80 %. Énergie de batterie à installer ?", choix: ["6,25 kWh", "4 kWh", "5 kWh", "50 kWh"], bonne: 0, expl: "500 × 10 = 5 kWh utiles ; 5 / 0,8 = 6,25 kWh.", niv: 2 },
        { q: "Batterie : 10 kWh stockés en charge, 9 kWh rendus en décharge. Rendement du cycle ?", choix: ["10 %", "81 %", "90 %", "1 %"], bonne: 2, expl: "9 / 10 = 0,9.", niv: 3 },
        { q: "L'énergie d'un condensateur s'écrit :", choix: ["E = C × U", "E = ½ × C × U²", "E = ½ × m × v²", "E = U × I"], bonne: 1, expl: "C × U est la charge électrique, pas l'énergie.", niv: 1 },
        { q: "Une batterie de 100 A·h déchargée à 0,5C fournit un courant de :", choix: ["100 A", "200 A", "0,5 A", "50 A"], bonne: 3, expl: "0,5 × 100 = 50 A : elle se vide en 2 heures.", niv: 2 },
        { q: "Pourquoi un bus électrique associe-t-il supercondensateurs et batteries ?", choix: ["Cela supprime le freinage", "Les supercondensateurs stockent plus d'énergie", "Les batteries se chargent en une seconde", "Les uns donnent la puissance, les autres l'énergie"], bonne: 3, expl: "Démarrages et freinages sollicitent la puissance ; l'autonomie demande de l'énergie.", niv: 3 },
        { q: "Un module eutectique stocke la chaleur grâce à :", choix: ["sa charge électrique", "son changement de phase", "sa vitesse de rotation", "la hauteur où il est placé"], bonne: 1, expl: "Il fond en absorbant de la chaleur et se solidifie en la rendant.", niv: 2 },
        { q: "Parmi ces stockages, le meilleur rendement de cycle est souvent celui :", choix: ["d'un ballon d'eau chaude laissé une semaine", "de l'hydrogène", "d'une batterie lithium-ion", "d'un carburant brûlé dans un moteur"], bonne: 2, expl: "Environ 90 %, contre 25 à 35 % pour la chaîne hydrogène.", niv: 1 },
        { q: "Il faut 6 250 Wh de batterie sous 48 V. Capacité en A·h, environ ?", choix: ["130 A·h", "1,3 A·h", "48 A·h", "13 A·h"], bonne: 0, expl: "6 250 / 48 ≈ 130 A·h.", niv: 3 },
      ] },
    { chapitre: 'sti2d-ee-9',
      fiche: `## Réseaux d'énergie et autoconsommation

### Le système électrique
- **Production** centralisée (grandes centrales) et **décentralisée** (toits solaires, éoliennes, méthaniseurs, cogénération).
- **Transport** en très haute tension (225 000 à 400 000 V) pour limiter les pertes ; **distribution** en moyenne tension (20 000 V) puis basse tension (230/400 V) à travers des **postes de transformation**.
- À chaque instant, **production = consommation** ; sinon, la fréquence s'écarte de 50 Hz. Les sources pilotables, le stockage et l'**effacement** (couper ou décaler des consommations) assurent l'équilibre.
- **Pointe de consommation** : le soir en hiver, quand chauffage, cuisson et éclairage s'additionnent.

### L'autoconsommation
- Un bâtiment qui produit son électricité (photovoltaïque) en consomme une partie sur place et injecte le surplus dans le réseau.
- **Taux d'autoconsommation** = énergie produite consommée sur place / **énergie produite**.
- **Taux d'autoproduction** (ou de couverture) = énergie produite consommée sur place / **énergie consommée**.
- Exemple : production 5 000 kWh, dont 3 000 consommés sur place ; consommation totale 8 000 kWh. Autoconsommation : 3 000 / 5 000 = 60 %. Autoproduction : 3 000 / 8 000 = 37,5 %.
- Pour augmenter l'autoconsommation : faire fonctionner chauffe-eau, lave-linge ou recharge du véhicule **en journée**, ajouter une batterie, piloter les appareils.
- **Autoconsommation collective** : plusieurs voisins se partagent la production d'une même installation.

### Les réseaux intelligents
- Des **compteurs communicants**, des capteurs et des automates échangent des informations pour adapter production, stockage et consommation.
- Exemples : charge des véhicules électriques aux heures creuses ou quand le soleil produit, pilotage des chauffe-eau, bornes qui renvoient de l'énergie au réseau (charge bidirectionnelle).
- **Micro-réseau** : un quartier ou un site capable de fonctionner en partie seul, avec sa production et son stockage.

### Les réseaux de chaleur
- Une chaufferie centrale (bois, géothermie, récupération de chaleur d'une usine ou d'un incinérateur) distribue de l'eau chaude à plusieurs bâtiments par des tuyaux isolés.
- Avantages : sources renouvelables ou de récupération, rendement élevé, entretien centralisé. Inconvénient : pertes dans les tuyaux, investissement.
- **Cogénération** : une même machine produit électricité et chaleur ; le rendement global peut dépasser 80 %.

### Le coût de l'énergie
- Facture = abonnement (selon la puissance souscrite en kVA) + énergie consommée × prix du kWh, avec parfois des **heures pleines et heures creuses**.
- Exemple : 3 000 kWh à 0,25 € : 750 € par an hors abonnement.

### À retenir pour le bac
- Production = consommation à chaque instant ; effacement et stockage aident à l'équilibre.
- Autoconsommation : divisé par la production ; autoproduction : divisé par la consommation.
- Réseau intelligent : compteurs et pilotage ; micro-réseau ; réseau de chaleur.
- Cogénération : électricité et chaleur ensemble.
- Piège : ne pas inverser les deux taux.`,
      cartes: [
        { q: "Pourquoi transporter en très haute tension ?", r: "Le courant est plus faible à puissance égale, donc les pertes aussi." },
        { q: "Condition d'équilibre du réseau ?", r: "Production = consommation à chaque instant, sinon la fréquence s'écarte de 50 Hz." },
        { q: "Qu'est-ce que l'effacement ?", r: "Couper ou décaler une consommation pour soulager le réseau aux moments tendus." },
        { q: "Taux d'autoconsommation ?", r: "Énergie produite consommée sur place / énergie produite." },
        { q: "Taux d'autoproduction ?", r: "Énergie produite consommée sur place / énergie consommée." },
        { q: "Comment augmenter l'autoconsommation ?", r: "Décaler les usages en journée, ajouter une batterie, piloter les appareils." },
        { q: "Autoconsommation collective ?", r: "Plusieurs consommateurs voisins se partagent la production d'une installation." },
        { q: "Qu'est-ce qu'un réseau intelligent ?", r: "Un réseau où compteurs, capteurs et automates adaptent production, stockage et consommation." },
        { q: "Qu'est-ce qu'un micro-réseau ?", r: "Un site ou un quartier capable de fonctionner en partie seul avec sa production et son stockage." },
        { q: "Réseau de chaleur ?", r: "Une chaufferie centrale qui distribue de l'eau chaude à plusieurs bâtiments par des tuyaux isolés." },
        { q: "Cogénération ?", r: "La production simultanée d'électricité et de chaleur, avec un rendement global élevé." },
        { q: "Composition d'une facture d'électricité ?", r: "Abonnement selon la puissance souscrite + énergie consommée × prix du kWh." },
        { q: "Moment de la pointe de consommation en France ?", r: "Le soir en hiver." },
      ],
      quiz: [
        { q: "Le taux d'autoconsommation se calcule en divisant l'énergie consommée sur place par :", choix: ["l'énergie consommée", "l'énergie produite", "la puissance crête", "le prix du kWh"], bonne: 1, expl: "En divisant par l'énergie consommée, on obtient le taux d'autoproduction.", niv: 1 },
        { q: "Production 5 000 kWh, dont 3 000 consommés sur place. Taux d'autoconsommation ?", choix: ["40 %", "37,5 %", "167 %", "60 %"], bonne: 3, expl: "3 000 / 5 000 = 0,6.", niv: 2 },
        { q: "Même maison : consommation totale 8 000 kWh. Taux d'autoproduction ?", choix: ["37,5 %", "60 %", "62,5 %", "267 %"], bonne: 0, expl: "3 000 / 8 000 = 0,375.", niv: 2 },
        { q: "Si la consommation dépasse la production, la fréquence du réseau :", choix: ["reste à 50 Hz quoi qu'il arrive", "monte", "baisse", "double"], bonne: 2, expl: "Les alternateurs ralentissent légèrement : il faut produire plus ou effacer.", niv: 1 },
        { q: "Pour augmenter l'autoconsommation d'une maison solaire, on peut :", choix: ["tout injecter dans le réseau", "lancer le lave-linge la nuit", "réduire la surface de panneaux à zéro", "faire chauffer l'eau en milieu de journée"], bonne: 3, expl: "On consomme quand les panneaux produisent.", niv: 2 },
        { q: "3 000 kWh consommés à 0,25 € le kWh, abonnement 150 €. Facture annuelle ?", choix: ["750 €", "900 €", "450 €", "600 €"], bonne: 1, expl: "3 000 × 0,25 + 150 = 900 €.", niv: 3 },
        { q: "Une machine qui produit en même temps électricité et chaleur réalise :", choix: ["de l'autoconsommation", "de l'effacement", "de la cogénération", "de la méthanisation"], bonne: 2, expl: "Son rendement global peut dépasser 80 %.", niv: 1 },
        { q: "Couper les chauffe-eau d'un quartier pendant la pointe du soir, c'est :", choix: ["de l'effacement", "de la cogénération", "de la production décentralisée", "du transport d'énergie"], bonne: 0, expl: "On décale une consommation pour équilibrer le réseau.", niv: 2 },
        { q: "Une maison produit 4 000 kWh ; elle autoconsomme 50 % de sa production. Énergie injectée dans le réseau ?", choix: ["8 000 kWh", "4 000 kWh", "2 000 kWh", "1 000 kWh"], bonne: 2, expl: "La moitié de la production part dans le réseau.", niv: 3 },
        { q: "L'intérêt principal d'un réseau de chaleur alimenté par une chaufferie bois est :", choix: ["de chauffer plusieurs bâtiments avec une source renouvelable", "de supprimer les tuyaux", "de produire de l'électricité sans chaleur", "de fonctionner sans combustible"], bonne: 0, expl: "La chaufferie centrale a un bon rendement et un entretien regroupé.", niv: 2 },
        { q: "En France, la pointe de consommation électrique a lieu surtout :", choix: ["le matin en août", "la nuit en été", "à midi au printemps", "le soir en hiver"], bonne: 3, expl: "Chauffage, cuisson et éclairage s'additionnent.", niv: 1 },
        { q: "Une borne de recharge bidirectionnelle permet surtout :", choix: ["de recharger deux fois plus vite", "de renvoyer l'énergie de la voiture vers le réseau", "de supprimer l'onduleur", "de fonctionner sans compteur"], bonne: 1, expl: "La batterie de la voiture devient un stockage utile au réseau.", niv: 3 },
      ] },
    { chapitre: 'sti2d-ee-10',
      fiche: `## Gestion et pilotage de l'énergie

La chaîne d'information sert à consommer moins : elle mesure, décide et commande les modulateurs au bon moment.

### Mesurer
- Capteurs fréquents en EE : **température** (sonde, thermocouple), **niveau** (capteur à ultrasons, flotteur), **débit**, **pression**, **courant** et **puissance** (compteur d'énergie), **présence**, **luminosité**, **CO2**.
- Beaucoup de capteurs industriels fournissent un signal **0-10 V** ou **4-20 mA** proportionnel à la grandeur. Exemple : 0-10 V pour 0-10 m de hauteur d'eau : 6,5 V correspondent à 6,5 m.
- Un signal 4-20 mA pour 0-100 °C : 12 mA correspondent à 50 °C (4 mA = 0 °C ; la plage utile est 16 mA). Le 4 mA à zéro permet de détecter un fil coupé.

### Commander
- **Tout ou rien** : marche ou arrêt d'une pompe, d'un chauffage, avec des **seuils** (par exemple marche au-dessus d'un niveau haut, arrêt sous un niveau bas). L'écart entre les deux seuils évite les marches-arrêts trop rapprochés.
- **Commande variable** : une consigne analogique (0-10 V) envoyée à un variateur. Si le débit est proportionnel à la consigne et vaut 3 000 m³/h à 10 V, une consigne de 6 V donne 1 800 m³/h.
- On compare souvent les deux : le TOR est simple et peu cher ; la commande variable adapte le débit au besoin, réduit les à-coups et l'énergie consommée.

### Décrire le fonctionnement
- **Diagramme d'états** : les états (une pompe, deux pompes, arrêt) et les conditions de passage (seuils de niveau).
- **Algorigramme** ou **pseudo-programme** : lecture du capteur, tests, calcul de la consigne. Exemple : SI hauteur ≤ 5 m ALORS consigne PA = hauteur × 2 SINON consigne PA = 10.
- Rotation des pompes : alterner la pompe de tête pour répartir l'usure, et garder une pompe de **secours**.

### Réguler le chauffage
- **Régulation par loi d'eau** : la température de départ de l'eau de chauffage dépend de la **température extérieure** (plus il fait froid, plus l'eau est chaude).
- **Programmation horaire** : réduire la consigne la nuit et en cas d'absence ; **détection de présence** et d'ouverture de fenêtre.
- **Robinets thermostatiques** : régulation pièce par pièce.

### La gestion technique du bâtiment
- La **GTB** (gestion technique du bâtiment) centralise mesures, alarmes et commandes : chauffage, ventilation, éclairage, consommation par usage.
- Le **suivi des consommations** (sous-comptage) repère les dérives et vérifie les économies après des travaux.
- Les **objets connectés** communiquent par réseau filaire ou sans fil ; ils consomment eux-mêmes un peu d'énergie.

### À retenir pour le bac
- Signal proportionnel : grandeur = (signal - début de plage) / plage du signal × étendue de mesure.
- TOR avec deux seuils ; commande variable par consigne 0-10 V.
- Diagramme d'états et pseudo-programme pour décrire le pilotage.
- Loi d'eau, programmation horaire, GTB, sous-comptage.
- Piège : en 4-20 mA, le zéro de la grandeur correspond à 4 mA, pas à 0 mA.`,
      cartes: [
        { q: "Signal 0-10 V pour 0-10 m : que vaut 6,5 V ?", r: "6,5 m." },
        { q: "Signal 4-20 mA pour 0-100 °C : que vaut 12 mA ?", r: "50 °C : (12 - 4) / 16 × 100." },
        { q: "Intérêt du 4 mA au zéro ?", r: "Détecter une coupure de fil : 0 mA signale un défaut." },
        { q: "Commande tout ou rien d'une pompe ?", r: "Marche au-dessus d'un seuil haut, arrêt sous un seuil bas." },
        { q: "Pourquoi deux seuils différents ?", r: "Pour éviter des marches et arrêts trop rapprochés." },
        { q: "Commande variable ?", r: "Une consigne analogique (souvent 0-10 V) envoyée à un variateur." },
        { q: "TOR ou commande variable ?", r: "TOR : simple et peu cher. Variable : débit adapté, moins d'à-coups, moins d'énergie." },
        { q: "Diagramme d'états ?", r: "Les états du système et les conditions qui font passer de l'un à l'autre." },
        { q: "Pourquoi alterner les pompes ?", r: "Répartir l'usure et vérifier que la pompe de secours fonctionne." },
        { q: "Régulation par loi d'eau ?", r: "La température de départ de l'eau de chauffage dépend de la température extérieure." },
        { q: "Qu'est-ce que la GTB ?", r: "La gestion technique du bâtiment : mesures, alarmes et commandes centralisées." },
        { q: "Intérêt du sous-comptage ?", r: "Suivre la consommation par usage, repérer les dérives et vérifier les économies." },
        { q: "Rôle d'un robinet thermostatique ?", r: "Réguler la température pièce par pièce." },
      ],
      quiz: [
        { q: "Un capteur de niveau fournit 0-10 V pour 0-10 m. Il donne 6,5 V. Hauteur d'eau ?", choix: ["6,5 m", "0,65 m", "0,065 m", "3,5 m"], bonne: 0, expl: "1 V par mètre.", niv: 1 },
        { q: "Capteur 4-20 mA pour 0-100 °C. Il donne 12 mA. Température ?", choix: ["12 °C", "60 °C", "50 °C", "75 °C"], bonne: 2, expl: "(12 - 4) / 16 × 100 = 50 °C. 60 °C oublie le décalage de 4 mA.", niv: 2 },
        { q: "Débit proportionnel à la consigne : 3 000 m³/h à 10 V. Débit pour 6 V ?", choix: ["1 200 m³/h", "180 m³/h", "600 m³/h", "1 800 m³/h"], bonne: 3, expl: "3 000 × 6 / 10 = 1 800 m³/h.", niv: 2 },
        { q: "Une pompe démarre au-dessus d'un niveau haut et s'arrête sous un niveau bas. C'est une commande :", choix: ["à vitesse variable", "tout ou rien", "en boucle ouverte sans capteur", "proportionnelle"], bonne: 1, expl: "La pompe est soit en marche, soit à l'arrêt.", niv: 1 },
        { q: "Pourquoi un signal 4-20 mA plutôt que 0-20 mA ?", choix: ["Pour mesurer des températures négatives", "Pour consommer plus d'énergie", "Pour détecter une coupure du fil", "Pour doubler la précision"], bonne: 2, expl: "Un courant nul signale un défaut au lieu d'une mesure de zéro.", niv: 2 },
        { q: "Pseudo-programme : SI h ≤ 5 ALORS c = 2 × h SINON c = 10. Pour h = 3,5 m, consigne c ?", choix: ["1,75 V", "10 V", "3,5 V", "7 V"], bonne: 3, expl: "3,5 ≤ 5, donc c = 2 × 3,5 = 7 V.", niv: 3 },
        { q: "La régulation par loi d'eau règle la température de l'eau de chauffage selon :", choix: ["la température extérieure", "l'heure de la journée", "la pression du réseau d'eau", "le prix de l'électricité"], bonne: 0, expl: "Plus il fait froid dehors, plus l'eau de départ est chaude.", niv: 1 },
        { q: "Avantage d'une commande par variateur par rapport au tout ou rien pour une pompe ?", choix: ["Un matériel moins cher", "Un débit adapté au besoin et moins d'énergie", "Un câblage sans capteur", "Une pompe plus puissante"], bonne: 1, expl: "La pompe tourne juste à la vitesse utile ; le TOR reste plus simple et moins cher.", niv: 2 },
        { q: "Pourquoi alterner la pompe qui démarre en premier dans une station de relevage ?", choix: ["Pour augmenter la hauteur de relevage", "Pour répartir l'usure entre les pompes", "Pour réduire le débit de pointe", "Pour couper la pompe de secours"], bonne: 1, expl: "On vérifie aussi que chaque pompe reste prête à servir.", niv: 3 },
        { q: "Le sous-comptage de l'énergie dans un bâtiment sert à :", choix: ["suivre la consommation de chaque usage", "produire de l'électricité", "remplacer le compteur du fournisseur", "augmenter la puissance souscrite"], bonne: 0, expl: "On repère les dérives et on vérifie les économies.", niv: 2 },
        { q: "Pour décrire les passages entre « arrêt », « une pompe » et « deux pompes », on utilise :", choix: ["une plaque signalétique", "un diagramme de Ragone", "un diagramme de Sankey", "un diagramme d'états"], bonne: 3, expl: "Chaque transition est liée à un seuil de niveau.", niv: 1 },
        { q: "Chauffage d'un bureau : 21 °C le jour, 16 °C la nuit et le week-end. Ce réglage relève :", choix: ["de l'autoconsommation", "de la loi d'eau", "de la programmation horaire", "du facteur de puissance"], bonne: 2, expl: "On réduit la consigne quand le bâtiment est vide.", niv: 3 },
      ] },
  ],

  methode: [
    { id: 'sti2d-ee-m1', mat: 'sti2d-ee', titre: "Choisir une pompe : puissance, rendement et couplage",
      formules: ["Compléter la chaîne de puissance en indiquant la nature des flux d'énergie, les grandeurs flux et effort", "Calculer la puissance hydraulique d'une pompe", "Vérifier la compatibilité de la pompe au débit demandé", "Déterminer le rendement global de la motopompe et la puissance électrique absorbée", "Donner, en le justifiant, le couplage à réaliser"],
      vu: ["Métropole 2025, sujet sur une station d'épuration, partie spécifique EE : questions A.1 à A.7 (pompes de relevage)", "Fréquent dès qu'un sujet EE porte sur l'eau, le chauffage ou la ventilation"], pts: "2 à 3 points",
      attendu: "Les natures d'énergie et les couples effort-flux (tension-courant, couple-vitesse angulaire, pression-débit) avec unités, la puissance hydraulique PH = ρ × g × Q × HMT avec Q en m³/s, le rendement global produit des rendements, la puissance électrique, puis le couplage en parallèle (débits additionnés) ou en série (hauteurs additionnées) justifié.",
      etapes: ["Nommer chaque énergie le long de la chaîne et ses grandeurs effort et flux", "Convertir le débit en m³/s", "Calculer PH = ρ × g × Q × HMT", "Multiplier les rendements du moteur et de la pompe, puis diviser PH par ce rendement", "Choisir le couplage selon le besoin : plus de débit en parallèle, plus de hauteur en série"],
      mots: ["puissance hydraulique", "débit volumique", "hauteur manométrique totale", "pertes de charge", "rendement global", "couplage en parallèle", "pompe de secours"],
      pieges: ["Laisser le débit en m³/h", "Oublier les pertes de charge dans la HMT", "Additionner les rendements", "Monter en série deux pompes alors que c'est le débit qu'il faut doubler"],
      cas: "Une station de relevage fictive doit évacuer 4 000 m³/h aux heures de pointe. Chaque pompe fournit 2 000 m³/h sous une HMT de 12 m. Rendements : moteur 0,93 ; pompe 0,78. On prend ρ = 1 000 kg/m³ et g = 9,81 m/s².",
      question: "Calculer la puissance hydraulique et la puissance électrique d'une pompe, puis choisir le couplage pour l'heure de pointe.",
      modele: `Débit d'une pompe : 2 000 / 3 600 ≈ 0,556 m³/s.

Puissance hydraulique : PH = 1 000 × 9,81 × 0,556 × 12 ≈ 65,4 kW.

Rendement global : 0,93 × 0,78 ≈ 0,725. Puissance électrique absorbée : 65,4 / 0,725 ≈ 90,2 kW.

Couplage : il faut doubler le débit à hauteur égale, donc monter deux pompes en parallèle (les débits s'additionnent : 2 × 2 000 = 4 000 m³/h). Une troisième pompe peut rester en secours.`,
      grille: ["Le débit est converti en m³/s", "La puissance hydraulique est juste", "Le rendement global et la puissance électrique sont justes", "Le couplage est choisi et justifié"] },

    { id: 'sti2d-ee-m2', mat: 'sti2d-ee', titre: "Choisir un modulateur et justifier un variateur",
      formules: ["Choisir le nom du modulateur parmi : hacheur, redresseur, onduleur, gradateur", "Indiquer la nature de l'énergie entrante et sortante", "Compléter la structure du variateur en indiquant le nom des modulateurs", "Donner deux avantages d'un démarreur progressif", "Conclure sur l'avantage d'un variateur de vitesse"],
      vu: ["Métropole 2025, sujet sur une station d'épuration, partie spécifique EE : questions B.1 à B.8", "Régulier dans les sujets EE sur les moteurs, les pompes et les ventilateurs"], pts: "1 à 3 points",
      attendu: "Le bon modulateur avec la nature de l'énergie en entrée et en sortie (alternatif fixe, alternatif réglable, continu), la structure redresseur puis onduleur d'un variateur, et une conclusion énergétique chiffrée quand c'est possible (puissance en cube de la vitesse).",
      etapes: ["Repérer la forme de l'énergie à l'entrée et celle voulue à la sortie", "En déduire le modulateur : alternatif vers alternatif réglable = gradateur ; alternatif vers continu = redresseur ; continu vers alternatif = onduleur ; continu vers continu = hacheur", "Pour un variateur de fréquence : redresseur, bus continu, onduleur", "Citer les avantages : démarrage sans pic de courant, moins de contraintes mécaniques, vitesse adaptée au besoin", "Chiffrer l'économie avec la loi en cube si une vitesse réduite est donnée"],
      mots: ["gradateur", "redresseur", "onduleur", "hacheur", "démarreur progressif", "variateur de fréquence", "rampe d'accélération", "loi en cube"],
      pieges: ["Confondre démarreur progressif (vitesse fixe) et variateur (vitesse réglable)", "Inverser redresseur et onduleur", "Dire qu'un variateur améliore le rendement du moteur au lieu de réduire la puissance demandée", "Oublier les symboles d'énergie demandés"],
      cas: "Un ventilateur fictif de 30 kW tourne 4 000 h par an. Avec un variateur, on peut le faire tourner à 70 % de sa vitesse pendant 3 000 h de ces 4 000 h.",
      question: "Nommer les modulateurs du variateur, puis estimer l'énergie économisée par an grâce au variateur.",
      modele: `Le variateur contient un redresseur (alternatif du réseau vers continu) puis un onduleur (continu vers alternatif de tension et de fréquence réglables).

À 70 % de la vitesse, la puissance vaut environ 0,7³ ≈ 0,34 fois la puissance nominale, soit 30 × 0,34 ≈ 10,3 kW.

Sans variateur : 30 × 4 000 = 120 000 kWh. Avec variateur : 30 × 1 000 + 10,3 × 3 000 ≈ 60 900 kWh.

Économie : environ 59 000 kWh par an, soit près de la moitié. Le variateur évite aussi les pics de courant au démarrage.`,
      grille: ["Les modulateurs et les natures d'énergie sont justes", "La loi en cube est appliquée", "Les deux consommations sont calculées", "La conclusion est chiffrée"] },

    { id: 'sti2d-ee-m3', mat: 'sti2d-ee', titre: "Piloter des pompes par seuils ou par consigne variable",
      formules: ["Compléter le diagramme d'état simplifié", "Pour une hauteur d'eau donnée, donner les débits des pompes et les valeurs des consignes", "Compléter le pseudo-programme qui calcule les consignes", "Conclure sur les avantages et les inconvénients des deux solutions"],
      vu: ["Métropole 2025, sujet sur une station d'épuration, partie spécifique EE : questions C.1 à C.6", "Fréquent : gestion d'une chaufferie, d'une ventilation, d'une pompe solaire"], pts: "2 à 3 points",
      attendu: "Un diagramme d'états cohérent avec les seuils de l'énoncé ; des consignes calculées par proportionnalité (signal 0-10 V proportionnel au débit) ; un pseudo-programme avec les bons tests ; une comparaison équilibrée : le tout ou rien est simple et peu cher, la consigne variable adapte le débit et économise l'énergie.",
      etapes: ["Lister les états et les seuils qui font passer de l'un à l'autre", "Traduire chaque grandeur en signal : consigne = débit voulu / débit maximal × 10 V", "Écrire le pseudo-programme : lecture du capteur, SI … ALORS … SINON, calcul des consignes", "Tester le programme sur les valeurs de l'énoncé", "Comparer coût, simplicité, confort, usure et énergie"],
      mots: ["tout ou rien", "seuil", "diagramme d'états", "consigne 0-10 V", "proportionnel", "pseudo-programme", "variateur"],
      pieges: ["Oublier une transition retour (arrêt de la deuxième pompe)", "Calculer une consigne supérieure à 10 V", "Inverser les tests du pseudo-programme", "Conclure en ne citant que les avantages d'une solution"],
      cas: "Deux pompes fictives PA et PB, de 3 000 m³/h chacune au maximum, commandées par des consignes 0-10 V proportionnelles au débit. Un capteur donne la hauteur d'eau h de 0 à 10 m. PA suit le niveau entre 0 et 5 m (débit = h / 5 × 3 000) et reste au maximum au-dessus ; PB est arrêtée sous 5 m et suit le niveau entre 5 et 10 m (débit = (h - 5) / 5 × 3 000).",
      question: "Pour h = 3 m puis h = 7 m, donner les débits et les consignes de PA et PB, puis écrire le pseudo-programme.",
      modele: `h = 3 m : PA = 3 / 5 × 3 000 = 1 800 m³/h, consigne 6 V ; PB arrêtée, consigne 0 V.

h = 7 m : PA au maximum, 3 000 m³/h, consigne 10 V ; PB = 2 / 5 × 3 000 = 1 200 m³/h, consigne 4 V.

Pseudo-programme :
lire h
SI h ≤ 5 ALORS ConsPA = 2 × h ; ConsPB = 0
SINON ConsPA = 10 ; ConsPB = 2 × (h - 5)
FIN SI

Conclusion : la consigne variable suit le besoin sans à-coups et réduit l'énergie, mais elle demande deux variateurs et un capteur continu, plus coûteux qu'une commande par seuils.`,
      grille: ["Les débits sont justes", "Les consignes sont proportionnelles et ne dépassent pas 10 V", "Le pseudo-programme est juste", "La comparaison cite avantages et inconvénients"] },

    { id: 'sti2d-ee-m4', mat: 'sti2d-ee', titre: "Calculer des déperditions et le gain d'une isolation",
      formules: ["Calculer la résistance thermique de la paroi", "En déduire le coefficient U", "Calculer les déperditions de la paroi", "Calculer l'énergie économisée sur une saison de chauffe", "Conclure sur la pertinence de l'isolation"],
      vu: ["Fréquent dans les sujets EE et AC portant sur un bâtiment (gymnase, école, logement)"], pts: "1 à 3 points",
      attendu: "R = e / λ couche par couche avec e en mètres, la somme des résistances, U = 1 / R, puis Φ = U × S × ΔT, l'énergie sur une durée, et une comparaison avant-après chiffrée, parfois avec le temps de retour.",
      etapes: ["Convertir les épaisseurs en mètres", "Calculer R de chaque couche, puis les additionner", "Calculer U = 1 / R totale", "Calculer Φ = U × S × ΔT avant et après travaux", "Multiplier la différence par la durée de chauffe, puis conclure"],
      mots: ["conductivité thermique", "résistance thermique", "coefficient U", "déperditions", "pont thermique", "saison de chauffe"],
      pieges: ["Laisser l'épaisseur en centimètres", "Additionner les U au lieu des R", "Oublier de convertir les Wh en kWh", "Ne pas comparer avant et après"],
      cas: "Le mur fictif d'un gymnase : 300 m², U = 1,5 W/(m²·K) avant travaux. On ajoute 14 cm d'isolant (λ = 0,035 W/(m·K)). Écart moyen de température : 12 °C pendant 5 000 h de chauffe.",
      question: "Calculer U après travaux, les déperditions avant et après, puis l'énergie économisée.",
      modele: `R avant = 1 / 1,5 ≈ 0,67 m²·K/W. R isolant = 0,14 / 0,035 = 4 m²·K/W. R après ≈ 4,67, donc U après ≈ 0,21 W/(m²·K).

Avant : Φ = 1,5 × 300 × 12 = 5 400 W. Après : Φ = 0,21 × 300 × 12 ≈ 770 W.

Énergie économisée : (5 400 - 770) × 5 000 ≈ 23 150 000 Wh, soit environ 23 000 kWh par saison.

Conclusion : les pertes du mur sont divisées par environ 7 ; l'isolation est très pertinente.`,
      grille: ["Les résistances sont additionnées avec e en mètres", "U après travaux est juste", "Les deux déperditions sont justes", "L'énergie économisée est convertie en kWh et commentée"] },

    { id: 'sti2d-ee-m5', mat: 'sti2d-ee', titre: "Dimensionner une production solaire et son stockage",
      formules: ["Calculer la production annuelle de l'installation photovoltaïque", "Calculer les taux d'autoconsommation et d'autoproduction", "Déterminer la capacité de la batterie", "Conclure sur l'autonomie du site"],
      vu: ["Fréquent dans les sujets EE sur les bâtiments, les sites isolés et les bornes de recharge"], pts: "1 à 3 points",
      attendu: "La production = kWc × productible, les deux taux calculés avec le bon dénominateur, la capacité de batterie tenant compte de la profondeur de décharge et de la tension, et une conclusion qui compare à l'exigence d'autonomie.",
      etapes: ["Calculer la production annuelle : kWc × productible", "Autoconsommation = consommé sur place / produit ; autoproduction = consommé sur place / consommé", "Énergie utile du stockage = puissance × durée d'autonomie", "Énergie à installer = énergie utile / profondeur de décharge ; capacité = énergie / tension", "Comparer à l'exigence et conclure"],
      mots: ["puissance crête", "productible", "autoconsommation", "autoproduction", "profondeur de décharge", "capacité", "autonomie"],
      pieges: ["Inverser les deux taux", "Oublier la profondeur de décharge", "Confondre Wh et A·h", "Conclure sur la production annuelle alors que la question porte sur une nuit ou un jour sans soleil"],
      cas: "Un refuge de montagne fictif : 3 kWc de panneaux, productible 1 300 kWh par kWc et par an. Il consomme 4 500 kWh par an, dont 2 700 kWh pris directement sur la production. Il doit tenir 2 jours sans soleil avec une consommation de 4 kWh par jour ; batterie en 48 V, profondeur de décharge 80 %.",
      question: "Calculer la production, les deux taux, puis la capacité de batterie nécessaire.",
      modele: `Production : 3 × 1 300 = 3 900 kWh par an.

Autoconsommation : 2 700 / 3 900 ≈ 69 %. Autoproduction : 2 700 / 4 500 = 60 %.

Stockage : 2 × 4 = 8 kWh utiles ; 8 / 0,8 = 10 kWh à installer ; 10 000 / 48 ≈ 208 A·h.

Conclusion : une batterie d'environ 210 A·h sous 48 V assure les 2 jours d'autonomie demandés ; le reste du temps, il faut un complément pour couvrir les 40 % de consommation non produits sur place.`,
      grille: ["La production est juste", "Les deux taux ont le bon dénominateur", "La capacité tient compte de la profondeur de décharge et de la tension", "La conclusion répond à l'exigence"] },
  ],

  sujets: [
    { id: 'sti2d-ee-s1', matiere: 'sti2d-ee', titre: "Sujet d'entraînement EE : la piscine l'Ondine (fictive)", duree: 90,
      enonce: `Sujet d'entraînement inventé pour réviser : la piscine, la communauté de communes et tous les chiffres sont fictifs. Il a la forme de la partie spécifique EE de l'écrit (durée indicative environ 1 h 30). Il est noté ici sur 20, dont 2 points pour la maîtrise de la langue. On prend ρ = 1 000 kg/m³ et g = 9,81 m/s².

PRÉSENTATION

La piscine intercommunale l'Ondine consomme beaucoup d'énergie : pompes de filtration, chauffage de l'eau et de l'air, éclairage. La collectivité veut réduire sa facture et ses émissions. Problématique : comment diminuer la consommation de la piscine sans dégrader la qualité de l'eau et le confort ?

Extrait du cahier des charges :
- Exigence 1 : la filtration assure 180 m³/h le jour et au moins 100 m³/h la nuit (10 h par nuit).
- Exigence 2 : tout investissement doit être remboursé en moins de 5 ans.
- Exigence 3 : l'eau des bassins reste à 27 °C, à plus ou moins 0,5 °C.
- Exigence 4 : la production solaire couvre au moins 10 % de la consommation électrique annuelle.

PARTIE A — La filtration (5 points)

La pompe de filtration fournit 180 m³/h sous une HMT de 15 m. Rendements : moteur 0,9 ; pompe 0,7. Aujourd'hui, elle tourne à pleine vitesse jour et nuit.
A.1. Calculer la puissance hydraulique de la pompe, puis la puissance électrique absorbée.
A.2. On ajoute un variateur pour faire tourner la pompe à 60 % de sa vitesse la nuit. Calculer le débit de nuit et vérifier l'exigence 1.
A.3. En utilisant la loi en cube, calculer la puissance électrique la nuit (on néglige la variation des rendements).
A.4. Calculer l'énergie économisée par an (10 h par nuit, 365 nuits), puis l'économie en euros à 0,20 € le kWh.
A.5. Le variateur coûte 4 000 € posé. Conclure sur l'exigence 2.

PARTIE B — Le moteur et son variateur (3 points)

Plaque du moteur : 4 pôles, 400 V, 50 Hz, 1 460 tr/min, 15 kW.
B.1. Calculer la vitesse de synchronisme et le glissement nominal.
B.2. Quelle fréquence le variateur doit-il fournir pour la marche de nuit à 60 % de la vitesse ? En gardant U / f constant, quelle tension ?
B.3. Nommer les deux modulateurs qui composent le variateur et la nature de l'énergie à la sortie de chacun.

PARTIE C — Le chauffage (4 points)

En hiver, les bassins perdent en moyenne 60 kW de chaleur. Aujourd'hui, une chaudière gaz de rendement 0,9 compense ces pertes. On envisage une pompe à chaleur de COP 5.
C.1. Calculer la puissance de gaz consommée par la chaudière, puis la puissance électrique de la pompe à chaleur.
C.2. Le mur du hall, de 400 m², a un coefficient U = 1,5 W/(m²·K). Après isolation, U = 0,25 W/(m²·K). Pour un écart de 15 °C, calculer les déperditions avant et après, et le gain.
C.3. Expliquer en deux phrases pourquoi la pompe à chaleur est plus efficace avec une eau à 27 °C qu'avec des radiateurs à 70 °C.

PARTIE D — Pilotage et production solaire (6 points)

La température de l'eau est mesurée par un capteur 4-20 mA pour une plage de 0 à 40 °C. La pompe à chaleur est commandée en tout ou rien : marche sous 26,5 °C, arrêt au-dessus de 27,5 °C.
D.1. Le capteur fournit 15,2 mA. Calculer la température de l'eau. La pompe à chaleur est-elle en marche ?
D.2. Décrire le diagramme d'états de la pompe à chaleur (états et conditions de passage). Expliquer l'intérêt des deux seuils.
D.3. La piscine installe 36 kWc de panneaux ; productible 1 100 kWh par kWc et par an. Calculer la production annuelle.
D.4. La piscine consomme 250 000 kWh d'électricité par an ; 34 000 kWh de la production sont consommés sur place. Calculer les taux d'autoconsommation et d'autoproduction. Conclure sur l'exigence 4.
D.5. Proposer une solution pour augmenter le taux d'autoconsommation.

Maîtrise de la langue (2 points) : rédaction, orthographe, vocabulaire technique.`,
      corrige: `PARTIE A

A.1. Q = 180 / 3 600 = 0,05 m³/s. PH = 1 000 × 9,81 × 0,05 × 15 ≈ 7 360 W.
Rendement global : 0,9 × 0,7 = 0,63. Puissance électrique : 7 360 / 0,63 ≈ 11,7 kW.

A.2. Le débit varie comme la vitesse : 0,6 × 180 = 108 m³/h, au-dessus des 100 m³/h exigés la nuit : l'exigence 1 est respectée.

A.3. Puissance en cube de la vitesse : 0,6³ = 0,216. Puissance de nuit : 0,216 × 11,7 ≈ 2,5 kW.

A.4. Gain de puissance : 11,7 - 2,5 = 9,2 kW. Énergie économisée : 9,2 × 10 × 365 ≈ 33 600 kWh par an (le calcul exact donne environ 33 400 kWh). Économie : 33 400 × 0,20 ≈ 6 700 € par an.

A.5. Temps de retour : 4 000 / 6 700 ≈ 0,6 an, soit environ 7 mois, bien moins que 5 ans : l'exigence 2 est respectée.

PARTIE B

B.1. 4 pôles = 2 paires : ns = 60 × 50 / 2 = 1 500 tr/min. Glissement : (1 500 - 1 460) / 1 500 ≈ 2,7 %.

B.2. Fréquence : 0,6 × 50 = 30 Hz. Tension avec U / f constant : 400 × 30 / 50 = 240 V.

B.3. Un redresseur (sortie continue, le bus continu) puis un onduleur (sortie alternative triphasée de tension et de fréquence réglables).

PARTIE C

C.1. Chaudière : 60 / 0,9 ≈ 66,7 kW de gaz. Pompe à chaleur : 60 / 5 = 12 kW d'électricité.

C.2. Avant : 1,5 × 400 × 15 = 9 000 W. Après : 0,25 × 400 × 15 = 1 500 W. Gain : 7 500 W, les pertes du mur sont divisées par 6.

C.3. Le COP d'une pompe à chaleur baisse quand l'écart de température entre la source froide et l'eau chauffée augmente. Chauffer une eau à 27 °C demande un écart bien plus faible qu'à 70 °C, donc moins de travail du compresseur et un meilleur COP.

PARTIE D

D.1. Température : (15,2 - 4) / 16 × 40 = 28 °C. C'est au-dessus de 27,5 °C : la pompe à chaleur est à l'arrêt (et l'eau un peu trop chaude par rapport à l'exigence 3, la consigne est à vérifier).

D.2. Deux états : « PAC arrêtée » et « PAC en marche ». On passe de l'arrêt à la marche quand la température devient inférieure à 26,5 °C, et de la marche à l'arrêt quand elle dépasse 27,5 °C. L'écart entre les deux seuils évite des marches et arrêts trop fréquents qui useraient le compresseur.

D.3. Production : 36 × 1 100 = 39 600 kWh par an.

D.4. Autoconsommation : 34 000 / 39 600 ≈ 86 %. Autoproduction : 34 000 / 250 000 = 13,6 %. C'est plus que 10 % : l'exigence 4 est respectée.

D.5. Faire fonctionner en journée les usages qui peuvent être décalés (filtration à pleine vitesse, chauffage de l'eau sanitaire, préchauffage des bassins) pour consommer quand les panneaux produisent, ou ajouter un stockage (batterie ou stockage thermique dans l'eau des bassins).

Conclusion : le variateur, la pompe à chaleur, l'isolation et les panneaux réduisent fortement la consommation tout en respectant les exigences de débit, de température et de rentabilité.`,
      grille: [
        { c: "Partie A : puissances, débit de nuit, loi en cube, économie et temps de retour", pts: 5 },
        { c: "Partie B : vitesse de synchronisme, glissement, fréquence et tension, structure du variateur", pts: 3 },
        { c: "Partie C : chaudière et pompe à chaleur, déperditions, explication du COP", pts: 4 },
        { c: "Partie D : capteur 4-20 mA, diagramme d'états, production et taux, proposition", pts: 6 },
        { c: "Maîtrise de la langue : rédaction, orthographe, vocabulaire", pts: 2 },
      ] },
  ],
};
