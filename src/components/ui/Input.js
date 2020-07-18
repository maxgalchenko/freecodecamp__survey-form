import React from 'react';
import styled from '@emotion/styled';

const Input = ({ type, placeholder, required, onChange, value, id }) => {
  return (
    <InputStyled
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      id={id}
    />
  );
};

const InputStyled = styled.input`
  height: 40px;
  margin-bottom: 30px;
  font-size: 20px;
  background: white;
  background-color: white;
  border-radius: 5px;
  width: 100%;
  padding: 0 3%;
  box-sizing: border-box;

  &::placeholder {
    color: black;
    font-size: 18px;
    font-weight: 400;
  }
`;

export default Input;
