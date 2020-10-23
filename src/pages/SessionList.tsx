import {IonContent, IonHeader, IonPage, IonLabel, IonList, IonItem, IonButton, IonIcon} from '@ionic/react';
import React from 'react';
import './Home.css';
import {chevronForwardOutline} from "ionicons/icons";
import TopBarMenu from "../components/TopBarMenu";
import {DevFestContext} from "../App";
import { useHistory } from 'react-router-dom';

const SessionList: React.FC = () => {

    const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
          <TopBarMenu title={"Sessions"} />
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
          <div className="container">
              <IonList>
                  <DevFestContext.Consumer>
                          {({sessions}) => {
                              return sessions?.map((session) => (
                                  <IonItem key={session.id} onClick={() => {
                                      history.push("/session/" + session.id);
                                  }}>
                                      <IonLabel>{session.titleMobile ? session.titleMobile : session.title}</IonLabel>
                                      <IonIcon  color="secondary" icon={chevronForwardOutline} float-right>More</IonIcon>
                                  </IonItem>
                              ))
                          }}
                  </DevFestContext.Consumer>
              </IonList>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default SessionList;
