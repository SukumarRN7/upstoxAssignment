import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {APP_THEME} from '../../../../theme';

export const HomeHeader: React.FC<IHomeHeader> = ({
  title = 'Default Title',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: APP_THEME.colors.purple,
    height: 50,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  title: {
    color: APP_THEME.colors.white,
    fontWeight: 'bold',
  },
});
