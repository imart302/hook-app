import React, { memo } from 'react'

export const Small = memo( ({value} : {value: number}) => {

  
  console.log('Rendered again');
  return (
    <>
      <small>{value}</small>
    </>
  )
})
