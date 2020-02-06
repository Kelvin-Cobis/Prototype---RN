import React, { Component } from 'react';
import { List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';



import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

import { Text } from 'native-base';


export default class SolicitudDePagoScreen extends Component {


  render() {

    return (
      <View style={styles.contenedor}>

        <View style={styles.cabecera}>
          <View style={styles.center}>
            <Image source={require('../assets/images/information.png')} />
          </View>

          <View style={styles.center}>
            <Text style={{ fontSize: 12, color: '#4D7EAB' }}>Has recibido una solicitud de pago</Text>
          </View>
        </View>
        <View style={styles.informacion}>
          <Text style={{ color: 'grey', fontSize: 12 }}>Referencia</Text>
          <Text style={{ color: 'black', fontSize: 14 }}>1234567890</Text>
        </View>
        <View style={styles.informacion}>
          <Text style={{ color: 'grey', fontSize: 12 }}>Monto</Text>
          <Text style={{ color: 'black', fontSize: 18 }}>$50.00</Text>
        </View>
        <View style={styles.informacion}>
          <Text style={{ color: 'grey', fontSize: 12 }}>Motivo</Text>
          <Text style={{ color: 'black', fontSize: 14 }}>Pago JC</Text>
        </View>
        <View style={styles.solicitante}>
          <List>
            <View style={{ marginLeft: 20 }}>
              <Text style={{ color: 'grey', fontSize: 12 }}>Solicitante</Text>
            </View>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/images/person.jpg')} />
              </Left>
              <Body>
                <Text  style={{ color: 'black', fontSize: 14 }}>Francisco Mendoza</Text>
                <Text note  style={{ color: 'grey', fontSize: 12 }}>0987654321</Text>
              </Body>

            </ListItem>
          </List>
        </View>
        <View style={styles.fixToText}>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}
            style={{
              width: 135,
              height: 45,
              marginHorizontal: 10,
              borderRadius: 30,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              borderColor: '#0179C3',
              borderWidth: 1,
            }}
            
          >
            
            <Icon name='cross' type='entypo' color='#0179C3' />
            <Text style={{ color: '#0179C3', fontSize: 12 }}>Rechazar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Confirmation')}
            style={{
              width: 135,
              height: 45,
              flexDirection: 'row',
              marginHorizontal: 10,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0179C3'
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
    alignItems: "center",
    alignContent: "center"
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
    marginTop: 90,
    flexDirection: 'row',
    alignSelf: 'center'
  },
});
