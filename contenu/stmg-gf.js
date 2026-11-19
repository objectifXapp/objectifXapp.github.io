// Gestion et finance (enseignement spécifique de management, sciences de gestion et numérique) — terminale STMG. Sources : voir matiere.sources.
// Programme : arrêté du 19 juillet 2019 (BO spécial n° 8 du 25 juillet 2019, annexe 2), partie « Enseignement spécifique de gestion et finance » :
// 3 thèmes (appliquer les règles comptables, analyser la situation de l'entreprise, accompagner la prise de décision), 10 questions.
// Un chapitre par question, dans l'ordre officiel.
// Épreuve : la note de service du BO spécial n° 4 du 17 septembre 2026 (session 2027) fait porter l'écrit de management, sciences de gestion
// et numérique sur l'enseignement commun. L'enseignement spécifique n'a donc pas d'écrit à lui : il sert de support au projet présenté au grand oral
// (coefficient 12 en voie technologique à partir de 2027), et ses notions aident aux questions financières de l'écrit commun.
// Tous les calculs des fiches, cartes, quiz et questions types ont été refaits et vérifiés.
export default {
  matiere: {
    id: 'stmg-gf',
    nom: 'Gestion et finance',
    voie: 'stmg',
    epreuve: { type: 'oral', duree: 20, coef: 12, quand: 'fin juin - début juillet', note: 'Pas d\'écrit propre : l\'écrit de management (4 h, coefficient 16) porte sur l\'enseignement commun. La gestion et finance sert au grand oral : 20 minutes de préparation, puis 10 minutes d\'exposé sur une question liée au projet mené en gestion et finance et 10 minutes d\'échange avec le jury.' },
    sources: [
      'https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/14/1/spe262_annexe2_1159141.pdf',
      'https://www.education.gouv.fr/bo/19/Special8/MENE1921262A.htm',
      'https://www.education.gouv.fr/bo/2026/Special4/MENE2622652N',
      'https://www.education.gouv.fr/bo/2026/Special4/MENE2622701N',
      'https://eduscol.education.gouv.fr/5862/programmes-et-ressources-en-serie-stmg',
      'https://www.anc.gouv.fr (Plan comptable général)',
      'https://www.legifrance.gouv.fr (Code de commerce : réserve légale, affectation du résultat)',
      'https://www.impots.gouv.fr (TVA, facturation électronique)',
    ],
    chapitres: [
      { id: 'stmg-gf-1', t: 'Qu\'est-ce qu\'un système d\'information comptable et que lui apportent les technologies numériques ?', theme: 'Appliquer les règles comptables' },
      { id: 'stmg-gf-2', t: 'Acheter et vendre, quelle traduction comptable ?', theme: 'Appliquer les règles comptables' },
      { id: 'stmg-gf-3', t: 'Investir, quelle traduction comptable ?', theme: 'Appliquer les règles comptables' },
      { id: 'stmg-gf-4', t: 'Quelles sont les conditions pour communiquer une information comptable fidèle ?', theme: 'Appliquer les règles comptables' },
      { id: 'stmg-gf-5', t: 'Mesurer la performance, des approches multiples ?', theme: 'Analyser la situation de l\'entreprise' },
      { id: 'stmg-gf-6', t: 'Quelle structure financière pour assurer la pérennité de l\'entreprise ?', theme: 'Analyser la situation de l\'entreprise' },
      { id: 'stmg-gf-7', t: 'Quels critères d\'arbitrage entre les modalités de financement de l\'organisation ?', theme: 'Accompagner la prise de décision' },
      { id: 'stmg-gf-8', t: 'Optimiser la trésorerie, une nécessité ?', theme: 'Accompagner la prise de décision' },
      { id: 'stmg-gf-9', t: 'L\'affectation du résultat, un choix qui engage l\'avenir ?', theme: 'Accompagner la prise de décision' },
      { id: 'stmg-gf-10', t: 'Qu\'apporte l\'analyse des coûts à la prise de décision ?', theme: 'Accompagner la prise de décision' },
    ],
  },
  paquets: [
    // ---------------------------------------------------------------- 1.1 Système d'information comptable
    {
      chapitre: 'stmg-gf-1',
      fiche: `## Qu'est-ce qu'un système d'information comptable ?

### Le rôle du système d'information comptable (SIC)
- Le **système d'information comptable** permet de **saisir**, **classer** et **enregistrer** les opérations chiffrées de l'organisation, puis de présenter des états qui donnent une **image fidèle** de son patrimoine, de sa situation financière et de son résultat.
- En **interne**, ses informations servent à prendre des **décisions de gestion**. En **externe**, elles servent de **preuve** (clients, fournisseurs, banques) et à calculer les **impôts**.
- Les règles comptables françaises sont fixées par l'**Autorité des normes comptables** (ANC) ; le **Plan comptable général** (PCG) contient les règles d'élaboration des comptes annuels.

### Les notions de base
- La **partie double** : chaque opération est enregistrée au **débit** d'au moins un compte et au **crédit** d'au moins un autre, pour le même montant. Le total des débits est toujours égal au total des crédits.
- **Flux et stock** : un flux est un mouvement pendant une période (les ventes du mois) ; un stock est une valeur à une date (l'argent en banque le 31 décembre).
- **Créance et dette** : une créance est une somme qu'on doit nous payer (un client qui paiera plus tard) ; une dette est une somme que l'on doit payer (à un fournisseur).
- **Actif et passif** : l'actif est ce que l'entreprise possède et contrôle (machines, stocks, créances, trésorerie) ; le passif est d'où viennent ses ressources (capitaux propres, dettes).
- **Charge et produit** : une charge diminue le résultat (achats, salaires) ; un produit l'augmente (ventes).
- Le **plan de comptes** classe les comptes par numéro : classe 1 (capitaux), 2 (immobilisations), 3 (stocks), 4 (tiers : clients, fournisseurs, État), 5 (trésorerie), 6 (charges), 7 (produits).

### L'enchaînement des documents
- Les **pièces justificatives** (factures, relevés bancaires) prouvent chaque opération.
- Les **journaux** enregistrent les opérations dans l'ordre chronologique.
- Le **grand livre** regroupe les mouvements compte par compte.
- La **balance** liste tous les comptes avec leurs totaux et leurs soldes : elle sert de contrôle.
- Les **documents de synthèse** : le **bilan**, le **compte de résultat** et l'**annexe**.

### Ce qu'apportent les technologies numériques
- Le **progiciel de gestion intégré** (**PGI**) relie tous les services (achats, ventes, stocks, paie, comptabilité) autour d'une **base de données unique**. Une donnée saisie une fois est disponible partout : moins d'erreurs, informations à jour.
- Les pièces sont de plus en plus **dématérialisées** : depuis septembre 2026, toutes les entreprises doivent pouvoir recevoir des **factures électroniques** ; l'obligation d'en émettre s'étend aux PME en septembre 2027.
- Le travail humain se déplace vers le **paramétrage**, le **contrôle**, la résolution des **anomalies** et la **validation** des écritures.

### La sécurité des données
- Il faut préserver la **disponibilité** (les données sont accessibles quand on en a besoin), l'**intégrité** (elles ne sont pas modifiées par erreur ou par fraude), la **confidentialité** (seules les personnes autorisées y accèdent) et la **traçabilité** (on sait qui a fait quoi).
- **Sauvegardes** : régulières, sur plusieurs supports, dont une copie hors des locaux. Une sauvegarde **complète** copie tout ; une sauvegarde **incrémentale** ne copie que ce qui a changé depuis la dernière sauvegarde.

### À retenir pour le bac
- Partie double : débit = crédit.
- Pièces justificatives, journal, grand livre, balance, documents de synthèse.
- Actif et passif ; charge et produit ; créance et dette.
- PGI : une base de données unique, une saisie unique.
- Sécurité : disponibilité, intégrité, confidentialité, traçabilité.`,
      cartes: [
        { q: "À quoi sert le système d'information comptable ?", r: "À saisir, classer et enregistrer les opérations chiffrées, puis à présenter une image fidèle du patrimoine, de la situation financière et du résultat." },
        { q: "Qu'est-ce que la partie double ?", r: "Chaque opération est enregistrée au débit d'au moins un compte et au crédit d'au moins un autre, pour le même montant." },
        { q: "Flux ou stock ?", r: "Un flux est un mouvement sur une période (les ventes du mois). Un stock est une valeur à une date (la trésorerie au 31 décembre)." },
        { q: "Créance ou dette ?", r: "Une créance est une somme qu'on doit à l'entreprise (un client). Une dette est une somme que l'entreprise doit (à un fournisseur)." },
        { q: "Actif ou passif ?", r: "L'actif est ce que l'entreprise possède et contrôle. Le passif montre d'où viennent ses ressources : capitaux propres et dettes." },
        { q: "Charge ou produit ?", r: "Une charge diminue le résultat (achats, salaires). Un produit l'augmente (ventes)." },
        { q: "Que contiennent les classes 6 et 7 du plan de comptes ?", r: "La classe 6 contient les charges, la classe 7 les produits." },
        { q: "Dans quel ordre s'enchaînent les documents comptables ?", r: "Pièces justificatives, journaux, grand livre, balance, puis documents de synthèse (bilan, compte de résultat, annexe)." },
        { q: "À quoi sert la balance ?", r: "Elle liste tous les comptes avec leurs totaux et leurs soldes ; elle permet de contrôler que débits et crédits sont égaux." },
        { q: "Qu'est-ce qu'un PGI ?", r: "Un progiciel de gestion intégré : il relie tous les services autour d'une base de données unique, avec une saisie unique." },
        { q: "Quels sont les quatre critères de sécurité des données ?", r: "Disponibilité, intégrité, confidentialité et traçabilité." },
        { q: "Sauvegarde complète ou incrémentale ?", r: "La complète copie toutes les données. L'incrémentale ne copie que ce qui a changé depuis la dernière sauvegarde." },
      ],
      quiz: [
        { q: "Dans la partie double, que vaut le total des débits ?", choix: ["Le double du total des crédits", "Toujours le total des crédits", "La moitié des crédits", "Le résultat de l'exercice"], bonne: 1, expl: "Chaque opération a un débit et un crédit de même montant : les totaux sont égaux.", niv: 1 },
        { q: "Une somme qu'un client paiera dans 30 jours est pour l'entreprise :", choix: ["une dette", "une charge", "un produit à payer", "une créance"], bonne: 3, expl: "On lui doit cette somme : c'est une créance client.", niv: 1 },
        { q: "Quel document regroupe les mouvements compte par compte ?", choix: ["Le grand livre", "Le journal", "Le bilan", "L'annexe"], bonne: 0, expl: "Le journal suit l'ordre chronologique ; le grand livre classe par compte.", niv: 1 },
        { q: "Le salaire versé aux employés est :", choix: ["un produit", "un actif", "une charge", "une créance"], bonne: 2, expl: "Il diminue le résultat : c'est une charge, classée en 6.", niv: 1 },
        { q: "Une vendeuse saisit une commande, et le stock, la facture et la comptabilité se mettent à jour seuls. L'entreprise utilise :", choix: ["un PGI", "un tableur isolé", "un grand livre papier", "une balance"], bonne: 0, expl: "Le PGI repose sur une base de données unique : une saisie met à jour tous les modules.", niv: 2 },
        { q: "Un salarié modifie par erreur le montant d'une facture déjà validée. Quel critère de sécurité est atteint ?", choix: ["La confidentialité", "Une perte de disponibilité", "La traçabilité", "L'intégrité"], bonne: 3, expl: "L'intégrité garantit que les données ne sont pas modifiées par erreur ou par fraude.", niv: 2 },
        { q: "Le solde du compte bancaire au 31 décembre est :", choix: ["un flux", "un stock", "une charge", "un produit"], bonne: 1, expl: "C'est une valeur à une date précise : un stock.", niv: 2 },
        { q: "Pourquoi garder une copie de sauvegarde hors des locaux ?", choix: ["Pour la vendre", "Pour aller plus vite", "Pour résister à un incendie", "Pour respecter la partie double"], bonne: 2, expl: "Si les locaux sont détruits, une copie ailleurs préserve la disponibilité des données.", niv: 2 },
        { q: "Avec un PGI et des factures électroniques, que fait surtout le comptable ?", choix: ["Il recopie toutes les factures", "Il contrôle et valide les écritures", "Il classe les papiers par date et par client", "Il calcule la TVA à la main"], bonne: 1, expl: "La collecte est automatisée : le travail humain porte sur le paramétrage, le contrôle et la validation.", niv: 3 },
        { q: "Pourquoi les informations comptables sont-elles aussi utiles en dehors de l'entreprise ?", choix: ["Elles remplacent la publicité de l'entreprise", "Elles fixent les salaires", "Elles sont secrètes", "Elles prouvent et servent aux impôts"], bonne: 3, expl: "Clients, fournisseurs, banques et administration fiscale s'appuient sur elles.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 1.2 Achats et ventes
    {
      chapitre: 'stmg-gf-2',
      fiche: `## Acheter et vendre, quelle traduction comptable ?

### Le cycle d'exploitation
- Le **cycle d'exploitation** regroupe les opérations répétées entre l'**achat** aux fournisseurs et le **règlement** par les clients : acheter, stocker, produire ou revendre, vendre, encaisser.
- Le **processus d'achat-vente** suit des étapes : commande, livraison (bon de livraison), facture, règlement. Chaque étape produit un document.

### La facture
- La facture part du **montant brut**, puis enlève les **réductions commerciales** (rabais, remise, ristourne) pour obtenir le **net commercial**.
- On ajoute les éventuels **frais de port** : on obtient le **montant hors taxes** (HT).
- On calcule la **TVA** sur le montant HT (taux normal : **20 %**), puis le **montant toutes taxes comprises** (TTC).
- Exemple : brut 2 000 €, remise 10 % (200 €), net commercial 1 800 €, port 50 €, total HT 1 850 €, TVA 20 % = 370 €, TTC = **2 220 €**.
- Les réductions commerciales qui figurent sur la facture ne sont pas enregistrées à part : on enregistre directement le net.

### L'enregistrement comptable
- **Achat de marchandises à crédit** (exemple ci-dessus) : débit **607 Achats de marchandises** 1 800 ; débit **6241 Transports sur achats** 50 ; débit **44566 TVA déductible** 370 ; crédit **401 Fournisseurs** 2 220.
- **Vente de marchandises à crédit** : débit **411 Clients** (TTC) ; crédit **707 Ventes de marchandises** (HT) ; crédit **44571 TVA collectée**.
- **Règlement** d'un fournisseur par virement : débit 401, crédit **512 Banque**. Encaissement d'un client : débit 512, crédit 411.
- Achat ou vente **au comptant** : on passe directement par la banque ou la caisse (530).
- Une **facture d'avoir** (retour de marchandises, réduction accordée après coup) annule tout ou partie d'une facture : on enregistre l'inverse de la facture initiale, pour le montant de l'avoir.

### Le mécanisme de la TVA
- La **TVA** est un impôt payé par le consommateur final. L'entreprise la **collecte** sur ses ventes et **déduit** celle qu'elle a payée sur ses achats.
- **TVA à décaisser** = TVA collectée − TVA déductible. Exemple : collectée 5 000 €, déductible 3 200 € : l'entreprise verse **1 800 €** à l'État.
- Si la TVA déductible dépasse la TVA collectée, l'entreprise a un **crédit de TVA**.

### Les contrôles
- Le **lettrage** : dans un compte client ou fournisseur, on rapproche chaque facture de son règlement (on leur donne la même lettre). Ce qui n'est pas lettré n'est pas encore payé.
- Le **rapprochement bancaire** compare le compte 512 de l'entreprise et le relevé de la banque, pour expliquer les écarts (chèque pas encore encaissé, frais bancaires pas encore enregistrés).

### À retenir pour le bac
- Brut − réductions = net commercial ; + port = HT ; + TVA = TTC.
- Achat : 607 et 44566 au débit, 401 au crédit. Vente : 411 au débit, 707 et 44571 au crédit.
- TVA à décaisser = TVA collectée − TVA déductible.
- Lettrage (factures et règlements) et rapprochement bancaire (compte 512 et relevé).`,
      cartes: [
        { q: "Qu'est-ce que le cycle d'exploitation ?", r: "L'ensemble des opérations répétées entre l'achat aux fournisseurs et le règlement des clients." },
        { q: "Comment passe-t-on du montant brut au net commercial ?", r: "On enlève les réductions commerciales : rabais, remise, ristourne." },
        { q: "Comment calcule-t-on le TTC d'une facture ?", r: "Net commercial + frais de port = HT ; HT + TVA (20 % du HT au taux normal) = TTC." },
        { q: "Calcule le TTC : brut 2 000 €, remise 10 %, port 50 €, TVA 20 %.", r: "Net 1 800 €, HT 1 850 €, TVA 370 €, TTC 2 220 €." },
        { q: "Quels comptes pour un achat de marchandises à crédit ?", r: "Débit 607 Achats de marchandises (HT) et 44566 TVA déductible ; crédit 401 Fournisseurs (TTC)." },
        { q: "Quels comptes pour une vente de marchandises à crédit ?", r: "Débit 411 Clients (TTC) ; crédit 707 Ventes de marchandises (HT) et 44571 TVA collectée." },
        { q: "Comment enregistre-t-on le paiement d'un fournisseur par virement ?", r: "Débit 401 Fournisseurs, crédit 512 Banque." },
        { q: "Qu'est-ce qu'une facture d'avoir ?", r: "Une facture qui annule tout ou partie d'une facture (retour de marchandises, réduction après coup) : on enregistre l'inverse de la facture initiale." },
        { q: "Comment calcule-t-on la TVA à décaisser ?", r: "TVA collectée − TVA déductible. Collectée 5 000 €, déductible 3 200 € : 1 800 € à verser." },
        { q: "Qu'est-ce qu'un crédit de TVA ?", r: "La situation où la TVA déductible dépasse la TVA collectée : l'État doit la différence à l'entreprise." },
        { q: "Qu'est-ce que le lettrage ?", r: "Rapprocher, dans un compte client ou fournisseur, chaque facture de son règlement. Ce qui n'est pas lettré n'est pas payé." },
        { q: "Qu'est-ce que le rapprochement bancaire ?", r: "Comparer le compte 512 de l'entreprise et le relevé de la banque pour expliquer les écarts." },
      ],
      quiz: [
        { q: "Une facture : brut 1 000 €, remise 5 %, sans frais de port, TVA 20 %. Quel est le montant TTC ?", choix: ["1 200 €", "1 140 €", "950 €", "1 190 €"], bonne: 1, expl: "Net = 950 € ; TVA = 190 € ; TTC = 1 140 €.", niv: 2 },
        { q: "Lors d'une vente à crédit, quel compte enregistre la TVA ?", choix: ["44566 TVA déductible", "607 Achats", "44571 TVA collectée", "401 Fournisseurs"], bonne: 2, expl: "Sur une vente, l'entreprise collecte la TVA pour l'État : compte 44571, au crédit.", niv: 1 },
        { q: "TVA collectée du mois : 8 000 € ; TVA déductible : 5 500 €. L'entreprise doit verser :", choix: ["13 500 €", "8 000 €", "5 500 €", "2 500 €"], bonne: 3, expl: "8 000 − 5 500 = 2 500 € de TVA à décaisser.", niv: 2 },
        { q: "Pour un achat de marchandises à crédit, le compte 401 Fournisseurs est :", choix: ["crédité du montant TTC", "débité du montant HT", "débité de la TVA", "crédité du montant HT"], bonne: 0, expl: "L'entreprise doit le TTC au fournisseur : le compte 401 est crédité du TTC.", niv: 2 },
        { q: "Un client règle sa facture par virement. Quelle écriture ?", choix: ["Débit 411, crédit 512", "Débit 707, crédit 411", "Débit 512, crédit 411", "Débit 401, crédit 512"], bonne: 2, expl: "La banque augmente (débit 512) et la créance client disparaît (crédit 411).", niv: 2 },
        { q: "Une remise de 10 % figure sur une facture d'achat. Comment l'enregistre-t-on ?", choix: ["On passe le net commercial", "Dans un compte de produits", "Au crédit du compte 512", "Dans le compte 44571"], bonne: 0, expl: "Les réductions commerciales sur facture ne s'enregistrent pas à part : on passe le montant net.", niv: 2 },
        { q: "Le compte d'un fournisseur montre deux factures sans lettre. Cela signifie qu'elles :", choix: ["sont des avoirs", "sont fausses", "ont été payées deux fois", "n'ont pas encore été réglées"], bonne: 3, expl: "Le lettrage relie une facture à son règlement : sans lettre, pas encore de paiement.", niv: 2 },
        { q: "Un client renvoie des marchandises abîmées. L'entreprise émet :", choix: ["un bon de commande", "une facture d'avoir", "un relevé bancaire", "une nouvelle facture"], bonne: 1, expl: "L'avoir annule tout ou partie de la facture initiale.", niv: 1 },
        { q: "Le compte 512 de l'entreprise et le relevé de la banque ne donnent **pas** le même solde. Quelle est une cause possible ?", choix: ["Une erreur du logiciel de la banque", "La TVA collectée", "Un chèque émis pas encore encaissé", "Une remise sur facture"], bonne: 2, expl: "Les décalages de date expliquent la plupart des écarts : c'est l'objet du rapprochement bancaire.", niv: 3 },
        { q: "Pourquoi la TVA n'est-elle pas une charge pour l'entreprise ?", choix: ["Le client final la paie, elle est reversée", "Elle est payée par les salariés sur leur paie", "Seules les ventes à l'étranger y sont soumises", "Elle est toujours remboursée aux clients"], bonne: 0, expl: "L'entreprise collecte la TVA sur ses ventes et déduit celle de ses achats : seule la différence va à l'État.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 1.3 Investissement
    {
      chapitre: 'stmg-gf-3',
      fiche: `## Investir, quelle traduction comptable ?

### Actif ou charge ?
- Un **investissement** est un bien que l'entreprise contrôle et utilise **durablement** (plus d'un exercice) : il crée une ressource pour l'avenir. Il est inscrit à l'**actif** du bilan, en **immobilisation**.
- Une **charge** est consommée pendant l'exercice (fournitures, électricité, loyer) : elle diminue directement le résultat.
- Exemple : une camionnette de livraison est une immobilisation ; le carburant qu'elle consomme est une charge.
- En pratique, un petit matériel de faible valeur (moins de 500 € HT) peut être passé en charge.
- Le programme se limite aux **immobilisations corporelles** (machines, véhicules, ordinateurs, mobilier).

### Le coût d'acquisition
- Le **coût d'acquisition** d'une immobilisation = **prix d'achat net** (après réductions commerciales, hors TVA récupérable) + **frais accessoires** nécessaires à sa mise en service (transport, installation, montage, droits de douane).
- Les frais de **formation** du personnel ne font pas partie du coût d'acquisition : ce sont des charges.
- Exemple : machine à 23 000 € HT, transport 400 €, installation 600 € : coût d'acquisition = **24 000 €**.
- **Enregistrement** : débit **2154 Matériel industriel** (ou 2183 Matériel de bureau et informatique, 2182 Matériel de transport) 24 000 ; débit 44562 TVA déductible sur immobilisations ; crédit **404 Fournisseurs d'immobilisations** (TTC).

### L'amortissement
- Une immobilisation **s'use** ou devient **dépassée**. L'**amortissement** répartit son coût sur sa **durée d'utilisation** : chaque année, une partie devient une charge, la **dotation aux amortissements**.
- **Amortissement linéaire** : la même annuité chaque année. **Annuité** = base amortissable ÷ durée (ou base × taux, avec taux = 100 ÷ durée).
- La **base amortissable** est le coût d'acquisition (moins une éventuelle valeur résiduelle).
- La première année, l'annuité est calculée **au prorata** du temps écoulé depuis la **mise en service**.
- La **valeur nette comptable** (**VNC**) = coût d'acquisition − cumul des amortissements.

### Un plan d'amortissement complet
- Machine de 24 000 €, mise en service le **1er avril N**, durée **5 ans**, linéaire. Annuité pleine = 24 000 ÷ 5 = **4 800 €** (taux 20 %).
- N : 4 800 × 9/12 = **3 600** ; cumul 3 600 ; VNC 20 400.
- N+1 : 4 800 ; cumul 8 400 ; VNC 15 600.
- N+2 : 4 800 ; cumul 13 200 ; VNC 10 800.
- N+3 : 4 800 ; cumul 18 000 ; VNC 6 000.
- N+4 : 4 800 ; cumul 22 800 ; VNC 1 200.
- N+5 : 1 200 (les 3 mois restants) ; cumul 24 000 ; VNC 0.
- **Écriture** de chaque fin d'exercice : débit **6811 Dotations aux amortissements** ; crédit **2815** (amortissements des installations et matériel).

### Le règlement
- L'investissement peut être payé comptant, à crédit (dette envers le fournisseur d'immobilisations) ou financé par un emprunt.

### À retenir pour le bac
- Immobilisation (durable, à l'actif) ou charge (consommée dans l'exercice).
- Coût d'acquisition = prix net HT + frais accessoires, sans formation.
- Annuité linéaire = base ÷ durée, au prorata la première année.
- VNC = coût d'acquisition − cumul des amortissements.
- Dotation : débit 6811, crédit 28.`,
      cartes: [
        { q: "Immobilisation ou charge ?", r: "L'immobilisation est utilisée durablement (plus d'un exercice) et inscrite à l'actif. La charge est consommée pendant l'exercice." },
        { q: "Que comprend le coût d'acquisition d'une immobilisation ?", r: "Le prix d'achat net HT plus les frais accessoires nécessaires à la mise en service : transport, installation, montage, droits de douane." },
        { q: "Les frais de formation du personnel font-ils partie du coût d'acquisition ?", r: "Non : ce sont des charges de l'exercice." },
        { q: "Calcule le coût d'acquisition : machine 23 000 € HT, transport 400 €, installation 600 €.", r: "23 000 + 400 + 600 = 24 000 €." },
        { q: "Qu'est-ce que l'amortissement ?", r: "La répartition du coût d'une immobilisation sur sa durée d'utilisation : chaque année, une dotation aux amortissements devient une charge." },
        { q: "Comment calcule-t-on l'annuité d'amortissement linéaire ?", r: "Base amortissable ÷ durée d'utilisation (ou base × taux, avec taux = 100 ÷ durée)." },
        { q: "Quand commence l'amortissement ?", r: "À la date de mise en service : la première annuité est calculée au prorata du temps écoulé." },
        { q: "Qu'est-ce que la valeur nette comptable (VNC) ?", r: "Coût d'acquisition − cumul des amortissements." },
        { q: "Machine de 24 000 € sur 5 ans, mise en service le 1er avril N : dotation de N ?", r: "4 800 × 9/12 = 3 600 €." },
        { q: "Même machine : VNC à la fin de N+2 ?", r: "Cumul : 3 600 + 4 800 + 4 800 = 13 200 € ; VNC = 24 000 − 13 200 = 10 800 €." },
        { q: "Quelle écriture pour la dotation aux amortissements ?", r: "Débit 6811 Dotations aux amortissements ; crédit 28 (par exemple 2815 pour le matériel)." },
        { q: "Quel compte crédite-t-on pour un achat d'immobilisation à crédit ?", r: "Le compte 404 Fournisseurs d'immobilisations, pour le montant TTC." },
      ],
      quiz: [
        { q: "Laquelle de ces dépenses est une immobilisation ?", choix: ["Le loyer du mois", "L'électricité", "Les fournitures de bureau", "Un camion de livraison"], bonne: 3, expl: "Le camion est utilisé plusieurs années : il va à l'actif ; les autres sont consommés dans l'exercice.", niv: 1 },
        { q: "Machine à 15 000 € HT, transport 300 €, formation des salariés 700 €. Coût d'acquisition ?", choix: ["16 000 €", "15 300 €", "15 000 €", "18 360 €"], bonne: 1, expl: "Transport inclus, formation exclue (c'est une charge) : 15 000 + 300 = 15 300 €.", niv: 2 },
        { q: "Un ordinateur de 3 000 € est amorti en linéaire sur 3 ans. Annuité pleine ?", choix: ["1 000 €", "3 000 €", "333 €", "1 500 €"], bonne: 0, expl: "3 000 ÷ 3 = 1 000 € par an.", niv: 1 },
        { q: "Un bien de 12 000 €, amorti sur 4 ans, est mis en service le 1er octobre N. Dotation de N ?", choix: ["3 000 €", "9 000 €", "750 €", "2 250 €"], bonne: 2, expl: "Annuité pleine 3 000 € ; 3 mois sur 12 : 3 000 × 3/12 = 750 €.", niv: 2 },
        { q: "Une machine de 20 000 € a 12 000 € d'amortissements cumulés. Sa VNC est de :", choix: ["32 000 €", "12 000 €", "20 000 €", "8 000 €"], bonne: 3, expl: "VNC = 20 000 − 12 000 = 8 000 €.", niv: 2 },
        { q: "Quel est le taux d'amortissement linéaire d'un bien amorti sur 5 ans ?", choix: ["5 %", "20 %", "25 %", "50 %"], bonne: 1, expl: "Taux = 100 ÷ 5 = 20 %.", niv: 1 },
        { q: "L'écriture de dotation aux amortissements :", choix: ["débite 2154 et crédite 404", "débite 512 et crédite 6811", "débite 6811 et crédite 28", "débite 28 et crédite 6811"], bonne: 2, expl: "La dotation est une charge (6811, débit) ; l'amortissement cumulé est au crédit d'un compte 28.", niv: 2 },
        { q: "Pourquoi amortit-on une immobilisation au lieu de la passer en charge en une fois ?", choix: ["Elle sert plusieurs années", "Pour payer moins de TVA", "Parce que la banque l'exige", "Pour augmenter la trésorerie"], bonne: 0, expl: "L'amortissement rattache le coût du bien aux années où il est utilisé.", niv: 3 },
        { q: "Quelle affirmation sur l'amortissement linéaire est juste ?", choix: ["L'annuité augmente chaque année avec l'usure", "Il ne commence qu'au 1er janvier", "Il dépend du prix de revente", "L'annuité est toujours la même, hors prorata"], bonne: 3, expl: "En linéaire, l'annuité est constante ; seules la première et la dernière sont au prorata.", niv: 3 },
        { q: "Une imprimante de 200 € HT est achetée pour le bureau. Comment est-elle en pratique souvent enregistrée ?", choix: ["En charge, vu sa faible valeur", "En immobilisation amortie sur 10 ans", "En créance", "En capitaux propres"], bonne: 0, expl: "Un petit matériel de moins de 500 € HT peut être passé directement en charge.", niv: 2 },
      ],
    },
    // ---------------------------------------------------------------- 1.4 Information fidèle
    {
      chapitre: 'stmg-gf-4',
      fiche: `## Quelles sont les conditions pour communiquer une information comptable fidèle ?

### L'exercice et l'inventaire
- L'**exercice comptable** est la période (souvent 12 mois) à la fin de laquelle l'entreprise établit ses comptes annuels.
- À la **clôture**, on fait l'**inventaire** : on compte et on évalue réellement les actifs et les passifs (stocks, créances, matériel), pour corriger la comptabilité.
- Les **documents de synthèse** : le **bilan** (situation du patrimoine à la date de clôture), le **compte de résultat** (charges et produits de l'exercice) et l'**annexe**, qui explique certains postes et les changements importants.
- But : que les comptes donnent une **image fidèle** de l'entreprise.

### Quatre principes comptables
- **Prudence** : on enregistre les pertes probables, mais pas les gains seulement espérés. Une créance qui risque de ne pas être payée doit être dépréciée.
- **Indépendance des exercices** : chaque exercice supporte les charges et les produits qui le concernent, et seulement eux.
- **Continuité de l'exploitation** : on suppose que l'entreprise va continuer son activité ; on évalue donc ses biens à leur valeur d'usage, pas à un prix de liquidation.
- **Permanence des méthodes** : on garde les mêmes méthodes d'un exercice à l'autre, pour pouvoir comparer. Tout changement est expliqué dans l'annexe.

### Les stocks
- On compare le **stock initial** et le **stock final**. La **variation des stocks** (compte 603 pour les marchandises) = stock initial − stock final.
- **Coût d'achat des marchandises vendues** = achats + stock initial − stock final.
- Exemple : achats 50 000 €, stock initial 8 000 €, stock final 10 000 € : variation = **−2 000 €** ; coût d'achat des marchandises vendues = **48 000 €**. Les 2 000 € restés en stock ne sont pas une charge de cet exercice.

### Les amortissements
- À chaque clôture, on enregistre la **dotation aux amortissements** de l'exercice (voir le plan d'amortissement).

### Les dépréciations
- Une **dépréciation** constate une perte de valeur **probable** d'un actif (principe de prudence).
- **Créance douteuse** : un client risque de ne pas payer. On déprécie la part qu'on pense perdre, calculée sur le montant **hors taxes** de la créance.
- Exemple : créance de 1 200 € TTC (1 000 € HT), perte probable 40 % : dépréciation = 1 000 × 40 % = **400 €**. Écriture : débit **6817 Dotations aux dépréciations des actifs circulants** ; crédit **491 Dépréciation des comptes clients**.
- Si le client paie finalement, on **reprend** la dépréciation (un produit).

### La cession d'une immobilisation
- Quand l'entreprise vend une immobilisation, on compare le **prix de cession** et la **VNC** au jour de la vente.
- **Résultat de cession** = prix de cession − VNC.
- Exemple : la machine de 24 000 € (VNC de 10 800 € fin N+2) est vendue 12 000 € HT début N+3 : **plus-value de 1 200 €**.
- Enregistrement : le prix de cession en produit (**775**), la VNC en charge (**675**), et on sort le bien et ses amortissements du bilan.

### À retenir pour le bac
- Image fidèle : inventaire et écritures de fin d'exercice.
- Prudence, indépendance des exercices, continuité de l'exploitation, permanence des méthodes.
- Variation des stocks = stock initial − stock final.
- Dépréciation d'une créance : sur le HT, débit 6817, crédit 491.
- Résultat de cession = prix de cession − VNC.`,
      cartes: [
        { q: "Qu'est-ce que l'inventaire de fin d'exercice ?", r: "Le comptage et l'évaluation réelle des actifs et des passifs à la clôture, pour corriger la comptabilité." },
        { q: "Quels sont les documents de synthèse ?", r: "Le bilan, le compte de résultat et l'annexe." },
        { q: "Que dit le principe de prudence ?", r: "On enregistre les pertes probables, mais pas les gains seulement espérés." },
        { q: "Que dit le principe d'indépendance des exercices ?", r: "Chaque exercice supporte les charges et produits qui le concernent, et seulement eux." },
        { q: "Que dit le principe de continuité de l'exploitation ?", r: "On suppose que l'entreprise continue son activité : ses biens sont évalués à leur valeur d'usage, pas à un prix de liquidation." },
        { q: "Que dit le principe de permanence des méthodes ?", r: "On garde les mêmes méthodes d'un exercice à l'autre pour pouvoir comparer ; un changement est expliqué dans l'annexe." },
        { q: "Comment calcule-t-on la variation des stocks de marchandises ?", r: "Stock initial − stock final." },
        { q: "Achats 50 000 €, stock initial 8 000 €, stock final 10 000 € : coût d'achat des marchandises vendues ?", r: "50 000 + 8 000 − 10 000 = 48 000 €." },
        { q: "Qu'est-ce qu'une dépréciation ?", r: "La constatation d'une perte de valeur probable d'un actif, au nom du principe de prudence." },
        { q: "Créance de 1 200 € TTC (1 000 € HT), perte probable 40 % : dépréciation ?", r: "On calcule sur le HT : 1 000 × 40 % = 400 €." },
        { q: "Comment calcule-t-on le résultat de cession d'une immobilisation ?", r: "Prix de cession − valeur nette comptable au jour de la cession." },
        { q: "Machine de VNC 10 800 € vendue 12 000 € HT : résultat de cession ?", r: "12 000 − 10 800 = plus-value de 1 200 €." },
      ],
      quiz: [
        { q: "Une entreprise enregistre une perte probable sur un client, mais pas un gain espéré sur un contrat. Elle applique le principe :", choix: ["de permanence des méthodes", "de continuité de l'exploitation", "de prudence", "d'indépendance des exercices"], bonne: 2, expl: "Prudence : les pertes probables sont prises en compte, pas les gains incertains.", niv: 1 },
        { q: "Stock initial 6 000 €, stock final 9 000 €. La variation des stocks est de :", choix: ["−3 000 €", "+3 000 €", "15 000 €", "9 000 €"], bonne: 0, expl: "Variation = stock initial − stock final = 6 000 − 9 000 = −3 000 €.", niv: 2 },
        { q: "Achats 40 000 €, stock initial 5 000 €, stock final 7 000 €. Coût d'achat des marchandises vendues ?", choix: ["42 000 €", "40 000 €", "52 000 €", "38 000 €"], bonne: 3, expl: "40 000 + 5 000 − 7 000 = 38 000 €.", niv: 2 },
        { q: "Une créance de 2 400 € TTC (2 000 € HT) a 30 % de risque de ne pas être payée. Dépréciation ?", choix: ["720 €", "600 €", "2 000 €", "480 €"], bonne: 1, expl: "Sur le HT : 2 000 × 30 % = 600 €. La TVA n'est pas dépréciée.", niv: 2 },
        { q: "Un véhicule de VNC 4 000 € est vendu 3 000 € HT. Le résultat de cession est :", choix: ["une plus-value de 1 000 €", "nul", "une plus-value de 3 000 €", "une moins-value de 1 000 €"], bonne: 3, expl: "3 000 − 4 000 = −1 000 € : moins-value.", niv: 2 },
        { q: "Une entreprise change de méthode d'évaluation de ses stocks. Où doit-elle l'expliquer ?", choix: ["Dans l'annexe", "Dans le journal", "Dans la balance", "Sur la facture"], bonne: 0, expl: "Permanence des méthodes : tout changement est justifié dans l'annexe.", niv: 2 },
        { q: "L'assurance d'un an payée le 1er octobre N ne compte que pour 3 mois en N. Quel principe impose ce partage ?", choix: ["Le principe de prudence", "La continuité de l'exploitation", "L'indépendance des exercices", "La permanence des méthodes"], bonne: 2, expl: "Chaque exercice ne supporte que les charges qui le concernent.", niv: 3 },
        { q: "Quelle écriture pour déprécier une créance douteuse ?", choix: ["Débit 491, crédit 6817", "Débit 6817, crédit 491", "Débit 411, crédit 707", "Débit 675, crédit 775"], bonne: 1, expl: "La dotation est une charge (6817, débit) ; la dépréciation se cumule au crédit du 491.", niv: 2 },
        { q: "Pourquoi évalue-t-on les biens à leur valeur d'usage plutôt qu'à un prix de vente rapide ?", choix: ["Par prudence", "L'entreprise est censée continuer", "Pour payer moins d'impôt sur les bénéfices", "Pour respecter la partie double"], bonne: 1, expl: "C'est le principe de continuité de l'exploitation.", niv: 3 },
        { q: "Quel est le but de toutes les opérations d'inventaire ?", choix: ["Augmenter le résultat", "Payer moins de TVA", "Donner une image fidèle", "Supprimer les dettes"], bonne: 2, expl: "Les ajustements de fin d'exercice rendent les comptes conformes à la réalité.", niv: 1 },
      ],
    },
    // ---------------------------------------------------------------- 2.1 Performance
    {
      chapitre: 'stmg-gf-5',
      fiche: `## Mesurer la performance, des approches multiples ?

### Profitabilité ou rentabilité ?
- La **profitabilité** mesure la capacité de l'entreprise à dégager un **résultat** ou une **ressource** grâce à son **activité** (on rapporte un résultat au chiffre d'affaires).
- La **rentabilité** mesure ce que rapportent les **capitaux engagés** (on rapporte un résultat aux capitaux investis).
- Chaque partie prenante regarde des indicateurs différents : le dirigeant, l'actionnaire, la banque, les salariés.

### Les soldes de la profitabilité
- **Excédent brut d'exploitation** (**EBE**) : ce que l'activité rapporte avant les amortissements, les intérêts et l'impôt. EBE = valeur ajoutée + subventions d'exploitation − impôts et taxes − charges de personnel.
- Exemple : valeur ajoutée 300 000 €, subventions 10 000 €, impôts et taxes 20 000 €, charges de personnel 180 000 € : **EBE = 110 000 €**.
- **Résultat d'exploitation** (**RE**) : l'EBE après les dotations aux amortissements (et quelques autres éléments d'exploitation). Avec 30 000 € de dotations : **RE = 80 000 €**.
- **Résultat courant avant impôt** (**RCAI**) = résultat d'exploitation + résultat financier. Avec 8 000 € d'intérêts d'emprunt : **RCAI = 72 000 €**.
- **Taux de profitabilité** = résultat net ÷ chiffre d'affaires × 100. Résultat net 50 000 €, chiffre d'affaires 1 000 000 € : **5 %**.

### La capacité d'autofinancement (CAF)
- La **CAF** est la ressource que l'activité laisse à l'entreprise pour financer ses projets, rembourser ses emprunts ou payer des dividendes.
- Calcul simplifié (méthode additive) : CAF = résultat net + dotations aux amortissements et dépréciations − reprises − produits de cession des immobilisations + VNC des immobilisations cédées.
- Exemple : résultat net 50 000 €, dotations 30 000 €, ni reprise ni cession : **CAF = 80 000 €**.
- Les dotations sont rajoutées parce que ce sont des charges qui ne sortent pas d'argent.

### La rentabilité
- **Rentabilité économique** : ce que rapportent **tous les capitaux investis** dans l'activité (immobilisations et besoin en fonds de roulement). C'est la vision du **dirigeant**. Rentabilité économique = résultat d'exploitation ÷ capitaux investis. Exemple : 80 000 ÷ 500 000 = **16 %**.
- **Rentabilité financière** : ce que rapportent les **capitaux propres** apportés par les associés. C'est la vision de l'**actionnaire**. Rentabilité financière = résultat net ÷ capitaux propres. Exemple : 50 000 ÷ 250 000 = **20 %**.

### L'effet de levier
- Quand la **rentabilité économique** est **supérieure** au **taux d'intérêt** des emprunts, s'endetter **augmente** la rentabilité financière : l'argent emprunté rapporte plus qu'il ne coûte. C'est l'**effet de levier**.
- Exemple : l'activité rapporte 16 %, l'emprunt coûte 4 % ; chaque euro emprunté rapporte 12 centimes de plus aux associés.
- Si la rentabilité économique devient **inférieure** au taux d'intérêt, la dette fait **baisser** la rentabilité financière (on parle d'effet de massue). L'endettement augmente donc aussi le **risque**.
- Le programme demande de comprendre cet effet, pas de le calculer par une formule.

### Comparer
- Un indicateur seul ne dit pas grand-chose : on le compare dans le **temps** (années précédentes) et dans l'**espace** (concurrents, moyenne du secteur).

### À retenir pour le bac
- Profitabilité (résultat ÷ chiffre d'affaires) et rentabilité (résultat ÷ capitaux).
- EBE, résultat d'exploitation, RCAI : du plus haut au plus bas du compte de résultat.
- CAF = résultat net + dotations (− reprises, ajustements de cession).
- Rentabilité économique (dirigeant) et financière (actionnaire).
- Effet de levier : la dette augmente la rentabilité financière si l'activité rapporte plus que le taux d'intérêt.`,
      cartes: [
        { q: "Profitabilité ou rentabilité ?", r: "La profitabilité rapporte un résultat au chiffre d'affaires. La rentabilité rapporte un résultat aux capitaux engagés." },
        { q: "Comment calcule-t-on l'EBE ?", r: "Valeur ajoutée + subventions d'exploitation − impôts et taxes − charges de personnel." },
        { q: "VA 300 000 €, subventions 10 000 €, impôts 20 000 €, personnel 180 000 € : EBE ?", r: "300 000 + 10 000 − 20 000 − 180 000 = 110 000 €." },
        { q: "Comment passe-t-on de l'EBE au résultat d'exploitation ?", r: "On retire notamment les dotations aux amortissements. EBE 110 000 €, dotations 30 000 € : RE = 80 000 €." },
        { q: "Qu'est-ce que le RCAI ?", r: "Le résultat courant avant impôt = résultat d'exploitation + résultat financier." },
        { q: "Comment calcule-t-on le taux de profitabilité ?", r: "Résultat net ÷ chiffre d'affaires × 100." },
        { q: "Qu'est-ce que la capacité d'autofinancement (CAF) ?", r: "La ressource que l'activité laisse à l'entreprise pour investir, rembourser ses emprunts ou payer des dividendes." },
        { q: "Pourquoi rajoute-t-on les dotations dans le calcul de la CAF ?", r: "Ce sont des charges qui ne font sortir aucun argent de l'entreprise." },
        { q: "Comment calcule-t-on la rentabilité économique ?", r: "Résultat d'exploitation ÷ capitaux investis (immobilisations et BFR). C'est la vision du dirigeant." },
        { q: "Comment calcule-t-on la rentabilité financière ?", r: "Résultat net ÷ capitaux propres. C'est la vision de l'actionnaire." },
        { q: "Qu'est-ce que l'effet de levier ?", r: "Quand la rentabilité économique dépasse le taux d'intérêt, l'endettement augmente la rentabilité financière." },
        { q: "Pourquoi l'endettement est-il risqué ?", r: "Si la rentabilité économique tombe sous le taux d'intérêt, la dette fait baisser la rentabilité financière (effet de massue)." },
      ],
      quiz: [
        { q: "Rapporter le résultat net au chiffre d'affaires mesure :", choix: ["la profitabilité", "la rentabilité financière", "la rentabilité économique", "la CAF"], bonne: 0, expl: "La profitabilité compare un résultat à l'activité, c'est-à-dire au chiffre d'affaires.", niv: 1 },
        { q: "Résultat net 30 000 €, chiffre d'affaires 600 000 €. Taux de profitabilité ?", choix: ["20 %", "0,5 %", "50 %", "5 %"], bonne: 3, expl: "30 000 ÷ 600 000 × 100 = 5 %.", niv: 2 },
        { q: "Résultat net 45 000 €, capitaux propres 300 000 €. Rentabilité financière ?", choix: ["6,7 %", "45 %", "15 %", "30 %"], bonne: 2, expl: "45 000 ÷ 300 000 × 100 = 15 %.", niv: 2 },
        { q: "Résultat net 40 000 €, dotations aux amortissements 25 000 €, ni reprise ni cession. CAF ?", choix: ["65 000 €", "15 000 €", "40 000 €", "25 000 €"], bonne: 0, expl: "CAF = 40 000 + 25 000 = 65 000 €.", niv: 2 },
        { q: "Valeur ajoutée 200 000 €, impôts et taxes 10 000 €, charges de personnel 120 000 €, pas de subvention. EBE ?", choix: ["80 000 €", "70 000 €", "190 000 €", "330 000 €"], bonne: 1, expl: "200 000 − 10 000 − 120 000 = 70 000 €.", niv: 2 },
        { q: "Quel indicateur intéresse d'abord un actionnaire ?", choix: ["L'EBE", "La rentabilité économique", "Le taux de TVA", "La rentabilité financière"], bonne: 3, expl: "Elle mesure ce que rapportent ses capitaux propres.", niv: 1 },
        { q: "Rentabilité économique 12 %, taux d'intérêt des emprunts 3 %. S'endetter davantage :", choix: ["fait baisser la rentabilité financière", "augmente la rentabilité financière", "ne change rien", "rend la CAF négative"], bonne: 1, expl: "L'argent emprunté rapporte plus qu'il ne coûte : c'est l'effet de levier.", niv: 2 },
        { q: "Pourquoi l'EBE est-il utile pour comparer des entreprises ?", choix: ["Il tient compte des intérêts payés aux banques", "Il dépend des dividendes", "Il exclut amortissements, intérêts et impôt", "Il se confond avec le résultat net"], bonne: 2, expl: "Calculé avant amortissements, intérêts et impôt, il mesure la performance de l'activité elle-même.", niv: 3 },
        { q: "Une entreprise très endettée voit sa rentabilité économique tomber à 2 % alors que ses emprunts coûtent 5 %. Que se passe-t-il ?", choix: ["L'effet de levier joue en sa faveur", "Rien ne change, la dette est sans effet sur ce taux", "La CAF double", "La dette fait baisser la rentabilité financière"], bonne: 3, expl: "La dette coûte plus que ce que rapporte l'activité : c'est l'effet de massue.", niv: 3 },
        { q: "Pourquoi un indicateur de performance doit-il être comparé ?", choix: ["Seul, on ne sait pas s'il est bon ou mauvais", "La loi impose de le publier avec ceux des concurrents", "Il change chaque jour selon la Bourse", "Il ne sert qu'aux banques"], bonne: 0, expl: "On le compare aux années passées et aux concurrents pour pouvoir le juger.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 2.2 Structure financière
    {
      chapitre: 'stmg-gf-6',
      fiche: `## Quelle structure financière pour assurer la pérennité de l'entreprise ?

### Le bilan fonctionnel
- Le **bilan fonctionnel** reclasse le bilan selon les **cycles** de l'entreprise : investissement, financement, exploitation.
- **Emplois stables** : l'actif immobilisé **brut** (le coût d'origine des immobilisations).
- **Ressources stables** : capitaux propres + amortissements et dépréciations + dettes financières (emprunts), sans les concours bancaires courants.
- **Actif circulant** hors trésorerie : stocks, créances clients, autres créances.
- **Dettes circulantes** hors trésorerie : dettes fournisseurs, dettes fiscales et sociales.
- **Trésorerie active** : disponibilités (banque, caisse) et valeurs mobilières de placement. **Trésorerie passive** : **concours bancaires courants** (découvert).

### Trois grandeurs clés
- **Fonds de roulement net global** (**FRNG**) = ressources stables − emplois stables. C'est la part des ressources durables qui reste pour financer l'exploitation. Il doit en général être **positif**.
- **Besoin en fonds de roulement** (**BFR**) = actif circulant hors trésorerie − dettes circulantes hors trésorerie. Il naît des décalages : l'entreprise stocke et attend ses clients avant d'être payée.
- **Trésorerie nette** = FRNG − BFR = trésorerie active − trésorerie passive.
- Exemple : ressources stables 500 000 €, emplois stables 420 000 € : **FRNG = 80 000 €**. Actif circulant 150 000 €, dettes circulantes 100 000 € : **BFR = 50 000 €**. **Trésorerie nette = 30 000 €**.
- Si le BFR dépasse le FRNG, la trésorerie nette est **négative** : l'entreprise dépend du découvert.

### Ce qui fait varier le BFR
- Une hausse de l'**activité** augmente en général le BFR (plus de stocks, plus de créances).
- Des **délais clients** plus longs augmentent le BFR ; des **délais fournisseurs** plus longs le diminuent.
- Certaines activités ont un BFR **négatif** : la grande distribution encaisse ses clients tout de suite et paie ses fournisseurs plus tard.

### Les ratios
- **Délai de rotation des stocks** de marchandises = stock moyen ÷ coût d'achat des marchandises vendues × 360. Exemple : 20 000 ÷ 240 000 × 360 = **30 jours**.
- **Délai de crédit clients** = créances clients TTC ÷ chiffre d'affaires TTC × 360. Exemple : 60 000 ÷ 720 000 × 360 = **30 jours**.
- **Délai de crédit fournisseurs** = dettes fournisseurs TTC ÷ achats TTC × 360. Exemple : 45 000 ÷ 360 000 × 360 = **45 jours**.
- **Indépendance financière** : par exemple capitaux propres ÷ ressources stables. 300 000 ÷ 500 000 = **60 %** : plus de la moitié des ressources durables appartient aux associés, l'entreprise est indépendante.
- **Capacité de remboursement** = dettes financières ÷ CAF. Exemple : 200 000 ÷ 80 000 = **2,5 ans**. On considère souvent qu'au-delà de 3 à 4 ans, l'endettement devient lourd.
- À l'épreuve, la formule des ratios est rappelée : il faut surtout savoir les **interpréter**.

### Améliorer la structure financière
- Augmenter le FRNG : apport des associés, mise en réserve des bénéfices, emprunt à long terme.
- Réduire le BFR : raccourcir les délais clients, mieux gérer les stocks, négocier des délais fournisseurs.
- Chaque mesure a un coût : réduire les délais clients peut faire perdre des clients ; emprunter augmente les charges d'intérêts.

### Les limites de l'analyse fonctionnelle
- Le bilan est une **photo à une date** : il ne montre pas les variations saisonnières.
- Les valeurs sont **historiques** (coût d'origine), pas des valeurs actuelles.
- Certains financements, comme la location de longue durée, n'apparaissent pas au bilan.

### À retenir pour le bac
- FRNG = ressources stables − emplois stables.
- BFR = actif circulant − dettes circulantes (hors trésorerie).
- Trésorerie nette = FRNG − BFR.
- Délais clients, fournisseurs, stocks : × 360 jours.
- Interpréter les ratios et proposer des améliorations, en voyant leurs effets secondaires.`,
      cartes: [
        { q: "Que sont les emplois stables du bilan fonctionnel ?", r: "L'actif immobilisé brut, c'est-à-dire le coût d'origine des immobilisations." },
        { q: "Que sont les ressources stables ?", r: "Capitaux propres + amortissements et dépréciations + dettes financières, sans les concours bancaires courants." },
        { q: "Comment calcule-t-on le FRNG ?", r: "Ressources stables − emplois stables." },
        { q: "Comment calcule-t-on le BFR ?", r: "Actif circulant hors trésorerie − dettes circulantes hors trésorerie." },
        { q: "Comment calcule-t-on la trésorerie nette ?", r: "FRNG − BFR, ou trésorerie active − trésorerie passive." },
        { q: "Ressources stables 500 000 €, emplois stables 420 000 €, BFR 50 000 € : trésorerie nette ?", r: "FRNG = 80 000 € ; trésorerie nette = 80 000 − 50 000 = 30 000 €." },
        { q: "Pourquoi la grande distribution a-t-elle souvent un BFR négatif ?", r: "Elle encaisse ses clients tout de suite et paie ses fournisseurs plus tard." },
        { q: "Comment calcule-t-on le délai de crédit clients ?", r: "Créances clients TTC ÷ chiffre d'affaires TTC × 360." },
        { q: "Créances clients 60 000 €, chiffre d'affaires TTC 720 000 € : délai clients ?", r: "60 000 ÷ 720 000 × 360 = 30 jours." },
        { q: "Qu'indique un ratio capitaux propres ÷ ressources stables de 60 % ?", r: "Plus de la moitié des ressources durables appartient aux associés : l'entreprise est financièrement indépendante." },
        { q: "Comment calcule-t-on la capacité de remboursement ?", r: "Dettes financières ÷ CAF : le nombre d'années de CAF nécessaires pour rembourser. Au-delà de 3 à 4 ans, l'endettement est lourd." },
        { q: "Quelles sont les limites de l'analyse fonctionnelle ?", r: "Le bilan est une photo à une date, en valeurs historiques, et certains financements n'y apparaissent pas." },
      ],
      quiz: [
        { q: "Ressources stables 800 000 €, emplois stables 650 000 €. FRNG ?", choix: ["1 450 000 €", "150 000 €", "−150 000 €", "650 000 €"], bonne: 1, expl: "800 000 − 650 000 = 150 000 €.", niv: 2 },
        { q: "FRNG 40 000 €, BFR 55 000 €. Trésorerie nette ?", choix: ["95 000 €", "15 000 €", "−15 000 €", "55 000 €"], bonne: 2, expl: "40 000 − 55 000 = −15 000 € : l'entreprise dépend du découvert.", niv: 2 },
        { q: "Actif circulant hors trésorerie 90 000 €, dettes circulantes hors trésorerie 70 000 €. BFR ?", choix: ["20 000 €", "160 000 €", "−20 000 €", "70 000 €"], bonne: 0, expl: "90 000 − 70 000 = 20 000 €.", niv: 2 },
        { q: "Un découvert bancaire se classe, dans le bilan fonctionnel, en :", choix: ["ressources stables", "emplois stables", "dettes circulantes d'exploitation", "trésorerie passive"], bonne: 3, expl: "Les concours bancaires courants forment la trésorerie passive.", niv: 1 },
        { q: "Créances clients 50 000 €, chiffre d'affaires TTC 600 000 €. Délai de crédit clients ?", choix: ["30 jours", "12 jours", "60 jours", "50 jours"], bonne: 0, expl: "50 000 ÷ 600 000 × 360 = 30 jours.", niv: 2 },
        { q: "Une entreprise accorde à ses clients 60 jours au lieu de 30. Son BFR :", choix: ["baisse", "augmente", "ne change pas", "devient négatif"], bonne: 1, expl: "Elle attend plus longtemps son argent : les créances clients, donc le BFR, augmentent.", niv: 2 },
        { q: "Dettes financières 240 000 €, CAF 60 000 €. Capacité de remboursement ?", choix: ["0,25 an", "2 ans", "6 ans", "4 ans"], bonne: 3, expl: "240 000 ÷ 60 000 = 4 ans : il faudrait 4 années de CAF pour rembourser.", niv: 2 },
        { q: "Laquelle de ces mesures réduit le BFR ?", choix: ["Augmenter les stocks de sécurité", "Allonger les délais accordés aux clients", "Obtenir des délais plus longs des fournisseurs", "Payer les fournisseurs comptant"], bonne: 2, expl: "Payer plus tard ses fournisseurs augmente les dettes circulantes, donc réduit le BFR.", niv: 2 },
        { q: "Pourquoi réduire fortement les délais clients peut-il être risqué ?", choix: ["Des clients habitués aux délais pourraient partir", "Cela augmente fortement le besoin en fonds de roulement", "Le FRNG diminuerait aussitôt", "Cela crée une dette fiscale"], bonne: 0, expl: "Toute amélioration financière peut dégrader une autre dimension, ici commerciale.", niv: 3 },
        { q: "Un magasin de jouets fait l'essentiel de ses ventes en décembre. Quelle limite du bilan au 31 décembre cela montre-t-il ?", choix: ["Les valeurs inscrites sont trop récentes pour être utiles", "Le FRNG est faux", "Il ne contient pas de stocks", "C'est une photo à une date, pas toute l'année"], bonne: 3, expl: "À la clôture, stocks et trésorerie sont très différents de ceux du reste de l'année.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 3.1 Financement
    {
      chapitre: 'stmg-gf-7',
      fiche: `## Quels critères d'arbitrage entre les modalités de financement ?

### Pourquoi financer ?
- L'entreprise doit financer ses **investissements** (machines, locaux) et son **besoin en fonds de roulement**. Elle choisit entre des ressources **internes** et **externes**.

### Les financements internes
- L'**autofinancement** : l'entreprise utilise les ressources qu'elle a elle-même dégagées. **Autofinancement = CAF − dividendes versés**. Exemple : CAF 80 000 €, dividendes 20 000 € : autofinancement de **60 000 €**.
- Avantages : pas de dette, pas d'intérêts, indépendance. Limite : souvent insuffisant pour un gros projet, et les associés touchent moins de dividendes.
- Les **apports en compte courant d'associés** : un associé prête de l'argent à sa société. Souple et rapide, mais il pourra demander à être remboursé.

### Les financements externes
- L'**emprunt bancaire** : la banque prête une somme remboursée avec des **intérêts**. Il crée une dette et des charges financières, mais les associés gardent le contrôle.
- L'**augmentation de capital** : de nouveaux apports des associés ou de nouveaux associés. Aucun remboursement ni intérêt, mais le **pouvoir** est partagé et les bénéfices futurs aussi.
- Le **financement participatif** (crowdfunding) : de nombreux particuliers financent un projet par internet, sous forme de **dons** (avec contreparties), de **prêts** ou de prise de **capital**. Il faut un projet attractif et bien présenté.
- Les **subventions** : des aides publiques (État, région, Union européenne) pour certains projets (innovation, emploi, transition écologique). Elles ne se remboursent pas en général, mais sont soumises à des conditions.

### Comparer des modalités de remboursement d'emprunt
- **Amortissements constants** : on rembourse la même part de capital chaque année ; les intérêts baissent, donc l'annuité baisse.
- Exemple : 30 000 € sur 3 ans à 4 %. Année 1 : intérêts 1 200, capital 10 000, **annuité 11 200**. Année 2 : intérêts 800 (sur 20 000), **annuité 10 800**. Année 3 : intérêts 400, **annuité 10 400**. **Coût total : 2 400 €** d'intérêts.
- **Annuités constantes** : on paie la même somme chaque année ; au début elle contient surtout des intérêts.
- **Remboursement in fine** : on ne paie que les intérêts chaque année, et tout le capital à la fin. Même exemple : 1 200 € d'intérêts par an, soit **3 600 €** au total.
- Les simulations se font sur **tableur**.

### Les critères d'arbitrage
- Les **performances** passées et prévues : une entreprise rentable obtient plus facilement un prêt.
- Le **poids et le pouvoir** des associés : veulent-ils garder le contrôle ?
- Le **niveau d'endettement** et la capacité à négocier avec les banques ; les **conditions** d'emprunt (taux, durée, garanties).
- L'**attractivité** du projet pour le financement participatif.
- La possibilité d'obtenir des **subventions**.
- **Sur les documents de synthèse** : l'emprunt augmente les dettes financières et les charges d'intérêts ; l'augmentation de capital augmente les capitaux propres ; l'autofinancement augmente les réserves.

### À retenir pour le bac
- Interne : autofinancement (CAF − dividendes), compte courant d'associés.
- Externe : emprunt, augmentation de capital, financement participatif, subvention.
- Amortissements constants : annuités décroissantes. In fine : plus d'intérêts au total.
- Arbitrer : coût, contrôle, endettement, attractivité du projet.`,
      cartes: [
        { q: "Comment calcule-t-on l'autofinancement ?", r: "CAF − dividendes versés. CAF 80 000 €, dividendes 20 000 € : 60 000 €." },
        { q: "Quels sont les avantages et la limite de l'autofinancement ?", r: "Pas de dette ni d'intérêts, indépendance ; mais souvent insuffisant pour un gros projet." },
        { q: "Qu'est-ce qu'un apport en compte courant d'associé ?", r: "Un prêt qu'un associé fait à sa société : souple et rapide, mais remboursable." },
        { q: "Quel est l'inconvénient d'une augmentation de capital pour les associés actuels ?", r: "Ils partagent le pouvoir et les bénéfices futurs avec les nouveaux apporteurs." },
        { q: "Qu'est-ce que le financement participatif ?", r: "Le financement d'un projet par de nombreux particuliers via internet : dons avec contreparties, prêts ou prise de capital." },
        { q: "Qu'est-ce qu'une subvention ?", r: "Une aide publique accordée sous conditions, en général non remboursable." },
        { q: "Emprunt de 30 000 € sur 3 ans à 4 %, amortissements constants : première annuité ?", r: "Capital 10 000 € + intérêts 30 000 × 4 % = 1 200 € : 11 200 €." },
        { q: "Même emprunt : deuxième annuité ?", r: "Capital 10 000 € + intérêts 20 000 × 4 % = 800 € : 10 800 €." },
        { q: "Qu'est-ce qu'un remboursement in fine ?", r: "On paie seulement les intérêts chaque année, et tout le capital à la fin ; le coût total en intérêts est plus élevé." },
        { q: "Annuités constantes ou amortissements constants ?", r: "Annuités constantes : même somme payée chaque année. Amortissements constants : même part de capital, donc annuités décroissantes." },
        { q: "Quels critères guident le choix d'un financement ?", r: "Les performances de l'entreprise, le contrôle voulu par les associés, l'endettement, les conditions d'emprunt, l'attractivité du projet, les subventions possibles." },
        { q: "Quel effet un emprunt a-t-il sur les documents de synthèse ?", r: "Au bilan, les dettes financières augmentent ; au compte de résultat, les charges d'intérêts apparaissent." },
      ],
      quiz: [
        { q: "CAF 120 000 €, dividendes 30 000 €. Autofinancement ?", choix: ["150 000 €", "120 000 €", "90 000 €", "30 000 €"], bonne: 2, expl: "120 000 − 30 000 = 90 000 €.", niv: 2 },
        { q: "Quel financement ne crée aucune dette et ne partage pas le pouvoir ?", choix: ["L'autofinancement", "L'emprunt bancaire", "L'augmentation de capital", "Le compte courant d'associé"], bonne: 0, expl: "L'entreprise utilise ses propres ressources : pas de remboursement ni de nouvel associé.", niv: 1 },
        { q: "Emprunt de 50 000 € sur 5 ans à 3 %, amortissements constants. Intérêts de la première année ?", choix: ["300 €", "10 000 €", "3 000 €", "1 500 €"], bonne: 3, expl: "50 000 × 3 % = 1 500 €.", niv: 2 },
        { q: "Même emprunt : annuité de la première année ?", choix: ["10 000 €", "11 500 €", "13 000 €", "51 500 €"], bonne: 1, expl: "Capital 50 000 ÷ 5 = 10 000 € + intérêts 1 500 € = 11 500 €.", niv: 2 },
        { q: "Avec des amortissements constants, l'annuité :", choix: ["augmente chaque année", "reste la même", "est payée en une fois", "diminue chaque année"], bonne: 3, expl: "Le capital restant dû baisse, donc les intérêts et l'annuité baissent.", niv: 1 },
        { q: "Des associés qui refusent de partager le pouvoir éviteront plutôt :", choix: ["l'emprunt bancaire", "l'autofinancement", "l'entrée de nouveaux associés au capital", "les apports en compte courant des associés actuels"], bonne: 2, expl: "Les nouveaux associés auront des droits de vote et une part des bénéfices.", niv: 2 },
        { q: "Une jeune marque de cosmétiques fait financer sa première production par 800 internautes, contre des produits offerts. C'est :", choix: ["du financement participatif", "une subvention", "un emprunt bancaire", "de l'autofinancement"], bonne: 0, expl: "Des dons de particuliers avec contreparties : c'est le financement participatif.", niv: 1 },
        { q: "Pour un même emprunt, quel mode de remboursement coûte le plus en intérêts ?", choix: ["Les amortissements constants", "Le remboursement in fine", "Les annuités constantes", "Ils coûtent exactement pareil"], bonne: 1, expl: "Le capital reste dû en entier jusqu'à la fin : les intérêts sont calculés chaque année sur toute la somme.", niv: 3 },
        { q: "Une entreprise déjà très endettée cherche à financer une machine. Quelle solution est la plus réaliste ?", choix: ["Faire appel aux associés ou à l'autofinancement", "Emprunter encore davantage, sans apporter de garantie", "Supprimer ses capitaux propres", "Renoncer à investir"], bonne: 0, expl: "Les banques hésitent à prêter à une entreprise déjà endettée : des fonds propres rassurent.", niv: 3 },
        { q: "Une augmentation de capital apparaît au bilan dans :", choix: ["les dettes financières", "l'actif immobilisé", "les capitaux propres", "les dettes fournisseurs"], bonne: 2, expl: "Les apports des associés augmentent les capitaux propres.", niv: 2 },
      ],
    },
    // ---------------------------------------------------------------- 3.2 Trésorerie
    {
      chapitre: 'stmg-gf-8',
      fiche: `## Optimiser la trésorerie, une nécessité ?

### Le budget de trésorerie
- Le **budget de trésorerie** prévoit, mois par mois, les **encaissements** (ventes encaissées, apports, emprunts obtenus) et les **décaissements** (achats payés, salaires, TVA, remboursements d'emprunt, investissements).
- **Trésorerie de fin de mois** = trésorerie de début de mois + encaissements − décaissements.
- Exemple : début 5 000 €, encaissements 40 000 €, décaissements 52 000 € : fin de mois **−7 000 €**. Il faut trouver une solution avant ce mois.
- Le budget se construit sur **tableur** : on peut tester l'effet d'une décision (retarder un achat, accorder moins de délai aux clients).

### Pourquoi optimiser ?
- Une **insuffisance** de trésorerie qui dure peut mener à la **défaillance** : l'entreprise ne peut plus payer ses dettes à l'échéance (cessation des paiements).
- Un **excédent** non placé est de l'argent qui **dort** : il ne rapporte rien.
- Optimiser, c'est donc éviter les deux : avoir assez, sans trop.

### En cas d'insuffisance
- **Agir sur le BFR** : demander aux clients de payer plus vite (ou proposer un escompte pour paiement rapide), négocier des délais plus longs avec les fournisseurs, réduire les stocks.
- **Recourir aux concours bancaires courants** :
- la **facilité de caisse** couvre un besoin de quelques jours (à la fin du mois, avant les encaissements) ;
- le **découvert autorisé** couvre un besoin de quelques semaines ou mois.
- Ils coûtent des **intérêts** (agios). Exemple : découvert de 10 000 € pendant 36 jours à 9 % par an : 10 000 × 9 % × 36 ÷ 360 = **90 €**.
- **Apports en compte courant d'associés** : les associés prêtent à la société.
- On peut aussi **décaler** un investissement non urgent.

### En cas d'excédent
- **Placer** l'argent : compte à terme, livret, titres de placement (valeurs mobilières de placement).
- Critères de choix : la **rentabilité** (ce que cela rapporte), la **liquidité** (pouvoir récupérer l'argent vite) et le **risque** (pouvoir perdre une partie de la somme). Plus un placement rapporte, plus il est en général risqué ou bloqué longtemps.
- Rembourser par avance un emprunt coûteux est une autre possibilité, si le contrat le permet sans pénalité trop lourde.

### À retenir pour le bac
- Trésorerie fin = début + encaissements − décaissements.
- Insuffisance : agir sur le BFR, facilité de caisse ou découvert, compte courant d'associés.
- Excédent : placements, en arbitrant rentabilité, liquidité et risque.
- Intérêts d'un découvert = montant × taux × jours ÷ 360.`,
      cartes: [
        { q: "Qu'est-ce qu'un budget de trésorerie ?", r: "La prévision, mois par mois, des encaissements et des décaissements de l'entreprise." },
        { q: "Comment calcule-t-on la trésorerie de fin de mois ?", r: "Trésorerie de début de mois + encaissements − décaissements." },
        { q: "Début 5 000 €, encaissements 40 000 €, décaissements 52 000 € : trésorerie de fin ?", r: "5 000 + 40 000 − 52 000 = −7 000 €." },
        { q: "Pourquoi une insuffisance de trésorerie est-elle dangereuse ?", r: "Si elle dure, l'entreprise ne peut plus payer ses dettes à l'échéance : c'est la défaillance." },
        { q: "Pourquoi un excédent de trésorerie non placé est-il un problème ?", r: "C'est de l'argent qui dort : il ne rapporte rien." },
        { q: "Comment agir sur le BFR pour améliorer la trésorerie ?", r: "Faire payer les clients plus vite, obtenir des délais plus longs des fournisseurs, réduire les stocks." },
        { q: "Facilité de caisse ou découvert autorisé ?", r: "La facilité de caisse couvre quelques jours ; le découvert autorisé couvre quelques semaines ou mois." },
        { q: "Comment calcule-t-on les intérêts d'un découvert ?", r: "Montant × taux annuel × nombre de jours ÷ 360." },
        { q: "Découvert de 10 000 € pendant 36 jours à 9 % : intérêts ?", r: "10 000 × 9 % × 36 ÷ 360 = 90 €." },
        { q: "Qu'est-ce qu'un apport en compte courant d'associé pour la trésorerie ?", r: "Un prêt des associés à la société, qui renforce rapidement sa trésorerie." },
        { q: "Quels critères pour choisir un placement ?", r: "La rentabilité, la liquidité (récupérer l'argent vite) et le risque." },
        { q: "Pourquoi un placement très rentable est-il souvent moins sûr ?", r: "Une rentabilité élevée va en général avec plus de risque ou une somme bloquée plus longtemps." },
      ],
      quiz: [
        { q: "Trésorerie début 12 000 €, encaissements 30 000 €, décaissements 35 000 €. Trésorerie de fin ?", choix: ["−5 000 €", "17 000 €", "47 000 €", "7 000 €"], bonne: 3, expl: "12 000 + 30 000 − 35 000 = 7 000 €.", niv: 2 },
        { q: "Une entreprise a besoin de 3 000 € pendant 4 jours, en attendant un encaissement. La solution la plus adaptée :", choix: ["une augmentation de capital", "une facilité de caisse", "un emprunt sur 5 ans", "une subvention"], bonne: 1, expl: "La facilité de caisse couvre un besoin de quelques jours.", niv: 2 },
        { q: "Découvert de 6 000 € pendant 60 jours à 12 % par an. Intérêts ?", choix: ["720 €", "12 €", "120 €", "60 €"], bonne: 2, expl: "6 000 × 12 % × 60 ÷ 360 = 120 €.", niv: 2 },
        { q: "Laquelle de ces mesures améliore la trésorerie sans recourir à la banque ?", choix: ["Faire payer les clients plus vite", "Augmenter les stocks", "Payer les fournisseurs plus tôt", "Acheter une machine comptant"], bonne: 0, expl: "L'argent des clients rentre plus tôt : la trésorerie s'améliore.", niv: 2 },
        { q: "Qu'est-ce que la défaillance d'une entreprise ?", choix: ["Un excédent de trésorerie", "Une baisse passagère des ventes pendant un seul mois", "L'impossibilité de payer ses dettes à l'échéance", "Un placement risqué"], bonne: 2, expl: "Une insuffisance de trésorerie qui dure peut conduire à la cessation des paiements.", niv: 1 },
        { q: "Une entreprise a 50 000 € d'avance dont elle aura besoin dans deux mois. Quel placement privilégier ?", choix: ["Des actions très risquées", "Un placement bloqué cinq ans, au meilleur taux du marché", "Un bien immobilier", "Un placement liquide et sûr, même peu rentable"], bonne: 3, expl: "Elle doit pouvoir récupérer l'argent vite et sans perte : la liquidité et la sécurité passent avant le rendement.", niv: 3 },
        { q: "Dans un budget de trésorerie, une vente de mars payée par le client en mai est un encaissement de :", choix: ["mars", "mai", "avril", "décembre"], bonne: 1, expl: "Le budget de trésorerie suit la date du paiement, pas la date de la vente.", niv: 2 },
        { q: "Les associés prêtent 20 000 € à leur société pour passer un mois difficile. C'est :", choix: ["un apport en compte courant d'associé", "une augmentation de capital", "un découvert bancaire", "une subvention"], bonne: 0, expl: "Un prêt des associés à la société, remboursable : c'est le compte courant d'associé.", niv: 1 },
        { q: "Pourquoi garder une trésorerie très élevée en permanence n'est-il **pas** optimal ?", choix: ["C'est interdit par la loi", "Cela augmente le BFR", "L'argent qui dort ne rapporte rien", "Les banques le refusent"], bonne: 2, expl: "Un excédent non placé prive l'entreprise de revenus.", niv: 3 },
        { q: "Quelle affirmation sur la rentabilité d'un placement est juste ?", choix: ["Le placement le plus rentable est aussi le plus sûr", "La liquidité ne compte pas dans le choix d'un placement", "Le risque est identique partout", "Une forte rentabilité va souvent avec plus de risque"], bonne: 3, expl: "On arbitre entre rentabilité, liquidité et risque.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 3.3 Affectation du résultat
    {
      chapitre: 'stmg-gf-9',
      fiche: `## L'affectation du résultat, un choix qui engage l'avenir ?

### Qui décide ?
- Dans une société, ce sont les **associés** (en **assemblée générale ordinaire**) qui décident de l'**affectation du résultat**, dans les **six mois** qui suivent la clôture de l'exercice.
- Le dirigeant fait une proposition : il doit concilier deux attentes, **garder des ressources** pour l'entreprise et **satisfaire les propriétaires**.

### Les affectations possibles d'un bénéfice
- La **réserve légale** (obligatoire dans les SA et les SARL) : chaque année, **5 % du bénéfice** (diminué des pertes antérieures), jusqu'à ce qu'elle atteigne **10 % du capital**.
- Les **réserves statutaires** : prévues par les statuts de la société.
- Les **réserves facultatives** : décidées librement par les associés.
- Les **dividendes** : la part distribuée aux associés.
- Le **report à nouveau** : une petite somme laissée en attente, qui sera ajoutée au résultat de l'exercice suivant.
- Les réserves restent dans l'entreprise : elles augmentent les **capitaux propres** et l'**autofinancement**.

### Un exemple complet
- Bénéfice 40 000 €, capital 100 000 €, réserve légale déjà constituée 8 000 €.
- Réserve légale : 5 % × 40 000 = 2 000 € ; elle atteint 10 000 €, soit exactement 10 % du capital.
- **Bénéfice distribuable** = bénéfice − pertes antérieures − dotations aux réserves obligatoires + report à nouveau bénéficiaire. Ici : 40 000 − 2 000 = **38 000 €**.
- Les associés décident par exemple : dividendes 25 000 €, réserves facultatives 10 000 €, report à nouveau 3 000 €. Total : 38 000 €.
- Si la réserve légale est presque complète, on ne dote que ce qui manque : capital 200 000 €, réserve légale déjà 19 000 €, bénéfice 60 000 € → 5 % ferait 3 000 €, mais il ne manque que **1 000 €** pour atteindre 20 000 €.

### Un choix qui engage l'avenir
- **Mettre en réserve** : l'entreprise se renforce, finance ses investissements sans s'endetter, rassure les banques. Mais les associés ne touchent rien tout de suite.
- **Distribuer** : les associés sont récompensés de leur risque, ce qui les fidélise et attire de nouveaux investisseurs. Mais l'entreprise s'affaiblit si elle distribue trop.
- Pour une société **cotée** qui fait **appel public à l'épargne**, la politique de dividendes est un **signal** suivi par les marchés : une baisse peut faire chuter le cours de l'action.
- Une **perte** n'est pas distribuée : elle est en général inscrite en report à nouveau débiteur, et devra être compensée par les bénéfices futurs.

### À retenir pour le bac
- Décision des associés en assemblée générale ordinaire, dans les 6 mois.
- Réserve légale : 5 % du bénéfice jusqu'à 10 % du capital.
- Bénéfice distribuable = bénéfice − pertes antérieures − réserves obligatoires + report à nouveau.
- Réserves (autofinancement) contre dividendes (satisfaction des associés).`,
      cartes: [
        { q: "Qui décide de l'affectation du résultat ?", r: "Les associés, en assemblée générale ordinaire, dans les six mois qui suivent la clôture de l'exercice." },
        { q: "Comment se calcule la réserve légale ?", r: "5 % du bénéfice (diminué des pertes antérieures) chaque année, jusqu'à ce qu'elle atteigne 10 % du capital." },
        { q: "Réserves statutaires ou facultatives ?", r: "Les statutaires sont prévues par les statuts ; les facultatives sont décidées librement par les associés." },
        { q: "Qu'est-ce que le report à nouveau ?", r: "Une somme laissée en attente, ajoutée au résultat de l'exercice suivant." },
        { q: "Comment calcule-t-on le bénéfice distribuable ?", r: "Bénéfice − pertes antérieures − dotations aux réserves obligatoires + report à nouveau bénéficiaire." },
        { q: "Bénéfice 40 000 €, capital 100 000 €, réserve légale déjà 8 000 € : dotation à la réserve légale ?", r: "5 % × 40 000 = 2 000 € ; la réserve atteint 10 000 €, soit 10 % du capital." },
        { q: "Même exemple : bénéfice distribuable ?", r: "40 000 − 2 000 = 38 000 €." },
        { q: "Capital 200 000 €, réserve légale déjà 19 000 €, bénéfice 60 000 € : dotation ?", r: "5 % donnerait 3 000 €, mais il ne manque que 1 000 € pour atteindre 20 000 € : on dote 1 000 €." },
        { q: "Quel est l'intérêt de mettre le bénéfice en réserve ?", r: "Renforcer les capitaux propres et financer les investissements sans s'endetter." },
        { q: "Quel est l'intérêt de distribuer des dividendes ?", r: "Récompenser les associés de leur risque, les fidéliser et attirer de nouveaux investisseurs." },
        { q: "Pourquoi les dividendes sont-ils un signal pour une société cotée ?", r: "Les marchés suivent sa politique de dividendes : une baisse peut faire chuter le cours de l'action." },
        { q: "Que devient une perte ?", r: "Elle n'est pas distribuée : elle est en général inscrite en report à nouveau débiteur et compensée par les bénéfices futurs." },
      ],
      quiz: [
        { q: "Quelle instance décide de l'affectation du résultat d'une société ?", choix: ["L'assemblée générale ordinaire des associés", "Le comptable", "Le comité social et économique de l'entreprise", "La banque"], bonne: 0, expl: "Ce sont les associés, réunis en assemblée générale ordinaire.", niv: 1 },
        { q: "Bénéfice 80 000 €, capital 500 000 €, réserve légale déjà 10 000 €. Dotation à la réserve légale ?", choix: ["8 000 €", "50 000 €", "4 000 €", "40 000 €"], bonne: 2, expl: "5 % × 80 000 = 4 000 € ; la réserve (14 000 €) reste sous les 50 000 € de plafond.", niv: 2 },
        { q: "Jusqu'à quel montant la réserve légale doit-elle être dotée ?", choix: ["5 % du bénéfice cumulé", "10 % du capital", "50 % du capital", "La totalité du capital"], bonne: 1, expl: "On dote 5 % du bénéfice chaque année jusqu'à atteindre 10 % du capital.", niv: 1 },
        { q: "Capital 150 000 €, réserve légale déjà 14 500 €, bénéfice 30 000 €. Dotation à la réserve légale ?", choix: ["1 500 €", "3 000 €", "15 000 €", "500 €"], bonne: 3, expl: "5 % donnerait 1 500 €, mais il ne manque que 500 € pour atteindre 15 000 € (10 % du capital).", niv: 3 },
        { q: "Bénéfice 50 000 €, réserve légale à doter 2 500 €, pas de report à nouveau ni de perte antérieure. Bénéfice distribuable ?", choix: ["47 500 €", "50 000 €", "52 500 €", "2 500 €"], bonne: 0, expl: "50 000 − 2 500 = 47 500 €.", niv: 2 },
        { q: "Mettre une grande partie du bénéfice en réserves facultatives permet surtout :", choix: ["de payer plus de dividendes cette année", "de renforcer l'autofinancement", "de réduire le capital", "de supprimer la réserve légale"], bonne: 1, expl: "Les réserves restent dans l'entreprise et financent ses projets.", niv: 2 },
        { q: "Une société cotée réduit brutalement son dividende. Quel risque court-elle ?", choix: ["Payer plus d'impôts", "Perdre sa réserve légale", "Voir baisser le cours de son action", "Devoir rembourser ses emprunts"], bonne: 2, expl: "Le dividende est un signal suivi par les marchés : sa baisse inquiète les investisseurs.", niv: 3 },
        { q: "Une société a fait une perte. Que peuvent décider les associés ?", choix: ["La distribuer en dividendes", "La mettre en réserve légale", "L'ajouter au capital", "L'inscrire en report à nouveau débiteur"], bonne: 3, expl: "Une perte n'est pas distribuable : elle sera compensée par les bénéfices futurs.", niv: 2 },
        { q: "Dans quel délai après la clôture l'affectation du résultat doit-elle être décidée ?", choix: ["Un mois", "Trois mois", "Six mois", "Un an"], bonne: 2, expl: "L'assemblée générale ordinaire se tient dans les six mois suivant la clôture.", niv: 1 },
        { q: "Pourquoi distribuer tout le bénéfice chaque année peut-il fragiliser une entreprise ?", choix: ["Elle n'a plus de ressources propres pour investir", "La loi interdit de distribuer plus de la moitié du bénéfice", "Les associés n'ont pas le droit de toucher de dividendes", "Cela augmente son capital"], bonne: 0, expl: "Sans mise en réserve, l'entreprise dépend des emprunts pour se développer.", niv: 3 },
      ],
    },
    // ---------------------------------------------------------------- 3.4 Analyse des coûts
    {
      chapitre: 'stmg-gf-10',
      fiche: `## Qu'apporte l'analyse des coûts à la prise de décision ?

### Un coût, des méthodes
- Un **coût** est une somme de charges. Il est **pertinent** pour décider si les charges retenues correspondent à la situation et aux objectifs de l'organisation.
- La **comptabilité de gestion** propose plusieurs méthodes : coût complet, coût partiel (variable), coût spécifique, coût marginal.

### Le coût complet
- Il retient **toutes** les charges : les **charges directes** (qui concernent un seul produit, comme ses matières premières) et les **charges indirectes** (communes à plusieurs produits, comme le loyer de l'usine), réparties entre les produits.
- **Résultat d'un produit** = chiffre d'affaires du produit − son coût complet (coût de revient). On sait si **chaque produit** est rentable.
- Limite : la répartition des charges indirectes est en partie **arbitraire** ; un produit peut paraître déficitaire alors qu'il aide à couvrir les frais communs.

### Le coût partiel : coût variable et seuil de rentabilité
- On sépare les **charges variables** (qui suivent le volume : matières, commissions) et les **charges fixes** (qui ne changent pas à court terme : loyer, assurances).
- **Marge sur coût variable** (MCV) = chiffre d'affaires − charges variables.
- **Résultat** = MCV − charges fixes.
- **Taux de MCV** = MCV ÷ chiffre d'affaires.
- **Seuil de rentabilité** = charges fixes ÷ taux de MCV : le chiffre d'affaires à partir duquel l'entreprise ne perd plus d'argent.
- Exemple : chiffre d'affaires 200 000 €, charges variables 120 000 €, charges fixes 60 000 €. MCV = 80 000 € ; taux = 40 % ; résultat = **20 000 €** ; seuil = 60 000 ÷ 0,40 = **150 000 €**.
- **Point mort** (date où le seuil est atteint, activité régulière sur l'année) = seuil ÷ chiffre d'affaires × 360 = 150 000 ÷ 200 000 × 360 = **270 jours**, soit le **30 septembre**.
- **Marge de sécurité** = chiffre d'affaires − seuil = 50 000 € : le chiffre d'affaires peut baisser de 50 000 € avant de faire une perte.

### Le coût spécifique
- Il prolonge le coût variable : on enlève aussi les **charges fixes spécifiques** à chaque produit (celles qui disparaîtraient si on l'abandonnait, comme une machine dédiée).
- **Marge sur coût spécifique** = MCV − charges fixes spécifiques. Elle doit contribuer à couvrir les **charges communes**.
- Un produit dont la marge sur coût spécifique est **négative** coûte plus qu'il ne rapporte : on peut envisager de l'abandonner. Si elle est positive, l'abandonner ferait baisser le résultat global, même si son coût complet montre une perte.

### Le coût marginal et la commande supplémentaire
- Le **coût marginal** est le coût de la **dernière unité** ou de la **dernière commande** produite : la variation du coût total.
- Si l'entreprise a de la capacité inutilisée, une commande supplémentaire n'ajoute souvent que des charges variables.
- Exemple : 1 000 unités proposées à 9 €, coût variable 7 € l'unité, sans charge fixe en plus : résultat **+2 000 €**. Si la commande exige 3 000 € de charges fixes en plus (une équipe de nuit) : 2 000 − 3 000 = **−1 000 €**, elle est à refuser.
- Règle : accepter si le prix dépasse le **coût marginal**, en vérifiant l'effet sur les clients habituels (qui pourraient réclamer le même prix).

### À retenir pour le bac
- Coût complet : rentabilité de chaque produit, mais répartition arbitraire des charges indirectes.
- MCV = CA − charges variables ; résultat = MCV − charges fixes.
- Seuil = charges fixes ÷ taux de MCV ; point mort en jours.
- Marge sur coût spécifique : décider de garder ou d'abandonner un produit.
- Commande supplémentaire : comparer le prix au coût marginal.`,
      cartes: [
        { q: "Charges directes ou indirectes ?", r: "Directes : elles concernent un seul produit (ses matières). Indirectes : communes à plusieurs produits (le loyer), à répartir." },
        { q: "Quelle est la limite du coût complet ?", r: "La répartition des charges indirectes est en partie arbitraire : un produit peut paraître déficitaire alors qu'il couvre une partie des frais communs." },
        { q: "Charges variables ou fixes ?", r: "Variables : elles suivent le volume d'activité. Fixes : elles ne changent pas à court terme (loyer, assurances)." },
        { q: "Comment calcule-t-on la marge sur coût variable ?", r: "Chiffre d'affaires − charges variables." },
        { q: "Comment calcule-t-on le seuil de rentabilité ?", r: "Charges fixes ÷ taux de marge sur coût variable." },
        { q: "CA 200 000 €, charges variables 120 000 €, charges fixes 60 000 € : seuil de rentabilité ?", r: "MCV 80 000 € ; taux 40 % ; seuil = 60 000 ÷ 0,40 = 150 000 €." },
        { q: "Même exemple : point mort, activité régulière ?", r: "150 000 ÷ 200 000 × 360 = 270 jours, soit le 30 septembre." },
        { q: "Qu'est-ce que la marge de sécurité ?", r: "Chiffre d'affaires − seuil de rentabilité : la baisse de CA possible avant de faire une perte." },
        { q: "Qu'est-ce que la marge sur coût spécifique ?", r: "MCV − charges fixes spécifiques au produit. Elle doit contribuer à couvrir les charges communes." },
        { q: "Quand envisager d'abandonner un produit ?", r: "Quand sa marge sur coût spécifique est négative : il coûte plus qu'il ne rapporte." },
        { q: "Qu'est-ce que le coût marginal ?", r: "Le coût de la dernière unité ou commande produite : la variation du coût total." },
        { q: "1 000 unités à 9 €, coût variable 7 €, 3 000 € de charges fixes en plus : faut-il accepter ?", r: "Marge 2 000 € − 3 000 € = −1 000 € : non, la commande ferait baisser le résultat." },
      ],
      quiz: [
        { q: "Chiffre d'affaires 300 000 €, charges variables 180 000 €. Marge sur coût variable ?", choix: ["480 000 €", "120 000 €", "180 000 €", "60 %"], bonne: 1, expl: "300 000 − 180 000 = 120 000 €.", niv: 1 },
        { q: "Même entreprise, charges fixes 90 000 €. Seuil de rentabilité ?", choix: ["150 000 €", "300 000 €", "90 000 €", "225 000 €"], bonne: 3, expl: "Taux de MCV = 120 000 ÷ 300 000 = 40 % ; seuil = 90 000 ÷ 0,40 = 225 000 €.", niv: 2 },
        { q: "Seuil de rentabilité 225 000 €, chiffre d'affaires 300 000 €, activité régulière. Point mort ?", choix: ["270 jours", "75 jours", "300 jours", "225 jours"], bonne: 0, expl: "225 000 ÷ 300 000 × 360 = 270 jours, soit fin septembre.", niv: 2 },
        { q: "Le loyer de l'atelier, partagé entre trois produits, est une charge :", choix: ["directe", "variable", "indirecte", "marginale"], bonne: 2, expl: "Elle est commune à plusieurs produits : il faut la répartir.", niv: 1 },
        { q: "Un produit a une MCV de 30 000 € et 35 000 € de charges fixes spécifiques. Sa marge sur coût spécifique :", choix: ["est de 65 000 €", "est de 30 000 €", "ne peut pas se calculer", "est négative : −5 000 €"], bonne: 3, expl: "30 000 − 35 000 = −5 000 € : il coûte plus qu'il ne rapporte.", niv: 2 },
        { q: "Un produit est déficitaire en coût complet, mais sa marge sur coût spécifique est positive. Que se passerait-il s'il était abandonné ?", choix: ["Le résultat global baisserait", "Le résultat global augmenterait", "Rien ne changerait", "Les charges communes disparaîtraient"], bonne: 0, expl: "Il contribuait à couvrir les charges communes, qui restent après l'abandon.", niv: 3 },
        { q: "L'entreprise a de la capacité inutilisée. Une commande de 500 unités à 12 €, coût variable 10 €, sans charge fixe en plus, rapporte :", choix: ["6 000 €", "5 000 €", "1 000 €", "−1 000 €"], bonne: 2, expl: "500 × (12 − 10) = 1 000 € de résultat en plus.", niv: 2 },
        { q: "Une commande spéciale est acceptable quand son prix dépasse :", choix: ["le coût complet moyen", "le coût marginal de la commande", "le prix habituel", "le seuil de rentabilité"], bonne: 1, expl: "Si le prix couvre ce que la commande coûte en plus, le résultat augmente.", niv: 2 },
        { q: "Quelle méthode montre si chaque produit est rentable en tenant compte de toutes les charges ?", choix: ["Le coût complet", "Le coût marginal", "Le seuil de rentabilité", "La marge de sécurité"], bonne: 0, expl: "Le coût complet retient toutes les charges, directes et indirectes.", niv: 1 },
        { q: "Quel risque commercial présente une commande acceptée à prix très bas ?", choix: ["Les clients habituels pourraient réclamer ce prix", "Elle fait monter les charges fixes de toute l'usine", "Le seuil de rentabilité baisserait aussitôt", "La loi interdit de vendre sous le prix catalogue"], bonne: 0, expl: "Le calcul du coût marginal ne suffit pas : il faut aussi penser aux effets sur les autres clients.", niv: 3 },
      ],
    },
  ],
  methode: [
    {
      id: 'stmg-gf-m1', mat: 'stmg-gf', titre: "Grand oral : formuler sa question de gestion et finance",
      formules: ["Comment [une entreprise] peut-elle financer… ?", "En quoi [un indicateur] permet-il de… ?", "[Une décision financière] est-elle toujours favorable à… ?"],
      vu: ["Grand oral, voie technologique, à partir de 2027 : les questions sont liées à la spécialité dans laquelle l'élève mène son projet"],
      pts: "Grand oral sur 20, coefficient 12 en voie technologique à partir de 2027",
      attendu: "Une vraie question de gestion, qui n'a pas de réponse évidente, liée au programme de gestion et finance et au projet mené en classe. Elle porte sur une organisation réelle et permet d'utiliser des notions et des calculs du programme.",
      etapes: ["Partir du projet mené en gestion et finance et de l'entreprise étudiée.", "Repérer la question du programme concernée (comptabilité, performance, structure financière, financement, trésorerie, affectation du résultat, coûts).", "Formuler une question ouverte, qui appelle une réponse nuancée.", "Vérifier qu'on peut y répondre avec des notions précises et quelques chiffres simples.", "La tester devant quelqu'un : la comprend-il sans explication ?"],
      mots: ["comment", "en quoi", "dans quelle mesure", "financement", "pérennité"],
      pieges: ["Une question trop large (« la comptabilité sert-elle à quelque chose ? »).", "Une question fermée, à laquelle on répond par oui ou par non sans réfléchir.", "Une question sans entreprise réelle à étudier.", "Une question purement technique, sans enjeu de décision."],
      cas: "Projet de classe : l'étude d'une boulangerie artisanale de 8 salariés qui veut acheter un four à 60 000 € pour ouvrir un rayon de snacking.",
      question: "Formule une question de grand oral à partir de ce projet.",
      modele: "« Comment une boulangerie artisanale peut-elle financer un nouvel investissement sans fragiliser sa structure financière ? » Cette question part d'une entreprise réelle, renvoie à la question 3.1 du programme (critères d'arbitrage entre les financements) et à la question 2.2 (structure financière), et n'a pas de réponse évidente : l'emprunt garde le contrôle aux associés mais endette l'entreprise, l'autofinancement est sûr mais souvent insuffisant.",
      grille: ["Ma question porte sur une entreprise précise.", "Elle renvoie à au moins une question du programme.", "Elle n'a pas de réponse évidente.", "Elle se comprend sans explication."],
    },
    {
      id: 'stmg-gf-m2', mat: 'stmg-gf', titre: "Grand oral : construire l'exposé de 10 minutes",
      formules: ["Introduction : accroche, contexte, question", "Développement en deux parties", "Conclusion : réponse et ouverture"],
      vu: ["Grand oral 2027 : 20 minutes de préparation, puis 10 minutes d'exposé et 10 minutes d'échange"],
      pts: "La qualité de l'argumentation et la maîtrise des notions comptent pour une grande part de la note",
      attendu: "Un exposé clair, sans lire ses notes, qui présente l'entreprise, pose la question, y répond en deux temps avec des notions et quelques chiffres justes, puis conclut. Les calculs se citent simplement : un ou deux chiffres bien expliqués valent mieux qu'un tableau récité.",
      etapes: ["Accroche concrète (un chiffre, une scène, un produit).", "Présenter l'entreprise en quelques phrases (activité, taille, forme juridique).", "Poser la question et annoncer les deux parties.", "Partie 1 : les solutions possibles, avec deux notions et un calcul simple.", "Partie 2 : leurs limites et les critères de choix.", "Conclusion : répondre clairement, puis ouvrir."],
      mots: ["autofinancement", "CAF", "emprunt", "fonds de roulement", "indépendance financière"],
      pieges: ["Réciter un cours de comptabilité sans répondre à la question.", "Donner un chiffre faux ou sans unité.", "Lire ses notes.", "Dépasser les 10 minutes ou finir en 4 minutes."],
      cas: "Même question sur la boulangerie : four à 60 000 €, CAF de 40 000 €, dividendes prévus 10 000 €, capitaux propres 120 000 €, emprunts déjà en cours 30 000 €.",
      question: "Donne le plan détaillé de l'exposé, avec les calculs utiles.",
      modele: "Accroche : « Un four à 60 000 €, c'est le prix d'une petite maison de village, pour une boulangerie qui vend des baguettes à 1,20 €. » Présentation : une SARL de 8 salariés, deux associés. Question et annonce. I. Plusieurs financements sont possibles. L'autofinancement : 40 000 − 10 000 = 30 000 € disponibles, soit la moitié du four. Un emprunt pour le reste : 30 000 € sur 3 ans à 4 % en amortissements constants coûte 2 400 € d'intérêts (annuités 11 200, 10 800 et 10 400 €). II. Le choix dépend de critères. Endettement : les dettes financières passeraient à 60 000 €, soit 1,5 année de CAF, ce qui reste raisonnable. Contrôle : les associés gardent le pouvoir. Mais il faut que le snacking rapporte plus que le coût de l'emprunt. Conclusion : un financement mixte (moitié autofinancement, moitié emprunt) préserve la structure financière ; ouverture sur une subvention régionale possible.",
      grille: ["Mon accroche est concrète.", "Mes calculs sont justes et expliqués avec des mots.", "Chaque partie utilise au moins deux notions du programme.", "Ma conclusion répond à la question."],
    },
    {
      id: 'stmg-gf-m3', mat: 'stmg-gf', titre: "Grand oral : répondre aux questions du jury",
      formules: ["Pouvez-vous définir… ?", "Comment avez-vous calculé… ?", "Et si l'entreprise choisissait plutôt… ?", "Quelle limite voyez-vous à… ?"],
      vu: ["Grand oral 2027 : 10 minutes d'échange après l'exposé, sur la question et sur le programme de la spécialité"],
      pts: "L'échange compte autant que l'exposé dans la note",
      attendu: "Des réponses courtes et précises, qui définissent les notions, refont un calcul à voix haute si on le demande, et osent nuancer. Le jury vérifie que l'élève comprend vraiment ses chiffres.",
      etapes: ["Écouter la question jusqu'au bout et la reformuler si besoin.", "Commencer par la réponse directe.", "Définir la notion en une phrase.", "Expliquer le calcul étape par étape, avec les unités.", "Nuancer si la question l'appelle, sans se contredire."],
      mots: ["autrement dit", "par exemple", "cela dépend de", "le calcul donne", "je n'ai pas étudié ce point, mais"],
      pieges: ["Ne pas savoir refaire un calcul qu'on a cité.", "Inventer un chiffre.", "Confondre bénéfice et trésorerie.", "Ne pas savoir définir un mot utilisé dans l'exposé."],
      cas: "Pendant l'échange, le jury demande : « Vous avez parlé de CAF. Pouvez-vous la définir, et dire pourquoi elle n'est pas égale au bénéfice ? »",
      question: "Rédige la réponse que tu donnerais.",
      modele: "La capacité d'autofinancement, c'est la ressource que l'activité laisse à l'entreprise pour investir, rembourser ses emprunts ou payer des dividendes. Elle n'est pas égale au bénéfice parce que certaines charges ne font sortir aucun argent : les dotations aux amortissements. On les rajoute au résultat. Par exemple, pour la boulangerie, un bénéfice de 25 000 € et 15 000 € de dotations donnent une CAF de 40 000 €. Attention : la CAF n'est pas non plus la trésorerie, car les clients et les fournisseurs ne paient pas tout de suite.",
      grille: ["J'ai défini la notion en une phrase.", "J'ai répondu directement à la question posée.", "J'ai donné un calcul juste avec un exemple.", "Ma réponse dure moins d'une minute."],
    },
    {
      id: 'stmg-gf-m4', mat: 'stmg-gf', titre: "Analyser la situation financière d'une entreprise (oral et écrit commun)",
      formules: ["Calculez le fonds de roulement, le besoin en fonds de roulement et la trésorerie nette.", "Analysez la structure financière de l'entreprise.", "Proposez des solutions pour améliorer sa trésorerie."],
      vu: ["Grand oral (analyse de l'entreprise du projet)", "Écrit de management : questions sur la performance et les ressources financières d'une organisation, où ces calculs aident"],
      pts: "Une analyse qui sert à la fois à l'exposé du grand oral et aux questions de l'écrit commun",
      attendu: "Poser chaque formule, faire le calcul avec les unités, puis interpréter chaque résultat en une phrase (bon ou inquiétant, et pourquoi), et terminer par des solutions réalistes avec leurs limites.",
      etapes: ["Écrire la formule avant le calcul.", "Calculer le FRNG, puis le BFR, puis la trésorerie nette, et vérifier que TN = FRNG − BFR.", "Interpréter chaque résultat : qui finance quoi ?", "Calculer un ou deux ratios utiles (délai clients, indépendance financière).", "Proposer deux solutions (agir sur le BFR, renforcer les ressources stables) et dire leur limite."],
      mots: ["fonds de roulement", "besoin en fonds de roulement", "trésorerie nette", "délai clients", "indépendance financière"],
      pieges: ["Donner un résultat sans la formule ni l'unité.", "Calculer sans interpréter.", "Oublier que le découvert est de la trésorerie passive.", "Proposer une solution sans voir son effet secondaire."],
      cas: "Une entreprise de matériel de jardin a 400 000 € de ressources stables (dont 240 000 € de capitaux propres) et 340 000 € d'emplois stables. Son actif circulant hors trésorerie est de 180 000 € (dont 90 000 € de créances clients) et ses dettes circulantes hors trésorerie de 100 000 €. Son chiffre d'affaires TTC est de 540 000 €.",
      question: "Analyse sa structure financière et propose une solution.",
      modele: "FRNG = ressources stables − emplois stables = 400 000 − 340 000 = 60 000 € : les ressources durables financent les immobilisations et il reste 60 000 €. BFR = actif circulant − dettes circulantes = 180 000 − 100 000 = 80 000 €. Trésorerie nette = FRNG − BFR = 60 000 − 80 000 = −20 000 € : le fonds de roulement ne couvre pas tout le besoin, l'entreprise dépend du découvert. Délai clients = 90 000 ÷ 540 000 × 360 = 60 jours : les clients paient tard, ce qui gonfle le BFR. Indépendance financière = 240 000 ÷ 400 000 = 60 % : l'entreprise est indépendante, elle pourrait emprunter. Solutions : ramener le délai clients à 30 jours ferait baisser les créances de 45 000 € et rendrait la trésorerie positive (+25 000 €), mais risque de mécontenter des clients ; un emprunt à long terme augmenterait le FRNG, au prix d'intérêts.",
      grille: ["J'ai écrit chaque formule avant le calcul.", "Mes trois résultats sont justes et cohérents (TN = FRNG − BFR).", "J'ai interprété chaque résultat en une phrase.", "J'ai proposé une solution et noté sa limite."],
    },
  ],
  sujets: [],
};
