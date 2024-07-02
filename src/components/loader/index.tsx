import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {APP_THEME} from '../../theme';
import {GlobalStyle} from '../../globalStyle';
const CustomLoader = () => {
  return (
    <View style={[GlobalStyle.container, GlobalStyle.justifyAlign]}>
      <ActivityIndicator color={APP_THEME.colors.purple} />
    </View>
  );
};

export default CustomLoader;
