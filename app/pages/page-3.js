import { LitElement, html, css } from 'lit-element';
import '../components/message.js';

export class MyAppPage3 extends LitElement {
  static get styles() {
    return [variables, css`
    `];
  }

  static get properties() {
    return {
      message: { type: String }
    };
  }

  render() {
    return html`
      <my-app-message text="Page 3"><my-app-message>
    `;
  }
}

window.customElements.define('my-app-page-3', MyAppPage3);
