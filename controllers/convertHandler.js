function ConvertHandler() {
  this.getNum = function (input) {
    console.log("input", input);
    if (input === "") return 1;
    if (!/\d/.test(input)) return 1;
    let result = input.match(/^(\d+(\.\d+){0,1}(\/\d+(\.\d+){0,1}){0,1})[A-Za-z]*$/);
    if (!result) return null;
    if (result[1].includes("/")) {
      let [op1, op2] = result[1].split("/");
      return Number(op1) / Number(op2);
    } else {
      return Number(result[1]);
    }
  };

  this.getUnit = function (input) {
    let result = input.match(/(gal|l|lbs|kg|mi|kg)$/i);
    return result[1] === "l" || result[1] === "L" ? result[1].toUpperCase() : result[1].toLowerCase();
  };

  this.getReturnUnit = function (initUnit) {
    if (initUnit === "gal") return "L";
    if (initUnit === "L") return "gal";
    if (initUnit === "lbs") return "kg";
    if (initUnit === "kg") return "lbs";
    if (initUnit === "mi") return "km";
    if (initUnit === "km") return "mi";
  };

  this.spellOutUnit = function (initNum, initUnit, returnNum, returnUnit) {
    console.log("hi");
    let dict = {
      gal: "gallons",
      L: "liters",
      lbs: "pounds",
      kg: "kilograms",
      mi: "miles",
      km: "kilometers",
    };
    let result = `${initNum} ${dict[initUnit]} converts to ${parseFloat(returnNum.toFixed(5))} ${dict[returnUnit]}`;
    console.log("spellOut===========>", result);
    return result;
  };

  this.convert = function (initNum, initUnit) {
    let result;
    if (initUnit === "gal") result = initNum * 3.78541;
    if (initUnit === "L") result = initNum * 0.26417;
    if (initUnit === "lbs") result = initNum * 0.453592;
    if (initUnit === "kg") result = initNum * 2.20462;
    if (initUnit === "mi") result = initNum * 1.60934;
    if (initUnit === "km") result = initNum * 0.62137;
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit, spellOutUnit) {
    let result = `{"initNum":${initNum},"initUnit":"${initUnit}","returnNum":${parseFloat(returnNum.toFixed(5))},"returnUnit":"${returnUnit}","string":"${spellOutUnit}"}`;
    console.log("toString===========>", result);
    return result;
  };
}

module.exports = ConvertHandler;
