import React, {Component, useCallback} from 'react';
import {View, Text, ImageBackground, Image, Animated} from 'react-native';
import styles from './styles';

const backGroundImageLoading = require('../imgForScreens/loadingBackground.jpg');
const loadingImg = require('../imgForScreens/loadingimg.png');

const arr = [];

for (let i = 0;i < 6;i++) {
    arr.push(i);
}

export default class LoadingScreen extends React.Component {
    constructor () {
        super();
        this.animatedValue = [];
        arr.forEach((value) => {
            this.animatedValue[value] = new Animated.Value(0);
        });
    }
    componentDidMount () {
        this.animate();
    }
    animate () {
        const animations = arr.map((item) => Animated.timing(

            this.animatedValue[item],
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            },
            this.animatedValue[item].setValue(0),
        ));

        Animated.sequence(animations).start(() => this.animate());
    }
    render() {
        const animations = arr.map((a, i) => <Animated.View key={i} style={{opacity: this.animatedValue[a] , ...styles.loadingBalls}} />);

        return(
            <ImageBackground
                source={backGroundImageLoading}
                style={styles.backGorundImgStyle}>
                <View style={styles.viewStyle}>
                    <Image source={loadingImg}>
                    </Image>
                </View>
                <View style={styles.animationsViewStyle}>
                    {animations}
                </View>
            </ImageBackground>
        );
    }
}