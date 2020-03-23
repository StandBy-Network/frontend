import React from 'react';
import {SuccessScreenComponent} from "../../components/SuccessScreenComponent";
import I18t from "../../translations";

export const ProfileSavedScreen = () => {

    return (
        <SuccessScreenComponent successText={I18t.t('ProfileSaved.text')}
                                buttonText={I18t.t('ProfileSaved.button')}  />
    )
};
