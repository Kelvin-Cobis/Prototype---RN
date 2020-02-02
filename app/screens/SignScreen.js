import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, TouchableNativeFeedback } from 'react-native';
import firebase from 'react-native-firebase';

export default class Registration extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    // componentDidMount() {
    //     firebase.auth().signInAnonymously()
    //         .then(() => {
    //             this.setState({
    //                 isAuthenticated: true,
    //             });
    //         });
    // }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground
                source={require('../../assets/Registration/RegistrationBackground.png')}
                style={{
                    flex: 1,
                }}>
                <View style={{ flex: 1 }} />
                <View style={{ flex: 2 }} >
                    <Image source={require('../../assets/Registration/CobisDigital.png')} style={{ marginLeft: '10%' }}></Image>
                </View>
                <View style={{ flex: 10 }} />
                <View style={{
                    flex: 3,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginHorizontal: '15%'
                }} >
                    <TouchableNativeFeedback
                        title="Go to SignUp"
                        onPress={() => this.props.navigation.navigate('SignUp')}
                        background={TouchableNativeFeedback.SelectableBackground}>
                        <Image source={require('../../assets/Registration/crearCuenta.png')} style={{ width: 100, height: 110 }}></Image>
                    </TouchableNativeFeedback>
                    <Image source={require('../../assets/Registration/ingresarCuenta.png')} style={{ width: 100, height: 110 }}></Image>
                </View>
                <View style={{ flex: 2 }} />
                <View style={{
                    flex: 1,
                    alignItems: 'center'
                }} >
                    <Text style={{ color: 'white' }}>Preguntas frecuentes</Text>
                </View>
                <View style={{ flex: 2 }} />
            </ImageBackground>
        );
    }
};