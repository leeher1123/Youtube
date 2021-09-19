import React from 'react';
import styled from 'styled-components';

import GridList from '../../../shared/components/List/GridList';
import MainVideosItem from '../MainVideosItem';

const MainVideosList = ({ videos }) => {
  if (!videos.items) return '...loading';
  return (
    <Container>
      <GridList data={videos.items}>
        {
          (item) => <MainVideosItem item={item} />
        }
      </GridList>
    </Container>
  );
};

const Container = styled.div`
  background: #212121;
`;

export default MainVideosList;
