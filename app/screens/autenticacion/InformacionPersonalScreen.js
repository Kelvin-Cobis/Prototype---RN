import React, { Component } from 'react';
import { SafeAreaView, TextInput, ActivityIndicator, AsyncStorage, Text, Image, View, StyleSheet, TouchableOpacity, Icon, ImageBackground } from 'react-native';
import { Formik } from 'formik';

export default class SignIn extends Component {

    guardarDatosyContinuar = async (values) => {
        try {
            await AsyncStorage.setItem('nombres', values.nombres);
            await AsyncStorage.setItem('apellidos', values.apellidos);
            await AsyncStorage.setItem('fechaDeNacimiento', values.fechaDeNacimiento);
            await AsyncStorage.setItem('genero', values.genero);
            await AsyncStorage.setItem('email', values.email);
        } catch (error) {
            console.log('Error Async');
        }
        this.props.navigation.navigate('SignIn3')
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <SafeAreaView style={{
                backgroundColor: '#ffffff', width: '100%', height: '100%',
            }}>
                <View style={styles.welcomeImage}>
                    <Image style={{ width: '100%', height: 85 }} source={require('../../assets/images/information--user.png')} />
                </View>
                <Formik
                    initialValues={{
                        nombres: '',
                        apellidos: '',
                        fechaDeNacimiento: '',
                        genero: '',
                        email: '',

                    }}
                    onSubmit={values => this.guardarDatosyContinuar(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
                            <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                                <TextInput
                                    placeholder="Nombres"
                                    onChangeText={handleChange('nombres')}
                                    onBlur={handleBlur('nombres')}
                                    style={{
                                        borderWidth: 0.75,
                                        borderColor: 'grey',
                                        padding: 7,
                                        marginBottom: 3,
                                        borderRadius: 5
                                    }}
                                />
                                <Text style={{ color: 'grey', fontSize: 11 }}>Ingrese sus nombres</Text>
                            </View>

                            <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                                <TextInput
                                    placeholder="Apellidos"
                                    onChangeText={handleChange('apellidos')}
                                    onBlur={handleBlur('apellidos')}
                                    style={{
                                        borderWidth: 0.75,
                                        borderColor: 'grey',
                                        padding: 7,
                                        marginBottom: 3,
                                        borderRadius: 5
                                    }}
                                />
                                <Text style={{ color: 'grey', fontSize: 11 }}>Ingrese sus apellidos</Text>
                            </View>

                            <View style={{ marginHorizontal: 20, marginVertical: 5 }}>

                                <TextInput
                                    placeholder="Fecha de nacimiento"
                                    onChangeText={handleChange('fechaDeNacimiento')}
                                    onBlur={handleBlur('fechaDeNacimiento')}
                                    style={{
                                        borderWidth: 0.75,
                                        borderColor: 'grey',
                                        padding: 7,
                                        marginBottom: 3,
                                        borderRadius: 5
                                    }}
                                />
                                <Text style={{ color: 'grey', fontSize: 11 }}>Ingrese su fecha de nacimiento</Text>
                            </View>


                            <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                                <TextInput
                                    placeholder="Género"
                                    onChangeText={handleChange('genero')}
                                    onBlur={handleBlur('genero')}
                                    style={{
                                        borderWidth: 0.75,
                                        borderColor: 'grey',
                                        padding: 7,
                                        marginBottom: 3,
                                        borderRadius: 5
                                    }}

                                />
                                <Text style={{ color: 'grey', fontSize: 11 }}>Ingrese su género</Text>
                            </View>

                            <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                                <TextInput
                                    placeholder="Correo electrónico"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    style={{
                                        borderWidth: 0.75,
                                        borderColor: 'grey',
                                        padding: 7,
                                        marginBottom: 3,
                                        borderRadius: 5
                                    }}
                                />
                                <Text style={{ color: 'grey', fontSize: 11 }}>Ingrese su correo electrónico</Text>
                            </View>


                            <View style={styles.fixToText}>
                                <View style={{
                                    alignContent: "center",
                                    alignItems: "center",
                                    flexDirection: "row"
                                }}>
                                    <TouchableOpacity
                                        style={styles.botonRegresar}
                                        onPress={() => this.props.navigation.navigate('SignIn')}
                                        
                                    >
                                        <Text style={{ color: '#0179C3', fontSize: 12 }}>Regresar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.botonContinuar}
                                        onPress={handleSubmit}
                                    >
                                        <Text style={{ color: '#ffffff', fontSize: 12 }}>Continuar</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ color: 'grey', fontSize: 11 }}>Ingresa todos los datos son obligatorios para continuar</Text>
                            </View>
                        </View>
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
        marginTop: 25
    },
    botonContinuar: {
        width: 135,
        height: 45,
        marginBottom: 5,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0179C3',
        marginHorizontal: 15
    },
    botonRegresar: {
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
    }
});
