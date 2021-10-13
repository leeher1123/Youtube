import React from 'react';
import styled from 'styled-components';

import VideoGridList from '../../shared/components/List/VideoGridList';
import WatchVideoItem from './WatchVideoItem';

const RelatedVideosList = ({ searchVideos }) => {
  const a = 1;
  return (
    <Container>
      <VideoGridList data={searchVideos.items}>
        {
          (item) => <WatchVideoItem item={item} />
        }
      </VideoGridList>
    </Container>
  );
};

const Container = styled.div`
  padding: 24px 24px 0 0;
`;

export default RelatedVideosList;
