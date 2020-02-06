import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';


import { StyleSheet, Button, View } from 'react-native';


export default class HomeScreen extends Component {


  constructor(props) {
    super(props);
    const { navigate } = this.props.navigation;
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: 'Saldo',
    headerRight:
      <View style={styles.backButton}>
        <Button
          onPress={() => navigation.navigate('Index')}
          title="Salir"
          color="#4E7EB2"
        />
      </View>

  });

  render() {

    return (
      <View style={styles.transacciones}>
        <Content>
          <List>
            <View style={styles.informacion}>
              <Thumbnail large source={require('../assets/images/person.jpg')} />
              <Text style={{ fontSize: 20 }}>Francisco Mendoza</Text>
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 10, color: 'grey' }}>Mi saldo</Text>
                <Text style={{ fontSize: 25 }}>$250.00</Text>
              </View>

            </View>
            <Text style={{ fontSize: 12, color: 'grey' }}>
              Transacciones pendientes
               </Text>
                       
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/images/person.jpg')} />
              </Left>
              <Body>
                <Text>Pago JC</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <Text style={{ fontSize: 12, color: 'grey' }}>
              Transacciones anteriores
               </Text>
                  
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/images/person.jpg')} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/images/person.jpg')} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
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
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    height: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

});
