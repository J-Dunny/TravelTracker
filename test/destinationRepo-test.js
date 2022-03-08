import chai from 'chai';
import DestinationsRepository from '../src/DesitinationsRepository';
import destinationsData from '../src/data/allDestinationsData';
const expect = chai.expect;


describe('Destination Repo Test', function() {
const destRepo = new DestinationsRepository();
destRepo.loadAllDestination(destinationsData)


  it("should be a function", function () {
    expect(DestinationsRepository).to.be.a("function");
  });

  it("should be a instance of DestintationRepository", function () {
    expect(destRepo).to.be.an.instanceOf(DestinationsRepository);
  });

  it('should hold all destinations', function() {
    expect(destRepo.allDestinations.length).to.equal(50);
  });

  it('should find one destionation from ID', function() {
    expect(destRepo.destination(2)).to.deep.equal({
      id: 2,
      destination: 'Stockholm, Sweden',
      estimatedLodgingCostPerDay: 100,
      estimatedFlightCostPerPerson: 780,
      image: 'https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      alt: 'city with boats on the water during the day time'
    });
  });

  it('should return a destionationID by passing in the name', function() {
    console.log(destRepo.destinationID("Lima, Peru"))
    expect(destRepo.destinationID("Lima, Peru")).to.equal(1)
  });

  it('should return flight cost for trip', function() {
    expect(destRepo.flightCost(2)).to.equal(780);
  });

  it('should return lodging cost per day for trip', function() {
    
    expect(destRepo.lodgingCost(2)).to.equal(100);
  });











});
