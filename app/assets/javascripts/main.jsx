class Home extends React.Component {
  render() {
    return (
      <h1>Home</h1>
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
