import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { classMap } from "lit/directives/class-map.js";
import { resetCss } from "@css/reset";

type Item = {
  name: string;
  ico: string;
  disabled: boolean;
  arrow: boolean;
};

@customElement("menu-bar")
export class StartBtn extends LitElement {
  @property({ type: String, reflect: true }) isVisible = "";

  static styles = [
    resetCss,
    css`
      :host {
        position: absolute;
        z-index: 999;
      }
      .box {
        width: 210px;
        border: 2px outset #fff;
        box-shadow: 1px 1px #000;
        position: absolute;
        left: 0px;
        bottom: 3px;
        display: none;
      }
      .isVisible {
        display: flex !important;
      }
      .left {
        width: 22px;
        background: blue;
        background: linear-gradient(#00045f, #010079, blue);
        color: white;
        font-family: franklinGothicMedium, Arial, Helvetica, sans-serif;
        position: relative;
      }
      .left p {
        transform: rotate(-90deg);
        font-size: 16px;
        white-space: nowrap;
        position: absolute;
        left: 0;
        bottom: 0;
        margin: 0;
        padding: 0;
        transform-origin: 0% 0%;
        margin-bottom: -15px;
      }
      .right {
        background-color: silver;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 5px;
      }
      .right .itemMenu {
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        margin-top: 3px;
      }
      .right .itemMenu.disabled {
        color: grey;
        text-shadow: 1px 1px #fff;
        pointer-events: none;
      }
      .right .itemMenu:nth-child(1),
      .right .itemMenu:nth-child(8) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        padding-bottom: 3px;
      }
      .right .itemMenu:nth-child(2),
      .right .itemMenu:nth-child(9) {
        border-top: 1px solid white;
        margin-top: 0;
        padding-top: 3px;
      }
      .right .itemMenu img {
        width: 30px;
        height: 30px;
      }
      .right .itemMenu p {
        margin-left: 10px;
        font-size: 12px;
      }
      .right .itemMenu .arrow {
        margin-left: auto;
      }
    `,
  ];

  private _items: Array<Item>;

  constructor() {
    super();
    this._items = [
      {
        name: "Windows Update",
        ico: "assets/ico/menu/windows_update_small.png",
        disabled: true,
        arrow: false,
      },
      {
        name: "<u>P</u>rograms",
        ico: "assets/ico/menu/directory_program_group_small.png",
        disabled: true,
        arrow: true,
      },
      {
        name: "<u>F</u>avourites",
        ico: "assets/ico/menu/directory_favorites_small.png",
        disabled: true,
        arrow: true,
      },
      {
        name: "<u>D</u>ocuments",
        ico: "assets/ico/menu/directory_open_cabinet.png",
        disabled: true,
        arrow: true,
      },
      {
        name: "<u>S</u>ettings",
        ico: "assets/ico/menu/settings_gear.png",
        disabled: true,
        arrow: true,
      },
      {
        name: "<u>F</u>ind",
        ico: "assets/ico/menu/search_file.png",
        disabled: true,
        arrow: true,
      },
      {
        name: "<u>H</u>elp",
        ico: "assets/ico/menu/help_book_small.png",
        disabled: true,
        arrow: false,
      },
      {
        name: "<u>R</u>un",
        ico: "assets/ico/menu/application_hourglass_small.png",
        disabled: true,
        arrow: false,
      },
      {
        name: "<u>L</u>og off Stefano...",
        ico: "assets/ico/menu/key_win.png",
        disabled: true,
        arrow: false,
      },
      {
        name: "Sh<u>u</u>t Down...",
        ico: "assets/ico/menu/shut_down_cool.png",
        disabled: true,
        arrow: false,
      },
    ];
  }

  render() {
    const rows = this._items.map(
      (item) => html`
        <div class="itemMenu ${item.disabled ? "disabled" : ""}">
          <img alt="ico" src="${item.ico}" />
          <p>${unsafeHTML(item.name)}</p>
          ${item.arrow ? html`<div class="arrow">▸</div>` : html``}
        </div>
      `
    );
    const mainClasses = { box: true, isVisible: this.isVisible };
    const outsideClasses = { clickOutside: true, isVisible: this.isVisible };
    return html`
      <div class=${classMap(mainClasses)}>
        <div class="left">
          <p><strong>Windows</strong> 98</p>
        </div>
        <div class="right">${rows}</div>
      </div>
      <div class=${classMap(outsideClasses)}></div>
    `;
  }
}
