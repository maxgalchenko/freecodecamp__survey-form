import React from 'react';
import styled from '@emotion/styled';
import Label from './Label';
import Input from './Input';

const RadioList = ({ data, name, onChange, value }) => {
  return (
    <RadioListStyled>
      {data.map((item, index) => (
        <div key={index} className='radio-item__wrap'>
          <Input
            name={name}
            value={item}
            type='radio'
            onChange={onChange}
            defaultChecked={index === 0 ? true : false}
            id={item}
          />
          <Label text={item} htmlFor={item} />
        </div>
      ))}
    </RadioListStyled>
  );
};

const RadioListStyled = styled.div`
  .radio-item__wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  input {
    width: auto;
    margin-right: 10px;
    display: block;
    width: 30px;
  }
`;

export default RadioList;
