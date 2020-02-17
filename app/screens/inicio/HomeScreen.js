import React, { Component } from 'react';
import { Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon } from 'native-base';
import { TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';


export default class HomeScreen extends Component {

  static navigationOptions = () => ({
    header: null
  });

  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  cerrarSesion = () => {
    this.props.navigation.navigate('Autenticacion')
  };


  constructor(props) {
    super(props);
    this.state = {
      transaccionPendiente: ['Pago JC']
    };
  }


  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.transacciones}>

        <Content>
          <View style={styles.menuIcon}>
            <Menu
              ref={this.setMenuRef}
              button={<Icon name='more' onPress={this.showMenu}> </Icon>}
            >
              <MenuItem onPress={this.hideMenu}>Mi cuenta</MenuItem>
              <MenuItem onPress={this.hideMenu}>Cargar saldo</MenuItem>
              <MenuItem onPress={this.cerrarSesion}>Cerrar sesión</MenuItem>
            </Menu>
          </View>
          <List keyboardShouldPersistTaps="always">
            <View style={styles.informacion}>
              <Image style={{ width: 160, height: 160, borderRadius: 100 }} source={require('../../assets/images/person.jpg')} />
              <Text style={{ fontSize: 20 }}>Francisco Mendoza</Text>
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 10, color: 'grey' }}>Mi saldo</Text>
                <Text style={{ fontSize: 25 }}>$250.00</Text>
              </View>

            </View>
            <Text style={{ fontSize: 12, color: 'grey', marginStart: 10 }}>
              Transacciones pendientes
               </Text>
            <ListItem avatar onPress={() => this.props.navigation.navigate('SolicitudPago')}>
              <Left>
                <Thumbnail source={require('../../assets/images/person.jpg')} />
              </Left>
              <Body>
                <View style={{ justifyContent: 'space-around', marginVertical: 5 }}>
                  <Text>{this.state.transaccionPendiente[0]}</Text>
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
            <ListItem avatar
              onPress={() => this.props.navigation.navigate('SolicitudPago',
                { transaccionPendiente: this.state.transaccionPendiente })}>
              <Left>
                <Thumbnail source={require('../../assets/images/person.jpg')} />
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

            <Text style={{ fontSize: 12, color: 'grey', marginStart: 10, marginTop: 10 }}>
              Transacciones anteriores
               </Text>
            <ListItem avatar onPress={() => this.props.navigation.navigate('SolicitudPago')}>
              <Left>
                <Thumbnail source={require('../../assets/images/person.jpg')} />
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
            <ListItem avatar onPress={() => this.props.navigation.navigate('InfoTransaccion')}>
              <Left>
                <Thumbnail source={require('../../assets/images/person.jpg')} />
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
    marginTop: 0,
    marginBottom: 10,
    width: '100%',
    height: 275,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menuIcon: {
    marginTop: 30,
    alignItems: "flex-end",
    marginEnd: 10
  }

});
