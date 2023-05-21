import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  let [t,setT]=useState(false);

  const ti=(event)=>{
   setHeight(event.target.value);
  }
  const wi=(event)=>{
    setWidth(event.target.value);
  }
  const co=(event)=>{
    setBackgroundColor(event.target.value);
  }
const hi=()=>{
    
    console.log(height+""+width+""+backgroundColor);

   setT(true);
}
  return (
    <div id="main">
      <h1>Box Creator</h1>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          id="width"
          type="number"
          onChange={wi}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          type="number"
          onChange={ti}
        />
        
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          id="backgroundColor"
          type="text"
          onChange={co}

        />
      </div>
      <button className='create-btn' onClick={hi}>Create Box </button>
      {t?<div id="box-conatiner" style={{height:`${height}px`,width:`${width}px`,backgroundColor:`${backgroundColor}`}}></div>
:null}
    </div>
  );
};


export default App;
