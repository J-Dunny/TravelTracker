const listAllTrips = document.getElementById('listAllTrips');
const displayYearlyCost = document.getElementById('yearlyCost');
const destinationsInput = document.getElementById('destinationsInput');
const estimate = document.getElementById('estimate');
const userName = document.getElementById('userName');


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

    yearlyCost(yearlyCost) {
        displayYearlyCost.innerText = `You have spent $${yearlyCost} on your trips this year`
    },

    destinationsInput(destRepo){
        destRepo.allDestinations.forEach(destination => destinationsInput.innerHTML += `<option value="${destination.destination}">${destination.destination}</option>`)
    },

    estimatedTripCost(total){
        estimate.innerText = `Estimated Trip Cost = $${total}`
    },

    userName(travelerRepo, user){
        userName.innerText = `Welcome, ${travelerRepo.displayTravelerData(user).name.split(' ')[0]}!`
    }

}

export default domUpdates