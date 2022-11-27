import React, { FormEvent, useState } from 'react';
import { useForm } from './hooks/useForm';
import { ITodoItemProps } from './TodoItem';

export interface INewTodo {
  description: string;
}

export interface ITodoAddSte {
  input: string;
}

export interface ITodoAddProps {
  onNewTodo?: (todo: INewTodo) => void;
}

export const TodoAdd = (props: ITodoAddProps) => {
  const { formFields, onInputChange } = useForm({
    fields: [{ name: 'description', value: '' }],
  });

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    props.onNewTodo?.({
      description:
        formFields.find((field) => field.name === 'description')?.value ?? '',
    });
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="todo"
          className="form-control"
          value={
            formFields.find((field) => (field.name = 'description'))?.value
          }
          onChange={onInputChange}
          name="description"
        ></input>
        <button
          className="btn btn-primary mt-2"
          type="submit"
          onClick={onFormSubmit}
        >
          Agregar
        </button>
      </form>
    </>
  );
};
