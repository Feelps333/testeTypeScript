"use strict";
function resumo2(usuario) {
    if (usuario.idade !== undefined) {
        return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
    }
    else {
        return `Olá ${usuario.idade}, tudo bem?`;
    }
}
let u = {
    nome: 'Felipe',
    idade: 25
};
resumo2(u);
