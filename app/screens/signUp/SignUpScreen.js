import React from 'react';
import {Keyboard, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import FlatButton from "../../components/Button";
import {globalStyles} from "../../styles/globalStyles";
import {Container} from "../../components/Container";

const regSchema = yup.object({
    phone: yup.string()
        .required('Telefonszám megadása kötelező!'),
    email: yup.string()
        .email('Kérem, helyes emailcímet adjon meg!')
        .required('Emailcím megadása kötelező!'),
    name: yup.string()
        .required('Név megadása kötelező!'),
    zip: yup.string()
        .required('Település megadása kötelező!')
});

export default function SignUpScreen() {

    return (
        <Container>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <View>
                        <Text style={globalStyles.header}>REGISZTRÁCIÓ, FELIRATKOZÁS</Text>
                    </View>
                    <View style={globalStyles.form}>
                        <Formik
                            initialValues={{ phone: '', email: '', name: '', place: '' }}
                            validationSchema={regSchema}
                            onSubmit={(values, actions) => {
                                actions.resetForm();
                                console.log(values);
                            }}>
                            {(props) => (
                                <View>
                                    <TextInput style={globalStyles.textinput}
                                               placeholder="Név - vezetéknév, keresztnév"
                                               value={props.values.name}
                                               onChangeText={props.handleChange('name')}
                                               onBlur={props.handleBlur('name')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.name && props.errors.name}</Text>
                                    <TextInput style={globalStyles.textinput}
                                               placeholder="E-mail cím"
                                               value={props.values.email}
                                               onChangeText={props.handleChange('email')}
                                               onBlur={props.handleBlur('email')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.email && props.errors.email}</Text>
                                    <TextInput style={globalStyles.textinput}
                                               placeholder="Telefonszám"
                                               value={props.values.phone}
                                               onChangeText={props.handleChange('phone')}
                                               onBlur={props.handleBlur('phone')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.phone && props.errors.phone}</Text>
                                    <TextInput style={globalStyles.textinput}
                                               placeholder="Irányítószám"
                                               value={props.values.zip}
                                               onChangeText={props.handleChange('zip')}
                                               onBlur={props.handleBlur('zip')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.place && props.errors.place}</Text>
                                    <FlatButton text="Mehet" onPress={props.handleSubmit} style={globalStyles.actionButtonCenter}/>
                                </View>
                            )}
                        </Formik>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Container>
    );
}
