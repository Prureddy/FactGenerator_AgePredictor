import React, { useEffect } from 'react';
import "./App.css"
import Axios from "axios";
import {useState} from "react";


function App() {
  const [name, setName] = useState("");
  const [predictAge, setPredictAge] = useState(null);
  const [catFact,setCatFact ] = useState("");

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictAge(res.data);
    });
  };

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });

  }
  useEffect(() =>{
    fetchCatFact();
  }, []);

 
  
  return (
    <div className='App'>
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p className='gradient-text'>{catFact}</p>

      <input className='my-form' placeholder='Ex Pruthvi...' onChange={(event => {setName(event.target.value)})}/>
      <button onClick={fetchData}>Predict Age</button>

      <h1>Name: {predictAge?.name}</h1>
      <h1>predicted Age: {predictAge?.age}</h1>
      <h1>Count: {predictAge?.count}</h1>
    </div>
  );
}

 export default App;

