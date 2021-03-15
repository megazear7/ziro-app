import { LitElement, html, css } from 'lit-element';
import { listen } from 'ziro-state';
import appState from './state/app.js';
import homeIcon from './icons/home.js';
import gearIcon from './icons/gear.js';
import globals from './styles/globals.js';
import variables from './styles/variables.js';
import lightStyles from './styles/mode-light.js';
import darkStyles from './styles/mode-dark.js';
import contrastLightStyles from './styles/mode-contrast-light.js';
import contrastDarkStyles from './styles/mode-contrast-dark.js';
import './pages/landing-page.js';
import './pages/settings-page.js';
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
        position: fixed;
        bottom: 0;
        box-shadow: var(--shadow-large);
      }

      ziro-nav-item {
        background-color: var(--color-background-secondary);
        color: var(--color-background-secondary-bold);
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px;
      }

      ziro-nav-item[selected] {
        background-color: var(--color-primary);
        color: var(--color-primary-bold);
      }

      ziro-nav-item:hover {
        background-color: var(--color-primary);
        color: var(--color-primary-bold);
      }

      ziro-nav-item svg {
        margin: auto;
        fill: var(--color-background-bold);
        width: 30px;
        height: 30px;
      }

      ziro-nav-item[selected] svg {
        fill: var(--color-primary-bold);
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
                <my-app-landing-page></my-app-landing-page>
            </ziro-panel>
            <ziro-panel>
                <my-app-settings-page></my-app-settings-page>
            </ziro-panel>
        </ziro-panel-set>
        <ziro-nav>
            <ziro-nav-item selected>${homeIcon}</ziro-nav-item>
            <ziro-nav-item>${gearIcon}</ziro-nav-item>
        </ziro-nav>
    </ziro-screen>
    `;
  }

  stateUpdated() {
    const appSnapshot = appState.getState();
    this.darkMode = appSnapshot.colorMode === 'dark';
    this.highContrast = appSnapshot.contrastMode === 'contrast';
  }
}

window.customElements.define('my-app', MyApp);
