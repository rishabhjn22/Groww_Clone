import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../theme/color';
import {StyleSheet} from 'react-native';
import {AuthNavigationProps} from '../../types/navigation';
import PasswordEyeButton from '../../components/PasswordEyeButton';
import Input from '../../components/Input';
import Box from '../../components/Box';
import CustomButton from '../../components/CustomButton';
import CustomText from '../../components/CustomText';
import {validatePassword} from '../../utils/regex';
import TextButton from '../../components/TextButton';
import {RoutePaths} from '../../constants/RoutePaths';
import Toast from 'react-native-toast-message';

type Props = AuthNavigationProps<'ChangePassword'>;

export default function ChangePassword({navigation}: Props) {
  const [password, setPassword] = useState<string>('');
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [secureConfirmTextEntry, setSecureConfirmTextEntry] =
    useState<boolean>(true);
  const [passwordError, setPasswordError] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');
  const [showOtp, setShowOtp] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>('');
  const [otpError, setOtpError] = useState<string>('');
  const [timer, setTimer] = useState<number>(30);

  const passwordValidationPolicyText = () => {
    return (
      <Box
        backgroundColor="#2a1f0e"
        p={15}
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        borderRadius={5}>
        <Box>
          <Icon name="alert-circle" size={25} color={colors.white} />
        </Box>
        <Box width={'90%'} ml={10}>
          <CustomText
            color={colors.white}
            fontSize={12}
            weight="regular"
            lineHeight={18}>
            Password must have at least one uppercase letter and one lowercase
            letter.
          </CustomText>
          <CustomText
            color={colors.white}
            fontSize={12}
            weight="regular"
            lineHeight={18}>
            Must have at least one number, one special character.
          </CustomText>
          <CustomText
            color={colors.white}
            fontSize={12}
            weight="regular"
            lineHeight={18}>
            Must not contain user's first/last name & email id.
          </CustomText>
          <CustomText
            color={colors.white}
            fontSize={12}
            weight="regular"
            lineHeight={18}>
            Must be different from previous password.
          </CustomText>
        </Box>
      </Box>
    );
  };

  const onChangePassword = (text: string) => {
    setPassword(text);
    setConfirmPasswordError('');
    setPasswordError('');
    setConfirmPassword('');
  };

  const onChangeConfirmPassword = (text: string) => {
    setConfirmPassword(text);
    setConfirmPasswordError('');
  };

  const onUpdatePassword = () => {
    console.log('Update Password');
  };

  const onSendOtp = () => {
    if (!showOtp) {
      const isValid = validatePassword(password);
      if (isValid && password === confirmPassword) {
        setPasswordError('');
        setConfirmPasswordError('');
        setShowOtp(true);
      } else {
        if (!isValid) {
          setPasswordError(
            'Set a stronger password, kindly refer to the guidelines below.',
          );
        } else if (password !== confirmPassword) {
          setConfirmPasswordError('Password and confirm password do not match');
        }
      }
    } else {
      if (otp.length !== 6) {
        setOtpError('Please enter a valid OTP');
      } else {
        navigation.navigate(RoutePaths.WELCOME);
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Icon.Button
        name="arrow-left"
        size={25}
        color={colors.white}
        onPress={() => navigation.goBack()}
        backgroundColor={'transparent'}
        style={styles.backButton}
      />
      <Box width={'90%'} alignSelf="center" mt={15}>
        <Input
          label="NEW PASSWORD"
          value={password}
          placeholder="8-30 characters"
          onChangeText={onChangePassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={secureTextEntry}
          error={passwordError}
          renderEndIcon={() => (
            <PasswordEyeButton
              onPress={() => setSecureTextEntry(!secureTextEntry)}
              secureTextEntry={secureTextEntry}
            />
          )}
        />
      </Box>
      <Box width={'90%'} alignSelf="center" mt={20}>
        <Input
          label="CONFIRM NEW PASSWOR"
          value={confirmPassword}
          placeholder="8-30 characters"
          onChangeText={onChangeConfirmPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={secureConfirmTextEntry}
          error={confirmPasswordError}
          renderEndIcon={() => (
            <PasswordEyeButton
              onPress={() => setSecureConfirmTextEntry(!secureConfirmTextEntry)}
              secureTextEntry={secureConfirmTextEntry}
            />
          )}
        />
      </Box>
      {showOtp && (
        <Box width={'90%'} alignSelf="center" mt={20}>
          <Input
            value={otp}
            placeholder="Enter OTP"
            onChangeText={setOtp}
            autoCapitalize="none"
            autoCorrect={false}
            error={otpError}
            keyboardType="numeric"
            hasLabel={true}
            maxLength={6}
            renderEndIcon={() => (
              <TextButton
                label={`Resend in ${timer}s`}
                onPress={() => {}}
                textStyle={styles.resendButtonStyle}
              />
            )}
          />
        </Box>
      )}

      <Box style={styles.buttonContainer}>
        <Box style={styles.textContainer}>{passwordValidationPolicyText()}</Box>
        <CustomButton
          label={showOtp ? 'UPDATE PASSWORD' : 'SEND OTP'}
          onPress={onSendOtp}
          buttonType="secondary"
        />
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  backButton: {
    left: 5,
    top: 10,
    width: 50,
    borderColor: colors.white,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    width: '90%',
    alignSelf: 'center',
  },
  textContainer: {
    bottom: 15,
  },
  resendButtonStyle: {
    color: colors.white,
    position: 'absolute',
    right: 0,
    bottom: 1,
  },
});
