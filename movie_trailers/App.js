
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import Search from './containers/Search/Search';


const Topic = ({ match }) => (
  <Text style={styles.topic}>{match.params.topicId}</Text>
);

const Topics = ({ match }) => (
  <View>
    <Text style={styles.header}>Topics</Text>
    <View>
      <Link
        to={`${match.url}/rendering`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Rendering with React</Text>
      </Link>
      <Link
        to={`${match.url}/components`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Components</Text>
      </Link>
      <Link
        to={`${match.url}/props-v-state`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Props v. State</Text>
      </Link>
    </View>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <Text style={styles.topic}>Please select a topic.</Text>}
    />
  </View>
);


const App = () => {

  const [movies, updateMovies] = useState()

  let loadMovieDataBase = (searchQuery) => {
    let url = `http://www.omdbapi.com/?s=${searchQuery}&apikey=`
    axios.get(url)
      .then(results => updateMovies(results.data.Search))
      .catch(err => alert('err'))
  }

  //configure search component to pass loadmovies function
  let SearchComponent = () => <Search loadmovies={loadMovieDataBase}/>

  return (
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Home</Text>
          </Link>
          <Link to="/topics" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Topics</Text>
          </Link>
        </View>

        <Route exact path="/" component={SearchComponent} />

        <Route path="/topics" component={Topics} />
      </View>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default App;
