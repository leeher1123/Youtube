import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import { useMediaMatch } from 'rooks';

import TextMenu from '../../components/Sidebar/TextMenu';
import ShortCutMenu from '../../components/Sidebar/ShortCutMenu';

const MenuContainer = () => {
  const normalSidebar = useSelector((state) => state.shared.normalSidebar);
  const screenSm = useMediaMatch('(max-width: 800px)');
  return (
    <Container>
      {
        // eslint-disable-next-line no-nested-ternary
        screenSm ? <ShortCutMenu />
          : normalSidebar ? <TextMenu /> : <ShortCutMenu />
      }
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 56px;
  left: 0;
  bottom: 0;
  z-index: 1000;
  background: #212121;
  color: #fff;
`;

export default MenuContainer;
