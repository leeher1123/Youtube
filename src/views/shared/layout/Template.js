import React from 'react';
import styled from 'styled-components';

import SidebarGuide from '../components/Sidebar/SidebarGuide';

const Template = ({ children }) => {
  const a = 1;
  return (
    <Container>
      <SidebarGuide />
      <Main>
        {children}
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding-top: 56px;
`;

const Main = styled.div`

`;

export default Template;
