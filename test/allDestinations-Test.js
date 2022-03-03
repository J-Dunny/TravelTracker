import chai from 'chai';
import DestinationsRepository from '../src/DesitinationsRepository';
import destinations from '../src/data/allDestinationsData';
const expect = chai.expect;


describe('See if the tests are running', function() {
const destRepo = new DestinationsRepository();

  it('should return true', function() {
    expect(true).to.equal(true);
  });

  it("should be a function", function () {
    expect(DestinationsRepository).to.be.a("function");
  });

  it("should be a instance of DestintationRepository", function () {
    expect(destRepo).to.be.an.instanceOf(DestinationsRepository);
  });

  // it.skip('should have a method to return all flights: past, present, upcoming, and pending', function() {
  //   expect(true).to.equal(true);
  // });







});
