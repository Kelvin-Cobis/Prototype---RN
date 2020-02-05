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
      <View styles={{ marginHorizontal: 10 }}>
        <Button
          onPress={() => navigation.navigate('Index')}
          title="Salir"
          color="#4E7EB2"
        />
      </View>

  });

  render() {

    return (
      <View>
        <View style={styles.saldo}>
          <View style={{ marginTop: 20 }}>
            <Thumbnail large source={require('../assets/images/person.jpg')} />
          </View>



        </View>
        <View style={styles.transacciones}>
          <Text>Transacciones Pendientes </Text>
          <Content>
            <List>
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
        <View style={styles.transacciones}>
          <Text>Transacciones anteriores</Text>
          <Content>
            <List>
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

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 15,
  },
  welcomeImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#4E7EB2',
  },
  backButton: {
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saldo: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-start',
    borderWidth: 0.5,
    borderColor: 'grey',
    alignItems: 'center',
  },
  transacciones: {
    width: '100%',
    height: 140,

    borderWidth: 0.5,
    borderColor: 'grey',
  },

});
