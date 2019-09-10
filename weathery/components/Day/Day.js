import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'

const Day = (props) => {

    let date = props.date.slice(5, 10)


    return (
        <TouchableOpacity onPress={() => props.updateActiveCity(props.index)} style={Styles.today}>
            <Text style={Styles.dateDetails}>{date}</Text>
            <Image style={{ height: 60, width: 60 }} source={{ uri: `http://openweathermap.org/img/wn/${props.icon}@2x.png` }} />
            <Text style={Styles.dateDetails}>{props.temp}</Text>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    today: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    dateDetails: {
        color: 'whitesmoke',
        textTransform: 'uppercase'
    }
})
export default Day
