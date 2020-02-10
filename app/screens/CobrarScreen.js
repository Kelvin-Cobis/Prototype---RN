import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class CobrarScreen extends Component {


  constructor(props) {
    super(props);
    const { navigate } = this.props.navigation;
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    header: null

  });
  render() {
    return (
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
          marginTop: 40,
          marginBottom: 15,
          flexDirection: "row"
        }}>
          <TouchableOpacity style={styles.optionsHeader}>
            <View style={styles.optionSlectedHeader}>
              <Image source={require('../assets/images/mobile-transfer--left.png')} />
            </View>
            <Text style={{ color: '#0179C3' }}>Pide plata</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.optionsHeader}>
            <View style={styles.optionHeader}>
              <Image source={require('../assets/images/mobile--otp.png')} />
            </View>
            <Text>Cobro con PIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionsHeader}>
            <View style={styles.optionHeader}>
              <Image source={require('../assets/images/qrLayer.png')} />
            </View>
            <Text>Pago con QR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionsHeader}>
            <View style={styles.optionHeader}>
              <Image source={require('../assets/images/mobile.png')} />
            </View>
            <Text>Cobro con NFC</Text>
          </TouchableOpacity>
        </ScrollView>
        <ScrollView style={{}}>
          <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
            <TextInput
              placeholder="Monto"
              style={styles.textInput}
            />
            <Text style={{ color: 'grey', fontSize: 11, marginLeft: 10 }}>Ingrese el monto que desea pagar</Text>
          </View>
          <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
            <TextInput
              placeholder="Motivo"
              style={styles.textInput}
            />
            <Text style={{ color: 'grey', fontSize: 11, marginLeft: 10 }}>Lo podrás ver tu y tu contacto</Text>
          </View>
          <Text style={{ color: 'grey', fontSize: 14, marginLeft: 25, marginVertical: 10, fontWeight: 'bold' }}>
            Seleccionar un contacto</Text>
          <View style={{ flexDirection: "row", alignContent: "center", alignItems: "center", marginLeft: 25, marginVertical: 10 }}>
            <TouchableOpacity style={styles.circleTouchable}>
              <Image source={require('../assets/images/search.png')} />
            </TouchableOpacity>
            <Text style={{ color: '#0179C3', fontSize: 16 }}>Buscar contacto</Text>
          </View>
          <View style={{ borderBottomWidth: 0.17, borderColor: 'grey' }} />
          <View style={{ flexDirection: "row", alignContent: "center", alignItems: "center", marginLeft: 25, marginVertical: 10 }}>
            <TouchableOpacity style={styles.circleTouchable}>
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
              <TouchableOpacity style={styles.buttonTouchable}>
                <Image source={require('../assets/images/solicitar--opt.png')} />
                <Text style={{ color: '#ffffff', fontSize: 12, marginLeft: 7 }}>Solicitar</Text>
              </TouchableOpacity>
              <Text style={{ color: 'grey', fontSize: 11, marginTop: 5 }}>Ingrese los datos del pago para continuar</Text>
            </View>
            <View style={{
              alignContent: "center",
              alignItems: "center",
            }}>
            </View>
          </View>
        
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  welcomeImage: {
    marginTop: 40,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  optionsHeader: {
    marginHorizontal: 10,
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
  circleTouchable: {
    borderRadius: 100,
    backgroundColor: '#0179C3',
    width: 48, height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  },
  buttonTouchable: {
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
  },
});
