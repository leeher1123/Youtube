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
  position: relative;
  top: 116px;
  right: 0;
  background: #212121;
  z-index: 100;
  margin-left: 5%;
`;

export default MainVideosList;
