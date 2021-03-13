import {css} from 'lit-element';

export default css`
    .icon {
        background: none;
        border: none;
        padding: 0;
        outline: none;
        cursor: pointer;
    }

    .icon svg {
        fill: var(--color-secondary);
        transition: fill var(--transition-speed-normal) ease-in-out;
        width: var(--size-text-x2);
    }

    .icon:hover svg {
        fill: var(--color-primary);
    }

    .icon.small svg {
        width: var(--size-text-large);
    }

    .icon.large svg {
        width: var(--size-text-x3);
    }

    .icon.active {
        fill: var(--color-primary);
    }
`;