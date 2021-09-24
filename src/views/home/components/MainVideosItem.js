import React from 'react';
import styled from 'styled-components';
// import { formatDistance } from 'date-fns';

const MainVideosItem = ({ item }) => {
  const a = 1;
  // console.log(item.fileDetails.creationTime);
  // const distance = formatDistance(
  //   new Date(item?.fileDetails?.creationTime),
  //   new Date(Date.now()),
  //   { addSuffix: true },
  // );
  return (
    <Container>
      <Thumb>
        <img src={item?.snippet?.thumbnails?.medium?.url} alt="사진" />
      </Thumb>
      <Contents>
        <User>d</User>
        <Desc>
          <h1>{item?.snippet?.title}</h1>
          <p>{item?.snippet?.channelTitle}</p>
          <span>
            조회수
            {item?.statistics?.viewCount}
            회
          </span>
          <span>{}</span>
        </Desc>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  
`;

const Thumb = styled.div`

`;

const Contents = styled.div`
  display: flex;
`;

const User = styled.div`

`;

const Desc = styled.div`
  h1 {
    color: #fff;
    padding: 10px 0;
    font-size: 14px;
    font-weight: 500;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    color: #a1a1a1;
  }
  span {
    color: #a1a1a1;
    font-size: 12px;
    font-weight: 400;
  }
`;

export default MainVideosItem;
