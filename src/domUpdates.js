const listAllTrips = document.getElementById('listAllTrips')
const displayYearlyCost = document.getElementById('yearlyCost')

let domUpdates = {
    
        listAllTrips(allTrips){
            allTrips.forEach(trip => listAllTrips.innerHTML += `<p>${trip.destinationID} ${trip.date} </p>`)
        },

        yearlyCost(yearlyCost){
            displayYearlyCost.innerText = `Yearly Cost = ${yearlyCost}`
        }


    }

export default domUpdates