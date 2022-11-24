import { useState } from "react"


export const useCounter = (initial: number) => {

  const [count, setCount] = useState<number>(initial);


  const increment = () => {
    setCount(count+1);
  }

  const decrement = () => {
    setCount(count-1);
  }

  const reset = () => {
    setCount(initial);
  }

  return {count, increment, decrement, reset};

} 