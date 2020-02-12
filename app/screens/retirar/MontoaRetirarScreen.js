import React, { Component } from 'react';
import { List, ListItem, Left, Body, Thumbnail, Text } from 'native-base';
import { StyleSheet, Image, View, TouchableOpacity , TextInput} from 'react-native';
import { Icon } from 'react-native-elements'


export default class SolicitudDePagoScreen extends Component {


  render() {

    return (
      <View style={styles.contenedor}>

        <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
          <TextInput
            placeholder="Monto"
            style={styles.textInput}
          />
          <Text style={{ color: 'grey', fontSize: 11, marginLeft: 10 }}>Retira desde $2,000 a $2,000,000</Text>
        </View>
        <View style={styles.fixToText}>
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
            <Text style={{ color: '#ffffff', fontSize: 12 }}>Continuar</Text>
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
    marginTop:100,
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
    marginTop: 30,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  textInput: {
    borderWidth: 0.75,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 2,
    borderRadius: 5
  },
});
