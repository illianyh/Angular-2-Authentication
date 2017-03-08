import { AuthNg2Page } from './app.po';

describe('auth-ng2 App', () => {
  let page: AuthNg2Page;

  beforeEach(() => {
    page = new AuthNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
