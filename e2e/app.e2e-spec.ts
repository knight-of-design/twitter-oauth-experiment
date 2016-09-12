import { TwitterOauthExperimentPage } from './app.po';

describe('twitter-oauth-experiment App', function() {
  let page: TwitterOauthExperimentPage;

  beforeEach(() => {
    page = new TwitterOauthExperimentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
