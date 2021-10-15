import React from 'react';
import styled from 'styled-components';
import { formatDistance } from 'date-fns';
import ko from 'date-fns/locale/ko';

import { useHistory } from 'react-router-dom';

import { count } from '../../../lib/count';

const MainVideosItem = ({ item }) => {
  const history = useHistory();
  const onClick = () => {
    history.push(`/watch/${item.id}`);
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
        <img src={item?.snippet?.thumbnails?.medium?.url} alt="사진" />
      </Thumb>
      <Contents>
        <User>
          <img src="https://images.unsplash.com/photo-1553882951-9c3dab4a50cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" alt="사진" />
        </User>
        <Desc>
          <h1>{item?.snippet?.title}</h1>
          <p>{item?.snippet?.channelTitle}</p>
          <span>
            조회수
            &nbsp;
            {count(item?.statistics?.viewCount)}
            회
          </span>
          <Dot>•</Dot>
          <span>
            {distance}
          </span>
        </Desc>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  margin-bottom: 30px;
  cursor: pointer;
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(170, 170, 170, 0.1);
  border: 1px solid rgba(170, 170, 170, 0.12);
  opacity: 0;
  transition: background .1s, border .3s;
  &:active {
    opacity: 1;
  }
`;

const Thumb = styled.div`
  margin-bottom: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Contents = styled.div`
  display: flex;
  height: 108px;
`;

const User = styled.div`
  img {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 12px;
  }
`;

const Desc = styled.div`
  padding-right: 24px;
  max-width: 100%;
  h1 {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap:break-word;
    margin-top: 3px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
    line-height: 1.4;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: #a1a1a1;
    margin-bottom: 3px;
  }
  span {
    color: #a1a1a1;
    font-size: 14px;
    font-weight: 400;
  }
`;

const Dot = styled.div`
  display: inline;
  color: #a1a1a1;
  margin: 0 3px;
`;

export default MainVideosItem;
