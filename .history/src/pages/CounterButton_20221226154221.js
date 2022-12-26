import { React, useContex, useState } from 'react'
import { CounterContext } from './CounterContext'

function CounterButton () {
    const {numberOfClicks, increment, incrementBy, setIncrementBy} = useContext(CounterContext)
//   const [incrementBy, setIncrementBy] = useState(1)
  return (
    <div className="counter-button-contianer">
      <p>You have clicked the button {numberOfClicks} times.</p>
       <label>Increment By:</label>
      <input
      type="number"
        value={incrementBy}
        onChange={(e) => setIncrementBy(Number(e.target.value))}

      />
      <button
        onClick={() =>
           increment()
        }
      >
        CLICK
      </button>
    </div>
  )
}

export default CounterButton
