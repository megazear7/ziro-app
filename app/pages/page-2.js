import { LitElement, html, css } from 'lit-element';
import globals from '../styles/globals.js';
import '../components/message.js';

export class MyAppPage2 extends LitElement {
  static get styles() {
    return [globals, css`
      :host {
        display: block;
      }
    `];
  }

  static get properties() {
    return {
      message: { type: String }
    };
  }

  render() {
    return html`
      <h2>Page 2</h2>
    `;
  }
}

window.customElements.define('my-app-page-2', MyAppPage2);
