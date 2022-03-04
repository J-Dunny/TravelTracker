const tripsData = fetch('http://localhost:3001/api/v1/trips').then(responses => responses.json())
const destinationsData = fetch('http://localhost:3001/api/v1/destinations').then(responses => responses.json())
const allTravelers = fetch('http://localhost:3001/api/v1/travelers').then(responses => responses.json())

// const oneTraveler = fetch('http://localhost:3001/api/v1/travelers').then(responses => responses.json())





export {tripsData, destinationsData, allTravelers}