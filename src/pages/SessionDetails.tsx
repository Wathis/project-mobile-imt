import {IonCard, IonContent, IonHeader, IonImg, IonPage, IonTitle} from '@ionic/react';
import TopBarMenu from "../components/TopBarMenu";
import {DevFestContext} from '../App'
import React from 'react';
import {useHistory, useParams} from "react-router-dom";
import Back from '../components/Back';

interface ContainerProps {}

const IMAGE_BASE_URL : string = "https://devfest2018.gdgnantes.com/";

const SessionDetails: React.FC<ContainerProps> = () => {
  const { id } = useParams<{id:string}>();
  const history = useHistory();
  return (
    <IonPage>
        <IonHeader>
            <TopBarMenu title={"Session"} />
            <Back />
        </IonHeader>
        <IonContent fullscreen>
                <DevFestContext.Consumer>
                    {value =>
                    {
                        if (value.sessions?.length! > 0) {
                            let session = value.sessions?.find((session) => session.id.toString() == id);
                            if(session){
                                let speakers = value.speakers?.filter(speaker => session!.speakers ? session!.speakers.map(t => t.toString()).includes(speaker.id.toString()) : false );
                                return <IonContent className="container">
                                    <IonCard>
                                        {session!.image &&
                                        <IonImg src={IMAGE_BASE_URL+session!.image} />
                                        }
                                        <IonTitle>{session!.title}</IonTitle>
                                        {
                                            session!.description &&
                                            <p>
                                                {session!.description}
                                            </p>
                                        }
                                    </IonCard>
                                    <p>Speakers</p>
                                    {session?.speakers && speakers!.map(speaker => {
                                        return <IonCard style={{display: 'flex'}} onClick={() => {
                                            history.push("/speaker/" + speaker.id);
                                        }}>
                                            <img width={50} src={IMAGE_BASE_URL+speaker.photoUrl}/>
                                            <p>{speaker.name}</p>
                                        </IonCard>
                                    })
                                    }
                                </IonContent>
                            }
                        }
                    }}
                </DevFestContext.Consumer>
        </IonContent>
    </IonPage>
  );
};

export default SessionDetails;
