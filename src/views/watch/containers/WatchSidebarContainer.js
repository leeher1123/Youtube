import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import cn from 'classnames';

import { actions } from '../../shared/redux/slice';
import { IconLogo, IconMenuBar } from '../../../icon';
import TextMenu from '../../shared/components/Sidebar/TextMenu';

const WatchSidebarContainer = () => {
  const dispatch = useDispatch();
  const normalSidebar = useSelector((state) => state.shared.normalSidebar);
  const onClick = () => {
    dispatch(actions.handleNormalSidebar(false));
  };
  return (
    <Container className={cn({ normalSidebar })}>
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
  &.normalSidebar {
    transform: none;
  }
`;

const ButtonMenu = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
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
  margin-right: 16px;
  cursor: pointer;
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

export default WatchSidebarContainer;
