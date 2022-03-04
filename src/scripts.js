// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import {tripsData, destinationsData, allTravelers} from "./apiCalls"


window.onload = (event) => {
    Promise.all([allTravelers, destinationsData, tripsData]).then((data) => {
    console.log(data[2])
  }).catch(err => console.log(err));
  }