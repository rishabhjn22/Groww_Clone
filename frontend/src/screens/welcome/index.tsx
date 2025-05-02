import React from 'react';
import Box from '../../components/Box';
import CustomText from '../../components/CustomText';
import {Image, StyleSheet, Text} from 'react-native';
import colors from '../../theme/color';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import GoogleIcon from '../../assets/images/google.svg';
import AppleIcon from '../../assets/images/apple.svg';
import TextButton from '../../components/TextButton';
import {AuthNavigationProps} from '../../types/navigation';
import {RoutePaths} from '../../constants/RoutePaths';

type Props = AuthNavigationProps<'Welcome'>;

export default function Welcome({navigation}: Props) {
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
          buttonType="secondary"
        />
      </Box>
      <Box mv={5} alignItems="center">
        <CustomButton
          label="Continue with Apple"
          onPress={() => console.log('hello apple')}
          buttonStyle={styles.buttonStyle}
          icon={<AppleIcon width={20} height={20} />}
          labelStyle={styles.labelStyle}
          buttonType="secondary"
        />
      </Box>
      <Box alignItems="center" mt={20}>
        <TextButton
          label="Use other email ID"
          onPress={() => navigation.navigate(RoutePaths.EMAILLOGIN)}
        />
      </Box>
      <Box mt={50} width={'100%'} alignSelf="center" justifyContent="center">
        <Text style={styles.bottomText}>
          <CustomText color={colors.textSecondary} fontSize={13}>
            By proceeding, I accept Groww's{' '}
            <TextButton
              label="T&C"
              textDecorationLine="underline"
              textStyle={styles.bottomTextStyle}
            />
            {', '}
            <TextButton
              label="Privacy Policy"
              textDecorationLine="underline"
              textStyle={styles.bottomTextStyle}
            />
            {', '}
            <TextButton
              label="Tariff Rates"
              textDecorationLine="underline"
              textStyle={styles.bottomTextStyle}
            />
            {', '}
            <TextButton
              label="FATCA_Declaration"
              textDecorationLine="underline"
              textStyle={styles.bottomTextStyle}
            />
            {' & '}
            <TextButton
              label="CIBIL T&C"
              textDecorationLine="underline"
              textStyle={styles.bottomTextStyle}
            />
          </CustomText>
        </Text>
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
  bottomText: {
    textAlign: 'center',
  },
  bottomTextStyle: {
    fontSize: 11,
    top: 1,
  },
});
