
import React, { useState } from 'react'

export interface ICounterAppSte {
  counter1: number;
  counter2: number;
  counter3: number;
}

export default function CounterApp() {

  const [state, setState] = useState<ICounterAppSte>({counter1: 0, counter2: 0, counter3: 0});

  return (
    
    <div className='counerApp'>
      <h1>Counter1: {state.counter1}</h1>
      <h1>Counter3: {state.counter2}</h1>
      <h1>Counter3: {state.counter3}</h1>
      <button onClick={() => setState({...state, counter1: state.counter1+1})}>+1</button>
    </div>
  )
}
