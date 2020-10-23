import {IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';
import './Home.css';
import TopBarMenu from "../components/TopBarMenu";

const SpeakerList: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <TopBarMenu title={"Speakers"} />
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

export default SpeakerList;
