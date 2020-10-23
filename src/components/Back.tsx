import React from 'react';
import {IonIcon, IonMenuToggle, IonTitle, IonToolbar, IonButton} from "@ionic/react";
import {menu} from "ionicons/icons";
import {useHistory} from "react-router";

interface ContainerProps {
    title: string;
}

const Back = (props : ContainerProps) => {
    const history = useHistory();
    return (
        <IonButton onClick={() =>history.goBack()}>Back</IonButton>
    );
}

export default Back;