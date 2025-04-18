import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/welcome';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      {/* other screens like Details, Modal etc. */}
    </Stack.Navigator>
  );
}
