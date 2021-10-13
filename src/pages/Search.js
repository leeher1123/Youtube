import React from 'react';
import styled from 'styled-components';

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
