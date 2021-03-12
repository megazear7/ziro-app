import { LitElement, html, css } from 'lit-element';
import '../components/message.js';

export class MyAppPage1 extends LitElement {
  static get styles() {
    return [css`
    `];
  }

  static get properties() {
    return {
      message: { type: String }
    };
  }

  render() {
    return html`
      <my-app-message text="Page 1"><my-app-message>
    `;
  }
}

window.customElements.define('my-app-page-1', MyAppPage1);
