let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

const fromDollarToYen = function(valueinDollar){
    let yen = oneEuroIs.JPY*valueinDollar/oneEuroIs.USD
    return yen
}
const fromYenToPound = function(valueinYen){
    let pounds = oneEuroIs.GBP*valueinYen/oneEuroIs.JPY
    return pounds
}
// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
console.log(fromDollarToYen(102))
console.log(fromYenToPound(150))
console.log(fromEuroToDollar(3.5))