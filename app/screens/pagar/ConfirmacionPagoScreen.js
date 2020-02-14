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
            <Image source={require('../../assets/images/confirmationIcon.png')} />
          </View>

          <View style={styles.center}>
            <Text style={{ fontSize: 13, color: '#4D7EAB', marginTop: 10 }}>Confirmación de pago</Text>
            <Text style={{ fontSize: 24, marginTop: 5 }}>$50.00</Text>
            <Text style={{ fontSize: 16 }}>Pago JC</Text>
            <Image style={{ width: 29, height: 142, marginVertical: 15 }} source={require('../../assets/images/downArrow.png')} />
            <View style={{
              borderRadius: 100,
              width: 56,
              height: 56,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: random_bg_color(),
              marginBottom:5,
            }}>
              <Text style={{ fontSize: 25, color: "#ffffff" }}>FA</Text>

            </View>
            <Text style={{ fontSize: 14 }}>Francisco Mendoza</Text>
            <Text style={{ fontSize: 12, color:'grey' }} note>0987654321 </Text>
          </View>
        </View>

        <View style={styles.fixToText}>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Confirmation')}
            style={{
              width: 135,
              height: 45,
              marginHorizontal: 10,
              borderRadius: 30,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0179C3',
            }}

          >

            <Icon name='check' color='#ffffff' />
            <Text style={{ color: '#ffffff', fontSize: 12 }}>Confirmar</Text>
          </TouchableOpacity>

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
    marginTop: 80,
    marginBottom: 25,
  },
  center: {
    alignItems: "center",
    alignContent: "center"
  },
  fixToText: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
});
