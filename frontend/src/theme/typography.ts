import {Platform} from 'react-native';

const systemFont = Platform.select({
  ios: 'System',
  android: 'Roboto',
});

export const typography = {
  regular: systemFont,
  bold: Platform.select({
    ios: 'System',
    android: 'Roboto-Bold',
  }),
  semibold: Platform.select({
    ios: 'System',
    android: 'Roboto-Medium',
  }),
};
