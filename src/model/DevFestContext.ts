import { Speaker } from "./Speaker";
import { Session } from './Session';

export class DevFestContext{
    constructor(
        public sessions : Session[],
        public speakers : Speaker[]
    ){}
}