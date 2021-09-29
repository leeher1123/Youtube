import React from 'react';
import styled from 'styled-components';

import { IconDropdown } from '../../../icon';

const SearchVideoItem = ({ item }) => {
  const a = 1;
  return (
    <Container>
      <Thumb>
        <img src={item.snippet.thumbnails.default.url} alt="썸네일" />
      </Thumb>
      <Contents>
        <Title>
          <Text>
            <h2>{item.snippet.title}</h2>
            <icon><IconDropdown /></icon>
          </Text>
          <p>d</p>
          <p>d</p>
        </Title>
        <Channel>
          <img src="https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" alt="" />
          <p>d</p>
        </Channel>
        <Desc>d</Desc>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Thumb = styled.div`

`;

const Contents = styled.div`

`;

const Title = styled.div`
  p {
    
  }
`;

const Text = styled.div`
  h2 {
    font-size: 18px;
    font-weight: 400;
    color: #fff;
  }
  icon {
    
  }
`;
const Channel = styled.div`
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;

const Desc = styled.div`

`;

export default SearchVideoItem;
