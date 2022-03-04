import chai from 'chai';
import TripsRepository from '../src/TripsRepository';
import tripsData from '../src/data/allTripsData';
import Trip from '../src/Trip';
import allDestinationsData from '../src/data/allDestinationsData';
import DestinationsRepository from '../src/DesitinationsRepository';

const expect = chai.expect;

describe('TripsRepo Test', function() {
  
    let destRepo = new DestinationsRepository(allDestinationsData)
    destRepo.loadAllDestination(allDestinationsData)

    let tripRepo = new TripsRepository(tripsData);
      tripRepo.loadAllTrips(tripsData)

    it("should be a function", function () {
        expect(TripsRepository).to.be.a("function");
      });

    it("should store trip objects", function () {
        expect(tripRepo.allTrips[0]).to.be.an.instanceof(Trip);
      });

    it("should have method to display all trips for user: past present, upcomming, pending", function () {
      // console.log(tripRepo.travelerTrips(42))
      expect(tripRepo.travelerTrips(42)).to.deep.equal([
        {
          id: 5,
          userID: 42,
          destinationID: 29,
          travelers: 3,
          date: '2022/04/30',
          duration: 18,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 29,
          userID: 42,
          destinationID: 25,
          travelers: 3,
          date: '2019/08/30',
          duration: 4,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 39,
          userID: 42,
          destinationID: 25,
          travelers: 3,
          date: '2019/10/22',
          duration: 7,
          status: 'approved',
          suggestedActivities: []
        }
      ]);
    });


    it("method to return total price for one trip", function () {
      console.log(tripRepo.tripCost(5, 42, destRepo))
      expect(tripRepo.tripCost(5, 42, destRepo)).to.deep.equal();
    });


    it.skip("method for total ammount user spent on trips this year and include 10% travel fee", function () {
      console.log(tripRepo.yearlyCost(42, destRepo))
      expect(tripRepo.yearlyCost(42, destRepo)).to.deep.equal();
    });

});
