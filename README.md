# Component Guide

## Overview
A PHP based "flat file" system used to create a user friendly resource for web component code samples. The purpose of this build was to create a deliverable that the client (specifically in this case, the client side developer) can use to help build templates or pages based on a series of components. Each component was built in a way that is agnostic to others and/or templates can be created almost on the fly to meet the need of the client at the time.

## Purpose
The concept was design based on Brad Frost's "Atomic Design" principles and was developed with the BEM method (or close variations of both).

## Organization
In this project there are 3 levels in which you can organize ideas...There are components, which is a group of "molecules", or simply elements, organized together to form a specific function (Brad Frost calls them "atoms" that come together to form "organisms"). There are "collections" which is a display of all related "elements" with potential varients. There are templates which are display of practical uses of how components can be grouped and laid out together to form a "typical" webpage.

## Usage
Begin with creating your markup and saving each "molecule" independently and save it within `inc/components/molecules`. Create a file with whatever name you'd like for the component, collection or template and save it in each respective directory. The code samples and instructions should be placed within this file. This name with be sanitized to create the title and link. Within those files use PHP to include any/all molecules you wish to create. 

## To-do
Either offer instructions to create your own local LAMP server or try converting this to fit a Javascript template engine like Mustache, Handlebars, Undscore or something similar.

## Code Base
This project uses PHP, Sass with a Gulp workflow (instructions below).

## Working with [Gulp.js](https://gulpjs.com/)
1. Dependencies [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm)
> npm is distributed with Node.js- which means that when you download Node.js, you automatically get npm installed on your computer.
2. Check that you have node and npm installed by running `node -v` and `npm -v` in your terminal
3. If the commant is not found install them using the links above and if it doesn't work in your project's folder, try installing them globally using your `sudo` commant

## Gulp Core Files
1. gulp.js
2. package.js
3. Node_modules (not created until gulp is installed by following below)

## Gulp Usage
1. To install you position yourself in the project folder by traversing via terminal using the cd command and install using npm by running the command below:<br />
`$ npm install`

2. To initially process javascript, sass and any gulp tasks found in the gulp.js file by running the command below:<br />
`$ gulp`

3. To watch javascript, sass and any gulp tasks found in the gulp.js file by running the command below:<br />
`$ gulp watch`

4. To add SVG’s to spritemap, drop any svg into the /src/svg folder. The name of the svg will become the id of the svg.<br />
> Make any changes such as fill="currentColor" to the svg inside of the /src/svg folder and Gulp will process.

## Gulp Task File Structure:

1. JavaScript<br />
`/src/lib/*.js` -> `/js/lib` -- Any standalone JavaScript file. Usually for polyfills or large libraries independent of the projects unique scripts.<br />
`/src/plugins/*.js` -> `/js/plugins.js` -- All files get concat, and minified into one plugins.js<br />
`/src/partials/*.js -> `/js/scripts.js` -- All files get concat, and minified into one scripts.js<br />

2. CSS<br />
`/src/css/*` -> `/css/style.css` -- All files get concat into one style.css<br />
`/src/css/admin`<br />
`/src/css/base`<br />
`/src/css/components`<br />
`/src/css/layouts`<br />
`/src/css/utilities`style.scss <br />

3. SVG<br />
`/src/svg/*.svg` -> `/img/spritemap.svg`<br />

Include SVG’s using via the code below:
``` html
<svg>
      <use xlink:href="PATH/img/spritemap.svg#FILE-NAME"></use>
<svg>
```
The FILE-NAME above should not include .svg at the end of it just as it is above.