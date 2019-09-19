/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Search from './containers/Search/Search';

const App = () => {
  return (
    <Search />
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  }
});

export default App;
