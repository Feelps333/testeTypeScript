"use strict";
// exemplo 1
function mostarTexto(texto, alinhamento) {
    return `<div style="text-align: ${alinhamento}">${texto}</div>`;
}
mostarTexto('Felipe', 'left');
mostarTexto('Felipe', 'right');
mostarTexto('Felipe', 'center');
function temNome(nome) {
    if (nome !== '') {
        return true;
    }
    else {
        return false;
    }
}
function config(props) {
}
config({ width: 100, height: 200 });
config('auto');
// config('automatico') exemplo nao funcional
