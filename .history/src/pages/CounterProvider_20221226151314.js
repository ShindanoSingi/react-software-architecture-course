import { useState } from 'react';
import { CounterContext } from './CounterContext';

export const CounterProvider = ( {children}) =>{
    const [numberOfClicks, setNumberofClicks] = useState(0)
}