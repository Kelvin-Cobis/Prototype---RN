import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';

export default class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checkOne: false,
            checkTwo: false,
            checkThree: false
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View style={styles.welcomeImage}>
                    <Image style={{ width: '100%', height: 85, marginBottom: 20 }} source={require('../assets/images/conditions--user.png')} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.condicion}>
                        <Checkbox
                            color='#0179C3'
                            status={this.state.checkOne ? 'checked' : 'unchecked'}
                            onPress={() => this.setState({ checkOne: !this.state.checkOne })}
                        />
                        <Image style={{ marginLeft: 10 }} source={require('../assets/images/doc-image.png')} />
                        <Text style={{ fontSize: 16, marginLeft: 15 }}>Contrato y condiciones</Text>
                        <Text style={{ fontSize: 16, marginLeft: 40, color: '#0179C3' }}>Ver</Text>
                    </View>

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.condicion}>
                        <Checkbox
                            color='#0179C3'
                            status={this.state.checkTwo ? 'checked' : 'unchecked'}
                            onPress={() => this.setState({ checkTwo: !this.state.checkTwo })}
                        />
                        <Image style={{ marginLeft: 10 }} source={require('../assets/images/doc-image.png')} />
                        <Text style={{ fontSize: 16, marginLeft: 15 }}>Política aliado con terceros</Text>
                        <Text style={{ fontSize: 16, marginLeft: 11, color: '#0179C3' }}>Ver</Text>
                    </View>

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.condicion}>
                        <Checkbox
                            color='#0179C3'
                            status={this.state.checkThree ? 'checked' : 'unchecked'}
                            onPress={() => this.setState({ checkThree: !this.state.checkThree })}
                        />
                        <Image style={{ marginLeft: 10 }} source={require('../assets/images/doc-image.png')} />
                        <Text style={{ fontSize: 16, marginLeft: 15 }}>Política con vinculados</Text>
                        <Text style={{ fontSize: 16, marginLeft: 40, color: '#0179C3' }}>Ver</Text>
                    </View>

                </View>
                <Text style={{ color: 'grey', fontSize: 11, marginLeft: 20, marginBottom:10, marginTop:10 }}>Marca todas la casillas para aceptar las condiciones.</Text>
                <Text style={{ color: 'grey', fontSize: 11, marginLeft: 20 }}>Estamos enviando una copia de los documento a tu dirección de correo electrónico.</Text>

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
                            onPress={() => this.props.navigation.navigate('SignIn2')}
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
                            onPress={() => this.props.navigation.navigate('Index')}
                        >
                            <Text style={{ color: '#ffffff', fontSize: 12 }}>Continuar</Text>
                        </TouchableOpacity>
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

    welcomeImage: {

        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 50,


    },
    fixToText: {

        alignContent: 'center',
        alignItems: 'center',
        marginTop: 120
    },
    condicion: {

        width: '70%',
        flexDirection: "row",
        alignItems: 'center',
        marginLeft: 10,
        marginVertical: 10,

    },

});
