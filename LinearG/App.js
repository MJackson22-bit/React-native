/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import TerminosCondiciones from './TerminosCondiciones';
const Stack = createStackNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen
            name="TerminosCondiciones"
            component={TerminosCondiciones}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
