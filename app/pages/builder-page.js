import { LitElement, html, css } from 'lit-element';
import appData from '../data.js';
import globals from '../styles/globals.js';
import buttons from '../styles/buttons.js';
import '../components/add-movie.js';
import '../components/share.js';
import './credits-page.js';

export class BuilderPage extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.startWizard = false;
  }

  static get styles() {
    return [globals, buttons, css`
      :host {
        display: block;
      }
    `];
  }

  static get properties() {
    return {
      slideOutPageOpen: { type: Boolean },
      slideOutFullPageOpen: { type: Boolean }
    };
  }

  render() {
    return html`
      <h1>Add Movie</h1>
      <my-app-add-movie></my-app-add-movie>
      <section>
        <div class="btn-group">
          <ziro-button @click=${() => this.slideOutPageOpen = true}>Open first</ziro-button>
          <ziro-button @click=${() => this.slideOutFullPageOpen = true}>Open second</ziro-button>
        </div>
      </section>

      <ziro-slide-page
        class="small-page"
        @ziro-slide-page-closed=${() => this.slideOutPageOpen = false}
        .active=${this.slideOutPageOpen}>
        <ziro-closer>&larr; Close</ziro-closer>
        <my-app-credits-page></my-app-credits-page>
      </ziro-slide-page>

      <ziro-slide-page
        @ziro-slide-page-closed=${() => this.slideOutFullPageOpen = false}
        .active=${this.slideOutFullPageOpen}>
        <ziro-closer>&larr; Close</ziro-closer>
        <my-app-credits-page></my-app-credits-page>
      </ziro-slide-page>
    `;
  }
}

window.customElements.define(appData.prefix + 'builder-page', BuilderPage);
