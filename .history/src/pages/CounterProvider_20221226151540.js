import { useState } from 'react';
import { CounterContext } from './CounterContext';

export const CounterProvider = ( {children}) =>{
    const [numberOfClicks, setNumberofClicks] = useState(0)

    const increment = amount => {
        setNumberofClicks(numberOfClicks + 1)
    }

    return (
        <CounterContext.Provider value={{ numberOfClicks, increment }}
    )
}