/* eslint-disable lit/no-template-bind */
/* eslint-disable lit-a11y/click-events-have-key-events */
/* eslint-disable class-methods-use-this */
import { LitElement, html, css, customElement, TemplateResult } from 'lit-element';
import { resetCss } from '../../css/reset'
import { subscribe, publish } from '../../utils/eventbus'
import './atoms/start-btn'
import './atoms/clock'
import './atoms/menu'

type EventBusModalObj = {
  id: string,
  html: TemplateResult,
  blur: boolean
}

@customElement('bar-win')
export class BarWin extends LitElement {
  static styles = [resetCss, css`
    :host {
      display: block;
    }
    .container {
      width: 100%;
      display: flex;
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
    .centralSide{
      height: 100%;
      width: 100%;
      padding: 1px 5px;
      flex: 1;
    }

    .windowTask {
      height: 100%;
      display: flex;
      align-items: center;
      max-width: 200px;
      width: 50%;
      text-align: left;
      cursor: default;
      -webkit-user-select: none;
      line-height: 14px;
      padding: 2px;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: center;
      outline: none;
      font-weight: bold;
      background-color: rgb(192, 192, 192);
      color: black;
      position: relative;
      border-image: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22256px%22%20height%3D%22256px%22%20viewBox%3D%220%200%20256%20256%22%3E%0A%09%09%09%0A%09%09%3Cpath%20d%3D%22M0%200h224v32h-192v192h-32v-224z%22%20fill%3D%22%20rgb(0%2C%200%2C%200)%22%2F%3E%0A%09%09%3Cpath%20d%3D%22M224%200h32v256h-256v-32h224v-224z%22%20fill%3D%22%20rgb(255%2C%20255%2C%20255)%22%2F%3E%0A%09%09%3Cpath%20d%3D%22M32%2032h160v32h-128v128h-32v-160z%22%20fill%3D%22%20rgb(128%2C%20128%2C%20128)%22%2F%3E%0A%09%09%3Cpath%20d%3D%22M192%2032h32v192h-192v-32h160v-160z%22%20fill%3D%22%20rgb(223%2C%20223%2C%20223)%22%2F%3E%0A%09%09%3Cpath%20d%3D%22M64%2064h128v128h-128v-128z%22%20fill%3D%22%20rgb(192%2C%20192%2C%20192)%22%2F%3E%0A%09%0A%09%09%3C%2Fsvg%3E") 64 / 2px;
      border-color: rgb(128, 128, 128);
      border-style: solid;
      border-width: 2px 2px;
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAG0lEQVQYV2P8/////4MHDzIwHjhw4L+9vT0DAHAFCj6esq3FAAAAAElFTkSuQmCC") repeat;
      image-rendering: pixelated;
      text-align: left;
      cursor: default;
      -webkit-user-select: none;
      font-weight: bold;
      color: black;
      image-rendering: pixelated;
      line-height: 12px;
      font-size: 12px;
    }
    .windowTask.blur {
      background-color: rgb(192, 192, 192);
      border-color: rgb(223, 223, 223) rgb(128, 128, 128) rgb(128, 128, 128) rgb(223, 223, 223);
      border-style: solid;
      border-width: 2px 2px;
      border-image: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22256px%22%20height%3D%22256px%22%20viewBox%3D%220%200%20256%20256%22%3E%0A%09%09%09%0A%09%09%3Cpath%20d%3D%22M0%200h224v32h-192v192h-32v-224z%22%20fill%3D%22%20rgb(255%2C%20255%2C%20255)%22%2F%3E%0A%09%09%3Cpath%20d%3D%22M224%200h32v256h-256v-32h224v-224z%22%20fill%3D%22%20rgb(0%2C%200%2C%200)%22%2F%3E%0A%09%09%3Cpath%20d%3D%22M32%2032h160v32h-128v128h-32v-160z%22%20fill%3D%22%20rgb(223%2C%20223%2C%20223)%22%2F%3E%0A%09%09%3Cpath%20d%3D%22M192%2032h32v192h-192v-32h160v-160z%22%20fill%3D%22%20rgb(128%2C%20128%2C%20128)%22%2F%3E%0A%09%09%3Cpath%20d%3D%22M64%2064h128v128h-128v-128z%22%20fill%3D%22%20rgb(192%2C%20192%2C%20192)%22%2F%3E%0A%09%0A%09%09%3C%2Fsvg%3E") 64 / 2px;
      cursor: pointer;
    }
    .windowTask img{
      width: 15px;
      height: 15px;
      margin-right: 2px
    }
    .windowTask span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `];

  private isOpen = false

  private firstRender = false

  private arrayWindows: EventBusModalObj[] = []

  private _handleOpen(){
    this.isOpen = !this.isOpen
    this.requestUpdate()
  }

  private _toggleBlur = (id: string) => {
    for(const win of this.arrayWindows){
      if(win.id === id){
        win.blur = !win.blur
        break
      }
    }
    this.requestUpdate()
  }

  private _handleClickWinTask(id: string){
    this._toggleBlur(id)
    for(const win of this.arrayWindows){
      if(win.id === id){
        publish(!win.blur ? 'resurrectModal' : 'minimizeWindowFromTask', id) 
        break
      }
    }
  }

  render() {
    if(!this.firstRender){
      subscribe('openWindow', (obj: EventBusModalObj) => {
        const newObj = {...obj, blur:false}
        this.arrayWindows.push(newObj)
        this.requestUpdate()
      })
      subscribe('closeWindow', (id: string) => {
        this.arrayWindows = this.arrayWindows.filter(win => win.id !== id)
        this.requestUpdate()
      })
      subscribe('minimizeWindow', (id: string) => {
        this._toggleBlur(id)
      })
      this.firstRender = true
    }
    return html`
      <div class="container">
        <div class="leftSide">
          <start-btn @open="${this._handleOpen}"></start-btn>
        </div>
        <div class="centralSide">
          ${this.arrayWindows.map(win => html `<div @click="${this._handleClickWinTask.bind(this, win.id)}" class="windowTask ${win.blur ? 'blur': ''}"> ${win.html} </div>`)}
        </div>
        <div class="rightSide">
          <clock-win></clock-win>
        </div>
        <menu-bar .isVisible="${this.isOpen}"></menu-bar>
      </div>
    `;
  }
}
