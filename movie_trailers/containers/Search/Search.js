import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, ScrollView } from 'react-native'
import axios from 'axios';
import Movies from '../../components/Movies/Movies';




const Search = () => {


    const [userInput, updateUserInput] = useState('');
    const [movies, updateMovies] = useState([])

    let loadMovieDataBase = (searchQuery) => {
        let url = `http://www.omdbapi.com/?s=${searchQuery}&apikey=`
        axios.get(url)
            .then(results => {
                results.data.Search ?
                    updateMovies(results.data.Search)
                    :
                    alert('No shows found for current Search')
            }, updateUserInput(''))
            .catch(err => console.log('err'))

    }

    let launchMovieRequest = () => {
        let query = userInput.replace(/[ ]/g, '%20');
        loadMovieDataBase(query)
    }

    let showsList = (shows) => shows.map(movie => {
        return (
            <Movies
                key={movie.imdbID}
                showId={movie.imdbID}
                image={movie.Poster ? movie.Poster : null}
                title={movie.Title}
                type={movie.Type}
                year={movie.Year} />
        )
    })

    let moviesList = showsList(movies.filter(movie => movie.Type === 'movie'))



    let seriesList = showsList(movies.filter(movie => movie.Type !== 'movie'))


    return (
        <View style={Styles.Search}>

            <TextInput
                placeholder='Search for a show'
                style={Styles.Input}
                value={userInput}
                onSubmitEditing={launchMovieRequest}
                onChangeText={(text) => updateUserInput(text)}>
            </TextInput>
            <Text
                style={Styles.title}>{moviesList.length > 0 ? "MOVIES" : null}</Text>
            <ScrollView horizontal
                style={Styles.shows}>
                {moviesList}
            </ScrollView>
            <Text
                style={Styles.title}>{seriesList.length > 0 ? "SERIES" : null}</Text>
            <ScrollView horizontal
                style={Styles.shows}>
                {seriesList}
            </ScrollView>
        </View>
    );

}

const Styles = StyleSheet.create({
    Search: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    Input: {
        fontSize: 40,
        flex: 0.2
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        flex: 0.2
    },
    shows: {
        flex: 2
    }
});
export default Search;