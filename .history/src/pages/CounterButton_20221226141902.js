import { React, useState } from 'react'

const CounterButton = () => {
    const [numberOfClick, setNumberofClicks] = useState(0);
    const[incrementBy, setIncrementBy] = useState(1);
  return (
    <div className='counter-button-contianer'>
      <p>You have clicked the button {numberOfClick} times.</p>
      <label>Increm</label>
      <button onClick={()=>{
        setNumberofClicks(numberOfClick + incrementBy);
      }}>CLICK</button>
    </div>
  )
}

export default CounterButton
