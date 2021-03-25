import { LitElement, html, css } from 'lit-element';
import './components/bar/bar'
import './components/desktop/desktop'
import {resetCss} from './css/reset'

export class Win98 extends LitElement {
  static styles = [resetCss, css`
    :host {
      min-height: 100vh;
      background: teal;
      display: block;
    }
  `];

  render() {
    return html`
      <main>
        <bar-win></bar-win>
        <desktop-win></desktop-win>
      </main>
    `;
  }
}
