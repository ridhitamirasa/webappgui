import axios from 'axios';
import React, { useEffect, useState } from 'react';
import logo from './logo.svg'; // Assuming your logo image file is in the same directory as this component
import './App.css';

function App() {
  const [percentage, setPercentage] = useState({
    A: '0',
    K: '0',
    Rb: '0',
    Cs: '0',
    MA: '0',
    FA: '0',
    B: '0',
    Pb: '0',
    Sn: '0',
    Ge: '0',
    Ca: '0',
    Sr: '0',
    Ba: '0',
    X: '0',
    I: '0',
    Br: '0',
    Cl: '0',
  });

  const [getMessage, setGetMessage] = useState(null);
  const [startTemp, setStartTemp] = useState('');
  const [endTemp, setEndTemp] = useState('');
  const [percentageA, setPercentageA] = useState('');
  const [percentageB, setPercentageB] = useState('');
  const [percentageX, setPercentageX] = useState('');

  const handleStartTempChange = (event) => {
    setStartTemp(event.target.value);
  };

  const handleEndTempChange = (event) => {
    setEndTemp(event.target.value);
  };

  const handlePercentageAChange = (event) => {
    setPercentageA(event.target.value);
  };

  const handlePercentageBChange = (event) => {
    setPercentageB(event.target.value);
  };

  const handlePercentageXChange = (event) => {
    setPercentageX(event.target.value);
  };
  const handlePercentageChange = (element, value) => {
    setPercentage((prevPercentage) => ({
      ...prevPercentage,
      [element]: value,
    }));
  };
  const [bandgap, setBandgap] = useState(0);

  // Function to calculate bandgap based on percentages
  const calculateBandgap = () => {
    const percentA = parseFloat(percentageA);
    const percentB = parseFloat(percentageB);
    const percentX = parseFloat(percentageX);

    // Calculate bandgap as 0.2 times the sum of percentages
    const calculatedBandgap = 0.2 * (percentA + percentB + percentX);
    setBandgap(calculatedBandgap);
  };

  useEffect(() => {
    axios
      .get('https://git.heroku.com/flask-one.git')
      .then((response) => {
        console.log('SUCCESS', response);
        setGetMessage(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ABX3 Simulations</h1>
        <p>Choose an input of ABX3 and we will predict the property.</p>
        <a
          className="App-link"
          href="https://colab.research.google.com/github/mannodiarun/mrs_spring_tutorial/blob/perovs_dft_ml/DFT-ML-GA.ipynb"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
        </header>
        <div className="InputSection">
        <div className="Dropdowns">
          {/* Option A */}
          <p>Option A: </p>
          {/* Option A,k */}
          <div>
            <input
              type="checkbox"
              id="optionK"
              name="optionK"
              value="K"
            />
            <label htmlFor="optionA">K</label>
          </div>
          {/* Option A,Rb */}
          <div>
            <input
              type="checkbox"
              id="optionK"
              name="optionRB"
              value="Rb"
            />
            <label htmlFor="optionA">Rb</label>
          </div>
          {/* Option A,Cs */}
          <div>
            <input
              type="checkbox"
              id="optionK"
              name="optionCs"
              value="Cs"
            />
            <label htmlFor="optionA">Cs</label>
          </div>
          {/* Option A,MA */}
          <div>
            <input
              type="checkbox"
              id="optionMA"
              name="optionMA"
              value="MA"
            />
            <label htmlFor="optionA">MA</label>
          </div>
          {/* Option A,FA */}
          <div>
            <input
              type="checkbox"
              id="optionFA"
              name="optionFA"
              value="FA"
            />
            <label htmlFor="optionA">FA</label>
          </div>

          {/* Option B */}
          <p>Option B: </p>
          
          {/* Element Pb */}
          <div>
            <input
              type="checkbox"
              id="elementPb"
              name="elementPb"
              value="Pb"
            />
            <label htmlFor="elementPb">Pb</label>
          </div>

          {/* Element Sn */}
          <div>
            <input
              type="checkbox"
              id="elementSn"
              name="elementSn"
              value="Sn"
            />
            <label htmlFor="elementSn">Sn</label>
          </div>

          {/* Element Ge */}
          <div>
            <input
              type="checkbox"
              id="elementGe"
              name="elementGe"
              value="Ge"
            />
            <label htmlFor="elementGe">Ge</label>
          </div>

          {/* Element Ca */}
          <div>
            <input
              type="checkbox"
              id="elementCa"
              name="elementCa"
              value="Ca"
            />
            <label htmlFor="elementCa">Ca</label>
          </div>

          {/* Element Sr */}
          <div>
            <input
              type="checkbox"
              id="elementSr"
              name="elementSr"
              value="Sr"
            />
            <label htmlFor="elementSr">Sr</label>
          </div>

          {/* Element Ba */}
          <div>
            <input
              type="checkbox"
              id="elementBa"
              name="elementBa"
              value="Ba"
            />
            <label htmlFor="elementBa">Ba</label>
          </div>

          
        </div>

        {/* Second set of checkboxes (B, Pb, Sn, etc.) */}
        <div className="Dropdowns">
          {/* Element B */}
          <div>
            <input
              type="checkbox"
              id="elementB"
              name="elementB"
              value="B"
            />
            <label htmlFor="elementB">B</label>
          </div>

        </div>

        {/* Third set of checkboxes (X, I, Br, Cl) */}
        <div className="Dropdowns">
          {/* Element X */}
          <p>Option X: </p>

          {/* Element I */}
          <div>
            <input
              type="checkbox"
              id="elementI"
              name="elementI"
              value="I"
            />
            <label htmlFor="elementI">I</label>
          </div>

          {/* Element Br */}
          <div>
            <input
              type="checkbox"
              id="elementBr"
              name="elementBr"
              value="Br"
            />
            <label htmlFor="elementBr">Br</label>
          </div>

          {/* Element Cl */}
          <div>
            <input
              type="checkbox"
              id="elementCl"
              name="elementCl"
              value="Cl"
            />
            <label htmlFor="elementCl">Cl</label>
          </div>
        </div>

        
        <div>
          <label>
            Percentage of Option A:
            <input
              type="number"
              value={percentageA}
              onChange={handlePercentageAChange}
            />
            %
          </label>
        </div>

        <div>
          <label>
            Percentage of Option B:
            <input
              type="number"
              value={percentageB}
              onChange={handlePercentageBChange}
            />
            %
          </label>
        </div>

        <div>
          <label>
            Percentage of Option X:
            <input
              type="number"
              value={percentageX}
              onChange={handlePercentageXChange}
            />
            %
          </label>
          <div>
          {Object.keys(percentage).map((element) => (
            <div key={element}>
              <label>
                Percentage of {element}:
                <input
                  type="number"
                  value={percentage[element]}
                  onChange={(event) => handlePercentageChange(element, event.target.value)}
                />
                %
              </label>
            </div>
          ))}
        </div>

          

          <div>
          
        </div>
        

        <div>

        </div>
        </div>

        
     
    </div>
    <div className="OutputProperties">
        <h2>Output Properties</h2>
       
        <div className="PropertyChoice">
        <label>
            Bandgap 
            <input
              type="number"
              value={bandgap}
              readOnly // Make the input read-only to display the calculated value
            />
          </label>
        </div>
        <div>
          <button onClick={calculateBandgap}>Calculate Bandgap</button>
        </div>
      </div>
    </div>
  );
}

export default App;
