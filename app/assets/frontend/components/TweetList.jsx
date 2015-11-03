export default class TweetList extends React.Component {
  render() {
    return(
      <div>
        <ul className='collection'>
          <li className='collection-item avatar'>
            <i className='material-icons circle'>person_pin</i>
            <span className='title'>Title</span>
            <p>
              First Line
            </p>
            <a href='#!' className='secondary-content'><i className='material-icons'>grade</i></a>
          </li>

          <li className='collection-item avatar'>
            <i className='material-icons circle'>person_pin</i>
            <span className='title'>Title</span>
            <p>
              First Line
            </p>
            <a href='#!' className='secondary-content'><i className='material-icons'>grade</i></a>
          </li>
        </ul>
      </div>
    );
  }
}
