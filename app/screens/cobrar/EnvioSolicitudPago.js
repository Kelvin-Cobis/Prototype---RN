import React, { Component } from 'react';
import { List, ListItem, Left, Body, Thumbnail, Text } from 'native-base';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default class EnvioSolicitudPago extends Component {


  render() {

    return (
      <View style={styles.contenedor}>

        <View style={styles.cabecera}>
          <View style={styles.center}>
            <Image source={require('../../assets/images/information.png')} />
          </View>

          <View style={styles.center}>
            <Text style={{ fontSize: 12, color: '#4D7EAB' }}>Una solicitud de pago se ha enviado a tu(s) contacto(s){'\n'}
              Recibirás una notificación de ser aprobada o rechazada
    </Text>
          </View>
        </View>
        <View style={styles.informacion}>
          <Text style={{ color: 'grey', fontSize: 12 }}>Referencia</Text>
          <Text style={{ color: 'black', fontSize: 13 }}>1234567890</Text>
        </View>
        <View style={styles.informacion}>
          <Text style={{ color: 'grey', fontSize: 12 }}>Estado</Text>
          <Text style={{ color: 'black', fontSize: 13 }}>En espera de aprobación</Text>
        </View>
        <View style={styles.informacion}>
          <Text style={{ color: 'grey', fontSize: 12 }}>Motivo</Text>
          <Text style={{ color: 'black', fontSize: 13 }}>Pago JC</Text>
        </View>
        <View style={styles.informacion}>
          <Text style={{ color: 'grey', fontSize: 12 }}>Monto</Text>
          <Text style={{ color: 'black', fontSize: 15 }}>$50.00</Text>
        </View>
        <View style={styles.informacion}>
          <Text style={{ color: 'grey', fontSize: 12 }}>Motivo</Text>
          <Text style={{ color: 'black', fontSize: 13 }}>Orden #123</Text>
        </View>
        <View style={styles.solicitante}>
          <List>
            <View style={{ marginLeft: 20 }}>
              <Text style={{ color: 'grey', fontSize: 13 }}>Contacto(s)</Text>
            </View>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../../assets/images/person.jpg')} />
              </Left>
              <Body>
                <Text style={{ color: 'black', fontSize: 14 }}>Francisco Mendoza</Text>
                <Text note style={{ color: 'grey', fontSize: 13 }}>0987654321</Text>
              </Body>

            </ListItem>
          </List>
        </View>
        <View style={styles.fixToText}>

          <TouchableOpacity
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

            <Icon name='share' color='#0179C3' />
            <Text style={{ color: '#0179C3', fontSize: 12 }}>Compartir</Text>
          </TouchableOpacity>

        </View>
      </View>

    )
  }
}

EnvioSolicitudPago.navigationOptions = {
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
    marginTop: 30,
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
    height: 30,
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
    flexDirection: 'row',
    alignSelf: 'center'
  },
});
