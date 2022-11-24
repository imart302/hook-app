import React, { memo } from 'react'



export const ShowIncrement = memo( ({increment}: {increment: (i: number) => void}) => {

  console.log('rendered');
  return (
    <button
      className='btn btn-primary'
      onClick={ () => increment(5) }
    >
      Increment
    </button>
  )
} )
