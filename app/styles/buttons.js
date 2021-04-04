import {css} from 'lit-element';

export default css`
    .btn {
        width: 100%;
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

    .btn-group {
        display: flex;
    }

    .btn-group button, .btn-group ziro-button::part(button) {
        width: 100%;
        height: 100%;
        border-radius: 0;
    }

    .btn-group ziro-button {
        width: 100%;
    }

    .btn-group button:first-child, .btn-group ziro-button:first-child::part(button) {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
    }

    .btn-group button:last-child, .btn-group ziro-button:last-child::part(button) {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    }

    .btn-group button, .btn-group ziro-button {
        margin-right: 1px;
    }

    .btn-group button:last-child, .btn-group ziro-button:last-child {
        margin-right: 0;
    }
`;