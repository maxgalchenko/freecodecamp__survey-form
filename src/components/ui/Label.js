import React from 'react';
import styled from '@emotion/styled';

const Label = ({ text, htmlFor, smallText }) => {
  return (
    <LabelStyled htmlFor={htmlFor}>
      {text} {smallText && <span>{smallText}</span>}
    </LabelStyled>
  );
};

const LabelStyled = styled.label`
  color: white;
  font-weight: 600;
  font-size: 18px;
  span {
    font-weight: 400;
    font-size: 16px;
  }
`;

export default Label;
