import React, { useState } from 'react';
const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  function toggle() {
    setToggle(!isToggled);
  }

  return (
    <div>
      {isToggled && <h2>Hello</h2>}
      <button onClick={toggle}>Toggle Me</button>
    </div>
  );
};

export default Toggle;
