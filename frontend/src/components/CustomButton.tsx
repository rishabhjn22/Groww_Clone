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
  disabled,
}: PrimaryButtonProps) {
  return (
    <Pressable
      style={[styles.container, buttonStyle, disabled && styles.disbaleStyle]}
      onPress={onPress}>
      {icon && <>{icon}</>}
      <CustomText
        color={disabled ? colors.white : colors.black}
        fontSize={16}
        weight="semibold"
        style={[styles.label, labelStyle, disabled]}>
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
  disbaleStyle: {
    borderRadius: 5,
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(12),
    backgroundColor: '#4f4c4c',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  label: {},
});
