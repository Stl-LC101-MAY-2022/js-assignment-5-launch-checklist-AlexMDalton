// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   document.innerHTML = `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`;
}

function validateInput(testInput) {
   if(testInput.trim() == "" || testInput == null){
    return "Empty";
   } else if(!isNaN(testInput)){
    return "Is a Number";
   } else if(isNaN(testInput)){
    return "Not a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    const submission = [pilot,copilot,fuelLevel,cargoLevel];
        for(let i=0; i < submission.length;i++){
            let input = validateInput(submission[i]);
            if(input === "Empty"){
                return window.alert("All fields are required.");
            } else if(((i < 2) && (input === "Is a Number")) || ((i > 2) && (input ==="Not a Number"))){
                return window.alert("Please enter valid info for each field.")
            }
        }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
