import React from 'react';
import {SuccessScreenComponent} from "../../../components/SuccessScreenComponent";
import I18t from "../../../translations";


export const AssistSavedScreen = () => {

    return(
        <SuccessScreenComponent successText={I18t.t('AssistSaved.text')}
                                buttonText={I18t.t('AssistSaved.button')} />
    )
};
