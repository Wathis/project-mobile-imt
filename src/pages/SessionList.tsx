import {IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';
import './Home.css';
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
              <DevFestContext.Consumer>

                  {({sessions}) => {
                  return sessions?.map((session) => (
                    <div key={session.id}>
                        <p>{session.title}</p>
                    </div>
                  ))
                  }}
              </DevFestContext.Consumer>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default SessionList;
