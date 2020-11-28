import { useState } from "react";

export interface IInputProps {
  onChange: (e: any) => void;
  value: string;
}

function useInput<T>(initialValue: T) {
  const [values, setValues] = useState<T>(initialValue);

  function handleChange(e: any) {
    setValues((curr: T) => ({
      ...curr,
      [e.target.name]: e.target.value,
    }));
  }

  function inputProps(inputName: string): IInputProps {
    return {
      // @ts-ignore
      value: values[inputProps],
      onChange: (e) => handleChange(e),
    };
  }

  return {
    values,
    inputProps,
  };
}

export { useInput };
