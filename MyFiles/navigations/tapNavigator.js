import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './navigstyles'

const AboutMeTap = createBottomTabNavigator();

function ProfilePage() {
    return(
        <View style={styles.tapMenuPagesStyle}>
            <Text>
                THIS IS PROFILE PAGE 
            </Text>
        </View>
    )
}
function SettingPage() {
    return(
        <View style={styles.tapMenuPagesStyle}>
            <Text>
                THIS IS SETIING PAGE
            </Text>
        </View>
    )
}
export class AboutMe extends React.Component {
    render() {
        return(
            <AboutMeTap.Navigator tabBarOptions={{...styles.aboutMeNavigStyle , labelStyle:{...styles.labelStyle}}}>
            <AboutMeTap.Screen name="profile" component={ProfilePage}/>
            <AboutMeTap.Screen name="settings" component={SettingPage}/>
            </AboutMeTap.Navigator>
        )
    }
}