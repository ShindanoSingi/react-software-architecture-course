import { React, useState } from 'react'

const CounterButton = () => {
  const [numberOfClicks, setNumberofClicks] = useState(0)
  const [incrementBy, setIncrementBy] = useState(1)
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
        onClick={() => {
          setNumberofClicks( numberOfClick + incrementBy)
          setIncrementBy("")
        }}
      >
        CLICK
      </button>
    </div>
  )
}

export default CounterButton
