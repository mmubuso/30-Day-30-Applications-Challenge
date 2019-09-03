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
            })
            .catch(err => alert('err'))
    }

    let launchMovieRequest = () => {
        let query = userInput.replace(/[ ]/g, '%20');
        loadMovieDataBase(query)
    }

    let showsList = (shows) => shows.map(movie => {
        return (
            <Movies
                key={movie.imdbID}
                image={movie.Poster ? movie.Poster : null}
                title={movie.Title}
                type={movie.Type}
                year={movie.Year} />
        )
    })

    let moviesList = showsList(movies.filter(movie => movie.Type === 'movie'))
    
    

    let seriesList = showsList(movies.filter(movie => movie.Type !== 'movie'))


    return (
        <View>
            <TextInput
                style={{ backgroundColor: 'whitesmoke' }}
                value={userInput}
                onSubmitEditing={launchMovieRequest}
                onChangeText={(text) => updateUserInput(text)}>
            </TextInput>
            <Text>Series</Text>
            <ScrollView horizontal>
                {moviesList}
            </ScrollView>
            <Text>Movies</Text>
            <ScrollView horizontal>
                {seriesList}
            </ScrollView>
        </View>
    );

}

export default Search;