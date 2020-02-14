
import React, { Component } from 'react';
import { Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';

export default class MyReactNativeForm extends Component {
  render() {
    return (
      <View style={{ marginTop: 100 }}>
        <Formik
          initialValues={{ email: '', passw: '' }}
          onSubmit={values => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <View>  
                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </View>
              <View>
              <TextInput
                onChangeText={handleChange('passw')}
                onBlur={handleBlur('passw')}
                value={values.passw}
              />
              </View>
              <Button onPress={handleSubmit} title="Submit" />
            </View>




          )}
        </Formik>
      </View>
    );
  }

}