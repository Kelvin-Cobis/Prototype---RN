import React, { Component } from 'react';
import {
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
  Text, Image,
  View, StyleSheet, TouchableOpacity
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .label('Email')
    .email()
    .required(),
  password: yup
    .string()
    .label('Password')
    .required()
    .min(2, 'Seems a bit short...')
    .max(10, 'We prefer insecure system, try a shorter password.'),
});

export default class SignIn extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={{
        backgroundColor: '#ffffff', width: '100%', height: '100%',
      }}>
        <View style={styles.welcomeImage} >
          <Image source={require('../assets/images/logo-cobis-digital.png')} />
        </View>
        <View style={{ marginLeft: 10, margin: 15 }}>
          <Text style={{ fontSize: 25, color: 'black' }}>Creación de cuenta</Text>
        </View>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, actions) => {
            alert(JSON.stringify(values));
            setTimeout(() => {
              actions.setSubmitting(false);
            }, 1000);
          }}
          validationSchema={validationSchema}
        >
          {formikProps => (
            <React.Fragment>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ marginLeft: 20, marginVertical: 5, marginRight: 10 }}>
                  <TextInput
                    placeholder="Tipo"
                    style={{
                      borderWidth: 0.75,
                      borderColor: 'grey',
                      padding: 10,
                      marginBottom: 2,
                      borderRadius: 5
                    }}
                    onChangeText={formikProps.handleChange('email')}
                    onBlur={formikProps.handleBlur('email')}
                  //autoFocus
                  />
                  <Text style={{ marginBottom: 3, color: 'grey', fontSize: 11 }}>Tipo de documento de Identidad</Text>

                  {/*<Text style={{ color: 'red' }}>
                  {formikProps.touched.email && formikProps.errors.email}
                </Text>*/}
                </View>

                <View style={{ marginHorizontal: 5, marginVertical: 5 }}>
                  <TextInput
                    placeholder="Fecha de expedición"
                    style={{
                      borderWidth: 0.75,
                      borderColor: 'grey',
                      padding: 10,
                      marginBottom: 2,
                      borderRadius: 5
                    }}
                    onChangeText={formikProps.handleChange('email')}
                    onBlur={formikProps.handleBlur('email')}
                  //autoFocus
                  />


                  {/*<Text style={{ color: 'red' }}>
                  {formikProps.touched.email && formikProps.errors.email}
                </Text>*/}
                </View>

              </View>

              <View style={{ marginHorizontal: 20, marginVertical: 5 }}>

                <TextInput
                  placeholder="# Documento de identidad"
                  style={{
                    borderWidth: 0.75,
                    borderColor: 'grey',
                    padding: 10,
                    marginBottom: 3,
                    marginTop: 7,
                    borderRadius: 5
                  }}
                  onChangeText={formikProps.handleChange('password')}
                  onBlur={formikProps.handleBlur('password')}
                  secureTextEntry
                />
                <Text style={{ marginBottom: 3, color: 'grey', fontSize: 11 }}>Ingrese el número sin espacios o guiones</Text>
                {/*
                <Text style={{ color: 'red' }}>
                  {formikProps.touched.password && formikProps.errors.password}
                </Text>
                */}


              </View>


              <View style={{ marginHorizontal: 20, marginVertical: 5 }}>

                <TextInput
                  placeholder="Teléfono celular"
                  style={{
                    borderWidth: 0.75,
                    borderColor: 'grey',
                    padding: 10,
                    marginBottom: 3,
                    marginTop: 7,
                    borderRadius: 5
                  }}
                  onChangeText={formikProps.handleChange('password')}
                  onBlur={formikProps.handleBlur('password')}
                  secureTextEntry
                />
                <Text style={{ marginBottom: 3, color: 'grey', fontSize: 11 }}>Ingrese el número de teléfono que esta utilizando</Text>
                {/*
                <Text style={{ color: 'red' }}>
                  {formikProps.touched.password && formikProps.errors.password}
                </Text>
                */}


              </View>



              {formikProps.isSubmitting ? (
                <ActivityIndicator />
              ) : (

                  <View style={styles.fixToText}>

                    <TouchableOpacity
                      style={{
                        width: 150,
                        height: 45,
                        marginHorizontal: 10,
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#0179C3'
                      }}
                      onPress={formikProps.handleSubmit}
                    >
                      <Text style={{ color: '#ffffff' }}>Continuar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        width: 150,
                        height: 45,
                        marginHorizontal: 10,
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#0179C3'
                      }}
                      onPress={() => this.props.navigation.navigate('Index')}
                    >
                      <Text style={{ color: '#ffffff' }}>Salir</Text>
                    </TouchableOpacity>


                  </View>

                )}
            </React.Fragment>
          )}
        </Formik>

      </SafeAreaView>

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

    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 50,

  },
  fixToText: {
    marginTop: 120,
    flexDirection: 'row',
    alignSelf: 'center'


  },
});
