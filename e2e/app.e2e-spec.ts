import { Overw4tchPage } from './app.po';

describe('overw4tch App', function() {
  let page: Overw4tchPage;

  beforeEach(() => {
    page = new Overw4tchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
