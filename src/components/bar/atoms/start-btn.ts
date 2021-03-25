/* eslint-disable lit-a11y/click-events-have-key-events */
import { LitElement, html, css, customElement } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { resetCss } from '../../../css/reset'

@customElement('start-btn')
export class StartBtn extends LitElement {
  static styles = [resetCss, css`
    .btn {
      font-size: 12px;
      font-weight: 700;
      display: flex;
      align-items: center;
      height: 100%;
      border: 2px outset #fff;
      padding: 0 2px;
      box-shadow: 1px 1px #000;
      cursor: pointer;
    }
    .btn.isOpen {
      border: 2px outset #000;
      box-shadow: none;
      border-right: 2px solid white;
      border-bottom: 2px solid white;
    }
    img {
      width: 20px;
      height: 20px;
      margin-right: 3px;
    }
  `];

  private isOpen = false

  private _handleClick(){
    this.isOpen = !this.isOpen
    this.requestUpdate()
    this.dispatchEvent(new CustomEvent('open'));
  }

  render() {
    const classes = {btn: true, isOpen: this.isOpen}
    return html`
      <div class=${classMap(classes)} @click="${this._handleClick}">
        <img alt="windows-98-icon" src="src/assets/ico/windows.png" />
        <p>Start</p>
      </div>
    `;
  }
}
