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
      <h1>Add Entry</h1>

      <section>
        <ziro-button class="btn" @click=${() => this.startWizard = true}>Add entry</ziro-button>
      </section>

      <ziro-wizard .active=${this.startWizard} @ziro-wizard-closed=${() => this.startWizard = false} speed="500">
        <ziro-panel>
            <section>
              <h3>Favorites</h3>
              <p>Any information that you do not have you can skip.</p>
              <br>
              <ziro-input placeholder="Enter favorite game" hint="Favorite game"></ziro-input>
              <br>
              <ziro-input placeholder="Enter favorite movie" hint="Favorite movie"></ziro-input>
              <br><br>
              <ziro-wizard-nav>
                <span slot="previous">Close</span>
                <span slot="next">Next &rarr;</span>
              </ziro-wizard-nav>
            </section>
        </ziro-panel>
        <ziro-panel>
            <section>
              <h3>Info</h3>
              <p>Any information that you do not have you can skip.</p>
              <br>
              <ziro-input placeholder="Enter description" hint="Email"></ziro-input>
              <br>
              <ziro-input placeholder="Enter size" hint="Size"></ziro-input>
              <br><br>
              <ziro-wizard-nav>
                <span slot="previous">&larr; Previous</span>
                <span slot="next">Next &rarr;</span>
              </ziro-wizard-nav>
            </section>
        </ziro-panel>
        <ziro-panel>
            <section>
              <h3>Review</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <ziro-wizard-nav>
                <span slot="previous">&larr; Previous</span>
                <span slot="next">Save</span>
              </ziro-wizard-nav>
            </section>
        </ziro-panel>
      </ziro-wizard>
    `;
  }
}

window.customElements.define(appData.prefix + 'builder-page', BuilderPage);
