import React from 'react';
import styled from 'styled-components';

import { IconSideHome, IconSideSearch, IconSideSub } from '../../../../icon';

const TextMenu = () => {
  const a = 1;
  return (
    <Container>
      <Menu>
        <MenuItem>
          <Item>
            <IconSideHome />
            <p>홈</p>
          </Item>
          <Item>
            <IconSideSearch />
            <p>탐색</p>
          </Item>
          <Item>
            <IconSideSub />
            <p>구독</p>
          </Item>
        </MenuItem>
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  width: 240px;
`;

const Menu = styled.div`
  padding-right: 24px;
`;

const MenuItem = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid rgba(118, 118, 118, 0.3);
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 0 24px;
  height: 40px;
  svg {
    width: 24px;
    height: 24px;
    fill: #fff;
  }
  p {
    flex: 1;
    margin-left: 24px;
    font-size: 14px;
  }
`;

export default TextMenu;
