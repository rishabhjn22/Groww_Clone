type BoxProps = {
  children: React.ReactNode;
  flexDirection?: 'row' | 'column';
  justifyContent?: 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'center' | 'space-between';
  alignSelf?: 'center';
  height?: number | string;
  width?: number | string;
  p?: Spacing;
  m?: Spacing;
  pv?: Spacing;
  ph?: Spacing;
  mv?: Spacing;
  mh?: Spacing;
  pt?: Spacing;
  pb?: Spacing;
  pl?: Spacing;
  pr?: Spacing;
  mt?: Spacing;
  mb?: Spacing;
  ml?: Spacing;
  mr?: Spacing;
  style?: any;
  backgroundColor?: string;
  flex?: number;
  borderRadius?: number;
};

type CustomTextProps = {
  fontSize?: FontSize;
  color?: AppColors;
  lineHeight?: number;
  fontFamily?: string; // <-- Add this line
  weight?: 'regular' | 'semibold' | 'bold';
};

type PrimaryButtonProps = {
  onPress: () => void;
  label: string;
  buttonStyle?: ViewStyle;
  icon?: React.ReactNode;
  labelStyle?: ViewStyle;
  disabled?: boolean;
  buttonType?: 'primary' | 'secondary' | 'disbale';
};

type TextButtonProps = {
  label: string;
  onPress?: () => void;
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  textStyle?: ViewStyle;
};

type InputProps = {
  label?: string;
  placeholder?: string;
  error?: string;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  iconName?: string;
  onPressIcon?: () => void;
  renderEndIcon?: () => any;
  hasLabel?: boolean;
};

type PasswordEyeButtonProps = {
  onPress: () => void;
  secureTextEntry: boolean;
};

type CustomToastProps = {
  text1: string;
  text2?: string;
};
