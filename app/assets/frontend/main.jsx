import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';
import TweetActions from './actions/TweetActions';
import TweetStore from './stores/TweetStore';

TweetActions.getAllTweets();

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() };
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }

  _onChange() {
    this.setState(getAppState());
  }

  componentDidMount() {
    TweetStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div className='container'>
        <TweetBox />
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
