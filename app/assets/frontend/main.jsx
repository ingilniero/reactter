import TweetBox from './components/TweetBox';

class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <TweetBox />
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
