import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class PagoQRScreen extends Component {


  constructor(props) {
    super(props);
    const { navigate } = this.props.navigation;
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    header: null

  });
  render() {
    return (
      <View style={{ height: '100%', width: '100%', backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
          marginTop: 40,
          marginBottom: 15,
          flexDirection: "row"
        }}>
          <TouchableOpacity style={styles.optionsHeader}
            onPress={() => this.props.navigation.navigate('Links')}
          >

            <View style={styles.optionHeader}>
              <Image source={require('../../assets/images/transfer-white.png')} />
            </View>
            <Text style={{ color: '#ffffff' }}>Pasa plata</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionsHeader}>
            <View style={styles.optionSlectedHeader}>
              <Image source={require('../../assets/images/barcode-qr.png')} />
            </View>
            <Text style={{ color: '#ffffff' }} >Pago con QR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionsHeader}>
            <View style={styles.optionHeader}>
              <Image source={require('../../assets/images/bank-account.png')} />
            </View>
            <Text style={{ color: '#ffffff' }} >Pago factura</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionsHeader}>
            <View style={styles.optionHeader}>
              <Image source={require('../../assets/images/mobile-white.png')} />
            </View>
            <Text style={{ color: '#ffffff' }} >Recarga</Text>
          </TouchableOpacity>
        </ScrollView>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  optionsHeader: {
    marginHorizontal: 10,
    alignItems: "center",
    alignContent: "center"
  },
  optionSlectedHeader: {
    width: 64,
    height: 64,
    borderRadius: 100,
    backgroundColor: '#000000',
    alignItems: "center",
    justifyContent: "center"
  },
  optionHeader: {
    width: 64,
    height: 64,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },

});
