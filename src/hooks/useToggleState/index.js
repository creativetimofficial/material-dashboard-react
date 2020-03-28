import { useState } from 'react';

export default (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => {
    setValue(!value);
  };

  return [value, toggleValue, setValue];
};
