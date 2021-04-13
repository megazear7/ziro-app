import {css} from 'lit-element';

export default css`
    p {
        color: var(--color-background-bold);
        font-size: var(--size-text-medium);
        line-height: var(--size-line-height-medium);
        text-align: center;
    }

    h1 {
        font-size: var(--size-text-x4);
        color: var(--color-primary);
        margin: 0 0 32px 0;
        text-align: center;
    }

    h2 {
        font-size: var(--size-text-x3);
        color: var(--color-secondary);
        text-align: center;
    }
    
    h3 {
        font-size: var(--size-text-x2);
        color: var(--color-background-bold);
        text-align: center;
    }
    
    h4 {
        font-size: var(--size-text-large);
        color: var(--color-background-bold);
        text-align: center;
    }
    
    h5 {
        font-size: var(--size-text-medium);
        color: var(--color-background-bold);
        text-align: center;
    }
    
    h6 {
        font-size: var(--size-text-small);
        color: var(--color-background-bold);
        text-align: center;
    }

    section {
        color: var(--color-background-bold);
        margin-top: var(--size-space-medium);
        max-width: var(--max-width);
    }

    a {
        color: var(--color-secondary);
        text-decoration: none;
        transition: color var(--transition-speed-normal);
    }

    a:hover, a:focus {
        color: var(--color-primary);
    }

    button:hover, button:focus {
        background-color: var(--color-primary);
        color: var(--color-primary-bold);
    }

    a:focus, button:focus {
        outline: none;
    }

    ziro-slide-page::part(inner) {
        max-width: var(--max-width);
        margin: auto;
    }

    ziro-slide-page::part(outer) {
        background-color: var(--color-background-primary);
        box-shadow: var(--shadow-large);
        transition: left var(--transition-speed-slow) ease-in-out 100ms;
        z-index: 1000;
    }

    ziro-slide-page.small-page::part(outer) {
        border-right: 5px solid var(--color-primary);
        width: 90%;
    }

    ziro-wizard {
        z-index: 1000;
        background-color: var(--color-background-primary);
        box-shadow: var(--shadow-large);
        transition: left var(--transition-speed-slow) ease-in-out 100ms;
    }

    ziro-wizard-nav {
        position: fixed;
        bottom: var(--size-space-medium);
        width: calc(100% - (2 * var(--size-space-medium)));
    }

    .center {
        display: flex;
    }

    .center > *:first-child {
        margin-left: auto;
    }

    .center > *:last-child {
        margin-right: auto;
    }
`;