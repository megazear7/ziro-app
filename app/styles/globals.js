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
        text-align: center;
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
        max-width: 900px;
        margin: auto;
    }

    ziro-slide-page::part(outer) {
        background-color: var(--color-background-primary);
        box-shadow: var(--shadow-large);
        transition: left var(--transition-speed-slow) ease-in-out 100ms;
    }

    ziro-slide-page.small-page::part(outer) {
        border-right: 5px solid var(--color-primary);
        width: 90%;
    }

    ziro-wizard {
        background-color: var(--color-background-primary);
        box-shadow: var(--shadow-large);
        transition: left var(--transition-speed-slow) ease-in-out 100ms;
    }

    * {
        --zc-primary-color: var(--color-primary);
        --zc-primary-text-color: var(--color-primary-bold);
        --zc-secondary-color: var(--color-secondary);
        --zc-secondary-text-color: var(--color-secondary-bold);
        --zc-background-color: var(--color-background-primary);
        --zc-background-text-color: var(--color-background-bold);
        --zc-selected-color: var(--color-grey);
        --zc-selected-text-color: var(--color-grey-bold);

        --zc-border-radius: 3px;

        --zc-space-small: 10px;
        --zc-space-medium: 20px;
        --zc-space-large: 30px;
        --zc-space-x2: 40px;
        --zc-space-x3: 60px;

        --zc-font-size-small: 14px;
        --zc-font-size-medium: 16px;
        --zc-font-size-large: 20px;
        --zc-font-size-x2: 26px;
        --zc-font-size-x3: 36px;

        --zc-transition-speed: 300ms;
    }
`;