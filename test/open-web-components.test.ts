import { html, fixture, expect } from '@open-wc/testing';

import { OpenWebComponents } from '../src/OpenWebComponents.js';
import '../src/open-web-components.js';

describe('OpenWebComponents', () => {
  let element: OpenWebComponents;
  beforeEach(async () => {
    element = await fixture(html`<open-web-components></open-web-components>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
