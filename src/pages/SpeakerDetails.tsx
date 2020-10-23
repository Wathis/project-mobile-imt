import {IonContent, IonHeader, IonImg, IonPage, IonTitle} from '@ionic/react';
import TopBarMenu from "../components/TopBarMenu";
import {DevFestContext} from '../App'
import React from 'react';

interface ContainerProps {}

const IMAGE_BASE_URL : string = "https://devfest2018.gdgnantes.com";

const SpeakerDetails: React.FC<ContainerProps> = () => {
  return (
    <IonPage>
        <IonHeader>
            <TopBarMenu title={"Présentateur"} />
        </IonHeader>
        <IonContent fullscreen>
            <DevFestContext.Consumer>
                {value =>
                    {let speaker = value.currentSpeaker!;
                    let sessions = value.sessions?.filter(session => session.speakers.includes(speaker.id));
                    return <IonContent className="container">
                            <IonTitle>{speaker.name}</IonTitle>
                            {speaker.photoUrl &&
                                <IonImg src={IMAGE_BASE_URL+speaker.photoUrl}></IonImg>
                            }
                            {speaker.shortBio &&
                                <IonContent>
                                    {speaker.shortBio}
                                </IonContent>
                            }
                            {sessions?.map(session => {
                                return <IonContent>
                                    <IonContent>{session.title}</IonContent>
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

export default SpeakerDetails;
