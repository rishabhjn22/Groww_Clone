import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import {navigationRef} from './NavigationService';

export default function RootNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
