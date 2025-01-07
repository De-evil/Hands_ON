import React, { useState } from "react";
import './index.css'

function App() {
  const [advice, setAdvice] = useState("Please Click Button to Get Advice");
  const [count, setCount] = useState(0);

  async function GetAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  return (
    <div>
      <h3>{advice}</h3> 
      <button onClick={GetAdvice}>Get Advice</button> 
      <p>You have read <b>{count}</b> pieces of advice</p>
    </div>
  );
}

export default App;




