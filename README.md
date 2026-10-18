# Marée lente

Prototype de jeu mobile de respiration guidée, conçu comme **outil d'autorégulation** face à l'anxiété et aux crises de panique.

---

## Pourquoi cette application

Pendant une crise d'anxiété ou de panique, la respiration s'accélère et devient superficielle. Cela entretient les sensations physiques (cœur qui s'emballe, vertiges, oppression) et nourrit la peur. Ralentir la respiration, et surtout **allonger l'expiration**, aide le corps à sortir de cet état d'alerte.

Le problème : en pleine crise, il est difficile de se concentrer sur des consignes du type « inspirez 4 secondes, expirez 6 secondes ». Un jeu très simple donne au contraire **quelque chose de concret à suivre avec le doigt et les yeux**. L'attention se détourne de la spirale anxieuse, et le rythme ralentit sans effort conscient.

## À quoi elle sert

- Aider à **ralentir la respiration** au moment d'une montée d'anxiété ou d'une crise de panique.
- S'entraîner **à froid**, en dehors des crises, pour que le geste devienne familier et plus facile à mobiliser le jour où on en a besoin.
- Offrir un moment de calme de 2 à 5 minutes, par exemple avant de dormir ou avant une situation stressante.

## Ce qu'elle fait

- **Une seule mécanique** : garder le doigt appuyé pour inspirer (la lune se lève), relâcher pour expirer (elle redescend). Il suffit de suivre un halo en pointillés.
- **Deux modes, choisis selon la situation** :

|                         | « J'ai besoin de me calmer »               | « Je veux me détendre »                                     |
| ----------------------- | ------------------------------------------ | ----------------------------------------------------------- |
| Pour quand              | Montée d'anxiété, crise de panique         | Entraînement à froid, pause, avant de dormir                |
| Accès                   | Gros bouton principal, un seul tap         | Bouton secondaire                                           |
| Rythme de départ        | 3 s / 3 s, proche d'une respiration agitée | Déjà proche de la cible (environ 90 %)                      |
| Arrivée au rythme cible | Ralentissement progressif sur 1 minute     | En 2 respirations environ                                   |
| Durées                  | 2, 3 ou 5 minutes                          | 5, 10 ou 15 minutes                                         |
| Consignes à l'écran     | Toujours visibles                          | S'estompent après 45 s pour suivre au son et aux vibrations |

En crise, on rejoint la personne à son rythme : imposer d'emblée un rythme lent peut être vécu comme un échec. En détente, partir trop vite créerait au contraire une impression de précipitation.

- **Trois rythmes cibles**, communs aux deux modes : 3 s / 5 s, 4 s / 6 s (conseillé) ou 5 s / 7 s. L'expiration est toujours plus longue que l'inspiration. Le rythme le plus lent est volontairement plafonné à 5 s / 7 s, car en dessous beaucoup de débutants ont la sensation de manquer d'air.
- **Aucun échec possible** : pas de score à battre, pas de game over, pas de chronomètre stressant. Quand on est en phase, des étoiles apparaissent et la lueur grandit. Quand on perd le rythme, rien n'est pénalisé.
- **Guidage multisensoriel** : un son doux qui suit le souffle et une vibration à chaque changement de phase (vibrations sur Android uniquement). Les deux sont désactivables.
- **Écran maintenu allumé** pendant la séance, si le navigateur le permet.
- **Bilan simple** en fin de séance : durée, nombre de respirations, part du temps passé en phase.
- **Respect de la vie privée** : aucun compte, aucune donnée envoyée. Seuls les réglages sont mémorisés sur l'appareil.

## Ce qu'elle ne fait pas

- **Elle ne soigne pas** un trouble anxieux ou un trouble panique. C'est un outil d'appoint pour traverser un moment difficile, pas un traitement.
- **Elle ne remplace pas** un médecin, un psychologue ou un psychiatre. Les thérapies cognitivo-comportementales, par exemple, ont fait leurs preuves pour le trouble panique.
- **Elle ne pose aucun diagnostic** et ne mesure aucune donnée physiologique (rythme cardiaque, saturation, etc.).
- **Elle ne gère pas les urgences.** En cas de douleur thoracique, de malaise ou de doute sur une cause médicale, appelez le **15** ou le **112**.
- **Elle ne suit pas l'évolution** dans le temps : pas d'historique, pas de statistiques sur plusieurs semaines.
- **Ce n'est pas un dispositif médical.** Le prototype ne revendique aucun effet thérapeutique et n'a fait l'objet d'aucune évaluation clinique.

## Statut

Prototype de test, disponible sous forme de **PWA** (application web installable). Elle sert à valider les sensations de la mécanique avant tout développement d'application native.

## Installer l'application (PWA)

**Installer sur Android (Chrome, Brave, Edge).** Ouvrir l'adresse dans le navigateur, puis menu ⋮ → « Installer l'application » ou « Ajouter à l'écran d'accueil ».

**Installer sur iPhone.** Ouvrir l'adresse dans Safari, puis Partager → « Sur l'écran d'accueil ». Les vibrations restent indisponibles sur iPhone ; les ondes lumineuses et le son prennent le relais.

**Ce que l'installation apporte**

- **Lancement en un tap** depuis l'écran d'accueil, en plein écran, sans barre de navigateur.
- **Raccourcis** : un appui long sur l'icône propose « Me calmer » et « Me détendre », qui lancent directement la séance (selon le navigateur et le lanceur Android).
- **Hors ligne** : après une première ouverture avec réseau, l'application fonctionne sans connexion.
- **Vibrations** sur Android, puisque la page n'est plus affichée dans un cadre.

**Mettre à jour.** Après avoir modifié les fichiers, changer la valeur `VERSION` en haut de `sw.js` ; l'application installée récupérera la nouvelle version à l'ouverture suivante, avec réseau.

**Questions à valider en test :**

- Le ralentissement progressif du rythme paraît-il naturel ?
- « Appuyer pour inspirer » est-il intuitif, ou faut-il l'inverse ?
- Le jeu est-il utilisable en état d'agitation (lancement rapide, consignes lisibles) ?
- Les libellés des deux modes sont-ils assez clairs pour éviter de choisir « détente » en pleine crise ?
- En détente, l'effacement des consignes aide-t-il à lâcher l'écran, ou désoriente-t-il ?

## Pistes envisagées

- Widget d'écran d'accueil (nécessite une application native).
- Exercice d'ancrage sensoriel (5-4-3-2-1) en complément.
- Biofeedback via montre connectée.
