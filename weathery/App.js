/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import Search from './containers/Search/Search';
import City from './containers/City/Cityy';
import React, { useState } from "react";
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import {
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';


const App = () => {

  //Array that containes the list of cities by their Id
  const [cities, updateCities] = useState([])
  const [showCityName, ToggleShowCityName] = useState(false)
  const [activeCity, updateActiveCity] = useState('Auburn')


  // Pass props to components

  return (
    <NativeRouter >
      <View style={Styles.app} >

        <Switch>
          <Route exact path="/" component={Search} />
          {/* <Route path="/cityList" component={cityList} /> */}
          <Route path="/weather/:cityId/:cityName" component={City} />
        </Switch>
      </View>
      <View style={Styles.navbar}>
        <Text style={Styles.navText}>Cities</Text>
        <Link to='/' ><Text style={Styles.navText}>+</Text></Link>

      </View>
    </NativeRouter>
  );
};

const Styles = StyleSheet.create({
  app: {
    display: 'flex',
    flex: 1,
    height: '100%'
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FE5F55',
    height: 55,
    paddingLeft: 10,
    paddingRight: 10
  },
  navText: {
    fontSize: 30,
    color: 'whitesmoke'
  }
});

export default App;
