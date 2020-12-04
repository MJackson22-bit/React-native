/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import {View, StyleSheet, Text, Image, Button} from 'react-native';

// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import LinearGradient from 'react-native-linear-gradient';

class App extends Component {
  render() {
    return (
      <LinearGradient
        start={{x: -0.7, y: 0.0}}
        end={{x: 0.4, y: 1.0}}
        locations={[0, 0.5, 1.1]}
        colors={['#151515', '#2d2e41', '#a50e6f']}
        style={styles.linearGradient}>
        <Image style={styles.img} source={require('./images/vs.png')} />
        <View style={styles.btnAcceder}>
          <Button title="Acceder" color="#2d2e41" size="medium" />
        </View>
        <View style={styles.btnReg}>
          <Button title="Registrarse" color="#2d2e41" size="medium" />
        </View>
      </LinearGradient>
    );
  }
}

// Later on in your styles..
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  img: {
    alignItems: 'center',
    width: 355,
    marginBottom: 30,
  },
  btnAcceder: {
    backgroundColor: 'white',
    marginBottom: 30,
    marginRight: '20%',
    marginLeft: '20%',
  },
  btnReg: {
    backgroundColor: 'white',
    marginRight: '20%',
    marginLeft: '20%',
  },
});
export default App;
