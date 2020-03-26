import React from 'react';
import {ProfileScreen} from "./app/screens/profile/ProfileScreen";
import {MyContacts} from "./app/screens/contacts/MyContacts";
import SignInScreen from "./app/screens/singIn/SignInScreen";
import {MyRequests} from "./app/screens/assist/myRequests/MyRequests";
import {RequestsListScreen} from "./app/screens/assist/myAssists/RequestsListScreen";


export default function App() {

    return (
            <RequestsListScreen/>
    );

}

