import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-native";
import { Text, Image, StyleSheet, View, Button } from 'react-native';

const SingleMovie = (props) => {
    //Object that hold movie info
    const [show, updateShow] = useState({})

    
    //Method that gets movie details
    let getMovieDetails = () => {
        let url = `http://www.omdbapi.com/?i=${props.match.params.showId}&apikey=`;
        axios.get(url)
            .then(result => updateShow(result.data))
            .catch(err => alert('err'))
    }

    useEffect(() => {
        getMovieDetails()
    })

    return (
        <View style={Styles.singleMovie}>
            <Link to='/' ><Text style={Styles.title}>⬅</Text></Link>
            <Text style={Styles.title}>{show.Title} ({show.Year})</Text>
            <Text style={Styles.rating}>{show.Rated ? 'Rated: ' + show.Rated : null}</Text>
            <Image
                style={Styles.image}
                source={{ uri: (show.Poster ? show.Poster : null) }}
            />
            <Text style={Styles.h2}>Plot</Text>
            <Text>{show.Plot}</Text>
            <Text style={Styles.h2}>Genre</Text>
            <Text>{show.Genre}</Text>
            <Text style={Styles.h2}>Released</Text>
            <Text>{show.Released}</Text>
            <Text style={Styles.h2}>Actors</Text>
            <Text>{show.Actors}</Text>
        </View >
    )
}

const Styles = StyleSheet.create({
    singleMovie: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 50,

    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    rating: {
        fontSize: 30
    },
    h2: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    image: {
        height: 250,
        width: 250,
        alignSelf: 'center',
        borderColor: 'white',
        borderWidth: 2
    }
});
export default SingleMovie