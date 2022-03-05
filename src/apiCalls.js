const tripsData = fetch('http://localhost:3001/api/v1/trips').then(responses => responses.json())
const destinationsData = fetch('http://localhost:3001/api/v1/destinations').then(responses => responses.json())
const allTravelers = fetch('http://localhost:3001/api/v1/travelers').then(responses => responses.json())

// const oneTraveler = fetch('http://localhost:3001/api/v1/travelers').then(responses => responses.json())

// const errorTag = document.getElementById("errorTag")

const addTrip = (newTrip) => {
  fetch('http://localhost:3001/api/v1/trips', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTrip)
  })
    .then(response => {
      console.log(response)
      if (!response.ok) {
        throw new Error("Please make sure that all fields are filled out")
      } else {
        return response.json()
      }
    })
    .catch((error) => {
      console.log(error)
      if (error.message === "Failed to fetch") {
        return errorTag.innerText = "OOPS SORRY something went wrong"
      } else {
        return errorTag.innerText = error.message
      }
    })
}



export { tripsData, destinationsData, allTravelers, addTrip }