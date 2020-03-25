import React from 'react';
import {Alert, FlatList, ListItem, Text, View} from "react-native";
import TouchableOpacity from "react-native-web/dist/exports/TouchableOpacity";
import {globalStyles} from "../../styles/globalStyles";
import I18t from "../../translations";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {Container} from "../../components/Container";
import Icon from "react-native-vector-icons/FontAwesome";


const contacts = ["Anya", "Mama", "Papa"];

export const MyContacts = () => {


    const getListViewItem = (contact) => {
        Alert.alert(contact);
    };

    return (
        <Container title={I18t.t('MyContacts.containerHeader')}>
            <View>
                <FlatList
                    data={contacts}
                    renderItem={({contact}) =>
                        <TouchableOpacity>
                            <View style={globalStyles.menuItemContainer}>
                                <View style={globalStyles.menuItemInfo}>
                                    <Icon name="heart" style={globalStyles.menuItemIconGreen} />
                                    <Text style={globalStyles.menuItem}
                                          onPress={ (contact) => getListViewItem(contact)}>{contact}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    } />
            </View>
        </Container>
    )

};
