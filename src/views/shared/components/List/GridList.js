import React from 'react';
import styled from 'styled-components';

const GridList = ({ data }) => {
  const a = 1;
  return (
    <Container>
      <Row>
        {
          data.map((item) => (
            <Col>
              <img src={item?.snippet?.thumbnails?.medium?.url} alt="사진" />
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
  padding: 0 -7px;
`;

const Col = styled.div`
  width: 25%;
  padding: 0 9px;
`;

export default GridList;
