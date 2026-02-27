/**
 * Copyright 2026 JonChiu-programs
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `playlist-indicator`
 * 
 * @demo index.html
 * @element playlist-indicator
 */
export class PlayList1 extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "playlist-indicator";
  }

  constructor() {
    super();
    this.count = "0"
    this.max = "0"
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/playlist-indicator.ar.json", import.meta.url).href +
        "/../",
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      count: {type : Number, reflect: true},
      max: {type : Number}
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        height: 250px;
        width: 500px;
        transform: translateX(400px);
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-default-beaverBlue);
        font-family: var(--ddd-font-navigation);
      }


      .indicatorWrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }

      .counter{
        text-align: center;
        display: flex;
        padding-left: 65px;
        font-size: 150px;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="indicatorWrapper">
    <h3 class = "counter">${this.count} / ${this.max}</h3>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PlayList1.tag, PlayList1);