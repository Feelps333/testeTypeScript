"use strict";
let nome = 'felipe';
let idade = 25;
let n1 = 90;
let programado = true;
let idades = [25, 35, 20];
let nomes = ['Felipe', 'Silva', 'Franca'];
let nomes2 = ['Silva', 'Antonio', 'Feelps'];
function firstLetterUpperCase(name) {
    let firtsLetter = name.charAt(0).toUpperCase();
    return firtsLetter + name.substring(1);
}
let res = firstLetterUpperCase('felipe');
console.log(res);
