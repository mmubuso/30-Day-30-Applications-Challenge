import React from 'react';
import {  Route, Link } from "react-router-native";

import { View, Image, Text, StyleSheet } from 'react-native'

const Movies = (props) => {
    return (
        <View>
            
            <Image
                style={{width: 200, height: 200}}
                source={{uri: props.image}}
            />
            <Link
                to={`/singleMovie/${props.showId}`}>
                <Text>{props.title}</Text>
            </Link>
            <Text>{props.type}</Text>
            <Text>{props.year}</Text>
        </View>
    );
}

export default Movies;

