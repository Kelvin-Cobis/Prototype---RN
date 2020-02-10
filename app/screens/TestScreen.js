import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class SignIn extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
          marginTop: 40,
          marginBottom: 20,
          flexDirection: "row"
        }}>
          <TouchableOpacity style={styles.optionsHeader}>
            <View style={styles.optionSlectedHeader}>
              <Image source={require('../assets/images/transfer.png')} />
            </View>
            <Text style={{ color: '#0179C3' }}>Pasa plata</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionsHeader}>
            <View style={styles.optionHeader}>
              <Image source={require('../assets/images/qrLayer.png')} />
            </View>
            <Text>Pago con QR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionsHeader}>
            <View style={styles.optionHeader}>
              <Image source={require('../assets/images/facturaLayer.png')} />
            </View>
            <Text>Pago factura</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionsHeader}>
            <View style={styles.optionHeader}>
              <Image source={require('../assets/images/mobile.png')} />
            </View>
            <Text>Recarga</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={{ marginHorizontal: 25, marginVertical: 5 }}>
          <TextInput
            placeholder="Monto"
            style={styles.textInput}
          />
          <Text style={{ color: 'grey', fontSize: 11, marginLeft: 10 }}>Ingrese el monto que desea pagar</Text>
        </View>
        <View style={{ marginHorizontal: 25, marginVertical: 5 }}>
          <TextInput
            placeholder="Motivo"
            style={styles.textInput}
          />
          <Text style={{ color: 'grey', fontSize: 11, marginLeft: 10 }}>Lo podrás ver tu y tu contacto</Text>
        </View>
        <Text style={{ color: 'grey', fontSize: 14, marginLeft: 25, marginVertical: 15, fontWeight: 'bold' }}>
          Seleccionar un contacto</Text>
        <View style={{ flexDirection: "row", alignContent: "center", alignItems: "center", marginLeft: 25, marginVertical: 10 }}>
          <TouchableOpacity style={{ borderRadius: 100, backgroundColor: '#0179C3', width: 48, height: 48, justifyContent: "center", alignItems: "center", marginRight: 10 }}>
            <Image source={require('../assets/images/search.png')} />
          </TouchableOpacity>
          <Text style={{ color: '#0179C3', fontSize: 16 }}>Buscar contacto</Text>
        </View>
        <View style={{ borderBottomWidth: 0.17, borderColor: 'grey' }} />
        <View style={{ flexDirection: "row", alignContent: "center", alignItems: "center", marginLeft: 25, marginVertical: 10 }}>
          <TouchableOpacity style={{ borderRadius: 100, backgroundColor: '#0179C3', width: 48, height: 48, justifyContent: "center", alignItems: "center", marginRight: 10 }}>
            <Image source={require('../assets/images/plus.png')} />
          </TouchableOpacity>
          <Text style={{ color: '#0179C3', fontSize: 16 }}>Agrear nuevo contacto</Text>
        </View>
        <View style={{
          alignContent: 'center',
          alignItems: 'center',
          marginTop: 10
        }}>
          <View style={{
            alignContent: "center",
            alignItems: "center",
          }}>
            <TouchableOpacity
              style={{
                width: 135,
                height: 45,
                marginHorizontal: 10,
                borderRadius: 30,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#0179C3',
                borderColor: '#0179C3',
                borderWidth: 1,
              }}

            >
              <Image source={require('../assets/images/shortTransfer.png')} />
              <Text style={{ color: '#ffffff', fontSize: 12, marginLeft: 7 }}>Pagar</Text>
            </TouchableOpacity>
            <Text style={{ color: 'grey', fontSize: 11, marginTop: 5 }}>Ingrese los datos del pago para continuar</Text>
          </View>
        </View>
      </View>

    );
  }
}

SignIn.navigationOptions = {

  header: null
};

const styles = StyleSheet.create({

  optionsHeader: {
    marginHorizontal: 15,
    alignItems: "center",
    alignContent: "center"
  },
  optionSlectedHeader: {
    width: 64,
    height: 64,
    borderRadius: 100,
    backgroundColor: '#E6F2F9',
    alignItems: "center",
    justifyContent: "center"
  },
  optionHeader: {
    width: 64,
    height: 64,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    borderWidth: 0.75,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 2,
    borderRadius: 5
  },
});
