/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
/**/
import {ScrollView, View, StyleSheet, Image, Text, Button, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
class Login extends Component {
  render() {
    return (
        <LinearGradient start={{x: -0.4, y: 0.4}}
            end={{x: 0.9, y: 1.2}}
            locations={[0, 0.5, 1.1]}
            colors={['#FFFF', '#2d2e41', '#151515']}
            style={styles.linearGradient}>
            <ScrollView>
                <Image style={styles.img} source={require('./images/vs.png')} />
                <View style={styles.view}>
                    <Text style={styles.label}>Ingrese sus datos</Text>
                    <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Username"
                        placeholderTextColor = "#000"
                        autoCapitalize = "none"s
                    />
                    <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Password"
                        placeholderTextColor = "#FFFF"
                        autoCapitalize = "none"
                    />
            </View>
            <View style={styles.btnLogin}>
                <Button title="Acceder" color="#3f4556" size="medium"
                onPress={() =>
                  this.props.navigation.navigate('TerminosCondiciones')
                }/>
            </View>
            </ScrollView>
        </LinearGradient>
    );
  }
}
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  btnLogin: {
    marginRight: '30%',
    marginLeft: '30%',
  },
  input: {
    margin: 15,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
   },
  img: {
    alignItems: 'center',
    width: 355,
    marginBottom: 30,
    height: 350,
  },
  view: {
      marginBottom: 10,
  },
  label: {
      fontWeight: 'bold',
      fontSize: 27,
      alignSelf: 'center',
  },
});
export default Login;
