import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useMediaMatch } from 'rooks';

import { actions as sharedAction } from '../../shared/redux/slice';
import { actions as searchAction } from '../../search/redux/slice';
import WatchVideo from '../components/WatchVideo';
import RelatedVideosList from '../components/RelatedVideosList';
import WatchSidebarContainer from './WatchSidebarContainer';

const WatchContainer = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.shared.videos);
  const searchVideos = useSelector((state) => state.search.searchVideos);
  const screenMd = useMediaMatch('(max-width: 1004px)');
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
      <WatchSidebarContainer />
      <WatchVideo videos={videos} />
      {
        screenMd ? null : <RelatedVideosList searchVideos={searchVideos} />
      }
    </Container>
  );
};

const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 56px 10px 0;
`;

export default WatchContainer;
