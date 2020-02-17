import { Icon } from 'native-base';
import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';


export default class ClaveOTPScreen extends Component {


  constructor(props) {
    super(props)
    this.state = { 
      count: [] 
    }
  }

  onPress = (digit) => {
    this.state.count = this.state.count + digit;
    console.log(this.state.count);
    if (this.state.count.length === 4) {
      this.props.navigation.navigate('Index');
    }
  }
  delete() {
    console.log(this.state.count);

  }

  render() {
    const { navigate } = this.props.navigation;
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
            <TouchableOpacity onPress={() => this.onPress(1)} style={styles.numberCircle} >
              <Text style={{ color: '#0179C3', fontSize: 40 }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onPress(2)} style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onPress(3)} style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.center}>
            <TouchableOpacity onPress={() => this.onPress(4)} style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onPress(5)} style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onPress(6)} style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.center}>
            <TouchableOpacity onPress={() => this.onPress(7)} style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onPress(8)} style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onPress(9)} style={styles.numberCircle}>
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
            <TouchableOpacity onPress={() => this.onPress(0)} style={styles.numberCircle}>
              <Text style={{ color: '#0179C3', fontSize: 40 }}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberCircle}
              onPress={() => this.delete()}>
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
