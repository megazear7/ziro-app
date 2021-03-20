import {css} from 'lit-element';

export default css`
    .btn {
        background: none;
        background-color: var(--color-grey);
        color: var(--color-grey-bold);
        padding: var(--size-space-small);
        font-size: var(--size-text-medium);
        border: none;
        cursor: pointer;
        border-radius: var(--border-radius);
        transition: border-color var(--transition-speed-normal) ease-in-out, background-color var(--transition-speed-normal) ease-in-out, color var(--transition-speed-normal) ease-in-out;
    }

    .btn:hover {
        background-color: var(--color-primary);
        color: var(--color-primary-bold);
    }
`;