import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {IonApp, IonPage, IonRouterOutlet, IonSplitPane, IonToolbar, IonTitle} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

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
import { Speaker } from './model/Speaker';
import { Session } from './model/Session';

interface Page {
    title: string;
    path: string;
    icon: string;
}

const pages: Page[] = [
    { title: 'Home', path: '/', icon: 'home' },
    { title: 'About', path: '/about', icon: 'information' }
];

type DevFestContextProps = {
    sessions : Session[],
    speakers : Speaker[],
    currentSession : Session,
    changeCurrentSession : (session : Session) => void,
    currentSpeaker : Speaker,
    changeCurrentSpeaker : (speaker : Speaker) => void
}
export const DevFestContext  = React.createContext<Partial<DevFestContextProps>>({});

const App: React.FC = () => (
    <IonReactRouter>
        <DevFestContext.Provider value={{
            sessions : [],
            speakers : []
        }}>
            <div id="app">
                <IonApp>
                    <IonSplitPane contentId="main">
                        <Menu />
                        <IonPage id="main">
                            <Switch>
                                <Route path="/home" component={Home} exact={true} />
                                <Route exact path="/" render={() => <Redirect to="/home" />} />
                            </Switch>
                        </IonPage>
                    </IonSplitPane>
                </IonApp>
            </div>
        </DevFestContext.Provider>
        
    </IonReactRouter>
);

export default App;
