/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import NavigationWrapper from './src/routes';
import {GlobalStyle} from './src/globalStyle';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={GlobalStyle.container}>
      <Provider store={store}>
        <NavigationWrapper />
      </Provider>
    </SafeAreaView>
  );
}

export default App;
