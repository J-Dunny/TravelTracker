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


let travelerRepo;
let destRepo;
let tripRepo;
let user = 1;


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


function displayDashboard(){
    const allTrips = tripRepo.travelerTrips(user)
    domUpdates.listAllTrips(allTrips, destRepo)
    const yearlyCost = tripRepo.yearlyCost(user, destRepo)
    domUpdates.yearlyCost(yearlyCost)
    domUpdates.destinationsInput(destRepo)
 }

