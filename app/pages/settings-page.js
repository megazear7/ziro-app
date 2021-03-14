import { LitElement, html, css } from 'lit-element';
import globalStyles from '../styles/globals.js';
import '../components/color-mode.js';
import '../components/contrast-mode.js';

export class MyAppSettingsPage extends LitElement {
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
      <h2>Settings</h2>
      <section id="toggle-settings">
        <my-app-color-mode></my-app-color-mode>
        <my-app-contrast-mode></my-app-contrast-mode>
      </section>
      <section>Icons made by <a href="https://www.flaticon.com/authors/smartline" title="Smartline">Smartline</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></section>
    `;
  }
}

window.customElements.define('my-app-settings-page', MyAppSettingsPage);
