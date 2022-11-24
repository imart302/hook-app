import React, { ChangeEvent, useState } from 'react'

export interface IUseFormSte {
  username: string,
  email: string,
  password: string,
}

export default function useForm(initialForm: IUseFormSte = {username: '', email:'', password: ''}) {
  
  const [state, setState] = useState<IUseFormSte>(initialForm);


  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setState({
      ...state,
      [name]: value
    });

  };

  const resetForm = () => {
    setState(initialForm);
  }
  
  return (
    {
      form: state,
      inputChange,
      resetForm,
    }
  )
}
