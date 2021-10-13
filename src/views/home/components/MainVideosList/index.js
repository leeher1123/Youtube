import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import cn from 'classnames';

import GridList from '../../../shared/components/List/GridList';
import MainVideosItem from '../MainVideosItem';

const MainVideosList = ({ videos }) => {
  const normalSidebar = useSelector((state) => state.shared.normalSidebar);
  if (!videos.items) return '...loading';
  return (
    <Container className={cn({ normalSidebar })}>
      <GridList data={videos.items}>
        {
          (item) => <MainVideosItem item={item} />
        }
      </GridList>
    </Container>
  );
};

const Container = styled.div`
  padding: 81px 24px 24px 96px;
  background: #181818;
  z-index: 100;
  &.normalSidebar {
    padding: 81px 24px 24px 24px;
  }
`;

export default MainVideosList;
