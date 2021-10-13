import React from 'react';
import styled from 'styled-components';

import HomeContainer from '../../views/home/containers/HomeContainer';
import Template from '../../views/shared/layout/Template';

const Home = () => (
  <Container>
    <Template>
      <HomeContainer />
    </Template>
  </Container>
);

const Container = styled.div`
  
`;

export default Home;
