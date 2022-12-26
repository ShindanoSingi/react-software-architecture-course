import { React, useContext } from 'react'
import { CounterContext } from './CounterContext'

const CounterButton = () => {
    const [numberOfClicks, increment] = useContext(CounterContext)
//   const [incrementBy, setIncrementBy] = useState(1)
  return (
    <div className="counter-button-contianer">
      <p>You have clicked the button {numberOfClicks} times.</p>
      {/* <label>Increment By:</label>
      <input
      type="number"
        value={incrementBy}
        onChange={(e) => setIncrementBy(Number(e.target.value))}

      /> */}
      <button
        onClick={() => {
           setNumberofClicks( numberOfClicks + incrementBy)
        }}
      >
        CLICK
      </button>
    </div>
  )
}

export default CounterButton
