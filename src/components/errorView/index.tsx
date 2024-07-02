import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {GlobalStyle} from '../../globalStyle';
import {APP_THEME} from '../../theme';
import {MISC_LOCALE} from '../../locale/misc.locale';

interface ErrorView {
  retry: () => void;
  style?: StyleProp<ViewStyle>;
}

const ErrorView: React.FC<ErrorView> = ({style, retry}) => {
  return (
    <View style={[GlobalStyle.container, GlobalStyle.justifyAlign, style]}>
      <Text>{MISC_LOCALE.somethingWentWrong}</Text>
      <TouchableOpacity onPress={retry}>
        <Text style={styles.retryText}>{MISC_LOCALE.retry}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ErrorView;

const styles = StyleSheet.create({
  retryText: {
    marginTop: 10,
    color: APP_THEME.colors.purple,
  },
});
