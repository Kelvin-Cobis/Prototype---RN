import React, { Component } from 'react';
import { List, ListItem, Left, Body, Thumbnail, Text } from 'native-base';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'


export default class SolicitudDePagoScreen extends Component {


  render() {

    return (
      <View style={styles.contenedor}>

        <View style={styles.cabecera}>
          <View style={styles.center}>
            <Image source={require('../assets/images/information.png')} />
          </View>

          <View style={styles.center}>
            <Text style={{ fontSize: 12, color: '#4D7EAB', marginHorizontal: 20 }}>Acerquese al cajero seleccionado y seleccione la opción de retiro, cuando se lo solicite ingrese el PIN</Text>
          </View>
        </View>

        <View style={{
          marginTop:50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text>PIN</Text>
          <Text style={{fontSize:40}}>......</Text>
        </View>
        <View style={styles.fixToText}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Confirmation')}
            style={{
              width: 97,
              height: 45,
              flexDirection: 'row',
              marginHorizontal: 10,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0179C3',
              marginVertical: 10
            }}

          >
            <Icon name='eye' type='entypo' size={15} color='#ffffff' />
            <Text style={{ marginLeft: 5, color: '#ffffff', fontSize: 12 }}>Ver</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 12, color: '#4D7EAB', marginHorizontal: 20 }}>PIN expira en 29:45 minutos</Text>

        </View>

      </View>

    )
  }
}

SolicitudDePagoScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({

  contenedor: {
    width: '100%',
    height: '100%',
  },
  cabecera: {
    width: '100%',
    height: 50,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 40,
    marginBottom: 20
  },
  center: {
    alignItems: 'center',
    alignContent: 'center'
  },
  informacion: {
    width: '90%',
    borderStyle: "dotted",
    justifyContent: 'space-around',
    height: 40,
    marginTop: 20,
    marginHorizontal: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.3,
  },
  solicitante: {
    marginTop: 20,
  },
  fixToText: {
    marginTop: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
