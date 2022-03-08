# Travel Tracker

### A front end application built by Jake Dunafon.
Travel Tracker is the final solo project built during Mod 2 of the Turing School of Software & Design. This project was build using Test Driven Development and Oject Oriented Programming to build an interactive site where the user can log in and view their trips and book a new trip. API's were used to fetch and post data. Specs for the project can be viewed [here](https://frontend.turing.edu/projects/travel-tracker.html)

## Goals

- TDD Test Driven Development to build and test structure of classes and methods.
- OOP Object Oriented Programming to design the application. 
- Work with API's to send and recieve data.

### How to Run App
1. Clone down the repo to your machine.
2. Clone the server repo [here](https://github.com/turingschool-examples/travel-tracker-api).
3. Open the root directory for each repo and run npm install to install dependencies.
4. Run npm start in each repo to initialize the webpage and web server.
5. Open the site by copying and pasting the server location http://localhost:8080/ for your URL.

![image](https://media.giphy.com/media/h4Zh3xHe1IZGkTRwBW/giphy.gif)

### Features

- Login: On load, a login form will apear where a user will login with username traveler and then a number between 1-50. The password is travel.
- Dashboard: After the user logs into the page they should all of their trips that they have made and any in the future. On the left side they will see how much they have spent this year on trips.
- Book Trip: A form will be on the left side of the page allowing the user to book a new trip being able to pick the date, duration, number of travelers, and chose a destination from a drop down menu. There is a calculate trip cost button that will show an estimate of how much the new trip will cost.

![image](https://media.giphy.com/media/K2Gr75T9ic41voX7lZ/giphy.gif)


### Technologies Used
- JavaScript
- CSS 
- HTML
- Webpack
- Mocha & Chai for testing
- VS Code

#### Future Improvements 

- Add buttons to seperate past, present, and future trips.
- Allow individual trips to be clicked on and edited.
- Allow trips to be deleted. 

