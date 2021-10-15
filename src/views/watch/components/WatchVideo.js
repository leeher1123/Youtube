import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import WatchContents from './WatchContents';

const WatchVideo = ({ videos }) => {
  const { videoId } = useParams();

  if (!videos) return '...loading';

  return (
    <Container>
      <Video>
        <Inner>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Inner>
      </Video>
      <WatchContents data={videos.items} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 24px 24px 0;
`;

const Video = styled.div`
  position: relative;
  padding-bottom: 50%;
  height: 0;
  overflow: hidden;
`;

const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default WatchVideo;
