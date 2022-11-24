import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import Message from './Message';

export interface ISimpleFormSte {
  email: string;
  username: string;
}

export default function SimpleForm() {
  const [state, setState] = useState<ISimpleFormSte>({
    email: '',
    username: '',
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setState({
      ...state,
      [name]: value
    });

  };

  useEffect(() => {

  }, []);

  return (
    <div>
      <h1>Simple Form</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={state.username}
        onChange={onChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="email"
        name="email"
        value={state.email}
        onChange={onChange}
      />
      {state.username == 'ben' ? <Message message='Usuario existe'></Message> : <></> }
    </div>
  );
}
