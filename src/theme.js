import React from 'react';
import { ThemeProvider } from 'emotion-theming';

const theme = {
  mediaTablet: '@media(min-width: 768px)',
  mediaDesktop: '@media(min-width: 1280px)',
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
