import { useState } from "react"


export const useCounter = (initial: number) => {

  const [count, setCount] = useState<number>(initial);


  const increment = () => {
    setCount((current) => current + 1);
  }

  const decrement = () => {
    setCount((current) => current - 1);
  }

  const reset = () => {
    setCount(initial);
  }

  return {count, increment, decrement, reset};

} 