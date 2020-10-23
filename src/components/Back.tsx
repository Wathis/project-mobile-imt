import React from 'react';
import {IonButton} from "@ionic/react";
import {useHistory} from "react-router";

interface ContainerProps {
}

const Back = (props : ContainerProps) => {
    const history = useHistory();
    return (
        <IonButton style={{margin: 10}} onClick={() =>history.goBack()}>Back</IonButton>
    );
}

export default Back;