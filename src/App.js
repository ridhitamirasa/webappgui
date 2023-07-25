import logo from './logo.svg';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [getMessage, setGetMessage] = useState(null);



  useEffect(()=>{
    axios.get('https://git.heroku.com/flask-one.git').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> ABX3 Simulations</h1>
        <p>
          Go ahead and choose an input of ABX3 and we will predict the property.
       
        </p>
        <a
          className="App-link"
          href="https://colab.research.google.com/github/mannodiarun/mrs_spring_tutorial/blob/perovs_dft_ml/DFT-ML-GA.ipynb"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
    
      <div className="Dropdowns">
        <select>
          <option value="K">A</option>
          <option value="Rb">Rb </option>
          <option value="Cs">Cs</option>
          <option value="MA">MA</option>
          <option value="FA">FA</option>
        </select>

        <select>
        <option value="B">B</option>
          <option value="Pb">Pb </option>
          <option value="Sn">Sn</option>
          <option value="Ge">Ge</option>
          <option value="Ca">Ca</option>
          <option value="Sr">Sr</option>
          <option value="Ba">Ba</option>
        </select>

        <select>
        <option value="X">X</option>
        <option value="I">I</option>
          <option value="Br">Br</option>
          <option value="Cl">Cl</option>
        </select>
   
      </div>
      </header>
    </div>
   
  );
}

export default App;
