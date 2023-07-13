const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  test("Whole number input", function (done) {
    let input = "15kg";
    assert.equal(convertHandler.getNum(input), 15);
    done();
  });
  test("Decimal number input", function (done) {
    let input = "15.5kg";
    assert.equal(convertHandler.getNum(input), 15.5);
    done();
  });
  test("Fractional input", function (done) {
    let input = "1/15kg";
    assert.equal(convertHandler.getNum(input), parseFloat((1 / 15).toFixed(5)));
    done();
  });
  test("Fractional input with a decimal", function (done) {
    let input = "1/15.5kg";
    assert.equal(convertHandler.getNum(input), parseFloat((1 / 15.5).toFixed(5)));
    done();
  });
  test("Double fraction", function (done) {
    let input = "1/3/15kg";
    assert.equal(convertHandler.getNum(input), undefined);
    done();
  });
  test("No numerical input", function (done) {
    let input = "kg";
    assert.equal(convertHandler.getNum(input), 1);
    done();
  });
  test("Valid input unit", function (done) {
    let input = ["gAL", "l", "lBs", "KG", "mi", "Km"];
    let output = ["gal", "L", "lbs", "kg", "mi", "km"];
    input.forEach((unit, index) => assert.equal(convertHandler.getUnit(unit), output[index]));
    done();
  });
  test("Invalid input unit", function (done) {
    let input = "kilogallons";
    assert.equal(convertHandler.getUnit(input), undefined);
    done();
  });
  test("Return unit", function (done) {
    let input = ["gal", "L", "lbs", "kg", "mi", "km"];
    let output = ["L", "gal", "kg", "lbs", "km", "mi"];
    input.forEach((unit, index) => assert.equal(convertHandler.getReturnUnit(unit), output[index]));
    done();
  });
  test("Spelled-out string unit", function (done) {
    let input = ["gal", "L", "lbs", "kg", "mi", "km"];
    let output = { gal: "gallons", L: "liters", lbs: "pounds", kg: "kilograms", mi: "miles", km: "kilometers" };
    input.forEach((unit) => assert.equal(convertHandler.spellOutUnit(unit), output[unit]));
    done();
  });
  test("1gal to L", function (done) {
    assert.equal(convertHandler.convert(1, "gal"), 3.78541);
    done();
  });
  test("1l to gal", function (done) {
    assert.equal(convertHandler.convert(1, "L"), parseFloat((1 / 3.78541).toFixed(5)));
    done();
  });
  test("1lbs to kg", function (done) {
    assert.equal(convertHandler.convert(1, "lbs"), 0.45359);
    done();
  });
  test("1kg to lbs", function (done) {
    assert.equal(convertHandler.convert(1, "kg"), parseFloat((1 / 0.453592).toFixed(5)));
    done();
  });
  test("1mi to km", function (done) {
    assert.equal(convertHandler.convert(1, "mi"), 1.60934);
    done();
  });
  test("1km to mi", function (done) {
    assert.equal(convertHandler.convert(1, "km"), parseFloat((1 / 1.60934).toFixed(5)));
    done();
  });
});
