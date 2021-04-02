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
    general-item {
      margin-top: 20px;
    }
    general-item:first-child {
      margin-top:0;
    }
  `];

  private modals: Array<ModalsArray> = []

  // eslint-disable-next-line class-methods-use-this
  private _handleItemDoubleClick(what: string){
    switch (what) {
      case 'ie': {
        this.modals.push({
          id: 'ie',
          template: html`
            <modal-ie title="Stefano Tagliabue CV" @close="${this._handleModalClose.bind(this,'ie')}" noBodyMargin="true">
              <cv-st slot="body"></cv-st>
            </modal-ie>
          `
        })
        break;
      }
    
      default:
        break;
    }
    this.requestUpdate()
  }

  // eslint-disable-next-line class-methods-use-this
  private _handleGithubDoubleClick(){
    window.open('https://github.com/stefanodotit/WC-win-98', '_blank')
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
          imgSrc="assets/ico/desktop/internet-explorer.png"></general-item>

        <general-item 
          @doubleClick="${this._handleGithubDoubleClick}" 
          text="Source Code" 
          imgSrc="assets/ico/desktop/github.png"></general-item>

        ${this.modals.map(modal => modal.template)}
      </div>
    `;
  }
}
