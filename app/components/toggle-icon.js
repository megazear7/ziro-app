import { LitElement, html, css } from 'lit-element';
import appData from '../data.js';
import { classMap } from 'lit-html/directives/class-map';
import globals from '../styles/globals.js';
import iconStyles from '../styles/icons.js';
import sunIcon from '../icons/sun.js';
import lightIcon from '../icons/light.js';

export class ToggleIcon extends LitElement {
  static get styles() {
    return [globals, iconStyles, css`
        :host {
          display: inline-block;
        }
    `];
  }

  static get properties() {
    return {
      on: { type: Boolean },
      iconSvg: { type: Object, attribute: false },
      icon: { type: String }
    };
  }

  render() {
    return html`
        <button @click=${this.toggle} class=${this.buttonClasses()}>${this.iconSvg}</button>
    `;
  }

  buttonClasses() {
    return classMap({
      'icon': true,
      'active': this.on
    })
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'icon') {
      this.iconSvg = {
        'light': lightIcon,
        'sun': sunIcon,
      }[newVal];
    }
  }

  toggle() {
    this.on = !this.on;

    this.dispatchEvent(new CustomEvent('toggle', {
      details: this.on
    }));
  }
}

window.customElements.define(appData.prefix + 'toggle-icon', ToggleIcon);
