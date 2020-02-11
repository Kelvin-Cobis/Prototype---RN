import React, { Component } from 'react';
import { List, ListItem, Left, Body, Thumbnail, Text} from 'native-base';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'


export default class SignIn extends Component {


  render() {

    return (
      <View style={styles.contenedor}>

        <View style={styles.cabecera}>
          <View style={styles.center}>
            <Image source={require('../assets/images/information.png')} />
          </View>

          <View style={styles.center}>
            <Text style={{ fontSize: 12, color: '#4D7EAB' }}>Ingrese el PIN proporsionado por el contacto</Text>
          </View>
        </View>

        <View style={{
          justifyContent: "center",
          flexDirection: "row",
          marginTop: 15
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
