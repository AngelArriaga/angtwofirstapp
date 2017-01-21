import { AngtwofirstappPage } from './app.po';

describe('angtwofirstapp App', function() {
  let page: AngtwofirstappPage;

  beforeEach(() => {
    page = new AngtwofirstappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
