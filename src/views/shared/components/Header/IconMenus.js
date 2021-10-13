import React from 'react';
import styled, { css } from 'styled-components';

import { FaUserCircle } from 'react-icons/fa';

import {
  IconApp, IconBell, IconVideo,
} from '../../../../icon';

const IconMenus = () => {
  const a = 1;
  return (
    <Container>
      <Buttons>
        <Icon><IconVideo /></Icon>
        <Icon><IconApp /></Icon>
        <Icon><IconBell /></Icon>
        <Icon><FaUserCircle /></Icon>
      </Buttons>
    </Container>
  );
};

const Container = styled.div`
  min-width: 20%;
  display: flex;
  justify-content: flex-end;
  margin-left: 15px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  margin: 5px;
  svg {
    width: 24px;
    height: 24px;
    fill: #fff;
  }
`;

export default IconMenus;
