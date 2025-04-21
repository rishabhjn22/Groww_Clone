import React, {useRef} from 'react';
import Box from './Box';
import CustomText from './CustomText';
import {Platform, StyleSheet, TextInput, TextInputProps} from 'react-native';
import colors from '../theme/color';

export default function Input(props: InputProps & TextInputProps) {
  const inputRef = useRef<TextInput>(null);
  return (
    <Box mt={Platform.OS === 'ios' ? 10 : 0}>
      <CustomText color={colors.white} fontSize={14}>
        {props.label}
      </CustomText>
      <TextInput
        ref={inputRef}
        placeholder={props.placeholder}
        placeholderTextColor={colors.textSecondary}
        style={styles.input}
        {...props}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderColor: colors.primary,
    fontSize: 14,
    paddingBottom: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    color: colors.white,
  },
});
