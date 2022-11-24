import React from 'react'
import { useCounter } from './hooks/useCounter'

export default function CounterAppCustomHook() {
  const {count, increment, decrement, reset} = useCounter(0);

  return (
    <div className='counterAppCustom'>

      <h2> Count: {count} </h2>
      <button onClick={decrement} className='btn btn-primary'>-1</button>
      <button onClick={reset} className='btn btn-primary'>reset</button>
      <button onClick={increment} className='btn btn-primary'>+1</button>

    </div>
  )
}
