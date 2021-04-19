import { LitElement, html, css } from 'lit-element';
import appData from '../data.js';
import globals from '../styles/globals.js';
import buttons from '../styles/buttons.js';
import '../components/message.js';
import '../components/share.js';
import '../components/movies.js';
import '../pages/credits-page.js';

export class LandingPage extends LitElement {
  static get styles() {
    return [globals, buttons, css`
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
      <h1>${appData.title}</h1>
      <section>
        <my-app-movies></my-app-movies>
      </section>
    `;
  }
}

window.customElements.define(appData.prefix + 'landing-page', LandingPage);
