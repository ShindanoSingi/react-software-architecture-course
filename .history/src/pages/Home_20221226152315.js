import React from 'react'
import CounterButton from './CounterButton'
import CounterProvider from './CounterProvider'

function Home() {
  return (
    <div className='container'>
    <CounterProvider>
	<h1>Home</h1>
	<CounterProvider />
    </CounterProvider>
    </div>
  )
}

export default Home
