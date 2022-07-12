import React, { useState } from 'react';

type onChangeFunc = (
  e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
) => void;

const useInput = (): [string, React.Dispatch<React.SetStateAction<string>>, onChangeFunc] => {
  const [value, setValue] = useState('');

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  return [value, setValue, onChange];
};

export default useInput;
