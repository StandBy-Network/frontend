import React, {useState} from 'react';
import {AsyncStorage} from "react-native-web";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider value={
            {
                user,
                login: () => {
                    const fakeUser = { userName: 'Bob'};
                    setUser(fakeUser);
                    AsyncStorage.setItem("user", JSON.stringify(fakeUser))
                },
                logout: () => {
                    AsyncStorage.removeItem("user");
                }

            }}>
            { children }
        </AuthContext.Provider>

    )
};
