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
      <h1>Landing Page</h1>
      <section>
        <div class="btn-group">
          <ziro-button @click=${() => this.slideOutPageOpen = true}>Open first</ziro-button>
          <ziro-button @click=${() => this.slideOutFullPageOpen = true}>Open second</ziro-button>
        </div>
      </section>
      <section><my-app-share></my-app-share></section>
      <section>
        <div>
          <br>
          <br>
          <ziro-finder placeholder="Search by movie title such as 'moon' or 'lord of the rings'" hint="Movie title" query="">
            <ziro-item>Lord of the Rings</ziro-item>
            <ziro-item>Interstellar</ziro-item>
            <ziro-item>Avengers: End Game</ziro-item>
            <ziro-item>Alien</ziro-item>
            <ziro-item>Gone with the Wind</ziro-item>
            <ziro-item>The Hobbit</ziro-item>
            <ziro-item>Harry Potter</ziro-item>
            <ziro-item>Green Moon</ziro-item>
            <ziro-item>Blue Moon</ziro-item>
            <ziro-item>Orange Moon</ziro-item>
            <ziro-item>Red Moon</ziro-item>
            <ziro-item>Yellow Moon</ziro-item>
            <ziro-item>Example Moon</ziro-item>
          </ziro-finder>
          <br>
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

window.customElements.define(appData.prefix + 'landing-page', LandingPage);
