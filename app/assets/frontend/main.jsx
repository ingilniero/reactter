import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <TweetBox />
        <TweetList />
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
