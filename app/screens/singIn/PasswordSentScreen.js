import React from 'react';
import I18t from "../../translations";
import {SuccessScreenComponent} from "../../components/SuccessScreenComponent";

export const PasswordSentScreen = () => {

    return(
        <SuccessScreenComponent
            successText={I18t.t('PasswordSent.text')}
            buttonText={I18t.t('PasswordSent.button')} />
    )
};
