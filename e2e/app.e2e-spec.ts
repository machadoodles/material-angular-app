import { CarrotAppPage } from './app.po';

describe('carrot-app App', function() {
  let page: CarrotAppPage;

  beforeEach(() => {
    page = new CarrotAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
