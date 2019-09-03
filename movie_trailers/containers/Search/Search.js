import React, { useState } from "react";
import { View, TextInput, StyleSheet } from 'react-native'


const Search = (props) => {


    const [userInput, updateUserInput] = useState('');

    
    let launchMovieRequest = () => {
        let query = userInput.replace(/[ ]/g, '%20');
        props.loadmovies(query)
    }

    return (
        <View>
            <TextInput
                style={{ backgroundColor: 'whitesmoke' }}
                value={userInput}
                onSubmitEditing={launchMovieRequest}
                onChangeText={(text) => updateUserInput(text)}></TextInput>
    
        </View>
    );

}

export default Search;