import { ZiroState } from 'ziro-state';

class MoviesState extends ZiroState {
    config() {
        return {
            localStorage: true
        }
    }

    init() {
        return {
            movies: [],
            productionCompanies: []
        }
    }

    updateProductionCompanies(productionCompanies) {
        this.state.productionCompanies = productionCompanies;
    }

    loadProductionCompanies() {
        this.sendUpdate(
            fetch('/.netlify/functions/production-companies')
            .then(res => res.json())
            .then(json => this.updateProductionCompanies(json.productionCompanies)));
    }

    addMovie(movie) {
        this.state.movies = [ ...this.state.movies, movie ];
    }

    removeMovie(movie) {
        this.state.movies = this.state.movies.filter(filterMovie => filterMovie.title !== movie.title);
    }
}

export default new MoviesState('movie-state');
