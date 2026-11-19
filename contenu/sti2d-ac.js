// 2I2D, enseignement spécifique « architecture et construction » (AC) — terminale STI2D. Sources : voir matiere.sources.
// Programme : annexe IT, I2D et 2I2D du cycle terminal STI2D ; on ne garde ici que ce qui est propre à AC ou approfondi
// en AC : projet de construction et plans, accessibilité, actions et combinaisons, poutres et flexion, fondations,
// systèmes constructifs, thermique de l'enveloppe, humidité et air, acoustique, RE 2020 et impact carbone.
// Le tronc commun (développement durable, statique, bases de résistance des matériaux, énergie, réseaux) est dans sti2d-2i2d.js.
// Épreuve à partir de la session 2027 (note de service du 11 septembre 2026, BO spécial n° 4 du 17 septembre 2026) :
// la deuxième partie de l'écrit de 2I2D (3 h 30, coefficient 9) est un exercice propre à l'enseignement spécifique ;
// dans les sujets 2024 et 2025, elle valait 8 points sur 20. La partie pratique de 2 h (coefficient 7) porte sur AC.

export default {
  matiere: {
    id: 'sti2d-ac',
    nom: '2I2D : architecture et construction',
    voie: 'sti2d',
    epreuve: { type: 'ecrit', duree: 210, coef: 16, quand: 'juin', note: 'Partie spécifique AC de l\'écrit de 2I2D (3 h 30 au total, coefficient 9) : un exercice sur un bâtiment ou un ouvrage (stabilité, structure, confort, accessibilité, réglementation), environ 8 points sur 20 dans les sujets récents. La partie pratique de 2 h en laboratoire (coefficient 7) porte aussi sur AC.' },
    sources: [
      'https://www.education.gouv.fr/sites/default/files/document/bulletin-officiel-special-ndeg-4-du-17-septembre-2026-521113.pdf',
      'https://www.snes.edu/wp-content/uploads/sti2d_annexe-1_it_i2d_2i2d_bo.pdf',
      'https://www.freemaths.fr/sujets-du-bac/baccalaureat-technologique/sti2d/2i2d-architecture-construction/annees/annee-2025/metropole/sujet-1-et-correction/bac-2i2d-architecture-construction-metropole-2025-voie-technologique-sti2d-sujet-1.pdf',
      'https://www.freemaths.fr/sujets-du-bac/baccalaureat-technologique/sti2d/2i2d-architecture-construction/annees/annee-2025/polynesie/sujet-1-et-correction/bac-2i2d-architecture-construction-polynesie-2025-voie-technologique-sti2d-sujet-1.pdf',
      'https://www.freemaths.fr/sujets-du-bac/baccalaureat-technologique/sti2d/2i2d-architecture-construction/annees/annee-2024/polynesie/sujet-1-et-correction/bac-2i2d-architecture-construction-polynesie-2024-voie-technologique-sti2d-sujet-1.pdf',
    ],
    chapitres: [
      { id: 'sti2d-ac-1', t: 'Le projet de construction : acteurs, étapes et plans', theme: 'Concevoir' },
      { id: 'sti2d-ac-2', t: 'Accessibilité des personnes à mobilité réduite', theme: 'Concevoir' },
      { id: 'sti2d-ac-3', t: 'Actions, combinaisons et descente de charges', theme: 'Structure' },
      { id: 'sti2d-ac-4', t: 'Poutres : moment, contrainte et flèche', theme: 'Structure' },
      { id: 'sti2d-ac-5', t: 'Fondations et stabilité d\'un ouvrage', theme: 'Structure' },
      { id: 'sti2d-ac-6', t: 'Systèmes constructifs et matériaux de structure', theme: 'Structure' },
      { id: 'sti2d-ac-7', t: 'Thermique de l\'enveloppe', theme: 'Confort' },
      { id: 'sti2d-ac-8', t: 'Humidité, condensation et renouvellement d\'air', theme: 'Confort' },
      { id: 'sti2d-ac-9', t: 'Acoustique du bâtiment et de l\'environnement', theme: 'Confort' },
      { id: 'sti2d-ac-10', t: 'RE 2020, impact carbone et confort d\'été', theme: 'Réglementation' },
    ],
  },
  paquets: [
    { chapitre: 'sti2d-ac-1',
      fiche: `## Le projet de construction : acteurs, étapes et plans

En AC, le support est un bâtiment ou un ouvrage (pont, passerelle, fondation d'éolienne). Avant de calculer, il faut savoir qui décide, à quelle étape on se trouve et lire correctement les plans.

### Les acteurs
- **Maître d'ouvrage** : celui qui commande et paie l'ouvrage (une commune, une entreprise, un particulier). Il fixe le besoin et le budget.
- **Maître d'œuvre** : celui qui conçoit et suit le chantier pour le maître d'ouvrage, souvent un **architecte** avec des **bureaux d'études** (structure, thermique, fluides, acoustique).
- **Entreprises** : elles construisent (gros œuvre, second œuvre).
- **Bureau de contrôle** : il vérifie la solidité et la sécurité ; **coordonnateur SPS** : sécurité et santé sur le chantier.
- **Usagers** : ceux qui vivront ou travailleront dans le bâtiment ; leurs besoins guident le programme.

### Les étapes
- **Programme** : le maître d'ouvrage décrit ses besoins (surfaces, usages, budget, exigences).
- **Esquisse**, puis **avant-projet** (sommaire puis définitif) : on choisit la forme, la structure, les matériaux et on estime le coût.
- **Permis de construire** : l'autorisation d'urbanisme, qui doit respecter le **plan local d'urbanisme** (PLU) : hauteur, implantation, aspect.
- **Projet** et consultation des entreprises, puis **chantier**, **réception** des travaux et garanties (parfait achèvement 1 an, biennale 2 ans, décennale 10 ans).
- **Exploitation**, maintenance, puis rénovation ou déconstruction : c'est tout le **cycle de vie** de l'ouvrage.

### Lire un plan
- **Plan de masse** : le bâtiment sur sa parcelle (limites, accès, orientation). **Plan de niveau** : une coupe horizontale vue de dessus, environ 1 m au-dessus du sol. **Coupe** : une vue verticale qui montre les hauteurs et les planchers. **Façade** : la vue extérieure.
- **Échelle** = dimension sur le plan / dimension réelle. À 1/50, 1 cm sur le plan vaut 50 cm en vrai ; à 1/100, 1 cm vaut 1 m.
- Exemple : un mur de 6 m dessiné à 1/50 mesure 600 / 50 = 12 cm sur le plan.
- Pour trouver une échelle : on mesure une cote connue sur le plan. Une porte de 0,90 m qui mesure 1,8 cm donne 1,8 / 90 = 1/50.
- Les **cotes** sont en mètres ou en centimètres ; on lit la cote écrite plutôt que de mesurer quand elle existe.

### La maquette numérique
- Le **BIM** (modélisation des informations du bâtiment) : une maquette 3D partagée où chaque objet (mur, fenêtre, poutre) porte ses informations (matériau, résistance thermique, prix). Tous les acteurs y travaillent, ce qui limite les erreurs entre lots.
- Elle sert aussi à simuler : structure, thermique, éclairage, et à préparer la maintenance.

### À retenir pour le bac
- Maître d'ouvrage : commande et paie ; maître d'œuvre : conçoit et suit.
- Programme, esquisse, avant-projet, permis, projet, chantier, réception.
- Échelle = plan / réel ; 1/50 : 1 cm pour 50 cm.
- Plan de masse, plan de niveau, coupe, façade.
- Piège : convertir les unités avant de calculer une échelle (mètres et centimètres).`,
      cartes: [
        { q: "Rôle du maître d'ouvrage ?", r: "Commander et payer l'ouvrage, fixer le besoin et le budget." },
        { q: "Rôle du maître d'œuvre ?", r: "Concevoir l'ouvrage et suivre le chantier pour le maître d'ouvrage, souvent un architecte." },
        { q: "Rôle d'un bureau de contrôle ?", r: "Vérifier la solidité et la sécurité de l'ouvrage." },
        { q: "Qu'est-ce que le programme ?", r: "Le document où le maître d'ouvrage décrit ses besoins, ses surfaces, ses exigences et son budget." },
        { q: "Rôle du PLU ?", r: "Fixer les règles d'urbanisme locales : hauteur, implantation, aspect des constructions." },
        { q: "Garantie décennale ?", r: "Elle couvre pendant 10 ans les dommages qui touchent la solidité de l'ouvrage." },
        { q: "Plan de masse ?", r: "Le bâtiment sur sa parcelle, avec les limites, les accès et l'orientation." },
        { q: "Plan de niveau ?", r: "Une coupe horizontale vue de dessus, environ 1 m au-dessus du plancher." },
        { q: "Coupe d'un bâtiment ?", r: "Une vue verticale qui montre les hauteurs, les planchers et la toiture." },
        { q: "Définition de l'échelle ?", r: "Dimension sur le plan divisée par la dimension réelle, dans la même unité." },
        { q: "1 cm à l'échelle 1/50 ?", r: "50 cm en vrai." },
        { q: "Qu'est-ce que le BIM ?", r: "Une maquette numérique 3D partagée dont chaque objet porte ses informations techniques." },
        { q: "Cycle de vie d'un bâtiment ?", r: "Conception, construction, exploitation et maintenance, puis rénovation ou déconstruction." },
      ],
      quiz: [
        { q: "La commune qui commande et finance une médiathèque est :", choix: ["le maître d'œuvre", "le maître d'ouvrage", "le bureau de contrôle", "l'entreprise de gros œuvre"], bonne: 1, expl: "Le maître d'œuvre conçoit et suit le chantier pour elle.", niv: 1 },
        { q: "Un mur de 6 m est dessiné à l'échelle 1/50. Sa longueur sur le plan ?", choix: ["6 cm", "3 cm", "12 cm", "1,2 cm"], bonne: 2, expl: "600 cm / 50 = 12 cm.", niv: 2 },
        { q: "Sur un plan à 1/100, une pièce mesure 4,5 cm de long. Longueur réelle ?", choix: ["0,45 m", "45 cm", "45 m", "4,5 m"], bonne: 3, expl: "1 cm sur le plan vaut 1 m en vrai.", niv: 2 },
        { q: "La vue qui montre le bâtiment sur sa parcelle, avec ses accès, s'appelle :", choix: ["le plan de masse", "la coupe", "la façade", "le plan de niveau"], bonne: 0, expl: "La coupe montre les hauteurs, la façade la vue extérieure.", niv: 1 },
        { q: "Une porte de 0,90 m mesure 1,8 cm sur le plan. Échelle du plan ?", choix: ["1/100", "1/20", "1/50", "1/200"], bonne: 2, expl: "1,8 / 90 = 0,02 = 1/50.", niv: 2 },
        { q: "Un bâtiment prévu à 15 m de haut, alors que le PLU limite à 12 m. Conséquence ?", choix: ["Le permis de construire sera refusé sans modification", "Le bureau de contrôle peut l'accepter", "La garantie décennale couvre l'écart", "Il suffit de prévenir les voisins"], bonne: 0, expl: "Le permis doit respecter le PLU : il faut baisser la hauteur.", niv: 3 },
        { q: "L'architecte qui conçoit le projet et suit le chantier joue le rôle de :", choix: ["maître d'ouvrage", "maître d'œuvre", "usager", "coordonnateur SPS"], bonne: 1, expl: "Il agit pour le compte du maître d'ouvrage.", niv: 1 },
        { q: "Une fissure qui menace la solidité d'un mur apparaît 6 ans après la réception. Quelle garantie joue ?", choix: ["la garantie du fabricant de briques", "la garantie de parfait achèvement", "la garantie biennale", "la garantie décennale"], bonne: 3, expl: "La décennale couvre la solidité pendant 10 ans.", niv: 2 },
        { q: "Pourquoi une maquette BIM réduit-elle les erreurs entre les lots ?", choix: ["Elle calcule seule le prix de vente", "Elle remplace le permis de construire", "Elle supprime le besoin de bureau d'études", "Elle rassemble tous les acteurs sur une maquette à jour"], bonne: 3, expl: "Un conflit entre une gaine et une poutre se voit avant le chantier.", niv: 3 },
        { q: "Dans l'ordre, après l'esquisse vient :", choix: ["la réception", "l'avant-projet", "le chantier", "l'exploitation"], bonne: 1, expl: "Esquisse, avant-projet, permis, projet, chantier, réception.", niv: 2 },
        { q: "La vue verticale qui montre la hauteur des planchers s'appelle :", choix: ["une coupe", "un plan de masse", "un plan de niveau", "une façade"], bonne: 0, expl: "Le plan de niveau est une coupe horizontale.", niv: 1 },
        { q: "Une rampe de 8 m de long est dessinée à 1/200. Longueur sur le plan ?", choix: ["8 cm", "40 cm", "4 cm", "16 cm"], bonne: 2, expl: "800 cm / 200 = 4 cm.", niv: 3 },
      ] },
    { chapitre: 'sti2d-ac-2',
      fiche: `## Accessibilité des personnes à mobilité réduite

Un établissement recevant du public (ERP) et les logements neufs doivent être accessibles à tous : personnes en fauteuil roulant, personnes âgées, malvoyantes, malentendantes, parents avec poussette. Les sujets demandent de vérifier une rampe, une largeur ou un plan, à l'aide d'un extrait de la réglementation (arrêté du 20 avril 2017 pour les ERP neufs).

### Les cheminements
- **Largeur minimale** d'un cheminement extérieur ou d'un couloir : **1,20 m** (elle peut être réduite ponctuellement à 0,90 m sur une courte longueur).
- **Pente** : 5 % au plus en général. Une pente jusqu'à **8 %** est tolérée sur **2 m** au plus, et jusqu'à **10 %** sur **0,50 m** au plus.
- **Palier de repos** en haut et en bas de chaque rampe, et tous les **10 m** quand la pente atteint 4 % ou plus. Un palier est horizontal et mesure au moins 1,20 m de long.
- **Ressaut** (petite marche) : 2 cm au plus, ou 4 cm s'il est chanfreiné.
- Sol non glissant, sans obstacle ; contraste visuel et bande d'éveil de vigilance en haut des escaliers.

### Calculer une pente
- **Pente en % = dénivelé / longueur horizontale × 100.**
- Exemple : une rampe qui monte de 0,60 m sur 12 m a une pente de 0,60 / 12 × 100 = **5 %** : c'est conforme, mais il faut des paliers tous les 10 m.
- Longueur minimale pour monter h avec une pente p : L = h / p. Pour 0,40 m à 5 % : 0,40 / 0,05 = 8 m.
- Si le dénivelé change (une passerelle de bateau qui suit la marée, par exemple), la pente change : on vérifie le cas le plus défavorable.

### Les espaces de manœuvre
- **Espace de manœuvre avec possibilité de demi-tour** : un cercle de **1,50 m** de diamètre, devant les portes, au bout des couloirs, dans les sanitaires adaptés.
- **Espace d'usage** devant un équipement (lavabo, guichet) : un rectangle de **0,80 m × 1,30 m**.
- **Portes** : largeur de 0,90 m au moins (passage utile d'environ 0,83 m) pour un local de moins de 100 personnes ; 1,40 m pour un local de 100 personnes ou plus.
- **Commandes** (interrupteurs, boutons d'ascenseur) : entre **0,90 m et 1,30 m** de hauteur.

### Le stationnement et les sanitaires
- **Places adaptées** : au moins 2 % des places, de **3,30 m** de large, proches de l'entrée et signalées.
- **Sanitaires adaptés** : un cercle de 1,50 m libre, un espace de transfert à côté de la cuvette (0,80 m × 1,30 m), une barre d'appui, un lavabo accessible en fauteuil.

### Vérifier un plan
- On mesure sur le plan, on convertit avec l'échelle, puis on compare à chaque exigence.
- On rédige en citant la règle : « La largeur du couloir est de 1,10 m, inférieure aux 1,20 m exigés : non conforme. »
- On propose une modification précise (déplacer une cloison, élargir une porte, ajouter un palier).

### À retenir pour le bac
- Cheminement : 1,20 m de large ; pente de 5 % au plus (8 % sur 2 m, 10 % sur 0,50 m).
- Pente = dénivelé / longueur × 100 ; paliers tous les 10 m dès 4 %.
- Demi-tour : cercle de 1,50 m ; espace d'usage 0,80 × 1,30 m.
- Porte de 0,90 m ; commandes entre 0,90 et 1,30 m ; place de stationnement de 3,30 m.
- Piège : vérifier la pente dans le cas le plus défavorable.`,
      cartes: [
        { q: "Largeur minimale d'un cheminement accessible ?", r: "1,20 m, réductible ponctuellement à 0,90 m." },
        { q: "Pente maximale d'un cheminement en général ?", r: "5 %." },
        { q: "Pentes tolérées sur de courtes longueurs ?", r: "8 % sur 2 m au plus, 10 % sur 0,50 m au plus." },
        { q: "Formule de la pente en % ?", r: "Dénivelé / longueur horizontale × 100." },
        { q: "Quand faut-il un palier de repos ?", r: "En haut et en bas de chaque rampe, et tous les 10 m dès que la pente atteint 4 %." },
        { q: "Hauteur maximale d'un ressaut ?", r: "2 cm, ou 4 cm s'il est chanfreiné." },
        { q: "Espace de demi-tour d'un fauteuil roulant ?", r: "Un cercle de 1,50 m de diamètre." },
        { q: "Espace d'usage devant un équipement ?", r: "Un rectangle de 0,80 m × 1,30 m." },
        { q: "Largeur d'une porte accessible (moins de 100 personnes) ?", r: "0,90 m, soit un passage utile d'environ 0,83 m." },
        { q: "Hauteur des commandes accessibles ?", r: "Entre 0,90 m et 1,30 m." },
        { q: "Largeur d'une place de stationnement adaptée ?", r: "3,30 m." },
        { q: "Part minimale de places adaptées ?", r: "2 % des places." },
        { q: "Longueur minimale d'une rampe ?", r: "L = dénivelé / pente ; 0,40 m à 5 % demande 8 m." },
      ],
      quiz: [
        { q: "Une rampe monte de 0,60 m sur 12 m de longueur horizontale. Pente ?", choix: ["5 %", "0,05 %", "20 %", "7,2 %"], bonne: 0, expl: "0,60 / 12 × 100 = 5 %.", niv: 1 },
        { q: "Pour monter 0,40 m avec une pente de 5 %, quelle longueur de rampe faut-il au minimum ?", choix: ["4 m", "2 m", "8 m", "0,8 m"], bonne: 2, expl: "0,40 / 0,05 = 8 m.", niv: 2 },
        { q: "Un couloir d'ERP mesure 1,10 m de large sur toute sa longueur. Est-il conforme ?", choix: ["Oui, il dépasse 0,90 m", "Non, il faut 1,20 m", "Oui, il dépasse 1 m", "Non, il faut 1,50 m"], bonne: 1, expl: "0,90 m n'est permis que ponctuellement, sur une courte longueur.", niv: 2 },
        { q: "Le cercle à laisser libre pour qu'un fauteuil puisse faire demi-tour mesure :", choix: ["2 m de diamètre", "0,90 m de diamètre", "1,20 m de diamètre", "1,50 m de diamètre"], bonne: 3, expl: "Devant les portes, en bout de couloir, dans les sanitaires adaptés.", niv: 1 },
        { q: "Une pente de 8 % est-elle permise ?", choix: ["Oui, sur toute la longueur", "Oui, sur 2 m au plus", "Non, la limite est de 5 %", "Oui, sur 10 m au plus"], bonne: 1, expl: "Au-delà de 2 m, la pente doit redescendre à 5 %.", niv: 2 },
        { q: "Passerelle de 6 m : le quai est 0,45 m plus haut que le pont à marée basse, 0,15 m à marée haute. Pente maximale ?", choix: ["7,5 %", "2,5 %", "5 %", "10 %"], bonne: 0, expl: "Cas le plus défavorable : 0,45 / 6 × 100 = 7,5 % ; tolérable seulement sur 2 m, donc non conforme sur 6 m.", niv: 3 },
        { q: "Un interrupteur accessible se place à une hauteur comprise entre :", choix: ["0,20 m et 0,50 m", "0,40 m et 0,60 m", "1,50 m et 1,80 m", "0,90 m et 1,30 m"], bonne: 3, expl: "Une personne assise doit pouvoir l'atteindre.", niv: 1 },
        { q: "Un parking de 150 places doit compter au moins combien de places adaptées ?", choix: ["4", "15", "3", "6"], bonne: 2, expl: "2 % de 150 = 3 places.", niv: 2 },
        { q: "Rampe de 25 m à 4,5 % de pente. Combien de paliers intermédiaires au minimum ?", choix: ["1", "0", "2", "5"], bonne: 2, expl: "Dès 4 %, un palier tous les 10 m : à 10 m et à 20 m, plus ceux du haut et du bas.", niv: 3 },
        { q: "La salle de spectacle accueille 250 personnes. Largeur de sa porte principale ?", choix: ["1,20 m au moins", "0,90 m au moins", "0,83 m au moins", "1,40 m au moins"], bonne: 3, expl: "Dès 100 personnes, il faut 1,40 m.", niv: 2 },
        { q: "Une place de stationnement adaptée mesure en largeur au moins :", choix: ["2,30 m", "3,30 m", "2,50 m", "1,50 m"], bonne: 1, expl: "La largeur en plus permet de sortir du véhicule en fauteuil.", niv: 1 },
        { q: "Sur un plan à 1/50, l'espace libre des sanitaires mesure 2,8 cm de diamètre. Conforme ?", choix: ["Non : 1,40 m au lieu de 1,50 m", "Oui : 2,8 m de diamètre", "Oui : 1,40 m suffit", "Non : il faut 2 m"], bonne: 0, expl: "2,8 × 50 = 140 cm, moins que le cercle de 1,50 m.", niv: 3 },
      ] },
    { chapitre: 'sti2d-ac-3',
      fiche: `## Actions, combinaisons et descente de charges

Avant de vérifier une poutre ou une fondation, il faut savoir quelles charges elle porte. Le tronc commun donne les bases de la statique ; en AC, on applique les règles de calcul des structures (les Eurocodes).

### Les actions sur un ouvrage
- **Charges permanentes G** : le **poids propre** de la structure et ce qui ne bouge pas (planchers, cloisons, revêtements, toiture). Poids = masse × g, ou volume × poids volumique (béton armé : environ **25 kN/m³**).
- **Charges d'exploitation Q** : ce qui dépend de l'usage (personnes, mobilier, stockage). Exemples : logement 1,5 kN/m², bureaux 2,5 kN/m², salle de réunion ou passerelle publique 4 à 5 kN/m².
- **Actions climatiques** : **neige S** (selon la région et l'altitude), **vent W** (selon la région, la hauteur, le relief), température.
- **Actions accidentelles** : séisme, choc, incendie.

### Les états limites et les combinaisons
- **ELU** (état limite ultime) : on vérifie que l'ouvrage ne casse pas et ne se renverse pas. Combinaison courante : **1,35 G + 1,5 Q**.
- **ELS** (état limite de service) : on vérifie qu'il reste utilisable et confortable (flèche, fissures, vibrations). Combinaison courante : **G + Q**.
- Exemple : G = 4 kN/m² et Q = 2,5 kN/m². ELU : 1,35 × 4 + 1,5 × 2,5 = 5,4 + 3,75 = **9,15 kN/m²**. ELS : 6,5 kN/m².
- Les coefficients majorent les charges : c'est une marge de sécurité, en plus de celle sur les matériaux.

### Des charges surfaciques aux charges linéiques
- Un plancher porte une charge **surfacique** (kN/m²). Il la transmet aux poutres sous forme de charge **linéique** (kN/m).
- **q = charge surfacique × largeur reprise** par la poutre (la moitié de la distance jusqu'à chaque poutre voisine).
- Exemple : poutres espacées de 0,60 m, charge 5 kN/m² : chaque poutre reçoit 5 × 0,60 = **3 kN/m**.
- Une poutre de longueur L chargée à q kN/m porte une charge totale q × L, partagée entre ses appuis.

### La descente de charges
- On suit le trajet des charges du haut vers le bas : toiture, planchers, poutres, poteaux ou murs, fondations, sol.
- Chaque élément reçoit les charges des éléments au-dessus, plus son propre poids.
- Exemple : un poteau reçoit 120 kN de chaque étage sur 3 étages, plus 10 kN de poids propre : 370 kN en pied de poteau.
- La **surface d'influence** d'un poteau : la partie de plancher dont il reprend la charge (pour une trame de 5 m × 4 m, un poteau intérieur reprend 20 m²).

### À retenir pour le bac
- G : permanentes ; Q : exploitation ; S : neige ; W : vent.
- ELU : 1,35 G + 1,5 Q (résistance) ; ELS : G + Q (déformations).
- q (kN/m) = charge surfacique (kN/m²) × largeur reprise (m).
- Descente de charges : du toit vers le sol, en ajoutant les poids propres.
- Piège : ne pas oublier le poids propre de l'élément étudié.`,
      cartes: [
        { q: "Charges permanentes G ?", r: "Le poids propre et tout ce qui ne bouge pas : planchers, cloisons, revêtements, toiture." },
        { q: "Charges d'exploitation Q ?", r: "Les charges dues à l'usage : personnes, mobilier, stockage." },
        { q: "Actions climatiques ?", r: "La neige, le vent et la température." },
        { q: "Poids volumique du béton armé ?", r: "Environ 25 kN/m³." },
        { q: "Ce que vérifie l'ELU ?", r: "Que l'ouvrage ne casse pas et ne se renverse pas." },
        { q: "Ce que vérifie l'ELS ?", r: "Que l'ouvrage reste utilisable : flèche, fissures, vibrations." },
        { q: "Combinaison ELU courante ?", r: "1,35 G + 1,5 Q." },
        { q: "Combinaison ELS courante ?", r: "G + Q." },
        { q: "Passer d'une charge surfacique à une charge linéique ?", r: "Multiplier par la largeur de plancher reprise par la poutre." },
        { q: "Descente de charges ?", r: "Suivre les charges du toit jusqu'au sol en les cumulant, poids propres compris." },
        { q: "Surface d'influence d'un poteau ?", r: "La partie de plancher dont le poteau reprend la charge." },
        { q: "Charge d'exploitation d'un logement ?", r: "Environ 1,5 kN/m²." },
        { q: "Pourquoi des coefficients 1,35 et 1,5 ?", r: "Pour majorer les charges et garder une marge de sécurité." },
      ],
      quiz: [
        { q: "Le poids des cloisons et du carrelage d'un plancher est une charge :", choix: ["accidentelle", "d'exploitation", "climatique", "permanente"], bonne: 3, expl: "Ces éléments restent en place : ils font partie de G.", niv: 1 },
        { q: "G = 4 kN/m² et Q = 2,5 kN/m². Charge à l'ELU ?", choix: ["9,15 kN/m²", "6,5 kN/m²", "8,1 kN/m²", "5,4 kN/m²"], bonne: 0, expl: "1,35 × 4 + 1,5 × 2,5 = 5,4 + 3,75 = 9,15 kN/m².", niv: 2 },
        { q: "Mêmes charges, G = 4 kN/m² et Q = 2,5 kN/m². Charge à l'ELS ?", choix: ["10 kN/m²", "9,15 kN/m²", "6,5 kN/m²", "8,75 kN/m²"], bonne: 2, expl: "G + Q = 6,5 kN/m².", niv: 2 },
        { q: "Pour vérifier la flèche d'une poutre, on utilise la combinaison :", choix: ["ELU, 1,35 G + 1,5 Q", "ELS, G + Q", "accidentelle", "la neige seule"], bonne: 1, expl: "La flèche concerne le confort et l'usage : c'est un état limite de service.", niv: 1 },
        { q: "Poutres espacées de 0,60 m, plancher chargé à 5 kN/m². Charge linéique par poutre ?", choix: ["3 kN/m", "8,3 kN/m", "5 kN/m", "5,6 kN/m"], bonne: 0, expl: "5 × 0,60 = 3 kN/m.", niv: 2 },
        { q: "Poteau intérieur, trame 5 m × 4 m, plancher à 9 kN/m² (ELU) sur 3 niveaux, poids propre 15 kN. Charge en pied ?", choix: ["180 kN", "555 kN", "540 kN", "195 kN"], bonne: 1, expl: "20 m² × 9 = 180 kN par niveau ; 3 × 180 + 15 = 555 kN.", niv: 3 },
        { q: "La neige sur une toiture est une action :", choix: ["de poids propre", "permanente", "d'exploitation", "climatique"], bonne: 3, expl: "Elle dépend de la région et de l'altitude.", niv: 1 },
        { q: "Dalle en béton armé de 0,20 m d'épaisseur (25 kN/m³). Poids propre ?", choix: ["2,5 kN/m²", "0,5 kN/m²", "5 kN/m²", "4 kN/m²"], bonne: 2, expl: "0,20 × 25 = 5 kN/m².", niv: 2 },
        { q: "Une poutre de 6 m porte 4 kN/m, symétriquement. Réaction sur chaque appui ?", choix: ["48 kN", "24 kN", "12 kN", "18 kN"], bonne: 2, expl: "Charge totale 4 × 6 = 24 kN, partagée en deux appuis : 12 kN chacun.", niv: 3 },
        { q: "L'ELU vérifie principalement :", choix: ["que la structure ne casse pas", "que la flèche reste faible", "que les fissures restent fines", "que le plancher ne vibre pas"], bonne: 0, expl: "Les déformations relèvent de l'ELS.", niv: 2 },
        { q: "Dans une descente de charges, on suit les charges :", choix: ["de la cave vers la toiture", "du sol vers le toit", "des façades vers le centre", "du toit vers le sol"], bonne: 3, expl: "Chaque élément reçoit ce qui est au-dessus de lui.", niv: 1 },
        { q: "Pourquoi le poids propre d'une fondation d'éolienne en béton compte-t-il beaucoup ?", choix: ["Il réduit la charge sur le sol", "Il s'ajoute à la charge transmise au sol", "Il ne compte qu'à l'ELS", "Il annule l'effort du vent"], bonne: 1, expl: "Le sol reçoit le poids de l'éolienne et celui de la fondation.", niv: 3 },
      ] },
    { chapitre: 'sti2d-ac-4',
      fiche: `## Poutres : moment, contrainte et flèche

C'est le calcul de structure le plus fréquent en AC : une poutre (ou un profilé de passerelle) sur deux appuis, chargée uniformément. On vérifie qu'elle ne casse pas (contrainte) et qu'elle ne fléchit pas trop (flèche).

### Modéliser une poutre
- **Appui simple** (rouleau) : il bloque le déplacement vertical seulement. **Articulation** : il bloque les deux déplacements mais laisse tourner. **Encastrement** : il bloque tout, déplacements et rotation.
- Une poutre sur une articulation et un appui simple est **isostatique** : la statique suffit pour trouver les réactions.
- La charge du plancher est modélisée par une **charge uniformément répartie** q (kN/m) sur toute la longueur L.

### Réactions et effort tranchant
- Poutre sur deux appuis, charge q uniforme : chaque réaction vaut **q × L / 2**.
- L'**effort tranchant** est maximal près des appuis (q × L / 2) et nul au milieu.

### Le moment fléchissant
- Le **moment fléchissant** Mf(x) mesure la tendance de la poutre à se courber. Pour une charge uniforme : **Mf(x) = q × (L × x - x²) / 2**.
- Il est nul aux appuis et **maximal au milieu** : **Mf max = q × L² / 8**.
- Exemple : q = 3 kN/m et L = 7,6 m : Mf max = 3 × 7,6² / 8 ≈ **21,7 kN·m**. À x = L/4 : 3 × (7,6 × 1,9 - 1,9²) / 2 ≈ 16,2 kN·m.
- La courbe de Mf a la forme d'une **parabole** symétrique.

### La contrainte de flexion
- **σ max = Mf max × v / I**, avec v la distance de la fibre la plus éloignée (h/2 pour une section symétrique) et I le **moment quadratique** de la section.
- Section rectangulaire b × h : **I = b × h³ / 12**. La hauteur compte au cube : une poutre posée « sur chant » est bien plus rigide qu'à plat.
- Exemple : b = 100 mm, h = 200 mm : I = 100 × 200³ / 12 ≈ 66,7 × 10^6 mm⁴. Avec Mf = 20 kN·m = 20 × 10^6 N·mm : σ = 20 × 10^6 × 100 / 66,7 × 10^6 = **30 MPa**.
- Unités pratiques : N et mm donnent des MPa (1 MPa = 1 N/mm²). Penser à convertir les kN·m en N·mm (× 10^6).
- On vérifie σ max ≤ limite élastique / coefficient de sécurité. Rester dans le **domaine élastique** permet à la poutre de revenir à sa forme après chargement ; dans le domaine plastique, la déformation devient définitive.
- Les profilés en **I ou H** placent la matière loin du centre : grand I pour peu de matière.

### La flèche
- La **flèche** est le déplacement vertical maximal, au milieu pour une poutre sur deux appuis.
- Formule d'une poutre uniformément chargée : **f = 5 × q × L⁴ / (384 × E × I)**. Elle dépend de la longueur à la puissance 4 : doubler la portée multiplie la flèche par 16.
- **Critère** : la flèche doit rester inférieure à une fraction de la portée, souvent **L / 200** (L / 300 ou plus exigeant pour un plancher qui porte des cloisons fragiles). Pour L = 7,6 m : L / 200 = 38 mm.
- On peut lire la flèche sur une **simulation numérique** : la couleur la plus chaude indique le déplacement maximal.

### À retenir pour le bac
- Réactions : q × L / 2 ; Mf max = q × L² / 8 au milieu.
- σ = Mf × v / I ; rectangle : I = b × h³ / 12.
- Convertir en N et mm pour obtenir des MPa.
- Flèche à comparer à L / 200 (ou à la limite donnée).
- Piège : la hauteur de la section compte au cube, la largeur seulement une fois.`,
      cartes: [
        { q: "Appui simple ?", r: "Il bloque seulement le déplacement vertical." },
        { q: "Encastrement ?", r: "Il bloque les déplacements et la rotation." },
        { q: "Poutre isostatique ?", r: "Une poutre dont la statique suffit pour trouver les réactions." },
        { q: "Réactions d'une poutre sur deux appuis, charge q uniforme ?", r: "q × L / 2 sur chaque appui." },
        { q: "Moment fléchissant maximal, charge uniforme ?", r: "q × L² / 8, au milieu de la poutre." },
        { q: "Forme de la courbe du moment fléchissant ?", r: "Une parabole symétrique, nulle aux appuis." },
        { q: "Formule de la contrainte de flexion ?", r: "σ = Mf × v / I, avec v = h/2 pour une section symétrique." },
        { q: "Moment quadratique d'un rectangle ?", r: "I = b × h³ / 12." },
        { q: "1 MPa en N/mm² ?", r: "1 N/mm²." },
        { q: "Pourquoi rester dans le domaine élastique ?", r: "Pour que la poutre reprenne sa forme ; en plastique, la déformation devient définitive." },
        { q: "Intérêt d'un profilé en I ?", r: "Il éloigne la matière du centre : grand moment quadratique pour peu de matière." },
        { q: "Critère de flèche courant ?", r: "La flèche doit rester inférieure à L / 200 ou à la limite donnée." },
        { q: "Effet du doublement de la portée sur la flèche ?", r: "Elle est multipliée par 16, car elle dépend de L⁴." },
      ],
      quiz: [
        { q: "Poutre sur deux appuis, charge uniforme. Où le moment fléchissant est-il maximal ?", choix: ["au quart de la portée", "sur les appuis", "au milieu", "il est le même partout"], bonne: 2, expl: "Il vaut q × L² / 8 au milieu et zéro aux appuis.", niv: 1 },
        { q: "q = 3 kN/m, L = 7,6 m. Moment fléchissant maximal ?", choix: ["86,64 kN·m", "11,4 kN·m", "28,88 kN·m", "21,66 kN·m"], bonne: 3, expl: "3 × 7,6² / 8 = 3 × 57,76 / 8 ≈ 21,66 kN·m.", niv: 2 },
        { q: "Section rectangulaire b = 100 mm, h = 200 mm. Moment quadratique ?", choix: ["66,7 × 10^6 mm⁴", "16,7 × 10^6 mm⁴", "1,67 × 10^6 mm⁴", "200 × 10^6 mm⁴"], bonne: 0, expl: "100 × 200³ / 12 = 100 × 8 × 10^6 / 12 ≈ 66,7 × 10^6 mm⁴.", niv: 2 },
        { q: "Une poutre sur deux appuis porte 5 kN/m sur 4 m. Réaction sur un appui ?", choix: ["20 kN", "10 kN", "40 kN", "15 kN"], bonne: 1, expl: "5 × 4 / 2 = 10 kN.", niv: 1 },
        { q: "Mf = 20 kN·m, v = 100 mm, I = 66,7 × 10^6 mm⁴. Contrainte maximale ?", choix: ["0,03 MPa", "0,3 MPa", "3 MPa", "30 MPa"], bonne: 3, expl: "20 × 10^6 × 100 / 66,7 × 10^6 ≈ 30 MPa.", niv: 2 },
        { q: "Passerelle de 7,6 m, flèche simulée 32 mm, critère L / 200. Conclusion ?", choix: ["Conforme : 32 mm est sous 76 mm", "Non conforme : 32 mm dépasse 38 mm", "Conforme : 32 mm est sous 38 mm", "Non conforme : il faut moins de 7,6 mm"], bonne: 2, expl: "7 600 / 200 = 38 mm.", niv: 3 },
        { q: "Un appui qui bloque les déplacements et la rotation est :", choix: ["un appui simple", "un encastrement", "une articulation", "un rouleau"], bonne: 1, expl: "L'articulation laisse tourner.", niv: 1 },
        { q: "On pose sur chant une planche de 50 × 200 mm au lieu de la poser à plat. Son I est multiplié par :", choix: ["16", "4", "2", "8"], bonne: 0, expl: "À plat : 200 × 50³ / 12 ; sur chant : 50 × 200³ / 12, soit (200 / 50)² = 16 fois plus.", niv: 2 },
        { q: "Une poutre de portée 4 m a une flèche de 5 mm. Même poutre et même charge sur 8 m ?", choix: ["80 mm", "10 mm", "20 mm", "40 mm"], bonne: 0, expl: "La flèche dépend de L⁴ : 2⁴ = 16 ; 16 × 5 = 80 mm.", niv: 3 },
        { q: "Pour obtenir une contrainte en MPa avec σ = Mf × v / I, on exprime Mf en :", choix: ["kN", "kN·m", "N·mm", "N·m"], bonne: 2, expl: "N et mm donnent des N/mm², c'est-à-dire des MPa ; 1 kN·m = 10^6 N·mm.", niv: 2 },
        { q: "La courbe du moment fléchissant d'une poutre chargée uniformément a la forme :", choix: ["d'une droite horizontale", "d'une parabole", "d'un triangle pointu aux appuis", "d'une sinusoïde"], bonne: 1, expl: "Mf(x) = q × (L × x - x²) / 2.", niv: 1 },
        { q: "Contrainte calculée 180 MPa, acier de limite élastique 235 MPa, sécurité exigée 1,5. Conclusion ?", choix: ["Non conforme : 180 dépasse 235", "Conforme : 180 est sous 235", "Conforme : la sécurité vaut 1,5", "Non conforme : 235 / 180 ≈ 1,3, sous 1,5"], bonne: 3, expl: "Il faudrait σ ≤ 235 / 1,5 ≈ 157 MPa.", niv: 3 },
      ] },
    { chapitre: 'sti2d-ac-5',
      fiche: `## Fondations et stabilité d'un ouvrage

Les fondations transmettent les charges de l'ouvrage au sol. Un sujet récent étudie la fondation d'une éolienne : enfoncement dans le sol (poinçonnement) et glissement sous l'effet du vent.

### Les types de fondations
- **Fondations superficielles** : quand le bon sol est proche de la surface. **Semelle filante** sous un mur, **semelle isolée** sous un poteau, **radier** (une dalle sous tout le bâtiment) quand le sol est médiocre ou les charges très réparties.
- **Fondations profondes** : des **pieux** ou des **micropieux** qui vont chercher un sol résistant en profondeur, quand la surface est trop molle.
- Le choix vient de l'**étude de sol** (géotechnique) : nature du sol, contrainte admissible, présence d'eau, risque de tassement.
- On descend sous la **profondeur hors gel** (souvent 0,50 à 0,80 m en France) pour éviter que le gel soulève la fondation.

### Le poinçonnement
- La structure (ouvrage + fondation) pèse PV. **Poids = masse × g** ; masse de béton = volume × masse volumique (environ 2 500 kg/m³ pour le béton armé ; un sujet peut donner une autre valeur).
- Contrainte sur le sol : **σ = PV / S**, avec S la surface de contact.
- Le sol a une **contrainte admissible** σadm (par exemple 0,3 MPa = 300 kPa pour un bon sol). Coefficient de sécurité : **s = σadm / σ**, à comparer au minimum exigé.
- Exemple : PV = 15 000 kN sur une semelle circulaire de 18 m de diamètre : S = π × 9² ≈ 254 m² ; σ = 15 000 / 254 ≈ 59 kPa = 0,059 MPa ; s = 0,3 / 0,059 ≈ 5,1 : largement suffisant.
- Unités : 1 kPa = 1 kN/m² ; 1 MPa = 1 000 kPa = 1 N/mm².

### Volumes des fondations
- Une fondation se décompose en volumes simples : **cylindre** π × r² × h, **pavé** L × l × h, **tronc de cône** π × h × (R² + R × r + r²) / 3.
- On additionne les volumes, puis masse = volume × masse volumique.

### Le glissement
- Le vent pousse horizontalement : effort H. Le frottement entre la fondation et le sol retient l'ouvrage.
- Condition de non-glissement : **H < PV × tan φ**, avec φ l'angle de frottement fondation-sol. Avec un coefficient de sécurité γ : **H < PV × tan φ / γ**, donc **γ = PV × tan φ / H**.
- Exemple : PV = 15 000 kN, φ = 25°, H = 900 kN : PV × tan φ ≈ 6 995 kN ; γ ≈ 7,8.
- Le vent est souvent donné en km/h : diviser par 3,6 pour l'avoir en m/s.

### Le basculement et le tassement
- **Basculement** : le moment du vent (H × hauteur) tend à faire pivoter l'ouvrage autour d'un bord ; le poids le retient. Plus la fondation est large et lourde, plus l'ouvrage est stable.
- **Tassement** : le sol se comprime sous la charge ; un **tassement différentiel** (un côté s'enfonce plus) fissure les murs.

### Optimiser une fondation
- Si la sécurité est très au-dessus du minimum, on peut **réduire le volume de béton** (moins de coût et de CO2), tout en gardant la sécurité au glissement et au basculement.
- Si elle est insuffisante : agrandir la surface d'appui, approfondir, ou passer à des pieux.

### À retenir pour le bac
- Superficielles (semelles, radier) ou profondes (pieux), selon l'étude de sol.
- σ = PV / S ; s = σadm / σ.
- Non-glissement : H < PV × tan φ / γ.
- 1 MPa = 1 000 kPa = 1 N/mm² ; km/h divisé par 3,6 donne des m/s.
- Piège : compter le poids de la fondation en plus de celui de l'ouvrage.`,
      cartes: [
        { q: "Fondation superficielle ?", r: "Semelle ou radier posés près de la surface, quand le bon sol est proche." },
        { q: "Fondation profonde ?", r: "Des pieux qui vont chercher un sol résistant en profondeur." },
        { q: "Radier ?", r: "Une dalle de fondation sous tout le bâtiment." },
        { q: "Pourquoi descendre sous la profondeur hors gel ?", r: "Pour que le gel du sol ne soulève pas la fondation." },
        { q: "Contrainte exercée sur le sol ?", r: "σ = PV / S, charge verticale divisée par la surface de contact." },
        { q: "Coefficient de sécurité au poinçonnement ?", r: "s = σadm / σ, à comparer au minimum exigé." },
        { q: "1 MPa en kPa ?", r: "1 000 kPa." },
        { q: "Condition de non-glissement ?", r: "H < PV × tan φ / γ." },
        { q: "Volume d'un cylindre ?", r: "π × r² × h." },
        { q: "Volume d'un tronc de cône ?", r: "π × h × (R² + R × r + r²) / 3." },
        { q: "Tassement différentiel ?", r: "Un côté de l'ouvrage s'enfonce plus que l'autre, ce qui fissure les murs." },
        { q: "Qu'est-ce qui retient un ouvrage contre le basculement ?", r: "Son poids et la largeur de sa fondation." },
        { q: "Convertir des km/h en m/s ?", r: "Diviser par 3,6." },
      ],
      quiz: [
        { q: "Sol médiocre en surface, bon sol à 12 m de profondeur. Fondation adaptée ?", choix: ["une semelle filante", "des pieux", "un radier de 20 cm", "une semelle isolée"], bonne: 1, expl: "Les pieux vont chercher le sol résistant en profondeur.", niv: 1 },
        { q: "PV = 15 000 kN sur une surface de contact de 250 m². Contrainte sur le sol ?", choix: ["60 kPa", "3 750 kPa", "6 kPa", "16,7 kPa"], bonne: 0, expl: "15 000 / 250 = 60 kN/m² = 60 kPa.", niv: 2 },
        { q: "Contrainte sur le sol 0,06 MPa, contrainte admissible 0,3 MPa. Coefficient de sécurité ?", choix: ["0,24", "0,2", "5", "0,36"], bonne: 2, expl: "0,3 / 0,06 = 5.", niv: 2 },
        { q: "Une fondation qui forme une dalle sous tout le bâtiment s'appelle :", choix: ["une longrine", "un pieu", "une semelle isolée", "un radier"], bonne: 3, expl: "Le radier répartit la charge sur toute la surface.", niv: 1 },
        { q: "Volume d'une semelle cylindrique de 18 m de diamètre et 1 m de haut, environ ?", choix: ["254 m³", "57 m³", "1 018 m³", "113 m³"], bonne: 0, expl: "π × 9² × 1 ≈ 254 m³.", niv: 2 },
        { q: "PV = 15 000 kN, φ = 25°, H = 900 kN. Coefficient de sécurité au glissement, environ ?", choix: ["1,6", "0,13", "2,5", "7,8"], bonne: 3, expl: "15 000 × tan 25° ≈ 6 995 kN ; 6 995 / 900 ≈ 7,8.", niv: 3 },
        { q: "Vent maximal de 144 km/h. En m/s ?", choix: ["518 m/s", "40 m/s", "144 m/s", "86 m/s"], bonne: 1, expl: "144 / 3,6 = 40 m/s.", niv: 1 },
        { q: "300 m³ de béton à 2 500 kg/m³. Poids, avec g = 9,81 m/s² ?", choix: ["75 000 kN", "750 kN", "7 358 kN", "7,5 kN"], bonne: 2, expl: "Masse 750 000 kg ; poids 750 000 × 9,81 ≈ 7 358 000 N.", niv: 2 },
        { q: "Sécurité au poinçonnement de 5 pour un minimum exigé de 2. Que peut-on envisager ?", choix: ["Doubler la fondation", "Réduire le volume de béton en vérifiant les autres stabilités", "Passer à des pieux", "Supprimer l'étude de sol"], bonne: 1, expl: "On économise du béton, donc du coût et du CO2, sans descendre sous les minimums.", niv: 3 },
        { q: "Un sol de contrainte admissible 0,3 MPa supporte au plus, par mètre carré :", choix: ["30 kN", "3 kN", "300 kN", "0,3 kN"], bonne: 2, expl: "0,3 MPa = 300 kPa = 300 kN/m².", niv: 2 },
        { q: "Le risque qui fissure les murs quand un côté s'enfonce plus que l'autre est :", choix: ["le tassement différentiel", "le glissement", "le flambement", "la dilatation"], bonne: 0, expl: "On l'évite avec une étude de sol et des fondations adaptées.", niv: 1 },
        { q: "Pourquoi la contrainte sur le sol ne suffit-elle pas à valider une fondation d'éolienne ?", choix: ["Le sol ne se comprime pas", "Le poids de l'éolienne est négligeable", "Le béton ne transmet pas de charge", "Le vent crée aussi glissement et basculement"], bonne: 3, expl: "L'effort horizontal et son moment doivent aussi être repris.", niv: 3 },
      ] },
    { chapitre: 'sti2d-ac-6',
      fiche: `## Systèmes constructifs et matériaux de structure

Le tronc commun présente les familles de matériaux et la résistance des matériaux. En AC, on choisit un **système constructif** complet pour un bâtiment et on compare des matériaux de structure sur des critères chiffrés (masse, contrainte, coût, carbone).

### Les grands systèmes constructifs
- **Murs porteurs** (maçonnerie, béton banché) : les murs portent les planchers. Simple et bonne inertie thermique, mais peu de liberté pour ouvrir ou déplacer les cloisons.
- **Poteaux-poutres** (ossature) : une trame de poteaux et de poutres porte les planchers ; les murs ne portent rien. Grandes ouvertures et plans libres, plateaux de bureaux, parkings.
- **Ossature bois** : montants rapprochés (environ 60 cm) et panneaux de contreventement, rapide, léger, préfabriqué en atelier. **Bois lamellé-collé** pour les grandes portées, **CLT** (panneaux de bois croisés) pour les murs et planchers d'immeubles.
- **Charpente métallique** : profilés en acier, grandes portées (gymnases, halls), montage rapide, mais l'acier doit être protégé du feu et de la corrosion.

### Le béton armé
- Le béton résiste très bien en **compression** mais mal en **traction**. On place des **armatures en acier** dans les zones tendues (en bas d'une poutre sur deux appuis).
- L'**enrobage** (quelques centimètres de béton autour des aciers) les protège de la corrosion et du feu.
- Le **béton précontraint** comprime le béton par des câbles tendus pour franchir de grandes portées.

### Le contreventement
- Il empêche le bâtiment de se déformer ou de se renverser sous les efforts horizontaux (vent, séisme).
- Solutions : **murs de refend** ou voiles en béton, **croix de Saint-André** (diagonales en acier), panneaux rigides (OSB) dans une ossature bois, noyau en béton autour de l'escalier et de l'ascenseur.

### Les poteaux en compression
- Contrainte de compression : **σ = N / S**. Poteau en bois de 20 × 20 cm qui porte 200 kN : σ = 200 000 / 40 000 = **5 MPa**.
- Ne pas oublier le **poids propre** du poteau, surtout pour un matériau lourd et un poteau haut.
- Un poteau élancé peut **flamber** (se courber brusquement sur le côté) bien avant d'atteindre sa résistance : plus il est long et fin, plus le risque est grand.

### La dilatation
- Un matériau s'allonge quand il chauffe : **ΔL = α × L × ΔT**. Acier ou béton : α ≈ 12 × 10^-6 par °C.
- Exemple : 50 m de structure en acier, écart de 40 °C : 12 × 10^-6 × 50 × 40 = 0,024 m = 24 mm. D'où les **joints de dilatation** dans les longs bâtiments et les ponts.

### Comparer des matériaux
- Critères : **résistance** (contrainte admissible), **masse** (masse volumique : bois environ 500 kg/m³, béton armé 2 500 kg/m³, acier 7 850 kg/m³), coût, **impact carbone**, résistance au feu, durabilité, facilité de mise en œuvre.
- Le bon choix est un **compromis** : le bois est léger, stocke du carbone et se préfabrique ; le béton est lourd mais massif et résistant au feu ; l'acier est très résistant pour une petite section.
- On classe les matériaux critère par critère, puis on conclut sur le meilleur compromis pour le projet.

### À retenir pour le bac
- Murs porteurs, poteaux-poutres, ossature bois, charpente métallique.
- Béton armé : le béton prend la compression, l'acier la traction.
- Contreventement : voiles, croix de Saint-André, panneaux rigides.
- σ = N / S ; ΔL = α × L × ΔT.
- Piège : oublier le poids propre ou le flambement d'un poteau élancé.`,
      cartes: [
        { q: "Système à murs porteurs ?", r: "Les murs portent les planchers : simple, massif, mais peu de liberté de plan." },
        { q: "Système poteaux-poutres ?", r: "Une trame de poteaux et de poutres porte les planchers ; les murs ne portent rien." },
        { q: "Ossature bois ?", r: "Des montants rapprochés et des panneaux de contreventement, légers et préfabriqués." },
        { q: "Qu'est-ce que le CLT ?", r: "Des panneaux de bois massif à couches croisées, pour murs et planchers." },
        { q: "Rôle des aciers dans le béton armé ?", r: "Reprendre la traction, que le béton supporte mal." },
        { q: "Où placer les aciers d'une poutre sur deux appuis ?", r: "En bas, dans la zone tendue." },
        { q: "Rôle de l'enrobage ?", r: "Protéger les aciers de la corrosion et du feu." },
        { q: "Rôle du contreventement ?", r: "Résister aux efforts horizontaux (vent, séisme) sans se déformer." },
        { q: "Exemples de contreventement ?", r: "Voiles en béton, croix de Saint-André, panneaux OSB, noyau d'escalier." },
        { q: "Flambement ?", r: "Un poteau élancé comprimé se courbe brusquement sur le côté." },
        { q: "Formule de la dilatation ?", r: "ΔL = α × L × ΔT." },
        { q: "Masses volumiques du bois, du béton armé et de l'acier ?", r: "Environ 500, 2 500 et 7 850 kg/m³." },
        { q: "Joint de dilatation ?", r: "Une coupure qui laisse un long ouvrage s'allonger et se raccourcir sans se fissurer." },
      ],
      quiz: [
        { q: "Un plateau de bureaux doit pouvoir changer de cloisons. Système constructif adapté ?", choix: ["poteaux-poutres", "murs porteurs en maçonnerie", "murs porteurs en béton banché", "voûte en pierre"], bonne: 0, expl: "Les poteaux libèrent le plan : les cloisons ne portent rien.", niv: 1 },
        { q: "Poteau en bois de 20 × 20 cm sous 200 kN. Contrainte de compression ?", choix: ["50 MPa", "5 MPa", "0,5 MPa", "10 MPa"], bonne: 1, expl: "200 000 N / 40 000 mm² = 5 MPa.", niv: 2 },
        { q: "Structure en acier de 50 m, écart de température 40 °C, α = 12 × 10^-6 /°C. Allongement ?", choix: ["4,8 mm", "2,4 mm", "12 mm", "24 mm"], bonne: 3, expl: "12 × 10^-6 × 50 000 mm × 40 = 24 mm.", niv: 2 },
        { q: "Dans une poutre en béton armé sur deux appuis, les aciers principaux sont placés :", choix: ["au milieu de la hauteur", "en haut, dans la zone comprimée", "en bas, dans la zone tendue", "à l'extérieur du béton"], bonne: 2, expl: "Le béton résiste mal en traction : l'acier la reprend.", niv: 1 },
        { q: "Les diagonales en acier d'un hangar, disposées en croix, servent à :", choix: ["isoler du bruit", "porter la toiture", "contreventer la structure", "évacuer l'eau de pluie"], bonne: 2, expl: "Ce sont des croix de Saint-André.", niv: 2 },
        { q: "Poteau en béton armé de 12 m, section 0,3 × 0,3 m, 25 kN/m³. Poids propre ?", choix: ["2,7 kN", "27 kN", "9 kN", "90 kN"], bonne: 1, expl: "0,09 m² × 12 m = 1,08 m³ ; 1,08 × 25 = 27 kN.", niv: 3 },
        { q: "Le matériau le plus léger pour une structure, à volume égal, est :", choix: ["le bois", "le béton armé", "l'acier", "la pierre"], bonne: 0, expl: "Environ 500 kg/m³ contre 2 500 et 7 850.", niv: 1 },
        { q: "Pourquoi un poteau très long et très fin est-il risqué, même peu chargé ?", choix: ["Il devient trop lourd", "Il se dilate moins", "Il transmet moins bien les charges", "Il peut flamber"], bonne: 3, expl: "Le flambement survient avant la limite de résistance.", niv: 2 },
        { q: "Volume 0,48 m³ : masse en bois (500 kg/m³) et en acier (7 850 kg/m³) ?", choix: ["480 kg et 7 850 kg", "240 kg et 3 768 kg", "24 kg et 377 kg", "500 kg et 7 850 kg"], bonne: 1, expl: "0,48 × 500 = 240 kg ; 0,48 × 7 850 = 3 768 kg.", niv: 3 },
        { q: "Un long bâtiment de 120 m est coupé en deux par un joint. Ce joint sert à :", choix: ["porter les planchers", "contreventer le bâtiment", "isoler du froid", "absorber la dilatation"], bonne: 3, expl: "Sans joint, les variations de longueur fissureraient la structure.", niv: 2 },
        { q: "Le béton résiste bien :", choix: ["en compression", "en traction", "en flexion sans armature", "à la corrosion des aciers"], bonne: 0, expl: "D'où les armatures pour la traction.", niv: 1 },
        { q: "Pour un gymnase de 40 m de portée sans poteau intermédiaire, on choisit plutôt :", choix: ["une ossature bois à montants de 60 cm", "des murs porteurs en briques", "une charpente métallique ou en lamellé-collé", "un plancher en béton de 20 cm"], bonne: 2, expl: "Ces systèmes franchissent de grandes portées avec un poids raisonnable.", niv: 3 },
      ] },
    { chapitre: 'sti2d-ac-7',
      fiche: `## Thermique de l'enveloppe

L'enveloppe (murs, toiture, plancher bas, fenêtres) sépare l'intérieur de l'extérieur. Les sujets AC demandent de calculer la résistance thermique d'une paroi, son coefficient U, l'épaisseur d'isolant nécessaire, puis les flux de chaleur et la puissance de chauffage ou de climatisation.

### Les grandeurs
- **Conductivité thermique λ** (W/(m·K)) : aptitude d'un matériau à conduire la chaleur. Isolant : λ ≈ 0,03 à 0,04 ; bois 0,13 ; béton 1,5 à 2 ; acier 50.
- **Résistance thermique d'une couche : R = e / λ** (m²·K/W), avec e en mètres. 12 cm de laine de roche à λ = 0,035 : R = 0,12 / 0,035 ≈ 3,43 m²·K/W.
- **Résistances superficielles** Rsi (intérieur, environ 0,13) et Rse (extérieur, environ 0,04) : les échanges entre l'air et la surface.
- **Résistance totale** : on additionne les couches en série : **Rtot = Rsi + somme des e / λ + Rse**.
- **Coefficient de transmission U = 1 / Rtot** (W/(m²·K)). Plus U est petit, mieux la paroi isole.

### Exemple de paroi
- Béton 20 cm (λ = 2) : 0,10 ; isolant 12 cm (λ = 0,035) : 3,43 ; plaque de plâtre 1,3 cm (λ = 0,25) : 0,05.
- Rtot = 0,13 + 0,10 + 3,43 + 0,05 + 0,04 ≈ 3,75 m²·K/W ; U ≈ 1 / 3,75 ≈ **0,27 W/(m²·K)**.
- L'isolant fait presque toute la résistance : les autres couches comptent peu.

### L'épaisseur d'isolant
- Si on vise une résistance R cible : R isolant = R cible - (résistances des autres couches) ; puis **e = λ × R isolant**.
- Exemple : viser Rtot = 5 ; les autres couches font 0,32 ; R isolant = 4,68 ; avec λ = 0,035 : e = 0,035 × 4,68 ≈ 0,164 m, soit environ **17 cm** (on arrondit à l'épaisseur commerciale supérieure).

### Les flux de chaleur
- **Flux à travers une paroi : Φ = U × S × ΔT** (W). Mur de 20 m², U = 0,3, écart de 13 °C : Φ = 0,3 × 20 × 13 = **78 W**.
- Le total des déperditions additionne les parois, les fenêtres (U bien plus élevé, environ 1,1 à 1,5 pour un double vitrage), les **ponts thermiques** et la ventilation.
- En été, on additionne aussi les **apports solaires** par les vitrages et les apports internes (personnes, appareils) pour dimensionner la **climatisation**.
- Puissance d'un équipement : on compare la puissance nécessaire à la puissance disponible (par exemple 80 W par m² de plancher × la surface).

### Les ponts thermiques et l'isolation
- Un **pont thermique** est une zone où l'isolant est interrompu (jonction mur-plancher, tour de fenêtre, balcon) : la chaleur s'y échappe et l'humidité peut condenser.
- L'**isolation par l'extérieur** supprime la plupart des ponts thermiques et garde l'inertie du mur côté intérieur ; l'**isolation par l'intérieur** est moins chère mais laisse les jonctions de planchers non isolées.
- L'**inertie thermique** (matériaux lourds à l'intérieur) lisse les variations de température et aide au confort d'été.

### À retenir pour le bac
- R = e / λ (e en mètres) ; Rtot = Rsi + somme des R + Rse ; U = 1 / Rtot.
- e isolant = λ × (R cible - autres R).
- Φ = U × S × ΔT ; additionner parois, vitrages, ponts thermiques, apports solaires.
- Isolation par l'extérieur : moins de ponts thermiques.
- Piège : écrire l'épaisseur en mètres, pas en centimètres.`,
      cartes: [
        { q: "Conductivité thermique λ ?", r: "L'aptitude d'un matériau à conduire la chaleur, en W/(m·K)." },
        { q: "Résistance thermique d'une couche ?", r: "R = e / λ, avec e en mètres." },
        { q: "Résistance totale d'une paroi ?", r: "Rsi + somme des e / λ des couches + Rse." },
        { q: "Coefficient U ?", r: "U = 1 / Rtot, en W/(m²·K) : plus il est petit, mieux la paroi isole." },
        { q: "Ordre de grandeur de λ pour un isolant ?", r: "Environ 0,03 à 0,04 W/(m·K)." },
        { q: "Valeurs courantes de Rsi et Rse pour un mur ?", r: "Environ 0,13 et 0,04 m²·K/W." },
        { q: "Calculer l'épaisseur d'isolant pour une résistance visée ?", r: "e = λ × (R cible - résistances des autres couches)." },
        { q: "Flux à travers une paroi ?", r: "Φ = U × S × ΔT, en watts." },
        { q: "Pont thermique ?", r: "Une zone où l'isolant est interrompu et par laquelle la chaleur s'échappe." },
        { q: "Avantage de l'isolation par l'extérieur ?", r: "Elle supprime la plupart des ponts thermiques et garde l'inertie à l'intérieur." },
        { q: "Inertie thermique ?", r: "La capacité des matériaux lourds à stocker la chaleur et lisser les variations de température." },
        { q: "Que compter pour dimensionner une climatisation ?", r: "Flux à travers les parois, apports solaires des vitrages, apports internes." },
        { q: "U d'un double vitrage courant ?", r: "Environ 1,1 à 1,5 W/(m²·K), bien plus qu'un mur isolé." },
      ],
      quiz: [
        { q: "12 cm de laine de roche, λ = 0,035 W/(m·K). Résistance thermique ?", choix: ["342 m²·K/W", "0,0042 m²·K/W", "0,29 m²·K/W", "3,43 m²·K/W"], bonne: 3, expl: "0,12 / 0,035 ≈ 3,43 : l'épaisseur doit être en mètres.", niv: 1 },
        { q: "Une paroi a une résistance totale de 4 m²·K/W. Son coefficient U ?", choix: ["0,4 W/(m²·K)", "4 W/(m²·K)", "0,25 W/(m²·K)", "2,5 W/(m²·K)"], bonne: 2, expl: "U = 1 / 4 = 0,25.", niv: 2 },
        { q: "Mur de 20 m², U = 0,3 W/(m²·K), 35 °C dehors et 22 °C dedans. Flux entrant ?", choix: ["78 W", "156 W", "132 W", "210 W"], bonne: 0, expl: "0,3 × 20 × 13 = 78 W.", niv: 2 },
        { q: "Parmi ces matériaux, lequel isole le mieux ?", choix: ["le béton, λ = 1,75", "la laine de bois, λ = 0,038", "le bois massif, λ = 0,13", "l'acier, λ = 50"], bonne: 1, expl: "Plus λ est petit, mieux le matériau isole.", niv: 1 },
        { q: "Rsi = 0,13, béton 0,10, isolant 3,43, plâtre 0,05, Rse = 0,04. Valeur de U ?", choix: ["3,75 W/(m²·K)", "0,27 W/(m²·K)", "0,29 W/(m²·K)", "0,37 W/(m²·K)"], bonne: 1, expl: "Rtot = 3,75 ; U = 1 / 3,75 ≈ 0,27.", niv: 2 },
        { q: "On vise Rtot = 5 ; les autres couches font 0,32 ; isolant λ = 0,035. Épaisseur minimale ?", choix: ["16,4 cm", "13,4 cm", "4,7 cm", "1,6 cm"], bonne: 0, expl: "R isolant = 4,68 ; e = 0,035 × 4,68 ≈ 0,164 m.", niv: 3 },
        { q: "Une zone où l'isolant est interrompu, au niveau d'un balcon, s'appelle :", choix: ["un joint de dilatation", "un pare-vapeur", "un pont thermique", "une lame d'air"], bonne: 2, expl: "La chaleur s'y échappe et l'humidité peut y condenser.", niv: 1 },
        { q: "Le cahier des charges impose U ≤ 0,3 W/(m²·K). Une paroi a Rtot = 3,1 m²·K/W. Conforme ?", choix: ["On ne peut pas savoir sans λ", "Oui : U ≈ 0,29 reste sous 0,3", "Oui : 3,1 dépasse largement 0,3", "Non : U ≈ 0,32 dépasse 0,3"], bonne: 3, expl: "U = 1 / 3,1 ≈ 0,32, au-dessus de 0,3 : non conforme.", niv: 2 },
        { q: "Cabine de 15,2 m² ; clim de 80 W/m² ; besoin calculé 1 100 W. Conclusion ?", choix: ["Suffisante : 1 216 W disponibles", "Insuffisante : 1 100 W manquent", "Insuffisante : il faut 80 W de plus", "Suffisante : 80 W dépasse le besoin"], bonne: 0, expl: "80 × 15,2 = 1 216 W, plus que 1 100 W.", niv: 3 },
        { q: "L'isolation par l'extérieur a pour principal avantage :", choix: ["d'empêcher toute ventilation", "d'être la solution la moins chère", "de réduire la surface habitable", "de supprimer la plupart des ponts thermiques"], bonne: 3, expl: "L'isolant passe devant les planchers et les refends.", niv: 2 },
        { q: "Le coefficient U s'exprime en :", choix: ["W/(m·K)", "m²·K/W", "W/(m²·K)", "kWh/m²"], bonne: 2, expl: "R est en m²·K/W et λ en W/(m·K).", niv: 1 },
        { q: "Doubler l'épaisseur d'isolant d'une paroi presque entièrement faite d'isolant divise ses pertes environ par :", choix: ["4", "2", "1,2", "8"], bonne: 1, expl: "R double à peu près, donc U et le flux sont divisés par 2 environ.", niv: 3 },
      ] },
    { chapitre: 'sti2d-ac-8',
      fiche: `## Humidité, condensation et renouvellement d'air

Un bâtiment bien isolé doit aussi gérer l'eau et l'air : la vapeur d'eau produite par les occupants peut condenser dans les parois, et l'air doit être renouvelé pour la santé. Les sujets demandent de situer un point de rosée, de placer un pare-vapeur ou de dimensionner une ventilation.

### L'air humide
- L'air contient de la vapeur d'eau. L'**humidité relative** (HR, en %) compare la vapeur présente au maximum que l'air peut contenir à cette température.
- L'air chaud peut contenir beaucoup plus de vapeur que l'air froid. Quand un air humide se refroidit, son HR monte ; à 100 %, la vapeur se transforme en eau : c'est la **condensation**.
- La **température de rosée** est la température à laquelle cette condensation commence. Ordre de grandeur : air à 20 °C et 50 % d'HR, rosée vers **9 °C**.
- Un **diagramme de l'air humide** (diagramme psychrométrique) permet de lire la température de rosée à partir de la température et de l'HR.
- Confort courant : HR entre 40 et 60 %. Trop d'humidité : moisissures, acariens, odeurs, dégradation des matériaux ; trop peu : air sec qui irrite.

### La condensation dans une paroi
- En hiver, la vapeur migre du chaud (intérieur) vers le froid (extérieur) à travers la paroi.
- La température baisse à l'intérieur de la paroi, surtout dans l'isolant. Là où elle passe sous la température de rosée, la vapeur peut condenser : **condensation dans la paroi**.
- Conséquences : isolant mouillé qui n'isole plus, bois qui pourrit, moisissures, aciers corrodés.
- Pour situer le point de rosée : on trace la température dans chaque couche (elle chute dans chaque couche en proportion de sa résistance thermique), puis on repère où elle croise la température de rosée.

### Le pare-vapeur
- Un **pare-vapeur** (ou frein-vapeur) est une membrane qui limite le passage de la vapeur. Il se place **du côté chaud**, c'est-à-dire côté intérieur de l'isolant.
- Sa performance s'exprime par la valeur **Sd** (en mètres d'air équivalent) : plus Sd est grand, plus la membrane bloque la vapeur.
- Règle de conception : des couches de plus en plus ouvertes à la vapeur de l'intérieur vers l'extérieur, pour que l'humidité puisse sortir.
- Les ponts thermiques sont des points froids où la condensation apparaît en surface.

### Le renouvellement d'air
- Il évacue l'humidité, le CO2, les odeurs et les polluants. Le débit d'air neuf se fixe **par personne** selon l'usage (de l'ordre de **25 m³/h par occupant** dans des bureaux ou une salle de sport) ou par pièce dans un logement.
- Exemple : une salle de 200 personnes à 25 m³/h chacune demande 5 000 m³/h.
- **Vitesse de l'air dans une gaine ou un caisson : v = débit / section**, avec le débit en m³/s. 5 000 m³/h = 1,39 m³/s ; dans une section de 0,5 m², v ≈ 2,8 m/s. Une vitesse trop forte fait du bruit et des courants d'air.
- **VMC simple flux** : des bouches extraient l'air vicié des pièces humides, l'air neuf entre par les fenêtres. **Double flux** : l'air neuf est soufflé et l'air vicié extrait par deux réseaux, et un **échangeur** récupère jusqu'à environ 80 à 90 % de la chaleur de l'air sortant.
- Les **filtres** retiennent les poussières et pollens ; on les choisit selon la finesse de filtration voulue.

### À retenir pour le bac
- Condensation quand l'air atteint sa température de rosée (HR = 100 %).
- Pare-vapeur côté chaud (intérieur) de l'isolant ; Sd grand = bloque la vapeur.
- Débit d'air neuf = nombre de personnes × débit par personne.
- v = débit / section, avec le débit en m³/s.
- Double flux : récupération de chaleur par un échangeur.`,
      cartes: [
        { q: "Humidité relative ?", r: "La part de vapeur présente par rapport au maximum que l'air peut contenir à cette température." },
        { q: "Température de rosée ?", r: "La température à laquelle la vapeur de l'air commence à condenser." },
        { q: "Rosée d'un air à 20 °C et 50 % d'HR ?", r: "Environ 9 °C." },
        { q: "Humidité de confort ?", r: "Entre 40 et 60 % d'humidité relative." },
        { q: "Dommages d'une humidité trop forte ?", r: "Moisissures, acariens, isolant mouillé, bois pourri, aciers corrodés." },
        { q: "Sens de migration de la vapeur en hiver ?", r: "Du chaud (intérieur) vers le froid (extérieur)." },
        { q: "Où placer le pare-vapeur ?", r: "Du côté chaud de l'isolant, côté intérieur." },
        { q: "Valeur Sd ?", r: "L'épaisseur d'air équivalente : plus elle est grande, plus la couche bloque la vapeur." },
        { q: "Débit d'air neuf d'une salle ?", r: "Nombre de personnes × débit par personne (environ 25 m³/h)." },
        { q: "Vitesse de l'air dans un conduit ?", r: "v = débit en m³/s / section en m²." },
        { q: "VMC simple flux ?", r: "Elle extrait l'air des pièces humides ; l'air neuf entre par des entrées d'air." },
        { q: "Intérêt d'une VMC double flux ?", r: "Son échangeur récupère une grande partie de la chaleur de l'air extrait." },
        { q: "Risque d'une vitesse d'air trop élevée ?", r: "Du bruit et des courants d'air gênants." },
      ],
      quiz: [
        { q: "Un air qui se refroidit atteint 100 % d'humidité relative. Que se passe-t-il ?", choix: ["L'humidité disparaît", "L'air se dessèche", "La vapeur condense", "La température remonte d'elle-même"], bonne: 2, expl: "C'est la température de rosée.", niv: 1 },
        { q: "Une salle de sport accueille 200 personnes, 25 m³/h par personne. Débit d'air neuf ?", choix: ["225 m³/h", "5 000 m³/h", "8 m³/h", "500 m³/h"], bonne: 1, expl: "200 × 25 = 5 000 m³/h.", niv: 2 },
        { q: "5 000 m³/h passent dans un caisson de 0,5 m² de section. Vitesse de l'air ?", choix: ["1,39 m/s", "10 000 m/s", "0,36 m/s", "2,8 m/s"], bonne: 3, expl: "5 000 / 3 600 ≈ 1,39 m³/s ; 1,39 / 0,5 ≈ 2,8 m/s.", niv: 2 },
        { q: "Dans un mur isolé par l'intérieur, le pare-vapeur se place :", choix: ["côté intérieur de l'isolant", "côté extérieur du mur", "au milieu du béton", "derrière le crépi extérieur"], bonne: 0, expl: "Il arrête la vapeur avant qu'elle n'atteigne les zones froides.", niv: 1 },
        { q: "Air intérieur à 20 °C et 50 % d'HR. Une vitre est à 7 °C. Que risque-t-on ?", choix: ["De la buée sur la vitre", "Un air trop sec", "Pas de changement visible", "Une hausse de la température de la pièce"], bonne: 0, expl: "7 °C est sous la température de rosée (environ 9 °C).", niv: 2 },
        { q: "Dans une paroi en hiver, l'isolant passe de 15 °C à 2 °C ; rosée 9 °C. Où peut-il y avoir condensation ?", choix: ["Dans l'air de la pièce", "Sur la face intérieure du mur", "Dans la partie froide de l'isolant, sous 9 °C", "Nulle part, l'isolant l'empêche"], bonne: 2, expl: "Là où la température descend sous la rosée, la vapeur peut condenser : d'où le pare-vapeur côté chaud.", niv: 3 },
        { q: "Une humidité relative confortable se situe entre :", choix: ["5 et 15 %", "40 et 60 %", "80 et 100 %", "0 et 10 %"], bonne: 1, expl: "Au-dessus, moisissures et acariens ; au-dessous, air irritant.", niv: 1 },
        { q: "Une VMC double flux économise de l'énergie parce que :", choix: ["elle ferme les entrées d'air la nuit", "elle supprime la ventilation", "sa résistance électrique chauffe l'air", "son échangeur récupère la chaleur de l'air extrait"], bonne: 3, expl: "L'air neuf est préchauffé par l'air sortant.", niv: 2 },
        { q: "Il faut 18 000 m³/h ; un caisson traite au plus 4 000 m³/h. Nombre minimal de caissons ?", choix: ["6", "4", "3", "5"], bonne: 3, expl: "18 000 / 4 000 = 4,5 : on arrondit au-dessus, 5 caissons.", niv: 3 },
        { q: "Plus la valeur Sd d'une membrane est grande :", choix: ["plus elle isole du froid", "plus elle bloque la vapeur", "plus elle laisse passer la vapeur", "plus elle est fine"], bonne: 1, expl: "Sd est l'épaisseur d'air qui freinerait autant la vapeur.", niv: 2 },
        { q: "Une VMC simple flux extrait l'air :", choix: ["dans le salon", "dans les chambres", "dans les pièces humides", "par les fenêtres"], bonne: 2, expl: "Cuisine, salle de bains, toilettes.", niv: 1 },
        { q: "Pourquoi une vitesse d'air de 8 m/s en sortie de bouche gênerait-elle des sportifs ?", choix: ["Bruit et courants d'air sur le terrain", "Elle réchaufferait trop la salle", "L'humidité de la salle monterait", "Elle réduirait le débit d'air neuf"], bonne: 0, expl: "On limite la vitesse en agrandissant la section ou en multipliant les bouches.", niv: 3 },
      ] },
    { chapitre: 'sti2d-ac-9',
      fiche: `## Acoustique du bâtiment et de l'environnement

Le bruit est une gêne et un risque pour la santé. En AC, on calcule un niveau sonore à une distance, on vérifie une émergence réglementaire (bruit d'une éolienne, d'une installation) et on choisit des solutions d'isolation ou de correction acoustique.

### Les niveaux en décibels
- Le niveau sonore s'exprime en **décibels** ; le **dB(A)** tient compte de la sensibilité de l'oreille. Repères : conversation 60 dB(A), rue animée 70 à 80, seuil de danger vers 85, seuil de douleur vers 120.
- Les décibels **ne s'additionnent pas** comme des nombres : deux sources égales donnent **+3 dB** (60 + 60 = 63 dB) ; dix sources égales donnent +10 dB.
- Formule générale : L = 10 × log(10^(L1/10) + 10^(L2/10)). Si une source dépasse l'autre de 10 dB ou plus, la plus faible ne change presque rien.

### La propagation en champ libre
- **Niveau de puissance** LW : ce que la source émet. **Niveau de pression** LP : ce qu'on entend à une distance d.
- Relation en champ libre : **LP = LW + 10 × log(Q / (4 × π × d²))**, avec Q le **facteur de directivité** : 1 si l'onde rayonne dans toutes les directions (source en hauteur), 2 si elle rayonne au-dessus du sol, 4 contre un mur posé au sol.
- Exemple : LW = 102 dB(A), Q = 1, d = 4 m : LP = 102 + 10 × log(1 / 201) ≈ 102 - 23 = **79 dB(A)**.
- Règle pratique : le niveau **baisse de 6 dB chaque fois que la distance double**. De 79 dB à 4 m : 73 à 8 m, 67 à 16 m, et ainsi de suite.
- Distance entre une source en hauteur et un point au sol : **Pythagore**, D = racine(h² + x²). Nacelle à 120 m, maison à 500 m du pied : D ≈ 514 m.

### L'émergence
- **Émergence E = bruit ambiant (avec l'installation) - bruit résiduel (sans elle).**
- En zone à émergence réglementée (habitations), elle ne doit pas dépasser **5 dB(A) le jour** (7 h - 22 h) et **3 dB(A) la nuit** (22 h - 7 h), quand le bruit ambiant dépasse 35 dB(A).
- Exemple : la nuit, ambiant 38 dB(A), résiduel 34 : E = 4 dB(A), plus que 3 : non conforme. Solutions : brider les éoliennes la nuit (rotation ralentie), écarter les machines, choisir des pales plus silencieuses.

### Isoler et corriger
- **Isolation acoustique** : empêcher le bruit de passer d'un local à l'autre. **Loi de masse** : doubler la masse surfacique d'une paroi améliore l'isolement d'environ 6 dB. Le système **masse-ressort-masse** (deux plaques séparées par un isolant fibreux) isole mieux qu'une paroi simple de même masse.
- Bruits d'impact (pas, chocs) : chape flottante sur un résilient, sols souples.
- **Correction acoustique** : réduire la réverbération à l'intérieur d'un local avec des matériaux **absorbants** (coefficient α proche de 1 : laine minérale, panneaux perforés, textiles).
- **Temps de réverbération** (formule de Sabine) : **T = 0,16 × V / A**, avec V le volume (m³) et A l'aire d'absorption équivalente (somme des α × S, en m²). Une salle de 500 m³ avec A = 80 m² : T = 1 s. Une salle de classe vise environ 0,4 à 0,8 s.

### À retenir pour le bac
- Deux sources égales : +3 dB ; doubler la distance : -6 dB.
- LP = LW + 10 × log(Q / (4 × π × d²)).
- Émergence = ambiant - résiduel ; 5 dB(A) le jour, 3 dB(A) la nuit.
- Isolation (masse, masse-ressort-masse) et correction (absorbants, T = 0,16 × V / A).
- Piège : ne jamais additionner deux niveaux en décibels comme des nombres ordinaires.`,
      cartes: [
        { q: "Unité qui tient compte de la sensibilité de l'oreille ?", r: "Le décibel A, dB(A)." },
        { q: "Deux sources de même niveau ?", r: "Le niveau total augmente de 3 dB." },
        { q: "Effet du doublement de la distance en champ libre ?", r: "Le niveau baisse de 6 dB." },
        { q: "Relation de propagation en champ libre ?", r: "LP = LW + 10 × log(Q / (4 × π × d²))." },
        { q: "Facteur de directivité Q d'une source en hauteur ?", r: "Q = 1 : l'onde rayonne dans toutes les directions." },
        { q: "Définition de l'émergence ?", r: "Bruit ambiant avec l'installation moins bruit résiduel sans elle." },
        { q: "Émergences maximales en zone réglementée ?", r: "5 dB(A) le jour, 3 dB(A) la nuit." },
        { q: "Loi de masse ?", r: "Doubler la masse surfacique d'une paroi améliore l'isolement d'environ 6 dB." },
        { q: "Système masse-ressort-masse ?", r: "Deux parois séparées par un isolant fibreux : meilleur isolement qu'une paroi simple de même masse." },
        { q: "Isolation ou correction acoustique ?", r: "Isoler : empêcher le bruit de passer ; corriger : réduire la réverbération dans le local." },
        { q: "Formule de Sabine ?", r: "T = 0,16 × V / A, A étant la somme des α × S." },
        { q: "Matériau absorbant ?", r: "Un matériau de coefficient α proche de 1, comme la laine minérale ou un panneau perforé." },
        { q: "Seuil de danger pour l'oreille ?", r: "Environ 85 dB(A) en exposition prolongée." },
      ],
      quiz: [
        { q: "Deux machines produisent chacune 60 dB(A). Niveau total ?", choix: ["120 dB(A)", "63 dB(A)", "60 dB(A)", "66 dB(A)"], bonne: 1, expl: "Deux sources égales : +3 dB.", niv: 1 },
        { q: "Une source donne 79 dB(A) à 4 m. Niveau à 16 m en champ libre ?", choix: ["19,75 dB(A)", "73 dB(A)", "61 dB(A)", "67 dB(A)"], bonne: 3, expl: "4 à 8 m : -6 dB ; 8 à 16 m : -6 dB ; 79 - 12 = 67.", niv: 2 },
        { q: "LW = 102 dB(A), Q = 1, d = 4 m. Niveau LP, arrondi ?", choix: ["79 dB(A)", "98 dB(A)", "90 dB(A)", "85 dB(A)"], bonne: 0, expl: "4 × π × 16 ≈ 201 ; 10 × log(1 / 201) ≈ -23 ; 102 - 23 = 79.", niv: 2 },
        { q: "L'émergence est la différence entre :", choix: ["deux éoliennes voisines", "le bruit de jour et le bruit de nuit", "le bruit ambiant et le bruit résiduel", "la puissance et la pression acoustiques"], bonne: 2, expl: "Ambiant avec l'installation, résiduel sans elle.", niv: 1 },
        { q: "Nuit : bruit ambiant 38 dB(A), résiduel 34 dB(A). La réglementation est-elle respectée ?", choix: ["Non : il faut une émergence nulle", "Oui : 4 dB(A) est sous 5 dB(A)", "Oui : 38 dB(A) est un bruit faible", "Non : 4 dB(A) dépasse 3 dB(A)"], bonne: 3, expl: "La nuit, l'émergence est limitée à 3 dB(A).", niv: 2 },
        { q: "Nacelle à 120 m de haut, maison à 500 m du pied du mât. Distance source-maison, environ ?", choix: ["620 m", "514 m", "500 m", "380 m"], bonne: 1, expl: "Racine de 120² + 500² ≈ 514 m.", niv: 3 },
        { q: "Pour réduire l'écho d'une cantine bruyante, on ajoute :", choix: ["des vitrages plus grands", "un carrelage plus dur", "des panneaux absorbants au plafond", "un mur en béton plus épais"], bonne: 2, expl: "C'est une correction acoustique : elle réduit la réverbération.", niv: 1 },
        { q: "Une salle de 500 m³ a une aire d'absorption de 80 m². Temps de réverbération ?", choix: ["1 s", "6,25 s", "2 s", "12,8 s"], bonne: 0, expl: "0,16 × 500 / 80 = 1 s.", niv: 2 },
        { q: "Une source de 60 dB(A) et une de 70 dB(A) fonctionnent ensemble. Niveau total, environ ?", choix: ["80 dB(A)", "130 dB(A)", "70,4 dB(A)", "73 dB(A)"], bonne: 2, expl: "La source de 10 dB plus faible n'ajoute que 0,4 dB.", niv: 3 },
        { q: "Doubler la masse surfacique d'une cloison améliore son isolement d'environ :", choix: ["6 dB", "3 dB", "1 dB", "20 dB"], bonne: 0, expl: "C'est la loi de masse.", niv: 2 },
        { q: "Un niveau sonore de 85 dB(A) prolongé correspond à :", choix: ["un bruit inaudible", "une conversation calme", "le silence d'une chambre", "un risque pour l'audition"], bonne: 3, expl: "On protège l'oreille dès ce niveau.", niv: 1 },
        { q: "Un parc éolien dépasse l'émergence la nuit seulement. Solution la plus simple ?", choix: ["Repeindre les mâts", "Brider les éoliennes la nuit", "Augmenter la vitesse de rotation", "Ajouter une éolienne"], bonne: 1, expl: "Une rotation ralentie réduit le bruit aérodynamique des pales.", niv: 3 },
      ] },
    { chapitre: 'sti2d-ac-10',
      fiche: `## RE 2020, impact carbone et confort d'été

Depuis 2022, les bâtiments neufs en France suivent la **réglementation environnementale RE 2020**. Elle ne regarde plus seulement la consommation d'énergie : elle mesure aussi le carbone émis pour construire et le confort en été. Les sujets demandent de lire une fiche environnementale, de calculer un impact et de justifier un choix de matériau.

### Les trois objectifs
- **Sobriété énergétique** : un bâtiment qui a peu besoin de chauffage, de froid et d'éclairage grâce à sa conception.
- **Décarbonation** : moins d'émissions de gaz à effet de serre sur tout le cycle de vie (construction et exploitation).
- **Confort d'été** : des logements qui restent vivables pendant les canicules.

### Les indicateurs
- **Bbio** (besoin bioclimatique) : il juge la conception (orientation, compacité, isolation, vitrages) avant tout équipement. Plus il est bas, mieux c'est.
- **Cep** : consommation d'énergie primaire (chauffage, eau chaude, refroidissement, éclairage, ventilation). **Cep,nr** : la part non renouvelable. L'énergie primaire tient compte de la production : en RE 2020, 1 kWh d'électricité consommé compte pour **2,3 kWh** d'énergie primaire.
- **Ic énergie** : les émissions de CO2 dues aux énergies consommées pendant 50 ans.
- **Ic construction** : les émissions dues aux produits et matériaux et au chantier, sur tout leur cycle de vie, en **kg éq. CO2 par m²**. Le seuil **baisse par étapes** (2022, 2025, 2028, 2031) : pour une maison individuelle, environ 640 puis 530 puis 475 puis 415 kg éq. CO2/m².
- **DH** (degrés-heures d'inconfort) : il compte, pendant une canicule type, combien de degrés et combien d'heures la température intérieure dépasse le confort. Limite haute : **1 250 °C·h**.

### Calculer un impact carbone
- Les fabricants publient des **FDES** (fiches de déclaration environnementale et sanitaire) ; pour les équipements, des **PEP**. Elles donnent l'impact par **unité fonctionnelle** (UF), par exemple 1 m² de mur isolé à R = 5 pendant 50 ans.
- **Impact = quantité × impact par UF.** Exemple : 120 m² d'isolant à 4 kg éq. CO2 par m² : 480 kg éq. CO2.
- **Ic construction = total des impacts / surface du bâtiment.** Exemple : 72 000 kg éq. CO2 pour 120 m² : 600 kg éq. CO2/m², au-dessus du seuil de 530 : il faut changer des matériaux.
- Les matériaux **biosourcés** (bois, paille, chanvre, ouate de cellulose, laine de bois) stockent du carbone pendant la vie du bâtiment et ont souvent un faible impact. Le béton bas carbone et le réemploi de matériaux réduisent aussi l'Ic.

### Le confort d'été
- **Protections solaires** : volets, brise-soleil, casquettes au-dessus des fenêtres au sud (elles coupent le soleil haut de l'été et laissent passer le soleil bas de l'hiver), stores extérieurs (bien plus efficaces qu'à l'intérieur).
- **Inertie thermique** : des matériaux lourds à l'intérieur absorbent la chaleur du jour.
- **Ventilation nocturne** : ouvrir ou ventiler la nuit pour évacuer la chaleur stockée.
- **Facteur solaire** d'un vitrage : la part de l'énergie solaire qui entre ; plus il est faible, moins le vitrage chauffe la pièce.
- Végétalisation, toiture claire ou végétale, limiter les grandes baies à l'ouest.

### À retenir pour le bac
- RE 2020 : sobriété, décarbonation, confort d'été.
- Bbio (conception), Cep (énergie primaire), Ic énergie, Ic construction (kg éq. CO2/m²), DH (inconfort, 1 250 °C·h au plus).
- Impact = quantité × impact par unité fonctionnelle ; Ic = total / surface.
- Biosourcés : stockage de carbone, faible impact.
- Piège : comparer à l'unité fonctionnelle de la FDES, pas au kilo de matériau.`,
      cartes: [
        { q: "Trois objectifs de la RE 2020 ?", r: "Sobriété énergétique, décarbonation, confort d'été." },
        { q: "Indicateur Bbio ?", r: "Le besoin bioclimatique : il juge la conception du bâtiment avant les équipements." },
        { q: "Indicateur Cep ?", r: "La consommation d'énergie primaire pour chauffer, refroidir, éclairer, ventiler et produire l'eau chaude." },
        { q: "Coefficient d'énergie primaire de l'électricité en RE 2020 ?", r: "2,3." },
        { q: "Indicateur Ic construction ?", r: "Les émissions des matériaux et du chantier sur leur cycle de vie, en kg éq. CO2 par m²." },
        { q: "Évolution du seuil Ic construction ?", r: "Il baisse par étapes en 2022, 2025, 2028 et 2031." },
        { q: "Indicateur DH ?", r: "Les degrés-heures d'inconfort en été ; limite haute 1 250 °C·h." },
        { q: "Qu'est-ce qu'une FDES ?", r: "La fiche environnementale d'un produit de construction, par unité fonctionnelle." },
        { q: "Unité fonctionnelle ?", r: "La quantité de service rendu à laquelle se rapporte l'impact, par exemple 1 m² de mur isolé pendant 50 ans." },
        { q: "Calcul de l'Ic construction ?", r: "Somme des quantités × impacts par UF, divisée par la surface." },
        { q: "Intérêt des matériaux biosourcés ?", r: "Ils stockent du carbone et ont souvent un faible impact." },
        { q: "Rôle d'une casquette au-dessus d'une baie au sud ?", r: "Couper le soleil haut de l'été et laisser entrer le soleil bas de l'hiver." },
        { q: "Facteur solaire d'un vitrage ?", r: "La part de l'énergie solaire qui traverse le vitrage." },
      ],
      quiz: [
        { q: "L'indicateur RE 2020 qui mesure le carbone des matériaux et du chantier est :", choix: ["l'Ic construction", "le Bbio", "l'indicateur DH", "le Cep"], bonne: 0, expl: "Il s'exprime en kg éq. CO2 par m².", niv: 1 },
        { q: "120 m² d'isolant, FDES : 4 kg éq. CO2 par m². Impact ?", choix: ["124 kg éq. CO2", "30 kg éq. CO2", "480 kg éq. CO2", "48 kg éq. CO2"], bonne: 2, expl: "120 × 4 = 480 kg éq. CO2.", niv: 2 },
        { q: "Maison de 120 m², impacts totaux 72 000 kg éq. CO2. Ic construction ?", choix: ["8 640 kg éq. CO2/m²", "6 kg éq. CO2/m²", "60 kg éq. CO2/m²", "600 kg éq. CO2/m²"], bonne: 3, expl: "72 000 / 120 = 600.", niv: 2 },
        { q: "Pour un confort d'été, la protection solaire la plus efficace sur une baie est :", choix: ["un rideau intérieur", "un store extérieur", "un double vitrage clair", "une baie plus grande"], bonne: 1, expl: "Le store extérieur arrête le soleil avant le vitrage.", niv: 1 },
        { q: "Ic construction de 600 pour un seuil de 530 kg éq. CO2/m². Que faire ?", choix: ["Changer de chaudière", "Augmenter la surface de vitrage", "Remplacer des matériaux par des produits moins émetteurs", "Rien, l'écart est trop faible"], bonne: 2, expl: "L'Ic construction dépend des matériaux : biosourcés, béton bas carbone, réemploi.", niv: 2 },
        { q: "Un logement consomme 2 000 kWh d'électricité par an. Énergie primaire en RE 2020 ?", choix: ["2 300 kWh", "2 000 kWh", "870 kWh", "4 600 kWh"], bonne: 3, expl: "2 000 × 2,3 = 4 600 kWh d'énergie primaire.", niv: 3 },
        { q: "Le Bbio évalue surtout :", choix: ["la conception du bâtiment", "le prix des équipements", "le carbone du chantier", "la qualité de l'air extérieur"], bonne: 0, expl: "Orientation, compacité, isolation, vitrages.", niv: 1 },
        { q: "Une casquette au-dessus d'une fenêtre au sud :", choix: ["coupe le soleil d'hiver et laisse passer celui d'été", "coupe le soleil d'été et laisse passer celui d'hiver", "isole le vitrage du froid", "remplace la ventilation"], bonne: 1, expl: "Le soleil est haut en été et bas en hiver.", niv: 2 },
        { q: "Mur A : 35 kg éq. CO2 par m² ; mur B en ossature bois : 12. Gain pour 150 m² de murs ?", choix: ["6 900 kg éq. CO2", "3 450 kg éq. CO2", "5 250 kg éq. CO2", "4 200 kg éq. CO2"], bonne: 1, expl: "(35 - 12) × 150 = 3 450 kg éq. CO2.", niv: 3 },
        { q: "Un logement a un DH de 1 400 °C·h. Conclusion ?", choix: ["Trop chaud l'été : au-dessus de la limite de 1 250", "Conforme : sous la limite de 1 500", "Trop froid l'hiver", "Le DH ne concerne pas les logements"], bonne: 0, expl: "La limite haute est de 1 250 °C·h : il faut améliorer le confort d'été.", niv: 2 },
        { q: "Les matériaux biosourcés comme la paille ou le chanvre :", choix: ["ne s'utilisent qu'en toiture", "sont interdits par la RE 2020", "émettent plus que le béton", "stockent du carbone"], bonne: 3, expl: "La plante a capté du CO2 en poussant.", niv: 1 },
        { q: "Une FDES donne 20 kg éq. CO2 par m² de cloison pour une durée de vie de 50 ans. Ce m² sur 50 ans est :", choix: ["le facteur solaire", "le Bbio", "l'unité fonctionnelle", "l'indicateur Ic énergie"], bonne: 2, expl: "L'impact se rapporte au service rendu pendant la durée de vie.", niv: 3 },
      ] },
  ],

  methode: [
    { id: 'sti2d-ac-m1', mat: 'sti2d-ac', titre: "Vérifier une fondation au poinçonnement",
      formules: ["Calculer la masse totale de l'ouvrage", "Déterminer les volumes de la fondation et sa masse", "Calculer la charge permanente verticale correspondant au poids total de la structure", "Calculer la surface de contact et en déduire la contrainte exercée sur le sol", "Calculer le coefficient de sécurité sur la contrainte et vérifier qu'il respecte la valeur minimale"],
      vu: ["Métropole 2025, sujet sur une ferme éolienne, partie spécifique AC : questions A.1 à A.6 (fondation d'une éolienne de 2,4 MW)", "Toute question de fondation ou de descente de charges reprend ces étapes"], pts: "2 à 3 points",
      attendu: "Des volumes simples additionnés, la masse de béton par la masse volumique, le poids total ouvrage plus fondation en kN, la surface de contact, la contrainte en MPa, puis s = σadm / σ comparé au minimum avec une phrase de conclusion.",
      etapes: ["Additionner les masses de l'ouvrage, en tonnes puis en kg", "Découper la fondation en volumes simples et les additionner", "Masse de la fondation = volume × masse volumique", "PV = (masse de l'ouvrage + masse de la fondation) × g, converti en kN", "σ = PV / S, converti en MPa ; s = σadm / σ ; comparer au minimum"],
      mots: ["charge permanente", "poids propre", "surface de contact", "contrainte admissible", "coefficient de sécurité", "poinçonnement"],
      pieges: ["Oublier le poids de la fondation", "Laisser les masses en tonnes dans le calcul du poids", "Confondre kPa et MPa", "Calculer σ / σadm au lieu de σadm / σ"],
      cas: "Une petite éolienne fictive de 300 t repose sur une fondation en béton armé (2 500 kg/m³) faite d'un pavé de 16 m × 16 m × 2 m surmonté d'un cylindre de 6 m de diamètre et 1 m de haut. Le sol a une contrainte admissible de 0,25 MPa ; la sécurité minimale est 2. On prend g = 9,81 m/s².",
      question: "Calculer la charge verticale totale, la contrainte sur le sol et le coefficient de sécurité, puis conclure.",
      modele: `Volume de la fondation : pavé 16 × 16 × 2 = 512 m³ ; cylindre π × 3² × 1 ≈ 28,3 m³ ; total ≈ 540 m³.

Masse de la fondation : 540 × 2 500 ≈ 1 350 000 kg, soit 1 350 t.

Charge verticale : PV = (1 350 000 + 300 000) × 9,81 ≈ 16 190 000 N, soit environ 16 190 kN.

Contrainte sur le sol : S = 16 × 16 = 256 m² ; σ = 16 190 / 256 ≈ 63 kPa = 0,063 MPa.

Sécurité : s = 0,25 / 0,063 ≈ 3,9, plus que le minimum de 2 : la fondation résiste au poinçonnement.`,
      grille: ["Les volumes et la masse de la fondation sont justes", "Le poids total inclut l'ouvrage et la fondation", "La contrainte est juste, avec la bonne unité", "Le coefficient est calculé dans le bon sens et la conclusion est donnée"] },

    { id: 'sti2d-ac-m2', mat: 'sti2d-ac', titre: "Vérifier le non-glissement d'un ouvrage sous le vent",
      formules: ["Relever la vitesse maximale du vent dans la zone du projet et la convertir en m/s", "En déduire la valeur de l'effort horizontal que subit la structure", "Vérifier que la relation de non-glissement est respectée et calculer le coefficient de sécurité", "Indiquer comment la fondation pourrait être optimisée"],
      vu: ["Métropole 2025, sujet sur une ferme éolienne, partie spécifique AC : questions B.1 à B.3 (relation H < PV × tan φ / γ)"], pts: "1,5 à 2 points",
      attendu: "La conversion km/h en m/s, la lecture de H sur la courbe de simulation, le calcul PV × tan φ, la comparaison avec H, puis γ = PV × tan φ / H et une proposition d'optimisation qui tient compte des deux vérifications.",
      etapes: ["Relever la vitesse du vent sur la carte des zones et la diviser par 3,6", "Lire l'effort H sur la courbe effort-vitesse", "Calculer PV × tan φ, la calculatrice en degrés", "Comparer à H, puis calculer γ = PV × tan φ / H", "Conclure et proposer une optimisation (moins de béton si les marges sont grandes)"],
      mots: ["effort horizontal", "frottement", "angle de frottement", "non-glissement", "coefficient de sécurité", "optimisation"],
      pieges: ["Calculatrice en radians", "Lire la courbe avec une vitesse en km/h", "Oublier d'arrondir γ à l'entier inférieur quand l'énoncé le demande", "Proposer d'agrandir une fondation déjà largement sûre"],
      cas: "Un mât fictif est implanté dans une zone où le vent atteint 126 km/h. La simulation donne H = 800 kN pour cette vitesse. La charge verticale minimale vaut PV = 12 000 kN et l'angle de frottement fondation-sol φ = 30°.",
      question: "Vérifier le non-glissement, calculer le coefficient de sécurité arrondi à l'entier inférieur, puis proposer une optimisation.",
      modele: `Vitesse : 126 / 3,6 = 35 m/s, ce qui donne H = 800 kN sur la simulation.

Effort résistant : PV × tan φ = 12 000 × tan 30° ≈ 6 928 kN, bien plus que 800 kN : pas de glissement.

Coefficient de sécurité : γ = 6 928 / 800 ≈ 8,66, soit 8 en arrondissant à l'entier inférieur.

Optimisation : la marge au glissement est très grande ; si la sécurité au poinçonnement l'est aussi, on peut réduire le volume de béton de la fondation, ce qui baisse le coût et l'impact carbone, en gardant les minimums exigés.`,
      grille: ["La vitesse est convertie et H est bien lu", "PV × tan φ est juste", "Le coefficient de sécurité est juste et arrondi", "L'optimisation est cohérente avec les marges trouvées"] },

    { id: 'sti2d-ac-m3', mat: 'sti2d-ac', titre: "Calculer un niveau sonore et vérifier l'émergence",
      formules: ["Calculer la distance entre la source du bruit et un point situé à une distance donnée du pied", "Calculer le niveau sonore LP à une distance d", "Compléter les niveaux acoustiques en fonction de la distance", "Compléter les tableaux en calculant l'émergence", "Conclure sur le respect de la réglementation sur le bruit et proposer une solution"],
      vu: ["Métropole 2025, sujet sur une ferme éolienne, partie spécifique AC : questions C.1 à C.6 (propagation en champ libre, émergence de jour et de nuit)"], pts: "2 à 3 points",
      attendu: "Pythagore pour la distance, la relation LP = LW + 10 × log(Q / (4 × π × d²)), la règle de -6 dB par doublement de distance, l'émergence ambiant moins résiduel comparée à 5 dB(A) le jour et 3 dB(A) la nuit, puis une solution concrète (bridage de nuit, éloignement).",
      etapes: ["Calculer D = racine(h² + x²)", "Calculer LP avec le bon facteur Q", "Compléter le tableau en retirant 6 dB à chaque doublement de distance", "Calculer chaque émergence E = ambiant - résiduel", "Comparer aux limites de jour et de nuit et proposer une solution"],
      mots: ["niveau de puissance", "niveau de pression", "champ libre", "facteur de directivité", "émergence", "bruit résiduel", "bridage"],
      pieges: ["Prendre la distance au sol au lieu de la distance à la nacelle", "Additionner des décibels comme des nombres", "Appliquer la limite de jour la nuit", "Proposer une solution vague (« réduire le bruit »)"],
      cas: "Une éolienne fictive a une nacelle à 100 m de hauteur et un niveau de puissance LW = 100 dB(A) ; on prend Q = 1. Une maison est à 400 m du pied du mât. Mesures : de jour, ambiant 44 dB(A), résiduel 38 ; de nuit, ambiant 37 dB(A), résiduel 35.",
      question: "Calculer la distance source-maison, le niveau dû à l'éolienne, puis les émergences, et conclure.",
      modele: `Distance : D = racine(100² + 400²) ≈ 412 m.

Niveau à la maison : LP = 100 + 10 × log(1 / (4 × π × 412²)) ≈ 100 - 63,3 ≈ 36,7 dB(A).

Émergences : de jour 44 - 38 = 6 dB(A), plus que les 5 autorisés : non conforme. De nuit 37 - 35 = 2 dB(A), sous les 3 autorisés : conforme.

Solution : brider l'éolienne (ralentir sa rotation) pendant les heures de jour où le vent fait dépasser l'émergence, ou choisir des pales à bord dentelé moins bruyantes.`,
      grille: ["La distance par Pythagore est juste", "Le niveau LP est juste", "Les deux émergences sont justes et comparées à la bonne limite", "La solution proposée est précise"] },

    { id: 'sti2d-ac-m4', mat: 'sti2d-ac', titre: "Vérifier une rampe pour les personnes à mobilité réduite",
      formules: ["À partir de l'extrait de la norme, déterminer la largeur minimale afin de garantir l'accessibilité", "Déterminer la pente maximale de la rampe", "Exprimer la pente lors d'une variation de niveau et vérifier que la pente maximale est respectée"],
      vu: ["Polynésie 2025, sujet sur un bateau nettoyeur des mers, partie spécifique AC : questions A.1 à A.3 (passerelle d'accès selon l'arrêté du 20 avril 2017)", "Polynésie 2024, sujet sur un complexe sportif : questions C.1 à C.3 (vestiaire à rendre accessible sur plan)"], pts: "1 à 2 points",
      attendu: "Les valeurs exactes lues dans l'extrait de réglementation (largeur, pente et longueurs tolérées), la pente calculée en % dans le cas le plus défavorable, puis une phrase de conformité pour chaque exigence.",
      etapes: ["Relever dans l'extrait la largeur minimale et la comparer à celle du projet", "Relever les pentes autorisées et les longueurs sur lesquelles elles le sont", "Calculer la pente = dénivelé / longueur × 100", "Recommencer avec le dénivelé le plus défavorable", "Conclure pour chaque exigence et proposer une modification si besoin"],
      mots: ["personne à mobilité réduite", "cheminement", "pente", "dénivelé", "palier de repos", "cas le plus défavorable"],
      pieges: ["Calculer la pente avec la longueur inclinée sans le dire", "Oublier de multiplier par 100", "Vérifier seulement le cas favorable", "Oublier que 8 % n'est toléré que sur 2 m"],
      cas: "Une passerelle fictive de 10 m de long relie un quai à un ponton flottant. La largeur de passage est de 1,30 m. À marée haute, le dénivelé est de 0,50 m ; à marée basse, il augmente de 0,20 m.",
      question: "Vérifier la largeur, calculer la pente dans les deux cas et conclure.",
      modele: `Largeur : 1,30 m, plus que les 1,20 m exigés : conforme.

Pente à marée haute : 0,50 / 10 × 100 = 5 % : c'est la limite générale, conforme.

Pente à marée basse : (0,50 + 0,20) / 10 × 100 = 7 %. Une pente au-dessus de 5 % n'est tolérée que jusqu'à 8 % sur 2 m au plus : ici elle s'étend sur 10 m, donc non conforme.

Conclusion : il faut rallonger la passerelle (0,70 / 0,05 = 14 m) ou prévoir un palier intermédiaire et une assistance à marée basse.`,
      grille: ["La largeur est vérifiée", "La pente de marée haute est juste", "Le cas défavorable est calculé et comparé à la règle des 2 m", "Une modification chiffrée est proposée"] },

    { id: 'sti2d-ac-m5', mat: 'sti2d-ac', titre: "Vérifier une poutre en contrainte et en flèche",
      formules: ["Identifier les types et les caractéristiques des liaisons", "Choisir le schéma mécanique simplifié", "Calculer la charge linéique répartie uniformément qui agit sur chaque profilé", "Calculer les valeurs du moment fléchissant et en déduire sa valeur maximale", "Calculer la contrainte maximale et vérifier qu'elle est inférieure à la limite d'élasticité", "Vérifier que le déplacement maximal respecte le critère d'admissibilité"],
      vu: ["Polynésie 2025, sujet sur un bateau nettoyeur des mers, partie spécifique AC : questions B.1 à B.7 (profilés de la passerelle, Mf(x), σ = Mf × y / I, flèche à L / 200)", "Polynésie 2024, sujet sur un complexe sportif : contrainte dans un poteau avec son poids propre (partie commune)"], pts: "2,5 à 3,5 points",
      attendu: "Le modèle de poutre isostatique (articulation et appui simple), q = charge surfacique × largeur reprise, Mf max = q × L² / 8 au milieu, σ = Mf × v / I en N et mm, la comparaison à la limite élastique avec l'explication du domaine élastique, puis la flèche comparée à L / 200 et une solution si un critère échoue.",
      etapes: ["Nommer les liaisons et choisir le schéma : poutre sur deux appuis, charge uniforme", "q = charge surfacique × entraxe des profilés", "Mf max = q × L² / 8", "I = b × h³ / 12, v = h / 2, σ = Mf × v / I avec Mf en N·mm", "Comparer σ à la limite, puis la flèche à L / 200, et conclure"],
      mots: ["poutre isostatique", "charge linéique", "moment fléchissant", "moment quadratique", "contrainte", "limite élastique", "flèche admissible"],
      pieges: ["Laisser Mf en kN·m dans la formule de σ", "Prendre v = h au lieu de h / 2", "Comparer la flèche à L / 200 avec L en mètres et la flèche en millimètres", "Oublier d'expliquer pourquoi rester élastique"],
      cas: "Une poutre en bois lamellé-collé fictive, de 6 m de portée, porte un plancher de 4 kN/m² ; les poutres sont espacées de 0,75 m. Pour la vérification à l'ELU, on prend q = 4,5 kN/m. Section 120 × 300 mm ; contrainte admissible 24 MPa. La simulation donne une flèche de 25 mm.",
      question: "Calculer la charge linéique d'exploitation, le moment maximal, la contrainte, puis vérifier la flèche.",
      modele: `Charge linéique : 4 × 0,75 = 3 kN/m.

Moment maximal (q = 4,5 kN/m) : Mf max = 4,5 × 6² / 8 = 20,25 kN·m = 20,25 × 10^6 N·mm, au milieu.

Moment quadratique : I = 120 × 300³ / 12 = 270 × 10^6 mm⁴ ; v = 150 mm.

Contrainte : σ = 20,25 × 10^6 × 150 / 270 × 10^6 = 11,25 MPa, sous les 24 MPa : la poutre résiste et reste dans le domaine élastique, donc elle reprend sa forme après chargement.

Flèche : L / 200 = 6 000 / 200 = 30 mm ; 25 mm est en dessous : conforme. Les deux vérifications sont validées.`,
      grille: ["La charge linéique est juste", "Le moment maximal est juste et situé au milieu", "La contrainte est juste, en MPa, et comparée", "La flèche est comparée à L / 200 et la conclusion est donnée"] },

    { id: 'sti2d-ac-m6', mat: 'sti2d-ac', titre: "Calculer la résistance d'une paroi et l'épaisseur d'isolant",
      formules: ["Calculer la valeur des résistances thermiques des matériaux", "En déduire la résistance thermique globale de la paroi", "Déterminer le coefficient de transmission thermique surfacique et vérifier le cahier des charges", "Calculer l'épaisseur minimale de l'isolant afin d'obtenir la résistance exigée", "Calculer les flux de chaleur et la puissance nécessaire"],
      vu: ["Polynésie 2024, sujet sur un complexe sportif, partie spécifique AC : questions A.1 à A.7 (paroi, épaisseur de laine de roche, RE 2020)", "Polynésie 2025, sujet sur un bateau nettoyeur des mers : questions C.1 à C.5 (paroi de cabine, U, flux, puissance frigorifique)"], pts: "2 à 3 points",
      attendu: "R = e / λ pour chaque couche avec e en mètres, Rtot avec Rsi et Rse, U = 1 / Rtot comparé à l'exigence, l'épaisseur d'isolant e = λ × (R cible - autres résistances) arrondie au-dessus, puis Φ = U × S × ΔT et la comparaison à la puissance disponible.",
      etapes: ["Convertir les épaisseurs en mètres", "Calculer chaque R = e / λ et ajouter Rsi et Rse", "U = 1 / Rtot et comparaison à l'exigence", "Pour une résistance visée : R isolant = R cible - autres R, puis e = λ × R isolant", "Flux : Φ = U × S × ΔT ; additionner les flux et comparer à l'équipement"],
      mots: ["conductivité thermique", "résistance thermique", "coefficient de transmission", "résistances superficielles", "flux de chaleur", "épaisseur d'isolant"],
      pieges: ["Épaisseurs laissées en centimètres", "Oublier Rsi et Rse", "Additionner des U au lieu des R", "Arrondir l'épaisseur au-dessous"],
      cas: "Un mur fictif est composé (de l'intérieur vers l'extérieur) d'une plaque de plâtre de 13 mm (λ = 0,25), de laine de bois de 14 cm (λ = 0,038) et de béton de 18 cm (λ = 2). Rsi = 0,13 et Rse = 0,04 m²·K/W. Le cahier des charges impose U ≤ 0,3 W/(m²·K) ; pour un label, on viserait Rtot = 4,5 m²·K/W.",
      question: "Calculer Rtot et U, vérifier l'exigence, puis l'épaisseur de laine de bois pour atteindre Rtot = 4,5.",
      modele: `Résistances : plâtre 0,013 / 0,25 = 0,052 ; laine de bois 0,14 / 0,038 ≈ 3,684 ; béton 0,18 / 2 = 0,09.

Rtot = 0,13 + 0,052 + 3,684 + 0,09 + 0,04 ≈ 4,00 m²·K/W ; U = 1 / 4,00 ≈ 0,25 W/(m²·K), sous 0,3 : conforme.

Pour Rtot = 4,5 : les autres couches font 0,13 + 0,052 + 0,09 + 0,04 = 0,312 ; R isolant = 4,5 - 0,312 = 4,188 ; e = 0,038 × 4,188 ≈ 0,159 m.

On choisit l'épaisseur commerciale supérieure, par exemple 16 cm de laine de bois.`,
      grille: ["Les résistances des couches sont justes", "Rtot inclut Rsi et Rse", "U est juste et comparé à l'exigence", "L'épaisseur est calculée et arrondie au-dessus"] },
  ],

  sujets: [
    { id: 'sti2d-ac-s1', matiere: 'sti2d-ac', titre: "Sujet d'entraînement AC : l'extension de l'école des Hirondelles (fictive)", duree: 90,
      enonce: `Sujet d'entraînement inventé pour réviser : l'école, la commune et tous les chiffres sont fictifs. Il a la forme de la partie spécifique AC de l'écrit (durée indicative environ 1 h 30). Il est noté ici sur 20, dont 2 points pour la maîtrise de la langue. On prend g = 9,81 m/s².

PRÉSENTATION

La commune agrandit son école par une extension à ossature bois de deux salles de classe, à l'étage, au-dessus d'un préau. Problématique : comment construire une extension accessible, solide, confortable et peu émettrice de carbone ?

Extrait du cahier des charges :
- Exigence 1 : l'extension est accessible aux personnes à mobilité réduite (arrêté du 20 avril 2017).
- Exigence 2 : la flèche des poutres de plancher reste inférieure à L / 300.
- Exigence 3 : les murs ont un coefficient U ≤ 0,2 W/(m²·K).
- Exigence 4 : le temps de réverbération d'une classe est d'au plus 0,6 s.
- Exigence 5 : l'impact carbone des matériaux reste sous 700 kg éq. CO2 par m² (seuil retenu pour ce projet).

PARTIE A — L'accessibilité (4 points)

L'entrée du rez-de-chaussée est 0,42 m plus haute que la cour.
A.1. Calculer la longueur minimale d'une rampe de pente 5 %. Faut-il des paliers intermédiaires ? Lesquels sont obligatoires ?
A.2. Sur le plan à l'échelle 1/50, la porte de la classe mesure 1,7 cm. Calculer sa largeur réelle et conclure (classe de 28 élèves).
A.3. Le couloir mesure 1,30 m de large et se termine en impasse. Vérifier sa largeur et dire quel espace prévoir au bout.

PARTIE B — Le plancher de l'étage (5 points)

Les poutres en bois lamellé-collé ont une portée de 7,2 m et sont espacées de 1,2 m. Charges : G = 2 kN/m², Q = 2,5 kN/m². Section : 160 × 480 mm ; contrainte de calcul du bois : 18 MPa.
B.1. Calculer la charge surfacique à l'ELU, puis la charge linéique sur une poutre.
B.2. Proposer un modèle de la poutre (liaisons, chargement). Calculer les réactions d'appui.
B.3. Calculer le moment fléchissant maximal et indiquer où il se situe.
B.4. Calculer le moment quadratique de la section, puis la contrainte maximale. Conclure, et donner le coefficient de sécurité.
B.5. La simulation donne une flèche de 21 mm. Vérifier l'exigence 2.

PARTIE C — L'enveloppe et l'air (5 points)

Mur (de l'intérieur vers l'extérieur) : panneau OSB de 12 mm (λ = 0,13), laine de bois de 200 mm (λ = 0,038), panneau de fibre de bois de 60 mm (λ = 0,046). Rsi = 0,13 ; Rse = 0,04 m²·K/W.
C.1. Calculer la résistance totale et le coefficient U du mur. Vérifier l'exigence 3.
C.2. Les murs de l'extension font 180 m². Calculer les déperditions à travers ces murs pour 19 °C dedans et -1 °C dehors.
C.3. Indiquer où placer le pare-vapeur et pourquoi.
C.4. Une classe accueille 28 élèves et un adulte ; on retient 18 m³/h d'air neuf par occupant. Calculer le débit, puis la vitesse de l'air dans une gaine de 250 mm de diamètre. Elle doit rester sous 4 m/s.

PARTIE D — Acoustique et carbone (4 points)

Une classe mesure 10 m × 7 m × 3 m. Son aire d'absorption équivalente est de 30 m² sans traitement.
D.1. Calculer son temps de réverbération. Vérifier l'exigence 4. Calculer l'aire d'absorption à ajouter, puis la surface de panneaux de coefficient α = 0,85 à poser.
D.2. Variante ossature bois : 61 200 kg éq. CO2 ; variante béton : 98 400 kg éq. CO2 ; surface : 120 m². Calculer l'impact par m² de chaque variante et conclure sur l'exigence 5.
D.3. Proposer deux dispositions pour le confort d'été des classes orientées au sud.

Maîtrise de la langue (2 points) : rédaction, orthographe, vocabulaire technique.`,
      corrige: `PARTIE A

A.1. Longueur minimale : 0,42 / 0,05 = 8,4 m. Avec une pente de 5 % (au moins 4 %), un palier de repos est exigé tous les 10 m : la rampe fait moins de 10 m, il n'en faut pas d'intermédiaire. Les paliers en haut et en bas de la rampe restent obligatoires.

A.2. Largeur réelle : 1,7 × 50 = 85 cm, soit 0,85 m. Pour un local de moins de 100 personnes, il faut 0,90 m : la porte n'est pas conforme, il faut l'élargir.

A.3. 1,30 m est plus que les 1,20 m exigés : conforme. Au bout de l'impasse, il faut un espace de demi-tour : un cercle de 1,50 m de diamètre.

PARTIE B

B.1. ELU : 1,35 × 2 + 1,5 × 2,5 = 2,7 + 3,75 = 6,45 kN/m². Charge linéique : 6,45 × 1,2 = 7,74 kN/m.

B.2. Poutre isostatique sur une articulation et un appui simple, avec une charge uniformément répartie de 7,74 kN/m. Réactions : 7,74 × 7,2 / 2 ≈ 27,9 kN sur chaque appui.

B.3. Mf max = 7,74 × 7,2² / 8 ≈ 50,2 kN·m, au milieu de la portée.

B.4. I = 160 × 480³ / 12 ≈ 1,475 × 10^9 mm⁴ ; v = 240 mm. σ = 50,2 × 10^6 × 240 / 1,475 × 10^9 ≈ 8,2 MPa, sous les 18 MPa : la poutre résiste. Coefficient de sécurité : 18 / 8,2 ≈ 2,2.

B.5. L / 300 = 7 200 / 300 = 24 mm ; 21 mm est en dessous : l'exigence 2 est respectée.

PARTIE C

C.1. OSB : 0,012 / 0,13 ≈ 0,092 ; laine de bois : 0,2 / 0,038 ≈ 5,263 ; fibre de bois : 0,06 / 0,046 ≈ 1,304. Rtot = 0,13 + 0,092 + 5,263 + 1,304 + 0,04 ≈ 6,83 m²·K/W. U = 1 / 6,83 ≈ 0,15 W/(m²·K), sous 0,2 : l'exigence 3 est respectée.

C.2. Φ = 0,146 × 180 × 20 ≈ 527 W.

C.3. Du côté chaud, entre l'OSB et la laine de bois (ou l'OSB lui-même s'il est étanche à la vapeur, joints scotchés). La vapeur produite dans la classe ne doit pas atteindre la partie froide de l'isolant, où elle condenserait et mouillerait la laine de bois.

C.4. Débit : 29 × 18 = 522 m³/h, soit 522 / 3 600 = 0,145 m³/s. Section : π × 0,125² ≈ 0,049 m². Vitesse : 0,145 / 0,049 ≈ 3,0 m/s, sous 4 m/s : conforme, sans bruit gênant.

PARTIE D

D.1. Volume : 10 × 7 × 3 = 210 m³. T = 0,16 × 210 / 30 = 1,12 s, au-dessus de 0,6 s : non conforme. Aire nécessaire : 0,16 × 210 / 0,6 = 56 m², soit 26 m² à ajouter. Panneaux : 26 / 0,85 ≈ 31 m², par exemple au plafond.

D.2. Ossature bois : 61 200 / 120 = 510 kg éq. CO2/m², sous 700 : conforme. Béton : 98 400 / 120 = 820 kg éq. CO2/m², au-dessus de 700 : non conforme. La variante bois est retenue.

D.3. Une casquette ou un brise-soleil au-dessus des baies sud (il coupe le soleil haut de l'été et laisse entrer celui de l'hiver), des stores extérieurs, une ventilation nocturne pour évacuer la chaleur, et des matériaux à inertie à l'intérieur (chape, cloisons lourdes) pour compenser la légèreté de l'ossature bois.

Conclusion : après élargissement de la porte et traitement acoustique, l'extension en ossature bois est accessible, solide, bien isolée et sous le seuil carbone du projet.`,
      grille: [
        { c: "Partie A : longueur de rampe et paliers, largeur de porte, couloir et demi-tour", pts: 4 },
        { c: "Partie B : charges ELU, réactions, moment, contrainte et sécurité, flèche", pts: 5 },
        { c: "Partie C : Rtot et U, déperditions, pare-vapeur, débit et vitesse de l'air", pts: 5 },
        { c: "Partie D : temps de réverbération et panneaux, impact carbone, confort d'été", pts: 4 },
        { c: "Maîtrise de la langue : rédaction, orthographe, vocabulaire", pts: 2 },
      ] },
  ],
};
