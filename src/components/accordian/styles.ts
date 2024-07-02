import {StyleSheet} from 'react-native';
import {APP_THEME} from '../../theme';

export const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: APP_THEME.colors.purple,
  },
  contentContainer: {
    position: 'absolute',
    width: '100%',
    top: 0,
  },
});
