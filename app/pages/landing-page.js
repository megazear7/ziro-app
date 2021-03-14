import { LitElement, html, css } from 'lit-element';
import globals from '../styles/globals.js';
import '../components/message.js';

export class MyAppLandingPage extends LitElement {
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
      <my-app-message></my-app-message>
    `;
  }
}

window.customElements.define('my-app-landing-page', MyAppLandingPage);
