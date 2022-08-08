import { useState } from 'react';
import './App.css';


function App() {

  const [headingText, setHeadingText] = useState("Hello");

  const handleClick = () => {
    // console.log("Clicked");
    setHeadingText("Submitted");
  }


  return (
    <div className="container">
        <h1>{headingText}</h1>
        <input type="text" placeholder="What's your name?" />
        <button onClick={handleClick}>Submit</button>
   </div>
  );
}

export default App;
