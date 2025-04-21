import React from 'react';
import CustomText from './CustomText';
import {Pressable, StyleSheet} from 'react-native';
import colors from '../theme/color';

export default function TextButton({
  label,
  onPress,
  textDecorationLine = 'none',
  textStyle,
}: TextButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <CustomText
        color={colors.primary}
        fontSize={14}
        style={[
          styles.text,
          {textDecorationLine: textDecorationLine},
          textStyle,
        ]}>
        {label}
      </CustomText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'semibold',
  },
});
