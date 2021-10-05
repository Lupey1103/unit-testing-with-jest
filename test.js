const { sum } = require('./app.js');

test('add 15 = 9 to euual 23', () => {
    let total = sum(14,9);

    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 127.9 yen", function(){
    const { fromDollarToYen } = require('./app.js')
    const yen = fromDollarToYen(9.6)
    const expected = 9.6 / 1.2 * 127.9;

    expect(fromDollarToYen(9.6)).toBe(1023.2);
})

test("One yen should be 0.8 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    const euro = fromYenToPound(66.6)
    const expected = 66.6 * 0.8;

    expect(fromYenToPound(66.6)).toBe(53.28);
    
})