import { CrazyTown2Page } from './app.po';

describe('crazy-town-2 App', function() {
  let page: CrazyTown2Page;

  beforeEach(() => {
    page = new CrazyTown2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
