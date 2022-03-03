class Trip {
    constructor(tripObj){
        this.id = tripObj.id;
        this.userID = tripObj.userID;
        this.destinationID = tripObj.destinationID;
        this.travelers = tripObj.travelers;
        this.date = tripObj.date;
        this.duration = tripObj.duration;
        this.status = tripObj.status;
        this.suggestedActivities = tripObj.suggestedActivities;
    }
}
//method to display trip info
//sad path for if there is no trip

export default Trip