import React from 'react';

import { View, Image, Text, StyleSheet } from 'react-native'

const Movies = (props) => {
    return (
        <View>
            
            <Image
                style={{width: 200, height: 200}}
                source={{uri: props.image}}
            />
            <Text>{props.title}</Text>
            <Text>{props.type}</Text>
            <Text>{props.year}</Text>
        </View>
    );
}

export default Movies;

// Poster
// :
// "https://m.media-amazon.com/images/M/MV5BMTE5NzIwMGUtYTE1MS00MDUxLTgyZjctOWVkZDAxM2M4ZWQ4XkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_SX300.jpg"
// Title
// :
// "Naruto: Shippûden"
// Type
// :
// "series"
// Year
// :
// "2007–2017"
// imdbID
// :
// "tt0988824