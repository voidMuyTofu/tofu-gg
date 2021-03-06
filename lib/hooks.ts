import { useState } from "react";

export const useInput = (_initialValue: string) => {
  const [value, setValue] = useState(_initialValue);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};
