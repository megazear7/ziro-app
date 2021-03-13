import { ZiroState } from 'ziro-state';

class AppState extends ZiroState {
    config() {
        return {
            localStorage: true
        }
    }

    init() {
        return {
            colorMode: 'light'
        }
    }

    turnLightsOn() {
        this.state.colorMode = 'light';
    }

    turnLightsOff() {
        this.state.colorMode = 'dark';
    }

    toggleLights() {
        this.state.colorMode === 'dark' ? this.turnLightsOn() : this.turnLightsOff();
    }
}

export default new AppState('app-state');
