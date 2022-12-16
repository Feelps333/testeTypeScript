"use strict";
let nome = 'Felipe';
function resumo(usuario) {
    return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`;
}
resumo({
    nome: "Felipe",
    idade: 25
});
