import { LitElement, html, css } from 'lit-element';
import appData from '../data.js';
import globalStyles from '../styles/globals.js';
import '../components/color-mode.js';
import '../components/contrast-mode.js';

export class SettingsPage extends LitElement {
  static get styles() {
    return [globalStyles, css`
      :host {
        display: block;
      }

      #toggle-settings > * {
        padding-right: var(--size-space-medium);
      }

      #toggle-settings > *:last-child {
        padding-right: 0;
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
      <h1>Settings</h1>
      <section class="center" id="toggle-settings">
        <my-app-color-mode></my-app-color-mode>
        <my-app-contrast-mode></my-app-contrast-mode>
      </section>
      <section class="center">
        <my-app-share></my-app-share>
      </section>
      <section>
        <p>Icons made by <a href="https://www.flaticon.com/authors/smartline" title="Smartline">Smartline</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
        <p>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
      </section>
    `;
  }
}

window.customElements.define(appData.prefix + 'settings-page', SettingsPage);
