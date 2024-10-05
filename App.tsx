/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Home from './src/screen/Home.tsx';
import {ThemeProvider} from '@design-blocks/native';
import {themes} from './blocks.config';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={themes.light}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
