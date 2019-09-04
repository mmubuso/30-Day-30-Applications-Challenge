
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button
} from 'react-native';
import React from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import Search from './containers/Search/Search';
import SingleMovie from './components/SingleMovie/SingleMovie';


const App = () => {

  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route exact path="/" component={Search} />
        <Route path="/singleMovie/:showId" component={SingleMovie} />
      </View>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
    padding: 10,
  },
});

export default App;
