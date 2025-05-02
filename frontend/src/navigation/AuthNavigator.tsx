import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EmailLogin from '../screens/emailLogin/EmailLogin';
import Welcome from '../screens/welcome';
import {RootStackParamList} from '../types/navigation';
import EmailPasswordLogin from '../screens/emailLogin/EmailPasswordLogin';
import ChangePassword from '../screens/changePassword';

const Stack = createStackNavigator<RootStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EmailLogin"
        component={EmailLogin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EmailPasswordLogin"
        component={EmailPasswordLogin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
