import React from 'react';
import styled from 'styled-components';

import { IconLogo, IconMenuBar } from '../../../../icon';
import SearchBox from './SearchBox';
import IconMenus from './IconMenus';

const Header = () => {
  const a = 1;
  return (
    <Container>
      <Logo>
        <BarIcon><IconMenuBar /></BarIcon>
        <LogoIcon><IconLogo /></LogoIcon>
      </Logo>
      <SearchBox />
      <IconMenus />
    </Container>
  );
};

const Container = styled.div`
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #212121;
  height: 56px;
`;

const Logo = styled.div`
  min-width: 20%;
  display: flex;
  align-items: center;
`;

const BarIcon = styled.div`
  width: 40px;
  height: 40px;
  padding: 8px;

  svg {
    width: 24px;
    height: 24px;
    fill: #fff;
  }
`;

const LogoIcon = styled.div`
  width: 120px;
  height: 56px;
  padding: 18px 14px 18px 16px;
  svg {
    width: 90px;
    height: 20px;
    fill: #fff;
  }
`;

export default Header;
