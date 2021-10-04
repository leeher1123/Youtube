import React from 'react';
import styled from 'styled-components';

import SideMenu from '../views/shared/components/Menu/SideMenu';
import SideScreen from '../views/shared/components/Menu/SideScreen';
import SearchContainer from '../views/search/containers/SearchContainer';

const Search = () => {
  const a = 1;
  return (
    <Container>
      <SearchContainer />
      <SideMenu />
      <SideScreen />
    </Container>
  );
};

const Container = styled.div`

`;

export default Search;
