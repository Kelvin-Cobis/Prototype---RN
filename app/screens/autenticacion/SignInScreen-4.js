import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Icon } from 'native-base';

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
          <Image style={{ width: '100%', height: 85, marginBottom: 10 }} source={require('../../assets/images/confirmation--user.png')} />
        </View>

        <Text style={{ color: 'grey', fontSize: 11, marginHorizontal: 20, }}>
          Para completar el proceso de creación de su
          cuenta requerimos nos confirme la clave OTP enviada a su
          teléfono 09 876 5432
                  </Text>

        <View style={{
          justifyContent: "center",
          flexDirection: "row"
        }}>
          <View style={styles.numberBox}>

          </View>
          <View style={styles.numberBox}>
          </View>
          <View style={styles.numberBox}>
          </View>
          <View style={styles.numberBox}>
          </View>
        </View>

        <View>

          <View style={{
            justifyContent: "center",
            flexDirection: "row"
          }}>
            <TouchableOpacity style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            justifyContent: "center",
            flexDirection: "row"
          }}>
            <TouchableOpacity style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            justifyContent: "center",
            flexDirection: "row"
          }}>
            <TouchableOpacity style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            justifyContent: "center",
            flexDirection: "row"
          }}>
            <TouchableOpacity style={{
              width: 60,
              height: 60,
              marginHorizontal: 5,
              marginTop: 20,
            }}>

            </TouchableOpacity>
            <TouchableOpacity style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberCircle} 
            onPress={() => this.props.navigation.navigate('Index')}>
              <Icon name="erase" type='Entypo'   color='#0179C3'/>
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


});
