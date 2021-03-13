import { LitElement, html, css } from 'lit-element';
import { listen } from 'ziro-state';
import appState from './state/app.js';
import globals from './styles/globals.js';
import variables from './styles/variables.js';
import lightStyles from './styles/mode-light.js';
import darkStyles from './styles/mode-dark.js';
import contrastLightStyles from './styles/mode-contrast-light.js';
import contrastDarkStyles from './styles/mode-contrast-dark.js';
import './pages/page-1.js';
import './pages/page-2.js';
import './pages/page-3.js';
import 'ziro-components';

export class MyApp extends LitElement {
  static get styles() {
    return [globals, variables, css`
      ziro-panel {
        background-color: var(--color-background-primary);
        color: var(--color-background-primary-bold);
      }

      ziro-panel > * {
        max-width: var(--max-width);
        margin: auto;
      }

      ziro-nav {
        background-color: var(--color-background-secondary);
        color: var(--color-background-secondary-bold);
      }

      ziro-nav-item {
        background-color: var(--color-background-secondary);
        color: var(--color-background-secondary-bold);
      }

      ziro-nav-item:hover {
        background-color: var(--color-primary);
        color: var(--color-primary-bold);
      }
    `];
  }

  static get properties() {
    return {
      darkMode: { type: Boolean },
      highContrast: { type: Boolean }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    listen(this);
  }

  render() {
    return html`
      <style>${!this.highContrast && !this.darkMode ? lightStyles : css``}</style>
      <style>${!this.highContrast && this.darkMode ? darkStyles : css``}</style>
      <style>${this.highContrast && this.darkMode ? contrastDarkStyles : css``}</style>
      <style>${this.highContrast && !this.darkMode ? contrastLightStyles : css``}</style>
      <ziro-screen>
        <ziro-panel-set>
            <ziro-panel>  
                <my-app-page-1></my-app-page-1>
            </ziro-panel>
            <ziro-panel>
                <my-app-page-2></my-app-page-2>
            </ziro-panel>
            <ziro-panel>
                <my-app-page-3></my-app-page-3>
            </ziro-panel>
        </ziro-panel-set>
        <ziro-nav>
            <ziro-nav-item selected>A</ziro-nav-item>
            <ziro-nav-item>B</ziro-nav-item>
            <ziro-nav-item>C</ziro-nav-item>
        </ziro-nav>
    </ziro-screen>
    `;
  }

  stateUpdated() {
    this.darkMode = appState.getState().colorMode === 'dark';
  }
}

window.customElements.define('my-app', MyApp);
