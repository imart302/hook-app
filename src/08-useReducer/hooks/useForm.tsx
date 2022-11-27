import React, { ChangeEvent, useState } from 'react';

interface IFormField {
  name: string;
  value: string;
}

export interface IUseFormSte {
  fields: IFormField[];
}

export interface IUseFormProps {
  fields: IFormField[];
}

export const useForm = (props: IUseFormProps) => {
  const [state, setState] = useState<IUseFormSte>({ fields: props.fields });

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setState({
      fields: state.fields.map((field) => {
        if (field.name === name) {
          return {
            ...field,
            value,
          };
        } else {
          return field;
        }
      }),
    });

    console.log(state);
  };

  return {
    formFields: state.fields,
    onInputChange,
  };
};
