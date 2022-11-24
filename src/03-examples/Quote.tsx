import React from 'react'

export interface IQuoteProps {
  quote: string,
  author: string,
}

export const Quote = (props: IQuoteProps) => {
  return (
    <>
      <blockquote className='blockquote text-end'>
        <p className='mb-1'>{props.quote}</p>
        <footer className='blockquote-footer mt-2'> {props.author} </footer>
      </blockquote>
    </>
  )
}
