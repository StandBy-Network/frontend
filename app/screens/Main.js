import React from 'react';
import {Container} from "../components/Container";
import {Alert, FlatList, Text, View} from 'react-native';
import {globalStyles} from "../styles/globalStyles";
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TouchableOpacity from "react-native-web/dist/exports/TouchableOpacity";
import I18t from "../translations";


const menuItems = [
    {
        icon:<Icon name="heart" style={globalStyles.menuItemIconRed} />,
        text:I18t.t('Main.helpRequest')
    },
    {
        icon:<MaterialIcon name="heart-multiple" style={globalStyles.menuItemIcon}  />,
        text:I18t.t('Main.myHelpRequests')
    },
    {
        icon:<Icon name="heart" style={globalStyles.menuItemIconGreen} />,
        text:I18t.t('Main.wantToHelp')
    },
    {
        icon:<MaterialIcon name="message" style={globalStyles.menuItemIcon}  />,
        text:I18t.t('Main.messages')
    },
    {
        icon: <Icon name="users" style={globalStyles.menuItemIcon}  />,
        text:I18t.t('Main.contacts')
    },
    {
        icon:<Icon name="user" style={globalStyles.menuItemIcon}  />,
        text:I18t.t('Main.profile')
    },
    {
        icon:<AntIcon name="poweroff" style={globalStyles.menuItemIcon} />,
        text:I18t.t('Main.logout')
    }
];

export const Main = () => {

    const getListViewItem = (item) => {
        Alert.alert(item.text);
    };

    return(
        <Container title={I18t.t('Main.containerHeader') }>
            <View>
                <FlatList
                    data={menuItems}
                    renderItem={({item}) =>
                        <TouchableOpacity>
                            <View style={globalStyles.menuItemContainer}>
                                <View style={globalStyles.menuItemInfo}>
                                    {item.icon}
                                    <Text style={globalStyles.menuItem}
                                          onPress={ (item) => getListViewItem(item)}>{item.text}</Text>
                                </View>
                                {
                                    item.text !== I18t.t('Main.logout') &&
                                    <MaterialIcon name="chevron-right" style={globalStyles.menuItemIconBlack}/>
                                }
                            </View>
                        </TouchableOpacity>
                    } />
            </View>
        </Container>
    )
};
