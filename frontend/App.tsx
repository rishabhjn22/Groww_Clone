import React from 'react';
import RootNavigator from './src/navigation/RootNavigator'; // Adjust the path as per your folder structure
import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemeProvider} from './src/context/ThemeContext';
import {StyleSheet} from 'react-native';

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.safeArea}>
        <RootNavigator />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
