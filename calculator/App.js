/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Calculator from './container/Calculator/Calculator';
import {View} from 'react-native';


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Calculator></Calculator>
    </View>
  );
};

export default App;
