import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { actions } from '../redux/slice';
import SearchVideoList from '../components/SearchVideoList';
import SidebarContainer from '../../shared/containers/sidebar/SidebarContainer';

const SearchContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const searchVideos = useSelector((state) => state.search.searchVideos);
  const getSearchVideos = () => {
    dispatch(actions.getRelatedVideos({
      key: 'AIzaSyAHuPMZcDQA74fPEKkh-qfX-O4u11iyfEY',
      part: 'snippet, id',
      q: id,
      type: 'video',
      maxResults: 5,
      regionCode: 'KR',
    }));
  };
  useEffect(() => {
    getSearchVideos();
  }, [id]);

  return (
    <Container>
      <SidebarContainer />
      <SearchVideoList searchVideos={searchVideos} />
    </Container>
  );
};

const Container = styled.div`

`;

export default SearchContainer;
