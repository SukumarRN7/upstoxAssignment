import React from 'react';
import {View} from 'react-native';
import {GlobalStyle} from '../../globalStyle';
import HomeHeader from './components/header';
import {HomeLocale} from '../../locale/home.locale';
import CurrentInvestments from './components/CurrentInvestments';
const HomeScreen = () => {
  return (
    <View style={GlobalStyle.container}>
      <HomeHeader title={HomeLocale.upstockHolding} />
      <CurrentInvestments />
    </View>
  );
};

export default HomeScreen;
