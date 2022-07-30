// Write your JavaScript code here!

window.addEventListener("load", function() {

   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   let missionTarget = document.getElementById("missionTarget");

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let chosenPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(missionTarget,chosenPlanet.name,chosenPlanet.diameter,chosenPlanet.star,chosenPlanet.distance,chosenPlanet.moons,chosenPlanet.image);
   })
});

window.addEventListener("submit", function(event){

    let listedPlanets;
    let pilotName = document.querySelector("input[name=pilotName]").value;
    let copilotName = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoMass = document.querySelector("input[name=cargoMass]").value;
    let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let launchStatus = document.getElementById("launchStatus");
    let cargoStatus = document.getElementById("cargoStatus");
 
    formSubmission(document,listedPlanets,pilotName,copilotName,fuelLevel,cargoMass);

    pilotStatus.innerHTML = `Pilot ${pilotName} Ready`;
    copilotStatus.innerHTML = `Co-pilot ${copilotName} Ready`;

    if(Number(fuelLevel) < 10000){
        fuelStatus.innerHTML = `Not Enough Fuel`;
        launchStatus.style.color = "red";
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        faultyItems.style.visibility = "visible";
        event.preventDefault();
    } else {
        launchStatus.style.color = "green";
        launchStatus.innerHTML = `Shuttle is ready for launch`;
        event.preventDefault();
    }

    if(Number(cargoMass) > 10000){
        cargoStatus.innerHTML = `Cargo mass too high for launch`;
        launchStatus.style.color = "red";
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        faultyItems.style.visibility = "visible";
        event.preventDefault();
    }

});
