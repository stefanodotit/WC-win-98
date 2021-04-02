import { LitElement, html, css, customElement, property } from 'lit-element';
import { publish } from '../../../utils/eventbus'
import { resetCss } from '../../../css/reset'
import { css98 } from '../../../css/98'
import '../modal'

@customElement('modal-ie')
export class ModalWin extends LitElement {
  @property({ type: String, reflect: true }) title = '';
  
  static styles = [resetCss, css98, css`
    :host{
      display: block;
    }
    .title {
      display: flex;
      align-items: center;
    }
    .title img {
      margin-right: 5px;
    }

    .bodySlot{
      position: relative;
    }
    .boxBtns {
      background: silver;
      box-shadow: inset 1px 1px #888, inset 2px 2px #fff, inset -1px -1px #888;
      border-right: 1px solid #fff;
      border-bottom: 1px solid #fff;
      padding: 2px;
   }
    .menuTool {
      display: flex;
      height: 25px;
      justify-content: space-between;
      box-shadow: inset 0px -1px #fff;
      padding-bottom: 1px;
   }
    .menuToolLeft {
      display: flex;
      align-items: center;
      flex-grow: 1;
      box-shadow: inset -1px -1px #888;
      border-right: 1px solid #fff;
   }
    .menuToolLeft > div {
      margin-right: 10px;
   }
    .menuToolRight {
      height: 100%;
      width: 40px;
      background: black;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
   }
    .menuToolRight img {
      width: 20px;
      height: 20px;
   }
  
  `];

  private idModal = 'ie'

  private _handleClose(){
    this.dispatchEvent(new CustomEvent('close'));
    publish('closeWindow', this.idModal)
  }

  private _handleMinimize(){
    this.dispatchEvent(new CustomEvent('minimize'));
    publish('minimizeWindow', this.idModal)
  }

  render() {
    const titleHtml = html`
      <img src="assets/ico/ie/ico.png" alt="ie icon" />
      <span>${this.title} - Microsoft Internet Explorer</span>
    `
    publish('openWindow', {
      id: 'ie',
      html: titleHtml
    })
    return html`
      <modal-win @close="${this._handleClose}" @minimize="${this._handleMinimize}" noBodyMargin="true" id="${this.idModal}">
        <div class="title" slot="title">
          ${titleHtml}
        </div>
        <div class="bodySlot" slot="body">
          <div class="boxBtns">
            <div class="menuTool">
              <div class="menuToolLeft">
                <div class="bar"></div>
                <div><u>F</u>ile</div>
                <div><u>E</u>dit</div>
                <div><u>V</u>iew</div>
                <div><u>G</u>o</div>
                <div>
                  F<u>a</u>vorites
                </div>
                <div><u>H</u>elp</div>
              </div>
              <div class="menuToolRight">
                <img alt="logo window" src="assets/ico/ie/winLogo.png" />
              </div>
            </div>
          </div>
          <slot name="body"></slot>
        </div>
      </modal-win>
    `;
  }
}
