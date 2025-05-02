import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../theme/color';

export default function PasswordEyeButton({
  secureTextEntry,
  onPress,
}: PasswordEyeButtonProps) {
  return (
    <Pressable style={styles.inputIcon} onPress={onPress}>
      <Icon
        name={!secureTextEntry ? 'eye' : 'eye-off'}
        size={20}
        color={colors.textSecondary}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  inputIcon: {
    position: 'absolute',
    right: 0,
    bottom: 10,
  },
});
