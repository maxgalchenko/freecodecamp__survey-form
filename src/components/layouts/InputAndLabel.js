import React from 'react';
import styled from '@emotion/styled';

const InputAndLabel = ({ label, input }) => {
  return (
    <InputAndLabelStyled>
      <div className='label-wrap'>{label}</div>
      <div className='input-wrap'>{input}</div>
    </InputAndLabelStyled>
  );
};

const InputAndLabelStyled = styled.div`
  margin-bottom: 30px;
  .label-wrap {
    margin-bottom: 10px;
  }
`;

export default InputAndLabel;
