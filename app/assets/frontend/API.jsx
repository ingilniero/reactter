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
  },

  getAllUsers() {
    $.ajax('/followers')
      .success(users => ServerActions.receivedUsers(users))
      .error(error => console.log(error));
  },

  followUser(userId) {
    $.post('/followers', { user_id: userId })
      .success(follower => ServerActions.receivedOneFollower(follower))
      .error(error => console.log(error));
  }
}
