import React, { Component } from 'react';
import { List, ListItem, Left, Body, Thumbnail } from 'native-base';
import { Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'


function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;

}

export default class ConfirmationScreen extends Component {


  render() {

    return (
      <View style={styles.contenedor}>

        <View style={styles.cabecera}>
          <View style={styles.center}>
            <Image source={require('../assets/images/billPlus.png')} />
          </View>

          <View style={styles.center}>
            <Text style={{ fontSize: 13, color: '#4D7EAB', marginTop: 10 }}>Confirmación de pago</Text>
            <Text style={{ fontSize: 24, marginTop: 5 }}>$50.00</Text>
            <Text style={{ fontSize: 16 }}>Orden #123</Text>
            <Image style={{ marginVertical: 5, width: 29, height: 55 }} source={require('../assets/images/downArrow-short.png')} />
            <Image style={{ width: 230, height: 230 }} source={require('../assets/images/qrCode.png')} />

          </View>
        </View>

        <View style={styles.fixToText}>

          <View style={styles.center}>
            <Image source={require('../assets/images/information.png')} />
          </View>

          <View style={styles.center}>
            <Text style={{ fontSize: 12, color: '#4D7EAB' }}>Permita que su contacto lea
    el código superior</Text>
          </View>
        </View>
      </View>

    )
  }
}

ConfirmationScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({

  contenedor: {
    width: '100%',
    height: '100%',
  },
  cabecera: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 45,
  },
  center: {
    alignItems: "center",
    alignContent: "center"
  },
  fixToText: {
    alignSelf: 'center',
    marginTop:10
  },
});
