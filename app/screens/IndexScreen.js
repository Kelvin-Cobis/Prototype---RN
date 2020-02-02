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

import { MonoText } from '../components/StyledText';



export default class IndexScreen extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container} >
        <View
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <ImageBackground style={styles.welcomeImage} source={require('../assets/images/start.png')} >

            <View style={styles.welcomeContent} />

            <View style={styles.welcomeContent}>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('Autenticacion')}
                style={styles.avatarContainer}>

                <Image source={require('../assets/images/crearCuenta.png')} />

              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('Autenticacion')}
                style={styles.avatarContainer}>

                <Image source={require('../assets/images/yaTengoCuenta.png')} />

              </TouchableOpacity>


            </View>


          </ImageBackground>





        </View>
      </View>
    );
  }

}

IndexScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  welcomeContent: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  welcomeImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  avatarContainer: {
    alignContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 110,
    borderRadius: 5,
    margin: '5%',
  },
  container: {
    flex: 1,
    backgroundColor: '#4E7EB2',
    marginTop: 15,
  },
  bigWhite: {
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 0,

  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

});
