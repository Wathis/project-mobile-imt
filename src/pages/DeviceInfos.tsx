import {IonContent, IonHeader, IonItem, IonPage} from '@ionic/react';
import React from 'react';
import './Home.css';
import TopBarMenu from "../components/TopBarMenu";
import {DevFestContext} from '../App'

const DeviceInfos: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <TopBarMenu title={"Appareil"} />
      </IonHeader>
      <DevFestContext.Consumer>
            {value =>
                {let info = value.deviceInfo;
                    return <IonContent fullscreen>
                        <IonItem>Platform : {info?.platform}</IonItem>
                        <IonItem>Version : {info?.osVersion}</IonItem>
                        <IonItem>UUID : {info?.uuid}</IonItem>
                        <IonItem>Model : {info?.model}</IonItem>
                    </IonContent>
                    
                }
            }
          
      </DevFestContext.Consumer>
    </IonPage>
  );
};

export default DeviceInfos;
