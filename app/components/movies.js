import { LitElement, html, css } from 'lit-element';
import appData from '../data.js';
import globals from '../styles/globals.js';
import { listen } from 'ziro-state';
import movieState from '../state/movies.js';

export class Movies extends LitElement {
  static get styles() {
    return [globals, css`
    `];
  }

  static get properties() {
    return {
      movies: { type: Array, attribute: false }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    listen(this);
  }

  render() {
    return html`
      ${ this.movies.map(movie => html`
        <h2>${movie.title}</h2>
      `)}
    `;
  }

  stateUpdated() {
    this.movies = movieState.getState().movies;
  }
}

window.customElements.define(appData.prefix + 'movies', Movies);
