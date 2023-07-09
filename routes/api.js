"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();
  app.route("/api/convert").get(function (req, res) {
    let input = req.query.input;
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);
    if (!initNum && !initUnit) {
      res.send("Invalid number and unit");
    } else if (!initNum) {
      res.send("Invalid number");
    } else if (!initUnit) {
      res.send("Invalid unit");
    }
    let returnNum = convertHandler.convert(initNum, initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    // let spellOutUnit = convertHandler.spellOutUnit(unit);
    let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
  });
};
