import React from 'react';
import styled from '@emotion/styled';
import Label from './Label';
import Input from './Input';

const CheckboxList = ({ checkedData, data, onChange }) => {
  return (
    <CheckboxListStyled>
      {data.map((item, index) => (
        <div className='checkbox-item__wrap' key={index}>
          <Input
            type='checkbox'
            required={false}
            id={item}
            onChange={onChange}
            checked={checkedData[item]}
            value={item}
          />
          <Label text={item} htmlFor={item} />
        </div>
      ))}
    </CheckboxListStyled>
  );
};

const CheckboxListStyled = styled.div`
  .checkbox-item__wrap {
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

export default CheckboxList;
