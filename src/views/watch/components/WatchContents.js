import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

import {
  IconDislike, IconLike, IconSave, IconShare,
} from '../../../icon';

const WatchContents = ({ data = [] }) => {
  const a = 1;
  return (
    <Container>
      <h2>{data[0]?.snippet?.title}</h2>
      <Desc>
        <Text>
          <p>
            조회수
            &nbsp;
            {(data[0]?.statistics.viewCount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            회
          </p>
          <Point>•</Point>
          <p>{format(new Date(data[0]?.snippet?.publishedAt), 'yyyy. MM. dd.')}</p>
        </Text>
        <Info>
          <Item>
            <Icon><IconLike /></Icon>
            <p>d</p>
          </Item>
          <Item>
            <Icon><IconDislike /></Icon>
            <p>d</p>
          </Item>
          <Item>
            <Icon><IconShare /></Icon>
            <p>공유</p>
          </Item>
          <Item>
            <Icon><IconSave /></Icon>
            <p>d</p>
          </Item>
          <Item>저장</Item>
        </Info>
      </Desc>
    </Container>
  );
};

const Container = styled.div`
  color: #fff;
  padding: 20px 0 8px;
  h2 {
    width: 98%;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    line-height: 1.4;
  }
`;

const Desc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  p {
    font-size: 14px;
    font-weight: 400;
    color: #aaa;
  }
`;

const Point = styled.div`
  margin: 0 5px;
  color: #aaa;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  p {
    color: #fff;
  }
`;

const Icon = styled.div`
  svg {
    width: 24px;
    height: 24px;
    fill: #fff;
  }
`;

export default WatchContents;
