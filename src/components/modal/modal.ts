import { LitElement, html, css, customElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { resetCss } from '../../css/reset'
import { css98 } from '../../css/98'

@customElement('modal-win')
export class ModalWin extends LitElement {
  @property({ type: String, reflect: true }) noBodyMargin = 'false';
  
  static styles = [resetCss, css98, css`
    :host{
      display: block;
    }
    .wrapper {
      height: calc(100% - 27px);
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .window {
      width: 500px;
      height: 500px;
      transition: all 1s;
    }
    .window-body.noMargin {
      margin: 0;
      margin-top: 1px;
    }
    .window.maximized {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      margin-left: 0;
      margin-top: 0;
    } 
    .window-body {
      height: calc(100% - 22px);
      overflow: hidden;
      background: white;
    }
    .bodyContent{
      width: 100%;
      overflow-y: scroll;
      height: 100%;
    }
  `];

  private isMaximized = false

  private _handleMaximize(){
    this.isMaximized = !this.isMaximized
    this.requestUpdate()
  }

  private _handleClose(){
    this.dispatchEvent(new CustomEvent('close'));
  }

  render() {
    const bodyClasses = {'window-body': true, noMargin: this.noBodyMargin === 'true'}
    const windowClasses = {'window': true, maximized: this.isMaximized}
    return html`
      <div class="wrapper">
        <div class=${classMap(windowClasses)}>
          <div class="title-bar">
            <div class="title-bar-text">
              <slot name="title"></slot>
            </div>
            <div class="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button
                @click="${this._handleMaximize}"
                aria-label="${this.isMaximized ? 'Restore' : 'Maximize'}"
              ></button>
              <button @click="${this._handleClose}" aria-label="Close"></button>
            </div>
          </div>
          <div class=${classMap(bodyClasses)}>
            <div class="bodyContent">
              <slot name="body"></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
