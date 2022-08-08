import { useState } from 'react';
import './App.css';


function App() {

  const [headingText, setHeadingText] = useState("Hello");
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    // console.log("Clicked");
    setHeadingText("Submitted");
  }

  const handleMouseIn = (event) => {
    setHover(true);
    // event.target.style.background = '#000';
  };

  const handleMouseOut = (event) => {
    setHover(false);
    // event.target.style.background = '#fff';
  };



  return (
    <div className="container">
        <h1>{headingText}</h1>
        <input type="text" placeholder="What's your name?" />
        <button
            style={{ backgroundColor: hover ? "#7c02ff97" : "white" }}  
            onMouseOver={handleMouseIn} 
            onMouseOut= {handleMouseOut}
            onClick={handleClick}>
            Submit
        </button>

  
   </div>
  );
}

export default App;
