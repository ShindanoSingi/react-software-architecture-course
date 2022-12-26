import { React, useState } from 'react'

const CounterButton = () => {
    const [numberOfClick, setNumberofClicks] = useState(0);
  return (
    <div className='counter-button-contianer'>
      <p>You have clicked the button {numberOfClick} times.</p>
      <button className='P-2' onClick={()=>{
        setNumberofClicks(numberOfClick + 1);
      }}>CLICK</button>
    </div>
  )
}

export default CounterButton
