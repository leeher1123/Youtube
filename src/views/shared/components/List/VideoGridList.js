import React from 'react';
import styled from 'styled-components';

const VideoGridList = ({ data = [], children }) => {
  const a = 1;
  return (
    <Container>
      <Row>
        {
          data.map((item) => (
            <Col key={item.id.videoId}>
              {
                children(item)
              }
            </Col>
          ))
        }
      </Row>
    </Container>
  );
};

const Container = styled.div`

`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Col = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

export default VideoGridList;
