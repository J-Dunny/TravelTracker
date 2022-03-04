class Destination {
    constructor(destObj){
        this.id = destObj.id;
        this.destination = destObj.destination;
        this.estimatedLodgingCostPerDay = destObj.estimatedLodgingCostPerDay;
        this.estimatedFlightCostPerPerson = destObj.estimatedFlightCostPerPerson;
        this.image = destObj.image;
        this.alt = destObj.alt;
    }
}

export default Destination