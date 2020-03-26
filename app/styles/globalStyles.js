import React from 'react';
import {StyleSheet} from "react-native";
import TextAvatar from "react-native-text-avatar";

export const globalStyles = StyleSheet.create({
    actionButton: {
        padding: '1.25rem',
        width: '9rem',
        backgroundColor: '#D50000',
    },
    actionButtonCenter: {
        alignSelf: 'center',
        padding: '1.25rem',
        width: '12rem',
        backgroundColor: '#D50000',
    },
    actionButtonRight: {
        position: 'absolute',
        right: 0,
        bottom: '0.75rem',
        alignItems: 'center',
        padding: '1.25rem',
        width: '10rem',
        backgroundColor: '#D50000',
    },
    avatarContacts: {
        flex: 5,
        width: '100%',
    },
    avatarContactsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fafafa',
        marginBottom: '0.25rem',
        padding: '0.625rem'
    },
    contactsText: {
        padding: '0.875rem',
        fontSize: '1.125rem',
        height: '3.125rem',
    },
    buttonContainer: {
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    centerButtonContainer: {
        flex: 1,
        height: '100%',
        marginBottom: '6rem'
    },
    buttonText: {
        color: '#fff',
        alignSelf: 'center'
    },
    cancelButton: {
        padding: '1.25rem',
        width: '9rem',
        backgroundColor: '#909090',
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FAFAFA',
    },
    containerBody: {
        flex: 11,
        height: '100%',
        paddingRight: '1.25rem',
        paddingLeft: '1.25rem',
        paddingTop: '0.625rem',
        paddingBottom: '0.625rem',
    },
    containerHeader: {
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#F5F5F5",
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem'
    },
    containerTouchable: {
        flex: 1,
        flexDirection: 'row'
    },
    containerHeaderIcon: {
        fontSize: '1.375rem',
        paddingLeft: '1.25rem',
        paddingRight: '0.75rem',
        color: "#717171"
    },
    contactsContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%'
    },
    contactsIcon: {
        fontSize: '1.45rem',
        padding: '1rem',
        marginTop: '0.5rem'
    },
    containerHeaderText: {
        fontSize: '1.375rem',
        paddingLeft: '0.625rem'
    },
    content: {
        flex: 1,
        height: '100%',
        alignItems: 'space-between'
    },
    errorContainer: {
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    errorIcon: {
        color: '#D50000',
        marginLeft: '0.625rem'
    },

    errorText: {
        color: '#D50000',
        fontSize: '0.95rem',
        marginBottom: '0.025rem',
        marginTop: '0.025rem'
    },
    form: {
        flex: 8,
        height: '100%',
        alignSelf: 'stretch',
        marginRight: '0.625rem',
        marginLeft: '0.625rem'
    },
    header: {
        alignSelf: 'stretch',
        fontSize: '1.25rem',
        padding: '0.625rem',
        marginBottom: '2.5rem',
        flex: 1,
        height: '100%'
    },
    initials: {
        flex:1,
        width: '100%'
    },
    label: {
        color: "#979797",
        marginTop: '0.25rem'
    },
    menuItem: {
        padding: '0.875rem',
        fontSize: '1.125rem',
        height: '3.125rem',
        color: '#EB6E61'
    },
    menuItemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: '0.25rem',
        padding: '0.625rem'
    },
    menuItemIcon: {
        color: "#979797",
        fontSize: '1.45rem'
    },
    menuItemIconRed: {
        color: "#D50000",
        fontSize: '1.45rem'
    },
    menuItemIconGreen: {
        color: "#63E300",
        fontSize: '1.45rem'
    },
    menuItemIconBlack: {
        fontSize: '1.45rem'
    },
    menuItemInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    navHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    pwText: {
        color: '#D50000',
        fontSize: '1.25rem',
        marginTop: '10.875rem',
        alignSelf: 'center',
    },
    redTitle: {
        color: '#D50000',
        fontSize: '1rem',
        marginBottom: '1.275rem',
        marginTop: '1rem',
    },
    textLinkCenter: {
        color: '#D50000',
        fontWeight: 'bold',
        marginTop: '1.875rem',
        alignSelf: 'center'
    },
    screen: {
        flex: 1,
        justifyContent: 'space-between'
    },
    success: {
        flex: 2,
        height: '100%',
        color: '#D50000',
        alignSelf: 'center',
        fontSize: '0.875rem',
        padding: '0.625rem',
        marginBottom: '6.25rem',
    },
    text: {
        flex: 6,
        height: '100%',
        color: '#63E300',
        alignSelf: 'center',
        fontSize: '0.875rem',
        padding: '0.625rem',
    },
    textInput: {
        alignSelf: 'stretch',
        height: '2.5rem',
        marginBottom: '1rem',
        marginTop: '0.25rem',
        borderBottomColor: '#9b9b9b',
        borderBottomWidth: 1,

    },
    textInputRed: {
        alignSelf: 'stretch',
        fontSize: '1.15rem',
        height: '2rem',
        marginBottom: '0.25rem',
        marginTop: '0.25rem',
        borderBottomColor: '#D50000',
        borderBottomWidth: 1,
        selectionColor: '##D50000'
    },
    textLink: {
        color: '#D50000',
        fontWeight: 'bold',
        marginTop: '1rem',
    }
});

