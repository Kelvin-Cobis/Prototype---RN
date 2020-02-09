import React, { Component } from 'react';
import { SafeAreaView, TextInput, ActivityIndicator, Text, Image, View, StyleSheet, TouchableOpacity, Icon, ImageBackground } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import RadioForm from 'react-native-simple-radio-button';

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


                <View style={styles.welcomeImage}>

                    <Image style={{ width: '100%', height: 85 }} source={require('../assets/images/information--user.png')} />


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


                            <View style={{ marginHorizontal: 20, marginVertical: 5 }}>

                                <TextInput
                                    placeholder="Nombres"
                                    style={{
                                        borderWidth: 0.75,
                                        borderColor: 'grey',
                                        padding: 7,
                                        marginBottom: 3,
                                        borderRadius: 5
                                    }}
                                    onChangeText={formikProps.handleChange('password')}
                                    onBlur={formikProps.handleBlur('password')}
                                    secureTextEntry
                                />
                                <Text style={{ color: 'grey', fontSize: 11 }}>Ingrese sus nombres</Text>
                                {/*
                <Text style={{ color: 'red' }}>
                  {formikProps.touched.password && formikProps.errors.password}
                </Text>
                */}

                            </View>

                            <View style={{ marginHorizontal: 20, marginVertical: 5 }}>

                                <TextInput
                                    placeholder="Apellidos"
                                    style={{
                                        borderWidth: 0.75,
                                        borderColor: 'grey',
                                        padding: 7,
                                        marginBottom: 3,
                                        borderRadius: 5
                                    }}
                                    onChangeText={formikProps.handleChange('password')}
                                    onBlur={formikProps.handleBlur('password')}
                                    secureTextEntry
                                />
                                <Text style={{ color: 'grey', fontSize: 11 }}>Ingrese sus apellidos</Text>
                                {/*
                <Text style={{ color: 'red' }}>
                  {formikProps.touched.password && formikProps.errors.password}
                </Text>
                */}
                            </View>


                            <View style={{ marginHorizontal: 20, marginVertical: 5 }}>

                                <TextInput
                                    placeholder="Fecha de nacimiento"
                                    style={{
                                        borderWidth: 0.75,
                                        borderColor: 'grey',
                                        padding: 7,
                                        marginBottom: 3,
                                        borderRadius: 5
                                    }}
                                    onChangeText={formikProps.handleChange('password')}
                                    onBlur={formikProps.handleBlur('password')}
                                    secureTextEntry
                                />
                                <Text style={{ color: 'grey', fontSize: 11 }}>Ingrese su fecha de nacimiento</Text>
                                {/*
                <Text style={{ color: 'red' }}>
                  {formikProps.touched.password && formikProps.errors.password}
                </Text>
                */}


                            </View>


                            <View style={{ marginHorizontal: 20, marginVertical: 5 }}>

                                <TextInput
                                    placeholder="Género"
                                    style={{
                                        borderWidth: 0.75,
                                        borderColor: 'grey',
                                        padding: 7,
                                        marginBottom: 3,
                                        borderRadius: 5
                                    }}
                                    onChangeText={formikProps.handleChange('password')}
                                    onBlur={formikProps.handleBlur('password')}
                                    secureTextEntry
                                />
                                <Text style={{ color: 'grey', fontSize: 11 }}>Ingrese su género</Text>
                                {/*
                <Text style={{ color: 'red' }}>
                  {formikProps.touched.password && formikProps.errors.password}
                </Text>
                */}


                            </View>


                            <View style={{ marginHorizontal: 20, marginVertical: 5 }}>

                                <TextInput
                                    placeholder="Correo electrónico"
                                    style={{
                                        borderWidth: 0.75,
                                        borderColor: 'grey',
                                        padding: 7,
                                        marginBottom: 3,
                                        borderRadius: 5
                                    }}
                                    onChangeText={formikProps.handleChange('password')}
                                    onBlur={formikProps.handleBlur('password')}
                                    secureTextEntry
                                />
                                <Text style={{ color: 'grey', fontSize: 11 }}>Ingrese su correo electrónico</Text>
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
                                        <View style={{
                                            alignContent: "center",
                                            alignItems: "center",
                                            flexDirection: "row"
                                        }}>
                                            <TouchableOpacity
                                                style={{
                                                    width: 135,
                                                    height: 45,
                                                    marginBottom: 5,
                                                    borderRadius: 30,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    backgroundColor: '#ffffff',
                                                    marginHorizontal: 15,
                                                    borderWidth: 0.75,
                                                    borderColor: '#0179C3',
                                                }}
                                                onPress={() => this.props.navigation.navigate('SignIn')}
                                            //onPress={formikProps.handleSubmit}

                                            >
                                                <Text style={{ color: '#0179C3', fontSize: 12 }}>Regresar</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={{
                                                    width: 135,
                                                    height: 45,
                                                    marginBottom: 5,
                                                    borderRadius: 30,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    backgroundColor: '#0179C3',
                                                    marginHorizontal: 15
                                                }}
                                                onPress={() => this.props.navigation.navigate('SignIn3')}
                                            //onPress={formikProps.handleSubmit}

                                            >
                                                <Text style={{ color: '#ffffff', fontSize: 12 }}>Continuar</Text>
                                            </TouchableOpacity>
                                        </View>


                                        <Text style={{ color: 'grey', fontSize: 11 }}>Ingresa todos los datos son obligatorios para continuar</Text>
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
        marginBottom: 10,
        marginTop: 50,


    },
    fixToText: {

        alignContent: 'center',
        alignItems: 'center',
        marginTop:25


    },
});
