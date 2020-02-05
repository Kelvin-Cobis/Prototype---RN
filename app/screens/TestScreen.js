import React, { Component } from 'react';

import { ScrollView, Image, Text, Form, Input, View } from 'react-native';

class Formulario extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  sincChange(value, property) {
    console.log(value);
    let state = {};
    state[property] = value;
    this.setState();
  }

  submitForm() {
    console.log('Se consumio el servicio API');
  }

  render() {
    return (
      <View>
        <Input
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={ev => {
            this.sincChange(ev.target.value, 'email');
          }}
        />
        <Input
          type="password"
          placeholder="Cotraseña"
          value={this.state.password}
          onChange={ev => {
            this.sincroPass(ev.target.value);
          }}
        />
        <View>
          <Input
            type="submit"
            value="Iniciar Sesión"
            onClick={() => this.submitForm}
          />
        </View>
      </View>
    );
  }
}
export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <Formulario />
      </ScrollView>
    );
  }
}