# Learn Club - React

[![Build Status](https://travis-ci.com/skippednote/learn-club-react.svg?branch=master)](https://travis-ci.com/skippednote/learn-club-react)
[![codecov](https://codecov.io/gh/skippednote/learn-club-react/branch/master/graph/badge.svg)](https://codecov.io/gh/skippednote/learn-club-react)

# Repos

* [Frontend](https://github.com/skippednote/learn-club-react-frontend)
* [Backend](https://github.com/skippednote/learn-club-react-backend)

## Setup

These are the preferred but not the only ways to get this project up and running.
You are free to use a setup of your choice.

### Frontend (React.js)

* Installing Node
  * This assumes you have Node.js installed locally on your machines.
  * Use [nvm](https://github.com/creationix/nvm) to install latest LTS of Node.js using `nvm install --lts`.
  * Inside the `frontend` directory run `npm install` to install the modules.
  * Refer to the scripts section in [package.json](frontend/package.json) for various tasks:
    * `npm start` start development server.
    * `npm run test:unit` to run unit tests.
    * `npm run test:e2e` to run end to end tests.
    * `npm test` to run both unit and end to end tests.
    * `npm run storybook` to start storybook server.
    * `npm run flow` to check the frontend codebase for typing related issues.

### Backend (Drupal)

* Installing Docker CE
  * Check if you can install Docker on your machine.
  * For Windows you would need Windows 10 Pro to install Hyper-V.
  * For Linux/Unix, you would need a relatively recent release of your distribution.
  * You can get Docker CE from [here](https://www.docker.com/community-edition).
* Installing Lando
  * For this you would need Docker installed first.
  * Download the latest release of Lando from [here](https://github.com/lando/lando/releases).
* Installing Drupal
  * In the project root run `lando start`
  * This will pull in the required Docker images and start the containers to run Drupal.
  * You can use drush using `lando drush` to install the site.
  * Or directly go to the [url](lcr.lndo.site/) to use the web based UI.

## Commit

* The project uses [@commitlint/config-conventional](https://github.com/marionebl/commitlint/tree/master/%40commitlint/config-conventional) to linting the commit messages.

  ✔️ `chore: install react-router`

  ✔️ `feat: add the user profile section`

  ❌ `Install React-Router.`

  ❌ `Add the User profile Section.`

* The project uses [lint-staged](https://github.com/okonet/lint-staged) to running Prettier on git staged files to prevent style issues.

## Editor

The `.vscode` directory in the root of the project is setup up to run with [Visual Studio Code](https://code.visualstudio.com/).
Here is the list of recommended extension for a productive workflow:

* EditorConfig.EditorConfig
* Orta.vscode-jest
* PKief.material-icon-theme
* PeterJausovec.vscode-docker
* arcticicestudio.nord-visual-studio-code
* dbaeumer.vscode-eslint
* donjayamanne.githistory
* eamodio.gitlens
* esbenp.prettier-vscode
* felixfbecker.php-debug
* flowtype.flow-for-vscode
* marcostazi.VS-code-drupal
* shardulm94.trailing-spaces
* shinnn.stylelint
* whatwedo.twig
