import { LitElement, html, css } from 'lit-element';
import globals from './styles/globals.js';
import './pages/page-1.js';
import './pages/page-2.js';
import './pages/page-3.js';
import 'ziro-components';

export class MyApp extends LitElement {
  static get styles() {
    return [globals, css`
      :host {
        --color-primary: #f78b08;
        --color-secondary: #49b695;
        --color-tertiary: #79b04f;
        --color-background-primary: #eee;
        --color-background-secondary: #fff;

        --color-primary-bold: #190e01;
        --color-secondary-bold: #07120f;
        --color-tertiary-bold: #0c1208;
        --color-background-bold: #111;
        --color-background-secondary-bold: #222;

        --size-text-small: 14px;
        --size-text-medium: 16px;
        --size-text-large: 18px;
        --size-text-x2: 24px;
        --size-text-x3: 30px;
        --size-text-x4: 36px;

        --size-space-small: 10px;
        --size-space-medium: 20px;
        --size-space-large: 30px;
        --size-space-extra-large: 50px;

        --border-radius: 3px;
        --transition-speed-normal: 300ms;
        --max-width: 900px;

      }

      ziro-panel {
        background-color: var(--color-background-primary);
        color: var(--color-background-primary-bold);
      }

      ziro-panel > * {
        max-width: var(--max-width);
        margin: auto;
      }

      ziro-nav {
        background-color: var(--color-background-secondary);
        color: var(--color-background-secondary-bold);
      }

      ziro-nav-item {
        background-color: var(--color-background-secondary);
        color: var(--color-background-secondary-bold);
      }

      ziro-nav-item:hover {
        background-color: var(--color-primary);
        color: var(--color-primary-bold);
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
      <ziro-screen>
        <ziro-panel-set>
            <ziro-panel>  
                <my-app-page-1></my-app-page-1>
            </ziro-panel>
            <ziro-panel>
                <my-app-page-2></my-app-page-2>
            </ziro-panel>
            <ziro-panel>
                <my-app-page-3></my-app-page-3>
            </ziro-panel>
        </ziro-panel-set>
        <ziro-nav>
            <ziro-nav-item selected>A</ziro-nav-item>
            <ziro-nav-item>B</ziro-nav-item>
            <ziro-nav-item>C</ziro-nav-item>
        </ziro-nav>
    </ziro-screen>
    `;
  }
}

window.customElements.define('my-app', MyApp);
