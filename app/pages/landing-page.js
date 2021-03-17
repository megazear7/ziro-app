import { LitElement, html, css } from 'lit-element';
import appData from '../data.js';
import globals from '../styles/globals.js';
import buttons from '../styles/buttons.js';
import '../components/message.js';
import '../components/share.js';
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
      message: { type: String },
      slideOutPageOpen: { type: Boolean },
      slideOutFullPageOpen: { type: Boolean }
    };
  }

  render() {
    return html`
      <section><my-app-message></my-app-message></section>
      <section><my-app-share></my-app-share></section>
      <section>
        <button class="btn" @click=${() => this.slideOutPageOpen = true}>Slide Out Page</button>
        <button class="btn" @click=${() => this.slideOutFullPageOpen = true}>Slide Out Full Page</button>
      </section>

      <ziro-slide-page
        class="small-page"
        @ziro-slide-page-closed=${() => this.slideOutPageOpen = false}
        .active=${this.slideOutPageOpen}>
        <my-app-credits-page></my-app-credits-page>
      </ziro-slide-page>

      <ziro-slide-page
        @ziro-slide-page-closed=${() => this.slideOutFullPageOpen = false}
        .active=${this.slideOutFullPageOpen}>
        <my-app-credits-page></my-app-credits-page>
      </ziro-slide-page>
    `;
  }
}

window.customElements.define(appData.prefix + 'landing-page', LandingPage);
