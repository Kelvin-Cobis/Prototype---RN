import {
    Image,
    ImageBackground,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
import React, { Component } from 'react';
import { Avatar } from 'react-native-material-ui';
    
export default class IconExample extends Component {
    
    render() {
        return(
        <View>
            <Avatar text="A" />
    
            <Avatar icon="grade" />
            <Avatar icon="person" iconColor="blue" iconSize={35}/>
            <Avatar icon="history" iconSize={20} />
            <Avatar icon="mic" size={75} />
        </View>
        );

    }
}