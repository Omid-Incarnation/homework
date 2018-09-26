/* Age-ify (A future age calculator)*/
const yearOfBirth = 1988;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;
console.log('You will be ' + age + ' years old in ' + yearFuture + '.');

/*Goodboy-Oldboy (A dog age calculator) (Optional)*/
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears === true){
    console.log('Your dog will be ' + dogYear + ' human years old in ' + dogYearFuture + '.');
} else {
    console.log('Your dog will be ' + (dogYear * 7) + ' dogs years old in ' + dogYearFuture + '.');
}

/*Housey pricey (A house price estimator)*/

const peterHousePricePerM = (2500000 - (100 * 300))/(8 * 10 * 10);
console.log('Peter\'s house: ' + peterHousePricePerM + ' Price per Meter');
const juliaHousePricePerM = (1000000 - (70 * 300))/(5 * 11 * 8);
console.log('Julia\'s house: ' + juliaHousePricePerM + ' Price per Meter');
if (peterHousePricePerM > juliaHousePricePerM){
    console.log("Peter paid more than Julia");
} else {
    console.log("Julia paid more than Peter");
};

/*Ez Namey (Startup name generator) (Optional)*/
const firstWords = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o']
const secondWords = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const startupName = firstWords[Math.floor(Math.random()*firstWords.length)] + secondWords[Math.floor(Math.random()*secondWords.length)];

console.log(startupName);
/* Honestly, I have done the last part by chance, I really need to learn more about it :) */