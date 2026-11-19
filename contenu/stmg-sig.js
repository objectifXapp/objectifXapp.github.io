// Systèmes d'information de gestion (enseignement spécifique de management, sciences de gestion et numérique) — terminale STMG. Sources : voir matiere.sources.
// Programme : arrêté du 19 juillet 2019 (BO spécial n° 8 du 25 juillet 2019, annexe 2), partie « Enseignement spécifique de systèmes d'information de gestion » : 4 thèmes, 8 questions. Un chapitre par question.
// Épreuve : la note de service du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026) dit que l'écrit de management, sciences de gestion et numérique porte sur la partie enseignement commun.
// L'enseignement spécifique n'a donc pas d'écrit à lui : il sert de support au projet présenté au grand oral.
// Le code est écrit en SQL standard et en Python, le langage le plus utilisé en classe ; le programme ne l'impose pas.
export default {
  matiere: {
    id: 'stmg-sig',
    nom: 'Systèmes d\'information de gestion',
    voie: 'stmg',
    epreuve: { type: 'oral', duree: 20, coef: 14, quand: 'juin', note: 'Pas d\'écrit propre : l\'écrit de management (4 h, coefficient 16) porte sur l\'enseignement commun. L\'enseignement spécifique sert au grand oral : 20 minutes sur une question préparée à partir du projet mené en classe, puis un échange avec le jury. Coefficient du grand oral à vérifier pour la session 2027.' },
    sources: [
      'https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/14/1/spe262_annexe2_1159141.pdf',
      'https://www.education.gouv.fr/bo/19/Special8/MENE1921262A.htm',
      'https://www.education.gouv.fr/bo/2026/Special4/MENE2622652N',
      'https://eduscol.education.gouv.fr/5862/programmes-et-ressources-en-serie-stmg',
      'https://www.cnil.fr (RGPD, droits des personnes, sécurité des données)',
      'https://cyber.gouv.fr (ANSSI, guide d\'hygiène informatique) et https://www.cybermalveillance.gouv.fr',
    ],
    chapitres: [
      { id: 'stmg-sig-1', t: 'Comment l\'organisation se structure-t-elle pour gérer l\'information ?', theme: 'Organisation et numérisation' },
      { id: 'stmg-sig-2', t: 'Les évolutions numériques sont-elles exemptes de risques ?', theme: 'Organisation et numérisation' },
      { id: 'stmg-sig-3', t: 'Comment la fonction SI accompagne-t-elle les choix de l\'organisation ?', theme: 'Management du SI et performance' },
      { id: 'stmg-sig-4', t: 'En quoi un projet de système d\'information est-il une réponse au besoin d\'évolution de l\'organisation ?', theme: 'Management du SI et performance' },
      { id: 'stmg-sig-5', t: 'Comment peut-on produire de l\'information à partir de données ?', theme: 'Information, action et décision' },
      { id: 'stmg-sig-6', t: 'La résolution de tous les problèmes de gestion est-elle automatisable ?', theme: 'Information, action et décision' },
      { id: 'stmg-sig-7', t: 'La standardisation favorise-t-elle la circulation des informations ?', theme: 'SI et échange' },
      { id: 'stmg-sig-8', t: 'Comment les technologies réseaux répondent-elles aux besoins de collaboration ?', theme: 'SI et échange' },
    ],
  },
  paquets: [
    {
      chapitre: 'stmg-sig-1',
      fiche: `## Comment l'organisation se structure-t-elle pour gérer l'information ?

### Le système d'information
- Le **système d'information (SI)** est l'ensemble organisé des ressources qui permettent d'**acquérir**, de **traiter**, de **stocker** et de **diffuser** l'information utile à l'organisation. Ce sont ses quatre **fonctions**.
- Ses **ressources** : des **acteurs** (salariés, clients, partenaires), des **données**, des **matériels**, des **logiciels**, des **procédures** et des pratiques de travail.
- Trois **dimensions** : **informationnelle** (quelles données, pour qui), **technologique** (le système informatique) et **organisationnelle** (qui fait quoi, avec quelles règles).
- Deux types d'**objectifs** : **opérationnels** (faire tourner l'activité au quotidien : facturer, livrer, payer) et **stratégiques** (aider à décider et à anticiper).
- Trois **niveaux** : **organisationnel** (à l'intérieur de l'entreprise), **inter-organisationnel** (avec ses partenaires : fournisseurs, banques) et **extra-organisationnel** (avec le public, les clients, l'administration).
- Chaque organisation **façonne** son SI selon son métier, sa stratégie et ses moyens : il n'y a pas deux SI identiques.

### Une brève histoire
- D'abord le papier : registres, fiches, classeurs. Puis les premiers ordinateurs pour la paie et la comptabilité, puis l'ordinateur personnel, les réseaux, internet, le mobile et le **nuage**.
- Chaque étape a changé les métiers et la façon de travailler ensemble : moins de saisie, plus d'analyse, du travail à distance.

### Les SI fonctionnels
- Chaque grande fonction a son SI : **commercial et marketing** (gestion de la relation client, analyse des achats), **production** (stocks, ordres de fabrication), **comptable et financier** (factures, résultats), **ressources humaines** (paie, compétences, gestion prévisionnelle des emplois).
- Le numérique leur apporte de la **rapidité**, de la **fiabilité** et la possibilité d'**anticiper** (prévoir les ventes, repérer un client qui risque de partir).

### Une gestion centralisée des données
- Le **progiciel de gestion intégré (PGI)**, ou ERP, réunit les modules de toutes les fonctions autour d'une **base de données unique** : une donnée saisie une fois est disponible pour tous.
- Avantages : pas de double saisie, données **cohérentes** et **à jour**, meilleure coordination entre services.
- Limites : coût élevé, projet long, dépendance à l'éditeur, formation des utilisateurs.
- À côté, les **applications métier** répondent à un besoin précis (logiciel de caisse, de planning).

### La qualité des données
- Une donnée de qualité est **exacte**, **complète**, **à jour**, **cohérente** (la même partout), **pertinente** et **accessible** à ceux qui en ont besoin.
- La qualité se joue surtout à la **saisie** : contrôles de format, listes de choix, champs obligatoires, détection des doublons.
- Une donnée fausse se propage dans tout le SI : erreur de livraison, facture fausse, mauvaise décision.

### Processus et modélisation
- Un **processus** est un ensemble d'**activités** coordonnées qui transforment des entrées en un résultat utile à un client interne ou externe (traiter une commande, recruter).
- On le décrit avec ses **acteurs** (qui agit), ses **activités** et **tâches** (ce qu'on fait), ses **événements** déclencheurs et sa **synchronisation** (dans quel ordre, ce qui attend quoi).
- Le **schéma de processus** sert à **communiquer** (tout le monde comprend le circuit) et à **diagnostiquer** (repérer une attente, une tâche inutile, une double saisie).

### Le système informatique
- C'est la partie technique du SI : **matériels** (postes, serveurs, imprimantes), **logiciels** (systèmes d'exploitation, PGI, applications) et **infrastructure de communication** (réseau, accès internet).
- Ses choix sont **stratégiques** : il doit permettre aux processus de bien fonctionner et satisfaire les utilisateurs.

### Transformation organisationnelle
- Le SI accompagne les changements de l'organisation (vente en ligne, télétravail) et en est de plus en plus **à l'origine** : il change les métiers, la chaîne de valeur, la coordination entre acteurs.
- Il peut devenir une **source de valeur** et un **avantage concurrentiel** quand il est difficile à copier.

### À retenir pour le bac
- SI : acquérir, traiter, stocker, diffuser ; ressources, dimensions, objectifs, niveaux.
- Le PGI centralise les données dans une base unique : cohérence, mais coût et dépendance.
- Qualité des données : exacte, complète, à jour, cohérente ; elle se joue à la saisie.
- Un processus se décrit par ses acteurs, activités, événements et synchronisation.
- Le SI est façonné par l'organisation et la transforme en retour.`,
      cartes: [
        { q: "Qu'est-ce qu'un système d'information ?", r: "L'ensemble organisé des ressources (acteurs, données, matériels, logiciels, procédures) qui permettent d'acquérir, traiter, stocker et diffuser l'information." },
        { q: "Quelles sont les quatre fonctions du SI ?", r: "Acquisition, traitement, stockage et diffusion de l'information." },
        { q: "Quelles sont les trois dimensions du SI ?", r: "Informationnelle (les données), technologique (le système informatique) et organisationnelle (les acteurs, les règles, les procédures)." },
        { q: "Quels sont les trois niveaux d'un SI ?", r: "Organisationnel (interne), inter-organisationnel (avec les partenaires) et extra-organisationnel (avec le public, les clients, l'administration)." },
        { q: "Objectif opérationnel ou stratégique ?", r: "Opérationnel : faire fonctionner l'activité au quotidien (facturer, livrer). Stratégique : aider à décider et à anticiper." },
        { q: "Qu'est-ce qu'un SI fonctionnel ?", r: "Le SI d'une fonction de l'organisation : commercial et marketing, production, comptable et financier, ressources humaines." },
        { q: "Qu'est-ce qu'un PGI ?", r: "Un progiciel de gestion intégré (ERP) : des modules pour toutes les fonctions, reliés à une base de données unique." },
        { q: "Avantages et limites d'un PGI ?", r: "Avantages : saisie unique, données cohérentes et à jour, coordination. Limites : coût, projet long, dépendance à l'éditeur, formation." },
        { q: "Qu'est-ce qu'une application métier ?", r: "Un logiciel qui répond au besoin précis d'un métier : caisse, planning, gestion d'un cabinet." },
        { q: "Quels sont les critères de qualité d'une donnée ?", r: "Exacte, complète, à jour, cohérente, pertinente et accessible." },
        { q: "Comment améliorer la qualité des données à la saisie ?", r: "Contrôles de format, listes de choix, champs obligatoires, détection des doublons." },
        { q: "Qu'est-ce qu'un processus ?", r: "Un ensemble d'activités coordonnées qui transforment des entrées en un résultat utile à un client interne ou externe." },
        { q: "Avec quoi décrit-on un processus ?", r: "Ses acteurs, ses activités et tâches, ses événements déclencheurs et sa synchronisation." },
        { q: "À quoi sert un schéma de processus ?", r: "À communiquer (tout le monde voit le circuit) et à diagnostiquer (attentes, tâches inutiles, doubles saisies)." },
        { q: "Que contient le système informatique ?", r: "Les matériels, les logiciels et l'infrastructure de communication (réseau)." },
      ],
      quiz: [
        { q: "Les quatre fonctions du système d'information sont :", choix: ["saisir, imprimer, classer, jeter", "acheter, produire, vendre, livrer", "acquérir, traiter, stocker, diffuser", "planifier, organiser, diriger, contrôler"], bonne: 2, expl: "Le SI acquiert, traite, stocke et diffuse l'information ; les autres listes sont des activités de gestion.", niv: 1 },
        { q: "Un PGI se caractérise surtout par :", choix: ["un stockage dans une base de données unique, commune à tous les modules", "un logiciel par service, sans lien entre eux", "un tableur partagé par mail", "un site internet qui présente les produits et les prix aux clients de l'entreprise"], bonne: 0, expl: "Le progiciel de gestion intégré relie ses modules à une base unique : une donnée saisie une fois sert à tous.", niv: 1 },
        { q: "Le logiciel de caisse d'une boulangerie est :", choix: ["un PGI", "un système d'exploitation", "une infrastructure réseau", "une application métier"], bonne: 3, expl: "Il répond au besoin précis d'un métier : c'est une application métier.", niv: 1 },
        { q: "Un échange de commandes automatisé avec un fournisseur relève du niveau :", choix: ["inter-organisationnel", "organisationnel", "extra-organisationnel", "individuel"], bonne: 0, expl: "Le SI dépasse alors l'entreprise et la relie à un partenaire : niveau inter-organisationnel.", niv: 2 },
        { q: "Une adresse client saisie deux fois, avec deux orthographes, pose un problème de :", choix: ["cohérence des données", "confidentialité", "débit du réseau", "durée de stockage"], bonne: 0, expl: "La même donnée a deux valeurs différentes : elle n'est plus cohérente.", niv: 1 },
        { q: "Quel critère n'est **pas** un critère de qualité d'une donnée ?", choix: ["L'exactitude", "Le volume en mégaoctets", "La mise à jour", "La complétude"], bonne: 1, expl: "La taille d'une donnée ne dit rien de sa qualité ; exactitude, mise à jour et complétude en sont des critères.", niv: 2 },
        { q: "Rendre le champ « code postal » obligatoire et limité à 5 chiffres sert à :", choix: ["accélérer le réseau", "protéger le serveur des virus qui arrivent par la messagerie", "améliorer la qualité des données dès la saisie", "réduire le coût du PGI"], bonne: 2, expl: "Un contrôle de saisie évite les données incomplètes ou mal formées.", niv: 2 },
        { q: "Dans un schéma de processus, la synchronisation indique :", choix: ["le salaire des acteurs", "les machines utilisées pour chaque tâche", "le nombre de clients servis chaque jour par l'entreprise", "l'ordre des activités et ce que chacune doit attendre"], bonne: 3, expl: "La synchronisation fixe l'ordre et les attentes entre activités et événements.", niv: 2 },
        { q: "Une entreprise relève, sur le schéma de son circuit de commande, deux saisies de la même commande. Que montre ce diagnostic ?", choix: ["Le processus est parfait", "Un défaut de sécurité informatique dans le logiciel de commande", "Une tâche inutile, source d'erreurs, à supprimer", "Un manque de serveurs"], bonne: 2, expl: "La double saisie coûte du temps et crée des incohérences : le schéma sert à la repérer.", niv: 2 },
        { q: "Un PGI présente comme limite principale :", choix: ["l'incohérence de ses données", "l'impossibilité de faire la paie", "une absence de base de données commune à ses différents modules", "un coût élevé et une dépendance à l'éditeur"], bonne: 3, expl: "Sa base unique rend les données cohérentes ; ses limites sont le coût, la durée du projet et la dépendance.", niv: 3 },
        { q: "Pourquoi dit-on que le SI peut devenir un avantage concurrentiel ?", choix: ["Parce que la loi oblige chaque entreprise à en avoir un très perfectionné", "Parce qu'il apporte une valeur difficile à copier par les concurrents", "Parce qu'il remplace les salariés", "Parce qu'il est vendu aux clients"], bonne: 1, expl: "Un SI bien conçu (données clients, processus rapides) donne un atout que les concurrents ne reproduisent pas facilement.", niv: 3 },
        { q: "Une enseigne prévoit ses ventes grâce à l'historique de ses cartes de fidélité. Quel objectif du SI est visé ?", choix: ["Un objectif opérationnel de facturation", "Un objectif stratégique d'anticipation", "La sécurité du réseau", "La maintenance des postes"], bonne: 1, expl: "Prévoir pour décider relève de l'objectif stratégique ; facturer relève de l'opérationnel.", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-sig-2',
      fiche: `## Les évolutions numériques sont-elles exemptes de risques ?

### Numérique et responsabilités
- Le numérique transforme la société : culture, emploi, environnement, droit. Une organisation responsable en mesure les effets.
- **Responsabilité sociale** : protéger la vie privée des clients et des salariés, respecter le droit à la déconnexion, éviter l'exclusion de ceux qui maîtrisent mal le numérique.
- **Responsabilité environnementale** : le numérique consomme de l'énergie et des matières premières, surtout à la **fabrication** des équipements. On réduit son **empreinte** en gardant plus longtemps le matériel, en le reconditionnant, en évitant les données et les envois inutiles.

### Les risques
- Pour l'**organisation** : panne, perte ou vol de données, arrêt de l'activité, atteinte à l'image, sanctions financières.
- Pour les **individus** : usurpation d'identité, harcèlement en ligne, surveillance excessive, fuite de données personnelles, surcharge informationnelle.
- Origine des risques : **accidentelle** (panne, incendie, dégât des eaux), **erreur humaine** (mauvaise manipulation, mot de passe faible) ou **malveillance** (attaque, vol, sabotage).

### La sécurité du SI
- Elle protège quatre **critères**, à connaître par cœur :
- **Disponibilité** : l'information est accessible quand on en a besoin.
- **Intégrité** : elle n'a pas été modifiée sans autorisation.
- **Confidentialité** : seules les personnes autorisées y accèdent.
- **Traçabilité** (ou preuve) : on peut savoir qui a fait quoi et quand.
- **Démarche de sécurisation** : recenser les ressources à protéger, identifier les risques, estimer leur **probabilité** et leur **gravité**, choisir des mesures, les appliquer, puis contrôler et mettre à jour.

### Outils et solutions
- **Authentification** : mot de passe long et unique, gestionnaire de mots de passe, **double authentification** (un code reçu en plus).
- **Droits d'accès** : chacun n'accède qu'à ce dont il a besoin.
- **Sauvegarde** régulière, avec une copie **hors ligne** et hors du site : elle protège contre la panne et le rançongiciel.
- **Mises à jour** des logiciels, **antivirus**, **pare-feu** (filtre les connexions entre le réseau et l'extérieur), **chiffrement** (rend les données illisibles sans la clé).
- **Journalisation** : garder la trace des connexions et des actions.
- **Sensibilisation** des utilisateurs : la plupart des attaques passent par une erreur humaine.
- Plan de **continuité** : savoir comment reprendre l'activité après un incident.

### La cybersécurité
- Elle traite les menaces qui viennent du **cyberespace**. Les principales :
- **Hameçonnage** (phishing) : un faux message imite un organisme connu pour voler identifiants ou coordonnées bancaires.
- **Rançongiciel** : un logiciel chiffre les fichiers et exige une rançon.
- **Logiciels malveillants** en général (virus, cheval de Troie), **déni de service** (saturer un site pour le rendre indisponible), **usurpation d'identité**, **fraude au président** (faux dirigeant qui demande un virement urgent).
- Réflexes : ne pas cliquer dans un message douteux, vérifier l'expéditeur, signaler, ne pas payer de rançon, porter plainte. L'ANSSI et le dispositif cybermalveillance.gouv.fr conseillent les organisations et les victimes.

### Protection des données personnelles : le RGPD
- Une **donnée personnelle** identifie une personne directement (nom, photo) ou indirectement (numéro de téléphone, adresse IP).
- Le **RGPD**, règlement européen appliqué depuis le **25 mai 2018**, fixe les règles. En France, la **CNIL** contrôle et peut sanctionner.
- Principes : un **but précis** (finalité), une **base légale** (consentement, contrat, obligation légale…), ne collecter que le **nécessaire** (minimisation), une **durée de conservation** limitée, la **sécurité** des données.
- **Droits des personnes** : être informées, accéder à leurs données, les rectifier, les effacer, s'opposer, les récupérer (portabilité).
- **Obligations** : tenir un **registre des traitements**, signaler une **violation de données** à la CNIL dans les **72 heures**, désigner un délégué à la protection des données dans certains cas.
- Sanctions : jusqu'à **20 millions d'euros** ou **4 %** du chiffre d'affaires mondial annuel.
- Solutions techniques : droits d'accès, chiffrement, **pseudonymisation** (remplacer le nom par un code), effacement automatique à la fin de la durée prévue.

### À retenir pour le bac
- Risques accidentels, humains, malveillants ; pour l'organisation et pour les individus.
- Sécurité : disponibilité, intégrité, confidentialité, traçabilité.
- Mesures : authentification, droits, sauvegardes, mises à jour, pare-feu, chiffrement, sensibilisation.
- Menaces : hameçonnage, rançongiciel, déni de service, fraude au président.
- RGPD : finalité, minimisation, durée limitée, droits des personnes, violation signalée en 72 heures.`,
      cartes: [
        { q: "Quels sont les quatre critères de sécurité du SI ?", r: "Disponibilité, intégrité, confidentialité et traçabilité (preuve)." },
        { q: "Qu'est-ce que l'intégrité d'une donnée ?", r: "La donnée n'a pas été modifiée sans autorisation, volontairement ou par erreur." },
        { q: "Qu'est-ce que la confidentialité ?", r: "Seules les personnes autorisées peuvent accéder à l'information." },
        { q: "Quelles sont les trois origines des risques ?", r: "Accidentelle (panne, incendie), erreur humaine, malveillance (attaque, vol, sabotage)." },
        { q: "Quelles sont les étapes d'une démarche de sécurisation ?", r: "Recenser ce qu'il faut protéger, identifier les risques, estimer probabilité et gravité, choisir et appliquer des mesures, contrôler et mettre à jour." },
        { q: "Qu'est-ce que l'hameçonnage ?", r: "Un faux message qui imite un organisme connu pour voler des identifiants ou des coordonnées bancaires." },
        { q: "Qu'est-ce qu'un rançongiciel ?", r: "Un logiciel malveillant qui chiffre les fichiers et réclame une rançon pour les rendre." },
        { q: "Qu'est-ce que la fraude au président ?", r: "Un escroc se fait passer pour un dirigeant et demande un virement urgent et confidentiel." },
        { q: "Pourquoi garder une sauvegarde hors ligne ?", r: "Un rançongiciel chiffre aussi les sauvegardes branchées au réseau ; une copie déconnectée permet de tout restaurer." },
        { q: "À quoi sert un pare-feu ?", r: "À filtrer les connexions entre le réseau de l'organisation et l'extérieur, selon des règles." },
        { q: "Qu'est-ce qu'une donnée personnelle ?", r: "Toute information qui identifie une personne, directement (nom, photo) ou indirectement (téléphone, adresse IP)." },
        { q: "Quels sont les grands principes du RGPD ?", r: "Une finalité précise, une base légale, la minimisation des données, une durée de conservation limitée, la sécurité." },
        { q: "Quels droits le RGPD donne-t-il aux personnes ?", r: "Information, accès, rectification, effacement, opposition et portabilité de leurs données." },
        { q: "Quel délai pour signaler une violation de données à la CNIL ?", r: "72 heures après en avoir pris connaissance." },
        { q: "Qu'est-ce que la pseudonymisation ?", r: "Remplacer les éléments qui identifient une personne (nom) par un code, pour limiter les risques en cas de fuite." },
      ],
      quiz: [
        { q: "Un site de vente est saturé par des millions de connexions et devient inaccessible. Quel critère de sécurité est atteint ?", choix: ["La confidentialité", "La traçabilité", "L'intégrité", "La disponibilité"], bonne: 3, expl: "Le site n'est plus accessible : c'est la disponibilité qui est touchée, par un déni de service.", niv: 1 },
        { q: "Un message imite la banque et demande de « confirmer ses identifiants » par un lien. C'est :", choix: ["un rançongiciel", "de l'hameçonnage", "un déni de service", "une mise à jour"], bonne: 1, expl: "Le faux message qui vole des identifiants est de l'hameçonnage.", niv: 1 },
        { q: "Le RGPD s'applique depuis :", choix: ["le 1er janvier 2000", "le 6 janvier 1978", "le 25 mai 2018", "le 1er janvier 2024"], bonne: 2, expl: "Le règlement européen est appliqué depuis le 25 mai 2018 ; 1978 est la loi Informatique et libertés.", niv: 1 },
        { q: "En France, l'autorité qui contrôle le respect du RGPD est :", choix: ["l'ANSSI", "l'INSEE", "la CNIL", "la DGFiP"], bonne: 2, expl: "La CNIL contrôle et sanctionne ; l'ANSSI s'occupe de la sécurité des systèmes de l'État et conseille.", niv: 1 },
        { q: "Un journal enregistre qui a modifié chaque facture et quand. Quel critère est assuré ?", choix: ["La portabilité", "La disponibilité", "La confidentialité", "La traçabilité"], bonne: 3, expl: "Savoir qui a fait quoi et quand, c'est la traçabilité.", niv: 2 },
        { q: "Quelle mesure protège le mieux contre la perte des fichiers par un rançongiciel ?", choix: ["Un écran plus grand", "Une sauvegarde régulière gardée hors ligne", "Un mot de passe affiché sur le poste", "Une connexion internet plus rapide pour les échanges"], bonne: 1, expl: "Une copie déconnectée échappe au chiffrement et permet de tout restaurer sans payer.", niv: 2 },
        { q: "Une boutique demande la date de naissance et la profession pour envoyer une simple facture. Quel principe du RGPD est en cause ?", choix: ["La minimisation des données", "La portabilité", "Le droit d'accès", "La traçabilité"], bonne: 0, expl: "Il ne faut collecter que les données nécessaires au but poursuivi : c'est la minimisation.", niv: 2 },
        { q: "Une entreprise découvre une fuite de fichiers clients. Elle doit prévenir la CNIL dans un délai de :", choix: ["72 heures", "24 heures", "30 jours", "un an"], bonne: 0, expl: "La violation de données se notifie à la CNIL dans les 72 heures.", niv: 2 },
        { q: "Quelle mesure ne relève **pas** de la sécurité du SI ?", choix: ["La double authentification", "Le changement du logo de l'entreprise", "La sensibilisation des salariés", "Les mises à jour régulières des logiciels"], bonne: 1, expl: "Le logo relève de la communication ; les trois autres mesures protègent le SI.", niv: 2 },
        { q: "Une comptable reçoit un courriel du « directeur » demandant un virement urgent et secret. Le bon réflexe est de :", choix: ["vérifier la demande auprès du directeur par un autre moyen", "faire le virement vite pour ne pas le décevoir", "répondre au courriel avec les codes bancaires", "transférer le courriel à ses collègues pour qu'ils fassent le virement"], bonne: 0, expl: "C'est le schéma de la fraude au président : on vérifie par un autre canal avant d'agir.", niv: 3 },
        { q: "Pourquoi l'empreinte environnementale du numérique vient-elle en grande partie des équipements ?", choix: ["Parce que les câbles s'usent vite", "Parce que les écrans éclairent trop", "Parce que les logiciels installés occupent trop de place sur les disques", "Parce que leur fabrication consomme beaucoup d'énergie et de métaux"], bonne: 3, expl: "La fabrication des terminaux pèse lourd : les garder plus longtemps réduit l'empreinte.", niv: 3 },
        { q: "Un fichier de patients remplace les noms par des codes, la table de correspondance étant gardée à part. On parle de :", choix: ["chiffrement complet", "suppression des données", "pseudonymisation", "portabilité"], bonne: 2, expl: "Le code remplace le nom mais la personne reste retrouvable avec la table : c'est la pseudonymisation.", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-sig-3',
      fiche: `## Comment la fonction SI accompagne-t-elle les choix de l'organisation ?

### Le SI, une fonction à gérer
- Dans l'organisation, le SI est une **fonction** comme les autres : elle a un responsable (souvent la direction des systèmes d'information, **DSI**), un **budget**, des **ressources** et des objectifs.
- Son rôle : faire fonctionner le système informatique, aider les métiers, préparer l'avenir et aligner le SI sur la **stratégie**.
- L'**alignement stratégique** : le SI doit servir les choix de l'organisation. Une entreprise qui ouvre une boutique en ligne a besoin d'un site, d'un paiement sécurisé et d'un lien avec ses stocks.
- La **gouvernance** du SI : décider des priorités, répartir le budget, fixer les règles, évaluer les résultats.

### Métiers et nouveaux métiers
- Métiers classiques : **administrateur systèmes et réseaux**, **technicien support** (assistance aux utilisateurs), **développeur**, **chef de projet**, responsable de la sécurité des SI.
- Nouveaux métiers liés aux données : **directeur des données** (chief data officer), **datascientist** (analyse de grandes masses de données pour prévoir), **analyste de données**, délégué à la protection des données.
- **Gestion des compétences** : ces métiers évoluent vite ; il faut former, recruter ou faire appel à l'extérieur. Les compétences disponibles déterminent la capacité à exploiter ses données.

### Faire soi-même ou faire faire
- **Internaliser** : la DSI réalise elle-même. Avantages : maîtrise, connaissance du métier, confidentialité. Limites : coûts fixes, compétences à entretenir.
- **Externaliser** : confier une activité à un prestataire. L'**infogérance** est l'externalisation de tout ou partie de la gestion du système informatique (hébergement, maintenance, assistance).
- Raisons d'externaliser : réduire ou rendre variables les coûts, accéder à des compétences pointues, se concentrer sur son **cœur de métier**.
- Risques : **dépendance** au prestataire, perte de compétences internes, confidentialité des données, qualité à surveiller. On encadre la relation par un **contrat** qui fixe un **niveau de service** (délais d'intervention, taux de disponibilité).

### Veille technologique
- Surveiller les nouvelles technologies, les offres des éditeurs, les menaces et les évolutions du droit pour faire les bons choix au bon moment.
- Sources : presse spécialisée, salons, sites officiels, retours d'autres organisations.

### Budget
- Le budget du SI comprend les **investissements** (matériels, licences, projets) et le **fonctionnement** (abonnements, maintenance, salaires, énergie).
- Il faut comparer ce coût aux gains attendus : temps gagné, erreurs évitées, ventes en plus.

### Tableau de bord et indicateurs
- Un **critère** est ce que l'on veut évaluer (la disponibilité du réseau, la satisfaction des utilisateurs, la rapidité du support).
- Un **indicateur** est la mesure chiffrée de ce critère, calculée régulièrement et comparée à un **objectif** (une valeur cible).
- Exemples :
- **Taux de disponibilité** = durée de fonctionnement / durée prévue x 100. Un serveur arrêté 6 heures sur un mois de 720 heures est disponible à (720 - 6) / 720 x 100, soit environ 99,2 %.
- **Délai moyen de résolution** des demandes d'assistance = somme des délais / nombre de demandes.
- **Taux de résolution au premier appel** = demandes réglées dès le premier contact / total des demandes x 100.
- **Taux de satisfaction** des utilisateurs, nombre d'incidents de sécurité, coût du SI par salarié.
- Un **tableau de bord opérationnel** réunit quelques indicateurs, souvent avec des couleurs (vert, orange, rouge), pour piloter au quotidien.
- Un bon indicateur est **pertinent** (il mesure vraiment le critère), **fiable**, **simple** à calculer et à comprendre, et **suivi dans le temps**.
- Interpréter : comparer à l'objectif et à la période précédente, chercher les causes d'un écart, proposer une action (former, ajouter un technicien, changer de prestataire).

### Des solutions adaptées aux métiers
- Chaque métier a ses besoins : un commercial nomade a besoin d'un accès à distance sécurisé, un entrepôt d'un terminal de lecture de codes-barres, un service client d'un logiciel de gestion de la relation client.
- Tout changement du SI doit être **cohérent** avec la stratégie et avec le reste du SI (formats de données, sécurité, réseau).

### À retenir pour le bac
- La fonction SI se gère : DSI, budget, gouvernance, alignement sur la stratégie.
- Nouveaux métiers des données : directeur des données, datascientist.
- Internaliser ou externaliser (infogérance) : maîtrise contre souplesse, avec un contrat de niveau de service.
- Critère = ce qu'on évalue ; indicateur = la mesure chiffrée, comparée à un objectif.
- Savoir calculer un taux de disponibilité et un délai moyen, puis interpréter l'écart.`,
      cartes: [
        { q: "Qu'est-ce que la DSI ?", r: "La direction des systèmes d'information : elle gère le SI, son budget, ses ressources et ses projets." },
        { q: "Qu'est-ce que l'alignement stratégique du SI ?", r: "Faire en sorte que le SI serve les choix stratégiques de l'organisation (par exemple, un site marchand pour vendre en ligne)." },
        { q: "Qu'est-ce que la gouvernance du SI ?", r: "La façon de décider des priorités du SI, de répartir son budget, de fixer ses règles et d'évaluer ses résultats." },
        { q: "Citez deux nouveaux métiers liés aux données.", r: "Directeur des données (chief data officer) et datascientist ; aussi analyste de données." },
        { q: "Qu'est-ce que l'infogérance ?", r: "L'externalisation de tout ou partie de la gestion du système informatique : hébergement, maintenance, assistance." },
        { q: "Pourquoi externaliser une activité du SI ?", r: "Réduire ou rendre variables les coûts, accéder à des compétences pointues, se concentrer sur son cœur de métier." },
        { q: "Quels sont les risques de l'externalisation ?", r: "Dépendance au prestataire, perte de compétences internes, risques pour la confidentialité, qualité à surveiller." },
        { q: "Qu'est-ce qu'un contrat de niveau de service ?", r: "Le contrat qui fixe ce que le prestataire garantit : délais d'intervention, taux de disponibilité, pénalités." },
        { q: "Qu'est-ce que la veille technologique ?", r: "Surveiller les technologies, les offres, les menaces et le droit pour faire les bons choix au bon moment." },
        { q: "Différence entre critère et indicateur ?", r: "Le critère est ce qu'on veut évaluer (la disponibilité) ; l'indicateur en est la mesure chiffrée (taux de disponibilité)." },
        { q: "Comment calculer un taux de disponibilité ?", r: "Durée de fonctionnement / durée prévue x 100. Arrêt de 6 h sur 720 h : 714 / 720 x 100, soit environ 99,2 %." },
        { q: "Qu'est-ce qu'un tableau de bord opérationnel ?", r: "Quelques indicateurs suivis régulièrement, comparés à des objectifs, souvent avec des couleurs, pour piloter au quotidien." },
        { q: "Qu'est-ce qu'un bon indicateur ?", r: "Pertinent (il mesure vraiment le critère), fiable, simple à calculer et à comprendre, suivi dans le temps." },
        { q: "Que fait-on face à un indicateur en dessous de l'objectif ?", r: "On compare, on cherche les causes de l'écart, puis on propose une action corrective (formation, renfort, changement de prestataire)." },
      ],
      quiz: [
        { q: "L'infogérance consiste à :", choix: ["former les salariés au tableur", "acheter des ordinateurs neufs pour remplacer tout le parc de l'entreprise", "confier à un prestataire la gestion du système informatique", "rédiger la charte informatique"], bonne: 2, expl: "L'infogérance est une forme d'externalisation de la gestion du système informatique.", niv: 1 },
        { q: "Le métier qui analyse de grandes masses de données pour prévoir des comportements est :", choix: ["datascientist", "administrateur réseau", "technicien support", "chef de rayon"], bonne: 0, expl: "Le datascientist exploite les données massives avec des méthodes statistiques pour prévoir.", niv: 1 },
        { q: "« La rapidité du support aux utilisateurs » est :", choix: ["un indicateur", "un budget", "un objectif chiffré", "un critère"], bonne: 3, expl: "C'est ce qu'on veut évaluer, donc un critère ; le délai moyen de résolution en serait l'indicateur.", niv: 1 },
        { q: "Un serveur prévu 24 h sur 24 a fonctionné 700 heures sur un mois de 720 heures. Son taux de disponibilité est d'environ :", choix: ["92,8 %", "97,2 %", "70,0 %", "2,8 %"], bonne: 1, expl: "700 / 720 x 100 = 97,2 % ; 2,8 % est le taux d'indisponibilité.", niv: 2 },
        { q: "Trois demandes d'assistance ont été résolues en 2 h, 4 h et 9 h. Le délai moyen de résolution est :", choix: ["5 heures", "4 heures", "9 heures", "15 heures"], bonne: 0, expl: "(2 + 4 + 9) / 3 = 15 / 3 = 5 heures ; 15 heures est la somme.", niv: 2 },
        { q: "Quel est le principal risque de l'externalisation ?", choix: ["La disparition des données", "La baisse obligatoire du budget", "La dépendance envers le prestataire", "L'interdiction de former les salariés"], bonne: 2, expl: "L'organisation dépend de la qualité et de la survie de son prestataire ; d'où un contrat précis.", niv: 2 },
        { q: "Une PME sans informaticien confie sa messagerie et ses sauvegardes à un hébergeur. Sa principale raison est :", choix: ["créer un service informatique interne avec deux techniciens recrutés en CDI", "augmenter ses coûts fixes", "accéder à des compétences qu'elle n'a pas et se concentrer sur son métier", "supprimer toute sécurité"], bonne: 2, expl: "L'externalisation donne accès à des compétences pointues sans avoir à les entretenir en interne.", niv: 2 },
        { q: "Une enseigne lance la vente en ligne. Aligner le SI sur ce choix, c'est par exemple :", choix: ["changer la couleur des magasins", "réduire le nombre de caisses", "supprimer la comptabilité", "relier le site marchand au stock et à un paiement sécurisé"], bonne: 3, expl: "Le SI doit servir la stratégie : un site relié aux stocks et au paiement rend la vente en ligne possible.", niv: 2 },
        { q: "Un indicateur pertinent pour évaluer « la satisfaction des utilisateurs du support » serait :", choix: ["la note moyenne donnée après chaque intervention", "la consommation d'électricité des serveurs", "le nombre d'ordinateurs achetés par le service informatique", "le nombre de salariés de l'entreprise"], bonne: 0, expl: "La note recueillie après chaque intervention mesure directement la satisfaction.", niv: 2 },
        { q: "Le taux de disponibilité du réseau est de 98 % pour un objectif de 99,5 %. La meilleure démarche est :", choix: ["supprimer l'indicateur", "analyser les causes des pannes et proposer une action corrective", "ignorer l'écart, car 98 % reste un très bon taux pour un réseau d'entreprise", "relever l'objectif à 100 %"], bonne: 1, expl: "On interprète l'écart, on en cherche les causes, puis on agit ; changer l'indicateur ne règle rien.", niv: 3 },
        { q: "Pourquoi le contrat d'infogérance fixe-t-il un niveau de service ?", choix: ["Pour interdire tout contrôle du prestataire", "Pour garantir délais et disponibilité, avec des pénalités en cas de manquement", "Pour fixer le salaire des employés du prestataire et leurs horaires de travail précis", "Pour éviter de payer le prestataire"], bonne: 1, expl: "Le niveau de service rend la qualité mesurable et réduit le risque lié à la dépendance.", niv: 3 },
        { q: "Une DSI hésite à internaliser son assistance. Quel argument plaide pour l'internalisation ?", choix: ["Des coûts devenus variables", "L'accès à une équipe externe nombreuse", "La fin de toute formation interne", "La maîtrise du service et la connaissance du métier de l'entreprise"], bonne: 3, expl: "Faire soi-même garde la maîtrise et la connaissance du métier ; les coûts variables plaident plutôt pour l'externalisation.", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-sig-4',
      fiche: `## En quoi un projet de système d'information est-il une réponse au besoin d'évolution de l'organisation ?

### Pourquoi un projet de SI
- L'organisation change (croissance, nouvelle activité, nouvelle loi, attentes des clients) : son SI doit évoluer avec elle. Exemples : passer à la facturation électronique, installer un PGI, créer une application de prise de rendez-vous.
- Un **projet** est un ensemble d'actions **uniques**, avec un **objectif** précis, un **début** et une **fin**, des **ressources** et des **contraintes**.

### Les acteurs
- La **maîtrise d'ouvrage** (MOA) : celui qui a le **besoin** et commande le projet (la direction, un service métier). Elle exprime les besoins et valide le résultat.
- La **maîtrise d'œuvre** (MOE) : celui qui **réalise** (la DSI ou un prestataire). Elle choisit les solutions techniques et livre.
- Le **chef de projet** coordonne l'équipe, suit le planning et le budget, rend compte.
- Les **utilisateurs** finaux participent à l'expression des besoins et aux tests.
- Un **comité de pilotage** réunit les décideurs pour valider les grandes étapes.

### Les contraintes : le triangle qualité, coût, délai
- Un projet doit tenir trois contraintes à la fois : la **qualité** (le résultat répond aux besoins), le **coût** (le budget) et le **délai** (la date de fin).
- Améliorer l'une pèse souvent sur les autres : livrer plus tôt coûte plus cher ou réduit le périmètre.

### Les phases et les jalons
- Grandes **phases** : étude de l'existant et des besoins, rédaction du **cahier des charges**, conception, réalisation, tests, **recette**, déploiement (installation, formation des utilisateurs), puis bilan.
- Un **jalon** est un point de contrôle daté (fin d'une phase, validation) où l'on décide de continuer, d'ajuster ou d'arrêter.
- La **recette** est la vérification, par la maîtrise d'ouvrage, que ce qui est livré est conforme au cahier des charges. Elle se termine par l'acceptation ou par une liste de corrections.

### Planifier : tâches et synchronisation
- On découpe le projet en **tâches**, chacune avec une **durée** et des **antériorités** (les tâches qui doivent être finies avant).
- Le **diagramme de Gantt** représente les tâches sous forme de barres sur un calendrier : on voit qui fait quoi et quand.
- Le **chemin critique** est la suite des tâches qui fixe la durée totale : une tâche **critique** n'a aucune **marge** ; si elle prend du retard, tout le projet est retardé.
- Exemple : A (3 jours) puis B (2 jours) ; C (4 jours) en parallèle de A et B ; D (1 jour) après B et C. Chemin A, B, D : 6 jours. Chemin C, D : 5 jours. Durée du projet : 6 jours ; A, B et D sont critiques, C a 1 jour de marge.

### Piloter et contrôler
- Comparer le **prévu** au **réalisé** : écarts de délai (jours de retard), de coût (dépassement du budget) et de qualité (anomalies, satisfaction).
- Écart de coût = coût réel - coût prévu. Un écart positif est un dépassement.
- Réagir : réaffecter des ressources, revoir le planning, réduire le périmètre, négocier.
- La **communication** : réunions d'avancement, comptes rendus, information des futurs utilisateurs pour limiter la résistance au changement.

### Nouveaux styles de conduite de projet
- **Méthode classique** (en cascade) : les phases se suivent ; tout est fixé au départ dans le cahier des charges. Adaptée quand le besoin est clair et stable.
- **Méthodes agiles** : le produit est construit par **itérations** courtes (souvent deux à quatre semaines), avec des livraisons fréquentes, une grande place donnée au client et l'acceptation du changement. Adaptées quand le besoin évolue.
- **Outils de coopération** : logiciel de gestion de projet, tableau de tâches partagé, messagerie d'équipe, documents partagés.

### Les ressources du projet
- **Matérielles** (postes, serveurs), **immatérielles** (licences, données), **humaines** (compétences, jours de travail).
- On recense les compétences nécessaires et disponibles : s'il en manque, on forme, on recrute ou on fait appel à un prestataire.

### À retenir pour le bac
- MOA exprime le besoin et valide ; MOE réalise.
- Qualité, coût, délai : trois contraintes liées.
- Phases, jalons, cahier des charges, recette, déploiement.
- Gantt et chemin critique : une tâche critique n'a pas de marge.
- Méthode classique pour un besoin stable, méthodes agiles pour un besoin qui évolue.`,
      cartes: [
        { q: "Qu'est-ce qu'un projet ?", r: "Un ensemble d'actions uniques, avec un objectif précis, un début et une fin, des ressources et des contraintes." },
        { q: "Qu'est-ce que la maîtrise d'ouvrage ?", r: "Celui qui a le besoin et commande le projet : il exprime les besoins et valide le résultat." },
        { q: "Qu'est-ce que la maîtrise d'œuvre ?", r: "Celui qui réalise le projet (DSI ou prestataire) : il choisit les solutions techniques et livre." },
        { q: "Quelles sont les trois contraintes d'un projet ?", r: "La qualité, le coût et le délai, liés entre eux." },
        { q: "Qu'est-ce que le cahier des charges ?", r: "Le document qui décrit les besoins, les attentes et les contraintes du projet ; il sert de référence à la recette." },
        { q: "Qu'est-ce qu'un jalon ?", r: "Un point de contrôle daté (fin de phase, validation) où l'on décide de continuer, d'ajuster ou d'arrêter." },
        { q: "Qu'est-ce que la recette ?", r: "La vérification par la maîtrise d'ouvrage que ce qui est livré est conforme au cahier des charges." },
        { q: "Qu'est-ce qu'un diagramme de Gantt ?", r: "Un planning où chaque tâche est une barre sur un calendrier : on voit qui fait quoi et quand." },
        { q: "Qu'est-ce que le chemin critique ?", r: "La suite de tâches qui fixe la durée totale du projet ; ses tâches n'ont aucune marge." },
        { q: "Qu'est-ce que la marge d'une tâche ?", r: "Le retard qu'elle peut prendre sans retarder la fin du projet. Une tâche critique a une marge nulle." },
        { q: "Comment calcule-t-on un écart de coût ?", r: "Coût réel - coût prévu. Un écart positif est un dépassement de budget." },
        { q: "Qu'est-ce qu'une méthode agile ?", r: "Une conduite de projet par itérations courtes, avec des livraisons fréquentes, le client très présent et le changement accepté." },
        { q: "Quand préférer une méthode classique (en cascade) ?", r: "Quand le besoin est clair et stable dès le départ." },
        { q: "Pourquoi communiquer pendant le projet ?", r: "Pour suivre l'avancement, coordonner l'équipe et préparer les utilisateurs, ce qui limite la résistance au changement." },
      ],
      quiz: [
        { q: "La direction commerciale qui demande une nouvelle application et la validera est :", choix: ["la maîtrise d'ouvrage", "la maîtrise d'œuvre", "le prestataire", "l'utilisateur externe"], bonne: 0, expl: "Celui qui a le besoin et valide est la maîtrise d'ouvrage ; la maîtrise d'œuvre réalise.", niv: 1 },
        { q: "Les trois contraintes d'un projet sont :", choix: ["matériel, logiciel, réseau", "prix, produit, place", "qualité, coût, délai", "acquérir, traiter, diffuser"], bonne: 2, expl: "Un projet doit tenir ensemble la qualité, le coût et le délai.", niv: 1 },
        { q: "La vérification que le logiciel livré correspond au cahier des charges s'appelle :", choix: ["le déploiement", "la veille", "l'itération", "la recette"], bonne: 3, expl: "La recette contrôle la conformité avant d'accepter la livraison.", niv: 1 },
        { q: "Dans un diagramme de Gantt, chaque tâche est représentée par :", choix: ["un cercle relié aux autres", "une barre sur un calendrier", "une ligne d'un tableau de requête", "une adresse IP"], bonne: 1, expl: "Le Gantt place les tâches en barres sur une échelle de temps.", niv: 1 },
        { q: "Une tâche critique est une tâche :", choix: ["sans importance", "très coûteuse", "confiée à un prestataire", "dont le retard retarde tout le projet"], bonne: 3, expl: "Sur le chemin critique, la marge est nulle : tout retard décale la fin du projet.", niv: 2 },
        { q: "Projet : A (3 j) puis B (2 j) ; C (4 j) en même temps que A et B ; D (1 j) après B et C. Durée totale ?", choix: ["6 jours", "5 jours", "7 jours", "10 jours"], bonne: 0, expl: "Le chemin le plus long est A, B, D : 3 + 2 + 1 = 6 jours ; 10 jours serait la somme de tout.", niv: 2 },
        { q: "Dans ce même projet, quelle marge a la tâche C ?", choix: ["3 jours", "1 jour", "2 jours", "4 jours"], bonne: 1, expl: "C et D font 5 jours contre 6 pour le chemin critique : C peut glisser d'un jour.", niv: 3 },
        { q: "Budget prévu : 40 000 € ; coût réel : 46 000 €. L'écart de coût est :", choix: ["- 6 000 €, une économie", "nul", "+ 46 000 €", "+ 6 000 €, un dépassement"], bonne: 3, expl: "Coût réel - coût prévu = 46 000 - 40 000 = + 6 000 € : le budget est dépassé.", niv: 2 },
        { q: "Une méthode agile se caractérise par :", choix: ["un cahier des charges figé et une seule livraison finale", "l'absence de client", "des itérations courtes et des livraisons fréquentes", "l'interdiction de modifier le besoin"], bonne: 2, expl: "Les méthodes agiles avancent par itérations et intègrent le changement.", niv: 2 },
        { q: "Une start-up teste une application dont les besoins changent après chaque retour des clients. Quelle conduite de projet convient ?", choix: ["Une méthode en cascade", "Une méthode sans planning", "Une méthode agile", "Une recette sans tests"], bonne: 2, expl: "Quand le besoin évolue souvent, les itérations courtes de l'agilité s'adaptent mieux.", niv: 2 },
        { q: "Le projet a 10 jours de retard sur une tâche critique et la date de fin ne peut pas bouger. Quelle réaction est la plus adaptée ?", choix: ["Réaffecter des ressources ou réduire le périmètre de la première livraison", "Supprimer la recette", "Cacher le retard au comité de pilotage", "Recommencer le projet depuis le début avec une nouvelle équipe et un autre budget"], bonne: 0, expl: "On agit sur les ressources ou le périmètre pour tenir le délai, et on en informe les décideurs.", niv: 3 },
        { q: "Pourquoi associer les futurs utilisateurs dès l'expression des besoins ?", choix: ["Pour réduire le coût des licences", "Pour que l'outil réponde à leur travail réel et soit mieux accepté", "Parce que la loi l'impose pour chaque projet informatique d'une entreprise privée", "Pour éviter de faire une recette"], bonne: 1, expl: "Les utilisateurs connaissent le travail réel ; leur participation limite aussi la résistance au changement.", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-sig-5',
      fiche: `## Comment peut-on produire de l'information à partir de données ?

### Des sources de données variées
- **Internes** : le SI de l'organisation (ventes, stocks, paie, fichiers clients).
- **Externes** : partenaires, fournisseurs de données, réseaux sociaux, **données ouvertes** (open data : données publiques libres de réutilisation, par exemple sur data.gouv.fr).
- **Traces numériques** : ce que laissent les internautes et les objets connectés (pages vues, clics, achats, localisation). Collectées par des **cookies**, des journaux de connexion ou des capteurs, elles servent à mieux connaître les clients, dans le respect du RGPD.

### La base de données relationnelle
- Une **base de données** stocke des données organisées, partagées et sans répétition inutile. Elle est gérée par un **SGBD** (système de gestion de base de données).
- Une **relation** (ou table) a des **attributs** (colonnes) ; chaque ligne est un enregistrement.
- Le **domaine** d'un attribut est l'ensemble des valeurs permises (un entier positif, une date, un texte de 50 caractères).
- La **clé primaire** identifie chaque ligne de façon unique (un numéro de client).
- La **clé étrangère** est un attribut qui reprend la clé primaire d'une autre relation : elle crée le lien entre les deux. On la note avec un **#**.
- Une **dépendance fonctionnelle** : connaître A permet de connaître B sans ambiguïté. numClient détermine nom et ville.
- Le **schéma relationnel** décrit toutes les relations, leurs clés primaires (en premier) et leurs clés étrangères.

### Un exemple de schéma
- CLIENT (numClient, nom, ville)
- COMMANDE (numCommande, dateCommande, #numClient)
- PRODUIT (refProduit, libelle, prixUnitaire)
- LIGNE (#numCommande, #refProduit, quantite)
- Une commande appartient à un client ; une ligne dit quelle quantité d'un produit figure dans une commande. La clé de LIGNE est composée de deux attributs.

### Les contraintes d'intégrité
- **Contrainte de clé** : pas deux lignes avec la même clé primaire, et pas de clé vide.
- **Contrainte de domaine** : une valeur doit appartenir au domaine (pas de quantité négative, pas de texte dans une date).
- **Intégrité référentielle** : une clé étrangère doit correspondre à une clé primaire qui existe. On ne peut pas enregistrer une commande pour le client 999 s'il n'existe pas, ni supprimer un client qui a des commandes.

### Interroger avec SQL
- SQL (Structured Query Language) est le langage standard pour interroger une base. Forme générale :
- SELECT colonnes FROM table WHERE condition ORDER BY colonne ;
- Filtrer : SELECT nom FROM CLIENT WHERE ville = 'Lyon' ;
- Opérateurs relationnels : =, <>, <, >, <=, >=, **BETWEEN** 10 AND 20, **IN** ('Lyon', 'Nice'), **LIKE** 'Du%' (commence par Du), **IS NULL** (valeur absente).
- Opérateurs logiques : **AND** (les deux conditions), **OR** (au moins une), **NOT**.
- Trier : ORDER BY prixUnitaire DESC (décroissant ; ASC pour croissant).
- **Jointure** : relier deux tables par l'égalité clé étrangère = clé primaire. SELECT numCommande, nom FROM COMMANDE INNER JOIN CLIENT ON COMMANDE.numClient = CLIENT.numClient ;
- **Fonctions** d'agrégation : COUNT (nombre), SUM (somme), AVG (moyenne), MIN, MAX. SELECT AVG(prixUnitaire) FROM PRODUIT ;
- **Regroupement** : GROUP BY calcule par groupe. Nombre de commandes par client : SELECT numClient, COUNT(*) FROM COMMANDE GROUP BY numClient ;
- **HAVING** filtre les groupes après le calcul : ... GROUP BY numClient HAVING COUNT(*) >= 3 ; WHERE filtre les lignes avant.
- Modifier les données : INSERT INTO (ajouter), UPDATE ... SET (modifier), DELETE FROM (supprimer). Sans WHERE, UPDATE et DELETE touchent toutes les lignes.

### Nouvelles bases de données
- Les **données massives** (big data) se reconnaissent à leur volume, leur variété de formats et leur vitesse d'arrivée.
- Les bases **NoSQL** stockent des données peu structurées (documents, messages) avec souplesse.
- Le **lac de données** (data lake) garde des données brutes de toutes sortes, avant de savoir à quoi elles serviront.
- La **fouille de données** (data mining) cherche des tendances cachées dans ces masses de données.

### Contrôler le résultat
- Vérifier la **vraisemblance** : un panier moyen de 3 000 € dans une boulangerie signale une erreur de requête (jointure oubliée, mauvaise condition).
- Vérifier la **pertinence** : le résultat répond-il au besoin de gestion posé ?

### À retenir pour le bac
- Clé primaire : identifie la ligne. Clé étrangère (#) : lien vers une autre table.
- Intégrité référentielle : une clé étrangère doit exister comme clé primaire ailleurs.
- SELECT, FROM, WHERE, INNER JOIN ... ON, GROUP BY, HAVING, ORDER BY.
- WHERE filtre les lignes ; HAVING filtre les groupes.
- Sources : internes, externes, données ouvertes, traces numériques.`,
      cartes: [
        { q: "Qu'est-ce qu'une clé primaire ?", r: "L'attribut (ou les attributs) qui identifie chaque ligne d'une relation de façon unique." },
        { q: "Qu'est-ce qu'une clé étrangère ?", r: "Un attribut qui reprend la clé primaire d'une autre relation pour les relier. On la note avec #." },
        { q: "Qu'est-ce que le domaine d'un attribut ?", r: "L'ensemble des valeurs permises : entier positif, date, texte de 50 caractères…" },
        { q: "Qu'est-ce qu'une dépendance fonctionnelle ?", r: "Connaître un attribut permet d'en connaître un autre sans ambiguïté : numClient détermine nom." },
        { q: "Qu'est-ce que l'intégrité référentielle ?", r: "Une clé étrangère doit correspondre à une clé primaire existante : pas de commande pour un client inconnu." },
        { q: "Que fait SELECT nom FROM CLIENT WHERE ville = 'Lyon' ; ?", r: "Elle affiche le nom des clients dont la ville est Lyon." },
        { q: "Comment relier deux tables en SQL ?", r: "Par une jointure : INNER JOIN CLIENT ON COMMANDE.numClient = CLIENT.numClient (clé étrangère = clé primaire)." },
        { q: "Quelles sont les fonctions d'agrégation ?", r: "COUNT (nombre), SUM (somme), AVG (moyenne), MIN et MAX." },
        { q: "À quoi sert GROUP BY ?", r: "À faire un calcul par groupe : par exemple le nombre de commandes de chaque client." },
        { q: "Différence entre WHERE et HAVING ?", r: "WHERE filtre les lignes avant le calcul ; HAVING filtre les groupes après le calcul (HAVING COUNT(*) >= 3)." },
        { q: "Que signifie LIKE 'Du%' ?", r: "Le texte commence par « Du », suivi de n'importe quels caractères." },
        { q: "Qu'est-ce que les données ouvertes ?", r: "Des données, souvent publiques, libres d'accès et de réutilisation (par exemple sur data.gouv.fr)." },
        { q: "Qu'est-ce qu'une trace numérique ?", r: "Une donnée laissée par une activité en ligne ou un objet connecté : clic, page vue, achat, localisation." },
        { q: "Qu'est-ce qu'un lac de données ?", r: "Un espace qui garde des données brutes de tous formats, avant de savoir comment elles seront exploitées." },
        { q: "Quels risques avec UPDATE ou DELETE sans WHERE ?", r: "La modification ou la suppression touche toutes les lignes de la table." },
      ],
      quiz: [
        { q: "Dans CLIENT (numClient, nom, ville), numClient est :", choix: ["une clé étrangère", "une fonction", "un domaine", "la clé primaire"], bonne: 3, expl: "Il identifie chaque client de façon unique : c'est la clé primaire.", niv: 1 },
        { q: "Dans COMMANDE (numCommande, dateCommande, #numClient), #numClient sert à :", choix: ["relier chaque commande à un client existant", "numéroter les commandes", "calculer le montant total de la commande avec la TVA", "trier les clients par ville"], bonne: 0, expl: "La clé étrangère reprend la clé primaire de CLIENT et crée le lien entre les deux tables.", niv: 1 },
        { q: "Quelle requête affiche les produits à plus de 20 € ?", choix: ["SELECT PRODUIT FROM libelle > 20 ;", "SELECT libelle FROM PRODUIT WHERE prixUnitaire > 20 ;", "SELECT libelle WHERE PRODUIT > 20 ;", "SELECT libelle FROM PRODUIT HAVING 20 ;"], bonne: 1, expl: "SELECT colonnes, FROM table, WHERE condition : c'est l'ordre correct.", niv: 1 },
        { q: "La fonction SQL qui calcule une moyenne est :", choix: ["SUM", "COUNT", "MAX", "AVG"], bonne: 3, expl: "AVG (average) donne la moyenne ; SUM la somme, COUNT le nombre.", niv: 1 },
        { q: "On tente d'enregistrer une commande pour le client 999, qui n'existe pas. Quelle contrainte l'empêche ?", choix: ["La contrainte de domaine", "L'intégrité référentielle", "La contrainte de clé primaire", "Le tri décroissant"], bonne: 1, expl: "La clé étrangère doit correspondre à une clé primaire existante : c'est l'intégrité référentielle.", niv: 2 },
        { q: "Que renvoie SELECT COUNT(*) FROM COMMANDE WHERE numClient = 12 ; ?", choix: ["La liste des commandes de chaque client", "Le montant total des commandes du client 12", "Le nombre de commandes passées par le client 12", "Le nom du client 12"], bonne: 2, expl: "COUNT(*) compte les lignes retenues par le WHERE : les commandes du client 12.", niv: 2 },
        { q: "Pour obtenir le nombre de commandes de chaque client, on ajoute :", choix: ["GROUP BY numClient", "ORDER BY numClient", "WHERE numClient", "LIKE numClient"], bonne: 0, expl: "GROUP BY fait le calcul pour chaque groupe de lignes ayant le même numClient.", niv: 2 },
        { q: "Pour ne garder que les clients ayant passé au moins 3 commandes après un GROUP BY, on écrit :", choix: ["WHERE COUNT(*) >= 3", "ORDER BY COUNT(*) >= 3", "HAVING COUNT(*) >= 3", "LIKE '3%'"], bonne: 2, expl: "Une condition sur le résultat d'un calcul par groupe se met dans HAVING, pas dans WHERE.", niv: 2 },
        { q: "La condition WHERE ville IN ('Lyon', 'Nice') retient les clients :", choix: ["de Lyon et de Nice à la fois", "qui ne sont ni à Lyon ni à Nice", "de Lyon ou de Nice", "dont la ville commence par L ou N"], bonne: 2, expl: "IN retient les lignes dont la valeur est dans la liste : Lyon ou Nice.", niv: 2 },
        { q: "Dans LIGNE (#numCommande, #refProduit, quantite), pourquoi la clé est-elle composée des deux attributs ?", choix: ["Parce qu'une commande a plusieurs produits et qu'un produit est dans plusieurs commandes", "Parce que la quantité est unique", "Parce qu'une table doit avoir deux clés", "Pour trier les lignes"], bonne: 0, expl: "Seul le couple commande et produit identifie une ligne de façon unique.", niv: 3 },
        { q: "Une requête donne un panier moyen de 4 800 € pour une boulangerie. Que faut-il penser ?", choix: ["Le résultat est sûrement juste", "Les clients de cette boulangerie achètent sans doute en très grande quantité", "Il faut supprimer la table", "Il faut vérifier la requête : le résultat n'est pas vraisemblable"], bonne: 3, expl: "Contrôler la vraisemblance fait partie du travail : une jointure ou une condition est probablement fausse.", niv: 3 },
        { q: "Une enseigne croise ses ventes avec des données publiques de fréquentation des gares pour choisir un emplacement. Elle utilise :", choix: ["des traces de ses salariés", "des données ouvertes", "sa comptabilité interne", "un rançongiciel"], bonne: 1, expl: "Les données publiques libres de réutilisation sont des données ouvertes ; croisées avec les ventes, elles produisent une information nouvelle.", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-sig-6',
      fiche: `## La résolution de tous les problèmes de gestion est-elle automatisable ?

### Des faits aux traitements
- Pour automatiser, il faut traduire les faits en **données** et les **règles de gestion** en **traitements**. Une règle de gestion est une consigne de l'organisation : « remise de 5 % au-delà de 500 € d'achat ».
- Un **algorithme** est une suite finie d'instructions qui résout un problème. Un **programme** est cet algorithme écrit dans un **langage** que la machine sait exécuter (Python, par exemple).
- La **programmation** est une activité humaine : la machine n'exécute que ce qu'on lui a dit.

### Les objets d'un programme
- **Variable** : une case nommée dont la valeur peut changer. total = 0
- **Constante** : une valeur qui ne change pas pendant le programme. TAUX_TVA = 0.20
- **Paramètre** : une valeur donnée à une fonction quand on l'appelle.
- **Affectation** : donner une valeur à une variable avec le signe = (total = total + prix).
- **Types** : entier (12), flottant (12.5, avec un point), booléen (True ou False), caractère et **chaîne de caractères** ("Dupont"), **liste** ou tableau ([12, 8, 30]).

### La logique d'un traitement
- **Séquence** : les instructions s'exécutent l'une après l'autre.
- **Opérateurs** arithmétiques (+, -, *, /) et logiques (and, or, not), comparaisons (==, !=, <, >=).
- **Instruction conditionnelle** (test) : if montant > 500: puis, en retrait, remise = montant * 0.05 ; sinon, else: puis, en retrait, remise = 0
- **Boucle bornée** : on connaît le nombre de tours. for prix in panier: total = total + prix
- **Boucle non bornée** : on répète tant qu'une condition est vraie. while stock > seuil: ...
- **Fonction** : un bloc nommé, réutilisable, qui reçoit des paramètres et renvoie un résultat. def prix_ttc(ht): return ht * 1.2
- Dans un **tableur**, les **formules** jouent le même rôle : =SI(B2>500;B2*5%;0).

### Lire un programme
- Exemple, à lire ligne par ligne :
- def remise(montant, fidele):
- (retrait) if fidele and montant > 100: return montant * 0.10
- (retrait) return 0
- Pour un client fidèle qui achète 150 €, la fonction renvoie 15. Pour un client non fidèle, elle renvoie 0, quel que soit le montant.
- En Python, le **retrait** (les espaces en début de ligne) indique ce qui fait partie du if, de la boucle ou de la fonction.
- Méthode : suivre les valeurs des variables dans un petit tableau, tour par tour (on dit « exécuter à la main »).

### Tests et mise au point
- Tester, c'est exécuter le programme avec des **jeux d'essai** dont on connaît le résultat attendu : un cas normal, un cas **limite** (exactement 500 €), un cas anormal (montant négatif).
- Une erreur de **syntaxe** empêche le programme de démarrer ; une erreur de **logique** donne un résultat faux (> au lieu de >=).
- **Mise au point** (débogage) : trouver et corriger l'erreur, puis tester à nouveau.
- Adapter : quand une règle de gestion change (la remise passe à 8 %), on modifie le programme, idéalement une seule constante.

### Bibliothèques et API
- Une **bibliothèque** est un ensemble de fonctions déjà écrites, qu'on importe pour ne pas tout réécrire : import math, import statistics (statistics.mean(liste) donne la moyenne).
- Une **API** (interface de programmation d'applications) permet à un programme de demander des services ou des données à une autre application : obtenir un cours de change, le suivi d'un colis, la météo. On envoie une requête, on reçoit une réponse structurée.

### L'IA : des programmes qui apprennent
- L'**IA** regroupe des programmes capables de tâches qu'on pensait réservées aux humains : reconnaître une image, comprendre un texte, prévoir.
- Avec l'**apprentissage automatique**, le programme n'applique plus seulement des règles écrites : il apprend des régularités à partir de nombreux exemples.
- Apports : tri automatique du courrier, détection de fraude, prévision des ventes, robots conversationnels pour le service client, **automatisation robotisée des processus** (logiciels qui font les tâches répétitives).
- Limites : erreurs, biais hérités des données, décisions difficiles à expliquer, besoin de données personnelles, effets sur l'emploi.
- Tout n'est donc pas automatisable : les situations nouvelles, ambiguës, ou qui demandent jugement, empathie et responsabilité gardent besoin de l'humain. Le RGPD donne d'ailleurs le droit de ne pas faire l'objet d'une décision **entièrement automatisée** qui a des effets importants sur la personne, sauf exceptions.

### À retenir pour le bac
- Règle de gestion, algorithme, programme, langage.
- Variable, constante, paramètre, affectation, types.
- Test (if), boucle bornée (for), boucle non bornée (while), fonction (def ... return).
- Tester avec des cas normaux, limites et anormaux.
- Bibliothèque, API, IA : apports et limites ; l'humain reste nécessaire pour juger.`,
      cartes: [
        { q: "Qu'est-ce qu'une règle de gestion ?", r: "Une consigne de l'organisation que le traitement doit appliquer : « remise de 5 % au-delà de 500 € »." },
        { q: "Différence entre algorithme et programme ?", r: "L'algorithme est la suite d'instructions qui résout le problème ; le programme est cet algorithme écrit dans un langage exécutable." },
        { q: "Variable ou constante ?", r: "Une variable peut changer de valeur pendant le programme ; une constante garde la même (TAUX_TVA = 0.20)." },
        { q: "Qu'est-ce qu'une affectation ?", r: "Donner une valeur à une variable : total = total + prix." },
        { q: "Quels sont les principaux types de données ?", r: "Entier, flottant, booléen (True/False), caractère, chaîne de caractères, liste ou tableau." },
        { q: "Boucle bornée ou non bornée ?", r: "Bornée (for) : on connaît le nombre de tours. Non bornée (while) : on répète tant qu'une condition est vraie." },
        { q: "Qu'est-ce qu'une fonction ?", r: "Un bloc nommé et réutilisable qui reçoit des paramètres et renvoie un résultat : def prix_ttc(ht): return ht * 1.2" },
        { q: "À quoi sert le retrait en Python ?", r: "Les espaces en début de ligne indiquent les instructions qui font partie d'un if, d'une boucle ou d'une fonction." },
        { q: "Qu'est-ce qu'un jeu d'essai ?", r: "Des données de test dont on connaît le résultat attendu : un cas normal, un cas limite, un cas anormal." },
        { q: "Erreur de syntaxe ou erreur de logique ?", r: "Syntaxe : le programme ne démarre pas. Logique : il fonctionne mais donne un résultat faux (> au lieu de >=)." },
        { q: "Qu'est-ce qu'une bibliothèque ?", r: "Un ensemble de fonctions déjà écrites qu'on importe : import statistics, puis statistics.mean(liste)." },
        { q: "Qu'est-ce qu'une API ?", r: "Une interface qui permet à un programme de demander des données ou des services à une autre application (cours de change, suivi de colis)." },
        { q: "Qu'est-ce que l'apprentissage automatique ?", r: "Une forme d'IA où le programme apprend des régularités à partir de nombreux exemples au lieu de suivre seulement des règles écrites." },
        { q: "Quelles sont les limites de l'IA ?", r: "Erreurs, biais venus des données, décisions difficiles à expliquer, besoin de données personnelles, effets sur l'emploi." },
      ],
      quiz: [
        { q: "En Python, l'instruction qui répète un traitement pour chaque prix d'une liste est :", choix: ["if prix in panier:", "def prix(panier):", "for prix in panier:", "import panier"], bonne: 2, expl: "for parcourt la liste élément par élément : c'est une boucle bornée.", niv: 1 },
        { q: "La valeur True est de type :", choix: ["booléen", "chaîne de caractères", "entier", "flottant"], bonne: 0, expl: "True et False sont les deux valeurs du type booléen.", niv: 1 },
        { q: "TAUX_TVA = 0.20, qui ne change jamais dans le programme, est :", choix: ["une boucle", "une constante", "un paramètre de requête", "une bibliothèque"], bonne: 1, expl: "Une valeur fixe pendant tout le programme est une constante.", niv: 1 },
        { q: "Une API permet surtout :", choix: ["d'imprimer un document", "de dessiner un diagramme de Gantt", "de chiffrer un disque dur pour protéger les données en cas de vol de l'ordinateur", "à un programme d'obtenir des données ou des services d'une autre application"], bonne: 3, expl: "L'interface de programmation fait dialoguer deux applications par requêtes et réponses.", niv: 1 },
        { q: "def prix_ttc(ht): return ht * 1.2. Que renvoie prix_ttc(50) ?", choix: ["50", "60", "52", "56"], bonne: 1, expl: "50 x 1,2 = 60 : la fonction ajoute 20 % de TVA.", niv: 2 },
        { q: "total = 0, puis for p in [10, 20, 5]: total = total + p. Que vaut total à la fin ?", choix: ["5", "20", "0", "35"], bonne: 3, expl: "La boucle ajoute chaque prix : 0 + 10 + 20 + 5 = 35.", niv: 2 },
        { q: "Règle : remise si le montant est d'au moins 500 €. Le programme teste montant > 500. Avec 500 €, que se passe-t-il ?", choix: ["La remise est appliquée", "Aucune remise : c'est une erreur de logique", "Le programme ne démarre pas", "La remise est doublée"], bonne: 1, expl: "Il fallait >= 500 ; le cas limite révèle cette erreur de logique.", niv: 2 },
        { q: "Pour répéter une relance tant que la facture n'est pas payée, on utilise :", choix: ["une boucle while", "une boucle for sur 3 tours", "une constante", "une bibliothèque de dessin"], bonne: 0, expl: "On ne connaît pas le nombre de tours à l'avance : c'est une boucle non bornée, while.", niv: 2 },
        { q: "Quel jeu d'essai teste un cas limite pour la règle « remise dès 500 € » ?", choix: ["500 €", "120 €", "2 000 €", "Le mot « cinq cents »"], bonne: 0, expl: "500 € est exactement la valeur de la règle : c'est là que se cachent les erreurs de comparaison.", niv: 2 },
        { q: "def remise(m, fidele): if fidele and m > 100: return m * 0.1, sinon return 0. Que renvoie remise(80, True) ?", choix: ["8", "10", "80", "0"], bonne: 3, expl: "Les deux conditions sont exigées (and) : 80 n'est pas supérieur à 100, donc la fonction renvoie 0.", niv: 3 },
        { q: "Pourquoi un logiciel qui trie les candidatures par IA peut-il être injuste ?", choix: ["Parce qu'un ordinateur se fatigue", "Parce qu'il ne sait lire que les CV écrits à la main, et pas ceux envoyés en ligne", "Parce qu'il apprend des décisions passées, qui peuvent contenir des biais", "Parce qu'il est interdit de trier des CV"], bonne: 2, expl: "L'apprentissage automatique reproduit les biais de ses données d'exemple ; d'où la vigilance humaine.", niv: 3 },
        { q: "Quelle situation reste la plus difficile à automatiser ?", choix: ["Calculer la TVA de chaque facture", "Envoyer une relance automatique à date fixe aux clients en retard de paiement", "Annoncer une mauvaise nouvelle à un client en difficulté", "Additionner les ventes du jour"], bonne: 2, expl: "Les situations qui demandent jugement et empathie gardent besoin de l'humain ; les calculs répétitifs s'automatisent bien.", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-sig-7',
      fiche: `## La standardisation favorise-t-elle la circulation des informations ?

### Le document numérique
- La vie d'une organisation produit et échange sans cesse des documents : courriels, factures, contrats, pages web, dossiers.
- **Numériser** : transformer un document papier en fichier (scanner, photo). Le résultat est d'abord une **image** : on ne peut pas chercher dans le texte.
- La **reconnaissance optique de caractères** (OCR) transforme cette image en texte exploitable.
- **Structurer** : organiser le contenu en parties identifiées (titre, client, montant, date) pour qu'un programme puisse le lire.
- **Indexer** : associer au document des **mots-clés** et des **métadonnées** pour le retrouver.
- Plus un document est structuré, plus il circule et se traite facilement sans ressaisie.

### Les métadonnées
- Ce sont des **données sur les données** : auteur, date de création, titre, format, mots-clés, taille.
- Elles servent à classer, rechercher, trier, et à prouver (date d'un document). Elles peuvent aussi révéler des informations sensibles : on les vérifie avant de publier.

### Séparer le contenu et la présentation
- Un **langage de balisage** entoure le contenu de **balises** qui disent ce qu'il est.
- **HTML** décrit les pages web : <h1>Titre</h1>, <p>paragraphe</p>, <a href="...">lien</a>. La présentation (couleurs, polices) est confiée à une feuille de style **CSS**.
- **XML** permet de créer ses propres balises pour structurer des données : <facture><client>Dupont</client><montant>120.50</montant></facture>.
- **JSON** est un format de données très utilisé par les API : {"client": "Dupont", "montant": 120.50}.
- Un fichier bien formé respecte des règles : chaque balise ouverte est fermée, dans le bon ordre.
- Avantage : le même contenu peut être affiché sur un ordinateur, un téléphone ou imprimé, et lu par un programme.

### Hypertexte et référencement
- Un **hyperlien** relie un document à un autre : c'est la base du web.
- Le **référencement** vise à rendre une page visible dans les **moteurs de recherche** : titre clair, contenu utile, métadonnées, liens venant d'autres sites.
- La **syndication** (flux RSS) permet de recevoir automatiquement les nouveaux contenus d'un site.

### La gestion de contenu et la gestion documentaire
- Un **système de gestion de contenu** (CMS) permet de créer et de mettre à jour un site sans programmer : rédacteurs, validateurs et administrateur ont des rôles différents.
- La **gestion électronique des documents** (GED) range, indexe, partage, conserve et retrouve les documents : gestion des versions, droits d'accès, recherche par mots-clés, archivage.
- Le **moteur de recherche** interne retrouve un document grâce à l'indexation de son contenu et de ses métadonnées.

### La normalisation des échanges
- Pour que deux systèmes se comprennent, ils doivent parler le même langage : **protocoles** (règles de communication), **formats** standardisés (PDF, XML, JSON, CSV), **codage** des caractères (UTF-8, pour les accents).
- Exemple : la **facture électronique**. Ce n'est pas un simple PDF envoyé par courriel, mais une facture dans un format structuré, lisible par le logiciel du client. En France, toutes les entreprises assujetties à la TVA doivent pouvoir recevoir des factures électroniques à partir de **septembre 2026**, l'obligation d'émettre arrivant entre 2026 et 2027 selon leur taille.
- L'**échange de données informatisé** (EDI) relie depuis longtemps grandes entreprises et fournisseurs par des messages normalisés (commandes, avis d'expédition, factures).
- Supports de transmission : câbles en cuivre, fibre optique, ondes radio (wifi, réseau mobile).

### Apports et limites de la standardisation
- Apports : moins de ressaisies et d'erreurs, échanges plus rapides, traitements automatiques, archivage et recherche faciles, coopération avec les partenaires.
- Limites : coût d'adaptation des logiciels, formation, dépendance à des normes décidées par d'autres, rigidité pour les cas particuliers.

### À retenir pour le bac
- Numériser, structurer, indexer : trois opérations différentes.
- Métadonnées : données sur les données.
- Balisage (HTML, XML) : séparer le contenu de sa présentation.
- GED et CMS : gérer documents et contenus avec des droits et des versions.
- Normes et formats communs : moins de ressaisie, échanges automatiques (facture électronique, EDI).`,
      cartes: [
        { q: "Qu'est-ce que numériser un document ?", r: "Le transformer en fichier (scanner, photo). Le résultat est d'abord une image sans texte exploitable." },
        { q: "À quoi sert la reconnaissance optique de caractères ?", r: "À transformer l'image d'un texte en texte exploitable, dans lequel on peut chercher." },
        { q: "Qu'est-ce que structurer un document ?", r: "Organiser son contenu en parties identifiées (client, date, montant) pour qu'un programme puisse le lire." },
        { q: "Qu'est-ce qu'indexer un document ?", r: "Lui associer des mots-clés et des métadonnées pour le classer et le retrouver." },
        { q: "Qu'est-ce qu'une métadonnée ?", r: "Une donnée sur une donnée : auteur, date, titre, format, mots-clés d'un document." },
        { q: "Qu'est-ce qu'un langage de balisage ?", r: "Un langage qui entoure le contenu de balises disant ce qu'il est : HTML, XML." },
        { q: "Pourquoi séparer contenu et présentation ?", r: "Le même contenu peut être affiché sur écran, téléphone ou papier, et lu par un programme ; la présentation est confiée au CSS." },
        { q: "Qu'est-ce que XML ?", r: "Un langage de balisage où l'on crée ses propres balises pour structurer des données : <client>Dupont</client>." },
        { q: "Qu'est-ce qu'un fichier bien formé ?", r: "Un fichier où chaque balise ouverte est fermée, dans le bon ordre." },
        { q: "Qu'est-ce qu'une GED ?", r: "La gestion électronique des documents : ranger, indexer, partager, conserver et retrouver, avec versions et droits d'accès." },
        { q: "Qu'est-ce qu'un CMS ?", r: "Un système de gestion de contenu pour créer et mettre à jour un site sans programmer." },
        { q: "Qu'est-ce que le référencement ?", r: "Le travail qui rend une page visible dans les moteurs de recherche : titre, contenu, métadonnées, liens." },
        { q: "Qu'est-ce que l'EDI ?", r: "L'échange de données informatisé : des messages normalisés (commandes, factures) entre les systèmes de partenaires." },
        { q: "Une facture en PDF envoyée par courriel est-elle une facture électronique ?", r: "Non : la facture électronique est structurée dans un format normalisé, lisible directement par le logiciel du client." },
      ],
      quiz: [
        { q: "Les données « auteur, date de création, mots-clés » d'un document sont :", choix: ["des balises HTML", "des protocoles", "des clés primaires", "des métadonnées"], bonne: 3, expl: "Ce sont des données qui décrivent le document : des métadonnées.", niv: 1 },
        { q: "Scanner une facture papier, c'est :", choix: ["l'indexer", "la structurer", "la numériser", "la chiffrer"], bonne: 2, expl: "Passer du papier au fichier, c'est numériser ; structurer et indexer sont d'autres opérations.", niv: 1 },
        { q: "En HTML, la balise qui crée un lien est :", choix: ["<p>", "<h1>", "<a>", "<img>"], bonne: 2, expl: "La balise <a href=\"...\"> crée un hyperlien ; <p> un paragraphe, <h1> un titre.", niv: 1 },
        { q: "Un logiciel qui range, indexe et gère les versions des documents est :", choix: ["une GED", "un pare-feu", "un tableur", "une messagerie"], bonne: 0, expl: "La gestion électronique des documents assure classement, recherche, versions et droits.", niv: 1 },
        { q: "Quel extrait XML est bien formé ?", choix: ["<client>Dupont<client>", "<client>Dupont</nom>", "<client><nom>Dupont</client></nom>", "<client><nom>Dupont</nom></client>"], bonne: 3, expl: "Chaque balise est fermée, et dans l'ordre inverse de son ouverture.", niv: 2 },
        { q: "Après numérisation, on ne peut pas chercher un mot dans le contrat. Quelle opération manque ?", choix: ["La syndication", "La reconnaissance optique de caractères", "Le chiffrement", "La compression"], bonne: 1, expl: "La numérisation donne une image ; l'OCR la transforme en texte où l'on peut chercher.", niv: 2 },
        { q: "Pourquoi confier la mise en forme d'une page web à une feuille CSS ?", choix: ["Pour accélérer le réseau", "Pour séparer le contenu de sa présentation", "Pour protéger les données personnelles", "Pour remplacer le HTML"], bonne: 1, expl: "Le HTML décrit le contenu, le CSS l'apparence : on peut changer l'un sans toucher à l'autre.", niv: 2 },
        { q: "L'intérêt principal de la facture électronique structurée est :", choix: ["d'être imprimée en couleur", "de supprimer la TVA", "d'être intégrée sans ressaisie dans le logiciel du client", "d'éviter tout archivage des factures pendant les dix années suivantes"], bonne: 2, expl: "Le format normalisé est lu directement par le logiciel du destinataire : moins de saisie et d'erreurs.", niv: 2 },
        { q: "Un fournisseur et un distributeur échangent commandes et factures par messages normalisés entre leurs systèmes. C'est :", choix: ["un CMS", "de l'EDI", "du référencement", "de l'hameçonnage"], bonne: 1, expl: "L'échange de données informatisé relie les systèmes des partenaires par des messages normalisés.", niv: 2 },
        { q: "Avant de publier un rapport en ligne, pourquoi vérifier ses métadonnées ?", choix: ["Parce qu'elles peuvent révéler l'auteur ou des informations internes", "Parce qu'elles effacent le contenu", "Parce qu'elles bloquent le référencement de la page dans les moteurs de recherche", "Parce qu'elles augmentent la taille du réseau"], bonne: 0, expl: "Les métadonnées peuvent contenir noms, dates ou chemins internes qu'on ne veut pas diffuser.", niv: 3 },
        { q: "Quelle est une limite de la standardisation des échanges ?", choix: ["Plus de ressaisies", "Plus d'erreurs de lecture", "La perte de la possibilité d'archiver les documents échangés avec les partenaires", "Le coût d'adaptation des logiciels et la rigidité pour les cas particuliers"], bonne: 3, expl: "La norme réduit ressaisies et erreurs, mais coûte à mettre en place et laisse peu de place aux exceptions.", niv: 3 },
        { q: "Une PME veut que les rédacteurs mettent à jour le site, mais qu'un responsable valide avant publication. Elle choisit :", choix: ["un CMS avec des rôles différents", "un tableur partagé", "une boucle while", "un câble en fibre optique"], bonne: 0, expl: "Le système de gestion de contenu attribue des rôles : rédacteur, validateur, administrateur.", niv: 3 },
      ],
    },
    {
      chapitre: 'stmg-sig-8',
      fiche: `## Comment les technologies réseaux répondent-elles aux besoins de collaboration ?

### Le réseau, infrastructure du SI
- Un **réseau** relie des équipements pour partager des ressources (fichiers, imprimantes, applications, accès internet).
- **Réseau local** (LAN) : un site (une agence, un lycée). **Réseau étendu** (WAN) : relie des sites éloignés ; internet est le plus grand.
- Le **wifi** est un réseau local sans fil ; il se protège par un chiffrement (WPA2 ou WPA3) et un mot de passe solide.

### Les composants
- **Hôtes** : postes, serveurs, imprimantes, téléphones. Chacun a une **carte réseau** avec une **adresse MAC** (physique, fixée par le fabricant).
- **Commutateur** (switch) : relie les hôtes d'un même réseau local et transmet les données au bon destinataire.
- **Routeur** : relie des réseaux différents entre eux, par exemple le réseau local et internet. La **box** de l'entreprise joue ce rôle.
- **Point d'accès wifi** : relie les appareils sans fil au réseau local.
- **Pare-feu** : filtre les échanges selon des règles.
- **Serveur** : ordinateur qui rend un service aux autres (fichiers, messagerie, site web, base de données).
- **Topologie** : la façon dont les éléments sont reliés ; aujourd'hui surtout **en étoile** autour d'un commutateur.

### L'adressage
- Chaque hôte a une **adresse IP**. En IPv4, elle compte 4 nombres de 0 à 255 : 192.168.1.25.
- Le **masque** sépare la partie **réseau** et la partie **hôte**. Avec le masque 255.255.255.0 (noté /24), les trois premiers nombres désignent le réseau : 192.168.1.25 est dans le réseau 192.168.1.0.
- Deux hôtes du même réseau se parlent directement ; sinon, ils passent par la **passerelle** (le routeur), par exemple 192.168.1.1.
- Dans un réseau /24, on peut adresser 254 hôtes (de .1 à .254) : l'adresse en .0 désigne le réseau et celle en .255 sert à la diffusion.
- Les adresses 192.168.x.x, 10.x.x.x et 172.16 à 172.31.x.x sont **privées** : utilisées dans les réseaux internes, elles ne circulent pas sur internet.
- **IPv6** (adresses beaucoup plus longues) répond au manque d'adresses IPv4.
- Le **DHCP** attribue automatiquement une configuration aux hôtes : adresse IP, masque, passerelle, serveur DNS.

### Accéder à une ressource distante
- **Modèle client-serveur** : le client demande, le serveur répond.
- Le **DNS** traduit un nom de domaine (www.exemple.fr) en adresse IP. Sans lui, il faudrait retenir des suites de chiffres.
- L'**URL** donne l'adresse complète d'une ressource : protocole, nom de domaine, chemin. https://www.exemple.fr/contact
- **Protocoles** : **TCP/IP** (acheminer les données en paquets et vérifier leur arrivée), **HTTP** (pages web) et **HTTPS** (HTTP chiffré, avec un cadenas), protocoles de messagerie (SMTP pour envoyer ; IMAP pour consulter).
- Étapes d'une visite de site : le navigateur demande au DNS l'adresse IP du nom, envoie une **requête HTTP** au serveur, qui renvoie la page.

### Centralisation ou décentralisation
- **Architecture centralisée** : données et traitements sur un site ou un serveur central. Avantages : contrôle, cohérence, économies d'échelle. Risques : point unique de panne, saturation.
- **Architecture décentralisée** (distribuée) : les données sont réparties entre plusieurs sites. Avantages : proximité, résistance aux pannes. Limite : il faut **synchroniser** pour garder une information unique et à jour.

### La chaîne de blocs (blockchain)
- Un registre **distribué** : chaque participant garde une copie des transactions, regroupées en **blocs** liés entre eux. Modifier un ancien bloc obligerait à modifier tous les suivants sur la majorité des copies : le registre est donc très difficile à falsifier.
- Usages : cryptomonnaies, traçabilité alimentaire, certificats de diplômes, contrats qui s'exécutent seuls.
- Enjeux : consommation d'énergie pour certaines chaînes, absence d'organe central de contrôle, questions juridiques, disparition de certains intermédiaires.

### L'informatique en nuage (cloud)
- Utiliser, par internet, des ressources informatiques hébergées par un prestataire et payées selon l'usage.
- Trois niveaux de **services** : **SaaS** (un logiciel prêt à l'emploi : messagerie, suite bureautique en ligne), **PaaS** (une plateforme pour développer et faire tourner ses applications), **IaaS** (des serveurs et du stockage à la demande).
- Apports : **mobilité** (accès de partout), **collaboration** (documents partagés, modifiés à plusieurs en même temps), souplesse, pas d'investissement matériel.
- Risques : dépendance à la connexion et au prestataire, localisation et confidentialité des données (RGPD : savoir où elles sont hébergées), coûts qui augmentent avec l'usage.
- Il s'intègre à l'architecture réseau : accès sécurisé (authentification forte, **VPN** pour créer un tunnel chiffré vers le réseau de l'entreprise).

### À retenir pour le bac
- Commutateur : relie les hôtes d'un réseau ; routeur : relie des réseaux.
- IP, masque, passerelle, DNS : la configuration d'un hôte ; le DHCP la distribue.
- DNS : nom vers adresse IP ; HTTPS : web chiffré ; client-serveur.
- Centralisé : contrôle mais point unique de panne ; décentralisé : proximité mais synchronisation.
- Cloud : SaaS, PaaS, IaaS ; mobilité et collaboration, mais dépendance et données à protéger.`,
      cartes: [
        { q: "Différence entre réseau local et réseau étendu ?", r: "Le réseau local (LAN) couvre un site ; le réseau étendu (WAN) relie des sites éloignés, comme internet." },
        { q: "Rôle d'un commutateur (switch) ?", r: "Relier les hôtes d'un même réseau local et transmettre les données au bon destinataire." },
        { q: "Rôle d'un routeur ?", r: "Relier des réseaux différents, par exemple le réseau local et internet." },
        { q: "Qu'est-ce qu'une adresse IP ?", r: "L'adresse d'un hôte sur le réseau. En IPv4 : quatre nombres de 0 à 255, comme 192.168.1.25." },
        { q: "À quoi sert le masque de sous-réseau ?", r: "À séparer la partie réseau et la partie hôte de l'adresse IP. Avec 255.255.255.0, les trois premiers nombres désignent le réseau." },
        { q: "Qu'est-ce que la passerelle ?", r: "L'adresse du routeur que l'hôte utilise pour joindre un autre réseau (internet)." },
        { q: "Combien d'hôtes dans un réseau en /24 ?", r: "254 : de .1 à .254 ; l'adresse en .0 désigne le réseau et celle en .255 sert à la diffusion." },
        { q: "Qu'est-ce qu'une adresse IP privée ?", r: "Une adresse des plages 10.x.x.x, 172.16 à 172.31.x.x ou 192.168.x.x, utilisée en interne et non routée sur internet." },
        { q: "Rôle du DHCP ?", r: "Attribuer automatiquement aux hôtes leur adresse IP, leur masque, leur passerelle et leur serveur DNS." },
        { q: "Rôle du DNS ?", r: "Traduire un nom de domaine (www.exemple.fr) en adresse IP." },
        { q: "HTTP ou HTTPS ?", r: "HTTPS est la version chiffrée de HTTP : les échanges avec le site ne peuvent pas être lus en chemin." },
        { q: "Qu'est-ce qu'une chaîne de blocs ?", r: "Un registre distribué : chaque participant garde une copie des transactions, rangées en blocs liés, très difficiles à falsifier." },
        { q: "Quels sont les trois niveaux de services du cloud ?", r: "SaaS (logiciel prêt à l'emploi), PaaS (plateforme pour développer), IaaS (serveurs et stockage à la demande)." },
        { q: "Apports et risques du cloud ?", r: "Apports : mobilité, collaboration, souplesse, pas d'achat de matériel. Risques : dépendance, connexion, confidentialité et localisation des données." },
        { q: "À quoi sert un VPN ?", r: "À créer un tunnel chiffré entre un appareil distant et le réseau de l'entreprise." },
      ],
      quiz: [
        { q: "L'équipement qui relie le réseau local de l'entreprise à internet est :", choix: ["le commutateur", "l'imprimante", "le routeur", "le serveur DNS"], bonne: 2, expl: "Le routeur relie des réseaux différents ; le commutateur relie les postes d'un même réseau.", niv: 1 },
        { q: "Le service qui traduit www.exemple.fr en adresse IP est :", choix: ["le DHCP", "le DNS", "le HTTPS", "le SaaS"], bonne: 1, expl: "Le DNS associe les noms de domaine aux adresses IP.", niv: 1 },
        { q: "Une messagerie en ligne utilisée par abonnement, sans rien installer, est un service :", choix: ["SaaS", "PaaS", "IaaS", "EDI"], bonne: 0, expl: "Un logiciel prêt à l'emploi fourni par internet relève du SaaS.", niv: 1 },
        { q: "Le service qui donne automatiquement leur adresse IP aux postes est :", choix: ["le DHCP", "le DNS", "le pare-feu", "le HTML"], bonne: 0, expl: "Le DHCP distribue adresse, masque, passerelle et serveur DNS.", niv: 1 },
        { q: "Masque 255.255.255.0. Quel poste est dans le même réseau que 192.168.1.25 ?", choix: ["192.168.2.25", "192.168.1.200", "192.169.1.25", "10.168.1.25"], bonne: 1, expl: "Les trois premiers nombres doivent être identiques : 192.168.1.", niv: 2 },
        { q: "Combien d'hôtes peut-on adresser dans le réseau 192.168.1.0 /24 ?", choix: ["253", "256", "255", "254"], bonne: 3, expl: "256 adresses moins celle du réseau (.0) et celle de diffusion (.255) : 254 hôtes.", niv: 2 },
        { q: "Un poste a une bonne adresse IP mais n'accède à aucun site extérieur ; les postes voisins répondent. Quel réglage vérifier d'abord ?", choix: ["La passerelle", "La taille de l'écran", "La version du tableur", "Le nom de l'imprimante"], bonne: 0, expl: "Le réseau local marche ; pour sortir vers internet, le poste a besoin de la bonne passerelle (le routeur).", niv: 2 },
        { q: "Le cadenas affiché avec HTTPS signifie que :", choix: ["le site est sans virus", "les échanges entre le navigateur et le site sont chiffrés", "le site appartient à l'État", "la page s'affiche plus vite grâce à un serveur plus puissant que les autres"], bonne: 1, expl: "HTTPS chiffre la communication ; il ne garantit pas que le site soit honnête.", niv: 2 },
        { q: "L'adresse 192.168.10.4 est :", choix: ["une adresse publique d'internet", "une URL", "une adresse MAC", "une adresse privée, utilisée en réseau interne"], bonne: 3, expl: "La plage 192.168.x.x est réservée aux réseaux privés.", niv: 2 },
        { q: "Quel est le principal risque d'une architecture centralisée ?", choix: ["Un manque de cohérence des données", "Une synchronisation trop complexe", "Un point unique de panne qui arrête tout", "L'impossibilité de faire des sauvegardes"], bonne: 2, expl: "Si le site central tombe, tout s'arrête ; la synchronisation complexe est le défaut du décentralisé.", niv: 3 },
        { q: "Pourquoi une chaîne de blocs est-elle très difficile à falsifier ?", choix: ["Parce qu'un serveur central, gardé par une autorité publique, contrôle chaque bloc", "Parce qu'elle est écrite sur papier", "Parce que chaque participant garde une copie et que les blocs sont liés entre eux", "Parce qu'elle est effacée chaque jour"], bonne: 2, expl: "Le registre est distribué et chaîné : modifier un bloc obligerait à modifier la majorité des copies.", niv: 3 },
        { q: "Une association veut que ses bénévoles modifient à plusieurs, de chez eux, les mêmes documents. Quelle solution répond le mieux ?", choix: ["Une imprimante réseau", "Un disque dur externe rangé dans le bureau du président de l'association", "Des clés USB envoyées par la poste", "Une suite bureautique en ligne dans le cloud"], bonne: 3, expl: "Le cloud offre mobilité et édition simultanée ; il faut seulement protéger l'accès et vérifier où sont hébergées les données.", niv: 3 },
      ],
    },
  ],
  methode: [
    { id: 'stmg-sig-m1', mat: 'stmg-sig', titre: 'Comment cet enseignement est évalué au bac',
      formules: ['Pas d\'écrit propre à l\'enseignement spécifique', 'Grand oral : une question préparée à partir du projet mené en classe'],
      vu: ['Note de service du 11 septembre 2026 (BO spécial n° 4) : l\'écrit de management porte sur la partie enseignement commun du programme de terminale', 'Grand oral de la voie technologique : les questions s\'appuient sur le projet mené dans l\'enseignement spécifique'],
      pts: 'Grand oral noté sur 20 ; écrit de management noté sur 20 (coefficient 16)',
      attendu: 'L\'enseignement spécifique sert surtout au grand oral : on y présente une question issue du projet de SI mené pendant l\'année. Les notions de numérique (données personnelles, transformation digitale, circulation des informations) aident aussi pour certaines questions de l\'écrit commun.',
      etapes: ['Mener sérieusement le projet de l\'année et garder des traces : besoins, schémas, requêtes, captures, indicateurs.', 'Formuler deux questions précises reliées au projet et au programme.', 'Préparer pour chacune un exposé de 5 minutes avec des notions exactes du programme.', 'S\'entraîner à expliquer simplement une requête, un schéma ou un choix technique.', 'Revoir les notions du chapitre lié à chaque question.'],
      mots: ['système d\'information', 'processus', 'base de données', 'sécurité', 'projet', 'indicateur', 'cloud'],
      pieges: ['Raconter le projet sans le relier à une question du programme.', 'Utiliser un vocabulaire technique faux ou approximatif.', 'Ne pas savoir expliquer ce qu\'on a soi-même réalisé.'],
      cas: 'Projet inventé : la classe a créé une petite base de données pour l\'association sportive fictive « Les Foulées de Valmont » : adhérents, cotisations et inscriptions aux courses.',
      question: 'Proposez une question de grand oral reliée à ce projet et au programme.',
      modele: '« En quoi une base de données relationnelle améliore-t-elle la gestion des adhérents d\'une association ? » Elle se relie à la question 3.1 (produire de l\'information à partir de données) et à la question 1.1 (gestion centralisée et qualité des données). L\'exposé peut montrer le schéma relationnel, une requête qui liste les cotisations impayées, puis les règles du RGPD sur les données des adhérents.',
      grille: ['La question est précise et ouverte', 'Elle est reliée au projet', 'Elle mobilise au moins deux notions du programme', 'Un exemple concret est prévu'] },
    { id: 'stmg-sig-m2', mat: 'stmg-sig', titre: 'Grand oral : construire son exposé à partir du projet',
      formules: ['20 minutes de préparation, puis 20 minutes d\'épreuve', 'Environ 5 minutes d\'exposé sans note rédigée, 10 minutes d\'échange sur la question, 5 minutes sur le projet d\'orientation'],
      vu: ['Grand oral de chaque session de la voie technologique'],
      pts: 'Note sur 20 : qualité orale, construction de l\'argumentation, maîtrise des connaissances, interaction avec le jury',
      attendu: 'Un exposé clair qui répond à la question, avec un plan annoncé, des notions exactes et un exemple tiré du projet. Pendant l\'échange, le jury vérifie qu\'on comprend vraiment ce qu\'on a fait : pourquoi ce choix technique, quelles limites, quelles améliorations.',
      etapes: ['Introduction : accroche tirée du projet, définition des notions, annonce de la question et du plan.', 'Deux parties : ce que l\'outil apporte, puis ses limites ou ses conditions de réussite.', 'Un exemple concret dans chaque partie : une requête, un indicateur, un schéma, une mesure de sécurité.', 'Conclusion : réponse nette à la question et ouverture.', 'Préparer les questions probables : sécurité, RGPD, coût, alternatives.'],
      mots: ['en effet', 'par exemple, dans notre projet', 'cependant', 'c\'est pourquoi', 'pour conclure'],
      pieges: ['Lire ses notes.', 'Trop de détails techniques sans expliquer à quoi ils servent.', 'Pas de réponse claire à la question.', 'Ignorer les limites de sa solution.'],
      cas: 'Question préparée : « Le passage au cloud facilite-t-il le travail collaboratif d\'une petite entreprise ? » Le projet de l\'année portait sur une agence de voyages fictive qui partage ses dossiers clients.',
      question: 'Rédigez le plan détaillé de l\'exposé.',
      modele: 'Introduction : dans l\'agence fictive étudiée, trois conseillers modifiaient les mêmes dossiers envoyés par courriel, avec des versions contradictoires. Le cloud consiste à utiliser par internet des ressources hébergées par un prestataire. I. Le cloud facilite la collaboration : accès de partout (mobilité), modification à plusieurs du même document, versions gérées, pas d\'achat de serveur (service SaaS). II. Mais il impose des conditions : une connexion fiable, une authentification forte, des droits d\'accès, un hébergeur qui respecte le RGPD et une attention à la dépendance au prestataire. Conclusion : oui, à condition de sécuriser l\'accès et de choisir l\'hébergeur avec soin.',
      grille: ['Notions définies dès l\'introduction', 'Plan en deux parties annoncé', 'Exemples tirés du projet', 'Limites et conditions présentées', 'Réponse claire à la question'] },
    { id: 'stmg-sig-m3', mat: 'stmg-sig', titre: 'Lire un schéma relationnel et écrire une requête SQL',
      formules: ['Rédiger la requête qui affiche…', 'Expliquer le résultat de la requête suivante', 'Justifier la présence de la clé étrangère'],
      vu: ['Programme officiel, question 3.1 : manipuler les données d\'une base à l\'aide de requêtes, interpréter la structure d\'une base relationnelle'],
      pts: 'Compétence centrale du projet et de l\'échange au grand oral',
      attendu: 'Repérer clés primaires et clés étrangères, choisir les tables utiles, écrire une requête correcte (sélection, condition, jointure, calcul, regroupement), puis contrôler que le résultat est vraisemblable.',
      etapes: ['Lire le besoin : quelles colonnes afficher, quelles lignes garder, quel calcul.', 'Repérer les tables qui contiennent ces informations.', 'Si plusieurs tables : écrire la jointure clé étrangère = clé primaire.', 'Écrire la condition (WHERE), le calcul (COUNT, SUM, AVG) et le regroupement (GROUP BY, HAVING).', 'Trier si demandé (ORDER BY) et vérifier la vraisemblance du résultat.'],
      mots: ['SELECT', 'FROM', 'INNER JOIN ... ON', 'WHERE', 'GROUP BY', 'HAVING', 'ORDER BY'],
      pieges: ['Oublier la jointure : le résultat mélange toutes les lignes.', 'Mettre une condition sur COUNT dans WHERE au lieu de HAVING.', 'Oublier les apostrophes autour d\'un texte.', 'Afficher une colonne qui n\'est pas dans le GROUP BY.'],
      cas: 'Base inventée de l\'association « Les Foulées de Valmont » : ADHERENT (numAdh, nom, ville) ; INSCRIPTION (numInscr, dateInscr, #numAdh, #codeCourse) ; COURSE (codeCourse, libelle, distanceKm).',
      question: 'Écrivez la requête qui affiche le nom de chaque adhérent et le nombre de ses inscriptions, pour ceux qui en ont au moins 2.',
      modele: 'SELECT nom, COUNT(*) FROM ADHERENT INNER JOIN INSCRIPTION ON ADHERENT.numAdh = INSCRIPTION.numAdh GROUP BY ADHERENT.numAdh, nom HAVING COUNT(*) >= 2 ; La jointure relie chaque inscription à son adhérent, GROUP BY compte par adhérent, HAVING ne garde que ceux qui ont au moins deux inscriptions.',
      grille: ['Bonnes tables et bonne jointure', 'Calcul COUNT correct', 'Regroupement par adhérent', 'Condition dans HAVING', 'Syntaxe correcte'] },
    { id: 'stmg-sig-m4', mat: 'stmg-sig', titre: 'Lire, tester et adapter un programme',
      formules: ['Indiquer ce que renvoie la fonction pour…', 'Proposer un jeu d\'essai', 'Modifier le programme pour prendre en compte la nouvelle règle'],
      vu: ['Programme officiel, question 3.2 : expliciter le comportement d\'un programme à la lecture de son code source, adapter une solution à un nouveau besoin de gestion'],
      pts: 'Utile au projet et à l\'échange au grand oral',
      attendu: 'Suivre l\'exécution à la main, dire le résultat, repérer une erreur grâce à un cas limite, puis modifier le programme pour une nouvelle règle de gestion.',
      etapes: ['Repérer les paramètres et ce que renvoie la fonction.', 'Faire un petit tableau des variables et le remplir tour par tour.', 'Tester un cas normal, un cas limite, un cas anormal.', 'Comparer avec la règle de gestion écrite en français.', 'Modifier le minimum : une constante ou une condition.'],
      mots: ['variable', 'paramètre', 'condition', 'boucle', 'fonction', 'jeu d\'essai', 'cas limite'],
      pieges: ['Confondre > et >=.', 'Oublier le retrait en Python.', 'Ne tester qu\'un cas normal.'],
      cas: 'Programme inventé pour une boutique : def frais_port(montant): if montant > 60: return 0 ; sinon return 4.90. Nouvelle règle : livraison gratuite dès 50 € d\'achat.',
      question: 'Que renvoie frais_port(60) ? Adaptez la fonction à la nouvelle règle et proposez un jeu d\'essai.',
      modele: 'Avec 60 €, la condition montant > 60 est fausse : la fonction renvoie 4.90. Nouvelle version : def frais_port(montant): if montant >= 50: return 0, sinon return 4.90. Jeu d\'essai : 30 € donne 4.90 (cas normal), 50 € donne 0 (cas limite), 49.99 € donne 4.90 (juste sous la limite).',
      grille: ['Résultat de l\'exécution juste', 'Comparaison >= corrigée', 'Cas limite testé', 'Explication claire'] },
    { id: 'stmg-sig-m5', mat: 'stmg-sig', titre: 'Configurer un poste et diagnostiquer un accès réseau',
      formules: ['Compléter la configuration réseau du poste', 'Expliquer pourquoi le poste n\'accède pas à internet', 'Identifier les protocoles mis en jeu'],
      vu: ['Programme officiel, question 4.2 : repérer les éléments de la configuration d\'un hôte, identifier les protocoles de l\'accès à une ressource distante'],
      pts: 'Utile au projet et à l\'échange au grand oral',
      attendu: 'Donner une configuration cohérente (adresse IP du bon réseau, masque, passerelle, DNS), expliquer le rôle de chaque élément et localiser une panne par étapes.',
      etapes: ['Repérer le réseau grâce au masque (en /24, les trois premiers nombres).', 'Choisir une adresse libre du même réseau, ni .0 ni .255.', 'Indiquer la passerelle (le routeur) et le serveur DNS.', 'En cas de panne : tester le réseau local, puis la passerelle, puis le DNS.', 'Citer les protocoles : DHCP, DNS, HTTP ou HTTPS, TCP/IP.'],
      mots: ['adresse IP', 'masque', 'passerelle', 'DNS', 'DHCP', 'routeur', 'commutateur'],
      pieges: ['Une adresse dans un autre réseau que la passerelle.', 'Donner une adresse déjà utilisée.', 'Confondre routeur et commutateur.'],
      cas: 'Réseau inventé du cabinet comptable fictif « Arnaud et associés » : réseau 192.168.5.0 /24, routeur en 192.168.5.1, serveur DNS en 192.168.5.2. Un nouveau poste est configuré en 192.168.6.30, masque 255.255.255.0, passerelle 192.168.5.1.',
      question: 'Pourquoi ce poste ne communique-t-il pas ? Proposez une configuration correcte.',
      modele: 'Avec le masque 255.255.255.0, le réseau est désigné par les trois premiers nombres : le poste est dans 192.168.6.0 alors que le cabinet et sa passerelle sont dans 192.168.5.0. Il ne peut donc joindre ni les autres postes ni la passerelle. Configuration correcte : adresse 192.168.5.30 (si elle est libre), masque 255.255.255.0, passerelle 192.168.5.1, DNS 192.168.5.2. Le plus simple est d\'activer le DHCP, qui distribue une configuration sans erreur.',
      grille: ['Erreur de réseau repérée grâce au masque', 'Adresse correcte proposée', 'Passerelle et DNS justes', 'Rôle du DHCP évoqué'] },
  ],
  sujets: [],
};
