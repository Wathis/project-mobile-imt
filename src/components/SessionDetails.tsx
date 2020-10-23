import { Session } from '../model/Session'
import { DevFestContext } from '../App'
import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {}

const IMAGE_BASE_URL : string = "https://devfest2018.gdgnantes.com";

const SessionDetails: React.FC<ContainerProps> = () => {
  return (
    <DevFestContext.Consumer>
        {value =>
            {let session = value.currentSession!
            return <div className="container">
            <h1>{session.title}</h1>
                {session.image &&
                    <img src={IMAGE_BASE_URL+session.image}></img>
                }
            </div>
    }}
    </DevFestContext.Consumer>
    
  );
};

export default SessionDetails;
