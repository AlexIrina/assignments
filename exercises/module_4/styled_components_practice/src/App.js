import React from 'react';
import styled from 'styled-components';

export default function () {
  const isToggled = true;
  return (
    <div>
      <Container isToggled={isToggled}>Hello World</Container>
    </div>
  );
}

const Container = styled.h1`
  background: ${(props) => (props.isToggled ? 'black' : 'white')};
  color: ${(props) => (props.isToggled ? 'white' : '#222')};
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 10px solid orange;
`;
