import React from 'react';
import styled from 'styled-components';

import SideMenu from '../views/shared/components/Menu/SideMenu';
import SideScreen from '../views/shared/components/Menu/SideScreen';
import SearchContainer from '../views/search/containers/SearchContainer';
import Template from '../views/shared/layout/Template';

const Search = () => (
  <Container>
    <Template>
      <SearchContainer />
    </Template>
  </Container>
);

const Container = styled.div`

`;

export default Search;
