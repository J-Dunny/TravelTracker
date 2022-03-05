// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file

import './css/styles.css';
import domUpdates from './domUpdates'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import Traveler from './Traveler';
import Trip from './Trip';
import Destination from './Destination';
import TravelerRepository from './TravelerRepository';
import TripsRepository from './TripsRepository'
import DestinationsRepository from './DesitinationsRepository'
import { tripsData, destinationsData, allTravelers } from "./apiCalls"


const dateInput = document.getElementById('dateInput');
const durationInput = document.getElementById('durationInput');
const numTravelersInput = document.getElementById('numTravelersInput');
const destinationsInput = document.getElementById('destinationsInput');

destinationsInput.addEventListener('click', estimateNewTripCost);

let travelerRepo;
let destRepo;
let tripRepo;
let user = 33;


window.onload = (event) => {
    Promise.all([allTravelers, destinationsData, tripsData]).then((data) => {

        travelerRepo = new TravelerRepository()
        travelerRepo.loadTravelerInfo(data[0].travelers)

        destRepo = new DestinationsRepository();
        destRepo.loadAllDestination(data[1].destinations)


        tripRepo = new TripsRepository();
        tripRepo.loadAllTrips(data[2].trips)
        displayDashboard()


    }).catch(err => console.log(err));
}


function displayDashboard() {
    const allTrips = tripRepo.travelerTrips(user)
    domUpdates.listAllTrips(allTrips, destRepo)
    const yearlyCost = tripRepo.yearlyCost(user, destRepo)
    domUpdates.yearlyCost(yearlyCost)
    domUpdates.destinationsInput(destRepo)
}

function estimateNewTripCost() {

    const destId = destRepo.allDestinations.find(destination => destination.destination === destinationsInput.value).id
    console.log(destId)
    const flightCost = destRepo.flightCost(destId) * numTravelersInput.value * 2

    const lodgingCost = destRepo.lodgingCost(destId) * numTravelersInput.value * durationInput.value

    const fee = (flightCost + lodgingCost) * .1;

    const total = flightCost + lodgingCost + fee
    domUpdates.estimatedTripCost(total)
    return total



}

