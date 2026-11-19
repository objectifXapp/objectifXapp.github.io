// 2I2D, enseignement spécifique « systèmes d'information et numérique » (SIN) — terminale STI2D. Sources : voir matiere.sources.
// Programme : annexe IT, I2D et 2I2D du cycle terminal STI2D ; on ne garde ici que ce qui est propre à SIN ou approfondi
// en SIN : capteurs et conditionneurs, codages (Gray, parité, entiers signés), logique, programmation, composants
// programmables et IHM, bus de communication, transmission sans fil, réseaux et protocoles, objets connectés, sécurité.
// Le tronc commun (bases du codage, CAN, adresse IP /24, trames, TCP et UDP, asservissements) est dans sti2d-2i2d.js.
// Épreuve à partir de la session 2027 (note de service du 11 septembre 2026, BO spécial n° 4 du 17 septembre 2026) :
// la deuxième partie de l'écrit de 2I2D (3 h 30, coefficient 9) est un exercice propre à l'enseignement spécifique ;
// dans les sujets 2024 et 2025, elle valait 8 points sur 20. La partie pratique de 2 h (coefficient 7) porte sur SIN.

export default {
  matiere: {
    id: 'sti2d-sin',
    nom: '2I2D : systèmes d\'information et numérique',
    voie: 'sti2d',
    epreuve: { type: 'ecrit', duree: 210, coef: 16, quand: 'juin', note: 'Partie spécifique SIN de l\'écrit de 2I2D (3 h 30 au total, coefficient 9) : un exercice sur l\'acquisition, le traitement et la transmission de l\'information, environ 8 points sur 20 dans les sujets récents. La partie pratique de 2 h en laboratoire (coefficient 7) porte aussi sur SIN.' },
    sources: [
      'https://www.education.gouv.fr/sites/default/files/document/bulletin-officiel-special-ndeg-4-du-17-septembre-2026-521113.pdf',
      'https://www.snes.edu/wp-content/uploads/sti2d_annexe-1_it_i2d_2i2d_bo.pdf',
      'https://www.sujetdebac.fr/annales-pdf/2025/sti2d-spe-ingenierie-innov-dev-durable-2025-metropole-sujet-officiel.pdf',
      'https://www.freemaths.fr/sujets-du-bac/baccalaureat-technologique/sti2d/2i2d-systemes-d-information-numerique/annees/annee-2025/polynesie/sujet-1-et-correction/bac-2i2d-systemes-d-information-numerique-polynesie-2025-voie-technologique-sti2d-sujet-1.pdf',
    ],
    chapitres: [
      { id: 'sti2d-sin-1', t: 'Capteurs et conditionnement du signal', theme: 'Acquérir' },
      { id: 'sti2d-sin-2', t: 'Codages : Gray, entiers signés, parité et masques', theme: 'Traiter' },
      { id: 'sti2d-sin-3', t: 'Logique combinatoire et machines à états', theme: 'Traiter' },
      { id: 'sti2d-sin-4', t: 'Programmer un système embarqué', theme: 'Traiter' },
      { id: 'sti2d-sin-5', t: 'Unités de traitement et interfaces homme-machine', theme: 'Traiter' },
      { id: 'sti2d-sin-6', t: 'Bus de communication', theme: 'Communiquer' },
      { id: 'sti2d-sin-7', t: 'Transmission sans fil', theme: 'Communiquer' },
      { id: 'sti2d-sin-8', t: 'Réseaux : couches, adressage et protocoles', theme: 'Communiquer' },
      { id: 'sti2d-sin-9', t: 'Objets connectés et données', theme: 'Communiquer' },
      { id: 'sti2d-sin-10', t: 'Cybersécurité et fiabilité', theme: 'Communiquer' },
    ],
  },
  paquets: [
    { chapitre: 'sti2d-sin-1',
      fiche: `## Capteurs et conditionnement du signal

En SIN, on caractérise un capteur par sa **relation entrée-sortie**, puis on vérifie que toute la chaîne d'acquisition (capteur, conditionneur, convertisseur) donne la précision demandée.

### Caractériser un capteur
- **Étendue de mesure** : de la plus petite à la plus grande valeur mesurable (0 à 360°, -40 à 125 °C).
- **Sensibilité** : variation de la sortie pour une variation de l'entrée. Capteur de température à **10 mV/°C** : 0,25 V correspondent à 25 °C.
- Relation affine : **sortie = sensibilité × grandeur + décalage**. Capteur 0,5 V à 0 °C et 10 mV/°C : à 30 °C, il donne 0,5 + 0,3 = 0,8 V.
- **Résolution** : plus petite variation détectable ; **précision** : écart possible entre mesure et valeur vraie.
- Types de sortie : **logique** (détecteur), **analogique** (tension, courant 4-20 mA), **numérique** (bus I2C, SPI, SSI, liaison série).

### Capteurs de position
- **Codeur incrémental** : il envoie des impulsions ; on compte depuis une position de référence. Il perd la position à la coupure d'alimentation.
- **Codeur absolu** : il donne directement un code unique pour chaque position, souvent en **code Gray**. Il connaît sa position dès la mise sous tension. Un codeur **multitour** compte aussi le nombre de tours.
- Résolution d'un codeur absolu de n bits : **360° / 2^n**. 12 bits : 4 096 positions, soit 0,088° par pas.
- Si un engrenage multiplie les tours du codeur par k, la résolution sur l'arbre mesuré est divisée par k : avec k = 20/3 et 12 bits, 0,088 / 6,67 ≈ 0,013°.

### Conditionner le signal
- **Amplificateur** : il multiplie la tension par un **gain** pour utiliser toute la plage du convertisseur. Capteur 0-100 mV vers un CAN 0-5 V : gain de 50.
- **Filtre passe-bas** du premier ordre : il laisse passer les basses fréquences (le signal utile, lent) et atténue les hautes (bruit, parasites). **Fréquence de coupure fc = 1 / (2 × π × R × C)**. R = 10 kΩ et C = 100 nF : fc ≈ 159 Hz.
- Il sert aussi d'**anti-repliement** avant un échantillonnage : on coupe ce qui dépasse la moitié de la fréquence d'échantillonnage.

### La chaîne complète
- Grandeur physique, capteur, conditionneur, **CAN**, nombre traité par le programme.
- Pour retrouver la grandeur à partir du nombre N : tension = N × quantum, puis grandeur = (tension - décalage) / sensibilité.
- Exemple : CAN 10 bits sur 0-10 V (quantum 9,77 mV), girouette 0-10 V pour 0-360°. N = 768 donne 7,5 V, soit 270°.
- La **résolution globale** est la plus mauvaise des deux : celle du capteur ou celle du convertisseur.

### À retenir pour le bac
- Sortie = sensibilité × grandeur + décalage.
- Codeur absolu (position connue à la mise sous tension, code Gray) ou incrémental (impulsions à compter).
- Résolution d'un codeur : 360° / 2^n ; tenir compte d'un éventuel rapport d'engrenage.
- Filtre passe-bas : fc = 1 / (2 × π × R × C).
- Piège : chercher la grandeur à partir de N demande le quantum, puis la sensibilité.`,
      cartes: [
        { q: "Étendue de mesure d'un capteur ?", r: "L'intervalle entre la plus petite et la plus grande valeur mesurable." },
        { q: "Sensibilité d'un capteur ?", r: "Variation de la sortie divisée par la variation de la grandeur mesurée." },
        { q: "Relation affine d'un capteur ?", r: "Sortie = sensibilité × grandeur + décalage." },
        { q: "Codeur incrémental ?", r: "Il envoie des impulsions à compter depuis une référence ; il perd sa position à la coupure." },
        { q: "Codeur absolu ?", r: "Il donne un code unique par position, connu dès la mise sous tension." },
        { q: "Codeur multitour ?", r: "Un codeur absolu qui compte aussi le nombre de tours." },
        { q: "Résolution d'un codeur de n bits ?", r: "360° / 2^n." },
        { q: "Rôle d'un amplificateur de conditionnement ?", r: "Multiplier la tension du capteur pour utiliser toute la plage du convertisseur." },
        { q: "Rôle d'un filtre passe-bas ?", r: "Laisser passer le signal lent et atténuer le bruit à haute fréquence." },
        { q: "Fréquence de coupure d'un filtre RC ?", r: "fc = 1 / (2 × π × R × C)." },
        { q: "Filtre anti-repliement ?", r: "Un passe-bas qui coupe ce qui dépasse la moitié de la fréquence d'échantillonnage." },
        { q: "Retrouver la grandeur à partir du nombre N d'un CAN ?", r: "Tension = N × quantum, puis grandeur = (tension - décalage) / sensibilité." },
        { q: "Types de sortie d'un capteur ?", r: "Logique, analogique (tension ou 4-20 mA), numérique (bus)." },
      ],
      quiz: [
        { q: "Capteur de température de sensibilité 10 mV/°C, sans décalage. Il fournit 0,25 V. Température ?", choix: ["250 °C", "25 °C", "35 °C", "40 °C"], bonne: 1, expl: "0,25 / 0,010 = 25 °C.", niv: 1 },
        { q: "Capteur : 0,5 V à 0 °C et 10 mV/°C. Tension fournie à 30 °C ?", choix: ["0,53 V", "0,3 V", "0,8 V", "3,5 V"], bonne: 2, expl: "0,5 + 30 × 0,010 = 0,8 V.", niv: 2 },
        { q: "Codeur absolu de 12 bits. Combien de positions par tour ?", choix: ["1 024", "12", "360", "4 096"], bonne: 3, expl: "2^12 = 4 096.", niv: 2 },
        { q: "Après une coupure de courant, quel codeur connaît encore sa position ?", choix: ["le codeur absolu", "le codeur incrémental", "un détecteur de proximité", "un capteur de température"], bonne: 0, expl: "Le codeur incrémental doit refaire une prise d'origine.", niv: 1 },
        { q: "Filtre passe-bas RC : R = 10 kΩ, C = 100 nF. Fréquence de coupure, environ ?", choix: ["628 Hz", "1 000 Hz", "159 Hz", "1 591 Hz"], bonne: 2, expl: "1 / (2π × 10^4 × 10^-7) = 1 / (6,28 × 10^-3) ≈ 159 Hz.", niv: 2 },
        { q: "CAN 10 bits sur 0-10 V ; girouette 0-10 V pour 0-360°. N = 768. Direction du vent ?", choix: ["270°", "7,5°", "768°", "135°"], bonne: 0, expl: "768 × 10 / 1 024 = 7,5 V ; 7,5 / 10 × 360 = 270°.", niv: 3 },
        { q: "Un filtre passe-bas atténue :", choix: ["les basses fréquences", "les hautes fréquences", "la valeur moyenne du signal", "la tension d'alimentation"], bonne: 1, expl: "Il garde le signal lent et supprime le bruit rapide.", niv: 1 },
        { q: "Capteur 0-100 mV branché sur un CAN 0-5 V. Gain d'amplification idéal ?", choix: ["5", "20", "0,02", "50"], bonne: 3, expl: "5 / 0,1 = 50 : on utilise toute la plage du convertisseur.", niv: 2 },
        { q: "Codeur 12 bits entraîné par un engrenage qui multiplie par 20/3 les tours de la nacelle. Résolution sur la nacelle ?", choix: ["2°", "0,088°", "0,59°", "0,013°"], bonne: 3, expl: "360 / 4 096 ≈ 0,088° pour le codeur ; divisé par 6,67 : ≈ 0,013°.", niv: 3 },
        { q: "Un capteur qui fournit 4-20 mA a une sortie :", choix: ["logique", "analogique en courant", "numérique série", "sans alimentation"], bonne: 1, expl: "Le courant varie de façon continue avec la grandeur.", niv: 2 },
        { q: "La sensibilité d'un capteur est :", choix: ["la variation de sortie par unité de grandeur", "l'écart entre la plus petite et la plus grande valeur mesurable", "le temps de réponse", "le prix du capteur"], bonne: 0, expl: "Exemple : 10 mV par °C.", niv: 1 },
        { q: "Capteur de résolution 0,5 °C sur un CAN de résolution 0,1 °C. Résolution de la chaîne ?", choix: ["0,05 °C", "0,1 °C", "0,5 °C", "0,6 °C"], bonne: 2, expl: "La chaîne ne peut pas être plus fine que son élément le moins fin.", niv: 3 },
      ] },
    { chapitre: 'sti2d-sin-2',
      fiche: `## Codages : Gray, entiers signés, parité et masques

Les bases (binaire, hexadécimal, 2^n valeurs) sont dans le tronc commun. En SIN, on va plus loin : codes particuliers, nombres négatifs, détection d'erreurs et manipulation des bits.

### Le code Gray
- Entre deux valeurs successives, **un seul bit change** : 0 = 000, 1 = 001, 2 = 011, 3 = 010, 4 = 110, 5 = 111, 6 = 101, 7 = 100.
- Il évite les erreurs de lecture d'un codeur absolu au passage d'une position à la suivante.
- **Binaire vers Gray** : g = b XOR (b décalé d'un rang vers la droite). 4 = 100 donne 100 XOR 010 = 110.
- **Gray vers binaire** : on part du **bit de poids fort**, qu'on recopie ; ensuite chaque bit binaire = bit binaire précédent **XOR** bit Gray courant. Gray 0110 : b3 = 0, b2 = 0 XOR 1 = 1, b1 = 1 XOR 1 = 0, b0 = 0 XOR 0 = 0, soit 0100 = 4.
- **OU exclusif** (XOR) : 1 si les deux bits sont différents, 0 s'ils sont égaux.

### Les entiers signés
- En **complément à deux** sur 8 bits, on code de **-128 à +127**. Le bit de poids fort vaut 1 pour un nombre négatif.
- Pour coder -x : on écrit x en binaire, on inverse tous les bits, puis on ajoute 1. -1 = 1111 1111 ; -5 : 0000 0101, inversé 1111 1010, plus 1 : 1111 1011.
- Sur 16 bits : de -32 768 à +32 767. Une température de -12,5 °C transmise avec un facteur 10 devient -125, codé sur un octet signé.

### Autres codages
- **BCD** : chaque chiffre décimal est codé sur 4 bits (59 = 0101 1001) ; pratique pour les afficheurs.
- **ASCII** : un caractère par octet (A = 65 = 0x41, 0 = 48 = 0x30).
- **Facteur d'échelle** : une grandeur à virgule est transmise multipliée par 10 ou 100 pour rester entière. 331,5° est envoyé sous la forme 3 315.

### Détecter les erreurs
- **Bit de parité** : on ajoute un bit pour que le nombre de 1 soit pair (parité paire) ou impair. Il détecte **une** erreur sur un bit, sans dire laquelle, et ne détecte pas deux erreurs.
- Exemple, parité paire : 1011 001 contient quatre 1, le bit de parité vaut 0.
- **Somme de contrôle** et **CRC** : des calculs sur toute la trame, renvoyés avec elle ; le récepteur refait le calcul et rejette la trame si le résultat diffère. Des **codes correcteurs** permettent même de corriger certaines erreurs.

### Manipuler des bits
- **Masque ET** pour lire ou effacer des bits : 1011 0110 ET 0000 1111 = 0000 0110 (on garde les 4 bits de poids faible).
- **Masque OU** pour forcer des bits à 1. **Décalage** à droite d'un rang = division entière par 2 ; à gauche = multiplication par 2.
- Une trame de 3 octets peut contenir deux valeurs de 12 bits : on les sépare par décalages et masques.

### À retenir pour le bac
- Gray : un seul bit change ; conversion Gray vers binaire par XOR en partant du poids fort.
- Complément à deux sur 8 bits : -128 à +127 ; inverser puis ajouter 1.
- Parité : détecte une erreur simple ; CRC : contrôle de toute la trame.
- Masque ET pour isoler des bits ; décalage pour multiplier ou diviser par 2.
- Piège : ne pas oublier le facteur d'échelle (valeur réelle = valeur reçue / 10).`,
      cartes: [
        { q: "Propriété du code Gray ?", r: "Un seul bit change entre deux valeurs successives." },
        { q: "Pourquoi le code Gray dans un codeur absolu ?", r: "Il évite les lectures fausses au passage d'une position à la suivante." },
        { q: "Table du OU exclusif (XOR) ?", r: "1 si les deux bits sont différents, 0 s'ils sont égaux." },
        { q: "Conversion Gray vers binaire ?", r: "Recopier le bit de poids fort, puis chaque bit binaire = bit binaire précédent XOR bit Gray courant." },
        { q: "Gray 0110 en binaire ?", r: "0100, soit 4." },
        { q: "Plage d'un entier signé sur 8 bits ?", r: "De -128 à +127 en complément à deux." },
        { q: "Coder -x en complément à deux ?", r: "Écrire x en binaire, inverser tous les bits, ajouter 1." },
        { q: "Que vaut -1 sur 8 bits ?", r: "1111 1111." },
        { q: "Code BCD ?", r: "Chaque chiffre décimal codé sur 4 bits : 59 = 0101 1001." },
        { q: "Rôle du bit de parité ?", r: "Détecter une erreur sur un bit (pas deux, et sans la localiser)." },
        { q: "Rôle d'un CRC ?", r: "Vérifier toute la trame : le récepteur refait le calcul et rejette la trame si le résultat diffère." },
        { q: "Masque ET 0000 1111 ?", r: "Il garde les 4 bits de poids faible et met les autres à 0." },
        { q: "Décalage d'un rang à gauche ?", r: "Multiplication par 2." },
      ],
      quiz: [
        { q: "Dans le code Gray, entre deux valeurs successives :", choix: ["un seul bit change", "deux bits changent", "le bit de poids fort change", "le nombre de 1 reste pair"], bonne: 0, expl: "C'est ce qui le rend sûr pour les codeurs de position.", niv: 1 },
        { q: "Convertir le code Gray 0110 en décimal.", choix: ["5", "6", "4", "7"], bonne: 2, expl: "b3 = 0 ; b2 = 0 XOR 1 = 1 ; b1 = 1 XOR 1 = 0 ; b0 = 0 XOR 0 = 0 : 0100 = 4.", niv: 2 },
        { q: "Plage d'un entier signé sur 8 bits en complément à deux ?", choix: ["0 à 255", "-128 à +127", "-127 à +128", "-255 à +255"], bonne: 1, expl: "0 à 255, c'est l'octet non signé.", niv: 2 },
        { q: "1 XOR 1 vaut :", choix: ["10", "1", "2", "0"], bonne: 3, expl: "Le OU exclusif donne 1 seulement si les bits sont différents.", niv: 1 },
        { q: "Que vaut 1111 1011 interprété comme entier signé sur 8 bits ?", choix: ["251", "-5", "-4", "-123"], bonne: 1, expl: "Inverser : 0000 0100, ajouter 1 : 0000 0101 = 5, donc -5. 251 serait la lecture non signée.", niv: 2 },
        { q: "Parité paire : quel bit de parité ajouter aux données 1101 001 ?", choix: ["0", "1", "4", "on ne peut pas savoir"], bonne: 0, expl: "Il y a quatre 1, déjà un nombre pair : le bit de parité vaut 0.", niv: 3 },
        { q: "Un bit de parité permet de :", choix: ["augmenter le débit", "localiser et corriger l'erreur", "chiffrer les données", "détecter une erreur sur un bit"], bonne: 3, expl: "Deux erreurs simultanées passent inaperçues.", niv: 1 },
        { q: "1011 0110 ET 0000 1111 donne :", choix: ["1011 0000", "1011 1111", "0000 0110", "0100 1001"], bonne: 2, expl: "Le masque garde les 4 bits de poids faible.", niv: 2 },
        { q: "Un angle de 331,5° est transmis avec un facteur 10. Quel entier est envoyé ?", choix: ["33,15", "331", "3 315", "332"], bonne: 2, expl: "331,5 × 10 = 3 315, ce qui tient sur 12 bits (maximum 4 095).", niv: 3 },
        { q: "Le nombre 59 codé en BCD s'écrit :", choix: ["1001 0101", "0011 1011", "0101 1011", "0101 1001"], bonne: 3, expl: "5 = 0101 et 9 = 1001. 0011 1011 est 59 en binaire naturel.", niv: 2 },
        { q: "Un décalage d'un rang vers la gauche d'un nombre binaire :", choix: ["le divise par 2", "le multiplie par 2", "l'inverse", "le rend négatif"], bonne: 1, expl: "0011 (3) devient 0110 (6).", niv: 1 },
        { q: "Une trame de 3 octets porte une position sur 12 bits puis un nombre de tours sur 12 bits. Comment isoler les tours ?", choix: ["Garder les 12 bits de poids faible avec un masque ET", "Additionner les trois octets puis diviser le total par deux", "Lire le premier octet", "Diviser la trame par 12"], bonne: 0, expl: "Les 12 premiers bits envoyés (poids forts) sont la position ; le masque 0xFFF garde les 12 suivants.", niv: 3 },
      ] },
    { chapitre: 'sti2d-sin-3',
      fiche: `## Logique combinatoire et machines à états

### Les fonctions logiques de base
- **NON** : la sortie est l'inverse de l'entrée.
- **ET** : la sortie vaut 1 si **les deux** entrées valent 1.
- **OU** : la sortie vaut 1 si **au moins une** entrée vaut 1.
- **OU exclusif** (XOR) : 1 si les entrées sont **différentes**.
- **NON-ET** (NAND) et **NON-OU** (NOR) : inverses du ET et du OU.
- Un **logigramme** représente ces fonctions par des portes reliées entre elles.

### Table de vérité et équation
- Une **table de vérité** liste toutes les combinaisons d'entrées (2^n lignes pour n entrées) et la sortie correspondante.
- On en tire une **équation** : on garde les lignes où la sortie vaut 1, on écrit un ET par ligne, puis un OU entre les lignes.
- Exemple, une alarme : sortie S = 1 si la porte est ouverte (P) ET le système armé (A) : S = P ET A.
- Exemple, une lampe de cage d'escalier commandée par deux interrupteurs : L = a XOR b (changer l'un des deux interrupteurs change l'état de la lampe).

### Logique combinatoire ou séquentielle
- **Combinatoire** : la sortie dépend seulement des entrées présentes.
- **Séquentielle** : la sortie dépend aussi du **passé** (mémoire). Un bouton marche-arrêt qui garde son état, un compteur, un système qui attend une suite d'événements.

### La machine à états
- Un **diagramme d'états** décrit le comportement séquentiel : des **états** (veille, mesure, envoi, défaut), des **transitions** déclenchées par des **événements** ou des **conditions** (bouton appuyé, temps écoulé, seuil dépassé), et des **actions** (allumer une LED, envoyer une trame).
- Un seul état est actif à la fois. Un **état initial** est marqué au départ.
- Exemple, une barrière de parking : Fermée, puis (badge valide) Ouverture, puis (fin de course haut) Ouverte, puis (véhicule passé et 5 s écoulées) Fermeture, puis (fin de course bas) Fermée ; si un obstacle est détecté pendant la fermeture, retour à Ouverture.
- Dans un programme, on code souvent la machine à états avec une variable « etat » et une structure de choix.

### Le temps
- Une **temporisation** déclenche une transition après une durée (après 5 s, passer à Fermeture).
- Un **chronogramme** montre l'évolution des entrées et des sorties dans le temps : il permet de vérifier un diagramme d'états ou une équation.

### À retenir pour le bac
- ET : les deux à 1 ; OU : au moins un à 1 ; XOR : différents.
- Table de vérité : 2^n lignes pour n entrées ; équation par les lignes à 1.
- Combinatoire : entrées présentes ; séquentielle : mémoire du passé.
- Diagramme d'états : états, transitions, événements, actions ; un seul état actif.
- Piège : penser au cas de sécurité (obstacle, défaut) dans chaque état.`,
      cartes: [
        { q: "Fonction ET ?", r: "Sortie à 1 si les deux entrées sont à 1." },
        { q: "Fonction OU ?", r: "Sortie à 1 si au moins une entrée est à 1." },
        { q: "Fonction OU exclusif ?", r: "Sortie à 1 si les entrées sont différentes." },
        { q: "Fonction NON-ET ?", r: "L'inverse du ET : sortie à 0 seulement si les deux entrées sont à 1." },
        { q: "Nombre de lignes d'une table de vérité à n entrées ?", r: "2^n." },
        { q: "Équation à partir d'une table de vérité ?", r: "Un ET par ligne où la sortie vaut 1, puis un OU entre ces lignes." },
        { q: "Logique combinatoire ?", r: "La sortie dépend seulement des entrées présentes." },
        { q: "Logique séquentielle ?", r: "La sortie dépend aussi du passé : il y a une mémoire." },
        { q: "Éléments d'un diagramme d'états ?", r: "États, transitions, événements ou conditions, actions, état initial." },
        { q: "Combien d'états actifs à la fois dans une machine à états simple ?", r: "Un seul." },
        { q: "Lampe commandée par deux interrupteurs en va-et-vient ?", r: "L = a XOR b." },
        { q: "Rôle d'une temporisation ?", r: "Déclencher une transition après une durée." },
        { q: "Comment coder une machine à états dans un programme ?", r: "Avec une variable « etat » et une structure de choix selon sa valeur." },
      ],
      quiz: [
        { q: "La sortie d'une porte ET à deux entrées vaut 1 quand :", choix: ["a et b sont différentes", "a = 1, quelle que soit b", "a = 0 et b = 0", "a = 1 et b = 1"], bonne: 3, expl: "Les entrées différentes, c'est le OU exclusif.", niv: 1 },
        { q: "Combien de lignes compte la table de vérité d'une fonction à 3 entrées ?", choix: ["8", "3", "6", "4"], bonne: 0, expl: "2^3 = 8.", niv: 2 },
        { q: "S = P ET A, avec P = 1 (porte ouverte) et A = 0 (alarme désarmée). S vaut :", choix: ["2", "1", "0", "indéterminé"], bonne: 2, expl: "Un ET avec une entrée à 0 donne 0.", niv: 2 },
        { q: "Une sortie qui dépend de ce qui s'est passé avant relève de la logique :", choix: ["combinatoire", "séquentielle", "analogique", "binaire pure"], bonne: 1, expl: "Il faut une mémoire.", niv: 1 },
        { q: "Une lampe en va-et-vient : on change l'un des deux interrupteurs, la lampe change d'état. Fonction ?", choix: ["OU exclusif", "ET", "OU", "NON-ET"], bonne: 0, expl: "L = a XOR b : la sortie change dès qu'une entrée change.", niv: 2 },
        { q: "Barrière en état « Fermeture » : un obstacle est détecté. Quelle transition est attendue ?", choix: ["Rester en Fermeture", "Passer à l'état Ouverture", "Passer directement à Fermée", "Éteindre le système"], bonne: 1, expl: "Le cas de sécurité doit rouvrir la barrière.", niv: 3 },
        { q: "La sortie d'une porte NON vaut :", choix: ["la somme des entrées", "1 quelle que soit l'entrée", "la même valeur que l'entrée", "l'inverse de l'entrée"], bonne: 3, expl: "NON 1 = 0 et NON 0 = 1.", niv: 1 },
        { q: "Dans un diagramme d'états, ce qui fait passer d'un état à un autre s'appelle :", choix: ["un acteur", "une action", "une transition", "un bloc"], bonne: 2, expl: "Elle est déclenchée par un événement ou une condition.", niv: 2 },
        { q: "Équation d'une sortie à 1 seulement pour (a = 1, b = 0) et (a = 0, b = 1) ?", choix: ["S = a OU b", "S = a ET b", "S = a XOR b", "S = NON a"], bonne: 2, expl: "Ce sont exactement les cas où les entrées diffèrent.", niv: 3 },
        { q: "Une porte OU reçoit 0 et 1. Sa sortie vaut :", choix: ["1", "0", "2", "0,5"], bonne: 0, expl: "Il suffit qu'une entrée soit à 1.", niv: 2 },
        { q: "Dans une machine à états simple, à un instant donné :", choix: ["un nombre d'états variable est actif", "deux états sont actifs", "le système n'a pas d'état", "un seul état est actif"], bonne: 3, expl: "On sait toujours dans quel état se trouve le système.", niv: 1 },
        { q: "Pourquoi une porte NON-ET (NAND) avec ses deux entrées reliées donne-t-elle un NON ?", choix: ["a ET a vaut 1 à chaque fois", "NON (a ET a) = NON a", "elle ajoute un bit de parité", "elle double la valeur de a"], bonne: 1, expl: "a ET a = a, donc la sortie est l'inverse de a.", niv: 3 },
      ] },
    { chapitre: 'sti2d-sin-4',
      fiche: `## Programmer un système embarqué

Les sujets demandent de lire, de compléter ou de corriger un algorigramme ou un programme court (souvent en Python, parfois proche du C d'une carte à microcontrôleur).

### Les briques d'un programme
- **Variable** : une case mémoire nommée, avec un **type** (entier, réel, booléen, chaîne de caractères, liste ou tableau).
- **Affectation** : n = n + 1 augmente n de 1.
- **Condition** : si … alors … sinon. En Python : if, elif, else.
- **Boucle bornée** : répéter un nombre de fois connu (for i in range(10) : i va de 0 à 9).
- **Boucle non bornée** : répéter tant qu'une condition est vraie (while). Attention à la boucle infinie si la condition ne change jamais… sauf dans un système embarqué, où la **boucle principale** tourne volontairement sans fin.
- **Fonction** : un bloc réutilisable avec des **paramètres** et une **valeur renvoyée** (return).

### La structure d'un programme embarqué
- Une partie d'**initialisation** exécutée une fois (configurer les broches en entrée ou en sortie, ouvrir la liaison série).
- Une **boucle principale** répétée sans fin : lire les capteurs, décider, commander les actionneurs, communiquer.
- Les **interruptions** permettent de réagir tout de suite à un événement (front sur une entrée, minuterie) sans attendre le tour de boucle.
- Le **temps de cycle** de la boucle doit rester court pour respecter les contraintes de temps réel.

### Lire et vérifier un programme
- On **exécute à la main** : on note la valeur des variables à chaque ligne (tableau de suivi).
- Exemple : une fonction qui convertit un code Gray g en binaire :
- b = g, puis tant que g > 0 : g = g décalé d'un rang à droite, b = b XOR g ; renvoyer b. Pour g = 6 (110) : b = 110, g = 011, b = 101, g = 001, b = 100, g = 000 : résultat 4.
- Exemple : moyenne glissante pour filtrer une mesure : on additionne les 8 dernières valeurs et on divise par 8.

### Les bibliothèques et l'environnement
- Un **environnement de développement intégré** (IDE) sert à écrire, compiler ou téléverser et déboguer le programme.
- Les **bibliothèques** fournissent des fonctions toutes faites pour un capteur, un écran ou un protocole : on les choisit plutôt que de tout réécrire.
- Le **moniteur série** affiche les valeurs envoyées par la carte : c'est l'outil de test le plus simple.

### Bonnes pratiques
- Noms de variables clairs, commentaires, fonctions courtes.
- Tester les cas limites : valeur minimale, maximale, capteur débranché.
- Vérifier qu'une valeur reste dans son type : un entier sur 8 bits non signé repasse à 0 après 255 (débordement).

### À retenir pour le bac
- Variables et types, conditions, boucles for et while, fonctions avec return.
- Programme embarqué : initialisation, boucle principale sans fin, interruptions.
- Exécuter à la main avec un tableau de suivi des variables.
- range(10) va de 0 à 9 ; attention aux débordements.
- Piège : une condition mal écrite (> au lieu de >=) change le résultat aux limites.`,
      cartes: [
        { q: "Qu'est-ce qu'une variable ?", r: "Une case mémoire nommée qui contient une valeur d'un certain type." },
        { q: "Boucle bornée ?", r: "Une boucle répétée un nombre de fois connu (for)." },
        { q: "Boucle non bornée ?", r: "Une boucle répétée tant qu'une condition est vraie (while)." },
        { q: "Valeurs prises par i dans for i in range(10) ?", r: "De 0 à 9." },
        { q: "Rôle d'une fonction ?", r: "Regrouper des instructions réutilisables, avec des paramètres et une valeur renvoyée." },
        { q: "Structure d'un programme embarqué ?", r: "Une initialisation exécutée une fois, puis une boucle principale sans fin." },
        { q: "Rôle d'une interruption ?", r: "Réagir immédiatement à un événement sans attendre le tour de boucle." },
        { q: "Comment vérifier un programme à la main ?", r: "Noter la valeur des variables ligne après ligne dans un tableau de suivi." },
        { q: "Rôle d'un IDE ?", r: "Écrire, compiler ou téléverser et déboguer le programme." },
        { q: "Intérêt d'une bibliothèque ?", r: "Utiliser des fonctions déjà écrites pour un capteur, un écran ou un protocole." },
        { q: "Qu'est-ce qu'un débordement ?", r: "Une valeur qui dépasse la capacité de son type, par exemple 255 + 1 qui repasse à 0 sur 8 bits." },
        { q: "Moyenne glissante ?", r: "La moyenne des dernières mesures, pour lisser un signal bruité." },
        { q: "Pourquoi garder un temps de cycle court ?", r: "Pour réagir à temps aux événements : contrainte de temps réel." },
      ],
      quiz: [
        { q: "Dans for i in range(10), la dernière valeur prise par i est :", choix: ["11", "10", "9", "12"], bonne: 2, expl: "range(10) donne 0, 1, …, 9.", niv: 1 },
        { q: "n = 3, puis on exécute deux fois n = n * 2 + 1. Valeur finale de n ?", choix: ["12", "7", "13", "15"], bonne: 3, expl: "3 × 2 + 1 = 7, puis 7 × 2 + 1 = 15.", niv: 2 },
        { q: "s = 0 ; for i in range(1, 5): s = s + i. Valeur de s à la fin ?", choix: ["10", "6", "4", "5"], bonne: 0, expl: "1 + 2 + 3 + 4 = 10 : range(1, 5) s'arrête à 4.", niv: 2 },
        { q: "Dans un programme de carte à microcontrôleur, la partie exécutée une seule fois sert à :", choix: ["lire les capteurs en boucle", "initialiser les entrées et sorties", "envoyer les mesures sans fin", "attendre les interruptions qui arrivent pendant le fonctionnement"], bonne: 1, expl: "La boucle principale fait ensuite le travail répétitif.", niv: 1 },
        { q: "x = 200 dans un entier non signé sur 8 bits. On ajoute 100. Valeur stockée ?", choix: ["100", "300", "255", "44"], bonne: 3, expl: "300 dépasse 255 : 300 - 256 = 44 (débordement).", niv: 2 },
        { q: "Fonction Gray vers binaire : b = g ; tant que g > 0 : g = g >> 1 ; b = b ^ g. Résultat pour g = 6 ?", choix: ["5", "6", "4", "2"], bonne: 2, expl: "b = 110 ; g = 011, b = 101 ; g = 001, b = 100 ; g = 000 : 4.", niv: 3 },
        { q: "Une boucle while s'exécute :", choix: ["un nombre de fois fixé à l'avance", "tant que sa condition est vraie", "une seule fois", "jusqu'à la fin de la fonction"], bonne: 1, expl: "Il faut que la condition finisse par devenir fausse, sauf pour la boucle principale.", niv: 1 },
        { q: "Pour réagir tout de suite à l'appui d'un bouton d'arrêt d'urgence, on utilise :", choix: ["une interruption", "une boucle for", "une variable texte", "une temporisation de 10 s"], bonne: 0, expl: "L'interruption suspend le programme en cours.", niv: 2 },
        { q: "T = 25 ; if T > 25: print('chaud') elif T >= 20: print('bon') else: print('froid'). Affichage ?", choix: ["bon", "chaud", "froid", "rien"], bonne: 0, expl: "25 > 25 est faux ; 25 >= 20 est vrai.", niv: 3 },
        { q: "Une fonction qui calcule et transmet un résultat au programme appelant utilise :", choix: ["input", "print", "return", "range"], bonne: 2, expl: "print affiche, return renvoie la valeur.", niv: 2 },
        { q: "L'outil le plus simple pour voir les valeurs envoyées par une carte pendant un test est :", choix: ["le compilateur", "le moniteur série", "la bibliothèque", "le fer à souder"], bonne: 1, expl: "La carte envoie ses valeurs au PC par la liaison série.", niv: 1 },
        { q: "Mesures : 20, 22, 21, 25. Moyenne glissante sur ces 4 valeurs ?", choix: ["21,5", "25", "88", "22"], bonne: 3, expl: "(20 + 22 + 21 + 25) / 4 = 88 / 4 = 22.", niv: 3 },
      ] },
    { chapitre: 'sti2d-sin-5',
      fiche: `## Unités de traitement et interfaces homme-machine

### Trois familles d'unités de traitement
- **Carte à microcontrôleur** : un petit circuit qui exécute un seul programme, démarre instantanément, consomme très peu, possède des **entrées-sorties** directes (logiques, analogiques, PWM). Idéale pour piloter des capteurs et des actionneurs en temps réel.
- **Nano-ordinateur** : une carte avec un **système d'exploitation** (souvent Linux), beaucoup de mémoire, des ports USB, réseau, vidéo, caméra. Idéal pour un serveur web, du traitement d'images, une base de données ; il consomme plus et démarre plus lentement.
- **Module d'objet connecté** : un microcontrôleur avec une radio intégrée (wifi, Bluetooth, LoRa), pour relier un capteur à internet en consommant peu.

### Les entrées-sorties
- **Entrée logique** : lit 0 ou 1 (bouton, détecteur). Une résistance de **tirage** (pull-up) fixe l'état quand le bouton est relâché.
- **Entrée analogique** : un CAN intégré lit une tension (souvent 0-3,3 V ou 0-5 V, sur 10 ou 12 bits).
- **Sortie logique** : allume une LED, commande un relais à travers un transistor (la broche ne fournit que quelques milliampères).
- **Sortie PWM** (modulation de largeur d'impulsion) : un signal rectangulaire de rapport cyclique réglable pour varier la vitesse d'un moteur ou la luminosité d'une LED. Valeur moyenne = rapport cyclique × tension. 8 bits : de 0 à 255 ; 191 / 255 ≈ 75 %.
- Il faut respecter les **niveaux de tension** : une entrée 3,3 V peut être détruite par un signal de 5 V.

### Choisir une unité de traitement
- Critères : nombre et type d'**entrées-sorties**, **interfaces de communication** (I2C, SPI, série, wifi), puissance de calcul et mémoire, **consommation** (autonomie sur pile), coût, taille, environnement de développement et bibliothèques disponibles.
- Exemple : un capteur de niveau sur pile qui envoie une mesure par heure : module d'objet connecté en sommeil profond. Une caméra qui détecte des véhicules : nano-ordinateur.

### La consommation
- Un module qui dort à 10 µA et se réveille 1 s par heure à 100 mA consomme en moyenne environ 10 µA + 100 mA × (1 / 3 600) ≈ 38 µA.
- Autonomie = capacité de la pile / courant moyen. 2 000 mA·h / 0,038 mA ≈ 52 600 h, soit environ 6 ans.

### Les interfaces homme-machine (IHM)
- **Sorties visuelles** : LED, afficheur à segments, écran LCD ou OLED, écran graphique tactile. **Sonores** : buzzer, haut-parleur. **Haptiques** : vibreur.
- **Entrées** : boutons, clavier, écran tactile, codeur rotatif, commande vocale.
- Une bonne IHM est lisible, simple, adaptée à l'usager (taille, contraste, langue) et donne un **retour** à chaque action.
- **Supervision** : une IHM sur un PC ou une tablette qui affiche en temps réel les données d'une installation.

### À retenir pour le bac
- Microcontrôleur : temps réel, peu de consommation ; nano-ordinateur : système d'exploitation, puissance ; module connecté : radio intégrée.
- PWM : valeur moyenne = rapport cyclique × tension.
- Choisir selon les entrées-sorties, les interfaces, la consommation, le coût.
- Courant moyen et autonomie d'un objet qui dort la plupart du temps.
- Piège : vérifier les niveaux de tension 3,3 V et 5 V.`,
      cartes: [
        { q: "Points forts d'une carte à microcontrôleur ?", r: "Démarrage immédiat, faible consommation, entrées-sorties directes, temps réel." },
        { q: "Points forts d'un nano-ordinateur ?", r: "Système d'exploitation, mémoire, ports USB, réseau, vidéo : serveur, images, base de données." },
        { q: "Module d'objet connecté ?", r: "Un microcontrôleur avec une radio intégrée pour relier un capteur à internet." },
        { q: "Rôle d'une résistance de tirage (pull-up) ?", r: "Fixer l'état d'une entrée logique quand le bouton est relâché." },
        { q: "Qu'est-ce qu'une sortie PWM ?", r: "Un signal rectangulaire de rapport cyclique réglable." },
        { q: "Valeur moyenne d'un signal PWM ?", r: "Rapport cyclique × tension." },
        { q: "Pourquoi un transistor entre la carte et un relais ?", r: "La broche de la carte ne fournit que quelques milliampères." },
        { q: "Risque d'un signal 5 V sur une entrée 3,3 V ?", r: "Détruire l'entrée de la carte." },
        { q: "Critères de choix d'une unité de traitement ?", r: "Entrées-sorties, interfaces, puissance de calcul, consommation, coût, outils de développement." },
        { q: "Autonomie d'un objet sur pile ?", r: "Capacité de la pile / courant moyen." },
        { q: "Intérêt du sommeil profond ?", r: "Réduire fortement le courant moyen pour tenir des années sur pile." },
        { q: "Exemples d'IHM de sortie ?", r: "LED, afficheur, écran, buzzer, vibreur." },
        { q: "Qualités d'une bonne IHM ?", r: "Lisible, simple, adaptée à l'usager, avec un retour à chaque action." },
      ],
      quiz: [
        { q: "Pour un serveur web qui affiche des images de caméra, on choisit plutôt :", choix: ["un microcontrôleur 8 bits", "un nano-ordinateur", "un capteur tout ou rien", "une porte logique"], bonne: 1, expl: "Il faut un système d'exploitation, de la mémoire et un port vidéo.", niv: 1 },
        { q: "Sortie PWM 8 bits sous 5 V, valeur 191. Tension moyenne, environ ?", choix: ["3,75 V", "5 V", "1,91 V", "0,75 V"], bonne: 0, expl: "191 / 255 ≈ 0,75 ; 0,75 × 5 ≈ 3,75 V.", niv: 2 },
        { q: "Signal PWM de rapport cyclique 40 % sous 12 V. Valeur moyenne ?", choix: ["12 V", "7,2 V", "4,8 V", "6 V"], bonne: 2, expl: "0,4 × 12 = 4,8 V.", niv: 2 },
        { q: "Une résistance de tirage sur l'entrée d'un bouton sert à :", choix: ["protéger la carte contre les parasites du réseau électrique", "augmenter la tension d'alimentation", "mesurer le courant du bouton", "fixer l'état de l'entrée bouton relâché"], bonne: 3, expl: "Sans elle, l'entrée « flotte » et lit n'importe quoi.", niv: 1 },
        { q: "Pourquoi commander un relais 12 V par un transistor plutôt que directement par la carte ?", choix: ["La broche ne fournit que quelques mA", "Le relais fonctionne en code Gray", "La carte ne sait pas produire de 1", "Le transistor mesure la température"], bonne: 0, expl: "La bobine du relais demande plus de courant que la broche n'en fournit.", niv: 2 },
        { q: "Module : 10 µA en sommeil, 100 mA pendant 1 s chaque heure. Courant moyen, environ ?", choix: ["28 mA", "100 mA", "10 µA", "38 µA"], bonne: 3, expl: "100 mA × 1 / 3 600 ≈ 28 µA, plus 10 µA : environ 38 µA.", niv: 3 },
        { q: "Une carte à microcontrôleur se distingue d'un nano-ordinateur par :", choix: ["son système d'exploitation complet", "sa faible consommation et son démarrage immédiat", "ses ports vidéo", "sa grande mémoire et ses nombreux ports USB pour les périphériques"], bonne: 1, expl: "Elle exécute directement un seul programme.", niv: 1 },
        { q: "Pile de 2 000 mA·h, courant moyen 0,04 mA. Autonomie, environ ?", choix: ["500 h", "80 h", "50 000 h", "5 000 h"], bonne: 2, expl: "2 000 / 0,04 = 50 000 h, soit plus de 5 ans.", niv: 2 },
        { q: "Un capteur de niveau isolé, sur pile, envoie une mesure par heure. Quelle unité choisir ?", choix: ["Un nano-ordinateur allumé en permanence", "Un module connecté basse consommation en sommeil", "Un PC de bureau", "Un automate industriel sur secteur"], bonne: 1, expl: "Il dort presque tout le temps et ne se réveille que pour mesurer et envoyer.", niv: 3 },
        { q: "Un capteur fournit 5 V et l'entrée de la carte accepte 3,3 V au maximum. Que faire ?", choix: ["Augmenter la tension de la carte à 5 V", "Brancher directement, la carte s'adaptera", "Ajouter un pont diviseur ou un adaptateur de niveau", "Supprimer la masse commune entre le capteur et la carte de traitement"], bonne: 2, expl: "Un pont de résistances ramène 5 V à 3,3 V.", niv: 2 },
        { q: "Un vibreur dans une montre connectée est une IHM :", choix: ["haptique", "sonore", "visuelle", "vocale"], bonne: 0, expl: "Elle agit sur le toucher.", niv: 1 },
        { q: "Pour un afficheur dans un hall de gare, la qualité d'IHM la plus importante est :", choix: ["un clavier complet", "le nombre de couleurs du logo", "la présence d'un vibreur", "la lisibilité à distance"], bonne: 3, expl: "Taille des caractères et contraste passent avant tout.", niv: 3 },
      ] },
    { chapitre: 'sti2d-sin-6',
      fiche: `## Bus de communication filaires

Dans un système, les cartes, capteurs et actionneurs échangent des données par des **bus**. Le sujet demande souvent de choisir un bus, de lire une trame ou de calculer un temps de transmission.

### Vocabulaire
- **Liaison série** : les bits passent l'un après l'autre sur un fil ; **parallèle** : plusieurs bits en même temps sur plusieurs fils.
- **Synchrone** : une horloge commune accompagne les données ; **asynchrone** : pas d'horloge, l'émetteur et le récepteur sont réglés à la même vitesse.
- **Débit binaire** en bit/s ; la **rapidité de modulation** se mesure en bauds (pour un signal à deux niveaux, 1 baud = 1 bit/s).
- **Maître et esclaves** : le maître lance les échanges, chaque esclave a une **adresse**.
- **Half-duplex** : un sens à la fois ; **full-duplex** : les deux sens en même temps.

### La liaison série asynchrone (UART)
- Deux fils de données croisés (TX vers RX) et une masse commune.
- Format courant **8N1** : 1 bit de start, 8 bits de données, pas de parité, 1 bit de stop, soit **10 bits par octet**.
- À 9 600 bauds : 9 600 / 10 = **960 octets par seconde**. Une trame de 48 octets dure 48 × 10 / 9 600 = 50 ms.
- En milieu industriel, la norme **RS-485** transporte cette liaison sur une paire différentielle jusqu'à environ 1 200 m, avec plusieurs appareils (protocole Modbus RTU).

### Les bus de carte
- **I2C** : deux fils, **SDA** (données) et **SCL** (horloge), synchrone, adresses sur **7 bits** (jusqu'à 112 adresses utilisables en pratique), quelques centaines de kbit/s, courtes distances (dans un boîtier). Idéal pour capteurs et petits écrans.
- **SPI** : quatre fils (horloge, deux lignes de données, sélection), full-duplex, plusieurs Mbit/s, un fil de sélection par esclave. Idéal pour un écran rapide ou une carte mémoire.
- **SSI** : liaison synchrone utilisée par certains codeurs absolus ; le maître envoie l'horloge, le codeur renvoie sa position bit par bit.

### Les bus de terrain et du bâtiment
- **CAN** : bus robuste, deux fils différentiels, utilisé dans l'automobile et l'industrie ; les messages ont une **priorité** et un contrôle d'erreurs (CRC).
- **KNX** : bus du bâtiment (éclairage, volets, chauffage) sur une paire dédiée.
- **Modbus** : protocole maître-esclave très répandu, sur RS-485 (RTU) ou sur réseau Ethernet (TCP, port 502).

### Choisir un bus
- Critères : **distance**, **débit** nécessaire, **nombre d'appareils**, **immunité aux parasites** (paire différentielle), nombre de fils, coût, compatibilité avec les composants existants.
- Temps de transmission = nombre de bits à envoyer / débit. Ne pas oublier les bits ajoutés (start, stop, adresse, contrôle).

### À retenir pour le bac
- UART 8N1 : 10 bits par octet ; 9 600 bauds donnent 960 octets par seconde.
- I2C : SDA et SCL, adresses 7 bits, courte distance ; SPI : rapide, un fil de sélection par esclave.
- RS-485 et CAN : paires différentielles, longues distances, milieu perturbé.
- Temps = bits / débit.
- Piège : oublier les bits de start et de stop dans le calcul.`,
      cartes: [
        { q: "Liaison série ?", r: "Les bits passent l'un après l'autre sur un même fil." },
        { q: "Liaison synchrone ?", r: "Une horloge commune accompagne les données." },
        { q: "Format 8N1 ?", r: "1 bit de start, 8 bits de données, pas de parité, 1 bit de stop : 10 bits par octet." },
        { q: "Octets par seconde à 9 600 bauds en 8N1 ?", r: "960." },
        { q: "Fils du bus I2C ?", r: "SDA pour les données, SCL pour l'horloge, plus la masse." },
        { q: "Taille d'une adresse I2C ?", r: "7 bits." },
        { q: "Points forts du SPI ?", r: "Rapide (plusieurs Mbit/s) et full-duplex ; un fil de sélection par esclave." },
        { q: "Intérêt d'une paire différentielle (RS-485, CAN) ?", r: "Résister aux parasites et transmettre sur de longues distances." },
        { q: "Half-duplex ?", r: "Échanges dans les deux sens, mais un seul sens à la fois." },
        { q: "Rôle du maître sur un bus ?", r: "Lancer les échanges et interroger les esclaves par leur adresse." },
        { q: "Bus du bâtiment pour éclairage et volets ?", r: "KNX." },
        { q: "Calcul d'un temps de transmission ?", r: "Nombre de bits envoyés, bits ajoutés compris, divisé par le débit." },
        { q: "Port réseau de Modbus TCP ?", r: "502." },
      ],
      quiz: [
        { q: "En format 8N1, combien de bits sont envoyés pour un octet ?", choix: ["10", "8", "9", "7"], bonne: 0, expl: "1 start + 8 données + 1 stop = 10 bits.", niv: 1 },
        { q: "Liaison 8N1 à 9 600 bauds. Combien d'octets par seconde ?", choix: ["1 200", "960", "9 600", "76 800"], bonne: 1, expl: "9 600 / 10 = 960 octets par seconde.", niv: 2 },
        { q: "Trame de 48 octets en 8N1 à 9 600 bauds. Durée ?", choix: ["0,5 ms", "40 ms", "5 ms", "50 ms"], bonne: 3, expl: "48 × 10 = 480 bits ; 480 / 9 600 = 0,05 s.", niv: 2 },
        { q: "Les deux lignes du bus I2C s'appellent :", choix: ["MOSI et MISO", "TX et RX", "SDA et SCL", "CAN H et CAN L"], bonne: 2, expl: "SDA porte les données, SCL l'horloge.", niv: 1 },
        { q: "Une adresse I2C sur 7 bits permet en théorie combien d'adresses ?", choix: ["64", "7", "128", "112"], bonne: 2, expl: "2^7 = 128 ; certaines sont réservées, d'où environ 112 en pratique.", niv: 2 },
        { q: "Des capteurs répartis sur 800 m dans un atelier plein de moteurs. Quelle liaison choisir ?", choix: ["I2C entre les capteurs", "RS-485 sur paire différentielle", "SPI avec un fil par capteur", "Une liaison parallèle 8 fils"], bonne: 1, expl: "La paire différentielle résiste aux parasites et porte loin ; I2C et SPI restent dans un boîtier.", niv: 3 },
        { q: "Dans une liaison UART, le fil TX d'une carte se relie :", choix: ["au fil RX de l'autre carte", "au fil TX de l'autre carte", "à l'alimentation", "à l'horloge SCL"], bonne: 0, expl: "Ce que l'une émet, l'autre le reçoit : on croise.", niv: 1 },
        { q: "Pour un écran couleur rapide sur une carte, on préfère plutôt :", choix: ["une liaison à 300 bauds", "l'I2C, plus lent", "le KNX du bâtiment", "le SPI, plus rapide"], bonne: 3, expl: "Le SPI atteint plusieurs Mbit/s.", niv: 2 },
        { q: "Codeur sur 25 bits lu en SSI à 500 kbit/s. Durée minimale d'une lecture ?", choix: ["25 µs", "50 µs", "20 µs", "5 µs"], bonne: 1, expl: "25 / 500 000 = 0,00005 s = 50 µs.", niv: 3 },
        { q: "Une liaison half-duplex transmet :", choix: ["par une liaison radio", "dans un seul sens, sans retour possible", "dans les deux sens en même temps", "dans les deux sens, un sens à la fois"], bonne: 3, expl: "Full-duplex : les deux sens en même temps.", niv: 2 },
        { q: "Sur un bus maître-esclave, chaque esclave est reconnu par :", choix: ["son adresse", "la couleur de son câble de raccordement au bus", "sa tension d'alimentation", "sa longueur de fil"], bonne: 0, expl: "Le maître envoie l'adresse au début de la trame.", niv: 1 },
        { q: "Un bus à 115 200 bauds en 8N1 envoie un fichier de 57 600 octets. Durée ?", choix: ["4 s", "0,5 s", "5 s", "2 s"], bonne: 2, expl: "57 600 × 10 = 576 000 bits ; 576 000 / 115 200 = 5 s.", niv: 3 },
      ] },
    { chapitre: 'sti2d-sin-7',
      fiche: `## Transmission sans fil

Les objets connectés communiquent souvent par radio. Le sujet demande de comparer des technologies (portée, débit, consommation, coût) et parfois de faire un calcul de longueur d'onde ou de puissance.

### Une onde radio
- Une onde électromagnétique se propage à la vitesse de la lumière, **c = 3 × 10^8 m/s**.
- **Longueur d'onde λ = c / f**. À 2,4 GHz : 3 × 10^8 / 2,4 × 10^9 = 0,125 m, soit **12,5 cm**. À 868 MHz : environ 34,6 cm.
- Une antenne simple mesure souvent un quart de la longueur d'onde (environ 3 cm à 2,4 GHz).
- Plus la fréquence est basse, mieux l'onde traverse les murs et plus elle porte loin, mais moins le débit possible est élevé.
- Les obstacles (murs, métal, eau), la distance et les autres émetteurs affaiblissent le signal.

### La puissance en dBm
- On exprime souvent une puissance radio en **dBm** : 0 dBm = 1 mW ; **10 dBm = 10 mW** ; **20 dBm = 100 mW**.
- **+3 dB** multiplie environ la puissance par 2 ; **+10 dB** la multiplie par 10 ; -10 dB la divise par 10.
- Le récepteur a une **sensibilité** (par exemple -120 dBm) : en dessous, il ne comprend plus le signal. Le **bilan de liaison** compare la puissance reçue à cette sensibilité.

### Les technologies à connaître
- **Wifi** (2,4 ou 5 GHz) : débit élevé (dizaines à centaines de Mbit/s), portée de quelques dizaines de mètres, consommation importante. Pour une caméra ou un ordinateur.
- **Bluetooth Low Energy (BLE)** : courte portée (environ 10 à 50 m), faible consommation, pour relier un capteur à un smartphone.
- **Zigbee** : réseau maillé à faible consommation pour la domotique (chaque nœud peut relayer les messages).
- **LoRa** (LoRaWAN, 868 MHz en Europe) : longue portée (plusieurs kilomètres), très faible consommation, débit très faible (quelques kbit/s), pour des capteurs qui envoient peu de données.
- **Sigfox** : longue portée, très faible débit, nombre de messages limité par jour.
- **Réseau cellulaire** (4G, 5G, LTE-M, NB-IoT) : couverture très large par un opérateur, abonnement payant.
- **RFID et NFC** : quelques centimètres à quelques mètres, pour l'identification (badge, étiquette).

### Choisir une technologie
- Critères : **portée**, **débit** utile, **consommation** (autonomie sur pile), **coût** (matériel, abonnement), sécurité, infrastructure disponible (passerelle, couverture), taille des messages et fréquence d'envoi.
- Exemple : un capteur d'humidité dans un champ, une mesure toutes les 15 minutes, sur pile, à 3 km de la ferme : LoRa. Une caméra de surveillance dans une maison : wifi.

### À retenir pour le bac
- λ = c / f ; 2,4 GHz donne 12,5 cm.
- 0 dBm = 1 mW, 20 dBm = 100 mW, +3 dB environ ×2.
- Wifi : débit, mais consommation ; BLE : courte portée, peu de consommation ; LoRa et Sigfox : longue portée, très faible débit.
- Choisir selon portée, débit, consommation et coût.
- Piège : une longue portée se paie par un débit très faible.`,
      cartes: [
        { q: "Formule de la longueur d'onde ?", r: "λ = c / f, avec c = 3 × 10^8 m/s." },
        { q: "Longueur d'onde à 2,4 GHz ?", r: "12,5 cm." },
        { q: "Que vaut 0 dBm ?", r: "1 mW." },
        { q: "Que vaut 20 dBm ?", r: "100 mW." },
        { q: "Effet de +3 dB sur une puissance ?", r: "Elle est multipliée environ par 2." },
        { q: "Sensibilité d'un récepteur radio ?", r: "La plus petite puissance reçue qu'il peut encore comprendre." },
        { q: "Points forts du wifi ?", r: "Débit élevé ; mais consommation importante et portée de quelques dizaines de mètres." },
        { q: "Usage typique du BLE ?", r: "Relier un capteur à faible consommation à un smartphone à courte distance." },
        { q: "Points forts de LoRa ?", r: "Portée de plusieurs kilomètres et très faible consommation, mais débit très faible." },
        { q: "Réseau maillé Zigbee ?", r: "Chaque nœud peut relayer les messages des autres, ce qui étend la couverture." },
        { q: "Basse ou haute fréquence pour traverser les murs ?", r: "Basse fréquence : l'onde porte plus loin et traverse mieux les obstacles." },
        { q: "Critères de choix d'une technologie sans fil ?", r: "Portée, débit, consommation, coût, sécurité, infrastructure disponible." },
        { q: "Usage de la NFC ?", r: "Identifier ou échanger à quelques centimètres (badge, paiement)." },
      ],
      quiz: [
        { q: "Longueur d'onde d'une onde à 2,4 GHz (c = 3 × 10^8 m/s) ?", choix: ["8 cm", "1,25 cm", "1,25 m", "12,5 cm"], bonne: 3, expl: "3 × 10^8 / 2,4 × 10^9 = 0,125 m.", niv: 1 },
        { q: "Longueur d'onde à 868 MHz, environ ?", choix: ["2,9 m", "3,46 cm", "34,6 cm", "12,5 cm"], bonne: 2, expl: "3 × 10^8 / 8,68 × 10^8 ≈ 0,346 m.", niv: 2 },
        { q: "Un émetteur de 20 dBm a une puissance de :", choix: ["100 mW", "20 mW", "2 mW", "10 mW"], bonne: 0, expl: "0 dBm = 1 mW ; chaque fois +10 dB, ×10 : 10 dBm = 10 mW, 20 dBm = 100 mW.", niv: 2 },
        { q: "Pour relier un bracelet capteur à un smartphone en consommant peu, on choisit :", choix: ["le LoRa à 868 MHz", "le Bluetooth Low Energy", "la fibre optique", "un bus CAN"], bonne: 1, expl: "Courte portée et faible consommation : c'est l'usage du BLE.", niv: 1 },
        { q: "On passe un émetteur de 10 dBm à 13 dBm. Sa puissance devient environ :", choix: ["13 mW", "20 mW", "30 mW", "100 mW"], bonne: 1, expl: "10 dBm = 10 mW ; +3 dB double la puissance.", niv: 2 },
        { q: "Capteur sur pile dans un champ, à 3 km de la ferme, 20 octets toutes les 15 min. Technologie ?", choix: ["LoRa", "Wifi", "Bluetooth Low Energy", "NFC"], bonne: 0, expl: "Longue portée, peu de données, faible consommation.", niv: 3 },
        { q: "La technologie la plus adaptée pour transmettre la vidéo d'une caméra dans une maison est :", choix: ["LoRa", "Sigfox", "le wifi", "la NFC"], bonne: 2, expl: "La vidéo demande un débit élevé.", niv: 1 },
        { q: "Quand la fréquence d'une onde radio baisse, en général :", choix: ["elle ne traverse plus les murs ni les obstacles en métal ou en béton", "elle porte moins loin et le débit monte", "sa longueur d'onde diminue", "elle porte plus loin mais le débit baisse"], bonne: 3, expl: "λ = c / f augmente quand f baisse ; l'onde passe mieux les obstacles.", niv: 2 },
        { q: "Puissance reçue -110 dBm, sensibilité du récepteur -120 dBm. Conclusion ?", choix: ["La liaison fonctionne, avec 10 dB de marge", "La liaison ne fonctionne pas", "Il manque 10 dB", "La liaison ne marche que si l'on double la puissance d'émission"], bonne: 0, expl: "-110 dBm est au-dessus de -120 dBm : le signal est 10 fois plus fort que le minimum.", niv: 3 },
        { q: "Un réseau maillé (Zigbee) se distingue parce que :", choix: ["il fonctionne sur fibre optique", "chaque capteur a sa propre carte SIM", "il n'utilise pas d'ondes radio", "chaque nœud peut relayer les messages"], bonne: 3, expl: "Le message passe de nœud en nœud jusqu'à la passerelle.", niv: 2 },
        { q: "L'unité dBm exprime :", choix: ["un débit", "une fréquence", "une puissance par rapport à 1 mW", "une distance"], bonne: 2, expl: "0 dBm = 1 mW.", niv: 1 },
        { q: "Antenne quart d'onde pour 2,4 GHz. Longueur, environ ?", choix: ["12,5 cm", "3,1 cm", "25 cm", "50 cm"], bonne: 1, expl: "12,5 / 4 ≈ 3,1 cm.", niv: 3 },
      ] },
    { chapitre: 'sti2d-sin-8',
      fiche: `## Réseaux : couches, adressage et protocoles

Les bases (adresse IP, rôle d'un réseau) sont dans le tronc commun. En SIN, on lit un schéma de réseau, on vérifie un plan d'adressage et on explique le trajet d'une donnée.

### Le modèle en couches
- Le **modèle TCP/IP** range les rôles en quatre couches : **accès au réseau** (Ethernet, wifi : adresses MAC, trames), **internet** (IP : adresses et routage), **transport** (TCP ou UDP : ports), **application** (HTTP, DNS, MQTT, Modbus TCP).
- Le **modèle OSI** détaille la même idée en sept couches (physique, liaison, réseau, transport, session, présentation, application).
- **Encapsulation** : chaque couche ajoute son en-tête autour des données de la couche du dessus. Le récepteur retire les en-têtes dans l'ordre inverse.
- **TCP** : connexion, accusés de réception, données remises dans l'ordre (fiable, pour une page web ou un fichier). **UDP** : sans connexion, plus rapide, sans garantie (pour la voix ou la vidéo en direct).

### L'adressage IP
- Une adresse IPv4 = 32 bits écrits en 4 octets décimaux (192.168.1.20). Le **masque** sépare la partie **réseau** de la partie **hôte**.
- Notation **/n** : n bits de réseau. /24 = 255.255.255.0 ; /16 = 255.255.0.0 ; /26 = 255.255.255.192.
- **Nombre d'hôtes** = 2^(32 - n) - 2 (on retire l'adresse du réseau et celle de diffusion). /24 : 254 ; /26 : 62 ; /16 : 65 534.
- Deux machines communiquent directement si elles ont la **même adresse de réseau** (adresse ET masque). Sinon, il faut passer par la **passerelle** (un routeur).
- Exemple : 192.168.1.20 /26 a pour réseau 192.168.1.0 (hôtes de .1 à .62, diffusion .63). La machine 192.168.1.70 est dans un autre réseau.
- Adresses **privées** (192.168.x.x, 10.x.x.x) dans le réseau local ; le routeur de la box fait la traduction vers l'adresse publique.

### Les services du réseau
- **DHCP** : donne automatiquement une adresse IP, un masque et une passerelle aux appareils.
- **DNS** : traduit un nom (www.exemple.fr) en adresse IP.
- **ARP** : retrouve l'adresse MAC qui correspond à une adresse IP dans le réseau local.
- **Ports** : ils désignent l'application sur la machine. 80 (HTTP), 443 (HTTPS), 502 (Modbus TCP), 1883 (MQTT), 22 (SSH).

### Les équipements
- **Commutateur** (switch) : relie les machines d'un même réseau local, aiguille les trames selon l'adresse MAC.
- **Routeur** : relie des réseaux différents, aiguille les paquets selon l'adresse IP.
- **Point d'accès** wifi : relie les appareils sans fil au réseau filaire.

### Débit et découpage
- Un fichier est découpé en paquets : en Ethernet, une trame transporte au plus **1 500 octets** de données. Un fichier de 15 000 octets donne au moins 10 trames.
- Temps de transfert = taille en bits / débit utile. 2 Mo à 10 Mbit/s : 16 Mbit / 10 Mbit/s = 1,6 s (sans compter les en-têtes).

### À retenir pour le bac
- Couches : accès réseau, internet (IP), transport (TCP, UDP, ports), application.
- Hôtes = 2^(32 - n) - 2 ; même réseau si adresse ET masque identiques.
- DHCP donne l'adresse, DNS traduit les noms, ARP trouve l'adresse MAC.
- Commutateur dans le réseau local, routeur entre réseaux.
- Piège : convertir les octets en bits (× 8) avant de diviser par un débit en bit/s.`,
      cartes: [
        { q: "Les quatre couches du modèle TCP/IP ?", r: "Accès au réseau, internet, transport, application." },
        { q: "Encapsulation ?", r: "Chaque couche ajoute son en-tête autour des données de la couche du dessus." },
        { q: "TCP ou UDP pour un fichier ?", r: "TCP : connexion, accusés de réception, données dans l'ordre." },
        { q: "Rôle du masque de sous-réseau ?", r: "Séparer la partie réseau de la partie hôte de l'adresse IP." },
        { q: "Nombre d'hôtes d'un réseau /n ?", r: "2^(32 - n) - 2." },
        { q: "Masque /24 en décimal ?", r: "255.255.255.0." },
        { q: "Quand deux machines sont-elles dans le même réseau ?", r: "Quand adresse ET masque donnent la même adresse de réseau." },
        { q: "Rôle de la passerelle ?", r: "Le routeur par lequel passent les paquets destinés à un autre réseau." },
        { q: "Rôle du DHCP ?", r: "Donner automatiquement adresse IP, masque et passerelle." },
        { q: "Rôle du DNS ?", r: "Traduire un nom de domaine en adresse IP." },
        { q: "Rôle d'ARP ?", r: "Trouver l'adresse MAC correspondant à une adresse IP du réseau local." },
        { q: "Commutateur ou routeur ?", r: "Le commutateur relie les machines d'un réseau local (MAC) ; le routeur relie des réseaux (IP)." },
        { q: "Ports de HTTP, HTTPS, Modbus TCP, MQTT ?", r: "80, 443, 502, 1883." },
        { q: "Données maximales dans une trame Ethernet ?", r: "1 500 octets." },
      ],
      quiz: [
        { q: "Combien d'hôtes peut-on adresser dans un réseau /24 ?", choix: ["24", "256", "254", "255"], bonne: 2, expl: "2^8 - 2 = 254.", niv: 1 },
        { q: "Combien d'hôtes dans un réseau /26 ?", choix: ["64", "62", "26", "128"], bonne: 1, expl: "2^6 - 2 = 62.", niv: 2 },
        { q: "Le masque /26 s'écrit en décimal :", choix: ["255.255.192.0", "255.255.255.0", "255.255.255.26", "255.255.255.192"], bonne: 3, expl: "26 bits à 1 : trois octets à 255 puis 1100 0000 = 192.", niv: 2 },
        { q: "Le service qui traduit un nom de site en adresse IP s'appelle :", choix: ["DNS", "DHCP", "ARP", "TCP"], bonne: 0, expl: "DHCP donne les adresses, ARP trouve l'adresse MAC.", niv: 1 },
        { q: "192.168.1.20 /26 et 192.168.1.70 /26 peuvent-elles communiquer sans routeur ?", choix: ["Non : réseaux 192.168.1.0 et 192.168.1.64", "Oui : les trois premiers octets sont égaux", "Oui : le masque est le même", "Non : leurs ports sont différents"], bonne: 0, expl: "Avec /26, .20 est dans le réseau .0 (de .0 à .63) et .70 dans le réseau .64.", niv: 2 },
        { q: "Fichier de 2 Mo (2 000 000 octets) sur un lien utile de 10 Mbit/s. Durée minimale ?", choix: ["0,8 s", "0,2 s", "1,6 s", "1,2 s"], bonne: 2, expl: "2 000 000 × 8 = 16 Mbit ; 16 / 10 = 1,6 s.", niv: 3 },
        { q: "L'équipement qui relie deux réseaux IP différents est :", choix: ["un commutateur", "un routeur", "un câble croisé", "une carte SD"], bonne: 1, expl: "Le commutateur reste dans le même réseau local.", niv: 1 },
        { q: "Pour un transfert de fichier qui ne doit perdre aucune donnée, on utilise :", choix: ["DNS", "UDP", "ARP", "TCP"], bonne: 3, expl: "TCP accuse réception et renvoie ce qui est perdu.", niv: 2 },
        { q: "Un automate répond en Modbus TCP. Sur quel port faut-il l'interroger ?", choix: ["1883", "80", "443", "502"], bonne: 3, expl: "80 et 443 sont pour le web, 1883 pour MQTT.", niv: 3 },
        { q: "Un message de 15 000 octets de données passe sur Ethernet. Nombre minimal de trames ?", choix: ["1", "10", "15", "8"], bonne: 1, expl: "15 000 / 1 500 = 10 trames.", niv: 2 },
        { q: "Le DHCP sert à :", choix: ["traduire les noms en adresses", "chiffrer les échanges", "donner une adresse IP aux appareils", "relier deux réseaux"], bonne: 2, expl: "Il fournit aussi le masque et la passerelle.", niv: 1 },
        { q: "Une passerelle 192.168.10.1 /24 est-elle valable pour un poste 192.168.1.15 /24 ?", choix: ["Non, elle n'est pas dans le réseau du poste", "Oui, la passerelle peut être n'importe où", "Oui, car le masque est le même pour le poste et pour la passerelle", "Non, car une passerelle finit par .254"], bonne: 0, expl: "Le poste est dans 192.168.1.0 : sa passerelle doit avoir une adresse 192.168.1.x.", niv: 3 },
      ] },
    { chapitre: 'sti2d-sin-9',
      fiche: `## Objets connectés et données

Un objet connecté mesure, envoie ses données à un serveur, qui les stocke et les affiche sur une page web ou une application. Le sujet demande de décrire ce trajet, de lire un message, de calculer une taille de données ou de vérifier qu'un affichage est assez rapide.

### L'architecture
- **Objet** (capteur et module radio), **passerelle** (qui reçoit la radio et la transmet sur internet), **serveur** (qui stocke dans une **base de données**), **application** ou page web (qui affiche).
- Modèle **client-serveur** : le client fait une **requête**, le serveur envoie une **réponse**. Le navigateur est un client, le site web un serveur.
- Le **cloud** : des serveurs distants loués, accessibles par internet.

### Le web et ses requêtes
- **HTTP** : le protocole du web (port 80 ; HTTPS chiffré, port 443).
- Requête **GET** : demander une ressource (lire la dernière mesure). Requête **POST** : envoyer des données au serveur (déposer une nouvelle mesure).
- Codes de réponse : **200** (tout va bien), **404** (ressource introuvable), **500** (erreur du serveur).
- Une page web : **HTML** pour le contenu, **CSS** pour la mise en forme, **JavaScript** pour les actions et la mise à jour sans recharger.
- Une **API** est l'ensemble des adresses qu'un serveur met à disposition des programmes.

### Le protocole MQTT
- Modèle **publication-abonnement** : un **broker** (serveur central) reçoit les messages publiés sur un **topic** (par exemple ferme/eolienne3/vent) et les transmet à tous les abonnés de ce topic.
- Léger, adapté aux petits objets ; port **1883** (8883 chiffré).
- L'objet qui publie n'a pas besoin de connaître ceux qui lisent.

### Les formats de données
- **JSON** : texte lisible, des paires nom-valeur entre accolades : {"capteur": "T1", "temp": 21.5}. Très utilisé dans les API.
- **CSV** : un tableau en texte, une ligne par mesure, valeurs séparées par des virgules ou des points-virgules.
- En binaire, les données prennent moins de place qu'en texte : une température sur 2 octets au lieu d'environ 15 caractères en JSON.

### Tailles et débits
- 1 octet = 8 bits ; **1 ko = 1 024 octets** (souvent arrondi à 1 000), 1 Mo = 1 024 ko.
- Taille d'un enregistrement = nombre de mesures × taille d'une mesure. 3 mesures de 2 octets toutes les secondes : 6 octets/s, soit 6 × 86 400 = 518 400 octets par jour, environ 506 ko.
- **Temps réel** : la donnée doit être affichée avant une échéance (par exemple moins d'une seconde). On vérifie : temps de mesure + transmission + traitement + affichage, inférieur à l'échéance.
- Le **rafraîchissement** d'une page (toutes les 5 s, par exemple) limite la fraîcheur de l'affichage.

### Stocker et exploiter
- Une **base de données** range les mesures en tables (date, capteur, valeur) ; on les interroge pour tracer une courbe ou calculer une moyenne.
- On garde l'heure de chaque mesure (**horodatage**) pour pouvoir la retrouver et la comparer.

### À retenir pour le bac
- Objet, passerelle, serveur et base de données, application.
- HTTP : GET pour lire, POST pour envoyer ; 200, 404, 500.
- MQTT : broker, topic, publication et abonnement.
- JSON : paires nom-valeur ; 1 ko = 1 024 octets.
- Piège : vérifier le temps réel avec la chaîne complète, pas seulement la transmission.`,
      cartes: [
        { q: "Chaîne d'un objet connecté ?", r: "Objet, passerelle, serveur et base de données, application d'affichage." },
        { q: "Modèle client-serveur ?", r: "Le client envoie une requête, le serveur renvoie une réponse." },
        { q: "Requête GET ?", r: "Demander une ressource au serveur, par exemple la dernière mesure." },
        { q: "Requête POST ?", r: "Envoyer des données au serveur, par exemple une nouvelle mesure." },
        { q: "Code HTTP 404 ?", r: "La ressource demandée est introuvable." },
        { q: "Rôles de HTML, CSS et JavaScript ?", r: "Contenu, mise en forme, actions et mise à jour de la page." },
        { q: "Principe de MQTT ?", r: "Publication-abonnement : un broker transmet les messages d'un topic à tous ses abonnés." },
        { q: "Rôle du broker MQTT ?", r: "Recevoir les messages publiés et les redistribuer aux abonnés." },
        { q: "Format JSON ?", r: "Du texte lisible fait de paires nom-valeur entre accolades." },
        { q: "1 ko en octets ?", r: "1 024 octets (souvent arrondi à 1 000)." },
        { q: "Qu'est-ce qu'une API ?", r: "Les adresses et fonctions qu'un serveur met à disposition des programmes." },
        { q: "Horodatage ?", r: "Enregistrer la date et l'heure de chaque mesure." },
        { q: "Vérifier le temps réel d'un affichage ?", r: "Additionner mesure, transmission, traitement et affichage, et comparer à l'échéance." },
      ],
      quiz: [
        { q: "Pour lire la dernière mesure sur un serveur web, une application envoie une requête :", choix: ["POST", "GET", "DHCP", "ARP"], bonne: 1, expl: "POST sert à envoyer des données.", niv: 1 },
        { q: "Le serveur répond 404. Cela signifie :", choix: ["accès autorisé", "tout va bien", "erreur du serveur", "ressource introuvable"], bonne: 3, expl: "200 = succès, 500 = erreur du serveur.", niv: 2 },
        { q: "Dans MQTT, le serveur central qui redistribue les messages s'appelle :", choix: ["le broker", "le topic", "l'abonné", "la passerelle radio"], bonne: 0, expl: "Le topic est le sujet du message.", niv: 2 },
        { q: "Dans une page web, la mise en forme (couleurs, tailles) est écrite en :", choix: ["JSON", "HTML", "CSS", "SQL"], bonne: 2, expl: "HTML donne le contenu, JavaScript les actions.", niv: 1 },
        { q: "3 mesures de 2 octets chaque seconde. Taille par heure ?", choix: ["3 600 octets", "6 octets", "360 octets", "21 600 octets"], bonne: 3, expl: "6 octets × 3 600 s = 21 600 octets.", niv: 2 },
        { q: "Mesure 50 ms, envoi 300 ms, traitement 100 ms, page rafraîchie toutes les 2 s. Échéance 1 s respectée ?", choix: ["Oui : 50 + 300 + 100 = 450 ms", "Non : le rafraîchissement peut ajouter jusqu'à 2 s", "Oui : l'envoi dure moins d'une seconde", "Non : la mesure de 50 ms est trop lente pour une échéance d'une seconde"], bonne: 1, expl: "Dans le pire cas, la donnée attend 2 s le prochain rafraîchissement.", niv: 3 },
        { q: "Le message {\"capteur\": \"T1\", \"temp\": 21.5} est écrit au format :", choix: ["binaire", "CSV", "JSON", "HTML"], bonne: 2, expl: "Des paires nom-valeur entre accolades.", niv: 1 },
        { q: "Un capteur dépose une nouvelle mesure sur un serveur web. Il envoie une requête :", choix: ["POST", "GET", "DNS", "404"], bonne: 0, expl: "POST envoie des données au serveur.", niv: 2 },
        { q: "Un enregistrement fait 512 octets ; on en garde 4 096. Taille du fichier ?", choix: ["4 Mo", "512 ko", "2 Mo", "1 Mo"], bonne: 2, expl: "512 × 4 096 = 2 097 152 octets = 2 048 ko = 2 Mo.", niv: 3 },
        { q: "Dans MQTT, l'objet qui publie une mesure :", choix: ["n'a pas besoin de connaître les abonnés", "envoie le message à chaque abonné un par un", "doit être un nano-ordinateur", "attend une requête GET"], bonne: 0, expl: "C'est le broker qui distribue le message.", niv: 2 },
        { q: "1 ko correspond à :", choix: ["100 octets", "1 000 bits", "8 octets", "1 024 octets"], bonne: 3, expl: "On arrondit souvent à 1 000 octets.", niv: 1 },
        { q: "Pourquoi envoyer une mesure en binaire plutôt qu'en JSON sur une radio LoRa ?", choix: ["Le JSON est interdit par la radio", "Le message est bien plus court", "Le binaire est chiffré", "Le JSON ne contient pas de nombres"], bonne: 1, expl: "LoRa a un débit très faible : chaque octet compte.", niv: 3 },
      ] },
    { chapitre: 'sti2d-sin-10',
      fiche: `## Cybersécurité et fiabilité

Un système connecté doit rester sûr : ses données ne doivent pas être lues ou modifiées par n'importe qui, et il doit continuer à fonctionner malgré une panne ou une attaque. Le sujet demande souvent de repérer une faille et de proposer une protection.

### Les trois objectifs
- **Confidentialité** : seules les personnes autorisées lisent les données.
- **Intégrité** : les données ne sont pas modifiées en chemin.
- **Disponibilité** : le service fonctionne quand on en a besoin.
- On ajoute souvent la **traçabilité** : savoir qui a fait quoi (journaux).

### Les menaces courantes
- **Mots de passe** par défaut ou trop faibles, jamais changés après l'installation.
- **Interception** des échanges non chiffrés (wifi ouvert, HTTP simple).
- **Hameçonnage** : un faux message pousse l'utilisateur à donner ses identifiants.
- **Logiciel malveillant** (rançongiciel qui chiffre les fichiers et réclame une rançon).
- **Déni de service** : saturer un serveur de requêtes pour le rendre indisponible.
- Failles non corrigées d'un logiciel ou d'un objet qui n'est jamais mis à jour.

### Les protections
- **Authentification** : identifiant et mot de passe robuste, ou mieux, **double authentification** (mot de passe plus code reçu sur le téléphone).
- **Chiffrement** : HTTPS (TLS) pour le web, MQTT chiffré (port 8883), wifi WPA2 ou WPA3. Une donnée interceptée reste illisible.
- **Chiffrement symétrique** : une même clé chiffre et déchiffre (rapide). **Asymétrique** : une clé publique pour chiffrer, une clé privée pour déchiffrer (pour échanger une clé en sécurité).
- **Pare-feu** : il filtre les échanges selon les adresses et les ports ; on n'ouvre que les ports utiles.
- **VPN** : un tunnel chiffré pour accéder à distance à un réseau.
- **Mises à jour** régulières, **sauvegardes** (sur un autre support, hors ligne), **droits limités** (chacun n'accède qu'à ce dont il a besoin), séparation du réseau des objets et du réseau de bureau.

### La fiabilité
- **Redondance** : doubler un élément critique (deux serveurs, deux alimentations, deux liaisons) pour qu'une panne ne coupe pas le service.
- **Chien de garde** (watchdog) : une minuterie qui redémarre la carte si le programme se bloque.
- **Mode dégradé** : en cas de perte de liaison, l'objet continue en local et stocke ses mesures pour les envoyer plus tard.
- **Contrôle d'erreurs** des trames (CRC) et accusés de réception.
- Disponibilité en pourcentage : 99,9 % de disponibilité laisse environ 8,8 h d'arrêt par an (0,001 × 8 760 h).

### Les données personnelles
- Le **RGPD** encadre les données personnelles en Europe : informer les personnes, ne collecter que le nécessaire, protéger les données, les garder une durée limitée, permettre leur suppression.
- Un compteur ou une caméra connectés peuvent révéler les habitudes d'une famille : ces données sont personnelles.

### À retenir pour le bac
- Confidentialité, intégrité, disponibilité.
- Authentification forte, chiffrement (HTTPS, WPA2), pare-feu, mises à jour, sauvegardes.
- Redondance, chien de garde, mode dégradé pour la fiabilité.
- RGPD : collecter le nécessaire, protéger, limiter la durée.
- Piège : une solution doit être précise (quel élément protéger, contre quoi), pas seulement « sécuriser ».`,
      cartes: [
        { q: "Confidentialité ?", r: "Seules les personnes autorisées peuvent lire les données." },
        { q: "Intégrité ?", r: "Les données ne sont pas modifiées pendant leur transmission ou leur stockage." },
        { q: "Disponibilité ?", r: "Le service fonctionne quand on en a besoin." },
        { q: "Double authentification ?", r: "Un mot de passe plus une seconde preuve, comme un code reçu sur le téléphone." },
        { q: "Rôle du chiffrement ?", r: "Rendre une donnée interceptée illisible sans la clé." },
        { q: "Chiffrement symétrique ?", r: "La même clé chiffre et déchiffre." },
        { q: "Chiffrement asymétrique ?", r: "Une clé publique chiffre, seule la clé privée déchiffre." },
        { q: "Rôle d'un pare-feu ?", r: "Filtrer les échanges selon les adresses et les ports." },
        { q: "Rôle d'un VPN ?", r: "Créer un tunnel chiffré pour accéder à un réseau à distance." },
        { q: "Redondance ?", r: "Doubler un élément critique pour qu'une panne ne coupe pas le service." },
        { q: "Chien de garde (watchdog) ?", r: "Une minuterie qui redémarre la carte si le programme se bloque." },
        { q: "Déni de service ?", r: "Saturer un serveur de requêtes pour le rendre indisponible." },
        { q: "Principes du RGPD ?", r: "Informer, collecter le nécessaire, protéger, durée limitée, droit à la suppression." },
      ],
      quiz: [
        { q: "Un pirate lit les mesures envoyées en clair sur un wifi ouvert. Quel objectif est touché ?", choix: ["la confidentialité", "la disponibilité", "la redondance", "la traçabilité"], bonne: 0, expl: "Des personnes non autorisées lisent les données.", niv: 1 },
        { q: "Un serveur saturé de requêtes ne répond plus. Quel objectif est touché ?", choix: ["l'intégrité", "la confidentialité", "la disponibilité", "l'authentification"], bonne: 2, expl: "C'est une attaque par déni de service.", niv: 2 },
        { q: "Pour qu'un mot de passe volé ne suffise pas à se connecter, on met en place :", choix: ["un code Gray", "un réseau plus rapide", "le changement de l'écran par un modèle plus grand", "la double authentification"], bonne: 3, expl: "Il faut en plus le code reçu sur le téléphone.", niv: 2 },
        { q: "Un pare-feu sert à :", choix: ["chiffrer le disque dur", "filtrer les échanges selon adresses et ports", "augmenter le débit", "remplacer le routeur"], bonne: 1, expl: "On n'ouvre que les ports nécessaires.", niv: 1 },
        { q: "Une carte se bloque parfois et ne répond plus. Quelle solution la fait redémarrer seule ?", choix: ["Un VPN", "Un pare-feu", "Un chien de garde", "Une adresse IP fixe"], bonne: 2, expl: "Le programme doit relancer la minuterie ; sinon elle redémarre la carte.", niv: 2 },
        { q: "Disponibilité de 99,9 % sur un an (8 760 h). Durée d'arrêt possible, environ ?", choix: ["1 h", "0,9 h", "87,6 h", "8,8 h"], bonne: 3, expl: "0,1 % de 8 760 h = 8,76 h.", niv: 3 },
        { q: "Pour consulter le site de supervision d'une usine sans que les échanges soient lisibles, on utilise :", choix: ["HTTPS", "HTTP", "FTP sans mot de passe", "un wifi ouvert"], bonne: 0, expl: "HTTPS chiffre les échanges avec TLS.", niv: 1 },
        { q: "Dans le chiffrement asymétrique :", choix: ["une seule clé sert à tout", "la clé publique chiffre, la clé privée déchiffre", "il n'y a pas de clé", "la clé privée est publiée et la clé publique reste secrète"], bonne: 1, expl: "On peut donner la clé publique à tout le monde.", niv: 2 },
        { q: "Un objet perd sa liaison radio. Quel fonctionnement évite de perdre les mesures ?", choix: ["Un arrêt complet jusqu'au retour du réseau", "Un mode dégradé qui les stocke pour les envoyer plus tard", "Un renvoi en boucle de la même mesure", "Une remise à zéro des données à chaque perte de liaison pour repartir proprement"], bonne: 1, expl: "L'objet continue en local et rattrape l'envoi.", niv: 3 },
        { q: "Doubler le serveur d'une supervision pour qu'une panne ne coupe pas le service, c'est :", choix: ["la redondance", "le chiffrement", "l'authentification", "l'encapsulation"], bonne: 0, expl: "Le second serveur prend le relais.", niv: 2 },
        { q: "Après l'installation d'une caméra connectée, la première mesure de sécurité est de :", choix: ["désactiver les mises à jour", "augmenter la luminosité", "ouvrir les ports du routeur vers internet pour un accès plus simple", "changer le mot de passe par défaut"], bonne: 3, expl: "Les mots de passe par défaut sont connus des pirates.", niv: 1 },
        { q: "Un compteur connecté envoie la consommation d'un foyer toutes les 10 min. Que demande le RGPD ?", choix: ["Garder les données sans limite de durée", "Publier les données en accès libre pour que les voisins comparent leur consommation", "Informer, limiter la collecte et protéger les données", "Rien : ce ne sont pas des données personnelles"], bonne: 2, expl: "La courbe révèle les habitudes du foyer : ce sont des données personnelles.", niv: 3 },
      ] },
  ],

  methode: [
    { id: 'sti2d-sin-m1', mat: 'sti2d-sin', titre: "Choisir un codeur et vérifier sa résolution",
      formules: ["Choisir, en justifiant, le codeur à utiliser pour connaître à tout moment la position", "Calculer le nombre de positions mesurables pour un tour de codeur", "Calculer le plus petit angle mesurable sur le déplacement de l'objet", "Conclure sur le système d'acquisition au vu des exigences"],
      vu: ["Métropole 2025, sujet sur une ferme éolienne, partie spécifique SIN : questions A.3 à A.6 (codeur de la nacelle)", "Fréquent dès qu'un sujet SIN mesure une position ou un angle"], pts: "1,5 à 2,5 points",
      attendu: "Le choix d'un codeur absolu (et multitour si l'objet fait plusieurs tours) justifié par la position connue dès la mise sous tension, le calcul 2^n, la résolution 360° / 2^n divisée par le rapport d'engrenage, puis une conclusion qui compare au cahier des charges.",
      etapes: ["Relever ce que le cahier des charges exige : position connue à tout moment, nombre de tours, précision", "Éliminer les codeurs incrémentaux (position perdue à la coupure) et les monotours si l'objet fait plusieurs tours", "Calculer 2^n positions par tour", "Calculer 360° / 2^n, puis diviser par le rapport qui multiplie les tours du codeur", "Comparer à la précision demandée et conclure en une phrase"],
      mots: ["codeur absolu", "multitour", "code Gray", "résolution", "rapport de réduction", "précision exigée"],
      pieges: ["Choisir un codeur incrémental alors que la position doit être connue après une coupure", "Oublier le rapport d'engrenage", "Multiplier au lieu de diviser par le rapport", "Ne pas conclure sur l'exigence"],
      cas: "Un radiotélescope fictif tourne sur lui-même jusqu'à 2 tours dans chaque sens. Un codeur, entraîné par un engrenage qui multiplie par 8 les tours de l'antenne, doit donner la position à tout moment, même après une coupure. Exigence : précision de 1°. Le codeur retenu code 10 bits par tour.",
      question: "Choisir le type de codeur, calculer la résolution sur l'antenne et conclure sur l'exigence.",
      modele: `Type de codeur : il faut connaître la position dès la mise sous tension, donc un codeur absolu. Le codeur fait jusqu'à 2 × 8 = 16 tours dans chaque sens : il doit être multitour.

Positions par tour : 2^10 = 1 024.

Résolution du codeur : 360 / 1 024 ≈ 0,35°. Comme le codeur fait 8 tours quand l'antenne en fait un, la résolution sur l'antenne est 0,35 / 8 ≈ 0,044°.

Conclusion : 0,044° est bien plus fin que le 1° exigé : le codeur convient.`,
      grille: ["Le codeur absolu multitour est choisi et justifié", "Le nombre de positions 2^10 est juste", "La résolution tient compte du rapport d'engrenage", "La conclusion compare à l'exigence"] },

    { id: 'sti2d-sin-m2', mat: 'sti2d-sin', titre: "Convertir un code Gray et vérifier une fonction",
      formules: ["Compléter le logigramme de conversion Gray binaire en indiquant la valeur de chaque bit", "Compléter la deuxième partie du logigramme à l'aide de la table du OU exclusif", "Compléter les parties manquantes du code de la fonction de conversion", "Calculer la valeur binaire correspondant à l'angle affiché et conclure sur le fonctionnement de la fonction"],
      vu: ["Métropole 2025, sujet sur une ferme éolienne, partie spécifique SIN : questions B.1 à B.4 (trame du codeur en code Gray)"], pts: "2 à 3 points",
      attendu: "La règle de conversion (recopier le bit de poids fort, puis chaque bit binaire = bit binaire précédent XOR bit Gray), une conversion juste bit par bit, une fonction cohérente avec l'algorigramme, puis une vérification avec le facteur d'échelle (valeur affichée × 10) écrite en binaire.",
      etapes: ["Repérer dans la trame les bits utiles et leur ordre (poids fort en premier)", "Recopier le bit de poids fort", "Pour chaque bit suivant, faire bit binaire précédent XOR bit Gray courant", "Convertir le résultat en décimal", "Appliquer le facteur d'échelle et comparer à la valeur affichée"],
      mots: ["code Gray", "binaire naturel", "OU exclusif", "bit de poids fort", "facteur d'échelle", "trame"],
      pieges: ["Commencer par le bit de poids faible", "Faire le XOR avec le bit Gray précédent au lieu du bit binaire précédent", "Oublier de multiplier l'angle par 10 avant de le convertir", "Mélanger les 12 bits de position et les 12 bits de tours"],
      cas: "Un bras de grue fictif envoie sa position sur 12 bits en code Gray, poids fort en premier : 1101 0101 0101. L'écran affiche 245,7°, et l'angle vaut 1/10 de la valeur renvoyée par la fonction de conversion.",
      question: "Convertir ce code Gray en binaire puis en décimal, et vérifier l'affichage.",
      modele: `Conversion, en partant du poids fort : b11 = 1 ; puis chaque bit binaire = bit binaire précédent XOR bit Gray.
Gray : 1 1 0 1 0 1 0 1 0 1 0 1
Binaire : 1 0 0 1 1 0 0 1 1 0 0 1, soit 1001 1001 1001.

En décimal : 2 048 + 256 + 128 + 16 + 8 + 1 = 2 457.

Vérification : 245,7 × 10 = 2 457, qui s'écrit 1001 1001 1001 en binaire. La valeur trouvée est la même : la fonction de conversion fonctionne.`,
      grille: ["La conversion part du bit de poids fort", "Chaque bit est obtenu par XOR avec le bit binaire précédent", "La valeur décimale est juste", "La vérification utilise le facteur 10 et conclut"] },

    { id: 'sti2d-sin-m3', mat: 'sti2d-sin', titre: "Exploiter une entrée analogique et décider d'une action",
      formules: ["Calculer le quantum de ce convertisseur", "Calculer pour N la valeur de la tension en entrée du convertisseur et en déduire la grandeur mesurée", "Indiquer si le système doit agir et conclure"],
      vu: ["Métropole 2025, sujet sur une ferme éolienne, partie spécifique SIN : questions C.3 à C.5 (girouette sur l'entrée analogique, nacelle alignée ou non)", "Le calcul du quantum et de la tension à partir de N revient très souvent"], pts: "1,5 à 2 points",
      attendu: "Le quantum q = plage / 2^n avec l'unité, la tension U = N × q, la grandeur tirée de la caractéristique du capteur, puis une comparaison chiffrée avec le seuil qui mène à une décision.",
      etapes: ["Relever la plage de tension et le nombre de bits du convertisseur", "Calculer q = plage / 2^n", "Calculer U = N × q", "Utiliser la caractéristique du capteur pour passer de la tension à la grandeur", "Comparer à la consigne et au seuil, puis conclure"],
      mots: ["convertisseur analogique-numérique", "quantum", "résolution", "caractéristique du capteur", "écart", "seuil"],
      pieges: ["Diviser par 2^n - 1 dans un calcul et par 2^n dans l'autre", "Oublier l'unité du quantum (mV)", "Comparer des angles sans calculer l'écart", "Ne pas dire si l'action est déclenchée"],
      cas: "Un panneau solaire fictif suit le soleil. Un capteur d'orientation fournit 0 à 5 V pour 0 à 360°. Il est lu par un convertisseur 12 bits de plage 0 à 5 V, qui donne N = 1 024. Le panneau est orienté à 97°. Il tourne si l'écart avec le soleil dépasse 6°.",
      question: "Calculer le quantum, la tension, l'orientation du soleil, puis dire si le panneau doit tourner.",
      modele: `Quantum : q = 5 / 2^12 = 5 / 4 096 ≈ 1,22 mV.

Tension : U = N × q = 1 024 × 5 / 4 096 = 1,25 V.

Orientation : 1,25 / 5 × 360 = 90°.

Écart : 97 - 90 = 7°, plus que 6° : le panneau doit tourner de 7° vers les angles plus petits pour se remettre face au soleil.`,
      grille: ["Le quantum est juste, avec son unité", "La tension est juste", "L'orientation est tirée de la caractéristique", "L'écart est calculé et la décision est justifiée"] },

    { id: 'sti2d-sin-m4', mat: 'sti2d-sin', titre: "Vérifier qu'une supervision fonctionne en temps réel",
      formules: ["Calculer la taille du fichier de stockage de l'ensemble des paramètres, en kilo-octets (1 ko = 1 024 octets)", "Déterminer le temps de transfert pour cette machine", "Calculer le nombre d'appareils qu'il est possible de superviser avec un rafraîchissement chaque seconde", "Conclure sur la possibilité d'une supervision en temps réel"],
      vu: ["Métropole 2025, sujet sur une ferme éolienne, partie spécifique SIN : questions D.1 à D.3 (300 paramètres par éolienne, trames limitées, rafraîchissement chaque seconde)"], pts: "2 à 3 points",
      attendu: "La taille = nombre de paramètres × taille d'un paramètre, convertie en ko avec 1 024, le nombre de trames, le temps de transfert lu ou calculé, le nombre d'appareils = 1 s / temps par appareil, puis une conclusion qui compare au nombre réel d'appareils.",
      etapes: ["Additionner les octets d'un paramètre (identifiant, date, valeur, contrôle)", "Multiplier par le nombre de paramètres, puis diviser par 1 024", "Diviser par la taille utile d'une trame pour trouver le nombre de trames", "Calculer ou relever la durée du dialogue pour un appareil", "Diviser 1 s par cette durée et comparer au nombre d'appareils du projet"],
      mots: ["taille du fichier", "trame", "débit", "temps de transfert", "rafraîchissement", "temps réel"],
      pieges: ["Diviser par 1 000 alors que l'énoncé impose 1 024", "Oublier que le fichier tient sur plusieurs trames", "Confondre octets et bits dans le calcul du temps", "Conclure sans comparer au nombre d'appareils du projet"],
      cas: "Une supervision fictive de 60 pompes doit se rafraîchir chaque seconde. Chaque pompe a 200 paramètres de 16 octets chacun. Une trame porte au plus 1 500 octets de données. Le relevé du réseau montre que le dialogue complet pour une pompe dure 2 ms.",
      question: "Calculer la taille du fichier d'une pompe, le nombre de trames, le nombre de pompes supervisables et conclure.",
      modele: `Taille du fichier : 200 × 16 = 3 200 octets, soit 3 200 / 1 024 = 3,125 ko.

Trames : 3 200 / 1 500 ≈ 2,13 : il faut 3 trames.

Pompes supervisables : 1 s / 2 ms = 1 / 0,002 = 500 pompes par seconde.

Conclusion : 500 est bien plus que les 60 pompes du site : la supervision en temps réel est possible, avec de la marge pour ajouter des pompes.`,
      grille: ["La taille est juste et convertie avec 1 024", "Le nombre de trames est arrondi au-dessus", "Le nombre d'appareils supervisables est juste", "La conclusion compare au nombre réel d'appareils"] },

    { id: 'sti2d-sin-m5', mat: 'sti2d-sin', titre: "Compléter une chaîne d'information et nommer les signaux",
      formules: ["Compléter sur le diagramme de blocs internes les blocs de la chaîne d'information qui répondent aux fonctions Acquérir, Traiter, Communiquer", "Indiquer la nature des signaux présents aux différents points du diagramme"],
      vu: ["Métropole 2025, sujet sur une ferme éolienne, partie spécifique SIN : questions A.1 et A.2 (orientation de la nacelle)", "Question d'entrée très courante, qui rapporte des points faciles"], pts: "1 à 1,5 point",
      attendu: "Chaque composant placé dans la bonne fonction (capteur ou codeur pour acquérir, unité de traitement pour traiter, module de communication ou réseau pour communiquer) et, pour chaque point, la nature exacte du signal parmi les mots proposés.",
      etapes: ["Lire les composants du système et leur rôle", "Placer le capteur dans Acquérir, l'unité de traitement dans Traiter, l'interface réseau dans Communiquer", "Suivre l'information : grandeur physique, puis signal électrique, puis information numérique", "Utiliser exactement les mots de l'énoncé pour nommer chaque signal"],
      mots: ["chaîne d'information", "acquérir", "traiter", "communiquer", "grandeur physique", "tension analogique", "information numérique"],
      pieges: ["Placer l'unité de traitement dans Communiquer", "Appeler « numérique » le signal d'un capteur 0-10 V", "Oublier que l'entrée du capteur est une grandeur physique", "Inventer des mots au lieu de reprendre ceux proposés"],
      cas: "Une station météo fictive : un anémomètre mesure la vitesse du vent et fournit une tension de 0 à 10 V ; une carte à microcontrôleur la convertit et calcule une moyenne ; un module LoRa envoie la valeur à un serveur. Points : 1 entre le vent et l'anémomètre, 2 entre l'anémomètre et la carte, 3 entre la carte et le module LoRa, 4 en sortie du module.",
      question: "Placer chaque composant dans la chaîne d'information et donner la nature du signal aux points 1 à 4.",
      modele: `Acquérir : l'anémomètre. Traiter : la carte à microcontrôleur. Communiquer : le module LoRa.

Point 1 : grandeur physique (la vitesse du vent).
Point 2 : tension analogique (0 à 10 V).
Point 3 : information numérique (la valeur calculée par la carte, envoyée sur une liaison série).
Point 4 : information numérique transmise par onde radio.`,
      grille: ["Les trois fonctions sont bien attribuées", "Les points 1 et 2 sont justes", "Les points 3 et 4 sont justes", "Les mots de l'énoncé sont repris"] },
  ],

  sujets: [
    { id: 'sti2d-sin-s1', matiere: 'sti2d-sin', titre: "Sujet d'entraînement SIN : la serre connectée du Plateau (fictive)", duree: 90,
      enonce: `Sujet d'entraînement inventé pour réviser : la serre, l'exploitation et tous les chiffres sont fictifs. Il a la forme de la partie spécifique SIN de l'écrit (durée indicative environ 1 h 30). Il est noté ici sur 20, dont 2 points pour la maîtrise de la langue.

PRÉSENTATION

Une exploitation maraîchère veut piloter l'arrosage de sa serre à distance. Des capteurs sur pile, répartis dans la serre, mesurent l'humidité du sol et la température. Ils envoient leurs mesures par radio à une passerelle, reliée au réseau de la ferme et à un serveur. Une pompe arrose quand le sol est trop sec. Problématique : comment arroser juste ce qu'il faut, avec des capteurs autonomes et une supervision fiable ?

Extrait du cahier des charges :
- Exigence 1 : l'humidité du sol est connue avec une résolution d'au moins 1 %.
- Exigence 2 : un capteur fonctionne au moins 2 ans sur sa pile.
- Exigence 3 : la serre est à 2 km du bâtiment principal.
- Exigence 4 : les données ne sont accessibles qu'aux personnes autorisées.

PARTIE A — L'acquisition de l'humidité (4 points)

Le capteur d'humidité fournit une tension de 0 à 3 V pour une humidité de 0 à 100 %. Il est lu par le convertisseur 12 bits de la carte, de plage 0 à 3,3 V.
A.1. Calculer la sensibilité du capteur en mV par %, puis le quantum du convertisseur.
A.2. Le convertisseur donne N = 2 482. Calculer la tension, puis l'humidité du sol.
A.3. Calculer la plus petite variation d'humidité détectable. Conclure sur l'exigence 1.
A.4. Un filtre RC est placé entre le capteur et la carte : R = 10 kΩ, C = 1 µF. Calculer sa fréquence de coupure. Expliquer pourquoi un filtre passe-bas convient pour une humidité.

PARTIE B — Le message radio (4 points)

Chaque mesure est envoyée dans un message de 5 octets : température × 10 en entier signé sur 2 octets, humidité × 10 en entier non signé sur 2 octets, niveau de pile en % sur 1 octet. Un message part toutes les 10 minutes.
B.1. La température est de -3,5 °C. Donner l'entier transmis, puis son codage en complément à deux sur 16 bits, en hexadécimal.
B.2. L'humidité est de 66,7 %. Donner l'entier transmis et son écriture en hexadécimal.
B.3. Le même message écrit en JSON, {"t":-3.5,"h":66.7,"b":87}, fait 26 caractères. Expliquer pourquoi on préfère le format binaire sur une radio longue portée.
B.4. Calculer le nombre d'octets de mesure envoyés par jour.

PARTIE C — Le pilotage de la pompe (4 points)

L'arrosage suit trois états : Repos, Arrosage, Défaut. On passe de Repos à Arrosage si l'humidité est inférieure à 40 % et que le réservoir n'est pas vide. On revient de Arrosage à Repos si l'humidité dépasse 60 % ou si l'arrosage dure depuis 20 minutes. Depuis n'importe quel état, on passe à Défaut si le réservoir est vide ; on quitte Défaut vers Repos quand le réservoir est rempli et que l'exploitant a acquitté le défaut.
C.1. Représenter le diagramme d'états (états, transitions, conditions, état initial).
C.2. Expliquer l'intérêt des deux seuils de 40 % et 60 %, et celui de la limite de 20 minutes.
C.3. La carte est en Repos, l'humidité vaut 35 % et le réservoir est plein. Indiquer l'état suivant. Même question si le réservoir est vide.
C.4. La pompe consomme 2 A sous 12 V. Expliquer pourquoi la broche de la carte ne peut pas la commander directement et proposer une solution.

PARTIE D — La communication et la sécurité (6 points)

D.1. Comparer le wifi, le Bluetooth Low Energy et LoRa (portée, débit, consommation). Choisir la technologie des capteurs en citant l'exigence 3.
D.2. En sommeil, un capteur consomme 5 µA. Toutes les 10 minutes, il se réveille 1,5 s et consomme alors 40 mA. Calculer le courant moyen, puis l'autonomie avec une pile de 2 600 mA·h. Conclure sur l'exigence 2.
D.3. La passerelle a l'adresse 192.168.1.50 /24 et le serveur 192.168.1.10 /24. Peuvent-ils communiquer sans routeur ? Combien d'appareils ce réseau peut-il accueillir ?
D.4. La passerelle publie les mesures en MQTT. Expliquer le rôle du broker et du topic, et proposer un nom de topic pour l'humidité du capteur 3.
D.5. Proposer deux mesures précises pour respecter l'exigence 4.

Maîtrise de la langue (2 points) : rédaction, orthographe, vocabulaire technique.`,
      corrige: `PARTIE A

A.1. Sensibilité : 3 V / 100 % = 30 mV par %. Quantum : 3,3 / 2^12 = 3,3 / 4 096 ≈ 0,81 mV.

A.2. Tension : 2 482 × 3,3 / 4 096 ≈ 2,0 V. Humidité : 2,0 / 3 × 100 ≈ 66,7 %.

A.3. Plus petite variation : 0,81 mV / 30 mV par % ≈ 0,027 %. C'est bien plus fin que 1 % : l'exigence 1 est respectée.

A.4. fc = 1 / (2 × π × 10 000 × 0,000001) ≈ 15,9 Hz. L'humidité du sol varie très lentement (en minutes ou en heures) : un passe-bas garde ce signal lent et supprime les parasites rapides, par exemple ceux de la pompe.

PARTIE B

B.1. -3,5 × 10 = -35. Complément à deux sur 16 bits : 65 536 - 35 = 65 501, soit 0xFFDD (1111 1111 1101 1101).

B.2. 66,7 × 10 = 667, soit 0x029B.

B.3. Le binaire tient en 5 octets contre 26 pour le JSON, soit plus de 5 fois moins. Sur une radio longue portée comme LoRa, le débit est très faible : un message plus court dure moins longtemps, consomme moins de pile et occupe moins la radio.

B.4. 24 × 6 = 144 messages par jour ; 144 × 5 = 720 octets de mesure par jour.

PARTIE C

C.1. État initial : Repos. Repos vers Arrosage : humidité < 40 % ET réservoir non vide. Arrosage vers Repos : humidité > 60 % OU durée d'arrosage de 20 min atteinte. Repos ou Arrosage vers Défaut : réservoir vide. Défaut vers Repos : réservoir rempli ET défaut acquitté. Action dans Arrosage : pompe en marche ; dans les autres états : pompe arrêtée ; dans Défaut : alerte envoyée à l'exploitant.

C.2. L'écart entre 40 % et 60 % évite que la pompe démarre et s'arrête sans cesse autour d'un seul seuil. La limite de 20 minutes protège la serre et la réserve d'eau si un capteur tombe en panne et reste bloqué sur une valeur basse.

C.3. Humidité 35 % < 40 % et réservoir plein : on passe en Arrosage. Si le réservoir est vide : on passe en Défaut, la pompe ne doit pas tourner à sec.

C.4. Une broche de carte ne fournit que quelques milliampères sous 3,3 ou 5 V, très loin de 2 A sous 12 V. On commande un transistor ou un relais (avec une diode de roue libre) alimenté en 12 V : la broche ne fournit que le petit courant de commande.

PARTIE D

D.1. Wifi : débit élevé, portée de quelques dizaines de mètres, consommation importante. BLE : faible consommation, portée de 10 à 50 m. LoRa : portée de plusieurs kilomètres, très faible consommation, débit très faible. Les capteurs envoient 5 octets toutes les 10 minutes à 2 km : LoRa convient (exigence 3), le wifi et le BLE ne portent pas assez loin.

D.2. Courant pendant le réveil, ramené à la moyenne : 40 × 1,5 / 600 = 0,1 mA. Courant moyen : 0,1 + 0,005 = 0,105 mA. Autonomie : 2 600 / 0,105 ≈ 24 800 h, soit 24 800 / 8 760 ≈ 2,8 ans. C'est plus que 2 ans : l'exigence 2 est respectée.

D.3. Avec /24, les deux adresses ont le même réseau 192.168.1.0 : ils communiquent sans routeur. Le réseau peut accueillir 2^8 - 2 = 254 appareils.

D.4. Le broker est le serveur central : il reçoit les messages publiés et les transmet à tous les abonnés. Le topic est le sujet du message, qui permet de trier les données. Exemple : serre/capteur3/humidite. La supervision s'abonne à serre/+/humidite pour recevoir tous les capteurs.

D.5. Exemples : un mot de passe robuste et différent pour chaque compte, avec double authentification sur la supervision ; un chiffrement des échanges (MQTT sur le port 8883 avec TLS, HTTPS pour la page web) ; un pare-feu qui n'ouvre vers internet que le port nécessaire ; des comptes avec des droits limités.

Conclusion : les capteurs LoRa sur pile tiennent près de 3 ans, mesurent l'humidité assez finement, et la machine à états arrose sans gaspiller ; la sécurité des comptes et le chiffrement protègent l'accès aux données.`,
      grille: [
        { c: "Partie A : sensibilité, quantum, tension et humidité, résolution, filtre", pts: 4 },
        { c: "Partie B : complément à deux et hexadécimal, intérêt du binaire, octets par jour", pts: 4 },
        { c: "Partie C : diagramme d'états, intérêt des seuils, état suivant, commande de la pompe", pts: 4 },
        { c: "Partie D : choix de LoRa, autonomie, adressage, MQTT, deux mesures de sécurité", pts: 6 },
        { c: "Maîtrise de la langue : rédaction, orthographe, vocabulaire", pts: 2 },
      ] },
  ],
};
