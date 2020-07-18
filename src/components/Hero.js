import React from 'react';
import styled from '@emotion/styled';

const Hero = () => {
  return (
    <HeroStyled>
      <h1>freeCodeCamp Survey Form</h1>
      <p>Thank you for taking the time to check my form</p>
    </HeroStyled>
  );
};

const HeroStyled = styled.section`
  padding: 40px 5% 20px 5%;
  text-align: center;

  h1 {
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 10px;
  }

  p {
    font-style: italic;
    font-weight: 300;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
    font-size: 20px;
  }
`;

export default Hero;
