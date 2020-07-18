import React from 'react';
import styled from '@emotion/styled';

const MainLayout = ({ children }) => {
  return <MainLayoutStyled>{children}</MainLayoutStyled>;
};

const MainLayoutStyled = styled.div`
  ${({ theme }) => theme.mediaTablet} {
    width: 80%;
    margin: 0 auto;
  }
`;

export default MainLayout;
