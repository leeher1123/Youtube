import React from 'react';
import styled from 'styled-components';

const Tooltip = ({ message, direction }) => {
  const a = 1;
  return (
    <Container>
      <Text className={direction}>
        {message}
      </Text>
    </Container>
  );
};

const Container = styled.div`

`;

const Text = styled.div`
  position: absolute;
  padding: 8px;
  margin: 8px;
  background-color: #616161;
  color: #fff;
  font-size: 10px;
  border-radius: 2px;
  &.bottom {
    left: 944.822px;
    top: 57px;
  }
`;

export default Tooltip;
