import { useState } from 'react';
import './App.css';


const App = () => {

  // const [headingText, setHeadingText] = useState("Hello");
  const [hover, setHover] = useState(false);

  // const handleClick = () => {
  //   console.log("Clicked");
  //   setHeadingText("Submitted");
  // }

  const handleMouseIn = (event) => {
    setHover(true);
    // event.target.style.background = '#000';
  };

  const handleMouseOut = (event) => {
    setHover(false);
    // event.target.style.background = '#fff';
  };


  // React Forms
  const [name, setName] = useState("");
  
  const handleChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  }

  const [headingText, setHeading] = useState("");

  const handleClick = (event) => {
    setHeading(name)

    // Remove Default Behavior
    event.preventDefault();
  }




  return (
    <div className="container">
        <h1>Hello {headingText}</h1>

        <form onSubmit={handleClick}>
            <input 
              onChange={handleChange} 
              type="text" 
              placeholder="What's your name?"
              value={name} 

            />

            <button
                type='submit'
                style={{ backgroundColor: hover ? "#7c02ff97" : "white" }}  
                onMouseOver={handleMouseIn} 
                onMouseOut= {handleMouseOut}
                onClick={handleClick}>
                Submit
            </button>
        </form>
   </div>
  );
}

export default App;
