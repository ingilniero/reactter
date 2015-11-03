import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

let mockTweets = [
  {
    id: 1,
    name: 'Gilberto Villa',
    body: 'My #firstTweet'
  },
  {
    id: 2,
    name: 'Eduardo Figarola',
    body: 'My #firstTweet'
  },
  {
    id: 3,
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
