import Car from "./Car";

function Garage() {
    const carInfo = {name:'mustang', year:1999, price: 30000.99}
    const myStyle={
      color:"white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Sans-Serif"
    }
    return (
      <>
        <h1 style={myStyle}>Who lives in my garage ?</h1>
        <Car color='Yellow' carInfo={carInfo}/>
      </>
    );
  }

  export default Garage