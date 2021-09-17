import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { actions } from '../../shared/redux/reducer';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const getVideos = () => {
    dispatch(actions.getVideos({
      key: '',
      perPage: 20,
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
