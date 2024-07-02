import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

interface ITitleValue {
  title: string;
  value: string;
  style?: StyleProp<ViewStyle>;
}

export const TitleValue: React.FC<ITitleValue> = ({title, value, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {fontWeight: 'bold', fontSize: 16},
  value: {
    fontWeight: '600',
  },
});
