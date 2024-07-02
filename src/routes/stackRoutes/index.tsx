import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Home';
import React from 'react';
import {SCREEN_NAMES, StackNavHeaderConfig} from '../navigationUtility';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={StackNavHeaderConfig}>
      <Stack.Screen name={SCREEN_NAMES.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
