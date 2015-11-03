export default class Tweet extends React.Component {
  render () {
    return (
      <li className='collection-item avatar'>
        <i className='material-icons circle'>person_pin</i>
        <span className='title'>Title</span>
        <p>
          First Line
        </p>
        <a href='#!' className='secondary-content'><i className='material-icons'>grade</i></a>
      </li>
    );
  }
}
