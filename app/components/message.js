import { LitElement, html, css } from 'lit-element';
import { listen } from 'ziro-state';
import exampleState from '../state/example.js';

export class MyAppMessage extends LitElement {
  static get styles() {
    return [css`
    `];
  }

  static get properties() {
    return {
      text: { type: String }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    listen(this);
  }

  render() {
    return html`
      <h2>${this.text}</h2>
      <button @click=${this.updateMessage}>Load Title</button>
    `;
  }

  updateMessage() {
    exampleState.updateMessageAsync();
  }

  stateUpdated() {
    this.text = exampleState.getState().message;
  }
}

window.customElements.define('my-app-message', MyAppMessage);
