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
  disabled = false,
  buttonType = 'primary',
}: PrimaryButtonProps) {
  return (
    <Pressable
      style={[
        styles.container,
        buttonType === 'secondary' && styles.buttonSecondary,
        disabled && styles.disbaleStyle,
        buttonStyle,
      ]}
      disabled={disabled}
      onPress={onPress}>
      {icon && <>{icon}</>}
      <CustomText
        color={
          disabled || buttonType === 'primary' ? colors.white : colors.black
        }
        fontSize={16}
        weight="semibold"
        style={[labelStyle, disabled]}>
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
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  disbaleStyle: {
    backgroundColor: '#4f4c4c',
  },
  buttonSecondary: {
    backgroundColor: colors.white,
  },
});
