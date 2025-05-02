import {Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomText from '../../components/CustomText';
import Box from '../../components/Box';
import colors from '../../theme/color';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthNavigationProps} from '../../types/navigation';
import {validateEmail} from '../../utils/regex';
import {RoutePaths} from '../../constants/RoutePaths';

type Props = AuthNavigationProps<'EmailLogin'>;

export default function EmailLogin({navigation}: Props) {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  const onNext = () => {
    // Validate email format
    const isValid = validateEmail(email);
    if (isValid) {
      setError('');
      navigation.navigate(RoutePaths.EMAILPASSWORDLOGIN, {email});
    } else {
      setError('Please enter valid email format');
    }
  };

  const handleEmailChange = (text: string) => {
    setError('');
    setEmail(text);
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

      <Box>
        <Box
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          mt={50}>
          <Image
            source={require('../../assets/images/groww.png')}
            style={styles.logo}
          />
          <CustomText fontSize={30} color={colors.white} weight="semibold">
            Groww
          </CustomText>
        </Box>
        <Box width={'90%'} alignSelf="center" mt={40}>
          <Input
            label="EMAIL ADDRESS"
            value={email}
            placeholder="Eg: me@gmail.com"
            onChangeText={handleEmailChange}
            error={error}
            autoCapitalize="none"
            autoCorrect={false}
            onEndEditing={onNext}
          />
        </Box>
      </Box>
      <Box style={styles.buttonContainer}>
        <CustomButton
          label="NEXT"
          onPress={onNext}
          buttonType={!email || error !== '' ? 'disbale' : 'secondary'}
          disabled={!email || error !== ''}
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
  logo: {width: 50, height: 50, right: 10},
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    width: '90%',
    alignSelf: 'center',
  },
  backButton: {
    left: 20,
    top: 10,
    width: 50,
    borderColor: colors.white,
  },
});
