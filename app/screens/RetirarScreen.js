import React from 'react';
import { ScrollView, StyleSheet,ImageBackground } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function RetirarScreen() {
  return (
    

      <ImageBackground style={styles.welcomeImage} source={require('../assets/images/cobrar.png')} />
  
  );
}

RetirarScreen.navigationOptions = {
  title: 'Retirar',
};

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