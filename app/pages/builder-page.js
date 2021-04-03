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
    };
  }

  render() {
    return html`
      <h1>Add Movie</h1>
      <my-app-add-movie></my-app-add-movie>
    `;
  }
}

window.customElements.define(appData.prefix + 'builder-page', BuilderPage);
