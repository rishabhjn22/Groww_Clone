import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EmailLogin from '../screens/emailLogin';
import Welcome from '../screens/welcome';
import {RootStackParamList} from '../types/navigation';

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
    </Stack.Navigator>
  );
}
