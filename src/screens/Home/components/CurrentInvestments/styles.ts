import {StyleSheet} from 'react-native';
import {APP_THEME} from '../../../../theme';

export const styles = StyleSheet.create({
  scrollContainer: {paddingBottom: 200},
  holdingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingVertical: 20,
    borderBottomColor: APP_THEME.colors.grey,
    borderBottomWidth: 1,
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  textContainer: {alignItems: 'flex-end'},
  symbolText: {
    fontWeight: 'bold',
  },
  holdingText: {marginTop: 5},
  valueText: {
    fontWeight: 'bold',
  },
});
