import { LitElement, html, css } from 'lit-element';
import appData from '../data.js';
import globals from '../styles/globals.js';
import { listen } from 'ziro-state';
import movieState from '../state/movies.js';
import buttonStyles from '../styles/buttons.js';

export class Movies extends LitElement {
  static get styles() {
    return [globals, buttonStyles, css`
    `];
  }

  static get properties() {
    return {
      movies: { type: Array },
      movieOpen: { type: Boolean },
      selectedMovie: { type: Object }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    listen(this);
  }

  render() {
    return html`
      <ziro-finder
        max="-1"
        placeholder="Search for movies"
        hint="Movies"
        .value=${this.selectedMovie}
        @ziro-finder-changed=${e => this.openMovie(e.detail) }>
        ${ this.movies.map(movie => html`
            <ziro-item value=${JSON.stringify(movie)}>${movie.title}</ziro-item>
        `)}
      </ziro-finder>

      <ziro-slide-page
        @ziro-slide-page-closed=${this.closeMovie}
        speed="1000"
        .active=${this.movieOpen}>
        <ziro-closer>&larr; Close</ziro-closer>
        ${ this.selectedMovie ? html`
          <br>
          <h3>${this.selectedMovie.title}</h3>
          <p>${this.selectedMovie.description}</p>
          <p>${this.selectedMovie.rating}</p>
          <p>${this.selectedMovie.productionCompany}</p>
          <button class="btn" @click=${() => this.removeMovie(this.selectedMovie)}>Delete</button>
        `: ''}
      </ziro-slide-page>
    `;
  }

  closeMovie() {
    this.selectedMovie = undefined;
    this.movieOpen = false
  }

  openMovie(movie) {
    this.selectedMovie = movie;
    this.movieOpen = true;
  }

  removeMovie(movie) {
    movieState.removeMovie(movie);
    this.movieOpen = false;
  }

  stateUpdated() {
    this.movies = movieState.getState().movies;
  }
}

window.customElements.define(appData.prefix + 'movies', Movies);
