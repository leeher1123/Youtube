import React from 'react';
import styled from 'styled-components';

import {
  IconSideHome, IconSideKeep, IconSideSearch, IconSideSub,
} from '../../icon';

const SideMenu = () => {
  const a = 1;
  return (
    <Container>
      <MenuIcon>
        <IconSideHome />
        <p>홈</p>
      </MenuIcon>
      <MenuIcon>
        <IconSideSearch />
        <p>탐색</p>
      </MenuIcon>
      <MenuIcon>
        <IconSideSub />
        <p>구독</p>
      </MenuIcon>
      <MenuIcon>
        <IconSideKeep />
        <p>보관함</p>
      </MenuIcon>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 56px;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  background: rgba(33, 33, 33, 0.98);
  width: 72px;
`;

const MenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 72px;
  padding: 16px 0 14px;
  svg {
    width: 24px;
    height: 100%;
    fill: #fff;
  }
  p {
    color: #fff;
    font-size: 10px;
  }
`;

const Text = styled.div`

`;

export default SideMenu;
