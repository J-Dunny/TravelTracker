const listAllTrips = document.getElementById('listAllTrips');
const displayYearlyCost = document.getElementById('yearlyCost');
const destinationsInput = document.getElementById('destinationsInput');
const estimate = document.getElementById('estimate');
const userName = document.getElementById('userName');
const formArticle = document.getElementById('formArticle');
const login = document.getElementById('login');
const userNameError = document.getElementById('userNameError');
const passwordError = document.getElementById('passwordError');



let domUpdates = {

    listAllTrips(allTrips, destRepo) {
        listAllTrips.innerHTML = ''
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
    },

    login(){
        formArticle.classList.remove('hidden')
        listAllTrips.classList.remove('hidden')
        login.classList.add('hidden')
    },

    userNameError(){
        userNameError.innerText = "Username is incorrect"
    },

    passwordError(){
        passwordError.innerText = "Password is incorrect"
    },

    displayLogout(){
        formArticle.classList.add('hidden')
        listAllTrips.classList.add('hidden')
        login.classList.remove('hidden')
    }

    

}

export default domUpdates