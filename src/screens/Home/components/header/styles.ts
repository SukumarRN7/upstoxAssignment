import {StyleSheet} from 'react-native';
import {APP_THEME} from '../../../../theme';

export const styles = StyleSheet.create({
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
