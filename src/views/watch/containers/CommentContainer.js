import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { actions } from '../redux/slice';
import Comments from '../components/Comments';

const CommentContainer = () => {
  const commentData = useSelector((state) => state.watch.comments);
  const dispatch = useDispatch();
  const { videoId } = useParams();
  const getComments = () => {
    dispatch(actions.getComments({
      key: 'AIzaSyAHuPMZcDQA74fPEKkh-qfX-O4u11iyfEY',
      part: 'snippet, id, replies',
      videoId,
    }));
  };

  useEffect(() => {
    getComments();
  }, [videoId]);

  return (
    <Container>
      <Comments items={commentData.items} />
    </Container>
  );
};

const Container = styled.div`

`;

export default CommentContainer;
