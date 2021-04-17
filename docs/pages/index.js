import { html } from 'orison';

export default context => html`
  <section>
    <p>An opinionated web app development framework that gets you started with a single page progressive web app with the click of a button.</p>
    <h5>Technologies</h5>
    <p>Ziro App comes with minimal client side dependencies and can easily be deployed to Netlify for static hosting and use Netlify Functions for server side processing. It runs as a single page progressive web app that can be installed to modern devices as an app and can run while the user is offline.</p>
    <ul class="card-list">
      <li><a href="https://www.netlify.com/">Netlify</a></li>
      <li><a href="https://www.netlify.com/products/functions/">Netlify Functions</a></li>
      <li><a href="https://lit-element.polymer-project.org/">LitElement</a></li>
      <li><a href="https://ziro-components.alexlockhart.me/">ZiroComponents</a></li>
      <li><a href="">Ziro State</a></li>
      <li><a href="https://rollupjs.org/guide/en/">Rollup</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Web Components</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers">Service Worker</a></li>
      <li><a href="https://en.wikipedia.org/wiki/Single-page_application">Single page app</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps">Progressive web app</a></li>
    </ul>
    <h5>Example</h5>
    <p>Checkout <a target="_blank" href="https://ziro-app-example.alexlockhart.me/">the example app</a>. This example is everything you get when you start your Ziro App project.</p>
    <div><a class="app-img" target="_blank" href="https://ziro-app-example.alexlockhart.me/"><img src="/images/ziro-app-screenshot.png"></a></div>
    <h5>Get Started</h5>
    <p>To start your Zirp App project you will need to install the ziro-cli as shown below, and then use it to create the project. The name you provide will be used for naming components, namespaces, etc.</p>
    ${context.mdFile('./docs/partials/get-started.md')}
    <h5>Creating components</h5>
    <p>To create components, follow the examples under src/app/components. These should be where you connect to the application state and implement most of your functionality.</p>
    <h5>Connecting to APIs</h5>
    <p>To connect to APIs you can write Netlify Functions under src/api.</p>
    <h5>Creating page views</h5>
    <p>New page views can be added to the bottom navigation or with the ziro-slide-page component. Pages can be added under src/app/pages.</p>
    <h5>App state</h5>
    <p>App state can be managed under src/app/state using Ziro State. Examples are provided. Only components under src/app/components should connect to application state. Pages under src/app/pages should never connect to application state</p>
  </section>
`;
