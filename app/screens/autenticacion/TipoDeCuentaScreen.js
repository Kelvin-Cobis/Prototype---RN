import React, { Component } from 'react';
import { SafeAreaView, TextInput, ActivityIndicator,AsyncStorage, Text, Image, View, StyleSheet, TouchableOpacity, Icon, ImageBackground } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import RadioForm from 'react-native-simple-radio-button';

var radio_props = [
  { label: 'Depósito simple \nMovimientos mensuales inferiores a 3 salarios mínimos.', value: 0 },
  { label: 'Deposito ordinario\nMovimientos mensuales superiores a 3 salarios mínimos.', value: 1 }
];
export default class SignIn extends Component {

  
guardarDatosyContinuar = async (values) => {  
  try {
   await AsyncStorage.setItem('tipo',values.tipo);
   await AsyncStorage.setItem('fechaDeExpedicion',values.fechaDeExpedicion);
   await AsyncStorage.setItem('documentoDeIdentidad',values.documentoDeIdentidad);
   await AsyncStorage.setItem('telefonoCelular',values.telefonoCelular);     
  } catch (error) {
  console.log('Error Async');
  }
  this.props.navigation.navigate('SignIn2')
}

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ 
        backgroundColor: '#ffffff', width: '100%', height: '100%',
      }}>
        <TouchableOpacity
          style={{ marginTop: 35, marginLeft: 10 }}
          onPress={() => this.props.navigation.navigate('Index')}
        >
          <Image source={require('../../assets/images/layer1.png')} />
        </TouchableOpacity>

        <View style={styles.welcomeImage}>
          <Image style={{ width: '100%', height: 80 }}
            source={require('../../assets/images/mobile--user.png')} />
        </View>

        <Formik
          initialValues={{
            tipo: '',
            fechaDeExpedicion: '',
            documentoDeIdentidad: '',
            telefonoCelular: ''
          }}
          onSubmit={values => this.guardarDatosyContinuar(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ marginLeft: 20, marginVertical: 5, marginRight: 10 }}>
                  <TextInput
                    placeholder="Tipo"
                    onChangeText={handleChange('tipo')}
                    onBlur={handleBlur('tipo')}
                    value={values.tipo}
                    style={{
                      borderWidth: 0.75,
                      borderColor: 'grey',
                      padding: 7,
                      marginBottom: 2,
                      borderRadius: 5
                    }}
                  />
                  <Text style={{ marginBottom: 0, color: 'grey', fontSize: 11 }}>Tipo de documento de Identidad</Text>
                </View>

                <View style={{ marginHorizontal: 5, marginVertical: 5 }}>
                  <TextInput
                    placeholder="Fecha de expedición"
                    onChangeText={handleChange('fechaDeExpedicion')}
                    onBlur={handleBlur('fechaDeExpedicion')}                    
                    style={{
                      borderWidth: 0.75,
                      borderColor: 'grey',
                      padding: 7,
                      marginBottom: 2,
                      borderRadius: 5
                    }}
                  />
                </View>
              </View>



              <View style={{ marginHorizontal: 20, marginVertical: 5 }}>

                <TextInput
                  placeholder="# Documento de identidad"
                  onChangeText={handleChange('documentoDeIdentidad')}
                  onBlur={handleBlur('documentoDeIdentidad')}   
                  style={{
                    borderWidth: 0.75,
                    borderColor: 'grey',
                    padding: 7,
                    marginBottom: 3,
                    borderRadius: 5
                  }}
                />
                <Text style={{ color: 'grey', fontSize: 11 }}>Ingrese el número sin espacios o guiones</Text>
              </View>


              <View style={{ marginHorizontal: 20, marginVertical: 5 }}>

                <TextInput
                  placeholder="Teléfono celular"
                  onChangeText={handleChange('telefonoCelular')}
                    onBlur={handleBlur('telefonoCelular')}   
                  style={{
                    borderWidth: 0.75,
                    borderColor: 'grey',
                    padding: 7,
                    marginBottom: 3,
                    borderRadius: 5
                  }}

                />
                <Text style={{ color: 'grey', fontSize: 11 }}>Ingrese el número de teléfono que esta utilizando</Text>



              </View>

              <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                <Text style={{ fontSize: 16, marginBottom: 10 }}>Tipo</Text>
                <RadioForm
                  buttonColor={'#0179C3'}
                  selectedButtonColor={'#0179C3'}
                  buttonSize={12}
                  radio_props={radio_props}
                  initial={0}
                  onPress={(value) => { this.setState({ value: value }) }}
                >
                </RadioForm>

              </View>

              <View style={styles.fixToText}>

                <TouchableOpacity
                  style={{
                    width: 135,
                    height: 45,
                    marginBottom: 5,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#0179C3'
                  }}
                  //onPress={() => this.props.navigation.navigate('SignIn2')}
                  onPress={handleSubmit}

                >
                  <Text style={{ color: '#ffffff', fontSize: 12 }}>Continuar</Text>
                </TouchableOpacity>

                <Text style={{ color: 'grey', fontSize: 11 }}>Ingresa todos los datos son obligatorios para continuar</Text>
              </View>
            </View>
          )}

        </Formik>
      </View>

    );
  }
}

SignIn.navigationOptions = {

  header: null
};

const styles = StyleSheet.create({

  welcomeImage: {

    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 10


  },
  fixToText: {

    alignContent: 'center',
    alignItems: 'center',


  },
});
