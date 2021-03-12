import { ZiroState } from '/node_modules/ziro-state/src/index.js';

class Example extends ZiroState {
    init() {
        return {
            message: 'Hello, World'
        }
    }

    updateMessage(str) {
        this.state.message = str;
    }

    updateMessageAsync(str) {
        return new Promise((resolve) => {
            setTimeout(() => {
                updateMessage(str);
                resolve();
            }, 3000);
        });
    }
}

export default new Example();
