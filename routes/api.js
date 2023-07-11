"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();
  app.route("/api/convert").get(function (req, res) {
    let input = req.query.input;
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);
    let returnNum = convertHandler.convert(initNum, initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    console.log("initNum", initNum, "initUnit", initUnit, "returnNum", returnNum, "returnUnit", returnUnit);
    let spellOutUnit = convertHandler.spellOutUnit(initNum, initUnit, returnNum, returnUnit);
    let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit, spellOutUnit);
    console.log("hiiiiii");
    // res.send(spellOutUnit);
    res.send(toString);
    // if (!initNum && !initUnit) {
    //   res.send("invalid number and unit");
    // } else if (!initNum) {
    //   res.send("invalid number");
    // } else if (!initUnit) {
    //   res.send("invalid unit");
    // } else {
    //   res.send(toString);
    // }
  });
};
