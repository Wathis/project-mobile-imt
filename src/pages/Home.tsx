import {IonButton, IonContent, IonHeader, IonPage} from '@ionic/react';
import React from 'react';
import './Home.css';
import TopBarMenu from "../components/TopBarMenu";
import {useHistory} from "react-router";

const Home: React.FC = () => {

    const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
          <TopBarMenu title={"Conférence"} />
      </IonHeader>
      <IonContent fullscreen>
          <div className="container">
              <h2>Conférence DEV FEST 2017 + 1</h2>
              <img alt="log_dev" width={300} src={"https://blog.empreintedigitale.fr/wp-content/uploads/sites/3/2017/11/logo-devfest-nantes-2017.png"} />
              <div>
                  <IonButton onClick={() => history.push("/sessions")}>Liste des sessions</IonButton>
              </div>
              <div>
                  <IonButton onClick={() => history.push("/speakers")}>Liste des speakers</IonButton>
              </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
