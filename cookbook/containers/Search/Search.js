import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';


export default class Search extends Component {
    render() {
        return (
            <View>
                <SearchBar
                    placeholder="Type Here..."
                    value={'hello'}
                />
            </View>
        )
    }
}
