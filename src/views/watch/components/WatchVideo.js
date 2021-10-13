import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';

import WatchContents from './WatchContents';

const WatchVideo = ({ videos }) => {
  const { videoId } = useParams();
  const opts = {
    width: '948',
    height: '535',
    playerVars: {
      autoplay: 1,
    },
  };

  if (!videos) return '...loading';

  return (
    <Container>
      <YouTube videoId={videoId} opts={opts} />
      <WatchContents data={videos.items} />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1387px;
  padding: 24px 24px 0;
`;

export default WatchVideo;
