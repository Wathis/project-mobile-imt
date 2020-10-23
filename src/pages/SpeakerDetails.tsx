import {IonCard, IonContent, IonHeader, IonPage, IonTitle} from '@ionic/react';
import TopBarMenu from "../components/TopBarMenu";
import {DevFestContext} from '../App'
import React from 'react';
import {useHistory, useParams} from 'react-router';
import Back from "../components/Back";

interface ContainerProps {}

const IMAGE_BASE_URL : string = "https://devfest2018.gdgnantes.com/";


const SpeakerDetails: React.FC<ContainerProps> = () => {
  let {id} = useParams<{id:string}>();
  const history = useHistory();
  return (
    <IonPage>
        <IonHeader>
            <TopBarMenu title={"Présentateur"} />
            <Back />
        </IonHeader>
        <IonContent fullscreen>
            <DevFestContext.Consumer>
                {value =>
                    {
                    if (value.sessions?.length! > 0) {
                        let speaker = value.speakers?.find((speaker) => speaker.id.toString() == id);
                        if(speaker){
                            let sessions = value.sessions?.filter(session => session.speakers ? session.speakers.includes(speaker!.id) : false);
                            return <IonContent className="container">
                                <IonCard>
                                    <IonTitle>{speaker!.name}</IonTitle>
                                    {speaker!.photoUrl &&
                                    <img height={200} src={IMAGE_BASE_URL+speaker!.photoUrl}></img>
                                    }
                                    {speaker!.shortBio &&
                                    <IonContent>
                                        {speaker!.shortBio}
                                    </IonContent>
                                    }
                                </IonCard>
                                <div>Sessions</div>
                                {sessions?.map(session => {
                                    return <IonCard  onClick={() => {
                                        history.push("/session/" + session.id);
                                    }}>
                                        <p>{session.title}</p>
                                    </IonCard>
                                })
                                }
                            </IonContent>
                        }
                    }}
                }
            </DevFestContext.Consumer>
        </IonContent>
    </IonPage>
  );
};

export default SpeakerDetails;
