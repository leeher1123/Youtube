import React from 'react';
import styled from 'styled-components';

import VideoGridList from '../../shared/components/List/VideoGridList';
import SearchVideoItem from './SearchVideoItem';

const SearchVideoList = ({ searchVideos }) => {
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
  max-width: 1280px;
  margin: 0 auto;
  padding: 30px 24px 16px 96px;
`;

export default SearchVideoList;
