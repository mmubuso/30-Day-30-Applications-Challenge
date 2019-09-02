import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Results = (props) => {
    return (
        <View style={styles.results}>
            <Text style={styles.inputValue}>{props.display}</Text>
            <Text style={styles.totalValue}>{props.total}</Text>
        </View>
        
    );
}

export default Results;

const styles = StyleSheet.create({
    inputValue: {
        textAlign: "right",
        fontSize: 85,
        color: 'white'
    },
    totalValue: {
        textAlign: "right",
        fontSize: 25,
        color: 'whitesmoke'
    },
    results: {
        flex: 1.5,
        backgroundColor: 'grey'
    }

})