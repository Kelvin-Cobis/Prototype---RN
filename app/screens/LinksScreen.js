import React from 'react';
import { ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen() {
  return (
    <ImageBackground style={styles.welcomeImage} source={require('../assets/images/pagar.png')} />
  );
}

LinksScreen.navigationOptions = {
  title: 'Pagar',
  headerRight: () => (
    <Button
      onPress={() => alert('This is a button!')}
      title="Info"
      color="#fff"
    />
  ),
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
