import React, {useRef, useState} from 'react';
import Box from './Box';
import CustomText from './CustomText';
import {
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
} from 'react-native';
import colors from '../theme/color';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Input(props: InputProps & TextInputProps) {
  const inputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: any) => {
    setIsFocused(true);
    if (props.onFocus) {
      props.onFocus(e); // propagate to parent
    }
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    if (props.onBlur) {
      props.onBlur(e); // propagate to parent
    }
  };

  return (
    <Box mt={Platform.OS === 'ios' ? 10 : 0}>
      {props.label && (
        <CustomText color={colors.white} fontSize={14}>
          {props.label}
        </CustomText>
      )}
      <Box>
        <TextInput
          ref={inputRef}
          placeholder={props.placeholder}
          placeholderTextColor={colors.textSecondary}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={[
            styles.input,
            {
              borderColor: props.error
                ? colors.error
                : isFocused
                ? colors.primary
                : colors.textSecondary,
            },
          ]}
          {...props}
        />

        {props.renderEndIcon && props.renderEndIcon()}
      </Box>

      {props.iconName && (
        <Pressable style={styles.inputIcon} onPress={props.onPressIcon}>
          <Icons name={props.iconName} size={20} color={colors.textSecondary} />
        </Pressable>
      )}
      <Box mt={5}>
        {props.error && (
          <Box flexDirection="row" alignItems="center" width={'80%'}>
            <Icons name="alert-circle" size={15} color={colors.error} />
            <CustomText
              color={colors.error}
              fontSize={14}
              style={styles.errorText}>
              {props.error}
            </CustomText>
          </Box>
        )}
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    fontSize: 14,
    paddingBottom: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    color: colors.white,
  },
  errorText: {
    textAlign: 'left',
    left: 5,
  },
  inputIcon: {
    position: 'absolute',
    right: 0,
    bottom: 10,
  },
});
