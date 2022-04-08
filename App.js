/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native';
import AppNavigator from './src/infrastructure/navigation/app.navigator';

const App = () => {
  return (
    <>
      <AppNavigator />
    </>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'black',
//   },
// });

export default App;
