import React, { Component } from 'react';
import { ExpoConfigView } from '@expo/samples';
import { ScrollView, StyleSheet, ImageBackground , View, Button} from 'react-native';

export default class SettingsScreen extends Component {


  constructor(props) {
    super(props);
    const { navigate } = this.props.navigation;
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: 'Cobrar',
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

      <ImageBackground style={styles.welcomeImage} source={require('../assets/images/cobrar.png')} />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  welcomeImage: {
    marginTop: 40,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});