import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import {
  IconDislike, IconLike, IconSave, IconShare,
} from '../../../icon';
import { count } from '../../../lib/count';

const WatchContents = ({ data = [] }) => {
  const price = data[0]?.statistics.viewCount;
  return (
    <Container>
      <h2>{data[0]?.snippet?.title}</h2>
      <Desc>
        <Text>
          <p>
            조회수
            &nbsp;
            {Number(price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            회
          </p>
          <Point>•</Point>
          <p>{moment(data[0]?.snippet?.publishedAt).format('YYYY. MM. DD')}</p>
        </Text>
        <Info>
          <Item>
            <Icon><IconLike /></Icon>
            <p>{count(data[0]?.statistics.likeCount)}</p>
            <Bar />
          </Item>
          <Item>
            <Icon><IconDislike /></Icon>
            <p>{count(data[0]?.statistics.dislikeCount)}</p>
          </Item>
          <Item>
            <Icon><IconShare /></Icon>
            <p>공유</p>
          </Item>
          <Item>
            <Icon><IconSave /></Icon>
            <p>저장</p>
          </Item>
        </Info>
      </Desc>
    </Container>
  );
};

const Container = styled.div`
  color: #fff;
  padding: 20px 0 8px;
  width: 98%;
  h2 {
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
  margin-bottom: 25px;
  border-bottom: 1px solid rgba(238, 238, 238, 0.15);
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
  position: relative;
  display: flex;
  align-items: center;
  p {
    color: #fff;
  }
`;

const Bar = styled.div`
  position: absolute;
  bottom: -3px;
  left: 15px;
  width: 140px;
  height: 2px;
  background: #fff;
`;

const Icon = styled.div`
  padding: 6px;
  margin-left: 8px;
  svg {
    width: 24px;
    height: 24px;
    fill: #fff;
  }
`;

export default WatchContents;
