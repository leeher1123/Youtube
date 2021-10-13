import React from 'react';
import styled, { css } from 'styled-components';

import { media } from '../../../../lib/styled';

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
  padding: 0 12px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -7px;
`;

const Col = styled.div`
  width: 25%;
  padding: 0 9px;
  ${media.lg(css`
    width: 33.33%;
  `)}
  ${media.md(css`
    width: 50%;
  `)};
  ${media.sm(css`
    width: 100%;
  `)}
`;

export default GridList;
