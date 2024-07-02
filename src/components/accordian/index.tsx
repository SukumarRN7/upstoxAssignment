import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Animated, {
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {styles} from './styles';
import {Triangle} from './triangle';

const Accordian = ({...props}) => {
  const accordianHeight = useSharedValue(0);
  const open = useSharedValue(false);
  const childRef = useAnimatedRef();

  const progress = useDerivedValue(() =>
    open.value ? withTiming(1) : withTiming(0),
  );

  const _handleOnPress = () => {
    if (accordianHeight.value === 0) {
      runOnUI(() => {
        'worklet';
        const childHeight = measure(childRef)?.height ?? 0;
        accordianHeight.value = withTiming(childHeight);
      })();
    } else {
      accordianHeight.value = withTiming(0);
    }
    open.value = !open.value;
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: accordianHeight.value,
      opacity: progress.value,
    };
  });

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${progress.value * -180}deg`}],
    alignSelf: 'center',
  }));

  return (
    <View>
      <TouchableOpacity onPress={_handleOnPress}>
        <Animated.View style={iconStyle}>
          <Triangle />
        </Animated.View>
      </TouchableOpacity>
      <Animated.View style={[animatedStyle]}>
        <Animated.View ref={childRef} style={styles.contentContainer}>
          {props?.children}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Accordian;
