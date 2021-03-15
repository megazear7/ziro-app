# Ziro App

An ultra opinionated web app development framework built on top of Netlify, Lambdas, LitElement, ZiroComponents, and ZiroState, and Rollup.
It makes heavy use of web components, ES modules, and other browser native APIs including service worker and web manifest.

Checkout an example at [ziro-app-example.alexlockhart.me](https://ziro-app-example.alexlockhart.me)

## TODO

1. Make ziro-cli which can be used to create a new app. The cli should be installable globally and provide a `ziro init my-app` command. This command should clone ziro-app and then do name replacements througout the files.
1. Add routing
1. Add a way to include many other pages (primary pages being the slider, secondary pages hidden behind some menu?)
1. Deactivate pages from a state management perspective when they are not being shown. This behavior should be added inside of ziro-components so that only the active panel gets rendered.

## Local development

```
npm run serve
```

Open [localhost:8888](http://localhost:8888)

## Live development

```
npm run live
```

Open the url that the Netlify CLI gives. This allows you to develop and see your changes on a live URL, accessibly on the public internet. You can also share the given url with others so they can see your changes live.

## Deploy

Push changes to the `main` branch.

## Overview

The `src/index.html` file defines the initial page load and bootstraps the app
The `src/index.js` file is only for adding new pages
The `src/index.cs`s file let's you provide page level css
The `src/sw.js` is your service worker
The `src/manigest.json` is your web manifest
The `src/pages` directory is for defining your page views
The `src/components` directory lets you define reusable components. These components should be the only thing that connects to app state.
the `src/state` directory lets you define your application state.
The `src/styles` directory lets you define reusable styles.
The `src/assets` directory lets you add static assets such as images
The `api` directory lets you add Netlify Functions.

### Main files

The main files are in the `app` directory. This includes the `index.html` file that will be served to the user which bootstraps the application and registers the service worker in `sw.js`. The app is defined in `index.js`. It also includes a top level CSS file in `index.css` which should hardly need used but is there if needed. Lastly, it includes the `manifest.json` file.

The `index.js` file is where the app is defined. This file can connect to the application state for doing high level application state such as dark mode, contrast mode, etc... but should not contain any feature logic, which should insted be encapsulated in a component.

### Pages

The pages should not connect to the application state. Instead they should use components that connect to the application state. This is so that components can be moved around the site between pages without the state management needing to be reconfigured on a per page basis. The pages should simply handle the layout.

### Components

These components should be reusable pieces of functionality. They can connect to the application state if needed but do not need to. This should be where most of the application logic should reside.

### Styles

This is a set of files representing resuable styles such as for icons and buttons which can get imported into the components that need them. It also includes a variables file which should only need included in the `index.js` file. It also includes a `globals.js` file that can be included into every component. Lastly, it includes the color and contrast mode variables.

### Icons

These are a set of reusable SVG icons.

### State

This is where your application state objects are defined.

### Assets

This is where images and other assets can be added.

### API

The top level `api` directory is where you can add Netlify Functions.
