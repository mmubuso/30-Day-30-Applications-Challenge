import React, { Component } from "react";
import axios from 'axios';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image
} from 'react-native';
import { Link } from 'react-router-native';
import Day from "../../components/Day/Day";

export default class Cityy extends Component {

    state = {
        cityInfo: {
            list: [
                {
                    dt: 1485799200,
                    main: {
                        temp: 261.45,
                        temp_min: 259.086,
                        temp_max: 261.45,
                        pressure: 1023.48,
                        sea_level: 1045.39,
                        grnd_level: 1023.48,
                        humidity: 79,
                        temp_kf: 2.37
                    },
                    weather: [
                        {
                            id: 800,
                            main: "Clear",
                            description: "clear sky",
                            icon: "02n"
                        }
                    ],
                    clouds: {
                        all: 8
                    },
                    wind: {
                        speed: 4.77,
                        deg: 232.505
                    },
                    snow: {},
                    sys: {
                        pod: "n"
                    },
                    dt_txt: "2017-01-30 18:00:00"
                },
            ]
        },
        activeDay: {
            weather: [
                {
                    icon: '01n',
                    description: "clear sky",
                }
            ],
            main: {
                temp: '',
                pressure: '',
                humidity: '',
                temp_min: '',
                temp_max: ''
            },
        }
    }

    getCityWeatherInfo = () => {
        let url = `https://api.openweathermap.org/data/2.5/forecast?id=${this.props.match.params.cityId}&units=imperial&appid=2754590248e99a371c9a0f245a6d9d50`
        console.log(url)
        axios.get(url)
            .then(async (res) => {
                await this.setState({
                    cityInfo: res.data,
                    activeDay: res.data.list[0]
                })
                console.log(this.state.activeDay)
            })
            .catch(err => console.log(err))
    }

    updateActiveCity = (index) => {
        this.setState({activeDay: this.state.cityInfo.list[index]})
    }

    componentDidMount() {
        this.getCityWeatherInfo()
    }
    render() {

        //destructure state
        const { activeDay, cityInfo } = this.state
        const { pressure, humidity, temp_max, temp_min } = activeDay.main
        const { description } = activeDay.weather[0]

        // iterate through weather 
        const weatherSchedule = cityInfo.list.map((day, index) => {
            if ((index + 1) % 8 === 0) {
                return (
                    <Day key={day.dt}
                        updateActiveCity={this.updateActiveCity}
                        index={index}
                        date={day.dt_txt}
                        icon={day.weather[0].icon}
                        temp={day.main.temp}
                    />
                )
            }
        })

        


        return (
            <View style={Styles.city}>
                <Text style={Styles.cityName}>{this.props.match.params.cityName}</Text>
                <View style={Styles.icon}>
                    <Image style={{ height: 200, width: 200 }} source={{ uri: `http://openweathermap.org/img/wn/${activeDay.weather[0].icon}@2x.png` }} />
                </View>
                <View style={Styles.degreeContainer}>
                    <Text style={Styles.degree}>{activeDay.main.temp}°</Text>
                    <Text style={Styles.cityMain}>{description}</Text>
                    <Text style={Styles.cityMain}>High: {temp_max} </Text>
                    <Text style={Styles.cityMain}>Low: {temp_min}</Text>
                    <Text style={Styles.cityMain}>Humidity: {humidity} </Text>
                    <Text style={Styles.cityMain}>Pressure: {pressure}</Text>
                </View>
                <View style={Styles.schedule}>
                    {weatherSchedule}
                </View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    city: {
        height: '100%',
        backgroundColor: '#FE5F55',
        paddingTop: 50,
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',
        justifyContent: 'space-around'
    },
    cityName: {
        fontSize: 30,
        color: 'whitesmoke',
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    degree: {
        fontSize: 110,
        color: 'whitesmoke'
    },
    degreeContainer: {
        flex: 1
    },
    cityMain: {
        fontSize: 20,
        color: 'whitesmoke',
        textAlign: 'left'
    },
    schedule: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row'
    },
    icon: {
        flex: 1,
        alignSelf: 'flex-end'
    },
    link: {
        textAlign: 'center',
        color: 'whitesmoke'
    }
});
