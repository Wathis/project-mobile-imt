import {IonContent, IonHeader, IonPage, IonLabel, IonList, IonItem, IonButton, IonIcon} from '@ionic/react';
import React from 'react';
import './Home.css';
import {chevronForwardOutline} from "ionicons/icons";
import TopBarMenu from "../components/TopBarMenu";
import {DevFestContext} from "../App";

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
              <IonList>
                  <DevFestContext.Consumer>
                          {({sessions,changeCurrentSession}) => {
                              return sessions?.map((session) => (
                                  <IonItem key={session.id} onClick={() => {
                                      changeCurrentSession!(session);
                                      
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
