import { LitElement, html, css } from 'lit-element';
import appData from '../data.js';
import globals from '../styles/globals.js';
import '../components/message.js';
import '../components/share.js';

export class LandingPage extends LitElement {
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
      <section><my-app-message></my-app-message></section>
      <section><my-app-share></my-app-share></section>
    `;
  }
}

window.customElements.define(appData.prefix + 'landing-page', LandingPage);
