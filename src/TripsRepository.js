import Trip from "./Trip"
import allDestinationsData from "./data/allDestinationsData"
class TripsRepository {
    constructor(tripsData){
        this.allTrips = []
    }

    loadAllTrips(tripsData) {
        this.allTrips = tripsData.map(trip => new Trip(trip))
    }

    travelerTrips(travelerId){
        const allTrips = this.allTrips.filter(trip => trip.userID === travelerId)
        return allTrips
    }

    tripCost(tripId, travelerId, destRepo){
        const trip = this.travelerTrips(travelerId).find(trip => trip.id === tripId)
        
       const flightCost = destRepo.flightCost(trip.destinationID)* trip.travelers

       const lodgingCost = destRepo.lodgingCost(trip.destinationID) * trip.travelers * trip.duration

       const fee = (flightCost + lodgingCost) * .1;
       
       const total = flightCost + lodgingCost + fee

    return total
    }

    yearlyCost(travelerId, destRepo){
        //all trip destination id's ---
        const destinationIDs = this.travelerTrips(travelerId).map(trip => trip.destinationID)
        

        //find total flight cost for one person ---
        const flightCost = destinationIDs.map(id => destRepo.flightCost(id)).reduce((a,b) => a + b, 0) 
       
        
        //find toal lodging cost * per person * duration
        const numPeopleDuration = this.travelerTrips(travelerId).map(trip => trip.travelers * trip.duration)

        const lodgingCost = destinationIDs.map(id => destRepo.lodgingCost(id))
        //return total flight + total lodging cost * 10%

        return flightCost
    }


}

export default TripsRepository


//instantiat all trips

//method to display all trips for user: past present, upcomming, pending

//method for total ammount user spent on trips this year and include 10% travel fee

//iteration 2

//create new trip : I will select a date, duration, number of travelers and choose from a list of destinations

// After making these selections, I should see an estimated cost (with a 10% travel agent fee) for the trip.