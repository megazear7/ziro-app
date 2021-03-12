const fetch = require('node-fetch');

exports.handler = async function() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    const statusCode = res.status;
    const body = await res.json();

    return {
        statusCode,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    };
}