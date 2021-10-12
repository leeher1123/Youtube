import React from 'react';
import styled from 'styled-components';

const GridList = ({ data, children }) => {
  const a = 1;
  return (
    <Container>
      <Row>
        {
          data.map((item) => (
            <Col key={item.id}>
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
  margin: 0 -7px;
`;

const Col = styled.div`
  width: 25%;
  padding: 0 9px;
`;

export default GridList;
