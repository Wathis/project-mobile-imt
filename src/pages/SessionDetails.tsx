import {IonCard, IonContent, IonHeader, IonImg, IonPage, IonTextarea, IonTitle, IonButton} from '@ionic/react';
import TopBarMenu from "../components/TopBarMenu";
import {DevFestContext} from '../App'
import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import Back from '../components/Back';
import {Plugins, CameraResultType} from '@capacitor/core';

interface ContainerProps {}

const IMAGE_BASE_URL : string = "https://devfest2018.gdgnantes.com/";

const SessionDetails: React.FC<ContainerProps> = () => {
  const { id } = useParams<{id:string}>();
  const history = useHistory();

  const [mesNotes, setMesNotes] = useState("");
  const [imageSrc, setImageSrc] = useState("");

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
      const getPhoto = async () => {
          const {value: savedPhoto} = await Plugins.Storage.get({key: `${id}-photo`}) ;
          setImageSrc(savedPhoto ? savedPhoto : "");
      }
      getNote();
      getPhoto();
    }, [id]);


    function getBase64Image(img: HTMLImageElement) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        ctx!.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        return dataURL;
    }

    const takePicture = async () => {
        const image = await Plugins.Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Uri,
        });
        var imageUrl = image.webPath;
        setImageSrc(imageUrl!);
        setTimeout(async function(){
            const base64Photo = getBase64Image(document.getElementById('custom-img')! as HTMLImageElement);
            await Plugins.Storage.set({
                key: `${id}-photo`,
                value: base64Photo,
            });
            console.log(base64Photo);
        }, 1000);
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
                            let session = value.sessions?.find((session) => session.id.toString() === id.toString());
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
                                    {session?.speakers ? speakers!.map(speaker => {
                                        return <IonCard style={{display: 'flex'}} onClick={() => {
                                            history.push("/speaker/" + speaker.id);
                                        }}>
                                            <img alt={"photoSpeaker"} width={50} src={IMAGE_BASE_URL+speaker.photoUrl}/>
                                            <p>{speaker.name}</p>
                                        </IonCard>
                                    }):  <p>Pas de speaker</p>
                                    }
                                    <IonCard>
                                        <IonTitle>VOS NOTES</IonTitle>
                                        <IonTextarea placeholder={"Ecrivez vos notes ici"} value={mesNotes} onIonChange={e => {
                                            setMesNotes(e.detail.value!);
                                            saveNote(e.detail.value!);
                                        }}></IonTextarea>
                                        <IonTitle>VOTRE PHOTO</IonTitle>
                                        <IonButton onClick={() => {
                                            takePicture();
                                        }}>Charger photo</IonButton>
                                        <div>
                                            <img id={"custom-img"} src={imageSrc} />
                                        </div>
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
