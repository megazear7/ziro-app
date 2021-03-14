import { ZiroState } from 'ziro-state';

class AppState extends ZiroState {
    config() {
        return {
            localStorage: true
        }
    }

    init() {
        return {
            colorMode: 'light',
            contrastMode: 'normal'
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

    turnContrastOn() {
        this.state.contrastMode = 'contrast';
    }

    turnContrastOff() {
        this.state.contrastMode = 'normal';
    }

    toggleContrast() {
        this.state.contrastMode === 'normal' ? this.turnContrastOn() : this.turnContrastOff();
    }
}

export default new AppState('app-state');
