import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';

export default {
  receivedTweets(tweets)  {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      tweets: tweets
    });
  }
}
