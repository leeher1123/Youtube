import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { IconLogo, IconMenuBar } from '../../../../icon';
import SearchBox from './SearchBox';
import IconMenus from './IconMenus';
import { actions } from '../../redux/reducer';

const Header = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.shared.sidebar);
  const handleSidebar = () => {
    dispatch(actions.updateState(!sidebar));
  };

  return (
    <Container>
      <Menu>
        <BarIcon onClick={handleSidebar}><IconMenuBar /></BarIcon>
      </Menu>
      <Logo to="/">
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

const Menu = styled.div`
  cursor: pointer;
`;

const Logo = styled(Link)`
  min-width: 20%;
  display: flex;
  align-items: center;
  cursor: pointer;
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
