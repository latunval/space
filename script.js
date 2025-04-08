// step1

const planetLog = [
    {name: "Mars", distance: 78, explored: false, type : "gas"},
    {name: "Jupiter", distance: 200, explored: true, type : "Rocky"},
    {name: "saturn", distance: 300, explored: false, type : "Rocky"},
    {name: "Uranus", distance: 500, explored: true, type : "ice"},
    {name: "Neptune", distance: 25, explored: false, type : "ice"},
    {name: "Mecury", distance: 250, explored: true, type : "ice"},
    {name: "Earth", distance: 250, explored: true, type : "ice"}
];
console.table(planetLog);

// step 2

for (let i = 0; i < planetLog.length; i++) {
    // const element = array[i];
    if (planetLog[i].explored === true) {
        console.log(`explored : ${planetLog[i].name} ${planetLog[i].type}`);
        // return
    }
    else { if (planetLog[i].explored === false && planetLog[i].distance < 100){
        console.log(`Nearby : ${planetLog[i].name} ${planetLog[i].distance}`);
        // return
    }
    else  {
        console.log(`Uncharted : ${planetLog[i].name} ${planetLog[i].distance}`);
    }
}
}

// step 3

const validate = function (planet) {
if (!planet.name || planet.name === null || !planet.explored ) {
    return `Error: ${planet.name} has incomplete data!`;
}
return `${planet.name}`
}
 for (let i in planetLog) {
    const review = validate(planetLog[i])
    console.log(review);
    
 }

//  step 4
 const getClose =function() {
    const closePlanet = planetLog.filter(planet => planet.distance < 200 && planet.explored === false);
    if (closePlanet.length > 0) {
        console.table(closePlanet);
        // return
    }else {
console.log("No close unexplored planets!" );
    }
 }
 getClose()
//  console.table(getClose)

// step 5

const markExplored = function(name) {
    if (!name) {
        console.log("Please provide a valid planet name!");
        return;
    }

    const planet = planetLog.find(planet => planet.name.toLowerCase() === name.toLowerCase());

    if (planet) {
        if (!planet.explored) {
            planet.explored = true;
            console.log(`${planet.name} has been explored!`);
        } else {
            console.log(`${planet.name} is already explored!`);
        }
    } else {
        console.log("Planet not in log!");
    }
};

// Example usage:
markExplored("Mars");
markExplored("Pluto");
markExplored(null);
