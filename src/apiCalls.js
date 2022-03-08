function tripsDataFetch(){
  const tripsData = fetch('http://localhost:3001/api/v1/trips').then(responses => responses.json())
  return tripsData
}

function destinationsDataFetch() {
  const destinationsData = fetch('http://localhost:3001/api/v1/destinations').then(responses => responses.json())
  return destinationsData
}
function allTravelersFetch(){
  const allTravelers = fetch('http://localhost:3001/api/v1/travelers').then(responses => responses.json())
  return allTravelers
}

const addTrip = (newTrip) => {
  return fetch('http://localhost:3001/api/v1/trips', {
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
    
}



export { tripsDataFetch, destinationsDataFetch, allTravelersFetch, addTrip }