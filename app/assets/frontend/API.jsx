import ServerActions from './actions/ServerActions'
export default {
  getAllTweets() {
    $.ajax('/tweets')
      .success(tweets => ServerActions.receivedTweets(tweets))
      .error(error => console.log(error))
  }
}
