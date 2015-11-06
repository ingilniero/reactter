import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

let mockTweets = [];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tweetsList: mockTweets }
  }

  addTweet(tweetToAdd) {
    $.post('/tweets', {
      body: tweetToAdd
    })
    .success( savedTweet => {
      let newTweetsList = this.state.tweetsList;

      newTweetsList.unshift(savedTweet);
      this.setState({ tweetsList: newTweetsList });
    })
    .error(error => console.log(error));
  }

  componentDidMount() {
    $.ajax('/tweets')
      .success(data => this.setState({ tweetsList: data }))
      .error(error => console.log(error))
  }

  render() {
    return (
      <div className='container'>
        <TweetBox sendTweet={this.addTweet.bind(this)} />
        <TweetList tweets={this.state.tweetsList}/>
      </div>
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('home');
  if (reactNode) {
    ReactDOM.render(<Home />, reactNode);
  }
}

$(documentReady);
