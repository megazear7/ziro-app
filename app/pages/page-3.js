import { LitElement, html, css } from 'lit-element';
import globalStyles from '../styles/globals.js';
import '../components/color-mode.js';

export class MyAppPage3 extends LitElement {
  static get styles() {
    return [globalStyles, css`
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
      <h2>Page 3</h2>
      <my-app-color-mode></my-app-color-mode>
    `;
  }
}

window.customElements.define('my-app-page-3', MyAppPage3);
