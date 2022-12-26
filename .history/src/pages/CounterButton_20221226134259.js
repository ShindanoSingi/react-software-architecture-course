import { React, useState } from 'react'

const CounterButton = () => {
  return (
    <>
      <p>You have clicked the button {} times.</p>
      <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
                Simple Button
              </button>
    </>
  )
}

export default CounterButton
