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
import { Link } from 'react-router-native'
// City Object For Testing

const auburn = {
    name: 'auburn',
    main: {
        temp: 280.32,
        pressure: 1012,
        humidity: 81,
        temp_min: 279.15,
        temp_max: 281.15
    },
    weather: [
        {
            id: 200,
            main: "Drizzle",
            description: "light intensity drizzle",
            icon: "09d"
        }
    ],
    id: 4956976
}


const Search = () => {

    // Track user input
    const [userInput, updateUserInput] = useState('');
    const [showCity, toggleShowCity] = useState(false);
    const [city, changeCurrentCity] = useState(auburn)

    const getCityId = () => {
        let query = userInput.replace(/[ ]/g, '%20');
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=2754590248e99a371c9a0f245a6d9d50`)
            .then(res => {
                console.log(res.data)
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
                                <Text></Text>
                                <Text style={Styles.cityMain}>{city.weather[0].description}</Text>
                            </View>
                            <View style={Styles.icon}>
                                <Image style={{ height: 150, width: 150 }} source={{ uri: `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png` }} />
                            </View>
                        </View>
                        {/* <Button color='whitesmoke' title="View Weather Info"></Button> */}
                        <Link to={`/weather/${city.id}/${city.name}`}>
                            <Text style={Styles.link}>
                                View Weather Info
                            </Text>
                        </Link>
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
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
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
    },
    link: {
        textAlign: 'center',
        color: 'whitesmoke'
    }
});

export default Search;