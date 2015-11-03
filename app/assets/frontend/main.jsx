import Greet from './greet';

class Home extends React.Component {
  render() {
    return (
      <Greet />
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
