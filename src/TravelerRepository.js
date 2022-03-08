import Traveler from "./Traveler"

class TravelerRepository {
    constructor() {
        this.travelerInfo = []
    }

    loadTravelerInfo(allTravelers) {
        this.travelerInfo = allTravelers.map(traveler => new Traveler(traveler))

    }

    displayTravelerData(travelerId) {
        let travelerInfo = this.travelerInfo.find(traveler => traveler.id === travelerId);
        if (!travelerInfo) {
            return "Traveler does not exist"
        }
        return travelerInfo;
    }



}

export default TravelerRepository


