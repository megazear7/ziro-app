import { LitElement, html, css } from 'lit-element';
import appData from '../data.js';
import globals from '../styles/globals.js';
import { listen } from 'ziro-state';
import movieState from '../state/movies.js';
import buttonStyles from '../styles/buttons.js';

export class AddMovie extends LitElement {
  static get styles() {
    return [globals, buttonStyles, css`
      :host {
        display: block;
      }

      #production-company {
        margin-bottom: var(--size-space-medium);
      }
    `];
  }

  static get properties() {
    return {
      startWizard: { type: Boolean },
      title: { type: String },
      description: { type: String },
      rating: { type: String },
      productionCompany: { type: String },
      productionCompanyQuery: { type: String }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    listen(this);
  }

  render() {
    return html`
      <section>
        <div class="btn-group">
          <ziro-button @click=${() => this.startWizard = true}>Add movie</ziro-button>
        </div>
      </section>

      <ziro-wizard 
          speed="500"
          .active=${this.startWizard}
          @ziro-wizard-closed=${() => this.startWizard = false}
          @ziro-wizard-successful=${this.addMovie}>
        <ziro-panel>
            <section>
              <h3>Add movie</h3>
              <br>
              <ziro-input
                .value=${this.title}
                @ziro-selector-input=${e => this.title = e.detail}
                placeholder="Enter movie title"
                hint="Title">
              </ziro-input>
              <br>
              <ziro-input
                .value=${this.description}
                @ziro-selector-input=${e => this.description = e.detail}
                placeholder="Enter movie description"
                hint="Description">
              </ziro-input>
              <br>
              <ziro-input
                .value=${this.rating}
                @ziro-selector-input=${e => this.rating = e.detail}
                placeholder="Enter movie rating"
                hint="rating">
              </ziro-input>
              <br><br>
              <ziro-wizard-nav>
                <span slot="previous">Close</span>
                <span slot="next">Next &rarr;</span>
              </ziro-wizard-nav>
            </section>
        </ziro-panel>
        <ziro-panel @ziro-panel-changed=${() => this.shadowRoot.getElementById('production-company').updateItems()}>
            <section>
              <ziro-finder
                id="production-company"
                value=${this.productionCompany}
                @ziro-finder-changed=${e => this.productionCompany = e.detail}
                placeholder="Production company" hint="Movie title"
                query=${this.productionCompanyQuery || ''}
                @ziro-finder-input=${e => this.productionCompanyQuery = e.detail }>

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

  addMovie() {
    movieState.addMovie({
      title: this.title,
      description: this.description,
      rating: this.rating,
      productionCompany: this.productionCompany
    });

    this.title = '';
    this.description = '';
    this.rating = '';
    this.productionCompany = '';
    this.productionCompanyQuery = '';
  }

  stateUpdated() {
  }
}

window.customElements.define(appData.prefix + 'add-movie', AddMovie);
