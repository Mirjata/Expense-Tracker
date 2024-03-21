import React from 'react';
import BaseApp from './app/screens/initial';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@rneui/themed';
import theme from './app/theme/index';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <BaseApp />
        </ThemeProvider>
      </SafeAreaProvider>
    </SafeAreaView>
  );
};

export default App;
