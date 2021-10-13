import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import { Link, useLocation, useParams } from 'react-router-dom';

import { useMediaMatch } from 'rooks';

import { IconLogo, IconMenuBar } from '../../../../icon';
import SearchBox from './SearchBox';
import IconMenus from './IconMenus';
import { actions } from '../../redux/slice';

const Header = () => {
  const dispatch = useDispatch();
  const normalSidebar = useSelector((state) => state.shared.normalSidebar);
  const drawerSidebar = useSelector((state) => state.shared.drawerSidebar);
  const screenMd = useMediaMatch('(max-width: 1300px)');
  const handleSidebar = () => {
    if (screenMd) {
      dispatch(actions.handleDrawerSidebar(!drawerSidebar));
    } else {
      dispatch(actions.handleNormalSidebar(!normalSidebar));
    }
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(33, 33, 33, 0.98);
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
