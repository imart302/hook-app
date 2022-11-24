import React, { memo, useMemo, useState } from 'react'
import { Small } from './Small';

const heavyStuff = ( iteration = 100) => {
  for(let i = 0; i< iteration; i++){
    console.log('Ahi vamos');
  }
  return `${iteration} iteraciones hecho`;
}

export const MemoHook = () => {

  const [count, setCount] = useState<number>(400);
  const [show, setShow] = useState<boolean>(true);

  const memoValue = useMemo (() => {
    return heavyStuff(count);
  }, [count]);
  
  return (
    <>
      <h1>Counter: <small>{ count }</small> </h1>
      <hr></hr>

      {/* <h4>{heavyStuff(count)}</h4> */}
      <h4>{ memoValue }</h4>

      <button
        className='btn btn-primary'
        onClick={() => setCount(count+1)}
      >
        +1
      </button>

      <button className='btn btn-outline-primary'
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  )
}
