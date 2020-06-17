import { useState } from 'react';
const useToggler = () => {
  const [isToggledOn, setIsToggledOn] = useState(false);

  const toggle = () => {
    setIsToggledOn((prevVal) => !prevVal);
  };
  return { isToggledOn, toggle };
};

export default useToggler;

// create the state
//  Create a function for easily flipping the isToggledOn value
// Return something useful for whatever component will be using this hook
