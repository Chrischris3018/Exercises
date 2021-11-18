// import the function sum from the app.js file
const { expect } = require('@jest/globals');
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){

    // use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5)
    
    // this is the comparison for the unit test
     expect(dollars).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 114.16 yen", function(){
    const yen = fromDollarToYen(102)
    expect(yen).toBe(10871.500000000002);
})

test("One yen should be 0.0065 pounds", function(){
        const pounds = fromDollarToYen(567)
        expect(pounds).toBe(60432.75000000001);
    })