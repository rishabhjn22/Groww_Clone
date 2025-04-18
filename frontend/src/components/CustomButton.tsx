import React from 'react';
import CustomText from './CustomText';
import colors from '../theme/color';
import {Pressable, StyleSheet} from 'react-native';
import {pixelSizeHorizontal, pixelSizeVertical} from '../utils/responsive';

export default function CustomButton({
  label,
  onPress,
  buttonStyle,
  icon,
  labelStyle,
}: PrimaryButtonProps) {
  return (
    <Pressable style={[styles.container, buttonStyle]} onPress={onPress}>
      {icon && <>{icon}</>}
      <CustomText
        color={colors.black}
        fontSize={16}
        style={[styles.label, labelStyle]}>
        {label}
      </CustomText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(12),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  label: {},
});
