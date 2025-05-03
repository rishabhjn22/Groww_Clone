import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  BaseToast,
  ErrorToast,
  ToastProps,
  ToastConfigParams,
} from 'react-native-toast-message';

export const toastConfig = {
  success: (props: ToastProps) => (
    <BaseToast
      {...props}
      style={[styles.baseToast, {borderLeftColor: 'pink'}]}
      contentContainerStyle={styles.contentContainer}
      text1Style={styles.successText}
    />
  ),
  error: (props: ToastProps) => (
    <ErrorToast
      {...props}
      text1Style={styles.errorText1}
      text2Style={styles.errorText2}
    />
  ),
  tomatoToast: (params: ToastConfigParams<{uuid: string}>) => {
    const {text1, props} = params;
    return (
      <View style={styles.tomatoContainer}>
        <Text style={styles.tomatoText}>{text1}</Text>
        <Text style={styles.tomatoText}>{props.uuid}</Text>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  baseToast: {
    // Add other common styles for baseToast here
  },
  contentContainer: {
    paddingHorizontal: 15,
  },
  successText: {
    fontSize: 15,
    fontWeight: '400',
  },
  errorText1: {
    fontSize: 17,
  },
  errorText2: {
    fontSize: 15,
  },
  tomatoContainer: {
    height: 60,
    width: '100%',
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tomatoText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
});
