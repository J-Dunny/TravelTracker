import './css/styles.css';
import domUpdates from './domUpdates'
import './images/turing-logo.png'
import TravelerRepository from './TravelerRepository';
import TripsRepository from './TripsRepository'
import DestinationsRepository from './DesitinationsRepository'
import { tripsDataFetch, destinationsDataFetch, allTravelersFetch, addTrip } from "./apiCalls"

const dateInput = document.getElementById('dateInput');
const durationInput = document.getElementById('durationInput');
const numTravelersInput = document.getElementById('numTravelersInput');
const destinationsInput = document.getElementById('destinationsInput');
const tripForm = document.getElementById('tripForm');
const errorTag = document.getElementById("errorTag");
const loginForm = document.getElementById("login");
const nameInput = document.getElementById("nameInput");
const passwordInput = document.getElementById("passwordInput");
const logoutButton = document.getElementById("logout");
const calcEstimate = document.getElementById("calcEstimate");

logoutButton.addEventListener('click', logouut);
calcEstimate.addEventListener('click', estimateNewTripCost);
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    login()
})

let travelerRepo;
let destRepo;
let tripRepo;
let user;

function login() {
    const username = nameInput.value.slice(0, 8)
    const userID = nameInput.value.split("r")[2]
    const password = passwordInput.value

    if (username != "traveler" || !userID || parseInt(userID) > 50 || parseInt(userID) < 1) {
        domUpdates.userNameError()

    } else if (password != "travel") {
        domUpdates.passwordError()

    } else if (username === "traveler" && password === "travel" && userID) {
        user = parseInt(userID)
        promises()
        domUpdates.login()
    }
}

function promises() {
    Promise.all([allTravelersFetch(), destinationsDataFetch(), tripsDataFetch()]).then((data) => {
        travelerRepo = new TravelerRepository()
        travelerRepo.loadTravelerInfo(data[0].travelers)

        destRepo = new DestinationsRepository();
        destRepo.loadAllDestination(data[1].destinations)

        tripRepo = new TripsRepository();
        tripRepo.loadAllTrips(data[2].trips)

        displayDashboard()

    }).catch(err => console.log(err));
}

tripForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createPost(e)
    displayDashboard();
});

function createPost(e) {
    const newTrip = {
        "id": Date.now(),
        "userID": parseInt(user),
        "destinationID": destRepo.destinationID(destinationsInput.value),
        "travelers": parseInt(numTravelersInput.value),
        "date": dateInput.value.replaceAll('-', '/'),
        "duration": parseInt(durationInput.value),
        "status": "pending",
        "suggestedActivities": []
    };

    addTrip(newTrip)
        .catch((error) => {
            console.log(error)
            if (error.message === "Failed to fetch") {
                return errorTag.innerText = "OOPS SORRY something went wrong"
            } else {
                return errorTag.innerText = error.message
            }
        });

    tripRepo.allTrips.push(newTrip)

    e.target.reset();
}

function displayDashboard() {
    const allTrips = tripRepo.travelerTrips(user)
    domUpdates.listAllTrips(allTrips, destRepo)

    const yearlyCost = tripRepo.yearlyCost(user, destRepo)
    domUpdates.yearlyCost(yearlyCost)
    domUpdates.destinationsInput(destRepo)
    domUpdates.userName(travelerRepo, user)
}

function estimateNewTripCost() {
    const destId = destRepo.allDestinations.find(destination => destination.destination === destinationsInput.value).id
    const flightCost = destRepo.flightCost(destId) * numTravelersInput.value * 2
    const lodgingCost = destRepo.lodgingCost(destId) * numTravelersInput.value * durationInput.value
    const fee = (flightCost + lodgingCost) * .1;
    const total = flightCost + lodgingCost + fee

    domUpdates.estimatedTripCost(total)

    return total
}

function logouut() {
    user = null;
    domUpdates.displayLogout();
}
