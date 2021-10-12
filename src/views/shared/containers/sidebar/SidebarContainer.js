import React from 'react';
import styled from 'styled-components';

import DrawerSidebar from '../../components/Sidebar/DrawerSidebar';
import MenuContainer from './MenuContainer';

const SidebarContainer = () => {
  const a = 1;
  return (
    <Container>
      <DrawerSidebar />
      <MenuContainer />
    </Container>
  );
};

const Container = styled.div`

`;

export default SidebarContainer;
