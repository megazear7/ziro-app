import { LitElement, html, css } from 'lit-element';

export class MyAppMessage extends LitElement {
  static get styles() {
    return [variables, css`
    `];
  }

  static get properties() {
    return {
      text: { type: String }
    };
  }

  render() {
    return html`
      <h2>${this.text}</h2>
    `;
  }
}

window.customElements.define('my-app-message', MyAppMessage);
