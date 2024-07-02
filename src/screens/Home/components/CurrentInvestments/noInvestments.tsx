import React from 'react';
import {Text, View} from 'react-native';
import {GlobalStyle} from '../../../../globalStyle';
import {MISC_LOCALE} from '../../../../locale/misc.locale';
const NoInvestments = () => {
  return (
    <View style={[GlobalStyle.container, GlobalStyle.justifyAlign]}>
      <Text>{MISC_LOCALE.noInvestments}</Text>
    </View>
  );
};

export default NoInvestments;
