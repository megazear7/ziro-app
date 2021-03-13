import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import globals from '../styles/globals.js';
import iconStyles from '../styles/icons.js';
import sunIcon from '../icons/sun.js';
import { listen } from 'ziro-state';
import appState from '../state/app.js';

export class MyAppColorMode extends LitElement {
  static get styles() {
    return [globals, iconStyles, css`
        :host {
          display: block;
        }

        .active svg {
          fill: var(--color-primary);
        }
    `];
  }

  static get properties() {
    return {
      colorMode: { type: String }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    listen(this);
  }

  render() {
    return html`
        <button @click=${this.toggleColorMode} class=${this.buttonClasses()}>${sunIcon}</button>
    `;
  }

  buttonClasses() {
      return classMap({
        'icon': true,
        'active': this.colorMode === 'dark'
      })
  }

  toggleColorMode() {
    appState.toggleLights();
  }

  stateUpdated() {
    this.colorMode = appState.getState().colorMode;
  }
}

window.customElements.define('my-app-color-mode', MyAppColorMode);
