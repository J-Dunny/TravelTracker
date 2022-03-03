import chai from 'chai';
import allTravelers from '../src/data/allTravelersData';
import Traveler from '../src/Traveler';
import TravelerRepository from '../src/TravelerRepository';
const expect = chai.expect;


describe('TravelerRepository Test', function() {
  const travelerRepo = new TravelerRepository()
  travelerRepo.loadTravelerInfo(allTravelers)

  it("should be a function", function () {
    expect(TravelerRepository).to.be.a("function");
  });

  it("should be a instance of HydrantionRepository", function () {
    expect(travelerRepo).to.be.an.instanceOf(TravelerRepository);
  });
  
  it("should store traveler objects", function () {
    expect(travelerRepo.travelerInfo[0]).to.be.instanceOf(Traveler)
    
  });

  it("should display traveler data", function () {
    expect(travelerRepo.displayTravelerData(1)).to.deep.equal(travelerRepo.travelerInfo[0]);
  });

  it("should return error message if traveler does not exist", function () {
      console.log(travelerRepo.displayTravelerData(99999))
    expect(travelerRepo.displayTravelerData(99999)).to.equal("Traveler does not exist");
  });







});