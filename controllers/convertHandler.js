function ConvertHandler() {
  this.getNum = function (input) {
    if (!/\d/.test(input)) return 1;
    let result = input.match(/^(\d+(\.\d+){0,1}(\/\d+(\.\d+){0,1}){0,1})[A-Za-z]*$/);
    if (!result) return undefined;
    let [op1, op2 = 1] = result[1].split("/");
    return parseFloat((Number(op1) / Number(op2)).toFixed(5));
  };

  this.getUnit = function (input) {
    let result = input.match(/(gal|l|lbs|kg|mi|km)$/i)?.[1]?.toLowerCase();
    return result && (result === "l" ? "L" : result);
  };

  this.getReturnUnit = function (initUnit) {
    let initToReturnUnit = { gal: "L", L: "gal", lbs: "kg", kg: "lbs", mi: "km", km: "mi" };
    return initToReturnUnit[initUnit];
  };

  this.spellOutUnit = function (unit) {
    let fullNames = { gal: "gallons", L: "liters", lbs: "pounds", kg: "kilograms", mi: "miles", km: "kilometers" };
    return fullNames[unit];
  };

  this.convert = function (initNum, initUnit) {
    let convRates = { gal: 3.78541, L: 1 / 3.78541, lbs: 0.453592, kg: 1 / 0.453592, mi: 1.60934, km: 1 / 1.60934 };
    return parseFloat((initNum * convRates[initUnit]).toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
