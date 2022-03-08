import chai from 'chai';
import Trip from '../src/Trip';
const expect = chai.expect;

describe('Trip Test', function() {
    const newTrip = new Trip({
        "id": 99,
        "userID": 44,
        "destinationID": 49,
        "travelers": 1,
        "date": "2022/09/16",
        "duration": 8,
        "status": "approved",
        "suggestedActivities": [
          
        ]
      })

  it('should be a function', function() {
    expect(Trip).to.be.a("function");
  });

  it('should hold the id of the trip passed in as an object', function () {
    expect(newTrip.id).to.equal(99);
  });

  it('should hold the id of the user passed in as an object', function () {
    expect(newTrip.userID).to.equal(44);
  });

  it('should hold the destinationID of the user passed in as an object', function () {
    expect(newTrip.destinationID).to.equal(49);
  });

  it('should hold the number of travelers passed in as an object', function () {
    expect(newTrip.travelers).to.equal(1);
  });

  it('should hold the date passed in as an object', function () {
    expect(newTrip.date).to.equal("2022/09/16");
  });

  it('should hold the duration of days passed in as an object', function () {
    expect(newTrip.duration).to.equal(8);
  });

  it('should hold the status passed in as an object', function () {
    expect(newTrip.status).to.equal("approved");
  });

  it('should hold the suggestedActivities passed in as an object', function () {
    expect(newTrip.suggestedActivities).to.deep.equal([]);
  });

});