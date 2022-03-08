class Traveler {
    constructor(travelerObj) {
        this.id = travelerObj.id;
        this.name = travelerObj.name;
        this.travelerType = travelerObj.travelerType;
    }

    returnName() {
        if (!this.name) {
            return "Sorry, this user has no name!"
        } else {
            return this.name
        }
    }

    returnType() {
        if (!this.travelerType) {
            return "Sorry, this user has no type!"
        } else {
            return this.travelerType
        }
    }
}

export default Traveler