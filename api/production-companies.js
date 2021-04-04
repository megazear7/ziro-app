const fetch = require('node-fetch');

exports.handler = async function() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    const statusCode = res.status;
    const body = await res.json();

    return {
        statusCode,
        body: JSON.stringify({
            productionCompanies: [
                { name: 'Paramount Pictures' },
                { name: 'Universal Pictures' },
                { name: '20th Century Studios' },
                { name: 'Metro-Goldwyn-Mayer' },
                { name: 'Sony Pictures' },
                { name: 'DreamWorks Pictures' },
                { name: 'Columbia Pictures' },
                { name: 'Focus Features' },
                { name: 'New Line Cinema' },
                { name: 'Miramax' },
                { name: 'Castle Rock Entertainment' },
                { name: 'Amblin Entertainment' },
                { name: 'Screen Gems' },
                { name: 'Walt Disney Pictures' },
                { name: 'Lucasfilm' },
                { name: 'Lionsgate' },
                { name: 'TriStar Pictures' },
                { name: 'Annapurna Pictures' },
                { name: 'Pixar' },
                { name: 'Legendary Pictures' }
            ]
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    };
}