# Learn Club - React

[![Build Status](https://travis-ci.com/skippednote/learn-club-react.svg?branch=master)](https://travis-ci.com/skippednote/learn-club-react)

## Setup

These are the preferred but not the only ways to get this project up and running.
You are free to use setup preference with other of your choice.

## Front-end (React)

* Install Node
  * This assumes you have Node.js installed locally on your machines.
  * Use [nvm](https://github.com/creationix/nvm) to install latest LTS of node `nvm install --lts`.
  * Inside the `frontend` directory run `npm install` to install the required modules.
  * Refer to the scripts section in [package.json](frontend/package.json') for various tasks:
    * `npm start` start developement server.
    * `npm run test:unit` to run unit tests.
    * `npm run test:e2e` to run end to end tests.
    * `npm test` to run both unit and end to end tests.
    * `npm run storybook` to start storybook server.
    * `npm run flow` to check the frontend codebase for typing related issues.

### Back-end (Drupal)

* Install Docker CE
  * Check if you can install Docker on your machine.
  * For Windows you would need Windows 10 Pro.
  * For Linux/Unix, you would need a relatively recent distribution
  * You can get Docker CE from [here](https://www.docker.com/community-edition).
* Install Lando
  * You would need Docker installed first.
  * Download the latest release of Lando from [here](https://github.com/lando/lando/releases).
* Installing Drupal
  * In the project root run `lando start`
  * This will pull in the relevant Docker images and start the containers to run Drupal.
  * You can use drush using `lando drush` to install the site.
  * Or directly go to the [url](lcr.lndo.site/) to use the web based UI.

## Commit

* The project uses [@commitlint/config-conventional](https://github.com/marionebl/commitlint/tree/master/%40commitlint/config-conventional) to linting the commit messages.

  ✅ `chore: install react-router`

  ❌ `Install React-Router`

* The project uses [lint-staged](https://github.com/okonet/lint-staged) to running Prettier on staged files to prevent style issues

## Editor

The `.vscode` directory in the root of the project setup up to run with [Visual Studio Code](https://code.visualstudio.com/).
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
