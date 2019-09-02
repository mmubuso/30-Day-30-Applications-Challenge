// Calculator app
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Results from '../../components/Results/Results';
import NumberButton from '../../components/NumberButton/NumberButton';

class Calculator extends Component {

    state = {
        displayValues: '',
        addingToNumber2: false,
        total: null,
    }

    //handle Entry
    handleChange = (value) => {
        let text = this.state.displayValues
        text += value
        this.setState({ displayValues: text })
    }

    // checks whether this is a legal act
    validateRequest = () => {
        let arr = this.splitString()
        if (arr.length != 3) {
            alert('Not valid input! try again')
            this.clearDisplay()
            return
        }
        this.checkMethodToRunAndRun(arr)
    }

    // checks which arthimetic function to apply
    checkMethodToRunAndRun = ([value1, symbol, value2]) => {
        value1 = Number(value1);
        value2 = Number(value2);
        symbol === 'x'
            ?
            this.multiply(value1, value2)
            :
            symbol === '/'
                ?
                this.divide(value1, value2)
                :
                symbol === '+'
                    ?
                    this.add(value1, value2)
                    :
                    symbol === '-'
                        ?
                        this.minus(value1, value2)
                        :
                        alert('no idea')
    }

    // turns string into array
    splitString = () => {
        return this.state.displayValues.split(' ');
    }

    //clears the display field
    clearDisplay = async () => {
        await this.setState({ displayValues: '' })
        this.setState({total : ''})
    }

    //handle addition
    add = (a, b) => {
        this.setState({ total: a + b });
    }

    //handle subtraction
    minus = (a, b) => {
        this.setState({ total: a - b });
    }

    // handle divison
    divide = (a, b) => {
        this.setState({ total: a / b });
    }

    //handle multiplication
    multiply = (a, b) => {
        this.setState({ total: a * b });
    }



    render() {
        return (
            <View style={Styles.calculator}>
                <Results
                    display={this.state.displayValues}
                    total={this.state.total}>
                </Results>
                <View style={Styles.row1}>
                    <NumberButton
                        runFunction={this.handleChange}
                        value={'7'}>
                    </NumberButton>
                    <NumberButton
                        runFunction={this.handleChange}
                        value={'8'}>
                    </NumberButton>
                    <NumberButton
                        runFunction={this.handleChange}

                        value={'9'}>
                    </NumberButton>
                    <NumberButton
                        runFunction={this.handleChange}

                        value={' / '}>
                    </NumberButton>
                </View>
                <View style={Styles.row2}>
                    <NumberButton
                        runFunction={this.handleChange}

                        value={'4'}>
                    </NumberButton>
                    <NumberButton
                        runFunction={this.handleChange}

                        value={'5'}>
                    </NumberButton>
                    <NumberButton
                        runFunction={this.handleChange}

                        value={'6'}>
                    </NumberButton>
                    <NumberButton
                        runFunction={this.handleChange}

                        value={' x '}>
                    </NumberButton>
                </View>
                <View style={Styles.row3}>
                    <NumberButton
                        runFunction={this.handleChange}

                        value={'1'}>
                    </NumberButton>
                    <NumberButton
                        runFunction={this.handleChange}

                        value={'2'}>
                    </NumberButton>
                    <NumberButton
                        runFunction={this.handleChange}

                        value={'3'}>
                    </NumberButton>
                    <NumberButton
                        runFunction={this.handleChange}

                        value={' - '}>
                    </NumberButton>
                </View>
                <View style={Styles.row4}>
                    <NumberButton
                        runFunction={this.handleChange}

                        value={'0'}>
                    </NumberButton>
                    <NumberButton
                        runFunction={this.clearDisplay}
                        value={'A/C'}>
                    </NumberButton>
                    <NumberButton
                        runFunction={this.validateRequest}
                        value={'='}>
                    </NumberButton>
                    <NumberButton
                        runFunction={this.handleChange}
                        value={' + '}>
                    </NumberButton>
                </View>

            </View>
        );
    }
}

export default Calculator;


const Styles = StyleSheet.create({
    calculator: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 50,
        paddingBottom: 30,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'black',
    },
    row1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    row2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    row3: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    row4: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
// background-color: #f8f9d2;
// background-image: linear-gradient(315deg, #f8f9d2 0%, #e8dbfc 74%);
// background-color: #f8f9d2;
// background-image: linear-gradient(315deg, #f8f9d2 0%, #e8dbfc 74%);