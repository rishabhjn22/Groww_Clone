import {Image, Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomText from '../../components/CustomText';
import Box from '../../components/Box';
import colors from '../../theme/color';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
import {AuthNavigationProps} from '../../types/navigation';
import {RoutePaths} from '../../constants/RoutePaths';
import PasswordEyeButton from '../../components/PasswordEyeButton';

type Props = AuthNavigationProps<'EmailPasswordLogin'>;

export default function EmailPasswordLogin({navigation, route}: Props) {
  const [password, setPassword] = useState<string>('');
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  return (
    <SafeAreaView style={styles.container}>
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
            value={route.params.email}
            placeholder="Eg: me@gmail.com"
            onFocus={() => {
              navigation.goBack();
            }}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </Box>
        <Box width={'90%'} alignSelf="center" mt={5}>
          <Input
            label="ENTER PASSWORD"
            value={password}
            placeholder=""
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={secureTextEntry}
            renderEndIcon={() => (
              <PasswordEyeButton
                onPress={() => setSecureTextEntry(!secureTextEntry)}
                secureTextEntry={secureTextEntry}
              />
            )}
          />
          <Pressable
            onPress={() => navigation.navigate(RoutePaths.CHANGEPASSWORD)}>
            <CustomText
              fontSize={14}
              color={colors.primary}
              style={styles.forgetPasswordText}>
              Forgot Password?
            </CustomText>
          </Pressable>
        </Box>
      </Box>
      <Box style={styles.buttonContainer}>
        <CustomButton
          label="ENTER"
          onPress={() => navigation.navigate(RoutePaths.CHANGEPASSWORD)}
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
  forgetPasswordText: {
    alignSelf: 'flex-end',
    marginTop: 5,
  },
});
