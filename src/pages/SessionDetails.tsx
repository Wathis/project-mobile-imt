import {IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import TopBarMenu from "../components/TopBarMenu";
import { DevFestContext } from '../App'
import React from 'react';
import './ExploreContainer.css';

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
                    return <div className="container">
                            <h1>{session.title}</h1>
                            {session.image &&
                                <img src={IMAGE_BASE_URL+session.image}></img>
                            }
                            {session.description &&
                                <div>
                                    {session.description}
                                </div>
                            }
                            {speakers?.map(speaker => {
                                return <div>
                                    <img src={IMAGE_BASE_URL+speaker.photoUrl}/>
                                    <div>{speaker.name}</div>
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

export default SessionDetails;
