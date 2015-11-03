import Tweet from './Tweet';

export default class TweetList extends React.Component {
  render() {
    let tweets = this.props.tweets.map(tweet => <Tweet {...tweet} key={tweet.name} />);
    return(
      <div>
        <ul className='collection'>
          {tweets}
        </ul>
      </div>
    );
  }
}
