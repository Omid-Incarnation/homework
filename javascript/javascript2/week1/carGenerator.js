/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with car objects with random color and speed
 * @param {integer} numberOfCars - The number of cars 
 * @returns {array} Array containing the car objects
 */
function generateCars(numberOfCars) {
    const cars = [];

    const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo'];
    const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];
    
    for (let i = 0; i < numberOfCars; i++) {
        const car = {};
        const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
        const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

        car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0, 100);

        cars.push(car);
    }

    return cars;
}

const cars = generateCars(7);


//Cars with speeds between 30 and 60
   
    //FILTER Method-----( ͡° ͜ʖ ͡°)

const limitedSpeed = cars.filter(n => n.speed > 30 && n.speed < 60);

    //LOOP methos-----└[◥▶ ʖ̯◀◤]┘

//let limitedSpeed = [];
//for (let i = 0; i < cars.length; i++){
//    if(cars[i].speed > 30 && cars[i].speed < 60){
//        limitedSpeed.push(cars[i]);
//    }
//}

// the cars that are not lightyellow

    //FILTER Method-----( ͡° ͜ʖ ͡°)

const nonLightYellow = cars.filter(k => k.color !== "lightyellow");

    //LOOP methos-----└[◥▶ ʖ̯◀◤]┘

//let nonLightYellow = [];
//for (let i = 0; i < cars.length; i ++){
//    if(cars[i].color !== "lightyellow"){
//        nonLightYellow.push(cars[i]);
//    }
//};

//Change to the Danish language
const danishCars = cars.map(cars => {
    return{
        maerke: cars.make,
        farve: cars.color,
        fart: cars.speed,
    }
})

console.log(cars);
console.log(limitedSpeed);
console.log(nonLightYellow);
console.log(danishCars);





