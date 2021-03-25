import { LitElement, html, css, customElement } from 'lit-element';
import { resetCss } from '../../css/reset'
import './atoms/start-btn'
import './atoms/clock'
import './atoms/menu'

@customElement('bar-win')
export class BarWin extends LitElement {
  static styles = [resetCss, css`
    :host {
      display: block;
    }
    .container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      height: 27px;
      border-top: 2px outset #fff;
      left: 0;
      bottom: 0;
      padding: 2px;
      position: absolute;
      background-color: silver;
    }
    .rightSide {
      height: 100%;
      border: 2px inset #fff;
      padding: 0 5px;
    }
  `];

  private isOpen = false

  private _handleOpen(){
    this.isOpen = !this.isOpen
    this.requestUpdate()
  }

  render() {
    return html`
      <div class="container">
        <div class="leftSide">
          <start-btn @open="${this._handleOpen}"></start-btn>
        </div>
        <div class="rightSide">
          <clock-win></clock-win>
        </div>
        <menu-bar .isVisible="${this.isOpen}"></menu-bar>
      </div>
    `;
  }
}
