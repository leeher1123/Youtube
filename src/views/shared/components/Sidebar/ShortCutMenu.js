import React from 'react';
import styled, { css } from 'styled-components';

import {
  IconSideHome, IconSideKeep, IconSideSearch, IconSideSub,
} from '../../../../icon';
import { media } from '../../../../lib/styled';

const ShortCutMenu = () => {
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
  background: rgba(33, 33, 33, 0.98);
  width: 72px;
  ${media.md(css`
    display: none;
  `)};
`;

const MenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 72px;
  padding: 16px 0 14px;
  transition: .2s;
  cursor: pointer;

  svg {
    width: 24px;
    height: 100%;
    fill: #fff;
  }

  p {
    color: #fff;
    font-size: 10px;
  }

  &:hover {
    background: rgba(118, 118, 118, 0.3);
  }
`;

export default ShortCutMenu;
