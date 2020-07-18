import React from 'react';
import styled from '@emotion/styled';
import { useState, useRef } from 'react';

import Input from './ui/Input';
import InputAndLabel from './layouts/InputAndLabel';
import Label from './ui/Label';
import RadioList from './ui/RadioList';
import CheckboxList from './ui/CheckboxList';

const selectData = [
  'Select a current role',
  'Student',
  'Full Time Job',
  'Full Time Learner',
  'Prefer not to say',
  'Other',
];

const selectData2 = [
  'Select an option',
  'Challanges',
  'Projects',
  'Community',
  'Open Source',
];

const checkboxData = [
  'Front-end Projects',
  'Back-end Projects',
  'Data Visualization',
  'Challenges',
  'Open Source Community',
  'Gitter help rooms',
  'Videos',
  'City Meetups',
  'Wiki',
  'Forum',
  'Additional Courses',
];

const radioData = ['Definitely', 'Maybe', 'Not sure'];

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    textarea: '',
    dropdown: 'Select a current role',
    radio: 'Definitely',
    dropdown2: 'Select an option',
    checkbox: {
      'Front-end Projects': false,
      'Back-end Projects': false,
      'Data Visualization': false,
      Challenges: false,
      'Open Source Community': false,
      'Gitter help rooms': false,
      Videos: false,
      'City Meetups': false,
      Wiki: false,
      Forum: false,
      'Additional Courses': false,
    },
  });

  const formRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    if (formRef.current.checkValidity()) {
      alert('The form is completed correctly. Thanks you!');
    }
  };

  const onChange = (e) => {
    const { id, value, type, name } = e.target;

    switch (type) {
      // RADIO
      case 'radio':
        setFormData({
          ...formData,
          [name]: value,
        });
        break;
      // CHECKBOX
      case 'checkbox':
        {
          const { checked } = e.target;

          setFormData((formData) => ({
            ...formData,
            checkbox: {
              ...formData.checkbox,
              [id]: checked ? true : false,
            },
          }));
        }
        break;
      // TEXT,NUMBER,EMAIL
      default:
        setFormData({
          ...formData,
          [id]: value,
        });
    }
  };

  return (
    <FormStyled id='survey-form' onSubmit={onSubmit} ref={formRef}>
      {/* NAME */}
      <InputAndLabel
        label={<Label htmlFor='name' text='Name' />}
        input={
          <Input
            placeholder='Enter your name'
            type='text'
            id='name'
            onChange={onChange}
            value={formData.name}
          />
        }
      />
      {/* EMAIL */}
      <InputAndLabel
        label={<Label htmlFor='email' text='Email' />}
        input={
          <Input
            placeholder='Enter your email'
            type='email'
            id='email'
            onChange={onChange}
            value={formData.email}
          />
        }
      />
      {/* AGE */}
      <InputAndLabel
        label={<Label htmlFor='age' text='Age' smallText='(optional)' />}
        input={
          <Input
            placeholder='Age'
            type='number'
            id='age'
            onChange={onChange}
            value={formData.age}
            required={false}
            min='18'
            max='120'
          />
        }
      />
      {/* DROPDOWN */}
      <InputAndLabel
        label={
          <Label
            htmlFor='dropdown'
            text='Which option best describes your current role?'
          />
        }
        input={
          <Input
            id='dropdown'
            as='select'
            onChange={onChange}
            value={formData.dropdown}
            name='dropdown'
          >
            {selectData.map((item, index) => (
              <option
                key={index}
                value={item}
                disabled={index === 0 ? true : false}
              >
                {item}
              </option>
            ))}
          </Input>
        }
      />
      {/* RADIO */}
      <InputAndLabel
        label={
          <Label
            htmlFor='radio'
            text='Would you recommend freeCodeCamp to a friend?'
          />
        }
        input={<RadioList data={radioData} onChange={onChange} name='radio' />}
      />
      {/* DROPDOWN2 */}
      <InputAndLabel
        label={
          <Label
            htmlFor='dropdown2'
            text='What is your favorite feature of freeCodeCamp?'
          />
        }
        input={
          <Input
            id='dropdown2'
            as='select'
            onChange={onChange}
            value={formData.dropdown2}
            name='dropdown2'
          >
            {selectData2.map((item, index) => (
              <option
                key={index}
                value={item}
                disabled={index === 0 ? true : false}
              >
                {item}
              </option>
            ))}
          </Input>
        }
      />
      {/* CHECKBOX */}
      <InputAndLabel
        label={
          <Label
            text='What would you like to see improved?'
            smallText='(Check all that apply)'
          />
        }
        input={
          <CheckboxList
            checkedData={formData.checkbox}
            data={checkboxData}
            onChange={onChange}
          />
        }
      />
      {/* TEXTAREA */}
      <InputAndLabel
        label={<Label htmlFor='textarea' text='Any comments or suggestions?' />}
        input={
          <Input
            placeholder='Enter your comment here ...'
            as='textarea'
            id='textarea'
            onChange={onChange}
            value={formData.textarea}
            rows='4'
            style={{ borderRadius: 0 }}
          />
        }
      />

      <button id='submit' onClick={onSubmit} type='submit'>
        Submit
      </button>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  padding: 5% 10% 5% 10%;
  background: rgba(27, 27, 50, 0.8);
  border-radius: 5px;

  button {
    height: 40px;
    width: 100%;
    background: #17b978;
    border: none;
    font-size: 18px;
    color: white;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default Form;
