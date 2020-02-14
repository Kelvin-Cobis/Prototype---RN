import { Icon } from 'native-base';
import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';


export default class ClaveOTPScreen extends Component {
  
  
  constructor(props) {
    super(props)
    this.state = { count: [] }
  }

  onPress = (digit) => {
    let count = this.state.count + digit
    if (count.length === 4) {

    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const count = this.state.count
    return (
      <View>
        <View style={styles.welcomeImage}>
          <Image style={{ width: '100%', height: 85, marginBottom: 10 }}
            source={require('../../assets/images/confirmation--user.png')} />
        </View>

        <Text style={{ color: 'grey', fontSize: 11, marginHorizontal: 20, }}>
          Para completar el proceso de creación de su
          cuenta requerimos nos confirme la clave OTP enviada a su
          teléfono 09 876 5432
        </Text>

        <View style={styles.center}>
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
          <View style={styles.center}>
            <TouchableOpacity  onPress={() => this.onPress(1)} style={styles.numberCircle} >
              <Text style={{ color: '#0179C3', fontSize: 40 }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.center}>
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
          <View style={styles.center}>
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
          <View style={styles.center}>
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
              <Image source={require('../../assets/images/delete.png')} />
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}

ClaveOTPScreen.navigationOptions = {

  header: null
};

const styles = StyleSheet.create({

  welcomeImage: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  center: {
    justifyContent: "center",
    flexDirection: "row"
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
