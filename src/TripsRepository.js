import Trip from "./Trip"
class TripsRepository {
    constructor() {
        this.allTrips = []
    }

    loadAllTrips(tripsData) {
        this.allTrips = tripsData.map(trip => new Trip(trip))
    }

    travelerTrips(travelerId) {
        const allTrips = this.allTrips.filter(trip => trip.userID === travelerId)
        
        return allTrips
    }

    tripCost(tripId, destRepo) {
        const trip = this.allTrips.find(trip => trip.id === tripId)
        const flightCost = destRepo.flightCost(trip.destinationID) * trip.travelers * 2
        const lodgingCost = destRepo.lodgingCost(trip.destinationID) * trip.travelers * trip.duration
        const fee = (flightCost + lodgingCost) * .1;
        const total = flightCost + lodgingCost + fee

        return total
    }

    yearlyCost(travelerId, destRepo) {
        const trips = this.travelerTrips(travelerId).filter(trip => {

            if (trip.date.split('/')[0] === "2022" && trip.status === "approved") {
                return trip
            }
        })

        const total = trips.map(trip => this.tripCost(trip.id, destRepo)).reduce((a, b) => a + b, 0)

        if (!total) {
            return "0"
        }

        return total
    }
}

export default TripsRepository
