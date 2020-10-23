import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import {IonApp, IonPage, IonSplitPane} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import SpeakerList from './pages/SpeakerList';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Menu from "./components/Menu";
import SessionList from "./pages/SessionList";
import {Session} from './model/Session';
import {Speaker} from './model/Speaker';
import Home from './pages/Home';
import {getSessions} from "./service/api";
import SessionDetails from "./pages/SessionDetails";
import SpeakerDetails from "./pages/SpeakerDetails";


type DevFestContextProps = {
    sessions : Session[],
    speakers : Speaker[],
    currentSession : Session,
    currentSpeaker : Speaker,
    changeCurrentSession : (session : Session) => void,
    changeCurrentSpeaker : (speaker : Speaker) => void
}
export const DevFestContext  = React.createContext<Partial<DevFestContextProps>>({});

const App: React.FC = (props) => {
    const [sessions, setSessions] = useState<Session[]>([]);

    useEffect(() => {
        getSessions().then((sessionsJson) => {
            setSessions(Object.keys(sessionsJson).map((id)  => sessionsJson[id]));
        })
    }, []);

    return <IonReactRouter>
        <DevFestContext.Provider value={{
            sessions: sessions,
            speakers: []
        }}>
            <div id="app">
                <IonApp>
                    <IonSplitPane contentId="main">
                        <Menu/>
                        <IonPage id="main">
                            <Switch>
                                <Route path="/speakers" component={SpeakerList} exact={true}/>
                                <Route path="/sessions" component={SessionList} exact={true}/>
                                <Route path="/session/:id" component={SessionDetails} exact={true}/>
                                <Route path="/speaker/:id" component={SpeakerDetails} exact={true}/>
                                <Route path="/" component={Home} exact={true}/>
                            </Switch>
                        </IonPage>
                    </IonSplitPane>
                </IonApp>
            </div>
        </DevFestContext.Provider>
    </IonReactRouter>
};

export default App;
