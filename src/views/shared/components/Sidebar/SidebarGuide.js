import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import cn from 'classnames';

const SidebarGuide = () => {
  const normalSidebar = useSelector((state) => state.shared.normalSidebar);
  return (
    <Container className={cn({ normalSidebar })}>
      SidebarGuide
    </Container>
  );
};

const Container = styled.div`
  width: 72px;
  &.normalSidebar {
    flex-shrink: 0;
    width: 240px;
  }
`;

export default SidebarGuide;
