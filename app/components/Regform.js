import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class Regform extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text style={styles.header}>Regisztráció</Text>
                    <Text></Text>
                </View>
                <View style={styles.regform}>
                    <TextInput style={styles.textinput}
                               placeholder="Telefonszám"
                               underlineColorAndroid={'transparent'} />
                    <TextInput style={styles.textinput}
                               placeholder="Email"
                               underlineColorAndroid={'transparent'} />
                    <TextInput style={styles.textinput}
                               placeholder="Felhasználónév"
                               underlineColorAndroid={'transparent'} />
                    <TextInput style={styles.textinput}
                               placeholder="Cím (település)"
                               underlineColorAndroid={'transparent'} />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btntext}>Regisztráció</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    regform: {
        alignSelf: 'stretch',
        marginRight: 20,
        marginLeft: 20
    },
    header: {
        alignSelf: 'stretch',
        fontSize: 24,
        color: '#fff',
        padding: 10,
        marginBottom: 40,
        borderBottomColor: '#269EFC',
        borderBottomWidth: 1,
        backgroundColor: '#269EFC'
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1
    },
    button: {
        marginLeft: 60,
        marginRight: 60,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#269EFC',
        marginTop: 30
    },
    btntext: {
        color: '#fff',
        fontWeight: 'bold'
    }
});
