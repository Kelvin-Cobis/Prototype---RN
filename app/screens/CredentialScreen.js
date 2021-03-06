import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';

export default class CredentialScreen extends Component {
    render() {

        return (
            <View style={styles.container} >
                <View
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>

                    <ImageBackground style={styles.welcomeImage} source={require('../assets/images/start.png')} >

                        <View style={styles.welcomeContent} />

                        <View style={styles.welcomeContent}>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Index')}
                                style={styles.avatarContainer}>

                                <Image source={require('../assets/images/autenticacionFacial.png')} />

                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}
                                style={styles.avatarContainer}>

                                <Image source={require('../assets/images/autenticacionHuella.png')} />

                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('IngresarPIN')} style={styles.avatarContainer}>

                                <Image source={require('../assets/images/autenticacionPIN.png')} />

                            </TouchableOpacity>

                        </View>


                    </ImageBackground>

                </View>
            </View>
        );
    }
}

CredentialScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    welcomeContent: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    welcomeImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },

    avatarContainer: {
        alignContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 110,
        borderRadius: 5,
        margin: '2%',
    },
    container: {
        flex: 1,
        backgroundColor: '#4E7EB2',

    },
    bigWhite: {
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 0,

    },

    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

});
