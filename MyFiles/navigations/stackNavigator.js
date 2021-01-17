import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {Text , View , TouchableOpacity , ImageBackground , Image} from 'react-native'
import Calculator from '../CalcFiles/Calculator';
import styles from './navigstyles'
import {MovieFinder} from './favoriteTab'

const ToolsStack = createStackNavigator();
const GamesStack = createStackNavigator();

const MovieFinderBack = require('../imgForScreens/movieDrawerBack.jpg')
const CalcBack = require('../imgForScreens/calcDrawerBack.jpg')
const buttonMovieFinder = require('../imgForScreens/buttonMovieFinder.png')
const buttonCalculatorImage = require('../imgForScreens/calculatorButtonImage.png')

function Tools({navigation}) {
    return(
        <View style={{flex:1}}>
            <ImageBackground source={CalcBack} style={{flex:1}}>
            <TouchableOpacity onPress={() => navigation.navigate("calcScreen")} style={styles.touchOpForToolsStyle} >
                <Image source={buttonCalculatorImage}>

                </Image>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}
 export class ToolsStackNavigator extends React.Component {
    render() {
        return(
                <ToolsStack.Navigator>
                <ToolsStack.Screen name="Инструменты" component={Tools} options={{headerShown:false}}/>
                <ToolsStack.Screen  name="calcScreen" component={Calculator} options={{headerShown:false}}/>
                </ToolsStack.Navigator>           
        )
    }
}
function Games({navigation}) {
    return(
        <View style={{flex:1}}>
            <ImageBackground source={MovieFinderBack} style={{flex:1}}>
            <TouchableOpacity onPress={() => navigation.navigate("filmGame")}  style={styles.touchOpForGamesStyle}>
                <Image source={buttonMovieFinder}>
                    
                </Image>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}
export class GamesStackNavigator extends React.Component {
    render() {
        return(
            <GamesStack.Navigator>
            <GamesStack.Screen name="Развлечения" component={Games} options={{headerShown:false}}/>
            <GamesStack.Screen name="filmGame" component={MovieFinder} options={{headerShown:false}}/>
            </GamesStack.Navigator>
        )
    }
}
