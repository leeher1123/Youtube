import React from 'react';
import styled from 'styled-components';

const ScrollMenu = ({ categories }) => {
  const a = 1;
  return (
    <Container>
      <Track>
        {
          // categories.map((item) => <MenuItem>{item.snippet.title}</MenuItem>)
        }
      </Track>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 56px;
  left: 72px;
  right: 0;
  z-index: 1000;
  background: rgba(33, 33, 33, 0.98);
  border-top: 1px solid rgba(118, 118, 118, 0.3);
  border-bottom: 1px solid rgba(118, 118, 118, 0.3);
`;

const Track = styled.div`
  max-width: 1352px;
  height: 58px;
`;

const MenuItem = styled.div`
  
`;

export default ScrollMenu;
