import React, { useState, useEffect } from "react";

function App() {
  const [count,setCount]=useState(0)
  const [text,setText]=useState("")
  function handleCount(){
    setCount(count + 1)

  }
  function handleChange(e){
     setText(e.target.value)
  }
  useEffect(() => {
    document.title=text
  console.log("useEffect called");
  },[text]);
  useEffect(()=>{
    setTimeout(()=> setCount(0),5000)
  },[])

  console.log("Component rendering");

  return ( <div>
    <button onClick={handleCount}>I've been clicked{count}times</button>
  <input type="text" placeholder="Type away..." value={text} onChange={handleChange}/>
</div>)

}

export default App;
