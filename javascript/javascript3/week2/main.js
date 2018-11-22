console.log('JavaScript 03 Week 02');

let arr = [];
for (let i = 1; i <= 1000; i++){
    arr.push(i)
}
console.log(arr);

//-------------------------------------------------//
//function makeAdder(x) {
//  return function(y) {
//    if(y % x === 0){
//        console.log('can be divided')
//    } else {
//        console.log('can\'t be divided!')
//    }
//  };
//}
//
//let dividedBy3 = makeAdder(3);
//console.log(dividedBy3(11));
//console.log(dividedBy3(15));

//-------------------------------------------------//
//function divisibilityChecker(x){
//    return function (y){
//        return x * y
//    }
//}
//
//let multiplyBy = divisibilityChecker(5);
//console.log(multiplyBy(4));

//----------------Part 1----------------//
function divisibilityChecker(anyNumber){
    return function(divideBy){
        return anyNumber % divideBy === 0
    }
}

let divisibilityCheckerFive = divisibilityChecker(15);
console.log(divisibilityCheckerFive(5)); //true
console.log(divisibilityCheckerFive(4)); //false

//-------------------------------------------------//

