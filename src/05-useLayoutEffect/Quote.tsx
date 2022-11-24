import React, { useLayoutEffect, useRef, useState } from 'react';

export interface IQuoteProps {
  quote: string;
  author: string;
}

export const Quote = (props: IQuoteProps) => {

  const pRef = useRef<HTMLParagraphElement>(null);
  const [boxSixe, setBoxSize] = useState({width: 0, height: 0});

  useLayoutEffect(() => {
    //console.log(pRef.current?.getBoundingClientRect());
    const bBox = pRef.current?.getBoundingClientRect();
    setBoxSize({
      width: bBox?.width ?? 0,
      height: bBox?.height ?? 0, 
    })
  }, [props.quote])

  return (
    <>
      <blockquote className="blockquote text-end" style={{display:'flex'}}>
        <p ref={pRef} className="mb-1">{props.quote}</p>
        <footer className="blockquote-footer mt-2"> {props.author} </footer>
      </blockquote>
      <code>{JSON.stringify(boxSixe)}</code>
    </>
  );
};
