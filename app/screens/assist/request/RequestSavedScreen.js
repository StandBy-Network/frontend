import React from 'react';
import {SuccessScreenComponent} from "../../../components/SuccessScreenComponent";
import I18t from "../../../translations";


export const RequestSavedScreen = () => {

    return (
        <SuccessScreenComponent successText={I18t.t('RequestSaved.text')}
                                buttonText={I18t.t('RequestSaved.button')} />
    )
};
