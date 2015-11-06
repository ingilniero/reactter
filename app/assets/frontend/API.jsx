import ServerActions from './actions/ServerActions'
export default {
  getAllTweets() {
    $.ajax('/tweets')
      .success(tweets => ServerActions.receivedTweets(tweets))
      .error(error => console.log(error))
  },

  createTweet(body) {
    $.post('/tweets', {
      body: body
    })
    .success( tweet => ServerActions.receivedOneTweet(tweet))
    .error(error => console.log(error));
  }
}
