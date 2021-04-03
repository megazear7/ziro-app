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
}

export default new MoviesState('movie-state');
