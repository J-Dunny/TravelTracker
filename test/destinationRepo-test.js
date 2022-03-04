import chai from 'chai';
import DestinationsRepository from '../src/DesitinationsRepository';
import destinationsData from '../src/data/allDestinationsData';
const expect = chai.expect;


describe('Destination Repo Test', function() {
const destRepo = new DestinationsRepository(destinationsData);
destRepo.loadAllDestination(destinationsData)


  it("should be a function", function () {
    expect(DestinationsRepository).to.be.a("function");
  });

  it("should be a instance of DestintationRepository", function () {
    expect(destRepo).to.be.an.instanceOf(DestinationsRepository);
  });

  // it.skip('should hold all destinations', function() {
  //   expect(true).to.equal(true);
  // });

  // it.skip('should find one destination from name', function() {
  //   expect(true).to.equal(true);
  // });

  it('should return flight cost for trip', function() {
    expect(destRepo.flightCost(2)).to.equal(780);
  });

  it('should return lodging cost per day for trip', function() {
    
    expect(destRepo.lodgingCost(2)).to.equal(100);
  });











});
