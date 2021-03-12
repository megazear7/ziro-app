import { LitElement, html, css } from 'lit-element';
import { listen } from '/node_modules/ziro-state/src/index.js';
import exampleState from '../state/example.js';

export class MyAppMessage extends LitElement {
  static get styles() {
    return [css`
    `];
  }

  static get properties() {
    return {
      text: { type: String },
      inputText: { type: String }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    listen(this);
  }

  render() {
    return html`
      <h2>${this.text}</h2>
      <button @click=${this.updateMessage}>Update</button>
      <input type="text" @change=${(e) => this.inputText = e.target.value}></input>
    `;
  }

  updateMessage() {
    exampleState.updateMessageAsync(this.inputText);
  }

  stateUpdated() {
    this.text = exampleState.getState().message;
  }
}

window.customElements.define('my-app-message', MyAppMessage);
