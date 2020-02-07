/*import React, { Component } from 'react';
import { Animated, Easing, Platform } from 'react-native';
import BaseScreen from './ConfirmationScreen';
import SlideFromRightScreen from './CredentialScreen';
import CollapseExpandScreen from './IndexScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
let SlideFromRight = (index, position, width) => {
  const translateX = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [width, 0],
  })

  return { transform: [ { translateX } ] }
};

let SlideFromBottom = (index, position, height) => {
  const translateY = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [height, 0],
  })

  return { transform: [ { translateY } ] }
};

let CollapseTransition = (index, position) => {
  const opacity = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [0, 1, 1]
  });

  const scaleY = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [0, 1, 1]
  });

  return {
    opacity,
    transform: [ { scaleY } ]
  }
}

const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps) => {
      const { layout, position, scene } = sceneProps;
      const width = layout.initWidth;
      const height = layout.initHeight;
      const { index, route } = scene
      const params = route.params || {}; // <- That's new
      const transition = params.transition || 'default'; // <- That's new
      return {
        bottomTransition: SlideFromBottom(index, position, height),

      }[transition];
    },
  }
}

const RootStack = createStackNavigator({
  SlideFromRight: { screen: SlideFromRightScreen },
  SlideFromBottom: { screen: SlideFromRightScreen },
  Base: { screen: BaseScreen },
  CollapseExpand: { screen: CollapseExpandScreen }
}, {
    initialRouteName: 'Base',
    headerMode: 'screen',
    transitionConfig: TransitionConfiguration,
});

// export default TransitionApp
const AppContainer = createAppContainer(RootStack);
  
  export default class TransitionApp extends Component {
    render() {
      return <AppContainer />;
    }
  }
  
/*

 import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 import React, { Component } from 'react';
 
 var radio_props = [
   {label: 'param1', value: 0 },
   {label: 'param2', value: 1 }
 ];
  
 var RadioButtonProject = React.createClass({
   getInitialState: function() {
     return {
       value: 0,
     }
   },
   render: function() {
     return (
       <View>
         <RadioForm
           radio_props={radio_props}
           initial={0}
           onPress={(value) => {this.setState({value:value})}}
         />
       </View>
     );
   }
 });*/


 import * as React from 'react';
 import { View } from 'react-native';
 import { RadioButton } from 'react-native-paper';
import { Text } from 'native-base';
 
 export default class MyComponent extends React.Component {
   state = {
     checked: 'first',
   };
 
   render() {
     const { checked } = this.state;
 
     return (
       <View style={{marginTop:45}}>
         <RadioButton
           value="first"
           status={checked === 'first' ? 'checked' : 'unchecked'}
           onPress={() => { this.setState({ checked: 'first' }); }}
         >
           <Text>helo</Text>
         </RadioButton>
         <RadioButton
           value="second"
           status={checked === 'second' ? 'checked' : 'unchecked'}
           onPress={() => { this.setState({ checked: 'second' }); }}
         />
       </View>
     );
   }
 }