import React, {useState} from 'react';
import {
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonMenuToggle,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {RouteComponentProps, useLocation, withRouter} from 'react-router';

interface Page {
    title: string;
    path: string;
    icon: string;
}

const pages: Page[] = [
    { title: 'Conférence', path: '/', icon: 'conférence' },
    { title: 'Sessions', path: '/sessions', icon: 'session' },
    { title: 'Speakers', path: '/speakers', icon: 'speaker' }
];

type Props = RouteComponentProps<{

}>;

const Menu = ({ history }: Props) => {
    const location = useLocation();
    const renderMenuItems = (): JSX.Element[] => {
        return pages.map((page: Page) => (
            <IonMenuToggle key={page.title} auto-hide="false">
                <IonItem button
                         color={page.path == location.pathname ? 'primary' : ''}
                         onClick={() => navigateToPage(page)}>
                    <IonIcon slot="start" name={page.icon} />
                    <IonLabel>
                        {page.title}
                    </IonLabel>
                </IonItem>
            </IonMenuToggle>
        ));
    }

    const navigateToPage = (page: Page) => {
        history.push(page.path);
    }

    return (
        <IonMenu contentId="main">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Menu
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    { renderMenuItems() }
                </IonList>
            </IonContent>
        </IonMenu>
    );
}

export default withRouter(
    Menu
);