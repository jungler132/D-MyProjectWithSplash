import React, { Component } from 'react';
import {MainMenuFunc} from './MyFiles/navigations/drawerNavigator'
import SplashScreen from './MyFiles/SplashScreen/SplashScreen';

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSplashWasActive:false
    }
  }
  componentDidMount(){
    setTimeout(() => {this.setState({isSplashWasActive:true})} , 8000)
  }
    render() {
      if(this.state.isSplashWasActive === false){
        return(
          <SplashScreen/>
        )
      }
      else if(this.state.isSplashWasActive === true){
        return(
          <MainMenuFunc/>
      )
    }
  }
}
