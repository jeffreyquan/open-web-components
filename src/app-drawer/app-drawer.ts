import { LitElement, css, html, property } from "lit-element"

export class AppDrawer extends LitElement {
  @property({ type: Boolean, reflect: true })
  opened: boolean = false;

  static get styles() {
    return css`
      .drawer {
        position: fixed;
        display: flex;
        flex-direction: column;
        top: -16px;
        bottom: -16px;
        right: 0;
        width: 320px;
        margin: 16px 0;
        opacity: 0;
        transform: translateX(100%);
        z-index: 100;
        transition: all 300ms ease-in-out;
        transition-property: transform, opacity;
        background-color: white;
        /* box-shadow: 0 10px 20px rgba(0,0,0,0.2); */
        font-size: 16px;
      }

      .drawer--open {
        opacity: 1;
        transform: translateX(0);
      }

      .drawer__overlay:after {
        content: '';
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 99;
        background-color: rgba(0,0,0,0.3);
      }

      .drawer__inner {
        overflow-y: auto;
        flex: 1;
      }
    `
  }

  attributeChangedCallback(name: string, oldval: any, newval: any) {
     super.attributeChangedCallback(name, oldval, newval);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('keydown', this.handleKeyDown)
  }

  disconnectedCallback() {
    window.removeEventListener('keydown', this.handleKeyDown)
    super.disconnectedCallback()
  }

  handleClick = () => {
    this.opened = false;
  }

  private handleKeyDown = (e: any) => {
    if (e.keyCode === 27) {
      this.opened = false;
    }
  }
  
  render() {
    return html`
      <div class="drawer ${this.opened ? "drawer--open" : ""}">
        <div class="drawer__inner">
          <slot></slot>
        </div>
      </div>
      ${this.opened ? html`<div class='drawer__overlay' @click="${this.handleClick}" @keydown="${this.handleKeyDown}"></div>` : null}
    `
  }
}

customElements.define("app-drawer", AppDrawer)
