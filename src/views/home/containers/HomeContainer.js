import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../../shared/redux/reducer';
import MainVideosList from '../components/MainVideosList';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.shared.videos);
  const getVideos = () => {
    dispatch(actions.getVideos({
      key: 'AIzaSyAHuPMZcDQA74fPEKkh-qfX-O4u11iyfEY',
      part: 'id, snippet, contentDetails',
      chart: 'mostPopular',
      regionCode: 'KR',
      maxResults: 10,
    }));
  };
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <Container>
      <MainVideosList videos={videos} />
    </Container>
  );
};

const Container = styled.div`

`;

export default HomeContainer;
