/**
 * Copyright 2026 JonChiu-programs
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./play-list-1.js";

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
    this.count = "0";
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      count: { type : Number, Reflect : true}
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`

      .indicatorWrapper {
        display: inline-block;
        transform: translateX(200px);
        background-color: blue;
        border-radius: 100px;
        margin: var(--ddd-spacing-1);
        padding: var(--ddd-spacing-3);
      }

      .indicator{
        display: inline-block;
        height: 100px;
        width: 100px;
        font-size: 65px;
        text-align: center;
        padding-bottom: 10px;
        background-color: red;
        border-radius: 30px;
      }

      .add{
        display: block;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <!--<button class="add">Clone</button> -->
    <div class="indicatorWrapper">
      <button class="indicator">${this.title}</button>
    </div>`;
  }

  clone(){
    let count = 1;
    document.querySelectorAll(".indicatorWrapper");
    document.querySelector(".add").addEventListener("click", function () {
      if (count != 10) {
        const clone = document.querySelector(".indicatorWrapper").cloneNode(true);
        document.querySelector(".indicatorWrapper").appendChild(clone);
        count++;
      } 
      else {
      alert("Cannot have more than ten cards");
      document.querySelector(".indicatorWrapper").cloneNode(false);
      }
    });
  }

  /*updated(changedProperties) {
  if (super.updated) {
    super.updated(changedProperties);
  }
  if (changedProperties.has('count')) {
    const check = changedProperties.get('count');
      for (let index = 1; index <= 2; index++) {
        this.makeItRain();
        
      }
    // do your testing of the value and make it rain by calling makeItRain
  }
}

makeItRain() {
  let count = 1
    document.querySelectorAll(".indicatorWrapper");
        if (count <= 2) {
          const card = document.querySelector(".indicator").cloneNode(true);
          document.querySelector(".indicatorWrapper. indicator").appendChild(card);
          count++;
        } else {
      document.querySelector(".indicator").cloneNode(false);
        }
    } */
} 

globalThis.customElements.define(PlayList1.tag, PlayList1);