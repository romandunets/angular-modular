# AngularJS modular structure

This project is a skeleton for modular AngularJS web application. It can be used as a starting point for Angular web application or just as an example how to implement modular structure in AngularJS.

The repository contains a sample AngularJS application which is preconfigured to install the Angular framework and all the dependencies for instant development. The application has very simple bussines logic showing how to implement basic operations with users. The main perpose of this project is to demonstrate how to organize your Angular application in a modular way.

## Getting Started

To get you started you can simply clone the angular-modular repository and install the dependencies:

### Prerequisites

You need to must a git client to clone the repository. You can get it from [http://git-scm.com/](http://git-scm.com/).

Also you must to have node.js and npm (node.js package manager). You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone angular-modular

Clone the angular-modular repository using [git][git]:

```
git clone https://github.com/romandunets/angular-modular.git
```

### Install Dependencies

Install bower:

```
npm install bower
```
Install dependecies:
```
bower install
```
Dependecies will be installed in `assets/libs`

### Run the Application

You can use any web server to run the application.

## Directory Layout

```
app/                             --> all of the source files for the application
  components/                    --> application specific modules
    home/                        --> sample module: home
      app.home.js                --> home module file
      home.ctrl.js               --> home controller
      home.tpl.html              --> home page template
    users/                       --> sample module: users
      app.users.js               --> users module file
      users.ctrl.js              --> users controllers (for each page separate controller)
      users.fct.js               --> users factory
      users.list.tpl.html        --> list users page template
      users.show.tpl.html        --> show users page template
  shared/                        --> shared application components
    menu.drct.js                 --> main menu directive
    menu.tpl.html                --> main menu template
  app.js                         --> main application file
assets/                          --> all of asset files
  css/                           --> CSS files
    layout.css                   --> layout CSS
  img/                           --> images
    favicon.ico                  --> favicon
  js/                            --> common javascript
    common.js                    --> common javascript file
  libs/                          --> third-party components
temp/                            --> temporary components
  users.json                     --> JSON file with all users
  users/                         --> contains separate JSON file for each user
```
