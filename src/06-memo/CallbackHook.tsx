import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  
  const [count, setCount] = useState<number>(0);
  
  // const increment = () => {
  //   setCount(count + 1);
  // }

  const increment = useCallback( (i: number) => {
    setCount((value) => value + i);
  }, [])

  return (
    <>
    <h1>Use Callback Hook: { count }</h1>
    <hr></hr>

    <ShowIncrement increment={increment}></ShowIncrement>
    </>
  )
}
