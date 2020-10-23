import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToggle,
    IonItem,
    IonLabel
} from '@ionic/react';
import TopBarMenu from "../components/TopBarMenu";
import {DevFestContext} from '../App'
import {useHistory, useParams} from 'react-router';
import Back from "../components/Back";
import {Plugins} from '@capacitor/core';
import React, {useEffect, useState} from 'react';

interface ContainerProps {}

const IMAGE_BASE_URL : string = "https://devfest2018.gdgnantes.com/";


const SpeakerDetails: React.FC<ContainerProps> = () => {
  let {id} = useParams<{id:string}>();
  const history = useHistory();

  const [isContact, setIsContact] = useState(false);

  const addContact = async () => {
    await Plugins.Storage.set({
        key: "contact-"+id,
        value: id,
    });
  }

  const removeContact = async () =>{
    await Plugins.Storage.remove({key : "contact-"+id});
  }

  useEffect(() => {
    const getContact = async () => {
        const {value: savedContacts} = await Plugins.Storage.get({key: "contact-"+id}) ;
        setIsContact(savedContacts ? true : false);
    }
    getContact();
  }, [id]);

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
                        let speaker = value.speakers?.find((speaker) => speaker.id.toString() === id);
                        if(speaker){
                            let sessions = value.sessions?.filter(session => session.speakers ? session.speakers.findIndex(id => id==speaker!.id) != -1 : false);
                            return <IonContent className="container">
                                <IonCard>
                                    <IonCardHeader>
                                        <IonCardTitle>{speaker!.name}</IonCardTitle>
                                        <IonItem>
                                            <IonLabel>Ajouter à mes contacts</IonLabel>
                                            <IonToggle value="sausage" checked={isContact} onIonChange={
                                                e => isContact ? removeContact() : addContact()
                                            } />
                                        </IonItem>
                                        
                                    </IonCardHeader>
                                    {speaker!.photoUrl &&
                                    <img height={200} src={IMAGE_BASE_URL+speaker!.photoUrl}></img>
                                    }
                                    {speaker!.shortBio &&
                                    <IonCardContent>
                                        {speaker!.shortBio}
                                    </IonCardContent>
                                    }
                                </IonCard>
                                <IonTitle>Sessions</IonTitle>
                                {sessions?.map(session => {
                                    return <IonCard  onClick={() => {
                                        history.push("/session/" + session.id);
                                    }}>
                                        <IonCardContent>{session.title}</IonCardContent>
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

function addContact(){

}

export default SpeakerDetails;
