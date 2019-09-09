import React, { useState } from "react";
import axios from 'axios';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    Button,
    Image
} from 'react-native';


const Search = () => {

    // Track user input
    const [userInput, updateUserInput] = useState('');
    const [showCity, toggleShowCity] = useState(true);
    const [city, changeCurrentCity] = useState({
        name: 'auburn', main: {
            temp: 280.32,
            pressure: 1012,
            humidity: 81,
            temp_min: 279.15,
            temp_max: 281.15
        },
        weather: [
            {
                id: 300,
                main: "Drizzle",
                description: "light intensity drizzle",
                icon: "09d"
            }
        ],
    })

    const getCityId = () => {
        let query = userInput.replace(/[ ]/g, '%20');
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=68d335c63a691a0a4810c97462339b11`)
            .then(res => {
                changeCurrentCity(res.data)
                updateUserInput('')
                toggleShowCity(true)
            })
            .catch(err => console.log(err))
    }

    return (
        <View style={Styles.Search}>
            <TextInput
                placeholder='Type in a city name e.g "London"'
                style={Styles.Input}
                value={userInput}
                onSubmitEditing={getCityId}
                onChangeText={(text) => updateUserInput(text)}>
            </TextInput>
            {
                showCity
                    ?
                    <View style={Styles.city}>
                        <View style={Styles.information}>
                            <View style={Styles.details}>
                                <Text style={Styles.cityName}>{city.name}</Text>
                                <Text style={Styles.cityMain}>Temp: {city.main.temp}</Text>
                                <Text style={Styles.cityMain}>Humidity: {city.main.humidity}</Text>
                                <Text style={Styles.cityMain}>Pressure: {city.main.pressure}</Text>
                            </View>
                            <View style={Styles.icon}>
                                <Image style={{ height: 150, width: 150 }} source={{ uri: `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png` }} />
                            </View>
                        </View>
                        <Button color='whitesmoke' title="View Weather Info"></Button>
                    </View>
                    :
                    null
            }
        </View>
    );

}

const Styles = StyleSheet.create({
    Search: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    Input: {
        fontSize: 40,
    },
    city: {
        height: 200,
        backgroundColor: '#FE5F55',
        borderRadius: 20,
        padding: '2%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    information: {
        display: 'flex',
        flexDirection: 'row'
    },
    cityName: {
        fontSize: 35,
        color: 'whitesmoke',
        textAlign: 'left',
        textTransform: 'uppercase'
    },
    cityMain: {
        fontSize: 15,
        color: 'whitesmoke',
        textAlign: 'left'
    },
    details: {
        flex: 2
    },
    icon: {
        flex: 1
    }
});

export default Search;