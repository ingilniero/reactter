import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

let mockTweets = [];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tweetsList: mockTweets }
  }

  addTweet(tweetToAdd) {
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({
      id: Date.now(),
      name: 'Guest',
      body: tweetToAdd
    });

    this.setState({ tweetsList: newTweetsList });
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
