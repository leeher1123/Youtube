import React from 'react';
import styled from 'styled-components';

import VideoGridList from '../../shared/components/List/VideoGridList';
import SearchVideoItem from '../../search/components/SearchVideoItem';

const RelatedVideosList = ({ searchVideos }) => {
  const a = 1;
  return (
    <Container>
      <VideoGridList data={searchVideos.items}>
        {
          (item) => <SearchVideoItem item={item} />
        }
      </VideoGridList>
    </Container>
  );
};

const Container = styled.div`
  padding: 24px 24px 0 0;
  width: 300px;
`;

export default RelatedVideosList;
