import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../../shared/redux/reducer';
import MainVideosList from '../components/MainVideosList';
import ScrollMenu from '../../shared/components/Menu/ScrollMenu';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.shared.videos);
  const categories = useSelector((state) => state.shared.categories);
  const getVideos = () => {
    dispatch(actions.getVideos({
      key: 'AIzaSyAHuPMZcDQA74fPEKkh-qfX-O4u11iyfEY',
      part: 'id, snippet, statistics',
      chart: 'mostPopular',
      regionCode: 'KR',
      maxResults: 30,
    }));
  };
  useEffect(() => {
    getVideos();
  }, []);

  const getCategories = () => {
    dispatch(actions.getCategories({
      key: 'AIzaSyAHuPMZcDQA74fPEKkh-qfX-O4u11iyfEY',
      part: 'id, snippet',
      regionCode: 'KR',
      hl: 'ko_KR',
    }));
  };

  useEffect(() => {
    getCategories();
  }, []);

  if (!categories) return '...loading';

  return (
    <Container>
      <ScrollMenu categories={categories.items} />
      <MainVideosList videos={videos} />
    </Container>
  );
};

const Container = styled.div`

`;

export default HomeContainer;
