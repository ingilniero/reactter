import TweetBox from './TweetBox';
import TweetList from './TweetList';
import TweetActions from '../actions/TweetActions';
import TweetStore from '../stores/TweetStore';

TweetActions.getAllTweets();

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() };
}

export default class Index extends React.Component {
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
