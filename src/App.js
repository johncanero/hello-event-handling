import './App.css';




const handleClick = () => {
  console.log("Clicked");
}

function App() {
  return (
    <div className="container">
        <h1>{headingText}</h1>
        <input type="text" placeholder="What's your name?" />
        <button onClick={handleClick}>Submit</button>
   </div>
  );
}

export default App;
