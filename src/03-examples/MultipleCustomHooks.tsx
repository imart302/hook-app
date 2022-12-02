import React, { MouseEventHandler, useEffect } from 'react'
import ErrorQuote from './ErrorQuote';
import { useCounter } from './hooks/useCounter';
import { useFetchQuote } from './hooks/useFetchQuote'
import LoadingQuotes from './LoadingQuotes';
import { Quote } from './Quote';

export const MultipleCustomHooks = () => {

  const {count, increment, decrement, reset } = useCounter();
  const {data, isLoading, error} = useFetchQuote({index: count});

  const onNextQuote = () => {
    increment();
  }

  const onPrevQuote = () => {
    decrement();
  }

  return (
    <>
      <h1>Breaking Bad Quotes</h1>

      { (isLoading) ? 
         (<LoadingQuotes></LoadingQuotes>)
        :
        (
          (error != null) ? <ErrorQuote message='No more quotes'></ErrorQuote> : <Quote quote={data[0].quote} author={data[0].author}></Quote>
        )
      }

      <button className='btn btn-primary pt-2 mt-2' onClick={onPrevQuote}>Previous Quote</button>
      <button className='btn btn-primary pt-2 mt-2 ml-2' onClick={onNextQuote}>Next Quote</button>
    </>
  )
}
