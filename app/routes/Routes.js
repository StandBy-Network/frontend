import React, { useState, useEffect, useContext } from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from "@react-navigation/native";
import SignInScreen from "../screens/singIn/SignInScreen";
import {ForgotPasswordScreen} from "../screens/singIn/ForgotPasswordScreen";
import {PasswordSentScreen} from "../screens/singIn/PasswordSentScreen";
import {Main} from "../screens/Main";
import {Container} from "../components/Container";
import ActivityIndicator from "react-native-web/src/exports/ActivityIndicator";
import {AsyncStorage} from "react-native-web";
import {AuthContext} from "./AuthProvider";
import {CreateRequestScreen} from "../screens/assist/request/CreateRequestScreen";
const Stack = createStackNavigator();

// const Drawer = createDrawerNavigator();

export const Routes = () => {
    const {user, login} = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AsyncStorage.getItem("user")
            .then(userString => {
                if(userString) {
                    login();
                }
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    if(loading) {
        return (
            <Container>
                <ActivityIndicator size="large"/>
            </Container>
        );
    }

    return (
        <NavigationContainer>

            {/*    {user ?
                <Stack.Navigator
                    screenOptions={{
                        headerTitle: "SEGÍTSNEKEM - ASSIST",
                        headerStyle: {
                            backgroundColor: '#F5F5F5',
                        },
                    }}
                >
                    <Stack.Screen name="Main" component={Main} />
                </Stack.Navigator>
            ) : (   */}
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name='SignIn' component={SignInScreen}/>
                    <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen}/>
                    <Stack.Screen name="PasswordSent" component={PasswordSentScreen} />
                    <Stack.Screen name="Main" component={Main} />
                    <Stack.Screen name="CreateRequest" component={CreateRequestScreen}/>
                </Stack.Navigator>
            {/*      )} */}

        </NavigationContainer>
    )
};
