import React, { useState } from 'react';

type onChangeFunc = (
  e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
) => void;

const useInput = (): [string, onChangeFunc] => {
  const [value, setValue] = useState('');

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  return [value, onChange];
};

export default useInput;
