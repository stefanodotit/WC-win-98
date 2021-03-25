import { html, fixture, expect } from '@open-wc/testing';

import { Win98 } from '../src/Win98.js';
import '../src/win-98.js';

describe('TagliabueWebsite', () => {
  let element: Win98
  beforeEach(async () => {
    element = await fixture(html`<win-98></win-98>`);
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
