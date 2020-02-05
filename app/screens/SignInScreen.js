import React, { Component } from 'react';
import {
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
  Text, Image,
  View ,StyleSheet, 
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
      <SafeAreaView style={{ backgroundColor:'#ffffff'}}>
        <View style={styles.welcomeImage} >

        <Image source={require('../assets/images/logo-cobis-digital.png')}/>

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
              <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                <Text style={{ marginBottom: 3 }}>Email</Text>
                <TextInput
                  placeholder="johndoe@example.com"
                  style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    padding: 10,
                    marginBottom: 3,
                  }}
                  onChangeText={formikProps.handleChange('email')}
                  onBlur={formikProps.handleBlur('email')}
                  autoFocus
                />
                <Text style={{ color: 'red' }}>
                  {formikProps.touched.email && formikProps.errors.email}
                </Text>
              </View>

              <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                <Text style={{ marginBottom: 3 }}>Password</Text>
                <TextInput
                  placeholder="password"
                  style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    padding: 10,
                    marginBottom: 3,
                  }}
                  onChangeText={formikProps.handleChange('password')}
                  onBlur={formikProps.handleBlur('password')}
                  secureTextEntry
                />
                <Text style={{ color: 'red' }}>
                  {formikProps.touched.password && formikProps.errors.password}
                </Text>
              </View>

              {formikProps.isSubmitting ? (
                <ActivityIndicator />
              ) : (
                  <Button title="Submit" onPress={formikProps.handleSubmit} />
                )}
            </React.Fragment>
          )}
        </Formik>
        <Button title="Salir" onPress={() => this.props.navigation.navigate('Index')} />
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
    width: 100,
    height: 110,
    borderRadius: 5,
    margin: '5%',

  },
});
