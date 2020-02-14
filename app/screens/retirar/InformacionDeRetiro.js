import React, { Component } from 'react';
import { Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';

import { StyleSheet, Image, View, TouchableOpacity,Text } from 'react-native';
import { Icon } from 'react-native-elements'


export default class SolicitudDePagoScreen extends Component {


  render() {

    return (
      <View style={styles.contenedor}>


        <View style={styles.informacion}>
          <Text style={{ color: 'grey', fontSize: 12 }}>Titular</Text>
          <Text style={{ color: 'black', fontSize: 14 }}>José Martinez</Text>
        </View>
        <View style={styles.informacion}>
          <Text style={{ color: 'grey', fontSize: 12 }}>Celular</Text>
          <Text style={{ color: 'black', fontSize: 18 }}>09 890 4567</Text>
        </View>
        <View style={styles.informacion}>
          <Text style={{ color: 'grey', fontSize: 12 }}>Valor a retirar</Text>
          <Text style={{ color: 'black', fontSize: 14 }}>$2,340</Text>
        </View>
        <View style={styles.informacion}>
          <Text style={{ color: 'grey', fontSize: 12 }}>Valor del tramite</Text>
          <Text style={{ color: 'black', fontSize: 14 }}>$540</Text>
        </View>
        <View style={styles.informacion}>
          <Text style={{ color: 'grey', fontSize: 12 }}>Total a descontar</Text>
          <Text style={{ color: 'black', fontSize: 14 }}>$2.880</Text>
        </View>
        <View style={styles.solicitante}>
          <List>
            <View style={{ marginLeft: 20 }}>
              <Text style={{ color: 'grey', fontSize: 12 }}>Cajero automático</Text>
            </View>
            <ListItem avatar onPress={() => this.props.navigation.navigate('SolicitudPago')}>
              <Left>
                <Thumbnail source={require('../../assets/images/ubicacion.png')} />
              </Left>
              <Body>
                <View style={{ justifyContent: 'center', marginTop: 6, marginBottom:7 }}>
                  <Text>Banco Cobis - 10 de Agosto</Text>
                    <Text style={{ fontSize: 10 }} note>Av. 10 de Agosto y Naciones Unidas</Text>
                </View>
              </Body>
              <Right>
                <View style={{ marginVertical: 5 }}>
                  <Text style={{ fontSize: 10 }}>  </Text>
                </View>
                <Text style={{ fontSize: 10 }}>1km</Text>
              </Right>
            </ListItem>
          </List>
        </View>
        <View style={styles.fixToText}>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('PindeRetiro')}
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
    marginTop: 10,
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
    marginTop: 16,
    marginHorizontal: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.3,
  },
  solicitante: {
    marginTop: 20,
  },
  fixToText: {
    marginTop: 30,
    flexDirection: 'row',
    alignSelf: 'center'
  },
});
