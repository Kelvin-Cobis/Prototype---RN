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
      <View>
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
        <View>

          
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

});
