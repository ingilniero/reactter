import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

let mockTweets = [
  {
    name: 'Gilberto Villa',
    body: 'My #firstTweet'
  },
  {
    name: 'Eduardo Figarola',
    body: 'My #firstTweet'
  },
  {
    name: 'Jesus Figueroa',
    body: 'My #firstTweet'
  }
];

class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <TweetBox />
        <TweetList tweets={mockTweets}/>
      </div>
    );
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Home />,
    document.getElementById('home')
  );
}

$(documentReady);
