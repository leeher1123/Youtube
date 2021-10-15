import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

const WatchVideoItem = ({ item }) => {
  const history = useHistory();
  const onClick = () => {
    history.push(`/watch/${item.id.videoId}`);
  };
  const distance = moment(item?.snippet?.publishedAt).fromNow();
  return (
    <Container onClick={onClick}>
      <Cover />
      <Thumb>
        <img src={item.snippet?.thumbnails.medium.url} alt="썸네일" />
      </Thumb>
      <Contents>
        <Title>
          <Text>
            <h2>{item.snippet?.title}</h2>
          </Text>
          <p>{item.snippet?.channelTitle}</p>
        </Title>
        <Desc>
          <p>{distance}</p>
        </Desc>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  margin-bottom: 7px;
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
  width: 168px;
  height: 94px;
  margin-right: 19px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Contents = styled.div`
  width: 60%;
`;

const Title = styled.div`
  svg {
    fill: #fff;
    width: 24px;
    height: 24px;
  }
  p {
    max-width: 672px;
    line-height: 1.6;
    font-size: 12px;
    font-weight: 400;
    color: #aaa;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

const Text = styled.div`
  max-width: 672px;
  line-height: 1.4;
  h2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    margin-top: 4px;
  }
  @media (max-width: 987px) {
    font-size: 14px;
    font-weight: 500;
  }
`;
const Desc = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 12px;
    font-weight: 400;
    color: #aaa;
  }
`;

export default WatchVideoItem;
