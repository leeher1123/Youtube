import React, { useState } from 'react';
import styled from 'styled-components';

import { DefaultButton } from '../Button/Button.Styled';
import { IconMic, IconSearch } from '../../../../icon';
import Tooltip from '../Tooltip';

const SearchBox = () => {
  const [value, setValue] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <Box>
        <Form onSubmit={onSubmit}>
          <Label>
            <Input
              type="text"
              placeholder="검색"
              value={value}
              onChange={onChange}
            />
          </Label>
          <Button className="searchBtn"><IconSearch /></Button>
          <Tooltip message="검색" direction="bottom" />
        </Form>
        <Button className="micBtn"><IconMic /></Button>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex: 1;
  align-items: center;
  max-width: 640px;
  height: 30px;
  margin-right: 8px;
  background-color: #111;
  border: 1px solid #303030;
  margin-left: 40px;
  border-radius: 2px;
`;

const Label = styled.label`
  height: 100%;
  flex: 1;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  padding: 2px 6px;
  color: #e7e4e4;
  background: none;
  outline: none;
  border: 1px solid transparent;
  font-size: 16px;

  &:focus {
    border-color: #116dcb;
  }
`;

const Button = styled(DefaultButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  
  &.searchBtn {
    padding: 1px 6px;
    width: 65px;
    background: #323232;
    transition: .3s;
    &:hover {
      svg {
        fill: #fff;
      }
    }
    svg {
      width: 24px;
      height: 24px;
      fill: #afafaf;
      transition: .1s;
    }
  }
  
  &.micBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #121212;
    border-radius: 50%;
    svg {
      width: 20px;
      height: 20px;
      fill: #fff;
    }
  }
`;

export default SearchBox;
