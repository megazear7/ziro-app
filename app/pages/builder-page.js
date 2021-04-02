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
      startWizard: { type: Boolean },
      title: { type: String },
      description: { type: String },
      rating: { type: String },
      productionCompany: { type: String }
    };
  }

  render() {
    return html`
      <h1>Add Movie</h1>

      <section>
        <ziro-button class="btn btn-block" @click=${() => this.startWizard = true}>Add movie</ziro-button>
      </section>

      <ziro-wizard .active=${this.startWizard} @ziro-wizard-closed=${() => this.startWizard = false} speed="500">
        <ziro-panel>
            <section>
              <h3>Add movie</h3>
              <br>
              <ziro-input @ziro-selector-input=${e => this.title = e.detail} placeholder="Enter movie title" hint="Title"></ziro-input>
              <br>
              <ziro-input @ziro-selector-input=${e => this.description = e.detail} placeholder="Enter movie description" hint="Description"></ziro-input>
              <br>
              <ziro-input @ziro-selector-input=${e => this.rating = e.detail} placeholder="Enter movie rating" hint="rating"></ziro-input>
              <br><br>
              <ziro-wizard-nav>
                <span slot="previous">Close</span>
                <span slot="next">Next &rarr;</span>
              </ziro-wizard-nav>
            </section>
        </ziro-panel>
        <ziro-panel>
            <section>
              <ziro-finder @ziro-finder-changed=${e => this.productionCompany = e.detail} placeholder="Production company" hint="Movie title" query="">
                <ziro-item>Paramount Pictures</ziro-item>
                <ziro-item>Universal Pictures</ziro-item>
                <ziro-item>20th Century Studios</ziro-item>
                <ziro-item>Metro-Goldwyn-Mayer</ziro-item>
                <ziro-item>Sony Pictures</ziro-item>
                <ziro-item>DreamWorks Pictures</ziro-item>
                <ziro-item>Columbia Pictures</ziro-item>
                <ziro-item>Focus Features</ziro-item>
                <ziro-item>New Line Cinema</ziro-item>
                <ziro-item>Miramax</ziro-item>
                <ziro-item>Castle Rock Entertainment</ziro-item>
                <ziro-item>Amblin Entertainment</ziro-item>
                <ziro-item>Screen Gems</ziro-item>
                <ziro-item>Walt Disney Pictures</ziro-item>
                <ziro-item>Lucasfilm</ziro-item>
                <ziro-item>Lionsgate</ziro-item>
                <ziro-item>TriStar Pictures</ziro-item>
                <ziro-item>Annapurna Pictures</ziro-item>
                <ziro-item>Pixar</ziro-item>
                <ziro-item>Legendary Pictures</ziro-item>
              </ziro-finder>
              <ziro-wizard-nav>
                <span slot="previous">&larr; Previous</span>
                <span slot="next">Next &rarr;</span>
              </ziro-wizard-nav>
            </section>
        </ziro-panel>
        <ziro-panel>
            <section>
              <h3>Review</h3>
              <h3>${this.title}</h3>
              <p>${this.description}</p>
              <p>${this.rating}</p>
              <p>${this.productionCompany}</p>
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
