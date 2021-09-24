import React from 'react';
import styled from 'styled-components';

import HomeContainer from '../../views/home/containers/HomeContainer';
import SideMenu from '../../views/shared/components/Menu/SideMenu';
import SideScreen from '../../views/shared/components/Menu/SideScreen';

const Home = () => (
  <Container>
    <SideMenu />
    <SideScreen />
    <HomeContainer />
  </Container>
);

const Container = styled.div`
  
`;

export default Home;
