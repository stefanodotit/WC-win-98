import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resetCss } from '@css/reset';

@customElement('clock-win')
export class ClockWin extends LitElement {
  static styles = [
    resetCss,
    css`
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        text-transform: uppercase;
        font-size: 12px;
      }
    `,
  ];

  private time: string = '';

  private _getTime() {
    this.time = new Intl.DateTimeFormat('default', {
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
    }).format(new Date());
    this.requestUpdate();
  }

  render() {
    this._getTime();
    setTimeout(() => this._getTime(), 1000);

    return html` <div>${this.time}</div> `;
  }
}
