/* eslint-disable lit-a11y/click-events-have-key-events */
import { LitElement, html, css, customElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { resetCss } from '../../../css/reset'
import { css98 } from '../../../css/98'

@customElement('general-item')
export class GeneralIteam extends LitElement {
  @property({ type: String, reflect: true }) imgSrc = '';

  @property({ type: String, reflect: true }) text = '';
  
  static styles = [resetCss, css98, css`
    :host {
      display: block;
    }
    .main{
      display: flex;
      flex-direction: column;
      max-width: 60px;
      align-items: center;
      text-align: center;
      cursor: pointer;
    }
    .main.selected .text{
      background: blue;
    }
    .img{
      width: 32px;
    }
    .text{
      font-family: "Pixelated MS Sans Serif",Arial;
      -webkit-font-smoothing: none;
      font-size: 14px;
      color: white;
      margin-top: 5px;
    }
  `];

  private selected = false

  private _handleClick(){
    this.selected = !this.selected
    this.requestUpdate()
  }

  private _handleDoubleClick(){
    console.log('dc')
    this.dispatchEvent(new CustomEvent('doubleClick'));
  }

  render() {
    const mainClass = {main: true, selected: this.selected}
    return html`
      <div class=${classMap(mainClass)} @click="${this._handleClick}" @dblclick="${this._handleDoubleClick}">
        <img src="${this.imgSrc}" class="img" alt="icon img" />
        <div class="text">${this.text}</div>
      </div>
    `;
  }
}
