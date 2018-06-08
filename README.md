# Component Guide

## Overview
A PHP based "flat file" system used to create a user friendly resource for web component code samples. The purpose of this build was to create a deliverable that the client (specifically in this case, the client side developer) can use to help build templates or pages based on a series of components. Each component was built in a way that is agnostic to others and/or templates can be created almost on the fly to meet the need of the client at the time.

### Purpose
The concept was design based on Brad Frost's "Atomic Design" principles and was developed with the BEM method (or close variations of both).

### Organization
In this project there are 3 levels in which you can organize ideas...There are components, which is a group of "molecules", or simply elements, organized together to form a specific function (Brad Frost calls them "atoms" that come together to form "organisms"). There are "collections" which is a display of all related "elements" with potential varients. There are templates which are display of practical uses of how components can be grouped and laid out together to form a "typical" webpage.

### Usage
Begin with creating your markup and saving each "molecule" independently and save it within `inc/components/molecules`. Create a file with whatever name you'd like for the component, collection or template and save it in each respective directory. The code samples and instructions should be placed within this file. This name with be sanitized to create the title and link. Within those files use PHP to include any/all molecules you wish to create. 

### Code Base
This project uses PHP, Sass with a Gulp workflow.

### To-do
Either offer instructions to create your own local LAMP server or try converting this to fit a Javascript template engine like Mustache, Handlebars, Undscore or something similar.