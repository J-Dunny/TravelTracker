import Destination from "./Destination"
class DestinationsRepository {
    constructor(){
        this.allDestinations = []
    }

    loadAllDestination(allDestinationsData) {
        this.allDestinations = allDestinationsData.map(destination => new Destination(destination))
        
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