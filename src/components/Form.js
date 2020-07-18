import React from 'react';
import { useState, useEffect } from 'react';
import { isEmailValid } from '../utils/checkValidity';
import styled from '@emotion/styled';
import Input from './ui/Input';

//   form: {
//
//   },
//   textInput: {
//     fontSize: 20,
//     marginBottom: 30,
//   },
//   textInputProps: {
//     color: '#303030',
//
//   },
//   inputLabel: {
//     fontWeight: 600,
//     marginBottom: 10,
//     fontSize: 18,
//     display: 'block',
//     '& span': {
//       fontWeight: 400,
//       fontSize: 16,
//     },
//   },
//   helperText: {
//     background: 'transparent',
//     position: 'absolute',
//     bottom: -24,
//     left: 0,
//   },

// const selectData = [
//   'Select a current role',
//   'Student',
//   'Full Time Job',
//   'Full Time Learner',
//   'Prefer not to say',
//   'Other',
// ];

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    dropdown: 'Select a current role',
  });

  const onChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <FormStyled>
      <Input
        placeholder='Enter your name'
        type='text'
        required
        id='name'
        onChange={onChange}
        value={formData.name}
      />
    </FormStyled>
  );
};

const FormStyled = styled.form`
  padding: 60px 50px 60px 50px;
  background: rgba(27, 27, 50, 0.8);
  border-radius: 5px;
`;

export default Form;
