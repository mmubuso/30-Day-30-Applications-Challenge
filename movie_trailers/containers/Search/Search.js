import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Search = (props) => {


    const [userInput, updateUserInput] = useState('');
    const [searchQuery, updateSearchQuery] = useState('');

    let convertToSearchQuery = () => {
        let query = userInput.replace(/[ ]/g, '%20');
        updateSearchQuery(query);
    }



    return (
        <View>
            <TextInput
                style={{ backgroundColor: 'whitesmoke' }}
                value={userInput}
                onEndEditing={convertToSearchQuery}
                onChangeText={(text) => updateUserInput(text)}></TextInput>
            <TextInput value={searchQuery}></TextInput>
        </View>
    );

}

export default Search;