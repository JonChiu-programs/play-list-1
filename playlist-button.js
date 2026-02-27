/**
 * Copyright 2026 JonChiu-programs
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `playlist-button`
 * 
 * @demo index.html
 * @element playlist-button
 */
export class PlayList1 extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "playlist-button";
  }

  constructor() {
    super();
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`

      .buttonWrapper {
        display: inline-block;
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }

      .button{
        display: inline-block;
        transform: translateY(-380px);
        height: 100px;
        width: 100px;
        font-size: 65px;
        text-align: center;
        padding-bottom: 10px;
        background-color: blue;
        border-radius: 20px;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="buttonWrapper">
  <button class="button">${this.title}</button>
</div>`;
  }
}

globalThis.customElements.define(PlayList1.tag, PlayList1);