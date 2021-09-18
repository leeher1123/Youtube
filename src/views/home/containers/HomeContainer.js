import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { actions } from '../../shared/redux/reducer';

const HomeContainer = () => {
  const dispatch = useDispatch();
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
      HomeContainer
    </Container>
  );
};

const Container = styled.div`

`;

export default HomeContainer;
