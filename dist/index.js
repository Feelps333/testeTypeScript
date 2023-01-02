"use strict";
// Tipagem em variaveis Basicas
let age = 25;
let firstName = 'Felipe';
const isValid = true;
let idk = 5;
// Tipagem em Arrays 
const listNumbers = [1, 3, 5, 8];
const booolens = [true, false];
const namesOne = ['Felipe', 'Silva'];
// Tupla 
const person = [25, 'Felipe'];
// Lista de Tuplas 
const people = [];
// Intersections 
const productId = 5;
// Enum 
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
console.log(direction);
