import chai from 'chai';
import Traveler from '../src/Traveler';
import travelers from '../src/data/allTravelersData';
const expect = chai.expect;

describe('Traveler Test', function() {
  const newTraveler = new Traveler({
      "id": 400,
      "name": "Jakey",
      "travelerType": "relaxer"
  })

  const emptyName = new Traveler({
    "id": 400,
    "name": "",
    "travelerType": "relaxer"
})

const emptyType = new Traveler({
    "id": 400,
    "name": "Natalie",
    "travelerType": ""
})

  
  
    it('should be a function', function() {
    expect(Traveler).to.be.a("function");
  });

  it('should hold the id of the traveler passed in as an object', function() {
    expect(newTraveler.id).to.equal(400);
  });

  it('should hold the name of the traveler passed in as an object', function() {
    expect(newTraveler.name).to.equal("Jakey");
  });

  it('should hold the travelerType of the traveler passed in as an object', function() {
    expect(newTraveler.travelerType).to.equal("relaxer");
  });

  it('should have a method to return the name of the traveler', function() {
    expect(newTraveler.returnName()).to.equal("Jakey");
  });

  it('should return error message if name info is missing', function () {
    expect(emptyName.returnName()).to.equal("Sorry, this user has no name!")
  })

  it('should have a method to return the type of traveler', function() {
    expect(newTraveler.returnType()).to.equal("relaxer");
  });

  it('should return error message if type info is missing', function () {
    expect(emptyType.returnType()).to.equal("Sorry, this user has no type!")
  })

});
