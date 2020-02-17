import React, { Component } from 'react';
import { List, ListItem, Left, Body, Thumbnail, Text } from 'native-base';
import { StyleSheet, Image, View, TouchableOpacity, AsyncStorage, ToastAndroid } from 'react-native';
import { Icon } from 'react-native-elements'


export default class SignIn extends Component {

  constructor(props) {
    super(props)
    this.state = { count: [] }
  }

  registerDigit(digit) {
    const pin = [...this.state.pin, digit];
    if (pin.length === 4) {
      const user = this._getUser
      if (pin === user.password)
        this.props.navigation.navigate('Main')
      else {
        ToastAndroid.show('Credenciales incorrectas', ToastAndroid.SHORT);
      }
    }
    this.setState(() => {
      return {
        pin
      }
    })
  }

  onPress = (digit) => {
    let count = this.state.count + digit
    if (count.length === 4) {
      let pin = "cobis"
      this._getUser().then(user => {
        pin += count
        console.log(user)
        if (pin === user.password)
          this.props.navigation.navigate('Main')
        else {
          ToastAndroid.show('Credenciales incorrectas', ToastAndroid.SHORT);
          count = []
        }
      })
    }
    this.setState({
      count
    })
  }


  _getUser = async () => {
    const user = {}
    try {
      user.email = await AsyncStorage.getItem('email');
      user.password = await AsyncStorage.getItem('password');
      user.uid = await AsyncStorage.getItem('uid');
    } catch (error) {
      console.log(error);
    }
    return user
  }

  render() {
    const count = this.state.count
    return (
      <View style={styles.contenedor}>
        <View style={styles.cabecera}>
          <View style={styles.center}>
            <Image source={require('../assets/images/information.png')} />
          </View>

          <View style={styles.center}>
            <Text style={{ fontSize: 12, color: '#4D7EAB' }}>Ingrese su count de autenticación</Text>
          </View>
        </View>

        <View style={{
          justifyContent: "center",
          flexDirection: "row",
          marginTop: 15
        }}>
          <View style={styles.numberBox}>
            <Text style={{
              color: '#0179C3', fontSize: 40
            }}>{this.state.count[0]}</Text>
          </View>
          <View style={styles.numberBox}>
            <Text style={{
              color: '#0179C3', fontSize: 40
            }}>{this.state.count[1]}</Text>
          </View>
          <View style={styles.numberBox}>
            <Text style={{
              color: '#0179C3', fontSize: 40
            }}>{this.state.count[2]}</Text>
          </View>
          <View style={styles.numberBox}>
            <Text style={{
              color: '#0179C3', fontSize: 40
            }}>{this.state.count[3]}</Text>
          </View>
        </View>

        <View>

          <View style={{
            justifyContent: "center",
            flexDirection: "row"
          }}>
            <TouchableOpacity style={styles.numberCircle} onPress={() => this.onPress(1)}>
              <Text style={{ color: '#0179C3', fontSize: 40 }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberCircle} onPress={() => this.onPress(2)}>
              <Text style={{ color: '#0179C3', fontSize: 40 }}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }} onPress={() => this.onPress(3)}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            justifyContent: "center",
            flexDirection: "row"
          }}>
            <TouchableOpacity style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }} onPress={() => this.onPress(4)}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }} onPress={() => this.onPress(5)}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }} onPress={() => this.onPress(6)}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            justifyContent: "center",
            flexDirection: "row"
          }}>
            <TouchableOpacity style={styles.numberCircle}

            >
              <Text style={{ color: '#0179C3', fontSize: 40 }} onPress={() => this.onPress(7)}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }} onPress={() => this.onPress(8)}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }} onPress={() => this.onPress(9)}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            justifyContent: "center",
            flexDirection: "row"
          }}>
            <TouchableOpacity style={{
              width: 70,
              height: 70,
              marginHorizontal: 5,
              marginTop: 20,
            }}>

            </TouchableOpacity>
            <TouchableOpacity style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }} onPress={() => this.onPress(0)}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberCircle}
              onPress={() => this.props.navigation.navigate('Index')}>
              <Image source={require('../assets/images/delete.png')} />
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
    marginTop: 50,


  },
  fixToText: {

    alignContent: 'center',
    alignItems: 'center',
    marginTop: 120
  },
  numberBox: {

    width: 60,
    height: 60,
    borderWidth: 0.75,
    borderRadius: 4,
    marginHorizontal: 5,
    marginTop: 20,
    justifyContent: 'center', alignItems: 'center',
    borderColor: 'rgba(153, 153, 153, 0.5)',

  },
  numberCircle: {

    width: 70,
    height: 70,
    borderWidth: 0.75,
    borderRadius: 100,
    marginHorizontal: 10,
    marginTop: 15,
    borderColor: 'rgba(153, 153, 153, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  contenedor: {
    width: '100%',
    height: '100%',
  },
  cabecera: {
    width: '100%',
    height: 50,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 40,
    marginBottom: 20
  },
  center: {
    alignItems: "center",
    alignContent: "center"
  },

});
