import { Avatar } from 'react-native-material-ui';
import { Container, Header, Content, Icon } from 'native-base';
import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { TouchableNativeFeedback } from 'react-native';

import {
  Image,
  ImageBackground,
  Platform,
  TouchableHighlight,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
} from 'react-native';


export default class HomeScreen extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground style={styles.welcomeImage} source={require('../assets/images/inicio.png')} />
    )
  }

}

HomeScreen.navigationOptions = {
  title: 'Saldo',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 15,
  },
  welcomeImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

});
