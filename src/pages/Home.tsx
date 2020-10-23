import {IonContent, IonHeader, IonPage} from '@ionic/react';
import React from 'react';
import './Home.css';
import TopBarMenu from "../components/TopBarMenu";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <TopBarMenu title={"Conférence"} />
      </IonHeader>
      <IonContent fullscreen>
          <div className="container">
              test
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
