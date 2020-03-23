import React from 'react';
import {Providers} from "./app/routes/Providers";
import {ProfileScreen} from "./app/screens/profile/ProfileScreen";
import SignInScreen from "./app/screens/singIn/SignInScreen";
import {PasswordSentScreen} from "./app/screens/singIn/PasswordSentScreen";
import {ForgotPasswordScreen} from "./app/screens/singIn/ForgotPasswordScreen";
import {SignUpSuccessScreen} from "./app/screens/signUp/SignUpSuccessScreen";
import SignUpScreen from "./app/screens/signUp/SignUpScreen";


export default function App() {

    return (
            <PasswordSentScreen/>
    );

}

