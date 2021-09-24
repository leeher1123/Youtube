import React from 'react';
import styled from 'styled-components';

import HomeContainer from '../../views/home/containers/HomeContainer';
import SideMenu from '../../views/home/SideMenu';

const Home = () => (
  <Container>
    <SideMenu />
    <HomeContainer />
  </Container>
);

const Container = styled.div`
  
`;

export default Home;
