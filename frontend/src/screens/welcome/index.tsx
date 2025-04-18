import React from 'react';
import Box from '../../components/Box';
import CustomText from '../../components/CustomText';
import {Image, StyleSheet} from 'react-native';
import colors from '../../theme/color';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import GoogleIcon from '../../assets/images/google.svg';
import AppleIcon from '../../assets/images/apple.svg';
import TextButton from '../../components/TextButton';

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Box mt={25} alignItems="center">
        <CustomText fontSize={30} weight="regular" color={colors.white}>
          All things finance
        </CustomText>
      </Box>
      <Box mt={20} alignItems="center">
        <CustomText fontSize={14} weight="regular" color={colors.textSecondary}>
          {'Stocks \u2022  Mutual Funds \u2022  F&O'}
        </CustomText>
      </Box>
      <Box mt={20} justifyContent="center" alignItems="center">
        <Image
          source={require('../../assets/images/welcome-logo.png')}
          style={styles.image}
        />
      </Box>
      <Box mv={10} alignItems="center">
        <CustomButton
          label="Continue with Google"
          onPress={() => console.log('hello google')}
          buttonStyle={styles.buttonStyle}
          icon={<GoogleIcon width={20} height={20} />}
          labelStyle={styles.labelStyle}
        />
      </Box>
      <Box mv={10} alignItems="center">
        <CustomButton
          label="Continue with Apple"
          onPress={() => console.log('hello apple')}
          buttonStyle={styles.buttonStyle}
          icon={<AppleIcon width={20} height={20} />}
          labelStyle={styles.labelStyle}
        />
      </Box>
      <Box alignItems='center' mt={20}>
        <TextButton label="Use other email ID" />
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    width: 380,
    height: 380,
    resizeMode: 'contain',
  },
  buttonStyle: {
    width: '90%',
  },
  labelStyle: {
    marginLeft: 10,
  },
});
