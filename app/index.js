import { LitElement, html, css } from 'lit-element';
import './pages/page-1';
import './pages/page-2';
import './pages/page-3';
import 'ziro-components';

export class MyApp extends LitElement {
  static get styles() {
    return [variables, css`
    `];
  }

  static get properties() {
    return {
      message: { type: String }
    };
  }

  render() {
    return html`
      <h1>${this.message}</h1>
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
