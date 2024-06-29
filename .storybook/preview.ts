import type { Preview } from "@storybook/react";
import '../src/styles/global';
import '../src/styles/styled';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import lightTheme from '../src/styles/themes/light';
import darkTheme from '../src/styles/themes/dark';
import { Decorator } from '@storybook/react';
import GlobalStyle from '../src/styles/global';

const withThemeProvider = (Story, context) => {
  const theme = context.globals.theme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story {...context} />
    </ThemeProvider>
  );
};

Decorator(withThemeProvider);

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
      showName: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
