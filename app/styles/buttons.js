import {css} from 'lit-element';

export default css`
    .btn {
        border: 1px solid var(--color-secondary-bold);
        background: none;
        background-color: var(--color-secondary);
        color: var(--color-secondary-bold);
        padding: var(--size-space-small);
        font-size: var(--size-text-medium);
        cursor: pointer;
        border-radius: var(--border-radius);
        transition: border-color var(--transition-speed-normal) ease-in-out, background-color var(--transition-speed-normal) ease-in-out, color var(--transition-speed-normal) ease-in-out;
    }

    .btn:hover {
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary-bold);
        color: var(--color-primary-bold);
    }
`;