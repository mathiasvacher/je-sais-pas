# je sais pas

Une application web qui aide à choisir quoi manger sans transformer le dîner en débat interminable. À chaque tour, trois idées sont proposées : on garde celle qui donne le plus envie, les autres sont remplacées, puis l'application dévoile la suggestion gagnante.

## Fonctionnalités

- Sélection progressive parmi des idées de repas, restaurants, fast-foods et desserts.
- Suggestions aléatoires en trois cartes, avec conservation du choix préféré à chaque tour.
- Résultat après huit choix, ou plus tôt lorsqu'il reste trop peu de possibilités.
- Modes **date**, **à la maison** et **restaurant** pour adapter les propositions.
- Filtres par type, cuisine et moment : apéro, grignotage, brunch ou repas.
- Bouton « Surprise-moi » pour obtenir une idée immédiatement.
- Catalogue des idées actuellement compatibles avec les filtres.
- Lien vers une recherche Google Maps pour trouver la suggestion gagnante à proximité.

## Aperçu du fonctionnement

1. Choisir une proposition parmi les trois affichées, ou les renouveler.
2. L'idée sélectionnée reste visible ; deux nouvelles idées prennent la place des choix écartés.
3. À la fin de la série, l'application propose l'idée retenue et permet de chercher un lieu autour de soi.

## Technologies

- React 19
- TypeScript
- Vite
- ESLint

## Installation et lancement

Pré-requis : une version récente de [Node.js](https://nodejs.org/).

```bash
npm install
npm run dev
```

Vite affiche ensuite l'adresse locale à ouvrir dans le navigateur, généralement `http://localhost:5173`.

## Commandes disponibles

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Lance le serveur de développement. |
| `npm run build` | Vérifie TypeScript et génère la version de production dans `dist/`. |
| `npm run preview` | Prévisualise localement la version construite. |
| `npm run lint` | Analyse le code avec ESLint. |
| `npm run deploy` | Publie le contenu de `dist/` sur GitHub Pages. |

## Organisation du projet

```text
src/
├── components/   # Cartes de choix et fenêtres modales
├── data/         # Catalogue d'idées et règles de filtrage
├── lib/          # Logique de sélection et lien Google Maps
├── App.tsx       # Écran principal et état de l'application
└── index.css     # Styles globaux
```

## Ajouter ou modifier une idée

Le catalogue est défini dans `src/data/foods.ts`. Chaque idée possède un nom, un emoji, une couleur et une courte description. Les mêmes données servent également à déterminer les filtres (type de cuisine, budget, moment, modes maison/date/restaurant). Après une modification, lancez `npm run lint` puis `npm run build` pour vérifier le projet.

## Contenu habituel d'un README

Un README sert à permettre à une nouvelle personne de comprendre et d'utiliser rapidement un projet. Il contient généralement :

- le nom du projet et son objectif ;
- les principales fonctionnalités ;
- les technologies utilisées et les prérequis ;
- les instructions d'installation, de lancement et de test ;
- les commandes utiles ;
- l'organisation importante des fichiers ;
- les indications de contribution, de déploiement et de licence lorsque le projet en a besoin.

## Déploiement

Le projet est configuré pour GitHub Pages. Après avoir créé la version de production avec `npm run build`, exécutez :

```bash
npm run deploy
```

La propriété `homepage` du fichier `package.json` indique l'URL de publication prévue.
