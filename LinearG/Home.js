/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import {View, StyleSheet, Text, Image, Button} from 'react-native';

// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import LinearGradient from 'react-native-linear-gradient';

class Home extends Component {
  render() {
    return (
      <LinearGradient
        start={{x: -0.9, y: 0.6}}
        end={{x: 0.4, y: 1.0}}
        locations={[0, 0.5, 1.1]}
        colors={['#fff', '#ffff', '#0017ff']}
        style={styles.linearGradient}>
        <Image style={styles.img} source={require('./images/vs.png')} />
        <View style={styles.btnAcceder}>
          <Button title="Acceder" color="#3f4556" size="medium"
            onPress={() =>
                this.props.navigation.navigate('Login')
            }
          />
        </View>
        <View style={styles.btnReg}>
          <Button title="Registrarse" color="#3f4556" size="medium"
            onPress={() =>
                this.props.navigation.navigate('Register')
            }
          />
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
    height: 350,
  },
  btnAcceder: {
    backgroundColor: 'white',
    marginTop: '20%',
    marginBottom: 30,
    marginRight: '25%',
    marginLeft: '25%',
  },
  btnReg: {
    backgroundColor: 'white',
    marginRight: '25%',
    marginLeft: '25%',
  },
});
export default Home;
