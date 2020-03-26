import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Text, View, Platform, PermissionsAndroid} from "react-native";
import TouchableOpacity from "react-native-web/dist/exports/TouchableOpacity";
import {globalStyles} from "../../styles/globalStyles";
import I18t from "../../translations";
import {Container} from "../../components/Container";
import Icon from "react-native-vector-icons/FontAwesome";
import Contacts from 'react-native-contacts';
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import TextAvatar from "react-native-text-avatar";
import { Avatar } from "react-native-elements";

 const myContacts = [
     {
         name: "Édes Anya",
         phone: "00363012234455"
     },
     {
         name: "Pesti Mama",
         phone: "00363012234455"
     },
     {
         name: "Balatoni Papa",
         phone: "00363012234455"
     }
     ];

export const MyContacts = () => {
  //  const [contacts, setContacts] = useState(null);

    {/*}

    useEffect(() => {
        if(Platform.OS === 'ios'){
            Contacts.getAll((err, contacts) => {
                if (err) {
                    throw err;
                }
                // contacts returned
                setContacts({contacts})
            })
        }else if(Platform.OS === 'android'){
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                    title: 'Contacts',
                    message: 'This app would like to view your contacts.'
                }
            ).then(() => {
                Contacts.getAll((err, contacts) => {
                    if (err === 'denied'){
                        // error
                    } else {
                        // contacts returned in Array
                        setContacts({contacts})
                    }
                })
            })
        }
    }, []);

    */}

    const getListViewItem = (contact) => {
        Alert.alert(contact.name);
    };

    return (
        <Container title={I18t.t('MyContacts.containerHeader')}>
            <View style={globalStyles.contactsContainer}>
                <View style={globalStyles.initials}>
                    <Icon style={globalStyles.contactsIcon} name="star" color='#E74F80' />
                </View>
                <View style={globalStyles.avatarContacts}>
                <FlatList
                    data={myContacts}
                    renderItem={({item}) =>
                        <TouchableOpacity>
                            <View style={globalStyles.avatarContactsContainer}>
                                <View style={globalStyles.menuItemInfo}>
                                    <TextAvatar
                                        backgroundColor={'#9B9B9B'}
                                        textColor={'#FAFAFA'}
                                        size={60}
                                        type={'circle'}
                                    >{item.name}</TextAvatar>
                                    <Text style={globalStyles.contactsText}
                                          onPress={ (item) => getListViewItem(item)}>{item.name}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    } />
                </View>
            </View>
        </Container>
    )

}
