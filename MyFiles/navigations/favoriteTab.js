import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import MovieGame from '../MovieFinder/MovieFinderScreen'
import React, { Component } from 'react';
import FavoriteList from '../MovieFinder/FavScreen'
import styles from './navigstyles'

const FavoriteFilms = createBottomTabNavigator();

export class MovieFinder extends React.Component {
    render() {
        return(
            //<NavigationContainer>
            <FavoriteFilms.Navigator tabBarOptions={{...styles.aboutMeNavigStyle , labelStyle:{...styles.labelStyle}}}>
            <FavoriteFilms.Screen name="Films" component={MovieGame}/>
            <FavoriteFilms.Screen name="Favorite" component={FavoriteList}/> 
            </FavoriteFilms.Navigator>
            //</NavigationContainer>
        )
    }
} 