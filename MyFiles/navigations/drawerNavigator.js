import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {Component} from 'react';
//import {сюда я должен написать имена скринов через запятую чтобы импортнуть} from '../screens/appScreens'
import {NavigationContainer} from '@react-navigation/native'
import {ToolsStackNavigator} from './stackNavigator'
import {GamesStackNavigator} from './stackNavigator'
import {AboutMe} from './tapNavigator'
import styles from './navigstyles'
import NewsWebView from '../News/NewsFile'
import {AppState} from 'react-native'


const MainMenu = createDrawerNavigator();
export class MainMenuFunc extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
          appStateList : AppState.currentState
        }
      }
    listenerAppState = nextAppState => {
        if(this.state.appStateList.match(/background|inactive/) && nextAppState == "active"){
          alert("Welcome Back")
        }
        this.setState({appStateList:nextAppState})
      }
      componentDidMount(){
        AppState.addEventListener("change", this.listenerAppState)
      }
      componentWillUnmount(){
        AppState.removeEventListener("change" , this.listenerAppState)
      }
    render(){
        return(
    <NavigationContainer>
    <MainMenu.Navigator drawerStyle={styles.drawerStyle} drawerContentOptions={{labelStyle: styles.labelStyleColor}}>
    <MainMenu.Screen name="Новости игр." component ={NewsWebView}/>
    <MainMenu.Screen name="Развлечения." component ={GamesStackNavigator}/>
    <MainMenu.Screen name="Инструменты." component ={ToolsStackNavigator}/>
    <MainMenu.Screen name="Обо мне." component ={AboutMe}/>
    </MainMenu.Navigator>
    </NavigationContainer>
    )
 }
};
