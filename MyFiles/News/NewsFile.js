import React, {Component} from 'react';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import {View , Text} from 'react-native';
import {WebView} from 'react-native-webview';
import NetInfo from '@react-native-community/netinfo'
import styles from './styles'

class NewsWebView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isShow:true
        }
    }

    componentDidMount() {
        this.showInternetConnection()
    }
    componentWillUnmount() {
        this.showInternetConnection()
    }

    showInternetConnection = () => {
        NetInfo.addEventListener(state => {
             if(state.isConnected === false) {
                alert("NO INTERNET CONNECTION")
             }
          });
    }

    showLoading(){
        this.setState({
            isShow:false
        })
    }
    render() {
        return(
        <View style={styles.viewStyle}>
            <WebView onLoad={() => this.showLoading()} source={{uri: 'https://www.cybersport.ru/'}}/>
            {this.state.isShow && <LoadingScreen/>}
        </View>        
        )
    }
}
export default NewsWebView