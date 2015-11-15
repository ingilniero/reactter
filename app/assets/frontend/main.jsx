import Index from './components/Index';

let documentReady = () => {
  let reactNode = document.getElementById('home');
  if (reactNode) {
    ReactDOM.render(<Index />, reactNode);
  }
}

$(documentReady);
