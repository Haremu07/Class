import { useState } from "react"


const App = () => {
  const [input, setInput] = useState()
  const [percent, setPercent] = useState()
  const [inputPercent, setInputPercent] = useState()


 
  const handleInput = () => {
     setPercent((input * inputPercent)/ 100)
     setInput("")
     setInputPercent("")
  }

  return (
    <div className='Body'>
      <div className="Card">
        <h1>Percentage calculator</h1>
           <h2>{inputPercent}% of {input}  </h2>
          <div className="PercentBox">
            <p>Percent:</p>
           <input className="input" type="number" value={inputPercent}  onChange={(e) => setInputPercent(e.target.value)}/>
          </div>

          <div className="PercentBox">
            <p>Number:</p>
          <input 
          className="input"
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)} />
          </div>
          <div className="percent">
            <p>Result:</p>
            {percent}</div>
          <button onClick={handleInput}>cal</button>
      </div>
    </div>
  )
}

export default App