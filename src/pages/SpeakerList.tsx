import {IonContent, IonHeader, IonItem, IonPage, IonList, IonLabel, IonIcon} from '@ionic/react';
import React from 'react';
import './Home.css';
import TopBarMenu from "../components/TopBarMenu";
import {DevFestContext} from "../App";
import {chevronForwardOutline} from "ionicons/icons";
import {useHistory} from "react-router";

const SpeakerList: React.FC = () => {

    const history = useHistory();
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
                <IonItem key={speaker.id} onClick={() => {
                    history.push("/speaker/" + speaker.id);
                }}>
                    <IonLabel>{speaker.name}</IonLabel>
                    <IonIcon  color="secondary" icon={chevronForwardOutline} float-right>More</IonIcon>
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
