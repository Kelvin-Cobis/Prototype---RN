import React, { Component } from 'react';
import { SafeAreaView, TextInput, ActivityIndicator, Text, Image, View, StyleSheet, TouchableOpacity, Icon, ImageBackground } from 'react-native';
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
        <TouchableOpacity
          style={{
            marginTop: 30,
            marginLeft: 10
          }}
          onPress={() => this.props.navigation.navigate('Index')}
        >
          {//<Icon name='md-arrow-back' type='Ionicons'></Icon>
          }
          <Image source={require('../assets/images/layer1.png')} />
        </TouchableOpacity>

        <View style={styles.welcomeImage}>

          <Image style={{ width: '100%', height: 80 }} source={require('../assets/images/mobile--user.png')} />


        </View>
        {//<Text style={{ fontSize: 24, color: '#4D7EAB' }}>Creación de cuenta</Text>
        }
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
                        width: 135,
                        height: 45,
                        marginHorizontal: 10,
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#0179C3'
                      }}
                      onPress={formikProps.handleSubmit}
                    >
                      <Text style={{ color: '#ffffff', fontSize: 12 }}>Continuar</Text>
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

SignIn.navigationOptions = {

  header: null
};

const styles = StyleSheet.create({

  welcomeImage: {

    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 20


  },
  fixToText: {
    marginTop: 120,
    flexDirection: 'row',
    alignSelf: 'center'


  },
});
