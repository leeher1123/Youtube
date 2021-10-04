import React from 'react';
import styled from 'styled-components';
import { formatDistance } from 'date-fns';
import ko from 'date-fns/locale/ko';

import { useHistory } from 'react-router-dom';

import { IconDropdown } from '../../../icon';

const SearchVideoItem = ({ item }) => {
  const history = useHistory();
  const onClick = () => {
    history.push(`/watch/${item.id.videoId}`);
  };
  const distance = formatDistance(
    new Date(item?.snippet?.publishedAt),
    new Date(Date.now()),
    { addSuffix: true, locale: ko },
  );

  return (
    <Container onClick={onClick}>
      <Cover />
      <Thumb>
        <img src={item.snippet.thumbnails.medium.url} alt="썸네일" />
      </Thumb>
      <Contents>
        <Title>
          <Text>
            <h2>{item.snippet.title}</h2>
            <icon><IconDropdown /></icon>
          </Text>
          <p>{distance}</p>
        </Title>
        <Channel>
          <img src="https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" alt="" />
          <p>{item.snippet.channelTitle}</p>
        </Channel>
        <Desc>{item.snippet.description}</Desc>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  padding: 5px;
  cursor: pointer;
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(238, 238, 238, 0.16);
  border: 1px solid #767676;
  opacity: 0;
  &:active {
    opacity: 1;
  }
`;

const Thumb = styled.div`
  width: 30%;
  margin-right: 19px;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Contents = styled.div`
  width: 70%;
`;

const Title = styled.div`
  svg {
    fill: #fff;
    width: 24px;
    height: 24px;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    color: #aaa;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    margin-top: 4px;
  }
  icon {
    
  }
`;
const Channel = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 5px;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    color: #aaa;
  }
`;

const Desc = styled.div`
  margin-top: 15px;
  font-size: 12px;
  font-weight: 400;
  color: #aaa;
`;

export default SearchVideoItem;
