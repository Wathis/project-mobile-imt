import {IonCard, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonButton, IonTextarea} from '@ionic/react';
import TopBarMenu from "../components/TopBarMenu";
import {DevFestContext} from '../App'
import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import Back from '../components/Back';
import { Plugins } from '@capacitor/core';

interface ContainerProps {}

const IMAGE_BASE_URL : string = "https://devfest2018.gdgnantes.com/";

const SessionDetails: React.FC<ContainerProps> = () => {
  const { id } = useParams<{id:string}>();
  const history = useHistory();

  const [mesNotes, setMesNotes] = useState("");

    const saveNote = async (notesToSave: string) => {
        await Plugins.Storage.set({
            key: id,
            value: notesToSave,
        });
    }
  useEffect(() => {
      const getNote = async () => {
          const {value: savedNotes} = await Plugins.Storage.get({key: id}) ;
          setMesNotes(savedNotes ? savedNotes : "");
      }
      getNote();
    }, []);
    const getNote = async (note: string) => {
        const notes = await Plugins.Storage.get({key: id});

    }
  return (
    <IonPage>
        <IonHeader>
            <TopBarMenu title={"Sessione"} />
            <Back />
        </IonHeader>
        <IonContent fullscreen className={"container"}>
                <DevFestContext.Consumer>
                    {value =>
                    {
                        if (value.sessions?.length! > 0) {
                            let session = value.sessions?.find((session) => session.id.toString() == id);
                            if(session){
                                let speakers = value.speakers?.filter(speaker => session!.speakers ? session!.speakers.map(t => t.toString()).includes(speaker.id.toString()) : false );
                                return <>
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
                                    <IonCard>
                                        <IonTitle>VOS NOTES</IonTitle>
                                        <IonTextarea placeholder={"Ecrivez vos notes ici"} value={mesNotes} onIonChange={e => {
                                            setMesNotes(e.detail.value!);
                                            saveNote(e.detail.value!);
                                        }}></IonTextarea>
                                    </IonCard>

                                </>
                            }
                        }
                    }}
                </DevFestContext.Consumer>
        </IonContent>
    </IonPage>
  );
};

export default SessionDetails;
