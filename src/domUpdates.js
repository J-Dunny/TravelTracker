const listAllTrips = document.getElementById('listAllTrips')
const displayYearlyCost = document.getElementById('yearlyCost')

let domUpdates = {

    listAllTrips(allTrips, destRepo) {
        allTrips.forEach(trip => listAllTrips.innerHTML += `<article class="trip-card">
            <p>${destRepo.destination(trip.destinationID).destination}</p>
            <img src="${destRepo.destination(trip.destinationID).image}" alt="">
            <p>Date: ${trip.date}</p>
            <p>Durration: ${trip.duration} days</p>
            <p>Status: "${trip.status}"</p>
            <p>People: ${trip.travelers}</p>
        </article>`)
    },

    //     < article id = "trip-Card" class="trip-card" >
    //   <p>destination.destination</p>
    //   <p>destination.image</p>
    //   <p>trip.date</p>
    //   <p>trip.duration</p>
    //   <p>trip.status</p>
    //   <p>trips.travelers</p>
    // </article >

    yearlyCost(yearlyCost){
    displayYearlyCost.innerText = `Yearly Cost = ${yearlyCost}`
}


    }

export default domUpdates