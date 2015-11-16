import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';

export default {
  receivedTweets(tweets)  {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      tweets: tweets
    });
  },

  receivedOneTweet(tweet) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_TWEET,
      tweet: tweet
    });
  },
  receivedUsers(users)  {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_USERS,
      users: users
    });
  },
}
