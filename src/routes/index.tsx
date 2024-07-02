import {NavigationContainer} from '@react-navigation/native';
import StackRoutes from './stackRoutes';
import React from 'react';

const NavigationWrapper = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default NavigationWrapper;
