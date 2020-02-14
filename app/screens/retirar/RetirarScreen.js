import React, { Component } from 'react';
import { Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';

import { Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1 }}
          region={{ latitude: -0.197737, longitude: -78.442623, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
          showsUserLocation={true} />

        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
          marginBottom: 15,
          flexDirection: "row"
        }}>
          <TouchableOpacity style={styles.optionsHeader}>
            <View style={styles.optionSlectedHeader}>
              <Image source={require('../../assets/images/channel-atm.png')} />
            </View>
            <Text style={{ color: '#0179C3', fontSize: 12 }}>Cajeros automático</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionsHeader}>
            <View style={styles.optionHeader}>
              <Image source={require('../../assets/images/company.png')} />
            </View>
            <Text style={{ fontSize: 12 }}>Corresponsales de servicios</Text>
          </TouchableOpacity>
        </View>
        <Content>
          <List keyboardShouldPersistTaps="always">

            <ListItem avatar onPress={() => this.props.navigation.navigate('MontoaRetirar')}>
              <Left>
                <Thumbnail source={require('../../assets/images/ubicacion.png')} />
              </Left>
              <Body>
                <View style={{ justifyContent: 'center', marginTop: 6, marginBottom:7 }}>
                  <Text>Banco Cobis - 10 de Agosto</Text>
                    <Text style={{ fontSize: 10 }} note>Av. 10 de Agosto y Naciones Unidas</Text>
                </View>
              </Body>
              <Right>
                <View style={{ marginVertical: 5 }}>
                  <Text style={{ fontSize: 10 }}>  </Text>
                </View>
                <Text style={{ fontSize: 10 }}>1km</Text>
              </Right>
            </ListItem>
            <ListItem avatar onPress={() => this.props.navigation.navigate('MontoaRetirar')}>
              <Left>
                <Thumbnail source={require('../../assets/images/ubicacion.png')} />
              </Left>
              <Body>
                <View style={{ justifyContent: 'center', marginTop: 6, marginBottom:7 }}>
                  <Text>Banco Cobis - 6 de diciembre</Text>
                    <Text style={{ fontSize: 10 }} note>Av. 6 de diciembre y Naciones Unidas</Text>
                </View>
              </Body>
              <Right>
                <View style={{ marginVertical: 5 }}>
                  <Text style={{ fontSize: 10 }}>  </Text>
                </View>
                <Text style={{ fontSize: 10 }}>1.1km</Text>
              </Right>
            </ListItem>
            <ListItem avatar onPress={() => this.props.navigation.navigate('MontoaRetirar')}>
              <Left>
                <Thumbnail source={require('../../assets/images/ubicacion.png')} />
              </Left>
              <Body>
                <View style={{ justifyContent: 'center', marginTop: 6, marginBottom:7 }}>
                  <Text>Banco Cobis - Quicentro</Text>
                    <Text style={{ fontSize: 10 }} note>Shyris y NNUU, Quicentro Shopping</Text>
                </View>
              </Body>
              <Right>
                <View style={{ marginVertical: 5 }}>
                  <Text style={{ fontSize: 10 }}>  </Text>
                </View>
                <Text style={{ fontSize: 10 }}>2km</Text>
              </Right>
            </ListItem>
            <ListItem avatar onPress={() => this.props.navigation.navigate('MontoaRetirar')}>
              <Left>
                <Thumbnail source={require('../../assets/images/ubicacion.png')} />
              </Left>
              <Body>
                <View style={{ justifyContent: 'center', marginTop: 6, marginBottom:7 }}>
                  <Text>Banco Cobis - Plaza de las Américas</Text>
                    <Text style={{ fontSize: 10 }} note>Av. América y Naciones Unidas</Text>
                </View>
              </Body>
              <Right>
                <View style={{ marginVertical: 5 }}>
                  <Text style={{ fontSize: 10 }}>  </Text>
                </View>
                <Text style={{ fontSize: 10 }}>2.5km</Text>
              </Right>
            </ListItem>
            <ListItem avatar onPress={() => this.props.navigation.navigate('MontoaRetirar')}>
              <Left>
                <Thumbnail source={require('../../assets/images/ubicacion.png')} />
              </Left>
              <Body>
                <View style={{ justifyContent: 'center', marginTop: 6, marginBottom:7 }}>
                  <Text>Banco Cobis - 10 de Agosto</Text>
                    <Text style={{ fontSize: 10 }} note>Av. 10 de Agosto y Naciones Unidas</Text>
                </View>
              </Body>
              <Right>
                <View style={{ marginVertical: 5 }}>
                  <Text style={{ fontSize: 10 }}>  </Text>
                </View>
                <Text style={{ fontSize: 10 }}>2.5km</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </View>

    );
  }
}


App.navigationOptions = {
  header: null,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },

  optionsHeader: {
    marginHorizontal: 10,
    alignItems: "center",
    alignContent: "center"
  },
  optionSlectedHeader: {
    width: 64,
    height: 64,
    borderRadius: 100,
    backgroundColor: '#E6F2F9',
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
