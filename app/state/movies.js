import { ZiroState } from 'ziro-state';

class MoviesState extends ZiroState {
    config() {
        return {
            localStorage: true
        }
    }

    init() {
        return {
            movies: []
        }
    }

    addMovie(movie) {
        this.state.movies = [ ...this.state.movies, movie ];
    }

    removeMovie(movie) {
        this.state.movies = this.state.movies.filter(filterMovie => filterMovie.title !== movie.title);
    }
}

export default new MoviesState('movie-state');
