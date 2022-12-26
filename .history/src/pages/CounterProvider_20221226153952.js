import { useState } from 'react';
import { CounterContext } from './CounterContext';

function CounterProvider( {children} ) {

    const [numberOfClicks, setNumberofClicks] = useState(0);
    const [incrementBy, setIncrementBy] = useState(1);

    const increment = amount => {
        setNumberofClicks(numberOfClicks + 1)
    }

  return (
    <CounterContext.Provider value={{ numberOfClicks, increment }}>
            {children}
        </CounterContext.Provider>
  )
}

export default CounterProvider