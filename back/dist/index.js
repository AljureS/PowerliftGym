"use strict";
//PRUEBA VARIABLES TS------------------------------
const num1 = 5;
const bool1 = true;
const str1 = "Said";
console.log(num1);
console.log(bool1);
console.log(str1);
const doctor1 = {
    name: "Pava",
    age: 35,
    especialty: "Dermatologia",
    experience: 6
};
const developer1 = {
    name: "Said",
    age: 35,
    especialty: "BackEnd",
    experience: 6
};
const junta1 = {
    adress: "Crare 54n # 34 -78",
    list: [doctor1, developer1]
};
console.log(junta1);
// FUNCIONES ----------------------------------------------------------
function suma(a, b) {
    console.log(a + b);
}
suma(15, 3);
