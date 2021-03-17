import {css} from 'lit-element';

export default css`
    p {
        color: var(--color-background-bold);
        font-size: var(--size-text-medium);
        line-height: var(--size-line-height-medium);
    }

    h1 {
        font-size: var(--size-text-x4);
        color: var(--color-primary);
    }

    h2 {
        font-size: var(--size-text-x3);
        color: var(--color-secondary);
    }
    
    h3 {
        font-size: var(--size-text-x2);
        color: var(--color-background-bold);
    }
    
    h4 {
        font-size: var(--size-text-large);
        color: var(--color-background-bold);
    }
    
    h5 {
        font-size: var(--size-text-medium);
        color: var(--color-background-bold);
    }
    
    h6 {
        font-size: var(--size-text-small);
        color: var(--color-background-bold);
    }

    section {
        color: var(--color-background-bold);
        margin-top: var(--size-space-medium);
    }

    a {
        color: var(--color-secondary);
        text-decoration: none;
    }

    a:hover, a:focus {
        color: var(--color-primary);
        text-decoration: underline;
    }

    ziro-slide-page::part(inner) {
        max-width: 900px;
        margin: auto;
    }

    ziro-slide-page::part(outer) {
        background-color: var(--color-background-primary);
        box-shadow: var(--shadow-large);
        transition: left 500ms ease-in-out 100ms;
    }

    ziro-slide-page.small-page::part(outer) {
        border-right: 5px solid var(--color-primary);
        width: 90%;
    }
`;