import { useState } from 'react';
const useToggler = (defaultOnValue) => {
  const [isToggledOn, setIsToggledOn] = useState(defaultOnValue);

  const toggle = () => {
    setIsToggledOn((prevVal) => !prevVal);
  };
  return [isToggledOn, toggle];
};

export default useToggler;

// create the state
//  Create a function for easily flipping the isToggledOn value
// Return something useful for whatever component will be using this hook
