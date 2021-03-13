import { ZiroState } from 'ziro-state';

class ExampleState extends ZiroState {
    init() {
        return {
            message: 'Hello, World'
        }
    }

    updateMessage(str) {
        this.state.message = str;
    }

    updateMessageAsync() {
        this.sendUpdate(
            fetch('/.netlify/functions/example')
            .then(res => res.json())
            .then(json => this.updateMessage(json.title)));
    }
}

export default new ExampleState('example-state');
