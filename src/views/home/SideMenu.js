import React from 'react';
import styled from 'styled-components';

const SideMenu = () => {
  const a = 1;
  return (
    <Container>
      <HomeIcon>d</HomeIcon>
      <SearchIcon>d</SearchIcon>
      <SubIcon>d</SubIcon>
      <SaveIcon>d</SaveIcon>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 72px;
  background: #212121;
`;

const HomeIcon = styled.div`

`;

const SearchIcon = styled.div`

`;

const SubIcon = styled.div`

`;

const SaveIcon = styled.div`

`;

export default SideMenu;
