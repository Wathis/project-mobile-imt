export class Speaker {
    constructor(
        public id : number,
        public name : string,
        public featured : true,
        public company : string,
        public companyLogo : string,
        public country : string,
        public photoUrl : string,
        public shortBio : string,
        public bio : string,
        public tags : string[]
    ){}
}