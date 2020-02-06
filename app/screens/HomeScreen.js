import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { TouchableOpacity, StyleSheet, Button, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';


export default class HomeScreen extends Component {



  /*  constructor(props) {
      super(props);
      const { navigate } = this.props.navigation;
    }
  */
  static navigationOptions = () => ({
    header: null

    /*headerTitle: 'Saldo',
    headerRight:
      <View style={styles.backButton}>
        <Button
          onPress={() => navigation.navigate('Index')}
          title="Salir"
          color="#4E7EB2"
        />
      </View>*/

  });

  render() {
    const { navigate } = this.props.navigation;
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
            <TouchableOpacity onPress={() => this.props.navigation.navigate('homeStak')}>
              <ListItem avatar >
                <Left>
                  <Thumbnail source={require('../assets/images/person.jpg')} />
                </Left>
                <Body>
                  <View style={{ justifyContent: 'space-around', marginVertical: 5 }}>
                    <Text>Pago JC</Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ fontSize: 10 }} note>Francisco Mendoza</Text>
                      <Text style={{ fontSize: 10 }} note>0987654321 </Text>
                    </View>
                  </View>
                </Body>
                <Right>
                  <View style={{ marginVertical: 5 }}>
                    <Text style={{ fontSize: 10 }}>$50.00  </Text>
                  </View>
                  <Text style={{ fontSize: 10 }}>14 de enero</Text>
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('homeStak')}>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={require('../assets/images/person.jpg')} />
                </Left>
                <Body>
                  <View style={{ justifyContent: 'space-around', marginVertical: 5 }}>
                    <Text>Pago JC</Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ fontSize: 10 }} note>Francisco Mendoza</Text>
                      <Text style={{ fontSize: 10 }} note>0987654321 </Text>
                    </View>
                  </View>
                </Body>
                <Right>
                  <View style={{ marginVertical: 5 }}>
                    <Text style={{ fontSize: 10 }}>$50.00  </Text>
                  </View>
                  <Text style={{ fontSize: 10 }}>14 de enero</Text>
                </Right>
              </ListItem>
            </TouchableOpacity>

            <Text style={{ fontSize: 12, color: 'grey' }}>
              Transacciones anteriores
               </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('InfoTransaccion')}>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={require('../assets/images/person.jpg')} />
                </Left>
                <Body>
                  <View style={{ justifyContent: 'space-around', marginVertical: 5 }}>
                    <Text>Almuerzo cumple Vivi</Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ fontSize: 10 }} note>Francisco Mendoza</Text>
                      <Text style={{ fontSize: 10 }} note>0987654321 </Text>
                    </View>
                  </View>
                </Body>
                <Right>
                  <View style={{ marginVertical: 5 }}>
                    <Text style={{ fontSize: 10 }}>$50.00  </Text>
                  </View>
                  <Text style={{ fontSize: 10 }}>14 de enero</Text>
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('pressa')}>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={require('../assets/images/person.jpg')} />
                </Left>
                <Body>
                  <View style={{ justifyContent: 'space-around', marginVertical: 5 }}>
                    <Text>Computadora MackBook</Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ fontSize: 10 }} note>Francisco Mendoza</Text>
                      <Text style={{ fontSize: 10 }} note>0987654321 </Text>
                    </View>
                  </View>
                </Body>
                <Right>
                  <View style={{ marginVertical: 5 }}>
                    <Text style={{ fontSize: 10 }}>$50.00  </Text>
                  </View>
                  <Text style={{ fontSize: 10 }}>14 de enero</Text>
                </Right>
              </ListItem>
            </TouchableOpacity>
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
    height: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

});
