import {IonContent, IonHeader, IonPage} from '@ionic/react';
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
                    return <div className="container">
                            <h1>{speaker.name}</h1>
                            {speaker.photoUrl &&
                                <img src={IMAGE_BASE_URL+speaker.photoUrl}></img>
                            }
                            {speaker.shortBio &&
                                <div>
                                    {speaker.shortBio}
                                </div>
                            }
                            {sessions?.map(session => {
                                return <div>
                                    <div>{session.title}</div>
                                </div>
                            })
                            }
                        </div>
                    }}
            </DevFestContext.Consumer>
        </IonContent>
    </IonPage>
  );
};

export default SpeakerDetails;
