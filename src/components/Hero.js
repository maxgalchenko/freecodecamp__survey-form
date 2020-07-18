import React from 'react';
import styled from '@emotion/styled';

const Hero = () => {
  return (
    <HeroStyled>
      <h1 id='title'>freeCodeCamp Survey Form</h1>
      <p id='description'>Thank you for taking the time to check my form</p>
    </HeroStyled>
  );
};

const HeroStyled = styled.section`
  padding: 40px 5% 20px 5%;
  text-align: center;

  #title {
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 10px;
  }

  #description {
    font-style: italic;
    font-weight: 300;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
    font-size: 20px;
    line-height: 20px;
  }
`;

export default Hero;
