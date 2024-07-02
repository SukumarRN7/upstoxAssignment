import {StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface iTriangle {
  style?: StyleProp<ViewStyle>;
}

export const Triangle: React.FC<iTriangle> = ({style}) => {
  return <View style={[styles.triangle, style]} />;
};
