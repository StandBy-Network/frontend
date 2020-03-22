import React, { useContext } from 'react';
import {Keyboard, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import FlatButton from "../../components/Button";
import {globalStyles} from "../../styles/globalStyles";
import {Container} from "../../components/Container";
import TextLink from "../../components/TextLink";
import {AuthContext} from "../../routes/AuthProvider";


const loginSchema = yup.object({
    name: yup.string()
        .required('Nem megfelelő felhasználónév!'),
    password: yup.string()
        .required('Nem megfelelő jelszó!')

});

export default function SignInScreen({ navigation }) {
    const {login} = useContext(AuthContext);
    return (
        <Container>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <View>
                        <Text style={globalStyles.header}>BEJELENTKEZÉS</Text>
                    </View>
                    <View style={globalStyles.form}>
                        <Formik
                            initialValues={{ name: '', password: '' }}
                            validationSchema={loginSchema}
                            onSubmit={(values, actions) => {
                                actions.resetForm();
                                console.log(values);
                            }}>
                            {(props) => (
                                <View>
                                    <TextInput style={globalStyles.textinput}
                                               placeholder="Felhasználónév"
                                               value={props.values.name}
                                               onChangeText={props.handleChange('name')}
                                               onBlur={props.handleBlur('name')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.name && props.errors.name}</Text>
                                    <TextInput style={globalStyles.textinput}
                                               placeholder="Jelszó"
                                               value={props.values.password}
                                               onChangeText={props.handleChange('password')}
                                               onBlur={props.handleBlur('password')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.password && props.errors.password}</Text>
                                    <FlatButton text="Mehet" onPress={() => {
                                      //  props.handleSubmit;
                                        login();
                                      //  navigation.navigate("Main")
                                    }} style={globalStyles.actionButtonCenter}/>
                                    <TextLink text="Elfelejtett jelszó" onPress={() => {
                                        navigation.navigate("ForgotPassword")
                                    }} style={globalStyles.reversButtonCenter}/>
                                </View>
                            )}
                        </Formik>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Container>
    );
}
