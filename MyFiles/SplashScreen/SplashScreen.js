import React, {Component} from 'react';
import {View,ImageBackground, Animated, Easing} from 'react-native';
import styles from './styles'


const backGroundImage = require('../imgForScreens/backgroundimg.jpg');
const logoImage = require('../imgForScreens/logo.png');


export default class SplashScreen extends React.Component {
    constructor (props) {
        super(props)
        this.animatedValueLogo = new Animated.Value(0),
        this.animatedValuePlayButton = new Animated.Value(0)
    }
    componentDidMount () {
        this.animate()
    }
    animate () {
        
        Animated.timing(
            this.animatedValueLogo,
            {
                toValue:1,
                duration:5000,
                easing: Easing.cubic,
                useNativeDriver:true
            }
        ).start()   
    }
    render() {
        const opacity = this.animatedValueLogo.interpolate({
            inputRange:[0 , 1],
            outputRange:[0 , 1]
        })
        return(
            <ImageBackground
            source={backGroundImage}
            style={styles.backGroundStyle}>
            <View
            style={styles.viewStyle}>
                <Animated.Image
                source={logoImage}
                style={{...styles.animatedImageStyle} , {opacity}}> 
                </Animated.Image>
            </View>
            </ImageBackground>
        );
    }
}
