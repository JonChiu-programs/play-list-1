/**
 * Copyright 2026 JonChiu-programs
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `play-list-1`
 * 
 * @demo index.html
 * @element play-list-1
 */
export class PlayList1 extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "play-list-1";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "",
    };
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
      :host {
        display: inline-block;
        height: 800px;
        width: 1000px;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        text-align: center;
        font-size: 100px;
      }

      .container{
        width: 950px;
        height: 600px;
        overflow-wrap: break-word;
        hyphens: auto;
        word-break: break-all;
        overflow: auto;
        white-space: nowrap;
      }

      .text {
        font-size: 45px;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <h3><span>${this.title}:</span></h3>
  <div class = "container"><slot class = "text"></slot></div>
</div>`;
  }

}

globalThis.customElements.define(PlayList1.tag, PlayList1);