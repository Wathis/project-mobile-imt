import {IonContent, IonHeader, IonImg, IonPage, IonTitle} from '@ionic/react';
import TopBarMenu from "../components/TopBarMenu";
import {DevFestContext} from '../App'
import React from 'react';

interface ContainerProps {}

const IMAGE_BASE_URL : string = "https://devfest2018.gdgnantes.com";

const SessionDetails: React.FC<ContainerProps> = () => {
  return (
    <IonPage>
        <IonHeader>
            <TopBarMenu title={"Session"} />
        </IonHeader>
        <IonContent fullscreen>
            <DevFestContext.Consumer>
                {value =>
                    {let session = value.currentSession!;
                    let speakers = value.speakers?.filter(speaker => session.speakers.includes(speaker.id));
                    return <IonContent className="container">
                            <IonTitle>{session.title}</IonTitle>
                            {session.image &&
                                <IonImg src={IMAGE_BASE_URL+session.image} />
                            }
                            {session.description &&
                                <IonContent>
                                    {session.description}
                                </IonContent>
                            }
                            {speakers?.map(speaker => {
                                return <IonContent>
                                    <IonImg src={IMAGE_BASE_URL+speaker.photoUrl}/>
                                    <IonContent>{speaker.name}</IonContent>
                                </IonContent>
                            })
                            }
                        </IonContent>
                    }}
            </DevFestContext.Consumer>
        </IonContent>
    </IonPage>
  );
};

export default SessionDetails;
