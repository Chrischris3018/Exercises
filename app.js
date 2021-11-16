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

// just a console log for ourselves.
console.log(sum(7,3))

const fromDollarToYen = function(valueinDollar){
    let yen = oneEuroIs.JPY*valueinDollar/oneEuroIs.USD
    return yen
}
const fromYenToPound = function(valueinYen){
    let pound = oneEuroIs.GBP*valueinYen/oneEuroIs.JPY
    return pound
}
// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
console.log(fromDollarToYen(100))
console.log(fromYenToPound(127.9))