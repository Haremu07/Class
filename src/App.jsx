import { useState } from "react"


const App = () => {
  const [input, setInput] = useState()
  const [percent, setPercent] = useState("")

 
  const handleInput = () => {
     setPercent(input / 10)
     setInput("")
  }

  return (
    <div className='Body'>
      <div className="Card">
        <h1>Calculate</h1>
          <input 
          className="input"
          type="text"
          value={input}
           onChange={(e) => setInput(e.target.value)} />
           <h2>10% of {input} is: </h2>
          <div className="percent">{percent}</div>
          <button onClick={handleInput}>cal</button>
      </div>
    </div>
  )
}

export default App