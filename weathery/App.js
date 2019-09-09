/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import Search from './containers/Search/Search'
import React, { useState } from "react";
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';


const App = () => {

  //Array that containes the list of cities by their Id
  const [cities, updateCities] = useState([])

  return (
    <NativeRouter >
      <View style={Styles.app} >
        <Switch>
          <Route exact path="/" component={Search} />
          {/* <Route path="/cityList" component={cityList} /> */}
          {/* <Route path="/weather/:cityId" component={City} /> */}
        </Switch>
      </View>
    </NativeRouter>
  );
};

const Styles = StyleSheet.create({
  app: {
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    flex: 1,
    height:'100%' 
  }
});

export default App;
