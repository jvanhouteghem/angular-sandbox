import { Angular2SandboxStep1Page } from './app.po';

describe('angular2-sandbox-step1 App', function() {
  let page: Angular2SandboxStep1Page;

  beforeEach(() => {
    page = new Angular2SandboxStep1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
