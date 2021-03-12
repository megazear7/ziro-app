# Ziro App

## TODO

1. How should it be built for production? Assume netlify hosting with functions, etc...
1. Add an example Netlify Function in /api/example.js
1. Make ziro-cli which can be used to create a new app. The cli should be installable globally and provide a `ziro init my-app` command. This command should clone ziro-app and then do name replacements througout the files.
1. Add an svg icon example (in an icons directory)
1. Add routing
1. Add a way to include many other pages (primary pages being the slider, secondary pages hidden behind some menu?)
1. If css variables pass through shadow dom, should we define those in src/index.css instead of src/styles/variables.js?
1. Deactivate pages from a state management perspective when they are not being shown.

## Serve

```
npm run serve
```

## Deploy

TODO

## Overview

The src/index.html file defines the initial page load and bootstraps the app
The src/index.js file is only for adding new pages
The src/index.css file let's you provide page level css
The src/sw.js is your service worker
The src/manigest.json is your web manifest
The src/pages directory is for defining your page views
The src/components directory lets you define reusable components. These components should be the only thing that connects to app state.
the src/state directory lets you define your application state.
The src/styles directory lets you define reusable styles.
The src/assets directory lets you add static assets such as images
