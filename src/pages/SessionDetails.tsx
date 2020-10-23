import {IonContent, IonHeader, IonImg, IonPage, IonTitle, IonCard, IonCardHeader, IonCardTitle} from '@ionic/react';
import TopBarMenu from "../components/TopBarMenu";
import {DevFestContext} from '../App'
import React from 'react';
import {useParams} from "react-router-dom";

interface ContainerProps {}

const IMAGE_BASE_URL : string = "https://devfest2018.gdgnantes.com/";

const SessionDetails: React.FC<ContainerProps> = () => {
  const { id } = useParams<{id:string}>();
  return (
    <IonPage>
        <IonHeader>
            <TopBarMenu title={"Session"} />
        </IonHeader>
        <IonContent fullscreen>
            <DevFestContext.Consumer>
                {value =>
                    {
                        if (value.sessions?.length! > 0) {
                            let session = value.sessions?.find((session) => session.id.toString() == id);
<<<<<<< Updated upstream
                            if(session){
                                let speakers = value.speakers?.filter(speaker => session!.speakers ? session!.speakers.map(t => t.toString()).includes(speaker.id.toString()) : false );
                                return <IonContent className="container">
                                    <IonTitle>{session!.title}</IonTitle>
                                    {session!.image &&
                                    <IonImg src={IMAGE_BASE_URL+session!.image} />
                                    }
                                    {session!.description &&
                                    <IonContent>
                                        {session!.description}
                                    </IonContent>
                                    }
                                    {session?.speakers && speakers!.map(speaker => {
                                        return <IonContent>
                                            <IonImg src={IMAGE_BASE_URL+speaker.photoUrl}/>
                                            <IonContent>{speaker.name}</IonContent>
                                        </IonContent>
                                    })
                                    }
                                </IonContent>
                            }
=======
                            let speakers = value.speakers?.filter(speaker => session!.speakers.map(t => t.toString()).includes(speaker.id.toString()));
                            return <IonContent className="container">
                                <IonTitle>{session!.title}</IonTitle>
                                {session!.image &&
                                <IonImg src={IMAGE_BASE_URL+session!.image} />
                                }
                                {session!.description &&
                                <IonContent>
                                    {session!.description}
                                </IonContent>
                                }
                                <div>Les présentateurs</div>
                                {session?.speakers && speakers!.map(speaker => {
                                    return <IonCard>
                                        <IonCardHeader>
                                            <img width={50} src={IMAGE_BASE_URL+ speaker.photoUrl}/>
                                            <IonCardTitle>{speaker.name}</IonCardTitle>
                                        </IonCardHeader>
                                    </IonCard>
                                })
                                }
                            </IonContent>
>>>>>>> Stashed changes
                        }
                    }}
            </DevFestContext.Consumer>
        </IonContent>
    </IonPage>
  );
};

export default SessionDetails;
