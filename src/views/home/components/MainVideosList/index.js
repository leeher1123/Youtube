import React from 'react';
import styled from 'styled-components';

import GridList from '../../../shared/components/List/GridList';

const MainVideosList = ({ videos }) => {
  if (!videos.items) return '...loading';
  return (
    <Container>
      <GridList data={videos.items} />
    </Container>
  );
};

const Container = styled.div`

`;

export default MainVideosList;
