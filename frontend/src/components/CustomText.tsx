import React, {useMemo} from 'react';
import {Text, TextProps} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {typography} from '../theme/typography';
import colors from '../theme/color';

const FONT_SCALE = 0.3;
const FONT_OFFSET = 1;

export default function CustomText({
  children,
  fontSize = 16,
  lineHeight,
  fontFamily,
  weight = 'regular',
  color,
  style,
  ...props
}: CustomTextProps & TextProps) {
  const scaledFontSize = useMemo(
    () => moderateScale(fontSize - FONT_OFFSET, FONT_SCALE),
    [fontSize],
  );

  const scaledLineHeight = useMemo(
    () => (lineHeight ? moderateScale(lineHeight, FONT_SCALE) : undefined),
    [lineHeight],
  );

  const textColor = useMemo(() => {
    switch (color) {
      case 'Primary':
        return colors.primary;
      case 'Secondary':
        return colors.secondary;
      case 'White':
        return '#FFFFFF';
      case 'Black':
        return '#000000';
      default:
        return color || colors.textPrimary;
    }
  }, [color]);

  const resolvedFontFamily = useMemo(() => {
    if (fontFamily) {
      return fontFamily;
    }
    return typography[weight] || typography.regular;
  }, [fontFamily, weight]);

  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[
        {
          fontSize: scaledFontSize,
          fontFamily: resolvedFontFamily,
          lineHeight: scaledLineHeight,
          color: textColor,
        },
        style,
      ]}>
      {children}
    </Text>
  );
}
