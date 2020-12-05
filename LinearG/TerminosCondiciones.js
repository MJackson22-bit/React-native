/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
class TerminosCondiciones extends Component{
    render(){
        return (
            <View style={styles.vTitle}>
                <Text>TÉRMINOS Y CONDICIONES DE LA APLICACIÓN MÓVIL</Text>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    vTitle: {
        borderColor: '#000',
        alignSelf: 'center',
        marginTop: '5%',
        borderWidth: 1,
        height: 70,
    },
});
export default TerminosCondiciones;
