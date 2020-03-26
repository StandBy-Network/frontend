import React from 'react';
import {Alert, FlatList, Text, View} from 'react-native';
import {Container} from "../../../components/Container";
import I18t from "../../../translations";
import TouchableOpacity from "react-native-web/dist/exports/TouchableOpacity";
import {globalStyles} from "../../../styles/globalStyles";
import {Avatar} from "react-native-elements";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const requests = [
    {
        date: '2020.04.05 11:05',
        request: "Gyógyszer kellene sürgősen",
        status: I18t.t('MyRequests.status.new')
    }
];

export const RequestsListScreen = () => {
    const getListViewItem = (item) => {
        Alert.alert(item.text);
    };

    return(
        <Container title={I18t.t('RequestListScreen.containerHeader')}>
            <View>
                <FlatList
                    data={requests}
                    renderItem={({item}) =>
                        <TouchableOpacity onPress={ (item) => getListViewItem(item)}>
                            <View style={globalStyles.requestContainer}>
                                <View style={globalStyles.requestListInfo}>
                                    <Text style={globalStyles.requestDate}>{item.date}</Text>
                                    <Text style={globalStyles.requestText}>{item.request}</Text>
                                </View>
                                <Avatar  rounded
                                         title={item.status}
                                         titleStyle={{fontSize: '0.75rem', color: 'black'}}
                                         size="medium"
                                         overlayContainerStyle={
                                             item.status === I18t.t('MyRequests.status.new')
                                                 ? {backgroundColor: "#FCF179"}
                                                 : item.status === I18t.t('MyRequests.status.on')
                                                 ? {backgroundColor: "#F7B82E"}
                                                 : {backgroundColor: "#81E422"}}
                                />
                                <MaterialIcon name="chevron-right" style={globalStyles.menuItemIconBlack}/>
                            </View>
                        </TouchableOpacity>
                    } />
            </View>
        </Container>
    )
};
