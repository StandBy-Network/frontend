import React from 'react';
import {StyleSheet} from "react-native";

export const globalStyles = StyleSheet.create({
    actionButton: {
        padding: 20,
        paddingRight: 40,
        paddingLeft: 40,
        backgroundColor: '#D50000',
    },
    actionButtonCenter: {
        marginLeft: 60,
        marginRight: 60,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#D50000',
        marginTop: 30
    },
    actionButtonRight: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        alignItems: 'center',
        padding: 20,
        paddingRight: 40,
        paddingLeft: 40,
        backgroundColor: '#D50000',

    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 40,
    },
    cancelButton: {
        padding: 20,
        paddingRight: 40,
        paddingLeft: 40,
        backgroundColor: '#909090',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F2F2F2',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    errorText: {
        color: '#D50000',
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center'
    },
    form: {
        alignSelf: 'stretch',
        marginRight: 10,
        marginLeft: 10
    },
    header: {
        alignSelf: 'stretch',
        fontSize: 20,
        padding: 10,
        marginBottom: 40,
    },
    navHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    pwText: {
        color: '#D50000',
        fontWeight: 'bold',
        marginTop: 30,
        alignSelf: 'center'
    },
    reversButtonCenter: {
        color: '#D50000',
        fontWeight: 'bold',
        marginTop: 30,
        alignSelf: 'center'
    },
    screen: {
        flex: 1,
        justifyContent: 'space-between'
    },
    success: {
        color: '#D50000',
        alignSelf: 'center',
        fontSize: 14,
        padding: 10,
        marginBottom: 100,
    },
    text: {
        color: '#63E300',
        alignSelf: 'center',
        fontSize: 14,
        padding: 10,
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 20,
        borderBottomColor: '#9b9b9b',
        borderBottomWidth: 1
    },
    textLink: {
        color: '#D50000',
        fontWeight: 'bold'
    }
});

