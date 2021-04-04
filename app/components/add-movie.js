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
      productionCompanyQuery: { type: String },
      productionCompanies: { type: Array }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.productionCompanies = [];
    listen(this);
    movieState.loadProductionCompanies();
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
                @keydown=${e => this.isEnterKey(e) && this.focusInput('description')}
                .value=${this.title}
                name="title"
                @ziro-selector-input=${e => this.title = e.detail}
                placeholder="Enter movie title"
                hint="Title">
              </ziro-input>
              <br>
              <ziro-input
                @keydown=${e => this.isEnterKey(e) && this.focusInput('rating')}
                .value=${this.description}
                name="description"
                @ziro-selector-input=${e => this.description = e.detail}
                placeholder="Enter movie description"
                hint="Description">
              </ziro-input>
              <br>
              <ziro-input
                @keydown=${e => this.isEnterKey(e) && this.next()}
                .value=${this.rating}
                @ziro-selector-input=${e => this.rating = e.detail}
                name="rating"
                placeholder="Enter movie rating"
                hint="rating">
              </ziro-input>
              <br><br>
            </section>
            <ziro-wizard-nav>
              <span slot="previous">Close</span>
              <span slot="next">Next &rarr;</span>
            </ziro-wizard-nav>
        </ziro-panel>
        <ziro-panel @ziro-panel-changed=${() => this.shadowRoot.getElementById('production-company').updateItems()}>
            <section>
              <ziro-finder
                id="production-company"
                max="6"
                placeholder="Production company"
                hint="Movie title"
                .value=${this.productionCompany}
                @ziro-finder-changed=${e => this.productionCompany = e.detail}
                query=${this.productionCompanyQuery || ''}
                @ziro-finder-input=${e => this.productionCompanyQuery = e.detail }>
                ${ this.productionCompanies.map(company => html`
                  <ziro-item>${company.name}</ziro-item>
                `)}
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
              <h4>${this.title}</h4>
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

  isEnterKey(e) {
    return e.key === 'Enter' || e.which === 13 || e.keyCode === 13;
  }

  focusInput(name) {
    this.shadowRoot.querySelector(`ziro-input[name = "${name}"]`).focus();
  }

  next() {
    this.shadowRoot.querySelector('ziro-wizard').next();
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
    this.productionCompanies = movieState.getState().productionCompanies;
  }
}

window.customElements.define(appData.prefix + 'add-movie', AddMovie);
