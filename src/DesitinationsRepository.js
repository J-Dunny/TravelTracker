import Destination from "./Destination"
class DestinationsRepository {
    constructor(){
        this.allDestinations = []
    }

    loadAllDestination(allDestinationsData) {
        this.allDestinations = allDestinationsData.map(destination => new Destination(destination))
        
    }

    destination(destID){
        const destination = this.allDestinations.find(destination => destination.id === destID)

        return destination
    }
    flightCost(destID){
        
        const cost = this.allDestinations.find(destination => destination.id === destID)

        return cost.estimatedFlightCostPerPerson
    }
    lodgingCost(destID){
        const cost = this.allDestinations.find( destination => destination.id === destID)

        return cost.estimatedLodgingCostPerDay
    }

    // destination(destID){
    //     const destination = 
    // }
    
}



export default DestinationsRepository