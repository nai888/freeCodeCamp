import { VotingAppPage } from './app.po';

describe('voting-app App', () => {
  let page: VotingAppPage;

  beforeEach(() => {
    page = new VotingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
