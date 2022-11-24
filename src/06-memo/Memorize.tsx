import React, { memo, useState } from 'react'
import { Small } from './Small';

export const Memorize = () => {

  const [count, setCount] = useState<number>(0);
  const [show, setShow] = useState<boolean>(true);
  
  return (
    <>
      <h1>Counter: <Small value={count}></Small> </h1>
      <hr></hr>

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
