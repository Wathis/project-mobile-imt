import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonMenuButton } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Menu from '../components/Menu';
import { menuController } from "@ionic/core";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonTitle>Test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
              <IonMenuButton slot="end" color="secondary" />
            <IonTitle size="large">zd</IonTitle>
          </IonToolbar>
        </IonHeader>
          <div className="container">
              <strong>Ready to create an app?</strong>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
