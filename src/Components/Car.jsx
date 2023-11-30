import './my-sass.scss'

function Car(props) {
    return <h1 className='carH1'>I am a {props.color} {props.carInfo.name}, I'm costing ${props.carInfo.price}</h1>;
  }

  export default Car