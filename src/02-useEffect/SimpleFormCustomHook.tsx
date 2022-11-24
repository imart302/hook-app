import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import useForm from './hooks/useForm';

export default function SimpleFormCustomHook() {

  const { form, inputChange, resetForm} = useForm({
    username: 'i',
    email:'a',
    password: '',
  });

  return (
    <div>
      <h1>Simple Form</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={form.username}
        onChange={inputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="email"
        name="email"
        value={form.email}
        onChange={inputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={form.password}
        onChange={inputChange}
      />

      <button className='btn btn-primary mt-2' onClick={resetForm}>Borrar</button>

    </div>
  );
}
