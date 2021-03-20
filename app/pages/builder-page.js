import { LitElement, html, css } from 'lit-element';
import appData from '../data.js';
import globals from '../styles/globals.js';
import buttons from '../styles/buttons.js';
import '../components/message.js';
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

      section {
        max-width: var(--max-width);
        margin: auto;
      }
    `];
  }

  static get properties() {
    return {
      message: { type: String },
      startWizard: { type: Boolean }
    };
  }

  render() {
    return html`
      <h1>Lorem Ipsum</h1>
      <section>
        <button class="btn" @click=${() => this.startWizard = true}>Open Wizard</button>
      </section>

      <ziro-wizard .active=${this.startWizard} @ziro-wizard-closed=${() => this.startWizard = false} speed="500">
        <ziro-panel>
            <section>
              <h3>Panel 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <ziro-wizard-nav>
                <span slot="previous">Close</span>
                <span slot="next">Next &rarr;</span>
              </ziro-wizard-nav>
            </section>
        </ziro-panel>
        <ziro-panel>
            <section>
              <h3>Panel 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <ziro-wizard-nav>
                <span slot="previous">&larr; Previous</span>
                <span slot="next">Next &rarr;</span>
              </ziro-wizard-nav>
            </section>
        </ziro-panel>
        <ziro-panel>
            <section>
              <h3>Panel 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <ziro-wizard-nav>
                <span slot="previous">&larr; Previous</span>
                <span slot="next">Finish</span>
              </ziro-wizard-nav>
            </section>
        </ziro-panel>
      </ziro-wizard>
    `;
  }
}

window.customElements.define(appData.prefix + 'builder-page', BuilderPage);
