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
  max-width: 1352px;
  position: relative;
  top: 116px;
  left: 72px;
  right: 0;
  background: #212121;
`;

export default MainVideosList;
