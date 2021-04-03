import { LitElement, html, css } from 'lit-element';
import appData from '../data.js';
import globals from '../styles/globals.js';
import iconStyles from '../styles/icons.js';
import shareIcon from '../icons/share.js';

export class Share extends LitElement {
  static get styles() {
    return [globals, iconStyles, css`
      :host {
        display: block;
      }

      button {
        margin: auto;
        display: block;
      }

      textarea {
        text-align: center;
        padding: 0;
        height: 16px;
        background: none;
        border: none;
        resize: none;
        width: 100%;
        color: var(--bold-grey);
        caret-color: transparent;
        cursor: default;
      }

      textarea:hover, textarea:focus {
        outline: none;
      }
    `];
  }

  render() {
    return html`
      <button class="icon" @click=${this.share}>${shareIcon}</button>
      <textarea></textarea>
    `;
  }

  share() {
    try {
      navigator.share({
        url: window.location.href,
        title: appData.title
      });
    } catch (err) {
      const textElement = this.shadowRoot.querySelector('textarea');
      textElement.value = window.location.href;
      textElement.select();
      textElement.setSelectionRange(0, 99999);
      document.execCommand("copy");
      textElement.value = `Copied ${window.location.host}!`;

      setTimeout(() => {
        textElement.value = "";
      }, 3000);
    }
  }
}

window.customElements.define(appData.prefix + 'share', Share);
