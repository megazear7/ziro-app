import { LitElement, html, css } from 'lit-element';
import globals from '../styles/globals.js';
import appState from '../state/app.js';
import { listen } from 'ziro-state';
import './toggle-icon.js';

export class MyAppColorMode extends LitElement {
  static get styles() {
    return [globals, css`
        :host {
          display: inline-block;
        }
    `];
  }

  static get properties() {
    return {
      on: { type: Boolean }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    listen(this);
  }

  render() {
    return html`
        <my-app-toggle-icon icon="sun" .on=${this.on} @toggle=${this.toggle}></my-app-toggle-icon>
    `;
  }

  toggle() {
    appState.toggleLights();
  }

  stateUpdated() {
    this.on = appState.getState().colorMode === 'dark';
  }
}

window.customElements.define('my-app-color-mode', MyAppColorMode);
