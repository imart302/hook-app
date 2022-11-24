import React, { memo } from 'react'

export const Hijo = memo( ({num, increment}: {num: number, increment: (value: number) => void}) => {

  console.log(`Me volví a generar ${num}`);

  return (
    <>
      <button
        className='btn btn-primary mr-3'
        onClick={() => increment(num)}
      >
        {num}
      </button>
    </>
  )
} )
