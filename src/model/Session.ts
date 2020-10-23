import {Track} from "./Track";

export class Session {
    constructor(
        public id : number,
        public title : string,
        public titleMobile : string,
        public description : string,
        public image : string,
        public type : string,
        public track : Track,
        public category : string,
        public language : string,
        public tags : string[],
        public complexity : string,
        public speakers : number[]
    ){
    }
}