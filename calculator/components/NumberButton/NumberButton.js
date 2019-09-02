import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const NumberButton = (props) => {
    return (
        <TouchableOpacity
            style={Styles.touchBtn}
            onPress={() => props.runFunction(props.value)}>
            <Text
                style={Styles.button}>
                {props.value}
            </Text>
        </TouchableOpacity>
    );
}

const Styles = StyleSheet.create({
    button: {
        fontSize: 50,
        color: 'white',
    },
})

export default NumberButton;