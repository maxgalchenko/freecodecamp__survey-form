import React from 'react';
import styled from '@emotion/styled';

const Input = (props) => {
  const { required = true, children } = props;

  return (
    <InputStyled {...props} required={required}>
      {children}
    </InputStyled>
  );
};

const InputStyled = styled.input`
  min-height: 40px;

  font-size: 20px;
  background-color: white;
  border-radius: 5px;
  width: 100%;
  padding: 1% 3%;
  box-sizing: border-box;
  color: #303a52;

  &::placeholder {
    color: black;
    font-size: 18px;
    font-weight: 400;
  }

  &:focus {
    border-color: #3d5af1;
    outline: 0;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;

export default Input;
