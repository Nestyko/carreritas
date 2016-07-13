import { CarreritasPage } from './app.po';

describe('carreritas App', function() {
  let page: CarreritasPage;

  beforeEach(() => {
    page = new CarreritasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
