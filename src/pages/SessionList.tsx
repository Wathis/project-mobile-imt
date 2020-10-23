import {IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';
import './Home.css';
import TopBarMenu from "../components/TopBarMenu";

const SessionList: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <TopBarMenu title={"Sessions"} />
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
          <div className="container">

          </div>
      </IonContent>
    </IonPage>
  );
};

export default SessionList;
