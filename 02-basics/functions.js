"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
function getUpper(str) {
    return str.toUpperCase();
}
function signUp(name, email, password, isPaid) {
}
var login = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var heros = ["spiderman", "batman", "superman"];
// const heros = [1, 2, 3]
heros.map(function (itm) {
    return "Hero is ".concat(itm);
});
// no return type
function logError(errormsg) {
    console.log(errormsg);
}
// terminate but no return type
function handleError(errormsg) {
    throw new Error(errormsg);
}
addTwo(5);
getUpper("hello, man");
signUp("frimps", "frimps", "test", true);
login("frims", "frims");
