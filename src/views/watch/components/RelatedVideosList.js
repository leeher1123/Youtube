import React from 'react';
import styled from 'styled-components';

import VideoGridList from '../../shared/components/List/VideoGridList';
import WatchVideoItem from './WatchVideoItem';

const RelatedVideosList = ({ searchVideos }) => (
  <Container>
    <VideoGridList data={searchVideos.items}>
      {
        (item) => <WatchVideoItem item={item} />
      }
    </VideoGridList>
  </Container>
);

const Container = styled.div`
  max-width: 390px;
  padding: 24px 24px 0 0;
  @media (max-width: 987px) {
    max-width: 850px;
    font-size: 14px;
    font-weight: 500;
  }
`;

export default RelatedVideosList;
