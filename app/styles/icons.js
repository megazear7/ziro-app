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
        transition: fill var(--transition-speed-normal) ease-in-out, filter var(--transition-speed-fast) ease-in-out;
        width: var(--size-text-x2);
        height: var(--size-text-x2);
    }

    .icon:focus, .icon:hover {
        background-color: transparent;
    }

    .icon:focus svg {
        fill: var(--color-primary);
        filter: drop-shadow( 0px 0px 5px var(--color-primary));
    }

    .icon.small svg {
        width: var(--size-text-large);
    }

    .icon.large svg {
        width: var(--size-text-x3);
    }

    .icon.active svg {
        fill: var(--color-primary);
    }

    @media only screen and (hover: hover) {
        .icon:hover svg, .icon:focus svg {
            fill: var(--color-primary);
            filter: drop-shadow( 0px 0px 5px var(--color-primary));
        }
    }
`;