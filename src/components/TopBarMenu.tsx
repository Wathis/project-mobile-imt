import React from 'react';
import {IonIcon, IonMenuToggle, IonTitle, IonToolbar} from "@ionic/react";
import {menu} from "ionicons/icons";

interface ContainerProps {
    title: string;
}

const TopBarMenu = (props : ContainerProps) => {
    return (
        <IonToolbar>
            <div className={"menu-toolbar"}>
                <IonMenuToggle className={"icon-menu-toggle"}><IonIcon icon={menu}></IonIcon></IonMenuToggle>
                <IonTitle>{props.title}</IonTitle>
            </div>
        </IonToolbar>
    );
}

export default TopBarMenu;