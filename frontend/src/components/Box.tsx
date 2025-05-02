import React, {useMemo} from 'react';
import {View, ViewProps} from 'react-native';
// import {useTheme} from '../context/ThemeContext';
// import {darkColors, lightColors} from '../theme/color';

export default function Box({
  children,
  mv,
  justifyContent,
  alignItems,
  alignSelf,
  flexDirection,
  pv,
  ph,
  mt,
  mb,
  flex,
  p,
  mr,
  ml,
  borderRadius,
  // backgroundColor,
  ...props
}: BoxProps & ViewProps) {
  // const {theme} = useTheme();
  // const currentColors = theme === 'light' ? lightColors : darkColors;

  const height = useMemo(() => {
    return props.height;
  }, [props.height]);

  return (
    <View
      style={[
        {
          height,
          marginVertical: mv,
          justifyContent,
          alignItems,
          alignSelf,
          flexDirection,
          paddingVertical: pv,
          paddingHorizontal: ph,
          marginTop: mt,
          marginBottom: mb,
          flex,
          padding: p,
          marginRight: mr,
          marginLeft: ml,
          borderRadius,
          // backgroundColor: backgroundColor || currentColors.background,
        },
        props.style,
      ]}
      {...props}>
      {children}
    </View>
  );
}
