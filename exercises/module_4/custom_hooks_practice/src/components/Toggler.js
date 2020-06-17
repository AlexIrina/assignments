import React from 'react';
import useToggler from '../hooks/useToggler';
const Toggler = (props) => {
  const { isToggledOn, toggle } = useToggler();
  // state = {
  //   on: this.props.defaultOnValue,
  // };

  // static defaultProps = {
  //   defaultOnValue: false,
  // };

  // toggle = () => {
  //   this.setState((prevState) => ({ on: !prevState.on }));
  // };

  return (
    <div>
      {/* {this.props.render({
        on: this.state.on,
        toggle: this.toggle,
      })} */}
      {props.isToggledOn}
      {props.toggle}
    </div>
  );
};

export default Toggler;
