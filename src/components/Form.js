import React from 'react';
import { useState, useEffect } from 'react';
// MUI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MainLayout from '../layouts/MainLayout';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  ...theme.spreadIt,
  form: {
    padding: '60px 50px 60px 50px',
    background: 'rgba(27,27,50,0.8)',
    borderRadius: 5,
  },
  textInput: {
    fontSize: 20,
    background: 'white',
    borderRadius: 5,
    marginBottom: 30,
  },
  textInputProps: {
    color: '#303030',
    '&::placeholder': {
      color: 'black',
      fontSize: 18,
      fontWeight: 400,
    },
  },
  textInputLabel: {
    fontWeight: 600,
    marginBottom: 10,
    fontSize: 18,
    display: 'block',
    '& span': {
      fontWeight: 400,
      fontSize: 16,
    },
  },
}));

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: {
      value: '',
    },
    email: {
      touched: false,
      value: '',
    },
    age: {
      touched: false,
      value: '',
    },
  });

  const onChange = (e) => {
    setFormData({
      ...formData,

      [e.target.id]: {
        ...formData[e.target.id],
        value: e.target.value,
        touched: true,
      },
    });
  };

  const isEmailValid = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(String(formData.email.value).toLowerCase());
  };

  const isAgeValid = (e) => {
    console.log(e.tar.value.checkValidity());
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <MainLayout>
      <form id='survey-form' className={classes.form}>
        <label htmlFor='name' className={classes.textInputLabel}>
          Name
        </label>
        <TextField
          className={classes.textInput}
          id='name'
          variant='outlined'
          fullWidth
          type='text'
          required
          placeholder='Enter your name'
          inputProps={{ className: classes.textInputProps }}
          InputLabelProps={{ className: classes.textInputLabel }}
          size='small'
          onChange={onChange}
          value={formData.name.value}
        />

        <label htmlFor='email' className={classes.textInputLabel}>
          Email
        </label>
        <TextField
          variant='outlined'
          className={classes.textInput}
          id='email'
          fullWidth
          type='email'
          required
          placeholder='Enter your Email'
          inputProps={{ className: classes.textInputProps }}
          InputLabelProps={{ className: classes.textInputLabel }}
          size='small'
          onChange={onChange}
          value={formData.email.value}
          error={isEmailValid() && formData.email.touched ? true : false}
        />

        <label htmlFor='age' className={classes.textInputLabel}>
          Age <span>(optional)</span>
        </label>
        <TextField
          variant='outlined'
          className={classes.textInput}
          id='age'
          fullWidth
          type='number'
          required
          placeholder='Age'
          inputProps={{ className: classes.textInputProps, min: 1, max: 10 }}
          InputLabelProps={{ className: classes.textInputLabel }}
          size='small'
          onChange={onChange}
          value={formData.age.value}
          error={isAgeValid(e) && formData.age.touched}
        />

        <Button color='secondary' variant='contained' type='submit'>
          Submit
        </Button>
      </form>
    </MainLayout>
  );
};

export default Form;
