import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { actions as sharedAction } from '../../shared/redux/reducer';
import { actions as searchAction } from '../../search/redux/reducer';
import WatchVideo from '../components/WatchVideo';
import RelatedVideosList from '../components/RelatedVideosList';

const WatchContainer = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.shared.videos);
  const searchVideos = useSelector((state) => state.search.searchVideos);
  const getVideo = () => {
    dispatch(sharedAction.getVideos({
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

  const getRelatedVideos = () => {
    dispatch(searchAction.getRelatedVideos({
      key: 'AIzaSyAHuPMZcDQA74fPEKkh-qfX-O4u11iyfEY',
      part: 'snippet, id',
      relatedToVideoId: videoId,
      type: 'video',
      maxResults: 5,
      regionCode: 'KR',
    }));
  };
  useEffect(() => {
    getRelatedVideos();
  }, [videoId]);

  return (
    <Container>
      <WatchVideo videos={videos} />
      <RelatedVideosList searchVideos={searchVideos} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 56px;
`;

export default WatchContainer;
