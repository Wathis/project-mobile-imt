import {IonContent, IonHeader, IonItem, IonPage, IonList} from '@ionic/react';
import React from 'react';
import './Home.css';
import TopBarMenu from "../components/TopBarMenu";
import {DevFestContext} from "../App";

const SpeakerList: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <TopBarMenu title={"Speakers"} />
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <DevFestContext.Consumer>
              {({speakers}) => {
              return speakers?.map((speaker) => (
                <IonItem key={speaker.id}>
                    <p>{speaker.name}</p>
                </IonItem>
              ))
              }}
          </DevFestContext.Consumer>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SpeakerList;
