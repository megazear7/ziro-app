import { LitElement, html, css } from 'lit-element';
import appData from '../data.js';
import globals from '../styles/globals.js';
import appState from '../state/app.js';
import { listen } from 'ziro-state';
import './toggle-icon.js';

export class ContrastMode extends LitElement {
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
        <my-app-toggle-icon icon="light" .on=${this.on} @toggle=${this.toggle}></my-app-toggle-icon>
    `;
  }

  toggle() {
    appState.toggleContrast();
  }

  stateUpdated() {
    this.on = appState.getState().contrastMode === 'contrast';
  }
}

window.customElements.define(appData.prefix + 'contrast-mode', ContrastMode);
