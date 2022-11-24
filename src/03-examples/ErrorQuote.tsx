import React from 'react'

export interface IErrorQuote {
  message: string
}

const ErrorQuote = (props: IErrorQuote) => {
  return (
    <>
      <h1>{props.message}</h1>
    </>
  )
}


export default ErrorQuote;