import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { media } from '../../../../lib/styled';
import { actions } from '../../redux/slice';

const ScrollMenu = ({ categories }) => {
  const normalSidebar = useSelector((state) => state.shared.normalSidebar);
  const dispatch = useDispatch();
  const [video, setVideo] = useState(null);

  const getCategoryVideos = () => {
    dispatch(actions.getVideos({
      key: 'AIzaSyAHuPMZcDQA74fPEKkh-qfX-O4u11iyfEY',
      part: 'id, snippet, statistics',
      regionCode: 'KR',
      maxResults: 5,
      videoCategoryId: video,
    }));
  };

  useEffect(() => {
    getCategoryVideos();
  }, [video]);

  if (!categories) return '...loading';
  return (
    <Container className={cn({ normalSidebar })}>
      <Track>
        {
          categories.map((item) => (
            <MenuItem
              key={item.id}
              onClick={() => {
                setVideo(item.id);
              }}
            >
              {item.snippet.title}
            </MenuItem>
          ))
        }
      </Track>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 56px;
  left: 72px;
  right: 0;
  z-index: 1000;
  padding: 0 70px;
  background: rgba(33, 33, 33, 0.98);
  border-top: 1px solid rgba(118, 118, 118, 0.3);
  border-bottom: 1px solid rgba(118, 118, 118, 0.3);
  &.normalSidebar {
    left: 240px;
  }
  ${media.md(css`
    left: 0;
  `)};
`;

const Track = styled.div`
  display: flex;
  white-space: nowrap;
  height: 55px;
  color: #fff;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  margin: 12px 12px 12px 0;
  border: 1px solid rgba(118, 118, 118, 0.3);
  border-radius: 40px;
  font-size: 14px;
  background: #3d3d3d;
  transition: .2s;
  cursor: pointer;
  &:hover {
    background: rgba(118, 118, 118, 0.7);
  }
`;

export default ScrollMenu;
