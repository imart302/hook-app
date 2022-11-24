import React, { useState } from 'react';

export interface IUseCounterSte {
  count: number;
}

export interface IUseCounterProps {
  initial: number;
  min: number;
  max: number;
}

export default function useCounter(
  props: IUseCounterProps = {
    initial: 1,
    min: 1,
    max: 100,
  }
) {
  const [state, setState] = useState<IUseCounterSte>({ count: props.initial });


  const increment = () => {
    console.log('increment');
    setState({
      count: (state.count >= props.max) ? props.min : state.count + 1,
    });
  }

  const decrement = () => {
    setState({
      count: (state.count <= props.min) ? props.max : state.count - 1,
    });
  }

  const reset = () => {
    setState({
      count: props.initial,
    });
  }

  return {
    count: state.count,
    increment,
    decrement,
    reset,
  };
}
