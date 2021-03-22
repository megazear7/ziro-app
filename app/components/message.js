import { LitElement, html, css } from 'lit-element';
import appData from '../data.js';
import globals from '../styles/globals.js';
import { listen } from 'ziro-state';
import exampleState from '../state/example.js';
import buttonStyles from '../styles/buttons.js';

export class Message extends LitElement {
  static get styles() {
    return [globals, buttonStyles, css`
    `];
  }

  static get properties() {
    return {
      text: { type: String, attribute: false }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    listen(this);
  }

  render() {
    return html`
      <h2>${this.text}</h2>
      <ziro-button class="btn" @click=${this.updateMessage}>Load Title</ziro-button>
    `;
  }

  updateMessage() {
    exampleState.updateMessageAsync();
  }

  stateUpdated() {
    this.text = exampleState.getState().message;
  }
}

window.customElements.define(appData.prefix + 'message', Message);
