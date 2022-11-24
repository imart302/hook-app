import React, { ChangeEvent, useEffect } from 'react';

export interface IMessageProps {
  message: string
}

export default function Message(props: IMessageProps) {
  useEffect(() => {
    console.log('Component mounted');


    const onMouseMove = (event: MouseEvent) => {
      console.log(event.x, event.y);
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      console.log('Component unmounted');
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <div>{props.message}</div>;
}
