import {css} from 'lit-element';

export default css`
    p {
        color: var(--color-background-bold);
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
`;