import { html, css, LitElement, customElement } from 'lit-element';
import { resetCss } from '../../css/reset'

@customElement('cv-st')
export class CvSt extends LitElement {
  static styles = [resetCss, css`
    :host {
      display: block;
    }

    .container{
      width: 100%;
      padding: 20px;
      max-width: 768px;
      margin: 0 auto;
      cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABFklEQVRYR9WXURLDIAhE6/0PbSdOtUpcd1Gnpv1KGpTHBpCE1/cXq+vrMph7dGvXZTtpfW10DCA5jrH1H0Jhs5E0hnZdCR+vb5S8Nn8mQCeS9BdSalYJqMBjAGzq59xAESN7VFVUgV8AZB/dZBR7QTFDCqGquvUBVVoEtgIwpQRzmANSFHgWQKExHdIrPeuMvQNDarXe6nC/AutgV3JW+6bgqQLeV8FekRtgV+ToDKEKnACYKsfZjjkam7a0ZpYTytwmgainpC3HvwBocgKOxqRjehoR9DFKNFYtOwCGYCszobeCbl26N6yyQ6g8X/Wex/rBPsNEV6qAMaJPMynIHQCoSqS9JSMmwef51LflTgCRszU7DvAGiV6mHWfsaVUAAAAASUVORK5CYII=),auto;
    }

    h1, h3, .sectionTextBox, button, li, a span, .awardBox, .languageText, .footer, .nes-text, .nes-input {
      font-family: "Press Start 2P";
    } 

    h3{
      margin-top:10px;
    }

    menu {
      padding: 0;
      margin: 0;
    }

    .header {
      display: flex;
      justify-content: space-between;
    }

    .imgBox {
      height: 250px;
      width: 250px;
    }
    .nes-badge {
      width: 13em;
    }
    .myImg {
      image-rendering: pixelated;
      width: 100%;
      border-radius: 50%;
    }
    .actionBox, .socialBox{
      margin-top:10px;
    }

    .section{
      margin-top: 30px;
    }
    .sectionTextBox {
      display: flex;
      align-items:center;
      margin-bottom: 5px;
    }
    .sectionTextBox a{
      margin-right: 10px;
    }
    .lists{
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    .lists li {
      margin-top: 5px;
    }
    .nes-list{
      margin-bottom: 0;
      width: 250px;
    }

    .badgeContainer{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .nes-badge {
      width: 35em;
      max-width: 100%;
    }

    .awardBox + .awardBox { 
      margin-top: 10px;
    }

    .languageBox{
      display: flex;
      align-items: center;
    }
    .languageBox + .languageBox {
      margin-top: 5px;
    }
    .languageText {
      margin-right: 10px;
    }

    .footer{
      display: flex;
      margin-top: 30px;
      justify-content: center;
      align-items:center;
    }
    .footer span {
      margin-right: 5px;
    }

    #dialog-plain-email {
      text-align: center;
    }
    #dialog-plain-email input{
      color: white;
    }
  `];

  private skills = [
    'Javascript',
    'NodeJS',
    'Vuejs',
    'React',
    'Angular',
    'Sass',
    'CSS',
    'HTML',
    'C++',
    'MySql',
    'NoSQL',
    'AWS',
    'GoogleCloud',
    'Unit Test',
    'Test E2E',
    'Regression Test',
    'GIT',
    'NPM',
    'Gulp/Grunt',
    'Blockchain',
    'Security',
    'Microservices',
    'User Tracking',
    'jQuery',
    'Design System',
    'Serverless',
    'Ionic',
    'WebComponent',
    'Cryptography',
    'UX/UI',
    'Agile Methodology',
    'TypeScript',
    'PWA',
    'Webpack',
    'SSR',
    'Docker',
    'Socket',
    'PHP',
    'Python',
    'AMP',
    'Jira',
    'Caching'
  ]

  get dialogElement(){
    const root = this.shadowRoot as ShadowRoot
    return root.getElementById('dialog-plain-email') as any
  }

  private _handleOpenDialog(){
    this.dialogElement.showModal()
  }

  render() {
    const half = Math.ceil(this.skills.length / 2);    

    return html`
    <link href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" rel="stylesheet" />
    <div class="container">
      <section class="header">
        <div>
          <a href="#" class="nes-badge is-icon">
            <span class="is-dark">Hi</span>
            <span class="is-success">I'm</span>
          </a>
          <div class="txtBox">
            <h1>
              Stefano Tagliabue
            </h1>
            <h3>
              Technical Team Leader
            </h3>
          </div>
          <div class="socialBox">
            <a
              href="https://www.linkedin.com/in/stefano-tagliabue/"
              target="_blank"
              title="LinkedIn"
              ><i class="nes-icon linkedin is-medium"></i
            ></a>
            <a
              href="https://github.com/stefanodotit"
              target="_blank"
              title="GitHub"
              ><i class="nes-icon github is-medium"></i
            ></a>
          </div>
          <div class="actionBox">
            <button
              type="button"
              class="nes-btn is-error"
              @click="${this._handleOpenDialog}"
            >
              Contact Me
            </button>
          </div>
        </div>

        <div class="imgBox">
          <img alt="me myself I" class="myImg" src="assets/images/me_myself_i.jpg" />
        </div>
      </section>

      <section class="skills section">
        <div class="sectionTextBox">
          <a href="#skills"><i class="nes-icon heart"></i></a>
          SKILLS
        </div>
        <div class="nes-container">
          <div class="lists">
            <ul class="nes-list is-disc">
              ${this.skills.slice(0, half).map(skill => html`<li>${skill}</li>`)}
            </ul>
            <ul class="nes-list is-disc">
              ${this.skills.slice(half, this.skills.length).map(skill => html`<li>${skill}</li>`)}
            </ul>
          </div>
        </div>
      </section>

      <section class="skills section">
        <div class="sectionTextBox">
          <a href="#career"><i class="nes-icon star"></i></a>
          CAREER
        </div>
        <div class="nes-container badgeContainer">
          <a href="#" class="nes-badge is-splited">
            <span class="is-success">Telepass</span>
            <span class="is-dark">2020-Now</span>
          </a>
          <a href="#" class="nes-badge is-splited">
            <span class="is-success">Musement/TUI</span>
            <span class="is-dark">2017-2020</span>
          </a>
          <a href="#" class="nes-badge is-splited">
            <span class="is-success">Tekka Digital</span>
            <span class="is-dark">2014-2017</span>
          </a>
          <a href="#" class="nes-badge is-splited">
            <span class="is-success">Pagine Gialle</span>
            <span class="is-dark">2012-2013</span>
          </a>
          <a href="#" class="nes-badge is-splited">
            <span class="is-success">Gamma Group</span>
            <span class="is-dark">2010-2012</span>
          </a>
        </div>
      </section>

      <section class="skills section">
        <div class="sectionTextBox">
          <a href="#awards"><i class="nes-icon trophy"></i></a>
          AWARDS
        </div>
        <div class="nes-container">
          <div class="awardBox">
            <i class="nes-icon coin is-small"></i>
            <span>Winner AMP Hackathon on Google</span>
          </div>
          <div class="awardBox">
            <i class="nes-icon coin is-small"></i>
            <span>Winner Performance Hackathon on JSDay</span>
          </div>
        </div>
      </section>

      <section class="skills section">
        <div class="sectionTextBox">
          <a href="#languages"><i class="nes-icon like"></i></a>
          LANGUAGES
        </div>
        <div class="nes-container">
          <div class="languageBox">
            <div class="languageText">Italian</div>
            <div>
              <i class="nes-icon star"> </i>
              <i class="nes-icon star"> </i>
              <i class="nes-icon star"> </i>
              <i class="nes-icon star"> </i>
              <i class="nes-icon star"> </i>
            </div>
          </div>
          <div class="languageBox">
            <div class="languageText">English</div>
            <div>
              <i class="nes-icon star"> </i>
              <i class="nes-icon star"> </i>
              <i class="nes-icon star"> </i>
              <i class="nes-icon star"> </i>
              <i class="nes-icon star is-empty"> </i>
            </div>
          </div>
        </div>
      </section>

      <div class="footer">
        <span class="nes-text is-primary">Made with</span>
        <i class="nes-icon heart"> </i>
      </div>
    </div>


    <dialog id="dialog-plain-email" class="nes-dialog is-dark is-rounded">
      <form method="dialog">
        <p class="nes-text text-center is-warning">Contact Me</p>
        <div>
          <div class="nes-field">
            <input
              id="email_field"
              type="text"
              class="nes-input"
              value="info@tagliabue.dev"
              disabled="disabled"
            />
          </div>
        </div>
        <menu class="dialog-menu dialogAction">
          <button class="nes-btn is-primary">Close</button>
        </menu>
      </form>
    </dialog>
    `;
  }
}
