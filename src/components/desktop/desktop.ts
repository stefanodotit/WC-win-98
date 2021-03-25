/* eslint-disable lit/no-template-bind */
import { LitElement, html, css, customElement, TemplateResult } from 'lit-element';
import { resetCss } from '../../css/reset'
import { css98 } from '../../css/98'
import '../modal/ie/ie'
import '../cv/cv'
import './atoms/item'

type ModalsArray = {
  template: TemplateResult,
  id: string
}

@customElement('desktop-win')
export class DesktopWin extends LitElement {
  
  static styles = [resetCss, css98, css`
    :host {
      min-height: calc(100vh - 27px);
      display: block;
      position: relative;
      padding: 5px 10px;
    }
  `];

  private modals: Array<ModalsArray> = []

  // eslint-disable-next-line class-methods-use-this
  private _handleItemDoubleClick(what: string){
    switch (what) {
      case 'ie':
        this.modals.push({
          id: 'ie',
          template: html`
            <modal-ie title="Stefano Tagliabue CV " @close="${this._handleModalClose.bind(this,'ie')}" noBodyMargin="true">
              <cv-st slot="body"></cv-st>
            </modal-ie>
          `
        })
        break;
    
      default:
        break;
    }
    this.requestUpdate()
  }

  private _handleModalClose(id: string){
    this.modals=this.modals.filter(modal => modal.id !== id)
    this.requestUpdate()
  }

  render() {
    return html`
      <div>
        <general-item 
          @doubleClick="${this._handleItemDoubleClick.bind(this,'ie')}" 
          text="Internet Explorer" 
          imgSrc="src/assets/ico/desktop/internet-explorer.png"></general-item>
        ${this.modals.map(modal => modal.template)}
      </div>
    `;
  }
}
