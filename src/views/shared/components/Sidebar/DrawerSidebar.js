import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import cn from 'classnames';

import { useMediaMatch } from 'rooks';

import TextMenu from './TextMenu';
import { IconLogo, IconMenuBar } from '../../../../icon';
import { actions } from '../../redux/reducer';

const DrawerSidebar = () => {
  const dispatch = useDispatch();
  const drawerSidebar = useSelector((state) => state.shared.drawerSidebar);
  const screenSm = useMediaMatch('(max-width: 800px)');
  const onClick = () => {
    dispatch(actions.handleDrawerSidebar(false));
  };
  useEffect(() => {
    if (!screenSm) {
      dispatch(actions.handleDrawerSidebar(false));
    }
  }, [screenSm]);
  return (
    <Container className={cn({ drawerSidebar })}>
      <ButtonMenu>
        <BarIcon onClick={onClick}><IconMenuBar /></BarIcon>
        <Logo to="/">
          <LogoIcon><IconLogo /></LogoIcon>
        </Logo>
      </ButtonMenu>
      <TextMenu />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1500;
  width: 240px;
  background: #212121;
  color: #fff;
  transform: translateX(-100%);
  transition: .2s;
  &.drawerSidebar {
    transform: none;
  }
`;

const ButtonMenu = styled.div`
  display: flex;
  align-items: center;
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

export default DrawerSidebar;
