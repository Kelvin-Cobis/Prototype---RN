import React, { Component } from 'react';
import { Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { TouchableOpacity, StyleSheet, Image, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;

}

export default class ContactosScreen extends Component {



  constructor(props) {
    super(props);
    const { navigate } = this.props.navigation;
  }

  static navigationOptions = () => ({

    
    headerRight:
      <View style={styles.backButton}>
        <TextInput

        />
      </View>

  });

  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.transacciones}>
        <Content>
          <List keyboardShouldPersistTaps="always">

            <Text style={{ fontSize: 12, color: 'grey', marginStart: 10 , marginTop:15}}>
              Contactos frecuentes
               </Text>
            <ListItem avatar onPress={() => this.props.navigation.navigate('Cobrar')}>
              <Left>
                <View style={{
                  borderRadius: 100,
                  width: 56,
                  height: 56,
                  justifyContent: "center",
                  alignContent: "center",
                  backgroundColor: random_bg_color(),
                }}>
                  <Text style={{ fontSize: 25, color: "#ffffff" }}>FA</Text>
                </View>
              </Left>
              <Body>
                <View style={{ justifyContent: 'space-around', marginVertical: 5 }}>
                  <Text>Fernando Alvarado</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 10 }} note>0987654321 </Text>
                  </View>
                </View>
              </Body>
            </ListItem>
            <ListItem avatar onPress={() => this.props.navigation.navigate('Cobrar')}>
              <Left>
                <View style={{
                  borderRadius: 100,
                  width: 56,
                  height: 56,
                  justifyContent: "center",
                  alignContent: "center",
                  backgroundColor: random_bg_color(),
                }}>
                  <Text style={{ fontSize: 25, color: "#ffffff" }}>MA</Text>
                </View>
              </Left>
              <Body>
                <View style={{ justifyContent: 'space-around', marginVertical: 5 }}>
                  <Text>Marco Albuja</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 10 }} note>0987654321 </Text>
                  </View>
                </View>
              </Body>
            </ListItem>
            <ListItem avatar onPress={() => this.props.navigation.navigate('Cobrar')}>
              <Left>
                <View style={{
                  borderRadius: 100,
                  width: 56,
                  height: 56,
                  justifyContent: "center",
                  alignContent: "center",
                  backgroundColor: random_bg_color(),
                }}>
                  <Text style={{ fontSize: 25, color: "#ffffff" }}>MF</Text>
                </View>
              </Left>
              <Body>
                <View style={{ justifyContent: 'space-around', marginVertical: 5 }}>
                  <Text>Marco Flores</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 10 }} note>0987654321 </Text>
                  </View>
                </View>
              </Body>
            </ListItem>
            <ListItem avatar onPress={() => this.props.navigation.navigate('Cobrar')}>
              <Left>
                <View style={{
                  borderRadius: 100,
                  width: 56,
                  height: 56,
                  justifyContent: "center",
                  alignContent: "center",
                  backgroundColor: random_bg_color(),
                }}>
                  <Text style={{ fontSize: 25, color: "#ffffff" }}>AF</Text>
                </View>
              </Left>
              <Body>
                <View style={{ justifyContent: 'space-around', marginVertical: 5 }}>
                  <Text>Alicia Fernandez</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 10 }} note>0987654321 </Text>
                  </View>
                </View>
              </Body>
            </ListItem>
            <ListItem avatar onPress={() => this.props.navigation.navigate('Cobrar')}>
              <Left>
                <View style={{
                  borderRadius: 100,
                  width: 56,
                  height: 56,
                  justifyContent: "center",
                  alignContent: "center",
                  backgroundColor: random_bg_color(),
                }}>
                  <Text style={{ fontSize: 25, color: "#ffffff" }}>FA</Text>
                </View>
              </Left>
              <Body>
                <View style={{ justifyContent: 'space-around', marginVertical: 5 }}>
                  <Text>Fernando Alvarado</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 10 }} note>0987654321 </Text>
                  </View>
                </View>
              </Body>
            </ListItem>
            <ListItem avatar onPress={() => this.props.navigation.navigate('Cobrar')}>
              <Left>
                <View style={{
                  borderRadius: 100,
                  width: 56,
                  height: 56,
                  justifyContent: "center",
                  alignContent: "center",
                  backgroundColor: random_bg_color(),
                }}>
                  <Text style={{ fontSize: 25, color: "#ffffff" }}>VC</Text>
                </View>
              </Left>
              <Body>
                <View style={{ justifyContent: 'space-around', marginVertical: 5 }}>
                  <Text>Viviana Cordova</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 10 }} note>0987654321 </Text>
                  </View>
                </View>
              </Body>
            </ListItem>

          </List>
        </Content>

      </View>

    )
  }
}



const styles = StyleSheet.create({

  welcomeImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#4E7EB2',
  },
  backButton: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transacciones: {
    width: '100%',
    height: '100%',
  },
  informacion: {
    marginTop: 50,
    marginBottom: 10,
    width: '100%',
    height: 275,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

});
