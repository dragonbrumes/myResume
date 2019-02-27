## Start

back : yarn start
front :yarn parcel

npm start lance le seveur et la lecture du dossier build
npm parcel lance react en local suivant la branche

## img

pour ajouer une exp ou un projet ne pas oublier d'importer l'image à la liste des images dans l' index.js à la racine de assets

## hosting

Dans le fichier index.js pour gandi ou server.js pour autre,
vérifier de na pas utiliser la variable process.env pour définir le port d'express. Il est est déjà utilisé par un autre process

Ne pas oublier d'uploader le .env.production

pour mettre en production sur gandi : yarn run build
puis sftp dist dans re

pour mettre en prod sur Netlify simplement mettre à jour le github.

# Branches

Master pour Gandi avec login
Netlify pour Netlify sans le login

# BDD

La bdd est sur mlab.com

## Configuration

### Babel (ES6/JSX -> ES5)

```sh
yarn add --dev babel-preset-env # vocabulaire ES6 -> ES5 de base
yarn add --dev babel-plugin-transform-class-properties
yarn add --dev babel-plugin-transform-object-rest-spread
yarn add --dev babel-preset-react
yarn add react react-dom
```

- .babelrc

### ESLint

```sh
yarn add --dev eslint eslint-config-airbnb babel-eslint
yarn add --dev eslint-import-resolver-alias
yarn add --dev eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

- eslintrc
- .eslintignore

### CSS (Stylus, PostCSS, Autoprefixer)

```sh
yarn add --dev stylus postcss-modules autoprefixer stylint
```

- .stylintrc
- .postcssrc
- .browserslistrc

### Utilitaires

```sh
yarn add --dev babel-polyfill
```

## Outils pratiques

- Extension React Dev Tools
  - [pour Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
  - [pour Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
