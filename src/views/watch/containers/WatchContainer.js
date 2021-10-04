import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../../shared/redux/reducer';
import WatchVideo from '../components/WatchVideo';
import RelatedVideosList from '../components/RelatedVideosList';

const WatchContainer = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.shared.videos);

  const getVideo = () => {
    dispatch(actions.getVideos({
      key: 'AIzaSyAHuPMZcDQA74fPEKkh-qfX-O4u11iyfEY',
      part: 'id, snippet, statistics',
      id: videoId,
      regionCode: 'KR',
      maxResults: 5,
    }));
  };
  useEffect(() => {
    getVideo();
  }, []);

  return (
    <Container>
      <WatchVideo videos={videos} />
      <RelatedVideosList />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1424px;
  display: flex;
  justify-content: center;
  padding-top: 56px;
`;

export default WatchContainer;
