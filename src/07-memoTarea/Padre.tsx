import React, { useCallback, useState } from 'react'
import { Hijo } from './Hijo';

export const Padre = () => {
  
  const [ value, setValue ] = useState<number>(0);
  
  const increments = [5, 10, 15, 20];

  // const increment = (num: number) => {
  //   setValue(value + num);
  // } 

  const increment = useCallback((inc: number) => {
    setValue((val) => val + inc )
  }, []);

  return (
    <>
      <h1>Valor: {value}</h1>
      {
        increments.map(value => {
          return (<Hijo key={value} num={value} increment={increment}></Hijo>)
        })
      }
    </>
  )
}
